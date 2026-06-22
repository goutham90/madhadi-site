---
title: "Inspection Readiness for AI-Enabled GxP Systems"
description: "What inspectors look for when an AI or machine learning model sits inside a regulated process, and how to assemble the inventory, validation, data-lineage, change, oversight, and vendor evidence that survives the questions."
pubDate: 2026-06-22
tags: ["AI", "inspection-readiness", "GxP", "machine-learning", "data-integrity", "validation", "audit-trail"]
pillar: "ai-automation"
tier: "Intermediate"
---

An inspection of a traditional computerized system is a fairly settled exercise: the investigator confirms the system was validated, the configuration is controlled, the audit trail works, access is restricted, and the records are intact. An inspection that walks into an AI-enabled system asks the same questions and then keeps going, into territory where the answers are less rehearsed and the documentation is often thinner. The model that drives or assists a regulated decision is a system, and the burden of showing it is under control sits with you, not the regulator.

This article is about being ready for that conversation. It assumes the model has already been built and validated; if you are still building, read [validating AI-enabled GxP systems](/articles/validating-ai-gxp-systems) and the [GxP ML model lifecycle](/articles/gxp-ml-model-lifecycle) first, because inspection readiness is mostly the harvest of work done earlier. What follows is the inspector's-eye view: what they look at, what they ask, what the file has to show, and the specific ways AI files fall apart under questioning. The general inspection mechanics, the front room, the scribe, the daily wrap-up, live in [FDA inspection readiness](/articles/fda-inspection-readiness) and [managing a live inspection](/articles/managing-a-live-inspection); this article is the AI-specific layer that sits on top of them.

A note on framing. There is no single regulation titled "AI inspection." Investigators inspect AI systems under the authorities they already hold: 21 CFR Part 11 and EU GMP Annex 11 for records, signatures, and audit trails; the predicate GMP rules in 21 CFR 210 and 211; ICH Q9(R1) for the risk basis; and the computer software assurance principles for how much evidence the system's risk justifies. The AI does not get its own rulebook. It gets held to the existing ones, and the gaps where those rules were not written for probabilistic, learning systems are exactly where you have to show your reasoning.

---

## What an Inspector Is Actually Trying to Establish

Before the document-by-document detail, it helps to know the question behind the questions. An investigator looking at an AI system is trying to establish whether you know what the model does, whether you can prove it does it, and whether you would notice if it stopped. Everything they ask maps to one of those three.

| The investigator's underlying concern | What they probe to test it |
|---|---|
| Do you know where AI sits in your GxP processes? | The inventory, and whether anything is doing classification or prediction that is not on it |
| Does the model do what you claim, and did you prove it honestly? | The intended-use statement, the performance spec, the held-out test set, the dates |
| Can you reproduce and investigate the model? | Training-data lineage, model documentation, version control |
| Is the model still the one you validated? | Change and retraining records, the predetermined change control plan |
| Would you catch it drifting before it caused harm? | Monitoring evidence, override rates, the defined response when a trigger fires |
| Is there a real human judgment in the loop? | The human-oversight records, training on the model's weaknesses, automation-bias controls |
| Are records and signatures trustworthy? | Audit trails on the model's inputs, outputs, and decisions |
| Did you assess the supplier of any model you did not build? | Vendor qualification, the trained-instance gap |

The recurring failure is treating the AI as a feature inside an application rather than as a system in its own right. An investigator who senses that the model was bolted on without the same rigor applied to a LIMS or an MES will dig until they find the seam. The whole readiness exercise is making sure there is no seam to find.

---

## The AI Inventory: You Cannot Inspect What You Cannot See

### Why it matters

You cannot put a system under control if you do not know it exists. The most damaging AI inspection finding is not a weak validation; it is a model nobody told the auditor about, surfacing mid-inspection because an operator mentioned that "the system suggests the category for us." That single sentence reframes the whole inspection, because it shows the quality system did not know its own footprint. Under 21 CFR Part 11 and Annex 11, every computerized system that creates or manages GxP records is in scope; an unassessed model that classifies deviations is an uncontrolled GxP system, full stop.

### What it is

An AI inventory is a controlled list of every place a model influences a GxP decision or record. The hard part is that AI hides. It hides inside vendor platforms as a feature that was switched on, inside a spreadsheet macro that scores or predicts, inside a "smart" search that ranks, and inside a large-language-model assistant someone integrated to draft or summarize regulated text. An inventory that lists only the three obvious data-science projects and misses the embedded vendor feature is worse than no inventory, because it signals false confidence.

