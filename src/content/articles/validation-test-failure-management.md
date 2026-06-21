---
title: "Managing Test Failures During Validation: Discrepancies, Deviations, and Retests"
description: "How to handle a failed test result during validation execution: test incident logs, classification, root cause, retest decisions, and the documentation inspectors expect to see."
pubDate: 2026-06-20
tags: ["csv", "validation", "test execution", "deviations", "data integrity", "gmp", "inspection readiness"]
pillar: "csv-csa"
tier: "Intermediate"
---

A protocol fails. The screen that should show a rounded value to two decimal places shows three. The report that should print the batch number prints a blank. The interface that should reject an out-of-range entry accepts it. Now what?

How a team answers that question is one of the truest tests of validation maturity. The protocol itself is easy to write. The plan looks clean. Execution is where reality arrives, and execution-phase test failures are among the most frequently cited weaknesses inspectors find when they read a validation package. Not because failures happen (they always happen), but because of what teams do with them: undocumented retests, results changed after the fact, root cause stated as "tester error" with nothing behind it, expected results edited to match what the system actually did.

This article covers the discipline of handling a test failure from the moment a result does not match the expected outcome through to a closed, defensible record. It covers the terminology (discrepancy, test incident, deviation), the classification logic, root cause, the rules for a retest, who decides what, and the documentation that survives an inspection.

---

## Why test failures are a regulated event, not a clerical one

When you execute a validation protocol, you are generating evidence that a system does what it is supposed to do. That evidence has to be trustworthy. A result that does not meet its acceptance criterion is a fact about the system, and how you record, investigate, and resolve that fact is itself part of the evidence.

The regulatory basis sits in a few places that all point the same direction:

- **21 CFR Part 211.100(a)** requires that production and control procedures be designed to assure the products have the identity, strength, quality, and purity they purport to have. Process and computerized-system validation is how you demonstrate that assurance, and an unexplained validation failure undercuts the assurance.
- **21 CFR Part 211.192** requires investigation of any unexplained discrepancy. It is written for batch records, but the logic of "an unexplained discrepancy must be investigated and the conclusion recorded" is exactly the logic of a failed validation test.
- **EU GMP Annex 11 (Computerised Systems, 2011)** states under its validation section that documentation should be available to demonstrate the system was developed and validated in accordance with quality and risk management, and it requires deviations during validation to be reported and assessed.
- **EU GMP Annex 15 (Qualification and Validation, 2015)** is the most direct. It states that any deviations from the validation protocol should be documented with appropriate justification, and that quality risk management should be applied throughout. Annex 15 is where the expectation of a controlled deviation process during qualification is written plainly.
- **GAMP 5 Second Edition (ISPE, 2022)** treats test failures and discrepancies as part of normal execution and expects a documented, risk-based process to manage them, including a clear distinction between a test that needs correction (a typo in the script) and a genuine system defect.
- **ALCOA+ data integrity principles** (described in the FDA 2018 data integrity guidance, the MHRA 2018 guidance, and PIC/S PI 041) apply to the test record itself. A failed result that gets quietly overwritten violates Original, Attributable, Contemporaneous, and Accurate at the same time.

The quality rationale is simpler than the citations. A validation package is a claim: "this system is fit for use." If a test fails and the failure is hidden, edited away, or waved off, the claim is no longer supported by the evidence. An inspector who finds one altered result rightly questions every other result in the binder. That is why a single mishandled test failure can sink confidence in an entire validation effort.

---

## The vocabulary: discrepancy, test incident, deviation, defect

Terminology varies between companies, but the underlying concepts are stable. Get these straight before anything else, because half of all execution mistakes come from calling the wrong thing by the wrong name and routing it to the wrong process.

