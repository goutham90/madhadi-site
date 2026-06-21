---
title: "Statistics in QA: Sampling, Process Capability, Control Charts, and OOT"
description: "A working guide to the four statistical tools every quality practitioner is expected to apply: attribute sampling plans, Cp/Cpk/Ppk capability, Shewhart control charts, and out-of-trend detection feeding continued process verification."
pubDate: 2026-06-20
tags: ["process capability", "control charts", "sampling plans", "out-of-trend", "process validation", "statistics", "CPV", "quality assurance"]
pillar: "quality-assurance"
tier: "Intermediate"
---

Quality work runs on inference. You almost never measure every unit, every batch, every data point, you measure a sample and decide something about the whole. That decision is statistical, with or without the math written out. The practitioner who treats sampling as "grab a few and look" is making the same statistical claim as the one who cites an acceptance number from a published plan, just without knowing the producer's and consumer's risk they accepted.

This article walks through the four tools the work demands: how many units to inspect (attribute sampling), whether the process can hold the spec (capability indices), whether the process is behaving consistently over time (control charts), and how to catch a result that is drifting before it goes out of specification (out-of-trend detection). They connect: the same statistics that justify a sampling plan during release support the ongoing process monitoring that the FDA calls Stage 3, continued process verification. The same logic applies to a drug substance batch, a finished device lot, a packaging operation, or an environmental monitoring program. The modality changes; the statistics do not.

## Why statistics is a regulatory expectation, not an optional add-on

The 2011 FDA process validation guidance, *Process Validation: General Principles and Practices*, reframed validation as a lifecycle: Stage 1 process design, Stage 2 process qualification, Stage 3 continued process verification. It leans on statistical thinking throughout. It states plainly that a manufacturer should understand sources of variation, and that "the number of samples should be adequate to provide sufficient statistical confidence of quality both within a batch and between batches." That is a statistical standard of evidence, not a count you pick by feel.

ICH Q10, *Pharmaceutical Quality System*, expects ongoing monitoring of process and product performance. ICH Q9(R1), *Quality Risk Management*, expects risk decisions to be informed by data. Beyond pharma, ISO 9001:2015 (clause 9.1.1) requires evaluation of quality management system performance using "applicable methods, including statistical techniques," and ISO 13485:2016 (clause 8.4, Analysis of data) for medical devices requires documented procedures that include appropriate statistical techniques. For device design and production, FDA 21 CFR 820.250 (Statistical techniques), now harmonized into the Quality Management System Regulation through ISO 13485, requires that sampling plans be "written and based on a valid statistical rationale." None of these prescribe a specific formula. They require that you have a defensible method and apply it.

So the inspector's question is rarely "what is your Cpk?" It is "how did you decide that number was acceptable, and what do you do when it moves?" Knowing the tools is the easy part. Knowing the assumptions behind them, and where they break, is the actual skill. The rest of this article is organized around that distinction: each tool, what it tells you, what it assumes, and what an auditor checks.

A short orientation before the detail. Two ideas thread through everything:

- **Common cause versus special cause.** Common-cause (random, inherent) variation is the process humming along. Special-cause (assignable) variation is an external disturbance: a wrong raw material lot, a worn tool, an operator change, an instrument out of calibration. Almost every tool here exists to tell these two apart, because the correct response is opposite. You leave common cause alone and reduce it by redesign; you hunt down and eliminate special cause.
- **Voice of the process versus voice of the customer.** The process has a natural spread (its voice). The customer or registration sets the specification (their voice). Capability is the comparison of the two. Control is whether the process voice is stable over time. They are independent: a process can be stable and incapable, or capable and unstable.

## Attribute sampling: ANSI/ASQ Z1.4 and the risks you are buying

Attribute sampling is for pass/fail characteristics, a unit conforms or it does not (correct label, intact seal, present component, legible expiry, no visible particulate). The dominant scheme is ANSI/ASQ Z1.4 (historically MIL-STD-105E, and equivalent to ISO 2859-1). It is a system of sampling plans indexed by lot size and an Acceptable Quality Limit (AQL).

