---
title: "Test Script: Disaster Recovery / Failover"
description: "A plug-and-play DR and failover test script that invokes failover, verifies recovered system function and data integrity, measures RTO and RPO against committed targets, and proves failback, with numbered step, expected, actual, pass or fail, and evidence columns, a worked filled specimen, and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Template"
pillar: "csv-csa"
relatedArticles: ["backup-restore-disaster-recovery-validation", "writing-validation-protocols-and-reports"]
tags: ["disaster recovery", "failover", "rto", "rpo", "business continuity", "test script", "csv", "annex 11"]
tier: "Advanced"
---

This is a ready-to-use disaster recovery and failover test script. A documented DR plan you have never exercised is a hope, not a control. This script proves three things you can show an inspector: that failover to your recovery site or standby actually works when invoked, that the recovered system functions correctly and its GxP data is complete and unaltered, and that the time to recover and the data you would lose stay inside the recovery time and recovery point objectives you committed to. It also proves you can fail back cleanly. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and execute it under an approved DR test plan or strategy. A worked filled specimen follows the template so you can see how a completed version reads. A test script is contemporaneous GxP evidence: write each actual result as you observe it, in ink or in the validated tool, with the real clock time, never reconstructed afterward. Verify each cited regulation against the current source before you rely on it.

## What this script is, and where it sits

A backup restoration test proves you can read data back from a backup. A DR failover test proves something larger: that the whole service, the application, its data, its dependencies, its access paths, can be brought up at the recovery site or on the standby and used to do GxP work, inside the time you promised, with no more data lost than you promised, and then returned to the primary site. This script is the execution-level evidence for that. It sits below the DR plan, which names the systems, the recovery objectives, and the recovery sequence, and below the DR test strategy, which schedules and scopes the exercise. It produces the timestamped, step-by-step record that the DR test report rolls up.

Scope this script to one DR scenario and one system or tightly grouped service set per execution, so each result is traceable to a single, clear recovery objective. Common scenarios are a planned failover (graceful), an unplanned failover (simulated loss of primary with no graceful shutdown), and a tabletop or partial test for systems too disruptive to fail over live. Decide the scenario and the recovery sequence first, in the plan, then write the script. The rigor of verification should match the criticality of the system: a system that holds release-decision or patient-safety data earns the full functional and integrity verification below, while a lower-criticality system may justify a lighter functional check, documented as such.

## Document control header

