---
title: "The GxP, CSV, and Data Integrity Glossary: Every Acronym Decoded"
description: "A working glossary of the GxP, computer system validation, and data integrity terms you need to do the job and pass the interview, with the regulatory basis and a plain definition for each."
pubDate: 2026-06-20
tags: ["data integrity", "csv", "gxp", "glossary", "validation", "alcoa", "gamp", "interview prep"]
pillar: "data-integrity"
tier: "Beginner"
---

Every quality and validation role runs on a shared vocabulary. When an inspector asks "walk me through your URS-to-RTM traceability" or "how does your audit trail support ALCOA+", they expect you to answer in the same shorthand they used to ask. Get the terms wrong and you lose credibility in the first five minutes. Get them right and the rest of the conversation flows.

This page defines the terms that actually come up: in protocols, in audit trail reviews, in deviation meetings, in interviews. Each entry tells you what the term means, the regulation or standard behind it where one exists, and the practical reason a quality professional cares. The terms are grouped so you can study one cluster at a time, and the high-frequency ones get a worked example or a table rather than a one-line gloss.

A note on how to use it. Do not memorize definitions as flashcards. Memorize the relationships: a URS feeds a Functional Specification, which feeds Design, which gets traced in an RTM, which is verified by IQ/OQ/PQ, all governed by a Validation Plan, all underpinned by ALCOA+. When you can draw the chain, the acronyms stop being trivia and become a map of how the work fits together.

---

## How to read a regulatory citation

Before the terms, a quick orientation, because half of sounding competent is citing the right document by its real name.

- **CFR** is the US Code of Federal Regulations. GMP for drugs lives in **21 CFR Parts 210 and 211**. Electronic records and signatures live in **21 CFR Part 11**. Good Laboratory Practice lives in **21 CFR Part 58**. Medical device quality lives in **21 CFR Part 820** (being aligned to ISO 13485 under the **QMSR** rule, effective February 2026).
- **EU GMP** is published as **EudraLex Volume 4**, with topic-specific **Annexes**. Annex 11 covers computerised systems. Annex 1 covers sterile manufacturing. Annex 15 covers qualification and validation. Annex 16 covers the Qualified Person.
- **ICH** guidelines carry a letter and number: **Q** for quality (Q7, Q9, Q10), **E** for efficacy and clinical (E6 for GCP), **M** for multidisciplinary.
- **ISO** and **IEC** are international consensus standards (for example ISO 13485, ISO 14971, IEC 62304).
- **USP** chapters are cited with a number in angle brackets, for example <71> for sterility testing.
- **GAMP 5** and the **PIC/S** and **MHRA** data integrity guidances are industry or regulator guidance, not law, but inspectors treat alignment with them as the expected standard.

When you cite, name the document and the part. "Part 11" beats "the FDA electronic records rule." "Annex 11" beats "the EU computer thing."

---

## The GxP family

### GxP
The umbrella for Good "x" Practice, where x stands for the discipline. It is shorthand, not a regulation in itself. A system is "GxP" if it touches data or processes that support a regulated decision about product quality, safety, or efficacy. That GxP determination is the gate that decides whether validation, Part 11 controls, and data integrity requirements apply at all.

### GMP / cGMP
Good Manufacturing Practice. The "c" means "current," signaling that expectations evolve with technology and that meeting a decade-old interpretation is not a defense. US drug GMP is **21 CFR 210/211**; API GMP is **ICH Q7**; EU GMP is EudraLex Volume 4. Covers everything from facility design to batch release.

### GLP
Good Laboratory Practice, governing nonclinical safety studies that support regulatory submissions. US GLP is **21 CFR Part 58**. Note the trap: routine QC release testing in a manufacturing lab is GMP, not GLP. GLP applies to the toxicology and safety studies done before and during clinical development.

### GCP
Good Clinical Practice, governing the conduct of clinical trials to protect subjects and ensure credible data. The current global standard is **ICH E6(R3)**, which reached Step 4 in January 2025 and was adopted by FDA in 2025, superseding E6(R2). Its restructured format of overarching general principles plus annexes emphasizes risk-proportionate, technology-enabled trials.

### GDP
Good Distribution Practice, governing storage and transport of medicines through the supply chain so product reaches the patient with quality intact. The EU guideline is **2013/C 343/01**. Cold chain control sits here.

