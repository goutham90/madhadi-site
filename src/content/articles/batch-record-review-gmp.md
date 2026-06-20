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

This article walks through what a batch record is, what a complete one contains, how to review one in a way that actually finds problems, and how the picture shifts when paper gives way to electronic systems. It is written to serve three readers at once: someone new to GMP who needs the vocabulary and the rules, a working reviewer who wants sharper technique, and a quality leader thinking about review as a system rather than a task.

---

## What a batch record is

Under 21 CFR 211.188, a batch production and control record must be prepared for each batch of drug product. It must include, or refer to, the master batch record and document the actual conditions and results of each significant step in manufacturing. A companion regulation, 21 CFR 211.192, requires that all production and control records, including those for packaging and labeling, be reviewed and approved by the quality control unit to determine compliance with all established procedures before a batch is released or distributed.

Two documents sit at the center of the activity, and confusing them is a common early mistake.

The **master batch record** (sometimes called the master production record, master formula, or master formula record) defines what should happen: the formula, the procedures, the equipment, the processing parameters, and the in-process tests. It is a controlled document, approved before use, and changed only through [change control](/articles/change-control-validated-systems). For each batch, an exact copy of the relevant portions is reproduced for execution, and 21 CFR 211.186 sets out what the master record must contain.

The **executed batch record** (EBR), also called the production batch record, documents what actually happened: the materials used, lot numbers, actual values for each parameter, results of in-process tests, any deviations, and the signatures of the personnel who performed and checked each step.

The two must be consistent. Where they differ, that difference is either an authorized deviation or a data integrity problem. There is no third category. A reviewer who treats an unexplained difference as "probably fine" has missed the entire point of the review.

---

## What a complete batch record contains

A compliant batch record for a typical pharmaceutical manufacturing operation includes the following. The grouping below is a way to read a record, not a regulatory list, but every item maps back to the requirements in Part 211 Subpart J.

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

The thread running through all of these is the set of data integrity attributes summarized as [ALCOA-plus](/articles/alcoa-plus-deep-dive): each entry should be attributable, legible, contemporaneous, original, accurate, and (in the expanded form) complete, consistent, enduring, and available. A reviewer who keeps those attributes in mind has a built-in checklist for every field on the page.

---

## Who reviews a batch record and when

Review is not a single event at the end. It is a chain of checks, each catching a different class of error.

**During manufacturing:** Operators execute and self-check each step. In many operations, a second person verifies critical steps (weight checks, label reconciliation, critical additions) at the time of execution. Contemporaneous second checks catch errors while they are still cheap to fix, before the next step locks them in.

**In-process quality oversight:** In higher-risk operations, a quality or manufacturing supervisor reviews in-process records before the next stage begins. This is common in sterile operations and in cell and gene therapy manufacturing, where a single batch may equal a single patient dose and there is no opportunity to remake it.

**Post-manufacturing QA review:** This is the formal batch record review required by 21 CFR 211.192. Quality assurance reviews the complete executed batch record before a batch can be released. This review confirms that:
- All required entries are present
- All values are within specification
- All deviations are properly documented and resolved
- The record is attributable, legible, and internally consistent
- Release testing results are acceptable

**Final disposition and release:** In the United States, the quality unit makes the disposition decision. In the EU and other ICH regions, a Qualified Person (QP) certifies each batch before release under EU GMP Annex 16. The QP relies on the batch record review but is personally accountable for the certification, which is one reason the review documentation has to stand on its own and not live only in the reviewer's head.

A clear split of duties across these roles is part of a functioning quality system; the article on [roles and responsibilities in GxP](/articles/gxp-roles-responsibilities) covers how the quality unit's independence underpins all of it.

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
| 9.1 kg | 9% loss, near the limit | Confirm against historical range for this step |
| 7.2 kg | 28% loss, well outside range | Reject for explanation: clogged filter, failed transfer, line not rinsed, lost material |
| 10.0 kg, batch after batch | Exact match every time | Investigate: real processes vary; a perfect repeat suggests numbers are being made to fit |

Unexpected yield loss, consistent loss at the same step, or yield that is suspiciously perfect are all signals worth investigating. Reconciliation also matters for accountability: it forces you to account for all material, what entered the process, what came out, and what was discarded, so a diversion cannot hide in normal variation.

### Review in-process results in sequence

