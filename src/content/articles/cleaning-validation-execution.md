---
title: "Cleaning Validation Execution: Swab and Rinse Sampling, Recovery Studies, MACO, and TOC"
description: "How to actually run cleaning validation on the floor: sampling location selection, swab and rinse recovery studies, MACO calculation from health-based limits, worst-case grouping, hold times, and TOC versus specific analytical methods."
pubDate: 2026-06-20
tags: ["cleaning validation", "maco", "swab sampling", "recovery study", "toc", "gmp", "process validation", "shared facilities"]
pillar: "quality-assurance"
tier: "Advanced"
---

Cleaning validation is where a lot of programs look fine on paper and fall apart at the bench. The limit derivation is clean. The protocol reads well. Then an inspector asks why a swab was taken at a polished centerline instead of the agitator shaft weld, why the recovery factor is 31 percent and was used anyway, or why the dirty hold time on file is 72 hours when the campaign ran for nine days. The execution detail is what gets a program a finding or a pass.

This article is about that execution layer: choosing sampling points, running swab and rinse recovery studies, turning a health-based exposure limit into a maximum allowable carryover and then a per-swab acceptance number, grouping products and equipment by worst case, establishing dirty and clean hold times, and deciding between total organic carbon and a specific assay. It assumes you already have acceptable daily exposure and permitted daily exposure values, or know where they come from. If you need the limit-setting theory and the regulatory frame, start with [cleaning validation fundamentals](/articles/cleaning-validation-fundamentals) and come back here for the hands-on part.

---

## Regulatory basis: what actually drives the requirement

You need to be able to name the documents, because an inspector will, and because the calculation method you choose has to trace to one of them.

- **21 CFR 211.67 (Equipment cleaning and maintenance)** requires written procedures for cleaning and maintenance, including assignment of responsibility, schedules, methods, equipment, and materials, and inspection of equipment for cleanliness immediately before use. This is the US legal hook. It does not give you a number; it requires that you have validated procedures that produce clean equipment.
- **EU GMP Annex 15 (Qualification and Validation), 2015 revision** is the most prescriptive on cleaning validation execution. It states cleaning validation should confirm the effectiveness of a cleaning procedure, that limits should be based on toxicological evaluation, that the rationale for selecting limits should be documented, and that recovery should be established for both swab and rinse methods. It introduced the expectation that limits move from the old dose and 10 ppm criteria toward health-based limits.
- **EMA Guideline on setting health-based exposure limits (HBEL), EMA/CHMP/CVMP/SWP/169430/2012, effective 2015**, is the source of the permitted daily exposure approach that now underpins maximum allowable carryover for shared facilities. The companion EMA Q&A on implementation clarifies that HBEL apply to all products and that the traditional limits (1/1000 of dose, 10 ppm) can be used as alarm or action levels but are not a substitute for the toxicological assessment.
- **ICH Q3D (Elemental Impurities)** and **ICH M7 (Mutagenic Impurities)** intersect when the residue or a cleaning agent contributes elemental or mutagenic species; for genotoxic compounds the HBEL is derived differently (threshold of toxicological concern logic).
- **PIC/S PI 006** and the **ISPE and PDA technical reports on cleaning validation** are not law but are widely used as the practical method references. Inspectors will accept a defensible method that aligns with these.
- **FDA Guide to Inspections Validation of Cleaning Processes (1993)** is old but still cited by US investigators. It is where the "visually clean is necessary but not sufficient", "no fixed acceptable limit", and "swab the hardest to clean location" expectations come from.

The quality rationale underneath all of this: equipment is shared, so residue of product A, degradants, cleaning agent, and microbial load can carry into product B. For a patient taking product B, that carryover is an uncontrolled, unlabeled exposure. Cleaning validation proves the carryover is below a level that is safe and that the process delivers that result reliably, run after run.

---

## The execution sequence, end to end

Before the detail, here is the order operations actually happen in. Each step feeds the next, and getting them out of order is a common cause of rework.

