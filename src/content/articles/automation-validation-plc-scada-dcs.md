---
title: "Automation Systems Validation: PLC, SCADA, DCS, and Interface Controls"
description: "Validation of automation systems in pharmaceutical manufacturing: PLC, SCADA, DCS, MES interfaces, recipes, alarms, audit trails, and what regulators expect from batch control systems."
pubDate: 2026-06-03
tags: ["automation", "SCADA", "PLC", "DCS", "validation", "MES", "data-integrity", "GMP"]
pillar: "manufacturing-automation"
tier: "Advanced"
---

Automation systems in regulated manufacturing generate GxP process data that directly supports batch release decisions. A bioreactor controller that records temperature, pH, and dissolved oxygen during a cell culture run produces the evidence that the process ran within specification. A blister-pack line controller, a lyophilizer cycle controller, and a sterilizer PLC do the same thing for their processes. If that data is unreliable, because the system was never validated, the audit trail is disabled, or the alarm configuration was changed without change control, the quality of the batch decision rests on a broken foundation.

This article covers validation of process automation systems: PLCs, SCADA, DCS, batch control systems, and the interfaces between them. It applies across pharmaceutical, biologics, medical device, and combination product manufacturing, since the regulatory expectations and the failure modes are the same regardless of modality. It is written for automation engineers, computer system validation (CSV) specialists, and quality professionals. The early sections set out the regulatory basis and the control hierarchy. Later sections go into the procedures, acceptance criteria, failure modes, and interview questions that matter when you have to actually do the work.

---

## The regulatory basis

Automation systems in GxP manufacturing sit inside the same regulatory framework as other computerized systems. There is no separate, lighter regime for "machine" software. If the system controls a process step or records data used to judge a batch, it carries the full weight of the predicate rules.

- **21 CFR 211.68**, Automatic, mechanical, and electronic equipment. Equipment used in manufacturing must be routinely calibrated, inspected, and checked according to a written program. Where computer or related systems are used, appropriate controls must be exercised to assure that changes to master production and control records are instituted only by authorized personnel, and that input to and output from the system are checked for accuracy. Backup data must be exact and complete, and secured from alteration, erasure, or loss.
- **21 CFR 211.188**, Batch production and control records. The batch record must include complete information on the manufacturing process. For automated operations, the electronic batch record and the automation system outputs become part of that record.
- **21 CFR Part 11**, Electronic records and electronic signatures. When the system creates, modifies, or maintains electronic records that satisfy a predicate rule, Part 11 governs audit trails, access controls, and electronic signatures.
- **EU GMP Annex 11**, Computerised systems. The European expectation for any computerized system used in GMP, including process control systems. It requires validation proportional to risk, an enabled and reviewable audit trail, controlled changes, managed access, and periodic evaluation. Annex 11 explicitly addresses electronic data, accuracy checks, and the relationship between a computerized system and the process it controls.
- **EU GMP Annex 15**, Qualification and validation. The qualification life cycle (URS, DQ, IQ, OQ, PQ) that frames how you demonstrate a system is fit for use.
- **GAMP 5 Second Edition (2022)**, A Risk-Based Approach to Compliant GxP Computerized Systems. The industry framework that drives the software category model, the life cycle, and the testing approach for PLCs, SCADA, DCS, and their integration with MES.
- **FDA Computer Software Assurance for Production and Quality Management System Software**, issued as a draft in 2022 (then titled "Production and Quality System Software") and finalized 24 September 2025 with "Management" added to align with the QMSR and ISO 13485. It reframes effort around critical thinking and risk, pushing test rigor toward features whose failure would most directly harm product quality or patient safety. It is a useful lens for scoping automation testing, treated more fully in [Computer Software Assurance (CSA)](/articles/computer-software-assurance-fda).

A practical point: regulators do not inspect your validation binder for its own sake. They inspect to answer one question. Can you trust the data this system produced when you released the batch. Every validation activity should trace back to that question. For the broader context, see [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11) and the [GAMP 5 CSV framework](/articles/gamp5-csv-framework).

---

## Understanding the automation hierarchy

Before designing a validation strategy, understand which layer of automation you are dealing with. The ISA-95 standard (Enterprise-Control System Integration) defines a hierarchy that the whole industry uses as shorthand.

