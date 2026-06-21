---
title: "Hybrid Systems: Managing Paper-and-Electronic Records Without Breaking ALCOA+"
description: "How to run paper-and-electronic hybrid records in a GxP environment: defining the raw record, reconciliation, controls inspectors check, and a realistic path off hybrids."
pubDate: 2026-06-20
tags: ["data-integrity", "hybrid-systems", "alcoa-plus", "part-11", "annex-11", "raw-data", "reconciliation"]
pillar: "data-integrity"
tier: "Intermediate"
---

A hybrid record exists whenever the complete account of a GxP activity lives partly in an electronic system and partly on paper, and you need both halves to reconstruct what happened. The classic case: an analytical balance or HPLC produces electronic data, an analyst signs a paper worksheet, and the worksheet refers back to the electronic file. Neither piece alone is the full record. That seam between paper and electronic is where data integrity most often fails, and it is one of the most cited problem areas in laboratory and manufacturing inspections.

Hybrids are not illegal and not inherently bad. Regulators accept them when they are deliberately designed, documented, and controlled. They become a finding when they are accidental, when no one has decided which record governs, and when the link between the two halves is weak or breakable. This article covers how to identify your hybrids, define the record, build the reconciliation controls, survive an inspection on the topic, and plan a credible exit.

---

## What "hybrid" actually means, and why it is a top finding source

### Definition and the three patterns

A hybrid system combines manual and electronic components in the creation, review, retention, or signing of a GxP record. There are three common patterns, and the controls differ for each:

1. **Electronic generation, paper review and signature.** The instrument or system produces electronic raw data, but the official reviewed-and-signed record is a printout or worksheet. Most legacy chromatography, balances, pH meters, and dissolution baths sit here.
2. **Paper generation, electronic storage.** A paper batch record or logbook is the master, then scanned, transcribed, or summarized into an electronic system (a manufacturing execution summary, a spreadsheet, a quality system). The paper is the raw record; the electronic copy is secondary.
3. **Split-field records.** A single logical record is physically split: some fields are captured electronically (time stamp, result, audit trail) and some are captured on paper (analyst initials, deviation note, second-person verification). You cannot reconstruct the event without both.

### Why hybrids exist

They exist because total electronic systems are expensive, slow to validate, and often retrofitted onto instruments that predate Part 11. A balance bought in 2009 may have no user accounts, no audit trail, and a serial printout as its only output. Replacing every such instrument at once is not realistic, so the paper worksheet bridges the gap. That is a legitimate engineering reality. The problem is that the bridge is rarely engineered with the same rigor as either pure-paper or pure-electronic systems.

### Why regulators care so much

The regulatory basis is the data integrity expectation that the complete original record be preserved, attributable, and reconstructable. The relevant references:

- **21 CFR Part 211** (cGMP for finished pharmaceuticals), specifically 211.68 (automatic, mechanical, and electronic equipment, including the requirement to retain backup and the appropriate controls), 211.180(c) and 211.194(a) (records of laboratory tests, including complete data derived from all tests).
- **21 CFR Part 11** (electronic records and electronic signatures, 1997), which applies to the electronic portion of a hybrid whenever that electronic record is the one being relied on to satisfy a predicate rule.
- **EU GMP Annex 11** (Computerised Systems) and **Chapter 4** (Documentation), which together expect that when a system generates data electronically, that electronic data, including the audit trail, is the record retained and reviewed.
- The FDA guidance **Data Integrity and Compliance With Drug CGMP, Questions and Answers (December 2018)**, which directly addresses the difference between static and dynamic records and warns that a printout of a chromatogram is not a true copy of dynamic electronic data because it loses the underlying data and the ability to reprocess.
- The MHRA **GXP Data Integrity Guidance and Definitions (March 2018)** and the PIC/S **PI 041-1 Good Practices for Data Management and Integrity (July 2021)**, both of which devote specific attention to hybrid systems and the weaknesses inspectors look for.

The recurring inspection finding is simple to state: the firm signed a paper printout and discarded or never controlled the dynamic electronic data behind it, so the audit trail, integration parameters, and the ability to detect reprocessing were lost. That is an ALCOA+ failure on Original and Complete, and frequently on Available.

---

## ALCOA+ applied field by field to a hybrid

