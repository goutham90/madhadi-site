---
title: "Database-Layer Data Integrity and DBA Governance"
description: "How GxP data is protected at the database tier: stopping back-end SQL edits that bypass the application audit trail, native database audit logging, DBA segregation, controlled emergency edits, referential and transactional integrity, encryption at rest, and point-in-time recovery."
pubDate: 2026-06-22
tags: ["data-integrity", "database", "21-CFR-Part-11", "dba-governance", "csv", "encryption"]
pillar: "csv-csa"
tier: "Advanced"
---

Most data integrity work stops at the application. Teams configure the [audit trail](/articles/audit-trail-design-and-review) inside the LIMS or chromatography data system, lock down user roles, and call the system controlled. Underneath that application sits a database, and the database does not care what the application thinks. A user with the right database credentials can connect directly with a SQL client, change a stored result, and leave no entry in the application audit trail at all. That is the classic undetectable edit, and it is the gap inspectors increasingly probe once the obvious application-layer controls are in place.

This article covers the database tier specifically: why a back-end edit defeats the application controls, how to detect and prevent it, native database audit logging, segregating the database administrator from the data, controlling emergency direct edits under change control with a QA witness, referential and transactional integrity, encryption at rest, and point-in-time recovery. If you are new to the topic, start with [data integrity foundations](/articles/data-integrity-foundations) and the [audit trail](/articles/audit-trail-design-and-review) article, because the database layer is where many of those application-level assertions either hold up or quietly fail. The audience here is anyone who owns a validated system end to end: validation leads, data integrity owners, system owners, and the IT and database teams who run the infrastructure.

---

## The Back-End Edit That Bypasses the Application Audit Trail

### Why it matters (regulation and risk)

The whole premise of [21 CFR Part 11](/articles/21-cfr-part-11-eu-annex-11) is that an electronic record is trustworthy because the system records who created, modified, or deleted it and does not obscure the prior value. Part 11.10(e) requires "secure, computer-generated, time-stamped audit trails." Part 11.10(c) requires "protection of records to enable their accurate and ready retrieval throughout the records retention period," and 11.10(d) requires "limiting system access to authorized individuals." EU GMP Annex 11 clause 12 carries the same intent: access to data should be physically or logically secured.

Here is the problem those clauses do not solve on their own. The application audit trail is written by the application. When someone connects to the database directly, through a SQL client, an ad hoc query tool, or a script, and runs an `UPDATE` or `DELETE` against the underlying table, the application is never in the loop. No application code runs, so no application audit entry is created. The result value changes, the batch passes, and the only record that the value was ever different lives in the database transaction log, which is the one place most quality teams never look. PIC/S PI 041 calls this out directly: data integrity controls must extend to the database and operating system layers, not just the application that sits on top.

The risk is the most damaging kind. A failing assay result quietly raised above the specification limit. A stability data point nudged to keep a trend in line. A timestamp altered so a late entry looks contemporaneous. Each one is invisible to the application audit trail by design, because the audit trail can only record what passes through the application.

### What the gap actually looks like

Consider a typical three-tier validated system:

<div class="flow">
  <div class="flow-step">Analyst at the application UI</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Application logic (writes audit trail)</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Database tables (results, metadata)</div>
</div>

That is the controlled path. Every edit through the UI is mediated by the application and captured. Now the bypass:

<div class="flow">
  <div class="flow-step">DBA or developer with DB login</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">SQL client (direct connection)</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Database tables (results changed, no app audit entry)</div>
</div>

The application audit trail shows nothing because the application was never involved. This is why an inspector who finds a clean application audit trail will then ask: who has direct database access, and what would stop them editing a result outside the application?

### How to close the gap, step by step

You cannot make direct database access impossible (the system needs administrators), so the strategy is layered: restrict it, log it independently, and reconcile it.

