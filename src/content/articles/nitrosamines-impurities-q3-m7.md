---
title: "Impurities and Nitrosamines: ICH Q3, M7, and Risk-Based Control"
description: "A guide to controlling organic, inorganic, and mutagenic impurities under ICH Q3 and M7, plus the nitrosamine risk-assessment workflow and the data-integrity demands of impurity testing."
pubDate: 2026-06-20
tags: ["impurities", "nitrosamines", "ICH M7", "ICH Q3", "mutagenic impurities", "data integrity", "quality assurance", "regulatory"]
pillar: "quality-assurance"
tier: "Advanced"
---

Every drug substance carries a small population of molecules that are not the active ingredient: leftover starting materials, reaction by-products, degradation products, metal catalysts, and trace solvents. Impurity control is the discipline of knowing what those molecules are, how much of each is present, and proving that the amounts are low enough that no patient is harmed across the product's shelf life. It sounds like a chemistry problem, and a lot of it is. But the failures that put products on recall lists are almost never "we couldn't run the HPLC." They are governance failures: an impurity nobody thought to look for, a limit set without a toxicological basis, a method that wasn't sensitive enough to see the thing that mattered, or test data that couldn't be trusted.

This article walks the impurity-control framework from the ground up. It starts with the ICH Q3 family, which governs ordinary impurities. It then moves to ICH M7, which handles the subset of impurities that can damage DNA. And it ends with nitrosamines, the impurity class that turned a quiet specialty into a global crisis after 2018 and rewrote how regulators expect manufacturers to think about risk. Throughout, the thread that ties it together is data integrity: an impurity result is only as good as the system that produced it.

The frameworks apply across modalities. Small-molecule drug substances are the clearest case, but residual solvents, elemental impurities, and mutagenic impurities also arise in the synthesis of small-molecule excipients, in chemically synthesized peptides and oligonucleotides, in the reagents used to make biologics, and in combination products and device coatings. Wherever a chemical step touches the product, Q3 and M7 thinking applies.

## The vocabulary: what counts as an impurity

Start with definitions, because the regulatory limits attach to categories.

An **impurity** is any component of the drug substance or drug product that is not the active pharmaceutical ingredient (API) or an excipient. ICH sorts them into three buckets:

- **Organic impurities**, process-related (starting materials, intermediates, reagents, by-products) and degradation products that form during manufacture or storage.
- **Inorganic impurities**, reagents, ligands, catalysts, heavy metals, inorganic salts, filter aids, charcoal.
- **Residual solvents**, organic volatile chemicals used or produced in manufacturing that are not completely removed.

Two more terms drive the paperwork. A **specified impurity** is one named individually in the specification, with its own acceptance limit, whether or not its structure is known. An **unspecified impurity** is controlled only by a general limit. And the **identification threshold**, **qualification threshold**, and **reporting threshold** are the three trigger points that decide how much characterization an impurity demands. Get the category and the threshold right and most of the downstream decisions follow.

Two adjacent terms are worth nailing down because interviewers test them:

- **Total impurities**: the sum of all impurities at or above the reporting threshold, controlled by its own limit in the specification.
- **Degradation product** vs **process impurity**: a degradation product forms after the drug substance is made (during further processing, formulation, or storage) and is the central concern of Q3B and of stability programs. A process impurity is carried through from synthesis and is the central concern of Q3A. The same molecule can be both, and the distinction governs where you control it.

## ICH Q3: the everyday impurity framework

The Q3 series is the backbone. Four documents, each owning a category.

| Guideline | Scope | Core control |
|-----------|-------|--------------|
| ICH Q3A(R2) | Impurities in **new drug substances** | Reporting / identification / qualification thresholds tied to max daily dose |
| ICH Q3B(R2) | Impurities (degradation products) in **new drug products** | Same threshold logic, applied to finished product |
| ICH Q3C(R9) | **Residual solvents** | Class 1/2/3 system with PDEs |
| ICH Q3D(R2) | **Elemental impurities** | PDEs for 24 elements by route of administration |

These are ICH guidelines, adopted into regional law and pharmacop.eia. In the United States they sit alongside the CGMP requirements of 21 CFR 211, which require established specifications and validated test methods. In the EU they are part of the GMP and marketing-authorization framework. The point for a practitioner: a Q3 threshold is not advisory, it is the basis a reviewer expects your specification to defend.

