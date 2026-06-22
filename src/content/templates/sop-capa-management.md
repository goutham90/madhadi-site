---
title: "SOP: Corrective and Preventive Action (CAPA) Management"
description: "A plug-and-play standard operating procedure for running CAPAs end to end: triggers, triage, root cause, corrective and preventive action, verification, effectiveness check, and closure, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "SOP"
pillar: "quality-assurance"
relatedArticles: ["what-is-a-capa"]
tags: ["capa", "quality-assurance", "sop", "21 cfr 820", "root cause", "effectiveness"]
tier: "Intermediate"
---

This is a ready-to-use SOP. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Corrective and Preventive Action (CAPA) Management |
| Document number | `<<FILL: SOP-ID, e.g. SOP-QA-020>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Quality Assurance>>` |
| Applies to | `<<FILL: sites / departments in scope>>` |

## 1. Purpose

This procedure defines how `<<FILL: COMPANY NAME>>` opens, investigates, executes, verifies, and closes corrective and preventive actions. The objective is to make sure that significant quality events are addressed at their root cause, that the fix is extended to adjacent risks, and that closure happens only after the action is shown to have worked. The procedure turns a single failure into a controlled, documented change that prevents recurrence.

## 2. Scope

This procedure applies to all CAPAs raised at the sites listed in the header, regardless of source: deviations, out-of-specification or out-of-trend results, internal and external audit findings, complaints, adverse event or field action triggers, supplier nonconformances, nonconforming product, regulatory observations (for example a Form 483 item), and trends identified at management review. It covers both corrective action (a problem that has occurred) and preventive action (a risk identified before a failure). It does not replace the deviation, OOS, complaint, or change control procedures, which feed CAPA and are governed by `<<FILL: SOP-IDs for deviation, OOS, complaint, change control>>`.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Initiator | Raises the CAPA, drafts a factual problem statement, links the source record. |
| CAPA owner (process or area owner) | Accountable for the whole record reaching effective closure; drives the actions to completion. |
| Investigator / SME | Performs root cause analysis, gathers evidence, proposes corrective and preventive actions. |
| Action owners | Execute individual actions by the assigned due date and provide verification evidence. |
| Quality Assurance | Approves the problem statement, risk classification, root cause, action plan, and effectiveness criteria; tracks timelines; approves closure. |
| Quality head / management | Reviews CAPA metrics at management review, resolves resourcing, escalates aging items. |

## 4. Definitions

- **Correction**: an immediate action that fixes the instance and stops the bleeding (discard the batch, re-run the test, lock the misconfigured system). A correction does not prevent recurrence.
- **Corrective action**: a systemic change that eliminates the root cause so the same problem does not happen again.
- **Preventive action**: an action that addresses a risk identified before a failure, or that extends a corrective action to adjacent systems, products, or processes (read-across).
- **Root cause**: the systemic reason the failure occurred, supported by evidence, not a description of what happened.
- **Verification**: objective confirmation that an action was completed (the SOP was approved, training records exist, the system is reconfigured).
- **Effectiveness check**: a planned assessment after implementation, against criteria set at opening, that confirms the action actually solved the problem.
- **Read-across**: the deliberate search for the same latent cause elsewhere, so the fix reaches every place the failure could occur.

## 5. Procedure

### 5.1 Triage: decide whether the event needs a CAPA

Not every quality event needs a CAPA. Many minor, isolated deviations are resolved in the deviation record with direct corrective action. Triage each candidate on two axes, potential impact and likelihood of recurrence, and record the decision either way.

| Potential impact | Isolated cause | Recurring or systemic cause |
|---|---|---|
| Negligible / minor | Resolve in the source record; no CAPA | Trend it; raise a CAPA if the trend confirms |
| Major | CAPA, standard timeline | CAPA, expedited, with containment |
| Critical (product or patient at risk) | CAPA with immediate containment | CAPA with immediate containment and escalation |

When an event is closed without a CAPA, record the rationale on the source record (for example: "isolated, fully contained, not systemic, no CAPA raised"). Leaving the decision unmade is not acceptable.

### 5.2 Open the CAPA and write the problem statement

1. Assign a unique CAPA number and record the source or trigger, the date opened, and the linked records.
2. Write a problem statement that names what failed, where, when, how it was detected, and what is known to be affected, in plain factual terms.
3. Do not state or imply a cause in the problem statement. Cause comes later. A presumed cause biases the whole investigation.
4. QA reviews and approves the problem statement before the investigation proceeds.

### 5.3 Assess risk and contain

