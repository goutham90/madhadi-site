---
title: "Data Migration Validation Protocol"
description: "A plug-and-play protocol to validate a GxP data migration: source-to-target field mapping, migration and transformation rules, extract-transform-load verification, reconciliation by counts, checksums and sampling, defect handling, rollback, and acceptance, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Protocol"
pillar: "csv-csa"
relatedArticles: ["data-migration-validation", "gamp5-csv-framework"]
tags: ["data migration", "validation", "reconciliation", "data integrity", "etl", "21 CFR Part 11", "csv"]
tier: "Advanced"
---

This is a ready-to-use data migration validation protocol. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your mapping specification and extract queries, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

A migration is the one event where every record you ever kept passes through a transformation at once. If a rounding rule, a date format, a code lookup, or an encoding choice is wrong, it is wrong across the whole population, silently, and you carry the corrupted data forward as if it were trustworthy. This protocol exists to prove, with evidence, that what landed in the target is a complete and faithful representation of what left the source, and that you can recover if it is not.

## Document control header

| Field | Entry |
|---|---|
| Document title | Data Migration Validation Protocol for `<<FILL: source system to target system>>` |
| Document number | `<<FILL: PRT-ID, e.g. DMV-IT-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Computer System Validation>>` |
| Source system / ID | `<<FILL: source system name, version, environment>>` |
| Target system / ID | `<<FILL: target system name, version, environment>>` |
| Linked report | `<<FILL: report number to be issued, e.g. DMR-IT-031>>` |

## 1. Purpose

This protocol defines the approach, verification, reconciliation, and acceptance criteria to demonstrate that GxP data moved from `<<FILL: source system>>` to `<<FILL: target system>>` is complete, accurate, attributable, and usable for its intended purpose in the target. The objective is to prove that no record was lost, duplicated, truncated, mis-mapped, or silently altered, and that the migrated data carries forward the controls required by 21 CFR Part 11 and EU GMP Annex 11.

## 2. Scope

This protocol covers the one-time (or repeated cutover) movement of the data objects listed in section 5 from the named source to the named target, including the extract, any transformation, the load, the verification of each step, the reconciliation of the loaded result against the source, defect handling, and rollback. It covers electronic records and their associated metadata, audit trail history where it is migrated, and electronic signature linkage where it applies.

It does not cover validation of the target application itself (governed by `<<FILL: CSV plan / report ID>>`), ongoing interfaces or periodic data feeds after go-live (governed by `<<FILL: interface qualification ID>>`), or archival and retirement of the source after migration (governed by `<<FILL: decommissioning SOP-ID>>`).

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Migration lead / CSV author | Authors this protocol, owns the mapping specification, defines the verification and reconciliation strategy, adjudicates defects, and writes the report. |
| Business / data owner | Confirms the data objects in scope, approves the field mapping and transformation rules, and signs off that the migrated data is fit for use. |
| Source system SME | Provides the extract queries, defines record counts and selection logic, and confirms the extract represents the full in-scope population. |
| Target system SME | Defines the load method and target data model, confirms referential integrity after load, and supports defect triage. |
| QC / independent reviewer | Performs or independently checks the reconciliation and sampling, and confirms results against acceptance criteria. |
| IT operations | Executes backups before cutover, controls environments and access, and holds the rollback capability. |
| Quality Assurance | Reviews and approves the protocol, deviations, and report, and owns the disposition decision to release the target for GxP use. |

## 4. Definitions

- **Source data set**: the complete, defined population of records to be migrated, fixed by the extract selection logic and frozen at the cutover point.
- **Mapping specification**: the controlled document that defines, field by field, where each target field gets its value, the transformation applied, the data type, and the handling of nulls and defaults.
- **Migration rule**: a documented rule that transforms source content to target content, for example a date reformat, a unit conversion, a code-list lookup, a concatenation, a deduplication, or a default for a missing value.
- **ETL**: extract, transform, load. Extract pulls the defined population from the source, transform applies the migration rules, load writes the result into the target.
- **Reconciliation**: the documented comparison of the loaded target against the source to confirm completeness and accuracy, by record counts, by value-level checksums or hashes, and by sampling.
- **Checksum / hash total**: a computed value (for example a row count, a column sum, or a cryptographic hash of a normalized record) used to detect any change between source and target.
- **Defect**: any discrepancy between source and target, or any departure from this protocol or the mapping specification, raised and tracked to closure.
- **Rollback**: the documented, tested means of returning the target to its pre-migration state if acceptance fails.

