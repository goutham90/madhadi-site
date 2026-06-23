---
title: "Static vs Dynamic Records, True Copies, and Source Data Verification"
description: "How to tell a static record from a dynamic one, what makes a true copy defensible, and how source data verification protects the integrity of regulated data."
pubDate: 2026-06-20
tags: ["data-integrity", "true-copy", "dynamic-records", "alcoa", "chromatography", "raw-data", "audit-trail"]
pillar: "data-integrity"
tier: "Intermediate"
---

A chromatogram printed to PDF and a chromatogram living inside its data system are not the same record, even when the picture on the page looks identical. One can be reintegrated, re-baselined, and replotted. The other cannot. Inspectors know this difference cold, and it is one of the fastest ways they separate a quality unit that understands its data from one that does not. If your batch record review depends on a printout that hides the manipulable data underneath, you have a problem you may not have discovered yet.

This article covers three connected ideas that regulators test directly: the distinction between static and dynamic records, what a true copy is and how to certify one so it holds up, and source data verification as the act of proving a copy or a transcription faithfully represents its source. Get these right and most of the rest of a data integrity program becomes easier. Get them wrong and you can pass internal review for years while sitting on records that will not survive an inspection.

---

## The static vs dynamic distinction

### What the terms mean and why they matter

A **static record** is a fixed-format record that does not allow interaction. Once created, its content and the relationships within it are frozen. A paper logbook entry is static. A scanned image of a signed form is static. A PDF of a result is static in the sense that you read it as a flat document, with no ability to re-query the underlying values.

A **dynamic record** allows interaction between the user and the record content. You can search it, query it, reprocess it, change the view, and the record responds. A chromatographic data file inside a chromatography data system (CDS) is dynamic: an analyst can change integration parameters, adjust the baseline, exclude peaks, and recalculate the result. A spreadsheet with live formulas is dynamic. A spectral data file you can re-baseline and re-quantify is dynamic.

The distinction is not academic. The FDA defined these exact terms in its 2018 guidance **Data Integrity and Compliance With Drug CGMP: Questions and Answers** (final, December 2018). The guidance states, in plain language, that for records that are dynamic, the original dynamic file must be retained in a form that preserves its dynamic nature. The MHRA **GXP Data Integrity Guidance and Definitions** (March 2018) uses the same static/dynamic split and ties it directly to what counts as raw data and a true copy. The PIC/S guidance **PI 041, Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments** (final July 2021) carries the same concept.

> A dynamic record format, such as a chromatogram, allows an interactive relationship between the user and the record content. (Paraphrasing the FDA 2018 Q&A definition.)

### Why this is one of the most important DI concepts

The reason regulators hammer this point: a static printout can conceal a dynamic original that was manipulated. If an analyst integrates a chromatogram, gets an out-of-specification result, reintegrates to bring the peak inside spec, prints only the passing version, and discards the failing run, the printout shows a clean passing result. The fraud lives in the dynamic file and its audit trail, not on the page. Requiring retention and review of the dynamic record, with its audit trail, is what makes that manipulation detectable.

So the rule that flows from the distinction is simple to state and consequential to implement: **if the record is dynamic, you must retain and review it in dynamic form.** A printout or PDF of a dynamic record is not the complete record. It can be a useful summary, it can even be a true copy of the static portion, but it does not replace the dynamic original.

### Worked example: same result, two record types

Consider an assay result of 99.4 percent for a drug substance, generated on an HPLC.

| Attribute | Static printout (PDF) | Dynamic CDS data file |
|---|---|---|
| Shows the final result | Yes, 99.4% | Yes, 99.4% |
| Shows integration parameters used | Sometimes, as printed text | Yes, and they are editable |
| Allows reintegration | No | Yes |
| Contains the full audit trail of changes | No | Yes |
| Reveals prior integrations or aborted runs | No | Yes, if not deleted |
| Reveals who changed what and when | No | Yes |
| Counts as the complete record | No | Yes |

