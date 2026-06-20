---
title: "Impurities and Nitrosamines: ICH Q3, M7, and Risk-Based Control"
description: "A practitioner reference for controlling organic, inorganic, and mutagenic impurities under ICH Q3 and M7, plus the nitrosamine risk-assessment workflow and the data-integrity demands of impurity testing."
pubDate: 2026-06-20
tags: ["impurities", "nitrosamines", "ICH M7", "ICH Q3", "mutagenic impurities", "data integrity", "quality assurance", "regulatory"]
pillar: "quality-assurance"
tier: "Advanced"
---

Every drug substance carries a small population of molecules that are not the active ingredient: leftover starting materials, reaction by-products, degradation products, metal catalysts, and trace solvents. Impurity control is the discipline of knowing what those molecules are, how much of each is present, and proving that the amounts are low enough that no patient is harmed across the product's shelf life. It sounds like a chemistry problem, and a lot of it is. But the failures that put products on recall lists are almost never "we couldn't run the HPLC." They are governance failures: an impurity nobody thought to look for, a limit set without a toxicological basis, a method that wasn't sensitive enough to see the thing that mattered, or test data that couldn't be trusted.

This article walks the impurity-control framework from the ground up. It starts with the ICH Q3 family, which governs ordinary impurities. It then moves to ICH M7, which handles the subset of impurities that can damage DNA. And it ends with nitrosamines, the impurity class that turned a quiet specialty into a global crisis after 2018 and rewrote how regulators expect manufacturers to think about risk. Throughout, the thread that ties it together is data integrity: an impurity result is only as good as the system that produced it.

## The vocabulary: what counts as an impurity

Start with definitions, because the regulatory limits attach to categories.

An **impurity** is any component of the drug substance or drug product that is not the active pharmaceutical ingredient (API) or an excipient. ICH sorts them into three buckets:

- **Organic impurities** — process-related (starting materials, intermediates, reagents, by-products) and degradation products that form during manufacture or storage.
- **Inorganic impurities** — reagents, ligands, catalysts, heavy metals, inorganic salts, filter aids, charcoal.
- **Residual solvents** — organic volatile chemicals used or produced in manufacturing that are not completely removed.

Two more terms drive the paperwork. A **specified impurity** is one named individually in the specification, with its own acceptance limit, whether or not its structure is known. An **unspecified impurity** is controlled only by a general limit. And the **identification threshold**, **qualification threshold**, and **reporting threshold** are the three trigger points that decide how much characterization an impurity demands. Get the category and the threshold right and most of the downstream decisions follow.

## ICH Q3: the everyday impurity framework

The Q3 series is the backbone. Four documents, each owning a category.

| Guideline | Scope | Core control |
|-----------|-------|--------------|
| ICH Q3A(R2) | Impurities in **new drug substances** | Reporting / identification / qualification thresholds tied to max daily dose |
| ICH Q3B(R2) | Impurities (degradation products) in **new drug products** | Same threshold logic, applied to finished product |
| ICH Q3C(R9) | **Residual solvents** | Class 1/2/3 system with PDEs |
| ICH Q3D(R2) | **Elemental impurities** | PDEs for 24 elements by route of administration |

### Q3A and Q3B: the threshold ladder

Q3A (drug substance) and Q3B (drug product) share a logic. The amount of work an impurity demands scales with how much of it a patient would receive, which is a function of its concentration and the maximum daily dose. The guidelines publish tables of thresholds keyed to daily dose. For a drug substance at a maximum daily dose at or below 2 g/day, the canonical numbers are:

- **Reporting threshold** — the level above which an impurity must be reported in the analytical results. For doses ≤2 g/day this is 0.05%.
- **Identification threshold** — the level above which you must structurally identify the impurity. Typically 0.10% or 1.0 mg/day intake, whichever is lower.
- **Qualification threshold** — the level above which you must establish the biological safety of the impurity. Typically 0.15% or 1.0 mg/day intake, whichever is lower.

Higher daily doses tighten the percentage thresholds, because the absolute intake is what matters. Q3B applies the same ladder to degradation products in the finished product, with its own dose-keyed table.

"Qualification" is the step practitioners underestimate. It means generating the data — often a literature justification, sometimes a dedicated toxicology study — that shows the impurity is safe at the proposed level. If an impurity sits above the qualification threshold and you cannot qualify it, the answer is not to argue; it is to change the process or tighten the specification so the impurity drops below threshold.

### Q3C: residual solvents

Q3C classifies solvents by toxicity into three tiers and sets control accordingly.