ALCOA+ (Attributable, Legible, Contemporaneous, Original, Accurate, plus Complete, Consistent, Enduring, Available) is the lens every inspector uses. The trap with hybrids is that each attribute can be satisfied on one half and silently broken at the seam. Walk it field by field.

| ALCOA+ attribute | The hybrid-specific failure mode | What good looks like |
|---|---|---|
| Attributable | Paper signed by analyst A, but the instrument has a shared login so the electronic action cannot be tied to a person | Electronic action and paper signature both resolve to the same named individual at the same time |
| Legible | Handwritten transcription of an electronic result is ambiguous or overwritten | Transcription is exact, single-line cross-out corrections, electronic source retained |
| Contemporaneous | Worksheet completed end-of-day from memory while the electronic time stamp is real-time | Paper entry time matches the electronic event time; no backfilling |
| Original | The printout is treated as the record and the dynamic e-data is deleted or uncontrolled | The dynamic electronic data plus audit trail is retained as the original; paper is a controlled extension, not a replacement |
| Accurate | Transcription error between electronic result and paper worksheet | Second-person verification of any manual transcription, or no transcription at all |
| Complete | Failing or aborted injections exist electronically but never appear on paper | All runs, including aborted and reprocessed, are reconciled to the paper record |
| Consistent | Paper sequence and electronic sequence disagree on order or timing | Sequence and time stamps agree across both halves |
| Enduring | Thermal printout fades; the e-record is on an unbacked-up local drive | Both halves retained for the full retention period on durable, backed-up media |
| Available | Inspector asks for the audit trail behind a 3-year-old paper result and it is gone | Electronic source and audit trail retrievable for the full retention period |

The single most important sentence to internalize: **for dynamic electronic data, the dynamic electronic record (with its audit trail and metadata) is the original, and the paper printout is at best a static summary.** Signing the summary does not let you discard the original.

---

## Step 1: Find your hybrids (the inventory)

You cannot control what you have not listed. Most firms underestimate their hybrid count by half because split-field records hide inside processes everyone thinks of as "paper."

### How to build the inventory

1. Start from your **GxP computerized system inventory** and **instrument list**. For each system, ask three questions: Does it generate electronic data? Is any part of the official record on paper? Do you need both to reconstruct the event? Three yeses means it is a hybrid.
2. Walk the floor and the lab. Watch a real execution. The inventory misses the balance whose only output is a serial-port printout taped into a logbook, and the spreadsheet that re-keys LIMS results for a trend chart.
3. For each hybrid, capture: the activity, the electronic component, the paper component, which is the declared raw record, where the link between them lives, and the current control gaps.

### Acceptance criteria for the inventory

- Every GxP instrument and system has been classified as pure-paper, pure-electronic, or hybrid, with a rationale.
- Each hybrid names a single declared raw record (see Step 2).
- Each hybrid has a documented reconciliation control or a gap logged in the remediation plan.
- The inventory is a controlled document with an owner and a review cycle, not a one-time spreadsheet.

### Worked example: a hybrid inventory row

| Field | Entry |
|---|---|
| Activity | Assay by HPLC, finished product |
| System | Chromatography data system, standalone workstation |
| Electronic component | Raw signal, integration, audit trail, sequence file |
| Paper component | Analyst worksheet with result, calculation, signature, reviewer signature |
| Declared raw record | Electronic dynamic data + audit trail |
| Link mechanism | Worksheet records sequence name, file path, and result ID; result ID printed on the report |
| Control gaps | Shared Windows login on workstation; no second-person review of integration changes |
| Remediation | Provision individual accounts (Q3); enforce audit trail review SOP (now) |

This level of detail is what lets you answer an inspector in seconds instead of going to the floor to figure it out live.

---

## Step 2: Decide which record is THE record

This is the decision that prevents most findings, and the one most often skipped. For every hybrid you must declare, in writing and per record type, which artifact is the raw data / original record, and therefore which one governs in a dispute.

### The decision rule

The governing record is **whichever artifact contains the original observation with the highest fidelity and the metadata needed to reconstruct the activity.** Apply it:

- If the system produces **dynamic data** (data you can reprocess, re-query, or re-integrate, such as a chromatogram, a spectrum, or a database query result), the **electronic data is the raw record.** A printout is a static copy and cannot be the original. This is stated plainly in the FDA 2018 data integrity Q&A and the MHRA 2018 guidance.
- If the original observation is made **on paper** (an analyst writes an observation, a logbook entry, a handwritten weight read off a non-connected instrument), the **paper is the raw record** and any electronic transcription is secondary.
- If fields are split, declare each field's source individually. The reconstruction depends on the union of both, and your SOP must say so.

