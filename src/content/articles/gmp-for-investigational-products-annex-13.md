---
title: "GMP for Investigational Medicinal Products: Phase-Appropriate Quality and IMP Release"
description: "How GMP applies to clinical-trial supplies: phase-appropriate controls, evolving specifications, IMP labelling, randomisation and blinding, and QP certification of investigational batches."
pubDate: 2026-06-20
tags: ["gmp", "clinical", "imp", "annex-13", "qp-release", "phase-appropriate", "gcp"]
pillar: "clinical-gcp"
tier: "Intermediate"
---

Manufacturing a commercial drug and manufacturing the material that goes into a Phase 1 trial are not the same job, but they sit under the same legal umbrella: Good Manufacturing Practice. The hard part for quality people is that the rules were written with full process knowledge in mind, and early clinical material has almost none. You do not yet know the final route of synthesis, the final specification, the real shelf life, or sometimes even the final dose. You still have to make a product that is safe to put into a human being, traceable, correctly labelled, and certified by a named person who is willing to put their signature behind it.

That tension is what investigational medicinal product (IMP) GMP is about. This page walks through the regulatory framework, the concept of phase-appropriate control, how specifications evolve across the development lifecycle, the parts that are unique to clinical supply (labelling, randomisation, blinding, comparators, returns), and how a Qualified Person (QP) actually certifies an investigational batch. If you work in clinical supply quality, CMC, or QP support, you should be able to read this and do the work, and answer the questions an inspector will ask.

---

## The regulatory framework: where IMP GMP comes from

### The legal basis

In the EU/EEA, GMP for IMPs is a legal requirement, not just guidance. The chain runs like this:

- **Regulation (EU) No 536/2014** (the Clinical Trials Regulation, CTR, applicable since 31 January 2022) governs the conduct and authorisation of clinical trials and requires that IMPs be manufactured in accordance with GMP.
- **Commission Delegated Regulation (EU) 2017/1569** sets out the specific GMP principles and guidelines for IMPs and the arrangements for inspecting manufacturers. This is the binding GMP text for IMPs under the CTR.
- **Commission Directive 2003/94/EC** historically laid down GMP principles for both authorised products and IMPs and still informs national transpositions.
- The **EU GMP Guide** (EudraLex Volume 4) provides the detailed expectations. Historically the IMP detail lived in **Annex 13 (Manufacture of Investigational Medicinal Products)**. With the CTR, the Commission published **detailed Commission guidelines on GMP for IMPs (2017/C 63/01)** that effectively supersede Annex 13 for trials run under the CTR. You will still hear people say "Annex 13" as shorthand for IMP GMP, and many of the principles are unchanged, so know both names.
- QP certification of IMPs follows **Annex 16 (Certification by a Qualified Person and Batch Release)** principles, adapted because there is no marketing authorisation to certify against.

> The Delegated Regulation (EU) 2017/1569 states that the manufacturer shall establish and implement a pharmaceutical quality system, and that IMPs shall be manufactured in accordance with GMP appropriate to the stage of development of the product.

That last phrase, "appropriate to the stage of development," is the legal hook for everything called phase-appropriate.

### The US framework

The US does not have a separate codified IMP GMP annex. Instead:

- **21 CFR 210 and 211** (cGMP for finished pharmaceuticals) apply, but FDA recognises that full 211 compliance is not realistic for the earliest material.
- **FDA Guidance for Industry: CGMP for Phase 1 Investigational Drugs (July 2008)** sets out a streamlined, risk-based expectation for Phase 1 material. It explicitly says FDA does not intend to enforce the full Part 211 production and process controls for most Phase 1 investigational drugs, and instead expects appropriate controls scaled to the early stage.
- For Phase 2 and 3, expectations move progressively toward full cGMP.
- **21 CFR 312** (IND regulations) requires that the chemistry, manufacturing and controls (CMC) information in the IND show the product can be made consistently and is safe, with the depth of information increasing as the program advances.
- **ICH Q7 (Good Manufacturing Practice for Active Pharmaceutical Ingredients)** has a dedicated Section 19 covering APIs used in clinical trials, which is the cleanest published statement of how API GMP scales with phase.

