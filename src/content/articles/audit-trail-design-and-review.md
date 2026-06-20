---
title: "Audit Trail Design and Review: What FDA Actually Expects"
description: "The mechanics of GxP audit trails, what to capture, how to configure it correctly, how to review it without drowning, and how inspectors use the trail to find data integrity problems."
pubDate: 2025-09-21
tags: ["audit-trail", "FDA", "21-CFR-Part-11", "data-integrity", "GxP"]
pillar: "data-integrity"
tier: "Intermediate"
---

Audit trails are the single most commonly cited technical finding in FDA data integrity enforcement actions. The problems run a wide gauge. Some systems have audit trails switched off entirely. Others capture that an event happened but not what the value used to be. Some let a privileged user clear the trail with no second control and no record of the clearing. Understanding what a complete, defensible audit trail actually looks like, and how to prove it is complete, is foundational work for any data integrity program.

This article covers audit trail architecture, configuration during validation, the review process, hybrid and paper equivalents, and the specific behaviors an inspector exhibits when they sit down at your workstation. If you are new to the topic, start with [data integrity foundations](/articles/data-integrity-foundations) and the [ALCOA+ principles](/articles/alcoa-plus-deep-dive); the audit trail is the mechanism that makes the "Attributable", "Contemporaneous", and "Original" attributes verifiable rather than asserted.

---

## What an Audit Trail Must Capture

The regulatory basis in the United States is 21 CFR Part 11.10(e), which requires:

> "Use of secure, computer-generated, time-stamped audit trails to independently record the date and time of operator entries and actions that create, modify, or delete electronic records. Record changes shall not obscure previously recorded information."

That last sentence does a lot of work. It is the legal hook for capturing prior values, not just the fact that a change occurred. EU GMP Annex 11, clause 9, carries equivalent intent: consideration should be given to building into the system the creation of a record of all GxP-relevant changes and deletions, and audit trails should be available, convertible to a generally intelligible form, and regularly reviewed. The FDA guidance "Data Integrity and Compliance With Drug CGMP: Questions and Answers" (final, December 2018) and the MHRA "GXP Data Integrity Guidance and Definitions" (March 2018) both restate the same expectation: the trail must answer who did what, when, and what the data was before the change.

"What action" is where most systems fall short. It helps to think in tiers of completeness.

| Tier | What is logged | Verdict |
|---|---|---|
| Tier 1 | "Record modified", with timestamp and user ID | Inadequate. Does not say which field changed or what it was. |
| Tier 2 | Event, timestamp, user ID, and the specific field modified | Partial. Still missing the prior value. |
| Tier 3 | Event, timestamp, user ID, field, prior value, new value, and reason where required | Compliant. Allows full reconstruction of record history. |

Most modern LIMS, ELN, MES, and chromatography data systems (CDS) such as Empower, OpenLab, or Chromeleon support Tier 3 logging, but it almost never ships that way. The default out-of-box configuration for many platforms is Tier 1 or Tier 2, often to keep the audit table small and the application fast. That gap between vendor default and regulatory requirement is the most common technical root cause behind audit trail 483 observations. The vendor sold a capable system. Nobody turned the capability on.

A defensible Tier 3 entry for a single edit reads something like this: user `jdoe` changed field `Assay_Result` from `98.2` to `99.1` on 2025-06-04 at 14:07:33 UTC, reason "transcription correction, verified against printout". A reviewer can reconstruct exactly what the value was, who changed it, when, and why, without asking anyone.

---

## Time and Date Integrity

A timestamp is only meaningful if the clock behind it is trustworthy. This is an area where implementation is often weak even in otherwise well-designed systems, because the clock lives in the infrastructure layer that the application owners rarely look at.

