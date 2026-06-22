---
title: "AI in Pharmacovigilance: Validating the Machines That Read Safety Data"
description: "How to deploy and validate AI and machine learning in drug safety, case intake, MedDRA coding, literature screening, and signal detection, with an inspection-defensible approach to a regulatory framework that is still forming."
pubDate: 2026-06-22
tags: ["AI", "pharmacovigilance", "machine-learning", "signal-detection", "ICSR", "MedDRA", "GVP", "validation"]
pillar: "ai-automation"
tier: "Advanced"
---

Pharmacovigilance is drowning in volume, and that is the honest reason AI arrived in drug safety before the rules did. Case intake grows faster than headcount, literature screening is relentless, and signal detection runs across databases with millions of reports. So safety teams are reaching for machine learning to triage cases, suggest MedDRA codes, read the literature, and find patterns in the noise. The tooling works well enough that it is already in production in many organizations. The validation framework for it is not finished.

This article is about the second half of that sentence: how to put AI to work in pharmacovigilance and still be able to defend it when an inspector pulls a case and asks how the machine reached its conclusion. It assumes you already understand the safety domain. If you do not, read the [pharmacovigilance and safety data integrity](/articles/pharmacovigilance-safety-data-integrity) article first, because everything here sits on top of the individual case safety report, the reporting clocks, the signal workflow, and the validated safety database described there. It also assumes the general AI-validation foundation in [validating AI-enabled GxP systems](/articles/validating-ai-gxp-systems); this article applies that foundation to the specific failure modes and use cases of drug safety, rather than repeating it. The lifecycle view of model-specific deliverables lives in the [GxP ML model lifecycle](/articles/gxp-ml-model-lifecycle) article. After reading this you should be able to scope an AI-in-PV deployment, validate it, monitor it, and answer the questions an inspector or interviewer will ask.

---

## Why Pharmacovigilance Is a Special Case for AI

Most discussions of AI in GxP treat manufacturing and quality systems. Pharmacovigilance is different enough to deserve its own treatment, for four reasons.

**The data is unstructured and human.** A safety case starts as free text: a phone call, an email, a literature abstract, a social-media post written by someone describing a side effect at midnight. The core AI task in PV is natural-language work, reading messy human language and turning it into structured, coded data. That is exactly where modern language models are strongest and also exactly where they fail in ways that matter: a confident misreading of a negation ("the patient did not experience seizures") is a safety event in the wrong direction.

**The output drives a regulatory clock.** A misjudged validity check or seriousness call does not just produce a wrong record, it can start or fail to start the 15-day expedited reporting clock. The cost of a model error in PV is a late or missed regulatory report, which is a recognized inspection finding in its own right. Few other AI applications carry that direct a line from a model output to a reportable compliance failure.

**The rare event is the whole point.** Pharmacovigilance exists to catch the signal nobody expected, which means the events that matter most are by definition the ones with the fewest examples in the training data. A model optimized for average accuracy will be best at the common, already-known reactions and worst at the rare, novel ones, which is precisely backwards from what safety needs. Class imbalance is not a nuisance here, it is the central modeling problem.

**Incremental learning is genuinely tempting.** Signal detection and case classification are areas where regulators have openly acknowledged that continuously learning models could add value, because the data keeps arriving and the patterns keep shifting. That makes PV one of the few GxP domains where a model that keeps learning is a real design option rather than a thing to avoid, which raises the validation difficulty rather than lowering it.

Put together, these mean you cannot simply reuse a manufacturing AI validation template. The data is harder, the failure cost is more direct, the imbalance is structural, and the change-control problem is sharper.

---

## Where AI Actually Shows Up in the Safety Workflow

Before validating anything, name precisely where the AI sits and what it decides. The use cases differ enough in risk that lumping them together is the first mistake. Here are the common ones, ordered roughly from lowest to highest consequence.

**Case intake and triage.** A model reads inbound emails, portal submissions, and call-center notes and proposes whether a message contains a possible adverse event, whether the four validity elements are present, and what the seriousness might be. At its best this routes a real case to a human processor faster. The danger is a false negative that silently drops a valid case before any human sees it.

**MedDRA coding suggestion.** A model reads the verbatim and proposes a Preferred Term. This is a classification task against a large, hierarchical, twice-yearly-updated dictionary. Done well it speeds coding and improves consistency, which directly helps signal detection. Done badly it introduces a systematic coding bias that fragments or distorts the very statistics that depend on coding consistency.

**Literature screening.** A model scans scientific literature to flag articles that may describe a reportable case or a safety signal. The volume makes manual-only screening expensive, and the task is a reasonable fit for text classification. The failure mode is a missed article that contained a reportable case, which becomes a late report.