1. Assess whether the event poses immediate product or patient risk. State whether affected product is in distribution and what the likely impact on quality or safety is.
2. Where risk exists, take containment actions concurrently with the investigation, not after it (quarantine suspect material, freeze a compromised system, hold affected results).
3. Set the boundary of the "affected" determination early (one instrument or the whole laboratory, one batch or every batch since the last known-good state). Getting this wrong forces a painful re-scope later.
4. Set the timeline from the risk classification using section 5.8.

### 5.4 Determine root cause

1. Use a structured method appropriate to the event: 5-Why for single events, fishbone (Ishikawa) for multi-cause events, FMEA where the failure mode could surface elsewhere.
2. Support the conclusion with cited evidence (records, configuration logs, interviews, the physical state of the system). A root cause without evidence is not a root cause.
3. Where the investigation lands on operator action, ask why the system allowed that action to cause harm. Most honest "human error" findings resolve into a procedure, training, or design gap.
4. Confirm the root cause logically explains the problem statement before proceeding. QA approves the root cause.

### 5.5 Define corrective and preventive actions

1. Write corrective actions that reach the root cause, each with a named owner and a due date.
2. Place each action as high on the effectiveness hierarchy as the risk allows. Any action standing alone at the procedural or training tier should prompt the question: why could we not reach higher?

| Tier | Type of action | Reliability |
|---|---|---|
| 1 | Eliminate / design out the failure | Highest |
| 2 | Engineering or system control | High |
| 3 | Automated detection | Medium-high |
| 4 | Procedural control | Medium |
| 5 | Training / awareness | Lowest |

3. Define preventive actions by read-across: assume the same latent cause is waiting on adjacent systems, products, or processes and go looking for it. Document the result even when it is "none found, here is why."
4. For drug investigations, read-across is a legal duty under 21 CFR 211.192 (the investigation shall extend to other batches and products that may have been associated with the failure).

### 5.6 Define the effectiveness check at opening

1. Define the effectiveness criteria when the CAPA is opened, not at closure. State what "effective" looks like, the metric, the method, and the scheduled date.
2. Prefer objective data: a recurrence count of zero over a defined window, a deviation rate that has dropped against a stated baseline, an audit of the population that was supposedly fixed.
3. Record the criteria on the CAPA record. A check whose criteria are backfilled at closure is not acceptable; an inspector will compare the open date to when the criteria were set.

### 5.7 Implement, verify, and close

1. Action owners execute each action by its due date and provide objective verification evidence (document numbers, training records, system screenshots).
2. QA confirms each action is verified. Verification confirms the action was done; it does not confirm it worked.
3. At the scheduled date, perform the effectiveness check and record the result with supporting data.
4. If the check passes, QA approves closure: all actions verified, effectiveness confirmed, linked records updated, signature present.
5. If the check fails, reopen the CAPA, revisit the root cause analysis, and define new actions. Do not close on a failed or absent effectiveness check.

### 5.8 Timelines and extensions

Set due dates for root cause completion, action completion, and the effectiveness check. There is no fixed numerical timeline in regulation; the defaults below reflect inspection expectations.

| Stage | Default target | Critical events |
|---|---|---|
| Root cause analysis | Within `<<FILL: 30>>` days of opening | Faster, with containment in place |
| Action items | `<<FILL: 30-90>>` days, by complexity | Expedited |
| Effectiveness check | `<<FILL: 3-12>>` months after implementation | Sized to the metric |

An extension is allowed when it carries a documented, approved justification and a revised date. A pattern of serial extensions with no impact assessment is a finding. You are accountable for closing honestly on a schedule you can justify, not for closing fast.

## 6. Acceptance criteria

A CAPA is acceptable for closure when all of the following are true:

- The problem statement scopes the issue factually, with no assumed cause.
- Risk was assessed, affected product and distribution status are stated, and containment was decided rather than deferred.
- The root cause is backed by cited evidence and logically explains the problem statement.
- Corrective actions trace to the root cause and sit as high on the effectiveness hierarchy as the risk allows.
- Read-across to adjacent systems or products is documented, even if the result is "none found."
- Each action has objective verification evidence.
- An effectiveness check with a measurable criterion, metric, method, and date was defined at opening, and the result cites data and passed.
- Linked records are updated and the closure carries a QA signature.

## 7. References

> 21 CFR 820.100 (corrective and preventive action; for devices now read through the Quality Management System Regulation, which incorporates ISO 13485:2016 by reference, effective 02 February 2026).
> ISO 13485:2016, clauses 8.5.2 (corrective action) and 8.5.3 (preventive action).
> 21 CFR 211.192 (investigation of discrepancies and failures, including extension to other batches and products) and related Part 211 CGMP clauses.
> ICH Q10, Pharmaceutical Quality System (CAPA as a core element).
> ICH Q9, Quality Risk Management (for risk-based triage and timeline).
> ISO 9001:2015, clause 10.2 (nonconformity and corrective action).

