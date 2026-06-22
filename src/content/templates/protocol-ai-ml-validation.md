---
title: "Protocol: AI/ML System Validation"
description: "A plug-and-play validation protocol for an AI or machine learning system in a GxP environment: intended use, data and model description, acceptance criteria for a probabilistic system, test cases for performance, boundary and adversarial behavior, drift, human oversight and audit trail, deviation handling, and a sign-off summary, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-22
docType: "Protocol"
pillar: "ai-automation"
relatedArticles: ["validating-ai-gxp-systems", "qualifying-llms-genai-gxp"]
tags: ["AI", "machine learning", "validation", "protocol", "CSV", "GAMP 5", "drift", "acceptance criteria"]
tier: "Advanced"
---

This is a ready-to-use validation protocol for an AI or machine learning system used in a GxP process. It proves that a probabilistic system performs to a defined performance specification, behaves safely at its boundaries, stays within a validated state over time, and operates under a defined human-oversight control. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your requirements and traceability, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. The framework for AI validation is still being built, so verify each cited regulation against the current source, and state plainly in the protocol where you are reasoning by analogy because no guidance fits cleanly.

## Document control header

| Field | Entry |
|---|---|
| Document title | AI/ML System Validation Protocol for `<<FILL: SYSTEM / MODEL NAME>>` |
| Document number | `<<FILL: PRT-ID, e.g. PRT-AI-007>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. System Owner / Head of Digital Quality>>` |
| System / GAMP category | `<<FILL: platform name, version, GAMP category 4 / 5>>` |
| Model identifier and version | `<<FILL: model name, version or hash, framework>>` |
| Linked URS / risk assessment | `<<FILL: URS-ID; risk assessment ID>>` |
| Linked report | `<<FILL: validation summary report number to be issued>>` |

## 1. Objective

This protocol demonstrates that `<<FILL: SYSTEM / MODEL NAME>>`, model version `<<FILL: model version>>`, meets its approved performance specification for its intended use, behaves acceptably at and beyond its expected input range, can be shown to remain in a validated state over time, and operates under a defined and recorded human-oversight control. Unlike a deterministic system, this system produces probabilistic outputs, so the objective is to prove a performance distribution against a threshold and to govern its stability, not to prove a single fixed input-output table once and freeze it.

## 2. Scope

This protocol covers the trained model instance named in the header, the data flowing into and out of it, the human-oversight step that sits over its outputs, and the audit trail that records both the model output and the human decision. It applies to the use of the model at `<<FILL: site / process>>` for the intended use stated in section 4.

In scope: model performance against the specification, boundary and out-of-distribution behavior, adversarial and malformed input handling, drift detection and the response to it, the human-oversight workflow, the audit trail and electronic-record controls, and traceability from the user requirements to the test evidence.

Out of scope: qualification of the underlying infrastructure (covered by `<<FILL: infrastructure qualification ID>>`); installation and configuration of the host platform (covered by IQ `<<FILL: IQ-ID>>` / OQ `<<FILL: OQ-ID>>`); and, for a process-control use, the deterministic safety interlocks, which are validated separately as conventional automation per `<<FILL: interlock validation ID>>` and are referenced here as a pre-execution requirement.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Validation lead / author | Authors this protocol, derives test cases from the URS performance specification, maintains traceability, manages deviations, and writes the summary report. |
| System owner / process owner | Owns the intended-use statement and risk class; confirms the test scenarios reflect real operations; accepts the result for the process. |
| Data science / ML engineering | Provides the model, the training and test data records, the held-out test set, and the technical evidence for drift and performance; supports execution. |
| Data steward / SME labelers | Provide and qualify ground-truth labels for test data; record inter-rater agreement where labels are subjective. |
| End-user reviewers (by role) | Execute the human-oversight test cases as the real role; record decisions and evidence. |
| Quality Assurance | Reviews and approves the protocol, the acceptance criteria, the deviation dispositions, and the summary report; owns release for GxP use. |

