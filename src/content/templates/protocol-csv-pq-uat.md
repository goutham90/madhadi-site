---
title: "Computerized System Performance Qualification / UAT Protocol"
description: "A plug-and-play PQ/UAT protocol that proves a computerized system performs as required in real business use: scenario-based test cases traced to the URS, performance and concurrency checks, defect handling, acceptance criteria, and a sign-off summary, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Protocol"
pillar: "csv-csa"
relatedArticles: ["gamp5-csv-framework","computer-software-assurance-fda","lims-implementation-and-validation"]
tags: ["uat", "performance qualification", "csv", "csa", "test cases", "traceability", "gamp 5", "acceptance criteria"]
tier: "Advanced"
---

This is a ready-to-use performance qualification protocol, run as user acceptance testing for a GxP computerized system. PQ and UAT are the same exercise here: real users running the system end to end against the user requirements, in conditions that match production. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your requirements traceability matrix, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Performance Qualification / UAT Protocol for `<<FILL: SYSTEM NAME>>` |
| Document number | `<<FILL: PRT-ID, e.g. PQ-CSV-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Validation>>` |
| System / GAMP category | `<<FILL: system name, version, GAMP category 3/4/5>>` |
| Linked report | `<<FILL: summary report number to be issued, e.g. PQR-CSV-031>>` |

## 1. Purpose

This protocol demonstrates that `<<FILL: SYSTEM NAME>>`, version `<<FILL: version>>`, performs its intended business processes correctly, reliably, and within performance expectations when operated by trained end users in a production-equivalent environment. PQ/UAT confirms that the system meets the user requirements (URS `<<FILL: URS-ID>>`) in real workflows, not just that individual functions work in isolation. It is the last test phase before the system is released for GxP use.

## 2. Scope

This protocol covers end-to-end execution of the business processes the system supports at `<<FILL: site / department>>`, run by the actual user roles against the URS. It includes the real-world scenarios in section 7, the performance and concurrency checks in section 8, role and access behavior, interfaces to upstream and downstream systems, and the reports and records the process must produce.

It does not repeat installation verification (covered by IQ `<<FILL: IQ-ID>>`) or function-by-function testing (covered by OQ `<<FILL: OQ-ID>>`). Where CSA-based assurance reduces scripted testing for lower-risk functions per `<<FILL: CSA strategy / test plan ID>>`, that rationale is recorded and unscripted or ad hoc testing is captured per section 6.4.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Validation lead / author | Authors this protocol, derives test cases from the URS, maintains traceability, manages defects, and writes the summary report. |
| Business process owner | Confirms the scenarios reflect real operations, provides representative test data, and accepts the result for their process. |
| End-user testers (by role) | Execute test cases as the real user role, record actual results and objective evidence, and report defects. |
| System owner / IT | Provides the qualified test environment, the production-equivalent build, and interface connectivity; supports performance testing. |
| Quality Assurance | Reviews and approves the protocol, the deviation and defect dispositions, and the summary report; owns release for GxP use. |

## 4. Definitions

- **Performance Qualification (PQ)**: documented verification that the system performs as intended in its operating environment, run as end-to-end business process testing.
- **User Acceptance Testing (UAT)**: testing by real users to confirm the system meets the user requirements and is fit for the intended use. In this protocol PQ and UAT are executed as one phase.
- **Test case**: a defined scenario with preconditions, steps, expected results, and an acceptance criterion, traced to one or more URS requirements.
- **Defect**: any actual result that does not match the expected result, classified by severity in section 9.
- **Objective evidence**: the record that proves the result, for example a screenshot, a system-generated report, an exported audit trail, or a printout, with the date and who captured it.
- **Production-equivalent environment**: a validated or controlled test environment whose configuration, version, interfaces, and data match what will go live, so the result is meaningful.

## 5. Pre-execution requirements

Execution does not start until all of the following are confirmed and recorded in section 11.

| Item | Requirement |
|---|---|
| Approved URS | URS `<<FILL: URS-ID>>` is approved and under change control. |
| IQ and OQ complete | IQ `<<FILL: IQ-ID>>` and OQ `<<FILL: OQ-ID>>` are executed, reviewed, and any open items assessed as not blocking PQ. |
| Traceability matrix | Each URS requirement maps to at least one PQ test case (or to OQ/CSA evidence with rationale); see the linked RTM. |
| Test environment | Production-equivalent build confirmed, version `<<FILL: version>>`, interfaces connected, system date/time correct. |
| Test data | Representative, controlled test data is loaded; data that mimics live records is labeled as test data. |
| Tester qualification | Each tester is trained on the system and on this protocol; training records referenced. |
| Configuration baseline | Configuration is frozen for the test period; any change triggers section 10. |

## 6. Test approach

