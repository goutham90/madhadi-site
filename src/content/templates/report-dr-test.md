---
title: "Disaster Recovery Test Report"
description: "A plug-and-play disaster recovery test report covering the scenario tested, the recovery timeline, RTO and RPO achieved against target, issues and gaps, data integrity verification, CAPA, the readiness conclusion, and approvals, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Report"
pillar: "csv-csa"
relatedArticles: ["backup-restore-disaster-recovery-validation", "it-change-and-configuration-management-gxp"]
tags: ["disaster recovery", "rto", "rpo", "business continuity", "data integrity", "csv", "backup"]
tier: "Intermediate"
---

This is a ready-to-use disaster recovery (DR) test report. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your evidence, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

A DR test report is the objective evidence that you can actually recover a GxP computerized system after a disruptive event, not just that you have a written plan. It records what you tested, how long recovery took against your stated targets, how much data you lost or could have lost, what broke, what you will fix, and whether the system is fit to keep relying on. Inspectors read this report to decide whether your continuity claim is real.

## Document control header

| Field | Entry |
|---|---|
| Document title | Disaster Recovery Test Report for `<<FILL: system name>>` |
| Document number | `<<FILL: REP-ID, e.g. DRT-IT-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of IT Quality>>` |
| System / scope | `<<FILL: system name, environment, sites served>>` |
| Linked plan / protocol | `<<FILL: DR test plan or protocol number>>` |
| Test date(s) | `<<FILL: date the test was executed>>` |

## 1. Purpose

This report documents the execution and results of the disaster recovery test for `<<FILL: system name>>`, operated by `<<FILL: COMPANY NAME>>`. The objective is to demonstrate, with objective evidence, that the system and its GxP data can be recovered after the loss described in section 4 within the recovery time objective (RTO) and recovery point objective (RPO) defined in the DR plan, and that recovered data is complete, accurate, and unaltered.

## 2. Scope

This report covers the DR test executed against `<<FILL: system / environment>>` per the linked plan. It includes the recovery of the application, its database or data store, integrations needed to make the system usable, and the verification of recovered GxP data. It does not cover the routine backup and restore procedure itself, which is qualified separately under `<<FILL: backup/restore SOP or protocol ID>>`, nor full business continuity for non-system processes, governed by `<<FILL: BCP reference>>`.

## 3. References to inputs

| Input | Reference |
|---|---|
| DR test plan / protocol | `<<FILL: number and version>>` |
| Business continuity / DR plan (SOP) | `<<FILL: SOP-ID>>` |
| Backup and restore procedure | `<<FILL: SOP-ID>>` |
| Business impact analysis (source of RTO/RPO) | `<<FILL: reference>>` |
| System risk assessment / GxP classification | `<<FILL: reference>>` |
| Configuration baseline / build document | `<<FILL: reference>>` |

## 4. Scenario tested

State the disruptive event you simulated and why it is representative. A DR test for a high-criticality system should simulate a full loss of the production environment, not a single-file restore.

| Item | Entry |
|---|---|
| Scenario type | `<<FILL: e.g. total loss of primary data center / ransomware encryption of production / database corruption / VM host failure>>` |
| Trigger simulated | `<<FILL: how the loss was induced or declared, e.g. production VMs powered off and isolated>>` |
| Recovery target environment | `<<FILL: secondary site / DR cloud region / rebuilt host>>` |
| Recovery method | `<<FILL: restore from backup / failover to replica / rebuild from image plus data restore>>` |
| Backup / replica used | `<<FILL: backup set ID and timestamp, or replication checkpoint>>` |
| Test type | `<<FILL: tabletop / partial (component) / full failover>>` |
| Planned vs unplanned | `<<FILL: announced exercise or unannounced>>` |
| Personnel performing recovery | `<<FILL: roles, not just one named hero>>` |

