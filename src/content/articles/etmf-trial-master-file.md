---
title: "The Trial Master File: eTMF Structure, the DIA Reference Model, and Inspection Readiness"
description: "How to build and run an electronic Trial Master File that survives a GCP inspection: the DIA TMF Reference Model, completeness and timeliness metrics, QC processes, and what inspectors actually look for."
pubDate: 2026-06-20
tags: ["clinical-gcp", "etmf", "tmf", "ich-e6", "inspection-readiness", "document-control", "data-integrity"]
pillar: "clinical-gcp"
tier: "Intermediate"
---

The Trial Master File is the evidence that a clinical trial was run the way the protocol and the regulations said it would be. If a document is not in the TMF, an inspector treats it as if the activity never happened. That single rule explains most of what follows: why timeliness matters as much as completeness, why an empty placeholder is sometimes worse than a missing one, and why a clean filing structure with bad metadata still fails inspection.

This article covers how to structure an electronic TMF (eTMF), how the DIA TMF Reference Model maps the content, how to run quality control so the file is inspection-ready continuously rather than in a panic before an audit, and the finding patterns that recur across GCP inspections. The aim is that you can read this, then go build or run a TMF, answer interview questions on it, and hold your own in front of an inspector.

---

## What the TMF is and why it is required

The TMF is the collection of essential documents that, individually and together, permit evaluation of the conduct of a trial and the quality of the data produced. That definition comes straight from ICH E6, which is the operative standard.

The regulatory basis is **ICH E6(R2) Good Clinical Practice**, Section 8 ("Essential Documents for the Conduct of a Clinical Trial"), and its successor **ICH E6(R3)**, which restructures the essential-records expectations around a risk and quality-by-design philosophy. The R3 Principles and Annex 1 (interventional trials) reached Step 4 in January 2025; Annex 2 (additional considerations for nontraditional designs such as decentralised elements, pragmatic trials, and real-world data) reached Step 4 on 3 June 2026, completing the R3 set. R3 keeps the same essential-records intent but speaks of records being "fit for purpose" and quality being built into design, which changes how you justify your TMF Index and your QC effort rather than the list of documents itself. ICH E6(R2) Section 8.1 sets the core obligation: essential documents are the records that, individually and together, let someone evaluate how the trial was conducted and how good the resulting data are. Their purpose is to show that the investigator, sponsor, and monitor met Good Clinical Practice and every applicable regulatory requirement.

Two layers of regulation sit underneath this. In the United States, **21 CFR Part 312** (IND regulations) and **21 CFR Part 11** (electronic records and signatures) govern, with Part 312.62 requiring the investigator to maintain records and 312.57/312.58 covering sponsor records and FDA access. In the European Union, the **Clinical Trials Regulation (EU) No 536/2014** explicitly names the TMF in Article 57 and requires it to be readily available and directly accessible to inspectors, with **Commission Implementing Regulation (EU) 2017/556** detailing inspection procedures and **Commission Delegated Regulation (EU) 2017/1569** addressing investigational medicinal product manufacture. EU 536/2014 also sets the archiving floor: the TMF must be retained for **at least 25 years** after the end of the trial, longer than most other jurisdictions.

The risk rationale is simple. The TMF is the only durable proof that participants were properly consented, that the drug given matched the protocol, that safety events were reported on time, that the data feeding the marketing application is traceable to a source. When an inspector cannot reconstruct what happened from the TMF, they cannot trust the data, and untrustworthy data can sink a submission. A disorganized or incomplete TMF is, in inspection terms, a data integrity problem dressed as a filing problem.

The TMF has two halves that must reconcile:

- **Sponsor TMF**: held by the sponsor or CRO, covering trial-level and country-level oversight, vendor management, safety, and the documents the sponsor generates or receives.
- **Investigator Site File (ISF)**, sometimes called the site TMF: held at each investigator site, covering site-specific conduct, the local copy of consent, delegation, training, and source-adjacent records.

These are mirror images for many document types. A signed delegation log lives in the ISF; the sponsor's filed copy lives in the sponsor TMF. Reconciliation between the two is a recurring inspection theme.

---

## eTMF versus paper, and what "electronic" actually demands

An eTMF is a validated computerized system used to capture, manage, store, and retrieve essential documents electronically. Moving from paper to electronic does not relax any GCP requirement; it adds the requirements of **21 CFR Part 11** and **EU Annex 11** on top.