## 5. Data objects in scope

List every data object to be migrated. Record the source record count at cutover, the load method, whether audit trail history travels with the record, and the criticality (which sets how hard you verify it).

| Object no. | Data object | Source record count (cutover) | Load method | Audit history migrated? | Criticality |
|---|---|---|---|---|---|
| `<<FILL: 1>>` | `<<FILL: e.g. batch records>>` | `<<FILL>>` | `<<FILL: bulk load / API / manual>>` | Yes / No | High / Medium / Low |
| `<<FILL: 2>>` | `<<FILL: e.g. user accounts and roles>>` | `<<FILL>>` | `<<FILL>>` | Yes / No | `<<FILL>>` |
| `<<FILL: 3>>` | `<<FILL: e.g. test results / specifications>>` | `<<FILL>>` | `<<FILL>>` | Yes / No | `<<FILL>>` |

| Item | Entry |
|---|---|
| Total in-scope records (all objects) | `<<FILL>>` |
| Cutover (freeze) point | `<<FILL: date/time and how the source is frozen>>` |
| Records explicitly excluded and why | `<<FILL: e.g. records older than retention, with justification>>` |
| Reference to extract selection logic | `<<FILL: attachment / query reference>>` |

## 6. Source-to-target field mapping

The mapping specification is the heart of the migration and is the document an inspector reads first. Maintain it as a controlled attachment and approve it before any load. Reproduce the high-risk fields here and reference the full mapping in Attachment 1. Every target field must trace to a defined source plus a rule, or to a documented default. Every source field must be mapped, carried as inactive metadata, or explicitly recorded as out of scope, with no field left undecided.

| Target field | Source field | Data type (target) | Transformation rule | Null / default handling |
|---|---|---|---|---|
| `<<FILL: batch_id>>` | `<<FILL: BATCH_NO>>` | `<<FILL: string(20)>>` | `<<FILL: direct, trim whitespace>>` | `<<FILL: reject if null>>` |
| `<<FILL: mfg_date>>` | `<<FILL: MFGDT>>` | `<<FILL: date>>` | `<<FILL: reformat DDMMMYYYY to ISO 8601 YYYY-MM-DD>>` | `<<FILL: reject if null>>` |
| `<<FILL: result_value>>` | `<<FILL: RESULT>>` | `<<FILL: decimal(10,4)>>` | `<<FILL: direct, no rounding; preserve stored precision>>` | `<<FILL: carry null as null, not zero>>` |
| `<<FILL: status>>` | `<<FILL: STAT_CD>>` | `<<FILL: enum>>` | `<<FILL: lookup STAT_CD to target code list, Attachment 2>>` | `<<FILL: unmapped code is a defect>>` |
| `<<FILL: created_by>>` | `<<FILL: USERID>>` | `<<FILL: string>>` | `<<FILL: map to migrated user account; preserve original ID in legacy field>>` | `<<FILL: reject if unmatched>>` |

Mapping rules that carry the most risk and must be stated explicitly:

1. **Dates and times**: define the exact source format, the target format (use ISO 8601), and the time-zone treatment. Never let a locale-dependent parser guess between day and month.
2. **Numeric precision and rounding**: carry the stored precision; do not round during migration. State the rule for trailing zeros and for true nulls versus zero.
3. **Character encoding**: state the source and target encodings (for example a legacy code page to UTF-8) and how special characters, accents, and degree or micro symbols are handled. Encoding mistakes corrupt silently.
4. **Code-list and reference lookups**: every translated code maps to exactly one target value through a controlled lookup table (Attachment 2). An unmapped source code is a defect, not a silent default.
5. **Identity and relationships**: preserve primary keys or carry the original key in a legacy field so records remain traceable, and keep parent-child links (for example result to sample to batch) intact after load.
6. **Audit trail and signatures**: where audit history migrates, define how original timestamps, user IDs, and reasons are preserved as historical metadata, not overwritten with the migration's own timestamps. Where signature meaning travels, state how the link between record and signature is kept.

## 7. Migration environments and sequence

| Item | Entry |
|---|---|
| Environments used | `<<FILL: e.g. validation/test environment for dry runs, then production cutover>>` |
| Number of trial (dry-run) loads | `<<FILL: e.g. at least two full-volume dry runs in test before production>>` |
| Production backup before load | `<<FILL: backup of target taken and verified restorable, reference>>` |
| Source freeze method | `<<FILL: read-only / change-frozen at cutover, how enforced>>` |
| Migration tool / scripts and version | `<<FILL: tool name, version; scripts under change control, reference>>` |

