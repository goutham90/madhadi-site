---
title: "Equipment and Instrument Qualification Audit Checklist"
description: "A complete qualification audit checklist for pharmaceutical equipment and analytical instruments: DQ, IQ, OQ, PQ, calibration, maintenance, periodic review, and change control. Based on USP <1058>, EU GMP Annex 15, and the ISPE C&Q Baseline Guide."
pubDate: 2026-03-21
tags: ["equipment-qualification", "IQ", "OQ", "PQ", "audit", "self-audit", "USP-1058"]
tier: "Intermediate"
pillar: "equipment-qualification"
---

Equipment and instrument qualification is one of the most inspection-visible parts of a quality system. An FDA investigator or EU inspector walking into your facility will often start at an instrument, open the qualification binder, and within fifteen minutes form a view on whether your qualification program is real or performative. The reason is simple: qualification leaves a long paper trail, the trail is dated, and the dates either line up with the way the equipment is actually used or they do not.

This checklist walks the complete lifecycle of a GxP instrument or piece of equipment, from initial qualification through ongoing maintenance, periodic review, and change control. It applies across biotech, small-molecule pharma, medical device manufacturing, and the broader life sciences, because the qualification logic is the same whether the asset is an autoclave, a tablet press, a CNC machine cutting an implant, or an HPLC. Use it for self-assessment before an inspection, when you take over responsibility for a qualification program you did not build, or when you audit a contract manufacturing site. The checklist items are written so you can score them yes/no, but the value is in the narrative around each section, which tells you what an experienced auditor is actually looking for behind the checkbox.

A word on scope before you begin. Qualification (DQ/IQ/OQ/PQ) is what you do to equipment and instruments. Validation is the broader exercise applied to processes and computerized systems. The two overlap heavily for software-controlled instruments, and the boundary confuses people. If the instrument has configurable software, audit-trail settings, and electronic records, you are doing both at once, and the qualification package needs to show it. For the lifecycle view of qualification itself, see [Equipment Qualification Lifecycle](/articles/equipment-qualification-lifecycle). For the process side of the same equipment, see [Process Validation Lifecycle](/articles/process-validation-lifecycle).

---

## How to Run This Audit: The 90-Minute Sequence

Before the checklist, the method. An auditor who works the sections in the right order finds more in less time, because each step narrows where the next gap will be.

1. **Get the equipment master list first (10 min).** You cannot judge coverage until you know the population. Ask for it before you ask for anything else.
2. **Sample the population, do not read it all (5 min).** Pick five to eight assets spanning different risk classes: at least one Group C computerized instrument, one direct-impact manufacturing unit, one environmental chamber, one balance or simple measuring device. Random beats curated; a list the site hands you is the list they are confident about.
3. **Pull the full package for each sampled asset (20 min).** URS through periodic review. Read end to end, not field by field.
4. **Trace one requirement and one change all the way through (20 min).** Pick a URS line and find where it is verified. Pick a repair from the maintenance log and find its change record. These two threads expose most real gaps.
5. **Walk the floor (15 min).** Match labels to the list, read serial numbers off the physical asset and find them on the EML, look for calibration-status stickers, and check whether retired equipment is still wired in.
6. **Interview a user and a metrology or engineering owner (15 min).** Ask how they know an instrument is fit to use today. The answer reveals whether the program lives in the binder or in practice.
7. **Score by data impact, not paperwork tidiness (5 min).** Use the severity table at the end.

The rest of this article is the detail behind each of those moves.

---

## Before You Start: Build Your Equipment Inventory

Like a computer system validation audit, an equipment qualification audit starts with confirming what you actually have. The equipment master list (EML), sometimes called the equipment inventory or asset register, is the foundation. If you cannot produce a complete and current list, every other finding is provisional, because you do not yet know whether you have looked at all the equipment that matters.

**Why it is required.** EU GMP Chapter 3 requires that equipment be located, designed, constructed, and maintained to suit its operations, and 21 CFR 211.182 requires a written record of major equipment cleaning, maintenance, and use. Neither can be demonstrated without a controlled inventory that ties each asset to its records. The inventory is also the denominator for every coverage metric in the program: percent of GxP assets qualified, percent with current calibration, percent with periodic reviews on time.

For every piece of GxP equipment or instrument at your site, the inventory should document:

- Unique equipment ID
- Equipment description, model, and manufacturer
- Location
- GxP criticality (direct impact, indirect impact, or non-GxP)
- Calibration requirements and schedule
- Qualification status (qualified, in qualification, requires requalification, retired)
- Last qualification completion date
- Next periodic review due date
- Qualification documentation location
- Maintenance and PM responsibility

**Sample inventory record.**

