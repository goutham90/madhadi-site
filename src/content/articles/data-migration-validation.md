---
title: "Data Migration Validation: Moving GxP Records Without Losing Integrity"
description: "A practitioner's reference for validating GxP data migrations during system replacement, cloud moves, and consolidation — covering mapping, completeness and accuracy verification, audit-trail preservation, reconciliation, and decommissioning decisions."
pubDate: 2026-06-20
tags: ["data migration", "data integrity", "GxP", "Annex 11", "Part 11", "CSV", "ALCOA+", "decommissioning"]
pillar: "csv-csa"
tier: "Advanced"
---

A data migration moves records from one place to another. That sounds trivial until the records are batch release data, electronic signatures, study results, complaint files, or anything else a regulator can ask to see years later. At that point a migration stops being an IT project and becomes a question of whether your GxP data still means what it meant before you touched it.

Migrations happen constantly in regulated environments: a LIMS gets replaced, a quality system moves from on-premise to a vendor's cloud, two companies merge and consolidate three document management systems into one, or a validated platform reaches end of support and the data has to land somewhere new. Each of these is a controlled change to records that fall under predicate rules, and each carries the same core risk — that something gets dropped, altered, truncated, or silently re-interpreted on the way across.

This article walks through how to validate that move. It starts with the strategy and mapping decisions a beginner needs to understand, then builds into the verification, reconciliation, and decommissioning detail that determines whether the migration holds up under inspection.

## Why migration is a data integrity event, not a copy job

The regulatory frame is the same one that governs the records in the first place. In the US, electronic records and signatures fall under 21 CFR Part 11, layered on top of the relevant predicate rules — 21 CFR 211 for drug GMP, 21 CFR 820 for device quality systems, 21 CFR 58 for nonclinical lab studies. In the EU, EU GMP Annex 11 governs computerised systems and Chapter 4 governs documentation. The data integrity expectations themselves are spelled out in guidance: the MHRA's *GxP Data Integrity Guidance and Definitions* and the FDA's *Data Integrity and Compliance With Drug CGMP* guidance both make clear that integrity expectations apply across the data lifecycle — and a migration is part of that lifecycle.

The shorthand most inspectors and quality units use is ALCOA+: data should be Attributable, Legible, Contemporaneous, Original, and Accurate, plus Complete, Consistent, Enduring, and Available. A migration can quietly break almost every one of these:

- **Attributable** breaks when a user ID or signature meaning doesn't carry across and a record can no longer be tied to who created or approved it.
- **Original** breaks when you migrate a flattened report instead of the underlying dynamic record, losing the ability to reprocess or re-examine.
- **Complete** breaks when audit-trail entries, metadata, or a subset of records are left behind.
- **Accurate** breaks when a transformation rounds a number, reformats a date, or maps a status code to the wrong value.
- **Enduring/Available** breaks when the source system is decommissioned before anyone confirmed the target can actually reproduce every record a regulator might ask for.

So the validation question is not "did the rows arrive" but "did the *meaning* of every record arrive intact, and can we prove it." That proof is what the rest of this article is about.

## Migration strategy: pick the model before you touch data

Before any mapping, decide what kind of migration you're running, because it sets the validation burden.

**Big-bang vs. phased.** A big-bang migration cuts over everything at once on a defined date. It's simpler to reconcile (one source state, one target state) but unforgiving — there's no partial fallback. A phased migration moves data in tranches (by site, by record type, by date range). It reduces blast radius but creates a window where the same data class lives in two systems, which means you need clear rules about which system is the system of record at any moment and how you avoid double-counting.

**Migrate vs. archive vs. leave in place.** Not every record has to move. A defensible strategy classifies records into:

| Disposition | When it applies | Validation focus |
|---|---|---|
| Migrate to new system | Active records still in operational use | Full mapping, transformation, completeness, accuracy verification |
| Archive to a validated repository | Records past active use but within retention | Readability, completeness, integrity of the archived copy |
| Retain in legacy (read-only) | Migration not feasible or not worth the risk | Continued availability and access control of legacy system |

The third option is legitimate and often the right answer for a small volume of complex historical records — but only if the legacy system stays accessible and supported for the full retention period. "We'll keep the old server around" is not a plan unless someone owns patching, access control, and the ability to actually retrieve a record on demand.