## 4. Intended use and risk class

State the intended use in one sentence that names the model output, the action it triggers, and the accountable role. If you cannot write that sentence cleanly, the intended use is not yet defined and validation cannot be sized correctly.

| Field | Entry |
|---|---|
| Intended-use statement | `<<FILL: one sentence: the model output, the action it triggers, the accountable role>>` |
| Use pattern | `<<FILL: Advisory/screening | Automated classification | Process control>>` |
| Decision the output drives | `<<FILL: what happens because of the output>>` |
| Accountable role for the consequence | `<<FILL: role that owns the final decision>>` |
| Risk class and rationale | `<<FILL: risk class with the ICH Q9 based rationale on file>>` |
| Consequence of a wrong output | `<<FILL: false positive cost; false negative cost; which is worse and why>>` |

The risk class drives the depth of the rest of the protocol. An advisory or screening model, where a person makes the final call, is the lowest-risk pattern and the lightest validation. An automated classification that drives action directly is higher risk. A process-control model that influences a manufacturing parameter is the highest risk and requires failure-mode analysis plus an independently validated deterministic interlock. Record the basis for the assigned class.

## 5. Data and model description

This section is the reproducibility record for what was validated. Without it, an investigator cannot rebuild the model and an inspector cannot trace the chain from data to decision.

### 5.1 Model description

| Field | Entry |
|---|---|
| Model type / architecture | `<<FILL: e.g. gradient-boosted trees, transformer text classifier, retrieval-augmented LLM>>` |
| Framework and version | `<<FILL: library and version, or vendor platform and version>>` |
| Model version or hash | `<<FILL: immutable identifier for the exact model under test>>` |
| Inputs (features) | `<<FILL: the input features or input type, with source>>` |
| Outputs | `<<FILL: prediction, class, score, or generated text; the form of the output>>` |
| Determinism | `<<FILL: deterministic at inference? any stochastic element, e.g. sampling, GPU non-determinism>>` |
| For a vendor/API base model | `<<FILL: base model and version pinned; vendor change behavior; what you control (prompt, retrieval, guardrails)>>` |

### 5.2 Training, tuning, and test data

| Field | Entry |
|---|---|
| Source system and extract date | `<<FILL: where the data came from; was it GxP data under controls when created>>` |
| Record count and date range | `<<FILL: number of records; period covered>>` |
| Representativeness | `<<FILL: products, sites, instruments, edge cases the data covers; known gaps>>` |
| Labeling SOP and labelers | `<<FILL: labeling procedure ID; qualified labelers; their qualification>>` |
| Inter-rater agreement | `<<FILL: measured agreement for subjective labels; how disagreements were resolved>>` |
| Class balance / base rates | `<<FILL: proportion of each class, e.g. 2% critical>>` |
| Split method | `<<FILL: train / validation-tuning / test split; whether test set is time-separated>>` |
| Locked test set | `<<FILL: version hash; confirmation the model never saw it during training or tuning>>` |
| Dataset version control | `<<FILL: version or hash of the frozen datasets; where retained>>` |

## 6. Acceptance criteria for a probabilistic system

The acceptance criteria are performance metrics against thresholds, set before training and recorded in the URS, not after the model is measured. If the criteria were written to match the result the model happened to achieve, that is rationalization, not testing, and a spec dated after the test report will not be trusted.

A defensible criterion states: the metric, the threshold, the justification for the threshold against the consequence of error, the test population it must be met on, and how the test set was held out. Anything less is an opinion.

