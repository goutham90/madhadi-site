---
title: "The Data Lifecycle in GxP: From Generation to Archival"
description: "How pharmaceutical data moves through its full lifecycle, and where integrity breaks down at each stage. Static vs dynamic records, original vs true copy, and why metadata is part of the record."
pubDate: 2025-09-17
tags: ["data-integrity", "GxP", "FDA", "metadata", "data-lifecycle"]
pillar: "data-integrity"
tier: "Intermediate"
---

Most data integrity programs focus on what happens at the point of data generation: the analyst runs a test, the instrument records a result, the operator signs the batch record step. That's the visible part. The failure modes that actually drive warning letters are often downstream, in how data is processed, reviewed, transferred, stored, and eventually retrieved.

This article covers the full data lifecycle and the specific integrity risks at each stage. It is written for practitioners who already understand ALCOA+ and are thinking about how to build governance around the entire arc of a data asset, not just its creation. If you are still building the foundation, start with [data integrity foundations](/articles/data-integrity-foundations) and the [ALCOA+ article](/articles/alcoa-plus-deep-dive), then come back here.

---

## The Lifecycle Stages

The [FDA's December 2018 data integrity guidance](https://www.fda.gov/media/119267/download), titled "Data Integrity and Compliance With Drug CGMP: Questions and Answers," describes the data lifecycle as "the totality of processes and activities associated with data from initial generation and recording, through processing, use, data retention, and retrieval, through to data disposition."

The MHRA's "GXP Data Integrity Guidance and Definitions" (March 2018) uses the same framing and the PIC/S guidance PI 041-1 (July 2021), "Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments," extends it. The three documents agree on the principle: integrity is a property of the whole lifecycle, not a checkbox at creation.

In practice, that maps to seven stages for most GxP data:

1. **Generation**, data is created by an instrument, a human, or a system
2. **Processing**, raw data is transformed (integration, calculation, aggregation)
3. **Review**, data is assessed against specifications and approved
4. **Reporting**, data is summarized and included in decisions or submissions
5. **Retention**, data is stored and maintained
6. **Retrieval**, data is accessed for review, investigation, or inspection
7. **Archival and disposition**, data is transferred to long-term storage or destroyed per schedule

Each stage has distinct integrity risks. A program that only addresses generation will have gaps at processing, review, and archival that regulators will find. The table below summarizes the dominant risk and the primary control at each stage.

| Stage | Dominant integrity risk | Primary control |
|-------|------------------------|-----------------|
| Generation | Wrong thing treated as the original; uncontrolled paper | Define the raw data; restrict local saves |
| Processing | Reintegration without justification; transcription error | Locked methods; reason codes; validated calculations |
| Review | Reviewer never sees the level where manipulation hides | Audit trail review in the release flow |
| Reporting | Transcription and transfer corruption; selective reporting | Verified transfers; completeness rule |
| Retention | Legibility loss; untested backups; format obsolescence | Restoration testing; format migration plan |
| Retrieval | Records exist but cannot be produced promptly | Searchable archive; tested retrieval |
| Disposition | Premature destruction; destruction under legal hold | Retention schedule; legal hold process |

---

## Stage 1: Generation

Generation is where the primary record is created. The key question at this stage is: what is the original?

For paper-based systems, the original is the first recorded version, the raw entry in the notebook, the printed chart recorder trace, the manual logbook. A photocopy is not the original. Good documentation behavior governs this point, and it is worth reading the [good documentation practices](/articles/good-documentation-practices) article alongside this one.

For electronic systems, FDA's position is explicit: the electronic raw data is the original, not any printout derived from it. A chromatogram printed from a chromatography data system (CDS) is a representation of the original. The raw data file, the binary or structured file containing the acquisition data and audit trail, is the original that must be retained. This has been the basis of many warning letters where companies retained printed chromatograms but deleted the underlying electronic files.

### Static vs dynamic records

The distinction matters for understanding what "original" means.

- A *static record* cannot be meaningfully interacted with after creation: a PDF, a printed report, an image file. Its content is fixed at the time of creation.
- A *dynamic record* can be processed, requeried, and reanalyzed: a CDS raw data file, an electronic laboratory notebook (ELN) dataset, a LIMS result record. The original dynamic record preserves all the processing metadata and allows reconstruction of every analytical decision.

For dynamic records, retaining only a static export (a PDF of the result) loses the ability to verify that the result correctly represents the raw data. This is why FDA expects electronic raw data to be retained in its dynamic form, not just printed or exported. The MHRA guidance is blunt here: a static printout of a dynamic record is not a true copy, because it does not carry the metadata and reprocessing capability of the source.

### True copy and the original/copy trap

A *true copy* is a copy of original data that has been verified to preserve the full content and meaning, including all metadata. If a true copy is created and verified, the original may in some cases be retained in the copy. The trap is treating an export as a true copy when it has silently dropped audit trail entries or timestamps. Verification, not assumption, is what makes a copy "true."

### A worked example

An analyst acquires an HPLC injection. The CDS writes a result set: the chromatogram, the integration events, the method, the sequence, the audit trail, the user and instrument identifiers, and the acquisition timestamp. That bundle is the original dynamic record. If site procedure says "print the result and file the printout, then purge the project from the CDS to free disk space," the site has destroyed the original and kept a static representation. Even with no intent to deceive, the record can no longer be reconstructed, which is the violation an investigator will cite.

A concrete control at generation: configure the CDS so analysts cannot save acquisitions to a local drive or a working folder outside the audited project structure. Local "scratch" saves are a recurring root cause because they create a copy that lives outside the audit trail, which is exactly the gap that enables a hidden "trial" injection.

---

## Stage 2: Processing

Processing is where raw data is transformed into reportable results. In analytical chemistry, this typically means peak integration, baseline correction, calculation against a standard, and evaluation against a specification limit.

The integrity risks at this stage are well documented in FDA enforcement actions:

**Integration parameter manipulation.** In chromatography data systems, an analyst can reprocess an injection with different integration parameters, wider peak windows, different baseline assignments, to change the peak area and therefore the result. When this is done without documented scientific justification, it is a data integrity violation regardless of whether the original data file is retained. The [FDA warning letters patterns](/articles/fda-warning-letters-patterns) article covers this in detail.

**Selective reprocessing.** Not all reprocessing is illegitimate. Integration methods need to be validated and locked before use. When reprocessing occurs after reviewing a result, the audit trail should capture who initiated the reprocessing, what parameters changed, and what justification was provided. Systems that log "reprocessed" without capturing the previous parameter values, or that do not require a reason code, are a control gap.

**Calculation errors.** Manual transcription of instrument readings into calculated results, for example reading a UV absorbance and manually calculating concentration, introduces transcription risk. Validated calculation tools, formula locks in spreadsheets, or direct LIMS interfaces reduce this risk. Spreadsheets used for GxP calculations are a system in their own right and need validation; the [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation) article addresses how far that has to go.

### Reading the audit trail at this stage

The audit trail at processing should capture original values, changed values, the identity of who made each change, the timestamp, and, for controlled changes, the reason. The signals an experienced reviewer looks for:

- Injections aborted or deleted shortly before a "good" run on the same sample
- Reintegration that moves a result from just outside specification to just inside it
- A reason code of "operator error" or "no peak" applied repeatedly to inconvenient results
- System clock changes near the time of acquisition
- Reprocessing performed by a different user from the one who acquired the data, with no second-person rationale

None of these is proof of falsification on its own. Each is a question that the record should be able to answer. For the technical design that makes these signals visible, see [audit trail design and review](/articles/audit-trail-design-and-review).

---

## Stage 3: Review

Review is when a second person, typically QA or a supervising analyst, evaluates the data and decides whether it is acceptable. The integrity risks here are more subtle but equally important.

**Review scope.** Reviewers often see summary data or final result reports, not the underlying raw data. A reviewer who sees "Result: 98.5%, PASS" without access to the raw chromatogram, the audit trail, and the sequence log cannot actually verify data integrity. Effective review requires access to the data at the level where manipulation could have occurred. The batch record review process should give reviewers that depth; see [batch record review in GMP](/articles/batch-record-review-gmp).

**Audit trail review.** FDA expects that audit trails are reviewed as part of the batch release process, not just at the annual periodic review. The 2018 guidance states: "the agency recommends routine scheduled audit trail review based on the complexity of the system and its intended use." In practice, this means QA reviewers need access to audit trail records and need to know what anomalies to look for. Reviewers also need the authority to require source data when something looks off.

**Review by exception.** For high-volume operations, 100% manual audit trail review is impractical. Risk-based review by exception is acceptable, prioritizing high-criticality systems, high-risk time periods (end of shift, weekend, out-of-specification events), and unusual patterns. The key is that the scope and approach are documented and justified, not that review is quietly eliminated. A defensible review-by-exception design ties the sampling rate to a documented risk assessment and still triggers full review on defined exception events.

**Who reviews matters.** Review independence is part of the control. The person who generated a result should not be the sole reviewer of the audit trail for that result. Segregation of duties at the review stage is one of the controls inspectors probe, and it connects to access design covered in [computerized systems access control and cybersecurity](/articles/csv-cybersecurity-access-control).

---

## Stage 4: Reporting

Reporting is where data moves outside the generating system, into a batch record summary, a regulatory submission, a stability report. This stage introduces transfer risk.

**Data transfer integrity.** When data moves from one system to another, from CDS to LIMS, from LIMS to ERP, from ERP to a submission template, the transferred values must match the originals. This sounds obvious. In practice, manual transcription is still common, and even automated transfers can corrupt, truncate, or misformat data without detection unless verified.

Verification methods include:

- Checksum or hash comparison between source and destination files
- Row-count and sum reconciliation for numerical datasets
- Spot-check review of transferred values against source records
- Validated electronic interfaces with built-in error detection and exception handling

Each method has a place. A validated interface is the strongest control because it makes verification continuous rather than a one-time event, but it still needs periodic confirmation that the interface has not drifted, for example after a system upgrade on either side.

**Reporting scope.** The completeness principle of ALCOA+ applies at reporting: all results relevant to a quality decision must be reported, not just the passing ones. A batch record that summarizes results without disclosing the out-of-specification result that was "invalidated" is a completeness failure, regardless of whether the invalidation was technically justified. The handling of those results has to follow a documented [out-of-specification investigation process](/articles/oos-investigation-process), and the investigation outcome travels with the data.

**Rounding and reporting precision.** A quieter reporting risk is inconsistent rounding and significant-figure handling between the analytical method, the calculation tool, and the final report. Define rounding rules in the method, apply them once, and make sure the reported value is the value the specification is evaluated against. Rounding a result down into specification is a classic finding.

---

## Stage 5: Retention

Retention is where a lot of programs have quiet failures that do not surface until an inspection, or until someone tries to retrieve a record years later.

**Retention periods.** 21 CFR 211.180(a) requires that batch production and control records be retained "for at least 1 year after the expiration date of the batch" and, for certain over-the-counter drug products without expiration dating, 3 years after distribution. For records related to a New Drug Application or a Biologics License Application, retention obligations are defined in the relevant regulations and the marketing application commitments. EU GMP, in EudraLex Volume 4 Chapter 4, sets retention of at least one year past batch expiry and at least five years after certification, whichever is longer. Many companies standardize on a single longer period (often well beyond ten years for commercial products) to avoid tracking product-specific expiry dates record by record. Whatever period is chosen, it has to be defined in a procedure and applied consistently.

**Retention media and format.** Records must remain legible and retrievable throughout the retention period. This creates specific obligations:

- Paper records must be stored under conditions that prevent deterioration. Thermal paper fades and is a known problem for long retention periods, so a verified true copy is often made at the time of generation.
- Electronic records must be backed up, with restoration tested periodically. A backup that has never been successfully restored is not functionally a backup.
- Proprietary file formats require either a long-term license for the rendering software or a migration plan. A CDS raw data file that can only be opened by one software version, and that version is no longer supported, is a legibility problem waiting to surface.

The validation of backup and restore is its own discipline; see [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation).

**System decommissioning.** When a software system is retired, all GxP records it contains must either be migrated to a replacement system through a validated migration or archived in a format that remains accessible. Companies frequently underestimate the scope and decommission systems without confirming that all records transferred and that the archive is searchable. Migrating result values while losing the audit trail and metadata is the most common way this goes wrong. The [data migration validation](/articles/data-migration-validation) article walks through how to verify a migration so the archived record is still complete and attributable.

---

## Stage 6: Retrieval

A record that exists but cannot be retrieved is not functionally available. FDA expects records to be producible promptly during an inspection, not after a multi-day retrieval effort from an off-site archive. The 2018 guidance ties this to 21 CFR 211.180(c), which requires that records be readily available for authorized inspection.

**Archive accessibility.** For electronic archives, the archive must be searchable, not just a dump of files. A LIMS archive that requires IT to restore a backup tape before a ten-year-old batch record can be read is a retrieval problem, even if the data technically still exists. Test retrieval on a defined schedule using realistic queries, for example "produce the full result set, including audit trail, for a named batch from a retired system," and time it.

**Third-party records.** Records generated by contract research organizations, contract manufacturers, and clinical sites remain the sponsor's responsibility. Contractual access rights are necessary but not sufficient. The sponsor needs to have actually exercised those rights and confirmed that the records exist and are retrievable in their original form. This belongs in the quality agreement and in routine oversight; see [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements).

---

## Stage 7: Archival and Disposition

Disposition, the scheduled destruction of records at the end of their retention period, is often overlooked in data integrity programs. It matters because:

- Disposing of records before their retention period expires violates the regulation.
- Disposing of records relevant to an open regulatory matter (inspection, investigation, litigation) creates serious legal risk.
- Archival media that degrades before the retention period ends must be detected and remediated, not silently lost.

A governance program should include a scheduled review of records nearing end of retention to confirm they are eligible for destruction, a documented destruction record (what was destroyed, when, by whom, under what authorization), and a legal hold process that can suspend disposal when needed. The legal hold has to be able to override the routine schedule, and the override needs to be auditable.

---

## Metadata: Part of the Record

One of the most frequently misunderstood aspects of data integrity is the status of metadata.

The FDA 2018 guidance defines metadata as "the contextual information required to understand data," and gives examples such as a data set that includes the user who acquired it, the date and time of acquisition, the instrument, the link to a particular study or batch, and the processing applied. Timestamps, user IDs, system configuration, instrument identifiers, processing parameters, location, and batch associations are all metadata.

Metadata is not supplementary documentation. It is part of the record. An instrument reading without its acquisition timestamp, instrument ID, and operator attribution is incomplete data. The ALCOA+ requirement for "Complete" applies to metadata as much as to the primary result values, and the requirement for "Attributable" cannot be met without it.

The practical implication: when data is transferred, archived, or exported, metadata must travel with it. An export that strips timestamps and user IDs produces data that can no longer be assessed for integrity. This is a common failure mode in migration projects where the focus is on result values and the metadata is lost in the translation. It is also why a static PDF, which usually carries little or none of the source metadata, fails as a substitute for a dynamic record.

There is a second, subtler point. Metadata can itself be the evidence of a problem. A reanalysis whose only fingerprint is a changed integration parameter buried in the method metadata, a result file with an acquisition time that predates the sample's logging, a user attribution that points to a shared account, these are detectable only if the metadata is preserved and reviewed. Preserving metadata is what makes the rest of the lifecycle controls work.

---

## Building Lifecycle Governance

A mature data lifecycle governance program needs:

1. **A data flow map** for each GxP system: where data enters, how it is processed, where it goes, and who has access at each stage. The map is what turns "we have controls" into "we know where the gaps are."
2. **Defined data owners** at each stage: who is responsible for integrity at generation, review, retention, and retrieval. Ownership that ends at release is a common blind spot.
3. **Retention schedules** aligned to regulatory requirements, with product-specific and system-specific periods defined and approved.
4. **Migration and decommissioning procedures** that include data integrity verification, complete with metadata, before any system is retired.
5. **Retrieval testing**: periodic, timed confirmation that archived data can actually be retrieved in a reasonable timeframe, including from retired systems.
6. **Periodic review** of the controls themselves, so the program does not silently degrade between inspections; see [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review).

For someone new to GxP, the takeaway is that integrity is not a moment, it is a chain, and the chain breaks most often at the stages nobody is watching. For a working practitioner, the highest payoff is in audit trail review scope, verified transfers, and tested retrieval. For a program-level reader, the deliverable is a system-by-system data flow map with named owners and a retention and disposition schedule that legal hold can override.

The [data governance framework](/articles/data-governance-framework) article covers the organizational and policy structure for this. The [audit trail design and review](/articles/audit-trail-design-and-review) article covers the technical controls that support lifecycle integrity at the generation and processing stages. Together with this lifecycle view, they make up the spine of a data integrity program that holds up under inspection.
