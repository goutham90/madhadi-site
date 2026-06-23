---
title: "Writing Validation Protocols and Reports: Test Scripts, Acceptance Criteria, and Deviations"
description: "How to write IQ/OQ/PQ protocols and reports that pass inspection: objective, scope, acceptance criteria, objective evidence, executed-data handling, protocol deviations, and conclusions."
pubDate: 2026-06-20
tags: ["csv", "validation", "iq-oq-pq", "test-scripts", "acceptance-criteria", "deviations", "gamp5"]
pillar: "csv-csa"
tier: "Intermediate"
---

A validation protocol is a promise you make before you touch the system, and the validation report is the proof you kept it. Inspectors read both. They compare what you said you would test against what you actually tested, and they look at how you handled the moments when reality did not match the plan. Most validation findings do not come from a system that failed to work. They come from documents that were sloppy, test scripts that proved nothing, acceptance criteria that were written after the result was known, or deviations that were quietly buried instead of investigated.

This page covers the deliverable-level craft: how to write installation qualification (IQ), operational qualification (OQ), and performance qualification (PQ) protocols and their reports so they hold up. The mechanics of test scripts, the discipline of acceptance criteria, the rules for handling executed data, and the way a protocol deviation is supposed to flow from discovery to disposition. If you can write a clean script and defend it, you can do this job.

---

## Where protocols and reports sit in the validation lifecycle

Validation is a lifecycle, not a binary. The framework most teams follow comes from GAMP 5 Second Edition (ISPE, 2022), which describes a specification-and-verification model: you define what the system must do, then you verify it does it. Protocols and reports are the verification half. For process validation, the parallel structure is in the FDA guidance "Process Validation: General Principles and Practices" (2011), which splits validation into Stage 1 design, Stage 2 process qualification, and Stage 3 continued process verification. For computerized systems, the regulatory anchors are 21 CFR Part 11 (electronic records and signatures) and EU GMP Annex 11 (computerised systems), both of which require documented evidence that a system is fit for its intended use.

The plan-execute-report chain runs like this:

- A **validation plan** (often a Validation Master Plan, or a system-specific validation plan) defines scope, approach, deliverables, and roles. See [validation-master-plan-and-periodic-review](/articles/validation-master-plan-and-periodic-review).
- **Requirements** define what the system must do. See [user-requirements-and-traceability](/articles/user-requirements-and-traceability).
- A **risk assessment** decides how much testing each requirement needs. See [csv-risk-assessment-methodology](/articles/csv-risk-assessment-methodology).
- **Protocols (IQ/OQ/PQ)** are written and approved, then **executed** to produce evidence.
- A **summary report** rolls up the results and supports release. See [validation-summary-report-and-release](/articles/validation-summary-report-and-release).

The protocol is approved before execution. That sequence is not bureaucratic theater. An approved-before-execution protocol is the single best defense against the accusation that you reverse-engineered your acceptance criteria to match a result you already had. If your protocol approval signatures post-date your execution dates, an inspector will notice, and the entire data set becomes suspect.

For a map of the full deliverable set, see [validation-deliverables-guide](/articles/validation-deliverables-guide).

---

## IQ, OQ, PQ: what each one proves

The three qualification stages answer three different questions. Mixing them up is a common rookie error, and it produces protocols that test the wrong thing at the wrong time.

### Installation Qualification (IQ)

IQ proves the system is installed correctly and matches the design and purchase specifications. It is a verification of the as-built state against the as-specified state. Nothing dynamic happens in IQ. You are confirming that the right components are present, configured, and documented.

What IQ typically verifies:

- Hardware inventory: servers, workstations, instruments, model and serial numbers, asset tags.
- Software inventory: application version, operating system version, database version, patch level, service packs.
- Installation against the vendor installation manual or an approved configuration specification.
- Network connectivity, drive mappings, interfaces present.
- Required utilities and environmental conditions present (power, HVAC where relevant).
- Required documentation on hand: manuals, certificates, calibration records for measuring components.
- User accounts and security framework installed (the framework, not yet the behavior).

