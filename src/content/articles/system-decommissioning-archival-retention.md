---
title: "System Decommissioning, Data Archival, and Lawful Retention"
description: "How to retire a GxP system without orphaning its data: retention by record type, the migrate-versus-archive decision, archives proven readable across the full retention period, audit-trail and metadata preservation, periodic retrievability testing, certificates of destruction, and legal hold."
pubDate: 2026-06-22
tags: ["data-integrity", "archival", "retention", "decommissioning", "legal-hold", "21-CFR-Part-11", "csv"]
pillar: "csv-csa"
tier: "Advanced"
---

A validated system reaches end of life. The vendor stops supporting the version, the platform moves to a successor, the contract with the cloud provider lapses, or the process the system supported is shut down. At that point the running application stops being the asset. The data it holds becomes the asset, and that data often has to outlive the system that created it by a decade or more. Decommissioning is the discipline of taking a system out of service without losing, corrupting, or stranding the records that still carry regulatory weight. Done well, it is invisible: years later, an inspector asks for a batch record from a system retired in 2021 and you produce it, complete with its audit trail, inside an hour. Done badly, it is a category of finding that is hard to remediate after the fact, because the original system is gone and you cannot go back and capture what you failed to capture.

This article covers retention determination, the migrate-versus-archive decision, building an archive that stays readable for the full retention period, preserving the audit trail and metadata that make a record trustworthy, periodic retrievability testing, the certificate of destruction, and legal hold. It draws a hard line between decommissioning and backup or disaster recovery, because the two get confused and the confusion produces real gaps. If you are coming to this cold, [the data lifecycle and metadata](/articles/data-lifecycle-and-metadata) frames where archival sits in a record's life, and [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation) covers the availability controls that decommissioning is often mistaken for.

---

## Decommissioning Is Not Backup or Disaster Recovery

Start here, because conflating these three is the root of a surprising number of problems.

Backup and disaster recovery protect **availability** of a running system. A backup is a copy taken so that if the live system fails, you can restore it and keep operating. Its horizon is short, typically days to a few months of retained sets, and its success criterion is "the system comes back". The data inside is still owned and served by the live application.

Archival for decommissioning protects **the record itself** after the application that produced it is gone. Its horizon is the full regulatory retention period, which can run many years past the point where the source system no longer exists. Its success criterion is "a human can still read the record, with its audit trail and metadata, and prove it is complete and unaltered, long after nobody can run the original software".

The two failure modes are different, and that is the point. A backup of a decommissioned system is a trap. You can hold a database backup file for fifteen years, but if the application that interprets that database is gone, the backup is an undecipherable blob. You technically "kept the data" and cannot read a single record. Restoring it would mean rebuilding the original application stack, including an operating system and database engine that are themselves obsolete and unsupported. That is not retention; it is a liability you have not noticed yet.

| Dimension | Backup / DR | Decommissioning archive |
|---|---|---|
| Purpose | Restore a running system | Preserve readable records past the system's life |
| Time horizon | Days to months | Full retention period (often 5 to 25+ years) |
| Success test | System restarts and operates | Record retrieved, readable, complete, with audit trail |
| Depends on | The live application still existing | Nothing that requires the original application |
| Owner of the data | The live system | The archive, independent of source software |

The decommissioning project must explicitly state which of these it is delivering. A decommissioning plan that says "we will keep the final database backup" has confused the two and has almost certainly created a gap. See [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation) for the availability side; everything below is about the record side.

---

## Determine Retention Before You Touch Anything

### Why retention drives the whole project

You cannot decommission correctly until you know how long each record type must survive, because the retention period decides whether a record gets migrated, archived, or destroyed, and it sets the duration over which the archive must stay readable. Get the period wrong on the short side and you destroy records you were legally required to keep. Get it wrong on the long side and you carry cost and litigation exposure for data you could have lawfully disposed of.

