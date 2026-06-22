---
title: "Test Script: Report and Calculation Verification"
description: "A plug-and-play test script that verifies a GxP system's computed values against an independent calculation and confirms report content, format, data accuracy, rounding, and units, with step, expected, actual, and pass or fail columns, a filled specimen, and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Template"
pillar: "csv-csa"
relatedArticles: ["writing-validation-protocols-and-reports", "validation-test-failure-management"]
tags: ["calculation verification", "report verification", "csv", "csa", "rounding", "test script", "data integrity"]
tier: "Advanced"
---

This is a ready-to-use test script for verifying the calculations a GxP computerized system performs and the reports it generates. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and run it under an approved validation plan or protocol. A worked filled specimen follows the template so you can see how a completed version reads. A test script is contemporaneous GxP evidence: write each actual result as you observe it, in ink or in the validated tool, never reconstructed later. Verify each cited regulation against the current source before you rely on it.

## What this script proves, and what it does not

This script demonstrates that the values the system computes are correct, that the reports it produces carry the right content in the right format, and that data flows from source to report without alteration. It does three things. First, it checks each computed value against an independent calculation performed outside the system, so a coding or configuration error in the formula is caught rather than trusted. Second, it confirms the report shows the correct data, in the correct layout, with the correct units, headers, ranges, and pagination. Third, it confirms rounding, significant figures, and unit conversion behave exactly as specified, since a result that is right to ten decimal places but wrong at the reported precision can still fail a specification or pass one it should not.

It is a functional verification, run in a qualified non-production environment with controlled test inputs, not a review of live production results. Verifying the report is correct does not relieve the user of reviewing each real report against its source on use. Decide the risk of each calculation and report first, then keep the scripted depth below for the ones that affect a result, a decision, or product quality. A pass-fail result derived from a computed value is the highest-risk case and is tested hardest here.

## Document control header