### Q3A and Q3B: the threshold ladder

Q3A (drug substance) and Q3B (drug product) share a logic. The amount of work an impurity demands scales with how much of it a patient would receive, which is a function of its concentration and the maximum daily dose. The guidelines publish tables of thresholds keyed to daily dose. For a drug substance at a maximum daily dose at or below 2 g/day, the canonical numbers are:

- **Reporting threshold**, the level above which an impurity must be reported in the analytical results. For doses at or below 2 g/day this is 0.05%.
- **Identification threshold**, the level above which you must structurally identify the impurity. Typically 0.10% or 1.0 mg/day intake, whichever is lower.
- **Qualification threshold**, the level above which you must establish the biological safety of the impurity. Typically 0.15% or 1.0 mg/day intake, whichever is lower.

Higher daily doses tighten the percentage thresholds, because the absolute intake is what matters. Q3B applies the same ladder to degradation products in the finished product, with its own dose-keyed table (the Q3B drug-product thresholds are slightly different from Q3A, so read the right table for the right matrix).

**A worked example.** A new tablet with a 500 mg API and a maximum daily dose of 1 g/day shows a degradation peak at 0.12% by area normalization on stability.

- 0.12% is above the Q3B reporting threshold (0.05%) so it must appear in the results.
- It is above the identification threshold (0.10% at this dose) so you must identify the structure.
- 0.12% as intake = 0.0012 x 1000 mg = 1.2 mg/day, which is above the qualification threshold (the lower of 0.15% or 1.0 mg/day, so 1.0 mg/day here). You must qualify it: justify safety with toxicology data or literature, or reduce it below threshold by reformulation, tighter packaging, or a process change.

"Qualification" is the step practitioners underestimate. It means generating the data, often a literature justification, sometimes a dedicated toxicology study, that shows the impurity is safe at the proposed level. If an impurity sits above the qualification threshold and you cannot qualify it, the answer is not to argue; it is to change the process or tighten the specification so the impurity drops below threshold.

**Acceptance criteria for a Q3A/Q3B specification done right:**

- Every impurity at or above the reporting threshold is reported, with a clear naming convention (relative retention time for unidentified peaks).
- Every impurity above the identification threshold is identified or has a documented, justified attempt.
- Every impurity above the qualification threshold is qualified, with the justification on file.
- Limits are set from batch data plus the threshold logic plus the qualification outcome, not picked to be round numbers.
- A separate limit exists for total impurities and for any single unspecified impurity.

### Q3C: residual solvents

Q3C classifies solvents by toxicity into three tiers and sets control accordingly.

- **Class 1**, the most hazardous tier that Q3C says to keep out of manufacture where possible. Benzene and several chlorinated solvents (such as carbon tetrachloride, the dichloroethanes, and trichloroethane) sit here as known carcinogens or environmental hazards; if a process cannot avoid one, it is held to very low ppm limits.
- **Class 2**, solvents Q3C says to restrict rather than eliminate (acetonitrile, methanol, dichloromethane, and toluene are typical examples). Each carries a **Permitted Daily Exposure (PDE)** in mg/day and a matching concentration limit in ppm.
- **Class 3**, the lower-toxicity tier (ethanol, acetone, and ethyl acetate among them). Q3C treats these as acceptable up to roughly 0.5% (5000 ppm) without extra justification.

Q3C also defines the **Option 1 / Option 2** approach. Option 1 uses a simple concentration limit (ppm) derived from the PDE assuming a 10 g/day product mass. Option 2 lets you use the actual daily dose to back-calculate a higher allowable concentration when the dose is small, useful when a solvent is hard to remove but the product is low-dose. The PDE itself is derived from a No-Observed-Effect Level divided by modifying factors, a structure that recurs throughout impurity toxicology.

**A worked example of Option 1 vs Option 2.** Take a Class 2 solvent with a PDE of 4.1 mg/day.

- Option 1: concentration limit = PDE / 10 g = 4.1 mg / 10 g = 410 ppm. Any product is acceptable at or below 410 ppm regardless of dose.
- Option 2: if the actual maximum daily dose is only 2 g/day, the allowed concentration = PDE / dose = 4.1 mg / 2 g = 2050 ppm. The low dose buys you a higher allowable concentration because the patient swallows less product.

