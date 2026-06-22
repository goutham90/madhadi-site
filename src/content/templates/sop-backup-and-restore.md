---
title: "Backup and Restore SOP (How to Set Up Backups)"
description: "A plug-and-play standard operating procedure for setting up and running GxP data backups: backup types, schedules, scope per system, the 3-2-1 approach, encryption and access, monitoring, retention, restore and restore testing, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "SOP"
pillar: "csv-csa"
relatedArticles: ["backup-restore-disaster-recovery-validation", "it-change-and-configuration-management-gxp"]
tags: ["backup", "restore", "data integrity", "SOP", "disaster recovery", "21 CFR Part 11", "annex 11"]
tier: "Intermediate"
---

This is a ready-to-use SOP. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Backup and Restore of GxP Data |
| Document number | `<<FILL: SOP-ID, e.g. SOP-IT-021>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of IT Quality>>` |
| Applies to | `<<FILL: sites / systems in scope>>` |

## 1. Purpose

This procedure defines how `<<FILL: COMPANY NAME>>` configures, runs, monitors, and restores backups of GxP electronic records so that data and the systems that hold it can be recovered, complete and unchanged, after loss, corruption, ransomware, or hardware failure. The objective is a backup that is provably recoverable, not a backup that merely runs.

A backup that has never been restored is an assumption, not a control. This SOP treats the restore as the deliverable and the backup job as the means to it.

## 2. Scope

This procedure applies to all computerized systems that create, modify, or store GxP records at the sites listed in the header, including laboratory systems, manufacturing execution and automation systems, quality systems, electronic document management, and the database, file, and configuration data they depend on. It covers on-premise, hosted, and cloud or SaaS systems, including the contractual backup arrangements where a supplier holds the data.

It does not cover non-GxP corporate IT backups, business continuity beyond data recovery, or full site disaster recovery, which are governed by `<<FILL: cross-reference SOP-IDs / DR plan>>`. It works alongside the change control procedure `<<FILL: SOP-ID for change control>>`, because any change to a backup configuration is a change to a validated control.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| System owner | Defines what data must be backed up, the acceptable data loss and downtime for the system, and confirms the restore meets business need. Owns the entry in the backup inventory. |
| IT / backup administrator | Configures backup jobs, schedules, encryption, and storage per this SOP; monitors job completion; performs restores and restore tests; keeps the backup logs. |
| Database administrator | Configures database-consistent backups and transaction-log backups where applicable, and supports point-in-time restore. |
| QA / IT Quality | Approves the backup inventory and restore-test results, oversees deviation handling for failed backups or restores, and confirms backups and restore tests happen on schedule. |
| Information security | Confirms encryption, key management, and access controls meet policy and that backups are protected against tampering and ransomware. |
| Supplier (hosted/SaaS) | Where the supplier holds the data, performs backups to the agreed specification and provides restore evidence; governed by the quality or service agreement. |

## 4. Definitions

- **Backup**: a copy of data and, where needed, system state, kept separately so the original can be recovered after loss or corruption.
- **Full backup**: a complete copy of all data in scope at a point in time.
- **Incremental backup**: a copy of only the data changed since the last backup of any type. Restore needs the last full plus every incremental in the chain.
- **Differential backup**: a copy of all data changed since the last full backup. Restore needs the last full plus the latest differential only.
- **RPO (recovery point objective)**: the maximum acceptable amount of data loss, measured as time. It sets how often backups must run.
- **RTO (recovery time objective)**: the maximum acceptable time to restore service after a failure. It sets the restore method and the storage tier.
- **3-2-1 rule**: at least 3 copies of the data, on at least 2 different media or storage types, with at least 1 copy held off-site or in a separate failure domain.
- **Immutable backup**: a backup copy that cannot be altered or deleted for a set period, including by an administrator, to defend against ransomware and insider deletion.
- **Restore test**: a controlled recovery of backed-up data to confirm it is complete, readable, and usable, documented as evidence.

## 5. Procedure

### 5.1 Build and maintain the backup inventory

For every GxP system, record one line in the backup inventory (section 8). Define, with the system owner:

1. What is in scope: the database, file shares, configuration, audit trail, and any encryption keys or certificates needed to read the data back.
2. The RPO and RTO, justified by the criticality of the data the system holds.
3. The backup types and schedule that meet that RPO.
4. The storage locations and how they satisfy 3-2-1.
5. The retention period, aligned to the records retention schedule.

