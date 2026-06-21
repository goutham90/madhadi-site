---
title: "ICH E8(R1) and E9: Quality by Design and Statistical Principles in Clinical Trials"
description: "How E8(R1) critical-to-quality factors, quality-by-design protocol thinking, and the E9(R1) estimands framework connect statistical planning to clinical data integrity, with worked examples and inspection-finding patterns."
pubDate: 2026-06-20
tags: ["gcp", "clinical-trials", "ich-e8", "ich-e9", "estimands", "data-integrity", "quality-by-design", "statistics"]
pillar: "clinical-gcp"
tier: "Intermediate"
---

Two ICH guidelines sit underneath almost every well-run clinical trial: E8(R1) on general considerations for clinical studies, and E9 on statistical principles, now extended by the E9(R1) addendum on estimands and sensitivity analysis. E8(R1) tells you how to design quality into a trial from the start. E9 and its addendum tell you how to ask a precise scientific question and how to analyze the data so the answer means what you claim it means.

Quality people often treat these as the statistician's problem. That is a mistake. Critical-to-quality (CtQ) factors, the estimand, and the handling of intercurrent events all drive what data you must collect, how clean it must be, what monitoring you focus on, and what an inspector will ask about source data. If you work in clinical QA, GCP compliance, clinical data management, or clinical systems validation, these two guidelines define the quality bar you are protecting. This page covers what each requires, what goes in the deliverables, how to operationalize them, and the questions you will face in an interview or an inspection.

---

## The regulatory basis: what E8(R1) and E9 actually are

### ICH E8(R1), General Considerations for Clinical Studies (2021)

The original ICH E8, "General Considerations for Clinical Trials," reached Step 4 in 1997. It was a high-level orientation document describing trial types and phases. The revision, ICH E8(R1), reached Step 4 on 6 October 2021 and reframed the guideline around two ideas that were not prominent in 1997:

- **Quality by design (QbD)** for clinical studies: build quality in during design rather than inspecting it in afterward.
- **Critical-to-quality (CtQ) factors**: the attributes of a study that, if not met, jeopardize the rights, safety, and wellbeing of participants or the reliability and interpretability of the results.

E8(R1) is the umbrella document for the GCP framework. It explicitly positions itself above the more operational guidelines. ICH E6 (Good Clinical Practice) executes the conduct rules, and ICH E9 governs the statistics. E8(R1) is meant to be read first, because the design decisions it describes constrain everything downstream.

> E8(R1) states that quality should be built into the scientific and operational design and conduct of a study, and that critical-to-quality factors are those that are fundamental to the protection of participants, the reliability and interpretability of study results, and ultimately the decisions made based on the trial.

### ICH E9, Statistical Principles for Clinical Trials (1998)

ICH E9 reached Step 4 on 5 February 1998 and was adopted by FDA (published in the Federal Register, 1998) and by the EMA as CPMP/ICH/363/96. It is the reference document for the statistical content of a clinical protocol and the statistical analysis of confirmatory trials. It introduced or codified concepts that are now standard vocabulary: the intention-to-treat (ITT) principle, the analysis populations (full analysis set, per-protocol set), prespecification of the primary analysis, multiplicity control, handling of missing data, and the distinction between confirmatory and exploratory analyses.

### ICH E9(R1), the Estimands and Sensitivity Analysis addendum (2019)

E9(R1) reached Step 4 on 20 November 2019. It does not replace E9; it adds a structured framework for defining the treatment effect a trial is actually estimating, called the **estimand**, and for choosing **sensitivity analyses** that test whether the main result holds when key assumptions are relaxed. The addendum was the regulatory response to a long-standing problem: trials would state an objective like "show drug X is better than placebo" without being precise about what "better" meant once patients stopped treatment, switched therapy, took rescue medication, or died. Different reasonable analyses of the same data could give materially different answers, and nobody had pinned down which one matched the clinical question.