State whether the recovery was performed by following the documented DR procedure step by step (the point of the test) or with ad hoc actions. If recovery only worked because a knowledgeable person improvised, the procedure failed even if the system came back.

## 5. Recovery timeline

Record the actual sequence with timestamps. The timeline is the heart of the report. Inspectors and your own management read it to see whether the recovery was orderly and reproducible.

| Step | Activity | Planned time | Actual start | Actual end | Performed by | Evidence ref |
|---|---|---|---|---|---|---|
| 1 | Disaster declared / test initiated | T0 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 2 | DR team mobilized, roles assigned | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 3 | Infrastructure provisioned at recovery site | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 4 | Backup / replica located and validated | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 5 | Application and data restored | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6 | Integrations / interfaces reconnected | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 7 | System verified functional (smoke test) | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 8 | Data integrity verification complete | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 9 | System released for use / test closed | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

Time-stamp the start of the disruption (T0) and the moment the system was confirmed usable. The span between them, not the time the restore finished, is your real recovery time.

## 6. RTO and RPO achieved versus target

This is the quantitative result of the test. State the target from the business impact analysis and the value you actually achieved, then declare pass or fail.

| Objective | Definition | Target | Achieved | Pass / Fail |
|---|---|---|---|---|
| RTO | Maximum tolerable time from disruption to the system being usable again | `<<FILL: e.g. 8 hours>>` | `<<FILL: actual elapsed time>>` | `<<FILL>>` |
| RPO | Maximum tolerable data loss, measured as time between the last good recovery point and the disruption | `<<FILL: e.g. 24 hours>>` | `<<FILL: actual age of recovered data>>` | `<<FILL>>` |

Recovery time objective (RTO) is how long you can be down. Recovery point objective (RPO) is how much data you can afford to lose. They are independent: you can meet RTO and miss RPO (back up fast, but stale data) or the reverse. Report both, with the units, and show the arithmetic that produced the achieved value.

Achieved RTO = (time system confirmed usable) minus (T0). Achieved RPO = (T0) minus (timestamp of the last recovery point that was actually restored). If either was missed, that is a finding in section 7, not a footnote.

## 7. Issues, gaps, and observations

List everything that did not go to plan, even items that did not stop recovery. A test that records zero issues for a complex system is usually a test that was not run hard enough.

| ID | Description of issue / gap | Phase | Impact on recovery | Severity | Action ref |
|---|---|---|---|---|---|
| `<<FILL: I-01>>` | `<<FILL>>` | `<<FILL: provisioning / restore / integration / verification>>` | `<<FILL>>` | `<<FILL: Critical / Major / Minor>>` | `<<FILL: CAPA/CR ID>>` |
| `<<FILL: I-02>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

Examples of issues worth recording: backup media or cloud snapshot not where the runbook said it was; restore succeeded but a dependent service or interface was missing; recovered environment ran on a different software version than production; out-of-date contact list or access credentials; a step in the runbook that no longer matched reality; the achieved RTO or RPO missing target.

## 8. Data integrity verification

Recovering a running application is not enough. You must prove the recovered GxP data is complete, accurate, and unaltered relative to the last known good state. Record how you checked, not just the conclusion.

| Check | Method | Expected result | Actual result | Pass / Fail |
|---|---|---|---|---|
| Record count reconciliation | `<<FILL: compare row/record counts to pre-loss baseline or last report>>` | Counts match within RPO window | `<<FILL>>` | `<<FILL>>` |
| Checksum / hash verification | `<<FILL: compare file or database checksums / backup verification report>>` | Hashes match | `<<FILL>>` | `<<FILL>>` |
| Spot-check critical records | `<<FILL: open N high-criticality records and compare values to source>>` | Values identical | `<<FILL>>` | `<<FILL>>` |
| Audit trail intact and continuous | `<<FILL: confirm audit trail restored, attributable, no gaps beyond the disruption>>` | Continuous and attributable | `<<FILL>>` | `<<FILL>>` |
| Electronic signatures intact | `<<FILL: confirm signatures and their record linkage survived restore>>` | Signatures bound to records | `<<FILL>>` | `<<FILL>>` |
| Sequences / linkages / referential integrity | `<<FILL: confirm parent-child links, IDs, and sequences are unbroken>>` | No orphaned or broken links | `<<FILL>>` | `<<FILL>>` |
| Date, time, and time zone correct | `<<FILL: confirm system clock and stored timestamps are correct after restore>>` | Correct and synchronized | `<<FILL>>` | `<<FILL>>` |

Data lost between the last recovery point and the disruption is expected within the RPO and must be quantified and assessed, not hidden. Data altered or corrupted by the recovery itself is a defect, not acceptable loss, and is a critical finding.

## 9. CAPA

For every gap that needs more than an immediate fix, raise a corrective and preventive action and track it to closure. A DR test report with open critical gaps and no CAPA is an inspection finding waiting to happen.

| CAPA ID | Linked issue | Action description | Type | Owner | Due date | Status |
|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL: issue ID from section 7>>` | `<<FILL>>` | `<<FILL: corrective / preventive>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: open / closed>>` |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

