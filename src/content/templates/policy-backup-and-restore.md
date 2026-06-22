---
title: "Backup and Restore Policy"
description: "A plug-and-play corporate policy that sets backup scope, frequency, retention, encryption, and offsite or immutable copies for GxP data, and enforces the rule that a backup is unproven until a restore test passes, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Policy"
pillar: "csv-csa"
relatedArticles: ["backup-restore-disaster-recovery-validation", "it-change-and-configuration-management-gxp"]
tags: ["backup", "restore", "data integrity", "policy", "disaster recovery", "retention", "21 CFR Part 11", "annex 11"]
tier: "Intermediate"
---

This is a ready-to-use corporate policy. A policy states what the organization requires and who owns it; the procedures underneath it state how the work is done. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Backup and Restore Policy |
| Document number | `<<FILL: POL-ID, e.g. POL-IT-004>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Policy owner | `<<FILL: role, e.g. Head of IT / IT Quality sponsor>>` |
| Applies to | `<<FILL: all sites, GxP systems, and contracted hosting parties in scope>>` |
| Review cycle | `<<FILL: e.g. every 2 years or on material change>>` |

## 1. Purpose

This policy sets the requirement that all GxP data and the systems that hold it at `<<FILL: COMPANY NAME>>` are backed up, protected, and recoverable for the full required retention period, so that a record can be restored complete and accurate after equipment failure, corruption, ransomware, accidental deletion, or disaster. It states the standard, names who is accountable, and defines the rules that backup and restore activity must meet. The policy exists because availability and enduring retention are part of data integrity, not an IT housekeeping task bolted on afterward.

## 2. Policy statement

`<<FILL: COMPANY NAME>>` requires that GxP electronic records, the application and database that give those records meaning, the metadata and audit trails attached to them, and the configuration needed to read them are backed up on a defined schedule, retained for at least the GxP retention period of the record, protected by encryption and access control, held in at least one offsite or immutable copy, and proven recoverable by a successful restore test. A backup that has never been restored is treated as unproven and does not count as a control. This requirement carries the same weight for systems hosted on premises, in a private data center, or with a cloud or SaaS provider acting on the company's behalf.

This policy is binding on all employees, contractors, and contracted organizations (including hosting providers, managed service providers, and SaaS vendors) that store, back up, or restore GxP data for the company.

## 3. Scope

This policy applies to all data and system components that support a GxP activity. It covers:

- Electronic GxP records and their metadata and audit trails in laboratory systems, manufacturing execution and automation systems, quality systems, clinical and safety databases, and validated spreadsheets used for GxP calculation.
- The databases, application binaries, operating system images or container images, and stored configuration needed to restore a system to a working, validated state.
- Encryption keys, certificates, and credentials needed to read or decrypt a backup.
- Archived GxP records moved off the live system but still within retention.
- GxP data held by contracted hosting or SaaS parties on the company's behalf.

It does not by itself define the technical job design for any one system; that is held in the system-specific backup and restore procedures referenced in section 12. It also does not replace the disaster recovery and business continuity plan, which it feeds.

## 4. Definitions

- **Backup**: a copy of data and the components needed to read it, taken so the original can be recovered after loss or corruption.
- **Full, incremental, and differential backup**: a full backup copies everything in scope; an incremental copies only what changed since the last backup of any type; a differential copies everything changed since the last full backup. The recovery procedure must state which chain is used so a restore is complete.
- **Restore test (recovery verification)**: a controlled exercise that takes a real backup and recovers data, or a whole system, to a target environment and confirms the recovered records are complete and correct.
- **Retention period**: the minimum time a record must be kept, set by the GxP record retention schedule, not by available disk space.
- **RPO (recovery point objective)**: the maximum acceptable amount of data loss measured in time, which drives backup frequency.
- **RTO (recovery time objective)**: the maximum acceptable time to restore a system to use, which drives the recovery design.
- **Immutable copy**: a backup written so it cannot be altered or deleted for a set period (for example write once read many storage or an object lock), so ransomware or a rogue administrator cannot erase it.
- **3-2-1 rule**: at least three copies of the data, on at least two different media or platforms, with at least one copy offsite.

## 5. Backup scope and frequency

Backup frequency is set from the recovery point objective of each system, which is itself set from the criticality of the data. Use the table below as the default and record the actual setting for each system in the backup register maintained per `<<FILL: SOP-ID for the backup register>>`.

| Data and system criticality | Default backup frequency (RPO) | Typical examples |
|---|---|---|
| High: loss directly affects release, patient safety, or a submission | At least daily, with transaction-log or near-continuous protection for the database | Release-testing data systems, batch disposition records, clinical and safety databases |
| Medium: loss affects GxP work but not an immediate release decision | At least daily for data, weekly full for the system image | In-process and environmental monitoring records, document management |
| Low: reference or non-decision GxP data | Defined and documented, not left to default | Read-only reference libraries, archived non-active data |

For every system in scope the backup must capture the records, their metadata and audit trails, the database, and the configuration needed to restore a usable, validated state. A backup of the data file alone, without the audit trail or the configuration to read it, is not acceptable for a dynamic record.

## 6. Retention aligned to GxP record retention

Backups holding GxP records are retained for at least the retention period of the records they contain, as set by the company record retention schedule and the longest applicable regulatory requirement. Retention is driven by the record, not by storage cost or media life.

| Record class (example) | Drives backup retention |
|---|---|
| Batch and release records | Per `<<FILL: retention rule, e.g. one year past expiry or per local GMP minimum>>` |
| Clinical trial essential records | Per ICH E6 and the applicable regional requirement, commonly long-term |
| General GxP records | Per the company retention schedule and the applicable predicate rule |

Where a backup rotation would expire data still inside its retention period, the data is moved to validated archive storage before the backup is overwritten, with its own restore-readability confirmed. Media and format obsolescence is managed so records stay readable across their full retention, including migration before a format or platform becomes unreadable.

## 7. Encryption, integrity, and access

1. Backups of GxP data are encrypted at rest, and in transit when moved offsite or to a cloud target, using `<<FILL: standard, e.g. AES-256>>`.
2. Encryption keys are managed and recoverable independently of the backup itself; a backup whose decryption key is lost is not recoverable and so is not a control. Key custody and recovery are defined in `<<FILL: SOP-ID for key management>>`.
3. Backup integrity is verified at creation (for example checksum or verify-on-write) and the backup job result is recorded; a failed or partial job raises an alert and is remediated, not silently skipped.
4. Access to backup media, backup management consoles, and restore functions is restricted to authorized administrators and is segregated from the people who generate the GxP data, consistent with the data integrity policy.
5. Backup job logs, restore-test records, and the backup register are themselves GxP records and are retained and reviewable.

## 8. Offsite and immutable copies

1. At least one copy of each GxP backup is held offsite or in a separate fault domain, so a single site event cannot destroy both the live data and every copy. The 3-2-1 rule is the minimum design target.
2. At least one copy is immutable for a defined period (write once read many, object lock, or equivalent) so it cannot be altered or deleted by ransomware, a compromised account, or a privileged user. The immutable copy is the recovery of last resort.
3. For cloud-hosted or SaaS systems, the contracted party's backup, offsite, immutability, retention, restore-test, and exit provisions are confirmed in the quality agreement and verified through supplier oversight per `<<FILL: SOP-ID for supplier / vendor management>>`. Native cloud replication between zones is high availability, not a backup, and does not by itself satisfy this policy.

## 9. A backup is unproven until a restore test passes

This is the load-bearing rule of this policy. A backup that has never been restored is treated as having unknown reliability and is not accepted as a control.

1. Each GxP system has a documented restore test at a defined frequency, at least annually and after any material change to the system, its backup design, or its hosting, per `<<FILL: SOP-ID for restore testing>>`.
2. A restore test recovers real backup data to a controlled target (not production) and confirms the recovered records are complete, the audit trail and metadata are intact, the application can read the data, and the recovery met the recovery time objective.
3. The restore test is documented with the backup set used, the recovery steps, the verification of completeness and integrity, the time taken against the RTO, the result, and any deviation.
4. A failed restore test is a deviation, raised and investigated per `<<FILL: SOP-ID for deviations>>`, and the underlying backup design is corrected and re-tested before the backup is relied on.
5. The disaster recovery plan periodically exercises a full-system recovery, not only a file-level restore, so the company can show it can rebuild a system and not just retrieve a file.

## 10. Roles and accountability

| Role | Accountability under this policy |
|---|---|
| Policy owner / IT Quality | Owns this policy and the supporting procedures, confirms restore tests happen on schedule, and supports inspection defense. |
| System owner | Confirms the backup scope captures records, audit trails, and the configuration needed to restore the validated state; owns the RPO and RTO for the system. |
| IT / infrastructure or backup administrator | Configures and runs backup jobs, manages encryption keys, maintains offsite and immutable copies, monitors job success, and executes restore tests. |
| Quality Assurance | Approves this policy and the restore-test approach, reviews failed-job and failed-restore deviations, and confirms retention aligns with the record retention schedule. |
| Data and process owners | Identify which records are GxP and their retention so scope and retention are set correctly. |
| Contracted hosting / SaaS provider | Meets this standard for data held on the company's behalf, evidenced through the quality agreement and oversight. |

The task-level assignment is held in the data governance RACI maintained per `<<FILL: SOP-ID or reference for the RACI>>`.

## 11. Acceptance criteria

This policy is being met when all of the following are true:

- Every GxP system in the inventory appears in the backup register with a defined RPO, RTO, frequency, retention, and the scope of what is backed up (records, audit trails, configuration).
- Backups are encrypted, with keys managed and recoverable independently of the backup.
- At least one offsite copy and at least one immutable copy exist for each GxP backup.
- Backup retention equals or exceeds the record retention schedule for the records held, with archive and media-migration handled before expiry.
- A documented, successful restore test exists for each GxP system within the defined frequency, and any failed restore was raised as a deviation and resolved.
- A full-system disaster recovery exercise has been performed and documented within the defined cycle.
- Backups held by contracted parties are verified to meet this standard through quality agreements and oversight.

## 12. References

> 21 CFR Part 11 (electronic records and electronic signatures: protection of records to enable accurate and ready retrieval, 11.10(c)).
> 21 CFR Part 211 (drug CGMP recordkeeping and retention: 211.68(b), 211.180).
> 21 CFR Part 820 (device quality system; QMSR amendments effective 2 February 2026): control of records is at 820.35, with the remaining recordkeeping requirements incorporated by reference from ISO 13485:2016.
> EU GMP Annex 11 (computerized systems), sections 7.2 (data backup and restore) and 17 (archiving), and Annex 11 general principles.
> EU GMP Chapter 4 (documentation and record retention).
> MHRA "GXP Data Integrity Guidance and Definitions" (March 2018), backup and archive expectations.
> PIC/S PI 041 (good practices for data management and integrity), data retention, backup, and archive.
> ICH E6 (good clinical practice), retention of essential records.
> ICH Q9 (quality risk management) for the risk-based backup frequency and recovery objectives.
> ISO/IEC 27001 and ISO/IEC 27040 (information security and storage security), for backup security controls where adopted.

Confirm the current version and clause numbers of each reference before issue.

## 13. Supporting procedures

| Procedure | Reference |
|---|---|
| System-specific backup configuration and register | `<<FILL: SOP-ID>>` |
| Restore testing and recovery verification | `<<FILL: SOP-ID>>` |
| Disaster recovery and business continuity plan | `<<FILL: plan-ID>>` |
| Archival and media / format migration | `<<FILL: SOP-ID>>` |
| Encryption key management | `<<FILL: SOP-ID>>` |
| Deviations and investigations | `<<FILL: SOP-ID>>` |
| Change and configuration management | `<<FILL: SOP-ID>>` |
| Access control and user management | `<<FILL: SOP-ID>>` |
| Supplier and vendor management | `<<FILL: SOP-ID>>` |

## 14. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 15. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (IT) | `<<FILL>>` | | |
| Reviewer (QA) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the header, the backup register entry, and a restore-test record completed for an illustrative chromatography data system, so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Document title | Backup and Restore Policy |
| Document number | POL-IT-004 |
| Version | 1.0 |
| Effective date | 01 July 2026 |
| Supersedes | New |
| Policy owner | Director, IT Quality (IT Quality Council sponsor) |
| Applies to | All sites (US and EU), all GxP computerized systems, and the contracted SaaS quality system provider |
| Review cycle | Every 2 years or on material change |

Specimen backup register entry:

| Field | Entry |
|---|---|
| System name and ID | Chromatography Data System, server CDS-PROD-01 |
| Criticality | High (holds release-testing results and disposition data) |
| RPO / backup frequency | 15 minutes (transaction-log backup); full nightly at 01:00 |
| RTO | 8 hours |
| Scope of backup | Database, audit trail, instrument methods and configuration, application server image |
| Encryption | AES-256 at rest and in transit |
| Offsite copy | Replicated nightly to the secondary data center, 40 km away |
| Immutable copy | Weekly full written to object-locked cloud storage, 90-day lock |
| Retention | One year past product expiry, minimum 6 years, per the record retention schedule |
| Restore test frequency | Annual, plus after any major version upgrade |

Specimen restore-test record:

> On 12 May 2026 the backup administrator restored the 11 May nightly full plus the transaction logs of CDS-PROD-01 to the isolated validation environment. The recovered database opened in the application, 30 sample result sets were checked against the production records and matched, and the audit trail was present and unbroken for the period. Recovery completed in 5 hours 40 minutes, inside the 8-hour RTO. One deviation was raised, DEV-2026-0188: the instrument-method configuration was not in the original backup scope and had to be re-imported by hand. The backup job was corrected to include the method store and a re-test on 26 May 2026 recovered the full system with no manual steps. QA approved the closed restore-test record.

That sequence, a real restore to a non-production target, a check that records and audit trail came back complete, a measured recovery time against the RTO, a gap found and raised as a deviation, the backup design fixed and re-tested, is exactly what an inspector wants behind the statement that backups are tested.

## Common inspection findings this policy prevents

- Backups are configured and run, but no restore has ever been tested, so recoverability is unproven.
- A restore test recovered a data file but never confirmed the audit trail and metadata came back, so the dynamic record was not actually proven.
- Cloud replication between availability zones is presented as the backup, with no independent, immutable, or offsite copy that survives a logical deletion or ransomware event.
- Backup retention is set by disk capacity or media rotation and expires GxP records still inside their required retention.
- Backups are not encrypted, or the encryption key is held only inside the same backup, so a recovery cannot decrypt.
- The same administrators who generate or could delete GxP data also control the backups and restores, with no segregation.
- A SaaS or hosted GxP system is in use with no confirmed backup, restore-test, retention, or data-exit terms in the quality agreement.
- Failed backup jobs are logged but not alerted on or remediated, leaving silent gaps in the backup chain.

## How to adapt this policy

1. Set your document number, owner, effective date, and review cycle in the header.
2. Replace the criticality categories and default frequencies in section 5 with your real RPO and RTO targets per system, and point to your actual backup register.
3. Align section 6 retention with your own record retention schedule and the longest predicate-rule requirement that applies to you.
4. State your real encryption standard and key-management procedure in section 7, and confirm keys are recoverable independently of the backup.
5. Confirm your offsite and immutable design in section 8 meets at least the 3-2-1 rule, and for any cloud or SaaS system tie the requirement into the quality agreement.
6. Point every `<<FILL: SOP-ID>>` cross-reference to your real supporting procedures, and remove any that do not apply.
7. Confirm every regulation in section 12 against the current published version before issue.
