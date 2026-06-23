---
title: "Cleaning Validation in Pharmaceutical Manufacturing: ADE, PDE, and the Full Framework"
description: "An operational guide to cleaning validation: the regulatory basis, ADE/PDE calculations, worst-case product selection, swab and rinse sampling design, acceptance criteria, and what inspectors focus on."
pubDate: 2026-02-23
tags: ["cleaning validation", "GMP", "manufacturing", "contamination", "ADE", "PDE"]
tier: "Intermediate"
pillar: "quality-assurance"
---

Cleaning validation is the documented evidence that your cleaning procedures remove drug product residues, and the residues of the cleaning agents themselves, from manufacturing equipment to a level that does not pose a risk to the next product or to a patient. It applies to any multi-product equipment, meaning any piece of equipment used to make more than one product and cleaned between campaigns. It also applies, in a narrower way, to dedicated equipment, where the question shifts from "what carries over to the next product" to "does residue or degradant build-up affect the same product over time."

The same framework runs across modalities. A small-molecule tablet line, a biologic bioreactor train, a medical-device assembly that contacts product, and a sterile fill suite all share the carryover problem. The numbers and the dominant risk change (chemical carryover for small molecules, protein and endotoxin carryover for biologics, particulate and bioburden for devices), but the logic of limit, sample, recover, and trend is identical.

The regulatory basis rests on a small set of documents. In the US, 21 CFR 211.67 (equipment cleaning and maintenance) requires written cleaning procedures and records. The expectation that those procedures be validated comes from FDA's 1993 Guide to Inspections, Validation of Cleaning Processes. In Europe, EudraLex Volume 4, Chapter 3 and Chapter 5 require that cross-contamination be prevented by adequate cleaning, and the 2014 EMA guideline on setting health-based exposure limits for use in risk identification in the manufacture of different medicinal products in shared facilities (EMA/CHMP/CVMP/SWP/169430/2012) made health-based limits the expected approach. That guideline replaced the older visual-inspection-plus-10-ppm habits that had been industry practice for decades. ICH Q7 (Good Manufacturing Practice for Active Pharmaceutical Ingredients) sets parallel expectations for API manufacturing. For medical devices, the quality-system rule (21 CFR 820, transitioning to the harmonized QMSR aligned with ISO 13485) carries the same cleaning and contamination-control obligations under process validation. If you want the broader picture of how cleaning validation sits inside the validation program, the [process validation lifecycle](/articles/process-validation-lifecycle) and the [validation master plan](/articles/validation-master-plan-and-periodic-review) articles give the surrounding structure.

---

## Why Cleaning Validation Matters

Consider a concrete scenario. Product A is an immunosuppressant with a narrow therapeutic index. Product B is a low-potency oral product with no significant toxicological concern. They share a granulation line. The equipment is cleaned between campaigns, and Product B is the next product to run.

If the cleaning is inadequate and Product A residue carries into Product B, patients taking Product B receive an unintended dose of an immunosuppressant. That is the patient-safety case, and it is not academic. Cross-contamination findings have driven recalls, consent decrees, and the shutdown of multi-product lines. The cost of getting this wrong is not a paperwork observation, it is product on the market that exposes patients to a drug they were never prescribed.

The reverse direction matters too. Cleaning agent residues, the solvents, detergents, and acids or bases used to clean, can themselves contaminate the next batch. A caustic cleaner left on a surface can degrade an acid-sensitive API. So cleaning validation has to address two carryover paths: previous product into next product, and cleaning agent into next product. A third concern, microbial and endotoxin carryover, becomes the dominant one in sterile and biologic operations and links directly to the [aseptic processing and media fills](/articles/aseptic-processing-and-media-fills) and [environmental monitoring](/articles/environmental-monitoring-program) programs.

Three carryover paths to keep straight, because the limit and the test method differ for each:

| Carryover path | What you are limiting | Typical test |
|---|---|---|
| Previous product into next product | API or formulation residue | Specific assay (HPLC), or TOC as a non-specific surrogate |
| Cleaning agent into next product | Detergent, acid, base, solvent | TOC, conductivity, or a component-specific method |
| Microbial / endotoxin carryover | Bioburden and bacterial endotoxin | Plate count, [bioburden and endotoxin testing](/articles/bioburden-and-endotoxin-testing) |

---

## Acceptable Daily Exposure (ADE) and Permitted Daily Exposure (PDE)

ADE (the term ISPE and FDA practice tend to use) and PDE (the EMA term) are numerically the same concept. Both represent the maximum amount of a substance a patient can be exposed to per day without an appreciable risk of adverse effects, derived from toxicological and pharmacological data. The two terms are interchangeable in practice, and a single value drives the limit on either side of the Atlantic. ICH Q3C (residual solvents) and ICH Q3D (elemental impurities) use PDE the same way for those impurity classes, so the calculation style is consistent across the impurity guidances.

Why this matters for cleaning: if you know the ADE of the previous product, you can back-calculate the maximum residue that can sit on the cleaned equipment and still keep a patient's exposure through the next product below that ADE.

The ADE is derived as:

> ADE = NOAEL × BW / (UF₁ × UF₂ × UF₃ × UF₄ × UF₅)

Where:

- **NOAEL** is the No-Observed-Adverse-Effect Level from the most relevant study, expressed in mg/kg/day. When no clean NOAEL exists, a LOAEL (Lowest-Observed-Adverse-Effect Level) is used with an extra adjustment factor, or a clinical therapeutic dose is used as the point of departure.
- **BW** is body weight, defaulted to 50 kg for a human (a conservative choice from the EMA guideline rather than the older 70 kg adult)
- **UF₁ through UF₅** are uncertainty factors applied as divisors: interspecies extrapolation (commonly 2 to 12), interindividual variability (commonly 10), study-duration adjustment (subchronic to chronic, up to 10), severity and reversibility of the effect, and a variable factor for an incomplete point of departure, applied when a NOAEL was not established and a LOAEL had to be used instead. This last factor follows the ICH Q3C convention. If you want a separate allowance for an overall thin or poor-quality database, treat that as an additional modifying factor rather than relabeling F5.

The result is in mg/day. For genotoxic or carcinogenic compounds with no identifiable threshold, you do not use a NOAEL at all. You either apply the Threshold of Toxicological Concern (commonly 1.5 µg/day for a non-cohort-of-concern genotoxicant) or extrapolate linearly from carcinogenicity data to a 1-in-100,000 risk level. ICH M7, on mutagenic impurities, is the reference here, and the same logic appears in the [nitrosamines and mutagenic impurities](/articles/nitrosamines-impurities-q3-m7) work. Highly sensitizing compounds (some beta-lactams, certain cytotoxics) are handled separately again: regulators expect dedicated, not just well-cleaned, facilities for those, which the [cross-contamination control in shared facilities](/articles/cross-contamination-control-shared-facilities) article covers.

A worked example makes the chain concrete. Suppose the previous product has a NOAEL of 1 mg/kg/day from a 90-day rat study, and you apply factors of 5 (interspecies), 10 (interindividual), 5 (subchronic to chronic), 1 (effect not severe), and 1 (a clean NOAEL, so no LOAEL adjustment). The composite factor is 250.

> ADE = (1 mg/kg/day × 50 kg) / 250 = 0.2 mg/day = 200 µg/day

The single most important caution: ADE derivation is a toxicology task, not a quality task. It must be done by a qualified toxicologist, documented in a signed monograph, and the basis for each factor must be visible. Pulling a generic "10 ppm" limit out of the air with no toxicological reasoning is not defensible under current expectations.