**Narrative generation and translation.** A generative model drafts the case narrative or translates a foreign-language source. Useful for throughput, but the output is exactly where confabulation (a confident, fluent, wrong statement) is most dangerous, because a fabricated clinical detail in a narrative is a data-integrity failure that can mislead a downstream reviewer.

**Duplicate detection.** A model identifies whether an incoming case is a duplicate of one already in the database. Important because duplicates inflate counts and distort disproportionality math, but a wrong merge can also destroy a distinct case. Both errors corrupt the signal substrate.

**Signal detection augmentation.** A model adds to classical disproportionality (PRR, ROR, EBGM, IC) by reading case clusters, surfacing patterns across free text, or prioritizing which statistical flags deserve human attention. This is where incremental learning is most discussed and where the explainability burden is heaviest, because a recommendation here can change what gets escalated to a regulator.

The discipline that follows from this list: write one sentence per deployed model that names the model output, the action it triggers, and the human or system accountable for the consequence. A filled-in example for intake triage: "The model classifies each inbound message as 'possible adverse event' or 'not relevant'; a 'possible' message is queued for a case processor within one business day; a trained processor confirms validity and owns the decision; every 'not relevant' message is retained and a defined sample is human-reviewed." If you cannot write that sentence cleanly, the intended use is not yet defined, and you cannot size the validation.

---

## The Regulatory Picture, and Where It Is Still Draft

There is no single, finalized regulation that tells you how to validate an AI model used in pharmacovigilance. What exists is a set of documents written for adjacent problems plus a fast-moving body of draft and reflection material specific to AI. The honest framing for an inspection, and for an interview, is that you are reasoning from established principles and being explicit about where the AI-specific guidance is still forming.

| Reference | Status | What it gives you | What it does not settle |
|---|---|---|---|
| 21 CFR Part 11; EU GMP Annex 11 | In force | Audit trails, access control, electronic record and signature integrity for the safety system | Anything specific to probabilistic or learning models |
| GAMP 5 Second Edition (ISPE, 2022) | Published industry framework | Risk-based computerized system validation; material on machine learning and novel technologies; critical thinking | A prescriptive, step-by-step AI validation protocol |
| ICH Q9(R1) Quality Risk Management (2023 revision) | In force (ICH) | The basis for sizing AI validation effort to risk | AI mechanics; it is a general risk-management standard |
| ICH E2B(R3), E2D, GVP Modules VI and IX | In force | The case-management, expedited-reporting, and signal-management rules the AI must serve | They predate AI and assume human judgment at each step |
| FDA draft guidance, "Considerations for the Use of Artificial Intelligence To Support Regulatory Decision-Making for Drug and Biological Products" (issued January 6, 2025) | Draft, comment period closed April 7, 2025 | A risk-based credibility framework keyed to a defined context of use; explicitly covers the post-marketing phase | It is draft and may change; it is a credibility-assessment framework, not a system-validation protocol |
| EMA, "Reflection paper on the use of artificial intelligence in the lifecycle of medicines" (adopted September 2024) | Reflection paper (non-binding) | A human-centric, risk-based view; explicitly discusses AI in pharmacovigilance and signal detection | A reflection paper states the regulator's current thinking, not enforceable requirements |
| FDA final guidance, "Marketing Submission Recommendations for a Predetermined Change Control Plan for Artificial Intelligence-Enabled Device Software Functions" (December 3, 2024) | Final, but for devices | A workable model for governing planned model changes in advance | It is a premarket device document; it does not govern a PV-operations model |
| EU AI Act, Regulation (EU) 2024/1689 | In force, phased application | A horizontal legal regime that may classify some PV AI by risk tier | Application is phased and the practical reach into PV operations is still being worked out |

A few notes on the documents that are still moving, because presenting any of them as settled law would be both wrong and a legal-safety problem.

The **FDA January 2025 draft guidance** is the most directly relevant new document, and it is a draft. Its central idea is useful and transfers well: assess the credibility of an AI model for a specific context of use, and scale the rigor of that assessment to how much the model's output influences a regulatory decision and how serious the consequence of being wrong is. It explicitly names the post-marketing phase as in scope. Treat it as a strong indication of regulatory thinking and a sound framework to adopt voluntarily, not as a binding rule. Say so in your documentation, and check whether it has been finalized or revised before you rely on it, because the AI guidance area is changing quickly.

The **EMA reflection paper** (adopted September 2024) is exactly what its name says, a reflection paper, which means it communicates the agency's current thinking rather than imposing requirements. It is worth reading because it speaks directly to pharmacovigilance and even acknowledges that incremental learning could enhance classification, severity scoring, and signal detection. It also stresses a human-centric approach. Cite it as current regulatory thinking, not as law.

