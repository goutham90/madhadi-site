---
title: "Cross-Contamination Control in Shared Facilities: Dedicated Equipment, Campaigning, and HBELs"
description: "How to control cross-contamination in multi-product GMP facilities using health-based exposure limits, equipment dedication decisions, campaign production, and the EMA criteria for when a dedicated facility is required."
pubDate: 2026-06-20
tags: ["cross-contamination", "shared-facilities", "hbel", "cleaning-validation", "quality-risk-management", "annex-1", "ich-q9"]
pillar: "quality-assurance"
tier: "Intermediate"
---

Most sites do not make one product in one building. They make several products on shared equipment, in shared rooms, sharing HVAC, sharing operators, sharing change parts. The moment two products move through the same space, you carry a risk that residue or particulate from product A ends up in product B. Cross-contamination control is the set of facility-level, organizational, and technical decisions that keep that carry-over below a level that could harm a patient.

This is not the same job as cleaning validation, although the two are joined at the hip. Cleaning validation proves a cleaning procedure removes residue to a defined limit. Cross-contamination control is the higher-level question: given everything we make here, what limits do we need, which products can safely share equipment at all, which need dedication, when do we run campaigns, and how do we prove the whole strategy holds together. The limit you validate cleaning against comes from this analysis. Get the strategy wrong and a perfectly executed cleaning validation still protects the wrong number.

The regulatory center of gravity shifted around 2015 when the EMA and the PIC/S regulators rewrote EU GMP Chapters 3 and 5 and issued the health-based exposure limit guideline. That moved the field away from the old fixed defaults (1/1000 of a therapeutic dose, 10 ppm) toward toxicology-derived limits and a formal, documented decision on dedicated versus shared facilities. If you work in a multi-product site, this is the framework an inspector expects you to know.

---

## The regulatory basis you must be able to cite

Know these by name, number, and what each one actually requires. Inspectors test for an understanding of the hierarchy, not just the ability to recite titles.

**EU GMP Chapter 3 (Premises and Equipment) and Chapter 5 (Production), 2015 revision.** These are the operative requirements for shared facilities in the EU/PIC/S system. Chapter 3 §3.6 and Chapter 5 §5.20 require that cross-contamination be prevented for all products, using a quality risk management process that includes a potency and toxicological evaluation to assess and control risks, and that the outcome of that evaluation (the HBEL) be used to decide whether dedicated facilities are needed. The revised text deliberately removed the blanket requirement to dedicate facilities for certain product classes and replaced it with a risk-and-toxicology-based decision. Effective March 2015.

**EMA Guideline on setting health-based exposure limits for use in risk identification in the manufacture of different medicinal products in shared facilities (EMA/CHMP/CVMP/SWP/169430/2012), effective 1 June 2015.** This is the HBEL guideline. It defines the Permitted Daily Exposure (PDE) approach, formerly called Acceptable Daily Exposure (ADE), and tells you how to derive a substance-specific limit from toxicology data. It is the source document for how the number is built.

**EMA Questions and Answers on implementation of risk-based prevention of cross-contamination in production and "Guideline on setting health-based exposure limits..." (EMA/CHMP/CVMP/SWP/246844/2018), April 2018.** This Q&A is where the practical detail lives. Question 1 states plainly that HBELs should be established for all medicinal products, with no carve-out for low-hazard products. It also covers who is qualified to derive an HBEL, how the 1/1000-dose and 10 ppm defaults can still serve as cleaning alert limits going forward, and how HBELs feed cleaning limits. If you only read one supporting document, read this one.

**EU GMP Annex 1 (Manufacture of Sterile Medicinal Products), 2022 revision, effective 25 August 2023 (with the lyophilizer provision effective 25 August 2024).** Annex 1 requires a Contamination Control Strategy (CCS) and frames cross-contamination as one element of overall contamination control. For sterile and shared sterile facilities, your cross-contamination program is a subsection of the CCS, not a standalone document floating on its own.

