---
title: "Qualifying Large Language Models and Generative AI for Regulated Use"
description: "A practical method for qualifying and evaluating LLMs and generative AI in GxP: setting acceptance criteria for a probabilistic system, designing golden datasets, measuring groundedness and hallucination, building guardrails, and monitoring in production."
pubDate: 2026-06-22
tags: ["AI", "LLM", "generative-ai", "GxP", "validation", "data-integrity", "evaluation"]
pillar: "ai-automation"
tier: "Advanced"
---

A large language model behaves nothing like the software your validation procedures were written for. It does not return the same answer twice, its output is free text rather than a value in a field, and it can produce a fluent, confident, completely wrong response with no error flag. Yet teams across pharma, biotech, and medical devices are now putting these systems in front of GxP work: summarizing deviations, drafting investigation narratives, answering questions over controlled documents, classifying complaints, extracting data from batch records. The question is no longer whether to qualify them, but how.

This article is a step-by-step method for qualifying and evaluating LLMs and generative AI for regulated use. It assumes you already understand computerized system validation and the AI-specific shift in evidence. If you do not, read the [GAMP 5 CSV framework](/articles/gamp5-csv-framework) and [validating AI-enabled GxP systems](/articles/validating-ai-gxp-systems) first, because the generative case sits on top of that foundation rather than replacing it. What follows is written so that after reading it you could scope a qualification, design the test sets, defend the evidence in an inspection, and answer the questions an interviewer will ask.

The hardest conceptual move is this: you are not proving that a system produces correct output. You are proving that a probabilistic system produces output that is good enough, often enough, with the dangerous failures caught by controls you can validate the old way. Hold that idea while you read.

---

## Why a Generative System Needs a Different Qualification

A classification model returns a label from a fixed set, and you can score it against a confusion matrix. A generative model returns open-ended text, and there is no single correct answer to compare against. That difference forces three changes in how you qualify it.

**The output space is unbounded.** "Summarize this deviation" has no single right answer; many summaries are acceptable, some are wrong, and the line between them is a matter of judgment about completeness and faithfulness, not an exact string match. Your acceptance evidence has to measure properties of the output (is it grounded, is it complete, is it consistent) rather than equality to an expected value.

**The same input gives different outputs.** Generative models sample from a probability distribution. The same prompt run twice can produce differently worded answers, and at higher sampling temperature the variation grows. A test that asserts an exact output text will fail on the second run for reasons that have nothing to do with quality. You qualify the behavior across repeated runs, not a single frozen response.

**The failure mode is plausible-but-false.** The signature risk of generative AI is confabulation, often called hallucination: the model states something fluently and confidently that is not supported by any source. There is no exception thrown, no out-of-range value, nothing that traditional testing would catch. In a GxP context a fabricated specification limit, an invented test result, or a citation to a procedure that does not exist is a data-integrity event. The qualification has to measure this failure mode directly, because nothing else will surface it.

| Dimension | Traditional system | Classification model | Generative / LLM system |
|---|---|---|---|
| Output | Value in a field | Label from a fixed set | Open-ended free text |
| Correctness | Exact match to expected | Match to ground-truth label | Faithful, complete, consistent vs source |
| Repeatability | Identical every run | Identical (if deterministic) | Varies run to run by design |
| Worst failure | Wrong value, usually flagged | Misclassification | Confident fabrication, unflagged |
| Test evidence | Scripted expected vs actual | Confusion matrix on held-out set | Golden dataset scored on multiple metrics |
| "Still works" means | Config unchanged | Performance not degraded | Performance not degraded AND base model not silently changed |

> "Persons who use closed systems to create, modify, maintain, or transmit electronic records shall employ procedures and controls designed to ensure the authenticity, integrity, and, when appropriate, the confidentiality of electronic records." - 21 CFR Part 11.10

If an LLM generates content that becomes part of a GxP record, that record is still subject to Part 11 and to ALCOA+ expectations. The model being probabilistic does not lower the bar on the record it produces. See [ALCOA+ in depth](/articles/alcoa-plus-deep-dive) for the record-integrity attributes the output must still satisfy.

---

## Step 1: Define Intended Use and the Generative Risk Pattern

**Why.** Every downstream decision (how much evidence, which metrics, what guardrails) is sized to what the model actually does and what happens to its output. This is the first thing an inspector asks and the first thing an interviewer probes. Getting it wrong mis-sizes the entire qualification. ICH Q9(R1) is the documented basis for sizing effort to risk; see [quality risk management](/articles/quality-risk-management).