| Field | Entry |
|---|---|
| Test script title | Report and Calculation Verification |
| Test script ID | `<<FILL: TS-ID, e.g. TS-OQ-034>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Parent protocol / plan | `<<FILL: protocol or plan ID this script executes under>>` |
| System name and ID | `<<FILL: SYSTEM NAME / ID>>` |
| System version / build | `<<FILL: software version, build, patch level>>` |
| Test environment | `<<FILL: validation / qualification environment, not production>>` |
| Test phase | IQ / OQ / PQ / UAT (`<<FILL: select one, calculation and report logic usually OQ>>`) |
| Risk classification | `<<FILL: High (computed value drives a result/decision/quality), scripted testing>>` |
| Author | `<<FILL: name, role>>` |
| Effective date | `<<FILL: date>>` |

## 1. Requirements traced

State exactly which requirements this script verifies, so the traceability matrix links each requirement to its evidence in both directions. Every requirement listed here must be exercised by at least one numbered step in section 7.

| Requirement ID | Requirement text (summary) | Source document | Risk |
|---|---|---|---|
| `<<FILL: URS-031>>` | The system shall compute `<<FILL: named calculation, e.g. assay result, % recovery, RSD, mean>>` using the formula stated in the specification, and the computed value shall agree with an independent calculation within the stated tolerance. | `<<FILL: URS-ID, version>>` | High |
| `<<FILL: URS-032>>` | The system shall round computed values to `<<FILL: significant figures / decimal places>>` using `<<FILL: stated rounding rule, e.g. round half up, round half to even>>`, and round only at the reporting stage, not at each intermediate step. | `<<FILL: URS-ID, version>>` | High |
| `<<FILL: URS-033>>` | The system shall convert and display values in the units stated in the specification (`<<FILL: e.g. mg/mL, ppm, %>>`) and shall label every reported value with its unit. | `<<FILL: URS-ID, version>>` | Medium |
| `<<FILL: URS-034>>` | The report `<<FILL: report name / number>>` shall present the correct data fields, headers, sample identifiers, specification limits, and pass-fail evaluation, in the approved layout, with correct pagination and a version or template identifier. | `<<FILL: URS-ID, version>>` | High |
| `<<FILL: URS-035>>` | The report shall flag results outside specification, and the flag shall be driven by the computed value at reported precision, not by an unrounded internal value. | `<<FILL: URS-ID, version>>` | High |

## 2. Objective

In one or two sentences, state what passing this script demonstrates.

`<<FILL: objective, e.g. this script verifies that the system computes each in-scope calculation correctly against an independent calculation, applies the specified rounding and units, and generates reports that present the correct data in the correct format with a correct pass-fail evaluation, so that results used for GxP decisions are accurate, attributable, and fit for their stated purpose.>>`

## 3. Prerequisites

List everything that must be true before execution starts. If any prerequisite is not met, do not execute; record the gap as a deviation and stop.

| No. | Prerequisite | Verified (initials / date) |
|---|---|---|
| 3.1 | Parent protocol `<<FILL: ID>>` is approved and effective. | `<<FILL>>` |
| 3.2 | System is installed at version `<<FILL: version>>` in the test environment, confirmed by IQ `<<FILL: ref>>`. | `<<FILL>>` |
| 3.3 | The calculation formulas, rounding rules, units, and significant-figure conventions are documented in the approved specification `<<FILL: FS / config spec ID, version>>`. | `<<FILL>>` |
| 3.4 | The approved report template or layout is identified and under configuration control, reference `<<FILL: template ID, version>>`. | `<<FILL>>` |
| 3.5 | The independent calculation tool is identified and itself trustworthy: a verified spreadsheet (with its own verification record), a validated calculator, or a hand calculation checked by a second person. The tool and its basis are recorded. | `<<FILL>>` |
| 3.6 | Test input data sets are prepared and their expected results computed independently before execution, including normal, boundary, and out-of-specification cases. | `<<FILL>>` |
| 3.7 | The tester is trained on this script and on the system, training record `<<FILL: ref>>`. | `<<FILL>>` |

## 4. Test data and independent calculation

The test relies on inputs whose correct answer is known before execution. Compute every expected value independently first, record it here, then run the system and compare. Do not derive the expected value from the system you are testing.

| Item | Value used at execution |
|---|---|
| Independent calculation tool / method | `<<FILL: e.g. verified spreadsheet CALC-VER-009, or hand calc checked by second person>>` |
| Tool verification reference (if applicable) | `<<FILL: verification record for the spreadsheet/calculator>>` |
| Test account and role used | `<<FILL>>` |
| Input data set ID(s) | `<<FILL: e.g. CALC-DS-01 normal, CALC-DS-02 boundary, CALC-DS-03 OOS>>` |
| Specification limit(s) applied | `<<FILL: e.g. 95.0 to 105.0 % of label>>` |

### 4.1 Pre-computed expected values

| Case | Inputs (summary) | Formula | Independent expected value | Rounded to spec | Unit |
|---|---|---|---|---|---|
| Normal | `<<FILL>>` | `<<FILL>>` | `<<FILL: full-precision value>>` | `<<FILL: rounded value>>` | `<<FILL>>` |
| Boundary (at limit) | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Just inside limit | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Just outside limit (OOS) | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Rounding edge (half-value) | `<<FILL: input that produces a .5 at the rounding position>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 5. Execution conventions

Read these before executing, then follow them for every step. They are the rules an inspector expects to see applied consistently.

- Record each actual result contemporaneously, as you observe it, in the actual result cell. Do not pre-fill, do not batch at the end.
- "Meets expected result" is not an actual result. Write what you actually saw: the exact value displayed, the unit shown, the number of decimal places, the on-screen or printed text.
- Compare the system value to the independent expected value at the same precision the system reports. A match at full precision but a mismatch at reported precision is a fail, and the reverse can hide a rounding defect.
- For a pass-fail or in/out-of-specification flag, record both the value and the flag the system applied, and confirm the flag follows from the value at reported precision.
- Use one unambiguous mark for pass or fail. A blank cell is incomplete, not a pass.
- For any single-line correction, strike through once, initial, date, and add a brief reason. Never obliterate the original entry.
- Capture objective evidence (screenshot, report PDF, calculation export, the independent calculation record) for every step whose pass depends on a system output, and give that evidence a unique reference recorded in the step.
- The moment any step does not meet its expected result, mark it Fail, stop if instructed, and open a deviation per section 10. Do not retest a failed step in place without a documented disposition.