| Acceptance criterion | Metric | Threshold | Justification (consequence of error) | Test population |
|---|---|---|---|---|
| AC-1 Primary performance | `<<FILL: recall / precision / F1 / specificity>>` | `<<FILL: e.g. recall >= 0.90>>` | `<<FILL: e.g. a missed positive is the dangerous failure>>` | `<<FILL: locked held-out test set, version>>` |
| AC-2 Secondary performance | `<<FILL: the trade-off metric, e.g. precision>>` | `<<FILL: e.g. precision >= 0.70>>` | `<<FILL: cost of false alarms / reviewer load>>` | `<<FILL: same test set>>` |
| AC-3 Confidence calibration | `<<FILL: calibration measure>>` | `<<FILL: stated confidence matches observed accuracy within X>>` | `<<FILL: workflow routes by confidence threshold>>` | `<<FILL: test set>>` |
| AC-4 Statistical confidence | `<<FILL: confidence interval or sensitivity check>>` | `<<FILL: e.g. lower CI bound still meets AC-1>>` | `<<FILL: small positive count is fragile>>` | `<<FILL: test set>>` |
| AC-5 Boundary / out-of-distribution | `<<FILL: behavior expected, e.g. low-confidence flag or refusal>>` | `<<FILL: defined safe behavior, not silent wrong answer>>` | `<<FILL: OOD and edge inputs>>` | `<<FILL: curated edge set>>` |
| AC-6 Adversarial / malformed input | `<<FILL: handled without unsafe output>>` | `<<FILL: rejects or flags, does not crash or confabulate>>` | `<<FILL: an unsafe or confabulated output could drive a decision>>` | `<<FILL: adversarial / malformed set>>` |
| AC-7 Drift detection | `<<FILL: drift signal triggers the defined response>>` | `<<FILL: detection within the defined window>>` | `<<FILL: the validated state can lapse silently>>` | `<<FILL: simulated shifted input>>` |
| AC-8 Human oversight | `<<FILL: review step performed, recorded, meaningful>>` | `<<FILL: 100% of in-scope outputs reviewed and recorded per role>>` | `<<FILL: human judgment is the control over a wrong output>>` | `<<FILL: live or staged workflow>>` |
| AC-9 Audit trail and records | `<<FILL: output, model version, reviewer decision captured>>` | `<<FILL: complete, attributable, time-stamped, cannot be disabled by ordinary users>>` | `<<FILL: a decision must be reconstructable later>>` | `<<FILL: system audit trail>>` |

Choose metrics that are not fooled by class imbalance. Where 2 percent of records are critical, a model that calls everything non-critical scores 98 percent "accuracy" and is useless, so report recall, precision, and F1 rather than raw accuracy. Where positives are rare, report a confidence interval or a sensitivity check rather than a single point estimate.

## 7. Pre-execution requirements

Execution does not start until all of the following are confirmed and recorded in section 13.

| Item | Requirement |
|---|---|
| Approved URS with performance spec | URS `<<FILL: URS-ID>>` is approved, under change control, and contains the acceptance criteria in section 6. |
| Intended use and risk class approved | Section 4 is complete and approved by QA. |
| Infrastructure and platform qualified | `<<FILL: infrastructure qualification / IQ / OQ IDs>>` complete; open items assessed as not blocking. |
| Locked test set in place | The held-out test set is version-controlled and confirmed unseen by the model during training or tuning. |
| Ground truth available | Test data is labeled by qualified SMEs; inter-rater agreement recorded for subjective labels. |
| Model frozen for the test period | The model version under test is frozen; any change triggers section 11. |
| Deterministic interlock validated (process control only) | `<<FILL: interlock validation ID>>` complete and independent of the model. |
| Reviewer training | Reviewers are trained on the system and on its known weaknesses; training records referenced. |

## 8. Test approach

Depth of testing follows the risk class and the consequence of error, in line with ICH Q9 and the GAMP 5 risk-based approach. Each test case below traces to one or more acceptance criteria in section 6 and to the URS requirement it satisfies; record the mapping in the traceability matrix. Each case records the actual result, pass or fail, objective evidence (the metric output, the confusion matrix, the audit-trail export, the screenshot), and the tester initials and date. Performance is reported only on the locked held-out test set; a metric computed on training data is meaningless as validation evidence and must not be used.

