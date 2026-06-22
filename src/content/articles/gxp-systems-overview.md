---
title: "GxP Computerized Systems: LIMS, CDS, ELN, MES, CTMS, and More, A Complete Map"
description: "Every major computerized system used in pharmaceutical manufacturing and clinical operations, what each one does, the GxP data it generates, and the validation requirements that come with it."
pubDate: 2025-07-18
tags: ["LIMS", "CDS", "ELN", "MES", "CSV", "computerized systems", "foundations"]
tier: "Beginner"
pillar: "csv-csa"
---

Pharmaceutical, biotech, and medical device companies run on software. A single regulated facility can operate dozens of distinct computerized systems, and almost every one of them generates GxP data that has to be managed, validated, and protected for the life of the product. If you are new to quality or validation, the sheer number of acronyms is the first thing that hits you: LIMS, CDS, ELN, MES, SCADA, eQMS, EDC, CTMS. They start to blur together.

This article maps the major system categories so they stop blurring. For each one, you get a plain description of what it does, the records it produces, who uses it, and the validation and data integrity questions that follow. The goal is to give you a mental model of the whole system environment, not a vendor shopping list. Product names are included only as neutral examples, because the same category often goes by three or four different commercial names and the names get used loosely on the floor.

Two ideas hold the whole map together. First, a computerized system is regulated based on what it does, not what it is called. A spreadsheet that calculates a release result carries more regulatory weight than an expensive platform that only schedules meetings. Second, the controlling question for every system is always the same: can you trust the data it produces, and can you prove it? That is the data integrity question, and it shows up in slightly different clothing in every category below. If you want the underlying principles before reading the system tour, start with [data integrity foundations](/articles/data-integrity-foundations) and [ALCOA+ in detail](/articles/alcoa-plus-deep-dive).

This is a beginner-tier map. Once you can name the systems and the records they own, the next move is to learn how each one is validated and operated day to day. The cross-links throughout point you there.

---

## How to read a system: the five questions

Before the category-by-category tour, here is a frame you can apply to any system, including ones not listed here. When a system lands on your desk for assessment, ask:

1. **What GxP decision does its output drive?** Batch release, sample disposition, patient safety reporting, stability conclusions, device design verification. If the answer is "none," the validation burden drops sharply.
2. **Where is the original record, and what format is it in?** The raw data file, the database row, the time-series stream. The original record, including its metadata, is what you have to protect. See [data lifecycle and metadata](/articles/data-lifecycle-and-metadata) for why metadata travels with the record.
3. **Who can change the data, and is every change captured?** This is the audit trail question. Default settings rarely answer it well.
4. **How does someone sign or approve in the system?** Electronic signatures bring 21 CFR Part 11 and EU Annex 11 into scope.
5. **What happens when it fails or is decommissioned?** Backup, restore, business continuity, and long-term readable retention.

Hold these five questions in mind as you read. Every "validation scope" and "DI risk" note below is really just one of these five questions applied to a specific system. The discipline of asking them in order, and writing down the answers, is the skeleton of a system risk assessment. The formal method behind it is in [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology) and [data criticality and data risk](/articles/data-criticality-and-data-risk).

### The regulatory backbone behind all five questions

Two regulations sit under nearly every answer, and you should be able to recite their scope cold in an interview.

> 21 CFR Part 11 (Electronic Records; Electronic Signatures), effective 1997, sets the U.S. requirements for when electronic records and signatures are trustworthy and equivalent to paper and handwritten signatures. It applies whenever a regulated record required by a predicate rule is created, modified, maintained, archived, retrieved, or transmitted electronically.

> EU Annex 11 (Computerised Systems), in force in its current form since 2011, is the European counterpart. It applies to any computerized system used as part of a GMP-regulated activity, and is built around risk management, validation, data integrity, and the supplier relationship.

The phrase to remember is "predicate rule." Part 11 is not a standalone obligation. It attaches to the underlying GMP, GLP, or GCP requirement that says the record must exist in the first place. A system holding a record that no predicate rule requires is out of Part 11 scope, though Annex 11 in Europe casts a slightly wider net. A full side-by-side reading is worth the time; see [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11) and the [Part 11 and Annex 11 practical guide](/articles/part-11-annex-11-practical-guide).

---

## Laboratory Information Management System (LIMS)

**What it does:** The LIMS is the central system for managing laboratory samples, tests, and results. When a raw material arrives at a facility, a LIMS entry is created, samples are assigned, tests are scheduled, results are entered, specifications are checked automatically, and a disposition recommendation is generated. The LIMS knows where every sample is, what tests have run, and whether results are pending, passing, or failing.

**Why it is regulated:** The LIMS makes or supports the disposition decision, the single most consequential quality decision in the building. Under 21 CFR 211.165 and 211.194, every batch must be tested against specifications and the results recorded before release. When the LIMS holds those specifications and those results, it holds the evidence that the batch met its release criteria. A wrong limit or an unattributed edit in the LIMS is, in effect, a falsified release record. See [what is GMP](/articles/what-is-gmp) and [CFR 210/211 cGMP walkthrough](/articles/cfr-210-211-cgmp-walkthrough) for the predicate rules.

