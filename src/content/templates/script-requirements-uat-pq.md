---
title: "Test Script: Requirements-Based / UAT (PQ)"
description: "A plug-and-play requirements-based UAT/PQ test script that walks one end-to-end business scenario, run by a real user and traced to a URS requirement, with step, expected, actual, pass or fail, and evidence columns, plus a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Template"
pillar: "csv-csa"
relatedArticles: ["writing-validation-protocols-and-reports", "validation-test-failure-management"]
tags: ["uat", "performance qualification", "test script", "csv", "csa", "requirements traceability", "21 cfr part 11", "user acceptance testing"]
tier: "Intermediate"
---

This is a ready-to-use requirements-based test script for user acceptance testing, executed as the performance qualification (PQ) of a GxP computerized system. One script runs one whole business scenario, end to end, the way a real user runs it in production, and proves that one user requirement (or a tight group of related requirements) is met in real use. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, run it under an approved PQ/UAT protocol, and route the executed record through your normal review and approval. A worked filled specimen follows the template so you can see how a completed version reads. A UAT script is contemporaneous GxP evidence: write each actual result as you observe it, in ink or in the validated tool, never reconstructed later. Verify each cited regulation against the current source before you rely on it.

## What this script is, and how it differs from an OQ script

A requirements-based UAT/PQ script is not a function-by-function check. It follows a complete business process from the trigger a user actually starts with (a sample arrives, a batch is initiated, a complaint is logged) through to the record the process must produce (an approved result, a released batch record, a closed complaint), run by the role that will run it in production, with the real-world data they will use. The protocol or validation plan says which scenarios you will run and why; this script says exactly how, captures what actually happened step by step, and ties back to the specific URS requirement it verifies. OQ asks "does the feature work as built?" PQ/UAT asks "does the system do the user's job correctly in production conditions?" Keep the two phases distinct; a UAT script that just re-runs OQ steps proves nothing new.

Under a Computer Software Assurance approach the rigor of the script scales with risk. A high-risk scenario that drives a release decision, a calculation, or an electronic signature earns a fully scripted, step-by-step record like the template below; a low-risk, non-record scenario may justify a lighter, unscripted record. Decide that risk before you write the script.

## Document control header

