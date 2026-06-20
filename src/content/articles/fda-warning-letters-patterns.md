---
title: "FDA Data Integrity Warning Letters: 8 Patterns That Repeat"
description: "The recurring failure modes in FDA data integrity enforcement actions, what investigators actually pull and compare, and the system weaknesses underneath each citation."
pubDate: 2025-11-24
tags: ["FDA", "Warning Letters", "GxP", "audit-trail"]
tier: "Advanced"
pillar: "data-integrity"
---

FDA data integrity warning letters follow patterns. Across hundreds of enforcement actions since 2013, the same failure modes appear in different companies, different countries, and different product types. Understanding these patterns is more useful than memorizing specific cases, because the pattern tells you what your own systems are likely to miss.

This analysis covers the eight most frequently cited failure modes in FDA data integrity enforcement actions, based on publicly available warning letters. There are no company-specific details here beyond what FDA has already made public.

A quick orientation for readers new to the topic. A warning letter is not the first step. FDA inspects a facility, and at the close of the inspection issues a Form FDA 483 listing observations. The firm responds. If FDA finds the response inadequate, or the findings serious enough, the agency issues a warning letter, which is a public document that names the firm and the specific violations of the Federal Food, Drug, and Cosmetic Act and the regulations under it. Warning letters citing data integrity almost always reference 21 CFR Part 211 (current good manufacturing practice for finished pharmaceuticals), and many reference 21 CFR Part 11 (electronic records and electronic signatures) as well. The mental model that ties the whole subject together is ALCOA, the principle that records must be Attributable, Legible, Contemporaneous, Original, and Accurate, later extended to ALCOA+ with Complete, Consistent, Enduring, and Available. For the underlying framework, see [ALCOA+ in practice](/articles/alcoa-plus-deep-dive) and [data integrity foundations](/articles/data-integrity-foundations). Every pattern below is a specific way ALCOA breaks.

> **Note:** All warning letters referenced here are part of the public FDA record. FDA publishes warning letters at fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters.

The single most useful thing to internalize before reading the patterns: FDA investigators do not trust the report. They trust the source. They go to the instrument, the raw data directory, the server clock, and the badge reader, and they compare those independent sources against what the firm reported. Almost every pattern below is found the same way, by comparing two records that should agree and do not.

---

## Pattern 1: Audit Trail Gaps in Analytical Instruments

**What inspectors find:** Chromatography data systems (CDS) with audit trails either disabled, configured to record only certain event types, or producing logs that capture "modified" without recording the original value.

This is the single most common data integrity finding across FDA warning letters. Analytical instruments, particularly HPLC and GC systems running platforms such as Empower, OpenLab, or Chromeleon, are frequently configured to log that a change occurred without logging what the original value was. An investigator can prove something changed; they cannot reconstruct what the original result was. That is the worst of both worlds, because the firm has admitted a change happened and cannot account for it.

**The underlying system failure:** CDS platforms have configurable audit trail settings. Out-of-box defaults are frequently not compliant. System administrators configure audit trails at installation without understanding the regulatory requirements, and the configuration is never reviewed during qualification. The audit trail is a function of the software, but its correctness is a quality decision, and the two are often owned by people who never talk to each other.

There are three distinct technical defects that all show up under this heading, and they have different fixes:

| Defect | What it looks like | Why it happens | Fix |
| --- | --- | --- | --- |
| Audit trail off | No change history exists at all | Feature not enabled at install; older software versions | Enable, requalify, retrospectively review affected data |
| Partial logging | Some event types logged, others not (e.g., integration changes not captured) | Granular config left at non-compliant defaults | Reconfigure to log all relevant event classes |
| No old value | "Modified" recorded without the prior value | Logging level set to action-only, not before/after | Set logging to capture original and new values |

**What it looks like in a warning letter (paraphrased from multiple actions):**
> "Your firm failed to maintain complete audit trails for [CDS]. Review of the audit trail showed that changes to integration parameters, chromatographic sequences, and injection records were not fully captured. The audit trail did not record previous values when records were modified."