| Term | What it means | Typical home |
|------|---------------|--------------|
| Discrepancy / test incident | The factual observation that an actual result did not match the expected result, or that something unplanned occurred during execution. The neutral, first-level record. | Test incident log within the protocol or its execution record |
| Deviation | A departure from the approved protocol, procedure, or expected outcome that requires formal investigation and QA disposition. A discrepancy is escalated to a deviation when it meets defined criteria. | Quality management system (QMS) deviation/CAPA module |
| Defect / bug | A confirmed fault in the system, software, configuration, or design that caused the failure. | Defect log / vendor issue tracker, linked to the incident |
| Test script error | The expected result or test step was wrong; the system behaved correctly. The script is corrected, not the system. | Test incident log, with documented justification |

The key mental model: a **test incident** is the raw observation. It is not yet a judgment about fault. You record what you saw. Then you classify it. Some incidents are trivial (a typo in a step number, a screenshot mislabeled) and close inside the protocol. Some are real (the system computed the wrong value) and escalate to a **deviation** in the QMS with QA oversight. The classification step is the hinge of the whole process, and it is where teams most often go wrong, either by escalating everything (drowning QA in noise) or escalating nothing (hiding real defects in a local log).

A useful rule: **anything that touches the system's correctness, a GxP-relevant function, data integrity, or patient/product safety escalates to a deviation. Anything that is purely about the test artifact (the script, the evidence capture, a planning miss) can be managed as a documented test incident** with a justification, provided your validation plan permits it and QA agrees to the approach in advance.

---

## The end-to-end procedure

Here is the sequence from the moment a result fails. Follow it in order. Do not skip the "stop and record before you touch anything" step, because that is the step that protects data integrity.

### Step 1: Stop and record the observation contemporaneously

The instant an actual result does not match the expected result, the tester documents it. Not later, not after a quick retry to "see if it was a fluke." Right then.

What you record at this moment:

- The protocol and test case / step identifier (for example, OQ-014 step 7).
- The expected result as written in the protocol.
- The actual result, described factually and specifically. "Field accepted value 105 when range is 0-100" is good. "Didn't work" is useless.
- Objective evidence: screenshot, printout, system log extract, photo, with a timestamp and the identity of who captured it.
- Date, time, and the tester's signature or unique user identity.
- The environment and configuration in effect (build version, instance, test data set).

The reason for recording before retrying is data integrity. If you retry first and it passes the second time, and only then write it down as a pass, you have destroyed the original observation. The first result was real. It happened. The record has to show it happened. This is the single most important habit in execution-phase work, and it is the one inspectors probe hardest.

### Step 2: Open a test incident in the log

Assign the observation a unique incident number and enter it in the test incident log. At this stage you are not deciding fault. You are creating a controlled, attributable record of the observation so it cannot be lost, edited, or forgotten.

The original test step in the protocol is marked as **FAIL** (or whatever your protocol convention is). You do not erase the failed step, blank it, or write the pass over it. The failed step stays failed, with a reference to the incident number. If the test is later re-executed successfully, the re-execution is a new, separately dated and signed record that references the same incident. The story reads top to bottom: failed here, investigated, fixed, re-executed and passed there.

### Step 3: Triage and classify

Now decide what kind of incident this is. The classification determines the path. Run through these questions in order:

1. **Did the system behave incorrectly, or did the test behave incorrectly?**
   - System wrong (it computed, displayed, stored, or controlled something incorrectly) leads to a defect path.
   - Test wrong (the expected result was mis-specified, the step was out of order, the test data was set up wrong, the tester misread the screen) leads to a test-artifact correction.
2. **If the system is wrong, is the affected function GxP-relevant?** A defect in an audit trail, a calculation feeding a release decision, an access control, or a data-storage routine is high impact. A cosmetic defect in a label that has no GxP bearing is low impact.
3. **Does the failure indicate a data integrity concern?** Anything affecting ALCOA+ (records that can be altered without trace, missing audit trail, time-stamp problems, ability to overwrite) escalates regardless of how small it looks.
4. **Was the protocol itself wrong or ambiguous?** If the test could not be executed as written because the protocol had an error, that is a protocol deviation that needs documented correction and re-approval of the affected section.