See the dedicated treatment in [static and dynamic records and true copies](/articles/static-dynamic-records-true-copies) for why a chromatogram printout fails the true-copy test.

### Where the decision is written

- In the **SOP** governing that activity (the test method, the batch record instruction, the logbook SOP).
- In the **validation documentation** or system description for the electronic component.
- In the **data integrity governance** documentation as a cross-cutting policy, so a new system inherits the rule by default.

### Acceptance criteria

- A reader who has never seen the process can point to the governing record from the SOP alone.
- The retention, backup, and review controls apply to the governing record, not just the convenient paper copy.
- Where dynamic data exists, the electronic record is declared governing. If anyone declared a printout governing for dynamic data, that is a finding waiting to happen.

### Common mistake

The most common and most damaging mistake: a firm reviews and signs the printout, treats the printed result as final, and never reviews the electronic audit trail. An inspector reprocesses the original injection, finds a deleted failing result or an undocumented manual integration, and the signed paper record is now evidence that review was not effective. The fix is not more paper. It is reviewing the governing electronic record, including the audit trail. See [audit trail design and review](/articles/audit-trail-design-and-review) and [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).

---

## Step 3: Build the reconciliation controls

Reconciliation is the active, documented process of confirming that the paper and electronic halves agree and that nothing in either half is missing or unexplained. It is the heart of hybrid control. Without it, the two halves drift apart and no one notices until an inspector does the reconciliation for you.

### What reconciliation has to prove

1. **Count agreement.** The number of electronic events matches the number of paper entries. If the sequence ran 12 injections, the worksheet accounts for 12, including blanks, standards, and any aborted or repeated runs.
2. **Identity agreement.** Each electronic result maps to exactly one paper entry by a stable identifier (sequence name plus injection ID, sample ID, batch and step number). No orphans on either side.
3. **Value agreement.** Any value transcribed from electronic to paper matches the source exactly, verified by a second person or eliminated by removing transcription entirely.
4. **Time and sequence agreement.** The order and time stamps are consistent. A paper entry dated before its electronic event, or an electronic injection with no paper trace, is a flag.
5. **Exception accounting.** Every aborted run, reprocessing, manual integration, and out-of-sequence event is explained on the record and tied to a deviation or a documented justification.

### The unique-identifier technique

The single most effective control is to print a **machine-generated unique identifier** on both halves so they cannot be silently separated or swapped. Practical implementations:

- The CDS prints the **result ID, sequence name, acquisition date-time, and operator** on every report, and the analyst copies the result ID and sequence name onto the worksheet.
- The balance printout carries a **printout sequence number** that the analyst logs; gaps in the sequence number reveal a discarded weighing.
- The batch record references the **electronic batch identifier** and the MES step ID, so a paper page cannot be substituted without a mismatch.

Pre-printed, controlled, sequentially numbered worksheets close the other direction: a missing worksheet number shows a removed page.

### Step-by-step reconciliation procedure

1. At the point of review, retrieve the governing electronic record and its audit trail for the activity.
2. Confirm the **count** of electronic events against the paper. Investigate any difference before proceeding.
3. Match each electronic result to its paper entry by the unique identifier. Resolve orphans.
4. Inspect the **audit trail** for deletions, manual integration changes, reprocessing, aborted runs, clock changes, and method or sequence edits. Confirm each is explained on the paper record or in a deviation.
5. Verify any **transcribed values** against the electronic source (second-person check) or confirm that no transcription occurred.
6. Confirm **time and sequence** consistency across both halves.
7. Sign the review attesting that reconciliation was performed and exceptions are accounted for. The signature meaning ("reviewed including electronic audit trail and reconciliation") must be defined.

### Acceptance criteria for reconciliation

- Counts, identities, values, times, and exceptions all reconcile, with any difference investigated and dispositioned.
- The audit trail of the governing electronic record was reviewed as part of the activity, not as a separate after-the-fact exercise.
- The reviewer signature carries a defined meaning that includes reconciliation.
- A second person can repeat the reconciliation from the record alone and reach the same conclusion.

### Worked example: a balance hybrid reconciliation

A non-networked analytical balance prints a slip per weighing with a printout counter. The dispensing worksheet has columns for the counter value.

