---
title: "Risk Assessment: AI Supplier and Vendor Assessment"
description: "A plug-and-play risk assessment for an AI or SaaS supplier: model and data practices, validation evidence provided, transparency and explainability, change notification, security and data location, the shared-responsibility split, and ongoing oversight, with scoring, a conclusion, and a filled specimen."
pubDate: 2026-06-22
docType: "Risk Assessment"
pillar: "csv-csa"
relatedArticles: ["supplier-vendor-qualification", "software-supplier-assessment-csa", "ai-risk-assessment-gxp"]
tags: ["AI", "supplier assessment", "vendor qualification", "CSA", "shared responsibility", "GAMP 5", "explainability", "data integrity"]
tier: "Advanced"
---

This is a ready-to-use risk assessment for qualifying a supplier of an AI or machine-learning enabled product, including hosted SaaS. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

This assessment sits on top of, not in place of, your standard supplier qualification and your computer software assurance work. Use it to decide how much you can rely on the supplier's own evidence and where you must add your own controls. The output is a documented reliance decision, not a guarantee of compliance.

## Document control header

| Field | Entry |
|---|---|
| Document title | AI Supplier and Vendor Risk Assessment |
| Document number | `<<FILL: RA-ID, e.g. RA-CSV-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Assessment owner | `<<FILL: role, e.g. CSV Lead / System Owner>>` |
| Supplier assessed | `<<FILL: supplier legal name>>` |
| Product / service | `<<FILL: product name and version or model identifier>>` |
| Intended GxP use | `<<FILL: what decision or record the AI supports>>` |
| Hosting model | `<<FILL: on-premise / single-tenant SaaS / multi-tenant SaaS>>` |

## 1. Purpose

This assessment determines how far `<<FILL: COMPANY NAME>>` can rely on `<<FILL: supplier name>>` for the AI or machine-learning product named above, and what `<<FILL: COMPANY NAME>>` must do itself to keep the GxP records and decisions the product touches trustworthy. It records the evidence the supplier provided, scores the risk across the areas that matter for an AI supplier, and states a reliance decision with required actions.

## 2. Scope

This assessment covers the supplier's model development and data practices, the validation or qualification evidence the supplier supplies, transparency and explainability of the model, how the supplier notifies customers of changes (including model retraining), security and data location, the split of responsibilities between supplier and customer, and the ongoing oversight `<<FILL: COMPANY NAME>>` will run after go-live.

It does not replace the supplier quality questionnaire, the audit or assessment of the supplier's quality management system, or the system-level validation. It feeds those activities. Where the product has no AI or machine-learning component, use the standard software supplier assessment instead and record that decision in section 12.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Assessment owner (CSV lead or system owner) | Gathers supplier evidence, completes the scoring, drafts the reliance decision and required actions. |
| Quality Assurance | Reviews the assessment, confirms the reliance decision is justified by the evidence, approves it. |
| Data privacy / security | Reviews data location, security controls, and the data-processing terms; confirms acceptability. |
| Subject matter expert (process or data science) | Confirms the model's intended use, the meaning of the supplier's performance claims, and the explainability needs of the decision. |
| Supplier | Provides the evidence requested, completes the shared-responsibility split, and commits to the change-notification terms in writing. |

## 4. Definitions

- **AI / machine-learning product**: a product whose behavior is derived from training on data rather than only from explicitly coded rules, and whose output is a prediction, classification, ranking, or generated content used in a GxP context.
- **Locked model**: a model whose parameters are fixed at release and do not change in production unless the supplier issues a new version. Contrast with a continuously learning or adaptive model that updates from production data.
- **Explainability**: the degree to which a human can understand why the model produced a given output, whether by design (interpretable model) or by an added method (post-hoc explanation, confidence score, contributing features).
- **Shared-responsibility split**: the documented allocation, control by control, of who performs and who evidences each activity between supplier and customer. The customer is accountable for the GxP outcome regardless of who performs the control.
- **Predetermined change control plan**: a supplier-defined, pre-agreed description of what model changes are anticipated, how they will be made, and how they will be validated, so that some changes can proceed without a new full qualification.

## 5. Assessment method

Score each of the seven areas in section 6 on the scale below. Score from the evidence the supplier actually provided, not from marketing claims or verbal assurance. Where the supplier provides nothing, score it as a gap, not as neutral.

| Score | Meaning |
|---|---|
| 1 | Strong: documented evidence provided and adequate for the intended use; little or no added customer control needed. |
| 2 | Adequate: evidence provided with minor gaps that a defined customer action can close. |
| 3 | Weak: evidence partial, unclear, or unverified; significant customer control or a follow-up action required before reliance. |
| 4 | Unacceptable: no usable evidence, or evidence that contradicts the intended use; do not rely until resolved. |

Then combine the area scores with the intended-use risk (how much harm a wrong or unexplained AI output could do to a patient, a product, or a record) to reach the reliance decision in section 8. A high-risk use raises the bar: areas that would be acceptable for a low-risk use may need to score 1 or 2 for a high-risk use.

## 6. Assessment areas

### 6.1 Model development and data practices

Confirm how the model was built and on what data, because the training data and method set the ceiling on how the model will behave in your hands.

Request and record:

1. A description of the model type and what it was designed to do.
2. The source, size, and representativeness of the training data, and whether it resembles your population and use.
3. How the training data was labeled, who labeled it, and how label quality was controlled.
4. Whether the data is subject to known bias, and how the supplier tested for it.
5. How training data is version-controlled and retained, so a given model version can be traced to its data.

| Item | Evidence provided | Score (1-4) | Note |
|---|---|---|---|
| Model type and intended behavior described | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Training data source and representativeness | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Labeling method and quality control | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Bias testing performed | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Data and model version control | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

### 6.2 Validation evidence provided

Confirm what the supplier validated and whether the evidence is usable for your intended use, not just that a document exists.

Request and record:

1. The performance metrics claimed (for example accuracy, sensitivity, specificity, F1, error rate) and the threshold set for each.
2. The test set used: its size, how it was held out, and whether it resembles your data.
3. A confusion matrix or equivalent breakdown, not only a single headline number.
4. The supplier's own validation or verification report, with a clear statement of intended use and limits.
5. Evidence the supplier can reproduce a given result for a given model version.

| Item | Evidence provided | Score (1-4) | Note |
|---|---|---|---|
| Performance metrics and thresholds stated | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Test set described and representative | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Result breakdown beyond a headline number | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Supplier validation report with stated limits | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Reproducibility of a result per version | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

### 6.3 Transparency and explainability

Confirm whether a human reviewer can understand and challenge an output, sized to how much human judgment your decision requires.

Request and record:

1. Whether the model is interpretable by design or relies on post-hoc explanation.
2. What the product shows the user for each output: a confidence score, contributing factors, or only a result.
3. Whether the user can see when the model is operating outside the conditions it was validated for (out-of-distribution input).
4. For a generative model, how the product handles content that cannot be verified, and whether it surfaces uncertainty rather than asserting it.

| Item | Evidence provided | Score (1-4) | Note |
|---|---|---|---|
| Interpretable by design or post-hoc explanation | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Per-output information shown to the user | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Out-of-distribution input flagged | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Uncertainty surfaced (generative) | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

### 6.4 Change notification and model lifecycle

Confirm how you will learn that the model changed, because a model can change behavior with no code release and no notice unless the contract requires it.

Request and record:

1. Whether the production model is locked or continuously learning.
2. How and how far in advance the supplier notifies customers of a model change, including retraining.
3. Whether the supplier operates a predetermined change control plan and will share it.
4. What re-validation evidence the supplier provides with each change.
5. Whether you can stay on a prior model version, or pre-test a new version, before it is forced into production.

| Item | Evidence provided | Score (1-4) | Note |
|---|---|---|---|
| Locked vs continuously learning stated | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Advance change notification committed in writing | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Predetermined change control plan shared | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Re-validation evidence per change | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Version pinning or pre-test before forced update | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

### 6.5 Security and data location

Confirm where your data goes, who can reach it, and whether your inputs train someone else's model.

Request and record:

1. The hosting region and the legal jurisdiction of the data.
2. Whether your inputs or outputs are used to train the supplier's models, and how to opt out.
3. Access controls, tenant isolation in a multi-tenant service, and encryption in transit and at rest.
4. An independent security attestation or report, with date and scope.
5. Breach notification terms and the supplier's incident history if disclosed.

| Item | Evidence provided | Score (1-4) | Note |
|---|---|---|---|
| Data location and jurisdiction stated | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Customer data not used for training (or opt-out) | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Access control, isolation, encryption | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Independent security attestation (dated) | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Breach notification terms | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

### 6.6 Shared-responsibility split

Confirm, control by control, who performs and who evidences each activity, because a hosted AI service leaves you accountable for outcomes you do not directly control.

Use the split below and resolve any control marked "unclear" before reliance. The customer remains accountable for the GxP outcome in every row.

| Control | Performed by | Evidenced by | Score (1-4) | Note |
|---|---|---|---|---|
| Infrastructure qualification | `<<FILL: supplier>>` | `<<FILL: supplier report>>` | `<<FILL>>` | `<<FILL>>` |
| Model development and supplier validation | `<<FILL: supplier>>` | `<<FILL: supplier report>>` | `<<FILL>>` | `<<FILL>>` |
| Intended-use validation in your process | `<<FILL: customer>>` | `<<FILL: your PQ/UAT>>` | `<<FILL>>` | `<<FILL>>` |
| Configuration and access management | `<<FILL: split>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Audit trail of AI outputs and overrides | `<<FILL: split>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Human review of AI output before use | `<<FILL: customer>>` | `<<FILL: your SOP/record>>` | `<<FILL>>` | `<<FILL>>` |
| Performance monitoring in production | `<<FILL: split>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

