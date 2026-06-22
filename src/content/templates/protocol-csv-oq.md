---
title: "Computerized System Operational Qualification (OQ) Protocol"
description: "A plug-and-play OQ protocol for a GxP computerized system: functional testing against the functional specification, security and roles, audit trail, calculations, alarms and limits, negative and boundary cases, interfaces, data integrity, test cases, deviations, and summary, with a worked specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Protocol"
pillar: "csv-csa"
relatedArticles: ["gamp5-csv-framework","computer-software-assurance-fda","lims-implementation-and-validation"]
tags: ["operational qualification", "oq", "csv", "computerized system", "21 cfr part 11", "annex 11", "data integrity"]
tier: "Advanced"
---

This is a ready-to-use operational qualification protocol for a GxP computerized system. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach the approved functional specification and configuration the protocol calls for, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

Computerized system OQ proves that the configured software behaves as the functional specification says it does, across the conditions it will face in use. It is the stage after installation qualification (IQ), which confirmed the software, configuration, and environment were installed correctly, and before performance qualification (PQ), which runs the system end to end with trained users on real business workflows. OQ challenges the system against its own design: every function the functional specification (FS) defines, the security model and role permissions, the audit trail, every formula and calculated value, configured alarms and limits, the negative and boundary behavior the system must refuse or warn on, the interfaces to other systems, and the data integrity controls that keep records attributable and complete. The thread to keep in view is traceability. Each OQ test must point back to a specific requirement in the user requirements specification (URS) or the FS, and forward to a result that either meets a pre-stated acceptance criterion or is dispositioned as a deviation. Under FDA's Computer Software Assurance approach, the rigor and the evidence you capture should scale with the risk of each function, so the highest-risk functions get scripted, screenshot-backed testing while low-risk functions can rely on lighter evidence. Pass OQ and you have a documented, traced baseline of system behavior that PQ, periodic review, change control, and the eventual inspection all build on.

## Document control header

| Field | Entry |
|---|---|
| Document title | Operational Qualification Protocol for `<<FILL: system name / version>>` |
| Document number | `<<FILL: PRT-ID, e.g. OQ-CSV-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Validation / CSV Lead>>` |
| System / area | `<<FILL: system name, software version, GAMP category, hosting/site>>` |
| GxP impact / GAMP category | `<<FILL: GxP yes/no; GAMP 1/3/4/5>>` |
| Linked URS / FS / config / RA / IQ / PQ | `<<FILL: URS ref; FS ref; configuration spec ref; risk assessment ref; IQ ref (must be approved); PQ ref to follow>>` |
| Linked report | `<<FILL: OQ summary report number to be issued>>` |

## 1. Purpose

This protocol defines the approach, test cases, and acceptance criteria to demonstrate that `<<FILL: SYSTEM NAME>>` version `<<FILL: version>>`, as configured at `<<FILL: site / environment>>`, operates in accordance with the approved functional specification `<<FILL: FS-ID>>`. The objective is to confirm, with documented evidence, that the system's functions, security model, audit trail, calculations, alarms, interfaces, and data integrity controls perform as specified across normal, boundary, and error conditions, before the system is used for GxP work.

## 2. Scope

This protocol covers operational testing of the configured functions of the system in the qualified test environment described in section 5. It covers the functions, roles, calculations, alarms, interfaces, and data integrity controls listed in the traceability matrix at Attachment 1. It does not cover installation, which is confirmed by IQ `<<FILL: IQ-ID>>`; it does not cover end-to-end business-process performance with production data and trained users, which is confirmed by PQ `<<FILL: PQ-ID>>`; and it does not cover infrastructure qualification, which is governed by `<<FILL: cross-reference>>`. Functions assessed as no GxP impact in the risk assessment are listed in Attachment 4 as not tested, with the rationale.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Validation lead / CSV author | Authors this protocol, builds the requirement-to-test traceability, defines acceptance criteria, dispositions deviations, and issues the summary report. |
| Tester / executor | Executes each test case exactly as written, records actual results and evidence, and signs the result. The tester is not the same person who approves the result. |
| System owner / business SME | Confirms the functions, calculations, and limits match the real process, and supports interpretation of results. |
| IT / system administrator | Provisions test accounts and roles, controls the test environment and its configuration, and supports interface and infrastructure points. |
| Quality Assurance | Approves the protocol, reviews and approves executed results and deviations, and owns the disposition of the qualified state. |

