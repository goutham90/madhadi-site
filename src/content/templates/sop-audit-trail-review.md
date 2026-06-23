---
title: "SOP: Audit Trail Review for GxP Computerized Systems"
description: "A plug-and-play standard operating procedure for risk-based audit trail review: frequency, what to review, how to document the review, exception handling, and escalation, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "SOP"
pillar: "data-integrity"
relatedArticles: ["audit-trail-design-and-review", "operationalizing-audit-trail-review", "data-criticality-and-data-risk"]
tags: ["audit trail", "data integrity", "SOP", "21 CFR Part 11", "Annex 11", "review"]
tier: "Intermediate"
---

This is a ready-to-use SOP. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Audit Trail Review for GxP Computerized Systems |
| Document number | `<<FILL: SOP-ID, e.g. SOP-QA-014>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Quality Assurance>>` |
| Applies to | `<<FILL: sites / departments in scope>>` |

## 1. Purpose

This procedure defines how `<<FILL: COMPANY NAME>>` reviews audit trails of GxP computerized systems so that changes to electronic records are visible, attributable, and assessed for impact. The objective is to detect unauthorized, unexplained, or quality-relevant changes to data and to confirm that records remain trustworthy across their lifecycle.

## 2. Scope

This procedure applies to all computerized systems that create, modify, or store GxP records at the sites listed in the header, including laboratory systems, manufacturing execution and automation systems, and quality systems. It covers both system-generated audit trails and any manual logbooks that serve the same control purpose. It does not replace periodic system review, which is governed by `<<FILL: SOP-ID for periodic review>>`.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| System owner | Confirms the audit trail is enabled, complete, and cannot be disabled by ordinary users; ensures reviewers have read access to the audit trail. |
| Reviewer (process SME or QC) | Performs the audit trail review at the defined frequency, documents the outcome, and raises exceptions. |
| Quality Assurance | Approves the review record, oversees exception handling, and confirms reviews happen on schedule. |
| IT / system administrator | Maintains the technical configuration, time synchronization, and access controls that make the audit trail reliable. |

## 4. Definitions

- **Audit trail**: a protected, system-produced log, with each entry carrying its own date and time, that captures who did what to a record so the full history of how the record was created, altered, or removed can be traced back later. See 21 CFR Part 11 and EU GMP Annex 11 section 9 for the controlling requirements.
- **Critical audit trail entry**: a change to data or metadata that could affect a result, a decision, or product quality (for example a changed result, a re-integration, a changed sequence, a deleted file, a changed clock, a changed user privilege).
- **Review by exception**: a method where validated tools filter the audit trail so reviewers focus on the entries that matter, rather than reading every line.

## 5. Procedure

### 5.1 Set the review frequency by risk

Set frequency from the criticality of the data the system holds. Use the table below as the default and document the basis for each system in the system inventory.

| Data criticality | Default review frequency | Examples |
|---|---|---|
| High | Each batch or each analytical run, before the result is used | Release testing, batch disposition data, sterility results |
| Medium | Weekly or monthly | In-process checks, environmental monitoring trends |
| Low | At periodic review | Reference-only or non-decision data |

### 5.2 Decide what to review

At each review, examine at least the following for the period since the last review:

1. Changes to results, calculations, and re-integrations, with the stated reason.
2. Deletions of data, files, or sequences.
3. Aborted, repeated, or renamed runs and any "test" or "trial" injections.
4. Changes to the system clock, time zone, or date format.
5. Changes to user accounts, roles, and privileges.
6. Any audit trail gaps, disabled periods, or entries without a recorded reason.

### 5.3 Perform the review

1. Confirm the audit trail was enabled and complete for the entire period.
2. Apply the validated filter or query that surfaces critical entries (review by exception), or read the full trail where no validated filter exists.
3. For each critical entry, confirm the change is authorized, explained, and consistent with the paper or electronic batch or test record.
4. Where a change lacks a reason or looks inconsistent, raise an exception per section 5.4.

