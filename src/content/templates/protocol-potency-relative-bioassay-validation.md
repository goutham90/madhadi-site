---
title: "Protocol: Relative Potency Bioassay Validation (ICH Q2(R2))"
description: "A plug-and-play validation protocol for a relative-potency bioassay: MOA link, reference standard and bridging, the 4PL/parallel-line model, equivalence-test parallelism, system suitability, and the ICH Q2(R2) validation characteristics, with acceptance criteria and a filled specimen."
pubDate: 2026-06-30
docType: "Protocol"
pillar: "cell-gene-therapy"
relatedArticles: ["comparability-and-potency-assays"]
tags: ["potency-assay", "bioassay", "relative-potency", "parallelism", "ich-q2r2", "validation", "cell-gene-therapy", "protocol"]
tier: "Advanced"
---

This is a ready-to-use validation protocol for a relative-potency bioassay, the assay that links your product to its mechanism of action. It covers the reference standard, the dose-response model, parallelism by an equivalence test, system suitability, and the ICH Q2(R2) validation characteristics. Replace every `<<FILL: ...>>` placeholder and route it through document control. A filled specimen follows. This is general guidance to adapt and verify, not legal or regulatory advice.

## Approval page

| Field | Entry |
|---|---|
| Document title | Relative Potency Bioassay Validation, `<<FILL: product / assay>>` |
| Document number | `<<FILL: PROT-ID, e.g. VAL-POT-001>>` |
| Version / effective date | `<<FILL>>` |
| Product / stage | `<<FILL: product, phase or commercial>>` |
| Method reference | `<<FILL: method ID, version>>` |
| Supersedes | `<<FILL: prior version or "New">>` |

| Approval | Name | Signature | Date |
|---|---|---|---|
| Author (Analytical / Bioassay) | `<<FILL>>` | | |
| Statistics | `<<FILL>>` | | |
| QC | `<<FILL>>` | | |
| Quality Assurance | `<<FILL>>` | | |

## 1. Objective

Demonstrate that the relative-potency bioassay for `<<FILL: product>>` measures the relevant biological activity tied to mechanism of action, reports a valid relative potency against a qualified reference standard, and meets the ICH Q2(R2) validation characteristics across its intended range, so the result is fit for lot release and for supporting future comparability.

## 2. Scope

Covers validation of the `<<FILL: cell-based / reporter-gene / binding-with-functional-link>>` relative-potency assay. It does not cover routine testing (governed by the method SOP) nor reference-standard qualification beyond the bridging plan referenced in section 4.

## 3. Mechanism-of-action link

State the biological activity the assay measures and why it reflects the product's mechanism of action. A binding or quantity surrogate is acceptable only if its equivalence to the functional activity is demonstrated; otherwise it is a characterization assay, not a potency assay.

| Item | Detail |
|---|---|
| MOA (summary) | `<<FILL>>` |
| Activity measured | `<<FILL: e.g. target-cell killing, cytokine release, reporter signal>>` |
| Link to MOA | `<<FILL: evidence the readout reflects the clinical mechanism>>` |

## 4. Reference standard and bridging

| Item | Detail |
|---|---|
| Reference standard | `<<FILL: primary and working standard, two-tier where appropriate>>` |
| Qualification | `<<FILL: how qualified>>` |
| Bridging plan | `<<FILL: how each replacement is bridged with documented equivalence>>` |
| Assigned potency | `<<FILL: reference defined as 100%>>` |

Treat the reference standard as a product: two-tier it, qualify it, and bridge every replacement with documented equivalence. Reference drift silently corrupts every relative-potency result.

## 5. Assay format and model

| Item | Detail |
|---|---|
| Format | Relative potency vs reference on the same plate |
| Dose-response model | `<<FILL: 4-parameter logistic (4PL) or parallel-line>>` |
| Reportable value | `<<FILL: relative potency %, from n plates/independent assays>>` |
| Replication strategy | `<<FILL: plates, wells, independent runs averaged>>` |

## 6. System suitability (gates every run)

A run that fails system suitability is invalid, not out of specification; you do not report a potency number from an invalid run.

