---
title: "Equipment Installation Qualification (IQ) Protocol"
description: "A plug-and-play installation qualification protocol for manufacturing equipment: as-built verification against design, materials of construction, utility tie-ins, instrumentation and calibration loops, documentation and spares, automation software version, test cases, deviations, and summary, with a worked specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Protocol"
pillar: "equipment-qualification"
relatedArticles: ["equipment-qualification-lifecycle", "commissioning-qualification-astm-e2500", "factory-site-acceptance-testing"]
tags: ["installation qualification", "iq", "equipment qualification", "materials of construction", "calibration", "annex 15", "astm e2500"]
tier: "Intermediate"
---

This is a ready-to-use installation qualification protocol for manufacturing equipment such as a process vessel, mixer, skid, filling line, lyophilizer, or chromatography or filtration system. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach the drawings, certificates, and FAT/SAT records the protocol calls for, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

IQ proves one thing: that the equipment was built, supplied, and installed exactly as the approved design specified, in the correct location, connected to the correct utilities, with the correct instrumentation, software, documentation, and spares, before anyone asks it to perform. It is the stage after design qualification (DQ) and before operational qualification (OQ). It is static verification. IQ checks what the equipment IS (materials, build, connections, versions, documents), not what it DOES under power. OQ later relies on everything fixed here: the right alloy on a wetted surface, a calibrated transmitter, the correct PLC firmware, a verified earth bond. If IQ is loose, every later test inherits the doubt.

## Document control header

| Field | Entry |
|---|---|
| Document title | Installation Qualification Protocol for `<<FILL: equipment name / tag>>` |
| Document number | `<<FILL: PRT-ID, e.g. IQ-MFG-044>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Engineering / Validation>>` |
| Site / area | `<<FILL: site, building, room, process area>>` |
| Equipment tag / asset no. | `<<FILL: e.g. MV-2201>>` |
| Linked DQ / OQ / PQ | `<<FILL: DQ ref; OQ ref to follow; PQ ref to follow>>` |
| Linked URS / FS / DS | `<<FILL: requirements and design spec numbers>>` |
| Linked report | `<<FILL: IQ summary report number to be issued>>` |

## 1. Purpose

This protocol defines the checks and acceptance criteria to confirm that equipment `<<FILL: equipment tag>>` was manufactured and supplied to the approved design, installed correctly at `<<FILL: room / location>>`, connected to the specified utilities, fitted with the correct instrumentation and calibrated measuring devices, loaded with the specified control software and firmware, and supported by the required documentation and critical spares. The objective is a documented, inspection-ready record that the as-built and as-installed equipment matches the approved specification, drawings, and vendor requirements, and is ready to enter operational qualification.

## 2. Scope

This protocol applies to the single equipment item or skid identified in the header and section 5, including its mechanical assembly, product-contact and non-product-contact components, the local control panel and any embedded computerized system, the instruments fitted to it, and the utility connections serving it up to the defined battery limits. It covers verification at installation only, in the static, de-energized or no-load state except where powering a device is required to read a nameplate, version, or loop value. It does not establish operating performance under load, which is covered by the OQ referenced in the header. It does not cover process performance, routine maintenance, calibration intervals after qualification, or change control, which are governed by `<<FILL: cross-reference SOP-IDs>>`. Where the equipment includes a computerized system holding or controlling GxP-relevant data, the software-related checks here are coordinated with the computerized system validation under `<<FILL: CSV SOP-ID>>` and do not replace it.

Where commissioning and a science- and risk-based approach under ASTM E2500 are used, the credit taken from verified commissioning, FAT, and SAT activities into this IQ is defined in the qualification plan `<<FILL: plan ref>>`, and the supporting records are referenced, not repeated, at each test case below.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Validation engineer / author | Writes this protocol, defines test cases and acceptance criteria, executes or oversees execution, raises deviations, and writes the report. |
| Engineering / equipment SME | Confirms the design intent, battery limits, drawings, and utility specifications, and supports execution and any rectification. |
| Vendor / installer | Supplies certificates (materials, pressure test, welding, surface finish), as-built drawings, and the FAT/SAT records relied on, and corrects installation defects. |
| Metrology / calibration | Confirms each measuring instrument is calibrated against a standard traceable to a national reference, within tolerance, and in date. |
| Automation / IT | Confirms control software, firmware, and configuration versions, and access control where the panel is computerized. |
| Quality Assurance | Reviews and approves the protocol, deviations, and report, and owns the disposition to release to OQ. |

## 4. Definitions

