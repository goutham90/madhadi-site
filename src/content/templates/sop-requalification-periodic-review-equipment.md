---
title: "SOP: Requalification and Periodic Review of Qualified Equipment"
description: "A plug-and-play standard operating procedure for keeping equipment in a qualified state: requalification triggers and scope, periodic review frequency by risk class, the data inputs, the conclusion, and the linkage to calibration, PM, and change control, with a filled specimen."
pubDate: 2026-06-28
docType: "SOP"
pillar: "equipment-qualification"
relatedArticles: ["requalification-and-periodic-review-equipment", "equipment-qualification-lifecycle", "change-control-validated-systems"]
tags: ["requalification", "periodic review", "equipment qualification", "Annex 15", "GMP", "SOP"]
tier: "Intermediate"
---

This is a ready-to-use SOP for maintaining the qualified state of equipment after initial IQ/OQ/PQ. Replace every `<<FILL: ...>>` placeholder, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template. Verify each cited regulation against the current source before you rely on it. This content is educational reference, not legal or regulatory advice; adapt it to your own equipment and quality system.

## Document control header

| Field | Entry |
|---|---|
| Document title | Requalification and Periodic Review of Qualified Equipment |
| Document number | `<<FILL: SOP-ID, e.g. SOP-VAL-031>>` |
| Version | `<<FILL: version>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Validation>>` |
| Applies to | `<<FILL: sites / equipment classes in scope>>` |

## 1. Purpose

This procedure defines how `<<FILL: COMPANY NAME>>` keeps qualified equipment in a qualified state after initial qualification: how it decides when requalification is needed, how it scopes that requalification by risk, and how it performs periodic review to confirm the qualified state holds. Qualified state is a present-tense claim that must be defensible on the day of an inspection, not on the day the original report was signed.

## 2. Scope

This procedure applies to all GMP equipment, utilities, and systems that have been through initial qualification at the sites listed in the header, including sterilization, depyrogenation, lyophilization, HVAC and cleanroom systems, bioreactors, formulation and filling equipment, and software-controlled units. For software-controlled equipment it covers the equipment periodic review and signposts the computerized-system periodic evaluation under `<<FILL: SOP-ID for computerized system periodic review>>`. It does not cover initial qualification (see `<<FILL: SOP-ID for equipment qualification>>`).

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Equipment / system owner | Owns the qualified state day to day; authors periodic reviews, assembles data, schedules requalification, ensures PM and calibration run. |
| Subject matter expert (SME) | Judges qualification impact of changes, defines requalification scope, interprets trends. |
| Quality Assurance | Approves change-control impact decisions, requalification protocols and reports, and periodic review conclusions; owns review frequencies and the maintenance/change boundary rule; manages overdue reviews. |
| Metrology / calibration | Executes calibrations, manages intervals, raises out-of-tolerance events, feeds calibration history to reviews. |
| Maintenance / engineering | Executes PM and corrective maintenance, decides like-for-like vs modification with QA, feeds maintenance history to reviews. |
| Validation / qualification | Authors and executes requalification protocols, maintains the qualification register. |

## 4. Definitions

- **Qualified state**: the documented, evidenced condition in which equipment performs as intended within defined limits under its actual operating conditions.
- **Requalification**: planned re-execution of qualification testing, in whole or part, to re-confirm acceptance criteria. Scope is the minimum testing that re-establishes confidence for what was challenged, not a default full IQ/OQ/PQ.
- **Periodic review**: the structured, documented evaluation at a defined frequency that judges whether the system remains qualified and its documentation remains complete and accurate.
- **Like-for-like**: a replacement of the same part number or a proven-equivalent spec, fit, and function, that touches no critical function, control logic, or software.

## 5. Procedure

### 5.1 Change-driven requalification

1. Every change to qualified equipment is raised in change control per `<<FILL: SOP-ID for change control>>`.
2. The SME and QA assess qualification impact: which IQ/OQ/PQ elements the change touches and the risk if the change is wrong.
3. Define the requalification scope and acceptance criteria in a protocol or change-control test plan, scoped to what the change could have affected and justified by risk.
4. Execute the requalification under the same documentation rigor as the original qualification.
5. Review and approve results; close the change only after requalification passes.
6. Update the qualification register and the system documentation set.

Use the maintenance-vs-change rule: a genuinely like-for-like replacement that touches no critical function is handled under maintenance with calibration verification and a recorded justification; anything that is not like-for-like, or that touches a critical function, control logic, software, or the qualified envelope, goes through change control.

### 5.2 Periodic (time-driven) requalification

1. High-risk sterilization and aseptic equipment is requalified on a fixed interval (commonly annual, including re-mapping where applicable), recorded in the qualification register.
2. Lower-risk equipment is requalified on a review-driven basis with a maximum interval cap. A periodic review that finds the system stable and unchanged may defer requalification with documented justification.

### 5.3 Periodic review frequency by risk class

Set the interval from the equipment's documented risk class in a policy. These are common industry intervals, not a regulatory mandate of specific numbers; the requirement is a justified frequency that is met.

