---
title: "Form: Deviation Record and Investigation Report"
description: "A plug-and-play deviation record and investigation report form: initial facts, classification, scope, root cause, impact assessment, batch disposition, CAPA, and closure, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Form"
pillar: "quality-assurance"
relatedArticles: ["deviation-management"]
tags: ["deviations", "GMP", "investigation", "form", "batch disposition", "CAPA", "quality assurance"]
tier: "Intermediate"
---

This is a ready-to-use form. It pairs with a deviation management SOP and captures the full path of an event from first report to closure on one controlled record. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your form number under document control, and route it through your normal review and approval. A worked filled specimen follows the blank form so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Form title | Deviation Record and Investigation Report |
| Form number | `<<FILL: FORM-ID, e.g. FRM-QA-021-01>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Linked SOP | `<<FILL: SOP-ID for deviation management>>` |
| Page | `<<FILL: page of pages>>` |

## Section A: Initial report (complete at discovery)

Complete this section the same working day the event is discovered. Record facts only. No speculation, no conclusions, no blame.

| Field | Entry |
|---|---|
| Deviation ID | `<<FILL: auto-assigned number>>` |
| Date / time of discovery | `<<FILL>>` |
| Date / time of occurrence (if known) | `<<FILL>>` |
| Discovered by (name, role, signature) | `<<FILL>>` |
| Product / batch / lot affected | `<<FILL>>` |
| Area / process / equipment / system | `<<FILL>>` |
| Document or version in use (if relevant) | `<<FILL>>` |
| Planned or unplanned | Planned / Unplanned |
| Factual description of the event | `<<FILL: what was observed, the requirement that was not met>>` |
| Immediate / containment actions taken | `<<FILL: quarantine, line stop, segregation, data hold>>` |
| Notified to (name, role, date / time) | `<<FILL>>` |

If this is a planned deviation, also record the modification, the rationale, the scope (duration or number of batches), and the QA pre-approval below before the activity proceeds.

| Planned deviation field | Entry |
|---|---|
| Specific modification | `<<FILL>>` |
| Rationale | `<<FILL>>` |
| Scope (duration / batches) | `<<FILL>>` |
| QA pre-approval (name, signature, date) | `<<FILL>>` |

## Section B: Classification (QA confirms)

Provisional classification is set at opening; QA confirms or revises after the impact assessment. Any change in classification is justified here.

| Field | Entry |
|---|---|
| Provisional classification | Critical / Major / Minor |
| Could the event affect the patient or the product? | Yes / No |
| Is the potential harm remediable and boundable? | Yes / No / Not yet known |
| Does the event touch data integrity (loss, alteration, unattributable change)? | Yes / No |
| Final classification | Critical / Major / Minor |
| Justification if classification changed | `<<FILL or N/A>>` |
| Classified by (name, signature, date) | `<<FILL>>` |

## Section C: Scope

Bound the event before investigating root cause. Ask "what else could be affected?" not only "is this batch affected?"

| Potentially affected item | Included or excluded | Reason |
|---|---|---|
| Other batches on same equipment since last verified clean | `<<FILL>>` | `<<FILL>>` |
| Other lots of a shared raw material | `<<FILL>>` | `<<FILL>>` |
| Same shift / team | `<<FILL>>` | `<<FILL>>` |
| Same configured system / prior records | `<<FILL>>` | `<<FILL>>` |
| Other (specify) | `<<FILL>>` | `<<FILL>>` |

## Section D: Investigation and root cause

| Field | Entry |
|---|---|
| Evidence reviewed | `<<FILL: batch records, audit trails, calibration history, retained samples, interviews>>` |
| Method used | 5-Why / Fishbone / Fault tree / Other: `<<FILL>>` |
| Immediate cause | `<<FILL>>` |
| Root cause | `<<FILL: the system condition that allowed the immediate cause>>` |
| For computerized systems: was any record lost, altered, or unattributable? | Yes / No / N/A |
| Audit trail reconciled with accounts given | Yes / No / N/A |
| Investigation owner (name, signature, date) | `<<FILL>>` |

## Section E: Impact assessment and batch disposition

| Field | Entry |
|---|---|
| Quality attributes potentially affected | `<<FILL>>` |
| Targeted testing or analysis performed | `<<FILL: tests chosen to answer the deviation's question>>` |
| Acceptance criteria | `<<FILL>>` |
| Results | `<<FILL>>` |
| Disposition | Release / Reject / Rework / Further action: `<<FILL>>` |
| Disposition rationale (risk, evidence, conclusion) | `<<FILL>>` |
| If released against open investigation: documented risk basis | `<<FILL or N/A>>` |
| Disposition decided by QA (name, signature, date) | `<<FILL>>` |

