---
title: "Requalification and Periodic Review of Qualified Equipment"
description: "How to keep equipment in a qualified state after the initial IQ/OQ/PQ: requalification triggers, periodic review cadence, and the linkage to calibration, preventive maintenance, and change control."
pubDate: 2026-06-20
tags: ["equipment qualification", "requalification", "periodic review", "calibration", "preventive maintenance", "gmp", "validation"]
pillar: "equipment-qualification"
tier: "Intermediate"
---

Initial qualification gets a piece of equipment into a validated state. Keeping it there is the harder job, and the one inspectors actually probe. A chromatograph that passed OQ four years ago, a depyrogenation tunnel mapped at installation, an autoclave qualified before three control-board swaps: none of these are still "qualified" by virtue of a signed report sitting in a binder. Qualified state is a present-tense claim, and you have to be able to defend it on the day of the inspection, not on the day the report was signed.

This article covers how that claim is maintained. It deals with requalification (the targeted re-execution of qualification testing when something changes or time passes), periodic review (the structured look-back that confirms a system is still fit for use), and the operational programs (calibration, preventive maintenance, change control) that feed both. The goal is that you can build the program, run it, defend it, and answer the questions an inspector asks about it.

For the upstream activity, read [Equipment Qualification Lifecycle](/articles/equipment-qualification-lifecycle). This article picks up where that one ends.

---

## What "maintaining the qualified state" actually means

A qualified state is the documented, evidenced condition in which a piece of equipment performs as intended, within defined limits, under its actual operating conditions. The initial IQ/OQ/PQ established it. Everything after that either confirms it still holds or detects that it has drifted.

Three forces erode qualified state over time:

1. **Physical drift and wear.** Sensors age, seals degrade, pumps lose calibration, heating elements weaken, gaskets compress. Nothing announces this. It shows up as a calibration that barely passes, a batch that runs slow, an environmental excursion.
2. **Change.** Component replacements, firmware updates, control-system upgrades, relocation, utility changes, software patches. Each can invalidate part of the original qualification.
3. **Use that diverges from the qualified envelope.** The equipment gets used for a new product, a new load pattern, a wider parameter range, or a different cleaning regime than what PQ covered.

Maintaining qualified state is the set of controls that catch all three before they reach product. The three pillars are:

- **Routine monitoring and control programs** (calibration, preventive maintenance, and in some cases automated condition monitoring) that keep the equipment within limits day to day.
- **Change control**, which evaluates every proposed change for qualification impact and triggers requalification when needed.
- **Periodic review**, which steps back at a defined cadence and asks: across everything that happened since the last review, is this system still qualified, and is the documentation that says so still complete and accurate?

### Five related activities people confuse

These terms get used interchangeably and they are not the same thing. Keeping them distinct is the difference between a clean answer in an inspection and a muddled one.

| Activity | What it is | What triggers it | Output |
|---|---|---|---|
| Calibration | Confirms a measuring instrument reads true against a standard | A calendar interval set by risk | Calibration certificate, as-found/as-left data |
| Preventive maintenance (PM) | Keeps the equipment physically in the condition qualification assumed | A schedule from critical functions | PM work order, completion record |
| Periodic review | A documented look-back that judges whether the system is still qualified and its documentation still accurate | A risk-based interval (for example 12/24/36 months) | Periodic review report with a qualified-state conclusion |
| Requalification | Re-execution of qualification testing, in whole or part, to re-establish the qualified state | A change with qualification impact, or a review/interval that calls for it | Executed requalification protocol and report |
| Revalidation | Re-validation of a process (not just the equipment) when process-affecting change accumulates | Process change, trend, or periodic process review | Process validation report |

The trap is treating periodic review and requalification as synonyms. Periodic review is the judgment; requalification is one of the actions that judgment can call for. A review can conclude that no requalification is needed, and that conclusion, when the data supports it, is just as valid as one that triggers a full re-mapping.

---

## Regulatory basis

You do not need to memorize every clause, but you must be able to name the source of the requirement when asked. The expectation to maintain the qualified state is explicit in several places.

> "Equipment used in the manufacture, processing, packing, or holding of a drug product shall be of appropriate design, adequate size, and suitably located to facilitate operations for its intended use and for its cleaning and maintenance."
> US 21 CFR 211.63