**NTP synchronization.** Every instrument and system that generates GxP records should have its clock synchronized to a Network Time Protocol (NTP) source. The usual pattern is an internal NTP server that is itself disciplined to a trusted external reference, with all instruments and application servers pointing at the internal server. The synchronization should be configured, qualified during infrastructure qualification, and monitored for drift. Instruments on isolated or air-gapped networks that cannot reach an NTP server need a documented alternative: a hardware time reference, or a manual verification at a defined frequency with a recorded result.

**Time zone consistency.** For multi-site operations, confirm whether each system stores audit trail timestamps in UTC or in local time, and whether conversion to local time for display is handled consistently. A LIMS that stores UTC and a CDS that stores local time will produce apparent discrepancies that look like backdating even when nothing irregular happened. The cleanest design stores UTC internally and displays local time with the offset shown. Document the convention so a reviewer or inspector is not left guessing.

**Clock manipulation.** Inspectors look for evidence of manual clock changes in operating system and application logs. Any legitimate adjustment, whether for daylight saving, NTP resynchronization after an outage, or a hardware clock replacement, should be expected and explainable. An undocumented backward clock change near the timestamp of a contested result is a serious finding, because moving the clock back is the simplest way to make a late entry look contemporaneous.

**Server-side versus client-side timestamps.** For web-based LIMS, ELN, or MES, verify that timestamps are generated on the server, not the browser. A client-side timestamp can be changed by anyone who can change the clock on their own laptop, which defeats the entire control.

---

## What Must Be Captured, and What Can Be Excluded

Not every system event needs audit trail capture. The 2018 FDA Q&A guidance frames the scope around "GxP-relevant" changes, and that qualifier matters. Configuration changes in a non-production sandbox, administrative tweaks to data that never touches a product decision, and routine system maintenance generally do not require the same trail as result data. The point is to capture everything that could affect a quality decision, not to log every mouse click.

| Data or event type | Audit trail required? |
|---|---|
| Result values (analytical, in-process, environmental) | Yes |
| Instrument and method configuration used for data acquisition | Yes |
| Processing parameters (integration methods, calculation formulas, peak edits) | Yes |
| Reprocessing or re-integration of acquired data | Yes, always |
| User account creation, modification, deletion, privilege change | Yes |
| Electronic signature and approval events | Yes |
| System configuration of validated parameters | Yes |
| Changes to non-GxP administrative data | Risk-based |
| Training or scheduling records in a non-GxP module | Risk-based, depends on use |

The scope decision must be documented, ideally in the system risk assessment or the validation package. A risk assessment that explains why certain event types are captured and others are not is defensible. An undocumented configuration that simply happens to exclude something is not, because you cannot show it was a deliberate, justified choice rather than an oversight. The [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology) article walks through how to make and record these scoping decisions.

---

## Audit Trail Review: The Operational Challenge

A complete audit trail is necessary but not sufficient. FDA expects audit trails to be reviewed, not merely captured and archived. This is where most programs struggle, because volume defeats good intentions.

A single mid-sized QC operation can generate tens of thousands of audit entries a week across CDS, LIMS, and MES. No human reads that line by line, and pretending otherwise produces a review record that is fiction. A risk-based, partly automated approach is both acceptable and expected. The 2018 FDA Q&A guidance states plainly that audit trails subject to regular review should include, at minimum, the change history of finished product test results, changes to sample run sequences, changes to sample identification, and changes to critical process parameters. It also ties the review to release: routine scheduled audit trail review based on the significance of the data should be part of the procedures that lead to batch disposition.

**What review means in practice.** A qualified reviewer, independent of the person who generated the data, examines the trail for anomalies: entries that do not fit the expected pattern, a result changed several times before it was finalized, activity outside normal working hours, deletions, reprocessing without a recorded reason, or edits made after the record was reviewed. The review produces its own record: what system, what period, what scope, who reviewed, what was found, and what was escalated. A review that leaves no evidence it happened is, from an inspector's standpoint, a review that did not happen.

**When review should occur.** At a minimum:

- As part of batch record review, covering the systems used for that batch, before disposition. See [batch record review](/articles/batch-record-review-gmp).
- On a defined periodic cycle (often monthly or quarterly) for each GxP system, with documented results, to catch patterns that a single-batch view misses.
- As part of any out-of-specification or out-of-trend investigation, covering the relevant time window and systems. See [the OOS investigation process](/articles/oos-investigation-process).
- Before and after any change that could touch audit trail configuration, under change control.

**Review by exception.** For high-volume systems, it is acceptable to apply rule-based or statistical filters that surface a small set of entries for focused human review rather than reading every line. The filtering logic itself becomes a controlled, documented, and ideally validated artifact, because a filter that silently drops a category of events is a control gap hiding as efficiency. Common filters:

- Entries made outside defined working hours (state the threshold).
- The same field modified more than N times within a defined window.
- A modification that moved a result across a specification or action limit.
- Entries attributed to a user not associated with the batch or sample.
- Any deletion, any reprocessing, any change of sample identity (these always warrant a look).

**AI-assisted review** is increasingly common: a model or rules engine triages the trail, ranks entries by anomaly likelihood, and presents the top set for human judgment. This is a legitimate efficiency, but the tool must be validated for its intended use, the human decision step must remain and be documented, and the filter must fail safe, meaning an error pushes more entries to human review rather than fewer. The [building AI tools for GxP](/articles/building-ai-tools-for-gxp) and [validating AI in GxP systems](/articles/validating-ai-gxp-systems) articles cover the validation expectations in detail.

---

## Deleted and Orphaned Records

Deleted records and orphaned data are among the most serious findings an inspection can produce, because they go to whether all results were retained and reported, not just whether a single value was edited.

**Deletion controls.** Under Part 11 and the data integrity guidances, deletion of GxP records should either be impossible for normal users or restricted to a tightly controlled process with documented justification and a second-person approval. The trail must record the deletion itself, including who deleted what and when, in a way the deleting user cannot then erase. A system where a single administrator can permanently remove a result, an audit entry, or a whole sequence with no second control and no surviving record is a critical gap, and inspectors know exactly where to look for it.

**Orphaned data.** Inspectors look for data that exists in one place but not another. The classic signature: an instrument's injection or sequence log shows runs were performed, but those runs never appear in the LIMS or the batch record. That pattern is the fingerprint of "testing into compliance", where unfavorable results were generated, then discarded, and only the passing run was reported. It is one of the most damaging findings possible because it implies the reported record is not the complete record.

To find orphaned data before an inspector does, reconcile across systems:

- Instrument sequence and injection logs against LIMS sample records.
- CDS raw data files (including any "trial" or aborted runs) against reported results.
- Instrument logbooks and use logs against electronic system records.
- Total injections on the column or detector against the number of reported results plus documented system suitability and blanks.

This reconciliation is precisely what an inspector does at the bench. Building it into internal audit and self-inspection means you find and explain the gaps on your own terms. The [data integrity self-audit checklist](/articles/di-self-audit-checklist) gives a structured way to run this routinely.

---

## What an Inspector Does at a Workstation

Understanding the inspection method helps you assess your own systems with the right eyes. Based on documented inspection practice and public FDA guidance on inspecting computerized systems:

1. **The inspector opens the CDS or LIMS directly**, not through reports or summaries. They go to the live raw data, not the extracted PDF, because the PDF only shows what someone chose to print.

2. **They pull the audit trail for a specific batch** and read it chronologically. They are looking for editing patterns: values changed after a result was reviewed, repeated iterations on the same field, reprocessing without a stated reason.

3. **They check the instrument sequence log** against the batch record to confirm every injection is accounted for and nothing is missing between the bench and the report.

4. **They look at the user and role list** and ask who holds administrative access. They specifically check whether any account can modify or delete audit trail entries, and whether segregation of duties is real or nominal. See [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control).

