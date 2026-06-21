---
title: "BLA Readiness: Building and Defending the CMC Data Package"
description: "How to organize, verify, and defend the CMC data integrity package for a marketing application: data traceability, multi-site compilation, the pre-BLA audit, the pre-license inspection, and what reviewers and investigators actually check."
pubDate: 2026-04-15
tags: ["BLA", "regulatory submission", "biologics", "CMC", "data integrity", "FDA"]
tier: "Advanced"
pillar: "data-integrity"
---

A marketing application is the most scrutinized regulatory submission in pharmaceutical and biotech development. For a biologic, that application is a Biologics License Application (BLA); for a small-molecule drug it is a New Drug Application (NDA); for most medical devices it is a 510(k) or PMA. Whatever the pathway, FDA reviewers spend months evaluating the clinical, nonclinical, and chemistry, manufacturing, and controls (CMC) data packages, and a pre-approval or pre-license inspection team visits the manufacturing facilities. The standard for data integrity here is higher than in any other regulatory interaction, because the decision being made, whether a product reaches patients, is correspondingly higher in consequence.

This article concentrates on the CMC data integrity architecture: how to organize, verify, and present manufacturing and quality data in a marketing application, and how to prepare for the facility inspection that follows. It uses the BLA and Module 3 as the running example because biologics generate the densest CMC package, but the same structure and the same integrity expectations apply to an NDA, to a PMA, and to any submission where you must prove that the data behind your specifications is real, complete, and reconstructable. The clinical and nonclinical modules carry their own integrity burden, but the CMC module is where a development-stage organization most often loses control of its own evidence, because the data was generated over many years, across several systems, and frequently across more than one site.

The legal basis for a BLA sits in the Public Health Service Act section 351 and the implementing regulations at 21 CFR 601 for licensing, with manufacturing standards in 21 CFR 210 and 211 and biologics-specific standards in 21 CFR 600 to 680. An NDA is governed by the Federal Food, Drug, and Cosmetic Act and 21 CFR 314. The electronic-records expectations that underpin every analytical and manufacturing record trace to 21 CFR Part 11. The submission format, the electronic Common Technical Document (eCTD), is defined by ICH M4 and required for US submissions. If you are new to the area, start with [what GMP means](/articles/what-is-gmp) and the [foundations of data integrity](/articles/data-integrity-foundations), and see [IND, NDA, and BLA pathways](/articles/ind-nda-bla-pathways) for how the application types differ, before working through the structure below.

---

## The CMC Data Universe in a Submission

Module 3 of the Common Technical Document, the format defined in ICH M4Q(R1), is the CMC section. For a biologic it is typically the most voluminous part of the application, often several thousand pages. The data comes from multiple GxP systems across potentially multiple sites and years of development. Understanding the structure matters because data integrity findings attach to specific sections, and a reviewer or investigator works from the section numbering. When an investigator says "show me the raw data behind 3.2.S.4.1," you need to know exactly what that points to.

**3.2.S: Drug Substance (active ingredient / active substance)**
- Manufacturing process description and controls (3.2.S.2.2)
- Control of materials: specifications and testing for starting materials and raw materials (3.2.S.2.3)
- Process validation and evaluation (3.2.S.2.5)
- Process characterization, design-of-experiment studies, and critical process parameter (CPP) ranges (3.2.S.2.6)
- Drug substance specification and its justification (3.2.S.4.1, 3.2.S.4.5)
- Analytical procedures and their validation per ICH Q2(R2) (3.2.S.4.2, 3.2.S.4.3)
- Reference standards or materials (3.2.S.5)
- Container closure system (3.2.S.6)
- Stability data per the ICH Q1 series, with ICH Q5C for biologics (3.2.S.7)

**3.2.P: Drug Product (finished product)**
- Pharmaceutical development (3.2.P.2)
- Manufacturing process description, including formulation and fill/finish, and process validation (3.2.P.3)
- Control of drug product: specification, analytical procedures, method validation (3.2.P.5)
- Container closure system and primary packaging qualification (3.2.P.7)
- Stability data for drug product (3.2.P.8)

**3.2.A: Appendices**
- Facilities and equipment, including site information and facility diagrams (3.2.A.1)
- Adventitious agents safety: for biologics, cell bank characterization and viral clearance studies per ICH Q5A(R2) and Q5D (3.2.A.2)
- Excipient safety, where a novel excipient is used (3.2.A.3)

