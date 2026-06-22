---
title: "Test Script: Functional (OQ)"
description: "A plug-and-play OQ functional test script that verifies one configured function meets its specification across normal operating cases, with numbered step, expected, actual, pass or fail, and evidence columns, a worked filled specimen, and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Template"
pillar: "csv-csa"
relatedArticles: ["writing-validation-protocols-and-reports", "validation-test-failure-management"]
tags: ["operational qualification", "oq", "functional testing", "test script", "csv", "csa", "traceability", "21 cfr part 11"]
tier: "Intermediate"
---

This is a ready-to-use OQ functional test script. It verifies that one configured function does what its functional specification says it does, run through its normal operating cases. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and execute it under an approved OQ protocol or validation plan. A worked filled specimen follows the template so you can see how a completed version reads. A test script is contemporaneous GxP evidence: write each actual result as you observe it, in ink or in the validated tool, never reconstructed afterward. Verify each cited regulation against the current source before you rely on it.

## What this script is, and where it sits

Operational qualification proves a configured system behaves as the functional specification (FS) defines, before it is used for GxP work. A functional test script is the smallest unit of that proof: it takes one function, or a tight group of closely related functions, and walks it through the normal cases an everyday user runs, confirming each produces the result the FS promised. It sits below the OQ protocol, which says what will be tested and why, and feeds the traceability matrix, which links each requirement to the evidence that exercised it.

This script is deliberately scoped to the positive, in-specification path: the function used as intended, with valid inputs, by an authorized user. That is what "functional, normal cases" means. Negative behavior (invalid inputs, blocked actions), boundary behavior (the exact edge of an allowed range), security depth, and interface error paths are real OQ work, but they belong in their own scripts so each result stays traceable to a single, clear purpose. Under FDA's Computer Software Assurance approach, the rigor here should match the risk of the function: a high-risk function that affects a result, a release decision, or patient safety earns the scripted, evidence-backed treatment below, while a low-risk function may justify a lighter record. Decide that risk first, in the risk assessment, then write the script.

## Document control header

