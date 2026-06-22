---
title: "Disaster Recovery Test Strategy"
description: "A plug-and-play strategy for testing disaster recovery of GxP systems: test types, frequency by risk, scope, RTO and RPO success criteria, data integrity checks, roles, scheduling, and evidence, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Plan"
pillar: "csv-csa"
relatedArticles: ["backup-restore-disaster-recovery-validation", "it-change-and-configuration-management-gxp"]
tags: ["disaster recovery", "business continuity", "rto", "rpo", "backup", "csv", "data integrity"]
tier: "Intermediate"
---

This is a ready-to-use disaster recovery (DR) test strategy. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your system inventory and recovery runbooks, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Disaster Recovery Test Strategy for `<<FILL: scope, e.g. GxP IT systems>>` |
| Document number | `<<FILL: PLN-ID, e.g. DR-IT-005>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of IT Quality / IT Service Continuity Manager>>` |
| Applies to | `<<FILL: sites / systems / hosting models in scope>>` |
| Linked documents | `<<FILL: BC/DR plan, backup SOP, system inventory, individual recovery runbooks>>` |

## 1. Purpose

This strategy defines how `<<FILL: COMPANY NAME>>` tests the recovery of GxP computerized systems after a disruptive event, so that the organization can show, with evidence, that critical systems and their data can be restored within agreed time and data-loss targets. The objective is to confirm three things on a planned cadence: the recovery procedures actually work, the recovered data is complete and accurate, and the recovery happens fast enough to protect patients, product, and records.

A DR plan that has never been tested is an untested assumption. This strategy turns that assumption into proven, repeatable evidence.

## 2. Scope

This strategy applies to the GxP systems listed in the DR system inventory referenced in the header, across `<<FILL: on-premise, hosted, and SaaS hosting models>>`. It covers test types, how often each system is tested, how a test is scoped so it does not endanger production, the success criteria a test must meet, the roles involved, scheduling, and the evidence retained.

It does not define the recovery procedures themselves, which live in each system's recovery runbook, and it does not cover the wider crisis-management or business-continuity response for people, facilities, and supply, which are governed by `<<FILL: cross-reference to BCP / crisis-management procedure>>`. It complements, and does not replace, the backup and restore procedure `<<FILL: backup SOP-ID>>` and periodic review `<<FILL: periodic review SOP-ID>>`.

## 3. Definitions

- **Disaster recovery (DR)**: the people, procedures, and infrastructure used to restore a system and its data to a working state after a disruptive event.
- **RTO (recovery time objective)**: the maximum acceptable time from declared outage to the system being usable again. A target, set by business and quality impact.
- **RPO (recovery point objective)**: the maximum acceptable amount of data loss, expressed as a time window (for example "no more than 15 minutes of data"). It is governed by backup or replication frequency.
- **MTD (maximum tolerable downtime)**: the absolute outage limit beyond which the harm to patients, product, or compliance is unacceptable. RTO must sit below MTD.
- **Tabletop test**: a discussion-based walkthrough of the DR plan with no systems touched, used to check the plan reads correctly and people know their part.
- **Walkthrough (component) test**: a hands-on test of one or more recovery steps (for example a single restore from backup) in a controlled, non-production environment.
- **Simulation (parallel) test**: recovery of a system into an isolated standby or recovery environment running in parallel, without cutting over production.
- **Full failover test**: actual cutover of the live workload to the recovery site or infrastructure, then a controlled failback, the highest-assurance and highest-risk test.
- **Recovery runbook**: the step-by-step procedure to recover a specific system.

## 4. Roles and responsibilities

| Role | Responsibility |
|---|---|
| DR test coordinator / IT service continuity | Owns this strategy, builds the annual test schedule, scopes each test, runs the test, and compiles the test report. |
| System owner | Confirms the system's RTO, RPO, and criticality; approves the test scope and timing; confirms the recovered system is fit to use. |
| Process owner / business SME | Defines what "usable" means for the system and performs the post-recovery functional and data-integrity verification. |
| IT infrastructure / backup administrator | Provides the backups or replicas, the recovery environment, and executes the technical recovery steps. |
| QA / IT Quality | Approves the strategy and each test scope, reviews findings, routes failures to CAPA, and confirms tests happen on schedule. |
| Supplier / hosting provider (if hosted or SaaS) | Performs or evidences the recovery covered by the service agreement; provides their own DR test results where you do not control the infrastructure. |

## 5. Strategy

