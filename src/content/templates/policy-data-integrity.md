---
title: "Policy: Data Integrity"
description: "A plug-and-play corporate data integrity policy that sets the ALCOA+ standard, assigns ownership, and states the rules every GxP record must meet, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Policy"
pillar: "data-integrity"
relatedArticles: ["data-integrity-foundations"]
tags: ["data integrity", "policy", "ALCOA+", "21 CFR Part 11", "Annex 11", "governance"]
tier: "Intermediate"
---

This is a ready-to-use corporate policy. A policy states what the organization requires and who owns it; the procedures underneath it state how to do the work. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Data Integrity Policy |
| Document number | `<<FILL: POL-ID, e.g. POL-QA-001>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Policy owner | `<<FILL: role, e.g. Head of Quality / Quality Council sponsor>>` |
| Applies to | `<<FILL: all sites, functions, and contracted parties in scope>>` |
| Review cycle | `<<FILL: e.g. every 2 years or on regulatory change>>` |

## 1. Purpose

This policy sets the requirement that all GxP data created, used, or held by `<<FILL: COMPANY NAME>>` is complete, consistent, and accurate throughout its lifecycle, so that quality decisions, regulatory submissions, and product safety rest on records that can be proven trustworthy. It states the standard, names the people accountable for meeting it, and defines the behaviors that are required and the behaviors that are prohibited.

## 2. Policy statement

`<<FILL: COMPANY NAME>>` requires that every GxP record meets the ALCOA+ standard at all times: attributable, legible, contemporaneous, original or a true copy, accurate, and also complete, consistent, enduring, and available. Data integrity is treated as a property of the systems and controls that produce records, not as a documentation task added afterward. The integrity of a record carries the same weight whether the record is on paper, in a validated computerized system, or in a hybrid of the two.

This policy is binding on all employees, contractors, temporary staff, and contracted organizations (including CDMOs, CROs, and contract laboratories) that generate, process, review, store, or transmit GxP data on behalf of the company.

## 3. Scope

This policy applies to all data that supports a GxP activity, across good manufacturing, laboratory, clinical, distribution, and pharmacovigilance practice as relevant to the business. It covers:

- Records in computerized systems (laboratory systems, manufacturing execution and automation systems, quality systems, clinical and safety databases, spreadsheets used for GxP calculation).
- Paper records and logbooks.
- Hybrid records, where part of the record is electronic and part is paper.
- Metadata required to reconstruct an activity, including audit trails, timestamps, and contextual parameters.
- Data held by contracted parties on the company's behalf.

It does not by itself define system-level configuration; that is governed by the supporting procedures referenced in section 10.

## 4. Definitions

- **GxP data**: any record that supports a decision or activity governed by good manufacturing, laboratory, clinical, distribution, or pharmacovigilance practice.
- **ALCOA+**: attributable, legible, contemporaneous, original (or true copy), accurate, plus complete, consistent, enduring, and available. The full set is one standard, not a base set and an optional extension.
- **Metadata**: the contextual data that gives a result meaning and allows the activity to be reconstructed (for example method, instrument ID, integration parameters, operator, timestamp, audit trail).
- **Static record**: a fixed record, such as a paper printout or a PDF.
- **Dynamic record**: a record that allows interaction, such as a chromatography file that can be reprocessed or a spectrum that can be re-baselined; the complete electronic record, including audit trail and the ability to reprocess, must be retained.
- **True copy**: a verified copy of an original record that preserves the content and meaning of the original, including dynamic functionality where applicable.
- **Data lifecycle**: all phases of data from initial generation and recording, through processing, review, reporting, and use, to retention, retrieval, and authorized destruction.

## 5. Principles every record must meet

| Principle | The rule at `<<FILL: COMPANY NAME>>` |
|---|---|
| Attributable | Every entry is traceable to the person who made it, using a unique identity. Shared or generic accounts for GxP activity are prohibited. |
| Legible | Records are readable and understandable for their full retention period. Corrections leave the original entry visible (single line through, initial, date, reason). |
| Contemporaneous | Records are made at the time the activity occurs. Recording on scrap paper for later transcription is prohibited. |
| Original | The source record (or a verified true copy) is retained. For dynamic systems, the full electronic record and audit trail are retained, not only a printout. |
| Accurate | Records correctly reflect what occurred. Edits are justified and, where required, independently checked. |
| Complete | All data is retained, including repeats, failures, aborted runs, and metadata. Selective recording or reporting is prohibited. |
| Consistent | Sequence and timestamps are coherent, with synchronized clocks and no unexplained gaps. |
| Enduring | Records are kept on durable media, backed up, and migrated before formats become unreadable. |
| Available | Records are retrievable and readable within a reasonable time when a reviewer, auditor, or inspector asks. |

## 6. Mandatory rules

The following are requirements, not guidance:

1. Each person uses their own unique credentials for any GxP system. Credentials are never shared, lent, or used by another person.
2. The person who generates data does not also hold the administrator rights that could delete that data or disable its audit trail. System administration is segregated from data generation.
3. Audit trails are enabled on every GxP computerized system that creates, modifies, or deletes records, and cannot be turned off by ordinary users.
4. Audit trails for GxP-critical data are reviewed at a defined frequency, with documented evidence, per `<<FILL: SOP-ID for audit trail review>>`.
5. System clocks are synchronized to a reliable time source and users cannot change them.
6. Failing, out-of-specification, repeat, and aborted results are retained and investigated; they are never deleted, hidden, or excluded from the record. "Testing into compliance" is prohibited.
7. Original electronic data for dynamic systems is retained; a printout is not an acceptable substitute for the dynamic record.
8. Backups are taken and the restore is periodically tested; an untested backup is not accepted as a control.
9. Spreadsheets used for GxP calculation are treated as computerized systems: validated, version-controlled, and protected.
10. Data held by contracted parties meets this same standard, verified through the quality agreement and supplier oversight per `<<FILL: SOP-ID for supplier / vendor management>>`.
11. Any suspected falsification, data manipulation, or deliberate omission is reported immediately through `<<FILL: reporting route, e.g. the data integrity escalation line / speak-up channel>>` and is handled without retaliation against an honest reporter.

## 7. Prohibited behaviors

- Sharing login credentials or recording an activity under another person's identity.
- Backdating, pre-dating, or recording an activity at a time other than when it occurred.
- Deleting, overwriting, or hiding original data, including failing or out-of-specification results.
- Disabling, bypassing, or failing to review an audit trail.
- Reprocessing or re-integrating data without a documented, justified reason.
- Reporting only the favorable result from repeated testing.
- Storing GxP records on uncontrolled, unbacked-up, or personal media.

## 8. Accountability

| Role | Accountability under this policy |
|---|---|
| Executive management | Provides resources, sets the quality culture, and reviews data integrity in management review with real metrics, consistent with ICH Q10. |
| Policy owner / Quality | Owns this policy, the supporting procedures, the audit trail review expectation, and inspection defense. |
| System owner | Maintains the validated state, enabled audit trail, backups, and access controls of each GxP system. |
| Data originator | Generates records contemporaneously and accurately, never shares credentials, never alters or deletes without documentation. |
| Reviewer / second person | Checks the result and the audit trail and metadata, not only the final value. |
| IT / infrastructure | Provides time synchronization, backup and restore, disaster recovery, and access infrastructure. |
| All staff | Follow this policy, complete data integrity training, and report concerns. |

The detailed task-level assignment is held in the data governance RACI maintained per `<<FILL: SOP-ID or reference for the RACI>>`.

## 9. Training and culture

Every person with a GxP role completes data integrity training before performing GxP work and on a recurring basis defined in `<<FILL: SOP-ID for training>>`. The company maintains an environment in which honest reporting of errors and failures is expected and protected, because production pressure that punishes honest failure is a known driver of data manipulation.

## 10. Consequences of breach

A breach of this policy is treated as a quality and conduct matter. Suspected deliberate data manipulation is investigated under `<<FILL: SOP-ID for deviations / investigations>>` and may result in disciplinary action up to and including termination, in addition to any quality and regulatory consequence. Honest, self-reported errors handled through the quality system are not treated as misconduct.

## 11. Acceptance criteria

This policy is being met when all of the following are true:

- Every GxP system in the inventory has unique user accounts, an enabled and reviewed audit trail, an administrator independent of data originators, and a tested restore.
- No failing or out-of-specification results have been deleted or excluded; all are retained and investigated.
- Data integrity training is current for all GxP staff.
- Data integrity appears in management review with metrics that are acted on, not displayed as a status box.
- Contracted parties are verified to meet this standard through quality agreements and oversight.

## 12. References

> 21 CFR Part 211 (drug CGMP recordkeeping and laboratory controls: 211.68, 211.180, 211.188, 211.194).
> 21 CFR Part 11 (electronic records and electronic signatures).
> 21 CFR Part 820 (device quality system; QMSR amendments effective February 2026), with records at 820.180 and 820.181.
> EU GMP Annex 11 (computerized systems) and Annex 15 (qualification and validation).
> FDA guidance, "Data Integrity and Compliance With Drug CGMP" (December 2018).
> MHRA "GXP Data Integrity Guidance and Definitions" (March 2018).
> PIC/S PI 041 (good practices for data management and integrity).
> WHO Technical Report Series 996, Annex 5 (good data and record management practices).
> ICH Q9 (quality risk management), ICH Q10 (pharmaceutical quality system), ICH E6 (good clinical practice).

Confirm the current version and clause numbers of each reference before issue.

## 13. Supporting procedures

| Procedure | Reference |
|---|---|
| Audit trail review | `<<FILL: SOP-ID>>` |
| Deviations and investigations | `<<FILL: SOP-ID>>` |
| Out-of-specification investigations | `<<FILL: SOP-ID>>` |
| Computerized system validation | `<<FILL: SOP-ID>>` |
| Access control and user management | `<<FILL: SOP-ID>>` |
| Backup, restore, and archival | `<<FILL: SOP-ID>>` |
| Good documentation practices | `<<FILL: SOP-ID>>` |
| Supplier and vendor management | `<<FILL: SOP-ID>>` |
| Training | `<<FILL: SOP-ID>>` |

## 14. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 15. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (QA) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |
| Endorsed by (Executive sponsor) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the header and a few sections completed for an illustrative mid-size biologics company, so you can see the level of specificity expected. The company, numbers, and references are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Document title | Data Integrity Policy |
| Document number | POL-QA-001 |
| Version | 2.0 |
| Effective date | 01 July 2026 |
| Supersedes | Version 1.0 |
| Policy owner | Vice President, Quality (Quality Council sponsor) |
| Applies to | All sites (US and EU), all GxP functions, and all contracted CDMOs, CROs, and contract laboratories |
| Review cycle | Every 2 years or on material regulatory change |

Specimen of one mandatory rule as adopted:

> Rule 2 (segregation). At this company, analysts who run release testing on the chromatography data systems hold standard analyst roles only. Administrator rights on those systems are held by the IT validation group, which has no role in generating or reporting laboratory results. Quarterly access reviews confirm that no data originator holds an account that can delete data or alter the audit trail configuration. The last review (Q2 2026) found two analysts with residual elevated rights from a prior project; both were removed and a deviation, DEV-2026-0210, captured the gap and the fix.

That short narrative is exactly what an inspector wants to see behind a policy statement: the rule, how it is enforced, evidence it is checked, and what happened when a gap was found.

## Common inspection findings this policy prevents

- The company has procedures on individual controls but no overarching policy that states the data integrity standard and assigns accountability.
- Management cannot show that data integrity is reviewed at the leadership level with real metrics.
- Data integrity expectations are not extended to contracted parties through quality agreements.
- There is no protected route for staff to report data integrity concerns, so honest reporting is discouraged.
- Failing or out-of-specification results were excluded with no rule prohibiting it.

## How to adapt this policy

1. Set your document number, owner, effective date, and review cycle in the header.
2. Confirm the scope statement matches your actual GxP footprint (manufacturing only, or also clinical, distribution, and pharmacovigilance).
3. Point every `<<FILL: SOP-ID>>` cross-reference to your real supporting procedures, and remove any that do not apply.
4. Name your actual escalation or speak-up route in rule 11 and section 9.
5. Have the executive sponsor endorse the policy so it carries leadership weight, not only a QA signature.
6. Confirm every regulation in section 12 against the current published version before issue.