**ICH Q9(R1) Quality Risk Management.** The QRM engine behind every dedication and campaigning decision. The R1 revision reached Step 4 in December 2022 (published January 2023), with EU implementation in July 2023 and FDA final guidance in 2023. It added explicit treatment of subjectivity, formality of risk management, and risk-based decision making, all directly relevant to defending a "shared is acceptable" conclusion.

**ICH Q7 Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients.** For API manufacture, Q7 §5.2 covers equipment maintenance, campaign production, and cleaning between products, while Q7 §4.4 (Containment) addresses dedicated production areas. Together they are the API-side analog to Chapter 5.

**US cGMP, 21 CFR 211.42(c), 211.46, 211.176, and 211.67.** The US regulations do not use the HBEL vocabulary, but 211.42(c) (separate or defined areas to prevent contamination), 211.46 (air handling and the requirement to dedicate air systems for certain products such as penicillin), 211.176 (penicillin contamination testing), and 211.67 (equipment cleaning) carry the same obligations. The FDA expects scientifically justified limits; in practice many US sites use HBEL-derived limits even though the term is not in the CFR.

> EU GMP Chapter 5, §5.19 (paraphrased): cross-contamination is prevented first through the design of premises and equipment under Chapter 3, then reinforced by process design and by whatever technical and organizational measures the risk calls for, including cleaning processes that are effective and reproducible.

The mental model: ICH Q9 is the method, the HBEL guideline gives you the number, Chapters 3 and 5 (or 211.42/211.67, or Q7 §5) impose the obligation, and Annex 1 wraps it into the CCS for sterile sites.

---

## Health-based exposure limits: where the number comes from

Everything downstream depends on the HBEL. Set it wrong and your cleaning limits, your dedication decisions, and your shared-facility justification are all built on sand.

### What a PDE is and why it replaced the old defaults

The Permitted Daily Exposure is the maximum amount of a substance a person can be exposed to every day, for a lifetime, with no appreciable adverse health effect. It is expressed in mass per day, typically mg/day or µg/day. It is product specific and derived from toxicology, not from the dose.

The old defaults were the 1/1000th minimum therapeutic dose rule and the 10 ppm rule. They were convenient but not health based. A potent compound with a tiny therapeutic dose could still carry over a toxicologically meaningful amount at 1/1000 of dose, and 10 ppm had no biological meaning at all. The 2015 framework requires a toxicological evaluation. The 2018 Q&A (Question 1) is unambiguous: HBELs should be established for all medicinal products, with no low-hazard exemption. The 1/1000-dose and 10 ppm defaults are no longer acceptable as the toxicological basis. Per Question 6, a historically used cleaning limit may be retained only as a cleaning alert limit where, accounting for cleaning process capability, it reliably prevents excursions above the HBEL, never as a substitute for deriving the HBEL itself.

### The PDE formula

The PDE is calculated as:

```
PDE = (NOAEL × BW) / (F1 × F2 × F3 × F4 × F5)
```

Where:

- **NOAEL** is the No Observed Adverse Effect Level from the most relevant toxicology study, in mg/kg/day. If a NOAEL is not available, a LOAEL (Lowest Observed Adverse Effect Level) or a benchmark dose lower bound (BMDL) is used, with an additional adjustment factor.
- **BW** is body weight, conventionally 50 kg in this guideline (deliberately conservative, not the 70 kg used elsewhere).
- **F1** accounts for interspecies extrapolation (animal to human). Typical values: 5 for rat, 12 for mouse, 2-3 for dog/primate, depending on species.
- **F2** is the factor for individual variability within the human population. Default 10.
- **F3** accounts for study duration (sub-chronic to chronic extrapolation). Up to 10.
- **F4** is a factor for severe effects such as non-genotoxic carcinogenicity, neurotoxicity, or teratogenicity. 1 to 10.
- **F5** is a factor used when the point of departure is a LOAEL rather than a NOAEL. Up to 10.

### A worked PDE example

Suppose a compound has a NOAEL of 1 mg/kg/day from a chronic rat study, the critical effect is reversible and not severe, and a NOAEL was established.