| Level | Name | Typical systems | Validation focus |
|-------|------|-----------------|------------------|
| 0 | Physical process | Sensors, actuators, instruments | Calibration, instrument qualification |
| 1 | Basic control | PLCs, DCS controllers, transmitters | Control logic, I/O, interlocks |
| 2 | Supervisory control | SCADA, HMI, process historian | Display accuracy, operator audit trail, data capture |
| 3 | Manufacturing operations | MES, EBR, batch management | Recipe control, record completeness |
| 4 | Business systems | ERP, planning | Generally non-GMP, assessed for impact |

Each level has different requirements, and the data flows between levels are where data integrity risk concentrates. A value that passes from a Level 1 PLC through a Level 2 historian into a Level 3 MES must keep its meaning, its units, and its timestamp at every transfer. The number on the operator screen, the number in the historian, and the number in the batch record should be the same number. When they are not, you have either a mapping defect or a data integrity question, and inspectors know to look at exactly these seams.

A useful habit during system inventory is to tag every automated system with its ISA-95 level and its GMP impact. That single attribute drives how much rigor each system needs. See [GxP manufacturing systems](/articles/gxp-manufacturing-systems) for how this fits a plant-wide inventory, and [PLC, DCS, and HMI fundamentals](/articles/plc-dcs-hmi-fundamentals) if you need the underlying technology refresher before reading on.

### Roles and responsibilities at a glance

Automation validation fails when ownership is fuzzy. Set it down explicitly before any protocol is written.

| Role | Owns |
|------|------|
| Automation / controls engineer | System design, configuration, code, IQ/OQ execution support, change implementation |
| CSV / validation lead | Validation strategy, protocol authoring, traceability matrix, summary report |
| Process / manufacturing SME | URS process requirements, alarm and setpoint values, PQ acceptance criteria, batch impact assessment |
| Quality assurance | Approval of URS, protocols, deviations, change controls, and the final release decision |
| IT / infrastructure | Servers, network, NTP source, backup and restore, patching, cybersecurity controls |
| System owner / business owner | Ongoing validated state, periodic review, access list ownership |
| Supplier / integrator | FAT/SAT support, design specifications, source code (Category 5), supplier quality evidence |

---

## PLCs (Programmable Logic Controllers)

PLCs are the workhorses of regulated automation. They execute the fundamental control logic: opening valves, holding temperatures, sequencing operations. Common platforms include Allen-Bradley (Rockwell), Siemens S7, and Schneider Modicon, used here only as neutral examples of widely available products.

### Why PLCs need validation

A PLC that controls a regulated process is a GxP computerized system. Its ladder logic, function blocks, or structured text determines whether the process executes correctly. If the logic is wrong, or has been changed without control, the process output cannot be trusted. The PLC does not look like a database, so teams sometimes underweight it. That is a mistake. The PLC is often the only thing physically deciding whether a valve opens at the right point in a sterilization cycle.

GAMP 5 categorizes PLC software as:

- **Category 1**: Infrastructure software, the embedded operating system and supporting platform the application runs on.
- **Category 3**: Non-configured products used as supplied, such as standard non-configurable firmware.
- **Category 4**: Configurable applications, standard function blocks configured by the user.
- **Category 5**: Custom-developed programs, bespoke ladder logic or function blocks written from scratch.

Most regulated PLC applications are Category 4 or 5. The category sets the depth of specification, design review, and testing. A Category 5 custom sequence needs source code review and structural testing that a Category 4 configured function block does not. In practice a single PLC often mixes categories: stock motion-control blocks (Category 4) sitting alongside a hand-written cycle sequence (Category 5). Categorize at the function level, not just the box, and test the Category 5 portions harder.

### How to run a PLC validation, step by step

1. Write the URS with the process SME. Capture every control function, interlock, alarm, and setpoint with a value or a defined source. See [user requirements and traceability](/articles/user-requirements-and-traceability).
2. Assess GMP impact and risk. Identify which functions touch a batch decision. CSA-style critical thinking concentrates test effort here.
3. Categorize each function (GAMP 3/4/5) and set test depth accordingly.
4. Review design specs (functional and configuration/hardware design) against the URS. This is design qualification (DQ).
5. Run FAT at the supplier, then SAT on site. Reuse FAT evidence in qualification where the test environment is representative. See [factory and site acceptance testing](/articles/factory-site-acceptance-testing).
6. Execute IQ, then OQ, then PQ. Each phase has the entry condition that the prior phase passed and was reviewed.
7. Build the traceability matrix from URS to test case, and confirm every requirement has at least one test.
8. Resolve every deviation, then write the validation summary report and release. See [validation summary report and release](/articles/validation-summary-report-and-release).