**Static vs. dynamic data.** This distinction drives a lot of grief. A static record (a signed PDF, a scanned form) can be migrated as a fixed object. A dynamic record (a chromatography data file you can reprocess, a database record with live query and audit-trail behaviour) loses meaning if you migrate only a printout. MHRA guidance is explicit that the original dynamic record must be preserved where the ability to interact with the data is part of its meaning. If you're replacing a chromatography data system, migrating PDFs of the chromatograms is almost certainly not enough.

Document all of this in a **Migration Plan** (sometimes a migration strategy document feeding the overall validation plan). Treat it as a controlled, approved deliverable governed by your CSV/CSA framework — GAMP 5 (Second Edition) gives the lifecycle scaffolding, and a risk-based, critical-thinking approach lets you scale effort to record criticality rather than validating every field of every record to the same depth.

## Risk assessment scopes the effort

A migration risk assessment answers a simple question for each data class: what happens if this migrates wrong, and how likely is that given the source data quality and the transformation involved? Drive it with the questions that actually predict failure:

- **Criticality of the record.** Batch disposition data, stability results, and signed approvals sit at the top. Reference lookups and inactive master data sit lower.
- **Source data quality.** Free-text fields, inconsistent legacy data entry, duplicate records, and orphaned references are where migrations break. Profile the source before you trust it.
- **Transformation complexity.** A 1:1 field copy is low risk. Splitting a concatenated field, deriving a status from business logic, or merging two systems' code lists is high risk.
- **Volume.** High-volume classes need automated, sampled verification with statistically defensible coverage; low-volume critical classes can justify 100% verification.

The output is a risk-ranked list that tells you where to spend 100%-verification effort and where a justified sampling plan is acceptable. Inspectors don't expect equal rigor everywhere; they expect rigor proportional to risk and a documented rationale for the choice.

## Data mapping and transformation rules

Mapping is the heart of the migration. A **migration specification** (or data mapping document) defines, field by field, how source maps to target. For each target field it should state:

- Source field(s) and source system
- Target field and target data type/length/format
- Transformation rule (direct copy, format conversion, value mapping via a lookup, derivation logic, default value)
- Handling of nulls, blanks, and "unknown" values
- Code-list / controlled-vocabulary mappings (e.g. how legacy status `CLSD` maps to target `Closed`)

Transformations are where silent corruption lives. The classic failure modes:

- **Date and time.** Two-digit years, ambiguous DD/MM vs MM/DD, dropped time components, and time-zone shifts. A timestamp that loses its zone or shifts by hours undermines the "contemporaneous" leg of ALCOA and can move a record across a date boundary. Decide and document a single canonical date-time representation, and preserve time zone explicitly.
- **Numeric precision and units.** Rounding, truncation, or unit changes silently alter results. A stability result migrated with fewer significant figures is a data integrity finding waiting to happen.
- **Character encoding.** Non-ASCII characters, Greek letters in method names, micro symbols, and accented names corrupt under encoding mismatches. Standardise on a defined encoding (commonly UTF-8) and test boundary characters explicitly.
- **Field truncation.** Target field shorter than source field silently cuts data. Profile source field lengths against target constraints before migrating, not after.
- **Code-list collisions.** Merging two systems often produces overlapping codes with different meanings. Resolve these explicitly; never let an auto-mapping guess.

A discipline that pays off: for every transformation rule, write the **expected result for a known input** before you run anything. Those become your verification test cases. If you can't state what the right answer is, you can't verify the transformation.

## Building and qualifying the migration tooling

Whatever moves the data — ETL scripts, a vendor migration utility, custom code — is itself part of the validated solution and needs to be controlled. You don't have to validate a commercial migration tool to the same depth as a GxP application, but you do have to demonstrate it does what your specification says for your data. In practice:

- Manage migration scripts under version control and change control.
- Qualify the tooling against the migration specification using representative test data, including deliberately messy edge cases (nulls, max-length strings, boundary dates, special characters, duplicate keys).
- Run the migration into a validation/test environment first and verify there before touching production.
- Keep migration code, configuration, and execution logs as part of the validation record.

Run the full process end-to-end in a non-production environment — a **migration dry run** or trial migration — against a production-representative data set. The dry run is where you discover the source data is dirtier than anyone admitted, the transformation rules have gaps, and the runtime is three times longer than the cutover window allows. Finding that in a rehearsal is cheap; finding it during cutover is not.

