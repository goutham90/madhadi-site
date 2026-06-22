---
title: "Data Readiness for AI in Manufacturing and Quality Operations"
description: "How to get manufacturing and quality data fit for training and running AI models: data quality dimensions, labeling and ground truth, contextualization, ALCOA+ for training data, governance, lineage, train/validation/test splitting, leakage, and bias, with a worked readiness assessment."
pubDate: 2026-06-22
tags: ["AI", "data-integrity", "data-governance", "machine-learning", "ALCOA-plus", "data-quality", "GxP"]
pillar: "ai-automation"
tier: "Intermediate"
---

Most AI projects in regulated manufacturing and quality operations fail before the first model is trained. They fail at the data. The model is only as good as the records it learns from, and the records in a typical pharma, biotech, or device environment were created to run a process and satisfy GMP, not to feed an algorithm. They live in a historian, a manufacturing execution system, a laboratory information management system, a quality management system, and a few hundred spreadsheets, in formats that do not agree with each other, with gaps, with timestamps in different time zones, and with the context that makes a number meaningful held in someone's head rather than in a field.

Data readiness is the work of turning that into something a model can learn from and that you can defend in an inspection. This article walks through what readiness means, how to assess it, and how to fix the gaps, with the data-integrity controls that make the result usable as a GxP record rather than a science-fair exhibit. It assumes you already understand the basics of [data integrity foundations](/articles/data-integrity-foundations) and [ALCOA+](/articles/alcoa-plus-deep-dive); the AI-specific work sits on top of those. If you are validating the system the data feeds, read [validating AI-enabled GxP systems](/articles/validating-ai-gxp-systems) alongside this.

---

## Why Data Readiness Is a Regulated Activity, Not Just Engineering

It is tempting to treat data preparation as a technical chore that happens before the real work. In a GxP context that framing is a trap. The data you train on becomes part of the evidence that the model is fit for its intended use, and a model that drives or influences a quality decision is a computerized system whose validation depends on that evidence.

**Why it matters (regulation and risk).** Training data used to build a model that affects product quality or patient safety is GxP data. It carries the [ALCOA+](/articles/alcoa-plus-deep-dive) expectations that apply to any record under 21 CFR Part 11 and EU GMP Annex 11. If you cannot show where the training data came from, that it was accurate, that it was complete, and that the version used to build the model is preserved, you cannot reproduce the model, you cannot investigate it when it misbehaves, and you cannot defend it. The risk is concrete: a model trained on biased or incomplete data will make confident, systematic errors, and in a regulated workflow those errors propagate into release decisions, deviation triage, or process control before anyone notices.

> "Data integrity refers to the completeness, consistency, and accuracy of data. Complete, consistent, and accurate data should be attributable, legible, contemporaneously recorded, original or a true copy, and accurate (ALCOA)."
> - FDA, Data Integrity and Compliance With Drug CGMP, Questions and Answers (Guidance for Industry, December 2018)

That definition was written for ordinary records, but it applies without modification to the records you assemble into a training set. The phrase that should worry you is "complete, consistent, and accurate." Manufacturing and quality data is frequently none of the three until you do deliberate work to make it so.

**Common inspection-finding pattern.** The recurring failure is treating the training dataset as a throwaway extract. A team pulls ten years of batch records into a CSV, cleans it on a laptop, trains a model, and keeps none of it. When an inspector or an investigator asks how the model was built, there is no lineage, no version, no record of what was removed and why. That is a data-integrity finding wearing an AI costume, and it is entirely avoidable.

---

## The Data Quality Dimensions That Decide Model Fitness

Before any modeling, you assess the data against a set of quality dimensions. These are not abstract. Each one maps to a way a model can fail, and each one is something an inspector can ask you to evidence.

| Dimension | Question it answers | How a model fails when it is weak |
|---|---|---|
| Completeness | Are records and fields present, or are there gaps and missing values? | Model learns from a biased subset, or imputation introduces artifacts |
| Accuracy | Do the values reflect reality, free of measurement and transcription error? | Model learns the error, not the signal |
| Consistency | Do the same things mean the same thing across systems, units, and time? | Model treats "OOS" and "out of spec" as different categories |
| Timeliness / currency | Is the data recent enough to represent current process behavior? | Model trained on a retired process predicts a world that no longer exists |
| Uniqueness | Are there duplicate records inflating some patterns? | Model over-weights whatever was duplicated |
| Validity | Do values fall within allowed ranges and formats? | Out-of-range junk corrupts learned distributions |
| Representativeness | Does the data cover the population the model will face in production? | Model is confident on common cases, wrong on rare ones |
| Traceability / lineage | Can you trace every value back to its source and transformations? | Model cannot be reproduced or investigated |

