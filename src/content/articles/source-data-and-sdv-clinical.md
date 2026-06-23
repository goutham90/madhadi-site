---
title: "Source Data, SDV, and ALCOA in Clinical Trials: Getting the Site Records Right"
description: "How clinical source data, certified copies, source data verification, and ALCOA principles work at the investigator site, and the monitoring and inspection findings that come from getting them wrong."
pubDate: 2026-06-20
tags: ["clinical", "gcp", "source data", "sdv", "alcoa", "data integrity", "monitoring", "inspection readiness"]
pillar: "clinical-gcp"
tier: "Beginner"
---

A clinical trial is, in the end, a paper and electronic record of what actually happened to each subject. The drug effect you report in a marketing application is only as trustworthy as the records sitting in the investigator site's files. If a regulator cannot trace a number in the database back to the moment a nurse measured a blood pressure or a lab analyzer printed a result, the number is unsupported. That single idea drives almost everything in this article: source data is the ground truth, source data verification (SDV) is how the sponsor checks the database against that ground truth, and ALCOA is the standard the ground truth itself must meet.

This page covers what source data and certified copies are, how SDV is planned and performed, how ALCOA applies at the site, who is responsible for what, and the inspection and monitoring findings that show up again and again when sites and sponsors get it wrong. It is written for someone new to clinical quality or clinical monitoring who needs to actually do the work and answer for it.

---

## The core vocabulary, defined precisely

People use these terms loosely and then get burned in an audit. Get them exact.

**Source data.** Under the ICH E6(R2) Good Clinical Practice glossary, source data covers all of the information held in original records, and in certified copies of those records, that documents clinical findings, observations, and other trial activities, the information you need to reconstruct and evaluate the trial. The operative idea is exactly that reconstruct-and-evaluate test. Source data is whatever you would need to rebuild the story of what happened, independent of the case report form.

**Source documents.** The same glossary describes source documents as the original documents, data, and records that hold the source data. The examples it gives run wide: hospital and clinic records, office and clinical charts, laboratory notebooks, memos, subject diaries and evaluation checklists, pharmacy dispensing records, output captured straight from automated instruments, certified copies and transcriptions, microfiche and microfilm, photographic negatives, magnetic media, x-rays, the subject's own files, and anything held at the pharmacy, the labs, or the medico-technical departments tied to the trial. In plain terms, the source document is the physical or electronic object; the source data is the content inside it.

**Case report form (CRF).** In the ICH E6(R2) glossary, the CRF is the printed, optical, or electronic record built to capture, for each trial subject, the protocol-required information the sponsor needs reported. In a modern trial this is the electronic case report form (eCRF) inside an electronic data capture (EDC) system. The CRF is not source. It is a transcription of source, unless the trial has explicitly designated a CRF field as the source (more on that under direct data entry).

**Certified copy.** The ICH E6(R2) glossary treats a certified copy as a copy of the original record, on any kind of media, that has been confirmed, either by a dated signature or by a validated process, to carry the same information as the original, including the data that describe its context, content, and structure. The point of a certified copy is that, once certified, it can stand in for the original, including for retention and inspection.

**Source Data Verification (SDV).** SDV is the process of comparing the data recorded in the CRF against the source documents to confirm that the CRF reflects the source accurately, completely, and consistently. It is one of the activities a monitor performs. SDV is not the same as monitoring; it is a subset of it.

**Source Document Review (SDR).** SDR is broader than SDV. It is reviewing the source documents themselves for protocol compliance, safety, eligibility, and quality, not just checking whether a number matches the CRF. A subject can have perfect SDV (the CRF matches the chart exactly) and still fail SDR (the chart shows the subject took a prohibited medication that nobody flagged).

### ALCOA and ALCOA+

ALCOA is the acronym for the attributes that any GxP record, including clinical source data, must have. The principles come from FDA data integrity thinking and are echoed in EMA and MHRA guidance. ALCOA stands for Attributable, Legible, Contemporaneous, Original, Accurate. The "+" elements add Complete, Consistent, Enduring, and Available.

