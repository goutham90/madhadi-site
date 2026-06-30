---
title: "Good Documentation Practices: The Mechanics Under ALCOA+"
description: "How contemporaneous recording, single-line corrections, controlled forms, and disciplined error handling turn a paper or electronic record into one an inspector will trust."
pubDate: 2026-06-20
tags: ["good documentation practices", "GDocP", "data integrity", "ALCOA+", "GMP", "error correction", "logbooks", "21 CFR 211"]
pillar: "data-integrity"
tier: "Beginner"
---

ALCOA+ gets all the attention. Posters in the lab, slides in the onboarding deck, a tidy acronym everyone can recite: attributable, legible, contemporaneous, original, accurate, plus complete, consistent, enduring, available. It is a useful frame. But ALCOA+ is a set of *properties* a record should have. It does not tell you how to make a record have them. The mechanics that actually produce a trustworthy record, the way you cross out a mistake, when you sign, what pen you use, how a blank form is issued and reconciled, those mechanics are Good Documentation Practices, or GDocP.

GDocP is where data integrity is decided in practice. An inspector almost never finds a falsified record sitting in plain view. What they find is a string of small habits that don't hold up: an entry written an hour late, a correction scribbled over with no initials, a blank that was filled in "to be tidy," a logbook page that skips a number. Each of those is a GDocP failure, and stacked together they become a data integrity finding. This article walks through the mechanics, the boring, load-bearing details, and ties each one back to the regulation that demands it, the failure mode it prevents, and how you know you did it right.

This is foundational across the whole regulated world. The same habits apply to a tablet manufacturing batch record, a sterile fill line log, a stability test result, a medical device history record, an analytical chromatogram, and a clinical case report form. The modality changes; the mechanics do not.

## Where the requirement comes from

GDocP is not a single rule you can point to. It is the operational reading of several regulations that all say, in different words, that records must be reliable.

For pharmaceutical manufacturing in the US, the anchor is 21 CFR Part 211, the cGMP regulations for finished pharmaceuticals. [Sections 211.180 through 211.198](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-J) cover records and reports. Section 211.194 requires complete laboratory records including all data secured in the course of testing. Section 211.186 governs master production records; 211.188 governs batch production records and the requirement that each significant step be documented. The legal root of contemporaneous recording sits elsewhere in Part 211: 211.100(b) requires production and process control activities to be documented at the time of performance, and 211.160(a) carries the same expectation for laboratory controls. Those are the sections FDA's data integrity guidance points to for the at-the-time-of-performance rule.

For records and signatures kept electronically, [21 CFR Part 11](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11) sets the rules for electronic records, electronic signatures, and audit trails. GDocP in a paper world and Part 11 controls in an electronic world are two faces of the same goal: the record reflects what happened, and you can tell who did what and when. See [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11) for the electronic-record detail.

