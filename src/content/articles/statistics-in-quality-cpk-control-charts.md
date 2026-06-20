---
title: "Statistics in QA: Sampling, Process Capability, Control Charts, and OOT"
description: "A working guide to the four statistical tools every pharmaceutical quality practitioner is expected to apply: attribute sampling plans, Cp/Cpk/Ppk capability, Shewhart control charts, and out-of-trend detection feeding continued process verification."
pubDate: 2026-06-20
tags: ["process capability", "control charts", "sampling plans", "out-of-trend", "process validation", "statistics", "CPV", "quality assurance"]
pillar: "quality-assurance"
tier: "Intermediate"
---

Quality work runs on inference. You almost never measure every unit, every batch, every data point, you measure a sample and decide something about the whole. That decision is statistical whether you do the math explicitly or not. The practitioner who treats sampling as "grab a few and look" is making the same statistical claim as the one who cites an acceptance number from a published plan, just without knowing the producer's and consumer's risk they accepted.

This article walks through the four tools the work demands: how many units to inspect (attribute sampling), whether the process can hold the spec (capability indices), whether the process is behaving consistently over time (control charts), and how to catch a result that is drifting before it goes out of specification (out-of-trend detection). They connect: the same statistics that justify a sampling plan during release support the ongoing process monitoring that the FDA calls Stage 3, continued process verification.

## Why statistics is a regulatory expectation, not an optional add-on

The 2011 FDA process validation guidance reframed validation as a lifecycle, Stage 1 process design, Stage 2 process qualification, Stage 3 continued process verification, and it leans on statistical thinking throughout. It states plainly that a manufacturer should understand sources of variation, and that "the number of samples should be adequate to provide sufficient statistical confidence of quality both within a batch and between batches." That is a statistical standard of evidence, not a count you pick by feel.

ICH Q10, the pharmaceutical quality system, expects ongoing monitoring of process and product performance. ICH Q9 (Quality Risk Management) expects risk decisions to be informed by data. Beyond pharma, ISO 9001 requires evaluation of quality management system performance using "applicable methods, including statistical techniques," and ISO 13485 for medical devices requires documented procedures for the statistical techniques used and their extent. The standards do not prescribe a specific formula; they require that you have a defensible method and apply it.

So the inspector's question is rarely "what is your Cpk?" It is "how did you decide that number was acceptable, and what do you do when it moves?" Knowing the tools is the easy part. Knowing the assumptions behind them, and where they break, is the actual skill.

## Attribute sampling: ANSI/ASQ Z1.4 and the risks you are buying

Attribute sampling is for pass/fail characteristics, a unit conforms or it does not (correct label, intact seal, present component). The dominant scheme is ANSI/ASQ Z1.4 (historically MIL-STD-105E, and equivalent to ISO 2859-1). It is a system of sampling plans indexed by lot size and an Acceptable Quality Limit (AQL).

The mechanics, stripped down:

1. **Pick an inspection level.** General levels I, II, III trade sample size against discrimination; Level II is the default. Special levels (S-1 through S-4) give very small samples for costly or destructive tests.
2. **Find the sample-size code letter** from the lot size and inspection level in the tables.
3. **Pick the AQL.** This is the quality level the plan is designed to accept most of the time, not a target defect rate and not a guarantee.
4. **Read the accept (Ac) and reject (Re) numbers** for that code letter and AQL.

A worked example: a lot of 5,000 units, General Inspection Level II, gives code letter L, which is a sample size of 200. At an AQL of 0.65%, the single sampling plan accepts on 3 or fewer defects (Ac=3) and rejects on 4 or more (Re=4).

The trap is reading AQL as "we accept 0.65% defective." What the plan actually fixes is two risks:

| Risk | Whose risk | What it means |
|---|---|---|
| Producer's risk (α, ~5%) | Manufacturer | Probability a lot *at the AQL* is wrongly rejected |
| Consumer's risk (β, often pegged at 10%) | Patient/customer | Probability a lot at the (worse) RQL/LTPD is wrongly accepted |

The full behavior lives in the Operating Characteristic (OC) curve, probability of acceptance as a function of the lot's true defect rate. Two plans with the same AQL but different sample sizes have different OC curves and very different consumer protection. A small sample at a loose AQL can accept genuinely bad lots a meaningful fraction of the time. When the characteristic is patient-critical, AQL-based plans are usually the wrong tool: you want a **zero-acceptance (c=0)** plan, or attribute plans built to a specified Lot Tolerance Percent Defective, so you are designing around consumer's risk rather than producer convenience. Squeglia's c=0 plans are the common reference for this.

