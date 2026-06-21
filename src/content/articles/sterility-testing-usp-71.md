---
title: "Sterility Testing: USP <71>, Membrane Filtration, and Method Suitability"
description: "How the compendial sterility test works under USP <71>: membrane filtration versus direct inoculation, bacteriostasis and fungistasis (method suitability), incubation, and how to invalidate a false positive."
pubDate: 2026-06-20
tags: ["sterility", "microbiology", "usp-71", "membrane-filtration", "method-suitability", "sterile-manufacturing", "qc-micro"]
pillar: "sterility-microbiology"
tier: "Intermediate"
---

The sterility test is one of the most misunderstood tests in a quality control microbiology lab. People treat the pass result as proof that a batch is sterile. It is not. The compendial sterility test is a statistical sampling test with weak power, performed under conditions where the dominant failure mode is the lab contaminating the sample rather than the batch being non-sterile. The whole discipline around USP <71> exists to make the test mean something: to keep the inhibitory product from suppressing real growth, to keep the analyst and the environment from adding false growth, and to give you a defensible path when a tube goes turbid.

This article walks the compendial sterility test end to end. The two methods (membrane filtration and direct inoculation), method suitability (the bacteriostasis and fungistasis test you must do before the product test means anything), media and incubation, the sample plan, and the part everyone asks about in interviews and inspections: what you do when you get a positive, and the narrow conditions under which you may invalidate it.

The reference compendia are harmonized. USP General Chapter <71> Sterility Tests, European Pharmacopoeia (Ph. Eur.) chapter 2.6.1, and JP 4.06 carry essentially the same procedure through the ICH Q4B Annex 8 harmonization. When this article says "USP <71>" the same logic applies under Ph. Eur. 2.6.1 unless noted.

---

## Why the sterility test exists and what it can and cannot prove

### Regulatory basis

For a US-marketed sterile drug product, the requirement traces to 21 CFR 211.167(a): "For each batch of drug product purporting to be sterile and/or pyrogen-free, there shall be appropriate laboratory testing to determine conformance to such requirements. The test procedures shall be in writing and shall be followed." The compendial method that satisfies "appropriate laboratory testing" is USP <71>. USP <71> is itself made enforceable in the US because USP <1> General Notices and FD&C Act sections 501(b) and 502(g) make compendial standards the official standard of strength, quality, and purity.

For finished product release, 21 CFR 211.165(a) requires testing to the final specification, and 211.165(e) requires that the test methods be established as accurate, sensitive, specific, and reproducible (the validation hook, which for <71> means method suitability). For sterile biologics, 21 CFR 610.12 historically prescribed the sterility test in detail; it was revised in 2012 to a performance-based requirement that lets manufacturers use a validated method appropriate to the product, which is why some advanced products use alternative or rapid microbiological methods under USP <1223>.

### The statistical limitation you must understand

The test samples a small number of units from a batch and incubates them for growth. If a low fraction of the batch is contaminated, the test will almost always pass anyway. The classic worked example: if 0.1% of a batch is contaminated and you test 20 units, the probability that all 20 sampled units happen to be sterile (and you pass) is roughly 0.999^20, which is about 98%. So a 0.1% contaminated batch passes the sterility test about 98 times out of 100. The test has almost no power to detect low-level contamination.

This is why the modern position, stated plainly in the FDA Guidance for Industry: Sterile Drug Products Produced by Aseptic Processing, Current Good Manufacturing Practice (2004), and in Annex 1 of the EU GMP guide (2022 revision), is that sterility is assured by the process (aseptic process design, the contamination control strategy, environmental monitoring, media fills, sterilization validation), not by the end-product sterility test. The sterility test is a final confirmatory check, not the basis for the sterility claim. Say this in an interview and you have already separated yourself from the candidates who think the test proves sterility.

### What the test is good for

It catches gross failures: a filter integrity breach, a sterilizer cycle that did not run, a heavily contaminated lot. It is a regulatory release requirement you cannot skip for a terminally non-parametric-release product. And for products that qualify, parametric release (USP <1222>, accepted by FDA for terminally sterilized products with a fully validated cycle and full monitoring) can replace the end-product test, precisely because the process data is stronger evidence than the weak test.

---

## The two methods: membrane filtration vs direct inoculation