### 5.1 Set RTO, RPO, and test rigor by risk

Every system in scope carries a documented criticality, RTO, and RPO derived from a business impact analysis. Test type and frequency follow from criticality. Use the table below as the default and record the assignment for each system in the DR system inventory.

| System criticality | Typical RTO / RPO | Minimum test type | Minimum frequency |
|---|---|---|---|
| Critical (outage harms patients, halts release or manufacture, or risks GxP records) | RTO `<<FILL: e.g. 4-24 h>>`; RPO `<<FILL: e.g. <=15 min>>` | Simulation or full failover | Annually, plus a component restore each `<<FILL: quarter / half-year>>` |
| Important (significant disruption, workaround exists for a short period) | RTO `<<FILL: e.g. 1-3 days>>`; RPO `<<FILL: e.g. <=24 h>>` | Walkthrough / component restore | Annually |
| Supporting (limited GxP impact, tolerates longer downtime) | RTO `<<FILL: e.g. up to 5 days>>`; RPO `<<FILL: e.g. <=7 days>>` | Tabletop, with a sampled restore | Every `<<FILL: 1-2 years>>` |

Hosted and SaaS systems where you do not hold the infrastructure are tested by reviewing the provider's DR test evidence against the same RTO and RPO, plus your own test of any client-side recovery (for example re-establishing access, re-integrating interfaces, and verifying your exported data).

### 5.2 The four test types and what each proves

Use the lightest test that gives the assurance you need, and escalate to heavier tests for the most critical systems. Each type is a step up in realism, cost, and risk.

1. **Tabletop**: a facilitated discussion against a stated scenario. Proves the plan is current, contacts and roles are right, and decision points are understood. No systems are touched, so it carries no production risk and is the entry point for a new or changed system.
2. **Walkthrough / component test**: execute discrete recovery steps for real in a non-production environment, most often a restore of a backup to a recovery server and a check that the data opens and reads correctly. Proves the backups are actually restorable, not just that the backup job reports success.
3. **Simulation / parallel test**: stand up the system in an isolated recovery environment and run it in parallel with production. Proves the full recovery sequence and the RTO under realistic conditions, while production keeps running untouched.
4. **Full failover test**: declare a controlled disaster, fail the live workload over to the recovery infrastructure, operate from it, then fail back. Proves the end-to-end capability including cutover and failback. Highest assurance, reserved for the most critical systems, and scheduled into a change window with a tested rollback.

### 5.3 Scope a test so it cannot damage production

A DR test must never become a real incident. Scope every test before execution and capture the scope on the test plan.

1. **Choose the test type** from section 5.2 that matches the system criticality and what you need to prove this cycle.
2. **Isolate the recovery target.** Use a dedicated, network-isolated recovery environment for walkthrough and simulation tests so a restored copy cannot write back to production, reconnect to live interfaces, or send live notifications, emails, or orders.
3. **Use a copy, never the only copy.** Restore from a copy of the backup or a replica. Never consume, move, or overwrite the sole protected copy of production data during a test.
4. **Mask or contain live actions.** Disable or redirect outbound integrations, electronic signatures that trigger downstream effects, scheduled jobs, and external messaging in the recovery environment.
5. **Define a stop and rollback point.** State in advance the conditions that abort the test and the steps to return to the starting state, and confirm production is untouched at the end.
6. **Pre-approve the window.** For simulation and full failover, schedule into an approved change window per `<<FILL: change control SOP-ID>>`, with the system owner and QA sign-off and an on-call rollback owner named.
7. **Protect data integrity in the copy.** Treat the recovered data as GxP data: control access, label it as a test copy, and dispose of it under `<<FILL: data disposal / retention SOP-ID>>` when the test closes so a test copy is never mistaken for a record.

### 5.4 Run the test and capture evidence

1. Confirm the recovery environment, the source backup or replica, and the runbook version before starting.
2. Record the declared start time (the moment "recovery begins"), each step against the runbook, who performed it, and any deviation from the runbook.
3. Recover the system per its runbook. Capture the actual recovery point reached (the timestamp of the last good data restored) and the actual completion time (system declared usable).
4. Perform post-recovery verification: the process SME confirms the system functions and the data is complete and accurate per section 6.
5. Record the result against every success criterion, capture screenshots, logs, restore reports, and signed verification, and note any runbook gaps found.
6. Tear down the recovery environment and dispose of the test data copy, confirming production was not affected.

