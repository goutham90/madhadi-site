---
title: "Executing Method Validation: Specificity, Linearity, Accuracy, Precision, and Robustness"
description: "A bench-level walkthrough of how to actually run each ICH Q2 validation study, from spiking and system suitability to setting defensible acceptance criteria and writing the report."
pubDate: 2026-06-20
tags: ["method validation", "ich q2", "analytical", "specificity", "accuracy", "precision", "linearity", "robustness"]
pillar: "equipment-qualification"
tier: "Advanced"
---

Validating an analytical method is where the protocol stops being a document and becomes pipetting. The protocol tells you to demonstrate accuracy across 80-120 percent of nominal; the bench reality is deciding how many spike levels, what diluent, which reference standard lot, how to handle a recovery outlier at 80 percent, and whether your single failing injection means a method failure or a sequence failure. This article is about the second part. It assumes you already know what a validation protocol looks like and now have to run one and pass it.

The framework is ICH Q2(R2), *Validation of Analytical Procedures*, adopted by ICH in 2023 and the version most agencies now expect. It is paired with ICH Q14, *Analytical Procedure Development*, also 2023, which formalizes the development knowledge that feeds your validation. In the United States the underlying expectation lives in 21 CFR 211.165(e), which requires that the accuracy, sensitivity, specificity, and reproducibility of test methods be established and documented, and in 21 CFR 211.194(a)(2), which requires the statement of each method used. USP General Chapter <1225> *Validation of Compendial Procedures* mirrors ICH Q2 for compendial work, and <1210> *Statistical Tools for Procedure Validation* gives the math. Keep those four references on the protocol cover and you can defend almost any design decision an inspector challenges.

---

## Before you spike anything: the pre-execution gate

Most validation failures are not analytical. They are readiness failures that surface mid-run and force a restart. Close these before you weigh the first standard.

**Method is locked.** The procedure under validation must be frozen at a controlled revision. You cannot adjust the gradient, the integration parameters, or the sample prep partway through and call the earlier data part of the same validation. If development is still moving, you are not ready. This is the single most common reason validation data gets thrown out.

**Instrument is qualified.** The HPLC, GC, dissolution bath, or plate reader must be within its qualification and calibration window for the entire execution period. If the IQ/OQ/PQ is stale or a calibration lapses mid-run, the data is suspect. See [analytical-instrument-qualification](/articles/analytical-instrument-qualification) and [calibration-and-metrology-program](/articles/calibration-and-metrology-program). The data system itself must be compliant for the records you are about to generate, see [chromatography-data-system-integrity](/articles/chromatography-data-system-integrity).

**Reference standards are in hand and characterized.** You need a qualified primary or compendial reference standard with a known assigned potency, a certificate, and enough material for the whole study plus repeats. Record the lot and potency on every preparation worksheet. A common mid-study disaster is running out of standard and bridging to a second lot without a documented potency tie-out.

**Acceptance criteria are pre-defined and in the protocol.** Every criterion must be written and approved before execution. Setting or relaxing a limit after seeing the data is the textbook data integrity finding, and inspectors look for it specifically. If your criteria turn out to be wrong, you amend the protocol with a justified, dated, approved change before continuing, not after.

**System suitability is established.** You should already know, from development, what system suitability test (SST) the method needs and roughly where it lands. If you have never run the SST successfully, you are validating an unproven method.

---

## System suitability: the gate every run passes through

### What it is and why it is required

System suitability is the check that the whole analytical system, instrument, column, reagents, analyst, and standards, is performing well enough on the day to trust the results. ICH Q2(R2) treats SST as integral to the procedure. USP <621> *Chromatography* defines the standard chromatographic SST parameters and their default expectations. The rationale is simple: a method can be fully validated and still produce garbage on a Tuesday because the column aged or a mobile phase was mismixed. SST catches that before you report anything.

### What goes in it

For a typical reversed-phase HPLC assay, the SST is a set of replicate injections of a standard, evaluated against:

