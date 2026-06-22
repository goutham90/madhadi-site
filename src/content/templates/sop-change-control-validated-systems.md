---
title: "SOP: Change Control for Validated Systems"
description: "A plug-and-play standard operating procedure for managing change to validated computerized systems: triggers, categorization, impact assessment, approval sequence, revalidation scope, emergency changes, and closure, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "SOP"
pillar: "csv-csa"
relatedArticles: ["change-control-validated-systems"]
tags: ["change control", "csv", "validation", "revalidation", "configuration management", "SOP"]
tier: "Intermediate"
---

This is a ready-to-use SOP. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed change reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Change Control for Validated Systems |
| Document number | `<<FILL: SOP-ID, e.g. SOP-VAL-021>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Validation / CSV>>` |
| Applies to | `<<FILL: sites / departments in scope>>` |

## 1. Purpose

This procedure defines how `<<FILL: COMPANY NAME>>` controls changes to validated computerized systems so that each system stays in a validated state across its life. The objective is to make sure every change to a validated system is identified, assessed for impact, approved before it is implemented, tested in proportion to its risk, and recorded against a current configuration baseline.

## 2. Scope

This procedure applies to all GxP computerized systems that have been validated or are under validation at the sites listed in the header, including laboratory systems, manufacturing execution and automation systems, quality systems, and the interfaces between them. It covers changes to software, hardware, operating environment, configuration, user roles that affect GxP functions, data retention and backup configuration, interfaces, and intended use.

It does not cover changes entirely outside the GxP scope of a system (for example a non-regulated display language or a non-GxP report layout). It does not replace process or equipment change control for manufacturing, which is governed by `<<FILL: SOP-ID for process change control>>`, nor periodic review, which is governed by `<<FILL: SOP-ID for periodic review>>`. Deviations and CAPA arising from changes are handled under `<<FILL: SOP-ID for deviations>>` and `<<FILL: SOP-ID for CAPA>>`.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Change requestor / initiator | Raises the change, describes it accurately, provides the technical reason and any vendor release notes or documentation. |
| System owner / process owner | Owns the GxP context and intended use, confirms system criticality, accepts residual risk, and confirms business readiness. |
| System administrator / IT | Plans and executes the technical implementation, prepares and tests the rollback plan, updates infrastructure records. |
| Validation / CSV lead | Performs or reviews the impact and risk assessment, defines revalidation scope, writes and executes or reviews test protocols. |
| Quality Assurance | Reviews the assessment and scope for adequacy, approves the change before implementation, and approves closure. |
| Vendor / supplier (where applicable) | Provides release notes, regulatory support packages, and patch documentation under the quality agreement. |

## 4. Definitions

- **Change to a validated state**: any modification to the software, hardware, operating environment, configuration, GxP-relevant user roles, data handling, interfaces, or intended use of a validated system.
- **Impact and risk assessment**: the documented analysis of which validated functions a change can affect, the risk it carries, and the testing needed to confirm the validated state holds.
- **Configuration baseline**: the recorded exact configuration of a validated system at a point in time (software version, patch level, OS, database, application settings, GxP user roles, interface configurations).
- **Revalidation**: testing of affected validated functions to confirm they still meet requirements after a change. It is scoped to the affected functions, not the whole system.
- **Emergency change**: a change that must be implemented before the full prospective process can complete, for example a critical security patch or an infrastructure failure recovery.

## 5. Procedure

### 5.1 Identify whether a change control is required

Open a change control record for any change to the validated state of a system, including:

1. Software (version, patch, hotfix, configuration setting, custom code).
2. Hardware (server, client, peripheral devices, storage).
3. Operating system, database, virtualization layer, or middleware.
4. Validated interfaces with other systems.
5. User roles and permission matrices, where roles affect GxP functions.
6. Data retention, archival, or backup configuration.
7. Intended use (new user population, new data types, new business process).
8. Operating environment (new server, cloud migration, hosting region change).

When the GxP relevance is unclear, open a record. An unnecessary change control is administrative overhead; an unrecorded GxP change is a finding.

