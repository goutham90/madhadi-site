---
title: "PLC, DCS, and HMI Fundamentals for Quality and Validation Professionals"
description: "A working explanation of programmable logic controllers, distributed control systems, and human-machine interfaces for the quality and validation people who have to qualify them. Covers I/O, ladder logic, setpoints, alarms, control loops, and the ISA-95 automation pyramid."
pubDate: 2026-06-20
tags: ["automation", "plc", "dcs", "hmi", "validation", "isa-95", "data-integrity"]
pillar: "manufacturing-automation"
tier: "Intermediate"
---

You cannot validate what you do not understand. A validation lead who treats a programmable logic controller as a black box ends up writing test scripts that prove the screen turns on, while the actual control logic, the alarm setpoints, and the audit trail go unexamined. That gap is where inspection findings live.

This page is written for the quality, validation, and data integrity people who sit across the table from automation engineers. You do not need to write ladder logic. You do need to know what ladder logic is, where the setpoints actually live, why an alarm can fail silently, how a control loop holds a temperature, and which layer of the automation stack holds the record that a regulator will ask to see. After this you should be able to scope a qualification correctly, challenge a vendor's claims, read a functional specification without nodding along blindly, and answer the hard interview questions on control systems.

---

## The three system types, in plain terms

Most regulated manufacturing runs on some combination of three things: a PLC, a DCS, or a SCADA layer sitting on top, with an HMI as the window into all of them. People use these terms loosely and often interchangeably. They are not the same, and the differences change how you qualify them.

### PLC (Programmable Logic Controller)

A PLC is a ruggedized industrial computer built to read inputs, run a control program over and over very fast, and drive outputs. It was invented to replace banks of physical relays. Think of one piece of equipment: an autoclave, a bioreactor skid, a vial filling machine, a lyophilizer, a CIP (clean-in-place) skid. There is usually one PLC, or a small number, controlling that one machine.

Key traits:

- **Fast and deterministic.** It runs a fixed cycle (the scan) in milliseconds. Good at discrete sequencing and fast interlocks (if the door is open, do not start the agitator).
- **Discrete and sequential logic is its strength.** Step 1, then step 2, then step 3. Open valve, wait for level, close valve, start pump.
- **One vendor's hardware and software, tightly coupled.** Common PLC families include Allen-Bradley (Rockwell), Siemens SIMATIC, Mitsubishi, Schneider Modicon, Omron.
- **The program lives in the PLC's memory.** It does not need the HMI running to keep controlling the machine.

### DCS (Distributed Control System)

A DCS is what you use when the thing you are controlling is not one machine but a whole process area: a multi-step API synthesis suite, a large biologics upstream and downstream train, a utility plant. The "distributed" part means controllers, I/O, and operator stations are spread across the plant and tied together on a common network and a common engineering environment.

Key traits:

- **Designed for continuous and analog-heavy process control.** Lots of PID loops holding temperatures, pressures, flows, levels.
- **One integrated environment for the whole area.** Engineering, operation, alarming, historian, and batch are designed together rather than bolted on. Common DCS platforms include Emerson DeltaV, Siemens PCS 7, Honeywell Experion, ABB 800xA, Yokogawa Centum.
- **High availability and redundancy are built in.** Redundant controllers, redundant networks, because the process cannot just stop.
- **Tag-based.** Everything is a named tag (for example `TIC-101.PV`) with a consistent structure, which matters enormously for data integrity and historian work.

### SCADA (Supervisory Control and Data Acquisition)

SCADA is a supervisory software layer that sits above one or more PLCs and gathers their data, presents it to operators, logs it, and lets operators send setpoints down. SCADA does not usually do the fast control itself; it supervises controllers that do. A facility might have twenty PLCs on different skids, all reporting up to one SCADA system that gives the operators a single plant view. Common SCADA products include AVEVA (Wonderware) System Platform, Ignition, GE iFIX, Siemens WinCC.

The practical line: a PLC plus SCADA is a build-it-yourself architecture stitched together from separate products; a DCS is a single integrated product that does the same job for a tightly coupled process. Both are valid. The validation difference is that the PLC/SCADA architecture has more seams (more interfaces between products) and each seam is a place where data can be dropped, time can drift, or a value can be transformed without anyone noticing.

