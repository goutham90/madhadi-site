---
title: "GxP Computerized Systems: LIMS, CDS, ELN, MES, CTMS, and More, A Complete Map"
description: "Every major computerized system used in pharmaceutical manufacturing and clinical operations, what each one does, the GxP data it generates, and the validation requirements that come with it."
pubDate: 2025-07-18
tags: ["LIMS", "CDS", "ELN", "MES", "CSV", "computerized systems", "foundations"]
tier: "Beginner"
pillar: "csv-csa"
---

Pharmaceutical and biotech companies run on software. A single regulated facility can operate dozens of distinct computerized systems, and almost every one of them generates GxP data that has to be managed, validated, and protected for the life of the product. If you are new to quality or validation, the sheer number of acronyms is the first thing that hits you: LIMS, CDS, ELN, MES, SCADA, eQMS, EDC, CTMS. They start to blur together.

This article maps the major system categories so they stop blurring. For each one, you get a plain description of what it does, the records it produces, who uses it, and the validation and data integrity questions that follow. The goal is to give you a mental model of the whole system environment, not a vendor shopping list. Product names are included only as neutral examples, because the same category often goes by three or four different commercial names and the names get used loosely on the floor.

Two ideas hold the whole map together. First, a computerized system is regulated based on what it does, not what it is called. A spreadsheet that calculates a release result carries more regulatory weight than an expensive platform that only schedules meetings. Second, the controlling question for every system is always the same: can you trust the data it produces, and can you prove it? That is the data integrity question, and it shows up in slightly different clothing in every category below. If you want the underlying principles before reading the system tour, start with [data integrity foundations](/articles/data-integrity-foundations) and [ALCOA+](/articles/alcoa-plus-deep-dive).

---

## How to read a system: the five questions

Before the category-by-category tour, here is a frame you can apply to any system, including ones not listed here. When a system lands on your desk for assessment, ask:

1. **What GxP decision does its output drive?** Batch release, sample disposition, patient safety reporting, stability conclusions. If the answer is "none," the validation burden drops sharply.
2. **Where is the original record, and what format is it in?** The raw data file, the database row, the time-series stream. The original record, including its metadata, is what you have to protect.
3. **Who can change the data, and is every change captured?** This is the audit trail question. Default settings rarely answer it well.
4. **How does someone sign or approve in the system?** Electronic signatures bring 21 CFR Part 11 and EU Annex 11 into scope.
5. **What happens when it fails or is decommissioned?** Backup, restore, business continuity, and long-term readable retention.

Hold these five questions in mind as you read. Every "validation scope" and "DI risk" note below is really just one of these five questions applied to a specific system.

---

## Laboratory Information Management System (LIMS)

**What it does:** The LIMS is the central system for managing laboratory samples, tests, and results. When a raw material arrives at a facility, a LIMS entry is created, samples are assigned, tests are scheduled, results are entered, specifications are checked automatically, and a disposition recommendation is generated. The LIMS knows where every sample is, what tests have run, and whether results are pending, passing, or failing.

**Key data generated:** Sample records, test results, disposition decisions, certificates of analysis, environmental monitoring results, stability testing schedules and results, out-of-specification flags.

**Primary users:** QC analysts, QA, manufacturing (for in-process results), supply chain (for raw material status).

**Validation scope:** A LIMS is typically a Category 4 (configured) or Category 5 (custom) system under GAMP 5, requiring a full lifecycle approach with installation, operational, and performance qualification. Critical validated functions include sample tracking and traceability, result capture and specification comparison, automatic limit checks, audit trail completeness, and access control enforcement. The specification limits themselves are configured data that must be verified and change-controlled, because a transcription error in a limit table silently passes failing product.

**Common systems:** LabVantage, LabWare, STARLIMS, Thermo SampleManager.

