---
title: "Process Validation Lifecycle: Stage 1, 2, and 3 Under ICH Q8/Q9/Q10"
description: "A working guide to process validation using the three-stage lifecycle: process design, process qualification, and continued process verification, with practical detail on studies, documentation, statistics, roles, and regulatory expectations."
pubDate: 2026-03-10
tags: ["process validation", "ICH Q8", "ICH Q10", "Stage 1", "Stage 2", "Stage 3", "manufacturing"]
tier: "Advanced"
pillar: "quality-assurance"
---

The modern regulatory framework for process validation moved away from the traditional three-batch approach in 2011, when FDA issued its Guidance for Industry: Process Validation, General Principles and Practices. That guidance established a three-stage lifecycle model aligned with the quality by design principles in ICH Q8(R2) Pharmaceutical Development, ICH Q9 Quality Risk Management, and ICH Q10 Pharmaceutical Quality System. EMA adopted equivalent expectations in its 2014 Guideline on Process Validation for Finished Products (and a parallel guideline for biological active substances), and the same logic runs through EudraLex Volume 4, Annex 15 (Qualification and Validation), revised in 2015. The principles apply across modalities: small-molecule oral solids, sterile injectables, biologics, vaccines, and combination products. The tools change, the lifecycle does not.

The shift matters because the old model, run three batches, pass the tests, declare validation complete, treated validation as an event. The lifecycle model treats it as an ongoing program: you design the process to understand it, you qualify it to demonstrate control, and you monitor it continuously to confirm the state of control is maintained. The phrase "state of control" is not decoration. FDA's guidance defines it as a condition in which the set of controls consistently provides assurance of continued process performance and product quality. Everything in the three stages exists to establish that condition and then prove it has not slipped.

A useful way to read the three stages is by the question each one answers. Stage 1 asks: do we understand this process well enough to control it? Stage 2 asks: can we prove the process performs as designed at commercial scale? Stage 3 asks: is it still performing that way today, this batch, this quarter? A program that cannot answer all three is incomplete, even if a binder labelled "validation" exists.

---

## The Conceptual Framework

**Process design (Stage 1)** develops the knowledge that defines what the process is and what makes it work. This is where critical quality attributes (CQAs), critical process parameters (CPPs), and, where the company chooses to define one, the design space are established.

**Process qualification (Stage 2)** confirms that the designed process, implemented in the commercial facility with commercial equipment, produces product meeting specifications consistently. This is the activity most people picture when they hear "validation": controlled manufacturing runs with enhanced monitoring.

**Continued process verification (Stage 3)** provides ongoing assurance that the process remains in a state of control during routine commercial manufacturing. Statistical process monitoring detects drift before it causes failures.

All three stages together constitute a validated process. A process with a strong Stage 1 and 2 but no Stage 3 program is technically validated but not under ongoing control. A Stage 3 program without the underlying Stage 1 knowledge base is monitoring without understanding: you can plot a control chart, but you cannot interpret a signal or fix the cause.

| Stage | Lifecycle name | Primary phase | Core output |
|-------|----------------|---------------|-------------|
| 1 | Process Design | Development | Process understanding, CQAs, CPPs, control strategy |
| 2 | Process Qualification | Scale-up and launch | PPQ protocol and report, qualified equipment and facility |
| 3 | Continued Process Verification | Commercial life | Trending, control charts, capability, periodic review |

The boundaries are not walls. Knowledge generated in Stage 3, for example a recurring out-of-trend result on a single attribute, often feeds back into Stage 1 thinking and can trigger a process change that itself requires partial requalification. The lifecycle is a loop, not a one-way pipeline.

### Where validation sits in the wider quality system

Process validation is not a standalone discipline. It draws on and feeds several other programs, and inspectors will follow those threads:

- **Quality risk management** (ICH Q9) supplies the risk assessments that justify what gets studied, how many runs are needed, and what the sampling plan looks like. See [quality risk management](/articles/quality-risk-management).
- **Equipment and utility qualification** must be complete before process qualification can start. See [equipment qualification lifecycle](/articles/equipment-qualification-lifecycle).
- **Change control** governs every modification to a validated process. See [change control for validated systems](/articles/change-control-validated-systems).
- **The validation master plan** sets the site-level strategy, sequencing, and acceptance philosophy that individual protocols inherit. See [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review).

---

## Stage 1: Process Design

Stage 1 work happens primarily during pharmaceutical development, before commercial manufacturing. Its purpose is to establish a thorough understanding of the process: what it does, what makes it work, and what its failure modes are. The deliverable is not a passing batch. It is knowledge, captured in a form that someone who never ran the development program can read and use.

### Critical Quality Attributes (CQAs)

A CQA, as defined in ICH Q8(R2), is any product property of a physical, chemical, biological, or microbiological kind that has to be held inside a suitable limit, range, or distribution for the product to come out with the quality, safety, and efficacy it is meant to have. Examples for a sterile biologic: potency (biological activity), purity (the impurity profile), identity (confirmation of molecular structure), safety (absence of adventitious agents and acceptable endotoxin), and product-related substances such as aggregation, deamidation, and charge variants. For a small-molecule tablet the CQAs look different: assay, content uniformity, dissolution, related substances (degradants), and dose-form attributes such as hardness or disintegration where they affect bioavailability.

CQAs are derived from several inputs working together: knowledge of the mechanism of action (which molecular properties drive efficacy), toxicological assessment (which impurities are safety-relevant and at what level), clinical and nonclinical data (which attributes correlate with patient outcomes), and regulatory precedent for the product class. The exercise is one of justification, not listing. For each candidate attribute you state why it is or is not critical, and that rationale is itself inspectable.

A practical caution for newcomers: criticality is about impact, not about how hard something is to measure. An attribute can be difficult to assay and still not be a CQA, and an easy in-process measurement can be one of the most critical things you track.

### Critical Process Parameters (CPPs)

CPPs are process parameters whose variability has a real impact on a CQA and which therefore must be monitored or controlled to ensure the process produces the desired quality. Not every process parameter is critical. Temperature during a non-critical mixing step is a process parameter, but it may not be critical if, across a wide range, it has no meaningful effect on any CQA.

CPP identification starts with risk assessment under ICH Q9. Which parameters could plausibly affect which CQAs, and over what ranges? Common tools are failure mode and effects analysis (FMEA) and cause-and-effect (fishbone) mapping. Risk ranking narrows a long list of parameters to a smaller set worth studying experimentally. Then comes confirmation through design of experiments (DoE): studies that systematically vary parameters across their operating ranges and measure the CQA response, so the cause-and-effect relationship is demonstrated rather than assumed. The DoE approach and the QbD vocabulary behind it are covered in [quality by design and DoE](/articles/quality-by-design-and-doe).

It helps to keep three tiers straight. A critical process parameter has a demonstrated effect on a CQA and a tightly controlled range. A key or well-understood parameter is monitored but has a wider acceptable range. A non-critical parameter is recorded but not a control point. Drawing these lines clearly is what lets a manufacturing team know which alarms matter at 2 a.m.

A worked CPP-to-CQA linkage for one unit operation makes the logic concrete. The example below is a lyophilization (freeze-drying) step:

| Process parameter | Linked CQA | DoE finding | Classification | Control range |
|-------------------|------------|-------------|----------------|----------------|
| Shelf temperature, primary drying | Residual moisture; cake appearance | Strong effect on moisture and collapse above a threshold | CPP | -22 to -18 C |
| Chamber pressure | Residual moisture; drying time | Moderate effect within studied range | CPP | 80 to 120 mTorr |
| Freezing ramp rate | Reconstitution time | Weak effect across range studied | Key parameter | 0.5 to 1.5 C/min |
| Loading sequence | None demonstrated | No measurable CQA effect | Non-critical | Recorded only |

The point is not the specific numbers, which depend on the product, but the discipline: each control has a documented reason to exist, and the reason traces back to a CQA and a study.

### Control Strategy and Design Space