### HMI (Human-Machine Interface)

The HMI is the screen. It is the graphical window an operator uses to see process values, push buttons, acknowledge alarms, enter setpoints, and start phases. An HMI can be a small touch panel bolted to a skid (a local panel HMI) or a full operator workstation in a control room.

The single most important thing for a quality person to internalize: **the HMI is a view, not the source of truth.** The number you see on the screen was read from a tag in the PLC or DCS, possibly scaled, possibly delayed by the screen refresh rate. The control decision happened in the controller, not on the screen. When you investigate a deviation, do not stop at "the operator saw 37.2 on the HMI." Ask what the controller logged, because that is the record.

---

## The ISA-95 automation pyramid, and why a non-engineer needs it

ISA-95 (the international standard ANSI/ISA-95, also published as IEC 62264, *Enterprise-Control System Integration*) gives a layered model of how plant systems stack up. You will see this drawn as a pyramid. Memorize it, because it tells you where any given system sits, what it does, and what kind of validation it needs.

| Level | Name | What lives here | Typical timeframe | Example systems |
|-------|------|-----------------|-------------------|-----------------|
| Level 0 | Physical process | Sensors and actuators (the field) | Continuous, real time | Thermocouples, pressure transmitters, valves, pumps, motors |
| Level 1 | Sensing and manipulating | Control devices | Milliseconds to seconds | PLC, DCS controllers, I/O modules |
| Level 2 | Supervisory control | Monitoring and supervisory control | Seconds to minutes | SCADA, HMI, DCS operator stations |
| Level 3 | Manufacturing operations | Production management and execution | Shifts, batches | MES, electronic batch records, historian, LIMS interface |
| Level 4 | Business planning and logistics | Enterprise systems | Days, months | ERP, supply planning |

Why this matters to you:

- **It tells you who owns the record.** A batch record value might originate at Level 0 (a sensor), be acted on at Level 1 (the controller), displayed at Level 2 (HMI), and recorded at Level 3 (the historian or MES electronic batch record). When you ask "where is the GMP record," the answer is usually Level 3, but the data integrity of that record depends on every layer below it being trustworthy.
- **It tells you what to qualify and how.** Level 0 and Level 1 lean toward equipment qualification and calibration (is the sensor accurate, does the interlock work). Level 2 and above lean toward computerized system validation and data integrity (does the alarm log, is the audit trail complete, are access controls enforced).
- **It frames your interfaces.** Every line between two levels is a data interface. Each is a test case: does the value that leaves Level 1 arrive correctly at Level 3, with the right timestamp and units.

For deeper treatment of how these manufacturing layers interact and where records sit, see [GxP manufacturing systems](/articles/gxp-manufacturing-systems) and [MES, EBR, and SCADA data integrity](/articles/mes-ebr-scada-data-integrity).

---

## I/O: the bridge between the physical world and the logic

I/O (input/output) is where the control system touches reality. If you understand nothing else about the hardware, understand I/O, because most of what you qualify in an installation and operational sense is about whether the right signal gets to the right place.

### Inputs and outputs, discrete and analog

- **Digital (discrete) input:** an on/off signal coming in. A door switch (open/closed), a level switch (wet/dry), a pushbutton (pressed/not).
- **Digital (discrete) output:** an on/off signal going out. Energize a solenoid valve, turn a pump on or off, light an indicator.
- **Analog input:** a continuous value coming in, almost always a current loop (4-20 mA) or a voltage signal, representing something like temperature, pressure, or flow. The 4-20 mA standard is worth knowing: 4 mA equals the bottom of the range, 20 mA equals the top. Using 4 mA rather than 0 as the bottom is deliberate, because a true 0 mA reading then means a broken wire or dead transmitter, not a real zero. This is "live zero" and it is a safety and integrity feature.
- **Analog output:** a continuous command going out, for example a 4-20 mA signal to a control valve telling it to open 63 percent.

### Scaling and engineering units: a quiet source of error

