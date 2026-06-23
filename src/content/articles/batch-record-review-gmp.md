---
title: "Batch Record Review: What It Is, What to Look For, and What Regulators Expect"
description: "A practical guide to GMP batch record review: the process, what makes a batch record complete, how to conduct a meaningful review, common failures, and how automated systems change the picture."
pubDate: 2026-06-03
tags: ["batch record", "GMP", "quality-assurance", "manufacturing", "data-integrity", "review"]
pillar: "quality-assurance"
tier: "Intermediate"
---

Batch record review is the quality oversight activity that stands between a completed manufacturing batch and a released pharmaceutical product. It is the last structured opportunity to identify execution errors, data integrity failures, or process deviations before product reaches patients.

Done well, batch record review catches problems. Done poorly, mechanically signing off a stack of pages without meaningful examination, it becomes a regulatory liability rather than a quality control. Inspectors know the difference, and so do the patients who depend on the product being what the label says it is.

This article walks through what a batch record is, what a complete one contains, how to review one in a way that actually finds problems, and how the picture shifts when paper gives way to electronic systems. It is written to serve three readers at once: someone new to GMP who needs the vocabulary and the rules, a working reviewer who wants sharper technique, and a quality leader thinking about review as a system rather than a task. The principles apply across small molecule drug product, sterile injectables, biologics, vaccines, and the device combination products that pair a drug with a delivery system. The vocabulary shifts a little by sector, but the obligation to reconstruct what happened from a complete, attributable record does not.

---

## What a batch record is

Under 21 CFR 211.188, a batch production and control record must be prepared for each batch of drug product. It must include, or refer to, the master batch record and document the actual conditions and results of each significant step in manufacturing. A companion regulation, 21 CFR 211.192, requires that all production and control records, including those for packaging and labeling, be reviewed and approved by the quality control unit to determine compliance with all established procedures before a batch is released or distributed. The same regulation requires that any unexplained discrepancy or any failure of a batch to meet specifications be thoroughly investigated, whether or not the batch was already distributed.

The EU framework carries the same obligations in different words. EU GMP Volume 4, Chapter 4 sets the documentation requirements for batch processing and packaging records, and EU GMP Annex 16 makes the Qualified Person personally responsible for confirming each batch was made and checked in compliance before certification. ICH Q7, the API GMP guide, mirrors all of this for active pharmaceutical ingredients in its Sections 6.5 and 6.7. The point worth internalizing: batch record review is not a single-country rule. It is a near-universal expectation of every GMP regime, because the logic is the same everywhere. You cannot release what you cannot reconstruct.

Two documents sit at the center of the activity, and confusing them is a common early mistake.

The **master batch record** (sometimes called the master production record, master formula, or master formula record) defines what should happen: the formula, the procedures, the equipment, the processing parameters, and the in-process tests. It is a controlled document, approved before use, and changed only through [change control](/articles/change-control-validated-systems). For each batch, an exact copy of the relevant portions is reproduced for execution, and 21 CFR 211.186 sets out what the master record must contain, including the requirement that it be checked, dated, and signed by a second person.

The **executed batch record** (EBR), also called the production batch record, documents what actually happened: the materials used, lot numbers, actual values for each parameter, results of in-process tests, any deviations, and the signatures of the personnel who performed and checked each step.

The two must be consistent. Where they differ, that difference is either an authorized deviation or a data integrity problem. There is no third category. A reviewer who treats an unexplained difference as "probably fine" has missed the entire point of the review. This single discipline, every difference must resolve to either an approved deviation or an investigation, is the mental model that separates a real reviewer from a signature.

A note on terminology, because interviewers test it. In a fully electronic environment, "EBR" usually refers to the electronic batch record system itself, often a module of a manufacturing execution system. In a paper or hybrid environment, the executed batch record is the physical or scanned packet. The acronym is the same; the thing it names depends on context. Know which you mean.

---

## What a complete batch record contains

A compliant batch record for a typical pharmaceutical manufacturing operation includes the following. The grouping below is a way to read a record, not a regulatory list, but every item maps back to the requirements in Part 211 Subpart J, and the closely related content requirements in 21 CFR 211.186 (master record) and 211.188 (batch record).

