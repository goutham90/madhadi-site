---
title: "Continued Process Verification: Building a Stage 3 CPV Program"
description: "How to design and run a Stage 3 Continued Process Verification program: trending plans, control charts, statistical signal rules, the CPV protocol, and the annual CPV report. Built for biologics and small molecule manufacturers under the FDA lifecycle model."
pubDate: 2026-06-20
tags: ["cpv", "process validation", "control charts", "spc", "continued process verification", "quality assurance", "trending", "biologics"]
pillar: "quality-assurance"
tier: "Advanced"
---

Stage 3 is where most validation programs quietly fall apart. Stage 1 (process design) and Stage 2 (process qualification, ending in PPQ) get attention, budget, and a clean report. Then the product goes commercial, the validation team moves on, and the "ongoing monitoring" requirement turns into a quarterly spreadsheet nobody reads. Inspectors know this pattern, and Continued Process Verification (CPV) findings show up in inspection reports for exactly this reason: a program that exists on paper but never actually detects, investigates, or acts on a process shift.

This article treats Stage 3 as its own discipline. If you run a CPV program, sit on a CPV review board, write the trending plan, or have to defend the program in an inspection, this is the material you need to do the job and to answer the questions an inspector or interviewer will ask.

---

## What CPV is and why it is required

Continued Process Verification is the third stage of the process validation lifecycle. It is the ongoing assurance, gathered during routine commercial production, that the process stays in a state of control. It is not a one-time study. It runs for the entire commercial life of the product.

### The regulatory basis

The lifecycle model comes from the FDA guidance **Process Validation: General Principles and Practices (January 2011)**. That guidance defines three stages:

- Stage 1, Process Design
- Stage 2, Process Qualification
- Stage 3, Continued Process Verification

The guidance describes Stage 3 as an ongoing program to collect and analyze product and process data that relate to product quality, with the explicit goal of detecting unplanned departures from the process as designed. It also ties Stage 3 to the **21 CFR 211.180(e)** requirement to review records annually to evaluate quality standards and determine the need for changes, and to **21 CFR 211.110(a)**, which requires control procedures to monitor output and validate performance of processes that may cause variability in the characteristics of in-process material and the drug product.

> 21 CFR 211.180(e): "Records...shall be reviewed annually to evaluate the quality standards of each drug product to determine the need for changes in drug product specifications or manufacturing or control procedures."

For the European Union, the equivalent expectation is in **EudraLex Volume 4, Annex 15 (Qualification and Validation, 2015)**, which describes ongoing process verification during the lifecycle, and in **ICH Q8(R2), Q9, Q10, and Q11**, which frame the science and risk basis. ICH Q10 (Pharmaceutical Quality System) places ongoing monitoring inside the broader quality system and links it to continual improvement and management review. The EU's continuous/ongoing process verification language sometimes appears as "OPV" or "ongoing process verification," but the intent is the same as the FDA's Stage 3 CPV.

For biologics there is no separate rule. The same lifecycle applies, and the FDA 2011 guidance explicitly covers both drugs and biologics. The practical difference is variability: biological processes carry more inherent variation, so the statistical approach has to be designed for it rather than copied from a small molecule template.

### The quality rationale

The risk that CPV controls is **process drift that is too slow or too subtle for batch disposition to catch**. Batch release looks at one batch against specification. A process can stay inside specification for forty batches while a critical parameter creeps steadily toward the edge. CPV is the mechanism that sees the creep, raises a signal before a batch fails, and forces an investigation while there is still room to act. It is the difference between detecting a problem at batch 41 (a confirmed out-of-specification result, a possible recall) and detecting it at batch 28 (an out-of-trend signal, a controlled investigation).

CPV also closes the loop on the validation effort. PPQ demonstrated the process works under a small number of batches. CPV is the evidence that the conclusion still holds across hundreds of batches, multiple raw material lots, several operators, and seasonal variation that no three-batch PPQ could ever capture.

---

## The structure of a CPV program

A complete CPV program has four governing documents and one routine output. Getting the document architecture right is half the battle, because inspectors trace from the plan to the data to the report and look for gaps.

