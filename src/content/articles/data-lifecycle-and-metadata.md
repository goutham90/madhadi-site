---
title: "The Data Lifecycle in GxP: From Generation to Archival"
description: "How regulated data moves through its full lifecycle, and where integrity breaks down at each stage. Static vs dynamic records, original vs true copy, and why metadata is part of the record."
pubDate: 2025-09-17
tags: ["data-integrity", "GxP", "FDA", "metadata", "data-lifecycle"]
pillar: "data-integrity"
tier: "Intermediate"
---

Most data integrity programs focus on what happens at the point of data generation: the analyst runs a test, the instrument records a result, the operator signs the batch record step. That is the visible part. The failure modes that actually drive warning letters are often downstream, in how data is processed, reviewed, transferred, stored, and eventually retrieved.

This article covers the full data lifecycle and the specific integrity risks at each stage. It applies across the GxPs: a chromatography result in a QC lab, a sensor trace from a manufacturing historian, a case report form value in a clinical trial, and a complaint record in a device quality system all move through the same arc. It is written for practitioners who already understand ALCOA+ and are thinking about how to build governance around the entire life of a data asset, not just its creation. If you are still building the foundation, start with [data integrity foundations](/articles/data-integrity-foundations) and [ALCOA+ in detail](/articles/alcoa-plus-deep-dive), then come back here.

---

## The Lifecycle Stages

### Why the lifecycle framing exists at all

