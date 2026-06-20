---
title: "ICH Q7: GMP for Active Pharmaceutical Ingredients"
description: "How ICH Q7 sets the GMP rules for active pharmaceutical ingredients — where GMP begins for starting materials, API process validation, impurity control, supply-chain change control, and its role for small molecules and biologic drug substance."
pubDate: 2026-06-20
tags: ["ICH Q7", "API", "GMP", "process validation", "impurity control", "change control", "quality assurance", "drug substance"]
pillar: "quality-assurance"
tier: "Intermediate"
---

A finished drug product is only as clean as the active ingredient inside it. You can run a flawless tablet press, validate every fill line, and still ship a defective lot if the API arrived with the wrong impurity profile, an undocumented process change, or a starting material nobody controlled. That is the gap ICH Q7 was written to close.

Most people in pharma quality learn the finished-dosage rules first — in the United States, 21 CFR 211, the GMP regulation for finished pharmaceuticals. But APIs are made in a different world. They are synthesized, fermented, extracted, and purified in chemical plants and bioreactors, often by contract manufacturers several tiers removed from the company whose name goes on the label. 21 CFR 211 was not written for that world, and for years API GMP expectations were inconsistent across regions. ICH Q7, *Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients*, finalized in November 2000, is the harmonized answer. The FDA adopted it as guidance for industry, the EU incorporated it as Part II of the EU GMP Guide (EudraLex Volume 4), and it remains the global reference for how an API should be made under GMP.

This article walks through the parts of Q7 that generate the most inspection findings and the most engineering debate: deciding where GMP starts, validating an API process, controlling impurities, managing change across a fragmented supply chain, and the way Q7 underpins both a small-molecule synthesis and a biologic drug substance.

## What Q7 Is, and What It Is Not

Q7 is a GMP guide for the manufacture of APIs intended for use in human drug products. It covers the full chain from the introduction of API starting materials through to the steps that produce the finished API, including packaging and labeling of the API itself. It applies regardless of the route of manufacture — chemical synthesis, fermentation, cell culture, extraction from natural sources, recovery, or any combination.

What Q7 deliberately leaves out is just as important. It does not cover:

- Steps before the introduction of the defined "API starting material."
- Vaccines, whole cells, whole blood and plasma, and gene therapy APIs — though the **principles** of Q7 apply, the document points to other guidances (such as the WHO and regional biologics guidance) for those.
- Medical gases, bulk-packaged drug products, and radiopharmaceuticals, which are addressed elsewhere.

The structure of Q7 follows the familiar GMP architecture — quality management, personnel, buildings and facilities, process equipment, documentation, materials management, production and in-process controls, packaging and labeling, storage and distribution, laboratory controls, validation, change control, rejection and reuse, complaints and recalls, contract manufacturers, and agents/brokers/distributors. Sections 18 and 19 add specific guidance for APIs made by cell culture/fermentation and for APIs used in clinical trials, respectively.

Put plainly: 21 CFR 211 tells you how to make a finished drug; Q7 tells you how to make the active ingredient so the finished-drug maker can trust it. The two meet at the API specification and the supplier qualification file.

## The "Where Does GMP Begin?" Decision

This is the single most consequential decision in API manufacturing, and inspectors know it. Apply GMP too late and you have uncontrolled chemistry feeding into your regulated process. Apply it too early and you burden the front end of a long synthesis — sometimes dozens of steps — with controls that add cost without adding patient protection.

Q7 frames the answer around the **API starting material**: a raw material, intermediate, or API used in the production of an API that is incorporated as a significant structural fragment into the structure of the API. The starting material is the point at which GMP under Q7 formally begins. Everything from that point forward must be made under GMP; steps before it are expected to follow sound scientific principles but are outside Q7's scope.

Q7 gives a graded model. As you move downstream from the starting material toward the final API, GMP controls increase. Early steps may have looser controls; the closer you get to the final API, the tighter everything becomes — equipment cleaning, impurity testing, environmental controls, documentation, and validation all ratchet up. Table 1 in Q7's Scope section illustrates where GMP applies across different manufacturing types: for chemical synthesis, GMP begins at the introduction of the API starting material; for fermentation and cell culture, it begins at the maintenance of the working cell bank.

The judgment is not purely a manufacturer's to make in isolation. The choice of starting material is reviewed by regulators as part of the marketing application. ICH Q11, *Development and Manufacture of Drug Substances*, lays out the principles and supporting data expected to justify the selection of a starting material — including that the starting material should be a substance of defined chemical properties and structure, with adequate specifications, and that enough of the synthesis should be carried out under GMP to assure impurity control of the final API. A common inspection and review finding is a starting material chosen too late in the route — typically to shrink the GMP footprint — leaving impurity-forming chemistry uncontrolled and unjustified.