1. **Inventory every account that can connect to the production database directly.** This includes named DBA accounts, the application service account, any reporting or integration accounts, and any developer access that survived go-live. Each one is a potential bypass path.
2. **Remove standing write access wherever it is not strictly required.** Reporting and integration accounts should be read-only. The application service account needs write access (the application uses it), but no human should be sharing that credential.
3. **Restrict interactive query tools.** Lock down which workstations can install or run a SQL client against production, ideally to a controlled jump host with its own logging.
4. **Turn on native database audit logging** (covered in detail below) so that any direct connection and any data manipulation language statement is recorded outside the application.
5. **Make the database audit log immutable and route it off the database server** to a separate log store or SIEM, so a DBA cannot edit the database and then scrub the evidence in the same place.
6. **Reconcile periodically.** Compare the count and nature of edits in the application audit trail against the count of `UPDATE` and `DELETE` statements in the database audit log for GxP tables. The two should agree. A direct edit shows up as a database-log change with no matching application-audit entry, which is the exact signature you are hunting.

### Acceptance criteria

The bypass is controlled when: every direct-access account is inventoried and justified; no human shares the application service credential; native database auditing captures all data manipulation against GxP tables; the database audit log is stored where the DBA cannot alter it; and a documented reconciliation can demonstrate that data manipulation language activity against GxP tables matches application-mediated changes, with any difference investigated.

### Worked example

A QC laboratory runs a LIMS on a relational database. During an internal audit, the team exports the database audit log for one quarter and the LIMS application audit trail for the same period, for the `SAMPLE_RESULT` table. The application trail shows 4,118 result modifications, all through the UI, all with reasons. The database audit log shows 4,121 `UPDATE` statements against `SAMPLE_RESULT`. Three statements came from a named DBA account, not the application service account, on a Saturday afternoon. None of the three appears in the application audit trail. The team escalates to a deviation. Two turn out to be a legitimate, but undocumented, data fix performed during a system patch; the third was a result changed from out of specification to passing with no record anywhere. That third edit is a critical data integrity event, and it was found only because the two logs were reconciled. Had the team trusted the clean application audit trail alone, it would never have surfaced.

---

## Native Database Audit Logging

### Why it matters

If the application audit trail can be bypassed at the database tier, you need an independent control at that tier. Native database auditing is that control. It records activity at the database engine level, below the application, so it captures the very actions the application cannot see. Annex 11 clause 9 (audit trails) and PI 041 both support the principle that audit coverage should match where the risk lives, and for direct manipulation the risk lives in the database.

### What to capture

Database auditing can be tuned from "almost nothing" to "every statement," and the wrong setting in either direction is a problem: too little misses the bypass, too much buries it and crushes performance. A risk-based scope for a GxP database typically captures:

| Event category | Capture? | Rationale |
|---|---|---|
| Logon and logoff (all accounts) | Yes | Establishes who connected directly and when |
| Failed logon attempts | Yes | Surfaces probing and credential misuse |
| `UPDATE`, `DELETE`, `INSERT` on GxP data tables | Yes | The direct-edit signature |
| `TRUNCATE`, `DROP` on GxP tables | Yes | Destructive structural changes |
| Grants and privilege changes (`GRANT`, `REVOKE`, role changes) | Yes | Detects privilege escalation |
| Schema changes (data definition language) on production | Yes | Should only happen under change control |
| Changes to the audit configuration itself | Yes | Detects someone turning auditing off |
| Read-only `SELECT` on routine reporting | Risk-based | Often too voluminous; capture for the most sensitive tables only |
| Application service account routine writes | Often summarized | Expected high volume; can be sampled or aggregated rather than line-by-line |

The single most important entry to capture is any change to the audit configuration. If a privileged user can silently disable auditing, change the data, and turn auditing back on, every other control is theater. The audit log must record its own disablement.

### How to implement it, step by step