The output of triage is a **classification and an escalation decision**. Common categories:

| Classification | Description | Path |
|----------------|-------------|------|
| Test script / expected-result error | Protocol said the wrong thing; system is correct | Document correction with justification, re-execute affected step. Often stays in the test incident log if your plan permits |
| Execution error | Tester ran the step wrong, used wrong data, skipped a prerequisite | Document, correct the execution, re-execute. May need a deviation depending on impact and your procedure |
| Environment / data setup issue | Test environment misconfigured, wrong build, bad test data | Document, fix environment, re-execute. Assess whether earlier passing results are still valid |
| System defect, low GxP impact | Real bug, but no patient/product/data-integrity consequence | Deviation, root cause, risk-based disposition (fix now, or accept with justification and track) |
| System defect, high GxP impact | Real bug affecting a GxP function or data integrity | Deviation with full investigation, fix, regression, re-execution before release. Cannot ship with this open |

### Step 4: Investigate root cause (depth proportional to risk)

How deep you go depends on classification. A mislabeled screenshot needs a one-line root cause. A calculation defect feeding a batch-release decision needs a real investigation.

For genuine system defects, establish:

- **What** actually failed (the specific function, calculation, control, or record behavior).
- **Why** it failed (the underlying technical cause: a configuration value, a code defect, an integration mismatch, a rounding rule, a missing validation rule).
- **Scope** of the failure: is this one screen or a pattern? Does the same defect affect other functions, other test cases, other data already generated? This is the question teams skip and inspectors love. A rounding error is rarely confined to one field.
- **Impact** on data already created during validation or in any prior use, and on the validity of test results that passed before the defect was found.

Use structured technique appropriate to the complexity (see [Root cause analysis techniques](/articles/root-cause-analysis-techniques)). Avoid the lazy root causes. "Tester error" is not a root cause; it is a category. The real root cause is *why* the tester could make that error: an ambiguous step, missing training, a confusing screen, no prerequisite check. If you write "human error" and stop, you have not investigated. See [Human error in deviations](/articles/human-error-in-deviations) for how inspectors read that phrase.

### Step 5: Define and execute the corrective action

Based on root cause:

- **System defect:** fix the system (code change, configuration change, vendor patch), and route that change through [change control](/articles/change-control-validated-systems). Then determine what re-testing is needed: the failed test, plus regression on anything the fix could have touched.
- **Test script error:** correct the protocol step or expected result. Document the original text, the corrected text, the reason, and who approved the change. The correction is reviewed and approved before re-execution, ideally with the same approval level that signed off the original protocol.
- **Environment / data issue:** correct the environment, document it, and assess whether results obtained before the fix are still valid. Sometimes earlier passes have to be re-executed because they ran against a bad environment.

### Step 6: Retest under controlled conditions

The retest (re-execution) rules are where inspectors look for fishing. A retest is legitimate only when the reason for the original failure is understood and corrected. Re-running a test "to see if it passes this time" without a documented cause is testing into compliance, and it is a finding.

Conditions for a defensible retest:

- The root cause is documented and the corrective action is complete and verified.
- The re-execution is a **new record**, separately dated, timed, and signed. It does not overwrite the original failed record.
- The re-execution references the incident/deviation number so the link is explicit.
- If the fix could affect other functions, the retest scope includes regression, not just the one step that failed.
- The decision to retest, and its scope, is reviewed and approved per your procedure (often QA, or the validation lead with QA concurrence for higher-impact items).

### Step 7: Disposition and closure

Every incident closes with a documented disposition. For a deviation, QA dispositions it. The closure record states:

- The classification and root cause.
- The corrective action taken (and CAPA reference if one was raised, see [What is a CAPA](/articles/what-is-a-capa)).
- The re-execution result and its record reference.
- Impact assessment: confirmation that no other test results, no data, and no aspect of the system's fitness for use is compromised, or a clear statement of what is and how it is handled.
- The disposition: closed-resolved, closed with a justified open item tracked to a date, or, for a defect that will not be fixed, an accept-with-justification and a documented residual risk.

