---
title: "The Data Lifecycle in GxP: From Generation to Archival"
description: "How pharmaceutical data moves through its full lifecycle, and where integrity breaks down at each stage. Static vs dynamic records, original vs true copy, and why metadata is part of the record."
pubDate: 2025-09-17
tags: ["data-integrity", "GxP", "FDA", "metadata", "data-lifecycle"]
pillar: "data-integrity"
tier: "Intermediate"
---

Most data integrity programs focus on what happens at the point of data generation: the analyst runs a test, the instrument records a result, the operator signs the batch record step. That's the visible part. The failure modes that actually drive warning letters are often downstream, in how data is processed, reviewed, transferred, stored, and eventually retrieved.

This article covers the full data lifecycle and the specific integrity risks at each stage. It's intended for practitioners who already understand ALCOA+ and are thinking about how to build governance around the entire arc of a data asset, not just its creation.

---

## The Lifecycle Stages

The [FDA's December 2018 data integrity guidance](https://www.fda.gov/media/119267/download) describes the data lifecycle as: "the totality of processes and activities associated with data from initial generation and recording, through processing, use, data retention, and retrieval, through to data disposition."

In practice, that maps to seven stages for most GxP data:

1. **Generation**, data is created by an instrument, a human, or a system
2. **Processing**, raw data is transformed (integration, calculation, aggregation)
3. **Review**, data is assessed against specifications and approved
4. **Reporting**, data is summarized and included in decisions or submissions
5. **Retention**, data is stored and maintained
6. **Retrieval**, data is accessed for review, investigation, or inspection
7. **Archival / Disposition**, data is transferred to long-term storage or destroyed per schedule

Each stage has distinct integrity risks. A data integrity program that only addresses generation will have gaps at processing, review, and archival that regulators will find.

---

## Stage 1: Generation

Generation is where the primary record is created. The key question at this stage is: what is the original?

For paper-based systems, the original is the first recorded version, the raw entry in the notebook, the printed chart recorder trace, the manual logbook. A photocopy is not the original.

For electronic systems, FDA's position is explicit: **the electronic raw data is the original, not any printout derived from it.** A chromatogram printed from a CDS is a representation of the original. The raw data file, the binary or structured file containing the acquisition data and audit trail, is the original that must be retained. This has been the basis of dozens of warning letters where companies retained printed chromatograms but deleted the underlying electronic files.

**Static vs dynamic records:** The distinction matters for understanding what "original" means.
- A *static record* cannot be meaningfully interacted with after creation: a PDF, a printed report, an image file. Its content is fixed at the time of creation.
- A *dynamic record* can be processed, requeried, and reanalyzed: a CDS raw data file, an ELN dataset, a LIMS result record. The original dynamic record preserves all the processing metadata and allows reconstruction of every analytical decision.

For dynamic records, retaining only a static export (a PDF of the result) loses the ability to verify that the result correctly represents the raw data. This is why FDA expects electronic raw data to be retained in its dynamic form, not just printed or exported.

---

## Stage 2: Processing

Processing is where raw data is transformed into reportable results. In analytical chemistry, this typically means peak integration, baseline correction, calculation against a standard, and evaluation against a specification limit.

The integrity risks at this stage are well-documented in FDA enforcement actions:

**Integration parameter manipulation:** In chromatography data systems, an analyst can reprocess an injection with different integration parameters, wider peak windows, different baseline assignments, to change the peak area and therefore the result. When this is done without documented scientific justification, it is a data integrity violation regardless of whether the original data file is retained. The [FDA warning letters pattern article](/articles/fda-warning-letters-patterns) covers this in detail.

**Selective reprocessing:** Not all reprocessing is illegitimate. Integration methods need to be validated and locked before use. When reprocessing occurs after reviewing a result, the audit trail should capture: who initiated the reprocessing, what parameters were changed, and what justification was provided. Systems that log "reprocessed" without capturing the previous parameter values or require a reason code are a control gap.

**Calculation errors:** Manual transcription of instrument readings into calculated results (e.g., reading a UV absorbance and manually calculating concentration) introduces transcription risk. Validated calculation tools, formula locks in spreadsheets, or direct LIMS interfaces reduce this risk.

**The audit trail at this stage** should capture: original values, changed values, the identity of who made each change, the timestamp, and (for controlled changes) the reason.

---

## Stage 3: Review

Review is when a second person (typically QA or a supervising analyst) evaluates the data and decides whether it is acceptable. The integrity risks here are more subtle but equally important.

**Review scope:** Reviewers often see summary data or final result reports, not the underlying raw data. A result reviewer who sees "Result: 98.5%, PASS" without access to the raw chromatogram, the audit trail, and the sequence log cannot actually verify data integrity. Effective review requires access to the data at the level where manipulation could have occurred.

**Audit trail review:** FDA expects that audit trails are reviewed as part of the batch release process, not just at the annual periodic review. The [FDA DI guidance (2018)](https://www.fda.gov/media/119267/download) states: "review of audit trails should be part of the routine batch record review process." In practice, this means QA reviewers need access to audit trail records and need to know what anomalies to look for.

**Review-by-exception:** For high-volume operations, 100% manual audit trail review is impractical. Risk-based review-by-exception is acceptable, prioritizing high-criticality systems, high-risk time periods (end of shift, weekend, OOS events), and unusual patterns. The key is that the scope and approach are documented, not that review is eliminated.

---

## Stage 4: Reporting

Reporting is where data moves outside the generating system, into a batch record summary, a regulatory submission, a stability report. This stage introduces transfer risk.

**Data transfer integrity:** When data moves from one system to another, from CDS to LIMS, from LIMS to ERP, from ERP to a regulatory submission template, the transferred values must match the originals. This sounds obvious. In practice, manual transcription is still common in many operations, and even automated transfers can corrupt, truncate, or misformat data without detection unless verified.

Verification methods include:
- Checksum comparison between source and destination files
- Row-count and sum reconciliation for numerical datasets
- Spot-check review of transferred values against source records
- Validated electronic interfaces with error detection

**Reporting scope:** The completeness principle of ALCOA+ applies at reporting: all results relevant to a quality decision must be reported, not just the passing ones. A batch record that summarizes results without disclosing the OOS that was "invalidated" is a completeness failure, regardless of whether the invalidation was technically justified.

---

## Stage 5: Retention

Retention is where a lot of programs have quiet failures that don't surface until an inspection, or until someone tries to retrieve a record years later.

**Retention periods:** 21 CFR 211.180 requires that records be retained "for at least 1 year after the expiration date of the batch." For stability records, the retention period extends further. For records related to a New Drug Application or Biologics License Application, retention requirements are defined in the respective regulations. Many companies standardize on longer periods (15-25 years for commercial products) to avoid having to track product-specific expiry dates.

**Retention media and format:** Records must remain legible and retrievable throughout the retention period. This creates specific obligations:

- Paper records must be stored under conditions that prevent deterioration. Thermal paper fades and is specifically problematic for long retention periods.
- Electronic records must be backed up, with restoration tested periodically. Backup that has never been successfully restored is not functionally a backup.
- Proprietary file formats require either a long-term license for the rendering software or a migration plan. A CDS raw data file that can only be opened by a specific software version, and that software version is no longer supported, is a legibility problem.

**System decommissioning:** When a software system is retired, all GxP records it contains must either be migrated to a replacement system (validated migration) or archived in a format that remains accessible. Companies frequently underestimate the scope of this work and decommission systems without verifying that all records were transferred and that the archive is searchable.

---

## Stage 6: Retrieval

A record that exists but cannot be retrieved is not functionally available. FDA expects records to be producible "promptly" during an inspection, not after a multi-day retrieval effort from an off-site archive.

**Archive accessibility:** For electronic archives, this means the archive must be searchable, not just a dump of files. A LIMS archive that requires IT to restore a backup tape to retrieve a 10-year-old batch record is a retrieval problem.

**Third-party records:** Records generated by CROs, CMOs, and clinical sites remain the sponsor's responsibility. Contractual access rights are necessary but not sufficient, the sponsor needs to have actually exercised those rights and confirmed that the records exist and are retrievable.

---

## Stage 7: Archival and Disposition

Disposition, the scheduled destruction of records at the end of their retention period, is often overlooked in data integrity programs. It matters because:

- Disposing of records before their retention period expires violates the regulation.
- Disposing of records that are relevant to an open regulatory matter (inspection, investigation, litigation) creates serious legal risk.
- Archival media that degrades before the retention period ends must be detected and remediated, not silently lost.

A data governance program should include a scheduled review of records nearing end-of-retention to confirm they are eligible for destruction, and a legal hold process that can flag records against disposal when needed.

---

## Metadata: Part of the Record

One of the most frequently misunderstood aspects of data integrity is the status of metadata.

The [FDA DI guidance](https://www.fda.gov/media/119267/download) defines metadata as "data that describe the attributes of other data and provide context and meaning", timestamps, user IDs, system configuration, instrument identifiers, processing parameters, location, batch associations.

Metadata is not supplementary documentation. It is part of the record. An instrument reading without its acquisition timestamp, instrument ID, and operator attribution is incomplete data. The ALCOA+ requirement for "Complete" applies to metadata as much as to the primary result values.

The practical implication: when data is transferred, archived, or exported, metadata must travel with it. An export that strips timestamps and user IDs produces data that can no longer be assessed for integrity. This is a common failure mode in data migration projects where the focus is on migrating result values and the metadata is lost in the translation.

---

## Building Lifecycle Governance

A mature data lifecycle governance program needs:

1. **A data flow map** for each GxP system, where data enters, how it's processed, where it goes, and who has access at each stage.
2. **Defined data owners** at each stage, who is responsible for integrity at generation, review, retention, and retrieval.
3. **Retention schedules** aligned to regulatory requirements, with product-specific and system-specific periods defined.
4. **Migration and decommissioning procedures** that include data integrity verification before any system is retired.
5. **Retrieval testing**, periodic confirmation that archived data can actually be retrieved in a reasonable timeframe.

The [data governance framework article](/articles/data-governance-framework) covers the organizational and policy structure for this. The [audit trail design article](/articles/audit-trail-design-and-review) covers the technical controls that support lifecycle integrity at the generation and processing stages.