### GVP / GPvP
Good Pharmacovigilance Practice, governing collection and assessment of safety information after a product is on the market. The EU set is the **GVP Modules**.

### GDocP
Good Documentation Practice. The records and entries discipline (legible, contemporaneous, attributable, corrected properly) that turns abstract data integrity principles into how you actually fill in a logbook or sign a record. See [Good Documentation Practices](/articles/good-documentation-practices).

---

## Data integrity core

### Data Integrity (DI)
The degree to which data is complete, consistent, and accurate throughout its lifecycle. The working bar regulators apply is that records are trustworthy and reliable enough to base a quality decision on. It is not a single control; it is the sum of system design, procedures, and culture. Start at [Data Integrity Foundations](/articles/data-integrity-foundations).

### ALCOA
The original five attributes that define a good record: **A**ttributable, **L**egible, **C**ontemporaneous, **O**riginal, **A**ccurate. Originated in FDA thinking and now universal across guidances.

### ALCOA+
ALCOA extended with **C**omplete, **C**onsistent, **E**nduring, **A**vailable. The "+" four close common gaps (missing reanalyzed results, inconsistent timestamps, records that do not survive their retention period, archives no one can retrieve). The full nine-attribute breakdown with examples is in [ALCOA+ in detail](/articles/alcoa-plus-deep-dive).

| Attribute | One-line meaning | Typical failure |
|---|---|---|
| Attributable | You can tell who did it and when | Shared login, no audit trail |
| Legible | Readable and permanent | Pencil entry, overwritten field |
| Contemporaneous | Recorded at the time of the activity | Backdated logbook |
| Original | The first capture, or a true copy of it | Working off a transcribed value |
| Accurate | Correct, no errors, properly reviewed | Unreviewed manual integration |
| Complete | All data including repeats and reruns | Failing injection deleted |
| Consistent | Sequence and timestamps make sense | Clock not controlled |
| Enduring | Survives its retention period | Thermal paper that fades |
| Available | Retrievable when needed | Archive no one can read |

### Static vs Dynamic records
A **static** record is fixed once created (a paper printout, a PDF of a result). A **dynamic** record lets you interact with the data after capture (rechromatograph, reprocess, change integration parameters). The distinction matters because a static printout of a dynamic record is not the complete record. Inspectors specifically probe whether you retained the dynamic original. See [Static, Dynamic Records, and True Copies](/articles/static-dynamic-records-true-copies).

### True copy
A copy of original data that preserves the meaning and all metadata, verified accurate. Scanning a chromatogram to PDF without the underlying data file is generally not a true copy because you lost the dynamic content.

### Metadata
Data about data: the who, what, when, and how that gives a result context. A peak area is data; the integration parameters, instrument ID, analyst, and timestamp are metadata. Without metadata, a number is not a record. See [Data Lifecycle and Metadata](/articles/data-lifecycle-and-metadata).

### Data lifecycle
The full span from creation through processing, review, reporting, retention, and destruction. DI controls must hold at every stage, not just at capture. Defined and walked through in [Data Lifecycle and Metadata](/articles/data-lifecycle-and-metadata).

### Data criticality and data risk
A risk-based way to scale controls: the more a record drives a GMP decision and the easier it is to alter undetected, the more control it needs. Lets you spend effort where it matters instead of validating everything to the same depth. See [Data Criticality and Data Risk](/articles/data-criticality-and-data-risk).

### Audit trail
The secure, computer-generated, time-stamped electronic record of who did what to a record and when, including the original value when something is changed. Required by **Part 11** (11.10(e)) and **Annex 11** (clause 9). Two parts: it must exist (system capability) and it must be reviewed (a procedural step before you trust the data). The design considerations are in [Audit Trail Design and Review](/articles/audit-trail-design-and-review); the review routine is in [Operationalizing Audit Trail Review](/articles/operationalizing-audit-trail-review).

### Audit trail review
The act of examining audit trails for unexplained changes, deletions, aborted runs, or timestamp anomalies, performed as part of data review (often at batch or result review). A finding pattern inspectors love: a system has audit trails, but no one ever looks at them.

---

## Part 11 and Annex 11

