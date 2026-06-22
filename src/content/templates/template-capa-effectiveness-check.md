---
title: "Template: CAPA Effectiveness Check"
description: "A plug-and-play CAPA effectiveness check template that sets the criterion, metric, method, and window at opening and records the data-backed pass or fail at the scheduled date, with a filled specimen and the findings it prevents."
pubDate: 2026-06-21
docType: "Template"
pillar: "quality-assurance"
relatedArticles: ["what-is-a-capa"]
tags: ["capa", "quality-assurance", "effectiveness", "template", "verification", "metrics"]
tier: "Advanced"
---

This is a ready-to-use CAPA effectiveness check template. It is the document that proves a CAPA actually worked, not just that the actions were completed. Fill the plan section when the CAPA is opened, then return at the scheduled date to record the result against the criterion you set. Replace every `<<FILL: ...>>` placeholder and route the result through your normal quality system. A filled specimen follows. Verify each cited regulation against the current source before you rely on it.

## Template control header

| Field | Entry |
|---|---|
| Template title | CAPA Effectiveness Check |
| Template number | `<<FILL: FORM-ID, e.g. FORM-QA-020-02>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Governing SOP | `<<FILL: SOP-ID for CAPA management>>` |
| Parent CAPA number | `<<FILL: CAPA-ID>>` |

## 1. Why an effectiveness check is not the same as verification

Verification confirms an action was done: the SOP was approved, training records exist, the system was reconfigured. Effectiveness confirms the action worked: the problem did not come back. Closing a CAPA on verification alone tells you the documents exist; it tells you nothing about whether recurrence was prevented. This template forces the second question and answers it with data.

## 2. Plan (complete at CAPA opening)

The criterion, metric, method, and date are defined when the CAPA is opened, before any action is taken. Criteria invented at closure to match whatever happened are a finding; an inspector compares the CAPA open date to when these fields were set.

| Field | Entry |
|---|---|
| Parent CAPA number | `<<FILL: CAPA-ID>>` |
| Root cause being checked | `<<FILL: the systemic cause the CAPA addressed>>` |
| Corrective / preventive actions being checked | `<<FILL: action numbers from the CAPA record>>` |
| Effectiveness criterion | `<<FILL: what "effective" looks like, stated as a measurable outcome>>` |
| Metric | `<<FILL: recurrence count / deviation rate vs baseline / audit pass rate / complaint rate>>` |
| Baseline (where the metric uses one) | `<<FILL: the pre-CAPA value and its source>>` |
| Method (how the data is gathered) | `<<FILL: re-audit / report query / trend pull / targeted sampling>>` |
| Population / scope checked | `<<FILL: which systems, products, batches, or sites>>` |
| Observation window | `<<FILL: start and end; length sized to the metric>>` |
| Scheduled assessment date | `<<FILL: date>>` |
| Acceptance threshold | `<<FILL: the value at or beyond which the check passes>>` |
| Reassessment trigger | `<<FILL: what result reopens the CAPA>>` |
| Plan approved by QA (name, date) | `<<FILL>>` |

### Sizing the window and choosing the metric

- Size the window so the failure has a fair chance to recur. A failure that surfaced once a quarter needs a window of at least two to three of those cycles, not two weeks.
- Choose a metric that would actually move if the fix failed. A "no further issues observed" statement is not a metric; a recurrence count, a rate against a baseline, or an audit of the fixed population is.
- Where the criterion is a rate, state the baseline and its source so the before-and-after comparison is defensible.
- Where the population was widened by read-across, check the whole widened population, not just the original instance.

## 3. Result (complete at the scheduled date)

| Field | Entry |
|---|---|
| Assessment performed on | `<<FILL: date>>` |
| Assessor (name, role) | `<<FILL>>` |
| Data gathered | `<<FILL: the actual numbers, with source references>>` |
| Observed value of the metric | `<<FILL>>` |
| Meets the acceptance threshold? | Yes / No |
| Outcome | Effective / Not effective |
| Supporting evidence references | `<<FILL: report numbers, audit references, query outputs>>` |

## 4. Decision

| Outcome | Action |
|---|---|
| Effective | Record the result, attach the data, and route the parent CAPA to closure. |
| Not effective | Do not close. Reopen the parent CAPA, revisit the root cause analysis (the cause was likely a symptom in disguise), define new actions, and set a fresh effectiveness check. |

| Field | Entry |
|---|---|
| Decision | Close parent CAPA / Reopen parent CAPA |
| If reopened: reason and new CAPA action reference | `<<FILL>>` |
| QA approval of the effectiveness result (name, signature, date) | `<<FILL>>` |

## 5. Acceptance criteria

This effectiveness check is acceptable when all of the following are true:

- The criterion, metric, method, window, and threshold were defined at CAPA opening and approved by QA.
- The metric is objective and would move if the fix had failed.
- The population checked includes everything brought into scope by read-across.
- The result cites actual data, not an opinion, and is compared against the threshold set in the plan.
- A not-effective result reopens the CAPA rather than closing it.

## 6. References

> 21 CFR 820.100(a)(4) (verify or validate the corrective and preventive action to confirm it is effective and does not adversely affect the finished device; for devices now read through the Quality Management System Regulation incorporating ISO 13485:2016, effective 02 February 2026).
> ISO 13485:2016, clause 8.5.2 (review of the effectiveness of corrective action taken).
> 21 CFR 211.192 (the broader investigation duty under which effectiveness is expected for drug investigations).
> ICH Q10 (CAPA effectiveness feeding continual improvement and management review).

Confirm the current version and clause numbers of each reference before issue.

---

## Filled specimen

The following shows the template completed for an example data integrity CAPA, so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

**Plan (set at opening, 18 June 2026).**

| Field | Entry |
|---|---|
| Parent CAPA number | CAPA-2026-0142 |
| Root cause being checked | Change control SOP gap (no validation impact assessment step for IT changes) |
| Actions being checked | Revised change control SOP (action 2), staff training (action 3), read-across reconfiguration of 3 affected systems |
| Effectiveness criterion | No new audit-trail-disabled findings on any computerized lab system attributable to a change |
| Metric | Recurrence count (target zero) |
| Baseline | 3 systems found with audit trail disabled by an uncontrolled change in the 6 months before the CAPA (source: IA-2026-09 and the read-across) |
| Method | Targeted re-audit of audit trail configuration across all 12 GMP computerized lab systems, plus review of every change record processed since SOP approval |
| Population / scope checked | All 12 GMP computerized lab systems |
| Observation window | 25 June 2026 to 25 December 2026 (6 months after SOP approval) |
| Scheduled assessment date | 25 December 2026 |
| Acceptance threshold | Zero recurrences |
| Reassessment trigger | Any audit-trail-disabled finding attributable to a change |
| Plan approved by QA | A. Patel, 18 June 2026 |

**Result (recorded 25 December 2026).**

| Field | Entry |
|---|---|
| Assessment performed on | 25 December 2026 |
| Assessor | A. Patel, QA Auditor |
| Data gathered | 12 systems re-audited; 9 change records processed since 25 June 2026 reviewed, each showing a completed validation impact assessment |
| Observed value of the metric | 0 recurrences |
| Meets the acceptance threshold? | Yes |
| Outcome | Effective |
| Supporting evidence references | Re-audit report IA-2026-31; change records CC-2026-220 through CC-2026-228 |

**Decision.** Close parent CAPA. QA approval: R. Gomez, signed, 28 December 2026.

This check passes because the criterion was set at opening, the metric is a real count with a stated baseline, the population includes the systems brought in by read-across, and the result rests on re-audit data plus a review of every change record that passed through the revised SOP. Had even one change record shown a missing validation impact assessment, or had any system shown a disabled audit trail, the outcome would have been "not effective," the CAPA would have reopened, and the root cause analysis would have been revisited rather than the record closed.

## Common inspection findings this template prevents

- An effectiveness statement that reads "effective, no further issues observed" with no measurement behind it.
- Criteria backfilled at closure to match whatever happened, with an open date that gives it away.
- A window too short for the failure to have a fair chance to recur.
- A check run only on the original instance, ignoring the systems brought in by read-across.
- A CAPA closed on a failed or inconclusive effectiveness result instead of being reopened.
- A high CAPA closure rate paired with a low effectiveness pass rate, hidden because no one tracks the second number.

## How to adapt this template

1. Set your template number, governing SOP, and parent CAPA reference in the header.
2. Make Section 2 a mandatory step the workflow cannot skip; the criterion must be set before the actions begin.
3. Pick metrics your quality system can actually produce on demand (recurrence counts, deviation rates against a baseline, audit pass rates) so the result is data, not opinion.
4. Roll the effectiveness pass rate up to management review under ICH Q10; a high closure rate with a low effectiveness rate means actions are finishing but problems are not getting fixed.
5. Confirm every regulation in Section 6 against the current published version before issue, including the QMSR effective date for devices.
