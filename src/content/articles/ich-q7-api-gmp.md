---
title: "ICH Q7: GMP for Active Pharmaceutical Ingredients"
description: "How ICH Q7 sets the GMP rules for active pharmaceutical ingredients, where GMP begins for starting materials, API process validation, impurity control, supply-chain change control, the quality unit's role, and how Q7 underpins both small-molecule synthesis and biologic drug substance."
pubDate: 2026-06-20
tags: ["ICH Q7", "API", "GMP", "process validation", "impurity control", "change control", "quality assurance", "drug substance"]
pillar: "quality-assurance"
tier: "Intermediate"
---

A finished drug product is only as clean as the active ingredient inside it. You can run a flawless tablet press, validate every fill line, and still ship a defective lot if the API arrived with the wrong impurity profile, an undocumented process change, or a starting material nobody controlled. That is the gap ICH Q7 was written to close.

Most people in pharma quality learn the finished-dosage rules first. In the United States that is 21 CFR Part 211, the cGMP regulation for finished pharmaceuticals. But APIs are made in a different world. They are synthesized, fermented, extracted, and purified in chemical plants and bioreactors, often by contract manufacturers several tiers removed from the company whose name goes on the label. Part 211 was not written for that world, and for years API GMP expectations were inconsistent across regions. ICH Q7, *Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients*, finalized in November 2000, is the harmonized answer. The FDA adopted it verbatim as a guidance for industry in 2001, the EU incorporated it as Part II of the EU GMP Guide (EudraLex Volume 4), and it remains the global reference for how an API should be made under GMP. The ICH Q7 Questions and Answers document, adopted in 2015, clarifies many of the points inspectors and industry argued over for a decade.

This article walks through the parts of Q7 that generate the most inspection findings and the most engineering debate: deciding where GMP starts, validating an API process, controlling impurities, managing change across a fragmented supply chain, the role of the quality unit, and the way Q7 underpins both a small-molecule synthesis and a biologic drug substance. The goal is that you can read this page and then do the job, hold your own in an inspection or an interview, and know where to look when a number matters.

## What Q7 Is, and What It Is Not

Q7 is a GMP guide for the manufacture of APIs intended for use in human drug products. It covers the full chain from the introduction of API starting materials through the steps that produce the finished API, including packaging and labeling of the API itself. It applies regardless of the route of manufacture: chemical synthesis, fermentation, cell culture, extraction from natural sources, recovery, or any combination.

What Q7 deliberately leaves out is just as important. It does not cover:

- Steps before the introduction of the defined "API starting material."
- Vaccines, whole cells, whole blood and plasma, and gene therapy products. The **principles** of Q7 apply, but the document points to other guidances (WHO, regional biologics guidance) for those.
- Medical gases, bulk-packaged drug products, and radiopharmaceuticals, which are addressed elsewhere.

The structure of Q7 follows the familiar GMP architecture across its numbered sections (1 to 19, plus a glossary at Section 20): quality management, personnel, buildings and facilities, process equipment, documentation and records, materials management, production and in-process controls, packaging and labeling, storage and distribution, laboratory controls, validation, change control, rejection and reuse, complaints and recalls, contract manufacturers, agents/brokers/distributors. Section 18 adds specific guidance for APIs made by cell culture or fermentation, and Section 19 covers APIs used in clinical trials.

Put plainly: Part 211 tells you how to make a finished drug; Q7 tells you how to make the active ingredient so the finished-drug maker can trust it. The two meet at the API specification, the certificate of analysis, and the supplier qualification file. For the foundational concepts behind both, see [what GMP is](/articles/what-is-gmp) and the [21 CFR 210/211 cGMP walkthrough](/articles/cfr-210-211-cgmp-walkthrough).

## The "Where Does GMP Begin?" Decision

This is the single most consequential decision in API manufacturing, and inspectors know it. Apply GMP too late and you have uncontrolled chemistry feeding into your regulated process. Apply it too early and you burden the front end of a long synthesis, sometimes dozens of steps, with controls that add cost without adding patient protection.

