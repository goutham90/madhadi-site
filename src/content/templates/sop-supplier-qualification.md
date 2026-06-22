---
title: "SOP: Supplier and Vendor Qualification"
description: "A plug-and-play standard operating procedure for risk-based supplier qualification: tiering, questionnaire and documentation review, audit, quality agreement, approval to the AVL, ongoing monitoring, and disqualification, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "SOP"
pillar: "quality-assurance"
relatedArticles: ["supplier-vendor-qualification"]
tags: ["supplier qualification", "vendor management", "approved vendor list", "quality agreement", "SOP", "GxP"]
tier: "Intermediate"
---

This is a ready-to-use SOP. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Supplier and Vendor Qualification |
| Document number | `<<FILL: SOP-ID, e.g. SOP-QA-022>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Quality Assurance>>` |
| Applies to | `<<FILL: sites / departments in scope>>` |

## 1. Purpose

This procedure defines how `<<FILL: COMPANY NAME>>` qualifies, approves, monitors, and where necessary removes external suppliers of GxP materials and services. The objective is to establish, before use, that each supplier can consistently provide materials or services that meet defined requirements and the applicable GxP standards, and to keep that confidence current across the life of the relationship.

## 2. Scope

This procedure applies to all suppliers whose materials or services affect GxP product quality, patient safety, or data integrity, including active pharmaceutical ingredient and drug substance makers, excipient and packaging suppliers, contract manufacturers, contract testing laboratories, calibration providers, and software and cloud vendors that create, process, or store GxP records. It governs the approved vendor list (AVL), the tiering and qualification of suppliers, the quality agreement, ongoing monitoring, and disqualification. It does not cover the purchase of non-GxP goods and services, which follow `<<FILL: SOP-ID for general procurement>>`. The audit mechanics are governed by `<<FILL: SOP-ID for supplier audit>>`.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Procurement / Supply Chain | Identifies and proposes candidate suppliers, issues and collects the questionnaire, feeds performance and delivery data, raises no GxP purchase against an off-AVL supplier. |
| Subject matter expert (lab, manufacturing, IT) | Defines technical requirements, reviews technical and documentation evidence, supports the audit. |
| Auditor | Plans and conducts the supplier audit, classifies findings, tracks corrective actions to closure. The auditor is independent of the buying relationship and qualified for the audit type. |
| Quality Assurance | Sets the risk tier, reviews the qualification package, makes the approval decision, owns the AVL, approves suspension and disqualification. The approval decision is a QA decision, not a procurement decision. |
| Site / QP head | Approves the quality agreement and the suspension or disqualification of critical suppliers. |

## 4. Definitions

- **Approved vendor list (AVL)**: the controlled document listing suppliers cleared to provide GxP materials or services, the scope of that approval, and the qualification status of each. Also called the approved supplier list (ASL).
- **Qualification**: the documented process of establishing that a supplier can consistently meet defined requirements and applicable GxP standards.
- **Risk tier**: the category (Critical, Major, General) that sets the depth of qualification required, derived from a documented risk score.
- **Quality agreement**: a written contract that assigns the GxP quality responsibilities of the contract giver and the contract acceptor.
- **Conditional approval**: approval with enhanced monitoring while a defined corrective action is open.

## 5. Procedure

### 5.1 Set the risk tier

Score each candidate supplier against the rubric below, sum the four factors, and map the total to a tier. Record the score and rationale in the supplier file so two assessors land on the same answer. Follow the quality risk management process at `<<FILL: SOP-ID for quality risk management>>`.

| Factor | Score 1 (low) | Score 2 (medium) | Score 3 (high) |
|---|---|---|---|
| Product / patient impact | Indirect, no patient contact | Affects intermediate quality | Direct on dosage form, sterile, or implant |
| Detectability of a defect | Caught by routine incoming test | Caught by in-process or finished-product test | Not reliably detectable until use |
| Data integrity impact | No GxP data created | Supports a quality record | Generates data used in release or submission |
| Supply continuity | Many qualified alternatives | Few alternatives | Sole source, long requalification lead time |

Band the total: 4 to 6 = Tier 3 General, 7 to 9 = Tier 2 Major, 10 to 12 = Tier 1 Critical. Adjust the assigned tier on documented grounds (a Tier 2 supplier with a poor history may be managed as Tier 1; a Tier 1 supplier with a long clean record may earn a longer re-audit cycle).

### 5.2 Apply the qualification activities for the tier