A 4-20 mA signal is just a current. The control system has to convert it to a meaningful number. If a pressure transmitter is ranged 0 to 60 psi, then 4 mA equals 0 psi, 20 mA equals 60 psi, and 12 mA equals 30 psi. This conversion is called **scaling**. The configured range in the system must match the physical range stamped on the transmitter.

This is a classic finding. A transmitter is replaced with one ranged 0 to 100 psi, but nobody updates the scaling in the controller, which still thinks the span is 0 to 60. Every reading is now wrong, the historian dutifully records the wrong number, and the alarm setpoint that was supposed to fire at 50 psi is now meaningless. Part of operational qualification is verifying that a known physical input produces the correct displayed and recorded value end to end. This ties directly to your [calibration and metrology program](/articles/calibration-and-metrology-program) and to [analytical instrument qualification](/articles/analytical-instrument-qualification) thinking applied to process instruments.

### The I/O list (the document you will actually test against)

Every project has an I/O list: a spreadsheet mapping each physical signal to a controller address and a tag. For qualification, this is gold. A typical row:

| Tag | Description | Type | Range / EU | Controller address | Cabinet / slot | Alarm setpoint |
|-----|-------------|------|------------|---------------------|----------------|----------------|
| TT-201 | Reactor jacket temp | Analog in | 0-150 degC | AI rack 1, slot 4, ch 2 | CAB-01 | Hi 140 degC |
| LSH-110 | Tank high level | Digital in | dry/wet | DI rack 2, slot 1, ch 6 | CAB-01 | High alarm |
| XV-305 | Product valve | Digital out | open/closed | DO rack 2, slot 3, ch 1 | CAB-02 | n/a |
| FCV-210 | Buffer flow valve | Analog out | 0-100 % | AO rack 1, slot 6, ch 3 | CAB-02 | n/a |

Your loop checks during installation and operational qualification walk this list: inject a known signal at the field, confirm it reads correctly at the controller, at the HMI, and in the historian. Stroke each output and confirm the field device moves. A complete, correct, version-controlled I/O list is one of the better signs a project is in good shape.

---

## Ladder logic and the other control languages

PLC and DCS logic is written in standardized languages defined by **IEC 61131-3** (*Programmable controllers, Part 3: Programming languages*). You do not have to program in them, but you should recognize them in a functional design specification.

- **Ladder Diagram (LD), "ladder logic":** drawn like an electrical relay diagram, with power rails on the left and right and rungs in between. Contacts (conditions) on the left, coils (actions) on the right. It reads like: IF these conditions are true, THEN energize this output. It is the most common discrete-logic language and the easiest for a non-programmer to follow.
- **Function Block Diagram (FBD):** blocks wired together, like a signal flowing through processing boxes. PID loops, math, and analog handling are usually FBD. DCS configuration is heavily function-block based.
- **Structured Text (ST):** a text language that looks like Pascal. Used for complex calculations and logic that would be clumsy in ladder.
- **Sequential Function Chart (SFC):** a flowchart of steps and transitions. Excellent for representing batch phases (charge, heat, hold, cool, discharge). If you work in batch, SFC maps neatly onto how a recipe actually runs.
- **Instruction List (IL):** a low-level, assembly-like language, now deprecated in the standard but still seen in old code.

### Reading a rung of ladder logic

Here is a simple worked example. A pump should run only when the start button is pressed, the tank is not empty, and there is no fault, and it should keep running until stopped (a seal-in or latch).

```
   Start_PB   Tank_Low(NC)   Fault(NC)              Pump_Run
 ----| |--------|/|------------|/|----------+----------( )----
                                            |
   Pump_Run                                 |
 ----| |------------------------------------+
```

Reading left to right: `Start_PB` is a normally-open contact (true when pressed). `Tank_Low` shown as `|/|` is a normally-closed contact, so it passes power when the tank is NOT low. Same for `Fault`. When all three pass, the `Pump_Run` coil energizes. The second rung branch (the `Pump_Run` contact feeding back) is the seal-in: once the coil is on, it holds itself on even after the button is released, until `Tank_Low` or `Fault` breaks the rung.