The relationship in one line: **E8(R1) decides which study attributes are critical and designs them in. E9 sets the statistical rules. E9(R1) forces the trial to define, in advance and precisely, the treatment effect being estimated and how it deals with events that complicate that estimate.**

---

## Quality by design and critical-to-quality factors (E8(R1))

### What QbD means in a clinical trial

Quality by design here borrows the manufacturing idea and applies it to study design. You do not try to police quality into a trial through exhaustive monitoring and source data verification of every field. You decide, up front, which features of the study truly matter to participant safety and to the credibility of the result, and you concentrate design effort, oversight, and risk controls there. Everything else gets proportionate, lighter attention.

This is the conceptual parent of risk-based monitoring and the risk-based quality management language that runs through ICH E6(R2)/E6(R3). E8(R1) gives the design-stage rationale; the cross-link is [ICH E6 Good Clinical Practice](/articles/ich-e6-good-clinical-practice) and [risk-based monitoring in clinical trials](/articles/risk-based-monitoring-clinical).

### What a critical-to-quality factor is

A CtQ factor is a study attribute that is essential to either:

1. The rights, safety, and wellbeing of participants, or
2. The reliability and interpretability of the study results.

Examples of CtQ factor categories E8(R1) discusses: the relevance of the research question and endpoints, the appropriateness of the study population and eligibility criteria, the choice and integrity of the primary endpoint and its measurement, randomization and blinding integrity, the dose and treatment regimen, the data critical to the primary analysis, and informed consent quality.

The practical filter: a factor is critical if an error in it cannot be fixed later and would undermine the conclusion or harm participants. A typo in a non-key concomitant medication field is not critical. A broken randomization that unblinds the trial, or systematic missing data on the primary endpoint, is.

### How to run the QbD / CtQ exercise: step by step

1. **Convene a cross-functional team early.** Before the protocol is finalized. Include the clinical lead, the statistician, clinical operations, data management, safety/pharmacovigilance, regulatory, and clinical QA. E8(R1) is explicit that quality is a shared responsibility and that input should be sought broadly, including, where useful, from patients.

2. **Articulate the trial objective and the estimand.** You cannot identify what is critical until you know the precise question. This is where E8(R1) and E9(R1) interlock. Define the estimand first (see below), because the estimand tells you which data are critical to the primary analysis.

3. **Identify candidate CtQ factors** across the categories: scientific (endpoints, population, comparator), operational (randomization, blinding, drug supply, data flow), and ethical (consent, safety reporting).

4. **Assess each factor for risk:** likelihood of an error, impact if it occurs, and detectability. This is a standard risk assessment, aligned with ICH Q9 thinking. See [quality risk management](/articles/quality-risk-management).

5. **Decide controls proportionate to risk.** For each CtQ factor, define how it is designed in, how it is monitored, and the tolerance limit (how much deviation is acceptable before action). High-risk factors get tight controls and central/statistical monitoring; low-risk factors get lighter touch.

6. **Document the rationale.** The CtQ assessment and the decisions become part of the design history and feed the monitoring plan, the data management plan, and the statistical analysis plan.

7. **Revisit during conduct.** QbD is not a one-time gate. If an assumption breaks (enrollment is slow, an endpoint behaves oddly, a vendor changes), reassess.

### Acceptance criteria: what good looks like

- A documented CtQ factor list exists, traceable to the protocol objective and estimand.
- Each CtQ factor has a defined risk rating, a control, and where relevant a quantitative tolerance limit (for example, a maximum acceptable rate of missing primary-endpoint data).
- The monitoring plan and data management plan visibly focus effort on CtQ data, not uniformly across all fields.
- Cross-functional sign-off, including QA and statistics, is recorded.

### Worked example: a CtQ factor register (excerpt)