Route CAPAs through `<<FILL: CAPA SOP-ID>>`. Where a finding shows the DR plan, runbook, or backup configuration is wrong, the corrective action includes updating that document through change control per `<<FILL: change control SOP-ID>>` and, where the change is material, a confirming re-test.

## 10. Conclusion on DR readiness

State a clear, defensible verdict. Do not bury it.

| Item | Entry |
|---|---|
| Overall result | `<<FILL: Pass / Pass with conditions / Fail>>` |
| RTO met | `<<FILL: Yes / No>>` |
| RPO met | `<<FILL: Yes / No>>` |
| Data integrity verified | `<<FILL: Yes / No>>` |
| Critical issues open | `<<FILL: count>>` |
| Conditions on continued use | `<<FILL: none, or list, e.g. interim manual backup until CAPA-x closed>>` |
| Re-test required | `<<FILL: Yes / No, and trigger>>` |
| Next scheduled DR test | `<<FILL: date or interval>>` |

Write the readiness statement in plain terms: either the system can be recovered within the committed RTO and RPO with verified data integrity, or it cannot yet and here is what closes the gap. "Pass with conditions" is honest only if the conditions are tracked and time-bound. A test that missed RTO, RPO, or a data integrity check is not a pass; say so and raise the CAPA.

## 11. Evidence index

| No. | Evidence | Reference / attachment |
|---|---|---|
| 1 | Recovery runbook / procedure followed | `<<FILL>>` |
| 2 | Timestamped activity log / screenshots | `<<FILL>>` |
| 3 | Backup or restore verification report | `<<FILL>>` |
| 4 | Data integrity check outputs (counts, checksums) | `<<FILL>>` |
| 5 | Smoke / functional test results | `<<FILL>>` |
| 6 | Issue log and CAPA records | `<<FILL>>` |

## 12. References

> 21 CFR Part 11 (electronic records and signatures, including protection of records to enable accurate and ready retrieval throughout the retention period).
> 21 CFR 211.68 (backup data and the maintenance of records by computerized systems).
> EU GMP Annex 11, sections 7.2 (regular backups and verification of backup data) and 16 (business continuity, ensuring continuity of support for processes in the event of system breakdown).
> EU GMP Chapter 4 (documentation and record retention).
> ICH Q9, Quality Risk Management (basis for the criticality-driven RTO and RPO).
> PIC/S PI 011, Good Practices for Computerised Systems in GxP Environments.
> ISO 22301 (business continuity management systems) and ISO/IEC 27031 (ICT readiness for business continuity), where used as a framework.
> GAMP 5 (Second Edition), for computerized system lifecycle and continuity expectations.

Confirm the current version and clause numbers of each reference before issue.