> "Automatic, mechanical, or electronic equipment ... shall be routinely calibrated, inspected, or checked according to a written program designed to assure proper performance."
> US 21 CFR 211.68(a)

**EU GMP Annex 15 (Qualification and Validation), 2015 revision** is the most direct source. It states that equipment, facilities, utilities, and systems should be evaluated at an appropriate frequency to confirm they remain in a state of control, and that the need for requalification should be assessed on a periodic basis. Annex 15 deliberately moves away from fixed calendar requalification toward a risk-based, review-driven model: you requalify when a review or a change tells you to, not merely because a clock ran out.

**EU GMP Chapter 3** covers premises and equipment maintenance in operation. **EU GMP Chapter 4** governs the documentation (qualification records, maintenance records, calibration records) that must exist and be retained.

**ICH Q9(R1) Quality Risk Management (2023 revision)** is the framework you use to decide how much requalification is enough and how often periodic review should occur. Risk drives frequency and depth.

**ICH Q10 Pharmaceutical Quality System** places equipment lifecycle and periodic review inside the management system, including the role of management review and continual improvement.

**ASTM E2500-13 (Standard Guide for Specification, Design, and Verification of Pharmaceutical and Biopharmaceutical Manufacturing Systems and Equipment)** frames verification as risk- and science-based, with subject matter experts (SMEs) leading. Its philosophy carries straight into the maintenance phase: requalification scope follows criticality, not ritual.

For computerized systems, the periodic review obligation also lives in **EU GMP Annex 11 (Computerised Systems)**, which requires that computerized systems be periodically evaluated to confirm they remain in a valid state and are compliant. Many pieces of GMP equipment (chromatography data systems, PLC- or SCADA-controlled units, building management systems) carry both an equipment periodic review and a computerized-system periodic review, sometimes combined into one assessment.

The risk/quality rationale behind all of this: equipment that has silently fallen out of its qualified envelope can produce out-of-specification product, false in-process readings, or undetected contamination. The cost of catching that through a structured review is trivial compared with the cost of a recall, a rejected batch, or a data-integrity finding traced to an uncalibrated instrument.

---

## Requalification: what it is and when to do it

Requalification is the planned re-execution of qualification testing, in whole or in part, to confirm that equipment still meets its acceptance criteria. It is not a re-run of the entire original IQ/OQ/PQ by default. The right scope is the minimum testing that re-establishes confidence for whatever was challenged.

There are two distinct triggers, and conflating them is a common error.

### Change-driven requalification

This is triggered by a specific change, through change control. The change control assessment determines qualification impact and defines the requalification scope. Examples and typical scope:

| Change | Typical requalification scope |
|---|---|
| Replacement of a temperature probe on an autoclave with a like-for-like part | Calibration verification; usually no OQ/PQ re-run if truly like-for-like and documented |
| Replacement of the autoclave controller / PLC | OQ of affected control functions; PQ (load mapping) if control logic affects lethality delivery |
| Software/firmware upgrade on a chromatography data system | Risk-based regression of affected functions; re-verification of calculations, audit trail, security; see [Chromatography Data System Integrity](/articles/chromatography-data-system-integrity) |
| Relocation of a freeze dryer to a new room | Full IQ at new location; OQ of utilities dependence; PQ if environment differs materially |
| Addition of a new product to a multi-product reactor | PQ / process performance challenge for the new product; cleaning validation impact assessment |
| Change to a critical utility feeding the equipment (e.g., new WFI loop) | Re-qualification of the utility plus impact assessment on dependent equipment |

The decision sequence for a change:

1. Raise the change in change control. Read [Change Control for Validated Systems](/articles/change-control-validated-systems).
2. The SME and QA assess qualification impact: which IQ/OQ/PQ elements does this change touch, and what is the risk if the change is wrong?
3. Define requalification scope and acceptance criteria in a protocol or change-control test plan.
4. Execute the requalification testing under the same documentation rigor as the original.
5. Review and approve results; close the change only after requalification passes.
6. Update the validation status / qualification register and the system's documentation set.

The governing principle: scope the requalification to what the change could have affected, justified by risk, and document that justification. "We replaced a like-for-like sensor, calibrated it, and verified one set point" is a defensible decision when the reasoning is written down. "We replaced the controller and re-ran only the calibration" is not.

### Periodic (time-driven) requalification