**Key data generated:** Sample records, test results, disposition decisions, certificates of analysis, environmental monitoring results, stability testing schedules and results, out-of-specification flags.

**Primary users:** QC analysts, QA, manufacturing (for in-process results), supply chain (for raw material status).

**Validation scope:** A LIMS is typically a Category 4 (configured) or Category 5 (custom) system under GAMP 5, requiring a full lifecycle approach with installation, operational, and performance qualification. Critical validated functions include sample tracking and traceability, result capture and specification comparison, automatic limit checks, audit trail completeness, and access control enforcement. The specification limits themselves are configured data that must be verified and change-controlled, because a transcription error in a limit table silently passes failing product.

**How to validate it, in sequence:**

1. Write user requirements that name every GxP function (limit checking, disposition logic, audit trail, e-signature) and trace each to a test. See [user requirements and traceability](/articles/user-requirements-and-traceability).
2. Risk-assess each function. Limit checking and disposition are high risk. A label-printing convenience function is low risk.
3. Qualify the infrastructure and install the application (IQ).
4. Verify configured functions against requirements (OQ), with a heavy focus on the high-risk functions identified in step 2.
5. Confirm the system works in the real laboratory workflow with real users and real data (PQ).
6. Independently verify every configured specification limit against the approved source method or monograph, with a second-person check. This is the step teams most often shortchange.
7. Place the configuration under [change control](/articles/change-control-validated-systems) so no limit changes without review.

**Acceptance criteria:** Requirements all traced and tested with documented evidence. Audit trail captures user, timestamp, old value, and new value for every result and limit change, and cannot be disabled by an ordinary user. Access is role-based with segregation between the analyst who enters and the reviewer who approves. Every configured limit reconciles to its approved source. Disposition logic produces the correct recommendation on a deliberately failing test case.

**Common systems (neutral examples):** LabVantage, LabWare, STARLIMS, Thermo SampleManager.

**Worked example:** A QC analyst tests an incoming excipient. The result is 99.2 percent assay against a 98.0 to 102.0 percent specification. The LIMS compares the entered value to the configured limits, marks it passing, and rolls it into a disposition recommendation. The validation question is not whether the chemistry is right, that is the method's job. It is whether the LIMS reliably enforced the right limits, attributed the entry to the right analyst with the right timestamp, and prevented anyone from quietly editing 99.2 to 99.8 without leaving a trace. That is why audit trail review on result changes is part of [batch record review](/articles/batch-record-review-gmp).

**Common mistakes inspectors find:** Configured limits that were never independently verified against the method. Audit trail switched on for results but not for the limit tables. Analysts with rights to both enter and approve their own results. Manual results typed in from an instrument without a documented transcription check. For a full implementation walkthrough, see [LIMS implementation and validation](/articles/lims-implementation-and-validation).

---

## Chromatography Data System (CDS)

**What it does:** The CDS controls chromatography instruments such as HPLC, GC, UHPLC, and LC-MS, and captures the raw data they generate. An analyst runs a sample, the instrument produces a chromatogram (detector response over time), and the CDS applies an integration method to calculate peak areas and, from those, concentrations or purity values. The CDS is where raw chromatographic data lives.

**Key data generated:** Raw instrument data files, chromatograms, integration results, sequence files, method files, injection logs. The raw data file is the original record. Processed results derived from it are secondary and must always be traceable back to the raw file.

**Primary users:** QC analysts, method development scientists, the stability group.

**Validation scope:** The CDS is one of the most inspection-scrutinized categories because it is where many data integrity failures happen. Audit trail configuration matters most here. The system must capture integration parameter changes with prior values, and the ability to reprocess, reintegrate, or delete data must be restricted by role. Integration event logs must be reviewable, and the review of those logs needs to be a defined step, not an afterthought. The qualification of the connected instrument is a separate, parallel activity covered in [analytical instrument qualification](/articles/analytical-instrument-qualification).

**Common systems (neutral examples):** Waters Empower, Agilent OpenLab CDS, Thermo Chromeleon, Shimadzu LabSolutions.

**DI risk note:** CDS is consistently among the most common sources of audit trail and data integrity citations in FDA warning letters. The recurring patterns are well documented in agency guidance: testing into compliance, using "trial" or unofficial injections that are not reviewed, sharing logins so changes cannot be attributed, and audit trails that were never switched on. The default configuration of many platforms does not capture old value and new value for integration changes until someone deliberately configures it. The audit trail must capture, at minimum, the event, user ID, timestamp, field name, prior value, and new value. The FDA guidance "Data Integrity and Compliance With Drug CGMP" (final, December 2018) and the MHRA "GXP Data Integrity Guidance and Definitions" (March 2018) both treat this as baseline expectation. For how to design and review these trails, see [audit trail design and review](/articles/audit-trail-design-and-review).