### How to build one, step by step

1. Start from the GxP process map, not the technology list. For each regulated process (deviation handling, complaint intake, batch review, environmental monitoring trending, document drafting), ask whether any step is assisted by a model, a prediction, a ranking, a classification, or a generated draft.
2. Sweep the vendor platforms. For each validated application, list its AI or ML features and whether they are enabled, including ones marketed as "assistants," "copilots," "anomaly detection," or "predictive."
3. Sweep the gray IT. Spreadsheets, low-code tools, and analytics notebooks that score or predict. See [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation) and [validating scripts and low-code analytics](/articles/validating-scripts-low-code-analytics) for how these escape inventories.
4. For each entry, record the intended use, the GxP records it touches, the risk class (advisory, automated classification, process control), the validation status, and the owner.
5. Govern it like any controlled document: an owner, a review cadence, and a change trigger when a new tool is procured or a vendor enables a feature.

### Acceptance criteria

The inventory is ready when every model influencing a GxP decision appears on it with an owner and a risk class, when there is a documented procedure that catches new AI before it goes live (procurement and change control both check for it), and when a walk of any GxP process would not surface a model that is missing from the list.

### Worked example

A quality team builds its first AI inventory expecting three entries (a deviation-triage model, a complaint-classifier, and an environmental-monitoring trend tool). The process-map sweep adds four they had not counted: a document-management platform's "suggested classification" feature that was enabled by default, a spreadsheet a microbiologist built to flag out-of-trend plate counts, a chromatography review aid that ranks injections by likelihood of an integration problem, and an LLM browser plugin an analyst used to summarize investigation reports. Three of the four were doing real GxP work with no assessment. The inventory turned an invisible footprint into seven managed entries, and the LLM plugin was removed because no controlled use case justified it.

### Roles

The system or process owners populate their own entries; QA owns the inventory procedure and the review cadence; procurement and IT change management feed new tools into it. See [GxP roles and responsibilities](/articles/gxp-roles-responsibilities).

### Common inspection mistakes

- No inventory at all, so the footprint is reconstructed live, badly.
- An inventory that lists only deliberate AI projects and misses embedded vendor features.
- Hidden AI, a macro or vendor feature quietly classifying or predicting, never assessed as a model. This is the single most common AI-related gap and reads as a loss of control over the computerized-system estate.

---

## Validation and Qualification Evidence

### Why it matters

The investigator's core question, did the system do what you claim, and did you prove it before you trusted it, is answered by the validation file. For AI the answer has a specific shape, because the proof is a performance distribution on a held-out population, not a pass/fail table. 21 CFR 211.68 requires that automatic, mechanical, and electronic equipment (including computers) used in manufacturing be suitable and routinely checked; the computer software assurance approach (draft 2022, finalized 2025) says scale the evidence to risk. An AI validation that produces volume without addressing drift, explainability, and the held-out test discipline misses the point that matters at inspection.

### What the file must contain

- The intended-use statement, naming the decision the model drives, the action it triggers, and the accountable role.
- The risk classification with an ICH Q9(R1) based rationale, see [AI risk assessment for GxP](/articles/ai-risk-assessment-gxp).
- The performance specification, written before training, with metrics, thresholds, and a justification tied to the consequence of error.
- The qualification evidence (installation and operational checks of the platform) plus the performance evidence (the model meeting its spec on a locked test set).
- Traceability from intended use to requirements to test evidence, with the rationale recorded wherever guidance was silent.

### How an inspector reads it, step by step

1. They read the intended-use statement and ask the operator what the model actually does, then check the two stories match. A mismatch between the documented intended use and how the floor uses the model is a finding on its own.
2. They check the dates. If the performance specification is dated after the test report, the acceptance criteria were fitted to the result, and the headline metric stops being trustworthy.
3. They ask how the reported metric was measured, looking for a test set the model never saw in training or tuning. Performance reported on training data is not validation evidence.
4. They trace one requirement end to end to confirm the chain holds, see [user requirements and traceability](/articles/user-requirements-and-traceability).

### Acceptance criteria

The validation evidence is inspection-ready when the intended use matches the floor reality, the spec predates the test, the reported performance came from a locked held-out set, and a randomly chosen requirement can be traced to its test evidence without a gap.

