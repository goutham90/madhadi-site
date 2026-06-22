---
title: "Record: AI/ML Model Card and Credibility Record"
description: "A plug-and-play model card and credibility record for a GxP AI/ML model: model identity and version, intended use and context of use, training, validation and test data, performance metrics, limitations and out-of-scope uses, bias and fairness checks, explainability, the monitoring plan, and approval, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-22
docType: "Record"
pillar: "ai-automation"
relatedArticles: ["ai-model-credibility-trust", "gxp-ml-model-lifecycle"]
tags: ["AI", "machine learning", "model card", "credibility", "GAMP 5", "validation", "monitoring", "record"]
tier: "Advanced"
---

This is a ready-to-use record. It captures, in one controlled document, what an AI or machine learning model is, what it is allowed to decide, the data behind it, how well it performs, where it should not be trusted, and how its continued performance is watched. The model card is the single artifact an inspector, a reviewer, or a future investigator reaches for to understand a model without reading its source code. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it, and note that AI-specific guidance is still evolving, so treat any draft reference as draft.

## Control header

| Field | Entry |
|---|---|
| Document title | AI/ML Model Card and Credibility Record |
| Document number | `<<FILL: REC-ID, e.g. REC-AI-007>>` |
| Model name | `<<FILL: model name>>` |
| Model version | `<<FILL: version / hash, e.g. v2.1 / git tag>>` |
| Version | `<<FILL: record version, e.g. 1.0>>` |
| Effective date | `<<FILL: date the card represents>>` |
| Supersedes | `<<FILL: prior model card version or "New">>` |
| Owner | `<<FILL: role, e.g. System Owner>>` |
| GAMP category | `<<FILL: 4 / 5 and basis>>` |

## 1. Model identity and version

| Item | Entry |
|---|---|
| Model name and identifier | `<<FILL: name / unique ID>>` |
| Model version | `<<FILL: version and exact artifact hash>>` |
| Model type / family | `<<FILL: e.g. gradient-boosted trees, CNN, fine-tuned LLM, vendor API model>>` |
| Locked or continuously learning | `<<FILL: locked / adaptive, with basis>>` |
| Base model and provider (if applicable) | `<<FILL: vendor / open-source base and pinned version, or N/A>>` |
| Code / pipeline repository and commit | `<<FILL: repo and commit reference>>` |
| Frozen training dataset version | `<<FILL: dataset version / hash>>` |
| Date trained | `<<FILL: date>>` |
| Linked validation record | `<<FILL: validation report number>>` |
| Linked change control (this version) | `<<FILL: change record number or "Initial">>` |

State whether the model is locked (fixed parameters, same output for the same input) or continuously learning. Almost every defensible GxP model is locked, and a change to the weights is a new version recorded on a new card. If the model calls a vendor base model through an API, pin the version you can and record that the provider may change it under you.

## 2. Intended use and context of use

| Item | Entry |
|---|---|
| What the model outputs | `<<FILL: e.g. a criticality tier, a class label, a probability>>` |
| What action the output triggers | `<<FILL: the downstream decision or workflow>>` |
| Accountable role for the consequence | `<<FILL: who owns the final decision>>` |
| Use pattern | `<<FILL: advisory / automated classification / process control>>` |
| Risk class and basis | `<<FILL: risk rating with ICH Q9(R1) based rationale>>` |
| Human control in operation | `<<FILL: the defined human review step, or the deterministic interlock for process control>>` |
| Out-of-scope uses | `<<FILL: uses explicitly not validated, see section 5>>` |

Write one plain sentence that names the model output, the action it triggers, and the role accountable for the consequence. If you cannot write that sentence cleanly, the intended use is not yet defined, and nothing downstream can be sized correctly. The use pattern sets the rest of the card: an advisory model that only flags items for a reviewer needs less than a model that drives a manufacturing parameter.

## 3. Training, validation, and test data