### 6.1 Risk-based test design

Depth of testing follows the risk and complexity of each function, in line with ICH Q9 and the GAMP 5 risk-based approach. High-risk, GxP-record-impacting steps (data entry that drives a decision, calculations, electronic signatures, batch or result disposition, interfaces that move GxP data) get fully scripted test cases with predefined expected results. Lower-risk, non-record functions may use unscripted or exploratory testing recorded per section 6.4. Record the risk basis for each requirement in the RTM.

### 6.2 End-to-end orientation

Test cases follow whole business processes from trigger to final record, not single screens. A scenario starts where a real user starts (a sample arrives, a batch is initiated, an order is received) and ends with the record the process must produce (an approved result, a released batch record, a posted transaction).

### 6.3 Scripted test cases

Scripted cases use the structure in section 7.2. Each step has a documented expected result and a place to record the actual result, pass/fail, objective evidence reference, and the tester initials and date.

### 6.4 Unscripted and ad hoc testing

Where CSA-style assurance or exploratory testing is used, record: who tested, what was tested, when, the scenarios attempted, the outcome, and any defects. Unscripted testing is evidence too; it is documented contemporaneously, not reconstructed later.

## 7. Test cases

### 7.1 Real-world scenarios to cover

At minimum, cover these scenario types, mapped to the URS. Add the scenarios specific to your process.

| # | Scenario type | What it proves |
|---|---|---|
| S1 | Normal end-to-end happy path, each user role | The core process works as the URS requires, for every role that runs it. |
| S2 | Boundary and limit data | The system handles minimum, maximum, and edge values correctly. |
| S3 | Negative / error handling | Invalid entries are rejected with a clear message and no bad record is saved. |
| S4 | Calculations and rounding | Computed values, units, and rounding match the defined method exactly. |
| S5 | Electronic signature and approval | Signatures are bound to the record, meaning is captured, and unsigned records cannot advance. |
| S6 | Access and segregation of duties | Each role sees and can do only what its access allows; the maker cannot also be the sole approver. |
| S7 | Interface in/out | Data crosses to and from `<<FILL: upstream / downstream system>>` complete, accurate, and on time. |
| S8 | Audit trail | Creation, change, and deletion are captured with who, what, when, and old/new value. |
| S9 | Report and record output | The records the process must produce are correct, complete, and reproducible. |
| S10 | Recovery / interruption | A dropped session or interrupted step does not corrupt or lose committed data. |

### 7.2 Scripted test case template

Repeat this block for every scripted test case.

| Field | Entry |
|---|---|
| Test case ID | `<<FILL: TC-001>>` |
| Title | `<<FILL: short description>>` |
| URS requirement(s) traced | `<<FILL: URS-IDs>>` |
| Risk / priority | `<<FILL: High / Medium / Low>>` |
| Tester role | `<<FILL: role that runs this in production>>` |
| Preconditions | `<<FILL: state, data, access needed before step 1>>` |
| Test data | `<<FILL: specific data set / values>>` |

| Step | Action | Expected result | Actual result | Pass/Fail | Evidence ref | Tester / date |
|---|---|---|---|---|---|---|
| 1 | `<<FILL>>` | `<<FILL: specific, verifiable>>` | `<<FILL>>` | | `<<FILL: scr/report ID>>` | `<<FILL>>` |
| 2 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | | `<<FILL>>` | `<<FILL>>` |
| 3 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | | `<<FILL>>` | `<<FILL>>` |

| Field | Entry |
|---|---|
| Overall result | Pass / Fail |
| Defects raised | `<<FILL: defect IDs or None>>` |
| Reviewed by (name, date) | `<<FILL>>` |

Write expected results so a second person, with no other instruction, could judge pass or fail. "System accepts the value" is not testable; "result field shows 12.5 mg/mL, rounded to one decimal per the method, and saves without error" is.

## 8. Performance, load, and concurrency

Functional correctness is not enough; the system has to hold up under real use. Define and test the performance criteria that matter to the process.

| Performance aspect | Target / acceptance | How tested |
|---|---|---|
| Response time, key transactions | `<<FILL: e.g. screen returns within 3 s under normal load>>` | `<<FILL: measured over N runs>>` |
| Concurrent users | `<<FILL: e.g. 25 simultaneous users, no errors or data loss>>` | `<<FILL: scripted/simulated concurrent sessions>>` |
| Batch / report generation time | `<<FILL: e.g. end-of-day report completes within 10 min>>` | `<<FILL>>` |
| Interface throughput / latency | `<<FILL: e.g. results post to LIMS within 60 s>>` | `<<FILL>>` |
| Data volume at production scale | `<<FILL: behavior with production-size data set>>` | `<<FILL>>` |
| Failover / availability (if applicable) | `<<FILL: behavior on node failure, no committed data lost>>` | `<<FILL>>` |

