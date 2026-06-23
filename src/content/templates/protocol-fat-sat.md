---
title: "Factory and Site Acceptance Test (FAT/SAT) Protocol"
description: "A plug-and-play protocol for running and documenting Factory Acceptance Test and Site Acceptance Test of GxP equipment, with test cases, a punch list, the rules for reusing FAT evidence to reduce IQ and OQ, acceptance criteria, a filled specimen, and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Protocol"
pillar: "equipment-qualification"
relatedArticles: ["equipment-qualification-lifecycle", "commissioning-qualification-astm-e2500", "factory-site-acceptance-testing"]
tags: ["fat", "sat", "equipment qualification", "commissioning", "astm e2500", "protocol", "iq oq", "gmp"]
tier: "Intermediate"
---

This is a ready-to-use FAT and SAT protocol. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach the engineering drawings and the supplier test plan, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Factory and Site Acceptance Test Protocol for `<<FILL: equipment / system>>` |
| Document number | `<<FILL: PRT-ID, e.g. FAT-SAT-ENG-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Engineering / Validation>>` |
| Site / area | `<<FILL: site, building, room, area>>` |
| Equipment / system ID | `<<FILL: asset / tag number>>` |
| Supplier / OEM | `<<FILL: vendor name>>` |
| Linked URS | `<<FILL: URS number this test verifies against>>` |
| Linked qualification | `<<FILL: IQ/OQ protocol numbers that consume this evidence>>` |

## 1. Purpose

This protocol defines how `<<FILL: COMPANY NAME>>` runs and documents the Factory Acceptance Test (FAT) at the supplier site and the Site Acceptance Test (SAT) after installation, for `<<FILL: equipment / system name>>`. FAT confirms the equipment was built and performs to the purchase specification and the user requirements before it ships. SAT confirms it arrived undamaged, was installed correctly against the right utilities, and performs in its final location. Both tests generate evidence that can be reused to shorten Installation Qualification (IQ) and Operational Qualification (OQ) when the reuse rules in section 9 are met.

## 2. Scope

This protocol applies to the equipment listed in the header at `<<FILL: site / area>>`. It covers mechanical and dimensional build, utilities and connections, functional operation, safety interlocks and emergency stops, the control system and alarms, and, where applicable, software and data integrity behavior. It does not replace IQ, OQ, or Performance Qualification (PQ), which are governed by `<<FILL: cross-reference qualification SOP-ID>>`. FAT and SAT are commissioning activities; this protocol uses a risk-based, science-based approach consistent with ASTM E2500 so that verification effort follows product and process risk.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Project engineer / system owner | Owns the protocol, schedules FAT and SAT, confirms the equipment matches the URS and purchase order, and dispositions the punch list. |
| Supplier / OEM | Presents the equipment built and tested, supplies the supplier test plan and certificates, executes vendor-led test cases, and closes punch items they own. |
| Validation | Reviews FAT and SAT for evidence that can be reused into IQ and OQ, and confirms the reuse criteria in section 9 are met before any test is credited. |
| Subject matter expert (process / automation) | Witnesses test cases, judges functional and control results against the acceptance criteria, and confirms the hardest operating cases were challenged. |
| Quality Assurance | Approves the protocol and the report, confirms GxP-critical test cases were witnessed and documented, and owns the disposition of deviations. |
| Calibration / metrology | Confirms instruments used to measure FAT and SAT results are calibrated and traceable before testing starts. |

## 4. Definitions

- **FAT (Factory Acceptance Test)**: structured testing at the supplier site, before shipment, to confirm the equipment meets the purchase specification and the user requirements.
- **SAT (Site Acceptance Test)**: testing after delivery and installation, in the final location, to confirm no transit damage, correct installation, and correct performance on site utilities.
- **Punch list**: the running register of open items, defects, and deviations found during FAT or SAT, each with an owner, a classification, and a resolution before acceptance.
- **Critical test case**: a test that verifies a function with direct product, patient, or data impact (for example a safety interlock, a sterilization cycle parameter, a control limit, an alarm, or an audit trail behavior).
- **Reuse of evidence**: crediting a documented commissioning result toward IQ or OQ rather than repeating it, allowed only when the conditions of section 9 are satisfied.
- **GEP (Good Engineering Practice)**: established engineering methods, applied so that commissioning is documented well enough to support reuse into qualification.

