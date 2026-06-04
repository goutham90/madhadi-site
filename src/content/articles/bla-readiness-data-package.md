---
title: "BLA Readiness: Architecting the Data Package for a Biologics License Application"
description: "A strategic guide to data integrity and data package architecture for BLA submissions, CMC data organization, data integrity requirements for regulatory review, pre-BLA inspection readiness, and what the FDA reviewers and inspectors are actually looking for in the data."
pubDate: 2026-04-15
tags: ["BLA", "regulatory submission", "biologics", "CMC", "data integrity", "FDA"]
tier: "Advanced"
pillar: "data-integrity"
---

A Biologics License Application is the most scrutinized regulatory submission in pharmaceutical development. FDA's CBER or CDER reviewers spend months evaluating the clinical, nonclinical, and CMC data packages. Pre-license inspection (PLI) investigators visit manufacturing facilities. The standard for data integrity in a BLA is higher than for any other regulatory interaction because the stakes, whether a novel therapeutic reaches patients, are correspondingly higher.

This article focuses on the CMC data integrity architecture: how to organize, verify, and present the manufacturing and quality data in a BLA, and how to prepare for the pre-license inspection that will follow for any product on an approval track.

---

## The CMC Data Universe in a BLA

Module 3 of the Common Technical Document (CTD) is the CMC section. For a biologic, it is typically the most voluminous section of the submission, often thousands of pages. The data comes from multiple GxP systems across potentially multiple sites and years of development.

**3.2.S: Drug Substance**
- Manufacturing process description and controls
- Process characterization data (DoE studies, CPP ranges)
- Control of materials (specifications and testing for starting materials, raw materials)
- Drug substance specifications with justification
- Analytical methods with validation reports (ICH Q2)
- Reference standards
- Container closure system
- Stability data (ICH Q1A-Q1F)

**3.2.P: Drug Product**
- Manufacturing process description (including formulation, fill/finish)
- Controls of drug product (specifications, test methods, method validation)
- Container closure (primary packaging qualification)
- Stability data for drug product

**3.2.A: Appendices**
- Facilities and equipment (site information, facility diagrams)
- Adventitious agents safety (for biologics: cell bank testing, viral clearance studies)
- Excipient safety

**3.2.R: Regional Information (US)**
- For FDA: executed batch records, validation batch data, in-process control data

---

## Data Integrity Architecture for CMC Data

The CMC data package is only as strong as the systems and processes that generated the data in it. FDA reviewers can and do request the underlying raw data for analytical testing results cited in the submission. Pre-license inspection investigators will go directly to the systems that generated the data and verify that what was submitted matches what is in the systems.

**Data traceability requirement:** Every analytical result in the submission must trace back to a GxP-controlled system. The result in 3.2.S.4.1 (drug substance specifications) must trace to: the analytical method (controlled document with version history), the analyst who ran it (training records), the instrument (calibration and qualification records), and the raw data file (retained in the CDS with intact audit trail).

If any link in this chain is broken, if the raw data file doesn't exist, if the analyst wasn't trained on the current method version, if the instrument was out of calibration, the result in the submission is not defensible.

**Multi-site data compilation:** BLAs for complex biologics, especially CGT, often involve data from multiple manufacturing sites, clinical manufacturing facilities, and contract laboratories. Each site generated data under its own quality system. The sponsor must establish that all contributing sites met GMP and that data integrity controls were in place at each site during the relevant manufacturing period.

This is a critical planning consideration. Identifying a GMP gap at a contract laboratory that performed stability testing 18 months before BLA submission, after the data is already in the submission package, is an extremely difficult problem. Pre-submission audits of all data-contributing sites are essential.

---

## Pre-BLA Data Integrity Audit

Before submitting a BLA, conduct a systematic data integrity audit of the CMC data package. This should be done by someone who understands both the regulatory requirements and the technical systems, not just a review of the documents in the submission, but a verification that the underlying data is complete, traceable, and defensible.

**Audit scope:**

*For each analytical result in the submission:*
- Identify the raw data source (CDS file, instrument sequence, laboratory notebook)
- Confirm the raw data file is retained and unmodified (audit trail shows no post-analysis modifications, or modifications are documented and justified)
- Confirm the analyst was trained on the current method version at the time of analysis
- Confirm the instrument was within calibration at the time of analysis
- Confirm the method used was the validated version (no unauthorized modifications)

*For process validation data (3.2.S.2.5, 3.2.P.3.5):*
- Confirm PQ protocols were approved before execution
- Confirm PQ batches were consecutive and representative
- Confirm enhanced monitoring data is complete and available
- Confirm statistical analysis of results is accurate

*For stability data:*
- Confirm the stability protocol was approved and samples were placed on stability at the correct time points
- Confirm all scheduled testing was completed on time or within acceptable deviation
- Confirm any missed or late time points are disclosed and their impact assessed
- Confirm the ICH Q1A conditions (25°C/60%RH, 40°C/75%RH, etc.) were maintained throughout, with temperature and humidity monitoring records

---