### The mechanics, stripped down

1. **Pick an inspection level.** General levels I, II, III trade sample size against discrimination; Level II is the default. Special levels (S-1 through S-4) give very small samples for costly or destructive tests.
2. **Find the sample-size code letter** from the lot size and inspection level in the tables.
3. **Pick the AQL.** This is the quality level the plan is designed to accept most of the time, not a target defect rate and not a guarantee.
4. **Read the accept (Ac) and reject (Re) numbers** for that code letter and AQL from the single, double, or multiple sampling table.

A worked example: a lot of 5,000 units, General Inspection Level II, gives code letter L, which is a sample size of 200. At an AQL of 0.65%, the single sampling plan accepts on 3 or fewer defects (Ac=3) and rejects on 4 or more (Re=4). If you found 3 defective units in your 200, the lot is accepted; the 4th defective rejects it.

### The risks you are actually buying

The trap is reading AQL as "we accept 0.65% defective." What the plan actually fixes is two risks:

| Risk | Whose risk | What it means |
|---|---|---|
| Producer's risk (alpha, ~5%) | Manufacturer | Probability a lot *at the AQL* is wrongly rejected |
| Consumer's risk (beta, often pegged at 10%) | Patient/customer | Probability a lot at the (worse) RQL/LTPD is wrongly accepted |

The full behavior lives in the Operating Characteristic (OC) curve, the probability of acceptance plotted as a function of the lot's true defect rate. Two plans with the same AQL but different sample sizes have different OC curves and very different consumer protection. A small sample at a loose AQL can accept genuinely bad lots a meaningful fraction of the time.

Here is the point that wins the interview. The single number that protects the patient is **not** the AQL, it is the Rejectable Quality Level (RQL), also called the Lot Tolerance Percent Defective (LTPD): the defect rate the plan is designed to reject most of the time. When the characteristic is patient-critical, AQL-based plans are usually the wrong tool. You want a **zero-acceptance (c=0)** plan, or attribute plans built to a specified LTPD, so you are designing around consumer's risk rather than producer convenience. Squeglia's c=0 plans are the common reference for this. A c=0 plan rejects on the first defect found, which is the only logically defensible stance for a critical defect where any nonconformance is a safety issue.

### Switching rules are part of the standard

Z1.4 also defines **switching rules**, normal, tightened, reduced inspection, that are part of the standard, not optional flavor. The built-in feedback logic:

- Start at **normal** inspection.
- Move to **tightened** when 2 of 5 consecutive lots are rejected on original inspection.
- Return to **normal** when 5 consecutive lots are accepted under tightened.
- Move to **reduced** (smaller samples) only when qualifying conditions are met (preceding 10 lots accepted, production steady, approved by authority).
- If a lot is rejected under tightened, **discontinue inspection** under the plan and fix the process before resuming.

Inspectors notice when a site uses the AQL tables but ignores the switching rules; it signals the plan was selected for a number, not operated as a system. A documented finding pattern is a site sitting on tightened-triggering history while still sampling at normal level.

### Where attribute sampling breaks

Z1.4 assumes attributes (count of defectives), random sampling, and lots of comparable history. It says nothing about *which* units you pull. A plan executed by sampling the easiest-to-reach units (the top tray, the front of the tote) is invalid regardless of the Ac/Re numbers; representativeness is an assumption you have to engineer, often with a randomization scheme or a stratified pull across the lot. For variables data, a measured dimension or an assay value, attribute sampling throws away information. There you move to capability indices and, for sampling by measurement, **ANSI/ASQ Z1.9 (ISO 3951)**, which achieves the same protection with smaller samples by using the measured value and an assumed normal distribution.

One more practical decision: single versus double versus multiple sampling. Double and multiple plans can reduce average sample size when lots are clearly good or clearly bad, at the cost of a more complex procedure on the floor. For a hard-to-execute destructive test, fewer average samples is real money; for a fast visual check, the simplicity of a single plan usually wins.

### Roles and responsibilities for sampling