## 5. Prerequisites

Confirm and record each prerequisite before testing starts. FAT does not begin until the left column is met; SAT does not begin until the right column is met.

| FAT prerequisite | SAT prerequisite |
|---|---|
| Approved URS available and current | FAT report approved, punch list closed or risk-accepted |
| Approved supplier test plan / FAT protocol | Equipment received, transit damage inspection complete |
| Drawings (P&ID, GA, electrical, control narrative) issued | Installation complete against approved drawings |
| Test instruments calibrated and traceable | Site utilities connected, verified, and within spec |
| Software version and configuration recorded | Software version reconciled to the FAT version |
| Safety arrangements for energized testing in place | Lockout/tagout and site safety arrangements in place |
| Personnel named and roles assigned | Personnel named, IQ readiness confirmed |

| Item | Entry |
|---|---|
| URS reference and version | `<<FILL>>` |
| Drawing set and revision | `<<FILL>>` |
| Software / firmware version | `<<FILL>>` |
| Calibration certificates attached | Yes / No |

## 6. Test cases

Number every test case, state the requirement it verifies (trace to the URS line), state the method, state the acceptance criterion before testing, and record the actual result, the pass or fail, and the witness. A test case with no pre-stated acceptance criterion is not a test; it is an observation. The categories below are the minimum set; add equipment-specific cases.

### 6.1 Mechanical, dimensional, and build verification

| TC | URS ref | Test | Acceptance criterion | Phase |
|---|---|---|---|---|
| `<<FILL: TC-01>>` | `<<FILL>>` | Verify materials of construction against spec and certificates (e.g. 316L for product contact) | Matches spec; mill certificates present | FAT |
| `<<FILL: TC-02>>` | `<<FILL>>` | Verify surface finish on product-contact surfaces | `<<FILL: e.g. Ra at or below 0.5 um>>` | FAT |
| `<<FILL: TC-03>>` | `<<FILL>>` | Verify overall dimensions and footprint against GA drawing | Within drawing tolerance | FAT |
| `<<FILL: TC-04>>` | `<<FILL>>` | Verify no transit damage; reconcile delivered against shipping manifest | No damage; all items received | SAT |

### 6.2 Utilities and connections

| TC | URS ref | Test | Acceptance criterion | Phase |
|---|---|---|---|---|
| `<<FILL: TC-05>>` | `<<FILL>>` | Verify electrical supply (voltage, phase, frequency) matches nameplate | Within nameplate tolerance | SAT |
| `<<FILL: TC-06>>` | `<<FILL>>` | Verify compressed air / process gas pressure and quality at the connection | `<<FILL: e.g. clean dry air, 6 bar nominal>>` | SAT |
| `<<FILL: TC-07>>` | `<<FILL>>` | Verify water for injection or purified water connection, where applicable | Correct quality grade connected and identified | SAT |
| `<<FILL: TC-08>>` | `<<FILL>>` | Verify drainage and waste routing | Drains free, correctly routed, no cross-connection | SAT |

### 6.3 Functional operation

| TC | URS ref | Test | Acceptance criterion | Phase |
|---|---|---|---|---|
| `<<FILL: TC-09>>` | `<<FILL>>` | Run a complete normal operating cycle | Cycle completes; all steps in sequence | FAT, repeat at SAT |
| `<<FILL: TC-10>>` | `<<FILL>>` | Verify key process parameter holds at setpoint across the working range | `<<FILL: e.g. temperature within +/- 1 C of setpoint>>` | FAT, repeat at SAT |
| `<<FILL: TC-11>>` | `<<FILL>>` | Verify throughput / capacity at maximum rated load | Meets rated capacity within tolerance | FAT |
| `<<FILL: TC-12>>` | `<<FILL>>` | Verify changeover / recipe selection works as specified | Correct recipe loads and runs | FAT, repeat at SAT |