**3.2.R: Regional Information (US)**
- For FDA, this is where executed batch records, validation batch data, comparability protocols, and method validation summaries that FDA requires regionally are placed.

A useful mental model is that each numbered subsection is a claim, and behind every claim there must be a chain of records a stranger could follow without your help. The submission is the summary; the systems hold the proof. The investigator's job is to confirm the summary matches the proof. For how the eCTD is assembled and lifecycle-managed, see [eCTD submission architecture](/articles/ectd-submission-architecture).

---

## Data Integrity Architecture for CMC Data

The CMC data package is only as strong as the systems and processes that generated the data in it. Reviewers can and do request the underlying raw data for analytical results cited in the submission. Pre-license inspection investigators go directly to the systems that generated the data and verify that what was submitted matches what the systems hold. The principles are the familiar ones: data must be attributable, legible, contemporaneous, original, and accurate, plus complete, consistent, enduring, and available. The [ALCOA+ principles in detail](/articles/alcoa-plus-deep-dive) are not abstract here. They are the exact checklist an investigator applies to the records behind your specifications.

### Data traceability requirement

Every analytical result in the submission must trace back to a GxP-controlled system. A release result reported in a 3.2.S.4.1 specification table must trace to the analytical method as a controlled document with version history, the analyst who ran it via training records, the instrument via calibration and qualification records, and the raw data file retained in the chromatography data system (CDS) or other acquisition system with an intact audit trail. If any link in that chain is broken, if the raw data file does not exist, if the analyst was not trained on the current method version, if the instrument was out of calibration on the test date, the result is not defensible no matter how good the number looks.

The trace below shows what a complete record looks like for one number on one specification line. Build this for every result that supports an acceptance criterion.

| Trace element | Where it lives | What proves it |
|---|---|---|
| Reported result | Module 3 specification table; LIMS | LIMS record ID, approved/released status, reviewer sign-off |
| Raw acquisition | CDS (for example a commercial CDS such as Empower or OpenLab) | Sequence, injection list, audit trail with no undocumented reprocessing or reintegration |
| Method | Document management system | Effective version on the date of analysis, with change history |
| Analyst | Training / LMS record | Qualification on that method version before the test date |
| Reviewer | LIMS / DMS sign-off | Independent second-person review, dated after the analysis |
| Instrument | Calibration and qualification files | Within-calibration status on the test date; IQ/OQ/PQ status |
| Sample | LIMS sample login; chain of custody | Correct batch, condition, and pull date; sample integrity maintained |

If you cannot populate every cell for a given number, that number is a finding waiting to be written. For the system-side controls behind the table, see [audit trail design and review](/articles/audit-trail-design-and-review), [chromatography data system integrity](/articles/chromatography-data-system-integrity), and the [data lifecycle and metadata](/articles/data-lifecycle-and-metadata).

### A worked traceability example

Suppose Module 3 reports a drug substance purity result of 99.2 percent by reversed-phase HPLC against an acceptance criterion of not less than 98.0 percent, for batch DS-2402, on a release report dated 14 March 2024. A defensible trace reads like this:

- The result 99.2 percent appears in LIMS record R-118742, status Released, reviewed by a second analyst on 15 March 2024.
- The acquisition lives in the CDS as sequence SEQ-2024-0311, injection 7, acquired 11 March 2024. The CDS audit trail shows one integration, no manual reintegration, no deleted injections in the sequence.
- The method is PUR-HPLC-007, version 4.0, effective 02 January 2024. The change history shows version 3.0 to 4.0 added a column equivalency, approved through change control.
- The analyst completed training on PUR-HPLC-007 v4.0 on 10 January 2024, before the test date.
- The HPLC instrument INST-HP-22 was last calibrated 05 February 2024, next due 05 August 2024, so it was in calibration on 11 March.
- LIMS sample login shows sample S-77310 logged as batch DS-2402, condition ambient, pull date 08 March 2024.

Now contrast the same number with a broken trace: the CDS shows sequence SEQ-2024-0311 contained eleven injections but only seven appear in the reviewed data, with four injections deleted by an analyst account that also held administrator rights. That is selective reporting. The 99.2 percent result is no longer the result; it is the surviving result, and the investigator will write it up as a data integrity failure regardless of whether the deleted injections were genuinely bad. The lesson: the integrity of a number depends on the integrity of everything around it.

