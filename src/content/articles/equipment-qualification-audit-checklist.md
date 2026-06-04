---
title: "Equipment and Instrument Qualification Audit Checklist"
description: "A complete qualification audit checklist for pharmaceutical equipment and analytical instruments, DQ, IQ, OQ, PQ, calibration, maintenance, periodic review, and change control. Based on USP <1058>, EU Annex 15, and ISPE C&Q Baseline Guide."
pubDate: 2026-03-21
tags: ["equipment-qualification", "IQ", "OQ", "PQ", "audit", "self-audit", "USP-1058"]
tier: "Intermediate"
pillar: "equipment-qualification"
---

Equipment and instrument qualification is one of the most inspection-visible aspects of pharmaceutical QA. An FDA investigator or EU inspector walking into your facility will often start at an instrument, open the qualification binder, and within 15 minutes know whether your qualification program is real or performative.

This checklist walks through the complete lifecycle of a GxP instrument or piece of equipment, from initial qualification through ongoing maintenance, periodic review, and change control. Use it for self-assessment before inspections, when taking over responsibility for a qualification program, or when auditing a contract manufacturing site.

---

## Before You Start: Build Your Equipment Inventory

Like CSV audits, equipment qualification audits start with confirming what you have. The equipment master list (EML) or equipment inventory is the foundation.

For every piece of GxP equipment or instrument at your site, your inventory should document:

- Unique equipment ID
- Equipment description and model/manufacturer
- Location
- GxP criticality (direct impact vs. indirect impact vs. non-GxP)
- Calibration requirements and schedule
- Qualification status (qualified, in qualification, requires requalification, retired)
- Last qualification completion date
- Qualification documentation location
- Maintenance responsibility

If your EML has equipment with "last qualified" dates more than 3-4 years old and no periodic requalification records, that's your first finding regardless of what else you find.

---

## Section 1: Equipment Classification and Scope

### Direct Impact vs. Indirect Impact Classification

- [ ] Has each piece of equipment been classified as direct impact or indirect impact?
- [ ] Is the classification documented with rationale?
- [ ] For direct impact equipment: is there a documented qualification program (DQ/IQ/OQ/PQ as appropriate)?
- [ ] For indirect impact equipment: is there a documented commissioning or equivalent approach?
- [ ] Has the classification been reviewed when the equipment's use changes?

**ISPE C&Q framework:** The ISPE Commissioning and Qualification Baseline Guide distinguishes between direct impact systems (those directly affecting product quality or patient safety) and indirect impact systems (those supporting direct impact systems). Direct impact equipment requires formal qualification through IQ/OQ/PQ. Indirect impact equipment requires commissioning but can follow a less formal process. The classification determines the rigor, but every classification decision should be documented.

For analytical instruments, the USP General Chapter <1058> Analytical Instrument Qualification provides an additional classification: AIQ Group A (no impact on measurements), AIQ Group B (standard instruments), and AIQ Group C (complex instruments with software-controlled measurements). The AIQ group drives qualification depth under the USP framework.

### Calibration Classification

- [ ] Is there a documented basis for which instruments require calibration?
- [ ] Is calibration frequency defined and documented for each instrument?
- [ ] Is calibration performed by qualified personnel using certified standards traceable to NIST (or equivalent national standard)?
- [ ] Are calibration certificates retained?

---

## Section 2: Design Qualification (DQ)

DQ is the documented evidence that the design of the equipment meets the user requirements. For purchased equipment, DQ is often a review of vendor documentation against a documented URS rather than original design work.

- [ ] Is there a User Requirements Specification (URS) for the equipment?
- [ ] Does the URS capture the specific performance requirements for the equipment's GxP use (not just general specifications from the vendor catalog)?
- [ ] Has the vendor documentation been formally reviewed against the URS?
- [ ] Are any gaps between vendor specifications and URS requirements documented and resolved before procurement?
- [ ] If custom equipment was designed: is there a formal design review documented?

**What DQ is not:** DQ is not a vendor's sales brochure reviewed and filed. It is a documented comparison between what you need the equipment to do and what the vendor says it will do, with specific attention to the GxP-critical attributes of the equipment's performance.

---

## Section 3: Installation Qualification (IQ)

IQ proves the equipment was installed as designed and as specified.

### IQ Documentation

- [ ] Is there an approved IQ protocol before the IQ was executed?
- [ ] Does the IQ protocol define specific acceptance criteria (not just "verify the equipment is installed correctly")?
- [ ] Does the IQ execution record show that all steps were performed and that results were recorded at the time of execution?
- [ ] Are any deviations from the protocol documented on the execution record, with documented disposition?
- [ ] Is there an approved IQ report concluding that the IQ was successful?

### IQ Scope Check