### What PLC validation covers

**Installation qualification (IQ):**
- Correct hardware installed (model, firmware version, I/O module configuration).
- Power supply and environmental conditions meet specification.
- Network connections and communication protocols documented.
- Software/program version recorded and matched to the approved baseline.

**Operational qualification (OQ):**
- Program version control: the validated program version is locked, and any change goes through change control.
- I/O loop checks: each input (sensor) and output (actuator) connected to the PLC is tested for correct signal path, polarity, scaling, and response.
- Alarm configuration: each alarm setpoint verified against the batch record or process specification.
- Interlock testing: safety and process interlocks tested under simulated trip conditions, including the boundary just inside and just outside the trip point.
- Sequence control: for batch operations, the full sequence logic tested end to end, including abort, hold, and resume paths.

**Performance qualification (PQ):**
- Process operation under actual conditions, with documented results.
- For critical parameters (temperature, pressure, pH, agitation), statistical confirmation that the control loop holds the parameter within specification across a realistic batch duration, not just a short snapshot.

### Acceptance criteria, what good looks like

| Test area | Acceptance criterion |
|-----------|----------------------|
| I/O loop scaling | Reading at PLC, HMI, and historian agree within the instrument tolerance at low, mid, and high injection points |
| Interlock | Trip occurs at the specified setpoint within the specified response time; no trip just inside the safe boundary |
| Alarm setpoint | Configured value equals the URS value and matches HMI, historian, and batch record |
| Sequence | Abort, hold, and resume each return the system to the defined safe or correct state; no orphaned steps |
| Control loop (PQ) | Critical parameter stays within spec for the full batch duration; deviations explained and bounded |
| Version baseline | Live program checksum/version equals the approved baseline recorded at IQ |

A worked example makes the scaling check concrete. A temperature transmitter outputs 4-20 mA mapped to 0-150 degrees C. During I/O loop verification you inject 12 mA at the transmitter and confirm the PLC reads 75 degrees C, the SCADA HMI displays 75, and the historian records 75. Then inject 4 mA (expect 0) and 20 mA (expect 150). If any of the three readings disagrees, you have found a scaling or mapping defect before it ever touched a batch. This is the highest-value test in PLC OQ and it is cheap to run.

A second worked example for the interlock test. A jacket-heating interlock is specified to trip at a vessel temperature of 65 degrees C. You simulate 64.5 degrees C and confirm no trip. You then simulate 65.0 degrees C and confirm the heating output drops out within the specified 2 second response time, and that the event is alarmed and recorded. You record the actual trip value (say 65.1 degrees C) and confirm it is inside the allowed tolerance. Both the just-inside and just-outside points are tested so the protocol proves the boundary, not just that "an interlock exists."

### PLC-specific data integrity requirements

PLCs do not usually produce a user-readable audit trail the way a LIMS or EBR does, but they generate process data that must meet integrity requirements.

**Timestamp accuracy.** Process data timestamps must be synchronized to a reliable time source. PLC clock drift is real and creates discrepancies between the PLC record, the SCADA historian, and the operator log. Time synchronization is a validation item, not an assumption. See [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).

**Data retention at the PLC level.** PLC memory is volatile working storage, not an archive. Data held in PLC registers must be transferred to a higher-level historian or MES before it is overwritten. The transfer mechanism, its trigger, and its failure handling must be validated, otherwise data can be lost silently between the controller and the historian.

**Program change control.** Once a PLC program is validated, any change (logic modification, setpoint change, I/O reassignment) is a change to the validated state. A frequent gap is the maintenance technician who adjusts a setpoint or a sequence timer "temporarily" during a call-out and never raises a change record. See [change control for validated systems](/articles/change-control-validated-systems).

