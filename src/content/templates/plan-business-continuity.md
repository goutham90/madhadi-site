---
title: "Business Continuity Plan"
description: "A plug-and-play business continuity plan for a GxP organization: business impact analysis, critical process recovery priorities, manual workarounds during outage, roles and call tree, the link to disaster recovery, exercise schedule, and GxP impact, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Plan"
pillar: "csv-csa"
relatedArticles: ["backup-restore-disaster-recovery-validation", "it-change-and-configuration-management-gxp"]
tags: ["business continuity", "disaster recovery", "bia", "gxp", "rto", "rpo", "continuity plan"]
tier: "Intermediate"
---

This is a ready-to-use business continuity plan. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your process maps and contact lists, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

A business continuity plan (BCP) answers one question under pressure: when a system, a building, a supplier, or a key team goes down, how does the regulated work keep running, and how fast must each piece come back before product or patients are at risk. It is not the same as a disaster recovery (DR) plan. DR is the technical recovery of IT systems and data; the BCP is the wider plan for keeping the business operating, with DR as one input. Section 9 spells out that relationship so the two documents do not contradict each other.

## Document control header

| Field | Entry |
|---|---|
| Document title | Business Continuity Plan for `<<FILL: site / business unit>>` |
| Document number | `<<FILL: BCP-ID, e.g. BCP-OPS-001>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Operations or BCM Coordinator>>` |
| Applies to | `<<FILL: sites / departments / processes in scope>>` |
| Next review due | `<<FILL: date, not more than 12 months from effective date>>` |

## 1. Purpose

This plan defines how `<<FILL: COMPANY NAME>>` keeps critical regulated activities running, and recovers them in a controlled order, when a disruption takes out one or more systems, facilities, suppliers, or teams. The objective is to protect product quality, patient safety, and data integrity during a disruption, to meet supply and reporting obligations, and to return to normal operation without compromising GxP controls along the way.

## 2. Scope

This plan applies to the sites, departments, and processes listed in the header and covers disruptions to: computerized systems (covered in detail by the DR plan referenced in section 9), the physical facility and utilities, key personnel, and external suppliers or service providers. It addresses how regulated work continues during the disruption, the order in which activities are recovered, and the manual workarounds that hold quality together while systems are down. It does not replace the incident or deviation procedure `<<FILL: SOP-ID for deviations>>`, the DR plan `<<FILL: DR plan number>>`, or the crisis communication procedure `<<FILL: SOP-ID>>`; it sits above and connects them.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Plan owner / BCM coordinator | Maintains this plan, runs the business impact analysis, schedules and records exercises, and confirms recovery objectives stay current. |
| Incident commander | Declares an invocation, leads the response, authorizes manual workarounds, and decides on return to normal. Named with a deputy in section 6. |
| Process owners | Confirm their recovery priority and manual workaround, execute the workaround when invoked, and own the back-capture of records afterward. |
| Quality Assurance | Confirms that manual workarounds preserve GxP control, approves the impact assessment for any product or data affected, and approves return to normal. |
| IT / system owners | Execute the DR plan for affected systems and report recovery progress against the recovery objectives. |
| Site / facilities | Manages the building, utilities, and any relocation to an alternate site. |
| Communications lead | Runs the call tree and external notifications (customers, regulators where required, suppliers). |

## 4. Definitions

- **Business impact analysis (BIA)**: the structured assessment that ranks each activity by the harm caused if it stops, and from that sets how fast it must recover.
- **Critical process**: an activity whose loss would, within a defined time, threaten patient safety, product quality, regulatory compliance, or supply.
- **RTO (recovery time objective)**: the maximum time a process or system may stay down before the impact becomes unacceptable.
- **RPO (recovery point objective)**: the maximum data loss, measured in time, that the process can tolerate (for example, "no more than the last 24 hours of entries").
- **MTPD (maximum tolerable period of disruption)**: the outer limit, longer than the RTO, beyond which the harm is severe or irreversible.
- **Manual workaround**: a validated or pre-approved way to keep a critical process running on paper or by other means while the normal system is unavailable.
- **Invocation**: the formal decision to activate this plan, made by the incident commander.
- **Disaster recovery (DR)**: the technical restoration of IT systems, infrastructure, and data, governed by the DR plan; one input to this BCP.

