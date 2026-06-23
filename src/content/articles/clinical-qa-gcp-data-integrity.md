---
title: "Clinical Quality Assurance: GCP Data Integrity and EDC System Validation"
description: "How clinical QA protects GCP data integrity: EDC and eTMF validation, source data verification, protocol deviation handling, risk-based monitoring, site audits, and the path from clean trial data to a defensible submission."
pubDate: 2026-05-28
tags: ["GCP", "clinical QA", "EDC", "clinical trials", "data integrity"]
tier: "Intermediate"
pillar: "data-integrity"
---

Clinical Quality Assurance is the quality function for clinical trial operations. It exists to make sure studies run according to the protocol, Good Clinical Practice, and applicable regulations, and that the data coming out of those studies is accurate, reliable, and auditable. Clinical data is the foundation of the efficacy and safety package in a marketing application. If a regulator cannot trust the data, the conclusions drawn from it collapse, and so does the submission.

The governing standard is ICH E6 Good Clinical Practice. The R2 revision was integrated in 2016 and brought GCP into the electronic age: it formalized risk-based monitoring, set explicit expectations for computerized systems, and pushed sponsors toward building a quality management system into trial conduct rather than inspecting quality in at the end. A further revision, ICH E6(R3), reached step 4 in early 2025 and restructures the guideline around overarching principles and a stronger quality-by-design posture. Most major authorities, including FDA, EMA, and PMDA, recognize ICH E6, so the same data integrity logic applies whether the study supports a US, EU, or Japanese filing. This applies across modalities: a small-molecule oral tablet, a biologic injectable, an in-vitro diagnostic, and a medical device pivotal study all generate clinical data that has to survive the same scrutiny.

If you are new to data integrity as a discipline, the [data integrity foundations](/articles/data-integrity-foundations) article covers the underlying principles that this one applies to the clinical setting. The ALCOA+ attributes referenced throughout are explained in [ALCOA+ in detail](/articles/alcoa-plus-deep-dive).

---

## What GCP Requires for Data Integrity

ICH E6(R2) section 5.5.3 sets the expectations for sponsor-controlled electronic systems. It requires standard operating procedures for those systems and, critically, audit trails that allow reconstruction of who changed what, when, and why. The same idea appears in the source data principles at section 1.51 and in the essential documents requirements at section 8. In the US, computerized clinical systems used to support a submission also fall under 21 CFR Part 11 (electronic records and signatures), and in the EU under EudraLex Volume 4 Annex 11 for any system in the regulated chain. The clinical sister to GMP's records and signatures rules is the same set of controls pointed at a different data source.

Strip away the section numbers and the requirement is the same as in pharmaceutical manufacturing, just pointed at clinical data:

- Every data point must be attributable to the person who entered or changed it.
- Data must be recorded contemporaneously, at the time of the observation, not reconstructed days later from memory.
- All changes must be tracked with the prior value, the person, the timestamp, and the reason.
- The original record must remain available and unaltered.

One thing GCP makes more explicit than GMP is the reason for change. In a clinical electronic data capture system, any edit to a previously saved value triggers a mandatory reason. That reason is captured in the audit trail and surfaced during data review. A blanket reason like "correction" applied to hundreds of fields is itself a finding, because it tells a reviewer the audit trail was treated as a checkbox rather than a record of what actually happened. For the mechanics of building and reviewing these trails, see [audit trail design and review](/articles/audit-trail-design-and-review).

### The regulatory map, in one table

It helps to hold the source documents in your head as a small map, because an inspector will move between them in a single question.