Use the right analytical method: residual solvents are almost always measured by headspace gas chromatography (the general approach in USP <467> and harmonized pharmacopeial chapters), with the method validated for the specific solvents on your control list.

### Q3D: elemental impurities

Q3D replaced the old USP heavy-metals colorimetric test, a method that was non-specific, insensitive, and frankly a relic, with a risk-based, element-specific framework. It sets **PDEs for 24 elements** and groups them into classes by toxicity and likelihood of occurrence:

- **Class 1** gathers the human toxicants of greatest concern, arsenic, cadmium, mercury, and lead, which see little legitimate use and must be assessed in every case.
- **Class 2A** holds elements (cobalt, nickel, vanadium) that are more likely to turn up in a process and so also warrant assessment regardless of intent.
- **Class 2B** covers the precious-metal and platinum-group catalysts (silver, gold, palladium, platinum, and the like), which need assessment only when they are deliberately introduced.
- **Class 3** picks up elements of lower oral toxicity (barium, chromium, copper, lithium, molybdenum, antimony, tin among them), where the need to assess depends on the route of administration.

PDEs differ by route of administration: oral, parenteral, and inhalation limits diverge by orders of magnitude because bioavailability and target-organ exposure differ. The expected analytical workhorses are **ICP-MS** and **ICP-OES**, validated per the general chapter framework (USP <232> for limits and <233> for procedures in the United States, harmonized with Q3D).

The practical Q3D deliverable is an **elemental impurity risk assessment**: enumerate every potential source (drug substance synthesis, excipients, water, manufacturing equipment, container-closure), estimate the contribution of each against the PDE, and decide whether routine testing is needed or whether a documented control strategy suffices. Inspectors expect this document to exist and to be tied to actual data, not assertions.

**A worked example of the Q3D summation.** For a parenteral product you must control the total contribution of each element across all components against the parenteral PDE. Suppose the parenteral PDE for an element is 30 µg/day, and you have estimated contributions:

| Source | Estimated contribution (µg/day) |
|--------|---------------------------------|
| Drug substance | 6 |
| Excipient A | 4 |
| Excipient B | 1 |
| Water | <1 |
| Container-closure (leachable) | 2 |
| **Sum** | **~13** |

The summed 13 µg/day sits below the 30 µg/day PDE with margin, so a documented control-strategy argument can replace routine release testing for that element, provided the inputs are real data and the suppliers are under change control. If the sum approached or exceeded the PDE, you would test routinely or reduce a source. The common option here is the **component approach** (sum contributions, as above) or the **drug-product approach** (test the finished product directly).

## ICH M7: when an impurity can damage DNA

A subset of organic impurities is more dangerous than its concentration alone implies, because the relevant harm is **genotoxic**, the ability to cause mutations or chromosomal damage. A mutagen does not need to be present at 0.1% to matter; even trace amounts carry a theoretical cancer risk because the mechanism is stochastic. ICH M7(R2), *Assessment and Control of DNA Reactive (Mutagenic) Impurities in Pharmaceuticals to Limit Potential Carcinogenic Risk*, governs this class.

### The Threshold of Toxicological Concern

M7's central concept is the **Threshold of Toxicological Concern (TTC)**. The guideline sets a single-impurity intake of **1.5 µg/day** as a generic acceptable level, a figure chosen so that lifetime exposure corresponds to a theoretical excess cancer risk of about 1 in 100,000. Treat it as a conservative default: a number you can rely on when no compound-specific data exist. When a compound-specific carcinogenicity dataset is available, you can work out an acceptable intake tailored to that impurity instead, and that value is often higher than the generic figure.

Two adjustments matter:

- **Less-than-lifetime (LTL) limits.** For drugs taken for a defined, shorter duration, M7 permits higher daily intakes, scaled by exposure duration. The staged limits in M7 are typically expressed as: not more than 1 month, up to 12 months, 1 to 10 years, and more than 10 years (treated as lifetime). A 1-month course can justify a much higher daily limit than chronic therapy. The defensibility of an LTL limit rests on a documented, realistic treatment duration, not an optimistic one.
- **Multiple impurities.** TTC-based limits apply to each impurity individually, but when two or more Class 2 or Class 3 mutagenic impurities are specified on the drug-substance specification, M7 also caps the total. For lifetime exposure that total limit is 5 µg/day; the cap loosens for shorter durations under the same less-than-lifetime logic. (A specific compound-specific limit for a single impurity is excluded from this total cap.)