Run the migration end to end at full production volume in a test environment before the production cutover. Full-volume dry runs find performance limits, truncation at real field lengths, and reference data gaps that a small sample hides.

## 8. Extract verification (E)

Confirm that what came out of the source equals the defined in-scope population before any transformation.

| Check | Method | Acceptance |
|---|---|---|
| Extract record count per object | Compare extract count to source query count at the frozen cutover point | Counts equal for every object |
| Selection logic correct | Re-run the documented selection independently and compare | Same population, no extra or missing records |
| No alteration during extract | Compare a checksum of key fields in the extract to the source | Checksums equal |
| Encoding preserved on extract | Inspect known special-character records in the extract | Characters intact, no replacement symbols |

## 9. Transform verification (T)

Confirm that each migration rule produced the intended result, before load.

| Check | Method | Acceptance |
|---|---|---|
| Each rule applied correctly | For each rule, verify a set of records spanning normal, boundary, and null inputs against the mapping specification | Output matches the specification for every case |
| Date and number rules | Verify boundary dates (end of month, leap day), highest-precision numbers, and true nulls | Reformatted and preserved exactly, no rounding, null stays null |
| Code-list lookups complete | List all distinct source codes and confirm every one resolves to a target value | No unmapped code; any unmapped code is a defect |
| No unintended truncation | Compare longest source values to target field lengths | No value truncated by a too-short target field |
| Row count preserved through transform | Compare post-transform count to extract count, accounting for documented deduplication or splits | Difference equals only documented, approved rule effects |

## 10. Load verification (L)

Confirm that everything transformed actually landed in the target and that the target is internally consistent.

| Check | Method | Acceptance |
|---|---|---|
| Load record count per object | Compare loaded count to transformed count | Counts equal; zero load errors, or every rejected row triaged as a defect |
| Referential integrity | Confirm parent-child links resolve (no orphan child records) | No broken relationships |
| Field-level population | Confirm mandatory target fields are populated; nulls only where allowed | No unexpected nulls or defaults |
| Usability in target | Open and act on a set of migrated records through the target application | Records render, calculate, and behave correctly |
| Audit trail / signature linkage | Where migrated, confirm historical entries display with original user, timestamp, and reason; signatures link to the right record | Preserved as historical metadata, not overwritten |

## 11. Reconciliation

Reconciliation is the proof of completeness and accuracy across the whole population. Use all three layers; counts alone do not prove the values are right, and sampling alone does not prove the population is complete.

### 11.1 Count reconciliation (completeness)

For every data object, compare source record count, extract count, transformed count, and loaded count. All must agree, except for differences that exactly equal documented and approved rules (for example an approved deduplication).

| Object | Source count | Extract count | Transform count | Load count | Difference explained? |
|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Yes / No (if No, defect) |

### 11.2 Checksum / hash reconciliation (accuracy at scale)

For each critical numeric or coded field, compute a column-level total or, better, a record-level cryptographic hash of a normalized representation, on both source and target, and compare. This catches value-level corruption across the entire population without reading every record by eye.

| Field | Source aggregate (sum or hash set) | Target aggregate | Match? |
|---|---|---|---|
| `<<FILL: result_value column sum>>` | `<<FILL>>` | `<<FILL>>` | Yes / No |
| `<<FILL: record hash set for object 1>>` | `<<FILL>>` | `<<FILL>>` | Yes / No |

State the normalization used before hashing (for example trim whitespace, fix date format, set fixed decimal precision) so the comparison is apples to apples. Any mismatch is a defect and is isolated to the offending records before acceptance.

### 11.3 Sampling reconciliation (record-by-record proof)

Pull a defined sample and compare each migrated record field by field to its source, including the high-risk fields from section 6. Size the sample by criticality and justify it. State your sampling basis (for example a statistically justified plan such as an attribute sampling table, or a defined risk-based count plus full coverage of every transformation rule and every boundary condition).