- [ ] Equipment identity verification: confirm make, model, and serial number match what was ordered and what the URS specifies
- [ ] Software version verification (for computerized instruments): confirm firmware/software is the version specified in the qualification
- [ ] Utilities verification: correct voltage, gas supply, environmental conditions
- [ ] Safety systems verification: emergency stops, interlocks, alarms
- [ ] Installation documentation: confirm all vendor-required installation conditions are met
- [ ] Calibration status at installation: instruments used during IQ/OQ (standards, reference equipment) are within calibration

---

## Section 4: Operational Qualification (OQ)

OQ proves the equipment operates within defined specifications across its full operating range.

### OQ Documentation

- [ ] Is there an approved OQ protocol executed after IQ completion?
- [ ] Does the OQ test performance at the limits of the operating range (not just at one mid-range point)?
- [ ] For each test: are there predefined acceptance criteria?
- [ ] Are all test results recorded with the actual measured value (not just pass/fail checked)?
- [ ] Does the OQ cover the equipment's complete range of intended GxP use?
- [ ] Are there deviations documented on the protocol? If yes, are they resolved and documented before OQ is closed?

### OQ Scope Check by Equipment Type

**For analytical instruments (HPLC, UV-Vis, FTIR, GC):**
- Linearity and range verification across the intended concentration range
- Accuracy verification (using certified reference standards)
- Precision verification (repeatability of repeated measurements of same standard)
- Specificity verification (where applicable)
- System suitability criteria defined and demonstrated
- Software function verification (audit trail, electronic signatures, report generation)

**For manufacturing equipment (mixers, reactors, fermentors):**
- Process parameter accuracy and reproducibility (temperature, pressure, agitation, pH)
- Alarm and interlock function verification
- Clean-in-place/sterilize-in-place cycle verification (if applicable)
- Automation system function verification (recipe execution, data recording)

**For environmental monitoring systems (incubators, refrigerators, chambers):**
- Temperature mapping (not just probe accuracy, spatial uniformity across the unit)
- Alarm function at specification limits
- Recovery time after door opening

**For balances and weighing equipment:**
- Repeatability testing across the intended weighing range
- Accuracy testing against certified weights
- Eccentricity testing
- Linearity across the full range

### Critical OQ Gap: Testing at Boundaries

Many OQ protocols test equipment at a single operating point. A balance qualified at 100g tells you nothing about performance at 1g. An incubator qualified at the set point tells you nothing about temperature uniformity or recovery. OQ should demonstrate fitness for the full range of intended use, including edge conditions.

---

## Section 5: Performance Qualification (PQ)

PQ proves the equipment consistently performs in the actual use environment under conditions representative of routine use.

- [ ] Is there an approved PQ protocol?
- [ ] Is PQ executed after OQ is complete and accepted?
- [ ] Does PQ use actual product, materials, or representative substitutes?
- [ ] Is PQ testing performed by the actual users (not just the validation team)?
- [ ] Does PQ test performance across the full range of conditions that will be used in routine production (not just ideal conditions)?
- [ ] Does PQ demonstrate reproducibility (not just one successful run)?

**The distinction between OQ and PQ:** OQ proves the instrument works in specification. PQ proves it works in use. An HPLC that meets all OQ specifications in a controlled qualification condition but performs poorly with the actual sample matrices and mobile phase conditions used in routine testing needs PQ-level investigation. PQ is not a box-checking exercise, it's where the validation becomes meaningful for the actual use case.

---

## Section 6: Calibration and Maintenance

### Calibration Program

- [ ] Is there a documented calibration schedule for all GxP instruments?
- [ ] Is calibration performed at the documented frequency?
- [ ] Are all calibrations traceable to NIST (or equivalent)? Can you demonstrate this traceability chain?
- [ ] Are calibration records retained and accessible?
- [ ] When an instrument fails calibration: is there a documented process for investigating impact and deciding whether to recall data generated while the instrument was out of calibration?
- [ ] Are instruments with expired calibration labeled and taken out of service for GxP use?

**The calibration failure investigation:** If a pH meter fails calibration today, the question isn't just "recalibrate it." The question is: when was it last confirmed in calibration? What GxP data was generated with this instrument between then and now? Does the calibration failure represent drift that affects the validity of historical data? A calibration failure SOP that says "recalibrate and document" without addressing the historical data impact is incomplete.

### Maintenance

- [ ] Is there a preventive maintenance (PM) schedule for GxP equipment?
- [ ] Are PMs performed at the scheduled frequency?
- [ ] Are PM records retained?
- [ ] When PM reveals issues (worn parts, degraded performance): is there a documented impact assessment?
- [ ] Is there a process for emergency repairs that ensures requalification before the equipment returns to GxP use?

---

## Section 7: Periodic Review / Requalification

Qualification is not permanent. Equipment changes over time through wear, repairs, and environmental changes. Periodic review confirms the current state of qualification.

