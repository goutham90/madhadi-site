---
title: "The PPQ Protocol: Designing and Executing Stage 2 Process Performance Qualification"
description: "How to design, run, and report Process Performance Qualification batches: the number-of-batches rationale, sampling plans, acceptance criteria, enhanced sampling, and the PPQ report that survives inspection."
pubDate: 2026-06-20
tags: ["process validation", "ppq", "stage 2", "sampling plans", "acceptance criteria", "gmp", "biologics"]
pillar: "quality-assurance"
tier: "Advanced"
---

Process Performance Qualification, almost always shortened to PPQ, is Stage 2 of the FDA's three-stage process validation lifecycle. It is the point where everything you learned in development and characterization gets put on trial at commercial scale, with the commercial equipment, the commercial materials, the commercial people, and the commercial procedures. The output is a small set of batches, usually run consecutively, that together demonstrate the process can reproducibly make product meeting its quality attributes.

It is also the single most scrutinized validation deliverable an inspector will pull. The PPQ protocol and report tell a reviewer whether your firm actually understands its process or merely ran three batches and called it a day. Get the number-of-batches rationale wrong, set acceptance criteria you cannot defend, sample in a way that hides variability, and you create a finding that can stall an approval or trigger a Warning Letter. This article walks the full deliverable: the regulatory basis, what goes in the protocol, how to build a defensible sampling plan and acceptance criteria, how enhanced sampling works, who owns what, and how to write the report.

---

## Where PPQ sits in the lifecycle

PPQ is the middle stage of the framework in the FDA guidance **Process Validation: General Principles and Practices (January 2011)**. That guidance defines three stages:

- **Stage 1, Process Design**: define the commercial process from development and scale-up knowledge.
- **Stage 2, Process Qualification**: confirm the process design is capable of reproducible commercial manufacturing. This stage has two parts: qualification of the facility, utilities, and equipment, and Process Performance Qualification (PPQ) of the process itself.
- **Stage 3, Continued Process Verification**: ongoing assurance during routine production that the process stays in control.

PPQ is the second part of Stage 2. It assumes the equipment is already qualified (IQ/OQ/PQ complete), the analytical methods are validated, the cleaning is validated, and the utilities are qualified. PPQ does not re-prove those things; it proves the integrated process. If you try to run PPQ on top of an unqualified line, your protocol prerequisites will not be met and the data is not defensible.

The international counterpart is **EudraLex Volume 4, Annex 15: Qualification and Validation (2015 revision)**, which uses the term "process validation" and expects validation to cover the intended commercial process. **ICH Q8(R2) Pharmaceutical Development**, **ICH Q9 Quality Risk Management**, and **ICH Q10 Pharmaceutical Quality System** underpin the science-and-risk-based approach the FDA guidance is built on. For biologics, **ICH Q11 Development and Manufacture of Drug Substances** and the considerations in [process validation for biologics](/articles/process-validation-for-biologics) add expectations around the drug substance process, raw material variability, and column lifetime.

> FDA 2011 guidance: "Process qualification is the second stage of process validation. During this stage, the process design is evaluated to determine if it is capable of reproducible commercial manufacturing."

The word "reproducible" is the whole game. PPQ is not a demonstration that you can make one good batch. It is a demonstration that the process produces consistent results across batches, and that any variation you see is understood and within limits.

---

## The number-of-batches rationale

This is the question every inspector asks and the one most firms answer badly. The honest starting point: **there is no regulatory requirement for three batches.**

The "three batch" convention came from older guidance and habit. The 2011 FDA guidance deliberately removed any fixed number. It says the number of PPQ batches should be based on the variability of the process, the experience gained during Stage 1, and the risk associated with the product. EU Annex 15 takes the same position and explicitly notes that the number of batches should be justified, with three batches described as a conventional minimum rather than a rule.

So you must write a rationale. A defensible number-of-batches rationale considers:

- **Process knowledge and variability from Stage 1.** A well-characterized process with tight control of critical process parameters (CPPs) and well-understood critical quality attributes (CQAs) supports fewer batches. A process with high inherent variability, manual operations, or limited development data needs more.
- **Product and patient risk.** A sterile injectable, a biologic with complex CQAs, or a narrow-therapeutic-index product carries more risk than a simple immediate-release tablet.
- **Statistical confidence.** Some firms set the batch count using a statistical basis, for example a tolerance-interval or attribute-sampling argument that gives a stated confidence and coverage. If you do this, you must show the math, not just assert it.
- **Sources of variability that must be represented.** If the process uses multiple lots of a critical raw material, multiple operators per shift, or more than one piece of equipment in a parallel arrangement, the batch set should be designed to span those sources or you must justify why not.
- **Bracketing or matrixing.** For multiple strengths or pack sizes made on the same line by the same process, a bracketing approach can reduce the total number of qualification batches. The bracketing rationale itself becomes part of the protocol.

