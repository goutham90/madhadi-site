---
title: "Risk Assessment: AI/ML System Risk Assessment"
description: "A plug-and-play risk assessment for an AI or machine learning system in a GxP context: intended use, patient/product/data impact, model risk factors, a scoring scale, risk class, assurance depth, mitigations, residual risk, and approval, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-22
docType: "Risk Assessment"
pillar: "ai-automation"
relatedArticles: ["ai-risk-assessment-gxp", "validating-ai-gxp-systems"]
tags: ["AI", "machine learning", "risk assessment", "validation", "GxP", "ICH Q9", "model drift"]
tier: "Advanced"
---

This is a ready-to-use risk assessment for an AI or machine learning system used in a GxP process. It sizes how much assurance the system needs by reasoning about the model's intended use, the harm a wrong output could cause, and the model-specific factors (data quality, drift, explainability, autonomy, and human oversight) that traditional software does not have. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Confirm each cited regulation against the current source before you rely on it, and note that AI-specific guidance is moving quickly, so treat any draft or proposed reference as evolving rather than settled.

## Document control header

| Field | Entry |
|---|---|
| Document title | AI/ML System Risk Assessment for `<<FILL: SYSTEM / MODEL NAME>>` |
| Document number | `<<FILL: RA-ID, e.g. RA-AI-007>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. System Owner>>` |
| GAMP category | `<<FILL: 4 configured / 5 custom; note the trained model is usually a 5-like artifact>>` |
| Model version assessed | `<<FILL: model version / hash>>` |
| Linked validation plan | `<<FILL: VP-ID>>` |

## 1. Purpose

This risk assessment determines how much and what kind of assurance the AI/ML system `<<FILL: SYSTEM / MODEL NAME>>` needs, based on what the model decides, the harm a wrong output could cause, and the factors specific to a learning, probabilistic system. The output sets the validation depth, the monitoring program, the change-control approach, and the human-review design, so an inspector can reconstruct why the system was controlled the way it was. It applies quality risk management (ICH Q9) to a system whose behavior is statistical rather than deterministic.

## 2. Scope

This assessment covers the AI/ML model `<<FILL: SYSTEM / MODEL NAME>>`, used to `<<FILL: business purpose, e.g. classify incoming deviation reports by criticality>>` within the `<<FILL: process name>>` process. It covers the trained model, its input data, its output and the action that output drives, and the human and system controls around it. It does not replace the underlying computerized system validation, governed by `<<FILL: VP-ID or SOP-ID>>`, nor the infrastructure qualification, governed by `<<FILL: SOP-ID>>`. Where the model is reached through a third-party platform or API, the supplier assessment is referenced here but performed under `<<FILL: SOP-ID for supplier qualification>>`.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| System / process owner | Owns the intended-use statement and the risk class; understands what depends on the model output and what catches a wrong output. |
| Data science / ML engineering | Provides the model risk-factor inputs (data quality, drift behavior, explainability, autonomy) honestly, including known weaknesses. |
| Validation / CSV lead | Facilitates the assessment, maps the risk class to assurance depth, and ties the output to the validation plan and monitoring program. |
| Quality Assurance | Approves the risk logic, not just the signatures; confirms the impact and model-factor calls are reasoned and that the human-review design is real. |
| Subject matter expert | Confirms how a wrong output would behave in the real process and which existing control would catch it. |
| IT / system administrator | Confirms technical controls (access, audit trail, logging, model version pinning) that the risk reasoning depends on. |

## 4. Definitions

- **Intended use**: what the model output is used for in the regulated process, stated specifically enough that the risk of a wrong output can be judged, naming the decision, the action, and the accountable role.
- **Patient impact**: the magnitude of harm to a patient if the model produces a wrong output that is acted upon.
- **Product impact**: the effect on product quality, a batch decision, or a release decision.
- **Data impact**: the effect on the integrity, attribution, or completeness of a GxP record.
- **Autonomy**: how far the model output drives an action without a human or a deterministic system check in between (advisory, automated classification, or process control).
- **Human in the loop**: a defined, documented human review that stands between the model output and the GxP outcome.
- **Drift**: degradation of model performance over time with no change to the model itself, from a shift in the input distribution (data drift) or in the input-to-output relationship (concept drift).
- **Explainability**: the degree to which a reviewer can interrogate why the model produced a given output, enough to exercise meaningful judgment over it.
- **Assurance depth**: the validation and monitoring rigor selected for the system: extensive, moderate, or limited.
- **Residual risk**: the risk that remains after the selected mitigations are in place and effective.

## 5. Method

### 5.1 Step 1, state the intended use