## 6. Calculation tolerance convention

State once how close the system value must be to the independent value, and apply it everywhere. A calculation is correct or it is not; the tolerance accounts only for legitimate floating-point and display precision, not for a different answer.

| Item | Entry |
|---|---|
| Comparison precision | `<<FILL: at reported precision, e.g. to the reported decimal place>>` |
| Allowable difference | `<<FILL: e.g. exact match at reported precision; for full-precision compare, plus or minus 1 in the last significant figure to allow floating point>>` |
| Rounding rule expected | `<<FILL: round half up / round half to even (banker's), per spec>>` |
| Intermediate rounding | `<<FILL: none; round only at final reporting step>>` |

## 7. Test steps

For each step give the action, the precise expected result, the actual result as observed, pass or fail, and the evidence reference. The expected result must be written before execution and must be specific enough that two people would agree on whether it was met. The blocks below cover calculation correctness, rounding and significant figures, units and conversion, report content and format, and the pass-fail evaluation.

### 7A. Calculation correctness against an independent calculation

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 7.1 | Enter the normal-case input data set and run the calculation. | `<<FILL: system value equals the independent expected value within the tolerance in section 6>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-001>>` | `<<FILL>>` |
| 7.2 | Compare the system value at full precision (where shown) to the independent full-precision value. | `<<FILL: values agree within plus or minus 1 in the last significant figure>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-002>>` | `<<FILL>>` |
| 7.3 | Repeat for a second, structurally different input set (different magnitude / sign / count). | `<<FILL: system value matches the independent value within tolerance>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-003>>` | `<<FILL>>` |
| 7.4 | Enter an input that exercises every term of the formula (none zero, none defaulted). | `<<FILL: each term contributes; result matches independent value; no term silently dropped>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-004>>` | `<<FILL>>` |
| 7.5 | Enter a divisor or denominator of zero, or another defined error input. | `<<FILL: system handles the error per spec (blocks, flags, or returns a defined error); it does not return a wrong number silently>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-005>>` | `<<FILL>>` |
| 7.6 | Enter a value outside the valid input range or of the wrong type. | `<<FILL: input is rejected or flagged per spec; the calculation does not proceed on invalid data>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-006>>` | `<<FILL>>` |

### 7B. Rounding and significant figures

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 7.7 | Enter the rounding-edge input that produces a half-value at the rounding position. | `<<FILL: system rounds per the specified rule (e.g. round half up gives X; round half to even gives Y) and matches the independent rounded value>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-007>>` | `<<FILL>>` |
| 7.8 | Confirm the value is reported to the specified number of significant figures / decimal places. | `<<FILL: reported precision matches the specification exactly, no extra or missing digits>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-008>>` | `<<FILL>>` |
| 7.9 | Verify rounding occurs only at the final reporting step, not at each intermediate calculation. | `<<FILL: intermediate values carry full precision; only the final reported value is rounded; chained results are not double-rounded>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-009>>` | `<<FILL>>` |
| 7.10 | Enter an input whose unrounded result sits just below a specification limit but rounds to the limit (or the reverse). | `<<FILL: the pass-fail flag follows the value at reported precision, consistent with the independent determination>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-010>>` | `<<FILL>>` |