**What goes in an ADE monograph.** When an inspector asks for the basis of a limit, this is the document they want to see. A defensible monograph contains: the compound identity and a short pharmacology and toxicology summary; the critical study and the chosen point of departure (NOAEL, LOAEL, or clinical dose) with the citation; each uncertainty factor and a sentence justifying its value; the resulting ADE in mg/day; a statement on genotoxic, sensitizing, or reproductive-hazard potential; the author's qualifications; and a signature and date with a review and re-issue interval. An ADE without traceable reasoning behind each factor is treated as no ADE at all.

---

## From ADE to Equipment Residue Limit

Once you have the ADE in mg/day, calculate the Maximum Allowable Carryover (MACO), the total mass of previous product that may carry into a full batch of the next product:

> MACO (mg) = ADE_previous (mg/day) × Batch size of next product / Maximum daily dose of next product

The units have to line up: batch size in the same mass unit as the dose. If the next product has a 200 kg batch and a maximum daily dose of 400 mg, and ADE_previous is 0.2 mg/day:

> MACO = 0.2 mg/day × (200,000,000 mg / 400 mg/day) = 100,000 mg = 100 g

That MACO is then spread over the shared equipment surface to give a surface limit:

> Limit (µg/cm²) = MACO (µg) / Total shared product-contact surface area (cm²)

If the shared train has 500,000 cm² of product contact area:

> Limit = 100,000,000 µg / 500,000 cm² = 200 µg/cm²

That number is the per-area target the swab result has to beat. Health-based limits sometimes come out higher than the old defaults, sometimes much lower. The point of the ADE approach is that the limit is now tied to the actual toxicity of the molecule rather than an arbitrary blanket factor. The three historical methods are worth knowing because you will still see them and may use the most conservative as a cross-check.

| Method | Basis | Status |
|---|---|---|
| Health-based (ADE/PDE) | Toxicological NOAEL or TTC | Current expectation (EMA 2014, ICH Q7) |
| 0.1% of therapeutic dose | 1/1000 of the previous product's lowest daily dose carried into the next | Legacy; may be used as an additional cross-check |
| 10 ppm | 10 mg of previous product per kg of next product | Legacy; not acceptable as the sole basis |

Common practice is to calculate the limit by the ADE method, optionally calculate the legacy methods, and adopt the most stringent. That defends the limit against either a regulator who wants health-based reasoning or one who remembers the old conventions.

**Converting the surface limit into a swab acceptance number.** The surface limit in µg/cm² is not what the lab reports. The lab reports a concentration in the swab extract. You have to carry the limit through the swab area, the extraction volume, and the recovery factor so the analyst knows the pass/fail value in the units the instrument produces. Worked end to end, using the 200 µg/cm² surface limit, a 25 cm² swab area, a 10 mL extraction volume, and an 80% swab recovery:

- Mass allowed on the swabbed area = 200 µg/cm² × 25 cm² = 5000 µg
- Corrected for 80% recovery = 5000 µg × 0.80 = 4000 µg actually recovered into the vial at the limit
- Concentration in the extract = 4000 µg / 10 mL = 400 µg/mL

So a swab result above 400 µg/mL fails. Note the limit above is unusually high because the example molecule is benign; a potent compound can drive the swab acceptance value down to single-digit µg/mL or into ng territory, which is exactly where method sensitivity becomes the constraint. Always pre-calculate this number, put it in the protocol, and confirm the analytical method's limit of quantitation sits comfortably below it before you run a single swab.

---

## Worst-Case Product Selection

In a multi-product facility you cannot validate every product sequence. The worst-case approach picks the single most demanding combination and argues that everything else is covered by it.

- **Worst-case previous product (the contaminant):** the product with the lowest ADE, hardest solubility, and highest toxicity that runs on the equipment. The lowest ADE sets the most stringent limit. Solubility and stickiness drive how hard it is to remove. These two can point at different products, so document both and justify the choice.
- **Worst-case next product (the receiver):** the product with the smallest batch size and the highest maximum daily dose. A small batch concentrates the carryover, and a high daily dose means more of the contaminated product reaches the patient per day.
- **Worst-case equipment:** the unit in the train that is hardest to clean. Complex geometry, the most product-contact area, the smallest internal clearances, dead legs, long transfer lines, and porous or scratched surfaces all push an item toward worst case.