1. Derive the **HBEL (ADE/PDE)** for each product residue and the toxicological limit for cleaning agents.
2. Build the **product and equipment matrix** and select **worst case** products and **grouped (bracketed)** equipment.
3. Calculate **MACO** and the **maximum safe surface residue (MSSR)**, then convert to a **per-swab** and a **per-rinse** acceptance limit.
4. Select **sampling locations** (hardest to clean) and document the rationale with diagrams.
5. Run the **recovery study** for swab and rinse, per residue, per surface material, to get the **recovery factor**.
6. Set **dirty hold time (DHT)** and **clean hold time (CHT)** ranges to bracket.
7. Write the **protocol**, run **three consecutive successful runs** (or a justified design), sample, analyze.
8. Apply recovery correction, compare to limits, write the **report**, and roll into **continued/ongoing verification or monitoring**.

---

## Step 1: Health-based limits feeding the calculation

You start with two numbers per product that could be a contaminant.

- **ADE or PDE** in mg/day: the amount of a substance a person can be exposed to daily for a lifetime without appreciable health effect. Derived by a toxicologist from a point of departure (NOAEL or LOAEL or a clinical no-effect level) divided by adjustment factors (F1 interspecies, F2 intraindividual, F3 study duration, F4 severity, F5 LOAEL-to-NOAEL). For most non-genotoxic small molecules this is the governing input.
- For **genotoxic or highly sensitizing** compounds, the limit comes from the threshold of toxicological concern or a compound-specific acceptable intake under ICH M7 logic, not a standard PDE.

Roles here: a qualified **toxicologist** (in-house or contracted) writes and signs the HBEL monograph. **QA** reviews and approves it. The validation group consumes the number; they do not invent it. A frequent finding is a cleaning validation that uses an HBEL with no signed toxicology report behind it, or one written by someone without demonstrated competence. The EMA Q&A is explicit that the assessor must be appropriately qualified and experienced.

For deeper treatment of the toxicology and how PDE flows into limits, see [cleaning validation fundamentals](/articles/cleaning-validation-fundamentals). Nitrosamine and mutagenic residue handling connects to [nitrosamines and mutagenic impurities under ICH Q3 and M7](/articles/nitrosamines-impurities-q3-m7).

---

## Step 2: Worst case selection and equipment grouping (bracketing)

You rarely validate every product on every train. You validate the worst case and justify that it represents the family.

### Worst-case product

For a given equipment train, rank products by a difficulty and risk index. Common factors:

- **Solubility** of the active in the cleaning solvent (least soluble is harder to remove).
- **Cleanability** observed at the bench or from history (sticky, tacky, drying residues).
- **Toxicity / lowest HBEL** (smallest ADE drives the tightest MACO).
- **Largest minimum batch size of the next product** and smallest shared surface area (these push MACO down too, depending on the formula).
- **Difficulty of analytical detection** at the required limit.

A defensible approach computes a worst-case rating score that combines low solubility, low ADE, and high difficulty. The product that scores worst becomes the validation target. Document the scoring so the choice is reproducible, not asserted.

### Equipment grouping and bracketing

Annex 15 permits a bracketing or grouping approach where similar equipment is grouped and representative items validated, provided a justification exists. Group by:

- **Material of construction** (316L stainless, glass-lined, PTFE, silicone, Hastelloy). Recovery differs by surface, so different materials usually need their own recovery data.
- **Design complexity** (presence of dead legs, welds, gaskets, mesh, sintered filters, agitator seals).
- **Cleaning method** (automated CIP versus manual versus COP).

The largest and most complex item in a group is the worst case for that group. Example: across five mixing vessels of the same alloy and design differing only in volume, validate the largest, and justify that recovery and cleanability scale. If one vessel has an internal coil the others lack, it is not in the group; it needs its own coverage.

Common mistake: grouping equipment of different materials of construction under one recovery factor. Inspectors catch this because the recovery study cites only one coupon material while the train has several.

---

## Step 3: MACO and per-swab limit calculation

This is the number an inspector will ask you to derive on the spot. Know all the formulas and which one you used and why.

### The health-based MACO (the modern default)

The maximum allowable carryover of product A into the entire next batch of product B:

```
MACO = (ADE_A x MBS_B) / (TDD_B)
```

Where:
- `ADE_A` = acceptable daily exposure of product A, in mg/day
- `MBS_B` = minimum batch size of the next product B, in the same mass unit
- `TDD_B` = largest daily dose of product B, in the same dosage-unit-per-day basis

The units have to cancel so MACO comes out in mass of A allowed in batch B. The intent: even at the largest daily dose of product B, a patient does not receive more than one ADE of product A.

