---
title: "Instrument Operational Qualification (OQ) Protocol"
description: "A plug-and-play operational qualification protocol for a laboratory instrument: functional tests against specification across the operating ranges (wavelength accuracy, injector precision, gradient proportioning, detector linearity, flow and temperature accuracy, carryover, noise and drift), acceptance limits, test cases, deviations, and summary, with a worked HPLC specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Protocol"
pillar: "equipment-qualification"
relatedArticles: ["analytical-instrument-qualification","equipment-qualification-lifecycle"]
tags: ["operational qualification", "oq", "instrument qualification", "usp 1058", "annex 15", "hplc", "detector linearity"]
tier: "Intermediate"
---

This is a ready-to-use operational qualification protocol for a laboratory instrument. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach the test standards and certificates the protocol calls for, and route it through your normal document control, review, and approval. A worked filled specimen for an HPLC system follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

OQ proves one thing: that the installed instrument actually operates as intended across the ranges you will use, not just that it powers on. It is the third stage of the qualification lifecycle, after design qualification (DQ) and installation qualification (IQ) and before performance qualification (PQ) or the method-specific system suitability that confirms the instrument plus method plus column work together. OQ challenges each module against its own specification with traceable references: the pump for flow and gradient, the autosampler for injection precision and carryover, the detector for wavelength accuracy, linearity, noise, and drift, and the column compartment for temperature accuracy. Pass OQ and you have a documented baseline of operating performance that PQ, calibration, and change control all build on.

## Document control header

| Field | Entry |
|---|---|
| Document title | Operational Qualification Protocol for `<<FILL: instrument type / model>>` |
| Document number | `<<FILL: PRT-ID, e.g. OQ-LAB-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Metrology / Laboratory>>` |
| Site / room | `<<FILL: site, building, laboratory room>>` |
| Linked DQ / IQ / PQ | `<<FILL: DQ ref; IQ ref (must be approved); PQ ref to follow>>` |
| Linked report | `<<FILL: OQ summary report number to be issued>>` |

## 1. Purpose

This protocol defines the functional tests and acceptance criteria to confirm that instrument `<<FILL: instrument ID / asset number>>`, already installed and IQ-approved under `<<FILL: IQ reference>>`, operates correctly across its intended operating ranges. The objective is a documented, inspection-ready record that each module performs to specification (pump flow and gradient proportioning, autosampler injection precision and carryover, detector wavelength accuracy, linearity, noise and drift, column compartment temperature accuracy) so the instrument is fit to enter routine use, PQ, and method validation.

## 2. Scope

This protocol applies to the single instrument identified in the header and section 5, including its modules and the controlling data system. It covers operational performance against specification across the configured operating ranges. It assumes IQ is complete and approved; OQ does not re-verify installation. It does not establish performance for a specific method, sample, and column, which is covered by PQ or by method-specific system suitability under `<<FILL: cross-reference SOP-ID>>`, and it does not set calibration intervals or routine maintenance, which are governed by `<<FILL: cross-reference SOP-IDs>>`. Software functional verification for the data system (audit trail, access control, calculations) is coordinated with the computerized system validation under `<<FILL: CSV SOP-ID>>` and is not replaced by this protocol.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Validation engineer / metrologist | Authors and executes this protocol, records actual values, raises deviations, and writes the summary report. |
| Instrument / laboratory owner | Confirms the operating ranges to be tested match intended use, and supports execution. |
| Vendor field service engineer (where used) | Performs the vendor OQ using qualified test tools and certified standards, supplies test records and certificates. Vendor records are reviewed against the acceptance criteria here, not blindly accepted. |
| QC analytical | Confirms the tested ranges and acceptance limits suit the intended analytical use. |
| IT / system administrator (for Group C computerized systems) | Confirms the data system, time synchronization, and access configuration used during testing are the qualified ones. |
| Quality Assurance | Reviews and approves the protocol, deviations, and report, and authorizes progression to PQ / routine use. |

## 4. Definitions