| Role | Responsibility |
|---|---|
| Quality Engineering / Statistician | Selects plan, documents AQL/RQL rationale, OC-curve justification, switching rules |
| QA Operations / Inspection | Executes the pull randomly and representatively, records counts, applies switching |
| Manufacturing / Process Owner | Owns the process that feeds the plan, acts on rejected lots |
| QA Management / Quality Unit | Approves the sampling SOP, dispositions rejected lots, owns the disposition decision |

## Process capability: Cp, Cpk, Pp, Ppk

Capability indices answer a single question: can this process reliably produce output inside the specification limits? They compare the **voice of the process** (its natural spread) to the **voice of the customer** (the spec window).

Define the lower and upper specification limits LSL and USL. The four standard indices:

**Cp**, potential capability, ignores centering:

> Cp = (USL - LSL) / (6 sigma)

**Cpk**, actual capability, accounts for how off-center the mean is:

> Cpk = min[ (USL - mu) / (3 sigma), (mu - LSL) / (3 sigma) ]

**Pp** and **Ppk**, the same two formulas, but using **overall** standard deviation rather than the **within-subgroup** estimate.

### Worked capability example

A fill operation has spec limits LSL = 9.80 mL and USL = 10.20 mL. Across 25 subgroups of 5 vials each, you estimate the mean mu = 10.04 mL, within-subgroup sigma = 0.040 mL, and overall sigma = 0.060 mL.

- Cp = (10.20 - 9.80) / (6 x 0.040) = 0.40 / 0.24 = **1.67**. The spread could fit the window comfortably.
- Cpk = min[ (10.20 - 10.04)/(3 x 0.040), (10.04 - 9.80)/(3 x 0.040) ] = min[ 1.33, 2.00 ] = **1.33**. The process is off-center toward the upper limit, so actual capability is worse than potential.
- Ppk uses overall sigma: min[ (10.20 - 10.04)/(3 x 0.060), (10.04 - 9.80)/(3 x 0.060) ] = min[ 0.89, 1.33 ] = **0.89**.

Read the story those three numbers tell: Cp says the inherent spread is fine (1.67), Cpk says centering costs you (1.33), and Ppk well below Cpk (0.89) says the process is wandering between subgroups. Instant-to-instant the process is capable; over time it is not delivering it, and the recentering plus a hunt for the between-subgroup source (shift, raw material lot, setpoint creep) is the action.

### The Cp/Pp distinction, said precisely

This is the part people get wrong, so be exact about it:

- **Cp and Cpk** use the *within-subgroup* standard deviation, typically estimated from the average range (R-bar/d2) or pooled subgroup variation. This is "short-term" capability, what the process could do if only common-cause variation were present. It implicitly assumes the process is in statistical control.
- **Pp and Ppk** use the *overall* standard deviation computed from all individual values. This is "long-term" performance and captures shift and drift between subgroups.

A large gap between Cpk and Ppk is a signal: the within-subgroup spread is tight but the process is wandering between subgroups (tool wear, shift changes, lot-to-lot raw material variation). Cpk says "capable instant to instant," Ppk says "not actually delivering that over time." Reporting Cpk alone on a drifting process flatters the result. A convention worth knowing: many statisticians reserve Cp/Cpk for the in-control short-term picture and report Pp/Ppk as the honest long-term performance, then quote the ratio as a stability indicator.

There is also the one-sided case. A microbial count, an impurity, or an endotoxin level has only an upper limit. Then only the relevant half of the Cpk formula applies (often written Cpu), and Cp is undefined because there is no two-sided window.

### What the numbers mean

Assuming a normal, in-control process:

| Cpk | Approx. defects per million (centered) | Sigma level | Practitioner reading |
|---|---|---|---|
| 1.00 | ~2,700 | ~3 sigma | Process spread equals spec width; marginal |
| 1.33 | ~63 | ~4 sigma | Common minimum expectation |
| 1.67 | ~0.6 | ~5 sigma | Strong capability |
| 2.00 | ~0.002 | ~6 sigma | Six Sigma; rarely required outside high-risk attributes |