| Field | Example value |
|---|---|
| Equipment ID | BAL-0042 |
| Description / model / mfr | Analytical balance, XPR205, generic vendor |
| Location | QC lab, room 214, bench 3 |
| GxP criticality | Direct impact (release testing) |
| Calibration | Annual external (traceable) + daily user check, tol +/- 0.1 mg at 200 g |
| Qual status | Qualified |
| Last qualified | 2025-02-18 |
| Next periodic review | 2027-02-18 |
| Doc location | QMS DMS, package QP-BAL-0042 |
| PM / cal owner | Metrology |

Two cross-checks separate a real inventory from a spreadsheet that exists only to satisfy a procedure. First, walk a corridor and pick five instruments at random, then confirm each one appears on the list with a matching ID label on the physical asset. Auditors do this in reverse all the time: they read a serial number off a balance and ask to see it on the EML. Second, sort the list by "last qualified" date. If you see equipment qualified more than three to four years ago with no periodic requalification or periodic review records, that is your first finding regardless of what else the audit turns up. Retired equipment still in the building but not decommissioned on paper is a related trap, because an inspector cannot tell from the floor whether a dusty chamber is out of service or quietly still producing GxP data.

**Acceptance criteria for the inventory:** complete (every GxP asset present), current (status and dates match reality), reconcilable (floor labels match the list both ways), and owned (a named function maintains it under document control).

---

## Section 1: Equipment Classification and Scope

### Direct Impact vs Indirect Impact Classification

- [ ] Has each piece of equipment been classified as direct impact or indirect impact?
- [ ] Is the classification documented with rationale?
- [ ] For direct impact equipment, is there a documented qualification program (DQ/IQ/OQ/PQ as appropriate)?
- [ ] For indirect impact equipment, is there a documented commissioning or equivalent approach?
- [ ] Has the classification been re-examined when the equipment's use changed?

The ISPE Commissioning and Qualification Baseline Guide (Volume 5) distinguishes direct impact systems, which directly affect product quality or patient safety, from indirect impact systems, which support direct impact systems without touching the product themselves. Direct impact equipment earns formal qualification. Indirect impact equipment earns commissioning, a less formal engineering verification. The second edition of that guide aligned the approach with the lifecycle and risk thinking in ICH Q9, so classification is no longer a binary box but the output of a documented impact assessment that uses system risk to set the depth of testing. ASTM E2500, the standard guide for specification, design, and verification of manufacturing systems and equipment, takes the same direction further: verification effort scales with risk and reuses good engineering documentation as qualification evidence. The classification decision is itself a record. An auditor will accept "indirect impact, commissioned only" as a conclusion, but only if the rationale exists in writing and was approved before the work was scoped. For the risk-and-verification approach, see [Commissioning and Qualification under ASTM E2500](/articles/commissioning-qualification-astm-e2500).

For analytical instruments, USP General Chapter <1058> Analytical Instrument Qualification adds its own classification layer. Group A covers standard equipment with no measurement capability and no calibration requirement, such as a magnetic stirrer or a vortex mixer, where conformance to the user's expectation is established by observation. Group B covers standard instruments and equipment that provide measured values or control physical parameters needing calibration, such as a balance, a pH meter, a melting-point apparatus, or an oven. Group C covers complex, computer-controlled instruments and systems, such as an HPLC, a GC, or a dissolution apparatus, where qualification follows the full DQ/IQ/OQ/PQ lifecycle. The group drives how deep you go. A common finding is a Group C instrument treated like Group B, where someone qualified the hardware and the pumps but never qualified the software functions that actually generate and store the result.

| <1058> group | What it is | Qualification depth | Examples |
|---|---|---|---|
| A | No measurement, no calibration | Conformance by observation, recorded | Stirrer, vortexer, nitrogen blow-down |
| B | Measures or controls a parameter, needs calibration | Calibration plus a defined check against intended use | Balance, pH meter, oven, pipette, thermometer |
| C | Computer-controlled, configurable, generates electronic records | Full DQ/IQ/OQ/PQ plus software/data-integrity verification | HPLC, GC, dissolution tester, plate reader, mass spec |

For the analytical side in full, see [Analytical Instrument Qualification: USP <1058>](/articles/analytical-instrument-qualification).

### Calibration Classification

- [ ] Is there a documented basis for which instruments require calibration and which do not?
- [ ] Is calibration frequency defined and justified for each instrument, not copied blindly from a vendor default?
- [ ] Is calibration performed by qualified personnel using certified standards traceable to a national metrology institute (NIST in the United States, or an equivalent such as NPL or PTB)?
- [ ] Are calibration certificates retained, and do they state the standards used and the measurement uncertainty?

The decision tree here matters. A Group A device does not need calibration. A Group B or C instrument that makes a measurement used to release product needs calibration with defined tolerances tied to the instrument's intended use, not to the manufacturer's generic accuracy claim. If a balance is used to weigh a 5 mg reference standard, its operational tolerance at the low end of the range is what protects the data, and the calibration must cover that point. For the program-level treatment, see [Calibration and Metrology Program](/articles/calibration-and-metrology-program).