Write one specific intended-use statement that names the model output, the action it triggers, and the person or system accountable for the consequence. A useful test: if you cannot write that sentence cleanly, the intended use is not yet defined and the assessment cannot proceed. Avoid generic statements such as "supports the review." State what the model decides and what depends on it.

### 5.2 Step 2, assess impact (patient, product, data)

For each of the three impact dimensions, ask what a wrong output would do if it were acted upon, and score severity on the scale in section 5.4. A model can be high on one dimension and low on others; a complaint-triage model may be high on patient impact (a missed safety signal) but low on product impact. Take the highest of the three as the system's impact severity, and record the reasoning for each.

### 5.3 Step 3, assess the model risk factors

These are the factors traditional software does not have. Score each on the scale in section 5.4 and record the reasoning. Be honest here; understating a known weakness is what an inspection finds.

- **Data quality.** Was the training data GxP-controlled, representative of the production population (products, sites, instruments, edge cases), correctly labeled by qualified people, balanced enough that the metric is not fooled by rare positives, and versioned so the model can be reproduced? Poor data quality raises risk because the model is bounded by the data it learned from.
- **Drift.** How fast does the input population move, and how quickly would degradation matter? A model facing a fast-changing process or a new product line drifts sooner. A frozen model is not safe from drift; the world it sees can still move.
- **Explainability.** Can a reviewer interrogate a given output enough to exercise real judgment? A black-box output that drives action with no per-decision rationale raises risk; a confidence score and top contributing features lower it for an advisory use.
- **Autonomy.** Does the output drive an action with no human or deterministic check in between? Higher autonomy raises risk because a wrong output reaches the GxP outcome directly.
- **Human in the loop.** Is there a defined, documented, meaningful human review, and is it resistant to automation bias (reviewers rubber-stamping a usually-correct model)? A strong human-review control lowers residual risk; a paper-only review does not.

### 5.4 Scoring scale

Score impact severity and each model risk factor on this coarse, reproducible scale. The point is that two assessors given the same system land in the same cell.

| Score | Label | Meaning |
|---|---|---|
| 3 | High | A wrong output, or this factor, could affect a patient, a release or batch decision, or the integrity of a GxP record, with no reliable control to catch it. |
| 2 | Medium | A wrong output, or this factor, could matter, but an existing named control would usually catch it before it reaches the GxP outcome. |
| 1 | Low | A wrong output, or this factor, has no realistic path to patient, product, or GxP-record harm. |

### 5.5 Step 4, assign the risk class

Combine the impact severity (the highest of patient, product, data) with the model risk factors to place the system in one of three classes. The autonomy pattern usually dominates, so use it as the anchor and let the other factors move the class up. Record the reasoning, not just the class.

| Risk class | Typical pattern | Description |
|---|---|---|
| Class A (high) | Process control, or automated classification driving a safety-relevant action | A wrong output reaches the GxP outcome with no reliable independent control. High impact, high autonomy, or weak human review. |
| Class B (medium) | Automated classification with a named downstream control, or advisory feeding a high-stakes decision | A wrong output could matter, but a named human or system control stands between the model and the outcome. |
| Class C (low) | Advisory or screening, human makes the final call, low impact | The model assists a human who owns the decision; a wrong output is caught by routine review. |

Override rule: any electronic records and signatures the model touches (audit trail of model outputs and overrides, attribution of the human decision, access control) are governed at full rigor regardless of risk class. Sizing assurance to risk reallocates effort, it does not lower the bar on record integrity.

### 5.6 Step 5, set the assurance depth

Map the risk class to assurance depth. Document the choice; do not let the GAMP category alone set it, because a trained model inside a configured platform behaves like a custom artifact.

| Risk class | Validation depth | Monitoring | Change control |
|---|---|---|---|
| Class A | Extensive: performance spec set before training, locked held-out test set, failure-mode analysis, deterministic interlock for process control, independent review | Continuous override tracking plus scheduled labeled-sample performance review plus input-drift monitoring; defined response when a trigger fires | Predetermined change control plan; architecture or feature changes force full revalidation |
| Class B | Moderate: performance spec on a held-out test set, defined human-review step, targeted testing of the catching control | Scheduled performance review plus override-rate tracking | Predetermined change control plan; confirmatory test on routine retrains |
| Class C | Limited: performance demonstrated on a held-out test set sufficient for the screening purpose, defined human review | Periodic check plus override-rate tracking | Confirmatory test on retrains; documented record |

### 5.7 Step 6, define mitigations and residual risk

For each high or medium driver identified in steps 2 and 3, name a mitigation, who owns it, and how its effectiveness is evidenced. Then state the residual risk for the system after mitigations, and whether it is acceptable for the intended use. Common mitigations:

- Held-out, version-controlled test set touched once, to prevent inflated performance claims.
- Performance spec written and approved before training, tied to the consequence of error (recall when a missed positive is the dangerous failure, precision when false alarms carry cost).
- A deterministic safety interlock for process control that keeps the model inside validated operating bounds independent of the model.
- A defined, documented human-review step, with reviewers trained on the model's known weaknesses and the workflow designed to resist automation bias.
- Drift and override-rate monitoring live from day one, with a defined response (notify, pause, route to fuller human review).
- A predetermined change control plan that classifies anticipated model changes and the testing each requires.
- Model version pinning and a supplier assessment where a third-party base model can change under you.

## 6. Risk register

Complete the impact and model-factor scoring, then the class, depth, mitigations, and residual risk.

| Item | Score (1-3) | Reasoning |
|---|---|---|
| Patient impact | `<<FILL>>` | `<<FILL: what a wrong output would do to a patient>>` |
| Product impact | `<<FILL>>` | `<<FILL>>` |
| Data impact | `<<FILL>>` | `<<FILL>>` |
| Data quality | `<<FILL>>` | `<<FILL>>` |
| Drift | `<<FILL>>` | `<<FILL>>` |
| Explainability | `<<FILL>>` | `<<FILL>>` |
| Autonomy | `<<FILL>>` | `<<FILL: advisory / automated classification / process control>>` |
| Human in the loop | `<<FILL>>` | `<<FILL: defined, documented, meaningful?>>` |

| Field | Entry |
|---|---|
| Highest impact severity | `<<FILL: 1-3 and which dimension>>` |
| Assigned risk class | `<<FILL: A / B / C>>` with `<<FILL: reasoning>>` |
| Assurance depth selected | `<<FILL: extensive / moderate / limited>>` |
| Key mitigations (owner, evidence) | `<<FILL>>` |
| Residual risk | `<<FILL: statement>>` |
| Residual risk acceptable for intended use | Yes / No, `<<FILL: justification>>` |

## 7. Acceptance criteria

This risk assessment is acceptable when all of the following are true:

- The intended-use statement names the model output, the action it triggers, and the accountable role, in one clean sentence.
- Patient, product, and data impact are each scored with written reasoning, and the highest is taken as the impact severity.
- Each model risk factor (data quality, drift, explainability, autonomy, human in the loop) is scored with reasoning, including honest statement of known weaknesses.
- The risk class is assigned from impact and the model factors, with reasoning, and the autonomy pattern is consistent with the class.
- The assurance depth, monitoring, and change-control approach match the risk class per section 5.6.
- Electronic records and signatures the model touches are at full rigor regardless of class.
- Every high or medium driver has a named mitigation with an owner and an evidence source, and residual risk is stated and judged acceptable or not for the intended use.
- The assessment points to the validation plan, the monitoring program, and the change-control plan so the chain is reconstructable.

## 8. References

> 21 CFR Part 11 (electronic records and signatures).
> EU GMP Annex 11, Computerised Systems.
> ICH Q9, Quality Risk Management (the basis for sizing assurance to risk).
> ISPE GAMP 5, A Risk-Based Approach to Compliant GxP Computerized Systems, Second Edition, which adds material on machine learning and other novel technologies.
> FDA, Computer Software Assurance for Production and Quality System Software (final guidance, published September 2025; FDA materials also use the longer form "Production and Quality Management System Software", so confirm the current title, version, and date before relying on it).
> FDA AI/ML thinking for software as a medical device, including the predetermined change control plan concept (device documents; useful by analogy for manufacturing and quality AI, not binding on it). Verify the current draft or final status before citing.
> EU AI Act, Regulation (EU) 2024/1689, which applies in phases and is itself evolving (the high-risk timeline for Annex III systems was the subject of a provisional "Digital Omnibus" agreement in mid-2026 proposing to defer it past the original August 2026 date, pending formal adoption); confirm the current applicable dates and whether your system is in scope before relying on it.
> IMDRF and good machine learning practice principles for AI in medical devices.

Confirm the current version, status, and clause numbers of each reference before issue. AI-specific guidance is moving quickly; where a reference is draft, proposed, or under revision, treat it as evolving and say so in your assessment rather than presenting it as settled law.

## 9. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 10. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (CSV lead) | `<<FILL>>` | | |
| System / process owner | `<<FILL>>` | | |
| Data science representative | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the assessment completed for an example model that triages incoming deviation reports by criticality. The company, model, and numbers are illustrative; replace them with your own. The point of the specimen is to show how the reasoning, not just the scores, is recorded.