| Risk class | Default interval | Examples |
|---|---|---|
| High (direct product/patient impact, sterility-critical) | 12 months | Autoclaves, depyrogenation tunnels, lyophilizers, sterile filtration skids, critical HVAC, isolators |
| Medium | 24 months | Tablet presses, granulators, bioreactors, formulation vessels, release-tied analytical instruments |
| Low (indirect impact, simple, stable) | 36 months | Support equipment, simple monitored utilities, non-critical balances under a strong calibration program |

### 5.4 Perform the periodic review

1. The qualification register generates the due date by risk class; do not rely on memory.
2. The owner assembles, for the period: change records, deviations, calibration history, PM history, document status, training status, and computerized-system elements where applicable.
3. Analyze, do not just list: look for trends (calibration drift toward limits, rising corrective-maintenance rate), not only individual pass/fail.
4. Assess cumulative impact: several individually low-impact changes can together move the system outside its qualified envelope.
5. Reach a reasoned conclusion: does the system remain qualified, is requalification required and at what scope, what actions are needed.
6. Raise actions in CAPA/change control with owners and due dates; SME and QA approve; set and register the next review date.

### 5.5 Calibration and PM linkage

1. Every critical instrument identified in qualification is enrolled in the calibration program.
2. An as-found out-of-tolerance calibration triggers a backward product-impact assessment covering every batch since the last in-tolerance calibration.
3. PM is derived from the equipment's critical functions; PM compliance and corrective-maintenance frequency feed periodic review.

## 6. Acceptance criteria

- The review was completed on or before its due date; overdue reviews are themselves managed as deviations.
- Every in-scope data category is addressed with evidence cited, not asserted.
- Open changes and open CAPAs are explicitly flagged.
- Trends are identified and addressed, not just listed; cumulative change is evaluated in aggregate.
- The qualified-state conclusion is traceable to specific evidence.
- The report is approved by both the technical SME/owner and QA.

## 7. References

> US 21 CFR 211.63 (equipment design) and 211.68 (calibration/maintenance program).
> EU GMP Annex 15 (Qualification and Validation, 2015), periodic assessment of requalification need.
> EU GMP Chapters 3 and 4 (premises/equipment maintenance and documentation).
> EU GMP Annex 11 (periodic evaluation of computerised systems).
> ICH Q9(R1) Quality Risk Management; ICH Q10 Pharmaceutical Quality System.
> ASTM E2500 (risk- and science-based verification), described by reference only.

Confirm the current version and clause numbers of each reference before issue.

## 8. Record generated: periodic review conclusion line

| Field | Entry |
|---|---|
| Equipment ID and risk class | `<<FILL>>` |
| Review period | `<<FILL: from>>` to `<<FILL: to>>` |
| Remains qualified? | Yes / No |
| Requalification required (scope) | `<<FILL: none / scoped description>>` |
| Actions raised (refs) | `<<FILL>>` |
| SME/owner (name, signature, date) | `<<FILL>>` |
| QA approval (name, signature, date) | `<<FILL>>` |

## 9. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 10. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (SME) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the conclusion record completed for an example steam sterilizer on a 12-month cycle. Numbers are illustrative; replace with your own.

| Field | Entry |
|---|---|
| Equipment ID and risk class | Steam Sterilizer STZ-04, High |
| Review period | 01 June 2025 to 31 May 2026 |
| Remains qualified? | Yes |
| Requalification required (scope) | Annual heat-penetration / load re-mapping due next month, already scheduled; no early trigger |
| Actions raised (refs) | CAL-2026-114 (shorten chamber pressure transducer interval 12 to 6 months); DCR-2026-077 (update P&ID for gasket part-number change) |
| SME/owner | M. Devi, signed, 12 June 2026 |
| QA approval | R. Gomez, signed, 13 June 2026 |

In this example the review confirmed the sterilizer remains qualified, but caught a chamber-pressure transducer drifting toward its limit (action: shorten its calibration interval) and a P&ID not updated after a gasket part-number change (action: document change). Neither was a failure; both were caught before they became one. That is the review earning its place.

## Common inspection findings this SOP prevents

- Overdue periodic reviews with no record of action.
- Reviews that list changes and deviations but perform no analysis and reach an unsupported "remains qualified" conclusion.
- No documented requalification frequency or risk basis.
- A controller swap, software upgrade, or relocation that went through with no qualification-impact assessment.
- An instrument relied on for qualification that is not in the calibration program, or an out-of-tolerance result closed with no backward product-impact assessment.
- Like-for-like used as a loophole to avoid requalifying a genuine modification.

## How to adapt this SOP

1. Set your document number, owner, and effective date in the header.
2. Replace the risk-class intervals in 5.3 with your policy's intervals and your equipment list.
3. Point the cross-references in sections 2 and 5 to your real change-control, qualification, and computerized-system review procedures.
4. Confirm every regulation in section 7 against the current published version before issue.