**Access to PLC programming.** Programming interfaces (Studio 5000, TIA Portal, EcoStruxure and similar engineering tools) must be restricted to authorized personnel. Open USB or maintenance ports on a controller are a real path to undocumented program modification. Physical and logical access controls both apply here, and both should be evidenced. [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control) covers the access side in depth.

---

## SCADA (Supervisory Control and Data Acquisition)

SCADA systems provide the human-machine interface (HMI) layer above PLCs and DCS controllers. They show real-time process data, accept operator interactions, manage alarms, and usually write to a process historian.

### SCADA in a validated GxP context

SCADA is GAMP Category 4 or 5 depending on configuration. Key validation activities:

**Configuration qualification:**
- All display screens verified against the P&ID (piping and instrumentation diagram) and the process description.
- Alarm setpoints on the SCADA HMI match the PLC or DCS configuration and the batch record specification.
- Historian tag list verified, each process variable recorded in the historian mapped to the correct instrument signal.

**Operator interaction audit trail:**
- SCADA must record every manual setpoint override, alarm acknowledgment, and mode change (auto, manual, cascade) with operator identity, timestamp, and the new value.
- Regulators expect that audit trail to be reviewed during batch review. Not just the process data, but who changed what during the batch, and why. The related discipline is covered in [audit trail design and review](/articles/audit-trail-design-and-review) and [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).

**Access and electronic records.**
- Unique user accounts, no shared logins, role-based privileges that separate operate, configure, and administer.
- Where operator actions constitute approvals, electronic signatures under Part 11. See [electronic signatures implementation](/articles/electronic-signatures-implementation).

**Alarm management:**
- Alarm configuration (setpoints, priorities, suppression rules) documented and change-controlled.
- Alarm rationalization. The process industries have a long history of alarm flood, thousands of alarms configured for a process, most never acknowledged. ANSI/ISA-18.2, Management of Alarm Systems for the Process Industries, gives the recognized method for rationalizing alarms so the operator sees what matters.
- Alarm acknowledgment records. A list of unacknowledged critical alarms during a batch is a data-integrity-relevant document.

### Sample SCADA audit trail review entry

This is the kind of row a reviewer reads during batch review. Every field has to be present and make sense.

| Timestamp (local + UTC) | User | Action | Tag | Old value | New value | Reason |
|-------------------------|------|--------|-----|-----------|-----------|--------|
| 2026-03-14 09:42:11 EDT (13:42:11Z) | j.okafor | Setpoint change | TIC-201.SP | 37.0 C | 37.5 C | Per deviation DV-2026-0188, SME-approved |
| 2026-03-14 10:15:03 EDT (14:15:03Z) | m.reyes | Alarm ack | LAH-110 | n/a | n/a | High level investigated, transfer paused |
| 2026-03-14 10:20:55 EDT (14:20:55Z) | m.reyes | Mode change | PIC-305 | Auto | Manual | Manual control during instrument check |

If the setpoint change row had no reason, or pointed to no deviation, that is the finding. A reviewer who sees a manual mode change with no documented justification has to chase it down before release.

### The process historian

SCADA typically writes to a process historian. A historian is a time-series database that stores tagged process variables at defined intervals. Common products include plant historians from major automation vendors and platform historians; treat the names as generic examples.

The historian is a GxP system when the data it holds is used to demonstrate process compliance (in-spec temperature, pressure, pH across a batch) or feeds the batch record.

Historian validation covers:
- Tag mapping: each historian tag verified back to the correct instrument source.
- Timestamp accuracy: synchronized to an authoritative time source.
- Compression settings: historians use compression to reduce storage. The deadband and exception-reporting settings must be validated so they do not discard process data beyond an acceptable tolerance. This is the single most overlooked historian risk and it is described again under common failures because it keeps recurring.
- Backup and recovery: data backed up, and restore actually tested, not just assumed. See [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation).

The historian deserves its own treatment because it is where most automation data integrity findings land. See [process historian data integrity](/articles/process-historian-data-integrity) for compression tolerance testing in detail.

---

## DCS (Distributed Control Systems)

DCS platforms are used for continuous and complex batch processes: fermentation, chromatography, fill-finish. They blend the control layer and the supervisory layer in one integrated environment, so the boundaries between "PLC" and "SCADA" testing collapse into one system. Treat any specific platform name as a neutral example.

