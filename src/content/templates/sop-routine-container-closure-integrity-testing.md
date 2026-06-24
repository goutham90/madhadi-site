---
title: "SOP: Routine Container Closure Integrity Testing and Disposition"
description: "A plug-and-play SOP for routine CCIT: when to test, sampling, running a validated deterministic method, pass/fail disposition, failure handling, and records, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-24
docType: "SOP"
pillar: "sterility-microbiology"
relatedArticles: ["container-closure-integrity-testing"]
tags: ["ccit", "sop", "sterile-products", "annex-1", "sampling", "batch-release", "vacuum-decay"]
tier: "Intermediate"
---

This is a ready-to-use SOP for routine container closure integrity testing once a method is validated. Replace every `<<FILL: ...>>` placeholder with your specifics, set your document numbers and dates, and route it through your normal document control. A worked filled specimen follows the template. Verify each cited regulation against the current source before you rely on it. This content is educational and general, not legal or regulatory advice; adapt and verify it for your product and commitments.

## Document control header

| Field | Entry |
|---|---|
| Document title | Routine Container Closure Integrity Testing and Disposition |
| Document number | `<<FILL: SOP-ID, e.g. SOP-QC-031>>` |
| Version | `<<FILL: version>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. QC Manager>>` |
| Applies to | `<<FILL: products / lines / sites in scope>>` |

## 1. Purpose

Define how `<<FILL: COMPANY NAME>>` performs routine CCIT on `<<FILL: products in scope>>` using a validated deterministic method, and how results drive batch and stability decisions, so that container closure integrity is demonstrated across release, stability, and in-process monitoring.

## 2. Scope

Applies to routine CCIT for the products and packages listed in the header, covering 100 percent in-line testing for fusion-sealed products and sampled off-line testing for other formats. It relies on a method validated under `<<FILL: validation protocol ID>>` and does not cover that validation.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| QC analyst / line operator | Runs the validated method on the locked recipe, records results, segregates rejects |
| QC supervisor | Confirms sampling, reviews results, escalates failures |
| Manufacturing | Maintains in-line equipment, escalates in-line reject trends |
| Quality Assurance | Approves the sampling plan, dispositions failures, owns change control, approves CCIT in lieu of sterility |
| Microbiology | Supports investigations linking CCIT failures to sterility assurance |

## 4. When CCIT is required

| Trigger | Test mode | Reference |
|---|---|---|
| Fusion-sealed product (BFS, ampoules, parenteral bags) | 100 percent in-line by validated method | Annex 1 (2022) |
| Vialed / syringe routine release | In-line 100 percent and/or sampled off-line per risk | Site risk assessment |
| Stability time point (in lieu of sterility) | Sampled per stability protocol | FDA 2008 guidance |
| Container closure qualification, change control, investigation | Per the triggering protocol or investigation | Change control SOP |

## 5. Procedure

### 5.1 Confirm readiness

1. Confirm the method is validated for this product and package and the test recipe matches the locked, change-controlled recipe.
2. Confirm instrument calibration is current and the daily system suitability or known-defect check (where defined) passes before testing product.
3. Confirm the data system audit trail is enabled.

### 5.2 Determine the sample

1. For fusion-sealed product, test 100 percent in-line.
2. For sampled off-line CCIT, draw the sample per the approved statistical sampling plan in `<<FILL: sampling plan reference>>`. Record the plan, the sample size, and the basis. Do not use an ad hoc sample size for a batch decision.

### 5.3 Run the test

1. Load units per the validated fixturing.
2. Run the locked recipe (chamber pressures, dwell, test time, or scan parameters).
3. The system applies the validated signal threshold and returns pass or fail per unit.
4. Physically segregate any reject immediately and label it to prevent commingling.

### 5.4 Disposition

1. A passing population that meets the acceptance criteria (section 6) supports the batch or stability decision for the tested attribute.
2. Any failure is handled per section 5.5 before the batch is dispositioned.
3. Record the result against the batch or stability record.

### 5.5 Handle a failure

1. Do not retest to pass. A CCIT failure on a batch sample or a stability pull is an out-of-specification result.
2. Quarantine the affected units and, for a batch sample, hold the batch.
3. Open an investigation per `<<FILL: OOS / deviation SOP ID>>`. Determine whether the failure is a true integrity defect or an assignable test artifact, with evidence, before any conclusion.
4. QA dispositions the batch or stability result on the documented investigation outcome.