| CtQ factor | Category | Why critical | Risk rating | Control / design feature | Tolerance limit |
|---|---|---|---|---|---|
| Primary endpoint measurement (6-minute walk test) | Scientific | Drives the primary analysis and the claim | High | Standardized test SOP, central training and certification of raters, equipment calibration check | Untrained rater performing any assessment: 0 tolerated |
| Randomization integrity (IRT/IWRS) | Operational | Bias and unblinding destroy interpretability | High | Validated IRT system, blinded kit labels, emergency unblinding log reviewed | Any unauthorized unblinding investigated as critical deviation |
| Eligibility: confirmed diagnosis at screening | Scientific | Wrong population invalidates inference | High | Independent central read of diagnostic imaging before randomization | 0 randomized without confirmed eligibility |
| Primary-endpoint completeness at week 24 | Scientific | Missing data threatens the estimand | High | Visit-window reminders, retention plan, central tracking of missing visits | Missing primary endpoint above prespecified rate triggers escalation |
| Concomitant medication coding (non-rescue) | Operational | Supportive, not key to primary analysis | Low | Standard coding dictionary, periodic review | Routine query handling |

The tolerance limit column is what turns a CtQ register from a wish list into an operational tool. It tells the monitoring and central-statistical-monitoring teams what to watch and when to escalate.

---

## The estimand framework (E9(R1))

This is the part of the topic that most often separates someone who has read the guideline from someone who merely heard the word. Learn it cold.

### Why the estimand exists

A clinical trial estimates a treatment effect. But "treatment effect" is ambiguous once real life intrudes. Patients stop the study drug, start a prohibited rescue medication, switch to the comparator, or die before the endpoint is measured. These are called **intercurrent events** (ICEs). The treatment effect you compute depends entirely on how you handle them. Two analysts can analyze the same dataset and report different numbers, both defensible, because they answered different questions. E9(R1) removes that ambiguity by forcing you to define the question precisely, in advance, as an estimand.

### The five attributes of an estimand

An estimand is fully specified by five attributes. Memorize all five; an interviewer will ask you to list them.

1. **Treatment**: the treatment condition of interest and, where relevant, the comparator (for example, drug X 50 mg once daily versus placebo, each on top of standard of care).
2. **Population**: the patients targeted by the scientific question, defined by key inclusion/exclusion criteria.
3. **Variable (endpoint)**: the measurement obtained on each patient that is used to address the question (for example, change from baseline in HbA1c at week 24).
4. **Intercurrent event handling**: how each anticipated intercurrent event is reflected in the definition of the treatment effect. This is the new, decisive attribute.
5. **Population-level summary**: the statistic that compares treatments across the population (for example, the difference in means, an odds ratio, a hazard ratio).

### The five strategies for handling intercurrent events

E9(R1) defines five named strategies. For each anticipated ICE, the protocol picks one strategy. You must be able to name them, define them, and say when each fits.

| Strategy | What it does | When to use it | Example |
|---|---|---|---|
| **Treatment policy** | Use the value of the variable regardless of whether the ICE occurred; the ICE is part of the treatment condition. | When you care about the effect of the treatment regimen as it would be used in practice, including discontinuation and rescue. Common for the primary estimand in many regulatory settings. | Measure HbA1c at week 24 even for patients who stopped study drug or took rescue; the effect reflects the policy of starting drug X. |
| **Hypothetical** | Envisage a scenario where the ICE would not occur, and estimate the value that would have been observed. | When the question is what the effect would be in the absence of the ICE (for example, if rescue medication were not available). | Effect on blood pressure as if no rescue antihypertensive had been taken. |
| **Composite** | Incorporate the ICE into the variable definition itself, so the ICE becomes part of the (often unfavorable) outcome. | When the ICE is itself a meaningful clinical outcome. | Treatment failure = endpoint not met OR discontinuation due to lack of efficacy; a binary responder definition. |
| **While on treatment** | Use the response only up to the time of the ICE. | When the value while a patient is actually receiving treatment is what matters (often symptomatic relief). | Symptom score measured only while the patient remains on therapy. |
| **Principal stratum** | Restrict the population to the subset (stratum) where the ICE would or would not occur. | When the question is about a specific principal stratum, for example patients who would tolerate the drug. | Effect among patients who would not experience a particular adverse event. |