## 4. Definitions

- **Operational qualification (OQ)**: documented verification that a configured system operates as intended across its defined operating conditions, before live use.
- **Functional specification (FS)**: the approved document that defines what the system must do, function by function; OQ tests trace to it.
- **Configuration item**: a setting, parameter, role, formula, limit, or workflow value that defines how the configured system behaves and that is controlled as a baseline.
- **Negative test**: a test that confirms the system correctly refuses, blocks, or warns on an invalid input, an unauthorized action, or an out-of-range value.
- **Boundary test**: a test at the exact edge of an allowed range and just outside it, where defects most often hide.
- **Review by exception**: a verification approach where validated reports or filters surface the records that matter rather than reading every entry.
- **Test evidence**: the objective record that a test was run and what it produced, for example a screenshot, a system-generated report, or a printout, attributable and dated.

## 5. Test environment and prerequisites

OQ runs in a controlled environment whose configuration is known and frozen for the duration of the test. Record the environment so a result can be tied to a specific build and configuration.

| Item | Entry |
|---|---|
| Test environment / instance | `<<FILL: QA / validation instance identifier>>` |
| Software name and version under test | `<<FILL: name + exact version/build>>` |
| Configuration baseline reference | `<<FILL: config spec / baseline ID and version>>` |
| Approved IQ reference (must precede OQ) | `<<FILL: IQ-ID, approved>>` |
| Approved FS / URS references | `<<FILL: FS-ID; URS-ID>>` |
| Risk assessment reference | `<<FILL: RA-ID, defines test rigor by function risk>>` |
| Test data set reference | `<<FILL: defined, version-controlled test data; no live patient/production data unless justified>>` |
| Time source / time zone for the instance | `<<FILL: NTP source; time zone; confirm matches audit trail expectation>>` |

Prerequisites to be confirmed and recorded before execution starts:

1. IQ is complete and approved, with no open IQ deviations that affect OQ.
2. The FS, URS, configuration baseline, and risk assessment are approved and under change control.
3. Test accounts exist for every role to be tested, provisioned by IT, with credentials issued to named testers.
4. The test data set is loaded, defined, and version controlled.
5. Testers are trained on this protocol and on the system functions they will execute.

## 6. Test approach and rigor by risk

Allocate test method and evidence by the GxP risk of each function, recorded in the risk assessment and the traceability matrix. This keeps effort on the functions that can hurt product or patient and avoids burning the same rigor on trivial features.

| Function risk | Test method | Evidence captured |
|---|---|---|
| High (direct impact on result, release, or patient safety) | Scripted, step-by-step, positive plus negative plus boundary | Screenshot or system report at each verification step, independent review |
| Medium | Scripted positive plus key negative | Screenshot or report at the verification step |
| Low | Scripted or unscripted/exploratory, summarized | Tester attestation plus representative evidence |
| No GxP impact | Not tested | Rationale recorded in Attachment 4 |

Every executed result is recorded as Pass or Fail against a pre-stated, objective acceptance criterion. "Looked fine" is not an acceptance criterion. A Fail is a deviation per section 14, not a quiet re-run.

## 7. Functional testing against the FS

Test each in-scope function the FS defines. For each, confirm the function performs the specified action and produces the specified output. Trace every function to an FS requirement number in Attachment 1.