**How to assess each (step by step).** Run a profiling pass over the candidate dataset before deciding anything. For a tabular dataset:

1. Compute, per column, the percent missing, the count of distinct values, the min/max/mean for numerics, and the top categories for text and categoricals.
2. Flag every column more than a chosen percent missing (set the threshold against how load-bearing the field is, not a fixed number).
3. Cross-check units and formats. A column that holds both "25" and "25 C" and "298 K" is three encodings of one quantity and will poison a model.
4. Range-check numerics against physically plausible bounds and against the process specification, not against the data's own min and max, because the data may already contain the errors.
5. Check timestamps for time-zone consistency and for the impossible (events out of order, future dates). See [time stamps and system clock control](/articles/time-stamps-and-system-clock-control) for why this is its own discipline.
6. De-duplicate on a defined key and record how many duplicates you removed and on what basis.

**Acceptance criteria.** Write them before profiling, tied to the use case. For example: no load-bearing feature more than a set percent missing after remediation; all numeric features unit-normalized to a single declared unit; zero out-of-order timestamps; duplicate rate below a defined threshold; and a documented representativeness check showing the target population is covered. "The data looks fine" is not an acceptance criterion.

**Worked example.** A team profiling three years of bioreactor batch data for a yield-prediction model finds that dissolved-oxygen readings are 4 percent missing overall, but 60 percent missing for one of three production lines because that line's sensor logged to a different tag that was never mapped into the extract. Profiling caught a representativeness hole that a casual look would have missed: a model trained on this set would silently exclude one line. The fix is to map the missing tag and re-extract, not to impute, because imputing 60 percent of a line's readings would manufacture data.

**Roles.** Data engineering runs the profiling. The process or system owner judges plausibility and representativeness, because they know the process. QA reviews the acceptance criteria and the disposition of what was removed.

**Interview angle.** "How do you assess whether a dataset is good enough to train a model?" A strong answer names the dimensions, says you profile against them before modeling, sets acceptance criteria tied to the use case in advance, and stresses that you range-check against the process spec rather than against the data's own extremes, because the data may already contain the errors you are trying to catch.

---

## Where the Data Actually Lives: Historian, MES, LIMS, and QMS

In manufacturing and quality you are almost never assembling data from one clean table. You are stitching together systems that were never designed to be joined, each with its own quirks. Knowing how each behaves is half of readiness.

**Process historian.** The historian (the time-series store behind your [process historian](/articles/process-historian-data-integrity) and [MES, EBR, SCADA](/articles/mes-ebr-scada-data-integrity) layers) holds high-frequency tag data: temperatures, pressures, flow, pH, dissolved oxygen, sampled every second or few seconds. The traps are specific. Historians often compress data on storage (interpolated or swinging-door compression), so a value you read back is not always a value that was actually recorded; you may be reading a reconstruction. Tag names drift over time and across sites, so the same physical measurement has three names. And the historian stores the value but rarely the context that makes it interpretable, such as which batch phase was active. Readiness work: resolve tag names to a single canonical dictionary, understand the compression so you know what "raw" means, and align the time series to batch and phase boundaries.

**MES and electronic batch records.** The MES holds the structured execution record: which material, which step, which operator, which equipment, parametrized by recipe (see [ISA-88 batch control](/articles/isa-88-batch-control-recipes)). This is where you get the context the historian lacks, the batch and phase that lets you slice the time series meaningfully. The trap is that MES data is event-structured and the historian is sample-structured, and joining them correctly on time is fiddly: phase transitions, holds, and manual interventions all have to line up.

**LIMS.** The [LIMS](/articles/lims-implementation-and-validation) holds analytical results: assays, potency, purity, environmental monitoring, stability. The traps are result qualifiers and units. A result of "< 0.1" is a censored value, not the number 0.1, and a model that treats it as 0.1 learns a falsehood. Units and methods change over the life of a product, so a "potency" column may mix two assay methods that are not directly comparable. And out-of-specification results may be flagged, retested, and superseded; you need to know which value is the reportable one (the [OOS investigation process](/articles/oos-investigation-process) determines that, and the data must reflect the conclusion, not the first reading).

**QMS.** The quality management system holds deviations, CAPAs, complaints, change controls, mostly as free text with some structured categories. This is the richest source for text-classification models and the messiest. The free-text fields carry the meaning; the structured category fields are often inconsistent because different analysts categorized differently over the years. That inconsistency is exactly the labeling problem the next section addresses.

**How to bring them together (step by step).**