| Document | Purpose | Frequency |
|---|---|---|
| CPV master plan / procedure | Defines the program: scope, governance, signal rules, escalation, roles | Static, periodically reviewed |
| Product CPV plan (monitoring plan) | The specific parameters, methods, charts, and limits for one product | Per product, reviewed annually |
| CPV protocol (Stage 3a) | The intensified-monitoring study right after PPQ | Once, post-PPQ |
| Periodic CPV data review records | The actual trending output and signal evaluations | Monthly, quarterly, or per defined cadence |
| Annual CPV report | The yearly conclusion on process state of control | Annually |

### Stage 3a versus Stage 3b

A practical and inspection-defensible CPV program splits Stage 3 into two phases:

- **Stage 3a, intensified monitoring.** Immediately after PPQ, before you have enough commercial batches to set statistically meaningful control limits, you monitor at a higher frequency and against provisional limits (often the PPQ data plus the design space). This phase is sometimes run under a formal CPV protocol. It runs until you accumulate enough batches to establish stable control limits, commonly cited as roughly 20-30 batches, though the real number depends on process variability and batch cadence.
- **Stage 3b, routine monitoring.** Once limits are established and locked, you transition to the steady-state monitoring cadence defined in the product CPV plan.

The transition from 3a to 3b is itself a controlled, documented decision. Inspectors will ask how you decided the process was ready for routine monitoring and where that decision is recorded.

---

## What goes in the product CPV plan

The product CPV plan is the operational heart of the program. It is the document that says, for this specific product, exactly what gets monitored and how a signal is handled. Write it so a new analyst could run the program from it without asking questions.

Contents:

1. **Product and process scope.** The product, strengths, sites, and the process steps in scope. If you manufacture at more than one site, state whether monitoring is per site or pooled, and justify it.
2. **Parameters and attributes selected for monitoring.** This is the most scrutinized section. See the selection method below.
3. **Data sources.** Where each value comes from: the batch record, the LIMS, the historian, the MES. Name the system category, not just "the system."
4. **Statistical methods and chart types** for each parameter, including subgrouping and the transformation used for non-normal data.
5. **Control limits and specification limits**, clearly distinguished, with the basis for the control limits and the data set they were derived from.
6. **Signal rules** (the run rules that define an out-of-trend condition).
7. **Monitoring frequency and review cadence.**
8. **Roles and escalation path.**
9. **Annual review and limit-recalculation triggers.**
10. **Links to the deviation, CAPA, and change control procedures.**

### Selecting what to monitor

You do not monitor everything. You monitor what carries process and patient risk, and you justify the selection from the risk assessment, not from convenience.

The selection should be **traceable to the Stage 1 risk assessment and the critical quality attributes (CQAs) and critical process parameters (CPPs)** identified there. The standard hierarchy:

- All **CQAs** of the drug substance and drug product.
- All **CPPs** that affect those CQAs.
- **Key process parameters (KPPs)** and key performance indicators that, while not strictly critical, are leading indicators of process health (yield, step recoveries, cycle times, bioburden, fill weight variation).
- Selected **in-process controls** and **raw material attributes** where they are known drivers of variability.

A defensible plan shows the line from each monitored parameter back to a risk rating. A plan that monitors fifteen easy-to-pull parameters and ignores a hard-to-extract CPP is a finding waiting to happen.

For the cross-link to how criticality is established, see [quality risk management](/articles/quality-risk-management) and [quality by design and DoE](/articles/quality-by-design-and-doe).

---

## Control charts: the engine of CPV

Statistical Process Control (SPC) is the analytical core of Stage 3. If you cannot speak fluently about control charts in an interview, you cannot claim to run CPV. Here is what you actually need.

### Specification limits versus control limits

This distinction is the single most common conceptual failure in CPV, and inspectors test it directly.

- **Specification limits (USL/LSL)** come from the registered specification and the dossier. They define what is acceptable for release. They are set by the product, not by the process.
- **Control limits (UCL/LCL)** come from the process data itself. They describe what the process actually does. They are typically set at the process mean plus or minus three standard deviations of the relevant variation.

A process can be perfectly inside specification and still be out of control (showing a shift or trend). A point inside the control limits is "in control." A point inside the specification but outside the control limits is a **process signal**, not a quality failure, and it is exactly what CPV is meant to catch. Never set control limits equal to specification limits. Doing so defeats the entire purpose and is a frequent finding.

### Choosing the chart type