| Topic | Primary source | Where it lands in practice |
|---|---|---|
| Overall GCP conduct | ICH E6(R2) / E6(R3) | Protocol adherence, QMS, monitoring, essential documents |
| Electronic records and signatures (US) | 21 CFR Part 11 | EDC, eTMF, IRT, ePRO validation and controls |
| Electronic records (EU) | EudraLex Vol 4 Annex 11 | Same systems for EU filings |
| IND records and TMF (US) | 21 CFR 312.57, 312.62 | Sponsor and investigator recordkeeping, retention |
| Informed consent | 21 CFR 50, ICH E6 4.8 | Consent process, source for re-consent |
| IRB / ethics oversight | 21 CFR 56, ICH E6 3 | Approval records in the TMF |
| Risk-based monitoring | ICH E6(R2) 5.18.3, FDA 2013 RBM guidance | Monitoring plan, central monitoring analytics |
| Safety reporting | 21 CFR 312.32, ICH E2A | SAE and SUSAR handling, reconciliation |

---

## The Clinical Data Flow

You cannot protect data integrity if you do not know where the data is and what state it is in. Clinical data moves through a defined chain, and each handoff is a place where integrity can be lost.

**Source data.** The original record of a clinical observation. It might be a vital sign written on a paper chart at the investigator site, a value typed directly into an electronic case report form, a reading from an instrument, or a result sent from a central laboratory. Source data is the original truth against which everything else is checked. For the formal definition and the rules on what counts as source, see [source data and SDV in clinical trials](/articles/source-data-and-sdv-clinical).

**Transcription.** When a paper chart entry is typed into the EDC, the transcription has to be accurate and verifiable, and the source document has to be retained alongside the electronic record. A mismatch between source and EDC is a data integrity problem until it is explained and corrected through a documented query.

**EDC entry.** Site staff enter patient data into the eCRF. Edit checks flag implausible values and missing required fields at the point of entry. Queries are raised automatically or manually for values that need clarification.

**Data management.** The sponsor's clinical data management team runs the data against pre-defined validation specifications, raises additional queries, and works with sites to resolve discrepancies. This is where the dataset gets cleaned. The standards-based mechanics of this, including CDASH and SDTM, are covered in [clinical data management and CDISC](/articles/clinical-data-management-cdisc).

**Database lock.** Once all queries are resolved and the data management team confirms the database is clean, it is locked. After lock, no change happens without a controlled, documented reopen and re-lock, governed by a procedure and a change record. Treat an unplanned reopening of a locked database the way you would treat a deviation, because that is what it is.

**Statistical analysis.** The locked database is transferred to the statisticians, who analyze it according to the Statistical Analysis Plan. The analysis population, the endpoints, and the methods were fixed before the data was unblinded. Changing them after seeing the data is the textbook definition of a result you cannot defend. The trial-design and statistics framing sits in [ICH E8 and E9 trial design and statistics](/articles/ich-e8-e9-trial-design-statistics).

Any manipulation of clinical data between collection and analysis is a GCP violation. An unreported protocol deviation that changes how a data point should be interpreted is a violation. A failure to report an adverse event that belongs in the safety analysis is a serious one.

### A worked database-lock checklist

When people say "the database is locked," they mean a specific set of conditions were met and signed off. A typical lock gate looks like this, and an auditor will ask to see the signed checklist:

| Gate item | What "done" looks like | Who signs |
|---|---|---|
| All queries resolved or dispositioned | Open query count is zero, or each remaining one has a documented justification | Data Management lead |
| SAE reconciliation complete | Safety database and clinical database agree on every serious event | Pharmacovigilance and DM |
| Coding complete | Adverse events coded to MedDRA, drugs to WHODrug, versions recorded | Medical coder |
| Protocol deviations finalized | Deviation log closed, each classified, major ones flagged for the CSR | Clinical operations and QA |
| External data reconciled | Central lab, ECG, imaging, IRT transfers all loaded and matched | DM and vendors |
| Blinding maintained | No unblinding event affecting the analysis population | Unblinded statistician |
| Lock authorized | Lock memo signed, system access set to read-only, lock timestamp captured | DM, Biostatistics, Clinical |

Acceptance criteria for the lock: every gate item is closed with named sign-off and a date, the lock is recorded in the EDC audit trail, and write access is demonstrably removed. If the lock can be reversed without a change record, it was not a real lock.