---

## Section 2: Design Qualification (DQ)

DQ is documented evidence that the proposed design of the equipment meets the user requirements and the intended GxP use. For purchased off-the-shelf equipment, DQ is usually a documented review of vendor literature and specifications against an approved User Requirements Specification, not original design engineering.

- [ ] Is there a User Requirements Specification (URS) for the equipment?
- [ ] Does the URS capture the specific performance requirements for the GxP use, not just generic specifications lifted from the vendor catalog?
- [ ] Has the vendor documentation been formally reviewed against the URS, with the reviewer and date recorded?
- [ ] Are any gaps between vendor specifications and URS requirements documented and resolved before procurement or before go-live?
- [ ] If custom or modified equipment was built, is there a documented design review?
- [ ] Was the supplier assessed for capability where the equipment is complex or custom?

**What goes in a DQ.** A typical DQ package contains: the approved URS, a vendor specification or technical data sheet, a point-by-point traceability of URS requirements to vendor capability, a record of any gaps and their resolution, a supplier assessment outcome for complex builds, and an approval signature. EU GMP Annex 15 (2015 revision) names design qualification as the first element of qualification and expects compliance with GMP to be demonstrated and documented at the design stage. Catching a gap at DQ costs a purchase-order amendment; catching it at PQ costs a chamber that cannot hold the humidity you needed all along.

**Worked DQ snippet (traceability is the point).**

| URS ID | Requirement | Vendor spec | Verified at | Gap / resolution |
|---|---|---|---|---|
| URS-07 | Hold 25 C +/- 2 C across loaded volume | "Setpoint control +/- 0.3 C" (point control only) | OQ + PQ mapping | Vendor controls setpoint, not uniformity. Added loaded-mapping acceptance to PQ. |
| URS-12 | Audit trail records create/modify/delete with user and time | "21 CFR Part 11 ready" | OQ software test | "Ready" is not "configured." OQ to prove trail is on and uneditable. |

What DQ is not: a sales brochure reviewed and filed. It is a documented comparison between what you need the equipment to do and what the vendor says it will do, with specific attention to the GxP-critical attributes. The URS is the spine of the whole package, because every later test should trace back to a requirement, and every requirement should eventually be verified somewhere in IQ, OQ, or PQ. That traceability is what turns a stack of protocols into a defensible argument. A useful audit move is to pick three URS requirements and ask where each one is verified. If the answer is "it is not," the URS is decorative. For building requirements that trace cleanly, see [User Requirements and Traceability](/articles/user-requirements-and-traceability).

---

## Section 3: Installation Qualification (IQ)

IQ proves the equipment was received and installed as designed, as specified, and in accordance with the manufacturer's recommendations and approved drawings.

### IQ Documentation

- [ ] Was there an approved IQ protocol before IQ was executed (approval date predates execution dates)?
- [ ] Does the protocol define specific acceptance criteria, not just "verify the equipment is installed correctly"?
- [ ] Do the execution records show that every step was performed and results recorded at the time of execution, in indelible ink or a controlled electronic record?
- [ ] Are deviations from the protocol documented on the execution record, with investigation and disposition?
- [ ] Is there an approved IQ report concluding the IQ was successful?

### IQ Scope Check

- [ ] Identity verification: make, model, and serial number match the purchase order and the URS
- [ ] Software and firmware version verification for computerized instruments, recorded against the version named in the qualification
- [ ] Utilities verification: voltage, gas supply, water quality, drainage, and environmental conditions
- [ ] Safety systems: emergency stops, interlocks, alarms present and physically confirmed
- [ ] Installation conditions: all vendor-required installation requirements met and documented
- [ ] Spare parts, manuals, and as-built drawings received and filed
- [ ] Calibration status of test instruments: any reference equipment or standards used during IQ/OQ is itself within calibration, and the certificate IDs are recorded in the protocol

**Where IQ evidence can come from.** Modern programs reuse factory and site acceptance testing rather than repeating it under a qualification cover. A factory acceptance test (FAT) verifies build and function at the vendor before shipment; a site acceptance test (SAT) repeats key checks after installation. Under a risk-based, ASTM E2500-aligned approach, well-documented FAT/SAT results can serve directly as IQ/OQ evidence, which avoids re-running tests for the sake of a different cover page. The audit question is whether the reuse is documented: did a quality-approved plan say this FAT step satisfies this IQ requirement? See [Factory and Site Acceptance Testing](/articles/factory-site-acceptance-testing).

That last checklist item, calibration of test instruments, is the one people forget. If you measured temperature during OQ with an uncalibrated thermocouple, the OQ result is unsupported. Recording the calibration ID and due date of every measuring device used during qualification is not bureaucratic; it is the only thing that makes the recorded values mean anything. A clean IQ records, for each measuring device used, its ID, calibration certificate number, and calibration due date, and confirms that due date falls after the last execution date.