**What.** A single sentence that names the generative output, the action it triggers, and the role accountable for the consequence. If you cannot write that sentence cleanly, the intended use is not yet defined.

**How.** Place the use case into one of these generative patterns, because each carries a different risk and a different evidence burden.

- **Drafting with mandatory human authorship.** The model produces a first draft (a deviation narrative, an SOP section, an investigation summary) that a qualified person edits and owns. The human is the author of record; the model is a writing aid. Lowest risk, because a competent reviewer stands between the output and the record. The qualification shows the drafts are useful and faithful enough to save time without introducing errors the reviewer is likely to miss.
- **Retrieval question answering over controlled content.** The model answers questions grounded in a defined corpus, for example "what is the acceptance criterion for endotoxin in this product?" answered from controlled specifications. Risk is moderate to high depending on whether the answer drives action. The dominant failure is an answer not actually supported by the retrieved source, so groundedness is the metric that matters most.
- **Structured extraction.** The model pulls fields from unstructured text (extracting results from a scanned record, lot numbers from a certificate). This looks deterministic but is not; the model can transcribe a number wrong or invent a missing field. Risk scales with what the extracted value feeds. Treat it close to automated classification, with exact-match scoring on the extracted fields.
- **Autonomous generation that drives action with no per-output review.** The model's text triggers a workflow with no human reading each output. This is the highest-risk pattern and, for most GxP uses today, the one to avoid unless you have very strong evidence and engineered constraints. If you must, the constraints (output schema, allowed values, downstream validation) carry the safety burden, not the model.

A worked intended-use sentence: "The assistant drafts a proposed root-cause narrative from the deviation record and linked data; the investigation owner reviews, corrects, and signs the narrative within the investigation timeline and owns the final root cause." Now every control has a home: the human author, the timeline, the signature, the source data the draft must stay faithful to. Compare this to the patterns in [scaling an AI pilot to production](/articles/scaling-ai-pilot-to-production), where intended use that drifts during scale-up is a recurring failure.

**Acceptance criteria for this step.** The intended-use statement is written, names the output, the action, and the accountable role, assigns one of the generative risk patterns, and is approved by QA with an ICH Q9(R1) based rationale on file.

**Roles.** Process or System Owner is accountable; QA and the data-science or ML function contribute.

**Common mistake.** Qualifying a retrieval-QA system that drives action as if it were a drafting aid, because the drafting paperwork is lighter. When an inspector asks who reviews each answer and the honest answer is "no one," the risk class was wrong.

**Interview angle.** *"How do you decide how much to qualify an LLM use case?"* By the generative risk pattern: who or what consumes the output and whether a competent human owns the result before it becomes a record. A drafting aid with mandatory human authorship needs far less than a system whose answers drive action unreviewed.

---

## Step 2: Define Acceptance Criteria for a Probabilistic System

**Why.** Without criteria set in advance, "the model works well" is an opinion, and an inspector who sees criteria dated after the test report will not trust the number. Performance criteria written before testing are the line between qualification and rationalization. They belong in the user requirements specification; see [user requirements and traceability](/articles/user-requirements-and-traceability).

**What.** A set of measurable properties of the output, each with a threshold and a justification tied to the consequence of error. For a generative system the useful evaluation metrics are:

- **Accuracy / correctness.** For tasks with a checkable right answer (extraction, factual QA), the fraction of outputs that are factually correct against ground truth. For extraction, this is often exact-match or field-level accuracy.
- **Groundedness (faithfulness).** The fraction of factual claims in the output that are supported by the provided source material. This is the central metric for retrieval QA and summarization. A grounded answer says nothing the source does not support, even if the unsupported statement happens to be true.
- **Hallucination rate.** The complement of groundedness, framed as the failure: the fraction of outputs (or of claims) that assert something unsupported or fabricated. Worth tracking as its own number because it is the metric most directly tied to a data-integrity finding.
- **Completeness (coverage).** The fraction of the information that should be in the output that actually is. A summary that omits the one safety-relevant fact is dangerous even if everything it does say is grounded. Groundedness and completeness are different failures: groundedness catches what should not be there, completeness catches what is missing.
- **Consistency (stability).** How much the output varies across repeated runs of the same input. Measured as agreement across N runs, or as variance in a score. Low consistency on a regulated task is itself a finding, because it means the system's behavior is not predictable.
- **Resilience to input variation.** How performance holds up under realistic input variation: rephrased questions, messy or partial source text, adversarial or out-of-scope prompts, longer inputs. A model that scores well on clean test prompts and collapses on real-world inputs is not qualified for real-world use.
- **Refusal / abstention behavior.** Whether the model correctly declines or flags uncertainty when the source does not contain the answer, rather than guessing. For a GxP assistant, "the source does not state this" is the correct answer to many questions, and a model that fabricates instead of abstaining is more dangerous than one that abstains too often.