1. **Define the audit policy** as a controlled document: which tables, which statement types, which accounts, retention period, and where the logs go.
2. **Enable native auditing** using the database platform's built-in capability rather than a homegrown trigger if the platform supports it, because vendor-native auditing is harder for a privileged user to circumvent and is recognized by inspectors.
3. **Write audit records to a destination the DBA does not control:** a separate, append-only log volume, a dedicated audit database with different administrators, or a SIEM. Routing off-box is the control that makes the log credible.
4. **Protect the audit log from modification.** Use append-only storage or an external store. The person who can change the data must not be able to change the record of that change. This is the same principle the [audit trail](/articles/audit-trail-design-and-review) article applies at the application layer, pushed down a tier.
5. **Validate the auditing as part of computer system validation.** Treat "database auditing captures a direct edit" as a test case: connect directly, change a row, and confirm the entry appears in the off-box log with user, timestamp, statement, and (where the platform supports it) prior value. See [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology) for scoping this into the validation effort.
6. **Set retention** to at least the retention period of the data the database holds. An audit log that ages out before the records it protects is a gap.
7. **Review the log on a defined cadence,** focusing on direct (non-application) connections, privilege changes, and audit-configuration changes. Reading every line is neither feasible nor expected; review by exception, the same discipline used for application audit trail review.

### A subtle point: prior values at the database tier

Application audit trails capture old and new values because the application code reads the old value before writing the new one. Native database auditing often captures the statement that ran (`UPDATE SAMPLE_RESULT SET VALUE=99.1 WHERE ID=4417`) but not necessarily the value that was there before. To reconstruct the prior value you usually need the transaction log or a point-in-time copy (covered later). Know which your platform gives you. If the native audit captures only the statement, your prior-value evidence lives in the transaction log and recovery chain, which is one more reason those must be protected too.

### Acceptance criteria

Database auditing is adequate when it captures logons, data manipulation and definition on GxP tables, privilege changes, and changes to the audit configuration itself; when the log is stored off the database server in an immutable form; when retention meets or exceeds data retention; when the auditing was validated by demonstrating it catches a direct edit; and when a documented review of the log happens on a defined schedule.

### Common mistakes

- Auditing enabled but written to a table on the same database the DBA administers, so the DBA can edit the audit log.
- Capturing `SELECT` on everything, drowning the real signal and degrading performance until someone "temporarily" turns auditing off.
- No capture of audit-configuration changes, so disabling auditing leaves no trace.
- Retention set to 90 days on an audit log protecting records kept for years.

---

## Segregating the DBA from the Data and from QA

### Why it matters

Segregation of duties is a foundational integrity control, and at the database tier it has a specific shape: the person who keeps the database running (the DBA) should not also be a person with a stake in what the data says. A DBA who is independent of the laboratory, manufacturing, and quality functions has no motive to alter a result and no authority over its meaning. The moment the DBA role overlaps with the data-owning function, the bypass path described above acquires a motive. Annex 11 clause 2 expects that personnel have defined responsibilities, and the data integrity guidances (MHRA 2018, PI 041) all treat segregation of duties as a primary control against falsification.

### What segregation looks like here

| Function | Should hold | Should NOT hold |
|---|---|---|
| DBA (IT) | Database availability, performance, backup, recovery, infrastructure-level config | The ability to silently alter GxP business data; ownership of what the data means |
| Data originator (analyst, operator) | Entering and correcting data through the application | Direct database write credentials |
| System owner (business) | Accountability for correct configuration and use | DBA-level OS or database admin rights |
| Quality Assurance | Oversight, approval of changes, witnessing emergency edits | Day-to-day DBA duties (cannot witness its own work) |
| Application service account | Application-mediated reads and writes | Use by a human as a shared login |

The two segregations that matter most: the DBA must not be the data owner, and QA must be independent of whoever performs a direct edit so QA can witness it. If the same person runs the database and signs off the quality of the data in it, there is no independent check on a back-end change.

### How to implement it

1. **Place the DBA function in IT, organizationally separate from QC, manufacturing, and QA.** Reporting lines matter; a DBA who reports to the lab manager is not independent of the lab's results.
2. **Give the DBA the rights to run the database, not to mean the data.** A DBA needs to back up, restore, tune, and patch. A DBA does not need to routinely change result values, and any time they must, it goes through the controlled emergency process below.
3. **Use named accounts, never shared admin logins.** Every privileged action must attribute to one human. A shared `dba` or `sa` login breaks attributability the same way a shared application login does.
4. **Keep QA out of DBA duties** so QA can serve as the independent witness for emergency edits. QA cannot witness work QA performed.
5. **Document the segregation** in the [data governance framework](/articles/data-governance-framework) and the system's access matrix, and reconcile it during periodic access reviews. See [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control) for the access-review mechanics.