A note on the famous "1.5 sigma shift." The Six Sigma program assumes a long-term process can drift up to 1.5 sigma from center, which is why a "6 sigma" process is quoted at 3.4 defects per million rather than the 0.002 a perfectly centered 6 sigma process implies. That is a long-term-versus-short-term accounting convention, not a law of nature; know it exists so you can answer the question, but do not treat 3.4 DPMO as a regulatory target.

### The assumptions that invalidate the index

1. **Normality.** Cpk's defect estimates assume a normal distribution. Many real quality characteristics are not normal: particle counts, impurities near zero, dissolution bounded at a ceiling, anything with a hard physical floor. Compute Cpk on skewed data and the implied PPM is fiction. Either transform the data (for example, Box-Cox), use a non-normal capability method that fits the actual distribution (a fitted Weibull or lognormal), or use percentile-based indices that read off the 0.135 and 99.865 percentiles of the fitted curve. Run a normality test (Anderson-Darling, Shapiro-Wilk) and, more usefully, look at the histogram and probability plot before you trust the number.
2. **Statistical control.** Capability is only meaningful for a stable process. If the process is out of control, sigma is not estimating a stable spread, it is a mix of common and special causes, and the index has no predictive value. **Always confirm control with a chart before computing capability.** This is the single most common analytical error in capability studies.
3. **Adequate, representative data.** A handful of consecutive units underestimates true variation. Capability studies generally want enough subgroups to see between-subgroup variation, commonly 25 or more subgroups, collected across the real sources of variation (shifts, operators, lots, seasons).
4. **Measurement system adequacy.** If your gauge variation is a large fraction of the total, your sigma is partly the measurement system, not the process. A measurement systems analysis (Gauge R&R) should precede a serious capability claim; a rule of thumb flags a measurement system consuming more than 10 percent of tolerance as marginal.

Inspectors and auditors look for the linkage: a capability claim should trace to a stability assessment, a normality check, a measurement-system check, and a defined sample plan. A lone Cpk on a slide with no control chart and no normality statement is a finding waiting to happen.

## Shewhart control charts: separating signal from noise

A control chart is the tool that decides whether variation is **common cause** (inherent, random, the process humming along) or **special cause** (an assignable, external disturbance). Walter Shewhart's insight, from the 1920s, still anchors the discipline: react to every wiggle and you "tamper," adding variation; ignore real signals and you ship drift. Control limits are the decision boundary.

Control limits are **not** specification limits. Specs come from the customer or registration; control limits come from the process data itself, conventionally the mean plus or minus 3 sigma of the plotted statistic. A process can be in perfect statistical control and still fail spec (capable of nothing useful), or be capable but out of control (capable on average, unpredictable). You need both views, and you never draw spec limits on a control chart, because doing so invites operators to chase the chart toward spec, which is the tampering Shewhart warned against.

### Choosing the chart

The chart depends on the data type:

| Data type | Chart pair | Use case |
|---|---|---|
| Variables, subgroups n>=2 | X-bar/R (or X-bar/S for larger n) | Fill weight measured in subgroups |
| Variables, single readings | I-MR (individuals and moving range) | One value per batch (assay, yield, pH) |
| Attributes, defectives, constant n | np | Count of rejected units per fixed lot |
| Attributes, proportion defective | p | Fraction nonconforming, varying lot size |
| Attributes, count of defects | c | Defects per unit, constant opportunity |
| Attributes, defects per unit | u | Defects per unit, varying opportunity |

In batch pharma and biologics manufacturing the **I-MR chart** dominates, because you usually get one result per batch, not subgroups. That choice has consequences: I-MR is slower to detect small sustained shifts than subgrouped charts and is sensitive to non-normality. For detecting small, persistent drifts, **EWMA** (exponentially weighted moving average) or **CUSUM** (cumulative sum) charts are markedly more powerful and are the right escalation when a half-sigma drift matters, for example a slowly degrading chromatography column or a creeping fill setpoint. EWMA and CUSUM trade the fast detection of a large shift for far better detection of a small one; pick based on which failure mode hurts.