Z1.4 also defines **switching rules**, normal, tightened, reduced inspection, that are part of the standard, not optional flavor. Move to tightened inspection when 2 of 5 consecutive lots are rejected on original inspection; this is the standard's built-in feedback loop. Inspectors notice when a site uses the AQL tables but ignores the switching rules; it signals the plan was selected for a number, not operated as a system.

**Where it breaks:** Z1.4 assumes attributes (count of defectives), random sampling, and lots of comparable history. It says nothing about *which* units you pull. A plan executed by sampling the easiest-to-reach units is invalid regardless of the Ac/Re numbers. For variables data, a measured dimension, an assay value, attribute sampling throws away information. There you move to capability indices and, for sampling by measurement, ANSI/ASQ Z1.9 (ISO 3951), which achieves the same protection with smaller samples by using the measured value and an assumed normal distribution.

## Process capability: Cp, Cpk, Pp, Ppk

Capability indices answer a single question: can this process reliably produce output inside the specification limits? They compare the **voice of the process** (its natural spread) to the **voice of the customer** (the spec window).

Define the lower and upper specification limits LSL and USL. The four standard indices:

**Cp**, potential capability, ignores centering:

> Cp = (USL − LSL) / (6σ)

**Cpk**, actual capability, accounts for how off-center the mean is:

> Cpk = min[ (USL − μ) / (3σ), (μ − LSL) / (3σ) ]

**Pp** and **Ppk**, the same formulas, but using **overall** standard deviation rather than the **within-subgroup** estimate.

The Cp/Pp distinction is the part people get wrong, so be precise about it:

- **Cp and Cpk** use the *within-subgroup* standard deviation, typically estimated from the average range (R-bar/d2) or pooled subgroup variation. This is "short-term" capability, what the process could do if only common-cause variation were present. It implicitly assumes the process is in statistical control.
- **Pp and Ppk** use the *overall* standard deviation computed from all individual values. This is "long-term" performance and captures shift and drift between subgroups.

A large gap between Cpk and Ppk is a signal: the within-subgroup spread is tight but the process is wandering between subgroups (tool wear, shift changes, lot-to-lot raw material variation). Cpk says "capable instant to instant," Ppk says "not actually delivering that over time." Reporting Cpk alone on a drifting process flatters the result.

What the numbers mean, assuming a normal, in-control process:

| Cpk | Approx. defects per million (centered) | Practitioner reading |
|---|---|---|
| 1.00 | ~2,700 | Process spread equals spec width; marginal |
| 1.33 | ~63 | Common minimum expectation (~4σ) |
| 1.67 | ~0.6 | Strong capability (~5σ) |
| 2.00 | ~0.002 | Six Sigma; rarely required outside high-risk attributes |

**The assumptions that invalidate the index:**

1. **Normality.** Cpk's defect estimates assume a normal distribution. Many real quality characteristics are not normal, particle counts, impurities near zero, dissolution at a ceiling. Compute Cpk on skewed data and the implied PPM is fiction. Either transform the data (e.g., Box-Cox), use a non-normal capability method that fits the actual distribution, or use percentile-based indices.
2. **Statistical control.** Capability is only meaningful for a stable process. If the process is out of control, σ is not estimating a stable spread, it is a mix of common and special causes, and the index has no predictive value. **Always confirm control with a chart before computing capability.** This is the single most common analytical error in capability studies.
3. **Adequate, representative data.** A handful of consecutive units underestimates true variation. Capability studies generally want enough subgroups to see between-subgroup variation, commonly 25+ subgroups, collected across the real sources of variation (shifts, operators, lots).

Inspectors and auditors look for the linkage: a capability claim should trace to a stability assessment, a normality check, and a defined sample plan. A lone Cpk on a slide with no control chart and no normality statement is a finding waiting to happen.

## Shewhart control charts: separating signal from noise

A control chart is the tool that decides whether variation is **common cause** (inherent, random, the process humming along) or **special cause** (an assignable, external disturbance). Walter Shewhart's insight, from the 1920s, still anchors the discipline: react to every wiggle and you "tamper," adding variation; ignore real signals and you ship drift. Control limits are the decision boundary.