### Operational Qualification (OQ)

OQ proves the system functions as intended across its operating range, under controlled, often challenge conditions. This is where you exercise functions: alarms, limits, calculations, access controls, audit trail capture, error handling, boundary values. OQ usually runs against specifications rather than real production data, frequently with test data designed to push edges.

What OQ typically verifies:

- Each functional requirement performs as specified.
- Boundary and limit testing: values just inside and just outside acceptable ranges.
- Alarms and interlocks trigger at the correct setpoints.
- Calculations produce correct results against hand-calculated or independently derived expected values.
- Security and access control: each role sees and does only what it should.
- Audit trail records the right events with the right metadata (who, what, when, old value, new value).
- Backup and restore behaves correctly.
- Error and exception handling: the system fails safely and informatively.

### Performance Qualification (PQ)

PQ proves the system performs reliably and reproducibly in its actual operating environment, under real or production-representative conditions, with trained users running the real process. For a process, PQ overlaps with Process Performance Qualification (PPQ), where you run the commercial process at scale and confirm it consistently produces conforming product. See [process-performance-qualification-ppq](/articles/process-performance-qualification-ppq) and [process-validation-lifecycle](/articles/process-validation-lifecycle).

What PQ typically verifies:

- The full end-to-end process or workflow performs as required in the production environment.
- Reproducibility across runs, operators, shifts, or batches.
- Real-world load, throughput, and data volumes.
- Integration with upstream and downstream systems under live conditions.

A useful shorthand: IQ is "is it built right," OQ is "does it work right," PQ is "does it work right every time in the real place." Equipment qualification follows the same structure; see [equipment-qualification-lifecycle](/articles/equipment-qualification-lifecycle). For computerized systems specifically, the modern risk-based view (Computer Software Assurance, FDA final guidance "Computer Software Assurance for Production and Quality System Software," finalized 24 September 2025, issued in draft 2022) lets you scale the rigor of testing to risk, so a low-risk configured function may get a lighter scripted or unscripted test while a high-risk function gets a full detailed-scripted protocol. See [computer-software-assurance-fda](/articles/computer-software-assurance-fda) and [gamp5-csv-framework](/articles/gamp5-csv-framework).

---

## Anatomy of a qualification protocol

Every protocol, regardless of stage, shares a common skeleton. Templates differ across organizations, but the content below is what an inspector expects to find and what makes a protocol defensible.

### 1. Header and approval

- Document number, title, version, effective date.
- System or equipment name and unique identifier.
- Approval signatures with role and date. At minimum: author, system owner or SME, Quality Assurance. Approval must be dated before execution begins.

### 2. Purpose / Objective

One or two sentences stating exactly what this protocol will demonstrate. Specific, not generic. "This protocol verifies that the chromatography data system, version X, correctly enforces electronic signature requirements, captures audit trail entries for data modification, and restricts result reprocessing to authorized roles." Not "This protocol validates the system."

### 3. Scope

Defines boundaries: what is in, what is out. Which modules, which interfaces, which functions, which sites, which user roles. Explicitly state exclusions and why they are excluded (covered elsewhere, not used, out of GxP impact). Scope statements that say everything is in scope and nothing is out are a red flag, because they are almost never true and they signal the author did not think about boundaries.

### 4. References

The requirement document(s), risk assessment, validation plan, vendor manuals, SOPs, and any standards being verified against. The traceability backbone lives here.

### 5. Roles and responsibilities

Who executes, who reviews, who approves, who serves as SME, who from Quality provides oversight. Name the roles, not necessarily the individuals (individuals get recorded at execution).

### 6. Prerequisites / Entry criteria

What must be true before execution starts:

- Protocol approved.
- System installed (for OQ, IQ complete and approved).
- Test environment available and identified.
- Test data prepared and identified.
- Executors trained on the protocol and on the system.
- Required SOPs effective.
- Calibration of any measuring equipment used during testing current.

