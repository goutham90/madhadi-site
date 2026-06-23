---
title: "Periodic Review Report (Validated System)"
description: "A plug-and-play periodic review report for a validated computerized system covering validation status, changes, deviations, CAPA, access review, backup and disaster recovery, data integrity, and a documented conclusion on the continued validated state, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Report"
pillar: "csv-csa"
relatedArticles: ["validation-master-plan-and-periodic-review", "writing-validation-protocols-and-reports", "validation-deliverables-guide"]
tags: ["periodic review", "csv", "validated state", "data integrity", "annex 11", "21 cfr part 11", "backup and recovery"]
tier: "Intermediate"
---

This is a ready-to-use periodic review report. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach the evidence each section references, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

A periodic review is the scheduled re-evaluation of a system that is already validated and in operation. It asks one question and answers it with evidence: is this system still in a validated state, and is the data it holds still trustworthy. It is not a re-validation and it is not a fresh project. It is a documented look back over the review period at everything that could have eroded the validated state, with a conclusion and actions.

## Document control header

| Field | Entry |
|---|---|
| Document title | Periodic Review Report for `<<FILL: system name>>` |
| Document number | `<<FILL: RPT-ID, e.g. PR-2026-014>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Report date | `<<FILL: date issued>>` |
| Supersedes | `<<FILL: prior periodic review number or "New">>` |
| Document owner | `<<FILL: role, e.g. System Owner / Validation Lead>>` |
| System name and ID | `<<FILL: SYSTEM NAME / ASSET ID>>` |
| Review period | `<<FILL: from date>>` to `<<FILL: to date>>` |
| Trigger | Scheduled (`<<FILL: frequency>>`) / Event-driven (`<<FILL: reason>>`) |

## 1. Purpose

This report documents the periodic review of `<<FILL: system name>>` performed by `<<FILL: COMPANY NAME>>` to confirm the system remains in a validated state, fit for its intended use, and operated under control across the review period. The objective is to gather and assess evidence across validation status, changes, deviations, CAPA, access, backup and recovery, and data integrity, and to reach a documented conclusion with any actions required to restore or maintain the validated state.

## 2. Scope

This review covers the system named in the header, including its application, configuration, interfaces to `<<FILL: connected systems>>`, the infrastructure it runs on, and the GxP records it creates, modifies, or stores. It covers the review period stated in the header. It does not re-execute qualification or validation testing; where the review finds the validated state is in question, it raises the need for re-validation or remediation rather than performing it here. The system risk classification and GxP impact are stated in section 4 and drive the depth of this review.

## 3. Inputs to this review

The reviewer collected and examined the following inputs for the review period. Each is referenced in the relevant section and retained with this report.

| Input | Source / reference | Reviewed (Y/N) |
|---|---|---|
| Current validation documentation index | `<<FILL: validation file / VMP reference>>` | `<<FILL>>` |
| Change records | `<<FILL: change control log>>` | `<<FILL>>` |
| Deviation and incident records | `<<FILL: deviation / incident log>>` | `<<FILL>>` |
| CAPA records | `<<FILL: CAPA log>>` | `<<FILL>>` |
| User access list and access review record | `<<FILL: IAM / access review>>` | `<<FILL>>` |
| Backup logs and restore-test records | `<<FILL: backup system reports>>` | `<<FILL>>` |
| Disaster recovery / business continuity test record | `<<FILL: DR test report>>` | `<<FILL>>` |
| Audit trail review records | `<<FILL: audit trail review log>>` | `<<FILL>>` |
| Incident / problem and security event logs | `<<FILL: ITSM / SIEM>>` | `<<FILL>>` |
| Open actions from the previous periodic review | `<<FILL: prior report number>>` | `<<FILL>>` |

## 4. System overview and risk classification

| Field | Entry |
|---|---|
| System function (GxP use) | `<<FILL: what the system does and which records it owns>>` |
| GxP impact | GxP / non-GxP: `<<FILL>>` |
| Risk classification | `<<FILL: high / medium / low, basis: data criticality x complexity>>` |
| GAMP software category | `<<FILL: GAMP 5 category 1/3/4/5>>` |
| Regulatory scope | `<<FILL: e.g. 21 CFR Part 11, EU GMP Annex 11, predicate rule>>` |
| Validation approach on file | `<<FILL: CSV / CSA risk-based, reference>>` |
| Review frequency basis | `<<FILL: e.g. high-risk = annual, medium = biennial, low = triennial>>` |

State the frequency and the depth of this review against the risk classification. A high-risk system that owns release or batch-disposition data warrants a deeper look and a shorter interval than a low-risk read-only system.

## 5. Validation status

Confirm the system is still covered by current, approved validation documentation that reflects the system as it runs today.

| Check | Finding |
|---|---|
| Validation documentation current and approved | `<<FILL: Yes / No, reference latest summary report>>` |
| Documentation reflects the live configuration | `<<FILL: Yes / No, gaps noted>>` |
| Requirements (URS) still match intended use | `<<FILL: Yes / No>>` |
| Traceability (URS to test) intact for current scope | `<<FILL: Yes / No, reference RTM>>` |
| Validation status conclusion | Validated / Validated with actions / Not validated |

If changes since the last review altered functionality, confirm the change records carried the right validation impact (covered in section 6). A live system whose behavior no longer matches its approved specifications is the single most common reason a periodic review concludes "validated with actions".

## 6. Changes since last review

List every change to the system, its configuration, infrastructure, or interfaces during the review period. Confirm each followed change control, carried a documented GxP and validation impact assessment, and was completed and closed.

| Change ref | Date | Description | GxP impact | Validation impact assessed | Closed (Y/N) |
|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

| Summary | Entry |
|---|---|
| Total changes in period | `<<FILL: count>>` |
| Changes requiring re-validation | `<<FILL: count, references>>` |
| Re-validation completed | `<<FILL: Yes / No / N/A>>` |
| Unauthorized or undocumented changes found | `<<FILL: none, or detail and action>>` |

Cross-check the change log against the live configuration and against patch and upgrade records from IT. A change present on the system but missing from change control is a finding, not a footnote.

## 7. Deviations and incidents

Summarize deviations, system incidents, outages, and security events for the period and confirm each was investigated, closed, and assessed for impact on data and the validated state.

| Ref | Date | Type | Description | Data / quality impact | Closed (Y/N) |
|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | Deviation / outage / security | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

| Summary | Entry |
|---|---|
| Total deviations / incidents | `<<FILL: count>>` |
| Recurring or repeat events | `<<FILL: none, or pattern noted>>` |
| Open beyond target closure time | `<<FILL: none, or list>>` |
| Trend versus previous period | `<<FILL: stable / improving / worsening>>` |

A repeating incident is a signal the root cause was never fixed. Note any pattern even if each instance was closed, and feed it to CAPA in section 8.

## 8. CAPA status

Confirm CAPAs raised against this system are progressing, that overdue items have a documented reason, and that closed CAPAs were effectiveness-checked.

| CAPA ref | Source | Description | Due date | Status | Effectiveness checked (Y/N) |
|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL: deviation / audit / prior review>>` | `<<FILL>>` | `<<FILL>>` | Open / Closed / Overdue | `<<FILL>>` |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