1. Build a canonical entity model: what is a batch, what is a lot, what is an equipment train, and how does each system identify them. The join keys are rarely identical across systems.
2. Resolve the keys. The historian's equipment tag, the MES's equipment ID, and the LIMS sample's equipment reference must map to one identity.
3. Align on time, using the MES phase structure to give the historian time series meaning.
4. Carry units and qualifiers through every join. Never silently coerce "< 0.1" or drop a unit.
5. Record every transformation so the assembled dataset has end-to-end [data lineage and metadata](/articles/data-lifecycle-and-metadata).

**Common inspection-finding pattern.** Joining historian and MES data on time with a naive nearest-timestamp match, getting the phase boundaries slightly wrong, and attributing readings to the wrong batch phase. The model then learns a phantom relationship. The defense is a documented, validated join logic, not an ad-hoc script.

**Interview angle.** "You need to combine historian, MES, and LIMS data for a model. What goes wrong?" The answer that lands: the systems use different identities and different time models, the historian may be compressed, LIMS results carry qualifiers and changing methods, and the QMS categories are inconsistent. So you build a canonical entity model, resolve keys deliberately, align on the MES phase structure, and preserve units and qualifiers through every join, all under lineage.

---

## Contextualization: The Difference Between a Number and a Feature

A raw value from a historian is a number. A feature a model can learn from is that number plus the context that makes it meaningful: which batch, which phase, which product, which equipment, what the setpoint was, where the process was in its cycle. Contextualization is the work of attaching that context. It is the highest-value and most underestimated part of data readiness.

**Why it matters.** A temperature of 37 degrees means nothing on its own. The same 37 degrees is normal during one phase and an excursion during another. A model fed the bare number learns noise; a model fed "temperature 37, phase = production, setpoint = 37, minute 412 of 480" learns process behavior. Without contextualization you are asking the model to rediscover the process structure from scratch, which it usually cannot do from limited data.

**How to do it (step by step).**

1. Anchor every historian sample to its batch and phase using the MES execution record.
2. Attach the recipe context: setpoint, allowed range, and the step's purpose.
3. Engineer relative features where they are more meaningful than absolutes: deviation from setpoint, rate of change, time within phase, cumulative dose or exposure.
4. Attach static context that does not change within a batch: product, scale, equipment train, raw-material lots.
5. Keep the engineered features defined in a documented feature specification so the same logic runs identically at training time and at inference time.

**Acceptance criteria.** Every feature has a written definition, a source, and a transformation that is reproducible. The feature logic used to train the model is the exact logic used in production. A feature that is computed one way for training and another way at inference is the most common source of a model that tests well and fails live.

**Worked example.** For a model predicting final product purity, the raw historian gives absolute temperatures and flows. Contextualization produces features like "minutes the temperature spent more than 2 degrees above setpoint during the hold phase" and "maximum rate of pH change during pH adjustment." These relative, phase-aware features carry the process meaning that absolute readings do not, and they let a modest model outperform a complex one fed raw tags.

**Roles.** Process subject-matter experts define what context matters; they know which deviations are meaningful. Data engineering implements the feature logic. QA confirms the feature definitions are documented and version-controlled.

**Interview angle.** "What is feature engineering in a manufacturing context, and why does it matter?" Say: it is attaching process context (batch, phase, setpoint, time-in-phase) to raw sensor values and computing relative features like deviation-from-setpoint, because the bare number is meaningless without context, and stress that the same feature logic must run at training and inference or the model fails in production.

---

## Labeling and Ground Truth

Supervised models learn from labeled examples. The label is the answer the model is trying to predict: the true category of a deviation, the true root cause, whether a batch passed, whether a unit is defective. Ground truth is the set of labels you trust enough to teach from. Where labels come from and how good they are sets the ceiling on model quality, and it is a quality determination, not a clerical one.

**Why it matters (regulation and risk).** A label assigned by a person is a GxP judgment if it concerns a regulated outcome. The qualifications of the labeler, the procedure they followed, and how disagreements were resolved are all part of the data-integrity story. A model trained on careless labels will reproduce the carelessness with mechanical consistency. If two reviewers disagree on whether a deviation is critical and the labels are inconsistent, the model cannot learn a consistent rule, because there is none in the data.

**Where ground truth comes from.**

- Existing structured records, such as the deviation criticality already assigned in the QMS. Cheap, but only as good as the historical categorization, which is often inconsistent.
- Purpose-built expert labeling, where qualified subject-matter experts label a curated set under a defined procedure. Expensive, but controllable.
- Objective downstream outcomes, such as a batch's actual disposition or a stability result. The strongest ground truth when available, because it is a fact rather than a judgment.