**Acceptance criteria for IQ:** every identity, utility, and installation attribute meets its predefined criterion; all test instruments are in calibration with IDs recorded; deviations are dispositioned; and the IQ report is approved before OQ begins.

---

## Section 4: Operational Qualification (OQ)

OQ proves the equipment operates within defined specifications across its full intended operating range, in the absence of product.

### OQ Documentation

- [ ] Is there an approved OQ protocol executed after IQ completion?
- [ ] Does OQ test performance at the limits of the operating range, not just one mid-range point?
- [ ] Does each test have predefined, specific acceptance criteria?
- [ ] Are results recorded as actual measured values, not only a pass/fail tick?
- [ ] Does OQ cover the full range of intended GxP use?
- [ ] Are deviations documented and resolved before OQ is closed?

### OQ Scope Check by Equipment Type

**Analytical instruments (HPLC, UV-Vis, FTIR, GC):**
- Wavelength accuracy, flow-rate accuracy, injector precision, and column-oven temperature accuracy as applicable to the instrument
- Linearity and range verification across the intended concentration range
- Accuracy against certified reference standards
- Precision, the repeatability of repeated injections of the same standard
- Carryover and detector noise where relevant
- Software functions: audit trail capture, electronic signature behavior, access control, and report generation
- System suitability criteria defined and demonstrated

**Manufacturing equipment (mixers, reactors, bioreactors, tablet presses, filling lines):**
- Process parameter accuracy and reproducibility for temperature, pressure, agitation, pH, fill weight, or compression force
- Alarm and interlock function verification at the setpoint and at the alarm limit
- Clean-in-place and steam-in-place cycle verification where applicable
- Automation verification: recipe execution, sequence control, and data recording

**Medical device manufacturing equipment (machining, molding, sealing, test stands):**
- Critical process output verification (dimension, seal strength, bond integrity) across the operating window
- Measurement system capability for any in-process gauge used to accept product
- Fixture and tooling identity and condition

**Environmental units (incubators, refrigerators, stability chambers, freezers):**
- Temperature mapping for spatial uniformity across the working volume, loaded and empty, not just probe accuracy at one point
- Alarm function at specification limits, including high and low excursions
- Recovery time after a defined door-open event

**Balances and weighing equipment:**
- Repeatability across the intended weighing range
- Accuracy against certified weights, including the low end actually used
- Eccentricity (corner-load) testing
- Linearity across the full range

### Worked OQ Acceptance Table (incubator example)

| Test | Acceptance criterion | Recorded result | Pass/fail |
|---|---|---|---|
| Empty mapping, 9 probes, 24 h | All probes 37.0 C +/- 0.5 C | 36.7 to 37.3 C | Pass |
| Hot-spot identification | Max-min spread <= 1.0 C | 0.6 C | Pass |
| High alarm | Annunciates at >= 38.0 C within 60 s | Fired at 38.0 C, 41 s | Pass |
| Low alarm | Annunciates at <= 36.0 C within 60 s | Fired at 36.0 C, 38 s | Pass |
| Door-open recovery | Return to 37.0 C +/- 0.5 C within 30 min after 60 s open | 11 min | Pass |

Notice that the table records actual numbers, not just ticks. An OQ that records only "Pass" hides whether the result cleared the limit comfortably or scraped past it, and the margin is exactly what a reviewer needs to judge how reliable the equipment is.

### Critical OQ Gap: Testing at Boundaries

Many OQ protocols test equipment at a single comfortable operating point. A balance qualified only at 100 g tells you nothing about its behavior at 1 mg. An incubator confirmed only at the setpoint center tells you nothing about uniformity at the corners or recovery after a door opening. OQ must demonstrate fitness across the full range of intended use, including the edge conditions where things actually go wrong. When the operating range is wide, a worst-case or bracketing approach is acceptable if it is justified in writing, but "we tested the middle" is not a justification. For chambers and warehouses specifically, the mapping design (probe count, placement, loaded vs empty, duration) is its own discipline: see [Temperature Mapping Qualification](/articles/temperature-mapping-qualification).

**Acceptance criteria for OQ:** every operating-range limit and edge condition exercised against a numeric criterion, actual values recorded, software and data-integrity functions verified for computerized instruments, deviations closed, and the report approved before PQ.

---

## Section 5: Performance Qualification (PQ)

PQ proves the equipment performs consistently in its actual use environment, under conditions representative of routine operation, often with product or a representative surrogate.

- [ ] Is there an approved PQ protocol?
- [ ] Is PQ executed after OQ is complete and accepted?
- [ ] Does PQ use actual product, materials, or representative substitutes?
- [ ] Is PQ performed by the actual users, not only the validation team?
- [ ] Does PQ test across the realistic range of conditions used in routine production, not just ideal conditions?
- [ ] Does PQ demonstrate reproducibility across multiple runs, not a single lucky run?