**Worked example:** A QC analyst tests an incoming excipient. The result is 99.2 percent assay against a 98.0 to 102.0 percent specification. The LIMS compares the entered value to the configured limits, marks it passing, and rolls it into a disposition recommendation. The validation question is not whether the chemistry is right, that is the method's job. It is whether the LIMS reliably enforced the right limits, attributed the entry to the right analyst with the right timestamp, and prevented anyone from quietly editing 99.2 to 99.8 without leaving a trace. That is why audit trail review on result changes is part of [batch record review](/articles/batch-record-review-gmp).

---

## Chromatography Data System (CDS)

**What it does:** The CDS controls chromatography instruments such as HPLC, GC, UHPLC, and LC-MS, and captures the raw data they generate. An analyst runs a sample, the instrument produces a chromatogram (detector response over time), and the CDS applies an integration method to calculate peak areas and, from those, concentrations or purity values. The CDS is where raw chromatographic data lives.

**Key data generated:** Raw instrument data files, chromatograms, integration results, sequence files, method files, injection logs. The raw data file is the original record. Processed results derived from it are secondary and must always be traceable back to the raw file.

**Primary users:** QC analysts, method development scientists, the stability group.

**Validation scope:** The CDS is one of the most inspection-scrutinized categories because it is where many data integrity failures happen. Audit trail configuration matters most here. The system must capture integration parameter changes with prior values, and the ability to reprocess, reintegrate, or delete data must be restricted by role. Integration event logs must be reviewable, and the review of those logs needs to be a defined step, not an afterthought. The qualification of the connected instrument is a separate, parallel activity covered in [analytical instrument qualification](/articles/analytical-instrument-qualification).

**Common systems:** Waters Empower, Agilent OpenLab CDS, Thermo Chromeleon, Shimadzu LabSolutions.

**DI risk note:** CDS is consistently among the most common sources of audit trail and data integrity citations in FDA warning letters. The recurring patterns are well documented in agency guidance: testing into compliance, using "trial" or unofficial injections that are not reviewed, sharing logins so changes cannot be attributed, and audit trails that were never switched on. The default configuration of many platforms does not capture old value and new value for integration changes until someone deliberately configures it. The audit trail must capture, at minimum, the event, user ID, timestamp, field name, prior value, and new value. The FDA guidance "Data Integrity and Compliance With Drug CGMP" (final, December 2018) and the MHRA "GXP Data Integrity Guidance and Definitions" (March 2018) both treat this as baseline expectation. For how to design and review these trails, see [audit trail design and review](/articles/audit-trail-design-and-review).

---

## Electronic Laboratory Notebook (ELN)

**What it does:** The ELN replaces the paper lab notebook. Scientists record experiments, method development data, observations, and calculations in a structured electronic format. In a GxP context, the ELN can be a primary data source for research, development, and some quality activities.

**Key data generated:** Experimental records, calculations, observations, raw data from attached instruments, scientist signatures and dates, witness signatures where used.

**Primary users:** R&D scientists, analytical development, formulation scientists.

**Validation scope:** For GxP use, ELN validation focuses on record integrity, audit trail, electronic signature compliance, and the ability to export records in a human-readable format. Many ELN platforms are built first for scientific workflow and collaboration, so the GxP-compliant configuration takes deliberate attention to access controls, locking of signed records, and audit settings. A common gap is calculation integrity: if the ELN runs embedded calculations or pulls in spreadsheet logic, that logic is a configured object that needs verification, the same way a standalone spreadsheet would under [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation).

**Common systems:** Benchling, Dotmatics, IDBS E-WorkBook, LabArchives, Revvity Signals Notebook.

---

## Manufacturing Execution System (MES)

**What it does:** The MES manages and records the manufacturing process in real time. An electronic batch record in the MES guides operators through each step of the procedure, captures electronic signatures at critical steps, records process parameters, and flags deviations when parameters fall out of range. The completed electronic batch record replaces or supplements the paper batch manufacturing record.

**Key data generated:** Electronic batch records, process parameter logs, in-process test results, operator electronic signatures, deviation flags, material consumption and batch genealogy records.

**Primary users:** Manufacturing operators, manufacturing management, QA for batch release review.