A single trial usually applies different strategies to different ICEs. Discontinuation of study drug might be handled by treatment policy, while death might be handled by composite or accounted for separately. The combination of all five attributes, with a chosen strategy for each anticipated ICE, defines the estimand.

### Intercurrent events versus missing data: get this distinction right

This trips up a lot of people, including in interviews. An intercurrent event is something that happens (a patient takes rescue medication, discontinues, dies). It changes the meaning of the data, not necessarily its availability. Missing data is the simple absence of a measurement. The two are related but not the same. Under a treatment policy strategy, for instance, you still want the patient's week-24 measurement even after discontinuation, so a discontinued patient who skips the visit creates a missing-data problem on top of the ICE. E9(R1)'s key teaching: define the ICE handling first via the estimand, then deal with whatever data are genuinely missing using a method aligned to the chosen strategy. Do not collapse "patient discontinued" into "data missing" by default; that quietly converts a treatment-policy question into a hypothetical one.

### How to construct an estimand: step by step

1. **State the trial objective in plain clinical language.** "Does adding drug X to standard of care improve walking distance in this population?"
2. **List the anticipated intercurrent events.** Discontinuation for adverse events, discontinuation for lack of efficacy, use of rescue therapy, treatment switching, death. Be exhaustive; this is the design-stage thinking E8(R1) wants.
3. **For each ICE, choose a handling strategy** that matches the clinical question. Justify each choice.
4. **Define the four other attributes** (treatment, population, variable, summary) consistently with those choices.
5. **Write the estimand into the protocol and the statistical analysis plan** as a single, explicit specification.
6. **Choose the main estimator** (the analysis method that targets the estimand) and the **sensitivity analyses** that probe its assumptions.

### Worked example: a fully specified primary estimand

> **Objective:** Estimate the effect of drug X 50 mg once daily versus placebo, each added to standard of care, on glycemic control.
>
> - **Treatment:** Drug X 50 mg once daily plus standard of care, versus placebo plus standard of care, over 24 weeks.
> - **Population:** Adults with type 2 diabetes meeting protocol eligibility, HbA1c 7.5 to 11.0 percent at screening.
> - **Variable:** Change from baseline in HbA1c (percent) at week 24.
> - **Intercurrent event handling:** Discontinuation of randomized treatment and initiation of rescue antihyperglycemic therapy are handled by the **treatment policy** strategy (week-24 HbA1c is used regardless). Death is handled by the **composite** strategy (counted as non-response).
> - **Population-level summary:** Difference between treatment arms in mean change from baseline in HbA1c at week 24.

That single paragraph tells the data management team they must chase week-24 HbA1c even after discontinuation, tells the monitors that completeness of the week-24 visit is a CtQ factor, and tells the statistician exactly what to estimate. This is the line from statistics to data integrity made concrete.

---

## Statistical principles that drive data quality (E9 core)

E9(R1) gets the attention, but the E9 core principles are still the working rules and inspectors still expect them.

### Prespecification

The primary analysis, including the primary endpoint, the estimand, the analysis populations, the statistical model, and the multiplicity strategy, must be defined before unblinding. Prespecification is the firewall against data-driven analysis choices that inflate false-positive rates. In practice this means the Statistical Analysis Plan (SAP) is finalized and version-controlled before database lock, and any change after unblinding is a flagged, justified, documented exception. From a QA view, the audit trail on the SAP and the timing relative to unblinding are inspectable facts.

### Analysis populations