**Remediation pattern:** Requires reconfiguration of CDS audit trail settings, a retrospective data integrity audit of affected records, and prospective qualification of the corrected configuration. For how to design the audit trail and the review that sits on top of it, see [audit trail design and review](/articles/audit-trail-design-and-review). For the instrument qualification angle, see [analytical instrument qualification](/articles/analytical-instrument-qualification).

A practical note for working analysts and QA reviewers. The audit trail is only useful if someone reads it. A firm can have a perfectly configured audit trail and still fail inspection because nobody reviewed it before releasing results. The configuration is the floor, not the ceiling.

---

## Pattern 2: Test Result Deletion Before Batch Disposition

**What inspectors find:** Instrument sequence files, injection logs, or raw data files showing runs that were performed but are absent from the batch record. The gap between instrument records and submitted records indicates data was generated, not retained, and not reported.

This is one of the more serious findings because it directly implicates the accuracy and completeness of submitted batch data. It is the difference between a paperwork problem and a question about whether the product was actually tested the way the record says.

**How inspectors find it:** They go directly to the instrument, not the LIMS. FDA investigators pull the CDS sequence logs, injection records, and raw data directories and compare them against the batch record. Sequences that appear in the instrument log but not in reported data are the flag. A favorite technique is to count injections. If the column equilibration, blanks, system suitability, and reportable injections do not add up to the number of vials the sequence shows were run, the missing injections become the question of the inspection.

**The underlying failure pattern:**
1. Analyst runs a sample, gets an out-of-specification (OOS) result.
2. Analyst investigates informally (or does not), concludes "instrument problem."
3. Analyst reruns the sample, gets a passing result.
4. Analyst reports the passing result without documenting the original run or filing an OOS investigation.
5. The original run may be deleted from the instrument software, or left in place but simply ignored.

This sequence has a name in some quality circles: testing into compliance. It is the act of repeating a test until you get the answer you want, then reporting only the answer you want. It is treated as one of the most serious data integrity failures because it is deliberate and it defeats the purpose of testing.

**What it looks like in a warning letter (paraphrased):**
> "Your firm failed to adequately investigate out-of-specification results. Review of [CDS] audit trails revealed test sequences that were not reflected in batch records. Your procedures did not ensure that all test results, including invalidated results, were retained and reported."

**Remediation requires:** Formal OOS procedures that explicitly address electronic data, mandatory audit trail review before result reporting, and laboratory management oversight controls that detect premature data deletion. File and folder permissions should make it impossible for an analyst to delete raw data; deletion rights belong to a separate administrative role with its own audit trail. See [the OOS investigation process](/articles/oos-investigation-process) and [batch record review](/articles/batch-record-review-gmp).

---

## Pattern 3: Shared User Accounts and Generic Logins

**What inspectors find:** Multiple analysts sharing a single login credential for a LIMS, instrument, or electronic lab notebook (ELN). Records attributed to "admin," "analyst," or a named account that multiple people use.

This is attributability failure in its most basic form. Shared credentials destroy the ability to attribute a record to a specific individual, which means the record cannot be fully trusted. If three people use one login, no entry made under that login can be tied to a person, and the A in ALCOA is gone.

**Why it happens:** Laboratory systems with expensive per-seat licenses get "shared" to reduce costs. Instrument software does not support multiple user profiles and gets set up with a single account. IT password policies require complex passwords that teams work around by sharing one account taped to the monitor. The root cause is almost never malice; it is friction. People share accounts because the compliant path was made harder than the noncompliant one.

**The regulatory position:** FDA has been consistent that individual accountability requires individual accounts. This is not flexible. Warning letters have cited shared accounts as both a 21 CFR Part 11 violation (the access control requirements) and a data integrity violation (attributability). The same expectation appears in EU GMP Annex 11, which calls for systems to record the identity of operators. See [Part 11 and Annex 11 in practice](/articles/part-11-annex-11-practical-guide).

**An important nuance:** Service accounts used for system-to-system integration (LIMS to instrument, LIMS to ERP) are not the issue. The finding is when service accounts or shared accounts are used for human data entry or approval. A service account that moves data between two validated systems on a schedule, with no human acting through it, is expected and acceptable. The test is whether a human decision or data entry is hiding behind a non-human or shared identity.

