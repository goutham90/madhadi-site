---
title: "SOP: GxP Machine Learning Model Monitoring and Drift Detection"
description: "A plug-and-play standard operating procedure for ongoing performance monitoring and drift detection of a deployed GxP machine learning model: what to monitor, the thresholds, the cadence, alert routing, and the signed periodic report, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-28
docType: "SOP"
pillar: "ai-automation"
relatedArticles: ["gxp-ml-model-lifecycle", "validating-ai-gxp-systems", "computer-software-assurance-fda"]
tags: ["machine learning", "drift", "monitoring", "AI", "Annex 11", "validation", "SOP"]
tier: "Advanced"
---

This is a ready-to-use SOP for the operate phase of a machine learning model under GxP. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template. Verify each cited regulation against the current source before you rely on it. This content is educational reference, not legal or regulatory advice; adapt it to your own validated systems and quality system.

## Document control header

| Field | Entry |
|---|---|
| Document title | GxP Machine Learning Model Monitoring and Drift Detection |
| Document number | `<<FILL: SOP-ID, e.g. SOP-DS-021>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Data Science / Digital Quality>>` |
| Applies to | `<<FILL: systems / models in scope>>` |

## 1. Purpose

This procedure defines how `<<FILL: COMPANY NAME>>` monitors the ongoing performance of deployed machine learning (ML) models that produce or support GxP records or decisions, and how it detects model drift, so that the validated state of each model is continuously re-evidenced rather than assumed from a go-live test. An ML model can degrade silently after qualification because the input data or the underlying relationships move; this procedure makes that degradation visible and actionable before it reaches product or patient.

## 2. Scope

This procedure applies to every ML model in the GxP model inventory whose output creates, modifies, or informs a GxP record, decision, or process control (for example visual-inspection classifiers, deviation-triage models, anomaly detection on process data). It covers locked models on a defined retraining cadence and, where permitted, continuously learning models. It does not cover the initial validation and qualification of a model (see `<<FILL: SOP-ID for AI/ML validation>>`) or retraining execution (see `<<FILL: SOP-ID for ML retraining / change control>>`); it covers the monitoring that triggers those.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Model owner / SME | Defines metrics, thresholds, reference dataset, and cadence; reviews monitoring output; raises retraining triggers. |
| Data science / ML engineering | Builds and runs the monitoring pipeline, logs predictions, generates drift and performance metrics, raises alerts. |
| Quality Assurance | Approves thresholds and cadence, reviews and approves the periodic monitoring report, oversees breach handling. |
| System owner / IT | Maintains the inference platform, the prediction log as a GxP record, time synchronization, and access control. |
| Vendor management (for hosted models) | Maintains the supplier agreement requiring model version-change notification. |

## 4. Definitions

- **Reference dataset**: the version-controlled snapshot of the data the model was trained and validated against, retained immutably so live data can be compared to it.
- **Data drift (covariate shift)**: a change in the distribution of input features while the input-to-output relationship is unchanged.
- **Concept drift**: a change in the relationship between inputs and the correct output; the inputs may look the same but the right answer has moved. Input-only monitoring does not catch it.
- **Prediction drift (label drift)**: a change in the distribution of the model's outputs. Cheap to monitor, often the earliest warning, but ambiguous.
- **Validated performance floor**: the metric value, set from the qualification dataset, below which the model is no longer considered to meet its validated state.
- **Warn / Act threshold**: the two-stage alert levels for a metric; warn means investigate, act means a defined response is mandatory.

## 5. Procedure

### 5.1 Define what to monitor (per model)

For each model, document in its monitoring plan the metrics across three levels:

1. **Model quality.** The task-appropriate metric tied to the GxP harm. For a defect classifier where a false negative ships a defect, the headline metrics are recall and false-negative rate, not raw accuracy. State the metric, its validated floor, and its rationale.
2. **Drift.** Data drift per critical input feature, concept drift via ground truth where available, and prediction drift on the output distribution. Name the statistical test per feature (for example Population Stability Index, Kolmogorov-Smirnov for continuous features, chi-square for categorical features).
3. **Operational health and human-in-the-loop.** Latency, error rate, input completeness and out-of-range rates, throughput, and the human override rate and override-time. A rising override rate is one of the earliest honest signals of trouble.

### 5.2 Set thresholds before monitoring starts

1. Set each metric's validated floor from the qualification dataset, and each drift threshold (warn and act) with a documented rationale. A common Population Stability Index rule of thumb is below 0.10 no meaningful shift, 0.10 to 0.25 moderate, above 0.25 significant; treat it as a starting point to justify, not a validated limit.
2. Thresholds are approved by the model owner and QA and recorded in the monitoring plan. They are set before monitoring data is collected, never reverse-engineered to make the current data pass.

### 5.3 Log every prediction as a GxP record

For each inference, log the model name and version, the input features (or a hash plus a reference to retained inputs), the output, the timestamp, and the eventual ground truth where it arrives. This log meets ALCOA+ and is retained per the records schedule. The model version on every record is the cheapest control here and the one whose absence hurts most.

### 5.4 Run monitoring at the defined cadence

1. Set the review cadence by risk: a high-impact model used in disposition may be reviewed monthly with automated daily alerting; a low-impact assist may be quarterly.
2. The monitoring pipeline computes the metrics in 5.1 against the thresholds in 5.2 over the period.
3. On a warn breach, the named owner investigates and records the assessment. On an act breach, the defined response is mandatory: open a deviation and evaluate the retraining trigger (see `<<FILL: SOP-ID for retraining>>`); for a continuously learning model, confirm automated guardrails (bounded gates, automatic rollback) operated.