### 6.7 Ongoing oversight

Confirm what you will do after go-live, because an AI supplier assessment is not a one-time gate; the model and its inputs drift.

Define and record:

1. The performance metric you will monitor in production and its action limit.
2. How you will detect data drift or a performance drop, and who reviews it.
3. The human review step that stands between an AI output and its use, and how it is recorded.
4. The frequency of supplier re-assessment, and what triggers an off-cycle one (a model change, a security event, a performance breach).
5. The fallback if the AI is unavailable or its output is rejected.

| Item | Evidence / plan | Score (1-4) | Note |
|---|---|---|---|
| Production metric and action limit defined | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Drift and performance-drop detection | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Human review step before use, recorded | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Re-assessment frequency and triggers | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Fallback when AI unavailable or rejected | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 7. Score summary

| Area | Highest (worst) score in area | Comment |
|---|---|---|
| 6.1 Model development and data | `<<FILL>>` | `<<FILL>>` |
| 6.2 Validation evidence | `<<FILL>>` | `<<FILL>>` |
| 6.3 Transparency and explainability | `<<FILL>>` | `<<FILL>>` |
| 6.4 Change notification and lifecycle | `<<FILL>>` | `<<FILL>>` |
| 6.5 Security and data location | `<<FILL>>` | `<<FILL>>` |
| 6.6 Shared-responsibility split | `<<FILL>>` | `<<FILL>>` |
| 6.7 Ongoing oversight | `<<FILL>>` | `<<FILL>>` |
| Intended-use risk (Low / Medium / High) | `<<FILL>>` | `<<FILL>>` |