### DCS and batch control

DCS systems in regulated plants often implement the ISA-88 (commonly written S88) batch control model: phases, operations, unit procedures, and procedures coordinated by a batch manager. The core idea of S88 is to separate the recipe (what to make) from the equipment (how to make it), so the same equipment can run different products and the same recipe can run on different equipment trains.

S88 defines four recipe types in a fixed derivation order, each derived from the one above it:
- **General recipe**: equipment-independent, corporate-level. It states what to make without reference to a specific site or equipment train.
- **Site recipe**: derived from the general recipe and adapted to a specific site, allowing for local constraints (raw materials, language, regulations).
- **Master recipe**: derived from the site recipe and tied to a specific process cell or equipment train. It is the equipment-specific template used to build control recipes.
- **Control recipe**: derived from the master recipe and executed for one specific batch. This is the GxP record.

Recipe management requires validation:
- Recipe versions controlled, with approval before use.
- Recipe changes routed through change control.
- The control recipe executed for each batch retained as part of the batch record.

A DCS with configured batch recipes is Category 4. Custom recipe logic or custom equipment phases written in a proprietary scripting language are Category 5 and need correspondingly deeper review. The full S88 structure, including how phases and parameters are tested, is in [ISA-88 batch control and recipes](/articles/isa-88-batch-control-recipes).

### Electronic batch record integration

The interface between the DCS and the MES or EBR is one of the highest data-integrity risk points in regulated automation.

- Data flows from the DCS (process execution records) into the EBR (batch documentation).
- Interface failures can produce missing data, corrupted values, or out-of-sequence records.
- Each transfer must be validated for data mapping, format conversion, error handling, and reconciliation.

Specific requirements:
- **Data mapping validation**: every DCS parameter that appears in the EBR verified to map correctly, with correct units and rounding.
- **Interface error handling**: what happens if the interface fails mid-batch. Does the EBR show a gap, raise an alarm, or fall back to a defined manual procedure.
- **Timestamp alignment**: DCS and EBR timestamps must be consistent. Drift between them is exactly the kind of inconsistency that reads as either a clock problem or data manipulation.

The data-integrity dimension of this layer is treated more fully in [MES, EBR, and SCADA data integrity](/articles/mes-ebr-scada-data-integrity).

---

## Recipes, methods, and scripts in automation

The recipe or method an automated system runs is as much a validated document as any paper SOP. Three principles carry most of the weight.

**Version control is mandatory.** A recipe that any operator can modify without a change number and an approval is not controlled. The exact recipe version executed for each batch must be traceable from the batch record.

**Approved recipes only.** No unauthorized modifications in production. This includes "temporary" tweaks, test runs on production-scale equipment, and parameter adjustments that quietly become standard practice without ever being approved.

**Change control applies to small changes too.** A setpoint change that improves yield is still a change to the validated state. It needs assessment, approval, documentation, and, depending on the criticality of the parameter, qualification activity. The yield benefit does not exempt it from the process. Tie this back to your [process validation life cycle](/articles/process-validation-lifecycle): a parameter that is a critical process parameter in your control strategy cannot be moved informally.

A worked recipe-change example. A fermentation phase runs at a fixed agitation setpoint. Process development proposes raising it to improve oxygen transfer. The flow is: raise a change control, classify agitation against the control strategy (it is a CPP), assess batch-record impact (the setpoint prints in the EBR, so yes), define the requalification scope (a PQ run or a documented engineering study plus a confirmation batch), update the master recipe under version control, approve, then execute. The new control recipe shows the new value with the change number traceable behind it. Nothing about that is fast, and that is the point.

---

## Interface validation and middleware

Complex plants have many systems exchanging data: DCS to MES, MES to LIMS, LIMS to ERP, EBR to document management. Each interface is a validation obligation, and interfaces fail in ways that single systems do not.

What interface validation must cover:
- **Data mapping**: source field to target field, including units of measure, rounding rules, and format conversions.
- **Error handling**: what happens when the interface fails. Is data lost, is there a notification, is there a manual fallback.
- **Transaction integrity**: for bi-directional interfaces, if a write fails halfway, is data left inconsistent. The interface must handle partial failures cleanly, ideally with an all-or-nothing transaction or a documented reconciliation step.
- **Performance under load**: interfaces that work in a quiet test environment and choke at peak transaction volume are a production risk. Test at expected peak.
- **Security**: network architecture, authentication between systems, and encryption for data in transit.

