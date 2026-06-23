---
title: "Report: Compendial Method Verification Report (USP <1226>)"
description: "A plug-and-play verification report for a pharmacopeial method: results against pre-defined acceptance criteria, system suitability, any deviations and their disposition, the conclusion that the procedure is verified for the named article under the stated conditions, and release for GMP use, with a filled specimen results table."
pubDate: 2026-06-23
docType: "Report"
pillar: "equipment-qualification"
relatedArticles: ["compendial-method-verification"]
tags: ["analytical-methods", "usp", "method-verification", "compendial", "report", "qc-lab", "data-integrity"]
tier: "Intermediate"
---

This is a ready-to-use verification report to pair with the verification protocol. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal review and approval. A worked filled specimen follows the template. This is general guidance to adapt, not regulatory advice; confirm the current USP-NF edition and the cited regulation before you rely on them.

## Document control header

| Field | Entry |
|---|---|
| Title | Verification Report: `<<FILL: attribute / method>>` |
| Document number | `<<FILL: report ID>>` |
| Linked protocol | `<<FILL: protocol ID and version>>` |
| Article | `<<FILL>>` |
| Compendial reference and edition | `<<FILL: monograph/general chapter, current USP-NF edition>>` |
| Author | `<<FILL>>` |
| Date | `<<FILL>>` |

## 1. Summary of activity

| Field | Entry |
|---|---|
| What was verified | `<<FILL: the compendial procedure for the named attribute and article>>` |
| Characteristics verified | `<<FILL: e.g. specificity, accuracy, repeatability, intermediate precision>>` |
| Instruments / CDS / column lot used | `<<FILL>>` |
| Analysts | `<<FILL>>` |
| Execution dates | `<<FILL>>` |

## 2. Results against acceptance criteria

| Characteristic | Result | Acceptance criterion | Verdict |
|---|---|---|---|
| Specificity (blank/placebo at analyte RT) | `<<FILL>>` | `<<FILL>>` | `<<FILL: Pass/Fail>>` |
| Peak purity (if PDA) | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Accuracy (per level) | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Repeatability (%RSD) | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Intermediate precision (%RSD) | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Analyst mean difference | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| LOQ/LOD (if tested) | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| System suitability (each run) | `<<FILL>>` | Per monograph SST | `<<FILL>>` |

## 3. Deviations

| Deviation ref | Description | Disposition |
|---|---|---|
| `<<FILL: number or "None">>` | `<<FILL>>` | `<<FILL>>` |

If a characteristic failed, record the investigation outcome: assignable execution error (corrected, justified, repeated) or a genuine signal that the procedure is not suitable for the article under these conditions (partial revalidation or alternative procedure required).

## 4. Conclusion

| Field | Entry |
|---|---|
| Conclusion | `<<FILL: The compendial procedure is verified as suitable for routine use with the named article on the named instruments and CDS, by the named analysts, under the stated conditions / Not verified>>` |
| Released for GMP use | Yes / No (date) |
| Conditions and re-verification triggers | `<<FILL: new instrument platform, new column chemistry, reformulation, new analyst population>>` |

## 5. Traceability

The executed protocol, raw data (including chromatograms), and this report are linked and retrievable: `<<FILL: where stored / record IDs>>`. The conclusion traces back to raw data without gaps.

## 6. References

> USP General Chapter <1226> (current USP-NF edition); 21 CFR 211.194(a)(2) and 211.165(e); USP <621> where chromatographic adjustments apply. Confirm current versions before issue.

## 7. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (QC SME) | `<<FILL>>` | | |
| Reviewer (method validation group) | `<<FILL>>` | | |
| Approver (QA, independent of execution) | `<<FILL>>` | | |

---

## Filled specimen

Results for the example finished-product assay by HPLC described in the paired protocol (illustrative).

| Characteristic | Result | Criterion | Verdict |
|---|---|---|---|
| Specificity, blank/placebo at API RT | No peak > 0.1% area | No interference > 0.1% | Pass |
| Peak purity (API) | Passes purity threshold | Passes | Pass |
| Accuracy, 80% level (mean of 3) | 99.4% | 98.0 to 102.0% | Pass |
| Accuracy, 100% level (mean of 3) | 100.2% | 98.0 to 102.0% | Pass |
| Accuracy, 120% level (mean of 3) | 100.7% | 98.0 to 102.0% | Pass |
| Repeatability, %RSD (n=6) | 0.8% | <= 2.0% | Pass |
| Intermediate precision, %RSD (n=12) | 1.3% | <= 3.0% | Pass |
| Analyst mean difference | 0.6% absolute | <= 2.0% | Pass |
| System suitability (each run) | Resolution, tailing, replicate %RSD within monograph SST | Per monograph | Pass |

**Conclusion (specimen).** The compendial assay procedure is verified as suitable for routine use with this drug product on the named instruments and CDS, by the named analysts, under the stated conditions. The method is released for GMP use. A later change outside the verified conditions (new instrument platform, new column chemistry, reformulation) triggers re-evaluation of the need to re-verify.

## Common findings this report prevents

- A verification with no clear statement of the conditions the method is verified for.
- "System suitability passed, so the method is verified" (SST is day-of-test system fitness, not verification of the method for your article).
- A failed characteristic handled as a quiet rerun with no deviation.
- A conclusion that cannot be traced back to raw chromatograms.
- No re-verification trigger captured for later changes.

## How to adapt this report

1. Number it and link the executed protocol.
2. Fill the results table from the executed data, not from expectation.
3. State the verified conditions explicitly in the conclusion.
4. Capture re-verification triggers so a later change forces a re-look.
5. Confirm the USP edition and CFR cites are current before issue.