| SST parameter | What it controls | Common default |
|---|---|---|
| Replicate injection precision (%RSD) | Injector and overall system repeatability | RSD of peak area for 5-6 injections of standard not more than 2.0 percent for an assay |
| Resolution (Rs) | Separation of the analyte from the nearest critical peak | Rs not less than 2.0 between the critical pair (often 1.5 minimum) |
| Tailing factor (T) | Peak symmetry, integration reliability | T not more than 2.0 |
| Theoretical plates (N) | Column efficiency | Method-specific lower bound, e.g. N not less than 2000 |
| Retention time / capacity factor | Confirms the analyte elutes where expected | Within a defined window |

For impurity methods you usually add a signal-to-noise requirement at the reporting threshold and a check on the resolution between the analyte and its closest impurity. For a dissolution or a UV method the SST is simpler, often a standard-check agreement and a precision criterion.

### How to run it and the decision sequence

1. Equilibrate the system and confirm a stable baseline.
2. Inject the SST standard the required number of times (commonly 5 or 6).
3. Evaluate every SST parameter against the pre-set criteria before you inject any validation sample.
4. If SST passes, proceed and re-confirm SST at the defined frequency (bracketing standards through the sequence).
5. If SST fails, stop. Do not inject samples. Investigate the system cause (degassing, column, standard prep, leaks), correct it, and restart the sequence. A failed SST is a system event, not a result you report or trend as analyte data.

The single most important discipline: SST is a gate, not a result. You do not get to keep sample data acquired under a failing SST and "explain it later." If SST drifts out mid-sequence, every sample bracketed by the failing standards is invalid and re-injected.

### Common mistakes

- Treating an SST failure as an out-of-specification investigation. It is not. SST governs whether the run is valid at all; it precedes any OOS logic. See [oos-investigation-process](/articles/oos-investigation-process) for where the line sits.
- Cherry-picking which SST injection counts. All required injections count.
- Loosening the SST after a hard day. Same data integrity finding as loosening any acceptance criterion.

---

## Specificity

### What it is and why it is required

Specificity is the ability to measure the analyte unequivocally in the presence of everything else that could be in the sample: excipients, the sample matrix, degradation products, process impurities, and related substances. ICH Q2(R2) lists it as the first validation characteristic for identity, impurity, and assay procedures. The risk it controls is the worst kind: a method that looks perfect on a clean standard but co-elutes the analyte with a degradant, so a failing batch reads as passing. 21 CFR 211.165(e) names specificity explicitly.

### What goes in it

For a chromatographic assay or impurity method, specificity is demonstrated through:

- **Blank and placebo interference.** Inject diluent and a placebo (all formulation components minus the active). Nothing should elute at the analyte retention time above a defined threshold.
- **Forced degradation (stress testing).** Stress the drug substance and drug product under acid, base, oxidation (peroxide), heat, and light (per ICH Q1B for photostability), and confirm the method resolves the analyte from every degradant formed.
- **Peak purity.** Use a photodiode array (PDA) peak purity test or, more definitively, mass spectrometry to show the analyte peak is spectrally homogeneous, with no hidden co-eluting peak.
- **Mass balance.** The sum of the assay value plus total degradants should approximately reconcile to the unstressed value, accounting for response factor differences.

### How to do it: the forced degradation sequence

1. Prepare unstressed control samples (drug substance and drug product).
2. Apply each stress condition to a target degradation of roughly 5-20 percent of the active. You want enough degradation to challenge the method but not so much that you generate secondary degradants that never form in real life. Too little degradation proves nothing; total destruction is uninformative.
3. Neutralize and dilute consistently, then inject.
4. For each stressed sample, confirm resolution between the analyte and the nearest degradant peak meets the criterion, and run peak purity on the analyte peak.
5. Record which conditions produced degradation and which did not. "No degradation under acid" is a valid, documented result, not a gap.

### Acceptance criteria and a worked example

Typical criteria: no interference from blank or placebo at the analyte RT; resolution between the analyte and the closest degradant not less than 1.5 (often 2.0); analyte peak purity passing the instrument threshold (purity angle below purity threshold for PDA, or no detectable additional mass by MS); mass balance within an agreed range such as 95-105 percent.