This is the requalification that an organization performs at a defined interval, or that a periodic review concludes is needed, independent of any single change. Annex 15 frames this as: assess the need for requalification periodically. Two models exist in practice, and you should know both.

- **Fixed-interval requalification.** The equipment is requalified on a calendar (for example, autoclaves and sterilizers are very commonly requalified annually, including a re-mapping). This is conservative and easy to defend, and remains standard practice for high-risk sterilization and aseptic equipment.
- **Risk-based / review-driven requalification.** Instead of a fixed clock, the periodic review evaluates whether anything (cumulative changes, calibration drift trends, maintenance history, deviations, use-pattern changes) indicates that requalification is warranted. If the review finds the system stable and unchanged, requalification may be deferred with justification.

Most mature programs run a hybrid: high-risk equipment (sterilizers, depyrogenation tunnels, lyophilizers, critical HVAC, sterile filtration skids) on a fixed interval, and lower-risk equipment on a review-driven basis with a maximum interval cap (for example, "review at least every 24 months, requalify if the review or any change indicates").

A short numeric illustration of "review-driven":

> An automated tablet press has been in service 30 months. Periodic review at month 24 found: 0 unplanned maintenance events affecting critical functions, all calibrations passed first-time with no drift trend toward limits, 1 minor deviation unrelated to equipment performance, no product additions, no changes to the qualified parameter range. Conclusion: the system remains in a qualified state; full requalification not warranted; re-confirm OQ critical alarm checks only; next review in 24 months. That conclusion is defensible because the supporting data is cited, not asserted.

---

## Periodic review: the central deliverable

Periodic review is the structured, documented evaluation performed at a defined frequency to confirm that a system remains in a qualified/validated state and that its supporting documentation is complete, current, and accurate. It is the keystone of maintaining qualified state and the single most-asked-about activity in this topic at inspection. For the broader system-level equivalent, see [Validation Master Plan and Periodic Review](/articles/validation-master-plan-and-periodic-review).

### Why it is required

Annex 15 (re)qualification expectations and Annex 11 clause on periodic evaluation both require it for their respective scopes. The quality rationale: changes, deviations, calibration results, and maintenance accumulate in separate systems over time. No single one of them, viewed alone, may signal a problem. Periodic review is the deliberate act of pulling them together for one asset and asking whether the sum tells a different story than the parts. It also catches documentation rot: superseded SOPs still referenced, drawings not updated after a change, training lapses, missing records.

### Frequency and how to set it

Frequency is risk-based. A defensible scheme ties the interval to a documented criticality or risk classification of the equipment.

| Equipment risk class | Typical periodic review interval | Examples |
|---|---|---|
| High (direct product/patient impact, sterility-critical) | 12 months | Autoclaves, depyrogenation tunnels, lyophilizers, sterile filtration skids, critical HVAC/cleanroom systems, isolators |
| Medium | 24 months | Tablet presses, coaters, granulators, bioreactors, formulation vessels, standalone analytical instruments tied to release |
| Low (indirect impact, simple, stable) | 36 months | Some support equipment, simple utilities with strong monitoring, non-critical balances under a strong calibration program |

These are common industry intervals, not a regulatory mandate of specific numbers. What inspectors require is that you have a written, risk-justified frequency and that you meet it. Set the rule once in a policy or SOP; do not invent intervals per asset without a basis.

### What goes into a periodic review

A complete equipment periodic review report should contain:

1. **System identification.** Equipment ID, description, location, owner, criticality/risk class, current validation status.
2. **Scope and period covered.** The window since the last review (or since initial qualification for the first review).
3. **Reference to current qualification status.** Initial qualification reports, last requalification, current validated configuration baseline.
4. **Change control review.** Every change raised against the system in the period. For each: change number, description, qualification impact decision, requalification performed (if any), closure status. Open/unclosed changes are flagged.
5. **Deviation and event review.** All deviations, incidents, and unplanned events involving the equipment. CAPA status. Recurring or trending issues called out. See [Deviation Management](/articles/deviation-management).
6. **Calibration history review.** Calibration results in the period: pass/fail, out-of-tolerance (OOT) events, any as-found out-of-tolerance results and their product impact assessments, and trend toward limits even where passing. See [Calibration and Metrology Program](/articles/calibration-and-metrology-program).
7. **Preventive maintenance review.** PM compliance (were PMs done on schedule?), corrective maintenance frequency, any reliability concerns, spare-parts/obsolescence issues.
8. **Document review.** Are SOPs, drawings (P&IDs, electrical), specifications, and the qualification document set current and consistent with the as-built/as-operated system? Any superseded references?
9. **Training review.** Are operators and maintainers trained to current procedures?
10. **Computerized-system elements (if applicable).** Audit trail review status, user access review, security, backup/restore verification, software version vs. validated baseline, patches applied. See [Audit Trail Design and Review](/articles/audit-trail-design-and-review) and [Backup, Restore, and Disaster Recovery Validation](/articles/backup-restore-disaster-recovery-validation).
11. **Assessment and conclusion.** A reasoned statement: does the system remain in a qualified/validated state? Is requalification required, and if so, what scope? Are there actions?
12. **Actions and ownership.** Any CAPAs, document updates, requalification protocols to be raised, with owners and due dates.
13. **Approvals.** SME/owner and QA signatures and dates.

