---
title: "Good Documentation Practices: The Foundation Under ALCOA+"
description: "How contemporaneous recording, single-line corrections, controlled forms, and disciplined error handling turn a paper or electronic record into one an inspector will trust."
pubDate: 2026-06-20
tags: ["good documentation practices", "GDocP", "data integrity", "ALCOA+", "GMP", "error correction", "logbooks", "21 CFR 211"]
pillar: "data-integrity"
tier: "Beginner"
---

ALCOA+ gets all the attention. Posters in the lab, slides in the onboarding deck, a tidy acronym everyone can recite: attributable, legible, contemporaneous, original, accurate, plus complete, consistent, enduring, available. It is a useful frame. But ALCOA+ is a set of *properties* a record should have. It does not tell you how to make a record have them. The mechanics that actually produce a trustworthy record — the way you cross out a mistake, when you sign, what pen you use, how a blank form is issued and reconciled — those mechanics are Good Documentation Practices, or GDocP.

GDocP is where data integrity is decided in practice. An inspector almost never finds a falsified record sitting in plain view. What they find is a string of small habits that don't hold up: an entry written an hour late, a correction scribbled over with no initials, a blank that was filled in "to be tidy," a logbook page that skips a number. Each of those is a GDocP failure, and stacked together they become a data integrity finding. This article walks through the mechanics — the boring, load-bearing details — and ties each one back to the regulation that demands it and the failure mode it prevents.

## Where the requirement comes from

GDocP is not a single rule you can point to. It is the operational reading of several regulations that all say, in different words, that records must be reliable.

For pharmaceutical manufacturing in the US, the anchor is 21 CFR Part 211 — the cGMP regulations for finished pharmaceuticals. [§211.180 through §211.198](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-J) cover records and reports. The recurring phrase is that records must be made "at the time of performance" and document activities "as they are performed." That single requirement — *at the time of performance* — is the legal root of contemporaneous recording. §211.194 requires complete laboratory records including all data secured in the course of testing. §211.186 governs master production records; §211.188 governs batch production records and the requirement that each significant step be documented.

For records and signatures kept electronically, [21 CFR Part 11](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11) sets the rules for electronic records, electronic signatures, and audit trails. GDocP in a paper world and Part 11 controls in an electronic world are two faces of the same goal: the record reflects what happened, and you can tell who did what and when.

