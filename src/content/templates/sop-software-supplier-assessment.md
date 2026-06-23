---
title: "SOP: Software Supplier Assessment and Reliance under CSA"
description: "A plug-and-play SOP for risk-based assessment of GxP software suppliers: classification and scoring, choosing the assessment method, evaluating the quality system and SDLC, deciding what vendor work to rely on versus re-test, writing the reliance statement, and updating the approved supplier list, with a filled specimen."
pubDate: 2026-06-23
docType: "SOP"
pillar: "csv-csa"
relatedArticles: ["software-supplier-assessment-csa"]
tags: ["csa", "supplier assessment", "vendor audit", "csv", "software vendor", "reliance", "SOP"]
tier: "Intermediate"
---

This is a ready-to-use SOP. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it. This is general guidance to adapt, not regulatory advice.

## Document control header

| Field | Entry |
|---|---|
| Document title | Software Supplier Assessment and Reliance under CSA |
| Document number | `<<FILL: SOP-ID, e.g. SOP-CSV-021>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Computer System Validation>>` |
| Applies to | `<<FILL: sites / functions in scope>>` |

## 1. Purpose

This procedure defines how `<<FILL: COMPANY NAME>>` assesses the suppliers of GxP computerized systems and decides how much of the supplier's own development and testing work it can rely on, so that validation effort is directed by risk rather than spent re-proving what the supplier already proved. It implements the Computer Software Assurance (CSA) principle of considering and reusing supplier activity.

## 2. Scope

This procedure applies to suppliers of any software that creates, modifies, stores, or processes GxP records or supports a GxP decision, including installed applications, hosted and SaaS products, configured platforms (LIMS, CDS, EBR, QMS, MES), and embedded or open-source components used in a GxP context. It covers initial assessment before selection or first use and periodic re-assessment. It does not replace the general supplier qualification procedure for materials and services (`<<FILL: SOP-ID>>`); it is the software-specific extension of it.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| System / business owner | Initiates the assessment, defines intended use and GxP impact, owns the residual risk decision |
| CSV / validation lead | Runs the risk scoring, selects the method, leads the documentation review and audit, writes the reliance statement |
| Subject matter expert (software-literate) | Evaluates the technical content of the supplier's SDLC evidence; required for any configured (Category 4) or custom (Category 5) product |
| Quality Assurance | Approves the method choice and the final report, owns the approved supplier list, signs off on findings classification |
| IT / Security | Assesses hosting, security posture, access management, backup and disaster recovery; reviews SOC 2 / ISO 27001 evidence |
| Procurement / vendor management | Maintains contracts and quality or technical agreements; confirms approved status before purchase |

## 4. Definitions

- **Reliance statement**: the written record of exactly which supplier activities and documentation are accepted into the validation file and which functions the regulated company will test itself.
- **CSA**: Computer Software Assurance, the risk-based assurance approach in the FDA final guidance "Computer Software Assurance for Production and Quality Management System Software" (24 September 2025), which directs effort to high-risk functions and toward not duplicating supplier activity.
- **SDLC**: software development lifecycle (requirements, design, code, test, release, defect, and change management).
- **Approved supplier list (ASL)**: the controlled list of qualified suppliers with the products and versions, risk tier, and re-assessment date.

## 5. Procedure

### 5.1 Classify the system and score the risk

Score, at minimum, GxP impact, data integrity impact, GAMP category (1 / 3 / 4 / 5), supplier maturity, and business or availability impact, each Low / Medium / High. Record the scores and the overall tier in the assessment record. The tier drives the method in 5.2 and is the documented justification for the depth chosen.

### 5.2 Choose the assessment method by risk

| Risk tier | Minimum method |
|---|---|
| Low | Supplier questionnaire and ASL check |
| Medium | Questionnaire plus documentation review, or postal (documentary) audit |
| High | Remote or on-site audit, plus documentation review |
| High and new or unknown supplier | On-site or thorough remote audit |

The method is an escalation ladder. Start at the rung the tier points to and climb one rung whenever the evidence raises a question you cannot close on paper. Record the escalation decision.

### 5.3 Evaluate the quality system and the SDLC

1. Quality system: documented QMS (ideally ISO 9001, or ISO 13485 where applicable), document and record control, training, CAPA and defect management, change control, subcontractor and component control, and security and access control.
2. SDLC: requirements management, design documentation, coding standards and review, a documented test strategy with unit / integration / system / regression testing, release management, defect tracking, and requirement-to-design-to-test traceability.
3. Examine objective evidence, not claims: a real traceability record, a real test report for the version in scope, a real change record, a real defect-log extract. Name each record reviewed.
4. For hosted or SaaS products, document the shared-responsibility split (what the supplier controls versus what the company configures and validates) and treat SOC 2 Type II or ISO 27001 as an input, not as validation.

