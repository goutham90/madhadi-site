---
title: "Bioburden and Bacterial Endotoxin Testing: USP <61>/<62> and <85> LAL Methods"
description: "How routine microbial QC supports parenteral release: total counts and specified organisms by USP <61>/<62>, bacterial endotoxin testing by USP <85>, endotoxin limit and MVD calculations, and the LAL methods."
pubDate: 2026-06-20
tags: ["microbiology", "endotoxin", "bioburden", "lal", "sterility", "usp", "qc", "parenterals"]
pillar: "sterility-microbiology"
tier: "Intermediate"
---

Two microbiological numbers gate the release of almost every parenteral product: how many viable organisms are present (bioburden) and how much bacterial endotoxin is present. Neither test proves sterility on its own. Together with the sterility test and the contamination control strategy, they form the evidence a Qualified Person or release-responsible analyst relies on to say a batch is safe to inject. This page covers the compendial chapters behind both tests, the actual procedures, the math that trips people up (endotoxin limits, maximum valid dilution), and the inspection findings that recur in microbiology QC labs.

If you can explain why a positive product control is your single most important LAL control, why bioburden timing matters more than the count itself, and how you would defend an endotoxin limit calculation to an inspector, you understand this topic at the level a release decision demands.

---

## The two questions and why they are separate

Bioburden and endotoxin answer different questions about different hazards.

**Bioburden** is the count of viable, culturable microorganisms in or on a material. It tells you the microbial load entering a process step. For a terminally sterilized product, pre-sterilization bioburden defines the challenge the sterilizing step has to overcome and feeds the sterility assurance calculation. For an aseptically filled product, bioburden of the bulk before filtration defines the load on the sterilizing-grade filter. Bioburden is a living-organism count.

**Bacterial endotoxin** is a measure of lipopolysaccharide (LPS), a structural component of the outer membrane of Gram-negative bacteria. Endotoxin is a pyrogen: injected into the bloodstream it causes fever, and at higher exposure it drives hypotension, disseminated intravascular coagulation, and septic shock. Endotoxin is heat-stable and survives the conditions that kill the organism. A product can be sterile and still fail for endotoxin, because the dead Gram-negative cells left their LPS behind. Endotoxin is a chemical-structure measurement, not a viable count.

Keep the distinction sharp in interviews. Killing organisms removes bioburden but does not remove endotoxin. Removing endotoxin requires depyrogenation (dry heat) or removal/dilution, not sterilization.

---

## Regulatory and compendial basis

The governing documents are compendial chapters and the cGMP regulation that makes them enforceable.

| Reference | Title / scope | What it governs here |
|-----------|---------------|----------------------|
| USP <61> | Microbiological Examination of Nonsterile Products: Microbial Enumeration Tests | Total aerobic microbial count (TAMC) and total combined yeasts/molds count (TYMC) |
| USP <62> | Microbiological Examination of Nonsterile Products: Tests for Specified Microorganisms | Detection of named objectionable organisms (E. coli, Salmonella, P. aeruginosa, S. aureus, etc.) |
| USP <1111> | Microbiological Examination of Nonsterile Products: Acceptance Criteria for Pharmaceutical Preparations | The numeric acceptance limits by dosage form |
| USP <85> | Bacterial Endotoxins Test | The LAL test: gel-clot, turbidimetric, chromogenic methods, limits, MVD |
| USP <1085> | Guidelines on the Endotoxins Test | Supporting guidance, including recombinant reagent considerations |
| USP <151> | Pyrogen Test | The rabbit pyrogen test (RPT), the historical in vivo method |
| USP <71> | Sterility Tests | Related release test, covered separately |
| USP <1227> | Validation of Microbial Recovery from Pharmacopeial Articles | Method suitability / recovery validation basis |
| Ph. Eur. 2.6.12 / 2.6.13 / 2.6.14 | Microbiological enumeration / specified organisms / bacterial endotoxins | European harmonized equivalents |
| Ph. Eur. 2.6.32 | Test for bacterial endotoxins using recombinant factor C | Explicit recombinant reagent monograph |
| USP <1231> | Water for Pharmaceutical Purposes | Endotoxin limits for Water for Injection |

