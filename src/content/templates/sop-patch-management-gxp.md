---
title: "SOP: Patch Management for GxP Computerized Systems"
description: "A plug-and-play SOP for risk-based patching of validated GxP systems: patch classification, the standing regression test for pre-approved patches, test-before-production, backup and rollback, CMDB and baseline update, and the GxP-impact triage gate, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-26
docType: "SOP"
pillar: "csv-csa"
relatedArticles: ["it-change-and-configuration-management-gxp"]
tags: ["patch management", "change control", "configuration management", "csv", "data integrity", "SOP"]
tier: "Intermediate"
---

This is a ready-to-use SOP for patching validated GxP systems without re-validating from scratch every month and without leaving known vulnerabilities open. It pairs with the [Configuration Management and Baseline Standard](/templates/standard-configuration-management-baseline), the [Change Request and Change Control Record](/templates/form-change-request-record), and the [Emergency Change Work Instruction](/templates/wi-emergency-change-gxp). Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control. A worked filled specimen follows the template. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Patch Management for GxP Computerized Systems |
| Document number | `<<FILL: SOP-ID, e.g. SOP-IT-018>>` |
| Version | `<<FILL: version>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. IT Quality Lead>>` |
| Applies to | `<<FILL: GxP systems / sites in scope>>` |

## 1. Purpose

This procedure defines how `<<FILL: COMPANY NAME>>` evaluates, classifies, tests, applies, and records patches to validated GxP computerized systems so that the validated state is maintained, security vulnerabilities are remediated on a risk basis, and every change to a GxP system has a corresponding controlled record.

## 2. Scope

This procedure applies to operating system, database, middleware, firmware, application, driver, and security patches on systems in the validated GxP inventory, including their underlying infrastructure. It applies to on-premises, virtualized, IaaS, and PaaS hosting. For SaaS, where the vendor applies the patch, it governs the assessment of vendor-notified changes per the quality agreement. It works under the change control SOP (`<<FILL: SOP-ID>>`) and the configuration management standard (`<<FILL: doc-ID>>`).

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| IT change / service management | Raises and schedules patch changes, executes infrastructure patches, maintains the CMDB. |
| System owner | Accountable for keeping the system validated; approves patch changes; ensures testing is adequate. |
| CSV / validation | Reviews the impact assessment, defines required regression testing, confirms validated state restored. |
| QA / Quality | Approves GxP-impacting patch changes, gates go-live, reviews the standing regression evidence. |
| SME / process owner | Confirms whether the patch affects the GxP process and its data; helps scope regression testing. |
| Vendor / supplier | Provides release notes, known issues, supported paths; for SaaS, executes and evidences the change. |

## 4. Definitions

- **Patch**: any vendor or internally produced change to software or firmware on a GxP system, from a security rollup to a major version upgrade.
- **Standing regression test**: a pre-defined, version-controlled set of GxP-critical checks (functions, reports, interfaces, calculations, audit-trail and login checks) run for routine pre-approved patches.
- **Pre-approved (standard) change**: a low-risk, repeatable patch class authorized in advance, executed with the standing regression test and a documented rationale, without a fresh full change control each cycle.
- **GxP-impact triage gate**: the screen that determines whether a change touches a validated GxP system and therefore requires the GxP change path.

## 5. Procedure

### 5.1 Intake and triage

Vendors or the security team announce patches. The system owner and a CSV or IT-quality reviewer read the release notes and security advisories. Pass every patch through the GxP-impact triage gate (does it touch a system in the validated GxP inventory) using the CMDB GxP flag. Classify each patch with the model in 5.2 and record the classification rationale, especially the "no GxP-relevant change" judgment.

### 5.2 Classify the patch

| Patch class | Examples | GxP impact | Route |
|---|---|---|---|
| Security, no functional change | OS security rollup, library CVE fix, certificate rotation | Low, no change to GxP function | Pre-approved standard change with the standing regression check |
| Functional or minor version | Service pack, minor app or DB version, driver update | Possible, depends on what changed | Normal change control, targeted regression testing |
| Major version or platform | Major OS or DB upgrade, infrastructure migration, hypervisor change | High, behavior may change | Full change control, formal impact assessment, likely re-validation activities |
| Emergency security | Actively exploited zero-day | Restore security now, assess after | [Emergency change](/templates/wi-emergency-change-gxp), retrospective GxP review |

### 5.3 Apply remediation timelines by vulnerability severity

For security patches, set a target remediation window from the vulnerability severity and the system exposure. Track open items to closure. These are example targets; set yours on your risk policy.

| Vulnerability severity | Internet-facing / high exposure | Internal / segmented GxP system |
|---|---|---|
| Critical (e.g. actively exploited) | `<<FILL: e.g. 48-72 hours, emergency path>>` | `<<FILL: e.g. 7 days>>` |
| High | `<<FILL: e.g. 7-14 days>>` | `<<FILL: e.g. 30 days>>` |
| Medium | `<<FILL: e.g. 30-60 days>>` | `<<FILL: e.g. next maintenance window>>` |
| Low | `<<FILL: next scheduled cycle>>` | `<<FILL: next scheduled cycle>>` |

