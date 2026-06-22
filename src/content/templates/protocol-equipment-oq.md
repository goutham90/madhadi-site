---
title: "Equipment Operational Qualification (OQ) Protocol"
description: "A plug-and-play operational qualification protocol for manufacturing equipment: operating ranges, alarms and interlocks, control and safety functions, sequence and recipe execution, worst-case operation, acceptance limits, test cases, deviations, and summary, with a worked specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Protocol"
pillar: "equipment-qualification"
relatedArticles: ["equipment-qualification-lifecycle","commissioning-qualification-astm-e2500","factory-site-acceptance-testing"]
tags: ["operational qualification", "oq", "equipment qualification", "annex 15", "alarms and interlocks", "process equipment", "gmp"]
tier: "Intermediate"
---

This is a ready-to-use operational qualification protocol for manufacturing equipment. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach the calibration certificates and reference standards the protocol calls for, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

OQ proves one thing: that the installed equipment actually operates as intended across the ranges it will be run, not just that it powers on. It is the stage after installation qualification (IQ) and before performance qualification (PQ), which runs the equipment with actual product or a representative load. OQ challenges the equipment empty or with a placebo, against its own design and the user requirements: every operating parameter across its full set range, every alarm and interlock that protects product or operator, every control and safety function, and the sequence or recipe logic that the equipment executes on its own. The thread to keep in view is traceability. Each OQ test must point back to a specific requirement in the URS or the functional specification, and forward to a result that either meets a pre-stated acceptance limit or is dispositioned as a deviation. Pass OQ and you have a documented baseline of operating performance that PQ, process validation, calibration, and change control all build on.

## Document control header

| Field | Entry |
|---|---|
| Document title | Operational Qualification Protocol for `<<FILL: equipment type / model>>` |
| Document number | `<<FILL: PRT-ID, e.g. OQ-MFG-044>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Engineering / Validation>>` |
| Site / area | `<<FILL: site, building, room, equipment train>>` |
| Equipment ID / asset number | `<<FILL: tag / asset number>>` |
| Linked URS / FS / DQ / IQ / PQ | `<<FILL: URS ref; FS ref; DQ ref; IQ ref (must be approved); PQ ref to follow>>` |
| Linked report | `<<FILL: OQ summary report number to be issued>>` |

## 1. Purpose

This protocol defines the functional tests and acceptance criteria to confirm that equipment `<<FILL: equipment ID / asset number>>`, already installed and IQ-approved under `<<FILL: IQ reference>>`, operates correctly across its intended operating ranges and that its alarms, interlocks, control functions, and sequence or recipe logic perform as specified. The objective is a documented, inspection-ready record that the equipment is fit to enter PQ and routine use, with each result traceable to a user requirement or functional specification.

## 2. Scope

This protocol applies to the single equipment item or train identified in the header and section 5, including its control system, instruments, and utilities at the operating interface. It covers operational performance against specification across the configured ranges, executed empty or with a placebo or surrogate load rather than product. It assumes IQ is complete and approved; OQ does not re-verify installation, drawings, materials of construction, or as-built configuration. It does not establish process capability with actual product, which is covered by PQ under `<<FILL: cross-reference protocol-ID>>`, and it does not set preventive maintenance or calibration intervals, which are governed by `<<FILL: cross-reference SOP-IDs>>`. Where the control system is a computerized system, software-specific verification (audit trail, access control, electronic records and signatures) is coordinated with the computerized system validation under `<<FILL: CSV SOP-ID>>` and is referenced, not repeated, here.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Validation engineer / author | Authors this protocol, derives the test list from the URS and FS, sets acceptance limits, executes or oversees execution, and writes the report. |
| Equipment / process SME | Confirms operating ranges and worst-case conditions are physically correct, supports execution, and judges whether observed behavior is acceptable. |
| Automation / controls engineer | Supports alarm, interlock, control, and sequence testing; confirms set points, dead bands, and logic in the control system. |
| Metrology / calibration | Confirms all reference standards and the equipment's own instruments used for pass or fail decisions are calibrated and traceable. |
| Quality Assurance | Reviews and approves the protocol, deviations, and report; owns the disposition and the released-for-PQ decision. |