The cGMP hook is **21 CFR 211.167** (special testing requirements), which requires that each batch of a product purporting to be sterile and pyrogen-free be tested by appropriate laboratory methods, and **21 CFR 211.165** (testing and release for distribution). USP <61>, <62>, and <85> are harmonized across USP, Ph. Eur., and JP under the ICH Q4B process, so a method validated to one is generally acceptable to the others, with documented confirmation.

> 21 CFR 211.167(a): "For each batch of drug product purporting to be sterile and/or pyrogen-free, there shall be appropriate laboratory testing to determine conformance to such requirements."

A useful interview line: bioburden and endotoxin testing are not optional add-ons; they are the laboratory evidence 211.167 demands for the "pyrogen-free" claim, and for many products the bioburden data is also the input that justifies the sterilization cycle.

---

## Bioburden: USP <61> microbial enumeration

### What the test produces

USP <61> gives you two numbers per sample:

- **TAMC** (Total Aerobic Microbial Count): viable aerobic bacteria, reported in CFU per gram, per milliliter, or per device/unit, recovered on a general soybean-casein digest agar (TSA, also called SCDA).
- **TYMC** (Total combined Yeasts and Molds Count): viable fungi, recovered on Sabouraud dextrose agar (SDA).

### How to run it, step by step

1. **Choose the recovery method.** Three are described:
   - **Membrane filtration** for filterable liquids. Preferred when the product is antimicrobial, because you filter the organisms onto a membrane and rinse the inhibitory product away before placing the membrane on agar.
   - **Pour plate or spread plate** (plate-count method) for non-inhibitory samples.
   - **Most Probable Number (MPN)** for low counts in difficult matrices; least precise, used only when the other two will not work.

2. **Prepare the sample.** Dissolve, dilute, or suspend in a validated diluent (commonly pH 7.0 phosphate buffer or peptone saline). Neutralize antimicrobial activity if present, using validated neutralizers (lecithin and polysorbate are typical) or dilution.

3. **Plate and incubate.**
   - TAMC on SCDA: 30 to 35 C for 3 to 5 days.
   - TYMC on SDA: 20 to 25 C for 5 to 7 days.

4. **Count and calculate.** Count colonies on plates yielding a countable range (for the plate method, typically not more than 250 colonies for TAMC and not more than 50 for TYMC, on the most appropriate dilution). Multiply by the dilution factor to get CFU per gram or per mL.

5. **Report** TAMC and TYMC against the <1111> acceptance criteria for the route of administration.

### Method suitability (the step people skip and get cited for)

Before the method counts for anything, you must show it can actually recover organisms from your specific product. This is **method suitability testing** (sometimes called the growth-promotion / recovery validation), grounded in USP <61> itself and USP <1227>.

You inoculate the sample preparation with a low number of a panel of challenge organisms, typically NMT 100 CFU, and demonstrate recovery within a factor of 2 of the count obtained from an inoculum control without product. The standard panel:

| Organism | ATCC | Demonstrates |
|----------|------|--------------|
| Staphylococcus aureus | 6538 | Gram-positive bacterial recovery |
| Pseudomonas aeruginosa | 9027 | Gram-negative bacterial recovery |
| Bacillus subtilis | 6633 | Spore-former recovery |
| Candida albicans | 10231 | Yeast recovery |
| Aspergillus brasiliensis | 16404 | Mold recovery |

If recovery is below the factor-of-2 criterion, the product is inhibitory and you must modify the method (increase neutralizer, increase dilution, or switch to membrane filtration with rinsing) and re-validate. Method suitability is product-specific and must be repeated when the formulation or manufacturing process changes materially.

### Worked example, bioburden calculation

A 10 g sample of a topical cream is suspended in diluent to 100 mL (1:10 dilution). 1 mL is pour-plated on SCDA. After incubation, the plate shows 48 colonies.

CFU/g = colonies x dilution factor / sample volume plated
= 48 x 10 / 1 = 480 CFU/g TAMC.