5. **They check system time** and ask for the NTP synchronization evidence or the documented clock verification procedure and its records.

6. **They request the deleted records report** if one exists. Where deletion is allowed, they want to know what, who, and when, and whether a justification was recorded.

7. **They interview the analyst or administrator** about a specific entry, edit, or cross-system discrepancy they have already spotted, asking the person to explain it on the spot.

The common thread is simple: they are looking for daylight between what the official record says happened and what the system logs show actually happened. Every discrepancy is a potential finding. Every unexplained gap between two systems is a potential finding. The [FDA inspection readiness](/articles/fda-inspection-readiness) article covers how to prepare people and systems for exactly this.

---

## System Configuration: Where Audit Trails Break

The most actionable part of audit trail compliance is getting the configuration right during validation and keeping it right across the system lifecycle. Most failures are not subtle; they are settings nobody verified.

Configuration items to confirm and document during validation:

- Audit trail enabled for all GxP-relevant tables and fields, not just system-level login and logout events.
- Prior value captured for every field-level modification (Tier 3), with a reason prompt where the data is critical.
- Timestamps server-generated and NTP-synchronized, with the time zone convention documented.
- No user, including the system administrator, can disable, edit, or clear the audit trail outside a documented and controlled process that itself leaves a record.
- Audit entries are protected from modification, typically stored in append-only tables or an equivalent immutable store.
- Backup and disaster recovery include the audit trail data, and a restore actually returns it intact. See [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation).
- Audit entries are retained at least as long as the records they describe.

**Periodic re-verification.** Audit trail configuration can be silently altered by a software upgrade, a patch, or a routine application change. A new version may reset a setting to its default, which is often the non-compliant Tier 1 or Tier 2 state. Put audit trail configuration verification into the [change control](/articles/change-control-validated-systems) process for any system modification, and into the [periodic review](/articles/validation-master-plan-and-periodic-review) cycle for validated systems, so that "still on" is confirmed rather than assumed. The [CSV/CSA framework](/articles/computer-software-assurance-fda) and [GAMP 5 framework](/articles/gamp5-csv-framework) describe how to document and validate these controls within the system lifecycle.

---

## Hybrid Systems and Paper Records

Not everything is electronic, and hybrid arrangements often carry the highest risk because the controls live in two different places and the seam between them is easy to ignore.

For paper records, the audit trail equivalent is built from good documentation practice:

- Corrections made in ink with a single line through the original so it stays legible, plus the date, the initials of the person correcting, and a reason where the change is not self-evident. Never correction fluid, never writing over the original, never erasing.
- A clear cross-reference between the paper record and any electronic source data, so the two can be reconciled.
- Verified transcription with a documented second-person check whenever a value is copied from an instrument to paper.

See [good documentation practices](/articles/good-documentation-practices) for the full set of conventions.

For hybrid systems, the integrity requirements apply at both layers and to the link between them. The electronic instrument data is the original, true copy of record. The paper transcription is a secondary record. Both must be retained, the electronic source cannot be discarded once it is transcribed, and the transcription step must include a verified accuracy check. A frequent finding is exactly this: an instrument produces a complete electronic record with its own audit trail, an analyst transcribes one number onto a form, the form gets reviewed, and the richer electronic original is never looked at again. The audit trail that mattered was never reviewed.

---

## The Durable Principle

An audit trail exists to answer one question about any piece of GxP data: what happened to this record, who touched it, and when, and what was it before. If your trail can answer that completely and traceably for any data point, in any system, for the full retention period, the foundational work is done. If it can answer only for some records, only for some actions, or only for some periods, you have a gap, and the gap is exactly the kind of thing a determined inspector finds.

Build the trail first, then build the review around it. Many organizations do this backwards. They bolt audit trail review onto existing procedures without first proving the trail itself is complete and captures prior values. The review of an incomplete trail is not a control. It is a record of having looked at the wrong thing carefully.