**How.** For each metric, write the threshold and justify it against the consequence of the error in this use case. A drafting aid can tolerate moderate completeness because the human author fills gaps; a retrieval-QA system that informs a disposition decision needs near-zero unflagged hallucination because a fabricated limit could pass bad product. Decide which failure you can least afford and weight the criteria accordingly. The same discipline applies as for any AI acceptance threshold in [validating AI-enabled GxP systems](/articles/validating-ai-gxp-systems): set it before you test, justify it against harm.

A defensible criteria block, for a retrieval-QA assistant answering questions over controlled specifications:

| Metric | Threshold | Justification |
|---|---|---|
| Groundedness | >= 0.98 of claims supported by retrieved source | A fabricated specification value could drive a wrong disposition; near-zero tolerance |
| Hallucination rate | <= 0.5 percent of answers contain any unsupported claim | Same risk; tracked as its own number for monitoring |
| Correct abstention | >= 0.95 of unanswerable questions correctly declined | Guessing on absent data is the dangerous failure |
| Completeness | >= 0.95 of required facts present in answer | A missing limit is as harmful as a wrong one |
| Consistency | >= 0.95 answer agreement across 5 runs of each query | Behavior must be predictable for a regulated decision |
| Accuracy (where checkable) | >= 0.98 exact match on numeric values | Numbers feed downstream decisions |

**Acceptance criteria for this step.** Every metric has a numeric threshold, a justification tied to consequence of error, and is recorded in the URS before any evaluation is run.

**Roles.** System Owner accountable; QA, SMEs, and data science contribute.

**Common mistake.** Reporting a single "accuracy" number for a generative system. Accuracy alone hides hallucination (an answer can be fluent and wrong) and hides completeness (an answer can be correct in what it says and dangerously incomplete). Inspectors and good interviewers know to ask for groundedness and hallucination rate specifically.

**Interview angle.** *"What metrics do you use to evaluate an LLM, and why more than one?"* Because no single number captures generative quality. Groundedness catches fabrication, completeness catches omission, consistency catches unpredictability, and abstention behavior catches the model guessing when it should decline. Reporting only accuracy hides the failure that actually causes a data-integrity event.

---

## Step 3: Build the Golden Dataset

**Why.** You cannot measure any of those metrics without a reference set of inputs and known-good expected behavior. The golden dataset is the test evidence for a generative system, the analogue of the held-out test set for a classifier. It is the single most labor-intensive and most load-bearing artifact in the qualification, and an inspector will ask how it was built.

**What.** A versioned, controlled collection of representative inputs paired with the expected behavior or the reference material the output must be faithful to. For each item you typically store: the input (prompt and any source documents), the expected answer or a reference summary, the supporting source spans for groundedness scoring, and for unanswerable items, the expectation that the model abstains.

**How, step by step.**