USP <71> describes two procedures. You choose based on the product, but the chapter and every inspector expect membrane filtration whenever the product can be filtered.

### Membrane filtration (the default, the preferred method)

You pass the product through a sterile filter membrane with a nominal pore size of 0.45 micron (0.45 micron is the compendial standard for retaining bacteria in this test; do not use 0.22 here, the chapter specifies 0.45). The membrane retains any micro-organisms. You then wash the membrane with sterile rinsing fluid to remove residual product that could inhibit growth, transfer the membrane (or membrane halves) into the growth media, and incubate.

Why it is preferred: it physically separates the organisms from the inhibitory product. Antibiotics, preservatives, and other antimicrobial product components are washed away before the membrane meets the media, so a real contaminant can grow. With direct inoculation, the inhibitory product sits in the media with the organism and can suppress growth, giving a false negative.

A canister-based closed system (commercially available sterile two- or three-canister units with integral 0.45 micron membranes, fed through a peristaltic pump) is the standard execution. You filter the pooled sample, rinse with a defined number of portions of rinsing fluid (typically 100 mL portions, with a chapter-set maximum total rinse volume so you do not wash away organisms or exceed validated limits), then dispense fluid thioglycollate medium (FTM) into one canister and soybean-casein digest medium (SCDM, also called tryptic soy broth) into the other.

Rinsing fluids are specified: Fluid A (peptone-based), Fluid D (Fluid A plus polysorbate 80 for products with oils or that are hard to wet), and Fluid K (for products that need a richer recovery medium). The choice is part of method suitability, not a free decision.

### Direct inoculation (direct transfer)

You transfer the product directly into the media. Use this only when the product cannot be filtered: viscous products, oily preparations that blind the filter, devices, solids that do not dissolve, or small volumes where filtration loss is unacceptable. The volume of product added to each medium must not exceed the chapter ratio (the product volume should be not more than 10% of the medium volume, to avoid the product itself inhibiting growth or changing the medium). For an inherently antimicrobial product you must neutralize or dilute its activity, and you must prove that neutralization works during method suitability.

For antibiotic products tested by direct inoculation, you may add a specific inactivating enzyme (for example, penicillinase / beta-lactamase for beta-lactam antibiotics) so the residual antibiotic does not suppress growth. That neutralization has to be demonstrated effective in the suitability test.

### How to choose: decision sequence

1. Can the product be filtered through a 0.45 micron membrane without losing organism recovery? If yes, use membrane filtration. This is the default and the answer an inspector wants to hear.
2. If the product is antimicrobial (antibiotic, preservative-containing), membrane filtration with adequate rinsing is strongly preferred because it removes the inhibitor. Use it.
3. Only if filtration is genuinely impossible (viscosity, oil that blinds the filter, a solid device) do you fall to direct inoculation, and then you must build in dilution or neutralization.
4. Document the method choice and its justification in the sterility test method and in the method suitability report.

| Factor | Membrane filtration | Direct inoculation |
|---|---|---|
| Inhibitory / antimicrobial product | Strongly preferred (rinse removes inhibitor) | Allowed only with proven neutralization/dilution |
| Filterable liquids, large volumes | Yes, default | Avoid |
| Oils that blind filters, solids, devices | Difficult, may not work | Use this |
| Sensitivity to low contamination | Higher (concentrates organisms on membrane) | Lower |
| Regulatory expectation | The expected method | Must justify why filtration was not used |

---

## Method suitability: bacteriostasis and fungistasis (the test you must do first)

This is the single most examined topic in a sterility interview and the most common deficiency in a deficient lab. Before any product sterility test result is meaningful, you must prove that the test conditions, the product, the rinse, the media, the neutralizer, do not stop a small inoculum of micro-organisms from growing. USP <71> calls this the Method Suitability Test (older names: bacteriostasis and fungistasis, B&F, or growth inhibition test).

### What it proves and why it is required

The logic is simple. If the product or the test setup suppresses microbial growth, a contaminated batch can still produce a clear, growth-free tube and pass. Method suitability demonstrates that organisms added in the presence of the product still grow within the incubation period. Only then can a "no growth" result be read as "no contamination" rather than "growth was inhibited." 21 CFR 211.165(e) is the regulatory hook: the method must be shown specific and sensitive for the product.

### The challenge organisms

