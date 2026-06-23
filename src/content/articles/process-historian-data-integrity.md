---
title: "Process Historians and Time-Series Data Integrity"
description: "How to bring a process historian under data integrity control: tag governance, audit trail, retention, interpolation and compression, GxP relevance, and inspection-ready review."
pubDate: 2026-06-20
tags: ["data integrity", "historian", "time-series", "automation", "part-11", "annex-11", "gmp"]
pillar: "manufacturing-automation"
tier: "Intermediate"
---

A process historian is one of the most data-rich systems on a manufacturing floor and one of the least governed. It quietly records temperatures, pressures, flows, pH, dissolved oxygen, agitation, and dozens of other tags every second of every batch, then keeps that data for years. Quality teams build SOPs around the MES, the LIMS, and the chromatography system, but the historian often sits in a blind spot: nobody wrote the validation, nobody defined the retention period, nobody decided which tags are GxP, and nobody reviews the audit trail because most people assume it does not have one.

That blind spot is where inspectors find problems. If continuous process verification trends, deviation investigations, or batch release decisions rely on historian data, then the historian is a GxP record system and it has to meet the same data integrity expectations as any other. This article walks through what that means in practice: the regulatory basis, the technical traps unique to time-series data (interpolation, compression, deadbands, clock drift), and how to build and defend a historian control program that survives an inspection.

---

## What a process historian actually is

A process historian is a specialized database optimized for storing and retrieving high-volume time-series data. Each measured value is a "tag" (sometimes called a "point") and the historian records a stream of timestamped values for each tag. Common commercial historians used in pharma and biotech include the time-series databases bundled with or sold alongside distributed control systems and SCADA platforms.

The historian sits downstream of the control layer. The PLC, DCS, or SCADA system reads the live sensor, controls the process, and pushes values up to the historian for long-term storage and trending. The historian is generally not in the control loop. It is a recording and reporting system. That distinction matters: a historian failure usually does not stop the batch, which is exactly why it gets ignored, and exactly why its data can be silently wrong without anyone noticing.

Key terms you need to use correctly:

- **Tag / point**: a single measured or calculated variable (for example, `BR101.TEMP` for bioreactor 101 temperature).
- **Raw value**: the value as reported by the source at a specific time.
- **Stored value**: what the historian actually wrote to disk, which may differ from the raw value because of compression.
- **Interpolated value**: a value the historian calculates between two stored points when you ask for a timestamp that was never actually recorded.
- **Deadband / compression**: the algorithm that decides which raw values to keep and which to discard to save storage.
- **Retrieval mode**: how the historian returns data for a query (raw, interpolated, sampled, averaged), which can change the numbers you see.

For background on how these systems connect, see [PLC, DCS and HMI fundamentals](/articles/plc-dcs-hmi-fundamentals) and [GxP manufacturing systems](/articles/gxp-manufacturing-systems).

---

## Why the historian is a GxP record (the regulatory basis)

The first question an inspector or auditor asks is simple: is this a GxP system? If historian data is used to make or support a GxP decision, the answer is yes, regardless of what the system was originally sold to do.

### US: 21 CFR Part 211 and Part 11

Under **21 CFR 211.68**, automatic, mechanical, and electronic equipment used in manufacturing must be routinely calibrated, inspected, and checked, and the regulation explicitly addresses controls over computer or related systems, including that input/output data be checked for accuracy. **21 CFR 211.180** through **211.188** require complete records of manufacturing and control. If continuous process parameters captured by the historian form part of the batch record, or are used to demonstrate the process stayed in a state of control, those values are part of the cGMP record.

When historian data is stored, processed, or used in electronic form to satisfy a predicate-rule requirement, **21 CFR Part 11** applies: electronic records must be accurate, attributable, legible, retrievable, and protected, with audit trails for changes and appropriate access controls. The 2018 FDA guidance **"Data Integrity and Compliance With Drug CGMP: Questions and Answers"** makes clear that the agency expects original electronic data and its associated metadata to be preserved, not just a printout or a manually transcribed value.

### EU: EudraLex Volume 4, Annex 11 and Chapter 4