**Identity and traceability:**
- Batch number, product name, strength, dosage form
- Date and time of each manufacturing step
- Equipment identifiers for each piece of equipment used
- Calibration and cleaning status of critical equipment at time of use

**Materials:**
- Component list with item codes, lot numbers, and actual quantities weighed or dispensed
- Yield reconciliation at each stage with theoretical yield calculations
- Reject and reprocess documentation if applicable

**Process execution:**
- Step-by-step record of execution with actual values (temperatures, pressures, times, agitation speeds, pH measurements)
- In-process results against specifications
- Environmental monitoring records for operations in classified areas
- Instrument readings and calibration status references

**People:**
- Attribution: who performed each step (individual name or ID, not a group or department)
- Second check or verification: who checked critical steps
- Supervisory or QA review signatures

**Deviations:**
- Any deviation from the master batch record, however minor
- Reference to the formal deviation record if one was opened
- Impact assessment: does the deviation affect product quality?

**Post-processing:**
- Results of release testing
- References to the Certificate of Analysis
- Final yield and reconciliation against theoretical yield

The thread running through all of these is the set of data integrity attributes summarized as ALCOA+ (see [ALCOA+ in detail](/articles/alcoa-plus-deep-dive)): each entry should be attributable, legible, contemporaneous, original, accurate, and (in the expanded form) complete, consistent, enduring, and available. A reviewer who keeps those attributes in mind has a built-in checklist for every field on the page.

### A sample of what good looks like at the field level

Abstractions do not help a new reviewer recognize a good entry from a bad one. Here is a small extract of a weighing step as it should appear in a paper record, with the reviewer's read in the third column.

| Field | Entry | Reviewer read |
|---|---|---|
| Material | Microcrystalline cellulose | Matches dispensing list |
| Item code | MCC-101 | Matches master record |
| Lot number | A4471-22 | Traceable to receiving and the materials issue log |
| Target / tolerance | 12.50 kg, plus or minus 0.25 kg | From master record |
| Actual weight | 12.48 kg | Within tolerance, no action |
| Balance ID | BAL-204 | In current calibration at time of use |
| Performed by / date / time | J. Okafor / 14 Mar 2026 / 09:12 | Individual, contemporaneous, attributable |
| Verified by / date / time | M. Halpern / 14 Mar 2026 / 09:14 | Second person, different from performer |

The point of seeing it laid out: every cell is a small claim the reviewer is checking against another source. The actual weight is checked against tolerance. The lot number is checked against the issue log. The balance ID is checked against the calibration system. The performer and verifier are checked against each other (they must differ on a critical step) and against the training records (both must be qualified for the task). A blank cell, two identical signatures, or a time that runs backward against the previous step is a finding, not a typo to wave through.

---

## Who reviews a batch record and when

Review is not a single event at the end. It is a chain of checks, each catching a different class of error.

**During manufacturing:** Operators execute and self-check each step. In many operations, a second person verifies critical steps (weight checks, label reconciliation, critical additions) at the time of execution. Contemporaneous second checks catch errors while they are still cheap to fix, before the next step locks them in.

**In-process quality oversight:** In higher-risk operations, a quality or manufacturing supervisor reviews in-process records before the next stage begins. This is common in sterile operations and in personalized therapies, where a single batch may equal a single patient dose and there is no opportunity to remake it. It is equally common in continuous or campaign manufacturing, where catching a drift early prevents a string of suspect batches.

**Post-manufacturing QA review:** This is the formal batch record review required by 21 CFR 211.192. Quality assurance reviews the complete executed batch record before a batch can be released. This review confirms that:
- All required entries are present
- All values are within specification
- All deviations are properly documented and resolved
- The record is attributable, legible, and internally consistent
- Release testing results are acceptable

**Final disposition and release:** In the United States, the quality unit makes the disposition decision under 21 CFR 211.22, which holds the quality control unit responsible for approving or rejecting all drug products. In the EU and other ICH regions, a Qualified Person (QP) certifies each batch before release under EU GMP Annex 16. The QP relies on the batch record review but is personally accountable for the certification, which is one reason the review documentation has to stand on its own and not live only in the reviewer's head. The mechanics of that final call are covered in [batch disposition decisions](/articles/batch-disposition-decisions) and [the QP and batch release under Annex 16](/articles/qualified-person-batch-release-annex-16).