Retention requirements come from several places at once, and the governing rule is that when more than one applies, the longest wins. For US drug and biologics GMP, 21 CFR 211.180 sets minimums: most batch and production records are kept at least one year past the batch expiry, and for products with no expiration date, at least three years after distribution. EU GMP imposes its own minimums, and for some record categories, such as those tied to advanced therapy products, EU expectations reach 30 years. Clinical records under ICH E6(R2)/E6(R3) and trial master file expectations have their own long horizons. Pharmacovigilance records, tax and financial records that intersect with GxP systems, and contractual or litigation obligations can each extend the period further.

> 21 CFR 211.180(a): records "shall be retained for at least 1 year after the expiration date of the batch or, in the case of certain OTC drug products lacking expiration dating ... 3 years after distribution of the batch."

The practical move is to build a retention schedule by record type, not by system. A single system holds many record types with different clocks. A LIMS holds stability data, release test results, environmental monitoring data, and method validation data, and these may carry different retention periods and different start events. The clock start matters as much as the duration: "10 years" means nothing until you fix whether it counts from record creation, from batch expiry, from product discontinuation, or from end of the study.

### How to determine retention, step by step

1. Inventory every record type the system holds. Not tables, record types: batch records, test results, audit trails, user administration logs, configuration, validation evidence, electronic signatures, attachments.
2. For each record type, identify every applicable regulation, standard, and contractual obligation. Involve Quality, Regulatory, and Legal; do not let one function decide alone.
3. For each, capture the retention duration and the clock-start event in plain language.
4. Where multiple rules apply to one record type, take the longest duration and the latest clock start.
5. Add any active legal hold (covered below), which overrides and suspends destruction regardless of the schedule.
6. Record the determination in a controlled document, approved by Quality and Legal, that becomes part of the decommissioning package.

### Acceptance criteria

Retention determination is complete when every record type in the system has a documented retention period and clock-start event, every period traces to a named source obligation, the longest-wins rule has been applied where rules overlap, Legal and Quality have approved, and any record type whose retention has already expired and is not under hold is explicitly marked as eligible for disposition.

### Worked example: retiring a legacy LIMS

A LIMS supporting QC for a marketed biologic is being replaced. The retention analysis produces this:

| Record type | Retention period | Clock starts | Governing source |
|---|---|---|---|
| Finished-product release results | Batch expiry + 1 year (US); longer if EU market | Batch expiry date | 21 CFR 211.180; EU GMP |
| Stability study data | Study end + defined period; often 5+ years | Last data point of the study | ICH stability program, [stability programs](/articles/stability-programs-ich) |
| Environmental monitoring data | Per site procedure, typically several years | Record creation | Site quality system |
| Audit trail for all of the above | Same as the record it describes | Tied to parent record | [audit trail design and review](/articles/audit-trail-design-and-review) |
| User admin / access logs | Per data governance policy | Record creation | [data governance framework](/articles/data-governance-framework) |
| System validation evidence | Life of system + defined period | Decommissioning date | Validation policy |

The longest clock here is stability data tied to a batch that may not expire for years, plus the post-expiry retention, plus a possible EU extension. The archive must stay readable for that full horizon, which sets the requirement that drives every later decision.

---

## The Migrate-Versus-Archive Decision

For each record type, there are three fates: migrate it into the successor system, archive it in a form independent of any application, or destroy it because its retention has lapsed and no hold applies. This decision is the analytical core of a decommissioning project.

### When to migrate

Migrate when the data is still operationally needed in the successor system: trending continues, the data feeds ongoing decisions, or users genuinely need to query it as live data. Migration means the records become part of a validated, supported system again, which is the cleanest long-term outcome but the most expensive and the highest risk during the move. Migration is its own validated activity with its own integrity proof, mapping, and reconciliation. Do not improvise it as a side effect of decommissioning; treat it as a project governed by [data migration validation](/articles/data-migration-validation).

### When to archive

Archive when the data must be retained for compliance or potential future need, but is not part of ongoing operations. Most decommissioned data falls here. You do not need to keep paying to run an obsolete application just to satisfy a one-in-a-thousand future retrieval, but you absolutely must keep the records retrievable. Archival extracts the records and their context into an application-independent form and stores them under controls that outlive the source system.

### When to destroy

