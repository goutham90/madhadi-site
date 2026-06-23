---
title: "FDA Data Integrity Warning Letters: 8 Patterns That Repeat"
description: "The recurring failure modes in FDA data integrity enforcement, what investigators pull and compare, the system weakness under each citation, and how to audit yourself the same way."
pubDate: 2025-11-24
tags: ["FDA", "Warning Letters", "GxP", "audit-trail"]
tier: "Advanced"
pillar: "data-integrity"
---

FDA data integrity warning letters follow patterns. Across hundreds of enforcement actions since 2013, the same failure modes appear in different companies, different countries, and different product types. The same eight findings turn up at a sterile injectable plant, an oral solids site, a finished-device manufacturer, a biologics QC lab, and a contract testing house. Understanding these patterns is more useful than memorizing specific cases, because the pattern tells you what your own systems are likely to miss.

This analysis covers the eight most frequently cited failure modes in FDA data integrity enforcement actions, based on the public warning letter record. There are no company-specific details here beyond what FDA has already made public. After the eight patterns, there is a section on how investigators actually build a finding, a section on roles and who owns prevention, and an interview section with the questions you should expect and how to answer them.

A quick orientation for readers new to the topic. A warning letter is not the first step. FDA inspects a facility, and at the close of the inspection issues a Form FDA 483 listing observations. The firm responds, usually within 15 working days for the response to be considered before the agency decides its next move. If FDA finds the response inadequate, or the findings serious enough, the agency issues a warning letter, which is a public document that names the firm and the specific violations of the Federal Food, Drug, and Cosmetic Act and the regulations under it. Warning letters citing data integrity in drug manufacturing almost always reference 21 CFR Part 211 (current good manufacturing practice for finished pharmaceuticals), and many reference 21 CFR Part 11 (electronic records and electronic signatures) as well. For combination products and device-led submissions the same behaviors are cited under 21 CFR Part 820, which since 2 February 2026 is the Quality Management System Regulation that incorporates ISO 13485:2016 by reference (the prior Quality System Regulation having been superseded). The escalation ladder does not stop at a warning letter: unresolved data integrity can lead to an import alert, a consent decree, application integrity policy actions that put pending submissions on hold, and withholding of approvals.

The mental model that ties the whole subject together is ALCOA, the principle that records must be Attributable, Legible, Contemporaneous, Original, and Accurate, later extended to ALCOA+ with Complete, Consistent, Enduring, and Available. For the underlying framework, see [ALCOA+ in practice](/articles/alcoa-plus-deep-dive) and [data integrity foundations](/articles/data-integrity-foundations). Every pattern below is a specific way ALCOA breaks. The same expectations sit in the MHRA "GXP Data Integrity Guidance and Definitions" (2018), the PIC/S PI 041-1 "Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments" (2021), and WHO Annex 4 on data integrity, so none of this is a US-only standard.

> **Note:** All warning letters referenced here are part of the public FDA record. FDA publishes warning letters at fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters.

The single most useful thing to internalize before reading the patterns: FDA investigators do not trust the report. They trust the source. They go to the instrument, the raw data directory, the server clock, and the badge reader, and they compare those independent sources against what the firm reported. Almost every pattern below is found the same way, by comparing two records that should agree and do not.

---

## Pattern 1: Audit Trail Gaps in Analytical Instruments

**What inspectors find:** Chromatography data systems (CDS) and other analytical software with audit trails either disabled, configured to record only certain event types, or producing logs that capture that a value was "modified" without recording the original value.

**Why it is required:** 21 CFR 211.68(b) requires that computerized systems have controls to assure that changes are made only by authorized personnel and that a record of those changes exists. 21 CFR 211.194 requires complete records that allow a reviewer to reconstruct what happened. Part 11 (21 CFR 11.10(e)) is explicit: systems must use secure, computer-generated, time-stamped audit trails that record the date and time of operator entries and actions that create, modify, or delete electronic records, and that retain the previously recorded information when a change is made. The risk rationale is simple. If the system cannot tell you what a result used to be, the firm cannot prove the reported number is the real number, and a reviewer cannot detect a result that was quietly improved.