### 5.5 Handle a failed test

A test that misses its RTO or RPO, fails verification, or exposes a broken runbook is a finding, not a quiet retry.

1. Record the failure on the test report with the specific criterion missed and the root cause as far as known.
2. Notify the system owner and QA the same working day; assess whether the live system is at real risk now.
3. Open a CAPA or deviation per `<<FILL: CAPA / deviation SOP-ID>>` for any RTO/RPO miss, restore that does not work, or data-integrity gap.
4. Re-test the corrected procedure within `<<FILL: number>>` working days; do not close the finding on the strength of a fix that has not been re-tested.

### 5.6 Frequency, scheduling, and the annual plan

The DR test coordinator issues a rolling test calendar each year covering every in-scope system, the test type due, the planned window, and the owners. Each system is tested at no less than the frequency in section 5.1. A new system, a major infrastructure change, a move to or from a hosting provider, a runbook change, or a real DR event each trigger a test out of cycle. Schedule simulation and full failover tests into approved change windows and away from peak GxP activity such as release, manufacturing campaigns, or regulatory submission dates.

## 6. Success criteria

A test passes only when all applicable criteria below are met. Record the result against each one; a single failure makes the test a failure for that system.

| Criterion | Requirement |
|---|---|
| Recovery achieved | The system is restored to a usable state following only the recovery runbook, with no undocumented improvisation. |
| RTO met | Actual recovery time, from declared start to usable, is at or below the system's RTO. |
| RPO met | The actual recovery point (last good data restored) is within the system's RPO; data loss does not exceed the allowed window. |
| Data integrity intact | Recovered data is complete, accurate, and legible: record counts reconcile, a defined set of records is verified against a known-good reference, audit trails are present and continuous, electronic signatures remain bound to their records, and date and time stamps are correct in the recovered system. |
| Functionality verified | The process SME confirms key functions work and a representative transaction can be completed in the recovered system. |
| Runbook accurate | The recovery runbook was followed as written; any gap, error, or missing step is logged for correction. |
| Production unaffected | Production data and service were not consumed, altered, or interrupted by the test. |
| Evidence complete | Test plan, step log, restore reports, verification records, and result are captured, signed, dated, and retained. |

## 7. Evidence and records

Each test produces a test report retained per the records retention schedule, for not less than `<<FILL: retention period>>`. The report includes: the test plan and scope, the runbook version used, the timed step log, the actual RTO and RPO achieved against target, the data-integrity verification record, screenshots and restore logs, all findings and their CAPA or deviation references, and the approvals. These records are the proof shown to an inspector that DR capability is real, current, and effective.

## 8. Record generated: DR test report

| Field | Entry |
|---|---|
| System name and ID | `<<FILL: SYSTEM NAME / ID>>` |
| System criticality / target RTO / target RPO | `<<FILL>>` / `<<FILL>>` / `<<FILL>>` |
| Test type | Tabletop / Walkthrough / Simulation / Full failover |
| Scenario tested | `<<FILL: e.g. total loss of primary storage>>` |
| Recovery environment used | `<<FILL: isolated recovery environment / standby site>>` |
| Source of recovery (backup / replica + timestamp) | `<<FILL>>` |
| Runbook number and version | `<<FILL>>` |
| Declared start time | `<<FILL>>` |
| System usable time / actual RTO | `<<FILL>>` / `<<FILL>>` |
| Actual recovery point / actual RPO | `<<FILL>>` / `<<FILL>>` |
| Data integrity verification result | `<<FILL: pass / fail, with what was checked>>` |
| Functionality verification result | `<<FILL: pass / fail>>` |
| Production confirmed unaffected | Yes / No |
| Findings / runbook gaps | `<<FILL: none, or list with detail>>` |
| CAPA / deviation reference (if raised) | `<<FILL: number or N/A>>` |
| Overall result | Pass / Fail |
| Tester (name, signature, date) | `<<FILL>>` |
| System owner (name, signature, date) | `<<FILL>>` |
| QA approval (name, signature, date) | `<<FILL>>` |

## 9. References

> 21 CFR Part 11 (electronic records and signatures, including accurate and complete copies and record protection).
> 21 CFR 211.68 (backup data and record protection for automatic equipment).
> 21 CFR 211.180 (general records retention requirements).
> EU GMP Annex 11, sections 7.2 (data storage, restoration check), 16 (business continuity), and 17 (archiving).
> ICH Q9, Quality Risk Management (for the risk-based test type and frequency).
> GAMP 5 (Second Edition) and GAMP Good Practice Guide on IT infrastructure control and compliance (for backup, restore, and continuity practice).
> ISO 22301 (business continuity management) and ISO/IEC 27031 (ICT readiness for business continuity), where used as supporting frameworks.