A senior-level reading of this pattern: a single shared-account finding rarely stands alone. When an investigator finds shared logins, they widen the inspection, because shared accounts make every other pattern harder to disprove. If you cannot say who ran the test, you also cannot defend against an allegation that someone deleted a result or backdated an entry. Shared accounts turn a narrow finding into a credibility problem for the whole laboratory.

---

## Pattern 4: Backdating and Retroactive Documentation

**What inspectors find:** Batch record entries with timestamps inconsistent with the instrument audit trail. A procedure documented as completed at 9:00 AM when the instrument shows it started at 9:45 AM. A supervisor sign-off timestamped before the analyst's entry it is supposed to approve.

Backdating is found by cross-referencing independent time sources. FDA investigators compare:
- Batch record entry timestamps
- Instrument audit trail timestamps
- Electronic signature timestamps in the LIMS
- Building access and badge records
- Environmental monitoring system logs
- Computer login and logout records
- Network time and server clock settings

The technique relies on the fact that a person falsifying one record almost never controls all of them. The badge reader does not know what the analyst wrote in the logbook. When six independent clocks tell six different stories, the inconsistency is the finding.

**How it typically happens:**
- Analyst misses a documentation step during a procedure.
- At the end of the shift, the analyst completes the documentation, backdating to when the step occurred.
- The investigator compares the batch record timestamp to the instrument audit trail and finds the discrepancy.

**The severity dimension:** This is the part that matters most and is most often misunderstood. Backdating that is accidental, where an analyst estimated the time of a step they genuinely performed, is a documentation gap requiring a corrective and preventive action (CAPA). Backdating to conceal an OOS result, a procedure deviation, or an unauthorized step is falsification, and falsification is treated as a different category of problem entirely. The correct contemporaneous practice when you miss an entry is a late or correcting entry, dated and timed with the actual time of writing, with a note explaining when the activity occurred. Writing the original time as if no delay happened is what crosses the line. See [good documentation practices](/articles/good-documentation-practices) for the contemporaneous-entry rules and how to handle a late entry correctly.

**What warning letters say:**
> "Investigators observed that numerous entries in batch production records were made on dates other than when the activities were performed. Your firm's procedures failed to detect or prevent retroactive documentation."

---

## Pattern 5: Integration Parameter Manipulation in Chromatography

**What inspectors find:** Multiple processed versions of the same chromatogram, with different integration parameters, where the version producing a passing result was reported and earlier versions were either not retained or not disclosed.

**Why this is technically complex:** Chromatographic peak integration is a legitimate scientific process that requires analyst judgment. Peaks can be legitimately reintegrated when there is a valid scientific reason, such as a baseline correction or the identification of a co-eluting impurity. The problem is when reintegration is done to change a result without documenting the reason. This is the hardest pattern to investigate and to defend, because the same action can be either good science or fraud depending entirely on intent and documentation.

**What FDA looks for:**
- Audit trail showing multiple reprocessing events on a single injection
- Absence of documented justification for reprocessing
- A pattern of reprocessing that always produces results closer to the specification limit
- Manual integration replacing automatic integration with no recorded reason
- Deleted versions of the raw data file

**The discrimination question:** How do you distinguish legitimate reintegration from result manipulation? Documentation and direction. A legitimate reintegration has a documented reason, is reviewed and approved by a second qualified person, is consistent with the validated method, and is not directionally biased. An illegitimate reintegration has no documented reason, is done by a single analyst, and shows a directional pattern toward passing results. When an investigator sees that every reintegration in a dataset moves the number toward the limit, the pattern itself is the evidence; statistics do not move in one direction by chance.

The defensible controls here are specific. The integration method should be locked in the processing parameters wherever possible. Manual integration should require a documented scientific justification at the time it is performed, captured in the audit trail, and should trigger a second-person review. The reviewer should be able to see, side by side, the original automatic integration and the manual override. See [method validation essentials](/articles/method-validation-essentials) and the analytical lifecycle guidance in [ICH Q14 and Q2(R2)](/articles/ich-q14-q2r2-analytical-lifecycle).

**Warning letter language (paraphrased):**
> "Review of [CDS] audit trails revealed that sample injections were reprocessed multiple times. Your firm lacked adequate procedures to ensure that reprocessing of chromatographic data was scientifically justified and documented."

