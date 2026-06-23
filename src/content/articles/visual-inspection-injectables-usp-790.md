---
title: "Visual Inspection and Particulate Control for Injectables: USP <790> and <788>"
description: "How 100% visual inspection, AQL sampling, inspector qualification, and sub-visible particulate testing work for sterile injectables, with the regulatory basis and concrete procedures to run the program."
pubDate: 2026-06-20
tags: ["visual-inspection", "particulate-matter", "usp-790", "usp-788", "sterile-injectables", "aql", "defect-library", "quality-control"]
pillar: "sterility-microbiology"
tier: "Intermediate"
---

Every parenteral unit a patient receives goes directly into the bloodstream, muscle, or spinal space, bypassing the gut and the liver that would otherwise filter what they swallow. A glass fragment, a fiber, a degraded protein aggregate, or a leaking seal that would be harmless in a tablet can cause an embolism, a granuloma, an immune reaction, or sepsis when injected. That is why visual inspection and particulate control are not optional polish at the end of fill-finish. They are a defined control step with their own compendial chapters, their own qualification requirements, and their own inspection-finding history.

This article covers the two compendial pillars practitioners deal with daily: USP General Chapter <790> Visible Particulates in Injections (the 100% inspection requirement and acceptance logic) and USP General Chapter <788> Particulate Matter in Injections (the sub-visible test). It also pulls in the inspection chapter USP <1790>, the AQL re-inspection standard, inspector qualification, defect libraries, and the automated and semi-automated systems that do the work at scale. The goal is that after reading this you can build, run, defend, and be interviewed on a visual inspection and particulate program.

---

## The regulatory frame: what requires this, and where it lives

### The cGMP root requirement

The legal floor in the United States is 21 CFR 211.84 (testing of components, containers, and closures) and more directly 21 CFR 211.94 (drug product containers and closures) plus the general cGMP expectation under 21 CFR 211.100 and 211.110 that in-process controls are established to assure product quality. None of these CFR sections literally say "inspect 100 percent visually," but FDA's expectation that every parenteral unit is inspected is long-standing and is now codified compendially.

FDA's 2004 guidance "Sterile Drug Products Produced by Aseptic Processing, Current Good Manufacturing Practice" states the expectation that inspection of filled units occurs to detect and remove defective units, and EU GMP Annex 1 (2022 revision, effective 25 August 2023, with the lyophilization provisions effective 25 August 2024) is explicit. Annex 1 requires that all filled containers of parenteral products be inspected individually for extraneous contamination or other defects, that the inspection process be qualified and validated, and that results be recorded. Annex 1 also requires periodic re-qualification of inspectors and challenge of automated inspection systems with defect sets.

### The compendial pillars

| Chapter | Title | What it governs | Enforceable? |
|---|---|---|---|
| USP <790> | Visible Particulates in Injections | 100% inspection of every unit during manufacture, plus an AQL-based acceptance sampling on the inspected lot | Yes (numbered below 1000) |
| USP <788> | Particulate Matter in Injections | Sub-visible particulate limits (>=10 micrometers and >=25 micrometers) by light obscuration or microscopy | Yes |
| USP <787> | Subvisible Particulate Matter in Therapeutic Protein Injections | Same sub-visible concept tuned for biologics, smaller sample volumes, attention to inherent protein particles | Yes |
| USP <1790> | Visual Inspection of Injections | The "how to do it" guidance: inspection conditions, qualification, probability of detection, defect categorization | Informational (above 1000, but treated as the standard of practice) |
| USP <1788> | Methods for the Determination of Particulate Matter in Injections and Ophthalmic Solutions | Method detail and sample handling for sub-visible methods | Informational |

A key point that interviewers probe: chapters numbered below 1000 (<790>, <788>, <787>) are enforceable requirements. Chapters numbered 1000 and above (<1790>, <1788>) are informational, but inspectors and assessors fully expect you to follow <1790> because it represents accepted practice. Saying "1790 is just guidance so we ignored it" is a fast way to a finding.