**Worked example of a CDS audit trail review:** An analyst runs a six-injection sequence for an assay. During review, QA opens the integration audit trail and sees the table below.

| Time | User | Action | Old value | New value |
|---|---|---|---|---|
| 09:14 | jsmith | Sequence acquired | n/a | 6 injections |
| 10:02 | jsmith | Manual reintegration, peak 2 | Auto baseline | Valley-to-valley |
| 10:05 | jsmith | Result printed | n/a | 99.8% |

The manual reintegration at 10:02 is not automatically wrong, but it demands a documented reason. Did baseline noise justify it, and is that consistent with the method? The reviewer's job is to confirm the reason is recorded, the change is method-allowed, and no earlier passing result was overwritten. An audit trail that showed several deletions before the printed result, or injections with no corresponding result, is the classic falsification pattern. The full treatment is in [chromatography data system integrity](/articles/chromatography-data-system-integrity).

**How to lock down a CDS:** Use unique named accounts with no shared logins. Disable local administrator rights for analysts. Force audit trail on and prevent its disabling. Restrict reprocess and delete permissions to a small reviewer role. Store data on a server, not a local workstation, so it survives a disk wipe. Make integration-trail review a checked step in the [batch record review](/articles/batch-record-review-gmp) workflow.

---

## Electronic Laboratory Notebook (ELN)

**What it does:** The ELN replaces the paper lab notebook. Scientists record experiments, method development data, observations, and calculations in a structured electronic format. In a GxP context, the ELN can be a primary data source for research, development, and some quality activities. It also appears in GLP nonclinical work, where it serves as the contemporaneous study record.

**Key data generated:** Experimental records, calculations, observations, raw data from attached instruments, scientist signatures and dates, witness signatures where used.

**Primary users:** R&D scientists, analytical development, formulation scientists, nonclinical study staff.

**Why it is regulated, and under what:** In a GMP lab the ELN holds method-development or release-supporting data, so 21 CFR Part 11 applies. In a nonclinical lab it sits under GLP, 21 CFR Part 58, where the contemporaneous and attributable nature of the study record is the whole point. See [GLP under 21 CFR Part 58 for nonclinical studies](/articles/glp-21-cfr-58-nonclinical).

**Validation scope:** For GxP use, ELN validation focuses on record integrity, audit trail, electronic signature compliance, and the ability to export records in a human-readable format. Many ELN platforms are built first for scientific workflow and collaboration, so the GxP-compliant configuration takes deliberate attention to access controls, locking of signed records, and audit settings. A common gap is calculation integrity: if the ELN runs embedded calculations or pulls in spreadsheet logic, that logic is a configured object that needs verification, the same way a standalone spreadsheet would under [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation).

**Acceptance criteria:** Signed records lock and cannot be silently edited after signature. Witnessing, where used, is a true second-person review and not a rubber stamp. Embedded formulas are tested with known inputs and expected outputs. Records export to PDF or another readable format with the audit trail intact, so a record survives the platform.

**Common systems (neutral examples):** Benchling, Dotmatics, IDBS E-WorkBook, LabArchives, Revvity Signals Notebook.

**Common mistakes:** Treating the ELN as a research tool exempt from GxP when its data later supports a regulatory submission. Embedded calculation templates that were never verified. No record locking, so a signed page can be edited.

---

## Manufacturing Execution System (MES)

**What it does:** The MES manages and records the manufacturing process in real time. An electronic batch record in the MES guides operators through each step of the procedure, captures electronic signatures at critical steps, records process parameters, and flags deviations when parameters fall out of range. The completed electronic batch record replaces or supplements the paper batch manufacturing record.

**Key data generated:** Electronic batch records, process parameter logs, in-process test results, operator electronic signatures, deviation flags, material consumption and batch genealogy records.

**Primary users:** Manufacturing operators, manufacturing management, QA for batch release review.

**Validation scope:** An MES is typically a highly configured Category 4 or custom Category 5 system, and one of the most complex in the facility. Electronic signature compliance under 21 CFR Part 11 is non-negotiable, and the signature manifestation must show the printed name, date, time, and meaning of each signature. The electronic batch record workflow must enforce the intended sequence of operations so an operator cannot skip or backfill a step. Process parameter alarms and any limit overrides must be captured with prior values in the audit trail. Because the MES sits between control systems below and the quality system above, its interfaces are a major part of validation effort. The detailed integrity expectations are covered in [MES, EBR, and SCADA data integrity](/articles/mes-ebr-scada-data-integrity) and [GxP manufacturing systems](/articles/gxp-manufacturing-systems).

**The signature manifestation, concretely:** Part 11 §11.50 requires every signed electronic record to display the signer's printed name, the date and time of signing, and the meaning of the signature (such as review, approval, responsibility, or authorship). A correct MES signature line looks like this:

> Approved by: Maria Chen, 18-Jul-2025 14:32 EDT, Meaning: Verified addition of Buffer A per step 7.

A signature that shows only a user ID and a timestamp, with no printed name and no meaning, is a finding. Recipe steps are built on the ISA-88 batch model; see [ISA-88 batch control and recipes](/articles/isa-88-batch-control-recipes).

**Acceptance criteria:** Step sequencing is enforced, tested by attempting to skip and to backfill a step and confirming the system blocks it. Every critical-step signature shows name, date, time, and meaning. Parameter overrides are captured with old and new values and a reason. Batch genealogy ties finished lot to every component lot. Interface tests confirm data passes correctly to and from the historian, LIMS, and ERP.

**Common systems (neutral examples):** Rockwell PharmaSuite, Werum PAS-X, Körber Werum, Apprentice, Tulip; deviation handoff often goes to a separate quality system such as TrackWise.

**Common mistakes:** Workflow that allows backfilling a missed signature after the fact. Overrides recorded without a reason. Interface failures that silently drop or duplicate records between MES and ERP.

---

## Process Analytical Technology (PAT) and Data Historians

**What it does:** Process historians capture time-series data from manufacturing equipment: temperature, pressure, pH, dissolved oxygen, agitation speed, flow rates. In bioreactor-based manufacturing, a historian can record thousands of data points per batch, building the continuous process record that demonstrates the batch ran within validated parameters. The same pattern appears in synthesis, fill and finish, and utility systems. PAT extends this idea toward real-time measurement and control of quality attributes during the process itself, an approach the FDA encouraged in its 2004 guidance "PAT, A Framework for Innovative Pharmaceutical Development, Manufacturing, and Quality Assurance."

**Key data generated:** Continuous time-series records of critical and non-critical process parameters for every batch, plus the configuration that defines tags, sampling rates, and data compression.

**Primary users:** Process development, manufacturing, QA for batch review.

**Validation scope:** Historians are usually fed by SCADA or distributed control systems, so the integrity requirements apply at several layers: the sensor and PLC level, the control and historian level, and the reporting layer. Two issues recur. First, many historians compress data to save storage, and aggressive compression can discard meaningful detail, so the compression settings are a validated configuration, not an IT convenience. Second, audit trails for tag and configuration changes are often weak in process systems and need deliberate remediation. Time synchronization across these layers also matters, because a contemporaneous record with the wrong clock is not really contemporaneous.

**Worked example of why compression is a validated setting:** A bioreactor temperature tag samples every second. A swinging-door compression algorithm set to a 0.5 degree deviation band may store only one point every several minutes when the temperature is stable. If a brief 2 degree excursion lasted 20 seconds, a coarse band can swallow it entirely, and your continuous record now shows a flat line over a real deviation. That is why the compression band is reviewed against the criticality of the parameter and locked under change control. The deeper treatment is in [process historian data integrity](/articles/process-historian-data-integrity).

**Acceptance criteria:** Tag configuration and compression settings documented and change-controlled. Clocks across PLC, historian, and reporting layer synchronized to one trusted source. Critical-parameter trends reproduce a known excursion rather than smoothing it away. Time stamps survive review against [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).

**Common systems (neutral examples):** AVEVA PI (formerly OSIsoft PI), AspenTech InfoPlus.21, GE Proficy Historian.

---

## SCADA and Distributed Control Systems (DCS)

**What it does:** SCADA (Supervisory Control and Data Acquisition) and DCS systems control automated manufacturing processes. They read data from field instruments, compare it to setpoints, and send control signals to actuators such as valves, pumps, and agitators. In pharmaceutical manufacturing they run fermentation, purification, environmental systems, utilities, and fill and finish operations. The same control layer runs device assembly lines and packaging.

**Key data generated:** Real-time and historical process control data, alarm and event records, operator change and setpoint records.

**Primary users:** Process operators, automation engineers, manufacturing, QA for batch review.

**GxP consideration:** These systems are often engineered for process reliability and efficiency rather than GxP record-keeping, and it shows. Their audit trails frequently do not capture prior values, do not maintain individual user attribution for setpoint changes (shared operator consoles are common), and can be hard to export in a readable form. The agency has cited control-system data integrity gaps in drug manufacturing contexts. Changes to PLC programs and SCADA setpoint tables are configuration changes that must go through validated [change control](/articles/change-control-validated-systems), and the validation approach for the whole layer is laid out in [automation validation for PLC, SCADA, and DCS](/articles/automation-validation-plc-scada-dcs).

**How attribution gets fixed on a shared console:** The common real-world problem is one operator account left logged in at a station all shift, so every setpoint change is attributed to a generic "operator1." The fix is either individual login at the point of action, or a separate access-control layer that requires the operator to authenticate before a GxP-relevant change is committed, even if the console session is shared. The fundamentals are in [PLC, DCS, and HMI fundamentals](/articles/plc-dcs-hmi-fundamentals).

