---
title: "Building AI Tools for GxP: What Actually Works"
description: "Practical lessons from building AI-assisted compliance tools in regulated environments, where the hype ends and the useful, validatable work begins."
pubDate: 2026-05-20
tags: ["AI", "GxP", "automation", "compliance"]
tier: "Intermediate"
pillar: "ai-automation"
---

Everyone in regulated life sciences has sat through a presentation about AI transforming drug and device development. The slides are always the same: neural networks reading scans, AI writing clinical study reports, machine learning cutting trial times in half.

Here is what AI actually earns its keep doing in quality work: audit trail anomaly detection, document gap analysis, and classification of deviations. None of it is glamorous. All of it saves real time and catches things people miss when they review at volume.

This is what building AI tools for GxP actually looks like across pharma, biotech, medical devices, and the wider life sciences, including the parts the vendor demos skip. The article is written for the person who has to build the tool, validate it, run it, and then stand in front of an inspector and explain it.

## The Constraint That Changes Everything

In a regulated environment, an AI tool does not just need to work. It needs to be **validated** for its intended use, and someone has to be able to explain it to an inspector.

US FDA expects that computerized systems used in GxP activities are validated. The foundational requirement for electronic records and signatures is 21 CFR Part 11 (effective 1997), and the parallel expectation in Europe is EU GMP Annex 11, "Computerised Systems" (current version effective June 2011, with a revision in progress). For activities under predicate rules, the relevant requirements sit in 21 CFR 211 for drug GMP, the device quality system regulation in 21 CFR 820 (the Quality Management System Regulation, the QMSR final rule published February 2024, compliance date February 2, 2026, which aligns 21 CFR 820 with ISO 13485:2016), and the GCP and GLP frameworks for clinical and nonclinical work. A Python script calling a large language model API to flag audit trail anomalies is a computerized system under all of these. It does not get a pass because it is small or internal.

This constraint shapes every decision. You do not deploy a new model version on a Tuesday because a benchmark went up. You write a change control, assess the impact, test against documented acceptance criteria, and get quality approval before it touches a live workflow. See [change control for validated systems](/articles/change-control-validated-systems) for how that process works in practice.

This is not as slow as it sounds if you design for it upfront. If you build first and bolt on validation later, you will rebuild. The retrofit always costs more than the discipline would have.

### Where the regulatory basis actually comes from

Be precise about which requirement applies, because an inspector will be. The validation expectation does not come from "an AI rule." It comes from the predicate rule for the activity plus the computerized-system layer on top:

- **Drug GMP (small molecule and biologics):** 21 CFR 211.68 requires that automatic, mechanical, and electronic equipment be routinely calibrated, inspected, or checked according to a written program, and that input/output be checked for accuracy. That is the GMP hook for validating an AI tool that touches a GMP record.
- **Device:** 21 CFR 820.70(i) (and, after the compliance date, the QMSR pointing to ISO 13485 clause 4.1.6) requires validation of software used as part of production or the quality system. The companion guidance is FDA's "General Principles of Software Validation" (final, 2002).
- **Electronic records and signatures:** 21 CFR Part 11 for FDA, EU GMP Annex 11 for EU. If your tool creates, modifies, maintains, or transmits an electronic GMP record, Part 11 applies to that record and to the tool.
- **Clinical:** ICH E6(R2) Good Clinical Practice, section 5.5.3, sets validation and audit-trail expectations for computerized systems in trials.
- **Nonclinical:** 21 CFR 58 (GLP) and the analogous computerized-system expectations.