- **Operational qualification (OQ)**: documented verification that an installed instrument operates as intended across its specified operating ranges.
- **Performance qualification (PQ)**: documented verification that the instrument consistently performs for the intended application, often using a method and column; the stage after OQ.
- **Operating range**: the span of a parameter (flow rate, wavelength, temperature, gradient composition) over which the instrument will be used and is therefore challenged at low, mid, and high points.
- **Acceptance limit**: the tolerance an instrument module must meet, taken from the manufacturer specification or a recognized standard, against which the actual measured value is judged.
- **Traceable standard / reference**: a certified test tool or material (for example a holmium oxide or didymium filter for wavelength, a caffeine or potassium dichromate solution for linearity, a calibrated flow meter, a thermocouple) traceable to a national or international standard.
- **Instrument category (USP <1058>)**: the risk-based grouping (Group A, B, C) that sets the depth of qualification; Group C computerized analytical instruments such as a chromatograph with a data system carry the full OQ.

## 5. Instrument and operating ranges under qualification

State the instrument category per USP <1058> in section 5.1, then define the exact operating ranges to be challenged in section 5.2. Test at the low, middle, and high of each range you will actually use, not just one convenient setpoint, and not beyond what you intend to use. Acceptance limits come from the manufacturer specification and recognized standards; record the source for each.

### 5.1 Instrument identification

| Field | Entry |
|---|---|
| Instrument type | `<<FILL: e.g. HPLC, UHPLC, GC, dissolution apparatus, plate reader>>` |
| Manufacturer / model | `<<FILL>>` |
| Serial number | `<<FILL>>` |
| Asset / equipment ID | `<<FILL>>` |
| USP <1058> category | `<<FILL: A / B / C with one-line rationale>>` |
| Intended use | `<<FILL: e.g. release and stability assay of a small-molecule drug product>>` |
| IQ reference (approved) | `<<FILL: IQ document number and approval date>>` |
| As-installed baseline | `<<FILL: firmware / software versions carried from IQ>>` |

### 5.2 Operating ranges and acceptance limits

| Module / parameter | Range to be challenged | Acceptance limit | Limit source |
|---|---|---|---|
| Pump flow rate | `<<FILL: e.g. 0.2 to 2.0 mL/min>>` | `<<FILL: e.g. +/- 2 percent of set>>` | `<<FILL: manufacturer spec>>` |
| Gradient proportioning | `<<FILL: e.g. 10/50/90 percent steps>>` | `<<FILL: e.g. +/- 1 percent absolute>>` | `<<FILL>>` |
| Injector precision (volume) | `<<FILL: e.g. 5 and 50 uL>>` | `<<FILL: e.g. RSD <= 1.0 percent (n=6)>>` | `<<FILL>>` |
| Injector linearity | `<<FILL: e.g. 1 to 50 uL>>` | `<<FILL: e.g. r >= 0.999>>` | `<<FILL>>` |
| Carryover | `<<FILL: high then blank>>` | `<<FILL: e.g. <= 0.05 percent of preceding peak>>` | `<<FILL>>` |
| Wavelength accuracy | `<<FILL: certified reference maxima>>` | `<<FILL: e.g. +/- 1 nm>>` | `<<FILL>>` |
| Detector linearity | `<<FILL: e.g. 5 levels across working absorbance>>` | `<<FILL: e.g. r >= 0.999>>` | `<<FILL>>` |
| Baseline noise / drift | `<<FILL: defined wavelength, time>>` | `<<FILL: e.g. noise and drift within spec>>` | `<<FILL>>` |
| Column compartment temperature | `<<FILL: e.g. 25, 40, 60 C>>` | `<<FILL: e.g. +/- 1 C of set>>` | `<<FILL>>` |

## 6. Prerequisites

Confirm and record the following before any test runs. A test executed without a valid prerequisite is not acceptable.

| No. | Prerequisite | Confirmed (init / date) |
|---|---|---|
| 6.1 | IQ approved for this instrument | `<<FILL>>` |
| 6.2 | Firmware / software at the IQ baseline (no undocumented change) | `<<FILL>>` |
| 6.3 | Test tools and reference standards in date, traceable, certificates attached | `<<FILL>>` |
| 6.4 | Mobile phase / diluent of stated grade prepared and degassed | `<<FILL>>` |
| 6.5 | Executor trained on this protocol and the data system | `<<FILL>>` |
| 6.6 | Data system audit trail on, time synchronized (for Group C computerized systems) | `<<FILL>>` |

## 7. Test cases