### The five-class structure

M7 classifies impurities by mutagenic and carcinogenic potential:

| Class | What it covers | How you control it |
|-------|----------------|--------------------|
| 1 | Impurities shown to be both mutagenic and carcinogenic | Hold to a limit derived from the compound's own data |
| 2 | Impurities mutagenic in test systems but with carcinogenic potential not established | Default to the TTC (1.5 µg/day) |
| 3 | Impurities carrying a structural alert not present in the API, with no mutagenicity data of their own | Either default to the TTC or run an Ames test and reclassify |
| 4 | Impurities whose alert is also present in the API, where the API itself has tested non-mutagenic | Handle as a non-mutagenic impurity |
| 5 | Impurities with no structural alert at all | Handle as a non-mutagenic impurity |

The classification drives the control. Class 1 and 2 mean you control to a specific number. Class 3 gives you a choice: control to the TTC, or run an Ames test and reclassify based on the result. Class 4 and 5 fall out of the mutagenic-control burden entirely (they still get controlled as ordinary Q3A impurities if they cross thresholds).

### The (Q)SAR step

M7 formally endorses computational toxicology. Impurities without experimental data are screened with **two complementary (Q)SAR methodologies**, one expert-rule-based, one statistics-based, to predict bacterial mutagenicity. If both predict negative and there is no conflicting knowledge, the impurity can be treated as non-mutagenic without bench testing. A positive or equivocal prediction triggers either an Ames test (the bacterial reverse mutation assay, OECD 471) or control to the TTC. This is one of the few places where regulators accept an *in silico* result in lieu of a wet experiment, and it is a major efficiency. The catch: the (Q)SAR output must be a documented, reproducible assessment, and an expert review can override a model call when justified. That expert review is itself a deliverable, it is signed, dated, and reasoned, not a verbal opinion.

### Control options

M7 lays out four **control approaches**, and choosing among them is where the strategy lives:

- **Option 1**, put the impurity on the drug-substance specification at a limit no higher than the acceptable intake, and test for it on every batch with a method sensitive enough to see it.
- **Option 2**, move the control upstream by specifying and routinely testing the impurity on a raw material or intermediate instead.
- **Option 3**, keep the upstream specification but, backed by process understanding, justify checking it periodically (skip testing) rather than batch by batch.
- **Option 4**, drop analytical testing entirely and rely on a **process-based control argument**: documented purge-factor knowledge showing, with high confidence, that the downstream chemistry strips the impurity to well below the acceptable intake. This is the cleanest route on paper and the one reviewers probe hardest, because it stands on a real understanding of where the impurity goes and why it cannot reach the final drug substance, usually backed by spiking and purge studies.

**How the purge argument works in practice.** A purge factor is the ratio of how much impurity enters a step to how much survives it, driven by reactivity, solubility, volatility, and ionizability relative to the API and to wash and crystallization conditions. You multiply purge factors across steps. If an impurity forms at an early step and three downstream steps each give a purge factor of roughly 100, the predicted total purge is on the order of a million-fold, and if the worst-case input level divided by that purge sits orders of magnitude below the acceptable intake, you have a quantitative Option 4 case. The argument is strengthened by spiking studies that demonstrate the predicted purge experimentally at relevant or exaggerated input levels.

A common misconception is that simply showing the impurity sits below some fixed fraction of the AI is enough to claim Option 4. It is not: M7's own Q&A is explicit that merely being consistently under a low percentage of the AI does not by itself justify Option 4. The justification rests on demonstrated purge capability and process understanding, not a single number. Option 4 is attractive because it removes a routine test, but it lives or dies on that evidence. Inspectors and reviewers challenge Option 4 arguments hard, and a weak purge study is a finding waiting to happen.

**Acceptance criteria for an M7 control package:**

- Every actual and potential mutagenic impurity (and reasonably likely degradant) is enumerated and classified, with the reasoning recorded.
- (Q)SAR assessments use two complementary systems and any conflict is resolved by documented expert review.
- The chosen control option (1-4) is justified, and for Option 3/4 the process-understanding and purge evidence is attached.
- Analytical methods for any Option 1/2 controls are validated with LOQ below the acceptable intake at the relevant concentration.
- LTL and multiple-impurity caps are applied where relevant, with treatment duration documented.