In the ICH Q10 sense, a control strategy is the coordinated set of controls a company puts in place, built from what it has learned about the product and the process, to hold both process performance and product quality where they need to be. It spans input material controls, in-process controls, CPP ranges, and finished-product testing. The control strategy is the practical product of Stage 1: it is what gets implemented on the floor.

In ICH Q8(R2) terms, a design space is the set of input-variable and process-parameter combinations, taken together across more than one dimension, that has been shown to deliver quality. Operating anywhere inside that region counts as staying put rather than making a change, so it does not call for prior regulatory approval. Moving out of the design space is a change and normally requires a regulatory submission. A design space is optional under ICH Q8(R2); many products are licensed with proven acceptable ranges and a sound control strategy and no formal multidimensional design space at all. Define one only where the operating flexibility it buys is worth the development and regulatory effort to characterize it.

### Stage 1 Documentation

Typical records include development reports, process characterization study reports, the risk assessments themselves, DoE study reports, and a Process Design Report or development summary that captures the integrated process understanding. This package is the scientific basis for the Process Validation Protocol that governs Stage 2. When an inspector asks "how do you know this parameter range is safe," the answer lives here, and an answer of "that is what we have always run" is the one finding you most want to avoid.

### Stage 1 acceptance criteria: how you know it is done

Stage 1 has no batch to pass, so people sometimes treat it as never finished. It is finished when these are true:

- Every CQA has a documented criticality rationale and an acceptance range tied to clinical, toxicological, or compendial justification.
- Every CPP has an experimentally demonstrated link to a CQA and a defined normal operating range plus a proven acceptable range.
- A risk assessment exists that shows the full parameter list was considered, not just the parameters that turned out to matter.
- The control strategy is written and implementable, with each control traceable to the understanding that justifies it.
- The package is readable by someone outside the development team. If a technical transfer team cannot run the process from the documentation, Stage 1 is not done.

For the wider development-to-commercial picture, see [BLA readiness data package](/articles/bla-readiness-data-package) and [quality in technology transfer](/articles/quality-in-technology-transfer).

---

## Stage 2: Process Qualification

Stage 2 occurs during manufacturing scale-up and commercial introduction. It demonstrates that the commercial-scale process consistently produces product meeting CQAs when operated within the defined CPP ranges, in the real facility, with the real equipment, run by the people who will run it.

### Process Performance Qualification Protocol

The PPQ protocol must be reviewed and approved by Quality Assurance before any qualification run. Approving acceptance criteria after the data are in hand is not science, and it is a recurring inspection finding. The protocol specifies:

- The manufacturing runs to be included, with the number scientifically justified
- The CPPs to be monitored and their acceptance limits
- The enhanced sampling and testing plan, more intensive than routine release testing
- The CQAs to be evaluated and the methods used
- Statistical acceptance criteria
- Rules for batch inclusion and exclusion, defined in advance
- The deviation handling and pre-defined escalation path for the runs
- The roles and signatures required for protocol approval, execution oversight, and report approval

**Number of runs.** Three consecutive batches has been industry practice for decades, but FDA's 2011 guidance deliberately does not prescribe a number. It requires enough runs to demonstrate consistent performance and to provide a statistically meaningful basis for the conclusion. For a well-characterized process backed by extensive development data, three may be appropriate. For a novel modality, a complex biologic, or a process with higher variability, more runs may be needed. The protocol must justify the number chosen rather than reciting "three" by habit. A defensible justification references the variability seen in development, the criticality of the CQAs, and the statistical confidence the chosen number supports.

**Consecutive runs.** The runs must be consecutive because the point is to show control over time, not that the process can occasionally produce good product. Selecting three good batches out of a larger set, or quietly running batches in between the chosen ones, defeats the purpose and, when discovered, reads as data integrity failure rather than a validation shortfall. See [data integrity foundations](/articles/data-integrity-foundations) for why selective reporting is treated so seriously.