Do not just check that values are within specification. Check whether they make physical sense and whether any value changed unexpectedly between time points. A pH that drops sharply in the middle of a process step and then recovers to in-specification may indicate an undocumented operator intervention. A temperature that holds at exactly the setpoint with zero variation across an hour may indicate a sensor that is not actually reading.

For automated data capture from a distributed control system (DCS) or process historian, compare the electronic process data to the manual entries in the paper or electronic batch record. If they do not match, the discrepancy needs an explanation before the batch moves forward.

### Check for corrections

Every correction to a paper batch record must follow [good documentation practices](/articles/good-documentation-practices): single line through the error so the original stays legible, corrected value written nearby, initialed, and dated, with a reason where the procedure requires one. White-out, obliteration, erasure, and writing over the original are prohibited.

For electronic batch records, the audit trail captures all changes automatically. Review the audit trail for the batch, specifically looking for:
- Changes made after the batch was considered complete
- Changes to critical parameters or results
- Changes by users who were not involved in manufacturing the batch
- Bulk changes (multiple entries changed in a short time window)

How to read an audit trail efficiently, and what patterns signal trouble, is covered in [audit trail design and review](/articles/audit-trail-design-and-review).

---

## A worked review walkthrough

To make the technique concrete, here is how a reviewer might move through a single solid-dose batch record in practice.

1. **Frame the batch.** Read the batch number, product, and any holds or open events flagged at intake. Note the master record version in effect, and confirm it is the approved current version, not a superseded one.
2. **Pull the deviation list first.** Two minor deviations are open: a granulation hold time exceeded by 18 minutes, and a balance that was found out of calibration after a weighing step. The first has an impact assessment referencing a validated hold-time study; the second triggers a check of every weight taken on that balance since its last good calibration. The reviewer confirms both threads are closed before going further.
3. **Walk the material accountability.** Each active and excipient lot is traced from dispensing through reconciliation. One excipient lot number in the dispensing record does not match the number in the materials issue log. That is a stop. It is either a transcription error to be corrected per procedure, or a real material mix-up to be investigated.
4. **Reconcile yields step by step.** Granulation, compression, and coating each reconcile within range. Final yield ties to the in-process counts.
5. **Read the in-process and environmental data in time order**, comparing manual entries to the historian where one exists.
6. **Confirm attribution and second checks** on every step that requires them, and that no one signed as both performer and verifier on the same critical step.
7. **Review the release testing package** and confirm the Certificate of Analysis references match.
8. **Document the review itself**, including what was found and how each finding was resolved, so the disposition decision and any later QP certification rest on a visible record.

The point of the sequence is that deviations and material accountability come early, because they are most likely to stop the batch, and the reviewer never relies on "looks complete" as a finding.

---

## The electronic batch record difference

When manufacturing shifts from paper batch records to electronic batch records, typically integrated with a manufacturing execution system (MES) or DCS, the review process changes. The data integrity considerations specific to these platforms are covered in [MES, EBR, and SCADA data integrity](/articles/mes-ebr-scada-data-integrity).

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

The applicable expectations sit in 21 CFR Part 11 in the United States and in EU GMP Annex 11 in Europe; the practical mapping between them is in [Part 11 and Annex 11](/articles/21-cfr-part-11-eu-annex-11). The shorter version: an electronic record review is not lighter than a paper one, it is differently distributed, with more weight on configuration correctness and audit trail interpretation and less on legibility and arithmetic.

---

## Common batch record review failures

These are the patterns that recur in inspection findings and warning letters. None of them require an exotic process to occur; they happen in ordinary operations under ordinary pressure to release.

**1. Rubber stamp review.** The reviewer signs the batch record within minutes of receiving a record that should take much longer to examine, with no evidence of meaningful work. In an inspection, FDA investigators may ask reviewers how long they spend on a batch record and what they look for. A reviewer who cannot describe their process reveals that the review is a formality.

**2. Deviation documentation avoidance.** Small deviations, a process time that ran 10 minutes long, a temperature that exceeded the in-process limit by 0.2 degrees C, go undocumented because "they are within the range we have always accepted." If it is not in the procedure, it is a deviation. If the wider range is genuinely acceptable, change the procedure through change control to reflect the real control range, with data to support it.

**3. Incomplete yield reconciliation.** Yield is calculated but not reconciled against material balances or against the campaign history. Without true reconciliation, a material diversion or a quiet process drift can go undetected for many batches.

