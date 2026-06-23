---
title: "Data Migration Validation: Moving GxP Records Without Losing Integrity"
description: "How to validate GxP data migrations during system replacement, cloud moves, and consolidation: strategy, mapping, completeness and accuracy verification, audit-trail preservation, reconciliation, and decommissioning."
pubDate: 2026-06-20
tags: ["data migration", "data integrity", "GxP", "Annex 11", "Part 11", "CSV", "ALCOA+", "decommissioning"]
pillar: "csv-csa"
tier: "Advanced"
---

A data migration moves records from one place to another. That sounds trivial until the records are batch release data, electronic signatures, study results, complaint files, or anything else a regulator can ask to see years later. At that point a migration stops being an IT project and becomes a question of whether your GxP data still means what it meant before you touched it.

Migrations happen constantly in regulated environments. A LIMS gets replaced, a quality system moves from on-premise to a vendor's cloud, two companies merge and consolidate three document management systems into one, or a validated platform reaches end of support and the data has to land somewhere new. Each of these is a controlled change to records that fall under predicate rules, and each carries the same core risk: that something gets dropped, altered, truncated, or silently re-interpreted on the way across.

This article walks through how to validate that move. It starts with the strategy and mapping decisions a beginner needs to understand, then builds into the verification, reconciliation, and decommissioning detail that determines whether the migration holds up under inspection. By the end you should be able to scope a migration, write the deliverables, run the verification, and answer the questions an inspector will ask.

## Why migration is a data integrity event, not a copy job

The regulatory frame is the same one that governs the records in the first place. In the US, electronic records and signatures fall under 21 CFR Part 11, layered on top of the relevant predicate rules: 21 CFR 211 for drug GMP, 21 CFR 820 for device quality systems (and the QMSR final rule, effective February 2, 2026, which aligns 820 with ISO 13485), and 21 CFR 58 for nonclinical lab studies. In the EU, EudraLex Volume 4 GMP Annex 11 governs computerised systems and Chapter 4 governs documentation. The data integrity expectations themselves are spelled out in guidance: the MHRA's *GxP Data Integrity Guidance and Definitions* (2018) and the FDA's *Data Integrity and Compliance With Drug CGMP* guidance (2018) both make clear that integrity expectations apply across the data lifecycle, and a migration is part of that lifecycle. PIC/S PI 041-1 (2021) carries the same expectations internationally.

The shorthand most inspectors and quality units use is ALCOA+: data should be Attributable, Legible, Contemporaneous, Original, and Accurate, plus Complete, Consistent, Enduring, and Available. A migration can quietly break almost every one of these:

- **Attributable** breaks when a user ID or signature meaning doesn't carry across and a record can no longer be tied to who created or approved it.
- **Original** breaks when you migrate a flattened report instead of the underlying dynamic record, losing the ability to reprocess or re-examine.
- **Complete** breaks when audit-trail entries, metadata, or a subset of records are left behind.
- **Accurate** breaks when a transformation rounds a number, reformats a date, or maps a status code to the wrong value.
- **Enduring** and **Available** break when the source system is decommissioned before anyone confirmed the target can actually reproduce every record a regulator might ask for.