### Worked example

An investigator asks how a deviation-triage model was validated. The file shows a performance spec dated three weeks before the first training run, requiring recall of at least 0.95 on critical deviations with the rationale that a missed critical event is the dangerous failure. The reported recall, 0.96, comes from a test set drawn from a quarter the training data did not cover, with a confidence interval because critical events are rare. The traceability matrix links the recall requirement to the exact test record. The investigator moves on, because the file answered the question before it was finished being asked.

### Roles

Validation or CSV lead owns the approach and protocols; data science owns the test methodology and the model evidence; QA owns the acceptance and release decision.

### Common inspection mistakes

- Acceptance criteria dated after the test report (criteria fitted after the fact).
- Performance reported on training or tuning data (test set leakage).
- Validating a process-influencing model as if it were advisory because the paperwork was lighter, with no failure-mode analysis when asked.
- A "validated" claim with no traceability, so a requirement cannot be tied to evidence.

---

## Data Lineage: Where the Training Data Came From

### Why it matters

A model is bounded by the integrity of the data it learned from. If the training data has no lineage, the model cannot be reproduced or investigated, and a model you cannot investigate is a data-integrity problem wearing an AI costume. The ALCOA+ expectations that govern any GxP record apply to training data, see [ALCOA+ in depth](/articles/alcoa-plus-deep-dive) and [data integrity foundations](/articles/data-integrity-foundations). Data pulled from production to retrain a live model is itself GxP data, so retraining is a data-integrity event, not just an engineering task.

### What the lineage file must show

- Source and provenance: which system the training data came from, the extract date, and whether it was created under GxP controls.
- Representativeness: the products, sites, instruments, and date range covered, and a statement of known gaps (a model trained on one product line will underperform on another).
- Labeling record: the labeling SOP, the qualified labelers, the inter-rater agreement for subjective judgments, and how disagreements were resolved.
- The train, validation, and test split method, and how the test set was held out.
- The version hash of the frozen dataset, so the exact data is reproducible.

### How to assemble it, step by step

1. For each model, write a training-data record that an investigator could use to rebuild the model from scratch.
2. Pin the dataset version (a hash, a snapshot, a controlled extract) so "the data the model trained on" is an exact, retrievable object.
3. Document the labeling chain as a GxP determination, because the labels are the ground truth the model inherited.
4. Tag any production-sourced retraining data with the same lineage controls as the original, see [data lifecycle and metadata](/articles/data-lifecycle-and-metadata).

### Acceptance criteria

Lineage is ready when a competent reviewer could reconstruct the exact model from the records, when every label's origin and qualification is documented, and when production data used for retraining carries full ALCOA+ controls.

### Worked example

For a complaint-classification model, the data-integrity file names the source complaint system and the extract date, the record count and date range, the products and sites represented (and a noted gap for a newly launched product), the labeling SOP and two qualified reviewers, the measured inter-rater agreement of 0.88 with the disagreement-resolution rule, the time-based train and test split, and the SHA-256 hash of the frozen dataset. An investigator who asks "show me the data this model learned from" gets a reproducible package, not a verbal account.

### Roles

A data steward or the SME labelers own data integrity and labeling; data science owns the splits and versioning; QA reviews the record.

### Common inspection mistakes

- Training data with no integrity record: no lineage, no labeling SOP, no version, so the model cannot be reproduced.
- Retraining on production data with no data-integrity controls applied to that data.
- Labels generated by unqualified or undocumented labelers, with no inter-rater agreement for subjective calls.

---

## Model Documentation: Explaining a Model to an Inspector

### Why it matters

An investigator does not need to understand the mathematics, but they do need to be satisfied that you do, and that the model's behavior, limits, and known weaknesses are documented. A team that cannot explain its own model in plain terms reads as a team that does not control it. This is also where the explainability question lands: a reviewer cannot exercise judgment over a conclusion they cannot interrogate.

### What the model documentation must contain

- A plain-language description of what the model does, the inputs it uses, and the output it produces.
- The model type and the reason it was chosen for the use case.
- The performance characteristics, including the known weaknesses and the populations where it is less reliable.
- The explainability approach appropriate to the risk: a confidence score and top features for advisory use, a per-decision rationale for automated action, and a deterministic interlock for process control.
- The honest limits of any post-hoc explanation method used, because feature-attribution approximates the model and two methods can disagree.