### Multi-site data compilation

Marketing applications for complex products often combine data from multiple manufacturing sites, clinical manufacturing facilities, contract testing laboratories, and contract manufacturers (CDMOs). This is true across modalities: a small-molecule program may run the API at one site, drug product at a second, stability at a third, and microbiology at a contract lab. Each site generated data under its own quality system. The sponsor must establish that all contributing sites met GMP and that data integrity controls were in place at each site during the relevant period.

This is a planning problem, not a paperwork problem. Discovering a GMP gap at a contract laboratory that ran stability testing eighteen months before submission, after the data is already in the package, is extremely difficult to remediate. You cannot re-run a thirty-six-month stability study three months before filing. Pre-submission audits of every data-contributing site are essential, and they belong in the program plan years before filing. The mechanics of qualifying and overseeing those parties sit in [supplier and vendor qualification](/articles/supplier-vendor-qualification) and [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements). A common control gap is the assumption that a CDMO's data is the CDMO's problem; in a marketing application, the sponsor owns the data the moment it goes into the submission.

---

## Pre-BLA Data Integrity Audit

Before submitting, conduct a systematic data integrity audit of the CMC data package. Do it with people who understand both the regulatory expectations and the technical systems. This is not a review of the documents in the submission. It is a verification that the underlying data is complete, traceable, and defensible. Treat it as a rehearsal of the pre-license inspection, run by your own people while there is still time to fix what they find. The method overlaps heavily with a [data integrity gap assessment](/articles/di-gap-assessment-methodology), applied to the specific records cited in the filing.

### Scope, by data type

**For each analytical result in the submission:**
- Identify the raw data source: CDS file, instrument sequence, plate reader output, or laboratory notebook entry.
- Confirm the raw data file is retained and unaltered. The audit trail should show no post-analysis modification, or any modification should be documented and justified through change control or a deviation.
- Confirm the analyst was trained on the current method version at the time of analysis.
- Confirm the instrument was within calibration and the system was qualified at the time of analysis.
- Confirm the validated method version was used, with no unauthorized changes.
- Confirm a second-person review occurred and is dated correctly.

**For process validation data (3.2.S.2.5, 3.2.P.3.5):**
- Confirm process performance qualification (PPQ) protocols were approved before execution.
- Confirm PPQ batches were consecutive and representative of the commercial process and scale.
- Confirm enhanced or heightened sampling and monitoring data is complete and available.
- Confirm the statistical analysis of results is correct and that acceptance criteria were pre-defined.

**For stability data:**
- Confirm the protocol was approved and samples were placed on stability at the correct time zero.
- Confirm all scheduled testing was completed on time or within an acceptable, documented window or deviation.
- Confirm any missed or late time points are disclosed and their impact assessed.
- Confirm storage conditions were maintained throughout, with temperature and humidity monitoring records intact and excursions assessed.

### A sampling strategy that holds up

Full census of every number in a multi-thousand-page Module 3 is rarely feasible. A defensible risk-based sampling plan:

| Data set | Sampling depth | Rationale |
|---|---|---|
| Release results for PPQ batches | 100 percent verification | These batches anchor process validation and are the first thing an investigator pulls |
| Release results for registration stability lots | 100 percent | Shelf life and the entire commercial program rest on these |
| Results behind any acceptance criterion in the specification | 100 percent | Each one is a claim FDA relies on |
| Development data supporting characterization | Risk-weighted sample | Lower direct reliance, but verify the data that justifies CPP ranges and the control strategy |
| Routine in-process and environmental data | Statistical sample plus any flagged events | Confirms the system, not every reading |

Anything tied to a result that supports an acceptance criterion gets full verification. The audit output should be a defect log with severity, owner, and a closure date that sits before your target filing date, not a memo that says the package "looks complete." Tie each defect into [CAPA](/articles/what-is-a-capa) so closure is traceable, and classify findings consistently using [audit finding classification](/articles/audit-finding-classification).

### Roles in the pre-BLA audit

