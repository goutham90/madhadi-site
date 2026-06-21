---
title: "Backup, Restore, and Disaster Recovery Validation for GxP Systems"
description: "How to validate that a GxP system's backups can actually be restored: restore testing, RTO/RPO, archival over retention periods, and the Annex 11 and Part 11 record-availability rules inspectors cite."
pubDate: 2026-06-20
tags: ["backup", "disaster recovery", "Annex 11", "Part 11", "data integrity", "CSV", "business continuity", "record retention"]
pillar: "csv-csa"
tier: "Intermediate"
---

A backup that has never been restored is a hypothesis, not a control. Plenty of regulated companies run nightly backups, watch the job report green, and assume the data is safe. Then a database corrupts, a virtual machine fails to boot, or someone needs a batch record from a system that was decommissioned three years ago, and the restore either fails, takes a week, or produces a file nobody can open. The backup ran fine every single night. It just never proved anything.

It is also one of the most under-tested controls in computerized system validation. Teams pour effort into functional testing, electronic signature configuration, and audit trail review, then treat backup and restore as an IT checkbox. Inspectors have learned to probe exactly there, because record availability is a legal requirement, not an IT nicety. What follows is what "validated backup and restore" actually means: the difference between backup and restore verification, how to design and document a restore test, what recovery time and recovery point objectives are and why they belong in your risk assessment, how archival differs from backup over a retention period, and the regulatory language that makes all of this enforceable.

This applies across biotech, pharmaceutical, medical device, and broader life-sciences operations. A LIMS holding stability data, an MES recording manufacturing execution, an electronic batch record system, a chromatography data system, a clinical data management platform, a device design history file repository, a pharmacovigilance safety database: every one of them holds records a regulator can demand on inspection, and every one needs a restore you have actually proven.

## Why this is a regulatory requirement, not just good IT hygiene

The obligation to keep records and produce them on demand is baked into the predicate rules and the electronic-records rules layered on top of them.

In the US, 21 CFR Part 211 requires that production and control records be retained, and 21 CFR Part 11, the rule governing electronic records and electronic signatures, requires "protection of records to enable their accurate and ready retrieval throughout the records retention period" (21 CFR 11.10(c)). "Ready retrieval" is the phrase that does the work. A record you cannot retrieve, or cannot retrieve in a readable form, is not protected, regardless of how diligently it was backed up.

In the EU, EudraLex Volume 4, Annex 11 (Computerised Systems) is even more explicit. Annex 11 Clause 7.2 states that regular back-ups of all relevant data should be done, and, critically, that the integrity and accuracy of backup data and the ability to restore the data should be checked during validation and monitored periodically. Annex 11 Clause 17 covers archiving: data may be archived, and that data should be checked for accessibility, readability, and integrity, with any changes to the system or environment requiring you to demonstrate that the archived data can still be retrieved.

MHRA's "GxP Data Integrity Guidance and Definitions" (2018) and PIC/S PI 041 reinforce the same point in data-integrity terms: a "true copy" must preserve content and meaning, and backups exist to enable reconstruction of activities. For devices, FDA's Quality Management System Regulation (21 CFR Part 820, harmonized with ISO 13485 effective February 2, 2026) and its record-control requirements carry the same expectation that records remain retrievable and legible throughout their retention. The common thread is that the regulator does not care that you *have* a backup. It cares that you have *demonstrated you can restore a usable record* and that you keep demonstrating it.

| Source | Provision | What it requires |
|---|---|---|
| 21 CFR 11.10(c) | Protection of records | Accurate and ready retrieval throughout the retention period |
| 21 CFR 211.180 | Records retention | Retention of production/control records (predicate rule) |
| 21 CFR 820.180 / 820.181 | Device record controls | Records available, legible, retrievable for the device retention period |
| EU GMP Annex 11, Cl. 7.2 | Data storage / back-up | Back-up of relevant data; restore ability checked during validation and periodically |
| EU GMP Annex 11, Cl. 17 | Archiving | Archived data checked for accessibility, readability, integrity |
| MHRA DI Guidance (2018) | Data integrity | Backups enable reconstruction; true-copy content and meaning preserved |
| PIC/S PI 041 | DI in regulated environments | Same DI expectations across the data lifecycle |