### 7. Assumptions, limitations, exclusions

State anything the reader needs to interpret the results correctly. For example, that testing was performed in a qualified test environment that mirrors production, or that a particular interface was simulated.

### 8. Test scripts

The core. Covered in detail below.

### 9. Acceptance criteria (protocol-level)

The overall bar for the protocol to be considered passed. Usually: all test scripts executed, all results meet their individual acceptance criteria, and all deviations are resolved and dispositioned with no unresolved impact on the conclusion.

### 10. Deviation handling

A reference to how deviations encountered during this execution will be documented and resolved (usually pointing to an SOP and including a deviation log within the executed protocol).

### 11. Attachments

Screenshots, printouts, raw data, query results, calibration certificates, training records, configuration exports.

---

## Writing test scripts that prove something

A test script is the unit of evidence. It is where most protocols are won or lost. A well-written script can be executed by a competent person who has never seen the system, produce an unambiguous pass or fail, and leave behind objective evidence that a reviewer can independently verify months later.

### Required elements of a test script

| Field | What it contains | Why it matters |
|-------|------------------|----------------|
| Test ID | Unique identifier (e.g., OQ-012) | Traceability and cross-reference |
| Requirement reference | The requirement ID(s) this test verifies | Links evidence to the spec |
| Objective | One line: what this test proves | Keeps the test focused |
| Prerequisites | State the system must be in before step 1 | Reproducibility |
| Test data | Specific inputs to use, identified | Repeatability and traceability |
| Test steps | Numbered, atomic actions | One action per step, no ambiguity |
| Expected result | What should happen at the step(s) that matter | The pre-defined bar |
| Acceptance criteria | The pass condition | Objective pass/fail |
| Actual result | Recorded at execution | The evidence |
| Pass / Fail | Recorded at execution | The verdict |
| Objective evidence ref | Screenshot/printout/attachment number | Independent verifiability |
| Executed by / date | Initials/signature and date | Attributability (ALCOA+) |
| Reviewed by / date | Initials/signature and date | Second-person verification |

### The discipline of writing steps

Each step is one action. "Log in as a QC Analyst and attempt to delete a result and observe the audit trail" is three steps crammed into one, and it makes failure impossible to localize. Split it:

1. Log in to the application using the QC Analyst test account (analyst_test).
2. Navigate to the results screen for sample TEST-SAMPLE-001.
3. Attempt to delete the result for TEST-SAMPLE-001.
4. Observe and record the system response.
5. Open the audit trail and locate the entry generated by the attempted action.

Write expected results for the steps where something must be proven. Not every step needs an expected result (moving to a screen usually does not), but the steps that carry the proof do.

### Worked example: an OQ test script for access control and audit trail

> **Test ID:** OQ-012
> **Requirement reference:** URS-045 (a QC Analyst role shall not be able to delete acquired results), URS-046 (all delete attempts shall be captured in the audit trail with user, timestamp, and action)
> **Objective:** Verify that the QC Analyst role is prevented from deleting acquired results and that the denied attempt is recorded in the audit trail.
> **Prerequisites:** System installed and IQ approved. Test account analyst_test configured with QC Analyst role. Sample TEST-SAMPLE-001 acquired and present in the system.

| Step | Action | Expected Result | Actual Result | Pass/Fail | Evidence |
|------|--------|-----------------|---------------|-----------|----------|
| 1 | Log in as analyst_test | Login succeeds; role displayed as QC Analyst | | | SS-012-1 |
| 2 | Open result for TEST-SAMPLE-001 | Result displays | | | SS-012-2 |
| 3 | Attempt to delete the result | Delete is blocked; system displays an authorization-denied message; no result is removed | | | SS-012-3 |
| 4 | Open the audit trail filtered to TEST-SAMPLE-001 | An entry exists showing user analyst_test, the date and time of the attempt, and the action (delete attempt denied) | | | SS-012-4 |