### How to run a periodic review, step by step

1. **Schedule triggers.** A validation/qualification register or a CMMS/document system generates the review due date based on the asset's risk class. Do not rely on memory; due dates must be tracked.
2. **Assemble the data.** The system owner / SME pulls change records, deviations, calibration history, PM history, and document status for the period. This is the bulk of the work and where it usually goes wrong (data scattered across systems).
3. **Analyze, do not just list.** For each data category, look for trends, not just individual pass/fail. A calibration that passes at 9.8% of a 10% limit every time is a signal even though it never failed.
4. **Assess cumulative impact.** Several individually low-impact changes can together move the system outside its qualified envelope. Evaluate the aggregate.
5. **Reach a conclusion and define actions.** State plainly whether the system is still qualified. If yes, say so with evidence. If actions are needed, raise them in CAPA/change control with owners and dates.
6. **Approve and file.** SME and QA approve. The report becomes part of the asset's lifecycle record.
7. **Set the next review date** and update the register.

### Acceptance criteria: what good looks like

- The review was completed on or before its due date (no overdue reviews, or overdue reviews themselves managed as deviations).
- Every data category in scope is addressed with evidence cited, not asserted.
- Open changes and open CAPAs are explicitly flagged, not buried.
- Trends (calibration drift, rising corrective-maintenance rate) are identified and addressed, not just listed.
- The conclusion is justified by the data above it. An inspector can trace the "remains qualified" statement back to specific evidence.
- Documentation discrepancies found are routed to correction with owners and dates.
- The report is approved by both the technical SME/owner and QA.

---

## Worked example: an autoclave periodic review (condensed)

Below is a condensed, realistic example of the body of a periodic review for a high-risk asset on a 12-month cycle. Numbers are illustrative.

**System:** Steam Sterilizer STZ-04. Risk class: High. Status: Qualified. Period: 2025-06-01 to 2026-05-31.

| Category | Finding | Assessment |
|---|---|---|
| Changes | 2 changes: (a) like-for-like replacement of door gasket; (b) drain-temperature probe replacement | (a) no qualification impact, PM-level; (b) calibration verified, OQ door/drain alarm check re-run, passed. Both closed. |
| Deviations | 3 deviations: 1 cycle aborted on operator error; 2 minor documentation deviations | None indicate equipment performance loss. No CAPA open. |
| Calibration | 6 instruments. All passed. Chamber pressure transducer as-found at 0.18 bar vs 0.25 bar limit | Pass, but drifting toward limit across last 3 cycles. Action: shorten this transducer's calibration interval from 12 to 6 months. |
| Preventive maintenance | 4 PMs scheduled, 4 completed on time. 1 unplanned corrective (steam trap) | PM compliance 100%. Corrective rate not elevated. |
| Documents | Operating SOP current. P&ID not updated after gasket part-number change | Discrepancy. Action: raise document change to update spare BOM. |
| Requalification status | Last full requalification (heat penetration / load mapping) 11 months ago | Annual requalification due next month; scheduled. No early trigger. |

**Conclusion:** STZ-04 remains in a qualified state for the period reviewed. Two actions raised (calibration interval reduction; P&ID/BOM update). Annual requalification (load re-mapping) proceeds on schedule. Next periodic review: 2027-05-31.

**Why this is a good review:** it cites evidence, it catches a drift trend before it becomes a failure, it catches a documentation gap, and it ties cleanly into the separate annual requalification rather than duplicating it. The "remains qualified" sentence is earned.