| Field | Entry |
|---|---|
| Test script title | `<<FILL: function-specific title, e.g. Sample Login and Result Entry, Normal Path>>` |
| Test script ID | `<<FILL: TS-ID, e.g. TS-OQ-042>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Parent OQ protocol / plan | `<<FILL: OQ protocol or validation plan ID this script runs under>>` |
| System name and ID | `<<FILL: SYSTEM NAME / ID>>` |
| Software version / build | `<<FILL: exact version, build, patch level under test>>` |
| Configuration baseline | `<<FILL: config spec / baseline ID and version, frozen for OQ>>` |
| Test environment | `<<FILL: qualified validation environment, not production>>` |
| Function risk (drives rigor) | `<<FILL: High / Medium / Low, per the risk assessment>>` |
| Author | `<<FILL: name, role>>` |
| Effective date | `<<FILL: date>>` |

## 1. Function and requirement traced

State the single function this script verifies and the requirement it traces to, so the matrix can link requirement to evidence in both directions. Every requirement listed here must be exercised by at least one numbered step below, and no step should test something no requirement asked for.

| Function under test | Requirement ID | Requirement text (summary) | Source document | Risk |
|---|---|---|---|---|
| `<<FILL: e.g. enter and save a numeric result>>` | `<<FILL: FS-3.4.1 / URS-022>>` | `<<FILL: the system shall accept a numeric result, enforce mandatory fields, calculate the derived value per the defined formula, and save the record with a unique ID and the entering user>>` | `<<FILL: FS-ID / URS-ID, version>>` | `<<FILL: High / Medium / Low>>` |

## 2. Objective

In one or two sentences, state what passing this script demonstrates. Keep it to the normal-case scope.

Example: this script verifies that an authorized user can enter a valid result, that the system enforces the mandatory fields, computes the derived value correctly per the FS formula, and saves a complete, attributable record, across the normal data range the function is used in.

`<<FILL: objective>>`

## 3. Prerequisites

List everything that must be true before execution starts. If any prerequisite is not met, do not execute; record the gap as a test deviation and stop.

| No. | Prerequisite | Verified (initials / date) |
|---|---|---|
| 3.1 | Parent OQ protocol `<<FILL: ID>>` is approved and effective. | `<<FILL>>` |
| 3.2 | IQ `<<FILL: ref>>` is complete and approved, with no open IQ deviation affecting this function. | `<<FILL>>` |
| 3.3 | Software is installed at version `<<FILL: version>>` in the qualified test environment, against configuration baseline `<<FILL: ref>>`. | `<<FILL>>` |
| 3.4 | Test account exists with the role required to run this function: `<<FILL: e.g. analyst-level>>`. | `<<FILL>>` |
| 3.5 | Test data set `<<FILL: ID or description>>` is loaded and the expected values are known and independently derived. | `<<FILL>>` |
| 3.6 | System clock and time zone are configured and synchronized per `<<FILL: ref>>`. | `<<FILL>>` |
| 3.7 | The tester is trained on this script and on the system, training record `<<FILL: ref>>`. | `<<FILL>>` |

## 4. Test data and accounts used

Record the exact data and accounts in play at execution, so a result can be tied to a known input. For any calculated step, derive the expected value outside the system under test (by hand or in a separately verified spreadsheet), never by the same code you are testing.

| Item | Value used at execution |
|---|---|
| Test account and role | `<<FILL>>` |
| Input data set / record IDs | `<<FILL>>` |
| Input values for normal cases | `<<FILL: list the normal-range values to be entered>>` |
| Independently calculated expected value(s) | `<<FILL: value(s), with the source of the calculation>>` |
| Rounding / tolerance rule | `<<FILL: e.g. round to 1 decimal, exact match required>>` |

## 5. Execution conventions

Read these before executing, then apply them to every step. They are the rules an inspector expects to see followed consistently.

- Record each actual result contemporaneously, as you observe it, in the actual result cell. Do not pre-fill, do not batch at the end.
- "Meets expected result" is not an actual result. Write what you actually saw: the value, the message text, the screen state, the timestamp.
- Use one unambiguous mark for pass or fail. A blank cell is incomplete, not a pass.
- For any single-line correction, strike through once, initial, date, and add a brief reason. Never obliterate the original entry.
- Capture objective evidence (screenshot, system report, data export) for every step whose pass depends on a system output, and give that evidence a unique reference recorded in the step.
- This is a normal-case script. If the system refuses a valid input or fails to perform a specified normal action, that is a Fail, not a tester error. Mark it Fail, stop if instructed, and open a deviation per section 8.
- The expected result must be written before execution, specific enough that two people would agree on whether it was met. Do not amend an expected result after you have seen the actual one.

## 6. Test steps

Each step gives the action, the precise expected result, the actual result as observed, pass or fail, and the evidence reference. Number steps continuously. Walk the function through more than one normal value where the data range matters (for example a low, a mid, and a high in-range value), so a single lucky input does not stand in for the whole range.

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 6.1 | `<<FILL: log in as the authorized account for this function>>` | `<<FILL: login succeeds; user name shown in header matches the account used>>` | `<<FILL: observed>>` | `<<FILL>>` | `<<FILL: SCR-001>>` | `<<FILL>>` |
| 6.2 | `<<FILL: open the function / form under test>>` | `<<FILL: correct form opens; mandatory fields and defaults match the FS>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-002>>` | `<<FILL>>` |
| 6.3 | `<<FILL: enter the first normal-range input value(s)>>` | `<<FILL: input accepted; field validation passes for a valid value>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-003>>` | `<<FILL>>` |
| 6.4 | `<<FILL: trigger the calculation / processing step>>` | `<<FILL: derived value equals the independently calculated expected value, to the stated rounding rule>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-004>>` | `<<FILL>>` |
| 6.5 | `<<FILL: save the record>>` | `<<FILL: record saves with a unique ID; entering user and timestamp captured; status as specified>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-005>>` | `<<FILL>>` |
| 6.6 | `<<FILL: repeat 6.3 to 6.5 with a second normal-range value>>` | `<<FILL: same correct behavior at the second value; derived value matches its expected>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-006>>` | `<<FILL>>` |
| 6.7 | `<<FILL: reopen the saved record>>` | `<<FILL: stored values match what was entered and calculated; nothing silently altered on save and reload>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-007>>` | `<<FILL>>` |

Add or remove rows so the normal operating range of the function is covered and every requirement in section 1 is exercised. Do not reuse a step number after a revision.

## 7. Acceptance criteria

This script passes only when all of the following are true:

- Every step required to verify the requirement in section 1 is marked Pass, with a recorded actual result and, where applicable, an evidence reference.
- Each calculated value returned by the system matches the independently calculated expected value to the stated rounding or tolerance rule.
- No step is left blank or ambiguous.
- Every deviation raised during execution is resolved with a documented disposition, and any retest is recorded under its own step or attachment.
- The completed script is reviewed and approved per section 10, by a reviewer who did not execute it.

A script with one or more open Fail steps, or unresolved deviations, does not pass and cannot support the conclusion in the parent OQ report.

## 8. Deviations raised during execution

Any step that does not meet its expected result, any departure from the written steps, and any prerequisite not met is recorded here and managed per the parent protocol and `<<FILL: deviation / test-incident SOP-ID>>`. Cross-reference the deviation number on the failing step.

| Deviation / incident no. | Step | Description (observed vs expected) | Classification | Disposition (retest, config fix, FS clarification, accept with justification) | Closed (date) |
|---|---|---|---|---|---|
| `<<FILL: TI-2026-011>>` | `<<FILL: 6.x>>` | `<<FILL>>` | `<<FILL: critical / major / minor>>` | `<<FILL>>` | `<<FILL>>` |

A failed step is not a finding against the tester. It is data. What an inspector looks for is that the failure was captured honestly, classified, dispositioned, and that any retest is traceable to the original failure, not quietly overwritten. Where the failure reflects an acceptable as-built behavior, the FS or configuration is corrected under change control and the deviation references that change.

## 9. Execution summary

| Field | Entry |
|---|---|
| Total steps | `<<FILL>>` |
| Steps passed | `<<FILL>>` |
| Steps failed | `<<FILL>>` |
| Deviations raised / closed | `<<FILL>>` |
| Requirement(s) verified (from section 1) | `<<FILL>>` |
| Overall result | Pass / Fail (`<<FILL>>`) |

## 10. Sign-off

The tester executes and signs; an independent reviewer who did not execute the test confirms the record is complete, the evidence supports each pass, and any deviation is resolved. The reviewer should not be the same person who executed the script.

| Role | Name | Signature | Date |
|---|---|---|---|
| Tester (executed) | `<<FILL>>` | | |
| Reviewer (independent) | `<<FILL>>` | | |
| QA approval | `<<FILL>>` | | |

## 11. References

> 21 CFR Part 11 (electronic records and electronic signatures), where the system is Part 11 in scope.
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment).
> EU GMP Annex 11 (Computerised Systems), sections on validation, accuracy checks, and security.
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> FDA Guidance, Computer Software Assurance for Production and Quality System Software, finalized 24 September 2025 (risk-based scaling of test rigor).
> FDA Guidance, General Principles of Software Validation (2002).
> GAMP 5, A Risk-Based Approach to Compliant GxP Computerized Systems (Second Edition).
> ICH Q9, Quality Risk Management (for the risk basis of test depth).
> For medical device software: 21 CFR Part 820 (QMSR, effective 2 February 2026, incorporating ISO 13485:2016 by reference) and IEC 62304.

Confirm the current version and clause numbers of each reference before issue.

## 12. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

---

## Filled specimen

The following shows the script executed for an example laboratory information management system (LIMS), verifying that an authorized analyst can enter results, that the system computes the mean of replicates correctly, and that the record saves complete and attributable, across two normal in-range values. The company, system, accounts, and numbers are illustrative; replace them with your own.

**Header (extract)**

| Field | Entry |
|---|---|
| Test script title | Replicate Result Entry and Mean Calculation, Normal Path |
| Test script ID | TS-OQ-042, v1.0 |
| Parent OQ protocol | OQ-CSV-031 |
| System name and ID | LIMS, instance LIMS-QA-02 (validation) |
| Software version / build | 8.4.2, build 5210 |
| Configuration baseline | CONFIG-LIMS-008 v3.0, frozen for OQ |
| Function risk | High |

**Function and requirement traced**

| Function under test | Requirement ID | Requirement text (summary) | Source | Risk |
|---|---|---|---|---|
| Enter replicate results and compute the reported mean | FS-3.4.1 / URS-022 | The system shall accept replicate numeric results, compute their mean to one decimal place, enforce the mandatory reason and analyst fields, and save the record with a unique ID and the entering user. | FS-LIMS v3.0 / URS-LIMS v3.0 | High |

**Test data and expected values**

| Item | Value used |
|---|---|
| Test account and role | analyst1, analyst role |
| Normal case A inputs | 98.2, 99.1, 100.3 |
| Case A expected mean (hand-calculated) | (98.2 + 99.1 + 100.3) / 3 = 99.2 (1 decimal) |
| Normal case B inputs | 100.0, 100.6, 101.0 |
| Case B expected mean (hand-calculated) | (100.0 + 100.6 + 101.0) / 3 = 100.5 (1 decimal) |
| Rounding rule | Round to 1 decimal, exact match required |

**Test steps (executed)**

| Step | Action | Expected result | Actual result | P/F | Evidence | Initials / date |
|---|---|---|---|---|---|---|
| 6.1 | Log in as analyst1. | Login succeeds; header shows analyst1. | Login succeeded; header showed "analyst1". | Pass | SCR-001 | AP 09 Jun 2026 |
| 6.2 | Open the result-entry form for sample SAM-0451. | Form opens; replicate fields and analyst field shown, mandatory. | Form opened; three replicate fields and a mandatory analyst field shown. | Pass | SCR-002 | AP 09 Jun 2026 |
| 6.3 | Enter case A replicates 98.2, 99.1, 100.3. | Values accepted; no validation error for valid numerics. | All three values accepted, no error. | Pass | SCR-003 | AP 09 Jun 2026 |
| 6.4 | Trigger the mean calculation. | Mean equals 99.2 (1 decimal), matching the hand calculation. | System returned 99.2; matched independent hand calculation. | Pass | RPT-CALC-014 | AP 09 Jun 2026 |
| 6.5 | Save the record. | Record saves with a unique ID; analyst1 and timestamp captured. | Saved as record R-2026-0451; user analyst1, 09 Jun 2026 10:18 EDT captured. | Pass | SCR-005 | AP 09 Jun 2026 |
| 6.6 | Repeat 6.3 to 6.5 with case B replicates 100.0, 100.6, 101.0. | Mean equals 100.5; record saves complete and attributable. | Mean returned 100.5, matched hand calculation; saved as R-2026-0452, user and time captured. | Pass | SCR-006 | AP 09 Jun 2026 |
| 6.7 | Reopen records R-2026-0451 and R-2026-0452. | Stored replicates and means match what was entered and calculated. | Both records reopened; all replicates and means matched; nothing altered. | Pass | SCR-007 | AP 09 Jun 2026 |

**Execution summary**

| Field | Entry |
|---|---|
| Total steps | 7 |
| Steps passed | 7 |
| Steps failed | 0 |
| Deviations raised / closed | 0 / 0 |
| Requirement(s) verified | FS-3.4.1 / URS-022 |
| Overall result | Pass |

**Sign-off**

| Role | Name | Date |
|---|---|---|
| Tester (executed) | A. Patel, signed | 09 Jun 2026 |
| Reviewer (independent) | R. Gomez, signed | 10 Jun 2026 |
| QA approval | S. Lin, signed | 10 Jun 2026 |

In this example the tester ran the function through two different in-range cases, computed both expected means outside the system before execution, recorded the exact values and timestamps seen rather than "meets expected", captured evidence for every output-dependent step, and reopened the saved records to confirm nothing changed silently on save. A reviewer who did not run the test confirmed the evidence supported each pass. Had step 6.4 returned 99.1 instead of 99.2, the tester would have marked it Fail, opened a test incident, and held the result while the calculation configuration was investigated, which is the behavior section 8 is built to capture.

## Common inspection findings this script prevents

- Functional steps marked "Pass" with the actual result column filled in only as "meets expected result", giving no evidence of what was actually observed.
- A calculated value verified only by the system itself, never against an independently derived expected value, so a wrong formula could pass.
- Expected results written or amended after execution, so the test cannot fail.
- A single in-range input used to stand in for the whole normal operating range, leaving most of the range untested.
- A requirement in the traceability matrix with no executed step that actually exercises it, or a step that tests something the requirement never asked for.
- Screenshots or reports referenced but not retained, or evidence that cannot be tied back to the step it supports.
- A failed step quietly retested and overwritten, with no test incident, no disposition, and no link between the failure and the eventual pass.
- The same person executing and reviewing the script, with no independent check that the evidence supports the conclusion.
- Testing run in production, or against a different software version or unfrozen configuration than the one being qualified.
- One uniform level of scripted detail applied to every function regardless of risk, with no documented basis, which is hard to defend now that test rigor is expected to scale with risk.

## How to adapt this script

1. Set your test script ID, parent OQ protocol, software version, and configuration baseline in the header, and confirm you are testing in a qualified non-production environment with IQ approved.
2. Decide the risk of the function first, then keep or trim the step depth and evidence to match; reserve the full scripted treatment for higher-risk functions.
3. Name the single function and the real requirement ID in section 1, and confirm each requirement is exercised by at least one numbered step; keep this script and your traceability matrix in agreement in both directions.
4. Put your real input values and independently calculated expected values into section 4, and walk the function through a low, mid, and high in-range value where the data range matters.
5. Write every expected result before execution, specific enough that two people would agree on the outcome, and never amend it after seeing the actual result.
6. Point the cross-references in sections 3, 8, and 10 to your real OQ protocol, deviation or test-incident procedure, and review and approval process.
7. Confirm every regulation in section 11 against the current published version before issue.