Each test case states what to verify, the method in brief, the expected result against the acceptance limit, where the actual result and evidence are recorded, and the pass/fail call. Record the actual measured value (not "OK"), attach the evidence (chromatogram, spectrum, calibration printout, certificate), initial and date each line, and reference any deviation. A test case passes only when the actual result meets the acceptance limit and the evidence is attached.

### 7.1 Pump flow rate accuracy

Set the pump to low, mid, and high flow and measure delivered volume gravimetrically or with a calibrated flow meter over a timed interval. Compare delivered to set.

| No. | Set flow | Acceptance limit | Actual (measured / percent error) | Evidence ref | Pass / Fail | Init / date |
|---|---|---|---|---|---|---|
| 7.1.1 | `<<FILL: low, e.g. 0.2 mL/min>>` | `<<FILL: +/- 2 percent>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 7.1.2 | `<<FILL: mid, e.g. 1.0 mL/min>>` | `<<FILL: +/- 2 percent>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 7.1.3 | `<<FILL: high, e.g. 2.0 mL/min>>` | `<<FILL: +/- 2 percent>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

### 7.2 Gradient proportioning (composition accuracy)

Run a step gradient using a traceable tracer (for example a low concentration of a UV-absorbing additive in line B against line A) and confirm the measured plateau heights match the programmed percentages within tolerance. Test the steps you will actually use.

| No. | Programmed step | Acceptance limit | Actual (measured percent) | Evidence ref | Pass / Fail | Init / date |
|---|---|---|---|---|---|---|
| 7.2.1 | `<<FILL: 10 percent B>>` | `<<FILL: +/- 1 percent absolute>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 7.2.2 | `<<FILL: 50 percent B>>` | `<<FILL: +/- 1 percent absolute>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 7.2.3 | `<<FILL: 90 percent B>>` | `<<FILL: +/- 1 percent absolute>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

### 7.3 Autosampler injection precision and linearity

Make replicate injections of a stable standard at a representative volume for precision, then a series of volumes for linearity. Report peak-area RSD for precision and the correlation for linearity.

| No. | Test | Acceptance limit | Actual result | Evidence ref | Pass / Fail | Init / date |
|---|---|---|---|---|---|---|
| 7.3.1 | Injection precision at `<<FILL: volume>>`, n=6, peak-area RSD | `<<FILL: RSD <= 1.0 percent>>` | `<<FILL: RSD value>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 7.3.2 | Injection precision at `<<FILL: second volume>>`, n=6, RSD | `<<FILL: RSD <= 1.0 percent>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 7.3.3 | Injection linearity over `<<FILL: range>>`, correlation | `<<FILL: r >= 0.999>>` | `<<FILL: r value>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

### 7.4 Carryover

Inject a high-concentration standard, then inject blank diluent under the same conditions, and confirm the residual peak at the analyte retention time is within limit relative to the preceding peak.

| No. | Test | Acceptance limit | Actual (percent of preceding peak) | Evidence ref | Pass / Fail | Init / date |
|---|---|---|---|---|---|---|
| 7.4.1 | Blank after high standard | `<<FILL: <= 0.05 percent>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

### 7.5 Detector wavelength accuracy

Measure the absorbance maxima of a certified reference (for example a holmium oxide filter or solution, or didymium) and compare to the certified values across the working range.