Confirm the current version and clause numbers of each reference before issue.

## 8. Record generated: CAPA summary record

This SOP generates a CAPA record. The full form is maintained separately (see the companion CAPA Record form). The minimum fields that must be present on every closed CAPA are:

| Field | Entry |
|---|---|
| CAPA number | `<<FILL: CAPA-ID>>` |
| Source / trigger | `<<FILL: deviation / audit / complaint / trend / 483>>` |
| Problem statement | `<<FILL>>` |
| Risk classification | `<<FILL: critical / major / minor; isolated / recurring>>` |
| Root cause | `<<FILL>>` |
| Corrective actions (owner, due) | `<<FILL>>` |
| Preventive actions / read-across | `<<FILL>>` |
| Verification evidence | `<<FILL>>` |
| Effectiveness criteria (set at opening) | `<<FILL>>` |
| Effectiveness result (data) | `<<FILL: pass / fail with data>>` |
| Linked records | `<<FILL: deviation / OOS / change control / complaint>>` |
| Closure approval (name, signature, date) | `<<FILL>>` |

## 9. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 10. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (QA) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the summary record completed for an example data integrity CAPA, so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| CAPA number | CAPA-2026-0142, opened 18 June 2026 |
| Source / trigger | Internal audit finding, audit report IA-2026-09 |
| Problem statement | Internal audit conducted 15 June 2026 identified that a liquid chromatography instrument (asset tag LC-04) had its audit trail disabled for sequence integration events. 47 analytical sequences processed between 01 January 2026 and 15 May 2026 ran without a complete audit trail. Detected by audit trail configuration review. |
| Risk classification | Major; recurring exposure (change-control gap, not isolated). 31 of 47 sequences supported released batches; no product out of specification; risk is to data reconstructability. |
| Root cause | A vendor IT upgrade applied 20 December 2025 reset audit trail settings to default (disabled). The change ran through change control, but the change control SOP had no validation impact assessment checkpoint, so the audit trail impact was never evaluated. Evidence: change record CC-2025-318, system configuration log, vendor upgrade notes. |
| Corrective actions (owner, due) | (1) Reconfigure LC-04 audit trail and verify, lab IT, due 22 June 2026. (2) Revise change control SOP to add a validation impact assessment checkpoint, QA, due 30 June 2026. (3) Train IT and validation staff on the revised SOP, training, due SOP approval + 30 days. |
| Preventive actions / read-across | Review audit trail configuration on all 12 GMP computerized lab systems for the same default-reset exposure, validation, due 15 June 2026. Result: 2 additional systems found with the same issue, added to corrective scope. |
| Verification evidence | SOP revision QMS-DOC-441 rev 3 approved 25 June 2026; training records for 18 staff; LC-04 configuration screenshot confirming integration audit trail active. |
| Effectiveness criteria (set at opening) | Zero new audit-trail-disabled findings on any computerized lab system attributable to a change, over the 6 months following SOP approval, confirmed by a targeted re-audit scheduled 25 December 2026. |
| Effectiveness result (data) | Pending scheduled date. |
| Linked records | Deviation DEV-2026-077 (data review of 47 sequences), change control CC-2026-205 (SOP revision), audit report IA-2026-09. |
| Closure approval | Pending effectiveness result. |

Read that record and you can see every operational dimension: what failed, the risk, the systemic cause, actions that reach the cause and climb the effectiveness hierarchy, read-across that found two more systems, and an effectiveness check with a number behind it. The CAPA stays open until the December re-audit produces the data. That refusal to close before the effectiveness result is exactly what a reviewer is expected to see.

## Common inspection findings this SOP prevents

- A correction dressed up as a corrective action: the record discards the batch and stops, with no systemic change, so the event recurs.
- "Human error" or "training" as the universal root cause across most CAPAs in the system.
- Closure on action completion alone, with no effectiveness check, or a check that reads "no further issues observed" with no data.
- Scope too narrow: the CAPA fixes one instrument and ignores the identical ones, then the same finding appears elsewhere later.
- Effectiveness criteria backfilled at closure to match whatever happened, rather than defined at opening.
- A significant deviation or complaint closed without a CAPA and with no documented rationale for why none was raised.
- Aging CAPAs with serial unjustified extensions and a backlog that is itself a finding.

## How to adapt this SOP

1. Set your document number, owner, and effective date in the header.
2. Point the cross-references in section 2 and section 5.1 to your real deviation, OOS, complaint, and change control procedures.
3. Set your numerical timeline defaults in section 5.8 to match your quality system, and define the extension approval path.
4. If you run CAPA in an electronic quality management system, map each section of this SOP to the system's workflow states and required fields.
5. Confirm every regulation in section 7 against the current published version before issue, including the QMSR effective date for devices.