### 6.4 Safety: interlocks, guards, and emergency stop

| TC | URS ref | Test | Acceptance criterion | Phase |
|---|---|---|---|---|
| `<<FILL: TC-13>>` | `<<FILL>>` | Trigger each emergency stop and confirm safe shutdown | Equipment stops to safe state; restart requires deliberate reset | FAT, repeat at SAT |
| `<<FILL: TC-14>>` | `<<FILL>>` | Open each interlocked guard / door during operation | Motion stops; operation cannot resume until closed and reset | FAT, repeat at SAT |
| `<<FILL: TC-15>>` | `<<FILL>>` | Verify pressure relief / over-temperature / over-speed protection | Protective device acts at the set point | FAT |
| `<<FILL: TC-16>>` | `<<FILL>>` | Verify safety-critical functions after power loss and recovery | Equipment returns to safe state; no unexpected restart | FAT, repeat at SAT |

### 6.5 Controls, alarms, and (where applicable) software and data integrity

| TC | URS ref | Test | Acceptance criterion | Phase |
|---|---|---|---|---|
| `<<FILL: TC-17>>` | `<<FILL>>` | Verify each alarm triggers at its set point and annunciates | Alarm raised, displayed, logged at correct value | FAT, repeat at SAT |
| `<<FILL: TC-18>>` | `<<FILL>>` | Verify access control: roles, privileges, and password rules | Only authorized roles reach restricted functions | FAT |
| `<<FILL: TC-19>>` | `<<FILL>>` | Verify audit trail captures who, what, when, old value, new value, reason | Required fields present, secure, time-stamped | FAT |
| `<<FILL: TC-20>>` | `<<FILL>>` | Verify time synchronization and date/time format | Clock synced to site source; format correct | FAT, repeat at SAT |
| `<<FILL: TC-21>>` | `<<FILL>>` | Verify data backup, restore, and power-loss data retention | Data recoverable; no loss across a power cycle | FAT |

Tests that depend on the final location, the site clock, or site utilities are repeated at SAT even when passed at FAT. Tests with no site dependence may be reused per section 9.

## 7. Punch list

Every defect, open item, or deviation found during FAT or SAT is logged on the punch list, classified, assigned, and resolved or formally risk-accepted before acceptance. Do not accept the equipment with open critical items.

| Class | Definition | Effect on acceptance |
|---|---|---|
| A (critical) | Affects safety, product quality, data integrity, or a GxP-critical function | Must be closed before acceptance; no risk-acceptance shortcut |
| B (major) | Affects performance or fit but not safety, quality, or data | Closed before acceptance, or risk-accepted with QA approval and a due date |
| C (minor) | Cosmetic or documentation item with no functional impact | May be carried to a tracked snag list with a committed close date |