### Part 11
**21 CFR Part 11**, the US rule on electronic records and electronic signatures, in force since 1997. It tells you when an electronic record can stand in for paper and what controls (audit trails, access security, validation, signature linkage) make that record trustworthy. The companion is [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11), with practical implementation in [Part 11 and Annex 11 Practical Guide](/articles/part-11-annex-11-practical-guide).

### Annex 11
**EU GMP Annex 11, Computerised Systems**. The EU counterpart to Part 11, broader in scope because it covers the whole system lifecycle (risk management, suppliers, validation, data, audit trails, periodic review) rather than focusing on records and signatures.

### Electronic record
Any combination of text, graphics, data, or other information in digital form that is created, modified, maintained, archived, or retrieved by a computer system, as defined in Part 11.

### Electronic signature (e-signature)
A computer compilation that an individual executes as the legally binding equivalent of a handwritten signature. Part 11 requires each signature to capture the printed name of the signer, the date and time, and the meaning (review, approval, authorship), and to be permanently linked to its record so it cannot be cut and pasted. See [Electronic Signatures Implementation](/articles/electronic-signatures-implementation).

### Open vs closed system
A **closed system** is one where access is controlled by the people responsible for the records (most validated GMP systems). An **open system** is one where access is not so controlled (data crossing the public internet to an outside party). Open systems carry extra Part 11 requirements such as encryption. The distinction drives which controls you owe.

### Hybrid system
A system where electronic records are kept but signatures or some steps stay on paper, or where paper and electronic coexist for the same process. Hybrids are high risk because the link between the paper signature and the electronic data is procedural, not technical. See [Hybrid Paper and Electronic Records](/articles/hybrid-paper-electronic-records).

---

## CSV and CSA

### CSV
Computer System Validation (also Computerized System Validation). Documented evidence that a computerized system does what it is intended to do, consistently and reliably, and that it will keep doing so. Required wherever a computerized system supports a GxP activity. The lifecycle approach is in [GAMP 5 CSV Framework](/articles/gamp5-csv-framework).

### CSA
Computer Software Assurance, the **FDA** guidance "Computer Software Assurance for Production and Quality System Software" (final 24 September 2025), which supersedes Section 6 of FDA's General Principles of Software Validation. CSA reframes the effort toward critical thinking and testing that matches risk, rather than producing documentation for its own sake. It does not replace validation; it changes where you spend the effort. See [Computer Software Assurance (FDA)](/articles/computer-software-assurance-fda) and the contrast in [CSV vs CSA Audit Checklist](/articles/csv-csa-audit-checklist).

### GAMP 5
**Good Automated Manufacturing Practice, Second Edition**, the ISPE guide that is the de facto industry method for CSV. It introduces the software category model and a risk-based, scalable V-model lifecycle. Not a regulation, but cited and expected. See [GAMP 5 CSV Framework](/articles/gamp5-csv-framework).

### GAMP software categories
GAMP 5 sorts software into numbered categories so the validation effort scales to the type of software, from underlying infrastructure (operating systems, database engines, which you qualify as a platform), through off-the-shelf products used as supplied, to configured products such as a LIMS or MES, to fully custom code. The higher categories carry more verification because more of the system was built or shaped for you, with custom builds reaching the full lifecycle including design and code review. Category 2 was dropped in the GAMP 5 model. For the full classification and worked examples, read [GAMP 5 CSV Framework](/articles/gamp5-csv-framework). The point: an off-the-shelf tool used as supplied does not need the same rigor as a custom build. Misclassifying upward wastes effort; misclassifying downward leaves risk uncovered.

### V-model
The validation lifecycle drawn as a V: requirements and specifications descend the left side (URS, FS, DS), and verification activities ascend the right side, each test level tied back to the spec it verifies (IQ to design, OQ to functional spec, PQ to user requirements). It makes traceability visual.

### Validation Plan (VP)
The document that defines scope, approach, deliverables, roles, and acceptance for a specific validation effort. It is the contract for the project. Larger than a single system, the **Validation Master Plan (VMP)** sets the site-wide strategy and inventory. See [Validation Master Plan and Periodic Review](/articles/validation-master-plan-and-periodic-review).

### GxP assessment / system classification
The upfront determination of whether a system is GxP and, if so, its risk and GAMP category. This single decision drives the entire validation depth. Documented, signed by QA, and revisited at change.

---

## Requirements and specifications