### How to explain a model in the room, step by step

1. Lead with the intended use in one sentence: what the model decides, what action it triggers, who owns the consequence.
2. State the inputs and the output in business terms, not tensors.
3. State the performance honestly, including the failure modes ("it under-detects events from the new product line, which is why those route to full human review").
4. Show how a single decision can be interrogated: the features that drove it, similar past cases, or a checkable rationale.
5. Be precise about what the explanation does and does not establish. An honest "this attribution shows which inputs the model weighted, it is not a causal proof" is more defensible than overclaiming.

### Acceptance criteria

Model documentation is ready when a non-specialist on the team can explain the model to an investigator in plain language, when the known weaknesses are written down, and when the explainability method on file matches the model's risk class and states its own limits.

### Worked example

An investigator asks the system owner to "explain how the model decides." The owner says the model reads the free-text deviation description and assigns a preliminary criticality tier; the tier sets the investigation clock; a QA reviewer confirms or overrides within one business day. She shows a single case where the model flagged "critical," lists the phrases that drove the score, notes that the model is weaker on a recently added site and that those cases are sampled at a higher rate, and states plainly that the feature highlights are an aid to the reviewer, not a causal explanation. The investigator sees a controlled, understood system.

### Roles

Data science authors the technical description; the system owner owns the plain-language and intended-use account; QA confirms the documentation exists and matches operation.

### Common inspection mistakes

- No one in the room can explain the model without reciting jargon.
- Overclaimed explainability: an approximate attribution presented as a literal causal account, which collapses under a follow-up question.
- Known weaknesses absent from the documentation, so the model looks better on paper than it behaves.

---

## Change and Retraining Records

### Why it matters

The validated state is a claim about a specific model. If the model changed and the change was not governed, the validated state lapsed silently and the system is running unvalidated. Model updates, retraining, threshold changes, architecture swaps, are changes in the validation sense and require [change control for validated systems](/articles/change-control-validated-systems). The predetermined change control plan, the concept FDA introduced for AI-enabled devices, transfers cleanly to quality and manufacturing AI: it defines in advance which changes are anticipated and what testing each requires.

### What the change file must show

- A predetermined change control plan, approved before deployment, classifying anticipated changes and the testing each demands.
- A change record for every model update, retraining included, with the trigger, the confirmatory test result, and the approval.
- The line above which a change forces full revalidation rather than a confirmatory check.
- For vendor-driven base-model changes (an API LLM the vendor updates), the record showing the change was treated as one you did not initiate and the confirmatory test that gated continued use.

### How to keep it inspection-ready, step by step

1. Maintain the predetermined change control plan as a living, approved document and map every actual change to a class within it.
2. For each retrain, record the trigger, the data version, the confirmatory test against the locked test set, and the approval, before deployment.
3. Treat a vendor model-version change as a change event: re-run the confirmatory set and hold deployment until it passes.
4. Keep the chain auditable so an investigator can see which model version produced any given historical decision.

### Acceptance criteria

Change records are ready when every model in production traces to an approved change record, when no retrain reached production without a confirmatory test against the spec, and when the predetermined plan's revalidation threshold is written and was honored.

### Worked example, change-classification table

| Change | Example | Record the inspector expects |
|---|---|---|
| Routine retrain, same architecture, in-distribution data | Quarterly retrain on accumulated records | Confirmatory test meeting or exceeding the original spec; dataset version; approval; no revalidation |
| Threshold adjustment | Cutoff moved to raise recall | Re-test of affected metrics, updated rationale, QA approval |
| New feature or data source | New input attribute added | Targeted revalidation; data-integrity review of the new source |
| Architecture change | Model family replaced | Full revalidation; new performance spec if intended use shifted |
| Vendor base-model change | Vendor updates the API LLM | Confirmatory set re-run, deployment held until pass; supplier-assessment note |

### Roles

The system owner and QA own the predetermined change control plan; data science executes and documents the changes; QA approves each one.

### Common inspection mistakes

- No model change control: retraining or model swaps with no governance, so the validated state silently lapses.
- A retrain that reached production with no confirmatory test on file.
- A vendor model update absorbed silently, with no record that the deployed model changed.

---

## Human-Oversight Evidence

### Why it matters

