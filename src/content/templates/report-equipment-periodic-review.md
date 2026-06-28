---
title: "Report: Equipment Periodic Review"
description: "A plug-and-play equipment periodic review report covering change control, deviations, calibration, preventive maintenance, documents, training, computerized-system elements, and a reasoned qualified-state conclusion, with a fully worked autoclave specimen."
pubDate: 2026-06-28
docType: "Report"
pillar: "equipment-qualification"
relatedArticles: ["requalification-and-periodic-review-equipment", "equipment-qualification-lifecycle", "calibration-and-metrology-program"]
tags: ["periodic review", "requalification", "equipment qualification", "Annex 15", "GMP", "report"]
tier: "Intermediate"
---

This is a ready-to-use equipment periodic review report. Replace every `<<FILL: ...>>` placeholder, set your document numbers and dates, and route it through your normal review and approval. A fully worked filled specimen for a steam sterilizer follows the blank template so you can see the level of analysis an inspector expects. This content is educational reference, not legal or regulatory advice. Verify cited regulations against the current source before relying on them.

## Report control header

| Field | Entry |
|---|---|
| Report title | Periodic Review of `<<FILL: EQUIPMENT ID>>` |
| Report number | `<<FILL: PR-ID>>` |
| Equipment ID and description | `<<FILL>>` |
| Location and owner | `<<FILL>>` |
| Risk / criticality class | `<<FILL: High / Medium / Low>>` |
| Current validation status | `<<FILL: Qualified / other>>` |
| Review period | `<<FILL: from>>` to `<<FILL: to>>` |
| Previous review | `<<FILL: report ID and date, or "first review">>` |

## 1. Scope and reference qualification status

State the window covered and the current qualified configuration baseline: the initial qualification reports, the last requalification, and the validated configuration the equipment is compared against.

`<<FILL: reference qualification documents and validated baseline>>`

## 2. Change control review

Every change raised against the system in the period.