### Why a separate regime exists at all

The risk profile of clinical supply is genuinely different from commercial:

- Subjects are exposed to a product whose full safety and efficacy are unknown, so identity, strength, purity and sterility (where relevant) matter enormously, even when long-term process consistency does not yet exist.
- Trial integrity depends on the supply chain: a mislabelled kit, a broken blind, or the wrong comparator can invalidate the scientific result and harm subjects.
- Knowledge is incomplete and changing. The control strategy has to be defensible today and also has to evolve as you learn.

So the regime keeps the non-negotiable patient-safety controls at full strength from day one and lets the process-consistency controls grow with knowledge.

---

## Phase-appropriate GMP: what scales and what does not

"Phase-appropriate" is the single most tested concept in this area, and it is widely misunderstood. It does not mean "less GMP for early phases" or "we can be sloppy in Phase 1." It means the *depth and formality* of certain controls scale with development stage and process knowledge, while a core set of controls is fixed from the start.

### What is fixed at full strength from Phase 1

These never scale down:

- **Patient safety controls**: correct active ingredient, correct strength, freedom from harmful contamination, sterility and endotoxin control for sterile/injectable products, container closure integrity.
- **Identity and traceability**: you must always know what is in the container and be able to trace it from manufacture to subject and back.
- **Defined and documented process**: the process actually used must be recorded so the batch can be reconstructed.
- **Records and data integrity**: ALCOA+ principles apply fully. Records being "early phase" never excuses missing, backdated, or unattributable data.
- **Labelling accuracy**: an IMP label error is a patient-safety and trial-integrity event regardless of phase.
- **Release by an authorised person / QP certification** (EU): every batch used in an EU trial is QP certified before use.

### What scales with phase

| Control area | Phase 1 (first-in-human) | Phase 2 | Phase 3 (confirmatory) |
|---|---|---|---|
| Process validation | Not required; process is defined and recorded, not validated. Reliance on monitoring and testing. | Process understanding developing; key parameters identified. | Process performance qualification (PPQ) typically begins; moving toward validated commercial process. |
| Specifications | Wider, often provisional; safety-driven limits; some methods not yet validated. | Tightened as data accumulate; methods being validated. | Near-commercial; full method validation; tightened to clinical experience. |
| Analytical methods | Qualified / fit-for-purpose; full validation not required. | Validation in progress. | Validated per ICH Q2(R2). |
| Stability data | Limited; supports the trial duration plus margin, often ongoing. | Expanding matrix; trend data. | Registration-stability supporting the dossier. |
| Cleaning validation | Verification / documented cleaning; less formal. | Developing approach. | Validated cleaning, especially shared facilities. |
| Equipment qualification | Fit-for-purpose; documented. | Increasing formality. | Full IQ/OQ/PQ lifecycle. |
| Reprocessing | Sometimes accepted with justification and testing. | Controlled. | Tightly controlled and pre-defined. |

The structure to remember: safety, identity, traceability, and data integrity are flat at full strength; process validation, method validation, and specification tightness ramp up with phase. ICH Q7 Section 19 says this explicitly for APIs, and the same logic carries to drug product.

### The number-one phase-appropriate mistake

Two opposite failures both get cited:

1. **Under-controlling the fixed items.** Treating Phase 1 as a free pass on data integrity, sterility assurance, or labelling. Inspectors are unforgiving here. "It was early phase" is not a defence for an unattributable record or a non-sterile injectable.
2. **Over-engineering the scalable items.** Demanding three-batch process validation, fully validated methods, and registration-grade stability before first-in-human. This burns time and money, delays patients, and is not required. Quality maturity is partly knowing what *not* to do yet.

A good answer in an interview names both failure modes and the principle that draws the line: risk to the subject and to data integrity sets the floor; process knowledge sets the ceiling.

---

## Evolving specifications: building and tightening the spec across the lifecycle

