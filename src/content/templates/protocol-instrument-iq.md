---
title: "Instrument Installation Qualification (IQ) Protocol"
description: "A plug-and-play installation qualification protocol for a laboratory instrument: delivery and component verification, utilities and environment, software and firmware versions, calibration certificates, documentation, test cases with expected and actual results, deviations, and summary, with a worked HPLC specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Protocol"
pillar: "equipment-qualification"
relatedArticles: ["analytical-instrument-qualification","equipment-qualification-lifecycle"]
tags: ["installation qualification", "iq", "instrument qualification", "usp 1058", "annex 15", "calibration", "hplc"]
tier: "Intermediate"
---

This is a ready-to-use installation qualification protocol for a laboratory instrument. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach the vendor documents and calibration certificates the protocol calls for, and route it through your normal document control, review, and approval. A worked filled specimen for an HPLC system follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

IQ proves one thing: that the instrument arrived complete, undamaged, and to specification, and was installed correctly in the right environment with the right utilities, software, and documentation, before anyone tries to make it perform. It is the second stage of the qualification lifecycle after design qualification (DQ) and before operational qualification (OQ) and performance qualification (PQ). Everything OQ later relies on (a stable power supply, the correct firmware, a calibrated detector lamp) is established and recorded here.

## Document control header

| Field | Entry |
|---|---|
| Document title | Installation Qualification Protocol for `<<FILL: instrument type / model>>` |
| Document number | `<<FILL: PRT-ID, e.g. IQ-LAB-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Metrology / Laboratory>>` |
| Site / room | `<<FILL: site, building, laboratory room>>` |
| Linked DQ / OQ / PQ | `<<FILL: DQ ref; OQ ref to follow; PQ ref to follow>>` |
| Linked report | `<<FILL: IQ summary report number to be issued>>` |

## 1. Purpose

This protocol defines the checks and acceptance criteria to confirm that instrument `<<FILL: instrument ID / asset number>>` was delivered complete and undamaged, installed correctly at `<<FILL: room / bench>>`, supplied with the correct utilities and environment, loaded with the specified software and firmware, supported by valid calibration and documentation, and is ready to enter operational qualification. The objective is a documented, inspection-ready record that installation matches the approved specification and vendor requirements.

## 2. Scope

This protocol applies to the single instrument identified in the header and section 5, including its modules, the controlling workstation and data system where fitted, and the immediate utilities and environment serving it. It covers verification at installation only. It does not establish operating performance, which is covered by the OQ referenced in the header, and it does not cover routine use, calibration intervals, or change control after qualification, which are governed by `<<FILL: cross-reference SOP-IDs>>`. Where the instrument includes a computerized system holding GxP data, the software-related checks here are coordinated with the computerized system validation under `<<FILL: CSV SOP-ID>>` and do not replace it.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Validation engineer / metrologist | Authors and executes this protocol, records results, raises deviations, and writes the summary report. |
| Instrument / laboratory owner | Confirms the instrument and configuration match the approved DQ and user requirements, and supports execution. |
| Vendor field service engineer | Performs the physical installation and the vendor IQ/commissioning, and supplies installation records, certificates, and version evidence. Vendor records are reviewed and attached, not blindly accepted. |
| IT / system administrator | Confirms network, workstation, time synchronization, and access configuration where a data system is fitted. |
| QC analytical (where applicable) | Confirms the instrument and configuration meet the intended analytical use. |
| Quality Assurance | Reviews and approves the protocol, deviations, and report, and authorizes progression to OQ. |

## 4. Definitions