| Change # | Description | Qualification impact decision | Requalification performed | Status |
|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: yes/scope, or none>>` | Open / Closed |

Open or unclosed changes: `<<FILL: list and flag, or "none">>`

## 3. Deviation and event review

| Deviation # | Description | Equipment-performance relevance | CAPA status |
|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

Recurring or trending issues: `<<FILL: called out, or "none">>`

## 4. Calibration history review

| Instrument | Result(s) in period | As-found OOT? | Trend toward limit | Action |
|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | Yes / No | `<<FILL>>` | `<<FILL>>` |

Any out-of-tolerance result must show its backward product-impact assessment reference.

## 5. Preventive maintenance review

| Metric | Result |
|---|---|
| PMs scheduled / completed on time | `<<FILL>>` |
| PM compliance % | `<<FILL>>` |
| Corrective maintenance events | `<<FILL>>` |
| Reliability / obsolescence concerns | `<<FILL>>` |

## 6. Document review

Are SOPs, drawings (P&IDs, electrical), specifications, and the qualification document set current and consistent with the as-built/as-operated system?

`<<FILL: findings, with any discrepancy routed to a document change>>`

## 7. Training review

Are operators and maintainers trained to current procedures? `<<FILL>>`

## 8. Computerized-system elements (if applicable)

| Element | Status |
|---|---|
| Audit trail review current | `<<FILL>>` |
| User access review current | `<<FILL>>` |
| Backup / restore verified | `<<FILL>>` |
| Software version vs validated baseline | `<<FILL>>` |
| Patches applied and assessed | `<<FILL>>` |

## 9. Assessment and conclusion

A reasoned statement, traceable to the evidence above: does the system remain in a qualified state; is requalification required and at what scope; what actions follow.

`<<FILL: reasoned conclusion>>`

## 10. Actions and ownership

| Action | Type (CAPA / change / requal protocol) | Owner | Due date |
|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 11. Approvals and next review

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (SME / owner) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

Next review due: `<<FILL: date>>` (register updated: Yes / No)

---

## Filled specimen: Steam Sterilizer STZ-04 (High risk, 12-month cycle)

Numbers are illustrative; replace with your own.

**Header:** PR-2026-019. Steam Sterilizer STZ-04, double-door porous-load autoclave. Location: Sterile Manufacturing. Owner: Engineering. Risk class: High. Status: Qualified. Period: 01 June 2025 to 31 May 2026. Previous review: PR-2025-018, 30 May 2025.

**1. Reference status:** Validated against IQ/OQ/PQ-STZ04 (2021) and last full requalification (heat penetration / load mapping) RQ-STZ04-2025, 11 months ago. Validated configuration baseline: CONFIG-STZ04 rev 4.

**2. Change control:**

| Change # | Description | Qualification impact | Requalification | Status |
|---|---|---|---|---|
| CC-2025-204 | Door gasket replaced, same part number | None, PM-level like-for-like | None | Closed |
| CC-2025-251 | Drain-temperature probe replaced | Calibration verify + OQ door/drain alarm check | OQ alarm check re-run, passed | Closed |

Open changes: none.

**3. Deviations:**

| Deviation # | Description | Performance relevance | CAPA |
|---|---|---|---|
| DEV-2025-330 | Cycle aborted, operator error | None | N/A |
| DEV-2025-402 | Batch-record documentation gap | None | Closed |
| DEV-2026-061 | Logbook entry omission | None | Closed |

No deviation indicates equipment performance loss.

**4. Calibration:**

| Instrument | Result | As-found OOT? | Trend | Action |
|---|---|---|---|---|
| Chamber thermocouples (x3) | All passed | No | Stable | None |
| Chamber pressure transducer | Passed | No | As-found 0.18 bar vs 0.25 bar limit, drifting across last 3 cycles | Shorten interval 12 to 6 months (CAL-2026-114) |
| Drain probe | Passed | No | Stable (new) | None |

**5. Preventive maintenance:** 4 PMs scheduled, 4 completed on time (100%). 1 unplanned corrective (steam trap). Corrective rate not elevated.

**6. Documents:** Operating SOP current. P&ID not updated after the gasket part-number change. Discrepancy raised as DCR-2026-077 to update the spare BOM and drawing.

**7. Training:** All operators and maintainers current on the applicable SOPs.

**8. Computerized-system elements:** Controller software version matches validated baseline; audit trail review current; user access review completed Q1 2026; backup/restore last verified 03/2026; no unassessed patches.

**9. Conclusion:** STZ-04 remains in a qualified state for the period reviewed. The annual heat-penetration / load re-mapping (separate requalification) is due next month and is scheduled; nothing in this review triggers it early. Two actions raised (calibration interval reduction; P&ID/BOM update).

**10. Actions:**

| Action | Type | Owner | Due |
|---|---|---|---|
| Shorten chamber pressure transducer interval to 6 months | Change (calibration) | Metrology | 31 Jul 2026 |
| Update P&ID and spare BOM for gasket part number | Document change | Engineering | 31 Aug 2026 |

**11. Approvals:** Author M. Devi (SME), QA approver R. Gomez. Next review due 31 May 2027; register updated.

**Why this is a good review:** every conclusion is tied to cited evidence, it catches a calibration drift before it becomes a failure and a documentation gap before it becomes a finding, and it ties cleanly into the separate annual requalification rather than duplicating it. The "remains qualified" sentence is earned, not asserted.

## Common inspection findings this report prevents

- A review that lists data but performs no trend analysis and reaches an unsupported conclusion.
- Open changes or open CAPAs buried rather than flagged.
- A calibration drifting toward its limit noticed by no one until it fails.
- Documentation that no longer matches the as-operated configuration.
- The computerized-system elements skipped for a software-controlled unit.

## How to adapt this report

1. Set your report numbering and pull the due date from your qualification register.
2. Keep every section even when the answer is "none in period"; an empty section read as "not assessed" is a finding.
3. Force trend analysis in sections 4 and 5, not just pass/fail.
4. Route every discrepancy in sections 2, 4, and 6 to a real CAPA, change, or document change with an owner and date.