### The traditional criteria (now alarm/action levels, not primary)

- **Dose criterion:** carryover limited so that no more than 1/1000 of the smallest therapeutic dose of A appears in the largest daily dose of B.
- **10 ppm criterion:** no more than 10 ppm of A in B.
- **Visually clean:** always required as an additional limit; never the sole criterion.

Modern practice: compute the HBEL-based MACO and the traditional values, then take the **most conservative (lowest)** as the limit, or use HBEL as the safety limit and the traditional values as tighter internal action levels. Annex 15 and the EMA Q&A drive this.

### From MACO to a per-area and per-swab limit

MACO is for the whole next batch. You sample a small area. Convert.

```
MSSR (maximum safe surface residue, ug/cm2) = MACO / total shared surface area (cm2)
```

```
Swab limit (ug per swab) = MSSR x swabbed area (cm2)
```

Then correct for recovery (Step 5):

```
Acceptance per swab (corrected) = Swab limit / recovery factor
```

In practice many labs apply recovery the other direction (multiply the measured result by 1/recovery to report a recovery-corrected residue, then compare to the uncorrected swab limit). Both are valid if applied consistently; the protocol must state which, and the math must be auditable. Mixing the two conventions is a real source of wrong dispositions.

### Worked example

Assume:
- Product A: ADE = 0.10 mg/day
- Product B: minimum batch size = 50 kg = 50,000,000 mg; largest daily dose = 500 mg/day
- Total shared product-contact surface area of the train = 400,000 cm2
- Swab area = 25 cm2
- Swab recovery factor for A on 316L = 0.72 (72 percent)

Step by step:

| Quantity | Calculation | Result |
|---|---|---|
| MACO (mg of A in batch B) | (0.10 mg/day x 50,000,000 mg) / 500 mg/day | 10,000 mg = 10 g |
| MSSR (ug/cm2) | 10,000 mg / 400,000 cm2 = 0.025 mg/cm2 | 25 ug/cm2 |
| Swab limit (ug/swab) | 25 ug/cm2 x 25 cm2 | 625 ug/swab |
| Recovery-corrected acceptance (ug/swab) | 625 / 0.72 | 868 ug/swab |

Now sanity check against the 10 ppm criterion: 10 ppm of 50 kg batch B = 500 mg = 0.5 g of A allowed. That is tighter than the 10 g health-based MACO, so 10 ppm governs here and you would carry MACO = 0.5 g (and recompute the swab limit down to 31.25 ug/swab, 43.4 ug/swab recovery-corrected). This is exactly the kind of cross-check an inspector wants to see: you did not just take the friendly number.

Always run all three criteria and document why the chosen limit is the most conservative or otherwise justified. A program that only ever shows the HBEL number and never the 10 ppm or dose comparison looks like it cherry-picked.

For the statistical treatment of variability around these results, see [statistics in quality: Cpk and control charts](/articles/statistics-in-quality-cpk-control-charts).

---

## Step 4: Sampling location selection

The single most-cited execution error in cleaning validation is sampling an easy-to-clean location. The FDA cleaning guide and Annex 15 both expect the **hardest-to-clean** locations to be sampled, with a documented rationale.

### How to choose locations

1. Walk the equipment with a **process or equipment SME** and the cleaning procedure in hand. Identify where residue is hardest to remove: welds, gasket grooves, agitator shafts and seals, baffles, spray-ball shadows, dip tubes, valve bodies, transfer line low points, mesh and sintered elements, the meniscus or splash line, threads, and any spot the CIP spray pattern does not directly hit.
2. Mark each candidate on an **equipment diagram or labeled photo**. The diagram is part of the protocol. Number each swab location.
3. Classify each as **direct (swab)** or **indirect / inaccessible (rinse)**. Tight internal geometry and porous surfaces are rinse-sampled; flat accessible surfaces are swabbed.
4. Justify in writing why each chosen location is worst case and why non-sampled areas are represented.

### Swab versus rinse, and why you usually need both

- **Swab** gives a direct, location-specific result with physical and chemical removal action. It is the primary method for accessible hard-to-clean spots. It can dislodge residue that rinse alone leaves behind.
- **Rinse** samples large or inaccessible surface area in one shot (whole vessel, long transfer lines). It detects residue swab cannot reach but can dilute a localized hot spot below detection.