Q7 frames the answer around the **API starting material**: a raw material, intermediate, or API used in the production of an API that is incorporated as a significant structural fragment into the structure of the API. The starting material is the point at which GMP under Q7 formally begins. Everything from that point forward must be made under GMP; steps before it are expected to follow sound scientific principles but sit outside Q7's scope.

Q7 gives a graded model. As you move downstream from the starting material toward the final API, GMP controls increase. Early steps may have looser controls; the closer you get to the final API, the tighter everything becomes. Equipment cleaning, impurity testing, environmental controls, documentation, and validation all ratchet up. Table 1 in Q7's Scope section illustrates where GMP applies across manufacturing types: for chemical synthesis, GMP begins at the introduction of the API starting material; for biotechnology (recombinant) cell culture and fermentation, it begins at the maintenance of the working cell bank; for classical fermentation to produce an API, it begins at the introduction of the cells into fermentation.

The judgment is not purely a manufacturer's to make in isolation. The choice of starting material is reviewed by regulators as part of the marketing application. ICH Q11, *Development and Manufacture of Drug Substances* (2012), lays out the principles and supporting data expected to justify the selection of a starting material: the starting material should be a substance of defined chemical properties and structure, with adequate specifications, and enough of the synthesis should be carried out under GMP to assure impurity control of the final API. The Q11 Q&A (2017) gives worked logic for the general principles. A common inspection and review finding is a starting material chosen too late in the route, typically to shrink the GMP footprint, leaving impurity-forming chemistry uncontrolled and unjustified.

### The graded GMP model, made concrete

Picture a five-step synthesis. The starting material (SM) enters at step 1 and the final API is isolated at step 5. The controls do not jump from zero to full GMP at one line; they tighten step by step.

| Control element | Step 1 (just after SM) | Step 3 (mid-route intermediate) | Step 5 (final API isolation, drying, packaging) |
|---|---|---|---|
| Batch records | Required, may be simpler | Full GMP batch record | Full GMP batch record, second-person verified |
| Equipment cleaning | Validated or verified | Validated, residue limits set | Validated, dedicated or worst-case grouped |
| In-process testing | Key conversion checks | CPP monitoring + IPC limits | Full IPC, hold-point release by QC |
| Impurity testing | Track key impurities | Purge-relevant impurities tested | Full registered impurity profile |
| Environmental control | Basic | Basic to controlled | Controlled, often classified for final isolation/drying |
| Change control | Formal | Formal | Formal, MAH-notified, regulatory-impact assessed |

The principle, set in Q7's Scope (Section 1) and Table 1, is that once a material enters the process at the defined GMP starting point, "appropriate GMP as defined in this Guide should be applied to these intermediate and/or API manufacturing steps." How much more rigor you add downstream is a documented, risk-based decision, not a guess.

### How to defend a starting-material proposal

1. Show that the proposed starting material is a significant structural fragment of the API, not a trivial reagent or a fragment that disappears in the next step.
2. Demonstrate with data that impurities introduced before the starting material are purged or controlled downstream. Spiking studies are the standard evidence, not a narrative assertion.
3. Confirm the starting material has a meaningful specification: identity, assay, and relevant impurity limits, plus residual solvents or metals where they carry through.
4. Keep enough synthetic steps under GMP that final-API quality is genuinely controlled. A useful sanity test: count the steps from the starting material to the API and ask whether the impurity-forming and impurity-purging chemistry is inside or outside GMP.

**Acceptance criteria for "we got the starting-material decision right":** the regulatory reviewer accepted the proposal without a major deficiency on starting-material justification; the impurity carryover from pre-SM steps is supported by purge data; the SM specification is tied to the final-API impurity control; and the GMP boundary is documented in the control strategy, not just on a route map.

**Roles:** Process Development and CMC own the scientific justification and the purge data. Regulatory Affairs owns the negotiation with the agency and the Module 3 (3.2.S.2.3) narrative. The Quality Unit owns the GMP boundary inside the firm and confirms that everything claimed to be "under GMP" actually is.

## Process Validation for APIs

API process validation follows the same lifecycle logic the industry applies broadly: design the process, qualify it at commercial scale, and keep it in a state of control. Q7 has API-specific expectations that differ from finished-dosage validation.