**Acceptance criteria:** Setpoint and recipe changes attributed to a named individual with old and new values. Alarm and event records complete and exportable. PLC and SCADA configuration under change control with version identification.

---

## Enterprise Resource Planning (ERP) and its GxP intersections

**What it does:** ERP systems manage business processes including purchasing, inventory, order management, and finance. Common platforms are SAP, Oracle, and Microsoft Dynamics. In pharmaceutical operations, ERP touches GxP mainly through inventory management: lot tracking, expiry management, quarantine and release status, and batch genealogy. Serialization and track-and-trace functions under the U.S. Drug Supply Chain Security Act (DSCSA, 2013) often live here too.

**GxP consideration:** You almost never validate the entire ERP. You validate the slices of it that drive GxP decisions, such as material status flags, batch disposition data, and expiry logic, plus the interfaces that move that data to and from validated systems like the LIMS and MES. A status field that wrongly flips a quarantined lot to "available" is a patient-safety event, so the controls around that field, and the interface that populates it, are where the validation effort concentrates. Scoping this well is an exercise in risk assessment; see [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology).

**How to scope a partial ERP validation:**

1. List the GxP-relevant transactions: goods receipt with quarantine status, status change to released, status change to rejected, expiry calculation, recall hold.
2. Trace where each status is set. Is it manual, an interface from LIMS, or a workflow rule?
3. Validate those transactions and the interfaces feeding them. Leave finance, HR, and procurement reporting out of GxP scope unless they touch a GxP decision.
4. Confirm a quarantined lot cannot be consumed or shipped, by testing the block, not assuming it.

**Acceptance criteria:** A quarantined or rejected lot is provably blocked from shipment and consumption. Expiry logic produces the correct date on test cases including edge cases like retest-date materials. Interfaces from LIMS and MES move status correctly and fail safe (a failed interface holds the lot rather than releasing it). DSCSA serialization data is complete and exchangeable; see [DSCSA serialization and track and trace](/articles/dscsa-serialization-track-and-trace) and [supply chain data integrity](/articles/supply-chain-data-integrity).

**Common systems (neutral examples):** SAP, Oracle, Microsoft Dynamics.

---

## Clinical Trial Management System (CTMS)

**What it does:** The CTMS manages the operational side of running clinical trials: site selection and activation, enrollment tracking, visit scheduling, monitoring visit reports, protocol deviation logging, and study team coordination. In clinical operations it is the logistics backbone of a study.

**Key data generated:** Site activation records, enrollment and visit milestones, monitoring visit reports, protocol deviation logs, study team and delegation records.

**Primary users:** Clinical operations, clinical monitors (CRAs), study managers, clinical QA.

**GxP regulation:** A CTMS sits under Good Clinical Practice, principally ICH E6(R2) "Good Clinical Practice" (2016), rather than GMP. The data integrity principles are the same, but the regulatory framework and inspection focus differ. The revised ICH E6(R3) GCP guideline, which the ICH adopted in early 2025, sharpens expectations around computerized systems and risk-based oversight in trials, so CTMS and related clinical platforms are getting more attention, not less. See [ICH E6 Good Clinical Practice](/articles/ich-e6-good-clinical-practice).

**Validation scope:** Focus on the records that feed oversight and inspection: deviation logging completeness, monitoring report integrity, access control by role and study, and the audit trail on those records. The CTMS is rarely the regulatory source for participant data (that is the EDC), so its validation centers on operational integrity and traceability rather than primary clinical data.

**Acceptance criteria:** Deviation log captures every logged deviation with attribution and timestamp, with no silent deletion. Access is restricted by study and role. Monitoring reports lock after sign-off.

**Common systems (neutral examples):** Veeva Vault CTMS, Oracle Siebel CTMS, Medidata, IQVIA platforms.

For the broader clinical picture, see [clinical systems and GCP digital quality](/articles/clinical-systems-gcp-digital-quality) and [clinical QA and GCP data integrity](/articles/clinical-qa-gcp-data-integrity).

---

## Electronic Data Capture (EDC) and the eCRF

**What it does:** EDC systems capture clinical trial data from study sites. Investigators and coordinators enter participant data into electronic case report forms through the EDC, which runs edit checks at the point of entry, records timestamps and user IDs, manages queries, and maintains a full audit trail of every entry, correction, and resolution.

**Key data generated:** eCRF entries, edit-check flags, data queries and their resolutions, electronic signatures, and a full change audit trail. The EDC database is the structured clinical dataset that feeds the statistical analysis and the submission.

**Primary users:** Site investigators and coordinators, clinical data managers, monitors, biostatisticians.

**GxP regulation:** Good Clinical Practice. EDC data integrity has long been a focus of FDA review during marketing applications, and the agency's expectations for electronic source data are described in its 2013 guidance "Electronic Source Data in Clinical Investigations." A recurring inspection theme is whether the source is the EDC entry itself or a separate paper or device record, and whether the path from true source to database is documented and controlled. See [source data and source data verification](/articles/source-data-and-sdv-clinical).