## 9. Test cases

### 9.1 TC-PERF: Performance against the specification

1. Run the frozen model against the entire locked test set; do not retrain, tune, or adjust thresholds during the run.
2. Generate the confusion matrix (or the equivalent for the output type) and compute each metric in AC-1 through AC-4.
3. Compare each computed metric against its threshold.
4. Where positives are rare, compute and record the confidence interval or sensitivity check per AC-4.
5. Acceptance: every metric meets or exceeds its threshold, and the lower confidence bound (where applicable) still meets the primary threshold. Attach the confusion matrix and the metric computation as objective evidence.

### 9.2 TC-CAL: Confidence calibration

1. Bin predictions by stated confidence (for example deciles).
2. For each bin, compute the observed accuracy and compare it to the stated confidence.
3. Acceptance: stated confidence matches observed accuracy within the AC-3 tolerance, so any workflow that routes by confidence threshold is sound. Record the calibration table or plot.

### 9.3 TC-BOUND: Boundary and out-of-distribution behavior

1. Submit inputs at the edge of the expected range and inputs drawn from outside the training distribution (a new product, an unseen instrument, an empty or extreme value).
2. Observe whether the model flags low confidence, refuses, or routes to human review, rather than returning a confident wrong answer silently.
3. Acceptance: out-of-distribution and boundary inputs produce the defined safe behavior in AC-5, not a silent high-confidence error. Record each input and the resulting behavior.

### 9.4 TC-ADV: Adversarial and malformed input

1. Submit malformed, corrupted, oversized, and (for text or generative models) adversarial or injection-style inputs.
2. For a generative or LLM component, include prompts designed to elicit a confident fabricated answer, and confirm that outputs stay grounded in the retrieved source and that an ungrounded output is blocked or flagged for human review.
3. Acceptance: the system rejects or flags the input per AC-6 without crashing, leaking, or producing an unsafe or confabulated output that could drive a regulated decision unreviewed. Record each input and the response.

### 9.5 TC-DRIFT: Drift detection and response

1. Present a controlled input stream whose statistical profile is shifted from the training distribution (data drift) and, where feasible, a stream where the input-to-correct-output relationship has moved (concept drift).
2. Confirm the monitoring control raises the drift signal within the defined detection window.
3. Confirm the defined response fires: the right people are notified, and the model is paused or routed to fuller human review as the monitoring plan specifies.
4. Acceptance: drift is detected per AC-7 and the predefined response executes. A monitoring system with no defined response is decoration; the response must be demonstrated, not asserted. Record the signal and the response evidence.

### 9.6 TC-HUMAN: Human oversight in operation

1. Run representative outputs through the live or staged workflow with the real reviewer role.
2. Confirm the reviewer sees the model output, the relevant rationale or top contributing features, and where relevant the model version, and that the reviewer can confirm or override.
3. Confirm the reviewer's decision, the output reviewed, and the model version are recorded in a GxP record.
4. For a high-acceptance scenario, confirm the workflow keeps review meaningful (for example a short justification is required, and the acceptance-without-modification rate is monitored as a signal to investigate automation bias).
5. Acceptance: every in-scope output is reviewed and recorded per AC-8, the review is defined and meaningful, and the override mechanism works. Record the review entries.

### 9.7 TC-AUDIT: Audit trail and electronic records

1. Generate model outputs and corresponding human decisions, then export the audit trail.
2. Confirm the audit trail captures the model output, the model version that produced it, the reviewer identity, the decision, and a time stamp, and that it is attributable, secure, and cannot be disabled by ordinary users.
3. Confirm access controls and, where electronic signatures apply, that signatures are bound to the record per 21 CFR Part 11 and Annex 11.
4. Acceptance: the audit trail and record controls meet AC-9. Attach the audit-trail export as objective evidence.

