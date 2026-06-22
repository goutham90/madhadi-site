---
title: "Plan: CSA-Aligned Software Test Plan"
description: "A plug-and-play test plan that allocates testing method by feature risk under FDA CSA: scripted for direct-impact features, exploratory for lower-risk, supplier evidence where justified, with sample test cases, acceptance criteria, a filled specimen, and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Plan"
pillar: "csv-csa"
relatedArticles: ["computer-software-assurance-fda"]
tags: ["csa", "test plan", "csv", "validation", "scripted testing", "exploratory testing"]
tier: "Advanced"
---

This is a ready-to-use test plan built on FDA's Computer Software Assurance principles. It takes the output of a feature risk assessment and turns it into a testable plan that allocates scripted, exploratory, and supplier-evidence approaches by risk. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template. Confirm each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | CSA-Aligned Test Plan for `<<FILL: SYSTEM NAME>>` |
| Document number | `<<FILL: TP-ID, e.g. TP-CSV-021>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Validation Lead>>` |
| Linked validation plan | `<<FILL: VP-ID>>` |
| Linked risk assessment | `<<FILL: RA-ID>>` |
| Linked traceability matrix | `<<FILL: RTM-ID>>` |

## 1. Purpose

This test plan defines how `<<FILL: COMPANY NAME>>` will generate assurance evidence for `<<FILL: SYSTEM NAME>>` by matching the testing method to each feature's risk. The plan implements the assurance method already decided in the linked risk assessment: rigorous scripted testing for direct-impact features, exploratory testing for lower-risk features, and reliance on supplier evidence where a documented supplier assessment supports it. The objective is sufficient assurance for intended use, with effort placed where the risk is.

## 2. Scope

This plan covers the GxP-relevant features of `<<FILL: SYSTEM NAME>>` listed in the linked risk assessment. It addresses operational testing (OQ) and user acceptance or performance testing (PQ / UAT) of those features. Installation qualification (IQ) of the platform is covered by `<<FILL: IQ protocol ID>>` and is referenced here, not repeated. This plan does not re-decide risk; it executes the assurance methods already determined. Any feature added or reclassified after approval requires a documented change to the risk assessment and this plan.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Validation / CSV lead | Owns the plan, assigns method per the risk assessment, and ensures the package ties back to the risk decisions. |
| Test author | Writes scripted test cases with predefined inputs, expected results, and acceptance criteria before execution. |
| Tester / executor | Executes the tests, records actual results, and routes failures without re-running until they pass. |
| Independent reviewer | Reviews critical (direct-impact) test evidence; cannot be the person who executed it. |
| Quality Assurance | Approves the plan and confirms that method allocation matches the risk assessment and that critical controls carry scripted rigor. |
| System / business owner | Confirms intended use is correctly reflected in the test scope. |

## 4. Definitions

- **Rigorous scripted testing**: predefined steps, inputs, expected results, and acceptance criteria, executed with documented evidence and independent review. Used for direct-impact features.
- **Limited scripted testing**: scripted steps and acceptance criteria with less independent oversight, used for medium-risk features where a downstream control reduces exposure.
- **Unscripted / exploratory testing**: a tester exercises the feature on expertise and judgment, with a purposeful written record of what was tested, what was sought, and what was found. Used for lower-risk features.
- **Ad hoc testing**: informal testing during routine use, suitable only for the lowest-risk features and recorded as covered by use.
- **Boundary case**: an input at, just inside, and just outside a configured limit.
- **Negative case**: an input that should be rejected or handled as an exception (blank, wrong unit, out-of-range, unauthorized).

## 5. Test approach by risk

### 5.1 Method allocation

Each feature carries the assurance method assigned in the linked risk assessment. The plan does not change those assignments. The mapping is repeated here so the test scope is self-contained.

| Resulting risk (from risk assessment) | Testing method in this plan |
|---|---|
| High | Rigorous scripted testing, independent review, boundary and negative cases |
| Medium | Limited scripted testing |
| Low to Medium | Unscripted / exploratory testing with a written record |
| Low | Ad hoc, covered by routine use, recorded as such |

Override: audit trail, electronic signature, and access and privilege controls are tested with scripted rigor regardless of their other scoring, per Part 11 and Annex 11.

### 5.2 Scripted testing requirements (direct-impact and override features)

Every scripted test case must have, defined before execution:

1. A unique test case ID and a link to the requirement it verifies (traceability matrix line).
2. Preconditions and test data, including the configured limit or rule under test.
3. Predefined steps with predefined expected results.
4. A pass / fail acceptance criterion stated before execution.
5. Boundary cases for any limit (on the limit, one increment inside, one increment outside).
6. Negative cases (blank, wrong unit, out-of-range, unauthorized attempt) where applicable.
7. A place to record the actual result, a pass or fail, the tester, the date, and any objective evidence captured.