Q7 Section 12 defines process validation as documented evidence that the process, operated within established parameters, can perform effectively and reproducibly to produce an API meeting its predetermined specifications and quality attributes. It recognizes prospective, concurrent, and retrospective validation, with prospective as the default for new processes. The FDA's 2011 guidance *Process Validation: General Principles and Practices* frames validation as three stages: Stage 1 Process Design, Stage 2 Process Qualification, Stage 3 Continued Process Verification. That lifecycle model is fully compatible with Q7 and is what inspectors increasingly expect. See the [process validation lifecycle](/articles/process-validation-lifecycle), [process performance qualification (PPQ)](/articles/process-performance-qualification-ppq), and [continued process verification](/articles/continued-process-verification-cpv) for the mechanics that apply to both APIs and drug product.

What is genuinely different for APIs:

**The number of validation batches is not fixed by rule.** The reflex of "three batches" appears nowhere as a requirement in Q7 or the FDA guidance. Both expect a number justified by process understanding, complexity, and variability. A simple, well-characterized synthesis with strong development data may justify fewer qualification runs; a high-variability fermentation may need more. If you cannot articulate why the number you chose is enough, that is the finding waiting to happen.

**Critical process parameters and critical quality attributes drive the protocol.** Q7 expects critical parameters and attributes to be identified during development, monitored, and controlled. This is where ICH Q8 (Pharmaceutical Development), Q9 (Quality Risk Management), Q10 (Pharmaceutical Quality System), and Q11 connect to Q7: the development data and risk assessments define what "validated" must demonstrate. See [quality by design and DoE](/articles/quality-by-design-and-doe) and [quality risk management](/articles/quality-risk-management).

**Impurity clearance is part of validation, not separate from it.** For an API, proving that the process consistently removes or controls impurities, residual solvents, reagents, catalysts, genotoxic intermediates, and related substances is a core validation objective, not an afterthought.

**Cleaning validation matters more in multiproduct chemical plants.** API facilities frequently run several products in the same equipment trains. Q7 expects validated cleaning with established, justified residue limits and analytical methods capable of detecting residues at those limits, with worst-case product and equipment grouping where appropriate. See [cleaning validation fundamentals](/articles/cleaning-validation-fundamentals) and [cleaning validation execution](/articles/cleaning-validation-execution).

### A validation lifecycle for an API, in practice

| Stage | Q7 / lifecycle activity | Typical deliverables | Acceptance criteria |
|---|---|---|---|
| Design | Define route, identify CPPs/CQAs, set control strategy, run risk assessment | Development report, risk assessment, draft control strategy | CPPs/CQAs ranked and justified; control strategy approved |
| Qualification | Equipment IQ/OQ/PQ; run process performance qualification (PPQ) batches at scale | IQ/OQ/PQ protocols and reports, PPQ protocol/report | All PPQ acceptance criteria met across all runs; no unexplained excursions |
| Continued verification | Trend critical parameters and attributes across routine production | APR/PQR data, control charts, periodic review | Process stays within validated ranges; trends in control; no creeping shift |

The point inspectors probe hardest is the link between development knowledge and the validation claim. If a protocol sets an acceptance criterion with no rationale tying it to a CQA, or validates a parameter range narrower than the process actually runs, expect a finding. A validated range of 60-65 C that the plant routinely runs at 58-67 C is not validated, it is contradicted.

### A worked PPQ acceptance-criteria snippet

For the final crystallization step of a small-molecule API, a PPQ protocol might lock criteria like this:

| Attribute / parameter | Type | Acceptance criterion | Basis |
|---|---|---|---|
| Cooling rate | CPP | 0.4-0.6 C/min | Polymorph control, from DoE |
| Final hold temperature | CPP | 0-5 C | Yield and impurity rejection |
| Specified impurity X | CQA | NMT 0.10% | ICH Q3A identification threshold, dose-based |
| Residual solvent (Class 2) | CQA | Within ICH Q3C PDE limit | Q3C(R9) |
| Assay (dried basis) | CQA | 98.0-102.0% | Registered specification |
| Particle size D90 | CQA | NMT 50 µm | Bioavailability / downstream blending |

Three PPQ batches that all meet every line, with cooling rate trending tightly inside the band and impurity X near 0.04% with margin, is a clean qualification. One batch where impurity X hit 0.09% with a cooling-rate excursion is a signal to investigate, not to wave through because it "passed spec."