### Worked example: catching cumulative change

The failure mode periodic review exists to catch is the one no single change control would ever flag. Here is what it looks like when the review does its job. A lyophilizer accumulated four changes over 18 months, each assessed at the time as low impact:

| # | Change | Individual assessment at the time |
|---|---|---|
| 1 | Shelf-fluid pump replaced with a proven-equivalent model | Like-for-like, no qualification impact |
| 2 | Condenser refrigerant changed to a drop-in replacement | Minor, no expected effect on condenser temperature |
| 3 | Control software patched (security only) | No GxP-function change |
| 4 | A second product family added to the load schedule | PQ performed for the new product; no change to the cycle for existing products |

Each was reasonable in isolation. The periodic review looks at the sum. The reviewer plots the condenser pull-down time and the shelf temperature uniformity across the period and finds that pull-down time has crept up since change 2, and that the added load schedule (change 4) now runs the condenser closer to its capacity. Individually nothing breached; together the margin to the qualified condenser performance has thinned. The review raises an action: a targeted requalification of condenser performance under the combined worst-case load, not a full re-mapping. That action exists only because someone evaluated the aggregate. This is the single most valuable thing a periodic review does, and the one most often skipped.

---

## The linkage to calibration and preventive maintenance

Periodic review and requalification do not generate confidence on their own. They depend on the routine programs running underneath. This linkage is examined heavily at inspection because a broken link here invalidates the qualified-state claim.

### Calibration

Calibration keeps the measuring instruments that the qualification depends on trustworthy. If a sterilizer's chamber thermocouple is out of calibration, every cycle it controlled is suspect. The connection points to manage:

- **Every critical instrument identified in qualification must be in the calibration program.** A common gap: an instrument used to demonstrate OQ acceptance is never enrolled for routine calibration. The qualification then quietly expires the moment the instrument drifts.
- **As-found out-of-tolerance (OOT) results trigger a backward product-impact assessment.** If an instrument is found out of tolerance at calibration, you must evaluate every batch processed since its last good calibration. This is a frequent and serious finding when not done.
- **Calibration intervals are themselves risk-based and reviewed.** Periodic review is where you adjust an interval based on observed drift, as in the worked example.

See [Calibration and Metrology Program](/articles/calibration-and-metrology-program) and [Analytical Instrument Qualification](/articles/analytical-instrument-qualification) for the instrument side.

### Preventive maintenance

PM keeps the equipment physically within the condition that qualification assumed. The linkage:

- **PM activities should be derived from the equipment's critical functions**, not just the vendor manual. The functions that qualification proved must be the functions PM protects.
- **PM compliance is a periodic-review input.** Chronic late or skipped PMs are a direct argument that the qualified state is not being maintained.
- **Corrective maintenance on a critical component can be a requalification trigger.** Replacing a worn heating element is maintenance; but if it changes the thermal profile, it can require re-mapping. The change-control/maintenance boundary must be defined in procedure so the decision is consistent.
- **The maintenance-vs-change boundary must be written down.** Like-for-like replacement under maintenance vs. a modification under change control is a judgment that needs a documented rule, or different people will make it differently.

The decision rule, as a flow, keeps that judgment consistent across whoever makes it:

<div class="flow-v">
  <div class="flow-step">A part is being replaced or a setting changed on qualified equipment</div>
  <span class="flow-arrow">&darr;</span>
  <div class="flow-step">Is the replacement genuinely like-for-like (same part number or proven-equivalent spec, fit, and function)?</div>
  <span class="flow-arrow">&darr;</span>
  <div class="flow-step">If NO, or if it touches a critical function, control logic, software, or the qualified envelope: raise change control and assess requalification scope</div>
  <span class="flow-arrow">&darr;</span>
  <div class="flow-step">If YES and it touches no critical function: handle under maintenance; verify calibration of any affected measuring instrument and record the like-for-like justification</div>
  <span class="flow-arrow">&darr;</span>
  <div class="flow-step">Either way, capture it so periodic review can see the cumulative picture later</div>
</div>

The last step matters as much as the first: a string of individually defensible like-for-like swaps is exactly what periodic review has to be able to reconstruct and judge in aggregate.

For the broader programs, see [Equipment Qualification Lifecycle](/articles/equipment-qualification-lifecycle) and [Change Control for Validated Systems](/articles/change-control-validated-systems).