| Weigh step | Material | Printout counter | Weight (slip) | Weight (worksheet) | 2nd-person verified |
|---|---|---|---|---|---|
| 1 | Reference standard | 04471 | 50.12 mg | 50.12 mg | JD |
| 2 | Sample, prep A | 04472 | 102.45 mg | 102.45 mg | JD |
| 3 | Sample, prep B | 04473 | 101.98 mg | 101.98 mg | JD |

Reconciliation check: counter runs 04471, 04472, 04473 with no gap, three slips, three worksheet rows, all weights match, second-person initials present. If the next observed counter on the following weighing were 04476, the gap (04474, 04475) demands an explanation: two discarded weighings that must be accounted for, not ignored. That gap question is exactly what an inspector asks.

---

## Step 4: Control the seam (the specific weaknesses)

Beyond reconciliation, hybrids carry a set of recurring structural weaknesses. Each maps to a control.

### Time and clock control

If the paper entry time and the electronic time stamp come from different clocks, contemporaneity cannot be proven and the sequence can be challenged. Synchronize and protect system clocks, restrict user ability to change the clock, and capture clock changes in the audit trail. See [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).

### Attribution on shared instruments

Many legacy instruments have a single shared operating-system login or no login at all. The paper signature attributes the result, but the electronic action is anonymous, and a determined bad actor could delete or alter data with no trace to a person. Mitigations, in order of strength: individual application-level accounts on the CDS even where the OS login is shared; locked workstations with restricted physical access logged in a controlled logbook; and a documented justification with compensating controls where individual accounts are genuinely impossible pending replacement. Document the residual risk; do not pretend it is zero. See [electronic signatures implementation](/articles/electronic-signatures-implementation).

### Audit trail retention and review

The electronic audit trail is part of the governing record. It must be retained for the full retention period and reviewed at a defined frequency, risk-based, with critical data reviewed every time. A hybrid where the printout is signed but the audit trail is never opened is the textbook finding.

### True copies and printouts

A printout of dynamic data is a static copy, not a true copy, because it cannot reproduce the dynamic data. If you need to provide a copy (for archival, transfer, or an inspector), provide the electronic data in a form that preserves the dynamic content and metadata, with a verified true-copy process. See [static and dynamic records and true copies](/articles/static-dynamic-records-true-copies).

### Backup and durability

Thermal printouts fade. Local workstation drives fail and are rarely backed up. The governing electronic record must be on durable, backed-up media with a tested restore. If a thermal slip is part of the record, photocopy it as a verified true copy and retain the copy. See [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation).

### Correction and amendment rules

Paper corrections follow good documentation practices: single-line cross-out, initial, date, reason. Electronic corrections are captured in the audit trail. The hybrid risk is a value corrected on paper but not in the electronic record, or vice versa. The SOP must require that any correction is propagated and reconciled across both halves. See [good documentation practices](/articles/good-documentation-practices).

---

## Step 5: Validate and document the hybrid as a designed system

A hybrid is a validated process, not an accident. The electronic component is validated per your CSV approach. The paper component and the reconciliation controls are part of the same process description.

### What to document

- A **system description** identifying the electronic and paper components, the data flow, and the governing record.
- The **user requirements** and risk assessment that justify the controls, including the residual risk where a control is compensating rather than preventive. See [user requirements and traceability](/articles/user-requirements-and-traceability) and [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology).
- The **SOPs** for execution, review, reconciliation, and correction.
- The **data integrity controls** map: for each ALCOA+ attribute, the control that satisfies it across the seam.

### Roles and responsibilities

| Role | Responsibility in a hybrid |
|---|---|
| Process / system owner | Maintains the system description, ensures reconciliation controls operate, owns the remediation plan |
| Operator / analyst | Executes the activity, records contemporaneously on both halves, copies unique identifiers accurately |
| Reviewer (technical, second person) | Performs reconciliation including audit trail review, verifies transcriptions, dispositions exceptions |
| QA | Approves the SOP and system description, audits hybrid controls, classifies any breakdown as a deviation, approves the migration plan |
| Validation / CSV | Validates the electronic component, documents the hybrid as a designed system, supports migration validation |
| IT / instrument support | Provisions individual accounts, configures clock sync and audit trail, manages backup and restore |
| Vendor / supplier | Supplies the electronic system with the controls needed; supports configuration of accounts, audit trail, and export. See [supplier and vendor qualification](/articles/supplier-vendor-qualification) |