- **Class 1** — solvents to avoid (benzene, carbon tetrachloride, 1,2-dichloroethane, 1,1-dichloroethene, 1,1,1-trichloroethane). Known carcinogens or environmental hazards. If unavoidable, controlled at very low ppm limits.
- **Class 2** — solvents to limit (e.g. acetonitrile, methanol, dichloromethane, toluene). Each has a **Permitted Daily Exposure (PDE)** in mg/day and a corresponding concentration limit in ppm.
- **Class 3** — low-toxicity solvents (e.g. ethanol, acetone, ethyl acetate). Generally regarded as acceptable up to 0.5% (5000 ppm) without further justification.

Q3C also defines the **Option 1 / Option 2** approach. Option 1 uses a simple concentration limit (ppm) derived from the PDE assuming a 10 g/day product mass. Option 2 lets you use the actual daily dose to back-calculate a higher allowable concentration when the dose is small — useful when a solvent is hard to remove but the product is low-dose. The PDE itself is derived from a No-Observed-Effect Level divided by modifying factors, a structure that recurs throughout impurity toxicology.

### Q3D: elemental impurities

Q3D replaced the old USP heavy-metals colorimetric test — a method that was non-specific, insensitive, and frankly a relic — with a risk-based, element-specific framework. It sets **PDEs for 24 elements** and groups them into classes by toxicity and likelihood of occurrence:

- **Class 1** — As, Cd, Hg, Pb. Human toxicants, limited use; always assess.
- **Class 2A** — Co, Ni, V. Higher probability of occurrence; always assess.
- **Class 2B** — e.g. Ag, Au, Pd, Pt, the platinum-group catalysts. Assess only if intentionally added.
- **Class 3** — e.g. Ba, Cr, Cu, Li, Mo, Sb, Sn. Lower oral toxicity; assessment depends on route.

PDEs differ by route of administration — oral, parenteral, and inhalation limits diverge by orders of magnitude because bioavailability and target-organ exposure differ. The expected analytical workhorses are **ICP-MS** and **ICP-OES**, validated per the general chapter framework (USP <232>/<233> in the United States, harmonized with Q3D).

The practical Q3D deliverable is an **elemental impurity risk assessment**: enumerate every potential source (drug substance synthesis, excipients, water, manufacturing equipment, container-closure), estimate the contribution of each against the PDE, and decide whether routine testing is needed or whether a documented control strategy suffices. Inspectors expect this document to exist and to be tied to actual data, not assertions.

## ICH M7: when an impurity can damage DNA

A subset of organic impurities is more dangerous than its concentration alone implies, because the relevant harm is **genotoxic** — the ability to cause mutations or chromosomal damage. A mutagen does not need to be present at 0.1% to matter; even trace amounts carry a theoretical cancer risk because the mechanism is stochastic. ICH M7(R2), *Assessment and Control of DNA Reactive (Mutagenic) Impurities in Pharmaceuticals to Limit Potential Carcinogenic Risk*, governs this class.

### The Threshold of Toxicological Concern

M7's central concept is the **Threshold of Toxicological Concern (TTC)**: a generic acceptable intake of **1.5 µg/day** for a single mutagenic impurity, derived to correspond to a theoretical excess cancer risk of about 1 in 100,000 over a lifetime. The TTC is deliberately conservative — it is a default you can fall back on when you lack compound-specific data. If you have a compound-specific carcinogenicity dataset, you may calculate a compound-specific acceptable intake instead, which is often higher than the generic TTC.

Two adjustments matter:

- **Less-than-lifetime (LTL) limits.** For drugs taken for a defined, shorter duration, M7 permits higher daily intakes, scaled by exposure duration. A 1-month course can justify a much higher daily limit than chronic therapy.
- **Multiple impurities.** TTC-based limits apply to each impurity individually, but when three or more Class 2 or Class 3 mutagenic impurities are specified on the drug-substance specification, M7 also caps the total. For lifetime exposure that total limit is 5 µg/day; the cap loosens for shorter durations under the same less-than-lifetime logic.

### The five-class structure

M7 classifies impurities by mutagenic and carcinogenic potential:

| Class | Description | Control |
|-------|-------------|---------|
| 1 | Known mutagenic carcinogens | Compound-specific limit |
| 2 | Known mutagens, unknown carcinogenic potential | TTC-based (1.5 µg/day) |
| 3 | Alerting structure, unrelated to API, no mutagenicity data | TTC-based, or test (Ames) |
| 4 | Alerting structure shared with API (API non-mutagenic) | Treat as non-mutagenic |
| 5 | No alerting structure | Treat as non-mutagenic |

### The (Q)SAR step

M7 formally endorses computational toxicology. Impurities without experimental data are screened with **two complementary (Q)SAR methodologies** — one expert-rule-based, one statistics-based — to predict bacterial mutagenicity. If both predict negative and there is no conflicting knowledge, the impurity can be treated as non-mutagenic without bench testing. A positive or equivocal prediction triggers either an Ames test (the bacterial reverse mutation assay) or control to the TTC. This is one of the few places where regulators accept an *in silico* result in lieu of a wet experiment, and it is a major efficiency. The catch: the (Q)SAR output must be a documented, reproducible assessment, and an expert review can override a model call when justified.