### 9.8 Test case execution record (per case)

| Field | Entry |
|---|---|
| Test case ID and title | `<<FILL>>` |
| Traces to AC / URS | `<<FILL: AC-n; URS requirement>>` |
| Preconditions | `<<FILL>>` |
| Steps | `<<FILL>>` |
| Expected result | `<<FILL>>` |
| Actual result | `<<FILL>>` |
| Pass / Fail | `<<FILL>>` |
| Objective evidence reference | `<<FILL: confusion matrix / export / screenshot ID>>` |
| Tester (initials, date) | `<<FILL>>` |

## 10. Acceptance criteria for the protocol as a whole

The system is acceptable for release when all of the following are true.

- The intended-use statement, use pattern, and risk class are written and approved, with the ICH Q9 based rationale on file.
- The performance specification was written in the URS before training, with metrics, thresholds, and a justification tied to the consequence of error.
- Performance (AC-1 to AC-4) was reported on the locked, version-controlled test set the model never saw, and every metric meets its threshold.
- Calibration, boundary, adversarial, and drift behavior (AC-3, AC-5 to AC-7) meet their criteria.
- The human-oversight step (AC-8) is defined, recorded in a GxP record, and demonstrably meaningful, and reviewers are trained on the model's weaknesses.
- The audit trail and record controls (AC-9) are complete and attributable.
- For a process-control use, the deterministic safety interlock is independently validated.
- Every open deviation is closed or assessed as not blocking, with the rationale recorded.
- Traceability runs from intended use to requirements to test evidence, with the rationale recorded wherever guidance was silent and a design decision was made by analogy.

If any line cannot be evidenced from the file, the system is not ready for release regardless of how well the model scored.

## 11. Deviation handling

Any actual result that does not meet an acceptance criterion, any change to the frozen model or test environment during execution, and any test that cannot be executed as written is a deviation.

1. Record the deviation contemporaneously with the test case ID, the expected and actual result, and the objective evidence.
2. Classify by impact: a deviation on a high-risk acceptance criterion (primary performance, drift response, human oversight for an automated or process-control use) blocks release until resolved; a deviation on a lower-risk criterion may be dispositioned with QA-approved rationale.
3. Investigate the root cause. For a performance shortfall, determine whether the cause is the data, the labels, the metric choice, the threshold, or the model itself; do not move the threshold to make the result pass.
4. Define the correction (for example retrain, relabel, redesign the oversight step, add an interlock) and re-test the affected cases.
5. QA reviews and approves the disposition of every deviation. Route to the deviation procedure `<<FILL: SOP-ID for deviations>>` where the impact warrants a formal investigation.
6. Record all deviations and their dispositions in the summary report.

## 12. Summary and conclusion

On completion, the validation lead writes a summary that states what was tested, the result against each acceptance criterion, the deviations and their dispositions, and an explicit release recommendation. The summary records, for any area where existing guidance does not fit cleanly, the principle applied by analogy and the rationale, so the reasoning survives a later inspection.

| Field | Entry |
|---|---|
| System / model and version tested | `<<FILL>>` |
| Test set version | `<<FILL>>` |
| AC-1 to AC-9 result (met / not met) | `<<FILL: per criterion, with the measured value>>` |
| Deviations raised / open | `<<FILL: count; references>>` |
| Areas validated by analogy (guidance silent) | `<<FILL: the principle applied and the rationale>>` |
| Monitoring plan reference (live from day one) | `<<FILL: monitoring plan / periodic review ID>>` |
| Predetermined change control plan reference | `<<FILL: change control plan ID>>` |
| Release recommendation | `<<FILL: recommended for release / not recommended, with basis>>` |
| Validation lead (name, signature, date) | `<<FILL>>` |
| QA approval (name, signature, date) | `<<FILL>>` |

## 13. Pre-execution and execution confirmation