### Acceptance criteria

Segregation is sound when the DBA function is organizationally independent of the data-owning functions; when no privileged database action uses a shared account; when QA holds no DBA duties and can therefore witness direct edits independently; and when the access matrix shows, account by account, that no single person can both alter GxP data at the database tier and approve or witness that alteration.

### Compensating controls for small organizations

Small sites often cannot fully separate roles, for example one person is both the DBA and a senior analyst. Where true segregation is impossible, document a compensating control: an independent second person (often QA or an external party) reviews 100 percent of that person's privileged database activity from the off-box audit log on a defined frequency, and emergency edits require a witness who is not the person making the change. The control must be written, performed, and recorded, not merely intended.

---

## Controlled, Logged Emergency Direct Edits Under Change Control with a QA Witness

### Why it matters

Sometimes a direct database edit is genuinely necessary: a data corruption that the application cannot fix, a stuck workflow blocking batch release, a migration defect that left orphaned rows. Pretending these never happen produces the worst outcome, an undocumented back-end edit done quietly under time pressure. The mature position is to acknowledge that direct edits occasionally must occur and to wrap them in a controlled process so tightly that each one is fully reconstructable. This sits inside [change control](/articles/change-control-validated-systems), and the data integrity guidances expect that any change to a GxP record outside the normal application path is justified, approved, executed under control, verified, and recorded.

### What the controlled process contains

Every emergency direct edit needs all of the following, captured before, during, and after:

- A documented justification: what is wrong, why the application cannot fix it, what the business or compliance impact of not fixing it is.
- Pre-authorization under change control, with QA approval, before any change is made. An emergency does not mean unapproved; it means an expedited approval path that still has QA in it.
- The exact SQL prepared and reviewed in advance, including the `WHERE` clause, so the scope is known before execution. A reviewed statement that touches one row by primary key is controlled; an unreviewed `UPDATE` with a loose `WHERE` that could touch thousands is not.
- A before image: the current value(s) captured (a `SELECT` of the affected rows, saved) so the prior state is provable.
- Execution inside a transaction with an explicit verification step before commit, so the change can be confirmed against expectation and rolled back if wrong.
- A QA witness physically or remotely present during execution, attesting that what was run matched what was approved.
- An after image: the changed value(s) captured to prove the edit did exactly what was authorized and nothing more.
- The whole package retained in the change record, and the action also visible in the native database audit log, so two independent records agree.

### How to run one, step by step

1. **Raise the change** describing the defect, the proposed SQL, the affected records identified by primary key, and the rollback plan. Attach the application-side evidence of the problem.
2. **QA and the system owner review and approve** before anything is executed. For a true emergency, use the documented expedited path, but QA approval still precedes execution.
3. **Capture the before image:** run and save a `SELECT` of exactly the rows to be changed.
4. **Execute in a transaction** (`BEGIN TRANSACTION`), run the exact approved statement, then run a verifying `SELECT` to confirm the new state and the row count affected.
5. **QA witnesses** the verification: row count matches expectation, values match the authorization. Only then `COMMIT`. If anything is off, `ROLLBACK` and re-plan.
6. **Capture the after image** and attach both images to the change record.
7. **Confirm the native database audit log** recorded the statement, and that the row count there matches the change record. The two independent trails must agree.
8. **Assess downstream impact:** does the edited value feed a calculation, a release decision, a submission? Trigger the relevant [deviation or impact assessment](/articles/deviation-management) if so.
9. **Close the change** with the verification, both images, the witness attestation, and the audit-log confirmation.

### Acceptance criteria