| Stress condition | Conditions | Degradation observed | Resolution to analyte | Peak purity |
|---|---|---|---|---|
| Acid | 0.1 N HCl, 60 C, 4 h | 8.2 percent | 3.1 | Pass |
| Base | 0.1 N NaOH, 60 C, 2 h | 12.5 percent | 2.4 | Pass |
| Oxidation | 3 percent H2O2, RT, 6 h | 6.0 percent | 2.8 | Pass |
| Thermal | 80 C dry, 24 h | 1.1 percent | n/a | Pass |
| Photolytic | ICH Q1B option 2 | 3.4 percent | 2.6 | Pass |
| Unstressed control | none | 0.3 percent | n/a | Pass |

### Common mistakes

- Over-stressing until the analyte is gone, generating degradants that never occur under real storage and forcing nuisance resolution work.
- Skipping peak purity and relying only on resolution, which cannot detect a perfectly co-eluting impurity.
- Forgetting the placebo, so an excipient interference goes unnoticed until a stability time point fails for no apparent reason.
- Not reconciling mass balance and never explaining the gap.

Forced degradation feeds your stability-indicating claim, see [stability-programs-ich](/articles/stability-programs-ich).

---

## Linearity and range

### What it is and why it is required

Linearity is the method's ability to produce results directly proportional to analyte concentration across the range. Range is the interval between the upper and lower concentrations for which the method has been demonstrated to have acceptable accuracy, precision, and linearity. ICH Q2(R2) specifies minimum ranges by procedure type. The risk: if response is not linear, a result near the spec limit can be biased high or low exactly where the decision matters most.

### What goes in it and the required range

The minimum ranges to design against, per ICH Q2(R2), break out by what the procedure does. For a content or potency assay, cover 80 to 120 percent of the test concentration. For content uniformity, widen that to 70 to 130 percent. For dissolution, span plus or minus 20 percent across the specified range. For impurity quantitation, run from the reporting threshold up to 120 percent of the specification.

For linearity, ICH Q2(R2) sets the floor at 5 concentration levels. Prepare them independently from the standard, ideally as separate weighings rather than serial dilutions of one stock, so a single weighing error does not propagate through every level.

### How to do it

1. Prepare at least 5 levels spanning the range (for an assay, e.g. 80, 90, 100, 110, 120 percent).
2. Inject and record response (peak area) at each level.
3. Plot response versus concentration and fit a least-squares linear regression.
4. Report the slope, intercept, correlation coefficient (r) or coefficient of determination (r squared), and the residual sum of squares.
5. Examine the residual plot. A high r can still hide curvature; the residuals must scatter randomly around zero with no systematic trend.
6. Assess the y-intercept relative to the response at 100 percent. A large intercept signals a baseline or proportionality problem even when r looks excellent.

### Acceptance criteria and a worked example

Common criteria: r not less than 0.999 for assay (r squared not less than 0.998 often used), the y-intercept within a defined percentage of the 100 percent response (e.g. not more than 2.0 percent), and residuals randomly distributed. For impurity methods near the low end, criteria are looser (r not less than 0.99 is common) because signal is small.

| Level (%) | Concentration (mg/mL) | Peak area |
|---|---|---|
| 80 | 0.400 | 401,250 |
| 90 | 0.450 | 451,880 |
| 100 | 0.500 | 502,100 |
| 110 | 0.550 | 553,640 |
| 120 | 0.600 | 603,900 |

Regression on this set gives a slope near 1,014,000 area per mg/mL, an intercept near minus 4,500 area (about minus 0.9 percent of the 100 percent response, well under the 2 percent limit), and r squared above 0.9999. Residuals alternate sign with no trend. Pass.

### Common mistakes

- Reporting only r and never looking at the residual plot. r near unity is necessary but not sufficient; curvature hides there.
- Building linearity from serial dilutions of one stock, so the curve is internally consistent but carries one undetected weighing error.
- Confusing range with linearity. Range is bounded by where accuracy and precision also pass, not just where the line looks straight.