A clean way to organize this is a risk-ranked matrix that scores each product on hardest-to-clean (solubility), toxicity (ADE), and dose/batch attributes. Quality risk management methodology, covered in [quality risk management](/articles/quality-risk-management), gives the scoring discipline so the worst-case choice is reproducible rather than a matter of opinion. Validation run against the worst case is taken to represent the worst cleaning challenge, and other sequences are addressed by documenting that they are less demanding.

**A worked worst-case matrix.** Here is the kind of table that belongs in a cleaning validation master plan. Each product on the line is scored, and the winners on the two axes that matter are flagged. A simple convention: rank ADE from lowest (most stringent, highest concern) and solubility from least soluble (hardest to clean).

| Product | ADE (µg/day) | Solubility | Max daily dose (mg) | Batch size (kg) | Cleanability rank | Toxicity rank |
|---|---|---|---|---|---|---|
| Alpha | 50 | Poor | 200 | 150 | Hardest (1) | High (2) |
| Beta | 20 | Moderate | 100 | 80 | Medium (2) | Highest (1) |
| Gamma | 500 | Good | 400 | 250 | Easiest (4) | Low (4) |
| Delta | 120 | Poor | 50 | 60 | Hard (2) | Medium (3) |

Reading this matrix: Beta drives the acceptance limit (lowest ADE, so the tightest µg/cm²), while Alpha drives the cleaning challenge (poorest solubility, hardest to physically remove). Best practice is to validate the cleaning procedure against the harder-to-clean soil (Alpha) but apply the more stringent limit (from Beta) to the result, so the worst case on both axes is covered. The worst-case next product needs more care than the slogan "smallest batch, highest dose" suggests, because those two attributes can point at different products. Since MACO scales with batch size and inversely with daily dose, the product that squeezes MACO hardest is the one with the smallest batch-to-dose ratio. Compute that ratio for each: Alpha 150/200 = 0.75, Beta 80/100 = 0.80, Gamma 250/400 = 0.625, Delta 60/50 = 1.2. Delta has the smallest batch but its low 50 mg dose works the other way, so its ratio is the largest and it gives the most forgiving MACO. Gamma, despite a mid-size batch, has the smallest ratio and is the worst-case next product. When smallest-batch and highest-dose flag different products, calculate the ratio and pick the smallest, do not default to the smallest batch alone. Document each of these three choices with the reasoning, not just the conclusion.

---

## Cleaning Validation Protocol Design

**Worst-case soil.** Validation runs at the maximum soil load the equipment will see in routine production: the largest batch, the highest product loading, and the longest dirty-hold time allowed between end of processing and start of cleaning. Soil that has dried on a surface for the maximum permitted dirty-hold is harder to remove than fresh soil, so the protocol has to fix and challenge that hold.

**Clean-hold and dirty-hold times.** Two time windows belong in the protocol. The dirty-hold time (DHT) is how long equipment may sit soiled before cleaning starts. The clean-hold time (CHT) is how long cleaned equipment may sit before it must be used or re-cleaned, and the CHT is usually bounded by microbial growth, established with bioburden and endotoxin testing rather than chemical residue. Both windows are validated at their maximum: the protocol holds soiled equipment for the longest DHT before cleaning, and holds cleaned equipment for the longest CHT before sampling, so the limits printed in the SOP are the ones actually proven.

**The procedure is fixed first.** Define the exact cleaning procedure before validation: agent, concentration, temperature, contact time, flow rate or action, rinse volume, and rinse quality. Validation confirms that the written procedure works. If validation needed five rinses but the SOP says three, the SOP, not the better run, is what production will follow, and the validation did not represent reality. Any change to the procedure afterward goes through [change control](/articles/change-control-validated-systems) with an assessment of whether revalidation is needed.