- **Installation qualification (IQ)**: documented verification that equipment, as received and as installed, conforms to the approved design and the manufacturer's recommendations, in the correct environment with the correct utilities.
- **Design qualification (DQ)**: the prior stage that confirmed the approved design itself meets the user requirements; IQ checks the build against that design, it does not re-decide the design.
- **As-built / as-installed**: the actual physical equipment and its connections as they exist after installation, captured on red-lined or reissued drawings.
- **Materials of construction (MOC)**: the alloys, polymers, elastomers, and finishes of every component, especially product-contact (wetted) surfaces, evidenced by material certificates.
- **Battery limit**: the defined physical boundary where this equipment's scope ends and a utility or adjacent system begins.
- **Loop / instrument calibration**: verification that a measuring device, alone or as part of its signal loop, reads true against a traceable standard within the stated tolerance.
- **Verification by reference**: accepting a check on the basis of a named, approved supporting record (a certificate, a FAT result, a SAT result) rather than re-performing it, with the record attached or controlled.

## 5. Equipment description and as-built identity

| Field | Entry |
|---|---|
| Equipment name / function | `<<FILL: e.g. 2000 L jacketed mixing vessel>>` |
| Equipment tag / asset no. | `<<FILL>>` |
| Manufacturer / model | `<<FILL>>` |
| Serial number | `<<FILL>>` |
| Year of manufacture | `<<FILL>>` |
| Location (room / grid) | `<<FILL>>` |
| GMP classification of area | `<<FILL: e.g. Grade C / CNC>>` |
| Design pressure / temperature | `<<FILL>>` |
| As-built drawing reference(s) | `<<FILL: P&ID, GA, electrical, isometric numbers + revisions>>` |

## 6. Prerequisites (verify before execution begins)

Do not start execution until each prerequisite is true. Record the evidence reference for each.

| Prerequisite | Acceptance | Evidence ref |
|---|---|---|
| DQ approved | DQ report `<<FILL>>` approved by QA | `<<FILL>>` |
| Drawings issued and current | URS, FS/DS, and as-built drawings at the revision listed in section 5 | `<<FILL>>` |
| FAT / SAT complete (if relied on) | FAT and SAT reports approved, punch list closed or risk-assessed | `<<FILL>>` |
| Safety sign-off | Equipment de-energized / locked out as required; permit in place | `<<FILL>>` |
| Calibrated test equipment available | Reference instruments in calibration, certificates attached | `<<FILL>>` |
| Executors trained | Executors trained on this protocol and the equipment | `<<FILL>>` |

## 7. Test cases

Execute each test case in order. Record the actual result, attach the evidence, and mark Pass or Fail. Any Fail or any departure from the protocol is a deviation handled per section 9. A test case may be satisfied by reference to a named supporting record where section 2 permits it; record the reference in the Actual result column.

### 7.1 Installation against design and battery limits

| Step | Check | Acceptance criterion | Actual result | Pass/Fail |
|---|---|---|---|---|
| 7.1.1 | Equipment installed in the correct room / location and orientation | Matches GA drawing `<<FILL>>` and area classification in section 5 | | |
| 7.1.2 | Footprint, clearances, drainage, and access for operation and cleaning | Matches drawing; access and slope-to-drain as designed | | |
| 7.1.3 | Connections to adjacent systems at the defined battery limits | Each tie-in present, correct size and type, per P&ID `<<FILL>>` | | |
| 7.1.4 | As-built drawings reflect the installation (red-lines captured) | Field condition matches drawings, or red-lines raised for reissue | | |

### 7.2 Components and materials of construction (MOC)

| Step | Check | Acceptance criterion | Actual result | Pass/Fail |
|---|---|---|---|---|
| 7.2.1 | Major components present and match the approved bill of materials | Every BOM line present, correct part / model | | |
| 7.2.2 | Product-contact (wetted) material certificates | Each wetted component MOC matches design (e.g. 316L), certificate (e.g. EN 10204 3.1) attached | | |
| 7.2.3 | Elastomers and seals (gaskets, O-rings, diaphragms) | Material and grade as specified, food/pharma grade where required, certificates attached | | |
| 7.2.4 | Surface finish of wetted surfaces | Meets specified Ra (e.g. `<<FILL: Ra <= 0.5 um>>`), surface-finish certificate or measurement attached | | |
| 7.2.5 | Slope, drainability, and dead-leg control on product piping | No untenable dead legs; slopes per design; weld map / isometric attached | | |
| 7.2.6 | Welding documentation for product-contact welds | Weld log, welder qualification, and inspection (boroscope / dye penetrant) records attached | | |
| 7.2.7 | Pressure / leak test on pressure-bearing parts | Test certificate at design pressure, no leak / no unacceptable drop, attached | | |
| 7.2.8 | Lubricants on or near product-contact zones | Food-grade where contact is possible (e.g. NSF H1), specification attached | | |

