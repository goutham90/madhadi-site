---
title: "Extractables and Leachables: Assessing What Migrates Into a Product"
description: "A working account of extractables and leachables: why they matter, how to design controlled extraction and leachable studies, the USP chapters and ISO standards that govern them, safety thresholds like the SCT and AET, single-use systems, and the findings that recur in review and inspection."
pubDate: 2026-06-21
tags: ["extractables", "leachables", "container closure", "single-use systems", "USP 1663", "ISO 10993", "biocompatibility"]
pillar: "quality-assurance"
tier: "Advanced"
---

Every drug product, biologic, and many devices spend their life in contact with materials that are not the product: glass, rubber, plastic, adhesives, inks, tubing, filters, and coatings. Those materials are not inert. Under the right conditions they release chemicals into whatever they touch. When that chemical ends up in a patient, it becomes a safety and quality problem regardless of how clean the drug substance itself was. Extractables and leachables, usually shortened to E&L, is the discipline of finding those chemicals, deciding which ones matter, and proving the product is safe to use anyway.

This article covers what extractables and leachables are and how they differ, how risk scales with route of administration, how to design and run controlled extraction and leachable studies, the USP chapters and ISO standards that govern the work, the safety thresholds that decide what you have to chase, the single-use-system version of the problem in biomanufacturing, and the recurring findings. The aim is that after reading it you can scope an E&L program, read or challenge a study report, and answer the questions a reviewer or interviewer will ask.

## Extractables versus leachables

The two words name two different studies with two different purposes, and confusing them is a classic error.

**Extractables** are chemical species that can be pulled out of a material under exaggerated or forced conditions: aggressive solvents of varying polarity, elevated temperature, extended time, sometimes pH extremes or sonication. An extractables study is a worst-case survey. It asks: what is the full population of chemicals this material could possibly give up? You run it to characterize the material and to build a list of compounds to watch for later.

**Leachables** are the chemical species that actually migrate into the drug product (or the simulated product) under real conditions of manufacture, storage, and use, over the real shelf life. A leachables study is the real-world measurement. It asks: of everything that could come out, what actually does, at what level, in this formulation, in this container, over this time?

The logical relationship is that leachables are normally a subset of extractables. The extractables study casts the wide net so the leachables study knows what to look for and can confirm that nothing unexpected appears. A well-run program uses extractables data to set the analytical methods and the target compound list for the leachables study, then runs leachables on stability through the labeled shelf life.

> A useful mental model: extractables are what the material can give up when you attack it; leachables are what it actually gives up when you leave the product sitting in it on the shelf.

## Risk scales with route of administration

You do not run the same depth of E&L work on a tablet bottle as on a metered-dose inhaler. The risk, and therefore the rigor, scales with how directly the leachable reaches the patient and how much contact the product has with the packaging. FDA's container closure guidance and the USP framework rank routes roughly as follows, highest concern first:

| Concern level | Dosage form examples | Why |
|---|---|---|
| Highest | Inhalation aerosols and solutions (OINDP), injectables and other parenterals, sterile powders for injection | Direct delivery to lung or bloodstream; little or no first-pass metabolism; intimate, often liquid, contact with the container and delivery device. |
| High to medium | Ophthalmics, transdermal patches, nasal sprays, large-volume parenterals | Direct delivery to the eye, or sustained contact and absorption that bypasses much of the gut. |
| Lower | Oral solutions and suspensions, topical solutions | Some protective metabolism; less critical exposure. |
| Lowest | Oral solid dosage forms, topical powders | Minimal contact, protective barriers, lower bioavailability of incidental contaminants. |

Two factors combine into the ranking: the **degree of contact** between product and packaging (liquid in intimate contact is worse than a dry solid) and the **route of administration** (lung, blood, and eye are less forgiving than the gut). A liquid injectable in a prefilled syringe with an elastomeric plunger is near the top on both axes, which is why parenteral and inhalation products carry the most demanding E&L expectations.

## The governing standards

E&L sits across pharmacopeial chapters, device standards, and industry recommendations. You need to know which applies to what.

### USP chapters (pharmaceutical packaging and delivery)

