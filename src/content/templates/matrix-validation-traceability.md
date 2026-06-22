---
title: "Requirements Traceability Matrix (Validation)"
description: "A plug-and-play validation traceability matrix that links each user requirement through functional and design specifications to its risk, test case, and result, with coverage and gap analysis, so the full V-model is reconstructable for release and inspection."
pubDate: 2026-06-21
docType: "Matrix"
pillar: "csv-csa"
relatedArticles: ["user-requirements-and-traceability", "validation-deliverables-guide"]
tags: ["traceability matrix", "rtm", "validation", "urs", "csv", "v-model", "coverage"]
tier: "Intermediate"
---

This is a ready-to-use requirements traceability matrix (RTM) for a computerized system validation. It carries the full specification chain, user requirement (URS) to functional specification (FS) to design specification (DS), then on to the risk that requirement carries, the test case that verifies it, and the result of that test. The point is to prove that every requirement is specified, built, risk-assessed, and tested, with no orphan requirements and no untraced tests. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Confirm each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Requirements Traceability Matrix for `<<FILL: SYSTEM NAME>>` |
| Document number | `<<FILL: RTM-ID, e.g. RTM-CSV-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Validation Lead>>` |
| System / GxP category | `<<FILL: system name; GAMP 5 category 1/3/4/5>>` |
| Linked documents | URS `<<FILL>>`, FS `<<FILL>>`, DS `<<FILL>>`, risk assessment `<<FILL>>`, test protocols `<<FILL>>`, validation plan `<<FILL>>` |

## 1. Purpose

This matrix demonstrates that every user requirement for `<<FILL: SYSTEM NAME>>` is carried through the design, assessed for risk, and verified by test, and that the verification effort is proportionate to risk. It is the single index an author, a reviewer, and an inspector use to walk from any requirement to the evidence that it works, and back from any test to the requirement it satisfies. It is a living document, baselined at each validation milestone and updated through change control.

## 2. Scope

This matrix covers all in-scope requirements for `<<FILL: SYSTEM NAME>>` at `<<FILL: site / area>>`, across the specification layers and the test phases (installation, operational, and performance qualification, or the CSA-aligned equivalents) defined in the validation plan `<<FILL: plan-ID>>`. It does not redefine the requirements, the risk method, or the test scripts themselves; those live in their own controlled documents and are referenced here by unique identifier.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Business / process owner | Owns the user requirements, confirms each URS line is correct and in scope, and approves coverage of the requirements they own. |
| Validation lead / author | Builds and maintains the matrix, baselines it at each milestone, runs the coverage and gap analysis, and presents the trace at review. |
| System owner / subject matter expert | Confirms the FS and DS references implement each requirement and that the test approach is technically sound. |
| Risk assessor | Assigns and signs the risk classification per requirement that drives the test rigor. |
| Tester | Executes the referenced test cases and records pass, fail, or pass-with-deviation against the matrix. |
| Quality Assurance | Reviews the matrix for full bidirectional coverage, confirms open items are dispositioned, and approves it as a release gate. |

## 4. Definitions

- **URS (user requirement specification)**: what the business needs the system to do, written in user terms, each line uniquely numbered.
- **FS (functional specification)**: what the system does to meet a requirement, from the supplier or configured by the project.
- **DS (design / configuration specification)**: how the function is built or configured, including parameters, code units, or configuration values.
- **Risk classification**: the priority assigned to a requirement (commonly High, Medium, Low) from severity, probability, and detectability, which sets how much testing it needs.
- **Test case**: the uniquely identified script or step that verifies a requirement, mapped to a qualification phase (IQ, OQ, PQ) or its CSA equivalent (scripted, unscripted, ad hoc).
- **Forward trace**: from URS down to test result, proving every requirement is built and verified.
- **Backward trace**: from test or design back up to a URS, proving nothing was built or tested that no requirement asked for.
- **Orphan**: a requirement with no downstream coverage, or a test or design element with no upstream requirement. Both are findings.
- **Coverage**: the proportion of in-scope requirements that have a passing, dispositioned verification result.

## 5. The matrix

### 5.1 Column definitions

Each row is one atomic, testable requirement. Split compound requirements so a single row never carries two distinct testable behaviors. Use the columns below; add a column only if it earns its place.

| Column | What goes in it |
|---|---|
| URS ID | Unique requirement number, traceable to the URS document. |
| Requirement (summary) | One-line restatement; the full text lives in the URS. |
| GxP impact | Yes / No. Drives whether the line needs validation evidence at all. |
| Risk classification | High / Medium / Low, from the risk assessment, with the assessment ID. |
| FS ID | Functional specification reference that meets the requirement. |
| DS / config ID | Design or configuration reference that implements it. |
| Test case ID | Verifying test case(s). One requirement may map to several. |
| Test phase | IQ / OQ / PQ (or scripted / unscripted / ad hoc under CSA). |
| Result | Pass / Fail / Pass-with-deviation / Not yet executed. |
| Evidence ref | Executed protocol page, screenshot, or attachment ID. |
| Deviation ref | Linked deviation number if Fail or Pass-with-deviation. |
| Status | Open / Closed. |

