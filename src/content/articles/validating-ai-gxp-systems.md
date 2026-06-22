---
title: "Validating AI-Enabled GxP Systems: A Framework Still Being Built"
description: "How to validate AI and machine learning systems in regulated pharma, biotech, and device environments: what is genuinely different, where the regulatory framework has gaps, and a practical, inspection-defensible approach you can run today."
pubDate: 2026-05-25
tags: ["AI", "validation", "CSV", "GxP", "21-CFR-Part-11", "machine-learning"]
pillar: "ai-automation"
tier: "Advanced"
---

Validating AI systems in GxP environments is a live problem with no settled answer. The regulatory framework that governs traditional computerized systems, 21 CFR Part 11, GAMP 5, the FDA computer software assurance guidance, was not designed for systems whose behavior changes over time, whose internal logic is not fully interpretable, and whose performance is probabilistic rather than deterministic.

Companies across pharmaceutical manufacturing, biologics, medical devices, and clinical operations are deploying AI-enabled GxP systems now, with or without a complete regulatory framework. This article is a practical guide to validating them using the best available tools, while being honest about where the framework has genuine gaps and where you have to reason from first principles. It is written so that after reading it you could scope the validation, defend it in an inspection, and answer the questions an interviewer or investigator will ask.

If you have not yet built a foundation in computerized system validation, read the [GAMP 5 CSV framework](/articles/gamp5-csv-framework) and the [computer software assurance approach](/articles/computer-software-assurance-fda) first. The AI-specific work sits on top of that base; it does not replace it. The full lifecycle view of model-specific deliverables lives in the [GxP ML model lifecycle](/articles/gxp-ml-model-lifecycle) article, and if you are building the tooling yourself, the [building AI tools for GxP](/articles/building-ai-tools-for-gxp) article covers the engineering side.

---

## What Makes AI Validation Different

Traditional computerized system validation rests on one core assumption: the system's behavior is deterministic and stable. Given the same inputs, the system produces the same outputs. The validation test proves those outputs are correct, and as long as the system does not change, the validation stays valid.

AI and machine learning systems break that assumption in several ways.

**Model behavior is probabilistic.** A machine learning model does not guarantee a specific output for a specific input. It produces a prediction with an associated confidence or probability. Two runs of the same model on the same data can produce slightly different results when the model has any stochastic element, for example dropout left active at inference, or non-deterministic floating-point operations on a GPU. A validation test that asserts an exact output value will be brittle in ways that traditional script-based testing is not.

**Models can change without a traditional software update.** A model that continues to learn from new data changes its behavior over time without any discrete version change in the code base. The validation that was accurate at deployment may no longer represent the system's behavior after several months of operation. Even a model frozen at deployment can effectively change behavior because the data flowing into it has shifted, a phenomenon usually called data drift or concept drift. (Data drift: the input distribution moves. Concept drift: the relationship between inputs and the correct output moves. Both degrade a model that has not changed at all.)

**The logic is not fully interpretable.** Traditional software logic can be read, inspected, and reasoned about line by line. Deep learning models produce outputs through layered mathematical transformations across thousands or millions of parameters. You cannot point to the line of code that made the decision, which makes it difficult to write test cases that definitively cover all relevant behaviors. For a regulated decision, the inability to explain why a model reached a conclusion is not a cosmetic problem; it directly affects whether a human reviewer can exercise meaningful judgment over the output.

**Performance metrics, not specifications, govern behavior.** A traditional validation states that "the system shall accept a valid result entry and display it in the audit trail," a binary pass or fail. An AI validation might state "the model shall classify incoming deviation reports with an F1 score of at least 0.90 on a representative held-out test set." That is a statistical claim about aggregate behavior across a population, not a guarantee about any single record. The acceptance criterion is a number on a curve, not a yes-or-no behavioral assertion.

The practical consequence: you cannot simply lift a traditional validation protocol and run an AI system through it. The structure of the evidence is different. You are proving a performance distribution, managing its stability over time, and wrapping it in human controls, rather than proving a fixed input-output table once and freezing it.