| Role | Responsibility |
|---|---|
| CMC regulatory lead | Owns the submission narrative; defines which results are load-bearing claims |
| QA / data integrity SME | Leads the audit, classifies findings, owns the defect log |
| Analytical SMEs | Reconstruct the trace for each sampled result; explain method versions and reintegrations |
| IT / system owners | Provide audit trail exports, access-control records, and validation status for each system |
| Site quality (each contributing site) | Confirm GMP status and provide local records during the audit window |
| Program / project management | Holds the schedule so defect closure lands before filing |
| Senior quality (independent) | Approves the audit report and confirms readiness to file |

---

## The Pre-License Inspection

FDA conducts a pre-license inspection (PLI) before approving most biologics applications and a pre-approval inspection (PAI) for NDAs. The PLI/PAI is distinct from a routine surveillance inspection. It is targeted at the specific product and its manufacturing process, and the team usually arrives having already read your Module 3. They are not learning your process from scratch. They are checking whether the process they read about is the one you actually run. General preparation principles are covered in [FDA inspection readiness](/articles/fda-inspection-readiness) and [managing a live inspection](/articles/managing-a-live-inspection); the points below are specific to a pre-license or pre-approval visit.

FDA's program guidance for these inspections rests on three objectives: readiness for commercial manufacturing, conformance of the facility and process to the application, and data integrity of the data supporting the application. The third objective is where most avoidable damage occurs.

### What PLI investigators focus on

**The manufacturing process.** Does the actual process described in 3.2.S.2.2 match what is in the executed batch records? Are CPP ranges in the submission consistent with actual manufacturing experience? Are there undisclosed deviations from the submitted process description? An investigator will ask for the batch records of the validation batches and read them line by line against the process description.

**Analytical testing.** Investigators go directly to the CDS, pull the raw data for release batches cited in the submission, and compare to submitted results. They look at the chromatographic raw data and the actual injection sequence, not only the reported numbers. Injection sequences that appear in the CDS but not in the LIMS or in the submission, a classic sign of selective reporting, are a critical finding. They will also look at "trial" or "test" injections sitting outside the official sequence.

**Data integrity controls.** Audit trail configuration, access controls, and raw data management. The PLI examines the same controls a routine inspection would, with heightened scrutiny because the data underpins an approval decision. Shared logins, analysts with administrator rights that allow them to delete data, and audit trails that were never switched on are the failures that recur in published findings. See [21 CFR Part 11 and EU Annex 11 in practice](/articles/part-11-annex-11-practical-guide) and [access control for computerized systems](/articles/csv-cybersecurity-access-control).

**Validation status of manufacturing and quality systems.** The computer system validation status of the LIMS, the manufacturing execution system (MES), the CDS, and any other system used to produce the submission data. Batch records produced on an unvalidated MES are a serious concern. The expectations follow the [GAMP 5 framework](/articles/gamp5-csv-framework) and FDA's [computer software assurance](/articles/computer-software-assurance-fda) approach, which was issued as a draft in 2022 and finalized in 2024.

### Common PLI findings that delay approval

- Out-of-specification (OOS) results present in raw data but absent from the submitted results set (undisclosed OOS, or "testing into compliance").
- Process deviations not disclosed in the submission.
- Analytical methods used for submission data that differ from the validated method, with no documented bridge.
- A manufacturing site used for submission batches that was not named in the application and is not approved.
- A contract laboratory that generated submission data but was never qualified or audited.
- Audit trails disabled, not reviewed, or configured so that critical actions are not captured.
- Reference standard qualification gaps that undermine every result calibrated against that standard.

Any of these can generate a Complete Response Letter. The application is not approved and must be addressed before resubmission. For a development-stage organization with a single asset, a complete response driven by data integrity can be existential. When findings land as a Form FDA 483, the response itself becomes part of the record, and how you handle it matters as much as the underlying fix. Work through [483 and warning letter response strategy](/articles/fda-483-response-strategy) and [483 and warning letter response](/articles/483-warning-letter-response) before drafting anything.

### What good looks like during the inspection

A ready site can do the following in front of an investigator, in real time, without a scramble:

- Pull the raw CDS data for any cited release result within minutes and show the full injection sequence and audit trail.
- Show the validation status and current calibration of any instrument named in a record.
- Demonstrate that audit trails are on, are reviewed, and that the review is documented.
- Show that no individual has both the ability to generate data and to delete it unreviewed.
- Reconcile every batch named in the submission to an approved, named facility.
- Produce the training record for any analyst whose name appears on a record, showing qualification predated the work.