The distinction between OQ and PQ is the one that separates programs that understand qualification from programs that follow a template. OQ proves the instrument works in specification. PQ proves it works in use. An HPLC that meets every OQ criterion under clean qualification conditions but drifts when challenged with the real sample matrix, the real mobile phase, and the real gradient used in routine testing has a PQ-level problem that OQ would never reveal. For some instrument categories, PQ folds into ongoing system suitability and method validation rather than a standalone protocol, and that is defensible if documented. The point is that someone must establish performance under real use, and be able to show where. For the analytical side of this, see [Analytical Instrument Qualification: USP <1058>](/articles/analytical-instrument-qualification) and [Method Validation Essentials](/articles/method-validation-essentials).

A note on terminology, because interviewers probe it. For an analytical instrument, "PQ" means demonstrating performance under intended use, often through holistic tests and ongoing system suitability. For a manufacturing process, the equivalent stage is process performance qualification (PPQ), the second stage of the FDA process validation lifecycle, which qualifies the commercial process on the qualified equipment using multiple conforming runs. They are related but not interchangeable: equipment PQ qualifies the asset, PPQ qualifies the process running on it. See [Process Performance Qualification (PPQ)](/articles/process-performance-qualification-ppq).

---

## Section 6: Calibration and Maintenance

### Calibration Program

- [ ] Is there a documented calibration schedule for all GxP instruments?
- [ ] Is calibration performed at the documented frequency, with a tolerance window that is honored?
- [ ] Are calibrations traceable to a national standard, and can you walk the traceability chain on demand?
- [ ] Are calibration records retained, accessible, and stating measurement uncertainty?
- [ ] When an instrument fails calibration, is there a documented process for assessing impact on the data generated since the last good calibration?
- [ ] Are instruments with expired or failed calibration labeled and removed from GxP service?

The calibration failure investigation is where weak programs are exposed. If a pH meter fails its calibration check today, the action is not just "recalibrate it." The real questions are: when was it last confirmed in tolerance, what GxP data was generated with it in the intervening period, and does the failure represent slow drift that could have affected those results, or a sudden fault unlikely to have biased earlier readings? This is the out-of-tolerance (OOT), sometimes called out-of-calibration, investigation, and it parallels an out-of-specification investigation in logic. An SOP that says "recalibrate and document" without a defined backward-looking impact assessment is incomplete, and inspectors read calibration SOPs specifically to find that omission. For the investigative mindset, see [OOS Investigation Process](/articles/oos-investigation-process).

**As-found / as-left is the data that drives the impact decision.** A defensible calibration record captures the reading before adjustment (as-found) and after adjustment (as-left). The as-found value, compared with the tolerance, tells you whether prior data is at risk and by how much.

| Field | Example |
|---|---|
| Instrument / range | TEMP-118, RTD, 0 to 60 C |
| Tolerance | +/- 0.3 C |
| As-found at 37 C | 37.6 C (out of tolerance by 0.3 C) |
| As-left at 37 C | 37.0 C (in tolerance) |
| Last in-tolerance cal | 2025-08-04 |
| Data at risk | All readings 2025-08-04 to today |
| Impact action | OOT investigation opened; assess affected batches and stability points in that window |

### Maintenance

- [ ] Is there a preventive maintenance (PM) schedule for GxP equipment?
- [ ] Are PMs performed on schedule, with records retained?
- [ ] When PM reveals worn parts or degraded performance, is there a documented impact assessment?
- [ ] Is there a defined process for emergency repairs that requires assessment and, where needed, requalification before the equipment returns to GxP use?

Maintenance and calibration records also support data-integrity expectations under 21 CFR 211.68(a), which requires automatic, mechanical, and electronic equipment to be routinely calibrated, inspected, and checked according to a written program. EU GMP Chapter 3 carries the parallel maintenance and calibration expectation, and 21 CFR 211.182 requires an equipment cleaning and use log. A gap in the PM history is therefore both a maintenance finding and, potentially, a data-reliability finding.

---

## Section 7: Periodic Review and Requalification

Qualification is a snapshot, not a permanent state. Equipment changes through wear, repair, software updates, and environmental shifts. Periodic review confirms that the current state still matches the qualified state.

- [ ] Is there a documented periodic review schedule for all qualified equipment?
- [ ] Are reviews occurring on schedule? Pull the last three review records for five pieces of equipment and check the dates against the procedure.
- [ ] Does the review cover current calibration status, repairs since the last review and their qualification impact, current software or firmware version versus the qualified version, and recent system-suitability or performance-check results?
- [ ] Does the review conclude with a documented fitness-for-purpose statement and a named, dated approver?
- [ ] When the review identifies gaps, are CAPAs opened and tracked to closure?