Review the inventory at least `<<FILL: frequency, e.g. annually>>` and on any system change. A new GxP system is not released for use until its backup line is approved.

### 5.2 Choose backup types and schedule by RPO

Set the schedule from the RPO, not from convenience. The shorter the acceptable data loss, the more frequent the backup.

| Data criticality / RPO | Typical scheme | Notes |
|---|---|---|
| High (RPO at or under 1 hour) | Continuous or transaction-log backup plus daily full | Database systems holding release or batch data; needs point-in-time recovery |
| Medium (RPO 24 hours) | Daily incremental or differential plus weekly full | Most quality and laboratory systems |
| Low (RPO up to 1 week) | Weekly full | Reference-only or low-change systems |

Pick one chain type per system and document it:

- **Full only**: simplest restore, largest storage and backup window. Use for small datasets.
- **Full plus incremental**: smallest daily storage and shortest backup window, but restore depends on the whole chain; one broken incremental breaks the chain.
- **Full plus differential**: a middle path; restore needs only the last full and the latest differential, so it is more resilient than incremental at the cost of larger daily backups.

For databases, use database-consistent (application-aware) backups, not a file copy of open database files, or the restore can be unusable.

### 5.3 Apply the 3-2-1 rule

Every GxP backup must meet, at minimum:

1. **3 copies**: the production data plus at least two backup copies.
2. **2 media or storage types**: do not keep both backup copies on the same disk array or in the same storage account.
3. **1 off-site or separate failure domain**: at least one copy in a different building, region, or cloud account so a single site, fire, flood, or compromised account cannot take out both production and backup.

At least one copy should be immutable or air-gapped so that ransomware or a malicious or mistaken deletion cannot reach every copy. State for each system how each leg of 3-2-1 is met in the inventory.

### 5.4 Encrypt backups and control access

1. Encrypt backups at rest and in transit using `<<FILL: standard, e.g. AES-256>>`.
2. Manage encryption keys separately from the backups, with documented key custody and recovery, so a lost key does not make a valid backup unreadable. Record where keys and any restore credentials are held.
3. Restrict who can read, restore, modify, or delete backups to named, role-based accounts. Backup deletion or retention change is a privileged action that is logged.
4. Confirm the backup system itself keeps an audit trail of jobs, configuration changes, restores, and deletions, consistent with 21 CFR Part 11 and EU GMP Annex 11.

### 5.5 Monitor backups and handle failures

1. Configure automatic alerting on backup job failure, partial completion, missed schedule, and storage capacity thresholds.
2. The backup administrator reviews backup job status every `<<FILL: frequency, e.g. each working day>>` and records the review in the backup log (section 8).
3. On a failed or missed backup, the administrator reruns it the same `<<FILL: working day / shift>>` where possible and records the outcome.
4. A backup failure that leaves a GxP system outside its RPO, or a repeated failure, is raised as a deviation per `<<FILL: SOP-ID for deviations>>` and assessed for data-loss risk.
5. Do not silently accept skipped or zero-byte backups. An unexplained gap is treated like an audit trail gap: investigated, not ignored.

### 5.6 Test restores

A backup is only credited as a control once a restore has been proven.

1. Perform a restore test for each GxP system, or each representative system group, at least `<<FILL: frequency, e.g. annually>>`, and after any major change to the system, the backup configuration, or the storage platform.
2. Restore to an isolated or non-production target so production data is never overwritten by a test.
3. Confirm the restored data is complete (record counts, key files, audit trail present), readable in the application, and unchanged versus a known reference.
4. Measure the actual restore time against the RTO and the recovered point against the RPO.
5. Document the restore test on the restore record (section 9). A restore test that fails to meet RPO or RTO, or returns incomplete or corrupt data, is a deviation.

### 5.7 Perform a production restore

When a real recovery is needed:

1. Raise and authorize the restore per `<<FILL: change control / incident SOP-ID>>` before overwriting any production data; assess impact first.
2. Select the correct restore point for the required RPO. For a corruption or ransomware event, restore from a point known to predate the event, using an immutable or off-line copy.
3. Restore to the target, verify completeness and integrity as in 5.6 step 3, and confirm the audit trail and electronic signatures are intact.
4. Have the system owner and QA confirm the system is fit for GxP use before returning it to service.
5. Record the restore on the restore record (section 9) and link any related deviation or incident.

### 5.8 Retain backups and dispose securely