USP <1111> interprets each 10^n limit as a maximum acceptable count on a 2 x 10^n basis: a 10^1 limit means 20 CFU/g, 10^2 means 200 CFU/g, and 10^3 means 2000 CFU/g. So if <1111> sets TAMC NMT 10^2 CFU/g for a topical preparation, a result of 200 CFU/g still passes, 250 CFU/g fails the 10^2 limit, and a count of 480 CFU/g would only meet a 10^3 limit.

### Acceptance criteria, USP <1111>

The limits depend on dosage form and route. Representative values from <1111>:

| Product type | TAMC | TYMC | Specified organism limit |
|--------------|------|------|--------------------------|
| Non-aqueous oral | 10^3 CFU/g or mL | 10^2 CFU/g or mL | Absence of E. coli per g/mL |
| Aqueous oral | 10^2 | 10^1 | Absence of E. coli per g/mL |
| Topical / transdermal | 10^2 | 10^1 | Absence of S. aureus and P. aeruginosa per g/mL |
| Oral aqueous, nasal | 10^2 | 10^1 | Per route, see <62> |
| Vaginal, urethral | 10^2 | 10^1 | Absence of P. aeruginosa, S. aureus, C. albicans |

Sterile products are not tested to <1111>; they are tested by USP <71> sterility and must show no recovery. <1111> applies to nonsterile products and to in-process bioburden where the firm sets its own action/alert limits based on process capability, not <1111>.

---

## USP <62>: tests for specified (objectionable) microorganisms

### What and why

Counting total organisms is not enough. A modest total count can still contain an organism that is dangerous for the product's route of administration. USP <62> provides qualitative tests for named organisms, and the route-specific list in <1111> tells you which ones apply.

The classic specified organisms:

- **Escherichia coli** (fecal contamination indicator, oral products)
- **Salmonella species** (oral products, especially of natural origin)
- **Pseudomonas aeruginosa** (water-borne, opportunistic, topical and inhalation)
- **Staphylococcus aureus** (topical, skin contact)
- **Candida albicans** and **Clostridia** for specific routes
- **Bile-tolerant Gram-negative bacteria** as a broader hygiene indicator

### How it works

Each test is an enrichment followed by selective/differential plating:

1. Pre-incubate the sample in a non-selective enrichment broth (soybean-casein digest broth) to resuscitate stressed organisms.
2. Transfer to a selective enrichment broth (for example, enrichment for Salmonella uses Rappaport Vassiliadis broth).
3. Streak onto selective/differential agar (MacConkey agar for E. coli and bile-tolerant Gram-negatives, cetrimide agar for P. aeruginosa, mannitol salt or Baird-Parker for S. aureus, xylose lysine deoxycholate for Salmonella).
4. Confirm presumptive colonies by identification.

Result is reported as **absence in the specified quantity** (typically 1 g or 1 mL, or 10 g for Salmonella). USP <62> also requires its own suitability test: you spike the product with the target organism and show the method detects it in the presence of product. Negative suitability means the product suppresses growth and the absence result is meaningless.

### Beyond the named list: objectionable organisms

A subtle point inspectors probe: USP <62> names organisms, but **21 CFR 211.113** and the concept of "objectionable organisms" go further. An organism not on the <62> list can still be objectionable if it is pathogenic for the route, can proliferate in the product, or compromises the dosage form. Burkholderia cepacia complex in aqueous, non-sterile products is the textbook example and has driven multiple recalls. The firm's microbiology program must define objectionable organisms by risk assessment, identify recovered isolates to a sufficient taxonomic level, and assess each for objectionability. "It met the <1111> count limit" is not a complete answer if a recovered organism is objectionable for the route.

---

## Bacterial Endotoxin Test (BET): USP <85>

### What endotoxin testing replaced and why

Historically pyrogenicity was assessed by the **rabbit pyrogen test** (USP <151>): inject the product into rabbits, measure fever. The Limulus Amebocyte Lysate (LAL) test, codified in USP <85>, replaced the rabbit test for most products because it is more sensitive, quantitative, faster, cheaper, and avoids animals. LAL detects bacterial endotoxin specifically; the rabbit test detects pyrogens broadly. For most parenterals endotoxin is the pyrogen of concern, so BET is the standard release test, with the rabbit test reserved for products incompatible with LAL or where a non-endotoxin pyrogen is suspected.

