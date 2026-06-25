---
title: "Record: ATMP Conditional / Out-of-Specification Release Authorization"
description: "A plug-and-play record for the pre-approved conditional or OOS-release decision in single-patient CGT: gating-test status, risk assessment, physician notification, and joint quality-clinical authorization, with a filled specimen."
pubDate: 2026-06-25
docType: "Record"
pillar: "cell-gene-therapy"
relatedArticles: ["atmp-gmp-cell-gene-manufacturing"]
tags: ["cell-gene-therapy", "ATMP", "batch-release", "OOS", "record", "GMP", "qualified-person"]
tier: "Advanced"
---

This is a ready-to-use record for authorizing conditional release, or release of a single-patient CGT product despite an out-of-specification (OOS) gating result, under a pre-approved pathway. It is a joint quality-clinical decision and must never be improvised case by case without the governing SOP. Replace every `<<FILL: ...>>` placeholder. A filled specimen follows. Verify cited regulations against the current source. This is general guidance to adapt, not legal or regulatory advice.

## Header

| Field | Entry |
|---|---|
| Record number | `<<FILL: e.g. REC-REL-2026-014>>` |
| Governing SOP | `<<FILL: OOS-release SOP-ID>>` |
| Product / protocol | `<<FILL>>` |
| Patient COI identifier | `<<FILL: COI-XXXXXX>>` |
| Batch / lot | `<<FILL>>` |
| Decision date/time | `<<FILL>>` |

## 1. Why this record exists

In single-patient (n=1) CGT, some release tests report after the product must infuse, and the incoming material cannot be re-ordered. The EU ATMP GMP Guidelines permit administration before all release tests are complete, and release despite an OOS result, in defined circumstances, provided a procedure is in place, the prescribing physician is informed, and the risk is managed. This record captures that managed decision. It is only valid if the governing SOP and approval chain existed before the decision.

## 2. Release panel status

| Attribute | Gates infusion? | Spec | Result | Status |
|---|---|---|---|---|
| Identity (phenotype) | Yes | `<<FILL>>` | `<<FILL>>` | Pass / OOS |
| Transduction / VCN | Yes | `<<FILL>>` | `<<FILL>>` | Pass / OOS |
| Viable cell dose | Yes | `<<FILL>>` | `<<FILL>>` | Pass / OOS |
| Viability | Yes | `<<FILL>>` | `<<FILL>>` | Pass / OOS |
| Endotoxin | Yes | `<<FILL>>` | `<<FILL>>` | Pass / OOS |
| Rapid sterility | Yes | `<<FILL>>` | `<<FILL>>` | Pass / OOS |
| Sterility (USP <71>) | No (post-infusion) | No growth | `<<FILL>>` | Pending / Pass / Fail |
| RCR/RCL | No (post-infusion) | None detected | `<<FILL>>` | Pending / Pass / Fail |
| Potency | No (post-infusion) | `<<FILL>>` | `<<FILL>>` | Pending / Pass / Fail |

## 3. The deviation / OOS condition

| Field | Entry |
|---|---|
| Which gating result is OOS (if any) | `<<FILL: attribute and value, or "none, conditional release for pending tests only">>` |
| Magnitude vs spec | `<<FILL>>` |
| Deviation reference | `<<FILL: DEV number>>` |
| COI reconciliation tied out? | Yes / No (if No, do not release) |

## 4. Risk assessment

| Field | Entry |
|---|---|
| Clinical urgency (vein-to-vein constraint, disease state) | `<<FILL>>` |
| Likely impact of the OOS attribute on safety and efficacy | `<<FILL>>` |
| Supporting data (stability, prior experience, scientific rationale) | `<<FILL>>` |
| Risk to the patient if NOT treated (no second collection possible?) | `<<FILL>>` |
| Residual risk and mitigations | `<<FILL>>` |

## 5. Physician notification (mandatory)

| Field | Entry |
|---|---|
| Prescribing physician informed of the OOS / pending status | Yes / No |
| Date/time of notification | `<<FILL>>` |
| Physician acknowledgement | `<<FILL: name, signature, date>>` |
| Patient informed per local consent / governance | Yes / No / NA |

## 6. Pending tests and the act-on-failure plan

| Field | Entry |
|---|---|
| Tests still pending | `<<FILL>>` |
| Committed report dates | `<<FILL>>` |
| Action if a pending test later fails | `<<FILL: notify physician and pharmacovigilance, investigate, report to health authority as required>>` |

## 7. Authorization (joint quality-clinical)

| Role | Decision | Name | Signature | Date |
|---|---|---|---|---|
| Qualified Person (EU) / responsible quality unit (US) | Release / Reject | `<<FILL>>` | | |
| Treating physician | Accept / Decline | `<<FILL>>` | | |
| QA oversight | Reviewed | `<<FILL>>` | | |

## 8. Acceptance criteria for a valid authorization

- A governing OOS-release SOP and approval chain existed before this decision.
- COI reconciliation ties out (an identity break is never released).
- The risk assessment is documented and specific to this patient and attribute.
- The physician was notified and acknowledged before administration.
- Pending tests are listed with committed dates and an act-on-failure plan.
- The QP / quality unit and the physician both signed.

## 9. References

> EU GMP Part IV (ATMP GMP Guidelines), release and OOS sections; principles of Annex 16 (QP certification).
> 21 CFR Parts 210/211; 21 CFR Part 1271; 21 CFR Part 600.
> FDA CBER guidance on CAR T cell products (2024); FDA long-term follow-up guidance for integrating-vector products.

Confirm the current version and clause numbers of each reference before issue.

---

## Filled specimen

The following shows the core decision completed for an example case. Details are illustrative; replace with your own.

| Field | Entry |
|---|---|
| Which gating result is OOS | Viable cell dose 0.92 x target (spec >= 1.0 x target); marginally below dose |
| COI reconciliation tied out? | Yes |
| Clinical urgency | Aggressive disease, no second apheresis feasible; vein-to-vein window closing |
| Supporting data | Prior cohort data show clinical activity at 0.9 to 1.0 x target dose; rapid sterility, identity, viability, endotoxin all pass |
| Physician informed | Yes, 2026-03-12 10:05, acknowledged in writing |
| Pending tests | USP <71> sterility, RCR/RCL, potency; committed report dates recorded; act-on-failure plan: notify physician and pharmacovigilance, investigate, report as required |
| QP decision | Release with documented rationale |
| Physician decision | Accept |

In this example the only OOS attribute was a marginally low viable dose, COI reconciled, supporting data showed activity at that dose, the physician was notified and accepted, and the pending tests carried a clear act-on-failure plan. That is a managed, defensible conditional release, not an improvised one.

## Common inspection findings this record prevents

- OOS release decided case by case with no pre-approved SOP or approval chain.
- A product released while the COI reconciliation did not tie out.
- No documented physician notification before administration.
- Pending tests with no committed dates and no plan to act on a later failure.
- A QP or quality-unit signature with no clinical counterpart, or the reverse.

## How to adapt this record

1. Set your record number and link it to your governing OOS-release SOP.
2. Match the release panel to your product's actual gating and post-infusion tests.
3. Align the authorization roles to your EU QP or US quality-unit structure.
4. Confirm every regulation in section 9 against the current published version before use.