1. **Source real inputs.** Draw inputs from the actual production population: real deviation texts, real questions users will ask, real document layouts. Synthetic-only test sets flatter the model because they lack the mess of real data. Where you cannot use real GxP content directly in a test harness, build representative items that mirror its structure and difficulty.
2. **Cover the population and the edges.** Include the common cases, but deliberately include hard and rare ones: ambiguous questions, source documents that do not contain the answer (to test abstention), conflicting sources, very long inputs, unusual formatting, and out-of-scope prompts. The edges are where generative systems fail, so a test set without edges proves little.
3. **Write expected behavior with qualified people.** For QA-style items, have SMEs write or approve the reference answer and identify the exact source spans that support it. For summaries, define what must appear (the required facts) rather than a single golden text, since many summaries are acceptable. Record the SOP for labeling and the qualifications of the labelers, exactly as you would for any GxP determination. Where judgment is involved, use more than one reviewer and record inter-rater agreement and how disagreements were resolved.
4. **Size it for statistical meaning.** A dozen examples cannot support a 98 percent threshold. Size the set so the metric estimate is meaningful and report a confidence interval, especially for rare failure types. If your hallucination tolerance is 0.5 percent, a 50-item test set cannot even observe the failure rate you are claiming; you need hundreds of representative items, weighted toward the cases that stress the model.
5. **Version and lock it.** Put the golden dataset under version control with a hash, and keep a portion strictly held out: never shown to the people tuning prompts, never used to pick the model. Prompt tuning against the full test set is the generative analogue of test-set leakage and inflates the reported score. Keep separate splits for development (tune prompts and retrieval here) and a locked evaluation set touched once to produce the qualification number.
6. **Plan for refresh.** Production inputs drift. Schedule periodic additions to the golden dataset so it keeps reflecting the live population, and treat a dataset change as a controlled change with its own record.

**Acceptance criteria for this step.** The golden dataset is versioned and hashed; it is representative of production and includes edge and unanswerable cases; expected behavior was set by qualified labelers under a documented SOP with recorded inter-rater agreement; development and locked-evaluation splits are separated; and the set is large enough to support the thresholds with a stated confidence interval.

**Roles.** Data Steward and SME labelers accountable for the reference content; data science builds the harness; QA reviews the methodology.

**Common mistake.** A tiny, synthetic, all-easy test set with no abstention cases, used both to tune prompts and to report the score. It produces a high number that means nothing in production. This is a straight data-integrity weakness wearing an AI costume: the evidence does not support the claim.

**Interview angle.** *"How do you test something that has no single correct answer?"* With a golden dataset: representative inputs paired with reference material and expected behavior set by SMEs, scored on groundedness, completeness, and consistency rather than exact match. The discipline is the same as a held-out test set for a classifier, plus deliberate edge and abstention cases, plus keeping it locked so prompt tuning does not contaminate it.

---

## Step 4: Choose How You Score, Including the LLM-as-Judge Question

**Why.** Scoring open-ended text at scale is itself hard. Human scoring is the gold standard but does not scale; automated scoring scales but introduces its own reliability question. How you score is part of the qualification and has to be justified, because if the scorer is unreliable the metrics are unreliable.

**What.** A defined scoring method per metric, with its own validation where the method is itself a model.

**How.**

- **Exact and rule-based scoring** for checkable outputs: numeric extraction, field-level match, presence of required facts via keyword or structured checks. Cheap, deterministic, defensible. Use it wherever the task allows.
- **Human expert scoring** for groundedness, completeness, and overall quality on a sample. This is the reference standard. Define the rubric, train the raters, and measure agreement. It is the evidence you fall back to when an automated scorer is questioned.
- **Automated semantic scoring,** including using a separate LLM as a judge to rate groundedness or completeness. This scales evaluation across hundreds of items, but the judge is itself a probabilistic system and cannot simply be trusted. If you use an LLM judge, you must qualify the judge: measure how well its scores agree with human expert scores on a labeled subset, report that agreement, and use the judge only where agreement is high enough to rely on. An unvalidated LLM judge produces numbers that look rigorous and are not. Treat the judge prompt and version as a controlled artifact like any other.

A practical pattern: score the full golden dataset with rule-based checks plus a qualified LLM judge for the open-ended metrics, and have human experts independently score a random sample. If the judge agrees with the humans on the sample within a defined tolerance, the automated scores on the full set are credible; if not, the judge is not fit for purpose and you fall back to human scoring or fix the judge.

**Acceptance criteria for this step.** The scoring method for each metric is defined; any model-based scorer (LLM judge) has measured agreement with human experts on a labeled sample above a stated threshold; the human-scoring rubric and rater qualifications are recorded.

**Roles.** Data science builds the scoring harness; QA and SMEs own the human-rating rubric and the agreement check.

**Common mistake.** Using an LLM to grade an LLM with no check against human judgment, then presenting the resulting percentages as objective evidence. The judge can share the same blind spots as the system under test.

**Interview angle.** *"Can you use one LLM to evaluate another?"* Yes, to scale evaluation, but only after you qualify the judge: measure its agreement with human expert scores on a labeled sample and rely on it only where agreement is high. An unvalidated judge is just a second probabilistic system you have not tested.

---

## Step 5: Prompt and Version Control