**Validation scope:** An MES is typically a highly configured Category 4 or custom Category 5 system, and one of the most complex in the facility. Electronic signature compliance under 21 CFR Part 11 is non-negotiable, and the signature manifestation must show the printed name, date, time, and meaning of each signature. The electronic batch record workflow must enforce the intended sequence of operations so an operator cannot skip or backfill a step. Process parameter alarms and any limit overrides must be captured with prior values in the audit trail. Because the MES sits between control systems below and the quality system above, its interfaces are a major part of validation effort. The detailed integrity expectations are covered in [MES, EBR, and SCADA data integrity](/articles/mes-ebr-scada-data-integrity) and [GxP manufacturing systems](/articles/gxp-manufacturing-systems).

**Common systems:** Rockwell PharmaSuite, Werum PAS-X, Körber Werum, Apprentice, Tulip; deviation handoff often goes to a separate quality system such as TrackWise.

---

## Process Analytical Technology (PAT) and Data Historians

**What it does:** Process historians capture time-series data from manufacturing equipment: temperature, pressure, pH, dissolved oxygen, agitation speed, flow rates. In bioreactor-based manufacturing, a historian can record thousands of data points per batch, building the continuous process record that demonstrates the batch ran within validated parameters. PAT extends this idea toward real-time measurement and control of quality attributes during the process itself, an approach the FDA encouraged in its 2004 guidance "PAT, A Framework for Innovative Pharmaceutical Development, Manufacturing, and Quality Assurance."

**Key data generated:** Continuous time-series records of critical and non-critical process parameters for every batch, plus the configuration that defines tags, sampling rates, and data compression.

**Primary users:** Process development, manufacturing, QA for batch review.

**Validation scope:** Historians are usually fed by SCADA or distributed control systems, so the integrity requirements apply at several layers: the sensor and PLC level, the control and historian level, and the reporting layer. Two issues recur. First, many historians compress data to save storage, and aggressive compression can discard meaningful detail, so the compression settings are a validated configuration, not an IT convenience. Second, audit trails for tag and configuration changes are often weak in process systems and need deliberate remediation. Time synchronization across these layers also matters, because a contemporaneous record with the wrong clock is not really contemporaneous.

**Common systems:** AVEVA PI (formerly OSIsoft PI), AspenTech InfoPlus.21, GE Proficy Historian.

---

## SCADA and Distributed Control Systems (DCS)

**What it does:** SCADA (Supervisory Control and Data Acquisition) and DCS systems control automated manufacturing processes. They read data from field instruments, compare it to setpoints, and send control signals to actuators such as valves, pumps, and agitators. In pharmaceutical manufacturing they run fermentation, purification, environmental systems, utilities, and fill and finish operations.

**Key data generated:** Real-time and historical process control data, alarm and event records, operator change and setpoint records.

**GxP consideration:** These systems are often engineered for process reliability and efficiency rather than GxP record-keeping, and it shows. Their audit trails frequently do not capture prior values, do not maintain individual user attribution for setpoint changes (shared operator consoles are common), and can be hard to export in a readable form. The agency has cited control-system data integrity gaps in drug manufacturing contexts. Changes to PLC programs and SCADA setpoint tables are configuration changes that must go through validated [change control](/articles/change-control-validated-systems), and the validation approach for the whole layer is laid out in [automation validation for PLC, SCADA, and DCS](/articles/automation-validation-plc-scada-dcs).

---

## Enterprise Resource Planning (ERP) and its GxP intersections

**What it does:** ERP systems manage business processes including purchasing, inventory, order management, and finance. Common platforms are SAP, Oracle, and Microsoft Dynamics. In pharmaceutical operations, ERP touches GxP mainly through inventory management: lot tracking, expiry management, quarantine and release status, and batch genealogy. Serialization and track-and-trace functions under the U.S. Drug Supply Chain Security Act (DSCSA, 2013) often live here too.

**GxP consideration:** You almost never validate the entire ERP. You validate the slices of it that drive GxP decisions, such as material status flags, batch disposition data, and expiry logic, plus the interfaces that move that data to and from validated systems like the LIMS and MES. A status field that wrongly flips a quarantined lot to "available" is a patient-safety event, so the controls around that field, and the interface that populates it, are where the validation effort concentrates. Scoping this well is an exercise in risk assessment; see [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology).