The European Pharmacopoeia mirrors this with Ph. Eur. 2.9.20 (particulate contamination, visible particles) and 2.9.19 (sub-visible particles), and the Japanese Pharmacopoeia with its own equivalents. The three pharmacopeias have largely harmonized the sub-visible limits.

---

## USP <790>: the 100% inspection requirement and acceptance logic

USP <790> sets two distinct expectations that people frequently conflate. Keep them separate in your head.

**1. 100% inspection.** Each unit of injectable product must be inspected during the manufacturing process. This is a process step, not a sampling test. Every container is examined and any unit showing visible particulates or other critical defects is rejected and removed. The chapter describes the lot as "essentially free" from visible particulates, acknowledging that no inspection process is perfect.

**2. Acceptance sampling on the inspected lot.** After 100% inspection, you take a statistically defined sample from the accepted units and re-inspect it to confirm the lot is acceptably free of visible particulates. This second step verifies the effectiveness of the 100% inspection. The standard tool here is ANSI/ASQ Z1.4 (formerly MIL-STD-105) acceptance sampling by attributes, applied at a defined Acceptance Quality Limit (AQL).

### What "essentially free" actually means

USP <790> does not promise zero particles in every unit. The detection of a particle is probabilistic, governed by particle size, contrast, container, fill volume, inspection conditions, and the inspector or machine. A 200 micrometer dark fiber in a clear solution in a clear vial is detected far more reliably than a 100 micrometer translucent particle in an amber vial of a hazy biologic. <790> and <1790> recognize this and frame the program around maximizing probability of detection and demonstrating control through the AQL step, not around an impossible absolute.

### The AQL re-inspection: a worked example

AQL is the maximum percent defective that, for sampling purposes, is treated as acceptable as a process average. Lower AQL is tighter. For visible particulates and critical defects the AQL is set low (commonly 0.65 percent or tighter for critical attributes; many sites use 0.10 percent for the most critical), with higher AQL values for minor cosmetic defects.

Worked example using ANSI/ASQ Z1.4, General Inspection Level II, single sampling plan, normal inspection:

- Lot size after 100% inspection: 40,000 vials.
- Z1.4 sample size code letter for 35,001-150,000 units at Level II is **N**.
- Code letter N gives a sample size of **500**.
- At AQL 0.65%, the single sampling plan accept/reject numbers for sample size 500 are **Ac = 7, Re = 8**. (Accept the lot if 7 or fewer defectives are found in the 500, reject if 8 or more.)
- For a tighter critical AQL of 0.10% at sample size 500, the plan is **Ac = 1, Re = 2**.

A realistic defect-tiered table for one product might read:

| Defect class | Examples | AQL | Sample (n=500) Ac / Re |
|---|---|---|---|
| Critical | Visible particulate, cracked container, missing or compromised stopper, foreign matter, leaker | 0.10% | 1 / 2 |
| Major | Heavy fill outside range, cosmetic defect impairing inspection, label illegible | 0.65% | 7 / 8 |
| Minor | Minor scratch, minor label skew, minor cosmetic mark | 2.5% | 21 / 22 |

If the re-inspection sample fails the critical AQL, the lot does not get released on the basis of "we already inspected it once." It triggers an investigation and typically a 100% re-inspection, plus root cause work into why the original inspection let those units through.

### Sequence of decisions for a lot

1. Fill and finish the lot.
2. Inspect 100% of units (manual, semi-automated, or automated) against the qualified defect library.
3. Segregate and reconcile: accepted units, rejected units, and units pulled for other reasons. Reconciliation must close.
4. Pull the AQL sample from accepted units per the sampling plan.
5. Re-inspect the AQL sample under qualified conditions by a qualified inspector.
6. Compare defect counts to the accept/reject numbers per defect class.
7. If pass: document, the lot proceeds to the rest of disposition (see [batch disposition decisions](/articles/batch-disposition-decisions)).
8. If fail: open a deviation, investigate, decide on 100% re-inspect or reject, and feed findings back into inspector qualification or equipment.