### 7C. Units and conversion

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 7.11 | Inspect every reported value for a unit label. | `<<FILL: every value carries the correct unit per spec; no unlabeled numbers>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-011>>` | `<<FILL>>` |
| 7.12 | Enter data in one unit where the system converts to the reporting unit. | `<<FILL: conversion factor is correct; converted value matches the independent conversion within tolerance>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-012>>` | `<<FILL>>` |
| 7.13 | Confirm the unit and the value are internally consistent (magnitude matches the unit). | `<<FILL: e.g. a value in mg/mL is not silently shown as a g/L number; order of magnitude is correct for the stated unit>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-013>>` | `<<FILL>>` |

### 7D. Report content and format

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 7.14 | Generate the report for the executed data set and compare its content field by field to the source data. | `<<FILL: every field on the report matches its source value exactly; no value altered, dropped, or transposed in transfer>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-014>>` | `<<FILL>>` |
| 7.15 | Confirm the report header carries the required identifiers. | `<<FILL: report title, report/template version, sample or batch ID, date and time generated, and the user who generated it are present and correct>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-015>>` | `<<FILL>>` |
| 7.16 | Compare the report layout against the approved template. | `<<FILL: columns, labels, order, and sections match the approved template; no missing or extra fields>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-016>>` | `<<FILL>>` |
| 7.17 | Generate a report long enough to span multiple pages and inspect pagination. | `<<FILL: page numbers are present and correct (e.g. Page 1 of N); headers/footers repeat; no data clipped at page breaks; no orphaned rows>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-017>>` | `<<FILL>>` |
| 7.18 | Generate a report for an empty or single-record data set. | `<<FILL: report handles the edge case gracefully per spec (e.g. "no data" stated rather than a blank or error page)>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-018>>` | `<<FILL>>` |
| 7.19 | Export or print the report to its delivery format (PDF, print). | `<<FILL: exported/printed output matches the on-screen report; values, units, and layout are preserved; nothing truncated>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-019>>` | `<<FILL>>` |
| 7.20 | Confirm the report is static once issued (cannot be silently edited after generation). | `<<FILL: an issued report is read-only or a regenerated report is identifiable as a new instance; ad hoc edits are not possible without trace>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-020>>` | `<<FILL>>` |

### 7E. Pass-fail evaluation on the report

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 7.21 | Run the just-inside-limit case and inspect the report flag. | `<<FILL: result is shown as within specification (Pass); flag matches the independent determination>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-021>>` | `<<FILL>>` |
| 7.22 | Run the at-limit (boundary) case and inspect the flag. | `<<FILL: the boundary is evaluated per the specification convention (limit inclusive or exclusive as defined); flag matches the independent determination>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-022>>` | `<<FILL>>` |
| 7.23 | Run the out-of-specification case and inspect the flag. | `<<FILL: result is flagged outside specification (Fail / OOS); the flag is clearly visible on the report>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-023>>` | `<<FILL>>` |
| 7.24 | Confirm the report shows the specification limits next to the result. | `<<FILL: the applied limits are printed and match the specification version used; the reader can see what the result was judged against>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-024>>` | `<<FILL>>` |

Add or remove rows so every requirement in section 1 is exercised. Number steps continuously; do not reuse a number after a revision.

## 8. Acceptance criteria

This script passes only when all of the following are true:

- Every step required to verify the requirements in section 1 is marked Pass, with a recorded actual result and, where applicable, an evidence reference.
- Each computed value matched the independent calculation within the tolerance in section 6, at reported precision, across normal, boundary, and out-of-specification cases (block 7A).
- Rounding followed the specified rule, applied only at the reporting stage, with no intermediate or double rounding, and the rounding-edge case resolved correctly (block 7B).
- Every reported value carried the correct unit, and any conversion matched the independent conversion (block 7C).
- The report presented the correct data, in the approved layout, with correct identifiers, pagination, and a faithful export (block 7D).
- The pass-fail evaluation followed from the value at reported precision and matched the independent determination, including at the specification boundary (block 7E).
- Every deviation raised during execution is resolved with a documented disposition, and any retest is recorded under its own step or attachment.
- The completed script is reviewed and approved per section 12.