| Summary | Entry |
|---|---|
| Open CAPAs | `<<FILL: count>>` |
| Overdue CAPAs | `<<FILL: count, with justification>>` |
| CAPAs closed without effectiveness check | `<<FILL: none, or action>>` |

## 9. Access review

Confirm user access is current, role-appropriate, and segregated, and that the periodic access review for this period was performed and documented.

| Check | Finding |
|---|---|
| User access list current and matches HR / leaver records | `<<FILL: Yes / No>>` |
| Leavers and movers removed or adjusted within target time | `<<FILL: Yes / No, exceptions>>` |
| Privileged / administrator accounts justified and minimized | `<<FILL: count, all justified Y/N>>` |
| Segregation of duties intact (no maker-checker conflict) | `<<FILL: Yes / No>>` |
| Shared or generic accounts | `<<FILL: none, or controlled with justification>>` |
| Periodic access review completed and signed | `<<FILL: Yes / No, date and reviewer>>` |

Orphan accounts of leavers and over-privileged administrators are routine inspection hits. Confirm each administrator account maps to a named person and a documented need, and that no ordinary user can disable the audit trail.

## 10. Backup and disaster recovery status

Confirm backups run, complete, and have been proven restorable, and that disaster recovery and business continuity arrangements were tested within the required interval.

