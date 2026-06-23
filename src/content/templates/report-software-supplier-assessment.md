---
title: "Report: Software Supplier Assessment Report with Reliance Statement"
description: "A plug-and-play software supplier assessment report: scope and method, the risk score that justified the method, quality-system and SDLC evidence examined, findings classified by severity, the reliance statement that records what vendor work is accepted versus re-tested, the conclusion, and a re-assessment date, with a filled specimen."
pubDate: 2026-06-23
docType: "Report"
pillar: "csv-csa"
relatedArticles: ["software-supplier-assessment-csa"]
tags: ["csa", "supplier assessment", "vendor audit", "csv", "reliance", "report", "software vendor"]
tier: "Intermediate"
---

This is a ready-to-use report. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template. This is general guidance to adapt, not regulatory advice. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Report title | Software Supplier Assessment Report |
| Document number | `<<FILL: report ID>>` |
| Version | `<<FILL: version>>` |
| Date of report | `<<FILL: date>>` |
| Author | `<<FILL: CSV lead>>` |
| Governing SOP | `<<FILL: SOP-ID for software supplier assessment>>` |

## 1. Supplier and product identification

| Field | Entry |
|---|---|
| Supplier (legal name) | `<<FILL>>` |
| Product name | `<<FILL>>` |
| Version assessed | `<<FILL: exact version, e.g. 8.4.2>>` |
| Deployment model | `<<FILL: installed / hosted / SaaS>>` |
| GAMP category | `<<FILL: 1 / 3 / 4 / 5>>` |
| Intended GxP use | `<<FILL: what the system does and the record/decision it supports>>` |

## 2. Scope and method

| Field | Entry |
|---|---|
| Assessment scope | `<<FILL: full assessment / delta on a prior assessment / re-assessment>>` |
| Method used | `<<FILL: questionnaire / documentation review / postal / remote / on-site>>` |
| Date(s) of assessment | `<<FILL>>` |
| Assessors | `<<FILL: names and roles, including the software-literate SME>>` |
| Supplier participants | `<<FILL: names and roles>>` |

## 3. Risk score that justified the method

| Factor | Rating (Low / Medium / High) | Basis |
|---|---|---|
| GxP impact | `<<FILL>>` | `<<FILL>>` |
| Data integrity impact | `<<FILL>>` | `<<FILL>>` |
| GAMP category | `<<FILL>>` | `<<FILL>>` |
| Supplier maturity | `<<FILL>>` | `<<FILL>>` |
| Business / availability impact | `<<FILL>>` | `<<FILL>>` |
| **Overall tier** | `<<FILL>>` | `<<FILL: one line tying tier to the method chosen>>` |

## 4. Quality system and SDLC evidence examined

List the actual records reviewed, not "documents seen."

| Area | Evidence examined (name the record) | Adequate? | Note |
|---|---|---|---|
| QMS / certification | `<<FILL: ISO 9001/13485 cert no. and scope>>` | Yes / No | `<<FILL>>` |
| Document and record control | `<<FILL>>` | Yes / No | `<<FILL>>` |
| Requirements management and traceability | `<<FILL: traceability record ID>>` | Yes / No | `<<FILL>>` |
| Testing (unit / integration / system / regression) | `<<FILL: test report ID for the version in scope>>` | Yes / No | `<<FILL>>` |
| Defect and bug management | `<<FILL: defect-log extract ref>>` | Yes / No | `<<FILL>>` |
| Change and release management | `<<FILL: change record ref>>` | Yes / No | `<<FILL>>` |
| Security / hosting (SaaS) | `<<FILL: SOC 2 Type II / ISO 27001 report ref and period>>` | Yes / No | `<<FILL>>` |
| Subcontractor / component control | `<<FILL>>` | Yes / No | `<<FILL>>` |

For hosted products, record the shared-responsibility split:

| Control area | Supplier responsible | You responsible |
|---|---|---|
| Infrastructure, platform patching, backup, DR | `<<FILL>>` | `<<FILL: confirm restore of your data works>>` |
| User access, roles, segregation of duties | Capability provided | `<<FILL: you configure and review>>` |
| Audit trail and e-signature configuration | Capability provided | `<<FILL: you enable and review>>` |
| Validation for intended use | N/A | Yours |

## 5. Findings

| ID | Description | Severity (Critical / Major / Minor / Observation) | CAPA / action | Owner | Due date |
|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 6. Reliance statement (the load-bearing section)

State plainly what supplier work is accepted into the validation file and what will be tested by `<<FILL: COMPANY NAME>>`.

> We rely on the supplier's release testing for the following delivered, non-configured functions: `<<FILL: list>>`, as evidenced in `<<FILL: test report ID and date reviewed>>`. We will test the following ourselves because they are configured, extended, or high criticality: `<<FILL: list>>`. The basis for this reliance is the supplier assessment recorded in sections 3 to 5.

## 7. Conclusion and re-assessment

| Field | Entry |
|---|---|
| Conclusion | `<<FILL: Approved / Approved with conditions / Not approved>>` |
| Conditions (if any) | `<<FILL>>` |
| Approved supplier list updated | Yes / No (date) |
| Next re-assessment | `<<FILL: date and trigger basis>>` |

## 8. References

> FDA Computer Software Assurance final guidance (24 September 2025); EU GMP Annex 11 sections 3.1 and 3.2; PIC/S PI 011; ICH Q9(R1); GAMP 5 Second Edition (described in original wording). Confirm current versions before issue.

## 9. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (CSV) | `<<FILL>>` | | |
| Reviewer (SME) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

A completed report for an example configured LIMS, build 8.4.2 (illustrative).

| Field | Entry |
|---|---|
| Supplier / product / version | Example LIMS vendor / LIMS / build 8.4.2 |
| Method and basis | Remote audit plus documentation review; tier High |
| Overall risk tier | High (direct release-testing record, Part 11, Category 4) |
| Key evidence examined | Traceability matrix v8.4, test report 8.4.2, defect-log extract Q1-2026, change record CR-8.4.2-07, SOC 2 Type II covering Jan to Dec 2025 |
| Finding | Minor: change-notification SLA absent from draft quality agreement. CAPA: add clause, owner Procurement, due 30 June 2026 |
| Reliance statement | Rely on supplier release testing for sample login, standard report rendering, and the unit-conversion library (test report 8.4.2, reviewed 03 June 2026). Test ourselves: custom potency calculation, custom CoA template, configured analyst and reviewer roles, audit-trail capture of result changes and re-integrations. |
| Conclusion | Approved with conditions; ASL updated 12 June 2026; re-assess by June 2029 or on next major release |

What makes this report defensible: the method is tied to a documented score, the evidence is named records rather than "documentation reviewed," and the reliance statement says in plain words what was accepted and what will be tested.

## Common inspection findings this report prevents

- "We relied on vendor validation" with no evidence any vendor record was ever seen.
- A method choice with no documented risk basis.
- A configured calculation or report accepted on vendor testing the vendor never performed.
- A SaaS product where the company assumed the SOC 2 covered configuration and use.

## How to adapt this report

1. Number it under your document control and link the governing SOP.
2. Replace the evidence tables with the records you actually examined.
3. Write the reliance statement in plain terms specific to the functions you configured.
4. Feed the reliance statement into the validation plan and test strategy.
5. Confirm the references against current published versions before issue.