**The source question, made concrete:** If a site nurse measures blood pressure, writes it on paper, then types it into the EDC the next day, the paper is the source and the EDC is a transcription, so the paper must be retained and the transcription controlled. If the nurse types directly into the EDC at the point of measurement and there is no paper, the EDC entry is the source. A data management plan must declare which is which, field by field, before the trial opens. Getting this wrong is one of the most common GCP computerized-system findings. Related: [clinical data management and CDISC](/articles/clinical-data-management-cdisc), [econsent and decentralized trials](/articles/econsent-and-decentralized-trials), and [electronic trial master file](/articles/etmf-trial-master-file).

**Acceptance criteria:** Edit checks fire correctly on out-of-range and missing values. Every change carries user, timestamp, old value, new value, and reason. The query lifecycle from raise to resolution is fully traceable. The database lock process is controlled, with no edits after lock without a documented, approved database unlock.

**Common systems (neutral examples):** Medidata Rave EDC, Oracle Clinical One, Veeva Vault EDC, Castor, REDCap (academic, with limited use in regulated submissions).

---

## Quality Management System (eQMS)

**What it does:** The eQMS is the electronic platform that runs the quality system itself: document control, deviations, CAPA, change control, training records, audits, supplier management, and complaints. A well-configured eQMS links these processes, so a deviation can generate a CAPA, an approved CAPA can trigger an SOP revision, and a new SOP version can issue training assignments to affected staff automatically. In a device organization the same platform runs the QMS expected by 21 CFR Part 820 and the new QMSR; see [medical device quality system QMSR](/articles/medical-device-quality-system-qmsr).

**Key data generated:** Controlled documents and their version history, deviation records, CAPA records, change-control records, training completions, audit findings, complaint records, supplier qualification status.

**Primary users:** QA, document control, all functions that raise or own quality records, and management for [management review under ICH Q10](/articles/management-review-q10).

**Validation scope:** The eQMS is a validated system, and because it holds the records that prove the quality system works, its audit trail and record-locking controls carry particular weight. It must prevent unauthorized modification of closed quality records, enforce approval workflows, and keep signatures bound to the records they apply to. Workflow configuration is the heart of the validation effort, since most of the risk lives in how the system routes, locks, and escalates records rather than in the underlying platform code. The processes it automates are described in [deviation management](/articles/deviation-management), [what is a CAPA](/articles/what-is-a-capa), [document control fundamentals](/articles/document-control-fundamentals), and the wider [pharmaceutical quality system](/articles/pharmaceutical-quality-system).

**Acceptance criteria:** Closed records lock and cannot be edited. Approval workflows enforce the intended approver roles and sequence. Overdue records escalate. Training assignments trigger on document effective dates and block effective use until trained where required. Reports used for [quality metrics and KPIs](/articles/quality-metrics-and-kpis) reconcile to the underlying records.

**Common mistakes:** Workflow that lets a record reach "closed" without the required approvals. Reporting that miscounts open versus closed records, which then misleads management review. Effective dates that do not drive training, so people work to an old SOP.

**Common systems (neutral examples):** Veeva Vault QMS, MasterControl, TrackWise, ETQ Reliance, AssurX.

---

## Laboratory automation and robotics

**What it does:** Automated liquid handlers, high-throughput screening platforms, and robotic sample processors take over repetitive laboratory tasks. Automated cell culture and processing platforms are now common in biologics and advanced therapy manufacturing, and automated dispensing is routine across many modalities.

**Key data generated:** Run logs, method execution records, instrument-generated results, interruption and error events, and the audit trail of who started and modified each run.

**Primary users:** QC and development laboratory staff, automation engineers, manufacturing science.

**Validation considerations:** These are software-driven systems, so they get validated like other software, but with extra dimensions. Installation qualification covers both hardware and software, because mechanical setup affects results. Method transfer matters: the automated method has to demonstrate equivalence to the manual method it replaces, which overlaps with [analytical method transfer](/articles/analytical-method-transfer). System suitability checks run before each batch of work, and the audit trail for an automated run must capture who started it, any interruptions, and any deviations the system detected mid-run.

**Acceptance criteria:** Documented equivalence between automated and manual method on the same samples. IQ covering mechanical setup and calibration of the liquid-handling components. Run-level audit trail capturing start, operator, interruptions, and detected errors. System suitability gating each run.

For advanced-therapy specifics where these platforms are most prevalent, see [cell and gene therapy data integrity](/articles/cell-gene-therapy-data-integrity) and the related [data integrity in gene therapy](/articles/data-integrity-in-gene-therapy).

---

## Spreadsheets, scripts, and low-code: the systems that hide

The most cited "systems" in some inspections are not platforms at all. They are spreadsheets that calculate a result, a script that transforms data, or a low-code app someone built to fill a gap. They drive GxP decisions yet often escape the validation program because nobody calls them systems.