A common and defensible structure is a minimum of three consecutive successful batches as the default, with a written justification for why three is adequate given the specific process risk, and a clear statement that more batches would be run if the data showed unexpected variability. The number is a conclusion of a risk assessment, not an input.

**Worked example of a batch-count rationale (solid oral dose):**

| Factor | Assessment | Effect on batch count |
|---|---|---|
| Process characterization (Stage 1) | DoE-based, CPP ranges established, control strategy defined | Supports lower count |
| CQA risk | Standard immediate-release tablet, wide therapeutic index | Supports lower count |
| Raw material variability | 2 API lots in qualification window | Span both lots across batches |
| Equipment | Single blender, single press | No parallel-equipment span needed |
| Operators | 3 trained operators across shifts | Spread across batches |
| Conclusion | 3 consecutive batches, API lots A and B represented | 3 batches justified |

For a biologic drug substance with column lifetime, resin reuse, multiple cell-culture sources of variability, and complex CQAs (charge variants, glycosylation, aggregates), the same logic frequently lands on more than three batches, or three batches plus a concurrent resin-lifetime and CPV plan that carries the variability forward into Stage 3.

The mistake to avoid: writing "three batches per industry standard" with no analysis. Inspectors read that as cargo-cult validation. Tie the number to your Stage 1 knowledge and your risk assessment in [quality risk management](/articles/quality-risk-management) terms.

---

## What goes in the PPQ protocol

The PPQ protocol is a controlled document, approved before any batch runs. Executing even one batch before protocol approval is a classic data-integrity and validation finding. The protocol should contain, at minimum, the following sections.

### 1. Purpose and scope

State the product, strength, presentation, manufacturing site, the specific process being qualified, and the batch numbers or batch range. Define what is in scope (the commercial process) and out of scope (already-qualified equipment, validated methods).

### 2. Responsibilities

A clear RACI for protocol authoring, review, approval, execution, sampling, testing, deviation handling, data review, and report approval. See the roles section below.

### 3. Prerequisites

A checklist that must be true before batch 1 starts:

- Equipment IQ/OQ/PQ complete and approved (see [equipment qualification lifecycle](/articles/equipment-qualification-lifecycle)).
- Analytical methods validated or verified ([method validation essentials](/articles/method-validation-essentials)).
- Cleaning validation complete or a cleaning validation protocol in place ([cleaning validation execution](/articles/cleaning-validation-execution)).
- Utilities qualified (water, compressed gases, HVAC).
- Master batch record and SOPs approved and effective.
- Raw materials and components released, with lot numbers recorded.
- Personnel trained and qualified on the relevant procedures.

### 4. Process description and control strategy

A summary of the process flow, the CPPs and their proven acceptable ranges from Stage 1, the CQAs, and the in-process controls. This is where you show the reviewer that PPQ is built on real process understanding, not guesswork. Cross-reference the development report and the [quality by design and DoE](/articles/quality-by-design-and-doe) work that set the ranges.

### 5. Sampling plan

The heart of the protocol. Covered in detail below. It must specify where, when, how many, by whom, and against what each sample is taken and tested.

### 6. Acceptance criteria

What each parameter and attribute must meet for the batch and the campaign to pass. Also covered in detail below.

### 7. Process monitoring and data collection

How CPPs and in-process parameters are captured (manual records, electronic batch record, historian) and how that data feeds the report. If an [MES/EBR](/articles/mes-ebr-scada-data-integrity) or [process historian](/articles/process-historian-data-integrity) is used, reference its qualified state.

### 8. Deviation and out-of-specification handling

State how excursions during PPQ are managed: a deviation is raised, investigated per the [deviation management](/articles/deviation-management) and [OOS investigation](/articles/oos-investigation-process) procedures, and the impact on PPQ conclusions assessed. The protocol should NOT pre-authorize ignoring failures.

### 9. Statistical methods

The statistical approach used to evaluate the data: descriptive statistics, control charts, capability indices, tolerance intervals, whatever you commit to. Naming the method in the protocol stops people from data-shopping for a favorable analysis after the fact.

### 10. References and attachments