| Item | Entry |
|---|---|
| Source systems and extract date | `<<FILL: source(s), date pulled>>` |
| Record count and date range | `<<FILL: n records, from-to>>` |
| Products / sites / instruments represented | `<<FILL: coverage>>` |
| Representativeness assessment | `<<FILL: how the data reflects the production population and known gaps>>` |
| Class balance / base rates | `<<FILL: positive rate, e.g. 8 percent critical>>` |
| Labeling procedure | `<<FILL: labeling SOP reference>>` |
| Labelers and qualifications | `<<FILL: who labeled, their qualification basis>>` |
| Inter-rater agreement (subjective labels) | `<<FILL: metric and value, e.g. Cohen kappa 0.81>>` |
| Disagreement resolution | `<<FILL: how label conflicts were resolved>>` |
| Train / validation / test split method | `<<FILL: split ratios and method, e.g. time-based holdout>>` |
| Test set held out and locked | Yes / No (if No, raise a gap) |
| Dataset version / hash | `<<FILL: frozen dataset reference>>` |

The integrity of the model is bounded by the integrity of the data it learned from. Keep three separate splits: training, validation or tuning, and a locked test set touched once at the end to report the headline number. The test set, ideally drawn from a period after the training data so it mimics real deployment, is the only honest measure. Production data later pulled to retrain the model is itself a GxP record and carries the full ALCOA+ expectations.

## 4. Performance metrics

State the performance specification that was set before training, then the measured result on the locked test set.

| Metric | Specification (set pre-training) | Measured (locked test set) | Pass / Fail |
|---|---|---|---|
| `<<FILL: e.g. recall / sensitivity>>` | `<<FILL: threshold and justification>>` | `<<FILL: value>>` | `<<FILL>>` |
| `<<FILL: e.g. precision>>` | `<<FILL: threshold>>` | `<<FILL: value>>` | `<<FILL>>` |
| `<<FILL: e.g. specificity>>` | `<<FILL: threshold>>` | `<<FILL: value>>` | `<<FILL>>` |
| `<<FILL: e.g. F1 / composite>>` | `<<FILL: threshold>>` | `<<FILL: value>>` | `<<FILL>>` |
| `<<FILL: confidence calibration>>` | `<<FILL: expectation>>` | `<<FILL: result>>` | `<<FILL>>` |

| Item | Entry |
|---|---|
| Test population (size, positives) | `<<FILL: n, positive count>>` |
| Confidence interval / uncertainty | `<<FILL: CI on the headline metric, important when positives are rare>>` |
| Confusion matrix attached | `<<FILL: reference or inline>>` |
| Specification predates test report | Yes / No (if No, this is a finding) |

Tie each threshold to the consequence of error. Where a missed positive is the dangerous failure, set a high recall threshold and accept lower precision, then catch the false positives in human review. A single point estimate on a small positive count is fragile, so report a confidence interval or a sensitivity check.

## 5. Limitations and out-of-scope uses

State, plainly, where the model is not to be trusted. This protects the model from being used outside the conditions it was validated for.

- **Known weaknesses:** `<<FILL: conditions where performance is lower, e.g. a product line under-represented in training, rare event types>>`
- **Input boundaries:** `<<FILL: data ranges, formats, or languages outside the validated envelope>>`
- **Out-of-scope uses:** `<<FILL: decisions the model must not be used for>>`
- **Failure mode if used out of scope:** `<<FILL: what goes wrong and the safeguard>>`
- **Dependence on upstream data quality:** `<<FILL: what the model assumes about its inputs>>`

## 6. Bias and fairness checks

Even outside a patient-facing setting, a model can systematically underperform on a subpopulation, a site, a product, or an instrument, which is an operational quality risk. Record what was checked.

| Item | Entry |
|---|---|
| Subgroups assessed | `<<FILL: e.g. by site, product line, instrument, shift>>` |
| Method | `<<FILL: per-subgroup performance comparison>>` |
| Result | `<<FILL: any subgroup gap and its size>>` |
| Disparity beyond threshold | Yes / No |
| Mitigation (if any) | `<<FILL: rebalancing, added data, scope restriction, or N/A>>` |

## 7. Explainability

Match the level of explanation to the use pattern: a confidence score and top features for an advisory model, a per-decision rationale for an automated classification, a deterministic interlock for process control.