### 5.2 Trace table

| URS ID | Requirement (summary) | GxP impact | Risk | FS ID | DS / config ID | Test case ID | Test phase | Result | Evidence ref | Deviation ref | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `<<FILL: URS-001>>` | `<<FILL>>` | Yes / No | `<<FILL: H/M/L>>` | `<<FILL: FS-...>>` | `<<FILL: DS-...>>` | `<<FILL: TC-...>>` | `<<FILL: OQ>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: N/A>>` | Open / Closed |
| `<<FILL: URS-002>>` | `<<FILL>>` | Yes / No | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Open / Closed |
| `<<FILL: URS-003>>` | `<<FILL>>` | Yes / No | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Open / Closed |

A requirement marked GxP impact No still belongs in the matrix; it is traced and shown as out of scope for validation evidence, with the rationale recorded, so the decision not to test it is visible rather than silent.

## 6. Risk-to-test logic

Test rigor follows risk, and the matrix is where that proportionality is shown. State your rule once, then apply it on every row, so a reviewer can see that a High-risk requirement was not verified by an ad hoc check. A common, defensible rule:

| Risk classification | Minimum verification |
|---|---|
| High | Scripted test with documented expected result and captured objective evidence (a screenshot, report, or printout); independent review of execution. |
| Medium | Scripted or rigorous unscripted test with recorded outcome and evidence sufficient to reconstruct it. |
| Low | Unscripted or ad hoc verification with a recorded statement of outcome. |

Requirements that are not GxP-relevant may be verified by the supplier or by demonstration, with that decision recorded in the matrix. The risk classification in column 4 must match the rigor of the test phase and result in the later columns; a mismatch is exactly what a reviewer looks for.

## 7. Coverage and gap analysis

Run this analysis before any review or release decision, and re-run it after every change. Record the counts in the summary block below; an empty or all-zero exception list is the target.

### 7.1 Coverage summary

| Metric | Count | Notes |
|---|---|---|
| Total in-scope requirements | `<<FILL>>` | GxP-impact Yes |
| Requirements with a mapped test case | `<<FILL>>` | |
| Requirements with a passing or dispositioned result | `<<FILL>>` | |
| Coverage percentage | `<<FILL>>` % | passing or dispositioned / total in-scope |
| Open deviations affecting coverage | `<<FILL>>` | |

### 7.2 Gap checks (each must resolve to zero or be justified)

| Check | Question | Count of exceptions | Disposition |
|---|---|---|---|
| Untested requirement | Any GxP requirement with no test case mapped? | `<<FILL>>` | `<<FILL>>` |
| Unverified requirement | Any requirement tested but with no Pass or dispositioned result? | `<<FILL>>` | `<<FILL>>` |
| Risk / rigor mismatch | Any High-risk requirement verified below the High rule in section 6? | `<<FILL>>` | `<<FILL>>` |
| Orphan test | Any executed test case that traces to no URS line? | `<<FILL>>` | `<<FILL>>` |
| Orphan design | Any FS or DS element that traces to no URS line? | `<<FILL>>` | `<<FILL>>` |
| Open deviation | Any Fail or Pass-with-deviation without a closed or accepted deviation? | `<<FILL>>` | `<<FILL>>` |
| Broken link | Any referenced URS, FS, DS, or test ID that does not resolve? | `<<FILL>>` | `<<FILL>>` |

A non-zero count is not automatically a stop; it is an item that must carry a written disposition (closed, deferred with rationale, or accepted as residual risk by QA) before the matrix can support a release decision.

## 8. Using the matrix for release

The matrix is a release gate, not a checkbox. Before recommending release of `<<FILL: SYSTEM NAME>>`, confirm all of the following and record the conclusion in the validation report `<<FILL: report-ID>>`:

1. Every GxP-impact requirement traces forward to at least one executed test case with a Pass or a Pass-with-deviation that has an accepted deviation.
2. Every executed test case and every design element traces backward to a URS line (no orphans), or carries a recorded justification.
3. Test rigor matches risk for every High and Medium requirement per section 6.
4. All Fail and Pass-with-deviation results have a closed or formally accepted deviation, and any residual risk is signed by QA.
5. The coverage and gap analysis in section 7 resolves to zero exceptions or to fully dispositioned exceptions.
6. The matrix version is baselined, dated, and referenced by the validation report, so the released state is reconstructable.

Items that remain open at release are listed explicitly as known limitations with a target closure date and an interim control, not left blank. An inspector accepts a documented, controlled open item far more readily than a gap they discover themselves.

## 9. Maintenance through change control

After release, any change to the requirements, the configuration, or the system version is assessed against this matrix. Add, retire, or re-test the affected rows, re-run the section 7 analysis for the impacted scope, increment the matrix version, and reference the change record `<<FILL: change SOP-ID>>`. The matrix is retired only when the system is decommissioned, and is retained per the records retention schedule for not less than `<<FILL: retention period>>`.

## 10. References