A practical note on hierarchy: the predicate rule (Part 211, Part 820, GLP under 21 CFR 58, GCP under ICH E6) defines *what records you must keep and for how long*. Part 11 and Annex 11 define *how electronic records and signatures must be controlled and retrieved*. Backup and restore validation lives at the intersection. You are proving that an electronic-records control (the backup) satisfies a predicate-rule obligation (the record must exist and be producible).

## Backup is not restore, and restore is not recovery

These three words get used interchangeably and they mean different things. Pin the definitions down and half the validation gaps disappear.

**Backup** is the act of producing a copy of data (and sometimes the system configuration or full machine image) and storing it somewhere separate from the source. A successful backup job means bytes were written to a target and a checksum or log confirmed completion. That is all it means.

**Restore** is taking a backup and reconstituting the original data or system from it. A successful restore means you took yesterday's backup, put it back, and got the data into a usable state. This is the step almost nobody tests, because doing it correctly means deliberately destroying or sidelining something and rebuilding it.

**Recovery** (or disaster recovery) is restoring an entire service, application, database, integrations, infrastructure, network access, to the point where users can resume regulated work. Recovery is broader than restore. You can restore a database table and still not have a working system because the application server, the interface to the instrument, or the single sign-on dependency is gone.

Validation has to address all three. A backup procedure that is qualified but never restore-tested fails Annex 11 Clause 7.2 on its face. A restore test that recovers a single file but never proves the full system comes back fails any serious business continuity assessment.

| Term | What "success" means | What it does NOT prove |
|---|---|---|
| Backup | Copy written to a separate target; completion log/checksum green | That the copy can be read back or used |
| Restore | Data reconstituted into a usable state in a target environment | That the full service (app, interfaces, auth) works end to end |
| Recovery | Whole service back online; users can resume regulated work | Nothing further; this is the end goal, but it depends on a proven restore |

## Designing the backup strategy first

Before you can validate a restore, you need a defensible backup strategy, and that strategy should fall out of a risk assessment, not out of whatever the IT default schedule happens to be. GAMP 5 (Second Edition, 2022) frames this well: scale the rigor to the system's risk, complexity, and novelty. A GxP system that holds released-batch data and supports product disposition deserves a different backup posture than a peripheral system that holds no quality-relevant records.

Decisions the strategy has to make explicit:

- **Scope of what is backed up.** Application data only, or data plus configuration, or full system images? For databases, are you capturing transaction logs to enable point-in-time recovery, or only nightly full dumps? Audit trails and metadata must be in scope. A backup that preserves results but loses the audit trail does not preserve content and meaning.
- **Frequency.** Daily is common, but the right answer comes from how much data you can afford to lose (see RPO below). A system taking high-frequency instrument data may need continuous or hourly capture; a system updated weekly does not.
- **Retention of backup copies.** How many generations are kept, and for how long. This is distinct from record retention. You keep many short-lived backups for operational recovery, plus a separate archival strategy for the full legal retention period.
- **Backup type rotation.** Full, incremental, and differential backups carry different restore costs. An incremental chain is fast to write but slow and fragile to restore (every link must survive). A full backup is heavy to write but simple to restore. The strategy should state the rotation and confirm the restore path was the one you actually tested.
- **Geographic and media separation.** The classic 3-2-1 principle (three copies, two media types, one off-site) maps cleanly onto GxP. A backup sitting on the same storage array as the source is not a backup against array failure or ransomware.
- **Encryption and access control.** Backups contain the same regulated data as the source and need the same protection. An unencrypted backup tape or an open cloud bucket is a data-integrity and confidentiality exposure. Key management matters as much as the encryption itself: a backup you cannot decrypt is a backup you cannot restore.
- **Immutability.** Ransomware specifically targets backups. Write-once / immutable backup storage (object-lock, WORM media) is increasingly an expectation, not a luxury, for any system whose records must survive an attack.