---

## Electronic Data Capture System Validation

An EDC system is a validated computerized system under both GCP and, for studies supporting US submissions, 21 CFR Part 11. The validation burden is equivalent to a GMP computerized system: documented evidence that the system does what it is specified to do, preserves data integrity, and is controlled throughout its life. The general framework is covered in [the GAMP 5 CSV framework](/articles/gamp5-csv-framework), and the Part 11 and Annex 11 expectations are in [the Part 11 and Annex 11 practical guide](/articles/part-11-annex-11-practical-guide). The modern risk-based testing posture, where you focus effort on the features that carry patient-safety and data-integrity risk, comes from FDA's Computer Software Assurance guidance, which was a 2022 draft and was finalized in 2025. See [Computer Software Assurance](/articles/computer-software-assurance-fda) for how that reframes the test effort.

The sponsor, whether a pharmaceutical company or a contract research organization acting on its behalf, owns the validation of the EDC used in its studies. Most EDC platforms are commercial configured products, for example Medidata Rave, Oracle Clinical One, or Veeva Vault EDC. The platform vendor validates the base product. The sponsor validates the study-specific configuration, which is where most of the real risk lives.

A practical way to scope EDC validation is to separate the platform from the study build:

| Layer | Owner | What gets validated |
|---|---|---|
| Base platform | Vendor | Core engine, security model, audit trail capability, Part 11 controls |
| Platform qualification | Sponsor or CRO | Vendor assessment, infrastructure, installation, periodic review |
| Study configuration | Sponsor study team | eCRF pages, edit checks, dynamic forms, randomization, exports |
| Study acceptance | Site and data management users | End-to-end workflow, usability, query handling |

Validation activities for the study build typically cover:

*User Requirements Specification.* What the study needs from the EDC: eCRF structure, edit checks and validation rules, user roles and access, audit trail behavior, the export format the statisticians need, randomization and patient registration support, and query management. Each requirement should be testable and traceable forward to a test case. The discipline of writing these so they trace cleanly is in [user requirements and traceability](/articles/user-requirements-and-traceability).

*Configuration testing.* Every eCRF page, every edit check, every conditional display rule, every required field is tested against the specification. Risk-based testing is acceptable and expected, but the rationale for what you tested lightly versus heavily has to be written down. A skipped edit check that later lets an out-of-range lab value through is the kind of gap an inspector finds by pulling one patient's data.

*User Acceptance Testing.* The actual users, site coordinators and data managers, run the configured system. They are the best detectors of confusing form layouts, missing fields, and workflows that look fine on paper and fall apart at the bedside.

*Audit trail verification.* Confirm the trail captures initial entry with user, timestamp and value; every modification with user, timestamp, old value, new value and reason; and every query from who raised it through resolution. Verify the trail cannot be turned off or edited by an end user.

*Access control verification.* Confirm that roles enforce real restrictions. Site staff see only their own site's patients. Monitors have read access, not write access. Sponsor staff cannot edit source data. The access model is also a Part 11 control, and weak segregation is a common citation. See [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control) for how to design and test it.

### A sample validation deliverable set

For a mid-sized study build, the validation package an inspector expects to see indexed and signed typically includes:

| Deliverable | Purpose | Acceptance criterion |
|---|---|---|
| Validation plan | Scope, approach, roles, risk basis | Approved before testing starts |
| URS | Testable requirements | Each requirement uniquely numbered and traceable |
| Configuration specification | The built study definition | Matches the URS and the approved CRF |
| Risk assessment | Which features get heavy vs light testing | Rationale documented per [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology) |
| Test scripts and evidence | Proof the build works | Pass/fail recorded, screenshots dated, deviations logged |
| Traceability matrix | URS to test linkage | No requirement untested, no orphan test |
| Validation summary report | Conclusion and release statement | Signed, deviations dispositioned, system released |