**How to build a labeling program (step by step).**

1. Write a labeling SOP that defines each category precisely, with examples and edge cases. Ambiguous definitions produce inconsistent labels.
2. Qualify the labelers: who is competent to make this judgment, and is it recorded? See [training program](/articles/training-program-gxp).
3. Have a portion of records labeled independently by two or more labelers and measure inter-rater agreement. Low agreement means the task itself is ill-defined, and no model will fix that.
4. Define how disagreements are resolved (adjudication by a senior reviewer) and record the resolution.
5. Version the label set and treat it as a controlled record.

**Acceptance criteria.** A documented labeling SOP exists. Labeler qualifications are on file. Inter-rater agreement is measured and meets a pre-set threshold appropriate to the task's difficulty. Disagreement resolution is recorded. The labeled set is versioned.

**Worked example.** A team labeling 2,000 historical deviations into criticality tiers double-labels 200 of them with two QA reviewers and finds agreement of only 71 percent. Investigation shows the "major" and "critical" definitions overlap in the SOP. They rewrite the definitions with worked examples, re-label, and agreement rises to 92 percent. The lesson: poor model performance that looks like an algorithm problem was actually a label-definition problem, caught only because they measured agreement.

**Common inspection-finding pattern.** No labeling procedure, no record of who labeled or their qualifications, and no agreement measurement, so the ground truth is unauditable. An inspector cannot tell whether the labels reflect a defensible judgment or one analyst's habit.

**Interview angle.** "How do you create ground truth for a quality-classification model?" Strong answer: a written labeling SOP with precise category definitions, qualified labelers, double-labeling a subset to measure inter-rater agreement, adjudication of disagreements, and versioning the label set, because the labels are GxP judgments and set the ceiling on model quality.

---

## ALCOA+ for Training Data

The ALCOA+ principles were written for the records a process generates, but they translate directly to the dataset you assemble for training. Here is the translation, attribute by attribute, with what each demands of a training set.

| ALCOA+ attribute | What it means for a training dataset |
|---|---|
| Attributable | Each record traces to its source system, and labels trace to the labeler who assigned them |
| Legible | The data and its transformations are intelligible and documented, not buried in an undocumented script |
| Contemporaneous | The provenance of when source data was recorded is preserved; you do not back-fill records to fit |
| Original | The source records are preserved; the training extract is a documented true copy, not the only copy |
| Accurate | Values reflect reality, errors are removed with recorded rationale, qualifiers are honored |
| Complete | No silent dropping of inconvenient records; exclusions are documented with reasons |
| Consistent | Units, formats, and categories are harmonized across sources |
| Enduring | The exact dataset version is retained for the life of the model plus retention requirements |
| Available | The dataset and its lineage can be retrieved for investigation or inspection |

**Why it matters.** The two attributes teams most often violate are Complete and Original. Complete fails when someone quietly drops the records that do not fit the model's assumptions, which is data manipulation even when well-intentioned; every exclusion must be justified and recorded. Original fails when the cleaned extract becomes the only copy and the source is gone, so the data can never be re-derived. These map to the same [static and dynamic records, true copies](/articles/static-dynamic-records-true-copies) principles that govern any GxP record.

**How to satisfy ALCOA+ for a training set (step by step).**

1. Keep the source data in its governed system; never let the extract become the system of record.
2. Capture the extract query, parameters, and date, so the extract is reproducible from the source.
3. Record every cleaning and transformation step in an ordered, re-runnable form (a script or pipeline under version control), not as manual edits in a spreadsheet.
4. Document every exclusion with a reason. "Removed 14 batches with corrupted sensor logs, see log entry" is defensible; silently dropping them is not.
5. Freeze and version the final dataset, with a hash, and retain it.

**Acceptance criteria.** Given the dataset version and the pipeline, an independent person can re-derive the dataset from the source systems and arrive at the same result. Every excluded record has a recorded reason. The dataset version is retained under the applicable record-retention policy.

**Worked example.** A reviewer asks why the model never flags a particular failure mode. Because the team kept the extract query, the versioned pipeline, and an exclusion log, they re-derive the dataset and find that batches exhibiting that failure had corrupted historian logs and were excluded, so the model never saw the mode. That is a finding the team can act on (fix the logs, re-include). Had they kept none of this, the gap would be invisible and unfixable.

**Interview angle.** "How does ALCOA+ apply to AI training data?" Map the attributes: attributable to source and labeler, original means keep the source and treat the extract as a true copy, complete means document every exclusion rather than silently dropping records, and enduring means version and retain the exact dataset so the model can be reproduced and investigated.