Open items that are deferred get rolled up into the [validation summary report](/articles/validation-summary-report-and-release), which lists every deviation, its resolution, and any open item with a justification and a target date. Nothing gets released to GxP use with an unassessed open defect.

---

## A worked example

Walk a real failure through the whole flow so the abstractions land.

**Context:** OQ of a chromatography data system configuration. Test case OQ-022 verifies that a calculated assay result rounds and reports to two decimal places per the configured method.

**The failure:** The tester executes OQ-022 step 4. Expected result: a result of 98.7649 reports as 98.76. Actual: the system reports 98.765. The value displays three decimal places.

**Step 1, record it.** The tester does not re-run the calculation. They screenshot the result screen with timestamp, note the build version, and write:

> OQ-022 step 4: Expected reported result 98.76 (2 dp per method config). Actual reported result 98.765 (3 dp). Screenshot SS-OQ022-04 captured 14:12, build 7.4.1, test data set TD-CDS-03. Step result: FAIL. Test Incident TI-0007 raised.

**Step 2, log it.** TI-0007 opens. The OQ step 4 is marked FAIL with a reference to TI-0007. The failed step is not erased.

**Step 3, triage.** Question 1: is the system wrong or the test wrong? The method configuration specifies two decimal places; the system reported three. The system is wrong. Question 2: GxP-relevant? Yes, the reported assay value can feed a release decision. Question 3: data integrity? The reported value is the result of record, so an incorrect rounding rule affects the accuracy of a GxP record. **Classification: system defect, high GxP impact. Escalate to a deviation (DEV-0033).**

**Step 4, root cause.** Investigation finds the rounding precision was set at the system default (three places) rather than the method-specified two, because the configuration step that sets reporting precision was missed during build. Scope check: every method built in this same configuration session shares the same missed step. So this is not one method; it is a pattern across five methods configured that day. The scope question just changed the impact materially. Impact on prior data: no GxP batches have been run on this configuration (it is still in OQ), so no released data is affected, but every other OQ test that relied on a reported value is now suspect and must be reviewed.

**Step 5, correct.** A configuration change is raised through change control to set reporting precision per each method spec across all affected methods. The change is implemented and verified in the test environment.

**Step 6, retest.** OQ-022 step 4 is re-executed as a new, dated, signed record referencing DEV-0033, and it passes (98.76). Because the defect spanned multiple methods, the retest scope includes re-executing the reporting-precision verification for all five affected methods, plus any earlier OQ result that depended on a reported value. The re-executions are all new records.

**Step 7, disposition.** DEV-0033 closes: root cause = missed configuration step during build; corrective action = configuration corrected via CC-0091 and re-verified; CAPA-0012 raised to add reporting-precision to the configuration build checklist and to add a verification step so a missed setting is caught before OQ; re-execution records referenced; impact assessment confirms no released data affected; disposition closed-resolved. DEV-0033 is listed in the validation summary report.

Notice what made this defensible: the failure was recorded before any retry, the scope question turned one defect into five, the root cause produced a systemic fix not a "we'll fix this one method," and every re-execution is its own record. That is what good looks like.

---

## Roles and responsibilities

A test failure pulls in several roles. Clear ownership prevents the two failure modes: everything stalling because no one decides, and things getting fixed quietly because no one is watching.

| Role | Responsibility in a test failure |
|------|----------------------------------|
| Tester / executor | Observes and records the failure contemporaneously, captures evidence, raises the test incident, marks the step FAIL, does not alter the original record. Re-executes after correction. |
| Validation lead / author | Triages and classifies the incident, drives root cause for test-artifact issues, defines re-test scope, decides which incidents escalate, maintains the incident log. |
| Subject matter expert (SME) | Provides technical root cause for system defects, assesses scope and impact, advises on whether a fix is needed before release. |
| System owner / process owner | Accountable for the system's fitness for use; accepts residual risk for any open item carried forward; approves disposition for items within their authority. |
| Vendor / supplier | For configurable or bespoke systems, investigates and remediates product defects, supplies patches and the analysis behind them. Their work is assessed, not blindly accepted. |
| Quality Assurance (QA) | Independent oversight. Reviews and approves deviation classification and disposition, confirms data integrity was preserved, approves retests for higher-impact items, signs the closure, and makes the final release call. QA is the check that the team did not test into compliance. |