### 5.2 Raise the change and complete the record fields

The requestor opens a change control record (see the linked Change Request form) and completes: unique ID, title and plain-language description, the validated system and the specific configuration item affected, reason for change, requestor and date. The requestor's description is a starting hypothesis for the assessment, not a conclusion.

### 5.3 Perform the impact and risk assessment

The validation / CSV lead performs or reviews a documented impact and risk assessment (see the linked impact-and-risk assessment template). The assessment must:

1. List the GxP functions that could be affected, taken from the requirements traceability matrix or validated functions list, and state for each whether it is affected and why.
2. Confirm whether the change is within the validated design space.
3. Identify the risks, including unintended effects on validated functions, data integrity risk during the transition, configuration drift, and any effect on the audit trail or electronic records.
4. Conclude with one of: No impact, Low impact, or High impact, and state the testing required.

A conclusion of "no GxP impact" with no function-by-function analysis is not an assessment and will be rejected.

### 5.4 Categorize the change

Use the assessment to set the category. The category sets the default path and approvers; the assessment can always escalate.

| Category | When it applies | Reviewers | Testing | Typical timeline |
|---|---|---|---|---|
| 1 Minor | No GxP impact or trivial effects on non-critical functions | Requestor, QA | None or brief confirmatory | Days |
| 2 Major | Affects non-critical GxP functions or app-to-infrastructure interface | Requestor, IT, validation, QA | Targeted, affected areas | 2-4 weeks |
| 3 Significant | Affects critical GxP functions, core behavior, or architecture | Full cross-functional, QA sign-off mandatory | Revalidation of affected functions | 4-12 weeks |

If the change touches an ALCOA+ property of a record (attributable, legible, contemporaneous, original, accurate, plus complete, consistent, enduring, available), default to Category 3 and put the burden on the assessment to argue it down.

### 5.5 Plan implementation and testing

1. Document the implementation steps, sequence, who does what, and a rollback plan.
2. Define the test plan and acceptance criteria before implementation, covering challenge and boundary conditions, not only the expected path.
3. For software upgrades, obtain and review the vendor release notes; map each changed, added, or removed function to the validated functions list and scope testing to those functions.

### 5.6 Obtain pre-implementation approval

1. Route the record for approval per the category. QA approval is required before implementation for any change above Category 1.
2. The approval date must precede the implementation date. Build the workflow so this sequence is enforced, not just instructed.

### 5.7 Implement and test

1. Implement per the plan; record who implemented the change, when, and any deviations from the plan.
2. Execute the test protocol; record results and have a reviewer who did not perform the change review the evidence.
3. Manage any test failure through `<<FILL: SOP-ID for validation test failure management>>` with root cause and resolution recorded. Do not re-run a failed test to a pass without investigation.

### 5.8 Update the baseline and close

1. Update the configuration baseline to the new state, referencing this change control ID.
2. Confirm all testing is complete and all actions are closed.
3. QA reviews and approves closure within `<<FILL: number>>` working days.
4. Cross-reference any related deviation or CAPA.

### 5.9 Emergency changes

When a change must be implemented before the full process completes:

1. Implement with minimum necessary QA oversight, with verbal or email approval documented at the time.
2. Open the change control record no later than the next working day.
3. Complete the impact and risk assessment retrospectively.
4. Perform required testing as rapidly as possible.
5. Close normally. The analysis and testing are deferred, never skipped.

Define in `<<FILL: COMPANY NAME>>` what qualifies as an emergency so the route cannot be used to skip the queue. A backlog is not an emergency. Trend emergency-change frequency at `<<FILL: review interval>>`.

## 6. Acceptance criteria

A closed change control is acceptable when all of the following are true:

- The change has a unique record identifying what changed, when, why, who approved it, and the testing performed.
- The impact and risk assessment is function-by-function, not a generic statement, and its conclusion drives the test scope.
- Every affected validated function has executed test evidence with a documented pass, including challenge and boundary conditions.
- The approval date precedes the implementation date, and closure follows completion of all testing.
- The configuration baseline is updated to the new state and matches the live system.
- Any related deviation or CAPA is cross-referenced.