These five terms form the spine of every validation. Learn the order: a need becomes a requirement, a requirement becomes a specification, a specification becomes a test, and the trace matrix proves nothing fell out along the way.

### URS
User Requirement Specification. What the business and quality users need the system to do, written in plain, testable statements before you design or buy anything. Each requirement should be uniquely numbered, atomic, and verifiable. The URS is the anchor for PQ and the top of the traceability chain. See [User Requirements and Traceability](/articles/user-requirements-and-traceability).

**Worked example of a good vs weak requirement:**

| ID | Weak | Strong (testable) |
|---|---|---|
| URS-014 | "The system should be secure." | "The system shall lock a user account after 5 consecutive failed login attempts." |
| URS-027 | "Audit trails are needed." | "The system shall record, for every change to a GMP record, the prior value, new value, user ID, and UTC timestamp, viewable without altering the record." |

The strong versions can be passed or failed in a test. The weak ones cannot, so they will haunt you in OQ.

### FS / FRS
Functional Specification (or Functional Requirements Specification). How the system will meet each user requirement, described in terms of functions and behaviors. Written by or with the vendor or technical team. Each FS item should trace back to a URS item.

### DS / DDS
Design Specification (or Detailed Design Specification). The technical "how it is built": configuration settings, data model, interfaces, code design for custom elements. Depth scales with GAMP category; a Category 3 product may have little or no DS, a Category 5 build has a lot.

### Configuration Specification
For configured products (Category 4 such as LIMS and MES), the documented record of every configuration choice (workflows, user roles, calculations, master data). It is what you verify in OQ and restore from after disaster recovery.

### RTM / Traceability Matrix
Requirements Traceability Matrix. The table that links each requirement to its specification and to the test that verifies it, proving every requirement is covered and every test traces to a requirement. It is the single artifact inspectors use to check that nothing was dropped.

**Worked RTM snippet:**

| Req ID | Requirement (short) | Spec ref | Test ID | Result |
|---|---|---|---|---|
| URS-014 | Lock account after 5 failed logins | FS-009 | OQ-031 | Pass |
| URS-027 | Audit trail captures old/new value | FS-022 | OQ-045 | Pass |
| URS-041 | Result calc to 4 sig figs | DS-018 | OQ-052 | Pass |

An empty cell in the Test column is an uncovered requirement. A test with no Req ID is a test with no reason to exist. Both are findings. More in [User Requirements and Traceability](/articles/user-requirements-and-traceability).

---

## Qualification and testing

### Qualification
Documented evidence that equipment or a system is installed and operates correctly. For equipment it is the equivalent of validation for systems. The EU framework is **Annex 15**. The lifecycle is in [Equipment Qualification Lifecycle](/articles/equipment-qualification-lifecycle).

### DQ
Design Qualification. Documented verification that the proposed design meets the user requirements and intended use, done before purchase or build.

### IQ
Installation Qualification. Documented verification that the system or equipment is installed correctly per specification: right components, right version, right environment, utilities connected, documents in place.

### OQ
Operational Qualification. Documented verification that the system functions as intended across its operating range: each function works, alarms fire, security enforces, calculations are correct, boundary and challenge conditions behave. This is where most functional test scripts live.

### PQ
Performance Qualification. Documented verification that the system performs reliably for its intended use in the real production setting, often with real or representative data and real users. PQ traces to the URS.

### IOQ / OQ-PQ combined
Smaller or lower-risk systems often combine IQ and OQ, or OQ and PQ, into one protocol. Acceptable when justified by risk; document the rationale.