Specifications for an IMP are not a fixed contract the way a commercial spec is. They are a living document that gets tighter and better-justified as you learn. Managing that evolution cleanly is a core clinical-CMC quality skill.

### What an IMP specification contains

The structure mirrors a commercial spec (per **ICH Q6A / Q6B** for chemical and biological products), but with provisional or wider limits:

- **Tests**: appearance, identity, assay/content, related substances/impurities, water content, uniformity of dosage units, dissolution (for solid oral), sterility and endotoxin (for sterile products), particulate matter, pH, container closure integrity, and product-specific attributes.
- **Methods**: the analytical procedure referenced for each test, with its qualification/validation status noted.
- **Acceptance criteria**: numeric limits, which early on are often justified by toxicology coverage (the impurity levels qualified in the tox batches) rather than by clinical experience you do not yet have.

### How specifications evolve, step by step

1. **Set initial limits from safety, not from process capability.** At first-in-human you usually do not have enough batches to set capability-based limits. So impurity limits are anchored to what the toxicology batches covered (qualified levels), and assay limits are set wide enough to be realistic for an unvalidated method but tight enough to protect dose accuracy.

2. **Record everything against the actual batches.** Each clinical batch generates real release and stability data. This is your evidence base.

3. **Tighten at defined decision points.** As you accumulate batches and as methods are validated, narrow the limits. Common triggers: program phase transitions (Phase 1 to 2 to 3), method validation completion, accumulation of stability data, or a process change.

4. **Justify every change through change control.** A specification change is a controlled change. The justification ties to data: "we have N batches, the observed range for assay is X to Y, the method is now validated per ICH Q2(R2), therefore we tighten from 90.0-110.0% to 95.0-105.0%."

5. **Keep the IMPD/IND in sync.** The specification in the regulatory dossier (the Investigational Medicinal Product Dossier in the EU, the IND CMC section in the US) must match what you actually release against. A spec change usually requires a dossier amendment, and you cannot release against the new spec until that path is handled correctly.

### Worked example: an impurity limit evolving across phases

| Phase | Related substance A limit | Basis for the limit |
|---|---|---|
| Phase 1 | NMT 0.5% | Level qualified in the GLP toxicology batches; method qualified not validated |
| Phase 2 | NMT 0.3% | 6 clinical batches observed 0.05-0.18%; method validated; tox coverage confirmed |
| Phase 3 | NMT 0.20%, reporting threshold 0.05% | Aligned with ICH Q3A/Q3B thresholds and clinical experience; registration-directed |

Notice the limit only tightens when there is data and method maturity to support it. It never gets *looser* without a serious safety justification, because subjects have already been dosed against the earlier limit and the dossier was approved on it.

### Acceptance criteria for "good" spec management

- Every limit is traceable to a documented justification (tox coverage, batch data, compendial requirement, or ICH threshold).
- The released-against spec, the IMPD/IND spec, and the certificate of analysis all agree.
- Spec changes go through formal change control with impact assessment on already-released material and on the dossier.
- Out-of-specification and out-of-trend results are investigated even when the spec is provisional; a wide spec is not an excuse to skip an OOS investigation.

Cross-links: see [setting and verifying specifications and the certificate of analysis](/articles/certificate-of-analysis), [stability programs under ICH](/articles/stability-programs-ich), [impurity control and nitrosamines under Q3/M7](/articles/nitrosamines-impurities-q3-m7), and [out-of-trend investigations](/articles/out-of-trend-investigations).

---

## Order of operations: building a compliant IMP supply

A typical sequence for getting clinical material made and into subjects:

1. **Define the product and the trial need.** Dose, presentation, blinding scheme, number of subjects, sites, countries, trial duration. This drives everything downstream including label text and stability requirements.
2. **Confirm the regulatory basis.** Clinical trial authorisation (CTA) under the CTR in the EU, or an active IND in the US. You cannot release IMP for use in a trial that is not authorised in that territory.
3. **Establish the pharmaceutical quality system and qualify the manufacturing site.** The IMP manufacturer needs a Manufacturer's/Importer's Authorisation for IMPs (MIA(IMP)) in the EU.
4. **Set the phase-appropriate control strategy.** Specifications, methods, process description, in-process controls, and the validation/qualification expectations scaled to phase.
5. **Manufacture, package and label** under that control strategy, with full batch documentation.
6. **Test against the specification** and generate the certificate of analysis.
7. **Assemble the QP certification package** (see the QP section below), including the chain back to the active substance and, for imported IMPs, the assessment of equivalence to EU GMP.
8. **QP certifies the batch** and records certification in the register.
9. **Distribute to depots and sites under controlled conditions**, with temperature control where required and full traceability.
10. **Manage accountability, returns, and destruction** through the life of the trial and reconcile.

Each of these maps to a record an inspector can ask for. If you cannot produce the CTA/IND reference, the QP certification entry, the batch record, the label reconciliation, or the distribution temperature record, that is a finding.

---

## Labelling of IMPs: the highest-frequency clinical-supply risk

Labelling is where clinical supply quality lives or dies. A label error can dose a subject incorrectly, break a blind, or invalidate a trial. The detailed Commission guidelines on GMP for IMPs (and historically Annex 13) specify what must appear on IMP labels.

### Required label content

For the immediate and outer packaging, the typical required particulars include:

- Name, address and telephone number of the sponsor, contract research organisation or investigator (the main contact for information).
- Pharmaceutical dosage form, route of administration, quantity of dosage units, and (for open trials) the name/identifier and strength.
- The batch and/or code number to identify the contents and packaging operation.
- A trial reference code allowing identification of the trial, site, investigator and sponsor if not given elsewhere.
- The subject identification number / treatment number, and where relevant the visit number.
- The name of the investigator (if not included elsewhere).
- Directions for use (a reference to a leaflet or other explanatory document is acceptable).
- "For clinical trial use only" or similar wording.
- Storage conditions.
- Period of use (use-by, expiry or retest date) in month/year format, in a way that avoids ambiguity.
- "Keep out of reach of children" except where the product is for use in trials where the product is not taken home by subjects.

The guidelines allow some particulars to be omitted and justified, and allow a separate listing of details with provisions to protect the subject and trial integrity.

### Expiry date extension on label: the special IMP allowance

IMPs have a feature commercial products do not: when stability data extends the usable shelf life, you can extend the expiry on labels already in the field by over-labelling, without recalling the material, provided a defined procedure is followed. The original date must remain traceable, the operation is performed under GMP, a second check confirms each unit, and the operation is documented so reconciliation still works. This is heavily inspected because it directly touches patient safety: an error here means dosing expired product. The procedure must protect the blind (the over-labelling must not reveal treatment assignment) and must be reconcilable.

### Roles in labelling

- **Clinical supply / packaging operations**: designs the label, executes packaging and labelling, performs line clearance and in-process checks.
- **Regulatory affairs**: confirms label content meets the requirements of each country in the trial, including translations and local language requirements.
- **QA**: approves label proofs and master label text, approves the packaging batch record, and confirms reconciliation.
- **QP**: confirms during certification that labelling meets requirements and that any expiry extension was done under a controlled procedure.

### Common labelling findings

- Label text not matching the approved master or not matching the protocol (wrong strength, wrong storage condition, wrong trial code).
- Translation errors or missing local-language labels for a country in the trial.
- Expiry extension done without a controlled procedure, without second check, or in a way that risks revealing the blind.
- Poor reconciliation: printed labels not accounted for, so you cannot prove a wrong label did not reach a subject.
- Ambiguous date format causing confusion between month and day.

Cross-link: [good documentation practices](/articles/good-documentation-practices) and [batch record review](/articles/batch-record-review-gmp) both apply directly to packaging records.

---

## Randomisation, blinding and code-break

Blinded trials add controls that have no commercial equivalent. Quality owns the integrity of the blind on the manufacturing and supply side.

### What has to be controlled