---

## Reading the Public Record Before You File

You do not have to guess what investigators care about. FDA publishes warning letters and inspection observations, and the recurring CMC and data integrity themes are stable across years: deleted or overwritten chromatographic data, testing into compliance, audit trails disabled or not reviewed, shared system accounts, and OOS results closed without scientific justification. The [patterns in FDA warning letters](/articles/fda-warning-letters-patterns), [regulatory intelligence on 483 trends](/articles/regulatory-intelligence-483-trends), and a structured [OOS investigation process](/articles/oos-investigation-process) are worth studying as the failure modes your pre-BLA audit is meant to catch.

A useful exercise for a program team is to read a handful of recent CMC-relevant warning letters, then ask whether the same finding could be written about your package today. If the honest answer is "maybe," that section is your first audit target. Quality culture matters here too: the conditions that produce data integrity failures are usually pressure plus opportunity, not malice. See [quality culture and data integrity failures](/articles/quality-culture-di-failures).

---

## Stability Data in the BLA

Stability data is among the most scrutinized areas. It establishes the shelf life of the drug substance and drug product, and if the shelf life data is flawed, the entire commercial program is at risk. The governing guidance is ICH Q1A(R2) for general stability, ICH Q1E for evaluation and extrapolation of stability data, and ICH Q5C for biotechnological and biological products. Deeper treatment lives in [stability programs and ICH](/articles/stability-programs-ich).

### Core expectations

- Stability data from at least three primary batches of drug substance and drug product.
- Primary batches representative of the commercial process and, where feasible, at commercial scale.
- Long-term storage at conditions appropriate to the labeled storage and climatic zone, with accelerated and where relevant intermediate conditions to support the program.
- Time points sufficient to support the proposed shelf life, with data continuing through the review period under a stability commitment.
- Frozen or refrigerated products stored at the labeled condition, supported by shipping and handling simulation studies where relevant. See [cold chain shipping qualification](/articles/cold-chain-shipping-qualification).

### Data integrity expectations for stability data

- Temperature and humidity excursions during storage must be captured and assessed. A chamber that cycled outside specified conditions for an extended period, with no record of the excursion or its impact on the samples, is a stability data integrity problem regardless of how the assay results read.
- Time point testing must occur within the protocol-specified windows. Tests run well outside those windows without deviation documentation compromise the data set.
- Any out-of-specification or out-of-trend stability result must be investigated under the OOS or [out-of-trend procedure](/articles/out-of-trend-investigations) before the data goes into the submission.

### A worked stability disclosure example

Assume a 24-month long-term stability study at 5 degrees C on a refrigerated drug product. At the 12-month pull, the chamber logged an 18-hour excursion to 14 degrees C following a power event. The defensible package shows: the excursion captured by continuous chamber monitoring, a deviation raised the same week, an impact assessment concluding the cumulative thermal exposure remained within the product's demonstrated acceptable mean kinetic temperature, and the 12-month assay results in trend. The indefensible version is identical assay results with no excursion record at all, because the chamber alarm was acknowledged and cleared but never documented. The most common way stability data falls apart is not a bad result. It is an untracked excursion plus a chamber-monitoring record that cannot be reconstructed. Treat the monitoring data with the same rigor as the assay data, and validate the temperature mapping of every chamber per [temperature mapping qualification](/articles/temperature-mapping-qualification).

---

## Modality-Specific Considerations

The CMC data architecture and the integrity expectations are constant, but several modalities add features that draw extra reviewer attention. Match the depth of your package to where the novelty sits.

### Biologics and biotechnology products

Adventitious agent safety drives a large block of 3.2.A.2: cell bank characterization, viral clearance studies under ICH Q5A(R2), and genetic stability under ICH Q5B. Potency is a release attribute that must be defined and validated, with the strategy aligned to ICH Q6B. Comparability across process changes is governed by ICH Q5E and is a frequent source of deficiency questions when a process changed between clinical and commercial scale. See [process validation for biologics](/articles/process-validation-for-biologics) and [comparability and potency assays](/articles/comparability-and-potency-assays).

### Small-molecule drugs