LAL is derived from the blood cells (amebocytes) of the horseshoe crab. Endotoxin triggers an enzyme cascade in the lysate that ends in a measurable clot or color change. Modern **recombinant Factor C (rFC)** reagents reproduce the first enzyme of that cascade without harvesting crabs, and are recognized in USP <1085>, Ph. Eur. 2.6.32, and a dedicated USP chapter for recombinant reagents.

### Units and key terms

- **EU** = Endotoxin Unit, the activity unit. Defined against the reference standard endotoxin (RSE) and traceable through control standard endotoxin (CSE).
- **lambda** (the reagent label claim / lysate sensitivity), in EU/mL: the lowest endotoxin concentration that gives a positive result for gel-clot, or the lowest point on the standard curve for photometric methods.
- **MVD** = Maximum Valid Dilution: the greatest dilution at which you can still detect the endotoxin limit.
- **MVC** = Maximum Valid Concentration: the corresponding least dilution / highest product concentration testable.

### The three methods

| Method | Principle | Readout | When used |
|--------|-----------|---------|-----------|
| Gel-clot (Method A/B) | Clot forms when endotoxin exceeds lambda | Pass/fail (limit test) or endpoint titre | Simple, referee method, low throughput, no instrument |
| Turbidimetric (Method C/D) | Endotoxin increases turbidity over time | Quantitative, kinetic or endpoint | Higher throughput, quantitative |
| Chromogenic (Method E/F) | Endotoxin cleaves a chromogenic peptide releasing color | Quantitative, kinetic or endpoint | Quantitative, common automated platform |

Gel-clot is the **referee method**: if a quantitative method result is disputed, USP <85> says the gel-clot result governs. Recombinant Factor C assays are typically read fluorometrically and are quantitative.

### Endotoxin limit calculation

The endotoxin limit is product-specific and route-specific. The formula:

**Endotoxin limit = K / M**

where:
- **K** = the threshold pyrogenic dose of endotoxin per kg of body weight per hour. By convention: **5 EU/kg** for parenteral products (intravenous, intramuscular, subcutaneous), **0.2 EU/kg** for intrathecal products, and **350 EU per device** rinse basis for medical devices (or per the device standard).
- **M** = the maximum recommended human dose per kg of body weight per hour. Use a standard body weight of **70 kg** unless the product is for a defined smaller population.

Worked example, a small-volume injectable:

A drug is dosed at a maximum of 5 mg/kg/hour and the product strength is 10 mg/mL.

1. M (dose) = 5 mg/kg.
2. Endotoxin limit per mg = K / dose = 5 EU/kg / 5 mg/kg = 1.0 EU/mg.
3. Convert to per mL using strength: 1.0 EU/mg x 10 mg/mL = **10 EU/mL** is the endotoxin limit for the product.

For large-volume parenterals (LVPs) administered by volume, the limit is often expressed directly: the compendial limit for LVPs is **0.5 EU/mL**, and Water for Injection per USP <1231> is **0.25 EU/mL**.

### Maximum Valid Dilution (MVD)

You cannot test product neat if it interferes with the reagent, but you also cannot dilute past the point where you would miss the limit. MVD sets the ceiling:

**MVD = (Endotoxin limit x Concentration of product) / lambda**

Worked example continuing from above:

- Endotoxin limit = 10 EU/mL (or 1.0 EU/mg expressed per mg).
- Using the per-mg form: endotoxin limit = 1.0 EU/mg, product concentration = 10 mg/mL.
- lambda of the gel-clot lysate = 0.125 EU/mL.

MVD = (1.0 EU/mg x 10 mg/mL) / 0.125 EU/mL = 10 / 0.125 = **80**.

So you may dilute the product up to 1:80 and still be able to detect the endotoxin limit. Any dilution greater than 1:80 is invalid because endotoxin at the limit would fall below the lysate's detection. You typically test at a dilution at or below MVD that also overcomes interference, often the smallest dilution that passes the inhibition/enhancement test.

### Test validation: inhibition / enhancement (the heart of BET)

Before any BET result is meaningful, you must prove the product itself does not inhibit or enhance the LAL reaction. This is the **interference test** (also positive product control logic), required by USP <85>.