---

## Roles and responsibilities

| Role | Responsibility |
|---|---|
| Equipment / system owner (often production or engineering) | Owns the asset and its qualified state day to day. Initiates and authors periodic reviews, assembles the data, schedules requalification, ensures PM and calibration are executed. |
| Subject matter expert (SME) | Provides technical judgment on qualification impact of changes, scope of requalification, and interpretation of trends. Under ASTM E2500 thinking, the SME leads verification decisions. |
| Quality Assurance (QA) | Approves change-control qualification-impact decisions, requalification protocols and reports, and periodic reviews. Owns the policy that sets review frequencies and the rule for the maintenance/change boundary. Ensures overdue reviews are managed. |
| Metrology / calibration group | Executes calibrations, manages intervals, raises OOT events, feeds calibration history to reviews. |
| Maintenance / engineering | Executes PM and corrective maintenance, decides like-for-like vs. modification with QA, feeds maintenance history to reviews. |
| Validation / qualification group | Authors and executes requalification protocols, maintains the validation/qualification register, may author or coordinate periodic reviews depending on the organization. |
| IT / system administrator (for computerized equipment) | Manages backups, user access reviews, patch/version control, supports the computerized-system portion of periodic review. |

The non-negotiable: QA approval on the requalification decision and on the periodic review conclusion. The SME may drive the technical content, but the qualified-state claim is a quality decision.

---

## Common mistakes and inspection-finding patterns

These are the patterns that recur in inspection observations and warning letters on this topic. They are generic, drawn from public regulatory expectations.

1. **Overdue periodic reviews.** The review was due, the due date passed, nothing happened. This is one of the most common findings. Fix: track due dates in a register, treat overdue reviews as deviations, and report them in quality metrics.
2. **Periodic review as a box-ticking exercise.** The report lists changes and deviations but performs no analysis, identifies no trends, and reaches a "remains qualified" conclusion that the body does not support. Inspectors read for the reasoning, not the checklist.
3. **No documented requalification frequency or basis.** Equipment is requalified "when we get to it," with no SOP defining the interval or the risk basis. Or fixed intervals exist with no justification for why they are what they are.
4. **Change made without requalification impact assessment.** A controller swap, a software upgrade, or a relocation went through with no evaluation of qualification impact, so requalification that should have happened never did.
5. **Calibration program gaps.** An instrument relied on for qualification is not in the calibration program; or as-found OOT results were closed without a backward product-impact assessment.
6. **Like-for-like used as a loophole.** Material changes are repeatedly classified as like-for-like maintenance to avoid requalification. When the "like-for-like" parts are not genuinely equivalent, the qualified state is broken without anyone evaluating it.
7. **Documentation not updated after change.** Drawings, specs, and SOPs still describe the old configuration. The qualified state and the documented state diverge, which is itself a data-integrity and control concern.
8. **Computerized-system periodic review missing for GMP equipment.** The equipment review happens but the Annex 11 periodic evaluation (audit trail, access, backup, version) is skipped, even though the unit is software-controlled.
9. **Cumulative change blindness.** Each change was assessed in isolation and found low-impact; nobody ever evaluated whether the accumulation moved the system out of its qualified envelope. Periodic review exists precisely to catch this and frequently does not.
10. **Requalification scope not justified.** Either everything is re-run wastefully, or too little is re-run with no rationale. Inspectors want to see a risk-justified scope, written down.

---

## Interview-ready: questions and strong answers

**Q: What is the difference between requalification and periodic review?**
Periodic review is the structured look-back at defined intervals that decides whether a system is still in a qualified state and whether requalification is needed. Requalification is the act of re-executing qualification testing (in whole or part) to re-establish that state. Periodic review can conclude that requalification is or is not required. They are related but not the same activity.

**Q: What triggers requalification?**
Two categories. Change-driven: a specific change (component, software, relocation, new product, utility) assessed through change control to have qualification impact. Time/review-driven: a fixed interval for high-risk equipment, or a periodic review concluding that cumulative changes, drift, or use changes warrant it. Annex 15 expects the need for requalification to be assessed periodically on a risk basis.

**Q: Do you have to fully re-run IQ/OQ/PQ every time?**
No, and doing so blindly is a red flag for not understanding risk. You scope requalification to what was challenged. A like-for-like sensor swap may need only calibration verification. A controller replacement needs OQ of affected functions. A relocation may need full IQ plus OQ plus PQ. The scope is risk-justified and documented.