---

## Accuracy

### What it is and why it is required

Accuracy is how near the result the method reports sits to the value taken as the truth, the accepted reference value. It is the bias question: does the method read the right number on average. ICH Q2(R2) requires it across the range, and 21 CFR 211.165(e) names accuracy directly. For an assay, accuracy is usually established by recovery of known spikes.

### What goes in it

The usual design recovers spiked standard at 3 or more concentration levels across the range, repeating each level at least 3 times, so you land on 9 determinations, the count ICH Q2(R2) treats as the floor. For a drug product, you spike known amounts of the reference standard into the placebo matrix and recover. For a drug substance, you can compare against a reference standard of known purity or use spiked recovery. For impurities, you spike the matrix with known amounts of the impurity at levels from the reporting threshold up.

### How to do it

1. Prepare the placebo (or matrix) blank.
2. Spike a known mass or volume of reference standard at each level (e.g. 80, 100, 120 percent of nominal), in triplicate, prepared independently.
3. Carry each spiked sample through the entire procedure, including sample prep, exactly as a real sample.
4. Quantify each against the standard curve or working standard.
5. Calculate percent recovery: (amount found divided by amount added) times 100 for each replicate.
6. Compute the mean recovery and the RSD at each level and across all levels.

### Acceptance criteria and a worked example

Typical assay criteria: mean recovery 98.0 to 102.0 percent at each level (some methods use 97-103), and RSD not more than 2.0 percent. Impurity and trace methods carry wider windows that loosen toward the reporting threshold (e.g. 80-120 percent near the LOQ).

| Level | Amount added (mg) | Amount found (mg) | Recovery (%) |
|---|---|---|---|
| 80% rep 1 | 40.00 | 39.72 | 99.3 |
| 80% rep 2 | 40.00 | 40.12 | 100.3 |
| 80% rep 3 | 40.00 | 39.88 | 99.7 |
| 100% rep 1 | 50.00 | 50.35 | 100.7 |
| 100% rep 2 | 50.00 | 49.80 | 99.6 |
| 100% rep 3 | 50.00 | 50.10 | 100.2 |
| 120% rep 1 | 60.00 | 60.42 | 100.7 |
| 120% rep 2 | 60.00 | 59.76 | 99.6 |
| 120% rep 3 | 60.00 | 60.18 | 100.3 |

Mean recovery 100.0 percent, overall RSD about 0.5 percent. Pass. A trend across levels, say a steady 96 percent at 80 percent rising to 104 percent at 120 percent, would point to a proportionality or intercept problem even if the grand mean lands at 100.

### Common mistakes

- Spiking standard into diluent instead of the real matrix, so matrix effects never get tested. Accuracy must include the sample prep and the matrix.
- Reporting the grand mean only and hiding a level-dependent bias. Report and inspect each level.
- Using the same prepared spike for replicates instead of independent preparations, which understates true variability.

---

## Precision: repeatability, intermediate precision, and reproducibility

### What it is and why it is required

Precision describes how tightly repeated measurements cluster when you sample the same uniform material several times and run each through the method. ICH Q2(R2) splits it into three layers:

- **Repeatability** (intra-assay): one analyst, one instrument, one day, results gathered over a short interval.
- **Intermediate precision**: scatter seen inside one lab once you let days, analysts, instruments, and reagent lots change.
- **Reproducibility**: scatter seen when different laboratories run the method, assessed for compendial methods and during method transfer, not usually within a single-site validation.

The risk precision controls is the spread. A perfectly accurate method that scatters widely will fail real batches by chance and pass bad ones. 21 CFR 211.165(e) calls this reproducibility in the regulation, but the modern decomposition is the ICH one.

### What goes in it

- Repeatability: ICH Q2(R2) accepts either a minimum of 9 determinations covering the range (e.g. 3 levels x 3 replicates) or a minimum of 6 determinations at 100 percent of the test concentration.
- Intermediate precision: the same homogeneous sample assayed under deliberately varied conditions (different day, analyst, instrument, column lot).
- Reproducibility: a designed inter-laboratory study, typically part of [analytical-method-transfer](/articles/analytical-method-transfer).