**Roles:** Process Development sets the design space and CPP/CQA list. Validation/Engineering executes IQ/OQ/PQ and PPQ. QC runs the analytical methods. The Quality Unit approves the validation protocol and report and owns the disposition of the PPQ batches. Manufacturing executes the batches under the validation protocol.

## Impurity Control

For an API, the impurity profile is the product as much as the assay value is. Two lots that both assay at 99.5% can be very different drugs if one carries a different impurity at 0.2%. Q7's laboratory-controls and production sections require that impurities be understood, specified, and controlled, and the ICH Q3 family plus M7 fills in the quantitative expectations. Related reading: [nitrosamine impurities under Q3/M7](/articles/nitrosamines-impurities-q3-m7) and [stability programs under ICH](/articles/stability-programs-ich).

The relevant standards:

- **ICH Q3A(R2), Impurities in New Drug Substances**, sets reporting, identification, and qualification thresholds for organic impurities in the drug substance, tied to maximum daily dose. For a drug substance with a maximum daily dose up to 2 g/day, the thresholds are 0.05% reporting, 0.10% identification, and 0.15% qualification (or 1.0 mg/day intake, whichever is lower). Read the exact threshold against the dose band in the current guideline, because the numbers change at higher doses.
- **ICH Q3C(R9), Residual Solvents**, classifies solvents (Class 1 to avoid, Class 2 limited, Class 3 low-toxicity) and sets permitted daily exposure (PDE) limits.
- **ICH Q3D(R2), Elemental Impurities**, sets PDEs for elemental impurities (including catalysts and reagents such as palladium, platinum, and nickel) by route of administration, built on a risk-based control approach.
- **ICH M7(R2), Assessment and Control of DNA Reactive (Mutagenic) Impurities**, governs mutagenic impurities. It defines structural-alert assessment, the (Q)SAR methodology using two complementary prediction systems, and the threshold of toxicological concern (TTC) of generally 1.5 µg/day for lifetime exposure.

What this means operationally for an API maker:

- **Know your impurity origins.** Map each specified and potential impurity to where it forms or enters: starting-material impurity, side reaction, degradation, reagent, catalyst, or solvent. This map is what justifies your control strategy.
- **Control at the right step.** Q7 and Q11 favor controlling an impurity where it is most effectively purged. If a downstream crystallization reliably rejects an early impurity, you can sometimes loosen an upstream control, but you must show the purge with spiking studies, not assertion.
- **Mutagenic impurities get special treatment.** M7 expects a hazard assessment of actual and potential impurities for mutagenic potential, control to the TTC or a compound-specific acceptable intake, and often a "purge factor" argument showing the process removes the impurity so far below the limit that routine testing is unnecessary.
- **Set specifications per ICH Q6A.** The API specification (identity, assay, impurities, residual solvents, water, particle attributes where relevant) is the contract between the API maker and the drug-product maker. Q6A provides the decision trees for what to include. See the [certificate of analysis](/articles/certificate-of-analysis) for how that specification is reported lot by lot.

### A worked impurity map

| Impurity | Origin | Stage formed | Control point | Limit | Routine test? |
|---|---|---|---|---|---|
| Impurity A (des-methyl) | Side reaction at step 2 | Step 2 | Purged at step 4 crystallization | NMT 0.10% | Yes, in-process at step 4 |
| Impurity B (SM carryover) | Present in starting material | Pre-SM | SM specification + step 3 wash | NMT 0.15% | SM release + final API |
| Nitrosamine (potential) | Secondary amine + nitrite source | Step 3 | Avoid nitrite; purge factor argument per M7 | AI 18 ng/day (EMA) or 26.5 ng/day (FDA), converted to a ppm limit vs max daily dose | Skip-test justified by purge |
| Pd (catalyst) | Coupling catalyst step 2 | Step 2 | Scavenger resin + crystallization | Within Q3D oral PDE | Periodic per Q3D risk assessment |
| Residual THF | Reaction solvent | Multiple | Drying | Within Q3C Class 2 PDE | Yes, final API |