A short comparison makes the shift concrete.

| Dimension | Traditional computerized system | AI / ML system |
|---|---|---|
| Behavior | Deterministic, repeatable | Probabilistic, may be stochastic |
| Acceptance | Pass / fail against functional spec | Performance metric against a threshold |
| Test evidence | Scripted test cases, expected vs actual | Held-out test set, confusion matrix, metric distribution |
| "In a validated state" means | Configuration unchanged | Performance not degraded (drift-aware) |
| Change trigger | Code or config change | Retrain, data shift, architecture change |
| Explainability | Read the code | Approximate, post-hoc, needs deliberate design |
| Periodic review checks | The software has not changed | The model still performs |

---

## Current Regulatory Guidance and Its Limits

As of mid-2026, there is no single FDA guidance dedicated to validating AI and machine learning systems used in pharmaceutical or biologics manufacturing or in quality operations. The documents that apply were written for adjacent problems, and you borrow principles from them rather than following a recipe.

| Reference | What it covers | What it does not cover |
|---|---|---|
| FDA AI/ML-Based Software as a Medical Device Action Plan (January 2021) | Transparency, predetermined change control plans, real-world performance monitoring for AI in devices | Manufacturing and quality-system AI; it is a SaMD device document |
| FDA "Computer Software Assurance for Production and Quality System Software" (draft September 2022, finalized 2025) | Risk-based, intended-use-driven assurance; critical thinking over documentation volume | AI-specific risks such as drift, explainability, and continuously learning models |
| FDA draft guidance on marketing submissions for AI-enabled device software functions (January 2025 draft) | Lifecycle management and predetermined change control plans for AI in device submissions | Manufacturing and quality-operations AI; it is a premarket device document |
| GAMP 5 Second Edition (ISPE, 2022) | Risk-based CSV; appendices on AI/ML and other novel technologies; supplier capability; critical thinking | A complete, prescriptive AI validation protocol; it gives principles, not steps |
| 21 CFR Part 11 (electronic records and signatures) and EU GMP Annex 11 | Audit trails, access control, electronic record and signature integrity | Anything specific to probabilistic or learning systems |
| ICH Q9(R1) Quality Risk Management (2023 revision) | Formality and subjectivity in risk management; the basis for sizing AI validation effort to risk | AI mechanics; it is a general risk-management standard |

A few notes on each.

The **FDA AI/ML SaMD Action Plan (January 2021)** is a device document, not a manufacturing document, so it does not govern a quality-operations model directly. It is still worth reading because it introduced the predetermined change control plan, a mechanism for describing intended model changes in advance and the testing that accompanies them. That concept transfers cleanly to manufacturing and quality AI even though the legal pathway does not. The 2025 draft guidance on marketing submissions for AI-enabled device software functions expands the predetermined change control concept further; again, useful for ideas, not binding on a quality-system model.

The **computer software assurance (CSA) guidance** was a draft when first published in September 2022 and was finalized in 2025. It does not mention AI in any depth, but its central principle is the right starting point: scale your assurance activities to the risk the software poses to product quality and patient safety, defined by intended use, and prefer critical thinking and targeted testing over documentation for its own sake. Applied to AI, that means concentrating your evidence on the performance characteristics that actually matter for the intended use, not generating volume.

**GAMP 5 Second Edition (2022)** added material on novel and innovative technologies, including machine learning, and ISPE has published supplementary good-practice material in this area. The enduring GAMP principle holds: calibrate validation effort to risk, with risk defined by intended use and the nature of the software. The second edition also draws more on supplier capability and the critical-thinking model that aligns with the CSA guidance.

**ICH Q9(R1)** matters because every sizing decision in AI validation is a risk-management decision. The R1 revision (2023) sharpened the treatment of subjectivity and the level of formality appropriate to a given risk. Use it as the documented basis for why you validated an advisory model lightly and a process-control model heavily. See [quality risk management](/articles/quality-risk-management) for the underlying method.