EU GMP Annex 15 (Qualification and Validation, 2015 revision) sets the expectation that qualified facilities, systems, and equipment are maintained in a state of control through periodic evaluation, and that requalification is performed where justified by change or by the periodic review. The review is not a rubber stamp; it is the mechanism that catches the slow erosion a program suffers between major events. For the structured method, see [Requalification and Periodic Review of Equipment](/articles/requalification-and-periodic-review-equipment).

**What a periodic review pulls together.** A complete review evaluates, since the last review: change records and their qualification impact, deviation and CAPA history touching the asset, calibration history including any OOT events, PM completion, the current software/firmware version against the qualified version, recent system-suitability or performance-monitoring trends, and any relocation. It closes with an explicit fitness-for-purpose conclusion and a requalification decision.

**Requalification triggers.** Specific events should prompt requalification consideration outside the scheduled cycle:

- Major repair or replacement of a part that touches a qualified parameter
- Software or firmware upgrade
- Relocation, even within the same building, because the prior temperature mapping no longer holds
- A significant change in use, such as a new analytical method or an expanded operating range
- Any calibration failure that may reflect instrument degradation rather than ordinary drift

---

## Section 8: Change Control for Qualified Equipment

Change control is where many qualification programs quietly decay. A program that handles new qualifications well but does not control post-qualification changes will drift out of its qualified state one undocumented repair at a time.

- [ ] Is there a change control procedure that explicitly covers qualified equipment?
- [ ] When a repair or modification is made, does it go through change control?
- [ ] Does the impact assessment specifically evaluate qualification impact, not just safety or cost?
- [ ] For changes that affect qualified parameters, is requalification completed before the equipment returns to GxP use?
- [ ] For software-controlled instruments, are firmware and software upgrades managed through change control?
- [ ] Are vendor-recommended patches applied through a documented change control process rather than installed silently by service engineers?

The change-control gap looks like this. A bioreactor is fully qualified. During scheduled maintenance the impeller shaft is replaced. Three more batches run before anyone asks whether the impeller replacement required requalification. The batch records say "qualified bioreactor," but no record shows whether the current configuration is still the qualified configuration. Any physical or software modification to a qualified asset needs a documented change record and impact assessment, even when the conclusion is that no requalification is required. The vendor-service version of this trap is worse, because a field engineer may upgrade firmware during a routine visit and note it only on a service ticket that never reaches quality. A standing instruction that no software or firmware change is made on site without a change record closes that door. EU GMP Annex 15 and 21 CFR 211.68(b) underpin the expectation. For the broader treatment, see [Change Control for Validated Systems](/articles/change-control-validated-systems). When a change needs requalification and a test fails, see [Validation Test Failure Management](/articles/validation-test-failure-management).

---

## Section 9: Qualification Documentation Package

Pull five representative qualification packages, ideally across different equipment types, and evaluate each one end to end.

### Documentation Completeness

- [ ] URS or equivalent requirements document exists and is approved
- [ ] DQ documentation (vendor review or design review) exists
- [ ] IQ protocol is approved and predates IQ execution
- [ ] IQ execution records show actual values, not just checkboxes
- [ ] IQ report is approved and signed
- [ ] OQ protocol is approved with specific acceptance criteria
- [ ] OQ execution records are complete with actual values
- [ ] OQ report is approved
- [ ] PQ protocol and report exist for direct impact equipment
- [ ] Current calibration certificate is on file
- [ ] Most recent periodic review is documented
- [ ] Change log or change control record is complete and current

### Documentation Quality

- [ ] Are acceptance criteria specific (numeric values or defined pass/fail), not vague phrases such as "within specification"?
- [ ] Do execution records show actual recorded values rather than only "pass"?
- [ ] Are protocol deviations documented and dispositioned?
- [ ] Could an inspector reconstruct the system's qualification history in fifteen minutes from this package?

A frequent quality finding is contemporaneity. Execution records signed and dated weeks after the testing supposedly happened, or a single person both performing and verifying every step, undermine the credibility of the data even when the numbers look fine. Qualification records are GxP records and must follow good documentation practice. For the underlying expectations, see [Good Documentation Practices](/articles/good-documentation-practices) and [ALCOA+ in detail](/articles/alcoa-plus-deep-dive).

---

## Roles and Responsibilities

Qualification crosses several functions, and a common cause of gaps is an unclear owner for the unglamorous middle steps. Confirm who does what:

| Activity | Typical owner | Quality role |
|---|---|---|
| URS authoring | User function (lab, manufacturing, facilities) | Reviews and approves |
| DQ / supplier assessment | Engineering or validation | Approves; assesses supplier where complex |
| Protocol authoring (IQ/OQ/PQ) | Validation engineer | Reviews and pre-approves before execution |
| Protocol execution | Validation, engineering, or trained user | Witnesses or reviews critical steps |
| Calibration and PM | Metrology / facilities engineering | Approves program, audits records |
| Change control / impact assessment | Change owner plus engineering | Approves; decides requalification |
| Periodic review | Equipment owner / engineering | Approves fitness-for-purpose conclusion |
| Final qualification report approval | Validation lead | Quality approves release to GxP use |

