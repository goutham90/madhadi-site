---
title: "Clinical Data Management: EDC Build, Edit Checks, Database Lock, and CDISC Standards"
description: "A working guide to clinical data management for GxP quality professionals: CRF design, EDC build and validation, edit checks, query management, UAT, database lock, and the CDISC SDTM/ADaM/Define-XML standards that feed a regulatory submission."
pubDate: 2026-06-20
tags: ["clinical-data-management", "edc", "cdisc", "sdtm", "gcp", "data-integrity", "database-lock", "edit-checks"]
pillar: "clinical-gcp"
tier: "Intermediate"
---

Clinical data management (CDM) is the discipline that turns what a site records about a patient into a clean, traceable, analysis-ready dataset that can survive a regulatory inspection. It sits between the protocol and the statistical analysis, and most of the data integrity findings in a clinical trial trace back to decisions made here: how the case report form was designed, how edit checks were built and validated, how queries were resolved, and how the database was locked. Get those right and the biostatistician analyzes the trial that was actually run. Get them wrong and you spend the submission defending why the numbers in Table 14.2.1 do not match the source.

This article walks the full lifecycle: CRF and EDC design, edit-check specification and validation, user acceptance testing, query management, the database lock sequence, and the CDISC standards (SDTM, ADaM, Define-XML, controlled terminology) that the FDA and PMDA now require for most submissions. It is written for quality and validation people who need to assess, audit, or run a CDM operation, not just describe it.

---

## The regulatory frame: why CDM is a GxP activity

Clinical data management is governed primarily by Good Clinical Practice. The controlling document is **ICH E6(R2) Good Clinical Practice (2016)**, now being superseded in practice by **ICH E6(R3) (finalized 2025)**, which restructures GCP around a quality-by-design and risk-proportionate model and puts far more weight on data governance, computerized systems, and the sponsor's oversight of data flow.

Three threads from ICH E6 land directly on CDM:

- **Data integrity and the source.** E6 requires that data reported in the case report form be consistent with the source documents, or that any discrepancy be explained. The sponsor must implement quality management, including risk-based monitoring, to assure this.
- **Computerized systems.** E6(R2) section 5.5.3 sets the expectations for electronic data handling systems: validation against requirements, SOPs, controlled access, audit trails, backup, and the ability to identify data changes without obscuring the original entry. E6(R3) keeps and strengthens these.
- **Essential records.** The data and the system that holds it are part of the records that must be retained and available for inspection.

On top of GCP sit the electronic records rules. In the United States, **21 CFR Part 11 (Electronic Records; Electronic Signatures, 1997)** applies to the EDC system and any other computerized system that creates, modifies, or stores records submitted to the FDA. In the EU, the analogous expectations live in **EudraLex Volume 4, Annex 11 (Computerised Systems)**. For data submitted to the FDA in support of a new drug or biologic application, the **FDA Study Data Technical Conformance Guide** and the FDA's **Data Standards Catalog** make CDISC formats mandatory for studies started after the relevant cutoff dates.

So a CDM operation is simultaneously a GCP activity (the trial), a Part 11 / Annex 11 activity (the system), and a data-standards activity (the submission). All three have to be satisfied at once, which is what makes the discipline harder than it looks.

> ICH E6(R2) 5.5.3: "When using electronic trial data handling and/or remote electronic trial data systems, the sponsor should: (a) Ensure and document that the electronic data processing system(s) conforms to the sponsor's established requirements for completeness, accuracy, reliability, and consistent intended performance (i.e., validation)."

Related reading: [ICH E6 Good Clinical Practice](/articles/ich-e6-good-clinical-practice), [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11), [Clinical QA and GCP Data Integrity](/articles/clinical-qa-gcp-data-integrity).

---

## The CDM lifecycle at a glance

A useful mental model is a pipeline with gates. Each stage has a deliverable, a validation step, and an owner.

| Stage | Primary deliverable | Validation / control | Typical owner |
|---|---|---|---|
| Protocol finalization | Approved protocol, SAP shell | Cross-functional review | Clinical, Biostatistics |
| Data requirements | CRF Completion Guidelines, annotated CRF | Review against protocol | CDM Lead, SME |
| EDC build | Configured study database | Build verification | EDC Programmer |
| Edit-check spec and build | Edit Check Specification, programmed checks | UAT | CDM, Programmer |
| User acceptance testing | Executed UAT scripts, defect log | Test evidence | CDM, QA |
| Go-live / first patient | Production database | Release checklist | CDM Lead |
| Conduct | Clean data, resolved queries | Data review, RBM | CRA, Data Manager |
| SDTM/ADaM mapping | Submission datasets, Define-XML | Validation (Pinnacle 21) | Statistical Programming |
| Database lock | Locked database, lock memo | Lock checklist sign-off | CDM Lead, QA, Biostat |

Hold this table in your head and the rest of the article is the detail behind each row.

---

## Case report form (CRF) design

### What it is and why it is required