## 4. Definitions

- **Operating range**: the span of a parameter (temperature, speed, pressure, flow, time) across which the equipment is verified to perform, normally the full set range, not only the normal operating point.
- **Alarm**: an annunciation triggered when a parameter crosses a defined limit, requiring operator awareness or action.
- **Interlock**: an automatic action (stop, prevent start, divert) that the control system takes to protect product, equipment, or operator when a defined condition is met.
- **Control function**: a function the equipment performs to hold or change a parameter, for example PID control to a set point, ramp and soak, or proportioning.
- **Sequence / recipe**: the ordered set of steps and parameters the equipment executes automatically, including step transitions, holds, and end conditions.
- **Worst case**: the condition or combination of conditions, within the operating range, that is most likely to expose a control weakness (for example minimum and maximum set points, maximum load, fastest ramp, simultaneous alarms).
- **Challenge test**: a test that deliberately drives a parameter to or beyond a limit to confirm the alarm or interlock responds, rather than observing only normal operation.

## 5. Equipment and prerequisites

### 5.1 Equipment under qualification

| Field | Entry |
|---|---|
| Equipment description | `<<FILL: e.g. jacketed reactor, lyophilizer, tablet press, autoclave>>` |
| Manufacturer / model | `<<FILL>>` |
| Control system / version | `<<FILL: PLC/SCADA/DCS make and software version>>` |
| Configured operating ranges | `<<FILL: list each parameter and its set range>>` |
| Utilities at interface | `<<FILL: clean steam, WFI, compressed air, electrical, drain>>` |

### 5.2 Prerequisites to be confirmed before execution

| No. | Prerequisite | Reference | Confirmed (init/date) |
|---|---|---|---|
| 1 | IQ complete and approved | `<<FILL: IQ ref>>` | |
| 2 | All instruments used for pass/fail decisions are calibrated and within due date | `<<FILL: cal cert numbers>>` | |
| 3 | Reference/test instruments are calibrated and traceable | `<<FILL: cal cert numbers>>` | |
| 4 | Control system software version matches the approved FS | `<<FILL: FS ref>>` | |
| 5 | Required utilities available and within specification | `<<FILL>>` | |
| 6 | Executors trained on this protocol and the equipment | `<<FILL: training record>>` | |
| 7 | Approved SOPs available (operation, cleaning, safety) | `<<FILL: SOP-IDs>>` | |

A prerequisite that cannot be confirmed is a hold point. Do not begin OQ until it is closed or formally dispositioned.

## 6. Test strategy and traceability

Every test in section 7 is numbered and mapped to the requirement it verifies. Maintain the trace in Attachment 1 so that, at the end, every operational requirement in the URS and FS has at least one OQ test and every OQ test has a requirement. Tests fall into five groups, which together cover operational behavior:

1. **Operating ranges** (section 7.1): verify each parameter holds and is accurate across its full set range, not only at the normal point.
2. **Alarms and interlocks** (section 7.2): challenge each alarm and interlock by driving the condition that should trigger it.
3. **Control and safety functions** (section 7.3): confirm control loops, safety stops, power-loss recovery, and access control behave as specified.
4. **Sequence and recipe execution** (section 7.4): run the automatic sequence or recipe and confirm steps, transitions, holds, and end states.
5. **Worst-case operation** (section 7.5): run the documented worst-case combinations within the range.

Record acceptance limits before execution, never after. Where a limit comes from a standard or a calibration tolerance, cite it in the test case.

## 7. Test cases

Each test case below is a template. Reproduce one per parameter, alarm, interlock, function, and sequence step that applies to your equipment. Capture the raw reading, the instrument used, the acceptance limit, and pass or fail, with executor initials and date. Attach printouts, trends, and screenshots as objective evidence and reference them by test number.

### 7.1 Operating range verification