The purge-factor logic for the nitrosamine is the kind of argument inspectors expect to see written down: estimate the purge across each downstream step, multiply, compare to the worst-case predicted carryover, and if the result sits comfortably below the acceptable intake, justify skip-testing rather than routine assay.

**A frequent inspection theme:** an impurity observed in stability or in a process deviation that was never in the registered profile, with no investigation into its source or toxicological relevance. Q7's deviation and investigation requirements (Sections 2 and 8) make characterizing unexpected impurities a CAPA obligation, not an optional study. See [out-of-specification investigation](/articles/oos-investigation-process), [out-of-trend investigations](/articles/out-of-trend-investigations), and [what a CAPA is](/articles/what-is-a-capa).

**Roles:** QC owns the analytical methods and the impurity testing. CMC/Process Development owns the impurity map and purge studies. Toxicology or a qualified assessor owns the M7 mutagenicity assessment and any compound-specific acceptable intake. The Quality Unit owns the specification approval and the deviation/CAPA for any out-of-profile result.

## Change Control Across the API Supply Chain

APIs are rarely made by one company in one building. A typical chain: a starting-material supplier, a contract manufacturer running the synthesis, possibly a separate site for the final crystallization and micronization, then the drug-product maker. Each handoff is a place where a change can propagate undetected. Q7 Section 13 requires a formal change control system, and the supply-chain dimension is where it most often breaks down. For the general discipline, see [change control of validated systems](/articles/change-control-validated-systems).

Q7 expects:

- A written change control procedure covering raw materials, specifications, analytical methods, facilities, equipment, processing steps, labeling and packaging, and GMP-relevant computer software.
- Classification of changes by potential impact on API quality (the common minor/major framing, with major changes requiring more data).
- Evaluation of whether a change requires additional validation, stability data, or notification to regulatory authorities.
- The quality unit's involvement in reviewing and approving changes before implementation.

### A change-impact decision sequence

1. **Describe the change precisely.** Vague descriptions ("optimized the workup") defeat the assessment. State what changes, where, and by how much.
2. **Classify the change** against defined criteria: does it touch a CPP, a CQA, the impurity profile, the specification, the equipment train, or a registered detail?
3. **Assess quality impact** with the relevant subject-matter experts: does it affect identity, strength, quality, purity, or the impurity profile?
4. **Determine validation impact:** does it need revalidation, additional PPQ, or cleaning revalidation?
5. **Determine stability impact:** does it need new or extended stability per the [stability program](/articles/stability-programs-ich)?
6. **Determine regulatory reportability:** variation, supplement, or notification, and at what tier? ICH Q12 *Lifecycle Management* (2019) introduced Established Conditions and the Post-Approval Change Management Protocol (PACMP) to make this more predictable. See [ICH Q12 lifecycle management](/articles/ich-q12-lifecycle-management).
7. **Route to the MAH** where the change sits at a CMO. The marketing authorization holder owns the regulatory commitment and must classify regulatory impact, not the site alone.
8. **Approve, implement, and verify effectiveness.** Confirm the change did what it was supposed to and caused nothing it should not have.

### The chain-specific failure modes