The case report form is the structured instrument that captures, per the protocol, the data on each subject. ICH E6 defines it as a printed, optical, or electronic document designed to record all protocol-required information to be reported to the sponsor on each trial subject. It is required because the protocol's objectives are only measurable if the right variables are collected at the right visits in the right format. A bad CRF cannot be fixed downstream: you cannot query data that was never collected, and you cannot un-collect data the protocol did not authorize you to gather.

### What goes in it

A CRF is organized by **forms** (also called pages or eCRFs) mapped onto a **visit schedule** (the schedule of activities, sometimes called the schedule of assessments). Typical forms include:

- Demographics, medical history, inclusion/exclusion criteria.
- Vital signs, physical exam, ECG, laboratory results.
- Study drug administration / exposure, dosing.
- Concomitant medications, prior medications.
- Adverse events, serious adverse events.
- Efficacy assessments specific to the indication.
- Disposition, end of study, death.

Each field has metadata behind it: variable name, data type (text, integer, float, date, code list), units, format, required/optional, and a controlled code list where applicable. The pairing of the CRF with the protocol's schedule of activities produces the **visit-by-form matrix** that defines when each form is expected.

### How to do it: the design sequence

1. **Extract the data requirements from the protocol.** Read the objectives, endpoints, and schedule of activities. Every endpoint must trace to one or more CRF fields. This traceability is the same discipline as a requirements trace matrix in computer system validation. See [User Requirements and Traceability](/articles/user-requirements-and-traceability).
2. **Decide what NOT to collect.** The most common CRF mistake is collecting data the protocol does not need, which then has to be cleaned, queried, and explained. If a field does not map to an endpoint, a safety requirement, or a regulatory obligation, challenge it.
3. **Standardize early.** Use a CDISC-aware library so that fields map cleanly to SDTM later. Designing the CRF with the SDTM target in mind (a practice called "annotating to SDTM up front") saves enormous rework. The **CDISC CDASH (Clinical Data Acquisition Standards Harmonization)** standard exists precisely for this: it defines standard collection fields that flow into SDTM.
4. **Draft the CRF Completion Guidelines (CCG).** This is the site-facing instruction document: how to enter each field, what "not done" versus blank means, date conventions, partial dates, units.
5. **Produce the annotated CRF (aCRF).** A PDF of the blank CRF with every field annotated with its SDTM variable and dataset (for example, `VSORRES` in the `VS` domain). The aCRF is a required submission artifact.
6. **Review and approve.** Cross-functional review by clinical, biostatistics, safety, and data management, with formal sign-off.

### Acceptance criteria

- Every protocol endpoint and safety requirement traces to a CRF field (full forward and backward traceability).
- No orphan fields that do not map to a requirement.
- Each field has data type, format, units, and code list defined.
- The aCRF annotates every collected field to its SDTM target.
- The visit-form matrix matches the protocol schedule of activities exactly.
- CRF Completion Guidelines exist and are consistent with the form.

### Worked example: a vital signs form

| Field label | Variable | Type | Units | Code list | Required |
|---|---|---|---|---|---|
| Assessment date | VSDAT | date (DD-MMM-YYYY) | - | - | Yes |
| Assessment time | VSTIM | time (HH:MM) | - | - | If protocol-timed |
| Position | VSPOS | code | - | SUPINE, SITTING, STANDING | Yes |
| Systolic BP | SYSBP | integer | mmHg | - | Yes |
| Diastolic BP | DIABP | integer | mmHg | - | Yes |
| Pulse | PULSE | integer | beats/min | - | Yes |
| Not done | VSSTAT | code | - | DONE, NOT DONE | Yes |

The `VSSTAT` "not done" flag matters: without an explicit not-done capture, a blank field is ambiguous (was it not measured, or just not entered?), and that ambiguity becomes a wave of queries during conduct.

---

## EDC build and configuration

### What it is and why it is required

Electronic Data Capture (EDC) is the validated computerized system that hosts the eCRF, stores entered data, runs edit checks, tracks queries, and maintains the audit trail. Common commercial categories include dedicated EDC platforms and integrated clinical data management suites. Under 21 CFR Part 11 and Annex 11, the EDC is a computerized system that must be validated for its intended use, with controlled access, an audit trail, and the ability to produce accurate copies for inspection.

The EDC platform itself is usually validated by the vendor and the sponsor (or CRO) at the platform level. What the study team does is **configure a study** on that validated platform. The study build is therefore treated as configuration, but the configured study still needs verification because the configuration is where your specific logic, code lists, and edit checks live.

### What goes in the build

- The forms, fields, and visit structure from the CRF design.
- Code lists / dictionaries (including links to MedDRA for adverse events and WHODrug for medications).
- Derived fields and calculations (for example, BMI from height and weight, study day).
- Edit checks (covered in the next section).
- Roles and permissions (investigator, CRA, data manager, read-only monitor).
- The audit trail configuration (it should be on and uneditable by users).
- Randomization / IWRS integration if applicable, and external data feeds (central lab, ePRO, imaging).