A practical tip: keep the test-failure handling tight. When a script fails during UAT, the deviation, the fix, and the retest all have to be documented, not silently re-run until green. The handling pattern is in [validation test failure management](/articles/validation-test-failure-management).

### Other clinical systems that need the same rigor

EDC is not the only validated system in a trial. The same logic applies to:

- **IRT / RTSM** (interactive response technology for randomization and drug supply). A miscoded randomization list is a direct integrity and patient-safety failure.
- **ePRO / eCOA** (electronic patient-reported and clinical outcome assessment). These often capture the primary endpoint, so audit trail and timestamp integrity are central.
- **eTMF** (covered below).
- **Central lab, ECG, and imaging vendor systems**, where data transfers into the EDC must be reconciled and the transfer specification validated.
- **eConsent** platforms, where version control and the consent timestamp are the integrity-critical fields. See [eConsent and decentralized trials](/articles/econsent-and-decentralized-trials).

---

## Risk-Based Monitoring and Source Data Verification

ICH E6(R2) section 5.18.3 expects sponsors to develop a monitoring strategy based on the risks to the reliability of trial results and to participant safety, rather than verifying one hundred percent of every data point at every site by default. FDA's 2013 guidance "Oversight of Clinical Investigations, A Risk-Based Approach to Monitoring" and the 2013 EMA reflection paper on risk-based quality management in clinical trials (EMA/269011/2013) point the same direction. The full mechanics are in [risk-based monitoring in clinical trials](/articles/risk-based-monitoring-clinical).

In practice this means a sponsor defines critical data and critical processes up front. The primary endpoint, eligibility criteria, informed consent, and serious adverse events get intense scrutiny. Less critical fields get statistical and central review instead of line-by-line on-site checking. Central monitoring uses analytics to spot sites that are outliers: a site with almost no queries, a site reporting suspiciously few adverse events, a site whose data has impossibly low variability.

It is worth being precise about three terms that get used loosely:

- **SDV (source data verification)** is checking that the value in the EDC matches the source document. It catches transcription errors.
- **SDR (source data review)** is a broader look at the source for protocol compliance, consent timing, and safety signals that no edit check would catch.
- **Central monitoring** is the off-site analytics layer that decides where SDV and SDR should be focused.

Source Data Verification is one tool inside this strategy, not the whole strategy. A worked example helps. Suppose central monitoring flags a site because its query rate is one tenth of the study average and its primary efficacy values cluster tightly around the protocol target. That pattern is not proof of a problem, but it is a signal. The risk-based response is a targeted on-site visit with focused SDV on the primary endpoint and consent, not a generic full review. If the source documents support the EDC, the signal was benign. If there are no source documents behind the values, you have moved from a monitoring observation to a potential fabrication finding, and the response escalates accordingly.

### Roles in the monitoring chain

Inspectors expect clear separation here, because monitoring and QA are different functions with different independence.

| Role | Owns | Independence |
|---|---|---|
| CRA / monitor | Routine site oversight, SDV/SDR, deviation capture | Part of clinical operations |
| Central monitoring / DM analytics | Outlier detection, KRI tracking | Sponsor data function |
| Clinical QA / auditor | Independent audits of sites and processes | Independent of the study team |
| Medical monitor | Safety oversight, eligibility queries | Sponsor medical function |

---

## Protocol Deviations and Their Data Integrity Implications

A protocol deviation is any departure from the procedures specified in the protocol. They range from minor, a visit conducted a day outside the window, to major, an excluded patient enrolled anyway.

From a data integrity standpoint, deviations have to be identified, reported, documented, and assessed for their impact on the data. A deviation that touches the primary endpoint measurement has to be disclosed in the clinical study report and may change which patients land in the analysis population.

The integrity failure mode is not the deviation itself. Deviations happen in every trial. The failure is when deviations are:

- Not recognized, because site staff do not understand them as deviations.
- Recognized but not reported to the sponsor.
- Reported but not reflected in the data, so the dataset reads as though the protocol was followed perfectly.