---

## Clinical Trial Management System (CTMS)

**What it does:** The CTMS manages the operational side of running clinical trials: site selection and activation, enrollment tracking, visit scheduling, monitoring visit reports, protocol deviation logging, and study team coordination. In clinical operations it is the logistics backbone of a study.

**GxP regulation:** A CTMS sits under Good Clinical Practice, principally ICH E6(R2) "Good Clinical Practice" (2016), rather than GMP. The data integrity principles are the same, but the regulatory framework and inspection focus differ. The revised ICH E6(R3) GCP guideline, which the ICH adopted in early 2025, sharpens expectations around computerized systems and risk-based oversight in trials, so CTMS and related clinical platforms are getting more attention, not less.

**Common systems:** Veeva Vault CTMS, Oracle Siebel CTMS, Medidata, IQVIA platforms.

For the broader clinical picture, see [clinical systems and GCP digital quality](/articles/clinical-systems-gcp-digital-quality) and [clinical QA and GCP data integrity](/articles/clinical-qa-gcp-data-integrity).

---

## Electronic Data Capture (EDC) and the eCRF

**What it does:** EDC systems capture clinical trial data from study sites. Investigators and coordinators enter participant data into electronic case report forms through the EDC, which runs edit checks at the point of entry, records timestamps and user IDs, manages queries, and maintains a full audit trail of every entry, correction, and resolution.

**GxP regulation:** Good Clinical Practice. EDC data integrity has long been a focus of FDA review during marketing applications, and the agency's expectations for electronic source data are described in its 2013 guidance "Electronic Source Data in Clinical Investigations." A recurring inspection theme is whether the source is the EDC entry itself or a separate paper or device record, and whether the path from true source to database is documented and controlled.

**Common systems:** Medidata Rave EDC, Oracle Clinical One, Veeva Vault EDC, Castor, REDCap (academic, with limited use in regulated submissions).

---

## Quality Management System (eQMS)

**What it does:** The eQMS is the electronic platform that runs the quality system itself: document control, deviations, CAPA, change control, training records, audits, supplier management, and complaints. A well-configured eQMS links these processes, so a deviation can generate a CAPA, an approved CAPA can trigger an SOP revision, and a new SOP version can issue training assignments to affected staff automatically.

**Validation scope:** The eQMS is a validated system, and because it holds the records that prove the quality system works, its audit trail and record-locking controls carry particular weight. It must prevent unauthorized modification of closed quality records, enforce approval workflows, and keep signatures bound to the records they apply to. Workflow configuration is the heart of the validation effort, since most of the risk lives in how the system routes, locks, and escalates records rather than in the underlying platform code. The processes it automates are described in [deviation management](/articles/deviation-management), [what is a CAPA](/articles/what-is-a-capa), [document control fundamentals](/articles/document-control-fundamentals), and the wider [pharmaceutical quality system](/articles/pharmaceutical-quality-system).

**Common systems:** Veeva Vault QMS, MasterControl, TrackWise, ETQ Reliance, AssurX.

---

## Laboratory automation and robotics

**What it does:** Automated liquid handlers, high-throughput screening platforms, and robotic sample processors take over repetitive laboratory tasks. In cell and gene therapy manufacturing, automated cell culture and processing platforms are now routine.

**Validation considerations:** These are software-driven systems, so they get validated like other software, but with extra dimensions. Installation qualification covers both hardware and software, because mechanical setup affects results. Method transfer matters: the automated method has to demonstrate equivalence to the manual method it replaces, which overlaps with [analytical method transfer](/articles/analytical-method-transfer). System suitability checks run before each batch of work, and the audit trail for an automated run must capture who started it, any interruptions, and any deviations the system detected mid-run. For cell and gene therapy specifics, see [cell and gene therapy data integrity](/articles/cell-gene-therapy-data-integrity).

---

## A quick reference across the categories

