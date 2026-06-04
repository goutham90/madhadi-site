---
title: "Process Validation Lifecycle: Stage 1, 2, and 3 Under ICH Q8/Q9/Q10"
description: "A complete guide to pharmaceutical process validation using the modern three-stage lifecycle approach, process design, process qualification, and continued process verification, with practical detail on studies, documentation, statistics, and regulatory expectations."
pubDate: 2026-03-10
tags: ["process validation", "ICH Q8", "ICH Q10", "Stage 1", "Stage 2", "Stage 3", "manufacturing"]
tier: "Advanced"
pillar: "quality-assurance"
---

The modern regulatory framework for process validation moved away from the traditional three-batch approach in 2011, when FDA issued its Guidance for Industry: Process Validation, General Principles and Practices. That guidance established a three-stage lifecycle model aligned with the quality by design principles in ICH Q8, ICH Q9, and ICH Q10. EMA adopted equivalent expectations through ICH Q8-Q10 implementation.

The shift matters because the old model (run three batches, pass the tests, declare validation complete) treated validation as an event. The lifecycle model treats it as an ongoing program: you design the process to understand it, you qualify it to demonstrate control, and you monitor it continuously to confirm the state of control is maintained.

---

## The Conceptual Framework

**Process design (Stage 1)** develops the knowledge that defines what the process is and what makes it work. This is where critical quality attributes (CQAs), critical process parameters (CPPs), and the design space are established.

**Process qualification (Stage 2)** confirms that the designed process, implemented in the commercial facility with commercial equipment, produces product meeting specifications consistently. This is the traditional validation activity, controlled manufacturing runs with enhanced monitoring.

**Continued process verification (Stage 3)** provides ongoing assurance that the process remains in a state of control during routine commercial manufacturing. Statistical process monitoring detects drift before it causes failures.

All three stages together constitute a validated process. A process with a strong Stage 1 and 2 but no Stage 3 program is technically validated but not under ongoing control. A Stage 3 program without the underlying Stage 1 knowledge base is monitoring without understanding.

---

## Stage 1: Process Design

Stage 1 work happens primarily during pharmaceutical development (before commercial manufacturing). Its purpose is to establish a thorough understanding of the process: what it does, what makes it work, and what its failure modes are.

**Critical Quality Attributes (CQAs)**

CQAs are the physical, chemical, biological, or microbiological properties of the drug product that must be within appropriate limits to ensure the desired product quality, safety, and efficacy. Examples for a sterile biologic: potency (biological activity), purity (impurity profile), identity (molecular structure confirmation), safety (absence of adventitious agents), and product-related substances (aggregation, deamidation).

CQAs are derived from: knowledge of the mechanism of action (what molecular properties drive efficacy?), toxicological assessment (what impurities are safety-relevant?), clinical data (what attributes correlate with patient outcomes?), and regulatory precedent.

**Critical Process Parameters (CPPs)**

CPPs are process parameters whose variability has a real impact on a CQA. Not all process parameters are critical. Temperature during a non-critical mixing step is a process parameter but may not be critical if it has no meaningful effect on product quality within a wide range.

CPP identification comes from risk assessment (ICH Q9): which parameters could plausibly affect CQAs, and at what ranges? Followed by experimental confirmation: design of experiments (DoE) studies that systematically vary parameters across their operating ranges and measure the CQA response.

**Design Space**

The design space is the multidimensional combination of input variables and process parameters that has been demonstrated to provide assurance of quality. Operating within the design space is not a change requiring regulatory notification. Operating outside the design space requires a regulatory submission.

Design space characterization is done through DoE studies during process development. A well-characterized design space gives the manufacturing process operating flexibility while maintaining quality assurance.

**Stage 1 Documentation**

Development reports, process characterization study reports, risk assessments, DoE study reports, and the Process Design Report (PDR) or Development Summary that captures the process understanding. This documentation is the scientific basis for the Process Validation Protocol.

---

## Stage 2: Process Qualification

Stage 2 occurs during manufacturing scale-up and commercial introduction. It shows that the commercial-scale process consistently produces product meeting CQAs when operated within the defined CPP ranges.

**Process Qualification Protocol**

The PQ protocol must be approved by QA before execution. It specifies:
- The manufacturing runs to be included (typically 3 consecutive runs, but the number must be scientifically justified)
- The CPPs to be monitored and their acceptance limits
- The enhanced testing and sampling plan (more intensive than routine release testing)
- The CQAs to be evaluated
- Statistical acceptance criteria
- Criteria for batch inclusion/exclusion

**Number of runs:** Three consecutive batches has been industry practice for decades. FDA's 2011 guidance doesn't specify three; it requires a number sufficient to demonstrate consistent performance. For well-characterized processes with extensive development data, three may be appropriate. For novel or complex processes, more may be needed. The protocol must justify the number chosen.

**Consecutive runs requirement:** The runs must be consecutive because they show that the process is in a state of control over time, not just that it can occasionally produce good product. A pattern of alternating good and bad batches, with three selected good ones submitted as validation, is not a validated process.

**Enhanced monitoring:** Stage 2 runs are conducted with more intensive monitoring than routine manufacturing. Additional in-process samples at key process stages, more frequent process parameter recording, additional release tests beyond the routine panel, and retention of additional samples for follow-up testing.

**Concurrent release during Stage 2**

FDA's 2011 guidance explicitly allows concurrent release during process qualification: product manufactured during PQ runs can be released to the market while the PQ protocol is being completed, provided QA makes a risk-based decision that the data available at the time of release is sufficient to support it. The completed PQ report, however, must be finalized and reviewed.