Internationally, the WHO guidance on good data and record management practices (WHO Technical Report Series, Annex on data integrity), the [MHRA 'GXP' Data Integrity Guidance and Definitions](https://www.gov.uk/government/publications/guidance-on-gxp-data-integrity), the PIC/S guidance PI 041 on data integrity in regulated GMP/GDP environments, and the [EU GMP Guide](https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en) all describe the same expectations. EU GMP Chapter 4 is specifically about documentation; Annex 11 is the EU counterpart to Part 11 for computerised systems. For clinical work, ICH E6(R2)/E6(R3) Good Clinical Practice carries equivalent expectations for source data and case report forms. Medical-device records live under 21 CFR Part 820 (the Quality System Regulation, now harmonizing toward ISO 13485) with the Device History Record and Device Master Record requirements.

The point isn't to memorize citations. It's that no major health authority lets you off the hook. GDocP is the common floor under all of them.

## Contemporaneous recording: write it when you do it

The single most important GDocP habit is recording the result, the action, or the observation at the time it happens — not later from memory, not later from a sticky note, not "I'll fill in the times when I finish the run."

"Contemporaneous" has a specific operational meaning:

- A weight is recorded when the balance settles, not when you sit down after the prep.
- A pH reading is written when you read it, with the time it was read.
- An operator signs a process step when that step is complete, before moving to the next one — not at the end of the shift for all twelve steps at once.

The failure mode this prevents is reconstruction. The moment a record is built from memory, two things rot: the times become approximate (and approximate times destroy your ability to prove sequence), and the content drifts toward what *should* have happened rather than what *did*. Investigators are trained to spot reconstruction. Tell-tales include uniform handwriting and pen across an entire batch record that took eight hours, times that are suspiciously round (every entry on the quarter hour), and entries whose ink or pressure is identical down a page that was supposedly filled across a long operation.

A common and entirely legitimate need is the late entry. Sometimes you genuinely cannot record at the moment — you were gowned in an aseptic core, or the event happened and the form wasn't at hand. The answer is not to back-date. The answer is a controlled late entry: write the entry where it belongs (or in the next available space with a clear pointer), record the *actual* date and time you are writing it, note the date and time the event actually occurred, add a short reason ("late entry — recorded on return from aseptic suite"), and initial. A transparent late entry is defensible. A back-dated entry is falsification, and the line between the two is whether you told the truth about when you wrote it.

## Attribution: every entry traces to a person

Attributable means you can tell who made each entry and, where it matters, who reviewed it. In a paper system, attribution is carried by initials and signatures tied to a signature log. The mechanics:

- The site maintains a controlled **signature log** (sometimes called a specimen signature register) that maps each person's full legal name to their handwritten signature and their initials. Without it, "JM" in a batch record is meaningless.
- Initials accompany every discrete entry where full signature is impractical; full signature is used for significant approvals, releases, and verifications.
- Shared initials are forbidden. Two people whose initials would collide must use a disambiguator defined in the signature log.

In electronic systems, attribution is carried by a unique user account, an authenticated login, and the audit trail. Two non-negotiables that inspectors check directly: **no shared or generic accounts** (a login called "lab1" or "admin" used by four analysts breaks attribution entirely), and **individual passwords that are never disclosed**. Part 11 and Annex 11 both require that electronic signatures be unique to one individual and not reused or reassigned. A printed username on a chromatography report means nothing if six people know that password.

A subtle attribution failure is the verification or witnessed step. Where a procedure requires a second person to verify a critical action — a line clearance, a weight check, a manual data transcription of a critical value — the verifier's signature must mean they actually observed or independently checked the thing, contemporaneously. Signing a stack of verifications at end of day for work you did not watch is a false record even though no number was changed.

## Error correction: the single-line cross-out

This is the mechanic everyone thinks they know and many get wrong. When you make a mistake in a record, you do not erase it, scribble it out, white it out, or write over it. You correct it so that the original entry remains legible, and you leave a trail explaining the change.

The standard convention:

1. Draw a **single line** through the erroneous entry. One line, so the original value is still readable. The whole point is that a reviewer can see what was first written.
2. Write the **correct value** nearby (above, beside, or in the margin with a clear pointer).
3. Add your **initials and the date**. For significant corrections, add a short **reason code or note** — "transcription error," "wrong units," "entered on wrong line."
4. Never obliterate. No correction fluid. No opaque markers. No erasable ink to begin with (more on pens below).

| Action | Allowed? | Why |
|---|---|---|
| Single line through error, correct value + initials + date | Yes | Original stays legible; change is attributable and dated |
| Multiple lines / scribble until unreadable | No | Destroys the original entry; reads as concealment |
| Correction fluid / white-out | No | Obliterates; flagged as falsification risk |
| Writing over the original digit | No | Ambiguous; can't tell original from correction |
| Erasing (pencil) | No | No durable record ever existed |
| Late correction with reason and current date | Yes | Transparent; same logic as a late entry |

Why inspectors care so much about a cross-out: it is the cheapest possible tell for concealment. An obliterated entry raises the question *what were they hiding* even when the answer is "nothing, it was a typo." You never want a reviewer to have to wonder. The single-line convention costs five seconds and removes the question entirely.

In electronic systems there is no cross-out. The equivalent control is the **audit trail**: the original value is retained, the new value is recorded, and the system stamps who changed it, when, and (for GMP-critical data) why. A correction that overwrites with no audit trail is the electronic version of white-out, and it is exactly what Part 11 and Annex 11 exist to prevent. This is why reviewing audit trails — not just the final result — is now an explicit expectation of data review.

## No pencil, no erasable ink, no gaps

A cluster of small rules all serve the same property: enduring and original.

**Indelible ink.** Records are made in permanent ink, conventionally blue or black, never pencil and never erasable pen. Pencil can be changed without trace, which defeats the entire purpose of a contemporaneous record. Some sites specify ink color for a practical reason — to distinguish original entries from photocopies — but the hard rule is permanence, not color.

**No blanks.** Every field on a controlled form gets an entry. If a field genuinely does not apply, you write "N/A" (and initial/date where the procedure requires), not leave it empty. A blank is ambiguous: did the step not happen, or did someone forget to record it, or will someone fill it in later? Striking through unused space with a single diagonal line ("Z" the rest of the page) on partially used pages prevents later additions. Inspectors read blanks as open doors.

**No obscuring.** Don't write outside the box, don't crowd entries so a later one looks original, don't use ditto marks or arrows for repeated values where the procedure calls for an explicit entry. "Same as above" can hide the fact that nobody actually checked the second time.

**Round only at the defined step.** Record raw data at the resolution the instrument provides and round only where the method specifies. Recording a pre-rounded number erases original data — the original (the instrument reading) must be preserved.

## Controlled forms and the logbook discipline

Trustworthy records start before anyone writes on them, with control over the blank form itself.

A **controlled form** is one that exists in a single approved version, is issued under control, and is reconciled after use. The mechanics that matter:

- **Version control.** Each form carries a unique identifier and version/effective date. The current version is the only one in circulation; superseded versions are withdrawn. An entry made on last year's form is a deviation, because the form may have lacked a field the new method requires.
- **Issuance and reconciliation.** Blank batch records and critical forms are issued in a controlled way — numbered, logged out, and reconciled so that issued copies equal used copies plus voided copies. The failure this prevents is the "spare blank": an uncontrolled photocopy that lets someone redo a record and substitute the clean version. If issued ≠ returned, you have an unaccounted-for record, and that is a finding.
- **Voiding.** A spoiled form is voided (marked VOID, single-lined, initialed, dated, reason noted) and retained — not thrown away. A discarded spoiled form is indistinguishable from a destroyed inconvenient result.

**Logbooks** carry their own discipline because they are continuous, shared, and sequential:

- **Bound, paginated, pre-numbered.** A logbook is a bound book with pre-printed page (and often line) numbers. Bound and pre-numbered means pages cannot be inserted or removed without an obvious gap. Loose-leaf "logbooks" defeat the entire purpose.
- **Sequential, no skipped lines.** Entries are chronological with no gaps. If a line is skipped, it is single-lined and initialed so it cannot be back-filled. A blank line between two dated entries is an invitation to insert a fabricated event later.
- **No torn or missing pages.** A logbook with a page number missing is a serious finding on its own. The reconciliation is trivial — the numbers must be continuous — which is exactly why a gap is damning.
- **Controlled issuance.** Logbooks are issued, assigned to equipment or an area, and archived when full. The issuance record ties the physical book to its purpose and retention.

Equipment use logs deserve a specific mention: they tie a batch to the equipment, the cleaning status, and the prior use. A clean break in the log — a use with no preceding cleaning record, or an overlap where one instrument is logged as running two batches at once — is the kind of physical impossibility that turns a routine inspection into a for-cause one.

## Review and the second signature

A record is not finished when the operator signs it. GMP requires independent review — the reviewer confirms the record is complete, internally consistent, performed in sequence, within limits, and that any corrections and deviations were handled correctly. Two things make review real rather than ceremonial:

- The reviewer is **independent** of the work (you don't review your own batch).
- Review now explicitly includes **the underlying data and the audit trail**, not just the summary. For electronic records, reviewing only the printed result while ignoring the audit trail is precisely the gap data integrity guidance was written to close. The reviewer is looking for changed values, aborted runs, reprocessed integrations, and modified parameters that never made it into the clean report.

A reviewer's signature is itself a GDocP-governed event: contemporaneous (sign when you reviewed, not pre-sign blanks for work not yet done), attributable, and dated.

## How sloppy GDocP becomes a data integrity finding

The throughline of this whole article: individual GDocP slips are not victimless tidiness issues. They are the raw material of integrity findings, because each one removes a piece of the evidence that the record is true.

Consider how an investigator builds a case from small things:

- **A correction with no initials** → "the change is not attributable" → who changed this, and were they authorized? Now every correction in the binder is suspect.
- **An entry written late but dated as if contemporaneous** → that is back-dating → that is falsification, full stop, regardless of whether the underlying value was correct.
- **A blank field** → "the record is not complete" → did the step happen? If a critical step's documentation is missing, the regulator may treat the step as not performed (211.188/211.194 require documentation of each significant step and all data).
- **A logbook with a missing page or a skipped, un-struck line** → "records can be added or removed without detection" → the record is not reliable as a class, not just on that page.
- **An overwrite in an electronic system with no audit trail, or a shared login** → attribution and originality both fail at once → this is the pattern that drives warning letters and import alerts, because it implies systemic, not isolated, weakness.

The escalation is real. Regulators distinguish between an isolated documentation error (a single missing initial, corrected and explained) and a *pattern* that suggests the records cannot be trusted. The first is an observation you fix. The second is the basis for a 483 observation, a Warning Letter, withholding of approval, or — in the gravest cases involving deliberate falsification — application integrity action. The mechanics in this article are how you stay firmly in the first category.

## What inspectors actually look for

If you want to pressure-test your own records, look at them the way an investigator does. They are not reading for content first; they are reading for *consistency of the evidence that the content is real*.

- **The same pen and hand down a long record.** A batch record that took a full shift but looks written in one sitting suggests reconstruction.
- **Round, uniform times.** Real work produces irregular timestamps. Every entry on the hour or quarter hour reads as filled-in-after.
- **Corrections that obscure.** Any white-out, any heavy scribble, any over-write draws immediate focus — and then they look at *everything* you did more carefully.
- **Blanks and "N/A" patterns.** Empty fields, or N/A used to skip steps that clearly should have happened.
- **Logbook continuity.** Page numbers, line gaps, torn edges, entries out of chronological order, two pieces of equipment "in use" simultaneously.
- **Sign-off timing.** Reviewers who signed before the work could have finished; operators who signed twelve steps with one timestamp.
- **Audit trails, deliberately.** In electronic systems they will ask to see the audit trail, look for disabled audit trail settings, deleted runs, "test" injections, manual integrations, and changed acquisition parameters. They will compare what the audit trail shows against the clean report.
- **Orphan and uncontrolled records.** Loose printouts, uncontrolled photocopied forms, sticky notes with raw data, spreadsheets used as the real record outside the validated system.

None of this requires the inspector to catch you in a lie. It requires only that your records cannot independently prove they are true. GDocP is what gives them that proof.

## The beginner's operating rules

If you strip everything above to the habits that prevent the most findings, this is the short list to internalize on day one:

1. **Record at the time you do the work.** If you can't, make a transparent late entry — never back-date.
2. **One person, one identity.** Sign your own work, use your own login, never share a password or initials.
3. **Single line through errors.** Correct value, your initials, the date, a reason for anything significant. No white-out, no scribble, no pencil ever.
4. **No blanks.** N/A what doesn't apply; strike through unused space.
5. **Use the controlled form and the bound logbook** — current version only, no spare blanks, no skipped lines, account for every issued copy.
6. **Permanent ink, raw data at full resolution,** round only where the method says.
7. **When you review, read the data and the audit trail,** not just the summary, and sign only what you actually checked.

Master these and you have done most of the real work of data integrity. ALCOA+ is the destination; GDocP is the road. The acronym describes what a trustworthy record looks like. These mechanics are how a human being, pen or keyboard in hand, actually makes one — entry by entry, signature by signature, with nothing along the way that an inspector would have to wonder about.