## 5. Business impact analysis (BIA)

The BIA is the foundation of this plan. For every activity in scope, assess the impact of its loss over time, then set its RTO, RPO, and MTPD from that impact, not from convenience. Record the full BIA in Attachment 1 and summarize the critical activities here. Impact is scored across patient safety, product quality, data integrity, regulatory and supply obligations, and finances. Re-run the BIA at least annually and after any material change to processes, systems, or supply.

| Activity | Impact if lost (severity over time) | RTO | RPO | MTPD | Dependencies (system / supplier / people / facility) |
|---|---|---|---|---|---|
| `<<FILL: e.g. batch release / disposition>>` | `<<FILL: severity and how fast it bites>>` | `<<FILL: e.g. 24 h>>` | `<<FILL: e.g. 0 (no loss)>>` | `<<FILL: e.g. 72 h>>` | `<<FILL: QMS, LIMS, QP availability>>` |
| `<<FILL: e.g. GMP manufacturing run in progress>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: e.g. QC stability / release testing>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: e.g. pharmacovigilance case intake>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: e.g. cold-chain storage / distribution>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

State the convention once: an RTO is met when the activity is functioning again at an acceptable level, by manual workaround or by restored system, whichever comes first. A workaround that meets the RTO is a valid recovery even if the system itself is still down.

## 6. Critical processes and recovery priorities

Recover in the order set by the BIA, shortest RTO and highest patient or product risk first. List the priority order here so that, under pressure, the incident commander is not improvising the sequence. Tie each process to its owner, its workaround (section 7), and the system whose DR drives its technical recovery.

| Priority | Critical process | Owner | RTO | Manual workaround (section 7 ref) | Driving DR / system recovery |
|---|---|---|---|---|---|
| 1 | `<<FILL: highest-risk, shortest-RTO process>>` | `<<FILL: role>>` | `<<FILL>>` | `<<FILL: WA-01>>` | `<<FILL: system / DR step>>` |
| 2 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: WA-02>>` | `<<FILL>>` |
| 3 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: WA-03>>` | `<<FILL>>` |
| 4 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: WA-04>>` | `<<FILL>>` |

Activities not on this list are deferred until the critical processes are stable. Record that deferral decision on the invocation log; do not let a low-priority activity consume the same people who are recovering a critical one.

## 7. Manual workarounds during outage

For each critical process, define how the work continues while the system is down, and how the records made during the outage are brought back into the system afterward without breaking data integrity. A workaround that produces records nobody can reconcile later is worse than the outage. Pre-approve the forms, pre-print or keep an offline copy, and qualify the people who will run them.