An emergency edit is defensible when it was approved by QA before execution; when the exact statement and affected rows were reviewed in advance; when before and after images prove the prior and resulting state; when it ran in a transaction with verification before commit; when a QA witness independent of the executor attested to it; when the native database audit log independently corroborates it; and when downstream data impact was assessed. If any of those is missing, the edit looks indistinguishable from a falsification attempt, regardless of intent.

### Worked example

A MES leaves a batch record in an inconsistent state: an equipment cleaning status flag did not update, blocking the next phase, and the application has no path to clear it. The team raises an expedited change (CHG-2026-0337). The proposed statement updates one field on one row identified by batch ID and phase ID: `UPDATE BATCH_PHASE SET CLEAN_STATUS='VERIFIED' WHERE BATCH_ID='B-2026-0991' AND PHASE_ID=4`. QA and the system owner approve before execution. The DBA captures the before image (`CLEAN_STATUS='PENDING'`), opens a transaction, runs the statement, and runs a verifying select returning one row, `CLEAN_STATUS='VERIFIED'`, rows affected = 1. QA witnesses that the row count is one and the value matches the approval, and authorizes the commit. The after image is captured. The native database audit log shows one `UPDATE` from the named DBA account at that timestamp against `BATCH_PHASE`, matching the change record. The change closes with both images, the witness signature, and the audit-log reference. An inspector reviewing this sees a fully reconstructable, justified, witnessed, independently corroborated edit, the opposite of an undetectable change.

### Common mistakes

- Edit first, paperwork later. The "emergency" label used to skip pre-approval. QA approval must precede execution.
- An `UPDATE` with no `WHERE` or a loose `WHERE` that affects more rows than intended, with no row-count check before commit.
- No before image, so the prior value can never be proven and the edit cannot be reversed with confidence.
- No QA witness, so there is no independent attestation that the executed statement matched the approval.
- Running outside a transaction, so a mistake commits instantly with no rollback.

---

## Referential and Transactional Integrity

### Why it matters

Data integrity at the record level is not only about whether a value was tampered with. It is also about whether the data is internally consistent: a result that points to a sample that exists, a batch phase that belongs to a real batch, a set of related rows that all committed together or not at all. If the database lets orphaned or half-written rows exist, the record can be wrong without anyone editing anything maliciously. ALCOA+ asks records to be Complete, Consistent, and Accurate; referential and transactional integrity are the database mechanisms that make those attributes true at the structural level. See [data integrity foundations](/articles/data-integrity-foundations) for the ALCOA+ framing.

### Referential integrity

Referential integrity means a value in one table that refers to a row in another table actually points to a real row. It is enforced with foreign key constraints. If `SAMPLE_RESULT.SAMPLE_ID` is a foreign key to `SAMPLE.ID`, the database will not let you insert a result for a sample that does not exist, and (depending on configuration) will not let you delete a sample that still has results. Without that constraint, a careless delete or a buggy migration can leave a result that belongs to nothing, an orphaned row that is, in effect, a record with no provenance.

How to apply it:

1. **Define foreign key constraints** on every relationship where a GxP record depends on another (results to samples, phases to batches, signatures to records).
2. **Choose delete behavior deliberately:** typically restrict (block deletion of a parent that has children) for GxP data, rather than cascade-delete, so a single deletion cannot silently remove a chain of dependent records.
3. **Verify the constraints exist** as part of validation by attempting to insert an orphan and confirming the database rejects it.
4. **Reconcile periodically** for orphaned rows: results whose sample ID matches no sample, signatures whose record ID matches nothing. Any orphan found is investigated, because it means a control was missing when the data was created or moved.

### Transactional integrity

Transactional integrity means a group of related changes either all happen or none happen. Databases provide this through ACID transactions (Atomicity, Consistency, Isolation, Durability). When a sample is logged with three results and an audit entry, all of those should commit as one unit. If the system fails halfway, atomicity guarantees the partial work rolls back rather than leaving two results and no audit entry. This matters enormously for the audit trail: a design where the data row commits in one transaction and the audit entry commits in a separate one can, on failure, leave a changed value with no audit record, recreating the bypass problem by accident.