| Check | Finding |
|---|---|
| Backups scheduled and completing successfully | `<<FILL: Yes / No, failure count>>` |
| Backup failures investigated and resolved | `<<FILL: Yes / No>>` |
| Restore test performed in period (a backup is not proven until restored) | `<<FILL: Yes / No, date and result>>` |
| Backup retention meets records retention requirement | `<<FILL: Yes / No>>` |
| Backups stored offsite / logically separated | `<<FILL: Yes / No>>` |
| DR / business continuity test performed in period | `<<FILL: Yes / No, date>>` |
| DR test met RTO / RPO targets | `<<FILL: Yes / No, RTO and RPO results>>` |

An untested backup is an assumption, not a control. The restore test, not the green backup log, is the evidence. State the RTO and RPO targets and the actual results from the DR test.

## 11. Data integrity

Confirm controls over the records the system holds remain effective across the ALCOA+ attributes for the period.

| ALCOA+ attribute | Control / evidence | Finding |
|---|---|---|
| Attributable | Every action ties back to a named individual through a personal login; no accounts are shared for actions that create or change data | `<<FILL>>` |
| Legible / enduring | Records and the audit trail stay readable, in a usable form, for the full retention period | `<<FILL>>` |
| Contemporaneous | The system clock is synchronized to a reliable source and protected from user change, so each entry is stamped at the moment it happens | `<<FILL>>` |
| Original / true copy | The first-captured record, and any verified copy that stands in for it, is identified and kept under control | `<<FILL>>` |
| Accurate | Audit trail review runs at the set frequency and any exception is investigated and resolved | `<<FILL>>` |
| Complete / consistent / available | Users cannot delete records, the full record set hangs together, and everything can be retrieved on demand throughout retention | `<<FILL>>` |

| Check | Finding |
|---|---|
| Audit trail enabled, complete, and reviewed per procedure | `<<FILL: Yes / No, reference review log>>` |
| Time synchronization verified | `<<FILL: Yes / No>>` |
| Electronic signature controls operating (where used) | `<<FILL: Yes / No / N/A>>` |
| Data integrity events / findings in period | `<<FILL: none, or detail and action>>` |

State whether the audit trail review for this system actually happened across the period, with a reference to the records. A periodic review that asserts data integrity without naming the audit trail review evidence is incomplete.

## 12. Conclusion on continued validated state

State a clear, single conclusion supported by the sections above, using one of the defined outcomes.

| Field | Entry |
|---|---|
| Overall conclusion | `<<FILL: choose one>>` |
| Basis for conclusion | `<<FILL: summarize the evidence from sections 5 to 11>>` |

Defined outcomes:

- **Validated, no action required.** All sections satisfactory; the system remains in a validated state and the data remains trustworthy.
- **Validated, actions required.** The system remains usable, but defined actions are needed within set timeframes to maintain the validated state. Use is permitted while actions are tracked.
- **Validated state in question.** Evidence indicates the system may no longer be validated or data may be at risk. Define interim controls, escalate, and trigger remediation or re-validation before continued reliance.

Do not soften the conclusion to avoid an action. A defensible "validated with actions" beats an unsupported "fully validated" every time an inspector pulls the underlying evidence.

## 13. Actions