The **EU AI Act, Regulation (EU) 2024/1689**, is in force but applies in phases. Prohibited practices applied from February 2, 2025; general-purpose AI model obligations from August 2, 2025; the bulk of the high-risk obligations for Annex III use cases from August 2, 2026; and high-risk systems embedded in already-regulated products (Annex I) from August 2, 2027. Whether and how a given pharmacovigilance model is classified, and which obligations attach, is a determination to make with qualified legal and regulatory advice for your specific deployment and jurisdiction, not an assumption to bake into a procedure. Verify the current application dates and the classification rules against the regulation text before relying on them, because the phasing detail and accompanying standards are still settling.

The **device PCCP guidance** (final, December 2024) is a device document and does not govern a quality-operations or PV model. Its value is conceptual: it shows a mature way to describe intended model changes and their testing in advance. That concept carries into PV cleanly even though the legal pathway does not.

The gap that matters: none of these tells you exactly how much evidence proves a coding-suggestion model is good enough, how you keep a continuously learning signal model in a validated state, or how much explanation a signal recommendation requires. The industry is operating ahead of the finalized guidance, and inspectors know it. That is a reason to document your reasoning carefully, not a reason to wait.

> A regulator's risk-based credibility framework, paraphrased rather than quoted, asks you to define the question the model answers, the context in which it answers it, and the consequence of a wrong answer, then to gather evidence in proportion to that consequence. That is a sound discipline to adopt regardless of which document is finally binding.

---

## Sizing the Risk: Three Patterns, Three Validation Postures

The single most useful move is to classify each PV AI use case by how its output reaches a regulatory consequence, then size the validation to that. This is an ICH Q9(R1) risk-management decision and should be documented as one. See [quality risk management](/articles/quality-risk-management) for the underlying method.

**Pattern A, human-confirmed assistance.** The model proposes; a qualified person reviews every output before it has any effect. MedDRA coding suggestion with mandatory human confirmation, narrative drafting that a safety physician edits and signs, or literature flags that a human screens all fit here. This is the lowest-risk pattern because a human stands between every model output and any consequence. The validation shows the suggestions are good enough to help rather than mislead, and that the human-review step is defined, recorded, and meaningful. Most PV deployments should start here.

**Pattern B, model-gated screening.** The model decides what a human sees. Intake triage that drops "not relevant" messages, or literature screening that discards articles, sits here. The risk is the false negative: the case or article the model silently set aside. A human reviews what the model passes through, but does not see everything the model rejected, so the validation has to bound the false-negative rate directly and the monitoring has to keep watching it, because a model that quietly stops surfacing a class of cases will not announce itself.

**Pattern C, autonomous or near-autonomous action.** The model's output drives a regulatory-relevant action with no per-item human confirmation: auto-coding that feeds submissions without review, or a signal model whose output directly sets escalation. This is the highest-risk pattern and the hardest to defend. It demands the most evidence, an engineered fallback to human handling, and, for anything touching the reporting clock or a signal decision, a strong argument for why a human is not in the loop. In practice, the regulators' human-centric framing makes fully autonomous regulatory action difficult to justify today; near-autonomous designs should include defined human oversight and a safe default.

For Pattern B specifically, the validation has to answer a question Pattern A never raises: what did the model throw away? You cannot prove a negative by looking only at what passed. The practical method is a periodic human re-review of a representative sample of the model's rejections, sized to detect a meaningful false-negative rate, with the result recorded against the acceptance criterion. A screening model with no rejection-sampling program is not validated, it is trusted, and trust is not evidence.

---

## Performance Specifications for Safety Tasks

PV AI is judged against performance metrics, not pass/fail functional specifications, and the choice of metric is a safety decision, not a statistical preference. The general treatment of metrics and held-out test sets is in [validating AI-enabled GxP systems](/articles/validating-ai-gxp-systems); here is what is specific to safety.

In almost every PV use case, recall (sensitivity) on the safety-relevant class is the metric that matters most, because the dangerous failure is the missed case, the missed serious classification, or the missed signal. Precision matters too, because false positives cost reviewer time and erode trust, but when you are forced to trade, safety tasks usually favor catching the true positive over avoiding the false one. You set a high recall threshold and handle the resulting false positives with human review. State that logic explicitly in the requirements, with the threshold justified against the consequence of the miss.

Confidence calibration deserves attention in PV because so many designs route by confidence. If a triage model says it is 95 percent confident a message is "not relevant," and you auto-drop high-confidence rejections, then the model's confidence has to actually mean what it says. A poorly calibrated model that is overconfident on its errors is more dangerous than a less accurate but honestly calibrated one. Test calibration, not just accuracy.

A worked example makes the trade concrete. Take an intake-triage model screening 10,000 inbound messages over a period, of which 500 genuinely contain a reportable adverse event. Suppose it flags 620 as "possible AE": 470 truly are (true positives), 150 are not (false positives), and it misses 30 real ones (false negatives).