Two controls dominate:

- **Positive Product Control (PPC):** product spiked with a known amount of endotoxin (commonly 2 lambda for gel-clot, or a mid-curve spike for photometric). The PPC must recover within **50 to 200 percent** of the spiked value (for photometric methods). If recovery is outside that window, the product is interfering and the result is invalid.
- **Standard curve / standard series:** for photometric methods, a curve of at least three concentrations with correlation coefficient |r| not less than 0.980. For gel-clot, a confirmation of label lysate sensitivity using a standard series, geometric mean of the endpoint within 0.5 lambda to 2 lambda.

If interference is found, you remove it by dilution (up to MVD), by neutralization, by pH adjustment to 6 to 8, by using endotoxin-specific buffer, or by treating divalent cation effects. You then re-validate.

### Gel-clot procedure, step by step

1. Reconstitute lysate of known lambda. Prepare LAL reagent water (LRW), endotoxin-free.
2. Confirm lysate sensitivity with a standard series (lambda, 2 lambda, 0.5 lambda, 0.25 lambda) in replicates; geometric mean endpoint must be 0.5 lambda to 2 lambda.
3. Prepare product at the chosen dilution (at or below MVD).
4. Set up four tube types: negative control (LRW), positive control (endotoxin at 2 lambda in LRW), product sample, positive product control (product spiked at 2 lambda).
5. Incubate at 37 +/- 1 C for 60 +/- 2 minutes, undisturbed.
6. Invert each tube 180 degrees in one smooth motion. A firm gel that holds when inverted = positive. No gel or a gel that slumps = negative.
7. Interpret:
   - Negative control must be negative.
   - Positive control must be positive.
   - Positive product control must be positive (else product inhibits, test invalid).
   - Sample negative at a dilution within MVD = product passes (endotoxin below limit).

### Kinetic chromogenic / turbidimetric procedure

1. Build a standard curve across the working range (for example 0.005 to 50 EU/mL), |r| >= 0.980.
2. Run negative control (must read below the lowest standard), each sample dilution in replicate, and a PPC for each sample.
3. The instrument reads onset time (kinetic) and back-calculates EU/mL against the curve.
4. PPC recovery 50 to 200 percent confirms no interference.
5. Compare measured EU/mL (corrected for dilution) against the endotoxin limit.

### Worked endotoxin pass/fail example

Measured result for the injectable above, tested at 1:20, kinetic chromogenic: 0.18 EU/mL on the assay.

Corrected for dilution: 0.18 x 20 = 3.6 EU/mL in the undiluted product.

Limit = 10 EU/mL. 3.6 < 10, so the batch **passes** for endotoxin. PPC recovery was 92 percent (within 50 to 200), so the result is valid.

---

## Recombinant Factor C and the animal-reduction shift

rFC reagents reproduce the LAL cascade's first enzyme without harvesting horseshoe crab blood. They are endotoxin-specific (they do not react to beta-glucans, which can cause false positives in LAL), reduce animal use, and are now recognized in USP <1085>, a dedicated USP chapter for recombinant reagents, and Ph. Eur. 2.6.32. As of recent USP revisions, recombinant reagent use no longer requires a full alternative-method comparability submission as an alternative method in the same way it once did, because the chapters now describe these reagents directly. A firm switching to rFC still performs method suitability/validation for its specific products and should document the change through change control with a side-by-side comparability rationale. Expect interviewers to ask whether you have evaluated rFC: the right answer covers specificity (no beta-glucan interference), sustainability, and the validation/change-control work still required.

---

## Sampling, sample handling, and timing

The number you report is only as good as the sample.

- **Bioburden timing matters more than the count.** Pre-sterilization bioburden must be sampled close to the sterilization step (after the last point where the load can change) and tested promptly, because holding a sample lets organisms grow or die and misrepresents the true load at sterilization. Define and validate the maximum hold time and storage condition.
- **Endotoxin can grow in waiting samples.** Gram-negative organisms in a held in-process sample can multiply and release endotoxin, biasing the result high; conversely, endotoxin can adsorb to container surfaces, biasing low. Test promptly or hold under validated conditions.
- **Use endotoxin-free / depyrogenated labware** for BET. Glassware is depyrogenated by dry heat (commonly 250 C for 30 minutes or a validated equivalent achieving a 3-log endotoxin reduction). A single contaminated pipette tip invalidates a run.
- **Representative sampling.** Sampling plans must justify number and location of units per the batch and the risk. For sterile filtration, bioburden of the bulk immediately before the final filter is the key control point.

