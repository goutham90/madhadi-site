---
title: "GxP Computerized Systems: LIMS, CDS, ELN, MES, CTMS, and More, A Complete Map"
description: "Every major computerized system used in pharmaceutical manufacturing and clinical operations, what each one does, the GxP data it generates, and the validation requirements that come with it."
pubDate: 2025-07-18
tags: ["LIMS", "CDS", "ELN", "MES", "CSV", "computerized systems", "foundations"]
tier: "Beginner"
pillar: "csv-csa"
---

Pharmaceutical and biotech companies run on software. The number and variety of systems in a typical regulated facility is large, and each one generates GxP data that must be managed, validated, and protected. Understanding what each system does, what data it generates, and what validation it requires is foundational knowledge for anyone working in pharmaceutical quality, compliance, or validation.

This guide covers the major system categories. The actual product environment in each category has dozens of vendors, and system names are often used loosely in the industry. The important thing is understanding what a system category does and what its data integrity requirements are.

---

## Laboratory Information Management System (LIMS)

**What it does:** The LIMS is the central system for managing laboratory samples, tests, and results. When a raw material arrives at a facility, a LIMS entry is created, samples are assigned, tests are scheduled, results are entered, specifications are checked automatically, and a disposition recommendation is generated. The LIMS tracks where every sample is, what tests have been run, and whether results are pending, passing, or failing.

**Key data generated:** Sample records, test results, disposition decisions, CoAs (Certificates of Analysis), environmental monitoring results, stability testing records.

**Primary users:** QC analysts, QA, manufacturing (for in-process results), supply chain (for raw material status).

**Validation scope:** LIMS is typically a Category 4 (configured) or Category 5 (custom) system under GAMP 5, requiring full IQ/OQ/PQ validation. Critical validated functions include: sample tracking and traceability, result capture and specification comparison, audit trail completeness, and access control enforcement.

**Common systems:** LabVantage, LabWare, STARLIMS, Sapien (formerly SampleManager), OpenLab CDS.

---

## Chromatography Data System (CDS)

**What it does:** The CDS controls chromatography instruments (HPLC, GC, UHPLC, LC-MS) and captures the raw data they generate. An analyst runs a sample, the instrument produces a chromatogram (a graph of detector response over time), and the CDS software applies a mathematical integration method to calculate peak areas and, ultimately, concentrations. The CDS is where raw chromatographic data lives.

**Key data generated:** Raw instrument data files, chromatograms, integration results, sequence files, method files, injection logs. The raw data file is the original record. Processed results derived from it are secondary.

**Primary users:** QC analysts, method development scientists, stability group.

**Validation scope:** CDS is one of the most inspection-scrutinized system categories because it's where many DI failures occur. Audit trail configuration is particularly important: the system must capture integration parameter changes with prior values, and the ability to delete or reprocess data must be controlled. Integration event logs must be reviewable.

**Common systems:** Waters Help, Agilent OpenLab CDS, Thermo Chromeleon, Shimadzu LabSolutions.

**DI risk note:** CDS is the single most common source of audit trail findings in FDA warning letters. Default configurations in many platforms are not compliant. Audit trail must be configured to capture: events, user ID, timestamp, field name, old value, new value. Out-of-box settings often don't do this without deliberate configuration.

---

## Electronic Laboratory Notebook (ELN)

**What it does:** The ELN replaces the paper lab notebook. Scientists record experiments, method development data, observations, and calculations in a structured electronic format. In a GxP context, the ELN is a primary data source for research and development activities.

**Key data generated:** Experimental records, calculations, observations, raw data from attached instruments, scientist signatures and dates.

**Primary users:** R&D scientists, analytical development, formulation scientists.

**Validation scope:** For GxP use, the ELN requires validation focused on: record integrity, audit trail, electronic signature compliance, and data export in a human-readable format. Many ELN systems are designed for scientific workflow; the GxP compliance configuration requires specific attention to access controls and audit settings.

**Common systems:** Benchling, Dotmatics, IDBS E-WorkBook, LabArchives, Revvity (formerly PerkinElmer) Signals Notebook.

---

## Manufacturing Execution System (MES)

**What it does:** The MES manages and records the manufacturing process in real time. An electronic batch record (EBR) in the MES guides operators through each step of the manufacturing procedure, captures electronic signatures at critical steps, records process parameters, and flags deviations when parameters go out of range. The completed EBR replaces or supplements the paper batch manufacturing record.

**Key data generated:** Electronic batch records, process parameter logs, in-process test results, operator electronic signatures, deviation flags, batch genealogy records.

**Primary users:** Manufacturing operators, manufacturing management, QA for batch release review.

**Validation scope:** MES is typically a highly complex Category 4 or 5 system. Electronic signature compliance under 21 CFR Part 11 is non-negotiable. The EBR workflow must enforce the intended sequence of operations. Process parameter alarm handling must be captured with prior values in the audit trail.

**Common systems:** Rockwell FTPC, Werum PAS-X, Körber (formerly mobe), Apprentice (for CGT), Tulip, Sparta Trackwise (for deviation integration).

---

## Process Analytical Technology (PAT) / Data Historians

**What it does:** Process historians (or data historians) capture time-series process data from manufacturing equipment: temperature, pressure, pH, dissolved oxygen, agitation speed. In bioreactor-based manufacturing, the historian captures thousands of data points per batch, creating the continuous process record that shows the batch was manufactured within validated parameters.