**Intended use:** The model assigns a preliminary criticality tier to each new deviation; the assigned tier sets the investigation timeline; a QA reviewer confirms or overrides the tier within one business day and owns the final classification.

| Item | Score | Reasoning |
|---|---|---|
| Patient impact | 3 | A deviation mis-tiered as low could delay an investigation into a safety-relevant event. |
| Product impact | 3 | A delayed or mis-prioritized investigation can affect a batch decision. |
| Data impact | 2 | The model output is recorded with the human decision; the underlying deviation record is unchanged. |
| Data quality | 2 | Training data drawn from the GxP deviation system, labeled by two qualified QA reviewers, inter-rater agreement measured and disagreements resolved; rare critical class is under-represented, so recall is the watched metric. |
| Drift | 2 | New product lines and process changes shift the deviation mix over quarters; input-distribution monitoring is in place. |
| Explainability | 2 | The model returns a tier with the top contributing text features, enough for the QA reviewer to sanity-check; it is not a literal causal account. |
| Autonomy | 2 | Automated classification, but a named QA review stands between the tier and the final classification within one business day. |
| Human in the loop | 2 | Review is defined and documented; acceptance rate is monitored to catch rubber-stamping, with a threshold that triggers investigation. |

| Field | Entry |
|---|---|
| Highest impact severity | 3 (patient and product) |
| Assigned risk class | Class B. Automated classification with high impact, but a defined QA review with a one-business-day timeline and an accountable owner stands between the model and the outcome. It is not Class A because the human review is real and timely, not Class C because the output drives the investigation timeline directly. |
| Assurance depth selected | Moderate: performance spec (recall first) set before training, locked held-out test set drawn from a later time period, targeted testing of the override workflow. |
| Key mitigations | Recall-first spec on a locked test set (owner: CSV lead, evidence: validation report VR-2026-018). Defined QA review within one business day with acceptance-rate monitoring (owner: QA, evidence: monitoring records). Quarterly confirmatory retrain test and input-drift monitoring (owner: data science, evidence: monitoring log). Predetermined change control plan PCCP-AI-007. |
| Residual risk | Residual risk is a critical deviation mis-tiered as low that the QA reviewer also misses within the one-day window. Mitigated by recall-first acceptance criteria, the timed human review, override-rate monitoring, and drift monitoring. |
| Residual risk acceptable | Yes. With the timed human review owning the final classification and the monitoring program live, residual risk is acceptable for the intended use; revisit if the override rate or drift signal trips. |

In this specimen the assessment did not stop at "Class B." It recorded why the human review keeps the model out of Class A (defined, timed, owned, and monitored for rubber-stamping) and why the output is not merely advisory (it drives the timeline directly). Those sentences are what survive an inspection question. The honest note that the rare critical class is under-represented, and the recall-first response to it, is exactly the kind of reasoning that reads as a system under control.

## Common inspection findings this risk assessment prevents

- An AI system validated as if it were ordinary deterministic software, with no treatment of drift, explainability, or autonomy.
- A risk class assigned with no reasoning, so a process-influencing model sits in the easy lane with no failure-mode analysis or interlock when an inspector asks.
- Performance "validated" on data the model trained on, with no locked held-out test set behind the headline metric.
- Acceptance criteria written after the test, to match the result the model happened to achieve.
- A human-review step claimed on paper but with no evidence it is meaningful, revealed by a near-100 percent acceptance rate.
- A deployed model with no monitoring, so the validated state is asserted from release day with no evidence it still performs.
- Training data with no integrity record (no lineage, no labeling procedure, no dataset version), so the model cannot be reproduced or investigated.
- A vendor's general "validated AI" claim relied on for the site's specific trained model, with no site-level evidence.
- Electronic records the model touches (output, override, attribution) scoped to light control because the system scored low overall.

## How to adapt this risk assessment

1. Set your document number, owner, GAMP category, model version, and linked validation plan in the header.
2. Write the intended-use sentence first; if you cannot name the output, the action, and the accountable role cleanly, stop and define the use before scoring.
3. Score patient, product, and data impact separately with reasoning, and take the highest as the impact severity.
4. Score each model risk factor honestly, and write down the known weaknesses (under-represented classes, fast-drifting populations, black-box outputs); understating them is what an inspection finds.
5. Anchor the risk class on the autonomy pattern, then let impact and the other factors move it up, and record the reasoning for the class you chose.
6. Match assurance depth, monitoring, and change control to the class using section 5.6, and apply the records-and-signatures override before you finalize.
7. For every high or medium driver, name a real mitigation with an owner and an evidence source, then state and judge residual risk against the intended use.
8. Confirm every regulation in section 8 against the current published version before issue, and flag any draft, proposed, or evolving reference as such in your assessment.
