---
title: "Validation Test Plan"
description: "A plug-and-play validation test plan covering IQ/OQ/PQ scope and test types, entry and exit criteria, test environments and data, roles, defect and deviation management, evidence and screenshot rules, and acceptance, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Plan"
pillar: "csv-csa"
relatedArticles: ["writing-validation-protocols-and-reports", "validation-test-failure-management"]
tags: ["validation", "test plan", "csv", "iq oq pq", "test data", "defect management", "csa"]
tier: "Intermediate"
---

This is a ready-to-use validation test plan. It sits above the individual IQ, OQ, and PQ protocols and tells the team how testing for one system will be run end to end: what gets tested, in what order, in which environment, with what data, who does what, how defects and deviations are handled, and what evidence each test must capture. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Confirm each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Validation Test Plan for `<<FILL: SYSTEM NAME>>` |
| Document number | `<<FILL: VTP-ID, e.g. VTP-CSV-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Validation Lead>>` |
| System / process in scope | `<<FILL: system name, version, business process>>` |
| Linked documents | `<<FILL: URS, FRS/config spec, risk assessment, VP/VMP, traceability matrix, IQ/OQ/PQ protocol IDs>>` |

## 1. Purpose

This plan defines how testing will be planned, executed, and documented to demonstrate that `<<FILL: SYSTEM NAME>>` is installed correctly, performs as specified, and meets its intended use in the live process. It states the test types in scope, the criteria to start and finish each phase, the environments and data to be used, the rules for capturing evidence, and how failures are handled, so that a reviewer can reconstruct what was tested, why, and with what result.

## 2. Scope

This plan covers installation qualification (IQ), operational qualification (OQ), and performance qualification (PQ) for `<<FILL: SYSTEM NAME>>` at `<<FILL: site / area>>`. It governs the depth and rigor of testing in proportion to feature risk, in line with FDA's Computer Software Assurance approach. It does not redefine requirements (held in `<<FILL: URS ID>>`), the risk classification of features (held in `<<FILL: risk assessment ID>>`), or the overall project sequencing (held in `<<FILL: validation plan / VMP ID>>`). For the method allocation that decides scripted versus exploratory versus supplier evidence per feature, see `<<FILL: CSA test plan ID>>`.

## 3. Test types in scope

State which test types apply to this system and what each one proves. Not every system needs every type; record the rationale for any omission.

| Test type | What it demonstrates | Applies? | Protocol / reference |
|---|---|---|---|
| Installation qualification (IQ) | The system, its components, and the environment are installed and configured per specification and the supplier's documentation | Yes / No | `<<FILL: IQ-ID>>` |
| Operational qualification (OQ) | Each function works as specified across normal, boundary, and challenge conditions, including security, audit trail, and alarms | Yes / No | `<<FILL: OQ-ID>>` |
| Performance qualification (PQ) | The system performs reliably in the live process with real users, real data, and real workflows | Yes / No | `<<FILL: PQ-ID>>` |
| Unscripted / exploratory testing | Lower-risk functions are exercised by a skilled tester with the session and findings logged | Yes / No | `<<FILL: reference>>` |
| Supplier / reused evidence | Vendor test evidence is assessed and reused for low-risk, vendor-controlled functions instead of repeating tests | Yes / No | `<<FILL: supplier assessment ID>>` |
| Regression testing | Previously verified functions still work after a change, patch, or upgrade | Yes / No | `<<FILL: reference>>` |

Depth of testing follows feature risk. High-risk, direct-impact functions get scripted tests with recorded evidence; lower-risk functions can be covered by unscripted testing or assessed supplier evidence. The per-feature decision lives in the CSA test plan; this plan sets the overall structure and the IQ/OQ/PQ flow.

## 4. Roles and responsibilities