### How control limits are actually set

The procedure is specific and inspectors ask about it:

1. **Collect a baseline** of data from a period believed to be in control, commonly 20 to 30 subgroups (or individual points for I-MR).
2. **Compute the centerline** (the mean) and the **process sigma** from within-subgroup variation. For I-MR, sigma is estimated from the average moving range divided by 1.128, not from the standard deviation of all points, because the moving-range estimate is insensitive to the very drift you are trying to detect.
3. **Set limits at centerline plus and minus 3 sigma.** Apply the chart constants (A2, D3, D4 for X-bar/R; the moving-range factors for I-MR) rather than computing 3 sigma by hand.
4. **Remove identified special-cause points** with a documented assignable cause, then recompute, so the baseline limits reflect a stable process.
5. **Lock the limits** and define a recalculation trigger: limits are recalculated only on a deliberate, justified basis (a validated process change, a defined data interval), never quietly each time new data arrives. Auto-recalculating limits every point is a classic way to make a drifting process look stable.

### Western Electric / Nelson rules

The control limit alone (a point beyond 3 sigma) is only one of several signals. The Western Electric rules (from the 1956 WECO *Statistical Quality Control Handbook*), refined by Nelson, define patterns that indicate a process is no longer behaving randomly even when no single point has breached 3 sigma. The chart is divided into zones: Zone A (2 to 3 sigma), Zone B (1 to 2 sigma), Zone C (0 to 1 sigma) on each side. The core set:

1. **One point beyond 3 sigma** (Zone A and out): gross shift or measurement error.
2. **Two of three consecutive points beyond 2 sigma** on the same side: emerging shift.
3. **Four of five consecutive points beyond 1 sigma** on the same side: sustained smaller shift.
4. **Eight (or nine) consecutive points on one side of the centerline**: a mean shift the limits have not caught yet.

Nelson's full set adds trend rules (six points steadily increasing or decreasing), stratification (fifteen points hugging the centerline in Zone C, often a sign of incorrectly computed limits or mixed data streams), and oscillation (fourteen points alternating up and down, over-adjustment or two interleaved streams).

A practical caution: every rule you add raises the **false-alarm rate**. A single point on a stable process trips the 3 sigma rule about 0.27 percent of the time (roughly 1 in 370 points). With all eight Nelson rules running, the chance of a false signal on a stable process climbs well above that. Apply rules deliberately. For routine release monitoring, the 3 sigma rule plus a run rule (8 or 9 on one side) and a trend rule covers most real signals without drowning the team in false positives. Reserve the full battery for investigations where sensitivity outweighs false-alarm cost. State which rules you apply in the SOP, so the response is consistent and the rule set is auditable.

### Rational subgrouping

The most under-appreciated control-chart concept is **rational subgrouping**, organizing data so that *within-subgroup* variation captures only common cause, and *between-subgroup* variation exposes the special causes you care about. If you build a subgroup from units spanning a shift change, you bury the shift effect inside the within-subgroup noise and the chart goes blind to it. Conversely, sampling five consecutive units off one head of a multi-head filler tells you about that head's repeatability but hides head-to-head differences. Subgroup composition is a design decision, and getting it wrong makes a technically correct chart useless. The question to ask: "what source of variation do I most want this chart to catch, and have I arranged the subgroups so it shows up *between* subgroups rather than hiding *within* them?"

### What "out of control" obligates you to do

A control chart is only worth keeping if a signal triggers action. A defensible SOP states: on a confirmed special-cause signal, the process owner initiates an assessment, the event is logged (often as a deviation if product is affected), root cause is pursued, and the corrective action is verified by the chart returning to control. A chart that has been red for six months with no investigation is worse than no chart, because it documents that you saw the signal and did nothing.

## Out-of-trend (OOT): catching drift before it becomes OOS