Destroy only when retention has fully lapsed for that record type and no legal hold applies, and only with the formal certificate-of-destruction process below. Destruction is the one irreversible step in the entire discipline, so it carries the heaviest controls.

### The decision in practice

| Question | If yes | Tends toward |
|---|---|---|
| Is the data still needed for live operations or trending? | Continue operating on it | Migrate |
| Is it needed for compliance/retention but not daily use? | Keep retrievable, drop the app | Archive |
| Has retention fully lapsed with no active hold? | Dispose under control | Destroy |
| Is a legal hold in force on it? | Override everything | Retain (no destruction) |

Mixed outcomes within one system are normal and expected. A common pattern: migrate the last few years of release data into the new system for trending continuity, archive the older release data and all stability and EM data, and destroy nothing yet because nothing has cleared its retention plus hold. Document the per-record-type decision and its rationale; an inspector reviewing decommissioning will ask why each record type went where it went.

### Acceptance criteria

The decision is sound when every record type has an assigned fate (migrate, archive, or destroy) with a written rationale, no record type defaults to "keep the old system running indefinitely" by omission, migration follows a validated migration process, archival targets an application-independent format, and destruction is gated on lapsed retention plus absence of hold.

---

## Build an Archive That Stays Readable for the Full Retention Period

This is where decommissioning succeeds or fails. The archive has to be readable by a human, and processable by a machine, for the entire retention period, which may be 10, 15, or 30 years into a future where the source application, its database engine, and its operating system no longer exist and cannot be licensed or run.

### Human-readable and machine-readable, both

A defensible archive is dual-format by design.

The **human-readable** copy lets a person open and understand a record with nothing more exotic than a PDF reader or a web browser, years from now, with no specialist software. For a batch record, that is a rendered document showing the data, the audit trail, the signatures, and the metadata in a form a reviewer or inspector can read directly. PDF/A is the usual target because it is an ISO-standardized archival format designed for long-term preservation and is self-contained. The key property is that reading it depends on nothing from the dead application.

The **machine-readable** copy preserves the structured data so it can be searched, reconciled, and, if ever needed, re-imported or analyzed. Open, non-proprietary, well-documented formats are the goal: XML or JSON with a documented schema, or delimited text with a defined layout, rather than a proprietary binary database file that only the original engine can parse. A documented schema is part of the deliverable, because structured data with no schema is only marginally better than no data.

Why both? The human copy guarantees a person can always read a record without rebuilding anything. The machine copy guarantees the structured relationships, the searchability, and the ability to reconcile counts and re-analyze survive. Drop either and you have a partial archive. A pile of 40,000 PDFs with no index is unsearchable; a structured dump with no rendering is unreadable by anyone without the schema and tooling.

### Format obsolescence is the real adversary

The threat is not a disk failing tomorrow; backup and storage controls handle that. The threat is slow: the format you archived in becomes unreadable over 15 years because the only software that ever read it is extinct. Defenses, in order of preference:

- **Archive in open, standardized, long-lived formats** from the start (PDF/A for rendering, open structured formats for data). This minimizes future dependence and is the strongest defense.
- **Migrate the archive forward** when a format approaches obsolescence, under change control, with re-verification that the migrated archive is still complete and faithful. An archive is a managed asset over its whole life, not "set and forget".
- **Avoid emulation as the primary strategy.** Keeping an old virtual machine around to run the dead application is fragile, costly, and itself ages out (the VM needs a host, the host needs an OS, licenses lapse). Use emulation only as a temporary bridge while you extract to open formats, never as the long-term answer.

### How to build it, step by step

1. Extract the full record set from the source system, not a filtered or summary export. Pull raw structured data and all linked objects (audit trail, signatures, attachments, metadata).
2. Render each retained record into the human-readable archival format (e.g., PDF/A) with its audit trail and metadata embedded or directly linked.
3. Export the structured data into the open machine-readable format with a documented schema.
4. Build an index: a catalog that lets a future user find a specific record without opening the application, by batch number, sample ID, date, product, and so on.
5. Generate integrity proofs: record counts, and checksums or hashes on the archived files, so completeness and non-alteration can be demonstrated later.
6. Reconcile the archive against the source: counts match, a sample of records compares field-for-field, the audit trail is present and complete.
7. Place the archive on storage with its own backup, access controls, and integrity monitoring, independent of the retiring system.
8. Validate the archive and its retrieval process: prove you can find, retrieve, and read an arbitrary record, with its audit trail, from the archive alone.