Both objects display 99.4 percent. Only the dynamic file lets a reviewer confirm the 99.4 percent was produced once, by an authorized analyst, with method-defined integration, and was never quietly replaced. That is the whole point.

---

## What counts as raw data, and where the original lives

### Defining raw data and source data

Before you can decide what to copy or verify, you have to know what the original is. **Raw data** (the term in GMP and analytical contexts) and **source data** (the parallel term in GCP) both mean the first capture of an observation, the record from which everything downstream is derived.

In nonclinical and analytical GMP, raw data is the original record of an observation: the instrument data file, the balance printout, the analyst's contemporaneous notebook entry, the original electronic acquisition. ICH guidance and the GLP regulation in the United States, **21 CFR Part 58** for nonclinical laboratory studies, both anchor on the idea that raw data is the first-recorded result.

In clinical trials, **ICH E6(R2) Good Clinical Practice** (and the structure carried into E6(R3), adopted in 2025) defines source data as all information in original records and certified copies of original records of clinical findings, observations, and other activities needed for reconstruction and evaluation of the trial. Source documents are where source data first appears: hospital records, lab reports, subject diaries, instrument outputs, certified copies of any of those.

The practical test: **the original is the first durable, contemporaneous capture in the format in which it was first captured.** If the instrument writes a binary data file, that file is the original. If a value is first written by hand on a worksheet, that worksheet is the original. You do not get to declare a downstream transcription the original because it is more convenient to store.

### Why the original format matters

A common error is to treat a transcribed or transformed version as equivalent to the source. It usually is not, because the transformation loses something: metadata, audit trail, the ability to reprocess, or simply the chance of a transcription error. The MHRA guidance is explicit that the format of the original record must be considered, and that a true copy must preserve the meaning and content of the original, including its dynamic nature where applicable.

| Original capture | Where the true original lives | Risk if you treat a copy as original |
|---|---|---|
| HPLC chromatogram | CDS data file plus audit trail | Lose reprocessing history and reintegration evidence |
| Analytical balance reading | Balance printout or interfaced electronic record | Transcription error, no second-person verify |
| pH meter reading | Instrument display, manually recorded | No metadata, depends entirely on the writer |
| Stability chamber temperature | Datalogger electronic file | Lose excursion timing and alarm history |
| Subject blood pressure in a trial | Source document at the site | Cannot reconstruct the clinical observation |

---

## True copies

### What a true copy is and the regulatory basis

A **true copy** is a copy of original data that has been verified to preserve the full content and meaning of the original record. The MHRA **GXP Data Integrity Guidance and Definitions** (2018) frames it as a verified and certified copy, in any media, that is exact and complete and that holds the original's full content and meaning, including metadata and the original's dynamic nature where those apply.

The reason true copies exist as a concept: organizations need to migrate, archive, scan, and back up records all the time. A true copy gives you a defensible way to retire or replace an original, or to provide a copy to an inspector or a partner, while preserving the legal and scientific weight of the original. Without the true-copy mechanism, every original would have to be kept forever in its first format, which is not workable across decades of storage and platform changes.

Both the FDA 2018 Q&A and ICH GCP recognize certified copies. Under **ICH E6 Good Clinical Practice**, a **certified copy** is a copy in any media, verified either by a dated signature or by a validated generating process, that carries the same information as the original, including the data describing its context, content, and structure.

### The decisive rule: dynamic stays dynamic

The most important and most-failed true-copy rule: **a true copy of a dynamic record must preserve the dynamic nature of that record.** You cannot make a true copy of a dynamic chromatogram by printing it to PDF, because the PDF cannot be reintegrated and carries no audit trail. The PDF can be a true copy of a static report, but it is not a true copy of the dynamic data file.

This is why simply printing everything and filing the paper does not solve a data integrity problem for dynamic systems. If the original is dynamic, the true copy has to be dynamic too: an exported data file that can still be opened and reprocessed in the same or a compatible system, with its metadata and audit trail intact, or a verified migration into a target system that preserves all of that.

