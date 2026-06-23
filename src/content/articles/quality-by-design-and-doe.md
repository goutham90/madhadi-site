---
title: "Quality by Design and Design of Experiments: CQAs, CPPs, and the Design Space"
description: "A working guide to ICH Q8 QbD and DoE for process design: how to define the QTPP, identify CQAs and CPPs through risk ranking, build and verify a design space, and turn it into a control strategy."
pubDate: 2026-06-20
tags: ["qbd", "ich-q8", "design-of-experiments", "cqa", "cpp", "design-space", "process-validation", "control-strategy"]
pillar: "quality-assurance"
tier: "Advanced"
---

Quality by Design (QbD) is the discipline of building product quality into a process by understanding it, rather than testing it in at the end. Design of Experiments (DoE) is the statistical engine that makes that understanding efficient. The two are inseparable in modern pharmaceutical development: QbD gives you the structure (define what quality means, rank what affects it, control it), and DoE gives you the data to fill that structure with numbers instead of opinions.

This page walks the full chain that an inspector, an interviewer, or your own process development lead will expect you to know cold: from the Quality Target Product Profile (QTPP) down through Critical Quality Attributes (CQAs), risk ranking, Critical Process Parameters (CPPs) and Critical Material Attributes (CMAs), the DoE work that connects parameters to attributes, the design space, and finally the control strategy that holds it all together. It maps onto Stage 1 (Process Design) of the FDA process validation lifecycle and onto the ICH Q8/Q9/Q10/Q11 set.

---

## The regulatory basis: what actually requires this

QbD is not one regulation. It is a coherent set of ICH guidances plus the FDA process validation framework. Knowing which document says what is itself an interview discriminator.

| Document | Year (current step/version) | What it gives you |
|---|---|---|
| ICH Q8(R2) Pharmaceutical Development | 2009 (R2) | Defines QTPP, CQA, design space, control strategy. The QbD vocabulary lives here. |
| ICH Q9(R1) Quality Risk Management | 2022 (R1 revision) | The risk assessment toolkit (FMEA, risk ranking) used to move from CQAs to CPPs. |
| ICH Q10 Pharmaceutical Quality System | 2008 | The PQS that operates and maintains the control strategy across the lifecycle. |
| ICH Q11 Development and Manufacture of Drug Substances | 2012 | Applies Q8 thinking to the drug substance (API/biologics), including CQA identification and CMA linkage. |
| ICH Q12 Lifecycle Management | 2019 | Established Conditions and post-approval change tools that flow from how well you defined the design space. |
| ICH Q14 Analytical Procedure Development | 2023 | Extends QbD to analytical methods (analytical QbD, the MODR). |
| FDA Guidance: Process Validation: General Principles and Practices | 2011 | The three-stage lifecycle. QbD/DoE work is Stage 1 (Process Design). |
| EU GMP Annex 15: Qualification and Validation | 2015 | EU expectation that process validation is science and risk based. |

> ICH Q8(R2) makes the core point that quality cannot be tested into a product after the fact; it has to be built in through design. That principle is the thesis of the entire approach.

The regulatory point worth internalizing: QbD is not mandatory in the sense that you will be cited for not doing it. The minimal/traditional approach is still legal. But once you make QbD claims in a regulatory submission (a design space, real-time release testing, expanded change-management flexibility under Q12), you are held to the data that supports those claims. A design space asserted without supporting DoE is a finding waiting to happen.

The quality rationale is simpler than the regulatory map: a process you understand has fewer deviations, fewer out-of-specification (OOS) results, fewer batch failures, and a far easier path through post-approval changes. The investment in Stage 1 pays back in Stage 3 (Continued Process Verification) for the life of the product.

---

## The deliverable chain at a glance

QbD is a sequence of linked deliverables. Each one feeds the next, and an inspector will trace the linkage. If your CQA list does not flow from your QTPP, or your CPPs do not flow from a documented risk assessment, the chain is broken and the conclusions are unsupported.