USP <71> prescribes a panel that covers aerobes, an anaerobe, yeast, and mold. The standard organisms (with their ATCC reference numbers):

| Organism | Type | ATCC | Medium it grows in |
|---|---|---|---|
| Staphylococcus aureus | Gram-positive aerobe | ATCC 6538 | SCDM (TSB) |
| Bacillus subtilis | Gram-positive aerobe, spore-former | ATCC 6633 | SCDM |
| Pseudomonas aeruginosa | Gram-negative aerobe | ATCC 9027 | SCDM |
| Clostridium sporogenes | Anaerobe, spore-former | ATCC 19404 (or 11437) | FTM |
| Candida albicans | Yeast | ATCC 10231 | SCDM |
| Aspergillus brasiliensis | Mold | ATCC 16404 | SCDM |

Aspergillus brasiliensis is the current name for the organism long called Aspergillus niger ATCC 16404; the ATCC number is unchanged, only the species name was reassigned. Some labs still write "A. niger" in legacy SOPs. Use the current name.

The inoculum is small: not more than 100 colony forming units (CFU) per vessel. A small inoculum is the point. The test must show that even a low-level contamination would have been detected, so you challenge with a low count, not a heavy one.

### How to run method suitability (step by step)

1. Prepare the challenge organism suspensions and confirm each is at not more than 100 CFU per inoculum portion by plate count run in parallel.
2. Set up two arms for each organism:
   - **Test (product) arm**: perform the full sterility test procedure (membrane filtration plus rinse, or direct inoculation) using the product, then inoculate the media containing the membrane or product with not more than 100 CFU of the organism.
   - **Positive control arm**: inoculate the same media with the same not more than 100 CFU of the organism, but without product (or with the membrane and rinse but no product). This is your growth reference.
3. Incubate at the chapter conditions (bacteria around 30-35 C, fungi around 20-25 C) for not more than 3 days for bacteria and not more than 5 days for fungi.
4. Read for visible growth (turbidity) in both arms.

### Acceptance criteria

Growth in the product arm must be comparable to growth in the control arm. The chapter language: the test organisms grow as well in the presence of the product as in the control. If growth in the product arm is clearly poorer or absent, the product is inhibitory and the method is not yet suitable. You then modify the method (more rinse volume, a different rinsing fluid such as Fluid D, a neutralizer, a larger media volume, an inactivating enzyme) and repeat the suitability test until growth is comparable.

A practical reading: if the positive control shows growth and the product arm shows comparable growth within the same window, suitability passes for that organism in that medium. If the control fails to grow, the test is invalid (your inoculum or media failed) and you repeat.

### Worked example: an antibiotic injectable

Suppose a cephalosporin injectable. First attempt: membrane filtration with three 100 mL rinses of Fluid A. The product arm for S. aureus shows no growth at day 3 while the control grew at day 2. The residual antibiotic on the membrane is still inhibitory. Corrective action: increase to five 100 mL rinses and add beta-lactamase to the media to inactivate residual drug. Repeat suitability. Now S. aureus and the rest grow comparably to controls. The method is suitable with five rinses plus beta-lactamase, and that becomes the validated product method. You document the failed first attempt, the rationale, and the successful conditions in the suitability report.

### When you must repeat method suitability

Method suitability is product-specific and condition-specific. Repeat it when:

- A new product or a new strength/formulation is introduced.
- The manufacturing process, formulation, or container changes in a way that could affect inhibition.
- The filter type, rinse fluid, media supplier, or neutralizer changes.
- Periodically per your SOP, and any time a change-control assessment flags an impact on the method.

Cross-link: see [/articles/compendial-method-verification](/articles/compendial-method-verification) for how method suitability fits the broader verification of a compendial method, and [/articles/method-validation-essentials](/articles/method-validation-essentials) for validation principles.

---

## Media, growth promotion, and incubation

### The two media and what each detects

USP <71> uses two media run in parallel:

- **Fluid Thioglycollate Medium (FTM)**: detects anaerobic and aerobic bacteria. Thioglycollate plus a low agar content keeps the lower portion of the tube reduced (low oxygen) so anaerobes grow, while the upper portion supports aerobes. It carries a resazurin redox indicator: the upper layer reads pink where oxygen has penetrated. Incubate FTM at 30-35 C. A chapter rule you must respect: if more than the upper one-third of the FTM is pink (oxidized), the medium has too much dissolved oxygen and must not be used; regenerate it once by heating in a water bath and cool, but do not regenerate more than once.
- **Soybean-Casein Digest Medium (SCDM / TSB)**: detects aerobic bacteria and fungi (yeast and mold). Incubate SCDM at 20-25 C.

The two temperatures matter. Fungi recover better at the lower temperature, the broad bacterial panel at the higher. Inspectors check that your incubators are at the right setpoints and that you did not run both media at one temperature.

### Growth promotion testing (GPT) of every lot of media

Every lot of prepared media, made in-house or bought ready-to-use, must pass growth promotion before use. You inoculate not more than 100 CFU of the panel organisms into the medium and confirm clearly visible growth within not more than 3 days (bacteria) or 5 days (fungi). FTM is challenged with the aerobes and the anaerobe (Clostridium sporogenes); SCDM is challenged with the aerobes plus yeast and mold. You also run a negative control (uninoculated medium) and a sterility check of the medium itself: it must show no growth, proving the medium was not contaminated during preparation.

Growth promotion is a release gate for the media. No GPT pass, no use. A common finding is using media before GPT results are available, or not testing each received lot.

### Incubation period and reading

The product sterility test incubates for not less than 14 days. You read for macroscopic growth (turbidity) periodically and at the end. For membrane filtration with two media, the standard is the full 14 days at the two temperatures. If the product or rinse turns the medium cloudy or makes the read difficult, the chapter allows a transfer: on day 14 you transfer a portion of the original medium to fresh medium and incubate both the original and the transfer for not less than 4 additional days, reading the transfer for growth.

Do not read positives early and stop. Do not extend incubation casually to "be safe" without a documented basis; the period is defined.

| Parameter | FTM | SCDM (TSB) |
|---|---|---|
| Detects | Anaerobes + aerobes | Aerobes + fungi |
| Incubation temperature | 30-35 C | 20-25 C |
| Product test incubation | not less than 14 days | not less than 14 days |
| Suitability / GPT read window | not more than 3 days (bacteria) | not more than 5 days (fungi) |
| Redox indicator | Resazurin (pink = oxidized) | None |

---

## The sample plan: how many units, how much per unit

USP <71> sets the number of units to test by batch size and container type, and the amount of product per container to test by fill volume. These are tables in the chapter; the principles you must know:

- **Number of units by batch size**: for parenteral products, the minimum number of units tested scales with batch size. For most batches over a few hundred units you test 20 units (10 in FTM, 10 in SCDM) when using the standard scheme, or 20 containers split across the two media. Very small batches test 10% or 4 units, whichever is greater, for some categories. Large-volume parenterals and ophthalmics have their own rows. Read the actual table for the product category; do not memorize a single number for every case.
- **Amount per container by fill volume**: for small fills (for example less than 1 mL) you may test the whole content; as fill volume rises you test a defined fraction (for example half the contents up to a volume, then a fixed maximum). The chapter table gives the minimum quantity per container.
- **Bulk solid antibiotics, medical devices, catgut/sutures, ophthalmic ointments**: each has a specific scheme in the chapter.

Sampling should be representative across the batch and across the fill run, including the beginning, middle, and end of filling and any higher-risk units (interventions, line stoppages). The samples come from the same batch under controlled chain of custody.

Worked example: a 5,000-unit batch of a 2 mL sterile injectable. Per the chapter scheme you test 20 containers, splitting them so 10 go to FTM and 10 to SCDM. For a 2 mL fill you test the chapter-specified minimum quantity per container (for fills in this range, typically half the contents or 1 mL per container, per the table). You pool/filter per the validated method, rinse with the validated number of portions of the validated fluid, then incubate 14 days.

---

## Where the test is run: the environment is half the test

A false positive (lab contamination) is the dominant failure mode of the sterility test, so where you run it is as controlled as how you run it.

USP <71> requires the test to be performed under aseptic conditions designed to avoid accidental contamination, using either a Grade A (ISO 5) unidirectional-airflow cabinet or isolator within a controlled background, or a closed isolator system. The EU GMP Annex 1 (2022) and the FDA aseptic processing guidance expect Grade A / ISO 5 at the point of test with appropriate background (Grade B or, for an isolator, a lower-grade background is acceptable because the isolator provides the separation).