|  | Predicted possible AE | Predicted not relevant |
|---|---|---|
| Actually contains an AE | 470 (TP) | 30 (FN) |
| Actually not relevant | 150 (FP) | 9,350 (TN) |

From this, recall = 470 / (470 + 30) = 0.94, precision = 470 / (470 + 150) = 0.76, specificity = 9,350 / (9,350 + 150) = 0.98. The 30 missed cases are the danger: each is a potential late or missed report. For a Pattern B screen, 0.94 recall means roughly six percent of real cases are being dropped before a human sees them, which is almost certainly not acceptable for a tool that gates intake. You would either raise the recall threshold (accepting more false positives and more reviewer load), keep all model rejections in a human sampling loop sized to catch the misses, or restrict the model to assistance (Pattern A) until recall is defensible. Writing these numbers down before deployment forces the conversation about which error you can least afford, and in PV that is almost always the miss.

The class-imbalance trap is acute here. If only five percent of inbound messages contain an adverse event, a lazy model that calls everything "not relevant" scores 95 percent accuracy and is completely useless. Never accept raw accuracy as evidence for a PV model. Report recall and precision on the safety-relevant class, and where positives are rare, report a confidence interval, because a point estimate from a handful of positive cases is fragile. The acceptance criteria belong in the user requirements specification, written before the model is trained or tuned, with the threshold justified against the consequence of error and the test population defined. See [user requirements and traceability](/articles/user-requirements-and-traceability) for how to anchor them. If you measure first and write the specification to match, you have fitted criteria to a result, which is rationalization, not validation.

One discipline inspectors increasingly probe: hold out a true test set the model never saw during training or tuning, keep it under version control, and ideally draw it from a time period after the training data so it mimics real deployment. Keep three splits: training, tuning, and a locked test set touched once at the end to report the number that goes in the validation report. Performance on data the model trained on is not validation evidence.

---

## Training Data Integrity for Safety Models

For supervised PV models, the training data is regulated safety data, and the same [data integrity foundations](/articles/data-integrity-foundations) and [ALCOA+ expectations](/articles/alcoa-plus-deep-dive) that govern any individual case safety report apply to the dataset the model learned from. Several points are specific to safety.

- **Source and lineage.** Was the training data drawn from validated safety records, and was it handled under controls when created? Real case data used to train a model carries its origin with it. Data pulled from the production safety database to retrain a deployed model is itself GxP data and a retraining event is a data-integrity event, not just an engineering task.
- **Representativeness across the long tail.** The training set must reflect the full range of products, sources (call center, portal, literature, partner, social media), languages, and report types the model will face, including the rare serious events that are the entire reason PV exists. A model trained mostly on common, non-serious reactions will be weakest exactly where safety needs it strongest. Document how the rare and serious classes are represented and what you did to keep them from being swamped.
- **Labeling quality and the verbatim.** Labels for safety tasks (is this a valid case, is it serious, what is the Preferred Term) are expert judgments. Record who labeled, their qualifications, the labeling procedure, and the inter-rater agreement on subjective calls, with documented resolution where labelers disagreed. A coding model can only be as consistent as the coding it learned from. And the verbatim must be preserved throughout, because it is the "Original" leg of ALCOA+ and the ground truth against which any coding model is judged.
- **Class balance handled honestly.** When the safety-relevant class is rare, document the technique used to handle imbalance (class weighting, resampling, threshold tuning) and confirm that the reported metrics were computed on a realistically distributed test set, not on an artificially balanced one that flatters the model.
- **MedDRA version pinning.** Because MedDRA changes twice a year, the dataset's MedDRA version is part of its identity. Record it, and treat a dictionary upgrade as a change that may shift the model's labels under it.
- **Version control and reproducibility.** Version the exact dataset, with a hash, so the model can be rebuilt. Reproducibility is the AI analogue of a retained record. If you cannot rebuild the model, you cannot investigate it when an inspector asks why it produced a given output.

A worked example of the training-data record for a MedDRA-coding model: the data integrity file should name the source system and extract date, the number of cases, the date range, the products and sources represented, the MedDRA version, the labeling SOP and the qualified coders, the measured inter-rater agreement and how disagreements were resolved, the verbatim-preservation method, the train/tune/test split logic, and the version hash of the frozen dataset. That package lets a future investigator reproduce the model and lets an inspector trace the chain from raw report to coded term.

---

## Model Change Control and Continuous Learning

Model updates, whether retraining, a new architecture, a threshold change, or a vendor-driven base-model swap, are system changes in the validation sense and require [change control](/articles/change-control-validated-systems). PV adds a wrinkle that few other GxP domains face head-on: regulators have openly contemplated continuously learning models for signal detection and case classification, so the question of how to govern a model that keeps learning is not hypothetical here.