1. Set each system's backup retention to meet the longer of business need and the records retention schedule; record it in the inventory. Backups of GxP data are not deleted before their record retention period ends.
2. Where a system is decommissioned, confirm a readable copy of its records (and the means to read it) is retained per `<<FILL: SOP-ID for decommissioning>>` before backups are aged out.
3. Dispose of expired or end-of-life backup media securely so GxP data cannot be recovered from discarded media, and record the disposal.

## 6. Acceptance criteria

The backup and restore control for a system is acceptable when all of the following are true:

- The system has an approved backup inventory line stating scope, RPO, RTO, backup types, schedule, storage, and retention.
- Backups complete on schedule and meet the stated RPO, with failures alerted and dispositioned.
- The 3-2-1 rule is met, with at least one off-site copy and at least one immutable or air-gapped copy.
- Backups are encrypted, keys are recoverable and held separately, and access to backups and deletions is role-based and logged.
- A restore test within the defined period has demonstrated complete, readable, unchanged data within RTO, with evidence on file.
- Retention meets the records retention schedule, and disposal of expired media is recorded.

## 7. References

> 21 CFR 211.68 (automatic, mechanical, and electronic equipment; backup of data).
> 21 CFR 211.180 (general requirements; records retention).
> 21 CFR Part 11 (electronic records and signatures; protection of records to enable accurate and ready retrieval).
> EU GMP Annex 11, sections 7.2 (data storage, integrity and backup) and 7.1, and the general principles.
> EU GMP Chapter 4 (Documentation; retention of records).
> MHRA GxP Data Integrity Guidance and Definitions (backup, archive, and the difference between them).
> PIC/S PI 041, Good Practices for Data Management and Integrity.
> ISO/IEC 27001 and ISO/IEC 27040 (information security and storage security) where used as a reference framework.
> ICH Q9, Quality Risk Management (for the risk-based RPO and RTO).

Confirm the current version and clause numbers of each reference before issue. Note that backup and archive are different functions: a backup supports recovery, while a long-term archive supports retention and readability over the full retention period; do not treat one as the other.

## 8. Record generated: backup inventory and daily log

### 8.1 Backup inventory (per system)

| Field | Entry |
|---|---|
| System name and ID | `<<FILL: SYSTEM NAME / ID>>` |
| Data in scope | `<<FILL: database / file shares / config / audit trail / keys>>` |
| Data criticality | `<<FILL: High / Medium / Low>>` |
| RPO | `<<FILL: e.g. 24 hours>>` |
| RTO | `<<FILL: e.g. 8 hours>>` |
| Backup types and schedule | `<<FILL: e.g. daily incremental 22:00, weekly full Sun 23:00>>` |
| Storage copies (3-2-1) | `<<FILL: copy 1 location/media; copy 2; off-site copy; immutable?>>` |
| Encryption / key custody | `<<FILL: AES-256; key held in ...>>` |
| Retention period | `<<FILL: e.g. 7 years, per retention schedule>>` |
| Last restore test (date / result) | `<<FILL>>` |
| Inventory approved (name, date) | `<<FILL>>` |

### 8.2 Backup monitoring log