The GxP principle that quality decisions require documented human judgment does not bend for AI. Human review is the control standing between a model error and a quality event, and an investigator will test whether it is real or theatre. The risk specific to AI is automation bias: a model that is usually right trains reviewers to approve without truly reviewing, hollowing out the only control that matters.

### What the oversight evidence must show

- A defined review step: what the reviewer sees, what they decide, and what they record.
- The reviewer's conclusion in a GxP record, together with the model output reviewed and the model version that produced it.
- Reviewer training that covers the model's known weaknesses, not just how to click approve, see [training program](/articles/training-program-gxp).
- A monitored override rate, with an unusually high acceptance rate treated as a signal to investigate.

### How to make oversight defensible, step by step

1. Write the review step so it is unambiguous about the information shown and the decision made; vague review steps fail in inspection.
2. Capture the review in the record with the model version, so a historical decision can be tied to the model that produced it.
3. Train reviewers on what the model gets wrong, and keep that in their training records.
4. Design against automation bias: present the model's reasoning, require a short justification on high-confidence agreements, and monitor the accept-without-change rate. The same vigilance that drives effective [audit trail review](/articles/audit-trail-design-and-review) applies.

### Acceptance criteria

Oversight is ready when the review step is defined and recorded, when reviewers are trained on the model's weaknesses, and when the override rate is monitored with a defined response to an anomalous reading.

### Worked example

An investigator asks how the team keeps human review meaningful when the model is right most of the time. The owner shows the workflow: the reviewer sees the model's tier and the phrases that drove it, must enter a one-line confirmation, and the system tracks the override rate. When the rate dropped to near zero for one reviewer, the QA monitoring report flagged it, the reviewer's sampling was audited, and a refresher was assigned. The investigator sees a control that is actively maintained, not a checkbox.

### Roles

Trained operational reviewers perform the review; the system owner designs the workflow and monitors the override rate; QA owns the procedure and the response to anomalies.

### Common inspection mistakes

- Rubber-stamp review revealed by a near-100 percent acceptance rate; the control exists only on paper.
- No record of which model version produced the reviewed output.
- Reviewer training that omits the model's weaknesses, so reviewers cannot apply real judgment.

---

## Audit Trails for AI Decisions

### Why it matters

21 CFR Part 11 requires audit trails for the electronic records subject to the rule, and Annex 11 applies audit trails on a risk-assessed basis (the expectation is to consider the need for an audit trail based on a risk assessment); a model's inputs, outputs, version, and the human decision on them are GxP records. An AI system whose decisions are not captured in a reviewable, attributable, time-stamped trail fails the same Part 11 expectation any system would, with the added wrinkle that the model version is part of the record's meaning.

### What the audit trail must capture

- The input the model received, the output it produced, and the model version that produced it.
- The human review action: who, what they decided, and when, see [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).
- Any override and its reason.
- Changes to the model's configuration, thresholds, or deployed version.

### How to verify it, step by step

1. Confirm the trail is on (Part 11 audit-trail expectations apply), attributable, and time-stamped to a controlled clock.
2. Confirm the model version is part of the decision record, so a past decision can be reproduced against the right model.
3. Confirm the audit trail is reviewed on a risk-based cadence, see [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).
4. Confirm the trail itself cannot be edited without leaving its own record.

### Acceptance criteria

The audit trail is ready when any historical model decision can be reconstructed (input, output, version, reviewer, timestamp), when the trail is secure and reviewed, and when configuration and version changes are captured.

### Worked example

An investigator picks a deviation from four months ago and asks to see how it was classified. The audit trail returns the input text, the model output and confidence, the model version (v2.3, retired since), the reviewer who confirmed the tier, the timestamp, and the fact that no override was entered. Because the version is in the record, the team can show exactly which model produced that historical decision even though the live model has since been retrained.

### Roles

IT or the system owner configures and secures the trail; QA owns the audit-trail review program.

### Common inspection mistakes

- The model version is not captured, so a past decision cannot be tied to the model that made it.
- Audit trail off, or not reviewed, for the AI component while it is on for the rest of the system.
- Threshold or configuration changes not captured in the trail.

---

## Vendor and Supplier Evidence

### Why it matters

When you did not build the model, the supplier did part of the work, but the regulatory accountability stays with you. A vendor's general claim of "validated AI" almost never covers your specific model trained on your data for your intended use. The configured, trained instance is yours to validate and to defend. Assess the supplier the way you would any [software supplier](/articles/software-supplier-assessment-csa) and any [vendor qualification](/articles/supplier-vendor-qualification).