| Test ID | FS requirement | Function under test | Expected result | Method |
|---|---|---|---|---|
| `<<FILL: OQ-FN-001>>` | `<<FILL: FS-3.2.1>>` | `<<FILL: create and save a record>>` | `<<FILL: record saved with unique ID, mandatory fields enforced>>` | Scripted |
| `<<FILL: OQ-FN-002>>` | `<<FILL: FS-3.4.0>>` | `<<FILL: electronic review/approval workflow>>` | `<<FILL: record routes to reviewer, cannot self-approve, status updates>>` | Scripted |
| `<<FILL: OQ-FN-003>>` | `<<FILL: FS-3.7.2>>` | `<<FILL: report generation>>` | `<<FILL: report content matches source data; header shows source, time, user>>` | Scripted |

## 8. Security, roles, and electronic signatures

Confirm the access model enforces what the FS and your access procedure require, including that ordinary users cannot do administrator-only actions and cannot turn off controls.

| Test ID | Requirement | Test | Expected result |
|---|---|---|---|
| `<<FILL: OQ-SEC-001>>` | Unique login, no shared accounts | Attempt login with each role's credentials | `<<FILL: each named account authenticates uniquely>>` |
| `<<FILL: OQ-SEC-002>>` | Role-based permissions enforced | As a standard user, attempt an admin-only action (for example change a configuration or delete a record) | Action blocked; attempt recorded |
| `<<FILL: OQ-SEC-003>>` | Password policy / inactivity lockout | Trigger lockout per the configured policy | `<<FILL: account locks per policy>>` |
| `<<FILL: OQ-SEC-004>>` | Electronic signature manifestation (21 CFR 11.50) | Apply an e-signature | Signed record shows printed name, date and time, and meaning of the signature |
| `<<FILL: OQ-SEC-005>>` | Signature/record binding (21 CFR 11.70) | Attempt to alter a signed record | `<<FILL: alteration prevented or forces re-signature; signature stays bound to its record>>` |

## 9. Audit trail testing

Confirm the audit trail is on, cannot be disabled by ordinary users, captures the who, what, when, old value, new value, and reason, and is itself protected from edit.

| Test ID | Requirement | Test | Expected result |
|---|---|---|---|
| `<<FILL: OQ-AT-001>>` | Audit trail captures create / modify / delete | Create, then modify, then delete a record | Each event logged with user, UTC or local time stamp, action, old and new value |
| `<<FILL: OQ-AT-002>>` | Reason for change recorded where required | Modify a critical field | Reason-for-change prompt enforced and captured |
| `<<FILL: OQ-AT-003>>` | Audit trail not editable / not disable-able by users | As a standard user, attempt to edit or turn off the audit trail | Action blocked; attempt itself recorded |
| `<<FILL: OQ-AT-004>>` | Audit trail is reviewable | Run the audit trail report / review-by-exception filter | Report is legible, complete for the period, and exportable |

## 10. Calculation testing

Test every GxP-relevant formula against an independently calculated expected value. Verify each at a normal value, at the boundaries, and where rounding or unit conversion applies. Independent means calculated outside the system under test, for example by hand or in a separately verified spreadsheet, not by the same code.

| Test ID | Calculation | Input(s) | Independently calculated expected | Tolerance / rounding rule |
|---|---|---|---|---|
| `<<FILL: OQ-CALC-001>>` | `<<FILL: mean of replicates>>` | `<<FILL: 98.2, 99.1, 100.3>>` | `<<FILL: 99.2>>` | `<<FILL: round to 1 decimal, exact match>>` |
| `<<FILL: OQ-CALC-002>>` | `<<FILL: % assay vs label claim>>` | `<<FILL: result, reference, dilution>>` | `<<FILL: value>>` | `<<FILL: rounding rule>>` |
| `<<FILL: OQ-CALC-003>>` | `<<FILL: unit conversion mg/mL to %w/v>>` | `<<FILL: inputs>>` | `<<FILL: value>>` | `<<FILL: rule>>` |

## 11. Alarms, limits, and flags