A sample interface mapping table is the artifact a tester executes against:

| Source (DCS tag) | Target (EBR field) | Source unit | Target unit | Transform | Expected | Result |
|------------------|--------------------|-------------|-------------|-----------|----------|--------|
| FERM01.TEMP | Step3.Temperature | C | C | none, 1 decimal | 37.0 | 37.0 PASS |
| FERM01.PH | Step3.pH | pH | pH | none, 2 decimal | 7.05 | 7.05 PASS |
| FERM01.PRESS | Step3.Pressure | kPa | bar | divide by 100 | 1.01 | 1.01 PASS |
| FERM01.AGIT | Step3.RPM | rpm | rpm | none, integer | 250 | 250 PASS |

The pressure row is exactly where unit conversion defects hide. If the transform were missing, the EBR would read 101 instead of 1.01 and a reviewer might or might not catch it. The test makes the conversion explicit.

Middleware platforms (enterprise service buses, message brokers, custom queues) that translate and route data are GAMP Category 4 or 5. The routing logic and the configuration are part of the validated state, not invisible plumbing.

---

## Alarm and event records in GxP manufacturing

Process alarms and events are GxP records when they document a critical process excursion (temperature out of range during a critical step), record an operator intervention (manual override of an automated setpoint), or capture an equipment fault that affected process execution.

What regulators look for:
- Alarms that fired but were never acknowledged, a sign the alarm may not have been reviewed.
- Alarms that were suppressed. Suppression can be legitimate (planned maintenance, defined startup windows) but it must be authorized and documented.
- Alarm flood. If thousands of alarms fired in one batch, meaningful review is impossible and the alarm program is deficient on its face.
- Missing alarm records. If alarms that should have fired (based on the process data) do not appear, that is a direct data integrity question.

**Alarm review as part of batch review.** In a mature operation, batch review includes review of alarm events, confirmation that any alarm condition was investigated and resolved before release, not just confirmation that final parameters were in spec. This dovetails with [batch record review](/articles/batch-record-review-gmp) and any resulting [deviation management](/articles/deviation-management).

### Alarm priority example

ANSI/ISA-18.2 expects a rationalized priority scheme, not a wall of "high." A typical scheme:

| Priority | Meaning | Operator action | GxP relevance |
|----------|---------|-----------------|---------------|
| Critical | Immediate risk to product or safety | Act now, documented | Always reviewed at batch review |
| High | Process moving out of normal range | Act before escalation | Reviewed if it occurred during the batch |
| Medium | Attention needed, no immediate impact | Monitor and correct | Reviewed for trends |
| Low / journal | Informational, status | Log only | Trend and engineering use |

If 95 percent of configured alarms sit at Critical, the scheme is not rationalized and the operator cannot tell what actually matters. That alone is a credible finding.

---

## Time synchronization, a hidden validation gap

Time synchronization is one of the most commonly overlooked automation requirements. When multiple systems keep time independently, clock drift creates discrepancies. A PLC that gains roughly a minute over a few months will show timestamps that do not align with the SCADA historian, which do not align with the EBR.

Time discrepancies are a data integrity finding because they undermine authenticity. When two records of the same event carry different timestamps, it looks like one of them was altered, even when the real cause is mundane drift.

Minimum controls:
- All GxP automation systems synchronized to a common Network Time Protocol (NTP) source.
- Synchronization status logged and monitored.
- A maximum allowable drift defined and enforced.
- A synchronization failure raises an alert rather than silently letting clocks wander.
- Clock changes restricted to administrators and recorded in an audit trail, with daylight-saving handling defined (storing UTC is the cleanest answer).

Validating time synchronization means documenting the NTP hierarchy, confirming each system syncs correctly, and testing the failure case: when the NTP source is unavailable, does the system hold time accurately, and for how long. The ALCOA+ attribute most at stake here is "contemporaneous," covered in [ALCOA+ in detail](/articles/alcoa-plus-deep-dive). The clock control mechanics are in [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).

---

## Change control for automation systems

