---
title: "Test Script: Performance and Load"
description: "A plug-and-play performance and load test script that verifies response time, concurrency, throughput, resource use, and degradation behavior under expected and peak load, with numbered step, expected, actual, and pass or fail columns, a worked filled specimen, and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Template"
pillar: "csv-csa"
relatedArticles: ["writing-validation-protocols-and-reports", "validation-test-failure-management"]
tags: ["performance testing", "load testing", "test script", "csv", "csa", "response time", "concurrency", "21 cfr part 11"]
tier: "Advanced"
---

This is a ready-to-use performance and load test script. It verifies that a GxP computerized system stays responsive, correct, and stable under the user load and data volume it will actually carry, both at expected load and at the peak the system is sized for. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and execute it under an approved OQ or PQ protocol or validation plan. A worked filled specimen follows the template so you can see how a completed version reads. A test script is contemporaneous GxP evidence: write each actual result as you observe it, in the validated tool or in ink, never reconstructed afterward. Verify each cited regulation against the current source before you rely on it.

## What this script is, and where it sits

Functional scripts prove the system does the right thing with one user and a clean data set. A performance and load script proves it keeps doing the right thing when many users hit it at once, when the database is full, and when the day's busiest hour arrives. The two are different kinds of evidence. A function can be perfectly correct in isolation and still time out, return a partial result, or corrupt a record when fifty analysts save at the same second. That failure mode is what this script is built to catch.

This script sits below the OQ or PQ protocol, which states what will be load-tested and why, and feeds the traceability matrix, which links each performance and capacity requirement to the evidence that exercised it. Performance requirements have to exist before you can test them: a response-time target, a concurrent-user count, a throughput rate, a data-volume the system must hold. If the URS or FS does not state those numbers, fix that first, because "fast enough" is not a testable expected result.

Match the rigor to risk. Under FDA's Computer Software Assurance approach, a system whose slowness or instability could delay a batch release, drop a record, or put patient-affecting data at risk earns the scripted, instrumented treatment below. A low-risk reporting system used by two people may justify a lighter check. Decide that risk in the risk assessment, then write the script.

## Document control header