---

## USP <1790>: inspection conditions and probability of detection

USP <1790> is where the operational detail lives. It defines the conditions under which manual inspection happens and the concept of probability of detection (POD) that underpins qualification.

### Standard manual inspection conditions

- **Illuminance at the inspection point:** USP <1790> sets out a recommended illuminance band for routine clear-solution inspection and a higher band for products that are harder to inspect, such as colored solutions, suspensions, or amber containers. Treat the chapter as the source for the actual figures, set your station to the appropriate band for the product, and verify and document the actual illuminance with a calibrated lux meter at the inspection station.
- **Backgrounds:** both a matte black and a matte white background are used. Black background reveals light or reflective particles; white background reveals dark particles. Inspectors view each unit against both.
- **Inspection time:** a defined viewing time per unit, commonly on the order of 5 to 10 seconds total split between the two backgrounds. Too fast and detection drops; the time is part of the qualified method.
- **Manipulation:** units are gently swirled or inverted to suspend particles, taking care not to introduce air bubbles that mimic particles or to create foam in protein products.
- **Position and distance:** a defined viewing distance, typically around 25 to 35 cm from the inspector's eyes, against the illuminated backgrounds.

### Probability of detection (POD)

POD is the heart of qualification. A particle of a given size and type has a probability, not a certainty, of being seen. The standard way to characterize an inspection process is to build POD curves: for a set of seeded units containing known particle sizes, measure the fraction detected at each size across multiple inspectors and repeats.

USP <1790> frames POD as a banded scale, and the naming is a known source of confusion, so be precise about what each band means:

- **Reject zone (high POD):** particles large or contrasting enough that inspection reliably finds them. "Reject" here means the unit is reliably detected and removed, not that it is bad in some other sense. This is the high end of the POD scale.
- **Gray zone (intermediate POD):** detection is partial and uncertain. These units drive variability between inspectors and between runs, and they are where a qualification challenge actually discriminates.
- **Accept zone (low POD):** the particle is below the level at which visual inspection reliably finds it. This does not mean such a unit is "good" or has been judged acceptable; it means the particle is undetectable by inspection, so control for that size range depends on prevention upstream, not on catching it at the inspection step.

Refer to USP <1790> for the specific POD values that bound each band. The practical use: when you qualify inspectors or machines, you build a defect kit that spans the gray zone, because anyone can find a 1,000 micrometer black wire and that proves nothing. The discrimination test is in the gray zone, around the size threshold where human vision becomes unreliable, typically in the low hundreds of micrometers depending on the matrix.

---

## Inspector qualification: the human inspection method

Manual inspection is an analyst-dependent test method, and it must be qualified like one. This is one of the most cited weak spots in real inspections, so treat it seriously.

### What the qualification has to cover

- **Visual acuity and color perception:** inspectors need a documented near-vision acuity test (corrected is fine) and a color vision screen (for example an Ishihara test), repeated on a defined frequency, commonly annually. This is occupational-health adjacent but it is a quality record.
- **Training on the defect library:** the inspector is trained against the site defect library so they recognize and classify each defect type consistently.
- **Qualification test set:** the inspector inspects a known, controlled set of units (the qualification or "test set" or "challenge set") containing a deliberate mix of good units, particle-containing units across the gray zone, and cosmetic and container defects, in a randomized, blinded order.
- **Acceptance criteria for the inspector:** typically expressed as minimum detection rates for critical defects and a maximum false-reject (good units called bad) rate. A common construction: the inspector must correctly reject the "always-reject" critical units at or above a high threshold (for example 100 percent of the reject-zone units and a defined fraction of the gray-zone units) and must not over-reject good units beyond a set limit.