Document these decisions in a backup and recovery plan or an equivalent controlled procedure, and reference the risk assessment that justified the choices. When an inspector asks "why daily and not hourly," the answer must be a documented risk decision, not a shrug. The same logic ties into your [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology) and [data criticality and data risk](/articles/data-criticality-and-data-risk) work: the criticality of the data the system holds sets the backup posture.

### A worked strategy example

Consider a mid-criticality LIMS holding stability and release-testing results for a small-molecule product.

| Decision | Choice | Justification (documented) |
|---|---|---|
| Scope | Database (results + audit trail) + application config + nightly transaction logs | Audit trail in scope to preserve meaning; config needed to rebuild app |
| Frequency | Full nightly + transaction logs every 15 min | RPO of 15 min for in-flight results; full nightly bounds restore complexity |
| Backup retention | 35 daily, 12 monthly, 7 yearly | Operational recovery window + bridge to the archive |
| Separation | On-prem disk + off-site object storage (immutable, object-lock 30 days) | 3-2-1; ransomware survivability |
| Encryption | AES-256 at rest, keys in HSM, escrow copy held by QA-controlled custody | Confidentiality + provable decryptability |
| RPO / RTO | RPO 15 min, RTO 4 hours | From business impact analysis: a half-day LIMS outage delays disposition |

That table is the kind of artifact an inspector wants to see, every cell traceable to a documented decision, not an IT default.

## RTO and RPO: the two numbers that drive everything

Two objectives anchor disaster recovery, and most teams cannot state them for their own systems.

**Recovery Point Objective (RPO)** is the maximum acceptable amount of data loss, measured in time. An RPO of 24 hours means that after a disaster you accept losing up to a day's worth of data, which in turn means a daily backup is acceptable. An RPO of one hour demands hourly backups or continuous replication. RPO drives backup frequency.

**Recovery Time Objective (RTO)** is the maximum acceptable time to restore the service to working order. An RTO of four hours means that from the moment of failure, you have four hours to bring users back online. RTO drives the architecture: cold backups restored from tape will never meet a one-hour RTO; you need warm standby or replication for that.

| Objective | Question it answers | What it drives | Failure mode if ignored |
|---|---|---|---|
| RPO | How much data can we lose? | Backup frequency, replication | Silent data loss exceeds tolerance |
| RTO | How long can we be down? | Recovery architecture, staffing | Outage drags on, batches can't release |

Both numbers should come from a business impact analysis tied to the GxP process the system supports. A system supporting real-time release of sterile product has a very different RTO than a stability-data archive. Set the objectives, then prove during a restore test that you actually meet them. An RTO of four hours you have never timed is an aspiration, not a control. When the restore test takes eleven hours, you have either found a problem to fix or a number to revise, and either beats discovering it during a real outage.

A common point of confusion: RPO and RTO are *not* the same as backup frequency and backup duration. Backup frequency is one input to meeting RPO; replication, log shipping, and standby architecture are others. A team that conflates "we back up daily" with "our RPO is 24 hours" has skipped the analysis of whether 24 hours of loss is actually tolerable for that process.

## Validating the restore: the test that actually matters

This is the core. A restore qualification should be a documented, pre-approved protocol with explicit acceptance criteria, executed against a representative environment, with verified evidence retained. Treat it with the same rigor as any other qualification activity, the same discipline described in [writing validation protocols and reports](/articles/writing-validation-protocols-and-reports).

**Define the test environment.** Restoring into production to prove a restore works is reckless, you risk overwriting live data. Restore into a qualified non-production environment that is representative of production (same database engine and version, same application version, comparable infrastructure). Document any differences and justify why they do not invalidate the result.

**Select representative data and a realistic scenario.** Do not restore an empty test database and call it proven. Use a backup that contains real, varied, GxP-relevant records: completed transactions, electronic signatures, audit trail entries, attachments, and metadata. Define the failure scenario you are simulating, full database loss, single corrupted table, full server rebuild, or full site loss, because each exercises different parts of the procedure.