**Protocol contents.** A complete cleaning validation protocol contains, at minimum: purpose and scope (which equipment train, which products); references to the cleaning SOP being validated and the ADE monographs; the worst-case justification for product and equipment; the calculated MACO, surface limit, and swab acceptance concentration with the math shown; the sampling plan with swab location maps and rinse points; the analytical methods and their validation status; the recovery study reference; the number of runs (conventionally three) and the conditions for each; acceptance criteria for chemical residue, cleaning agent, bioburden, endotoxin, and visual; roles and signatures; and the deviation-handling approach. Approve the protocol before execution. Generating data and then writing the protocol to match is a serious data-integrity problem, not a shortcut.

**Sampling strategy.** Two methods, usually together.

*Swab sampling* wipes a swab, pre-moistened with an appropriate solvent, over a defined area (commonly 25 cm²) on product-contact surfaces, then extracts and analyzes it. Swabs measure residue at specific, deliberately chosen locations. Location selection has to be worst case: gaskets, welds, baffles, dead legs, agitator shafts, valve seats, and any geometry that traps soil. The swab locations are mapped and the map goes in the report so an inspector can see exactly where you sampled. A consistent swabbing technique matters as much as the location: a defined number of strokes, in two directions, with a fixed pressure, trained and documented, because recovery is technique-dependent.

*Rinse sampling* collects and analyzes the final rinse. Rinse covers the whole wetted surface but dilutes the residue and can miss a localized hot spot in a hard-to-reach pocket. Rinse is good for surfaces a swab cannot reach, such as the inside of long transfer lines, but rinse alone is generally not enough. The two methods complement each other: swabs for direct, localized measurement, rinse for whole-surface coverage.

**Analytical methods.** The method has to be validated for that analyte in that matrix. A validated HPLC assay for the API in finished product is not automatically valid for swab extracts off stainless steel. Specific methods (HPLC, LC-MS for trace work) quantify a named residue; non-specific methods such as total organic carbon (TOC) and conductivity measure everything and are useful for rinse and for cleaning agents. The method's limit of quantitation must sit comfortably below the residue limit you calculated. Method validation principles are covered in [method validation essentials](/articles/method-validation-essentials).

**Swab recovery.** How much of what is actually on the surface does the swab-plus-extraction step recover? Spike known amounts onto coupons of the real equipment material (for example 316L stainless steel, but also any elastomer or plastic in contact) at several levels, then swab, extract, and analyze. Recovery should generally be at or above 70% and be consistent across the range. The limit has to be corrected for it: if recovery is 80%, multiply the reported result by 100/80 to estimate the true surface concentration. A recovery below 50% is usually rejected outright; a recovery between 50% and 70% may be accepted with a documented justification and the correction applied, but it weakens the result. Run recovery on every surface material the residue contacts, not just stainless, because recovery off a scratched gasket or a PTFE seal is often much lower than off polished steel. Skipping recovery makes every clean result look better than it is.

**Visual inspection.** Cleaned equipment should show no visible residue under defined lighting, distance, and viewing angle. Visual is the first gate and a strong tool, but it is not the primary quantitative limit. Visible-residue detection thresholds run roughly 1 to 4 µg/cm² for many APIs, which is fine for low-potency products and not nearly stringent enough for potent ones. For a high-potency compound the calculated limit can be well below what any operator can see, so visual passes while the surface is still over the limit. Define the visual criteria objectively: illumination (lux), distance, angle, the surfaces inspected, who is qualified to perform it, and a documented training that includes spiked-coupon examples of "just visible."

---

## Roles and Responsibilities

Cleaning validation is cross-functional, and a frequent inspection finding is that nobody could say clearly who owned what. The split below is typical.