## 13. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 14. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (IT / system owner) | `<<FILL>>` | | |
| Reviewer (IT Quality) | `<<FILL>>` | | |
| Business / process owner | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the report completed for an example laboratory information management system, so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| System / scope | LIMS, production environment, serving two QC laboratories |
| Scenario type | Total loss of primary data center (simulated by powering off and isolating all production VMs) |
| Recovery method | Rebuild at secondary site from gold image plus database restore from last night's backup |
| Backup used | Backup set LIMS-PROD-2026-0609-0200, taken 09 June 2026 at 02:00 |
| Test type | Full failover, announced exercise |
| RTO target / achieved | 8 hours target; 6 hours 40 minutes achieved (T0 09:00, system usable 15:40 on 09 June 2026); Pass |
| RPO target / achieved | 24 hours target; 7 hours achieved (last recovery point 02:00, disruption declared 09:00); Pass |
| Data integrity | Record counts reconciled to the 02:00 baseline; database checksum matched the backup verification report; 20 high-criticality result records spot-checked against source documents, all identical; audit trail continuous and attributable with the expected gap only during the outage; e-signatures bound to records intact |
| Issues found | I-01 (Major): the runbook pointed to a decommissioned backup share, so the team lost about 40 minutes locating the current backup. I-02 (Minor): the recovered environment came up on application version 7.2 while production was running 7.3; no data impact, but a configuration drift between the gold image and production |
| CAPA | CAPA-2026-0091: update the DR runbook with the correct backup location and add a quarterly runbook accuracy check (preventive). CAPA-2026-0092: bring the secondary-site gold image under the same change control as production so versions stay in step (corrective and preventive) |
| Conclusion | Pass with conditions. RTO, RPO, and data integrity all met. Continued reliance on the DR capability is acceptable while CAPA-2026-0091 and -0092 are closed by 31 July 2026. No re-test required; gold-image fix will be confirmed at the next scheduled DR test |
| Next scheduled DR test | June 2027 (annual) |

In this example the team simulated a real disaster rather than a single-file restore, time-stamped the full timeline, computed achieved RTO and RPO from the actual clock, proved data integrity with counts, checksums, and spot-checks rather than a bare assertion, recorded the two things that went wrong even though both passed, and routed each to a tracked CAPA. The verdict is honest: a pass on the numbers, with two time-bound conditions. That sequence is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this report prevents

- A DR plan exists on paper but has never been tested, or the last test is years old with no record.
- The test was a single-file or single-table restore presented as proof of full disaster recovery.
- RTO and RPO are stated as targets but the report never records what was actually achieved, or states "pass" with no measured value and no arithmetic.
- Recovery "worked" only because one expert improvised; the documented runbook was never followed and would not work in their absence.
- The application was recovered but data integrity of the restored records was never verified, so completeness, audit trail continuity, and signature linkage are unproven.
- Issues were observed during the test but not recorded, or recorded with no CAPA and left open with no owner or due date.
- A test that missed RTO, RPO, or a data integrity check was signed off as a pass.
- The recovered environment ran a different software version or configuration than production, with the drift unnoticed and unmanaged.

## How to adapt this report

1. Set your document number, owner, system scope, and test date in the header, and link your DR test plan.
2. Pull RTO and RPO targets in section 6 from your business impact analysis, not from a round number someone liked; the criticality of the data drives both.
3. Make the scenario in section 4 representative of a real worst case for the system's criticality; a high-criticality release-affecting system warrants a full-loss failover, not a partial restore.
4. Time-stamp the section 5 timeline as you go during the test, not from memory afterward, and keep the screenshots and logs as evidence.
5. Tailor the data integrity checks in section 8 to your record types: add endotoxin or stability data linkages, instrument result re-linkage, or interface message replay where relevant.
6. Route every gap through your real CAPA and change control procedures, and require a confirming re-test where a material configuration or backup defect is fixed.
7. Confirm every regulation in section 12 against the current published version before issue.