This is the single most common data integrity finding across FDA warning letters. Analytical instruments, particularly HPLC and GC systems running CDS platforms, are frequently configured to log that a change occurred without logging what the original value was. An investigator can prove something changed; they cannot reconstruct what the original result was. That is the worst of both worlds, because the firm has admitted a change happened and cannot account for it.

**The underlying system failure:** CDS and instrument-control platforms have configurable audit trail settings. Out-of-box defaults are frequently not compliant. System administrators configure audit trails at installation without understanding the regulatory requirements, and the configuration is never reviewed during qualification. The audit trail is a function of the software, but its correctness is a quality decision, and the two are often owned by people who never talk to each other.

There are three distinct technical defects that all show up under this heading, and they have different fixes:

| Defect | What it looks like | Why it happens | Fix |
| --- | --- | --- | --- |
| Audit trail off | No change history exists at all | Feature not enabled at install; older software versions; admin-disabled to improve performance | Enable, requalify, retrospectively review affected data |
| Partial logging | Some event types logged, others not (e.g., integration changes or method edits not captured) | Granular config left at non-compliant defaults | Reconfigure to log all relevant event classes |
| No old value | "Modified" recorded without the prior value | Logging level set to action-only, not before/after | Set logging to capture original and new values |

**What good looks like (acceptance criteria):** The audit trail is on, cannot be disabled or edited by ordinary users, captures create/modify/delete with the old value, the new value, the user, the date-time, and a reason where required. The configuration is documented in the validation package and verified during qualification. A defined review of the audit trail happens before result release, and that review is itself recorded. See [audit trail design and review](/articles/audit-trail-design-and-review) and [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).

**What it looks like in a warning letter (paraphrased from multiple actions):**
> "Your firm failed to maintain complete audit trails for [CDS]. Review of the audit trail showed that changes to integration parameters, chromatographic sequences, and injection records were not fully captured. The audit trail did not record previous values when records were modified."

**Remediation pattern:** Requires reconfiguration of the audit trail settings, a retrospective data integrity audit of affected records, and prospective qualification of the corrected configuration. For the instrument qualification angle, see [analytical instrument qualification](/articles/analytical-instrument-qualification) and the platform-specific view in [chromatography data system integrity](/articles/chromatography-data-system-integrity).

A practical note for working analysts and QA reviewers. The audit trail is only useful if someone reads it. A firm can have a perfectly configured audit trail and still fail inspection because nobody reviewed it before releasing results. The configuration is the floor, not the ceiling.

---

## Pattern 2: Test Result Deletion Before Batch Disposition

**What inspectors find:** Instrument sequence files, injection logs, or raw data files showing runs that were performed but are absent from the batch record. The gap between instrument records and submitted records indicates data was generated, not retained, and not reported.

**Why it matters:** 21 CFR 211.194(a) requires complete records of all data secured in the course of each test. 211.192 requires that any unexplained discrepancy or failure of a batch to meet specification be thoroughly investigated. Deleting a result before disposition defeats both. This is one of the more serious findings because it directly implicates the accuracy and completeness of submitted batch data. It is the difference between a paperwork problem and a question about whether the product was actually tested the way the record says.

**How inspectors find it:** They go directly to the instrument, not the LIMS. FDA investigators pull the CDS sequence logs, injection records, and raw data directories and compare them against the batch record. Sequences that appear in the instrument log but not in reported data are the flag. A favorite technique is to count injections. If the column equilibration, blanks, system suitability, and reportable injections do not add up to the number of vials the sequence shows were run, the missing injections become the question of the inspection.