### What the vendor file must show

- A supplier assessment proportionate to risk, covering the vendor's quality system and development practices.
- A clear boundary statement: what the vendor validated (the platform, the infrastructure) versus what you validated (the trained model on your data for your use).
- The vendor's model-change behavior, especially for API-delivered models the vendor can update beneath you, captured in your change-control plan.
- Where the vendor's evidence is used in lieu of your own testing, the documented justification for relying on it.

### How to close the trained-instance gap, step by step

1. Separate the platform from the model. The vendor may have validated the ML infrastructure; the model you trained inside it is, in effect, bespoke and yours to validate.
2. For an API model you cannot inspect or fully version, treat your prompt, retrieval setup, guardrails, and output handling as the artifact you own and validate; pin the model version where the vendor allows; record the vendor's change behavior in your supplier assessment.
3. Do not accept a "validated AI" marketing claim as site-level evidence for your trained instance.

### Acceptance criteria

Vendor evidence is ready when the supplier is assessed to risk, when the platform-versus-trained-instance boundary is written and the site owns the trained instance, and when the vendor's model-change behavior is captured in your change control.

### Worked example

A vendor's documentation states its anomaly-detection platform is "fully validated." The investigator asks what that covers. The team shows its supplier assessment, a boundary statement saying the vendor validated the platform while the site validated the model trained on its own environmental-monitoring data for its specific intended use, and a change-control entry committing to re-run the confirmatory test set whenever the vendor releases a new model version. The "validated" claim is correctly scoped, and the site's own evidence carries the GxP weight.

### Roles

Procurement and QA run the supplier assessment; the system owner owns the trained-instance validation; QA records the reliance justification.

### Common inspection mistakes

- A vendor "validated AI" claim taken at face value with no site-level evidence for the trained instance.
- No record of the vendor's model-change behavior, so a vendor-driven change goes ungoverned.
- The boundary between vendor-validated and site-validated never written down, leaving the accountability ambiguous.

---

## A Readiness Checklist

Use this as a pre-inspection self-check. Each line should be evidenced from the file, not asserted from memory. If a line cannot be shown, it is a gap to close before an investigator finds it.

- [ ] AI inventory exists, lists every model touching a GxP decision with owner and risk class, and a procedure catches new AI before go-live.
- [ ] No hidden AI: a walk of each GxP process surfaces nothing missing from the inventory.
- [ ] Intended-use statement names the decision, the action, and the accountable role, and matches how the floor uses the model.
- [ ] Risk class is assigned with an ICH Q9(R1) based rationale.
- [ ] Performance spec was written before training, with metrics, thresholds, and a justification tied to the consequence of error.
- [ ] Reported performance came from a locked, version-controlled test set the model never saw; the dates prove the spec predates the test.
- [ ] Training-data lineage is complete and the exact model is reproducible from the record.
- [ ] Labeling chain is documented with qualified labelers and inter-rater agreement.
- [ ] Predetermined change control plan is approved; every model in production traces to a change record; no retrain reached production without a confirmatory test.
- [ ] Vendor model changes are treated as change events with a confirmatory gate.
- [ ] Monitoring is live with triggers, what is measured, and a defined response.
- [ ] Human review is defined, recorded with the model version, and reviewers are trained on the model's weaknesses; override rate is monitored.
- [ ] Audit trail captures input, output, model version, reviewer, and timestamp, and is reviewed on a risk-based cadence.
- [ ] Supplier assessed to risk; platform-versus-trained-instance boundary written; site owns the trained instance.
- [ ] Traceability runs from intended use to requirements to evidence, with rationale recorded wherever guidance was silent.
- [ ] The team can explain the model in plain language, including its known weaknesses.

---

## Common Findings, Consolidated

These are the AI-specific patterns most likely to become a finding, drawn from the recurring failure modes across computerized systems and data integrity. The broader catalog of inspection patterns lives in [FDA warning letter patterns](/articles/fda-warning-letters-patterns).