- **USP <1663>, Assessment of Extractables Associated with Pharmaceutical Packaging and Delivery Systems.** The framework chapter for designing and interpreting an extractables study. It is informational (the <1000-series numbering signals informational, not mandatory), but it is the reference reviewers expect you to have followed.
- **USP <1664>, Assessment of Drug Product Leachables Associated with Pharmaceutical Packaging and Delivery Systems.** The companion framework for leachables studies, including how to use extractables data to design the leachables program and how to assess results.
- **USP <661.1>, Plastic Materials of Construction**, and **USP <661.2>, Plastic Packaging Systems for Pharmaceutical Use.** These became official on 1 December 2025 and restructure how plastics are qualified. <661.1> evaluates the material (the resin and its additives) and <661.2> evaluates the assembled packaging system. The intended logic is tiered: characterize the material under <661.1>, assess the packaging system for extractables with reference to <1663>, then test the packaged product for leachables with reference to <1664>. The parent chapter <661> was revised in parallel and became official 1 February 2026; it no longer carries the old test methods and acceptance criteria (those moved into <661.1> and <661.2>), so do not cite legacy <661> test methods after that date.
- **USP <381> Elastomeric Closures for Injections**, **<660> Glass Containers**, and **<671> Packaging and Storage Requirements** cover specific material classes and performance testing.
- **USP <87> Biological Reactivity Tests, In Vitro** and **<88> Biological Reactivity Tests, In Vivo** assess the biological response to plastics and elastomers, complementing the chemical characterization.

### Device standards

For medical devices and the device constituent of a combination product, the biocompatibility framework is the ISO 10993 series:

- **ISO 10993-18, Chemical characterization of medical device materials within a risk management process.** The device analogue of an extractables study: identify and quantify the chemical constituents that could be released, as the input to a toxicological risk assessment.
- **ISO 10993-17, Toxicological risk assessment of medical device constituents.** Takes the chemical characterization output and derives whether the identified constituents are tolerable, using exposure-based limits. The second edition, ISO 10993-17:2023, replaced the single allowable-limit method of the 2002 version with a screening-first approach built on the Toxicological Screening Limit, described below.
- The broader ISO 10993-1 risk-based framework decides which biological endpoints and chemical work are needed for a given device based on contact type and duration.

### The 2023 revision of ISO 10993-17 (a transition closing in 2026)

The device side of E&L changed materially in 2023 and the transition window is nearly shut, so this is worth knowing exactly. ISO 10993-17:2023 (the second edition) introduced a screening-first method built on the **Toxicological Screening Limit (TSL)**: a cumulative-exposure dose below which an identified constituent is of negligible toxicological concern and needs no further assessment. The standard sets two TSLs by contact duration, 120 micrograms cumulative for short-term exposure (up to and including 30 days, which covers limited contact under 24 hours) and 600 micrograms cumulative for long-term exposure (over 30 days). A constituent whose estimated exposure is below the applicable TSL is screened out. One above it moves to a full toxicological risk assessment, where you estimate a worst-case exposure dose using either experimental release kinetics from the leachables study or assumed (conservative) release kinetics.

FDA recognized ISO 10993-17:2023 in part on 18 December 2023 and set a transition: declarations of conformity to the 2002 first edition are accepted only until **20 December 2026**, after which the 2023 edition is the recognized version. If you run device-constituent toxicology, move to the 2023 method and its TSL and release-kinetics vocabulary now; an assessment written to the withdrawn first edition will be questioned after that date.

A combination product (see [Combination Products and 21 CFR Part 4](/articles/combination-products-cgmp-part-4)) often has to satisfy both the USP pharmaceutical framework for its drug-contact path and the ISO 10993 framework for the device constituent's patient-contact path. The chemical characterization work can sometimes be shared, but the assessment criteria differ.

### Related but distinct: elemental impurities

E&L work focuses largely on organic compounds that migrate from polymers, rubber, and adhesives: antioxidants, plasticizers, vulcanizing agents, oligomers, and their degradants. Inorganic and metal impurities are governed separately by ICH Q3D Elemental Impurities, which uses permitted daily exposure (PDE) limits by route. A complete container-closure risk picture covers both: organics through E&L and metals through Q3D. The analytical methods overlap (ICP-MS handles the metals), but the frameworks and limits are different.

## Safety thresholds: deciding what you have to chase

The hardest conceptual part of E&L is that you cannot identify and toxicologically qualify every trace peak in a chromatogram. You need defensible thresholds that say "below this, do not worry; above this, identify and assess." The PQRI (Product Quality Research Institute) recommendations, developed first for orally inhaled and nasal drug products (OINDP), give the standard vocabulary.