### What goes into making a copy a true copy

A copy becomes a true copy only when three things are present:

1. **Completeness.** All content, metadata, audit trail, and (for dynamic records) the dynamic functionality are present in the copy.
2. **Verification.** Someone or some validated process has confirmed the copy matches the original.
3. **Certification.** A record exists stating that the copy was verified, by whom or by what process, and when.

Verification can be human (a documented comparison and signature) or automated (generation through a validated process, such as a qualified backup or migration routine that checks integrity). For high-volume electronic records, automated verification through a validated process is the only realistic route, and it is fully accepted by the guidances, provided the validation actually demonstrates faithful copying.

### How to certify a true copy: step by step

**For a manual true copy (for example, scanning a paper record):**

1. Confirm you have the genuine original, not an earlier copy.
2. Reproduce the record completely, all pages, both sides, attachments, and any associated metadata such as the original date.
3. Verify the copy against the original, page by page, for legibility and completeness. Confirm nothing is cut off, no page is missing, and any colored or low-contrast detail is still readable.
4. Apply the certification statement. A common form: "I certify this is a true copy of the original record," followed by the verifier's name, signature or initials, and date.
5. Record the verification in a log or on the copy itself, including the identity of the original (document number, batch, study, sample ID).
6. Define the status of the original: retained, archived, or destroyed per a controlled procedure. Destroying an original is only acceptable when a certified true copy exists and your procedure permits it.

**For an electronic true copy (export, backup, or migration of a dynamic record):**

1. Establish the validated copying or migration process. This is a one-time validation effort, not a per-record decision.
2. Define what "complete" means for the record type: the data file, the audit trail, the method, the metadata, the user attributions.
3. Execute the copy through the validated process.
4. Verify integrity, ideally automatically, for example by checksum or hash comparison, record counts, and a sample re-open-and-reprocess test confirming the copy still behaves dynamically.
5. Generate the certification automatically (the validated process attests to the copy) or apply a manual certification for the batch of copies.
6. Confirm the copy is readable and reprocessable in the target environment before retiring the source.

### Certification statement: worked example

A defensible paper certification on a scanned worksheet:

> **TRUE COPY CERTIFICATION**
> This is a true and complete copy of the original record.
> Original record: Analytical Worksheet WS-2026-0412, Batch B-77310, pages 1 to 4.
> Original status after copy: retained in QC archive, box QC-A-219.
> Copy verified complete and legible against original.
> Verified by: (name), QC Analyst II. Signature / Date: (sig) / 2026-06-18.

For an electronic export, the equivalent lives in a migration or export report:

| Field | Value |
|---|---|
| Source system | CDS, instrument HPLC-07 |
| Records exported | 1,284 data files plus audit trails |
| Export method | Validated archival export routine, ARC-EXP v3.2 |
| Integrity check | SHA-256 hash match, 1,284 of 1,284 passed |
| Dynamic-reopen sample test | 25 files re-opened and reintegrated successfully |
| Certified by | Validated process plus QA reviewer (name) |
| Date | 2026-06-18 |

### Acceptance criteria for a true copy

You know a true copy is done correctly when:

- The copy contains the complete content and meaning of the original, including metadata and audit trail.
- For a dynamic original, the copy is still dynamic (reprocessable), not a flattened image.
- A verification step was performed and is documented (human signature or validated-process attestation).
- A certification statement exists that identifies the original, the verifier or process, and the date.
- If the original was destroyed, a controlled procedure authorized it and the certified copy predates the destruction.
- An inspector can take the copy and reconstruct the record exactly as they could from the original.

---

## Source data verification (SDV)

### Two related meanings, both worth knowing

The term **source data verification** is used in two adjacent ways, and a strong candidate distinguishes them in an interview.