The quality rationale underneath all of this is the same one ALCOA+ encodes: a record produced or influenced by software has to be attributable, legible, contemporaneous, original, accurate, and the rest. If you cannot show the tool produces records that meet that standard reproducibly, you cannot use it. See [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and [data integrity foundations](/articles/data-integrity-foundations).

### Where CSA changes the math

The validation posture for these tools shifted with FDA's "Computer Software Assurance for Production and Quality System Software" guidance. This began as a draft in September 2022 and was **finalized in 2025** (do not cite the 2022 version as final). Computer Software Assurance, or CSA, does not lower the bar for safety. It tells you to spend testing effort in proportion to risk, to use the least-burdensome method that gives you confidence, and to stop generating screenshots for low-risk features that nobody will ever read.

For an AI screening tool that only flags items for human review and never makes a record-affecting decision on its own, CSA is the right lens: a focused risk assessment, scripted testing of the high-risk behaviors, and unscripted or ad hoc testing for the rest. The deeper treatment is in [computer software assurance](/articles/computer-software-assurance-fda), the validation mechanics live in [the GAMP 5 CSV framework](/articles/gamp5-csv-framework), and the risk-assessment method is in [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology).

The practical point: an AI tool that influences a release decision is high risk and needs scripted, documented testing of that influence. An AI tool that sorts a queue for a human is low to medium risk and can be validated far more lightly, as long as the human review is real.

### GAMP 5 category, and why most of these tools are Category 5

GAMP 5 (Second Edition, 2022) sorts software by how much you configured or built it, and that drives validation effort. A commercial language model API used as-is looks like infrastructure, but the **prompt, the schema, the rules, and the orchestration you wrote around it are bespoke code**. That pushes the integrated tool toward GAMP Category 5 (custom application), which is the highest-rigor category. The model weights are a black box you do not validate directly; what you validate is the behavior of your configured system against your requirements. Frame it that way in the validation plan so the scope is honest. The category logic is in [the GAMP 5 CSV framework](/articles/gamp5-csv-framework), and the way you validate the AI behavior specifically is in [validating AI in GxP systems](/articles/validating-ai-gxp-systems) and [the GxP ML model lifecycle](/articles/gxp-ml-model-lifecycle).

## What Actually Works

### 1. Document classification and gap analysis

GxP environments produce enormous amounts of documentation: SOPs, batch records, validation protocols, training records, deviation reports, CAPAs, device history records, trial master file documents. Confirming that a batch record references the correct version of every associated SOP, and that the SOP itself covers every step in the batch record, is the kind of cross-referencing work people do slowly and inconsistently.

A language model handles this well. You give it a batch record section and the relevant SOP and ask a narrow question: does this SOP provide adequate instruction for this step, and is the version referenced the effective one? The output is not a decision. It is a flagged list for human review, with the specific clause the model thinks is missing.

**How to build it, in sequence:**

1. Pull the source documents from a controlled location (the document control register, not someone's desktop), so the version you compare against is the effective one.
2. Chunk the batch record into discrete steps and the SOP into discrete instructions.
3. Ask the model one narrow question per step, with the cited version number passed in, and force a structured answer: `{step_id, status, cited_version, effective_version, missing_clause, confidence}`.
4. Validate that JSON against a schema. If it fails, stop and route to a human; do not guess.
5. Reconcile cited version against the effective version deterministically in your own code, not in the model. Version comparison is exact-match logic and should never be left to a language model.
6. Present the flags, grouped by type, to the reviewer.

**A worked example.** A reviewer is checking 40 batch records before a campaign closeout. Each record cites roughly a dozen procedures. Manually verifying 480 SOP references against the document control register, then reading each cited procedure to confirm it covers the step, is a multi-day task and the kind of repetitive work where attention drifts by record 25. The classifier pulls the cited version, checks it against the current effective version from [document control](/articles/document-control-fundamentals), and flags three categories: superseded version cited, step in the record with no matching instruction in the SOP, and instruction in the SOP with no corresponding step. The reviewer now spends their day on the 18 flags instead of the 480 lookups.

| Flag type | Count | Example flag | Reviewer disposition |
|---|---|---|---|
| Superseded version cited | 7 | Step 4.2 cites SOP-1142 v3; effective is v5 | Confirmed, record correction raised |
| Step with no SOP instruction | 6 | Manual line-clearance step not in cited SOP | Confirmed, gap in procedure logged |
| SOP instruction with no step | 5 | SOP requires a second-person verify not performed | 4 confirmed, 1 false flag (verify recorded elsewhere) |

**Acceptance criteria.** The tool is doing its job when: it never silently passes a superseded version (a missed superseded citation is the failure mode you test hardest against), the schema validation catches malformed output before it reaches a human, and the reviewer's spot-check of a sample of "no flag" items confirms the tool is not hiding real gaps. Measure recall on a held-out set of known-bad records before you trust it on live work.

This pattern, where AI screens, a human decides, and the decision is documented, is the right model for GxP AI tools. It does not replace the reviewer. It makes the reviewer's time go further and pushes the boring lookups onto the machine. The discipline around the review obligation itself is in [batch record review](/articles/batch-record-review-gmp).

### 2. Deviation categorization and CAPA suggestion

Incoming deviation reports need to be categorized by type, assigned a preliminary risk level, and routed to the right investigator. In a busy manufacturing or quality environment this happens at volume, often under a clock, because the procedure sets a target for initial classification and triage. The triage logic itself is in [quality event classification and triage](/articles/quality-event-classification-triage).

A classifier, prompted with worked examples or a structured rubric, categorizes new deviations with reasonable accuracy and surfaces similar historical cases for reference. The investigator still owns the investigation and writes the CAPA. The AI gives them a starting category, a draft risk rating to accept or override, and a short list of precedent deviations that may share a root cause. That precedent surfacing is often the highest-value part, because a recurring problem is far easier to see when the last four similar events are in front of you. The full investigation discipline is in [deviation management](/articles/deviation-management), the corrective-action logic in [what is a CAPA](/articles/what-is-a-capa), and the root-cause toolkit in [root cause analysis techniques](/articles/root-cause-analysis-techniques).

**The override-rate control.** The accuracy does not need to be perfect. It needs to be good enough that the reviewer catches the errors, which requires the reviewer to actually review rather than rubber-stamp. Design the workflow so the human has to engage. If the tool pre-fills a category and the path of least resistance is "accept," people will accept wrong categories. Make the reviewer confirm the category with a reason, and make overrides easy. Then track the override rate as a quality metric:

| Override rate | Interpretation | Action |
|---|---|---|
| Under 10% | Model and inputs stable, reviewers engaged | Continue, monitor |
| 10-25% | Some drift or a shifted input mix | Investigate the overridden categories for a pattern |
| Over 25% | Model drift, prompt staleness, or a process change the tool has not seen | Trigger periodic review early; consider pausing the suggestion |
| Near 0% over a long window | Likely rubber-stamping, not real review | Audit the review step; the checkpoint may be theater |

A rising override rate is your early warning that the model has drifted or the input distribution has changed. A suspiciously low override rate is the warning that nobody is really reviewing. Both matter to an inspector. The metric ties into [quality metrics and KPIs](/articles/quality-metrics-and-kpis).

**A note on what "trained on historical deviations" should and should not mean.** For most quality teams, fine-tuning a model on internal deviation history is neither necessary nor wise, because that history is small, messy, and often contains the exact mistakes you are trying to stop repeating. A better pattern is to keep the base model fixed and feed it a curated set of well-categorized examples in the prompt, plus your written classification rubric, so the behavior is driven by reviewable text rather than opaque weights. The advantage is governance: when a regulator asks why the tool categorized something a certain way, you can point at the rubric and the examples, both of which are documents under change control. You cannot point at a fine-tuned weight matrix and explain anything.

### 3. Audit trail pattern detection

This is the highest-value application in the set. Audit trails in GxP systems can run to millions of entries across a manufacturing campaign, a device production run, or a clinical study. Manual review covers a sample, usually risk-based, and the rest is never looked at. AI can screen everything, then hand the human a short list. The review obligations themselves are covered in [audit trail design and review](/articles/audit-trail-design-and-review) and the operational routine in [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).

The patterns worth detecting:

- **Temporal anomalies:** entries created at 2 AM on a Sunday for a daytime process, entries timestamped before the event they document, bulk edits clustered in a short window, activity during a documented system downtime. Most of these are deterministic rules, not AI; use AI to rank and explain, not to do the arithmetic. System-clock integrity is its own topic, see [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).
- **User behavior outliers:** an analyst whose edit frequency spikes during one specific batch, actions attributed to a user who was on leave, a single account active from two locations, repeated logins outside that user's normal hours. Access control context is in [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control).
- **Value revision patterns:** fields edited multiple times before being finalized, particularly in high-criticality records like release assay results, reprocessing or reintegration of chromatography data, and any change to a result that moves it across a specification limit. Chromatography is a perennial hotspot, see [chromatography data system integrity](/articles/chromatography-data-system-integrity).

That last category is where the real data integrity risk lives. A result quietly revised from out-of-specification to passing, with a weak or missing reason for change, is exactly the pattern that turns up in published warning letters year after year. The recurring inspection themes are summarized in [FDA warning letter patterns](/articles/fda-warning-letters-patterns), and the underlying expectations in [ALCOA+ in detail](/articles/alcoa-plus-deep-dive).

**How to structure the screen so it survives scrutiny.** Split it into two layers. The deterministic layer (rules, thresholds, joins against the user roster and the maintenance calendar) does the heavy lifting and is fully traceable. The AI layer only ranks, clusters, and writes a plain-language explanation of why an entry looks unusual. Keeping the AI out of the arithmetic means a flag is always reproducible from the rule that fired, which is what you will be asked to demonstrate.

**Worked micro-example.** A chromatography result for a release assay is changed from 0.11% impurity (out of spec, limit 0.10%) to 0.09% (in spec). The audit trail shows the change made 40 minutes after the original entry, by a different user than the analyst, with reason for change "typo." The deterministic layer fires on three rules: change crosses a specification limit, reason text under a confidence threshold, and editor differs from originator. The AI layer clusters this with two similar prior events on the same instrument that quarter and writes the one-line rationale. QA gets a single ranked item with the full context, not a 2-million-row export.

The output is a flagged set of entries for QA investigation. The flag is not a finding. The investigation is what produces a finding or a documented clearance. Treat every flag as a question, not a verdict, and write down the answer either way. The investigation discipline mirrors [OOS investigation process](/articles/oos-investigation-process).

## A Risk-Tiering Table You Can Reuse

Not every AI use case carries the same regulatory weight. The single most useful thing you can do early is sort intended uses by how close they sit to a record-affecting decision, because that determines validation effort, review design, and how nervous you should be.

| Use case | Decision authority | Failure mode if wrong | Validation rigor | Human checkpoint |
|---|---|---|---|---|
| Audit trail flagging | Screen only | Missed anomaly, false flag | Medium | QA investigates every flag |
| Deviation categorization | Suggest, human confirms | Misrouted or mis-rated event | Medium | Investigator confirms with reason |
| SOP/batch gap analysis | Screen only | Missed gap | Low to medium | Reviewer dispositions each flag |
| Draft text for an investigation | Draft only, human rewrites | Plausible but unsupported claim | Medium | Author owns and verifies every sentence |
| Auto-generated narrative in a GxP record | Would be authoritative | Untraceable statement in a record | High, not recommended yet | Not adequate without retrieval and verification |
| In-process release decision | Would be authoritative | Unsafe product released | High, not an LLM use case | Not appropriate |

The rule embedded in this table: the closer the AI gets to making or stating something that becomes part of an official record, the higher the rigor and the harder the human checkpoint has to be. Tools that only sort and surface are easy to govern. Tools that author or decide are not, and most are not ready for that role. This tiering is just risk-based validation applied to AI; the general method is in [quality risk management](/articles/quality-risk-management) and [data criticality and data risk](/articles/data-criticality-and-data-risk).

## What Does Not Work Yet

**Automated narrative generation for batch records or investigation reports.** Language models produce fluent, plausible text, but in a GxP record every sentence has to be traceable to actual data. A model that writes "the temperature excursion lasted 12 minutes" when the trend says 18 has introduced a falsified statement into a controlled record, even if it meant well. The hallucination risk is too high without a solid retrieval and verification layer that grounds each claim in source data and shows its work. Drafting an investigation summary that a human then verifies line by line against the evidence is defensible. Letting the model write the official record is not, at least not yet.

**Predictive CAPA effectiveness.** Predicting whether a corrective action will hold before it is closed is an appealing idea, but it needs more structured, clean, queryable historical data than most organizations actually have. If your deviation and CAPA history lives in free-text fields with inconsistent root-cause coding, a model cannot learn the pattern, because the pattern was never recorded consistently. Fix the data discipline first. The model is the last 10 percent, not the first. The effectiveness logic itself is in [CAPA effectiveness verification](/articles/capa-effectiveness-verification).

**Anything that requires real-time instrument integration.** The latency and reliability requirements for in-process monitoring do not fit current LLM architectures. A model that occasionally takes three seconds and occasionally takes thirty has no place in a control loop. This is the territory of classical machine learning, deterministic rules, and qualified automation, not generative models. See [automation validation for PLC, SCADA, and DCS](/articles/automation-validation-plc-scada-dcs) for where those controls belong.

**Fully autonomous disposition of anything.** No current tool should release a batch, close a deviation, or sign a record on its own. Beyond the technical risk, the regulatory expectation is that a qualified human is accountable. An AI cannot hold a [GxP role or responsibility](/articles/gxp-roles-responsibilities), and it cannot be the named reviewer. For device software making clinical claims, the bar is higher still, see [device software as a medical device](/articles/device-software-cybersecurity-samd) and [IEC 62304 software lifecycle](/articles/iec-62304-samd-software-lifecycle).

## Practical Setup

For internal GxP AI tools, a workable stack looks like this:

- **A general-purpose scripting language** such as Python for all processing, data handling, and orchestration, kept under version control with documented dependencies. Treat the script itself as a validated object, see [validating scripts and low-code analytics](/articles/validating-scripts-low-code-analytics).
- **A commercial language model API** (for example a model from Anthropic, OpenAI, or one hosted in a validated cloud environment) for the language tasks: classification, extraction, comparison, drafting. The supplier itself needs assessment, see [software supplier assessment](/articles/software-supplier-assessment-csa) and, for the hosting, [cloud and SaaS validation](/articles/cloud-saas-validation).
- **Structured prompts with explicit output schemas.** Force JSON output and validate it against a schema before it touches anything downstream. If the model returns malformed output, the workflow stops and routes to a human rather than guessing.
- **Deterministic settings where you can get them.** Pin the model version, set sampling temperature low for classification tasks so the same input gives the same output, and record the exact prompt and model identifier with every call. Nondeterminism is the enemy of reproducibility, and reproducibility is what validation depends on. Note honestly in your risk assessment that LLM output is not guaranteed bit-for-bit reproducible even at temperature zero; this is exactly why the human checkpoint, not the model, is the control of record.
- **Complete logging of every call:** input, output, prompt version, model identifier, timestamp, and the user context. This log is itself a record subject to the same integrity expectations as anything else, so apply [ALCOA+](/articles/alcoa-plus-deep-dive) to it.
- **A human review step built into the code as a hard requirement,** not an afterthought and not a policy that lives only in an SOP. If the workflow can complete without a human disposition, someone will eventually skip it.

The logging requirement is not optional for GxP use. If an AI-assisted review is ever questioned in an inspection, you need to show exactly what the model was given, what it returned, and what the human reviewer did with that output. If you cannot reconstruct that chain, the tool does not belong in a GxP workflow. This is the same reproducibility logic that drives [data lifecycle and metadata](/articles/data-lifecycle-and-metadata) thinking everywhere else in quality.

### Validation deliverables for an AI screening tool

You do not need a hundred-page package for a low-risk screening tool, but you do need the basics, sized to risk under CSA. A minimal set, with what each one has to contain:

| Deliverable | What goes in it | Owner | Acceptance criterion |
|---|---|---|---|
| Intended use statement | What the tool does, what it does NOT do, what it is not authorized to decide | System owner | One paragraph an inspector reads and understands the boundary |
| Risk assessment | Tier from the table above, GAMP category, justification of test effort | QA + system owner | Risk class drives a defensible test scope |
| Requirements + traceability | Functional requirements incl. negative cases (model returns garbage, times out, unavailable), each traced to a test | Business analyst | Every requirement maps to evidence, see [user requirements and traceability](/articles/user-requirements-and-traceability) |
| Test records | Scripted tests of high-risk behaviors, proof the human checkpoint cannot be bypassed, proof bad output is caught and routed safely | Validation lead | High-risk behaviors pass; failures handled per [validation test failure management](/articles/validation-test-failure-management) |
| Change control procedure | Treats model version, prompt, and schema changes as changes | Quality | A prompt edit cannot reach production without assessment |
| Summary report | Conclusion on fitness for intended use, release statement | QA | Approved before go-live, see [validation summary report and release](/articles/validation-summary-report-and-release) |

The wider deliverable map is in [the validation deliverables guide](/articles/validation-deliverables-guide), and the separate question of how you validate the AI behavior itself, as opposed to the plumbing around it, is covered in [validating AI in GxP systems](/articles/validating-ai-gxp-systems). The protocol mechanics are in [writing validation protocols and reports](/articles/writing-validation-protocols-and-reports).

## Roles and Responsibilities

An inspector will ask who owns what. Have an answer before they ask. The named human reviewer is accountable for the output; the AI is a tool, not a party to the decision.

| Role | Responsibility for the AI tool |
|---|---|
| System owner / process owner | Owns intended use, the off-switch criteria, and periodic review; answers "why does this tool exist and what is it allowed to do" |
| QA | Approves the risk class, the validation, and any change control; owns the override-rate metric and the periodic review trigger |
| Validation lead | Authors and executes the test strategy sized to risk; proves the human checkpoint holds |
| IT / system administrator | Pins the model version, manages access, maintains the audit log of calls, manages the hosting environment |
| Named human reviewer | Accountable for every disposition; the tool informs, the reviewer decides and signs |
| Supplier (model vendor / cloud host) | Provides the model and environment; assessed, not assumed, see [supplier and vendor qualification](/articles/supplier-vendor-qualification) |

## Common Mistakes and Inspection-Finding Patterns

These are the patterns that turn a helpful tool into a finding. None are hypothetical; they recur across published inspection observations in generic form.

- **Treating the tool as "just a script" and skipping validation entirely.** Size is not a defense. A small script that touches a GMP record is a computerized system. This is the most common gap.
- **No change control on prompt and model changes.** The team validates v1, then quietly swaps the model or edits the prompt to "improve accuracy." That is an uncontrolled change to a validated system, and the new behavior was never tested. Inspectors look for exactly this.
- **A human checkpoint that exists on paper but not in behavior.** Override rate near zero, reviewers clicking accept in seconds, no reason captured. The control is theater, and an inspector who pulls the timestamps will see it.
- **No negative testing.** The package shows the tool works on good input but never shows what happens when the model returns malformed output, times out, or hallucinates. The failure path is where data integrity risk lives.
- **Logging that does not let you reconstruct a decision.** You can show the human's disposition but not what the model was given or returned. You cannot defend the chain.
- **Letting the model do the arithmetic or the version comparison.** Exact-match and numeric checks belong in deterministic code. When an LLM does them, you have made a reproducible task non-reproducible.
- **Fine-tuning on dirty internal history** and then being unable to explain a categorization, because the answer is buried in weights rather than a reviewable rubric.
- **No defined off-switch.** When the model starts behaving strangely, there is no documented trigger or authority to stop using it, so it keeps running.

## Governance and the Human Accountability Line

The technology is the easy part. The harder part is governance, and it is what an inspector will actually probe.

Three questions decide whether an AI tool is defensible in a regulated workflow.

**Who is accountable for the output?** Most organizations land on the answer that the named human reviewer is accountable, the same as if a junior colleague had done the screening. The AI is a tool the reviewer uses, not a party to the decision. That framing keeps accountability where the regulations expect it, inside the [pharmaceutical quality system](/articles/pharmaceutical-quality-system).

**How do you know the tool still works?** Models drift, vendors update, and the input distribution shifts as processes change. Periodic review, monitored override rates, and a small held-out set of known cases run on a schedule will catch degradation before it reaches a record. Build that monitoring in from day one. The discipline mirrors [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review).

**What happens when it is wrong?** Plan for it, because it will be. The honest design assumption is that the model will occasionally miss a real anomaly and occasionally raise a false one. The human checkpoint exists precisely to absorb both. If your process only works when the AI is right, you have built a fragile system and you have quietly made the AI the decision-maker. The supporting structure for all of this is the [data governance framework](/articles/data-governance-framework).

One more governance habit worth keeping. Write down, before you deploy, the conditions under which you would turn the tool off. A defined off-switch and the criteria for using it signal to an inspector that you understand the tool's limits, and they protect you on the day the model starts behaving strangely.

## Interview-Ready: Questions You Should Be Able to Answer

If you build or oversee these tools, expect these questions from a hiring panel or an inspector. Short, direct answers follow each.

**"Is an internal AI script a computerized system that needs validation?"**
Yes. If it creates, modifies, maintains, or influences a GxP record, it is a computerized system under 21 CFR Part 11 / Annex 11 and the predicate rule for the activity. Size and internal-only status do not exempt it.

**"How do you decide how much to validate?"**
Risk-based, under CSA (FDA guidance, draft 2022, finalized 2025). I place the intended use on a tier by how close it sits to a record-affecting decision. Screen-only tools with a real human checkpoint are low to medium risk and get focused scripted testing of the high-risk behaviors plus unscripted testing for the rest. A tool that influences a release decision is high risk and gets fully scripted, documented testing of that influence.

**"What GAMP category is it?"**
The integrated tool is typically Category 5, because the prompt, schema, rules, and orchestration are bespoke. I do not validate the model weights directly; I validate the behavior of the configured system against my requirements.

**"How do you handle a model version update from the vendor?"**
As a change. Change control, impact assessment, re-test of the affected high-risk behaviors against documented acceptance criteria, QA approval before it touches a live workflow. A version bump is never automatic in a validated workflow.

**"How do you prevent the human review from becoming a rubber stamp?"**
Design the workflow so the reviewer must confirm with a reason and make overrides easy, then monitor the override rate. A near-zero rate over time is a red flag for rubber-stamping; a rising rate is a red flag for drift. Both trigger investigation.

**"What is your biggest data integrity risk with this tool, and how do you control it?"**
Hallucination introducing an untraceable or false statement into a record. I control it by keeping the AI out of authoring the official record, grounding any drafted text in source data, validating structured output against a schema, and logging every call so the chain is reconstructable.

**"Show me you can reconstruct a decision."**
I can produce, for any call: the exact input, the prompt version, the model identifier, the output, the timestamp, the user context, and the human reviewer's disposition with reason. If I cannot produce that chain, the tool does not belong in the workflow.

**"When would you turn it off?"**
Per the documented off-switch criteria: override rate breaching its threshold, the held-out test set degrading, a vendor change not yet assessed, or any indication the model is producing output the checkpoint cannot reliably catch.

## The Honest Assessment

AI tools in GxP are useful for specific, bounded tasks where the cost of an error is absorbed by a downstream human review step. They are not useful yet as autonomous decision-makers in regulated workflows, and treating them as such is how you turn a helpful tool into an inspection finding.

The organizations that get the most value from AI in compliance are the ones that understand this distinction, design for it, and build the validation and governance infrastructure upfront instead of retrofitting it after an inspector asks how the thing works. Start with the lowest-risk, highest-volume screening tasks, prove the human checkpoint holds, and earn trust before you let a model anywhere near a record-affecting decision.

That is not a limitation of AI. It is how regulated industries work, and for good reason. The discipline that feels like friction is the same discipline that lets you stand behind your data when it counts.