How to apply it:

1. **Confirm the application writes data and its audit entry in the same transaction,** so they are inseparable. This is an application design point you verify during validation, not a setting you toggle.
2. **Confirm the database is configured for durable, ACID-compliant commits** (the default for mainstream relational engines, but verify, especially for any in-memory or eventually-consistent component).
3. **Test failure behavior:** simulate an interruption mid-write and confirm the database rolled back cleanly with no partial records and no data-without-audit-entry.

### Acceptance criteria

Structural integrity is sound when foreign key constraints enforce every GxP relationship; when GxP parent deletions are restricted rather than silently cascading; when a periodic orphan-row reconciliation closes to zero unexplained items; when data and its audit entry commit in a single transaction; and when a simulated mid-write failure leaves no partial or audit-less records.

### Common mistakes

- Foreign keys defined in the data model but disabled in production "for performance," allowing orphans.
- Cascade-delete on a GxP parent table, so deleting one row silently removes a chain of dependent results.
- Data and audit entries written in separate transactions, so a crash can leave a changed value with no audit record.
- No periodic orphan check, so structural corruption from an old migration sits undiscovered for years.

---

## Encryption at Rest

### Why it matters

Encryption at rest protects the database files, backups, and transaction logs from being read or altered by someone who gets at the storage directly, bypassing the database engine and its access controls entirely. Annex 11 clause 12 expects data to be secured against damage and unauthorized access; Part 11.10(c) requires protection of records. If an attacker, or a careless insider, can copy the raw database files or a backup tape and open them, every database-tier access control is moot. Encryption at rest closes that path. It is also increasingly an expectation under data protection regimes and security frameworks that overlap with GxP systems. See [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control) for the broader security picture.

### What to encrypt and how

Encryption at rest should cover the live database files, the transaction logs, and every backup copy, because a backup is just an unencrypted copy of your data sitting somewhere else if you forget it. The common implementation is transparent data encryption at the database or storage layer, which encrypts the files on disk while letting the database engine read them normally, so applications need no change.

How to implement it, step by step:

1. **Enable encryption at rest** for the database files and transaction logs, typically transparent data encryption provided by the database platform or the underlying storage.
2. **Encrypt backups too,** and verify the backup encryption independently. An encrypted live database with plaintext backups is a half measure that attackers and auditors both notice.
3. **Manage the keys properly:** store encryption keys separately from the data, in a key management system or hardware security module, with their own access controls and rotation policy. A key sitting in plaintext next to the data it protects is no protection at all.
4. **Define key recovery and escrow** so that losing a key does not mean losing the data permanently. Key loss can render encrypted backups unrecoverable, which is a different kind of data integrity disaster.
5. **Validate it** by confirming that the raw files on disk are unreadable without the key, and, critically, that a normal restore still works (so encryption did not break recoverability).
6. **Document the scheme** in the system security documentation and the validation package.

### Acceptance criteria

Encryption at rest is adequate when the live database, transaction logs, and all backups are encrypted; when keys are stored and managed separately from the data with defined rotation and recovery; when raw files are demonstrably unreadable without the key; and when an encrypted backup can still be restored successfully (proving encryption did not compromise recoverability).

### Common mistakes

- Live database encrypted, backups written to disk or tape in plaintext.
- Encryption keys stored on the same server as the encrypted data, defeating the purpose.
- No key recovery plan, so a lost key turns encrypted backups into permanently unreadable files.
- Treating encryption as a substitute for access control; encryption protects against storage-level access, not against an authorized user making a bad change.

---

## Point-in-Time Recovery

### Why it matters

Point-in-time recovery is the ability to restore the database to its exact state at a chosen moment, for example one second before a bad change committed. It serves data integrity in two ways. First, it is the recovery mechanism when data is corrupted, deleted, or wrongly edited: you can put the records back to a known-good state. Second, it is an investigative tool: by restoring a point-in-time copy, you can read the prior values that the native audit log may not have captured and prove what a record looked like before a contested change. Part 11.10(c)'s requirement for accurate retrieval throughout the retention period, and the recovery expectations in [backup and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation), both point here.