A predetermined change control plan, the concept the device guidance matured and the drug AI framework echoes, is the right tool. Written and approved before deployment, it defines which model changes are anticipated and in scope, the performance boundaries that constrain them, the testing required for each class of change, and the threshold above which a change forces full revalidation rather than a confirmatory check. With it in place, routine maintenance proceeds in a controlled way instead of every retrain becoming an unplanned deviation. Without it, you choose between revalidating constantly and letting changes slip through ungoverned, and neither is defensible.

A worked change-classification table for a PV setting:

| Change type | Example | Required action |
|---|---|---|
| Routine retrain, same architecture and features, in-distribution new cases | Quarterly retrain of the triage model on accumulated production cases | Confirmatory test on the locked test set, must meet or exceed the recall and precision spec; documented record; no revalidation |
| MedDRA version upgrade affecting labels | Twice-yearly dictionary update | Impact assessment on the coding model and any thresholds; re-test affected performance under the new version; change-control record |
| Decision-threshold adjustment | Raise the triage recall threshold to drop fewer cases | Re-test affected metrics, update the spec rationale, QA approval |
| New data source or feature | Add social-media intake to the literature-and-portal model | Targeted revalidation of affected performance; data-integrity review of the new source |
| Architecture change | Replace the coding model family | Full revalidation; new performance spec if the intended use shifts |
| Vendor base-model change (API model) | Vendor updates the underlying language model | Treat as an uninitiated change: re-run the confirmatory test set and hold deployment until it passes |
| Continuous / incremental learning | A model that updates on each new labeled case | Define update bounds and a locked periodic-evaluation gate; if performance cannot be held inside defined bounds between gates, the model must not run unattended |

On continuous learning specifically: the validated state of a model that keeps learning cannot be a single point-in-time test, because the model the inspector examines is not the model that was tested. The defensible design freezes the model into a versioned state for a defined operating window, evaluates each frozen version against the spec on a locked test set before it goes live, and treats each promotion of a new learned version as a controlled change under the predetermined plan. A model that silently updates itself in production with no versioning and no gate is not in a validated state, regardless of how good it looked at release. The regulators' human-centric framing reinforces this: incremental learning is contemplated, but inside human oversight and defined bounds, not as a free-running process.

---

## Monitoring AI in Production: Drift Is the Default

A safety model degrades quietly. New products launch, reporting patterns shift, a media story changes what consumers report, language evolves, and the population the model sees moves away from the population it learned on. None of that changes the model's code, and all of it can degrade its performance. So the validated state of a PV AI includes ongoing monitoring, and the thing you are checking is performance, not configuration. This is the AI counterpart to the periodic review every validated system needs, described in the [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review) article, with the difference that you are confirming the model still performs rather than that the software has not changed.

What to monitor in a PV deployment, and how:

- **Performance on labeled production samples.** Periodically pull a representative sample of real cases, have qualified safety staff establish ground truth, and recompute recall and precision against the spec. This is the only direct evidence the model still works, and because it costs expert labeling effort it runs on a defined cadence.
- **Rejection sampling for screening models (Pattern B).** Continuously or periodically re-review a sample of what the model dropped, sized to detect a meaningful false-negative rate. This is the only way to see the misses, and missing the misses is the whole risk of a gating model in PV.
- **Override and disagreement rate.** Cheap, continuous, and a strong leading indicator. A rising rate of coders overriding the suggested Preferred Term, or processors reclassifying the model's triage, usually shows up before the formal metric review catches it.
- **Input distribution monitoring.** Track the statistical profile of incoming cases (products, sources, languages, term frequencies) against the training distribution. A drift signal tells you to investigate before performance visibly breaks. A new product launch or a new intake channel is a known trigger.
- **Calibration drift.** A model becoming systematically over- or under-confident often signals a population it was not built for, which matters most for any workflow that routes by confidence.

Build monitoring in from day one and define, in advance, what you do when it trips: who is notified, whether the model is paused or routed to fuller human review, and how the event is investigated and recorded. The monitoring evidence is itself a GxP record and should be retained and reviewable. A monitoring system with no defined response is decoration, and a model with no monitoring is not in a validated state, because you have no evidence it still works.

---

## Explainability and the Signal That Goes to a Regulator

Explainability matters in PV because a human has to be able to exercise real judgment over the model's output, and because a signal recommendation can change what a company tells a regulator. The level of explanation you need scales with the use pattern.

