---
title: "Test Script (Generic)"
description: "A reusable computer system validation test script template with traceable header, numbered steps carrying expected and actual results, pass or fail, evidence references, tester and reviewer sign-off, and deviation cross-reference, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Template"
pillar: "csv-csa"
relatedArticles: ["writing-validation-protocols-and-reports", "validation-test-failure-management"]
tags: ["test script", "csv", "csa", "iq oq pq", "traceability", "21 cfr part 11", "validation testing"]
tier: "Intermediate"
---

This is a ready-to-use test script. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and run it under an approved validation plan or protocol. A worked filled specimen follows the template so you can see how a completed version reads. A test script is contemporaneous GxP evidence: write each actual result as you observe it, in ink or in the validated tool, never reconstructed later. Verify each cited regulation against the current source before you rely on it.

## What a test script is, and is not

A test script is the executable record that proves one requirement, or a tight group of related requirements, behaves as specified. It is not a protocol and not a summary report. The protocol or validation plan says what you will test and why; the script says exactly how, captures what actually happened step by step, and ties back to the requirement it verifies. Under a modern Computer Software Assurance approach, the rigor of the script should scale with the risk of the feature it tests: a high-risk function that affects product quality or patient safety earns scripted, step-by-step verification like the template below, while a low-risk feature may justify unscripted or limited testing with a lighter record. Decide that risk before you write the script, not after.

## Document control header