### 7.3 Utility connections

| Step | Utility / check | Acceptance criterion | Actual result | Pass/Fail |
|---|---|---|---|---|
| 7.3.1 | Electrical supply | Voltage, phase, frequency match nameplate; supply tag matches P&ID | | |
| 7.3.2 | Earthing / equipotential bonding | Bond present and continuous; resistance within limit per `<<FILL>>` | | |
| 7.3.3 | Compressed air / instrument air | Correct grade and pressure; filter and regulator fitted; connection tag correct | | |
| 7.3.4 | Process / utility water (PW, WFI) and steam (pure / plant) | Correct grade, line tag matches P&ID, point-of-use fittings as designed | | |
| 7.3.5 | Heating / cooling media (jacket supply / return) | Correct media, correct supply and return tags, isolation valves present | | |
| 7.3.6 | Nitrogen / process gas | Correct gas and grade, point-of-use and filtration as designed | | |
| 7.3.7 | Drainage and vent | Drains and vents connected, trapped / sloped per design, no cross-connection | | |

### 7.4 Instrumentation and calibration

List every measuring instrument on the equipment that produces a GMP-relevant value. Confirm each is the specified make and range, is calibrated against a traceable standard within tolerance, and is in date.

| Instrument tag | Type / range | Calibrated within tolerance | Tolerance | Cert. no. | Cal due | Pass/Fail |
|---|---|---|---|---|---|---|
| `<<FILL: TT-2201>>` | `<<FILL: RTD, 0 to 150 C>>` | `<<FILL: yes>>` | `<<FILL: +/- 0.5 C>>` | `<<FILL>>` | `<<FILL>>` | |
| `<<FILL: PT-2201>>` | `<<FILL: pressure, 0 to 6 bar>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | |
| `<<FILL: WT-2201>>` | `<<FILL: load cell, 0 to 3000 kg>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | |

| Step | Check | Acceptance criterion | Actual result | Pass/Fail |
|---|---|---|---|---|
| 7.4.1 | All listed instruments calibrated, in tolerance, in date | Every row above Pass | | |
| 7.4.2 | Each instrument is the make, model, and range specified in the design | Matches DS / datasheet `<<FILL>>` | | |
| 7.4.3 | Reference (test) instruments used were themselves in calibration | Certificates of the reference standards attached | | |
| 7.4.4 | Instruments are tagged, labelled, and on the calibration master list | Asset on master list `<<FILL>>` with assigned interval | | |

### 7.5 Software, firmware, and configuration

Read and record the actual version installed for every controlling element. Do not test function here; that is OQ. IQ records what is installed so any later change is detectable.

| Step | Element | Specified version | Installed version | Pass/Fail |
|---|---|---|---|---|
| 7.5.1 | PLC firmware | `<<FILL>>` | `<<FILL>>` | |
| 7.5.2 | HMI / SCADA application | `<<FILL>>` | `<<FILL>>` | |
| 7.5.3 | Recipe / configuration file (with checksum/version) | `<<FILL>>` | `<<FILL>>` | |
| 7.5.4 | Drive / VFD firmware | `<<FILL>>` | `<<FILL>>` | |
| 7.5.5 | Operating system / patch level of any workstation | `<<FILL>>` | `<<FILL>>` | |

| Step | Check | Acceptance criterion | Actual result | Pass/Fail |
|---|---|---|---|---|
| 7.5.6 | Access control / user roles configured on a computerized panel | Roles configured per spec; no shared generic accounts where unique IDs are required | | |
| 7.5.7 | System date, time, and time zone correct and synchronized | Within `<<FILL: tolerance>>` of the reference time source | | |
| 7.5.8 | Audit trail enabled where GMP data is created or changed | Audit trail on and cannot be disabled by ordinary users | | |

### 7.6 Documentation and spares

