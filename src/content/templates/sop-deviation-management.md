---
title: "SOP: Deviation Management"
description: "A plug-and-play standard operating procedure for handling GxP deviations end to end: reporting, classification, containment, investigation, impact assessment, batch disposition, CAPA, closure, and trending, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "SOP"
pillar: "quality-assurance"
relatedArticles: ["deviation-management"]
tags: ["deviations", "GMP", "investigation", "CAPA", "batch disposition", "SOP", "quality assurance"]
tier: "Intermediate"
---

This is a ready-to-use SOP. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Deviation Management |
| Document number | `<<FILL: SOP-ID, e.g. SOP-QA-021>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Quality Assurance>>` |
| Applies to | `<<FILL: sites / departments in scope>>` |

## 1. Purpose

This procedure defines how `<<FILL: COMPANY NAME>>` reports, classifies, investigates, and closes deviations from approved procedures, specifications, and established standards during GxP activities. The objective is to capture every departure contemporaneously, assess its impact on product quality, patient safety, and data integrity, decide the fate of affected product and records on the evidence, and prevent recurrence through corrective and preventive action.

## 2. Scope

This procedure applies to all GxP deviations at the sites listed in the header, across manufacturing, packaging, warehousing, utilities, quality control laboratories, and computerized systems that create or hold GxP records. It covers both unplanned deviations and planned (temporary) departures handled as a controlled change. It does not cover out-of-specification laboratory results, which are governed by `<<FILL: SOP-ID for OOS>>`, or product complaints, which are governed by `<<FILL: SOP-ID for complaints>>`, although either may open a deviation under this procedure.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Discoverer (any GxP staff) | Contains the event, opens the deviation record, and captures the facts at the time of discovery or as close to it as possible. |
| Area owner (Manufacturing, Lab, Warehouse, Engineering, QC) | Leads the investigation, supplies process knowledge, proposes the impact assessment and disposition. |
| Subject matter experts | Contribute to root cause and impact analysis (validation, microbiology, automation, metrology). |
| Investigation owner | Drives the investigation to a real root cause, coordinates CAPA, and meets the timeline. |
| Quality Assurance | Confirms classification, reviews investigation rigor, owns batch disposition, approves closure, and oversees CAPA. |
| Site / quality leadership | Notified on critical events, resources the investigation, owns management review of trends. |
| Qualified Person (EU, where applicable) | Cannot certify a batch for release with an unresolved relevant deviation. |

## 4. Definitions

- **Deviation**: any departure from an approved procedure, specification, batch record, or established standard during a GxP activity.
- **Unplanned deviation**: an unforeseen departure discovered during or after the activity.
- **Planned deviation (temporary change)**: an intentional, pre-approved departure from a procedure for a defined scope and duration, authorized before execution.
- **Immediate cause**: the action or condition that directly produced the event.
- **Root cause**: the underlying system condition that allowed the immediate cause to occur and which, if removed, would have prevented the event.
- **Impact assessment**: the evaluation of whether product, process, or data was affected and to what extent.
- **Disposition**: the documented decision on the fate of affected product (release, reject, rework, further testing).
- **CAPA**: corrective action that addresses the present event and preventive action that addresses the root cause to stop recurrence.

## 5. Procedure

### 5.1 Contain and report

1. The discoverer takes immediate containment action where the event may still be propagating: quarantine affected product, segregate suspect material, stop the line or system, and hold affected data. Containment happens before investigation, not after.
2. Open the deviation record (section 8) the same working day the event is discovered. Capture the date and time of discovery, the date and time of occurrence if known, who found it, the product, batch, area, system involved, and a factual description with no speculation and no conclusion.
3. Record immediate actions already taken and assign a provisional classification per section 5.3.

### 5.2 Decide planned versus unplanned

A planned deviation is permitted only when the departure is intended, the rationale is known before the activity, and QA approves it before execution. A planned deviation must state the specific modification, its rationale, the scope (duration or number of batches), and an impact assessment for that scope. If the same planned deviation is requested repeatedly, raise a change control to fix the underlying procedure rather than re-approve the departure. All other events are unplanned and follow section 5.4 onward.

### 5.3 Classify by risk

Classify in sequence. Classify provisionally at opening and confirm or revise after the impact assessment.

| Class | Definition | Typical response |
|---|---|---|
| Critical | Could directly affect patient safety, product efficacy, or data integrity in a way that may not be remediable. | Immediate QA escalation, possible batch rejection, full root cause investigation, leadership notification. |
| Major | A significant GMP departure that may affect product quality or record integrity, but the risk can be assessed and may be manageable. | Full investigation, disposition based on impact assessment, CAPA where root cause needs a change. |
| Minor | Low-risk procedural error with no likely impact on product quality, safety, or critical records. | Documented and investigated briefly; action may be retraining or a note for trending. |