**Execute against pre-approved acceptance criteria.** The protocol must state, before execution, what "pass" looks like. Concrete, verifiable criteria include:

- The restored record count matches the source for a defined set of objects (no silent truncation).
- A defined sample of records is verified field-by-field against a pre-restore reference (content and meaning preserved, including audit trail and signature data).
- Electronic signatures and their bindings remain intact and attributable after restore.
- Audit trail entries are present, complete, and chronologically consistent.
- The application opens, authenticates, and renders restored records in human-readable form: the data is not merely present in the database but usable through the application.
- Interfaces and integrations function, or their restoration is covered by a separate documented step.
- The restore completed within the stated RTO, and the recovered point is within the stated RPO.

**Use checksums or hashes where you can.** For file-based records, comparing a hash of the source file to the restored file is the cleanest objective evidence that the bytes are identical. For database records, count reconciliation plus field-level sampling against a documented reference is the practical equivalent.

**Capture evidence.** Screenshots, restore logs, hash comparison output, signed verification sheets, and the timing record for RTO/RPO. Evidence must be attributable, contemporaneous, and reviewable, the same ALCOA+ expectations that apply to any GxP record (see [ALCOA+ in detail](/articles/alcoa-plus-deep-dive)) apply to the records of your restore test.

**Test the readable-form requirement explicitly.** Part 11's "accurate and ready retrieval" and Annex 11's "readability" mean the restored data must be presentable in a form a human can review. A restored database that no current application version can open fails this even though every byte is present. This is the trap that catches decommissioned and migrated systems.

### A worked restore-test protocol skeleton

A usable protocol does not have to be long, but every section has to be there. Here is the spine of one for a database-backed GxP application.

| Section | Content |
|---|---|
| Purpose / scope | "Verify that a full restore of System X from off-site backup into the QUAL environment reproduces complete, readable, attributable records within RTO 4h / RPO 24h." |
| References | Backup & recovery plan, risk assessment, RTO/RPO source (BIA), SOP for restore |
| Roles | IT/infrastructure executes; system owner witnesses; QA reviews and approves |
| Pre-conditions | Backup selected (date/ID), QUAL environment confirmed representative, pre-restore reference dataset captured (record counts + sampled field values + file hashes) |
| Test steps | 1. Record start time. 2. Provision/clean QUAL target. 3. Restore database + config from backup ID. 4. Restart application. 5. Authenticate. 6. Open sampled records. 7. Compare counts, fields, signatures, audit trail. 8. Record end time. |
| Acceptance criteria | The seven bullet criteria above, each stated as pass/fail |
| Evidence | Restore log, screenshots of rendered records, hash comparison output, count reconciliation, timing record, deviation log |
| Result / conclusion | RTO/RPO actuals vs target; pass/fail; deviations and disposition |

### A worked acceptance-criteria result

What a filled-in result row looks like after execution:

| Criterion | Target | Actual | Pass/Fail |
|---|---|---|---|
| Record count, "Results" table | 482,118 (pre-restore reference) | 482,118 | Pass |
| Sampled records field match (n=25) | 25/25 fields identical | 25/25 | Pass |
| E-signatures intact and attributable | All sampled signatures bind to original signer | 25/25 bound | Pass |
| Audit trail complete and chronological | No gaps; timestamps monotonic | Complete | Pass |
| Records render in application | Open and human-readable | Rendered | Pass |
| Restore time | <= 4h (RTO) | 3h 12m | Pass |
| Recovered point | <= 24h old (RPO) | 9h old | Pass |

When a row fails, it goes to deviation handling, not a quiet re-run. A restore that misses RTO by an hour is a real finding: route it through [validation test failure management](/articles/validation-test-failure-management) and [deviation management](/articles/deviation-management), investigate root cause, and either fix the procedure or formally revise the objective with justification.

## Roles and responsibilities

Backup and restore validation crosses IT, the business, and quality, and unclear ownership is where it falls apart. A simple RACI keeps it honest. See [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) for the broader pattern.