For Pattern A assistance, a confidence score and the few features or text spans that drove the suggestion are usually enough for a coder or physician to decide whether to accept it. For a coding suggestion, showing the verbatim phrase that mapped to the proposed Preferred Term lets the coder sanity-check the mapping in seconds. For Pattern B screening, the explanation has to support a reviewer's judgment about what the model is keeping and, through rejection sampling, what it is dropping. For signal work, where the output can influence a regulatory action, you want a per-recommendation rationale a safety physician can interrogate: the cases driving the pattern, the disproportionality numbers, the literature, so the human, not the model, owns the assessment that GVP Module IX expects to be documented.

Be honest about post-hoc explanation techniques. Feature-attribution methods that assign an importance to each input are useful aids to review and investigation, but they are approximations of the model's behavior, not a literal account of it, and two methods can disagree on the same prediction. Treat them as an aid to human judgment, document their limits, and never present an approximate attribution as a guaranteed causal explanation. An honest statement of what the explanation does and does not establish is more defensible than overclaiming, and in a domain as scrutinized as safety, overclaiming is a liability.

Generative and large-language-model components carry an extra failure mode that is especially dangerous in PV: a confident, fluent, wrong output, which in a case narrative or a translation means a fabricated or distorted clinical detail. The mitigation is not better explanation, it is constraining the task: ground generated text in the actual source document, keep the output checkable against that source, and keep a human in the loop for anything that feeds a regulated decision. Negation and uncertainty handling deserve specific testing, because "denies chest pain" and "reports chest pain" are a single word apart and a model that mishandles negation will systematically misread safety information. Never let an unconstrained generative output drive a coding, validity, seriousness, or signal decision unreviewed.

---

## Human Oversight: The Control the Regulators Keep Naming

Across the new AI material, one theme is consistent: a human-centric approach. For PV that is not a slogan, it is the control that keeps the system consistent with the principle that safety decisions require documented human judgment. The human-review step in an AI-assisted PV process must be:

- **Defined.** What does the reviewer actually do, what information do they see, and what decision do they own? A coder confirming a suggested Preferred Term, a processor confirming validity and seriousness, a physician owning a signal assessment. Vague review steps fail in inspection.
- **Documented.** The reviewer's conclusion goes into the safety record, together with the model output reviewed and, where relevant, the model version that produced it, so the case can be traced end to end.
- **Meaningful.** Reviewers are trained on the model's performance characteristics, including its known weaknesses (negation errors, weak spots on rare events, calibration limits), and apply judgment rather than rubber-stamping. Training records should reflect this. See [training program](/articles/training-program-gxp).

The hardest part to sustain is meaningfulness. A coding model that is right almost always breeds automation bias: coders start accepting suggestions without truly checking, precisely because the model is usually right, and that erodes the only control between a model error and a mis-coded case that distorts a signal. Design the workflow to keep reviewers engaged: present the model's reasoning, not just its conclusion; require a short justification when a reviewer accepts a high-confidence suggestion on a serious case; and monitor the rate at which suggestions are accepted unmodified, treating an unusually high acceptance rate as a signal to investigate, not as success. The same vigilance that drives effective [audit trail review](/articles/audit-trail-design-and-review) applies here: a control that is never exercised is not a control.

---

## Roles and Responsibilities

AI in PV fails most often at the seams between safety operations, data science, and quality, because no single role owns the whole thing. Name owners explicitly. A workable split, adapt titles to your organization:

| Activity | Accountable | Contributes |
|---|---|---|
| Intended-use statement and risk pattern (A/B/C) | PV / Safety System Owner | QA, Data Science |
| User requirements and performance spec | System Owner | Safety SMEs, QA, Data Science |
| Training-data integrity, labeling, verbatim handling | Data Steward / qualified safety labelers | Data Science, QA |
| Model development and testing | Data Science / ML Engineering | System Owner, Safety SMEs |
| Validation approach and protocols | Validation / CSV lead | QA, Data Science |
| Performance and acceptance approval | Quality Assurance | System Owner |
| Predetermined change control plan | System Owner + QA | Data Science |
| Post-deployment monitoring and rejection sampling | System Owner + Data Science | QA on review of records |
| Human review in operation (coding, triage, signal) | Trained safety reviewers | QA on procedure |
| Signal assessment and disposition | Safety physician / PV scientist | Data Science |
| Final release and regulatory reporting decisions | Quality Assurance / Regulatory | All |

The recurring failure is treating model building as a pure data-science task that QA reviews at the end. The data-integrity decisions, the labeling SOP, the held-out test discipline, the change plan, the rejection-sampling design, all need quality and safety involvement while the model is being built, not after. See [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) for the broader accountability model, and [pharmacovigilance and safety data integrity](/articles/pharmacovigilance-safety-data-integrity) for the safety-specific roles such as the QPPV.

---

## Acceptance Criteria: How You Know It Is Ready

A pile of activity is not a validated system. Before an AI tool goes live in a PV process, the file should be able to show all of the following. Use it as a release checklist.