**Enhanced monitoring.** PPQ runs carry heavier instrumentation than routine production: additional in-process samples at key stages, more frequent parameter recording, extra release tests beyond the routine panel, and retention of additional samples for follow-up. The enhanced data set is what supports the statistical conclusions; you cannot generate it retroactively.

### Setting PPQ acceptance criteria

Acceptance criteria in a PPQ protocol come in layers, and confusing them is a common protocol weakness:

1. **Registered specification limits.** Each CQA must meet the limits filed in the marketing application. This is non-negotiable; a result outside specification is an out-of-specification event, not a validation observation.
2. **In-process and CPP limits.** Each monitored parameter must stay within its proven acceptable range during the run.
3. **Statistical or consistency criteria across runs.** Beyond passing per batch, the protocol should state how consistency across runs is judged, for example that the mean and spread of a CQA across the PPQ runs sit comfortably inside the specification, or an early estimate of capability where the data support it. Some processes set a target such as observed results falling within a defined fraction of the specification width.

A worked acceptance-criteria table for one CQA on a three-run PPQ:

| CQA | Spec | Run 1 | Run 2 | Run 3 | Per-run criterion | Cross-run judgment |
|-----|------|-------|-------|-------|-------------------|--------------------|
| Assay (% label) | 95.0-105.0 | 99.4 | 100.1 | 98.9 | Each within spec | Mean 99.5, range 1.2; centered, low spread, acceptable |
| Dissolution (% at 30 min) | not less than 80 | 94 | 96 | 92 | Each meets limit | Consistent margin above limit |
| Water content (% w/w) | not more than 3.0 | 1.8 | 2.1 | 2.4 | Each within limit | Upward pattern across runs; flag for Stage 3 watch |

Notice the last row. All three runs pass, but a reviewer who only checks pass/fail misses the upward movement. The validation conclusion can still be "qualified," but the report should explicitly carry that observation into the continued verification plan. This is the difference between a tick-box validation and one that actually understands its process.

### Concurrent Release During Stage 2

FDA's 2011 guidance explicitly allows concurrent release during process qualification: product made during PPQ runs can be released to market while the PPQ protocol is still being completed, provided Quality makes a documented, risk-based decision that the data available at release time support that release. The full PPQ report must still be finalized and reviewed afterward. EMA Annex 15 and the EMA process validation guideline treat concurrent validation as a route reserved for justified cases, for example a product addressing a genuine medical need with limited batches. Under the lifecycle approach this is a defined, risk-managed practice with a documented rationale, not an after-the-fact exception used to rescue a batch.

### Process Qualification Report

The PPQ report summarizes the runs conducted, the data generated, the comparison against pre-approved acceptance criteria, any deviations and their investigations, the statistical analysis, and the conclusion that the process is qualified. QA approval is required. The report then becomes a reference point: later changes to the process are assessed against this qualified state through [change control for validated systems](/articles/change-control-validated-systems). A deviation during PPQ is not automatically fatal, but it must be investigated to root cause and its impact on the validity of the run assessed honestly. Quietly carrying a serious deviation forward is worse than failing the run.

The deeper protocol-and-report mechanics, including the criteria for declaring a run successful, are covered in [process performance qualification (PPQ)](/articles/process-performance-qualification-ppq) and the general [writing validation protocols and reports](/articles/writing-validation-protocols-and-reports). Biologic-specific considerations, where scale-down models and comparability complicate the picture, are in [process validation for biologics](/articles/process-validation-for-biologics).

---

## Stage 2: Equipment and Facility Qualification

Stage 2 also covers qualification of the manufacturing equipment, utilities, and facility used for commercial production. This is the IQ/OQ/PQ work performed at the equipment and system level, and it must be complete before process performance qualification, because you cannot qualify a process on equipment that has not been qualified itself.

**Installation Qualification (IQ)** verifies that equipment was installed correctly, that the physical installation matches design and purchase specifications, that connected utilities meet specification, and that documentation such as manuals, materials certificates, and calibration records is in place.