### How to do it

1. **Write the build specification.** This is the requirements document for the configured study: forms, fields, visit matrix, derivations, integrations. It should reference the approved CRF and annotated CRF.
2. **Configure in a non-production (test/UAT) environment.** Never build directly in production.
3. **Build verification by the programmer.** A first-pass check that what was configured matches the spec (field types, code lists, required flags, visit structure).
4. **Configure roles and the audit trail**, confirming the audit trail captures who, what, when, and old-to-new value, and cannot be disabled by study users.
5. **Hand to UAT** (next section). Do not skip from build verification to go-live.

### Acceptance criteria

- The configured study matches the build specification field for field.
- Code lists match the approved CRF and the dictionaries.
- Derivations compute correctly across boundary cases.
- Audit trail is on, complete, and uneditable.
- Roles enforce least privilege.
- A documented, version-controlled migration path exists from UAT to production (no manual re-keying of config).

### Roles

The **EDC Programmer / Database Builder** configures. The **CDM Lead** owns the specification and accepts the build. **QA** confirms the validation evidence exists and is GxP-compliant. The **EDC vendor** owns platform-level validation and provides the validation summary the sponsor relies on (vendor qualification is itself a controlled activity, see [Supplier and Vendor Qualification](/articles/supplier-vendor-qualification) and [Software Supplier Assessment](/articles/software-supplier-assessment-csa)).

For the broader system-validation methodology behind all of this, see [GAMP 5 CSV Framework](/articles/gamp5-csv-framework), [Computer Software Assurance (FDA)](/articles/computer-software-assurance-fda), and [Cloud and SaaS Validation](/articles/cloud-saas-validation) (most EDC is delivered as SaaS).

---

## Edit checks: specification and build

### What they are and why they are required

Edit checks are automated rules that flag data that is missing, out of range, internally inconsistent, or implausible, either at the moment of entry (online/firing checks) or in batch. They are the first line of data cleaning and they reduce reliance on manual review. They are not a regulatory requirement by name, but they are how a sponsor operationalizes the GCP obligation to assure data accuracy and consistency, and the absence of basic checks is a common inspection observation.

### Types of edit check

| Type | What it catches | Example |
|---|---|---|
| Missing/required | Blank required field | Systolic BP blank when VSSTAT = DONE |
| Range | Value outside plausible limits | Pulse = 350 beats/min |
| Format/valid value | Wrong type or off the code list | Position = "lying" (not in code list) |
| Cross-field consistency | Two fields that contradict | AE start date before informed consent date |
| Cross-form consistency | Two forms that contradict | Death recorded on AE form but disposition = completed |
| Cross-visit / longitudinal | Implausible change over time | Weight drops 40 kg between two visits |
| Protocol logic | Violation of protocol rules | Dose above protocol maximum |
| Date logic | Impossible chronology | End date before start date |

### How to do it: the Edit Check Specification

1. **Write an Edit Check Specification (ECS)** as a table: check ID, form/field(s), check logic in plain language, query text the site sees, severity (hard stop versus soft warning versus query), and firing condition.
2. **Classify severity.** A *hard* check blocks save (use sparingly, mostly for format). A *query-generating* check raises a query for the site to answer. A *soft warning* informs but does not require resolution. Over-using hard stops frustrates sites and pushes them to enter placeholder values, which is worse than a query.
3. **Decide online versus batch.** Single-form checks usually fire online. Cross-form and external-data checks often run in batch because the comparator data may not exist yet at entry time.
4. **Program the checks** in the EDC's rules engine.
5. **Generate test cases** for every check: at least one case that should fire and one that should not (positive and negative), plus boundary values for range checks.

### Acceptance criteria

- Every check in the ECS is programmed and traceable to a check ID.
- Each check has a documented positive and negative test result.
- Range boundaries fire correctly at the edge (for example, a check defined as ">200" does not fire at exactly 200 but fires at 201).
- Query text is clear, specific, and does not lead the site to a particular answer.
- No check generates so many false positives that sites ignore them (tuned during UAT and early conduct).

### Worked example: an edit check spec row

| Check ID | Form | Fields | Logic | Severity | Query text |
|---|---|---|---|---|---|
| VS001 | Vital Signs | SYSBP, DIABP | If SYSBP <= DIABP | Query | "Systolic BP is not greater than diastolic BP. Please verify and correct." |
| VS002 | Vital Signs | PULSE | If PULSE < 30 or PULSE > 200 | Query | "Pulse value is outside the expected range (30-200). Please verify." |
| AE003 | Adverse Events, Informed Consent | AESTDAT, ICDAT | If AESTDAT < ICDAT | Query | "Adverse event start date is before informed consent date. Please verify dates." |

Test evidence for VS002 would record three executions: PULSE = 29 (fires), PULSE = 30 (does not fire, boundary), PULSE = 201 (fires).