| Item no. | Description | Class | Raised at (FAT/SAT) | Owner | Resolution | Closed (date) |
|---|---|---|---|---|---|---|
| `<<FILL: 1>>` | `<<FILL>>` | `<<FILL: A/B/C>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: 2>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 8. Deviations

Any test result outside its acceptance criterion, any departure from this protocol, and any test that cannot be executed as written is recorded as a protocol deviation, given an impact assessment, and dispositioned before the affected result is accepted. Where the issue is also an equipment defect, it is cross-listed on the punch list. A failed critical test case is investigated per `<<FILL: deviation SOP-ID>>` and is not re-tested into a pass without a documented root cause and fix.

## 9. Reusing FAT and SAT evidence to reduce IQ and OQ

FAT and SAT are commissioning activities, but their documented results can be credited toward IQ and OQ instead of being repeated, which is the main reason a well run FAT pays back. Reuse is allowed only when all of the conditions below are recorded and approved by Validation and QA. This is the controlled bridge between commissioning and qualification described in ASTM E2500 and ICH Q9 risk thinking.

A FAT or SAT result may be credited to IQ or OQ only when:

1. The test was executed against a pre-approved acceptance criterion traced to the URS, not a free-form observation.
2. The test was witnessed by the named SME, and QA witnessed every GxP-critical test case.
3. The measuring instruments were calibrated and traceable at the time of test, with certificates attached.
4. The equipment configuration and software version at test are recorded and are identical to the version installed on site (reconciled at SAT).
5. The result, the raw data or printout, and the pass or fail are retained and retrievable as a controlled record.
6. The protocol, results, and reviewer signatures meet the same data integrity standard expected of a qualification record under ALCOA+ thinking: each result is traceable to the person who recorded it, readable, captured at the time the work was done, kept as the first or a true certified copy, factually correct, with nothing missing, free of contradictions, durable for the retention period, and retrievable when needed.

Typical reuse pattern: build, material, and configuration checks from FAT credit into IQ; functional and control test cases from FAT credit into OQ, provided they have no site dependence; safety, utility, and clock-dependent cases are confirmed or repeated at SAT and credited from there. Record each credited test in the IQ/OQ traceability so an inspector can follow the line from URS to FAT/SAT result to qualification credit. Where a test cannot meet all six conditions, repeat it in qualification rather than crediting it.

## 10. Acceptance criteria

FAT is accepted when all of the following are true:

- Every critical test case (sections 6.3 to 6.5) passed against its pre-stated acceptance criterion and was witnessed and documented.
- All Class A punch items are closed; Class B items are closed or risk-accepted with QA approval and a due date.
- The software version, configuration, and drawing set tested are recorded for reconciliation at SAT.
- All deviations are recorded and dispositioned.
- The FAT report is complete, signed, and approved.

SAT is accepted when all of the following are true:

- No transit damage; delivered scope reconciles to the manifest.
- Installation matches the approved drawings, and site utilities are connected, verified, and within spec.
- The on-site software version reconciles to the FAT version.
- All site-dependent and clock-dependent test cases passed in the final location.
- All Class A punch items are closed; remaining items are tracked with committed dates.
- The SAT report is complete, signed, and approved, and IQ readiness is confirmed.

## 11. Reports

On completion of FAT, the project engineer issues the FAT report summarizing test results against criteria, the punch list status, all deviations and their disposition, the recorded software and configuration version, and the explicit list of results proposed for reuse into IQ or OQ. The SAT report does the same for the on-site test and confirms IQ readiness. Both reports are approved by QA.

| Item | Entry |
|---|---|
| FAT report number | `<<FILL>>` |
| SAT report number | `<<FILL>>` |
| Results proposed for IQ/OQ reuse | `<<FILL: list TC numbers and target protocol>>` |

## 12. Attachments

| No. | Attachment |
|---|---|
| 1 | Approved URS (referenced) |
| 2 | Supplier test plan / FAT protocol and certificates |
| 3 | Drawing set (P&ID, GA, electrical, control narrative) with revisions |
| 4 | Calibration certificates for test instruments |
| 5 | Raw data, printouts, and screenshots per test case |
| 6 | Completed punch list |
| 7 | Software version and configuration record |

## 13. References

> 21 CFR 211.63 (equipment design), 211.65 (construction), 211.68 (automatic, mechanical, and electronic equipment).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> EU GMP Annex 11 (Computerised Systems), where the equipment has GxP software.
> ASTM E2500, Standard Guide for Specification, Design, and Verification of Pharmaceutical and Biopharmaceutical Manufacturing Systems and Equipment.
> ICH Q9, Quality Risk Management (for the risk-based test scope and reuse decisions).
> ISPE Baseline Guide Volume 5, Commissioning and Qualification (second edition).
> ISO 12100 (safety of machinery, for interlock and emergency stop test design), where applicable.

Confirm the current version and clause numbers of each reference before issue.

## 14. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 15. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Engineering) | `<<FILL>>` | | |
| Reviewer (Validation) | `<<FILL>>` | | |
| SME witness (Process / Automation) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows representative test cases, a punch item, and the reuse decision completed for an example autoclave / steam sterilizer, so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Equipment / system | Steam sterilizer STER-204, supplier-built, double-door, GxP control system |
| URS reference | URS-STER-204 v2.0 |
| Software / firmware at FAT | Control firmware v4.2.1, recipe set 2026-A |

Selected test results:

| TC | Test | Acceptance criterion | Result at FAT | Pass | Witness |
|---|---|---|---|---|---|
| TC-09 | Run a full sterilization cycle at the validated setpoint | Cycle completes; chamber holds 121 C for the programmed dwell | Cycle completed; chamber held 121.3 C for full dwell | Pass | M. Chen (SME) |
| TC-13 | Trigger each emergency stop | Stops to safe state; manual reset required to restart | Both E-stops stopped the cycle; restart required reset | Pass | M. Chen, QA witnessed |
| TC-17 | Door-open-with-pressure alarm | Alarm at residual chamber pressure above set point; cycle inhibited | Alarm raised at set point; door interlock held | Pass | M. Chen, QA witnessed |
| TC-19 | Audit trail on a recipe parameter change | Records who, old value, new value, time, reason | All fields captured and time-stamped | Pass | M. Chen, QA witnessed |
| TC-05 | Electrical supply matches nameplate | Within nameplate tolerance | Deferred to SAT (site supply only) | n/a | n/a |

Punch list extract:

| Item | Description | Class | Raised at | Owner | Resolution | Closed |
|---|---|---|---|---|---|---|
| 1 | Chamber drain temperature probe (non-controlling monitoring probe, not used to control or release the sterilization cycle, so Class B) reads 0.6 C low against the calibrated reference | B | FAT | Supplier | Probe re-spanned and re-verified against reference | Closed before ship |
| 2 | Recipe-edit screen tooltip text misspelled | C | FAT | Supplier | Carried to snag list, committed close at SAT | Open, tracked |

Reuse decision:

| Test | Credited to | Basis |
|---|---|---|
| TC-09 (functional cycle, no site dependence) | OQ | Pre-approved criterion, SME witnessed, instruments calibrated, version recorded |
| TC-19 (audit trail) | OQ | QA witnessed, data integrity record retained |
| TC-05 (electrical supply) | IQ, at SAT only | Site-utility dependent; confirmed in final location, then credited |
| TC-13 (emergency stop) | OQ, confirmed at SAT | Safety-critical; passed at FAT, repeated on site, credited from SAT |

In this example the team set acceptance criteria before testing, had QA witness every GxP-critical case, recorded the firmware version for reconciliation, closed the Class B probe defect before shipment, and credited only the FAT results that met all six reuse conditions while deferring the site-dependent ones to SAT. That sequence, criteria first, witnessed, version-controlled, defects closed, evidence credited under stated rules, is exactly what a reviewer is expected to see.

## Common inspection findings this protocol prevents

- Test cases run with no pre-stated acceptance criterion, so the record shows an observation, not a verified pass or fail.
- GxP-critical functions (interlocks, alarms, audit trail) tested at FAT but not witnessed, so the result cannot be credited.
- FAT results reused into IQ or OQ with no record that the on-site software version matched the FAT version.
- Site-dependent tests (utilities, clock synchronization, transit damage) credited from FAT and never repeated on site.
- A failed critical test re-run into a pass with no documented root cause or fix.
- The equipment accepted and used with open Class A punch items, or with the punch list never closed out.
- Calibration of the test instruments not recorded, so measured FAT results have no traceability.
- No traceability from the URS line to the FAT/SAT result to the qualification credit, so an inspector cannot follow the reuse claim.

## How to adapt this protocol

1. Set your document number, owner, equipment ID, supplier, and effective date in the header.
2. Replace the test cases in section 6 with your equipment-specific cases, each traced to a real URS line and given a pre-stated acceptance criterion. Keep the safety and controls categories; add process-specific cases.
3. Match the punch list classification in section 7 to your engineering and quality conventions, and point the deviation cross-reference in section 8 to your real deviation procedure.
4. State which FAT and SAT results you intend to credit into which IQ and OQ protocols in section 9, and confirm each one meets all six reuse conditions before you claim the credit.
5. Point the qualification cross-references to your real IQ, OQ, and PQ protocols, and confirm IQ readiness at SAT acceptance.
6. Confirm every regulation in section 13 against the current published version before issue.
