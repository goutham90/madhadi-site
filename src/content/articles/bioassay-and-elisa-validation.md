---
title: "Bioassay and ELISA Validation: Potency, Parallelism, and Relative Standard Curves"
description: "How to validate biologics potency bioassays and ELISAs: relative potency, parallelism testing, 4PL and 5PL curve fitting, plate effects, and the ICH Q2(R2) and USP chapters that govern them."
pubDate: 2026-06-20
tags: ["bioassay", "elisa", "potency", "method-validation", "biologics", "parallelism", "statistics"]
pillar: "equipment-qualification"
tier: "Advanced"
---

A potency assay is the only test on a biologic certificate of analysis that claims the molecule actually works. Identity tells you what it is, purity tells you what else is in the vial, but potency is the quantitative measure of biological activity, and for most biologics it is the single most difficult method to develop, validate, and keep in control. Cell-based bioassays and ligand-binding ELISAs share a statistical backbone that no chromatographic or spectroscopic method has: the answer is not an absolute number read off an instrument, it is a *relative* number, sample versus reference standard, derived from two dose-response curves that must be shown to be parallel before the ratio between them means anything at all.

This article covers how to validate those methods to the standard an inspector or an interviewer expects. It assumes you already know what a 96-well plate and a reference standard are, and it goes straight at the parts people get wrong: relative potency, parallelism, the choice between four-parameter and five-parameter logistic models, plate and edge effects, and the acceptance criteria that actually hold up.

---

## Why bioassay and ELISA validation is its own discipline

A reversed-phase HPLC assay for an impurity gives you a peak area that maps, through a calibration curve, to a concentration. The relationship is linear over the working range, the instrument response is mechanistic, and one injection gives one answer. None of that is true for a biological potency assay.

A cell-based bioassay measures a response (proliferation, reporter-gene luminescence, cytotoxicity, neutralization) across a series of dilutions. The response is sigmoidal, not linear. The cells, the reagents, and the operator drift day to day. So you never report an absolute potency in international units off a single curve. You run the test sample and a reference standard of *known, assigned* potency on the same plate, fit a dose-response curve to each, and report the horizontal shift between them as **relative potency**: the ratio of the concentration of reference needed to produce a given effect to the concentration of sample needed to produce the same effect. If the sample is exactly as potent as the reference, relative potency is 1.0 (or 100 percent).

That design carries an unavoidable assumption: the two curves must have the same shape and differ only by a horizontal shift along the log-dose axis. When that holds, the samples behave as **dilutions of one another**, and the potency ratio is constant at every response level. When it fails, there is no single ratio, and any number you report is an artifact of which part of the curve you happened to fit. Demonstrating that the assumption holds is the **parallelism** test, and it is the conceptual heart of every potency bioassay and every relative ELISA.

The regulatory expectation that potency be measured this way is not optional. For biologics, 21 CFR 610.10 requires a potency test, and 21 CFR 600.3(s) defines potency as the specific ability or capacity of a product to effect a given result. The how-to lives in the United States Pharmacopeia general chapters and in ICH guidance, which I will cite specifically as each topic comes up.

---

## The regulatory and compendial framework

Before procedure, know the documents. An interviewer will expect you to name them and say what each one is for.