---

## Pattern 6: Incomplete or Circumvented OOS Procedures

**What inspectors find:** Out-of-specification results that were investigated and invalidated without adequate scientific justification, or not investigated at all before the sample was retested.

**The regulatory requirement:** FDA's guidance for industry, "Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production," finalized in 2006, sits on top of the testing and recordkeeping requirements in 21 CFR 211.192. The guidance is explicit: before a failing result can be invalidated, there must be a documented Phase I laboratory investigation that identifies a specific, assignable laboratory error. "The analyst said the instrument was acting up" is not an assignable laboratory error. A confirmed dilution mistake with the wrong volumetric flask documented at the time is.

**Common failure modes:**
- Retesting a failing sample before completing the Phase I investigation.
- Invalidating a result based on an analyst report of an unverified instrument problem.
- Documenting "sample preparation error" without specifying what the error was and how it was identified.
- Running a failing result through a "confirmation" injection and reporting the average when the original OOS result was never validly invalidated. Averaging a fail and a pass to produce a pass is one of the textbook examples of what not to do.
- Resampling, that is, going back to the lot for new material, when the original result was valid and the correct path was to reject.

The distinction between a retest (same preparation or same sample, repeated) and a resample (new material from the lot) matters, and so does the order of operations. The investigation comes first. The lab decides whether the original result is valid. Only if a specific laboratory cause is found and documented can the original be set aside, and even then a full-scale Phase II investigation may be required for production causes.

**The data integrity connection:** OOS procedure failures are closely linked to audit trail findings. Inspectors often find OOS failures by noticing that the CDS shows more injections than the batch record reports, which leads them straight to the conclusion that a failing injection was run and not documented. This is why Patterns 2, 5, and 6 frequently appear together in a single warning letter; they are three views of the same underlying behavior. See [the OOS investigation process](/articles/oos-investigation-process) and [deviation management](/articles/deviation-management) for how the investigation should run end to end.

---

## Pattern 7: Server Migration and Data Archival Failures

**What inspectors find:** Data that exists in an archive but cannot be retrieved, data in formats that are no longer readable, or audit trails that were truncated or lost during a system migration.

This pattern is less about deliberate falsification and more about inadequate data lifecycle management, but the regulatory consequence is the same: data required to support a quality decision is unavailable. The C, E, and A of ALCOA+, Complete, Enduring, and Available, all fail here even when nobody did anything dishonest.

**What happens in practice:**
- A LIMS is upgraded, and historical audit trail data is migrated to a new schema without verifying that all fields were transferred. Free-text comment fields and reason-for-change fields are the ones most often dropped.
- A CDS is decommissioned, raw data files are archived to tape, and several years later there is no working tape reader, or no licensed software that can open the proprietary file format.
- A cloud migration truncates audit trail timestamps from millisecond precision to second precision, creating apparent duplicate entries that were not present in the original system and confusing later review.
- Backups are taken but never test-restored, so the firm discovers at inspection time that the backup is incomplete or corrupt.

**FDA's position:** Data must be retained in a form that is readable and retrievable for the required retention period. Archival systems must be validated. Data migration must be validated, including verification that all records were transferred completely and accurately, with the metadata and the audit trail intact, not just the result values.

**Prevention:** Data migration validation requires a complete reconciliation, not a sample, of all records before decommissioning the source system. The source system should not be retired until the target has been verified to hold everything the source held, including the audit trail. Backups should be restore-tested on a defined schedule, because an untested backup is a hope, not a control. For the detailed approach, see [data migration validation](/articles/data-migration-validation), [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation), and the broader [data lifecycle and metadata](/articles/data-lifecycle-and-metadata) view.

---

## Pattern 8: Third-Party and CRO Data Management

**What inspectors find:** Analytical testing performed at contract labs, contract manufacturers, or contract research organizations (CROs) where the data integrity controls are insufficient, or where the sponsor has insufficient visibility into the contractor's data management practices.

**The regulatory context:** Under 21 CFR 211.22 and the broader responsibilities of the quality unit, plus the contractor provisions that make a firm accountable for work done on its behalf, the sponsor is responsible for data generated for it regardless of where the data is generated. "Our contractor does it" is not a defense. FDA's 2016 guidance "Contract Manufacturing Arrangements for Drugs: Quality Agreements" reinforces that responsibilities must be defined in writing and that the owner cannot delegate away accountability.