| Role | Responsibility |
|---|---|
| Validation lead | Owns this plan, the test schedule, and the final test summary; confirms entry and exit criteria are met before each phase. |
| Test author | Writes test scripts traceable to requirements and risk; defines expected results and acceptance per test. |
| Tester / executor | Runs tests, records actual results and evidence as they happen, and raises defects and deviations. |
| Independent reviewer | Reviews executed scripts for completeness, that evidence supports the recorded result, and that no result was back-filled. |
| System owner / process SME | Confirms the test data and PQ scenarios reflect the real process. |
| IT / system administrator | Provisions environments, applies the build under test, and confirms configuration. |
| Quality Assurance | Approves this plan, the protocols, deviations, and the test summary; owns the disposition. |

A tester does not approve their own executed test. The reviewer must be someone other than the executor for that script.

## 5. Test environments

| Item | Entry |
|---|---|
| Environments to be used | `<<FILL: e.g. development, validation/QA, production>>` |
| Where formal IQ/OQ runs | `<<FILL: e.g. validation environment that mirrors production>>` |
| Where PQ runs | `<<FILL: production or production-equivalent>>` |
| Configuration control of the test environment | `<<FILL: build/version under test, change-frozen during execution>>` |
| Environment-to-production equivalence | `<<FILL: documented difference assessment, or "identical build">>` |
| Restore / reset point | `<<FILL: snapshot or backup taken before execution>>` |

The build under test must be under change control and frozen for the duration of a formal run. If the environment changes mid-run, record it as a deviation and assess what must be retested. Functions verified only in a non-representative environment cannot be claimed as verified for production without a documented equivalence rationale.

## 6. Test data

| Item | Entry |
|---|---|
| Data sources | `<<FILL: synthetic, masked production copy, or controlled live data>>` |
| Coverage | `<<FILL: normal values, boundary values, invalid/negative cases, max field lengths>>` |
| Personal / regulated data handling | `<<FILL: masking/anonymization approach if production data is used>>` |
| Known-answer datasets | `<<FILL: pre-calculated expected results for calculations and reports>>` |
| Data setup and teardown | `<<FILL: how datasets are loaded and reset between tests>>` |
| Data control / version | `<<FILL: dataset ID and version so a test can be reproduced>>` |

Test data must let a test prove both the pass case and the failure case. A calculation test, for example, needs at least one input where the right answer is known in advance, plus a boundary input and an invalid input, so the test shows the system computes correctly and rejects bad data. Where masked production data is used, the masking must not change the behavior being tested.

## 7. Entry criteria

A test phase does not start until all of its entry criteria are met and recorded. List the criteria per phase.

| Phase | Entry criteria |
|---|---|
| IQ | Approved IQ protocol; system delivered; supplier documentation available; environment provisioned; installation prerequisites confirmed. |
| OQ | IQ complete and approved (or deviations risk-assessed and accepted); approved OQ protocol; requirements and risk assessment approved; test data prepared; testers trained. |
| PQ | OQ complete and approved (or open items risk-assessed); approved PQ protocol; trained end users; production or production-equivalent environment; SOPs and work instructions available. |

Starting a phase before its entry criteria are met, for example running OQ on an un-approved protocol, is a common finding and undermines the whole record.

## 8. Exit criteria

A phase is complete only when all of its exit criteria are met. Open items at exit are explicitly dispositioned, not silently carried.

| Phase | Exit criteria |
|---|---|
| IQ | All IQ tests executed; results within acceptance; deviations resolved or risk-assessed and accepted; IQ summary approved. |
| OQ | All OQ tests executed; results within acceptance; all critical defects resolved and retested; remaining defects risk-assessed with QA approval; traceability confirmed; OQ summary approved. |
| PQ | All PQ scenarios executed in the live workflow; acceptance met; no open critical defect; user acceptance recorded; PQ summary approved. |
| Overall | Requirements traced to executed tests with results; no unresolved critical defect; all deviations closed or formally accepted; test summary and validation report approved before go-live. |

## 9. Defect and deviation management

Distinguish a defect (the system does not do what a test expected) from a deviation (a departure from the approved protocol or plan during execution). Both are recorded; the routing differs.

### 9.1 Defect severity