1. **QTPP** (Quality Target Product Profile): what the product must be to be safe and effective.
2. **CQAs** (Critical Quality Attributes): the measurable properties that must stay in range for the product to meet the QTPP.
3. **Initial risk assessment**: map process parameters and material attributes against CQAs to find what might matter.
4. **DoE / experimental studies**: quantify which parameters and attributes actually affect which CQAs, and by how much.
5. **CPPs and CMAs**: the parameters and material attributes that, based on the data, are critical.
6. **Design space**: the multidimensional region of inputs proven to deliver acceptable CQAs.
7. **Control strategy**: the set of controls (parameter ranges, in-process controls, specifications, monitoring) that keeps you inside the design space.
8. **Continued verification**: ongoing data (Stage 3 / CPV) that confirms the model held and feeds improvement.

---

## QTPP: the Quality Target Product Profile

### What it is and why it is required

The QTPP is a prospective summary of the quality characteristics a drug product should have to deliver the desired therapeutic benefit, accounting for safety and efficacy. ICH Q8(R2) defines it as the basis of design for the product. It is the anchor: everything downstream is justified by tracing back to a QTPP element. Without a QTPP you have no objective definition of "good," and CQA selection becomes arbitrary.

### What goes in it

A QTPP is patient and product focused, not process focused. Typical elements:

- Intended use / indication and route of administration
- Dosage form and strength(s)
- Container closure system
- Pharmacokinetic target (for example, bioequivalence to a reference, or a defined release profile)
- Drug product quality attributes appropriate to the dosage form: identity, assay, content uniformity, impurities/degradants, dissolution or release, sterility (for injectables), particulate matter, and stability/shelf life

### Worked example: QTPP for a small-molecule immediate-release tablet

| QTPP element | Target |
|---|---|
| Dosage form | Immediate-release film-coated tablet |
| Route / use | Oral, chronic once-daily |
| Strength | 50 mg |
| Pharmacokinetics | Bioequivalent to reference listed drug, immediate release |
| Container closure | HDPE bottle with induction seal, plus blister alternative |
| Appearance | White to off-white, no visible defects |
| Identity | Positive for active by specific method |
| Assay | 95.0-105.0% of label claim |
| Content uniformity | Meets the relevant compendial uniformity-of-dosage-units chapter |
| Degradation products | Each within ICH Q3B qualified limits |
| Dissolution | Not less than 80% (Q) in 30 minutes |
| Shelf life | 24 months at 25 C / 60% RH |

Note that the QTPP states *targets*, not yet *criticality*. Criticality is decided next.

### Acceptance criteria for a good QTPP

It is patient-centric, complete for the dosage form, sourced (literature, reference product label, clinical needs, compendial requirements), and traceable forward to every CQA. A QTPP that simply restates a finished-product specification is a common weakness; the QTPP should justify the specification, not copy it.

---

## CQAs: Critical Quality Attributes

### What it is and why it is required

Per ICH Q8(R2), a CQA is a physical, chemical, biological, or microbiological property or characteristic that has to stay inside a suitable limit, range, or distribution for the product to meet its intended quality. CQAs are the measurable outputs you commit to control. They are required because they convert the QTPP (a profile) into a set of attributes you can actually test, monitor, and tie to acceptance criteria.

The criticality of an attribute is driven by the severity of harm to the patient if the attribute is out of range. Crucially, severity does not change based on how well you control the attribute. An attribute can be highly critical (high severity) and yet well controlled and low risk. Beginners conflate "critical" with "risky"; keep them separate.

### How to identify CQAs