**Operational Qualification (OQ)** verifies that equipment operates as intended across its full operating range, including the edges and any alarms and interlocks. For a bioreactor, OQ challenges temperature control accuracy, agitation speed, pH control response, dissolved oxygen control, and data acquisition across the range it will actually be used in, not just at a comfortable midpoint. For a tablet press, OQ challenges compression force control, turret speed, and reject-station function.

**Performance Qualification (PQ)** verifies that the equipment performs consistently within specification under conditions representative of production. It often includes consecutive runs under production-like conditions.

**Process Performance Qualification (PPQ)** is the combined Stage 2 activity in which qualified equipment, utilities, and facility are run with the actual product and process to show the whole system produces consistent, specification-meeting output. A frequent terminology trap: equipment-level "PQ" and process-level "PPQ" are different activities. Keep the acronyms straight in protocols so reviewers and inspectors are not left guessing which one a document means.

Many sites now run a science- and risk-based commissioning and qualification approach under ASTM E2500, where verification effort is focused on the aspects that affect product quality and patient safety rather than testing everything equally. That approach is covered in [commissioning and qualification (ASTM E2500)](/articles/commissioning-qualification-astm-e2500). The deeper mechanics of qualifying equipment are in [equipment qualification lifecycle](/articles/equipment-qualification-lifecycle) and the supporting [validation deliverables guide](/articles/validation-deliverables-guide). Utility qualification (water, clean steam, compressed gases) is in [clean utilities qualification](/articles/clean-utilities-qualification) and [water system validation (USP 1231)](/articles/water-system-validation-usp-1231).

---

## Stage 3: Continued Process Verification

Stage 3 is the ongoing program that maintains and confirms the state of control established in Stage 2. It runs for the commercial life of the product, and for most products it generates far more data over time than Stages 1 and 2 combined. The full operational design of a Stage 3 program is covered in [continued process verification (CPV)](/articles/continued-process-verification-cpv); this section gives the working core.

### Statistical Process Monitoring

Stage 3 uses statistical tools to monitor process performance over time and, critically, to distinguish two kinds of variation:

*Common cause variation* is the random variation inherent in a stable process. A process can be in statistical control even though variation is present. Common cause variation is reduced only by changing the process design, not by chasing individual points.

*Special cause variation* comes from an identifiable, correctable source: equipment malfunction, operator error, a raw material lot shift, an environmental change. A signal that points to special cause is what triggers an investigation. Confusing the two is the classic mistake. Reacting to common cause as if it were special cause, called tampering, usually makes a process worse, not better.

### Control Charts

Shewhart control charts are the foundational tool: individuals and moving-range charts for batch data, and X-bar and R or X-bar and S charts where rational subgroups exist. Each result is plotted as a point. Control limits are calculated from the process data, typically anchored in the Stage 2 and early Stage 3 history, and are distinct from specification limits, which come from the registered acceptance criteria. The chart is read for:

- Points outside the control limits, a possible special cause
- A run of eight or more consecutive points on one side of the center line, suggesting a shift
- Six consecutive increasing or decreasing points, a trend
- The wider Western Electric and Nelson pattern rules (for example, two of three points beyond two sigma on the same side)

A chart showing a process drifting toward an upper specification limit while every batch still passes is more useful than a pass/fail table. It says the process center has moved and that action should be taken before a failure occurs. That early warning is the whole reason Stage 3 exists.

A practical distinction worth internalizing: specification limits protect the patient and come from the registered application; control limits protect the process and come from its own demonstrated behavior. Control limits are usually tighter than specification limits, which is the point. A result inside specification but outside the control limit is an out-of-trend event, not an out-of-specification event, and it gets investigated as a process signal. See [out-of-trend investigations](/articles/out-of-trend-investigations).

### Process Capability