So the validation question is not "did the rows arrive" but "did the *meaning* of every record arrive intact, and can we prove it." That proof is what the rest of this article is about. For the deeper grounding on these principles, see [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and [data integrity foundations](/articles/data-integrity-foundations).

## Deliverables at a glance

A migration that survives inspection produces a defined set of controlled documents. Know what they are before you start, because gaps here are what inspectors find.

| Deliverable | Purpose | Owner (typical) | Approver |
|---|---|---|---|
| Migration Plan / Strategy | Defines scope, model, approach, roles, acceptance philosophy | Validation lead | QA |
| Risk Assessment | Ranks data classes by impact and likelihood of failure | Validation lead + SME | QA |
| Migration Specification (mapping) | Field-by-field source-to-target mapping and transformation rules | Business SME + IT | QA |
| Migration Protocol / IQ-OQ for tooling | Qualifies the ETL/migration tool against the spec | IT / validation | QA |
| Dry-Run / Trial Migration Report | Evidence the rehearsal worked on representative data | Validation lead | QA |
| Verification Protocol and Report | Completeness and accuracy evidence vs acceptance criteria | Validation + independent reviewer | QA |
| Reconciliation Report | Formal source-to-target agreement, exceptions dispositioned | Validation lead | QA |
| Cutover Runbook | Sequenced production execution with go/no-go gate | Project lead | QA / process owner |
| Migration Summary Report | Wraps the evidence, states fitness for GxP use | Validation lead | QA |
| Decommissioning Plan and Record | Controls retirement of the source after proof | System owner | QA |

For how these fit a wider validation effort, cross-link to [validation deliverables guide](/articles/validation-deliverables-guide) and [project managing validation](/articles/project-managing-validation).

## Migration strategy: pick the model before you touch data

Before any mapping, decide what kind of migration you're running, because it sets the validation burden.

**Big-bang vs phased.** A big-bang migration cuts over everything at once on a defined date. It's simpler to reconcile (one source state, one target state) but unforgiving: there's no partial fallback. A phased migration moves data in tranches (by site, by record type, by date range). It reduces blast radius but creates a window where the same data class lives in two systems, which means you need clear rules about which system is the system of record at any moment and how you avoid double-counting.

**Migrate vs archive vs leave in place.** Not every record has to move. A defensible strategy classifies records into:

| Disposition | When it applies | Validation focus |
|---|---|---|
| Migrate to new system | Active records still in operational use | Full mapping, transformation, completeness, accuracy verification |
| Archive to a validated repository | Records past active use but within retention | Readability, completeness, integrity of the archived copy |
| Retain in legacy (read-only) | Migration not feasible or not worth the risk | Continued availability and access control of legacy system |

The third option is legitimate and often the right answer for a small volume of complex historical records, but only if the legacy system stays accessible and supported for the full retention period. "We'll keep the old server around" is not a plan unless someone owns patching, access control, and the ability to actually retrieve a record on demand.

**Static vs dynamic data.** This distinction drives a lot of grief. A static record (a signed PDF, a scanned form) can be migrated as a fixed object. A dynamic record (a chromatography data file you can reprocess, a database record with live query and audit-trail behaviour) loses meaning if you migrate only a printout. MHRA guidance is explicit that the original dynamic record must be preserved where the ability to interact with the data is part of its meaning. If you're replacing a chromatography data system, migrating PDFs of the chromatograms is almost certainly not enough. See [static, dynamic records and true copies](/articles/static-dynamic-records-true-copies) and [chromatography data system integrity](/articles/chromatography-data-system-integrity).

Document all of this in a **Migration Plan** (sometimes a migration strategy document feeding the overall validation plan). Treat it as a controlled, approved deliverable governed by your CSV/CSA framework. GAMP 5 (Second Edition, 2022) gives the lifecycle scaffolding, and a risk-based, critical-thinking approach lets you scale effort to record criticality rather than validating every field of every record to the same depth. For the framework, see [GAMP 5 CSV framework](/articles/gamp5-csv-framework) and [computer software assurance](/articles/computer-software-assurance-fda).

### What goes in the Migration Plan

A reviewer should find these sections. Missing any of them is a common gap:

- Scope: systems involved, data classes in and out of scope, cutoff dates.
- Migration model: big-bang or phased, with rationale and the system-of-record rule during any overlap window.
- Approach summary: extract, transform, load, verify, reconcile, cutover, decommission.
- Roles and responsibilities (the RACI, see below).
- Source freeze and baseline strategy.
- Acceptance philosophy: how completeness and accuracy will be judged, sampling vs 100%.
- Rollback and contingency at cutover.
- References to the risk assessment, specification, and verification protocol.

## Roles and responsibilities

A migration touches IT, the business owner of the data, validation, and QA. Confusion about who owns what is a frequent root cause of dropped audit trails and unexplained record counts. Define it in a RACI and put it in the plan.

| Activity | Business / Process SME | IT / Migration Engineer | Validation | QA |
|---|---|---|---|---|
| Define data classes and criticality | A | C | R | C |
| Profile source data quality | C | R | A | I |
| Author migration specification (mapping) | R | R | A | C |
| Build and qualify migration tooling | I | R | A | C |
| Define acceptance criteria | C | C | R | A |
| Execute verification | C | C | R | I |
| Independent review of verification | I | I | R | A |
| Reconciliation sign-off | C | C | R | A |
| Go/no-go at cutover | A | C | C | A |
| Release new system for GxP use | C | I | C | A |
| Approve decommissioning | A (system owner) | C | C | A |

R = responsible, A = accountable, C = consulted, I = informed. The non-negotiable principle: the person who ran the migration is not the only person who confirms it was correct. Independent verification and QA oversight on acceptance and release are what an inspector expects to see. For the broader picture of who does what in a quality system, see [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) and [data governance roles and careers](/articles/data-governance-roles-and-careers).

## Risk assessment scopes the effort

A migration risk assessment answers a simple question for each data class: what happens if this migrates wrong, and how likely is that given the source data quality and the transformation involved? Drive it with the questions that actually predict failure:

- **Criticality of the record.** Batch disposition data, stability results, and signed approvals sit at the top. Reference lookups and inactive master data sit lower.
- **Source data quality.** Free-text fields, inconsistent legacy data entry, duplicate records, and orphaned references are where migrations break. Profile the source before you trust it.
- **Transformation complexity.** A 1:1 field copy is low risk. Splitting a concatenated field, deriving a status from business logic, or merging two systems' code lists is high risk.
- **Volume.** High-volume classes need automated, sampled verification with statistically defensible coverage; low-volume critical classes can justify 100% verification.

The output is a risk-ranked list that tells you where to spend 100%-verification effort and where a justified sampling plan is acceptable. Inspectors don't expect equal rigor everywhere; they expect rigor proportional to risk and a documented rationale for the choice.

### Worked example: a risk-ranked data class table

For a LIMS replacement, the assessment might produce something like this. The verification approach falls straight out of the risk rating:

| Data class | Criticality | Source quality | Transformation | Risk | Verification approach |
|---|---|---|---|---|---|
| Stability results | High | Good | Numeric copy, unit check | High | 100% field comparison, edge cases |
| Sample disposition / status | High | Mixed (free text) | Code-list mapping | High | 100% + mapping review |
| Audit trail history | High | Good | Schema differs | High | 100% completeness, render check |
| Analyst master data | Medium | Good | 1:1 | Low | Sample, attribute plan |
| Method definitions | High | Good | 1:1 with version refs | Medium | Sample + 100% of active methods |
| Instrument lookup table | Low | Good | 1:1 | Low | Count reconcile + spot check |

This is the artifact that lets you tell QA, and an inspector, exactly why the stability results got 100% verification and the instrument lookup table got a count plus spot check. The methodology is the same one used elsewhere in CSV; see [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology), [data criticality and data risk](/articles/data-criticality-and-data-risk), and [quality risk management](/articles/quality-risk-management).

## Data mapping and transformation rules

Mapping is the heart of the migration. A **migration specification** (or data mapping document) defines, field by field, how source maps to target. For each target field it should state:

- Source field(s) and source system
- Target field and target data type, length, and format
- Transformation rule (direct copy, format conversion, value mapping via a lookup, derivation logic, default value)
- Handling of nulls, blanks, and "unknown" values
- Code-list and controlled-vocabulary mappings (for example, how legacy status `CLSD` maps to target `Closed`)

### Worked example: a mapping specification row

A real mapping document is a table where every row is testable. A fragment:

| Source field | Source type | Target field | Target type | Transformation rule | Null handling | Expected for input `CLSD` |
|---|---|---|---|---|---|---|
| `SMP_STATUS` | char(4) | `sample_status` | varchar(20) | Lookup: CLSD→Closed, OPN→Open, CNCL→Cancelled | Null source → reject row to error log | `Closed` |
| `RESULT_VAL` | num(10,4) | `result_value` | decimal(12,4) | Direct copy, preserve all decimals | Null preserved as null | n/a |
| `ENTRY_DT` | char(8) YYYYMMDD | `entered_at` | timestamp (UTC) | Parse to date, assume site TZ, store UTC, keep TZ field | Null → reject | n/a |
| `ANALYST` | char(8) user ID | `analyst_id` + `analyst_name` | varchar | Map user ID to active-directory display name; keep ID | Unmatched ID → flag, do not drop | n/a |

Notice the last column. For every transformation rule, you write the **expected result for a known input** before you run anything. Those become your verification test cases. If you can't state what the right answer is, you can't verify the transformation.

Transformations are where silent corruption lives. The classic failure modes:

- **Date and time.** Two-digit years, ambiguous DD/MM vs MM/DD, dropped time components, and time-zone shifts. A timestamp that loses its zone or shifts by hours undermines the "contemporaneous" leg of ALCOA and can move a record across a date boundary. Decide and document a single canonical date-time representation, and preserve time zone explicitly. See [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).
- **Numeric precision and units.** Rounding, truncation, or unit changes silently alter results. A stability result migrated with fewer significant figures is a data integrity finding waiting to happen.
- **Character encoding.** Non-ASCII characters, Greek letters in method names, micro symbols, and accented names corrupt under encoding mismatches. Standardise on a defined encoding (commonly UTF-8) and test boundary characters explicitly.
- **Field truncation.** A target field shorter than the source field silently cuts data. Profile source field lengths against target constraints before migrating, not after.
- **Code-list collisions.** Merging two systems often produces overlapping codes with different meanings. Resolve these explicitly; never let an auto-mapping guess.

## Building and qualifying the migration tooling

Whatever moves the data (ETL scripts, a vendor migration utility, custom code) is itself part of the validated solution and needs to be controlled. You don't have to validate a commercial migration tool to the same depth as a GxP application, but you do have to demonstrate it does what your specification says for your data. In practice:

- Manage migration scripts under version control and change control. See [change control for validated systems](/articles/change-control-validated-systems).
- Qualify the tooling against the migration specification using representative test data, including deliberately messy edge cases (nulls, max-length strings, boundary dates, special characters, duplicate keys).
- Run the migration into a validation/test environment first and verify there before touching production.
- Keep migration code, configuration, and execution logs as part of the validation record.

Tooling built in-house (custom scripts, low-code transforms, spreadsheet helpers) carries the same expectations as any other GxP code. For that, lean on [validating scripts and low-code analytics](/articles/validating-scripts-low-code-analytics) and [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation).

Run the full process end-to-end in a non-production environment, a **migration dry run** or trial migration, against a production-representative data set. The dry run is where you discover the source data is dirtier than anyone admitted, the transformation rules have gaps, and the runtime is three times longer than the cutover window allows. Finding that in a rehearsal is cheap; finding it during cutover is not. A good dry run also gives you a measured runtime, which feeds the cutover window planning, and a known reject rate, which tells you whether your error handling can cope.

## Verification: completeness and accuracy

Verification proves the migrated data is right. The two pillars are completeness (nothing lost or added) and accuracy (every value correct after transformation). Both are mandatory; passing one doesn't imply the other.

**Completeness verification** answers "did every record that should have migrated actually migrate, and did nothing extra appear?"

- **Record counts** per data class: source count = target count (adjusting for any documented, intentional exclusions). Counts must reconcile exactly, with every difference explained. For example, "we expected to migrate 48,210 and migrated 48,210," or "we excluded 312 voided records per the migration spec, and 47,898 of 47,898 in-scope records migrated."
- **Referential integrity:** relationships survive. A test result still points to the correct sample; a signature still points to the correct record; a child record isn't orphaned from its parent.
- **No silent drops:** records that fail to migrate land in an error/reject log that someone reviews and dispositions. A migration that silently skips records it can't process is the single most dangerous failure mode, because the counts can still look plausible if you're not watching.

**Accuracy verification** answers "is each migrated value correct, including after transformation?"

- **100% verification** for the highest-criticality, lower-volume classes where feasible: every field compared source-to-target, often via an automated field-level comparison script that is itself verified.
- **Sampling** for high-volume classes, using a defensible plan. Spell out the sampling basis (a confidence and coverage rationale, or an accepted attribute sampling standard such as the ANSI/ASQ Z1.4 or ISO 2859-1 family), the acceptance criterion (commonly zero defects for critical attributes), and what happens on a failure. A single accuracy defect in a sample should trigger investigation and typically expansion to 100% verification of that class, not a shrug. See [statistics in quality](/articles/statistics-in-quality-cpk-control-charts).
- **Targeted edge-case checks** regardless of sampling: the longest strings, the special characters, the boundary dates, the records that exercised each transformation rule, and any records flagged as low quality during source profiling.

### Worked example: an automated field-comparison approach

For a high-volume class verified by sampling, a concrete plan reads like this. Population: 312,000 result records. Sampling standard: ISO 2859-1, general inspection level II, acceptance number zero for critical attributes. The selected sample of, say, 1,250 records is drawn at random plus a forced inclusion of every record that hit each transformation branch. For each sampled record, an automated script extracts the source value and the target value, applies the documented transformation to the source value independently, and compares the result to what actually landed in the target. Mismatches print to a discrepancy log with source key, expected, and actual. Acceptance: zero critical-field defects; any defect halts the verification, triggers a [deviation](/articles/deviation-management), and expands that class to 100%.

The comparison script is itself a piece of GxP-relevant code: version it, peer-review it, and prove on known-good and known-bad test rows that it actually flags errors. A comparison tool that always passes is worse than no tool.

Compare against a defined source baseline: a frozen, documented snapshot of the source taken at a known point. If the source keeps changing under you during a phased migration, you'll never reconcile cleanly. Either freeze the source for the relevant classes during cutover or capture and reconcile the delta deliberately.

Acceptance criteria should be written and approved before verification runs. Typical criteria:

| Check | Acceptance criterion |
|---|---|
| Record count per class | 100% reconciliation; every variance explained and approved |
| Critical field accuracy | Zero defects (100% or sampled with zero-defect acceptance) |
| Referential integrity | 100% of sampled relationships intact |
| Audit-trail completeness | Audit history present and legible for required records |
| Edge-case set | 100% pass |
| Reject/error log | 100% reviewed and dispositioned |

If a check fails, manage it like any other test failure: log it, investigate root cause, correct, and re-verify, under a documented process. See [validation test failure management](/articles/validation-test-failure-management) and [writing validation protocols and reports](/articles/writing-validation-protocols-and-reports).

## Audit trail and metadata preservation

This is the part teams most often underestimate. The record is not just the current value, it's the history of how that value came to be. Part 11 and Annex 11 both expect computer-generated, time-stamped audit trails for GxP electronic records, and the MHRA and FDA data integrity guidances treat the audit trail as part of the complete record. For the design and review side, see [audit trail design and review](/articles/audit-trail-design-and-review) and [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).

When you migrate, you have to decide and justify how audit-trail history travels:

- **Migrate the historical audit trail into the new system** so it's queryable alongside the data. Cleanest for ongoing use, hardest technically, because audit-trail schemas rarely match between systems.
- **Migrate audit history as an attached, readable record** (an exported, integrity-protected audit-trail file linked to each migrated record) when the target can't ingest foreign audit structures natively.
- **Retain audit history in the legacy system** under controlled read-only access for the retention period, with the migrated record cross-referenced to it.

Any of these can be defensible. What's not defensible is losing the audit history or being unable to show, for a given migrated record, who did what and when in its original life. Watch specifically for:

- **Metadata that gives data meaning:** units, method and version references, instrument IDs, result flags, review and approval status, and the user identities behind actions. Strip these and the data becomes ambiguous. See [data lifecycle and metadata](/articles/data-lifecycle-and-metadata).
- **Signature meaning.** A migrated electronic signature must carry its meaning: the printed name, the date and time, and the meaning such as authorship, approval, or review. Part 11 requires those signature components to remain associated with the record. A signature that migrates as a bare flag with no name, time, or meaning has lost its regulatory value. See [electronic signatures implementation](/articles/electronic-signatures-implementation).
- **The migration's own audit trail.** The act of migrating is itself a GxP-relevant data action. Records frequently get a system-generated note indicating they were migrated, with a date and a reference to the migration. That's good practice: it preserves attribution and contemporaneousness honestly, rather than making migrated records look natively created on the migration date.

### Worked example: preserving a signed approval

Say you migrate a signed sample approval. In the legacy system the record carried: result value, analyst ID, reviewer ID, approver ID, three timestamps, and three signature meanings (entered, reviewed, approved). A correct migration lands all of that. A bad one lands only the result value and an "approved" boolean, throwing away who approved, when, and in what role. To verify, pick a known historical signed record and confirm in the target that you can still see name, date, time, and meaning for each signature, and that they map to the same people and moments as the source. If you can't reproduce that, the signature did not survive, and that is a classic data integrity finding.

## Reconciliation and the cutover

Reconciliation is the formal, documented proof that source and target agree. It's the deliverable an inspector will ask for, so it has to be more than a developer's say-so. A reconciliation report typically captures, per data class: source baseline count, records selected for migration, records excluded (with reason), records migrated, records rejected (with disposition), and the result of accuracy verification against acceptance criteria. Every number should reconcile, and every exception should have an owner and a resolution.

### Worked example: a reconciliation row

| Data class | Source baseline | In scope | Excluded (reason) | Migrated | Rejected (disposition) | Accuracy result |
|---|---|---|---|---|---|---|
| Stability results | 48,210 | 47,898 | 312 (voided per spec) | 47,898 | 0 | 100% pass, 0 defects |
| Sample status | 312,000 | 312,000 | 0 | 311,994 | 6 (null status, under correction, re-migration pending) | Sampled, 0 critical defects |
| Audit trail records | 1,204,330 | 1,204,330 | 0 | 1,204,330 | 0 | Completeness 100%, render check pass |

The arithmetic has to close: at this snapshot, migrated plus rejected equals in scope, and in scope plus excluded equals baseline. The six rejected status records show the right behaviour: they were caught, logged, and put under correction for re-migration, not silently lost. Once the corrected records re-migrate, the migrated count for that class moves to 312,000 with zero open rejects.

Cutover is the controlled switch from old system to new as system of record. Plan it like a change: a sequenced runbook, a freeze on the source, the production migration run, reconciliation against acceptance criteria, a go/no-go decision by the quality unit, and a defined rollback or contingency if reconciliation fails. Don't release the new system for GxP use until reconciliation passes and is approved. And keep the source recoverable until you're certain the target is correct; decommissioning is a later, separate decision.

A workable cutover runbook sequence:

1. Announce freeze; stop writes to the source for in-scope classes; capture the baseline snapshot and counts.
2. Run the production migration; capture execution logs and the reject log.
3. Run completeness verification (counts, referential integrity, reject review).
4. Run accuracy verification per the approved plan.
5. Produce the reconciliation report; disposition every exception.
6. Quality unit reviews against acceptance criteria; records the go/no-go.
7. On go: release the target as system of record and notify users. On no-go: execute rollback or contingency and re-plan.
8. Keep the source in recoverable, read-only state pending decommissioning.

For phased migrations, reconcile each tranche and keep a master view so the final state is provably the sum of the parts with no gaps or overlaps.

## What inspectors look for

When a regulator reviews a migration, and they do, especially after a system replacement, the same handful of things come up:

- **A documented, approved migration plan and specification.** No mapping document is a red flag; it means transformations weren't controlled.
- **Reconciliation evidence with explained exceptions.** Counts that "roughly match" or unexplained record-count differences draw immediate scrutiny.
- **Audit trail and metadata preservation.** Can you show the full history of a migrated record, including who did what before migration? Lost audit trails are a frequent data integrity citation.
- **Dynamic data handling.** For chromatography, spectroscopy, and similar, did you preserve the ability to reprocess, or did you flatten to static reports?
- **Reject handling.** What happened to records that didn't migrate cleanly? "We don't know" is the wrong answer.
- **Independence and review.** Verification reviewed by someone other than the person who ran the migration; quality unit oversight on acceptance and release.
- **Continued availability.** Can you actually retrieve and render an old record now? Inspectors do ask to see a specific historical record reproduced. See [FDA inspection readiness](/articles/fda-inspection-readiness).

### Common mistakes and real finding patterns

These recur across migration-related findings, stated generically:

- **No migration specification or no approved mapping.** Transformations were applied without a controlled, pre-approved rulebook, so there is no way to show what "correct" was supposed to be.
- **Record counts that do not reconcile, with no explanation.** A difference of a few hundred records "must be duplicates" is asserted, not demonstrated.
- **Silent record loss.** Records that failed to process were not captured in a reject log, were not reviewed, and were discovered only when someone went looking for a specific old record.
- **Audit trail not migrated or not reviewable.** The current values came across but the history did not, so attribution and the sequence of changes can no longer be shown.
- **Dynamic data flattened.** Chromatograms or spectra were migrated as PDFs, removing the ability to reprocess, integrate, or re-examine the raw data.
- **Verification done by the migration team alone.** No independent review, so the people who built the migration are the only ones attesting it worked.
- **Source destroyed too soon.** The legacy system was decommissioned before the target had reproduced difficult historical records, leaving no fallback.
- **Time-zone and rounding drift.** Timestamps shifted or numeric precision was lost, and nobody checked because the data "looked fine."

## Legacy decommissioning and retention

Once the data has moved and the target is proven, the legacy system becomes a liability: it costs money, holds risk, and may run unsupported software. But you don't get to delete it on the project manager's timeline. Decommissioning is a controlled decision governed by record-retention obligations.

Retention periods come from the predicate rules and applicable regulations, not convenience. Drug GMP records under 21 CFR 211.180 generally must be retained for at least one year after a batch's expiry date (longer for certain products and for some records). Device and combination-product records now fall under the QMSR (21 CFR Part 820, effective February 2, 2026, incorporating ISO 13485:2016 by reference): record control sits at 820.35 (ISO 13485 clause 4.2.5), with retention tied to the lifetime of the device as defined by the manufacturer plus applicable regulatory requirements. The legacy QSR's "not less than two years from release" minimum no longer appears in the Part 820 text. Nonclinical study records fall under 21 CFR 58. Clinical essential records follow ICH E6(R3) good clinical practice retention expectations (Step 4, January 2025; FDA guidance published September 2025), which reframes the old "essential documents" as "essential records." Map every migrated and archived data class to its retention requirement and confirm the new home satisfies it for the full duration. See [stability programs and ICH](/articles/stability-programs-ich) for one common driver of retention horizons and [GLP under 21 CFR 58](/articles/glp-21-cfr-58-nonclinical) and [ICH E6 good clinical practice](/articles/ich-e6-good-clinical-practice) for others.

A defensible decommissioning sequence:

1. **Confirm successful, approved migration or archive:** reconciliation passed, data accessible and renderable in the new system or archive, retention requirements met there.
2. **Define and approve a decommissioning plan** under change control, including which data is retained where and for how long.
3. **Verify retrievability from the destination** for representative records of each class before removing the source. Actually open them; don't assume.
4. **Decide the legacy disposition:** full retirement (data fully migrated or archived, system removed), or maintained read-only access (where some data was deliberately left in place). If maintained, someone owns its security patching, access control, and supportability for the retention period.
5. **Securely dispose of the legacy system and its data** only after retention obligations are otherwise met, following controlled data-disposal practice so GxP data isn't destroyed prematurely or leaked.
6. **Document the whole thing.** The decommissioning is itself a record, and "where did the old data go" is a question that surfaces years later.

The decision that bites people is decommissioning too early or too eagerly. Deleting the source the week after cutover, before anyone has stress-tested whether the target can reproduce a tricky historical record, removes your only fallback. Keep the source recoverable until the new system has genuinely proven itself in operational use, and only then dispose, within the bounds of your retention obligations. Backup and restore of the new home also has to be proven; see [backup, restore and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation).

## Cloud and SaaS migrations: the extra wrinkles

Moving GxP data into a vendor's cloud adds considerations on top of everything above. The vendor controls part of the stack, so your validation has to account for what you can and cannot see.

- **Data location and export.** Know where the data physically resides and confirm you can export your records, with audit trail, in a usable form at any time, including at end of contract. A migration into a platform you cannot fully export from is a future migration trap.
- **Shared responsibility.** The vendor manages infrastructure and platform; you remain accountable for the GxP fitness of your configured system and your data. Document the split. See [cloud and SaaS validation](/articles/cloud-saas-validation) and [software supplier assessment](/articles/software-supplier-assessment-csa).
- **Audit-trail equivalence.** Confirm the cloud platform's audit trail captures the same actions with the same attribution you had before, and that migrated history is preserved or attached.
- **Access control and segregation.** Confirm your records are logically isolated and that access control and security meet your standard. See [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control).

The migration validation principles do not change in the cloud. What changes is that some evidence comes from the vendor (through a qualified supplier assessment and the vendor's own qualification material) and some you generate yourself, and you must be explicit about which is which.

## Interview-ready: questions and how to answer them

These are the questions an interviewer, auditor, or inspector asks on this topic. Short, concrete answers signal that you have actually done a migration.

**"Why is a data migration a data integrity event and not just an IT copy?"**
Because the records are GxP records under predicate rules and Part 11 or Annex 11, and a migration can break any ALCOA+ attribute: lose attribution, flatten dynamic data, drop audit trails, round a number, or shift a timestamp. The test is not "did the rows arrive" but "did the meaning of every record arrive, and can we prove it."

**"How do you decide what gets 100% verification versus sampling?"**
Risk. I rank each data class by criticality, source data quality, transformation complexity, and volume. High-criticality, lower-volume classes get 100% field comparison. High-volume classes get a defensible attribute sampling plan with a zero-defect acceptance for critical fields, plus forced edge-case inclusion. A single critical defect in a sample expands that class to 100%.

**"What is the difference between static and dynamic data in a migration?"**
A static record is a fixed object like a signed PDF and can move as-is. A dynamic record, like a chromatography data file, has meaning in the ability to reprocess and interrogate it. MHRA guidance requires preserving the original dynamic record. Migrating a PDF of a chromatogram instead of the reprocessable file is a finding.

**"How do you handle the audit trail during migration?"**
Three defensible options: migrate it into the new system, attach it as an integrity-protected readable export linked to each record, or keep it read-only in the legacy system with a cross-reference. What is never acceptable is losing the history or being unable to show who did what and when for a given migrated record. I also add a migration note to each record so it doesn't look natively created on the migration date.

**"Walk me through reconciliation."**
Per data class I reconcile source baseline count, in-scope count, exclusions with reasons, migrated count, rejects with disposition, and the accuracy result against pre-approved criteria. The arithmetic has to close, and every exception has an owner and a resolution. The reject log is reviewed 100%, because silent drops are the most dangerous failure.

**"What is the most dangerous failure mode and how do you guard against it?"**
Silent record loss: records that fail to process get skipped while the counts still look plausible. The guard is a mandatory error/reject log that someone independent reviews and dispositions, plus exact count reconciliation, so any drop shows up and gets explained.

**"When can you decommission the source system?"**
Only after the migration is approved, the target can render and retrieve representative records of every class, and retention requirements are satisfied at the destination, all under an approved decommissioning plan and change control. And I keep the source recoverable until the new system has proven itself in real operational use. Retention horizons come from the predicate rules, like at least one year past expiry for many drug GMP records under 21 CFR 211.180, not from convenience.

**"Who signs off, and why does independence matter?"**
The business owns the data and criticality, IT and validation build and qualify the tooling and run verification, and QA is accountable for acceptance and release. The person who ran the migration cannot be the only one who confirms it worked. Independent verification and QA oversight are exactly what an inspector checks for.

For broader interview practice across topics, see [GxP quality interview preparation](/articles/gxp-quality-interview-preparation).

## The through-line

A GxP migration is judged by one question asked many ways: can you still produce every record, with its full meaning and history, and prove it's the same record it was before you moved it? Strategy decides what moves and how. Mapping and transformation rules decide whether meaning survives the trip. Completeness and accuracy verification, with pre-approved acceptance criteria, prove it did. Audit-trail and metadata preservation keep the record whole. Reconciliation makes it inspectable. And disciplined decommissioning, tied to real retention requirements, closes it out without destroying the thing you spent all that effort protecting.

Get those in order and a migration is just a well-controlled change. Skip the verification or rush the decommissioning, and you've created a data integrity problem that may not surface until an inspector asks to see a record you can no longer fully produce.