- **Safety Concern Threshold (SCT).** The level below which a leachable presents such a low dose that it is of negligible safety concern from carcinogenic and non-carcinogenic effects, so it needs no further toxicological evaluation. For OINDP, PQRI set the SCT at **0.15 micrograms per day** total daily intake for an individual organic leachable.
- **Qualification Threshold (QT).** The level above which a leachable should be toxicologically qualified. PQRI set the OINDP QT at **5 micrograms per day**. Between the SCT and the QT, the compound is identified and a structure-based safety evaluation is performed.
- **Analytical Evaluation Threshold (AET).** The SCT is a safety number; the AET converts it into the analytical level at and above which compounds must be reported and identified in a specific product. The AET accounts for the product's daily dose and the uncertainty of the analytical method. It is an **identification threshold, not a safety or acceptance limit**: it tells the analyst where to start looking, not whether a compound is safe.

The key relationships: you calculate a product-specific AET from the SCT and the dosing, you identify every compound at or above the AET, you compare each identified leachable's exposure to the SCT and QT, and you toxicologically qualify anything that warrants it. Genotoxic or carcinogenic-class compounds (for example, certain nitrosamines or PAHs) override the generic thresholds and are controlled to much lower, hazard-specific limits.

Parenteral and ophthalmic products (PODP) have their own PQRI-derived threshold work with different numbers reflecting the different exposure, so do not reuse the OINDP SCT of 0.15 micrograms per day for an injectable without checking the applicable PODP recommendation and the product's actual exposure.

### A worked AET calculation

The AET is the number analysts actually work to, so it is worth seeing the arithmetic. Take an orally inhaled product dosed at 2 actuations twice a day, 4 actuations per day, and use the OINDP SCT of 0.15 micrograms per day.

1. **Start from the SCT.** 0.15 micrograms per day is the total daily intake below which an organic leachable needs no toxicological evaluation.
2. **Divide by the number of dose units per day** to get the allowed amount per actuation: 0.15 micrograms per day divided by 4 actuations per day = 0.0375 micrograms per actuation. This is the estimated AET expressed per dose unit.
3. **Convert to the analytical basis.** If the method extracts and analyzes one actuation in a known solvent volume, express 0.0375 micrograms per actuation as a concentration in the test solution so it can be compared to chromatographic responses.
4. **Apply the analytical uncertainty (response-factor) correction.** Because different compounds give different detector responses and many are semi-quantified against a single surrogate, the estimated AET is reduced by an uncertainty factor to a conservative final AET. The correction uses the variability of relative response factors across the calibration set; where response-factor data are limited, a common conservative default is to set the final AET at 50 percent of the estimated AET. Here that gives a final AET of about 0.019 micrograms per actuation.
5. **Report and identify at or above the final AET.** Every peak at or above 0.019 micrograms per actuation is reported, identified, and its daily exposure compared to the SCT and QT.

Two cautions. The AET scales inversely with daily dose: a higher-dose product drives a lower per-unit AET and a longer identification list. And the AET is an identification trigger, not a safety limit, so a compound below the AET is not "safe," it is below the level you are required to chase by default; known genotoxic classes are controlled to hazard-specific limits regardless of the AET.

### Disposition: what to do with each identified leachable

Once a leachable is identified at or above the AET, a short decision path tells you how far to take it:

1. Is the compound a known genotoxic, carcinogenic, or otherwise hazard-classified species (for example an N-nitrosamine, a PAH, a known mutagen)? If yes, control it to its compound-specific limit (for nitrosamines, the acceptable intake under ICH M7 and the nitrosamine guidances), regardless of the generic thresholds. If no, continue.
2. Is the estimated daily exposure below the SCT for the route? If yes, no further toxicological evaluation is needed; record the conclusion. If no, continue.
3. Is the exposure between the SCT and the QT? If yes, identify the compound firmly and perform a structure-based safety evaluation. If the exposure is at or above the QT, perform a full toxicological qualification, which may need compound-specific data.
4. Does any identified leachable exceed its qualified safe level? If yes, it is a result that has to be controlled: change the material, change the process, tighten the specification, or justify and qualify a higher limit with data.

Document the path taken for each compound. The output is a written safety conclusion that the product is acceptable with respect to leachables for the labeled shelf life and route. See [Nitrosamine Impurities and ICH M7](/articles/nitrosamines-impurities-q3-m7) for the genotoxic-impurity branch.

## Designing a controlled extraction study

A controlled (or "exaggerated") extraction study is the workhorse extractables experiment. Design choices to get right:

1. **Select the materials and the worst case.** List every product-contact material in the container closure or delivery system: vial glass, elastomeric stopper, aluminum seal, syringe barrel, plunger, needle shield, tubing, filter membrane. Prioritize by contact and criticality. Often you study the highest-risk components individually and the assembled system.
2. **Choose solvents that bracket polarity.** Use multiple extraction media spanning nonpolar to polar (for example a nonpolar solvent, a mid-polarity alcohol-water mix, and an aqueous medium near the formulation pH). The point is to mobilize chemically diverse extractables, not to mimic the drug. Where justified, the actual formulation or a simulating solvent is also used.
3. **Set exaggerated but realistic conditions.** Elevated temperature, extended time, and defined surface-area-to-volume ratio, calibrated so the study is a credible worst case relative to manufacturing and shelf life without creating artifacts that would never occur in reality.
4. **Use orthogonal analytics.** No single technique sees everything. A typical panel:
   - **GC-MS** with headspace for volatiles and direct injection for semivolatiles.
   - **LC-MS or HPLC with diode-array and high-resolution MS** for nonvolatile organics.
   - **ICP-MS** for elemental and metal extractables.
5. **Identify and semi-quantify against the AET.** Report and identify every extractable at or above the study AET, assign structures with the MS data and reference libraries, and carry the list forward as the leachables target list.

| Study attribute | Extractables (controlled extraction) | Leachables (simulated/real use) |
|---|---|---|
| Conditions | Exaggerated: aggressive solvents, heat, time | Actual: formulation, real storage, real shelf life |
| Purpose | Characterize the material, build the target list | Confirm what actually migrates and at what level |
| Solvent | Multiple media bracketing polarity | The drug product or a close simulant |
| Timing in program | Early, during material and system selection | On stability, through the labeled expiry |
| Output | Population of possible compounds vs. AET | Actual leachable profile vs. SCT/QT |

## Designing the leachables study

The leachables study is run on the actual product (or a validated simulant) stored under the real, ICH-aligned stability conditions and orientations, with samples pulled across the shelf life. Tie it to the stability program so leachables pulls align with stability pulls. See [Stability Programs and ICH Q1](/articles/stability-programs-ich). The methods are usually targeted at the compounds the extractables study flagged, with a non-targeted screen to catch anything unexpected. Orientation matters for liquids in contact with the closure: store inverted or on the side if that is how the product can sit, so the formulation contacts the elastomer. Each leachable found is compared to the SCT and QT and qualified as needed.

## Single-use systems: the biomanufacturing version

Biologics manufacturing has largely moved to single-use systems: polymer bags, tubing, connectors, filters, and sensors that contact the product or process intermediate during manufacture rather than in the final container. These introduce process leachables. A leachable from a bioreactor bag or a filter can carry through into the drug substance even though it never touched the final vial.

Two industry efforts standardize this work so manufacturers do not each demand bespoke studies from suppliers:

- **BioPhorum (formerly BPOG) standardized extractables protocol**, which defines common extraction conditions and reporting so a supplier can characterize a component once and many users can rely on it.
- **BPSA (Bio-Process Systems Alliance)** guidance on extractables and leachables for single-use systems.

The practical approach: rely on supplier extractables data generated to the standardized protocol for component qualification, then perform a process-specific risk assessment and, where the risk assessment warrants, a confirmatory process leachables study on your actual process train. The risk assessment weighs contact time, temperature, surface area, the process step (early upstream contact is diluted and purified away; late contact near the drug substance is not), and any subsequent purification that would clear a leachable. See [Process Validation for Biologics](/articles/process-validation-for-biologics) and [Supplier and Vendor Qualification](/articles/supplier-vendor-qualification).

## Acceptance criteria: what good looks like

- A documented material inventory of every product-contact material, risk-ranked by contact and route.
- A controlled extraction study with justified solvents, conditions, and surface-area-to-volume ratio, using orthogonal analytics (GC-MS, LC-MS, ICP-MS), with a calculated, product-specific AET.
- Every extractable and leachable at or above the AET identified, with structures supported by the data.
- A leachables study on the real product on stability, through the labeled shelf life, in the correct orientation, tied to the stability protocol.
- Each identified leachable compared to the SCT and QT (or the hazard-specific limit for genotoxic classes), with a toxicological assessment for anything that needs it.
- A written safety conclusion that the product is safe with respect to leachables for the labeled shelf life and route.
- For single-use systems, supplier extractables data to a recognized standardized protocol plus a process-specific risk assessment and, where warranted, a confirmatory process leachables study.

## Common review and inspection mistakes