---

## Roles and responsibilities

| Role | Responsibility |
|------|----------------|
| QC Microbiology analyst | Executes <61>/<62>/<85>, maintains aseptic technique, records raw data, performs counts and inversions, flags atypical results |
| QC Micro supervisor / SME | Owns methods, suitability/validation, lysate qualification, trend review, OOS/atypical triage |
| Microbiologist (identification) | Identifies isolates, assesses objectionability for the route |
| Method validation / analytical | Owns BET interference validation, MVD/limit calculations, standard curve qualification |
| QA | Reviews and approves results, validations, OOS investigations, and release; ensures GMP compliance |
| Manufacturing / process owner | Owns in-process bioburden control points and action on excursions |
| Qualified Person / release-responsible person | Uses bioburden and endotoxin data as part of the batch certification/release decision |
| Reagent / media vendor | Provides certified lysate (stated lambda), media with growth-promotion certificates, RSE/CSE traceability |
| Quality / sterility assurance | Integrates results into the contamination control strategy and sterilization cycle design |

---

## Common mistakes and recurring inspection findings

These are the patterns that show up in citations against micro QC labs. None reference any specific company.

- **No or inadequate method suitability.** Reporting <61>/<62> or BET results on a product never shown to permit recovery / not to interfere. A passing result on an inhibitory product is meaningless. Inspectors check that suitability was done and re-done after formulation changes.
- **Treating the <1111> count limit as the only question.** Recovering an organism, calling it "within limits," and never identifying it. Objectionable-organism assessment (211.113) is a separate obligation. Burkholderia cepacia complex findings in aqueous products are a recurring recall driver.
- **Endotoxin limit / MVD errors.** Using the wrong K (for example 5 EU/kg for an intrathecal product that requires 0.2), wrong body weight, or wrong dose basis. Diluting beyond MVD and reporting a "pass" that could not have detected the limit.
- **Missing or failing positive product control / negative control invalidation ignored.** Releasing on a run where the PPC was out of range, or where the negative control was positive (contaminated reagent water or labware). Both invalidate the run.
- **Inadequate depyrogenation of labware** or no validation of the depyrogenation cycle (no demonstrated 3-log endotoxin reduction).
- **Sample-hold abuse.** Bioburden or endotoxin samples held too long without a validated hold time, so the result does not represent the true in-process state.
- **Invalidating OOS results without scientific justification.** Re-testing a failing bioburden or endotoxin result into compliance without a sound lab-error investigation, or averaging away a failure. OOS handling must follow a defined process.
- **Growth promotion of media not performed or not contemporaneous.** Using media lots whose ability to grow the target panel was never confirmed.
- **Data integrity gaps.** Re-reading gel-clot tubes after the window, manual integration of BET curves without audit trail, deleting "atypical" runs. The same ALCOA+ expectations apply as anywhere in GxP.
- **Confusing sterile vs nonsterile criteria.** Applying <1111> count limits to a product that should be tested by <71> sterility, or vice versa.

---

## Interview questions and strong answers

**Q: What is the difference between bioburden and endotoxin, and can you have one without the other?**
A: Bioburden is a viable count of culturable organisms; endotoxin is LPS from Gram-negative cell walls and a chemical measure. Yes, you can have endotoxin with zero viable count, because killing the organism (or filtering it) leaves the heat-stable LPS behind. That is why sterilization and depyrogenation are different operations.

**Q: Walk me through calculating an endotoxin limit.**
A: Limit = K / M. K is the threshold pyrogenic dose per kg per hour: 5 EU/kg for most parenterals, 0.2 EU/kg for intrathecal. M is the maximum human dose per kg per hour, using 70 kg standard body weight unless a defined population applies. Then express per mL using product strength. I would also state the LVP and WFI fixed limits, 0.5 EU/mL and 0.25 EU/mL.