**In the clinical (GCP) sense,** SDV is the process of comparing data recorded in the case report form (CRF) against the source documents at the trial site, to confirm the data are accurate, complete, and consistent with the source. This is a core monitoring activity under ICH E6. It answers: does the data in the database match the original clinical record?

**In the broader data integrity sense,** source data verification is the general act of confirming that any derived, transcribed, or copied record faithfully represents its source. Verifying a manual transcription against an instrument printout is SDV. Confirming a LIMS-imported result matches the instrument output is SDV. The true-copy verification step above is a form of SDV.

Both meanings share the same logic: data gets less trustworthy each time it is moved or transformed by a human, so you verify the transformation against the source.

### Why SDV exists: the regulatory and risk basis

ICH E6(R2) requires the sponsor to verify, through on-site or centralized monitoring, that reported trial data are accurate, complete, and verifiable from source documents. The **ALCOA+** attributes (Attributable, Legible, Contemporaneous, Original, Accurate, plus Complete, Consistent, Enduring, Available) sit underneath this. SDV principally defends **Accurate** and **Complete**: it catches transcription errors, omissions, and mismatches between what happened and what was recorded.

The risk rationale is blunt. A single mistyped digit in a transcribed potency value can ship a batch that should have failed. A blood pressure recorded as 120 in the database but 102 in the source could change an adverse-event signal. SDV is the control that catches the gap between source and derived record before it causes harm or a false conclusion.

### Risk-based SDV: the modern approach

100 percent SDV of every field in every clinical trial is expensive and, evidence has shown, not where most errors hide. ICH E6(R2) introduced and E6(R3) reinforces **risk-based monitoring**, where SDV is targeted at critical data and critical processes rather than applied uniformly. The FDA guidance **Oversight of Clinical Investigations, A Risk-Based Approach to Monitoring** (2013) and the later **A Risk-Based Approach to Monitoring of Clinical Investigations, Questions and Answers** (2023) support targeting verification by risk.

The practical model: identify critical data (primary endpoint, key safety data, eligibility, informed consent, dosing) and verify those at or near 100 percent, while applying reduced or sampled SDV to lower-risk fields, backed by **centralized monitoring** and statistical checks that flag anomalies across sites.

| Data category | Typical SDV intensity | Rationale |
|---|---|---|
| Primary efficacy endpoint | 100% | Drives the trial conclusion |
| Serious adverse events | 100% | Patient safety, regulatory reporting |
| Informed consent presence and dates | 100% | Ethical and legal gate |
| Eligibility / inclusion-exclusion | 100% or high | Validity of the population |
| Concomitant medications | Sampled / targeted | Lower impact, high volume |
| Routine demographics | Sampled / centralized check | Low risk, machine-checkable |

### How to perform SDV: step by step (clinical)

1. Define critical data and critical processes in the monitoring plan before the trial starts.
2. Set SDV levels per data category in the monitoring plan, risk-based, not uniform by default.
3. At the site (or via remote access to source), open the source document for a subject and visit.
4. Compare each in-scope CRF field against the source value. Confirm the value, the units, the date, and the attribution.
5. Resolve discrepancies through a query to the site; the site corrects the CRF or explains the difference, with an audit trail.
6. Document the SDV performed: which subjects, which fields, which visits, found discrepancies, and resolution.
7. Feed findings back into the risk assessment; rising discrepancy rates at a site trigger more SDV or other action.

### How to perform SDV: step by step (GMP transcription or import)

1. Identify the source record (instrument printout, data file, original worksheet).
2. Identify the derived record (the transcription, the LIMS entry, the report value).
3. Compare value, units, identifiers, and date. For interfaced data, confirm the import matched the source for a defined sample, or rely on a validated interface that removes manual transcription entirely.
4. Have a second qualified person perform the check for critical manual transcriptions (the classic "performed by / verified by" second-person review).
5. Document the verification with initials and date next to the value or in a review record.
6. Where possible, eliminate the transcription step by interfacing instruments directly, which removes the error source rather than just catching it.