**Worked example, the injection count:** A reported HPLC assay shows 2 blanks, 5 system suitability injections, 1 standard bracket, and 2 sample injections, so the report accounts for 10 injections. The CDS sequence log shows the autosampler ran 14 vials with timestamps 09:02 through 11:40. Four injections in the instrument log do not appear anywhere in the batch record. Three of them fall between the failing window and a later passing window. That four-injection gap is the finding, and it points straight at Pattern 6.

**The underlying failure pattern:**
1. Analyst runs a sample, gets an out-of-specification (OOS) result.
2. Analyst investigates informally (or does not), concludes "instrument problem."
3. Analyst reruns the sample, gets a passing result.
4. Analyst reports the passing result without documenting the original run or filing an OOS investigation.
5. The original run may be deleted from the instrument software, or left in place but simply ignored.

This sequence has a name in some quality circles: testing into compliance. It is the act of repeating a test until you get the answer you want, then reporting only the answer you want. It is treated as one of the most serious data integrity failures because it is deliberate and it defeats the purpose of testing.

**What it looks like in a warning letter (paraphrased):**
> "Your firm failed to adequately investigate out-of-specification results. Review of [CDS] audit trails revealed test sequences that were not reflected in batch records. Your procedures did not ensure that all test results, including invalidated results, were retained and reported."

**Remediation and acceptance criteria:** Formal OOS procedures that explicitly address electronic data, mandatory audit trail review before result reporting, and laboratory management oversight controls that detect premature data deletion. File and folder permissions should make it impossible for an analyst to delete raw data; deletion rights belong to a separate administrative role with its own audit trail. You know it is fixed when an ordinary analyst account, tested in a challenge, physically cannot delete a result, and when periodic audit trail review reliably catches an unreported injection in a planted test. See [the OOS investigation process](/articles/oos-investigation-process) and [batch record review](/articles/batch-record-review-gmp).

---

## Pattern 3: Shared User Accounts and Generic Logins

**What inspectors find:** Multiple analysts sharing a single login credential for a LIMS, instrument, or electronic lab notebook (ELN). Records attributed to "admin," "analyst," or a named account that multiple people use.

**Why it is required:** Attributability is the A in ALCOA. 21 CFR 11.10(d) requires limiting system access to authorized individuals, and 11.10(g) requires authority checks so that only authorized individuals can use the system or perform an operation. 211.68(b) requires that input and changes be made by authorized personnel and traceable to them. The same expectation appears in EU GMP Annex 11 (clause 2 and clause 12), which calls for systems to record the identity of operators entering or confirming critical data. Shared credentials destroy the ability to attribute a record to a specific individual, which means the record cannot be fully trusted. If three people use one login, no entry made under that login can be tied to a person, and the A in ALCOA is gone.

**Why it happens:** Laboratory systems with expensive per-seat licenses get "shared" to reduce costs. Instrument software does not support multiple user profiles and gets set up with a single account. IT password policies require complex passwords that teams work around by sharing one account taped to the monitor. The root cause is almost never malice; it is friction. People share accounts because the compliant path was made harder than the noncompliant one.

**The regulatory position:** FDA has been consistent that individual accountability requires individual accounts. This is not flexible. Warning letters have cited shared accounts as both a Part 11 violation (the access control requirements) and a data integrity violation (attributability). See [Part 11 and Annex 11 in practice](/articles/part-11-annex-11-practical-guide) and [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11).

**An important nuance:** Service accounts used for system-to-system integration (LIMS to instrument, LIMS to ERP) are not the issue. The finding is when service accounts or shared accounts are used for human data entry or approval. A service account that moves data between two validated systems on a schedule, with no human acting through it, is expected and acceptable. The test is whether a human decision or data entry is hiding behind a non-human or shared identity.

**What good looks like:** One account per person, unique IDs never reissued, a documented account lifecycle (request, approve, provision, periodic review, deprovision on departure), privileged roles segregated from analyst roles, and a periodic user-access review that someone signs. For legacy instruments that genuinely cannot support multiple profiles, the compensating control is a contemporaneous logbook tying each session to a named person, with the gap documented in a risk assessment and a remediation date. See [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control) and [electronic signatures implementation](/articles/electronic-signatures-implementation).

