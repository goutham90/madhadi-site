---
title: "Infrastructure Periodic Review Report"
description: "A plug-and-play periodic review report for qualified GxP IT infrastructure covering configuration and baseline status, patching and obsolescence, capacity, security, backup and disaster recovery test status, incidents, a documented conclusion on the continued qualified state, actions, and approval, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Report"
pillar: "csv-csa"
relatedArticles: ["infrastructure-qualification-and-spreadsheet-validation", "cloud-saas-validation"]
tags: ["infrastructure qualification", "periodic review", "it qualification", "baseline", "disaster recovery", "patch management", "gamp 5", "annex 11"]
tier: "Intermediate"
---

This is a ready-to-use infrastructure periodic review report. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach the evidence each section references, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

An infrastructure periodic review is the scheduled re-evaluation of IT infrastructure that is already qualified and in operation: the physical and virtual hosts, operating systems, hypervisor, network and firewall, storage, database engines, time synchronization, backup, and monitoring that GxP applications run on. It is not a requalification and it is not a fresh build. It asks one question and answers it with evidence: has the infrastructure drifted from its qualified baseline, and is it still fit to host GxP applications and data. The review looks back over the period at everything that could have eroded the qualified state, configuration drift, missed patches, components nearing end of support, capacity pressure, security exposure, untested backups, and infrastructure incidents, then reaches a documented conclusion with actions.

## Document control header

| Field | Entry |
|---|---|
| Document title | Infrastructure Periodic Review Report for `<<FILL: infrastructure scope / platform name>>` |
| Document number | `<<FILL: RPT-ID, e.g. IPR-2026-007>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Report date | `<<FILL: date issued>>` |
| Supersedes | `<<FILL: prior periodic review number or "New">>` |
| Document owner | `<<FILL: role, e.g. Infrastructure Lead / IT Quality>>` |
| Infrastructure scope and ID | `<<FILL: cluster / hosts / environment names and asset IDs>>` |
| Linked qualification record | `<<FILL: original qualification summary / baseline reference, e.g. IQSR-IT-009>>` |
| Review period | `<<FILL: from date>>` to `<<FILL: to date>>` |
| Trigger | Scheduled (`<<FILL: frequency>>`) / Event-driven (`<<FILL: reason>>`) |

## 1. Purpose

This report documents the periodic review of the IT infrastructure listed in section 2, performed by `<<FILL: COMPANY NAME>>`, to confirm the infrastructure remains in a qualified state, has not drifted from the baseline established at qualification, and is still fit to host GxP applications and the records they hold. The objective is to gather and assess evidence across configuration and baseline status, patching and obsolescence, capacity, security, backup and disaster recovery, and incidents across the review period, and to reach a documented conclusion with any actions required to restore or maintain the qualified state.

## 2. Scope

This review covers the infrastructure named in the header: the hosts, operating system builds, hypervisor, network and firewall configuration, storage, database engines, time service, backup, and monitoring that support the GxP applications listed below. It covers the review period stated in the header. It does not re-execute infrastructure qualification testing and it does not validate the applications that run on the platform; where the review finds the qualified state is in question, it raises the need for requalification or remediation rather than performing it here.

| Item | Entry |
|---|---|
| GxP applications hosted on this infrastructure | `<<FILL: validated applications relying on this platform>>` |
| Environments in scope | `<<FILL: production / DR; qualification environment if separate>>` |
| GxP classification | `<<FILL: GxP-supporting infrastructure, GAMP 5 Category 1>>` |
| Hosting model | `<<FILL: on-premise / private cloud / IaaS or PaaS; provider's qualified scope vs yours>>` |
| Out of scope | `<<FILL: application-layer validation, end-user devices, building utilities, items covered by a separate review>>` |

For infrastructure delivered as a service, state which layers the provider keeps qualified under its own controls and which layers you review. Reuse of the provider's evidence (its audit reports, its uptime and DR records) is acceptable when you have assessed it; record that assessment in this review, do not assume it.

## 3. Inputs to this review

The reviewer collected and examined the following inputs for the review period. Each is referenced in the relevant section and retained with this report.