Practical guidance when defending a starting-material proposal:

- Show that the proposed starting material is a significant structural fragment of the API, not a trivial reagent.
- Demonstrate that impurities introduced before the starting material are purged or controlled downstream, with data.
- Confirm the starting material has a meaningful specification with identity, assay, and relevant impurity limits.
- Keep enough synthetic steps under GMP that final-API quality is genuinely controlled, not just nominally.

## Process Validation for APIs

API process validation follows the same lifecycle logic the industry now applies broadly — design the process, qualify it at commercial scale, and keep it in a state of control — but Q7 has API-specific expectations that differ from finished-dosage validation.

Q7 (Section 12) defines process validation as documented evidence that the process, operated within established parameters, can perform effectively and reproducibly to produce an API meeting its predetermined specifications and quality attributes. It recognizes prospective, concurrent, and retrospective validation, with prospective as the default for new processes. The FDA's broader 2011 *Process Validation: General Principles and Practices* guidance frames validation as three stages — Stage 1 Process Design, Stage 2 Process Qualification, Stage 3 Continued Process Verification — and that lifecycle model is fully compatible with Q7 and is what inspectors increasingly expect.

What is genuinely different for APIs:

**Number of validation batches is not fixed by rule.** The old reflex of "three batches" appears nowhere as a requirement. Q7 and the FDA expect a number justified by process understanding, complexity, and variability. A simple, well-characterized synthesis with strong development data may justify fewer qualification runs; a high-variability fermentation may need more.

**Critical process parameters and critical quality attributes drive the protocol.** Q7 expects critical parameters and attributes to be identified during development, monitored, and controlled. This is where ICH Q8 (Pharmaceutical Development), Q9 (Quality Risk Management), Q10 (Pharmaceutical Quality System), and Q11 connect to Q7: the development data and risk assessments define what "validated" must demonstrate.

**Impurity clearance is part of validation, not separate from it.** For an API, proving that the process consistently removes or controls impurities — residual solvents, reagents, catalysts, genotoxic intermediates, related substances — is a core validation objective, not an afterthought.

**Cleaning validation matters more in multiproduct chemical plants.** API facilities frequently run multiple products in the same equipment trains. Q7 expects validated cleaning procedures with established, justified residue limits and analytical methods capable of detecting residues at those limits, with worst-case product/equipment grouping where appropriate.

A validation lifecycle for an API, in practice:

| Stage | Q7 / lifecycle activity | Typical deliverables |
|-------|------------------------|----------------------|
| Design | Define route, identify CPPs/CQAs, set control strategy, risk assessment | Development report, risk assessment, draft control strategy |
| Qualification | Equipment IQ/OQ/PQ; run process performance qualification batches at scale | IQ/OQ/PQ protocols and reports, PPQ protocol/report |
| Continued verification | Trend critical parameters and attributes across routine production | APR/PQR data, control charts, periodic review |

The point inspectors probe hardest is the link between development knowledge and the validation claim. If a protocol sets an acceptance criterion with no rationale tying it to a CQA, or validates a parameter range narrower than the process actually runs, expect a finding.

## Impurity Control

For an API, the impurity profile is the product as much as the assay value is. Two lots that both assay at 99.5% can be very different drugs if one carries a different impurity at 0.2%. Q7's laboratory-controls and production sections require that impurities be understood, specified, and controlled — and the ICH Q3 family fills in the quantitative expectations.

The relevant standards:

- **ICH Q3A(R2), Impurities in New Drug Substances** — sets reporting, identification, and qualification thresholds for organic impurities in the drug substance, tied to maximum daily dose. For a drug substance with a maximum daily dose up to 2 g/day, the thresholds are commonly 0.05% reporting, 0.10% identification, and 0.15% qualification (or 1.0 mg/day intake, whichever is lower) — verify the exact threshold against the dose band in the guideline.
- **ICH Q3C(R8), Residual Solvents** — classifies solvents (Class 1 to avoid, Class 2 limited, Class 3 low-toxicity) and sets permitted daily exposure limits.
- **ICH Q3D, Elemental Impurities** — sets PDEs for elemental impurities (including catalysts and reagents such as palladium, platinum, nickel) by route of administration, and is built on a risk-based control approach.
- **ICH M7(R2), Assessment and Control of DNA Reactive (Mutagenic) Impurities** — governs genotoxic impurities, defines structural-alert assessment, the (Q)SAR methodology using two complementary systems, and the threshold of toxicological concern (TTC) of generally 1.5 µg/day for lifetime exposure.