| Activity | IT / Infrastructure | System / Business Owner | Quality Assurance |
|---|---|---|---|
| Define backup strategy | Propose technical design | Approve scope and objectives | Review against risk assessment |
| Set RTO / RPO | Advise on feasibility | Own the numbers (from BIA) | Confirm justified and documented |
| Write restore protocol | Draft technical steps | Review for completeness | Approve before execution |
| Execute restore test | Perform restore | Witness, confirm usability | Witness/review evidence |
| Approve restore result | Provide actuals | Confirm fitness for use | Approve report, sign off |
| Periodic re-verification | Schedule and run | Confirm still required | Track in periodic review |
| Archive readability check | Retrieve and render | Confirm records usable | Approve evidence |

The recurring mistake is letting IT own the whole thing. IT can run the backup software, but only the system owner can say whether the restored records are usable for the regulated purpose, and only quality can confirm the evidence meets ALCOA+ and the acceptance criteria were met. A restore test signed only by IT is incomplete.

## Periodic re-verification, not a one-time event

Annex 11 Clause 7.2 says restore ability should be checked during validation *and monitored periodically*. A single restore test at go-live does not discharge the obligation. Environments drift: database versions get patched, backup software gets upgraded, storage gets migrated, and a procedure that worked at qualification quietly stops working.

Build periodic restore verification into the system's ongoing operation: a defined frequency (annual is common; risk may justify more often for high-impact systems), documented like any other periodic review, with the same acceptance criteria. Fold it into the [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review) cycle so it is not orphaned.

Trigger an additional restore verification on any significant change: a backup-software upgrade, a storage platform migration, a database major-version upgrade, or a move to a new data center or cloud region. [Change control for validated systems](/articles/change-control-validated-systems) should explicitly ask, "does this change affect our ability to restore?" and route to a restore test when the answer is yes. Add a single checkbox to the change-control form ("restore capability impacted? Y/N, if Y, restore test required") and you close the most common periodic gap with almost no overhead.

## Archival over the full retention period: a different problem

Operational backups solve "the system broke yesterday." Archival solves "we need a record from a system that no longer exists, eight years from now." These are genuinely different problems and conflating them is a common gap.

Retention periods come from the predicate rules and product type: 21 CFR 211.180 sets pharmaceutical record retention obligations (commonly batch records retained one year past expiry, and longer by procedure), 21 CFR 820.180 sets device record retention tied to expected device life, and clinical records under ICH E6(R2)/E6(R3) Good Clinical Practice carry their own essential-document retention running years past marketing authorization or study discontinuation. Some records must survive for decades. No backup-rotation scheme keeps daily backups for twenty years, and the application that wrote the record may be retired long before the retention clock runs out.

Annex 11 Clause 17 is the governing expectation: archived data should be checked for accessibility, readability, and integrity, and if the system is changed, the ability to retrieve the archived data must be ensured. Practical implications:

- **Decide the archive format deliberately.** Keeping a frozen instance of the legacy application available for read-only retrieval is one approach but is expensive and itself ages. Migrating records to a long-lived, application-independent format (a validated PDF/A rendering of the human-readable record, plus the structured data and audit trail in an open, documented format such as XML or CSV) is often more durable, provided the migration is validated to preserve content and meaning.
- **Validate the migration if you migrate.** Moving records from a retiring system into an archive is a data migration and must be validated like one: defined mapping, verification that source and target match, audit trail and metadata carried across, and a reconciliation report. The discipline is the same as in [data migration validation](/articles/data-migration-validation). A migration that loses the audit trail destroys the data integrity of the archived record.
- **Periodically prove readability.** Annex 11 means you cannot archive and forget. On a defined cycle, retrieve a sample of archived records and confirm they are still accessible and readable with currently available tools. Media degrades, formats obsolesce, and decryption keys get lost; the periodic check is how you find out before an inspector or an investigation does.
- **Preserve the metadata and audit trail, not just the result.** An archived result without its audit trail and contextual metadata is not a complete record and does not preserve meaning. The [static vs dynamic records and true copies](/articles/static-dynamic-records-true-copies) distinction matters here: a dynamic record (one you interrogate, reprocess, or filter) archived only as a flat static image may have lost the very functionality that made it a complete record.