| Input | Source / reference | Reviewed (Y/N) |
|---|---|---|
| Qualified baseline (as-built versions, configuration, firewall ruleset) | `<<FILL: CMDB snapshot / signed build record>>` | `<<FILL>>` |
| Configuration management database (current state) | `<<FILL: CMDB reference>>` | `<<FILL>>` |
| Change records affecting the infrastructure | `<<FILL: change control log>>` | `<<FILL>>` |
| Patch and update records | `<<FILL: patch management report>>` | `<<FILL>>` |
| Component lifecycle / vendor end-of-support notices | `<<FILL: vendor lifecycle data>>` | `<<FILL>>` |
| Capacity and performance monitoring data | `<<FILL: monitoring system>>` | `<<FILL>>` |
| Security events, vulnerability scan, and access review records | `<<FILL: SIEM / scan report / IAM>>` | `<<FILL>>` |
| Backup logs and restore-test records | `<<FILL: backup system reports>>` | `<<FILL>>` |
| Disaster recovery test record | `<<FILL: DR test report>>` | `<<FILL>>` |
| Incident, problem, and outage records | `<<FILL: ITSM log>>` | `<<FILL>>` |
| Open actions from the previous periodic review | `<<FILL: prior report number>>` | `<<FILL>>` |

## 4. Infrastructure overview and risk basis

| Field | Entry |
|---|---|
| Infrastructure function | `<<FILL: what the platform provides and which GxP applications depend on it>>` |
| Components in scope | `<<FILL: hosts, OS builds, hypervisor, network/firewall, storage, DB engines, NTP, backup, monitoring>>` |
| GAMP software category | GAMP 5 Category 1 (infrastructure software) |
| Risk classification | `<<FILL: high / medium / low, basis: criticality of the applications and data it supports>>` |
| Review frequency basis | `<<FILL: e.g. annual for infrastructure supporting high-risk GxP systems, set by risk>>` |
| Original qualification reference | `<<FILL: qualification summary report and baseline date>>` |

State the frequency and the depth of this review against the risk basis. Infrastructure supporting a system that owns release or batch-disposition data warrants a deeper look and a shorter interval than infrastructure supporting only read-only or non-decision systems.

## 5. Configuration and baseline status

Confirm the live infrastructure still matches the qualified baseline and that every difference is explained by an approved change. This is the central question of the review: has the platform drifted.

| Check | Finding |
|---|---|
| Live configuration compared against the qualified baseline | `<<FILL: matches / differs, reference comparison evidence>>` |
| All differences traced to an approved change record | `<<FILL: Yes / No, list any unexplained difference>>` |
| Component versions, firmware, OS and DB versions vs baseline | `<<FILL: in line with baseline / drifted, detail>>` |
| Firewall ruleset and network configuration vs approved design | `<<FILL: matches ruleset ID / drifted, detail>>` |
| CMDB / asset register current and accurate | `<<FILL: Yes / No, gaps noted>>` |
| Unauthorized or undocumented configuration changes found | `<<FILL: none, or detail and action>>` |
| Baseline status conclusion | In line with baseline / Drift with approved changes / Unexplained drift |

A configuration present on the infrastructure but absent from change control, an extra firewall rule, an unrecorded version bump, a host added outside the build standard, is a finding, not a footnote. Cross-check the live state against the baseline, not against memory.

## 6. Patching and obsolescence

Confirm that operating systems, hypervisor, database engines, firmware, and security agents are patched under control and that no in-scope component has slipped past, or is about to slip past, vendor support.

| Component | Current version / patch level | Vendor support status | End-of-support date | Action |
|---|---|---|---|---|
| `<<FILL: OS build>>` | `<<FILL>>` | `<<FILL: supported / extended / end-of-life>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: hypervisor>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: database engine>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: storage firmware>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

| Summary | Entry |
|---|---|
| Security and critical patches applied under change control | `<<FILL: Yes / No, count, reference>>` |
| Patches assessed for GxP impact before deployment | `<<FILL: Yes / No>>` |
| Outstanding patches with documented risk acceptance | `<<FILL: none, or list with justification and due date>>` |
| Components at or within `<<FILL: months>>` of end of support | `<<FILL: none, or list with remediation plan>>` |

Patching is not exempt from change control because it comes from the vendor. Each patch needs a GxP impact assessment proportionate to its risk before it touches qualified infrastructure. A component running past vendor end of support, with no patches available for new vulnerabilities, is a finding even if it still works; record the migration or extended-support plan with a date.

## 7. Capacity

Confirm compute, memory, storage, and where relevant network capacity have headroom against the documented sizing and the observed growth trend, so the platform does not run out of room before the next review.

| Resource | Current utilization | Threshold / target | Trend in period | Finding |
|---|---|---|---|---|
| Compute (CPU) | `<<FILL: %>>` | `<<FILL: % target>>` | `<<FILL: stable / rising>>` | `<<FILL>>` |
| Memory | `<<FILL: %>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Storage | `<<FILL: % used>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Database growth | `<<FILL: GB/month>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Network / bandwidth | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