### Control options

M7 lays out four **control approaches**, and choosing among them is where the strategy lives:

- **Option 1** — include the impurity in the drug-substance specification with a limit at or below the acceptable intake, tested routinely by an appropriately sensitive method.
- **Option 2** — include it in the specification of a raw material or intermediate, with routine testing upstream.
- **Option 3** — include it in an upstream specification but with a periodic-verification / skip-testing justification rather than every batch, supported by process understanding.
- **Option 4** — no analytical testing on any specification; instead, a **process-based control argument** showing, through documented purge-factor knowledge, that downstream chemistry removes the impurity to well below the acceptable intake with high confidence. This is the most elegant and the most scrutinized: it requires fate-and-purge understanding (and often spiking/purge studies) of where the impurity goes and why it cannot survive to the final drug substance.

A common misconception is that simply showing the impurity sits below some fixed fraction of the AI is enough to claim Option 4. It is not — M7's own Q&A is explicit that merely being consistently under a low percentage of the AI does not by itself justify Option 4. The justification rests on demonstrated purge capability and process understanding, not a single number. Option 4 is attractive because it removes a routine test, but it lives or dies on that evidence. Inspectors challenge Option 4 arguments hard, and a weak purge study is a finding waiting to happen.

## Nitrosamines: the crisis that rewrote the playbook

In mid-2018, an unexpected impurity, **N-nitrosodimethylamine (NDMA)**, was found in valsartan API. NDMA is a probable human carcinogen and a textbook M7 Class 1 compound. What followed was a cascade: recalls across multiple sartans, then ranitidine, then metformin, and eventually a systematic re-examination of essentially every marketed product for nitrosamine risk. The episode exposed a gap. Nobody had been looking for these compounds because nobody had reason to expect them — until a change in a synthetic route, combined with specific reagents, generated them in situ.

Nitrosamines form when a **secondary or tertiary amine** meets a **nitrosating agent** (nitrous acid, nitrites, nitrogen oxides) under the right conditions. The sources are diffuse and easy to miss:

- Nitrite impurities in excipients (nitrites are present at low levels in many common excipients).
- Recovered/recycled solvents and catalysts carrying nitrogen contaminants.
- Quenching steps using sodium nitrite.
- Amine-based reagents or amine degradants in the presence of any nitrite source.
- Contaminated raw materials and even certain packaging or printing inks.
- A newer concern: **nitrosamine drug-substance-related impurities (NDSRIs)**, where the API's own secondary-amine moiety is nitrosated, producing a nitrosamine unique to that drug.

Regulators — FDA, EMA, and others — issued guidance directing manufacturers through a structured response. FDA's *Control of Nitrosamine Impurities in Human Drugs* guidance and EMA's Article 5(3) referral output set the framework now in force.

### The three-step approach

The regulatory response converged on a **three-step process** that every marketing authorization holder was expected to run:

1. **Risk assessment.** Evaluate all marketed products and their manufacturing processes for the possibility of nitrosamine formation or contamination. Document the rationale for every product, including those concluded to be at no risk. This step is paperwork-heavy and unforgiving: a product dismissed without a real assessment is a finding.

2. **Confirmatory testing.** Where the risk assessment identifies a potential for nitrosamines, perform confirmatory analytical testing using sensitive, validated methods. Because the limits are in the parts-per-billion range, this almost always means **LC-MS/MS or GC-MS/MS**, not conventional HPLC-UV.

3. **Reporting and changes.** Report confirmed presence to the relevant authority and implement corrective actions — process changes, supplier changes, reformulation, or, where necessary, market withdrawal — to bring levels within the acceptable intake.

### Acceptable intake limits

The acceptable intake (AI) for a nitrosamine is derived from carcinogenic potency, ideally from compound-specific TD50 data via linear extrapolation to a 1-in-100,000 lifetime risk. For well-studied small nitrosamines like NDMA and NDEA, regulators published specific AI limits in the low-nanogram-per-day range — FDA, for example, lists NDMA at 96 ng/day and NDEA at 26.5 ng/day. Values can differ slightly by jurisdiction and revision, so always pull the current published figure rather than quote from memory. For NDSRIs where no compound-specific potency data exist, regulators developed the **Carcinogenic Potency Categorization Approach (CPCA)**, which assigns an AI based on structural features (the number and nature of α-hydrogens and adjacent activating/deactivating groups) without requiring a bespoke carcinogenicity study. The CPCA gives a defensible default limit and has become the standard starting point for novel nitrosamines.

The mass-balance arithmetic is the same as M7: AI in ng/day, divided by the maximum daily dose in g/day, yields a concentration limit in the drug product. Less-than-lifetime adjustments apply for short-duration products.