| Step | Check | Acceptance criterion | Actual result | Pass/Fail |
|---|---|---|---|---|
| 7.6.1 | Operating and maintenance manuals supplied | Manuals present, legible, in the required language | | |
| 7.6.2 | As-built drawings handed over | P&ID, GA, electrical, isometrics at as-built revision, archived | | |
| 7.6.3 | Vendor certificates compiled | Material, weld, pressure, surface-finish, and conformity certificates filed and indexed | | |
| 7.6.4 | Preventive maintenance defined and loaded | PM plan created in the CMMS, asset `<<FILL>>` registered | | |
| 7.6.5 | Critical and recommended spares list received | Spares list present; critical spares procured or on order, stock location recorded | | |
| 7.6.6 | Cleaning and changeover instructions available (input to cleaning validation) | Draft cleaning SOP / instructions present, referenced to cleaning validation `<<FILL>>` | | |

## 8. Acceptance criteria

IQ is acceptable, and the equipment may be released to OQ, only when all of the following are true:

- Every test case in section 7 is marked Pass, or its Fail is resolved through a closed deviation with documented justification that does not compromise fitness for OQ.
- Every product-contact material of construction matches the approved design and is evidenced by a certificate, with no wetted surface unverified.
- Every GMP-relevant instrument is calibrated against a traceable standard, within tolerance, and in date.
- Every controlling software, firmware, and configuration version is recorded as installed.
- The documentation set, PM plan, and critical spares are in place.
- All deviations are closed or formally accepted by QA before release.

A single open Fail on a product-contact MOC, a calibration, or a software version is not eligible for release until resolved.

## 9. Deviations and handling

Any Fail, out-of-tolerance reading, missing certificate, version mismatch, or departure from this protocol is recorded as a deviation per `<<FILL: deviation SOP-ID>>` at the point it is found. Each deviation states the affected step, the actual condition, the impact on fitness for OQ, the correction and corrective action, and the QA disposition. Execution may continue on unaffected test cases while a deviation is open, but the equipment is not released to OQ until every deviation is closed or formally accepted. Do not edit an executed result; line through, initial, date, and record the reason, then re-execute under the deviation.

## 10. Summary report

On completion, the validation owner issues IQ summary report `<<FILL: report number>>` recording: the equipment identity, the test cases executed with their Pass/Fail outcome, every deviation and its resolution, the as-built drawing set and certificate index, the calibration and software-version registers, the spares and PM status, and an explicit conclusion that installation conforms to the approved design and that the equipment is, or is not, released to operational qualification. QA approves the report.

## 11. Attachments

| No. | Attachment |
|---|---|
| 1 | As-built drawings (P&ID, GA, electrical, isometrics) at as-built revision |
| 2 | Material certificates for product-contact components (e.g. EN 10204 3.1) |
| 3 | Weld log, welder qualification, weld inspection records |
| 4 | Pressure / leak test certificate |
| 5 | Surface-finish records for wetted surfaces |
| 6 | Calibration certificates for fitted instruments and for reference standards used |
| 7 | Software / firmware / configuration version evidence (screenshots, checksums) |
| 8 | FAT and SAT reports relied on, and punch list closure |
| 9 | PM plan, critical spares list, and bill of materials |

## 12. References

> 21 CFR 211.63 (equipment design, size, and location) and 21 CFR 211.65 (equipment construction).
> 21 CFR 211.67 (equipment cleaning and maintenance) and 21 CFR 211.68 (automatic, mechanical, and electronic equipment).
> For medical-device manufacturing equipment, the production and process controls historically at 21 CFR 820.70: under QMSR (21 CFR Part 820), effective 2 February 2026, the legacy section is reserved and the device quality management system incorporates ISO 13485:2016 by reference.
> EU GMP Annex 15 (Qualification and Validation), 2015 revision, sections on DQ, IQ, and OQ.
> ASTM E2500, Standard Guide for Specification, Design, and Verification of Pharmaceutical and Biopharmaceutical Manufacturing Systems and Equipment.
> ISPE Baseline Guide, Commissioning and Qualification (for the science- and risk-based approach and reuse of FAT/SAT records).
> ICH Q9, Quality Risk Management (for risk-based scoping of test cases).
> EN 10204 (types of inspection documents / material certificates) and the applicable pressure-equipment standard (for example ASME BPVC or PED 2014/68/EU) where relevant.

Confirm the current version and clause numbers of each reference before issue.

## 13. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 14. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Validation) | `<<FILL>>` | | |
| Reviewer (Engineering) | `<<FILL>>` | | |
| Reviewer (Metrology) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows selected executed test cases for an example 2000 L jacketed mixing vessel, so you can see the level of detail an inspector expects. The company, tags, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Equipment | 2000 L jacketed mixing vessel, tag MV-2201, 316L electropolished, manufacturer `<<FILL: manufacturer>>`, serial 7741, room 220 (Grade C) |
| As-built drawings | P&ID PID-220-04 rev C, GA GA-MV2201 rev B, electrical EL-220-02 rev A, all red-lines closed and reissued |