Annex 15 expects recovery to be established for both. Many programs run swab at defined worst-case points plus a final rinse sample for area coverage. That combination is the defensible default.

### Roles

**Validation** designs the sampling plan. **Manufacturing / equipment SME** confirms the worst-case spots are physically correct and reachable. **QC** confirms the analytical method can hit the per-swab limit at those locations. **QA** approves. Trained samplers execute, and sampling technique itself should be qualified (see recovery, below).

---

## Step 5: Recovery studies (the part that gets fumbled)

A swab result is meaningless until you know what fraction of residue the swab actually picks up and the assay actually sees. That fraction is the **recovery factor**. You establish it with a coupon study and apply it to every field result.

### What a recovery study is and why it is required

Annex 15 states recovery should be established for the sampling method on the relevant surfaces. The rationale: a 25 ug/swab reading at 50 percent recovery means roughly 50 ug was actually on the surface. Without the factor you under-report by half and may pass equipment that should fail.

### How to run a swab recovery study

1. Obtain **coupons** of each relevant material of construction (316L stainless 2B or electropolished finish to match equipment, glass, PTFE, etc.). Surface finish matters; match it.
2. Spike coupons with **known amounts of residue** at several levels bracketing the acceptance limit (for example 50 percent, 100 percent, 150 percent of the swab limit), in replicate (commonly triplicate per level).
3. Let the spike **dry** the way real residue dries, so removal difficulty is realistic. Do not swab a wet film.
4. Swab using the **exact technique, swab material, solvent, number of strokes, and pattern** that the field SOP specifies. The recovery study must mirror the field method precisely.
5. Extract and assay the swab. Compute:

```
Recovery (%) = (amount recovered / amount spiked) x 100
```

6. Average across levels and replicates per surface and per residue.

### Acceptance criteria for recovery

There is no single regulatory number, but widely accepted practice:

- **Recovery ≥ 70 to 80 percent**: acceptable, apply the factor.
- **Recovery 50 to 70 percent**: usable but apply the correction factor and justify; investigate whether technique or solvent can improve it.
- **Recovery < 50 percent**: a finding waiting to happen. You must justify scientifically why such low recovery is still adequate (very tight limit margin, conservative correction). Inspectors challenge low recoveries hard, especially when the factor is applied to scrape a passing result.
- **Variability (%RSD)** across replicates should be controlled (commonly ≤ 15 to 20 percent). High variability means the technique is not reproducible across samplers.

### Rinse recovery

Spike a known amount onto a coupon or a representative surface, perform the rinse per the field procedure, collect the rinse, assay, and compute recovery the same way. Rinse recovery also covers the question of whether residue is soluble and mobile enough to come off in the rinse at all. A poorly soluble residue can give a misleadingly low rinse result, which is exactly why swab is kept for hot spots.

### Worked recovery example

Spike level 100 percent = 625 ug on a 25 cm2 316L coupon. Three replicates recover 455, 442, 468 ug.

| Replicate | Recovered (ug) | Recovery (%) |
|---|---|---|
| 1 | 455 | 72.8 |
| 2 | 442 | 70.7 |
| 3 | 468 | 74.9 |
| Mean | | 72.8 |
| %RSD | | ~2.9 |

Recovery factor = 0.728, rounded to 0.72 conservatively (round down so you do not over-credit recovery). %RSD is low, so the technique is reproducible. This 0.72 is the factor used in the Step 3 example.

Common mistakes:
- Establishing recovery on bare clean stainless when the field surface is electropolished or scratched (recovery differs).
- Spiking and swabbing wet, which inflates recovery versus dried real residue.
- One recovery factor applied across multiple materials of construction.
- Sampler technique not qualified, so one tech recovers 75 percent and another 40 percent on the same coupon.
- Applying a recovery correction silently, with no clear convention in the protocol, so the report math cannot be reproduced.

---

## Step 6: Dirty and clean hold times

Hold-time studies establish how long equipment can sit before and after cleaning without compromising the result. These are frequent inspection topics because real operations stretch them.

### Dirty hold time (DHT)

The maximum time from end of manufacturing (equipment soiled) to start of cleaning, during which the cleaning procedure is still proven effective. Residue that dries and ages can become harder to remove and can support microbial growth.