The point of writing roles down is so that no one can say "I thought the other reviewer checked the audit trail." Reconciliation has one named owner per record.

---

## Step 6: Migrate off the hybrid

Hybrids are a transitional state, and inspectors increasingly expect a plan to retire them. The MHRA and PIC/S guidance both frame hybrids as higher-risk and encourage moving to fully electronic records where the technology allows. You do not have to eliminate every hybrid tomorrow, but you do need a risk-prioritized roadmap and visible progress.

### Prioritize by risk

Rank hybrids by data criticality and control weakness. A hybrid feeding a release decision with shared logins and no audit trail review is top of the list. A low-criticality logbook with strong controls can wait. Use your [data criticality and data risk](/articles/data-criticality-and-data-risk) assessment to rank.

### The migration paths

1. **Upgrade the electronic component** so the whole record can live electronically (individual accounts, audit trail, electronic review and e-signature), then retire the paper worksheet. This is the cleanest exit. Confirm the upgraded system meets Part 11 and Annex 11 before declaring paper retired.
2. **Replace the instrument or system** with a current one that natively supports full electronic records, then qualify and migrate.
3. **Networked data system** (a CDS that pulls standalone instruments into a controlled server with central accounts, audit trail, and backup) removes the standalone-workstation weaknesses for a whole lab at once.

### Handling legacy data during migration

When you move from hybrid to electronic, the existing records do not vanish. You must decide whether legacy electronic data is migrated, archived in a readable form, or retained on the original validated system for the retention period. Any migration of data is itself a validated activity: prove that records are complete and unaltered after the move, including audit trails. See [data migration validation](/articles/data-migration-validation) and, for old systems you are not replacing yet, [retroactive validation of legacy systems](/articles/retroactive-validation-legacy-systems).

### Acceptance criteria for retiring a hybrid

- The new fully-electronic process is validated and meets Part 11 / Annex 11 for the electronic record and signature.
- Reconciliation is no longer needed because there is only one record, or the residual paper is purely informational and declared non-governing.
- Legacy hybrid records remain retrievable and reconstructable for their full retention period.
- The change is controlled through change control, and the inventory and SOPs are updated. See [change control for validated systems](/articles/change-control-validated-systems).

### Migration roadmap example

| Hybrid | Criticality | Weakness | Target state | Path | Quarter |
|---|---|---|---|---|---|
| Standalone HPLC, release assay | High | Shared login, no audit trail review | Networked CDS, e-review | Network + accounts | Q1-Q2 |
| Analytical balances, dispensing | Medium | Thermal slips, manual transcription | Connected balances to LIMS | Replace + interface | Q3 |
| Stability chamber log | Low | Paper log, strong controls | Electronic monitoring | Defer, monitor | Year 2 |

A roadmap like this, with dates and owners, is exactly what you show an inspector who asks "what is your plan for hybrids?" The wrong answer is "we don't have one."

---

## Common inspection findings on hybrids

These are the patterns regulators cite, stated generically. If your hybrid has any of them, fix it before someone finds it.

- **Signed the printout, lost the dynamic data.** The static report was treated as the record; the electronic raw data and audit trail were deleted, overwritten, or never controlled. Original and Complete fail.
- **No audit trail review.** The reviewer signed the result but never opened the electronic audit trail, so deletions, reprocessing, and manual integrations went undetected. Review was not effective.
- **Shared logins.** Actions on the electronic component cannot be attributed to a person, defeating Attributable and enabling untraceable alteration.
- **Transcription errors and no second check.** Values re-keyed from electronic to paper without verification, with errors that change a result or a release decision.
- **Unexplained gaps.** Missing printout sequence numbers, missing worksheet page numbers, aborted injections absent from the paper record. The classic "testing into compliance" pattern, where failing runs were quietly discarded.
- **Clock not controlled.** Users could change the instrument clock, so contemporaneity and sequence cannot be proven.
- **No defined raw record.** No SOP says which half governs, so different reviewers treat different halves as authoritative and the firm cannot answer the most basic question about its own data.
- **No migration plan.** Hybrids treated as permanent with no risk ranking and no roadmap, signaling the data integrity program is not actually managing them.

Each maps to a control already covered above. The fix is rarely more paper; it is defining the record, reviewing the electronic original, controlling attribution and time, and reconciling.

