---
title: "Checklist: ALCOA+ Data Integrity Self-Assessment"
description: "A plug-and-play ALCOA+ self-assessment checklist to score a GxP system against all nine principles, with pass criteria, evidence to capture, a filled specimen, and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Checklist"
pillar: "data-integrity"
relatedArticles: ["data-integrity-foundations"]
tags: ["alcoa+", "data integrity", "checklist", "self-assessment", "gap assessment", "audit readiness"]
tier: "Intermediate"
---

This is a ready-to-use self-assessment checklist. It scores one GxP system, paper or electronic or hybrid, against the nine ALCOA+ principles. Run it per system, not once for the whole site, because controls differ system to system. Replace every `<<FILL: ...>>` placeholder, capture the evidence named in each row, and record a result of Pass, Gap, or N/A. A worked filled specimen follows the template. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | ALCOA+ Data Integrity Self-Assessment |
| Document number | `<<FILL: CHK-ID, e.g. CHK-QA-007>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Document owner | `<<FILL: role, e.g. Data Integrity Lead / QA>>` |
| Applies to | `<<FILL: sites / system categories in scope>>` |

## How to use this checklist

1. Pick one GxP system. Record its identity in the assessment context below.
2. Work through each principle. For every line, decide Pass, Gap, or N/A, and write down where the evidence is (screenshot, configuration export, SOP number, record reference). A "Pass" with no evidence is not a pass.
3. Where a line is a Gap, log it in the gap summary with a risk rating and an owner.
4. A system passes the assessment only when every applicable line is Pass and any Gap has a dispositioned remediation plan. A single open high-risk gap means the system does not pass.
5. Re-run on a defined cycle and after any major change to the system.

Scoring legend:
- **Pass**: control is in place and evidence supports it.
- **Gap**: control is missing, partial, or unevidenced. Must be logged and rated.
- **N/A**: principle does not apply to this record type (state why).

## Assessment context

| Field | Entry |
|---|---|
| System name and ID | `<<FILL: SYSTEM NAME / ID>>` |
| GxP process supported | `<<FILL: e.g. release testing, batch record, clinical data capture>>` |
| Record type | Paper / Electronic / Hybrid (`<<FILL>>`) |
| Static or dynamic records | `<<FILL: static / dynamic / both>>` |
| Data criticality | `<<FILL: High / Medium / Low and basis>>` |
| Assessor (name, date) | `<<FILL>>` |

## 1. Attributable

| # | Check | Pass criterion | Evidence to capture | Result |
|---|---|---|---|---|
| A1 | Unique identity per user | Every user has an individual account; no shared or generic logins for GxP activity | User list export; account creation records | `<<FILL>>` |
| A2 | Actions trace to a person | Each create, modify, delete is recorded against a named user, not a role or "admin" | Audit trail sample showing user IDs | `<<FILL>>` |
| A3 | Paper entries signed | Manual entries are initialed or signed and dated by the person performing the work | Sample logbook / batch record page | `<<FILL>>` |
| A4 | Electronic signatures controlled | Signatures are linked to the record and cannot be transferred or reused (where 21 CFR Part 11 applies) | Signature configuration; Part 11 assessment | `<<FILL>>` |

## 2. Legible

| # | Check | Pass criterion | Evidence to capture | Result |
|---|---|---|---|---|
| L1 | Records readable for full retention | Records remain readable and understandable for the required retention period | Retention schedule; archived sample read-back | `<<FILL>>` |
| L2 | Corrections preserve the original | A correction crosses out with a single line, keeps the original visible, and adds initial, date, and reason | Sample corrected entry | `<<FILL>>` |
| L3 | Durable recording medium | Paper uses permanent ink; electronic display and printouts are clear and not truncated | Sample print; ink standard in SOP | `<<FILL>>` |

## 3. Contemporaneous

| # | Check | Pass criterion | Evidence to capture | Result |
|---|---|---|---|---|
| C1 | Recorded at time of activity | Entries are made when the activity happens, not transcribed later from scrap notes | Procedure; observed practice | `<<FILL>>` |
| C2 | System clock synchronized | Clocks are synchronized to a reliable time source and users cannot change them | Time-sync configuration; clock-change permission settings | `<<FILL>>` |
| C3 | Timestamps match the sequence | Recorded times match the real order of events, with no apparent backdating | Audit trail timestamp review | `<<FILL>>` |

## 4. Original

| # | Check | Pass criterion | Evidence to capture | Result |
|---|---|---|---|---|
| O1 | Source record retained | The original record (or a verified true copy) is kept, not a derived summary | Storage location; copy verification record | `<<FILL>>` |
| O2 | Dynamic record preserved | For dynamic systems, the full electronic record and audit trail are retained, not only a printout | Confirmation electronic file is retained and reprocessable | `<<FILL>>` |
| O3 | True copies controlled | Copies are verified against the original and the relationship is documented | True-copy procedure; copy verification | `<<FILL>>` |

## 5. Accurate

| # | Check | Pass criterion | Evidence to capture | Result |
|---|---|---|---|---|
| AC1 | Record reflects what occurred | Values match the actual activity; no transcription errors | Sample reconciliation against source | `<<FILL>>` |
| AC2 | Edits justified | Any change, reprocessing, or re-integration has a documented, justified reason | Audit trail of changes with reasons | `<<FILL>>` |
| AC3 | Second-person check where required | Critical entries are independently verified per procedure | Reviewer signatures on sample records | `<<FILL>>` |
| AC4 | Calculations validated | Formulas and calculations (including GxP spreadsheets) are validated and protected | Validation record; cell-protection settings | `<<FILL>>` |

## 6. Complete

| # | Check | Pass criterion | Evidence to capture | Result |
|---|---|---|---|---|
| CM1 | All results retained | All data, including repeats, failures, OOS, and aborted runs, is retained | Audit trail showing all runs; OOS log | `<<FILL>>` |
| CM2 | Metadata retained | Method, parameters, instrument ID, and audit trail are kept with the result | Sample complete record | `<<FILL>>` |
| CM3 | No "test" or "trial" injections excluded | Any trial or test runs are visible and accounted for, not used to pre-screen and discard | Audit trail review for trial runs | `<<FILL>>` |
| CM4 | No selective reporting | The reported value is the original result, not a chosen pass from repeated testing | OOS / repeat-testing records | `<<FILL>>` |

## 7. Consistent

| # | Check | Pass criterion | Evidence to capture | Result |
|---|---|---|---|---|
| CN1 | Coherent sequence | Records are in chronological order with no unexplained gaps | Audit trail continuity review | `<<FILL>>` |
| CN2 | Date and time format defined | Date and time formats are standardized and unambiguous | Format standard; sample records | `<<FILL>>` |
| CN3 | Audit trail never disabled | The audit trail was enabled continuously, with no disabled periods | Audit trail configuration history | `<<FILL>>` |

## 8. Enduring

| # | Check | Pass criterion | Evidence to capture | Result |
|---|---|---|---|---|
| EN1 | Durable media | Records are stored on durable media appropriate to the retention period | Storage standard; media type | `<<FILL>>` |
| EN2 | Backups taken | Backups run on a defined schedule and are verified | Backup logs / schedule | `<<FILL>>` |
| EN3 | Restore tested | Restore from backup has been tested and the data was usable | Restore test record | `<<FILL>>` |
| EN4 | Format migration planned | Legacy or proprietary formats have a migration plan before they become unreadable | Archival / migration plan | `<<FILL>>` |

## 9. Available

| # | Check | Pass criterion | Evidence to capture | Result |
|---|---|---|---|---|
| AV1 | Retrievable on request | Records can be retrieved within a reasonable time when a reviewer, auditor, or inspector asks | Retrieval test; access procedure | `<<FILL>>` |
| AV2 | Readable on demand | Retrieved records are readable, including audit trail and metadata | Sample retrieval read-back | `<<FILL>>` |
| AV3 | Access controlled, not blocked | Access controls restrict change but do not prevent authorized retrieval | Access matrix | `<<FILL>>` |

## Gap summary

Log every Gap from the lines above here. A system does not pass while a high-risk gap is open without a dispositioned plan.

| Gap ref | Check # | Description | Risk (H/M/L) | Owner | Remediation / due date | Status |
|---|---|---|---|---|---|---|
| `<<FILL: G1>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## Overall result