## Verification: completeness and accuracy

Verification proves the migrated data is right. The two pillars are completeness (nothing lost or added) and accuracy (every value correct after transformation). Both are mandatory; passing one doesn't imply the other.

**Completeness verification** answers "did every record that should have migrated actually migrate, and did nothing extra appear?"

- **Record counts** per data class: source count = target count (adjusting for any documented, intentional exclusions). Counts must reconcile exactly, with every difference explained — "we expected to migrate 48,210 and migrated 48,210" or "we excluded 312 voided records per the migration spec, and 47,898 of 48,210 migrated."
- **Referential integrity**: relationships survive. A test result still points to the correct sample; a signature still points to the correct record; a child record isn't orphaned from its parent.
- **No silent drops**: records that fail to migrate land in an error/reject log that someone reviews and dispositions. A migration that silently skips records it can't process is the single most dangerous failure mode, because the counts can still look plausible if you're not watching.

**Accuracy verification** answers "is each migrated value correct, including after transformation?"

- **100% verification** for the highest-criticality, lower-volume classes where feasible — every field compared source-to-target, often via an automated field-level comparison script that is itself verified.
- **Sampling** for high-volume classes, using a defensible plan. Spell out the sampling basis (e.g. a confidence/coverage rationale or an accepted attribute sampling standard such as the ANSI/ASQ Z1.4 / ISO 2859-1 family), the acceptance criterion (commonly zero defects for critical attributes), and what happens on a failure — a single accuracy defect in a sample should trigger investigation and typically expansion to 100% verification of that class, not a shrug.
- **Targeted edge-case checks** regardless of sampling: the longest strings, the special characters, the boundary dates, the records that exercised each transformation rule, and any records flagged as low quality during source profiling.

Compare against a defined source baseline — a frozen, documented snapshot of the source taken at a known point. If the source keeps changing under you during a phased migration, you'll never reconcile cleanly. Either freeze the source for the relevant classes during cutover or capture and reconcile the delta deliberately.

Acceptance criteria should be written and approved before verification runs. Typical criteria:

| Check | Acceptance criterion |
|---|---|
| Record count per class | 100% reconciliation; every variance explained and approved |
| Critical field accuracy | Zero defects (100% or sampled with zero-defect acceptance) |
| Referential integrity | 100% of sampled relationships intact |
| Audit-trail completeness | Audit history present and legible for required records |
| Edge-case set | 100% pass |
| Reject/error log | 100% reviewed and dispositioned |

## Audit trail and metadata preservation

This is the part teams most often underestimate. The record is not just the current value — it's the history of how that value came to be. Part 11 and Annex 11 both expect computer-generated, time-stamped audit trails for GxP electronic records, and the MHRA and FDA data integrity guidances treat the audit trail as part of the complete record.

When you migrate, you have to decide and justify how audit-trail history travels:

- **Migrate the historical audit trail into the new system** so it's queryable alongside the data. Cleanest for ongoing use, hardest technically, because audit-trail schemas rarely match between systems.
- **Migrate audit history as an attached, readable record** (e.g. an exported, integrity-protected audit-trail file linked to each migrated record) when the target can't ingest foreign audit structures natively.
- **Retain audit history in the legacy system** under controlled read-only access for the retention period, with the migrated record cross-referenced to it.

Any of these can be defensible; what's not defensible is losing the audit history or being unable to show, for a given migrated record, who did what and when in its original life. Watch specifically for:

- **Metadata that gives data meaning**: units, method/version references, instrument IDs, result flags, review/approval status, and the user identities behind actions. Strip these and the data becomes ambiguous.
- **Signature meaning.** A migrated electronic signature must carry its meaning (the printed name, the date/time, and the meaning such as authorship/approval/review) — Part 11 requires those signature components to remain associated with the record. A signature that migrates as a bare flag with no name, time, or meaning has lost its regulatory value.
- **The migration's own audit trail.** The act of migrating is itself a GxP-relevant data action. Records frequently get a system-generated note indicating they were migrated, with a date and reference to the migration. That's good practice — it preserves attribution and contemporaneousness honestly, rather than making migrated records look natively created on the migration date.

## Reconciliation and the cutover