Isolators have become the standard because they decouple the analyst from the open product, cut the false-positive rate, and are easier to defend in an inspection. The environment must be monitored during testing: viable air, settle plates, surface, and personnel (glove/gown) monitoring, plus continuous non-viable particle counts in an isolator. Those EM results during the test are part of the data package when you investigate a positive.

Negative controls are mandatory. You run media-only controls (uninoculated FTM and SCDM incubated alongside the test) and method negative controls (rinse fluid and membrane processed without product). If a negative control grows, the test run is compromised. See [/articles/environmental-monitoring-program](/articles/environmental-monitoring-program) and [/articles/aseptic-processing-and-media-fills](/articles/aseptic-processing-and-media-fills).

---

## A positive result: investigation and the narrow path to invalidation

This is the high-stakes part. A turbid tube is not automatically a batch failure, but the bar to set it aside is high, and the default if you cannot prove a lab cause is that the batch fails.

### The regulatory frame

USP <71> states the conditions under which a sterility test may be invalidated. A positive result invalidates the test ONLY if one or more of these is established:

1. The data of the microbiological monitoring of the sterility testing facility show a fault (the environment was out of control).
2. A review of the testing procedure used during the test shows a fault.
3. Microbial growth is found in the negative controls.
4. After identification of the micro-organism isolated from the test, the growth can be ascribed unequivocally to faults with respect to the material and/or the technique used in conducting the sterility test procedure (the organism is unambiguously a lab/handling organism, not a product organism, supported by the other evidence).

If, and only if, the test is shown invalid on one of these grounds, you discard it and repeat with the same number of units as the original test. If you cannot demonstrate invalidity, the product fails the sterility test and the batch is rejected. You cannot retest your way to a pass on the strength of "the first one was probably contamination."

FDA's view is reinforced in 21 CFR 211.192 (investigations of discrepancies) and the agency draws on the principles of the OOS guidance. The classic enforcement reference everyone cites is the Barr Laboratories court decision (United States v. Barr Laboratories, 1993), which established that you cannot retest into compliance and that a failing result stands unless a valid, documented laboratory cause is found. The sterility positive investigation is the microbiological cousin of an OOS investigation. See [/articles/oos-investigation-process](/articles/oos-investigation-process).

### Step-by-step positive investigation

1. **Secure and quarantine**: do not discard the positive tube. Quarantine the batch (already on hold pending the test). Preserve the isolate.
2. **Identify the organism**: speciate the isolate to genus/species (MALDI-TOF, 16S/ITS sequencing, or validated phenotypic ID). The identity is the single most informative piece of evidence. A skin commensal (for example a coagulase-negative staphylococcus or a Micrococcus) points toward analyst/handling; a waterborne Gram-negative or a mold may point either way and needs more work.
3. **Review the environment**: pull the EM data for the session (viable air, settle plates, surfaces, personnel glove/gown), the isolator/cabinet performance, particle counts, and any alarms. A documented EM excursion during the test is criterion 1.
4. **Review the technique and the run**: the analyst's actions, interventions, any line or procedural deviations, the negative-control results, media GPT for that lot, the rinse and filtration records. A procedural fault is criterion 2; a negative-control growth is criterion 3.
5. **Compare isolates**: match the test isolate against the lab/personnel/environment isolate library. If the same organism with matching characteristics is found in the testing environment or on the analyst, the case for a lab cause strengthens (supporting criterion 4). If the isolate matches an organism recovered from the product, the bulk, a component, or the manufacturing environment, the case tilts toward a true contamination.
6. **Adjudicate**: a QA-led review board weighs all of the above against the four USP criteria. Invalidate only if one criterion is unequivocally met. Otherwise the result stands and the batch is rejected.
7. **If invalidated**: repeat the test using the same number of units as the original. Document everything. If the retest passes, you may release subject to the full investigation conclusion; if the retest also grows, the batch fails.
8. **If confirmed (true positive)**: reject the batch, file the investigation, run CAPA, and assess scope (other batches, the aseptic process, media fills, the contamination control strategy). A confirmed sterility failure for an aseptically processed product is a serious event and often triggers a field assessment of related lots.

### Worked example of an invalidation decision