1. List all candidate quality attributes from the QTPP and dosage-form knowledge.
2. For each, assess the consequence to safety and efficacy if the attribute falls outside an acceptable range (severity). Use prior knowledge, the mechanism of action, toxicology, clinical data, and compendial requirements.
3. Designate as a CQA any attribute whose deviation would meaningfully affect safety or efficacy. Document the rationale for those you exclude.
4. Carry CQAs forward as the responses (the Y's) you will study in DoE.

### Worked example: CQA designation for the tablet above

| Quality attribute | Severity if out of range | CQA? | Rationale |
|---|---|---|---|
| Assay | High | Yes | Direct dose to patient |
| Content uniformity | High | Yes | Sub/super-potent units |
| Dissolution | High | Yes | Drives bioavailability, BE |
| Degradation products | High | Yes | Safety; ICH Q3B |
| Water content | Medium | Yes | Affects stability/degradation |
| Tablet hardness | Low-Medium | Often No (as an intermediate) | Matters only through its effect on dissolution; treat as an in-process control linked to a CQA |
| Appearance (color) | Low | No | Cosmetic, no patient harm |

A frequent and defensible move: an attribute like hardness or disintegration is not itself a final CQA but is an intermediate or in-process attribute that influences a true CQA (dissolution). Capturing that relationship is exactly what DoE is for.

For biologics, the CQA list is longer and harder: aggregation, charge variants, glycosylation profile, host cell protein, residual DNA, potency, and so on. The same logic applies, with potency and immunogenicity-linked attributes typically carrying high severity. See [process validation for biologics](/articles/process-validation-for-biologics) and [comparability and potency assays](/articles/comparability-and-potency-assays).

---

## From CQAs to parameters: the initial risk assessment

### What it is and why it is required

Before any experiments, you do a structured risk assessment that maps every process parameter and material attribute against every CQA. The purpose is to focus the experimental program: you cannot study everything, so you use prior knowledge and risk ranking to decide what enters the DoE and what is screened out. ICH Q9(R1) is the governing guidance for the methodology, and ICH Q8 expects the rationale to be documented.

This is where two more definitions land:

- **Critical Process Parameter (CPP):** a process parameter whose variation affects a CQA, so it has to be monitored or controlled for the process to turn out the intended quality (ICH Q8(R2)).
- **Critical Material Attribute (CMA):** the analogous concept for an input material property (raw material, excipient, intermediate) that affects a CQA. The term is widely used in practice and in ICH Q11 thinking, though Q8 itself emphasizes parameters.

### How to do it: step by step

1. **Build the cause-and-effect inventory.** Use an Ishikawa (fishbone) diagram per CQA or per unit operation, categories typically Materials, Methods, Machines, Measurement, Man, Environment. Brainstorm every parameter/attribute that could plausibly affect each CQA.
2. **Score risk in a matrix.** A common first pass is a relative-risk ranking or a failure mode and effects analysis (FMEA). For each parameter-CQA pair, score severity, occurrence (likelihood of deviation), and detectability. Multiply or rank to prioritize.
3. **Classify each parameter** as high, medium, or low risk (sometimes "potential CPP" vs "non-CPP"). High and medium typically advance to experimental study; clearly low-risk ones are documented out with rationale.
4. **Record the assessment** as a controlled document. The traceability from CQA to studied parameter is what an inspector follows.

### Worked example: risk-ranking matrix (extract)

Severity (S), Occurrence (O), Detection (D) on a 1-5 scale; RPN = S x O x D. Higher RPN means study first.

| Unit op | Parameter / attribute | CQA affected | S | O | D | RPN | Decision |
|---|---|---|---|---|---|---|---|
| Granulation | Water amount | Dissolution | 4 | 4 | 3 | 48 | Study in DoE (potential CPP) |
| Granulation | Spray rate | Content uniformity | 4 | 3 | 3 | 36 | Study in DoE |
| Blending | Blend time | Content uniformity | 5 | 3 | 2 | 30 | Study in DoE |
| Compression | Main compression force | Dissolution, hardness | 4 | 4 | 2 | 32 | Study in DoE |
| API | Particle size (D90) | Dissolution | 5 | 3 | 2 | 30 | CMA, study/specify |
| Coating | Inlet air temperature | Appearance | 2 | 2 | 3 | 12 | Document out, low risk |

A caution on FMEA scales: RPN is ordinal, not ratio, and multiplying ordinal scores is statistically crude. Many organizations use RPN only to *rank and prioritize*, never to set a hard pass/fail threshold, and they always keep any high-severity item in scope regardless of a low RPN. Inspectors push back when a high-severity failure mode was screened out purely because occurrence or detection scores diluted its RPN. For the broader method, see [quality risk management](/articles/quality-risk-management).

---

## Design of Experiments: the engine

### What it is and why it matters

DoE is a structured approach to varying multiple inputs simultaneously, according to a statistical design, so you can estimate each factor's effect and, critically, the interactions between factors, with a minimum number of runs. The alternative, one-factor-at-a-time (OFAT), is the single biggest mistake in process development: it is inefficient, and it is blind to interactions. If the effect of granulation water on dissolution depends on compression force, OFAT will never see it. DoE will.

DoE underpins the entire QbD claim. A design space is only credible if it rests on a designed study with a fitted model, not on a scatter of historical batches.

### Key vocabulary you must use correctly

- **Factor:** an input you deliberately vary (a parameter or material attribute). Can be continuous (temperature) or categorical (supplier A/B).
- **Level:** a setting of a factor (for example, low and high, often coded -1 and +1).
- **Response:** the measured output, normally a CQA.
- **Main effect:** the average change in a response when a factor moves from low to high.
- **Interaction:** when the effect of one factor depends on the level of another.
- **Center point:** runs at the mid-level of all continuous factors; used to detect curvature and estimate pure error.
- **Replication:** repeating runs to estimate experimental error.
- **Randomization:** running in random order to protect against confounding from time-related drift.
- **Blocking:** grouping runs to account for a known nuisance variable (different days, different raw-material lots).
- **Resolution (for fractional designs):** how badly main effects and interactions are confounded (aliased). Resolution III, IV, V matter.

### The three phases of a DoE program

DoE is rarely one experiment. It is a sequence:

**1. Screening.** Many factors, few resolved interactions. Goal: find the vital few factors from the trivial many. Designs: fractional factorial (for example a 2^(7-3) resolution IV), or Plackett-Burman for pure main-effect screening. Cheap, lots of factors, accept aliasing.

**2. Characterization / optimization.** A handful of important factors, now with interactions and curvature. Designs: full factorial (2^k) with center points, then a response surface design, a central composite design (CCD) or a Box-Behnken design (BBD), to fit a quadratic model and locate optima.

**3. Verification / ruggedness.** Confirm the model predicts reality at chosen setpoints, and confirm the process is insensitive to small expected variation around the setpoint.

### How to run a DoE: step by step

1. **State the objective and responses.** Which CQAs are you modeling, and what is "good" for each (target, max, min, range)?
2. **Select factors and ranges.** From the risk assessment. Set ranges wide enough to provoke a measurable effect but inside what is operationally plausible.
3. **Choose the design.** Match the design to the phase (screening vs optimization) and to your run budget. Confirm the design can estimate the effects you care about (check the alias structure).
4. **Randomize and block.** Randomize run order; block on known nuisance factors (lot, day, analyst).
5. **Execute with discipline.** Hold non-DoE parameters constant. Measure responses with a qualified, validated analytical method (a noisy method can swamp real effects). See [method validation essentials](/articles/method-validation-essentials).
6. **Fit and reduce the model.** Fit the appropriate model, check significance (p-values, but read them with effect size in mind), and remove non-significant terms while respecting model hierarchy.
7. **Check the model.** Residual analysis (normality, constant variance, no patterns), lack-of-fit test, and the adjusted and predicted R-squared. A high R-squared with a poor predicted R-squared means you are overfitting.
8. **Optimize and predict.** Use the response surface and, for multiple CQAs, a desirability function or overlay plot to find the operating region that satisfies all responses at once.
9. **Run confirmation batches** at the chosen setpoint and at challenging corners of the proposed space.

### Worked example: a 2^3 full factorial with center points

Three factors from the matrix above: granulation water (A), compression force (B), blend time (C). Response: dissolution at 30 minutes (% released, target not less than 80%).

| Run | A: water | B: force | C: blend | Dissolution (%) |
|---|---|---|---|---|
| 1 | - | - | - | 92 |
| 2 | + | - | - | 78 |
| 3 | - | + | - | 88 |
| 4 | + | + | - | 71 |
| 5 | - | - | + | 93 |
| 6 | + | - | + | 79 |
| 7 | - | + | + | 87 |
| 8 | + | + | + | 70 |
| 9 (center) | 0 | 0 | 0 | 84 |
| 10 (center) | 0 | 0 | 0 | 83 |
| 11 (center) | 0 | 0 | 0 | 85 |

Reading it without software: the main effect of water (A) is the average of the "+" runs minus the average of the "-" runs. High-water runs (2,4,6,8) average 74.5%; low-water runs (1,3,5,7) average 90.0%. So moving water from low to high drops dissolution by about 15.5 percentage points. Compression force (B) is a smaller negative effect; blend time (C) barely moves dissolution at all (it would have mattered for content uniformity instead). The center points sit near the average and look stable, suggesting little curvature for this response over this range. The interpretation: water content is the dominant driver of dissolution, force is secondary, blend time is not a dissolution driver. Water and compression force become candidate CPPs for dissolution; blend time stays a candidate CPP for content uniformity, which would be modeled with content uniformity as the response.

This is the heart of QbD: the experiment told you which knobs matter and how much. Now you can set ranges with evidence. For the statistical foundations and how this links to process capability and control charts, see [statistics in quality: Cpk and control charts](/articles/statistics-in-quality-cpk-control-charts).

### Acceptance criteria for a sound DoE

A reviewer or inspector looks for: a pre-specified objective and analysis plan; factors and ranges justified from the risk assessment; randomization and replication; a fitted model with residual diagnostics and a passing lack-of-fit; confirmation runs that match predictions within a stated tolerance; and the measurement system itself qualified (otherwise you are modeling noise). Missing confirmation runs and unqualified analytical methods are the two most common technical gaps.

---

## CPPs and CMAs: deciding criticality

### What it is and why it is required

Once the DoE quantifies effects, you formally designate CPPs and CMAs. A parameter is a CPP if its variation, over the range it will actually experience in manufacturing, has a meaningful impact on a CQA. Criticality is a function of *sensitivity* (how strongly the CQA responds) and the *width of variation* the parameter will see relative to the proven acceptable range. ICH Q8(R2) frames criticality as a continuum, not a binary, but most companies still classify into CPP / non-CPP (sometimes with a "key process parameter" middle tier that is monitored but not specification-controlled).

### How to decide

1. From the model, get the effect size of each parameter on each CQA.
2. Compare the parameter's normal operating variation against the range over which the CQA stays acceptable. A strong effect but a very narrow normal variation may still need control; a weak effect with wide variation may not.
3. Classify: **CPP** (controlled, in the batch record, often with a narrow proven acceptable range and an in-process control), **KPP/non-critical** (monitored for process consistency but not directly tied to a CQA failure), **CMA** for material inputs (flows into raw-material specs and supplier controls).
4. Document the basis for each classification, including the data that supports it.

### Worked example: criticality decisions

| Parameter | Effect on CQA | Normal variation | Classification | Control |
|---|---|---|---|---|
| Granulation water | Strong on dissolution | Wide, pump-dependent | CPP | Setpoint with narrow range, in-process LOD on granules |
| Compression force | Moderate on dissolution, drives hardness | Moderate | CPP | Force-feedback control, in-process hardness/thickness |
| Blend time | Strong on content uniformity | Tight (timed) | CPP | Validated blend time, in-process blend uniformity |
| API D90 | Strong on dissolution | Supplier-dependent | CMA | Particle-size spec on incoming API |
| Coating inlet temp | Cosmetic only | Wide | Non-critical | Monitored, broad range |

CMAs feed directly into supplier and material controls. See [supplier and vendor qualification](/articles/supplier-vendor-qualification) and [quality in technology transfer](/articles/quality-in-technology-transfer) for how CMAs get locked into incoming specifications and transferred to commercial sites.

---

## The design space

### What it is and why it is required

Per ICH Q8(R2), the design space is the multidimensional combination and interaction of input variables (such as material attributes) and process parameters that have been shown to deliver assured quality. The defining regulatory consequence is also in Q8: operating inside the design space is not treated as a change (from a regulatory filing standpoint), whereas moving out of it is a change and normally initiates a post-approval change process. That flexibility is the commercial reason QbD is worth the effort.

A design space is *optional*. You are not required to define one. But if you file one, it must be supported by data, and it becomes a regulatory commitment.

### Key distinctions you must get right

- **Knowledge space:** everything you investigated, including conditions that produced bad product. Wider than the design space.
- **Design space:** the proven-acceptable region inside the knowledge space, where all CQAs meet criteria. Approved as part of the application.
- **Control space / normal operating range (NOR):** the tighter region where you actually run day to day, sitting inside the design space with margin.
- **Proven Acceptable Range (PAR):** the range of one parameter (others held nominal) shown to give acceptable quality. A set of PARs is a weaker, univariate construct; a true multivariate design space accounts for interactions and is generally preferred and more defensible.

A picture in words: imagine water content on one axis and compression force on the other. The knowledge space is the whole experimental rectangle. The design space is the irregular sub-region inside it where dissolution stays at or above 80%. Your NOR is a small box well inside that sub-region. The further your NOR sits from the design-space boundary, the more margin your process carries against routine variation.

### How to construct and verify a design space

1. **Define it from the response-surface models**, not from individual PARs, so interactions are captured. The boundary is where any CQA reaches its limit.
2. **Build it multivariately.** For multiple CQAs, overlay the acceptable regions; the design space is the intersection where *all* CQAs pass.
3. **Account for uncertainty.** A point estimate of the boundary ignores model error. Mature practice uses the prediction interval or a probability-based ("reliability") design space, so the claim is "at least X% probability all CQAs pass," not just "the mean passes."
4. **Verify at scale.** A design space developed at lab or pilot scale must be confirmed at commercial scale; scale effects (mixing, heat transfer) can move boundaries. State scale dependency explicitly.
5. **Decide on operating ranges and filing strategy** under ICH Q12 (Established Conditions) so you know which moves need prior approval.

### Worked example: design-space statement

> Acceptable dissolution (Q not less than 80% at 30 min), content uniformity, and assay are assured when granulation water is 28-36% (of the documented basis), main compression force is 8-14 kN, and blend time is 12-18 min, with API D90 not more than the specified limit, demonstrated across the studied region with confirmation at commercial scale. The normal operating ranges are water 30-34%, force 9-12 kN, blend time 14-16 min.

### Acceptance criteria for a defensible design space

It is derived from a fitted, validated model; it is multivariate; it incorporates model uncertainty rather than only mean predictions; it is verified at the intended commercial scale; and its boundaries are confirmed by runs (especially at the corners/edges) rather than only interpolated. The most common weakness is a design space presented as a simple box of independent PARs, when the underlying data show interactions that make the true region non-rectangular.

---

## The control strategy

### What it is and why it is required

Per ICH Q8(R2), a control strategy is a planned set of controls, drawn from current product and process understanding, that assures process performance and product quality. It is the operational output of all the work above. If CQAs are *what must be right* and the design space is *the region that makes them right*, the control strategy is *how you stay in that region and prove it batch after batch*. It is required because understanding without controls is just a report; the control strategy is what actually protects the patient in routine manufacturing, and ICH Q10 operates it across the lifecycle.

### What goes in a control strategy

A control strategy is layered, and a good one names the layer for each control:

- **Input material controls:** CMA-driven specifications on API, excipients, and components; supplier controls.
- **Process parameter controls:** CPP setpoints and ranges in the batch record; automated controls where appropriate.
- **In-process controls (IPCs):** measurements during manufacture (LOD, blend uniformity, hardness, in-line PAT) that confirm the process is on track and allow correction before a CQA fails.
- **Process Analytical Technology (PAT):** real-time or near-real-time measurement and control, the most advanced control layer, enabling Real-Time Release Testing (RTRT) in some cases.
- **Finished-product specification:** the final acceptance tests and limits.
- **Stability and lifecycle controls:** the program that confirms CQAs hold over shelf life, plus continued process verification.

A mature control strategy *shifts* controls earlier. Instead of relying on end-product dissolution testing, you control the parameters and material attributes that DoE proved drive dissolution, and you verify with IPCs. End-product testing becomes confirmation, not the primary control.

### Worked example: control-strategy table (extract)

| CQA | Control layer | Specific control | Acceptance |
|---|---|---|---|
| Dissolution | Material | API D90 specification | Within defined limit |
| Dissolution | Parameter | Granulation water (CPP) | Within design-space range |
| Dissolution | In-process | Granule LOD | Target +/- defined tolerance |
| Dissolution | End product | Dissolution test | Q not less than 80% at 30 min |
| Content uniformity | Parameter | Blend time (CPP) | Validated range |
| Content uniformity | In-process | Blend uniformity sampling | RSD within limit |
| Content uniformity | End product | Uniformity of dosage units | Meets compendial chapter |
| Degradants | Material | Supplier impurity control | Within ICH Q3A/Q3B |
| Degradants | End product / stability | Related substances | Within qualified limits |

For how this carries into qualification and ongoing verification, see [process validation lifecycle](/articles/process-validation-lifecycle), [process performance qualification (PPQ)](/articles/process-performance-qualification-ppq), and [continued process verification (CPV)](/articles/continued-process-verification-cpv).

### Acceptance criteria for a good control strategy

Every CQA traces to at least one control; every CPP and CMA appears in the strategy; controls are layered (not everything dumped onto end-product testing); IPC limits are derived from the process understanding, not invented; and the strategy is a living document maintained under change control as the process matures. See [change control for validated systems](/articles/change-control-validated-systems).

---

## Roles and responsibilities

QbD is a team sport, and inspectors will ask who owned which decision.

| Role | Responsibility |
|---|---|
| Process development / formulation SME | Owns the QTPP, CQA identification, DoE design and execution, design-space construction. The technical engine. |
| Statistician / DoE specialist | Designs the experiments, fits and validates models, defines the probability-based design space, prevents OFAT and overfitting. |
| Analytical development | Provides qualified, validated methods to measure CQAs and IPCs; an unqualified method invalidates the DoE. |
| Manufacturing / process engineering | Confirms operating ranges are achievable at scale; owns scale-up verification. |
| Quality Risk Management facilitator | Runs the FMEA/risk-ranking sessions; ensures Q9 methodology is sound. |
| Quality Assurance | Reviews and approves the QTPP, risk assessments, CPP/CMA designations, design space, and control strategy; ensures traceability and that the control strategy is implemented under the PQS. |
| Regulatory affairs | Decides what design-space and Established-Conditions claims to file (Q12), and manages the post-approval commitments those claims create. |
| Process owner (commercial) | Operates the control strategy, owns CPV, and triggers change control if a move outside the design space is proposed. |

A practical note: QA does not need to run the statistics, but QA must understand them well enough to challenge an unsupported design space. "The model has R-squared 0.99 so it's fine" is not an answer QA should accept without seeing the predicted R-squared and the confirmation runs.

---

## Common mistakes and inspection-finding patterns

These are the patterns that show up in deficiency letters and audit observations. No company names; these are generic and recurring.

- **OFAT dressed up as QbD.** A development report that varied one parameter at a time and then claims a "design space." No interaction data, so the multivariate claim is unsupported.
- **Design space as a box of independent PARs.** Univariate ranges stitched into a rectangle while the data clearly show interactions that make the real acceptable region non-rectangular. The corners of the box may not actually pass.
- **Criticality reasoning that flips severity.** An attribute downgraded from critical because "we control it well." Severity is patient-driven and does not change with control. Inspectors catch this quickly.
- **High-severity failure mode screened out by a low RPN.** Occurrence and detection scores diluted a severe failure mode out of scope. A high-severity item should stay in scope regardless.
- **No confirmation runs.** A predicted optimum and design space with no batches actually run at those conditions to confirm the prediction.
- **Lab-scale design space never verified at commercial scale**, with scale-dependent unit operations (granulation, lyophilization, mixing) that are known to shift.
- **Unqualified analytical method.** The DoE responses were measured with a method whose variability swamps the effects, so the model is fitting noise. The method must be validated first.
- **Broken traceability.** CQAs that do not trace to the QTPP, or studied parameters that do not trace to a documented risk assessment. The chain has a gap and the conclusions float.
- **Control strategy that leans entirely on end-product testing.** QbD work was done but the controls were never moved upstream, so the "understanding" delivered no operational benefit.
- **Static documents.** QTPP, risk assessment, and control strategy frozen at filing and never updated as CPV data accumulate. ICH Q10 expects living maintenance.
- **Overfitting.** A response-surface model with many terms, high R-squared, and a poor predicted R-squared, presented as predictive when it is not.

---

## Interview-ready: questions you will be asked

**What is the difference between a CQA and a CPP?**
A CQA is an output property of the product (assay, dissolution, an impurity) that must stay in range to assure quality. A CPP is an input process parameter whose variation affects a CQA and therefore must be controlled. CQAs are the Y's; CPPs are the X's you control to keep the Y's in range.

**How do you decide if an attribute is critical?**
By severity of harm to the patient if it is out of range, using mechanism of action, toxicology, clinical and compendial knowledge. Severity is independent of how well you control it. An attribute can be highly critical and yet low risk because it is well controlled.

**Walk me through the QbD chain.**
QTPP defines what the product must be; CQAs are the measurable properties that deliver the QTPP; a risk assessment maps parameters and material attributes against CQAs; DoE quantifies which of those actually matter; that designates CPPs and CMAs; the proven multivariate region becomes the design space; and the control strategy keeps you inside it and verifies quality batch to batch.

**Why DoE instead of one-factor-at-a-time?**
DoE varies factors together, so it estimates main effects and interactions efficiently, with fewer runs. OFAT is blind to interactions and uses more experiments to learn less. Interactions are usually where the real process behavior lives.

**What is the difference between knowledge space, design space, and control space?**
Knowledge space is everything investigated, including failing conditions. Design space is the proven-acceptable region inside it, filed and committed. Control space (NOR) is the tighter region you actually operate in, sitting inside the design space with margin.

**What is the regulatory benefit of a design space?**
Per ICH Q8(R2), movement within an approved design space is not considered a change, so you gain operational flexibility without a prior-approval supplement. Movement outside it is a change. This pairs with ICH Q12 Established Conditions to define what needs prior approval.

**What makes a design space defensible to an inspector?**
It is built from a fitted, validated multivariate model, it accounts for model uncertainty (a probability-based boundary, not just mean predictions), it is verified at commercial scale, and its boundaries are confirmed by actual runs rather than only interpolated.

**A screening DoE shows a factor is not significant. Do you drop it?**
Usually you remove it from the optimization model, but you keep its potential criticality in mind. If it has high severity on a CQA, you may still control it. Statistical insignificance over the studied range is not the same as "irrelevant to quality."

**How does QbD connect to process validation?**
It is Stage 1 (Process Design) of the FDA 2011 lifecycle. The design space and control strategy from QbD set up Stage 2 (Process Qualification, including PPQ) and define what you monitor in Stage 3 (Continued Process Verification).

**What is the difference between Box-Behnken and central composite designs?**
Both are response-surface designs that fit quadratic models. CCD adds axial (star) points to a factorial and can require factor levels beyond the factorial range; Box-Behnken uses midpoints of edges and never goes to the extreme corners, which is useful when corner conditions are unsafe or infeasible, at the cost of less corner information.

**What does a CMA flow into?**
Incoming material specifications and supplier controls. A CMA proven to affect a CQA (such as API particle size affecting dissolution) becomes a specification on the raw material and part of supplier qualification.

---

## Practical tips

- Qualify the measurement system before the DoE. A noisy assay can hide a real effect or invent a false one. The variance you can attribute to method should be small relative to the effects you want to detect.
- Set factor ranges wide enough to provoke a measurable response, but inside operationally plausible limits. Too narrow and nothing moves; too wide and you waste runs in regions you would never operate.
- Always include center points in a factorial. They cost little, detect curvature, and give a pure-error estimate.
- Randomize the run order and write down the actual order. If you cannot randomize fully (an oven that takes hours to change temperature), block deliberately and document it.
- Keep the knowledge space, design space, and NOR visually distinct in your reports. Reviewers get lost when these are blurred.
- Use a desirability function or overlay plot for multi-CQA optimization. A setpoint that maximizes dissolution but fails content uniformity is not an optimum.
- Treat the QTPP, risk assessments, and control strategy as living documents under change control, refreshed as CPV data come in. QbD is a lifecycle, not a filing event.
- For analytical methods, the same QbD logic now applies under ICH Q14: define the ATP, identify method CQAs, and establish a Method Operable Design Region (MODR). See [ICH Q14 and Q2(R2) analytical lifecycle](/articles/ich-q14-q2r2-analytical-lifecycle).

---

## Related reading

- [Quality risk management](/articles/quality-risk-management). The ICH Q9 toolkit behind the risk ranking.
- [Process validation lifecycle](/articles/process-validation-lifecycle). The three-stage framework QbD feeds.
- [Process performance qualification (PPQ)](/articles/process-performance-qualification-ppq). Stage 2 confirmation at commercial scale.
- [Continued process verification (CPV)](/articles/continued-process-verification-cpv). Stage 3 monitoring that closes the loop.
- [Statistics in quality: Cpk and control charts](/articles/statistics-in-quality-cpk-control-charts). The statistical backbone for DoE and ongoing monitoring.
- [Process validation for biologics](/articles/process-validation-for-biologics). Applying CQA/CPP thinking to complex molecules.
- [ICH Q12 lifecycle management](/articles/ich-q12-lifecycle-management). Established Conditions and post-approval flexibility from a strong design space.
- [ICH Q14 and Q2(R2) analytical lifecycle](/articles/ich-q14-q2r2-analytical-lifecycle). QbD for analytical methods.
- [Quality in technology transfer](/articles/quality-in-technology-transfer). Carrying CPPs, CMAs, and the control strategy to the commercial site.
- [Annual product review / PQR](/articles/annual-product-review-pqr). Where ongoing CQA and CPP data get reviewed for trends.