| Field | Entry |
|---|---|
| Test no. | `<<FILL: OQ-7.1-01>>` |
| Requirement traced | `<<FILL: URS/FS clause>>` |
| Parameter | `<<FILL: e.g. jacket temperature>>` |
| Set points tested | `<<FILL: low end, mid, high end of set range>>` |
| Reference instrument (cal cert) | `<<FILL>>` |
| Acceptance limit | `<<FILL: e.g. controlled set point +/- 1.0 C at each point; stability +/- 0.5 C over 30 min>>` |
| Hold/observation time | `<<FILL: e.g. 30 minutes at each set point>>` |
| Result (each set point) | `<<FILL>>` |
| Pass / fail | `<<FILL>>` |
| Executor (init/date) | `<<FILL>>` |

Test the low, middle, and high of each set range, not only the normal operating value. Equipment that controls perfectly at the middle can drift or oscillate at the extremes, and the extremes are part of the validated range.

### 7.2 Alarm and interlock challenge

| Field | Entry |
|---|---|
| Test no. | `<<FILL: OQ-7.2-01>>` |
| Requirement traced | `<<FILL: URS/FS clause>>` |
| Alarm / interlock | `<<FILL: e.g. high jacket temperature interlock>>` |
| Configured set point / limit | `<<FILL: e.g. 65 C>>` |
| Challenge method | `<<FILL: e.g. force input or raise set point until trigger>>` |
| Expected response | `<<FILL: e.g. audible/visual alarm, heating output to zero, batch hold>>` |
| Actual trigger value | `<<FILL>>` |
| Response observed | `<<FILL>>` |
| Reset behavior verified | `<<FILL: requires acknowledgment / does not auto-clear unsafely>>` |
| Pass / fail | `<<FILL>>` |
| Executor (init/date) | `<<FILL>>` |

Challenge the alarm, do not just read its set point off the screen. Confirm it fires at the configured value, that the protective action actually happens, and that reset requires a deliberate operator step where safety demands it.

### 7.3 Control and safety function verification

| Field | Entry |
|---|---|
| Test no. | `<<FILL: OQ-7.3-01>>` |
| Requirement traced | `<<FILL: URS/FS clause>>` |
| Function | `<<FILL: e.g. emergency stop / power-loss recovery / access level enforcement>>` |
| Test method | `<<FILL: e.g. press E-stop mid-cycle; cut and restore power; attempt restricted action at operator level>>` |
| Expected behavior | `<<FILL: e.g. safe stop, no uncommanded motion on restore, action denied and logged>>` |
| Actual behavior | `<<FILL>>` |
| Pass / fail | `<<FILL>>` |
| Executor (init/date) | `<<FILL>>` |

Include the unhappy paths: emergency stop during motion, loss and restoration of power, loss of a critical utility, and an unauthorized user attempting a privileged action. Equipment must fail to a safe, documented state.

### 7.4 Sequence and recipe execution

| Field | Entry |
|---|---|
| Test no. | `<<FILL: OQ-7.4-01>>` |
| Requirement traced | `<<FILL: URS/FS clause>>` |
| Sequence / recipe name and version | `<<FILL>>` |
| Step verified | `<<FILL: e.g. step 4 ramp to set point and hold>>` |
| Expected step parameters / transition | `<<FILL: ramp rate, hold time, transition condition>>` |
| Actual step behavior | `<<FILL>>` |
| End state / batch record output | `<<FILL: correct end condition; values recorded match>>` |
| Pass / fail | `<<FILL>>` |
| Executor (init/date) | `<<FILL>>` |

Run the full automatic sequence at least once and verify each step, each transition condition, each hold, and the final end state. Confirm the values the equipment records (electronic batch record, trend, printout) match what was actually executed.

### 7.5 Worst-case operation

