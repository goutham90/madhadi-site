---
title: "Validation Deviation / Discrepancy Record"
description: "A plug-and-play record for documenting, classifying, investigating, and resolving deviations and discrepancies raised during qualification and validation, with a deviation log, a filled specimen, and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Record"
pillar: "csv-csa"
relatedArticles: ["writing-validation-protocols-and-reports", "validation-test-failure-management"]
tags: ["validation deviation", "discrepancy", "csv", "test failure", "investigation", "computer system validation", "gmp"]
tier: "Intermediate"
---

This is a ready-to-use validation deviation record. A deviation here means any departure from a validation protocol: a test step that failed, an actual result that did not match the expected result, a step that could not be executed as written, a protocol error found during execution, or any unplanned event affecting the validation. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your objective evidence, and route the record through your normal review and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Record title | Validation Deviation / Discrepancy Record |
| Deviation number | `<<FILL: VD-ID, e.g. VAL-DEV-2026-017>>` |
| Parent protocol number and title | `<<FILL: protocol ID and title, e.g. IQ/OQ-LIMS-004>>` |
| System / equipment / process | `<<FILL: system name and ID>>` |
| Validation phase | IQ / OQ / PQ / UAT / `<<FILL: other>>` |
| Test case / step reference | `<<FILL: TC and step number where the deviation occurred>>` |
| Date observed | `<<FILL: date>>` |
| Raised by (name, role) | `<<FILL>>` |
| Status | Open / Under investigation / Resolved / Closed |

## 1. Purpose of this record

This record captures a single deviation or discrepancy found during validation, classifies its severity, assesses its impact on the validation conclusion, documents the investigation and root cause, records the resolution, and links to any retest. One record covers one deviation. Do not bundle unrelated deviations into one record, and do not edit the original protocol page to make a failure disappear. The original observation stays as recorded, and this record carries the explanation.

## 2. Deviation description

Describe exactly what happened, in fact-only terms, before any interpretation. State what was expected, what was actually observed, and where in the protocol it occurred. Attach the objective evidence (screenshot, printout, raw data, photo) and give it an attachment number.

| Field | Entry |
|---|---|
| Test objective | `<<FILL: what this step was meant to demonstrate>>` |
| Expected result (per protocol) | `<<FILL: the documented acceptance criterion / expected result>>` |
| Actual result observed | `<<FILL: what actually happened, fact only, with values>>` |
| Conditions at time of observation | `<<FILL: software version, configuration, user role, data set, environment>>` |
| Objective evidence attached | `<<FILL: attachment number(s) and description>>` |
| Reproducible? | Yes / No / Not yet tested |

## 3. Immediate actions

State what was done at the point of discovery to contain the situation and preserve evidence. Stopping a test, marking a step "see deviation VD-xxx", and quarantining the affected configuration or data are common immediate actions. Immediate actions are containment only; they are not the root-cause fix.

| Field | Entry |
|---|---|
| Immediate action taken | `<<FILL: e.g. testing paused, step annotated, evidence captured, config frozen>>` |
| Affected records / data quarantined | `<<FILL: yes/no and what>>` |
| Notified to (name, role, date) | `<<FILL: validation lead and QA>>` |

## 4. Classification

Classify the deviation by its effect on the validated state, on data integrity, and on product or patient. Use the table below as the default rule set and record the basis for the level you chose. Classification drives the depth of the investigation and the approvals required, so it is set by QA, not by the tester alone.

| Class | Definition | Typical examples | Investigation depth |
|---|---|---|---|
| Critical | The deviation, if unresolved, would invalidate the validation, allow defective product, or compromise data integrity, patient safety, or a regulatory commitment. | A security control that does not work; an audit trail that does not capture changes; a calculation that returns a wrong GxP result; data loss. | Full root cause analysis, impact assessment, QA approval, often a CAPA. |
| Major | A real failure of a requirement or test that does not by itself invalidate the system but must be corrected and re-tested before release. | A required field that accepts an invalid value; a report that mislabels a column; a role that can perform an action it should not. | Documented root cause, corrective action, retest. |
| Minor | A discrepancy that does not affect the function, the requirement, or the data, and that does not need a system change to resolve. | A protocol typo in an expected value; a screenshot label cosmetic mismatch; a documentation gap with no functional effect. | Explanation and justification; correction of the protocol record. |

| Field | Entry |
|---|---|
| Classification assigned | Critical / Major / Minor |
| Basis for classification | `<<FILL: why this level, against the definitions above>>` |
| Data integrity affected? | Yes / No, and how |
| Patient / product impact possible? | Yes / No, and how |
| Classified by (QA, name, date) | `<<FILL>>` |

## 5. Impact on the validation

State whether the deviation affects only the failed step or extends to other test cases, requirements, the traceability matrix, or the overall validation conclusion. A deviation in one function can invalidate every test that depends on that function, so the scope is assessed deliberately, not assumed to be local.