**4. Inconsistent reviewer standards.** Different QA reviewers apply different standards. What one approves as a minor documentation issue, another would reject. This inconsistency is itself a data integrity risk: it suggests the outcome depends on who reviews, not on documented criteria. Calibration sessions, where several reviewers review the same record and compare findings, are an effective fix.

**5. Post-release corrections.** A batch record is reviewed, approved, and the batch released. Then someone notices an error and corrects it after release. Post-release corrections are not prohibited, but they require justification, a new QA review, and documentation of why the error was not caught before release. A rising rate of them is a signal that the pre-release review is not working.

These failures rarely stay contained to one record. A pattern of weak review is read by inspectors as a [quality culture](/articles/quality-culture-di-failures) problem, and it shapes how the rest of the inspection goes.

---

## What makes a batch record unreviewable

Some batch records cannot be reviewed in their current state. A batch record review procedure should define the criteria for returning a record for correction before the QA review clock starts. Examples:

- Missing attribution on critical steps (no operator name or ID)
- Missing second check on a critical step that requires one
- Corrections made incorrectly (white-out, obliteration, illegible original)
- Deviation referenced in the record but no deviation record exists
- Unexplained blanks in required fields
- Values outside specification with no deviation or explanation

Returning a record for correction before review prevents the review from being completed with known deficiencies, and it keeps cycle-time metrics honest, because the clock should not run while the record is being made reviewable.

---

## Review by exception in automated manufacturing

In operations with complete automated data capture, reviewing every data point by hand is neither practical nor value-adding. Review by exception focuses reviewer attention on:

- Parameters that approached or exceeded limits
- Steps that took longer or shorter than expected
- Alarms that fired during the batch
- Manual interventions that overrode automated control
- Deviations or in-process holds

This is a risk-based approach in the spirit of [quality risk management](/articles/quality-risk-management) under ICH Q9. It does not eliminate the review requirement; it restructures it. Two conditions have to hold for it to be defensible. First, the exception criteria must be defined procedurally and justified, so that what is screened out was screened out on purpose, not by accident. Second, the system that generates the exception report must be validated, because the report is now part of the control. If the report logic silently drops a class of exceptions, the reviewer will never see what they were supposed to catch, and the gap can persist across an entire campaign before anyone notices.

---

## Minimum compliant baseline

For a small organization in early manufacturing, the floor looks like this:

1. Master batch record reviewed and approved before each batch
2. Executed batch record captures all required fields per 21 CFR 211.188
3. All deviations documented, root-caused, and impact-assessed before batch disposition
4. QA review completed and documented before batch release, per 21 CFR 211.192
5. Yield reconciliation calculated for each batch, with an explanation of any significant variance
6. Corrections in paper records made correctly: single line, initial, date, reason where required

---

## Better maturity state

For a commercial-stage operation, the target moves from compliant to capable:

- Electronic batch record with validated automated data capture and audit trail
- A formal batch record review procedure with defined review criteria and realistic time standards
- Review-by-exception capability with validated exception report generation
- Batch record trend review: not just per-batch review but periodic trending of yield, deviations, and in-process excursions across the campaign, feeding the [annual product review](/articles/annual-product-review-pqr)
- An operator training program that teaches what makes a batch record entry attributable, contemporaneous, and accurate, not just how to fill in the fields
- Batch record review metrics as a quality indicator: review cycle time, rejection rate, and deviation rate per batch, watched for drift over time rather than reported once and filed

The difference between the two states is not mainly technology. It is whether review is treated as a one-record-at-a-time gate or as a system that learns from its own output and gets tighter over time.

---

## References

- 21 CFR 211.186, Master production and control records
- 21 CFR 211.188, Batch production and control records
- 21 CFR 211.192, Production record review
- 21 CFR 211.68, Automatic, mechanical, and electronic equipment
- 21 CFR Part 11, Electronic Records; Electronic Signatures
- EU GMP Volume 4, Chapter 4, Documentation
- EU GMP Volume 4, Annex 11, Computerised Systems
- EU GMP Volume 4, Annex 16, Certification by a Qualified Person and Batch Release
- FDA Guidance: Data Integrity and Compliance With Drug CGMP, Questions and Answers (December 2018)
- ICH Q9, Quality Risk Management
- ICH Q10, Pharmaceutical Quality System