Why a quality person cares: **interlocks and permissives live in this logic.** "Do not start the agitator if the vessel door is open" is a rung. "Do not open the transfer valve unless the receiving tank has room" is a rung. When you write a functional risk assessment or a test case for a safety interlock, you are testing what this logic actually does. You verify it by forcing the condition (open the door) and confirming the action is blocked, not by reading the code and trusting it.

### Configuration versus code, and why it changes your validation

There is a meaningful split between:

- **Configured parameters:** setpoints, alarm limits, PID tuning, recipe values, scaling, timers. These are meant to be adjusted by qualified users during normal operation and live in data tables.
- **Application code / logic:** the ladder, function blocks, and sequences that define how the machine behaves. Changing this is a software change.

Why it matters: changing a setpoint from 75 to 78 degC is configuration and may be a controlled recipe change. Rewiring an interlock rung is a code change that almost certainly needs regression testing and revalidation. Your [change control for validated systems](/articles/change-control-validated-systems) process must distinguish the two, and your [automation validation for PLC, SCADA, and DCS](/articles/automation-validation-plc-scada-dcs) approach should test configured parameters against the requirement and test logic against its specified behavior.

---

## Setpoints, control loops, and PID (the analog heart)

Discrete logic turns things on and off. The other half of process control is holding an analog value steady: keep the bioreactor at 37.0 degC, keep the column flow at 50 L/min, keep the vessel at 1.2 bar. That is done with a **control loop**, and the workhorse is the **PID controller**.

### The loop, conceptually

A control loop has four parts:

1. **Setpoint (SP):** the value you want. 37.0 degC.
2. **Process variable (PV):** the value you actually have, read from a sensor. 36.4 degC.
3. **Error:** SP minus PV. Here, +0.6 degC.
4. **Output (controller output, CO or OUT):** the command sent to the final control element (a valve, a heater, a variable-speed pump) to drive the error toward zero.

A naming convention you will see constantly in a DCS: `TIC-101` is a Temperature Indicating Controller, loop 101. Its members are `TIC-101.SP` (setpoint), `TIC-101.PV` (process variable), and `TIC-101.OUT` (output). Knowing this notation lets you read a historian export without help.

### What P, I, and D do

PID stands for Proportional, Integral, Derivative. You do not tune loops, but you should be able to talk about them.

- **Proportional (P):** reacts to the size of the current error. Big error, big push. Alone, it tends to leave a small permanent offset (it never quite reaches setpoint).
- **Integral (I):** reacts to accumulated error over time. It is what finally eliminates the offset and parks the PV exactly on setpoint. Too aggressive and it causes overshoot and oscillation.
- **Derivative (D):** reacts to the rate of change of the error. It anticipates and dampens. Many process loops run with D set to zero because it amplifies sensor noise.

A worked picture: setpoint is 37.0 degC, the batch starts at 25 degC. P slams the heat output high because the error is large. As the PV climbs and the error shrinks, P backs off. I has been accumulating and nudges the output so the PV settles right on 37.0 rather than stalling at 36.7. A well-tuned loop reaches setpoint quickly, with little overshoot, and holds steady. A badly tuned loop oscillates around setpoint or takes forever to get there.

### Why control-loop behavior is a quality issue

- **Temperature and other critical process parameters are held by these loops.** If a loop oscillates plus or minus 1.5 degC around a 37.0 setpoint, your "controlled" parameter is not actually controlled, and that is a process performance question feeding your [continued process verification](/articles/continued-process-verification-cpv) and [process validation lifecycle](/articles/process-validation-lifecycle) work.
- **Auto versus manual mode is auditable and risky.** A loop in MANUAL means an operator is driving the output by hand and the automatic control is off. If a deviation happened while a loop was in manual, that is highly relevant. The historian should record mode changes; if it does not, flag it.
- **Tuning parameters are configured values under change control.** Retuning a critical loop should not be a silent tweak.

When you qualify a skid, your operational qualification should challenge loops: step the setpoint and confirm the PV responds and settles within a defined band and time. That gives you objective evidence the loop works, not just that it exists.

---

## Alarms: the part most likely to bite you in an inspection

