---
title: "Protocol: Container Closure Integrity Test Method Validation"
description: "A plug-and-play validation protocol for a deterministic CCIT method: MALL basis, characterized positive and negative controls, the probability-of-detection study, acceptance criteria, and product compatibility, with a filled specimen."
pubDate: 2026-06-24
docType: "Protocol"
pillar: "sterility-microbiology"
relatedArticles: ["container-closure-integrity-testing"]
tags: ["ccit", "method-validation", "usp-1207", "vacuum-decay", "hvld", "annex-1", "sterile-products"]
tier: "Advanced"
---

This is a ready-to-use validation protocol for a deterministic container closure integrity test (CCIT) method. Replace every `<<FILL: ...>>` placeholder with your specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template. Verify each cited reference against the current source before you rely on it. This content is educational and general; adapt and verify it for your product, package, and regulatory commitments.

## Approval page

| Field | Entry |
|---|---|
| Document title | Container Closure Integrity Test Method Validation, `<<FILL: method, e.g. Vacuum Decay>>` |
| Document number | `<<FILL: PROT-ID, e.g. VAL-CCIT-001>>` |
| Version | `<<FILL: version>>` |
| Effective date | `<<FILL: effective date>>` |
| Product / package | `<<FILL: product name, dose, container, closure>>` |
| Supersedes | `<<FILL: prior version or "New">>` |

| Approval | Name | Signature | Date |
|---|---|---|---|
| Author (Validation) | `<<FILL>>` | | |
| Container/Packaging SME | `<<FILL>>` | | |
| Microbiology | `<<FILL>>` | | |
| Quality Assurance | `<<FILL>>` | | |

## 1. Objective

Demonstrate that the `<<FILL: method>>` CCIT method reliably distinguishes integral units of `<<FILL: product / package>>` from units carrying characterized leaks at and below the maximum allowable leakage limit (MALL), is repeatable across operators and runs, and does not degrade the product. The validated test recipe and signal threshold are then locked under change control for routine use.

## 2. Scope

This protocol covers method validation for the `<<FILL: container format>>` filled with `<<FILL: liquid / lyophilized / suspension>>` product. It does not cover instrument installation and operational qualification, which are addressed in `<<FILL: IQ/OQ protocol ID>>`, nor routine testing, which is governed by `<<FILL: routine CCIT SOP ID>>`.

## 3. System and method description

| Item | Detail |
|---|---|
| Method and principle | `<<FILL: e.g. Vacuum decay, pressure rise in an evacuated test chamber>>` |
| Instrument | `<<FILL: make / model / asset ID>>` |
| Deterministic or probabilistic | Deterministic (per USP <1207> preference) |
| Non-destructive | `<<FILL: Yes / No>>` |
| Critical quality attributes protected | `<<FILL: sterility; headspace O2; moisture; vacuum>>` |
| Test recipe under study | `<<FILL: chamber pressures, dwell time, test time, fixturing>>` |

## 4. Prerequisites

1. Instrument IQ/OQ complete and approved (`<<FILL: protocol ID>>`).
2. Calibration of pressure, flow, or voltage sensors current.
3. Characterized control units available (section 6).
4. Validated data acquisition, with audit trail enabled, per `<<FILL: CSV / Part 11 reference>>`.
5. Trained analysts (`<<FILL: training record reference>>`).

## 5. Responsibilities

| Role | Responsibility |
|---|---|
| Validation / engineering | Executes the protocol, records raw data, builds the detection curve, drafts the report |
| Container / packaging SME | Owns the MALL rationale and method selection, approves the controls design |
| Microbiology | Provides the microbial ingress basis for the sterility-driven MALL |
| Quality Assurance | Approves protocol and report, the acceptance criteria, and the locked recipe; dispositions deviations |

## 6. Maximum allowable leakage limit (MALL) basis

State the critical attribute, the leak size that threatens it, and the resulting MALL. For a sterility-driven limit, anchor to the leak size at which microbial ingress becomes a real risk; published correlation work places the onset of liquid-borne microbial ingress near a 0.2 to 0.3 micron orifice, and USP <1207> identifies a conservative limit for rigid sterile packaging near 0.2 micron, equivalent to a helium leak rate on the order of 6x10^-6 std cc/s. Where the limiting attribute is headspace oxygen or moisture, set the MALL from how large a leak the headspace tolerates before the attribute degrades over shelf life.

| Critical attribute | Leak size that threatens it | MALL set | Basis |
|---|---|---|---|
| `<<FILL: sterility>>` | `<<FILL: sub-micron>>` | `<<FILL: value>>` | `<<FILL: correlation / USP <1207>>>` |
| `<<FILL: headspace O2>>` | `<<FILL: ~5 micron equiv>>` | `<<FILL: value>>` | `<<FILL: shelf-life model>>` |

## 7. Controls

| Control | Description | n | Characterization |
|---|---|---|---|
| Negative (integral) | Representative sealed units | `<<FILL: e.g. 30>>` | Confirmed integral, establishes no-leak baseline |
| Positive, size 1 | Laser-drilled micro-hole | `<<FILL: e.g. 2 micron>>`, n=`<<FILL>>` | Certified hole diameter, filled with actual product |
| Positive, size 2 | Laser-drilled micro-hole | `<<FILL: 5 micron>>`, n=`<<FILL>>` | Certified, product-filled |
| Positive, size 3 | Laser-drilled micro-hole | `<<FILL: 10 micron>>`, n=`<<FILL>>` | Certified, product-filled |
| Positive, size 4 | Laser-drilled micro-hole or calibrated capillary | `<<FILL: 15-20 micron>>`, n=`<<FILL>>` | Certified or helium-characterized |

