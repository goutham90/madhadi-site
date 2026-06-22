---
title: "Test Script: Boundary and Negative"
description: "A plug-and-play test script that challenges a function at and around its limits and with invalid or missing input, confirming the system rejects bad data with a clear message and corrupts nothing, with numbered step, expected, actual, pass or fail, and evidence columns, a worked filled specimen, and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Template"
pillar: "csv-csa"
relatedArticles: ["writing-validation-protocols-and-reports", "validation-test-failure-management"]
tags: ["boundary testing", "negative testing", "test script", "csv", "csa", "input validation", "error handling", "21 cfr part 11"]
tier: "Intermediate"
---

This is a ready-to-use boundary and negative test script. Where a functional script proves a function works on the happy path, this one proves the function holds up when it is pushed to its edges and fed bad input: it confirms the system accepts what it should, rejects what it should not, says so with a clear message, and leaves the stored data clean either way. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and execute it under an approved OQ protocol or validation plan. A worked filled specimen follows the template so you can see how a completed version reads. A test script is contemporaneous GxP evidence: write each actual result as you observe it, in ink or in the validated tool, never reconstructed afterward. Verify each cited regulation against the current source before you rely on it.

## What this script is, and where it sits

Operational qualification proves a configured system behaves as the functional specification (FS) defines. The positive functional script shows the function does the right thing with valid input. This script shows the other half: the function does the right thing with wrong input, and at the exact edges of what is allowed. The two together are how you demonstrate a function is actually controlled, not just demonstrable on a good day.

Boundary and negative testing answers three questions an inspector will ask of any data-entry or calculation function. First, does the system enforce its stated limits exactly, accepting the value at the limit and rejecting the value just past it? Second, when a value is invalid, the wrong type, out of range, missing from a mandatory field, or in the wrong format, does the system refuse it rather than silently store, truncate, or substitute something? Third, and most important for data integrity, when the system rejects an input, does it leave the existing record and any related data untouched, with no partial save, no corrupted field, and no orphaned entry?

Under FDA's Computer Software Assurance approach, the depth here scales with risk. A function that gates a release decision, sets an acceptance limit, or feeds a calculation that affects patient safety earns the full scripted treatment below. A low-risk, display-only function may justify a lighter record. Decide that risk first, in the risk assessment, then write the script. This script sits below the OQ protocol, which says what will be tested and why, and feeds the traceability matrix, which links each requirement, especially the requirements that say "the system shall reject" or "the system shall enforce", to the evidence that exercised it.

## Document control header