Alarm management is where process control and data integrity collide, and it is a frequent source of findings. An alarm is a configured condition (PV crosses a limit, a device fails, a sequence stalls) that demands operator attention. The relevant industry standard is **ANSI/ISA-18.2** (*Management of Alarm Systems for the Process Industries*), mirrored internationally as **IEC 62682**. You do not have to implement it, but its concepts should shape your questions.

### What good alarm handling looks like

- **Setpoints (limits) are correct, justified, and under control.** A high-temperature alarm at 140 degC on a 0-150 degC range should trace to a requirement and a risk rationale, not to "the vendor's default."
- **Priorities are meaningful.** Critical, high, low, and so on, so an operator facing fifty alarms knows what matters. ISA-18.2 warns against alarm floods and "everything is high priority."
- **Every alarm is logged with the four lifecycle states:** activated (the condition occurred), acknowledged (operator saw it), returned to normal (condition cleared), and any shelve or suppress action. The log carries a reliable, accurate timestamp for each.
- **The alarm log is attributable and tamper-evident.** Who acknowledged it, when, and the record cannot be quietly edited. This is squarely a Part 11 and audit trail matter.

### The data integrity angle

Alarm and event records are GMP records. Under **21 CFR Part 11** and **EU GMP Annex 11**, they must follow the same expectations as any other electronic record: complete, attributable, time-stamped, protected from unauthorized change, and reviewable. Common problems:

- **Alarm acknowledgments not attributable.** A shared "operator" login acknowledges everything, so you cannot tell who responded. That breaks attributability under [ALCOA+ in detail](/articles/alcoa-plus-deep-dive).
- **Alarms that can be disabled or suppressed with no record.** If a nuisance alarm can be turned off and there is no audit trail of who suppressed it and why, an unwelcome value can pass unnoticed.
- **Alarm setpoints editable outside change control.** If a process operator can move the high-temperature alarm from 140 to 149 with no electronic record and no second-person review, the alarm is meaningless as a control.
- **Timestamps that drift or come from an uncontrolled clock.** If the controller clock and the historian clock disagree, the alarm sequence in your investigation will not line up. See [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).

Reviewing alarm and event logs as part of release is increasingly expected, and the mechanics are covered in [audit trail design and review](/articles/audit-trail-design-and-review) and [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).

---

## Where the GMP record actually lives: the historian and the batch record

A point that trips people up: the HMI shows live values, but it usually keeps little history. The long-term record comes from two places.

- **Process historian:** a time-series database that logs tags at intervals (every second, every few seconds, or on change). It holds the trend data, the alarm and event log, and the operator action log. Historians (for example OSIsoft PI, AVEVA Historian, the historian built into a DCS) are the system of record for "what did the temperature do during the batch." Its data integrity is its own topic, see [process historian data integrity](/articles/process-historian-data-integrity).
- **Electronic batch record (EBR) in an MES:** at Level 3, the manufacturing execution system orchestrates the batch, enforces the procedure, and assembles the reviewable batch record, often pulling critical values and alarms up from the historian and controllers. See [MES, EBR, and SCADA data integrity](/articles/mes-ebr-scada-data-integrity) and [batch record review in GMP](/articles/batch-record-review-gmp).

For a deviation investigation, your evidence trail is: the EBR or batch report says X happened, the historian trend and event log show the underlying tag values and alarms, and the controller logic explains why the system acted as it did. Knowing which layer holds which evidence is the difference between a tight investigation and a vague one.

---

## How to qualify these systems (the practical procedure)

You qualify a control system inside the standard computerized-system and equipment frameworks. The governing reference for software-led systems is **GAMP 5 Second Edition** (ISPE, *A Risk-Based Approach to Compliant GxP Computerized Systems*, 2022), and for the data and records, **21 CFR Part 11** and **EU GMP Annex 11**. The hardware-and-process side draws on equipment qualification and, increasingly, the science-and-risk commissioning model in **ASTM E2500**.

### Step 1: classify the system and assess risk

Decide what kind of system this is. GAMP 5 categories are the usual tool:

- A standard PLC or DCS with vendor-supplied firmware that you have configured (recipes, setpoints, alarms, graphics) is typically a **configured product** (GAMP Category 4).
- Any logic you or your integrator wrote (custom ladder, custom function blocks, bespoke sequences) is **custom / bespoke** (GAMP Category 5) and carries the most validation effort.
- Most real skids are a mix: a configured platform plus some custom logic. Your validation effort follows the risk and the custom content, not a one-size template.

Run a [CSV risk assessment](/articles/csv-risk-assessment-methodology) and a functional risk assessment focused on the functions that affect product quality, patient safety, and data integrity: critical interlocks, critical control loops, critical alarms, the historian interface, access control, and audit trail.

### Step 2: define requirements and trace them

Write or review the **user requirements specification (URS)**. It states what the system must do in quality and process terms: control this parameter within this band, alarm at this limit, restrict this function to this role, log these events. Everything downstream traces back here. Build a [requirements and traceability matrix](/articles/user-requirements-and-traceability) so every critical requirement maps to a design element and a test. The functional specification (FS) and configuration specification (the recipe values, alarm setpoints, I/O list) describe how the requirement is met.

### Step 3: design review and supplier assessment

Review the FS and configuration against the URS. Assess the integrator and platform vendor, see [supplier and vendor qualification](/articles/supplier-vendor-qualification) and [software supplier assessment](/articles/software-supplier-assessment-csa). For a reputable, widely-used DCS or PLC platform you can rely on the vendor's development quality and focus your own testing on configuration and custom logic. You do not re-test the vendor's firmware; you test what you configured and what was written for you.

### Step 4: factory and site acceptance testing

Run **FAT** at the integrator's shop, then **SAT** after installation. These are the deep functional tests, and well-run acceptance testing can be carried into qualification rather than repeated. See [factory and site acceptance testing](/articles/factory-site-acceptance-testing). FAT is where you exercise sequences, force interlocks, and confirm alarm behavior before the system ever reaches the floor.

### Step 5: IQ, OQ, PQ

- **Installation Qualification (IQ):** verify the system is installed as specified. Correct controller models and firmware versions, correct I/O modules in the correct slots, network and power as designed, software versions recorded, the application program loaded matches the released version, backups exist.
- **Operational Qualification (OQ):** challenge the functions. Loop checks across the whole I/O list (inject known signals, confirm correct value at controller, HMI, and historian; stroke outputs). Interlock and permissive tests (force the unsafe condition, confirm the action is blocked). Alarm tests (drive the PV across the limit, confirm the alarm activates, logs, and can be acknowledged with attribution). Control loop response tests (step the setpoint, confirm settling). Access control tests (confirm each role can do only what it should). Audit trail tests (make a change, confirm it is captured with who/when/old/new value). Power-failure and recovery tests (does the system come back in a safe, known state).
- **Performance Qualification (PQ):** demonstrate the system performs reliably in the real process, usually folded into process validation runs. Equipment qualification context is in [equipment qualification lifecycle](/articles/equipment-qualification-lifecycle).

### Step 6: report, release, and maintain

Summarize results, resolve and justify deviations, and release with a [validation summary report](/articles/validation-summary-report-and-release). Then keep it qualified: change control, periodic review, backup and restore verification (see [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation)), and periodic requalification per [requalification and periodic review of equipment](/articles/requalification-and-periodic-review-equipment). The broader playbook is in [automation validation for PLC, SCADA, and DCS](/articles/automation-validation-plc-scada-dcs).

### Acceptance criteria: what good looks like

- Every critical requirement traces forward to a passing test and backward to a need.
- Loop checks pass across the full I/O list with values matching at field, controller, HMI, and historian.
- Every critical interlock blocks the unsafe action when forced, evidenced by screenshots or printouts, not by code reading.
- Every critical alarm activates at the specified limit, logs with an accurate timestamp, and requires attributable acknowledgment.
- Access controls enforce least privilege; no shared accounts on records-relevant functions.
- The audit trail captures who, when, and old-to-new for configuration and recipe changes, and it cannot be turned off by users.
- The released application program is under version control, backed up, and a verified restore has been demonstrated.

