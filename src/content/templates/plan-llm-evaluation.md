---
title: "LLM Evaluation and Test Plan"
description: "A plug-and-play plan for evaluating an LLM or generative system in a GxP context: evaluation dimensions, golden and test datasets, scoring methods and thresholds, human review, prompt and version control, and re-evaluation triggers, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-22
docType: "Plan"
pillar: "ai-automation"
relatedArticles: ["qualifying-llms-genai-gxp", "validating-ai-gxp-systems"]
tags: ["LLM", "generative AI", "evaluation", "validation", "GxP", "test plan", "hallucination", "groundedness"]
tier: "Advanced"
---

This is a ready-to-use plan for evaluating a large language model or other generative system before and during use in a GxP context. It sits above the individual test scripts and tells the team how the model's behavior will be measured: which dimensions matter, what test data proves them, how each output is scored and against what threshold, where a human stays in the loop, how prompts and versions are controlled, and what events force a re-evaluation. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Generative systems behave probabilistically and the regulatory framework for them is still forming, so confirm each cited regulation against the current source before you rely on it, and state plainly anywhere you are reasoning by analogy because no guidance fits cleanly.

## Document control header

| Field | Entry |
|---|---|
| Document title | LLM Evaluation and Test Plan for `<<FILL: SYSTEM / USE CASE NAME>>` |
| Document number | `<<FILL: PLAN-ID, e.g. EVP-AI-007>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. System Owner or Digital Quality Lead>>` |
| System / process in scope | `<<FILL: system name, model identity and version, business process>>` |
| Linked documents | `<<FILL: URS / intended-use statement, risk assessment, supplier assessment, predetermined change control plan, prompt and config baseline, monitoring plan>>` |

## 1. Purpose

This plan defines how `<<FILL: COMPANY NAME>>` will evaluate the behavior of an LLM or generative system so that its outputs are trustworthy enough for the role they play in a regulated workflow. The objective is to measure the model against stated quality dimensions on representative data, to confirm it meets pre-set thresholds before release, to keep a defined human control over its outputs, and to detect when its behavior has degraded so that the evaluation is repeated. A reviewer should be able to reconstruct what was evaluated, against what acceptance criteria, on what data, with what result, and what happens when the result drifts.

## 2. Scope

This plan applies to the generative system named in the header and to the prompts, retrieval configuration, guardrails, and output handling that surround it. It covers initial evaluation before first use and ongoing re-evaluation during use. It does not set the intended use itself, which is held in `<<FILL: URS / intended-use statement ID>>`, the risk classification, held in `<<FILL: risk assessment ID>>`, or the broader lifecycle controls for the system, held in `<<FILL: validation plan / VMP ID>>`. Where the model is reached through a vendor API, the base model is supplier-controlled and is assessed in `<<FILL: supplier assessment ID>>`; this plan governs the part you control and the evidence you generate for the configured, prompted instance.

## 3. What is being evaluated and why it is different

State, in one sentence, what the model output is and what it drives. A useful discipline: name the output, the action it triggers, and the role accountable for the consequence. Example to adapt: "The model drafts a summary of an incoming complaint; the summary populates the intake record; the intake analyst confirms or corrects it and owns the final record."

Generative-system evaluation differs from traditional functional testing in ways this plan must account for:

- The output is probabilistic, so the same input can yield different text on different runs. Evaluation measures a distribution of behavior, not a fixed input-output table.
- The output is free-form language, so scoring needs defined rubrics and, often, a second model or a human as the scorer rather than an exact-match check.
- A vendor can change the base model under you with no action on your side, so the evaluation has a shelf life and a re-evaluation trigger tied to model change.
- A fluent, confident, wrong answer (confabulation, often called hallucination) is the signature failure mode and must be measured directly, not assumed away.

## 4. Roles and responsibilities