A script with one or more open Fail steps, or unresolved deviations, does not pass and cannot support the conclusion in the parent report. A wrong computed value or a misrouted pass-fail flag is a high-risk failure, since it can release a failing result or reject a passing one.

## 9. Evidence index

List every piece of objective evidence captured, so a reviewer can find each one without hunting.

| Evidence ref | Description | Step | Storage location / attachment |
|---|---|---|---|
| `<<FILL: SCR-001>>` | `<<FILL: system calculation result vs independent expected value, normal case>>` | 7.1 | `<<FILL>>` |
| `<<FILL: SCR-007>>` | `<<FILL: rounding-edge result showing the applied rounding rule>>` | 7.7 | `<<FILL>>` |
| `<<FILL: SCR-014>>` | `<<FILL: report vs source field-by-field comparison>>` | 7.14 | `<<FILL>>` |
| `<<FILL: SCR-023>>` | `<<FILL: report showing the OOS flag for the out-of-specification case>>` | 7.23 | `<<FILL>>` |
| `<<FILL: CALC-IND-01>>` | `<<FILL: the independent calculation record (spreadsheet/hand calc) with its verification basis>>` | 4 / 7A | `<<FILL>>` |

## 10. Deviations raised during execution

Any step that does not meet its expected result, any departure from the written steps, and any prerequisite not met is recorded here and managed per the parent protocol and `<<FILL: deviation / test-incident SOP-ID>>`. Cross-reference the deviation number on the failing step.

| Deviation / incident no. | Step | Description | Classification | Disposition (retest, requirement change, accept with justification) | Closed (date) |
|---|---|---|---|---|---|
| `<<FILL: TI-2026-019>>` | `<<FILL: 7.x>>` | `<<FILL: what was observed vs expected>>` | `<<FILL: critical / major / minor>>` | `<<FILL>>` | `<<FILL>>` |

A failed step is not a finding against the tester. It is data. The discipline an inspector looks for is that the failure was captured honestly, classified, dispositioned, and that any retest is traceable to the original failure, not quietly overwritten. A wrong calculation or a pass-fail flag driven by an unrounded value is almost always critical, because the error propagates to every result the system produces, not just the test record.

## 11. Execution summary

| Field | Entry |
|---|---|
| Total steps | `<<FILL>>` |
| Steps passed | `<<FILL>>` |
| Steps failed | `<<FILL>>` |
| Deviations raised / closed | `<<FILL>>` |
| Requirements verified (from section 1) | `<<FILL>>` |
| Overall result | Pass / Fail (`<<FILL>>`) |

## 12. Sign-off

The tester executes and signs; an independent reviewer who did not execute the test confirms the record is complete, the evidence supports each pass, the independent calculations were genuinely independent, and deviations are resolved. The reviewer should not be the same person who executed the script.

| Role | Name | Signature | Date |
|---|---|---|---|
| Tester (executed) | `<<FILL>>` | | |
| Reviewer (independent) | `<<FILL>>` | | |
| QA approval | `<<FILL>>` | | |

## 13. References

> 21 CFR 211.68 (automatic, mechanical, and electronic equipment), which requires that calculations be checked, and 211.194 (laboratory records), which requires complete records of all data and calculations.
> 21 CFR Part 11 (electronic records and electronic signatures), for the accuracy, completeness, and protection of records and report outputs.
> 21 CFR 211.160(b) (laboratory controls established by scientifically sound test procedures), for the basis of specification limits and pass-fail evaluation.
> EU GMP Annex 11 (Computerised Systems), section 5 (data: built-in checks for the correct and secure entry and processing of data) and section 6 (accuracy checks for critical data).
> EU GMP Chapter 6 (Quality Control) and Chapter 4 (Documentation), for records and reporting of results.
> ICH Q2(R2) (Validation of Analytical Procedures), where a reported value derives from an analytical method whose calculation is verified here.
> ICH Q9 (Quality Risk Management), for the risk basis of test depth.
> USP <1058> (Analytical Instrument Qualification), for the qualification context where the calculation runs on an analytical instrument or its data system.
> GAMP 5, Second Edition (a risk-based approach to compliant GxP computerized systems), including guidance on verifying calculations and reports.
> FDA Guidance, Computer Software Assurance for Production and Quality System Software, finalized 24 September 2025 (risk-based scaling of test rigor; a calculation that drives a quality decision warrants scripted testing).
> For medical device software: 21 CFR Part 820 (QMSR, effective 2 February 2026, incorporating ISO 13485:2016) and IEC 62304.