| Document | Title and scope | What you use it for |
|---|---|---|
| ICH Q2(R2) | Validation of Analytical Procedures (2023) | The master list of validation characteristics: accuracy, precision, specificity, range, linearity. Q2(R2) explicitly broadened the framework beyond simple chemical assays and added language relevant to bioassays and multivariate methods. |
| ICH Q14 | Analytical Procedure Development (2023) | The development companion to Q2(R2). Defines the analytical target profile (ATP) and the enhanced, lifecycle approach to method development. |
| USP <1032> | Design and Development of Biological Assays | Assay design, dilution schemes, replicate strategy, suitability. Read this first. |
| USP <1033> | Biological Assay Validation | The validation chapter for bioassays. Defines relative accuracy, intermediate precision, range, and how to set acceptance criteria using the format of the reportable value. |
| USP <1034> | Analysis of Biological Assays | The statistics: parallelism, 4PL and 5PL models, equivalence testing, outlier handling, suitability. |
| USP <111> | Design and Analysis of Biological Assays | The classic compendial chapter covering parallel-line and slope-ratio models and confidence-interval estimation of potency. |
| USP <1030> | Biological Assay Chapters Overview and Glossary | Orientation and shared vocabulary across <1032> to <1034>. |
| ICH Q6B | Specifications for Biotechnological/Biological Products (1999) | Requires a relevant potency assay as a release and stability specification. |
| USP <1106> / <1106.1> | Immunogenicity Assays design and validation | Relevant when the ligand-binding method is an anti-drug-antibody assay rather than a release ELISA. |
| FDA guidance, Bioanalytical Method Validation (2018) | Validation of ligand-binding and chromatographic assays in biological matrices | The reference for PK and biomarker ELISAs in serum or plasma. Different acceptance framework from release potency. |

Two practical points. First, USP <1032> through <1034> were a deliberate modernization of the old <111> approach; they reframe validation around the *reportable value* (often a geometric mean of several independent assays) rather than a single run, and they push **equivalence testing** for parallelism instead of the old significance-difference test. Second, the FDA bioanalytical guidance governs a different world (PK, immunogenicity, biomarker assays in a biological matrix) and uses accuracy and precision acceptance limits (the classic 4-6-X / 20-25 percent rules) that do *not* apply to a relative-potency release assay. Know which framework your method lives in before you set a single acceptance criterion. Mixing them is one of the most common conceptual errors.

---

## Relative potency: what you are actually measuring

### The concept

Relative potency (RP) answers: how does the biological activity of my sample compare to the reference standard, expressed as a ratio. If the reference standard is assigned 100 percent (or 1.0, or a value in IU/mg traceable to an international standard), then a sample with RP of 0.95 has 95 percent of the reference activity.

The ratio is estimated from the horizontal distance between the two fitted dose-response curves on a log-dose scale. For a symmetric sigmoidal (4PL) model, the curve is described by:

- **A** = lower asymptote (response at infinite dilution, the assay floor)
- **D** = upper asymptote (response at saturating dose, the assay ceiling)
- **C** = the EC50, the dose producing a half-maximal response (the inflection point on the log scale)
- **B** = the slope (Hill slope) at the inflection point

When sample and reference are true dilutions of each other, A, B, and D are common to both curves and only C differs. The relative potency is the ratio of the two EC50 values:

> RP = C(reference) / C(sample), with the dilution factor of the sample accounted for.

That single equation is why parallelism matters: if B (slope) or the asymptotes differ between curves, there is no single C ratio that describes the whole curve, and RP becomes undefined.

### Worked numeric example

Suppose a reporter-gene bioassay fits these 4PL parameters on one plate:

| Parameter | Reference standard | Test sample |
|---|---|---|
| A (lower asymptote, RLU) | 1,050 | 1,080 |
| D (upper asymptote, RLU) | 48,200 | 47,900 |
| B (Hill slope) | 1.18 | 1.21 |
| C (EC50, ng/mL) | 4.10 | 4.32 |

The sample was prepared at the same nominal concentration as the reference. RP = C(reference) / C(sample) = 4.10 / 4.32 = 0.949, so 94.9 percent of label. Because A, B, and D are close between the two curves (you will test this formally), the EC50 ratio is meaningful and 94.9 percent is a defensible result. If the sample's slope had been 0.78 against the reference's 1.18, the curves would cross, no single ratio would hold, and the run should be invalidated for non-parallelism rather than reported.

### Reference standard: the foundation everything rests on

Relative potency is only as good as the reference standard. The standard must be qualified, its potency value assigned (ideally traceable to an international standard such as a WHO International Standard where one exists), stored under controlled conditions, and bridged whenever a new lot is introduced. A reference-standard bridging study runs the new candidate against the current standard across multiple independent assays and confirms the assigned value before the new lot goes into routine use. Losing the chain of traceability across reference lots is a classic way to introduce a silent step-change into your potency trend, and inspectors look for the bridging data.

