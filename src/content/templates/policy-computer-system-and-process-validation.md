---
title: "Policy: Computer System and Process Validation"
description: "A plug-and-play, site-level validation policy establishing the risk-based approach to qualifying equipment and validating processes, computerized systems, and methods, with roles, exception handling, a filled specimen, and the regulations it satisfies."
pubDate: 2026-07-01
docType: "Policy"
pillar: "quality-assurance"
relatedArticles: ["why-validation-matters"]
tags: ["validation policy", "process validation", "computer system validation", "risk-based", "quality system", "governance"]
tier: "Intermediate"
---

This is a ready-to-use validation policy: the top-level statement that sets how a company qualifies equipment and validates processes, computerized systems, and analytical methods across a site. A policy states principles and who is accountable; the SOPs, plans, and protocols beneath it say how the work is done. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it, and note that the EU is revising Annex 11, so confirm the current in-force text.

## Document control header

| Field | Entry |
|---|---|
| Document title | Computer System and Process Validation Policy |
| Document number | `<<FILL: POL-ID, e.g. POL-QA-004>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Quality>>` |
| Applies to | `<<FILL: sites / functions in scope>>` |

## 1. Purpose

This policy establishes the principles and accountabilities by which `<<FILL: COMPANY NAME>>` proves, with documented evidence, that its manufacturing processes, equipment, computerized systems, and analytical methods are fit for their intended use before they are relied on for GxP work, and that they stay fit for use over their life. It sets a risk-based approach so that validation effort is proportionate to the risk a failure would pose to patient safety, product quality, and data integrity.

## 2. Scope

This policy applies to all GxP processes, equipment, utilities, computerized systems, and analytical methods used in the development, manufacture, testing, storage, and distribution of `<<FILL: products in scope, e.g. drug substances, drug products, biologics, cell and gene therapy products, and combination products>>` at the sites named in the header. It applies whether a system is built in house, configured from a commercial product, or delivered as a hosted or cloud service. It does not by itself define the detailed procedure for any one activity; those are in the referenced SOPs.

## 3. Policy statements

1. **Nothing GxP is used before it is proven fit for use.** No process, equipment item, computerized system, or method that creates, changes, or stores GxP data, or that affects product quality or a regulated decision, is placed into GxP use before it has been validated or qualified to a documented, approved conclusion that it is fit for use.
2. **Every item gets a documented GxP and risk decision first.** Before validation work begins, a documented assessment decides whether the item is GxP and, if so, its risk and criticality. That decision sets the scope and depth of the validation. Items assessed as not GxP are recorded with the rationale.
3. **Effort is proportionate to risk.** Validation depth follows the risk a failure would pose to the patient, the product, and the data, consistent with a risk-based approach (for computerized systems, FDA Computer Software Assurance and GAMP 5). High-risk items receive full lifecycle validation; low-risk items receive a lighter, documented, risk-based check. Over-validating low-risk items and under-validating high-risk items are both departures from this policy.
4. **Requirements are defined before verification.** What the item must do is written in approved, testable requirements before it is tested, because fitness for use cannot be proven against an undefined target.
5. **Test protocols are approved before execution.** Acceptance criteria are fixed in an approved protocol before any test is run. Executing against an unapproved protocol, or approving a protocol after the test, is prohibited and is treated as a data integrity concern.
6. **Independent quality oversight.** Quality Assurance provides independent review and approval of validation deliverables at defined gates and approves release for GxP use. The people who build or own an item do not provide the sole quality approval that it is fit for use.
7. **Supplier evidence may be reused, not assumed.** For commercial or hosted products, a documented supplier assessment may allow reliance on the supplier's testing in place of repeating it; the reliance and its basis are recorded, and site-specific and configured elements are still verified.
8. **The validated state is maintained.** After release, the validated state is kept through change control, monitoring, and periodic review for the life of the item. For manufacturing processes this includes ongoing verification that the process stays in control.
9. **Records are the evidence.** Validation is proven by complete, attributable, contemporaneous, and retrievable records. If it is not documented, it is not done.
10. **Regulatory citations are kept current.** References in validation documents are verified against the current published source, since guidance and standards change.

## 4. Roles