### 5.6 Record and review

1. Complete the CCIT test record (section 8) for every test event.
2. A second person reviews the result and the data per `<<FILL: data review SOP ID>>`.
3. QA approves the disposition. Retain the record for not less than `<<FILL: retention period>>`.

## 6. Acceptance criteria

A routine CCIT event is acceptable when all of the following are true:

- The validated recipe and locked signal threshold were used; calibration current; any system suitability check passed.
- The sample was 100 percent (fusion-sealed) or drawn per the approved statistical plan.
- All tested units pass, or every failure was segregated and routed to investigation with no retest-to-pass.
- The result is recorded, second-person reviewed, and QA-dispositioned.
- For CCIT in lieu of sterility, the method, sample size, and acceptance criterion meet the conditions in `<<FILL: stability / in-lieu plan reference>>`.

## 7. References

> EU GMP Annex 1, Manufacture of Sterile Medicinal Products (2022).
> USP General Chapter <1207> Package Integrity Evaluation, Sterile Products.
> FDA Guidance, Container and Closure System Integrity Testing in Lieu of Sterility Testing (2008).
> 21 CFR 211.94 (containers and closures); 21 CFR 211.165, 211.192 (testing and review).

Confirm the current version and clause numbers of each reference before issue.

## 8. Record generated: CCIT test record

| Field | Entry |
|---|---|
| Product / batch | `<<FILL>>` |
| Package and closure | `<<FILL>>` |
| Method and instrument | `<<FILL>>` |
| Recipe / threshold (locked ref) | `<<FILL>>` |
| Test mode | 100% in-line / sampled off-line |
| Sample size and basis | `<<FILL>>` |
| Units tested / passed / failed | `<<FILL>>` |
| Failures segregated | Yes / No |
| Investigation reference (if any) | `<<FILL or N/A>>` |
| Analyst (name, signature, date) | `<<FILL>>` |
| Reviewer (name, signature, date) | `<<FILL>>` |
| QA disposition (name, date) | `<<FILL>>` |

## 9. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 10. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (QA) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the CCIT test record completed for an example sampled off-line vacuum-decay test of a vialed sterile product at a stability pull. The numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Product / batch | Example Sterile Solution 50 mg/mL, batch 26B-047 |
| Package and closure | 10 mL Type I glass vial, 20 mm stopper, aluminum crimp |
| Method and instrument | Vacuum decay, VDLT-02 |
| Recipe / threshold (locked ref) | Recipe VD-VIAL-10, threshold per VAL-CCIT-001 |
| Test mode | Sampled off-line (12-month stability pull) |
| Sample size and basis | 20 units per stability protocol STB-26B-047, sterility-equivalent count |
| Units tested / passed / failed | 20 / 20 / 0 |
| Failures segregated | N/A (no failures) |
| Investigation reference (if any) | N/A |
| Analyst | J. Okafor, signed, 18 June 2026 |
| Reviewer | M. Singh, signed, 19 June 2026 |
| QA disposition | R. Gomez, integrity confirmed at 12 months, 19 June 2026 |

Had one unit failed, the analyst would have segregated it, the batch/stability result would have been treated as out of specification, and an investigation would have determined whether it was a true breach or an assignable artifact before QA dispositioned the time point. No retest-to-pass.

## Common inspection findings this SOP prevents

- Retesting a CCIT failure until it passes, with no record of the first failure.
- Off-line CCIT used for a batch decision with a sample size that has no statistical basis.
- Fusion-sealed product not subjected to 100 percent integrity testing.
- A CCIT failure handled outside the OOS/deviation system.
- Routine testing run on a recipe that drifted from the validated, change-controlled recipe.
- No second-person review of the result before disposition.

## How to adapt this SOP

1. Set your document number, owner, products, and method in the header and section 4.
2. Point section 5.2 at your approved statistical sampling plan and section 5.5 at your real OOS/deviation procedure.
3. If you run CCIT in lieu of sterility, reference your stability/in-lieu plan in section 6.
4. Replace the in-line/off-line split in section 4 with your actual risk-based decision per format.
5. Confirm every regulation in section 7 against the current published version before issue.