See [stability programs and ICH requirements](/articles/stability-programs-ich) and [comparability and potency assays](/articles/comparability-and-potency-assays) for how potency feeds release and stability decisions.

---

## Parallelism: the gate that makes relative potency valid

### Why it is required

Parallelism is the formal demonstration that the sample and reference dose-response curves are similar enough that the potency ratio is constant across the response range. USP <1034> treats parallelism as a system or sample suitability criterion, and it is the single most important statistical concept in bioassay validation. A non-parallel sample is telling you something physical: the sample is not behaving as a dilution of the reference. That can mean a degraded or modified molecule, a matrix effect, an aggregate, an interfering substance, or simply a sample whose true potency is outside the validated range.

### The old way and the modern way

The historical approach (rooted in the parallel-line bioassay of USP <111>) ran an F-test or t-test for a *difference* in slope between sample and reference. Fail to find a significant difference, declare the curves parallel. This is statistically backwards: a low-precision assay with few replicates will *fail* to detect a difference and pass everything, while a very precise assay will detect trivial, biologically meaningless differences and reject good samples. The better your assay, the more it punishes you. That is the wrong incentive.

The modern approach in USP <1034> uses **equivalence testing**. You compute a confidence interval (commonly 90 percent) for the difference (or ratio) of the curve-shape parameters (for a 4PL: the slope, and the two asymptotes; sometimes a combined similarity metric), and you compare that interval against pre-defined **equivalence bounds**. If the entire confidence interval falls inside the bounds, the curves are equivalent (parallel) and the run is valid. If the interval breaches a bound, the sample is non-parallel.

This flips the incentive correctly: a tight, precise assay produces narrow intervals that easily fit inside the bounds; an imprecise assay produces wide intervals that fail, which is exactly what should happen.

### How to set equivalence bounds

The bounds are not arbitrary and they are not regulatory constants. You set them from data, during method development and validation, by characterizing the distribution of the parallelism metric across many runs of genuinely parallel material (reference against itself, and well-behaved samples). A common approach:

1. Generate a large set of runs where the sample is known to be parallel (for example, reference standard split and run against itself, plus diluted reference at several levels).
2. For each run, compute the parallelism metric (slope ratio, or the difference in each shape parameter, or a single combined similarity score).
3. Characterize the distribution and set bounds that capture the central mass of genuinely parallel results (for example, bounds derived from the observed variability so that truly parallel samples pass at a high rate).
4. Confirm with a risk assessment that a sample failing the bound corresponds to a biologically meaningful departure, not noise.

The bounds become part of the validated method and a registered acceptance criterion. Document the rationale. "We used the software default" is not a rationale an inspector accepts.

### Worked parallelism example (equivalence on slope ratio)

Equivalence bounds for the slope ratio (sample slope / reference slope) were set during validation at 0.80 to 1.25. On a given run:

- Reference slope B = 1.18, sample slope B = 1.21, ratio = 1.025
- The 90 percent confidence interval for the ratio = 0.93 to 1.13

The entire interval (0.93 to 1.13) sits inside the bounds (0.80 to 1.25), so the curves are equivalent and parallelism passes. If instead the interval had been 0.71 to 0.99, it breaches the lower bound of 0.80, parallelism fails, and the result is reported as non-parallel rather than as a potency number.

### Decision sequence for a parallelism result

1. Fit both curves, confirm each model fit is acceptable (residual pattern, fit diagnostics, asymptotes reached).
2. Confirm system suitability passed (reference EC50 in range, signal window, edge controls).
3. Compute the parallelism metric and its confidence interval.
4. Compare the interval to the equivalence bounds.
5. If parallel: report relative potency with its confidence interval.
6. If non-parallel: the result is invalid for potency. Investigate. Do not report a number, and do not quietly re-run until you get a parallel result without an investigation. Repeated non-parallelism is a method or a sample problem, and pattern of "test into compliance" re-runs is a textbook data-integrity finding.