Linked documents: VMP, development report, risk assessment, master batch record, method numbers, sampling diagrams.

---

## Building the sampling plan

A PPQ sampling plan does two jobs at once. It must demonstrate uniformity and capability across the batch, and it must capture variability between batches. That is why PPQ sampling is denser than routine release sampling. This denser sampling is "enhanced sampling," and it is a defining feature of PPQ.

### Within-batch sampling: location and time

For attributes that can vary across a batch, you sample at multiple positions or timepoints. The intent is to detect non-uniformity that a single composite sample would hide.

- **Blend and content uniformity (oral solids):** sample the blender at multiple locations (top, middle, bottom, sides, discharge) and sample the compressed or filled units across the run (beginning, middle, end). This is where firms get into trouble with the **blend-uniformity / content-uniformity statistics** question. The withdrawn FDA draft guidance on this topic left the field using a defensible internal statistical standard. A common approach uses stratified sampling across the compression run, with a stated number of locations and units per location, evaluated against a documented statistical acceptance scheme.
- **Fill operations (parenterals, liquids):** sample at start, middle, and end of fill, and around interventions, for fill weight or volume, plus the relevant attributes.
- **Lyophilization:** sample across the shelf map (front/back, edge/center, top/bottom shelf) because position drives the thermal history and therefore residual moisture and cake appearance.
- **Bioreactors and chromatography (biologics):** sample across the run timeline and across the column or membrane cycles to capture process drift and resin-lifetime effects.

### Between-batch sampling: spanning variability

The plan should arrange the batch set so that known sources of variability appear:

- different raw material lots,
- different operators and shifts,
- different equipment trains if the line has parallel units,
- the realistic span of hold times and campaign position.

If you run all three PPQ batches back-to-back on the same shift with one operator and one API lot, you have not challenged the process; you have shown it works under one narrow condition.

### Sample size and the statistical basis

Sample sizes should have a rationale. Two common bases:

- **Attribute sampling** using a published scheme such as **ANSI/ASQ Z1.4 (acceptance sampling by attributes)** for go/no-go attributes, choosing an AQL and inspection level appropriate to the risk.
- **Variables sampling** using **ANSI/ASQ Z1.9 (acceptance sampling by variables)** or a **tolerance-interval** approach when you want to make a statement like "with 95% confidence, 99% of units fall within the specification."

State the chosen scheme, the confidence and coverage, and why they fit the product risk. "We took 30 samples because that is what we always do" is not a rationale.

### Worked sampling-plan table (tablet content uniformity, illustrative)

| Sampling point | Locations / timepoints | Units per point | Test | Basis |
|---|---|---|---|---|
| Final blend | 10 positions in blender | 3 per position (30 total) | Blend uniformity (assay %) | Stratified, RSD and mean limits |
| Compression | Start, 25%, 50%, 75%, end (5 stages) | 20 dosage units per stage (100 total) | Content uniformity, weight | Stratified across run |
| Compression | Each stage | 20 tablets | Hardness, thickness, friability, disintegration | Trend across run |
| Release | Composite per batch | Per spec | Full release panel | Compendial / registered spec |

The enhanced numbers (30 blend, 100 content-uniformity units) are far above routine release sampling. After PPQ passes, sampling intensity steps down to the routine plan, and the increased confidence carries into Stage 3.

---

## Acceptance criteria that hold up

Acceptance criteria are where many protocols quietly fail an inspection, because they are either too loose (so passing means nothing) or invented to match the data. Good criteria are set before execution, tied to the registered specification and to process capability, and defensible on their own.

### Three layers of criteria

1. **Registered / compendial specifications.** Every CQA result must meet the specification filed in the marketing application or the relevant compendial limit (for example a **USP** monograph). These are non-negotiable; PPQ cannot pass with an out-of-specification CQA.

2. **Enhanced PPQ acceptance criteria.** Because PPQ sampling is denser, you often apply criteria tighter than routine release. For uniformity you may require not just that each unit passes, but that the mean and variability across stratified samples meet stated limits (for example an RSD ceiling and a mean within a defined band). For CPPs you require that every parameter stayed within its proven acceptable range.

3. **Inter-batch consistency criteria.** PPQ is about reproducibility, so you set criteria on consistency between batches, not only within each batch. Process capability indices (Cp, Cpk, Ppk) are the usual tool. See [statistics in quality: Cpk and control charts](/articles/statistics-in-quality-cpk-control-charts) for how these are calculated and read.

### On capability indices in PPQ