State the load conditions you tested under. A response time measured on an empty database with one user is not evidence the production system will perform.

## 9. Defect management

Every actual-versus-expected mismatch is recorded as a defect, classified, dispositioned, and (for fixes) retested before closure.

| Severity | Definition | Disposition rule |
|---|---|---|
| Critical | Data loss/corruption, wrong result, signature or audit trail failure, security gap. | Must be fixed and the test case re-executed and passed before release. No go-live with an open critical. |
| Major | Required function fails or works incorrectly but a controlled workaround exists. | Fix and retest, or release only with a documented, QA-approved interim control and a tracked corrective action. |
| Minor | Cosmetic or low-impact issue, no GxP-record or decision impact. | May be deferred with QA agreement and tracked to closure post-release. |

Defect log fields: defect ID, test case ID, description, severity, root cause, fix/change reference, retest result, status, QA disposition. A fix that changes configuration or code re-triggers the change assessment in section 10 and regression of affected cases.

## 10. Change during execution

If the configuration, version, or environment changes during execution, stop, record it as a deviation per `<<FILL: deviation SOP-ID>>`, assess impact, and re-run the affected test cases on the new build. Do not splice results from two different builds into one passing record.

## 11. Acceptance criteria

The PQ/UAT is acceptable, and the system can be recommended for GxP release, only when all of the following are true.

- Every URS requirement is verified by a passing PQ test case, or by traced OQ/CSA evidence with a recorded rationale (full traceability, no gaps).
- All scripted test cases are executed; every step has an actual result, a pass/fail, and objective evidence where the result is not self-evident.
- No critical defects are open. Any open major or minor defect has a QA-approved disposition and a tracked corrective action.
- Performance and concurrency criteria in section 8 are met under stated production-like load.
- Each business process owner has accepted the result for their process.
- Deviations are documented and resolved, and no test result was reconstructed or back-dated.
- All testers were trained and the configuration baseline held for the test period.

## 12. Deviations and handling

Any test failure, unexpected behavior, or departure from this protocol is recorded as a deviation per `<<FILL: deviation SOP-ID>>`, assessed for impact, and resolved before the summary report is approved. A failed step is investigated, not edited to pass. Where the expected result, not the system, was wrong, correct the test case under change control and re-execute; record why.

## 13. Summary report

On completion, the validation lead issues report `<<FILL: report number>>` summarizing scenarios and test cases executed, pass/fail counts, the full defect log and dispositions, performance results against targets, all deviations and their resolution, the traceability conclusion (every URS requirement met), and the recommendation on release for GxP use. QA approves the report; release follows the system release procedure `<<FILL: SOP-ID>>`.

## 14. Attachments

| No. | Attachment |
|---|---|
| 1 | Requirements traceability matrix (URS to test case) |
| 2 | Executed scripted test cases with objective evidence |
| 3 | Unscripted / exploratory test records |
| 4 | Defect log |
| 5 | Performance and concurrency test data |
| 6 | Tester training references and access matrix |

## 15. References

> 21 CFR Part 11 (electronic records and electronic signatures).
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment).
> EU GMP Annex 11 (Computerised Systems), including section 4 (validation) and section 5 (data/accuracy checks).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision, for the PQ stage.
> GAMP 5 (A Risk-Based Approach to Compliant GxP Computerized Systems), Second Edition.
> FDA Computer Software Assurance for Production and Quality System Software, final guidance, 24 September 2025.
> FDA General Principles of Software Validation (for the validation lifecycle).
> ICH Q9 (Quality Risk Management), for risk-based test depth.
> PIC/S PI 011, Good Practices for Computerised Systems in Regulated GxP Environments.

Confirm the current version and clause numbers of each reference before issue.

## 16. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 17. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Validation) | `<<FILL>>` | | |
| Business process owner | `<<FILL>>` | | |
| System owner / IT | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows one scripted test case and the acceptance summary completed for an example laboratory information management system (LIMS) PQ, so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

**Test case (executed)**

| Field | Entry |
|---|---|
| Test case ID | TC-014 |
| Title | End-to-end sample result entry, second-person review, and electronic approval |
| URS requirement(s) traced | URS-022 (result entry), URS-023 (calculation), URS-031 (e-signature), URS-040 (audit trail) |
| Risk / priority | High |
| Tester role | QC Analyst (steps 1 to 4), QC Reviewer (steps 5 to 7) |
| Preconditions | Sample SMP-2026-0413 logged in, test method ASSAY-01 assigned, analyst and reviewer accounts active with correct roles |
| Test data | Two replicate readings: 0.512 and 0.508 absorbance units; method factor 24.6 |