Internationally, the WHO guidance on good data and record management practices (WHO Technical Report Series 996, Annex 5, 2016), the [MHRA 'GXP' Data Integrity Guidance and Definitions (2018)](https://www.gov.uk/government/publications/guidance-on-gxp-data-integrity), the PIC/S guidance PI 041 on data integrity in regulated GMP/GDP environments, and the [EU GMP Guide](https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en) all describe the same expectations. EU GMP Chapter 4 is specifically about documentation; Annex 11 is the EU counterpart to Part 11 for computerised systems. For clinical work, ICH E6(R2)/E6(R3) Good Clinical Practice carries equivalent expectations for source data and case report forms; see [ICH E6 Good Clinical Practice](/articles/ich-e6-good-clinical-practice). For a combination product (a drug or biologic with a device constituent), the device-side manufacturing records fall under 21 CFR Part 820, which from 2 February 2026 becomes the Quality Management System Regulation (QMSR) and incorporates ISO 13485:2016 by reference. Under the QMSR the legacy QSR record terms Device History Record (former 820.184) and Device Master Record (former 820.181) no longer appear; the equivalent manufacturing-record requirements are met through ISO 13485 concepts such as the Medical Device File.

The point isn't to memorize citations. It's that no major health authority lets you off the hook. GDocP is the common floor under all of them, and it sits directly underneath the [ALCOA+ properties](/articles/alcoa-plus-deep-dive) and the broader [data integrity foundations](/articles/data-integrity-foundations).

---

## Contemporaneous recording: write it when you do it

The single most important GDocP habit is recording the result, the action, or the observation at the time it happens, not later from memory, not later from a sticky note, not "I'll fill in the times when I finish the run."

### What "contemporaneous" actually means

"Contemporaneous" has a specific operational meaning:

- A weight is recorded when the balance settles, not when you sit down after the prep.
- A pH reading is written when you read it, with the time it was read.
- An operator signs a process step when that step is complete, before moving to the next one, not at the end of the shift for all twelve steps at once.

The failure mode this prevents is reconstruction. The moment a record is built from memory, two things rot: the times become approximate (and approximate times destroy your ability to prove sequence), and the content drifts toward what *should* have happened rather than what *did*. Investigators are trained to spot reconstruction. Tell-tales include uniform handwriting and pen across an entire batch record that took eight hours, times that are suspiciously round (every entry on the quarter hour), and entries whose ink or pressure is identical down a page that was supposedly filled across a long operation.

### How to handle a legitimate late entry

A common and entirely legitimate need is the late entry. Sometimes you genuinely cannot record at the moment: you were gowned in an aseptic core, or the event happened and the form wasn't at hand. The answer is not to back-date. The answer is a controlled late entry. The procedure, in order:

1. Write the entry where it belongs, or in the next available space with a clear pointer to the step it relates to.
2. Record the *actual* date and time you are writing it.
3. Note the date and time the event actually occurred.
4. Add a short reason ("late entry, recorded on return from aseptic suite").
5. Initial.

A transparent late entry is defensible. A back-dated entry is falsification, and the line between the two is whether you told the truth about when you wrote it.

**Worked example, a late entry done correctly:**

> Step 7, mixing start time: 09:14 (event occurred 09:14, recorded as late entry 09:52 on exit from gowning. Reason: form not available inside suite. /AB 09:52/)

The decision, when you realize you are writing down something that already happened, is short and always the same:

<div class="flow-v">
  <div class="flow-step">You need to write down something that already happened</div>
  <span class="flow-arrow">&darr;</span>
  <div class="flow-step">Record it now, in the next available space, with a clear pointer to the step it belongs to</div>
  <span class="flow-arrow">&darr;</span>
  <div class="flow-step">Write BOTH times: when the event actually happened, and the actual time you are writing the entry</div>
  <span class="flow-arrow">&darr;</span>
  <div class="flow-step">Add a short reason it is late, then initial and date</div>
  <span class="flow-arrow">&darr;</span>
  <div class="flow-step">A transparent late entry is defensible. Writing the entry as if it had been made at the moment, showing only the event time, is back-dating, which is falsification</div>
</div>

**Acceptance criteria for contemporaneous recording.** The record was made by the person who performed the work, at or immediately after the moment of performance. Timestamps reflect when each event actually happened and run in a plausible sequence. Any entry not made in real time is flagged as a late entry with both times and a reason. Handwriting, ink, and pressure vary across a long record the way real work over hours produces.

---

## Attribution: every entry traces to a person

Attributable means you can tell who made each entry and, where it matters, who reviewed it.

### Paper attribution

In a paper system, attribution is carried by initials and signatures tied to a signature log. The mechanics:

- The site maintains a controlled **signature log** (sometimes called a specimen signature register) that maps each person's full legal name to their handwritten signature and their initials. Without it, "JM" in a batch record is meaningless.
- Initials accompany every discrete entry where full signature is impractical; full signature is used for significant approvals, releases, and verifications.
- Shared initials are forbidden. Two people whose initials would collide must use a disambiguator defined in the signature log.

**Sample signature log row:**

| Full legal name | Role | Initials | Signature specimen | Effective date | End date |
|---|---|---|---|---|---|
| Anil Bose | Manufacturing operator | AB | *(handwritten)* | 2026-01-15 | active |
| Anita Brar | QC analyst | ANB | *(handwritten)* | 2026-02-01 | active |

Note the disambiguator: two people would both be "AB," so the second uses "ANB," defined here so a reviewer can resolve it.

### Electronic attribution

In electronic systems, attribution is carried by a unique user account, an authenticated login, and the audit trail. Two non-negotiables that inspectors check directly: **no shared or generic accounts** (a login called "lab1" or "admin" used by four analysts breaks attribution entirely), and **individual passwords that are never disclosed**. Part 11 and Annex 11 both require that electronic signatures be unique to one individual and not reused or reassigned. A printed username on a chromatography report means nothing if six people know that password. See [electronic signatures implementation](/articles/electronic-signatures-implementation) for the controls.

### The witnessed or verified step

A subtle attribution failure is the verification or witnessed step. Where a procedure requires a second person to verify a critical action, a line clearance, a weight check, a manual transcription of a critical value, the verifier's signature must mean they actually observed or independently checked the thing, contemporaneously. Signing a stack of verifications at end of day for work you did not watch is a false record even though no number was changed.

**Acceptance criteria for attribution.** Every entry, correction, and signature resolves to one named individual through the signature log (paper) or a unique account (electronic). No generic or shared logins exist on GMP systems. Verifier signatures correspond to actual independent checks performed at the time.

---

## Error correction: the single-line cross-out

This is the mechanic everyone thinks they know and many get wrong. When you make a mistake in a record, you do not erase it, scribble it out, white it out, or write over it. You correct it so that the original entry remains legible, and you leave a trail explaining the change.

### The procedure

1. Draw a **single line** through the erroneous entry. One line, so the original value is still readable. The whole point is that a reviewer can see what was first written.
2. Write the **correct value** nearby (above, beside, or in the margin with a clear pointer).
3. Add your **initials and the date**. For significant corrections, add a short **reason code or note**: "transcription error," "wrong units," "entered on wrong line."
4. Never obliterate. No correction fluid. No opaque markers. No erasable ink to begin with (more on pens below).

**Worked example, a correct cross-out:**

> Original written: ~~7.42~~  7.24  /AB 12-Jun-2026, transcription error/

The reader can still see 7.42, sees the corrected 7.24, knows who changed it, when, and why.

| Action | Allowed? | Why |
|---|---|---|
| Single line through error, correct value + initials + date | Yes | Original stays legible; change is attributable and dated |
| Multiple lines / scribble until unreadable | No | Destroys the original entry; reads as concealment |
| Correction fluid / white-out | No | Obliterates; flagged as falsification risk |
| Writing over the original digit | No | Ambiguous; can't tell original from correction |
| Erasing (pencil) | No | No durable record ever existed |
| Late correction with reason and current date | Yes | Transparent; same logic as a late entry |

Why inspectors care so much about a cross-out: it is the cheapest possible tell for concealment. An obliterated entry raises the question *what were they hiding* even when the answer is "nothing, it was a typo." You never want a reviewer to have to wonder. The single-line convention costs five seconds and removes the question entirely.

### Corrections in electronic systems

In electronic systems there is no cross-out. The equivalent control is the **audit trail**: the original value is retained, the new value is recorded, and the system stamps who changed it, when, and (for GMP-critical data) why. A correction that overwrites with no audit trail is the electronic version of white-out, and it is exactly what Part 11 and Annex 11 exist to prevent. This is why reviewing audit trails, not just the final result, is now an explicit expectation of data review. See [audit trail design and review](/articles/audit-trail-design-and-review).

**Acceptance criteria for corrections.** The original value remains legible. The corrected value, the corrector's initials, and the date are present. A reason is given for any non-trivial correction. No obliteration, white-out, or overwrite anywhere. In electronic records, every change is captured in the audit trail with who/when/why.

---

## No pencil, no erasable ink, no gaps

A cluster of small rules all serve the same property: enduring and original.

**Indelible ink.** Records are made in permanent ink, conventionally blue or black, never pencil and never erasable pen. Pencil can be changed without trace, which defeats the entire purpose of a contemporaneous record. Some sites specify ink color for a practical reason, to distinguish original entries from photocopies, but the hard rule is permanence, not color.

**No blanks.** Every field on a controlled form gets an entry. If a field genuinely does not apply, you write "N/A" (and initial/date where the procedure requires), not leave it empty. A blank is ambiguous: did the step not happen, or did someone forget to record it, or will someone fill it in later? Striking through unused space with a single diagonal line on partially used pages prevents later additions. Inspectors read blanks as open doors.

**No obscuring.** Don't write outside the box, don't crowd entries so a later one looks original, don't use ditto marks or arrows for repeated values where the procedure calls for an explicit entry. "Same as above" can hide the fact that nobody actually checked the second time.

**Round only at the defined step.** Record raw data at the resolution the instrument provides and round only where the method specifies. Recording a pre-rounded number erases original data; the original (the instrument reading) must be preserved. A balance reading of 4.0617 g is the original. If you write 4.06 g because the method later rounds to two decimals, you have discarded original data before the method told you to.

**Acceptance criteria.** Every entry is in permanent ink (or the validated electronic equivalent). No empty fields; non-applicable fields show N/A with initials where required. Raw data is captured at full instrument resolution. Unused space is struck through so nothing can be added later.

---

## Controlled forms and the logbook discipline

Trustworthy records start before anyone writes on them, with control over the blank form itself.

### Controlled forms

A **controlled form** is one that exists in a single approved version, is issued under control, and is reconciled after use. The mechanics that matter:

- **Version control.** Each form carries a unique identifier and version/effective date. The current version is the only one in circulation; superseded versions are withdrawn. An entry made on last year's form is a deviation, because the form may have lacked a field the new method requires. This ties directly to [document control fundamentals](/articles/document-control-fundamentals).
- **Issuance and reconciliation.** Blank batch records and critical forms are issued in a controlled way, numbered, logged out, and reconciled so that issued copies equal used copies plus voided copies. The failure this prevents is the "spare blank": an uncontrolled photocopy that lets someone redo a record and substitute the clean version. If issued does not equal returned, you have an unaccounted-for record, and that is a finding.
- **Voiding.** A spoiled form is voided (marked VOID, single-lined, initialed, dated, reason noted) and retained, not thrown away. A discarded spoiled form is indistinguishable from a destroyed inconvenient result.

**Sample form issuance and reconciliation log:**

| Form ID | Version | Copy no. | Issued to | Issued date | Returned | Status |
|---|---|---|---|---|---|---|
| FRM-0042 | v3.0 | 001 | A. Bose | 2026-06-18 | 2026-06-19 | Used |
| FRM-0042 | v3.0 | 002 | A. Bose | 2026-06-18 | 2026-06-19 | Voided (printer jam) |
| FRM-0042 | v3.0 | 003 | A. Brar | 2026-06-19 | 2026-06-19 | Used |

Reconciliation: 3 issued = 2 used + 1 voided. Nothing unaccounted for.

### Logbooks

**Logbooks** carry their own discipline because they are continuous, shared, and sequential:

- **Bound, paginated, pre-numbered.** A logbook is a bound book with pre-printed page (and often line) numbers. Bound and pre-numbered means pages cannot be inserted or removed without an obvious gap. Loose-leaf "logbooks" defeat the entire purpose.
- **Sequential, no skipped lines.** Entries are chronological with no gaps. If a line is skipped, it is single-lined and initialed so it cannot be back-filled. A blank line between two dated entries is an invitation to insert a fabricated event later.
- **No torn or missing pages.** A logbook with a page number missing is a serious finding on its own. The reconciliation is trivial, the numbers must be continuous, which is exactly why a gap is damning.
- **Controlled issuance.** Logbooks are issued, assigned to equipment or an area, and archived when full. The issuance record ties the physical book to its purpose and retention.

**Sample equipment use log entries:**

| Date | Time in | Time out | Activity | Batch / sample | Cleaning status before | Operator |
|---|---|---|---|---|---|---|
| 2026-06-18 | 08:05 | 10:40 | Granulation | B260618 | Clean (ref log p.12) | AB |
| 2026-06-18 | 10:40 | 11:05 | Cleaning | - | N/A | AB |
| 2026-06-18 | 13:20 | 15:55 | Granulation | B260618-2 | Clean (this log 10:40) | ANB |

Equipment use logs deserve a specific mention: they tie a batch to the equipment, the cleaning status, and the prior use. A clean break in the log, a use with no preceding cleaning record, or an overlap where one instrument is logged as running two batches at once, is the kind of physical impossibility that turns a routine inspection into a for-cause one.

**Acceptance criteria.** Forms in use are the current approved version only. Issued copies reconcile against used plus voided. Voided forms are retained. Logbooks are bound and pre-numbered with continuous page numbers, chronological entries, no blank lines left open, and no missing pages.

---

## Paper and electronic: the same mechanic, two forms

People treat GDocP as a paper-era discipline and assume an electronic system takes care of itself. It does not. Every paper mechanic has an electronic counterpart, and the property each one protects is identical. The system enforces some of them for you, but only if it was configured and validated to. The table below maps the mechanic across both worlds so you can see that nothing was retired when the lab went electronic, it just moved into the configuration and the audit trail.

| GDocP mechanic | Paper record | Electronic or hybrid equivalent |
|---|---|---|
| Contemporaneous | Write at the moment, controlled late entry with both times if not | System clock stamps the entry; the clock is synchronized and users cannot edit it (see [time stamps and system clock control](/articles/time-stamps-and-system-clock-control)) |
| Attributable | Initials and signature tied to the signature log | Unique account, authenticated login, no shared logins; the audit trail names the actor |
| Error correction | Single line, correct value, initials, date, reason | Original value retained, new value recorded, audit trail captures who, when, and why; no overwrite without a trace |
| No blanks | N/A in unused fields, diagonal strike on unused space | Mandatory fields enforced; the record cannot be completed with a required field empty |
| Permanent | Indelible ink, no pencil, no erasable pen | Records write-protected after signing; deletions blocked or captured; secure backup |
| Raw data at full resolution | Record the instrument reading, round only where the method says | Raw acquisition data retained as the original; reporting rounds at the configured step, not before |
| Sequence and completeness | Bound, pre-numbered logbook, no skipped lines | Workflow states with defined order; no gaps; entries cannot be inserted out of sequence |
| Independent review | Second person signs the review | Two-tier electronic workflow that blocks self-approval and forces audit-trail review |

The lesson for an inspection: when a system does not enforce one of these, the burden falls back on the procedure and the human, and that is exactly where findings cluster. A LIMS that allows a result to be typed over with no trace has not removed the white-out rule, it has reintroduced white-out.

### True copies, instrument printouts, and fading paper

A specific trap sits between the two worlds: the original record that lives on paper but degrades. Thermal printouts from balances, pH meters, and some chromatography integrators fade to blank within months to a few years. The thermal slip is the *original* data, so losing it loses original data, an ALCOA failure even though nobody touched it.

Two defensible handling routes:

- **Make a true copy** of the printout (a verified photocopy or scan), label it a true copy, and have a second person confirm it is complete and faithful, then retain the true copy as the controlled record. A true copy is a copy verified to preserve the full content and meaning of the original, including any metadata.
- **Capture the data electronically** at the source where the instrument supports it, so the electronic file is the original and the printout is only a convenience.

Either way, define in procedure which version is the official original (the "designated record") and retain it for the full retention period in a readable form. Pasting a fading slip into a logbook with no true copy is the common version of this finding. See [static vs dynamic records and true copies](/articles/static-dynamic-records-true-copies) and [hybrid paper and electronic records](/articles/hybrid-paper-electronic-records).

---

## Review and the second signature

A record is not finished when the operator signs it. GMP requires independent review. The reviewer confirms the record is complete, internally consistent, performed in sequence, within limits, and that any corrections and deviations were handled correctly. Two things make review real rather than ceremonial:

- The reviewer is **independent** of the work (you don't review your own batch).
- Review now explicitly includes **the underlying data and the audit trail**, not just the summary. For electronic records, reviewing only the printed result while ignoring the audit trail is precisely the gap data integrity guidance was written to close. The reviewer is looking for changed values, aborted runs, reprocessed integrations, and modified parameters that never made it into the clean report.

A reviewer's signature is itself a GDocP-governed event: contemporaneous (sign when you reviewed, not pre-sign blanks for work not yet done), attributable, and dated.

**A reviewer's checklist, in practice:**

- Every required field completed; N/A used correctly; no blanks.
- Every correction is single-lined, initialed, dated, reason given where significant.
- Times run in a plausible forward sequence; no impossible overlaps.
- Results are within specification, or an out-of-specification result is linked to an open investigation. See [the OOS investigation process](/articles/oos-investigation-process).
- Signatures present at every required sign-off, by people qualified for that role.
- For electronic data: audit trail reviewed, no disabled audit trail, no deleted or unexplained "test" runs, no manual reintegration without justification.

See [batch record review in GMP](/articles/batch-record-review-gmp) and [operationalizing audit trail review](/articles/operationalizing-audit-trail-review) for the full review workflow.

---

## Roles and responsibilities

GDocP is everyone's job, but the accountability is specific.

| Role | What they own in GDocP |
|---|---|
| Operator / analyst | Records contemporaneously, attributes every entry, corrects with the single-line method, uses the current controlled form, signs only their own work |
| Verifier / witness | Independently observes or checks the critical step at the time, then signs |
| Independent reviewer | Confirms completeness, sequence, corrections, and audit trail; signs the review |
| Supervisor / area manager | Ensures forms and logbooks are issued and reconciled, signature log is current, training is complete |
| Quality Assurance | Sets the GDocP SOP, audits records, dispositions deviations, makes the final release decision; see [batch disposition decisions](/articles/batch-disposition-decisions) |
| QA / IT system owner | Configures electronic systems for unique accounts, enforced audit trails, and locked clocks; see [time stamps and system clock control](/articles/time-stamps-and-system-clock-control) |
| Training function | Qualifies people on the GDocP SOP before they touch a GMP record; see [the GxP training program](/articles/training-program-gxp) |

The principle that ties these together: the person performing an action records it, a different person reviews it, and QA owns the rules and the final call. Separation of these duties is itself a data integrity control.

---

## How sloppy GDocP becomes a data integrity finding

The throughline of this whole article: individual GDocP slips are not victimless tidiness issues. They are the raw material of integrity findings, because each one removes a piece of the evidence that the record is true.

Consider how an investigator builds a case from small things:

- **A correction with no initials** leads to "the change is not attributable," which leads to who changed this, and were they authorized? Now every correction in the binder is suspect.
- **An entry written late but dated as if contemporaneous** is back-dating, which is falsification, full stop, regardless of whether the underlying value was correct.
- **A blank field** means "the record is not complete," which raises whether the step happened at all. If a critical step's documentation is missing, the regulator may treat the step as not performed (211.188 and 211.194 require documentation of each significant step and all data).
- **A logbook with a missing page or a skipped, un-struck line** means "records can be added or removed without detection," so the record is not reliable as a class, not just on that page.
- **An overwrite in an electronic system with no audit trail, or a shared login** fails attribution and originality at once. This is the pattern that drives warning letters and import alerts, because it implies systemic, not isolated, weakness.

The escalation is real. Regulators distinguish between an isolated documentation error (a single missing initial, corrected and explained) and a *pattern* that suggests the records cannot be trusted. The first is an observation you fix. The second is the basis for a Form 483 observation, a Warning Letter, withholding of approval, or, in the gravest cases involving deliberate falsification, application integrity action. See [FDA warning letter patterns](/articles/fda-warning-letters-patterns) and [quality culture and data integrity failures](/articles/quality-culture-di-failures). The mechanics in this article are how you stay firmly in the first category.

---

## Common mistakes and real inspection-finding patterns

These are the recurring patterns inspectors document, stated generically with no company names.

- **Pre-printed times or batch-records that look written in one sitting.** A record spanning a shift with identical ink and uniform handwriting reads as filled in after the fact.
- **Back-dated entries dressed as contemporaneous.** The single most damaging finding, because it is falsification rather than sloppiness.
- **White-out, heavy scribble, or overwriting.** Treated as concealment risk and triggers a deeper look at everything.
- **Blanks and N/A misuse.** Empty fields, or N/A used to skip a step that clearly should have happened.
- **Shared or generic logins.** "Admin," "lab1," or one password known to a team, breaking attribution on the electronic system.
- **Audit trail disabled or not reviewed.** A chromatography data system configured so changes are not captured, or a review that looks only at the printed result. See [chromatography data system integrity](/articles/chromatography-data-system-integrity).
- **Uncontrolled "shadow" records.** Loose printouts, sticky notes with raw data, or a spreadsheet used as the real record outside the validated system; see [hybrid paper and electronic records](/articles/hybrid-paper-electronic-records).
- **Logbook gaps.** Missing pages, skipped lines not struck through, or equipment logged as running two things at once.
- **Reviewer pre-signing.** A review signature dated before the work could have been completed.
- **Uncontrolled or superseded forms in use.** An old form version still circulating, or a photocopied "spare blank."

---

## Interview-ready: questions and how to answer them

These come up across the table from an interviewer and from an inspector alike. Here is how to answer in a way that shows you understand the why, not just the rule.

**"Walk me through how you correct an error on a paper record."**
Single line through the wrong entry so it stays legible, write the correct value next to it, add my initials and the date, and a short reason for anything significant. Never white-out, never overwrite, never erase. The original has to remain readable so a reviewer never has to wonder what was there first.

**"What makes a late entry acceptable versus falsification?"**
Honesty about timing. A late entry records the actual time I am writing it, the time the event actually happened, and the reason it is late, then I initial it. Back-dating, writing a later entry as if it were made at the moment, is falsification, even if the value itself is correct.

**"Why can't we share logins on a lab system?"**
It breaks attribution. Part 11 and Annex 11 require an electronic signature to be unique to one person. If four analysts use "lab1," no record can be traced to who actually did the work, so the records are not reliable and the audit trail is meaningless.

**"What is the difference between ALCOA+ and GDocP?"**
ALCOA+ describes the properties a trustworthy record must have. GDocP is the set of mechanics that produce those properties: how you record contemporaneously, attribute, correct, and control the form. ALCOA+ is the destination; GDocP is the road.

**"When you review a batch record, what are you actually looking for?"**
Completeness with no blanks, corrections done correctly, a plausible forward time sequence, results within limits or linked to an open investigation, the right signatures by qualified people, and, for electronic data, the audit trail itself, not just the clean printout. I sign only what I genuinely reviewed.

**"Why is a blank field a problem? It's just an empty box."**
A blank is ambiguous. It could mean the step did not happen, someone forgot to record it, or someone plans to fill it in later. For a critical step, a regulator can treat missing documentation as the step not having been performed. That is why we write N/A and strike through unused space.

**"Give me an example of how a small documentation slip becomes a serious finding."**
A correction with no initials makes one change unattributable. Once an inspector sees that, they assume any correction in the binder could be unauthorized, so a five-second oversight contaminates the credibility of the entire record set. Patterns, not single slips, are what turn an observation into a Warning Letter.

**"How do you handle raw data and rounding?"**
Record raw data at the full resolution the instrument gives, and round only at the step the method specifies. The instrument reading is the original; rounding before the method says to discards original data.

---

## The beginner's operating rules

If you strip everything above to the habits that prevent the most findings, this is the short list to internalize on day one:

1. **Record at the time you do the work.** If you can't, make a transparent late entry, never back-date.
2. **One person, one identity.** Sign your own work, use your own login, never share a password or initials.
3. **Single line through errors.** Correct value, your initials, the date, a reason for anything significant. No white-out, no scribble, no pencil ever.
4. **No blanks.** N/A what doesn't apply; strike through unused space.
5. **Use the controlled form and the bound logbook**, current version only, no spare blanks, no skipped lines, account for every issued copy.
6. **Permanent ink, raw data at full resolution,** round only where the method says.
7. **When you review, read the data and the audit trail,** not just the summary, and sign only what you actually checked.

Master these and you have done most of the real work of data integrity. ALCOA+ is the destination; GDocP is the road. The acronym describes what a trustworthy record looks like. These mechanics are how a human being, pen or keyboard in hand, actually makes one, entry by entry, signature by signature, with nothing along the way that an inspector would have to wonder about.

For the wider context, see [data integrity foundations](/articles/data-integrity-foundations), the [ALCOA+ properties in detail](/articles/alcoa-plus-deep-dive), and [how to write an SOP](/articles/how-to-write-an-sop) that bakes these rules into the procedures people follow.