- **Randomisation list / code**: the assignment of treatment to subject/kit numbers. It must be generated under control, kept secure, and the people who manufacture, label and certify the IMP should not be able to deduce assignments where blinding requires it.
- **Blinding of the product**: test and comparator (and placebo) must be indistinguishable in appearance, smell, taste, weight, and packaging to the people who must stay blinded.
- **Code-break / unblinding procedure**: a controlled way to reveal a single subject's treatment in a medical emergency, with the event logged, justified, and reported, without unblinding the rest of the trial.

### How blinding is verified, step by step

1. The packaging design ensures test, comparator and placebo are visually identical in their final presentation (same kit, same blister, same tablet appearance or over-encapsulation, etc.).
2. A documented blinding assessment confirms indistinguishability, ideally by a blinded check.
3. The randomisation code is held securely (often by an independent group or interactive response technology vendor), separated from those who must remain blinded.
4. Code-break capability exists at site (sealed envelopes or an electronic system) but its use is logged and triggers pharmacovigilance assessment.
5. The QP certification step confirms blinding integrity without the QP needing to know the actual assignments.

### Worked example: over-encapsulation for blinding

A trial compares a marketed tablet against placebo. The marketed tablet is white and oval; the placebo cannot match it exactly. The solution: over-encapsulate both the active tablet and a matching placebo bead-fill into identical opaque capsules. Now active and placebo are visually identical. Quality must then confirm that over-encapsulation does not change the dissolution/bioavailability of the active in a way that affects the trial (comparability data), and that the capsules are genuinely indistinguishable, including weight.

### Common blinding findings

- Test and comparator distinguishable by weight, by capsule fill, or by packaging detail.
- Randomisation code accessible to packaging or QC staff who should be blinded.
- Code-break events not logged, or used routinely rather than for genuine emergencies.
- No comparability data for an over-encapsulated or re-packaged comparator.

---

## Comparators and sourcing

A comparator is a marketed or investigational product used as a reference in the trial. Comparator handling is a frequent gap because people assume "it is already a marketed product, so it is fine." It is not automatically fine.

Key controls:

- **Sourcing and authenticity**: the comparator must come through a qualified, traceable supply chain. Sourcing marketed comparators on the open market raises authenticity and pedigree questions.
- **Documentation gap**: you often cannot get full manufacturing data for a comparator you bought as a finished marketed product. The guidelines accept this but expect you to document what you can establish (identity, that it is genuine, that it has not degraded) and to justify the rest.
- **Re-packaging / re-labelling**: when you re-package a comparator for blinding, you take on responsibility for the consequences. You must show, with data, that re-packaging (for example over-encapsulation or removal from original packaging) does not adversely affect stability or product quality, and you must assign an appropriate expiry that does not exceed the original justified shelf life without data.
- **QP responsibility**: the QP still certifies comparator batches used in the EU trial and confirms that the necessary checks and re-packaging controls were done.

Common finding: a comparator re-packaged into trial kits with an expiry date that cannot be supported by stability data on the re-packaged form.

---

## QP certification of IMPs (EU): release that is different from commercial

In the EU, every IMP batch used in a trial is certified by a Qualified Person before it is released for use. This is the clinical analogue of commercial QP release under Annex 16, with important differences because there is no marketing authorisation.

### What the QP is certifying

For commercial product, the QP certifies the batch complies with the marketing authorisation and GMP. For an IMP, there is no MA, so the QP certifies that the batch was manufactured and checked in accordance with:

- GMP appropriate to the stage of development,
- the product specification file (the IMP equivalent of the registered dossier; it holds the specifications, manufacturing and packaging instructions, testing methods, and release requirements),
- the clinical trial authorisation / approved IMPD for the trial, and
- the order from the sponsor.

The certification confirms identity, that the batch meets its specification, that labelling complies, that blinding integrity is maintained, and that the supply chain back to the active substance is acceptable.

### What goes in the QP certification package

The QP needs evidence to certify, including:

- Batch manufacturing and packaging records, complete and reviewed.
- Certificate of analysis showing the batch meets the IMP specification.
- Confirmation that the manufacturing site holds the appropriate authorisation (MIA(IMP)) and operates under GMP.
- The product specification file reference.
- The IMPD/CTA reference confirming the trial is authorised in the relevant territory.
- For imported IMPs from outside the EU/EEA: confirmation of the GMP standard at the third-country site and any importation testing arrangements. The QP must assess equivalence to EU GMP. Importation testing may be reduced where a sound assessment supports it, but the QP carries the responsibility for that judgement.
- Confirmation that labelling, including any expiry extension, was performed correctly.
- Resolution of any deviations or out-of-specification results affecting the batch.

### Step-by-step certification flow

1. QA completes batch record review and confirms all records are present and correct.
2. QC confirms testing is complete and the batch meets the IMP specification, with any OOS investigated and closed.
3. Deviations affecting the batch are assessed and closed or justified.
4. The QP reviews the package, confirms the trial authorisation covers the intended use, confirms labelling and blinding integrity, and assesses the imported-product GMP equivalence where relevant.
5. The QP certifies the batch, recording certification in the certification register with date and signature.
6. Only certified IMP is shipped to depots/sites for use.

### Acceptance criteria for clean QP certification

- A named, eligible QP is recorded for the manufacturer/importer.
- The certification register is complete and contemporaneous.
- The QP could, for any certified batch, produce the package showing why certification was justified.
- No batch was used in the trial before certification.
- The QP's declaration aligns with the trial authorisation in each country of use.

### Common QP-release findings

- IMP used before QP certification, or certification recorded after the fact.
- QP certifying against a trial authorisation that does not cover that country or that arm.
- Imported IMP certified without a documented GMP-equivalence assessment of the third-country site.
- Expiry-extension over-labelling accepted at certification without evidence of the controlled procedure and second check.
- Product specification file out of date relative to the current IMPD.

Cross-links: [Qualified Person batch release under Annex 16](/articles/qualified-person-batch-release-annex-16), [batch disposition decisions](/articles/batch-disposition-decisions), and [the certificate of analysis](/articles/certificate-of-analysis).

---

## Distribution, accountability, returns and destruction

Clinical supply is a closed-loop accountable system in a way commercial distribution is not. Every unit must be accounted for.

### Controls

- **Distribution under control**: shipment to depots and sites with the right storage conditions, temperature monitoring where required, and full traceability of which batch went where.
- **Drug accountability at site**: the site records receipt, dispensing to each subject, returns, and remaining stock. The numbers must reconcile.
- **Returns**: returned IMP (unused or partially used) is tracked. It is not redispensed unless a controlled process permits it.
- **Reconciliation**: total manufactured = dispensed + returned + retained samples + destroyed. Gaps are investigated.
- **Destruction**: destruction of unused/returned/expired IMP is authorised (often by the sponsor) and documented, and usually does not happen until reconciliation is complete.
- **Retention samples**: reference and retention samples of each batch are kept per the required retention period so that any later question about a batch can be investigated.

### Worked accountability snippet

| Batch | Manufactured | Dispensed | Returned | Retained samples | Destroyed | Reconciled |
|---|---|---|---|---|---|---|
| IMP-0042 | 1,200 kits | 980 | 150 | 20 | 50 | 1,200 = 980+150+20+50 ✓ |

If that line does not add up, you have an investigation: a lost shipment, an unrecorded dispensing, or a counting error. Inspectors love to add up accountability columns.

### Common findings

- Accountability that does not reconcile, with no investigation.
- Temperature excursions in transit not assessed for impact on the IMP.
- Destruction before reconciliation, destroying the evidence.
- Returns redispensed without a controlled process.

Cross-links: [cold-chain shipping qualification](/articles/cold-chain-shipping-qualification) and [good distribution practice and the cold chain](/articles/good-distribution-practice-cold-chain).

---

## Deviations, OOS and change control in the IMP context

The quality-event machinery still runs, but with phase-appropriate judgement.