**The gap that matters:** none of these documents tells you how to demonstrate that a model which keeps learning remains in a validated state, how much explainability a regulated decision requires, or what statistical evidence is sufficient for a given risk class. The industry is operating ahead of the formal guidance, and inspectors know it. That is not a reason to wait; it is a reason to document your reasoning carefully so the rationale survives an inspection.

---

## A Practical Validation Framework for GxP AI

Given the gaps, here is a framework grounded in existing regulatory principles that also addresses the AI-specific problems. It follows the familiar validation lifecycle, with AI-shaped content inside each stage. For the underlying lifecycle and document set, see the [validation deliverables guide](/articles/validation-deliverables-guide).

### 1. Define the Intended Use Precisely

The single most important design decision is stating exactly what the system does and what role the AI output plays in the regulated workflow. Get this wrong and every downstream activity is mis-sized. This is also the first thing an inspector asks and the first thing an interviewer probes: "what does the model actually decide?"

There are at least three distinct AI use patterns in GxP, each with different validation implications.

**Advisory or screening.** The AI flags potential issues for human review, and a person makes the final determination. The AI is a screening tool, not a decision-maker. This is the lowest-risk pattern and the easiest to validate. The validation shows that the flags are useful at the intended sensitivity, meaning the false-negative and false-positive rates are acceptable for the screening purpose, and that the human review process is defined and recorded. Example: a model that surfaces audit trail entries most likely to be data-integrity relevant so a reviewer can prioritize, while the reviewer still examines the full set on a defined sampling basis. Another: a model that pre-reads incoming product complaints and suggests a category for the intake analyst to confirm.

**Automated classification.** The AI classifies records such as deviations, complaints, or documents without per-record human review, and that classification drives downstream actions. The risk is higher because the model's output is acted upon directly. The validation must demonstrate classification performance at the level the use case requires, and the monitoring program must reliably detect performance degradation before it causes harm. Example: auto-routing incoming events to the correct quality workflow based on text content; a misroute can delay a safety-relevant event.

**Process control.** The AI influences a manufacturing parameter such as feed rate, temperature, or agitation based on model predictions. This is the highest-risk pattern. The validation must include failure-mode analysis for model failures, and the system must have engineered safety interlocks that prevent the model from driving the process outside validated operating bounds, independent of the model itself. The interlock is a deterministic control you can validate the old way; it is what keeps a probabilistic component inside a defensible envelope. This sits on top of the conventional [automation and control system validation](/articles/automation-validation-plc-scada-dcs) for the underlying equipment.

A useful discipline: write a single sentence that names the model output, the action it triggers, and the person or system accountable for the consequence. If you cannot write that sentence cleanly, the intended use is not yet defined. A filled-in example: "The model assigns a preliminary criticality tier to each new deviation; the assigned tier sets the investigation timeline; the QA reviewer confirms or overrides the tier within one business day and owns the final classification." Now every downstream control has a home: the override mechanism, the timeline, the accountable role.

### 2. Apply GAMP Software Categories With AI-Specific Nuance

An AI system in a GxP context is usually GAMP Category 5 (custom software) or Category 4 (configured commercial product).

- **Category 4.** A commercial platform with built-in machine learning capability, configured for a specific GxP use. The vendor develops and maintains the ML infrastructure; your site owns the training data, the configuration, the model selection, and the deployment. Vendor assessment carries weight here, but note that a vendor's general claim of "validated AI" rarely covers your specific model trained on your data for your intended use. The configured, trained instance is yours to validate. Assess the supplier the same way you would any [software supplier](/articles/software-supplier-assessment-csa).
- **Category 5.** A model built and trained specifically for the use case. All development, training, and deployment are site activities, and the validation is correspondingly the most demanding: documented model development, training-data management, a defined testing methodology, and change control for model updates.

A subtlety that trips teams up: even a Category 4 platform produces a Category 5-like artifact once you train a custom model inside it. The platform is configured; the model is, in effect, bespoke. Size your evidence to the trained model's risk, not to the platform's marketing category. A large language model accessed through a vendor API is the sharp case here. The base model is a black-box you cannot inspect or fully version, the vendor can change it under you, and your prompts and retrieval configuration are the part you actually control. Treat the prompt, retrieval setup, guardrails, and output handling as your Category 5 artifact, pin the model version where the vendor allows it, and put the vendor's model-change behavior into your supplier assessment and your change-control plan.