**Why.** For a system built on a vendor LLM, the prompt, the retrieval configuration, and the model version are the parts you actually control and the parts that change behavior. A changed prompt is a changed system. An undocumented prompt edit that shifts behavior is an uncontrolled change to a validated system, which is a finding. This is governed by [change control for validated systems](/articles/change-control-validated-systems) and the configuration discipline in [IT change and configuration management for GxP](/articles/it-change-and-configuration-management-gxp).

**What.** Version control over every element that determines behavior: the system prompt and any templates, the retrieval settings (which corpus, chunking, number of passages, ranking), the guardrail configuration, the model identifier and version, and the sampling parameters (temperature, top-p, maximum tokens).

**How.**

- Store prompts in version control with a change history, not pasted into application configuration where edits leave no trail. Each prompt version gets an identifier that ties to the qualification run it was tested under.
- Pin the model version explicitly where the vendor allows it. Calling a "latest" alias means the vendor can change the model under you with no notice; the qualification evidence then describes a model you are no longer running. Pin to a dated or numbered version and treat a vendor version change as a change you did not initiate.
- Record sampling parameters as part of the configuration. Temperature changes the consistency profile, so a temperature changed after qualification invalidates the consistency evidence.
- Capture, with each GxP-relevant output, the model version, prompt version, and retrieval configuration that produced it, so a future investigator can reconstruct what the system was when it generated a given record. This is the reproducibility analogue of a retained record.
- Treat a vendor base-model change like any other change: hold deployment or flag it, re-run the locked golden dataset, and confirm the metrics still meet spec before continuing. Put the vendor's model-change behavior into the [supplier assessment](/articles/software-supplier-assessment-csa).

**Acceptance criteria for this step.** Prompts, retrieval config, guardrails, model version, and sampling parameters are all under version control; the model version is pinned; each qualification result references the exact configuration version it was produced under; and GxP outputs are traceable to the configuration that generated them.

**Roles.** ML engineering owns the version-control mechanics; QA confirms the change-control linkage; System Owner owns the change decisions.

**Common mistake.** "We just tweak the prompt when it misbehaves." Live prompt edits with no version trail mean the qualified system and the running system are different, and no one can prove what produced a given output.

**Interview angle.** *"What in an LLM system do you put under change control?"* The prompt, the retrieval configuration, the guardrails, the pinned model version, and the sampling parameters, because those are what determine behavior. A prompt change is a system change and needs the same governance as any other.

---

## Step 6: Guardrails as Validated Controls

**Why.** Because the model is probabilistic and the worst failure is unflagged fabrication, you do not rely on the model alone. You wrap it in deterministic controls that you can validate the traditional way, and those controls carry the safety burden. This is the same logic as the engineered interlock around a process-control model in [validating AI-enabled GxP systems](/articles/validating-ai-gxp-systems): a deterministic control bounds a probabilistic component.

**What.** Layered constraints around the model:

- **Retrieval grounding.** Require the model to answer only from retrieved source passages, and present those passages to the user alongside the answer so the source is checkable. Grounding turns a free-floating generative answer into one anchored to controlled content, which both reduces hallucination and makes review possible. This is the single most effective guardrail for QA and summarization use cases.
- **Output constraints.** Where the output should be structured, force it into a schema and validate it: allowed values, required fields, numeric ranges, format. A structured-output validator is deterministic and catches a malformed or out-of-range generation before it reaches a record.
- **Citation enforcement.** Require every factual claim to carry a citation to a source passage, and reject or flag answers with uncited claims. This operationalizes groundedness at runtime, not just at qualification time.
- **Abstention and uncertainty handling.** Configure the system to return "the source does not contain this" rather than guess, and route low-confidence or uncovered queries to a human.
- **Input and content filtering.** Block out-of-scope prompts, prompt-injection attempts embedded in source documents, and inputs outside the qualified domain. A retrieval system that ingests untrusted documents can be steered by instructions hidden in those documents, which is a real attack surface; see [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control).
- **Human-in-the-loop gate.** For any output that becomes or drives a GxP record, a qualified human reviews and owns it. This is the backstop the entire design rests on.

**How.** Specify each guardrail as a requirement, implement it as deterministic code where possible, and test it with conventional scripted test cases: feed inputs designed to trip it and confirm it does. The guardrail tests are the part of the qualification that looks like classic CSV, and they are some of your strongest evidence because they are deterministic and repeatable. Test the negative cases hard: a prompt-injection string in a source document, an extraction that should fail schema validation, a question with no answer in the corpus.