---

## Governance and Lineage

Readiness is not a one-time cleanup; it is a governed, repeatable capability. The governance layer is what lets you do this again next quarter without rediscovering everything, and lineage is what lets you answer "where did this number come from" at any point.

**Why it matters.** A model is retrained over its life. Each retrain pulls new data, and without governance each pull is an unrepeatable artisanal exercise with its own undocumented decisions. Lineage matters because when a model misbehaves, the first question is whether the data changed, and you can only answer that if you can trace each feature back through every transformation to its source. This is the AI-specific extension of your broader [data governance framework](/articles/data-governance-framework) and [data lifecycle and metadata](/articles/data-lifecycle-and-metadata) practice.

**What to put in place (step by step).**

1. Assign data ownership for each source feeding the model: who is accountable for that data's quality. See [data governance roles](/articles/data-governance-roles-and-careers).
2. Define the readiness pipeline as code, version-controlled, so the same logic runs every time and changes are tracked.
3. Capture lineage end to end: source system, extract parameters, each transformation, each exclusion, the feature definitions, and the final dataset version. Tooling can automate much of this; the requirement is that it exists and is reviewable.
4. Put the readiness pipeline itself under [change control](/articles/change-control-validated-systems), because a change to how data is prepared can change model behavior as surely as a code change.
5. Define data-quality monitoring on the production data feeding inference, so you detect when incoming data drifts away from what the model was trained on.

**Acceptance criteria.** Every feature in the model can be traced back to a source through a documented chain. The readiness pipeline is version-controlled and change-controlled. Each source has a named owner. Production data quality is monitored against the training distribution.

**Common inspection-finding pattern.** A model in production with no lineage, so when an investigator asks how a specific prediction's inputs were derived, no one can answer. The model becomes a black box not because of the algorithm but because the data plumbing was never documented.

**Interview angle.** "What does data governance for AI look like in practice?" Named owners per source, the readiness pipeline as version-controlled and change-controlled code, end-to-end lineage from source to feature to dataset version, and monitoring of production data quality against the training distribution.

---

## Splitting Train, Validation, and Test (and Avoiding Leakage)

Once data is ready, how you split it decides whether your performance numbers mean anything. This is where many otherwise careful teams quietly invalidate their own results.

**Why it matters.** A model's reported performance is only honest if measured on data the model never saw during training or tuning. Three splits are standard: training data the model learns from, validation/tuning data used to pick hyperparameters and thresholds, and a locked test set touched once at the end to report the number that goes in the validation report. If the test set leaks into training, the reported performance is fiction and the model will underperform in production. This is the same discipline described in [validating AI-enabled GxP systems](/articles/validating-ai-gxp-systems); here we focus on the data-readiness mechanics of getting the split right.

**Leakage: the failure to design out.** Leakage is any way information from the test set, or from the future, sneaks into training. The common forms in manufacturing and quality data:

- **Random row splitting of grouped data.** If a single batch produces many historian rows and you split rows at random, rows from the same batch land in both training and test. The model effectively sees the test batches during training. Split by batch (group), never by row.
- **Temporal leakage.** Training on data from after the test period, so the model "knows the future." Real deployment only ever has past data, so the test set should come from a time period after the training data. Split by time for any model that will run forward in time.
- **Target leakage in features.** Including a feature that encodes the answer, often something only known after the outcome. A "final disposition reason" field used to predict disposition is the answer in disguise. Audit every feature for whether it would actually be available at prediction time.
- **Preprocessing leakage.** Fitting a scaler, an imputation rule, or a feature-selection step on the full dataset before splitting, so test-set statistics inform the transformation. Fit all preprocessing on training data only, then apply to validation and test.

**How to split (step by step).**

1. Identify the grouping unit (usually batch or lot) and the time structure.
2. Choose the split strategy: group-based to prevent batch bleed, and time-based if the model runs forward in time. Often both: hold out the most recent batches as the test set.
3. Lock the test set and put it under version control; touch it once, at the end.
4. Fit every preprocessing transformation on training data only.
5. Audit each feature for availability at prediction time, removing any that encode the outcome.

**Acceptance criteria.** The test set is grouped and time-appropriate, locked, version-controlled, and was used exactly once. No feature is available only after the outcome. All preprocessing was fit on training data only. The split logic is documented and reproducible.

**Worked example.** A defect-prediction model reports 98 percent accuracy in development and 74 percent in production. Investigation finds two leaks: the data was split by row, so units from the same inspection lot appeared in both training and test, and one feature was a rework code only assigned after a defect was confirmed. Splitting by lot, removing the rework feature, and using a time-based holdout drops the development number to a realistic 79 percent, which then holds in production. The honest 79 was worth far more than the fictional 98.

