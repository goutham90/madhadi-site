---
title: "Quality Risk Register"
description: "A ready-to-use quality risk register aligned to ICH Q9(R1), with columns for risk ID, area, hazard and harm, current controls, severity, probability, detectability, risk score and level, acceptability, mitigations, owner, due date, residual risk, and closure, plus scoring scales, review and escalation rules, and a filled specimen."
pubDate: 2026-06-22
docType: "Log"
pillar: "quality-assurance"
relatedArticles: ["quality-risk-management", "csv-risk-assessment-methodology", "data-criticality-and-data-risk"]
tags: ["quality risk management", "ICH Q9", "risk register", "risk assessment", "QMS", "residual risk", "escalation"]
tier: "Advanced"
---

This is a ready-to-use quality risk register. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your own document numbers, dates, and scoring thresholds, and route it through your normal document control, review, and approval. The scoring scales below are defaults you can change, but once you set them, apply them consistently across the register. A worked filled specimen with entries from manufacturing, the laboratory, and a computerized system follows the template so you can see how a completed register reads. Verify each cited regulation against the current source before you rely on it. Using this template does not by itself create compliance; the register is only as good as the assessments, decisions, and follow-up recorded in it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Quality Risk Register |
| Document number | `<<FILL: register ID, e.g. REG-QA-002>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Register owner | `<<FILL: role, e.g. Head of Quality Assurance>>` |
| Scope | `<<FILL: site / department / product / system family in scope>>` |
| Governing procedure | `<<FILL: SOP-ID for quality risk management>>` |
| Review cycle | `<<FILL: e.g. quarterly, plus on trigger events>>` |
| Approvers | `<<FILL: roles that approve the register and its periodic review>>` |

## 1. Purpose and how to use this register

This register is the single live list of identified quality risks for the scope named in the header, the controls in place, the assessed risk, the decision taken, and the actions that reduce it. It supports the quality risk management process required by ICH Q9(R1) and operationalizes the principle that the effort spent on a risk should match its significance to product quality and patient safety.

The register is a living record, not a one-time deliverable. Add a risk when it is identified, keep its assessment current as controls change, and close a line only when residual risk is accepted and any mitigation is verified effective. Every change to a line is dated and attributable.

Each risk follows a simple lifecycle.

<div class="flow">
  <div class="flow-step">Identify</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">Assess (S, P, D)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">Score and level</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">Decide acceptability</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">Mitigate</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">Re-score residual</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">Review and close</div>
</div>

## 2. Roles and responsibilities

| Role | Responsibility |
|---|---|
| Register owner (QA) | Owns the register, keeps it current, runs the periodic review, and confirms scoring is applied consistently. |
| Risk owner | Named person accountable for one risk line: keeps its assessment accurate, drives mitigations to completion, and confirms residual risk. |
| Process or system SME | Provides the technical basis for severity, probability, and detectability and proposes mitigations. |
| Quality Assurance | Approves risk acceptability decisions, especially for high and medium-high risks, and decisions to accept a risk without further mitigation. |
| Management / quality council | Receives escalated high risks, approves resourcing for mitigations, and accepts risks that remain high after mitigation where that decision is permitted. |

## 3. Scoring scales

Set these scales once and apply them to every line. The defaults below use a 1 to 5 ordinal scale for each of severity, probability of occurrence, and detectability. Risk score is the product of the three. Adjust the wording, the number of bands, or the thresholds to fit your process, but record the scale you used in the governing procedure so any reviewer can reproduce a score.

### 3.1 Severity (S): how bad the harm is if the risk is realized

| Score | Severity | Description |
|---|---|---|
| 5 | Critical | Patient harm, wrong dose, contaminated or non-sterile product reaching patients, falsified or lost critical GxP data, recall-level event. |
| 4 | Major | Product quality compromised, batch loss, confirmed out-of-specification result affecting disposition, reportable regulatory event. |
| 3 | Moderate | Quality impact contained by other controls, rework, investigation required, no product to patient affected. |
| 2 | Minor | Local inefficiency or documentation issue, no product or data quality impact. |
| 1 | Negligible | No material quality or compliance impact. |

### 3.2 Probability of occurrence (P): how likely the risk is to occur with current controls

| Score | Probability | Indicative meaning |
|---|---|---|
| 5 | Frequent | Expected to occur often, history of recurrence. |
| 4 | Likely | Has occurred more than once, will likely recur. |
| 3 | Occasional | Has occurred, could recur under foreseeable conditions. |
| 2 | Unlikely | Not observed but credible. |
| 1 | Rare | Highly improbable given current controls. |

### 3.3 Detectability (D): how likely the issue is to be caught before it causes harm

Detectability is scored so that a higher number means harder to detect, which makes risk worse. A strong detection control that catches the issue early gives a low score.

| Score | Detectability | Meaning |
|---|---|---|
| 5 | Very low | No control would catch it before impact; only found by the harm itself. |
| 4 | Low | Caught only by chance or late, after the record or product has moved on. |
| 3 | Moderate | A review or check might catch it but is not guaranteed. |
| 2 | High | A defined, reliable check catches it before impact. |
| 1 | Very high | Automated or independent control catches it immediately, hard to miss. |

### 3.4 Risk score and risk level

Risk score = S x P x D, ranging from 1 to 125. Map the score to a level and an action expectation. These bands are defaults; set your own and keep them fixed.

| Risk score | Risk level | Expectation |
|---|---|---|
| 60 to 125 | High | Not acceptable as-is. Mitigation required, escalate to management, time-bound action with QA approval. |
| 30 to 59 | Medium-high | Mitigation required where reasonably practicable, QA approves the plan, owner drives to closure. |
| 12 to 29 | Medium | Reduce where practicable, monitor, document the basis if accepted. |
| 1 to 11 | Low | Acceptable with existing controls, document acceptance, review at the periodic cycle. |

Note that the score is a tool to rank and prioritize, not a substitute for judgement. A single severity of 5 (direct patient harm) should trigger management attention regardless of the product score, because a rare, hard-to-detect, life-threatening hazard can carry a numerically modest score yet still be unacceptable. Record any such override and its basis on the line.

## 4. Register columns and what goes in each

| Column | What to record |
|---|---|
| Risk ID | Unique, never reused, e.g. QR-2026-001. |
| Date raised | Date the risk was added. |
| Process / system / area | Where the risk lives (unit operation, lab system, computerized system, facility area). |
| Risk description | Plain statement of the risk: what could go wrong and under what conditions. |
| Hazard and harm | The hazard (source of potential harm) and the harm (the consequence to product quality or patient). |
| Current controls | Controls already in place that prevent or detect the issue. |
| S | Severity score from 3.1. |
| P | Probability score from 3.2. |
| D | Detectability score from 3.3. |
| Risk score | S x P x D. |
| Risk level | Band from 3.4. |
| Risk acceptability | Accept / Accept with monitoring / Not acceptable, reduce. |
| Additional mitigations | Specific actions to reduce S, P, or D, each with how it changes the score. |
| Owner | Named risk owner. |
| Due date | Target completion for the mitigations. |
| Residual S / P / D | Re-scored after mitigations are in place and verified. |
| Residual risk score / level | Recomputed product and band. |
| Residual acceptability | Decision on the residual risk, with QA approval where required. |
| Status | Open / In progress / Mitigated, monitoring / Closed. |
| Review / closure | Date and signature of the last review and of closure, with the verification basis. |

## 5. Rules for review, escalation, and closure

### 5.1 When to add or update a risk

Add a new line, or revisit an existing one, whenever a trigger occurs: a deviation or out-of-specification result with a systemic cause, a CAPA, a change control, a new process or system, an audit or inspection finding, a complaint or recall trend, a supplier change, or new regulatory expectation. Do not wait for the periodic review to capture a risk that is already known.

### 5.2 Periodic review

The register owner runs a documented review at the cycle named in the header, and at minimum confirms for each open line: the assessment still reflects reality, controls are still in place and effective, mitigations are on track or overdue items are escalated, and any line eligible for closure is verified and closed. The review itself is recorded (section 7) and approved.

### 5.3 Escalation

| Condition | Escalate to | Timing |
|---|---|---|
| New or re-scored risk lands in the High band | Management / quality council | Promptly, before the next periodic cycle |
| Severity of 5 on any line, regardless of score | QA and management | At identification |
| Mitigation overdue past its due date | Risk owner's manager and QA | At the review, or sooner |
| Decision to accept a risk that remains High after mitigation | Management with documented QA approval | Before acceptance is recorded |

### 5.4 Closure

A line is closed only when residual risk is accepted at the appropriate level, every mitigation is complete and its effectiveness verified (not just implemented), and the closure is signed and dated. Effectiveness verification means evidence that the action actually reduced the risk, for example, a check that the new control is working in routine use, not just that the procedure was issued. A closed line stays in the register as a record; it is not deleted.

## 6. The register

Copy the row template for each risk. In a spreadsheet or validated risk tool, the same columns become fields; keep the audit trail on so changes to a line are attributable and dated.

| Risk ID | Date raised | Process / system / area | Risk description | Hazard and harm | Current controls | S | P | D | Score | Level | Acceptability | Additional mitigations | Owner | Due date | Residual S/P/D | Residual score / level | Residual acceptability | Status | Review / closure |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `<<FILL: QR-YYYY-001>>` | `<<FILL: date>>` | `<<FILL: area>>` | `<<FILL: what could go wrong and when>>` | `<<FILL: hazard / harm>>` | `<<FILL: existing controls>>` | `<<FILL: 1-5>>` | `<<FILL: 1-5>>` | `<<FILL: 1-5>>` | `<<FILL: S x P x D>>` | `<<FILL: level>>` | `<<FILL: accept / reduce>>` | `<<FILL: actions to lower S/P/D>>` | `<<FILL: name>>` | `<<FILL: date>>` | `<<FILL: e.g. 4/2/2>>` | `<<FILL: score / level>>` | `<<FILL: decision>>` | `<<FILL: open / closed>>` | `<<FILL: date, signature>>` |
| `<<FILL: QR-YYYY-002>>` | | | | | | | | | | | | | | | | | | | |

## 7. Periodic review record

| Field | Entry |
|---|---|
| Review date | `<<FILL: date>>` |
| Period covered | `<<FILL: from>>` to `<<FILL: to>>` |
| Open lines reviewed | `<<FILL: count>>` |
| New lines added this period | `<<FILL: count>>` |
| Lines escalated | `<<FILL: IDs>>` |
| Overdue mitigations | `<<FILL: IDs or none>>` |
| Lines closed this period | `<<FILL: IDs>>` |
| Reviewer (name, signature, date) | `<<FILL>>` |
| QA approval (name, signature, date) | `<<FILL>>` |

## 8. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 9. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (QA) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Worked specimen

The following shows the register completed with example lines from manufacturing, the laboratory, and a computerized system, so you can see the level of detail an inspector expects. The company, sites, systems, and numbers are illustrative; replace them with your own. The scoring uses the default 1 to 5 scales above, where higher detectability means harder to catch.

**Register:** REG-QA-002, v2.1, Acme Bio, Site B (drug substance and QC), governing procedure SOP-QA-031, quarterly review cycle.

| Risk ID | Process / area | Risk description | Hazard and harm | Current controls | S | P | D | Score | Level | Acceptability | Additional mitigations | Owner | Due | Residual S/P/D | Residual score / level | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| QR-2026-014 | Manufacturing, bioreactor BR-03 sterile filtration | Pre-use post-sterilization integrity test skipped or recorded after filtration, so a failed filter could pass undetected | Hazard: non-integral sterilizing filter. Harm: non-sterile drug substance reaching fill, patient safety | Validated filter, automated integrity tester, batch record step, second-person verification | 5 | 2 | 3 | 30 | Medium-high | Reduce | Make the integrity-test step a forced electronic gate in MES that blocks filtration start until a pass is recorded; add it to the line-clearance check | M. Okafor (Mfg) | 2026-09-30 | 5/2/1 | 10, Low | In progress, monitoring |
| QR-2026-015 | QC laboratory, HPLC release testing | Manual re-integration of chromatograms without a recorded reason could bias a release result | Hazard: undocumented data manipulation. Harm: wrong disposition, out-of-specification batch released or valid batch rejected | Part 11 access controls, audit trail enabled, audit trail review each run before result use | 4 | 3 | 3 | 36 | Medium-high | Reduce | Lock re-integration behind a mandatory reason field; route all re-integrations to a daily review-by-exception report approved by QC supervisor | A. Patel (QC) | 2026-08-15 | 4/2/2 | 16, Medium | Mitigated, monitoring |
| QR-2026-016 | Computerized system, LIMS-01 result transfer | LIMS-to-ERP result transfer is a one-way interface with no reconciliation, so a dropped or altered value could go to disposition unnoticed | Hazard: silent data corruption in transfer. Harm: incorrect specification decision, integrity gap | Interface validated at go-live, error log monitored weekly | 4 | 2 | 4 | 32 | Medium-high | Reduce | Add an automated checksum and reconciliation between LIMS and ERP with an exception alert; review reconciliation log daily | S. Nguyen (IT QA) | 2026-10-31 | 4/2/1 | 8, Low | Open |
| QR-2026-009 | Manufacturing, cold-chain storage Site B | Cold room temperature excursion not alarmed during a power event could affect product stability | Hazard: out-of-range storage. Harm: degraded product, possible loss of batch | Calibrated mapping, continuous monitoring with alarm, backup generator | 4 | 2 | 2 | 16 | Medium | Accept with monitoring | Quarterly alarm-test verification; add a redundant independent probe | J. Rivas (Eng) | 2026-12-15 | 4/1/2 | 8, Low | Mitigated, monitoring |
| QR-2025-041 | QC laboratory, balance BAL-12 | Daily balance check not performed before weighing reference standards | Hazard: unverified balance. Harm: weighing error, biased assay result | Daily check SOP, logbook, calibration | 3 | 2 | 2 | 12 | Medium | Accept with monitoring | Convert paper check log to LIMS-enforced daily check with a hard stop before weighing | A. Patel (QC) | 2026-07-31 | 3/1/1 | 3, Low | Closed |

**Closure note for QR-2025-041:** the LIMS-enforced daily balance check went live, effectiveness verified over two months of routine use with zero missed checks and a blocked-weighing event correctly captured. Residual risk re-scored to 3 (Low), accepted, QA-approved, line closed 2026-07-31 by A. Patel, approved R. Gomez.

**Escalation note for QR-2026-014:** severity is 5 (direct patient safety), so the line was flagged to the quality council at identification even though its score sits in Medium-high. Council approved the MES gating mitigation and the resourcing on 2026-06-30.

What the specimen demonstrates: each line names a real hazard and the harm it leads to, scores it consistently against the published scales, states the decision, assigns one named owner and a due date, and re-scores the residual only after mitigations are in place and verified. The two QC lines share an owner but stay as separate risks. The high-severity manufacturing line was escalated on severity, not just on score, which is the judgement layer ICH Q9(R1) expects on top of the numbers.

## Common inspection findings this register prevents

- Risks are assessed once at project start and never updated as controls or processes change.
- A risk is scored but no acceptability decision is recorded, so it is unclear whether anyone accepted it.
- Mitigations are listed as "implemented" with no evidence they actually reduced the risk (no effectiveness check).
- Residual risk is never re-scored, so the register still shows the pre-mitigation level after the action closed.
- The same severity scale is applied inconsistently, or the scoring rules are not written down, so scores cannot be reproduced.
- A high-severity hazard is buried because its arithmetic score is modest, with no override and no escalation.
- Overdue mitigations sit on the register past their due date with no escalation.

## How to adapt this register

1. Set your document number, owner, scope, and review cycle in the header, and name the governing risk-management SOP.
2. Decide whether the 1 to 5 scales and the level bands in section 3 fit your process; change them if needed, then write the final scales into your SOP so every reviewer scores the same way.
3. Confirm the detectability direction with your team (here, higher score means harder to detect) so no one inverts it.
4. Wire the escalation rules in section 5.3 to your real management review and quality council.
5. If you keep the register in a spreadsheet, lock the scoring formula and control access; if you keep it in a validated risk tool, confirm the audit trail and the score calculation are part of that system's validation.
6. Confirm every regulation in section 10 against the current published version before issue.

## 10. Regulations this supports

- ICH Q9(R1), Quality Risk Management (2022; FDA-adopted 2023).
- ICH Q10, Pharmaceutical Quality System.
- EU GMP, Chapter 1 (Pharmaceutical Quality System), and the quality risk management principles applied across the GMP chapters and annexes.
- FDA 21 CFR Parts 210 and 211 (current good manufacturing practice for finished pharmaceuticals), including the production, process control, and laboratory control requirements that the register's risks and controls map to.
- FDA 21 CFR Part 11 and EU GMP Annex 11 (2011), where the register covers computerized systems and electronic records.
- FDA Data Integrity and Compliance With Drug CGMP guidance (2018) and MHRA GxP Data Integrity guidance (2018), for data-related risks and controls.
- PIC/S PI 041, for data integrity expectations in the inspected GMP environment.
- ICH Q7 (API GMP) where the register scope includes drug-substance manufacturing, and the relevant biologics CGMP expectations under 21 CFR Parts 600 to 680 for biological products.