| Field | Entry |
|---|---|
| Lines assessed | `<<FILL: count>>` |
| Pass | `<<FILL: count>>` |
| Gap (open) | `<<FILL: count>>` |
| N/A | `<<FILL: count>>` |
| Highest open risk | `<<FILL: H / M / L>>` |
| System verdict | Pass / Conditional (gaps with plan) / Fail |
| Assessor (name, signature, date) | `<<FILL>>` |
| QA review (name, signature, date) | `<<FILL>>` |

## References

> 21 CFR Part 211 (drug CGMP: 211.68, 211.180, 211.188, 211.194).
> 21 CFR Part 11 (electronic records and signatures).
> 21 CFR Part 820 (device quality system; QMSR amendments effective February 2026).
> EU GMP Annex 11 (computerized systems).
> FDA guidance, "Data Integrity and Compliance With Drug CGMP" (December 2018).
> MHRA "GXP Data Integrity Guidance and Definitions" (March 2018).
> PIC/S PI 041 (good practices for data management and integrity).
> WHO Technical Report Series 996, Annex 5.
> ICH Q9 (quality risk management) for the criticality and risk rating.

Confirm the current version and clause numbers of each reference before issue.

## Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

---

## Filled specimen

The following shows part of a completed assessment for an illustrative chromatography data system used for release testing, so you can see the level of detail expected. System, references, and findings are illustrative; replace them with your own.