### Acceptance criteria for SDV

- Critical data are verified against source at the level the risk-based plan requires.
- Every in-scope value matches source for value, units, date, and attribution, or a documented, resolved discrepancy explains the difference.
- The verification itself is attributable and dated (you can see who verified and when).
- Discrepancy rates are trended and fed back into the monitoring or review approach.
- For GMP, critical manual transcriptions carry a documented second-person verification, or the transcription was eliminated by a validated interface.

---

## Roles and responsibilities

Clear ownership is what keeps these controls from falling between functions. The split below is typical; titles vary by organization.

| Activity | Primary owner | Supporting roles |
|---|---|---|
| Defining what is raw data / source data for a system | System owner and SME | QA, validation |
| Deciding a record is dynamic and requires dynamic retention | SME (e.g. analytical lead) | QA, IT/system owner |
| Validating the copy / migration / archival process | Validation lead | IT, QA approval |
| Performing a manual true copy and certifying it | The person making the copy | Second verifier where required |
| Certifying electronic true copies | Validated process plus QA oversight | IT, archivist |
| SDV in clinical trials | Clinical monitor (CRA) | Data management, site staff, sponsor QA |
| Second-person verification of critical transcriptions | Independent qualified reviewer | The original recorder |
| Audit trail review tied to dynamic records | Reviewer of the record (often QC then QA) | System owner |
| Approving destruction of an original after true copy | QA, per records procedure | Records management |
| Vendor-supplied archival or migration tooling | Vendor under a quality/service agreement | Validation, IT, QA |

QA's role is oversight and approval, not performing every copy or every SDV check. The system owner owns the lifecycle of the records in their system. The validation function owns proving the copy and migration processes actually preserve content and dynamic nature. SMEs decide what the original is and whether it is dynamic, because that is a scientific and system judgment, not a paperwork one.

---

## Common mistakes and inspection-finding patterns

These are the recurring failure modes that show up in published warning letters and inspection observations, described generically.

- **Treating a PDF or printout as the complete record for a dynamic system.** Reviewing only printed chromatograms while never reviewing the dynamic data file or its audit trail. This is among the most commonly cited data integrity gaps in laboratory inspections.
- **Reintegration without justification.** An analyst reprocesses a chromatogram to change a result, and there is no documented scientific rationale and no second-person review of the change. The dynamic record and audit trail expose this; the printout hides it.
- **"True copy" that is not.** Calling a flattened PDF of a dynamic record a true copy, when it cannot be reprocessed and carries no audit trail. It is a copy of the static view, not a true copy of the dynamic original.
- **Destroying originals without a certified copy.** Shredding worksheets or deleting data files after printing, with no validated copy process and no certification, so the original is simply gone.
- **No verification step.** Copies made and filed, but no documented comparison to the original and no certification, so there is no evidence the copy is faithful.
- **Audit trail not reviewed alongside the result.** Retaining the dynamic record but never looking at the audit trail, which defeats the purpose of keeping it dynamic.
- **Uniform 100 percent SDV used as a substitute for thinking.** Verifying every clinical field equally while missing that critical safety data needed deeper scrutiny and centralized anomaly detection.
- **Transcription left in place when it could be eliminated.** Manually keying instrument results into a LIMS when a validated interface was available, keeping an avoidable error source.
- **Backups assumed to be true copies without validation.** Treating routine IT backups as archival true copies when the restore-and-reprocess path was never tested.
- **Metadata stripped on copy.** Copying the data values but losing the metadata (who, when, instrument, method version) that gives the data its meaning.

---

## Interview-ready questions and strong answers

**What is the difference between a static and a dynamic record? Give an example.**
A static record is fixed-format with no interaction, like a paper logbook entry or a scanned image. A dynamic record lets the user interact with the content, like a chromatogram in a CDS that can be reintegrated and recalculated. The consequence is that a dynamic record must be retained and reviewed in dynamic form, because a printout can hide manipulation that only the dynamic file and its audit trail reveal. The FDA 2018 data integrity Q&A defines these terms directly.