| Field | Entry |
|---|---|
| Test script title | `<<FILL: descriptive title, e.g. Audit Trail Capture, Result Modification>>` |
| Test script ID | `<<FILL: TS-ID, e.g. TS-OQ-018>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Parent protocol / plan | `<<FILL: protocol or plan ID this script executes under>>` |
| System name and ID | `<<FILL: SYSTEM NAME / ID>>` |
| System version / build | `<<FILL: software version, build, patch level>>` |
| Test environment | `<<FILL: validation / qualification environment, not production>>` |
| Test phase | IQ / OQ / PQ / UAT (`<<FILL: select one>>`) |
| Test type and risk | `<<FILL: scripted / limited / unscripted; risk High / Medium / Low>>` |
| Author | `<<FILL: name, role>>` |
| Effective date | `<<FILL: date>>` |

## 1. Requirement traced

State exactly which requirement this script verifies, so the traceability matrix can link the requirement to its evidence in both directions. One script may cover more than one requirement, but every requirement listed here must be exercised by at least one numbered step below.

| Requirement ID | Requirement text (summary) | Source document | Risk |
|---|---|---|---|
| `<<FILL: URS-014>>` | `<<FILL: the system shall record an audit trail entry for any change to a reportable result, capturing old value, new value, user, timestamp, and reason>>` | `<<FILL: URS-ID, version>>` | `<<FILL: High / Medium / Low>>` |

## 2. Objective

In one or two sentences, state what passing this script demonstrates. Example: this script verifies that the system captures a complete, attributable, time-stamped audit trail entry whenever a reportable result is modified, and that the entry cannot be edited or deleted by an ordinary user.

`<<FILL: objective>>`

## 3. Prerequisites

List everything that must be true before execution starts. If any prerequisite is not met, do not execute; record the gap as a deviation and stop.

| No. | Prerequisite | Verified (initials / date) |
|---|---|---|
| 3.1 | Parent protocol `<<FILL: ID>>` is approved and effective. | `<<FILL>>` |
| 3.2 | System is installed at version `<<FILL: version>>` in the test environment, confirmed by IQ `<<FILL: ref>>`. | `<<FILL>>` |
| 3.3 | Test accounts exist with the required roles: `<<FILL: e.g. one analyst-level, one reviewer-level, one admin>>`. | `<<FILL>>` |
| 3.4 | Test data set `<<FILL: ID or description>>` is loaded and known. | `<<FILL>>` |
| 3.5 | System clock and time zone are configured and synchronized per `<<FILL: ref>>`. | `<<FILL>>` |
| 3.6 | The tester is trained on this script and on the system, training record `<<FILL: ref>>`. | `<<FILL>>` |

## 4. Test data and accounts used

| Item | Value used at execution |
|---|---|
| Test account(s) and role(s) | `<<FILL>>` |
| Input data set / record IDs | `<<FILL>>` |
| Expected values referenced | `<<FILL>>` |

## 5. Execution conventions

Read these before executing, then follow them for every step. They are the rules an inspector expects to see applied consistently.

- Record each actual result contemporaneously, as you observe it, in the actual result cell. Do not pre-fill, do not batch at the end.
- "Meets expected result" is not an actual result. Write what you actually saw: the value, the message text, the screen state, the timestamp.
- Use one unambiguous mark for pass or fail. A blank cell is incomplete, not a pass.
- For any single-line correction, strike through once, initial, date, and add a brief reason. Never obliterate the original entry.
- Capture objective evidence (screenshot, report printout, data export) for every step whose pass depends on a system output, and give that evidence a unique reference recorded in the step.
- The moment any step does not meet its expected result, mark it Fail, stop if instructed, and open a deviation per section 9. Do not retest a failed step in place without a documented disposition.

## 6. Test steps

For each step give the action, the precise expected result, the actual result as observed, pass or fail, and the evidence reference. The expected result must be written before execution and must be specific enough that two people would agree on whether it was met.

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 6.1 | `<<FILL: log in as the analyst-level account>>` | `<<FILL: login succeeds; user name shown in header matches the account used>>` | `<<FILL: observed>>` | `<<FILL>>` | `<<FILL: SCR-001>>` | `<<FILL>>` |
| 6.2 | `<<FILL: open record / result>>` and record the original value | `<<FILL: original value displayed is the known test value>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-002>>` | `<<FILL>>` |
| 6.3 | `<<FILL: change the value, enter a reason, save>>` | `<<FILL: change saves; reason-for-change is required and accepted>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-003>>` | `<<FILL>>` |
| 6.4 | `<<FILL: open the audit trail for the record>>` | `<<FILL: one entry shows old value, new value, the analyst user ID, an accurate timestamp, and the reason entered>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-004>>` | `<<FILL>>` |
| 6.5 | `<<FILL: attempt to edit or delete the audit trail entry as the analyst account>>` | `<<FILL: action is blocked; system prevents edit/delete and gives an authorization message>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-005>>` | `<<FILL>>` |

Add or remove rows so every requirement in section 1 is exercised. Number steps continuously; do not reuse a number after a revision.

## 7. Acceptance criteria

This script passes only when all of the following are true:

- Every step required to verify the requirements in section 1 is marked Pass, with a recorded actual result and, where applicable, an evidence reference.
- No step is left blank or ambiguous.
- Every deviation raised during execution is resolved with a documented disposition, and any retest is recorded under its own step or attachment.
- The completed script is reviewed and approved per section 11.

A script with one or more open Fail steps, or unresolved deviations, does not pass and cannot support the conclusion in the parent report.

## 8. Evidence index

List every piece of objective evidence captured, so a reviewer can find each one without hunting.

| Evidence ref | Description | Step | Storage location / attachment |
|---|---|---|---|
| `<<FILL: SCR-001>>` | `<<FILL: login screen>>` | 6.1 | `<<FILL>>` |
| `<<FILL: SCR-004>>` | `<<FILL: audit trail entry detail>>` | 6.4 | `<<FILL>>` |

## 9. Deviations raised during execution

Any step that does not meet its expected result, any departure from the written steps, and any prerequisite not met is recorded here and managed per the parent protocol and `<<FILL: deviation / test-incident SOP-ID>>`. Cross-reference the deviation number on the failing step.

| Deviation / incident no. | Step | Description | Classification | Disposition (retest, requirement change, accept with justification) | Closed (date) |
|---|---|---|---|---|---|
| `<<FILL: TI-2026-007>>` | `<<FILL: 6.x>>` | `<<FILL: what was observed vs expected>>` | `<<FILL: critical / major / minor>>` | `<<FILL>>` | `<<FILL>>` |

A failed step is not a finding against the tester. It is data. The discipline an inspector looks for is that the failure was captured honestly, classified, dispositioned, and that any retest is traceable to the original failure, not quietly overwritten.

## 10. Execution summary

| Field | Entry |
|---|---|
| Total steps | `<<FILL>>` |
| Steps passed | `<<FILL>>` |
| Steps failed | `<<FILL>>` |
| Deviations raised / closed | `<<FILL>>` |
| Requirements verified (from section 1) | `<<FILL>>` |
| Overall result | Pass / Fail (`<<FILL>>`) |

## 11. Sign-off

The tester executes and signs; an independent reviewer who did not execute the test confirms the record is complete, the evidence supports each pass, and deviations are resolved. The reviewer should not be the same person who executed the script.

| Role | Name | Signature | Date |
|---|---|---|---|
| Tester (executed) | `<<FILL>>` | | |
| Reviewer (independent) | `<<FILL>>` | | |
| QA approval | `<<FILL>>` | | |

## 12. References

> 21 CFR Part 11 (electronic records and signatures), where the system is Part 11 in scope.
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment).
> EU GMP Annex 11 (Computerised Systems), validation and testing principles.
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> FDA Guidance, Computer Software Assurance for Production and Quality System Software, finalized 24 September 2025 (risk-based scaling of test rigor).
> GAMP 5, Second Edition (a risk-based approach to compliant GxP computerized systems).
> ICH Q9 (Quality Risk Management), for the risk basis of test depth.
> For medical device software: 21 CFR Part 820 (QMSR, effective 2 February 2026, incorporating ISO 13485:2016) and IEC 62304.

Confirm the current version and clause numbers of each reference before issue.

## 13. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

---

## Filled specimen

The following shows the script executed for an example chromatography data system, verifying that a result change is captured in the audit trail and cannot be altered by an ordinary user. The company, system, accounts, and numbers are illustrative; replace them with your own.

**Header (extract)**

| Field | Entry |
|---|---|
| Test script title | Audit Trail Capture, Result Modification |
| Test script ID | TS-OQ-018, v1.0 |
| Parent protocol | OQ-CDS-004 |
| System name and ID | Chromatography Data System, instance CDS-PROD-MIRROR (validation) |
| System version / build | 8.2.1, build 4471 |
| Test phase / type | OQ / scripted, risk High |

**Requirement traced**

| Requirement ID | Requirement text (summary) | Source | Risk |
|---|---|---|---|
| URS-014 | The system shall record an audit trail entry for any change to a reportable result, capturing old value, new value, user, timestamp, and reason, and shall prevent edit or deletion of that entry by non-administrative users. | URS-CDS v3.0 | High |

**Test steps (executed)**

| Step | Action | Expected result | Actual result | P/F | Evidence | Initials / date |
|---|---|---|---|---|---|---|
| 6.1 | Log in as account analyst1 (analyst role). | Login succeeds; header shows analyst1. | Login succeeded; header showed "analyst1". | Pass | SCR-001 | AP 04 Jun 2026 |
| 6.2 | Open result for injection INJ-0312; record original value. | Original value displayed is the known value 98.4. | Displayed value was 98.4. | Pass | SCR-002 | AP 04 Jun 2026 |
| 6.3 | Change value to 99.1, enter reason "manual integration corrected", save. | Save requires a reason and accepts the change. | Reason field was mandatory; change saved after reason entered. | Pass | SCR-003 | AP 04 Jun 2026 |
| 6.4 | Open the audit trail for INJ-0312. | One entry shows old 98.4, new 99.1, user analyst1, accurate timestamp, reason text. | Entry showed: old 98.4, new 99.1, user analyst1, 04 Jun 2026 13:42 EDT, reason "manual integration corrected". Timestamp matched system clock. | Pass | SCR-004 | AP 04 Jun 2026 |
| 6.5 | As analyst1, attempt to edit then delete the audit trail entry. | Both actions blocked with an authorization message. | Edit option was greyed out; delete returned "You do not have permission to modify audit records." No change to the entry. | Pass | SCR-005 | AP 04 Jun 2026 |

**Execution summary**

| Field | Entry |
|---|---|
| Total steps | 5 |
| Steps passed | 5 |
| Steps failed | 0 |
| Deviations raised / closed | 0 / 0 |
| Requirements verified | URS-014 |
| Overall result | Pass |

**Sign-off**

| Role | Name | Date |
|---|---|---|
| Tester (executed) | A. Patel, signed | 04 Jun 2026 |
| Reviewer (independent) | R. Gomez, signed | 05 Jun 2026 |
| QA approval | S. Lin, signed | 05 Jun 2026 |

In this example the tester recorded the exact values and message text seen, not "meets expected", captured a screenshot for every output-dependent step, and a reviewer who did not run the test confirmed the evidence supported each pass. Had step 6.5 instead allowed the analyst to delete the entry, the tester would have marked it Fail, opened a test incident, and held the result, which is the behavior section 9 is built to capture.

## Common inspection findings this template prevents

- Test steps marked "Pass" with the actual result column filled in only as "meets expected result", giving no evidence of what was actually observed.
- Expected results written or amended after execution, so the test cannot fail.
- A requirement in the traceability matrix with no executed step that actually exercises it, or a step that tests something the requirement never asked for.
- Screenshots or printouts referenced but not retained, or evidence that cannot be tied back to the step it supports.
- A failed step quietly retested and overwritten, with no test incident, no disposition, and no link between the failure and the eventual pass.
- The same person executing and reviewing the script, with no independent check that the evidence supports the conclusion.
- Testing run in production, or against a different software version than the one being released, with no record of the actual build tested.
- One uniform level of scripted detail applied to every function regardless of risk, with no documented basis, which is hard to defend now that test rigor is expected to scale with risk.

## How to adapt this template

1. Set your test script ID, parent protocol, system version, and effective date in the header, and confirm you are testing in a qualified non-production environment.
2. Decide the risk of the function first, then choose scripted, limited, or unscripted testing and record that basis. Reserve full step-by-step scripts for higher-risk functions.
3. List the real requirement IDs in section 1 and confirm each one is exercised by at least one numbered step; keep the script and your traceability matrix in agreement in both directions.
4. Write every expected result before execution, specific enough that two people would agree on the outcome.
5. Point the cross-references in sections 3, 9, and 11 to your real protocol, deviation or test-incident procedure, and review and approval process.
6. Confirm every regulation in section 12 against the current published version before issue.