A senior-level reading of this pattern: a single shared-account finding rarely stands alone. When an investigator finds shared logins, they widen the inspection, because shared accounts make every other pattern harder to disprove. If you cannot say who ran the test, you also cannot defend against an allegation that someone deleted a result or backdated an entry. Shared accounts turn a narrow finding into a credibility problem for the whole laboratory.

---

## Pattern 4: Backdating and Retroactive Documentation

**What inspectors find:** Batch record entries with timestamps inconsistent with the instrument audit trail. A procedure documented as completed at 9:00 AM when the instrument shows it started at 9:45 AM. A supervisor sign-off timestamped before the analyst's entry it is supposed to approve.

**Why it matters:** Contemporaneous recording is the C in ALCOA and is required by 211.100(b) (activities documented at the time of performance) and 211.188 (batch records completed as each step is performed). A record made later but dressed up as contemporaneous is no longer a true record of what happened, and it usually hides why the delay occurred.

Backdating is found by cross-referencing independent time sources. FDA investigators compare:
- Batch record entry timestamps
- Instrument audit trail timestamps
- Electronic signature timestamps in the LIMS
- Building access and badge records
- Environmental monitoring system logs
- Computer login and logout records
- Network time and server clock settings

The technique relies on the fact that a person falsifying one record almost never controls all of them. The badge reader does not know what the analyst wrote in the logbook. When six independent clocks tell six different stories, the inconsistency is the finding. This is also why system clock control matters as its own discipline; see [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).

**Worked example, the timestamp triangle:** A batch record entry says weighing was completed at 09:00 and signed by the operator. The balance's audit trail shows the weighment printed at 09:48. The badge reader shows the operator did not enter the dispensary until 09:32. Three independent clocks, one story they cannot all support. The investigator does not need a confession; the records disagree, and the firm must explain the gap.

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

**Why it is subtle:** Chromatographic peak integration is a legitimate scientific process that requires analyst judgment, governed by the validated method and supported by USP General Chapter <621> on chromatography. Peaks can be legitimately reintegrated when there is a valid scientific reason, such as a baseline correction or the identification of a co-eluting impurity. The problem is when reintegration is done to change a result without documenting the reason. This is the hardest pattern to investigate and to defend, because the same action can be either good science or fraud depending entirely on intent and documentation. The regulatory hooks are the same complete-records requirements (211.194, 211.160(b) for scientifically sound methods) plus the Part 11 audit trail.

**What FDA looks for:**
- Audit trail showing multiple reprocessing events on a single injection
- Absence of documented justification for reprocessing
- A pattern of reprocessing that always produces results closer to the specification limit
- Manual integration replacing automatic integration with no recorded reason
- Deleted versions of the raw data file

**The discrimination question:** How do you distinguish legitimate reintegration from result manipulation? Documentation and direction. A legitimate reintegration has a documented reason, is reviewed and approved by a second qualified person, is consistent with the validated method, and is not directionally biased. An illegitimate reintegration has no documented reason, is done by a single analyst, and shows a directional pattern toward passing results. When an investigator sees that every reintegration in a dataset moves the number toward the limit, the pattern itself is the evidence; results do not move in one direction by chance.

The defensible controls here are specific. The integration method should be locked in the processing parameters wherever possible. Manual integration should require a documented scientific justification at the time it is performed, captured in the audit trail, and should trigger a second-person review. The reviewer should be able to see, side by side, the original automatic integration and the manual override. Acceptance criteria: every manual integration in a sample of released results has a contemporaneous, method-consistent reason and a second signature, and no released result rests on a reprocessing whose justification was added after the fact. See [method validation essentials](/articles/method-validation-essentials) and the analytical lifecycle guidance in [ICH Q14 and Q2(R2)](/articles/ich-q14-q2r2-analytical-lifecycle).

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