### How point-in-time recovery works

It depends on two things together: a full backup taken at some baseline, plus the chain of transaction logs from that baseline to the recovery target. The database replays the transaction logs forward from the last full backup up to the precise moment you choose. This is why the transaction log is not just an internal database detail; it is the record of every change and the substrate of both recovery and prior-value reconstruction. If the transaction log is truncated, lost, or not backed up, point-in-time recovery is impossible and you can only restore to the last full backup, losing everything since.

How to establish it, step by step:

1. **Configure the database in a recovery mode that retains transaction logs** (the full or equivalent recovery model, not a simple mode that discards them).
2. **Back up the transaction logs on a frequency that matches your tolerance for loss** (your recovery point objective). Logs backed up every 15 minutes mean at most 15 minutes of data is at risk.
3. **Protect the log backups** with the same encryption and off-site storage as full backups, and the same immutability so they cannot be altered.
4. **Document the recovery point objective and recovery time objective** for the system, derived from data criticality, and confirm the backup frequency meets the recovery point objective.
5. **Test point-in-time recovery for real,** not just a full restore: pick a target time, restore the full backup, replay logs to that time, and confirm the data matches the expected state at that moment. A recovery capability that has never been tested to a specific point is an assumption, not a control.
6. **Retain the capability for the data retention period,** which usually means retaining enough backups and logs (or periodic archival full backups) to reconstruct any required point in time within scope.

### Acceptance criteria

Point-in-time recovery is sound when the database retains transaction logs; when log backups occur at a frequency meeting a documented recovery point objective; when log backups are encrypted, off-site, and immutable; when a point-in-time recovery to a specific past moment has been tested and verified, not just a full restore; and when the capability spans the required retention period.

### Worked example

An analyst reports that a stability result for one batch "looks wrong" and suspects it was altered around a known date. The native database audit log shows an `UPDATE` to that row but captured only the statement, not the prior value. The team uses point-in-time recovery: they restore a copy of the database to a test environment as of one minute before the suspect `UPDATE`, read the original value, and compare it to the current value and to the source instrument data. The point-in-time copy proves the value was changed from 96.1 to 98.4, the instrument raw data confirms 96.1 was correct, and the change had no application audit entry. The recovery capability turned a vague suspicion into provable fact and supplied the prior value that no other control had retained. Without point-in-time recovery, the prior value would have been unknowable and the investigation would have stalled.

### Common mistakes

- Database in a simple recovery mode that discards transaction logs, making point-in-time recovery impossible.
- Full backups taken nightly but transaction logs never backed up, so recovery loses a full day and prior-value reconstruction is unavailable.
- Recovery point and recovery time objectives never defined, so backup frequency is arbitrary.
- "Restore tested" means only a full restore was tested, never a recovery to a specific point in time.

---

## Roles and Responsibilities

Database-tier integrity fails when no one owns a given control. Map it explicitly in the data governance framework and the system procedures.

| Role | Owns |
|---|---|
| System owner (business) | That database controls match the data's criticality; that reconciliations and reviews happen and findings are actioned |
| DBA (IT) | Native auditing, encryption at rest, backups and transaction logs, point-in-time recovery, referential and transactional configuration; explicitly NOT silently altering GxP business data |
| Quality Assurance | Approving emergency-edit changes before execution; witnessing direct edits; oversight of database-audit-log review; inspection defense |
| Validation | Verifying database controls (auditing, constraints, encryption, recovery, transaction behavior) during qualification and after change |
| IT security | Key management, off-box log storage, access reviews of privileged database accounts |
| Data originator (analyst, operator) | Entering and correcting data only through the application, never via direct database access |

The decisive segregation: the DBA who can technically alter the data must never be able to do so silently (native auditing off-box prevents that), must never be the data owner, and must never witness their own emergency edit (QA does that, independently).

---

## What an Inspector Probes at the Database Tier