| No. | Certified maximum | Acceptance limit | Actual (measured nm / deviation) | Evidence ref | Pass / Fail | Init / date |
|---|---|---|---|---|---|---|
| 7.5.1 | `<<FILL: e.g. 241.0 nm>>` | `<<FILL: +/- 1 nm>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 7.5.2 | `<<FILL: e.g. 287.0 nm>>` | `<<FILL: +/- 1 nm>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 7.5.3 | `<<FILL: e.g. 361.0 nm>>` | `<<FILL: +/- 1 nm>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

### 7.6 Detector linearity (photometric)

Inject or measure a series of concentrations of a stable standard (for example caffeine, or potassium dichromate for photometric checks) across the working absorbance range and confirm the response is linear.

| No. | Test | Acceptance limit | Actual result | Evidence ref | Pass / Fail | Init / date |
|---|---|---|---|---|---|---|
| 7.6.1 | Linearity over `<<FILL: n levels, absorbance range>>`, correlation | `<<FILL: r >= 0.999>>` | `<<FILL: r value>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 7.6.2 | Residuals / y-intercept within tolerance | `<<FILL: per spec>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

### 7.7 Baseline noise and drift

Record the baseline at a defined wavelength and flow for a defined period with no injection and measure short-term noise and drift against specification.

| No. | Test | Acceptance limit | Actual result | Evidence ref | Pass / Fail | Init / date |
|---|---|---|---|---|---|---|
| 7.7.1 | Baseline noise at `<<FILL: wavelength, conditions>>` | `<<FILL: per spec, e.g. mAU>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 7.7.2 | Baseline drift over `<<FILL: time>>` | `<<FILL: per spec, e.g. mAU/h>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

### 7.8 Column compartment temperature accuracy

Set the column compartment to low, mid, and high temperatures and verify with an independent calibrated thermometer or thermocouple. Confirm setpoint accuracy and (where specified) stability.

| No. | Set temperature | Acceptance limit | Actual (measured C / deviation) | Evidence ref | Pass / Fail | Init / date |
|---|---|---|---|---|---|---|
| 7.8.1 | `<<FILL: low, e.g. 25 C>>` | `<<FILL: +/- 1 C>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 7.8.2 | `<<FILL: mid, e.g. 40 C>>` | `<<FILL: +/- 1 C>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 7.8.3 | `<<FILL: high, e.g. 60 C>>` | `<<FILL: +/- 1 C>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 8. Acceptance criteria

The OQ is acceptable when all of the following are true:

- Every applicable test case in section 7 has a recorded actual measured value that meets its acceptance limit, with evidence attached, and is marked Pass.
- Each operating range was challenged at low, middle, and high as defined in section 5.2, with no setpoint outside the intended range substituted.
- All test tools and reference standards used were in date and traceable, with certificates attached.
- The firmware and software stayed at the IQ baseline throughout testing, with no undocumented change.
- Any deviation raised under section 9 is resolved and assessed as not affecting the qualified operating state.

A single failed test case prevents progression to PQ / routine use until it is resolved or justified through deviation handling. Do not average a failing replicate set to a pass.

## 9. Deviations

Any actual value outside its acceptance limit, any use of an out-of-date or untraceable standard, any version change from the IQ baseline, or any departure from this protocol is documented as a deviation per `<<FILL: deviation SOP-ID>>`, assessed for impact, and resolved before the OQ is approved and the instrument enters use. Record each deviation below and reference the full deviation record.

| Deviation no. | Test case ref | Description | Impact assessment | Resolution | Reference |
|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 10. Summary and conclusion

On completion, the executor summarizes the outcome and states whether the instrument passed OQ and may progress to PQ / routine use.

| Field | Entry |
|---|---|
| Test cases executed | `<<FILL: count>>` |
| Test cases passed | `<<FILL: count>>` |
| Test cases failed / deviations | `<<FILL: count and references>>` |
| Standards / test tools used (cert refs) | `<<FILL>>` |
| Firmware / software at completion | `<<FILL: confirm equals IQ baseline>>` |
| Conclusion | `<<FILL: OQ PASS, progress to PQ ref ___ / OQ on hold pending deviation ___>>` |
| Requalification trigger | `<<FILL: e.g. annual, or after major repair / module change / relocation>>` |

## 11. Attachments

| No. | Attachment |
|---|---|
| 1 | Approved IQ report (reference) |
| 2 | Certificates for test tools and reference standards (wavelength filter, flow meter, thermometer, standards) |
| 3 | Chromatograms, spectra, and calibration printouts for each test case |
| 4 | Baseline noise and drift recordings |
| 5 | Calculation worksheets (percent error, RSD, correlation) |
| 6 | Manufacturer specification sheet for the acceptance limits |

## 12. References

> 21 CFR 211.68 (automatic, mechanical, and electronic equipment) and 211.160(b) and 211.194 (laboratory controls and records).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> USP <1058> Analytical Instrument Qualification (and the Group A / B / C categories that set OQ depth).
> USP <621> Chromatography and USP <1226> Verification of Compendial Procedures (for chromatographic performance context).
> USP <857> Ultraviolet-Visible Spectroscopy (for wavelength accuracy and photometric checks).
> ICH Q2(R2), Validation of Analytical Procedures (linearity, precision concepts applied to instrument tests).
> ICH Q9, Quality Risk Management (for the risk-based ranges and test depth).
> Where the instrument holds GxP data: 21 CFR Part 11 and EU GMP Annex 11.
> ISO/IEC 17025 (for the calibration laboratory and traceability of the test standards).

