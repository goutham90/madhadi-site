---
title: "Matrix: Requirements-to-Test Traceability Matrix"
description: "A plug-and-play traceability matrix that links each requirement to its risk classification, design or configuration reference, test case, and result under FDA CSA, so coverage and the risk-to-test logic are reconstructable, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Matrix"
pillar: "csv-csa"
relatedArticles: ["computer-software-assurance-fda"]
tags: ["traceability matrix", "rtm", "csa", "requirements", "csv", "validation"]
tier: "Intermediate"
---

This is a ready-to-use requirements-to-test traceability matrix (RTM) built to carry the CSA risk-to-test logic, not just a tick of coverage. It links each requirement to its intended use, its risk classification, the design or configuration that implements it, the test case that verifies it, and the result. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template. Confirm each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Requirements-to-Test Traceability Matrix for `<<FILL: SYSTEM NAME>>` |
| Document number | `<<FILL: RTM-ID, e.g. RTM-CSV-021>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Document owner | `<<FILL: role, e.g. Validation Lead>>` |
| Linked URS | `<<FILL: URS-ID>>` |
| Linked risk assessment | `<<FILL: RA-ID>>` |
| Linked test plan | `<<FILL: TP-ID>>` |

## 1. Purpose

This matrix demonstrates that every GxP requirement for `<<FILL: SYSTEM NAME>>` is implemented, classified for risk, and verified by a test of the right depth, and that no test exists without a requirement behind it. It is the document an inspector reads to confirm two things at once: that coverage is complete, and that the testing method for each requirement matches its risk under CSA. The matrix is the spine that ties the requirements, the risk assessment, and the test plan into one reconstructable chain.

## 2. Scope

This matrix covers every requirement in the linked URS that has GxP relevance, plus any regulatory requirement (Part 11, Annex 11, data integrity) that the system must meet whether or not a user wrote it as a URS line. It traces each requirement forward to design or configuration, to the test case, and to the result, and backward from each test case to its requirement. Non-GxP requirements may be listed for completeness but are marked out of GxP scope with a reason. This matrix records traceability and coverage; it does not re-decide risk (that is the risk assessment) or define test depth (that is the test plan).

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Validation / CSV lead | Owns the matrix, keeps it synchronized with the URS, risk assessment, and test plan, and confirms no gaps or orphans. |
| Test author | Confirms each requirement has a test case of the assigned method and that each test case cites its requirement. |
| System / business owner | Confirms the requirements listed reflect the real intended use of the system. |
| Quality Assurance | Approves the matrix and confirms completeness, two-way traceability, and that the method per requirement matches the risk assessment. |

## 4. Definitions

- **Forward traceability**: each requirement traces to a design or configuration item and to at least one test case.
- **Backward traceability**: each test case traces to at least one requirement, so no test exists without a reason.
- **Coverage gap**: a requirement with no test case, or with a test case of a method lighter than its risk demands.
- **Orphan test**: a test case with no requirement behind it.
- **Verification status**: the result state of the requirement's test: Pass, Fail, In progress, or Not started.

## 5. How to use the matrix

1. List every GxP requirement, one row per requirement, using the URS ID where one exists.
2. Carry the risk classification and assurance method for each requirement from the linked risk assessment; do not assign a method here.
3. Link each requirement forward to the design or configuration item that implements it and to the test case that verifies it.
4. Confirm backward traceability: every test case in the test plan appears against a requirement here, with no orphans.
5. Record the verification status as testing proceeds, and reference the deviation or test incident for any failure.
6. Before the validation summary, confirm zero coverage gaps and zero orphan tests, and that every direct-impact requirement carries a scripted test case.

## 6. Traceability matrix

Complete one row per requirement. The column set is what makes the matrix carry the CSA logic rather than a bare coverage tick.

| Req ID | Requirement (what the system must do) | GxP? | Risk class (from RA) | Assurance method (from RA) | Design / config ref | Test case ID(s) | Verification status | Deviation ref (if failed) |
|---|---|---|---|---|---|---|---|---|
| `<<FILL: URS-001>>` | `<<FILL: requirement text>>` | `<<FILL: Y/N>>` | `<<FILL: High/Med/Low>>` | `<<FILL>>` | `<<FILL: DS / config ID>>` | `<<FILL: TC-ID>>` | `<<FILL: Pass/Fail/In progress/Not started>>` | `<<FILL: N/A or DEV-ID>>` |
| `<<FILL: URS-002>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: URS-003>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 7. Coverage summary

Complete this summary before the validation summary report. It is the at-a-glance proof of completeness an inspector looks for first.

| Metric | Value |
|---|---|
| Total GxP requirements | `<<FILL: count>>` |
| Direct-impact (high-risk) requirements | `<<FILL: count>>` |
| Direct-impact requirements with a scripted test case | `<<FILL: count>>` (target: all) |
| Requirements with no test case (coverage gaps) | `<<FILL: count>>` (target: zero) |
| Test cases with no requirement (orphan tests) | `<<FILL: count>>` (target: zero) |
| Requirements passed | `<<FILL: count>>` |
| Requirements failed / open | `<<FILL: count>>` |

## 8. Acceptance criteria

This matrix is acceptable when all of the following are true:

- Every GxP requirement in the URS appears as a row, plus every applicable Part 11, Annex 11, and data integrity requirement whether or not a user wrote it as a URS line.
- Each requirement traces forward to a design or configuration item and to at least one test case (no coverage gaps).
- Each test case in the test plan traces backward to at least one requirement (no orphan tests).
- The risk class and assurance method on each row match the linked risk assessment, with no silent downgrades.
- Every direct-impact (high-risk) requirement carries a scripted test case, and audit trail, electronic signature, and access controls carry scripted test cases regardless of other scoring.
- Verification status is recorded for every requirement, and every failure references its deviation or test incident.
- The coverage summary shows zero gaps and zero orphans before the validation summary is signed.

## 9. References

> 21 CFR Part 11 (electronic records and signatures).
> 21 CFR Part 211 (drug cGMP) and 21 CFR Part 820 as revised by the Quality Management System Regulation (device).
> FDA, Computer Software Assurance for Production and Quality Management System Software, Final Guidance (February 3, 2026, superseding the September 24, 2025 version).
> FDA, General Principles of Software Validation (CDRH, January 2002).
> ISPE GAMP 5, Second Edition (specification and verification approach, traceability).
> EU GMP Annex 11, Computerised Systems.
> PIC/S PI 041, Good Practices for Data Management and Integrity.

Confirm the current version and clause numbers of each reference before issue.

## 10. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 11. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (CSV lead) | `<<FILL>>` | | |
| System / business owner | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows a few completed rows and the coverage summary for an example laboratory information management system that holds release-testing data. The company, system, and numbers are illustrative; replace them with your own. The point of the specimen is to show how the matrix carries the risk-to-test logic, not just a coverage tick.

| Req ID | Requirement | GxP? | Risk class | Method | Design / config ref | Test case ID(s) | Status | Deviation ref |
|---|---|---|---|---|---|---|---|---|
| URS-004 | The system shall flag any result outside the configured specification and route it to the OOS process | Y | High (direct) | Rigorous scripted | CS-2.3 limit config | TC-04-01 to TC-04-06 | Pass | N/A |
| URS-009 | An approver shall apply an electronic signature binding identity, meaning, and timestamp to a released result | Y | High (direct, Part 11) | Rigorous scripted | CS-4.1 e-sig config | TC-09-01 to TC-09-04 | Pass | N/A |
| URS-011 | The system shall record an audit trail of every result edit (who, when, old value, new value, reason) | Y | High (direct, Part 11) | Rigorous scripted | CS-5.2 audit config | TC-11-01 to TC-11-05 | Fail | DEV-2026-0210 |
| URS-014 | The system shall restrict result entry, edit, and approval by role | Y | High (direct, access) | Scripted | CS-6.1 role matrix | TC-14-01 to TC-14-05 | Pass | N/A |
| URS-031 | The system shall let the analyst sort the sample worklist | Y (low) | Low (indirect) | Ad hoc / supplier | Vendor default | Covered by SA-2026-007 | Pass | N/A |
| URS-033 | The system shall export an approved result to a printable report | Y (low) | Low (indirect) | Exploratory | CS-8.4 report template | TC-33-EX-01 (exploratory summary) | Pass | N/A |

Coverage summary:

| Metric | Value |
|---|---|
| Total GxP requirements | 42 |
| Direct-impact (high-risk) requirements | 11 |
| Direct-impact requirements with a scripted test case | 11 (all) |
| Coverage gaps | 0 |
| Orphan tests | 0 |
| Requirements passed | 41 |
| Requirements failed / open | 1 (URS-011, see DEV-2026-0210) |

URS-011 shows what an open failure looks like in a live matrix: the audit trail test found that the reason-for-change field could be left blank on an edit, the row is marked Fail, the deviation is referenced, and the validation summary cannot be signed until the configuration is corrected and TC-11-01 to TC-11-05 are re-executed to a pass. An inspector reading this matrix can see the gap, the deviation, and the path to closure without asking a single question.

## Common inspection findings this matrix prevents

- A requirement with no test behind it, so coverage cannot be demonstrated.
- A test case with no requirement (an orphan), suggesting scope crept beyond what was specified.
- A direct-impact requirement verified by a light test, with no record that the method should have been scripted.
- Part 11 or data integrity requirements that never appear because no user wrote them as a URS line.
- A matrix that claims full coverage but cannot be reconciled to the risk assessment that set the test depth.
- A failed requirement marked "pass" or left blank, so the open gap is invisible at summary.
- A validation summary signed while coverage gaps or orphan tests still exist.

## How to adapt this matrix

1. Set your document numbers and link the URS, risk assessment, and test plan in the header.
2. List every GxP requirement, then add every applicable Part 11, Annex 11, and data integrity requirement even if no user wrote it as a URS line.
3. Carry the risk class and assurance method for each row from the risk assessment; do not assign a method here.
4. Link each requirement forward to its design or configuration item and its test case, and confirm every test case in the test plan appears here (no orphans).
5. Keep the matrix live: update verification status and deviation references as testing proceeds.
6. Run the coverage summary before the validation summary, and do not sign while any gap or orphan remains.
7. Confirm every regulation in section 9 against the current published version before issue.