Cross-link: [out-of-specification investigation process](/articles/oos-investigation-process), [out-of-trend investigations](/articles/out-of-trend-investigations), and [data integrity foundations](/articles/data-integrity-foundations).

---

## Curve fitting: 4PL versus 5PL, and how to choose

### The four-parameter logistic (4PL)

The 4PL is the default for symmetric sigmoidal dose-response data. Its four parameters (A, B, C, D as above) describe a curve that is symmetric around the inflection point (EC50). Most cell-based reporter assays and many ELISAs are well described by a 4PL.

### The five-parameter logistic (5PL)

The 5PL adds a fifth parameter, the asymmetry factor (often denoted **g** or **s**), which lets the curve bend more steeply on one side of the inflection than the other. Real immunoassay and bioassay curves are frequently asymmetric, especially near the asymptotes. A 5PL can hug the data better, reduce bias at the curve extremes, and give a more accurate back-calculated concentration in those regions.

### Choosing between them

The rule is not "always use the more flexible model." Adding parameters always improves the apparent fit because you have more freedom; the question is whether the improvement is real and whether the extra parameter is estimable from your data density. Decision factors:

- **Residual analysis.** Plot residuals against dose. A 4PL applied to an asymmetric curve leaves a systematic, structured residual pattern (curved, not random) near one asymptote. A 5PL that fixes it shows random scatter.
- **Curve symmetry, established during development.** If your molecule's dose response is genuinely asymmetric and reproducibly so, lock in the 5PL.
- **Data density at the asymptotes.** A 5PL needs enough points defining both plateaus to estimate the asymmetry parameter stably. Sparse plateaus give an unstable, over-fit 5PL that does more harm than good.
- **Weighting.** Bioassay response variance is usually not constant across the curve (heteroscedastic); response variability often grows with the mean. Apply a weighting scheme (commonly 1/Y^2 or a power-of-the-mean variance model) so the fit is not dominated by the high-signal points. Choosing the model without choosing the weighting is half a decision.
- **Consistency.** Whichever model and weighting you select, fix it in the validated method and apply it identically to reference and sample on every run. You cannot re-pick the model per run to chase a passing result.

### Worked model-selection snippet

| Model | Weighting | Sum of weighted squared residuals | Residual pattern near upper asymptote |
|---|---|---|---|
| 4PL | 1/Y^2 | 0.0412 | Systematic negative bias, structured |
| 5PL | 1/Y^2 | 0.0188 | Random scatter |

Here the 5PL more than halves the weighted residual and removes the structured bias near the top of the curve, and the upper plateau has six defining points, so the asymmetry parameter is well estimated. The 5PL is the correct, justified choice and that justification goes in the method development report.

A practical caution: the EC50 of a 4PL and the inflection point of a 5PL are not the same quantity, because the 5PL inflection is shifted by the asymmetry. As long as you compute relative potency from the *same* model applied to both curves, this cancels. Mixing a 4PL on one curve and a 5PL on the other is invalid.

Cross-link: [statistics in quality: Cpk and control charts](/articles/statistics-in-quality-cpk-control-charts) and [quality by design and design of experiments](/articles/quality-by-design-and-doe).

---

## Plate effects: edges, drift, and position bias

### Why plates lie to you

A 96-well or 384-well plate is not a uniform environment. The wells around the perimeter evaporate faster, equilibrate to incubator temperature differently, and receive different light exposure in luminescence reads. Cells settle and grow unevenly. Reagent dispensing drifts across a run. Liquid handlers introduce row or column gradients. All of these turn the well position into a hidden variable that biases your dose-response fit if you ignore it. The most notorious is the **edge effect**: outer wells read systematically high or low.

### How to design it out and detect it