### 5.4 Handle exceptions

1. Record the exception on the review record with the entry detail and your initial assessment.
2. Notify the system owner and Quality Assurance the same working day.
3. Open a deviation or investigation per `<<FILL: SOP-ID for deviations>>` when the change could affect a result, a decision, or product quality.
4. Do not release or use the affected data until the exception is resolved.

### 5.5 Document and approve

1. Complete the audit trail review record (section 8) for every review, including reviews with no findings.
2. The reviewer signs and dates the record.
3. Quality Assurance reviews and approves within `<<FILL: number>>` working days.
4. Retain the record per the records retention schedule, for not less than `<<FILL: retention period>>`.

## 6. Acceptance criteria

A review is acceptable when all of the following are true:

- The audit trail was enabled and complete for the whole period, with no unexplained gaps.
- Every critical entry is authorized, explained, and consistent with the corresponding record.
- All exceptions are recorded and routed, and no affected data was used before resolution.
- The review record is complete, signed, dated, and approved within the defined time.

## 7. References

> 21 CFR 211.68 (automatic equipment), 211.194 (laboratory records).
> 21 CFR Part 11 (electronic records and signatures).
> EU GMP Annex 11, section 9 (audit trails) and Annex 11 general principles.
> MHRA GxP Data Integrity Guidance and Definitions.
> PIC/S PI 041, Good Practices for Data Management and Integrity.
> ICH Q9, Quality Risk Management (for the risk-based frequency).

Confirm the current version and clause numbers of each reference before issue.

## 8. Record generated: audit trail review record

| Field | Entry |
|---|---|
| System name and ID | `<<FILL: SYSTEM NAME / ID>>` |
| Review period | `<<FILL: from date>>` to `<<FILL: to date>>` |
| Review frequency basis | `<<FILL: High / Medium / Low and why>>` |
| Audit trail complete for period | Yes / No (if No, raise exception) |
| Critical entries reviewed | `<<FILL: count>>` |
| Findings / exceptions | `<<FILL: none, or list with detail>>` |
| Deviation reference (if raised) | `<<FILL: number or N/A>>` |
| Reviewer (name, signature, date) | `<<FILL>>` |
| QA approval (name, signature, date) | `<<FILL>>` |

## 9. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 10. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (QA) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the same record completed for an example chromatography data system, so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| System name and ID | Chromatography Data System, instrument HPLC-07 |
| Review period | 01 June 2026 to 07 June 2026 |
| Review frequency basis | High: system holds release-testing results, reviewed each analytical run before the result is used |
| Audit trail complete for period | Yes |
| Critical entries reviewed | 14 (4 re-integrations, 2 aborted runs, 8 sequence edits) |
| Findings / exceptions | One re-integration on run HPLC-07-2206-031 had no reason recorded. Exception raised. |
| Deviation reference (if raised) | DEV-2026-0142 |
| Reviewer | A. Patel, signed, 08 June 2026 |
| QA approval | R. Gomez, signed, 09 June 2026 |

In this example the reviewer found a re-integration without a recorded reason, raised it the same day, opened a deviation, and held the result until the analyst and QA confirmed the re-integration was scientifically justified and updated the record. That sequence, finding to exception to deviation to hold, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this SOP prevents

- Audit trail review is required by procedure but no records show it was performed.
- Reviews are signed but show no evidence that critical entries were actually examined.
- A changed or re-integrated result has no recorded reason and was used anyway.
- The same person who made the changes is the only person who reviewed them, with no QA oversight.
- Review frequency is fixed for every system with no link to data criticality.

## How to adapt this SOP

1. Set your document number, owner, and effective date in the header.
2. Replace the generic system categories in section 5.1 with your actual system inventory and the criticality you assigned each one.
3. Point the cross-references in sections 2, 5.4, and 5.5 to your real deviation, periodic review, and retention procedures.
4. If you use review by exception, name the validated filter or report and reference its validation record.
5. Confirm every regulation in section 7 against the current published version before issue.