Impurity control under ICH Q3A and Q3B and the mutagenic impurity assessment under ICH M7, plus the [nitrosamine impurities assessment](/articles/nitrosamines-impurities-q3-m7), are common deficiency areas. The API GMP expectations follow [ICH Q7](/articles/ich-q7-api-gmp). The data integrity questions are the same, but the analytical density of an NDA leans heavily on chromatography, so CDS integrity is the dominant risk.

### Cell and gene therapy products

For autologous and individualized products, chain of identity and chain of custody must guarantee traceability from collection through administration without mix-up: collection documentation, manufacturing records with unique patient identifiers, identity testing at each manufacturing stage, labeling controls, and patient-specific final release records. A single broken link, an identity check that cannot be reconstructed, is a patient-safety finding, not a paperwork finding. Many of these methods have no compendial reference, so the development data behind a potency assay, not just the final validation report, is part of the package. Process validation must address inherent input variability rather than averaging it away. See [cell and gene therapy data integrity](/articles/cell-gene-therapy-data-integrity), [data integrity in gene therapy](/articles/data-integrity-in-gene-therapy), and [ATMP GMP for cell and gene manufacturing](/articles/atmp-gmp-cell-gene-manufacturing).

### Combination products and devices

When the product includes a device constituent, such as a prefilled syringe or an autoinjector, design controls under 21 CFR 820 (now harmonized toward the QMSR) and human factors data enter the package. Container closure integrity, dose accuracy, and device verification data carry their own integrity chain. See [design controls for medical devices](/articles/design-controls-medical-devices) and [container closure integrity testing](/articles/container-closure-integrity-testing).

---

## Pre-Submission CMC Meeting with FDA

Before filing, sponsors typically request a pre-BLA or pre-NDA meeting, generally a Type B meeting under FDA's formal meeting guidance, to discuss the CMC section. This is the chance to confirm that FDA agrees with:

- The proposed specifications and their clinical justification.
- The analytical methods and their validation status.
- The stability protocol and the proposed shelf life.
- The process validation approach and the current data status.
- The container closure qualification and, for biologics, the comparability strategy.

Identifying potential data package gaps in the pre-BLA meeting, rather than discovering them in a deficiency letter after filing, can save many months. FDA will tell you if the proposed stability data is not adequate to support the claimed shelf life, if the potency assay does not appear adequately validated, or if the process characterization data does not justify the proposed CPP ranges. The point of the meeting is exactly that: get aligned before you file, not after. See [health authority meetings](/articles/health-authority-meetings) for how to run the meeting itself.

Treat the meeting package as a smaller version of the submission audit. The briefing document makes claims, and FDA will read those claims against the data you eventually file. Promising a shelf life or a CPP range you cannot defend later is worse than asking the question honestly now.

---

## A Readiness Timeline That Actually Works

The organizations that move smoothly through a pre-license inspection are not the ones with the most documents. They are the ones who treated the data package as a deliverable with its own schedule, owners, and milestones, years out. A workable sequence:

| Time before filing | What to lock down | Owner |
|---|---|---|
| 24-36 months | Identify every data-contributing site and lab; build the audit schedule; confirm all systems are validated and audit trails are on | CMC regulatory, QA |
| 12-18 months | Complete pre-submission audits of all contributing sites; close GMP and DI gaps; freeze the validated analytical methods | QA, site quality |
| 6-12 months | Run the internal pre-BLA data integrity audit on the actual results cited in Module 3; close the defect log | DI SME, analytical SMEs |
| 3-6 months | Hold the pre-BLA meeting; finalize specifications, shelf life, and CPP justifications against verified data | CMC regulatory |
| 0-3 months | Inspection readiness rehearsal; confirm raw data retrieval works in real time; brief subject-matter experts | QA, site management |

The throughline is simple. The submission is a summary of evidence that already has to exist, traceable and intact, in validated systems, generated by trained people on qualified instruments under approved methods. Build the evidence first and the document writes itself. Write the document first and you spend the review period defending numbers you can no longer reconstruct.

---

## Common Mistakes and Inspection-Finding Patterns