- **Plate layout and randomization.** Do not put the reference in fixed columns and the sample in fixed columns every time; a column gradient then maps directly onto the potency ratio. Randomize or systematically rotate sample and reference positions, and balance dilution series across the plate so a position gradient cancels rather than biases. USP <1032> discusses blocking and randomization for exactly this reason.
- **Edge-well strategy.** Either avoid the outermost ring entirely (fill with buffer or media and exclude from analysis), or include edge wells but qualify, during development, that the edge effect is controlled and not significant. Decide deliberately and document it.
- **In-plate controls.** Include reference-standard control samples and assay controls in known positions to monitor signal window and drift within and across plates.
- **Detect position effects statistically.** During development and periodically in routine use, analyze residuals by row and by column. A heat map of residuals across plate position is the fastest way to see an edge or gradient effect. Trend the control-well CV by position.
- **Multi-plate runs.** When a single dilution series spans plates, treat plate as a blocking factor in the analysis and include a plate-to-plate control. Never average raw signal across plates without accounting for the plate effect.

### Worked example of an edge-effect check

Mean control-well signal by plate region from a qualification run:

| Plate region | Mean signal (RLU) | CV |
|---|---|---|
| Interior wells | 24,800 | 6.1% |
| Edge wells (outer ring) | 21,300 | 11.4% |

The outer ring reads about 14 percent lower with roughly double the variability. The disposition: exclude the outer ring from analysis (fill with media), and document the exclusion as a defined, pre-specified design feature, not a post-hoc data drop. Excluding wells *after* seeing they hurt your result, without a pre-defined rule, is data manipulation and will be cited as such.

Cross-link: [analytical instrument qualification](/articles/analytical-instrument-qualification) and [LIMS implementation and validation](/articles/lims-implementation-and-validation) for the systems that capture and lock these reads.

---

## The validation study: characteristics, design, and acceptance criteria

Now assemble the full validation. USP <1033> reframes the ICH Q2 characteristics for the relative-potency context. Validate against an analytical target profile (the ATP from ICH Q14) that states the intended use, the reportable value format, and the precision and accuracy the method must achieve.

### Validation characteristics and how to demonstrate each

| Characteristic | What it means for a relative-potency bioassay or ELISA | How you demonstrate it |
|---|---|---|
| Relative accuracy (trueness) | Measured RP equals the true RP across the range | Prepare samples at known relative potencies (for example 50%, 70%, 100%, 140%, 200%) by dilution or spiking of reference; confirm measured RP recovers the nominal value across runs. |
| Specificity | The method responds to the intended biological activity, not to interferents or matrix | Test with stressed/degraded material (should read lower potency), placebo/matrix blank, and known interferents. A relevant bioassay should be stability-indicating. |
| Intermediate precision | Variability across days, analysts, instruments, cell passages, reagent lots | Multi-factor design varying analyst, day, plate reader, and cell passage; report the geometric coefficient of variation (GCV) of the reportable value. |
| Range | The interval of true RP over which accuracy and precision hold | The span across which both relative accuracy and precision pass, typically bracketing 50% to 200% of label or wider per product needs. |
| Linearity (of the relationship) | Measured RP is linear in true RP across the range | Regress measured against nominal RP; slope near 1, intercept near 0, on a log scale. |
| Robustness | Tolerance to small deliberate changes (incubation time, cell density, reagent age) | Develop under ICH Q14; vary parameters and confirm RP unaffected. Often done in development and confirmed in validation. |

Note what is *missing* relative to a chemistry method: there is no separate "limit of detection" or "limit of quantitation" in the chromatographic sense, because the reportable value is a relative potency, not a concentration at a detection threshold. The range is expressed in units of relative potency.

### The reportable value drives the acceptance criteria

This is the single most important design decision and the one candidates miss in interviews. The reportable value is rarely a single assay; it is usually the geometric mean of N independent assays (for example, the mean of three runs on three days). Because precision improves with the square root of N, the acceptance criteria you can meet depend on N. So you set the format first.

Worked logic:

1. The ATP requires the reportable potency to fall within plus or minus 20 percent of true with high confidence.
2. A single assay has an intermediate-precision GCV of, say, 14 percent. One run is not tight enough to meet the requirement reliably.
3. The geometric mean of three independent assays reduces the effective GCV by roughly the square root of 3, to about 8 percent, which meets the requirement.
4. Therefore the validated reportable value is "geometric mean of three independent assays," and that format is registered. The system-suitability and format are then locked: you cannot drop to a single assay in routine release without a change control and a precision re-justification.

### Sample acceptance criteria table

| Validation parameter | Example acceptance criterion |
|---|---|
| Relative accuracy | Mean recovered RP within 90% to 110% of nominal at each level across the range |
| Intermediate precision | GCV of the reportable value not more than 15% |
| Linearity | Slope of measured vs nominal RP between 0.90 and 1.10; R-squared not less than 0.98 |
| Range | Demonstrated 50% to 200% of nominal RP |
| Specificity | Stressed sample reads reduced potency; matrix blank produces no measurable potency |
| System suitability (per run) | Reference EC50 within validated window; signal window (D minus A) above minimum; parallelism of reference-vs-reference passes; edge controls within limits |

The numbers above are illustrative. Real criteria are derived from the method's own development data and the ATP. The principle that does not change: criteria are justified from data and the reportable-value format, never copied from a template.

Cross-link: [method validation essentials](/articles/method-validation-essentials), [method validation execution](/articles/method-validation-execution), and [ICH Q14 and Q2(R2) analytical lifecycle](/articles/ich-q14-q2r2-analytical-lifecycle).

---

## ELISA-specific considerations

A ligand-binding ELISA shares the curve fitting and (for relative methods) the parallelism logic, but it has its own failure modes.

- **Hook effect (prozone).** At very high analyte concentration, signal can paradoxically *drop* because excess antigen saturates both capture and detection antibodies before sandwiches can form. A high-dose hook will read a high sample as falsely low. Guard against it by running multiple dilutions and confirming the result lies on the ascending part of the curve, and by characterizing the hook boundary during development.
- **Matrix effects.** For ELISAs run in serum, plasma, or cell-culture matrix, the matrix itself shifts the curve. The FDA Bioanalytical Method Validation guidance (2018) requires selectivity and matrix-effect testing (parallelism, dilutional linearity, recovery in matrix) for PK and biomarker assays. A buffer-based release ELISA has a simpler matrix story than a serum PK ELISA.
- **Minimum required dilution (MRD).** The dilution at which matrix interference becomes acceptable. Establish it during development.
- **Reference standard and critical reagents.** Antibody lots, conjugate lots, and coating reagents are critical. Bridge new lots against old. A silent shift in a critical reagent lot is a leading cause of unexplained potency drift.
- **Dilutional linearity and spike recovery.** Confirm that serially diluted high samples recover the expected value and that spiked samples recover within limits across the range.
- **Plate and edge effects** apply identically to ELISA; the same randomization and edge strategy holds.

Distinguish the *type* of ELISA, because the validation framework differs:

| ELISA type | Reportable value | Governing framework |
|---|---|---|
| Relative-potency release ELISA | Relative potency vs reference | USP <1032>-<1034>, ICH Q2(R2), Q6B |
| PK / concentration ELISA | Absolute concentration in matrix | FDA Bioanalytical Method Validation (2018) |
| Immunogenicity (anti-drug antibody) | Titer / positive-negative cut point | FDA immunogenicity guidance; USP <1106>/<1106.1> |

Picking the wrong framework, for example applying PK accuracy/precision limits to a relative-potency release assay, is a conceptual error that surfaces in audits and interviews alike.

Cross-link: [compendial method verification](/articles/compendial-method-verification) and [analytical method transfer](/articles/analytical-method-transfer).

---

## Roles and responsibilities