Use certified laser-drilled micro-holes or calibrated capillaries as the anchor controls because they give a known, reproducible, traceable defect. Defects made by hand support but do not anchor the validation.

## 8. Test cases

| TC ID | Test | Steps | Expected result | Actual | Pass/Fail | Tester / Date |
|---|---|---|---|---|---|---|
| TC-01 | Negative control baseline | Run all integral units on the recipe | All pass; signal within no-leak distribution | | | |
| TC-02 | Detection at each hole size | Run each positive-control population | Detection rate recorded per size; reliable detection at and above the MALL leak size | | | |
| TC-03 | Detection curve / threshold | Plot detection rate vs leak size; fix the signal threshold that separates the MALL-size defects from integral units | Threshold below MALL with margin; documented | | | |
| TC-04 | Repeatability | Repeat across `<<FILL: runs / days>>` | Consistent calls; no drift | | | |
| TC-05 | Reproducibility | `<<FILL: 2+>>` operators (and instruments where relevant) | No operator effect on pass/fail | | | |
| TC-06 | Robustness | Vary fill level, headspace, temperature across the expected range | Performance holds | | | |
| TC-07 | Product compatibility (energetic methods only, e.g. HVLD) | Assay, sub-visible particles, oxidation markers before and after exposure | No degradation attributable to the test | | | |
| TC-08 | False-reject rate | Re-test the integral population | False rejects at or below the pre-agreed rate | | | |

## 9. Acceptance criteria

The method is validated when all of the following hold:

- All negative (integral) controls pass; false-reject rate at or below `<<FILL: rate>>`.
- Characterized defects at and above the MALL leak size are detected reliably (typically 100 percent at the MALL leak size).
- The probability-of-detection curve confirms the reliable detection threshold sits at or below the MALL with margin; the sub-micron sterility limit, where applicable, is demonstrated through the helium leak-rate correlation rather than the routine curve.
- Results are repeatable across runs and reproducible across operators and instruments.
- Performance holds across the fill, headspace, and temperature range.
- For energetic methods, product compatibility is demonstrated.
- The validated test recipe and signal threshold are defined and placed under change control.

## 10. Deviation handling

Record any departure from this protocol on a deviation record per `<<FILL: deviation SOP ID>>`, assess impact on the validation conclusion, and obtain QA disposition before proceeding. A control that behaves unexpectedly (an integral unit failing, a defect passing) is investigated before the data is used.

## 11. Summary and conclusion

Summarize the detection curve, the locked threshold, the repeatability and reproducibility outcome, the robustness range, and the product-compatibility result. State the validated method status and the conditions of use (sample plan, attribute coverage, the MALL the method is fit against). Route the report through the approval page roles.

## 12. References

> USP General Chapter <1207> Package Integrity Evaluation, Sterile Products (and <1207.1>, <1207.2>, <1207.3>).
> EU GMP Annex 1, Manufacture of Sterile Medicinal Products (2022).
> FDA Guidance, Container and Closure System Integrity Testing in Lieu of Sterility Testing as a Component of the Stability Protocol for Sterile Products (2008).
> 21 CFR 211.94 (drug product containers and closures).
> ICH Q1A(R2) Stability Testing; ICH Q9 Quality Risk Management.

Confirm the current version and clause numbers of each reference before issue. USP, ICH, and ISO documents are copyrighted; cite by number and title and describe them in your own words rather than pasting their text.

## 13. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

---

## Filled specimen

The following shows TC-02 and TC-03 completed for an example 10 mL liquid-filled vial of a conductive sterile biologic with a nitrogen overlay, validated by HVLD, with headspace oxygen analysis added at stability time points. The numbers are illustrative; replace them with your own.

**MALL basis:** sterility-driven MALL is sub-micron (microbial ingress onset near 0.2 to 0.3 micron, anchored by helium correlation); oxygen-driven MALL set near a 5 micron equivalent leak from the shelf-life oxygen model.

| Hole size (micron) | n | Detected (failed) | Detection rate |
|---|---|---|---|
| 0 (integral) | 30 | 0 | 0% (correct: all pass) |
| 2 | 30 | 27 | 90% |
| 5 | 30 | 30 | 100% |
| 10 | 30 | 30 | 100% |
| 15 | 30 | 30 | 100% |

**Interpretation (TC-03):** reliable detection from 5 microns; the 2 micron result marks the lower edge of capability. The oxygen-driven MALL sits at or below 5 microns, so the routine HVLD method is fit against that attribute, and the signal threshold is fixed where the 5 micron defects separated cleanly from integral units. The sub-micron sterility MALL is demonstrated through the helium leak-rate correlation done in method development, not through this routine curve. Product compatibility (TC-07) showed no oxidation or assay shift after HVLD exposure.

## Common inspection findings this protocol prevents

- No MALL, or a MALL with no basis, so the acceptance limit floats with no link to product risk.
- Positive controls made by hand with no measured leak rate, so the claimed sensitivity is unverifiable.
- Sensitivity demonstrated only at large holes (for example 20 micron) while the relevant MALL is far tighter.
- No probability-of-detection curve in the report.
- Energetic method (HVLD) applied to a sensitive biologic with no product-compatibility data.
- Validated on a surrogate rather than the actual product and package.
- Test recipe parameters drifting on the instrument with no revalidation.

## How to adapt this protocol

1. Set your document number, product, package, and method in the approval page and section 3.
2. Complete the MALL basis (section 6) from your critical attributes before designing controls.
3. Buy certified laser-drilled micro-hole standards and fill them with the actual product.
4. Size each control population (section 7) to support the detection-rate claim you need.
5. Add or remove test cases to match the method (drop TC-07 for non-energetic methods; add a conductivity confirmation case for HVLD).
6. Confirm every reference in section 12 against the current published version before issue.