**Common inspection-finding pattern.** Reporting performance on data the model trained or tuned on, so the headline metric is inflated. An inspector who finds the test set was not truly held out will not trust the validation.

**Interview angle.** "What is data leakage and how do you prevent it in a manufacturing model?" Name the forms (group/batch bleed from row splitting, temporal leakage, target leakage from after-the-fact features, preprocessing fit on the full set) and the fixes (split by group and by time, lock the test set, audit feature availability at prediction time, fit preprocessing on training data only).

---

## Bias and Representativeness

A model learns the patterns in its training data, including the ones you did not intend. If the data over-represents some conditions and under-represents others, the model inherits that skew and applies it with confidence.

**Why it matters (risk).** In a manufacturing and quality setting, bias usually shows up as a model that performs well on the common case and fails on the rare, high-consequence case, which is exactly the case that matters most. A deviation classifier trained mostly on minor deviations will be weak on the critical ones. A visual-inspection model trained on one production line's images will misjudge another line. The cost of the model's failure is highest precisely where the data is thinnest. See [AI risk assessment for GxP](/articles/ai-risk-assessment-gxp) for sizing this risk.

**Sources of bias to check.**

- **Selection bias.** The data captures only some of the population, for example only one site, one product, one instrument, or one time period.
- **Class imbalance.** The outcome you care about is rare in the data, so naive accuracy is meaningless and the model can default to ignoring the rare class. Choose metrics (recall, precision, F1) that are not fooled by imbalance, and consider resampling or weighting, while being honest that resampling cannot create information that is not there.
- **Historical bias.** The data reflects past practice, including past mistakes and past inconsistent categorization, which the model will faithfully reproduce.
- **Measurement bias.** Different instruments or methods produce systematically different readings that the model mistakes for real differences.

**How to assess and address (step by step).**

1. Profile representativeness explicitly: does the dataset cover all products, sites, instruments, scales, and operating regimes the model will face? Tabulate coverage; the gaps are your bias.
2. Quantify class balance for the target and pick metrics that survive imbalance.
3. Evaluate performance sliced by subgroup (per site, per product), not just in aggregate, because aggregate numbers hide subgroup failure.
4. Where a subgroup is under-represented and important, either collect more of it or constrain the model's intended use to exclude it, and state that scope limit explicitly.
5. Document known representativeness limits as part of the model's intended-use boundary.

**Acceptance criteria.** A documented representativeness analysis shows coverage of the intended population. Performance is reported sliced by the subgroups that matter, not only in aggregate. Any under-covered subgroup is either remediated or explicitly excluded from the intended use.

**Worked example.** An environmental-monitoring excursion classifier scores well overall but a sliced evaluation shows it is near-useless for a particular cleanroom grade that made up only 3 percent of the training data. The team narrows the intended use to exclude that grade until more data is collected, and states the limit in the validation record. Disclosing the boundary is more defensible than an aggregate number that hides a blind spot.

**Interview angle.** "How do you check a model for bias before deploying it?" Profile representativeness against the production population, quantify class balance and pick metrics that survive it, evaluate performance sliced by subgroup rather than in aggregate, and either remediate under-covered subgroups or exclude them from the intended use and say so.

---

## Roles and Responsibilities for Data Readiness

Readiness fails at the seams, the same way [AI validation](/articles/validating-ai-gxp-systems) does, because the work spans data engineering, process expertise, and quality, and no single function naturally owns all of it. Name owners explicitly.

| Activity | Accountable | Contributes |
|---|---|---|
| Data quality profiling and remediation | Data Engineering | Process SME, QA |
| Source data ownership and integrity | Data Steward per source | QA |
| Contextualization and feature definitions | Process SME + Data Engineering | Data Science |
| Labeling SOP and ground truth | SME labelers + QA | Data Science |
| ALCOA+ and lineage for the dataset | Data Engineering + QA | Data Steward |
| Train/validation/test split and leakage control | Data Science | QA reviews logic |
| Bias and representativeness assessment | Data Science + Process SME | QA |
| Readiness pipeline change control | System Owner + QA | Data Engineering |
| Final sign-off that data is fit for use | Quality Assurance | All |

The recurring failure is treating readiness as a pure data-science or data-engineering task that QA reviews at the end, if at all. The exclusion decisions, the labeling judgments, the representativeness limits, and the leakage controls are all quality-relevant and need quality involvement while the data is being prepared, not after the model is built. See [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) for the broader accountability model.

---