### A sample inspector qualification scorecard

Consider a 100-unit blinded test set: 30 reject-zone particle units, 20 gray-zone particle units, 20 container/cosmetic defect units, 30 good units.

| Category | Units | Inspector found | Criterion | Result |
|---|---|---|---|---|
| Reject-zone particulate | 30 | 30 | >= 100% (all) | Pass |
| Gray-zone particulate | 20 | 14 | informational, trend | 70%, recorded |
| Container/cosmetic critical | 20 | 19 | >= 90% | Pass |
| Good units (false reject) | 30 | 2 over-rejected | <= 3 (10%) | Pass |

The inspector passes. Note that gray-zone results are usually trended rather than pass/fail because by definition detection there is partial; what you watch is whether an inspector is far outside the group POD curve.

### Re-qualification and the efficiency/effectiveness split

- **Re-qualification frequency:** commonly annual, and triggered out of cycle by failed vision tests, a string of AQL failures traced to inspection, or a long absence from inspection duty.
- **Effectiveness vs efficiency:** effectiveness is "did the inspector find the defects" (the detection rate). Efficiency is "did the inspector not throw away good product" (false reject rate). Both matter. A program that only measures detection will train inspectors to reject everything, which is its own quality and yield problem and corrupts the AQL data.
- **Fatigue controls:** defined maximum continuous inspection time with breaks, because POD degrades with fatigue. This belongs in the SOP. See [how to write an SOP](/articles/how-to-write-an-sop).

### Roles and responsibilities

| Role | Responsibility |
|---|---|
| Inspection operator | Performs 100% inspection, classifies and segregates defects, records counts, maintains qualified status |
| Inspection supervisor / line lead | Manages fatigue rotation, reconciliation, escalates abnormal defect rates |
| QC / QA inspection owner | Owns the SOP, defect library, qualification protocol, AQL plan, trending |
| Validation / engineering | Qualifies semi/automated equipment, manages recipe and challenge sets |
| QA disposition | Reviews inspection and AQL records as part of lot release |
| Microbiology / SME | Advises on particle identification when particulates need characterization |

---

## The defect library: the backbone of consistency

Everything in visual inspection rests on a defect library (also called a defect catalog or defect classification system). Without it, two inspectors will classify the same unit differently, AQL trending is meaningless, and you cannot train or qualify anyone.

### What goes in the defect library

For each defect type:

- A unique defect code and name.
- A clear definition and the criteria that distinguish it from adjacent defects.
- Classification: critical, major, or minor (and the disposition each triggers).
- Reference photographs or physical reference standards showing the defect at the threshold of acceptability.
- The likely root cause area (fill, stopper, glass forming, capping, handling), useful for investigations.
- The associated AQL.

### A sample defect library extract

| Code | Defect | Class | Definition / threshold | Typical source |
|---|---|---|---|---|
| P-01 | Foreign visible particulate (mobile) | Critical | Any non-product mobile particle visible under qualified conditions | Environment, components, fill |
| P-02 | Fiber | Critical | Thread or fiber, any visible length | Garment, wipe, packaging |
| G-01 | Glass crack / check | Critical | Any crack through the glass wall or at heel/shoulder | Glass forming, handling |
| C-01 | Stopper not fully seated | Critical | Stopper above seating line; CCI risk | Stoppering station |
| C-02 | Missing flip-off cap | Major | Aluminum seal present, plastic cap absent | Capping |
| F-01 | Low fill | Major | Fill volume below visual fill-level mark | Filling pump |
| L-01 | Label skew | Minor | Label rotated beyond defined tolerance, no inspection impairment | Labeling |
| M-01 | Heavy scuff / scratch | Minor | Surface mark not impairing content inspection | Handling |

### Maintaining the library