Confirm configured limits, specification flags, and alarms fire at the right value, in the right direction, and are visible and recorded.

| Test ID | Limit / alarm | Configured value | Test | Expected result |
|---|---|---|---|---|
| `<<FILL: OQ-AL-001>>` | `<<FILL: spec upper limit flag>>` | `<<FILL: 105.0%>>` | Enter a value above limit | Out-of-spec flag raised, recorded, visible |
| `<<FILL: OQ-AL-002>>` | `<<FILL: spec lower limit flag>>` | `<<FILL: 95.0%>>` | Enter a value below limit | Out-of-spec flag raised |
| `<<FILL: OQ-AL-003>>` | `<<FILL: process / system alarm>>` | `<<FILL: threshold>>` | Force the alarm condition | Alarm raised, logged with time and user acknowledgement |

## 12. Negative and boundary testing

Confirm the system refuses what it must refuse and behaves correctly at the edges. Negative and boundary tests are where defects hide; the most credible OQ packs always include them on high-risk functions.

| Test ID | Type | Test | Expected result |
|---|---|---|---|
| `<<FILL: OQ-NB-001>>` | Boundary | Enter a value at the exact upper limit, then one increment above | At-limit accepted per rule; above-limit flagged or rejected |
| `<<FILL: OQ-NB-002>>` | Negative input | Enter an invalid data type or out-of-format value in a mandatory field | Input rejected with a clear, recorded error; record not saved with bad data |
| `<<FILL: OQ-NB-003>>` | Mandatory field | Attempt to save with a required field blank | Save blocked until field completed |
| `<<FILL: OQ-NB-004>>` | Negative authorization | Attempt an action without the required role | Action blocked; attempt recorded |
| `<<FILL: OQ-NB-005>>` | Duplicate / uniqueness | Attempt to create a duplicate of a unique key | Duplicate prevented |

## 13. Interfaces and data integrity

### 13.1 Interfaces

Where the system sends or receives data, confirm the data crosses correctly, completely, and without silent loss or transformation. Test the round trip and at least one error path.

| Test ID | Interface | Direction | Test | Expected result |
|---|---|---|---|---|
| `<<FILL: OQ-IF-001>>` | `<<FILL: instrument to system>>` | Inbound | Acquire and import a result | Imported value matches the source exactly; no truncation/rounding loss |
| `<<FILL: OQ-IF-002>>` | `<<FILL: system to ERP/LIMS>>` | Outbound | Transmit a record | Receiving system value matches; transmission logged |
| `<<FILL: OQ-IF-003>>` | `<<FILL: any interface>>` | Error path | Interrupt or send a malformed message | Failure detected and recorded; no partial/silent data corruption |

### 13.2 Data integrity (ALCOA+)

Confirm records stay Attributable, Legible, Contemporaneous, Original, Accurate, and also Complete, Consistent, Enduring, and Available.

| Test ID | ALCOA+ attribute | Test | Expected result |
|---|---|---|---|
| `<<FILL: OQ-DI-001>>` | Attributable | Confirm every record and change carries the user identity | User captured on create and change |
| `<<FILL: OQ-DI-002>>` | Contemporaneous | Confirm time stamps are system-generated and synchronized | Time stamp matches the controlled time source |
| `<<FILL: OQ-DI-003>>` | Original / complete | Confirm raw/source records are retained, including failed and repeated entries | No silent overwrite; prior values retained in audit trail |
| `<<FILL: OQ-DI-004>>` | Enduring / available | Back up then restore a record; confirm it is retrievable and readable | Restored record is complete and legible |

## 14. Deviations and handling

Any test that fails its acceptance criterion, any execution error, or any departure from this protocol is documented as a test deviation per `<<FILL: deviation SOP-ID>>` and assessed for impact before the result is accepted. Record the deviation, its root cause, the corrective action (for example a configuration fix or an FS clarification), and the retest. Do not pass a failed test by editing the script after the fact or by re-running until it passes without a recorded reason. Where a deviation reflects an acceptable as-built behavior, the FS or configuration is updated under change control and the deviation references that change.