### 3. Define Performance Specifications Before You Train

Where traditional software is tested against functional specifications, AI models are tested against performance specifications. Common metrics:

- **Sensitivity (recall):** the proportion of true positives the model correctly identifies. Critical when a missed positive is the dangerous failure, for example a missed critical deviation.
- **Specificity:** the proportion of true negatives the model correctly dismisses. Critical when false alarms carry cost or erode trust in the system.
- **Precision (positive predictive value):** of the items the model flagged, how many were truly positive.
- **F1 score or another composite** that balances precision and recall when both matter.
- **Confidence calibration:** whether the model's stated confidence matches observed accuracy. A model that says it is 90 percent confident should be right about 90 percent of the time at that confidence level. Poor calibration quietly undermines any workflow that routes by confidence threshold.

It helps to read these off a confusion matrix. Take a model that screens 1,000 deviations, of which 100 are genuinely critical. Suppose it flags 120 as critical: 90 of them truly critical (true positives), 30 not (false positives), and it misses 10 truly critical ones (false negatives).

|  | Predicted critical | Predicted not critical |
|---|---|---|
| Actually critical | 90 (TP) | 10 (FN) |
| Actually not critical | 30 (FP) | 870 (TN) |

From this: recall = 90 / (90 + 10) = 0.90, precision = 90 / (90 + 120 - 90) = 90 / 120 = 0.75, specificity = 870 / (870 + 30) = 0.97, F1 = 2 x (0.75 x 0.90) / (0.75 + 0.90) = 0.82. For deviation screening, the 10 missed critical events are the dangerous failure, so you would set a high recall threshold and accept the lower precision, then handle the 30 false positives with human review. Writing these numbers down before you train forces the conversation about which error you can least afford.

The acceptance criteria belong in the user requirements specification, defined before the model is trained and tested. See [user requirements and traceability](/articles/user-requirements-and-traceability) for how to anchor them. If you measure performance first and then write the specification to match, you have fitted your criteria to the result, which is not testing, it is rationalization. Decide what performance the intended use genuinely requires, justify the threshold against the consequence of error, then build and test against it.

One more discipline that inspectors increasingly probe: hold out a true test set that the model never saw during training or tuning, and keep it under version control. Performance reported on data the model trained on is meaningless as validation evidence. Keep three separate splits: training (the model learns from it), validation/tuning (you select hyperparameters and thresholds on it), and a locked test set touched once, at the end, to report the number that goes in the validation report. The test set, ideally drawn from a time period after the training data to mimic real deployment, is your honest measure. Where positives are rare, report a confidence interval or run a sensitivity check, because a single point estimate on a small positive count is fragile.

A defensible performance specification therefore states: the metric, the threshold, the justification for the threshold against the consequence of error, the test population it must be met on, and how the test set was constructed and held out. Anything less is an opinion, not a specification.

### 4. Training Data Integrity

For supervised models, the training data is a regulated resource. The integrity of the model is bounded by the integrity of the data it learned from, so the same [data integrity foundations](/articles/data-integrity-foundations) that govern any GxP record apply here, with additions specific to model building. Address:

- **Source and lineage.** Where did the data come from, was it GxP data, and was it handled under controls when it was created? Garbage-but-attributable is still garbage for training purposes.
- **Representativeness.** Does the training data reflect the population the model will face in production, across products, sites, instruments, and edge cases? A model trained on data from one product line will quietly underperform on another, and a model trained only on routine cases will fail on the rare events that matter most.
- **Labeling quality.** Were labels generated by qualified subject-matter experts, and for subjective judgments, what was the inter-rater agreement? A model can only be as consistent as the labels it learned from. Document the labeling procedure and the qualifications of the labelers as you would any other GxP determination. Where two reviewers disagree on a label, record how the disagreement was resolved.
- **Class balance.** If 2 percent of records are critical, a naive model can score 98 percent "accuracy" by calling everything non-critical and be useless. Know your base rates and choose metrics (recall, precision, F1) that are not fooled by imbalance.
- **Version control.** Is the exact training dataset versioned so the model can be reproduced? Reproducibility is the AI analogue of a retained record. If you cannot rebuild the model, you cannot investigate it.
- **Production data used for retraining.** Data pulled from the production environment to retrain a deployed model is itself GxP data and carries the full [ALCOA+ expectations](/articles/alcoa-plus-deep-dive). Retraining is a data-integrity event, not just an engineering task.

A small worked example for the training-data record: for a complaint-classification model, the data integrity file should name the source system and extract date, the number of records, the date range, the products and sites represented, the labeling SOP and the two qualified labelers, the measured inter-rater agreement, the resolution of disagreements, the train/validation/test split method, and the version hash of the frozen dataset. That package lets a future investigator reproduce the model and lets an inspector see the chain from data to decision.

### 5. Model Change Control

Model updates, whether retraining, architecture changes, or hyperparameter changes, are system changes in the validation sense and require [change control](/articles/change-control-validated-systems). The difficulty is that "model update" spans a wide range, from a full architecture replacement that clearly demands revalidation, to a minor retrain on a small batch of new data that may need only a confirmatory check.

A predetermined change control plan, the concept FDA introduced for SaMD in the 2021 action plan, applies well to manufacturing and quality AI. A good plan, written and approved before deployment, defines:

- which types of model change are anticipated and in scope;
- the performance boundaries that trigger or constrain a change;
- the testing required for each class of change;
- the threshold at which a change requires full revalidation rather than a confirmatory update.

With this plan in place, routine model maintenance proceeds in a controlled way instead of every retrain being treated as an unplanned deviation. Without it, you face a choice between revalidating constantly or letting changes slip through ungoverned; neither is defensible.

A worked change-classification table makes the plan operational:

| Change type | Example | Required action |
|---|---|---|
| Routine retrain, same architecture and features, in-distribution new data | Quarterly retrain on accumulated production records | Confirmatory test on locked test set, must meet or exceed original spec; documented record; no revalidation |
| Threshold or decision-cutoff adjustment | Move classification cutoff to raise recall | Re-test affected metrics, update spec rationale, QA approval |
| New feature or new data source | Add a numeric attribute to the input | Targeted revalidation of affected performance; data integrity review of the new source |
| Architecture change | Replace the model family | Full revalidation; new URS performance spec if intended use shifts |
| Vendor-driven base-model change (API model) | Vendor updates the underlying LLM version | Treat as a change you did not initiate: re-run the confirmatory test set, hold deployment until it passes |

The plan might permit quarterly retraining on accumulated production data, provided the retrained model meets or exceeds the original performance specification on the held-out test set and the input distribution has not shifted beyond defined limits, with a documented confirmatory test record for each retrain and a hard requirement for full revalidation if the architecture or feature set changes. The point of writing it down in advance is that the decision logic was approved before anyone had a result to defend.

### 6. Performance Monitoring After Deployment

The validated state of an AI system includes ongoing performance monitoring: periodic evaluation against the performance specification in the requirements, using representative samples from production. This is the AI equivalent of the periodic review every validated system needs, described in the [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review) article. The difference is what you are checking. Periodic review of a traditional system confirms the software has not changed (configuration verification). Periodic review of an AI system confirms performance has not degraded, which can happen with no intentional change at all, because the world the model sees has moved.

Triggers for a model performance review:

- scheduled cadence, for example quarterly;
- a shift in the input data distribution, such as a new product, process, or instrument;
- stakeholder feedback indicating unexpected behavior;
- an override rate above a predefined threshold, meaning human reviewers are correcting the model more often than expected.

What to actually monitor, and how:

- **Performance on labeled samples.** Periodically pull a representative production sample, have qualified reviewers label the ground truth, and recompute the metrics against the spec. This is the only direct measure that the model still works, but it costs labeling effort, so it runs on a cadence.
- **Override and disagreement rate.** Cheap, continuous, and a strong leading indicator. A rising rate of reviewers overriding the model usually shows up before the formal metric review catches it.
- **Input distribution monitoring.** Track the statistical profile of incoming data against the training distribution. A drift signal here tells you to investigate before performance has visibly broken.
- **Confidence distribution.** A model becoming systematically less confident, or oddly more confident, often signals a population it was not built for.

Build the monitoring in from day one. A model with no monitoring is not in a validated state regardless of how it performed at release, because you have no evidence it still works. The monitoring evidence is itself a GxP record and should be retained and reviewable. Define, in advance, what you do when monitoring trips: who is notified, whether the model is paused or routed to fuller human review, and how the event is investigated. A monitoring system with no defined response is decoration.

---

## Roles and Responsibilities

AI validation fails most often at the seams between functions, because no single role owns the whole thing. Name owners explicitly. A workable split, adapt titles to your organization:

| Activity | Accountable | Contributes |
|---|---|---|
| Intended-use statement and risk class | Process or System Owner | QA, Data Science |
| User requirements and performance spec | System Owner | QA, SMEs, Data Science |
| Training data integrity and labeling | Data Steward / SME labelers | Data Science, QA |
| Model development and testing | Data Science / ML Engineering | System Owner |
| Validation approach and protocols | Validation / CSV lead | QA, Data Science |
| Performance and acceptance approval | Quality Assurance | System Owner |
| Predetermined change control plan | System Owner + QA | Data Science |
| Post-deployment monitoring | System Owner + Data Science | QA on review of records |
| Human review in operation | Trained operational reviewers | QA on procedure |
| Final release decision | Quality Assurance | All |

The recurring failure is treating model building as a pure data-science task that QA reviews at the end. The data integrity decisions, the labeling SOP, the held-out test discipline, the change plan, all need quality involvement while the model is being built, not after. See [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) for the broader accountability model.

---

## Explainability and the Regulated Decision

Explainability deserves its own treatment because it determines whether human review can be meaningful at all. A reviewer cannot exercise judgment over a conclusion they cannot interrogate. The level of explanation you need scales with risk and with the use pattern.

For an advisory model, a confidence score and the top features driving the flag may be enough for a reviewer to decide where to look. For an automated classification that drives action, you generally want a per-decision rationale: the input features that most influenced the output, similar past cases, or a natural-language justification the reviewer can sanity-check. For process control, the deterministic interlock matters more than the model's self-explanation, because you are relying on engineered bounds rather than the model's reasoning.

Be cautious with post-hoc explanation techniques. Feature-attribution methods (the common families assign an importance to each input feature) are useful for review and for investigation, but they are approximations of the model's behavior, not a literal account of it. Two different attribution methods can disagree on the same prediction. Treat them as an aid to human judgment, document their limitations, and do not present an approximate attribution as if it were a guaranteed causal explanation. An honest statement of what the explanation does and does not establish is more defensible than overclaiming.

For generative and large-language-model components there is an extra failure mode: a confident, fluent, wrong answer (often called confabulation). The mitigation is not better explanation, it is constraining the task: ground outputs in retrieved source documents, keep the output checkable against that source, and keep a human in the loop for any regulated decision. Never let an unconstrained generative output drive a quality decision unreviewed.

---

## Human Review: The Non-Negotiable Control

For any AI operating in a GxP context, human review is not optional. It is the control that keeps the system consistent with the GxP principle that quality decisions require documented human judgment. The human review step must be:

- **Defined.** What does the reviewer actually do, what information do they see, and what decision are they making? Vague review steps fail in inspection.
- **Documented.** The reviewer's conclusion goes into a GxP record, together with the AI output that was reviewed and, where relevant, the model version that produced it.
- **Meaningful.** Reviewers are trained on the system's performance characteristics, including its known weaknesses, and apply judgment rather than rubber-stamping outputs. Training records should reflect this. See [training program](/articles/training-program-gxp).