The library is a controlled document under [document control](/articles/document-control-fundamentals). Add new defect types when a new failure mode appears (a new container format, a new stopper). Physical reference standards (retained defect units, or manufactured defect sets) degrade or get consumed and need periodic replacement and a chain-of-custody log. Photographs should be standardized for lighting and scale so they are usable as training references.

---

## Automated and semi-automated inspection

Three inspection modes exist, and you will be expected to know the trade-offs.

| Mode | Description | Strengths | Weaknesses |
|---|---|---|---|
| Manual | Human inspector, lightboard with black/white backgrounds | Flexible, good for low volume, clinical, and novel products | Slow, fatigue, inter-inspector variability, subjective |
| Semi-automated | Machine presents and spins units to a human inspector, may reject automatically on operator signal | Standardizes presentation and timing, reduces handling | Still human detection; throughput limited |
| Automated visual inspection (AVI) | Camera/sensor-based machine inspects and rejects without a human deciding each unit | High throughput, consistent, objective, data-rich | High capital, recipe development effort, validation rigor, harder for difficult matrices |

### Qualifying automated and semi-automated systems

An AVI machine is a computerized system and a measurement system at once, so it carries both equipment qualification and computerized-system validation obligations.

- **URS and design:** define what defects must be detected, throughput, reject mechanisms, data capture, and audit trail. See [user requirements and traceability](/articles/user-requirements-and-traceability) and [equipment qualification lifecycle](/articles/equipment-qualification-lifecycle).
- **IQ/OQ/PQ:** install, then challenge operationally, then performance-qualify on real product and real defect sets.
- **Knapp test (the standard AVI comparison):** the recognized method, sometimes called the Knapp-Kushner method, for demonstrating that an automated or semi-automated machine performs at least as well as qualified manual inspection. You build a test set of units, each characterized by manual inspection over many repeats to assign each unit a detection probability, then group them. The machine (or semi-auto setup) is run against the same set multiple times. The primary acceptance criterion is that the machine's reject zone efficiency (the sum of detection across the reject-zone units) equals or exceeds that of the manual inspection benchmark. Many implementations also look at performance across the gray and accept zones, not the reject zone alone, so the machine is not just matching humans on easy units while doing worse elsewhere. In plainer terms: the machine must be at least as good as a qualified human at catching the units humans reliably catch, and should not be worse on the harder ones.
- **Recipe and parameter control:** the inspection recipe (lighting, camera, thresholds, rotation) is configuration that must be under change control. See [change control for validated systems](/articles/change-control-validated-systems).
- **False reject monitoring:** track machine reject rate. A creeping false-reject rate signals drift, a new component lot, or a degraded sensor, and it destroys yield. Rejected units are routinely re-inspected manually to recover good product and to verify the machine is not over-rejecting.
- **Part 11 / Annex 11:** AVI machines generate electronic records and need audit trails, access control, and data integrity controls. See [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11) and [audit trail design and review](/articles/audit-trail-design-and-review).

### Periodic re-challenge

Even a validated AVI machine must be challenged on a defined frequency (commonly each shift or each batch start and periodically with a full defect set) using a known challenge kit to prove it still rejects what it is supposed to reject. Annex 1 makes periodic challenge of automated systems explicit.

---

## USP <788>: sub-visible particulate matter

Visible inspection catches what the eye can see, roughly 100 micrometers and above in practice. USP <788> covers the particles below that, which you cannot inspect out unit by unit but which matter for safety. Sub-visible particulates can carry immunogenicity risk for biologics and embolic/inflammatory risk generally.

### The two methods and the limits

USP <788> has two methods, and Method 1 is the default:

- **Method 1: Light Obscuration Particle Count Test.** An automated particle counter passes the solution through a sensor; particles block light proportional to size. This is the first-choice method. If a product cannot be tested by light obscuration (too viscous, colored, forms bubbles, opaque, or the result is near the limit and ambiguous), you go to Method 2.
- **Method 2: Microscopic Particle Count Test.** The solution is filtered onto a membrane and particles are counted and sized under a microscope. Slower, more operator-dependent, but works where light obscuration fails.

