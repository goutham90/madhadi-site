---
title: "Backup Restoration Test Protocol"
description: "A plug-and-play protocol for periodic restore testing of GxP backups: scope, restore to an isolated environment, integrity and completeness verification, recovery point objective check, timing, acceptance, and the record to retain, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Protocol"
pillar: "csv-csa"
relatedArticles: ["backup-restore-disaster-recovery-validation", "it-change-and-configuration-management-gxp"]
tags: ["backup", "restore", "disaster recovery", "data integrity", "annex 11", "protocol", "rpo", "csv"]
tier: "Intermediate"
---

This is a ready-to-use protocol for a periodic backup restoration test. A backup you have never restored is an assumption, not a control. This protocol proves that a GxP system can actually be brought back from its backups, that the restored data is complete and unaltered, and that the amount of data you would lose in a real recovery stays inside your stated recovery point objective. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen and a restoration log follow the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Backup Restoration Test Protocol for `<<FILL: system name>>` |
| Document number | `<<FILL: PRT-ID, e.g. RST-IT-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. IT Quality / System Owner>>` |
| System / area in scope | `<<FILL: system name, environment, hosting location>>` |
| Linked report | `<<FILL: report or summary number to be issued, e.g. RST-IT-031-RPT>>` |

## 1. Purpose

This protocol defines the method, sampling, checks, and acceptance criteria to demonstrate that backups of `<<FILL: system name>>` can be restored to a working state, that the restored records are complete and unaltered, and that the worst-case data loss stays within the agreed recovery point objective. The objective is to prove the backup and restore control works in practice, not only on paper, so that GxP records held in this system survive a failure, corruption, or ransomware event.

## 2. Scope

This protocol applies to the backups of `<<FILL: system name>>` taken under backup procedure `<<FILL: backup SOP-ID>>` and stored at `<<FILL: backup location / media / cloud region>>`. It covers the application, its database, configuration, and any required dependencies (operating system state, certificates, keys, integration accounts) needed to make the restored system usable. It tests one or more of: a full restore of the database, a point-in-time restore, and a single-record or single-file restore. It does not by itself qualify the full disaster recovery failover of the data center, which is governed by `<<FILL: DR plan / SOP-ID>>`; this restore test is a building block of that plan.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Protocol author (IT Quality / Validation) | Writes this protocol, defines the test cases, and writes the report. |
| System owner | Confirms the recovery point and recovery time objectives, approves the scope, and confirms the restored system is fit for the test. |
| IT / backup administrator | Selects the backup set under test, performs the restore into the isolated environment, and records timings. |
| Data owner / process SME | Verifies that restored records are complete and correct against the known pre-restore state. |
| Quality Assurance | Reviews and approves the protocol and report, owns deviations, and confirms the test happened on schedule. |
| Security / IT | Confirms the isolated environment is segregated and that test data is disposed of after the test. |

## 4. Definitions

- **Backup**: a copy of data and, where needed, configuration and system state, taken so the original can be reconstructed after loss or corruption.
- **Restore**: the act of writing a backup back into a working environment and confirming the system reads it correctly.
- **Recovery point objective (RPO)**: the maximum acceptable amount of data, measured in time, that the organization is willing to lose in a recovery. An RPO of 24 hours means a restore may lose up to the last 24 hours of changes.
- **Recovery time objective (RTO)**: the maximum acceptable time to bring the system back to usable service after an event. Measured here as information, not as a pass or fail criterion unless stated.
- **Isolated environment**: a segregated, non-production environment that cannot reach, overwrite, or interfere with the live system, its data, or its integrations.
- **Integrity check**: a comparison (record counts, checksums, hashes, audit-trail continuity, referential integrity) that confirms restored data matches the source and was not altered or truncated.
- **3-2-1 rule**: at least three copies of data, on two different media types, with at least one copy off-site or offline. Used as a design reference, not validated by this single test.

## 5. Pre-requisites

Confirm and record each item before starting. A test run on the wrong assumptions proves nothing.

| Item | Entry |
|---|---|
| Backup procedure reference | `<<FILL: backup SOP-ID and version>>` |
| Stated RPO for this system | `<<FILL: e.g. 24 hours>>` |
| Stated RTO for this system (reference) | `<<FILL: e.g. 8 hours>>` |
| Backup schedule and type | `<<FILL: e.g. nightly full + hourly transaction log>>` |
| Backup set selected for the test | `<<FILL: backup ID / timestamp / media label>>` |
| Encryption / decryption key available | `<<FILL: confirm key custody and access>>` |
| Isolated environment identified | `<<FILL: environment name, host, network segment>>` |
| Restore tooling / runbook reference | `<<FILL: restore procedure / script reference>>` |
| Known pre-restore reference values captured | `<<FILL: source record counts, checksums, last-transaction timestamp; see section 7.1>>` |