- **Deviations** during IMP manufacture are documented and assessed for impact on the subject and on data integrity. A deviation in an early-phase batch is not waved through; it is assessed for whether the affected material is safe to use.
- **OOS results** are investigated per a defined procedure even against provisional specifications. The investigation rigour does not scale down; what scales is the breadth of the spec, not the seriousness of a result outside it.
- **Change control** governs specification tightening, process changes, method changes, and label changes. Because the IMPD/IND must stay consistent, many changes require a regulatory amendment, and the change control has to capture the regulatory path and the impact on already-released and in-field material.

Common finding: an OOS on an IMP batch closed as "spec is provisional, no impact" without a real investigation. That is exactly the kind of shortcut inspectors target.

Cross-links: [deviation management](/articles/deviation-management), [OOS investigation process](/articles/oos-investigation-process), and [change control for validated systems](/articles/change-control-validated-systems).

---

## Data integrity in clinical supply

ALCOA+ applies at full strength from the first batch. The early-phase nature of the work changes none of it.

- Batch records, testing data, packaging records, labelling reconciliation, and distribution records must be attributable, legible, contemporaneous, original, accurate, plus complete, consistent, enduring and available.
- Chromatographic and instrument data from QC release testing carry the same audit-trail and review expectations as commercial QC.
- The randomisation code and any unblinding events are records that must be controlled and traceable.

Cross-links: [ALCOA+ in detail](/articles/alcoa-plus-deep-dive), [data integrity foundations](/articles/data-integrity-foundations), and [chromatography data system integrity](/articles/chromatography-data-system-integrity).

---

## Roles and responsibilities across IMP supply

| Function | Responsibility |
|---|---|
| Sponsor | Owns the trial, the IMPD/IND, the product specification file content, comparator sourcing decisions, and authorises destruction. Ensures IMP is GMP-manufactured. |
| CMC / development | Defines the process, sets and justifies specifications, generates stability and comparability data, manages phase-appropriate maturation. |
| Manufacturing / packaging operations | Makes, packages and labels under the control strategy; performs line clearance and in-process checks. |
| QC | Tests against the IMP spec, generates CoAs, runs OOS investigations, manages methods and their qualification/validation status. |
| QA | Reviews batch and packaging records, approves master label text, manages deviations/change control, confirms reconciliation. |
| Qualified Person (EU) | Certifies each batch, assesses imported-product GMP equivalence, confirms labelling and blinding integrity, records certification. |
| Regulatory affairs | Confirms label requirements per country, manages IMPD/IND amendments tied to spec and process changes. |
| Clinical supply / IRT vendor | Manages randomisation, kit allocation, depot distribution and resupply, accountability data. |
| Site / pharmacy | Receives, stores, dispenses, returns, and reconciles IMP; performs controlled code-break when justified. |

---

## Interview-ready questions and strong answers

**Q: What does "phase-appropriate GMP" actually mean?**
The depth and formality of process-knowledge controls (process validation, method validation, specification tightness, stability matrix) scale with development stage, while patient-safety and data-integrity controls (identity, sterility, traceability, labelling, ALCOA+, release/certification) are at full strength from Phase 1. It is not "less GMP early," it is "the right GMP for the knowledge you have."

**Q: Which GMP requirements never relax for an IMP?**
Identity and strength, contamination and sterility/endotoxin control, container closure integrity, traceability, data integrity, accurate labelling, and batch certification/release. None of these scale down.

**Q: What is the regulatory basis for IMP GMP in the EU?**
The Clinical Trials Regulation (EU) 536/2014 requires GMP; Delegated Regulation (EU) 2017/1569 sets the binding GMP principles for IMPs; the detailed Commission guidelines on GMP for IMPs (2017/C 63/01) provide the detail and effectively supersede the old Annex 13 for CTR trials. QP certification follows Annex 16 principles adapted to IMPs.

**Q: How does a QP certify an IMP when there is no marketing authorisation?**
The QP certifies against the product specification file, the approved IMPD/clinical trial authorisation, GMP appropriate to the stage of development, and the sponsor's order, rather than against an MA. They confirm specification compliance, labelling, blinding integrity, and, for imports, GMP equivalence of the third-country site.