| Attribute | What it means at a clinical site | Failure example |
|---|---|---|
| Attributable | You can tell who recorded the data and when. Signed and dated, or a system audit trail. | A vital signs sheet with values but no initials and no date. |
| Legible | You can read it and it stays readable for the retention period. | A faded thermal ECG printout with no certified copy. |
| Contemporaneous | Recorded at the time the activity happened, not reconstructed later. | A visit "done" on the 5th but the note written on the 20th with no late-entry annotation. |
| Original | The first capture, or a certified true copy of it. | Transcribing a lab value onto a clean sheet and shredding the analyzer printout. |
| Accurate | Correct, error-free, reflecting the observation. | A glucose value transposed from 142 to 124. |
| Complete | All data, including repeats and re-tests, retained. | Re-running an assay and keeping only the "good" result. |
| Consistent | Dates and sequences make sense across records. | Informed consent dated after the first study procedure. |
| Enduring | Recorded on durable media, not a sticky note or scrap. | A dose recorded on a paper towel, later "transcribed." |
| Available | Retrievable for review and inspection throughout retention. | Source archived offsite and not produced during an inspection. |

ALCOA is the acceptance standard for source data. When a monitor or inspector evaluates a site record, these are the lenses. See [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and [data integrity foundations](/articles/data-integrity-foundations) for the full treatment.

---

## Why this is required: the regulatory basis

Three layers of requirement sit behind source data and SDV.

**ICH E6(R2) Good Clinical Practice.** This is the operational standard adopted by FDA, EMA, and most other authorities. Section 4.9 (Records and Reports, the investigator's obligations) requires the investigator to ensure the accuracy, completeness, legibility, and timeliness of the data reported to the sponsor in the CRFs and in all required reports. Section 4.9.0 (added in R2) states that source documents and trial records should be attributable, legible, contemporaneous, original, accurate, and complete, with changes traceable, not obscuring the original entry, and explained if necessary. Section 5.18.4 (the sponsor's monitoring obligations) requires the monitor to verify that the data are accurate, complete, and verifiable from source documents. Section 8 (Essential Documents) lists which records must exist before, during, and after the trial. ICH E6(R3) was finalized and continues the same source-data and data-governance expectations with stronger emphasis on data quality by design; many organizations are transitioning to it, so know that both versions describe the same fundamentals.

**FDA regulations.** For drug and biologic trials, 21 CFR 312.62 requires the investigator to prepare and maintain adequate and accurate case histories that record all observations and other data pertinent to the investigation on each individual administered the investigational drug or used as a control. FDA defines case histories to include the CRFs and supporting data such as signed consent forms and medical records. For device trials, 21 CFR 812.140 sets parallel record requirements. FDA's guidance "Electronic Source Data in Clinical Investigations" (September 2013) describes how source data captured electronically should be handled, including the concept of an originator and the eCRF-as-source model. FDA's guidance "Oversight of Clinical Investigations: A Risk-Based Approach to Monitoring" (originally 2013, with a later questions-and-answers companion) is the reference for moving away from 100% SDV toward targeted, risk-based monitoring.

**21 CFR Part 11.** When source data or certified copies are electronic, 21 CFR Part 11 applies to electronic records and electronic signatures used in FDA-regulated trials, covering audit trails, access controls, and signature meaning. For the practical mechanics, see [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11) and [electronic signatures implementation](/articles/electronic-signatures-implementation).

The risk rationale is simpler than the citation list. The CRF and the clinical database are downstream copies. Errors enter when data is transcribed, when systems integrate, when sites are busy, and occasionally when someone fabricates. SDV and ALCOA are the controls that keep the analyzed dataset honest. A regulator who finds that the database cannot be reconstructed from source will question the entire study, not just the one data point.

---

## What is source and what is not: making the call

A surprising amount of site trouble comes from confusion about which record is the source. The rule of thumb: the source is the first place a piece of data was recorded in durable form. Walk it through.

- A blood pressure read off a cuff and written by the nurse onto the vital signs worksheet, then typed into the eCRF. **Source = the worksheet.** The eCRF is a transcription.
- A central lab result transmitted electronically into the EDC. **Source = the lab's electronic record (or the certified data file the lab sends).** The eCRF lab page is a copy of the lab's source.
- A subject's pain score entered directly into a validated eCRF field by the coordinator with no prior paper. **Source = the eCRF entry**, provided the protocol or a source data location list designates it as the originator and the system has an audit trail.
- An electronic patient-reported outcome (ePRO) the subject enters on a device. **Source = the ePRO system record.** The subject is the originator.
- A physician's progress note in the hospital electronic health record (EHR). **Source = the EHR entry.** The site must be able to produce a certified copy for the trial file.

The practical artifact that captures all of this is the **source data location list** (sometimes called a source documentation agreement, monitoring guidelines source list, or data source matrix). It is a per-protocol table that names, for each data element or CRF page, where the source lives. It should be set up before the first subject is enrolled and kept current. Inspectors ask for it. Monitors live by it.

### Sample source data location list (excerpt)

| CRF domain / data element | Source location | Originator | Certified copy needed? |
|---|---|---|---|
| Informed consent date and signatures | Signed paper ICF in subject binder | Subject and investigator | No, original retained at site |
| Demographics, medical history | Site EHR / subject chart | Investigator/coordinator | Yes, certified copy of relevant EHR pages |
| Vital signs | Paper vitals worksheet | Study nurse | No, original worksheet retained |
| Central lab chemistry/hematology | Central lab electronic record / data file into EDC | Central lab analyzer | Lab is source of record |
| Local safety labs | Site EHR / printed analyzer report | Local lab | Yes if EHR, certified copy |
| ECG | ECG machine printout / vendor portal | ECG device / core lab | Certified copy of tracing |
| Investigational product accountability | Drug accountability log (paper or IRT) | Pharmacy | No, original log retained |
| Adverse events | Site EHR progress notes + AE worksheet | Investigator | Yes for EHR-sourced AEs |
| ePRO diary | ePRO vendor system | Subject | Vendor system is source |
| Concomitant medications | EHR medication list + subject report | Coordinator | Yes for EHR portion |

If a field appears in the eCRF but is not on this list with a defined source, you have a gap. That gap is a finding waiting to happen.

---

## Certified copies and true copies: when paper becomes electronic

Sites increasingly scan paper source into an electronic system, or print electronic source to file on paper. The moment you make a copy that will stand in for the original, the certified copy rules apply.

A copy becomes a **certified copy** only when someone has confirmed, through a dated signature or a validated process, that it carries everything the original carries: the same information plus the context, content, and structure around it. "Context, content, and structure" matters: a scan that loses the audit trail, the metadata, or the dynamic functionality of an electronic record is not a faithful certified copy of that electronic original. This is why printing a chromatogram to a flat PDF can fail to qualify as a true copy if the underlying dynamic data and audit trail are lost. The same principle applies in clinical: a static screenshot of a dynamic EHR view may not preserve everything needed for reconstruction.

There are two routes to certification.

**Manual certification.** A named person compares the copy to the original, confirms it is complete and accurate, then signs and dates a statement to that effect (often a stamp or a cover sheet: "I certify this is a true and complete copy of the original record. Name, signature, date."). Use this for one-off scans, for retiring a paper original after scanning, or where no validated process exists.

**Validated-process certification.** A validated scanning or transfer process produces copies that are demonstrably complete and accurate every time, so individual human sign-off is not required for each copy. This is the scalable route for high volume, for example a site that scans all source into a document management system. The process must be qualified and the validation documented; otherwise the "validated process" claim is hollow.

### Procedure: certifying a copy so you can retire the original

1. Confirm the original is complete and final before copying (no pending entries).
2. Copy using a controlled method (calibrated scanner settings, no cropping, color where color carries meaning such as a red flag on a lab report).
3. Compare copy to original page by page for content, legibility, and completeness, including back pages and annotations.
4. Confirm context and structure survived: for electronic originals, confirm audit trail and metadata are preserved or separately retained.
5. Apply the certification statement, signature, and date, or rely on the documented validated process record.
6. Record the action in the document inventory or note to file, including who certified, when, and the disposition of the original.
7. Retain the certified copy under the same retention rules as the original. Only destroy the paper original if your procedures and applicable law allow it and the certified copy is confirmed faithful.

**Acceptance criteria for a certified copy:** it is complete (every page, every annotation), legible, preserves context/content/structure, and bears a dated signature or a documented validated-process linkage. If any of those is missing, it is just a copy, and the original must be kept.

For the deeper treatment of dynamic versus static records and true-copy mechanics, read [static and dynamic records and true copies](/articles/static-dynamic-records-true-copies) and [hybrid paper and electronic records](/articles/hybrid-paper-electronic-records).

---

## Source data verification: planning it

SDV used to mean a monitor sat at the site and compared 100% of CRF data to 100% of source for every subject. The 2013 FDA risk-based monitoring guidance and ICH E6(R2) section 5.0 (Quality Management) shifted the field. The expectation now is that monitoring effort, including SDV, is targeted at the data and processes that matter most to subject safety and result reliability. Verifying every comma is expensive and, the agencies argue, not the best use of scrutiny.

The planning happens in two documents.

**Clinical Monitoring Plan (CMP).** This describes the overall monitoring strategy: on-site visits, remote monitoring, centralized data review, and how SDV fits. It defines the SDV approach (full, targeted/partial, or none for some data) and the triggers that escalate it.

**Risk assessment / quality by design.** Before the CMP is finalized, the sponsor identifies the critical data and critical processes for the protocol. Critical data are the variables that drive the primary and key secondary endpoints, eligibility, safety reporting, and informed consent. Critical processes are the activities most likely to produce errors that matter. SDV is then weighted toward those. This is the same thinking as [risk-based monitoring in clinical](/articles/risk-based-monitoring-clinical) and connects to [ICH E8 and E9 trial design and statistics](/articles/ich-e8-e9-trial-design-statistics).

### How much SDV: the common models

| Model | What it means | When used |
|---|---|---|
| 100% SDV | Every CRF data point verified against source | Small trials, high-risk first-in-human, key safety-critical endpoints, or where regulators expect it |
| Targeted / partial SDV | Critical variables (primary endpoint, eligibility, consent, SAEs) verified for all subjects; non-critical sampled | Most modern phase 2/3 trials |
| Risk-based / adaptive SDV | SDV percentage rises or falls per site based on performance signals from centralized monitoring | Large multi-site trials with strong central data surveillance |
| Reduced / no SDV for select data | Some low-risk fields not source-verified, relying on edit checks and central review | Where data quality is otherwise assured and justified in the CMP |

Whatever the model, four categories are almost always 100% verified: **informed consent** (it was obtained, dated correctly, before any study procedure, on the correct version), **eligibility** (key inclusion/exclusion criteria), **primary endpoint data**, and **serious adverse events** and other safety reporting. If you remember nothing else about SDV scope, remember those four.

---

## Source data verification: doing it

Here is the concrete on-site (or remote) procedure a clinical research associate (CRA) follows.

1. **Prepare.** Pull the subject list, the CMP, the source data location list, and any open queries. Know which subjects and which data are in scope for this visit.
2. **Confirm informed consent first.** For each subject in scope, locate the signed ICF. Verify: correct version per the version-control log, subject and investigator signatures and dates present, consent dated on or before the first study-specific procedure, re-consent on updated versions where required. A consent problem stops everything else; flag immediately.
3. **Verify eligibility.** Compare inclusion/exclusion criteria in the CRF against source (labs, history, prior meds). Confirm the subject genuinely met criteria at the time of enrollment.
4. **Verify critical data points.** For each in-scope CRF field, find the source, compare value by value: number matches, units match, date matches, the entry is attributable, contemporaneous, and legible. Tick off against the source location list.
5. **Review for SDR, not just SDV.** While in the chart, look for protocol deviations, unreported AEs, prohibited concomitant medications, missed assessments, and timing windows. A CRA who only matches numbers is doing half the job.
6. **Check the audit trail for electronic source.** Where source is in EDC, ePRO, or an EHR, confirm changes are tracked, that corrections did not obscure originals, and that reason-for-change is captured where required. See [audit trail design and review](/articles/audit-trail-design-and-review).
7. **Raise queries for discrepancies.** Any CRF-to-source mismatch becomes a data query for the site to resolve. Do not correct CRF data yourself; the site investigator's team owns the data.
8. **Document the SDV.** Record in the monitoring visit report what was verified, for which subjects, the discrepancies found, queries raised, and follow-up actions. The visit report is itself an essential record.
9. **Escalate patterns.** Repeated transcription errors, systematic late entries, or a consent issue across subjects signals a site-level process problem, not a one-off. Escalate to the clinical lead and consider a for-cause action.

### A worked SDV example

The CRF reports a Week 4 systolic blood pressure of 138 mmHg for subject 0123. The source location list says vital signs source is the paper vitals worksheet.

- CRA pulls the Week 4 vitals worksheet. It reads systolic 158, initialed "JM," dated and timed at the visit. The eCRF says 138.
- This is a transcription error. Not a safety judgment by the CRA; the CRA does not "fix" it.
- CRA raises a query: "Week 4 systolic BP eCRF value 138 does not match source worksheet value 158. Please verify and correct."
- The coordinator reviews, confirms the worksheet is correct, corrects the eCRF to 158 with a reason-for-change captured in the audit trail. The original 138 entry is preserved in the audit trail, not overwritten silently.
- CRA confirms the correction at the next review, closes the query, and notes the discrepancy in the visit report. If subject 0123 shows three such transcription errors, the CRA escalates a data-entry quality concern for the site.

**Acceptance criteria for a clean SDV finding:** the CRF value equals the source value (same number, unit, date), the source is attributable and contemporaneous, any change has a tracked reason, and discrepancies are queried and resolved with the original preserved.

---

## Direct data entry and eSource: when the CRF is the source

A growing number of trials capture data directly into the eCRF or an eSource tool with no prior paper. The 2013 FDA electronic source guidance supports this through the concept of the **originator**: the system records who or what (a person or a device) first entered each data element. When the eCRF is designated as source, there is nothing upstream to source-verify against; the integrity controls shift to the system itself.

That changes the quality model:

- There is no transcription step, so transcription SDV largely disappears for those fields.
- The audit trail, access controls, time stamps, and validation of the EDC become the integrity controls. See [chromatography data system integrity](/articles/chromatography-data-system-integrity) for the analogous lab logic, and for clinical systems specifically [clinical systems GCP digital quality](/articles/clinical-systems-gcp-digital-quality).
- You must define, in the source location list, that the eCRF field is the source, and the system must be validated, with the [time stamps and system clock control](/articles/time-stamps-and-system-clock-control) defensible.
- Centralized and statistical data review become the primary surveillance, since a CRA cannot re-verify against an upstream paper that does not exist.

ePRO and eCOA (electronic clinical outcome assessment) are the clearest case: the subject is the originator, the entry into the device is the source, and there is no source-verification of the subject's pain score against anything else. The controls that matter are device validation, the subject's authenticated session, time-stamping, and the audit trail.

---

## Essential documents and retention

Source data does not live in isolation; it is part of the trial's essential documents, the records that individually and collectively permit evaluation of the conduct of the trial and the quality of the data produced. ICH E6 section 8 lists them, and they are filed in the investigator site file and the [trial master file](/articles/etmf-trial-master-file).

Retention is long. ICH E6(R2) requires that essential documents be retained until at least 2 years after the last marketing approval in an ICH region and until there are no pending or contemplated marketing applications, or at least 2 years after formal discontinuation of clinical development. Regional and local laws often require longer (some jurisdictions require many years more), and the sponsor must inform the investigator in writing when records can be destroyed. Source must remain Available and Enduring for the whole period. A site that scans and shreds source without a faithful certified copy, or that loses access to a retired ePRO vendor's data, has destroyed essential records. See [document control fundamentals](/articles/document-control-fundamentals) and [data lifecycle and metadata](/articles/data-lifecycle-and-metadata).

---

## Roles and responsibilities

| Role | Responsibility for source data and SDV |
|---|---|
| Principal Investigator | Ultimately accountable for accuracy, completeness, legibility, and timeliness of data at the site. Signs CRFs attesting to accuracy. Ensures source exists and is ALCOA-compliant. |
| Study coordinator / research nurse | Records source contemporaneously, transcribes into CRF, maintains the subject binder, resolves data queries, supports the monitor during SDV. |
| Sub-investigators / site clinicians | Make and document clinical observations and judgments (eligibility, AE causality) in source. |
| Clinical Research Associate (monitor) | Performs SDV and SDR per the CMP, raises queries, writes visit reports, escalates site issues. Does not enter or correct site data. |
| Sponsor clinical operations | Owns the monitoring strategy, CMP, and risk assessment. Ensures SDV scope is defined and followed. |
| Sponsor clinical QA / GCP QA | Audits sites and the sponsor process for compliance, including data integrity and SDV adequacy. See [clinical QA GCP data integrity](/articles/clinical-qa-gcp-data-integrity). |
| Data management | Designs the eCRF and edit checks, manages queries, runs centralized data review and listings. See [clinical data management and CDISC](/articles/clinical-data-management-cdisc). |
| Central / specialty labs and ePRO vendors | Are the source of record for the data they generate; must provide certified data and maintain their own integrity controls. |
| CRO (if delegated) | Performs any delegated monitoring or data activities under the sponsor's oversight; the sponsor remains accountable. |

The dividing line that trips people up: the **site owns the data**, the **monitor verifies it**. A monitor who corrects CRF entries, or a sponsor that pressures a site to change source, has crossed into data integrity territory.

---

## Common mistakes and real inspection-finding patterns

These are the recurring patterns that show up in GCP inspection findings, monitoring escalations, and warning letters. No company names, just the patterns.

**Informed consent defects.** Consent dated after a study procedure, missing investigator signature, wrong consent version, or no re-consent on an updated version. Consent is the most-cited GCP source issue and is verified 100% for a reason.

**No source for CRF data ("CRF as source by default").** A CRF field has data but there is no independent source document and the field was never designated as eSource. Inspectors call this unverifiable data. The fix is the source location list and discipline about what is and is not source.

**Backdating and non-contemporaneous entries.** Notes written days or weeks after the event with the original visit date, no late-entry annotation, no current date for the act of writing. This breaks Contemporaneous and is a serious integrity flag.

**Transcription errors that survive monitoring.** CRF values that do not match source and were never queried, indicating SDV was not done or not done well on critical data.

**Corrections that obscure the original.** Whiting out, overwriting, or single-line cross-outs without initials, date, and reason on paper; or electronic edits with no audit-trail reason. Good correction practice is one line through, correct value, initials, date, reason if needed. See [good documentation practices](/articles/good-documentation-practices).

**Certified copies that are not certified, or that lose context.** Scans with no certification statement, or PDFs of dynamic records that drop the audit trail and metadata, then the originals destroyed. Now there is no defensible source at all.

**Missing or unmaintained source location list.** No document defining where source lives, so monitoring is ad hoc and gaps go unnoticed.

**Unreported safety data found only in source.** An AE or SAE documented in the chart but never entered in the CRF or reported, found during SDR. This is both a safety failure and a data-completeness failure.

**Selective retention.** Repeat assessments, re-tests, or "failed" readings discarded so only favorable data remains. This breaks Complete and Original and looks like data manipulation.

**EHR access and certified-copy problems.** Source in a hospital EHR that the sponsor cannot access for verification, and no certified copies provided to the site file, so the data cannot be source-verified during monitoring or produced during inspection.

**Over-reliance on SDV as the only control.** Treating 100% SDV as a substitute for quality at the source. SDV catches transcription errors; it does not catch a fabricated source or a flawed process. Centralized monitoring and SDR are needed alongside it.

For how these get cited and how to respond, see [GCP audits and inspections](/articles/gcp-audits-and-inspections) and [FDA inspection readiness](/articles/fda-inspection-readiness).

---

## Interview-ready: questions you will be asked and how to answer

**"What is the difference between source data, source documents, and the CRF?"**
Source data is the information in original records and certified copies needed to reconstruct the trial. Source documents are the objects holding that information (charts, worksheets, lab records, ePRO systems). The CRF is the form on which protocol-required data is reported to the sponsor; it is a transcription of source unless a field is explicitly designated as eSource.

**"What does ALCOA stand for, and give a clinical example of each failure?"**
Attributable, Legible, Contemporaneous, Original, Accurate, plus Complete, Consistent, Enduring, Available. Then give crisp examples: unsigned vitals sheet (not attributable), note written two weeks late with the visit date (not contemporaneous), consent dated after the first procedure (not consistent), re-test kept but failed run discarded (not complete). Concrete examples are what separate a strong answer.

**"What is SDV and how is it different from SDR and from monitoring overall?"**
SDV is comparing CRF data to source to confirm accuracy and completeness. SDR is reviewing the source itself for protocol compliance, safety, and quality, which is broader. Monitoring is the whole oversight activity that includes both, plus site management, drug accountability, and centralized review.

**"Do you have to do 100% SDV?"**
No. The 2013 FDA risk-based monitoring guidance and ICH E6(R2) section 5.0 support targeted, risk-based SDV focused on critical data and processes. But informed consent, eligibility, primary endpoint, and SAE data are typically verified 100% regardless. The model and rationale are documented in the clinical monitoring plan and a risk assessment.

**"What is a certified copy and when can you destroy the original?"**
A copy confirmed, by a dated signature or a validated process, to carry the same information as the original along with its context, content, and structure. You may retire the original only when a faithful certified copy exists, your procedures and applicable law allow it, and for electronic originals the audit trail and metadata are preserved. A flat scan that loses the dynamic record's audit trail is not a faithful certified copy.

**"You find a CRF value that does not match the source. What do you do?"**
Confirm which is the source per the source location list, do not correct the CRF myself, raise a data query for the site to resolve, ensure the correction preserves the original entry via the audit trail or proper paper correction, document it in the visit report, and watch for a pattern that would signal a site-level process problem.

**"When is the eCRF the source?"**
When data is entered directly with no prior record and the field is designated as eSource in the source location list, with the system validated and the originator captured per the 2013 FDA electronic source guidance. ePRO is the classic case: the subject is the originator and there is nothing upstream to verify against.

**"Who owns the data at the site, and what is the monitor's boundary?"**
The investigator owns the data and is accountable for its accuracy. The monitor verifies and queries but never enters or corrects site data. Crossing that line is a data integrity problem.

**"What are the most common GCP source findings?"**
Consent defects, CRF data with no source, non-contemporaneous or backdated entries, corrections obscuring originals, uncertified copies, and safety data in source that was never reported. Lead with consent; it is the most frequent.

---

## Practical tips

- Build the source data location list before the first subject and treat it as a living document. Most source confusion dies here.
- Verify consent first, every visit. A consent failure can invalidate everything downstream for that subject.
- For electronic source, learn to read the audit trail. "The number matches" is not enough if the audit trail shows it was changed without a reason.
- Train sites that a late entry is acceptable if it is annotated as a late entry with the actual date of writing. Silent backdating is not.
- Never destroy a paper or electronic original until you have confirmed a faithful certified copy exists and your SOPs and local law permit it.
- When you see one transcription error, look for three. Single errors are noise; clusters are a process signal.
- Keep SDR muscle, not just SDV muscle. The findings that hurt subjects (unreported AEs, prohibited meds, eligibility violations) live in the source, not in the CRF-versus-source comparison.
- Document what you verified and what you did not. A visit report that implies full SDV when only critical fields were checked is itself a record problem.

### Related reading

- [ICH E6 Good Clinical Practice](/articles/ich-e6-good-clinical-practice)
- [Risk-based monitoring in clinical trials](/articles/risk-based-monitoring-clinical)
- [Clinical QA and GCP data integrity](/articles/clinical-qa-gcp-data-integrity)
- [ALCOA+ in detail](/articles/alcoa-plus-deep-dive)
- [Good documentation practices](/articles/good-documentation-practices)
- [Static and dynamic records and true copies](/articles/static-dynamic-records-true-copies)
- [Audit trail design and review](/articles/audit-trail-design-and-review)
- [eConsent and decentralized trials](/articles/econsent-and-decentralized-trials)
- [Trial master file (eTMF)](/articles/etmf-trial-master-file)
- [GCP audits and inspections](/articles/gcp-audits-and-inspections)