Confirm the current version and clause numbers of each reference before issue.

## 14. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

---

## Filled specimen

The following shows the script executed for an example calculation: percent of label claim for a finished-product assay, with the system computing the result, applying rounding, and flagging against a 95.0 to 105.0 percent specification. The company, system, inputs, and numbers are illustrative; replace them with your own.

**Header (extract)**

| Field | Entry |
|---|---|
| Test script title | Report and Calculation Verification |
| Test script ID | TS-OQ-034, v1.0 |
| Parent protocol | OQ-LIMS-007 |
| System name and ID | Laboratory Information Management System, instance LIMS-VAL (validation) |
| System version / build | 11.4.0, build 2208 |
| Test phase / risk | OQ / High, scripted |
| Independent calculation tool | Verified spreadsheet CALC-VER-009 (own verification record), cross-checked by second analyst |

**Calculation under test**

Percent of label claim = (measured concentration / label claim) x 100, reported to one decimal place, round half up, spec 95.0 to 105.0 percent of label.

**Pre-computed expected values (extract)**

| Case | Measured (mg/mL) | Label (mg/mL) | Independent full precision | Rounded to 1 dp | Flag |
|---|---|---|---|---|---|
| Normal | 9.83 | 10.00 | 98.3 | 98.3 % | Pass |
| Just inside limit | 9.51 | 10.00 | 95.1 | 95.1 % | Pass |
| Boundary | 9.50 | 10.00 | 95.0 | 95.0 % | Pass (limit inclusive) |
| Just outside (OOS) | 9.49 | 10.00 | 94.9 | 94.9 % | Fail / OOS |
| Rounding edge | 9.945 | 10.00 | 99.45 | 99.5 % (half up) | Pass |

**Test steps (executed, extract)**

| Step | Action | Expected result | Actual result | P/F | Evidence | Initials / date |
|---|---|---|---|---|---|---|
| 7.1 | Enter measured 9.83, label 10.00; run % label calculation. | System value 98.3 %, matches independent 98.3 within tolerance. | System returned 98.3 %. Matches independent value. | Pass | SCR-001 | KM 19 Jun 2026 |
| 7.2 | Compare at full precision. | Agree within 1 in last figure. | System internal value 98.300000; independent 98.3. Agree. | Pass | SCR-002 | KM 19 Jun 2026 |
| 7.5 | Enter label claim of 0 (zero denominator). | Defined error, not a silent wrong number. | System blocked calculation, message "Label claim must be greater than zero". No result returned. | Pass | SCR-005 | KM 19 Jun 2026 |
| 7.7 | Enter measured 9.945, label 10.00 (rounding edge). | Round half up gives 99.5 %. | System returned 99.5 %. Matches independent half-up result. | Pass | SCR-007 | KM 19 Jun 2026 |
| 7.9 | Check intermediate rounding. | Full precision intermediate, round only at report. | Intermediate held 99.45; reported value rounded once to 99.5. No double rounding. | Pass | SCR-009 | KM 19 Jun 2026 |
| 7.11 | Inspect unit labels on report. | Every value carries its unit. | Result shown "98.3 % of label"; concentration "9.83 mg/mL". All labeled. | Pass | SCR-011 | KM 19 Jun 2026 |
| 7.14 | Compare report fields to source. | Every field matches source. | Sample ID, measured value, label claim, result, and limits on report matched source record SMP-0461. | Pass | SCR-014 | KM 19 Jun 2026 |
| 7.17 | Inspect pagination on a 60-row report. | Page numbers correct, headers repeat, no clipping. | "Page 1 of 3", header repeated each page, no rows clipped at breaks. | Pass | SCR-017 | KM 19 Jun 2026 |
| 7.22 | Run boundary case 9.50 / 10.00 and inspect flag. | 95.0 % evaluated as within spec (limit inclusive). | Report showed 95.0 %, flag "Within specification". | Pass | SCR-022 | KM 19 Jun 2026 |
| 7.23 | Run OOS case 9.49 / 10.00. | Flagged outside specification. | Report showed 94.9 %, flag "OUT OF SPECIFICATION" in bold. | Pass | SCR-023 | KM 19 Jun 2026 |