The acceptance limits in USP <788> are organized along three axes, and understanding the structure matters more than memorizing the numbers (the exact figures live in the chapter and you should read them there):

- **Container fill volume.** Small volume parenterals (SVP, fill volume at or below 100 mL) carry their limits expressed per container. Large volume parenterals (LVP, fill volume above 100 mL) carry their limits expressed per mL.
- **Particle size.** Each container category has a separate limit at the >= 10 micrometer threshold and a tighter limit at the >= 25 micrometer threshold.
- **Test method.** Method 1 (light obscuration) and Method 2 (microscopic) each have their own set of limits; the microscopic limits are not the same numbers as the light-obscuration limits.

So for any given product you read the chapter at the intersection of its fill-volume category, the relevant size threshold, and the method you ran. Note the per-container basis for small volume versus the per-mL basis for large volume, and that the microscopic-method limits differ from light-obscuration. Mixing those up is a classic interview trip-wire.

### How to run light obscuration (the core steps)

1. **Environment:** prepare and test in a clean environment (a laminar flow hood or better) because the test is exquisitely sensitive to ambient and handling contamination.
2. **System suitability / blank:** run particle-free water and confirm the count is below the chapter's blank limit. If your blank is dirty, every result is suspect.
3. **Instrument qualification:** the counter is calibrated and sized with NIST-traceable particle size standards and verified for sample volume accuracy and sensor resolution.
4. **Degassing and bubble control:** dissolved air forms bubbles that the sensor counts as particles. Degas viscous or surfactant-containing samples; this is the single most common cause of false high counts.
5. **Pooling:** for small fill volumes, the chapter allows pooling units to reach the required test volume; follow the pooling rules in the chapter.
6. **Run replicates:** take the specified number of aliquots, discard the first as the chapter directs, and average the remaining.
7. **Calculate per container or per mL** and compare to the limit table.
8. **Out-of-spec:** an OOS goes into the [OOS investigation process](/articles/oos-investigation-process); a frequent assignable cause here is bubbles or a contaminated blank, but you must prove it, not assume it.

### USP <787> for therapeutic proteins

Biologics complicate this. Protein products generate **inherent** particles (protein aggregates) that are part of the product, alongside **intrinsic** particles (from the process/container, like silicone oil droplets or stainless steel) and **extrinsic** particles (truly foreign, like fibers). Light obscuration cannot distinguish a translucent protein aggregate from a silicone droplet by counting alone.

USP <787> adapts <788> for proteins: smaller sample volumes (protein drug product is precious and low-volume), attention to inherent particles, and it points toward orthogonal characterization techniques (such as flow imaging microscopy and other particle-characterization methods) to tell particle types apart. The three-bucket vocabulary, inherent / intrinsic / extrinsic, is something biologics quality people are expected to use precisely. See [container closure integrity testing](/articles/container-closure-integrity-testing) and [process validation for biologics](/articles/process-validation-for-biologics) for adjacent context.

---

## Particle identification and investigation

When a particle is found, especially a visible one in finished product or a customer complaint, you often need to know what it is, because the identity tells you the source and the risk.

### Identification toolkit

- **Stereomicroscopy:** first look, morphology and color.
- **FTIR (Fourier-transform infrared spectroscopy):** identifies organic materials and polymers (fibers, rubber, plastics, protein).
- **SEM-EDX (scanning electron microscopy with energy-dispersive X-ray):** elemental composition of inorganic particles (glass, stainless steel, metal oxides).
- **Raman spectroscopy:** complementary molecular identification, good for some materials FTIR struggles with.

### Source attribution