| Term | Value | Basis |
|------|-------|-------|
| NOAEL | 1 mg/kg/day | Chronic rat study |
| BW | 50 kg | Guideline default |
| F1 | 5 | Rat to human |
| F2 | 10 | Human variability |
| F3 | 1 | Chronic study, no extrapolation needed |
| F4 | 1 | Effect not severe |
| F5 | 1 | NOAEL used, not LOAEL |

PDE = (1 × 50) / (5 × 10 × 1 × 1 × 1) = 50 / 50 = **1 mg/day**

So no more than 1 mg/day of this compound may be carried into the next product as a daily patient exposure. That 1 mg/day is the number every cleaning limit and dedication decision now references.

### Who is allowed to derive the HBEL

This is a frequent inspection question. The 2018 Q&A is explicit: the HBEL must be set by a person with adequate expertise and experience in toxicology/pharmacology and knowledge of the product. In practice this is a qualified toxicologist, internal or contracted, who signs a formal HBEL monograph. QA does not set the number; QA approves the process, confirms the monograph exists and is current, and ensures the number flows correctly into limits. A common finding is a cleaning limit calculated from a "PDE" that no toxicologist ever derived or signed.

### Acceptance criteria for an HBEL assessment

A defensible HBEL package contains:

- A signed monograph per compound, authored by a qualified toxicologist.
- The point of departure (NOAEL/LOAEL/BMDL), the study it came from, and why that study and that endpoint were chosen as critical.
- Every adjustment factor with its justification.
- The route of administration considered and any route-to-route correction.
- A statement on genotoxicity/carcinogenicity. Genotoxic carcinogens without a threshold are handled differently (a TTC-based approach, typically 1.5 µg/day, per ICH M7 logic) rather than a standard PDE.
- A defined review cycle, so new toxicology data triggers re-derivation.

---

## From HBEL to a cleaning limit (the MACO calculation)

The HBEL is a patient exposure limit. To make it usable on the shop floor, convert it into a Maximum Allowable Carryover (MACO): the total mass of product A that may remain on shared equipment and be carried into a full batch of product B.

The HBEL-based MACO formula:

```
MACO = (PDE_A × MBS_B) / MDD_B
```

Where:

- **PDE_A** is the PDE of the previous product A (mg/day).
- **MBS_B** is the minimum batch size of the next product B (in number of dosage units or total mass).
- **MDD_B** is the maximum daily dose of product B (dosage units per day, or mass per day).

### Worked MACO example

Using PDE_A = 1 mg/day from above. Product B has a batch size of 200,000 tablets and a maximum daily dose of 4 tablets.

MACO = (1 mg/day × 200,000 tablets) / (4 tablets/day) = 200,000 / 4 = **50,000 mg = 50 g** of product A permitted across the entire batch of B.

That total then gets divided by the shared product-contact surface area to give a limit per swab or per rinse, in µg/cm². The swab limit is what the analytical method must detect and what cleaning validation must meet.

### The "most stringent limit governs" rule

In a multi-product train you have many possible A-to-B transitions. You calculate MACO for the relevant worst case (most potent A, smallest/most-dosed B) and the lowest MACO governs the cleaning limit for that equipment train. The matrix of which product is the worst case is a core cleaning-validation deliverable and is driven entirely by the HBEL data. See [cleaning-validation-fundamentals](/articles/cleaning-validation-fundamentals) and [cleaning-validation-execution](/articles/cleaning-validation-execution) for how this carries into protocols.

A second guardrail: if the HBEL-derived limit is impractically high (a very low-hazard product can produce a MACO so large that visual residue would be acceptable), most sites cap the limit with a practical "visually clean plus a default" criterion. The 2018 Q&A allows HBEL to confirm a visually clean criterion is acceptable, but visual-clean alone is not sufficient justification by itself; it must be supported by the HBEL showing the visible-residue threshold is well below the toxicological limit.

---

## Dedicated facilities: when sharing is no longer acceptable

The headline change in the 2015 framework: dedication is now a risk-based decision, not an automatic rule by product class, with two important exceptions that remain mandatory.

### The mandatory dedications

Two cases still drive **dedicated and self-contained facilities**:

- **Beta-lactam antibiotics** (penicillins, and certain cephalosporins/carbapenems), because of sensitization risk. The revised Chapter 3 §3.6 frames dedication as a risk-based decision and cites beta-lactams as an example where toxicological data cannot support a controllable risk, rather than as a hard-coded class. The US codifies the penicillin separation in 21 CFR 211.42(d) and 211.46(d).
- **Certain biological preparations** such as live organisms. This live-organism containment requirement sits in EU GMP Annex 2 (biological active substances and medicinal products), not in the revised Chapter 3 §3.6.

For these, no HBEL argument lets you share. The risk is sensitization or viability, not dose-related toxicity, so the PDE model does not apply.

### Everything else: the risk-based decision

For all other products (including highly potent compounds, hormones, cytotoxics, and sensitizing agents that are not beta-lactams) the question is decided by QRM. The decision considers:

- **Toxicological/pharmacological hazard.** A low PDE (potent, narrow margin) pushes toward dedication. A high PDE makes sharing easier to justify.
- **Cleanability.** Whether a validated cleaning process can reliably and reproducibly achieve the required limit. If the molecule is sticky, insoluble, or degrades into hard-to-detect species, cleanability fails and dedication may be the only safe answer.
- **Sensitization and other route-specific hazards** that a PDE may not fully capture.
- **Detectability.** Whether an analytical method can detect residue at the required limit. If you cannot measure to the limit, you cannot prove control.
- **Process and facility design.** Open versus closed processing, dust generation, shared HVAC, shared utilities.

### The decision logic, step by step

1. Confirm the product is not in a mandatory-dedication class. If it is, stop, dedicate.
2. Obtain the HBEL/PDE for the product as a potential contaminant.
3. Calculate the MACO and the resulting swab/rinse limit for each shared train.
4. Test detectability: can a validated analytical method (TOC, HPLC, specific assay) measure at or below that limit, with acceptable recovery? If no, dedication or dedicated parts.
5. Test cleanability: can the cleaning process reproducibly meet the limit? Run cleaning development/verification. If no, dedication or dedicated parts.
6. Assess airborne and surface migration risk (dust, aerosols, shared HVAC). If containment cannot bring this below the HBEL, dedicate the area or air system.
7. Document the QRM conclusion: shared with controls, dedicated equipment/parts only, or fully dedicated/self-contained facility.

### Levels of dedication

Dedication is not binary. Options, from most to least sharing:

| Option | What is shared | When to use |
|--------|----------------|-------------|
| Fully shared, validated cleaning | Everything, cleaned between products | Moderate-to-high HBEL, good cleanability and detectability |
| Shared with campaigning | Equipment shared but in time-separated campaigns | Cleanability adequate but you want to reduce cleaning frequency/risk |
| Dedicated product-contact parts | Hard-to-clean change parts (filling needles, hoppers, sieves, hoses) dedicated; main equipment shared and cleaned | Specific components fail cleanability but the platform is fine |
| Dedicated equipment | Whole machine dedicated, room/HVAC shared | Equipment-level carryover risk high, airborne risk low |
| Dedicated area, shared utilities | Room dedicated, building shared | Airborne/surface migration risk |
| Self-contained facility | Separate building, dedicated air | Beta-lactams, certain biologicals, extreme hazard |

A practical and inspector-respected answer for many potent compounds is dedicating the product-contact parts that cannot be cleaned to limit, while sharing the cleanable platform. It controls the real risk at the real cost.

---

## Campaign production: controlling time-based risk

Campaigning means running multiple consecutive batches of one product before changing over, with a full validated clean only at the end of the campaign and a lesser "between-batch" clean within it.

### Why campaigning is used and what it controls

Campaigning reduces the number of full product-to-product changeovers, which reduces both the opportunity for cross-contamination errors and the cleaning burden. But it introduces a new risk: residue and degradation can accumulate over the campaign, and the dirty hold between batches can grow microbial or chemical residue. So campaigning trades changeover risk for accumulation risk, and you must validate the limits of the campaign.

### What you must define and validate for a campaign