- The intended-use statement is written, names the model output, the action it triggers, and the accountable role, and is approved by QA.
- The risk pattern (A human-confirmed, B model-gated, C autonomous) is assigned with an ICH Q9(R1)-based rationale on file, and where guidance is draft or evolving the rationale says so.
- The performance specification was written in the URS before training, with the safety-relevant metric (usually recall), its threshold, and a justification tied to the consequence of the miss.
- A locked, version-controlled test set the model never saw was used to report performance, drawn where possible from a later time period, and the reported metrics meet the spec with a confidence interval where positives are rare.
- For a Pattern B screen, a rejection-sampling program is defined and sized to detect a meaningful false-negative rate.
- The training-data integrity file is complete: source, lineage, representativeness across the long tail, labeling SOP and qualifications, inter-rater agreement, verbatim handling, MedDRA version, splits, and the dataset version hash.
- A predetermined change control plan is approved, including how MedDRA upgrades and any continuous learning are governed.
- A monitoring plan is live from day one, with triggers, what is measured, and the defined response when a trigger fires.
- The human-review step is defined, documented in the safety record, and reviewers are trained on the model's specific weaknesses.
- Generative components are constrained to grounded, checkable output, with negation and uncertainty explicitly tested.
- Traceability runs from intended use to requirements to test evidence, with rationale recorded wherever guidance was silent or only draft.

If any line cannot be evidenced from the file, the tool is not ready for release regardless of how well the model scored.

---

## How This Plays Out in an Inspection

A PV inspection that encounters AI tends to fold the AI questions into the questions it already asks about case handling and signal management. Inspectors will still pick a case and trace it end to end, but now the trace runs through the model: what did the AI propose at intake, did a human confirm it, is the model version recorded, can you show the suggestion and the human decision. Expect a predictable set: What is the intended use and what does the model decide? How was it validated, against what acceptance criteria, and were those criteria set before testing? Where did the training data come from and how is its integrity assured, including the verbatim? How do you control model changes, including MedDRA upgrades and any learning? How do you know it still performs, and what do you do when it drifts? For a screening model, how do you know it is not silently dropping cases? What is the human-review step and how do you keep it meaningful?

The theme across the broader inspection patterns, covered in [FDA inspection readiness](/articles/fda-inspection-readiness), is that investigators reward a coherent, honestly documented rationale and penalize gaps that look unmanaged. A PV AI whose file says, in effect, "here is what the model does, here is the principle we applied where the AI guidance is still draft, here is how we monitor it and sample its rejections, and here is the human control," reads as a system under control. One that claims blanket compliance under a framework that visibly does not yet exist invites deeper scrutiny.

---

## Common Mistakes and Inspection-Finding Patterns

These are the recurring failure patterns, framed generically. Each maps to a real category of finding seen against computerized systems, data integrity, and pharmacovigilance.

- **Optimizing for accuracy on imbalanced data.** Reporting a high accuracy that comes from a model calling everything "not relevant," when recall on the safety-relevant class is poor. The fix is to specify and report recall and precision on the class that matters, never raw accuracy.
- **The silent screen.** A Pattern B triage or literature model dropping cases with no rejection-sampling program, so missed cases are invisible until a late or missed report surfaces them. The fix is a sized, recorded rejection-sampling loop.
- **Test-set leakage.** Reporting performance on data the model trained or tuned on, so the headline metric is inflated. The fix is a three-way split and a locked test set touched once, ideally drawn from a later period.
- **Criteria fitted after the fact.** Writing the acceptance threshold to match the result the model happened to reach. A spec dated after the test report will not be trusted.
- **Verbatim lost to automation.** An auto-coding pipeline overwriting the reporter's original words, breaking the "Original" leg of ALCOA+ and making recoding to a later MedDRA version unreliable.
- **No model change control.** Retraining, swapping, or letting a model learn with no governance, so the validated state silently lapses. Acute for MedDRA upgrades and continuous learning.
- **Deploy and forget.** No monitoring, so there is no evidence the model still works months after a product launch shifted the input distribution.
- **Negation and uncertainty mishandled.** A language model that misreads "denies chest pain" as a positive event, systematically corrupting case content, with no specific testing for it.
- **Overclaimed explainability.** Presenting an approximate feature attribution as a literal causal explanation for a signal recommendation, which collapses under questioning.
- **Vendor "AI-validated" taken at face value.** Relying on a supplier's general claim for your specific model on your data and your products, with no site-level evidence for the trained instance. Assess the supplier as you would any [software supplier](/articles/software-supplier-assessment-csa).
- **Hidden AI.** A vendor feature quietly suggesting codes or screening literature that was never assessed as a model at all. Inventory where AI actually sits in your PV process before you assume you have none.