The distinction between a retest (same preparation or same sample, repeated) and a resample (new material from the lot) matters, and so does the order of operations. The investigation comes first. The lab decides whether the original result is valid. Only if a specific laboratory cause is found and documented can the original be set aside, and even then a full-scale Phase II investigation into possible production causes may be required.

**Worked example, retest vs resample:** Assay reads 89.4% against a 90.0-110.0% specification. The correct sequence is: secure the original data, run a Phase I lab investigation, and look for an assignable cause. If a documented Phase I finds a confirmed preparation error (wrong flask volume recorded at the time), the original result may be invalidated and a retest on a fresh preparation of the same sample is justified. If Phase I finds no assignable lab cause, the 89.4% stands, a Phase II production investigation opens, and the batch is on the path to rejection. What you cannot do is rerun first, get 92%, average to 90.7%, and release.

**The data integrity connection:** OOS procedure failures are closely linked to audit trail findings. Inspectors often find OOS failures by noticing that the CDS shows more injections than the batch record reports, which leads them straight to the conclusion that a failing injection was run and not documented. This is why Patterns 2, 5, and 6 frequently appear together in a single warning letter; they are three views of the same underlying behavior. See [the OOS investigation process](/articles/oos-investigation-process), [out-of-trend investigations](/articles/out-of-trend-investigations), and [deviation management](/articles/deviation-management) for how the investigation should run end to end.

---

## Pattern 7: Server Migration and Data Archival Failures

**What inspectors find:** Data that exists in an archive but cannot be retrieved, data in formats that are no longer readable, or audit trails that were truncated or lost during a system migration.

This pattern is less about deliberate falsification and more about inadequate data lifecycle management, but the regulatory consequence is the same: data required to support a quality decision is unavailable. The C, E, and A of ALCOA+, Complete, Enduring, and Available, all fail here even when nobody did anything dishonest. The legal basis is the record retention requirements (211.180 generally requires records be retained for at least one year past the lot expiry, longer for some records) plus Part 11's requirement that records be protected and accurately retrievable throughout the retention period (11.10(b), 11.10(c)).

**What happens in practice:**
- A LIMS is upgraded, and historical audit trail data is migrated to a new schema without verifying that all fields were transferred. Free-text comment fields and reason-for-change fields are the ones most often dropped.
- A CDS is decommissioned, raw data files are archived to tape, and several years later there is no working tape reader, or no licensed software that can open the proprietary file format.
- A cloud migration truncates audit trail timestamps from millisecond precision to second precision, creating apparent duplicate entries that were not present in the original system and confusing later review.
- Backups are taken but never test-restored, so the firm discovers at inspection time that the backup is incomplete or corrupt.

**FDA's position:** Data must be retained in a form that is readable and retrievable for the required retention period. Archival systems must be validated. Data migration must be validated, including verification that all records were transferred completely and accurately, with the metadata and the audit trail intact, not just the result values.

**Prevention and acceptance criteria:** Data migration validation requires a complete reconciliation, not a sample, of all records before decommissioning the source system, including row counts, field-by-field mapping, and a check that audit trail and reason-for-change fields survived. The source system should not be retired until the target has been verified to hold everything the source held. Backups should be restore-tested on a defined schedule, because an untested backup is a hope, not a control. You know it is right when a documented test restore reproduces a historical record with its audit trail intact and readable on current software. For the detailed approach, see [data migration validation](/articles/data-migration-validation), [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation), and the broader [data lifecycle and metadata](/articles/data-lifecycle-and-metadata) view.

---

## Pattern 8: Third-Party and CRO Data Management

**What inspectors find:** Analytical testing performed at contract labs, contract manufacturers, or contract research organizations (CROs) where the data integrity controls are insufficient, or where the sponsor has insufficient visibility into the contractor's data management practices.