- **Maximum campaign length**, expressed as number of batches and/or total run time. This is a validated limit, not an operational convenience. You prove that at the end of the maximum campaign the equipment can still be cleaned to the HBEL-based limit.
- **Between-batch (minor) cleaning** procedure and its acceptance criteria.
- **End-of-campaign (major) cleaning** procedure validated to the full MACO limit.
- **Dirty hold time** (how long equipment may sit soiled before cleaning) and **clean hold time** (how long after cleaning equipment remains validated-clean). Both are established with hold-time studies, including bioburden for the clean hold.
- **Degradation behavior** over the campaign, especially for products that degrade into species harder to detect or more toxic than the parent.
- **Bioburden and endotoxin control** across the campaign for sterile or low-bioburden processes. Cross-link: [environmental-monitoring-program](/articles/environmental-monitoring-program) and [bioburden-and-endotoxin-testing](/articles/bioburden-and-endotoxin-testing).

### Worked campaign acceptance example

A campaign is justified for up to 10 consecutive batches over a maximum of 7 calendar days, with a maximum dirty hold of 48 hours between any two batches. End-of-campaign cleaning is validated against the governing MACO swab limit of, say, 4 µg/cm². The validation runs three campaigns at the maximum length and the worst-case dirty hold, swabs the hardest-to-clean locations, and demonstrates all results are below 4 µg/cm² with a documented margin. Bioburden at end of clean hold remains below the action limit. Only then does the SOP permit 10-batch, 7-day campaigns.

A campaign that runs longer than validated, or holds dirty longer than studied, is a deviation, not a tweak. Treat it through [deviation-management](/articles/deviation-management).

---

## Technical and organizational controls (the layered defense)

Cross-contamination control is layered. No single control is trusted alone. Chapter 5 §5.21 lists technical and organizational measures; an inspector expects to see both, and expects your CCS or cross-contamination assessment to map each risk to specific controls.

### Technical controls

- **Containment and closed processing.** Isolators, RABS, closed transfers, contained charging/discharging. The single most effective control for airborne carryover.
- **Dedicated HVAC and pressure cascades.** Separate air handling, single-pass air where needed, airlocks, and verified pressure differentials so air flows from clean to less-clean and not between product areas. Mandatory dedicated air for penicillins.
- **Dedicated product-contact parts** (covered above).
- **Cleaning equipment and validated cleaning processes.** Automated CIP/COP where possible for reproducibility; cleaning is the workhorse control and is validated, not just verified.
- **Equipment design for cleanability.** Hygienic design, minimal dead legs, smooth finishes, drainability. A design problem found late becomes a permanent cleaning headache.
- **Single-use systems** where feasible, which remove the cleaning question for that contact surface entirely.

### Organizational controls

- **Changeover procedures and line clearance.** Documented, verified, second-person checked. A failed line clearance is one of the most common roots of mix-up and carryover findings. See [batch-record-review-gmp](/articles/batch-record-review-gmp).
- **Campaign and sequencing rules** (above).
- **Gowning and personnel flow** designed so operators do not carry residue between areas.
- **Material and waste flow** that prevents cross-traffic.
- **Status labeling** (clean/dirty/in-use) and equipment logbooks.
- **Training** on the specific cross-contamination hazards of the products handled.

### Acceptance criteria for the control set

The control set is adequate when, for every credible cross-contamination pathway (equipment surface, airborne, personnel, utilities, mechanical transfer), there is at least one validated or verified control bringing residual risk below the HBEL, and the QRM file shows the pathway was considered. Gaps where a pathway has no mapped control are the classic finding.

---

## The contamination control strategy and how cross-contamination fits

For sterile facilities, Annex 1 (2022) requires a documented Contamination Control Strategy. Cross-contamination is one chapter of that broader strategy, which also covers microbial, particulate, and pyrogen control. Even for non-sterile sites, building a CCS-style document is now considered good practice and many inspectors look for one.

Your cross-contamination strategy document (standalone or as a CCS section) should contain:

- The product list and each product's HBEL/PDE and hazard classification.
- The facility and equipment map showing which trains and rooms are shared.
- The QRM assessment per shared train, with the dedication/campaign decision and its justification.
- The MACO/limits table and which product is the worst case per train.
- The technical and organizational controls mapped to each pathway.
- The cleaning validation status and the analytical methods used.
- The monitoring and verification approach (how you confirm the strategy keeps working: cleaning verification, environmental monitoring, periodic review).
- The change-management linkage: any new product, formula change, equipment change, or new toxicology data must re-trigger the assessment.

Cross-link to [annex-1-contamination-control-strategy](/articles/annex-1-contamination-control-strategy) for the full CCS build, and [quality-risk-management](/articles/quality-risk-management) for the QRM mechanics.

---

## Roles and responsibilities

| Role | Responsibility |
|------|----------------|
| Toxicologist (qualified) | Derives and signs HBEL/PDE monographs; re-derives on new data; classifies genotoxic/sensitizing hazards |
| Cleaning validation / SME | Calculates MACO and swab limits; runs cleaning development, validation, hold-time and campaign studies; owns the worst-case matrix |
| Analytical / QC | Develops and validates residue methods; confirms detectability at the limit; runs recovery studies; tests swabs/rinses |
| Process/manufacturing engineering | Owns equipment design, containment, HVAC, dedicated parts; implements technical controls |
| Manufacturing operations | Executes changeover, line clearance, campaign rules, cleaning per SOP; records in logbooks |
| QA | Approves the cross-contamination/CCS strategy and QRM files; approves cleaning validation and limits; confirms HBEL monographs exist and are current; dispositions deviations; ensures change control re-triggers assessment |
| Regulatory affairs | Ensures the shared-facility justification is reflected in filings where required |
| Site head / quality leadership | Owns the decision to share versus dedicate at the facility level; resources the controls |

The recurring failure mode is a role gap: the cleaning limit gets calculated by validation from a number nobody in toxicology ever signed, and QA approves it without checking the monograph exists.

---

## Common mistakes and real inspection-finding patterns

These are the patterns regulators cite repeatedly. Learn them; they are also interview gold.

- **Cleaning limits not based on a real HBEL.** A "PDE" used in the MACO that was never derived or signed by a qualified toxicologist, or still silently using only 1/1000-dose and 10 ppm with no toxicological justification post-2015.
- **HBEL set but never flowed into limits.** The toxicologist signs a monograph, but the cleaning limits on the floor were set years earlier and never reconciled to it. The number exists and is ignored.
- **Worst-case selection wrong or undocumented.** The cleaning validation validates against an easy case, not the most potent/most-dosed transition. Or the worst-case rationale is missing entirely.
- **Detectability gap.** The required swab limit is below what the analytical method can reliably quantify, and nobody acknowledged it. You cannot prove control of a limit you cannot measure.
- **Campaign run beyond validated length** as routine practice, or dirty hold times exceeded without deviation, because the validated limits were never enforced operationally.
- **No QRM file for the share-versus-dedicate decision.** The site shares equipment for a potent compound but has no documented risk assessment justifying it.
- **Shared HVAC for products that need separation**, or pressure cascades not verified, allowing airborne carryover.
- **Visual-clean used as the only criterion** without HBEL support showing the visible threshold is well below the toxicological limit.
- **Change control does not re-trigger the assessment.** A new product is introduced into a shared train with no re-evaluation of the worst case and limits.
- **Beta-lactam or biological separation breached** through shared personnel, gowning, or air, the most serious category because the regulatory line is absolute.
- **Cleaning validation treated as one-time.** No ongoing verification, no periodic review, despite product mix changing. See [continued-process-verification-cpv](/articles/continued-process-verification-cpv) and [requalification-and-periodic-review-equipment](/articles/requalification-and-periodic-review-equipment).

---

## Interview-ready questions and how to answer them

**"Walk me through how you decide whether two products can share equipment."**
Start with the mandatory exclusions (beta-lactams, certain biologicals always dedicated). For everything else it is a QRM decision: get the HBEL/PDE for each product as a contaminant, calculate MACO and the swab limit, then test two gates, detectability (can the analytical method measure to the limit with good recovery) and cleanability (can the cleaning process reproducibly meet it). Add the airborne/HVAC pathway. If all gates pass with margin, shared with validated cleaning is justified; if a component fails, dedicate parts; if the platform fails, dedicate equipment or the facility. The whole thing is documented in a QRM file.