1. **A supplier changes upstream and nobody tells the API maker.** A starting-material vendor switches a reagent source or a purification step, shifting the impurity profile. If the quality agreement does not require notification of changes, the first sign may be an out-of-trend impurity in the final API. Quality agreements (consistent with the FDA's 2016 guidance *Contract Manufacturing Arrangements for Drugs: Quality Agreements* and EU GMP Chapter 7 on outsourced activities) must define which changes the supplier must notify and obtain agreement on before implementing. See [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements).

2. **A CMO treats a change as "minor" that the MAH would call "major."** The contract giver and contract acceptor can have different impact perceptions. The MAH owns the regulatory commitment; the change-control system must route changes to the MAH for impact classification, not let the site decide in isolation.

3. **Regulatory notification falls through the cracks.** Many API changes require a variation or supplement filing before implementation. Q12 only helps if the change-control system is wired to evaluate regulatory reportability for every change.

### A worked change-control entry

| Field | Entry |
|---|---|
| Change ID | CC-API-0142 |
| Description | Step 2 Pd coupling catalyst lot source changed from Supplier 1 to Supplier 2; same grade, different particle size distribution |
| Classification | Major (touches catalyst, potential Pd carryover and reactivity) |
| Quality impact | Pd residual per Q3D; reaction conversion; impurity A formation rate |
| Validation impact | One PPQ batch with new catalyst; confirm Pd purge to within PDE |
| Stability impact | One commitment batch on stability |
| Regulatory impact | Assessed reportable; variation filed before implementation |
| MAH notification | Yes, classified by MAH RA |
| Effectiveness check | Three routine batches: Pd within limit, impurity A in trend |
| QU approval | Approved with conditions; implement after PPQ batch passes |

A clean change-control record at the CMO that has no corresponding evaluation at the MAH is a finding. So is a quality agreement that is silent on starting-material changes. Traceability matters: when an unexpected change shows up in the final API, you should be able to walk it back to its origin step.

**A defensible supply-chain change-control posture:**

- A current quality agreement with every supplier and CMO that explicitly lists change categories requiring prior notification and agreement.
- A periodic audit program (Q7 Section 16 expects evaluation of contract manufacturers). See [conducting a supplier audit](/articles/conducting-a-supplier-audit) and [supplier and vendor qualification](/articles/supplier-vendor-qualification).
- A documented impact assessment for every change that reaches the question "does this require new validation, new stability, or a regulatory filing?" before implementation.
- Traceability from any final-API anomaly back to its origin step.

## The Quality Unit and Documentation

Q7 Section 2 builds the entire guide on an independent quality unit. The quality unit (which may be a single quality assurance and quality control function or separate QA and QC groups) is independent of production and has defined, non-delegable responsibilities. It must, among other things, release or reject all APIs and intermediates, review and approve master and executed batch records, approve specifications and changes, ensure deviations and complaints are investigated, and ensure suppliers are qualified. The phrase inspectors hold sites to is that the quality unit "should not delegate" these core responsibilities.

Documentation under Q7 follows the same logic as finished-dosage GMP. Master production instructions are controlled and approved; batch production records are issued, executed contemporaneously, and reviewed before release. Each significant step is recorded with who did it and when. The [batch record review](/articles/batch-record-review-gmp) and [batch disposition](/articles/batch-disposition-decisions) practices apply directly. Data integrity expectations are identical to those for finished product: records must be attributable, legible, contemporaneous, original, and accurate, with the ALCOA+ extensions. See [ALCOA+ in detail](/articles/alcoa-plus-deep-dive), [good documentation practices](/articles/good-documentation-practices), and [data integrity foundations](/articles/data-integrity-foundations). Laboratory data integrity in API QC labs, particularly chromatography systems, is a frequent finding area, so [chromatography data system integrity](/articles/chromatography-data-system-integrity) is worth reading alongside Q7.

**Acceptance criteria for a healthy quality unit:** every API and intermediate lot has a documented QU disposition; batch records are reviewed against the master before release; deviations are investigated and closed within procedure; the QU has documented authority to stop production and reject material; and there is no evidence of production overriding a QU decision.

## Q7 for Small Molecules vs. Biologic Drug Substance

Q7 applies to both small-molecule and biotechnology-derived APIs, and Section 18 specifically addresses APIs manufactured by cell culture or fermentation. The two manufacturing modes stress different parts of the guide. The point here is that Q7 is a single GMP backbone for a wide range of modalities, not a small-molecule-only document.

**Small-molecule synthesis** is dominated by chemistry. The hard problems are impurity formation and purge, residual solvents and metals, mutagenic intermediates, and cleaning validation in multiproduct equipment. The process is usually a defined sequence of reactions with isolable intermediates you can specify and test. Validation is about demonstrating consistent chemical conversion and consistent impurity rejection.

**Biologic drug substance** (proteins, monoclonal antibodies, and similar products made by cell culture or fermentation) stresses biological control. Section 18 adds expectations around the cell bank system (master and working cell banks), where GMP generally begins at maintenance of the working cell bank. The dominant concerns shift:

- **Cell bank control and characterization:** identity, viability, purity, and genetic stability of the banks.
- **Bioburden and viral safety:** fermentation and culture steps must control microbial contamination; mammalian-cell products require a viral clearance strategy. Q7 hands off to ICH Q5A (viral safety evaluation), Q5B (analysis of the expression construct), Q5C (stability of biotech products), Q5D (cell substrates), and Q6B (specifications for biotech products). See [bioburden and endotoxin testing](/articles/bioburden-and-endotoxin-testing).
- **Process-related and product-related impurities:** host cell proteins, host cell DNA, leached affinity ligand, aggregates, and charge variants, analyzed differently from small-molecule related substances and often requiring a panel of orthogonal methods. See [comparability and potency assays](/articles/comparability-and-potency-assays).
- **Comparability after change:** a biologic's quality attributes are sensitive to process change, so ICH Q5E (comparability) governs how you demonstrate a product is unchanged after a manufacturing change. This is a far heavier lift than the equivalent small-molecule change assessment. For the validation side, see [process validation for biologics](/articles/process-validation-for-biologics).

| Dimension | Small-molecule API | Biologic drug substance |
|---|---|---|
| Where GMP begins (Q7) | Introduction of API starting material | Maintenance of working cell bank |
| Dominant impurity concern | Organic impurities, residual solvents, metals, mutagenics | Host cell proteins/DNA, aggregates, viral safety |
| Key companion ICH guidances | Q3A/Q3C/Q3D, M7, Q6A, Q11 | Q5A-Q5E, Q6B, Q11 |
| Comparability after change | Impurity/structure data | Q5E structured comparability, often clinical bridging |
| Process variability | Generally lower | Generally higher (living systems) |

The constant across both: Q7's quality-system backbone. A quality unit independent of production with authority to release or reject, controlled documentation and records, deviation and CAPA, validated processes and methods, qualified suppliers, and change control. The chemistry and biology differ; the governance does not. (Advanced therapies, cell and gene products, fall under separate guidance such as EU GMP Part IV; Q7 principles inform them but do not directly govern them. See [ATMP GMP for cell and gene manufacturing](/articles/atmp-gmp-cell-gene-manufacturing).)

## What Inspectors Look For

A few recurring themes separate sites that pass API inspections from those that collect observations. These map directly to the patterns in [FDA warning-letter trends](/articles/fda-warning-letters-patterns) and [regulatory intelligence on 483 trends](/articles/regulatory-intelligence-483-trends).

- **Starting-material justification with data**, not a route diagram with a convenient cut line. Be ready to show impurity purge from before the starting material.
- **Validation tied to development knowledge.** Acceptance criteria should trace to CQAs; parameter ranges should cover the real operating space.
- **A live impurity control strategy.** Every specified impurity mapped to origin and control point; unexpected impurities investigated, not just retested.
- **Quality agreements that actually govern change.** Silence on starting-material or process changes at a supplier is a gap inspectors find quickly.
- **An independent quality unit with teeth.** Q7 expects the quality unit to be involved in all quality-related matters and to approve or reject APIs, intermediates, specifications, and changes.
- **Data integrity** across the lab and production records: complete, attributable, contemporaneous, and reviewed. The same ALCOA+ expectations that apply to finished-dosage data apply to API records, and laboratory data integrity in API QC labs is a frequent finding area.

To get ahead of an inspection, see [FDA inspection readiness](/articles/fda-inspection-readiness) and [managing a live inspection](/articles/managing-a-live-inspection). If you do receive observations, [483 and warning-letter response](/articles/483-warning-letter-response) covers the remediation.

### Common mistakes, drawn from real finding patterns

- Choosing a starting material so late in the route that the impurity-forming chemistry is outside GMP, with no purge data to back the boundary.
- Running "three batches" as a ritual with no statement of why three is enough for this process's variability.
- Validating a parameter range narrower than the plant actually operates, so the validated state and the real state disagree.
- Treating cleaning validation as a one-time exercise in a multiproduct plant, with residue limits not tied to the most potent product made in that train.
- Letting a CMO classify changes without MAH review, so a "minor" change at the site is a reportable change to the agency.
- Finding a new impurity in stability or a deviation and retesting it away instead of investigating its source and toxicological relevance.
- Quality agreements that are signed but stale, silent on starting-material changes, or never tied to an audit program.

## Interview-Ready: Questions and How to Answer

These are the questions an interviewer or an inspector asks on this topic. Short, specific answers beat long ones.

**"Where does GMP begin for an API, and who decides?"**
At the introduction of the API starting material for chemical synthesis, at maintenance of the working cell bank for biotechnology (recombinant) cell culture and fermentation, and at the introduction of the cells into fermentation for classical fermentation (Q7 Table 1). The manufacturer proposes the starting material, but the agency reviews and accepts it as part of the marketing application under ICH Q11. The boundary must be justified with impurity-purge data, not chosen just to shrink the GMP footprint.

**"How many batches do you need for API process validation?"**
There is no required number. Q7 and the 2011 FDA process validation guidance expect a number justified by process understanding, complexity, and variability. A simple, well-characterized synthesis may need few; a high-variability fermentation needs more. The right answer is a defensible rationale, not "three."

**"How is API validation different from finished-product validation?"**
Impurity clearance is a core validation objective, cleaning validation carries more weight in multiproduct chemical plants, and the parameters that matter are chemical or biological CPPs tied to the impurity profile and the structure. The lifecycle (design, qualify, continued verification) is the same.

**"How do you control a mutagenic impurity you cannot fully purge?"**
Assess it under ICH M7: structural-alert and (Q)SAR evaluation with two complementary systems, then control to the TTC of 1.5 µg/day or a compound-specific acceptable intake. Where the process purges it well below the limit, build a purge-factor argument to justify skip-testing instead of routine assay.

**"A supplier changed a step and your final API impurity profile shifted. What failed?"**
The change-control and quality-agreement system. The quality agreement should have required the supplier to notify and get agreement before that change. The fix is a current agreement listing change categories needing prior notification, a periodic audit program, and routing of supplier changes to the MAH for impact and reportability assessment.

**"What is the quality unit not allowed to delegate under Q7?"**
Release or rejection of APIs and intermediates, review and approval of batch records, approval of specifications and changes, and ensuring investigations of deviations and complaints. The quality unit must be independent of production.

**"How does Q7 relate to the rest of ICH?"**
Q7 is the GMP execution layer. Q8 gives development and design space, Q9 gives risk management, Q10 gives the quality system, Q11 gives drug-substance development and starting-material justification, Q12 gives lifecycle change management, the Q3 family and M7 give impurity expectations, and the Q5 family plus Q6B cover biologics. Q7 is where all of that becomes a daily discipline on the floor and in the lab.

**"Small molecule vs biologic under Q7, one difference that matters most?"**
Comparability after a manufacturing change. For a small molecule you compare impurity and structural data; for a biologic, Q5E demands a structured comparability exercise, often with bridging studies, because the product's quality attributes are sensitive to process change.

## Where Q7 Sits in the Bigger Picture

Q7 does not stand alone. It is the GMP execution layer for APIs, sitting underneath the ICH quality framework that defines *what* quality means and *how* to develop and control it:

- **Q8** for pharmaceutical development and design space.
- **Q9** for quality risk management, the tool you use to decide where controls matter.
- **Q10** for the pharmaceutical quality system that ties development, manufacturing, and lifecycle together. See [the pharmaceutical quality system](/articles/pharmaceutical-quality-system).
- **Q11** for drug-substance development and starting-material justification.
- **Q12** for lifecycle change management.
- The **Q3 family and M7** for impurities; the **Q5 family and Q6B** for biologics; **Q6A** for small-molecule specifications.

Read Q7 as the place where all of that becomes a daily operating discipline on the plant floor and in the QC lab. The finished-product GMP rules you may have learned first assume a controlled active ingredient is already in hand. Q7 is the guarantee that it is.

For the source documents, the ICH quality guidelines (including Q7, the Q7 Q&A, Q11, the Q3 series, M7, and the Q5 series) are published at [ich.org](https://www.ich.org/page/quality-guidelines). The FDA hosts Q7 and related guidances at [fda.gov](https://www.fda.gov/drugs/guidance-compliance-regulatory-information/guidances-drugs), and the EU implementation appears as Part II of the EU GMP Guide in EudraLex Volume 4. When a number matters, a threshold, a PDE, a definition, read it in the current version of the guideline rather than from memory or a summary, because the thresholds are dose- and route-dependent and the guidelines are revised periodically.