A clear split of duties across these roles is part of a functioning quality system; the article on [roles and responsibilities in GxP](/articles/gxp-roles-responsibilities) covers how the quality unit's independence underpins all of it.

### Roles and responsibilities at a glance

| Role | Responsibility in the review chain |
|---|---|
| Operator / technician | Executes each step, records actual values contemporaneously, signs as performer |
| In-process verifier | Performs the second check on critical steps at time of execution, signs as verifier |
| Manufacturing supervisor | Reviews the record for manufacturing completeness and accuracy before it goes to QA; first-pass completeness check in many sites |
| QA batch record reviewer | Performs the formal 211.192 review, confirms deviations are closed, raises findings, recommends disposition |
| Deviation / investigation owner | Owns each deviation and its impact assessment, provides the closure the reviewer needs |
| QA disposition authority / QP | Makes or certifies the release decision, accountable for the call |
| QC laboratory | Provides release testing results and the Certificate of Analysis the reviewer reconciles against |

The separation matters for a reason inspectors probe directly: the person who makes a product should not be the sole judge of whether it is fit to release. Independence of the quality unit is not an organizational nicety. It is required by 211.22 and it is the first thing a finding about "QA was pressured to release" attacks.

---

## How to conduct a meaningful batch record review

Batch record review is not reading every line to confirm signatures are present. That is document verification. Review means looking for what might be wrong. The techniques below are ordered roughly by how often they catch real problems.

### Start with the deviations

Check whether any deviations are recorded in the batch record. If there are, confirm:
- Each is formally captured in the [deviation management](/articles/deviation-management) system (or in the batch record itself, per procedure)
- The root cause assessment is complete and reasonable
- The impact assessment is documented and justified, not assumed
- The deviation is closed, or the batch is being held pending closure

More telling: if there are **no** deviations in a complex manufacturing batch, question whether the deviation threshold is appropriately sensitive. Zero-deviation batches in a complex process can indicate that the team is not documenting minor deviations, which is itself a data integrity indicator. A mature operation expects a baseline rate of minor, no-impact deviations; their absence is more suspicious than their presence.

### Check for internal consistency

Cross-reference values that appear in more than one place:
- If a temperature is recorded at time T, does it match the in-process trend or the automated data capture?
- If a weight is transferred between steps, do the yield calculations add up?
- If an operator signed at 14:30 for step 5, are steps 3 and 4 signed by someone before that time?

Inconsistencies in timestamps, values, or sequences within a batch record are data integrity indicators, not just minor record errors. Every inconsistency needs an explanation.

### Evaluate yield and reconciliation

Yield reconciliation catches process problems that no other control catches. Work a simple example. Suppose theoretical yield at a granulation step is 10.0 kg.

| Actual yield | Reconciliation | Reviewer action |
|---|---|---|
| 9.6 kg | 4% loss, within normal range | Accept, no action |
| 9.1 kg | 9% loss, below the lower action limit | Investigate: confirm against historical range, raise a deviation if it stands |
| 7.2 kg | 28% loss, well outside range | Reject for explanation: clogged filter, failed transfer, line not rinsed, lost material |
| 10.0 kg, batch after batch | Exact match every time | Investigate: real processes vary; a perfect repeat suggests numbers are being made to fit |

Unexpected yield loss, consistent loss at the same step, or yield that is suspiciously perfect are all signals worth investigating. Reconciliation also matters for accountability: it forces you to account for all material, what entered the process, what came out, and what was discarded, so a diversion cannot hide in normal variation. 21 CFR 211.103 requires that actual yields and percentages of theoretical yield be determined at the conclusion of each appropriate phase of manufacturing, and 21 CFR 211.192 requires that any unexplained discrepancy be thoroughly investigated, so reconciliation is not optional good practice. It is the rule.

A worked number for the granulation row above: theoretical 10.0 kg, actual 9.1 kg.

```
Percent yield   = (9.1 / 10.0) x 100   = 91.0%
Percent loss    = 100 - 91.0           = 9.0%
```

If the validated normal range for this step is 95% to 99%, then 91% is below the lower action limit, and the reviewer does not accept it as "just a bit low." It triggers a check against the campaign history and, if it stands, a deviation. The reviewer's job is to know the action limit, not to eyeball whether a number feels reasonable.

### Review in-process results in sequence