| Item | Entry |
|---|---|
| Explanation method | `<<FILL: e.g. feature attribution family, confidence score, retrieved source grounding>>` |
| What a reviewer sees per decision | `<<FILL: the information presented to support review>>` |
| Stated limitations of the explanation | `<<FILL: e.g. attribution is approximate, methods can disagree>>` |
| Generative output grounding (if LLM) | `<<FILL: retrieval grounding and source check, or N/A>>` |

Do not present a post-hoc attribution as a guaranteed causal explanation. Two attribution methods can disagree on the same prediction. State what the explanation does and does not establish; an honest limitation reads better than an overclaim.

## 8. Monitoring plan

A model with no monitoring is not in a validated state, regardless of how it scored at release, because there is no evidence it still works.

| Item | Entry |
|---|---|
| What is monitored | `<<FILL: performance on labeled samples, override rate, input drift, confidence distribution>>` |
| Cadence | `<<FILL: e.g. quarterly labeled-sample review, continuous override tracking>>` |
| Acceptance criteria in operation | `<<FILL: the metric and threshold the model must hold>>` |
| Drift signals tracked | `<<FILL: data drift, concept drift, prediction drift>>` |
| Triggers for review | `<<FILL: schedule, distribution shift, override rate over threshold, feedback>>` |
| Defined response when a trigger fires | `<<FILL: notify whom, pause / route to fuller human review, investigate how>>` |
| Linked change control plan | `<<FILL: predetermined change control plan reference>>` |

The override or disagreement rate is cheap, continuous, and a strong leading indicator; a rising rate usually shows up before the formal metric review catches it. Define the response in advance, a monitoring system with no defined response is decoration.

## 9. Acceptance criteria

This model card is acceptable when all of the following are true:

- Model identity, version, and the exact training-data version are recorded and reproducible.
- The intended-use statement names the output, the action, and the accountable role, and the risk class has a documented ICH Q9(R1) based rationale.
- The performance specification was set before training, the headline metric was measured on a locked test set the model never saw, and the spec predates the test report.
- The training-data integrity record is complete: source, lineage, representativeness, labeling, inter-rater agreement, splits, and dataset version.
- Limitations and out-of-scope uses are stated, and bias and fairness across relevant subgroups were checked.
- The explainability entry matches the use pattern and states its own limitations.
- A monitoring plan is live from day one, with triggers and a defined response.
- The card is complete, signed, dated, and approved.

## 10. References

> 21 CFR Part 11 (electronic records and signatures) and EU GMP Annex 11 (clauses on risk management, change control, and periodic evaluation).
> GAMP 5 Second Edition (ISPE, 2022), including its appendices on AI and machine learning.
> FDA "Computer Software Assurance for Production and Quality System Software" (draft 2022, finalized 24 September 2025, with a further final version dated 3 February 2026; confirm the current version before relying on it).
> ICH Q9(R1), Quality Risk Management (2023 revision), for the risk-based sizing.
> FDA guidance on a Predetermined Change Control Plan for AI-enabled device software functions (final, 2024), for model-change thinking transferred by analogy. This is a device document, not a manufacturing rule.
> The EU AI Act, Regulation (EU) 2024/1689, applies on a phased timeline; confirm whether and when it reaches your use.

Confirm the current version, status, and clause numbers of each reference before issue. Several AI-specific references are evolving or are device documents applied by analogy, so state that in the record rather than presenting them as settled manufacturing law.

## 11. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Data Science / ML) | `<<FILL>>` | | |
| System owner | `<<FILL>>` | | |
| Reviewer (Validation / CSV) | `<<FILL>>` | | |
| Approver (Quality Assurance) | `<<FILL>>` | | |

## 12. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue for model `<<FILL: version>>`. |

---

## Filled specimen

The following shows the same record completed for an example deviation-classification model used in a quality system. The company, model, and numbers are illustrative; replace them with your own.

### Control header

| Field | Entry |
|---|---|
| Document title | AI/ML Model Card and Credibility Record |
| Document number | REC-AI-007 |
| Model name | DevTriage-Classifier |
| Model version | v2.1 / artifact sha 4f9c2a |
| Version | 1.0 |
| Effective date | 12 June 2026 |
| Supersedes | New |
| Owner | Quality Systems System Owner |
| GAMP category | 5 (custom model trained on internal data) |