- [ ] Is there a documented periodic review schedule for all qualified equipment?
- [ ] Are reviews occurring on schedule? (Pull last 3 review records for 5 pieces of equipment and check dates.)
- [ ] Does the periodic review cover: current calibration status, recent repairs and their qualification impact, current software version vs. qualified version (for computerized instruments), results of recent system suitability or other performance checks?
- [ ] Does the periodic review conclude with a documented fitness-for-purpose statement?
- [ ] When periodic review identifies gaps, are CAPAs opened and tracked?

**Requalification triggers:** Periodic review determines whether requalification is needed. Specific events that should trigger immediate requalification consideration, outside the scheduled cycle:
- Major repair or part replacement
- Software/firmware upgrade
- Relocation (even within the same building, temperature mapping no longer applies)
- Significant change in use (new analytical method, expanded operating range)
- Any calibration failure that may reflect instrument degradation rather than calibration drift

---

## Section 8: Change Control for Qualified Equipment

Equipment change control is where many qualification programs break down. An equipment program that handles new qualifications well but doesn't control post-qualification changes degrades over time.

- [ ] Is there a change control procedure that specifically covers qualified equipment?
- [ ] When a repair or modification is made, does it go through change control?
- [ ] Does the change control impact assessment specifically evaluate qualification impact?
- [ ] For changes that affect qualified parameters: is requalification performed before returning the equipment to GxP use?
- [ ] For software-controlled instruments: are firmware upgrades managed through change control?
- [ ] Are vendor-recommended software patches applied through a documented change control process?

**The change control gap:** A bioreactor that is fully qualified, then has its impeller shaft replaced during a scheduled maintenance, then runs three more batches before anyone asks whether the impeller replacement required requalification, that's a gap. The batch records would show "qualified bioreactor" without documentation of whether the current configuration is still the qualified configuration. Any physical modification to a qualified instrument or piece of equipment requires a documented change control and impact assessment, even if the conclusion is that no requalification is needed.

---

## Section 9: Qualification Documentation Package

Pull 5 representative equipment qualification packages (across different types if possible) and evaluate each:

### Documentation Completeness

- [ ] URS or equivalent requirements document exists and is approved
- [ ] DQ documentation (vendor review or design review) exists
- [ ] IQ protocol is approved and predates IQ execution
- [ ] IQ execution records show actual measured values, not just checkboxes
- [ ] IQ report is approved and signed
- [ ] OQ protocol is approved with specific acceptance criteria
- [ ] OQ execution records are complete with actual values
- [ ] OQ report is approved
- [ ] PQ protocol and report exist (for direct impact equipment)
- [ ] Current calibration certificate is on file
- [ ] Most recent periodic review is documented
- [ ] Change log or change control record is complete

### Documentation Quality

- [ ] Are acceptance criteria specific (numeric values or specific pass/fail criteria), not vague ("within specification")?
- [ ] Do execution records show actual values, not just "pass"?
- [ ] Are there any deviations from protocols? If yes, are they documented and dispositioned?
- [ ] Is the qualification package organized well enough that an inspector could understand the system's qualification history in 15 minutes?

---

## Scoring What You Found

For each gap identified:

**Critical:** Equipment is in GxP use without completed qualification, or requalification was required and not performed after a triggering event
**Major:** Qualification documentation exists but has significant gaps (missing OQ acceptance criteria, undocumented deviations, overdue periodic reviews for critical equipment)
**Minor:** Documentation organizational issues, minor completeness gaps that don't affect the validity of specific GxP data

The key question for any gap: does it affect confidence in the validity of GxP data generated by this equipment? If yes, that's a data reliability issue that needs retrospective assessment, not just a corrective action on the paperwork.

---

## Regulatory Reference Points

| Requirement | Reference |
|---|---|
| Equipment qualification requirement | 21 CFR 211.68(a); EU GMP Chapter 3; EU GMP Annex 15 |
| Analytical instrument qualification | USP General Chapter <1058> |
| Calibration requirements | 21 CFR 211.68(a); ISO 17025 for testing labs |
| Equipment change control | 21 CFR 211.68(b); EU GMP Chapter 3 para 3.40 |
| Qualification documentation | EU GMP Annex 15 clause 10; FDA Process Validation Guidance (2011) |
| Periodic review | EU GMP Annex 15 clause 3.7; ISPE Baseline C&Q Guide Chapter 9 |

---

## Related Articles

- [Equipment Qualification Lifecycle](/articles/equipment-qualification-lifecycle)
- [Analytical Instrument Qualification: USP <1058>](/articles/analytical-instrument-qualification)
- [Change Control for Validated Systems](/articles/change-control-validated-systems)
- [Data Integrity Self-Audit](/articles/di-self-audit-checklist)