| Field | Entry |
|---|---|
| Test script title | `<<FILL: function-specific title, e.g. Result Entry, Boundary and Negative>>` |
| Test script ID | `<<FILL: TS-ID, e.g. TS-OQ-043>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Parent OQ protocol / plan | `<<FILL: OQ protocol or validation plan ID this script runs under>>` |
| Linked positive script | `<<FILL: TS-ID of the normal-path functional script for this function>>` |
| System name and ID | `<<FILL: SYSTEM NAME / ID>>` |
| Software version / build | `<<FILL: exact version, build, patch level under test>>` |
| Configuration baseline | `<<FILL: config spec / baseline ID and version, frozen for OQ>>` |
| Test environment | `<<FILL: qualified validation environment, not production>>` |
| Function risk (drives rigor) | `<<FILL: High / Medium / Low, per the risk assessment>>` |
| Author | `<<FILL: name, role>>` |
| Effective date | `<<FILL: date>>` |

## 1. Function and requirement traced

State the single function this script challenges and the requirements it traces to. Boundary and negative work usually traces to the constraint-style requirements: stated ranges, mandatory fields, allowed formats, and the FS or URS statements that say the system shall reject, shall enforce, or shall not permit. Every requirement listed here must be exercised by at least one numbered step, and no step should test a limit no requirement defined.

| Function under test | Requirement ID | Requirement text (summary) | Source document | Risk |
|---|---|---|---|---|
| `<<FILL: e.g. enter and save a numeric result within its valid range>>` | `<<FILL: FS-3.4.2 / URS-023>>` | `<<FILL: the system shall accept results from 0.0 to 100.0 inclusive, reject values outside that range with a message, reject non-numeric and blank mandatory entries, and make no change to the stored record on a rejected entry>>` | `<<FILL: FS-ID / URS-ID, version>>` | `<<FILL: High / Medium / Low>>` |

## 2. Objective

In one or two sentences, state what passing this script demonstrates. Keep it to the boundary and negative scope.

Example: this script verifies that the function accepts the values at the exact lower and upper limits, rejects the values just below and just above the limits and other invalid or missing input, displays a clear and correct message on each rejection, and makes no change to the stored data when an entry is rejected.

`<<FILL: objective>>`

## 3. The limits and rules under test

Before writing steps, write down the exact rules the function is supposed to enforce, taken from the FS or URS, not from the running system. This is the reference the test is judged against, so an inspector can see the expected behavior was defined first.

| Rule | Defined value / behavior | Source (FS/URS clause) |
|---|---|---|
| Lower limit | `<<FILL: e.g. 0.0, inclusive>>` | `<<FILL: FS-3.4.2>>` |
| Upper limit | `<<FILL: e.g. 100.0, inclusive>>` | `<<FILL: FS-3.4.2>>` |
| Allowed data type | `<<FILL: e.g. numeric, up to 1 decimal place>>` | `<<FILL>>` |
| Allowed format / length | `<<FILL: e.g. max field length, date format, no leading spaces>>` | `<<FILL>>` |
| Mandatory fields | `<<FILL: list the fields that may not be blank>>` | `<<FILL>>` |
| Expected behavior on rejection | `<<FILL: e.g. block save, display named error message, keep prior value, no partial write>>` | `<<FILL>>` |
| Error message text expected | `<<FILL: the exact message, or its required content, per the FS>>` | `<<FILL>>` |

## 4. Test data and accounts used

Record the exact data and accounts in play at execution. For boundary and negative testing the value chosen for each step matters as much as the result, so list each one. Where a value sits "just past" a limit, choose the smallest meaningful step past it (for example 100.1 against a limit of 100.0, not 999), so the test challenges the boundary and not a far-off number.

| Item | Value used at execution |
|---|---|
| Test account and role | `<<FILL>>` |
| Record / form used | `<<FILL: record ID, and its known starting state>>` |
| At-limit values to enter | `<<FILL: lower limit and upper limit values>>` |
| Just-outside values to enter | `<<FILL: just below lower limit, just above upper limit>>` |
| Invalid-type / format values | `<<FILL: e.g. text in a numeric field, wrong date format, over-length string>>` |
| Missing-input case | `<<FILL: which mandatory field is left blank>>` |
| Pre-rejection stored value (baseline) | `<<FILL: the value already saved before each negative step, to compare against afterward>>` |

## 5. Execution conventions

Read these before executing, then apply them to every step. They are the rules an inspector expects to see followed consistently, and several are specific to negative testing.

- Record each actual result contemporaneously, as you observe it. For a rejection, write what you actually saw: the exact message text, where it appeared, and that the entry was blocked. "Rejected as expected" is not an actual result.
- A rejection that produces no message, or a wrong or generic message, is a Fail even if the bad value was blocked. A clear, correct, user-readable message is part of the expected behavior, not a nicety.
- After every rejected entry, confirm the stored data is unchanged before moving on. Reopen or re-query the record and compare the saved value to the pre-rejection baseline recorded in section 4. A blocked input that still altered, truncated, or partially wrote the record is a data-integrity Fail.
- At a boundary, test both sides in adjacent steps: the value at the limit (must be accepted) and the value one step past it (must be rejected). A boundary tested on only one side proves nothing about where the edge actually is.
- Use one unambiguous mark for pass or fail. A blank cell is incomplete, not a pass.
- For any single-line correction, strike through once, initial, date, and add a brief reason. Never obliterate the original entry.
- Capture objective evidence for every rejection: a screenshot showing the message, plus evidence that the record was unchanged afterward. Give each piece a unique reference recorded in the step.
- This is a negative script, so the expected result for most steps is that something is refused. If the system accepts a value it should reject, that is a Fail, mark it Fail, do not "help" the system by re-entering until it behaves, and open a deviation per section 8.

## 6. Test steps

Each step gives the action, the precise expected result, the actual result as observed, pass or fail, and the evidence reference. Number steps continuously. Pair each boundary at-limit step with its just-past step, and pair each rejection step with a confirmation that the stored data is unchanged.

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 6.1 | `<<FILL: enter the value at the lower limit, e.g. 0.0>>` | `<<FILL: value accepted; no error; saves per the FS>>` | `<<FILL: observed>>` | `<<FILL>>` | `<<FILL: SCR-001>>` | `<<FILL>>` |
| 6.2 | `<<FILL: enter the value just below the lower limit, e.g. -0.1>>` | `<<FILL: value rejected; save blocked; named error message displayed; field retains no invalid value>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-002>>` | `<<FILL>>` |
| 6.3 | `<<FILL: re-query / reopen the record after 6.2>>` | `<<FILL: stored value unchanged from the pre-rejection baseline; no partial write>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-003>>` | `<<FILL>>` |
| 6.4 | `<<FILL: enter the value at the upper limit, e.g. 100.0>>` | `<<FILL: value accepted; no error; saves per the FS>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-004>>` | `<<FILL>>` |
| 6.5 | `<<FILL: enter the value just above the upper limit, e.g. 100.1>>` | `<<FILL: value rejected; save blocked; named error message displayed>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-005>>` | `<<FILL>>` |
| 6.6 | `<<FILL: re-query / reopen the record after 6.5>>` | `<<FILL: stored value unchanged from baseline>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-006>>` | `<<FILL>>` |
| 6.7 | `<<FILL: enter an invalid data type, e.g. text in the numeric field>>` | `<<FILL: input rejected at entry or on save; correct message; no non-numeric value stored>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-007>>` | `<<FILL>>` |
| 6.8 | `<<FILL: enter a value in the wrong format / over the max length>>` | `<<FILL: input rejected or correctly constrained; message identifies the format rule>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-008>>` | `<<FILL>>` |
| 6.9 | `<<FILL: leave a mandatory field blank and attempt to save>>` | `<<FILL: save blocked; message names the missing mandatory field; no record created>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-009>>` | `<<FILL>>` |
| 6.10 | `<<FILL: re-query the record set after 6.7 to 6.9>>` | `<<FILL: no invalid, partial, or orphaned record exists; prior data intact>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-010>>` | `<<FILL>>` |

Add or remove rows so every limit and every rejection rule in section 3 is exercised, and every constraint requirement in section 1 has at least one step. Keep each at-limit step beside its just-past step. Do not reuse a step number after a revision.

## 7. Acceptance criteria

This script passes only when all of the following are true:

- Each value at a defined limit is accepted, and each value one step past the limit is rejected, so the edge is proven on both sides.
- Each invalid type, wrong format, over-length, and missing mandatory input is rejected, with the save blocked and no invalid value stored.
- Each rejection displays a clear, correct message that a user could act on, matching the content the FS defines.
- After every rejected entry, the stored data is confirmed unchanged against its pre-rejection baseline, with no partial write, no truncation, and no orphaned record.
- No step is left blank or ambiguous; every deviation raised is resolved with a documented disposition, and any retest is recorded under its own step or attachment.
- The completed script is reviewed and approved per section 10, by a reviewer who did not execute it.

A script with one or more open Fail steps, or unresolved deviations, does not pass and cannot support the conclusion in the parent OQ report. In particular, a value accepted that should have been rejected, or a record found changed after a rejection, is a critical Fail for a data-integrity-relevant function.

## 8. Deviations raised during execution

Any step that does not meet its expected result, any departure from the written steps, and any prerequisite not met is recorded here and managed per the parent protocol and `<<FILL: deviation / test-incident SOP-ID>>`. Cross-reference the deviation number on the failing step. Classify by impact: an accepted out-of-range value or a corrupted record on rejection is normally critical; a missing or unclear error message on an otherwise-blocked input is often major.

| Deviation / incident no. | Step | Description (observed vs expected) | Classification | Disposition (retest, config fix, FS clarification, accept with justification) | Closed (date) |
|---|---|---|---|---|---|
| `<<FILL: TI-2026-018>>` | `<<FILL: 6.x>>` | `<<FILL>>` | `<<FILL: critical / major / minor>>` | `<<FILL>>` | `<<FILL>>` |

A failed negative step is not a finding against the tester. It is the script doing its job. What an inspector looks for is that the failure was captured honestly, classified by its real impact on data integrity, dispositioned, and that any retest is traceable to the original failure, not quietly overwritten. Where a rejection message is wrong but the block itself works, the message is corrected under change control and the deviation references that change. Where a value that should be rejected is accepted, treat any data already affected as suspect and assess it for impact before the script is closed.

## 9. Execution summary

| Field | Entry |
|---|---|
| Total steps | `<<FILL>>` |
| Steps passed | `<<FILL>>` |
| Steps failed | `<<FILL>>` |
| Boundaries tested (both sides) | `<<FILL: count>>` |
| Rejections confirmed with no data change | `<<FILL: count>>` |
| Deviations raised / closed | `<<FILL>>` |
| Requirement(s) verified (from section 1) | `<<FILL>>` |
| Overall result | Pass / Fail (`<<FILL>>`) |

## 10. Sign-off

The tester executes and signs; an independent reviewer who did not execute the test confirms the record is complete, the evidence supports each pass, every rejection was confirmed to leave the data unchanged, and any deviation is resolved. The reviewer should not be the same person who executed the script.

| Role | Name | Signature | Date |
|---|---|---|---|
| Tester (executed) | `<<FILL>>` | | |
| Reviewer (independent) | `<<FILL>>` | | |
| QA approval | `<<FILL>>` | | |

## 11. References

> 21 CFR Part 11 (electronic records and electronic signatures), where the system is Part 11 in scope, including the controls that protect record integrity.
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment), including input and output accuracy checks.
> EU GMP Annex 11 (Computerised Systems), sections on validation, accuracy checks, data security, and built-in checks for the correct and secure entry of data.
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> FDA Guidance, Computer Software Assurance for Production and Quality System Software, finalized 24 September 2025 (risk-based scaling of test rigor).
> FDA Guidance, General Principles of Software Validation (2002).
> GAMP 5, A Risk-Based Approach to Compliant GxP Computerized Systems (Second Edition).
> ICH Q9, Quality Risk Management (for the risk basis of test depth).
> For medical device software: 21 CFR Part 820 (QMSR, effective 2 February 2026, incorporating ISO 13485:2016 by reference), IEC 62304, and ISO 14971 (for risk controls that boundary and negative tests verify).

Confirm the current version and clause numbers of each reference before issue.

## 12. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

---

## Filled specimen

The following shows the script executed for an example laboratory information management system (LIMS), challenging a result-entry field whose FS defines a valid range of 0.0 to 100.0 inclusive, numeric to one decimal, with a mandatory analyst field. The company, system, accounts, and numbers are illustrative; replace them with your own.

**Header (extract)**

| Field | Entry |
|---|---|
| Test script title | Result Entry, Boundary and Negative |
| Test script ID | TS-OQ-043, v1.0 |
| Parent OQ protocol | OQ-CSV-031 |
| Linked positive script | TS-OQ-042 (normal path) |
| System name and ID | LIMS, instance LIMS-QA-02 (validation) |
| Software version / build | 8.4.2, build 5210 |
| Configuration baseline | CONFIG-LIMS-008 v3.0, frozen for OQ |
| Function risk | High |

**Limits and rules under test (from FS-LIMS v3.0)**

| Rule | Defined value / behavior |
|---|---|
| Lower limit | 0.0, inclusive |
| Upper limit | 100.0, inclusive |
| Allowed data type | numeric, 1 decimal place |
| Mandatory field | analyst |
| On rejection | block save, show named message, keep prior stored value, no partial write |
| Expected message content | states the field, the rule violated, and the allowed range |

**Test data**

| Item | Value used |
|---|---|
| Test account and role | analyst1, analyst role |
| Record used | SAM-0461, starting stored result 50.0 (baseline) |
| At-limit values | 0.0 and 100.0 |
| Just-outside values | -0.1 and 100.1 |
| Invalid type | "abc" in the result field |
| Missing input | analyst field left blank |

**Test steps (executed)**

| Step | Action | Expected result | Actual result | P/F | Evidence | Initials / date |
|---|---|---|---|---|---|---|
| 6.1 | Enter 0.0 (lower limit) as a new result on SAM-0461. | Accepted; saves to a new result record. | 0.0 accepted; saved as new result record R-2026-0461. | Pass | SCR-001 | AP 11 Jun 2026 |
| 6.2 | Enter -0.1 (just below limit) against the SAM-0461 baseline result. | Rejected; save blocked; message shown. | Rejected; message "Result must be between 0.0 and 100.0" shown at field; save blocked. | Pass | SCR-002 | AP 11 Jun 2026 |
| 6.3 | Reopen SAM-0461 baseline result after 6.2. | Stored baseline result unchanged from 50.0. | SAM-0461 baseline result still 50.0, unchanged; no partial write. | Pass | SCR-003 | AP 11 Jun 2026 |
| 6.4 | Enter 100.0 (upper limit) as a new result on SAM-0461. | Accepted; saves to a new result record. | 100.0 accepted; saved as new result record R-2026-0462. | Pass | SCR-004 | AP 11 Jun 2026 |
| 6.5 | Enter 100.1 (just above limit) against the SAM-0461 baseline result. | Rejected; save blocked; message shown. | Rejected; same range message shown; save blocked. | Pass | SCR-005 | AP 11 Jun 2026 |
| 6.6 | Reopen SAM-0461 baseline result after 6.5. | Stored baseline result unchanged from 50.0. | SAM-0461 baseline result still 50.0, unchanged; no change. | Pass | SCR-006 | AP 11 Jun 2026 |
| 6.7 | Enter "abc" in result field. | Non-numeric rejected; message; nothing stored. | Field rejected entry on tab-out; message "Enter a number to 1 decimal"; no value stored. | Pass | SCR-007 | AP 11 Jun 2026 |
| 6.8 | Enter 50.55 (two decimals). | Rejected or constrained to FS rule; message identifies format. | Rejected; message "Maximum 1 decimal place"; value not stored. | Pass | SCR-008 | AP 11 Jun 2026 |
| 6.9 | Leave analyst field blank, attempt save. | Save blocked; message names missing field; no record created. | Save blocked; message "Analyst is required"; no record created. | Pass | SCR-009 | AP 11 Jun 2026 |
| 6.10 | Re-query record set after 6.7 to 6.9. | No invalid or orphaned record; prior data intact. | Only R-2026-0461 and R-2026-0462 present; no partial or orphaned rows; SAM-0461 intact. | Pass | SCR-010 | AP 11 Jun 2026 |

**Execution summary**

| Field | Entry |
|---|---|
| Total steps | 10 |
| Steps passed | 10 |
| Steps failed | 0 |
| Boundaries tested (both sides) | 2 (lower and upper) |
| Rejections confirmed with no data change | 5 |
| Deviations raised / closed | 0 / 0 |
| Requirement(s) verified | FS-3.4.2 / URS-023 |
| Overall result | Pass |

**Sign-off**

| Role | Name | Date |
|---|---|---|
| Tester (executed) | A. Patel, signed | 11 Jun 2026 |
| Reviewer (independent) | R. Gomez, signed | 12 Jun 2026 |
| QA approval | S. Lin, signed | 12 Jun 2026 |

In this example the tester proved each boundary on both sides, accepting 0.0 and 100.0 into new result records and rejecting -0.1 and 100.1, recorded the exact message text rather than "rejected as expected", and after every rejection reopened the SAM-0461 baseline result to confirm its stored value of 50.0 had not moved. Had step 6.5 accepted 100.1, the tester would have marked it Fail, opened a critical test incident, and treated any data the over-range value touched as suspect, which is the behavior section 8 is built to capture. Had the block worked at 6.2 but shown no message, that would still be a Fail, because a clear message is part of the defined behavior.

## Common inspection findings this script prevents

- Only the happy path tested, with no evidence that the system rejects out-of-range, invalid, or missing input, so a stated limit is never proven to be enforced.
- A boundary tested on only one side (the value just past the limit checked, but never the value at the limit, or the reverse), leaving the actual edge unproven.
- "Rejected as expected" written as the actual result, with no record of the message text, where it appeared, or whether the entry was actually blocked.
- A bad input blocked but no check that the stored record was unchanged, so a silent partial write or truncation on rejection would go undetected.
- A wrong, generic, or absent error message accepted as a pass because the value was blocked, when a clear message was part of the requirement.
- A value that should be rejected accepted during testing, then quietly re-entered until it behaved, with no test incident and no assessment of data the bad value touched.
- A "just past" value chosen far from the limit (999 against a limit of 100), which tests a number nobody disputes instead of the boundary itself.
- Constraint requirements ("the system shall reject", "the system shall enforce") in the traceability matrix with no executed step that exercises them.
- The same person executing and reviewing, with no independent check that each rejection truly left the data clean.
- Testing run in production, or against a different software version or unfrozen configuration than the one being qualified.

## How to adapt this script

1. Set your test script ID, parent OQ protocol, linked positive script, software version, and configuration baseline in the header, and confirm you are testing in a qualified non-production environment with IQ approved.
2. Decide the risk of the function first, then keep or trim the step depth and evidence to match; reserve the full scripted treatment, especially the after-rejection data-integrity checks, for higher-risk and data-integrity-relevant functions.
3. Fill section 3 with the real limits, types, formats, and mandatory fields from your FS or URS, taken from the specification and not from the running system, so the expected behavior is defined before you test it.
4. Choose just-past values that sit one meaningful step past each limit, and pair every at-limit step with its just-past step in section 6.
5. Record a pre-rejection baseline for each negative step and re-query the record after every rejection to confirm nothing changed; treat any change as a critical Fail.
6. Capture both the message and the unchanged-record evidence for each rejection, and tie each piece of evidence to its step.
7. Point the cross-references in sections 3, 8, and 10 to your real FS or URS, deviation or test-incident procedure, and review and approval process.
8. Confirm every regulation in section 11 against the current published version before issue.