If you run an eTMF, you must be able to demonstrate:

- **Validation** of the system under a documented lifecycle. The category and rigor follow GAMP 5 risk-based principles. See [GAMP 5 CSV framework](/articles/gamp5-csv-framework) and [computer software assurance (FDA)](/articles/computer-software-assurance-fda).
- **Audit trails** that are secure, computer-generated, time-stamped, and capture who did what and when to each record, including document status changes, metadata edits, and deletions. See [audit trail design and review](/articles/audit-trail-design-and-review).
- **Access controls** with role-based permissions, unique user IDs, and no shared logins. See [electronic signatures implementation](/articles/electronic-signatures-implementation).
- **True copy** integrity when paper originals are scanned in. A scanned document only replaces the paper if the copy process is verified to produce a complete and accurate reproduction with the same content and meaning. See [static, dynamic records and true copies](/articles/static-dynamic-records-true-copies).
- **System clock control** so that filing dates and audit-trail timestamps are reliable. See [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).

A common trap: organizations run a "hybrid" TMF where some documents are electronic and some remain paper, with no single index that tells you which is where. Hybrids are allowed, but you must control the boundary. See [hybrid paper-electronic records](/articles/hybrid-paper-electronic-records).

---

## The DIA TMF Reference Model: what it is and how to use it

The **DIA TMF Reference Model** is an industry-developed reference taxonomy. It originated within the Document and Records Management community of the Drug Information Association (DIA), an industry association, not a regulator, and since April 2022 it has been published and maintained by CDISC (Clinical Data Interchange Standards Consortium). The name "DIA TMF Reference Model" persists in common usage, but current stewardship sits with CDISC. It is voluntary. It exists because ICH E6 lists essential documents but does not prescribe a filing structure, and before the model every sponsor and CRO invented their own, which made TMF transfers and inspections painful.

The model gives you a standardized hierarchy so that anyone, including an inspector or a new CRO inheriting a study, can find a document in a predictable place.

### Structure of the model

The reference model organizes documents into a three-level hierarchy:

| Level | Term | Example |
|------|------|---------|
| 1 | **Zone** | Trial Management; Central Trial Documents; Regulatory; IRB/IEC and other Approvals; Site Management; IP and Trial Supplies; Safety Reporting; Central and Local Testing; Third Parties; Data Management; Statistics |
| 2 | **Section** | within Site Management: Site Selection; Site Set-Up; Site Initiation; Site Management |
| 3 | **Artifact** | the actual document type, e.g. "Signed Informed Consent Form (blank)", "Monitoring Visit Report", "Delegation of Authority Log" |

Each **artifact** carries metadata attributes in the model: a unique artifact number, the artifact name, a definition, sub-artifacts where relevant, and flags for whether it is expected at trial / country / site level, whether it is "core" or "recommended", and ICH E6 cross-references. The model also supplies an **exchange mechanism** (a defined file and metadata format) so a TMF can be transferred between systems without losing structure.

Versions matter. The model is periodically revised (major published versions have included 3.x releases). Always state which version you built your TMF Index against, because artifact numbering and definitions shift between versions. When you migrate or merge studies, version mismatch is a real source of mis-filing.

### How to use the model in practice

Do not adopt the reference model verbatim and call it done. Use it as the starting taxonomy, then produce a **study-specific TMF Index** (sometimes called the TMF Plan content list) by tailoring:

1. **Start from the current reference model** as your master artifact list.
2. **Remove artifacts that cannot apply** to this trial. A trial with no central lab does not need the Central and Local Testing zone; document the rationale for exclusion rather than silently dropping it.
3. **Add artifacts the model does not cover.** Novel modalities and decentralized designs generate document types the model lags on, e.g. eConsent system validation evidence, wearable device data agreements, home-nursing vendor oversight. See [eConsent and decentralized trials](/articles/econsent-and-decentralized-trials).
4. **Set the expected count and level for each artifact.** Is this expected once at trial level, once per country, or once per site? This is what later drives completeness metrics.
5. **Map ownership.** For each artifact, name the responsible role (sponsor, CRO function, site).

The output is the backbone of the **TMF Plan**, the controlled document that governs the whole file.

---

## The TMF Plan: the governing document

