---
title: "Batch Record Review: What It Is, What to Look For, and What Regulators Expect"
description: "A practical guide to GMP batch record review, the process, what makes a batch record complete, how to conduct a meaningful review, common failures, and how automated systems change the picture."
pubDate: 2026-06-03
tags: ["batch record", "GMP", "quality-assurance", "manufacturing", "data-integrity", "review"]
pillar: "quality-assurance"
tier: "Intermediate"
---

Batch record review is the quality oversight activity that stands between a completed manufacturing batch and a released pharmaceutical product. It's the last structured opportunity to identify execution errors, data integrity failures, or process deviations before product reaches patients.

Done well, batch record review catches problems. Done poorly, mechanically signing off a stack of pages without meaningful examination, it becomes a regulatory liability rather than a quality control.

---

## What a batch record is

Under 21 CFR 211.188, a batch production and control record must be prepared for each batch of drug product. It must include, or refer to, the master batch record and document the actual conditions and results of each significant step in manufacturing.

The **master batch record** (sometimes called the master formula or master formula record) defines what should happen: the formula, the procedures, the equipment, the processing parameters, and the in-process tests.

The **executed batch record** (EBR) or production batch record documents what actually happened: the materials used, lot numbers, actual values for each parameter, results of in-process tests, any deviations, and the signatures of the personnel who performed and checked each step.

The two must be consistent. Where they differ, that difference is either an authorized deviation or a data integrity problem.

---

## What a complete batch record contains

A compliant batch record for a typical pharmaceutical manufacturing operation includes:

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
- Step-by-step record of process execution with actual values (temperatures, pressures, times, agitation speeds, pH measurements)
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
- Impact assessment, does the deviation affect product quality?

**Post-processing:**
- Results of release testing
- References to Certificate of Analysis
- Final yield and reconciliation against theoretical yield

---

## Who reviews a batch record and when

**During manufacturing:** Operators execute and self-check each step. In some operations, a second person verifies critical steps (weight checks, label reconciliation, critical additions) at the time of execution.

**In-process quality oversight:** In higher-risk operations, a Quality or Manufacturing Supervisor reviews in-process records before the next stage begins. This is common in sterile operations and cell therapy manufacturing.

**Post-manufacturing QA review:** This is the formal batch record review. Quality Assurance reviews the complete executed batch record before a batch can be released. This review confirms that:
- All required entries are present
- All values are within specification
- All deviations are properly documented and resolved
- The record is attributable, legible, and internally consistent
- Release testing results are acceptable

**Pharmacist release (in some operations):** For certain sterile products, a licensed pharmacist performs an additional review layer.

---

## How to conduct a meaningful batch record review

Batch record review is not reading every line to confirm signatures are present. That's document verification. Review means looking for what might be wrong.

### Start with the deviations

Check whether any deviations are recorded in the batch record. If there are deviations, confirm:
- Each is formally captured in the deviation management system (or the batch record itself, per procedure)
- The root cause assessment is complete and reasonable
- The impact assessment is documented, does the deviation affect the batch? This determination must be justified, not assumed
- The deviation is closed (or the batch is being held pending closure)

More importantly: if there are **no** deviations in a complex manufacturing batch, question whether the deviation threshold is appropriately sensitive. Zero-deviation batches in a complex process can indicate that the team is not documenting minor deviations, which is itself a data integrity indicator.

### Check for internal consistency

Cross-reference values that appear in multiple places:
- If a temperature is recorded at time T, does it match the in-process trend or the automated data capture?
- If a weight is transferred between steps, do the yield calculations add up?
- If an operator signed at 14:30 for step 5, are steps 3 and 4 signed by someone before that time?

Inconsistencies in timestamps, values, or sequences within a batch record are data integrity indicators, not just minor record errors. Every inconsistency needs an explanation.

### Evaluate yield and reconciliation

Yield reconciliation catches process problems that no other control catches. If theoretical yield is 10 kg and actual yield is 9.1 kg, where did 900g go? That's a normal manufacturing loss range. But if yield is 7.2 kg, that requires an explanation, a filter clogged, a transfer failed, a line was not fully rinsed, or material was lost that shouldn't have been.

Unexpected yield loss, consistent yield loss at the same step, or yield that is suspiciously perfect (matching theoretical yield exactly, batch after batch) are all signals worth investigating.

### Review in-process results in sequence

Don't just check that values are within specification, check whether they make physical sense and whether any values changed unexpectedly between time points. A pH that drops sharply in the middle of a process step and then recovers to in-specification may indicate an operator intervention that isn't documented.

For automated data capture (DCS, historian), compare the electronic process data to the manual entries in the paper or electronic batch record. If they don't match, the discrepancy needs an explanation.

### Check for corrections

Every correction to a paper batch record must be made in a specific way: single line through the error, corrected value written nearby, initialed, and dated. White-out, obliteration, and erasure are prohibited.