- **Treating the submission as a writing exercise.** Teams polish the narrative in Module 3 while the underlying CDS audit trails, training records, and calibration files go unverified. The narrative is fine; the data behind it is the inspection.
- **Discovering a contributing site is unqualified at filing time.** A contract lab that ran early stability or a microbiology method was never audited, and now its data is load-bearing. There is no fast fix this late.
- **Selective reporting hidden in "trial" injections.** Test or trial injections sit outside the official sequence and the real first result, which was OOS, never reaches the LIMS. Investigators look specifically for this.
- **Undisclosed process deviations.** The validation batches ran with an excursion or a parameter outside the submitted range, and the deviation was handled locally but never reconciled with the process description in the submission.
- **Audit trails configured but never reviewed.** Having the audit trail on is not enough; the absence of a documented review is itself the finding. See [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).
- **Reference standard gaps.** The qualification of a reference standard expired, or its characterization is incomplete, undermining every result calibrated against it.
- **Method version drift.** The method used to generate submission data is not the validated version in the document system, with no bridging study to connect them.
- **Stability excursions not captured.** The assay results look clean, but the chamber excursion that occurred between time points was never documented, so the storage history cannot be reconstructed.

---

## Interview-Ready: Questions and How to Answer Them

**"A reviewer requests the raw data behind a single purity result in Module 3. Walk me through what you produce."** Name the full trace: the LIMS record and its released status, the CDS sequence and injection with an intact audit trail showing no undocumented reintegration, the effective method version and its change history, the analyst training record predating the test, the instrument calibration and qualification status, and the sample login. Make the point that any missing link turns the number into a finding.

**"What is the difference between a pre-license inspection and a routine surveillance inspection?"** A PLI or PAI is product-specific and application-specific. The team has read your Module 3 and is verifying that the process and data described match reality, with three objectives: commercial readiness, conformance to the application, and data integrity of the supporting data. A surveillance inspection assesses the ongoing state of GMP at the site without a pending application driving it.

**"How would you scope a pre-BLA data integrity audit when you cannot verify every number?"** Risk-based sampling: 100 percent of results behind every acceptance criterion, 100 percent of PPQ and registration stability lots, and a risk-weighted sample of development and routine data. Output is a defect log with severity, owner, and a closure date that sits before the filing date, not a "looks complete" memo.

**"You find an undisclosed OOS in the raw data three months before filing. What do you do?"** Stop and investigate it under the OOS procedure, assess product and submission impact, and disclose it properly. Do not bury it. An OOS handled correctly is a normal part of a quality system; an undisclosed OOS that an investigator finds is a critical data integrity finding that can trigger a Complete Response Letter.

**"How do you ensure data from a CDMO is defensible in your submission?"** Qualify and audit the CDMO before relying on its data, define data integrity expectations in the quality agreement, confirm its systems are validated and audit trails are on for the relevant period, and verify a sample of the actual results during your pre-submission audit. The sponsor owns the data once it enters the application.

**"Why is stability data such a common failure point, and what is the failure usually?"** Because shelf life rests on it and the program rests on shelf life. The failure is rarely a bad assay; it is an untracked chamber excursion plus monitoring records that cannot be reconstructed, or testing performed outside the protocol window without a deviation.

**"How do you confirm the process in the submission is the process you actually run?"** Reconcile the process description in 3.2.S.2.2 and 3.2.P.3 against the executed batch records for the validation batches, line by line, and confirm CPP ranges in the submission match actual manufacturing experience. Any deviation in the validation batches must be reconciled with the submitted description.

---

## Related Reading

- [IND, NDA, and BLA pathways](/articles/ind-nda-bla-pathways) and [eCTD submission architecture](/articles/ectd-submission-architecture) for the submission framework.
- [ALCOA+ principles in detail](/articles/alcoa-plus-deep-dive), [data integrity foundations](/articles/data-integrity-foundations), and [data criticality and data risk](/articles/data-criticality-and-data-risk) for the integrity baseline.
- [FDA inspection readiness](/articles/fda-inspection-readiness), [managing a live inspection](/articles/managing-a-live-inspection), and [mock inspection program](/articles/mock-inspection-program) for inspection preparation.
- [Process performance qualification (PPQ)](/articles/process-performance-qualification-ppq) and [process validation lifecycle](/articles/process-validation-lifecycle) for the validation data behind the package.
- [Stability programs and ICH](/articles/stability-programs-ich) and [OOS investigation process](/articles/oos-investigation-process) for the two areas inspectors press hardest.