## A Worked Data-Readiness Assessment

Bringing it together, here is how a readiness assessment runs end to end, for a concrete case: a model to classify incoming deviations into criticality tiers to support (not replace) QA triage.

**Step 1, define the intended use and the data it implies.** The model assigns a preliminary criticality tier to each new deviation; a QA reviewer confirms or overrides it. Advisory, human-in-the-loop. The data implied: historical deviation records with their free-text descriptions, the structured fields, and a trustworthy criticality label per record.

**Step 2, source inventory.** Deviations live in the QMS. Three years of records, roughly 6,000 deviations, free-text narrative plus structured fields (area, product, equipment), and a historical criticality category. The criticality category is the candidate label.

**Step 3, profile the data.** Profiling finds: narrative present for 99 percent of records; the structured "area" field 18 percent blank in the first year because it was added later; criticality populated for all records but assigned by many different analysts over three years. First readiness flag: the early-year records are less complete and may not be representative of current practice. Second flag: the label's consistency is unknown.

**Step 4, assess the label (ground truth).** Two senior QA reviewers independently re-label a random 300 deviations against the current SOP definitions. Inter-rater agreement is 76 percent, and most disagreement is between two adjacent tiers whose definitions overlap. Decision: the historical labels are too noisy to use directly. Remediation: rewrite the tier definitions with worked examples, re-label a curated training subset under the improved SOP, measure agreement again (now 91 percent), and use the re-labeled subset as ground truth rather than the raw historical category.

**Step 5, contextualize and engineer features.** From the free text, plan text features. From the structured fields, add area, product, and equipment. Engineer a feature for whether the deviation references a sterile area, since SMEs say that strongly correlates with criticality. Document each feature's definition and confirm each is available at the moment a new deviation is created, so no feature leaks the outcome.

**Step 6, check representativeness and bias.** Tabulate coverage by area and product. Critical deviations are 8 percent of the set (class imbalance), so accuracy is rejected as a metric in favor of recall on the critical class with precision tracked. One product line is heavily under-represented; the intended use is scoped to exclude it for now, stated explicitly.

**Step 7, apply ALCOA+ and lineage.** Keep the QMS as the system of record. Record the extract query and date. Build the cleaning, re-labeling, and feature pipeline as version-controlled code with an exclusion log (notably the early-year records with missing area are excluded with a recorded reason). Freeze and hash the final dataset.

**Step 8, split.** Split by time: the most recent six months of deviations become the locked test set, mimicking deployment on future deviations. Earlier records split into training and validation by deviation (group), so no single deviation's data crosses splits. Fit all text preprocessing on training only. Lock and version the test set.

**Step 9, readiness sign-off.** QA reviews and signs that: profiling is complete with documented remediation; the label set has measured agreement above threshold; features are defined and free of leakage; representativeness limits are documented and scoped; ALCOA+ and lineage are in place; the split is grouped and time-based with a locked test set. Only now does modeling begin.

The output of the assessment is a readiness package: the profiling report, the labeling SOP and agreement record, the feature specification, the representativeness analysis, the lineage and exclusion log, the split definition, and the QA sign-off. That package is the data-side evidence the eventual [model validation](/articles/validating-ai-gxp-systems) rests on, and it is what an inspector will ask to see.

---

## A Data-Readiness Checklist

Use this as a release gate before any modeling starts. If a line cannot be evidenced, the data is not ready, regardless of how eager everyone is to train.

- The intended use is defined and the data it requires is identified.
- Source systems are inventoried with named data owners.
- The dataset has been profiled against the quality dimensions, with documented remediation and acceptance criteria set in advance.
- Units, formats, and categories are harmonized across sources; qualifiers like censored values are preserved, not coerced.
- Features are contextualized and defined in a feature specification that runs identically at training and inference.
- Ground truth has a labeling SOP, qualified labelers, measured inter-rater agreement above a pre-set threshold, recorded adjudication, and a versioned label set.
- ALCOA+ is satisfied for the dataset: source preserved, extract reproducible, transformations as version-controlled code, every exclusion documented, dataset frozen, versioned, and retained.
- Lineage runs end to end from source to feature to dataset version, under change control.
- The train/validation/test split is grouped and time-appropriate, the test set is locked and used once, no feature leaks the outcome, and preprocessing was fit on training data only.
- Representativeness is analyzed, class imbalance is handled with honest metrics, performance will be reported sliced by subgroup, and any under-covered subgroup is remediated or excluded from the intended use.
- QA has reviewed and signed the readiness package.

---

## Common Mistakes and Inspection-Finding Patterns

These are the recurring failures, each mapping to a real category of computerized-system and data-integrity finding.

