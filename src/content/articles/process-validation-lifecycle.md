---
title: "Process Validation Lifecycle: Stage 1, 2, and 3 Under ICH Q8/Q9/Q10"
description: "A working guide to pharmaceutical process validation using the modern three-stage lifecycle, process design, process qualification, and continued process verification, with practical detail on studies, documentation, statistics, and regulatory expectations."
pubDate: 2026-03-10
tags: ["process validation", "ICH Q8", "ICH Q10", "Stage 1", "Stage 2", "Stage 3", "manufacturing"]
tier: "Advanced"
pillar: "quality-assurance"
---

The modern regulatory framework for process validation moved away from the traditional three-batch approach in 2011, when FDA issued its Guidance for Industry: Process Validation, General Principles and Practices. That guidance established a three-stage lifecycle model aligned with the quality by design principles in ICH Q8(R2) Pharmaceutical Development, ICH Q9 Quality Risk Management, and ICH Q10 Pharmaceutical Quality System. EMA adopted equivalent expectations in its 2014 Guideline on Process Validation for Finished Products, and the same logic runs through EudraLex Volume 4, Annex 15 (Qualification and Validation), revised in 2015.

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

---

## Stage 1: Process Design

Stage 1 work happens primarily during pharmaceutical development, before commercial manufacturing. Its purpose is to establish a thorough understanding of the process: what it does, what makes it work, and what its failure modes are. The deliverable is not a passing batch. It is knowledge, captured in a form that someone who never ran the development program can read and use.

### Critical Quality Attributes (CQAs)

CQAs are the physical, chemical, biological, or microbiological properties of the drug product that must be within an appropriate limit, range, or distribution to ensure the desired product quality, safety, and efficacy. ICH Q8(R2) is the source of that definition. Examples for a sterile biologic: potency (biological activity), purity (the impurity profile), identity (confirmation of molecular structure), safety (absence of adventitious agents and acceptable endotoxin), and product-related substances such as aggregation, deamidation, and charge variants.

CQAs are derived from several inputs working together: knowledge of the mechanism of action (which molecular properties drive efficacy), toxicological assessment (which impurities are safety-relevant and at what level), clinical and nonclinical data (which attributes correlate with patient outcomes), and regulatory precedent for the product class. The exercise is one of justification, not listing. For each candidate attribute you state why it is or is not critical, and that rationale is itself inspectable.

A practical caution for newcomers: criticality is about impact, not about how hard something is to measure. An attribute can be difficult to assay and still not be a CQA, and an easy in-process measurement can be one of the most critical things you track.

### Critical Process Parameters (CPPs)

CPPs are process parameters whose variability has a real impact on a CQA and which therefore must be monitored or controlled to ensure the process produces the desired quality. Not every process parameter is critical. Temperature during a non-critical mixing step is a process parameter, but it may not be critical if, across a wide range, it has no meaningful effect on any CQA.

CPP identification starts with risk assessment under ICH Q9. Which parameters could plausibly affect which CQAs, and over what ranges? Common tools are failure mode and effects analysis (FMEA) and cause-and-effect (fishbone) mapping. Risk ranking narrows a long list of parameters to a smaller set worth studying experimentally. Then comes confirmation through design of experiments (DoE): studies that systematically vary parameters across their operating ranges and measure the CQA response, so the cause-and-effect relationship is demonstrated rather than assumed.

It helps to keep three tiers straight. A critical process parameter has a demonstrated effect on a CQA and a tightly controlled range. A key or well-understood parameter is monitored but has a wider acceptable range. A non-critical parameter is recorded but not a control point. Drawing these lines clearly is what lets a manufacturing team know which alarms matter at 2 a.m.

### Control Strategy and Design Space

ICH Q10 frames the control strategy as the planned set of controls, derived from product and process understanding, that assures process performance and product quality. It spans input material controls, in-process controls, CPP ranges, and finished-product testing. The control strategy is the practical product of Stage 1: it is what gets implemented on the floor.

The design space is the multidimensional combination of input variables and process parameters demonstrated to provide assurance of quality. Working within the design space is not considered a change and does not require prior regulatory approval. Moving out of the design space is a change and normally requires a regulatory submission. A design space is optional under ICH Q8(R2); many products are licensed with proven acceptable ranges and a sound control strategy and no formal multidimensional design space at all. Define one only where the operating flexibility it buys is worth the development and regulatory effort to characterize it.

### Stage 1 Documentation

Typical records include development reports, process characterization study reports, the risk assessments themselves, DoE study reports, and a Process Design Report or development summary that captures the integrated process understanding. This package is the scientific basis for the Process Validation Protocol that governs Stage 2. When an inspector asks "how do you know this parameter range is safe," the answer lives here, and an answer of "that is what we have always run" is the one finding you most want to avoid.

For the wider development-to-commercial picture, see [BLA readiness data package](/articles/bla-readiness-data-package) and [quality risk management](/articles/quality-risk-management).

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