| Data and structure | Chart |
|---|---|
| One value per batch (most CPV cases: assay, pH, a single yield) | Individuals and moving range (I-MR) |
| Subgroups of constant size (e.g., several fill-weight readings per batch) | X-bar and R, or X-bar and S |
| Count or rate data (e.g., particulate counts, defect rates) | c, u, np, or p charts |
| Rare-event or low-defect data | Trend on time-between-events or a transformed metric |
| Slow drift detection on a stable mean | EWMA or CUSUM as a supplement to I-MR |

For most pharmaceutical and biologics CPV, **I-MR (individuals and moving range)** is the workhorse, because you usually get one result per batch and batches are the natural unit. EWMA and CUSUM are valuable additions specifically because they catch small, sustained drifts that Shewhart limits miss.

### Establishing control limits, step by step

1. **Gather a stable baseline data set.** Use batches that represent the validated, stable process. Many programs use the PPQ batches plus the first commercial batches. Confirm there were no special-cause events (no excluded deviations sitting silently in the data).
2. **Check for normality and independence.** Run a normality test (for example, Anderson-Darling) and look at the data over time. Biological assays often are not normal and may need a transformation (log, Box-Cox) before limits mean anything.
3. **Calculate the centerline and limits.** For I-MR, the centerline is the mean; the control limits are mean plus or minus 2.66 times the average moving range (the standard I-MR constant), which estimates 3-sigma. Do not just compute mean plus or minus 3 times the raw standard deviation if the data is autocorrelated or non-normal.
4. **Verify the baseline is itself in control.** Apply the run rules to the baseline. If the baseline already shows signals, you cannot use it to set limits; investigate and clean it first.
5. **Lock the limits and document the basis.** Record the data set, the date range, the number of batches, the method, and any exclusions with justification. Limits should not float every time you add a batch.
6. **Define the recalculation trigger.** State in the plan when limits are recalculated (for example, at annual review, after a validated process change, or after a defined number of new batches), and require that recalculation go through a controlled, approved record. Recalculating limits to silence a signal is data integrity misconduct, full stop.

For the underlying statistics and capability math, see [statistics in quality: Cpk and control charts](/articles/statistics-in-quality-cpk-control-charts).

### Process capability

Beyond control charts, CPV reports process capability against specification:

- **Cp and Cpk** measure capability when the process is stable. Cpk accounts for centering; Cp does not. A common internal target is Cpk at or above 1.33, but the appropriate target depends on the criticality and the consequence of failure.
- **Pp and Ppk** measure overall performance using the total variation across the whole data set, not just within-subgroup variation. Ppk is usually the more honest number for a long CPV data set because it captures batch-to-batch variation.

Report both, and be ready to explain the difference. A high Cpk with a low Ppk tells you the within-batch variation is fine but the process mean is wandering between batches, which is a CPV signal.

---

## Signal rules: defining out-of-trend

A control chart is useless without explicit rules for what counts as a signal. Define these in the plan, in advance, and apply them consistently. The standard set is the **Nelson rules** or the closely related **Western Electric rules**. You do not have to use all eight Nelson rules; pick a defensible subset and justify it.

Common rules used in CPV:

| Rule | Signal | What it detects |
|---|---|---|
| 1 | One point beyond 3 sigma (outside a control limit) | A gross shift or special cause |
| 2 | Nine consecutive points on one side of the centerline | A sustained mean shift |
| 3 | Six consecutive points steadily increasing or decreasing | A trend or drift |
| 5 | Two of three consecutive points beyond 2 sigma on the same side | An emerging shift |
| 6 | Four of five consecutive points beyond 1 sigma on the same side | A smaller sustained shift |

Each signal type should map to a defined response in the plan. Not every signal is a deviation. A single rule-1 violation usually triggers a documented assessment; a confirmed trend (rule 2 or 3) usually triggers a formal investigation. The plan must say which is which, so the response is not improvised under pressure.

The relationship to out-of-specification and out-of-trend handling matters: an out-of-trend (OOT) signal is a process signal, not necessarily a failing result, and the OOT investigation is distinct from an OOS investigation. See [out-of-trend investigations](/articles/out-of-trend-investigations) and [OOS investigation process](/articles/oos-investigation-process).

---

## A worked example

A monoclonal antibody drug substance process monitors final protein concentration (a CQA, target 50 mg/mL, specification 45.0 to 55.0 mg/mL) using an I-MR chart, one result per batch.

Baseline (PPQ plus first commercial batches, 25 batches):