| Activity | Owner | Supporting |
|---|---|---|
| ADE/PDE derivation and monograph | Toxicologist | Regulatory, QA |
| Worst-case selection and matrix | Validation / Quality Engineering | QA, Manufacturing |
| Protocol authoring and approval | Validation author; QA approves | Manufacturing, QC, Toxicology |
| Cleaning SOP and execution | Manufacturing | Engineering |
| Sampling (swab, rinse) | Trained sampler (QC or validation) | QA witness for key runs |
| Analytical testing and recovery | QC laboratory | Method validation group |
| Final disposition and report approval | Quality Assurance | All authors |
| Ongoing verification and trending | Manufacturing and QA | Validation |

The principle is that the people who write the limit (toxicology and validation) are independent of the people who run the cleaning (manufacturing), and Quality holds the approval and disposition authority. The [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) article covers how these accountabilities are documented in a RACI.

---

## Number of Validation Runs

The 1993 FDA guide established three consecutive successful runs as the conventional minimum. Three passing runs show the procedure is reproducible. A single passing run shows only that it can pass once. All three must run under worst-case conditions throughout: worst-case soil, the maximum dirty-hold, and the exact procedure as written.

The same lifecycle thinking that reshaped process validation is now applied to cleaning. Rather than treating "three runs and done" as the end, mature programs frame cleaning as design, qualification, and ongoing verification, which is why continued monitoring after the three runs has become an expectation rather than a nice-to-have. This mirrors the three-stage model in the [process validation lifecycle](/articles/process-validation-lifecycle): cleaning process design, cleaning process qualification (the three runs), and continued cleaning verification.

A subtle point that trips people up: "three consecutive successful runs" means three in a row with no failures in between. If run two fails, you do not get to keep runs one and three and call it a pass. You investigate the failure, fix the cause through [deviation management](/articles/deviation-management), and start the count again. The conventional three is a floor, not a ceiling; a risk-based justification can support more runs for a difficult worst case or a manual cleaning process with high variability.

---

## Cleaning Agent Residue Limits

Cleaning agent residue has to be shown acceptable too. Three routes:

- **Toxicological (ADE) approach:** derive an ADE for the cleaning agent from its toxicological profile and treat it like any other residue.
- **Component-based approach:** for a formulated detergent, assess the most toxic component and set the limit on that, since the formulation as a whole may not have a tidy toxicology dossier.
- **Non-detect approach:** show the agent is below the validated limit of quantitation in rinse samples, appropriate when that LOQ already sits far below any plausible toxicological concern.

For common agents with established safety profiles, sodium lauryl sulfate, citric-acid-based acids, and many commercial alkaline cleaners, the non-detect route is often enough, and conductivity or TOC on the rinse does the measurement cheaply. For a proprietary or novel cleaner, get the toxicological assessment and the safety data sheet, and confirm the supplier can tell you the components. Supplier documentation here ties into [supplier and vendor qualification](/articles/supplier-vendor-qualification).

A practical tip for rinse-based agent limits: conductivity is a fast, cheap proxy but it only sees ionic species, so a non-ionic surfactant can sit on the surface invisibly while conductivity reads clean. Match the surrogate to the chemistry. TOC catches organic agents that conductivity misses, and a rinse-water-versus-purified-water conductivity comparison only works for ionic cleaners.

---

## Bracketing and Matrixing

**Bracketing** validates the extremes and infers the middle. Validate the worst-case product and, where it strengthens the argument, the easiest, and treat intermediate products as bracketed by them. This works when the products form a genuine continuum on the parameters that matter.

**Matrixing** handles equipment families. For several equivalent units, or several sizes of the same design, validate one representative of each category and document why the others are equivalent: same material, same surface finish, same geometry, same cleaning recipe scaled by area.

Both have to be justified in the validation plan and approved by quality. A bracketing argument that skips a product because it is inconvenient, rather than because it is genuinely bracketed, is the kind of gap an inspector finds. The justification has to name the parameters being bracketed (solubility, ADE, dose, batch size) and show the chosen product sits at the demanding end of each, otherwise the "bracket" leaves a product uncovered.