Monitoring and auditing address all three. Monitors compare source against EDC and against the protocol, interview site staff, and assess whether what the site actually does matches what the protocol requires. The discipline of categorizing and trending deviations is closely related to [deviation management](/articles/deviation-management) on the manufacturing side, and a serious or systemic deviation pattern should feed a [CAPA](/articles/what-is-a-capa).

### A worked classification example

Consistent classification is what makes deviation data usable. Here is a sample log applying a typical severity scheme:

| # | Deviation | Classification | Data impact | Action |
|---|---|---|---|---|
| 1 | Week-8 visit done 3 days outside window | Minor | None, assessment still valid | Document, no further action |
| 2 | Forbidden concomitant medication taken for 5 days | Major | Patient may be excluded from per-protocol set | Medical review, flag for SAP |
| 3 | Inclusion criterion (lab cutoff) misread, patient enrolled | Major to critical | Wrong analysis population if not flagged | Report, assess, disclose in CSR |
| 4 | Consent signed after first blood draw | Critical | That sample may be unusable | Report to IRB, sponsor, possible data exclusion |
| 5 | Same deviation type recurring at one site | Systemic | Reliability of the site's data | Open CAPA, consider for-cause audit |

Acceptance criteria for deviation handling: every deviation has a unique identifier, a classification with rationale, an impact assessment on the data and on patient safety, and a clear disposition. The deviation log reconciles to what is described in the clinical study report. Recurrence triggers escalation rather than a new isolated entry each time.

---

## Trial Master File Management

The Trial Master File is the complete collection of documentation that evidences how a clinical trial was conducted. For the sponsor it includes the protocol and amendments, the informed consent form and its versions, IRB or ethics committee approvals, regulatory correspondence, investigational product information, monitoring and audit reports, training records for trial personnel, and the data management trail. The dedicated treatment is in [the eTMF and trial master file](/articles/etmf-trial-master-file).

The contents are specified in 21 CFR 312.57 and 312.62 and in ICH E6(R2) section 8, with the EMA and ICH essential-documents lists providing the working inventory most sponsors index against. The file must be kept in good order throughout the trial and retained afterward for a defined period. Under FDA's regulations, investigator records are kept for two years after a marketing application is approved for the indication; or, if no application is filed or it is not approved for the indication, until two years after the investigation is discontinued and FDA is notified. The EU has its own retention expectations, and the EU Clinical Trials Regulation set a long archival period for the clinical trial master file. Confirm the longest applicable retention across every region you are filing in and apply that.

A useful concept for the TMF is the "three Cs": the file should be **complete** (every essential document present), **current** (documents filed in a timely way, not in a pre-inspection scramble), and **consistent** (the same artifact filed the same way across sites and countries). An inspector tests all three by asking for one specific document and watching how long it takes to produce.

**eTMF systems.** Electronic TMF systems are now standard, and like EDC they are validated computerized systems. The validation focus areas are:

- Upload and indexing integrity, so the document stored matches the document submitted and is filed to the correct artifact.
- Access controls over who can add, modify, supersede, and archive.
- Audit trail for document changes and version history.
- Search and retrieval that actually works at scale.
- Final archival and long-term readability, so a PDF filed today is still openable years later when an inspector asks for it.

A common and avoidable problem: an eTMF that stores documents correctly but is not consistently filed, so the system is "complete" while half the artifacts are mis-indexed or sitting in an inbox queue. When an inspector requests a specific approval letter during a review and it takes three days to locate, the inspection-readiness gap is real even if the document technically exists. The discipline behind this overlaps with [document control fundamentals](/articles/document-control-fundamentals) and [backup, restore and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation).

---

## Clinical Site Audits