| Particle identity | Likely source | Corrective direction |
|---|---|---|
| Borosilicate glass (Si, B, Al by EDX) | Glass delamination, breakage, vial-to-vial contact | Glass quality, handling, container assessment |
| Stainless steel (Fe, Cr, Ni) | Equipment wear, needles, pumps | Equipment maintenance, filtration |
| Cellulose fiber (FTIR) | Garments, wipes, cardboard | Gowning, material flow, environment |
| Rubber/elastomer (FTIR) | Stopper coring or shedding | Stopper quality, needle/coring at fill |
| Silicone oil droplet | Lubricated stoppers/syringes | Expected for siliconized components; characterize and trend |
| Protein aggregate | The product itself | Formulation, agitation, freeze-thaw, interface stress |

Trending particle identities over time is part of the [environmental monitoring program](/articles/environmental-monitoring-program) and contamination control thinking under [Annex 1 contamination control strategy](/articles/annex-1-contamination-control-strategy). A rising count of a single material type points straight at a specific failing component or step.

---

## Common mistakes and real inspection-finding patterns

These are the patterns that recur in regulatory findings and audits. None are tied to any specific company; they are the generic failure modes.

- **No POD-based qualification.** Inspectors qualified only against easy, obvious defects, so the qualification proves nothing about gray-zone performance. The fix is a gray-zone-spanning challenge set with documented POD.
- **Defect library too vague or uncontrolled.** Definitions that two inspectors read differently, no reference images, or the library not under change control. This collapses AQL data integrity.
- **Lighting and conditions not verified.** No calibrated lux measurement at the actual inspection point, or conditions drifting from the qualified state. Document and re-verify illuminance.
- **Inspecting too fast.** Throughput pressure shrinks viewing time below the qualified time, and POD silently drops. Build inspection time into the method and monitor it.
- **Treating <790> 100% inspection as if the AQL step were optional**, or vice versa. They are two distinct controls.
- **AQL failure handled by re-release without investigation.** A failed AQL is a deviation and a signal that the 100% inspection let defects through. It demands [root cause analysis](/articles/root-cause-analysis-techniques), not a quiet re-inspect-and-pass.
- **Bubbles miscounted as particles** in light obscuration <788>, producing false OOS results and wasted investigations. Degas and control sample handling.
- **Dirty blanks** in sub-visible testing not investigated, so the lab cannot trust any number it produces.
- **AVI machine drift unmonitored.** False-reject rate climbing with no trend control, or no periodic challenge of the machine with a defect kit. Annex 1 expects periodic challenge.
- **Rejected units not reconciled.** Inability to account for every unit (accepted, rejected, sampled, destroyed). Reconciliation that does not close is a data integrity and yield-fraud red flag.
- **Inspector vision tests lapsed.** Acuity or color-vision screening overdue, undermining every inspection that person performed since.
- **No distinction between effectiveness and efficiency**, so inspectors are pushed to over-reject and the AQL data is corrupted by false rejects.
- **Protein particle confusion.** Treating inherent protein aggregates as foreign contamination (or the reverse) without orthogonal characterization, leading to wrong dispositions.

---

## Interview-ready: questions and strong answers

**Q: What is the difference between USP <790> and <788>?**
<790> governs **visible** particulates and the 100% visual inspection plus AQL re-inspection of every injectable unit. <788> governs **sub-visible** particulate matter, the >=10 and >=25 micrometer counts you cannot see, tested by light obscuration (Method 1) or microscopy (Method 2). One is an inspection process, the other is a quantitative laboratory test.

**Q: USP <790> requires 100% inspection. So why also do AQL sampling?**
The 100% inspection removes defective units. The AQL re-inspection on the accepted lot verifies that the 100% inspection was effective, because no inspection is perfect. The AQL step is a check on the process, not a second chance to catch units.

**Q: What are the <788> sub-visible limits for a small volume parenteral by light obscuration?**
For small volume parenterals the light-obscuration limits are expressed per container, with a higher allowance at the >=10 micrometer threshold and a tighter one at >=25 micrometers. For large volume parenterals the basis switches to per mL, again with separate >=10 and >=25 micrometer limits. The point an interviewer is testing is that you know the per-container versus per-mL split and the two size thresholds; read the exact figures from USP <788>.