## Section F: CAPA

| Field | Entry |
|---|---|
| Corrective action (this event) | `<<FILL>>` |
| Preventive action (root cause) | `<<FILL>>` |
| CAPA record reference | `<<FILL: number or "none required" with reason>>` |
| Action owner(s) | `<<FILL>>` |
| Due date(s) | `<<FILL>>` |
| Effectiveness check planned | Yes / No / N/A |

## Section G: Closure

| Field | Entry |
|---|---|
| Impact assessment complete | Yes / No |
| Disposition decided | Yes / No |
| Corrective actions complete | Yes / No |
| Required CAPA opened | Yes / No / N/A |
| Record internally consistent (classification, root cause, CAPA, disposition align) | Yes / No |
| Opened date / target close date / actual close date | `<<FILL>>` |
| Extension justification (if late) | `<<FILL or N/A>>` |
| QA approval of closure (name, signature, date) | `<<FILL>>` |

## Acceptance criteria for a completed record

- Section A was completed the same working day the event was discovered, with facts only.
- The final classification in Section B matches the assessed impact, with any change justified.
- Section C names every potentially affected item and includes or excludes each with a reason.
- The root cause in Section D, if removed, would have prevented the event and points to something the organization controls.
- The disposition in Section E reads as a risk-evidence-conclusion argument, decided by QA, with testing chosen to answer the deviation's question.
- The CAPA in Section F addresses the root cause and has an owner and a date.
- Section G is signed by QA only when every element is complete and the record is internally consistent.

## References

> 21 CFR 211.192 (investigation of discrepancies and batch or specification failures, distributed or not).
> 21 CFR 211.22(a) (authority of the quality control unit to approve or reject).
> EU GMP (EudraLex Volume 4), Part I, Chapter 1, Pharmaceutical Quality System.
> ICH Q10 (CAPA and management review) and ICH Q9 (risk-based classification and scope).
> ICH Q7 (deviation handling for active pharmaceutical ingredients).
> 21 CFR Part 820 / the Quality Management System Regulation incorporating ISO 13485 (nonconformance and CAPA for devices).
> 21 CFR Part 11 and EU GMP Annex 11 (computerized-system deviations and audit trail evidence).
> USP <905> Uniformity of Dosage Units (cited where content uniformity testing is used as impact evidence).

Confirm the current version and clause numbers of each reference before issue.

---

## Filled specimen

The following shows the form completed for an example cold-chain excursion, so you can see the level of detail an inspector expects. The company, batch, and numbers are illustrative; replace them with your own.

### Section A: Initial report

| Field | Entry |
|---|---|
| Deviation ID | DEV-2026-0231 |
| Date / time of discovery | 11 June 2026, 08:05 |
| Date / time of occurrence | 10 June 2026, between 22:10 and 23:55 |
| Discovered by | L. Haddad, Warehouse Operator |
| Product / batch / lot affected | Biologic Drug Substance, lot DS-26-118 |
| Area / process / system | Cold room CR-3, temperature logger TL-CR3-01 |
| Planned or unplanned | Unplanned |
| Factual description | TL-CR3-01 recorded 9.4 C for 105 minutes against a storage requirement of 2 to 8 C. Logger alarm did not page overnight. Excursion found on morning data review. |
| Immediate / containment actions | Lot DS-26-118 placed on hold. Cold room verified back in range at 02:00. Material not moved or used. |
| Notified to | QA on-call (R. Gomez), 11 June 2026, 08:20 |

### Section B: Classification