**Acceptance criteria for this step.** Each guardrail is specified as a requirement and verified with scripted test cases including negative and adversarial inputs; outputs are grounded in and traceable to retrieved sources; structured outputs are schema-validated; and a human review gate exists for any GxP-relevant output.

**Roles.** ML engineering implements; CSV/validation lead owns the guardrail test protocols; QA approves.

**Common mistake.** Trying to "prompt away" hallucination by telling the model to be accurate, with no retrieval grounding, no citation enforcement, and no schema validation. Instructions in a prompt are not a control; a deterministic validator is.

**Interview angle.** *"How do you reduce the risk of an LLM hallucinating in a GxP system?"* Not by trusting the model, but by constraining it: ground answers in retrieved controlled sources and show them, enforce citations, validate structured output against a schema, configure abstention, and keep a human review gate. The deterministic guardrails are validatable controls; the model is the probabilistic component they bound.

---

## Step 7: Monitoring in Production

**Why.** A generative system can degrade with no change you made: input drift, a vendor model update, a corpus that grew stale. The validated state includes evidence that it still works, and for an LLM there is an extra trigger, the silent base-model change, that a traditional periodic review would never check. This is the generative version of the [periodic review every validated system needs](/articles/validation-master-plan-and-periodic-review).

**What.** Continuous and periodic monitoring covering both the model's behavior and the vendor's stability.

**How.**

- **Periodic re-evaluation on the golden dataset.** On a defined cadence, and after any prompt, retrieval, or model-version change, re-run the locked golden dataset and confirm the metrics still meet spec. This is the direct evidence the system still performs.
- **Online groundedness and citation checks.** Run the runtime grounding and citation enforcement on live traffic and track the rate of uncited or ungrounded outputs as a continuous signal. A rising rate is an early warning.
- **Human override and edit rate.** Track how often reviewers correct or reject the model's output. A rising override rate is a strong, cheap leading indicator that performance has slipped, and it usually shows up before the scheduled re-evaluation catches it.
- **Abstention and refusal rate.** A sudden change in how often the model declines can signal a model change or an input-distribution shift.
- **Input drift.** Monitor the profile of incoming questions and documents against what the system was qualified on. New topics, new document types, or longer inputs are signals to re-evaluate before performance visibly breaks.
- **Vendor model-version watch.** Track the model version in use and the vendor's release notices. A version change triggers re-evaluation, not a wait-and-see.

Define in advance what happens when a monitor trips: who is notified, whether the system is paused or routed to fuller human review, and how the event is investigated. A monitoring plan with no defined response is decoration. Build all of this in from day one; a generative system with no monitoring is not in a validated state regardless of how it scored at release, because you have no evidence it still works. The monitoring records are themselves GxP records and must be retained and reviewable.

**Acceptance criteria for this step.** A monitoring plan is live from day one with defined triggers (cadence, override-rate threshold, input drift, vendor version change), defined measures, and a defined response when a trigger fires; re-evaluation on the locked golden dataset runs on cadence and after any configuration change.

**Roles.** System Owner and data science run monitoring; QA reviews the monitoring records and the response to trips.

**Common mistake.** Deploy and forget: a model qualified once at release, calling a "latest" model alias, with no override-rate tracking and no re-evaluation. Months later the vendor has changed the model twice, the override rate has climbed, and the validated state is an assertion with no evidence behind it.

**Interview angle.** *"A GenAI assistant has been live for nine months. How do you know it still works?"* Monitoring shows it: periodic re-evaluation on the locked golden dataset, continuous override-rate and groundedness tracking, input-drift monitoring, and a watch on the vendor's model version. The pinned version and the override rate are the two I would check first, because a silent vendor change is the failure mode unique to LLMs.

---

## A Worked Evaluation Example

To make the method concrete, here is a complete evaluation of one use case, end to end.

**Use case and intended use.** A retrieval-QA assistant answers manufacturing staff questions about product specifications, drawing only from the controlled specification documents. Intended-use sentence: "The assistant answers specification questions from the controlled spec corpus and shows the source; the staff member uses the answer as a reference and the controlled document remains the record of truth; the answer does not by itself authorize any disposition." Risk pattern: retrieval QA, moderate-to-high because a wrong answer could mislead, mitigated by the answer being a reference and not the record.