A 2 mL injectable, day 6, one SCDM tube turbid. ID returns Staphylococcus epidermidis (a coagulase-negative skin staph). EM for the session shows a glove-print plate from the analyst's right hand at action level with S. epidermidis; the isolator background and other plates are clean; negative controls are clear; GPT and procedure records are clean. The organism matches the analyst's glove. Criterion 4 is met (growth ascribed unequivocally to a handling fault, supported by the personnel monitoring excursion). QA invalidates, documents, and repeats with the same number of units. The retest is clean and the batch is released with a full investigation report and CAPA on aseptic technique.

Contrast: same scenario but the ID is Ralstonia pickettii (a waterborne Gram-negative) and EM is clean, negative controls clear, technique sound. There is no lab fault to point to and the organism is a plausible product/water-system contaminant. You cannot invalidate. The batch fails and you investigate the water system and the process.

### Common mistakes and inspection findings

- Retesting after a positive without a valid, documented laboratory cause, then releasing on the second pass. This is the most cited and most serious finding. It echoes the Barr principle directly.
- Invalidating on a weak rationale ("probably technique") without identifying the organism or without EM/negative-control evidence. Inspectors read the four USP criteria literally.
- Not identifying the isolate, or identifying only to Gram stain. Speciation is expected.
- Negative controls or media GPT missing for the run, so you cannot rule the lab in or out.
- Reading early positives and discarding tubes before the 14-day endpoint.
- Treating a sterility pass as the sterility assurance, ignoring weak media-fill, EM, or CCS data.
- Using media before growth promotion results are available.
- Running both media at the same temperature, or letting FTM oxidize beyond the upper third and using it anyway.
- Method suitability not repeated after a formulation or filter change, so the product method is no longer demonstrated suitable.

---

## Rapid and alternative methods

For products where the 14-day incubation is impractical (cell and gene therapies with short shelf life, short-dated radiopharmaceuticals), USP <1223> Validation of Alternative Microbiological Methods and Ph. Eur. 5.1.6 allow rapid sterility methods (for example ATP bioluminescence, respiration-based, or growth-based detection with faster readout) once validated for equivalence to the compendial method. 21 CFR 610.12 for biologics was deliberately rewritten to a performance standard to enable this. You validate the alternative against accuracy, specificity, limit of detection, ruggedness, robustness, and equivalence, and you justify the method to your regulator (often in the marketing application). For short-shelf-life ATMPs this is not optional convenience, it is the only way to release in time. See [/articles/cell-gene-therapy-data-integrity](/articles/cell-gene-therapy-data-integrity) and [/articles/atmp-gmp-cell-gene-manufacturing](/articles/atmp-gmp-cell-gene-manufacturing).

---

## Roles and responsibilities

| Role | Responsibility |
|---|---|
| QC Microbiology analyst | Executes the test under aseptic conditions, follows the validated method, performs EM during test, records observations, escalates positives immediately |
| QC Micro supervisor / SME | Owns the method, the suitability/GPT program, organism library, reads and interprets results, leads the technical investigation |
| Validation / method owner | Establishes and maintains method suitability per product, manages change control impacts on the method |
| QA | Approves the method and SOPs, leads/chairs the positive investigation and invalidation decision, dispositions the batch, owns CAPA |
| Microbial ID lab | Speciates isolates, maintains the environmental/personnel isolate library for source attribution |
| Media/vendor | Supplies media with certificates; the lab still performs GPT on each lot before use |
| Qualified Person (EU) | For EU release, the QP relies on the sterility result plus process data and signs the batch certification (see Annex 16) |

Cross-link: [/articles/qualified-person-batch-release-annex-16](/articles/qualified-person-batch-release-annex-16) and [/articles/batch-disposition-decisions](/articles/batch-disposition-decisions).

---

## Interview-ready questions and how to answer

**Does a passing sterility test prove the batch is sterile?**
No. It is a small-sample test with weak statistical power; a low-level contaminated batch usually passes. Sterility is assured by the validated aseptic process, the contamination control strategy, environmental monitoring, media fills, and sterilization validation. The end-product test is a final confirmatory check, not the basis of the sterility claim.