### What inspectors look for

The nitrosamine inspections that go badly share patterns:

- A risk assessment that is a checkbox exercise — no real evaluation of recovered solvents, nitrite-bearing excipients, or route-specific amine/nitrite co-occurrence.
- No reassessment after a manufacturing change, a supplier change, or a new excipient lot. Nitrosamine risk is not a one-time activity; it is a lifecycle obligation that change control must trigger.
- Analytical methods not sensitive enough to see the AI — a method with a quantitation limit above the limit you are trying to enforce is worthless, and reporting "not detected" against an insensitive method is a serious deficiency.
- Excipient and supplier qualification that never asked about nitrite content.

## The data-integrity dimension

Here is where impurity control stops being chemistry and becomes governance. An impurity specification is a promise to patients that a number is true. The number comes out of a chromatography data system (CDS), and every weakness of that system is a weakness in the promise.

Impurity testing is unusually exposed to data-integrity risk for structural reasons:

- **The results are near the limit of detection.** Trace-level peaks are small, noisy, and sensitive to how integration is performed. A baseline drawn one way meets spec; drawn another way, it fails. This makes integration a place where bias — conscious or not — can hide.
- **Reprocessing is routine and tempting.** It is legitimate to re-integrate when a method genuinely requires manual adjustment. It is fraud to re-integrate until the answer passes. The distinction is invisible unless the audit trail captures every version.
- **Negative results are the dangerous ones.** "Nitrosamine not detected" is exactly the result an inspector will pressure-test, because it is the result that lets a product ship.

The controls follow directly from **21 CFR Part 11** and Annex 11 (EU GMP) and the MHRA and FDA data-integrity guidances built on **ALCOA+** — data must be Attributable, Legible, Contemporaneous, Original, Accurate, and (the "+") Complete, Consistent, Enduring, and Available.

Concrete expectations for an impurity-testing lab:

- **Audit trails on, reviewed, and never disabled.** The CDS audit trail must capture every acquisition, every integration, every reprocessing, with user, timestamp, and reason. Audit-trail review must be a defined, performed step of result review — not a capability that exists but is never exercised. Inspectors increasingly ask to see the audit-trail-review records, not just the audit trail.
- **No shared logins, no generic accounts.** Attributable means a real, unique, authenticated user behind every action. Shared analyst accounts remain one of the most common Part 11 citations.
- **Controlled integration.** Manual integration should be governed by procedure, justified, and second-person reviewed. Automated integration parameters should be locked in the validated method, with deviations documented.
- **Sequence and injection integrity.** Aborted runs, trial injections, and unreported sequences are classic falsification vectors — the "test injection" that quietly becomes the reportable result. Every injection in a sequence must be accounted for; orphan data files are a red flag.
- **Validated, sensitive methods.** Method validation per ICH Q2(R2) must demonstrate that the limit of detection and limit of quantitation sit below the relevant impurity limit, with documented specificity against the matrix. A method that cannot resolve the impurity from a co-eluting peak cannot defend a "passing" result.

The connection to the rest of this article is direct: M7 and the nitrosamine framework hand the lab a number in nanograms per day. Part 11 and ALCOA+ are what make the lab's claim to have met that number believable. A flawless risk assessment paired with a CDS that lets analysts reprocess until the chromatogram passes is not control — it is theater. Regulators have learned to look at both halves.

## Putting it together: a lifecycle control strategy

The frameworks interlock. A coherent impurity control strategy moves through predictable stages:

1. **Enumerate** every potential impurity — organic (process and degradation), inorganic/elemental, residual solvent — from the route of synthesis, the formulation, the excipients, the equipment, and the container-closure.
2. **Classify** each: ordinary (Q3A/B), residual solvent (Q3C), elemental (Q3D), or potentially mutagenic (M7), with nitrosamines as a flagged special case demanding their own assessment.
3. **Set limits** from the right basis — threshold ladder and qualification for ordinary impurities, PDE for solvents and elements, TTC or compound-specific AI for mutagens, published AI or CPCA for nitrosamines, all adjusted for daily dose and treatment duration.
4. **Choose control** — specification testing, upstream control, periodic verification, or a process-purge argument (M7 Options 1–4), backed by the appropriate evidence.
5. **Validate the analytics** so the method can actually see the limit, and govern the data system so the result can be trusted.
6. **Maintain it across the lifecycle.** Every change — route, supplier, excipient, equipment, scale — triggers reassessment. The nitrosamine crisis happened precisely because a process change introduced a hazard nobody re-evaluated. Change control that does not interrogate impurity and nitrosamine risk is the gap that produces the next recall.

Impurity control rewards the practitioner who treats it as a system rather than a test. The chemistry sets the limits; the toxicology justifies them; the analytics measure against them; and data integrity is what lets anyone believe the measurement. Skip any one of those and the others cannot save you.