**"What is a PDE and how is it derived?"**
The Permitted Daily Exposure is the maximum daily lifetime dose with no appreciable adverse effect, in mg/day, derived per the 2015 EMA HBEL guideline: take the NOAEL from the most relevant study, multiply by 50 kg body weight, divide by adjustment factors F1-F5 for interspecies, individual variability, study duration, severity, and LOAEL use. It is product specific and must be derived by a qualified toxicologist.

**"How does the HBEL turn into the limit a cleaning validation actually tests?"**
MACO = PDE of the previous product times the batch size of the next product divided by the next product's max daily dose. That total carryover is divided by shared surface area to give a µg/cm² swab limit. The most stringent transition in the train governs.

**"What changed in 2015 and why does it matter?"**
EU GMP Chapters 3 and 5 were revised and the HBEL guideline issued. Blanket class-based dedication rules were replaced by a risk- and toxicology-based decision, with beta-lactams and certain biologicals still mandatory dedications. It matters because limits are now scientific and the share-versus-dedicate decision must be documented through QRM rather than assumed.

**"How do you control risk in campaign production?"**
Campaigning reduces changeover risk but introduces accumulation risk, so you validate a maximum campaign length (batches and time), define and validate between-batch versus end-of-campaign cleaning, establish dirty and clean hold times, study degradation across the campaign, and control bioburden over the clean hold. Running past validated limits is a deviation.

**"When is dedicating only the product-contact parts the right call?"**
When specific change parts (filling needles, hoppers, hoses, sieves) cannot be cleaned reproducibly to the limit but the main platform can. You dedicate the parts that fail cleanability and share the cleanable equipment. It controls the real risk at proportionate cost.

**"Who sets the HBEL, and what is QA's role versus the toxicologist's?"**
A qualified toxicologist derives and signs the HBEL monograph; QA does not set the number. QA approves the process, confirms the monograph exists and is current, ensures it flows into the limits, and owns the overall strategy approval and change-control linkage.

**"A new product is being added to a shared line. What do you do?"**
Trigger change control, get the new product's HBEL as a contaminant, recompute the worst case across all transitions in the train (the new product may become the governing case in either direction), re-evaluate detectability and cleanability against the new limits, update the cleaning validation if the worst case changed, and update the CCS/QRM file before the product runs.

---

## Practical tips

- Build the HBEL and MACO data as a living matrix, one row per product, so adding a product is a recalculation, not a project. The worst case can flip with one new entry.
- Pressure-test detectability early. The cheapest time to discover the limit is below your method's quantitation is during development, not during validation.
- Dedicate the parts, not the platform, when cleanability fails on specific components. It is usually the proportionate answer and inspectors respect it.
- Keep the toxicologist's monograph and the floor limit reconciled. A periodic check that "the number on the SOP still equals the number in the monograph" catches a classic finding.
- Treat campaign length and hold times as validated limits with hard stops in the SOP, not as soft operational targets.
- Make change control the trigger that wakes the assessment up. New product, new formula, new equipment, or new toxicology data all re-open the worst-case question.
- For sterile sites, write the cross-contamination program as a section of the CCS so it is governed, reviewed, and inspected as one coherent strategy.

---

## Related articles

- [cleaning-validation-fundamentals](/articles/cleaning-validation-fundamentals)
- [cleaning-validation-execution](/articles/cleaning-validation-execution)
- [annex-1-contamination-control-strategy](/articles/annex-1-contamination-control-strategy)
- [quality-risk-management](/articles/quality-risk-management)
- [environmental-monitoring-program](/articles/environmental-monitoring-program)
- [ich-q7-api-gmp](/articles/ich-q7-api-gmp)
- [aseptic-processing-and-media-fills](/articles/aseptic-processing-and-media-fills)
- [continued-process-verification-cpv](/articles/continued-process-verification-cpv)
- [requalification-and-periodic-review-equipment](/articles/requalification-and-periodic-review-equipment)
- [deviation-management](/articles/deviation-management)