| Severity | Definition | Handling |
|---|---|---|
| Critical | Affects data integrity, patient safety, product quality, or a regulatory requirement; blocks intended use | Fix and retest before the phase exits; cannot be deferred |
| Major | Significant function fails but a controlled workaround exists | Fix and retest, or accept with a documented risk-based justification and an interim control |
| Minor | Cosmetic or low-impact issue with no effect on intended use | Log; fix in this release or a tracked future release with rationale |

### 9.2 Defect workflow

1. Record the defect with the test ID, the expected and actual result, the build/version, and the evidence at the moment it was found.
2. Assign a severity using the table above and confirm it with QA for any critical or major defect.
3. Resolve, then retest with a new dated execution; do not edit the original failing result.
4. Confirm no regression in related functions.
5. Close the defect with the retest evidence referenced.

### 9.3 Deviations during execution

Any departure from the approved protocol (a changed step, an environment change, an unplanned data substitution, a test run out of sequence) is logged as a deviation per `<<FILL: deviation SOP-ID>>`, assessed for impact, and approved by QA before the affected result is accepted. Do not annotate around a deviation in the margin and move on.

## 10. Evidence and screenshot rules

Evidence is what makes a recorded result credible to someone who was not in the room. Apply these rules to every test that captures objective evidence.

1. Capture evidence at the moment the step is executed, not reconstructed afterward.
2. Each screenshot or printout shows enough context to prove the step: the system identity, the relevant data, and where possible the date/time and the logged-in user.
3. Label each piece of evidence with the protocol ID, the test/step number, the date, and the executor's initials.
4. Cross-reference each evidence item from the test step so a reviewer can match step to proof without guessing.
5. Capture audit-trail and system-clock screenshots where the test claims the audit trail or timestamping works.
6. Record actual results in ink or in the validated tool as they happen; corrections follow good documentation practice (single line, initial, date, reason), never overwrite or obscure the original.
7. Page, number, and attach evidence so nothing can be added or removed without it being obvious.

A recorded "pass" with no supporting evidence, or evidence that does not actually show the claimed condition, is treated by inspectors as no evidence.

## 11. Traceability

Every requirement in scope traces to at least one test, and every test traces back to a requirement and its risk classification, through the traceability matrix `<<FILL: RTM-ID>>`. At phase exit, confirm there are no requirements without a test (a coverage gap) and no tests without a requirement (scope creep or an untraceable test). High-risk requirements must be covered by scripted tests with evidence.

## 12. Acceptance criteria

Testing is acceptable when all of the following are true:

- Every in-scope requirement is traced to an executed test with a recorded result.
- All tests were executed in a controlled, change-frozen environment with controlled data.
- Actual results and supporting evidence were recorded at the time of execution and support each recorded outcome.
- No critical defect is open; major defects are resolved or formally accepted with QA approval and an interim control.
- All deviations are logged, impact-assessed, and closed or accepted.
- Each phase met its entry and exit criteria, and a test summary is reviewed and approved.

## 13. References

> 21 CFR Part 11 (electronic records and signatures).
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment).
> EU GMP Annex 11 (Computerised Systems), sections 4 (validation) and 11 (periodic evaluation).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision (DQ/IQ/OQ/PQ).
> FDA Guidance, Computer Software Assurance for Production and Quality System Software (finalized 24 September 2025).
> FDA General Principles of Software Validation (2002), for software-specific testing concepts.
> GAMP 5 (Second Edition), A Risk-Based Approach to Compliant GxP Computerized Systems.
> ICH Q9, Quality Risk Management (for the risk-based depth of testing).

Confirm the current version and clause numbers of each reference before issue.

## 14. Test summary (record generated at close)

| Field | Entry |
|---|---|
| System name and version | `<<FILL>>` |
| Phases executed | IQ / OQ / PQ `<<FILL: which>>` |
| Tests executed / passed | `<<FILL: counts>>` |
| Requirements covered | `<<FILL: count and % of in-scope>>` |
| Critical defects (raised / open) | `<<FILL>>` |
| Major defects (resolved / accepted) | `<<FILL>>` |
| Deviations (raised / closed) | `<<FILL>>` |
| Disposition | `<<FILL: fit for intended use / not yet>>` |
| Test summary approved by (name, signature, date) | `<<FILL>>` |