| Field | Entry |
|---|---|
| Test cases affected | `<<FILL: this TC only, or list all dependent TCs>>` |
| Requirements affected (URS/FRS IDs) | `<<FILL: requirement IDs, or none>>` |
| Other systems / interfaces affected | `<<FILL: upstream/downstream, or none>>` |
| Effect on overall validation conclusion | `<<FILL: none / conditional / blocks release until resolved>>` |
| Can validation proceed in parallel? | Yes / No, with rationale |

## 6. Investigation and root cause

Investigate to a verified root cause, not a restated symptom. "The test failed" is a symptom; "the date-format setting was left at the default and the field rejected the regional format" is a root cause. Record the method used (for example the five-whys or a fishbone) and the evidence that confirms the cause.

| Field | Entry |
|---|---|
| Investigation method | `<<FILL: e.g. five-whys, fishbone, log review>>` |
| Investigation summary | `<<FILL: what was examined and what it showed>>` |
| Root cause category | Software defect / Configuration error / Protocol error / Test data error / Environment or infrastructure / Human error / Other |
| Root cause statement | `<<FILL: the verified cause, specific and evidenced>>` |
| Evidence supporting root cause | `<<FILL: attachment number(s)>>` |

## 7. Resolution and corrective action

Record what was changed to resolve the deviation and, where the root cause could recur, the corrective action to prevent recurrence. A protocol error is resolved by a controlled protocol correction or addendum, not by overwriting the page. A software or configuration defect is resolved through change control, with the change reference recorded here.

| Field | Entry |
|---|---|
| Resolution type | Software fix / Configuration change / Protocol correction or addendum / Test data correction / Justify-as-acceptable / Other |
| Resolution description | `<<FILL: exactly what was changed and by whom>>` |
| Change control reference (if a system change) | `<<FILL: CR number or N/A>>` |
| Protocol addendum reference (if protocol changed) | `<<FILL: addendum number or N/A>>` |
| CAPA reference (if recurrence prevention needed) | `<<FILL: CAPA number or N/A>>` |
| Justification (if accepted without change) | `<<FILL: scientific/technical rationale, QA-approved, or N/A>>` |

## 8. Retest

A Critical or Major deviation is not closed until the corrected condition is re-tested and passes against the original acceptance criterion. Reference the retest here. The retest is executed under the same protocol or a controlled addendum, with its own evidence.

| Field | Entry |
|---|---|
| Retest required? | Yes / No (No is allowed only for Minor with documented rationale) |
| Retest reference | `<<FILL: retest TC/step or addendum execution reference>>` |
| Retest executed by (name, date) | `<<FILL>>` |
| Retest result | Pass / Fail (a fail reopens or raises a new deviation) |
| Retest evidence attached | `<<FILL: attachment number(s)>>` |
| Regression check (if a fix could affect other functions) | `<<FILL: scope re-tested, or N/A>>` |

## 9. Acceptance criteria for closing this record

This record may be closed only when all of the following are true:

- The deviation description, classification, and impact assessment are complete and consistent.
- The root cause is verified and evidenced, not a restated symptom.
- The resolution is implemented, with change control or protocol addendum referenced where applicable.
- For Critical and Major deviations, the retest is executed and passed against the original acceptance criterion.
- The effect on the overall validation conclusion is stated and accepted by QA.
- All objective evidence is attached and legible.

## 10. References

> 21 CFR 211.100 and 211.192 (production controls and investigation of discrepancies).
> 21 CFR Part 11 (electronic records and signatures).
> EU GMP Annex 11 (Computerised Systems) and Annex 15 (Qualification and Validation), 2015 revision.
> 21 CFR Part 820 (QMSR, effective 2 Feb 2026, incorporating ISO 13485:2016 by reference) for device software.
> ISO 13485:2016 (clause 8.5 on corrective and preventive action) for medical devices.
> IEC 62304 for medical device software lifecycle, where applicable.
> GAMP 5 (Second Edition) for the validation lifecycle and handling of test discrepancies.
> ICH Q9 (Quality Risk Management) for the risk basis of classification.
> FDA Computer Software Assurance guidance (finalized 24 Sep 2025) for the risk-based testing context.

Confirm the current version and clause numbers of each reference before issue.

## 11. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Raised by (tester / executor) | `<<FILL>>` | | |
| Investigation owner (validation lead) | `<<FILL>>` | | |
| System / process owner | `<<FILL>>` | | |
| Reviewer (QA) | `<<FILL>>` | | |
| Approver (Quality / Validation Head) | `<<FILL>>` | | |

---

## Validation deviation log (register)

Maintain one running log per protocol or per validation project so an inspector can see, at a glance, every deviation raised, its class, and its disposition. The individual records above are the detail; this log is the index.

| Dev no. | Date | Protocol / phase | Test case / step | Short description | Class | Root cause category | Resolution / change ref | Retest result | Status |
|---|---|---|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | C/Maj/Min | `<<FILL>>` | `<<FILL>>` | Pass/Fail/NA | Open/Closed |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | C/Maj/Min | `<<FILL>>` | `<<FILL>>` | Pass/Fail/NA | Open/Closed |