Before documents are filed, write the TMF Plan (also called the TMF Management Plan). It is the SOP-level contract for how the TMF will be run for this trial, and inspectors ask for it early. See [how to write an SOP](/articles/how-to-write-an-sop).

A solid TMF Plan covers:

- **Scope and ownership**: which system(s), sponsor vs CRO vs site responsibilities, the named TMF owner.
- **Structure**: the reference model version used and the study-specific TMF Index, including documented exclusions.
- **Expected document list with timeliness targets**: when each artifact type must be filed relative to the triggering event.
- **Filing and QC process**: who indexes, who QCs, what the QC criteria are, and the sampling approach.
- **Completeness, timeliness and quality metrics** and how they are reported.
- **Access and security**: roles and permissions matrix.
- **Hybrid handling**: how paper and electronic are reconciled, and where the master copy lives.
- **Transfer and reconciliation**: how the file moves if a CRO changes, including the exchange format.
- **Archiving and retention**: format, location, retention period per region, and migration plan if the system is decommissioned.
- **Roles and responsibilities (RACI)**.

Acceptance criterion for the plan itself: a reviewer who has never seen the study should be able to predict, for any document type, where it goes, who files it, by when, and how it is QC'd.

---

## What goes in the TMF: the essential documents

ICH E6 Section 8 groups essential documents by trial phase: before the clinical phase begins, during the conduct of the trial, and after completion or termination. Here is a working set of the high-frequency, high-risk artifacts, with the zone they map to and the filing trigger.

| Artifact | Reference model zone | Filing trigger | Expected level |
|---|---|---|---|
| Protocol and amendments (signed) | Central Trial Documents | On approval/signature | Trial |
| Investigator's Brochure and updates | Central Trial Documents | On issue | Trial |
| Blank Informed Consent Form, each version/language | IRB/IEC and Approvals | On IRB/IEC approval | Site / country |
| IRB/IEC approval and composition | IRB/IEC and Approvals | On receipt | Site |
| Regulatory authority approval / IND safety acknowledgements | Regulatory | On receipt | Country |
| Statement of Investigator (Form FDA 1572) | Regulatory / Site Management | At site set-up / activation | Site |
| Financial disclosure (Form FDA 3454/3455, 21 CFR Part 54) | Regulatory | At site set-up, updated on change | Site |
| Signed clinical trial agreement / budget | Site Management | At site set-up | Site |
| Delegation of Authority Log | Site Management | At initiation, updated on change | Site |
| CV and licenses for investigators/sub-Is | Site Management | At site set-up | Site |
| Lab certifications, normal ranges, accreditation | Central and Local Testing / Site | At set-up, on update | Site / central |
| Monitoring plan and monitoring visit reports | Trial Management / Site Management | Per visit | Trial / site |
| Site Initiation Visit confirmation and training | Site Management | At initiation | Site |
| IP shipment, accountability, temperature records | IP and Trial Supplies | Per shipment/dispensing | Site |
| Safety reports (SAE, SUSAR) and DSUR | Safety Reporting | Per event / annual | Trial / site |
| Signed sample CRF / data management plan | Data Management | At set-up | Trial |
| Randomization and unblinding records | Statistics / IP | Per event | Trial / site |
| Trial close-out report and final reconciliation | Trial Management | At close-out | Site / trial |
| Statistical analysis plan and final report (CSR) | Statistics | At analysis/reporting | Trial |

Two principles cut across this list. First, every "received" document needs evidence of receipt and the date, because timeliness is judged against the trigger event. Second, blank/version-controlled documents (the consent template, the sample CRF) must always be filed with the *correct, IRB-approved version*, because filing a superseded ICF version is a classic and serious finding.

---

## Filing workflow, step by step

The day-to-day job is converting a stream of incoming documents into correctly classified, QC-passed, timely TMF records. Run it as a defined process, not ad hoc.