---

## Verification and Lifecycle Management

**Routine cleaning verification.** After each clean in production, confirm the clean was performed per the validated procedure. This is the operational check, cleaning time, agent concentration, temperature, rinse conductivity, and visual inspection, not full analytical residue testing on every batch. Analytical residue testing is the validation activity; verification is the day-to-day evidence that the validated state still holds. The records belong in the [batch record review](/articles/batch-record-review-gmp).

**Periodic review and revalidation triggers.** Cleaning validation is a living state, not a one-time certificate. Reassess or revalidate when any of these occur:

- A new product is introduced with a lower ADE, lower solubility, or larger surface footprint than the current worst case
- The cleaning procedure changes: agent, concentration, temperature, contact time, or rinse
- Equipment is modified in a way that affects product-contact surfaces, or a new piece is added to the train
- A product formulation changes in a way that affects how it cleans off
- Adverse trends appear in routine monitoring

**Trending.** Track swab and rinse results over time, not just pass or fail. A slow climb in residue, while still under the limit, can signal a degrading procedure: equipment wear and surface roughening, biofilm, scaling, or quiet procedure drift on the floor. Catching the trend before it crosses the limit turns a deviation into a maintenance action. The statistical tools for this, control charts and capability indices, are covered in [statistics in quality](/articles/statistics-in-quality-cpk-control-charts).

For the hands-on execution side of all this, sampling logistics, run sequencing, deviation handling during the runs, and report assembly, see the companion article on [cleaning validation execution](/articles/cleaning-validation-execution).

---

## Common Cleaning Validation Failures

**No ADE.** Using 10 ppm or visual-only limits with no toxicological basis. Since the EMA 2014 guideline this is not acceptable for shared-facility justification.

**Swab recovery never established.** Reporting a surface result without correcting for recovery overstates how clean the equipment is.

**Wrong worst case.** Picking the worst-case product on solubility when the limit should be driven by ADE, or the other way around. Solubility drives the cleaning strategy, ADE drives the acceptance limit. Confusing the two produces a limit that is either indefensible or impossibly tight.

**Validation not maintained.** New products added to the equipment without reassessing the matrix. The most damaging version is a high-potency compound introduced onto a shared train that was validated only against low-potency products.

**Procedure not followed during validation.** Validating with more rinses, longer contact, or hotter water than the SOP allows. The validation then proves something production never does.

**No defined visual criteria.** "No visible residue" is not objective unless the lighting, distance, angle, and a reference standard for "visible" are written down and trained.

**Ignoring degradants.** Cleaning agents can degrade an API into a different molecule, and detergents can leave their own degradation products. Validating for the parent API only can miss a residue the method does not even look for.

**Analytical method not fit for the limit.** A method whose limit of quantitation sits above the calculated acceptance limit cannot prove a pass. The result reads "less than LOQ" while the surface could still be over the limit. Confirm method sensitivity against the swab acceptance number before execution.

**Hold times not validated.** Running cleaning validation with a same-day clean while the SOP allows a 72-hour dirty-hold, or sampling immediately while production stores cleaned equipment for a week. The validated state has to bracket what production actually does.

---

## What Inspectors Look For

Cleaning validation is a recurring inspection focus, in both FDA and EU inspections, and the requests are predictable. Inspectors ask for:

- The cleaning validation protocol and report, with the swab location maps
- The ADE or PDE monographs and the toxicological assessments behind them
- Swab recovery studies for each analyte and surface material
- Evidence that the worst-case product was correctly identified, with the reasoning
- The current product matrix for the equipment, and proof that newly introduced products were assessed against it
- Cleaning verification records for recent batches, to confirm the floor follows the validated procedure
- Confirmation that the procedure in use matches the validated procedure exactly