| Field | Entry |
|---|---|
| Test no. | `<<FILL: OQ-7.5-01>>` |
| Requirement traced | `<<FILL: URS/FS clause>>` |
| Worst-case condition | `<<FILL: e.g. maximum load at minimum set point; fastest ramp; two alarms at once>>` |
| Rationale | `<<FILL: why this is the worst case within the range>>` |
| Expected behavior | `<<FILL>>` |
| Actual behavior | `<<FILL>>` |
| Pass / fail | `<<FILL>>` |
| Executor (init/date) | `<<FILL>>` |

State the worst case explicitly and justify why it is the worst case within the operating range. A protocol that only runs nominal conditions has not qualified the range.

## 8. Acceptance criteria

OQ is acceptable when all of the following are true:

- Every operating parameter holds within its acceptance limit at the low, middle, and high of its set range.
- Every alarm fires at its configured limit and every interlock takes its specified protective action when challenged.
- Every control and safety function (including emergency stop, power-loss recovery, and access control) behaves as specified, failing to a safe state.
- The automatic sequence or recipe executes every step, transition, and hold correctly, with recorded values matching execution.
- Documented worst-case conditions are run and pass.
- Every test traces to a requirement and every operational requirement traces to a test, with no open gaps in Attachment 1.
- All deviations are documented and resolved, and none leaves the validated state in doubt.

## 9. Deviations and handling

Any failed test, out-of-tolerance reading, sequence error, or departure from this protocol is documented as a deviation per `<<FILL: deviation SOP-ID>>`, assessed for impact, and resolved before OQ is closed. Record the deviation number against the affected test. A retest after a corrective change references both the deviation and the original test number. Do not release the equipment for PQ until every deviation is resolved and its impact on the validated state is closed.

## 10. Report

On completion, the validation owner issues report `<<FILL: report number>>` summarizing the tests performed, the results against acceptance limits, the completed traceability, all deviations and their resolution, and the conclusion on the operational state, including any restrictions on use. The report is reviewed and approved by QA, and it authorizes the move to PQ.

## 11. Attachments

| No. | Attachment |
|---|---|
| 1 | Requirements-to-test traceability matrix |
| 2 | Calibration certificates for reference and onboard instruments used for pass/fail |
| 3 | Control system configuration / set point list as tested |
| 4 | Approved sequence / recipe printout |
| 5 | Objective evidence: trends, printouts, screenshots by test number |
| 6 | Deviation log |

## 12. References

> 21 CFR 211.63 (equipment design, size, and location) and 211.68 (automatic, mechanical, and electronic equipment).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision, sections on OQ.
> EU GMP Annex 11 (Computerised Systems), where the control system is computerized.
> ICH Q9, Quality Risk Management (for scope and worst-case selection).
> ASTM E2500, Standard Guide for Specification, Design, and Verification of Pharmaceutical and Biopharmaceutical Manufacturing Systems and Equipment.
> ISPE Good Practice Guides on commissioning and qualification (for the verification approach).
> 21 CFR Part 11 (electronic records and signatures), where applicable to the control system.

Confirm the current version and clause numbers of each reference before issue.