Site audits are conducted by the sponsor's clinical QA function to verify that the trial is being run in compliance with the protocol and GCP. They are independent of monitoring. Monitoring is routine, risk-based operational oversight by the clinical team; auditing is an independent quality assessment by people who do not run the study day to day. The independence is the point, and it mirrors the logic of an [internal audit program](/articles/internal-audit-program). The clinical-specific audit and inspection mechanics are in [GCP audits and inspections](/articles/gcp-audits-and-inspections).

**When to audit:**

- Pre-study, before a site is activated, to confirm it has the infrastructure, qualified staff, and procedures to run the trial.
- During the study, typically for high-enrolling sites, sites with significant deviations or data quality concerns, or sites contributing heavily to the central dataset.
- For cause, when a specific signal appears: an adverse event pattern, data anomalies, or a personnel complaint.
- Pre-submission, before a BLA, NDA, MAA, or a device PMA, focused on the sites contributing the central efficacy data, because those are the sites FDA is most likely to inspect.

**What a site audit covers:**

- Investigator and staff qualifications and training.
- The consent process, specifically whether patients were properly consented before any study procedure occurred.
- Protocol adherence, including correct application of inclusion and exclusion criteria.
- Investigational product management: accountability, storage conditions, and dispensing records.
- Source document review for completeness, contemporaneity, and accuracy.
- EDC accuracy against source.
- Adverse event identification, assessment, and reporting timelines.
- Regulatory records, including IRB correspondence and IND safety reports.

A useful framing for prioritizing audit effort is to map findings against severity and the data they affect:

| Finding type | Typical severity | Data integrity impact |
|---|---|---|
| Late consent signature, procedure already done | Critical | Affected patient data may be unusable |
| Eligibility criterion misapplied, not reported | Major to critical | Wrong analysis population |
| Source value does not match EDC, no query | Major | Reliability of the data point in question |
| Visit outside window, documented | Minor | Usually none if assessed and reported |
| No source document behind an EDC value | Critical | Possible fabrication, escalate immediately |

### How to run the audit, step by step

The procedure is the same shape for a US, EU, or rest-of-world site:

1. **Plan.** Confirm scope, select the patients to review (always include the first enrolled, any screen failures, any SAE patients, and a risk-weighted sample), and notify the site.
2. **Prepare.** Read the protocol, the monitoring reports, the deviation log, and the site's metrics before you arrive. Walk in knowing the site's pattern.
3. **Open.** Hold an opening meeting, restate scope, set expectations for document access.
4. **Execute.** Trace selected patients from consent to EDC to source. Inspect the IP storage and accountability. Interview the coordinator and the investigator. Verify training and delegation logs.
5. **Classify.** Sort findings into critical, major, minor against a defined scheme. See [audit finding classification](/articles/audit-finding-classification).
6. **Close.** Hold a closing meeting, present findings verbally, agree timelines for the response.
7. **Report and follow up.** Issue the audit report, the site provides a CAPA response, and QA verifies effectiveness before closing.

Acceptance criteria for the audit: findings are evidence-based and traceable to a specific record, classification is consistent with the scheme, every critical and major finding has a CAPA with a due date, and the report is issued within the timeline your SOP commits to.

---

## Data Integrity Risks Specific to Clinical Trials

**Fabricated data.** The most serious clinical integrity failure. An investigator or staff member enters values that do not reflect real observations. It is detected through source verification that finds nothing behind the entry, statistical signatures such as too many round numbers or impossibly low variation, and direct observation that patients do not match their records. Fabrication is a primary reason FDA can disqualify an investigator and exclude their data.

**Selective reporting.** Unfavorable results underreported or misclassified, deviation data quietly dropped from the final dataset, or adverse events coded to soften apparent causality. This is why the agreement between the pre-specified SAP and the reported analysis matters so much to reviewers.

**Eligibility deviations not reported.** Enrolling patients who do not meet inclusion criteria and then not flagging it, so the analysis population is contaminated with patients who should not be in it.

**Back-dated entries.** Source documents or EDC entries created after the fact with false dates. Caught by checking source documents for contemporaneous signatures and comparing EDC entry timestamps against the documented observation dates in the audit trail.