- **Full Analysis Set (FAS):** the set as close as possible to the intention-to-treat ideal: all randomized patients, analyzed by the treatment they were assigned, with minimal and justified exclusions. The ITT principle preserves randomization and avoids bias from post-randomization selection.
- **Per-Protocol Set (PPS):** patients who followed the protocol closely enough (completed treatment, no major deviations). Useful as a supportive analysis, but prone to bias because the exclusions are post-randomization.
- **Safety Set:** patients who received at least one dose, analyzed by treatment actually received. Safety is reported by what people actually took.

Acceptance criterion: the populations are defined in the SAP before unblinding, and the rules for classifying patients into each are unambiguous and applied via documented, reproducible logic. Reclassifying a patient after seeing their outcome is a classic integrity failure.

### Multiplicity

Every additional hypothesis test inflates the chance of a false positive. E9 requires a prespecified strategy to control the family-wise type I error: a fixed hierarchy of tests, a gatekeeping procedure, or an alpha-splitting method. The SAP states the testing order and the alpha allocation. Without this, secondary and subgroup claims are not statistically credible.

### Missing data

Missing data can bias results and reduce power. E9 and the addendum require a prespecified approach. The crude historical default, last-observation-carried-forward, is generally discouraged because it embeds strong, often implausible assumptions. Modern practice uses methods such as mixed models for repeated measures (MMRM) or multiple imputation, with the imputation assumption (for example, missing at random) chosen to align with the estimand strategy. The handling of missing data must be consistent with the ICE strategy, not chosen independently.

### Sensitivity and supplementary analyses

E9(R1) draws a sharper line here than the original E9. A **sensitivity analysis** keeps the same estimand but relaxes the assumptions of the main estimator (for example, assume data are missing not at random and stress-test the result). A **supplementary analysis** explores additional questions, sometimes a different estimand, to give context. The acceptance bar: sensitivity analyses for the primary estimand are prespecified, and the conclusion is considered reliable when the result is stable across them. A primary result that collapses under a reasonable sensitivity analysis is fragile and inspectors and reviewers will probe it.

---

## From statistics to data integrity: the link QA must own

This is the heart of why quality people care about E8(R1) and E9.

The estimand defines which data are critical. If your primary estimand uses a treatment policy strategy, then post-discontinuation data on the primary endpoint are CtQ data: you must collect them, and they must be ALCOA+ compliant. If your data management team treats discontinuation as "patient off study, stop collecting," they have silently broken the estimand. The integrity of the result then depends on the integrity of exactly the data points the statistics demand.

Concrete consequences for the quality function:

- **Source data and SDV** focus on CtQ variables: the primary endpoint, key safety data, randomization, eligibility. See [source data and source data verification in clinical trials](/articles/source-data-and-sdv-clinical).
- **Central and statistical monitoring** watch the CtQ tolerance limits: missing-data rates on the primary endpoint, randomization balance, eligibility violations, unexpected data patterns that suggest fabrication or systematic error. See [risk-based monitoring](/articles/risk-based-monitoring-clinical).
- **Audit trail review** on the systems that hold CtQ data (the EDC, the IRT/randomization system, the lab system) must be able to show that critical values were entered, changed, and approved with attribution and reason. See [audit trail design and review](/articles/audit-trail-design-and-review) and [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11).
- **The ALCOA+ principles** apply to the CtQ data with no compromise. See [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and [data integrity foundations](/articles/data-integrity-foundations).

The unifying idea: data integrity effort should be proportionate to data criticality, and the estimand plus the CtQ register are the documents that define criticality. This is the same logic as [data criticality and data risk](/articles/data-criticality-and-data-risk), applied to clinical trials.

---

## Roles and responsibilities

| Role | Responsibility under E8(R1)/E9 |
|---|---|
| Sponsor (overall) | Owns quality by design and the CtQ approach; ensures the estimand framework is applied; accountable for prespecification and the integrity of the analysis. |
| Clinical lead / medical | Defines the clinical question and the objective that the estimand must capture; selects endpoints; justifies ICE strategies clinically. |
| Biostatistician | Co-defines the estimand with the clinical lead; writes the statistical sections of the protocol and the SAP; selects estimators, multiplicity strategy, missing-data methods, and sensitivity analyses; owns prespecification timing. |
| Clinical operations / monitoring | Operationalizes CtQ controls; runs risk-based and central monitoring against tolerance limits; manages site oversight. |
| Data management | Builds the EDC to capture CtQ data including post-ICE data when the estimand requires it; writes the data management plan aligned to the estimand; manages query and reconciliation. |
| Pharmacovigilance / safety | Ensures safety CtQ factors (SAE reporting, safety endpoints) are captured and reconciled. See [pharmacovigilance and safety data integrity](/articles/pharmacovigilance-safety-data-integrity). |
| Clinical QA / GCP audit | Verifies that the CtQ approach is documented and followed, audits the systems holding CtQ data, checks SAP prespecification and version control, prepares for inspection. See [GCP audits and inspections](/articles/gcp-audits-and-inspections). |
| Regulatory affairs | Aligns estimand and design choices with health authority expectations; manages scientific advice and meeting interactions. See [health authority meetings](/articles/health-authority-meetings). |
| IRB/IEC and DMC | Protect participants; the DMC reviews accumulating safety/efficacy data under a charter that must not compromise blinding or the prespecified analysis. |

The single most common organizational failure: QA and data management are brought in after the protocol and SAP are written, so the CtQ thinking and the data-collection consequences of the estimand were never operationalized.

---

## Common mistakes and inspection-finding patterns

These are generic patterns regulators and auditors cite. No company names, no invented citations.

- **Objective stated without an estimand.** The protocol says "demonstrate superiority" but never defines how discontinuation, rescue, or death affect the treatment effect. Reviewers send questions; the analysis becomes contestable.
- **Treating intercurrent events as missing data by default.** Stopping data collection at discontinuation when the estimand needs post-discontinuation data. This breaks a treatment policy estimand and biases the result. A frequent root cause is an EDC that closes the casebook on discontinuation.
- **Missing-data method inconsistent with the estimand.** Choosing an imputation assumption that does not match the chosen ICE strategy, so the analysis answers a different question than the one defined.
- **Post-hoc analysis presented as confirmatory.** Changing the primary endpoint, population, or model after seeing data, without prespecification and without flagging it. This is both a statistical and a data-integrity issue. The inspectable evidence is the SAP version history and its timing relative to unblinding.
- **No multiplicity control for secondary claims.** Multiple secondary or subgroup tests reported as if each were independently significant, with no family-wise error control.
- **Per-protocol set used as the primary basis for an efficacy claim** in a superiority trial, exploiting post-randomization exclusions to flatter the result.
- **CtQ factors not defined, so monitoring is undifferentiated.** Either everything is verified at huge cost, or nothing is prioritized and the critical data go unchecked. Inspectors ask how the sponsor decided what to monitor.
- **Reclassification of patients between analysis populations after unblinding** without a documented, prespecified rule. A classic integrity finding.
- **SAP finalized after database lock or after unblinding.** Even if benign, this removes the prespecification firewall and invites the question of whether choices were data-driven.
- **Randomization or blinding integrity not protected.** Unauthorized unblinding, predictable allocation, or poor IRT controls. Because randomization is almost always a CtQ factor, this is a high-severity finding.

---

## Interview-ready: questions you will be asked and how to answer

**"What is an estimand and why does it matter?"**
An estimand is a precise definition of the treatment effect a trial estimates, specified by five attributes: treatment, population, variable, intercurrent event handling, and population-level summary. It matters because without it the same data can yield different defensible answers depending on how intercurrent events are handled. E9(R1) (2019) made it the bridge between the clinical question and the statistical analysis.

**"Name the five strategies for handling intercurrent events."**
Treatment policy, hypothetical, composite, while on treatment, and principal stratum. Be ready to give a one-line use case for each (see the table above).

**"What is the difference between an intercurrent event and missing data?"**
An intercurrent event is something that happens after randomization that alters the meaning of the measurement (discontinuation, rescue, death). Missing data is the simple absence of a value. You define ICE handling via the estimand first, then handle genuinely missing data with a method aligned to that strategy. Do not equate discontinuation with missing data.

**"What are the main analysis populations and when do you use each?"**
Full Analysis Set (close to ITT, preserves randomization, primary for efficacy), Per-Protocol Set (supportive, prone to selection bias), Safety Set (analyzed by treatment received). The FAS is the primary efficacy basis in superiority trials because it protects randomization.

**"What is quality by design in a clinical trial and what is a critical-to-quality factor?"**
QbD, per E8(R1) (2021), means building quality into design rather than inspecting it in afterward. A CtQ factor is a study attribute essential to participant safety or to the reliability and interpretability of results. You identify them cross-functionally early, rate their risk, set tolerance limits, and focus oversight there.

**"How does the estimand connect to data integrity?"**
The estimand defines which data are critical. If the primary estimand uses treatment policy, post-discontinuation primary-endpoint data are CtQ data and must be collected and kept ALCOA+ compliant. So the statistical definition drives what data you must protect, monitor, and verify.

**"What is the difference between a sensitivity analysis and a supplementary analysis?"**
A sensitivity analysis keeps the same estimand and relaxes the main estimator's assumptions to test robustness. A supplementary analysis explores additional questions, sometimes a different estimand. A reliable primary result is stable across prespecified sensitivity analyses.

**"Why is prespecification important and how is it enforced?"**
Prespecification stops data-driven analysis choices that inflate false positives. It is enforced by finalizing and version-controlling the SAP before unblinding/database lock; the timing and version history are inspectable.

**"How do E8(R1), E6, and E9 relate?"**
E8(R1) is the umbrella: general considerations and quality by design. E6 governs Good Clinical Practice conduct. E9 (with R1) governs the statistics and the estimand. E8(R1) is read first because its design decisions constrain the others.

---

## Practical tips

- **Define the estimand before the CtQ register.** The estimand tells you which data are critical, which is exactly what the CtQ exercise needs as input. Doing the register first leads to guessing.
- **Make the EDC honor the estimand.** If the estimand needs post-discontinuation data, the casebook must not close on discontinuation. Verify this during database build user acceptance testing, not after first patient in.
- **Write tolerance limits as numbers where you can.** "Low missing data" is unauditable. "Primary endpoint missing rate above the prespecified threshold triggers escalation" is.
- **Keep the SAP under formal version control with a hard rule on unblinding.** Treat the unblinding timestamp as a controlled, evidenced event.
- **Align the missing-data method to the ICE strategy explicitly in the SAP**, in one sentence per ICE, so a reviewer can see the logic.
- **Involve QA and data management at protocol concept stage.** The cost of retrofitting the estimand's data needs after go-live is high and sometimes unrecoverable.
- **For the interview, be able to draw the five estimand attributes and the five ICE strategies from memory.** That single demonstration signals you actually understand E9(R1).

---

## Related articles

- [ICH E6 Good Clinical Practice](/articles/ich-e6-good-clinical-practice)
- [Clinical QA and GCP data integrity](/articles/clinical-qa-gcp-data-integrity)
- [Risk-based monitoring in clinical trials](/articles/risk-based-monitoring-clinical)
- [Source data and source data verification](/articles/source-data-and-sdv-clinical)
- [Clinical data management and CDISC](/articles/clinical-data-management-cdisc)
- [eTMF and the trial master file](/articles/etmf-trial-master-file)
- [Quality risk management](/articles/quality-risk-management)
- [Data criticality and data risk](/articles/data-criticality-and-data-risk)
- [ALCOA+ in detail](/articles/alcoa-plus-deep-dive)
- [GCP audits and inspections](/articles/gcp-audits-and-inspections)
- [Pharmacovigilance and safety data integrity](/articles/pharmacovigilance-safety-data-integrity)