## 8. Reliance decision

Choose one and justify it from the scores above.

- **Rely with standard oversight**: no area scores 3 or 4; intended-use risk is Low or Medium. Proceed with the ongoing oversight in 6.7.
- **Rely with conditions**: one or more areas score 3, or intended-use risk is High with all areas at 1 or 2. Proceed only after the required actions in section 9 are complete or scheduled, with QA agreement.
- **Do not rely yet**: any area scores 4, or a High-risk use has an unresolved 3. Hold reliance until the gap is closed and the area is rescored.

Decision: `<<FILL: rely / rely with conditions / do not rely>>`
Justification: `<<FILL: tie the decision to the scores and the intended-use risk>>`

## 9. Required actions

| Action | Owner | Due date | Closes which area | Status |
|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Open / Closed |

## 10. Acceptance criteria

The assessment is acceptable when all of the following are true:

- Every area in section 6 is scored from supplier-provided evidence, with gaps scored as gaps, not left blank.
- The intended-use risk is stated and used to set the bar for the high-impact areas.
- The shared-responsibility split has no control left as "unclear".
- The reliance decision matches the decision rules in section 8 and is justified against the scores.
- Every required action has an owner and a due date, and no area scoring 4 is left open at go-live.
- The assessment is signed by the owner and approved by QA, with security and privacy sign-off where data leaves your control.