- **Confusing extractables with leachables.** Submitting a controlled extraction study and calling the product qualified, with no leachables study on the actual product over shelf life. The extractables study alone does not prove patient safety.
- **Wrong threshold for the route.** Reusing the OINDP SCT of 0.15 micrograms per day for a parenteral without checking the applicable PODP recommendation and the real exposure, or ignoring that genotoxic-class compounds need hazard-specific limits far below the generic thresholds.
- **AET treated as a safety limit.** Reporting "all leachables below the AET" as if that proved safety. The AET is an identification threshold; safety is judged against the SCT, QT, and compound-specific toxicology.
- **Thin analytics.** Relying on a single technique (often only GC-MS) and missing nonvolatile organics or metals, so the extractables picture is incomplete and the leachables target list is wrong.
- **No leachables on stability in the right orientation.** Liquid products stored upright when they can sit inverted, so the formulation never contacts the elastomer and the study understates the real leachable load.
- **Single-use leachables ignored.** Treating process contact materials as out of scope because they are not the final container, with no process leachables risk assessment.
- **Stale data after a change.** A resin supplier change, a sterilization method change (gamma versus EO alters the extractable profile), or a new molding site, pushed through without re-evaluating E&L. See [Change Control for Validated Systems](/articles/change-control-validated-systems).

## Roles and responsibilities

| Role | E&L responsibility |
|---|---|
| Analytical / E&L chemistry | Designs and runs the extraction and leachables studies, identifies compounds, calculates the AET, writes the analytical report. |
| Toxicology | Performs the safety assessment of identified leachables against SCT, QT, and hazard-specific limits, and writes the safety conclusion. |
| Packaging / device engineering | Owns the material selection, the contact-material inventory, and supplier specifications for components. |
| Quality / regulatory | Owns the overall strategy, the risk assessment, the link to stability and change control, and the submission narrative. |
| Supplier quality | Obtains and assesses supplier extractables data for single-use and packaging components. |

## Interview angle

**"What is the difference between extractables and leachables?"**
Extractables are everything a material can release under exaggerated conditions (aggressive solvents, heat, time): a worst-case survey to characterize the material. Leachables are what actually migrates into the real product under real storage and use over the shelf life. Leachables are normally a subset of extractables, and the extractables study is used to design the leachables study.

**"Why does route of administration drive how much E&L work you do?"**
Risk scales with degree of product-packaging contact and how directly the leachable reaches the patient. Inhalation and injectable products are the highest concern because of intimate contact and direct delivery to lung or blood, with ophthalmic products close behind for direct delivery to the eye. Oral solids are lowest. The depth of the program follows that ranking.

**"What is the AET and how does it relate to the SCT?"**
The SCT is a safety threshold, the daily intake below which an organic leachable needs no further toxicological evaluation (0.15 micrograms per day for OINDP per PQRI). The AET is the analytical translation of the SCT for a specific product and method: the level at and above which you must report and identify compounds. The AET is an identification threshold, not a safety limit; safety is judged against the SCT, the QT, and compound-specific toxicology.

**"How do single-use systems change the problem?"**
They add process leachables from bags, tubing, filters, and connectors that contact the product during manufacture. You rely on supplier extractables data generated to a standardized protocol (BioPhorum/BPSA), then do a process-specific risk assessment weighing contact time, temperature, surface area, and downstream purification, and run a confirmatory process leachables study where the risk warrants it.

**"What standards govern E&L?"**
For pharmaceutical packaging and delivery: USP <1663> (extractables) and <1664> (leachables), with <661.1> and <661.2> for plastics, and <87>/<88> for biological reactivity. For devices: ISO 10993-18 for chemical characterization and 10993-17 for the toxicological risk assessment. Elemental impurities are handled separately under ICH Q3D.

## Key takeaways

- Extractables characterize what a material can release under forced conditions; leachables measure what actually migrates into the real product over its shelf life.
- E&L rigor scales with product-packaging contact and route of administration; inhalation and injectable products carry the heaviest expectations, with ophthalmic products close behind.
- Use orthogonal analytics (GC-MS, LC-MS, ICP-MS) so the extractables picture is complete and the leachables target list is right.
- The SCT is a safety threshold; the AET is an identification threshold derived from it. Do not confuse them, and do not reuse the OINDP SCT for other routes without checking.
- Single-use systems add process leachables; qualify components with standardized supplier data plus a process-specific risk assessment.
- Re-evaluate E&L whenever a material, supplier, sterilization method, or molding site changes.

For related material, see [Container Closure Integrity Testing](/articles/container-closure-integrity-testing), [Stability Programs and ICH Q1](/articles/stability-programs-ich), [Nitrosamine Impurities and ICH M7](/articles/nitrosamines-impurities-q3-m7), and [Combination Products and 21 CFR Part 4](/articles/combination-products-cgmp-part-4).