**Membrane filtration or direct inoculation, and why?**
Membrane filtration is preferred whenever the product is filterable, especially for antimicrobial products, because rinsing the membrane removes the inhibitory product before it reaches the media, so real organisms can grow. Direct inoculation is for non-filterable products (viscous, oily, solids, devices) and requires dilution or neutralization, demonstrated in suitability.

**What is bacteriostasis and fungistasis / method suitability and why do it?**
It demonstrates the product and test conditions do not inhibit microbial growth. You challenge the full method with not more than 100 CFU of the USP organism panel in the product arm versus a control arm; growth must be comparable. Without it, a "no growth" result could just mean growth was suppressed, so the product result would be meaningless.

**Name the media, their targets, and incubation temperatures.**
FTM detects anaerobes and aerobes, incubated at 30-35 C, with a resazurin redox indicator; SCDM (TSB) detects aerobes and fungi, incubated at 20-25 C. Product incubation is not less than 14 days.

**Name the USP <71> challenge organisms.**
S. aureus (6538), B. subtilis (6633), P. aeruginosa (9027), C. sporogenes (anaerobe, in FTM), C. albicans (10231, yeast), A. brasiliensis (16404, mold).

**You get a positive. Walk me through it.**
Quarantine, preserve and speciate the isolate, review session EM, negative controls, GPT and technique, compare against the personnel/environment isolate library, then adjudicate against the four USP invalidation criteria. Invalidate and retest with the same number of units only if a criterion is unequivocally met; otherwise the batch fails. You cannot retest into compliance (the Barr principle).

**Under what conditions may a sterility test be invalidated?**
Only four: documented EM fault in the test facility, a documented procedural fault, growth in the negative controls, or the isolate identification unequivocally ascribes the growth to a material/technique fault of the test. Anything less and the result stands.

**Why 0.45 micron, not 0.22, in the test?**
0.45 micron is the compendial standard for the sterility test membrane for retaining the relevant organisms in this assay. (0.22 micron is the typical sterilizing-grade filter in manufacturing, a different context.)

**How does parametric release relate to this?**
For terminally sterilized products with a fully validated cycle and complete monitoring, parametric release (USP <1222>) can replace the end-product sterility test, because the process data is stronger evidence than the weak test. Aseptically processed products generally cannot use parametric release.

---

## Practical tips

- Build and maintain a personnel and environmental isolate library. When a positive hits, source attribution from a matching library isolate is often the difference between a defensible invalidation and a batch rejection.
- Move to isolators if you have not. The reduction in false positives pays for itself in avoided investigations and stronger inspection posture.
- Keep negative controls and GPT airtight every run; they are your evidence both ways. An investigation with missing controls usually defaults to batch failure because you cannot rule the lab in or out.
- Pre-write the positive-investigation procedure with the four USP criteria as an explicit checklist, and define the QA-led adjudication board. Do not improvise this under pressure.
- Re-run method suitability on any formulation, filter, rinse fluid, neutralizer, or media-supplier change, and tie it to change control.
- Watch FTM oxidation: if more than the upper third is pink, regenerate once or discard; never use over-oxidized FTM.
- For short-shelf-life products, validate a rapid method under USP <1223> early; do not wait until a batch is sitting in quarantine.

### Related reading

- [/articles/aseptic-processing-and-media-fills](/articles/aseptic-processing-and-media-fills)
- [/articles/environmental-monitoring-program](/articles/environmental-monitoring-program)
- [/articles/bioburden-and-endotoxin-testing](/articles/bioburden-and-endotoxin-testing)
- [/articles/sterilization-validation-moist-heat](/articles/sterilization-validation-moist-heat)
- [/articles/depyrogenation-dry-heat-sterilization](/articles/depyrogenation-dry-heat-sterilization)
- [/articles/container-closure-integrity-testing](/articles/container-closure-integrity-testing)
- [/articles/microbial-id-and-em-excursions](/articles/microbial-id-and-em-excursions)
- [/articles/oos-investigation-process](/articles/oos-investigation-process)
- [/articles/compendial-method-verification](/articles/compendial-method-verification)
- [/articles/annex-1-contamination-control-strategy](/articles/annex-1-contamination-control-strategy)
- [/articles/qualified-person-batch-release-annex-16](/articles/qualified-person-batch-release-annex-16)
- [/articles/visual-inspection-injectables-usp-790](/articles/visual-inspection-injectables-usp-790)