Classification rules:

1. Ask whether the event could affect the patient or the product. If yes, you are at least Major.
2. Ask whether the potential harm is remediable and boundable. If it may be undetectable, irreversible, or affects a sterility, identity, or strength attribute you cannot verify, it is Critical.
3. Any loss, alteration, or unattributable change of a GMP record raises the classification regardless of product impact.
4. When in doubt, classify up. Downgrading later with documented justification is routine; under-classifying to avoid work is an inspection finding.

### 5.4 Define scope

Before investigating root cause, bound the scope. Ask "what else could be affected?" not only "is this batch affected?" Consider every batch made on the same equipment since the last verified clean point, every lot of a shared raw material, the same shift, and the same configured system. Document each potentially affected item as included or excluded with a reason.

### 5.5 Investigate root cause

1. Gather evidence: batch records, audit trails, calibration history, retained samples, logbooks, and interviews.
2. Apply a structured method appropriate to the complexity (5-Why, fishbone sorted by people, process, equipment, materials, environment, measurement, or fault tree for complex failures).
3. Distinguish immediate cause from root cause. A stated root cause that can only be fixed by telling a person to try harder is not a root cause; keep asking why until the answer points to something the organization controls.
4. For computerized-system deviations, treat the audit trail as primary evidence and assess data integrity as a first-class concern: whether any record was lost, altered, or rendered unattributable, and whether earlier records could have been silently affected.

### 5.6 Assess impact and decide disposition

1. State the requirement that was not met and the specific quality attributes that could be affected.
2. Design targeted testing or analysis to answer the exact question the deviation raised. Do not re-test everything in the hope a clean result excuses the event.
3. Write the disposition as an argument: the risk, the evidence with its acceptance criteria, and the conclusion that follows from the data.
4. QA decides the disposition. The area that performed the work may propose; QA approves or rejects. For critical deviations, or where testing cannot bound the risk, reject.
5. A batch may be released against an open investigation only when QA makes a documented, risk-based determination that the evidence in hand bounds the risk and no remaining step could reverse the decision. Commercial pressure is never the justification.

### 5.7 Define CAPA

Define corrective action for the present event and preventive action for the root cause, each with a named owner and a due date. Where the fix needs a real process, system, or document change, open a formal CAPA per `<<FILL: SOP-ID for CAPA>>` so the change is tracked to completion and later checked for effectiveness. Retraining is a legitimate action only when a competent person genuinely did not know the requirement; it is not a fix for an ambiguous procedure or a badly designed form.

### 5.8 Close and trend

1. QA verifies the impact assessment is complete, the disposition is decided, corrective actions are done, and any required CAPA is open before approving closure.
2. Close within `<<FILL: target days, e.g. 30>>` calendar days of opening. Extensions require a documented, justified rationale recorded on the deviation.
3. Feed every closed deviation into trending per `<<FILL: SOP-ID for quality metrics / trending>>`. Treat any recurrence of the same root cause as a failed CAPA that must escalate, not repeat.

## 6. Acceptance criteria

A deviation is handled acceptably when all of the following are true:

- The event was contained and the record opened the same working day it was discovered, with a factual description.
- The classification matches the assessed impact, and any change in classification is justified in the record.
- The scope explicitly addresses other potentially affected batches, lots, and records and either includes or excludes them with a reason.
- The stated root cause, if removed, would have prevented the event and points to something the organization controls.
- The disposition reads as a risk-evidence-conclusion argument, decided by QA, with testing chosen to answer the deviation's question.
- The CAPA addresses the root cause, not just the symptom, and has an owner and a date.
- The record is internally consistent, closed within the target or extended with a documented rationale, and fed into trending.

## 7. References

> 21 CFR 211.192 (investigation of discrepancies and batch or specification failures, distributed or not).
> 21 CFR 211.22(a) (authority of the quality control unit to approve or reject).
> 21 CFR 211.100 and 211.160 (production and laboratory controls).
> EU GMP (EudraLex Volume 4), Part I, Chapter 1, Pharmaceutical Quality System (recording, investigation, and CAPA for deviations).
> ICH Q10, Pharmaceutical Quality System (CAPA and management review).
> ICH Q9, Quality Risk Management (risk-based classification and scope).
> ICH Q7 (deviation handling for active pharmaceutical ingredients).
> 21 CFR Part 820 / the Quality Management System Regulation incorporating ISO 13485 (nonconformance and CAPA for devices).
> 21 CFR Part 11 and EU GMP Annex 11 (computerized-system deviations and audit trail evidence).

Confirm the current version and clause numbers of each reference before issue.

## 8. Record generated: deviation record