| Parameter | Criterion |
|---|---|
| Curve fit (R squared) | `<<FILL: e.g. NLT 0.98>>` |
| Parallelism | Equivalence test on slope/asymptote ratios within `<<FILL: pre-set bounds>>` |
| Reference EC50 | Within `<<FILL: historical range>>` |
| Plate / negative controls | `<<FILL: within ranges>>` |

Use an equivalence test for parallelism, not a difference test. A difference test perversely rewards an imprecise assay by failing to detect non-parallelism; the equivalence approach sets bounds the curves must fall within.

## 7. Validation characteristics (ICH Q2(R2))

| Characteristic | Design | Acceptance criterion |
|---|---|---|
| Specificity | `<<FILL: stressed/degraded vs intact; matrix>>` | Detects loss of activity; no interference |
| Accuracy (relative) | `<<FILL: known relative potencies, e.g. 50, 70, 100, 140, 200%>>` | Mean recovery within `<<FILL: %>>` |
| Precision: repeatability | `<<FILL: replicates, one analyst/day>>` | `<<FILL: %GCV limit>>` |
| Precision: intermediate | `<<FILL: analysts x days x instruments>>` | `<<FILL: %GCV limit>>` |
| Linearity (dilutional) | `<<FILL: relative potency across dilution series>>` | Slope and R squared within `<<FILL>>` |
| Range | `<<FILL: e.g. 50-150% relative potency>>` | Accuracy, precision, linearity all met across range |
| Stability-indicating | `<<FILL: forced-degraded material>>` | Potency decreases with degradation |

For bioassays, relative accuracy and the dilutional linearity of relative potency are central. Report variability as geometric CV where the data are log-normal.

## 8. Acceptance criteria (overall)

- The assay reads on a relevant biological activity tied to MOA (section 3).
- System suitability, including equivalence-test parallelism, gates every run.
- Accuracy, precision (repeatability and intermediate), specificity, linearity, and range meet their criteria across the intended range.
- The assay is stability-indicating.
- A qualified reference standard exists with a bridging plan.
- The release specification (for example `<<FILL: 50-150% relative potency>>`) is justified on clinical and manufacturing experience.

## 9. Deviation handling, summary, approvals

Record any execution deviation, assess impact, resolve, and re-test as needed. Summarize results versus acceptance, state the validated status and the release specification, and obtain approvals.

## Filled specimen (one run, system suitability and reportable)

| Parameter | Reference | Sample | Suitability |
|---|---|---|---|
| Upper asymptote | 2.10 | 2.08 | Within 0.20: pass |
| Lower asymptote | 0.05 | 0.06 | Within range: pass |
| Slope (Hill) | 1.05 | 1.02 | Parallelism equivalence: pass |
| EC50 | 12.4 ng/mL | 10.1 ng/mL | Reference within historical range: pass |
| Curve fit R squared | 0.998 | 0.997 | NLT 0.98: pass |
| Relative potency | 100% (defined) | 123% | Within 50-150% spec: reportable |

Reading: the sample is 123% as potent as the reference. Because the curves pass the parallelism equivalence test and system suitability holds, 123% is a valid reportable value inside the 50-150% release specification. Had the parallelism equivalence test failed, the run would be invalid and repeated or investigated; you do not report a potency number from non-parallel curves.

## Common inspection findings this protocol prevents

- A binding or quantity measure used as the sole potency assay when the mechanism involves downstream function.
- Parallelism judged by a difference test that an imprecise assay passes by default.
- Reference standard with no two-tier structure or bridging, so drift goes uncontrolled.
- Intermediate precision never quantified, so assay variability is unknown at release.

## How to adapt

1. Set your document number and method reference.
2. Fill the system-suitability and validation-characteristic criteria from your assay's development data; do not ship the example numbers.
3. For an autologous CGT product that expires before a cell-based assay reads out, pair this with a documented potency assurance strategy (fast qualified release measures correlated with function); see the related article.
4. Justify the release specification on clinical and manufacturing experience, and tighten it over the lifecycle.