The recurring blind spot is the boundary between facilities/metrology and quality. PMs and calibrations live with engineering, but their failures are quality events, and the handoff (who notifies quality when a calibration fails or a PM finds a worn part) must be explicit. For the broader map, see [GxP Roles and Responsibilities](/articles/gxp-roles-responsibilities).

---

## Worked Example: Auditing a New Stability Chamber

To see how the sections connect, follow one asset. A new walk-in stability chamber arrives. The URS specifies a setpoint of 25 C and 60 percent relative humidity, with defined tolerances and an alarm strategy, because the chamber will hold registration-stability samples whose results support a marketing application. DQ confirms the purchased model can hold those conditions across the loaded volume. IQ confirms identity, utilities, the mapping-sensor calibration certificates, and the alarm hardware. OQ runs an empty-chamber temperature and humidity mapping, demonstrates uniformity within tolerance, fires the high and low alarms at the limits, and measures recovery after a timed door-open. PQ runs a loaded mapping with representative product load, because a full chamber behaves differently from an empty one, and holds conditions over a defined period to show stability over time.

Now apply the lifecycle controls. Calibration of the monitoring probes is scheduled and traceable. PM keeps the refrigeration and humidification systems in order. Periodic review, eighteen months later, notes that a humidity sensor was replaced under an emergency repair. That single line is the audit pivot: was the sensor replacement run through change control, and did anyone reassess whether the chamber still met its qualified humidity profile afterward? If the answer is documented, the program holds. If the repair lives only on a maintenance log and the chamber kept holding samples, you have found a real gap on an asset whose data feeds a regulatory filing. That is exactly the kind of thread an inspector pulls. For the program around the data this chamber produces, see [Stability Programs and ICH](/articles/stability-programs-ich) and [Environmental Monitoring Program](/articles/environmental-monitoring-program).

---

## Common Mistakes and Inspection-Finding Patterns

These recur across inspections and internal audits regardless of modality. None name a company; they are the generic shapes findings take.

- **Approval dates that postdate execution.** The IQ or OQ report is approved before the protocol it executed, or the protocol "pre-approval" signature falls after the first test date. This reads as a record assembled to look compliant.
- **Group C treated as Group B.** Hardware qualified, software functions (audit trail, access control, electronic signatures, calculations) never tested. The instrument generates and stores the result through software that was never qualified.
- **OQ at one comfortable point.** No edge-of-range or worst-case testing; the balance proven at 100 g and used at 5 mg; the chamber proven at the setpoint and used to the corners.
- **"Within specification" as an acceptance criterion.** No number to test against, so the result cannot fail and the record proves nothing.
- **Records show ticks, not values.** Pass/fail only, with no margin to the limit, so the safety margin is invisible and a borderline result is indistinguishable from a comfortable one.
- **Calibration SOP with no backward-looking impact step.** "Recalibrate and document" with no OOT investigation of data generated since the last good calibration.
- **Change control that misses repairs.** New qualifications are clean, but parts get swapped and firmware gets upgraded on maintenance and service tickets that never trigger a change record or impact assessment.
- **Vendor field-service drift.** A service engineer updates firmware during a visit; quality learns of it only when version numbers stop matching the qualified version, if ever.
- **Periodic reviews overdue for the most critical assets.** The program runs reviews on the simple equipment and falls behind on the complex, high-impact instruments, the exact inverse of a risk-based program.
- **Retired-but-connected equipment.** An asset marked retired on paper is still wired in and could be producing data; or a "dusty" unit on the floor cannot be shown to be out of GxP service.

---

## Interview Questions and How to Answer Them

Expect these in interviews for validation, metrology, QA, and CSV roles, and from inspectors during a walkthrough.

**"What is the difference between qualification and validation?"** Qualification establishes that equipment and instruments are installed and operate as intended (DQ/IQ/OQ/PQ). Validation is the broader demonstration that a process or computerized system consistently produces a result meeting predetermined criteria. Equipment is qualified; processes and systems are validated. For a software-controlled instrument you do both, because the instrument is hardware and a computerized system at once.

**"Walk me through DQ, IQ, OQ, PQ."** DQ verifies the design meets the URS and the GxP use. IQ verifies the equipment was received and installed as specified, with utilities, identity, and safety confirmed. OQ verifies it operates within specification across the full range, in the absence of product, with edge conditions tested. PQ verifies it performs consistently under real use, often with product or a surrogate, run by the actual users. The dependency is sequential: each stage is approved before the next begins.

**"What is the difference between OQ and PQ?"** OQ proves the asset works in specification under controlled conditions. PQ proves it works in routine use with the real matrix, materials, and users. An instrument can pass every OQ test and still fail in use; PQ is what catches that.