| Field | Entry |
|---|---|
| Deviation ID | `<<FILL: auto-assigned number>>` |
| Date / time of discovery | `<<FILL>>` |
| Date / time of occurrence | `<<FILL: if known>>` |
| Discovered by (name, role) | `<<FILL>>` |
| Product / batch / lot | `<<FILL>>` |
| Area / process / system | `<<FILL>>` |
| Planned or unplanned | `<<FILL>>` |
| Factual description | `<<FILL: what was observed, no conclusions>>` |
| Immediate / containment actions | `<<FILL>>` |
| Provisional classification | Critical / Major / Minor |
| Scope assessed | `<<FILL: other batches / lots / records, included or excluded with reason>>` |
| Root cause (method used) | `<<FILL>>` |
| Impact assessment and testing | `<<FILL: attributes, tests, acceptance criteria, results>>` |
| Disposition and rationale | `<<FILL: release / reject / rework, with the argument>>` |
| Final classification | Critical / Major / Minor |
| CAPA reference | `<<FILL: number or N/A>>` |
| Investigation owner (name, signature, date) | `<<FILL>>` |
| QA approval / closure (name, signature, date) | `<<FILL>>` |

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

The following shows the same record completed for an example blend uniformity event, so you can see the level of detail an inspector expects. The company, batch, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Deviation ID | DEV-2026-0207 |
| Date / time of discovery | 03 June 2026, 14:20 |
| Date / time of occurrence | 03 June 2026, approx. 11:40 |
| Discovered by | T. Okafor, Shift Supervisor, Granulation |
| Product / batch / lot | Tablet Product A, batch 26B-0344 |
| Area / process / system | Blending suite, blender BL-02 |
| Planned or unplanned | Unplanned |
| Factual description | Blend step 7.3 ran for 12 minutes against the validated 15 minutes. Operator states the timer field on the batch record was misread as a target of 12. No other parameters out of range. |
| Immediate / containment actions | Batch 26B-0344 held in quarantine; downstream compression not started. |
| Provisional classification | Major |
| Scope assessed | Only batch 26B-0344 affected. BL-02 ran no other product since last cleaning verification. Three prior near-misses on the same batch-record field identified during review, none trended. |
| Root cause (method used) | 5-Why. Immediate cause: timer field misread. Root cause: the mix-time field sits adjacent to a similar field on the batch record, inviting misreads, and prior near-misses were never trended or acted on. |
| Impact assessment and testing | Risk: under-blending could produce non-uniform content. 10 blend uniformity samples (top, middle, bottom, drum positions) returned mean 99.2 percent, RSD 1.8 percent, against acceptance of 90 to 110 percent and RSD not more than 5 percent. Content uniformity on 30 units met USP <905>. Validation history shows uniformity reached by minute 9. |
| Disposition and rationale | Release. The evidence bounds the risk: the 12-minute blend achieved acceptable uniformity, supported by validation showing uniformity by minute 9. |
| Final classification | Major |
| CAPA reference | CAPA-2026-0061 (redesign batch-record field layout; add form to periodic human-factors review) |
| Investigation owner | M. Reyes, signed, 06 June 2026 |
| QA approval / closure | R. Gomez, signed, 08 June 2026 |

In this example the supervisor contained the batch before investigating, the record opened the same day, and the investigation reached past "operator misread" to the form layout that invited the error and the near-misses that were never trended. The disposition reads as an argument with stated acceptance criteria, and the CAPA fixes the form rather than retraining the operator. That sequence, contain to classify to scope to root cause to disposition to CAPA, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this SOP prevents

- A deviation was written hours or days after discovery, undermining the contemporaneous record.
- A critical process deviation sits in the records as "minor" with no meaningful investigation behind it.
- The root cause reads "operator error" with no examination of what enabled the error.
- The CAPA is retraining against a deviation that an ambiguous procedure or form actually caused.
- The scope asks only "is this batch affected?" leaving potentially compromised product in distribution.
- A batch was released before the investigation closed, with "we need to ship" as the only rationale.
- The same root cause recurs across records and each one closes with another round of retraining.
- Deviations drift open for months with no documented justification, and the open backlog grows.

## How to adapt this SOP

1. Set your document number, owner, and effective date in the header.
2. Point the cross-references in sections 2, 5.7, and 5.8 to your real OOS, complaint, CAPA, and trending procedures.
3. Set the closure target in section 5.8 to your own metric and define how extensions are justified and approved.
4. If you handle planned departures within change control rather than as planned deviations, align section 5.2 with that procedure and keep the before-execution authorization requirement.
5. If your classification tiers differ in number or naming, map them to the Critical, Major, Minor logic in section 5.3 and keep the risk sequence.
6. Confirm every regulation in section 7 against the current published version before issue.
