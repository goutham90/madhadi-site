---
title: "Test Script: Audit Trail and Data Integrity"
description: "A plug-and-play test script that verifies a GxP system's audit trail captures who, what, when, old value, new value, and why, cannot be disabled by users, stamps accurate time, binds e-signatures to records, and holds up against the ALCOA+ attributes, with step, expected, actual, and pass or fail columns, a filled specimen, and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Template"
pillar: "data-integrity"
relatedArticles: ["audit-trail-design-and-review", "writing-validation-protocols-and-reports"]
tags: ["audit trail", "data integrity", "alcoa plus", "21 cfr part 11", "annex 11", "e-signature", "test script"]
tier: "Advanced"
---

This is a ready-to-use test script for verifying the audit trail and data integrity controls of a GxP computerized system. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and run it under an approved validation plan or protocol. A worked filled specimen follows the template so you can see how a completed version reads. A test script is contemporaneous GxP evidence: write each actual result as you observe it, in ink or in the validated tool, never reconstructed later. Verify each cited regulation against the current source before you rely on it.

## What this script proves, and what it does not

This script demonstrates that the system's audit trail and data integrity controls behave as specified for the high-risk operations an inspector cares about: that every change to a record captures who made it, what changed, when, the old value, the new value, and why; that the audit trail cannot be turned off or edited by ordinary users; that time stamps are accurate and protected; that an electronic signature is bound to the specific record it signs and cannot be transferred or repudiated; and that records satisfy the ALCOA+ attributes. It is a functional verification, run in a qualified non-production environment, not a review of live production data. Periodic audit trail review of real records is a separate control, governed by your audit trail review SOP. Decide the risk of each function first, then keep the scripted depth below for the functions that affect a result, a decision, or product quality.

## Document control header