### 5.4 Decide reliance versus re-test, per function

Apply this logic to each function, recording the decision:

1. If the company configured or extended the function, the company tests it.
2. Else, if the function is GxP or data integrity critical, the company confirms it with focused testing regardless of supplier testing.
3. Else, if the supplier tested it credibly (evidence seen and the SDLC is sound), accept supplier testing plus verification that it installed and operates correctly.

Scale test rigor to risk per CSA: scripted testing for high-risk functions; unscripted or focused methods for lower-risk functions, with the rationale recorded.

### 5.5 Document the outcome and update the ASL

1. Issue a supplier assessment report (template `<<FILL: doc-ID>>` or [report-software-supplier-assessment](/templates/report-software-supplier-assessment)) containing scope, method, risk score, evidence reviewed, findings classified by severity, the reliance statement, the conclusion, and a re-assessment date.
2. Update the ASL with the supplier status, products and versions, tier, and next re-assessment date.
3. Confirm a quality or technical agreement is in place defining change notification, support, data ownership and return, and audit rights.

### 5.6 Re-assess periodically and on trigger

Risk-tier the frequency (for example high every 1 to 3 years, medium every 3 to 5 years, low by exception). Trigger an off-cycle re-assessment on a major release, a security incident, repeated support failure, a supplier ownership change, or a serious quality event traced to the supplier.

## 6. Acceptance criteria

An assessment is complete and defensible when all are true:

- The risk score is documented and justifies the method chosen.
- The exact product version to be used was the version assessed and is named.
- A software-literate SME evaluated the SDLC evidence for any Category 4 or 5 product.
- Objective evidence was examined and listed by name, not just claimed.
- A written reliance statement records what is accepted and what will be tested.
- Findings are classified and any major or critical finding has a CAPA with a due date.
- The conclusion and re-assessment date are recorded and the ASL matches.
- For hosted products, the shared-responsibility split is explicit and in the agreement.

## 7. Records generated

Supplier assessment report; completed questionnaire; documentation-review checklist; audit plan and report (where applicable); reliance statement; updated ASL entry; quality or technical agreement reference.

## 8. References

> FDA, Computer Software Assurance for Production and Quality Management System Software (final, 24 September 2025).
> EU GMP Annex 11 (Computerised Systems), sections 3.1 and 3.2.
> EU GMP Chapter 7 (Outsourced Activities).
> PIC/S PI 011 (Good Practices for Computerised Systems in Regulated GxP Environments).
> 21 CFR 820.50 (Purchasing controls) and ISO 13485:2016 clause 7.4 (where applicable to combination products or SaMD).
> ICH Q9(R1), Quality Risk Management.
> GAMP 5 Second Edition (industry guidance; describe in original wording, do not paste).

Confirm the current version and clause numbers of each reference before issue.

## 9. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 10. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (CSV) | `<<FILL>>` | | |
| Reviewer (SME) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the core decision recorded for an example configured LIMS (Category 4) that holds release-testing results. The company, system, and details are illustrative.

| Field | Entry |
|---|---|
| System and version | Laboratory Information Management System, vendor build 8.4.2 |
| Risk tier | High (direct GxP record, Part 11 in scope, Category 4) |
| Method selected and basis | Remote audit plus documentation review; tier High requires live evidence and SDLC review |
| SDLC evidence examined | Requirements-to-test traceability for build 8.4, test report 8.4.2, defect-log extract Q1, change record CR-8.4.2-07 |
| Reliance statement | Rely on supplier release testing for delivered functions: sample login, standard reports, unit-conversion library (evidenced in test report 8.4.2 reviewed 03 June 2026). Test ourselves: custom result calculations, custom CoA template, configured user roles, audit-trail capture of our critical actions. |
| Findings | One minor: supplier change-notification SLA not defined in draft agreement. CAPA: add to quality agreement, due 30 June 2026. |
| Conclusion | Approved with conditions (close the minor finding). Re-assess in 3 years or on major release. |

The reliance statement is the load-bearing line. An inspector challenging "we accepted vendor testing" reads that paragraph and the evidence behind it.

## Common inspection findings this SOP prevents

- A GxP system in use whose supplier was never assessed, or assessed after go-live.
- A questionnaire treated as a full audit, with no objective evidence and no risk basis for stopping there.
- Reliance on vendor testing with no record of ever seeing a vendor test result.
- A non-technical auditor who reviewed the quality manual but not the software engineering.
- A stale ASL: expired qualification, or a version in use newer than the version assessed.

## How to adapt this SOP

1. Set your document number, owner, and effective date.
2. Point the cross-references in sections 2 and 5.5 to your real general supplier SOP and report template.
3. Align the risk-scoring factors in 5.1 with your CSV risk methodology.
4. Set your real re-assessment intervals in 5.6.
5. Confirm every reference in section 8 against the current published version before issue.