- Mean = 50.2 mg/mL
- Average moving range = 0.85 mg/mL
- UCL = 50.2 + (2.66 x 0.85) = 52.46 mg/mL
- LCL = 50.2 - (2.66 x 0.85) = 47.94 mg/mL

Note the control limits (47.94 to 52.46) sit well inside the specification (45.0 to 55.0). That gap is healthy: it means the process has room before a quality failure, and signals will fire long before a batch goes out of specification.

Now the next ten batches come in:

| Batch | Result (mg/mL) | Within control limits? | Notes |
|---|---|---|---|
| 26 | 50.1 | Yes | |
| 27 | 50.4 | Yes | |
| 28 | 50.6 | Yes | |
| 29 | 50.8 | Yes | Now above centerline |
| 30 | 51.0 | Yes | |
| 31 | 51.1 | Yes | |
| 32 | 51.3 | Yes | |
| 33 | 51.4 | Yes | Rule 2 candidate forming |
| 34 | 51.6 | Yes | |
| 35 | 51.5 | Yes | |

Every single batch is inside specification, and every batch is inside the control limits. Batch disposition sees nothing wrong. But CPV sees a problem: from batch 28 onward there are eight consecutive points above the centerline and a clear upward march (a rule-3 / rule-2 pattern). This is an **out-of-trend signal**. The process mean has shifted up by roughly 1.3 mg/mL.

The CPV response: raise an OOT, open an investigation, look for the assignable cause (a new raw material lot, a chromatography resin reaching end of life, an analytical method shift, a calibration change). You caught a drift while concentration was still near 51.5 mg/mL with the spec ceiling at 55.0. Without CPV, this same drift continues unseen until a batch crosses 55.0, becomes an OOS, and possibly a recall. That contrast is the entire value proposition of Stage 3, and it is the answer you give when an interviewer asks "why bother with control limits if the product is passing spec?"

---

## The CPV protocol (Stage 3a)

The Stage 3a protocol governs the intensified-monitoring period right after PPQ. It is a formal, pre-approved document. Its sections:

1. **Purpose and scope.** Which product, process, and site; the period of intensified monitoring.
2. **Parameters monitored** (often broader than the steady-state list, because you are still confirming which parameters matter).
3. **Sampling and monitoring frequency** (higher than Stage 3b).
4. **Provisional limits** and their basis (design space, PPQ data, registered limits).
5. **Statistical methods.**
6. **Acceptance criteria for the phase**, including the criteria for declaring the process stable and ready to transition to Stage 3b.
7. **The minimum number of batches** before limit-setting and transition.
8. **Roles, review, and approval.**

The acceptance criteria are what make it a protocol rather than a plan: a protocol has a defined endpoint and a pass/fail conclusion. The Stage 3a protocol concludes with a report that either confirms readiness for routine monitoring or extends intensified monitoring with rationale.

Cross-links: the upstream qualification is covered in [process performance qualification (PPQ)](/articles/process-performance-qualification-ppq) and the overall framework in [process validation lifecycle](/articles/process-validation-lifecycle). For biologics specifics, see [process validation for biologics](/articles/process-validation-for-biologics).

---

## The annual CPV report

The annual CPV report is the document that says, in writing, whether the process remained in a state of control for the year. It is closely related to, but not the same as, the Annual Product Review / Product Quality Review. Many sites integrate CPV into the APR/PQR; others keep a standalone CPV report and reference it from the APR. Either is acceptable if the data and conclusions are real.

### What goes in it

1. **Scope and period.** Product, sites, batches included (by lot number), the reporting period.
2. **Parameters reviewed**, with the chart for each, the centerline, and the limits.
3. **Number of batches and any exclusions**, each exclusion justified and traceable to a deviation.
4. **Signals detected during the period**, each cross-referenced to its OOT/deviation/investigation record and the outcome.
5. **Capability indices** (Cpk/Ppk) per parameter, with trend versus the prior year.
6. **Limit recalculations** performed during the year, with the basis and the change-control reference.
7. **Process changes** during the period and their impact on monitoring.
8. **Conclusion on state of control.** An explicit statement: the process did or did not remain in a state of control, with rationale.
9. **Recommendations and actions.** Limit updates, parameters to add or retire, CAPAs, escalations to management review.
10. **Approvals.** QA, process owner/SME, and as defined.

### Acceptance criteria: what a good report looks like