| Role | Responsibility |
|---|---|
| System owner | Owns this plan, the intended-use statement, and the release decision recommendation; confirms the evaluation was run as planned. |
| Data science / ML engineering | Builds the test harness, runs the evaluations, computes scores, and reports results against the thresholds. |
| Subject-matter expert (SME) labelers | Construct the golden answers, define scoring rubrics, and perform or adjudicate human scoring. |
| Validation / CSV lead | Confirms the evaluation method, the dataset construction, and the evidence meet validation expectations. |
| Quality Assurance | Approves this plan, the acceptance criteria, the evaluation results, and the release disposition; owns the final decision. |
| Operational reviewers | Perform the in-use human review defined in section 9 and record the disagreement and override data that feeds re-evaluation. |

## 5. Evaluation dimensions

Evaluate the dimensions that matter for the intended use. Not every dimension applies to every use case; record the rationale for any you mark out of scope. For each in-scope dimension, name how it is measured and the scorer.

| Dimension | What it measures | How it is scored | Scorer |
|---|---|---|---|
| Accuracy / correctness | The output is factually and substantively right for the input | Match to golden answer by rubric, or SME judgment | `<<FILL: human SME / model-as-judge / exact-match>>` |
| Groundedness / faithfulness | Every claim in the output is supported by the retrieved source or the input, with nothing added | Claim-by-claim check against the cited source | `<<FILL: SME / model-as-judge with source>>` |
| Hallucination / confabulation rate | The output asserts something not present in or contradicted by the source | Count of unsupported or contradicted claims per output | `<<FILL: SME / model-as-judge>>` |
| Consistency / determinism | Repeated runs on the same input give equivalent answers | Run N times, score agreement across runs | Automated agreement check + SME spot-check |
| Stress and adversarial behavior | Behavior holds under paraphrase, noise, long inputs, and adversarial or out-of-scope prompts | Perturbed and adversarial test set, scored on each | `<<FILL: SME / model-as-judge>>` |
| Safety / refusal | The model refuses or escalates out-of-scope, unsafe, or prohibited requests instead of answering | Pass/fail against a defined refusal set | `<<FILL: SME>>` |
| Format / completeness | The output meets the required structure, fields, and length | Schema or rule check | Automated |
| Calibration (if confidence is used) | Stated confidence matches observed accuracy at that confidence | Reliability check across confidence bands | Automated + SME |

For each dimension, name the failure that would matter most in the intended use and design the test set so it is well represented. For a model that summarizes safety-relevant text, an unsupported added claim (a groundedness failure) is the dangerous failure, so groundedness gets the most test coverage and the tightest threshold.

## 6. Golden and test datasets

Evaluation is only as honest as the data it runs on. Define and version the datasets below; an undocumented or contaminated dataset makes the headline score meaningless.

1. **Golden set.** A curated set of representative inputs each paired with a known-good reference output or a rubric for what a good output contains, built by qualified SMEs. State the source of the inputs, the count, the products, sites, and edge cases represented, who authored the references, and how disagreements between authors were resolved. Record inter-rater agreement where the reference involves judgment.
2. **Adversarial / stress set.** Inputs designed to break the model: paraphrases, very long or truncated inputs, out-of-scope requests, prompt-injection attempts, and known hard cases.
3. **Held-out and locked.** The evaluation set must not have been used to write or tune the prompts. Touch the locked set once, at the end, to report the numbers that go in the evaluation record. Performance reported on data used to design the prompts is not evaluation evidence.
4. **Versioning and lineage.** Freeze each dataset under version control with a recorded version identifier or hash, so the evaluation can be reproduced. Any production data pulled into the test set is itself GxP data and carries the full ALCOA+ expectations.
5. **Coverage and base rates.** Size the set so the dimension that matters most is well represented. Where the dangerous case is rare, oversample it or report a confidence interval, because a single point estimate on a few cases is fragile.

| Dataset | Purpose | Source | Count | Version / hash |
|---|---|---|---|---|
| Golden set | Accuracy, groundedness, completeness | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Adversarial set | Stress behavior, safety, hallucination | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Consistency set | Determinism across repeated runs | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 7. Scoring method and acceptance thresholds