Confirm the current version and clause numbers of each reference before issue.

## 13. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 14. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author / executor (Validation) | `<<FILL>>` | | |
| Instrument owner | `<<FILL>>` | | |
| Reviewer (QC / IT as applicable) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the protocol executed for an example HPLC system, so you can see the level of detail an inspector expects. The company, instrument, values, and numbers are illustrative; replace them with your own.

**Instrument identification**

| Field | Entry |
|---|---|
| Instrument type | HPLC with diode array detector (DAD) |
| Manufacturer / model | Example Instruments, model 1290 series |
| Serial number | DEAB-2026-00471 |
| Asset / equipment ID | LAB-HPLC-12 |
| USP <1058> category | C (computerized analytical instrument with data system) |
| Intended use | Release and stability assay of a small-molecule drug product |
| IQ reference (approved) | IQ-LAB-031, approved 14 May 2026 |
| As-installed baseline | Pump firmware A.10.18, data system 7.3 SR2 |

**Operating ranges and acceptance limits**

| Module / parameter | Range challenged | Acceptance limit | Limit source |
|---|---|---|---|
| Pump flow rate | 0.2, 1.0, 2.0 mL/min | +/- 2 percent of set | Manufacturer spec |
| Gradient proportioning | 10, 50, 90 percent B | +/- 1 percent absolute | Manufacturer spec |
| Injector precision | 5 uL and 50 uL, n=6 | peak-area RSD <= 1.0 percent | Manufacturer spec |
| Injector linearity | 1 to 50 uL | r >= 0.999 | Manufacturer spec |
| Carryover | high standard then blank | <= 0.05 percent of preceding peak | Manufacturer spec |
| Wavelength accuracy | 241.0, 287.0, 361.0 nm (holmium oxide) | +/- 1 nm | USP <857> context, manufacturer spec |
| Detector linearity | 5 levels, 0.1 to 1.5 AU (caffeine) | r >= 0.999 | Manufacturer spec |
| Baseline noise / drift | 254 nm, 1.0 mL/min, 60 min | noise <= 0.05 mAU, drift <= 0.5 mAU/h | Manufacturer spec |
| Column compartment temp | 25, 40, 60 C | +/- 1 C of set | Manufacturer spec |

**Selected test case results**

| No. | Test | Acceptance limit | Actual result | Pass / Fail |
|---|---|---|---|---|
| 7.1.1 | Flow at 0.2 mL/min | +/- 2 percent | 0.199 mL/min, -0.5 percent | Pass |
| 7.1.3 | Flow at 2.0 mL/min | +/- 2 percent | 2.01 mL/min, +0.5 percent | Pass |
| 7.2.2 | Gradient at 50 percent B | +/- 1 percent absolute | 49.6 percent measured | Pass |
| 7.3.1 | Injection precision, 5 uL, n=6 RSD | RSD <= 1.0 percent | RSD 0.38 percent | Pass |
| 7.3.3 | Injection linearity, 1 to 50 uL | r >= 0.999 | r = 0.99987 | Pass |
| 7.4.1 | Carryover, blank after high standard | <= 0.05 percent | 0.02 percent of preceding peak | Pass |
| 7.5.1 | Wavelength at 241.0 nm (holmium oxide) | +/- 1 nm | 240.6 nm, deviation -0.4 nm | Pass |
| 7.5.3 | Wavelength at 361.0 nm | +/- 1 nm | 361.5 nm, deviation +0.5 nm | Pass |
| 7.6.1 | Detector linearity, 5 levels (caffeine) | r >= 0.999 | r = 0.99994 | Pass |
| 7.7.1 | Baseline noise at 254 nm | <= 0.05 mAU | 0.018 mAU | Pass |
| 7.7.2 | Baseline drift over 60 min | <= 0.5 mAU/h | 0.21 mAU/h | Pass |
| 7.8.2 | Column compartment at 40 C | +/- 1 C | 40.3 C measured | Pass |
| 7.8.3 | Column compartment at 60 C | +/- 1 C | 61.4 C measured, +1.4 C | Fail (deviation raised) |

**Worked calculation: injector precision (test 7.3.1)**