## 6. Restore to an isolated environment

The restore must run into a segregated environment so the test cannot touch live data, integrations, or interfaces. Restoring over production, or into an environment that can write back to production, is itself a finding.

1. Confirm the target environment is isolated: no live database connections, integration accounts disabled or pointed at test stubs, and outbound interfaces blocked. Record the evidence.
2. Retrieve the selected backup set from `<<FILL: backup location>>`. Confirm the media or object is readable and the integrity flag or manifest from the backup tool reports the set as good before you start.
3. Decrypt using the controlled key. Record that the key worked; a backup that cannot be decrypted is a failed backup.
4. Execute the restore per the restore runbook. Start a clock at the moment the restore begins.
5. Bring the application up against the restored data. Record the time the system reached a usable, logged-in state. This is the measured recovery time for information.
6. Capture restore logs, any warnings or errors, and screenshots of the restored system showing the data is present and the application functions.

## 7. Integrity and completeness verification

Restoring without verifying is half a test. Confirm the restored data is both complete (nothing missing or truncated) and unaltered (nothing silently corrupted).

### 7.1 Completeness

| Check | Method | Acceptance |
|---|---|---|
| Record / row counts | Compare counts of key tables or objects in the restored system to the captured pre-restore source values | Counts match the source as of the backup point, with any difference explained by the RPO window |
| File / object inventory | Compare a file or object list (names, sizes) restored versus source | All expected files present; sizes match |
| Referential integrity | Run the application's or database's integrity check; open a sample of parent-child records | No orphaned or broken links |
| Date / range coverage | Confirm the most recent restored record date and the oldest required record date | Coverage spans the required retention window up to the backup point |

### 7.2 Integrity (unaltered)

| Check | Method | Acceptance |
|---|---|---|
| Checksum / hash comparison | Compare hashes (for example SHA-256) of restored files or database export to source hashes captured before the test | Hashes match for the same point-in-time content |
| Audit trail continuity | Open the restored audit trail and confirm it is present, readable, and continuous up to the backup point | Audit trail intact, no gaps, timestamps and user IDs preserved |
| Electronic signatures preserved | Confirm signed records in the restored system still show the signature, signer, meaning, and date | Signatures and their bindings intact per 21 CFR Part 11 |
| Functional read-back | Open and use a sample of critical records (a batch record, a result, a report) and confirm values are correct and unchanged | Sampled records readable and correct |

Sample size for read-back: `<<FILL: number and basis, e.g. 20 records selected to cover each critical record type and a range of dates>>`. Document the selection so it is reproducible, not cherry-picked.

## 8. Recovery point objective (RPO) check

The RPO check answers one question: in this restore, how much data would have been lost, and is that inside the limit you committed to?

1. Identify the timestamp of the last successfully restored transaction or record (the "restore point").
2. Identify the timestamp at which the loss event is assumed to have occurred. For a planned test, use the start time of the test or the latest known good source state.
3. Compute the data loss window: assumed loss time minus restore point.
4. Compare the data loss window to the stated RPO.

| RPO check | Entry |
|---|---|
| Stated RPO | `<<FILL: e.g. 24 hours>>` |
| Last restored transaction timestamp (restore point) | `<<FILL>>` |
| Assumed loss / reference time | `<<FILL>>` |
| Computed data loss window | `<<FILL>>` |
| Within RPO? | Yes / No (if No, raise deviation) |

If the computed loss window exceeds the RPO, the backup frequency or method does not meet the commitment. That is a deviation, not a footnote, and it usually means the backup interval must tighten or transaction-log backups must be added.

## 9. Timing

| Timing item | Entry |
|---|---|
| Restore start time | `<<FILL>>` |
| Restore complete / system usable time | `<<FILL>>` |
| Measured recovery time | `<<FILL>>` |
| Stated RTO (reference) | `<<FILL>>` |
| Recovery time within RTO? | Yes / No (record as information unless RTO is a stated pass criterion) |

Record timing even when RTO is informational. A restore that succeeds but takes three days against an eight-hour RTO is a known gap that belongs in the report and in the disaster recovery plan, not buried.

## 10. Acceptance criteria

The test passes only if all of the following are met. A single failure is a deviation per `<<FILL: deviation SOP-ID>>`, investigated before the backup and restore control is accepted as effective.