- Every monitored parameter has a chart and a stated conclusion. No parameter is silently dropped.
- Every signal has a documented disposition. There are no charts showing obvious trends with no associated investigation.
- The conclusion is supported by the data shown, not asserted. "The process remained in a state of control" must be defensible from the charts in the report.
- Excluded data is justified and the exclusions do not flatter the conclusion.
- Recommendations are acted on, and last year's recommendations are shown to have been closed. A report that recommends the same fix three years running is a sign the program has no teeth.
- The report feeds management review under [ICH Q10 management review](/articles/management-review-q10).

For the broader annual review, see [annual product review / PQR](/articles/annual-product-review-pqr).

---

## Roles and responsibilities

CPV fails when ownership is fuzzy. Assign it explicitly in the plan.

| Role | Responsibility |
|---|---|
| Process owner / manufacturing SME | Owns process performance; explains shifts; drives assignable-cause investigation; proposes process changes |
| MSAT / process engineering / validation | Builds and maintains charts, sets and recalculates limits, runs the statistical analysis, authors the CPV plan and reports |
| Quality Assurance | Approves the plan, protocol, and reports; ensures signals are investigated through the deviation/CAPA system; owns state-of-control determination |
| QC / analytical | Provides the data; flags method changes that could masquerade as process shifts |
| Statistician (where available) | Defines chart types, transformations, subgrouping, and signal rules; validates limit-setting methodology |
| CPV review board / committee | Periodic cross-functional review of signals, trends, and recommendations; escalation point |
| Site quality / management | Receives the annual conclusion via management review; resources CAPAs |

A common organizational mistake is letting the group that owns process performance also own the limit-setting and the signal disposition with no independent quality check. QA's role is to keep the program honest: to ensure a signal that is inconvenient still gets investigated and that limits are not quietly widened to make problems disappear.

For the broader role map, see [GxP roles and responsibilities](/articles/gxp-roles-responsibilities).

---

## Common mistakes and inspection-finding patterns

These are the patterns that get cited. Each is generic and reflects what regulators commonly find.

1. **A program that exists but never produces a signal or an action.** Charts are generated, filed, and never reviewed in a way that drives anything. Inspectors look for the closed loop: signal, investigation, action. No actions over a long period with visible trends in the data is a red flag, not a clean bill of health.

2. **Control limits set equal to specification limits.** This guarantees the program never fires until a batch is already failing, which defeats the early-warning purpose. A frequent and easily detected finding.

3. **No statistical justification for limits or chart choice.** Using mean plus or minus 3 standard deviations on autocorrelated or non-normal data, or using a Shewhart chart where the data demands a transformation, produces meaningless limits.

4. **Recalculating limits to absorb a drift.** Quietly widening limits or shifting the centerline so a trending process stays "in control" is a data integrity problem and one of the more serious CPV findings. Limit changes must be controlled, justified, and not driven by a desire to silence a signal.

5. **Selection of monitored parameters not tied to risk.** Monitoring what is easy to extract instead of what the risk assessment says matters. A CPP missing from the monitoring plan with no rationale is a classic gap.

6. **Trends visible in the data with no investigation.** An obvious upward march across many batches, all inside spec, with no OOT raised. This is the worst kind of finding because the data shows the company had the information and did nothing.

7. **Annual report conclusions not supported by the data.** "State of control maintained" stated over charts that visibly show signals. The conclusion has to follow from the evidence.

8. **Stage 3a never formally closed or transition undocumented.** Intensified monitoring drifts into routine monitoring with no record of the decision, no established limits, and no defined endpoint.

9. **Method-driven shifts misread as process shifts (and vice versa).** A change in the analytical method, a new reference standard, or a recalibration shifts the data, and the team chases a process cause that does not exist, or worse, attributes a real process shift to "the method" with no evidence.

10. **No integration with deviation, CAPA, and change control.** The CPV program runs in a silo and signals do not flow into the formal quality systems, so there is no auditable trail of action. See [deviation management](/articles/deviation-management) and [what is a CAPA](/articles/what-is-a-capa).

---

## Interview-ready questions and answers

These are the questions that get asked for CPV, validation, and MSAT roles, and how to answer them well.

**"Walk me through the three stages of process validation and where CPV sits."**
Stage 1 is process design, Stage 2 is process qualification ending in PPQ, Stage 3 is continued process verification, the ongoing commercial monitoring. CPV is Stage 3 and runs for the commercial life of the product. The framework is the FDA 2011 process validation guidance, with EU Annex 15 as the European equivalent.