You cannot use "it is validated" as a reason to run a system with a known-exploited, unpatched critical vulnerability; that is itself a quality and compliance risk.

### 5.4 Impact assessment (normal and major changes)

Assess whether the patch touches a baseline-controlled setting, a calculation, an audit trail, an interface, a report, time handling, or access control. List the affected GxP functions and decide the testing needed.

### 5.5 Schedule and approve

Pre-approved patches go into the standing maintenance window. Normal and major changes get a change control record approved by the system owner, QA, and where relevant the vendor or SME, before implementation.

### 5.6 Test in a representative non-production environment

Apply to a qualified test or staging environment that mirrors production. Run the regression set: GxP-critical functions, reports, interfaces, calculations, an audit-trail spot check, and a login/role check. Record the evidence.

### 5.7 Back up and confirm rollback

Before applying to production, take a verified backup and, for virtual systems, a snapshot or restore point. Confirm the rollback path actually works, not just that it exists.

### 5.8 Apply to production and verify

Apply in the maintenance window, then run the production verification: a smoke test of the GxP-critical paths and a confirmation that the audit trail still records and the system clock is correct.

### 5.9 Update records

Update the CMDB version fields, the configuration baseline if a setting changed, and close the change record with the test evidence attached.

### 5.10 Periodic review

At periodic review, confirm running versions match the CMDB and that every patch applied since the last review has a corresponding record. No GxP system should be found running a version with no change record.

## 6. Acceptance criteria

- Every GxP system has a defined patch policy (cadence, classification model, approvers).
- Known critical vulnerabilities on GxP systems are tracked to closure on risk-based timelines.
- Pre-approved patch changes carry a standing regression test that is actually executed each cycle, with evidence.
- Test-environment results precede every production change for normal and major patches.
- After every change, the audit trail and system clock are explicitly checked.
- No GxP system is found running a version that has no corresponding change record.

## 7. Records generated

- Patch classification and rationale record.
- Standing regression test execution evidence (pre-approved patches).
- Change control records (normal and major patches).
- Production verification record; CMDB and baseline updates.
- Vulnerability remediation tracker.

## 8. References

> EU GMP Annex 11, clause 10 (controlled change); the system inventory expectation in clause 4.3. (A substantially expanded draft revision, including more on cybersecurity and cloud, was issued for consultation on 7 July 2025; confirm the in-force version before issue.)
> 21 CFR 211.68(a) and (b) (controls and changes by authorized personnel); 21 CFR 11.10(a), 11.10(k)(2) (validation; revision and change control with an audit trail).
> GAMP 5 Second Edition (ISPE, 2022), operational-phase processes.
> PIC/S PI 011-3, Good Practices for Computerised Systems in Regulated GxP Environments.

Confirm the current version and clause numbers before issue.

## 9. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 10. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (CSV) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

Illustrative pre-approved monthly OS security patch on a validated LIMS server. Replace with your own.

| Field | Entry |
|---|---|
| Patch | Monthly OS security rollup, no functional change per vendor release notes |
| Triage gate | LIMS is a validated GxP system (CMDB GxP flag = Yes) |
| Classification | Security, no functional change. Pre-approved standard change. Rationale: release notes reviewed, no GxP-relevant change identified |
| Remediation window | High-severity items, internal system: 30 days; this rollup scheduled in the monthly window |
| Standing regression test | REG-LIMS-02 run in staging: login/role check, sample login, result entry and calculation, CoA report, interface to CDS, audit-trail spot check. All pass |
| Backup / rollback | Verified backup taken; VM snapshot confirmed restorable |
| Production verify | Smoke test of result entry and CoA passed; audit trail confirmed recording; clock correct |
| Records updated | CMDB OS build field updated; baseline unchanged (no setting changed); change record CHG-2026-0411 closed with evidence |

This is how routine patching runs at IT speed while staying controlled: a standing test, a documented rationale, and a closed record, every cycle.

## Common inspection findings this SOP prevents

- Infrastructure patches on GxP systems with no corresponding change record (the most common seam finding).
- "Standard change" used as a loophole where the standing regression test is never actually run.
- Patches applied straight to production with no representative test environment.
- An audit trail silently disabled by a patch and not checked afterward.
- A documented rollback that was never tested, so a failed change leaves the system in an unknown state.
- A GxP system left running a known-exploited critical vulnerability behind "it is validated."

## How to adapt this SOP

1. Set your document number, owner, and effective date.
2. Set the remediation timelines in 5.3 to your security risk policy.
3. Name your standing regression test set per system and reference its validation.
4. Point the cross-references to your real change control, configuration management, and emergency change procedures.
5. Confirm every regulation in section 8 against the current published version, including the in-force status of Annex 11, before issue.