---

## Filled specimen

The following shows the record completed for an example deviation found while testing a laboratory information management system. The company, system, and numbers are illustrative; replace them with your own.

### Header and description

| Field | Entry |
|---|---|
| Deviation number | VAL-DEV-2026-017 |
| Parent protocol | OQ-LIMS-004, Operational Qualification of the LIMS, v1.0 |
| System | Laboratory Information Management System, instance LIMS-PROD-MIRROR |
| Validation phase | OQ |
| Test case / step | TC-022, step 6 (result entry rounding) |
| Date observed | 11 June 2026 |
| Raised by | A. Patel, Validation Analyst |
| Status | Closed |

| Field | Entry |
|---|---|
| Test objective | Confirm the LIMS rounds a calculated assay result to the configured 1 decimal place per the URS. |
| Expected result | A raw value of 98.45 percent is stored and displayed as 98.5 percent (round half up). |
| Actual result observed | The value was stored and displayed as 98.4 percent (round half to even was active). |
| Conditions | LIMS build 7.2.1, rounding profile "default", analyst role, assay method AM-12. |
| Objective evidence | Attachment 1: screenshot of result record; Attachment 2: configuration export of rounding profile. |
| Reproducible? | Yes, reproduced on three values. |

### Classification, impact, investigation

| Field | Entry |
|---|---|
| Classification | Major |
| Basis | A required calculation rule (URS-LIMS-031) is not met; the result could be reported one digit low, but no result had yet been released from this mirror, so not Critical. |
| Data integrity affected? | No record altered; the rule itself was wrong. |
| Patient / product impact possible? | None yet; mirror instance, no live disposition. |
| Test cases affected | TC-022 and TC-023 (both exercise the rounding rule). TC-024 onward unaffected. |
| Requirements affected | URS-LIMS-031 (rounding convention). |
| Effect on validation conclusion | Blocks the rounding-related test cases until corrected and re-tested; remaining OQ proceeded in parallel. |
| Investigation method | Configuration review plus five-whys. |
| Root cause category | Configuration error. |
| Root cause statement | The rounding profile was deployed with the vendor default "round half to even" rather than the "round half up" specified in URS-LIMS-031; the configuration spec did not call out the rounding mode, so it was never changed from default. |

### Resolution and retest

| Field | Entry |
|---|---|
| Resolution type | Configuration change. |
| Resolution description | Rounding profile set to "round half up" by the system administrator under change control; configuration specification updated to state the required rounding mode explicitly. |
| Change control reference | CR-LIMS-2026-058. |
| CAPA reference | CAPA-2026-041 (add rounding mode to the configuration verification checklist for all future deployments). |
| Retest required? | Yes. |
| Retest reference | TC-022 and TC-023 re-executed under OQ-LIMS-004 addendum 1. |
| Retest executed by | A. Patel, 13 June 2026. |
| Retest result | Pass: 98.45 stored and displayed as 98.5; verified on three boundary values. |
| Regression check | TC-024 to TC-027 (other calculations) re-run, no effect. |

In this example the tester recorded the failure as fact, preserved the original protocol page, classified it Major because the rule was wrong but nothing had been released, traced it to a default configuration that the spec never overrode, fixed it through change control, raised a CAPA so the gap could not recur on the next deployment, and re-tested against the original acceptance criterion before closing. That sequence, observation to classification to impact to verified root cause to controlled fix to retest, is exactly what a reviewer expects to see.

## Common inspection findings this record prevents

- A failed test step crossed out or overwritten on the original protocol page so the failure is invisible, with no deviation record.
- Deviations described as "test failed, see retest" with no root cause, so the cause could recur undetected.
- A root cause that just restates the symptom ("the system rounded incorrectly") instead of the verified cause (a default configuration the spec never set).
- Classification assigned by the tester alone, with QA never reviewing severity, and Critical issues handled as if Minor.
- Impact assessed only on the failed step, so dependent test cases were passed even though the function they relied on was broken.
- A Critical or Major deviation closed with no retest, or retested against a quietly changed acceptance criterion rather than the original one.
- A system change made to fix a deviation with no change control reference, so the validated state was altered uncontrolled.
- No deviation log, so an inspector cannot see how many failures arose during validation or how they were dispositioned.

## How to adapt this record

1. Set your deviation numbering scheme, parent protocol reference, and validation phase in the header.
2. Tune the classification table in section 4 to your own severity definitions and QMS terminology, keeping the link between class and investigation depth.
3. Point the cross-references in sections 6 and 7 to your real change control, CAPA, and protocol addendum procedures.
4. Decide your retest rule for Minor deviations and state it, so testers know when a retest is and is not required.
5. Keep one running deviation log per protocol or project and reconcile it against the individual records before issuing the validation report.
6. Confirm every regulation in section 10 against the current published version before issue.