> 21 CFR Part 11 (electronic records and signatures).
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment).
> EU GMP Annex 11 (Computerised Systems), sections 4 (validation) and 4.4 (specifications and traceability).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> FDA Computer Software Assurance for Production and Quality System Software (final guidance, 24 September 2025).
> GAMP 5 (A Risk-Based Approach to Compliant GxP Computerized Systems), Second Edition.
> ICH Q9, Quality Risk Management (for the risk classification that drives test rigor).
> PIC/S PI 011, Good Practices for Computerised Systems in Regulated GxP Environments.

Confirm the current version and clause numbers of each reference before issue.

## 11. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 12. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Validation) | `<<FILL>>` | | |
| Process owner | `<<FILL>>` | | |
| Reviewer (System owner / SME) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows a slice of the matrix completed for an example temperature-monitoring system used to store GxP material, so you can see the level of detail an inspector expects. The system, IDs, and results are illustrative; replace them with your own.

### Trace rows

| URS ID | Requirement (summary) | GxP | Risk | FS ID | DS / config ID | Test case ID | Phase | Result | Evidence ref | Dev ref | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| URS-014 | System raises an alarm within 2 minutes when a freezer exceeds the high limit | Yes | High | FS-09 | DS-09a (limit 8 C, delay 120 s) | TC-031, TC-032 | OQ | Pass | OQ exec p.41, alarm log screenshot | N/A | Closed |
| URS-015 | Alarm acknowledgement is attributable to a named user with date and time | Yes | High | FS-10 | DS-10 (Part 11 e-sig config) | TC-033 | OQ | Pass-with-deviation | OQ exec p.44 | DEV-2026-0211 | Closed |
| URS-016 | Temperature data is recorded at least every 5 minutes | Yes | High | FS-11 | DS-11 (poll = 300 s) | TC-034 | PQ | Pass | PQ exec p.07, 14-day trend | N/A | Closed |
| URS-022 | Reports can be exported to PDF for QA review | Yes | Medium | FS-15 | DS-15 | TC-040 | OQ | Pass | OQ exec p.55 | N/A | Closed |
| URS-031 | Dashboard color theme is configurable | No | Low | FS-21 | DS-21 | Vendor demo | n/a | Verified by demo | Vendor demo note 03 | N/A | Closed |

### Coverage summary

| Metric | Count |
|---|---|
| Total in-scope (GxP) requirements | 28 |
| Requirements with a mapped test case | 28 |
| Requirements with a passing or dispositioned result | 28 |
| Coverage percentage | 100 % |
| Open deviations affecting coverage | 0 (DEV-2026-0211 closed) |

### Gap checks

| Check | Exceptions | Disposition |
|---|---|---|
| Untested requirement | 0 | |
| Risk / rigor mismatch | 0 | All High requirements verified by scripted OQ/PQ with independent review |
| Orphan test | 1 | TC-047 traced to no URS; found to test a retired requirement, removed from execution set, noted in report |
| Open deviation | 0 | DEV-2026-0211 accepted: acknowledgement timestamp displayed in local time not UTC; corrected in config and re-tested |

In this example the team caught two things the matrix is built to catch. A High-risk e-signature requirement (URS-015) failed its first run because the acknowledgement stamped local time instead of UTC; that became a deviation, was corrected and re-tested, and the row closed as Pass-with-deviation with the deviation referenced. Separately, a backward trace found an orphan test (TC-047) that no longer mapped to any requirement; it was tied to a retired requirement, pulled from the execution set, and the removal was recorded rather than ignored. Forward coverage to 100 percent plus a clean backward trace is exactly what a reviewer is expected to demonstrate before release.

## Common inspection findings this matrix prevents

- A requirement in the URS that has no test case behind it, so the system was released against a requirement nobody verified.
- High-risk requirements verified by the same light-touch check as low-risk ones, with no link from risk to test rigor.
- Test scripts in the executed package that map to no requirement, suggesting scope crept or requirements were dropped without control.
- A Pass recorded for a requirement whose test actually failed, with no deviation and no linked correction.
- FS or DS elements that implement behavior no requirement asked for, never assessed for GxP impact.
- A matrix that was true at the start of the project but never updated after configuration changes, so it no longer matches the released system.
- Coverage claimed as complete with no documented gap analysis showing the orphan and open-deviation checks were actually run.

## How to adapt this matrix

1. Set your document number, owner, system, GAMP category, and linked document IDs in the header.
2. If your project uses a CSA-aligned approach, relabel the test phase column from IQ/OQ/PQ to scripted/unscripted/ad hoc and keep the same risk-to-rigor rule in section 6.
3. If you have a single combined specification rather than separate URS, FS, and DS documents, collapse those columns but keep one column for the requirement and one for the design or configuration reference; do not lose the build-to evidence.
4. Set your risk-to-test rule in section 6 to match your validation plan and risk SOP, then enforce it on every row.
5. Point the cross-references in sections 8 and 9 to your real validation report, deviation, and change control procedures.
6. Re-run the coverage and gap analysis in section 7 at every milestone and after every change, and baseline the matrix version each time.
7. Confirm every regulation in section 10 against the current published version before issue.