**Acceptance criteria (set in URS before testing).** Groundedness >= 0.98, hallucination rate <= 0.5 percent, correct abstention on unanswerable questions >= 0.95, completeness >= 0.95, consistency across 5 runs >= 0.95, numeric exact-match >= 0.98.

**Golden dataset.** 400 questions built with two qualified SMEs: 280 answerable from the corpus (with source spans recorded), 80 unanswerable (answer should be abstention), 40 adversarial (out-of-scope, or with an instruction injected into a source document). Inter-rater agreement on reference answers was measured and disagreements resolved by a third reviewer. The set was hashed and split: 120 for prompt and retrieval tuning, 280 locked for the qualification run.

**Scoring.** Numeric values scored by exact match; groundedness and completeness scored by an LLM judge whose agreement with human SME scores on a 60-item sample was 0.93, above the 0.90 threshold set for relying on it; a 60-item human re-score confirmed the judge on the locked run.

**Configuration under test.** Model pinned to a dated version, temperature 0.1, retrieval of top 5 passages, system prompt v4 (in version control), citation enforcement on, schema not applicable (free-text answers with required citations), abstention enabled.

**Results on the locked 280.**

| Metric | Threshold | Result | Verdict |
|---|---|---|---|
| Groundedness | >= 0.98 | 0.991 | Pass |
| Hallucination rate | <= 0.5 percent | 0.4 percent (1 of 280) | Pass |
| Correct abstention | >= 0.95 | 0.96 | Pass |
| Completeness | >= 0.95 | 0.93 | Fail |
| Consistency (5 runs) | >= 0.95 | 0.97 | Pass |
| Numeric exact match | >= 0.98 | 1.00 | Pass |

**Disposition.** The system failed completeness: on multi-part specifications it sometimes returned one limit and omitted a second. That is the dangerous failure for this use case, an incomplete answer that reads as complete. The team did not deploy. They changed the prompt to require all matching specification clauses and increased retrieval to top 8 passages, re-tuned on the development split, then re-ran the locked set. Completeness rose to 0.97 and the other metrics held, so the system was approved with the new prompt version recorded as the qualified configuration. Monitoring went live: weekly override-rate tracking, monthly re-evaluation on the golden set, continuous citation enforcement, and a model-version watch. The single hallucination case was added to the golden dataset as a permanent regression check.

The lesson the example carries: the failure that nearly shipped was not a fabrication that loud testing would catch, it was a quiet omission that only a completeness metric and a real golden dataset surfaced. That is why generative qualification needs more than an accuracy number.

---

## Roles and Responsibilities

Generative qualification fails at the seams, the same as any AI work, because no single function owns it end to end. Name owners explicitly.

| Activity | Accountable | Contributes |
|---|---|---|
| Intended-use statement and risk pattern | Process / System Owner | QA, data science |
| Acceptance criteria and metric thresholds | System Owner | QA, SMEs, data science |
| Golden dataset content and labeling | Data Steward / SME labelers | Data science, QA |
| Golden dataset harness and splits | Data science / ML engineering | QA |
| Scoring method and LLM-judge qualification | Data science | QA, SMEs |
| Prompt, retrieval, and version control | ML engineering | System Owner, QA |
| Guardrail specification and testing | CSV / validation lead | ML engineering, QA |
| Qualification approval | Quality Assurance | System Owner |
| Production monitoring | System Owner + data science | QA on records |
| Human review in operation | Trained operational reviewers | QA on procedure |
| Final release decision | Quality Assurance | All |

The recurring failure is treating the golden dataset and the prompt as pure engineering artifacts that QA reviews at the end. The labeling SOP, the held-out discipline, the metric thresholds, and the change governance all need quality involvement while the system is being built. See [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) for the broader accountability model.

---

## Common Mistakes and Inspection-Finding Patterns

Each maps to a real category of finding against computerized systems and data integrity, framed generically.