**Key data generated:** Continuous time-series records of critical and non-critical process parameters for every batch.

**Primary users:** Process development, manufacturing, QA for batch review.

**Validation scope:** Historian systems are often connected to SCADA or DCS systems. The combination creates a complex validated environment where the data integrity requirements apply at multiple layers: the PLC/sensor level, the SCADA historian level, and the reporting layer. Audit trails for configuration changes are often weak in process control systems and require deliberate remediation.

**Common systems:** OSIsoft PI (now AVEVA PI), AspenTech InfoPlus.21, GE Proficy Historian.

---

## SCADA and Distributed Control Systems (DCS)

**What it does:** SCADA (Supervisory Control and Data Acquisition) and DCS systems control automated manufacturing processes. They receive data from field instruments (sensors, transmitters), compare them to setpoints, and send control signals to actuators (valves, pumps, agitators). In pharmaceutical manufacturing, SCADA and DCS control fermentation, purification, environmental systems, utilities, and fill/finish operations.

**Key data generated:** Real-time and historical process control data, alarm records, operator change records.

**GxP consideration:** SCADA and DCS are often configured for process efficiency rather than GxP compliance. Their audit trails frequently don't capture prior values, don't maintain individual user attribution for setpoint changes, and can be difficult to export in a human-readable format. FDA has cited SCADA-related DI deficiencies in manufacturing contexts. Configuration changes to PLC programs and SCADA setpoint tables must go through validated change control.

---

## Enterprise Resource Planning (ERP), GxP Intersections

**What it does:** ERP systems (SAP, Oracle, Microsoft Dynamics) manage business processes including purchasing, inventory, order management, and finance. In pharmaceutical operations, ERP intersects with GxP through inventory management (lot tracking, expiry management, quarantine status) and batch genealogy.

**GxP consideration:** The portions of an ERP that drive GxP decisions (material status, batch disposition data, serialization records) may require validation. The ERP itself doesn't typically require full CSV treatment, but the interfaces between ERP and validated systems (LIMS, MES) that transfer disposition data are validated interface points.

---

## Clinical Trial Management System (CTMS)

**What it does:** The CTMS manages the operational aspects of running clinical trials: site selection and activation, patient enrollment tracking, visit scheduling, protocol deviation tracking, and study team communications. In GCP environments, the CTMS is the operational backbone for managing the study from a logistics perspective.

**GxP regulation:** CTMS is regulated under GCP (ICH E6(R2)) rather than GMP. The data integrity principles are the same, but the regulatory framework is different.

**Common systems:** Medidata Rave (CTMS module), Veeva Vault CTMS, Oracle Siebel CTMS, Salesforce Health Cloud.

---

## Electronic Data Capture (EDC) / eCRF

**What it does:** EDC systems capture clinical trial data from study sites. Investigators enter patient data into electronic Case Report Forms (eCRFs) via the EDC, which validates data against edit checks, captures timestamps and user IDs, and maintains a complete audit trail of all data entry, corrections, and queries.

**GxP regulation:** GCP. EDC validation is a specific discipline within clinical quality assurance. FDA has a long history of scrutinizing EDC data integrity in BLA reviews.

**Common systems:** Medidata Rave EDC, Oracle InForm, Veeva Vault EDC, Castor, REDCap (academic, limited regulatory use).

---

## Quality Management System (eQMS)

**What it does:** The eQMS is the electronic platform managing the quality system itself: document control, deviations, CAPAs, change control, training records, audits, supplier management, and complaints. An eQMS integrates these processes so that, for example, a deviation can automatically generate a CAPA, and a CAPA action can generate a training notification when a new SOP is approved.

**Validation scope:** The eQMS is a validated system. Because it manages QA records, its audit trail is particularly important. The eQMS must prevent unauthorized modification of closed quality records.

**Common systems:** Veeva Vault QMS, MasterControl, Sparta Systems TrackWise, ETQ Reliance, AssurX.

---

## Laboratory Automation and Robotics

**What it does:** Automated liquid handling systems, high-throughput screening platforms, and robotic sample processors automate repetitive laboratory tasks. In CGT manufacturing, automated cell culture and transduction platforms are in routine use.

**Validation considerations:** Automated systems are validated like other software-driven systems, but with additional considerations for mechanical qualification (IQ covers both hardware and software), method transfer (the automated method must demonstrate equivalence to the manual method), and system suitability checks before each run. The audit trail for automated runs must capture who started the run, any interruptions, and any parameter deviations detected during the run.

---

## Building the Right Validation Strategy Across Systems

Not all systems need the same validation treatment. GAMP 5 Second Edition's risk-based approach means you assess each system against three factors:

1. **Business criticality:** Does this system directly affect product quality, patient safety, or the integrity of GxP records? A LIMS does. A HR management system doesn't.
2. **System complexity:** Is this an off-the-shelf product used as-is (lower validation burden) or a heavily configured or custom system (higher burden)?
3. **Existing evidence:** Does the vendor have a strong quality system and published validation documentation? If so, you can use it rather than reproducing it.

The combination of these factors drives your validation strategy. A standard LIMS from a reputable vendor used with default configuration for a well-understood function gets a different validation treatment than a custom-built MES managing a novel CGT manufacturing process with no prior regulatory precedent.

Understanding the system environment is the first step. Knowing what each system does, what it generates, and what its failure modes are gives you the foundation to build a coherent, defensible validation program across all of them.