| Field | Entry |
|---|---|
| Test script title | Audit Trail and Data Integrity Verification |
| Test script ID | `<<FILL: TS-ID, e.g. TS-OQ-021>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Parent protocol / plan | `<<FILL: protocol or plan ID this script executes under>>` |
| System name and ID | `<<FILL: SYSTEM NAME / ID>>` |
| System version / build | `<<FILL: software version, build, patch level>>` |
| Test environment | `<<FILL: validation / qualification environment, not production>>` |
| Test phase | IQ / OQ / PQ / UAT (`<<FILL: select one, audit trail and e-sig usually OQ>>`) |
| Risk classification | `<<FILL: High (record affects result/decision/quality), scripted testing>>` |
| Author | `<<FILL: name, role>>` |
| Effective date | `<<FILL: date>>` |

## 1. Requirements traced

State exactly which requirements this script verifies, so the traceability matrix links each requirement to its evidence in both directions. Every requirement listed here must be exercised by at least one numbered step in section 6.

| Requirement ID | Requirement text (summary) | Source document | Risk |
|---|---|---|---|
| `<<FILL: URS-021>>` | The system shall record a secure, computer-generated, time-stamped audit trail entry for any create, modify, or delete of a GxP record, capturing user identity, action, date and time, old value, new value, and a reason for change where the change is to existing data. | `<<FILL: URS-ID, version>>` | High |
| `<<FILL: URS-022>>` | The audit trail shall be enabled by default and shall not be disabled, paused, or edited by any non-administrative user; any change to audit trail configuration shall itself be audited. | `<<FILL: URS-ID, version>>` | High |
| `<<FILL: URS-023>>` | The system clock shall be synchronized to a controlled time source, time stamps shall be accurate and unambiguous as to time zone, and the clock shall not be changeable by ordinary users. | `<<FILL: URS-ID, version>>` | High |
| `<<FILL: URS-024>>` | An electronic signature shall be uniquely attributable to one individual, bound to the specific record signed, shall capture the printed name, date and time, and meaning of the signature, and shall not be excised, copied, or transferred to another record. | `<<FILL: URS-ID, version>>` | High |

## 2. Objective

In one or two sentences, state what passing this script demonstrates.

`<<FILL: objective, e.g. this script verifies that the system maintains a complete, attributable, time-stamped, tamper-evident audit trail for all GxP record changes, that the audit trail cannot be disabled or altered by ordinary users, that time stamps are accurate and protected, and that electronic signatures are bound to the records they sign, so that electronic records satisfy ALCOA+ and meet 21 CFR Part 11 and EU GMP Annex 11.>>`

## 3. Prerequisites

List everything that must be true before execution starts. If any prerequisite is not met, do not execute; record the gap as a deviation and stop.

| No. | Prerequisite | Verified (initials / date) |
|---|---|---|
| 3.1 | Parent protocol `<<FILL: ID>>` is approved and effective. | `<<FILL>>` |
| 3.2 | System is installed at version `<<FILL: version>>` in the test environment, confirmed by IQ `<<FILL: ref>>`. | `<<FILL>>` |
| 3.3 | Test accounts exist with distinct roles: an ordinary user (for example analyst), a reviewer or approver, and an administrator. Each password is known only to the named holder. | `<<FILL>>` |
| 3.4 | A known test record or result is loaded with a documented original value. | `<<FILL>>` |
| 3.5 | System clock and time zone are configured and synchronized to a controlled source per `<<FILL: ref>>`; the controlled reference time source is identified. | `<<FILL>>` |
| 3.6 | Audit trail configuration is set to the production-intended state and that configuration is documented. | `<<FILL>>` |
| 3.7 | The tester is trained on this script and on the system, training record `<<FILL: ref>>`. | `<<FILL>>` |

## 4. Test data and accounts used

| Item | Value used at execution |
|---|---|
| Ordinary-user account and role | `<<FILL>>` |
| Reviewer / approver account and role | `<<FILL>>` |
| Administrator account and role | `<<FILL>>` |
| Test record / result ID and original value | `<<FILL>>` |
| Controlled reference time source | `<<FILL: e.g. NTP server / corporate time service>>` |

## 5. Execution conventions

Read these before executing, then follow them for every step. They are the rules an inspector expects to see applied consistently.

- Record each actual result contemporaneously, as you observe it, in the actual result cell. Do not pre-fill, do not batch at the end.
- "Meets expected result" is not an actual result. Write what you actually saw: the value, the exact message text, the screen state, the time stamp shown.
- When a step checks a time stamp, also record the controlled reference time at that moment so the two can be compared.
- Use one unambiguous mark for pass or fail. A blank cell is incomplete, not a pass.
- For any single-line correction, strike through once, initial, date, and add a brief reason. Never obliterate the original entry.
- Capture objective evidence (screenshot, audit trail export, signature manifestation printout) for every step whose pass depends on a system output, and give that evidence a unique reference recorded in the step.
- The moment any step does not meet its expected result, mark it Fail, stop if instructed, and open a deviation per section 9. Do not retest a failed step in place without a documented disposition.

## 6. Test steps

For each step give the action, the precise expected result, the actual result as observed, pass or fail, and the evidence reference. The expected result must be written before execution and must be specific enough that two people would agree on whether it was met. The blocks below cover change capture, audit trail protection, time stamp correctness, e-signature binding, and the ALCOA+ attributes.

### 6A. Change capture: who, what, when, old, new, why

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 6.1 | Log in as the ordinary-user account and open the known test record. | `<<FILL: original value displayed equals the documented test value; header shows the logged-in user>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-001>>` | `<<FILL>>` |
| 6.2 | Change the value, attempt to save without entering a reason. | `<<FILL: save is blocked or reason field is mandatory; change is not committed without a reason>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-002>>` | `<<FILL>>` |
| 6.3 | Enter a reason for change and save. | `<<FILL: change is accepted and committed only after a reason is supplied>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-003>>` | `<<FILL>>` |
| 6.4 | Open the audit trail for the record and inspect the entry. | `<<FILL: one entry shows WHO (the ordinary-user ID), WHAT (the field changed), WHEN (accurate date and time), OLD value, NEW value, and the WHY (reason text)>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-004>>` | `<<FILL>>` |
| 6.5 | Create a new record / result as the ordinary user. | `<<FILL: a create entry is captured with user, date, time, and the entered values; a reason is not forced for original entry where the system allows>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-005>>` | `<<FILL>>` |
| 6.6 | Delete (or void) a record where deletion is permitted, with a reason. | `<<FILL: the record is logically removed but recoverable; a delete entry is captured with user, date, time, and reason; underlying data is not physically purged>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-006>>` | `<<FILL>>` |

### 6B. Audit trail protection: cannot be disabled or edited by users

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 6.7 | As the ordinary user, search the menus and settings for any option to disable, pause, or turn off the audit trail. | `<<FILL: no such option is available to the ordinary user; audit trail control is not exposed at this privilege level>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-007>>` | `<<FILL>>` |
| 6.8 | As the ordinary user, attempt to edit the audit trail entry created in step 6.4. | `<<FILL: action is blocked with an authorization message; the entry is unchanged>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-008>>` | `<<FILL>>` |
| 6.9 | As the ordinary user, attempt to delete the audit trail entry created in step 6.4. | `<<FILL: action is blocked with an authorization message; the entry remains>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-009>>` | `<<FILL>>` |
| 6.10 | Log in as administrator and view audit trail configuration; record whether the audit trail can be disabled at all. | `<<FILL: where any disable capability exists, it is restricted to administrators and the configuration state is documented>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-010>>` | `<<FILL>>` |
| 6.11 | As administrator, make a change to audit trail configuration (for example toggle a setting then restore it). | `<<FILL: the configuration change itself is written to the audit trail, capturing admin user, what changed, and time>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-011>>` | `<<FILL>>` |

### 6C. Time stamp correctness

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 6.12 | Make a timed change and immediately read the controlled reference time. | `<<FILL: the audit trail time stamp matches the controlled reference time within the specified tolerance, e.g. plus or minus 1 minute>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-012>>` | `<<FILL>>` |
| 6.13 | Inspect a time stamp for time zone and format. | `<<FILL: the time stamp is unambiguous as to time zone (or stored in a defined zone such as UTC and displayed consistently), with date and time to at least the minute>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-013>>` | `<<FILL>>` |
| 6.14 | As the ordinary user, attempt to change the system clock, time zone, or date. | `<<FILL: action is blocked; ordinary users cannot alter the clock>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-014>>` | `<<FILL>>` |
| 6.15 | Where clock change is restricted to administrators, have admin attempt a clock change and observe. | `<<FILL: any permitted clock change is itself recorded in the audit trail with user, old time, new time>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-015>>` | `<<FILL>>` |

### 6D. Electronic signature binding

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 6.16 | As the reviewer / approver, electronically sign the record. | `<<FILL: signing requires two distinct components (e.g. user ID and password) and applies the signature to this specific record>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-016>>` | `<<FILL>>` |
| 6.17 | Inspect the signature manifestation on the signed record. | `<<FILL: the displayed and printed signature shows the signer's printed name, the date and time of signing, and the meaning of the signature (e.g. reviewed, approved)>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-017>>` | `<<FILL>>` |
| 6.18 | Modify the signed record (where permitted) and re-inspect. | `<<FILL: the change invalidates or supersedes the prior signature, or requires re-signature; a signed record cannot be silently altered while keeping the old signature valid>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-018>>` | `<<FILL>>` |
| 6.19 | Attempt to copy, reuse, or transfer a signature from this record to a different record. | `<<FILL: the signature cannot be excised, copied, or transferred; it remains bound to the record it was applied to>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-019>>` | `<<FILL>>` |
| 6.20 | Sign as one user, log out, log in as a second user, and confirm the first signature is attributed correctly. | `<<FILL: each signature is uniquely attributed to its signer; one user cannot sign under another identity>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-020>>` | `<<FILL>>` |