| Action no. | Action | Owner | Due date | Linked record (CAPA / change) | Status |
|---|---|---|---|---|---|
| `<<FILL: 1>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: 2>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

Actions that require formal tracking are raised as CAPA or change records and referenced here; this report tracks status but is not a substitute for the CAPA system.

## 14. Next review

| Field | Entry |
|---|---|
| Next review due | `<<FILL: date, set from risk-based frequency>>` |
| Frequency basis | `<<FILL: risk classification driving the interval>>` |
| Trigger for earlier review | `<<FILL: e.g. major change, repeated incidents, vendor end-of-support>>` |

## 15. References

> 21 CFR Part 11 (electronic records and electronic signatures).
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment) and 211.180 (records retention).
> EU GMP Annex 11 (computerised systems), in particular sections on periodic evaluation, security, audit trails, and business continuity.
> EU GMP Chapter 4 (documentation) and Chapter 6 (quality control records).
> MHRA GxP Data Integrity Guidance and Definitions.
> PIC/S PI 041, Good Practices for Data Management and Integrity.
> ICH Q9, Quality Risk Management (for the risk-based review frequency and depth).
> ISPE GAMP 5 (a risk-based approach to compliant GxP computerized systems), for periodic review expectations.

Confirm the current version and clause numbers of each reference before issue.

## 16. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 17. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (System Owner / Validation) | `<<FILL>>` | | |
| Reviewer (IT / System Administrator) | `<<FILL>>` | | |
| Approver (Quality Assurance) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the same report completed for an example laboratory information management system, so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| System name and ID | Laboratory Information Management System, asset LIMS-PROD-01 |
| Review period | 01 May 2025 to 30 April 2026 |
| Trigger | Scheduled, annual (high-risk classification) |
| Risk classification | High: owns QC release-testing results and stability data; GAMP category 4 configured product |
| Validation status | Validated; latest validation summary report VSR-2024-009 current; live configuration matches approved design after verifying two configuration changes; RTM intact. Conclusion: validated. |
| Changes in period | 7 total. 5 minor configuration changes, 1 vendor patch, 1 added interface to the stability chamber monitor. All under change control. The interface change carried a validation impact assessment and a targeted re-test (CR-2026-031); re-validation completed and closed. No unauthorized changes found on configuration cross-check. |
| Deviations / incidents | 3 deviations, 1 unplanned outage (2.5 hours, failover restored service, no data loss), 0 security events. All investigated and closed. One deviation (delayed result entry) recurred twice; pattern noted and fed to CAPA. |
| CAPA status | 2 open, 0 overdue. CAPA-2026-018 (recurring delayed entry) on track, due 30 June 2026. 3 CAPAs closed in period, all effectiveness-checked. |
| Access review | Annual access review completed 15 April 2026 by the QC manager. 4 leavers removed within 1 working day each. 3 administrator accounts, all named and justified. Segregation of duties intact; no shared accounts; no orphan accounts found. |
| Backup and DR | Daily backups completing; 2 failures in period, both investigated and re-run successfully. Restore test performed 12 February 2026, full database restored and verified. Backups retained 7 years offsite. DR test performed 20 March 2026: RTO target 4 hours, achieved 3 hours 10 minutes; RPO target 24 hours, achieved under 1 hour. Targets met. |
| Data integrity | Audit trail enabled and complete; audit trail reviews performed each release run per SOP-QA-014, exceptions handled; one re-integration without a reason raised as DEV-2026-0142 and resolved. Time synchronization verified. Electronic signatures operating. No data integrity findings. |
| Overall conclusion | Validated, actions required. The system remains in a validated state and data is trustworthy; two actions are open to address the recurring delayed-entry deviation and to schedule the next vendor patch. Use permitted while actions are tracked. |
| Actions | (1) Close CAPA-2026-018 root-cause fix for delayed entry, owner QC manager, due 30 June 2026. (2) Plan and impact-assess vendor patch v8.4 before vendor end-of-support, owner system owner, due 31 August 2026. |
| Next review due | 30 April 2027 (annual, high-risk); earlier if a major change or vendor end-of-support occurs. |

In this example the reviewer gathered evidence across every section, cross-checked the change log against the live configuration, named the restore test rather than the backup log as the proof, named the audit trail review evidence rather than asserting integrity, spotted a recurring deviation and tracked it to CAPA, and reached an honest "validated with actions" conclusion with owned, dated actions. That sequence, evidence to conclusion to tracked action, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this report prevents

- Periodic review is required by procedure but no report exists, or reports are years overdue.
- The report asserts "system remains validated" with no evidence: no change list, no deviation list, no access review, no backup or DR evidence cited.
- A change found on the live system is absent from the change log and from the review.
- The review claims data integrity but never names whether the audit trail review actually happened during the period.
- Backups are reported as successful but no restore or DR test was ever performed, so recoverability is assumed, not proven.
- Leaver and over-privileged administrator accounts persist with no access review on record.
- Open and overdue CAPAs and prior-review actions are not carried forward or are silently dropped.
- The conclusion is "fully validated" while the body shows unresolved issues, so the conclusion is not supported by its own evidence.

## How to adapt this report

1. Set your document number, owner, system ID, and review period in the header.
2. Set the review frequency and depth from your own risk classification in section 4; a low-risk read-only system needs less than a high-risk system owning release data.
3. Point every input in section 3 to your real change, deviation, CAPA, access, backup, DR, and audit trail records, and attach or reference them.
4. Pull actual records into sections 5 to 11; do not paraphrase the logs, cite them and attach the evidence.
5. Carry forward open actions from the previous periodic review and from CAPA so nothing is dropped between cycles.
6. Choose one of the three defined conclusions in section 12 and make sure the body supports it; raise formal actions as CAPA or change records and reference them in section 13.
7. Confirm every regulation in section 15 against the current published version before issue.