| Field | Entry |
|---|---|
| Test script title | `<<FILL: function-specific title, e.g. Result Entry and Reporting, Performance and Load>>` |
| Test script ID | `<<FILL: TS-ID, e.g. TS-PQ-051>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Parent protocol / plan | `<<FILL: OQ/PQ protocol or validation plan ID this script runs under>>` |
| System name and ID | `<<FILL: SYSTEM NAME / ID>>` |
| Software version / build | `<<FILL: exact version, build, patch level under test>>` |
| Configuration baseline | `<<FILL: config spec / baseline ID and version, frozen for the test>>` |
| Test environment | `<<FILL: qualified environment that mirrors production sizing, not production>>` |
| Environment representativeness | `<<FILL: how CPU, memory, storage, network, and DB volume match production, with the gaps stated>>` |
| Load tool / method | `<<FILL: load-generation tool and version, or manual coordinated-user method>>` |
| Function risk (drives rigor) | `<<FILL: High / Medium / Low, per the risk assessment>>` |
| Author | `<<FILL: name, role>>` |
| Effective date | `<<FILL: date>>` |

## 1. Performance requirements traced

State every performance, capacity, and concurrency requirement this script verifies, so the matrix can link requirement to evidence in both directions. Each requirement must carry a number, not an adjective. Every requirement listed here must be exercised by at least one numbered step below.

| Requirement ID | Requirement text (the number, not "fast") | Source document | Risk |
|---|---|---|---|
| `<<FILL: URS-031>>` | `<<FILL: the system shall return a saved result within 3 seconds (95th percentile) at expected load>>` | `<<FILL: URS-ID, version>>` | `<<FILL: High / Medium / Low>>` |
| `<<FILL: URS-032>>` | `<<FILL: the system shall support 50 concurrent active users without functional error>>` | `<<FILL: URS-ID, version>>` | `<<FILL>>` |
| `<<FILL: URS-033>>` | `<<FILL: the system shall sustain a throughput of 600 result saves per hour>>` | `<<FILL: URS-ID, version>>` | `<<FILL>>` |
| `<<FILL: URS-034>>` | `<<FILL: the system shall hold and query a database of 2 years of records (>= 5,000,000 rows) within the same response targets>>` | `<<FILL: URS-ID, version>>` | `<<FILL>>` |

## 2. Objective

In one or two sentences, state what passing this script demonstrates. Keep it tied to the numbers in section 1.

Example: this script verifies that the system meets its response-time targets at expected load, sustains the specified concurrent-user count and throughput at peak load with no functional error or data loss, stays within resource limits, and degrades gracefully rather than failing, against a production-representative data volume.

`<<FILL: objective>>`

## 3. Workload model and load profiles

Define the load before you run it. A performance result means nothing unless the load that produced it is recorded exactly, so it can be repeated. Build the workload from real usage: the transaction mix, the per-user pacing (think time), and the data the transactions touch. Then set the load levels you will hold at.

### 3.1 Transaction mix

| Transaction | Share of load (%) | Notes (read-heavy, write-heavy, calculation) |
|---|---|---|
| `<<FILL: log in>>` | `<<FILL: 5>>` | `<<FILL>>` |
| `<<FILL: open result-entry form>>` | `<<FILL: 20>>` | `<<FILL>>` |
| `<<FILL: enter and save a result>>` | `<<FILL: 40>>` | `<<FILL: write-heavy, triggers audit trail>>` |
| `<<FILL: run a report / query>>` | `<<FILL: 25>>` | `<<FILL: read-heavy>>` |
| `<<FILL: approve / e-sign>>` | `<<FILL: 10>>` | `<<FILL>>` |

### 3.2 Load levels

| Level | Concurrent users | Throughput target | Think time | Duration held | Purpose |
|---|---|---|---|---|---|
| Expected (normal) | `<<FILL: 25>>` | `<<FILL: 300/hr>>` | `<<FILL: 20 s>>` | `<<FILL: 60 min>>` | Confirm response targets in routine use |
| Peak | `<<FILL: 50>>` | `<<FILL: 600/hr>>` | `<<FILL: 10 s>>` | `<<FILL: 60 min>>` | Confirm targets and stability at the sized maximum |
| Stress (beyond peak) | `<<FILL: ramp to 75+>>` | `<<FILL: ramp up>>` | `<<FILL: 5 s>>` | `<<FILL: until degradation>>` | Find the breaking point and confirm graceful degradation |
| Soak (endurance) | `<<FILL: 25 to 35>>` | `<<FILL: 300/hr>>` | `<<FILL: 20 s>>` | `<<FILL: 8 to 24 hr>>` | Confirm no memory leak, no drift, no slow build-up |

### 3.3 Data volume at execution

| Item | Value |
|---|---|
| Database populated to | `<<FILL: rows / years of data representing production at end of life or a stated horizon>>` |
| Largest single record / file size | `<<FILL>>` |
| How the volume was created | `<<FILL: production-like data set, masked production copy, or generated; method and reference>>` |

## 4. Metrics and how each is measured

Name every metric, its unit, and the exact point of measurement, so two people would read the same result the same way. Decide whether you report a mean, a 95th percentile, or a maximum, and apply that consistently. Percentiles, not averages, are what an inspector and a real user care about, because the average hides the slow tail.

| Metric | Unit | Measured at | Statistic reported | Acceptance threshold (from section 1) |
|---|---|---|---|---|
| Response time, key transaction | seconds | `<<FILL: client-observed, end of transaction>>` | `<<FILL: 95th percentile>>` | `<<FILL: <= 3 s>>` |
| Response time, worst transaction | seconds | `<<FILL>>` | `<<FILL: max>>` | `<<FILL: <= 8 s>>` |
| Concurrent active users sustained | count | `<<FILL: load tool active sessions>>` | `<<FILL: held value>>` | `<<FILL: >= 50>>` |
| Throughput | transactions/hour | `<<FILL: completed-transaction count over the held hour>>` | `<<FILL: sustained rate>>` | `<<FILL: >= 600/hr>>` |
| Error rate | % of transactions | `<<FILL: failed or timed-out / total>>` | `<<FILL: over the run>>` | `<<FILL: 0% functional error, <= 0.1% timeouts>>` |
| Server CPU utilization | % | `<<FILL: app and DB servers>>` | `<<FILL: sustained / peak>>` | `<<FILL: <= 80% sustained>>` |
| Server memory utilization | % or GB | `<<FILL: app and DB servers>>` | `<<FILL: peak, and trend over soak>>` | `<<FILL: <= 85%, no upward leak trend>>` |
| Storage / IO | as applicable | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 5. Prerequisites

List everything that must be true before execution starts. If any prerequisite is not met, do not execute; record the gap as a test deviation and stop.

| No. | Prerequisite | Verified (initials / date) |
|---|---|---|
| 5.1 | Parent protocol `<<FILL: ID>>` is approved and effective, and the performance requirements in section 1 are baselined. | `<<FILL>>` |
| 5.2 | OQ functional testing `<<FILL: ref>>` is complete and passed; the system is functionally correct before it is load-tested. | `<<FILL>>` |
| 5.3 | The test environment sizing is documented against production, and any gap is stated and assessed for impact on the result. | `<<FILL>>` |
| 5.4 | The database is populated to the volume stated in section 3.3, verified by row count or report. | `<<FILL>>` |
| 5.5 | The load-generation tool is installed, configured to the workload in section 3, and its own correctness is confirmed (a dry run at minimal load returns expected results). | `<<FILL>>` |
| 5.6 | Server-side monitoring (CPU, memory, storage, key application logs) is enabled and time-synchronized with the load tool, per `<<FILL: ref>>`. | `<<FILL>>` |
| 5.7 | No competing activity (backup, patch, other test) is scheduled on the environment during the run; the run window is reserved. | `<<FILL>>` |
| 5.8 | The tester is trained on this script, the system, and the load tool, training record `<<FILL: ref>>`. | `<<FILL>>` |

## 6. Execution conventions

Read these before executing, then apply them to every step. They are the rules an inspector expects to see followed consistently.

- Record the actual measured values contemporaneously, from the tool's report and the server monitor, into the actual result cell. Do not pre-fill, do not batch at the end.
- "Meets expected result" is not an actual result. Write the number you observed: the 95th-percentile seconds, the sustained users, the throughput, the CPU percent.
- Report the statistic you committed to in section 4 (for example the 95th percentile), not a friendlier average chosen after the fact.
- Functional correctness still counts under load. Sample completed transactions and confirm the data saved is correct and complete; a fast wrong answer is a Fail.
- Capture objective evidence for every step: the load-tool summary report, the response-time distribution, and the server resource graphs, each with a unique reference recorded in the step.
- If a target is missed, that is a Fail, not a tuning opportunity to be quietly applied mid-run. Mark it Fail, record the configuration as tested, and handle any change under section 9 with a retest.
- The expected result (the threshold) must be written before execution and not amended after you have seen the actual one.

## 7. Test steps

Each step gives the action, the precise expected result, the actual result as observed, pass or fail, and the evidence reference. Number steps continuously. Run the levels in order so a clean baseline precedes the harder loads.

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 7.1 | `<<FILL: confirm DB volume and environment state, baseline a single-user transaction>>` | `<<FILL: key transaction completes within target with no load; baseline recorded>>` | `<<FILL: observed>>` | `<<FILL>>` | `<<FILL: RPT-001>>` | `<<FILL>>` |
| 7.2 | `<<FILL: run expected-load profile (section 3.2) for the held duration>>` | `<<FILL: key transaction 95th percentile <= target; error rate 0% functional; CPU <= sustained limit>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: RPT-002>>` | `<<FILL>>` |
| 7.3 | `<<FILL: sample 10 transactions completed during 7.2 and verify saved data is correct and complete>>` | `<<FILL: all sampled records correct, attributable, with audit trail entries intact>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: RPT-003>>` | `<<FILL>>` |
| 7.4 | `<<FILL: run peak-load profile (section 3.2) for the held duration>>` | `<<FILL: concurrent users sustained >= target; throughput >= target; 95th percentile <= target; 0% functional error>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: RPT-004>>` | `<<FILL>>` |
| 7.5 | `<<FILL: capture server resource use during peak (7.4)>>` | `<<FILL: CPU and memory within limits; no errors, no restarts, no queue overflow in logs>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: RPT-005>>` | `<<FILL>>` |
| 7.6 | `<<FILL: sample transactions completed during peak and verify saved data integrity>>` | `<<FILL: all sampled records correct and complete; no truncated, duplicated, or lost records>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: RPT-006>>` | `<<FILL>>` |
| 7.7 | `<<FILL: run stress profile, ramp users beyond peak until degradation appears>>` | `<<FILL: system degrades gracefully (slows, queues, refuses new sessions with a clear message); it does NOT crash, corrupt data, or lose committed records; breaking point recorded>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: RPT-007>>` | `<<FILL>>` |
| 7.8 | `<<FILL: after stress, reduce to expected load and confirm recovery>>` | `<<FILL: system returns to within response targets without manual restart; no orphaned or stuck transactions>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: RPT-008>>` | `<<FILL>>` |
| 7.9 | `<<FILL: run soak profile for the endurance duration>>` | `<<FILL: response time stable end to end; memory shows no upward leak trend; 0% functional error over the full run>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: RPT-009>>` | `<<FILL>>` |

Add or remove rows so every requirement in section 1 is exercised and every load level in section 3.2 you committed to is run. Do not reuse a step number after a revision.

## 8. Acceptance criteria

This script passes only when all of the following are true:

- At expected load, the response-time statistic for every measured transaction is at or below its threshold in section 4, with no functional errors.
- At peak load, the system sustains the required concurrent users and throughput, holds response times at or below threshold, and records no functional error and no data loss, duplication, or truncation in the sampled records.
- Server resource use stays within the stated limits at peak, with headroom that supports the sizing conclusion.
- Under stress, the system degrades gracefully and protects committed data; it does not crash, corrupt, or silently drop records, and it recovers when load returns to normal.
- Over the soak run, there is no upward memory-leak trend, no progressive slowdown, and no accumulating error.
- Every deviation raised during execution is resolved with a documented disposition, and any retest is run on a recorded configuration and traced to the original failure.
- The completed script is reviewed and approved per section 11, by a reviewer who did not execute it.

A script with one or more open Fail steps, or a passing response time obtained only by tuning the system between runs without retesting the whole profile, does not support the conclusion in the parent report.

## 9. Deviations raised during execution

Any step that misses its threshold, any departure from the written workload or steps, and any prerequisite not met is recorded here and managed per the parent protocol and `<<FILL: deviation / test-incident SOP-ID>>`. Cross-reference the deviation number on the failing step.

| Deviation / incident no. | Step | Description (observed vs threshold) | Classification | Disposition (retune and full retest, environment fix, requirement clarification, accept with justification) | Closed (date) |
|---|---|---|---|---|---|
| `<<FILL: TI-2026-022>>` | `<<FILL: 7.x>>` | `<<FILL>>` | `<<FILL: critical / major / minor>>` | `<<FILL>>` | `<<FILL>>` |

A missed performance target is data, not a tester error. The discipline an inspector looks for is that the miss was captured with the actual number and the configuration in force, that any tuning (more memory, an index, a connection-pool change) was made under change control, and that the affected load profile was re-run in full afterward, not patched mid-run with the original numbers left standing.

## 10. Execution summary

| Field | Entry |
|---|---|
| Levels run (expected / peak / stress / soak) | `<<FILL>>` |
| Total steps | `<<FILL>>` |
| Steps passed | `<<FILL>>` |
| Steps failed | `<<FILL>>` |
| Response time at expected load (95th pct) | `<<FILL>>` |
| Concurrent users sustained at peak | `<<FILL>>` |
| Throughput sustained at peak | `<<FILL>>` |
| Peak CPU / memory | `<<FILL>>` |
| Breaking point (stress) | `<<FILL>>` |
| Deviations raised / closed | `<<FILL>>` |
| Requirement(s) verified (from section 1) | `<<FILL>>` |
| Overall result | Pass / Fail (`<<FILL>>`) |

## 11. Sign-off

The tester executes and signs; an independent reviewer who did not execute the test confirms the record is complete, the load profile and environment are representative, the evidence supports each pass, and any deviation is resolved. The reviewer should not be the same person who executed the script.

| Role | Name | Signature | Date |
|---|---|---|---|
| Tester (executed) | `<<FILL>>` | | |
| Reviewer (independent) | `<<FILL>>` | | |
| QA approval | `<<FILL>>` | | |

## 12. References

> 21 CFR Part 11 (electronic records and electronic signatures), where the system is Part 11 in scope.
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment).
> EU GMP Annex 11 (Computerised Systems), sections on validation, capacity, and security.
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> FDA Guidance, Computer Software Assurance for Production and Quality System Software, finalized 24 September 2025 (risk-based scaling of test rigor).
> FDA Guidance, General Principles of Software Validation (2002).
> GAMP 5, A Risk-Based Approach to Compliant GxP Computerized Systems (Second Edition).
> ICH Q9, Quality Risk Management (for the risk basis of test depth and acceptance limits).
> For medical device software: 21 CFR Part 820 (QMSR, effective 2 February 2026, incorporating ISO 13485:2016 by reference) and IEC 62304.

Confirm the current version and clause numbers of each reference before issue.

## 13. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

---

## Filled specimen

The following shows the script executed for an example laboratory information management system (LIMS), verifying response time at expected load, stability and integrity at a 50-user peak, graceful degradation under stress, and no leak over a soak run, against a production-representative data volume. The company, system, tool, and numbers are illustrative; replace them with your own.

**Header (extract)**

| Field | Entry |
|---|---|
| Test script title | Result Entry and Reporting, Performance and Load |
| Test script ID | TS-PQ-051, v1.0 |
| Parent protocol | PQ-CSV-040 |
| System name and ID | LIMS, instance LIMS-PERF-01 (qualified, production-sized) |
| Software version / build | 8.4.2, build 5210 |
| Configuration baseline | CONFIG-LIMS-008 v3.0, frozen |
| Environment representativeness | App and DB servers sized to production spec; storage IO matched; client network shaped to typical site latency; DB populated to 2 years of data (5.2M rows) |
| Load tool | Coordinated load-generation tool v6.1, 50 virtual users |
| Function risk | High |

**Performance requirements traced**

| Requirement ID | Requirement text (the number) | Source | Risk |
|---|---|---|---|
| URS-031 | Save a result and return within 3 s (95th percentile) at expected load. | URS-LIMS v3.0 | High |
| URS-032 | Support 50 concurrent active users with no functional error. | URS-LIMS v3.0 | High |
| URS-033 | Sustain 600 result saves per hour at peak. | URS-LIMS v3.0 | High |
| URS-034 | Hold and query 2 years of data (>= 5,000,000 rows) within the same targets. | URS-LIMS v3.0 | High |

**Load levels run**

| Level | Users | Throughput | Duration | Outcome |
|---|---|---|---|---|
| Expected | 25 | 300/hr | 60 min | 95th pct 2.1 s |
| Peak | 50 | 612/hr | 60 min | 95th pct 2.8 s, 0 errors |
| Stress | ramp to 80 | ramp | to degradation | degraded at ~70 users |
| Soak | 30 | 300/hr | 12 hr | stable, no leak |

**Test steps (executed)**

| Step | Action | Expected result | Actual result | P/F | Evidence | Initials / date |
|---|---|---|---|---|---|---|
| 7.1 | Confirm DB at 5.2M rows; baseline a single-user save. | Save completes <= 3 s with no load. | DB row count 5,204,118 confirmed; single-user save 1.3 s. | Pass | RPT-001 | AP 12 Jun 2026 |
| 7.2 | Run expected load, 25 users, 60 min. | Save 95th pct <= 3 s; 0% functional error; CPU <= 80%. | Save 95th pct 2.1 s; 0 functional errors; app CPU peaked 61%. | Pass | RPT-002 | AP 12 Jun 2026 |
| 7.3 | Sample 10 saves from 7.2, verify data. | All correct, attributable, audit entries intact. | All 10 records correct; audit trail entry present for each. | Pass | RPT-003 | AP 12 Jun 2026 |
| 7.4 | Run peak load, 50 users, 60 min. | >= 50 users sustained; >= 600/hr; 95th pct <= 3 s; 0% error. | 50 users held; throughput 612/hr; save 95th pct 2.8 s; 0 functional errors; 1 timeout (0.03%). | Pass | RPT-004 | AP 12 Jun 2026 |
| 7.5 | Capture server resource use at peak. | CPU and memory within limits; no errors/restarts in logs. | App CPU peaked 78%, DB CPU 71%, memory steady at 68%; no restarts; no queue overflow logged. | Pass | RPT-005 | AP 12 Jun 2026 |
| 7.6 | Sample peak transactions, verify integrity. | No truncated, duplicated, or lost records. | 15 sampled records correct and complete; row count matched submitted count exactly. | Pass | RPT-006 | AP 12 Jun 2026 |
| 7.7 | Stress, ramp to 80 users. | Graceful degradation; no crash, no corruption, breaking point recorded. | At ~70 users response times climbed and new sessions were refused with "Server busy, retry shortly"; no crash; committed records intact. Breaking point ~70 concurrent. | Pass | RPT-007 | AP 12 Jun 2026 |
| 7.8 | Reduce to expected load, confirm recovery. | Returns to targets without restart; no stuck transactions. | Within 4 min response returned to 2.2 s 95th pct; no manual restart; no orphaned transactions. | Pass | RPT-008 | AP 12 Jun 2026 |
| 7.9 | Soak, 30 users, 12 hr. | Stable response; no memory leak; 0% functional error. | Save 95th pct 2.0 to 2.4 s across 12 hr; memory flat at 66 to 69%; 0 functional errors. | Pass | RPT-009 | AP 13 Jun 2026 |

**Execution summary**

| Field | Entry |
|---|---|
| Levels run | Expected, peak, stress, soak |
| Total steps | 9 |
| Steps passed | 9 |
| Steps failed | 0 |
| Response time at expected load (95th pct) | 2.1 s |
| Concurrent users sustained at peak | 50 (degraded near 70) |
| Throughput sustained at peak | 612 saves/hr |
| Peak CPU / memory | app CPU 78%, memory 68% |
| Breaking point | ~70 concurrent users, graceful |
| Deviations raised / closed | 0 / 0 |
| Requirement(s) verified | URS-031, URS-032, URS-033, URS-034 |
| Overall result | Pass |

**Sign-off**

| Role | Name | Date |
|---|---|---|
| Tester (executed) | A. Patel, signed | 13 Jun 2026 |
| Reviewer (independent) | R. Gomez, signed | 14 Jun 2026 |
| QA approval | S. Lin, signed | 14 Jun 2026 |

In this example the tester populated the database to a realistic two-year volume before testing, reported the 95th percentile rather than the average, sampled real transactions under load to confirm data integrity (not just speed), pushed past peak to find and document the breaking point, and confirmed the system recovered and held steady over a 12-hour soak. A reviewer who did not run the test confirmed the environment was representative and the evidence supported each pass. Had step 7.4 returned a 95th-percentile save of 5.5 s, the tester would have marked it Fail, recorded the configuration in force, opened a test incident, and any retune (an added index, a larger connection pool) would have been made under change control with the entire peak profile re-run, which is the behavior section 9 is built to capture.

## Common inspection findings this script prevents

- A performance requirement stated only as "the system shall be responsive", with no number, so the test has no real acceptance criterion.
- Load testing run against an empty or near-empty database, so the response times bear no relation to a full production system after two years of records.
- Average response time reported as a pass while the 95th-percentile or maximum, the number real users feel, was never measured or quietly hid a slow tail.
- Speed measured but data integrity under load never checked, so duplicated, truncated, or lost records during concurrent saves go undetected.
- The test environment far smaller than production, with the sizing gap neither documented nor assessed, so the result does not support the production sizing conclusion.
- No stress test, so the system's behavior at and beyond its limit (graceful queueing versus a crash that loses committed data) is unknown.
- A response target met only by tuning the system between runs, with the favorable number kept and the full load profile never re-run on the changed configuration under change control.
- No soak or endurance run, so a memory leak or slow degradation that only appears after hours of real use is never caught.
- The load-generation tool itself never confirmed correct, so an artificially low load produced artificially good numbers.
- The same person executing and reviewing, with no independent check that the load profile and environment were representative of production.

## How to adapt this script

1. Set your test script ID, parent protocol, software version, and configuration baseline in the header, and document how the test environment matches production sizing, with any gap stated and assessed.
2. Confirm the performance requirements in section 1 carry real numbers (response time with a percentile, concurrent users, throughput, data volume). If the URS or FS only says "fast", fix the requirement under change control before you test.
3. Build the workload model in section 3 from real usage: the transaction mix, the think times, and the load levels you will hold at, and populate the database to a production-representative volume first.
4. Decide in section 4 whether each metric is a mean, a 95th percentile, or a maximum, and report that statistic consistently; prefer percentiles over averages for anything users feel.
5. Run expected, peak, stress, and soak in order, sample real transactions under load to confirm data integrity, and capture the load-tool report and server resource graphs as evidence for every step.
6. Point the cross-references in sections 5, 9, and 11 to your real OQ or PQ protocol, deviation or test-incident procedure, and review and approval process.
7. Confirm every regulation in section 12 against the current published version before issue.