### How to do it

1. Repeatability: have one analyst prepare and assay 6 independent sample preparations at the test concentration on one instrument in one session. Calculate the mean, standard deviation, and RSD.
2. Intermediate precision: repeat the exercise on a second day with a second analyst and, where possible, a second instrument and a second reagent or column lot. The cleanest design varies one factor at a time so a failure points somewhere.
3. Pool the data and calculate the combined RSD across all conditions. Some programs run an ANOVA to apportion variance to each factor (analyst, day, instrument).

### Acceptance criteria and a worked example

Common assay criteria: repeatability RSD not more than 1.0-2.0 percent; intermediate precision RSD not more than 2.0-3.0 percent. Impurity and biological methods carry wider limits because the inherent variability is higher; a [bioassay-and-elisa-validation](/articles/bioassay-and-elisa-validation) may accept RSD of 10-20 percent at the assay level.

| Condition | Analyst | Day | Instrument | Assay result (%) |
|---|---|---|---|---|
| Repeatability rep 1-6 | A | 1 | HPLC-01 | 99.8, 100.2, 99.6, 100.4, 99.9, 100.1 |
| Intermediate set | B | 2 | HPLC-02 | 100.5, 99.4, 100.7, 99.8, 100.0, 100.3 |

Repeatability RSD about 0.3 percent; combined intermediate precision RSD about 0.4 percent. Pass. If the day-2 mean had shifted to 97 percent, you would investigate the second analyst or instrument as a specific assignable cause rather than just reporting a wider RSD.

### Common mistakes

- Calling repeatability "precision" and stopping there. Intermediate precision is where real-world ruggedness shows up, and inspectors expect it.
- Running all preparations from one weighing, which collapses sample-prep variability and gives an artificially tight RSD.
- Varying everything at once in intermediate precision so a failure cannot be diagnosed.

---

## Detection and quantitation limits (for impurity and trace methods)

### What they are and why they matter

The detection limit (DL or LOD) is the lowest amount detectable but not necessarily quantifiable. The quantitation limit (QL or LOQ) is the lowest amount that can be quantified with acceptable accuracy and precision. ICH Q2(R2) requires these for impurity quantitation and limit tests. They anchor your reporting and disregard thresholds and tie to ICH Q3A/Q3B impurity thresholds.

### How to do it

Three accepted approaches under ICH Q2(R2):