| Field | Entry |
|---|---|
| Deviation ID | `<<FILL>>` |
| Test ID affected | `<<FILL>>` |
| Description of failure | `<<FILL>>` |
| Root cause | `<<FILL>>` |
| Correction / action | `<<FILL: fix config / update FS / clarify expected result>>` |
| Retest ID and result | `<<FILL>>` |
| Impact assessment and QA disposition | `<<FILL>>` |

## 15. Acceptance criteria

OQ is acceptable, and the system may move to PQ or release, only when all of the following are true:

- Every in-scope function in the traceability matrix has an executed test with a Pass result, or a closed deviation with QA-approved disposition.
- Security, audit trail, calculation, alarm, negative/boundary, interface, and data integrity tests all meet their pre-stated acceptance criteria or are dispositioned.
- Every result is attributable, with objective evidence attached for high-risk and medium-risk functions.
- No open deviation affects the qualified state.
- Tester and reviewer signatures are present, and the tester did not approve their own result.

## 16. Test case record (per test)

Each executed test is recorded on the format below or your equivalent test script.

| Field | Entry |
|---|---|
| Test ID | `<<FILL>>` |
| Traces to (URS/FS) | `<<FILL>>` |
| Pre-conditions / test data | `<<FILL>>` |
| Step(s) executed | `<<FILL>>` |
| Acceptance criterion | `<<FILL>>` |
| Expected result | `<<FILL>>` |
| Actual result | `<<FILL>>` |
| Pass / Fail | `<<FILL>>` |
| Evidence reference (screenshot/report ID) | `<<FILL>>` |
| Deviation reference (if Fail) | `<<FILL: number or N/A>>` |
| Tester (name, signature, date) | `<<FILL>>` |
| Reviewer (name, signature, date) | `<<FILL>>` |

## 17. Summary report

On completion, the validation lead issues report `<<FILL: report number>>` summarizing the tests executed, the Pass/Fail outcome against the traceability matrix, every deviation and its resolution, the residual risk, and the conclusion on the operational qualified state. The report is reviewed and approved by QA. A traceability matrix showing every URS/FS requirement linked to its test ID and result is attached.

## 18. Attachments

| No. | Attachment |
|---|---|
| 1 | Requirement-to-test traceability matrix (URS/FS to test ID to result) |
| 2 | Approved test scripts with evidence (screenshots, system reports) |
| 3 | Test data set definition |
| 4 | Functions not tested, with no-GxP-impact rationale |
| 5 | Deviation log |

## 19. References

> 21 CFR Part 11 (electronic records and electronic signatures), including 11.10, 11.50, 11.70.
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment).
> EU GMP Annex 11 (Computerised Systems), sections on validation, accuracy checks, security, audit trails, and interfaces.
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> FDA Guidance, Computer Software Assurance for Production and Quality System Software, finalized 24 September 2025.
> FDA Guidance, General Principles of Software Validation (2002).
> GAMP 5, A Risk-Based Approach to Compliant GxP Computerized Systems (Second Edition).
> ICH Q9, Quality Risk Management (for the risk-based rigor).
> PIC/S PI 011, Good Practices for Computerised Systems in Regulated GxP Environments.
> MHRA GxP Data Integrity Guidance and Definitions (for the ALCOA+ checks).

Confirm the current version and clause numbers of each reference before issue.

## 20. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 21. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Validation / CSV) | `<<FILL>>` | | |
| Reviewer (System owner / SME) | `<<FILL>>` | | |
| Reviewer (IT) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows selected OQ test cases completed for an example laboratory information management system (LIMS), so you can see the level of detail an inspector expects. The system, values, and references are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| System under test | LIMS, version 8.4.2, GAMP category 4 (configured), QA validation instance LIMS-QA-02 |
| Configuration baseline | CONFIG-LIMS-008 v3.0, frozen for OQ |
| IQ reference | IQ-CSV-029, approved, no open deviations |