| Finding pattern | What it looks like | The fix |
|---|---|---|
| Hidden AI | A vendor feature or macro classifying or predicting, never assessed | A real inventory built from the process map; procurement and change control gates |
| Test set leakage | Performance reported on training or tuning data | Three-way split, locked test set touched once |
| Criteria fitted after the fact | Spec dated after the test report | Performance spec in the URS, approved before training |
| No model change control | Retraining or swaps with no governance | Predetermined change control plan; confirmatory test per retrain |
| Deploy and forget | No monitoring, no evidence the model still works | Monitoring live from day one, with a defined response |
| Training data with no lineage | Model cannot be reproduced or investigated | A reproducible training-data integrity record |
| Rubber-stamp review | Near-100 percent acceptance rate | Workflow designed against automation bias; override-rate monitoring |
| Overclaimed explainability | Approximate attribution sold as causal proof | Honest statement of what the explanation establishes |
| Vendor claim taken at face value | Reliance on "validated AI" with no site evidence | Boundary statement; site validates the trained instance |
| Wrong risk class | A process-influencing model validated as advisory | Correct risk class; failure-mode analysis and interlock for process control |

---

## Interview Questions and How to Answer Them

If you are interviewing for a digital quality, CSV, or data-integrity role and the conversation turns to AI in inspections, these separate a real practitioner from someone reciting a framework. Concrete, honest answers win.

**"How would you prepare an AI-enabled system for an inspection?"** I treat the model as a system, not a feature. I make sure it is on the AI inventory with an owner and risk class, the intended use matches the floor, the performance spec predates the test and the metric came from a locked held-out set, the training data is reproducible, every model change has a record, monitoring is live, human review is real and recorded with the model version, the audit trail captures input, output, version, and reviewer, and the supplier is assessed with the trained-instance boundary written down. Then I rehearse explaining the model in plain language.

**"What is the most common AI inspection finding you would worry about?"** Hidden AI, a vendor feature or a spreadsheet quietly doing classification that was never assessed as a model. It is damaging because it shows the quality system did not know its own footprint. The defense is an inventory built from the process map, plus procurement and change-control gates that catch new AI before it goes live.

**"An inspector asks how you know a model that has been live for nine months is still validated. What do you say?"** I show monitoring evidence: performance on periodic labeled production samples against the spec, the override rate watched continuously as a leading indicator, and input-drift monitoring. Without that, the validated state is an assertion from release day, not a demonstrated fact.

**"How do you explain a model you cannot fully interpret to an investigator?"** I lead with the intended use in one sentence, state inputs and output in plain terms, state the performance honestly including the known weaknesses, show how one decision can be interrogated through its top features or a checkable rationale, and I am precise that a feature attribution is an aid to judgment, not a causal proof. Overclaiming explainability is what collapses under questioning.

**"A vendor says its AI is fully validated. Is that enough?"** No. The vendor likely validated the platform, but the model trained on my data for my intended use is the trained instance, and that is mine to validate and defend. I write the boundary down, keep my own performance evidence, and capture the vendor's model-change behavior in my change-control plan so a vendor update does not slip through.

**"What does the audit trail need to capture for an AI decision that a normal system does not?"** The model version. The input, output, reviewer, and timestamp are standard, but for AI the version is part of the record's meaning, because the model that made a decision four months ago may have been retrained since. Without the version captured, you cannot reproduce a historical decision against the right model.

**"How do you keep human review from becoming a rubber stamp?"** I design against automation bias: present the model's reasoning not just its conclusion, require a short justification on high-confidence agreements, and monitor the accept-without-change rate, treating an anomalously high rate as a signal to investigate. A control that is never exercised is not a control.

---

## The Honest Assessment

Inspection readiness for AI is mostly the disciplined harvest of work done during validation, surfaced in a form an investigator can follow in an afternoon. The systems that survive scrutiny are not the ones with the most documentation; they are the ones whose file tells a coherent, honestly dated story: here is where AI sits in our processes, here is what each model decides, here is how we proved it and how we know it still works, here is the human control, and here is where we reasoned by analogy because the guidance was silent.

The framework for AI in regulated environments is still being written, and investigators know it. That is not a reason to hide the uncertainty; it is a reason to document the reasoning so it survives questioning. A system whose file openly states what was validated, what remains uncertain, and how the gaps are managed reads as a system under control. One that claims blanket compliance under rules that visibly were not written for learning systems invites the deeper look you least want. For where this fits in the wider preparation, return to [FDA inspection readiness](/articles/fda-inspection-readiness) and [managing a live inspection](/articles/managing-a-live-inspection).