## 7. References

> EU GMP Annex 11 (Computerised Systems), sections 10 (change and configuration management) and 4 (validation).
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment) and 211.100 (written procedures).
> 21 CFR 820.30(i) (design changes) and 820.70(i) (automated process / device software validation).
> 21 CFR Part 11 (electronic records and signatures).
> GAMP 5: A Risk-Based Approach to Compliant GxP Computerized Systems, Second Edition (2022).
> FDA Computer Software Assurance for Production and Quality System Software (draft 2022, finalized 2025).
> ICH Q9 (Quality Risk Management) and ICH Q10 (Pharmaceutical Quality System).
> ICH Q8(R2), Q12 (design space and product lifecycle management, for the process-change analogue).
> PIC/S PI 011 (Good Practices for Computerised Systems in GxP Environments).

Confirm the current version and clause numbers of each reference before issue.

## 8. Records generated

- Change control record (the Change Request form and its impact-and-risk assessment).
- Executed test protocols and evidence.
- Updated configuration baseline.
- Closure approval.

Retain each per the records retention schedule, for not less than `<<FILL: retention period>>`.

## 9. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 10. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (Validation / CSV) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows a completed change run through this SOP for an example laboratory system, so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Change control ID | CC-2026-0142 |
| Title | Upgrade of LIMS from v8.2 to v8.4 (vendor minor release) |
| System / configuration item | Laboratory Information Management System, application version |
| Reason for change | Vendor release; includes rounding-engine and report-engine updates |
| Requestor and date | T. Okafor, 02 June 2026 |
| Impact and risk conclusion | High impact: rounding, OOS flagging, and CoA output affected |
| Category | 3 (Significant) |
| Test scope | Regression on rounding across boundary values, OOS triggers at spec limits, CoA before/after comparison; confirmatory checks on audit trail and e-signature |
| Pre-implementation approval | QA (R. Gomez) approved 09 June 2026 |
| Implementation date | 14 June 2026 (after approval) |
| Test result | Pass; one boundary-rounding case failed first run, investigated under test-failure SOP, root cause was a test data error, re-executed pass |
| Baseline updated | Application version 8.2.1 to 8.4.0, recorded against CC-2026-0142 |
| Closure | QA closed 18 June 2026 |

In this example the requestor described the release as routine, but the assessment found the upgrade touched the rounding and reporting engines that feed certificates of analysis, so it was categorized Significant and scoped to those functions plus confirmatory checks. Approval preceded implementation, the one test failure was investigated rather than silently re-run, and the baseline was updated on closure. That sequence, accurate assessment to risk-scoped testing to approval-before-implementation to baseline update, is exactly what a reviewer expects to see.

## Common inspection findings this SOP prevents

- A system was validated once, but later changes were never assessed, so the production system no longer matches the validation.
- The impact assessment is a copy-paste "no GxP impact" sentence with no function-by-function analysis.
- The implementation date precedes the approval date, making the change uncontrolled on its face.
- A change is closed before its test evidence is complete, or the evidence post-dates closure.
- The documented configuration baseline does not match the version actually running.
- A large fraction of changes are routed as emergencies because the normal process is too slow.
- Test failures were re-run until they passed with no failure investigation.

## How to adapt this SOP

1. Set your document number, owner, and effective date in the header.
2. Replace the category names and timelines in section 5.4 with your own tier scheme if it differs.
3. Point the cross-references in sections 2, 5.7, 5.8, and 5.9 to your real deviation, CAPA, test-failure, periodic review, and retention procedures.
4. If you use a validated workflow tool for change control, name it and reference its validation record, and confirm it enforces the approve-before-implement sequence.
5. For cloud and SaaS systems, add the vendor update-notification timeline from the quality agreement, since you cannot assess a change you learn about after it ships.
6. Confirm every regulation in section 7 against the current published version before issue.