---

## Roles and responsibilities

Control system qualification fails when ownership is fuzzy. A workable split:

| Role | Responsibility |
|------|----------------|
| System / process owner | Owns the system in operation, defines requirements, approves changes, ensures it stays in a validated state |
| Automation / controls engineer (SME) | Designs and configures the logic, writes FS and config specs, supports FAT/SAT and OQ, maintains the code and backups |
| Validation / CSV lead | Plans the validation, ensures risk-based scope, writes or reviews protocols, drives traceability, compiles the report |
| QA | Approves the validation plan, protocols, deviations, and report; confirms compliance; owns the release decision and audit-readiness |
| IT / infrastructure | Qualifies the underlying servers, network, and historian platform; manages backups, patching, and disaster recovery |
| Vendor / integrator | Supplies the platform and custom build, supports FAT, provides development quality evidence and documentation |
| Operations / production | Provides operating-context requirements, executes some test scripts, runs the system under procedures and training |

The recurring failure is QA approving a protocol they do not understand and the SME testing their own work with no independent challenge. QA does not have to write ladder logic, but QA should be able to ask: where is the audit trail, who can change setpoints, how do we know the alarm fires, and where is the record. See [GxP roles and responsibilities](/articles/gxp-roles-responsibilities).

---

## Common mistakes and inspection-finding patterns

These are the generic patterns regulators cite again and again for automated systems. None name any company; they are the recurring shapes of trouble.

- **Black-box validation.** Testing that screens display and buttons click while never challenging the interlocks, alarms, and control logic that actually protect product and patient. The finding: validation did not cover GMP-critical functionality.
- **No audit trail, or one that can be turned off.** Configuration and recipe changes with no electronic record of who/when/what, or an audit trail that a privileged user can disable. A direct Part 11 / Annex 11 hit.
- **Shared and generic logins.** A single "operator" or "engineer" account so actions, alarm acknowledgments, and changes are not attributable to a person. Breaks ALCOA+ attributability.
- **Excessive privileges.** Process operators able to change critical alarm setpoints, control parameters, or system time. Least privilege not enforced.
- **System clock not controlled.** Operators can change the controller or workstation time, so timestamps are not trustworthy and event sequences cannot be reconstructed.
- **Alarm setpoints not justified or not controlled.** Limits set to vendor defaults with no risk rationale, or changeable outside change control.
- **Scaling and range mismatches after instrument changes.** A transmitter swapped without updating the configured range, so every recorded value is wrong.
- **No verified backup or restore.** A control program exists only in the live controller, with no version control and no demonstrated restore. After a controller failure, no way to prove the recovered logic matches the validated state.
- **Uncontrolled changes to logic.** Code modified on the floor to solve a production problem, with no change control, no regression testing, and no documentation, so the validated state is silently broken.
- **Loops left in manual.** Critical control loops run in manual mode during production with no procedure or record, so the "automatic control" claimed in validation is not what actually ran.
- **Time and data not synchronized across layers.** Controller, SCADA, and historian clocks disagree, so the investigation timeline does not reconcile.

Patterns like these recur across published enforcement; see [FDA warning letter patterns](/articles/fda-warning-letters-patterns) and [data integrity foundations](/articles/data-integrity-foundations) for the broader context.

---

## Interview-ready: questions you should be able to answer

These are the kinds of questions that come up in validation, automation-quality, and data integrity interviews, with the substance of a strong answer.

**What is the difference between a PLC, a DCS, and SCADA?**
A PLC controls one machine or skid with fast discrete and sequential logic. A DCS is an integrated platform for a whole process area, strong on continuous analog loops, with redundancy and a common engineering environment. SCADA is a supervisory software layer above one or more PLCs that gathers data, presents it to operators, and logs it, without doing the fast control itself. PLC-plus-SCADA is assembled from separate products and has more interfaces to validate; a DCS is one integrated product.

**The HMI shows 37.2 degC. Is that your GMP record?**
No. The HMI is a live view. The record comes from the historian (the time-series log and event log) and, in an MES environment, the electronic batch record at Level 3. In an investigation you trace the value back to the historian and the controller, not the screen.