The table below summarizes the map. Treat the GAMP category as typical, not fixed: the same product can land in a different category depending on how heavily it is configured or customized.

| System | Primary regulation | Typical GAMP category | Highest-risk data integrity area |
|---|---|---|---|
| LIMS | GMP | 4 or 5 | Specification limits, result edits, disposition |
| CDS | GMP | 4 | Integration changes, reprocessing, raw-file deletion |
| ELN | GMP / GLP | 4 | Record locking, embedded calculations |
| MES | GMP | 4 or 5 | Signature workflow, step sequencing, overrides |
| Historian / PAT | GMP | 3 or 4 | Compression settings, time sync, tag config |
| SCADA / DCS | GMP | 3 or 4 | Attribution on shared consoles, setpoint audit trail |
| ERP (GxP slices) | GMP | 3 or 4 | Material status, expiry logic, interfaces |
| CTMS | GCP | 4 | Deviation logging, access control |
| EDC | GCP | 4 | Source definition, edit checks, query trail |
| eQMS | GMP | 4 | Closed-record locking, workflow integrity |
| Lab automation | GMP / GLP | 4 or 5 | Method equivalence, run-level audit trail |

The two regulations that cut across nearly every row are 21 CFR Part 11 (electronic records and electronic signatures) in the United States and EU Annex 11 (computerised systems) in Europe. Wherever a system holds an electronic record used for a GxP decision, or captures an electronic signature, these apply. A side-by-side reading of both is worth the time; see [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11) and the [Part 11 and Annex 11 practical guide](/articles/part-11-annex-11-practical-guide).

---

## Building the right validation strategy across systems

Not every system needs the same treatment, and trying to validate them all to the same depth wastes effort that should go to the systems that actually carry risk. GAMP 5 Second Edition (ISPE, 2022) and the FDA's 2022 draft guidance "Computer Software Assurance for Production and Quality System Software" both push the same point: scale the effort to the risk. Three factors drive the call.

1. **Business and patient-safety criticality.** Does the system directly affect product quality, patient safety, or the integrity of GxP records? A LIMS does. An internal HR system does not. The criticality of the function, not the price of the software, sets the floor for rigor.
2. **System complexity and novelty.** Is this an off-the-shelf product used as configured, or a heavily configured or custom system doing something with little prior precedent? More configuration and more novelty mean more to verify and more that can go wrong.
3. **Existing evidence and supplier maturity.** Does the vendor run a credible quality system with documented testing you can review and rely on? Relying on supplier evidence, backed by a real [supplier and vendor qualification](/articles/supplier-vendor-qualification), can replace large amounts of duplicated testing. Cloud and software-as-a-service systems lean heavily on this, which is why [cloud and SaaS validation](/articles/cloud-saas-validation) treats vendor assessment as a core deliverable.

Combine these and the strategy writes itself. A standard LIMS from a mature vendor, used with default configuration for a well-understood function, earns a lighter, assurance-focused approach with critical thinking applied to the high-risk functions. A custom MES running a novel manufacturing process with no regulatory precedent earns a deeper, document-everything approach. The frameworks for doing this consistently are in [the GAMP 5 CSV framework](/articles/gamp5-csv-framework) and [computer software assurance](/articles/computer-software-assurance-fda).

Two cross-cutting disciplines apply to every system regardless of category. The first is data governance: someone has to own the policies, the periodic reviews, and the audit trail review cadence that keep these systems trustworthy over years, not just at go-live. See [data governance framework](/articles/data-governance-framework) and [DI program architecture](/articles/di-program-architecture). The second is the system's whole life: how it is patched, how it stays in a validated state through change, how it is backed up and recovered, and how its records stay readable when it is finally retired. Those topics live in [change control for validated systems](/articles/change-control-validated-systems), [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation), and [data migration validation](/articles/data-migration-validation).

Understanding the system environment is the first step, and it is a real step, not a formality. Knowing what each system does, what records it owns, and how it tends to fail gives you the foundation to build a coherent validation program across all of them, and to walk an inspector through it without surprises.