| Workaround ID | Process | What you do while the system is down | Record made during outage | Back-capture / reconciliation when system returns | QA control during workaround |
|---|---|---|---|---|---|
| `<<FILL: WA-01>>` | `<<FILL>>` | `<<FILL: paper batch record, offline spreadsheet, phone authorization, etc.>>` | `<<FILL: controlled paper form ref>>` | `<<FILL: transcribe with second-person verification into system, reconcile counts, reference both records>>` | `<<FILL: who reviews, what is held>>` |
| `<<FILL: WA-02>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: WA-03>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

Rules that apply to every workaround:

1. Manual records made during the outage are controlled documents: pre-numbered, issued, and reconciled. Loose paper is not acceptable.
2. ALCOA+ still applies on paper. Entries are attributable, legible, contemporaneous, original, and accurate, with the same review and second-check the system would have enforced.
3. Capture the outage window (start and end, by clock time) so the back-capture period is unambiguous.
4. Transcription from paper into the restored system is verified by a second person and both records are retained and cross-referenced.
5. Do not release product, report a safety case, or make a quality decision on data that has not been reconciled and approved by QA.

## 8. Roles and call tree

Speed in the first hour comes from knowing who to call and in what order. Keep the contact details in Attachment 2 (current names and numbers change too often for the controlled body) and keep the structure here.

| Tier | Role | Primary | Deputy | Activation trigger |
|---|---|---|---|---|
| First call | Incident commander | `<<FILL: name in Attachment 2>>` | `<<FILL: deputy>>` | Any suspected invocation event |
| Notify | Quality Assurance lead | `<<FILL>>` | `<<FILL>>` | On invocation |
| Notify | IT / DR lead | `<<FILL>>` | `<<FILL>>` | On any system outage |
| Notify | Site / facilities lead | `<<FILL>>` | `<<FILL>>` | On facility / utility event |
| Notify | Communications lead | `<<FILL>>` | `<<FILL>>` | On invocation |
| Escalate | Executive sponsor | `<<FILL>>` | `<<FILL>>` | If MTPD threatened |

Invocation steps:

1. Whoever detects the disruption calls the incident commander (or deputy).
2. The incident commander assesses against the criteria in section 10 and decides whether to invoke this plan.
3. On invocation, the incident commander opens an invocation log (Attachment 3), starts the call tree, and authorizes the relevant manual workarounds.
4. The incident commander assigns recovery of critical processes in the priority order of section 6.
5. Status is reviewed at a fixed cadence (for example hourly) until critical processes are stable.

## 9. Relationship to disaster recovery (DR)

This BCP and the DR plan are two layers of one response, not duplicates. The boundary:

| Question | Answered by | Document |
|---|---|---|
| How do we keep the regulated work running while the system is down? | BCP (manual workarounds, priorities, people) | This plan |
| How is the IT system, infrastructure, and data technically restored? | DR plan (restore from backup, failover, rebuild) | `<<FILL: DR plan number>>` |
| How fast must the system come back? | BCP sets the RTO/RPO from the BIA; DR must meet them | Both |
| Was the restored system fit to use again? | DR verifies the restoration; QA confirms data integrity before reuse | DR plan + this plan section 11 |

The DR plan's tested RTO and RPO must be at least as fast as the RTO and RPO this BCP requires for the processes that depend on the system. If DR cannot meet the BIA's requirement, that gap is a risk to record and close, either by improving DR or by extending the manual workaround coverage. The backup and restoration testing that proves the DR side is governed by `<<FILL: backup/restore SOP or protocol number>>`.

## 10. Invocation criteria

Invoke this plan when any of the following is true, or when the incident commander judges the disruption will exceed a critical process RTO:

- A system supporting a critical process is unavailable and will not recover within its RTO.
- The facility or a critical utility is unavailable (power, HVAC for controlled storage, water for injection, compressed gases).
- A critical supplier or service provider cannot deliver and stock or alternatives will run out within the MTPD.
- Loss of access to key personnel that prevents a critical process from running.
- Any event the incident commander judges likely to breach an MTPD.

A short, recoverable blip handled within the RTO by normal IT support does not require invocation; log it as an incident instead.

## 11. Return to normal

Coming back is a controlled step, not a relief valve. Before declaring return to normal:

1. Confirm the system or facility is restored and, where a system was restored, that DR verification passed and QA confirmed data integrity before any restored data is used.
2. Complete the back-capture and reconciliation of all records made during the outage (section 7), verified by a second person and approved by QA.
3. Assess product, data, or safety-report impact for anything handled during the disruption, and open a deviation per `<<FILL: deviation SOP-ID>>` for anything that needs investigation.
4. The incident commander, with QA, formally declares return to normal and closes the invocation log.
5. Hold a post-incident review within `<<FILL: number>>` working days and feed lessons learned into the plan, the BIA, and the exercise schedule.

## 12. Exercise schedule

A plan that is never exercised fails when it is needed. Test on a schedule, vary the scenario, and record every exercise as objective evidence.

| Exercise type | Frequency | Scope | Evidence retained |
|---|---|---|---|
| Plan walkthrough / tabletop | `<<FILL: at least annually>>` | Roles, call tree, decision flow | Attendance, scenario, findings |
| Call tree / notification test | `<<FILL: e.g. twice a year>>` | Contactability of all tiers | Reach times, gaps |
| Manual workaround drill | `<<FILL: at least annually per critical process>>` | Run one critical process on its workaround and back-capture | Completed paper records, reconciliation |
| DR / restoration test (coordinated with IT) | `<<FILL: per DR plan, at least annually>>` | Restore a critical system, confirm RTO/RPO met | DR test report |
| Full invocation simulation | `<<FILL: e.g. every 2 to 3 years>>` | End-to-end response | Exercise report, action items |

Every exercise produces an action list with owners and due dates, tracked to closure. An exercise that finds nothing wrong is usually an exercise that was not realistic enough.

## 13. Acceptance criteria

This plan is in an acceptable state when all of the following are true:

- The BIA is current (within the review period) and every critical process has a justified RTO, RPO, and MTPD.
- Every critical process has a defined, pre-approved manual workaround with a back-capture method that preserves data integrity.
- The call tree is current and was reach-tested within the schedule.
- The DR plan's tested RTO/RPO meet the BIA's requirements, or any gap is recorded and being closed.
- Exercises were run on schedule and their action items are tracked to closure.
- The plan, and any change to it, went through document control, review, and QA approval.

## 14. References

> 21 CFR 211.68 (automatic equipment) and 21 CFR 211.180 (records retention), where continuity touches GMP systems and records.
> 21 CFR Part 11 (electronic records and signatures), for controls that must hold during and after an outage.
> EU GMP Annex 11, sections 16 (business continuity) and 7.2 (backup), which require documented continuity arrangements for critical computerized systems.
> EU GMP Chapter 6 and Chapter 1 (Pharmaceutical Quality System), for the quality framework around continuity.
> ICH Q9, Quality Risk Management, for the risk basis of the BIA and recovery priorities.
> ICH Q10, Pharmaceutical Quality System.
> ISO 22301 (Security and resilience, Business continuity management systems) and ISO 22313, for BCM methodology.
> ISO/IEC 27031 (ICT readiness for business continuity), where IT continuity is in scope.
> GAMP 5 (2nd edition) guidance on business continuity for computerized systems.

Confirm the current version and clause numbers of each reference before issue.

## 15. Attachments

| No. | Attachment |
|---|---|
| 1 | Full business impact analysis (all activities, scoring, dependencies) |
| 2 | Contact lists and call tree (current names and numbers) |
| 3 | Invocation log template |
| 4 | Pre-approved manual workaround forms (controlled, pre-numbered) |
| 5 | Exercise reports and action logs |
| 6 | Cross-reference map to DR plan, deviation SOP, and crisis communication SOP |

## 16. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 17. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (BCM coordinator) | `<<FILL>>` | | |
| Reviewer (IT / DR lead) | `<<FILL>>` | | |
| Reviewer (Operations) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the BIA, recovery priority, and workaround sections completed for an example sterile fill-finish site whose batch-release and QC systems went down, so you can see the level of detail an inspector expects. The company, systems, and numbers are illustrative; replace them with your own.

**BIA extract (critical activities)**

| Activity | Impact if lost | RTO | RPO | MTPD | Dependencies |
|---|---|---|---|---|---|
| Batch disposition / release | No releases means stock-out of a single-source sterile injectable within days; supply and patient impact | 24 h | 0 (no data loss) | 72 h | QMS, LIMS, QP availability |
| GMP fill run in progress | A run mid-fill must complete or be lost; aseptic process integrity at risk if paused | 4 h (decision to continue or hold) | 0 | 8 h | MES, building HVAC, EM data |
| QC release testing (sterility, endotoxin) | Release blocked downstream; results time-bound | 24 h | last 24 h tolerable | 72 h | LIMS, instruments |
| Cold-chain storage monitoring | Excursion undetected risks whole inventory | 1 h | near-zero | 4 h | Monitoring system, backup power |

**Recovery priority order**

1. Cold-chain monitoring (RTO 1 h) via backup power and manual rounds with a calibrated logger, workaround WA-01.
2. In-progress fill run decision (RTO 4 h): switch to the paper batch record and EM logbook, workaround WA-02.
3. QC release testing (RTO 24 h): record results on controlled paper worksheets, back-capture to LIMS, workaround WA-03.
4. Batch disposition (RTO 24 h): QP review on certified paper packets pending LIMS restore, workaround WA-04.

**Manual workaround detail (WA-02, fill run)**

| Field | Entry |
|---|---|
| While the system is down | Operators run the line on the pre-approved paper master batch record; EM and line-clearance recorded in the controlled outage logbook; deviations raised on paper. |
| Record made | Paper MBR copy BCP-MBR-0007, pre-numbered, issued by the document room. |
| Outage window captured | 09:14 to 13:40, recorded on the invocation log. |
| Back-capture | Data transcribed into MES after restore, verified line-by-line by a second operator and QA; paper and electronic records cross-referenced and both retained. |
| QA control | QA on the floor for the duration; no release of the run until reconciliation complete. |

**DR linkage**

The DR plan's last tested LIMS restore RTO was 18 h against the BIA requirement of 24 h, so DR meets the requirement with margin. The MES restore tested at 6 h against a 4 h decision RTO; that 2 h gap was covered by the WA-02 paper workaround and recorded as an accepted residual risk, with a DR improvement action to bring MES restore under 4 h.

In this example the team recovered in BIA-priority order, kept the aseptic run controlled on paper, captured a precise outage window, reconciled every record under a second check before release, and used a known DR-versus-BIA gap to justify keeping the workaround sharp. That sequence, BIA to priority to workaround to reconciled return to normal, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this plan prevents

- A business continuity plan exists on paper but has never been exercised, with no evidence of any walkthrough or drill.
- Recovery objectives (RTO/RPO) are stated for IT but were never derived from a business impact analysis of the GxP processes.
- Records created during an outage are loose, unnumbered paper that nobody reconciled back into the system, breaking the audit trail.
- Product released or a safety case reported on outage-period data that QA never assessed for impact.
- The DR plan's tested recovery time is slower than the continuity plan requires, with no one having noticed the gap.
- The call tree lists people who have left, with no reachable deputy, so the first hour is lost finding someone to decide.
- No manual workaround for a critical process, so the only option during an outage is to stop, with no controlled alternative.
- Return to normal declared without verifying the restored data or completing back-capture.

## How to adapt this plan

1. Set your document number, owner, effective date, and next review date in the header.
2. Run a real BIA across your in-scope GxP activities (section 5 and Attachment 1) and let the BIA, not habit, set every RTO, RPO, and MTPD.
3. Build the recovery priority list in section 6 from the BIA, then write a pre-approved, controlled manual workaround for each critical process in section 7, including how records are reconciled afterward.
4. Keep names and numbers in Attachment 2, not in the controlled body, and reach-test the call tree on schedule.
5. Compare your DR plan's tested RTO/RPO to the BIA requirements in section 9; record and close any gap.
6. Put the exercises in section 12 on the calendar with named owners, and track every exercise action item to closure.
7. Point the cross-references in sections 2, 7, 9, and 11 to your real deviation, DR, backup/restore, and crisis communication procedures.
8. Confirm every regulation in section 14 against the current published version before issue.