- **The throwaway extract.** Training on a CSV cleaned on a laptop with no lineage, no version, no record of exclusions. The model cannot be reproduced or investigated. A data-integrity finding in AI clothing.
- **Silent record dropping.** Removing inconvenient records with no documented reason, which is data manipulation regardless of intent and violates Complete.
- **Coercing qualified results.** Treating "< 0.1" as 0.1 or dropping units, so the model learns falsehoods from LIMS data.
- **Labels with no procedure.** No labeling SOP, no labeler qualifications, no agreement measurement, so the ground truth is unauditable and possibly inconsistent.
- **Row-split leakage.** Splitting grouped data (batches, lots) at random so the same group lands in training and test, inflating performance.
- **Target leakage.** Including a feature only known after the outcome, so the model "cheats" in development and fails live.
- **Aggregate-only evaluation.** Reporting one overall number that hides a subgroup the model fails on, usually the rare high-consequence case.
- **No production data monitoring.** Not watching whether incoming data drifts from the training distribution, so the readiness work silently expires.
- **Hidden assumptions in preprocessing.** Fitting scalers or imputation on the full dataset before splitting, leaking test statistics into training.

---

## Interview Questions and How to Answer Them

If you are interviewing for a data integrity, CSV, or digital quality role and AI data comes up, these separate practitioners from people reciting terms. Concrete answers win.

**"Why is data readiness a regulated activity and not just engineering?"** Because training data for a model that affects product quality or patient safety is GxP data, so it carries ALCOA+ and Part 11 expectations. If you cannot show its source, accuracy, completeness, and version, you cannot reproduce, investigate, or defend the model. Data preparation is part of the validation evidence.

**"Which data quality dimensions do you assess before training?"** Completeness, accuracy, consistency, timeliness, uniqueness, validity, representativeness, and traceability. I profile against them before modeling, set acceptance criteria in advance, and range-check against the process specification rather than the data's own extremes, because the data may already contain the errors.

**"How do you combine historian, MES, and LIMS data?"** They use different identities and time models, the historian may be compressed, LIMS results carry qualifiers and changing methods, and QMS categories are inconsistent. So I build a canonical entity model, resolve keys deliberately, align on the MES phase structure, and carry units and qualifiers through every join, all under documented lineage.

**"What is contextualization and why does it matter?"** Attaching process context (batch, phase, setpoint, time-in-phase) to raw sensor values and computing relative features like deviation-from-setpoint, because the bare number is meaningless. And the same feature logic must run at training and inference or the model fails in production.

**"How do you create trustworthy ground truth?"** A labeling SOP with precise definitions, qualified labelers, double-labeling a subset to measure inter-rater agreement, adjudicating disagreements, and versioning the label set. If agreement is low, the task is ill-defined and no algorithm will fix it.

**"What is data leakage and how do you prevent it?"** Information from the test set or the future reaching training. Forms: group bleed from row splitting, temporal leakage, target leakage from after-the-fact features, preprocessing fit on the full set. Fixes: split by group and by time, lock the test set, audit feature availability at prediction time, fit preprocessing on training only.

**"How do you check for bias?"** Profile representativeness against the production population, quantify class balance and choose metrics that survive imbalance, evaluate sliced by subgroup not just aggregate, and either remediate under-covered subgroups or exclude them from the intended use and state the limit.

**"Walk me through a data-readiness assessment."** Define intended use and required data, inventory sources, profile against the quality dimensions, assess and if needed re-create the labels, contextualize and define features, check representativeness and bias, apply ALCOA+ and lineage, split by group and time with a locked test set, and get QA to sign the readiness package before any modeling.

---

## The Honest Assessment

Data readiness is unglamorous and it is most of the work. The modeling everyone is excited about is a fraction of the effort and a fraction of the risk; the readiness is where projects quietly succeed or fail and where an inspection will land. The good news is that almost all of it is built from disciplines you already have: data integrity, lineage, change control, defined procedures, and qualified judgment. The AI-specific parts (splitting to avoid leakage, measuring label agreement, checking representativeness) are a small extension on a foundation you have run for years.

The path that holds up is the steady one. Treat the training set as a GxP record from the first extract. Profile honestly and remediate with documented reasons rather than silent deletions. Build ground truth as a quality judgment, not a clerical pass. Preserve units, qualifiers, lineage, and versions so the model can be reproduced and investigated. Split so the numbers mean something, and check for the bias that hides in the rare cases that matter most. A readiness package that documents what the data is, what was changed and why, and where its limits are is far more defensible than a model that scored well on a dataset no one can reconstruct.