Do not just check that values are within specification. Check whether they make physical sense and whether any value changed unexpectedly between time points. A pH that drops sharply in the middle of a process step and then recovers to in-specification may indicate an undocumented operator intervention. A temperature that holds at exactly the setpoint with zero variation across an hour may indicate a sensor that is not actually reading.

For automated data capture from a distributed control system (DCS) or process historian, compare the electronic process data to the manual entries in the paper or electronic batch record. If they do not match, the discrepancy needs an explanation before the batch moves forward. The integrity of the historian itself is its own subject, treated in [process historian data integrity](/articles/process-historian-data-integrity).

### Check for corrections

Every correction to a paper batch record must follow [good documentation practices](/articles/good-documentation-practices): single line through the error so the original stays legible, corrected value written nearby, initialed, and dated, with a reason where the procedure requires one. White-out, obliteration, erasure, and writing over the original are prohibited.

For electronic batch records, the audit trail captures all changes automatically. Review the audit trail for the batch, specifically looking for:
- Changes made after the batch was considered complete
- Changes to critical parameters or results
- Changes by users who were not involved in manufacturing the batch
- Bulk changes (multiple entries changed in a short time window)

How to read an audit trail efficiently, and what patterns signal trouble, is covered in [audit trail design and review](/articles/audit-trail-design-and-review) and, for the routine cadence of doing it, [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).

### Confirm attribution and the performer-verifier rule

On every step that requires a second check, confirm two people signed and that they are not the same person. One operator cannot be both performer and independent verifier on a critical step; the verification means nothing if the same hands did both. Confirm too that both are qualified for the task per current training records. An entry signed by someone whose training had lapsed is a finding even if the value is correct, because the control (a qualified person doing the work) was not actually in place.

---

## Acceptance criteria: how you know the review is done right

A reviewer needs an explicit definition of "complete and acceptable," not a feeling. A defensible batch record review meets all of the following before the reviewer signs:

- Every required field is present and legible, with no unexplained blanks.
- Every entry is attributable to a single named individual, contemporaneous with the work, and original or a verified true copy.
- Every recorded value is within its specification or in-process limit, or is covered by a closed deviation with a documented impact assessment.
- Yield and material reconciliation at each defined stage falls within the validated range, or any variance is explained and, where required, investigated.
- All deviations referenced anywhere in the record exist as formal records, are root-caused, impact-assessed, and closed (or the batch is explicitly held pending closure).
- The audit trail (electronic) or the corrections (paper) show no unexplained post-completion changes, no changes by uninvolved users, and no improper corrections.
- Release testing is complete, in specification, and the Certificate of Analysis matches the record.
- The review itself is documented: who reviewed, when, what was found, and how each finding was resolved.

If any one of these fails and is not resolved, the batch is not ready for disposition. "Good enough" is not an acceptance criterion. The clearest test of whether a review was real: could an inspector pick up your review record a year later and see exactly what you checked, what you found, and how it closed, without asking you?

---

## A worked review walkthrough

To make the technique concrete, here is how a reviewer might move through a single solid-dose batch record in practice.

1. **Frame the batch.** Read the batch number, product, and any holds or open events flagged at intake. Note the master record version in effect, and confirm it is the approved current version, not a superseded one.
2. **Pull the deviation list first.** Two minor deviations are open: a granulation hold time exceeded by 18 minutes, and a balance that was found out of calibration after a weighing step. The first has an impact assessment referencing a validated hold-time study; the second triggers a check of every weight taken on that balance since its last good calibration. The reviewer confirms both threads are closed before going further.
3. **Walk the material accountability.** Each active and excipient lot is traced from dispensing through reconciliation. One excipient lot number in the dispensing record does not match the number in the materials issue log. That is a stop. It is either a transcription error to be corrected per procedure, or a real material mix-up to be investigated.
4. **Reconcile yields step by step.** Granulation, compression, and coating each reconcile within range. Final yield ties to the in-process counts.
5. **Read the in-process and environmental data in time order**, comparing manual entries to the historian where one exists.
6. **Confirm attribution and second checks** on every step that requires them, and that no one signed as both performer and verifier on the same critical step.
7. **Review the release testing package** and confirm the Certificate of Analysis references match the batch number, strength, and specifications.
8. **Document the review itself**, including what was found and how each finding was resolved, so the disposition decision and any later QP certification rest on a visible record.