Control limits are **not** specification limits. Specs come from the customer/registration; control limits come from the process data itself, conventionally the mean ± 3σ of the plotted statistic. A process can be in perfect statistical control and still fail spec (capable of nothing useful), or be capable but out of control (capable on average, unpredictable). You need both views.

Choosing the chart depends on the data type:

| Data type | Chart pair | Use case |
|---|---|---|
| Variables, subgroups n≥2 | X̄-R (or X̄-S for larger n) | Fill weight measured in subgroups |
| Variables, single readings | I-MR (individuals & moving range) | One value per batch (assay, yield) |
| Attributes, defectives, constant n | np | Count of rejected units per fixed lot |
| Attributes, proportion defective | p | Fraction nonconforming, varying lot size |
| Attributes, count of defects | c | Defects per unit, constant opportunity |
| Attributes, defects per unit | u | Defects per unit, varying opportunity |

In batch pharma manufacturing the **I-MR chart** dominates, because you usually get one result per batch, not subgroups. That choice has consequences: I-MR is slower to detect small sustained shifts than subgrouped charts and is sensitive to non-normality. For detecting small, persistent drifts, **EWMA** (exponentially weighted moving average) or **CUSUM** charts are markedly more powerful and are the right escalation when a half-sigma drift matters, for example, a slowly degrading column or a creeping fill setpoint.

### Western Electric / Nelson rules

The control limit alone (a point beyond 3σ) is only one of several signals. The Western Electric rules (from the 1956 WECO handbook), refined by Nelson, define patterns that indicate a process is no longer behaving randomly even when no single point has breached 3σ. The core set:

1. **One point beyond 3σ** (Zone A and out), gross shift or measurement error.
2. **Two of three consecutive points beyond 2σ** on the same side, emerging shift.
3. **Four of five consecutive points beyond 1σ** on the same side, sustained smaller shift.
4. **Eight (or nine) consecutive points on one side of the centerline**, a mean shift the limits haven't caught yet.

Nelson's full set adds trend rules (six points steadily increasing or decreasing), stratification (fifteen points hugging the centerline in Zone C, often a sign of incorrectly computed limits or mixed data), and oscillation (fourteen points alternating up/down, over-adjustment or two interleaved streams).

A practical caution: every rule you add raises the **false-alarm rate**. With all eight Nelson rules running, the chance of a false signal on a stable process climbs well above the ~0.27% you get from the single 3σ rule. Apply rules deliberately. For routine release monitoring, the 3σ rule plus a run rule (8 or 9 on one side) and a trend rule covers most real signals without drowning the team in false positives. Reserve the full battery for investigations where sensitivity outweighs false-alarm cost.

### Rational subgrouping

The most under-appreciated control-chart concept is **rational subgrouping**, organizing data so that *within-subgroup* variation captures only common cause, and *between-subgroup* variation exposes the special causes you care about. If you build a subgroup from units spanning a shift change, you bury the shift effect inside the within-subgroup noise and the chart goes blind to it. Subgroup composition is a design decision, and getting it wrong makes a technically correct chart useless.

## Out-of-trend (OOT): catching drift before it becomes OOS

An **out-of-specification (OOS)** result fails a registered acceptance criterion, it is a discrete event with a defined investigative path (the FDA OOS guidance for laboratory investigations is the reference here). An **out-of-trend (OOT)** result is different: it is *within* specification but inconsistent with the expected pattern from historical data. OOT is the early-warning layer. By the time a result is OOS, you have a confirmed problem; OOT is the chance to act while everything still passes.

OOT matters most in **stability programs**, where you track a product across its shelf life and a single timepoint can look fine against spec while the trend line is clearly walking toward the limit before expiry. It also applies to release results trending across batches and to environmental monitoring.

There is no single regulatory formula for OOT, but the industry converged on three complementary statistical approaches, most influentially described in a 2003 PhRMA stability working-group paper (Pharmaceutical Technology):

1. **By-time-point (control-chart-style):** compare a new result at a given timepoint against the distribution of historical results at that same timepoint. A result beyond a control limit (mean ± 3σ of comparable historical data) is OOT for that point.
2. **By-time-point regression / slope:** fit the historical stability trend and flag a result that deviates from the predicted value by more than a defined tolerance (e.g., a prediction interval). This catches a single aberrant point against an otherwise good trend.
3. **Slope control / regression-control:** evaluate whether the *slope* of an individual batch's degradation differs from the historical slope distribution, catching a batch degrading faster than the population even if no single point is alarming yet.