Decide the scoring method and the pass thresholds before you run the evaluation, and tie each threshold to the consequence of the error it guards against. Setting the threshold after seeing the result is not evaluation, it is fitting the criteria to the answer.

State, per dimension:

- the metric and its scale (for example, percentage of outputs fully grounded; mean rubric score out of 5; number of unsupported claims per 100 outputs);
- the scorer and, where a model is used as the judge, how that judge was itself checked against human scores on a sample;
- the threshold to pass and the justification for that threshold;
- the sample size the threshold must be met on, and whether a confidence interval is reported.

| Dimension | Metric | Threshold to release | Justification | Sample size |
|---|---|---|---|---|
| Accuracy | `<<FILL: e.g. mean rubric score>>` | `<<FILL: e.g. >= 4.0 / 5>>` | `<<FILL>>` | `<<FILL>>` |
| Groundedness | `<<FILL: % outputs fully grounded>>` | `<<FILL: e.g. >= 98%>>` | `<<FILL: tie to consequence>>` | `<<FILL>>` |
| Hallucination | `<<FILL: unsupported claims / 100 outputs>>` | `<<FILL: e.g. <= 1>>` | `<<FILL>>` | `<<FILL>>` |
| Consistency | `<<FILL: agreement across N runs>>` | `<<FILL: e.g. >= 95%>>` | `<<FILL>>` | `<<FILL>>` |
| Stress and adversarial behavior | `<<FILL: % adversarial cases handled>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Safety / refusal | `<<FILL: % correct refusals>>` | `<<FILL: e.g. 100% of prohibited set>>` | `<<FILL>>` | `<<FILL>>` |

Where a model-as-judge does the scoring, treat the judge as a tool that itself needs evidence: sample a portion of its scores, have an SME re-score them, and report the agreement between the judge and the human. A judge with poor agreement is not a valid scorer for a regulated decision.

## 8. Evaluation run and evidence

1. Fix the model identity and version, the full prompt set, the retrieval configuration, the temperature or sampling settings, and the dataset versions, and record them all in the evaluation record. The evaluation is only valid for that exact configuration.
2. Run each in-scope dataset through the system, capturing every input and the raw output verbatim, with a timestamp and the configuration identifier.
3. Score each output by the method in section 7, retaining the score and, for human or model-judge scoring, the rationale.
4. Compute the per-dimension metric and compare it to the threshold. Record pass or fail per dimension and overall.
5. For any failure, record the failing cases verbatim, the assessment, and the disposition (fix prompt, narrow scope, add guardrail, reject for use). Re-run after any change and record both runs.
6. Retain the inputs, raw outputs, scores, and computed metrics as a GxP record so the result can be reconstructed and re-scored later.

## 9. Human review in use

For a generative system in a GxP context, human review is not optional; it is the control that keeps the output consistent with the principle that a quality decision needs documented human judgment. The in-use review must be defined (what the reviewer sees and decides), documented (the conclusion and the model version go into a GxP record), and meaningful (reviewers are trained on the model's known weaknesses and do not rubber-stamp). Watch the rate at which outputs are accepted unchanged; an unusually high acceptance rate signals automation bias and is a trigger to investigate, not a sign of success. Define, in advance, what happens when review finds a bad output: how it is recorded, whether the system is paused, and how the event feeds section 10.

## 10. Prompt and version control, and re-evaluation triggers

Prompts, retrieval configuration, and guardrails are the part of a generative system you control, so treat them as controlled configuration under change control. Keep a baseline of the exact prompt text, the model identity and version, the retrieval settings, and the sampling parameters, each with a version identifier. Any change to them is a change in the validation sense.

Re-evaluate, in whole or in the affected part, on any of these triggers:

| Trigger | Example | Re-evaluation scope |
|---|---|---|
| Prompt or guardrail change | Reword the system prompt, add a constraint | Re-run affected dimensions on the locked set |
| Retrieval / data-source change | Swap or re-index the source corpus | Re-run groundedness and accuracy |
| Vendor base-model change (API) | Provider updates the underlying model version | Treat as a change you did not initiate: re-run the full evaluation, hold use until it passes |
| Scheduled cadence | `<<FILL: e.g. quarterly>>` | Periodic check on a fresh production sample |
| In-use signal | Override or disagreement rate above `<<FILL: threshold>>`, or a reported bad output | Investigate, then re-evaluate the affected dimension |

Because a vendor can change an API model silently, define how you detect it (for example, pin the version where the vendor allows, and watch the consistency metric as a tripwire) and put the vendor's model-change behavior into the supplier assessment and the predetermined change control plan. A model evaluated once and never re-checked is not in a validated state, because you have no evidence it still behaves as it did at release.

## 11. Acceptance criteria

This plan is satisfied for release when all of the following are evidenced:

- The intended-use statement names the output, the action it drives, and the accountable role, and is approved by QA.
- The risk class is assigned with a documented rationale, sized using a recognized quality risk method.
- Evaluation dimensions are selected with a rationale for any marked out of scope.
- Golden, adversarial, and consistency datasets are defined, versioned, and held out from prompt design.
- Thresholds were set before the run, tied to the consequence of error, and the reported metrics meet them on the stated sample size.
- Any model-as-judge scorer was itself checked against human scores, with the agreement recorded.
- The evaluation record reconstructs the exact configuration, inputs, raw outputs, scores, and metrics.
- The in-use human review step is defined, documented, and meaningful, with reviewers trained on the model's weaknesses.
- Prompts and configuration are under version control, and the re-evaluation triggers are defined and live.

If any line cannot be evidenced, the system is not ready for release regardless of how well it scored.

## 12. References

> 21 CFR Part 11 (electronic records and signatures) and EU GMP Annex 11 (computerised systems) for record and signature integrity around the outputs.
> ICH Q9(R1), Quality Risk Management, for sizing the evaluation effort to risk.
> GAMP 5, A Risk-Based Approach to Compliant GxP Computerized Systems (Second Edition), for the risk-based lifecycle and its material on machine learning and novel technologies.
> FDA, Computer Software Assurance for Production and Quality System Software (final, 2025), for the intended-use-driven, critical-thinking approach.
> FDA AI/ML-Based Software as a Medical Device Action Plan (2021) and the 2025 draft guidance on AI-enabled device software functions, for the predetermined change control concept (device documents, applied here by analogy, not binding on a quality-operations model).

The dedicated regulatory framework for generative AI in GxP is still forming. Where a reference is draft or applied by analogy, say so in the plan and do not present it as settled law. Confirm the current version and clause numbers of each reference before issue.

## 13. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 14. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (System Owner / Data Science) | `<<FILL>>` | | |
| Reviewer (Validation / CSV) | `<<FILL>>` | | |
| Approver (Quality Assurance) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the plan completed for an example generative system: a model that drafts a plain-language summary of an incoming product complaint to populate the intake record, with the intake analyst confirming the summary. The company, system, and numbers are illustrative; replace them with your own.

**Intended use (section 3).** The model drafts a one-paragraph summary of each incoming complaint from the free-text report; the summary populates the complaint intake record; the intake analyst confirms or corrects the summary within the same shift and owns the final record. Risk class: advisory, because a human confirms every output before it is used. The dangerous failure is an added or contradicted clinical detail (a groundedness failure), so groundedness and hallucination carry the tightest thresholds.

**Datasets (section 6).**

| Dataset | Source | Count | Version |
|---|---|---|---|
| Golden set | 200 historical complaints, two qualified SME authors, disagreements adjudicated by a third; inter-rater agreement 0.88 | 200 | GS-2026-03 (hash a1c9...) |
| Adversarial set | 60 cases: 20 very long reports, 20 with mixed languages, 20 prompt-injection attempts | 60 | ADV-2026-03 (hash 7f20...) |
| Consistency set | 40 complaints run 5 times each | 40 | CONS-2026-03 (hash 4be1...) |

**Results against thresholds (sections 7 and 8).** Vendor API model (generic illustrative identifier "vendor-genai-model" version 2026-02), temperature 0, fixed system prompt v1.3, retrieval over the complaint text only.

| Dimension | Metric | Threshold | Result | Pass |
|---|---|---|---|---|
| Groundedness | % outputs fully grounded in the source report | >= 98% | 99.0% (198 / 200) | Yes |
| Hallucination | Unsupported or contradicted clinical claims per 100 outputs | <= 1 | 1.0 (2 / 200) | Yes |
| Accuracy | Mean SME rubric score (0 to 5) | >= 4.0 | 4.3 | Yes |
| Consistency | Equivalent summary across 5 runs | >= 95% | 97.5% (39 / 40) | Yes |
| Safety / refusal | Correct handling of the 20 injection attempts | 100% | 100% (20 / 20) | Yes |
| Format | Single paragraph, required fields present | 100% | 100% | Yes |

The model-as-judge used for the first-pass groundedness score was checked against SME scores on a 50-output sample: agreement 0.94, judged adequate, with all judge-flagged failures re-read by an SME. The two hallucination cases (an added severity word and an invented onset date) were retained verbatim in the evaluation record; the system prompt was tightened to forbid inferring details not stated, the affected dimensions were re-run on the locked set, and both runs are on file.

**Disposition.** All thresholds met on the stated sample sizes. The advisory pattern with same-shift analyst confirmation is the human control. Quarterly re-evaluation scheduled; a vendor model-version change or an analyst override rate above 15% triggers an off-cycle re-evaluation. QA approved release on the evaluation record EVR-2026-0051.

In this example the team set thresholds before the run, reported them on a held-out set the prompt was not tuned on, checked its own model-judge against humans, kept the failing cases and the fix on file, and wired the re-evaluation triggers to both a vendor change and an in-use signal. That sequence, pre-set criteria to honest measurement to recorded failures to a defined re-evaluation, is what a reviewer expects to see.

## Common inspection findings this plan prevents

- Performance is reported on the data used to write or tune the prompts, so the headline score is inflated and the system underperforms in use.
- Acceptance thresholds are dated after the evaluation report, so the numbers look fitted to the result rather than set against the consequence of error.
- Hallucination and groundedness are asserted to be fine but were never measured directly on a defined dataset.
- A model-as-judge produces the scores with no evidence that the judge itself agrees with human assessment.
- The evaluation cannot be reproduced because the exact model version, prompt text, and dataset versions were not recorded.
- The system was evaluated once at release and never re-checked, so there is no evidence it still behaves the same after a vendor model update.
- A defined human review step that reviewers approve without engaging, revealed by a near-100 percent acceptance rate.
- Prompts changed in production with no version control and no re-evaluation, so the validated state silently lapsed.

## How to adapt this plan

1. Set your document number, owner, and effective date in the header, and name the exact model identity and version in scope.
2. Write the one-sentence intended-use statement in section 3 and assign the risk class, then size every downstream activity to it.
3. In section 5, mark out of scope any dimension the use case does not need and record why; keep groundedness and hallucination for any system that asserts facts.
4. Build and version your golden, adversarial, and consistency sets in section 6 from your own data, and hold them out from prompt design.
5. Set the thresholds in section 7 before you run anything, tie each to the consequence of the error it guards, and define how any model-as-judge is itself checked.
6. Point the cross-references in section 2 and the triggers in section 10 to your real intended-use statement, risk assessment, supplier assessment, predetermined change control plan, and monitoring plan.
7. Confirm every regulation in section 12 against the current published version, and state plainly where you are reasoning by analogy because no guidance fits cleanly.