A practical caution: three batches do not give enough data points to compute a meaningful Cpk for most attributes. Reporting a precise capability index off three lots and treating it as established is a known overreach. The defensible position is to use PPQ to confirm results meet specification with margin, present preliminary capability or trend information, and commit to establishing capability formally in [continued process verification (CPV)](/articles/continued-process-verification-cpv) once enough batches accumulate. Promise capability monitoring in Stage 3 rather than overclaiming it from three batches.

### Worked acceptance-criteria table (illustrative)

| Attribute / parameter | Type | Acceptance criterion | Source |
|---|---|---|---|
| Assay | CQA | 95.0-105.0% of label | Registered spec |
| Content uniformity | CQA | Meets USP uniformity of dosage units; stratified mean 98-102%, RSD <= 5.0% | Spec + enhanced PPQ |
| Dissolution | CQA | Q meets registered profile at each stage | Registered spec |
| Blend uniformity | In-process | Mean 95-105%, RSD <= 5.0% across 10 locations | Enhanced PPQ |
| Blending time | CPP | Within proven acceptable range (e.g. 12-18 min) | Stage 1 / control strategy |
| Compression force | CPP | Within proven acceptable range | Stage 1 / control strategy |
| Inter-batch | Consistency | All 3 batches within spec; no statistically significant trend; preliminary capability acceptable, full Cpk deferred to CPV | Protocol statistics |

Every criterion should trace to a source. If a reviewer asks "where did the RSD <= 5.0% come from," the answer must be a development study, a control-strategy decision, or a justified statistical standard, never "it seemed reasonable."

---

## Enhanced sampling and the step-down to routine

Enhanced sampling is the deliberately increased sampling and testing applied during PPQ to gain higher confidence about within- and between-batch uniformity. The 2011 FDA guidance is explicit that PPQ involves a higher level of sampling, testing, and scrutiny than routine commercial production.

The logic chain:

1. During PPQ you sample densely (many locations, many timepoints, many units) and test broadly.
2. The data confirms the process is uniform and consistent at a high confidence level.
3. That confidence justifies stepping down to a routine sampling and testing plan for ongoing production.
4. Stage 3 (CPV) then monitors the routine data to confirm the process stays in the state PPQ demonstrated.

Two practical rules. First, the enhanced plan and the routine plan must both be written down, with the step-down rationale recorded, so an inspector can see why routine sampling is lighter. Second, enhanced sampling is not only "more samples"; it is targeted at the attributes and locations most likely to reveal variability. Sampling more units from one spot adds little; sampling across the real sources of variation is what creates confidence.

For some processes the enhanced state does not fully end at PPQ. Resin and membrane lifetime in biologics, mixing or hold-time effects, and infrequent raw-material lots may need continued elevated monitoring into early commercial production. Carry those forward explicitly into the CPV plan rather than declaring everything qualified at batch three.

---

## How to execute PPQ, step by step

1. **Confirm prerequisites.** Walk the prerequisite checklist and document each item as met. Do not start with open prerequisites; if one is open, the batch data is challengeable.
2. **Hold a pre-execution readiness review.** QA, manufacturing, validation, and SMEs confirm the protocol is approved, materials are released, methods are ready, and people are trained.
3. **Execute the batch on the master batch record**, not on the protocol. The batch record is the legal manufacturing record; the protocol drives the extra sampling and data capture on top of it.
4. **Collect enhanced samples per the plan**, labeling location and timepoint precisely. Sampling integrity is itself an inspection target; mislabeled or contemporaneously-undocumented samples undermine the whole exercise. Apply [good documentation practices](/articles/good-documentation-practices) and [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) to every record.
5. **Record all CPPs and in-process results contemporaneously**, in the batch record, EBR, or historian. No back-filling.
6. **Test samples by validated methods**, with results entered into the system of record.
7. **Manage any deviation or OOS through the standard process.** A deviation during PPQ is not automatically a failure of PPQ, but you must investigate it, assess its impact on the qualification conclusion, and document the disposition. Do not "protocol around" failures.
8. **Repeat for the planned batches**, ideally spanning the variability sources you committed to.
9. **Compile and analyze the data** against the protocol's acceptance criteria and statistical methods.
10. **Write the PPQ report**, conclude, and route for approval. Product made under PPQ can be released for distribution if it meets all release specifications and the batch disposition is approved, but the process is not considered validated until the report concludes successfully.

---

## The PPQ report

The report is the deliverable an inspector reads most closely, because it states the conclusion: is the process validated or not. A weak report can sink strong data.

### What the report must contain