Once the application controls look clean, a sophisticated inspector moves down a layer:

1. **They ask who has direct database access** and request the account list, then ask what stops any of those accounts editing a result outside the application.
2. **They ask to see the native database audit log** and where it is stored, specifically whether the DBA can edit it.
3. **They ask how you would detect a back-end edit,** looking for the reconciliation between application audit trail and database audit log.
4. **They probe emergency direct edits:** have any occurred, and can you show the change record with pre-approval, before and after images, and a QA witness for one.
5. **They check whether disabling the audit configuration is itself logged.**
6. **They ask about encryption at rest and key management,** and whether backups are encrypted.
7. **They ask you to demonstrate or evidence a point-in-time recovery test,** not just a full restore.

The thread is the same one as at the application layer: they are looking for daylight between what the official record says and what the lower layers could allow to happen unrecorded. Prepare with [FDA inspection readiness](/articles/fda-inspection-readiness) discipline applied one tier down.

---

## Interview Questions and How to Answer Them

**"How can someone change a GxP result without the application audit trail recording it?"** By connecting directly to the database with a SQL client and running an `UPDATE` or `DELETE` against the table. The application never runs, so it writes no audit entry. The only record is the database transaction log and, if configured, the native database audit log. This is the classic undetectable edit, and the defense is native auditing plus reconciliation against the application trail.

**"What is native database auditing and why do you need it if the application already has an audit trail?"** Native auditing records activity at the database engine level, below the application, so it captures direct connections and statements the application cannot see. You need it precisely because the application trail can be bypassed at the database tier. The native log must be stored off the database server so the DBA cannot alter it, and it must capture changes to its own configuration.

**"How do you control a direct database edit when one is genuinely necessary?"** Through change control: documented justification, QA approval before execution, the exact reviewed SQL with a scoped `WHERE`, a captured before image, execution in a transaction with a verifying select and row-count check before commit, a QA witness independent of the executor, a captured after image, and confirmation that the native audit log corroborates it. Emergency means expedited approval, not skipped approval.

**"Why must the DBA be segregated from the data owner and from QA?"** Independence removes both motive and unchecked authority. A DBA independent of the lab has no stake in the results; QA independent of the DBA can witness a direct edit without witnessing its own work. If the same person runs the database and signs off the data's quality, there is no independent check on a back-end change.

**"What is the difference between referential and transactional integrity?"** Referential integrity (foreign keys) ensures a record points to data that actually exists, preventing orphaned rows. Transactional integrity (ACID transactions) ensures a set of related changes all commit together or not at all, which, among other things, keeps a data change and its audit entry inseparable so a crash cannot leave a changed value with no audit record.

**"What does point-in-time recovery give you beyond a normal backup?"** It restores the database to an exact moment by replaying transaction logs from a full backup forward to a chosen time. Beyond recovering from corruption, it lets you read prior values during an investigation, the original state of a record before a contested edit, which the native audit log may not have captured. It requires the database to retain and back up transaction logs, and it must be tested to a specific point, not just by a full restore.

**"You enabled encryption at rest. Does that solve database data integrity?"** No. Encryption at rest protects the files and backups from someone accessing the storage directly; it does nothing against an authorized user making a bad change through the database engine. It is one layer. You still need native auditing, segregation, controlled edits, integrity constraints, and recovery.

---

## The Durable Principle

A validated application is only as trustworthy as the database under it. Every control configured at the application layer, the audit trail, the role restrictions, the reason-for-change prompts, assumes that no one reaches around the application to the data directly. That assumption is only true if you make it true at the database tier: restrict and log direct access independently, store the log where the DBA cannot touch it, segregate the people who run the database from the people who own the data, wrap the rare necessary direct edit in approval and a witness and before-and-after proof, enforce structural integrity with constraints and transactions, encrypt the files and backups, and keep a tested point-in-time recovery that can both restore and reveal prior values. Do that, and the clean application audit trail means what it claims to mean. Skip it, and the cleanest application audit trail in the world is just the part of the story someone chose to let you see.
