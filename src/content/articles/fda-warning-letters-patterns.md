---
title: "FDA Data Integrity Warning Letters: 8 Patterns That Repeat"
description: "Analysis of recurring failure modes across FDA data integrity enforcement actions — what inspectors actually find, and what the underlying system failures look like."
pubDate: 2026-05-10
tags: ["FDA", "Warning Letters", "GxP", "audit-trail"]
---

FDA data integrity warning letters follow patterns. Across hundreds of enforcement actions since 2013, the same failure modes appear in different companies, different countries, and different product types. Understanding these patterns is more useful than memorizing specific cases — because the pattern tells you what your own systems are likely to miss.

This analysis covers the eight most frequently cited failure modes in FDA data integrity enforcement actions, based on publicly available warning letters. No company-specific details beyond what FDA has already made public.

> **Note:** All warning letters referenced here are part of the public FDA record. FDA publishes warning letters at fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters.

---

## Pattern 1: Audit Trail Gaps in Analytical Instruments

**What inspectors find:** Chromatography data systems (CDS) with audit trails either disabled, configured to record only certain event types, or producing logs that capture "modified" without recording the original value.

This is the single most common data integrity finding across FDA warning letters. Analytical instruments — particularly HPLC systems running Empower, Chemstation, or Chromeleon — are frequently configured to log that a change occurred without logging what the original value was. An investigator can prove something changed; they cannot reconstruct what the original result was.

**The underlying system failure:** CDS platforms have configurable audit trail settings. Out-of-box defaults are frequently not compliant. System administrators configure audit trails at installation without understanding the regulatory requirements, and the configuration is never reviewed during qualification.

**What it looks like in a warning letter (paraphrased from multiple actions):**
> "Your firm failed to maintain complete audit trails for [CDS]. Review of the audit trail showed that changes to integration parameters, chromatographic sequences, and injection records were not fully captured. The audit trail did not record previous values when records were modified."

**Remediation pattern:** Requires reconfiguration of CDS audit trail settings, retrospective data integrity audit of affected records, and prospective qualification of the corrected configuration.

---

## Pattern 2: Test Result Deletion Before Batch Disposition

**What inspectors find:** Instrument sequence files, injection logs, or raw data files showing runs that were performed but are absent from the batch record. The gap between instrument records and submitted records indicates data was generated, not retained, and not reported.

This is one of the more serious findings because it directly implicates the accuracy and completeness of submitted batch data.

**How inspectors find it:** They go directly to the instrument, not the LIMS. FDA investigators pull the CDS sequence logs, injection records, and raw data directories and compare them against the batch record. Sequences that appear in the instrument log but not in reported data are the flag.