## Nitrosamines: the crisis that rewrote the playbook

In mid-2018, an unexpected impurity, **N-nitrosodimethylamine (NDMA)**, was found in valsartan API. NDMA is a probable human carcinogen and a textbook M7 Class 1 compound. What followed was a cascade: recalls across multiple sartans, then ranitidine, then metformin, and eventually a systematic re-examination of essentially every marketed product for nitrosamine risk. The episode exposed a gap. Nobody had been looking for these compounds because nobody had reason to expect them, until a change in a synthetic route, combined with specific reagents, generated them in situ.

Nitrosamines form when a **secondary or tertiary amine** meets a **nitrosating agent** (nitrous acid, nitrites, nitrogen oxides) under the right conditions. The sources are diffuse and easy to miss:

- Nitrite impurities in excipients (nitrites are present at low levels in many common excipients, and the level varies lot to lot).
- Recovered/recycled solvents and catalysts carrying nitrogen contaminants.
- Quenching steps using sodium nitrite.
- Amine-based reagents or amine degradants in the presence of any nitrite source.
- Contaminated raw materials and even certain packaging or printing inks.
- A concern that grew after the first wave: **nitrosamine drug-substance-related impurities (NDSRIs)**, where the API's own secondary-amine moiety is nitrosated, producing a nitrosamine unique to that drug. NDSRIs are harder because there is rarely published carcinogenicity data for them.

Regulators, FDA, EMA, and others, issued guidance directing manufacturers through a structured response. FDA's guidance *Control of Nitrosamine Impurities in Human Drugs* and EMA's Article 5(3) referral output set the framework now in force, and both have been revised more than once, so always work from the current revision.

### The three-step approach

The regulatory response converged on a **three-step process** that every marketing authorization holder was expected to run:

1. **Risk assessment.** Evaluate all marketed products and their manufacturing processes for the possibility of nitrosamine formation or contamination. Document the rationale for every product, including those concluded to be at no risk. This step is paperwork-heavy and unforgiving: a product dismissed without a real assessment is a finding.

2. **Confirmatory testing.** Where the risk assessment identifies a potential for nitrosamines, perform confirmatory analytical testing using sensitive, validated methods. Because the limits are in the parts-per-billion range, this almost always means **LC-MS/MS or GC-MS/MS**, not conventional HPLC-UV.

3. **Reporting and changes.** Report confirmed presence to the relevant authority and implement corrective actions, process changes, supplier changes, reformulation, or, where necessary, market withdrawal, to bring levels within the acceptable intake.

**What goes in a nitrosamine risk assessment.** A defensible assessment, per product, documents:

- The synthetic route and every step where a secondary/tertiary amine and a nitrosating source could co-occur.
- Raw materials, reagents, solvents (especially recovered/recycled streams), and catalysts, with nitrite/nitrosamine potential called out.
- The API structure screened for an NDSRI-forming secondary amine.
- Excipients and their nitrite content (this is where supplier data is needed, and often missing).
- Water, equipment, container-closure, and any cross-contamination pathways.
- The conclusion (risk / no further action) with the reasoning, and the trigger conditions that would require re-assessment.

### Acceptable intake limits

The acceptable intake (AI) for a nitrosamine is derived from carcinogenic potency, ideally from compound-specific TD50 data via linear extrapolation to a 1-in-100,000 lifetime risk. For well-studied small nitrosamines like NDMA and NDEA, regulators published specific AI limits in the low-nanogram-per-day range. FDA, for example, has listed NDMA at 96 ng/day and NDEA at 26.5 ng/day. Values can differ slightly by jurisdiction and revision, so always pull the current published figure rather than quote from memory. For NDSRIs where no compound-specific potency data exist, regulators developed the **Carcinogenic Potency Categorization Approach (CPCA)**, which assigns an AI based on structural features (the number and nature of alpha-hydrogens and adjacent activating/deactivating groups) without requiring a bespoke carcinogenicity study. The CPCA gives a defensible default limit and has become the standard starting point for novel nitrosamines. Where an NDSRI carries a structural alert that the CPCA cannot fully resolve, an enhanced Ames test or read-across to a structurally related nitrosamine may be used to support a higher limit.