### 6E. ALCOA+ attribute checks

These steps confirm the record carries each ALCOA+ attribute. Map each to evidence already captured above where possible.

| Step | ALCOA+ attribute | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|---|
| 6.21 | Attributable | Re-inspect entries from 6.4 and 6.16. | `<<FILL: every entry and signature names a single identified user; no shared or generic identity>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.22 | Legible | View and export the audit trail. | `<<FILL: entries are human-readable on screen and in export; codes are resolved to meaningful values>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.23 | Contemporaneous | Compare time stamp from 6.12 to reference time. | `<<FILL: the recorded time matches the time the action actually occurred within tolerance>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.24 | Original | Confirm the captured value is the source value. | `<<FILL: the original (raw) value is retained and recoverable; the old value from 6.4 is preserved, not overwritten>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.25 | Accurate | Cross-check old and new values in 6.4 against what was entered. | `<<FILL: recorded values match the actual values entered; no transcription or rounding error introduced by the system>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.26 | Complete | Confirm no entries are missing across 6.1 to 6.20. | `<<FILL: every action taken produced a corresponding audit entry; no gaps in sequence>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.27 | Consistent | Compare time stamp formats and sequence ordering. | `<<FILL: format and chronological ordering are consistent across all entries>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.28 | Enduring | Confirm entries persist after logout and a record refresh. | `<<FILL: entries remain after session end and reload; not held only in volatile memory>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6.29 | Available | Export or print the audit trail for the test record. | `<<FILL: the audit trail can be retrieved, read, and exported on demand in a usable form within the retention period>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

Add or remove rows so every requirement in section 1 is exercised. Number steps continuously; do not reuse a number after a revision.

## 7. Acceptance criteria

This script passes only when all of the following are true:

- Every step required to verify the requirements in section 1 is marked Pass, with a recorded actual result and, where applicable, an evidence reference.
- The audit trail captured who, what, when, old value, new value, and reason for every change (block 6A).
- No ordinary-user path could disable, edit, or delete the audit trail (block 6B), and any audit trail or clock configuration change was itself audited.
- Time stamps were accurate against the controlled reference within the stated tolerance and were unambiguous as to time zone (block 6C).
- Electronic signatures were bound to the specific record signed, carried name, date, time, and meaning, and could not be copied or transferred (block 6D).
- All nine ALCOA+ attributes were demonstrated (block 6E).
- Every deviation raised during execution is resolved with a documented disposition, and any retest is recorded under its own step or attachment.
- The completed script is reviewed and approved per section 11.

A script with one or more open Fail steps, or unresolved deviations, does not pass and cannot support the conclusion in the parent report.

## 8. Evidence index

List every piece of objective evidence captured, so a reviewer can find each one without hunting.

| Evidence ref | Description | Step | Storage location / attachment |
|---|---|---|---|
| `<<FILL: SCR-004>>` | `<<FILL: audit trail entry showing old, new, user, time, reason>>` | 6.4 | `<<FILL>>` |
| `<<FILL: SCR-008>>` | `<<FILL: blocked edit attempt with authorization message>>` | 6.8 | `<<FILL>>` |
| `<<FILL: SCR-012>>` | `<<FILL: time stamp vs reference time comparison>>` | 6.12 | `<<FILL>>` |
| `<<FILL: SCR-017>>` | `<<FILL: signature manifestation (name, date, time, meaning)>>` | 6.17 | `<<FILL>>` |

## 9. Deviations raised during execution

Any step that does not meet its expected result, any departure from the written steps, and any prerequisite not met is recorded here and managed per the parent protocol and `<<FILL: deviation / test-incident SOP-ID>>`. Cross-reference the deviation number on the failing step.

| Deviation / incident no. | Step | Description | Classification | Disposition (retest, requirement change, accept with justification) | Closed (date) |
|---|---|---|---|---|---|
| `<<FILL: TI-2026-011>>` | `<<FILL: 6.x>>` | `<<FILL: what was observed vs expected>>` | `<<FILL: critical / major / minor>>` | `<<FILL>>` | `<<FILL>>` |

A failed step is not a finding against the tester. It is data. The discipline an inspector looks for is that the failure was captured honestly, classified, dispositioned, and that any retest is traceable to the original failure, not quietly overwritten. A data integrity failure (for example an audit trail an ordinary user can disable) is almost always critical.

## 10. Execution summary

| Field | Entry |
|---|---|
| Total steps | `<<FILL>>` |
| Steps passed | `<<FILL>>` |
| Steps failed | `<<FILL>>` |
| Deviations raised / closed | `<<FILL>>` |
| Requirements verified (from section 1) | `<<FILL>>` |
| Overall result | Pass / Fail (`<<FILL>>`) |

## 11. Sign-off

The tester executes and signs; an independent reviewer who did not execute the test confirms the record is complete, the evidence supports each pass, and deviations are resolved. The reviewer should not be the same person who executed the script.

| Role | Name | Signature | Date |
|---|---|---|---|
| Tester (executed) | `<<FILL>>` | | |
| Reviewer (independent) | `<<FILL>>` | | |
| QA approval | `<<FILL>>` | | |

## 12. References

> 21 CFR Part 11 (electronic records and electronic signatures), in particular 11.10(e) on secure, computer-generated, time-stamped audit trails, and 11.50, 11.70, and 11.200 on signature manifestation, signature-to-record linking, and signature uniqueness.
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment) and 211.194 (laboratory records).
> EU GMP Annex 11 (Computerised Systems), section 9 (audit trails), section 12 (security and access control), and section 14 (electronic signatures).
> EU GMP Annex 11 and Chapter 4 (Documentation) for record integrity principles.
> MHRA GxP Data Integrity Guidance and Definitions (ALCOA and ALCOA+ attributes).
> PIC/S PI 041, Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments.
> ICH Q9 (Quality Risk Management), for the risk basis of test depth.
> GAMP 5, Second Edition (a risk-based approach to compliant GxP computerized systems).
> FDA Guidance, Computer Software Assurance for Production and Quality System Software, finalized 24 September 2025 (risk-based scaling of test rigor).
> For medical device software: 21 CFR Part 820 (QMSR, effective 2 February 2026, incorporating ISO 13485:2016) and IEC 62304.

Confirm the current version and clause numbers of each reference before issue.

## 13. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

---

## Filled specimen

The following shows the script executed for an example laboratory information management system, verifying the core audit trail, time stamp, and e-signature controls. The company, system, accounts, and numbers are illustrative; replace them with your own.

**Header (extract)**

| Field | Entry |
|---|---|
| Test script title | Audit Trail and Data Integrity Verification |
| Test script ID | TS-OQ-021, v1.0 |
| Parent protocol | OQ-LIMS-007 |
| System name and ID | Laboratory Information Management System, instance LIMS-VAL (validation) |
| System version / build | 11.4.0, build 2208 |
| Test phase / risk | OQ / High, scripted |
| Controlled reference time source | Corporate NTP service, time.corp.local |

**Requirements traced**

| Requirement ID | Requirement text (summary) | Source | Risk |
|---|---|---|---|
| URS-021 | The system shall audit all create, modify, delete of GxP records, capturing user, action, date and time, old and new value, and reason for change. | URS-LIMS v2.0 | High |
| URS-022 | The audit trail shall not be disableable or editable by non-administrative users; config changes shall be audited. | URS-LIMS v2.0 | High |
| URS-023 | Time stamps shall be accurate, time-zone unambiguous, and protected from ordinary users. | URS-LIMS v2.0 | High |
| URS-024 | Electronic signatures shall be uniquely attributable, bound to the signed record, and carry name, date, time, meaning. | URS-LIMS v2.0 | High |

**Test steps (executed, extract)**

| Step | Action | Expected result | Actual result | P/F | Evidence | Initials / date |
|---|---|---|---|---|---|---|
| 6.1 | Log in as account analyst2; open sample result SMP-0457 (original value 12.6 mg/mL). | Original value 12.6 displayed; header shows analyst2. | Value 12.6 shown; header read "analyst2". | Pass | SCR-001 | KM 18 Jun 2026 |
| 6.2 | Change value to 12.9; attempt to save with no reason. | Save blocked; reason field mandatory. | Save button disabled until reason entered; message "Reason for change is required". | Pass | SCR-002 | KM 18 Jun 2026 |
| 6.3 | Enter reason "recalculated from corrected dilution factor"; save. | Change accepted only after reason supplied. | Change saved after reason entered. | Pass | SCR-003 | KM 18 Jun 2026 |
| 6.4 | Open audit trail for SMP-0457. | Entry shows user, action, time, old 12.6, new 12.9, reason. | Entry: user analyst2, action "Result modified", 18 Jun 2026 10:14 EDT, old 12.6, new 12.9, reason "recalculated from corrected dilution factor". | Pass | SCR-004 | KM 18 Jun 2026 |
| 6.7 | As analyst2, search settings for any disable audit trail option. | No disable option at this privilege. | No audit trail control present in analyst menus or settings. | Pass | SCR-007 | KM 18 Jun 2026 |
| 6.8 | As analyst2, attempt to edit the 6.4 entry. | Edit blocked with authorization message. | Edit option greyed out; tooltip "Audit records cannot be modified". | Pass | SCR-008 | KM 18 Jun 2026 |
| 6.12 | Make a timed change; read NTP reference time at the same moment. | Time stamp within plus or minus 1 minute of reference. | Reference time 10:31:05 EDT; audit time stamp 10:31 EDT. Within tolerance. | Pass | SCR-012 | KM 18 Jun 2026 |
| 6.14 | As analyst2, attempt to change the system clock. | Clock change blocked for ordinary user. | No date/time control available; OS-level change denied for the application service account. | Pass | SCR-014 | KM 18 Jun 2026 |
| 6.16 | As approver reviewer1, e-sign SMP-0457. | Signing needs user ID plus password; applies to this record. | Signing prompted for password; signature applied to SMP-0457 only. | Pass | SCR-016 | KM 18 Jun 2026 |
| 6.17 | Inspect the signature manifestation. | Shows name, date, time, meaning. | Manifestation read: "Reviewed by R. Gomez, 18 Jun 2026 10:42 EDT". | Pass | SCR-017 | KM 18 Jun 2026 |
| 6.18 | Modify SMP-0457 after signing. | Prior signature invalidated or re-signature required. | System flagged the record "Modified after signature, re-review required"; prior signature marked superseded. | Pass | SCR-018 | KM 18 Jun 2026 |

**ALCOA+ extract**

| Step | Attribute | Actual result | P/F |
|---|---|---|---|
| 6.21 | Attributable | All entries named a single user (analyst2, reviewer1); no generic logins observed. | Pass |
| 6.24 | Original | Old value 12.6 retained and visible alongside new value 12.9; not overwritten. | Pass |
| 6.26 | Complete | Each of the 20 executed actions produced a matching audit entry; no gaps. | Pass |
| 6.29 | Available | Audit trail exported to PDF on demand and read clearly. | Pass |

**Execution summary**

| Field | Entry |
|---|---|
| Total steps | 29 |
| Steps passed | 29 |
| Steps failed | 0 |
| Deviations raised / closed | 0 / 0 |
| Requirements verified | URS-021, URS-022, URS-023, URS-024 |
| Overall result | Pass |

**Sign-off**

| Role | Name | Date |
|---|---|---|
| Tester (executed) | K. Mehta, signed | 18 Jun 2026 |
| Reviewer (independent) | R. Gomez, signed | 19 Jun 2026 |
| QA approval | S. Lin, signed | 19 Jun 2026 |

In this example the tester recorded the exact values, message text, and time stamps seen, paired every time check against the NTP reference, captured a screenshot for each output-dependent step, and confirmed a modification after signing invalidated the prior signature. Had step 6.7 instead shown an analyst could switch off the audit trail, or step 6.19 shown a signature could be copied to another record, the tester would have marked the step Fail, opened a critical test incident, and held the conclusion, which is the behavior section 9 is built to capture.

## Common inspection findings this script prevents

- An audit trail that ordinary users can switch off, pause, or that is shipped disabled by default, with no test proving who can change that setting.
- Changes saved with no captured reason, or old values overwritten so the prior value cannot be reconstructed.
- Time stamps that drift from real time, carry no time zone, or come from a clock any user can change, undermining the "contemporaneous" attribute.
- Electronic signatures that are not bound to the record signed, that survive a later change to the record, or that can be copied or attributed to the wrong person.
- Shared or generic logins, so audit entries are not attributable to one individual.
- Audit trail captured only in volatile memory or not retrievable in a readable form on demand, failing "enduring" and "available".
- A test script that ticks "audit trail present" but never exercises the negative cases (user cannot disable, cannot edit, cannot transfer a signature), which is where data integrity actually fails.
- One uniform level of scripted detail applied regardless of risk, with no documented basis, which is hard to defend now that test rigor is expected to scale with risk.

## How to adapt this script

1. Set your test script ID, parent protocol, system version, and effective date in the header, and confirm you are testing in a qualified non-production environment.
2. List your real requirement IDs in section 1 and confirm each is exercised by at least one numbered step; keep the script and your traceability matrix in agreement in both directions.
3. Set the time stamp tolerance in block 6C to your specification (a tight tolerance such as plus or minus 1 minute is common) and name your controlled reference time source.
4. Trim block 6A's delete step if your system does not permit deletion, and adjust block 6D to your signature design (two-component login, biometric, or token), keeping name, date, time, and meaning.
5. Map the ALCOA+ steps in block 6E to evidence already captured in 6A to 6D rather than duplicating actions, but keep a recorded result for each attribute.
6. Point the cross-references in sections 3, 9, and 11 to your real protocol, deviation or test-incident procedure, and review and approval process.
7. Confirm every regulation in section 12 against the current published version before issue.