### 1. Model identity and version

| Item | Entry |
|---|---|
| Model name and identifier | DevTriage-Classifier, ID AI-DEV-01 |
| Model version | v2.1, artifact sha 4f9c2a |
| Model type / family | Gradient-boosted trees on text and metadata features |
| Locked or continuously learning | Locked: weights frozen at training, any change is a new version under change control |
| Base model and provider | N/A, built in-house |
| Code / pipeline repository and commit | model-repo, commit 7b1e90 |
| Frozen training dataset version | DS-DEV-2026Q1, hash a18d33 |
| Date trained | 28 May 2026 |
| Linked validation record | VAL-AI-2026-004 |
| Linked change control (this version) | CC-2026-0211 |

### 2. Intended use and context of use

| Item | Entry |
|---|---|
| What the model outputs | A preliminary criticality tier (Minor / Major / Critical) for a new deviation |
| What action the output triggers | The tier sets the default investigation timeline |
| Accountable role for the consequence | QA reviewer, who confirms or overrides the tier within one business day |
| Use pattern | Advisory: the model proposes, a person confirms |
| Risk class and basis | Medium. A misclassification can delay an investigation but a QA reviewer confirms every tier before it takes effect (ICH Q9(R1) rationale on file) |
| Human control in operation | QA reviewer reviews the model tier, the top contributing features, and the deviation text, then sets the final tier in the deviation record |
| Out-of-scope uses | Not used to close deviations, not used for adverse-event or complaint classification, not used without QA confirmation |

Plain-sentence intended use: "The model assigns a preliminary criticality tier to each new deviation, the tier sets the investigation timeline, and the QA reviewer confirms or overrides the tier within one business day and owns the final classification."

### 3. Training, validation, and test data

| Item | Entry |
|---|---|
| Source systems and extract date | Deviation management system, extract 02 April 2026 |
| Record count and date range | 9,400 deviations, January 2023 to March 2026 |
| Products / sites / instruments represented | Three manufacturing sites, all commercial product lines |
| Representativeness assessment | Covers all sites and product lines; clinical-only product line under-represented, noted as a limitation |
| Class balance / base rates | 8 percent Critical, 31 percent Major, 61 percent Minor |
| Labeling procedure | Per SOP-QA-031, tier assigned by closed-out investigation outcome |
| Labelers and qualifications | Two senior QA investigators, qualified per training records |
| Inter-rater agreement | Cohen kappa 0.81 on a 300-record overlap sample |
| Disagreement resolution | Adjudicated by the QA lead, recorded |
| Train / validation / test split method | Time-based: train through Sep 2025, validation Oct-Dec 2025, test Jan-Mar 2026 |
| Test set held out and locked | Yes |
| Dataset version / hash | DS-DEV-2026Q1, hash a18d33 |

### 4. Performance metrics

| Metric | Specification (set pre-training) | Measured (locked test set) | Pass / Fail |
|---|---|---|---|
| Critical-class recall | At least 0.92 (a missed Critical is the dangerous failure) | 0.94 | Pass |
| Critical-class precision | At least 0.60 (false alarms handled by QA review) | 0.71 | Pass |
| Overall macro F1 | At least 0.80 | 0.83 | Pass |
| Confidence calibration | High-confidence outputs right about as often as stated | Within tolerance on calibration plot | Pass |

| Item | Entry |
|---|---|
| Test population (size, positives) | 980 deviations, 79 Critical |
| Confidence interval / uncertainty | Critical recall 95 percent CI 0.86 to 0.98 |
| Confusion matrix attached | Appendix A of VAL-AI-2026-004 |
| Specification predates test report | Yes, spec approved 12 May 2026, test report dated 03 June 2026 |

### 5. Limitations and out-of-scope uses