| Tier | Required qualification activities | Re-evaluation |
|---|---|---|
| 1 Critical | Screening, full questionnaire reviewed and scored, quality system documentation review, on-site audit before approval, executed quality agreement, ongoing monitoring | On-site re-audit, risk-adjusted, default every 1 to 3 years |
| 2 Major | Screening, questionnaire reviewed, documentation review, desk audit or scheduled on-site audit, quality agreement | Periodic review; audit on a longer cycle or for cause |
| 3 General | Screening, basic questionnaire, certificate of compliance or conformance review | Periodic review of performance data |

### 5.3 Screen the candidate

Collect the company profile, relevant certifications (ISO 9001, ISO 13485 for devices, a GMP license or certificate, food facility registration where relevant), and regulatory history. For higher-risk suppliers, check the public record (warning letter database, import alerts, inspection outcomes). Record the screening outcome in writing even when it passes. A current GMP certificate whose scope does not cover the intended material is a fail at this stage.

### 5.4 Issue and review the questionnaire

Send a questionnaire targeted to the material or service being bought, not a generic form. When it returns, a named reviewer scores each section, records open items, and follows up. The questionnaire is not complete until it is reviewed and concluded.

### 5.5 Review documentation

For Tier 1 and Tier 2 suppliers, evaluate the quality system evidence rather than file it: quality manual, QMS and GMP certificates or recent inspection outcomes, certificate of analysis format and content, representative analytical records, and any audit summaries the supplier will share. For software vendors, review the development lifecycle, defect tracking, release management, validation documentation, and third-party reports such as a SOC 2 Type II for hosted services. Record a reviewer and a conclusion.

### 5.6 Audit (Tier 1, and Tier 2 where required)

Conduct the audit per `<<FILL: SOP-ID for supplier audit>>`. Follow a real batch or sample through the system, classify observations using `<<FILL: SOP-ID for audit finding classification>>`, and request corrective action with agreed timelines. On-site is the expectation for Tier 1 and for sterile or high-risk operations; a remote audit is acceptable only when justified by risk and the auditor can still see records and interview staff.

### 5.7 Execute the quality agreement

Where one is required (contract manufacturers, contract testing laboratories, and software or service providers whose work touches GxP data), execute a quality agreement before approval, using the template at `<<FILL: ID for quality agreement template>>`. It must include a change-notification clause with a defined window and a prior-approval category.

### 5.8 Approve and add to the AVL

Quality Assurance reviews the full package and makes the approval decision, documented with a date and a defined scope (which materials, which services, which sites). The supplier goes on the AVL with the scope text matching the approval, and the next review or re-audit date is set.

### 5.9 Monitor approved suppliers

Run ongoing monitoring proportionate to tier: incoming material testing against specification, certificate of analysis review with trending (watch margin erosion, not just pass or fail), change notification tracking against the quality agreement, a performance scorecard (rejected lots, on-time certificates, open corrective actions, audit findings), periodic re-audit, and regulatory intelligence on the supplier. Treat an unreported supplier change discovered after the fact as a deviation per `<<FILL: SOP-ID for deviations>>`.

### 5.10 Suspend or disqualify

Match the response to the risk and document it.

| Situation | Response | Inventory action |
|---|---|---|
| Minor recurring delivery or paperwork issue, supplier cooperating | Conditional approval + corrective action request | Continue use, normal testing |
| Significant event, impact not yet known | Suspension (no new orders) | Quarantine in-transit; assess on hand |
| Confirmed data integrity failure or unremediable GMP breach | Disqualification (off the AVL) | Quarantine all; impact assessment with look-back |
| Supplier ceases operations or refuses audit | Disqualification | Secure remaining stock; activate alternate source |

Suspension and disqualification require QA approval, a documented rationale, an affected-inventory plan, and a transition plan to an alternative source.

## 6. Acceptance criteria

A supplier qualification is acceptable when all of the following are true:

- The tier is assigned from the documented rubric, with the score and rationale on file.
- The screening outcome is captured in writing, including passes.
- The questionnaire is reviewed, scored, and concluded by a named reviewer, not merely filed.
- The documentation review records a reviewer and a conclusion; for Tier 1 an audit report exists with classified findings and closed or risk-accepted actions.
- An executed quality agreement is in place where one is required, with a change-notification clause that has a defined window.
- QA has approved with a signature, a date, and a defined scope, and the AVL entry scope text matches the approval.
- No GxP purchase order traces to an off-AVL supplier or an out-of-scope material or site.

## 7. References