A scripted test that checks only an obviously-passing and an obviously-failing value has not tested the limit; it has tested the middle of the range.

### 5.3 Exploratory testing requirements (lower-risk features)

Exploratory testing is purposeful, not clicking around. Each exploratory session must record:

1. The feature and the intended use being explored.
2. What the tester was looking for (charter or objective).
3. What was actually exercised.
4. What was found, including anything unexpected.
5. A statement that the feature met expectations, or a defect raised if it did not.

A screen recording or a structured exploratory template is acceptable as long as the record is purposeful and shows what was tested and found.

### 5.4 Use of supplier evidence

Where the risk assessment recorded supplier evidence for a feature, this plan references the supplier assessment and states what the site still verifies. The site does not re-execute testing the vendor performed rigorously, but it confirms the feature behaves correctly in the site configuration. A vendor certificate is not, by itself, the assurance record.

### 5.5 Test failure handling

A failed test step is recorded as a failure. It is not quietly re-run until it passes. Each failure is assessed for impact, a deviation or test incident is raised per `<<FILL: SOP-ID for test failure management>>`, the root cause and any configuration or requirement correction are documented, and the affected tests are re-executed under change control with the failure history preserved.

## 6. Test environment and data

| Field | Entry |
|---|---|
| Test environment | `<<FILL: validated test / staging environment, version>>` |
| Environment matches production config | `<<FILL: yes / differences listed>>` |
| Test data source | `<<FILL: controlled test data set / reference>>` |
| Software version under test | `<<FILL: build / release>>` |
| IQ reference (platform installed) | `<<FILL: IQ protocol ID and status>>` |

## 7. Scripted test scope (direct-impact and override features)

List each direct-impact and override feature, its method, and the test case set. One subsection per feature in the executed protocol; the table summarizes scope.

| Feature | Risk | Method | Test cases (count) | Boundary cases? | Negative cases? | Independent review? | RTM ref |
|---|---|---|---|---|---|---|---|
| `<<FILL: feature>>` | High | Rigorous scripted | `<<FILL>>` | `<<FILL: Y/N>>` | `<<FILL: Y/N>>` | Yes | `<<FILL>>` |
| `<<FILL>>` | High | Rigorous scripted | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Yes | `<<FILL>>` |

### 7.x Sample scripted test case (direct-impact feature)

The sample below shows the form every scripted test case takes for a configured limit check. Replace the feature, limit, and rows with your own.

| Step | Configured limit | Input | Expected behavior | Pass criterion | Actual result | Pass/Fail |
|---|---|---|---|---|---|---|
| 1 | `<<FILL: e.g. 95.0 - 105.0>>` | Value just inside upper limit | No flag; result accepted | Flag absent, status conforming | `<<FILL>>` | `<<FILL>>` |
| 2 | `<<FILL>>` | Value exactly on the limit | Behaves per the documented rule (on-limit conforming or not) | Behavior matches the rule | `<<FILL>>` | `<<FILL>>` |
| 3 | `<<FILL>>` | Value just outside upper limit | Flag raised; routed to the defined exception process | Flag present, exception triggered | `<<FILL>>` | `<<FILL>>` |
| 4 | `<<FILL>>` | Value just outside lower limit | Flag raised | Flag present | `<<FILL>>` | `<<FILL>>` |
| 5 | `<<FILL>>` | Blank entry | Entry rejected or flagged incomplete | No silent pass | `<<FILL>>` | `<<FILL>>` |
| 6 | `<<FILL>>` | Wrong unit vs the limit | Comparison rejected | No silent comparison | `<<FILL>>` | `<<FILL>>` |

## 8. Exploratory and supplier-evidence scope (lower-risk features)

| Feature | Risk | Method | Record type | Supplier assessment ref (if used) | RTM ref |
|---|---|---|---|---|---|
| `<<FILL: feature>>` | Low | Exploratory | Written session summary | `<<FILL: N/A or SA-ID>>` | `<<FILL>>` |
| `<<FILL>>` | Low | Ad hoc / supplier | Covered by use / SA reference | `<<FILL>>` | `<<FILL>>` |

## 9. Acceptance criteria

This test plan is executed acceptably when all of the following are true:

- Each feature was tested with the method assigned in the linked risk assessment, with no silent downgrades.
- Every scripted test case had predefined inputs, expected results, and a pass / fail criterion before execution.
- Direct-impact features carry boundary and negative cases and independent review of the evidence.
- Audit trail, electronic signature, and access controls were tested with scripted rigor regardless of other scoring.
- Exploratory testing has a purposeful written record of what was tested, sought, and found for every lower-risk feature in scope.
- Where supplier evidence reduced site testing, the supplier assessment is referenced and the residual site verification is recorded.
- Every test failure was recorded, assessed, and routed; none was re-run to a pass without a documented resolution.
- Every test case traces to a requirement in the traceability matrix, and the summary ties the package back to the risk decisions.

## 10. References

> 21 CFR Part 11 (electronic records and signatures).
> 21 CFR Part 211 (drug cGMP) and 21 CFR Part 820 as revised by the Quality Management System Regulation (device).
> FDA, Computer Software Assurance for Production and Quality Management System Software, Final Guidance (February 3, 2026, superseding the September 24, 2025 version).
> FDA, General Principles of Software Validation (CDRH, January 2002).
> ICH Q9, Quality Risk Management.
> ISPE GAMP 5, Second Edition.
> EU GMP Annex 11, Computerised Systems.
> PIC/S PI 041, Good Practices for Data Management and Integrity.

Confirm the current version and clause numbers of each reference before issue.

## 11. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 12. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (CSV lead) | `<<FILL>>` | | |
| System / business owner | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the scripted scope table and one executed test case for an example laboratory information management system. The company, system, and numbers are illustrative; replace them with your own.

Scripted scope (direct-impact and override features):

| Feature | Risk | Method | Test cases | Boundary? | Negative? | Indep. review? | RTM ref |
|---|---|---|---|---|---|---|---|
| Specification limit check | High | Rigorous scripted | 6 | Yes | Yes | Yes | RTM-04 |
| Electronic approval signature | High | Rigorous scripted (Part 11) | 4 | n/a | Yes | Yes | RTM-09 |
| Audit trail capture on result edits | High | Rigorous scripted (Part 11) | 5 | n/a | Yes | Yes | RTM-11 |
| Analyst role / permission enforcement | High | Scripted (access override) | 5 | n/a | Yes | Yes | RTM-14 |

Executed test case for the specification limit check (limit 95.0 to 105.0, on-limit defined as conforming):

| Step | Input | Expected behavior | Pass criterion | Actual result | Pass/Fail |
|---|---|---|---|---|---|
| 1 | 104.9 | No flag; accepted | Flag absent, conforming | No flag; conforming | Pass |
| 2 | 105.0 | No flag (on-limit conforming) | Flag absent | No flag | Pass |
| 3 | 105.1 | Flag raised; routed to OOS | Flag present, OOS triggered | Flag raised; OOS opened | Pass |
| 4 | 94.9 | Flag raised | Flag present | Flag raised | Pass |
| 5 | (blank) | Rejected or flagged incomplete | No silent pass | Entry rejected | Pass |
| 6 | 105 mg vs limit in % | Comparison rejected | No silent comparison | Unit mismatch rejected | Pass |

Step 6 caught a real risk during a prior dry run: an earlier build silently compared a mass value against a percentage limit. The defect was raised, the configuration was corrected, and the case now confirms the fix. That is exactly what a negative case on a direct-impact feature is for; the obviously-passing and obviously-failing values would never have found it.

## Common inspection findings this test plan prevents

- Test cases written with no predefined expected result or acceptance criterion, so "pass" means whatever the tester saw.
- A critical limit check tested only with an obviously-passing and an obviously-failing value, never at the boundary.
- Audit trail or electronic signature controls scoped to light testing because the system was scored low overall.
- Failed tests re-run until they pass, with no record of the original failure or its resolution.
- Exploratory testing claimed but with no written record of what was tested or found.
- Supplier evidence used to skip site testing with no supplier assessment and no statement of what the site still verified.
- A test package that cannot be traced back to the risk decisions that supposedly set its scope.

## How to adapt this test plan

1. Set your document numbers and link the validation plan, risk assessment, and traceability matrix in the header.
2. Carry the assurance method for each feature directly from the linked risk assessment; do not re-decide risk here.
3. Fill the scripted scope table (section 7) from the direct-impact and override features, and write a full test case set for each, with boundary and negative cases.
4. Fill the exploratory and supplier-evidence scope (section 8) from the lower-risk features, and define the written record each will produce.
5. Point section 5.5 at your real test failure management procedure, and hold to it; no silent re-runs.
6. Confirm the test environment matches production configuration, or list and justify the differences in section 6.
7. Confirm every regulation in section 10 against the current published version before issue.