## The Pre-License Inspection

FDA's Office of Pharmaceutical Manufacturing Assessment (OPMA) or CBER conducts pre-license inspections before approving most BLAs and PLAs. The PLI is distinct from a routine surveillance inspection; it's targeted at the specific product and its manufacturing process.

**What PLI investigators focus on:**

*The manufacturing process:* Does the actual process described in 3.2.S.2.2 match what's in the executed batch records? Are CPP ranges in the submission consistent with actual manufacturing experience? Are there undisclosed deviations from the submitted process description?

*Analytical testing:* The investigators will go directly to the CDS, pull the raw data for release batches cited in the submission, and compare to submitted results. They will look at the chromatographic raw data, the actual injection sequence, not just the reported results. Any sign of selective reporting (injection sequences in the CDS that don't appear in the LIMS or in the submission) is a critical finding.

*Data integrity controls:* Audit trail configuration, access controls, raw data management. The PLI investigates the same DI controls any routine inspection would, but with heightened scrutiny because the data being inspected underpins an approval decision.

*Validation status of manufacturing systems:* CSV status of the LIMS, MES, and any other systems used for production of the batches in the submission. Batch records manufactured using an unvalidated MES are a significant concern.

**Common PLI findings that delay approval:**

- OOS results that appear in raw data but are not in the submitted results set (undisclosed OOS)
- Process deviations not disclosed in the submission
- Analytical methods used in the submission that differ from the validated method (unauthorized method modifications)
- Manufacturing site not in the submission and not approved
- Contract laboratory used for submitted data not qualified and not audited

Any of these findings generates a complete response, the application is not approved and must be resubmitted after remediation. For a development-stage biotech, a complete response for data integrity reasons can be existential.

---

## Stability Data in the BLA

Stability data is one of the areas most scrutinized by FDA reviewers. The stability data establishes the shelf life of the drug substance and drug product, and if the shelf life data is flawed, the entire commercial program is at risk.

**ICH Q1A requirements for a BLA:**

- Stability data from at least three primary batches of drug substance and drug product
- Primary batches manufactured at the same scale and with the same process as the commercial scale
- Storage conditions: long-term (25°C/60%RH for zone II products), accelerated (40°C/75%RH)
- Time points: 0, 3, 6, 9, 12 months for 12-month initial data, continuing to 18 and 24 months during review
- Frozen products: -20°C or -80°C as appropriate, with shipping simulation studies

**Data integrity requirements for stability data:**

- Temperature excursions during storage must be captured and assessed. A stability chamber that cycled outside specified conditions for 48 hours, with no documentation of the excursion and its impact on the samples, is a stability data integrity problem.
- Time point testing must be conducted within protocol-specified windows. ICH Q1A allows ±7 days for early time points, ±30 days for longer time points. Tests conducted significantly outside these windows without deviation documentation compromise the data.
- Any out-of-specification stability result must be investigated per the OOS procedure before the data is included in the submission.

---

## CGT-Specific BLA Data Architecture

For cell and gene therapy products, the BLA data architecture has additional complexity:

**Chain of identity and chain of custody for autologous products:** Each patient's product is unique. The BLA must establish the controls that ensure product traceability from collection through administration without mix-up. This includes: collection documentation, manufacturing records with unique patient identifiers, identity testing at each manufacturing stage, labeling controls, and final release testing with patient-specific records.

**Novel assays:** CGT products often rely on novel analytical methods with no compendial precedent. Potency assays for gene-edited cells, measuring the functional output of the editing (e.g., HbF levels in edited cells for hemoglobin disorders), require full method validation with extensive development data. FDA reviewers will scrutinize these methods carefully because they're the primary evidence of product activity.

**Manufacturing variability for autologous products:** Patient starting material variability means the manufacturing process must demonstrate robustness across a range of starting material characteristics. Process validation for autologous CGT must address this inherent variability, which means using patient-derived starting material variability data from development and clinical manufacturing.

**Comparability for manufactured lots:** When the manufacturing process changes between clinical development and commercial scale, a comparability exercise must show that the commercial process produces product equivalent in quality and activity to the clinical material. Comparability for CGT is complex because of the limited panel of characterization assays and the difficulty of demonstrating clinical comparability without additional clinical data.

---

## Pre-Submission CMC Meeting with FDA

Before filing a BLA, the sponsor typically requests a pre-BLA meeting (Type B meeting) with FDA to discuss the CMC section. This is an opportunity to confirm that FDA agrees with:
- The proposed specifications and their clinical justification
- The analytical methods and their validation status
- The stability protocol and proposed shelf life
- The process validation approach and current data status
- The container closure qualification

Proactively identifying potential data package gaps in the pre-BLA meeting, rather than discovering them in a deficiency letter post-filing, saves months of development time.

FDA can and will tell you if the proposed stability data isn't adequate to support the claimed shelf life, if the potency assay doesn't seem adequately validated, or if the process characterization data doesn't justify the proposed CPP ranges. The purpose of the pre-BLA meeting is exactly this: get aligned before you file, not after.