**Execution summary**

| Field | Entry |
|---|---|
| Total steps | 24 |
| Steps passed | 24 |
| Steps failed | 0 |
| Deviations raised / closed | 0 / 0 |
| Requirements verified | URS-031, URS-032, URS-033, URS-034, URS-035 |
| Overall result | Pass |

**Sign-off**

| Role | Name | Date |
|---|---|---|
| Tester (executed) | K. Mehta, signed | 19 Jun 2026 |
| Reviewer (independent) | R. Gomez, signed | 20 Jun 2026 |
| QA approval | S. Lin, signed | 20 Jun 2026 |

In this example the tester computed each expected value in a separately verified spreadsheet before touching the system, compared at reported precision, exercised the rounding edge at the half-value, confirmed rounding happened only once at the report stage, and checked that the boundary case at 95.0 percent resolved per the inclusive-limit convention. Had step 7.7 instead returned 99.4 percent (truncation rather than round half up), or step 7.23 shown 94.9 percent passing because the flag read an unrounded 94.95 internal value, the tester would have marked the step Fail, opened a critical test incident, and held the conclusion, which is the behavior section 10 is built to capture.

## Common inspection findings this script prevents

- A computed result accepted on faith, with no independent calculation on record to prove the formula is right.
- The expected value derived from the same system being tested, so a coding error is "verified" against itself.
- Rounding that truncates instead of rounding, or rounds at every intermediate step so a chained result is double-rounded and drifts.
- A pass-fail flag driven by an unrounded internal value, so a 94.95 result reported as 95.0 is shown as passing, or the reverse.
- Reported values with no unit, or a unit-conversion factor coded wrong, so a value is right in number but wrong in scale.
- A report whose layout, headers, or specification limits do not match the approved template, or that clips data at page breaks.
- Multi-page reports tested only on a single page, so pagination and repeated headers were never exercised.
- A report that can be edited after issue, or a regenerated report that cannot be told apart from the original.
- Only the normal case tested, with the boundary and out-of-specification cases never run, so the most decision-relevant behavior is unproven.
- One uniform level of scripted detail applied regardless of risk, with no documented basis, which is hard to defend now that test rigor is expected to scale with risk.

## How to adapt this script

1. Set your test script ID, parent protocol, system version, and effective date in the header, and confirm you are testing in a qualified non-production environment.
2. List your real requirement IDs in section 1 and confirm each is exercised by at least one numbered step; keep the script and your traceability matrix in agreement in both directions.
3. Replace the example calculation with your own formula, and in section 4.1 pre-compute the normal, boundary, just-inside, just-outside, and rounding-edge values independently before execution.
4. State your one calculation tolerance and rounding rule in section 6, and confirm if your specification limits are inclusive or exclusive at the boundary.
5. Name the independent calculation tool in section 4 and attach its verification record; a spreadsheet used to verify a system must itself be verified, or the verification is circular.
6. Replace the report-format checks in block 7D with your approved template's fields, headers, and pagination, and add the export formats you actually use.
7. Point the cross-references in sections 3, 10, and 12 to your real specification, deviation or test-incident procedure, and review and approval process.
8. Confirm every regulation in section 13 against the current published version before issue.