**Q: What is MVD and why does it matter?**
A: Maximum Valid Dilution is the greatest dilution at which the endotoxin limit is still detectable: MVD = (endotoxin limit x product concentration) / lambda. It matters because you often must dilute to overcome interference, but diluting past MVD means a result at the limit would fall below the reagent's sensitivity, so a "pass" would be meaningless.

**Q: Which is your most important BET control and why?**
A: The positive product control. It proves the product is not masking endotoxin by inhibiting the reaction. A negative sample with a failing PPC is not a pass; it is an invalid test. Recovery must fall within 50 to 200 percent for photometric methods.

**Q: Why is the gel-clot the referee method?**
A: USP <85> designates it as the deciding method when results from different methods conflict. It is the most direct readout of the cascade endpoint and least dependent on instrument calibration.

**Q: What is method suitability for <61> and what panel do you use?**
A: It demonstrates the method recovers organisms from your specific product, within a factor of 2 of the inoculum control, using S. aureus, P. aeruginosa, B. subtilis, C. albicans, and A. brasiliensis at NMT 100 CFU. If recovery fails, the product is inhibitory and you change the method, often to membrane filtration with rinsing.

**Q: An organism is recovered that meets the <1111> count limit. Are you done?**
A: No. I have to identify it and assess whether it is objectionable for the route under 211.113, even if it is below the count limit and not named in <62>. Burkholderia cepacia complex in aqueous non-sterile products is the classic objectionable organism missed this way.

**Q: How would you defend choosing recombinant Factor C?**
A: It is endotoxin-specific (no beta-glucan false positives), reduces animal sourcing, and is recognized in USP <1085>, the recombinant reagent chapter, and Ph. Eur. 2.6.32. I would still perform product-specific method suitability and route the change through change control with comparability data.

**Q: What incubation conditions for TAMC and TYMC?**
A: TAMC on SCDA at 30 to 35 C for 3 to 5 days; TYMC on SDA at 20 to 25 C for 5 to 7 days.

---

## Practical tips

- Calculate K, M, the endotoxin limit, and MVD once per product and lock them in the test method so analysts are not recomputing them per batch. Most release errors here are arithmetic.
- For interference, try dilution first; it is the cleanest fix and you have headroom up to MVD. Reach for divalent-cation buffers, pH adjustment, or endotoxin-specific reagents only when dilution alone will not get you there.
- Treat LAL reagent water as a critical reagent: one positive negative-control and the whole plate is suspect. Log and trend negative-control behavior.
- Keep depyrogenation validation current for any glassware used in BET; a lapsed cycle qualification is an easy finding.
- For bioburden, fix the sampling point and hold time in the procedure, because timing is the variable that most often makes a count unrepresentative.
- Build a microbial identification and objectionability decision tree so analysts know exactly when an isolate must be identified and escalated.
- Trend counts and endotoxin over time, not just pass/fail; a rising trend within limits is an early warning the contamination control strategy should catch before a failure.

---

## Related reading

- [Sterility Testing (USP <71>)](/articles/sterility-testing-usp-71)
- [Aseptic Processing and Media Fills](/articles/aseptic-processing-and-media-fills)
- [Depyrogenation and Dry Heat Sterilization](/articles/depyrogenation-dry-heat-sterilization)
- [Environmental Monitoring Program](/articles/environmental-monitoring-program)
- [Microbial ID and EM Excursions](/articles/microbial-id-and-em-excursions)
- [Water System Validation (USP <1231>)](/articles/water-system-validation-usp-1231)
- [Compendial Method Verification](/articles/compendial-method-verification)
- [OOS Investigation Process](/articles/oos-investigation-process)
- [Annex 1 Contamination Control Strategy](/articles/annex-1-contamination-control-strategy)
- [Container Closure Integrity Testing](/articles/container-closure-integrity-testing)
- [Sterilization Validation (Moist Heat)](/articles/sterilization-validation-moist-heat)
- [Visual Inspection of Injectables (USP <790>)](/articles/visual-inspection-injectables-usp-790)