1. **Capture.** The document arrives (signed PDF, scanned wet-ink page, system export). For paper, scan to a true-copy standard: full page, legible, all annotations and signatures captured, color where color carries meaning. Verify the scan against the original before destroying paper, and record the true-copy verification.
2. **Classify / index.** Assign the artifact type from the study TMF Index, plus metadata: site number, country, document date, version, language, and any sub-artifact. Correct classification is where most downstream errors originate.
3. **Set the document date correctly.** The *document date* is the date the document was effective or signed, not the date you scanned it. Audit-trail timestamps record the filing event separately. Confusing the two corrupts timeliness reporting.
4. **QC.** A second person (segregation of duties) checks legibility, correct classification, correct version, complete signatures and dates, and that the document is the right one for that placeholder. QC pass or reject is recorded; rejects route back with a reason.
5. **Approve / finalize.** The record moves to a "final" or "approved" status. Status itself is metadata an inspector can see.
6. **Reconcile against the expected list.** Mark the placeholder satisfied. If the artifact is expected per site, the system tracks one slot per site so a gap is visible.
7. **Handle exceptions.** Where a document genuinely does not exist or is delayed, file a documented placeholder or a "missing document" note explaining why and when it is expected. Never leave a silent empty slot.

The same workflow drawn as a decision path, including the two places a document can leave the happy path:

<div class="flow">
  <div class="flow-step">Document arrives (signed PDF, wet-ink scan, system export)</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Classify and index against the study TMF Index; set the true document date</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Second-person QC: legible, complete, correct version, correct artifact?</div>
</div>
<div class="flow-v">
  <div class="flow-step">QC pass: set to Final/Approved, mark the expected-list placeholder satisfied, reconcile</div>
  <div class="flow-step">QC fail: route back with a reason, re-index or re-request, then QC again</div>
</div>
<div class="flow-v">
  <div class="flow-step">Document genuinely does not exist or is delayed</div>
  <div class="flow-step">File a dated "not applicable" rationale or a "missing document" note with the expected date, never a silent empty slot</div>
</div>

Acceptance criteria for a single filed record: correct artifact classification; correct and current version; legible and complete (all pages, signatures, dates present); accurate document date; QC passed by a second person; filed within the timeliness target; metadata fields complete; audit trail intact.

---

## Completeness, timeliness, and quality: the three TMF metrics

Inspectors and sponsors judge a TMF on three dimensions. Run all three as live metrics, not a one-time pre-inspection scramble.

### Completeness

Completeness = filed expected documents / total expected documents, per the study TMF Index. The denominator is the tailored expected list, which is why getting the TMF Plan right matters: an unrealistic or padded expected list distorts the percentage.

A worked example for a single site at a given point in time:

| Artifact (site level) | Expected | Filed | Notes |
|---|---|---|---|
| Delegation of Authority Log | 1 | 1 | Current version |
| IRB approval, all amendments | 4 | 3 | Amendment 3 approval pending file |
| Blank ICF, all versions | 3 | 3 | |
| Monitoring Visit Reports | 6 | 5 | MVR-6 in QC |
| IP accountability logs | 6 | 6 | |
| **Site total** | **20** | **18** | **90% complete** |

Ninety percent looks fine until you ask *which* two are missing. A missing monitoring visit report and a missing IRB amendment approval are not equal in risk. This is why completeness alone is not enough; weight by criticality.

### Timeliness

Timeliness = documents filed within target / documents filed, where the target is days from the trigger event to the file date. Typical internal targets are tiered by document risk, for example:

| Document tier | Example | Common target |
|---|---|---|
| Critical / safety | SAE reports, IRB approvals, regulatory approvals | Filed within a few business days of the event |
| Standard oversight | Monitoring visit reports, training records | Within a couple of weeks |
| Routine | Administrative correspondence | End of the month or per local SOP |