An **out-of-specification (OOS)** result fails a registered acceptance criterion. It is a discrete event with a defined investigative path; the FDA guidance *Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production* (2006) is the reference, and the laboratory side is covered in detail in our [OOS investigation process](/articles/oos-investigation-process) article. An **out-of-trend (OOT)** result is different: it is *within* specification but inconsistent with the expected pattern from historical data. OOT is the early-warning layer. By the time a result is OOS, you have a confirmed problem; OOT is the chance to act while everything still passes.

OOT matters most in **stability programs**, where you track a product across its shelf life and a single timepoint can look fine against spec while the trend line is clearly walking toward the limit before expiry. It also applies to release results trending across batches and to environmental monitoring counts creeping upward. See [stability programs (ICH Q1A-Q1E)](/articles/stability-programs-ich) for the program context and [out-of-trend investigations](/articles/out-of-trend-investigations) for the investigation mechanics.

### The three statistical approaches

There is no single regulatory formula for OOT, but the industry converged on three complementary statistical approaches, most influentially described in a 2003 PhRMA stability working-group paper in *Pharmaceutical Technology*:

1. **By-time-point (control-chart-style):** compare a new result at a given timepoint against the distribution of historical results at that same timepoint. A result beyond a control limit (mean plus or minus 3 sigma of comparable historical data) is OOT for that point.
2. **By-time-point regression / slope:** fit the historical stability trend and flag a result that deviates from the predicted value by more than a defined tolerance (for example, a prediction interval). This catches a single aberrant point against an otherwise good trend.
3. **Slope control / regression-control:** evaluate whether the *slope* of an individual batch's degradation differs from the historical slope distribution, catching a batch degrading faster than the population even if no single point is alarming yet.

### Worked OOT example

A small-molecule assay has a release range of 95.0 to 105.0 percent and a stability trend that declines slowly. From 12 historical batches the 18-month assay values average 98.5 percent with a standard deviation of 0.5 percent. A new batch reads 96.8 percent at 18 months.

- Against spec: 96.8 is well inside 95.0 to 105.0, so it is **not** OOS.
- By-time-point limit: mean minus 3 sigma = 98.5 - 1.5 = 97.0 percent. The result of 96.8 is below 97.0, so it is **OOT** for that timepoint.
- Action: 96.8 at 18 months, declining, projects below 95.0 before the 24-month expiry. This is exactly the case OOT exists to catch: passing today, failing before end of shelf life. It triggers an assessment of the trend and the affected batch, not an automatic OOS lab investigation, though it can escalate to one.

### What an OOT program must define

A workable OOT program defines, in an SOP:

- The **limit-setting basis**: how many historical batches or lots establish the baseline, and the minimum data before limits are considered valid. A common rule is a minimum of around 6 to 10 batches before by-time-point limits mean anything; fewer, and the limits are noise.
- The **statistical method(s)** applied and the alert/action thresholds.
- The **distinction from OOS**: OOT triggers an *assessment*, not automatically a full OOS lab investigation, though it can escalate.
- The **action on a confirmed OOT**: assessment, potential investigation, impact on the affected lot and on the trend, and any communication to stability or release decisions.
- The **cadence**: OOT is evaluated when each result is generated, not retrospectively at annual product review.

The most common failure mode is setting OOT limits from too few batches, so the "limits" are just noise, and then either drowning in false alarms or quietly widening the limits until they never fire. Both defeat the purpose. The other classic gap is having an OOT procedure on paper that no one actually runs until the annual product review, at which point the drift has been visible for months. A documented inspection pattern is exactly this: a stability trend walking toward the limit for four timepoints, flagged only when the lot finally went OOS, with the OOT SOP never invoked.

## How it ties together: continued process verification (Stage 3)

Stage 3 of the FDA lifecycle is where these tools stop being separate exercises and become one monitoring system. The aim is ongoing assurance that the process stays in the validated state of control during routine production. The same expectation lives in the EU GMP Annex 15 concept of ongoing process verification, and the program-level treatment is in our [continued process verification (CPV)](/articles/continued-process-verification-cpv) article.

A concrete Stage 3 loop:

1. **Identify the parameters and attributes to monitor**: critical quality attributes and critical process parameters established in Stage 1, informed by risk assessment (ICH Q9, see [quality risk management](/articles/quality-risk-management)).
2. **Collect data per a defined sampling plan**: the same statistical-confidence standard the validation guidance demands, executed with random, representative sampling.
3. **Plot on control charts** (I-MR for batch results, with EWMA/CUSUM where small drifts matter) and apply a defined, deliberate set of run rules.
4. **Compute capability periodically** (Ppk for the as-delivered long-term picture), having first confirmed statistical control, because capability on an out-of-control process is meaningless.
5. **Run OOT detection** on the parameters where drift toward a limit is the failure mode, especially stability.
6. **Feed signals into the quality system**: a control-chart special cause or a confirmed OOT becomes a [deviation](/articles/deviation-management) or [change control](/articles/change-control-validated-systems) input, closing the loop back to ICH Q10's continual improvement expectation, and rolling up into the [annual product review (APR/PQR)](/articles/annual-product-review-pqr).

The intellectual honesty test for the whole chain is this: each statistic should be traceable to a stated assumption (normality, statistical control, representative sampling, an adequate measurement system) and a documented rationale for its limits. A capability index without a stability check, a sampling plan without its OC-curve/consumer-risk justification, a control chart with limits set on three data points, or an OOT procedure that never actually runs, each is a place where the math is decorative rather than load-bearing.

### Roles across the Stage 3 loop

| Role | Responsibility |
|---|---|
| Process owner / Manufacturing science | Owns the CPV protocol, the parameter list, and acts on signals |
| Quality / Statistician | Sets the methods, limits, and rules; reviews charts; defends the rationale to inspectors |
| QA review | Confirms signals are dispositioned, trends are reviewed on cadence, and the loop into deviation/change control is closed |
| QC laboratory | Generates the underlying data, owns OOS/OOT laboratory assessment |

## Common mistakes and inspection-finding patterns

- **AQL read as an accept rate.** Treating "AQL 0.65%" as a promise that lots are 0.65% defective, with no RQL or OC-curve justification for critical defects. Finding: critical defect sampled to a loose AQL with no consumer-risk basis.
- **Switching rules ignored.** Using Z1.4 tables but never moving to tightened inspection despite a rejection history that requires it.
- **Capability on an unstable or non-normal process.** A Cpk quoted with no control chart and no normality statement, with an implied PPM that the data do not support.
- **Cpk reported, Ppk hidden.** Reporting only the flattering short-term index on a process that drifts between subgroups.
- **Spec limits drawn on a control chart.** Mixing the voice of the customer onto a process-voice chart, inviting tampering toward spec.
- **Control limits auto-recalculated every point.** Limits that quietly track a drifting process so it never signals.
- **Run rules undefined or applied inconsistently.** Different analysts calling different patterns, or the full Nelson battery on routine charts drowning the team in false alarms.
- **Charts red with no action.** Documented signals with no investigation, which is worse than no chart.
- **OOT limits from too few batches, or an OOT SOP that only runs at annual review.** Drift visible for months, caught only when it finally goes OOS.
- **Non-representative sampling.** A statistically correct plan executed by pulling the easiest units, invalidating the result regardless of the Ac/Re numbers.

## What an inspector actually probes

- **Sampling:** "Show me how this n was derived." They want a statistical justification, not "it's what we've always done." For critical attributes they expect to see consumer's risk addressed, often via c=0, and they expect the switching rules to be operated.
- **Capability:** "Was the process in control when you computed this? Is the data normal? How good is the measurement system?" An unsupported Cpk invites a follow-up that the site usually cannot answer.
- **Control charts:** "How were the limits established, how often are they recalculated, and what happens when a rule fires?" They look for evidence that signals trigger action, not just a chart that has been red for six months.
- **OOT:** "How is OOT different from OOS here, and what is your action when an OOT confirms?" They want a real, run-on-time procedure, not an annual-review afterthought.

### Interview questions and how to answer them