**Q: How do you set the periodic review frequency?**
Risk-based, defined in a policy or SOP. Tie the interval to the equipment's documented criticality class: high-risk on roughly annual review, medium roughly biennial, low up to about every three years, with the rationale written once and applied consistently. There is no regulatory mandate of a specific number; there is a mandate to have a justified frequency and meet it.

**Q: Which regulations require this?**
EU GMP Annex 15 (2015) is the most direct for requalification and periodic assessment. US 21 CFR 211.63 and 211.68 require suitable, properly maintained, calibrated equipment. ICH Q9(R1) provides the risk framework, ICH Q10 places it in the quality system. For software-controlled equipment, EU GMP Annex 11 requires periodic evaluation of the computerized system. ASTM E2500-13 frames the risk- and SME-led verification philosophy.

**Q: An instrument is found out of tolerance at calibration. What do you do?**
Document the as-found OOT result, and perform a backward product-impact assessment covering every batch or use since the last in-tolerance calibration. Quarantine or evaluate affected product as needed. Investigate root cause, often through a deviation, and consider whether the calibration interval should be shortened. Failing to do the backward impact assessment is a serious and common finding.

**Q: How do calibration and PM relate to maintaining the qualified state?**
They are the routine programs that keep the equipment within the envelope qualification proved. Calibration keeps the measuring instruments trustworthy; PM keeps the equipment physically in condition. Their results feed periodic review. A gap in either (an uncalibrated critical instrument, chronic skipped PMs) directly undermines the qualified-state claim.

**Q: How do you handle a software upgrade on a GMP instrument's control software?**
Through change control with a risk-based impact assessment. Identify affected functions, perform regression testing scaled to risk, re-verify calculations, audit trail, security, and data integrity, confirm the validated version baseline, and update documentation. The periodic review later confirms the version in use matches the validated baseline.

**Q: What is the single most common finding on this topic?**
Overdue or shallow periodic reviews, closely followed by changes made without a requalification impact assessment and calibration OOT events closed without backward product-impact assessments.

---

## Practical tips

- **Run periodic review off a register, not memory.** A validation/qualification register or CMMS that auto-generates due dates by risk class is the difference between a clean program and a stack of overdue findings.
- **Make trend analysis mandatory in the template.** Force the author to look at calibration drift and corrective-maintenance rate over time, not just pass/fail this period. The drift you catch at 80% of limit is cheaper than the failure at 101%.
- **Write the maintenance-vs-change boundary down.** A one-page decision rule for like-for-like vs. modification prevents the most common qualified-state breaches and the most common arguments.
- **Combine equipment and computerized-system periodic review where it makes sense**, but make sure every required element of both is present. Combining to save effort while dropping the Annex 11 elements is a finding waiting to happen.
- **Keep high-risk sterilization equipment on fixed-interval requalification** even in an otherwise review-driven program. It is conservative, easy to defend, and aligned with common expectation.
- **Tie requalification scope decisions to the original qualification's traceability.** If you know which OQ test challenged which function, scoping a change-driven requalification becomes mechanical. See [User Requirements and Traceability](/articles/user-requirements-and-traceability).
- **Treat overdue reviews as deviations.** It forces visibility, root cause, and CAPA, and it shows an inspector your system self-detects rather than hides lapses.

---

## Related articles

- [Equipment Qualification Lifecycle](/articles/equipment-qualification-lifecycle)
- [Equipment Qualification Audit Checklist](/articles/equipment-qualification-audit-checklist)
- [Calibration and Metrology Program](/articles/calibration-and-metrology-program)
- [Change Control for Validated Systems](/articles/change-control-validated-systems)
- [Validation Master Plan and Periodic Review](/articles/validation-master-plan-and-periodic-review)
- [Temperature Mapping Qualification](/articles/temperature-mapping-qualification)
- [Sterilization Validation (Moist Heat)](/articles/sterilization-validation-moist-heat)
- [Commissioning and Qualification (ASTM E2500)](/articles/commissioning-qualification-astm-e2500)
- [Quality Risk Management](/articles/quality-risk-management)
- [Part 11 and Annex 11 Practical Guide](/articles/part-11-annex-11-practical-guide)