**"What is the difference between a specification limit and a control limit?"**
Specification limits come from the registered specification and define what is acceptable for release. Control limits come from the process data and describe what the process actually does, typically mean plus or minus three sigma. A batch can be inside spec and outside the control limits, and that is exactly the signal CPV exists to catch. Setting control limits equal to spec limits defeats the program.

**"A parameter is trending upward but every batch is inside specification. What do you do?"**
That is a process signal even though there is no quality failure. I would confirm the signal against the predefined run rules, raise an out-of-trend, and investigate for an assignable cause: raw material lot change, column or resin aging, a method or calibration shift, equipment. The point of catching it now is to act before the trend reaches the specification and becomes an OOS or a recall.

**"How do you set control limits, and how many batches do you need?"**
From a stable baseline data set, usually PPQ plus early commercial batches. Check normality and independence, transform if needed, compute the centerline and 3-sigma limits using the right constant for the chart type, verify the baseline itself is in control, then lock and document the limits with the data set and exclusions. A common figure is around 20 to 30 batches for stable limits, but it depends on process variability and cadence, which is why Stage 3a uses provisional limits until you have enough data.

**"What is the difference between Cpk and Ppk, and which do you report for CPV?"**
Cpk uses within-subgroup (short-term) variation; Ppk uses total (long-term) variation across the whole data set. For a long CPV data set, Ppk is the more honest number because it captures batch-to-batch variation. A high Cpk with a low Ppk means the within-batch spread is fine but the mean is wandering, which is itself a CPV finding.

**"When would you recalculate control limits, and what is the risk?"**
At defined triggers: annual review, after a validated process change, or after accumulating a defined number of new stable batches, always through a controlled, approved record. The risk and the line you never cross is recalculating limits to make a trending process look in control. That is a data integrity violation.

**"How does CPV relate to the Annual Product Review?"**
They overlap and are often integrated. The APR/PQR is the broader yearly review under 21 CFR 211.180(e); CPV is the statistical state-of-control element within or referenced by it. The CPV annual report concludes whether the process stayed in control and feeds management review under ICH Q10.

**"Which chart would you use for one assay result per batch?"**
Individuals and moving range (I-MR). Most pharma CPV produces one value per batch, so I-MR is the default. I would add EWMA or CUSUM where I specifically need to catch small sustained drifts that Shewhart limits miss.

---

## Practical tips

- **Build the charts where the data already lives.** Pull from validated sources (LIMS, the historian, MES) rather than re-keying into a spreadsheet. Manual transcription into an uncontrolled spreadsheet is both an error source and a data integrity exposure. If you do use spreadsheets, they need validation. See [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation).
- **Separate the analytical signal from the process signal.** Keep a log of method changes, reference standard changes, and major recalibrations alongside the process data so you can immediately rule a method cause in or out when something shifts.
- **Do not over-monitor.** Forty parameters that nobody reviews is worse than twelve that get real attention every cycle. Tie the list to risk and prune it at annual review.
- **Predefine the signal-to-action map.** Decide in the plan which signals trigger an assessment versus a formal investigation, so the response is consistent and not negotiated each time under schedule pressure.
- **Treat exclusions as a controlled act.** Every excluded data point needs a documented reason traceable to a deviation. Inspectors specifically look at what you removed and why.
- **Make Stage 3a end on a date and a decision.** Write the transition criteria into the protocol so the move to routine monitoring is an evidence-based, approved event, not a drift.
- **Review CPV in a cross-functional forum.** A standing review board that includes the process owner, MSAT, and QA keeps signals from being dismissed by a single function with an incentive to look the other way.

### Related reading

- [Process validation lifecycle](/articles/process-validation-lifecycle)
- [Process performance qualification (PPQ)](/articles/process-performance-qualification-ppq)
- [Process validation for biologics](/articles/process-validation-for-biologics)
- [Statistics in quality: Cpk and control charts](/articles/statistics-in-quality-cpk-control-charts)
- [Out-of-trend investigations](/articles/out-of-trend-investigations)
- [Annual product review / PQR](/articles/annual-product-review-pqr)
- [Quality risk management](/articles/quality-risk-management)
- [Management review (ICH Q10)](/articles/management-review-q10)