**Q: What is the difference between Cp and Cpk?**
Cp measures potential capability, the ratio of the spec width to the process spread (6 sigma), and ignores where the process is centered. Cpk adds centering by taking the minimum of the distance from the mean to each spec limit over 3 sigma. Cp equals Cpk only when the process is perfectly centered; Cpk is always less than or equal to Cp.

**Q: When do you use Ppk instead of Cpk?**
Cpk uses within-subgroup (short-term) sigma and assumes statistical control; Ppk uses the overall (long-term) sigma from all individual values and captures drift between subgroups. Use Ppk to report actual delivered performance over time, and compare the two: a large Cpk-to-Ppk gap means the process is wandering between subgroups even though each subgroup is tight.

**Q: A point is inside the control limits but the last eight points are all above the centerline. Is the process in control?**
No. That is a Western Electric run rule (eight or nine on one side), a sustained mean shift the 3 sigma limit has not yet caught. It is a special-cause signal and should trigger an assessment even though no single point breached 3 sigma.

**Q: Why can't I just use specification limits as my control limits?**
They answer different questions. Specs come from the customer or registration and describe acceptable product; control limits come from the process data and describe expected process behavior. A process can be in control and still fail spec, or be capable and out of control. Drawing specs on a control chart encourages operators to adjust toward spec, which adds variation (tampering).

**Q: What is the difference between OOS and OOT?**
OOS fails a registered acceptance criterion and triggers a defined investigation path. OOT is within spec but inconsistent with the historical trend; it is an early-warning signal that triggers an assessment before a result actually fails, most importantly in stability where a passing result can be projected to fail before expiry.

**Q: What is an AQL and what does it not tell you?**
AQL is the quality level a sampling plan is designed to accept most of the time; it sets producer's risk. It is not a guarantee of outgoing quality and not a promise that lots are at or below that defect rate. The consumer's protection comes from the RQL/LTPD and the OC curve, which is why critical defects often use c=0 plans designed around consumer's risk.

**Q: Before you compute capability, what do you check?**
Statistical control (with a chart), normality of the distribution, that the data are representative and span the real sources of variation, and that the measurement system is adequate (Gauge R&R). Capability computed without those checks can be confidently wrong.

None of this requires a statistician's depth on day one. It requires understanding what each tool assumes, what it actually tells you, and where it lies to you if you skip the assumption check. That is the statistical literacy the role demands, and it is mostly about being honest with yourself about what a sample of the whole can, and cannot, prove. For the broader process context, see [process validation lifecycle](/articles/process-validation-lifecycle) and [quality metrics and KPIs](/articles/quality-metrics-and-kpis); for the clinical-trial counterpart of these methods, see [trial design statistics (ICH E8/E9)](/articles/ich-e8-e9-trial-design-statistics).

## References (cited by name)

- FDA, *Guidance for Industry: Process Validation, General Principles and Practices* (2011): lifecycle model, statistical-confidence standard for sampling.
- FDA, *Guidance for Industry: Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production* (2006): OOS investigation framework (contrast with OOT).
- ICH Q9(R1) (Quality Risk Management), ICH Q10 (Pharmaceutical Quality System).
- EU GMP Annex 15 (Qualification and Validation): ongoing process verification.
- ANSI/ASQ Z1.4 (attribute sampling; ISO 2859-1 equivalent) and ANSI/ASQ Z1.9 (variables sampling; ISO 3951 equivalent).
- 21 CFR 820.250 (Statistical techniques), now harmonized into the Quality Management System Regulation via ISO 13485:2016.
- Squeglia, *Zero Acceptance Number Sampling Plans*: c=0 consumer-risk-based plans.
- Western Electric, *Statistical Quality Control Handbook* (1956); L. S. Nelson, control-chart run rules (Journal of Quality Technology).
- ISO 9001:2015 (clause 9.1.1) and ISO 13485:2016: requirements for statistical techniques in the quality management system.
- PhRMA CMC Statistics and Stability Expert Teams, out-of-trend detection methods for stability data (*Pharmaceutical Technology*, 2003).