- **How:** soil the equipment (or a coupon representing it) the way a real batch does, hold for the target maximum time (plus a margin), then run the standard cleaning and the standard sampling. Demonstrate the limits are still met after the longest dirty hold.
- **Worst case:** the most difficult residue, the longest realistic delay, the warmest/most humid condition that promotes drying and bioburden.
- **Acceptance:** chemical residue within limits and bioburden within limits after the maximum DHT.

### Clean hold time (CHT)

The maximum time cleaned equipment can be stored before use without re-cleaning, while staying within microbial (and sometimes chemical, for example airborne or rinse-water residue) limits.

- **How:** clean equipment, store it under defined and representative conditions (covered, ports capped, in the actual storage area), and sample (bioburden, endotoxin if injectable, sometimes a rinse) at the target time.
- **Acceptance:** microbial and endotoxin limits met at the maximum CHT. For sterile and aseptic operations this links directly to [environmental monitoring](/articles/environmental-monitoring-program) and bioburden control; see also [bioburden and endotoxin testing](/articles/bioburden-and-endotoxin-testing).

### What goes wrong

- DHT on file is 24 or 48 hours, but campaign manufacturing soils equipment for many days before cleaning, and no campaign-length DHT was validated.
- CHT studies done only at time zero or under ideal storage, then equipment held for weeks uncovered.
- Hold times treated as administrative numbers in an SOP with no underlying study.

Establish hold times as ranges with a justified maximum, validate the maximum, and make sure operations cannot routinely exceed what was validated. If they do, that is a deviation, not a quiet pass. See [deviation management](/articles/deviation-management).

---

## Step 7: Analytical methods (TOC versus specific) and method validation

The method has to detect the residue at the per-swab and per-rinse limits with adequate specificity and sensitivity.

### Total organic carbon (TOC)

TOC measures total carbon in the rinse or swab extract. It is a **non-specific** indicator: it sees the active, degradants, cleaning agent organics, and any organic contaminant together as carbon.

- **Strengths:** fast, sensitive (sub-ppm), good for rinse and swab, ideal when many products share a train and a specific method per product is impractical, strong for detecting cleaning-agent and degradant carbon. Often the workhorse for shared multi-product facilities.
- **Limits:** non-specific, so a TOC pass does not tell you which compound is present, and you must establish the carbon contribution (theoretical carbon content) of your residue to convert a TOC reading to an equivalent mass of active. Background carbon (water, swab blanks, vials) must be controlled and subtracted.
- **Acceptance translation:** convert the active's swab limit to an equivalent TOC value using the carbon fraction of the molecule, then compare. Always run swab and vial blanks.

USP general chapters relevant to the technique include **USP <643> Total Organic Carbon** (the compendial TOC method, primarily for water but the basis labs cite) and **USP <1231> Water for Pharmaceutical Purposes** for the water you rinse and prepare blanks with. Water-system context is in [water system validation USP 1231](/articles/water-system-validation-usp-1231).

### Specific methods (HPLC, UPLC, sometimes UV or ion chromatography)

A specific assay (most often reversed-phase HPLC with UV or MS detection) quantifies a named compound.

- **Strengths:** identifies and quantifies the specific active, separates active from degradant and cleaning agent, defensible when you need to prove a particular residue is below limit (high-potency, genotoxic, or sensitizing compounds).
- **Limits:** slower, one method per analyte, more method-development effort.
- **When required:** high-potency or genotoxic actives where you cannot rely on a lump-carbon pass, or where a regulator expects compound-specific evidence.

Many programs use **TOC as primary for general residue and cleaning agent, plus a specific method for the high-risk active and for conductivity/pH for cleaning-agent rinse-off**. Conductivity is a cheap, in-line confirmation that ionic cleaning agent has been rinsed away.

### Method validation and the detection limit

Whatever method you pick, it must be validated to **ICH Q2(R2) Validation of Analytical Procedures**. The make-or-break parameter for cleaning is **sensitivity**: the limit of quantitation must be at or below the per-swab and per-rinse acceptance limits, with margin. Specificity, linearity across the relevant range, accuracy, and precision are all in scope. Recovery (Step 5) is effectively part of the method's accuracy at the surface. For execution of method validation, see [method validation execution](/articles/method-validation-execution) and [method validation essentials](/articles/method-validation-essentials); the lifecycle frame is [ICH Q14 and Q2(R2) analytical lifecycle](/articles/ich-q14-q2r2-analytical-lifecycle).