The mass-balance arithmetic is the same as M7: AI in ng/day, divided by the maximum daily dose in g/day, yields a concentration limit in the drug product.

**A worked example.** A nitrosamine has an AI of 26.5 ng/day, and the product's maximum daily dose is 8 tablets of 250 mg each = 2 g/day.

- Limit in the product = 26.5 ng/day / 2 g/day = 13.25 ng/g = **13.25 ppb**.

Your analytical method must quantify reliably below 13.25 ppb, which is why LC-MS/MS or GC-MS/MS is mandatory. A method with a limit of quantitation at, say, 20 ppb cannot defend this product, and a "not detected" against such a method is meaningless. Less-than-lifetime adjustments apply for short-duration products, exactly as in M7.

### What inspectors look for

The nitrosamine inspections that go badly share patterns:

- A risk assessment that is a checkbox exercise, no real evaluation of recovered solvents, nitrite-bearing excipients, or route-specific amine/nitrite co-occurrence.
- No reassessment after a manufacturing change, a supplier change, or a new excipient lot. Nitrosamine risk is not a one-time activity; it is a lifecycle obligation that change control must trigger.
- Analytical methods not sensitive enough to see the AI. A method with a quantitation limit above the limit you are trying to enforce is worthless, and reporting "not detected" against an insensitive method is a serious deficiency.
- Excipient and supplier qualification that never asked about nitrite content.
- Missing the NDSRI pathway entirely because the team screened only for the small "classic" nitrosamines and never looked at the API's own amine.
- No accelerated-condition or in-use consideration for products where nitrosamines can form on storage rather than only during synthesis.

## The data-integrity dimension

Here is where impurity control stops being chemistry and becomes governance. An impurity specification is a promise to patients that a number is true. The number comes out of a chromatography data system (CDS), and every weakness of that system is a weakness in the promise.

Impurity testing is unusually exposed to data-integrity risk for structural reasons:

- **The results are near the limit of detection.** Trace-level peaks are small, noisy, and sensitive to how integration is performed. A baseline drawn one way meets spec; drawn another way, it fails. This makes integration a place where bias, conscious or not, can hide.
- **Reprocessing is routine and tempting.** It is legitimate to re-integrate when a method genuinely requires manual adjustment. It is fraud to re-integrate until the answer passes. The distinction is invisible unless the audit trail captures every version.
- **Negative results are the dangerous ones.** "Nitrosamine not detected" is exactly the result an inspector will pressure-test, because it is the result that lets a product ship.