| Role | Accountability under this policy |
|---|---|
| Executive / Site management | Provides resources and realistic timelines; owns the state of control. |
| Quality Assurance | Owns this policy; independent review and approval of validation deliverables and release; governs exceptions. |
| Validation / CSV function | Plans and executes validation; maintains the validation master plan and the inventory of validated items. |
| System / Process / Equipment owner | Defines the need and requirements; accepts the validated item; maintains its validated state. |
| Subject matter experts | Author and review requirements; execute and witness tests. |
| IT / Engineering | Build, configure, install, and maintain systems and equipment; supply documentation. |
| Suppliers / Service providers | Provide product and, where assessed, testing evidence; do not own the requirements or the validated conclusion. |

## 5. Compliance and exceptions

1. Adherence to this policy is mandatory within its scope.
2. Any deviation from this policy is documented, risk-assessed, justified, and approved by `<<FILL: role, e.g. Head of Quality>>` before the affected item is used, and is tracked to closure.
3. Legacy or newly discovered unvalidated GxP items are handled as a risk-based remediation with a defined cut-over date, not by back-filling records; see `<<FILL: SOP-ID for validation / remediation>>`.
4. Failure to follow this policy is handled under `<<FILL: SOP-ID or HR policy>>`.

## 6. References

> 21 CFR 211.68, 211.100, 211.110, 211.165(e) (cGMP production, process controls, equipment, laboratory controls).
> FDA, Process Validation: General Principles and Practices (2011).
> FDA, Computer Software Assurance for Production and Quality Management System Software (final, 24 September 2025).
> 21 CFR Part 11 (electronic records and signatures); EU GMP Annex 11 (Computerised Systems).
> EU GMP Annex 15 (Qualification and Validation).
> ICH Q7 (APIs), ICH Q2 (analytical validation), ICH Q9 (Quality Risk Management), ICH Q10 (Pharmaceutical Quality System).
> ISPE GAMP 5, Second Edition (risk-based CSV framework).
> For combination products, 21 CFR Part 4 and, for the device constituent, process validation where results cannot be fully verified later.

Confirm the current version and clause numbers of each reference before issue, and confirm the in-force version of Annex 11.

## 7. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 8. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (QA) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the header and two policy statements completed for an illustrative biologics site, so you can see the level of specificity expected. The company and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Document title | Computer System and Process Validation Policy |
| Document number | POL-QA-004 |
| Version | 2.0 |
| Effective date | 15 August 2026 |
| Supersedes | 1.0 (2023) |
| Document owner | Head of Quality Assurance |
| Applies to | All GxP operations, Site A (drug substance) and Site B (fill-finish and combination product assembly) |

Statement 2, as filled: "Before validation begins, a System Impact Assessment (per SOP-QA-021) records whether the item is GxP and, if so, assigns a direct, indirect, or no-impact classification and a criticality tier. For a new single-use bioreactor automation package, the assessment classified it direct-impact, high criticality, driving full IQ/OQ/PQ with a computer system validation for the automation layer."

Statement 3, as filled: "A barcode label printer used only for internal, non-GxP logistics was assessed as not GxP and recorded with rationale, receiving no validation. The manufacturing execution system that records batch genealogy was assessed high-risk and received the full lifecycle deliverable set with continued monitoring."

That contrast, one item scoped out with a rationale and one scoped to full effort, is exactly what a risk-based policy is meant to produce, and what an inspector looks for when testing whether the policy is real or decorative.

## Common inspection findings this policy prevents

- Systems or processes in GxP use with no validation on file and no documented decision that none was needed.
- Validation effort applied uniformly, with no link between depth and risk, so high-risk systems are under-tested while trivial tools are over-documented.
- Protocols executed before approval, or approvals dated after the test.
- The builder or owner of a system being the only signatory that it is fit for use, with no independent quality review.
- A validated system that drifted out of control because no one maintained it after go-live.

## How to adapt this policy

1. Set your document number, owner, and effective date, and name the exact sites, product types, and functions in scope.
2. Point the references in sections 5 and 6 to your real SOPs for impact assessment, validation, change control, periodic review, and remediation.
3. Confirm the risk-based approach language matches your CSV and quality risk management procedures.
4. Confirm every regulation in section 6 against the current published version, including the in-force Annex 11, before issue.
5. Cascade the SOPs, plans, and protocols that implement each policy statement, and reference them from your validation master plan.