| Step | Action | Expected result | Actual result | Pass/Fail | Evidence ref | Tester / date |
|---|---|---|---|---|---|---|
| 1 | Enter both replicate readings | Both values save; neither can be overwritten without an audit trail entry | As expected | Pass | SCR-014-01 | A. Patel, 12 Jun 2026 |
| 2 | Trigger result calculation | Mean x method factor = 12.55 mg/mL, displayed to two decimals per ASSAY-01 | 12.55 mg/mL | Pass | SCR-014-02 | A. Patel, 12 Jun 2026 |
| 3 | Attempt to approve own result as analyst | System blocks; analyst role cannot approve | Blocked, message shown | Pass | SCR-014-03 | A. Patel, 12 Jun 2026 |
| 4 | Submit result for review | Status moves to "Pending Review"; analyst can no longer edit | As expected | Pass | SCR-014-04 | A. Patel, 12 Jun 2026 |
| 5 | Log in as reviewer, open result | Reviewer sees full data, calculation, and audit trail | As expected | Pass | SCR-014-05 | M. Ortega, 12 Jun 2026 |
| 6 | Apply electronic signature (meaning: Approved) | Signature binds to record with name, date/time, and meaning "Approved" | As expected | Pass | SCR-014-06 | M. Ortega, 12 Jun 2026 |
| 7 | Re-open the approved record and read audit trail | Audit trail shows entry, calculation, submission, and approval with who/when/old-new | As expected | Pass | SCR-014-07 | M. Ortega, 12 Jun 2026 |

| Field | Entry |
|---|---|
| Overall result | Pass |
| Defects raised | DEF-014-1 (Minor): timestamp on the approval print showed local time without time zone label. Deferred with QA disposition; corrective action LIMS-CR-2026-067 to add the time zone label, tracked to closure. |
| Reviewed by (name, date) | R. Gomez (QA), 13 Jun 2026 |

**Acceptance summary (executed)**

| Field | Entry |
|---|---|
| URS requirements | 58 total; 58 verified (52 by PQ test cases, 6 by traced OQ evidence with rationale); 0 gaps |
| Scripted test cases | 41 executed, 39 pass, 2 fail then fixed and re-executed to pass |
| Defects | 1 critical (fixed and retested), 3 major (2 fixed/retested, 1 interim control with CAPA), 5 minor (deferred with QA disposition) |
| Performance | Result screen returned within 2 s under 25 concurrent analysts; end-of-shift report completed in 6 min; results posted to the instrument interface within 40 s |
| Business owner acceptance | QC Lab Manager accepted, 13 Jun 2026 |
| Deviations | 2 raised, both resolved before report approval |
| Recommendation | System recommended for GxP release; QA approved |

In this example the testers ran whole workflows as the real roles, proved that the analyst could not approve their own result (segregation of duties), checked the calculation and rounding against the method, confirmed the e-signature carried meaning and bound to the record, read the audit trail to confirm it captured who/what/when/old-new, and measured performance under realistic concurrent load. The one critical defect was fixed and the case re-executed, not waved through. That sequence is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this protocol prevents

- Test cases written as single-screen checks with no end-to-end business process, so the system "passed" without anyone proving the real workflow works.
- Expected results so vague ("works as expected") that pass/fail is the tester's opinion, not a verifiable judgment.
- A URS requirement with no traced test case, or test cases with no traced requirement, leaving coverage unproven.
- Test data that mimics live records but is not labeled as test data, contaminating production.
- Segregation of duties never tested; the same role can create and approve a GxP record.
- A failed step quietly edited to pass, with no deviation and no investigation.
- Critical or major defects open at go-live with no QA disposition or interim control.
- Performance "tested" with one user on an empty database, then deployed to many users at production data volume.
- Configuration or version changed mid-execution and results from two builds combined into one passing record.
- Objective evidence missing, so the executed record cannot be reconstructed or relied on later.

## How to adapt this protocol

1. Set your document number, owner, summary report number, and effective date in the header, and name your real system, version, and GAMP category.
2. Replace the scenario list in section 7.1 with the actual business processes your system supports, and write one or more scripted test cases per high-risk requirement using the section 7.2 block.
3. Point the cross-references in sections 2, 5, 10, 12, and 13 to your real URS, IQ, OQ, CSA strategy, deviation, and system release procedures.
4. Set real performance and concurrency targets in section 8 from the production load you expect, and state the conditions you will test under.
5. Build or attach the requirements traceability matrix so every URS requirement maps to PQ test cases or to traced OQ/CSA evidence with a rationale.
6. Where you apply CSA to reduce scripted testing on lower-risk functions, record the risk basis and capture unscripted testing per section 6.4.
7. Confirm every regulation in section 15 against the current published version before issue.