1. **Signal-to-noise**: typically S/N around 3:1 for the DL and 10:1 for the QL. Simple, common for chromatography.
2. **Standard deviation of response and slope**: compute DL as 3.3 times sigma divided by S and QL as 10 times sigma divided by S, where sigma is the standard deviation of the response (often the intercept's standard error from the linearity regression) and S is the slope.
3. **Visual evaluation**: for some methods, the lowest level reliably observed.

### Acceptance criteria

The QL must be at or below the reporting threshold for the impurity per ICH Q3A/Q3B, and you confirm it by demonstrating acceptable accuracy and precision at the QL level (often 6 replicates at the QL, RSD within an agreed limit such as 10-20 percent). A QL above your reporting threshold means the method cannot do its job and is a hard fail.

### Common mistakes

- Calculating LOQ from S/N but never confirming accuracy and precision at that level.
- Mixing the S/N number from one approach with the sigma-over-slope number from another and reporting whichever is lower without justification.

---

## Robustness

### What it is and why it is required

Robustness is how well the result holds steady when you nudge method parameters by small amounts on purpose. ICH Q2(R2) and ICH Q14 both stress it, and Q14 frames it through the development concept of the method operable design region. The risk: a method that only works at exactly the written conditions will drift out the first time a different column lot or a slightly different mobile phase pH shows up in routine use.

### What goes in it

Identify the parameters most likely to vary and challenge each within a realistic small range. For HPLC, typical robustness factors:

| Parameter | Typical deliberate variation |
|---|---|
| Mobile phase pH | Plus or minus 0.1 to 0.2 units |
| Organic modifier percentage | Plus or minus 2 percent absolute |
| Column temperature | Plus or minus 5 C |
| Flow rate | Plus or minus 0.1 mL/min or 10 percent |
| Wavelength | Plus or minus 2 nm |
| Different column lot / age | Two lots or a new vs aged column |
| Buffer concentration | Plus or minus a defined amount |

### How to do it

1. List candidate parameters from development risk knowledge.
2. Decide on a design. One-factor-at-a-time is simple but misses interactions; a fractional factorial or Plackett-Burman design (a design of experiments approach) tests many factors efficiently and exposes interactions. See [quality-by-design-and-doe](/articles/quality-by-design-and-doe).
3. Run the method at each varied condition and evaluate the SST parameters and the assay or impurity result against criteria.
4. Identify which parameters the method is sensitive to. Those become the tightly controlled, explicitly stated parameters in the procedure, and may drive an SST parameter to catch drift.

### Acceptance criteria and a worked example

The method passes robustness when SST still passes and the result stays within criteria across the deliberate variations. Where a parameter does move the result, you do not necessarily fail, you tighten the control and call it out in the method.

| Condition | pH | %B | Temp (C) | Resolution | Assay (%) | SST |
|---|---|---|---|---|---|---|
| Nominal | 3.0 | 45 | 30 | 2.8 | 100.1 | Pass |
| pH low | 2.8 | 45 | 30 | 2.5 | 99.7 | Pass |
| pH high | 3.2 | 45 | 30 | 2.4 | 100.4 | Pass |
| %B low | 3.0 | 43 | 30 | 3.2 | 99.9 | Pass |
| %B high | 3.0 | 47 | 30 | 2.1 | 100.2 | Pass |
| Temp low | 3.0 | 45 | 25 | 3.0 | 99.6 | Pass |
| Temp high | 3.0 | 45 | 35 | 2.2 | 100.3 | Pass |

Here resolution dips toward the limit at high organic and high temperature, so the method states those parameters tightly and the SST resolution criterion (not less than 2.0) becomes the routine guardrail.

### Common mistakes

- Skipping robustness entirely or doing it only at method transfer, then discovering in routine use that the method is fragile.
- Varying parameters one at a time and missing an interaction (pH and temperature together can shift selectivity more than either alone).
- Passing robustness but never feeding the sensitive parameters back into the written method and SST. Knowing a method is pH-sensitive is useless if the procedure does not control pH tightly.

---

## Setting acceptance criteria you can defend

This is the part inspectors probe hardest, because loosely justified or after-the-fact criteria are a data integrity and a science problem at once.

**Sources of criteria, in order of preference:**

1. **Compendial.** If the method is a USP, EP, or JP procedure, the chapter sets expectations. For verifying a compendial method rather than full validation, see [compendial-method-verification](/articles/compendial-method-verification).
2. **Established practice and guidance.** The assay 98-102 percent recovery, RSD not more than 2 percent, r not less than 0.999 conventions are widely accepted defaults for small-molecule HPLC assays.
3. **Method capability and product specification.** Criteria must be tight enough that the method can actually distinguish a passing batch from a failing one. If your specification is 95-105 percent and your method precision is RSD 3 percent, the measurement uncertainty eats most of your spec window. Criteria should be derived from development data and the intended use, not copied blindly.

**The non-negotiables:**

- Every criterion is written and approved in the protocol before execution.
- Criteria are justified, not just stated. "RSD not more than 2.0 percent based on development data and assay convention" beats a bare number.
- You never adjust a criterion after seeing the result. If a criterion is genuinely wrong, you raise a documented protocol amendment with rationale, approved before you continue, and you flag it in the report.
- Tie the criteria to the product. A potency method for a narrow-therapeutic-index product needs tighter precision than a method for a forgiving, high-content excipient.

---

## Roles and responsibilities

| Role | Responsibility |
|---|---|
| Method owner / development scientist (SME) | Owns the method, provides development data, sets initial criteria, authors the protocol, often executes or oversees execution, interprets anomalies. |
| Analyst (bench) | Executes per protocol, records contemporaneously, runs SST, flags excursions immediately rather than working around them. |
| Second analyst | Performs intermediate precision under varied conditions; independent preparation. |
| QC / lab management | Resources the study, ensures instrument qualification and standard availability, reviews data for completeness and arithmetic. |
| Quality Assurance | Approves the protocol and report, verifies criteria were pre-defined and not altered, audits the raw data and audit trail, signs the conclusion. |
| Validation / analytical lifecycle group | May own the protocol template, the lifecycle linkage to Q14 and the control strategy, and the change-control tie-in. |
| Statistician (as needed) | Reviews regression, ANOVA for precision, and DOE for robustness. |

The separation that matters most: the person who generated the data does not unilaterally judge whether it passed. QA reviews independently, and the acceptance criteria are the objective referee. See [gxp-roles-responsibilities](/articles/gxp-roles-responsibilities).

---

## When a result fails: the on-the-bench decision tree

A failing validation result is not automatically a method failure. Work the cause in order.

1. **Was SST passing?** If SST failed, the data is invalid for a system reason. Investigate the system, fix, re-run. Not a method failure.
2. **Is there a documented, assignable analytical cause?** A pipetting error caught and recorded, a known instrument fault, a mis-weighed standard. If genuinely assignable and documented at the time (not invented after the fact), the determination can be invalidated under your data invalidation procedure and repeated. This is exactly where weak documentation gets cited.
3. **No assignable cause?** Then the result stands and you have a real validation finding. The method may not be capable, the criteria may have been unrealistic, or the design was wrong. You investigate formally, see [validation-test-failure-management](/articles/validation-test-failure-management), and you do not simply re-test until you pass. Testing into compliance is a classic and severe finding.

The cardinal sin here is the undocumented "trial injection" or "system equilibration sample" that is really a failing result quietly deleted. Every injection in the data system is visible in the audit trail. If the sequence shows ten injections and the report uses six, the four missing ones will be asked about. See [audit-trail-design-and-review](/articles/audit-trail-design-and-review).

---

## Writing the validation report

The report converts execution into a defensible record. It should contain, at minimum:

- Reference to the approved protocol and any amendments.
- Method identification at the controlled revision.
- Instruments, columns, reference standard lots and potencies, reagents used.
- For each characteristic: the design, the pre-set acceptance criteria, the raw and summarized results, the pass/fail call, and any deviations.
- A deviation and OOS summary with dispositions.
- A traceable link from every reported value to its raw data (sequence, injection, integration).
- A clear overall conclusion: the method is validated for its intended use across the stated range, with the validated SST and any tightened parameters carried into the method.

The report and the method then feed the control strategy and the lifecycle under ICH Q14, and any future change to the method runs through [change-control-validated-systems](/articles/change-control-validated-systems). For the report mechanics, see [writing-validation-protocols-and-reports](/articles/writing-validation-protocols-and-reports) and the broader [method-validation-essentials](/articles/method-validation-essentials) overview.

---

## Common inspection findings on method validation

Generic patterns regulators cite repeatedly:

- **Acceptance criteria set or changed after data review.** The most damaging, because it implies the conclusion drove the criteria. Pre-define, approve, and never retro-fit.
- **Inadequate or absent forced degradation**, so a "stability-indicating" claim is not actually supported.
- **Selective reporting of injections**, with audit-trail entries showing aborted or extra runs that do not appear in the report.
- **Validation performed on an unqualified or out-of-calibration instrument**, invalidating the data window.
- **No specificity against the real matrix or placebo**, only against clean standard.
- **Reporting r without residual analysis**, masking non-linearity.
- **Repeatability dressed up as full precision**, with no intermediate precision across days/analysts/instruments.
- **Testing into compliance**: repeated re-testing without an assignable cause until a passing set appears.
- **Robustness not done or not fed back** into the method controls.

Each of these traces back to the same root: criteria that were not objective and locked, or raw data that was not fully traceable. The defense is procedural discipline before the first injection, not clever explanation after.

---

## Interview-ready questions and how to answer

**Walk me through validating an HPLC assay end to end.** Confirm method locked, instrument qualified, standards characterized, criteria pre-approved. Establish SST. Then specificity (blank/placebo, forced degradation, peak purity, mass balance), linearity (5 levels across 80-120 percent, regression plus residuals), accuracy (recovery 3 levels x 3 reps, 9 determinations), precision (repeatability 6 at 100 percent plus intermediate precision across day/analyst/instrument). Write the report with full traceability. Naming the ICH Q2(R2) minimums unprompted signals you have actually run one.

**What is the difference between repeatability and intermediate precision?** Repeatability is one analyst, one instrument, one day, short interval. Intermediate precision deliberately varies day, analyst, instrument, and reagent lot within the same lab to capture real operating variability. Reproducibility is between labs and belongs to transfer and compendial work.

**A single injection in your accuracy sequence fails. What do you do?** First check whether SST was passing; a failing SST invalidates the run for a system reason. If SST was fine, look for a documented, contemporaneously recorded assignable cause. With one, invalidate that determination per procedure and repeat. Without one, the result stands and you investigate; you do not keep re-testing until you pass.

**How do you set the accuracy acceptance criterion?** From compendial requirement if one exists, otherwise from established convention (98-102 percent recovery for small-molecule assay) anchored to development capability and the product specification, written and approved before execution and never adjusted afterward.

**Why does a high correlation coefficient not prove linearity?** Because r is dominated by the spread of the x values and can sit near unity even when the data curve systematically. You confirm linearity by inspecting the residual plot for random scatter and checking the y-intercept against the 100 percent response.

**What is forced degradation for and how much do you degrade?** It demonstrates the method is stability-indicating, that it resolves the analyte from its degradants. Target roughly 5-20 percent degradation: enough to challenge the separation, not so much that you create artificial secondary degradants. Confirm resolution and peak purity, and reconcile mass balance.

**How is robustness different from intermediate precision?** Intermediate precision measures variation under normal expected conditions. Robustness deliberately perturbs method parameters (pH, organic, temperature, flow, column lot) to find what the method is sensitive to, so those parameters get tightened in the procedure and guarded by SST.

**What is the relationship between ICH Q2 and Q14?** Q2(R2) is the validation characteristics and methodology. Q14 is the development side, the structured development that defines the control strategy and the method operable design region that justifies your robustness and lifecycle approach. They were finalized together in 2023.

---

## Practical tips

- Prepare accuracy spikes and linearity levels as independent weighings, not serial dilutions, so one error does not propagate everywhere.
- Build the SST as a real gate in your data system sequence (bracketing standards) so a mid-run drift is caught automatically.
- Record reference standard lot and potency on every worksheet. Bridging to a new lot mid-study without a documented potency tie-out has sunk many validations.
- Keep raw data, the sequence, and integration parameters traceable to every reported number. Assume the audit trail will be read.
- Inspect the residual plot every time, even when r is 0.9999.
- Feed robustness findings back into the written method and SST, otherwise the robustness study was wasted effort.
- Write the conclusion in terms of intended use and range, not just "all criteria met."

### Related reading

- [method-validation-essentials](/articles/method-validation-essentials) for the framework this article executes against
- [ich-q14-q2r2-analytical-lifecycle](/articles/ich-q14-q2r2-analytical-lifecycle) for the lifecycle and development context
- [analytical-method-transfer](/articles/analytical-method-transfer) for reproducibility and moving the method to another site
- [compendial-method-verification](/articles/compendial-method-verification) for when you verify rather than fully validate
- [stability-programs-ich](/articles/stability-programs-ich) for where the stability-indicating claim is used
- [bioassay-and-elisa-validation](/articles/bioassay-and-elisa-validation) for high-variability biological method validation
- [oos-investigation-process](/articles/oos-investigation-process) and [validation-test-failure-management](/articles/validation-test-failure-management) for handling failures
- [chromatography-data-system-integrity](/articles/chromatography-data-system-integrity) for the data integrity layer under all of this