**Test case 7.2 (MOC) extract**

| Step | Check | Actual result | Pass/Fail |
|---|---|---|---|
| 7.2.2 | Wetted material certificate | Shell, dish, and ports 316L; EN 10204 3.1 cert MC-7741-01 attached | Pass |
| 7.2.3 | Elastomers | Manway and port gaskets EPDM, USP Class VI, cert MC-7741-04 attached | Pass |
| 7.2.4 | Surface finish | Wetted Ra measured 0.38 um against spec Ra <= 0.5 um, report SF-7741 attached | Pass |
| 7.2.6 | Product-contact welds | 42 welds logged, welder WQ-118 qualified, 100 percent boroscoped, weld map WM-7741 attached | Pass |
| 7.2.7 | Pressure test | Jacket tested at 4 bar, no drop over 30 min, cert PT-7741 attached | Pass |

**Test case 7.4 (instrumentation) extract**

| Instrument tag | Type / range | In tolerance | Tolerance | Cert. no. | Cal due |
|---|---|---|---|---|---|
| TT-2201 | RTD, 0 to 150 C | Yes | +/- 0.5 C | CAL-2201-T | 14 Dec 2026 |
| PT-2201 | Pressure, 0 to 6 bar | Yes | +/- 0.05 bar | CAL-2201-P | 14 Dec 2026 |
| WT-2201 | Load cell, 0 to 3000 kg | Yes | +/- 1.0 kg | CAL-2201-W | 02 Dec 2026 |

**Test case 7.5 (software) extract**

| Element | Specified | Installed | Pass/Fail |
|---|---|---|---|
| PLC firmware | v3.2.1 | v3.2.1 | Pass |
| HMI application | MV2201-HMI v1.4 | MV2201-HMI v1.4 | Pass |
| Recipe configuration | RCP-MV2201 v2 (CRC 0x8C1A) | RCP-MV2201 v2 (CRC 0x8C1A) | Pass |

**Deviation raised**

One deviation, DEV-2026-0207: the supplied compressed-air filter at step 7.3.3 was 5 um where the design called for 0.2 um at the point of use. Impact: air could contact product space. Correction: 0.2 um filter fitted and tagged. Corrective action: vendor BOM corrected. QA disposition: closed, no impact on OQ. The vessel was released to OQ after closure.

In this specimen the team evidenced every wetted material with a certificate, measured the actual surface finish rather than accepting a generic claim, recorded the exact installed software versions and the recipe checksum so any future change is detectable, caught a wrong air filter that an explanation alone could not wave away, and held release to OQ until the deviation was closed. That sequence, verify against design to find the gap to deviation to closure to release, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this protocol prevents

- IQ executed with no material certificates for product-contact surfaces, so the wetted alloy is asserted but not proven.
- Surface finish claimed from the datasheet with no measurement on the actual equipment.
- Instruments listed as fitted but never confirmed calibrated against a traceable standard, or calibrated by a reference instrument that was itself out of calibration.
- Software and firmware versions not recorded at IQ, so a later undocumented change cannot be detected.
- As-built drawings never reconciled to the field, leaving the controlled drawing set wrong from day one.
- A wrong component or utility connection (filter grade, gasket material, gas grade) accepted because the check was a tick box with no acceptance criterion.
- Commissioning, FAT, or SAT results credited into IQ with no documented basis and no attached record, so the reuse is unverifiable.
- Equipment released to OQ with open IQ deviations.

## How to adapt this protocol

1. Set your document number, owner, equipment tag, report number, and effective date in the header.
2. Replace the equipment description and as-built identity in section 5 with your real item, drawings, and revisions.
3. Trim or extend the test cases in section 7 to your equipment type. A lyophilizer adds shelf and condenser checks; a filling line adds format-part and conveyor checks; a chromatography skid adds column-hardware and flow-path checks. Keep the MOC, utility, instrument, software, and documentation structure.
4. List your actual instruments in section 7.4 with their real ranges, tolerances, and calibration certificate numbers.
5. State, in section 2 and the qualification plan, exactly which commissioning, FAT, and SAT records you are relying on under ASTM E2500, and attach them.
6. Point the cross-references in sections 2, 7.6, and 9 to your real CSV, cleaning validation, and deviation procedures.
7. Confirm every regulation in section 12 against the current published version before issue.