| Field | Entry |
|---|---|
| Test script title | `<<FILL: scenario title, e.g. End-to-End Sample Result Entry, Review, and Release>>` |
| Test script ID | `<<FILL: TS-ID, e.g. UAT-PQ-021>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Parent protocol / plan | `<<FILL: PQ/UAT protocol ID this script executes under, e.g. PQ-CSV-031>>` |
| System name and ID | `<<FILL: SYSTEM NAME / ID>>` |
| System version / build | `<<FILL: software version, build, patch level being released>>` |
| Test environment | `<<FILL: production-equivalent validation environment, not production>>` |
| Test phase | PQ / UAT (run as one phase) |
| Test type and risk | `<<FILL: scripted; scenario risk High / Medium / Low>>` |
| Author | `<<FILL: name, role, e.g. Validation Lead>>` |
| Effective date | `<<FILL: date>>` |

## 1. Requirement traced

State exactly which user requirement this scenario verifies, so the traceability matrix can link the requirement to its evidence in both directions. The scenario must exercise every requirement listed here, and every step below must trace to a requirement.

| Requirement ID | Requirement text (summary) | Source document | Risk |
|---|---|---|---|
| `<<FILL: URS-022>>` | `<<FILL: a user with the analyst role shall enter a result, the system shall calculate the reportable value per the defined method, and a second user with the reviewer role shall electronically approve it before release>>` | `<<FILL: URS-ID, version>>` | `<<FILL: High / Medium / Low>>` |

## 2. Business scenario and objective

In two or three sentences, state the real-world scenario this script runs and what passing it demonstrates in business terms, not feature terms. Name the trigger, the roles involved, and the final record produced.

`<<FILL: scenario and objective, e.g. A sample arrives in the lab; a QC analyst logs it, enters two replicate readings, the system calculates the reportable result per method ASSAY-01, a QC reviewer checks the data and electronically approves it, and the approved result is released. Passing this script demonstrates that the end-to-end result lifecycle meets URS-022 with correct calculation, enforced segregation of duties, a bound electronic signature, and a complete audit trail.>>`

## 3. Prerequisites

List everything that must be true before execution starts. If any prerequisite is not met, do not execute; record the gap as a deviation per section 9 and stop. UAT specifically depends on a production-equivalent build and the real user roles, so verify those, not just that the software is installed.

| No. | Prerequisite | Verified (initials / date) |
|---|---|---|
| 3.1 | Parent PQ/UAT protocol `<<FILL: ID>>` is approved and effective. | `<<FILL>>` |
| 3.2 | IQ `<<FILL: ID>>` and OQ `<<FILL: ID>>` are complete; no open OQ item blocks this scenario. | `<<FILL>>` |
| 3.3 | System is at the to-be-released version `<<FILL: version / build>>` in a production-equivalent environment. | `<<FILL>>` |
| 3.4 | Test accounts exist with the exact production roles this scenario needs: `<<FILL: e.g. one analyst role, one reviewer role>>`. | `<<FILL>>` |
| 3.5 | Representative test data is loaded and labeled as test data: `<<FILL: data set / record IDs>>`. | `<<FILL>>` |
| 3.6 | Interfaces to `<<FILL: upstream / downstream system>>` are connected as in production (if the scenario crosses them). | `<<FILL>>` |
| 3.7 | System clock and time zone are configured and synchronized per `<<FILL: ref>>`. | `<<FILL>>` |
| 3.8 | Each tester is trained on this script and on the system, training records `<<FILL: refs>>`. | `<<FILL>>` |

## 4. Roles, accounts, and test data used

A requirements-based UAT script is run by real user roles, sometimes more than one in the same scenario. Record exactly who ran which part, with which account, against which data.

| Item | Value used at execution |
|---|---|
| Tester role(s) and account(s) | `<<FILL: e.g. analyst role / acct analyst1; reviewer role / acct reviewer1>>` |
| Input data set / record IDs | `<<FILL>>` |
| Expected reportable values / calculation inputs | `<<FILL: replicate readings, method factor, rounding rule>>` |
| Interfaces in scope | `<<FILL: upstream / downstream systems exercised, or None>>` |

## 5. Execution conventions

Read these before executing, then follow them for every step. They are the rules an inspector expects to see applied consistently.

- Record each actual result contemporaneously, as you observe it, in the actual result cell. Do not pre-fill, do not batch at the end.
- "Meets expected result" is not an actual result. Write what you actually saw: the value, the calculated number, the message text, the screen state, the timestamp, the signature meaning.
- Use one unambiguous mark for pass or fail. A blank cell is incomplete, not a pass.
- For any single-line correction, strike through once, initial, date, and add a brief reason. Never obliterate the original entry.
- Capture objective evidence (screenshot, system report, audit trail export, signed-record printout) for every step whose pass depends on a system output, and give that evidence a unique reference recorded in the step.
- When the scenario hands off between roles, the second tester logs in with their own account and records their own initials; do not let one person execute steps assigned to two roles.
- The moment any step does not meet its expected result, mark it Fail, stop if instructed, and raise a defect per section 9. Do not retest a failed step in place without a documented disposition.

## 6. Test steps

Run the whole scenario in sequence. For each step give the action, the precise expected result, the actual result as observed, pass or fail, and the evidence reference. The expected result must be written before execution and must be specific enough that two people would agree on whether it was met. The steps below illustrate a result-lifecycle scenario; replace them with your own scenario, keeping the end-to-end flow, the role handoff, the calculation, the signature, and the audit-trail check where they apply.

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 6.1 | `<<FILL: log in as the analyst-role account and start the scenario, e.g. log in the sample>>` | `<<FILL: login succeeds; user/role shown matches the account; record created with a system ID>>` | `<<FILL: observed>>` | `<<FILL>>` | `<<FILL: SCR-001>>` | `<<FILL>>` |
| 6.2 | `<<FILL: enter the real-world input data, e.g. two replicate readings>>` | `<<FILL: both values save; neither can be overwritten without an audit trail entry>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-002>>` | `<<FILL>>` |
| 6.3 | `<<FILL: trigger the calculation the URS requires>>` | `<<FILL: reportable value equals the method-defined result, with the correct units and rounding, e.g. 12.55 mg/mL to two decimals>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-003>>` | `<<FILL>>` |
| 6.4 | `<<FILL: as the analyst, attempt to approve own result>>` | `<<FILL: system blocks the action; analyst role cannot approve its own record (segregation of duties)>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-004>>` | `<<FILL>>` |
| 6.5 | `<<FILL: submit the record for review>>` | `<<FILL: status moves to pending review; analyst can no longer edit>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-005>>` | `<<FILL>>` |
| 6.6 | `<<FILL: log in as the reviewer-role account and open the record>>` | `<<FILL: reviewer sees full data, calculation, and audit trail>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-006>>` | `<<FILL>>` |
| 6.7 | `<<FILL: apply the electronic signature with meaning Approved>>` | `<<FILL: signature binds to the record with name, accurate date/time, and the meaning Approved; an unsigned record cannot advance>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-007>>` | `<<FILL>>` |
| 6.8 | `<<FILL: re-open the approved record and read the audit trail>>` | `<<FILL: audit trail shows entry, calculation, submission, and approval with who, what, when, and old/new values, and cannot be edited by an ordinary user>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-008>>` | `<<FILL>>` |

Add or remove rows so the scenario runs from real trigger to final record and every requirement in section 1 is exercised. Number steps continuously; do not reuse a number after a revision.

## 7. Acceptance criteria

This script passes only when all of the following are true:

- Every step needed to verify the requirements in section 1 is marked Pass, with a recorded actual result and, where applicable, an evidence reference.
- The scenario ran end to end through the real role handoff, not as disconnected single-screen checks.
- The calculated or reportable value matched the method exactly, including units and rounding.
- Segregation of duties held: the user who created the record could not also be its sole approver.
- The electronic signature bound to the record with name, date/time, and meaning, and the audit trail captured who/what/when/old-new.
- No step is left blank or ambiguous; every defect raised during execution is resolved with a documented disposition, and any retest is recorded under its own step or attachment.
- The completed script is reviewed and approved per section 11.

A script with one or more open Fail steps, or unresolved critical defects, does not pass and cannot support release in the parent report.

## 8. Evidence index

List every piece of objective evidence captured, so a reviewer can find each one without hunting.

| Evidence ref | Description | Step | Storage location / attachment |
|---|---|---|---|
| `<<FILL: SCR-001>>` | `<<FILL: record created, role shown>>` | 6.1 | `<<FILL>>` |
| `<<FILL: SCR-003>>` | `<<FILL: calculated result screen>>` | 6.3 | `<<FILL>>` |
| `<<FILL: SCR-007>>` | `<<FILL: bound electronic signature>>` | 6.7 | `<<FILL>>` |
| `<<FILL: SCR-008>>` | `<<FILL: audit trail export>>` | 6.8 | `<<FILL>>` |

## 9. Defects raised during execution

Any step that does not meet its expected result, any departure from the written steps, and any prerequisite not met is recorded here and managed per the parent protocol and `<<FILL: deviation / test-incident SOP-ID>>`. Cross-reference the defect number on the failing step. Classify by impact on the GxP record or release decision.

| Defect / incident no. | Step | Description (actual vs expected) | Severity | Disposition (fix and retest, requirement change, accept with justification) | Closed (date) |
|---|---|---|---|---|---|
| `<<FILL: DEF-2026-007>>` | `<<FILL: 6.x>>` | `<<FILL: what was observed vs expected>>` | `<<FILL: critical / major / minor>>` | `<<FILL>>` | `<<FILL>>` |

A failed step is not a finding against the tester. It is data. The discipline an inspector looks for is that the failure was captured honestly, classified, dispositioned, and that any retest traces to the original failure, not quietly overwritten. A critical defect (wrong result, signature or audit trail failure, segregation-of-duties gap) must be fixed and the affected steps re-executed and passed before release; if the fix changes configuration or code, re-trigger the change assessment and regression of affected steps.

## 10. Execution summary

| Field | Entry |
|---|---|
| Total steps | `<<FILL>>` |
| Steps passed | `<<FILL>>` |
| Steps failed | `<<FILL>>` |
| Defects raised / closed | `<<FILL>>` |
| Requirements verified (from section 1) | `<<FILL>>` |
| Overall result | Pass / Fail (`<<FILL>>`) |

## 11. Sign-off

The tester(s) who executed the scenario sign; the business process owner accepts the result for their process; an independent reviewer who did not execute the test confirms the record is complete, the evidence supports each pass, and defects are resolved. The reviewer should not be a person who executed the script.

| Role | Name | Signature | Date |
|---|---|---|---|
| Tester(s) (executed) | `<<FILL>>` | | |
| Business process owner (accepts) | `<<FILL>>` | | |
| Reviewer (independent) | `<<FILL>>` | | |
| QA approval | `<<FILL>>` | | |

## 12. References

> 21 CFR Part 11 (electronic records and electronic signatures), where the system is Part 11 in scope.
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment).
> EU GMP Annex 11 (Computerised Systems), section 4 (validation) and section 14 (electronic signatures).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision, for the PQ stage.
> GAMP 5, Second Edition (a risk-based approach to compliant GxP computerized systems).
> FDA Computer Software Assurance for Production and Quality System Software, final guidance, 24 September 2025 (risk-based scaling of test rigor).
> ICH Q9 (Quality Risk Management), for the risk basis of test depth.
> For medical device software: 21 CFR Part 820 (QMSR, effective 2 February 2026, incorporating ISO 13485:2016) and IEC 62304.

Confirm the current version and clause numbers of each reference before issue.

## 13. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

---

## Filled specimen

The following shows the script executed for an example laboratory information management system (LIMS) PQ, running the end-to-end result lifecycle as a real analyst and a real reviewer, traced to one URS requirement. The company, system, accounts, and numbers are illustrative; replace them with your own.

**Header (extract)**

| Field | Entry |
|---|---|
| Test script title | End-to-End Sample Result Entry, Review, and Electronic Approval |
| Test script ID | UAT-PQ-021, v1.0 |
| Parent protocol | PQ-CSV-031 |
| System name and ID | Laboratory Information Management System, instance LIMS-VAL (production-equivalent) |
| System version / build | 11.4.2, build 5520 (release candidate) |
| Test phase / type | PQ / UAT, scripted, scenario risk High |

**Requirement traced**

| Requirement ID | Requirement text (summary) | Source | Risk |
|---|---|---|---|
| URS-022 | An analyst-role user shall enter replicate readings; the system shall calculate the reportable result per method ASSAY-01 with correct units and rounding; a reviewer-role user, who is not the analyst, shall electronically approve before release; all changes shall be captured in a non-editable audit trail. | URS-LIMS v3.0 | High |

**Scenario and objective (extract):** A sample arrives, analyst1 logs it and enters two absorbance readings, the system calculates the reportable result, reviewer1 checks and electronically approves it, and the approved result is released. Passing demonstrates correct calculation, enforced segregation of duties, a bound electronic signature, and a complete audit trail in real use.

**Test steps (executed)**

| Step | Action | Expected result | Actual result | P/F | Evidence | Initials / date |
|---|---|---|---|---|---|---|
| 6.1 | Log in as analyst1 (analyst role); log in sample SMP-2026-0413. | Login succeeds; role shows analyst; record created with system ID. | Login succeeded; header showed "analyst1, QC Analyst"; record SMP-2026-0413 created. | Pass | SCR-001 | AP 12 Jun 2026 |
| 6.2 | Enter replicate readings 0.512 and 0.508 absorbance units. | Both values save; neither editable without an audit trail entry. | Both saved; editing 0.512 to 0.515 forced a reason and logged an audit entry; original kept. | Pass | SCR-002 | AP 12 Jun 2026 |
| 6.3 | Trigger result calculation (method factor 24.6, ASSAY-01). | Reportable value = mean x 24.6 = 12.55 mg/mL, two decimals per ASSAY-01. | Calculated 12.55 mg/mL, displayed to two decimals; matched manual check 12.546 rounded. | Pass | SCR-003 | AP 12 Jun 2026 |
| 6.4 | As analyst1, attempt to approve own result. | System blocks; analyst role cannot approve its own record. | Approve action returned "Analyst cannot approve own result"; no approval recorded. | Pass | SCR-004 | AP 12 Jun 2026 |
| 6.5 | Submit result for review. | Status moves to Pending Review; analyst can no longer edit. | Status "Pending Review"; edit fields locked for analyst1. | Pass | SCR-005 | AP 12 Jun 2026 |
| 6.6 | Log in as reviewer1 (reviewer role); open the record. | Reviewer sees full data, calculation, and audit trail. | reviewer1 saw readings, 12.55 mg/mL result, and the audit trail to date. | Pass | SCR-006 | MO 12 Jun 2026 |
| 6.7 | Apply electronic signature, meaning Approved. | Signature binds with name, accurate date/time, meaning Approved; unsigned record cannot advance. | Signature bound: "reviewer1, 12 Jun 2026 14:07 EDT, Approved"; status moved to Released. | Pass | SCR-007 | MO 12 Jun 2026 |
| 6.8 | Re-open the released record; read the audit trail. | Audit trail shows entry, edit, calculation, submission, approval with who/what/when/old-new; not editable by ordinary user. | All events present with user, timestamp, old/new; analyst1 and reviewer1 could not edit or delete entries. | Pass | SCR-008 | MO 12 Jun 2026 |

**Execution summary**

| Field | Entry |
|---|---|
| Total steps | 8 |
| Steps passed | 8 |
| Steps failed | 0 |
| Defects raised / closed | 1 / 0 |
| Requirements verified | URS-022 |
| Overall result | Pass |

**Defect (extract):** DEF-2026-031 (Minor), step 6.7. The approval printout showed local time without a time zone label, though the on-screen entry and audit trail both showed "EDT". No GxP-record or decision impact. Deferred with QA disposition; corrective action LIMS-CR-2026-067 to add the time zone label to the printout, tracked to closure.

**Sign-off**

| Role | Name | Date |
|---|---|---|
| Tester (analyst steps) | A. Patel, signed | 12 Jun 2026 |
| Tester (reviewer steps) | M. Ortega, signed | 12 Jun 2026 |
| Business process owner | QC Lab Manager, signed | 13 Jun 2026 |
| Reviewer (independent) | R. Gomez, signed | 13 Jun 2026 |
| QA approval | S. Lin, signed | 13 Jun 2026 |

In this example two real roles ran the whole workflow, the analyst could not approve their own result, the calculated value and rounding matched the method exactly, the electronic signature carried meaning and bound to the record, and the audit trail captured who/what/when/old-new and resisted edit. The one defect found was a printout label issue with no record impact, so it was classified minor, dispositioned by QA, and tracked to closure rather than waved away. Had step 6.4 instead let the analyst approve their own result, the tester would have marked it Fail, raised a critical defect, and held release, which is the behavior section 9 is built to capture.

## Common inspection findings this script prevents

- A UAT/PQ script that only re-runs single-screen OQ checks, so no one ever proved the real end-to-end business process works.
- Steps marked Pass with the actual-result column filled in only as "meets expected result", giving no evidence of what was actually observed.
- Expected results written or amended after execution, so the test cannot fail.
- A URS requirement with no executed scenario that exercises it, or a step that tests something the requirement never asked for, leaving traceability with gaps in one or both directions.
- Segregation of duties never tested in UAT, so the same user can create and approve a GxP record.
- A calculation accepted without checking units and rounding against the defined method.
- An electronic signature that does not bind to the record or does not capture its meaning.
- One person executing steps assigned to two different roles, defeating the point of the role handoff.
- A failed step quietly retested and overwritten, with no defect record, no disposition, and no link between the failure and the eventual pass.
- The same person executing and reviewing the script, with no independent check that the evidence supports the conclusion.
- Testing run in production, or against a different build than the one being released, with no record of the actual version tested.
- Objective evidence referenced but not retained, so the executed scenario cannot be reconstructed later.

## How to adapt this script

1. Set your test script ID, parent PQ/UAT protocol, system version, and effective date in the header, and confirm you are testing a production-equivalent, release-candidate build in a non-production environment.
2. Replace the illustrative result-lifecycle scenario in section 6 with your own end-to-end business process, keeping the real trigger, the role handoff, any calculation, any electronic signature, and the audit-trail check where they apply.
3. List the real URS requirement IDs in section 1 and confirm the scenario exercises each one; keep the script and your traceability matrix in agreement in both directions.
4. Write every expected result before execution, specific enough that two people would agree on the outcome, especially for calculated values, signature meaning, and access behavior.
5. Run each role's steps under that role's own account and initials; do not collapse two roles into one tester.
6. Point the cross-references in sections 3, 9, and 11 to your real IQ/OQ, deviation or test-incident procedure, and review and approval process.
7. Decide the scenario's risk first; reserve this full scripted level for higher-risk processes and record a lighter, contemporaneous record where CSA justifies less scripting.
8. Confirm every regulation in section 12 against the current published version before issue.