Six replicate 5 uL injections of the caffeine standard gave peak areas 1452.1, 1448.7, 1455.3, 1450.0, 1446.9, 1453.8. Mean = 1451.13, standard deviation = 3.18, RSD = (3.18 / 1451.13) x 100 = 0.22 percent. Recorded as 0.38 percent after including the second replicate set per the protocol; well inside the 1.0 percent limit. Pass.

**Worked calculation: wavelength deviation (test 7.5.1)**

Certified holmium oxide maximum 241.0 nm; instrument reported the absorbance maximum at 240.6 nm. Deviation = 240.6 - 241.0 = -0.4 nm, inside the +/- 1 nm limit. Pass.

**Deviation raised**

| Deviation no. | Test case ref | Description | Resolution |
|---|---|---|---|
| DEV-2026-0231 | 7.8.3 | Column compartment read 61.4 C at a 60 C setpoint, outside the +/- 1 C limit. The 25 C and 40 C setpoints passed. | Independent thermocouple confirmed the over-reading; vendor recalibrated the high end of the column heater, the 60 C setpoint was re-tested at 60.4 C (Pass), and a check at 65 C confirmed the corrected response. Root cause: heater calibration offset at the upper range. No other test affected. |

**Summary**

| Field | Entry |
|---|---|
| Test cases executed | 24 (20 numbered cases in section 7, plus the injector-precision second replicate set on 7.3.1 and two deviation re-tests on 7.8.3, the 60.4 C re-test and the 65 C confirmation check) |
| Test cases passed | 24 (after deviation resolution) |
| Deviations | 1 (DEV-2026-0231, resolved, re-tested Pass) |
| Standards used | Holmium oxide filter CAL-2026-0883; caffeine USP reference standard; calibrated flow meter FM-07; thermocouple TC-22 |
| Firmware / software at completion | Pump firmware A.10.18, data system 7.3 SR2 (equals IQ baseline) |
| Conclusion | OQ PASS, progress to PQ protocol PQ-LAB-031 |
| Requalification trigger | Annual, and after major repair, module change, or relocation |

In this example the executor challenged each module at low, mid, and high points of the real operating range, recorded actual measured values and worked the calculations rather than ticking "OK", used certified traceable standards, caught a genuine failure at the 60 C column setpoint instead of averaging it away, raised it as a deviation, found the root cause, recalibrated, and re-tested before declaring OQ PASS. That sequence, challenge each range to record actual values to deviation to root cause to re-test to documented conclusion, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this protocol prevents

- OQ executed with "OK" or "Pass" ticked but no recorded actual values, so there is no evidence the instrument actually met any limit.
- Modules tested at a single convenient setpoint instead of across the operating range, so accuracy at the extremes you actually use is unknown.
- Acceptance limits left blank or invented, with no link to the manufacturer specification or a recognized standard.
- Test tools and reference standards out of date or with no traceability certificate, undermining every result that depended on them.
- A failing replicate set averaged into a pass, or a failing high setpoint quietly dropped from scope.
- Firmware or software changed between IQ and OQ with no change control, so the OQ no longer reflects the operating configuration.
- OQ approved with an open deviation, so the instrument entered routine use before its operation was actually confirmed.
- No requalification trigger defined, so the instrument runs for years on a one-time OQ with no link to repairs, moves, or module swaps.

## How to adapt this protocol

1. Set your document number, owner, room, linked DQ/IQ/PQ references, and effective date in the header.
2. State the USP <1058> instrument category in section 5.1 and scale the test cases to it: a Group B balance or pH meter needs accuracy and precision checks but not the full chromatography menu, while a Group C HPLC, GC, or UHPLC needs the module-by-module tests in section 7.
3. Fill section 5.2 with your real operating ranges and the acceptance limits from your manufacturer specification sheet, and challenge each range at low, middle, and high.
4. Replace the chromatography test cases in section 7 with the parameters that matter for your instrument type (for example resolution and detector response for a plate reader, rotation speed and temperature for a dissolution apparatus, oven ramp accuracy for a GC).
5. Point the cross-references in sections 2 and 9 to your real PQ / system suitability, CSV, deviation, change control, and calibration procedures, and set the requalification trigger in section 10.
6. Where the vendor performs OQ, keep the test-case structure and acceptance limits and use them to review and accept the vendor records against your own criteria, rather than substituting the vendor report for this protocol.
7. Confirm every regulation in section 12 against the current published version before issue.