What this means operationally for an API maker:

- **Know your impurity origins.** Map each specified and potential impurity to where it forms or enters — starting material impurity, side reaction, degradation, reagent, catalyst, solvent. This map is what justifies your control strategy.
- **Control at the right step.** Q7 and Q11 favor controlling an impurity at the point where it is most effectively purged. If a downstream crystallization reliably rejects an early impurity, you can sometimes loosen an upstream control — but you must show the purge with spiking studies, not assertion.
- **Genotoxic impurities get special treatment.** M7 expects a hazard assessment of actual and potential impurities for mutagenic potential, control to the TTC or a compound-specific acceptable intake, and often a "purge factor" argument showing the process removes the impurity to well below the limit so that routine testing is unnecessary.
- **Set specifications per ICH Q6A.** The API specification — identity, assay, impurities, residual solvents, water, particle attributes where relevant — is the contract between the API maker and the drug-product maker. Q6A provides the decision trees for what to include.

A frequent inspection theme: an impurity observed in stability or in a process deviation that was never in the registered profile, with no investigation into its source or toxicological relevance. Q7's deviation and investigation requirements (Sections 2 and 8) make characterizing unexpected impurities a CAPA obligation, not an optional study.

## Change Control Across the API Supply Chain

APIs are rarely made by one company in one building. A typical chain might be: a starting-material supplier, a contract manufacturer running the synthesis, possibly a separate site for the final crystallization and micronization, then the drug-product maker. Each handoff is a place where a change can propagate undetected. Q7 (Section 13) requires a formal change control system, and the supply-chain dimension is where it most often breaks down.

Q7 expects:

- A written change control procedure covering raw materials, specifications, analytical methods, facilities, equipment, processing steps, labeling and packaging, and computer software relevant to GMP.
- Classification of changes by potential impact on API quality (the common minor/major framing, with major changes requiring more data).
- Evaluation of whether a change requires additional validation, stability data, or notification to regulatory authorities.
- The quality unit's involvement in reviewing and approving changes.

The chain-specific failure modes:

1. **A supplier changes upstream and nobody tells the API maker.** A starting-material vendor switches a reagent source or a purification step, shifting the impurity profile. If the supplier-qualification agreement and quality agreement do not require notification of changes, the first sign may be an out-of-trend impurity in the final API. Quality agreements (consistent with the FDA's *Contract Manufacturing Arrangements for Drugs: Quality Agreements* guidance and EU GMP Chapter 7 on outsourced activities) must define which changes the supplier must notify and obtain agreement on before implementing.

2. **A CMO treats a change as "minor" that the marketing authorization holder would call "major."** The contract giver and contract acceptor can have different impact perceptions. The MAH owns the regulatory commitment; the change-control system must route changes to the MAH for impact classification, not let the site decide in isolation.

3. **Regulatory notification falls through the cracks.** Many API changes require a variation/supplement filing before implementation. ICH Q12, *Lifecycle Management*, introduced tools — Established Conditions and the Post-Approval Change Management Protocol (PACMP) — to make post-approval change more predictable, but Q12 only helps if the change-control system is wired to evaluate regulatory reportability for every change.

Inspectors examine the **quality agreement** and the **change-notification trail** closely for outsourced API steps. A clean change-control record at the CMO that has no corresponding evaluation at the MAH is a finding. So is a quality agreement that is silent on starting-material changes.

A defensible supply-chain change-control posture:

- A current quality agreement with every supplier and CMO that explicitly lists change categories requiring prior notification and agreement.
- A periodic audit program (Q7 Section 16 expects evaluation of contract manufacturers).
- A documented impact assessment for every change that reaches the question "does this require new validation, new stability, or a regulatory filing?" before implementation.
- Traceability so that an unexpected change in the final API can be walked back to its origin step.

## Q7 for Small Molecules vs. Biologic Drug Substance

Q7 applies to both small-molecule and biotechnology-derived APIs, and Section 18 specifically addresses APIs manufactured by cell culture or fermentation. But the two manufacturing modes stress different parts of the guide.

**Small-molecule synthesis** is dominated by chemistry. The hard problems are impurity formation and purge, residual solvents and metals, genotoxic intermediates, and cleaning validation in multiproduct equipment. The process is usually a defined sequence of reactions with isolable intermediates you can specify and test. Validation is about demonstrating consistent chemical conversion and consistent impurity rejection.

**Biologic drug substance** — proteins, monoclonal antibodies, and the like — made by cell culture or fermentation, stresses biological control. Section 18 of Q7 adds expectations around the cell bank system (master and working cell banks), where GMP for these products generally begins at maintenance of the working cell bank. The dominant concerns shift:

- **Cell bank control and characterization** — identity, viability, purity, and genetic stability of the banks.
- **Bioburden and viral safety** — fermentation and culture steps must control microbial contamination; mammalian-cell products require a viral clearance strategy. Here Q7 hands off to ICH Q5A (viral safety evaluation), Q5B (analysis of expression construct), Q5C (stability of biotech products), Q5D (cell substrates), and Q6B (specifications for biotech products).
- **Process-related and product-related impurities** — host cell proteins, host cell DNA, leached protein A, aggregates, and charge variants — analyzed differently from small-molecule related substances and often requiring a panel of orthogonal methods.
- **Comparability after change** — because a biologic's quality attributes are sensitive to process change, ICH Q5E (comparability) governs how you demonstrate that a product is unchanged after a manufacturing change. This is a far heavier lift than the equivalent small-molecule change assessment.

| Dimension | Small-molecule API | Biologic drug substance |
|-----------|-------------------|-------------------------|
| Where GMP begins (Q7) | Introduction of API starting material | Maintenance of working cell bank |
| Dominant impurity concern | Organic impurities, residual solvents, metals, genotoxics | Host cell proteins/DNA, aggregates, viral safety |
| Key companion ICH guidances | Q3A/Q3C/Q3D, M7, Q6A, Q11 | Q5A–Q5E, Q6B, Q11 |
| Comparability after change | Impurity/structure data | Q5E structured comparability, often clinical bridging |
| Process variability | Generally lower | Generally higher (living systems) |

The constant across both: Q7's quality-system backbone — a quality unit independent of production with authority to release or reject, controlled documentation and records, deviation and CAPA, validated processes and methods, qualified suppliers, and change control. The chemistry and biology differ; the governance does not.

## What Inspectors Look For

A few recurring themes separate sites that pass API inspections from those that collect observations:

- **Starting-material justification with data**, not a route diagram with a convenient cut line. Be ready to show impurity purge from before the starting material.
- **Validation tied to development knowledge.** Acceptance criteria should trace to CQAs; parameter ranges should cover the real operating space.
- **A live impurity control strategy.** Every specified impurity mapped to origin and control point; unexpected impurities investigated, not just retested.
- **Quality agreements that actually govern change.** Silence on starting-material or process changes at a supplier is a gap inspectors find quickly.
- **An independent quality unit with teeth.** Q7 expects the quality unit to be involved in all quality-related matters and to approve or reject APIs, intermediates, specifications, and changes.
- **Data integrity** across the lab and production records — complete, attributable, contemporaneous, and reviewed. The same ALCOA+ expectations that apply to finished-dosage data apply to API records, and laboratory data integrity in API QC labs is a frequent finding area.

## Where Q7 Sits in the Bigger Picture

Q7 does not stand alone. It is the GMP execution layer for APIs, sitting underneath the ICH quality framework that defines *what* quality means and *how* to develop and control it:

- **Q8** for pharmaceutical development and design space.
- **Q9** for quality risk management — the tool you use to decide where controls matter.
- **Q10** for the pharmaceutical quality system that ties development, manufacturing, and lifecycle together.
- **Q11** for drug-substance development and starting-material justification.
- **Q12** for lifecycle change management.
- The **Q3 family and M7** for impurities; the **Q5 family and Q6B** for biologics; **Q6A** for small-molecule specifications.

Read Q7 as the place where all of that becomes a daily operating discipline on the plant floor and in the QC lab. The finished-product GMP rules you may have learned first assume a controlled active ingredient is already in hand. Q7 is the guarantee that it is.

For the source documents, the ICH quality guidelines (including Q7, Q11, the Q3 series, M7, and the Q5 series) are published at [ich.org](https://www.ich.org/page/quality-guidelines). The FDA hosts Q7 and related guidances at [fda.gov](https://www.fda.gov/drugs/guidance-compliance-regulatory-information/guidances-drugs), and the EU implementation appears as Part II of the EU GMP Guide in EudraLex Volume 4. When a number matters — a threshold, a PDE, a definition — read it in the current version of the guideline rather than from memory or a summary, because the thresholds are dose- and route-dependent and the guidelines are periodically revised.
