---
title: "System Decommissioning and Retirement Plan"
description: "A plug-and-play plan to retire a GxP computerized system in a controlled way: data migration or archival, record retrieval and retention, access removal, verification, the final report, and approvals, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Plan"
pillar: "csv-csa"
relatedArticles: ["validation-master-plan-and-periodic-review", "writing-validation-protocols-and-reports", "validation-deliverables-guide"]
tags: ["decommissioning", "retirement", "data migration", "archival", "record retention", "data integrity", "computerized systems"]
tier: "Advanced"
---

This is a ready-to-use decommissioning and retirement plan. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your data inventory and retention schedule, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

Retiring a validated system is a change, not a deletion. The records that system created stay subject to the same retention and integrity rules after the system is gone. The whole point of this plan is to prove that nothing that has to survive was lost, that nothing that should not survive lingers, and that someone can still read a record years later when an inspector asks.

## Document control header

| Field | Entry |
|---|---|
| Document title | Decommissioning and Retirement Plan for `<<FILL: system name>>` |
| Document number | `<<FILL: PLAN-ID, e.g. DEC-IT-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. System Owner>>` |
| System under retirement | `<<FILL: system name, version, validation ID>>` |
| Linked report | `<<FILL: decommissioning report number to be issued>>` |

## 1. Purpose

This plan defines how `<<FILL: COMPANY NAME>>` retires the GxP computerized system `<<FILL: system name>>` so that GxP records created by the system remain available, readable, and integrity-controlled for their full retention period, access to the system is removed, and the retirement is documented and approved. The objective is to take the system out of service without losing or corrupting any record that must be kept, and to be able to prove that to an inspector.

## 2. Scope

This plan applies to the system listed in the header at `<<FILL: site / area>>`, including its application, database, interfaces, and the GxP records it holds. It covers the decision to retire, the fate of every data set the system owns (migrate, archive, or destroy with justification), record retrieval over the retention period, removal of user and system access, verification that records survived intact, and the final report and approvals.

It does not cover routine deletion of individual records during operation, retirement of non-GxP systems (handled under `<<FILL: cross-reference IT decommissioning SOP-ID>>`), or physical asset disposal of hardware (handled under `<<FILL: cross-reference asset disposal SOP-ID>>`), except where that hardware holds GxP data.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| System owner | Initiates retirement, owns this plan, confirms the data inventory is complete, and signs the decommissioning decision. |
| Process / business owner | Confirms which records are GxP, sets the retention period from the records retention schedule, and confirms the successor process or system. |
| IT / system administrator | Executes the technical migration or archival, removes access, decommissions the application and database, and confirms backups and restores. |
| Validation / CSV | Authors and approves the plan, defines the verification approach, and writes the report. |
| Data owner / archivist | Accepts the archived records, confirms retrievability over the retention period, and maintains the archive index. |
| Quality Assurance | Approves the plan, the migration or archival verification, deviations, and the report, and owns the final disposition. |

## 4. Definitions

- **Decommissioning**: the controlled process of taking a system out of active use while preserving its GxP records for the required retention period.
- **Retirement**: the end state in which the system no longer creates or modifies records and is removed from the validated inventory.
- **Migration**: moving records from the retiring system into a successor system or repository in a usable form, with verification that the moved records are complete and accurate.
- **Archival**: moving records to a long-term store (online, near-line, or offline) where they are retained, protected, and retrievable but no longer in active use.
- **Retrieval (readability)**: the ability to locate, open, and make human-readable a retained record across its full retention period, including any associated metadata and audit trail.
- **Static archive**: records preserved in a fixed, viewable form (for example a validated PDF/A export plus the raw data) where the original application is no longer available.
- **Dynamic data**: records that need their original processing functions to be meaningful (for example chromatograms that must be re-integrated, spreadsheets with live formulas), which must keep that functionality or be migrated to something that provides it.

## 5. Retirement decision and inventory

### 5.1 Reason for retirement

| Item | Entry |
|---|---|
| Reason for retirement | `<<FILL: end of life / replaced by successor / vendor support ended / consolidation>>` |
| Successor system or process | `<<FILL: name and validation ID, or "manual process under SOP-ID", or "none">>` |
| Planned last day of operational use | `<<FILL: date>>` |
| Change control reference | `<<FILL: change control number governing this retirement>>` |

Retirement is initiated and tracked under change control per `<<FILL: change control SOP-ID>>`. This plan is an attachment to that change.

### 5.2 Data and record inventory

List every record set the system holds. For each, classify GxP status, the retention period from the schedule, whether the data is static or dynamic, and the disposition (migrate, archive, or destroy). Nothing is decommissioned until every row has a disposition and a retention period.