The independence of QA matters. The people who built and tested the system have an incentive to close fast. QA's job is to be the one party whose interest is in the evidence being true, not in the schedule.

---

## Common mistakes and inspection-finding patterns

These are the patterns that recur across published inspection observations and warning letters in the computerized-system and validation space. None are exotic. They are ordinary corner-cutting under deadline pressure.

**Editing the expected result to match the actual.** The system does X; the protocol expected Y; someone changes Y to X and marks it pass. This is testing into compliance with extra steps, and it is the worst version because it leaves no incident record at all. If a protocol expectation was genuinely wrong, you correct it through a documented, justified, approved change, and the system still has to be re-verified against the corrected expectation. You never reverse-engineer the expected result from the system's behavior.

**Undocumented retesting.** Re-running a failed step until it passes, recording only the pass. The original failure vanished. Inspectors detect this by comparing execution timestamps, audit trails, and the presence of a failure investigation. A clean protocol with no incidents in a system of any real complexity is itself suspicious; everything fails sometimes.

**Overwriting the original failed result.** Erasing or blanking the failed entry rather than leaving it FAIL with a reference to the incident and a separate re-execution record. This breaks Original and Contemporaneous. The failed result is data; it has to persist.

**"Tester error" with no investigation behind it.** Classifying genuine failures as execution error to avoid a deviation. Sometimes it really is an execution error, but if it is, the record has to show *why* the error was possible and what prevents recurrence. A pile of "tester error" closures with no analysis is a flag that the team is using the category as an escape hatch. See [Human error in deviations](/articles/human-error-in-deviations).

**No scope assessment.** Fixing the one step that failed and re-executing only that step, without asking whether the same defect affects other functions, other tests, or data already generated. The rounding example above shows how a one-step failure was actually a five-method defect.

**Skipping regression after a fix.** A change made to fix one defect can break something that passed earlier. If the fix touches shared logic, configuration, or integration, the earlier passing results may no longer be valid and need re-execution.

**Incidents living only in a local spreadsheet, never reaching the QMS.** Genuine GxP defects managed entirely inside a test incident log with no QMS deviation and no QA disposition. The line between "test artifact, stays local" and "real, escalates to QMS" has to be defined and followed.

**Closing the package with open defects nobody assessed.** Releasing a system to GxP use with known open issues that were never risk-assessed or summarized. Every open item belongs in the [validation summary report](/articles/validation-summary-report-and-release) with a justification, a risk position, and a target date.

**Time-stamp and contemporaneity gaps.** Re-executions all dated the same day as the original failure when the fix demonstrably took a week. Audit trails that show records created or modified outside the documented execution window. These are data integrity findings, and they are caught by reading audit trails, not the paper. See [Time stamps and system clock control](/articles/time-stamps-and-system-clock-control).

---

## Interview-ready: questions you will be asked and how to answer

If you interview for a validation, CSV, or QA role, or if an inspector sits across from you, these come up. Strong answers are specific and show you know the data-integrity logic, not just the words.

**"A test fails during OQ. Walk me through what you do."**
Record the observation contemporaneously with evidence before doing anything else; mark the step FAIL; raise a test incident; triage to decide whether the system or the test was wrong; if the system is wrong and the function is GxP-relevant, escalate to a deviation; investigate root cause and scope; correct via change control if the system is changed; re-execute as a new dated and signed record with regression as needed; QA dispositions and closes; carry any open item into the summary report. The phrase to land is "record first, retry never until cause is understood."