Set the targets in your TMF Plan; do not invent a single number here, because organizations differ. The key inspection concept is the **contemporaneous** standard from ALCOA+: records made at the time the activity occurred. A monitoring report written four months after the visit is a timeliness failure and an ALCOA+ ("contemporaneous") failure at once. See [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and [good documentation practices](/articles/good-documentation-practices).

### Quality

Quality is whether the filed documents are actually correct: right version, legible, complete signatures, correct classification, no superseded versions masquerading as current. A TMF can be 100% complete and timely and still fail quality if half the documents are misfiled or the consent version is wrong. Quality is measured through QC sampling and error-rate tracking.

A practical combined dashboard view that holds up in front of an inspector:

| Metric | Trial-level | Site avg | Target | Status |
|---|---|---|---|---|
| Completeness | 96% | 93% | >=95% | watch sites |
| Timeliness (critical) | 98% | 97% | >=98% | watch sites |
| QC pass rate (first pass) | 91% | 89% | >=90% | watch |
| Misclassification rate | 1.8% | 2.4% | <2% | watch |
| Overdue placeholders | 14 open | n/a | trend down | action |

---

## QC processes: how to keep the file inspection-ready

Continuous QC is the difference between a TMF you can show with a day's notice and one that needs a six-week remediation before anyone outside the team can look at it.

### Risk-based QC sampling

You cannot 100% QC a large TMF forever, so sample by risk:

- **100% QC** for the highest-risk artifacts: informed consent versions, IRB/IEC approvals, regulatory approvals, delegation logs, safety reports.
- **Statistically meaningful sampling** for medium-risk routine documents, with a defined sample size and acceptance limit (for example a defined number of documents per site per quarter with an error threshold that triggers escalation and a wider review).
- **Trigger a 100% review** of an artifact type or a site when sampling shows an error rate above your acceptance limit, which is the same logic as any quality sampling plan. See [statistics in quality: Cpk and control charts](/articles/statistics-in-quality-cpk-control-charts).

A worked sampling decision makes this concrete. Suppose a site has 240 medium-risk filed documents this quarter and your TMF Plan sets a sample of 32 with an acceptance limit of 1 error (accept on 0 or 1 finding, escalate to 100% review of that artifact type at 2 or more). The QC reviewer pulls 32, finds 2 misclassifications in monitoring visit reports, so the artifact type fails the sample. The action is not "fix those two": it is a 100% review of monitoring visit reports at that site, a root-cause look at why classification drifted (often a coordinator using the wrong artifact code), and a check of whether the same pattern shows at other sites. Record the sample size, the acceptance limit, the result, and the triggered action so the sampling decision is defensible rather than ad hoc.

### Periodic TMF review (the formal health check)

Run scheduled TMF reviews at milestones: study start-up complete, first patient in, ongoing at a defined cadence (often quarterly), database lock, and pre-inspection. Each review checks completeness against the expected list, timeliness trends, open placeholders, and quality sampling, and produces a documented report with CAPA-style actions and owners. A TMF review with no follow-through is theater; the actions and their closure are what an inspector reads. See [CAPA effectiveness verification](/articles/capa-effectiveness-verification).

### Reconciliation

Reconcile the sponsor TMF against each Investigator Site File at monitoring visits and at close-out. The monitor confirms the ISF holds what it should and that sponsor-side copies match. Document the reconciliation; "I checked it" with no record is, by the TMF's own rule, the same as not having checked it.

---

## TMF transfer at a CRO change: the reconciliation runbook

Changing CRO or bringing a study in-house mid-trial is where TMFs quietly break. Documents are lost or duplicated, reference-model versions do not line up, metadata and audit trail drop on export, and the reconciliation is never formally closed. Run the transfer as a controlled, signed-off project, not an IT file copy.

1. **Write a transfer plan and freeze the source.** Name the sending and receiving owners, the cut-off date, and the exact scope (which studies, which sites, sponsor TMF and ISF copies). Put the source eTMF into a read-only or controlled state at cut-off so nothing changes mid-transfer.
2. **Agree the index mapping first.** Both sides confirm the reference-model version each system uses and produce an artifact-to-artifact mapping. Version mismatch (for example a 3.1 index into a 3.2 index) is the single biggest source of mis-filing, so resolve every unmapped or renumbered artifact before any document moves.
3. **Export with metadata and audit trail intact.** Use the model's exchange format where both systems support it. The export must carry the document, its metadata (artifact type, document date, version, site, status), and the audit trail. A bulk PDF dump that loses metadata and history is not an acceptable transfer of a GxP record.
4. **Verify counts and a content sample on import.** Reconcile expected counts per artifact and per site against the source. Then QC a risk-based sample of imported records for correct classification, correct document date, intact audit trail, and readability. High-risk artifacts (consent versions, IRB approvals, safety reports) get 100% verification, not sampling.
5. **Reconcile against the expected list, not just against the old system.** Confirm the receiving TMF's expected-document configuration matches the study TMF Index so completeness metrics restart correctly. A transfer that reconciles system-to-system but breaks the expected-list denominator hides gaps.
6. **Resolve and close every exception.** Track missing, duplicated, or mis-mapped documents to closure. Duplicates are deduplicated with a documented rule (keep the QC-passed final, retire the draft); gaps are chased from the source or rationalised.
7. **Sign off the transfer.** A documented, dual-signed reconciliation statement (sending and receiving owners, plus QA) records that the scope transferred completely, the sample passed, and exceptions are closed. Until that sign-off exists, the receiving organisation cannot claim the TMF is complete and an inspector will treat the transfer as open.

Acceptance criteria for a completed transfer: artifact and site counts reconcile to the source; high-risk artifacts are 100% verified; metadata and audit trails are intact and reviewable; the expected-document list is reconfigured to the study TMF Index; every exception is closed; and a dual-signed reconciliation statement exists. The receiving organisation owns the TMF the moment it accepts the transfer, including any inherited gaps, which is exactly why the sample and the sign-off matter. See [quality in technology transfer](/articles/quality-in-technology-transfer) for the analogous discipline on the manufacturing side.

## Roles and responsibilities

| Role | TMF responsibilities |
|---|---|
| **Sponsor (ultimate owner)** | Accountable for the TMF even when a CRO runs it. Owns the TMF Plan, oversight, and final archiving. Cannot delegate accountability, only activity. |
| **TMF Manager / TMF Lead** | Owns the TMF Plan and the study TMF Index, runs metrics and periodic reviews, manages remediation, point of contact in inspection. |
| **Clinical Operations / CRA (monitor)** | Generates and files monitoring documents, performs ISF reconciliation at site, ensures site files are complete and current. |
| **Document Specialist / TMF Coordinator** | Day-to-day capture, classification, indexing, and first-line QC of incoming documents. |
| **Clinical QA** | Independent oversight: audits the TMF process, verifies QC effectiveness, reviews metrics, prepares for and supports inspections. Not the same people who do the filing. See [clinical QA and GCP data integrity](/articles/clinical-qa-gcp-data-integrity). |
| **Investigator and site staff** | Maintain the ISF, file site-level documents, retain source-adjacent records, keep delegation and training current. |
| **CRO / vendors** | File documents under contract per the agreement; transfer the TMF or its segments back to the sponsor cleanly. Vendor oversight evidence itself is a TMF artifact. See [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements) for the analogous oversight model. |
| **Records / Archiving** | Long-term retention, format integrity, and migration if the system changes. |

The non-negotiable principle: **the people who QC must be independent of the people who file.** Segregation of duties is both a data integrity control and an inspection expectation.

---

## Archiving and retention

When the trial ends, the TMF moves from active management to archive, but it must stay complete, legible, and accessible for the full retention period.

Retention floors differ by region, and you keep the longest applicable:

- **EU CTR (EU) No 536/2014**: at least 25 years after the end of the trial for the sponsor and investigator TMF. The archiving obligation sits in Article 58 (archiving of the clinical trial master file), distinct from Article 57, which governs the TMF's contents and accessibility to inspectors.
- **US 21 CFR 312.62**: records retained for 2 years after a marketing application is approved for the indication, or 2 years after the IND is discontinued and FDA notified, whichever is later. Longer retention is common in practice.
- **ICH E6** expects retention for at least 2 years after the last approval or discontinuation, and per applicable regulatory requirements, which in the EU means the 25-year floor.

Archiving requirements that trip teams up:

- **Readability over time.** A PDF/A or equivalent durable format, with a plan to migrate if formats or systems become obsolete. A 25-year obligation outlives most software. See [data migration validation](/articles/data-migration-validation) and [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation).
- **Audit-trail preservation.** The audit trail is part of the record and must be archived and remain reviewable. Archiving the documents but losing the metadata and audit trail is a data integrity gap.
- **Access control through retirement.** Even archived, the TMF must be retrievable on request and protected from alteration. Decommissioning an eTMF system without a validated migration is a known failure mode.

---

## Common mistakes and recurring inspection findings

These patterns recur across GCP inspections and audits. None of them require naming any company; they are generic.

- **Documents missing or filed late.** The single most common TMF finding. Late filing breaks the contemporaneous principle and signals that oversight was not real-time.
- **Wrong or superseded ICF version filed.** Filing an old consent version, or being unable to show which version each participant signed, is a high-severity finding because it goes to participant protection.
- **Empty placeholders with no explanation.** A blank slot with no note explaining absence reads as a gap. An inspector cannot tell "not applicable" from "lost."
- **Misclassification.** Documents filed under the wrong artifact, so completeness looks fine but the document cannot be found where it belongs. Inspectors test this by asking for a specific document and watching how long retrieval takes.
- **Sponsor TMF and ISF do not reconcile.** Versions differ, signatures present in one and not the other, monitoring reports filed centrally but not at site.
- **Audit trail not reviewed or not available.** For eTMF, failing to demonstrate audit-trail review, or an audit trail that does not capture metadata changes, is a Part 11 / Annex 11 finding. See [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).
- **True copy process not verified.** Scanned documents accepted as originals without a documented verification that the copy is complete and accurate.
- **No documented TMF Plan or expected-document list.** Without an expected list there is no defensible completeness denominator, so the sponsor cannot prove the file is complete.
- **eTMF not validated, or shared logins / weak access control.** Treating the eTMF as "just document storage" rather than a GxP computerized system.
- **CRO transfer gaps.** When a study changes CRO, documents are lost, duplicated, or mis-mapped across reference-model versions, and reconciliation is never closed.
- **Metrics that are not acted on.** Reporting 88% completeness for months with no remediation is worse than not measuring, because it shows the organization knew and did nothing.

The meta-finding behind most of these: the TMF was treated as a clerical archive to be assembled before an inspection, instead of a continuously maintained quality record. The fix is process and metrics, not a heroic clean-up sprint.

---

## Inspection readiness for the TMF

A TMF that is run well day to day is most of the readiness work. The rest is being able to demonstrate it. See [GCP audits and inspections](/articles/gcp-audits-and-inspections) and [FDA inspection readiness](/articles/fda-inspection-readiness).

Before an inspection:

1. **Run a final completeness, timeliness, and quality review** and document it, with any open items tracked and risk-assessed.
2. **Resolve or rationalize every placeholder.** Each gap should have a documented reason and, where relevant, a remediation date.
3. **Confirm retrieval speed.** Inspectors judge a TMF partly on how fast you can produce a named document. Practice retrieval against a list.
4. **Verify ISF/sponsor reconciliation** for the sites in scope.
5. **Prepare the audit-trail review evidence** for the eTMF, and confirm access for the inspector if they will view the system directly. EU 536/2014 expects the TMF to be directly accessible to inspectors.
6. **Brief the people who will answer TMF questions** so they can explain the structure, the metrics, and any gaps honestly.

During the inspection, the rules are the same as any GCP inspection: produce only what is requested, answer the question asked, do not speculate, and never alter or back-date a document to close a gap mid-inspection. Back-dating or fabricating a TMF document during an inspection converts a filing finding into a data integrity and potential fraud finding. See [managing a live inspection](/articles/managing-a-live-inspection).

---

## Worked example: tailoring the reference model for a decentralized trial

Suppose you are setting up a Phase 2 decentralized trial with eConsent, home nursing, and a wearable device. Working from the reference model:

1. **Keep** the standard zones: Trial Management, Central Trial Documents, Regulatory, IRB/IEC Approvals, Site Management, IP and Trial Supplies, Safety, Data Management, Statistics.
2. **Add study-specific artifacts** the base model handles thinly:
   - eConsent system validation summary and Part 11 assessment (file under Data Management / a computerized-systems section).
   - Home-nursing vendor qualification, contract, and training records (Third Parties / vendor oversight).
   - Wearable device data transfer agreement and data flow diagram (Data Management).
   - Remote monitoring plan and remote source data review records (Trial Management). See [risk-based monitoring in clinical trials](/articles/risk-based-monitoring-clinical) and [source data and SDV in clinical trials](/articles/source-data-and-sdv-clinical).
3. **Set expected level and count** for each: eConsent validation is trial-level once; home-nursing qualification is per vendor; wearable agreement is trial-level.
4. **Assign owners and timeliness targets**, then load the tailored list as the eTMF's expected-document configuration so completeness tracks against reality.

The lesson: the reference model is the map, not the territory. New trial designs always need tailoring, and the tailoring decisions are themselves documented in the TMF Plan.

---

## Interview-ready questions and how to answer them

**"What is the TMF and why does it matter?"**
The collection of essential documents that, per ICH E6 Section 8, permit evaluation of trial conduct and data quality. It matters because it is the evidence the trial was run compliantly; if it is not in the TMF, regulators treat it as not done, and an untrustworthy TMF undermines the data feeding the submission.

**"What is the DIA TMF Reference Model and is it a regulation?"**
It is a voluntary, industry-developed taxonomy, not a regulation. It started within the DIA and has been maintained by CDISC since April 2022, though the "DIA TMF Reference Model" name has stuck. It standardizes the structure into zones, sections, and artifacts so documents are filed predictably and TMFs can be transferred and inspected consistently. You tailor it per study; you do not adopt it blindly.

**"How do you measure whether a TMF is in good shape?"**
Three dimensions: completeness (filed vs expected), timeliness (filed within target days of the trigger event, tied to the contemporaneous principle), and quality (right version, legible, correctly classified, complete signatures). You run all three as live metrics with risk-based QC and periodic reviews, not a pre-inspection scramble.

**"What is the difference between completeness and quality, and which is worse to fail?"**
Completeness is whether expected documents are present; quality is whether the present documents are correct. A 100% complete TMF can still fail if versions are wrong or documents are misfiled. Quality failures are often worse because they hide: the slot looks satisfied but the content is wrong, for example a superseded consent version.

**"An inspector asks for a specific monitoring report and it is not where it should be. What does that tell them?"**
That classification or filing discipline is weak, and they will probe wider. Retrieval speed and accuracy are how inspectors test a TMF in real time. The right answer is to find it through metadata and explain the indexing, not to improvise.

**"What extra requirements does an eTMF add over a paper TMF?"**
All the GCP requirements stay, plus 21 CFR Part 11 and EU Annex 11: system validation, secure time-stamped audit trails, role-based access with unique logins, verified true copies for scanned originals, and controlled system clocks. The eTMF is a validated GxP computerized system, not just storage.

**"How long must the TMF be retained?"**
The longest applicable requirement. Under EU CTR 536/2014 it is at least 25 years after the trial ends. US 21 CFR 312.62 ties retention to 2 years after marketing approval or IND discontinuation. You keep the longest and ensure readability, audit-trail preservation, and access for the full period.

**"You inherit a study that is changing CRO mid-trial. What are your TMF risks?"**
Document loss or duplication during transfer, reference-model version mismatch causing mis-mapping, broken metadata and audit trail, and unreconciled sponsor/ISF copies. You manage it with a controlled transfer using the exchange format, a reconciliation against the expected list, and a documented sign-off that the transfer is complete.

**"What is a placeholder and why do empty ones fail inspection?"**
A placeholder marks where an expected document goes. An empty placeholder with no note cannot be distinguished from a lost document. You either file the document, file a documented true reason it does not apply, or file a note stating why it is delayed and when it is expected.

---

## Practical tips

- Tie every timeliness clock to the **trigger event**, not the upload date, and store both dates so the metric is honest.
- Weight completeness by **criticality**. A dashboard that treats a missing administrative letter and a missing IRB approval as equal will mislead you and your inspector.
- Configure the eTMF's **expected-document list** to the tailored study index at start-up; an out-of-the-box list inflates the denominator and hides real gaps.
- Run **reconciliation at every monitoring visit**, not just at close-out, so ISF/sponsor drift is caught early.
- Keep a short, current **TMF narrative** for inspection: structure, metrics, known gaps, and remediation status. Honesty about gaps beats a surprise.
- Never fix a gap by back-dating. **Use a current-dated note** explaining the historical situation.
- State the **reference model version** on the index and re-check it at any system migration or CRO change.

## Related reading

- [ICH E6 Good Clinical Practice](/articles/ich-e6-good-clinical-practice)
- [Clinical QA and GCP data integrity](/articles/clinical-qa-gcp-data-integrity)
- [GCP audits and inspections](/articles/gcp-audits-and-inspections)
- [Source data and SDV in clinical trials](/articles/source-data-and-sdv-clinical)
- [eConsent and decentralized trials](/articles/econsent-and-decentralized-trials)
- [Document control fundamentals](/articles/document-control-fundamentals)
- [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11)
- [ALCOA+ in detail](/articles/alcoa-plus-deep-dive)
- [FDA inspection readiness](/articles/fda-inspection-readiness)
- [Risk-based monitoring in clinical trials](/articles/risk-based-monitoring-clinical)