| Item | Confirmed by | Date |
|---|---|---|
| Pre-execution requirements (section 7) met | `<<FILL>>` | `<<FILL>>` |
| Model and test environment frozen | `<<FILL>>` | `<<FILL>>` |
| Execution started | `<<FILL>>` | `<<FILL>>` |
| Execution completed | `<<FILL>>` | `<<FILL>>` |

## 14. References

> FDA draft guidance, "Considerations for the Use of Artificial Intelligence To Support Regulatory Decision-Making for Drug and Biological Products" (January 2025 draft), risk-based credibility assessment framework for a context of use. Draft, not settled law.
> FDA, "Computer Software Assurance for Production and Quality Management System Software" (draft September 2022, finalized September 2025), risk-based, intended-use-driven assurance.
> FDA, "Marketing Submission Recommendations for a Predetermined Change Control Plan for Artificial Intelligence-Enabled Device Software Functions" (final, issued December 2024), the predetermined change control plan concept for AI in device submissions. Device-premarket scope; a separate January 2025 draft, "Artificial Intelligence-Enabled Device Software Functions: Lifecycle Management and Marketing Submission Recommendations," covers the broader lifecycle and is still draft. Verify the current status of each before relying on it.
> GAMP 5 Second Edition (ISPE, 2022), risk-based CSV with material on machine learning and novel technologies.
> ICH Q9(R1), Quality Risk Management (2023 revision), basis for sizing validation effort to risk.
> 21 CFR Part 11 and EU GMP Annex 11, electronic records, electronic signatures, and audit trails.
> EU Artificial Intelligence Act, Regulation (EU) 2024/1689, in force from 1 August 2024 with phased application: most high-risk obligations under Annex III apply from 2 August 2026, and high-risk systems that are safety components of products under existing EU product law apply from 2 August 2027. A proposed simplification (the "AI omnibus") may shift parts of that timeline, so confirm the current dates and any amendment before relying on them.

The AI-regulatory area is moving quickly and several anchors are draft, proposed, or still in phased rollout. Confirm the current version, status, and dates of each reference before issue, and state in the protocol where a reference is draft rather than final.

## 15. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 16. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Validation lead) | `<<FILL>>` | | |
| Reviewer (Data Science) | `<<FILL>>` | | |
| Reviewer (System owner) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the protocol completed for an example deviation-classification model that assigns a preliminary criticality tier to each new deviation, with a QA reviewer confirming or overriding the tier. The company, system, and numbers are illustrative; replace them with your own.

### Intended use and risk class (filled)

| Field | Entry |
|---|---|
| Intended-use statement | The model assigns a preliminary criticality tier to each new deviation; the tier sets the investigation timeline; the QA reviewer confirms or overrides the tier within one business day and owns the final classification. |
| Use pattern | Advisory / screening with mandatory human confirmation |
| Decision the output drives | The assigned tier sets the default investigation timeline and routing |
| Accountable role for the consequence | QA reviewer (final classification) |
| Risk class and rationale | Medium: the model advises and a person confirms every record, but a missed high-criticality deviation could delay a safety-relevant investigation, so recall on the critical tier is the controlling metric. Rationale on file per ICH Q9. |
| Consequence of a wrong output | A false negative (a critical deviation tiered low) is worse than a false positive (a routine deviation tiered high), which only adds reviewer load. |

### Acceptance criteria (filled, primary lines)

| Acceptance criterion | Metric | Threshold | Justification | Test population |
|---|---|---|---|---|
| AC-1 Primary performance | Recall on critical tier | >= 0.92 | A missed critical deviation is the dangerous failure | Locked test set v3, 1,000 deviations, 100 critical |
| AC-2 Secondary performance | Precision on critical tier | >= 0.70 | False positives add QA review load only | Same test set |
| AC-4 Statistical confidence | 95% CI lower bound on recall | >= 0.90 | 100 positives is a small count | Same test set |
| AC-8 Human oversight | QA confirms/overrides every output, recorded | 100% within one business day | The reviewer owns the final classification | Staged workflow, 50 records |