## 15. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 16. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Validation) | `<<FILL>>` | | |
| Reviewer (System owner / SME) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the plan completed for an example laboratory information management system (LIMS) configuration, so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| System / process | LIMS sample-login and result-entry configuration, vendor build 8.4, QC laboratory |
| Test types in scope | IQ (build and config), OQ (functions, security, audit trail, calculations), PQ (live QC workflow); supplier evidence reused for the unmodified core database engine |
| Environments | Validation environment mirroring production for IQ/OQ; production-equivalent for PQ; build change-frozen during each run; pre-run snapshot taken |
| Test data | Synthetic sample set: 3 normal lots, 2 boundary cases (max field length, zero quantity), 2 invalid cases; one known-answer dataset for the assay calculation (input 0.480, expected 96.0% of label) |
| OQ entry criteria met | IQ complete and approved; OQ protocol approved; URS and risk assessment approved; testers trained; data loaded |
| Defects found | 1 critical (calculation rounded down at the 5th decimal, wrong result at a boundary), 2 minor (label typo, slow report render) |
| Defect handling | Critical fixed in build 8.4.1, retested with the known-answer dataset, regression run on adjacent calculations, closed with evidence; minors logged, label fix in this release, render in a tracked future release |
| Deviations | 1 deviation: OQ-022 run before its test data was reloaded; impact-assessed, test re-executed, deviation closed by QA |
| Evidence | Each OQ step screenshot labeled with protocol ID, step number, date, and executor initials; audit-trail screenshot captured for the result-change test; calculation result printout attached and cross-referenced |
| Traceability | 41 in-scope requirements, all traced to executed tests; no orphan tests; 9 high-risk requirements covered by scripted tests with evidence |
| OQ exit | All tests executed; critical defect resolved and retested; 2 minors dispositioned; OQ summary approved before PQ start |
| Disposition | Fit for intended use after PQ; test summary approved 12 June 2026 |

In this example the team caught a critical calculation defect because the test data included a boundary input with a pre-calculated known answer, fixed and retested it on a new build, ran regression, and held the phase exit until QA approved. The deviation for running a test before its data was reloaded was logged and the test re-executed rather than quietly accepted. That sequence, controlled environment to known-answer data to caught defect to fix to retest to clean exit, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this plan prevents

- Tests executed against an un-approved protocol, or a phase started before its entry criteria were met.
- A recorded "pass" with no evidence, or screenshots that do not actually show the claimed condition.
- Actual results back-filled after the fact, or original failing results overwritten instead of retested on a new dated execution.
- Critical defects deferred to "a later release" so the system could go live, with no risk justification or interim control.
- The same person executing and approving their own test.
- Testing done in a development environment that does not represent production, then claimed as production verification with no equivalence rationale.
- Requirements with no corresponding test (coverage gaps), or tests that trace to nothing.
- Calculations verified with no known-answer or boundary data, so a rounding or boundary error is never exposed.
- Deviations during execution annotated in the margin and moved past, with no impact assessment or QA approval.

## How to adapt this plan

1. Set your document number, owner, and effective date in the header, and link your URS, risk assessment, validation plan, and IQ/OQ/PQ protocol IDs.
2. In section 3, mark which test types apply and record the rationale for any you omit; point the per-feature scripted-versus-exploratory decision to your CSA test plan.
3. Fill the environments and test-data sections with your real environments, your masking approach, and your known-answer datasets so any test can be reproduced.
4. Tune the defect severity definitions and the entry/exit criteria to your own validation procedure, keeping critical defects non-deferrable.
5. Point the cross-references in sections 2, 9.3, and 11 to your real deviation procedure, traceability matrix, and validation plan.
6. Confirm every regulation in section 13 against the current published version before issue, including the CSA guidance finalization date.