| Object | Sample size | Sampling basis | Records with any discrepancy |
|---|---|---|---|
| `<<FILL: High-criticality object>>` | `<<FILL: count>>` | `<<FILL: statistical or risk-based justification>>` | `<<FILL>>` |
| `<<FILL: Medium-criticality object>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

Sample selection must include records that exercise every transformation rule, every code in the lookup table, every boundary (longest value, oldest and newest date, highest precision, nulls), and special-character records. Random selection alone can miss the rare cases that break a migration.

## 12. Defect handling

Every discrepancy from reconciliation or any verification step is logged as a defect and tracked to closure before acceptance. Do not fix data by hand in the target without a controlled record of what was changed and why.

| Field | Entry |
|---|---|
| Defect log reference | `<<FILL: defect/deviation log ID>>` |
| Classification | Critical (data wrong, lost, or unusable) / Major / Minor |
| Root cause required for | `<<FILL: all Critical and Major>>` |
| Correction method | `<<FILL: re-run with corrected rule preferred; controlled manual correction only with record and independent check>>` |
| Re-verification after fix | `<<FILL: re-reconcile the affected population, not just the fixed record>>` |
| Routing to deviation | `<<FILL: deviation SOP-ID for Critical/Major affecting GxP data>>` |

Closure rule: a defect is closed only when the cause is understood, the correction is applied under control, and the affected population is re-reconciled and passes. A single Critical defect open at acceptance blocks go-live.

## 13. Rollback

| Item | Entry |
|---|---|
| Rollback trigger | `<<FILL: e.g. any Critical defect not resolvable within the cutover window, count reconciliation fails>>` |
| Rollback method | `<<FILL: restore verified pre-migration target backup; or purge migrated set per documented procedure>>` |
| Rollback tested | `<<FILL: rollback exercised and confirmed in test, reference>>` |
| Decision authority | `<<FILL: roles authorized to invoke rollback, e.g. Migration lead plus QA>>` |
| Post-rollback state confirmation | `<<FILL: how the target is confirmed back to pre-migration state>>` |

A rollback that has never been exercised is a hope, not a control. Prove it works in test before you depend on it at cutover.

## 14. Acceptance criteria

The migration is accepted, and the target released for GxP use, only when all of the following are true.

| Criterion | Requirement |
|---|---|
| Mapping approved | The mapping specification is approved and was followed; every target field traces to a source plus rule or a documented default |
| Count reconciliation | Source, extract, transform, and load counts agree for every object, with any difference exactly matching an approved rule |
| Checksum reconciliation | Every critical field aggregate or record hash set matches between source and target |
| Sampling reconciliation | The defined sample shows zero unexplained field-level discrepancies, with full coverage of every rule and boundary |
| Referential integrity | No orphan or broken parent-child relationships in the target |
| Usability | Migrated records render and behave correctly in the target application |
| Audit and signatures | Migrated audit history and signature links are preserved as required and verified |
| Defects | No open Critical defect; all Major defects resolved and re-verified; Minor defects documented with disposition |
| Rollback | Rollback method confirmed available and tested |

## 15. Deviations and handling

Any departure from this protocol or the approved mapping, any reconciliation failure, or any data loss is documented as a deviation per `<<FILL: deviation SOP-ID>>` and assessed for impact before acceptance. Do not release the target for GxP use until the deviation is resolved and the affected data re-verified.

## 16. Report

On completion, the migration lead issues report `<<FILL: report number>>` summarizing the data objects migrated, the counts at each stage, the reconciliation results (counts, checksums, sampling) against acceptance criteria, every defect and its resolution, any deviations, the rollback readiness, and the conclusion on whether the migrated data is fit for GxP use. QA approves the report and records the disposition to release the target.

## 17. Attachments

| No. | Attachment |
|---|---|
| 1 | Full source-to-target mapping specification |
| 2 | Code-list / reference lookup tables |
| 3 | Extract selection logic and queries |
| 4 | Sampling plan and justification |
| 5 | Reconciliation evidence (count, checksum, and sampling outputs) |
| 6 | Defect log |
| 7 | Backup and rollback test evidence |

## 18. References

> 21 CFR Part 11 (electronic records and electronic signatures).
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment), 211.180 and 211.188 (records).
> EU GMP Annex 11 (Computerised Systems), including data migration and accuracy checks.
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> MHRA GxP Data Integrity Guidance and Definitions.
> PIC/S PI 041, Good Practices for Data Management and Integrity.
> ICH Q9, Quality Risk Management (for risk-based verification depth and sample size).
> GAMP 5 (Second Edition) and the GAMP Good Practice Guide on records and data integrity (for the migration lifecycle approach).
> FDA Computer Software Assurance for Production and Quality System Software, finalized 24 September 2025 (for a risk-based assurance strategy).

Confirm the current version and clause numbers of each reference before issue.

## 19. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 20. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (CSV / Migration lead) | `<<FILL>>` | | |
| Business / data owner | `<<FILL>>` | | |
| Reviewer (QC / independent) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the scope, mapping, reconciliation, and acceptance sections completed for an example migration of laboratory test results and user accounts from a legacy LIMS to a new LIMS, so you can see the level of detail an inspector expects. The company, systems, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Migration | Legacy LIMS v6 to new LIMS v3, production cutover |
| Objects in scope | Test results (482,150 records), samples (96,430), batches (8,210), user accounts and roles (1,140) |
| Cutover freeze | 14 June 2026 18:00 local, legacy LIMS set read-only, change-frozen |
| Backup before load | New LIMS production backup taken and test-restored; reference BKP-2026-0612 |
| Dry runs | Two full-volume loads in the validation environment before cutover |

High-risk mapping decisions in this run:

| Target field | Source field | Rule applied |
|---|---|---|
| result_value | RESULT | Direct, decimal(10,4), no rounding; stored precision preserved; true null carried as null |
| collected_date | COLLDT | Reformat DDMMMYYYY to ISO 8601; all dates parsed as local time, no day/month ambiguity |
| status | STAT_CD | Lookup of 11 distinct legacy codes to target code list; all 11 mapped, none defaulted |
| analyst_id | USERID | Mapped to migrated user account; original legacy ID retained in legacy_user_id field |
| (encoding) | (all text) | Legacy Windows-1252 converted to UTF-8; degree and micro symbols verified intact |

Reconciliation result:

| Layer | Result |
|---|---|
| Count reconciliation | Source = extract = transform = load for all four objects, with one documented exception: 12 duplicate user accounts removed by the approved deduplication rule (1,140 source to 1,128 loaded) |
| Checksum reconciliation | result_value column sum matched to the cent; record-hash sets for results and batches matched exactly after normalization |
| Sampling reconciliation | 500 result records sampled (risk-based, covering all 11 status codes, leap-day and end-of-month dates, the longest analyst comment, highest-precision results, and special-character records). One discrepancy found |

Defect and resolution: the one sampling discrepancy was a result comment truncated at 250 characters because the target field had been set to 250 while the source allowed up to 255, so the value lost its last 5 characters. Classified Major, root cause traced to a target field length error, corrected by widening the field and re-running the affected object, then re-reconciled with zero discrepancies. Rollback was confirmed available but not invoked. With no open Critical defect, all counts and checksums matched, and the sample clean after the fix, QA accepted the migration and released the new LIMS for GxP use.

In this specimen the team ran full-volume dry runs first, stated the date, precision, encoding, and code-list rules explicitly, proved completeness by counts, proved accuracy at scale by checksums, proved it record by record with a risk-targeted sample, found a truncation the counts and checksums alone would have missed, fixed it by re-running rather than hand-editing, and re-reconciled before acceptance. That sequence is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this protocol prevents

- No approved field mapping, so there is no defined truth to verify the migration against.
- Reconciliation by record count only, with no value-level checksum or sampling, so silent corruption passed undetected.
- Dates corrupted by a locale-dependent parser that swapped day and month, found only later in production.
- Numeric results rounded or truncated during migration, changing values that drive release decisions.
- Special characters turned into replacement symbols because source and target encodings were never reconciled.
- An unmapped legacy code silently defaulted to a wrong status instead of being raised as a defect.
- Audit trail and signature history overwritten with the migration's own timestamps, breaking attribution and the record-to-signature link.
- Migrated data corrected by hand in the target with no record of what was changed, by whom, or why.
- Sampling done randomly with no coverage of the transformation rules and boundary cases that actually break migrations.
- A rollback plan written but never tested, so there was no real recovery path when a load failed at cutover.

## How to adapt this protocol

1. Set your document number, owner, report number, source and target identifiers, and effective date in the header.
2. List your real data objects, their cutover record counts, load methods, and criticality in section 5, and define exactly how you freeze the source.
3. Build the full mapping specification as Attachment 1 and reproduce the high-risk fields in section 6; make the date, precision, encoding, code-list, identity, and audit or signature rules explicit.
4. Set how many full-volume dry runs you will perform and confirm the pre-cutover backup is verified restorable.
5. Choose and justify your reconciliation depth in section 11: which fields get checksums or hashes, and the statistical or risk-based basis for each sample, with full coverage of every rule and boundary.
6. Test your rollback in the validation environment and record the evidence before cutover.
7. Point the cross-references in sections 2, 12, and 15 to your real CSV, deviation, and decommissioning procedures.
8. Confirm every regulation in section 18 against the current published version before issue.