Process capability indices quantify how well a stable process fits inside its specification limits. Cpk relates the distance from the process mean to the nearer specification limit. A Cpk of 1.33 corresponds to the process mean sitting at least four standard deviations from the closest specification limit. A minimum Cpk around 1.33 is a common expectation for commercial processes, with a higher target such as 1.67 sometimes set for the most safety-relevant CQAs. Capability is only meaningful once the process is demonstrably stable; computing Cpk on an out-of-control process produces a number with no valid interpretation. A capability index that erodes over time, even while still nominally acceptable, is a drift signal worth acting on. The mechanics of these calculations are worked through in [statistics in quality: Cpk and control charts](/articles/statistics-in-quality-cpk-control-charts).

A small numeric illustration. Suppose assay has a specification of 95.0 to 105.0 (so the specification mean is 100.0), and the routine commercial data show a mean of 99.0 with a standard deviation of 1.0. The distance to the nearer limit (95.0) is 4.0, so Cpk is 4.0 divided by (3 times 1.0), which is 1.33. If the mean drifts to 98.0 with the same spread, the distance to 95.0 falls to 3.0 and Cpk drops to 1.00, even though no individual batch has failed yet. That falling number is the action signal.

### Periodic Product Review

21 CFR 211.180(e) requires a review of records for each drug product at least annually to determine the need for changes in specifications or manufacturing or control procedures. EudraLex Volume 4, Chapter 1, sets the equivalent Product Quality Review (PQR) expectation in the EU. The review compiles:

- Batch manufacturing data for the period
- Out-of-specification, out-of-trend, and deviation summaries
- CAPA status for product-related issues
- Stability data
- Complaint and return data
- Changes implemented during the period
- Statistical analysis of key quality attributes and CPPs
- An overall assessment of continued process control

The annual review is a Stage 3 output, not a filing exercise. A review that compiles tables without trend analysis or comparison to control limits is not doing the job the lifecycle assigns it. The structure and common failure modes are covered in [annual product review and PQR](/articles/annual-product-review-pqr).

### Stage 3 acceptance criteria: what "in control" looks like

- A defined set of CQAs and CPPs are trended on the appropriate charts every batch or at the defined frequency.
- Control limits are established, documented, and periodically re-evaluated as data accumulate.
- A written procedure defines what constitutes a signal and what response each signal triggers, so reaction is consistent and not left to whoever is on shift.
- Out-of-trend results are investigated and linked to deviation and CAPA records where appropriate.
- Process capability is tracked over time, not computed once and forgotten.
- The annual or periodic review closes the loop with a documented conclusion on the state of control.

---

## How the Stages Connect to Change and Lifecycle Management

A validated process is not frozen. Raw material sources change, equipment is replaced, sites are added, yields are optimized. Each of these is handled through change control, and each must be assessed against the qualified state from Stage 2 and the understanding from Stage 1. The question is always: does this change affect a CQA, a CPP, or the control strategy, and if so, what level of revalidation does it require?

ICH Q12 (Technical and Regulatory Considerations for Pharmaceutical Product Lifecycle Management, finalized in 2019) gives tools for managing post-approval changes with less regulatory friction, including Established Conditions and the Post-Approval Change Management Protocol. A mature Stage 1 knowledge base and a defined design space are what make those tools usable, because they let a company show in advance which parameters can move without affecting quality. The connection is covered in [ICH Q12 lifecycle management](/articles/ich-q12-lifecycle-management). Revalidation triggers, the criteria for when Stage 2 must be repeated in whole or in part, should be written down before they are needed, not improvised when a change lands.

A simple revalidation decision aid, which belongs in a site procedure rather than in someone's head:

| Change | Likely impact | Typical validation response |
|--------|---------------|------------------------------|
| New supplier for a critical raw material | Possible CQA or CPP effect | Risk assessment plus at-scale confirmation runs, often a partial PPQ |
| Like-for-like replacement of a qualified unit operation skid | Equipment only | Requalification (IQ/OQ/PQ) of the skid; process impact assessed |
| Scale increase (larger batch) | Mixing, heat, mass transfer change | Full or partial PPQ at the new scale |
| Tightening an in-process control limit | Reduces risk | Usually assessment only, documented, no new runs |
| New manufacturing site | Everything | Full technical transfer plus full PPQ at the new site |

---

## Roles and Responsibilities