The point of the sequence is that deviations and material accountability come early, because they are most likely to stop the batch, and the reviewer never relies on "looks complete" as a finding. Notice that step 3 produced a hard stop. A real review produces findings; a review that never finds anything across a year of complex batches is the one an inspector worries about.

---

## The electronic batch record difference

When manufacturing shifts from paper batch records to electronic batch records, typically integrated with a manufacturing execution system (MES) or DCS, the review process changes. The data integrity considerations specific to these platforms are covered in [MES, EBR, and SCADA data integrity](/articles/mes-ebr-scada-data-integrity), and the messy middle state where some records are paper and some electronic is covered in [hybrid paper and electronic records](/articles/hybrid-paper-electronic-records).

**What becomes easier:**
- Automated data capture eliminates manual transcription errors
- In-process limits can be enforced in real time; the system will not let you proceed if a critical parameter is out of range
- Calculations are performed automatically, reducing arithmetic errors
- Review can include automated exception reports instead of reading every line

**What becomes more complex:**
- The reviewer must understand the audit trail and know how to interpret it
- Automated enforcement can create a false sense of security: if the limits are configured wrong, the system enforces the wrong thing, consistently, on every batch
- System failures create gaps in the electronic record that must be managed and explained
- Integration interfaces between systems introduce data integrity risk at transfer points, which is why those interfaces are a focus of [automation validation](/articles/automation-validation-plc-scada-dcs)

**What regulators focus on in EBR review:**
- Were the process parameter limits in the EBR correct for this batch and product?
- Were any fields entered or modified manually that should have been automated?
- What does the audit trail show for the batch?
- Are there any time gaps in automated data capture that need explanation?

The applicable expectations sit in 21 CFR Part 11 in the United States and in EU GMP Annex 11 in Europe; the practical mapping between them is in [Part 11 and Annex 11](/articles/21-cfr-part-11-eu-annex-11). The shorter version: an electronic record review is not lighter than a paper one, it is differently distributed, with more weight on configuration correctness and audit trail interpretation and less on legibility and arithmetic. A reviewer in an electronic environment who never opens the audit trail is doing the paper job on an electronic record, which is to say half a job.

---

## Common batch record review failures

These are the patterns that recur in inspection findings and warning letters. None of them require an exotic process to occur; they happen in ordinary operations under ordinary pressure to release. The broader inspection patterns these feed into are catalogued in [FDA warning letter patterns](/articles/fda-warning-letters-patterns).

**1. Rubber stamp review.** The reviewer signs the batch record within minutes of receiving a record that should take much longer to examine, with no evidence of meaningful work. In an inspection, investigators may ask reviewers how long they spend on a batch record and what they look for. A reviewer who cannot describe their process reveals that the review is a formality.

**2. Deviation documentation avoidance.** Small deviations, a process time that ran 10 minutes long, a temperature that exceeded the in-process limit by 0.2 degrees C, go undocumented because "they are within the range we have always accepted." If it is not in the procedure, it is a deviation. If the wider range is genuinely acceptable, change the procedure through change control to reflect the real control range, with data to support it.

**3. Incomplete yield reconciliation.** Yield is calculated but not reconciled against material balances or against the campaign history. Without true reconciliation, a material diversion or a quiet process drift can go undetected for many batches. This is a recurring 211.103 citation.

**4. Inconsistent reviewer standards.** Different QA reviewers apply different standards. What one approves as a minor documentation issue, another would reject. This inconsistency is itself a data integrity risk: it suggests the outcome depends on who reviews, not on documented criteria. Calibration sessions, where several reviewers review the same record and compare findings, are an effective fix.

**5. Post-release corrections.** A batch record is reviewed, approved, and the batch released. Then someone notices an error and corrects it after release. Post-release corrections are not prohibited, but they require justification, a new QA review, and documentation of why the error was not caught before release. A rising rate of them is a signal that the pre-release review is not working.

**6. Reviewing around an open investigation.** The batch record is signed and the batch dispositioned while a related deviation or out-of-specification result is still open. 211.192 requires investigation of any unexplained discrepancy before release; a reviewer who closes the record ahead of the investigation has inverted the order. The investigation gates the release, not the other way around. The mechanics of those investigations sit in [the OOS investigation process](/articles/oos-investigation-process).

