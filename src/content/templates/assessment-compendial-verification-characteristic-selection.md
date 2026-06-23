---
title: "Risk Assessment: Compendial Method Verification Characteristic Selection"
description: "A plug-and-play risk assessment that compares your conditions to the compendial method's assumptions and decides, with documented rationale, which analytical characteristics to verify under USP <1226> and which to exclude, the part of a verification an inspector reads first, with a filled specimen."
pubDate: 2026-06-23
docType: "Risk Assessment"
pillar: "equipment-qualification"
relatedArticles: ["compendial-method-verification"]
tags: ["analytical-methods", "usp", "method-verification", "compendial", "risk assessment", "specificity", "qc-lab"]
tier: "Intermediate"
---

This is a ready-to-use risk assessment for selecting which characteristics to verify when you set up a compendial method under USP General Chapter <1226>. It produces the documented rationale that is the heart of a verification study: which characteristics are at risk under your conditions, and why the others are not. Replace every `<<FILL: ...>>` placeholder with your own specifics. A worked filled specimen follows the template. This is general guidance to adapt, not regulatory advice; confirm the current USP-NF edition before relying on it.

## Document control header

| Field | Entry |
|---|---|
| Title | Verification Characteristic Selection: `<<FILL: attribute / method>>` |
| Document number | `<<FILL>>` |
| Linked protocol | `<<FILL: protocol ID>>` |
| Article | `<<FILL>>` |
| Compendial reference and edition | `<<FILL>>` |
| Author | `<<FILL>>` |
| Date | `<<FILL>>` |

## Why this record exists

USP <1226> says verification is risk-based and deliberately narrower than validation: you select the characteristics at risk given your specific sample and conditions, rather than repeating the full validation. The absence of a documented rationale for excluded characteristics is itself a common finding. This record is where you reason it out and write it down before the data.

## 1. Procedure type

Tick the category, which frames the candidate characteristics.

| Procedure type | Applies? |
|---|---|
| Identification | `<<FILL>>` |
| Quantitative assay (major component) | `<<FILL>>` |
| Quantitative test for impurities | `<<FILL>>` |
| Limit test for impurities | `<<FILL>>` |

## 2. Conditions comparison (your conditions vs the method's assumptions)

| Factor | Method assumes | Your condition | Difference creates risk to |
|---|---|---|---|
| Matrix / excipients | `<<FILL>>` | `<<FILL>>` | `<<FILL: specificity, accuracy>>` |
| Impurity / degradant profile | `<<FILL>>` | `<<FILL>>` | `<<FILL: specificity, LOQ>>` |
| Instrument platform / detector | `<<FILL>>` | `<<FILL>>` | `<<FILL: sensitivity, precision>>` |
| Sample preparation | `<<FILL>>` | `<<FILL>>` | `<<FILL: accuracy/recovery>>` |
| Number of analysts / instruments / days | `<<FILL>>` | `<<FILL>>` | `<<FILL: intermediate precision>>` |
| Concentration vs published working range | `<<FILL>>` | `<<FILL>>` | `<<FILL: range>>` |

## 3. Characteristic selection decision

| Characteristic | At risk? | Verify? | Rationale (the load-bearing text) |
|---|---|---|---|
| Specificity / selectivity | `<<FILL>>` | `<<FILL: usually Yes>>` | `<<FILL: your matrix is the variable; possible coelution>>` |
| Accuracy (recovery) | `<<FILL>>` | `<<FILL>>` | `<<FILL: possible incomplete recovery or matrix bias>>` |
| Repeatability | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Intermediate precision | `<<FILL>>` | `<<FILL>>` | `<<FILL: yes if more than one analyst/day/instrument>>` |
| Detection limit | `<<FILL>>` | `<<FILL>>` | `<<FILL: low-level impurity work only>>` |
| Quantitation limit | `<<FILL>>` | `<<FILL>>` | `<<FILL: published LOQ established on a different sample>>` |
| Linearity | `<<FILL>>` | `<<FILL>>` | `<<FILL: often excluded; may be covered by SST>>` |
| Range | `<<FILL>>` | `<<FILL>>` | `<<FILL: excluded if published range brackets your spec>>` |

## 4. Conclusion

| Field | Entry |
|---|---|
| Characteristics to verify | `<<FILL: the selected set>>` |
| Characteristics excluded (with rationale) | `<<FILL: the excluded set and the one-line reason each>>` |
| Special cases checked | `<<FILL: sterility <71> and endotoxin <85> handled by their own suitability tests, not <1226>; basic compendial tests may need minimal verification unless matrix could affect the result>>` |

## 5. References

> USP General Chapter <1226> (risk-based verification); <1225> (validation) and <621> (allowable chromatographic adjustments); ICH Q2(R2) for the characteristic definitions. Confirm the current USP-NF edition before issue.

## 6. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (QC SME) | `<<FILL>>` | | |
| Reviewer (method validation group) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

Characteristic selection for the example finished-product assay by HPLC with two novel excipients and two routine analysts (illustrative).

| Characteristic | At risk? | Verify? | Rationale |
|---|---|---|---|
| Specificity | Yes | Yes | Two excipients not in the monograph's typical matrix; possible coelution with the API |
| Accuracy (recovery) | Yes | Yes | Same novel matrix; possible incomplete recovery or bias |
| Repeatability | Yes | Yes | Confirm method precision in our hands |
| Intermediate precision | Yes | Yes | Two analysts will run the method routinely |
| Linearity / range | No | No | Published working range fully brackets the 90.0 to 110.0% spec; detector linearity well documented |
| LOQ / LOD | No | No | Major-component assay; low-level sensitivity not relevant |

**Conclusion (specimen).** Verify specificity, accuracy, repeatability, and intermediate precision. Exclude linearity, range, and LOQ/LOD with the rationale above. The method is an assay, so sterility and endotoxin special cases do not apply. This selection is the documented basis for the verification protocol.

## Common findings this record prevents

- Two characteristics tested and the rest skipped with no written justification (<1226> is explicitly risk-based).
- Specificity ignored for a complex matrix, missing a coelution that inflates assay or hides an impurity.
- Treating system suitability as if it replaced specificity, accuracy, or precision.
- Verifying sterility or endotoxin under <1226> instead of their own suitability tests.

## How to adapt this record

1. Complete it before writing the protocol and before generating data.
2. Make the conditions comparison real: name the actual excipients, platform, and analysts.
3. Write a one-line rationale for every excluded characteristic; that is what reviewers read first.
4. Carry the selected set into the verification protocol.
5. Confirm the current USP-NF edition before issue.