| Date reviewed | System(s) | Jobs scheduled | Jobs successful | Failures / actions | Reviewer (initials) |
|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: none, or rerun/deviation ref>>` | `<<FILL>>` |

## 9. Record generated: restore record (test or production)

| Field | Entry |
|---|---|
| Restore type | `<<FILL: scheduled test / production recovery>>` |
| System name and ID | `<<FILL>>` |
| Reason / trigger | `<<FILL: annual test / corruption / hardware failure>>` |
| Backup copy and point used | `<<FILL: source copy; restore point date/time>>` |
| Restore target | `<<FILL: isolated test environment / production>>` |
| Completeness check | `<<FILL: record count / key files / audit trail present>>` |
| Integrity check | `<<FILL: data unchanged vs reference; signatures intact>>` |
| Actual restore time vs RTO | `<<FILL: e.g. 3 h 40 m vs 8 h RTO>>` |
| Recovered point vs RPO | `<<FILL: e.g. 21 h vs 24 h RPO>>` |
| Outcome | Pass / Fail (Fail raises deviation) |
| Deviation reference (if raised) | `<<FILL: number or N/A>>` |
| Performed by (name, signature, date) | `<<FILL>>` |
| QA / owner confirmation (name, signature, date) | `<<FILL>>` |

## 10. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 11. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (IT) | `<<FILL>>` | | |
| Reviewer (Information Security) | `<<FILL>>` | | |
| Approver (QA / IT Quality) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the backup inventory and a restore-test record completed for an example chromatography data system, so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

### Backup inventory (specimen)

| Field | Entry |
|---|---|
| System name and ID | Chromatography Data System, server CDS-DB-01 |
| Data in scope | SQL database (results, sequences, audit trail), method and project file shares, server configuration, the database encryption certificate |
| Data criticality | High (holds release-testing results) |
| RPO | 1 hour |
| RTO | 8 hours |
| Backup types and schedule | Transaction-log backup every 30 minutes; daily full at 23:00; weekly full retained long-term |
| Storage copies (3-2-1) | Copy 1: on-array snapshot; Copy 2: backup appliance in a separate building; Off-site copy: encrypted to a separate cloud account; immutable lock 35 days on the cloud copy |
| Encryption / key custody | AES-256 at rest and in transit; certificate and restore credentials held in the IT key vault, custody by IT Quality, recovery procedure on file |
| Retention period | Weekly fulls retained 7 years per the retention schedule; daily and log backups retained 35 days |
| Last restore test (date / result) | 14 March 2026, Pass |
| Inventory approved (name, date) | J. Lim, IT Quality, 16 March 2026 |

### Restore-test record (specimen)

| Field | Entry |
|---|---|
| Restore type | Scheduled annual test |
| System name and ID | Chromatography Data System, server CDS-DB-01 |
| Reason / trigger | Annual restore test plus storage-platform upgrade |
| Backup copy and point used | Off-site cloud copy; restore point 13 March 2026 23:00 full plus log to 14 March 02:00 |
| Restore target | Isolated validation environment CDS-DB-TEST (production untouched) |
| Completeness check | Row counts matched source within tolerance; 12,418 sequences present; audit trail table fully present |
| Integrity check | Three known release results matched the reference exactly; electronic signatures verified intact; checksum match on file shares |
| Actual restore time vs RTO | 3 h 40 m vs 8 h RTO |
| Recovered point vs RPO | 02:00 restore point, 0 minutes of unrecovered transactions in the test window, within 1 h RPO |
| Outcome | Pass |
| Deviation reference (if raised) | N/A |
| Performed by | M. Okafor, IT, signed, 14 March 2026 |
| QA / owner confirmation | A. Patel (system owner) and R. Gomez (QA), signed, 16 March 2026 |

In this example the team did not just confirm the backup job ran. They restored a known point to an isolated target, checked record counts and the audit trail, proved three release results matched a reference, verified signatures survived the restore, and measured the real restore time against the RTO. That sequence, configured backup to monitored job to proven restore, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this SOP prevents

- Backups are configured and the job log shows "success", but no restore has ever been tested, so recoverability is unproven.
- A system holds release data with a 1-hour RPO but is backed up only once a day, so up to a day of data can be lost.
- All backup copies sit on the same array or in the same cloud account, so a single failure or a ransomware event takes out production and every backup at once.
- No immutable or off-line copy exists, and an administrator (or attacker) can delete the backups along with the data.
- A failed or zero-byte backup was logged and ignored, with no rerun and no deviation.
- The database is backed up as open files rather than with an application-aware method, and the restore is unusable.
- Backups are encrypted but the key custody and recovery are undocumented, so a valid backup cannot be read back.
- Backups are aged out before the records retention period ends, deleting GxP records that still had to be retained.
- A production restore overwrote data with no impact assessment, no authorization, and no integrity check afterward.

## How to adapt this SOP

1. Set your document number, owner, and effective date in the header.
2. Replace the generic criticality tiers in section 5.2 with your actual systems and the RPO and RTO each system owner has agreed.
3. Build out the backup inventory in section 8.1 for every GxP system, and confirm each one meets 3-2-1 with at least one immutable or off-site copy.
4. Set your encryption standard and document key custody and recovery in section 5.4.
5. Set realistic monitoring and restore-test frequencies in sections 5.5 and 5.6, and put them on a schedule QA can track.
6. For hosted or SaaS systems, fold the supplier's backup and restore obligations into the quality or service agreement and require restore evidence from the supplier.
7. Point the cross-references in sections 2, 5.5, 5.7, and 5.8 to your real change control, deviation, incident, decommissioning, and retention procedures.
8. Confirm every regulation in section 7 against the current published version before issue.
