---
title: "Form: Quality Event Triage and Classification Record"
description: "A plug-and-play record for triaging a GMP quality event: facts, containment, affected scope, patient-impact statement, severity drivers, tier with a why-not-higher justification, reportability screen, and escalation, with a filled specimen and the findings it prevents."
pubDate: 2026-06-26
docType: "Form"
pillar: "quality-assurance"
relatedArticles: ["quality-event-classification-triage"]
tags: ["deviations", "classification", "patient safety", "reportability", "escalation", "form"]
tier: "Intermediate"
---

This is a ready-to-use triage record. It enforces the order that keeps classification honest: contain, capture facts, scope, assess patient impact, score, then assign a tier with a justification including why not higher, and screen for reportability before the investigation starts. Replace every `<<FILL: ...>>` placeholder with your own specifics and route the completed record per your classification SOP. A worked filled specimen follows the blank form. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Record title | Quality Event Triage and Classification Record |
| Event number | `<<FILL: event/deviation ID>>` |
| Date / time opened | `<<FILL>>` |
| Controlling SOP | `<<FILL: classification SOP-ID>>` |
| Event type | `<<FILL: deviation / OOS / OOT / complaint / audit finding / excursion / DI event>>` |

## 1. Facts (objective, no root cause)

| Field | Entry |
|---|---|
| What happened | `<<FILL>>` |
| When / where | `<<FILL: date, time, area, line, room>>` |
| Product / batch / lot | `<<FILL>>` |
| Equipment / system | `<<FILL>>` |
| Who observed / reported | `<<FILL>>` |
| Records secured | `<<FILL: batch record, audit trail, chromatogram, samples frozen>>` |

## 2. Immediate containment

| Field | Entry |
|---|---|
| Product secured (quarantine / hold) | `<<FILL: yes/no, detail>>` |
| Line / system stopped or isolated | `<<FILL>>` |
| Original records and failing samples preserved | `<<FILL>>` |
| Containment performed by / time | `<<FILL>>` |

## 3. Affected scope

| Question | Entry |
|---|---|
| Other units in this batch | `<<FILL>>` |
| Other batches on the same equipment | `<<FILL>>` |
| Other products on a shared line (next product?) | `<<FILL>>` |
| Other results from the same instrument / analyst | `<<FILL>>` |
| Time window potentially affected | `<<FILL>>` |

## 4. Patient-impact statement

| Question | Answer | Reasoning |
|---|---|---|
| Affects SISPQ? | `<<FILL: yes/no/unknown>>` | `<<FILL>>` |
| Could affected product reach a patient? | `<<FILL: distributed / in FG / containable>>` | `<<FILL>>` |
| Harm if it does | `<<FILL: negligible / minor / serious / life-threatening>>` | `<<FILL>>` |
| Population exposed | `<<FILL: general / pediatric / immunocompromised / single-source>>` | `<<FILL>>` |
| Data supporting disposition trustworthy? | `<<FILL: yes/no (DI event defaults high)>>` | `<<FILL>>` |

> Anchoring rule: if "could this reach a patient and cause harm" is yes or unknown, the event is critical until proven otherwise.

## 5. Severity drivers / risk ranking (for non-obvious tiers)

| Driver | Rating | Note |
|---|---|---|
| Severity (S) | `<<FILL: low / medium / high>>` | `<<FILL>>` |
| Probability / occurrence (P) | `<<FILL>>` | `<<FILL>>` |
| Detectability (D) | `<<FILL: good / poor; was the failed control the detection control?>>` | `<<FILL>>` |
| Recurrence? | `<<FILL: first / repeat (repeat escalates)>>` | `<<FILL>>` |

## 6. Classification

| Field | Entry |
|---|---|
| Assigned tier | `<<FILL: Critical / Major / Minor>>` |
| Drivers for this tier | `<<FILL>>` |
| Why NOT one tier higher | `<<FILL: required field>>` |
| Provisional or final | `<<FILL: provisional at open>>` |
| Classified by | `<<FILL: name, role>>` |
| QA confirmation | `<<FILL: name, signature, date>>` |

## 7. Reportability screen (complete at classification)

| Threshold | Applies? | Action / due date |
|---|---|---|
| Field alert report (21 CFR 314.81, 3 working days) | `<<FILL: yes/no/NA>>` | `<<FILL>>` |
| Biological product deviation report (600.14 / 1271.350, ~45 days) | `<<FILL>>` | `<<FILL>>` |
| Recall / field action assessment | `<<FILL>>` | `<<FILL>>` |
| GCP serious breach (E6(R3), regional window) | `<<FILL>>` | `<<FILL>>` |
| Combination product, device-side postmarket report | `<<FILL>>` | `<<FILL>>` |
| Reportability screen completed by / date | `<<FILL>>` | |

## 8. Escalation triggered

| Field | Entry |
|---|---|
| Notified per matrix (roles, times) | `<<FILL>>` |
| Investigation depth set | `<<FILL: brief / documented RCA / formal with batch impact>>` |
| CAPA opened? | `<<FILL: yes/no, ref>>` |
| Disposition status | `<<FILL: quarantine / hold / release with justification>>` |

## 9. Re-classification log (evidence-based only)

| Date | From tier | To tier | Evidence / justification | By |
|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 10. References

> 21 CFR 211.192, 211.100(b), 314.81, 600.14 / 1271.350; EU GMP Chapter 1 and Annex 16; ICH Q9(R1) and Q10; ICH E6(R3); 21 CFR Part 4 where applicable.

Confirm the current version of each reference before issue.

---

## Filled specimen

Illustrative completed record. Replace with your own.

- **Event.** OOS-2026-0207. HPLC integration parameters were changed by an analyst with no audit trail entry, and the change moved a finished-product assay result from OOS toward passing.
- **Facts.** Discovered during routine audit trail review of run HPLC-07-2206-031; the chromatogram, audit trail, and sequence were frozen.
- **Containment.** Result placed on hold; the analyst's account activity preserved; batch held.
- **Scope.** All results from the same analyst and instrument in the review period pulled for examination.
- **Patient impact.** SISPQ: yes (assay/strength is reportable). Reach patient: batch in quarantine. Harm: serious if a sub-potent batch released. Data trustworthy: no, this is a confirmed data integrity event, defaults high.
- **Classification.** Critical. Drivers: confirmed DI event affecting a reportable result that drives disposition. Why not major: the integrity of the very result used for release is compromised, so the result cannot be trusted at all.
- **Reportability screen.** Field alert screen: monitored, product contained; no distribution. Documented at classification.
- **Escalation.** QA head and site quality lead notified same day; formal investigation with batch impact across the analyst's other results; CAPA opened on access controls and audit trail configuration.
- **Re-classification.** None; remained critical.

## Common inspection findings this record prevents

- A tier with no written justification and no "why not higher."
- No explicit patient-impact statement.
- A reportability decision made after the investigation, missing the regulatory clock.
- A scope that stopped at one batch when others were associated.
- A silently overwritten initial classification.

## How to adapt this record

1. Map the event-type field to your QMS categories.
2. Keep the "why not one tier higher" field mandatory; it forces reasoning and gives the inspector their answer.
3. Wire the reportability screen so it is completed at classification, not at closure.
4. Preserve the re-classification log; never overwrite the first tier.
5. Confirm every cited regulation against the current version before use.