| Role | Responsibilities |
|---|---|
| Method development / assay scientist (SME) | Designs the assay, selects model and weighting, establishes plate layout and parallelism bounds, authors the development report and the analytical target profile, defines the reportable-value format. |
| Validation lead | Writes the validation protocol against the ATP, defines acceptance criteria with statistical justification, coordinates execution, authors the validation report. |
| Bioassay analysts | Execute runs per the validated procedure, maintain cell banks and passage discipline, record raw data, flag suitability failures. |
| Biostatistician | Designs the precision and accuracy study, sets and justifies equivalence bounds, defines the variance/weighting model, reviews the statistical sections of protocol and report. |
| Quality Assurance | Reviews and approves protocol and report, confirms data integrity and that no undocumented data exclusion occurred, ensures change control governs the validated method and reportable-value format. |
| Quality Control management | Owns routine execution, trending of system-suitability and control data, and assay re-validation triggers. |
| Reference standard owner | Qualifies and bridges reference and critical-reagent lots, maintains traceability and assigned values. |

The biostatistician is not optional on a bioassay validation. Parallelism bounds, variance modeling, and reportable-value precision are statistical decisions, and a validation that lacks documented statistical ownership is a weak package.

Cross-link: [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) and [data governance roles and careers](/articles/data-governance-roles-and-careers).

---

## Common mistakes and inspection-finding patterns

These are the patterns that get cited, written generically.

1. **Testing into compliance on parallelism or potency.** Re-running a sample after a non-parallel or out-of-spec result until it passes, without an investigation, and reporting only the passing run. This is a data-integrity finding, not a chemistry finding, and it is taken extremely seriously. Every run, passing or failing, must be in the record with a disposition.
2. **Post-hoc well or replicate exclusion.** Dropping "outlier" wells after seeing they hurt the result, with no pre-defined, statistically valid outlier rule. Outlier handling must be specified in advance per USP <1034>.
3. **The significance test for parallelism.** Still using a difference test (fail to reject = parallel) instead of equivalence testing. Penalizes good assays, passes bad ones, and is out of step with USP <1034>.
4. **Equivalence bounds with no basis.** Parallelism limits set to a software default or copied from another product, with no data-driven justification. Inspectors ask "where did these bounds come from" and expect the development data.
5. **Mismatched curve models or weighting.** Different model for sample and reference, model re-chosen per run, or no weighting on heteroscedastic data so the fit is dominated by high-signal points.
6. **Ignoring edge and plate effects.** No randomization, fixed sample/reference column layout, outer ring included without qualification, no residual-by-position analysis.
7. **Reportable value undocumented or quietly changed.** Validating on a geometric mean of three runs, then releasing on a single run, without change control and precision re-justification.
8. **Reference standard chain breaks.** New reference or critical-reagent lot introduced without a bridging study, producing an unexplained step in the potency trend.
9. **Wrong validation framework.** Applying PK bioanalytical accuracy/precision limits to a relative-potency release assay, or vice versa.
10. **No trending of system suitability.** Reference EC50, signal window, and control CVs not trended over time, so a slow method drift is invisible until a batch fails.

Cross-link: [FDA warning letter patterns](/articles/fda-warning-letters-patterns), [data integrity foundations](/articles/data-integrity-foundations), and [continued process verification](/articles/continued-process-verification-cpv).

---

## Interview-ready questions and strong answers

**Q: What is relative potency and why do biologics report it instead of an absolute value?**
Relative potency is the ratio of biological activity of a sample to a reference standard, derived from the horizontal shift between their dose-response curves on a log-dose scale. Biologics use it because the assay response is a non-linear, day-to-day-variable biological signal, not a mechanistic instrument reading. Running sample and reference on the same plate and reporting their ratio cancels much of the run-to-run variability and ties the result to a qualified standard.

**Q: What is parallelism and how should it be tested?**
Parallelism is the demonstration that sample and reference curves have the same shape and differ only by a horizontal shift, which is the assumption that makes the potency ratio meaningful at every response level. It should be tested by equivalence testing per USP <1034>: compute a confidence interval for the curve-shape parameters and confirm it falls within pre-defined, data-derived equivalence bounds. The old difference-test approach (fail to find a significant difference equals parallel) is backwards because it rewards imprecise assays.