### Acceptance criteria

The archive is defensible when each retained record exists in both a human-readable and a machine-readable form, both forms are independent of the source application, the structured form has a documented schema, an index allows retrieval without the original system, integrity proofs (counts plus checksums) exist and reconcile against the source, and a documented test has retrieved a real record end to end from the archive alone.

---

## Preserve the Audit Trail, Metadata, and Signatures

A record without its audit trail and metadata is not the record; it is a screenshot of the answer with the working torn off. Yet audit trail and metadata are the first casualties of a careless extract, because the easy export, the one the application offers as a report, is usually the result values only.

### Why this is the hardest part

The audit trail and metadata live in different tables, sometimes different subsystems, from the result data, and the link between them is internal to the application. A naive "export results to CSV" gives you the values and loses the who/what/when/old-value/why that makes them trustworthy. The same applies to electronic signatures: the meaning of a signature (who signed, in what capacity, when, with what intent) is metadata bound to the signed record, and an extract that drops it leaves a result that nobody, on the record, ever approved. The integrity attributes the live system enforced, the ALCOA+ properties in [the ALCOA+ principles in detail](/articles/alcoa-plus-deep-dive), must survive into the archive, or the archived record fails the same tests the live one passed.

### What must be preserved

| Element | Must survive into the archive | Why |
|---|---|---|
| Result / record values | Yes | The data itself |
| Audit trail (who/what/when/old/new/reason) | Yes, linked to its parent record | Makes the record reconstructable and attributable |
| Metadata (units, methods, instrument IDs, sample context, run sequence) | Yes | Gives the value meaning; "99.1" alone is uninterpretable |
| Electronic signatures and their meaning | Yes | Proves who approved what and in what capacity |
| Relationships between records | Yes | A result tied to its sample, batch, method, and instrument |
| Dynamic-record behavior (e.g., chromatograms) | Render faithfully; preserve raw where required | A static print of a dynamic record loses reprocessing context |

That last row matters for laboratory data especially. A chromatogram is a dynamic record: in the live system you can reprocess it, change integration, and see the effect. A flat PDF of the final peak table is a static copy that loses the ability to see what the data could have shown under different integration. Where reprocessing context is part of the integrity story, preserve the raw structured data, not only the rendered output. See [static and dynamic records and true copies](/articles/static-dynamic-records-true-copies) and, for chromatography traps, [chromatography data system integrity](/articles/chromatography-data-system-integrity).

### How to verify preservation

For a representative sample of archived records, prove from the archive alone that you can still answer: who created this value, who changed it and from what to what and why, who approved it and when, what method and instrument produced it, and which batch or sample it belongs to. If any of those requires going back to the dead application, the extract was incomplete and must be redone before the application is gone, because after shutdown there is no second chance.

### Acceptance criteria

Preservation is adequate when, for a sampled set of archived records, the full audit trail, all integrity-relevant metadata, the electronic signatures with their meaning, and the inter-record relationships are all present and readable from the archive alone, with no dependence on the retired application.

---

## Periodic Retrievability Testing

An archive is a claim until you test it. Storing files and assuming they will be readable in 2038 is exactly the assumption that fails. Regulators and the integrity guidances expect that archived data remains retrievable and readable throughout the retention period, which means the archive must be exercised, not just held.

### Why test periodically rather than once

Three things degrade silently over a long retention period: the storage media, format readability, and the retrieval process plus the knowledge to run it. A one-time validation at archive creation proves the archive worked the day it was made. It says nothing about whether it still works five years later after the storage was migrated, the index tooling upgraded, and the people who built it gone. Periodic testing converts "we believe it is fine" into "we proved it last quarter".

### How to run a retrievability test