The rule from the five questions still applies. If a spreadsheet calculates a release result, it is a Category 5 custom system with a small footprint, and its formulas, cell protection, and version control must be qualified. Treat them under [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation), [validating scripts and low-code analytics](/articles/validating-scripts-low-code-analytics), and [validating RPA automation](/articles/validating-rpa-automation). The common finding is a result-calculating spreadsheet with no formula verification, no cell locking, and a different version on every analyst's desktop.

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
| Spreadsheet / script | GMP / GLP / GCP | 5 | Formula verification, cell locking, version control |

The GAMP 5 software categories referenced in that table are worth memorizing for any validation interview: Category 1 is infrastructure software (operating systems, databases as platforms), Category 3 is non-configured off-the-shelf products used as supplied, Category 4 is configured products, and Category 5 is custom or bespoke software. GAMP dropped the old Category 2 (firmware) in the first edition revision, so do not cite it as current. The framework is detailed in [the GAMP 5 CSV framework](/articles/gamp5-csv-framework).

The two regulations that cut across nearly every row are 21 CFR Part 11 (electronic records and electronic signatures) in the United States and EU Annex 11 (computerised systems) in Europe. Wherever a system holds an electronic record used for a GxP decision, or captures an electronic signature, these apply.

---

## Roles and responsibilities across the system environment

A computerized system has more owners than people expect, and an inspector will ask who does what. The clean way to describe it:

| Role | What they own | Typical title |
|---|---|---|
| Process owner | The business process the system supports, and the requirements | Lab, manufacturing, or clinical operations manager |
| System owner | The system's validated state, change control, and periodic review | Often the same as process owner, or a dedicated owner |
| Quality assurance | Approval of validation deliverables, audit trail review oversight, release of the system for GxP use | QA / Computer System Validation lead |
| IT / system administrator | Infrastructure, backup, access provisioning, patching | IT or automation engineering |
| Validation lead | Authoring and executing the validation, traceability | CSV engineer |
| End users | Correct use, contemporaneous and attributable entries | Analysts, operators, coordinators |

The separation that matters most: the person who administers user accounts should not also be a routine user who could grant themselves rights and cover the change. And QA must be independent of the people who build and run the system. Roles are covered more fully in [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) and [data governance roles and careers](/articles/data-governance-roles-and-careers).

---

## Common inspection findings, across all categories

These patterns repeat regardless of system type, and recognizing them is half the job:

- **Shared or generic logins**, so changes cannot be attributed to a person. This breaks the "attributable" in ALCOA+ at the root.
- **Audit trail disabled or never reviewed.** Having an audit trail no one looks at is not a control; the [operationalizing audit trail review](/articles/operationalizing-audit-trail-review) discipline is what inspectors test.
- **Configuration not under change control**, so limits, recipes, or workflows drift without review.
- **No periodic review**, so a system validated at go-live silently decays as patches, users, and configurations change over years. See [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review).
- **Backup that was never test-restored.** A backup you have never restored is a hope, not a control. See [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation).
- **System time not controlled**, so timestamps cannot be trusted as contemporaneous.
- **Legacy systems with no validation evidence**, addressed through [retroactive validation of legacy systems](/articles/retroactive-validation-legacy-systems).

The pattern-spotting skill behind these is in [FDA warning letters patterns](/articles/fda-warning-letters-patterns) and the [CSV/CSA audit checklist](/articles/csv-csa-audit-checklist).

---

## Building the right validation strategy across systems

Not every system needs the same treatment, and trying to validate them all to the same depth wastes effort that should go to the systems that actually carry risk. GAMP 5 Second Edition (ISPE, 2022) and the FDA's "Computer Software Assurance for Production and Quality System Software," issued as a draft in 2022 and finalized in 2025, both push the same point: scale the effort to the risk. Three factors drive the call.

1. **Business and patient-safety criticality.** Does the system directly affect product quality, patient safety, or the integrity of GxP records? A LIMS does. An internal HR system does not. The criticality of the function, not the price of the software, sets the floor for rigor.
2. **System complexity and novelty.** Is this an off-the-shelf product used as configured, or a heavily configured or custom system doing something with little prior precedent? More configuration and more novelty mean more to verify and more that can go wrong.
3. **Existing evidence and supplier maturity.** Does the vendor run a credible quality system with documented testing you can review and rely on? Relying on supplier evidence, backed by a real [supplier and vendor qualification](/articles/supplier-vendor-qualification), can replace large amounts of duplicated testing. Cloud and software-as-a-service systems lean heavily on this, which is why [cloud and SaaS validation](/articles/cloud-saas-validation) treats vendor assessment as a core deliverable.