A real inspection-finding pattern here: edit checks that were specified but never actually programmed, or programmed differently from the spec, with no UAT evidence reconciling the two. The spec says the check exists; the database does not enforce it; the discrepancy is invisible until an auditor traces a sample.

---

## User acceptance testing (UAT)

### What it is and why it is required

UAT is the formal, documented testing of the configured study (forms, derivations, edit checks, integrations, roles) against its requirements, performed before the database goes live. Under Part 11 / Annex 11 and ICH E6 5.5.3, the system must be validated against the sponsor's requirements; UAT is the part of that validation specific to the study configuration. It is the gate that catches build errors while they are still cheap to fix.

### What goes in it

- A **UAT plan** stating scope, environment, roles, entry/exit criteria, and the requirements being tested.
- **Test scripts / test cases** with pre-conditions, steps, expected results, and space for actual results and pass/fail.
- A **defect / issue log** with severity, status, and resolution.
- **Executed evidence**: signed scripts, screenshots where needed, and a record of who tested what and when.
- A **UAT summary report** with the defect disposition and a release recommendation.

### How to do it

1. **Trace test cases to requirements.** Every form, every derivation, every edit check, every role permission, and every integration should have at least one test case. The traceability matrix (requirement to test case to result) is the artifact an auditor will ask for.
2. **Test as the real users.** Have a clinical data manager and ideally a CRA or clinical lead execute scripts, not only the programmer who built it (independence reduces blind spots).
3. **Execute positive and negative paths.** Confirm valid data saves and invalid data fires the right check.
4. **Log every defect**, assign severity, fix in the test environment, and re-test (do not just fix and assume).
5. **Manage retest of changed items.** A fix to one edit check can break another; regression-test affected areas.
6. **Hold an exit review.** Open critical/major defects must be closed or risk-assessed and accepted before go-live.

### Acceptance criteria

- 100 percent of in-scope requirements have an executed test case.
- All test cases passed, or open defects are documented with severity and a risk-based disposition signed by CDM and QA.
- No open critical or major defects at go-live (minor/cosmetic may be deferred with rationale).
- A signed UAT summary recommends release.
- Test evidence is contemporaneous, attributable, and retained.

For the test-execution and failure-handling discipline that applies here, see [Writing Validation Protocols and Reports](/articles/writing-validation-protocols-and-reports) and [Validation Test Failure Management](/articles/validation-test-failure-management).

### Roles

CDM Lead owns the UAT plan and acceptance. Testers (data managers, CRA, clinical) execute. The EDC programmer fixes defects but should not be the sole tester. QA reviews the evidence and the release decision. The interview-favorite point: the person who built the configuration should not be the only person who tests it.

---

## Query management

### What it is and why it is required

A query is a documented question to the site about a data point that an edit check or a manual reviewer flagged as missing, inconsistent, or implausible. Query management is how discrepancies get resolved and documented so the final data is defensible. ICH E6 requires that corrections to a CRF be dated, initialed, explained if necessary, and that the original entry not be obscured; the EDC audit trail plus the query record is how this is achieved electronically. A clean, well-documented query history is one of the most-examined things in a GCP inspection of data flow.

### What goes in it

- Query ID, the data point, the query text, the date raised, who raised it (system auto-query or data manager manual query).
- The site response, the resolving action (data changed, confirmed as correct, marked not applicable), the date, and the responder.
- The audit trail link showing the data change, if any, with old and new value.
- Query status (open, answered, closed, re-queried) and aging.

### How to do it

1. **Auto-queries** fire from edit checks at or after entry. **Manual queries** are raised by data managers during data review or by CRAs during monitoring (including source data verification).
2. **Route the query to the site** for response. The site either corrects the data (which the audit trail captures) or provides a justification.
3. **Review the response.** If it resolves the issue, close the query. If not, re-query.
4. **Track aging.** Old open queries are a red flag; report query metrics (open count, median age, queries per CRF page) as a data-quality KPI. See [Quality Metrics and KPIs](/articles/quality-metrics-and-kpis).
5. **Never bulk-close queries to hit a lock date** without genuine resolution. That is both a data integrity failure and an obvious inspection target.

### Acceptance criteria

- Every flagged discrepancy has a query with a documented resolution.
- Data changes driven by queries are reflected in the audit trail with attributable old/new values.
- No queries are closed without a response or a documented justification.
- At lock, the open-query count is zero for critical variables (and managed/justified for the rest).

### Worked example: a query lifecycle

| Event | Actor | Record |
|---|---|---|
| VS001 fires (SYSBP 80, DIABP 120) | System | Query VS001-0042 opened, "Systolic not greater than diastolic, verify." |
| Site reviews source | Site coordinator | Source shows transposition; SYSBP corrected to 120, DIABP to 80 |
| Data change | EDC audit trail | SYSBP 80 -> 120, DIABP 120 -> 80, user, timestamp |
| Query closed | Data manager | "Values corrected per source, transposition confirmed." Query closed. |