### Backup vs archive at a glance

| Dimension | Operational backup | Archive |
|---|---|---|
| Purpose | Recover from recent failure | Preserve records for the full retention period |
| Horizon | Days to months | Years to decades |
| Format | Native (DB dump, image) | Application-independent, long-lived (PDF/A + open structured data) |
| Restore target | Same/compatible system version | Independent of the original application |
| Key risk | Restore fails or is too slow | Format obsolescence, media decay, lost keys |
| Governing clause | Annex 11 Cl. 7.2 | Annex 11 Cl. 17 |

## Business continuity: the part beyond the data

Disaster recovery restores the system. Business continuity keeps the regulated *process* running while the system is down and ensures controlled re-entry afterward. A validated restore that takes eight hours still leaves eight hours of operations to manage, and that has to be planned, not improvised.

A business continuity plan for a GxP system should define the approved manual or alternative procedure used while the system is unavailable (paper batch records, manual logbooks, a backup instrument readout), how data captured during the outage is reconciled back into the system once it returns, and who has authority to declare the system down and to authorize the manual fallback. Crucially, the manual fallback procedure itself must be controlled and GxP-compliant. Falling back to an uncontrolled spreadsheet during an outage creates a data-integrity gap that an inspector will find later in the reconciled records. Re-entry of outage-period data must preserve the original time of activity and the identity of the person who performed it; back-dating or attributing reconciled entries to the person doing the typing breaks attributability and contemporaneousness. The handling of these mixed paper-then-electronic situations follows the same rules as any [hybrid paper and electronic record](/articles/hybrid-paper-electronic-records).

A short worked example. A QC instrument's data system goes down mid-run. The lab falls back to a pre-approved paper form, technician records the reading with their initials and the actual clock time, and the supervisor co-signs. When the system returns, a designated, trained person transcribes those entries, records the *original* time of test and the *original* analyst, attaches the scanned paper original as the source, and the entry is reviewed and approved. The audit trail shows both the original activity time and the later transcription time, with no ambiguity about who did what when. That is controlled reconciliation. The failure pattern is the opposite: the data reappears with today's date and the typist's name, and the paper originals are nowhere to be found.

## What inspectors actually look for

Citations in this area cluster around a predictable set of weaknesses. Knowing them lets you self-assess before someone else does. These patterns show up across FDA Form 483 observations and EU GMP deficiencies; the [FDA warning letter patterns](/articles/fda-warning-letters-patterns) article covers the broader trend.

- **No evidence of a successful restore test.** The single most common finding. Backups run; restores were never proven. The inspector asks for the restore test record and there isn't one.
- **Restore test that never tested readability.** Data restored to a database but never opened through the application, so "accurate and ready retrieval" in usable form was never demonstrated.
- **No periodic re-verification.** A restore proven once at go-live, never repeated, even after a backup-software upgrade or storage migration. Annex 11 explicitly asks for periodic monitoring.
- **RTO/RPO undefined or untested.** The organization cannot state how much data it can lose or how long recovery takes, so the backup frequency and recovery architecture have no documented justification.
- **Archive readability never checked.** Long-retention records sitting on aging media or in an obsolete format, with no evidence anyone confirmed they can still be opened.
- **Audit trail or metadata lost on restore or migration.** Results recovered, but the audit trail did not survive, so content and meaning were not preserved.
- **Backups not protected.** Unencrypted, mutable, or co-located backups that fail against ransomware or storage failure, the very events backups exist to defend against.
- **No reconciliation of outage-period data.** Business continuity invoked, manual records created, but no controlled, attributable process for getting that data back into the system.
- **Restore test ran in an unrepresentative environment.** Restore "proven" against a different database version or an empty test instance, so the result does not transfer to a real production recovery.

## Interview questions and how to answer them