**EU GMP Annex 11 (Computerised Systems)** is the most direct standard for a historian. Read as a whole, it pushes a risk-managed approach to the system across its life, validation scaled to that risk, confirmation that critical data is captured correctly, a record of GMP-relevant changes, recurring review of the system, storage that keeps data reachable and intact for as long as it must be kept, and controls that lock down both physical and logical access. The clauses that bite hardest for a historian are **clause 4** (validation), **clause 5** (accuracy of the data it ingests), **clause 7** (how that data is stored), **clause 9** (the audit trail), and **clause 12** (security). **EU GMP Chapter 4** sets documentation and retention expectations.

### Guidance that defines the expectation

The **MHRA "GXP Data Integrity Guidance and Definitions" (March 2018)**, the **PIC/S PI 041-1 "Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments" (July 2021)**, and **WHO Technical Report Series 1033, Annex 4 (2019)** all describe expectations for original data, audit trails, metadata, true copies, and the data lifecycle. They are guidance, not law, but inspectors cite them and you will be measured against them. The shared backbone is **ALCOA+** (Attributable, Legible, Contemporaneous, Original, Accurate, plus Complete, Consistent, Enduring, and Available). See [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and [data integrity foundations](/articles/data-integrity-foundations).

The practical translation: a historian holding GxP data needs a defined GxP scope, validation, an audit trail, controlled retention, secured access, and a way to produce a true, accurate, human-readable copy of the data for any time window. If you cannot do all of those, you have a finding waiting to happen.

---

## The data integrity traps unique to historians

Time-series databases behave differently from a LIMS or a CDS. The same features that make them efficient (compression, interpolation, deadbands) are the features that quietly corrupt data integrity if you do not control them. This is the section that separates someone who has actually run a historian program from someone who read a slide deck.

### Compression and deadbands: the data you never stored

Historians do not store every reading. To save space they apply a compression algorithm, most commonly **swinging door compression** (also called the swinging door trending algorithm), which keeps a new point only when the signal deviates from a predicted line by more than a configured deadband. Between kept points, the historian assumes a straight line.

The risk: if the compression deadband is too wide, real excursions get smoothed away. A transient temperature spike that lasted 30 seconds may never be stored, so when you trend the batch later it looks like the temperature held flat. From a data integrity standpoint, the "original" data was altered at the moment of capture by a configuration setting, and nobody signed off on that setting being GxP-appropriate.

What good looks like: compression deadbands for GxP-critical tags are defined, justified against the parameter's control limits and required resolution, documented, and locked under change control. A common conservative approach is to disable compression (store every sample) for critical batch parameters, accepting the storage cost. If compression is used, the deadband must be tight enough that no excursion of regulatory concern can be hidden.

### Interpolation: numbers that were never measured

When you query a historian for a value at a timestamp that falls between two stored points, most historians will, by default, return an **interpolated** value: a calculated estimate, not a real measurement. If an analyst pulls "the temperature at 14:32:00" and the nearest stored points are 14:31:45 and 14:32:30, the number returned may be a linear interpolation between them.

This is a data integrity hazard because the report looks like a measured value but is not. For a batch record or a deviation investigation, you generally want **raw** retrieval mode (actual stored points) or you want the interpolation clearly labeled. The retrieval mode used to generate a GxP report must be specified, validated, and consistent. A report that silently switches between raw and interpolated retrieval is a finding.

### Bad-quality and status flags

Every stored value carries a quality flag (Good, Bad, Uncertain, sensor failure, communication loss, value out of range). A frequent mistake: trends and reports drop or hide bad-quality samples, so a 20-minute sensor dropout during a batch shows up as a smooth line instead of a gap. The historian had the truth (a gap with a Bad flag), but the report concealed it. Reports for GxP use must surface quality flags and show gaps as gaps.

### Clock and timestamp control

Time is the index for everything in a historian. If the historian server clock, the SCADA clock, and the PLC clocks are not synchronized to a single trusted time source, samples land on the wrong second, and correlating events across systems becomes impossible. The contemporaneous element of ALCOA+ depends entirely on trustworthy timestamps.

Controls: synchronize all source devices and the historian server to a common, controlled time reference (a network time source), restrict the ability to change system time to administrators only, log every time change in the audit trail, and define how daylight saving time and time zone offsets are handled. Store timestamps in a non-ambiguous way (UTC plus offset is a common defensible approach). See [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).

### Aggregation and recalculation drift

Historians can return averaged, min, max, or sampled data over an interval. The same query window can yield different numbers depending on the aggregation method and the interval boundaries. If two reports of "the same" parameter disagree, an investigator may conclude data was manipulated when the real cause is two different aggregation settings. Define and lock the aggregation method for each standard GxP report.

### Backfilling and late data

Historians support "store and forward" buffering: if the link to the historian drops, the source device buffers data and the historian writes it later, with the original timestamps. That is good behavior. The integrity hazard is manual backfilling, where someone writes values into the past. Any ability to insert or edit historical values must be tightly restricted, fully audit-trailed, and ideally disabled for GxP tags.

---

## Tag governance: the core control nobody owns

The single most common historian gap in pharma is **uncontrolled tags**. A historian may hold tens of thousands of tags. Most are not GxP. Some are critical. Without governance, nobody knows which is which, tags get added and renamed without change control, and the GxP boundary becomes undefined. You cannot validate, review, or defend data when you cannot say which tags matter.

### What a tag governance system contains

A controlled **tag register** (a master list, maintained under document control) is the heart of the program. Each entry should carry, at minimum:

| Field | Purpose |
|---|---|
| Tag name | Unique identifier (for example `BR101.TEMP.PV`) |
| Description | Human-readable meaning |
| Source device | PLC/DCS/SCADA that feeds the tag |
| Engineering units | degC, bar, L/min, pH, etc. |
| GxP classification | GxP-critical / GxP-supporting / non-GxP |
| Data criticality | Tied to product/patient impact (see data criticality article) |
| Compression setting | Deadband value or "none" |
| Sample / scan rate | How often the source is polled |
| Retention period | How long stored (active + archive) |
| Owner | Process or system owner accountable for the tag |
| Change reference | Change control record for the current configuration |

### How to classify a tag as GxP

Walk each tag through three questions:

1. Does the value relate to a **critical process parameter (CPP)** or **critical quality attribute (CQA)**, or to a parameter named in the batch record, validated process, or registered control strategy? If yes, it is GxP-critical.
2. Is the value used to **make or support a quality decision** (batch disposition, deviation, CPV trending, environmental excursion assessment)? If yes, it is GxP, at least supporting.
3. Is it purely engineering or maintenance data with no product or compliance use (a bearing vibration on a non-critical pump, say)? If genuinely no GxP use, classify as non-GxP and document the rationale.

Tie this classification to a formal **data criticality and risk** assessment so the level of control is proportionate. See [data criticality and data risk](/articles/data-criticality-and-data-risk) and [data governance framework](/articles/data-governance-framework).

### Worked example: a small tag register extract

| Tag name | Description | GxP class | Compression | Scan rate | Retention |
|---|---|---|---|---|---|
| BR101.TEMP.PV | Bioreactor 101 temperature | GxP-critical | None (store all) | 1 s | 10 yr |
| BR101.DO.PV | Bioreactor 101 dissolved O2 | GxP-critical | 0.1% deadband | 1 s | 10 yr |
| BR101.AGIT.SP | Agitation setpoint | GxP-supporting | None | 1 s | 10 yr |
| CHW.SUPPLY.TEMP | Chilled water supply temp | non-GxP | 0.5 degC deadband | 30 s | 1 yr |
| P204.VIB | Pump 204 vibration | non-GxP | 1.0 deadband | 60 s | 90 d |

Two of these tags are GxP-critical and carry no compression so no excursion is lost. The chilled-water and pump tags are engineering-only, compressed harder, and retained briefly. An inspector can read this and immediately see the GxP boundary and that the controls are proportionate. That is the goal.

---

## Validation of a historian

A GxP historian needs validation proportionate to risk, following a risk-based computerized system approach. The framework most teams use is **GAMP 5 (Second Edition, 2022)**, which classifies most commercial historians as configured products (GAMP category 4) and treats any site-written calculations or report templates as configuration or custom code requiring extra rigor. See [GAMP 5 CSV framework](/articles/gamp5-csv-framework) and [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology).

### What goes in the validation package

- **Validation plan** scoping the historian, its GxP tags, interfaces, and the risk-based test strategy. See [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review).
- **User requirements specification (URS)** stating, explicitly, the data integrity requirements: audit trail on configuration and data changes, retention periods, retrieval accuracy, time synchronization, access control, and true-copy export. Requirements you do not write down, you cannot test. See [user requirements and traceability](/articles/user-requirements-and-traceability).
- **Functional and configuration specifications** capturing compression settings, scan rates, retention policy, and security model.
- **Risk assessment** identifying high-risk functions (compression, interpolation, audit trail, time sync, retention/archive) and driving test depth.
- **Qualification or testing** (IQ/OQ/PQ or commissioning-and-qualification per **ASTM E2500-13**) verifying installation, function, and performance. See [commissioning, qualification and ASTM E2500](/articles/commissioning-qualification-astm-e2500).
- **Traceability matrix** linking each requirement to a test.
- **Validation summary report** with the release decision. See [validation summary report and release](/articles/validation-summary-report-and-release).

### Tests that specifically prove data integrity

Generic CSV testing is not enough for a historian. Include challenge tests that prove the time-series behaviors are correct:

1. **Capture accuracy**: inject a known signal at the source (or use a calibrated reference) and confirm the historian stores values matching the source within tolerance.
2. **Compression challenge**: feed a transient excursion narrower than expected and confirm a critical tag with compression disabled stores it, and that a compressed tag's deadband behaves as configured and documented.
3. **Interpolation/retrieval mode**: query the same window in raw and interpolated modes and confirm the GxP report uses the specified mode and labels interpolated values.
4. **Quality flag handling**: simulate a sensor fault and confirm the bad-quality samples and the resulting gap appear in trends and reports rather than being silently filled.
5. **Audit trail**: change a tag's configuration and a historical value (if editing is possible) and confirm the audit trail captures who, what, old value, new value, when, and why.
6. **Time synchronization**: confirm source devices and the historian agree on time and that a time change is logged.
7. **Retention and archive**: confirm data is retrievable and unchanged after the archive cycle, and that a restored archive reproduces the original values. See [backup, restore and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation).
8. **True copy export**: export a defined window and confirm it is complete, accurate, includes metadata and quality flags, and is human-readable. See [static, dynamic records and true copies](/articles/static-dynamic-records-true-copies).

For change control once validated, see [change control for validated systems](/articles/change-control-validated-systems). For legacy historians that were never validated, see [retroactive validation of legacy systems](/articles/retroactive-validation-legacy-systems).

---

## The audit trail problem

A persistent myth is that historians do not have audit trails. Many do, but the audit trail is often turned off by default, configured only for the system database and not for the time-series data, or simply never reviewed. The data integrity requirement is twofold: configuration changes and data changes both need to be captured.

### What the audit trail must cover

- **Configuration changes**: adding, deleting, or renaming a tag; changing a compression deadband, scan rate, engineering units, or retention period; changing security or user roles. These changes silently alter what gets captured, so they are GxP-relevant.
- **Data changes**: any manual insert, edit, or deletion of a stored value (who, old value, new value, timestamp, reason).
- **System events**: time changes, archive operations, and security events such as failed logins.

Each entry should be attributable to a unique individual (no shared accounts), time-stamped from the controlled clock, and immutable to ordinary users. See [audit trail design and review](/articles/audit-trail-design-and-review) and [electronic signatures implementation](/articles/electronic-signatures-implementation).

### Reviewing the audit trail

Annex 11 and the data integrity guidances expect audit trails for GMP-relevant data to be reviewed, with a risk-based frequency and scope. For a historian, define what is reviewed (configuration changes to GxP tags, any manual data edits, time changes) and how often. The review of underlying continuous data is usually done through trend review at batch disposition rather than reading every sample. Document the procedure and the evidence of review. See [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).

### Common audit trail failures inspectors cite

- Audit trail exists but was never enabled for the historian.
- Configuration changes (compression, tag deletion) not captured because the audit trail covers only data, not configuration.
- Audit trail not reviewed, or reviewed with no documented evidence.
- Shared administrator account makes changes unattributable.
- Ability to disable the audit trail is available to operational users.

---

## Retention, archive, and the disposal trap

Continuous data is large. A single bioreactor at one-second resolution generates millions of samples per batch. The temptation, and the integrity risk, is to delete or overwrite old data to reclaim storage.

### Defining the retention period

The retention period must satisfy the longest applicable requirement: the predicate rule (manufacturing and control records under **21 CFR 211.180**, which requires retention for set periods tied to product expiry plus additional time), the marketing authorization, the relevant GMP chapter, and any local regulation. For GxP-critical batch data the practical answer is typically the product retention period (often expiry plus one year as a baseline, longer in many cases), and many sites retain biologics and ATMP process data far longer. Set the retention per tag in the tag register and justify it.

### Archive, not just backup

A **backup** is a copy made for disaster recovery and is overwritten on a cycle. An **archive** is the long-term retained record. They are not the same thing, and conflating them is a finding: if a historian "retains" data only on a rolling backup that gets overwritten in 90 days, the data is not actually being retained for its required period.

Archive controls:

- Archived data must remain complete, accurate, and readable for the full retention period, including all metadata and audit trails.
- Test that archived data can be **restored and read** by an actual restore exercise, not an assumption. Validate the restore. See [backup, restore and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation).
- If the historian software or storage format may be retired, plan for **migration** so the data stays readable. A proprietary archive that no current software can open is effectively lost. See [data migration validation](/articles/data-migration-validation) and [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation).
- Disposal at end of retention must be controlled, authorized, and recorded.

### The interpolation-after-archive twist

Some historians down-sample data when it moves to long-term archive (storing one point per minute instead of one per second) to save space. For GxP-critical tags this can destroy the original resolution and is a silent data loss. If down-sampling on archive is enabled, it must be a documented, justified, change-controlled decision, and generally it should be disabled for critical batch parameters.

---

## Roles and responsibilities

Most historian gaps trace back to unclear ownership. The historian sits between automation engineering, IT, and quality, and each assumes another group owns it. Define it explicitly.

| Role | Responsibility |
|---|---|
| System owner (often automation/manufacturing) | Accountable for the historian as a GxP system, its validated state, tag register, and change control |
| Process / area SME | Defines which tags are GxP-critical, justifies compression and scan rates against process control limits, reviews trends at disposition |
| IT / infrastructure | Server, storage, time synchronization, backup, archive execution, access provisioning, patching under change control |
| QA | Approves validation, classification of GxP tags, retention periods, audit trail review procedure, and disposition use of historian data; assesses deviations |
| Validation / CSV | Authors and executes the validation package and risk assessment, maintains traceability |
| Vendor / supplier | Supplies and supports the software; assessed for quality. See [software supplier assessment (CSA)](/articles/software-supplier-assessment-csa) |

The named **system owner** is the person an inspector will ask for. If no one can say who owns the historian, that itself signals a governance gap. See [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) and [data governance roles and careers](/articles/data-governance-roles-and-careers).

---

## How historian data is used at batch disposition

The reason all of this matters is the release decision. Historian trends are routinely used to demonstrate that critical process parameters stayed within their proven acceptable ranges throughout the batch, and to support [continued process verification](/articles/continued-process-verification-cpv).

The integrity question at disposition: can you trust the trend on the screen? You can only answer yes if:

- The tags shown are the validated, GxP-classified tags.
- Compression did not hide an excursion (critical tags store all samples).
- The retrieval mode is raw or correctly labeled, not silently interpolated.
- Gaps and bad-quality periods are shown, not filled.
- The timestamps are from the controlled clock.
- The report is a true copy with metadata, not a screenshot pasted into a document.

A clean-looking trend that was generated with wide compression, interpolated retrieval, and hidden quality flags is worse than no trend, because it gives false assurance. Reviewers and QA approving disposition need to understand the historian's retrieval settings well enough to know what they are looking at. See [batch disposition decisions](/articles/batch-disposition-decisions), [batch record review (GMP)](/articles/batch-record-review-gmp), and [MES, EBR and SCADA data integrity](/articles/mes-ebr-scada-data-integrity).

---

## Common inspection findings (generic patterns)

These are the recurring patterns regulators cite for historian and time-series data. None name any company; they are the failure modes to prevent.

- **No GxP scope defined.** The historian holds GxP data but was never classified as a GxP system, never validated, and has no tag register, so the firm cannot say which data is regulated.
- **Audit trail not enabled or not reviewed.** Configuration changes such as deleting tags or widening compression are not captured, or the audit trail is never reviewed.
- **Compression hides excursions.** Deadbands set for storage efficiency are wide enough to smooth real deviations out of the record, and no one justified the settings against process control limits.
- **Interpolated values presented as measured.** Reports return calculated values without labeling them, so a number that was never measured appears in an investigation or batch record.
- **Quality flags suppressed.** Sensor dropouts and bad-quality periods appear as smooth lines, concealing data gaps.
- **Retention via backup only.** "Retained" data sits on a rolling backup that overwrites before the required retention period ends.
- **No restore or migration test.** Archived data is assumed readable but never actually restored, and the firm cannot produce old batch data when asked.
- **Time not controlled.** Source devices and the historian disagree on time, or anyone can change the clock, undermining the contemporaneous record.
- **Shared accounts.** Administrative changes are unattributable.
- **Trends edited in spreadsheets.** Data is exported to an uncontrolled spreadsheet, manipulated, and used for decisions, breaking the link to the original record. See [static, dynamic records and true copies](/articles/static-dynamic-records-true-copies).

For how these map to broader patterns, see [FDA warning letter patterns](/articles/fda-warning-letters-patterns) and [data integrity foundations](/articles/data-integrity-foundations).

---

## Step-by-step: bringing a historian under control

A practical sequence for a site that has a historian running but has never formally governed it.

1. **Inventory.** Pull the full tag list and the current configuration (compression, scan rate, retention) from the system. Identify all interfaces (which PLCs/DCS/SCADA feed it) and all consumers (who pulls reports and for what).
2. **Classify.** Run every tag through the GxP classification questions. Produce the controlled tag register. Get QA and process SMEs to sign the GxP-critical list.
3. **Assess risk.** For the GxP-critical tags, run a data integrity risk assessment focused on capture (compression), retrieval (interpolation/aggregation), audit trail, time, retention, and access. See [DI gap assessment methodology](/articles/di-gap-assessment-methodology).
4. **Remediate configuration.** Disable compression (or tighten deadbands) on critical tags, enable and configure the audit trail for configuration and data changes, fix time synchronization, remove shared accounts, and lock retention per the register. Do this under change control.
5. **Validate.** Build or retrofit the validation package with the data integrity challenge tests above. For an existing system, this is retroactive/periodic-review validation.
6. **Define procedures.** Write or update SOPs for tag change control, audit trail review, report generation (specifying retrieval mode), archive/restore, and use of historian data at disposition. See [how to write an SOP](/articles/how-to-write-an-sop).
7. **Define retention and archive.** Set retention per tag, separate archive from backup, and schedule and validate restore tests.
8. **Train and run periodic review.** Train report users and reviewers on retrieval settings and quality flags, then put the historian into the periodic review cycle. See [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review).

If you find historical data that was captured with bad settings (wide compression, no audit trail), do not paper over it. Assess the impact on any batches already released, document the gap and the remediation, and run it through your [DI remediation program](/articles/di-remediation-program) and [deviation management](/articles/deviation-management).

---

## Acceptance criteria: what "done" looks like

You can consider a historian under data integrity control when you can answer yes to all of these:

- A controlled tag register exists, every tag has a GxP classification, and the GxP-critical list is QA-approved.
- Compression and scan-rate settings for critical tags are documented and justified against process control limits, and no GxP excursion of concern can be hidden.
- The audit trail is enabled for both configuration and data changes, attributable to unique users, and reviewed on a defined risk-based cycle with documented evidence.
- Time is synchronized across sources and the historian to a controlled reference, with time changes logged and restricted.
- Retention per tag meets the longest applicable requirement, archive is separate from backup, and a restore test has proven archived data is complete and readable.
- GxP reports specify and validate their retrieval mode (raw vs interpolated), show quality flags and gaps, and export as true copies with metadata.
- Access is role-based, no shared accounts on GxP functions, and the ability to edit historical data or disable the audit trail is removed or tightly restricted.
- The system is validated, has a named owner, and is in the periodic review cycle.

---

## Interview-ready: questions you should be able to answer

**Is a process historian a GxP system?** It depends on use, not on the label. If its data supports a GxP decision (batch release, CPV, deviation, environmental assessment), it is GxP and must meet Part 11 / Annex 11 expectations. The first deliverable is a tag classification that draws the GxP boundary.

**What is the biggest data integrity risk specific to a historian?** Compression. The swinging-door deadband decides which raw values are stored. If it is too wide, real excursions are smoothed out of the original record at the moment of capture, and the trend you review later is a lie of omission. For critical tags, disable compression or justify a tight deadband against the parameter's control limits.

**What is the difference between raw and interpolated retrieval, and why does it matter?** Raw returns actual stored points. Interpolation returns a calculated value for a timestamp that was never measured. A report that silently uses interpolation presents fabricated-looking numbers as measurements. GxP reports must use a specified, validated retrieval mode and label any interpolated values.

**Does a historian have an audit trail, and what should it capture?** Most do, but it is often disabled or scoped only to data, not configuration. It must capture configuration changes (tag add/delete, compression, scan rate, retention, security) and any manual data edits, attributable to unique users, plus time changes. And it must be reviewed.

**How long do you keep historian data and where?** As long as the longest applicable requirement, typically the product retention period for critical batch data, held in a validated archive that is separate from rolling backups, with a proven restore capability and a migration plan so it stays readable.

**Why do quality flags matter?** Each sample carries a quality status. If reports drop bad-quality samples, sensor dropouts appear as smooth lines and data gaps are concealed. Reports must show gaps and flags so reviewers see the truth.

**An inspector asks for the temperature trend of a batch released two years ago. Walk me through producing it.** Confirm the tag is in the register and GxP-classified, retrieve from the validated archive in raw mode for the batch window, confirm quality flags and any gaps are shown, verify timestamps are from the controlled clock, and export as a true copy with metadata rather than a screenshot. If you cannot do this, you have a retention or true-copy gap.

**How do you handle a historian that was never validated?** Inventory and classify the tags, run a data integrity risk assessment on the critical ones, remediate configuration (compression, audit trail, time, access) under change control, then perform retroactive validation and put it in periodic review. Assess whether bad historical settings affected any released batches and route through deviation and remediation.

---

## Practical tips

- Get the **full tag export early**. The number of tags surprises people, and you cannot govern what you have not listed.
- **Disable compression on critical batch tags** unless storage genuinely forces a deadband, and if it does, justify the deadband numerically against the parameter's alarm and control limits.
- **Standardize your GxP reports** so they always use the same retrieval and aggregation mode. Inconsistent report settings cause "data does not match" investigations that are really just configuration differences.
- **Lock down time.** A single trusted time source and restricted clock changes solve a whole class of correlation and contemporaneity problems.
- **Actually run a restore.** The first time you test restoring a two-year-old archive should not be during an inspection.
- **Watch the export-to-spreadsheet habit.** Once data leaves the validated system into an uncontrolled spreadsheet, the integrity chain breaks. If spreadsheets are used, control them. See [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation).
- **Name an owner.** A historian with no owner is a historian with no controls.

---

### Related articles

- [PLC, DCS and HMI fundamentals](/articles/plc-dcs-hmi-fundamentals)
- [MES, EBR and SCADA data integrity](/articles/mes-ebr-scada-data-integrity)
- [Audit trail design and review](/articles/audit-trail-design-and-review)
- [Time stamps and system clock control](/articles/time-stamps-and-system-clock-control)
- [Data criticality and data risk](/articles/data-criticality-and-data-risk)
- [GAMP 5 CSV framework](/articles/gamp5-csv-framework)
- [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11)
- [Continued process verification (CPV)](/articles/continued-process-verification-cpv)
- [Backup, restore and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation)
- [Static, dynamic records and true copies](/articles/static-dynamic-records-true-copies)