- **Installation qualification (IQ)**: documented verification that an instrument and its components are received as specified and correctly installed in the selected environment.
- **Design qualification (DQ)**: documented verification, before purchase, that the proposed instrument is fit for its intended use; the input to this IQ.
- **Operational qualification (OQ)**: documented verification that the installed instrument operates as intended across its operating ranges; the next stage after this IQ.
- **Instrument category (USP <1058>)**: a risk-tiered way to sort instruments by complexity so the qualification effort matches the risk. Simpler measuring devices that need little or no separate qualification sit in the lowest tier; routine bench instruments with adjustable parameters sit in the middle tier and need installation and function checks; software-driven analytical systems with a data system sit in the highest tier and need the deepest qualification. The category an instrument falls into sets how much of this protocol applies.
- **Critical component**: a part whose identity, model, or version affects data quality or instrument performance and so must be recorded at installation (for example a detector lamp, a column heater, a firmware version).
- **As-found / as-installed configuration**: the recorded state of hardware, modules, software, and firmware at the time of installation, used as the baseline for later change control.

## 5. Instrument and configuration under qualification

State the instrument category per USP <1058> in section 5.1; the category drives how much of this protocol applies. Group C instruments (the usual case for a chromatograph with a data system) need the full hardware, software, firmware, and environment checks. Group B instruments need installation and module verification but lighter software checks.

### 5.1 Instrument identification

| Field | Entry |
|---|---|
| Instrument type | `<<FILL: e.g. HPLC, GC, dissolution apparatus, balance, plate reader>>` |
| Manufacturer / model | `<<FILL>>` |
| Serial number | `<<FILL>>` |
| Asset / equipment ID | `<<FILL>>` |
| USP <1058> category | `<<FILL: A / B / C with one-line rationale>>` |
| Intended use | `<<FILL: e.g. release and stability assay of small-molecule drug product>>` |
| Location (room / bench) | `<<FILL>>` |
| DQ reference | `<<FILL: DQ document number>>` |

### 5.2 Components and modules (delivery check)

List every module and major accessory expected per the purchase order and packing list. Confirm each is present, the model and serial match, and there is no shipping damage. Anything missing or damaged is a deviation, not a quiet substitution.

| Item / module | Model | Serial number | On PO / packing list | Present | Damage (Y/N) |
|---|---|---|---|---|---|
| `<<FILL: e.g. quaternary pump>>` | `<<FILL>>` | `<<FILL>>` | Yes / No | Yes / No | `<<FILL>>` |
| `<<FILL: e.g. autosampler>>` | `<<FILL>>` | `<<FILL>>` | Yes / No | Yes / No | `<<FILL>>` |
| `<<FILL: e.g. column compartment>>` | `<<FILL>>` | `<<FILL>>` | Yes / No | Yes / No | `<<FILL>>` |
| `<<FILL: e.g. detector>>` | `<<FILL>>` | `<<FILL>>` | Yes / No | Yes / No | `<<FILL>>` |
| `<<FILL: e.g. controlling workstation>>` | `<<FILL>>` | `<<FILL>>` | Yes / No | Yes / No | `<<FILL>>` |

## 6. Test cases

Each test case below states what to verify, the expected result, where the actual result and evidence are recorded, and the pass/fail call. Record the actual result, attach the evidence (certificate, screenshot, photo, vendor record), initial and date each line, and reference any deviation. A test case passes only when the actual result meets the expected result and the evidence is attached.

### 6.1 Delivery and component verification

| No. | Check | Expected result | Actual result | Evidence ref | Pass / Fail | Init / date |
|---|---|---|---|---|---|---|
| 6.1.1 | Packaging intact, no shipping damage | Outer and inner packaging undamaged; shock/tilt indicators (if any) not tripped | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.1.2 | All modules and accessories present | Every line on the PO and packing list present and accounted for | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.1.3 | Model and serial numbers match | Each module model/serial matches PO and section 5.2 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.1.4 | No physical damage on inspection | No dents, leaks, cracked displays, bent fittings | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

### 6.2 Utilities and environment

Verify the supplied utilities and the room environment against the manufacturer site preparation requirements. Record the actual measured values, not just "OK".