If you work in CSV, data integrity, or quality, expect these in interviews and in inspections. Strong answers are specific, cite the rule, and show you understand the difference between having a backup and proving a restore. The [GxP quality interview preparation](/articles/gxp-quality-interview-preparation) article has more on the format.

**"What is the difference between a backup and a restore, and why does it matter for compliance?"** A backup writes a copy to a separate target. A restore reconstitutes usable data from that copy. It matters because Annex 11 Clause 7.2 requires that the *ability to restore* be checked during validation and periodically, and Part 11 (11.10(c)) requires accurate and ready retrieval. A green backup job proves neither; only a restore test does.

**"What are RTO and RPO and how do you set them?"** RPO is the maximum tolerable data loss in time; it drives backup frequency. RTO is the maximum tolerable downtime; it drives recovery architecture. You set both from a business impact analysis tied to the GxP process the system supports, then you prove them in a timed restore test rather than asserting them on paper.

**"How would you design and execute a restore test?"** Pre-approved protocol with explicit acceptance criteria, a representative non-production environment, a backup containing real varied records including audit trail and signatures, a defined failure scenario, count reconciliation plus field-level verification against a pre-restore reference, an explicit check that records render readably through the application, and a timing record proving RTO/RPO. Then capture ALCOA+-compliant evidence and route any failure through deviation management.

**"How is archival different from backup?"** Backup is short-horizon operational recovery. Archival preserves records across the full retention period, often decades, in an application-independent format, with periodic readability checks under Annex 11 Clause 17. If records move from a retiring system into the archive, that is a validated data migration that must carry the audit trail and metadata.

**"A backup software upgrade is going through change control. What do you do?"** Treat it as a change that may affect restore capability. The change control should trigger a restore verification in the upgraded environment before the upgrade is closed, because the procedure proven on the old version is not automatically valid on the new one.

**"How do you keep data integrity during a system outage?"** A pre-approved, controlled manual fallback procedure (not an ad hoc spreadsheet), recording the actual time and the actual person at the moment of activity, then a controlled reconciliation that preserves the original time and attribution when data is re-entered, with the paper originals retained as source. The audit trail should make the transcription visible and distinct from the original activity.

**"What evidence would you show an inspector?"** The backup and recovery plan with its risk-assessment basis, defined RTO/RPO, the approved restore protocol with acceptance criteria, the executed restore test with timing and verification evidence, the periodic re-verification record, change-triggered restore tests, and the archive readability check log.

## A working checklist

Use this to pressure-test an existing program or to scope a new one. It pairs well with the broader [CSV/CSA audit checklist](/articles/csv-csa-audit-checklist).

| Area | Control to evidence |
|---|---|
| Strategy | Backup/recovery plan tied to a risk assessment; scope includes data, audit trail, metadata, configuration |
| Objectives | RTO and RPO defined per system from business impact analysis |
| Protection | Backups encrypted, access-controlled, off-site, and immutable/WORM where warranted; keys provably recoverable |
| Restore qualification | Pre-approved protocol, representative environment, real data, explicit acceptance criteria, retained evidence |
| Readability | Restored records verified usable through the application, not just present in storage |
| RTO/RPO proof | Restore test timed against the objectives; deviations investigated or objectives revised |
| Periodic check | Scheduled re-verification plus change-triggered restore tests |
| Archival | Long-retention strategy distinct from operational backup; migration validated; periodic readability check |
| Continuity | Controlled manual fallback; attributable, contemporaneous reconciliation of outage-period data |
| Roles | Clear RACI; restore result signed by IT, system owner, and QA, not IT alone |

None of this is exotic. It is the same risk-based, evidence-driven discipline applied everywhere else in CSV, pointed at the one control most teams assume is handled because the nightly job reports green. The fix is unglamorous and entirely within reach: pick a system, schedule a restore into a representative environment, write down what "pass" looks like before you start, time it, and keep the evidence. Do that, repeat it periodically, prove your archives are still readable, and you have converted a hopeful assumption into a control you can stand behind in front of an inspector, and, far more importantly, one that will actually work the day you need it.