The audit trail entry is what proves the original was not obscured. The query text plus the response is what proves the correction was justified, not invented.

---

## Source data, SDV, and risk-based monitoring (the boundary CDM shares)

CDM does not own the source, but it lives next to it. **Source data** is the original record (the patient chart, the lab printout, the device output). **Source data verification (SDV)** is the monitor's comparison of CRF entries against source. Modern trials use **risk-based monitoring (RBM)** under **ICH E6(R2)/(R3)** and **FDA's guidance on a risk-based approach to monitoring (2013, updated 2019)**, targeting verification at critical data and high-risk sites instead of 100 percent SDV. CDM contributes the edit checks, the central statistical monitoring signals, and the query stream that RBM relies on. For depth, see [Source Data and SDV in Clinical Trials](/articles/source-data-and-sdv-clinical) and [Risk-Based Monitoring in Clinical](/articles/risk-based-monitoring-clinical).

The integrity expectation across this boundary is **ALCOA+**: data should be Attributable, Legible, Contemporaneous, Original, Accurate, plus Complete, Consistent, Enduring, and Available. See [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and [Data Integrity Foundations](/articles/data-integrity-foundations).

---

## CDISC standards: SDTM, ADaM, Define-XML, controlled terminology

### Why CDISC is required

CDISC (Clinical Data Interchange Standards Consortium) standards are not optional for most regulated submissions. The **FDA Study Data Technical Conformance Guide** and the FDA Data Standards Catalog require standardized study data in CDISC formats for studies whose start dates fall after the FDA's published cutoff dates (the requirement was phased in following the 2014 binding guidance on electronic submission of study data). Japan's PMDA has a parallel requirement. The rationale is reviewability: a reviewer who receives standardized SDTM and ADaM can load, check, and re-analyze any sponsor's data with the same tools, instead of learning a bespoke structure per submission.

The standards form a chain:

**Collection (CDASH) -> Tabulation (SDTM) -> Analysis (ADaM) -> Documentation (Define-XML), all governed by Controlled Terminology.**

### SDTM (Study Data Tabulation Model)

SDTM organizes collected data into standardized **domains**, each a dataset with a two-letter code, grouped into observation classes:

- **Interventions**: what was given. Examples: `EX` (exposure), `CM` (concomitant medications), `EC` (exposure as collected).
- **Events**: what happened. Examples: `AE` (adverse events), `MH` (medical history), `DS` (disposition).
- **Findings**: what was measured. Examples: `VS` (vital signs), `LB` (laboratory), `EG` (ECG), `QS` (questionnaires).
- **Special-purpose**: `DM` (demographics), `CO` (comments), `SE` (subject elements), `SV` (subject visits).
- **Trial design**: `TA`, `TE`, `TS`, `TV`, `TI` and related, which describe the planned trial.
- **Relationship datasets**: `RELREC`, `SUPPQUAL` (supplemental qualifiers for non-standard variables).

Every domain follows the model's variable roles: **identifier** variables (`STUDYID`, `USUBJID`, `DOMAIN`, `--SEQ`), **topic** variables (the `--TESTCD` or `--TRT`), **timing** variables (`--DTC`, `--DY`, `VISIT`, `VISITNUM`), and **qualifier** variables (`--ORRES`, `--STRESC`, `--STRESN`, units, flags). The `--` is replaced by the domain prefix (so vital signs result is `VSORRES`, the original result, and `VSSTRESN`, the standardized numeric result).

A worked SDTM `VS` snippet:

| STUDYID | USUBJID | DOMAIN | VSSEQ | VSTESTCD | VSTEST | VSORRES | VSORRESU | VSSTRESN | VSSTRESU | VISIT | VSDTC |
|---|---|---|---|---|---|---|---|---|---|---|---|
| ABC-001 | ABC-001-0102 | VS | 1 | SYSBP | Systolic Blood Pressure | 120 | mmHg | 120 | mmHg | WEEK 2 | 2026-03-14 |
| ABC-001 | ABC-001-0102 | VS | 2 | DIABP | Diastolic Blood Pressure | 80 | mmHg | 80 | mmHg | WEEK 2 | 2026-03-14 |

Note `--ORRES` (as collected) versus `--STRESN`/`--STRESU` (standardized): SDTM keeps both so the original is never lost and the standardized value is analysis-ready. The current SDTM Implementation Guide (SDTMIG) version in use should match the FDA Data Standards Catalog supported versions; always check the catalog rather than assume.

### ADaM (Analysis Data Model)

ADaM datasets are derived from SDTM and built **for analysis**. The defining ADaM principle is that the datasets must support **traceability**: a reviewer must be able to trace any analysis result back through the ADaM dataset to the SDTM source, and the derivations must be transparent. Two core structures:

- **ADSL (Subject-Level Analysis Dataset)**: one record per subject, with treatment assignments, population flags (`SAFFL`, `ITTFL`, `RANDFL`), demographics, and key dates. ADSL is required in every CDISC submission and is the backbone every other ADaM dataset merges against.
- **BDS (Basic Data Structure)**: one record per subject per parameter per analysis timepoint, the workhorse for findings-type analysis (labs, vitals, efficacy scores), with variables like `PARAM`, `PARAMCD`, `AVAL`, `AVALC`, `BASE`, `CHG`, `ABLFL` (baseline flag), `ANL01FL` (analysis flag).
- **OCCDS (Occurrence Data Structure)**: for events like adverse events.

ADaM adds analysis-specific derivations (change from baseline, last-observation-carried-forward where the SAP calls for it, analysis visit windows) and the flags that define which records feed which table. The statistical analysis plan (SAP) drives what ADaM must contain.

### Define-XML and the reviewer's guide

**Define-XML** is the machine-readable metadata document (the "define file") that describes the submitted datasets: every dataset, every variable, its origin (collected, derived, assigned), its controlled terminology, and the derivation logic for ADaM. It is required by the FDA for SDTM and ADaM submissions. Alongside it, sponsors provide a **Study Data Reviewer's Guide (SDRG)** and **Analysis Data Reviewer's Guide (ADRG)**, human-readable companions that explain the trial's quirks, any conformance deviations, and how to navigate the data. The annotated CRF (aCRF) is part of this documentation set, linking collected fields to SDTM variables.

### Controlled terminology

CDISC **Controlled Terminology (CT)**, published quarterly by NCI EVS, standardizes coded values (for example, the allowed `VSTESTCD` values, units, severity terms). Adverse events and medical history are coded with **MedDRA**; medications with **WHODrug**. Using the wrong CT version, or free-text where a code list exists, is a frequent conformance failure.

### How to do it: the mapping workflow

1. **Map collected (CDASH/raw) data to SDTM** per the SDTMIG and the project's mapping specification.
2. **Validate SDTM** with a conformance checker. The de facto industry tool is **Pinnacle 21** (Community or Enterprise), which runs the FDA and CDISC validation rules and produces a findings report.
3. **Derive ADaM from SDTM**, building ADSL first, then BDS/OCCDS datasets per the SAP. Maintain traceability variables.
4. **Validate ADaM** (Pinnacle 21 again, plus independent double-programming of key outputs where the SAP requires it).
5. **Generate Define-XML** and the reviewer's guides.
6. **Reconcile** SDTM-to-ADaM and ADaM-to-TLF (tables, listings, figures) so the submission is internally consistent.

### Acceptance criteria

- SDTM conforms to the SDTMIG and passes Pinnacle 21 with no unexplained errors (any remaining findings explained in the SDRG).
- ADaM is fully traceable to SDTM and supports every analysis in the SAP.
- ADSL exists and every population flag is correct.
- Define-XML validates and describes every dataset and variable, with origins and derivations.
- Controlled Terminology and dictionary versions match the FDA Data Standards Catalog.
- The aCRF, SDRG, and ADRG are present and consistent with the data.

For where these datasets sit in a marketing application, see [BLA Readiness Data Package](/articles/bla-readiness-data-package), [eCTD Submission Architecture](/articles/ectd-submission-architecture), and [IND, NDA, and BLA Pathways](/articles/ind-nda-bla-pathways).

---

## Database lock

### What it is and why it is required

Database lock (DBL) is the controlled point at which the clinical database is frozen so that no further changes can be made without a formal, documented unlock. It is required so that the dataset analyzed by biostatistics is fixed, traceable, and identical to what is reported in the clinical study report and the submission. An uncontrolled or sloppy lock undermines the integrity of every downstream number.

### What goes in the lock package

- A **database lock checklist** confirming every pre-lock condition is met.
- Evidence of **all queries resolved** (or remaining ones formally accepted with rationale).
- **SDV / monitoring complete** to the planned extent for critical data.
- **Coding complete and reconciled** (MedDRA, WHODrug medical/coding review signed off).
- **External data reconciled** (central lab, ePRO, IWRS, SAE reconciliation between safety database and EDC).
- **Protocol deviations reviewed and classified.**
- **Data review / data validation complete**, including the data management review of listings.
- **Sign-offs**: CDM Lead, Biostatistics, Medical/Clinical, and often QA.
- A **lock memo** recording the date, the version, who locked it, and that the checklist was satisfied.

### How to do it: the lock sequence

1. **Declare a soft lock (or freeze)** when data is believed clean: data entry is restricted, but the team can still resolve final issues. Some operations use a "freeze" status on clean CRFs.
2. **Run the final pre-lock checks**: outstanding queries, missing pages report, expected-versus-received forms, coding status, external reconciliation status.
3. **Complete the SAE reconciliation** between the safety (pharmacovigilance) database and the clinical database; discrepancies in serious events are a high-attention inspection item. See [Pharmacovigilance and Safety Data Integrity](/articles/pharmacovigilance-safety-data-integrity).
4. **Obtain functional sign-offs** on the lock checklist.
5. **Apply the hard lock**: revoke edit permissions in the EDC, snapshot/export the locked database, and record the lock in the audit trail and the lock memo.
6. **Generate the final extract** for SDTM/ADaM and statistical analysis.

### Unlock control

If an error is found after lock, the database is **unlocked under formal change control**: a documented request, an impact assessment, defined scope (only the specific records), re-lock, and a record of exactly what changed and why. Uncontrolled or undocumented unlocks are a serious finding. The same change-control discipline used for validated systems applies, see [Change Control for Validated Systems](/articles/change-control-validated-systems) and [Deviation Management](/articles/deviation-management).

### Acceptance criteria

- All critical-variable queries closed; remaining queries formally dispositioned.
- All external data reconciled, SAE reconciliation complete and signed.
- Coding complete and medically reviewed.
- Lock checklist fully signed by the defined functions.
- Write access removed in production; a locked snapshot exists.
- A lock memo records date, version, scope, and approvers.
- Any post-lock change is governed by a documented unlock/re-lock.

### Worked example: a database lock checklist (excerpt)

| Item | Status | Owner | Evidence |
|---|---|---|---|
| All CRF pages entered (expected vs received = 0 missing) | Complete | CDM | Missing-pages report 14-MAR |
| All queries closed (critical variables) | Complete | CDM | Open-query report = 0 |
| Medical coding complete and reviewed | Complete | Coder / Medical | Coding sign-off |
| Central lab data reconciled | Complete | CDM | Recon report, 0 unresolved |
| SAE reconciliation complete | Complete | CDM / PV | Recon memo signed |
| Protocol deviations classified | Complete | Clinical | Deviation log v3 |
| Lock approvals obtained | Complete | CDM, Biostat, Medical, QA | Signed lock memo |

---

## Roles and responsibilities across the lifecycle

| Function | Core responsibilities |
|---|---|
| **CDM Lead / Data Manager** | Owns the data management plan, CRF design input, edit-check spec, UAT acceptance, query oversight, reconciliation, and database lock. |
| **EDC Programmer / Database Builder** | Configures the study, programs edit checks and derivations, fixes UAT defects, runs migrations to production. |
| **Clinical / Medical** | Defines data needs from the protocol, reviews safety data, signs off coding and lock. |
| **Biostatistics / Statistical Programming** | Owns the SAP, the ADaM specs, double-programming, and the lock from the analysis side; builds SDTM/ADaM and Define-XML in many orgs. |
| **CRA / Clinical Monitor** | Performs SDV / RBM, raises and resolves site-level queries. |
| **Pharmacovigilance** | Owns the safety database and the SAE reconciliation. |
| **QA / GCP Quality** | Audits the process and the system, confirms validation evidence, may sign the lock. |
| **EDC / dictionary vendors** | Platform validation, MedDRA/WHODrug licensing and updates; qualified as suppliers. |

A recurring theme: in a CRO-sponsor model, these roles split across organizations, and the data management plan plus the quality/oversight agreement must state exactly who does what. The sponsor retains accountability for oversight under ICH E6 even when execution is outsourced. See [CDMO Oversight and Quality Agreements](/articles/cdmo-oversight-quality-agreements) (the same oversight logic applies to clinical service providers).

---

## Common mistakes and real inspection-finding patterns

These are the patterns that recur in GCP inspections and audits of data flow. None name a company; all are generic and well documented in regulatory observations.

- **Edit checks specified but not implemented**, or implemented differently from the spec, with no UAT evidence reconciling the two. The data was never actually protected by the rule everyone assumed existed.
- **No or incomplete UAT.** Going live on a configured study without documented acceptance testing against requirements. The system was changed (configured) without validation evidence, a direct Part 11 / Annex 11 and E6 5.5.3 gap.
- **Audit trail off, incomplete, or reviewable only on request and never actually reviewed.** Regulators expect audit trails to exist, capture old-and-new values, and be reviewed risk-based, not just be technically present. See [Audit Trail Design and Review](/articles/audit-trail-design-and-review) and [Operationalizing Audit Trail Review](/articles/operationalizing-audit-trail-review).
- **Queries bulk-closed to hit a lock date** without genuine site response, or data changed without an audit-trail-backed justification. This reads as data manipulation.
- **Source-to-CRF discrepancies** found in inspection that were never queried, because monitoring or central review missed them. The CRF reports something the source does not support.
- **SAE reconciliation gaps**: serious events in the clinical database not matching the safety database, or vice versa, at lock.
- **Uncontrolled database unlock** after lock, with changes not scoped, not justified, or not re-locked under change control.
- **CDISC conformance failures**: free text where controlled terminology is required, wrong dictionary or CT version, missing or invalid Define-XML, ADaM that is not traceable to SDTM. These delay submissions and trigger reviewer information requests.
- **Inadequate vendor oversight**: relying on an EDC or coding vendor without a qualification record or a current validation summary.
- **Partial dates and "not done" handled inconsistently**, producing systematic query noise and ambiguous data that complicates SDTM mapping.

---

## Interview-ready questions and how to answer them

**Walk me through the clinical data lifecycle from protocol to lock.**
Protocol and SAP define requirements; CRF and annotated CRF capture them with SDTM in mind; the EDC is configured and the build is verified; edit checks are specified and programmed; UAT validates the configuration against requirements; go-live; during conduct, edit checks and reviewers raise queries that the sites resolve with audit-trailed corrections; SDV/RBM verifies critical data; data is mapped to SDTM and ADaM with Define-XML; everything is reconciled and queries closed; the database is locked under a signed checklist; biostatistics analyzes the locked extract.

**What is the difference between SDTM and ADaM?**
SDTM is standardized tabulation, organized as it was observed, one structure per domain, keeping both original and standardized values. ADaM is derived from SDTM specifically for analysis, adds analysis flags and derivations driven by the SAP, and must be traceable back to SDTM so a reviewer can reproduce any result. ADSL is the required subject-level ADaM backbone.

**Why does the FDA require CDISC?**
Reviewability and consistency. Standardized data lets reviewers use the same validation and analysis tools across all sponsors, per the FDA Study Data Technical Conformance Guide and the Data Standards Catalog, mandatory for studies after the published cutoff dates.

**What is in a database lock checklist and why does each item matter?**
All pages entered, all critical queries closed, coding complete and reviewed, external data and SAE reconciliation complete, deviations classified, and functional sign-offs. Each item closes a route by which a wrong number could reach the analysis. The lock fixes the dataset so the CSR and submission are reproducible.

**How do you handle a change after database lock?**
Formal unlock under change control: documented request, impact assessment, tightly scoped change to specific records only, audit trail of exactly what changed and why, re-lock, and a record in the lock documentation. Never an ad hoc edit.

**What are edit checks and when do you use a hard stop versus a query?**
Automated data-validation rules for missing, out-of-range, inconsistent, or implausible data. Hard stops are reserved mostly for format/required errors because over-using them pushes sites to enter placeholder data; most consistency issues should raise a query so the site can review the source and respond, with the audit trail capturing any correction.

**How does Part 11 apply to an EDC?**
The EDC creates and stores records submitted to the FDA, so it must be validated for intended use, enforce controlled access and least privilege, keep a secure computer-generated audit trail that records old and new values without obscuring originals, support electronic signatures where used, and produce accurate copies for inspection.

**What does ALCOA+ mean for clinical data and where does it get tested?**
Attributable, Legible, Contemporaneous, Original, Accurate, plus Complete, Consistent, Enduring, Available. It is tested most sharply at the source-to-CRF boundary, in the audit trail, and in how corrections (queries) are documented.

**You find an edit check in production that never fires. What do you do?**
Treat it as a deviation: assess data impact across all subjects (was bad data accepted?), raise queries to clean any affected records, correct the check under change control, re-test, and document the whole thing. The failure of the control, not just the bad data, is the issue.

---

## Practical tips

- **Design the CRF to its SDTM target from day one.** Annotating to SDTM up front turns mapping into a translation instead of a rescue.
- **Keep edit checks proportionate.** A flood of low-value auto-queries trains sites to ignore them; tune in early conduct using query metrics.
- **Validate SDTM and ADaM continuously, not at the end.** Run the conformance checker during development so findings are cheap to fix.
- **Reconcile early and often.** SAE reconciliation and external-data reconciliation should not first happen the week of lock.
- **Treat the audit trail as evidence, not a feature.** Confirm it is on, complete, and actually reviewed risk-based.
- **Document the CRO-sponsor split explicitly** in the data management plan and quality agreement; oversight gaps are where outsourced trials fail inspection.
- **Never move a lock date by closing queries you have not genuinely resolved.** A clean lock a week late beats a contaminated lock on time.

---

## Related articles

- [ICH E6 Good Clinical Practice](/articles/ich-e6-good-clinical-practice)
- [Clinical QA and GCP Data Integrity](/articles/clinical-qa-gcp-data-integrity)
- [Clinical Systems and GCP Digital Quality](/articles/clinical-systems-gcp-digital-quality)
- [Source Data and SDV in Clinical Trials](/articles/source-data-and-sdv-clinical)
- [Risk-Based Monitoring in Clinical](/articles/risk-based-monitoring-clinical)
- [eTMF Trial Master File](/articles/etmf-trial-master-file)
- [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11)
- [GAMP 5 CSV Framework](/articles/gamp5-csv-framework)
- [Audit Trail Design and Review](/articles/audit-trail-design-and-review)
- [ALCOA+ in detail](/articles/alcoa-plus-deep-dive)
- [BLA Readiness Data Package](/articles/bla-readiness-data-package)
- [GCP Audits and Inspections](/articles/gcp-audits-and-inspections)