| Field | Entry |
|---|---|
| Provisional classification | Major |
| Could the event affect the patient or the product? | Yes |
| Is the potential harm remediable and boundable? | Yes (stability data exists for short excursions) |
| Does the event touch data integrity? | No |
| Final classification | Major |
| Justification if classification changed | N/A |
| Classified by | R. Gomez, signed, 11 June 2026 |

### Section C: Scope

| Potentially affected item | Included or excluded | Reason |
|---|---|---|
| Other lots in CR-3 during the window | Included: lots DS-26-117 and DS-26-119 | Same cold room, same window. |
| Other cold rooms | Excluded | Independent units, all in range per their loggers. |

### Section D: Investigation and root cause

| Field | Entry |
|---|---|
| Evidence reviewed | Logger trend, alarm-paging log, HVAC maintenance record, operator interview. |
| Method used | 5-Why |
| Immediate cause | Cold room compressor short-cycled after a defrost event, raising temperature briefly. |
| Root cause | The overnight alarm escalation list had a lapsed on-call number, so the page never reached staff; the page-test was not part of the periodic check. |
| Audit trail reconciled | N/A |
| Investigation owner | P. Nair, signed, 13 June 2026 |

### Section E: Impact assessment and batch disposition

| Field | Entry |
|---|---|
| Quality attributes potentially affected | Potency, aggregation. |
| Targeted testing or analysis performed | Excursion duration and magnitude assessed against the registered stability budget; potency and size-exclusion testing on the three affected lots. |
| Acceptance criteria | Cumulative time-out-of-range within the validated excursion allowance; potency and aggregation within release specification. |
| Results | 105 minutes at 9.4 C consumed less than 5 percent of the allowed excursion budget; potency and aggregation within specification on all three lots. |
| Disposition | Release. |
| Disposition rationale | Risk: brief warm excursion could degrade the protein. Evidence: excursion well within the validated stability budget, confirmed by in-specification potency and aggregation. Conclusion: the evidence bounds the risk. |
| Disposition decided by QA | R. Gomez, signed, 16 June 2026 |

### Section F: CAPA

| Field | Entry |
|---|---|
| Corrective action | Lots tested and released; alarm escalation list corrected immediately. |
| Preventive action | Add a monthly alarm page-test to the cold-chain monitoring procedure and to the periodic check. |
| CAPA record reference | CAPA-2026-0068 |
| Action owner | Facilities Lead |
| Due date | 30 June 2026 |
| Effectiveness check planned | Yes |

### Section G: Closure

| Field | Entry |
|---|---|
| Impact assessment complete | Yes |
| Disposition decided | Yes |
| Corrective actions complete | Yes |
| Required CAPA opened | Yes |
| Record internally consistent | Yes |
| Opened / target / actual close | 11 June 2026 / 11 July 2026 / 17 June 2026 |
| Extension justification | N/A |
| QA approval of closure | R. Gomez, signed, 17 June 2026 |

In this example the operator held the material before anyone investigated, the scope reached past the one lot to the other lots sharing the cold room, and the root cause was the failed alarm escalation rather than the compressor itself. The disposition is an argument tied to the validated excursion budget, and the CAPA fixes the alarm test, not the people. That is the shape of a defensible record.

## Common inspection findings this form prevents

- The initial report is undated or written well after discovery, breaking contemporaneity.
- Classification is recorded but not justified, and the impact assessment does not support it.
- The scope box names only the batch in front of the investigator, missing shared equipment or material.
- Root cause is "operator error" with nothing on what enabled the error.
- Disposition reads as a verdict ("tested, passed, released") with no acceptance criteria or argument.
- The same person performed the work and signed off the disposition, with no QA decision.
- Closure is signed while a CAPA or a corrective action is still open.

## How to adapt this form

1. Set your form number, linked SOP, and effective date in the header.
2. If your classification tiers differ, relabel Section B and keep the risk questions that drive the decision.
3. Expand Section C with the affected-item rows your operation actually has (suppliers, product families, system interfaces).
4. If you record CAPA in a separate system, keep Section F as a pointer to that record rather than the full plan.
5. Align the closure target in Section G with your SOP and your trending metric.
6. Confirm every regulation in the references against the current published version before issue.