Validation is a team activity, and inspectors expect clear ownership. A workable split:

| Role | Primary responsibility in the lifecycle |
|------|------------------------------------------|
| Process development / MSAT | Owns Stage 1 understanding, CQA/CPP definition, DoE, and the control strategy; leads scale-up and the technical content of PPQ |
| Manufacturing / Operations | Executes qualification and routine production exactly as the protocol and batch record specify; raises deviations |
| Quality Assurance | Approves protocols and reports before and after execution; owns acceptance criteria, deviation disposition, and the validated-state decision |
| Quality Control / Analytical | Runs the enhanced testing, owns the methods, ensures methods are validated and instruments qualified |
| Validation / Engineering | Owns equipment and utility qualification (IQ/OQ/PQ) and the validation master plan |
| Statistics / data science | Designs the DoE, sets control limits and capability targets, builds and interprets the Stage 3 monitoring |
| Regulatory Affairs | Owns the submission content (Module 3), commitments, and the design-space and Established-Conditions strategy |

The one boundary that is never negotiable: QA approves acceptance criteria before execution and makes the final call on whether the process is validated. Manufacturing and development can recommend; QA decides. Roles across the quality system are mapped in [GxP roles and responsibilities](/articles/gxp-roles-responsibilities).

---

## Common Process Validation Failures

These are the patterns that recur in inspection findings and warning letters across the industry. None are exotic; most come from treating validation as paperwork rather than evidence.

**Stage 1 knowledge gaps.** Qualification runs attempted on a poorly characterized process, leading to Stage 2 failures nobody could anticipate because the cause-and-effect relationships were never established. The fix is upstream, in development, not in re-running batches.

**Protocol not approved before execution.** A frequent inspection finding. The protocol defines the acceptance criteria, and criteria written after the data are seen are not acceptance criteria.

**Batches not truly consecutive.** Cherry-picking passing batches from a larger set, or running undisclosed batches between the chosen ones. This crosses from a validation weakness into a data integrity problem.

**No Stage 3 program.** PPQ completed and then no statistical process monitoring at all. The process is "validated" on paper but has no ongoing assurance of control. Lack of continued process monitoring has been cited as a GMP deficiency.

**Annual review disconnected from monitoring.** A review that aggregates data without statistics, trend identification, or comparison to control limits is not fulfilling its Stage 3 purpose.

**Revalidation triggers undefined.** No documented decision point for when requalification is needed, so significant changes accumulate and validation data quietly goes stale.

**OOS results handled poorly during validation.** An out-of-specification result during PPQ that is invalidated without a proper investigation undermines the whole conclusion. Handle these through a sound [OOS investigation process](/articles/oos-investigation-process), the same way you would in routine production.

**Number of runs unjustified.** A protocol that says "three batches" with no rationale tied to process variability or risk. Inspectors increasingly ask why three, and "industry standard" is not an answer the 2011 guidance supports.

**Control limits equated with specification limits.** Stage 3 charts drawn with specification limits as the action lines, so the early-warning function is lost and the program only reacts to outright failures.

---

## Interview-Ready: Questions and How to Answer

These are the questions an interviewer or an inspector tends to ask on this topic. Short, correct, confident answers matter more than long ones.

**"Walk me through the three stages of process validation."** Stage 1 process design builds process understanding (CQAs, CPPs, control strategy) during development. Stage 2 process qualification proves the commercial-scale process performs consistently, including equipment qualification and PPQ. Stage 3 continued process verification monitors the process statistically for the life of the product to confirm it stays in control. Name the FDA 2011 guidance and ICH Q8/Q9/Q10 as the framework.

**"How many PPQ batches do you need?"** Enough to demonstrate consistent performance and give a statistically meaningful conclusion. The 2011 guidance deliberately does not set a number. Three is common for a well-characterized process; a novel or variable process may need more. The protocol must justify the number, not recite habit.

**"What is the difference between a specification limit and a control limit?"** Specification limits come from the registered application and protect the patient; a breach is an OOS. Control limits are calculated from the process's own data and protect the process; they are usually tighter, and a breach is an out-of-trend signal that triggers investigation before a failure occurs.