Common mistake: a method whose LOQ sits above the acceptance limit, so a "below LOQ" result is reported as a pass when residue could legitimately be over the limit. That is a guaranteed finding.

---

## Step 8: Protocol, runs, and acceptance

### Number of runs

The conventional expectation is **three consecutive successful cleaning runs** to demonstrate reproducibility, consistent with the lifecycle thinking in process validation. A risk-based or continuous-verification justification for a different number is acceptable if argued well and supported by data. Aligning cleaning validation with the broader [process validation lifecycle](/articles/process-validation-lifecycle) and stage-3 monitoring is the modern direction.

### What the protocol contains

- Purpose, scope, the equipment train and the worst-case product/grouping rationale.
- HBEL references and the MACO and per-swab/per-rinse limit derivation, with all formulas and inputs.
- The recovery factors and the recovery study references; the recovery-correction convention stated explicitly.
- Sampling plan: numbered locations on diagrams, swab vs rinse designation, swab area, solvent, technique reference.
- Analytical methods and their validation references; LOQ versus limit.
- DHT and CHT to be challenged.
- Acceptance criteria: visually clean AND chemical residue below corrected limit AND microbial/endotoxin below limit.
- Roles, deviation handling, and the report requirement.

Protocol and report writing conventions are in [writing validation protocols and reports](/articles/writing-validation-protocols-and-reports).

### Acceptance criteria summary

A run passes only if **all** are met:

| Criterion | Requirement |
|---|---|
| Visual | No visible residue on inspection of cleaned, dried equipment |
| Chemical (swab) | Recovery-corrected residue ≤ per-swab limit at every location |
| Chemical (rinse) | Recovery-corrected residue ≤ rinse limit |
| Cleaning agent | Below its toxicological limit; conductivity/pH back to baseline |
| Microbial | Bioburden ≤ limit (and endotoxin ≤ limit for sterile/injectable) |
| Hold times | Limits met after maximum DHT and maximum CHT |

A single location over limit is a failure of the run, investigated as a deviation, not averaged away.

### After validation: maintaining the validated state

Cleaning validation is not a one-time event. Maintain it through:

- **Change control** on any change to product, equipment, cleaning agent, cleaning procedure, or batch size (a new lower-ADE product can break your MACO). See [change control for validated systems](/articles/change-control-validated-systems).
- **Periodic review / ongoing verification**, increasingly via continuous monitoring of cleaning results, aligned with [continued process verification](/articles/continued-process-verification-cpv).
- **Routine monitoring** (for example periodic TOC or conductivity on selected runs) after the formal validation, especially in multi-product facilities.

Cross-contamination control in shared facilities is the larger program this sits inside; see [cross-contamination control in shared facilities](/articles/cross-contamination-control-shared-facilities) and the [Annex 1 contamination control strategy](/articles/annex-1-contamination-control-strategy) for sterile context.

---

## Roles and responsibilities at a glance

| Role | Responsibility |
|---|---|
| Toxicologist | Derives and signs ADE/PDE/HBEL monographs and cleaning-agent limits |
| Validation engineer/scientist | Designs the strategy, worst-case and grouping rationale, MACO and limit calc, sampling plan, protocol and report |
| Manufacturing / equipment SME | Confirms hardest-to-clean locations, executes cleaning, supports DHT/CHT realism |
| QC analytical | Develops and validates the methods, runs samples, establishes recovery, ensures LOQ below limits |
| Qualified samplers | Execute swab/rinse per qualified technique |
| QA | Reviews and approves HBEL, protocol, deviations, report; owns the disposition |
| Site quality / management | Ensures hold times and procedures are followed; owns the validated state through change control |

---

## Common inspection findings (generic patterns)

These recur across published inspection observations and warning letters in this area. None are tied to any specific company.

- Sampling at easy-to-clean locations with no documented worst-case rationale.
- Recovery factors low (often well below 70 percent) and applied to pass equipment, with no justification.
- Recovery study not representative: wrong surface finish, wet spiking, single material of construction for a multi-material train, technique not matching the field SOP.
- Analytical method LOQ above the acceptance limit; "not detected" reported as a pass.
- Limits still based only on the old 1/1000 dose or 10 ppm with no toxicological (HBEL) evaluation, post-2015.
- Dirty hold times far shorter than actual campaign durations; clean hold times never challenged under real storage.
- Cleaning-agent residue ignored entirely (only the active assayed).
- Visual-clean used as the sole criterion.
- Worst-case product or equipment grouping asserted without a scoring rationale, so the inspector cannot see how it was chosen.
- Results averaged across locations to mask a single failing swab.