- Known weaknesses: lower recall on the clinical-only product line, which was under-represented in training.
- Input boundaries: validated on English-language deviation text only.
- Out-of-scope uses: not for adverse-event or complaint classification, not for closing deviations.
- Failure mode if used out of scope: a non-validated population would receive an untrustworthy tier; the QA confirmation step is the safeguard.
- Dependence on upstream data quality: assumes the deviation description field is completed at intake.

### 6. Bias and fairness checks

| Item | Entry |
|---|---|
| Subgroups assessed | By site and by product line |
| Method | Per-subgroup recall and precision compared to the overall figures |
| Result | Site 3 Critical recall 0.89 versus 0.94 overall; clinical-only line lower as noted |
| Disparity beyond threshold | No, gap within the pre-set 0.07 tolerance, but flagged for monitoring |
| Mitigation | Add clinical-line records at next retrain; restrict confidence threshold on Site 3 |

### 7. Explainability

| Item | Entry |
|---|---|
| Explanation method | Per-decision feature attribution plus model confidence |
| What a reviewer sees per decision | The proposed tier, confidence, and the five features that most influenced it |
| Stated limitations of the explanation | Attribution is approximate; it aids the reviewer, it is not a literal causal account |
| Generative output grounding | N/A, not a generative model |

### 8. Monitoring plan

| Item | Entry |
|---|---|
| What is monitored | Quarterly recall and precision on a labeled production sample; continuous QA override rate; monthly input-distribution check |
| Cadence | Quarterly metric review, override rate tracked continuously |
| Acceptance criteria in operation | Critical-class recall must stay at or above 0.92 |
| Drift signals tracked | Data drift on feature distribution, prediction drift on tier mix |
| Triggers for review | Quarterly schedule, override rate above 20 percent, a new product line, or recall below spec |
| Defined response when a trigger fires | Notify System Owner and QA, route all Critical-candidate deviations to full manual triage, open an investigation, decide on retrain via CC |
| Linked change control plan | PCCP-AI-001, predetermined change control plan |

### 9. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Data Science / ML) | L. Okafor | signed | 09 June 2026 |
| System owner | M. Reyes | signed | 10 June 2026 |
| Reviewer (Validation / CSV) | S. Donnelly | signed | 11 June 2026 |
| Approver (Quality Assurance) | R. Gomez | signed | 12 June 2026 |

In this example the card is dated after the validation report, the performance specification predates the test report, and the test set was held out by time period so it mimics deployment. A reviewer can read the card and know exactly what the model decides, how well, where not to trust it, and how its continued performance is watched, without ever reading the model code.

## Common inspection findings this record prevents

- A model is in production but there is no single document an inspector can read to understand what it decides and how well it performs.
- Performance is quoted but the test set was not held out, so the headline metric is inflated by data the model trained on.
- The acceptance criteria are dated after the test report, so the threshold looks fitted to the result.
- The training data has no lineage, labeling SOP, or version, so the model cannot be reproduced or investigated.
- Limitations and out-of-scope uses are not stated, so the model gets used on a population it was never validated for.
- There is no monitoring plan, so the validated state is asserted from release day rather than demonstrated months later.
- A model change happened with no new card and no change control, so the documentation no longer matches the deployed model.

## How to adapt this record

1. Set your document number, model name and version, and owner in the control header, and confirm the GAMP category against the trained model, not the platform's marketing category.
2. Write the plain-sentence intended use in section 2 first; everything else is sized from it. Set the use pattern (advisory, automated classification, process control) and the matching human control.
3. Fill the training-data record in section 3 from your actual extract, labeling SOP, and frozen dataset version, and confirm the test set was held out.
4. Enter the performance specification that was approved before training, then the measured result on the locked test set, and keep the dates so the spec visibly predates the test.
5. State limitations and out-of-scope uses honestly in section 5; this is what keeps the model from being misused later.
6. Match the explainability entry in section 7 to the use pattern, and state the limitations of the explanation method.
7. Make the monitoring plan in section 8 live from day one, with triggers and a defined response, and link it to a predetermined change control plan.
8. Confirm every regulation in section 10 against its current version and status before issue, and mark any draft or device-applied-by-analogy reference as such.
9. Issue a new card version for every model version; the card and the deployed model must always match.