| Test ID | Function | Acceptance criterion | Actual result | Pass/Fail | Evidence |
|---|---|---|---|---|---|
| OQ-FN-002 | Result review workflow | Analyst who entered a result cannot also approve it | Approve button disabled for the entering analyst; reviewer role approved successfully | Pass | SCR-031, SCR-032 |
| OQ-SEC-002 | Role enforcement | Standard user cannot change a specification limit | Action blocked, "insufficient privileges" recorded in audit trail | Pass | SCR-040 |
| OQ-AT-002 | Reason for change | Modifying a reported result forces a reason | Reason-for-change prompt enforced; entry "transcription correction, per analyst notebook p.14" captured | Pass | SCR-051 |
| OQ-CALC-001 | Mean of replicates | Mean of 98.2, 99.1, 100.3 = 99.2 (1 decimal) | System returned 99.2; matches independent hand calculation | Pass | RPT-CALC-001 |
| OQ-AL-001 | Upper spec flag at 105.0% | Value of 105.4% flagged out of spec | OOS flag raised, result locked from release, flag visible on report | Pass | SCR-060 |
| OQ-NB-002 | Negative input | Text entered in a numeric assay field is rejected | "Invalid numeric value" error; record not saved | Pass | SCR-063 |
| OQ-IF-001 | Balance-to-LIMS interface | Imported weight matches the balance reading exactly | Balance read 0.05012 g; LIMS stored 0.05012 g, no truncation | Pass | SCR-070 |
| OQ-DI-003 | Original/complete | A repeated entry does not overwrite the first | First entry retained and visible in audit trail with both values | Fail | SCR-074, DEV-2026-0188 |

In this example the team traced each test to an FS requirement, calculated the expected mean outside the system, tested the limit flag just above the configured value, and confirmed the balance interface carried the full precision with no silent truncation. The OQ-DI-003 failure (a repeated entry overwrote the original in the audit detail view) was the kind of defect OQ exists to catch: it was raised as deviation DEV-2026-0188, root-caused to a display configuration, fixed under change control, and retested as OQ-DI-003-R with a Pass before the qualified state was accepted. That find-to-deviation-to-fix-to-retest sequence is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this protocol prevents

- OQ tests with no trace back to a URS or FS requirement, so coverage cannot be shown.
- Only positive ("happy path") tests run, with no negative, boundary, or unauthorized-action testing.
- Calculations verified only by the system itself, not against an independent expected value.
- Audit trail "tested" by confirming it exists, without confirming it cannot be disabled or edited by ordinary users.
- Security testing that confirms a user can log in but never confirms a standard user is blocked from admin-only actions.
- The same person who executed a test also approved its result, with no independent review.
- A failed test quietly re-run until it passed, with no deviation recorded and no root cause.
- Interfaces accepted because "the number showed up", with no check that precision was preserved and no error-path test.
- Test evidence missing for high-risk functions, leaving Pass results with nothing behind them.
- Same rigor applied to every function regardless of risk, which is both wasteful and, on the high-risk functions, often thin.

## How to adapt this protocol

1. Set your document number, owner, report number, and effective date in the header, and confirm IQ is approved before you execute.
2. Build the traceability matrix in Attachment 1 from your real URS and FS, and assign each function a risk that drives its test method per section 6.
3. Replace the example functions, calculations, limits, and interfaces in sections 7 to 13 with your system's actual configuration, using your configuration baseline as the source of truth.
4. Put your real independently calculated expected values into the calculation table, and state your rounding and tolerance rules.
5. Point the cross-references in sections 2 and 14 to your real IQ, PQ, configuration, deviation, and change control procedures.
6. For lower-risk functions, scale the evidence per your CSA risk assessment rather than forcing the same scripted depth everywhere.
7. Confirm every regulation in section 19 against the current published version before issue.