**Walk me through the ISA-95 levels.**
Level 0 is the physical process and field instruments; Level 1 is control (PLC and DCS controllers); Level 2 is supervisory control (SCADA, HMI); Level 3 is manufacturing operations (MES, EBR, historian); Level 4 is enterprise (ERP). Records of interest usually live at Level 3, with their integrity dependent on every layer below. Each line between levels is a data interface and a test case.

**What is a 4-20 mA signal and why not 0-20?**
It is an analog current loop where 4 mA is the bottom of the range and 20 mA is the top. Starting at 4 mA gives a live zero: a reading of 0 mA means a broken wire or dead transmitter rather than a real process zero, which is a fault-detection and integrity feature.

**Explain PID without the math.**
A PID controller drives a process variable to a setpoint. Proportional reacts to the size of the error, integral eliminates the leftover offset by accumulating error over time, and derivative dampens by reacting to the rate of change. Many loops run with derivative at zero because it amplifies sensor noise.

**How would you validate a critical interlock?**
By forcing the unsafe condition and confirming the action is blocked, with documented evidence. For "no agitation with the door open," I open the door, attempt to start the agitator, and confirm it will not start, capturing a screenshot or printout. I do not validate by reading the ladder logic and trusting it.

**Where do the data integrity risks sit in a control system?**
At access control (shared logins break attributability), the audit trail (must capture configuration and recipe changes and not be disable-able), alarm and event logging (attributable acknowledgment, controlled setpoints), time control (no user-changeable clocks), and the historian interface and backup/restore. These map to 21 CFR Part 11, EU GMP Annex 11, and ALCOA+.

**Is a setpoint change a configuration change or a code change, and does it matter?**
A setpoint or recipe value is a configured parameter, often changed under recipe control by qualified users. Modifying the control logic, an interlock rung or a sequence, is a code change that needs change control and regression testing. It matters because the validation rigor and the records differ.

**What standards govern this area?**
GAMP 5 Second Edition for the risk-based computerized-system approach, 21 CFR Part 11 and EU GMP Annex 11 for electronic records and signatures, IEC 61131-3 for the programming languages, ISA-95 / IEC 62264 for the enterprise-control model, and ISA-18.2 / IEC 62682 for alarm management.

More interview drilling is in [GxP quality interview preparation](/articles/gxp-quality-interview-preparation).

---

## Practical tips

- **Get the I/O list early.** It is your test backbone and a fast health check on a project. Incomplete, unversioned, or contradictory I/O lists predict trouble.
- **Learn the tag naming convention** for the system you support. Being able to read `TIC-101.PV` versus `TIC-101.OUT` in a historian export makes you far faster in an investigation.
- **Always test interlocks and alarms by forcing the condition, never by reading code.** Objective evidence beats source review.
- **Insist on attributable actions.** Push back hard on shared logins for anything that touches records, setpoints, alarm acknowledgments, or configuration.
- **Confirm clock control across every layer** and that times are synchronized to a controlled source. Half of all messy investigations come from clocks that disagree.
- **Verify a real backup and restore,** not just that a backup file exists. The control program must be recoverable to a known validated state.
- **Watch for loops left in manual** during production and make sure mode changes are logged.
- **Keep configuration and code in separate buckets** in your change control thinking, with the right level of testing for each.

### Related reading

- [Automation validation: PLC, SCADA, DCS](/articles/automation-validation-plc-scada-dcs)
- [GAMP 5 CSV framework](/articles/gamp5-csv-framework)
- [ISA-88 batch control and recipes](/articles/isa-88-batch-control-recipes)
- [MES, EBR, and SCADA data integrity](/articles/mes-ebr-scada-data-integrity)
- [Process historian data integrity](/articles/process-historian-data-integrity)
- [GxP manufacturing systems](/articles/gxp-manufacturing-systems)
- [Part 11 and Annex 11 practical guide](/articles/part-11-annex-11-practical-guide)
- [Equipment qualification lifecycle](/articles/equipment-qualification-lifecycle)
- [Time stamps and system clock control](/articles/time-stamps-and-system-clock-control)