### 5.5 Produce and approve the periodic monitoring report

1. Compile the period's results into the monitoring report (section 8) for every reporting period, with no gaps, including periods with no findings.
2. The model owner signs; QA reviews and approves within `<<FILL: number>>` working days. This signed report is the documented evidence under EU GMP Annex 11 periodic-evaluation expectations that the model remains in a validated state.
3. Link every act breach to its deviation or change control. Retain the report per the records schedule.

### 5.6 Hosted and vendor models

Where the model runs as a vendor-hosted API, confirm at each review that the served model version matches the validated version, using the logged version and the supplier's version-change notifications. A silent vendor update breaks the locked-and-validated assumption and is treated as an uncontrolled change.

## 6. Acceptance criteria

A monitoring period is acceptable when all of the following are true:

- Thresholds were defined and approved before the period and were not altered to pass the data.
- Every in-scope metric was computed and compared to its threshold, with no gaps in the prediction log or the report series.
- Every warn breach was investigated and every act breach was routed to a deviation or change control, with affected output held where required.
- The served model version matched the validated version (or a version change was managed as a change).
- The periodic monitoring report is complete, signed, dated, and approved within the defined time.

## 7. References

> 21 CFR Part 11 (electronic records and signatures).
> EU GMP Annex 11 (computerised systems), general principles, change control, and periodic evaluation.
> EU GMP Annex 22, Artificial Intelligence (draft, 2025; confirm status before relying on it).
> FDA guidance, Computer Software Assurance for Production and Quality Management System Software (final 24 September 2025).
> FDA draft guidance, Considerations for the Use of Artificial Intelligence to Support Regulatory Decision-Making for Drug and Biological Products (draft, 7 January 2025).
> ICH Q9(R1), Quality Risk Management.
> GAMP 5 (Second Edition) and its AI/ML guidance, described by reference only.

Confirm the current version and clause numbers of each reference before issue.

## 8. Record generated: periodic ML model monitoring report

| Field | Entry |
|---|---|
| Model name and version | `<<FILL: MODEL NAME / VERSION>>` |
| Reporting period | `<<FILL: from date>>` to `<<FILL: to date>>` |
| Reference dataset version | `<<FILL: dataset version ID>>` |
| Predictions in period | `<<FILL: count>>` |
| Model quality vs floor | `<<FILL: metric, validated floor, current value, status>>` |
| Drift summary | `<<FILL: data / concept / prediction drift results vs thresholds>>` |
| Override / disagreement rate | `<<FILL: value vs threshold>>` |
| Operational health | `<<FILL: latency, error rate, input quality issues>>` |
| Served version = validated version | Yes / No (if No, raise change) |
| Breaches and routing | `<<FILL: none, or list with deviation / change references>>` |
| Conclusion | Remains validated / Requires retraining / Suspended |
| Model owner (name, signature, date) | `<<FILL>>` |
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

The following shows the monitoring record completed for an example visual-inspection classifier, so you can see the level of detail an inspector expects. The company, model, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Model name and version | VisInspect defect classifier, v3.1 |
| Reporting period | 01 May 2026 to 31 May 2026 |
| Reference dataset version | REF-2025-11 (locked) |
| Predictions in period | 84,200 |
| Model quality vs floor | Recall 0.94 vs floor >= 0.95: FAIL. False-negative rate 6.0% vs <= 5.0%: FAIL |
| Drift summary | Input brightness PSI 0.07 (OK); defect-feature PSI 0.21 (warn, investigate); reject rate 2.4% within 1.5 to 3.0% band (OK) |
| Override / disagreement rate | 9% vs < 6% threshold: FAIL |
| Operational health | Latency 130 ms (OK); input completeness 99.8%; 12 out-of-range frames quarantined |
| Served version = validated version | Yes |
| Breaches and routing | Recall, false-negative rate, and override act-breaches: DEV-2026-0188 opened; retraining trigger raised under change control CC-2026-0091 |
| Conclusion | Requires retraining |
| Model owner | J. Okafor, signed, 03 June 2026 |
| QA approval | R. Gomez, signed, 04 June 2026 |

In this example recall fell below the validated floor while inputs were mostly stable and human overrides tripled. That pattern is a concept-drift signal: the world moved in a way input monitoring alone would have missed. The owner opened a deviation, raised the retraining trigger under change control, and held nothing was released on the failing model without QA assessment. Finding to deviation to controlled retraining is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this SOP prevents

- The model was validated at go-live and never monitored again, so there is no evidence it still works.
- Monitoring lives in a data-science notebook with no signed report and no QA review.
- Predictions are logged without the model version, so a performance drop cannot be tied to a version.
- Only input drift is monitored, so concept drift sails straight through.
- Thresholds were set after seeing the data so the model always passes.
- A vendor silently updated a hosted model and no one detected the version change.

## How to adapt this SOP

1. Set your document number, owner, and effective date in the header.
2. Replace the generic metric set in section 5.1 with the actual metrics, floors, and tests for each model in your inventory.
3. Point the cross-references in sections 2 and 5.4 to your real AI/ML validation and retraining procedures.
4. Confirm the cadence in 5.4 against each model's risk class.
5. Confirm every regulation in section 7 against the current published version, including the draft status of Annex 22, before issue.