| No. | Check | Expected result | Actual result | Evidence ref | Pass / Fail | Init / date |
|---|---|---|---|---|---|---|
| 6.2.1 | Electrical supply | Voltage, frequency, phases, and dedicated/grounded outlet per manufacturer spec | `<<FILL: e.g. 230 V, 50 Hz>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.2.2 | Room temperature | Within manufacturer operating range | `<<FILL: measured value>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.2.3 | Relative humidity | Within manufacturer operating range | `<<FILL: measured value>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.2.4 | Bench / vibration / level | Stable, level bench; vibration within tolerance for sensitive instruments | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.2.5 | Gases / solvents / waste (if applicable) | Correct grade gas at correct pressure; solvent and waste lines fitted and labeled | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.2.6 | Network connection (if data system) | Connected to the qualified network segment per IT | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

### 6.3 Software, firmware, and configuration

Capture the as-installed versions exactly. These versions become the baseline that change control protects, and an OQ run later means nothing if the firmware silently changed afterwards. For a Group C instrument, confirm the data system, time synchronization, and access controls support the records the instrument will generate.

| No. | Check | Expected result | Actual result | Evidence ref | Pass / Fail | Init / date |
|---|---|---|---|---|---|---|
| 6.3.1 | Instrument firmware version | Matches the version specified in DQ / vendor spec | `<<FILL: version recorded>>` | `<<FILL: screenshot>>` | `<<FILL>>` | `<<FILL>>` |
| 6.3.2 | Module firmware versions | Each module firmware recorded and within compatible range | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.3.3 | Data system / control software version | Matches specified version and license | `<<FILL: version recorded>>` | `<<FILL: screenshot>>` | `<<FILL>>` | `<<FILL>>` |
| 6.3.4 | Operating system / workstation | Specified OS and patch level, supported configuration | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.3.5 | Time and date / time zone | Synchronized to the controlled time source; correct time zone | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.3.6 | Audit trail enabled (data system) | Audit trail on and cannot be disabled by ordinary users | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.3.7 | User accounts / access roles | Configured per access matrix; no shared accounts for GxP actions | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

### 6.4 Calibration certificates and standards traceability

Confirm that components needing calibration at installation carry a current certificate traceable to a recognized standard, and that the certificate sits within the instrument operating range. Calibration done by the vendor at installation is acceptable if the certificate is reviewed and attached.

| No. | Check | Expected result | Actual result | Evidence ref | Pass / Fail | Init / date |
|---|---|---|---|---|---|---|
| 6.4.1 | Calibrated components identified | All components requiring installation calibration listed | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.4.2 | Calibration certificate present and current | Certificate dated, in date, signed | `<<FILL>>` | `<<FILL: cert no.>>` | `<<FILL>>` | `<<FILL>>` |
| 6.4.3 | Traceability to a recognized standard | Traceable to a national/international standard (e.g. NIST or equivalent) | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.4.4 | Calibration range covers intended use | Calibrated range brackets the working range | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

### 6.5 Documentation

Confirm the documentation that must exist before the instrument can be operated and maintained is on hand and controlled.

| No. | Check | Expected result | Actual result | Evidence ref | Pass / Fail | Init / date |
|---|---|---|---|---|---|---|
| 6.5.1 | Operating manuals received | User and service manuals on hand and current revision | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.5.2 | Vendor IQ / installation record | Vendor installation/commissioning report reviewed and attached | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.5.3 | Maintenance / PM schedule defined | Preventive maintenance plan documented | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.5.4 | Spare parts / consumables list | Critical spares and consumables identified | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.5.5 | Instrument logbook / asset record opened | Logbook and asset/calibration record created | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 7. Acceptance criteria

The IQ is acceptable when all of the following are true:

- Every applicable test case in section 6 has a recorded actual result that meets the expected result, with evidence attached, and is marked Pass.
- All delivered components match the PO and section 5.2 with no unresolved damage or shortage.
- Utilities and environment are within manufacturer specification, recorded as measured values.
- Software, firmware, and configuration versions are recorded exactly and match the specified versions.
- Every component requiring calibration carries a current, traceable certificate covering the working range.
- The required documentation exists, is current, and is under control.
- Any deviation raised under section 8 is resolved and assessed as not affecting the qualified installation state.

A single failed test case prevents progression to OQ until it is resolved or justified through deviation handling.

## 8. Deviations

Any check that does not meet its expected result, any missing or damaged component, any version mismatch, or any departure from this protocol is documented as a deviation per `<<FILL: deviation SOP-ID>>`, assessed for impact, and resolved before the IQ is approved and the instrument progresses to OQ. Record each deviation below and reference the full deviation record.

| Deviation no. | Test case ref | Description | Impact assessment | Resolution | Reference |
|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 9. Summary and conclusion

On completion, the executor summarizes the outcome and states whether the instrument passed IQ and may progress to OQ.

| Field | Entry |
|---|---|
| Test cases executed | `<<FILL: count>>` |
| Test cases passed | `<<FILL: count>>` |
| Test cases failed / deviations | `<<FILL: count and references>>` |
| As-installed firmware / software baseline | `<<FILL: versions recorded>>` |
| Conclusion | `<<FILL: IQ PASS, progress to OQ ref ___ / IQ on hold pending deviation ___>>` |

## 10. Attachments

| No. | Attachment |
|---|---|
| 1 | Purchase order and packing list |
| 2 | Vendor installation / commissioning report |
| 3 | Calibration certificates with traceability |
| 4 | Software, firmware, and configuration screenshots |
| 5 | Utilities and environment readings |
| 6 | Manufacturer site preparation / requirements document |

## 11. References

> 21 CFR 211.63 (equipment design, size, and location) and 211.68 (automatic, mechanical, and electronic equipment).
> 21 CFR 211.160(b) and 211.194 (laboratory controls and records).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> USP <1058> Analytical Instrument Qualification.
> USP <1058> instrument categories A, B, and C (depth of qualification by risk).
> ICH Q9, Quality Risk Management (for the risk-based category and test depth).
> Where the instrument holds GxP data: 21 CFR Part 11 and EU GMP Annex 11.
> ISO/IEC 17025 (for the calibration laboratory and traceability of certificates).

Confirm the current version and clause numbers of each reference before issue.

## 12. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 13. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author / executor (Validation) | `<<FILL>>` | | |
| Instrument owner | `<<FILL>>` | | |
| Reviewer (QC / IT as applicable) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the protocol executed for an example HPLC system, so you can see the level of detail an inspector expects. The company, instrument, versions, and numbers are illustrative; replace them with your own.

**Instrument identification**

| Field | Entry |
|---|---|
| Instrument type | HPLC with diode array detector (DAD) |
| Manufacturer / model | Example Instruments, quaternary HPLC model XL-200 series |
| Serial number | DEAB-2026-00471 |
| Asset / equipment ID | LAB-HPLC-12 |
| USP <1058> category | C (computerized analytical instrument with data system) |
| Intended use | Release and stability assay of a small-molecule drug product |
| Location | QC Laboratory, Room 214, Bench B3 |

**Selected test case results**

| No. | Check | Expected result | Actual result | Pass / Fail |
|---|---|---|---|---|
| 6.1.2 | All modules present | Quaternary pump, autosampler, column compartment, DAD, workstation per PO | All five present, models and serials match PO and packing list | Pass |
| 6.2.1 | Electrical supply | 230 V, 50 Hz, dedicated grounded outlet | 231 V, 50 Hz, dedicated grounded outlet verified | Pass |
| 6.2.2 | Room temperature | 15 to 30 C per manufacturer spec | 21.4 C measured | Pass |
| 6.2.3 | Relative humidity | 20 to 80 percent RH, non-condensing | 44 percent RH measured | Pass |
| 6.3.1 | Instrument firmware | Per DQ: pump firmware A.10.18 | A.10.18 recorded, screenshot attached | Pass |
| 6.3.3 | Data system software version | Validated chromatography data system, version 7.3 SR2 | Version 7.3 SR2 confirmed, screenshot attached | Pass |
| 6.3.5 | Time synchronization | Synced to controlled NTP source, time zone correct | Synced, time zone correct, drift under 1 second | Pass |
| 6.3.6 | Audit trail enabled | On, not disable-able by analysts | Enabled and locked at admin level, verified by IT | Pass |
| 6.4.2 | DAD wavelength calibration certificate | Current certificate, traceable, in date | Certificate CAL-2026-0883 attached, in date, holmium oxide reference | Pass |
| 6.4.4 | Calibration range covers use | Working range 210 to 360 nm covered | Certified across 200 to 400 nm, brackets working range | Pass |
| 6.5.2 | Vendor IQ record | Vendor installation report reviewed and attached | Vendor report FSE-0471 reviewed, one note on a loose waste line corrected and re-checked | Pass |

**Deviation raised**

| Deviation no. | Test case ref | Description | Resolution |
|---|---|---|---|
| DEV-2026-0207 | 6.2.5 | Solvent waste line delivered the wrong length, did not reach the waste container safely | Correct line sourced and fitted by FSE, re-checked, photo attached; no impact on installed state |

**Summary**

| Field | Entry |
|---|---|
| Test cases executed | 27 |
| Test cases passed | 27 (after deviation resolution) |
| Deviations | 1 (DEV-2026-0207, resolved, no impact) |
| As-installed baseline | Pump firmware A.10.18, data system 7.3 SR2 |
| Conclusion | IQ PASS, progress to OQ protocol OQ-LAB-031 |

The count of 27 reflects the 26 numbered checks in section 6 with the per-module firmware check (6.3.2) recorded as two module lines (pump and detector firmware), so it executes as two results.

In this example the executor recorded measured values rather than ticking "OK", captured the exact firmware and software versions as the change-control baseline, confirmed the DAD calibration certificate was traceable and bracketed the working range, raised the one real shortfall (a waste line that did not reach the container) as a deviation rather than fixing it silently, and only declared IQ PASS after that deviation was resolved with attached evidence. That sequence, verify against spec to record actual values to deviation to resolution to documented conclusion, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this protocol prevents

- IQ executed with "OK" or "Pass" ticked but no recorded actual values, so there is no evidence anyone checked anything.
- Firmware and software versions not captured at installation, so a later version change cannot be detected and OQ has no baseline.
- A missing or damaged module quietly substituted with no deviation and no model/serial record.
- Calibration certificates accepted without checking traceability, in-date status, or that the calibrated range covers the working range.
- Vendor installation records filed unread and treated as the qualification, with no independent review or acceptance criteria.
- Utilities and environment assumed adequate rather than measured against the manufacturer site preparation requirements.
- Audit trail, time synchronization, and access controls not verified at installation for a data-generating instrument, surfacing only later as data integrity gaps.
- IQ approved with an open deviation, so the instrument progressed to OQ before installation was actually confirmed.

## How to adapt this protocol

1. Set your document number, owner, room, linked DQ/OQ/PQ references, and effective date in the header.
2. State the USP <1058> instrument category in section 5.1 and scale the test cases to it: a Group B balance does not need the full data-system checks in 6.3.6 and 6.3.7, while a Group C chromatograph does.
3. Replace the example modules in section 5.2 and the test cases in section 6 with your actual instrument modules, manufacturer site preparation values, and the versions specified in your DQ.
4. Point the cross-references in sections 2 and 8 to your real CSV, deviation, change control, and calibration procedures.
5. Where the vendor performs IQ, keep the test-case structure and use it to review and accept the vendor records against your own acceptance criteria, rather than substituting the vendor report for this protocol.
6. Confirm every regulation in section 11 against the current published version before issue.
