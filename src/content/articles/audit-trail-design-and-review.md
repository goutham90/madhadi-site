---
title: "Audit Trail Design and Review: What FDA Actually Expects"
description: "The mechanics of GxP audit trails — what to capture, how to configure it correctly, how to review it effectively, and how inspectors use it to find data integrity problems."
pubDate: 2025-09-21
tags: ["audit-trail", "FDA", "21-CFR-Part-11", "data-integrity", "GxP"]
pillar: "data-integrity"
tier: "Intermediate"
---

Audit trails are the single most commonly cited technical finding in FDA data integrity enforcement actions. The issues range from systems with audit trails disabled entirely to more subtle problems, trails that capture events but not prior values, or systems where the trail can be cleared by a privileged user without a second control. Understanding what a complete, compliant audit trail actually looks like is foundational to building a defensible data integrity program.

This article covers audit trail architecture, configuration requirements, review processes, and the specific behaviors FDA inspectors look for when they sit down at your workstation.

---

## What an Audit Trail Must Capture

The regulatory basis is 21 CFR Part 11.10(e), which requires:

> "Use of secure, computer-generated, time-stamped audit trails to independently record the date and time of operator entries and actions that create, modify, or delete electronic records."

EMA Annex 11, clause 9, has equivalent language. The [FDA DI guidance (2018)](https://www.fda.gov/media/119267/download) expands on this: the audit trail should capture "who, when, and what action" for any entry that creates, modifies, or deletes data.

"What action" is where most systems fall short. There are three tiers of audit trail completeness:

**Tier 1 (inadequate):** Logs that an event occurred, "record modified", with a timestamp and user ID. Does not capture what the previous value was.

**Tier 2 (partial):** Logs the event, timestamp, user ID, and that a specific field was modified. Does not capture the previous value.

**Tier 3 (compliant):** Logs the event, timestamp, user ID, the specific field modified, the previous value, and the new value. Allows full reconstruction of the record's history.

Most modern LIMS, ELN, and CDS platforms support Tier 3 logging, but it requires explicit configuration. The default out-of-box setup for many systems is Tier 1 or 2. This is the most common technical root cause behind audit trail 483 observations.

---

## Time and Date Integrity

A timestamp is only meaningful if the clock is trustworthy. This is an area where the implementation is often weak even in otherwise well-designed systems.

**NTP synchronization:** All instruments and systems generating GxP records should have their clocks synchronized to a Network Time Protocol (NTP) server, either an internal server that is itself synchronized to an external reference, or a trusted external source. The synchronization should be validated and monitored. Instruments on isolated networks that can't reach an NTP server need an alternative (hardware time reference, manual synchronization with documented frequency).

**Time zone consistency:** For multi-site operations, confirm whether audit trail timestamps are stored in UTC or local time, and whether the conversion to local time is handled consistently across systems. A LIMS that stores timestamps in UTC and a CDS that stores them in local time create apparent discrepancies that look like backdating even when nothing irregular occurred.

**Clock manipulation:** FDA inspectors will look for evidence of manual clock changes in system logs. Any legitimate clock adjustment (for DST, for NTP resynchronization) should be documented. Undocumented clock changes are a serious finding.

**Server-side vs client-side timestamps:** For web-based LIMS or ELN systems, verify that timestamps are generated server-side. Client-side timestamps can be manipulated by changing the clock on the client machine.

---

## What Must Be Captured, and What Can Be Excluded

Not every system event requires audit trail capture. The [FDA DI guidance](https://www.fda.gov/media/119267/download) states that "audit trails should capture all GxP-relevant data changes." The qualifier "GxP-relevant" is important, configuration changes to non-production environments, administrative adjustments to non-GxP data, and system maintenance operations may not require audit trail capture.

The risk-based approach to audit trail scope:

| Data type | Audit trail required? |
|---|---|
| Result values (analytical, in-process) | Yes |
| Instrument configuration used for data acquisition | Yes |
| Processing parameters (integration methods, calculation formulas) | Yes |
| User account creation/modification/deletion | Yes |
| Electronic approval/signature events | Yes |
| System configuration changes | Yes (especially for validated parameters) |
| Non-GxP administrative changes | Risk-based |
| Training records | Risk-based (depending on system) |

The scope decision should be documented. A risk assessment that explains why certain event types are or are not captured is defensible. An undocumented configuration is not.

---

## Audit Trail Review: The Operational Challenge

Having a complete audit trail is necessary but not sufficient. FDA expects audit trails to be *reviewed*, not just captured. This is where most programs struggle.

A system that generates 10,000 audit trail entries per week across manufacturing, QC, and QA activities cannot be manually reviewed line by line. A risk-based review approach is both acceptable and necessary. The key is that the approach is defined, documented, and executed consistently.

**What "review" means in practice:**

A qualified reviewer examines the audit trail for anomalies, entries that don't match expected patterns, values that were changed multiple times before finalization, off-hours activity, deletions. The review produces a documented record: what was reviewed, for what period, by whom, and what was found (or not found).

**Scope of audit trail review:**

At minimum, audit trail review should occur:
- As part of each batch record review, covering the systems used for that batch
- Periodically (monthly or quarterly) for all GxP systems, with documented results
- As part of OOS/OOT investigation, covering the time period and system involved
- Before any system changes that could affect audit trail configuration

The [FDA DI guidance](https://www.fda.gov/media/119267/download) is explicit: "audit trail review should be part of the routine batch record review process."

**Review-by-exception:** For high-volume operations, it is acceptable to use statistical or rule-based filters to flag anomalies for focused review, rather than reading every line. The filtering logic should be defined and documented. Common filters:

- Entries outside normal working hours (define the threshold)
- Entries where the same field was modified more than N times within a defined window
- Entries where the modification moved a result across a specification limit
- Entries attributed to users who are not associated with the batch
- Deletions (always warrant review)

**AI-assisted audit trail review**, flagging anomalies automatically and presenting them for human review, is an increasingly common approach. The AI component must be validated for its intended use, and the human review step must be documented. The [AI tools article](/articles/building-ai-tools-for-gxp) covers this in detail.

---

## Deleted and Orphaned Records

Deleted records are among the most serious findings in a data integrity inspection.

**What FDA expects:** Under 21 CFR Part 11 and the DI guidance, deletion of GxP records should either be impossible for normal users, or subject to strict access controls with documented justification. The ability to permanently delete a result, an audit trail entry, or an entire batch record without authorization is a critical control gap.

**Orphaned data:** Inspectors look for data that exists in one system but not another. The most common form: instrument sequence logs or raw data files that show runs were performed, but those runs don't appear in the LIMS or the batch record. This "orphaned" data is the signature of results that were generated, not retained, and not reported, one of the most serious data integrity findings possible.

To find orphaned data, compare:
- Instrument sequence injection logs against LIMS sample records
- CDS raw data files against reported results
- Instrument logbooks against electronic system records

This reconciliation is what FDA inspectors do at the bench. Building it into your internal audit process means you find the gaps before the inspector does.

---

## What an FDA Inspector Does at a Workstation

Understanding the inspection methodology helps you assess your own systems. Based on documented inspection practices and public FDA guidance on inspection procedures:

1. **The inspector opens the CDS or LIMS directly**, not through reports or summaries. They navigate to the raw data, not the extracted PDF.

2. **They pull the audit trail for a specific batch** and look at it chronologically. They're looking for editing patterns, especially values changed after a result was reviewed, or multiple iterations on the same field.

3. **They check the instrument sequence log** against the batch record to confirm all injections are accounted for.

4. **They look at the user list** and ask to see who has administrative access. They check whether any accounts have the ability to modify or delete audit trail entries.

5. **They check the system time** and ask for the NTP synchronization log or the documented clock verification procedure.

6. **They request the deleted records report** if the system has one. In systems where deletion is allowed, they want to know what was deleted, who deleted it, and when.

7. **They may interview the analyst or system administrator** about specific anomalies they've observed, asking them to explain a specific entry, a specific edit, or a specific discrepancy between systems.

The common thread: they're looking for gaps between what the record says happened and what the system logs show actually happened. Every discrepancy is a potential finding. Every unexplained gap between systems is a potential finding.

---

## System Configuration: Where Audit Trails Break

The most actionable part of audit trail compliance is getting the configuration right during validation and keeping it right through the system lifecycle.

**Configuration items to validate:**

- Audit trail enabled for all GxP-relevant tables and fields (not just system-level events)
- Prior value captured for all field-level modifications
- Timestamps are server-generated and NTP-synchronized
- No user, including system administrators, can disable or clear the audit trail without a documented, controlled process
- Audit trail entries are protected from modification (most modern platforms store these in append-only tables)
- Backup includes audit trail data
- Audit trail entries are retained for the same period as the records they describe (or longer)

**Periodic re-verification:** Audit trail configuration can be changed by software updates, patches, or configuration changes to the application. Include audit trail configuration verification in the change control process for any system modification, and in the periodic review process for validated systems.

The [CSV/CSA pillar](/pillars/csv-csa) covers how to document and validate these controls as part of the system validation lifecycle.

---

## Hybrid Systems and Paper Records

Not everything is electronic. Many operations still use paper batch records, paper logbooks, or hybrid systems where an instrument generates an electronic record but the analysis result is manually transcribed to paper.

For paper records, the audit trail equivalent is:
- Corrections made in ink with a single strikethrough, date, and initialed signature, never correction fluid, never overwriting
- Cross-references between the paper record and any electronic source data
- Verified transcription with second-person check

For hybrid systems, the integrity requirements apply at both levels. The electronic instrument data is the original. The paper transcription is a secondary record. Both must be retained, and the transcription process must include a verified accuracy check.

---

## The Durable Principle

Audit trails exist to answer one question about any piece of GxP data: *what happened to this record, who touched it, and when?* If your audit trail can answer that question completely and traceably for any data point, you have done the foundational work right. If it can answer it only for some records, only for some actions, or only for some time periods, you have a gap that regulators will find.

Build the trail first, then build the review process around it. Many organizations do this backwards: they add audit trail review to existing procedures without first verifying that the trail itself is complete. The review of an incomplete trail is not a control.