When an inspection produces observations, the response discipline is the same as anywhere in GxP: see [FDA 483 response strategy](/articles/fda-483-response-strategy) and [what is a CAPA](/articles/what-is-a-capa).

---

## Interview Questions and How to Answer Them

If you are interviewing for a PV-systems, drug-safety, or digital-quality role and AI comes up, these questions separate a real practitioner from someone reciting buzzwords. Short, concrete answers win.

**"What makes validating AI in pharmacovigilance harder than in manufacturing?"** The data is unstructured human text, so the core task is language work where models fail on things like negation. The output feeds a regulatory clock, so a model error becomes a late or missed report. The events that matter most are the rarest, so class imbalance is the central modeling problem, not a nuisance. And incremental learning is genuinely on the table for signal work, which sharpens the change-control problem.

**"Which framework do you apply when the AI guidance is still draft?"** GAMP 5 for the risk-based lifecycle, ICH Q9(R1) to size effort to risk, Part 11 and Annex 11 for records and signatures, and the established PV rules (E2D, E2B(R3), GVP Modules VI and IX) for what the AI has to serve. For the AI-specific layer I adopt the risk-based credibility thinking from the FDA's January 2025 draft guidance and the human-centric stance of the EMA reflection paper, and I document explicitly that these are draft or non-binding and that I am reasoning by analogy where nothing fits cleanly.

**"How do you set acceptance criteria for a safety-classification model?"** Before training, in the URS, as a performance metric tied to the consequence of error. In PV the dangerous failure is almost always the miss, so I usually prioritize recall on the safety-relevant class, justify the threshold against the cost of a missed case, and report it on a locked held-out test set the model never saw, with a confidence interval when positives are rare. I never accept raw accuracy on imbalanced data.

**"A triage model decides which inbound messages a human sees. What is your biggest worry?"** The false negatives, the real cases the model drops before anyone looks. You cannot see misses by reviewing only what passed, so I require a rejection-sampling program: a periodic human re-review of a representative sample of what the model rejected, sized to detect a meaningful false-negative rate, recorded against the spec.

**"How do you handle MedDRA upgrades for a coding model?"** As a change-controlled event, not an IT patch. The MedDRA version is part of the model's identity, so an upgrade gets an impact assessment, the affected performance is re-tested under the new version, any saved thresholds or queries are reviewed, and it all goes through change control.

**"Can you run a continuously learning model in PV?"** Conceptually yes, regulators have contemplated it for signal and classification work, but only inside defined bounds and human oversight. The defensible design freezes the model into versioned states, evaluates each version against the spec on a locked test set before it goes live, and governs each promotion as a controlled change under a predetermined plan. A model that silently updates itself in production with no versioning or gate is not validated.

**"A coding model has been live for nine months. How do you know it is still good?"** Monitoring shows it: periodic performance on labeled production samples against the spec, the override rate watched continuously as a leading indicator, and input-distribution monitoring that flags when a new product or channel shifts the data. Without that evidence the validated state is just an assertion from release day.

**"What is the danger of a generative model writing case narratives?"** Confabulation, a confident fluent statement that is wrong, which in a narrative means a fabricated clinical detail and a data-integrity failure. I constrain the task: ground the text in the source document, keep it checkable against that source, test negation and uncertainty handling specifically, and keep a human reviewing and owning anything that feeds a regulated decision.

---

## The Honest Assessment

AI in pharmacovigilance is being worked out by industry and regulators at the same time, and the AI-specific guidance is mostly draft, reflection, or borrowed from devices. Safety teams are deploying anyway, because the volume pressure is real and the tooling is genuinely useful for reading text, suggesting codes, and surfacing patterns. That is a defensible position if, and only if, the deployment is documented like a system under control rather than asserted as compliant under rules that are not finished.

The path that holds up is unglamorous. Classify each use case by how its output reaches a regulatory consequence and size the validation to that. Favor human-confirmed assistance over autonomous action, and where the model gates what a human sees, prove what it throws away. Set the safety-relevant performance criteria, usually recall, before you test, and report them on a locked test set with honest treatment of class imbalance. Keep the training data, and the verbatim, under integrity controls. Govern model change, including MedDRA upgrades and any learning, with a predetermined plan. Build monitoring and rejection sampling in from the first day. Keep a meaningful human in the loop, because the regulators keep saying so and because automation bias is the quiet way the control fails. And be explicit in the file about which guidance is settled, which is draft, and where you are reasoning by analogy, checking the current status of the fast-moving AI documents before you rely on them.

A deployment with honest documentation of both what was validated and what remains uncertain is more defensible than one that claims full compliance under a framework that does not yet exist. In a domain whose entire job is to be honest about a product's harms, applying the same honesty to the tools that read the data is not just good compliance, it is the point.