The hardest part to sustain is meaningfulness. A model that is right almost all the time breeds automation bias: reviewers start approving without truly reviewing, precisely because the model is usually correct. That erodes the only control standing between a model error and a quality event. Design the workflow to keep reviewers genuinely engaged. Present the model's reasoning, not just its conclusion. Require a short justification when a reviewer agrees with a high-confidence output. Monitor the rate at which outputs are accepted without modification, and treat an unusually high acceptance rate as a signal to investigate, not as success. The same vigilance that drives effective [audit trail review](/articles/audit-trail-design-and-review) applies here: a control that is never exercised is not a control.

---

## Acceptance Criteria: How You Know It Is Done

A pile of activity is not the same as a validated system. Before release, an AI-enabled GxP system should be able to show all of the following. Use this as a release checklist.

- The intended-use statement is written, names the decision the model drives, the action it triggers, and the accountable role, and is approved by QA.
- The risk class (advisory / classification / process control) is assigned, with the ICH Q9(R1) based rationale on file.
- The performance specification was written in the URS before training, with metrics, thresholds, and a justification tied to the consequence of error.
- A locked, version-controlled test set the model never saw was used to report performance, and the reported metrics meet the spec.
- The training data integrity file is complete: source, lineage, representativeness, labeling SOP and qualifications, inter-rater agreement, splits, and the dataset version.
- A predetermined change control plan is approved, classifying anticipated changes and their required testing.
- A monitoring plan is live from day one, with triggers, what is measured, and the defined response when a trigger fires.
- The human review step is defined, documented in a GxP record, and reviewers are trained on the model's weaknesses.
- For process control, deterministic safety interlocks are independently validated.
- Traceability runs from intended use to requirements to test evidence, with rationale recorded wherever guidance was silent.

If any line cannot be evidenced from the file, the system is not ready for release regardless of how well the model scored.

---

## How This Plays Out in an Inspection

Inspectors approaching an AI-enabled GxP system tend to ask a predictable set of questions, and your documentation should answer them before they are asked. Expect: What is the intended use and what decision does the model drive? How was the model validated, against what acceptance criteria, and were those criteria set before testing? Where did the training data come from and how is its integrity assured? How do you control model changes? How do you know the model still performs, and what do you do when it drifts? What is the human review step and how do you keep it meaningful?

The recurring theme across the broader inspection patterns, covered in [FDA inspection readiness](/articles/fda-inspection-readiness), is that investigators reward a coherent, honestly documented rationale and penalize gaps that look unmanaged. An AI system whose file says, in effect, "here is what we validated, here is the principle we applied where guidance was silent, here is how we monitor it, and here is the human control," reads as a system under control. One that claims blanket compliance under a framework that visibly does not fit invites deeper scrutiny.

---

## Common Mistakes and Inspection-Finding Patterns

These are the recurring failure patterns, framed generically. Each maps to a real category of finding seen against computerized systems and data integrity.

- **Test set leakage.** Reporting performance on data the model trained or tuned on, so the headline metric is inflated and the model underperforms in production. The fix is the three-way split and a locked test set touched once.
- **Criteria fitted after the fact.** Writing the acceptance threshold to match the result the model happened to achieve. An inspector who sees the spec dated after the test report will not trust the number.
- **No model change control.** Retraining or swapping models with no governance, so the validated state silently lapses. Without a predetermined change control plan this is almost guaranteed.
- **Deploy and forget.** No monitoring, so there is no evidence the model still works months later. The validated state is asserted, not demonstrated.
- **Training data with no integrity record.** No lineage, no labeling SOP, no dataset version, so the model cannot be reproduced or investigated. This is a straight data-integrity finding wearing an AI costume.
- **Rubber-stamp human review.** A defined review step that operators approve without engaging, revealed by a near-100 percent acceptance rate. The control exists on paper only.
- **Overclaimed explainability.** Presenting an approximate feature attribution as a literal causal explanation, which collapses under questioning.
- **Vendor "validated AI" taken at face value.** Relying on a supplier's general validation claim for your specific model on your data, with no site-level evidence for the trained instance.
- **Wrong risk class.** Validating a process-influencing model as if it were advisory, because the paperwork was easier, and having no failure-mode analysis or interlock when an inspector asks.
- **Hidden AI.** A spreadsheet macro or vendor feature quietly doing classification or prediction that was never assessed as a model at all. Inventory where AI actually sits in your GxP processes; see [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation).