**"What is the difference between a discrepancy and a deviation?"**
A discrepancy (or test incident) is the neutral factual observation that an actual result did not match the expected. A deviation is a formal QMS record opened when that discrepancy meets escalation criteria, requires investigation, and needs QA disposition. Not every discrepancy becomes a deviation; a corrected test script error may stay in the incident log with justification. Anything touching system correctness, a GxP function, or data integrity escalates.

**"When is it acceptable to retest, and when is it not?"**
Acceptable only when the root cause of the original failure is understood and the corrective action is complete and verified, recorded as a new separate result. Not acceptable to re-run a failed test simply hoping it passes, with no documented cause. The second is testing into compliance.

**"You re-ran a failed test and it passed. What does the documentation show?"**
The original failed result stays in the record marked FAIL with a reference to the incident. The re-execution is a separate, dated, signed record referencing the same incident. Both are visible. The story reads failed, investigated, fixed, re-executed and passed.

**"How do you handle a test failure where the protocol was wrong, not the system?"**
Document it as a test incident, classify it as a test/expected-result error, correct the protocol step or expected result through a documented and approved change that records the original and corrected text and the justification, then re-execute the affected step against the corrected expectation. The system was never wrong, so the system does not change, but the protocol change still gets the appropriate approval.

**"How do you decide how deep the investigation goes?"**
Risk-based and proportional. A mislabeled screenshot gets a one-line root cause. A defect in a calculation feeding a release decision gets a full investigation with scope and impact across all affected functions and any data already generated. Annex 15 and quality risk management drive the depth.

**"What is the most common execution-phase finding inspectors cite?"**
Mishandled failures: editing expected results to match actuals, undocumented retesting, overwriting failed results, and "human error" closures with no real investigation. All of them are data integrity failures at heart, because they damage the trustworthiness of the test record.

**"What regulation underpins investigating a validation discrepancy?"**
Annex 15 directly requires deviations from validation protocols to be documented with justification under quality risk management; Annex 11 requires deviations during validation to be reported and assessed; the investigate-and-record-the-conclusion logic mirrors 21 CFR 211.192; and the test record itself is governed by ALCOA+ data integrity expectations.

---

## Practical tips

- Decide your escalation criteria **before** execution starts and write them into the validation plan. The moment to define "what becomes a deviation" is not while staring at the first failure. See [Quality event classification triage](/articles/quality-event-classification-triage).
- Pre-print or template the test incident log so a tester under pressure has fields to fill, not a blank page. Missing fields are missed data.
- Train executors that the failed result is data they are protecting, not a mistake they are hiding. Culture here is everything. A team that fears failures hides them; a team that expects them documents them.
- Keep the incident numbering scheme simple and link it both ways: the protocol step references the incident, the incident references the re-execution record.
- For configurable and vendor systems, log the vendor's defect ID alongside your incident so the trail connects your evidence to their fix.
- When a fix touches shared logic, default to running regression. The cost of an unneeded regression run is small; the cost of a missed side effect found by an inspector is not.
- Read your own audit trail before the inspector does. Re-execution timestamps that contradict the documented timeline are findings waiting to happen.

---

## Related articles

- [Writing validation protocols and reports](/articles/writing-validation-protocols-and-reports)
- [Validation summary report and release](/articles/validation-summary-report-and-release)
- [Deviation management](/articles/deviation-management)
- [Root cause analysis techniques](/articles/root-cause-analysis-techniques)
- [Change control for validated systems](/articles/change-control-validated-systems)
- [Quality event classification and triage](/articles/quality-event-classification-triage)
- [Human error in deviations](/articles/human-error-in-deviations)
- [What is a CAPA](/articles/what-is-a-capa)
- [GAMP 5 CSV framework](/articles/gamp5-csv-framework)
- [Computer software assurance (FDA)](/articles/computer-software-assurance-fda)
- [CSV/CSA audit checklist](/articles/csv-csa-audit-checklist)
- [Validation deliverables guide](/articles/validation-deliverables-guide)