1. Define a frequency in the archive's procedure, risk-based on retention length and criticality (annual is common; longer retention or higher criticality argues for more often).
2. Select records to retrieve, ideally a random sample plus any known-tricky cases (large attachments, complex audit trails, dynamic records).
3. Retrieve each selected record from the archive using the documented retrieval process, with no recourse to the original application.
4. Confirm both formats open and are complete: the human-readable copy renders fully, the machine-readable copy parses against its schema.
5. Confirm the integrity attributes survive: audit trail, metadata, signatures, relationships, all present.
6. Verify integrity proofs still hold: checksums match, counts reconcile against the original archive manifest.
7. Record the test: what was retrieved, by whom, the result, any issues, and remediation.
8. On any failure, raise a deviation, fix the archive (migrate format, repair index, restore from the archive's own backup) under change control, and re-test. See [deviation management](/articles/deviation-management).

### Worked example

| Field | Entry |
|---|---|
| Archive | Retired LIMS, QC release and stability data |
| Test date | Annual, current cycle |
| Records selected | 25 (random) + 5 known-complex (multi-edit audit trails, large attachments) |
| Retrieval method | Documented archive retrieval procedure, source app long since shut down |
| Result | 29 retrieved and fully readable in both formats with complete audit trail |
| Issue | 1 PDF/A failed to render an embedded chromatogram image |
| Action | Deviation raised; root cause was a rendering-tool version change; archive copy re-generated and verified; retrieval procedure updated |

That single failed render is the entire reason for periodic testing. It would have been invisible until the day an inspector asked for that exact record, by which point it would be a finding instead of a routine fix.

### Acceptance criteria

Retrievability testing is in place when the frequency is defined and risk-based, each test retrieves a sample using only the archive, both formats and all integrity attributes are confirmed, integrity proofs are re-verified, results are recorded, and failures route to deviation management with re-test on closure.

---

## The Certificate of Destruction

Destruction is the only irreversible act in this whole discipline, so it gets the tightest control. You destroy GxP records only when retention has fully lapsed for that record type and no legal hold is in force, and you prove the destruction with a controlled certificate.

### Why a certificate, not just a delete

The certificate is evidence that disposal was deliberate, authorized, time-bound to lawful eligibility, and complete. Its job runs in both directions. It shows you did not destroy records you were required to keep (each line is gated on lapsed retention and no hold), and that records you were entitled to dispose of are genuinely gone, which matters for privacy obligations and for limiting future litigation exposure. "We think it got deleted at some point" is the answer that turns a routine question into a finding.

### What goes on the certificate

| Field | Content |
|---|---|
| Records destroyed | Record type(s), system of origin, identifiers or ranges, volume |
| Retention basis | The retention period and clock start that has now lapsed |
| Hold check | Explicit confirmation that no legal hold applied at destruction |
| Authorization | Approvals required by policy, typically Quality and Legal |
| Method | How destroyed (secure data wipe, media destruction, cryptographic erasure) and standard followed |
| Date and operator | When, and who performed it |
| Verification | Confirmation destruction was complete and unrecoverable |
| Signatures | Authorizing and executing roles |

### How to destroy, step by step

1. Identify record types whose retention has fully lapsed per the schedule.
2. Run a hold check against the active legal-hold register; exclude anything under hold.
3. Obtain documented authorization (Quality and Legal at minimum).
4. Execute destruction by the defined secure method appropriate to the medium and to any privacy requirements.
5. Verify completeness and irrecoverability.
6. Issue and sign the certificate of destruction.
7. Retain the certificate itself: the certificate is a GxP record and is kept indefinitely or per policy, because it is the proof that the destruction was lawful.

### Acceptance criteria

Destruction is controlled when every destroyed record type had fully lapsed retention, a hold check was performed and documented, Quality and Legal authorized it, a secure method was used and verified, a complete certificate was issued and signed, and the certificate is itself retained as a record.

### Common trap

The most common destruction mistake is not over-keeping; it is destroying on a system basis when retention runs on a record basis. Someone retires a system and disposes of "the old data" wholesale, sweeping up record types whose clock had not run, or that were under a hold nobody checked. Destruction must be per record type, gated individually, never a single bulk action on a whole system.

---

## Legal Hold

A legal hold is an instruction to preserve records relevant to actual or anticipated litigation, investigation, audit, or regulatory action. It overrides the normal retention schedule completely: while a hold is in force, the records it covers cannot be destroyed even if routine retention has lapsed. Destroying records under hold, even by routine automated cleanup, is spoliation, and it carries consequences well beyond a GxP finding.

### Why it must be wired into decommissioning

Decommissioning is precisely when legal hold is most likely to be violated, because it is the moment you are actively planning to dispose of data. An automated retention-cleanup job, or a wholesale "wipe the old system" step, will happily destroy records under hold unless the hold is checked first. The hold check is therefore a mandatory gate in front of every destruction action, and the legal-hold register must be consulted as part of the decommissioning plan, not assumed to be someone else's problem.

### How to handle holds during decommissioning

1. Before any disposition, query the active legal-hold register (owned by Legal) for every record type in scope.
2. For any record type under hold, suspend all destruction, and ensure the archive itself preserves those records intact and retrievable for the duration of the hold, which may exceed the routine retention.
3. Confirm the archive's own integrity controls cannot inadvertently age out or overwrite held records.
4. When Legal releases a hold, document the release, then re-evaluate the record type against the routine retention schedule before any disposition resumes.
5. Keep the hold and release documentation as records; the trail of "held, then released, then disposed under normal schedule" is what defends the eventual destruction.

### Acceptance criteria

Legal hold is handled correctly when the active hold register is consulted before any disposition, held record types are excluded from destruction and preserved intact, the archive cannot inadvertently destroy held data, hold releases are documented before disposition resumes, and the hold-and-release history is retained.

---

## Roles and Responsibilities

Decommissioning fails when ownership is fuzzy, because it spans business, Quality, IT, Legal, and Validation, and each assumes another function has the long tail covered. Map it explicitly. See [data governance framework](/articles/data-governance-framework) and [GxP roles and responsibilities](/articles/gxp-roles-responsibilities).

| Role | Owns |
|---|---|
| System owner (business) | Initiating decommissioning; confirming the data is no longer operationally needed; signing off the per-record-type fate decision |
| Quality Assurance | Approving the retention schedule, the decommissioning plan, and every certificate of destruction; inspection defense of the whole exercise |
| Legal | Setting retention obligations jointly with Quality; owning the legal-hold register; authorizing destruction; confirming no hold applies |
| IT / archive owner | Building and operating the archive; storage, backup, access control, integrity monitoring; executing secure destruction; running retrievability tests |
| Validation | Validating migration where it occurs; validating the archive and its retrieval process; verifying integrity proofs |
| Records management / data governance | Maintaining the retention schedule and ensuring it is applied consistently across systems |

The segregation that matters most: the function that authorizes destruction (Legal/Quality) must be distinct from the function that executes it (IT), and the hold check must sit with Legal, not be self-certified by whoever wants the old system gone. Where small-organization staffing collapses these, document a compensating control such as a mandatory independent second authorization on every certificate of destruction.

---

## Common 483-Type Mistakes

These are the recurring failure patterns, stated generically:

- **Kept the database backup, lost the records.** A final backup retained with no archival extract; the application is gone and the backup is unreadable. The single most common decommissioning failure.
- **Results archived without the audit trail.** The easy export gave values only; the who/what/when/why was never extracted, so the archived record is not reconstructable and the chance to fix it died with the application.
- **No periodic retrievability test.** Archive validated once at creation, never exercised again; nobody notices a format or index has gone unreadable until an inspector asks for a specific record.
- **Destroyed records still under retention or hold.** Wholesale "wipe the old system" that swept up record types whose clock had not run or that were under a legal hold nobody checked.
- **Proprietary, application-locked archive format.** Data archived only in the source application's native format, readable only by software that no longer exists.
- **Migration done as a side effect, unvalidated.** Records moved into the successor system with no mapping, no reconciliation, no integrity proof, so completeness and fidelity were never demonstrated. See [data migration validation](/articles/data-migration-validation).
- **No certificate of destruction.** Records disposed of with no controlled evidence of what, when, by whom, under what authority, and that no hold applied.
- **Legal hold not wired into the cleanup.** An automated retention job or a decommissioning step destroyed records under hold, turning a routine task into spoliation.
- **Retention determined per system, not per record type.** A single blanket period applied to a system holding record types with very different clocks, leading to either over-retention or premature destruction.
- **Dynamic record flattened.** A chromatogram or other dynamic record archived only as a static print, losing the reprocessing context that is part of its integrity.

---

## Interview Questions and How to Answer Them

Expect these in a data integrity, CSV/CSA, or validation interview, and variants from inspectors reviewing a retired system.

**"What is the difference between a backup and a decommissioning archive?"** A backup protects availability of a running system and has a short horizon; success is the system restarting. A decommissioning archive protects the record itself after the application is gone, for the full retention period; success is retrieving a complete, readable record with its audit trail, with no dependence on the original software. Keeping a final database backup is not archival, because once the application is gone the backup is unreadable.

**"How do you decide migrate versus archive versus destroy?"** Per record type, not per system. Migrate if the data is still operationally needed in the successor system, as a validated migration. Archive if it must be retained for compliance but is not in daily use, in an application-independent dual format. Destroy only when retention has fully lapsed for that record type and no legal hold applies, under a controlled certificate.

**"How do you make sure an archive is still readable in fifteen years?"** Archive in open, standardized, long-lived formats (PDF/A for rendering, open structured formats with a documented schema for data) so readability does not depend on the dead application; migrate the archive forward under change control as formats approach obsolescence; and run periodic retrievability tests that retrieve real records from the archive alone and confirm both formats and all integrity attributes still work.

**"Why is preserving the audit trail the hard part of decommissioning?"** Because the trail and metadata live in different tables from the results and are linked internally by the application. The easy export gives values only and silently drops the who/what/when/old-value/why and the signatures. Once the application is shut down there is no way to recover them, so you must extract and verify the full trail before decommissioning, not after.

**"What is a certificate of destruction and what is on it?"** Controlled evidence that disposal was deliberate, authorized, and lawful: the record types and identifiers destroyed, the lapsed retention basis, an explicit hold check, Quality and Legal authorization, the secure method used, date and operator, verification of completeness, and signatures. The certificate is itself a retained record.

**"What is a legal hold and how does it interact with retention?"** An instruction to preserve records relevant to litigation, investigation, or regulatory action. It overrides the retention schedule: held records cannot be destroyed even if routine retention has lapsed. During decommissioning, the active hold register is a mandatory gate before any destruction, and destroying held records is spoliation.

**"You are retiring a CDS. Walk me through it."** Determine retention by record type, longest rule wins, clock starts fixed. Decide per record type: migrate, archive, or destroy. For archived data, extract full structured data plus audit trail, metadata, signatures, and the raw dynamic data for chromatograms; render human-readable PDF/A and export open machine-readable data with a schema; index it, generate checksums, reconcile against source. Validate the archive and its retrieval. Run the legal-hold check before destroying anything; destroy only lapsed, unheld record types under a signed certificate. Then schedule periodic retrievability tests for the full retention period.

---

## The Durable Principle

Decommissioning is the test of whether records were ever really yours or only on loan from the application that happened to hold them. The discipline is simple to state and hard to do: the records, with their audit trail and metadata, must outlive the system, stay readable to a human and a machine for the full retention period, never depend on resurrecting dead software, and be destroyed only when lawfully eligible and never while held. If you can retire a system today and, a decade from now, retrieve any of its records complete and readable inside an hour, you have done it right. If retrieval would require rebuilding an obsolete application from a backup, you kept a liability and called it retention. The work to avoid that is done before the system is switched off, because afterward the source of truth is gone and the gap cannot be closed. For the broader picture of where archival sits in a record's life, see [the data lifecycle and metadata](/articles/data-lifecycle-and-metadata); for retiring systems that were never properly validated in the first place, see [retroactive validation of legacy systems](/articles/retroactive-validation-legacy-systems).