Automation change control is where GxP and engineering cultures most often collide. Engineering change management tends to be fast and informal ("the process needed that setpoint"), while GxP change control is formal and documented. If the formal process is slow, engineers route around it, and you lose the control entirely. The fix is to design a change process fast enough that nobody is tempted to bypass it, with a risk-based fast track for low-impact changes.

**What requires change control:**
- Any modification to validated PLC, DCS, or SCADA software.
- Setpoint changes for critical process parameters.
- Alarm setpoint changes for critical alarms.
- Recipe modifications (master, site, or control).
- Network or communication configuration changes.
- Hardware replacement that affects validated performance.

**What may not require formal change control, with a documented risk-based justification:**
- Non-GMP infrastructure changes with an impact assessment showing no GMP system effect.
- Cosmetic SCADA display changes (font color, screen layout) where underlying logic is unchanged, subject to the program's procedure.

The impact assessment for an automation change must answer one specific question: does this change touch any parameter that appears in the batch record. If yes, the assessment has to address whether re-qualification testing is needed and at what scope. The principles of post-approval change planning in [ICH Q12 lifecycle management](/articles/ich-q12-lifecycle-management) apply directly to automation changes that touch the registered process. For the IT-infrastructure side of the same coin, see [IT change and configuration management](/articles/it-change-and-configuration-management-gxp).

---

## Common failures in automation validation

**1. Validated PLC program replaced without change control.** The validated program is overwritten during a support call, a firmware upgrade, or a "restore from backup" that turns out to be a different version. The next batch runs on an unvalidated program. The control that prevents this is a locked, version-controlled master program plus restricted programming access, with the live version checksum compared to the approved baseline at periodic review.

**2. Historian compression settings never validated.** All process data is stored compressed. The deadband filters out "insignificant" changes. A short temperature excursion falls below the threshold and disappears from the record entirely, so a real out-of-spec event is invisible at review time. The control is documented deadband tolerance testing that proves no excursion of interest is lost.

**3. Interface mapping not validated.** A DCS pH value carries a mapping offset into the MES. Batches are released with a systematic pH error nobody catches, because the reviewer sees the MES value, not the DCS raw value. The defense is the three-point loop check described earlier and source-to-target reconciliation.

**4. Recipe change treated as minor without assessment.** An agitation speed is raised for a fermentation step with no change record. Process performance degrades several batches later. Because the change was never documented, the investigation takes weeks to connect cause to effect.

**5. Alarm suppression not documented.** During a planned shutdown all alarms were suppressed and the suppression was never recorded. An inspector finds a multi-hour window with zero alarms during what the schedule shows as active process time, and now has to be convinced the data was not edited.

**6. Shared operator login on the HMI.** A single station account used by every shift means no action can be attributed to a person. The audit trail records actions but not who did them, which is an attributability failure under ALCOA+ and a Part 11 access-control gap.

**7. Time not synchronized across the stack.** PLC, historian, and EBR each drift independently, so the same event carries three timestamps. At review this reads as data manipulation even when it is only drift.

These patterns are consistent with the kinds of observations seen in published [FDA warning letter patterns](/articles/fda-warning-letters-patterns), where data integrity and uncontrolled change dominate.

---

## Interview questions on automation validation

If you sit for a CSV, automation, or quality role that touches manufacturing systems, these come up. Short, direct answers follow.

**"How do you decide how much to test a PLC program?"**
Risk and GAMP category. Map functions to the control strategy, identify which ones touch a batch decision or patient safety, and concentrate test rigor there using CSA-style critical thinking. Category 5 custom logic gets source review and structural testing; Category 4 configured blocks get functional testing of the configuration.

**"What is the difference between OQ and PQ for a control loop?"**
OQ proves the function works against specification, often with simulated or injected signals, for example a loop check at three injection points. PQ proves the loop holds the parameter within specification under real process conditions for a realistic duration, with statistical support for critical parameters.

**"A maintenance tech changed a sequence timer during a callout. What is your concern?"**
Whether it went through change control, whether the timer affects a batch-record parameter, and whether re-qualification was needed. An undocumented change to a validated program is a loss of the validated state and a data integrity question.

**"Why is historian compression a data integrity risk?"**
Compression discards values inside the deadband. If the deadband is wider than the smallest excursion that matters, a real out-of-spec event can be filtered out of the permanent record. You validate the deadband against a defined tolerance so nothing of consequence is lost.