### FAT / SAT
Factory Acceptance Test and Site Acceptance Test. Vendor-side (FAT, at the vendor's facility before shipment) and customer-side (SAT, after installation) acceptance testing of equipment or systems. Well-run FAT/SAT can be reused as part of IQ/OQ to avoid duplicate testing, if the protocols and data integrity controls support it. See [Factory and Site Acceptance Testing](/articles/factory-site-acceptance-testing).

### Commissioning / C&Q / ASTM E2500
Commissioning and Qualification, the science and risk-based approach in **ASTM E2500** that uses verification activities (including good engineering practice and reused vendor testing) to qualify systems efficiently while focusing rigor on what affects product quality (critical aspects, critical design elements). See [Commissioning and Qualification (ASTM E2500)](/articles/commissioning-qualification-astm-e2500).

### Test script / test case
The step-by-step instruction with expected results and a place to record actual results, pass or fail, with evidence. Each step should be unambiguous. Good scripts predefine acceptance criteria so the tester is not deciding pass or fail on the fly.

### Deviation (test) / test incident
A documented mismatch between expected and actual results during testing. It must be investigated, assessed for impact, resolved, and closed before the validation can be summarized. See [Validation Test Failure Management](/articles/validation-test-failure-management).

### VSR
Validation Summary Report. The document that pulls together all protocol results, resolves open deviations, states whether acceptance criteria were met, and releases the system for GxP use. See [Validation Summary Report and Release](/articles/validation-summary-report-and-release).

---

## Operating the validated system

A validated system is not "done." It must be kept in a validated state. These terms govern the operational phase, which is where most inspection findings actually live.

### Change control
The formal process to assess, approve, test, and document any change to a validated system before it is made, so the change does not break the validated state. The gate question is always "what is the GxP impact and what revalidation is needed?" See [Change Control for Validated Systems](/articles/change-control-validated-systems).

### Configuration management
Knowing and controlling the exact configuration baseline of a system at any time: versions, settings, patches. You cannot assess change impact if you do not know your baseline. See [IT Change and Configuration Management (GxP)](/articles/it-change-and-configuration-management-gxp).

### Periodic review
The scheduled re-evaluation (often annual or risk-based) confirming a system is still validated, still under control, and still fit for use: open changes, incidents, access reviews, audit trail review status, patch level. Required by **Annex 11** clause 11.

### Backup and restore / disaster recovery (DR)
Backup is copying data so it can be recovered; restore is proving you can bring it back; disaster recovery is the plan to resume the whole system after a major failure. Inspectors ask for evidence of a tested restore, not just a backup schedule. See [Backup, Restore, and Disaster Recovery Validation](/articles/backup-restore-disaster-recovery-validation).

### Business continuity
The plan to keep the GxP process running (often on paper) while a system is down, so you do not lose data or batches during an outage.

### Decommissioning / data migration
Retiring a system and, where data must persist, moving it to a new system with documented evidence that completeness and meaning were preserved. Migration is itself a validated activity. See [Data Migration Validation](/articles/data-migration-validation).

### Access control / RBAC
Role-Based Access Control: granting system privileges by job role so people can only do what their role allows, and no one has rights that let them bypass controls. Segregation of duties (the person who runs a test cannot also approve its result, the admin who can delete data is not a routine analyst) is a core DI control. See [CSV Cybersecurity and Access Control](/articles/csv-cybersecurity-access-control).

### Time stamp / system clock control
Trustworthy timestamps depend on a controlled, synchronized, tamper-resistant clock (often network time, with users unable to change it). Uncontrolled clocks undermine the Contemporaneous and Consistent attributes and are a frequent finding. See [Time Stamps and System Clock Control](/articles/time-stamps-and-system-clock-control).

---

## The systems by acronym

You will hear these named constantly. Know the category and what data integrity question each one raises.

### LIMS
Laboratory Information Management System. Manages samples, tests, specifications, and results in the QC lab. Typically GAMP Category 4. DI focus: result entry controls, spec limits, audit trail on result changes. See [LIMS Implementation and Validation](/articles/lims-implementation-and-validation).

### CDS
Chromatography Data System. Acquires and processes chromatography data (HPLC, GC). The single most cited system in DI warning letters because of manual reintegration, "test injections," and disabled audit trails. DI focus: who can reprocess, audit trail on integration, no deleting failing runs. See [Chromatography Data System Integrity](/articles/chromatography-data-system-integrity).

### MES / EBR
Manufacturing Execution System and Electronic Batch Record. Runs and records production on the floor, enforcing the recipe and capturing the batch record electronically. DI focus: enforced sequencing, review by exception, e-signature at each step. See [MES, EBR, and SCADA Data Integrity](/articles/mes-ebr-scada-data-integrity).

### SCADA / DCS / PLC / HMI
**SCADA** (Supervisory Control and Data Acquisition), **DCS** (Distributed Control System), **PLC** (Programmable Logic Controller), and **HMI** (Human Machine Interface) are the layers of process automation that run and monitor equipment. DI focus: who can change setpoints, alarm handling, recipe control, data archiving. See [PLC, DCS, and HMI Fundamentals](/articles/plc-dcs-hmi-fundamentals) and [Automation Validation (PLC, SCADA, DCS)](/articles/automation-validation-plc-scada-dcs).

### Process historian
The time-series database that archives process data (temperatures, pressures, flows) from automation systems. DI focus: data completeness, no gaps, controlled access. See [Process Historian Data Integrity](/articles/process-historian-data-integrity).

### ERP
Enterprise Resource Planning. The business backbone (materials, inventory, batch genealogy, release status). GxP-relevant where it holds disposition or genealogy data.

### EDMS / DMS
Electronic Document Management System. Controls SOPs and quality documents: versioning, approval workflow, controlled distribution. See [Document Control Fundamentals](/articles/document-control-fundamentals).

### QMS (system)
Quality Management System software that runs deviations, CAPAs, change controls, and complaints as electronic workflows. Distinct from the QMS as an organizational concept (below).

### CTMS / EDC / eTMF (clinical)
Clinical Trial Management System, Electronic Data Capture, and electronic Trial Master File: the clinical-side systems for running trials, capturing subject data, and holding the trial's essential documents. See [Clinical Systems and GCP Digital Quality](/articles/clinical-systems-gcp-digital-quality) and [eTMF and the Trial Master File](/articles/etmf-trial-master-file).

---

## Quality system terms

### QMS
Quality Management System, the organizational framework of processes that ensures product quality. The pharmaceutical model is **ICH Q10**. See [Pharmaceutical Quality System](/articles/pharmaceutical-quality-system).

### PQS
Pharmaceutical Quality System, the ICH Q10 name for a GMP-specific QMS covering the product lifecycle from development through discontinuation.

### CAPA
Corrective and Preventive Action. Corrective action fixes the cause of a problem that happened; preventive action stops a potential problem before it happens. Effectiveness must be verified, not assumed. See [What Is a CAPA](/articles/what-is-a-capa) and [CAPA Effectiveness Verification](/articles/capa-effectiveness-verification).

### Deviation / nonconformance
A departure from an approved procedure, specification, or standard. Must be documented, assessed for impact, investigated to root cause when warranted, and closed with actions. See [Deviation Management](/articles/deviation-management).

### RCA
Root Cause Analysis. The structured search for the true underlying cause (not the symptom) using tools like the 5 Whys, fishbone (Ishikawa), and fault tree. Weak RCA, stopping at "human error" or "retrained the operator," is one of the most common inspection criticisms. See [Root Cause Analysis Techniques](/articles/root-cause-analysis-techniques).

### OOS / OOT
Out of Specification and Out of Trend. OOS is a result outside an established acceptance criterion; OOT is a result within spec but inconsistent with the expected pattern. OOS investigations follow a defined two-phase structure (lab assessment, then full investigation). See [OOS Investigation Process](/articles/oos-investigation-process) and [Out-of-Trend Investigations](/articles/out-of-trend-investigations).

### QRM
Quality Risk Management. The systematic process to assess, control, communicate, and review risk to quality, defined in **ICH Q9(R1)**. Tools include FMEA and risk ranking. See [Quality Risk Management](/articles/quality-risk-management).

### FMEA
Failure Mode and Effects Analysis. A risk tool that scores failure modes by severity, occurrence, and detectability to prioritize controls. The product of the three is the Risk Priority Number (RPN).

### Management review
The periodic leadership review of QMS performance and quality metrics required by **ICH Q10**. See [Management Review (Q10)](/articles/management-review-q10).

### Batch record / BMR / BPR
The complete record of a batch's manufacture: the Master record (the approved template) and the executed Batch Manufacturing/Packaging Record (the filled-in copy for one batch). Review-and-release of this record is a GMP decision. See [Batch Record Review (GMP)](/articles/batch-record-review-gmp).

### Batch disposition / QP release
The decision to release or reject a batch. In the EU, certification is made by a **Qualified Person (QP)** under **Annex 16**. See [Batch Disposition Decisions](/articles/batch-disposition-decisions) and [Qualified Person Batch Release (Annex 16)](/articles/qualified-person-batch-release-annex-16).

### COA
Certificate of Analysis. The document summarizing a batch's test results against specifications, supporting release and sent to customers. See [Certificate of Analysis](/articles/certificate-of-analysis).

### SOP
Standard Operating Procedure. The approved, controlled instruction for how to perform a task consistently. See [How to Write an SOP](/articles/how-to-write-an-sop).

---

## Process validation and lab terms

### PV / PPQ / CPV
Process Validation is the lifecycle proving a manufacturing process consistently produces conforming product. The FDA 2011 guidance defines three stages: Stage 1 process design, Stage 2 **PPQ** (Process Performance Qualification, the formal validation batches), Stage 3 **CPV** (Continued Process Verification, ongoing monitoring). See [Process Validation Lifecycle](/articles/process-validation-lifecycle), [Process Performance Qualification (PPQ)](/articles/process-performance-qualification-ppq), and [Continued Process Verification (CPV)](/articles/continued-process-verification-cpv).

### QbD / DoE / CQA / CPP
Quality by Design builds quality into the process by understanding it, using **Design of Experiments (DoE)** to map how **Critical Process Parameters (CPP)** affect **Critical Quality Attributes (CQA)** within a defined design space. The ICH basis is Q8, Q9, Q10, Q11. See [Quality by Design and DoE](/articles/quality-by-design-and-doe).

### Method validation / verification / transfer
**Validation** proves an analytical method is fit for purpose (accuracy, precision, specificity, linearity, range, and so on) per **ICH Q2(R2)**. **Verification** confirms a compendial (USP/Ph. Eur.) method works in your lab. **Transfer** moves a validated method between labs with documented equivalence. See [Method Validation Essentials](/articles/method-validation-essentials), [Compendial Method Verification](/articles/compendial-method-verification), and [Analytical Method Transfer](/articles/analytical-method-transfer).

### AIQ
Analytical Instrument Qualification, the **USP <1058>** framework that classifies instruments into Groups A, B, and C and scales the DQ/IQ/OQ/PQ effort to the group. Group A (standard apparatus and non-measuring equipment) needs only documented conformance to a specification or SOP, while Groups B and C require progressively fuller qualification, with Group C (computer-controlled systems) adding software validation. It is the link between qualifying the instrument and validating the software on it. See [Analytical Instrument Qualification](/articles/analytical-instrument-qualification).

### Cpk / control chart
**Cpk** is a process capability index measuring how well a process fits within its specification limits relative to its variation; higher is better, and values around 1.33 are a common target. Control charts (run charts with control limits) distinguish normal variation from a signal that something changed. See [Statistics in Quality (Cpk and Control Charts)](/articles/statistics-in-quality-cpk-control-charts).

### Stability / APR-PQR
**Stability** programs (**ICH Q1A-Q1F**) establish shelf life and storage. The **Annual Product Review** (US) or **Product Quality Review** (EU, Chapter 1) is the yearly look-back across a product's batches, deviations, and trends. See [Stability Programs (ICH)](/articles/stability-programs-ich) and [Annual Product Review and PQR](/articles/annual-product-review-pqr).

---

## Inspection and audit terms

### Form 483 / Warning Letter
An **FDA Form 483** is the list of inspectional observations handed over at the end of a US inspection; it is not a final agency finding. A **Warning Letter** is the more serious follow-up when responses or conditions are inadequate. Knowing the difference signals you understand the escalation ladder. See [483 and Warning Letter Response](/articles/483-warning-letter-response) and [FDA Warning Letter Patterns](/articles/fda-warning-letters-patterns).

### CAPA plan / response
The structured reply to an inspection finding, with corrections, root cause, systemic actions, and timelines. See [FDA 483 Response Strategy](/articles/fda-483-response-strategy).

### Inspection readiness
The ongoing state of being ready for an unannounced inspection: documents retrievable, SOPs current, staff trained to answer. See [FDA Inspection Readiness](/articles/fda-inspection-readiness).

### Mock inspection / gap assessment
A rehearsal inspection or a structured comparison of current state to requirements, used to find and fix gaps before a real inspector does. See [Mock Inspection Program](/articles/mock-inspection-program) and [DI Gap Assessment Methodology](/articles/di-gap-assessment-methodology).

### Supplier / vendor qualification
The assessment that a vendor (including a software supplier) is capable and reliable enough to rely on, often via a documented audit. For software it can reduce your own testing burden under GAMP. See [Supplier and Vendor Qualification](/articles/supplier-vendor-qualification) and [Software Supplier Assessment (CSA)](/articles/software-supplier-assessment-csa).

---

## A quick map of how the terms connect

If you only carry one mental model into an interview, carry this chain and be ready to narrate it:

1. You decide a system is **GxP** and assign its **GAMP** category and risk.
2. You write the **URS**, then **FS**, then **DS**, and link them in the **RTM**.
3. You verify them through **DQ, IQ, OQ, PQ**, possibly reusing **FAT/SAT** and **C&Q** under **ASTM E2500**.
4. You release with a **VSR** against the **Validation Plan**, itself under the site **VMP**.
5. You keep the system validated with **change control**, **configuration management**, **access control**, **audit trail review**, **backup/DR**, and **periodic review**.
6. Underneath all of it, every record must satisfy **ALCOA+**, supported by **Part 11** and **Annex 11** controls.

Each link in that chain is a question an interviewer can open up. When you can place any single acronym into this flow, you are not reciting definitions, you are showing you understand the system.

---

## Interview questions you should be ready for

**"What is the difference between qualification and validation?"** Qualification is documented evidence that equipment or a system is installed and operates correctly (DQ/IQ/OQ/PQ). Validation is the broader documented evidence that a process or computerized system consistently delivers its intended result. Qualification is often a building block within a validation.

**"Explain ALCOA+ and give a real failure for one attribute."** Recite the nine attributes, then make it concrete: a Contemporaneous failure is recording chromatography results into a logbook the next morning from memory; a Complete failure is deleting a failing injection and reporting only the passing rerun. The interviewer wants a real example, not the acronym.

**"What is the difference between static and dynamic records, and why does it matter?"** A static record is fixed (a PDF printout); a dynamic record can be reprocessed (a CDS data file). A printout of a dynamic record is not the complete record because you lose the ability to reintegrate and audit. Inspectors require retention of the dynamic original.

**"Walk me through CSV vs CSA."** CSV is the documented evidence a computerized system is fit for use. CSA is the FDA guidance for device production and quality system software that shifts effort toward risk-based critical thinking and testing over documentation volume. CSA does not lower the bar for high-risk functions; it stops you over-documenting low-risk ones.

**"What goes in an RTM and why do inspectors ask for it?"** It links every requirement to its specification and verifying test. Inspectors use it to confirm coverage: no requirement untested, no test untraceable. Gaps in either direction are findings.

**"A CDS audit trail shows aborted runs before a passing result. What do you do?"** Treat it as a data integrity signal. Investigate whether the aborted runs were legitimate (an instrument error, a documented trial injection per procedure) or selective reporting. Check the procedure, the rationale recorded at the time, and whether all data was reviewed. Do not assume innocence or guilt; investigate and document.

**"How do you keep a system in a validated state after go-live?"** Change control with impact assessment, configuration management of the baseline, access reviews, scheduled audit trail review, tested backup and restore, and periodic review. Validation is a state to maintain, not a one-time event.

---

## Practical tips

- When you cite a regulation in an interview or a report, name the document and the specific part. Precision reads as competence.
- Do not confuse GLP with GMP QC testing. It is a frequent trip-up. GLP is nonclinical safety studies under 21 CFR 58.
- Keep the URS testable. Most validation pain traces back to vague requirements that cannot be passed or failed.
- Audit trails are two requirements, not one: the system must capture them, and a human must review them. Inspectors check both.
- "True copy" means meaning plus metadata preserved, not just a scan.
- For deeper interview preparation across the whole quality function, work through [GxP Quality Interview Preparation](/articles/gxp-quality-interview-preparation).

---

## Related reading

- [Data Integrity Foundations](/articles/data-integrity-foundations)
- [ALCOA+ in detail](/articles/alcoa-plus-deep-dive)
- [GAMP 5 CSV Framework](/articles/gamp5-csv-framework)
- [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11)
- [User Requirements and Traceability](/articles/user-requirements-and-traceability)
- [Equipment Qualification Lifecycle](/articles/equipment-qualification-lifecycle)
- [GxP Systems Overview](/articles/gxp-systems-overview)
- [GxP Roles and Responsibilities](/articles/gxp-roles-responsibilities)
- [GxP Quality Interview Preparation](/articles/gxp-quality-interview-preparation)
- [Breaking Into GxP Quality](/articles/breaking-into-gxp-quality)