## 11. References

> 21 CFR Part 11 (electronic records and signatures) and EU GMP Annex 11 (computerised systems), for record integrity, access control, and audit trails that apply to AI outputs.
> EU GMP Annex 11 and the general principle that a regulated company stays responsible for an activity it outsources to a supplier.
> ICH Q9(R1), Quality Risk Management, for sizing the assessment and the reliance decision to risk.
> GAMP 5 Second Edition (ISPE), risk-based supplier assessment and the appendix material on AI and machine learning. GAMP 5 is industry guidance, not law.
> FDA "Computer Software Assurance for Production and Quality Management System Software" (draft September 2022, finalized September 2025), for intended-use-driven, risk-based assurance. Confirm the current version and date before relying on it.
> FDA "Marketing Submission Recommendations for a Predetermined Change Control Plan for Artificial Intelligence-Enabled Device Software Functions" (final, December 2024), for the predetermined change control plan concept.
> FDA "Artificial Intelligence-Enabled Device Software Functions: Lifecycle Management and Marketing Submission Recommendations" (January 2025 draft), a separate draft device document; confirm its current status before relying on it.
> EU Artificial Intelligence Act, Regulation (EU) 2024/1689, which applies in phases. Confirm the current applicable dates and whether your use falls in scope before citing it.

Confirm the current version, status, and clause numbers of each reference before issue. Where a guidance is draft or evolving, record that in your assessment rather than presenting it as settled requirement.

## 12. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 13. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (assessment owner) | `<<FILL>>` | | |
| Reviewer (QA) | `<<FILL>>` | | |
| Reviewer (security / privacy) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the same assessment completed for an example supplier of a hosted deviation-triage model that classifies incoming deviation reports by likely category and severity. The company, supplier, and numbers are illustrative; replace them with your own. The product output is reviewed by a human before any classification is accepted, which is why the intended-use risk lands at Medium rather than High. No area scored 3 or 4 and the intended-use risk is Medium, so by the section 8 rules this lands at "Rely with standard oversight", and the two scheduled items below are routine follow-ups under that oversight, not conditions that gate reliance.

**Header (extract)**

| Field | Entry |
|---|---|
| Supplier assessed | Example Quality AI Ltd |
| Product / service | DeviationSort, model version 3.2 |
| Intended GxP use | Suggests a category and severity for each new deviation; a quality reviewer accepts or changes it before it is recorded |
| Hosting model | Multi-tenant SaaS |

**Score summary**