**"How do you handle an instrument that fails calibration?"** Do not just recalibrate. Capture as-found and as-left readings, determine when it was last in tolerance, identify all GxP data generated in that window, and open an out-of-tolerance investigation to assess whether the deviation could have affected results. The as-found magnitude versus tolerance drives whether prior data is at risk. Quarantine the instrument until resolved.

**"How do you classify analytical instruments?"** USP <1058>: Group A (no measurement, no calibration), Group B (measures or controls a parameter, needs calibration), Group C (computer-controlled, full DQ/IQ/OQ/PQ plus software qualification). The group sets qualification depth.

**"When does qualified equipment need requalification?"** On a defined trigger: a repair or part change touching a qualified parameter, a software or firmware upgrade, relocation, a significant change in intended use, or a calibration failure indicating degradation. Also on schedule, where periodic review concludes requalification is warranted.

**"What regulations govern equipment qualification?"** In the US, 21 CFR 211.68 (equipment calibration and controls) and 211.182 (use and cleaning records). In the EU, GMP Chapter 3 (premises and equipment) and Annex 15 (qualification and validation, 2015 revision). For analytical instruments, USP <1058>. Risk and verification approaches come from ICH Q9, the ISPE C&Q Baseline Guide (Volume 5), and ASTM E2500. For broader interview prep, see [GxP Quality Interview Preparation](/articles/gxp-quality-interview-preparation).

---

## Scoring What You Found

Rate each gap by its effect on data and product, not by how tidy the paperwork is.

| Severity | Definition | Typical examples |
|---|---|---|
| Critical | Equipment is in GxP use without completed qualification, or required requalification was not performed after a triggering event | Direct impact instrument generating release data with no OQ; bioreactor modified and run without any requalification assessment |
| Major | Qualification exists but has significant gaps that could affect data reliability | Missing OQ acceptance criteria; undocumented protocol deviations; periodic reviews overdue for critical equipment; calibration-failure SOP with no historical-data impact step |
| Minor | Organizational or completeness issues that do not affect the validity of specific GxP data | Records filed out of order; a missing signature later reconstructed; inconsistent ID labeling that is otherwise traceable |

The governing question for any gap is the same: does it weaken confidence in the validity of the GxP data this equipment produced? If yes, you have a data-reliability issue that needs a retrospective assessment of affected data and product, not just a corrective action on the paperwork. A CAPA that fixes the procedure but never asks whether earlier results were sound is half a CAPA. For the structure of a sound corrective action, see [What Is a CAPA](/articles/what-is-a-capa); for the program-level view of how these gaps accumulate, see [Validation Master Plan and Periodic Review](/articles/validation-master-plan-and-periodic-review). For inspection-day handling of any of these findings, see [FDA Inspection Readiness](/articles/fda-inspection-readiness).

---

## Regulatory Reference Points

| Requirement | Reference |
|---|---|
| Equipment qualification and routine calibration | 21 CFR 211.68(a); EU GMP Chapter 3; EU GMP Annex 15 (2015) |
| Equipment use and cleaning records | 21 CFR 211.182; EU GMP Chapter 3 |
| Analytical instrument qualification | USP General Chapter <1058> Analytical Instrument Qualification |
| Calibration traceability for testing labs | 21 CFR 211.68(a); ISO/IEC 17025:2017 for testing and calibration laboratories |
| Equipment change control | 21 CFR 211.68(b); EU GMP Chapter 3; EU GMP Annex 15 (2015) |
| Qualification documentation and lifecycle | EU GMP Annex 15 (2015); ICH Q9 (R1) Quality Risk Management |
| Periodic review and requalification | EU GMP Annex 15 (2015); ISPE C&Q Baseline Guide, Volume 5 |
| Commissioning and qualification framework | ISPE Commissioning and Qualification Baseline Guide, Volume 5 (2nd ed.); ASTM E2500 |

---

## Related Articles

- [Equipment Qualification Lifecycle](/articles/equipment-qualification-lifecycle)
- [Analytical Instrument Qualification: USP <1058>](/articles/analytical-instrument-qualification)
- [Requalification and Periodic Review of Equipment](/articles/requalification-and-periodic-review-equipment)
- [Temperature Mapping Qualification](/articles/temperature-mapping-qualification)
- [Calibration and Metrology Program](/articles/calibration-and-metrology-program)
- [Commissioning and Qualification under ASTM E2500](/articles/commissioning-qualification-astm-e2500)
- [Change Control for Validated Systems](/articles/change-control-validated-systems)
- [Data Integrity Self-Audit](/articles/di-self-audit-checklist)
- [Validation Master Plan and Periodic Review](/articles/validation-master-plan-and-periodic-review)
- [Stability Programs and ICH](/articles/stability-programs-ich)
- [Process Validation Lifecycle](/articles/process-validation-lifecycle)