A workable OOT program defines, in an SOP:

- The **limit-setting basis** (how many historical batches/lots establish the baseline, minimum data before limits are valid).
- The **statistical method(s)** applied and the alert/action thresholds.
- The **distinction from OOS**, OOT triggers an *assessment*, not automatically a full OOS lab investigation, though it can escalate.
- The **action on a confirmed OOT**, assessment, potential investigation, impact on the affected lot and on the trend.

The most common failure mode is setting OOT limits from too few batches, so the "limits" are just noise, and then either drowning in false alarms or quietly widening the limits until they never fire. Both defeat the purpose. The other classic gap is having an OOT procedure on paper that no one actually runs until annual product review, at which point the drift has been visible for months.

## How it ties together: continued process verification (Stage 3)

Stage 3 of the FDA lifecycle is where these tools stop being separate exercises and become one monitoring system. The aim is ongoing assurance that the process stays in the validated state of control during routine production. The same expectation lives in the EU GMP Annex 15 concept of ongoing process verification.

A concrete Stage 3 loop:

1. **Identify the parameters and attributes to monitor**, critical quality attributes and critical process parameters established in Stage 1, informed by risk assessment (ICH Q9).
2. **Collect data per a defined sampling plan**, the same statistical-confidence standard the validation guidance demands, executed with random, representative sampling.
3. **Plot on control charts** (I-MR for batch results, with EWMA/CUSUM where small drifts matter) and apply a defined, deliberate set of run rules.
4. **Compute capability periodically** (Ppk for the as-delivered long-term picture), having first confirmed statistical control, capability on an out-of-control process is meaningless.
5. **Run OOT detection** on the parameters where drift toward a limit is the failure mode, especially stability.
6. **Feed signals into the quality system**, a control-chart special cause or a confirmed OOT becomes a deviation or change-control input, closing the loop back to ICH Q10's continual improvement expectation.

The intellectual honesty test for the whole chain is this: each statistic should be traceable to a stated assumption (normality, statistical control, representative sampling) and a documented rationale for its limits. A capability index without a stability check, a sampling plan without its OC-curve/consumer-risk justification, a control chart with limits set on three data points, or an OOT procedure that never actually runs, each is a place where the math is decorative rather than load-bearing.

## What an inspector actually probes

- **Sampling:** "Show me how this n was derived." They want statistical justification, not "it's what we've always done." For critical attributes they expect to see consumer's risk addressed, often via c=0.
- **Capability:** "Was the process in control when you computed this? Is the data normal?" An unsupported Cpk invites a follow-up that the site usually can't answer.
- **Control charts:** "How were the limits established, and how often are they recalculated? What happens when a rule fires?" They look for evidence that signals trigger action, not just a chart that's been red for six months with no investigation.
- **OOT:** "How is OOT different from OOS here, and what's your action when an OOT confirms?" They want a real, run-on-time procedure, not an annual-review afterthought.

None of this requires a statistician's depth on day one. It requires understanding what each tool assumes, what it actually tells you, and where it lies to you if you skip the assumption check. That is the statistical literacy the role demands, and it is mostly about being honest with yourself about what a sample of the whole can, and cannot, prove.

## References (cited by name)

- FDA, *Guidance for Industry: Process Validation, General Principles and Practices* (2011), lifecycle model, statistical-confidence standard for sampling.
- FDA, *Guidance for Industry: Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production*, OOS investigation framework (contrast with OOT).
- ICH Q9 (Quality Risk Management), ICH Q10 (Pharmaceutical Quality System).
- EU GMP Annex 15 (Qualification and Validation), ongoing process verification.
- ANSI/ASQ Z1.4 (attribute sampling; ISO 2859-1 equivalent) and ANSI/ASQ Z1.9 (variables sampling; ISO 3951 equivalent).
- Squeglia, *Zero Acceptance Number Sampling Plans*, c=0 consumer-risk-based plans.
- Western Electric, *Statistical Quality Control Handbook* (1956); L. S. Nelson, control-chart run rules.
- ISO 9001 and ISO 13485, requirements for statistical techniques in the quality management system.
- PhRMA CMC Statistics and Stability Expert Teams, out-of-trend detection methods for stability data (Pharmaceutical Technology, 2003).