> 21 CFR 211.84 (testing and approval of components before use) and 211.68 (control of computerized systems).
> 21 CFR 820.50 (purchasing controls) for medical devices.
> ISO 13485:2016, clause 7.4 (purchasing).
> EudraLex Volume 4, Chapter 5 (evaluation and approval of starting and packaging material suppliers) and Chapter 7 (outsourced activities).
> ICH Q10, Pharmaceutical Quality System (management of outsourced activities and purchased materials).
> ICH Q9, Quality Risk Management (for the risk-based tiering).
> FDA Guidance, Contract Manufacturing Arrangements for Drugs: Quality Agreements (2016).

Confirm the current version and clause numbers of each reference before issue.

## 8. Record generated: supplier qualification summary

| Field | Entry |
|---|---|
| Supplier name and site | `<<FILL: supplier / site>>` |
| Material or service (grade) | `<<FILL: material or service, grade>>` |
| Risk score and tier | `<<FILL: score, e.g. 11 = Tier 1>>` |
| Screening outcome | `<<FILL: pass / concerns, with detail>>` |
| Questionnaire reviewer and score | `<<FILL: reviewer, score, open items>>` |
| Documentation review conclusion | `<<FILL: reviewer, conclusion>>` |
| Audit report reference and result | `<<FILL: report ID, findings, status>>` |
| Quality agreement reference | `<<FILL: QA-ID or N/A>>` |
| Approved scope | `<<FILL: materials / services / sites>>` |
| QA approval (name, signature, date) | `<<FILL>>` |
| AVL entry and next review date | `<<FILL>>` |

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

The following shows the same summary completed for an example sterile filling contract manufacturer, so you can see the level of detail an inspector expects. The company, dates, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Supplier name and site | Northgate Sterile CDMO, Building 4 (Greenville, US) |
| Material or service (grade) | Aseptic fill-finish of drug product, GMP |
| Risk score and tier | 3 (direct patient impact) + 3 (not detectable until use) + 3 (generates release data) + 2 (few alternatives) = 11 = Tier 1 |
| Screening outcome | Pass. Current GMP certificate, scope covers aseptic fill. No open warning letters; last inspection VAI, 2024. |
| Questionnaire reviewer and score | M. Devlin (QA). 4 of 5 sections green; data integrity section yellow, two open items on CDS access controls. |
| Documentation review conclusion | QMS, GMP cert, and three representative batch records reviewed. Conclusion: acceptable, pending audit verification of CDS controls. |
| Audit report reference and result | AUD-2026-017. 0 critical, 2 major (CDS reprocessing rights too broad; gowning re-qual overdue for 1 operator). Both closed via CAR-2026-031, evidence verified. |
| Quality agreement reference | QA-2026-009, executed 2026-05-30 |
| Approved scope | Aseptic fill-finish of `<<product>>`, Building 4 only |
| QA approval | R. Osei, signed, 2026-06-04 |
| AVL entry and next review date | Added 2026-06-05; next on-site re-audit 2028-06 |

In this example QA did not approve on the strength of the questionnaire and documents alone. The data integrity answers were yellow, the audit confirmed two real gaps, those gaps were closed and verified, and only then did the scope go on the AVL, limited to the one building that was actually audited. That sequence, score to screen to review to audit to closed findings to scoped approval, is exactly what an inspector expects to reconstruct.

## Common inspection findings this SOP prevents

- GMP materials received from suppliers that were never formally qualified, or qualified once with no review since.
- Qualification on paper only: a questionnaire and an ISO certificate on file with no evidence anyone evaluated them.
- An ISO 9001 certificate filed as if it proved GMP compliance, or a certificate whose scope did not cover the material.
- The approval decision made by procurement on cost or speed rather than by QA on quality.
- A supplier qualified for material X or site A shipping material Y or from site B, with the AVL scope never updated.
- Tier 1 suppliers past their re-audit date with no documented risk-based extension.
- A supplier change to a site or method discovered from a certificate of analysis rather than a notification.

## How to adapt this SOP

1. Set your document number, owner, and effective date in the header.
2. Set the band boundaries in section 5.1 to match your risk appetite, and keep the rubric numeric so tiering stays defensible.
3. Point the cross-references in sections 2, 5.4 to 5.7, and 5.9 to your real procurement, audit, audit-finding-classification, deviation, and quality risk management procedures, and to your quality agreement template.
4. If you use reduced or skip-lot incoming testing, name the justification and the data that supports it in your monitoring section.
5. Confirm every regulation in section 7 against the current published version before issue.