---

## Interview-ready: questions and strong answers

**"What is a hybrid system and why is it a data integrity risk?"**
A record where the complete account of a GxP activity lives partly electronically and partly on paper, and both are needed to reconstruct the event. The risk concentrates at the seam: attribution can break on the electronic side, the dynamic original can be lost when only the printout is signed, and the two halves can drift apart without reconciliation. It is one of the most cited laboratory data integrity findings.

**"In a hybrid, which is the raw record, the printout or the electronic file?"**
For dynamic data, the electronic data with its audit trail is the original; the printout is a static copy and cannot be the raw record. This is stated in the FDA 2018 data integrity Q&A and the MHRA 2018 guidance. If the original observation is made on paper, the paper is raw and the electronic copy is secondary. You declare this per record type in the SOP.

**"How do you review a hybrid chromatography record correctly?"**
You review the governing electronic record including the audit trail, not just the signed printout. You reconcile counts, identities, and values between the electronic data and the worksheet, you check the audit trail for deletions, reprocessing, manual integration, aborted runs, and method or sequence edits, and you confirm every exception is explained. Then you sign with a defined meaning that includes reconciliation.

**"How would you prove no data was deleted in a hybrid where injections happen on a standalone workstation?"**
Review the electronic audit trail and sequence for aborted or deleted runs and reprocessing, confirm the sequence count reconciles to the paper record, and use a machine-generated identifier, a result ID or a printout counter, so gaps are visible. A gap in the counter is unexplained discarded data until proven otherwise.

**"You have hundreds of standalone instruments with shared logins. What do you do?"**
Inventory and risk-rank them, apply compensating controls now (individual application-level accounts where possible, controlled access logbooks, audit trail review, clock control), document the residual risk honestly, and put a dated migration roadmap in place starting with the highest-criticality, weakest-control systems, typically networking the CDS so a whole lab is fixed at once.

**"What's wrong with signing a printout of a chromatogram?"**
The printout is static. It loses the dynamic data, the integration parameters, and the audit trail, so you cannot reprocess or detect that the result was reintegrated or that a failing injection was deleted. Signing it does not make it the original and does not let you discard the electronic raw data, which remains the governing record.

**"How do you know your hybrid controls are working?"**
Self-audit. Pull records and independently reconcile paper to electronic, open audit trails, check attribution and clock control, and look for unexplained gaps. Track findings as deviations and feed them into the migration priority. See the [data integrity self-audit checklist](/articles/di-self-audit-checklist).

---

## Practical tips

- Reconcile at the point of review, while the activity is fresh and the analyst is available, not weeks later when the floor has moved on.
- Print a machine-generated unique identifier on every electronic output and require it on the paper. It is the cheapest control with the highest payoff.
- Use controlled, sequentially numbered worksheets so a removed page is visible.
- Define what each signature means. "Reviewed" must explicitly include the electronic audit trail and reconciliation, or reviewers will sign the paper alone.
- Photocopy thermal printouts as verified true copies on the day they are made; the original will fade before the retention period ends.
- Never let "we've always done it on paper" justify discarding dynamic electronic data. The original is the original regardless of habit.
- Keep the hybrid inventory and migration roadmap current and bring both to inspections. Showing control and a plan is far stronger than showing zero hybrids you cannot actually prove.

---

## Related articles

- [ALCOA+ in detail](/articles/alcoa-plus-deep-dive)
- [Data integrity foundations](/articles/data-integrity-foundations)
- [Static and dynamic records and true copies](/articles/static-dynamic-records-true-copies)
- [Audit trail design and review](/articles/audit-trail-design-and-review)
- [Operationalizing audit trail review](/articles/operationalizing-audit-trail-review)
- [Chromatography data system integrity](/articles/chromatography-data-system-integrity)
- [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11)
- [Good documentation practices](/articles/good-documentation-practices)
- [Electronic signatures implementation](/articles/electronic-signatures-implementation)
- [Time stamps and system clock control](/articles/time-stamps-and-system-clock-control)
- [Data migration validation](/articles/data-migration-validation)
- [Retroactive validation of legacy systems](/articles/retroactive-validation-legacy-systems)
- [Data criticality and data risk](/articles/data-criticality-and-data-risk)
- [Data integrity self-audit checklist](/articles/di-self-audit-checklist)