Assessment context:

| Field | Entry |
|---|---|
| System name and ID | Chromatography Data System, instrument cluster HPLC-04 to HPLC-09 |
| GxP process supported | Finished-product release testing |
| Record type | Electronic |
| Static or dynamic records | Dynamic |
| Data criticality | High: results drive batch disposition |
| Assessor (name, date) | A. Patel, 12 June 2026 |

Sample of completed lines:

| # | Check | Result | Evidence / note |
|---|---|---|---|
| A1 | Unique identity per user | Pass | User list export 11 Jun 2026; no shared accounts |
| A2 | Actions trace to a person | Pass | Audit trail sample shows named users on all events |
| C2 | System clock synchronized | Pass | Time-sync to domain controller; user clock-change denied |
| O2 | Dynamic record preserved | Pass | Electronic files retained on validated server; reprocess confirmed |
| CM1 | All results retained | Gap | Two aborted runs on HPLC-07 lacked a recorded reason |
| EN3 | Restore tested | Gap | Backups run nightly but restore last tested over 18 months ago |

Gap summary:

| Gap ref | Check # | Description | Risk | Owner | Remediation / due date | Status |
|---|---|---|---|---|---|---|
| G1 | CM1 | Aborted runs without recorded reason | M | QC Lab Manager | Retrain analysts; add reason prompt; DEV-2026-0142 | Open |
| G2 | EN3 | Restore not tested within policy interval | H | IT Infrastructure | Execute restore test; CAPA-2026-0061 | Open |

Overall result: Conditional. One high-risk gap open (G2) with a dispositioned plan. The system stays in use under interim controls (additional manual data export) until the restore test passes. The verdict, the open high-risk gap, and the interim control are exactly what an inspector expects a self-assessment to show: not a clean sheet, but an honest picture with risk-rated actions.

## Common inspection findings this checklist prevents

- The site claims ALCOA+ compliance but has never assessed its systems against the nine principles with evidence.
- Backups exist but restore was never tested, so data is not demonstrably enduring or available.
- Aborted, trial, or repeat runs were not retained or accounted for, breaking Complete.
- A self-assessment shows all "Pass" with no evidence and no gaps, which itself reads as a paper exercise.
- The "+" elements (Complete, Consistent, Enduring, Available) were skipped because they were treated as a lesser tier.

## How to adapt this checklist

1. Set your document number, owner, and effective date in the header.
2. Adjust which lines are N/A for the record type. A paper-only logbook will N/A several electronic lines; a dynamic electronic system will not N/A O2.
3. Map your data criticality to your own ICH Q9-based scoring so the risk ratings in the gap summary are consistent across systems.
4. Feed every open gap into your real deviation or CAPA system, not just the table here, so remediation is tracked and effectiveness is verified.
5. Set the re-run cycle to your risk tiers (for example annually for High, at periodic review for Low) and re-run after major changes.
6. Confirm every regulation in the references against the current published version before issue.