The controls follow directly from **21 CFR Part 11** and EU GMP Annex 11, and the MHRA and FDA data-integrity guidances built on **ALCOA+**: data must be Attributable, Legible, Contemporaneous, Original, Accurate, and (the "+") Complete, Consistent, Enduring, and Available. See [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and [data integrity foundations](/articles/data-integrity-foundations) for the principles, and [chromatography data system integrity](/articles/chromatography-data-system-integrity) for the CDS specifics.

Concrete expectations for an impurity-testing lab:

- **Audit trails on, reviewed, and never disabled.** The CDS audit trail must capture every acquisition, every integration, every reprocessing, with user, timestamp, and reason. Audit-trail review must be a defined, performed step of result review, not a capability that exists but is never exercised. Inspectors increasingly ask to see the audit-trail-review records, not just the audit trail. See [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).
- **No shared logins, no generic accounts.** Attributable means a real, unique, authenticated user behind every action. Shared analyst accounts remain one of the most common Part 11 citations.
- **Controlled integration.** Manual integration should be governed by procedure, justified, and second-person reviewed. Automated integration parameters should be locked in the validated method, with deviations documented.
- **Sequence and injection integrity.** Aborted runs, trial injections, and unreported sequences are classic falsification vectors, the "test injection" that quietly becomes the reportable result. Every injection in a sequence must be accounted for; orphan data files are a red flag.
- **Validated, sensitive methods.** Method validation per ICH Q2(R2) must demonstrate that the limit of detection and limit of quantitation sit below the relevant impurity limit, with documented specificity against the matrix. A method that cannot resolve the impurity from a co-eluting peak cannot defend a "passing" result. See [method validation essentials](/articles/method-validation-essentials) and [ICH Q14 and Q2(R2) analytical lifecycle](/articles/ich-q14-q2r2-analytical-lifecycle).

The connection to the rest of this article is direct: M7 and the nitrosamine framework hand the lab a number in nanograms per day. Part 11 and ALCOA+ are what make the lab's claim to have met that number believable. A flawless risk assessment paired with a CDS that lets analysts reprocess until the chromatogram passes is not control, it is theater. Regulators have learned to look at both halves. The way an out-of-specification trace result is handled is governed by your [OOS investigation process](/articles/oos-investigation-process), and a creeping trace impurity that stays in spec is exactly what [out-of-trend investigations](/articles/out-of-trend-investigations) are meant to catch.

## Roles and responsibilities

Impurity control is a cross-functional system. A clean RACI keeps it from falling between groups.

| Activity | Accountable | Responsible / contributes |
|----------|-------------|---------------------------|
| Route and process design, purge knowledge | Process chemistry / API development | Analytical, regulatory |
| Impurity enumeration and classification (Q3A/B, M7) | Analytical / toxicology | Process chemistry, regulatory |
| (Q)SAR and toxicological assessment, AI derivation | Toxicology | Computational tox vendor, regulatory |
| Method development and validation | Analytical / QC | QA |
| Specification setting and justification | Regulatory / analytical | QA, toxicology |
| Elemental impurity risk assessment | Analytical / QA | Supply chain, formulation |
| Nitrosamine risk assessment | Cross-functional team (often QA-led) | Process chem, toxicology, supply chain, regulatory |
| Supplier / excipient nitrite data | Supply chain / procurement | QA |
| Change control triggering re-assessment | QA | All affected functions |
| Audit-trail review and data review | QC / QA | IT (system config) |
| Batch disposition against impurity specs | Qualified Person / QA release | QC |

The recurring failure is ownership of the lifecycle trigger. Someone must own the rule that a route change, a supplier change, or a new excipient lot forces a re-look at impurity and nitrosamine risk. That owner is usually QA via [change control for validated systems and processes](/articles/change-control-validated-systems).

## Common mistakes and inspection-finding patterns

Generic patterns seen across inspections and warning letters, with no company names:

- **Specification limits with no toxicological basis.** A limit set to the analytical capability or to a historical batch value, with no qualification, then defended after the fact. Set the limit from threshold logic and qualification, not from what the instrument happens to see.
- **Method LOQ above the control limit.** The single most damaging analytical finding in this space: claiming control to a limit your method cannot measure. Common with nitrosamines and trace mutagens.
- **Option 4 claimed without purge evidence.** A process-control argument that rests on "it's a small fraction of the AI" rather than demonstrated purge. Reviewers reject these.
- **Nitrosamine assessment treated as one-and-done.** No re-assessment after change, no NDSRI screen, excipient nitrite never questioned.
- **Audit trail enabled but never reviewed.** The audit trail exists, but result review never looks at it, so re-integration to pass goes unseen.
- **Shared logins / generic CDS accounts.** Breaks attributability across the whole impurity dataset.
- **Orphan injections and unexplained aborted runs.** Trial injections that do not appear in the reportable sequence, the classic falsification vector.
- **Elemental impurity assessment without data.** A Q3D document full of assertions and no actual ICP-MS or supplier data behind the numbers.
- **Stability degradants not controlled.** Q3A handled, but Q3B degradation products at end of shelf life never qualified.

## Interview questions and how to answer them

These come up for QC, analytical, regulatory CMC, and QA roles touching impurities.

**Q: Walk me through the three Q3A thresholds and what each triggers.**
Reporting (report it in the results), identification (determine the structure), qualification (establish biological safety). They are keyed to maximum daily dose. Above qualification with no safety justification, you either qualify it or reduce it below threshold; you do not argue it away.

**Q: An impurity is at 0.18% in a drug substance dosed at 1 g/day. What do you do?**
Above the canonical qualification threshold (lower of 0.15% or 1.0 mg/day; here 0.15%). It must be reported, identified, and qualified. If it cannot be qualified, change the process or tighten the spec so it falls below threshold. Show the intake math: 0.18% of 1 g = 1.8 mg/day.

**Q: What is the TTC and where does 1.5 µg/day come from?**
The Threshold of Toxicological Concern, the M7 default acceptable intake for a single mutagenic impurity, corresponding to roughly a 1-in-100,000 excess lifetime cancer risk. It is the fallback when you lack compound-specific potency data; with such data you can derive a compound-specific AI, often higher.

**Q: Explain M7 control Options 1 through 4 and when you'd use Option 4.**
Option 1: control on the drug-substance spec. Option 2: control on a raw material or intermediate spec. Option 3: upstream spec with periodic verification / skip testing justified by process understanding. Option 4: no test anywhere, justified by demonstrated purge and fate understanding. Use Option 4 when purge factors (supported by spiking studies) show the impurity cannot survive to the drug substance at a level near the AI. It is the most scrutinized; "small fraction of the AI" alone does not justify it.

**Q: How do nitrosamines form, and what are NDSRIs?**
A secondary or tertiary amine plus a nitrosating agent (nitrite, nitrous acid, nitrogen oxides) under suitable conditions. Sources include nitrite in excipients, recovered solvents, sodium-nitrite quenches, and contaminated raw materials. NDSRIs are nitrosamines formed from the API's own secondary-amine group, unique to that drug and usually lacking published potency data, so CPCA is the usual starting point for their limit.

**Q: A nitrosamine AI is 26.5 ng/day and the dose is 2 g/day. What is the product limit and what method do you need?**
13.25 ng/g, that is about 13 ppb. You need LC-MS/MS or GC-MS/MS validated with an LOQ below that limit. HPLC-UV cannot reach it.

**Q: Why is impurity testing a data-integrity hot spot?**
Results sit near the detection limit where integration choices swing pass/fail, reprocessing is both legitimate and abusable, and "not detected" is the result that lets product ship, so it draws scrutiny. Controls: audit trail on and reviewed, unique logins, governed manual integration, full injection accountability, and a validated, sensitive method.

**Q: What triggers a re-assessment of nitrosamine risk?**
Any change that could introduce an amine or nitrite source or change purge: route changes, new or changed suppliers, new excipient lots, recovered-solvent changes, equipment or container-closure changes. Change control must interrogate it; it is a lifecycle obligation, not a one-time study.

**Q: Q3D, component approach vs drug-product approach?**
Component approach sums each element's contribution from drug substance, excipients, water, equipment, and container-closure against the route-specific PDE. Drug-product approach tests the finished product directly. If the summed contribution sits below the PDE with margin and inputs are under change control, a documented control strategy can replace routine testing.

## Putting it together: a lifecycle control strategy

The frameworks interlock. A coherent impurity control strategy moves through predictable stages:

1. **Enumerate** every potential impurity, organic (process and degradation), inorganic/elemental, residual solvent, from the route of synthesis, the formulation, the excipients, the equipment, and the container-closure.
2. **Classify** each: ordinary (Q3A/B), residual solvent (Q3C), elemental (Q3D), or potentially mutagenic (M7), with nitrosamines as a flagged special case demanding their own assessment.
3. **Set limits** from the right basis: threshold ladder and qualification for ordinary impurities, PDE for solvents and elements, TTC or compound-specific AI for mutagens, published AI or CPCA for nitrosamines, all adjusted for daily dose and treatment duration.
4. **Choose control**: specification testing, upstream control, periodic verification, or a process-purge argument (M7 Options 1-4), backed by the appropriate evidence.
5. **Validate the analytics** so the method can actually see the limit, and govern the data system so the result can be trusted.
6. **Maintain it across the lifecycle.** Every change, route, supplier, excipient, equipment, scale, triggers reassessment. The nitrosamine crisis happened precisely because a process change introduced a hazard nobody re-evaluated. Change control that does not interrogate impurity and nitrosamine risk is the gap that produces the next recall.

This is the same risk-thinking that runs through [quality risk management](/articles/quality-risk-management) and the [stability programs under ICH](/articles/stability-programs-ich) that catch degradation products, and it connects directly to [ICH Q7 API GMP](/articles/ich-q7-api-gmp) for how the synthesis is controlled and to [certificate of analysis](/articles/certificate-of-analysis) for how the result is reported.

Impurity control rewards the practitioner who treats it as a system rather than a test. The chemistry sets the limits; the toxicology justifies them; the analytics measure against them; and data integrity is what lets anyone believe the measurement. Skip any one of those and the others cannot save you.