For electronic batch records, the audit trail captures all changes automatically. Review the audit trail for the batch, specifically looking for:
- Changes made after the batch was considered complete
- Changes to critical parameters or results
- Changes by users who weren't involved in manufacturing the batch
- Bulk changes (multiple entries changed in a short time window)

---

## The electronic batch record difference

When manufacturing shifts from paper batch records to electronic batch records (EBR), typically integrated with MES or DCS, the review process changes.

**What becomes easier:**
- Automated data capture eliminates manual transcription errors
- In-process limits can be enforced in real time (the system won't let you proceed if a critical parameter is out of range)
- Calculations are performed automatically, reducing arithmetic errors
- Review can include automated exception reports instead of reading every line

**What becomes more complex:**
- The reviewer must understand the audit trail and know how to interpret it
- Automated enforcement can create a false sense of security, if the limits are wrong, the system enforces the wrong thing
- System failures create gaps in the electronic record that need to be managed
- Integration interfaces between systems introduce data integrity risk at transfer points (see the automation validation article)

**What regulators focus on in EBR review:**
- Were the process parameter limits in the EBR correct for this batch and product?
- Were any fields entered or modified manually that should have been automated?
- What does the audit trail show for the batch?
- Are there any time gaps in automated data capture that need explanation?

---

## Common batch record review failures

**1. Rubber stamp review.** The reviewer signs the batch record within minutes of receiving it, with no evidence of meaningful examination. In an inspection, FDA investigators may ask reviewers how long they spend reviewing a batch record and what they look for. A reviewer who can't describe their process reveals that the review is a formality.

**2. Deviation documentation avoidance.** Small deviations, a process time that ran 10 minutes long, a temperature that exceeded the in-process limit by 0.2°C, are not documented because "they're within the range we've always accepted." If it's not in the procedure, it's a deviation. If it's always within that range, change the procedure to reflect the real control range.

**3. Incomplete yield reconciliation.** Yield is calculated but not reconciled against the previous batch's output or against material balances. Reconciliation requires accounting for all material, what entered the process, what came out, and what was discarded. Without reconciliation, a material diversion could go undetected.

**4. Inconsistent reviewer standards.** Different QA reviewers apply different standards. What one reviewer approves as a minor documentation issue, another would reject. This inconsistency is itself a data integrity risk, it suggests the review process depends on who's reviewing, not on documented criteria.

**5. Post-release corrections.** A batch record is reviewed, approved, and the batch released. Then someone notices an error and corrects it after release. Post-release corrections are not prohibited, but they require justification, a new QA review, and documentation of why the error wasn't caught before release.

---

## What makes a batch record unreviewable

Some batch records cannot be reviewed in their current state. A batch record review procedure should define the criteria for returning a batch record for correction before the QA review clock starts. Examples:

- Missing attribution on critical steps (no operator name or ID)
- Missing second check on a critical step requiring it
- Corrections made incorrectly (white-out, obliteration, illegible original)
- Deviation referenced but no deviation record exists
- Unexplained blanks in required fields
- Values outside specification with no deviation or explanation

Returning a batch record for correction before review prevents the review from being completed with known deficiencies.

---

## Review by exception in automated manufacturing

In manufacturing operations with complete automated data capture, reviewing every data point manually is not always practical or value-adding. Review by exception focuses reviewer attention on:

- Parameters that approached or exceeded limits
- Steps that took longer or shorter than expected
- Alarms that fired during the batch
- Manual interventions that overrode automated control
- Deviations or in-process holds

This is a risk-based approach to review, it does not eliminate the review requirement; it restructures it. The exception criteria must be defined procedurally and the system generating the exception report must be validated.

---

## Minimum compliant baseline

For a small biotech in early manufacturing:

1. Master batch record reviewed and approved before each batch
2. Executed batch record captures all required fields per 21 CFR 211.188
3. All deviations documented, root-caused, and impact-assessed before batch disposition
4. QA review completed and documented before batch release
5. Yield reconciliation calculated for each batch with explanation of any significant variance
6. Corrections in paper records made correctly (single line, initial, date)

---

## Better maturity state

For a commercial-stage operation:

- Electronic batch record with validated automated data capture and audit trail
- Formal batch record review procedure with defined review criteria and time standards
- Review by exception capability with validated exception report generation
- Batch record trend review: not just per-batch review but periodic trending of yield, deviations, in-process excursions across the batch campaign
- Operator training program that includes what makes a batch record entry attributable, contemporaneous, and accurate
- Batch record review metrics as a quality indicator (review cycle time, rejection rate, deviation rate per batch)

---

## References

- 21 CFR 211.188, Batch production and control records
- 21 CFR 211.192, Production record review
- 21 CFR 211.68, Automatic, mechanical, and electronic equipment
- EU GMP Volume 4, Chapter 4, Documentation
- EU GMP Volume 4, Annex 11, Computerised systems
- FDA Guidance: Data Integrity and Compliance With Drug CGMP (December 2018)
- ICH Q10, Pharmaceutical Quality System