**"What is the difference between a CQA and a CPP?"** A CQA is a property of the product that must be controlled for quality, safety, or efficacy. A CPP is a process input whose variation affects a CQA and therefore must be controlled. CPPs are identified by risk assessment and confirmed by DoE; they exist to keep CQAs in range.

**"Common cause versus special cause variation?"** Common cause is the inherent random variation of a stable process, reduced only by redesigning the process. Special cause comes from an identifiable, correctable source and produces a signal on the chart. Reacting to common cause as if it were special cause (tampering) makes the process worse.

**"What does a Cpk of 1.33 mean, and why does it matter?"** It means the process mean sits at least four standard deviations from the nearer specification limit, a common minimum expectation for a commercial process. It only has meaning on a stable process; computing it on an out-of-control process is meaningless. A falling Cpk is a drift signal even before any batch fails.

**"What triggers revalidation?"** A change that affects a CQA, a CPP, or the control strategy, assessed through change control. The triggers should be written down in advance. Examples: new critical material supplier, scale change, new site, equipment change affecting process performance.

**"How do you handle a deviation during a PPQ run?"** Investigate to root cause, assess the impact on the validity of that run honestly, and document the disposition. A deviation does not automatically void the run, but carrying a serious unexplained deviation forward is worse than declaring the run invalid and repeating it.

**"Where does process validation live in a marketing application?"** CTD Module 3, mainly 3.2.P.3.3 (manufacturing process and controls) and 3.2.P.3.5 (process validation and evaluation), with development content in 3.2.P.2.

---

## Regulatory Submission Requirements

For a BLA, NDA, or MAA, process validation information sits in CTD Module 3, principally section 3.2.P.3.3 (Description of Manufacturing Process and Process Controls) and section 3.2.P.3.5 (Process Validation and/or Evaluation), with supporting development content in 3.2.P.2. A typical package includes:

- A summary of process development work (Stage 1)
- The PPQ protocol and report, or a justified commitment for post-approval PPQ
- A description of the Stage 3 continued process verification program
- Statistical analysis of the PPQ batch data

For expedited development pathways such as Breakthrough Therapy and Accelerated Approval, FDA's 2011 guidance acknowledges that full PPQ may not be complete at the time of initial licensure. A reliable process monitoring program plus a commitment to provide additional validation data after approval can be agreed with the agency, but the bar for justification is high and the post-approval commitments are tracked and enforced.

One expectation is worth stating plainly for readers moving from clinical to commercial work. The standard for commercial-scale process validation is higher than for clinical manufacturing. Product for early clinical trials is made under appropriate GMP, but the process characterization, statistical rigor, and continued verification expected for a commercial license are substantially more extensive. Treating a Phase 1 process record as if it were a commercial validation package is a predictable way to draw findings. For the surrounding inspection expectations, see [FDA inspection readiness](/articles/fda-inspection-readiness) and the submission structure in [eCTD submission architecture](/articles/ectd-submission-architecture).

---

## Practical Tips

- Write the revalidation triggers into a procedure before you need them. The worst time to decide whether a change needs a new PPQ is while the change is already on the floor.
- Carry forward the soft signals. If a CQA drifts inside specification during PPQ, name it in the report and hand it to the Stage 3 plan. Do not let a "pass" hide a pattern.
- Keep the acronyms clean. PQ (equipment) and PPQ (process) are different activities; CQA, CPP, and key parameter are different tiers. Sloppy terminology in a protocol invites reviewer questions.
- Make Stage 1 transferable. The test of a development package is whether a technical transfer team can run the process from it without phoning the original scientists.
- Let the statistics drive the conversation. A control chart that shows a centered, stable process is a stronger validation story than a table of passing results, and it is the kind of evidence inspectors find persuasive.
- Tie every control back to a reason. For each in-process control and CPP range, be able to point to the study or rationale that justifies it. "That is what we have always run" is the answer that draws a finding.