- **Single accuracy number.** Reporting one "accuracy" figure that hides hallucination and incompleteness. The fix is the metric set: groundedness, hallucination rate, completeness, consistency, abstention.
- **Golden dataset too small or synthetic.** A test set that cannot support the claimed threshold, has no edge or abstention cases, and is all synthetic. The reported number does not transfer to production.
- **Prompt tuned against the test set.** The generative analogue of test-set leakage. Tuning prompts on the same items used to report the score inflates the result. The fix is separate development and locked-evaluation splits.
- **Unvalidated LLM judge.** Using an LLM to grade outputs with no measured agreement against human experts, then presenting the scores as objective.
- **No prompt or version control.** Live prompt edits with no trail and a "latest" model alias, so the qualified system and the running system differ and outputs cannot be reconstructed.
- **No guardrails.** Relying on the prompt to prevent hallucination instead of retrieval grounding, citation enforcement, schema validation, and a human gate.
- **Deploy and forget.** No monitoring, no re-evaluation, no override-rate tracking, no model-version watch, so a silent vendor change degrades the system unnoticed.
- **Rubber-stamp review.** A defined human gate that reviewers approve without reading, revealed by a near-100 percent acceptance rate. The same automation-bias risk as any AI review; see [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).
- **Hidden GenAI.** A vendor feature or embedded assistant quietly generating content that becomes part of a record, never assessed as a generative system at all. Inventory where generative AI actually touches GxP processes.
- **Output integrity ignored.** Treating model output as informal when it becomes part of a GxP record, so it escapes Part 11 and ALCOA+ controls that still fully apply.

---

## Interview Questions and How to Answer Them

Short, concrete answers win.

**"How do you qualify something that gives a different answer every time?"** You qualify the behavior across repeated runs, not a single output. Set criteria on properties of the output (groundedness, completeness, consistency across N runs) measured on a locked golden dataset, and constrain the system with deterministic guardrails so the dangerous failures are caught regardless of run-to-run variation.

**"What is the worst failure mode of an LLM in GxP, and how do you handle it?"** Confident fabrication, a fluent answer that is not supported by any source and throws no error. I measure it directly as hallucination rate against a golden dataset, and I control it at runtime with retrieval grounding, citation enforcement, and a human review gate. It is a data-integrity event if it reaches a record.

**"What is in your golden dataset?"** Representative real inputs paired with SME-set expected behavior and source spans, deliberately including hard cases, unanswerable questions to test abstention, and adversarial or injection inputs. It is sized to support the thresholds with a confidence interval, versioned and hashed, and split so prompt tuning never touches the locked evaluation portion.

**"Can you use one LLM to grade another?"** To scale evaluation, yes, but only after qualifying the judge: measure its agreement with human expert scores on a labeled sample and rely on it only where agreement clears a stated threshold. Otherwise it is a second untested probabilistic system producing numbers that look rigorous.

**"You are using a vendor LLM you cannot inspect or version fully. How do you keep it validated?"** Treat the prompt, retrieval setup, guardrails, and output handling as the artifact I control and put them under change control. Pin the model version, watch the vendor's release notices, and re-run the locked golden dataset on a cadence and after any version change. A silent vendor model swap is the failure mode unique to LLMs, so the pinned version and the monitoring around it are central.

**"How is qualifying a GenAI assistant different from validating the deviation database it sits next to?"** The database is deterministic; I prove a fixed input-output behavior once and verify the configuration has not changed. The assistant is probabilistic with an unbounded output and a fabrication failure mode, so I prove a performance distribution on a golden dataset, govern the prompt and model version as change, wrap it in deterministic guardrails, and monitor for drift and silent vendor changes. The database's record still has to satisfy Part 11 and ALCOA+, and so does anything the assistant writes into a record.

---

## The Honest Assessment

Qualifying generative AI for GxP is being worked out by industry and regulators in parallel, on top of frameworks that were written for deterministic software. There is no single recipe, and anyone who tells you there is has not tried to defend one in an inspection.

What holds up is the discipline that does not depend on a recipe: state the intended use and what owns the output; set measurable acceptance criteria, more than one metric, before you test; build a real, locked, representative golden dataset and resist tuning against it; score honestly, validating any model you use as a scorer; put the prompt and model version under change control; bound the probabilistic model with deterministic guardrails you can validate the old way; and monitor from day one, including for the silent vendor model change that is unique to this class of system.

A deployment that documents what was qualified, what metrics it was held to, and what remains uncertain is more defensible than one that claims a generative system is "validated" with a single accuracy number and no golden dataset behind it. The same principle runs through every part of [validating AI-enabled GxP systems](/articles/validating-ai-gxp-systems): well-managed, openly stated uncertainty survives questioning, and confident compliance claims that come apart under scrutiny do not.