**Q: How do you qualify a manual inspector?**
Vision and color screening, training on the defect library, then a blinded challenge set spanning good units, gray-zone particles, reject-zone particles, and container/cosmetic defects. Acceptance is based on detection of critical defects and a controlled false-reject rate, with gray-zone results trended against the group POD. Re-qualify on a set frequency and on triggers.

**Q: What is the gray zone?**
The particle-size band where probability of detection is partial rather than reliable. Below it, detection is unreliable and you rely on prevention. Above it, particles are reliably found and removed. Qualification challenge sets concentrate on the gray zone because that is where the method discriminates. USP <1790> defines the POD values that bound the band.

**Q: How do you prove an automated inspection machine is good enough to replace humans?**
The Knapp test, also known as the Knapp-Kushner method. You characterize a defect set by manual inspection over many repeats to assign each unit a detection probability, then run the machine against the same set. The machine must match or exceed the reject-zone detection efficiency of the qualified manual benchmark, and a good evaluation also confirms it is not worse than humans across the gray and accept zones.

**Q: Light obscuration gives a high particle count. What do you check first?**
Bubbles from dissolved air or surfactants (degas the sample), then the blank (a contaminated blank inflates everything), then sample handling and environment. Prove the assignable cause before concluding; do not just re-test into compliance.

**Q: A biologic shows particles. Foreign contamination?**
Not necessarily. Classify as inherent (protein aggregate, part of the product), intrinsic (process/container, like silicone or steel), or extrinsic (truly foreign). Use orthogonal characterization (flow imaging, FTIR, SEM-EDX) before disposition. USP <787> is the relevant chapter for therapeutic proteins.

**Q: Is USP <1790> mandatory?**
It is informational (numbered above 1000), but it represents accepted practice and inspectors expect compliance. <790>, <788>, and <787> are the enforceable chapters.

**Q: An AQL re-inspection fails. What happens?**
It is a deviation. Investigate root cause, including why the 100% inspection passed those units. The lot is not released on prior inspection; depending on the outcome you do a 100% re-inspection or reject, and you feed findings back into inspector or machine qualification.

---

## Practical tips

- Keep a physical, controlled defect-standard kit with chain-of-custody and replace consumed or degraded units before they expire. A defect library with no current physical standards is a finding waiting to happen.
- Measure illuminance at the real inspection point with a calibrated meter, not at the lamp, and record it. Difficult products need the higher illuminance range.
- Trend false-reject rate alongside detection rate. Both tell you something; only watching detection breeds over-rejection.
- For light obscuration, treat degassing and a clean blank as the first two things to verify on any abnormal count, before you spend a week investigating.
- Use the inherent/intrinsic/extrinsic vocabulary precisely for biologics. It signals you understand that not every particle in a protein product is a contaminant.
- Build inspection time and fatigue rotation into the SOP and monitor them, because POD silently degrades when throughput pressure rises.
- When you find a visible particle, identify it. The material tells you the source faster than any other investigation step.

### Related reading

- [Aseptic processing and media fills](/articles/aseptic-processing-and-media-fills)
- [Container closure integrity testing](/articles/container-closure-integrity-testing)
- [Sterility testing USP <71>](/articles/sterility-testing-usp-71)
- [Bioburden and endotoxin testing](/articles/bioburden-and-endotoxin-testing)
- [Annex 1 contamination control strategy](/articles/annex-1-contamination-control-strategy)
- [Environmental monitoring program](/articles/environmental-monitoring-program)
- [Statistics in quality: Cpk and control charts](/articles/statistics-in-quality-cpk-control-charts)
- [OOS investigation process](/articles/oos-investigation-process)
- [Batch disposition decisions](/articles/batch-disposition-decisions)