**Shared logins and uncontrolled access.** A site where coordinators share one EDC account, or where a departed staff member's access was never revoked. This breaks attributability at the root and is one of the most common GCP data integrity citations.

**Safety reconciliation gaps.** Serious adverse events sit in the safety database but were never reconciled against the clinical database, so the two disagree at lock. This intersects with [pharmacovigilance and safety data integrity](/articles/pharmacovigilance-safety-data-integrity).

For trials in advanced modalities, integrity expectations carry extra weight given small patient numbers and complex manufacturing data; [data integrity in gene therapy](/articles/data-integrity-in-gene-therapy) covers that intersection. The broader cross-cutting clinical digital quality picture is in [clinical systems and GCP digital quality](/articles/clinical-systems-gcp-digital-quality).

---

## Connecting Clinical Data to the Submission

The clinical data package is Module 5 of the Common Technical Document. It holds the clinical study reports for every primary and supportive study. Reviewers read the data quality indicators in that module the way an auditor reads control evidence:

- Protocol deviation rates and how they were classified.
- Data query rates and patterns, including whether anything is still open.
- Adverse event reporting completeness.
- Consistency between the SAP and the analysis that was actually reported.
- Availability of EDC audit trails on request.

A submission carrying clinical data integrity problems, high rates of unresolved queries, deviations not reflected in the analysis, or sites with a history of GCP findings, can draw a Complete Response Letter citing clinical data concerns, or trigger an FDA clinical site inspection under the Bioresearch Monitoring (BIMO) program during the review. The downstream packaging of all this evidence is covered in [the BLA readiness data package](/articles/bla-readiness-data-package), and the inspection mechanics in [FDA inspection readiness](/articles/fda-inspection-readiness).

Clinical QA is the internal safeguard that catches these issues before they reach the agency. Spending on site auditing and disciplined data quality management during the trial is cheap compared with a Complete Response after submission, which costs a review cycle, the rework, and the time to market. The cleaner way to put it: the data integrity work is the same either way, during the trial or after a finding forces you to. Doing it during the trial is the only version that protects the timeline.

---

## Roles and Responsibilities

Clinical data integrity is a shared job, and inspectors look for clear ownership.

| Role | Primary responsibility |
|---|---|
| Investigator (PI) | Accuracy and integrity of source data at the site, oversight of delegated staff, consent |
| Study coordinator | Contemporaneous source documentation, accurate EDC entry, query resolution |
| CRA / monitor | SDV/SDR, deviation capture, site oversight per the monitoring plan |
| Clinical data management | Validation specs, edit checks, query management, database lock |
| Biostatistics | SAP execution against the locked, blinded dataset |
| Pharmacovigilance | SAE/SUSAR handling and reconciliation to the clinical database |
| Clinical QA | Independent audits, vendor and CRO oversight, CAPA effectiveness |
| Sponsor (overall) | Cannot delegate accountability, even when a CRO runs the study day to day |

A point that catches sponsors out: outsourcing the work to a CRO does not outsource the accountability. ICH E6 is explicit that any trial-related duty transferred to a CRO must be specified in writing, and the sponsor retains ultimate responsibility for data quality and integrity. The oversight discipline for that relationship is in [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements) for the manufacturing side and applies in spirit to clinical vendors.

---

## Common Mistakes and Inspection-Finding Patterns

These are the patterns that recur across GCP inspection findings, stated generically:

- **Shared or generic logins** at the site, breaking attributability.
- **Consent timing failures**, where a study procedure occurred before the consent signature, or re-consent to a new protocol version lagged the amendment.
- **Source data that lives only in the EDC** for fields that should have an independent source, with no defined direct-data-entry justification. If the EDC is the source, that has to be declared and the audit trail becomes the integrity backbone.
- **Audit trails not reviewed.** Having an audit trail is not the same as reviewing it. A finding is common where the audit trail capability exists but no one ever looked at it for risk signals. See [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).
- **Blanket reasons for change** like "per query" or "correction" repeated across many fields.
- **Validation gaps in the study build**, where an edit check was changed mid-study without re-testing or a change record.
- **Deviation logs that do not reconcile** with the clinical study report.
- **eTMF backlog**, where documents are uploaded but not filed and indexed, so completeness is fictional at the moment of inspection.
- **CRO oversight on paper only**, where the sponsor cannot show evidence it actually reviewed CRO performance.