| Criterion | Requirement |
|---|---|
| Restore executed | Backup restored into the isolated environment and the application reached a usable state |
| Completeness | Record counts, file inventory, referential integrity, and date coverage all met per section 7.1 |
| Integrity | Hash comparison, audit trail continuity, signature preservation, and functional read-back all met per section 7.2 |
| RPO | Computed data loss window at or within the stated RPO |
| Decryption / keys | Backup decrypted successfully with the controlled key |
| Isolation | Test ran in a segregated environment with no impact to production |
| Record | Restoration log completed, deviations resolved, report approved by QA |

## 11. Deviations and handling

Any restore failure, integrity mismatch, RPO breach, unreadable media, failed decryption, or departure from this protocol is documented as a deviation per `<<FILL: deviation SOP-ID>>` and assessed for impact before the control is accepted. Do not record the backup and restore control as effective while an unresolved deviation stands. Where the failure could mean live backups are unrecoverable, treat it as urgent and notify the system owner and QA the same working day.

## 12. Test data disposal

Restored GxP data placed in the isolated environment is real regulated data outside its normal controls. After the test, dispose of the restored copy per `<<FILL: data disposal / media handling SOP-ID>>`, confirm deletion, and record it. Do not leave restored production data sitting in a test environment.

## 13. Record generated: restoration log

Complete one log per test. Retain it per the records retention schedule, not less than `<<FILL: retention period>>`.

| Field | Entry |
|---|---|
| System name and ID | `<<FILL>>` |
| Backup set tested (ID / timestamp) | `<<FILL>>` |
| Backup type | `<<FILL: full / point-in-time / single-record>>` |
| Isolated environment used | `<<FILL>>` |
| Restore start / complete | `<<FILL>>` / `<<FILL>>` |
| Measured recovery time | `<<FILL>>` |
| Decryption successful | Yes / No |
| Completeness result | `<<FILL: counts/files/integrity/coverage outcome>>` |
| Integrity result | `<<FILL: hash/audit-trail/signature/read-back outcome>>` |
| RPO result | Data loss window `<<FILL>>` vs RPO `<<FILL>>`: Within / Breach |
| Deviations raised | `<<FILL: none, or list with reference>>` |
| Test data disposed | Yes / No, date |
| Tester (name, signature, date) | `<<FILL>>` |
| Data owner verification (name, signature, date) | `<<FILL>>` |
| QA approval (name, signature, date) | `<<FILL>>` |

## 14. Frequency

State the periodic frequency for this test and its basis in risk. Restore tests are commonly run at least annually for GxP systems, and more often for high-criticality systems, after a major change to the backup method or platform, and after any restore failure. Record the basis in the system inventory.

| Frequency item | Entry |
|---|---|
| Test frequency | `<<FILL: e.g. annual, or more frequent for high criticality>>` |
| Basis (risk / criticality) | `<<FILL>>` |
| Triggers for an unscheduled test | `<<FILL: e.g. backup platform change, prior restore failure, post-migration>>` |

## 15. References

> 21 CFR Part 11 (electronic records and signatures), 11.10(c) protection of records for accurate and ready retrieval, and 11.10(b) ability to generate accurate and complete copies of records.
> 21 CFR 211.68(b) (backup of data from computerized systems for drug GMP).
> EU GMP Annex 11, sections 7.2 (data must be secured by backup), 16 (business continuity), and 17 (archiving and retrieval).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> MHRA GxP Data Integrity Guidance and Definitions (backup, restore, and "true copy").
> PIC/S PI 041, Good Practices for Data Management and Integrity.
> ICH Q9, Quality Risk Management (for the risk-based frequency).
> GAMP 5 (Second Edition), backup, restore, and business continuity for computerized systems.

Confirm the current version and clause numbers of each reference before issue.

## 16. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 17. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (IT Quality / Validation) | `<<FILL>>` | | |
| System owner | `<<FILL>>` | | |
| Reviewer (Data owner / SME) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the protocol completed for an example laboratory information management system, so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| System name and ID | Laboratory Information Management System, environment LIMS-PROD-01 |
| Stated RPO | 24 hours |
| Stated RTO (reference) | 8 hours |
| Backup schedule | Nightly full database backup at 01:00, hourly transaction-log backup, encrypted (AES-256), copied off-site |
| Backup set tested | Full backup of 09 June 2026 01:00 plus transaction logs to 09 June 2026 18:00 |
| Isolated environment | LIMS-DR-TEST, segregated VLAN, all integrations disabled |
| Restore start / complete | 10 June 2026 09:05 / 10 June 2026 11:40 |
| Measured recovery time | 2 hours 35 minutes (within 8 hour RTO) |
| Decryption successful | Yes, restore key from key custody record KEY-LIMS-02 |
| Completeness | Sample/result row counts matched source to the 18:00 restore point (2,431,889 result rows); file inventory of attached instrument PDFs complete; referential integrity check passed; coverage spanned 2019 to restore point |
| Integrity | SHA-256 hashes of 50 exported result records matched source; audit trail continuous with no gaps; 12 electronically signed COAs retained signer, meaning, and date; 20-record functional read-back correct |
| RPO check | Restore point 09 June 18:00; assumed loss time 10 June 09:00; data loss window 15 hours, within the 24 hour RPO |
| Deviations | One: three instrument PDF attachments restored with size 0 bytes. Investigated as DEV-2026-0188; root cause was a backup-job exclusion rule; backup config corrected and a re-test of those objects passed |
| Test data disposed | Yes, restored copy deleted 12 June 2026, deletion confirmed |
| Tester | J. Okafor (IT), signed, 12 June 2026 |
| Data owner verification | S. Lindqvist (QC), signed, 12 June 2026 |
| QA approval | R. Gomez, signed, 13 June 2026 |