| Field | Entry |
|---|---|
| Test script title | `<<FILL: scenario-specific title, e.g. Unplanned Failover of LIMS to Recovery Site, with Failback>>` |
| Test script ID | `<<FILL: TS-ID, e.g. TS-DR-018>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Parent DR plan / test strategy | `<<FILL: DR plan or DR test strategy ID this script runs under>>` |
| System / service in scope | `<<FILL: system name, ID, and the dependencies in scope>>` |
| Recovery architecture | `<<FILL: e.g. active-passive standby, replicated cloud region, hot/warm/cold site, vendor SaaS DR>>` |
| DR scenario tested | `<<FILL: planned failover / unplanned (simulated loss) / partial / tabletop>>` |
| Committed RTO | `<<FILL: e.g. 8 hours, from the plan>>` |
| Committed RPO | `<<FILL: e.g. 1 hour, from the plan>>` |
| Test environment / sites | `<<FILL: primary site, recovery site, networks; isolation from real production stated>>` |
| Author | `<<FILL: name, role>>` |
| Effective date | `<<FILL: date>>` |

## 1. Objective and requirement traced

State what passing this script demonstrates and the plan requirement it traces to, so the DR test report can link the recovery objective to the evidence in both directions.

| Objective | Requirement / plan reference | Recovery objective | Risk / criticality |
|---|---|---|---|
| `<<FILL: e.g. invoke failover to the recovery site, run the system for GxP-representative work, verify data integrity, measure RTO and RPO, and fail back>>` | `<<FILL: DR-PLAN-ID section, BCP-ID, or URS continuity requirement>>` | `<<FILL: RTO and RPO targets being verified>>` | `<<FILL: High / Medium / Low>>` |

Example objective: this script verifies that, on a simulated loss of the primary, the system can be failed over to the recovery site, that an authorized user can log in and perform a representative GxP transaction, that the recovered data is complete and unaltered up to the replication point, that the measured recovery time and data loss window meet the committed RTO and RPO, and that the system can be returned to the primary site without data loss.

`<<FILL: objective>>`

## 2. Definitions

- **Failover**: switching live processing from the primary system or site to the standby or recovery site.
- **Failback**: returning processing from the recovery site to the primary after the test or after the primary is restored, including reconciling any data written while on the recovery site.
- **Recovery time objective (RTO)**: the maximum acceptable time from the loss event (or the decision to invoke DR) to the system being usable for GxP work. This script measures actual recovery time against it.
- **Recovery point objective (RPO)**: the maximum acceptable amount of data, measured in time, the organization is willing to lose in a recovery. This script measures the actual data loss window against it.
- **Recovery site / standby**: the segregated infrastructure (hot, warm, or cold site, replicated region, or vendor DR instance) that takes over on failover.
- **Replication lag**: the delay between a change committed on primary and that change being present on the standby; it sets the achievable RPO.
- **Split brain**: the failure state where both primary and recovery believe they are live and accept writes, producing two divergent data sets. Preventing and detecting it is a required check.

## 3. Prerequisites

List everything that must be true before execution starts. If any prerequisite is not met, do not execute; record the gap as a test deviation and stop. A DR test launched on wrong assumptions can damage live data.

| No. | Prerequisite | Verified (initials / date) |
|---|---|---|
| 3.1 | Parent DR plan / test strategy `<<FILL: ID>>` is approved and effective, and this test is scheduled under it. | `<<FILL>>` |
| 3.2 | The committed RTO and RPO for this system are confirmed and recorded in the header. | `<<FILL>>` |
| 3.3 | Recovery architecture is in place and the standby or recovery site is healthy before the test (replication current, last sync timestamp known). | `<<FILL>>` |
| 3.4 | A backup taken immediately before the test exists and is verified, so a real failure during the test is itself recoverable. | `<<FILL>>` |
| 3.5 | Test accounts exist at the recovery site with the roles needed to perform the representative GxP transaction. | `<<FILL>>` |
| 3.6 | Known pre-failover reference values captured on primary: key record counts, last-committed transaction timestamp, and hashes of a sample of critical records (see section 6.1). | `<<FILL>>` |
| 3.7 | Communication, rollback, and abort criteria are defined and the team knows when to stop the test and revert. | `<<FILL>>` |
| 3.8 | Stakeholders and any affected users notified of the maintenance or test window, and clocks across sites are synchronized to a common time source. | `<<FILL>>` |
| 3.9 | The tester is trained on this script, the system, and the DR runbook, training record `<<FILL: ref>>`. | `<<FILL>>` |

## 4. Roles at execution

| Role | Responsibility at execution |
|---|---|
| Test lead / DR coordinator | Declares the scenario, authorizes failover and failback, owns the abort decision, and keeps the master clock. |
| IT / infrastructure (failover operator) | Executes the failover and failback per the runbook and records system-level timings. |
| Data owner / process SME | Performs the representative GxP transaction and verifies recovered data completeness and integrity. |
| System owner | Confirms the recovered system is fit for the test and the RTO/RPO outcome is acceptable. |
| Quality Assurance | Reviews execution against the script, owns deviations, and approves the result. |

## 5. Execution conventions

Read these before executing, then apply them to every step.

- Record each actual result contemporaneously, with the real clock time from the synchronized source. RTO and RPO are time measurements; an estimated or backfilled timestamp invalidates them.
- "Meets expected result" is not an actual result. Write what you actually saw: the value, the message, the screen state, the timestamp.
- Use one unambiguous mark for pass or fail. A blank cell is incomplete, not a pass.
- For any single-line correction, strike through once, initial, date, and add a brief reason. Never obliterate the original entry.
- Capture objective evidence (screenshots, failover logs, replication-status reports, query output) for every step whose pass depends on a system output, and record a unique evidence reference in the step.
- Honor the abort criteria. If the test risks live data or runs past its window, abort per the runbook, fail back, and record it as a deviation rather than forcing the test.
- Where the scenario is "unplanned", simulate the loss as defined (pull the network path, power down the primary node, or use the platform's force-failover) rather than a graceful shutdown, because graceful and ungraceful failover behave differently and only the ungraceful path proves the real case.

## 6. Pre-failover baseline (capture on the primary)

Capture and record the known-good state of the primary before you invoke failover. Without this, completeness and RPO cannot be measured after recovery.

| Baseline item | Value captured | Captured at (time) | Evidence ref |
|---|---|---|---|
| Key record / row counts (named tables or objects) | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Last-committed transaction ID / timestamp on primary | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Hashes of sample critical records (SHA-256) | `<<FILL: record IDs and hashes>>` | `<<FILL>>` | `<<FILL>>` |
| Replication / standby last-sync timestamp | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Audit trail latest entry on primary | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 7. Test steps

Each step gives the action, the precise expected result, the actual result as observed with its clock time, pass or fail, and the evidence reference. Number steps continuously. Steps 7.1 to 7.4 invoke failover and start the RTO clock; 7.5 to 7.10 verify recovered function and data integrity; 7.11 to 7.12 measure RPO; 7.13 to 7.16 fail back and reconcile.

| Step | Action | Expected result | Actual result (with time) | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 7.1 | `<<FILL: declare the DR scenario and record the loss-event time; start the RTO clock>>` | `<<FILL: scenario declared; loss-event time recorded as the RTO start>>` | `<<FILL: observed, with time>>` | `<<FILL>>` | `<<FILL: LOG-001>>` | `<<FILL>>` |
| 7.2 | `<<FILL: simulate loss of primary per the scenario (force-failover / network isolation / node power-off); confirm primary is unreachable for processing>>` | `<<FILL: primary no longer serving; no split-brain, primary fenced from accepting writes>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: LOG-002>>` | `<<FILL>>` |
| 7.3 | `<<FILL: invoke failover to the recovery site per the DR runbook>>` | `<<FILL: failover initiates per runbook; standby promotes to active>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: LOG-003>>` | `<<FILL>>` |
| 7.4 | `<<FILL: bring the application up on the recovery site and reach a usable, logged-in state; stop the RTO clock>>` | `<<FILL: system usable at recovery site; RTO clock stopped; recovery time recorded>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-004>>` | `<<FILL>>` |
| 7.5 | `<<FILL: log in as the authorized recovery-site account>>` | `<<FILL: login succeeds; correct user, roles, and access shown; access controls enforced at recovery site>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-005>>` | `<<FILL>>` |
| 7.6 | `<<FILL: confirm required dependencies and interfaces are available or correctly stubbed (database, authentication, key integrations)>>` | `<<FILL: dependencies up or test-stubbed per plan; no uncontrolled connection back to live production>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-006>>` | `<<FILL>>` |
| 7.7 | `<<FILL: perform a representative GxP read: open a sample of critical records (a batch record, a result, a report)>>` | `<<FILL: records open; values correct and unchanged versus the pre-failover baseline>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-007>>` | `<<FILL>>` |
| 7.8 | `<<FILL: perform a representative GxP write: create or update one record on the recovery site>>` | `<<FILL: write succeeds; record saved with unique ID, entering user, and recovery-site timestamp; mandatory fields enforced>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-008>>` | `<<FILL>>` |
| 7.9 | `<<FILL: verify data completeness: compare key record counts and date coverage on the recovery site to the pre-failover baseline>>` | `<<FILL: counts match the baseline up to the replication point; any difference within the RPO window and explained; coverage spans the required range>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: RPT-009>>` | `<<FILL>>` |
| 7.10 | `<<FILL: verify data integrity: compare SHA-256 hashes of the sample critical records to baseline; confirm audit trail continuity and that electronic signatures are intact>>` | `<<FILL: hashes match; audit trail present, continuous, no gaps; signatures retain signer, meaning, and date per 21 CFR Part 11>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: RPT-010>>` | `<<FILL>>` |
| 7.11 | `<<FILL: identify the timestamp of the last transaction present on the recovery site (the recovery point)>>` | `<<FILL: recovery-point timestamp identified and recorded>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: RPT-011>>` | `<<FILL>>` |
| 7.12 | `<<FILL: compute the data loss window = last-committed-on-primary minus recovery point; compare to committed RPO>>` | `<<FILL: data loss window computed; at or within the committed RPO>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: RPT-012>>` | `<<FILL>>` |
| 7.13 | `<<FILL: confirm any records written during the test (step 7.8) are captured for reconciliation back to primary>>` | `<<FILL: recovery-site writes identified and queued for reconciliation; none will be silently lost on failback>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: LOG-013>>` | `<<FILL>>` |
| 7.14 | `<<FILL: invoke failback to the primary per the runbook; re-establish replication primary-to-standby>>` | `<<FILL: failback completes; primary active again; replication re-established and healthy>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: LOG-014>>` | `<<FILL>>` |
| 7.15 | `<<FILL: reconcile the recovery-site writes onto the primary and confirm no divergence (no split-brain residue)>>` | `<<FILL: all recovery-site writes present on primary; one consistent data set; no duplicate or lost records>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: RPT-015>>` | `<<FILL>>` |
| 7.16 | `<<FILL: confirm the system on primary is usable for GxP work and the audit trail spans the whole failover-failback window>>` | `<<FILL: primary usable; audit trail continuous across the test; final record counts reconcile>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-016>>` | `<<FILL>>` |

Add or remove rows so the recovery sequence in your plan is covered. For a tabletop or partial test, mark the steps that were walked through rather than physically executed, and state that limitation clearly in section 9. Do not reuse a step number after a revision.

## 8. RTO and RPO measurement

Record the measured outcomes once, from the steps above, so the report and the plan can be compared directly.

| Measure | Source | Result |
|---|---|---|
| RTO start (loss event / DR declared) | Step 7.1 | `<<FILL: time>>` |
| RTO stop (system usable at recovery site) | Step 7.4 | `<<FILL: time>>` |
| Measured recovery time | 7.4 minus 7.1 | `<<FILL>>` |
| Committed RTO | Header / plan | `<<FILL>>` |
| Recovery time within RTO? | Comparison | Yes / No (if No, raise deviation) |
| Last committed on primary | Step 6 baseline | `<<FILL: time>>` |
| Recovery point (last on standby) | Step 7.11 | `<<FILL: time>>` |
| Computed data loss window | 7.12 | `<<FILL>>` |
| Committed RPO | Header / plan | `<<FILL>>` |
| Data loss window within RPO? | Comparison | Yes / No (if No, raise deviation) |

If the measured recovery time exceeds the RTO, or the data loss window exceeds the RPO, that is a deviation and a real gap in the continuity control, not a footnote. It usually means the recovery sequence must be streamlined or replication frequency tightened, and the plan's committed objectives revisited.

## 9. Acceptance criteria

This script passes only when all of the following are true:

- Failover was invoked per the scenario and the system reached a usable state at the recovery site, with no split-brain.
- An authorized user could log in with correct access controls and perform the representative GxP read and write at the recovery site.
- Recovered data was complete (counts and coverage matched the baseline to the replication point) and unaltered (hashes matched, audit trail continuous, signatures intact).
- Measured recovery time was at or within the committed RTO.
- Computed data loss window was at or within the committed RPO.
- Failback completed, recovery-site writes were reconciled onto the primary with no divergence, and the audit trail spans the whole window.
- Every deviation raised during execution is resolved with a documented disposition, and any retest is recorded.
- The completed script is reviewed and approved per section 12, by a reviewer who did not execute it.

A script with one or more open Fail steps, an RTO or RPO breach not dispositioned, or unresolved deviations does not pass and cannot support the conclusion in the DR test report. For a tabletop or partial test, the result is qualified explicitly to the steps actually executed.

## 10. Deviations raised during execution

Any step that does not meet its expected result, any RTO or RPO breach, any departure from the runbook, any aborted test, and any prerequisite not met is recorded here and managed per the parent plan and `<<FILL: deviation / test-incident SOP-ID>>`. Cross-reference the deviation number on the failing step.

| Deviation / incident no. | Step | Description (observed vs expected) | Classification | Disposition (retest, fix and re-test, accept with justification, plan/objective revision) | Closed (date) |
|---|---|---|---|---|---|
| `<<FILL: TI-2026-021>>` | `<<FILL: 7.x>>` | `<<FILL>>` | `<<FILL: critical / major / minor>>` | `<<FILL>>` | `<<FILL>>` |

A failed failover or a missed RTO is data, not a finding against the team. An inspector looks for the failure to be captured honestly, classified, dispositioned, and any retest traceable to the original failure. Where the failure shows the architecture or the committed objective is wrong, the plan and the RTO/RPO are corrected under change control and the deviation references that change.

## 11. Execution summary

| Field | Entry |
|---|---|
| DR scenario tested | `<<FILL: planned / unplanned / partial / tabletop>>` |
| Total steps | `<<FILL>>` |
| Steps passed | `<<FILL>>` |
| Steps failed | `<<FILL>>` |
| Measured RTO vs committed | `<<FILL>>` vs `<<FILL>>` |
| Measured data loss vs committed RPO | `<<FILL>>` vs `<<FILL>>` |
| Failback completed and reconciled | Yes / No |
| Deviations raised / closed | `<<FILL>>` |
| Overall result | Pass / Fail (`<<FILL>>`) |

## 12. Sign-off

The test lead and operator execute and sign; an independent reviewer who did not execute the test confirms the record is complete, the evidence supports each pass, the timings are real, and any deviation is resolved.

| Role | Name | Signature | Date |
|---|---|---|---|
| Test lead / DR coordinator (executed) | `<<FILL>>` | | |
| Failover operator (executed) | `<<FILL>>` | | |
| Reviewer (independent) | `<<FILL>>` | | |
| QA approval | `<<FILL>>` | | |

## 13. References

> 21 CFR Part 11 (electronic records and electronic signatures), 11.10(c) protection of records and 11.10(b) accurate and complete retrieval throughout the retention period.
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment, including backup of data) for drug GMP.
> EU GMP Annex 11 (Computerised Systems), section 16 (business continuity) and section 7 (data storage and backup).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> MHRA GxP Data Integrity Guidance and Definitions (backup, restore, archiving, and business continuity).
> PIC/S PI 041, Good Practices for Data Management and Integrity.
> ICH Q9, Quality Risk Management (for the risk basis of test scope and depth).
> ISO 22301 (Business Continuity Management Systems) and ISO/IEC 27031 (ICT readiness for business continuity), as design references.
> GAMP 5 (Second Edition), business continuity and disaster recovery for computerized systems.
> For medical device software: 21 CFR Part 820 (QMSR, effective 2 February 2026, incorporating ISO 13485:2016 by reference) and IEC 62304.

Confirm the current version and clause numbers of each reference before issue.

## 14. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

---

## Filled specimen

The following shows the script executed for an example laboratory information management system on an active-passive standby with cross-region replication, running an unplanned (simulated loss) failover and a failback. The company, system, accounts, and numbers are illustrative; replace them with your own.

**Header (extract)**

| Field | Entry |
|---|---|
| Test script title | Unplanned Failover of LIMS to Recovery Region, with Failback |
| Test script ID | TS-DR-018, v1.0 |
| Parent DR plan / test strategy | DR-PLAN-LIMS-04 / DRTS-2026 |
| System / service in scope | LIMS (LIMS-PROD-01), with its database, authentication, and the instrument-file store |
| Recovery architecture | Active-passive, asynchronous database replication primary region to standby region; warm standby |
| DR scenario tested | Unplanned (simulated loss via platform force-failover) |
| Committed RTO | 8 hours |
| Committed RPO | 1 hour |

**Pre-failover baseline (captured on primary)**

| Baseline item | Value captured | Captured at |
|---|---|---|
| Result row count | 2,431,889 | 14 Jun 2026 08:55 |
| Last-committed transaction timestamp on primary | 14 Jun 2026 09:00:12 | 14 Jun 2026 09:00 |
| Sample hashes (SHA-256) | 25 result records, hashes recorded in EV-HASH-018 | 14 Jun 2026 08:58 |
| Standby last-sync timestamp | 14 Jun 2026 08:59:40 (replication lag ~32s) | 14 Jun 2026 09:00 |

**Test steps (executed, extract)**

| Step | Action | Expected result | Actual result (with time) | P/F | Evidence | Initials / date |
|---|---|---|---|---|---|---|
| 7.1 | Declare scenario, record loss-event time; start RTO clock. | Scenario declared; RTO start recorded. | Unplanned scenario declared; RTO clock started 09:02:00. | Pass | LOG-001 | JO 14 Jun 2026 |
| 7.2 | Force-failover; fence primary from writes. | Primary fenced, no split-brain. | Primary region isolated; write fence confirmed, primary read-only. | Pass | LOG-002 | JO 14 Jun 2026 |
| 7.3 | Invoke failover; promote standby. | Standby promotes to active. | Standby promoted to active at 09:18. | Pass | LOG-003 | JO 14 Jun 2026 |
| 7.4 | Bring app up at recovery region; stop RTO clock. | Usable, logged-in state; RTO recorded. | Usable state reached 11:36; RTO clock stopped. Recovery time 2h34m. | Pass | SCR-004 | JO 14 Jun 2026 |
| 7.5 | Log in as analyst1 at recovery region. | Login, correct roles, access enforced. | Login succeeded; analyst role and access controls enforced. | Pass | SCR-005 | SL 14 Jun 2026 |
| 7.7 | Open sample critical records. | Values match baseline. | 25 records opened; values matched baseline. | Pass | SCR-007 | SL 14 Jun 2026 |
| 7.8 | Create one result record at recovery region. | Saves with ID, user, timestamp. | Saved as R-2026-7781; analyst1, 14 Jun 12:05 captured. | Pass | SCR-008 | SL 14 Jun 2026 |
| 7.9 | Compare counts and coverage to baseline. | Counts match to replication point. | 2,431,884 rows present; 5-row gap matches the ~32s replication lag, within RPO. | Pass | RPT-009 | SL 14 Jun 2026 |
| 7.10 | Compare hashes; check audit trail and signatures. | Hashes match; trail continuous; signatures intact. | All 25 hashes matched; audit trail continuous; 8 signed COAs retained signer, meaning, date. | Pass | RPT-010 | SL 14 Jun 2026 |
| 7.11 | Identify recovery point. | Recovery point recorded. | Last transaction on standby 14 Jun 08:59:40. | Pass | RPT-011 | JO 14 Jun 2026 |
| 7.12 | Compute data loss window vs RPO. | Within 1h RPO. | 09:00:12 minus 08:59:40 = 32s loss window, within 1h RPO. | Pass | RPT-012 | JO 14 Jun 2026 |
| 7.14 | Invoke failback; re-establish replication. | Primary active; replication healthy. | Failback completed 14:50; replication primary-to-standby re-established. | Pass | LOG-014 | JO 14 Jun 2026 |
| 7.15 | Reconcile recovery-site write R-2026-7781. | Present on primary, no divergence. | R-2026-7781 reconciled to primary; one consistent data set, no duplicates. | Pass | RPT-015 | SL 14 Jun 2026 |

**RTO and RPO measurement**

| Measure | Result |
|---|---|
| Measured recovery time | 2h34m (RTO start 09:02, usable 11:36) |
| Committed RTO | 8 hours, met |
| Computed data loss window | 32 seconds |
| Committed RPO | 1 hour, met |

**Execution summary**

| Field | Entry |
|---|---|
| DR scenario tested | Unplanned (simulated loss) |
| Total steps | 16 |
| Steps passed | 15 |
| Steps failed | 1 |
| Measured RTO vs committed | 2h34m vs 8h (met) |
| Measured data loss vs committed RPO | 32s vs 1h (met) |
| Failback completed and reconciled | Yes |
| Deviations raised / closed | 1 / 1 |
| Overall result | Pass |

**Deviation (one raised)**

| Deviation no. | Step | Description | Classification | Disposition | Closed |
|---|---|---|---|---|---|
| TI-2026-021 | 7.6 | One outbound interface (to the ELN) auto-reconnected to the live production endpoint instead of the test stub during the recovery-site bring-up. | Major | Interface failover config corrected to point at the stub on DR bring-up; step 7.6 re-executed and passed; no live data was written. | 16 Jun 2026 |

**Sign-off**

| Role | Name | Date |
|---|---|---|
| Test lead / DR coordinator (executed) | J. Okafor, signed | 16 Jun 2026 |
| Failover operator (executed) | M. Reyes, signed | 16 Jun 2026 |
| Reviewer (independent) | R. Gomez, signed | 17 Jun 2026 |
| QA approval | S. Lin, signed | 17 Jun 2026 |

In this example the team simulated a real loss rather than a graceful shutdown, fenced the primary to avoid split-brain, measured an actual recovery time of 2h34m against an 8 hour RTO and a 32 second data loss window against a 1 hour RPO, and proved the recovered data matched the primary by counts, hashes, audit trail, and signatures. They caught a quiet failover config flaw (an interface reconnecting to live production), raised it, fixed it, re-executed the step, and then failed back and reconciled the one record written during the test so nothing was lost or duplicated. That sequence, declare to failover to verify to RTO/RPO to deviation to fix to failback to reconcile, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this script prevents

- A DR plan exists on paper but no failover has ever been executed, so recoverability is unproven.
- Only a graceful, planned failover was ever tested, never an ungraceful loss, so the real disaster case is unverified.
- Failover "tested" by confirming the standby came up, with no check that the recovered data is complete and unaltered and no representative GxP transaction performed.
- RTO and RPO stated in the plan but never measured against an actual failover, so the committed objectives are unsubstantiated.
- Recovery time measured but data loss never computed, or counts checked without hashes, so silent corruption or a too-large loss window passes unnoticed.
- The recovered audit trail or electronic signatures were not verified to survive failover, leaving a Part 11 gap after recovery.
- Split-brain not prevented or detected, with both sites accepting writes, or failback performed without reconciling records written on the recovery site, so data is lost or duplicated.
- An interface at the recovery site silently connected back to live production during the test, putting real records at risk.
- The same person executed and reviewed the test, with no independent check that the timings and evidence support the conclusion.
- A breached RTO or RPO recorded with no deviation and no plan revision, so a known continuity gap is left unmanaged.

## How to adapt this script

1. Set your test script ID, parent DR plan or test strategy, recovery architecture, and the committed RTO and RPO in the header, and confirm a verified pre-test backup exists so a real failure during the test is itself recoverable.
2. Choose one DR scenario per execution (planned, unplanned, partial, or tabletop) and keep the verification depth matched to the system's criticality; reserve the full functional and integrity verification for higher-criticality systems.
3. Capture your real pre-failover baseline in section 6: the counts, last-committed timestamp, and hashes you will measure recovery against.
4. Rewrite the steps in section 7 to follow your actual recovery sequence and your runbook, including the dependencies and interfaces specific to your system, and confirm you simulate an ungraceful loss where the scenario calls for it.
5. Record RTO and RPO with real clock times from a synchronized source, and if either is breached, raise a deviation and feed the result back into the plan's committed objectives.
6. Point the cross-references in sections 3, 10, and 12 to your real DR plan, deviation or test-incident procedure, and review and approval process.
7. Confirm every regulation in section 13 against the current published version before issue.