**"What do you review in a SCADA audit trail at batch review?"**
Manual setpoint overrides, mode changes, and alarm acknowledgments, each with a user, timestamp, old and new value, and a reason that ties to a deviation or instruction where required. Unexplained interventions get investigated before release.

**"Explain S88 recipe levels."**
Four levels, each derived from the one above. General recipe is equipment-independent and corporate-level. Site recipe is the general recipe adapted to a specific site. Master recipe is derived from the site recipe and is equipment or process-cell specific, the template that control recipes are built from. Control recipe is the as-executed record for one batch and is the GxP record retained with the batch.

**"How do you validate a DCS-to-EBR interface?"**
Mapping verification field by field with units and rounding, error handling for mid-batch failure, transaction integrity for partial writes, performance at peak load, and source-to-target reconciliation so the EBR value provably equals the DCS value.

**"What is your time synchronization control?"**
All GxP systems sync to a common NTP source, a maximum drift is defined and monitored, sync failure raises an alert, and clock changes are restricted and audit-trailed. UTC storage avoids daylight-saving ambiguity.

**"An interlock trips. Is that a deviation?"**
It depends on whether it affected the process and the product. The interlock doing its job is the system working as designed, but the event still gets reviewed, and if a critical process step was affected it routes to deviation management.

---

## Minimum compliant baseline for a small organization

For a pre-commercial company with a limited number of automated processes:

1. System inventory with a GMP impact assessment for each automation system.
2. IQ and OQ documentation for all GMP-impacted systems, even a simplified risk-based approach.
3. PLC program version control: validated versions locked, programming tools restricted.
4. A change control procedure that explicitly covers automation systems.
5. Alarm configuration documented and change-controlled.
6. Audit trail enabled and accessible on all GxP systems.
7. A time synchronization protocol, all systems to a common source.
8. Interface validation for any data transfer that feeds the batch record.
9. Unique user accounts with role-based access, no shared logins.

This baseline is intentionally lean. It targets the controls that fail most often and matter most to a batch decision. See [validation deliverables](/articles/validation-deliverables-guide) for what each document should contain.

---

## Better maturity state

For a commercial-stage company with multiple process trains:

- A full S88 batch control framework with validated recipe management.
- A formal alarm rationalization study to ANSI/ISA-18.2.
- Automated alarm review built into batch review, not manual log scanning.
- Interface validation that includes automated source-to-target reconciliation.
- A process historian validated with documented compression tolerance testing.
- DCS and SCADA performance qualification with statistical demonstration of parameter control.
- A business continuity plan tested against realistic automation failures, including loss of the historian, loss of the NTP source, and interface outage mid-batch.
- Commissioning and qualification integrated under a science- and risk-based model so engineering testing is reused as qualification evidence. See [commissioning and qualification (ASTM E2500)](/articles/commissioning-qualification-astm-e2500).

The jump from baseline to this state is mostly about moving controls from manual and reactive to automated and preventive. Periodic review (a check that the validated state still holds and that accumulated minor changes have not eroded it) is what keeps the higher state from quietly decaying. See [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review).

---

## References

- 21 CFR 211.68, Automatic, mechanical, and electronic equipment
- 21 CFR 211.188, Batch production and control records
- 21 CFR Part 11, Electronic Records; Electronic Signatures
- EU GMP Annex 11, Computerised systems
- EU GMP Annex 15, Qualification and validation
- ISPE GAMP 5: A Risk-Based Approach to Compliant GxP Computerized Systems, Second Edition (2022)
- FDA Guidance, Computer Software Assurance for Production and Quality Management System Software (final, 24 September 2025; the 2022 draft was titled "Production and Quality System Software")
- ANSI/ISA-95, Enterprise-Control System Integration
- ANSI/ISA-88 (S88), Batch Control
- ANSI/ISA-18.2, Management of Alarm Systems for the Process Industries
- ISPE GAMP Good Practice Guide: Manufacturing Execution Systems (MES)
- FDA Guidance for Industry, Process Validation: General Principles and Practices (2011)
- ASTM E2500, Standard Guide for Specification, Design, and Verification of Pharmaceutical and Biopharmaceutical Manufacturing Systems and Equipment