Reconciliation is the formal, documented proof that source and target agree. It's the deliverable an inspector will ask for, so it has to be more than a developer's say-so. A reconciliation report typically captures, per data class: source baseline count, records selected for migration, records excluded (with reason), records migrated, records rejected (with disposition), and the result of accuracy verification against acceptance criteria. Every number should reconcile, and every exception should have an owner and a resolution.

Cutover is the controlled switch from old system to new as system of record. Plan it like a change: a sequenced runbook, a freeze on the source, the production migration run, reconciliation against acceptance criteria, a go/no-go decision by the quality unit, and a defined rollback or contingency if reconciliation fails. Don't release the new system for GxP use until reconciliation passes and is approved. And keep the source recoverable until you're certain the target is correct — decommissioning is a later, separate decision.

For phased migrations, reconcile each tranche and keep a master view so the final state is provably the sum of the parts with no gaps or overlaps.

## What inspectors look for

When a regulator reviews a migration — and they do, especially after a system replacement — the same handful of things come up:

- **A documented, approved migration plan and specification.** No mapping document is a red flag; it means transformations weren't controlled.
- **Reconciliation evidence with explained exceptions.** Counts that "roughly match" or unexplained record-count differences draw immediate scrutiny.
- **Audit trail and metadata preservation.** Can you show the full history of a migrated record, including who did what before migration? Lost audit trails are a classic data integrity citation.
- **Dynamic data handling.** For chromatography, spectroscopy, and similar, did you preserve the ability to reprocess, or did you flatten to static reports?
- **Reject handling.** What happened to records that didn't migrate cleanly? "We don't know" is the wrong answer.
- **Independence and review.** Verification reviewed by someone other than the person who ran the migration; quality unit oversight on acceptance and release.
- **Continued availability.** Can you actually retrieve and render an old record now? Inspectors do ask to see a specific historical record reproduced.

## Legacy decommissioning and retention

Once the data has moved and the target is proven, the legacy system becomes a liability — it costs money, holds risk, and may run unsupported software. But you don't get to delete it on the project manager's timeline. Decommissioning is a controlled decision governed by record-retention obligations.

Retention periods come from the predicate rules and applicable regulations, not convenience. Drug GMP records under 21 CFR 211 generally must be retained for at least one year after a batch's expiry date (longer for certain products), device records under 21 CFR 820 for a defined period tied to device lifetime, and clinical/study records under their own GCP and 21 CFR 58 requirements — with ICH E6 (GCP) setting essential-document retention expectations for clinical data. Map every migrated and archived data class to its retention requirement and confirm the new home satisfies it for the full duration.

A defensible decommissioning sequence:

1. **Confirm successful, approved migration/archive** — reconciliation passed, data accessible and renderable in the new system or archive, retention requirements met there.
2. **Define and approve a decommissioning plan** under change control, including which data is retained where and for how long.
3. **Verify retrievability from the destination** for representative records of each class before removing the source — actually open them, don't assume.
4. **Decide the legacy disposition**: full retirement (data fully migrated/archived, system removed), or maintained read-only access (where some data was deliberately left in place). If maintained, someone owns its security patching, access control, and supportability for the retention period.
5. **Securely dispose of the legacy system and its data** only after retention obligations are otherwise met, following controlled data-disposal practice so GxP data isn't destroyed prematurely or leaked.
6. **Document the whole thing** — the decommissioning is itself a record, and "where did the old data go" is a question that surfaces years later.

The decision that bites people is decommissioning too early or too eagerly. Deleting the source the week after cutover, before anyone has stress-tested whether the target can reproduce a tricky historical record, removes your only fallback. Keep the source recoverable until the new system has genuinely proven itself in operational use, and only then dispose — within the bounds of your retention obligations.

## The through-line

A GxP migration is judged by one question asked many ways: can you still produce every record, with its full meaning and history, and prove it's the same record it was before you moved it? Strategy decides what moves and how. Mapping and transformation rules decide whether meaning survives the trip. Completeness and accuracy verification, with pre-approved acceptance criteria, prove it did. Audit-trail and metadata preservation keep the record whole. Reconciliation makes it inspectable. And disciplined decommissioning, tied to real retention requirements, closes it out without destroying the thing you spent all that effort protecting.

Get those in order and a migration is just a well-controlled change. Skip the verification or rush the decommissioning, and you've created a data integrity problem that may not surface until an inspector asks to see a record you can no longer fully produce.