---

## Interview-ready questions and strong answers

**How do you set the acceptance limit for a residue?** Start from the health-based exposure limit (ADE/PDE) from a signed toxicology assessment, compute MACO using ADE times the minimum next-batch size divided by the largest daily dose of the next product, then also compute the 1/1000 dose and 10 ppm values, take the most conservative, divide by total shared surface area to get a per-area limit, multiply by swab area for the per-swab limit, and correct for recovery. Visually clean is always an additional criterion.

**Why correct for recovery, and what is an acceptable recovery factor?** Because the swab and assay only capture a fraction of what is actually on the surface; without correction you under-report and may pass failing equipment. I want recovery ideally at or above 70 to 80 percent. Below 50 percent I treat as a problem and either improve technique/solvent or justify conservatively. I always round the factor down so I do not over-credit it.

**Why do you swab the hardest-to-clean location?** Because if the worst spot meets the limit, the easier areas do too. Sampling an easy spot proves nothing about whether the procedure actually cleans. The FDA cleaning guide and Annex 15 expect worst-case sampling with a documented rationale on equipment diagrams.

**TOC or HPLC, and when?** TOC for fast, sensitive, non-specific monitoring across multi-product trains and for cleaning-agent and degradant carbon; HPLC or another specific method when I need to prove a named compound, especially high-potency or genotoxic actives where a lump-carbon pass is not enough. Many sites run TOC plus a specific method for the high-risk active, plus conductivity for ionic cleaning agent rinse-off.

**What is the difference between dirty and clean hold time and why validate both?** DHT is the maximum time soiled equipment can wait before cleaning while cleaning is still effective; CHT is how long cleaned equipment can be stored before use while staying within microbial limits. Both are validated because aged residue gets harder to remove and supports microbial growth, and stored clean equipment can re-contaminate. A common failure is a DHT shorter than the real campaign length.

**How many runs and why?** Three consecutive successful runs is the conventional bar for reproducibility, though a risk-based or ongoing-verification design with fewer initial runs and continuous monitoring is acceptable if justified with data.

**Your method's LOQ is above the acceptance limit. What now?** That method cannot be used for release decisions on this residue. A "below LOQ" result does not prove I am under the limit. I improve the method sensitivity (concentration step, better detection, longer path) or change methods until the LOQ sits below the limit with margin.

**A new product is added to the train. What do you check?** Its ADE and dose against the existing worst case. If it has a lower ADE, smaller batch size, or is harder to clean, the MACO and worst-case selection change and cleaning validation may need re-derivation and re-execution. This goes through change control.

---

## Practical tips

- Build the MACO and per-swab limit as a controlled, validated calculation (a verified spreadsheet under [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation)), not a one-off hand calc, so a new product or batch size recomputes everything consistently.
- Photograph and number every sampling location and keep the diagram in the protocol. It ends the "why there" conversation in an audit before it starts.
- State your recovery-correction convention in one sentence in the protocol and use it everywhere. Most disposition errors here are convention confusion, not chemistry.
- Round recovery factors down, round limits the conservative direction. Never let rounding manufacture a pass.
- Validate hold times at or beyond real campaign durations, not at convenient short numbers.
- Always run swab and vial blanks for TOC and subtract background; uncontrolled background carbon is a quiet way to fail or to falsely pass.
- Keep cleaning agent in scope. Assaying only the active is a classic gap.

### Related reading

- [Cleaning validation fundamentals](/articles/cleaning-validation-fundamentals)
- [Cross-contamination control in shared facilities](/articles/cross-contamination-control-shared-facilities)
- [Process validation lifecycle](/articles/process-validation-lifecycle)
- [Continued process verification](/articles/continued-process-verification-cpv)
- [Method validation execution](/articles/method-validation-execution)
- [Equipment qualification lifecycle](/articles/equipment-qualification-lifecycle)
- [Nitrosamines and mutagenic impurities Q3/M7](/articles/nitrosamines-impurities-q3-m7)
- [Environmental monitoring program](/articles/environmental-monitoring-program)