Regulators moved to a lifecycle model because integrity findings kept appearing in places that a creation-only control set did not cover: deleted raw files, reprocessed chromatograms, untested backups, records that could not be produced during an inspection. The [FDA December 2018 data integrity guidance](https://www.fda.gov/media/119267/download), titled "Data Integrity and Compliance With Drug CGMP: Questions and Answers," describes the data lifecycle as "the totality of processes and activities associated with data from initial generation and recording, through processing, use, data retention, and retrieval, through to data disposition."

The MHRA's "GXP Data Integrity Guidance and Definitions" (March 2018) uses the same framing, and PIC/S guidance PI 041-1 (July 2021), "Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments," extends it with detailed expectations for each stage. The WHO has issued a parallel annex on good data and record management practices, and in the clinical world ICH E6(R2) Good Clinical Practice carries the same principle for trial data. The documents agree on the core point: integrity is a property of the whole lifecycle, not a checkbox at creation.

The legal anchor in the US predates all of the guidance. 21 CFR 211.180 and 211.194 require complete records and that they be retained and available; 21 CFR Part 11 governs electronic records and signatures; the EU equivalents sit in EudraLex Volume 4 Chapter 4 (Documentation) and Annex 11 (Computerised Systems). The guidance documents interpret those rules across the lifecycle, they do not invent new authority.

### The seven stages

In practice the lifecycle maps to seven stages for most GxP data:

1. **Generation**: data is created by an instrument, a human, or a system.
2. **Processing**: raw data is transformed (integration, calculation, aggregation).
3. **Review**: data is assessed against specifications and approved.
4. **Reporting**: data is summarized and included in decisions or submissions.
5. **Retention**: data is stored and maintained.
6. **Retrieval**: data is accessed for review, investigation, or inspection.
7. **Archival and disposition**: data is transferred to long-term storage or destroyed per schedule.

Each stage has distinct integrity risks. A program that only addresses generation will have gaps at processing, review, and archival that inspectors will find. The table below summarizes the dominant risk and the primary control at each stage.

| Stage | Dominant integrity risk | Primary control |
|-------|------------------------|-----------------|
| Generation | Wrong thing treated as the original; uncontrolled paper | Define the raw data; restrict local saves |
| Processing | Reintegration without justification; transcription error | Locked methods; reason codes; validated calculations |
| Review | Reviewer never sees the level where manipulation hides | Audit trail review built into the release flow |
| Reporting | Transcription and transfer corruption; selective reporting | Verified transfers; completeness rule |
| Retention | Legibility loss; untested backups; format obsolescence | Restoration testing; format migration plan |
| Retrieval | Records exist but cannot be produced promptly | Searchable archive; tested, timed retrieval |
| Disposition | Premature destruction; destruction under legal hold | Approved retention schedule; legal hold process |

A useful way to govern this is to require, for every GxP system, that someone can name the control at each of the seven rows. If a row is blank, that is the next finding waiting to happen.

---

## Stage 1: Generation

Generation is where the primary record is created. The key question at this stage is: what is the original?

For paper-based systems, the original is the first recorded version: the raw entry in the notebook, the printed chart recorder trace, the manual logbook line. A photocopy is not the original. Good documentation behavior governs this point, and it is worth reading [good documentation practices](/articles/good-documentation-practices) alongside this one.

For electronic systems, FDA's position is explicit: the electronic raw data is the original, not any printout derived from it. A chromatogram printed from a chromatography data system is a representation of the original. The raw data file, the binary or structured file containing the acquisition data and audit trail, is the original that must be retained. This has been the basis of many warning letters where firms retained printed chromatograms but deleted the underlying electronic files.

### Static vs dynamic records

The distinction matters for understanding what "original" means, and it is one of the most tested concepts in an inspection. A dedicated treatment lives in [static and dynamic records and true copies](/articles/static-dynamic-records-true-copies); the short version follows.

- A *static record* cannot be meaningfully interacted with after creation: a PDF, a printed report, a scanned image. Its content is fixed at the time of creation.
- A *dynamic record* can be processed, requeried, and reanalyzed: a chromatography data system raw data file, an electronic laboratory notebook dataset, a LIMS result record, a manufacturing execution system batch object. The original dynamic record preserves all the processing metadata and allows reconstruction of every analytical decision.

For dynamic records, retaining only a static export (a PDF of the result) loses the ability to verify that the result correctly represents the raw data. The MHRA guidance is blunt here: a static printout of a dynamic record is not a true copy, because it does not carry the metadata and reprocessing capability of the source.

### True copy and the original/copy trap

A *true copy* is a copy of original data that has been verified to preserve the full content and meaning, including all metadata and, for dynamic records, the dynamic nature of the source. If a true copy is created and verified, the original may in some defined cases be retained as the copy. The trap is treating an export as a true copy when it has silently dropped audit trail entries, timestamps, or reprocessing capability. Verification, not assumption, is what makes a copy "true," and the verification itself must be recorded (who verified, against what, when).

### How to define the raw data, step by step

The single most useful generation control is a written definition of raw data for each system. Without it, "the original" is an opinion. The procedure:

1. List every GxP system that generates or holds data.
2. For each, identify the file or record that is created first and contains the complete result plus its metadata and audit trail.
3. State explicitly whether that record is static or dynamic.
4. Define where it is stored, who owns it, and the retention period.
5. State what is *not* the raw data (for example, the PDF printout, the local working copy) so there is no ambiguity during review or destruction.
6. Approve the definition through the quality system and reference it in the system's validation package and standard operating procedures.

**Acceptance criteria.** A reviewer or inspector can ask "what is the raw data for this test?" and be shown a single, approved answer that matches what the system actually retains. The retention configuration of the system enforces it (raw files are not deletable by the analyst). The definition covers metadata and audit trail, not just result values.

### A worked example

An analyst acquires a liquid chromatography injection. The chromatography data system writes a result set: the chromatogram, the integration events, the method, the sequence, the audit trail, the user and instrument identifiers, and the acquisition timestamp. That bundle is the original dynamic record. If site procedure says "print the result, file the printout, then purge the project from the system to free disk space," the site has destroyed the original and kept a static representation. Even with no intent to deceive, the record can no longer be reconstructed, which is the violation an investigator will cite.

A concrete control at generation: configure the system so analysts cannot save acquisitions to a local drive or a working folder outside the audited project structure. Local "scratch" saves are a recurring root cause because they create a copy that lives outside the audit trail, which is exactly the gap that enables a hidden "trial" injection. The same logic applies outside the lab. A device test bench that writes results to an engineer's laptop, or a manufacturing sensor that buffers to a local cache before the historian ingests it, both create un-audited intermediate copies.

---

## Stage 2: Processing

Processing is where raw data is transformed into reportable results. In analytical chemistry, this typically means peak integration, baseline correction, calculation against a standard, and evaluation against a specification limit. In manufacturing it can mean smoothing, scaling, or aggregating a sensor trace. In clinical data management it means edit checks, queries, and derivations. The risks rhyme across all three.

The integrity risks at this stage are well documented in enforcement actions:

**Integration parameter manipulation.** In chromatography data systems, an analyst can reprocess an injection with different integration parameters, wider peak windows, or different baseline assignments, to change the peak area and therefore the result. When this is done without documented scientific justification, it is a data integrity violation regardless of whether the original data file is retained. [Chromatography data system integrity](/articles/chromatography-data-system-integrity) covers the system-specific controls, and the [FDA warning letters patterns](/articles/fda-warning-letters-patterns) article shows how often this appears in enforcement.

**Selective reprocessing.** Not all reprocessing is illegitimate. Integration methods need to be validated and locked before use. When reprocessing occurs after reviewing a result, the audit trail should capture who initiated the reprocessing, what parameters changed, the previous values, and what justification was provided. Systems that log "reprocessed" without capturing the previous parameter values, or that do not require a reason, are a control gap.

**Calculation errors.** Manual transcription of instrument readings into calculated results, for example reading a UV absorbance and manually calculating concentration, introduces transcription risk. Validated calculation tools, formula locks in spreadsheets, or direct LIMS interfaces reduce this risk. Spreadsheets used for GxP calculations are a system in their own right and need validation; [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation) addresses how far that has to go.

### Reading the audit trail at this stage

The audit trail at processing should capture original values, changed values, the identity of who made each change, the timestamp, and, for controlled changes, the reason. The signals an experienced reviewer looks for:

- Injections or runs aborted or deleted shortly before a "good" run on the same sample.
- Reintegration that moves a result from just outside specification to just inside it.
- A reason of "operator error" or "no peak" applied repeatedly to inconvenient results.
- System clock changes near the time of acquisition (see [time stamps and system clock control](/articles/time-stamps-and-system-clock-control)).
- Reprocessing performed by a different user from the one who acquired the data, with no second-person rationale.

None of these is proof of falsification on its own. Each is a question that the record should be able to answer. For the technical design that makes these signals visible, see [audit trail design and review](/articles/audit-trail-design-and-review).

### A worked processing audit trail entry

A defensible reprocessing event looks like this in the audit trail:

| Field | Value |
|-------|-------|
| Record | Sample S-2045, injection 3, assay result |
| Action | Reintegration |
| Old value | Area 14,820; result 99.1% |
| New value | Area 15,060; result 100.7% |
| Reason | Manual baseline correction, shoulder peak not resolved by default method per OOS-2045 |
| Performed by | analyst.jdoe |
| Reviewed by | qa.msmith (second person) |
| Timestamp | 2025-09-12 14:07 site local |

What makes it defensible is that the prior value is captured, the reason references an investigation, and a second person reviewed it. Compare that to an entry that reads only "Reintegrated, area 15,060" with no prior value and no reason. The second entry is the finding.

---

## Stage 3: Review

Review is when a second person, typically QA or a supervising analyst, evaluates the data and decides whether it is acceptable. The integrity risks here are subtle but equally important.

**Review scope.** Reviewers often see summary data or final result reports, not the underlying raw data. A reviewer who sees "Result: 98.5%, PASS" without access to the raw chromatogram, the audit trail, and the sequence log cannot actually verify data integrity. Effective review requires access to the data at the level where manipulation could have occurred. The batch record review process should give reviewers that depth; see [batch record review in GMP](/articles/batch-record-review-gmp).

**Audit trail review.** FDA expects that audit trails are reviewed as part of the batch release process, not just at an annual periodic review. The 2018 guidance states that "the agency recommends routine scheduled audit trail review based on the complexity of the system and its intended use." In practice this means QA reviewers need access to audit trail records and need to know what anomalies to look for. Reviewers also need the authority to require source data when something looks off. For the operational mechanics, see [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).

**Review by exception.** For high-volume operations, 100% manual audit trail review is impractical. Risk-based review by exception is acceptable, prioritizing high-criticality systems, high-risk time periods (end of shift, weekend, out-of-specification events), and unusual patterns. The key is that the scope and approach are documented and justified, not that review is quietly eliminated. A defensible review-by-exception design ties the sampling rate to a documented risk assessment and still triggers full review on defined exception events.

**Who reviews matters.** Review independence is part of the control. The person who generated a result should not be the sole reviewer of the audit trail for that result. Segregation of duties at the review stage is one of the controls inspectors probe, and it connects to access design covered in [computerized systems access control and cybersecurity](/articles/csv-cybersecurity-access-control).

### A second-person review checklist

A practical reviewer checklist for a single QC result, usable as the spine of a procedure:

1. Result value matches the raw data and the reported significant figures.
2. The method and sequence used are the approved, locked versions.
3. Audit trail shows no unexplained deletions, aborts, or reprocessing.
4. Any reprocessing carries a prior value and an approved reason.
5. No system clock anomalies near acquisition.
6. The analyst is qualified and the account is theirs (no shared login).
7. Any out-of-specification or out-of-trend result is linked to an open or closed investigation.
8. The reviewer is independent of the person who generated the data.

**Acceptance criteria.** Each item is answerable from the record, the reviewer signs and dates, and the depth of review (summary only vs full audit trail) matches the documented risk-based policy.

---

## Stage 4: Reporting

Reporting is where data moves outside the generating system, into a batch record summary, a regulatory submission, a stability report, or a clinical study report. This stage introduces transfer risk.

**Data transfer integrity.** When data moves from one system to another, from a chromatography system to a LIMS, from LIMS to an enterprise resource planning system, from there to a submission template, the transferred values must match the originals. This sounds obvious. In practice, manual transcription is still common, and even automated transfers can corrupt, truncate, or misformat data without detection unless verified.

Verification methods include:

- Checksum or hash comparison between source and destination files.
- Row-count and sum reconciliation for numerical datasets.
- Spot-check review of transferred values against source records.
- Validated electronic interfaces with built-in error detection and exception handling.

Each method has a place. A validated interface is the strongest control because it makes verification continuous rather than a one-time event, but it still needs periodic confirmation that the interface has not drifted, for example after a system upgrade on either side. Treat an interface change as a change control event; see [change control for validated systems](/articles/change-control-validated-systems).

**Reporting scope.** The completeness principle of ALCOA+ applies at reporting: all results relevant to a quality decision must be reported, not just the passing ones. A batch record that summarizes results without disclosing the out-of-specification result that was "invalidated" is a completeness failure, regardless of whether the invalidation was technically justified. The handling of those results has to follow a documented [out-of-specification investigation process](/articles/oos-investigation-process), and the investigation outcome travels with the data.

**Rounding and reporting precision.** A quieter reporting risk is inconsistent rounding and significant-figure handling between the analytical method, the calculation tool, and the final report. Define rounding rules in the method, apply them once, and make sure the reported value is the value the specification is evaluated against. Rounding a result down into specification is a classic finding.

### Worked transfer verification

A numeric reconciliation makes "verified transfer" concrete. A LIMS exports 12 stability assay results to a report template:

| Check | Source (LIMS) | Destination (report) | Result |
|-------|---------------|----------------------|--------|
| Record count | 12 | 12 | Match |
| Sum of assay values | 1,193.4 | 1,193.4 | Match |
| Min / max | 98.7 / 101.2 | 98.7 / 101.2 | Match |
| Spot-check row 7 | 100.4 | 100.4 | Match |
| Out-of-spec flagged | 0 | 0 | Match |

The reconciliation is signed, dated, and filed with the report. If the destination sum had been 1,093.4, the mismatch would have caught a dropped or truncated value before the report informed a decision.

---

## Stage 5: Retention

Retention is where a lot of programs have quiet failures that do not surface until an inspection, or until someone tries to retrieve a record years later.

**Retention periods.** 21 CFR 211.180(a) requires that batch production and control records be retained "for at least 1 year after the expiration date of the batch" and, for certain over-the-counter drug products without expiration dating, 3 years after distribution. For records related to a New Drug Application or a Biologics License Application, retention obligations are defined in the relevant regulations and the marketing application commitments. EU GMP, in EudraLex Volume 4 Chapter 4, sets retention of at least one year past batch expiry and at least five years after certification, whichever is longer. For medical devices, US records under 21 CFR 820 (and the updated Quality Management System Regulation aligning with ISO 13485) must generally be retained for the design and expected life of the device but not less than two years from release; for clinical trials, ICH E6(R2) sets essential document retention tied to marketing application timelines. Many firms standardize on a single longer period to avoid tracking product-specific dates record by record. Whatever period is chosen, it has to be defined in a procedure and applied consistently.

**Retention media and format.** Records must remain legible and retrievable throughout the retention period. This creates specific obligations:

- Paper records must be stored under conditions that prevent deterioration. Thermal paper fades and is a known problem for long retention periods, so a verified true copy is often made at the time of generation.
- Electronic records must be backed up, with restoration tested periodically. A backup that has never been successfully restored is not functionally a backup.
- Proprietary file formats require either a long-term license for the rendering software or a migration plan. A raw data file that can only be opened by one software version, and that version is no longer supported, is a legibility problem waiting to surface.

The validation of backup and restore is its own discipline; see [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation).

**System decommissioning.** When a software system is retired, all GxP records it contains must either be migrated to a replacement system through a validated migration or archived in a format that remains accessible. Firms frequently underestimate the scope and decommission systems without confirming that all records transferred and that the archive is searchable. Migrating result values while losing the audit trail and metadata is the most common way this goes wrong. [Data migration validation](/articles/data-migration-validation) walks through how to verify a migration so the archived record is still complete and attributable.

### A retention schedule fragment

A retention schedule should be specific enough that a records owner can act without interpretation:

| Record type | Regulatory basis | Retention period | Owner | Media |
|-------------|------------------|------------------|-------|-------|
| Batch production record | 21 CFR 211.180(a) | Expiry + 1 yr, min 10 yr | QA Operations | Validated EDMS |
| Chromatography raw data | 21 CFR 211.194; Part 11 | Expiry + 1 yr, min 10 yr | QC Lab Systems | CDS archive (dynamic) |
| Stability data | 21 CFR 211.166 | Life of program + 1 yr | Stability | LIMS archive |
| Validation records | 21 CFR 211.180(d) | System life + retention | Validation | Validated EDMS |
| Complaint records (device) | 21 CFR 820 / QMSR | Device life, min 2 yr | Device QA | QMS |

**Acceptance criteria.** Every GxP record type maps to a row, each row cites a real regulatory basis, an owner is named, and the storage system enforces the period (records are not deletable before it expires).

---

## Stage 6: Retrieval

A record that exists but cannot be retrieved is not functionally available. FDA expects records to be producible promptly during an inspection, not after a multi-day retrieval effort from an off-site archive. The 2018 guidance ties this to 21 CFR 211.180(c), which requires that records be readily available for authorized inspection.

**Archive accessibility.** For electronic archives, the archive must be searchable, not just a dump of files. A LIMS archive that requires IT to restore a backup tape before a ten-year-old batch record can be read is a retrieval problem, even if the data technically still exists. Test retrieval on a defined schedule using realistic queries, for example "produce the full result set, including audit trail, for a named batch from a retired system," and time it. Inspection readiness depends on this working under pressure; see [FDA inspection readiness](/articles/fda-inspection-readiness).

**Third-party records.** Records generated by contract research organizations, contract manufacturers, and clinical sites remain the sponsor's responsibility. Contractual access rights are necessary but not sufficient. The sponsor needs to have actually exercised those rights and confirmed that the records exist and are retrievable in their original form. This belongs in the quality agreement and in routine oversight; see [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements).

### A retrieval test you can run

A defensible retrieval test, run at least annually per critical archive:

1. Pick a batch or study at random, ideally one from a retired system.
2. Request the complete record set: results, metadata, and audit trail.
3. Time the retrieval from request to a usable, readable record.
4. Confirm completeness against the original raw data definition.
5. Record the elapsed time and any gaps; remediate gaps through CAPA.

**Acceptance criteria.** The complete record (including audit trail and metadata) is produced within the time you would need during an inspection (commonly minutes to a few hours, defined in your procedure), it is legible, and nothing is missing relative to the raw data definition.

---

## Stage 7: Archival and Disposition

Disposition, the scheduled destruction of records at the end of their retention period, is often overlooked in data integrity programs. It matters because:

- Disposing of records before their retention period expires violates the regulation.
- Disposing of records relevant to an open regulatory matter (inspection, investigation, litigation) creates serious legal risk.
- Archival media that degrades before the retention period ends must be detected and remediated, not silently lost.

A governance program should include a scheduled review of records nearing end of retention to confirm they are eligible for destruction, a documented destruction record (what was destroyed, when, by whom, under what authorization), and a legal hold process that can suspend disposal when needed. The legal hold has to be able to override the routine schedule, and the override needs to be auditable.

### The disposition procedure, step by step

1. The system or schedule flags records reaching end of retention.
2. The records owner confirms the period has genuinely expired against the approved schedule.
3. A legal hold check confirms no open inspection, investigation, recall, or litigation touches the records.
4. QA authorizes destruction in writing.
5. Destruction is executed and a destruction record is created (record type, quantity, date, method, executor, authorizer).
6. The destruction record is itself retained.

**Acceptance criteria.** No record is destroyed without an authorized destruction record; no record under legal hold is destroyed; the destruction record survives the destroyed data. A common finding is a destruction certificate that lists "various lab records" with no traceability to what was actually destroyed, which is indistinguishable on paper from improper disposal.

---

## Metadata: Part of the Record

One of the most frequently misunderstood aspects of data integrity is the status of metadata.

The FDA 2018 guidance defines metadata as "the contextual information required to understand data," and gives examples such as a data set that includes the user who acquired it, the date and time of acquisition, the instrument, the link to a particular study or batch, and the processing applied. Timestamps, user IDs, system configuration, instrument identifiers, processing parameters, location, and batch associations are all metadata.

Metadata is not supplementary documentation. It is part of the record. An instrument reading without its acquisition timestamp, instrument ID, and operator attribution is incomplete data. The ALCOA+ requirement for "Complete" applies to metadata as much as to the primary result values, and the requirement for "Attributable" cannot be met without it.

The practical implication: when data is transferred, archived, or exported, metadata must travel with it. An export that strips timestamps and user IDs produces data that can no longer be assessed for integrity. This is a common failure mode in migration projects where the focus is on result values and the metadata is lost in the translation. It is also why a static PDF, which usually carries little or none of the source metadata, fails as a substitute for a dynamic record.

There is a second, subtler point. Metadata can itself be the evidence of a problem. A reanalysis whose only fingerprint is a changed integration parameter buried in the method metadata, a result file with an acquisition time that predates the sample's logging, a user attribution that points to a shared account: these are detectable only if the metadata is preserved and reviewed. Preserving metadata is what makes the rest of the lifecycle controls work.

### What metadata to preserve, by example

A short inventory of metadata categories and why each matters:

| Metadata category | Example fields | Why it matters |
|-------------------|----------------|----------------|
| Attribution | User ID, role, signature | Establishes who; required for Attributable |
| Temporal | Acquisition date/time, time zone | Establishes when; sequence and clock integrity |
| Instrument and system | Instrument ID, software version, method ID | Reconstruction and traceability |
| Processing | Integration parameters, calculations, prior values | Detects manipulation; supports reprocessing review |
| Context | Batch/lot, study, sample, project links | Ties data to the decision it supports |
| Audit trail | Change history, reasons, before/after | The core integrity evidence layer |

When you define raw data at generation, define which of these categories the raw record must carry. The test of a "true copy" is whether all of them survive the copy.

---

## Building Lifecycle Governance

A mature data lifecycle governance program needs:

1. **A data flow map** for each GxP system: where data enters, how it is processed, where it goes, and who has access at each stage. The map is what turns "we have controls" into "we know where the gaps are."
2. **Defined data owners** at each stage: who is responsible for integrity at generation, review, retention, and retrieval. Ownership that ends at release is a common blind spot.
3. **Retention schedules** aligned to regulatory requirements, with product-specific and system-specific periods defined and approved.
4. **Migration and decommissioning procedures** that include data integrity verification, complete with metadata, before any system is retired.
5. **Retrieval testing**: periodic, timed confirmation that archived data can actually be retrieved in a reasonable timeframe, including from retired systems.
6. **Periodic review** of the controls themselves, so the program does not silently degrade between inspections; see [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review).

### Roles and responsibilities

Lifecycle governance fails when ownership is fuzzy. A workable split:

| Role | Lifecycle responsibility |
|------|--------------------------|
| Data owner (process or lab manager) | Accountable for integrity of their data across all seven stages |
| System owner / IT | Backup, restore, archive, access control, retention enforcement |
| QA | Audit trail review, release decisions, approval of retention and destruction |
| Analysts / operators | Correct generation, no local saves, accurate processing with justified changes |
| Validation | Migration, decommissioning, periodic review of controls |
| Records management | Schedule maintenance, legal holds, destruction records |

The recurring blind spot is the handoff between system owner and data owner. The system owner assumes the data owner reviews audit trails; the data owner assumes IT preserves everything in the archive. Name both responsibilities explicitly. See [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) and [data governance roles and careers](/articles/data-governance-roles-and-careers) for how these map to a wider quality organization.

---

## Common Mistakes and Inspection-Finding Patterns

Patterns that recur in inspection findings across the GxPs (generic, not tied to any firm):

- **Deleting the dynamic original after printing.** Printed results filed, electronic raw data purged for "disk space." The record can no longer be reconstructed.
- **Reprocessing with no prior value or reason.** The audit trail shows the new result but not what it replaced or why.
- **Audit trails not reviewed at release.** Review happens annually or never; the manipulation that the audit trail would have shown ships with the batch.
- **Shared or generic logins.** Attribution collapses; the audit trail points to "admin" or a team account.
- **Backups never restored.** A backup exists on paper but has never been proven to restore a usable record.
- **Migration that drops metadata.** Result values move, audit trail and timestamps do not; the migrated record is no longer attributable.
- **Archive that cannot be searched.** Data exists on tape but takes days to produce, failing the readily-available requirement.
- **Destruction without authorization or under legal hold.** Records destroyed early, or while an inspection or investigation is open, with no traceable authorization.
- **Selective reporting.** A failing result quietly invalidated and omitted from the summary, breaking the completeness principle.

---

## Interview Questions and How to Answer Them

Questions an inspector or interviewer asks on this topic, with the answers that show you understand the lifecycle.

**"What is the original record for this test?"**
Name the specific file or record that is created first and carries the complete result plus metadata and audit trail, and state whether it is static or dynamic. For a chromatography assay, that is the dynamic raw data file in the data system, not the printout. Point to your written raw data definition.

**"What is the difference between a static and a dynamic record, and why does it matter for retention?"**
A static record is fixed at creation (PDF, printout). A dynamic record can be reprocessed and requeried (a chromatography data file, a LIMS record). It matters because retaining only a static export of a dynamic record loses the metadata and reprocessing capability, so you can no longer verify the result against the raw data. You must retain dynamic records in their dynamic form.

**"When does your QA review audit trails?"**
As part of the batch release or data review flow, not only at annual periodic review, consistent with the 2018 guidance recommendation for routine scheduled review based on system complexity and use. For high-volume systems we use risk-based review by exception, with the sampling tied to a documented risk assessment and full review triggered on defined exception events.

**"How do you verify a data transfer between two systems?"**
Checksum or hash comparison, row-count and sum reconciliation, spot-checks against source, and validated interfaces with error handling for ongoing transfers. The verification is recorded and signed, and interface changes go through change control.

**"How long do you retain batch records, and why?"**
Cite the basis: 21 CFR 211.180(a) for US batch records (expiry plus one year, or three years for certain OTC products without dating), EudraLex Volume 4 Chapter 4 in the EU (one year past expiry and five years past certification, whichever is longer). Note that we standardize on a single longer period defined in procedure to apply it consistently.

**"Prove you can retrieve a ten-year-old record from a retired system."**
Describe the timed retrieval test: pick a batch, request the complete set including audit trail, time it, confirm completeness against the raw data definition, remediate gaps via CAPA. Tie it to the readily-available requirement in 21 CFR 211.180(c).

**"Is metadata part of the record?"**
Yes. The 2018 guidance defines it as the contextual information required to understand data: user, timestamp, instrument, processing, batch links, audit trail. Complete and Attributable in ALCOA+ cannot be met without it, so it must travel with the data through transfer, archival, and migration.

**"Walk me through your disposition process."**
Schedule flags end of retention, owner confirms the period expired, legal hold check clears, QA authorizes in writing, destruction is executed, and a destruction record is created and itself retained. Legal hold overrides the routine schedule and the override is auditable.

---

For someone new to GxP, the takeaway is that integrity is not a moment, it is a chain, and the chain breaks most often at the stages nobody is watching. For a working practitioner, the highest payoff is in audit trail review scope, verified transfers, and tested retrieval. For a program-level reader, the deliverable is a system-by-system data flow map with named owners and a retention and disposition schedule that legal hold can override.

The [data governance framework](/articles/data-governance-framework) article covers the organizational and policy structure for this. [Audit trail design and review](/articles/audit-trail-design-and-review) covers the technical controls that support lifecycle integrity at the generation and processing stages, and [data criticality and data risk](/articles/data-criticality-and-data-risk) helps you decide where to spend control effort first. Together with this lifecycle view, they make up the spine of a data integrity program that holds up under inspection.