**7. Treating a manual override as routine.** In an electronic environment, an operator override of an automated control is sometimes recorded but rarely scrutinized. Every override is a place where the validated control was bypassed by a human decision, and each one deserves a reason and an impact read, not a glance.

These failures rarely stay contained to one record. A pattern of weak review is read by inspectors as a [quality culture](/articles/quality-culture-di-failures) problem, and it shapes how the rest of the inspection goes. When a finding like this lands, the response strategy is its own discipline, covered in [483 and warning letter response](/articles/483-warning-letter-response).

---

## What makes a batch record unreviewable

Some batch records cannot be reviewed in their current state. A batch record review procedure should define the criteria for returning a record for correction before the QA review clock starts. Examples:

- Missing attribution on critical steps (no operator name or ID)
- Missing second check on a critical step that requires one
- Corrections made incorrectly (white-out, obliteration, illegible original)
- Deviation referenced in the record but no deviation record exists
- Unexplained blanks in required fields
- Values outside specification with no deviation or explanation

Returning a record for correction before review prevents the review from being completed with known deficiencies, and it keeps cycle-time metrics honest, because the clock should not run while the record is being made reviewable. One caution: the act of returning a record is itself a quality event worth tracking. A particular product or line that generates unreviewable records repeatedly is telling you the master record, the training, or the form design needs work, not just that one operator had a bad shift.

---

## Review by exception in automated manufacturing

In operations with complete automated data capture, reviewing every data point by hand is neither practical nor value-adding. Review by exception focuses reviewer attention on:

- Parameters that approached or exceeded limits
- Steps that took longer or shorter than expected
- Alarms that fired during the batch
- Manual interventions that overrode automated control
- Deviations or in-process holds

This is a risk-based approach in the spirit of [quality risk management](/articles/quality-risk-management) under ICH Q9. It does not eliminate the review requirement; it restructures it. Two conditions have to hold for it to be defensible. First, the exception criteria must be defined procedurally and justified, so that what is screened out was screened out on purpose, not by accident. Second, the system that generates the exception report must be validated, because the report is now part of the control. If the report logic silently drops a class of exceptions, the reviewer will never see what they were supposed to catch, and the gap can persist across an entire campaign before anyone notices.

A practical test inspectors apply: ask to see the configuration that defines an exception, and ask what happens to a data point that is within limit but anomalous in shape (the flat-line sensor, the suspiciously perfect repeat). If review by exception is genuinely capturing risk, someone has thought about the data that is technically in-limit but still wrong. If it is just a way to read fewer pages, that thinking is missing and the finding writes itself.

---

## Minimum compliant baseline

For a small organization in early manufacturing, the floor looks like this:

1. Master batch record reviewed and approved before each batch
2. Executed batch record captures all required fields per 21 CFR 211.188
3. All deviations documented, root-caused, and impact-assessed before batch disposition
4. QA review completed and documented before batch release, per 21 CFR 211.192
5. Yield reconciliation calculated for each batch per 21 CFR 211.103, with an explanation of any significant variance
6. Corrections in paper records made correctly: single line, initial, date, reason where required

---

## Better maturity state

For a commercial-stage operation, the target moves from compliant to capable:

- Electronic batch record with validated automated data capture and audit trail
- A formal batch record review procedure with defined review criteria and realistic time standards
- Review-by-exception capability with validated exception report generation
- Batch record trend review: not just per-batch review but periodic trending of yield, deviations, and in-process excursions across the campaign, feeding the [annual product review](/articles/annual-product-review-pqr)
- An operator training program that teaches what makes a batch record entry attributable, contemporaneous, and accurate, not just how to fill in the fields
- Batch record review metrics as a quality indicator: review cycle time, rejection rate, and deviation rate per batch, watched for drift over time rather than reported once and filed, in line with [quality metrics and KPIs](/articles/quality-metrics-and-kpis)

The difference between the two states is not mainly technology. It is whether review is treated as a one-record-at-a-time gate or as a system that learns from its own output and gets tighter over time.

---

## Interview questions on batch record review

These come up for QA reviewer, QA disposition, and quality manager roles, and they separate people who have done the work from people who have read about it. Short, concrete answers win.