Combine these and the strategy writes itself. A standard LIMS from a mature vendor, used with default configuration for a well-understood function, earns a lighter, assurance-focused approach with critical thinking applied to the high-risk functions. A custom MES running a novel manufacturing process with no regulatory precedent earns a deeper, document-everything approach. The frameworks for doing this consistently are in [the GAMP 5 CSV framework](/articles/gamp5-csv-framework) and [computer software assurance](/articles/computer-software-assurance-fda).

The CSA shift is worth understanding because interviewers ask about it. Computer Software Assurance reframes the question from "have you documented every test" to "have you put critical thinking where the risk is and unscripted or exploratory testing where it adds more value than another screenshot." It does not lower the bar for high-risk functions. It moves effort off low-risk functions that traditional CSV over-documented. The companion practice is [software supplier assessment under CSA](/articles/software-supplier-assessment-csa).

Two cross-cutting disciplines apply to every system regardless of category. The first is data governance: someone has to own the policies, the periodic reviews, and the audit trail review cadence that keep these systems trustworthy over years, not just at go-live. See [data governance framework](/articles/data-governance-framework) and [DI program architecture](/articles/di-program-architecture). The second is the system's whole life: how it is patched, how it stays in a validated state through change, how it is backed up and recovered, and how its records stay readable when it is finally retired. Those topics live in [change control for validated systems](/articles/change-control-validated-systems), [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation), and [data migration validation](/articles/data-migration-validation).

---

## Interview questions on this topic, and how to answer them

These come up in validation, QA, and data integrity interviews. Short, concrete answers win.

**"A computerized system lands on your desk. How do you decide how much to validate it?"**
Run the five questions: what GxP decision does its output drive, where is the original record, who can change the data and is every change captured, how are signatures handled, and what happens on failure or retirement. Then risk-assess the functions and scale the effort to criticality, complexity, and supplier maturity. Cite GAMP 5 Second Edition and the CSA guidance finalized in 2025.

**"Why is the CDS the most scrutinized system in the lab?"**
Because it owns the raw chromatographic data behind release decisions, and its default configuration often does not capture old and new values for integration changes, and it allows reprocessing and deletion. The classic findings are shared logins, unreviewed trial injections, testing into compliance, and audit trails switched off. The fix is unique accounts, restricted reprocess and delete rights, forced audit trail, and a defined integration-trail review step.

**"What does GAMP Category 4 versus 5 mean, and give an example of each?"**
Category 4 is a configured off-the-shelf product, such as a LIMS or eQMS configured to your processes. Category 5 is custom or bespoke software, such as a custom MES module or a result-calculating spreadsheet. Note that Category 2 (firmware) no longer exists in current GAMP.

**"When does 21 CFR Part 11 apply?"**
When a record required by a predicate rule is created, modified, maintained, archived, retrieved, or transmitted electronically, or when an electronic signature is applied to a regulated record. Without a predicate-rule requirement behind it, the record is outside Part 11 scope.

**"How do you handle a shared operator console where setpoint changes all come from one generic account?"**
That breaks attribution. The fix is individual authentication at the point of a GxP-relevant change, even if the console session is shared, plus an audit trail that records the named individual with old and new values for every setpoint change.

**"What is the difference between source data in an EDC and a transcription?"**
If data is captured directly into the EDC at the point of observation with no prior record, the EDC entry is the source. If it is written somewhere first and typed in later, that first record is the source and must be retained and controlled. The data management plan must declare which is which, field by field, before the trial opens.

**"Name three findings you would expect to see across these systems."**
Shared logins that break attribution, audit trails that exist but are never reviewed, and backups that have never been test-restored. Each maps to a specific ALCOA+ principle and a specific control.

For a fuller bank of questions and a study plan, see [GxP quality interview preparation](/articles/gxp-quality-interview-preparation) and, if you are entering the field, [breaking into GxP quality](/articles/breaking-into-gxp-quality) and [career guide GxP validation](/articles/career-guide-gxp-validation).

---

## Practical tips

- Build a system inventory before anything else. You cannot govern what you have not listed. Every GxP system, its owner, its category, its validation status, and its records.
- Walk the data, not the org chart. Follow a release result from the instrument through the CDS, into the LIMS, into the disposition, into ERP. The seams between systems are where integrity breaks.
- Audit trail review is a job, not a checkbox. Decide what gets reviewed, how often, and by whom, and make it risk-based so the CDS and MES get more attention than the meeting scheduler.
- Treat spreadsheets and scripts as systems. They are the ones that hide, and they calculate release results.
- Keep the configuration under change control from day one. Most decay happens through small, unreviewed config changes, not through code defects.

Understanding the system environment is the first step, and it is a real step, not a formality. Knowing what each system does, what records it owns, and how it tends to fail gives you the foundation to build a coherent validation program across all of them, and to walk an inspector through it without surprises. From here, the natural next reads are [GxP computerized systems operations](/articles/gxp-computerized-systems-operations) for the day-to-day running of these systems, and the [GxP CSV data integrity glossary](/articles/gxp-csv-data-integrity-glossary) when an acronym still trips you up.