This is different from traditional concurrent validation. Under the lifecycle approach, concurrent release during PQ is a defined, risk-managed practice, not a regulatory exception.

**Process Qualification Report**

The PQ report summarizes: the runs conducted, the data generated, comparison to acceptance criteria, any deviations and their investigation, statistical analysis of results, and the conclusion that the process is qualified. QA approval is required. The report becomes a regulatory commitment document: subsequent changes to the process must be assessed against the qualified state.

---

## Stage 2: Equipment and Facility Qualification

Stage 2 also includes the qualification of the manufacturing equipment and facility that will be used for commercial production. This is the IQ/OQ/PQ that happens at the equipment level.

**Installation Qualification (IQ):** Verifies that equipment was installed correctly, the physical installation matches the design specifications, utilities are connected and meet specification, and documentation (manuals, certificates) is in place.

**Operational Qualification (OQ):** Verifies that equipment operates as intended across its operating range. For a bioreactor, OQ tests temperature control accuracy, agitation speed accuracy, pH control response, dissolved oxygen control, and data acquisition across the full operating range.

**Performance Qualification (PQ):** Verifies that the equipment consistently performs within specifications under conditions representative of production use. Often includes at least three consecutive runs under production conditions.

**Process Performance Qualification (PPQ):** The combined Stage 2 activity where qualified equipment is operated with the actual product and process to show the entire system (facility, equipment, utilities, process) produces consistent, specification-meeting output.

---

## Stage 3: Continued Process Verification

Stage 3 is the ongoing program that maintains the state of control established in Stage 2. It continues for the commercial life of the product.

**Statistical Process Monitoring**

Stage 3 uses statistical tools to monitor process performance over time, distinguishing between:

*Common cause variation:* Random variation inherent in the process. The process is in statistical control even when variation is present. Common cause variation is managed by process design.

*Special cause variation:* Variation due to identifiable, correctable causes, equipment malfunction, operator error, raw material variability, environmental change. Special cause variation triggers investigation.

**Control Charts**

Shewhart control charts (X̄-R charts, X̄-S charts, individuals charts) are the foundational tool. Plot each batch result as a point. Calculate control limits from the Stage 2 validation data. Monitor for:
- Points outside control limits (possible special cause)
- Runs of 8 or more consecutive points on one side of the mean (process shift)
- Trending (6 consecutive increasing or decreasing points)
- Other pattern rules (Western Electric rules)

A control chart that shows a process trending toward the upper specification limit, while every batch still passes, is more valuable information than a simple pass/fail report. It indicates the process center has shifted and corrective action should be taken before it causes failures.

**Process Capability**

Cpk (process capability index) quantifies how well the process fits within its specification limits. Cpk = 1.33 means the process mean is at least 4 standard deviations from either specification limit. A minimum Cpk of 1.33 is a common regulatory expectation for commercial processes, with 1.67 sometimes required for critical CQAs.

A process with declining Cpk over time, while still technically capable, is drifting. Stage 3 monitoring catches this early.

**Annual Product Reviews (APRs)**

21 CFR 211.180(e) requires an annual review of each drug product to assess quality standards. The APR (also called Product Quality Review or PQR in EU) compiles:
- All batch manufacturing data for the year
- OOS, OOT, and deviation summaries
- CAPA status for product-related issues
- Stability data
- Complaint and return data
- Changes implemented during the year
- Statistical analysis of key quality attributes and CPPs
- Assessment of continued process control

The APR is a Stage 3 output. It shows that the process remains validated through continuous oversight.

---

## Common Process Validation Failures

**Stage 1 knowledge gaps:** Validation runs where the process wasn't well-characterized, resulting in Stage 2 failures that couldn't be anticipated because the cause-and-effect relationships weren't established.

**PQ protocol not approved before execution:** A common inspection finding. The protocol must be pre-approved because it defines the acceptance criteria. Criteria defined after seeing the data are not acceptance criteria.

**Consecutive batches not truly consecutive:** Selecting three passing batches from a larger set, or running additional batches between selected ones and not disclosing them.

**No Stage 3 program:** Completing PQ and then conducting no statistical process monitoring. The process is technically "validated" by Stage 2, but with no ongoing assurance of continued control. FDA has cited lack of continued process monitoring as a GMP deficiency.

**APR not connected to Stage 3 monitoring:** An APR that compiles data without statistical analysis, trend identification, or comparison to control limits isn't fulfilling the Stage 3 monitoring purpose.

**Revalidation criteria not defined:** No documented trigger for when Stage 2 must be repeated. Significant process changes are implemented, validated process data becomes stale, and there's no defined decision point for reassessment.

---

## Regulatory Submission Requirements

For a BLA, NDA, or MAA, the process validation data is in Module 3 (CTD): 3.2.P.3.3 (Description of Manufacturing Process and Process Controls) and 3.2.P.3.5 (Process Validation and/or Evaluation). The submission includes:

- Summary of process development work (Stage 1)
- PPQ protocol and report, or commitments for post-approval PPQ
- Stage 3 monitoring program description
- Statistical analysis of PPQ batch data

For expedited development pathways (Breakthrough Therapy, Accelerated Approval), FDA's 2011 guidance acknowledges that full PPQ may not be complete before initial licensure. A solid reliable process monitoring program and commitment to provide additional validation data post-approval can be negotiated.

The standard for commercial-scale process validation is higher than for clinical manufacturing. Products made for early clinical trials are manufactured under appropriate GMP, but the process characterization and statistical validation expected for a commercial BLA is significantly more extensive.