> **Acceptance criteria:** Steps 1-4 all pass. The delete is prevented, the result remains intact, and the audit trail contains a complete, attributable record of the denied attempt.
> **Executed by / date:** ____________
> **Reviewed by / date:** ____________

Notice what makes this defensible: a named test account, a named sample, a specific expected behavior (denial plus an intact record plus an audit entry with named metadata fields), and a referenced screenshot for each evidentiary step. A reviewer can confirm every line without asking the executor what happened.

### Positive and negative testing

A protocol that only confirms the happy path is incomplete. You must test that the system does the right thing (positive) and that it refuses to do the wrong thing (negative). The OQ-012 example above is a negative test: it proves a denial. For a calculation function, positive testing means feeding known inputs and confirming the correct output; negative testing means feeding an out-of-range or invalid input and confirming the system rejects it cleanly. Boundary testing sits between them: test at the limit, just below, and just above. If a specification limit is 25.0, test 24.9, 25.0, and 25.1 where the function behavior changes there.

For the discipline of linking each script back to a requirement, see [user-requirements-and-traceability](/articles/user-requirements-and-traceability).

---

## Acceptance criteria: the line you draw before you look

Acceptance criteria are the predefined, objective conditions that determine pass or fail. They are the most scrutinized element of any protocol because they are the easiest to corrupt. The cardinal rule: acceptance criteria are written and approved before execution. If you define the bar after seeing the result, you are not testing, you are rationalizing.

### What makes a good acceptance criterion

- **Objective and measurable.** "The report displays correctly" is not a criterion; correct according to whom, measured how? "The report displays the lot number, analyst name, result value to two decimal places, and units, matching the source record" is a criterion.
- **Pre-defined.** Established before execution and frozen by approval.
- **Tied to a requirement.** Each criterion traces to something the system was required to do.
- **Binary in outcome.** A reviewer reading the actual result can determine pass or fail without judgment calls.

### Quantitative versus qualitative criteria

Some criteria are numeric. A temperature mapping study might require all monitored points to stay within a defined range for a defined duration with mapping sensors that meet a stated calibration tolerance; see [temperature-mapping-qualification](/articles/temperature-mapping-qualification). A PQ for a process might require results within specification across a defined number of consecutive runs with statistical capability above a threshold; see [statistics-in-quality-cpk-control-charts](/articles/statistics-in-quality-cpk-control-charts). Other criteria are functional and qualitative: a function performs as specified, a record is generated, an alarm fires. Both are valid. Both must be objective.

### Worked example: contrasting weak and strong criteria

| Requirement | Weak criterion (avoid) | Strong criterion (use) |
|-------------|------------------------|------------------------|
| Calculation accuracy | Result is correct | Calculated result equals the independently computed expected value of 98.6%, within a rounding tolerance of plus or minus 0.1% |
| Audit trail capture | Audit trail works | An audit trail entry is generated for the change, recording user ID, date and time stamp, original value, new value, and reason where required |
| Alarm function | Alarm sounds | The high-temperature alarm activates at a setpoint of 8.0 C, with visual and audible indication, and the event is logged with a time stamp |
| Access control | Permissions are correct | A user with the Operator role cannot access the configuration menu; the menu is not visible and direct navigation is denied |

The strong versions share a trait: a person who was not present at execution can read the actual result against the criterion and reach the same verdict the executor reached. That is the entire point.

---

## Objective evidence and how to handle executed data