---

## Interview-Ready: Questions and How to Answer

Expect these in a clinical QA or clinical digital quality interview, and from an inspector.

**"Walk me through how clinical data moves from the patient to the analysis."**
Trace it: observation to source document, source to EDC by direct entry or transcription, edit checks and queries, data management cleaning against validation specs, database lock, transfer to biostatistics for analysis per the SAP. Name the integrity control at each handoff.

**"How do you validate an EDC for a specific study?"**
Separate the platform (vendor validated) from the study build (sponsor validated). Walk through URS, configuration spec, risk-based testing of eCRF pages and edit checks, UAT by real users, audit trail and access verification, traceability matrix, and a signed validation summary report.

**"What is the difference between monitoring and auditing?"**
Monitoring is routine, operational, risk-based oversight by the clinical team. Auditing is an independent quality assessment by people outside the study team. Both check compliance, but the independence of audit is what makes it a control.

**"What is risk-based monitoring and why did GCP move to it?"**
Define critical data and processes up front, focus SDV and on-site effort there, use central monitoring analytics to detect outlier sites. ICH E6(R2) 5.18.3 and FDA's 2013 RBM guidance drove it, because 100 percent SDV is expensive and a poor detector of the failures that actually matter, like fabrication or systemic deviations.

**"How would you detect fabricated data?"**
Source verification that finds nothing behind a value, statistical signatures (digit preference, too little variance, identical values across patients), central monitoring outliers, and direct observation during a for-cause audit. Escalate immediately, because it can lead to investigator disqualification and data exclusion.

**"What happens at database lock and why does it matter?"**
All queries resolved, SAE reconciliation done, coding complete, deviations finalized, external data reconciled, blinding intact, then access set to read-only with a signed lock memo. It matters because the SAP analysis runs on the locked dataset; any post-lock change needs a controlled reopen and re-lock, treated like a deviation.

**"A site has a query rate one tenth of the study average. What do you do?"**
Treat it as a signal, not proof. Trigger targeted central review and a focused for-cause SDV/SDR visit on the primary endpoint and consent. Benign explanation closes it; missing source documents escalate it to a potential fabrication finding.

**"How is Part 11 relevant to clinical systems?"**
EDC, eTMF, IRT, and ePRO are electronic records supporting a US submission, so Part 11 controls apply: secure attributable entry, audit trails, access control, and compliant electronic signatures. Annex 11 is the EU counterpart. See [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11).

**"What is the sponsor's responsibility when a CRO runs the trial?"**
The sponsor can transfer duties in writing but cannot transfer accountability. It must oversee the CRO, with documented evidence of that oversight, and remains responsible for data integrity and quality.

---

## Practical Tips

- Build the data-integrity checks into the study at design time, not as an audit afterthought. Critical data and critical processes should be named in the protocol and the monitoring plan before the first patient is enrolled.
- Review the audit trail on a schedule tied to risk, and record that you did. An unreviewed audit trail is a finding waiting to happen.
- Keep the deviation log and the CSR reconciled continuously, not at the end. A surprise at lock is expensive.
- Treat eTMF filing as a daily discipline. "Complete but not filed" fails an inspection the same as missing.
- Confirm the longest applicable retention period across every region you file in, and apply that one to the whole TMF.
- For interview prep on the broader quality side, pair this with [GxP quality interview preparation](/articles/gxp-quality-interview-preparation) and [ICH E6 Good Clinical Practice](/articles/ich-e6-good-clinical-practice).