**What this means in practice:**
- Pre-qualification audits of contractors must include a data integrity assessment, not just a tour and a paperwork check. Look at the audit trail configuration on their instruments, their account management, and their OOS handling, the same things FDA would look at.
- Quality agreements must specify data management requirements, including audit trail retention, system validation, access controls, and the right to inspect.
- Sponsors must have the right, and must actually exercise it, to review raw data and audit trails at the contractor's facilities, not just the summary certificate of analysis.
- Contractor data must be transferred with adequate metadata for the sponsor to assess its integrity. A PDF of results with no underlying data is not enough to defend a decision.

**Warning letter pattern:** FDA inspects a sponsor, requests raw data from a contracted study or test, and finds that the contractor's data management is inadequate. The warning letter goes to the sponsor. The sponsor's defense, that it relied on the contractor, is precisely the failure FDA is citing, because reliance without oversight is the gap. See [supplier and vendor qualification](/articles/supplier-vendor-qualification) and [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements).

---

## How Investigators Actually Build a Data Integrity Finding

It helps to see the common method behind all eight patterns, because once you see it you can audit yourself the same way. Investigators triangulate. They take what the firm reported and they find an independent record that should match it, then they look for the gap.

| Reported record | Independent source compared against it | Pattern it exposes |
| --- | --- | --- |
| Batch record result | Instrument injection count and sequence log | Patterns 2, 6 |
| Batch record entry time | Instrument clock, badge reader, login logs | Pattern 4 |
| Final chromatogram | Reprocessing history in the audit trail | Patterns 1, 5 |
| Who performed the test | Account that owns the record | Pattern 3 |
| Certificate of analysis from a contractor | Contractor raw data and audit trail | Pattern 8 |
| Archived historical data | Ability to retrieve and read it now | Pattern 7 |

A useful self-test for a quality unit: pick a released batch at random and try to break it the way an investigator would. Pull the instrument sequence and count injections against the report. Cross-check three timestamps from three independent clocks. Open the chromatogram reprocessing history. If you cannot reconstruct the full story from the source data, an investigator will not be able to either, and the absence of the story is the finding.

---

## What the Patterns Tell Us

These eight failures share a common structure: they involve a **gap between what a system records and what actually happened**, or **data that was selectively retained or reported**. Either the record does not match reality, or the record that matches reality was hidden.

The systems that prevent these failures share common characteristics:
- Audit trails that capture the full history of every data point, including previous values, and that are actually reviewed before results are released
- Individual user accounts with no exceptions, and privileged actions like deletion segregated into a separate role
- OOS procedures with a mandatory documented Phase I investigation before any retest, and a hard rule against averaging away a failure
- Periodic audit trail review as a defined, scheduled quality activity, not a scramble in response to findings
- Data lifecycle management plans that cover migration, archival, restore testing, and decommissioning, validated before the source system is retired
- Contractor oversight that looks at the same source data FDA would look at

There is also a cultural dimension that sits underneath the technical one. The firms that show up repeatedly in enforcement actions, and there are some, consistently share one feature: they treated data integrity as a documentation exercise rather than as a property of their systems and their behavior. When you build a system with integrity, the documentation is easy because it just describes what the system already does. When you rely on documentation to create the appearance of integrity, it eventually fails under inspection, because the badge reader, the server clock, and the instrument log do not cooperate with the story. For the people-and-incentives side of this, see [quality culture and data integrity failures](/articles/quality-culture-di-failures), and for turning these lessons into a standing program, see [data integrity program architecture](/articles/di-program-architecture) and [the data governance framework](/articles/data-governance-framework).

If a 483 or warning letter has already arrived, the response is its own discipline. The pattern that gets firms into deeper trouble is responding to the specific observations without addressing the system that produced them. See [483 and warning letter response strategy](/articles/483-warning-letter-response) and [FDA 483 response strategy](/articles/fda-483-response-strategy) for how to scope a response that FDA will accept, including the retrospective review, the CAPA, and the credible commitment to verify effectiveness.