## 13. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 14. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Validation) | `<<FILL>>` | | |
| Reviewer (Engineering / SME) | `<<FILL>>` | | |
| Reviewer (Automation) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows a set of OQ test cases completed for an example jacketed reactor, so you can see the level of detail an inspector expects. The equipment, set points, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Equipment | Jacketed reactor R-201, 2000 L, 316L, PLC/SCADA control v4.2, IQ approved under IQ-MFG-040 |
| Operating ranges configured | Jacket temperature -10 C to 90 C; agitator 20 to 180 rpm; vacuum 10 to 800 mbar. High-temperature interlock set at 95 C, 5 C above the maximum operating point, so the validated range can be reached and held without tripping the protective interlock. |
| Test OQ-7.1-01 (temperature range) | Set -10 C, 40 C, 90 C (the low, middle, and high extremes of the validated range), each held 30 min. Reference RTD cal cert RT-118. Results: -9.7 C, 40.2 C, 89.6 C; stability within +/- 0.4 C. Limit +/- 1.0 C control, +/- 0.5 C stability. Pass. |
| Test OQ-7.1-02 (agitator speed) | Set 20, 100, 180 rpm; measured with calibrated tachometer (cert TC-22) at 20.4, 100.6, 179.3 rpm. Limit +/- 2 rpm. Pass. |
| Test OQ-7.2-01 (high-temp interlock) | Limit 95 C. Raised set point until trigger. Fired at 95.1 C, heating output forced to zero, batch went to hold, alarm logged, reset required operator acknowledgment. Pass. |
| Test OQ-7.2-02 (low-vacuum/loss-of-vacuum alarm) | Limit 800 mbar. Broke vacuum to 810 mbar. Alarm fired at 803 mbar, annunciated and logged. Pass. |
| Test OQ-7.3-01 (emergency stop in motion) | E-stop pressed at 150 rpm under vacuum. Agitator stopped within 3 s, no uncommanded restart, system in safe hold. Pass. |
| Test OQ-7.3-02 (power-loss recovery) | Power cut for 60 s mid-cycle then restored. No uncommanded motion on restore; sequence held at last safe step pending operator restart. Pass. |
| Test OQ-7.3-03 (access control) | Operator-level user attempted to edit a recipe set point. Action denied, event logged with user ID and time. Pass. |
| Test OQ-7.4-01 (recipe sequence) | Recipe "Standard Batch v3" run empty. All 11 steps executed in order; ramp rate, holds, and transition conditions matched the printout; SCADA-recorded values matched the live trend. Pass. |
| Test OQ-7.5-01 (worst case) | Maximum agitation (180 rpm) at minimum set point (-10 C) with simultaneous high-temp and low-vacuum alarms forced. Equipment prioritized the safety interlock, went to a safe hold, both alarms logged. Pass. |
| Deviations | One: OQ-7.1-03 (jacket cooling ramp) initially failed to reach -10 C within the specified time. Deviation DEV-2026-0207 raised; cooling-fluid charge corrected; retest passed. |
| Traceability | All 18 operational URS/FS clauses mapped to at least one test; no open gaps. |
| Result | OQ acceptance criteria met after deviation closure. Equipment released for PQ under PQ-MFG-044. |

In this example the team tested each range at low, middle, and high points, challenged every alarm and interlock by driving the trigger condition rather than reading the set point, ran the unhappy paths (E-stop in motion, power loss, unauthorized edit), executed the full recipe, ran a worst-case combination with simultaneous alarms, and dispositioned the one failure as a deviation with a retest. That sequence is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this protocol prevents

- Alarms and interlocks "verified" by reading the configured set point off a screen, never actually challenged to confirm the protective action happens.
- Operating ranges tested only at the normal operating point, leaving the validated extremes unqualified.
- No documented worst-case condition, so the qualification proves only that the equipment works under easy conditions.
- OQ tests with no link to a requirement, and requirements in the URS or FS with no test, so coverage cannot be shown.
- Emergency stop, power-loss recovery, and access control left untested, with no evidence the equipment fails to a safe state.
- Acceptance limits written or adjusted after the result was seen, rather than fixed before execution.
- Pass or fail decisions made with uncalibrated reference or onboard instruments.
- A failed test quietly retested and passed with no deviation and no record of what changed.
- PQ or process validation started while OQ deviations were still open.

## How to adapt this protocol

1. Set your document number, owner, equipment ID, report number, and effective date in the header, and link the approved IQ.
2. Replace the operating ranges in section 5.1 with your equipment's actual configured set ranges, and confirm IQ is closed before execution.
3. Build section 7 by reproducing each test-case template once per parameter, alarm, interlock, control function, recipe step, and worst-case condition that applies, and write the acceptance limit into each before execution.
4. State and justify your real worst-case conditions in section 7.5; do not leave it generic.
5. Complete the traceability matrix in Attachment 1 so every operational requirement maps to a test and back.
6. Point the cross-references in sections 2, 9, and 10 to your real PQ, deviation, calibration, and computerized system validation procedures.
7. Confirm every regulation in section 12 against the current published version before issue.