Objective evidence is the proof that a test produced the result you recorded. Under ALCOA+ (the data integrity principles described in FDA and MHRA data integrity guidance), evidence and recorded data must be attributable, legible, contemporaneous, original, accurate, complete, consistent, enduring, and available. See [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and [data-integrity-foundations](/articles/data-integrity-foundations). The executed protocol is a GxP record, and it must be treated like one.

### What counts as objective evidence

- Screenshots showing the system state, the input, and the result, with date/time visible where possible.
- System-generated printouts or reports.
- Database query results.
- Configuration exports.
- Raw data files, with a reference to where they are stored.
- For analog or numeric readings, the recorded value with units and the device used.

Every piece of evidence must be uniquely identifiable (a numbering scheme such as SS-012-3) and cross-referenced from the test step it supports. Loose, unnumbered, unattributed screenshots stapled to the back of a protocol are a finding waiting to happen.

### Rules for recording executed data

These are good documentation practice rules applied to validation. See [good-documentation-practices](/articles/good-documentation-practices).

- **Record contemporaneously.** Write the actual result as you observe it, not from memory afterward.
- **Original entries in indelible ink** for paper protocols; no pencil.
- **Corrections** are made with a single line through the error, the correct entry, the initials and date of the person making the correction, and a reason if the reason is not obvious. Never obscure the original entry. Never use correction fluid.
- **No blanks.** Every field is filled. If a field is not applicable, write N/A and initial. A blank field is ambiguous: was it skipped, forgotten, or deliberately left empty?
- **Attributable.** Every entry traces to a person via initials or signature, with a date. Maintain a signature/initials log identifying each executor.
- **Print-and-sign for electronic test outputs** must preserve the link to the source; a screenshot of a screen with no system identifiers proves little.

### Handling raw data and dynamic records

If a test produces dynamic electronic data (a chromatogram, a sequence run, an audit trail export), a static printout may not be a true representation of the original record. The distinction between static and dynamic records, and what makes a valid true copy, matters here. See [static-dynamic-records-true-copies](/articles/static-dynamic-records-true-copies). Where the dynamic record is the original, reference and preserve it, do not let a flattened screenshot become the only retained evidence of a record that was meant to be interrogable.

---

## Protocol deviations: discovery to disposition

A protocol deviation (sometimes called a test incident, test failure, or discrepancy) is any departure from the approved protocol or any test result that does not meet its acceptance criterion. Deviations are normal. A protocol execution with zero deviations on a complex system is more suspicious to a seasoned reviewer than one with a handful of well-handled deviations, because it suggests either trivial testing or undocumented problems. What matters is not whether deviations occur, but whether each one is documented, investigated, and dispositioned with a justified conclusion.

This is distinct from the broader GMP deviation process, though they share DNA. See [deviation-management](/articles/deviation-management) and, for test-execution specifics, [validation-test-failure-management](/articles/validation-test-failure-management).

### Categories of protocol deviation

Not every deviation is a system failure. Classifying correctly drives the right response.

| Type | Description | Typical disposition |
|------|-------------|---------------------|
| Documentation/execution error | Executor made a recording or procedural mistake (wrong account used, step done out of order, transcription error) | Correct, document the error, re-execute the affected step if needed |
| Test script error | The script itself was wrong (incorrect expected result, typo in test data, ambiguous step) | Correct the script via controlled change, justify, re-execute |
| Environment/configuration issue | Test environment not as expected, prerequisite not met | Fix environment, re-execute affected tests |
| Genuine system failure | The system did not meet a valid requirement | Investigate root cause, remediate (fix/config/code change), retest; may require change control |

### The deviation flow

1. **Detect and stop.** The executor identifies that a result does not meet the criterion or that a departure from the protocol occurred. The executor does not "fix it and move on." They record what actually happened.
2. **Log it.** Assign a deviation number, record the test ID affected, describe the observed versus expected, the date, and who detected it. The deviation log lives within or attached to the executed protocol.
3. **Assess impact.** Does this affect only this test, or others? Does it affect the validity of results already recorded? Does it touch product or data already in use?
4. **Investigate and determine root cause.** Proportionate to risk. A typo in a test step needs a sentence; a genuine functional failure needs a real investigation. See [root-cause-analysis-techniques](/articles/root-cause-analysis-techniques).
5. **Determine corrective action.** Correct the script, fix the configuration, raise a defect/change for a code fix, update training, whatever the root cause demands. A code or configuration change to the validated system flows through change control. See [change-control-validated-systems](/articles/change-control-validated-systems).
6. **Re-execute as needed.** After correction, re-run the affected test(s). Record the re-execution as a distinct, dated event with its own evidence; do not overwrite the original failed record.
7. **Disposition and justify.** State the conclusion: deviation resolved, no impact on protocol conclusion, with rationale. QA reviews and approves each deviation's disposition.
8. **Close.** All deviations must be closed before the protocol can be reported as passed, or any open item must be explicitly justified and risk-assessed in the summary report.

### Worked example: a documented protocol deviation

> **Deviation No.:** DEV-OQ-003
> **Affected Test ID:** OQ-008 (calculation of assay percent)
> **Description:** During execution of step 4, the calculated result displayed as 102.4% against an expected result of 98.6%. Investigation found the test data file loaded was TEST-DATA-02 rather than the specified TEST-DATA-01; the protocol called for TEST-DATA-01.
> **Category:** Execution error (wrong test data used).
> **Impact assessment:** Limited to OQ-008. No other test used this data file. No system calculation defect; the calculation engine performed correctly on the data it was given (verified by re-running with the correct file).
> **Root cause:** Two similarly named test data files; the executor selected the wrong one. No naming convention enforced in the test data set.
> **Corrective action:** Test data files renamed with clearer identifiers for clarity. OQ-008 re-executed using TEST-DATA-01.
> **Re-execution result:** Calculated result 98.6%, meeting the acceptance criterion. (See OQ-008 re-execution, dated, evidence SS-008R.)
> **Disposition:** Resolved. No impact on the OQ conclusion. Calculation function confirmed correct.
> **QA approval:** ____________ Date: ____________

This deviation is honest, localized, root-caused, corrected, and re-tested, and it explicitly says the system itself was fine. That is exactly what an inspector wants to see: not a clean record, but a controlled one.

A failure that turns out to be a real defect looks different. The disposition would reference the defect log, the change control for the fix, and a re-execution that occurred only after the fix was implemented and the fix itself controlled. The summary report then has to account for it honestly.

---

## Writing the validation report

The report closes the loop. It states what was executed, what the results were, how deviations were resolved, and whether the system or process is qualified for its intended use. The summary report is what supports the release decision and what an inspector reads first to judge whether the system can be trusted. See [validation-summary-report-and-release](/articles/validation-summary-report-and-release).

### What goes in a qualification or validation report

- **Header and approval.** Same controls as the protocol. Report approval comes after execution and after all deviations are closed.
- **Purpose.** Restate what the protocol set out to demonstrate.
- **Reference to the executed protocol(s).** By number and version.
- **Summary of execution.** What was executed, when, by whom, in what environment. Number of test scripts executed, number passed.
- **Deviation summary.** Every deviation listed with its number, a one-line description, its disposition, and its impact on the conclusion. This is the section inspectors go to. Do not bury deviations; summarize them plainly and state that all are closed and resolved.
- **Acceptance criteria assessment.** A statement that the protocol-level acceptance criteria were met (or, if not, exactly what was not met and how it was handled).
- **Traceability confirmation.** That all in-scope requirements were verified. A requirements traceability matrix is often attached or referenced. See [user-requirements-and-traceability](/articles/user-requirements-and-traceability).
- **Outstanding items and limitations.** Anything open, any conditions on use, any items deferred with justification and risk assessment.
- **Conclusion.** A clear statement: the system/process is qualified and approved for its intended use, subject to any stated conditions. This is a judgment, and it must be supported by the evidence above, not asserted.
- **Attachments.** Executed protocol(s), deviation records, traceability matrix.

### The conclusion must match the evidence

A report that concludes "the system is validated" while the deviation summary shows an unresolved high-impact failure is internally contradictory and will be challenged immediately. The conclusion is the most consequential sentence in the document. It carries the QA signature and stands behind the release decision. Write it only when the body of the report genuinely supports it.

---

## Roles and responsibilities

Clear ownership prevents the two failure modes of validation: nobody accountable, or everybody signing everything without reading. The exact titles vary, but the functions are consistent. See [gxp-roles-responsibilities](/articles/gxp-roles-responsibilities).

| Role | Protocol stage | Responsibility |
|------|----------------|----------------|
| Author / Validation lead | Authoring | Writes the protocol, ensures traceability to requirements and risk, defines acceptance criteria |
| Subject Matter Expert (SME) / System owner | Review/approve | Confirms the protocol tests the right things correctly, that criteria reflect real requirements |
| Executor / Tester | Execution | Runs the scripts exactly as written, records actual results and evidence contemporaneously, raises deviations |
| Reviewer | Post-execution | Independently checks each executed script: evidence present, results match the recorded verdict, no blanks, deviations logged |
| Quality Assurance | Approve / oversight | Approves protocol before execution and report after; approves deviation dispositions; owns the integrity of the process |
| Vendor / Supplier | Variable | May supply IQ/OQ templates, perform supplier testing relied upon under a risk-based approach, support execution |

Two principles inspectors test for. First, **independent review**: the person who executed a test should not be the sole person who reviews it; a second person confirms the evidence supports the verdict. Second, **QA independence**: QA approves but does not author the very protocols it is meant to provide independent oversight on, and QA's approval of deviation dispositions is a real decision, not a rubber stamp.

On reusing vendor testing: under a risk-based CSV/CSA approach, you can rely on supplier documentation and testing where the supplier is assessed as capable. You do not blindly re-test what the vendor already tested well; you verify the supplier's quality, assess risk, and focus your own testing on configuration, intended use, and high-risk functions. See [software-supplier-assessment-csa](/articles/software-supplier-assessment-csa) and [supplier-vendor-qualification](/articles/supplier-vendor-qualification).

---

## Common mistakes and inspection-finding patterns

These are the patterns that show up repeatedly in inspection observations and warning letters around validation documentation. None require naming a company; they are generic and well known. For the broader pattern catalog, see [fda-warning-letters-patterns](/articles/fda-warning-letters-patterns).

- **Protocol approved after execution.** Approval signature dates that post-date execution dates. This destroys the premise that criteria were predefined. Always approve before you execute.
- **Acceptance criteria written or changed after the result is known.** The most serious integrity finding in this space. Criteria are frozen at approval.
- **Vague acceptance criteria.** "Functions correctly," "works as expected," "displays properly." Unverifiable, so unfalsifiable, so worthless as evidence.
- **Blank fields in executed protocols.** Empty cells with no N/A, no result, no initials. Ambiguous and unattributable.
- **Test steps that bundle multiple actions.** Failure cannot be localized; the step proves nothing cleanly.
- **Deviations not documented.** A test that failed, was quietly re-run until it passed, with no record of the failure. This is data falsification territory, even when unintentional.
- **Deviations documented but not investigated.** A deviation log entry that says "retested, passed" with no root cause and no impact assessment.
- **Missing or unreferenced objective evidence.** Results recorded with no screenshot, printout, or data to back them, or evidence present but not linked to any step.
- **No traceability.** Tests that do not map to requirements, or requirements with no corresponding test, so coverage cannot be demonstrated.
- **Copy-paste protocols with the wrong system name or wrong functions.** A template reused without editing, leaving references to a different system or testing functions that do not exist.
- **Report conclusion not supported by the body.** "Validated" stated over unresolved deviations or unmet criteria.
- **Corrections that obscure the original.** Overwrites, correction fluid, no initials/date on a change. Violates good documentation practice.
- **Same-person execute and review.** No independent verification of the evidence.

---

## Interview-ready: questions you will actually be asked

These are the questions interviewers and inspectors use to find out if you understand validation documentation or just memorized acronyms. Strong answers below.

**What is the difference between IQ, OQ, and PQ?**
IQ verifies the system is installed and configured per its specifications (is it built right). OQ verifies the system functions as intended across its operating range under challenge conditions (does it work right). PQ verifies the system performs reliably and reproducibly in its actual production environment with real users and real or representative conditions (does it work right every time, in the real place). IQ is static verification; OQ exercises functions, often with boundary and negative tests; PQ confirms real-world reproducible performance.

**Why must a protocol be approved before it is executed?**
So the acceptance criteria and test methods are demonstrably predefined. If approval post-dates execution, you cannot prove you did not reverse-engineer the criteria to fit a result you already had, and the data integrity of the entire exercise is compromised.

**What makes a good acceptance criterion?**
Objective, measurable, predefined, traceable to a requirement, and binary in outcome. A reviewer who was not present at execution should be able to read the actual result against the criterion and reach the same pass/fail verdict the executor did. "The result equals the independently calculated value of 98.6% within plus or minus 0.1%" is good; "the result is correct" is not.

**What is objective evidence and why does it matter?**
It is the proof that the test produced the recorded result: screenshots, printouts, query results, raw data files. It matters because validation is only as credible as its evidence. Under ALCOA+, evidence must be attributable, legible, contemporaneous, original, and accurate, and each piece must be uniquely identified and linked to the test step it supports so a reviewer can independently verify the verdict.

**You are executing a test and the result fails the acceptance criterion. What do you do?**
I stop and record exactly what happened, the actual result against the expected. I do not fix and move on. I raise a protocol deviation, log it with a number, assess impact on this and other tests, investigate root cause proportionate to risk, determine corrective action, and only after the correction is in place and controlled do I re-execute, recording the re-execution as a separate dated event. QA approves the disposition before the protocol can close.

**Is a protocol with zero deviations a good sign?**
Not necessarily. On a complex system, zero deviations can suggest trivial testing or, worse, undocumented problems. What matters is that every deviation is documented, investigated, dispositioned with a justified conclusion, and closed. A controlled record beats a suspiciously clean one.

**How do you handle a correction on a paper protocol?**
Single line through the error so the original stays legible, write the correct entry, add my initials and the date, and a reason if it is not obvious. Never use correction fluid, never overwrite, never obscure the original.

**Can you rely on the vendor's testing?**
Yes, under a risk-based approach, if I have assessed the supplier as capable through a supplier assessment, and I focus my own testing on configuration, intended use, integrations, and high-risk functions rather than blindly re-testing what the vendor already validated well. This is the core of Computer Software Assurance and GAMP 5: scale rigor to risk and rely on supplier evidence appropriately.

**What goes in the validation report that is not in the protocol?**
The actual outcomes: a summary of what was executed, the deviation summary with dispositions, the acceptance-criteria assessment, traceability confirmation, outstanding items with justification, and the conclusion on fitness for intended use. The report is where the qualified/not-qualified judgment is made and signed, and that conclusion has to be supported by the evidence in the body.

---

## Practical tips

- Write the acceptance criteria first, then write the steps that prove them. It keeps tests from wandering.
- One action per step, one verifiable proof per criterion. If you cannot write a clean pass/fail for a step, the step is wrong.
- Number your evidence as you design the protocol, not after execution. SS-012-3 should already exist as a placeholder in the script before anyone takes the screenshot.
- Use named test accounts and named test data, never "a user" and "some data." Reproducibility depends on specificity.
- Include negative tests deliberately. Proving the system refuses to do the wrong thing is often more valuable than proving it does the right thing.
- Keep a signature/initials log at the front of every executed protocol so every set of initials is attributable.
- Pre-print N/A handling guidance for executors so no field is ever left genuinely blank.
- Review executed protocols against the script line by line: every actual result recorded, every evidence reference present and matching, every deviation logged. The review is not a formality.
- When a deviation is a real system failure, do not soften the language in the report. State it, state the fix, state the controlled re-test, and let the evidence carry the conclusion.

For the surrounding deliverables and the broader process, see [validation-deliverables-guide](/articles/validation-deliverables-guide), [project-managing-validation](/articles/project-managing-validation), [equipment-qualification-lifecycle](/articles/equipment-qualification-lifecycle), and [validation-summary-report-and-release](/articles/validation-summary-report-and-release).