Finding 10 ppm limits with no ADE, swab recovery never established, or a potent new compound added to shared equipment without reassessment will draw an observation every time. For how those observations are written up and answered, see [fda inspection readiness](/articles/fda-inspection-readiness) and [the 483 response strategy](/articles/fda-483-response-strategy).

---

## Interview Questions and How to Answer Them

These come up in QA, validation, and manufacturing-science interviews, and the answers reveal quickly whether someone has actually run a cleaning validation or only read about it.

**"Walk me through how you set a cleaning limit."** Start from the ADE of the worst-case previous product, calculate MACO using the next product's batch size and maximum daily dose, divide by total shared product-contact surface area to get a µg/cm² limit, then carry that limit through the swab area, extraction volume, and recovery factor to get the acceptance concentration the lab reports against. Mention that you would cross-check against the legacy 0.1% dose and 10 ppm methods and take the most stringent. The interviewer is checking that you can chain ADE to MACO to surface limit to swab number without hand-waving.

**"What is the difference between ADE and PDE?"** Same concept, different name. ADE is the ISPE and US-practice term, PDE is the EMA term, and they produce the same value from the same toxicological derivation. A single derived value drives the limit in both regions.

**"Which is the worst case, the product that is hardest to clean or the most toxic?"** Both, on different axes. The hardest-to-clean product (poor solubility) defines the cleaning challenge you validate against. The most toxic product (lowest ADE) defines the acceptance limit. Best practice validates the harder soil but applies the tighter limit. Saying "it depends" without separating the two axes is the wrong answer.

**"Why three runs?"** It is the conventional minimum from the 1993 FDA guide and it demonstrates reproducibility, not a single lucky pass. They must be consecutive and at worst-case conditions, and a failure in the middle restarts the count. Add that modern lifecycle thinking treats three runs as the qualification stage, followed by continued verification.

**"How do you handle swab recovery?"** Spike known amounts onto coupons of each contact material, swab with the production technique, extract, and analyze; recovery should be at least 70% and consistent across the range. Correct every reported result by the recovery factor. Recovery below 50% is generally not acceptable. The follow-up they want: you run recovery on every surface material, not just stainless, because elastomers and PTFE recover differently.

**"You add a new, more potent product to a validated shared line. What do you do?"** Trigger a change control, derive its ADE, re-run the worst-case assessment, and very likely revalidate, because a lower-ADE product can drop the acceptance limit below what the existing procedure was shown to achieve. If the compound is highly sensitizing or cytotoxic, escalate the question of whether the line can be shared at all or needs dedication.

**"What is the role of visual inspection?"** A first-pass qualitative gate with defined lighting, distance, and angle, useful because it is immediate, but not the quantitative acceptance criterion. For potent compounds the calculated limit is below the visible threshold, so visual can pass while the surface is over the limit.

---

## Practical Tips

- Pre-calculate the swab acceptance concentration in the units the lab reports and put it in the protocol, so the analyst is comparing apples to apples and not back-converting at disposition.
- Photograph and number every swab location, and keep the map with the report. "We swabbed the worst spots" is not a map.
- Confirm the analytical method LOQ beats the limit before you generate any samples; discovering the method cannot reach the limit after execution wastes the whole study.
- Validate hold times at their maximum, not at convenience. The dirty-hold and clean-hold in the SOP must be the ones you proved.
- For dedicated equipment, do not skip cleaning validation entirely; shift the question to degradant and residue build-up over successive batches of the same product.
- Keep toxicology independent. The person who derives the ADE should not be under pressure from the schedule that needs the limit to be loose.

For the surrounding framework, the [validation deliverables guide](/articles/validation-deliverables-guide) shows where the cleaning validation protocol and report sit among the other validation documents, and [cross-contamination control in shared facilities](/articles/cross-contamination-control-shared-facilities) covers the facility-design and dedication decisions that sit upstream of the cleaning limit.