### Performance result (filled, from TC-PERF)

On locked test set v3 (1,000 deviations, 100 truly critical), the model flagged 118 as critical: 92 true positives, 26 false positives, 8 false negatives.

|  | Predicted critical | Predicted not critical |
|---|---|---|
| Actually critical | 92 (TP) | 8 (FN) |
| Actually not critical | 26 (FP) | 874 (TN) |

Recall = 92 / 100 = 0.92 (meets AC-1). Precision = 92 / 118 = 0.78 (meets AC-2). The 95 percent confidence interval lower bound on recall was 0.85, which is below the AC-4 threshold of 0.90, so AC-4 was not met on the first run.

### Deviation (filled)

| Field | Entry |
|---|---|
| Deviation ID | DEV-AI-2026-0007, raised against TC-PERF |
| Finding | AC-4 not met: the lower confidence bound on recall (0.85) fell below 0.90 because the test set held only 100 critical cases. |
| Root cause | Small positive count, not a model defect; the point estimate met AC-1 but the interval was too wide to confirm at the required confidence. |
| Correction | Test set enlarged to 250 critical cases drawn from a later time period; TC-PERF re-run. Threshold was not changed. |
| Re-test result | Recall 0.93, 95% CI lower bound 0.91, AC-1 and AC-4 both met. |
| QA disposition | Closed; not blocking after re-test. Approved by R. Gomez, 12 June 2026. |

In this example the team found that a real acceptance criterion was not met, investigated the cause, enlarged the held-out test set rather than relaxing the threshold to force a pass, re-tested, and recorded the whole sequence. That discipline, declaring the criteria first and refusing to move them to fit the result, is exactly what an inspector expects to see.

## Common inspection findings this protocol prevents

- Performance reported on data the model trained or tuned on, so the headline metric is inflated and the model underperforms in production.
- Acceptance criteria written or dated after the test report, so the threshold was fitted to the result rather than set before testing.
- No held-out, version-controlled test set, so the reported number cannot be trusted or reproduced.
- A single point estimate on a small positive count presented as proof, with no confidence interval or sensitivity check.
- Raw "accuracy" reported on an imbalanced dataset, hiding a model that misses the rare cases that matter most.
- No drift detection or no defined response to drift, so the validated state lapses silently after deployment.
- A human-oversight step that exists on paper but is rubber-stamped in practice, revealed by a near-total acceptance-without-modification rate.
- An audit trail that does not capture the model version that produced an output, so a decision cannot be reconstructed.
- A process-influencing model validated as if it were advisory, with no failure-mode analysis and no independent interlock.
- A model whose training data has no lineage, labeling record, or dataset version, so it cannot be reproduced or investigated.

## How to adapt this protocol

1. Set your document number, owner, model identifier, and effective date in the header.
2. Write the intended-use sentence in section 4 first, then assign the use pattern and risk class; everything downstream is sized from this.
3. Fill the data and model description in section 5 completely; this is your reproducibility record, treat it as the evidence an investigator will rebuild the model from.
4. Set the acceptance criteria in section 6 before the model is trained, justify each threshold against the consequence of error, and keep them in the approved URS.
5. Scale the test cases in section 9 to the risk class: an advisory model may run a light TC-HUMAN and TC-AUDIT; a process-control model adds failure-mode analysis and an independently validated interlock as a pre-execution requirement.
6. Point the cross-references in sections 2, 7, and 11 to your real infrastructure qualification, interlock validation, deviation, monitoring, and change-control documents; the monitoring plan and the predetermined change control plan must be live from day one of operation.
7. Where existing guidance does not cover a decision, record the principle you applied by analogy and the rationale in section 12, so the reasoning survives a later inspection.
8. Confirm every reference in section 14 against the current published version and status before issue, and mark any reference that is still draft or in phased rollout as such.