---

## Interview Questions and How to Answer Them

If you are interviewing for a CSV, data integrity, or digital quality role and AI comes up, these are the questions that separate a real practitioner from someone reciting buzzwords. Short, concrete answers win.

**"How is validating an AI system different from validating a normal computerized system?"** Traditional CSV proves a deterministic input-output mapping once and freezes the configuration. AI behavior is probabilistic, can drift with no code change, is not fully interpretable, and is judged against a performance metric on a population rather than a pass/fail per record. So validation shifts from proving a fixed table to proving a performance distribution, governing change, monitoring for drift, and wrapping it in human review.

**"Which framework do you apply when there is no AI-specific FDA guidance?"** GAMP 5 Second Edition for the risk-based lifecycle, the CSA guidance (draft 2022, final 2025) for the critical-thinking and intended-use-driven approach, ICH Q9(R1) to size effort to risk, Part 11 and Annex 11 for records and signatures, and the predetermined change control concept from the 2021 SaMD action plan for model change. I document explicitly where I reason by analogy because no guidance fits cleanly.

**"How do you set acceptance criteria for a model?"** Before training, in the URS, as a performance metric tied to the consequence of error. If a missed positive is the dangerous failure, I prioritize recall; if false alarms are the cost, I prioritize precision or specificity. I justify the threshold and I report it on a locked held-out test set the model never saw, never on training data.

**"A model has been live for nine months. How do you know it is still validated?"** Because monitoring shows it. I check performance on periodic labeled production samples against the spec, watch the override rate continuously as a leading indicator, and monitor input drift. Without that evidence the validated state is just an assertion from release day.

**"What is your biggest concern with a model that drives action automatically?"** Two things: drift degrading performance with no code change, and automation bias hollowing out the human review. I mitigate the first with monitoring and a change plan, and the second by designing the review to stay meaningful, requiring justification and watching the acceptance rate.

**"How do you handle a model you cannot fully explain?"** I scale the explainability requirement to the use pattern. For advisory, a confidence score and top features. For automated action, a per-decision rationale a reviewer can check. For process control, I rely on a deterministic interlock rather than the model's self-explanation. And I never present a post-hoc attribution as a guaranteed causal explanation.

**"What would you put in a predetermined change control plan?"** The anticipated change types, the performance boundaries that constrain them, the testing required per class of change, and the line above which a change forces full revalidation rather than a confirmatory check. The point is that the decision logic is approved before anyone has a result to defend.

---

## The Honest Assessment

AI validation in GxP is being worked out by industry and regulators in parallel, without a complete answer yet. Companies deploying AI in regulated environments today do so under frameworks that were not designed for AI, with the understanding that more specific guidance will arrive in time.

Waiting for perfect guidance carries its own risk, because the guidance may be years away and the operational pressure to deploy is already here. Deploying with no framework carries the opposite risk: when inspectors eventually look closely, your readiness will be unclear and difficult to reconstruct after the fact.

The path I would recommend is steady and unglamorous. Use the best available frameworks: GAMP 5, the computer software assurance approach, ICH Q9(R1), Part 11 and Annex 11. Be explicit about where they apply cleanly and where you are reasoning by analogy. Document the rationale for every design decision that existing guidance does not cover, so the thinking is visible later. Set performance criteria before you test, keep training data under integrity controls, govern model changes with a predetermined plan, and build monitoring in from the first day of operation.

A deployment with honest documentation of both what was validated and what remains uncertain is more defensible than one that claims full compliance under a framework that does not quite fit. Regulators generally respond better to well-managed, openly stated uncertainty than to confident compliance claims that come apart under questioning.