**Can a PDF of a chromatogram be a true copy?**
It can be a true copy of the static report, but not of the dynamic data file. A true copy of a dynamic record must preserve the dynamic nature, meaning it has to remain reprocessable with its metadata and audit trail. A flat PDF cannot be reintegrated and carries no audit trail, so calling it a true copy of the dynamic original is wrong.

**What makes a copy a true copy?**
Three things: it is complete (all content, metadata, audit trail, and dynamic functionality for dynamic records), it has been verified against the original, and it is certified, meaning there is a record of who or what verified it and when. Verification can be a person with a dated signature or generation through a validated process.

**What is raw data, and how do you decide what the original is?**
Raw data is the first durable, contemporaneous capture of an observation in the format it was first captured. The original is that first capture, not a downstream transcription. If an instrument writes a binary file, that file is the original; if a value is first written by hand, that worksheet is the original. You do not get to declare a more convenient copy the original.

**What is source data verification, and is 100 percent SDV required?**
In GCP, SDV is comparing CRF data against source documents to confirm accuracy and completeness. More broadly it is confirming any derived record faithfully represents its source. 100 percent SDV is not required and is no longer best practice. ICH E6(R2)/(R3) and FDA risk-based monitoring guidance support targeting verification at critical data and critical processes, with centralized monitoring catching anomalies elsewhere.

**An analyst reintegrated a chromatogram and the result changed from failing to passing. What do you check?**
I go to the dynamic data file and the audit trail, not the printout. I confirm there is a documented scientific justification for the reintegration, that it followed a defined procedure, that the change is attributable and dated, and that a second qualified person reviewed it. If the original failing integration was deleted or there is no justification, that is a data integrity finding, possibly a falsification concern, and it gets escalated and investigated.

**How do you defend destroying an original record?**
Only after a certified true copy exists, made through a validated or verified process, and only if a controlled records procedure permits it. The certification predates the destruction, identifies the original, and names the verifier or process. Without that, destroying an original is indefensible.

---

## Practical tips

- When you build review procedures for any dynamic system, write the step that requires reviewing the dynamic record and its audit trail, not just the printout. If your SOP only mentions the report, your reviewers will only look at the report.
- Validate your archival and migration tooling once, properly, including a re-open-and-reprocess test on a sample of migrated dynamic records. That one validation lets every later true copy ride on a defensible process.
- Eliminate manual transcription wherever a validated interface is available. Catching transcription errors with SDV is good; removing the transcription step is better.
- Keep the certification statement boring and complete: identify the original, the verifier or process, and the date, every time. Inspectors trust a consistent, dull certification more than an ornate one.
- For clinical SDV, write the risk-based logic into the monitoring plan before first patient in, and trend discrepancy rates by site so the plan can react.
- Never let "we printed it" stand in for "we retained the dynamic record." They are not the same control.

---

## Related reading

- [Data integrity foundations](/articles/data-integrity-foundations)
- [ALCOA+ in detail](/articles/alcoa-plus-deep-dive)
- [Chromatography data system integrity](/articles/chromatography-data-system-integrity)
- [Audit trail design and review](/articles/audit-trail-design-and-review)
- [Operationalizing audit trail review](/articles/operationalizing-audit-trail-review)
- [Source data and SDV in clinical trials](/articles/source-data-and-sdv-clinical)
- [Hybrid paper and electronic records](/articles/hybrid-paper-electronic-records)
- [Data lifecycle and metadata](/articles/data-lifecycle-and-metadata)
- [Good documentation practices](/articles/good-documentation-practices)
- [Data criticality and data risk](/articles/data-criticality-and-data-risk)
- [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11)
- [Data migration validation](/articles/data-migration-validation)