In this example the team restored a real backup into a walled-off environment, proved the row counts and hashes matched the source, confirmed the audit trail and signatures survived, computed an actual data loss window of 15 hours against a 24 hour RPO, and caught a quiet backup gap (three attachments backed up as empty) that a counts-only check would have passed. They raised it, fixed the backup config, re-tested, and disposed of the restored data. That sequence, restore to verify to RPO check to deviation to fix to re-test to disposal, is exactly what a reviewer is expected to demonstrate.

### Restoration log: completed example

| Step | Time | Performed by | Result / observation |
|---|---|---|---|
| Confirm environment isolation | 10 Jun 08:50 | J. Okafor | LIMS-DR-TEST on isolated VLAN, integrations disabled, evidence captured |
| Retrieve backup set, confirm readable | 10 Jun 09:00 | J. Okafor | Backup manifest reported good; media readable |
| Decrypt with controlled key | 10 Jun 09:03 | J. Okafor | Decryption successful, key KEY-LIMS-02 |
| Start full restore | 10 Jun 09:05 | J. Okafor | Clock started |
| Apply transaction logs to 18:00 | 10 Jun 10:50 | J. Okafor | Point-in-time restore to 09 Jun 18:00 |
| Bring application up | 10 Jun 11:40 | J. Okafor | Usable, logged-in state reached; recovery time 2h35m |
| Completeness checks | 10 Jun 13:00 | S. Lindqvist | Counts/files/integrity/coverage met; 3 attachments at 0 bytes flagged |
| Integrity checks | 10 Jun 15:00 | S. Lindqvist | Hashes match; audit trail and signatures intact; read-back correct |
| RPO computation | 10 Jun 15:30 | J. Okafor | 15 hour loss window, within 24 hour RPO |
| Raise deviation for empty attachments | 10 Jun 16:00 | S. Lindqvist | DEV-2026-0188 opened |
| Backup config corrected, objects re-tested | 11 Jun 14:00 | J. Okafor | Re-restore of the 3 objects passed |
| Dispose of restored test data | 12 Jun 10:00 | J. Okafor | Restored copy deleted, deletion confirmed |

## Common inspection findings this protocol prevents

- Backups are scheduled and reported as successful, but no restore has ever been tested, so recoverability is unproven.
- The restore "test" only confirmed a job completed, with no check that the restored data is complete and unaltered.
- A restore was performed straight onto or against production, putting live records at risk during the test.
- No defined RPO, or an RPO stated but never measured against an actual restore, so real data loss is unknown.
- Record counts checked but not hashes, so silent corruption or truncated files (the empty-attachment trap) passes unnoticed.
- The restored audit trail or electronic signatures were lost or broken and nobody verified they survived.
- Backups encrypted but the decryption key custody is unclear, so a real recovery could fail at decryption.
- Restored production data left sitting in an uncontrolled test environment after the test.
- Restore test frequency not defined or not linked to system criticality, and no re-test after a backup platform change.

## How to adapt this protocol

1. Set your document number, owner, linked report number, and effective date in the header.
2. Enter your real RPO, RTO, backup schedule, and the specific backup set under test in section 5, and confirm key custody.
3. Choose the test cases that fit the system: full restore, point-in-time restore, single-record or single-file restore, or all three. Drop the checks that do not apply (for example, signatures if the system holds none).
4. Define your read-back sample size and selection basis in section 7.2 so it is reproducible.
5. Set your real test frequency and unscheduled-test triggers in section 14, tied to the system's criticality.
6. Point the cross-references in sections 2, 11, and 12 to your real disaster recovery plan, deviation procedure, and data disposal procedure.
7. Confirm every regulation in section 15 against the current published version before issue.