**The regulatory context:** Under 21 CFR 211.22, the quality unit is responsible for approving or rejecting product regardless of where the work was done, and 21 CFR 200.10 makes clear that work performed under contract does not relieve the owner of responsibility. The sponsor is responsible for data generated for it regardless of where the data is generated. "Our contractor does it" is not a defense. FDA's 2016 guidance "Contract Manufacturing Arrangements for Drugs: Quality Agreements" reinforces that responsibilities must be defined in writing and that the owner cannot delegate away accountability. For combination products, the same accountability runs through supplier controls in ISO 13485:2016 clause 7.4, incorporated by reference into 21 CFR Part 820 under the QMSR (the legacy Purchasing Controls at 21 CFR 820.50 are now reserved).

**What this means in practice:**
- Pre-qualification audits of contractors must include a data integrity assessment, not just a tour and a paperwork check. Look at the audit trail configuration on their instruments, their account management, and their OOS handling, the same things FDA would look at.
- Quality agreements must specify data management requirements, including audit trail retention, system validation, access controls, and the right to inspect.
- Sponsors must have the right, and must actually exercise it, to review raw data and audit trails at the contractor's facilities, not just the summary certificate of analysis.
- Contractor data must be transferred with adequate metadata for the sponsor to assess its integrity. A PDF of results with no underlying data is not enough to defend a decision.

**Warning letter pattern:** FDA inspects a sponsor, requests raw data from a contracted study or test, and finds that the contractor's data management is inadequate. The warning letter goes to the sponsor. The sponsor's defense, that it relied on the contractor, is precisely the failure FDA is citing, because reliance without oversight is the gap. See [supplier and vendor qualification](/articles/supplier-vendor-qualification), [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements), and [conducting a supplier audit](/articles/conducting-a-supplier-audit).

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

A useful self-test for a quality unit: pick a released batch at random and try to break it the way an investigator would. Pull the instrument sequence and count injections against the report. Cross-check three timestamps from three independent clocks. Open the chromatogram reprocessing history. Confirm every entry is attributable to a named individual. If you cannot reconstruct the full story from the source data, an investigator will not be able to either, and the absence of the story is the finding. This is the core of [the data integrity gap assessment](/articles/di-gap-assessment-methodology) and the routine [data integrity self-audit checklist](/articles/di-self-audit-checklist).

---

## Roles and Responsibilities

Preventing these patterns is not one person's job. The failures usually happen in the seam between roles, so it helps to be explicit about who owns what.

| Role | What they own in preventing these patterns |
| --- | --- |
| Analyst / operator | Contemporaneous entries, no rerun before investigation, documented reason for any manual integration, raising rather than hiding an OOS |
| Second reviewer / QC reviewer | Audit trail review before release, side-by-side check of any reintegration, injection count vs report, timestamp sanity |
| Lab / production management | Realistic workload so the compliant path is not the slow path, oversight that detects premature deletion, OOS rate trending |
| System administrator / IT | Audit trail configured and locked, deletion rights segregated, individual accounts, clock synchronization, validated backups and migrations |
| Quality assurance / quality unit | Batch disposition, OOS adequacy, periodic audit trail review program, vendor data integrity audits, the data governance framework |
| Senior management | Tone, resourcing, and the management review that treats data integrity as a system property, not a documentation exercise |

A recurring inspection theme is that the analyst and the IT administrator each assumed the other owned the audit trail, and neither reviewed it. Name the owner in the SOP. See [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) and [the data governance framework](/articles/data-governance-framework).

---

## Common Mistakes and Inspection-Finding Patterns

- Treating "we enabled the audit trail" as the fix, while nobody actually reviews it before release.
- Giving analysts delete or move permissions on raw data folders, then relying on a procedure that says they should not delete.
- Letting one shared instrument login persist because "the software does not support more," with no compensating logbook and no remediation date.
- Estimating times in batch records as if contemporaneous, instead of using a dated late entry.
- Reprocessing chromatograms until the number passes, with the justification written afterward or not at all.
- Rerunning an OOS sample before the Phase I investigation, then averaging or quietly reporting the pass.
- Decommissioning an old LIMS or CDS before proving the new system holds the full history including the audit trail.
- Accepting a contractor certificate of analysis with no access to underlying raw data or audit trails.
- Responding to a 483 observation by observation, fixing each cited record without addressing the system that produced them, which is the single fastest route from a 483 to a warning letter.