| Summary | Entry |
|---|---|
| Capacity sufficient until next review | `<<FILL: Yes / No>>` |
| Capacity-related incidents in period | `<<FILL: count, detail>>` |
| Capacity action required | `<<FILL: none, or expansion/archiving plan with date>>` |

Storage that fills up can stop a system from writing records or completing backups, which is a data integrity and availability problem, not just an IT housekeeping one. State the trend, not only the snapshot, so a slow climb toward a limit is caught before it becomes an outage.

## 8. Security

Confirm the security controls that keep the platform trustworthy remain effective: access control, hardening, vulnerability posture, time synchronization, and the security events of the period.

| Check | Finding |
|---|---|
| Privileged / administrator accounts justified, named, and minimized | `<<FILL: count, all justified Y/N>>` |
| Access review for the infrastructure performed and documented | `<<FILL: Yes / No, date and reviewer>>` |
| Leavers and movers removed or adjusted within target time | `<<FILL: Yes / No, exceptions>>` |
| Hardening / security baseline still in place (no drift) | `<<FILL: Yes / No, reference benchmark, e.g. CIS>>` |
| Vulnerability scan performed; findings triaged and remediated | `<<FILL: date, open critical/high count, plan>>` |
| Time synchronization to the authoritative source verified | `<<FILL: Yes / No, drift within tolerance>>` |
| Security events / breaches affecting the qualified state | `<<FILL: none, or detail and action>>` |

Administrator accounts and time synchronization are the two security points inspectors challenge most on infrastructure. Confirm each administrator account maps to a named person and a documented need, and confirm the clock all hosts depend on is still locked to a trusted source, because every audit trail timestamp on every hosted system inherits that clock.

## 9. Backup and disaster recovery test status

Confirm backups run and complete, that they have been proven restorable in the period, and that the disaster recovery arrangement was tested against its recovery objectives. A green backup log is not the evidence; the restore is.

| Check | Finding |
|---|---|
| Backups scheduled and completing successfully | `<<FILL: Yes / No, failure count>>` |
| Backup failures investigated and resolved | `<<FILL: Yes / No>>` |
| Restore test performed in period | `<<FILL: Yes / No, date and result>>` |
| Backup retention meets records retention requirement | `<<FILL: Yes / No, period>>` |
| Backups stored offsite / logically separated and protected | `<<FILL: Yes / No>>` |
| DR test performed in period | `<<FILL: Yes / No, date>>` |
| DR test met RTO target | `<<FILL: target vs achieved>>` |
| DR test met RPO target | `<<FILL: target vs achieved>>` |
| DR plan current and reflects the live architecture | `<<FILL: Yes / No>>` |

An untested backup is an assumption, not a control. State the recovery time objective (RTO) and recovery point objective (RPO) targets and the actual results from the test, and confirm the DR plan still matches the architecture, because a DR plan written for an old topology will fail when it is needed.

## 10. Incidents

Summarize infrastructure incidents, outages, and problems for the period and confirm each was investigated, resolved, and assessed for impact on the hosted GxP data and on the qualified state.

| Ref | Date | Type | Description | Data / availability impact | Closed (Y/N) |
|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | Outage / hardware / security / capacity | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

| Summary | Entry |
|---|---|
| Total infrastructure incidents | `<<FILL: count>>` |
| Incidents with GxP data impact | `<<FILL: count, detail>>` |
| Recurring or repeat incidents | `<<FILL: none, or pattern noted>>` |
| Open beyond target closure time | `<<FILL: none, or list>>` |
| Trend versus previous period | `<<FILL: stable / improving / worsening>>` |

A repeating incident signals a root cause that was never fixed. Note any pattern even when each instance was closed, and feed it to an action or CAPA in section 12. An outage with no data loss is still relevant: it puts your failover and recovery controls to a real test.

## 11. Conclusion on continued qualified state

State a clear, single conclusion supported by the sections above, using one of the defined outcomes.

| Field | Entry |
|---|---|
| Overall conclusion | `<<FILL: choose one>>` |
| Basis for conclusion | `<<FILL: summarize the evidence from sections 5 to 10>>` |

Defined outcomes:

- **Qualified, no action required.** All sections satisfactory; the infrastructure remains in its qualified state, has not drifted from baseline, and remains fit to host GxP applications and data.
- **Qualified, actions required.** The infrastructure remains usable, but defined actions are needed within set timeframes to maintain the qualified state (for example a pending patch, a capacity expansion, an end-of-support migration). Use is permitted while actions are tracked.
- **Qualified state in question.** Evidence indicates the infrastructure may no longer be in its qualified state or hosted data may be at risk (for example unexplained drift, an untested DR over the required interval, a component past end of support with an open vulnerability). Define interim controls, escalate, and trigger remediation or requalification before continued reliance.

Do not soften the conclusion to avoid an action. A defensible "qualified with actions" beats an unsupported "fully qualified" every time an inspector pulls the underlying evidence.

## 12. Actions

| Action no. | Action | Owner | Due date | Linked record (CAPA / change) | Status |
|---|---|---|---|---|---|
| `<<FILL: 1>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: 2>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

Actions that require formal tracking are raised as CAPA or change records and referenced here; this report tracks status but is not a substitute for the CAPA and change systems. Carry forward any open action from the previous periodic review so nothing is dropped between cycles.

## 13. Next review

| Field | Entry |
|---|---|
| Next review due | `<<FILL: date, set from risk-based frequency>>` |
| Frequency basis | `<<FILL: risk classification driving the interval>>` |
| Trigger for earlier review | `<<FILL: e.g. major architecture change, OS or DB major upgrade, data center relocation, hosting-model change, repeated failures, security event>>` |

## 14. References

> EU GMP Annex 11 (Computerised Systems), in particular sections on validation, data storage and backup, business continuity, periodic evaluation, and security.
> 21 CFR Part 11 (electronic records and electronic signatures) and the predicate-rule data controls it supports.
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment) and 211.180 (records retention), where infrastructure runs GMP records.
> ISPE GAMP 5 (a Risk-Based Approach to Compliant GxP Computerized Systems), including the IT infrastructure control and compliance guidance; infrastructure is Category 1.
> ICH Q9, Quality Risk Management (for the risk-based review frequency and depth).
> ICH Q10, Pharmaceutical Quality System.
> PIC/S PI 011, Good Practices for Computerised Systems in Regulated GxP Environments.
> MHRA GxP Data Integrity Guidance and Definitions (for the data storage, backup, and time-synchronization expectations).

Confirm the current version and clause numbers of each reference before issue.

## 15. Attachments

| No. | Attachment |
|---|---|
| 1 | Baseline-to-live configuration comparison evidence |
| 2 | Patch and update records for the period |
| 3 | Component lifecycle / end-of-support evidence |
| 4 | Capacity and performance trend reports |
| 5 | Access review, vulnerability scan, and security event records |
| 6 | Backup logs, restore-test record, and DR test report |
| 7 | Incident and problem records |
| 8 | Open actions carried from the previous periodic review |

## 16. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 17. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Infrastructure / IT Quality) | `<<FILL>>` | | |
| Reviewer (Information Security) | `<<FILL>>` | | |
| Approver (Quality Assurance / IT Quality) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the same report completed for an example virtualized host cluster supporting a laboratory data system, so you can see the level of detail an inspector expects. The company, hosts, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Infrastructure scope and ID | Two-host virtualization cluster ESXHOST-01/02 with shared storage SAN-01, hosting the GxP guest OS gold image GOLD-W2022-03 and database DB-LIMS-01 |
| Linked qualification record | IQSR-IT-009, qualified baseline dated 25 March 2026 |
| Review period | 01 April 2026 to 31 March 2027 |
| Trigger | Scheduled, annual (supports a high-risk laboratory data system) |
| Configuration and baseline status | Live configuration compared against the CMDB baseline; all differences traced to approved changes (3 in period). One unrecorded local firewall rule found on FW-01 not present in ruleset RS-IT-2026-04; raised as a finding and an action. Versions, firmware, and hardening otherwise in line with baseline. Conclusion: drift with one unexplained item, action raised. |
| Patching and obsolescence | OS, hypervisor, and database patched quarterly under change control with GxP impact assessment each cycle; 0 outstanding critical patches. Database engine 19c reaches extended support cut-off in 14 months; migration to 23ai planned (action 2). No component past end of support. |
| Capacity | CPU 38%, memory 52%, storage 71% used and rising about 1.5% per month; at trend, storage reaches the 85% threshold in roughly 9 months. Storage expansion scheduled (action 3). No capacity incidents in period. |
| Security | 3 administrator accounts, all named and justified; access review completed 18 February 2027 by the IT manager, 2 leavers removed within 1 working day each. CIS Level 1 hardening confirmed unchanged. Vulnerability scan 05 March 2027: 0 open critical, 1 high remediated by patch. Time synchronization to two stratum-1 sources verified, all hosts within 1 second. No security breaches. |
| Backup and DR | Daily backups completing; 3 backup failures in period, all investigated and re-run, of which 2 were raised as incidents (the third self-resolved on retry within the backup window). Restore test 12 November 2026: full database restored and verified. Retention 7 years offsite. DR test 20 January 2027: RTO target 4 hours, achieved 3 hours 5 minutes; RPO target 24 hours, achieved under 1 hour. DR plan updated to reflect the added host. Targets met. |
| Incidents | 4 incidents: 1 unplanned host outage (45 minutes, automatic failover, no data loss), 2 backup-job failures raised as incidents (re-run successfully; these are 2 of the 3 backup failures noted under Backup and DR, the third self-resolved on retry and was not raised), 1 storage-latency alert (resolved by firmware tuning). All closed. No GxP data impact. No recurring pattern. |
| Overall conclusion | Qualified, actions required. The infrastructure remains in its qualified state and hosted data is trustworthy; three actions are open to remove the unrecorded firewall rule, plan the database end-of-support migration, and expand storage ahead of the trend. Use permitted while actions are tracked. |
| Actions | (1) Remove the unrecorded rule on FW-01, re-verify ruleset, record under change control, owner network lead, due 30 April 2027. (2) Plan and impact-assess database migration before extended-support cut-off, owner infrastructure lead, due 30 September 2027. (3) Expand SAN-01 storage before 85% threshold, owner storage lead, due 31 July 2027. |
| Next review due | 31 March 2028 (annual, high-risk); earlier if a major architecture change, OS or database major upgrade, data center relocation, or security event occurs. |

In this example the reviewer compared the live platform against its recorded baseline rather than against memory, caught a firewall rule that bypassed change control, tracked a component toward end of support before it expired, read storage as a rising trend rather than a single number, named the restore and DR tests as the proof rather than the backup log, confirmed the clock all hosted audit trails depend on, and reached an honest "qualified with actions" conclusion with owned, dated actions. That sequence, baseline comparison to evidence to tracked action, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this report prevents

- Infrastructure periodic review is required by procedure but no report exists, or reviews are years overdue.
- The report asserts "infrastructure remains qualified" with no baseline comparison, so configuration drift is invisible and unproven either way.
- A configuration or firewall rule present on the live platform is absent from change control and from the review.
- Patches are applied with no GxP impact assessment, or a component runs past vendor end of support with no migration plan and an open vulnerability.
- Storage or capacity is reported as a single snapshot with no trend, so a slow climb toward a limit becomes a surprise outage.
- Backups are reported as successful but no restore or DR test was performed in the period, so recoverability of GxP records is assumed, not proven.
- Time synchronization is not verified, leaving every hosted audit trail timestamp untrustworthy.
- Over-privileged or orphan administrator accounts persist with no access review on record.
- The conclusion is "fully qualified" while the body shows unresolved drift, an end-of-support component, or an untested DR, so the conclusion is not supported by its own evidence.
- Open actions from the previous periodic review are not carried forward or are silently dropped.

## How to adapt this report

1. Set your document number, owner, infrastructure scope, and review period in the header, and link the original qualification record and baseline this review is measured against.
2. Set the review frequency and depth from your own risk basis in section 4; infrastructure supporting a high-risk release system needs more than infrastructure supporting only read-only systems.
3. Point every input in section 3 to your real CMDB, change, patch, lifecycle, capacity, security, backup, DR, and incident records, and attach or reference them.
4. In section 5, run an actual comparison of the live configuration against the qualified baseline and explain every difference with an approved change; do not assert "no drift" without the comparison.
5. In section 6, list real versions against vendor support dates so an approaching end of support is caught with time to plan, and confirm each patch carried a GxP impact assessment.
6. Pull real numbers and trends into the capacity, security, backup, and DR sections; for backup and DR, name the restore and the DR test and their RTO and RPO results, not the backup log.
7. For cloud or IaaS hosting, state which layers the provider keeps qualified and record your assessment of the provider's evidence rather than assuming it.
8. Choose one of the three defined conclusions in section 11 and make sure the body supports it; raise formal actions as CAPA or change records and reference them in section 12.
9. Carry forward open actions from the previous review and set a specific next-review date with named earlier-review triggers in section 13.
10. Confirm every regulation in section 14 against the current published version before issue.