**Q: How do specifications evolve and why can you not just set tight limits from the start?**
Early limits are anchored to safety, mainly the impurity levels qualified in the toxicology batches, because you do not yet have enough batches or validated methods to set capability-based limits. As batches accumulate and methods are validated, you tighten through change control, keeping the released-against spec, the dossier, and the CoA aligned.

**Q: What is special about IMP labelling?**
Beyond standard content, IMPs carry the trial code, subject/treatment number, "for clinical trial use only," and a controlled mechanism to extend expiry on labels already in the field by over-labelling, with second check and traceability of the original date, done without breaking the blind.

**Q: How do you protect the blind on the manufacturing side?**
Make test, comparator and placebo indistinguishable (for example over-encapsulation), keep the randomisation code separate from people who must stay blinded, generate comparability data for re-packaged comparators, and control code-break so it is logged and used only for genuine emergencies.

**Q: A Phase 1 batch has an OOS against a provisional spec. What do you do?**
Investigate it like any OOS. A provisional spec does not lower the seriousness of a result outside it. Assess subject safety and data integrity, determine root cause, and decide disposition. "Spec is provisional, no impact" without investigation is a finding.

**Q: What is the difference between FDA and EU expectations for early-phase material?**
The US has no separate IMP annex; 21 CFR 210/211 apply, softened for Phase 1 by the 2008 FDA Phase 1 cGMP guidance and scaled through 21 CFR 312 IND CMC expectations and ICH Q7 Section 19. The EU has explicit IMP GMP via the Delegated Regulation and the IMP guidelines, plus mandatory QP certification. The principle, phase-appropriate control, is the same.

---

## Common inspection findings, consolidated

- IMP used before QP certification, or certification not contemporaneous.
- "Early phase" used to excuse data integrity, sterility, or labelling failures.
- Labelling not matching the master or protocol; missing local-language labels; uncontrolled expiry extension.
- Blinding compromised by distinguishable products or accessible randomisation codes; code-breaks not logged.
- Comparators sourced or re-packaged without supporting data or appropriate expiry.
- Accountability that does not reconcile; destruction before reconciliation; transit excursions not assessed.
- OOS against provisional specs closed without investigation.
- Specification, IMPD/IND, product specification file, and CoA out of sync.
- Imported IMP certified without a documented GMP-equivalence assessment.

---

## Practical tips

- Build the product specification file early and keep it the single source of truth; out-of-sync files cause certification findings.
- Treat the four fixed controls (safety, identity, traceability, data integrity) as non-negotiable from your first batch, and write your phase-appropriate justifications down for the scalable ones so you can defend both the floor and the ceiling.
- Put the expiry-extension procedure in place before you need it, with a built-in second check and blind protection. Doing it under pressure mid-trial is how errors happen.
- Reconcile accountability continuously, not at end of trial. Small gaps are easy to investigate early and impossible to reconstruct later.
- Keep regulatory affairs in the change-control loop for every spec or label change so the dossier never lags the release standard.
- For comparators, get the re-packaging comparability data before you commit to the blinding design, not after.

---

## Related reading

- [Qualified Person batch release under Annex 16](/articles/qualified-person-batch-release-annex-16)
- [Batch disposition decisions](/articles/batch-disposition-decisions)
- [The certificate of analysis](/articles/certificate-of-analysis)
- [Stability programs under ICH](/articles/stability-programs-ich)
- [ICH E6 Good Clinical Practice](/articles/ich-e6-good-clinical-practice)
- [ICH Q7 API GMP](/articles/ich-q7-api-gmp)
- [Clinical QA and GCP data integrity](/articles/clinical-qa-gcp-data-integrity)
- [What is GMP](/articles/what-is-gmp)
- [CFR 210/211 cGMP walkthrough](/articles/cfr-210-211-cgmp-walkthrough)
- [Cold-chain shipping qualification](/articles/cold-chain-shipping-qualification)
- [Deviation management](/articles/deviation-management)
- [OOS investigation process](/articles/oos-investigation-process)