| Area | Worst score | Comment |
|---|---|---|
| 6.1 Model development and data | 2 | Training data described and representative; bias testing limited to category balance, no demographic dimension (acceptable for this use). |
| 6.2 Validation evidence | 1 | Validation report supplied, F1 0.91 on a held-out set of 4,000 deviations, confusion matrix included, threshold 0.85 stated. |
| 6.3 Transparency and explainability | 2 | Each output shows top three contributing phrases and a confidence score; no out-of-distribution flag, added as a required action. |
| 6.4 Change notification and lifecycle | 2 | Locked model, retrained quarterly; 30-day advance notice and a pre-test version committed in the contract; predetermined change control plan shared. |
| 6.5 Security and data location | 1 | EU hosting, customer data not used for training (opt-out confirmed in writing), independent security attestation dated within 12 months. |
| 6.6 Shared-responsibility split | 2 | All rows resolved; intended-use validation and human review sit with us, supplier evidences model validation and infrastructure. |
| 6.7 Ongoing oversight | 1 | Monthly accuracy check against reviewer overrides, action limit set at a 10% override rate, drift review by the quality systems owner. |
| Intended-use risk | Medium | A wrong suggestion is caught by mandatory human review before the record is set. |

**Reliance decision**

Rely with standard oversight. No area scores 3 or 4 and the intended-use risk is Medium, which by the section 8 rules is "Rely with standard oversight". Decision justified because the only weak point, the missing out-of-distribution flag in 6.3, is mitigated by mandatory human review. The two items below are scheduled as standard-oversight follow-ups, not as conditions that gate reliance. QA agreed in writing.

**Standard-oversight follow-ups (extract)**

| Action | Owner | Due date | Improves which area | Status |
|---|---|---|---|---|
| Supplier to add an out-of-distribution flag to each output | Vendor manager | 15 Jul 2026 | 6.3 | Open |
| Document the monthly override-rate monitoring in our SOP | Quality systems owner | 30 Jun 2026 | 6.7 | Open |

In this example the assessor scored from the supplier's actual validation report rather than its sales claims, scored the missing explainability flag as a real gap rather than waving it through, set the reliance decision to "rely with standard oversight" because no area scored 3 or 4 and the use is Medium risk, and kept a human review between the model and the record. The two dated follow-ups run under that standard oversight rather than gating reliance. That chain, evidence to score to a justified reliance decision to ongoing monitoring with dated follow-ups, is what an inspector expects to see behind an AI supplier you depend on.

## Common inspection findings this assessment prevents

- The supplier was qualified with a generic software questionnaire that never addressed the model, its training data, or how it changes.
- The supplier's performance claim was accepted from marketing material, with no validation report, test set, or threshold behind it.
- No one can say whether the production model is locked or continuously learning, so a behavior change could go unnoticed.
- There is no contractual commitment to notify the customer before the model is retrained or replaced.
- The shared-responsibility split was never documented, so controls the supplier assumed the customer ran, and the customer assumed the supplier ran, were run by no one.
- The AI output feeds a GxP decision with no recorded human review and no production monitoring for drift.
- Customer data is processed by the supplier with no clarity on data location or on whether the inputs train the supplier's models.

## How to adapt this assessment

1. Set your document number, owner, and effective date in the header, and name the supplier, product version or model identifier, intended use, and hosting model.
2. State the intended-use risk first, in section 7. It sets the bar for the high-impact areas before you score anything.
3. Score each area in section 6 from the evidence the supplier actually provided. Score a gap as a gap, never leave it blank, and never score a verbal assurance as if it were evidence.
4. Resolve every "unclear" row in the shared-responsibility split (6.6) before you reach a reliance decision; an unallocated control is an uncontrolled one.
5. For a locked model, focus on the validation evidence and the change-notification terms. For a continuously learning model, raise the bar on ongoing oversight (6.7) and on your ability to pin or pre-test a version.
6. Apply the decision rules in section 8 exactly: any area at 4, or an unresolved 3 on a high-risk use, holds reliance until the gap is closed and the area is rescored.
7. Set a re-assessment trigger, not only a date: a model change, a security event, or a breach of your production action limit should pull the assessment forward.
8. Confirm every regulation in section 11 against the current published version before issue, and mark any draft or evolving guidance as such in your own record.