**"What is the difference between the master batch record and the executed batch record?"**
The master defines what should happen and is a controlled, pre-approved document changed only through change control. The executed record documents what actually happened for one specific batch. The two must agree, and any difference is either an approved deviation or a data integrity problem.

**"Which regulations govern batch record review?"**
In the US, 21 CFR 211.188 requires the batch record, 211.186 the master record, 211.192 the production record review by the quality unit before release, and 211.103 yield reconciliation. Disposition authority sits with the quality unit under 211.22. In the EU, the documentation requirements are in EU GMP Chapter 4 and QP certification in Annex 16. ICH Q7 Sections 6.5 and 6.7 cover the same ground for APIs.

**"A batch has zero deviations. Is that good?"**
Not necessarily. For a simple, well-controlled step it can be fine. For a complex batch it is a flag, because real processes generate minor, no-impact deviations and their total absence often means the team is not documenting them, which is a data integrity concern. I would check the deviation threshold and the trend across recent batches.

**"How do you review an electronic batch record differently from a paper one?"**
Less weight on legibility and arithmetic, which the system handles, and more on the audit trail and on whether the configured limits were correct for this product and batch. I look for post-completion changes, changes by users not involved in the batch, manual overrides of automated controls, and gaps in automated capture. Wrong configuration is the dangerous failure because the system then enforces the wrong thing on every batch consistently.

**"You find a value out of specification with no deviation. What do you do?"**
The record is not reviewable as is. I return it or initiate the deviation and the investigation, depending on procedure. The batch is not dispositioned until the investigation is complete, because 211.192 requires any unexplained discrepancy to be investigated before release.

**"Walk me through how you actually review a record."**
Frame the batch and confirm the master version, then deviations first, then material accountability, then yield reconciliation, then in-process data in time order against the historian, then attribution and second checks, then the testing package and Certificate of Analysis, then document what I found and how it closed. Deviations and materials come first because they are most likely to stop the batch.

**"What is review by exception and when is it acceptable?"**
Focusing reviewer attention on exceptions (limit excursions, alarms, manual interventions, long or short steps) rather than every data point. It is acceptable only when the exception criteria are defined and justified procedurally and the exception report itself is validated, because the report is now part of the control. It restructures the review, it does not remove the requirement.

**"How would you know if your review program is weak?"**
Rising post-release corrections, very short review times with no findings, inconsistent outcomes between reviewers on similar records, and a deviation rate that does not match process complexity. I would run reviewer calibration sessions and trend the metrics rather than treat each record in isolation.

More questions across the quality function are collected in [GxP quality interview preparation](/articles/gxp-quality-interview-preparation).

---

## Practical tips

- Read the deviations and the material accountability first. They stop more batches than anything else, and finding the stop early saves the rest of the review.
- Keep a one-page reviewer aid taped to the desk: the ALCOA+ attributes, the performer-verifier rule, and the unreviewable criteria. Consistency between reviewers is a real data integrity control.
- Trend your own findings. If the same field is wrong across many batches, fix the form or the training, do not keep catching it one record at a time.
- Treat a suspiciously perfect number with the same suspicion as an out-of-limit one. Both are abnormal.
- In an electronic shop, open the audit trail every time. It is the part of the record paper review never had, and it is where the interesting failures hide.
- Document the review so it stands alone. The QP or disposition authority, and an inspector a year later, should see what you checked and how each finding closed without asking you.

---

## References

- 21 CFR 211.22, Responsibilities of quality control unit
- 21 CFR 211.100 and 211.103, Written procedures; deviations; and yield calculation
- 21 CFR 211.186, Master production and control records
- 21 CFR 211.188, Batch production and control records
- 21 CFR 211.192, Production record review
- 21 CFR 211.68, Automatic, mechanical, and electronic equipment
- 21 CFR Part 11, Electronic Records; Electronic Signatures
- EU GMP Volume 4, Chapter 4, Documentation
- EU GMP Volume 4, Annex 11, Computerised Systems
- EU GMP Volume 4, Annex 16, Certification by a Qualified Person and Batch Release
- ICH Q7, Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients (Sections 6.5, 6.7)
- FDA Guidance: Data Integrity and Compliance With Drug CGMP, Questions and Answers (December 2018)
- ICH Q9(R1), Quality Risk Management
- ICH Q10, Pharmaceutical Quality System