**The underlying failure pattern:**
1. Analyst runs a sample, gets an OOS result.
2. Analyst investigates informally (or doesn't), concludes "instrument problem."
3. Analyst reruns sample, gets passing result.
4. Analyst reports the passing result without documenting the original run or filing an OOS investigation.
5. Original run may be deleted from the instrument software.

**What it looks like in a warning letter (paraphrased):**
> "Your firm failed to adequately investigate out-of-specification results. Review of [CDS] audit trails revealed [N] test sequences that were not reflected in batch records. Your procedures did not ensure that all test results, including invalidated results, were retained and reported."

**Remediation requires:** Formal OOS procedures that explicitly address electronic data, mandatory audit trail review before result reporting, and laboratory management oversight controls that detect premature data deletion.

---

## Pattern 3: Shared User Accounts and Generic Logins

**What inspectors find:** Multiple analysts sharing a single login credential for a LIMS, instrument, or ELN. Records attributed to "admin," "analyst," or a named account that multiple people use.

This is attributability failure in its most basic form. Shared credentials destroy the ability to attribute a record to a specific individual — which means the record can't be fully trusted.

**Why it happens:** Laboratory systems with expensive per-seat licenses get "shared" to reduce costs. Instrument software doesn't support multiple user profiles and gets set up with a single account. IT policies require complex passwords that teams work around by sharing one account.

**The regulatory position:** FDA has been consistent that individual accountability requires individual accounts. This is not flexible. Warning letters have cited shared accounts as both a 21 CFR Part 11 violation (access controls) and a data integrity violation (attributability).

**An important nuance:** Service accounts used for system-to-system integration (LIMS to instrument, LIMS to ERP) are not the issue. The finding is when service accounts or shared accounts are used for human data entry or approval.

---

## Pattern 4: Backdating and Retroactive Documentation

**What inspectors find:** Batch record entries with timestamps inconsistent with the instrument audit trail. A procedure documented as completed at 9:00 AM when the instrument shows it started at 9:45 AM. A supervisor sign-off timestamped before the analyst's entry.

Backdating is found by cross-referencing independent time sources. FDA investigators compare:
- Batch record entry timestamps
- Instrument audit trail timestamps
- Electronic signature timestamps in the LIMS
- Building access records
- Environmental monitoring system logs
- Computer login/logout records

**How it typically happens:**
- Analyst misses a documentation step during a procedure.
- At the end of the shift, analyst completes the documentation, backdating to when the step occurred.
- Investigator compares batch record timestamp to instrument audit trail and finds the discrepancy.

**The severity dimension:** Backdating that is accidental (analyst estimated the time of a step they genuinely performed) is a documentation gap requiring CAPA. Backdating to conceal an OOS result, a procedure deviation, or an unauthorized step is falsification.

**What warning letters say:**
> "Investigators observed that numerous entries in batch production records were made on dates other than when the activities were performed. Your firm's procedures failed to detect or prevent retroactive documentation."

---

## Pattern 5: Integration Parameter Manipulation in Chromatography

**What inspectors find:** Multiple processed versions of the same chromatogram, with different integration parameters, where the version producing a passing result was reported and earlier versions were either not retained or not disclosed.

**Why this is technically complex:** Chromatographic peak integration is a legitimate scientific process that requires analyst judgment. Peaks can be legitimately reintegrated when there is a valid scientific reason (baseline correction, identification of a co-eluting impurity). The problem is when reintegration is done to change a result without documenting the reason.

**What FDA looks for:**
- Audit trail showing multiple reprocessing events on a single injection
- Absence of documented justification for reprocessing
- Pattern of reprocessing always producing results closer to the specification limit
- Deleted versions of the raw data file

**The discrimination question:** How do you distinguish legitimate reintegration from result manipulation? Documentation. A legitimate reintegration has a documented reason, is reviewed and approved by a second analyst, and is part of a controlled method. Illegitimate reintegration has no documented reason, is done by a single analyst, and shows a directional pattern toward passing results.

**Warning letter language (paraphrased):**
> "Review of [CDS] audit trails revealed that [N] sample injections were reprocessed multiple times. Your firm lacked adequate procedures to ensure that reprocessing of chromatographic data was scientifically justified and documented."

---

## Pattern 6: Incomplete or Circumvented OOS Procedures

**What inspectors find:** Out-of-specification results that were investigated and invalidated without adequate scientific justification — or not investigated at all before the sample was retested.

**The regulatory requirement:** FDA's 2006 guidance on OOS investigations (21 CFR 211.192) is explicit: before a failing result can be invalidated, there must be a documented Phase I investigation that identifies a specific, documented laboratory error. "The analyst said the instrument was acting up" is not a documented laboratory error.

**Common failure modes:**
- Retesting a failing sample before completing Phase I investigation.
- Invalidating a result based on analyst report of unverified instrument problem.
- Documenting "sample preparation error" without specifying what the error was and how it was identified.
- Running a failing result through a "confirmation" injection and reporting the average when the original OOS result was not invalidated.

**The data integrity connection:** OOS procedure failures are closely linked to audit trail findings. Inspectors often find OOS failures by noticing that the CDS shows more injections than the batch record reports — which leads them to the conclusion that a failing injection was run and not documented.

---

## Pattern 7: Server Migration and Data Archival Failures

**What inspectors find:** Data that exists in an archive but can't be retrieved, data in formats that are no longer readable, or audit trails that were truncated or lost during a system migration.

This pattern is less about deliberate falsification and more about inadequate data lifecycle management — but the regulatory consequence is the same: data required to support a quality decision is unavailable.

**What happens in practice:**
- LIMS is upgraded, and historical audit trail data is migrated to a new schema without verifying that all fields were transferred.
- CDS is decommissioned, raw data files are archived to tape, and several years later there is no working tape reader.
- Cloud migration truncates audit trail timestamps from millisecond precision to second precision, creating apparent duplicates that were not present in the original system.

**FDA's position:** Data must be retained in a form that is readable and retrievable for the required retention period. Archival systems must be validated. Data migration must be validated, including verification that all records were transferred completely and accurately.

**Prevention:** Data migration validation requires a complete reconciliation — not a sample — of all records before decommissioning the source system.

---

## Pattern 8: Third-Party and CRO Data Management

**What inspectors find:** Analytical testing performed at contract labs or CROs where the data integrity controls are insufficient, or where the sponsor has insufficient visibility into the CRO's data management practices.

**The regulatory context:** Under 21 CFR 211.68 and related regulations, the sponsor is responsible for data generated on their behalf, regardless of where it is generated. "Our CRO does it" is not a defense.

**What this means in practice:**
- Pre-qualification audits of CROs must include data integrity assessment.
- Quality agreements must specify data management requirements, including audit trail retention, system validation, and access controls.
- Sponsors must have the right (and exercise it) to review raw data and audit trails at CRO facilities.
- CRO data must be transferred with adequate metadata for the sponsor to assess its integrity.

**Warning letter pattern:** FDA inspects a sponsor, requests raw data from a CRO study, finds that the CRO's data management is inadequate. The warning letter goes to the sponsor.

---

## What the Patterns Tell Us

These eight failures share a common structure: they involve a **gap between what a system records and what actually happened**, or **data that was selectively retained or reported**.

The systems that prevent these failures share common characteristics:
- Audit trails that capture the full history of every data point, including previous values
- Individual user accounts with no exceptions
- OOS procedures with mandatory Phase I investigation before any retest
- Periodic audit trail review as a defined quality activity, not a response to findings
- Data lifecycle management plans that cover migration, archival, and decommissioning

The companies that show up repeatedly in enforcement actions — and there are some — consistently share one feature: they treated data integrity as a documentation exercise rather than as a property of their systems. When you build a system with integrity, documentation is easy. When you rely on documentation to create the appearance of integrity, it eventually fails under inspection.