| Record set / table / module | GxP? | Retention period | Static or dynamic | Disposition (migrate / archive / destroy) | Successor location |
|---|---|---|---|---|---|
| `<<FILL: e.g. batch records>>` | Yes / No | `<<FILL: years>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: e.g. audit trail / metadata>>` | Yes / No | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: e.g. user accounts / config>>` | Yes / No | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

| Item | Entry |
|---|---|
| Longest GxP retention driving archive duration | `<<FILL: years and which record set>>` |
| Retention schedule reference | `<<FILL: records retention SOP-ID / schedule>>` |
| Records retained as static archive | `<<FILL: list>>` |
| Records migrated to successor | `<<FILL: list>>` |
| Records approved for destruction (with justification) | `<<FILL: list or "none">>` |

Audit trails and metadata are records. Retain them for the same period as the data they describe; an archived result without its audit trail is an incomplete record. Where a record is dynamic and the successor cannot reproduce its processing, keep the original application available in a controlled read-only environment for the retention period, or migrate to a system that preserves the function.

## 6. Data migration or archival approach

State which path applies to each record set from section 5.2, and how each will be verified.

### 6.1 If migrating to a successor system

| Item | Entry |
|---|---|
| Source and target systems | `<<FILL: from / to>>` |
| Migration method | `<<FILL: validated ETL / scripted export-import / manual with double-check>>` |
| Field mapping reference | `<<FILL: mapping specification document>>` |
| Verification method | `<<FILL: record counts, checksums/hash compare, row-level reconciliation, sample of 100% critical + risk-based sample others>>` |
| Migration treated as a change | `<<FILL: change control number; migration validated per CSV approach>>` |

Migration is itself a validated activity. Verify completeness (no records dropped), accuracy (values, dates, and timestamps match the source), and integrity (audit trail and metadata carried across or preserved). Reconcile record counts source-to-target and compare a defined sample, including 100 percent of the highest-criticality records where feasible. Do not decommission the source until migration verification is approved.

### 6.2 If archiving for retention

| Item | Entry |
|---|---|
| Archive format | `<<FILL: PDF/A export plus native raw data / database snapshot / read-only application instance>>` |
| Archive location and media | `<<FILL: validated repository / storage system / offsite, with redundancy>>` |
| Indexing / how records are found | `<<FILL: archive index, search keys, naming convention>>` |
| Retention period applied | `<<FILL: years, from section 5.2>>` |
| Protection | `<<FILL: read-only, access-controlled, backed up, integrity checked>>` |

A static export alone is acceptable only when the data is genuinely static. For dynamic data, the export does not satisfy the requirement on its own; preserve the raw data and the means to process it. Confirm the archive media and format remain readable over the full retention period and plan for media or format refresh if that period exceeds the technology's reliable life.

## 7. Record retrieval over the retention period

A record kept but unreadable is a record lost. Demonstrate, before the system is gone, that someone can find and open the retained records for the full retention period.

| Item | Entry |
|---|---|
| Retrieval method | `<<FILL: successor system query / archive viewer / read-only legacy instance / restore from snapshot>>` |
| Who can retrieve and how requested | `<<FILL: role, request route>>` |
| Readability check at retirement | `<<FILL: open and view N representative records incl. data + metadata + audit trail>>` |
| Periodic readability re-check | `<<FILL: frequency, e.g. annually or at periodic review, until retention expires>>` |
| Format / media obsolescence plan | `<<FILL: trigger and plan for migration or media refresh>>` |

Run a retrieval test as part of this plan: pull a defined set of records, confirm the data, metadata, and audit trail are present and human-readable, and record the result. Schedule a periodic re-check so an archive does not quietly become unreadable years later when no one is looking.

## 8. Access removal and system shutdown

Sequence access removal after migration or archival verification, never before. Removing access early can orphan records or break a migration mid-flight.

| Step | Action | Done by | Evidence |
|---|---|---|---|
| 1 | Confirm migration / archival verification is approved (section 6) | `<<FILL>>` | `<<FILL>>` |
| 2 | Confirm retrieval test passed (section 7) | `<<FILL>>` | `<<FILL>>` |
| 3 | Disable user accounts and set system to read-only (cut-off date) | `<<FILL>>` | `<<FILL>>` |
| 4 | Disable interfaces / integrations to and from the system | `<<FILL>>` | `<<FILL>>` |
| 5 | Take and verify a final backup or snapshot of the system | `<<FILL>>` | `<<FILL>>` |
| 6 | Remove administrative and service access | `<<FILL>>` | `<<FILL>>` |
| 7 | Shut down the application and database | `<<FILL>>` | `<<FILL>>` |
| 8 | Sanitize or dispose of media holding GxP data (only after archive verified) | `<<FILL>>` | `<<FILL>>` |
| 9 | Update the validated system inventory and asset register to "retired" | `<<FILL>>` | `<<FILL>>` |
| 10 | Cancel periodic review, backups, and support contracts no longer needed | `<<FILL>>` | `<<FILL>>` |

Media that held GxP data is sanitized or destroyed only after the archive or migration is verified and approved, and the sanitization or destruction is itself recorded. Keep the final backup or snapshot until the archive's retrievability is confirmed; it is the fallback if the archive proves incomplete.

## 9. Verification and acceptance criteria

Retirement is acceptable when all of the following are true and evidenced.

| Criterion | Requirement |
|---|---|
| Inventory complete | Every record set in section 5.2 has a GxP classification, a retention period, and an approved disposition. |
| Migration verified | Counts reconcile source-to-target; sampled records (including 100 percent of highest-criticality where feasible) match in value, date, timestamp, and metadata; audit trail preserved. |
| Archive verified | Records retained in approved format and location, protected read-only, indexed, and retained for the longest applicable period. |
| Retrieval demonstrated | A retrieval test returned complete, human-readable records with metadata and audit trail; a periodic re-check is scheduled. |
| Access removed | All user, admin, and service access removed; interfaces disabled; final backup taken and verified. |
| Nothing lost | No GxP record that must be retained was deleted; any destruction was justified, approved, and recorded. |
| Inventory updated | System marked retired in the validated inventory; periodic review, backups, and contracts adjusted. |

A single missing or unreadable critical record is a failure of the retirement, investigated as a deviation per `<<FILL: deviation SOP-ID>>`, not waved through.

## 10. GxP record-keeping considerations

- **Retention survives the system.** The obligation to keep a record runs from the record, not the application. Retire the software, keep the records for their full period under 21 CFR Part 211 / Part 820 retention rules and your schedule.
- **Readability over time.** 21 CFR Part 11 and EU GMP Annex 11 require electronic records be retrievable and readable throughout retention. Plan for format and media obsolescence; a tape no reader can read, or a file no application can open, fails this.
- **Audit trail and metadata are part of the record.** Migrate or archive them with the data. Discarding the audit trail to save space destroys the record's integrity (ALCOA+: complete, attributable).
- **Dynamic data stays dynamic.** Where re-processing is needed to interpret a record, a flat export is not enough; preserve the function or migrate to a system that provides it.
- **Destruction is a deliberate, approved act.** Records may be destroyed only after their retention period ends, with a documented, QA-approved justification and a destruction record. When in doubt, retain.
- **Validated change.** The retirement and any migration are managed under change control and validated commensurate with risk per ICH Q9 and your CSV approach.
- **The system stays "answerable."** Even retired, you must be able to answer an inspector's question about a record it created, years later. Build that capability before you switch the system off.

## 11. Deviations and handling

Any record that cannot be migrated, archived, or retrieved, any reconciliation mismatch, or any departure from this plan is documented as a deviation per `<<FILL: deviation SOP-ID>>` and assessed for impact before the next step proceeds. Do not remove access or destroy media until an open deviation affecting record preservation is resolved.

## 12. Final report

On completion, the plan owner issues report `<<FILL: report number>>` summarizing the inventory and dispositions, the migration or archival verification results, the retrieval test outcome, the access-removal evidence, all deviations and their resolution, the confirmed retention period and archive location, and the conclusion that the system is retired with its records preserved and retrievable. The report is approved by QA before the retirement is considered complete.

## 13. Attachments

| No. | Attachment |
|---|---|
| 1 | Data and record inventory with dispositions |
| 2 | Field mapping specification (if migrating) |
| 3 | Migration or archival verification records (counts, checksums, samples) |
| 4 | Retrieval test record |
| 5 | Access-removal and shutdown evidence |
| 6 | Media sanitization or destruction records |
| 7 | Retention schedule extract for the affected records |

## 14. References

> 21 CFR Part 11 (electronic records and signatures; retrievability and readability over retention).
> 21 CFR 211.180 and 211.198 (records retention for drug products).
> 21 CFR 820.180 (general records requirements; for devices under the QMSR, 21 CFR Part 820, effective 2 February 2026, incorporating ISO 13485:2016 by reference; legacy section 820.180 is reserved, so apply the ISO 13485 records-control requirements).
> EU GMP Annex 11 (Computerised Systems), sections on data, archiving, and ensuring records remain readable throughout retention.
> EU GMP Chapter 4 (Documentation; retention of records).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision, for change management of the retirement.
> MHRA GxP Data Integrity Guidance and Definitions (archiving, retention, and readability of true copies).
> PIC/S PI 041, Good Practices for Data Management and Integrity (data lifecycle, archiving, migration).
> GAMP 5 (Second Edition) guidance on system retirement, data migration, and records management.
> ICH Q9, Quality Risk Management (risk-based approach to the retirement and migration).

Confirm the current version and clause numbers of each reference before issue.

## 15. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 16. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Validation / CSV) | `<<FILL>>` | | |
| System owner | `<<FILL>>` | | |
| IT / administrator | `<<FILL>>` | | |
| Data owner / archivist | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the inventory, migration or archival approach, and acceptance section completed for an example laboratory information system being replaced, so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| System under retirement | Laboratory information system, version 7.2, validation ID CSV-LAB-014 |
| Reason for retirement | Replaced by a successor LIMS; vendor support for version 7.2 ends in 12 months |
| Successor system | LIMS-NEXT, validation ID CSV-LAB-031 |
| Change control reference | CC-2026-0307 |
| Record sets and dispositions | Sample results and COAs (GxP, 11 years, dynamic) migrate to LIMS-NEXT; stability data (GxP, life of product plus 1 year, dynamic) migrate; audit trail and metadata (GxP, match parent data) migrate; instrument configuration (non-GxP) destroy; legacy user accounts (GxP relevant for attribution, 11 years) archive as read-only export |
| Longest GxP retention driving archive | Sample results/COAs and legacy user accounts: 11 years |
| Migration method | Validated extract-transform-load, mapping spec MAP-LAB-031; verification by record-count reconciliation plus checksum compare plus 100 percent review of all release COAs and a 10 percent risk-based sample of the rest |
| Migration verification result | 482,114 source records, 482,114 in target; checksums matched; 100 percent of 6,210 release COAs reconciled value, date, timestamp, and analyst attribution; 10 percent sample of remaining records: 0 discrepancies; audit trail carried across |
| Archive for legacy accounts | PDF/A export plus CSV of the account-to-name-to-role table, stored read-only in the validated document archive, indexed by employee ID, retained 11 years |
| Retrieval test | Pulled 25 records spanning 2018 to 2026 in LIMS-NEXT and 10 archived account records; all opened, all showed data, metadata, and audit trail, all human-readable; annual re-check scheduled until 2037 |
| Access removal | Source set read-only on cut-off 30 June 2026; user accounts disabled; interfaces to instruments and ERP disabled; final database snapshot taken and restore-verified; admin access removed; application shut down 15 July 2026; system marked "retired" in inventory; periodic review and backup job cancelled |
| Media destruction | Source database server disks sanitized to standard 28 July 2026, after archive and migration verified and approved; destruction record DST-2026-019 |
| Result | All record sets dispositioned; migration and archive verified; retrieval demonstrated and re-check scheduled; access removed; nothing required-to-retain was lost; report DEC-LAB-014-RPT approved by QA |

In this example the team built a complete inventory before touching anything, treated the migration as a validated change with count and checksum reconciliation plus 100 percent review of the highest-risk records, archived the attribution data they could not migrate, proved a record from 2018 could still be opened with its audit trail, removed access only after verification, and destroyed media only after the archive was confirmed. That sequence, inventory to verified preservation to retrieval proof to access removal to justified destruction, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this plan prevents

- A retired system's records cannot be retrieved or read, because the application is gone and only an unreadable backup remains.
- Data migrated to a new system with no verification that records were complete and accurate; counts never reconciled.
- Audit trail or metadata discarded during migration or archival, leaving results that are no longer attributable or complete.
- Dynamic data (for example chromatograms) flattened to PDF, so it can no longer be re-processed when a result is challenged.
- System access removed and the application shut down before migration or archival was verified, orphaning records mid-process.
- Media holding GxP data wiped or disposed of before the archive was confirmed, with no destruction record.
- Records destroyed before the retention period ended, or with no documented, approved justification.
- Retention period for archived records not set from the schedule, so an archive is kept too briefly or with no defined end.
- No periodic check that the archive is still readable, so obsolescence is discovered only when a record is finally needed.
- Retirement done with no change control and no entry removing the system from the validated inventory.

## How to adapt this plan

1. Set your document number, owner, change control reference, and effective date in the header.
2. Build the section 5.2 inventory from your real record sets, classify each as GxP or not, and pull each retention period from your records retention schedule. Do not start any technical step until every row has a disposition.
3. Choose migrate or archive per record set and fill the matching part of section 6 with your real method, mapping reference, and verification approach. State your reconciliation and sampling plan, including 100 percent review of your highest-criticality records.
4. Define the retrieval method and the periodic readability re-check in section 7, sized to your longest retention period, and plan for media or format obsolescence.
5. Sequence section 8 so access removal and any media destruction happen only after verification is approved; keep the final backup until retrievability is confirmed.
6. Point the cross-references in sections 2, 5.1, 6.1, and 11 to your real IT decommissioning, asset disposal, change control, and deviation procedures.
7. Confirm every regulation in section 14 against the current published version before issue, including the QMSR records-control position for devices.