**Q: 4PL versus 5PL, when do you use which?**
4PL for symmetric sigmoidal curves; 5PL when the curve is genuinely asymmetric and the data have enough points at both plateaus to estimate the asymmetry parameter. The decision is driven by residual analysis (structured residuals near an asymptote signal asymmetry the 4PL cannot capture) and by data density, and it must be fixed in the validated method and applied identically to both curves, with an appropriate variance-based weighting such as 1/Y^2.

**Q: What is the edge effect and how do you control it?**
Outer wells of a plate evaporate and equilibrate differently and read systematically high or low. Control it by randomizing or balancing sample and reference positions so a gradient cancels rather than biases, by excluding or qualifying the outer ring as a pre-defined design choice, by including positional controls, and by analyzing residuals by row and column to detect gradients.

**Q: How do you set acceptance criteria for a potency bioassay?**
From the analytical target profile and the format of the reportable value. Decide first how many independent assays make up the reportable value, because precision improves with the square root of N. Then derive accuracy and precision criteria the method can meet in that format, using the development and validation data. Criteria are justified from data, not copied from a template, and the reportable-value format is locked under change control.

**Q: A sample reads non-parallel. What do you do?**
Do not report a potency number. The run is invalid for potency. Record it, open an investigation following the OOS/OOT process, and look for assignable cause: degraded or aggregated sample, matrix interference, a reagent or cell issue, or a sample whose true potency is outside the validated range. Repeated non-parallels with quiet re-runs and no investigation is a data-integrity violation.

**Q: Which regulations and chapters govern this?**
21 CFR 610.10 and 600.3(s) for the potency requirement and definition; ICH Q6B for the specification; ICH Q2(R2) (2023) and Q14 (2023) for the validation and development framework; and USP <1030> through <1034> plus <111> for bioassay design, validation, and analysis. For PK or immunogenicity ELISAs in matrix, the FDA Bioanalytical Method Validation guidance (2018) and USP <1106>/<1106.1>.

---

## Practical tips

- Lock the analysis. The model, weighting, parallelism bounds, outlier rule, plate layout, and reportable-value format all go into the validated method. If an analyst can change any of them per run, you do not have a validated method, you have a settings menu.
- Trend system suitability continuously. Reference EC50, signal window (D minus A), and control-well CV plotted over time catch slow drift (cell line aging, reagent lot shift) months before a batch fails. Treat this as continued method verification.
- Keep the cell bank disciplined. Passage number, thaw history, and confluence at plating are real sources of variability for cell-based assays. Define passage windows in the procedure and qualify new working cell banks.
- Bridge every reference and critical-reagent lot. A documented bridging study against the current standard prevents silent step-changes in the potency trend.
- Get the statistician in early. Equivalence bounds, variance models, and reportable-value precision are statistical decisions; retrofitting statistics after execution produces a weak validation package.
- Pre-specify everything that could later look like cherry-picking. Outlier rules, well exclusions, and run-validity criteria written down before execution turn a defensible scientific decision into an indefensible one only if they are written down after.
- Make the data flow auditable. Raw plate reads, the fitted parameters, and the reportable value should be traceable end to end in a validated system with audit trails, not transcribed through an uncontrolled spreadsheet.

---

## Related articles

- [Comparability and potency assays](/articles/comparability-and-potency-assays)
- [Method validation essentials](/articles/method-validation-essentials)
- [Method validation execution](/articles/method-validation-execution)
- [ICH Q14 and Q2(R2) analytical lifecycle](/articles/ich-q14-q2r2-analytical-lifecycle)
- [Statistics in quality: Cpk and control charts](/articles/statistics-in-quality-cpk-control-charts)
- [Quality by design and design of experiments](/articles/quality-by-design-and-doe)
- [Process validation for biologics](/articles/process-validation-for-biologics)
- [Out-of-specification investigation process](/articles/oos-investigation-process)
- [Out-of-trend investigations](/articles/out-of-trend-investigations)
- [Stability programs and ICH requirements](/articles/stability-programs-ich)
- [Analytical instrument qualification](/articles/analytical-instrument-qualification)
- [Data integrity foundations](/articles/data-integrity-foundations)