- **Reference to the approved protocol** and confirmation that execution followed it (or documented and justified any departures).
- **Summary of executed batches**: batch numbers, dates, equipment, operators, raw material lots, so the reader sees the variability that was spanned.
- **Results against every acceptance criterion**, in tables, showing actual values, not just "pass." A reviewer wants to see the numbers and the margin to the limit.
- **Statistical analysis** as committed in the protocol: descriptive stats, trend or control charts, preliminary capability with the appropriate caveat about sample size.
- **All deviations and OOS results** with investigation outcomes and their impact assessment on the PPQ conclusion. Hiding or omitting a deviation that occurred is a serious integrity finding.
- **Discussion of any results near or outside limits**, with the scientific rationale.
- **Conclusion**: an explicit statement on whether the process is qualified, plus any conditions or follow-ups (for example, items carried into CPV).
- **CPV linkage**: the parameters and attributes that Stage 3 will monitor, the control limits, and the review cadence.
- **Approvals**: validation, manufacturing SME, and QA at minimum.

### Acceptance criteria for the report itself ("what good looks like")

- Every protocol acceptance criterion is addressed with actual data and a clear pass/fail.
- No deviation is unexplained or omitted.
- Conclusions follow from the data and do not overreach (no firm Cpk claim from three lots).
- Departures from the protocol are documented and justified, not silently absorbed.
- The link to CPV is concrete, not a vague promise.

Many firms tie the report into the broader [validation summary report and release](/articles/validation-summary-report-and-release) structure and reference it from the [validation master plan](/articles/validation-master-plan-and-periodic-review). The report closes Stage 2 and opens Stage 3.

---

## Roles and responsibilities

| Role | Responsibility in PPQ |
|---|---|
| Validation / PV lead | Authors the protocol and report, designs the sampling and statistical approach, coordinates execution, compiles data |
| Process / manufacturing SME | Provides process knowledge, CPP ranges, control strategy; executes the batches; explains process behavior in investigations |
| Quality Assurance | Reviews and approves protocol and report, oversees deviation/OOS handling, makes batch disposition decisions, owns the GMP compliance of the exercise |
| Analytical / QC | Confirms method readiness, tests samples, reports results, supports OOS investigations |
| Statistician (or quality engineer) | Defines sample sizes, confidence/coverage, acceptance statistics, and the capability/CPV plan |
| Regulatory affairs | Confirms PPQ aligns with the registered process and commitments in the application; manages any filing implications |
| Process owner / site management | Resources the exercise, owns the validated state after qualification, sponsors CPV |

The split that matters most at inspection: **validation designs and runs it, QA independently reviews and approves, and the two functions are not the same people.** QA owning the disposition and the protocol/report approvals is what gives the exercise independence. SMEs supply the science; QA supplies the governance. See [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) for the wider map.

---

## Common mistakes and inspection-finding patterns

These are the patterns that recur in citations and audit observations across the industry. None of them name any firm; they are the generic failure modes.

- **No rationale for the number of batches.** "Three batches per standard" with no risk basis. Inspectors read it as a process the firm does not understand.
- **Acceptance criteria set or loosened after seeing data.** Criteria added, widened, or "clarified" once results are in. This is the most damaging pattern because it touches data integrity, not just validation.
- **Variability not represented.** All batches on one shift, one operator, one raw-material lot, then a claim of reproducibility. The data does not support the conclusion.
- **Overclaiming capability.** Reporting a precise Cpk from three lots as if the process capability were established.
- **Deviations buried or pre-authorized.** Either omitting a deviation from the report or writing the protocol to treat known excursions as acceptable. Both are findings.
- **Sampling that hides non-uniformity.** Composite sampling where stratified sampling was needed, or sampling only easy locations, so blend or fill non-uniformity goes undetected.
- **Starting execution before protocol approval**, or executing against an unapproved or superseded version.
- **Prerequisites not met.** Running PPQ before equipment qualification, method validation, or cleaning validation are complete, so the foundation is unqualified.
- **No bridge to CPV.** PPQ concludes and nothing monitors the process afterward, leaving Stage 3 empty. A common finding is a validated process with no ongoing verification program.
- **Treating PPQ as validation forever.** Significant changes to the process, equipment, or materials after PPQ without revalidation assessment through [change control](/articles/change-control-validated-systems).

Each of these maps to a specific section of the protocol or report. If you build the protocol carefully (rationale, spanned variability, pre-set criteria, honest statistics, deviation discipline, CPV bridge) you have pre-empted most observations.