**Number of runs.** Three consecutive batches has been industry practice for decades, but FDA's 2011 guidance deliberately does not prescribe a number. It requires enough runs to demonstrate consistent performance and to provide a statistically meaningful basis for the conclusion. For a well-characterized process backed by extensive development data, three may be appropriate. For a novel modality, a complex biologic, or a process with higher variability, more runs may be needed. The protocol must justify the number chosen rather than reciting "three" by habit.

**Consecutive runs.** The runs must be consecutive because the point is to show control over time, not that the process can occasionally produce good product. Selecting three good batches out of a larger set, or quietly running batches in between the chosen ones, defeats the purpose and, when discovered, reads as data integrity failure rather than a validation shortfall. See [data integrity foundations](/articles/data-integrity-foundations) for why selective reporting is treated so seriously.

**Enhanced monitoring.** PPQ runs carry heavier instrumentation than routine production: additional in-process samples at key stages, more frequent parameter recording, extra release tests beyond the routine panel, and retention of additional samples for follow-up. The enhanced data set is what supports the statistical conclusions; you cannot generate it retroactively.

### Concurrent Release During Stage 2

FDA's 2011 guidance explicitly allows concurrent release during process qualification: product made during PPQ runs can be released to market while the PPQ protocol is still being completed, provided Quality makes a documented, risk-based decision that the data available at release time support that release. The full PPQ report must still be finalized and reviewed afterward. EMA Annex 15 and the EMA process validation guideline treat concurrent validation as a route reserved for justified cases, for example a product addressing a genuine medical need with limited batches. Under the lifecycle approach this is a defined, risk-managed practice with a documented rationale, not an after-the-fact exception used to rescue a batch.

### Process Qualification Report

The PPQ report summarizes the runs conducted, the data generated, the comparison against pre-approved acceptance criteria, any deviations and their investigations, the statistical analysis, and the conclusion that the process is qualified. QA approval is required. The report then becomes a reference point: later changes to the process are assessed against this qualified state through [change control for validated systems](/articles/change-control-validated-systems). A deviation during PPQ is not automatically fatal, but it must be investigated to root cause and its impact on the validity of the run assessed honestly. Quietly carrying a serious deviation forward is worse than failing the run.

---

## Stage 2: Equipment and Facility Qualification

Stage 2 also covers qualification of the manufacturing equipment, utilities, and facility used for commercial production. This is the IQ/OQ/PQ work performed at the equipment and system level, and it must be complete before process performance qualification, because you cannot qualify a process on equipment that has not been qualified itself.

**Installation Qualification (IQ)** verifies that equipment was installed correctly, that the physical installation matches design and purchase specifications, that connected utilities meet specification, and that documentation such as manuals, materials certificates, and calibration records is in place.

**Operational Qualification (OQ)** verifies that equipment operates as intended across its full operating range, including the edges and any alarms and interlocks. For a bioreactor, OQ challenges temperature control accuracy, agitation speed, pH control response, dissolved oxygen control, and data acquisition across the range it will actually be used in, not just at a comfortable midpoint.

**Performance Qualification (PQ)** verifies that the equipment performs consistently within specification under conditions representative of production. It often includes consecutive runs under production-like conditions.

**Process Performance Qualification (PPQ)** is the combined Stage 2 activity in which qualified equipment, utilities, and facility are run with the actual product and process to show the whole system produces consistent, specification-meeting output. A frequent terminology trap: equipment-level "PQ" and process-level "PPQ" are different activities. Keep the acronyms straight in protocols so reviewers and inspectors are not left guessing which one a document means.

The deeper mechanics of qualifying equipment, including the modern science- and risk-based approach to verification, are covered in [equipment qualification lifecycle](/articles/equipment-qualification-lifecycle) and the supporting [validation deliverables guide](/articles/validation-deliverables-guide).

---

## Stage 3: Continued Process Verification

Stage 3 is the ongoing program that maintains and confirms the state of control established in Stage 2. It runs for the commercial life of the product, and for most products it generates far more data over time than Stages 1 and 2 combined.

### Statistical Process Monitoring

Stage 3 uses statistical tools to monitor process performance over time and, critically, to distinguish two kinds of variation:

*Common cause variation* is the random variation inherent in a stable process. A process can be in statistical control even though variation is present. Common cause variation is reduced only by changing the process design, not by chasing individual points.

*Special cause variation* comes from an identifiable, correctable source: equipment malfunction, operator error, a raw material lot shift, an environmental change. A signal that points to special cause is what triggers an investigation. Confusing the two is the classic mistake. Reacting to common cause as if it were special cause, called tampering, usually makes a process worse, not better.

### Control Charts

Shewhart control charts are the foundational tool: individuals and moving-range charts for batch data, and X-bar and R or X-bar and S charts where rational subgroups exist. Each result is plotted as a point. Control limits are calculated from the process data, typically anchored in the Stage 2 and early Stage 3 history, and are distinct from specification limits, which come from the registered acceptance criteria. The chart is read for:

- Points outside the control limits, a possible special cause
- A run of eight or more consecutive points on one side of the center line, suggesting a shift
- Six consecutive increasing or decreasing points, a trend
- The wider Western Electric / Nelson pattern rules

A chart showing a process drifting toward an upper specification limit while every batch still passes is more useful than a pass/fail table. It says the process center has moved and that action should be taken before a failure occurs. That early warning is the whole reason Stage 3 exists.

### Process Capability

Process capability indices quantify how well a stable process fits inside its specification limits. Cpk relates the distance from the process mean to the nearer specification limit. A Cpk of 1.33 corresponds to the process mean sitting at least four standard deviations from the closest specification limit. A minimum Cpk around 1.33 is a common expectation for commercial processes, with a higher target such as 1.67 sometimes set for the most safety-relevant CQAs. Capability is only meaningful once the process is demonstrably stable; computing Cpk on an out-of-control process produces a number with no valid interpretation. A capability index that erodes over time, even while still nominally acceptable, is a drift signal worth acting on. The mechanics of these calculations are worked through in [statistics in quality: Cpk and control charts](/articles/statistics-in-quality-cpk-control-charts).

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

---

## How the Stages Connect to Change and Lifecycle Management

A validated process is not frozen. Raw material sources change, equipment is replaced, sites are added, yields are optimized. Each of these is handled through change control, and each must be assessed against the qualified state from Stage 2 and the understanding from Stage 1. The question is always: does this change affect a CQA, a CPP, or the control strategy, and if so, what level of revalidation does it require?

ICH Q12 (Technical and Regulatory Considerations for Pharmaceutical Product Lifecycle Management, finalized in 2019) gives tools for managing post-approval changes with less regulatory friction, including Established Conditions and the Post-Approval Change Management Protocol. A mature Stage 1 knowledge base and a defined design space are what make those tools usable, because they let a company show in advance which parameters can move without affecting quality. The connection is covered in [ICH Q12 lifecycle management](/articles/ich-q12-lifecycle-management). Revalidation triggers, the criteria for when Stage 2 must be repeated in whole or in part, should be written down before they are needed, not improvised when a change lands.

---

## Common Process Validation Failures

**Stage 1 knowledge gaps.** Qualification runs attempted on a poorly characterized process, leading to Stage 2 failures nobody could anticipate because the cause-and-effect relationships were never established. The fix is upstream, in development, not in re-running batches.

**Protocol not approved before execution.** A frequent inspection finding. The protocol defines the acceptance criteria, and criteria written after the data are seen are not acceptance criteria.

**Batches not truly consecutive.** Cherry-picking passing batches from a larger set, or running undisclosed batches between the chosen ones. This crosses from a validation weakness into a data integrity problem.

**No Stage 3 program.** PPQ completed and then no statistical process monitoring at all. The process is "validated" on paper but has no ongoing assurance of control. Lack of continued process monitoring has been cited as a GMP deficiency.

**Annual review disconnected from monitoring.** A review that aggregates data without statistics, trend identification, or comparison to control limits is not fulfilling its Stage 3 purpose.

**Revalidation triggers undefined.** No documented decision point for when requalification is needed, so significant changes accumulate and validation data quietly goes stale.

**OOS results handled poorly during validation.** An out-of-specification result during PPQ that is invalidated without a proper investigation undermines the whole conclusion. Handle these through a sound [OOS investigation process](/articles/oos-investigation-process), the same way you would in routine production.

---

## Regulatory Submission Requirements

For a BLA, NDA, or MAA, process validation information sits in CTD Module 3, principally section 3.2.P.3.3 (Description of Manufacturing Process and Process Controls) and section 3.2.P.3.5 (Process Validation and/or Evaluation), with supporting development content in 3.2.P.2. A typical package includes:

- A summary of process development work (Stage 1)
- The PPQ protocol and report, or a justified commitment for post-approval PPQ
- A description of the Stage 3 continued process verification program
- Statistical analysis of the PPQ batch data

For expedited development pathways such as Breakthrough Therapy and Accelerated Approval, FDA's 2011 guidance acknowledges that full PPQ may not be complete at the time of initial licensure. A reliable process monitoring program plus a commitment to provide additional validation data after approval can be agreed with the agency, but the bar for justification is high and the post-approval commitments are tracked and enforced.

One expectation is worth stating plainly for readers moving from clinical to commercial work. The standard for commercial-scale process validation is higher than for clinical manufacturing. Product for early clinical trials is made under appropriate GMP, but the process characterization, statistical rigor, and continued verification expected for a commercial license are substantially more extensive. Treating a Phase 1 process record as if it were a commercial validation package is a predictable way to draw findings. For the surrounding inspection expectations, see [FDA inspection readiness](/articles/fda-inspection-readiness).