Confirm the current version and clause numbers of each reference before issue.

## 10. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 11. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (DR coordinator) | `<<FILL>>` | | |
| Reviewer (System owner) | `<<FILL>>` | | |
| Reviewer (IT Infrastructure) | `<<FILL>>` | | |
| Approver (QA / IT Quality) | `<<FILL>>` | | |

---

## Filled specimen

The following shows a DR test report completed for an example electronic batch record (EBR) system, so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| System name and ID | Electronic Batch Record system, EBR-PROD-01 |
| System criticality / target RTO / target RPO | Critical / RTO 8 hours / RPO 15 minutes |
| Test type | Simulation (parallel) |
| Scenario tested | Total loss of the primary database server in the manufacturing data center |
| Recovery environment used | Network-isolated DR environment at the recovery site, no route to production |
| Source of recovery (backup / replica + timestamp) | Replicated database snapshot, recovery point 14:50, plus transaction logs to 14:58 |
| Runbook number and version | RB-EBR-01, v3.2 |
| Declared start time | 15:00 |
| System usable time / actual RTO | 20:10 / 5 h 10 min (within 8 h RTO) |
| Actual recovery point / actual RPO | 14:58 / 2 min (within 15 min RPO) |
| Data integrity verification result | Pass: 4,318 batch records reconciled to the production count at the recovery point; 25 sampled batch records matched the known-good reference field-for-field; audit trail continuous with no gap; e-signatures still bound to their records; system clock correct in the recovered environment |
| Functionality verification result | Pass: a test batch record was opened, a process step signed, and a report generated in the recovered system |
| Production confirmed unaffected | Yes |
| Findings / runbook gaps | Runbook step 14 omitted the order of restoring transaction logs after the snapshot, which cost roughly 40 minutes of troubleshooting |
| CAPA / deviation reference (if raised) | CAPA-2026-0207 (correct and re-verify runbook step 14) |
| Overall result | Pass with finding |
| Tester | M. Okafor, signed, 12 June 2026 |
| System owner | L. Brandt, signed, 12 June 2026 |
| QA approval | R. Gomez, signed, 13 June 2026 |

In this example the team recovered a critical system into an isolated environment, hit both the RTO and the RPO, proved the recovered data was complete and the audit trail and signatures intact, and still found a real gap: the runbook did not state the order of restoring transaction logs. They logged it, opened a CAPA, and committed to re-verify after the fix. A clean pass that also surfaces a runbook gap and routes it to correction is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this strategy prevents

- A DR or business continuity plan exists on paper but has never been tested, so recovery is an untested assumption.
- Backups are scheduled and the jobs report success, but no restore has ever been performed to confirm the backups are actually usable.
- RTO and RPO are stated in the plan but a test has never measured the actual recovery time or data loss against them.
- Recovery is verified only as "the system came back up," with no check that the recovered data is complete, accurate, and reconciles to the production record.
- A test failed or a runbook gap was found, but there is no CAPA and no evidence the procedure was corrected and re-tested.
- Test frequency is the same for every system with no link to system criticality.
- For a hosted or SaaS GxP system, the firm holds no evidence that the provider tests recovery and meets the agreed RTO and RPO.
- A DR test ran against production, or against the only copy of the data, putting live records at risk.

## How to adapt this strategy

1. Set your document number, owner, and effective date in the header, and link your BC/DR plan, backup SOP, and system inventory.
2. Replace the criticality tiers, RTO, RPO, and frequencies in section 5.1 with the values from your own business impact analysis for each system.
3. Decide which test type each system needs this cycle and build your rolling annual test calendar in section 5.6.
4. Point the cross-references in sections 2, 5.3, and 5.5 to your real change control, CAPA, deviation, and data disposal procedures.
5. For hosted and SaaS systems, add the step of obtaining and assessing the provider's DR test evidence against your RTO and RPO, and name where that evidence is filed.
6. Define your data-integrity verification method in section 6 (record-count reconciliation, the sample size of records checked against a known-good reference, and the audit-trail and signature checks) so testers apply it consistently.
7. Confirm every regulation in section 9 against the current published version before issue.