---

## Interview-ready questions and strong answers

**"Why three batches?"**
There is no regulatory requirement for three. The 2011 FDA guidance and EU Annex 15 both require the number to be justified by process knowledge, variability, and risk. Three is a conventional minimum. I set the number from the Stage 1 characterization and a risk assessment, and I would run more if the data showed unexpected variability. The number is a conclusion, not an assumption.

**"What is the difference between PPQ and process validation?"**
PPQ is Stage 2 of the three-stage lifecycle, the part that qualifies the process. Process validation is the whole lifecycle: Stage 1 design, Stage 2 qualification (which includes facility/equipment qualification plus PPQ), and Stage 3 continued verification. PPQ is a stage, not the entire activity.

**"What is enhanced sampling and why?"**
It is the increased sampling and testing during PPQ relative to routine production. You sample densely across locations and timepoints to gain high confidence in within- and between-batch uniformity. That confidence justifies stepping down to routine sampling afterward, while CPV monitors that the process stays in the qualified state.

**"How do you set PPQ acceptance criteria?"**
Three layers: registered or compendial specifications that every CQA must meet, enhanced PPQ criteria that are often tighter because sampling is denser, and inter-batch consistency criteria for reproducibility. All are set before execution and traceable to a source, never invented to fit the results.

**"Can you compute process capability from PPQ?"**
You can present preliminary capability or trend information, but three batches are not enough data for a reliable Cpk. I confirm results meet specification with margin in PPQ and establish capability formally in CPV once enough batches accumulate. Claiming established capability off three lots is an overreach.

**"A deviation happens during PPQ. Does PPQ fail?"**
Not automatically. I raise and investigate the deviation through the standard process, assess root cause and impact on the qualification conclusion, and document the disposition. If it reflects a process control gap, it can invalidate the conclusion; if it is an assignable, isolated event with no CQA impact, the conclusion can stand with justification. The protocol must not pre-authorize ignoring failures.

**"How does PPQ connect to CPV?"**
PPQ proves the process is capable; CPV proves it stays capable. The report defines the parameters and attributes Stage 3 will monitor, the control limits, and the review cadence. Enhanced monitoring for things like resin lifetime or infrequent material lots is carried forward explicitly.

**"What would make you run more than three batches?"**
High inherent variability, complex CQAs (typical of biologics), limited Stage 1 data, multiple critical raw-material lots or equipment trains to span, or any unexpected variability seen during the first batches. Risk drives the count.

---

## Practical tips

- Write the number-of-batches rationale as a short, explicit risk argument and attach it to the protocol. It is the first thing an inspector probes.
- Pre-register the statistical method in the protocol. Naming the analysis up front removes any suspicion of data-shopping.
- Design the batch set to span variability on purpose: list the raw-material lots, operators, shifts, and equipment, and show how the batches cover them.
- Keep enhanced sampling targeted at where variability actually lives (blend locations, fill timeline, shelf map, column cycles), not just "more of the same sample."
- Document deviations as they happen, with full investigation. A clean, honest deviation record reads better than a suspiciously perfect run.
- Do not overclaim capability. Confirm specification compliance with margin and defer formal Cpk to CPV.
- Make the CPV bridge concrete in the report: the monitored parameters, the control limits, the cadence.
- Treat the PPQ report as the document an inspector will read first. Tables of actual values, clear pass/fail, no omissions.

---

## Related reading

- [Process validation lifecycle](/articles/process-validation-lifecycle): the full three-stage framework PPQ sits inside.
- [Continued process verification (CPV)](/articles/continued-process-verification-cpv): Stage 3, where capability is established and the qualified state is monitored.
- [Process validation for biologics](/articles/process-validation-for-biologics): the added considerations for drug substance, resin lifetime, and complex CQAs.
- [Quality by design and DoE](/articles/quality-by-design-and-doe): the Stage 1 work that sets CPP ranges and the control strategy PPQ relies on.
- [Statistics in quality: Cpk and control charts](/articles/statistics-in-quality-cpk-control-charts): how to compute and read the capability indices and trends used in PPQ and CPV.
- [Validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review): where PPQ is planned and tracked.
- [Validation summary report and release](/articles/validation-summary-report-and-release): the reporting structure the PPQ report fits into.
- [Quality risk management](/articles/quality-risk-management): the ICH Q9 basis for the batch-count and sampling rationale.
- [Deviation management](/articles/deviation-management) and [OOS investigation process](/articles/oos-investigation-process): how excursions during PPQ are handled.