---

## Interview Questions on This Topic

If you work in QC, QA, validation, or data governance, expect these in interviews and in inspection interviews. Short, specific answers win.

**"What is the most common data integrity finding FDA cites?"** Audit trail gaps in analytical systems, usually CDS audit trails that are off, partial, or do not retain the original value. It is common because the compliant configuration is a quality decision made by someone configuring software, and the two rarely meet.

**"Walk me through how an investigator would find that a failing result was hidden."** They go to the instrument, not the LIMS. They pull the sequence log and count injections, compare against the batch record, and look for runs that were performed but not reported. A gap between vials run and results reported is the flag, and it leads to the OOS and reprocessing questions.

**"When is reintegrating a chromatogram acceptable?"** When there is a documented, contemporaneous scientific reason consistent with the validated method, a second qualified person reviews it, and the result is not directionally biased toward passing. No reason, single analyst, and a one-directional pattern toward the limit is manipulation.

**"What is the difference between a retest and a resample, and what has to happen first?"** A retest repeats the same sample or preparation; a resample takes new material from the lot. Neither happens until a documented Phase I lab investigation finds a specific assignable cause to invalidate the original result. The investigation comes before the rerun, never after.

**"How do you handle an entry you forgot to make at the time?"** A dated, timed late entry recording the actual time of writing, with a short note explaining when the activity occurred. You never write the original time as if no delay happened, because that is backdating.

**"Why are shared logins a problem if everyone is honest?"** Because attributability is required regardless of honesty (Part 11 access control, 211.68(b)), and because shared accounts make every other finding impossible to disprove. They turn a narrow issue into a credibility problem for the whole lab.

**"A contractor generated the failing data. Who is responsible?"** The sponsor. The quality unit owns disposition under 211.22, and contracting out the work does not contract out the accountability. The defense "we relied on the contractor" is the failure being cited.

**"You have a 483 citing two of these patterns. What is your first move?"** Scope, not just the cited records. Do an immediate risk-based retrospective review to find whether the behavior is wider, contain the affected product, then build CAPAs that fix the system, with an effectiveness check. Responding only to the named records is how firms escalate to a warning letter.

For broader interview prep, see [GxP quality interview preparation](/articles/gxp-quality-interview-preparation) and the trend view in [regulatory intelligence on 483 trends](/articles/regulatory-intelligence-483-trends).

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

There is also a cultural dimension that sits underneath the technical one. The firms that show up repeatedly in enforcement actions consistently share one feature: they treated data integrity as a documentation exercise rather than as a property of their systems and their behavior. When you build a system with integrity, the documentation is easy because it just describes what the system already does. When you rely on documentation to create the appearance of integrity, it eventually fails under inspection, because the badge reader, the server clock, and the instrument log do not cooperate with the story. For the people-and-incentives side of this, see [quality culture and data integrity failures](/articles/quality-culture-di-failures), and for turning these lessons into a standing program, see [data integrity program architecture](/articles/di-program-architecture) and [the data integrity remediation program](/articles/di-remediation-program).

If a 483 or warning letter has already arrived, the response is its own discipline. The pattern that gets firms into deeper trouble is responding to the specific observations without addressing the system that produced them. See [483 and warning letter response strategy](/articles/483-warning-letter-response) and [FDA 483 response strategy](/articles/fda-483-response-strategy) for how to scope a response that FDA will accept, including the retrospective review, the CAPA, and the credible commitment to verify effectiveness. To pressure-test yourself before an inspector does, run a [mock inspection program](/articles/mock-inspection-program) and confirm [FDA inspection readiness](/articles/fda-inspection-readiness).
