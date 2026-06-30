---
title: "Risk Assessment: Manufacturing Change Comparability (Change-to-CQA)"
description: "A plug-and-play risk assessment that maps a proposed manufacturing change to each critical quality attribute, scores impact and detectability, and sets the comparability scope: which attributes, how many lots, which orthogonal methods, and whether bridging is likely, with a filled specimen."
pubDate: 2026-06-30
docType: "Risk Assessment"
pillar: "cell-gene-therapy"
relatedArticles: ["comparability-and-potency-assays"]
tags: ["comparability", "risk-assessment", "ich-q5e", "ich-q9", "cqa", "biologics", "cell-gene-therapy"]
tier: "Advanced"
---

This is a ready-to-use risk assessment that sizes a comparability exercise. The change itself does not set the scope; the risk of the change against each critical quality attribute (CQA) does. This tool maps the change to the CQAs, scores impact and detectability, and outputs the comparability scope you carry into the protocol. Replace every `<<FILL: ...>>` placeholder and route it through change control and QA. A filled specimen follows. This is general guidance to adapt and verify, not legal or regulatory advice.

## Document control header

| Field | Entry |
|---|---|
| Document title | Comparability Risk Assessment for `<<FILL: change>>` |
| Document number | `<<FILL: RA-ID, e.g. RA-COMP-2026-007>>` |
| Version / effective date | `<<FILL>>` |
| Product / stage | `<<FILL: product, DS/DP, phase or commercial>>` |
| Linked change control | `<<FILL: change control ID>>` |
| Linked comparability protocol | `<<FILL: protocol ID>>` |

| Approval | Name | Signature | Date |
|---|---|---|---|
| Author (CMC / Analytical) | `<<FILL>>` | | |
| Process Dev / MSAT | `<<FILL>>` | | |
| Quality Assurance | `<<FILL>>` | | |

## 1. Purpose

Determine, for the proposed change, which CQAs could be affected, how detectable a shift would be, and therefore the scope of the comparability exercise: which attributes to test, with which methods, across how many lots, and whether nonclinical or clinical bridging is likely. The output feeds the comparability protocol and the regulatory reporting-category decision.

## 2. The change

| Item | Detail |
|---|---|
| Description | `<<FILL>>` |
| Type | `<<FILL: cell bank / scale / site / raw material / process step / formulation / container closure / CGT vector or cell process>>` |
| Held constant | `<<FILL>>` |

## 3. Methodology and scoring scales

For each CQA, score the impact of the change on that attribute and the detectability of a shift with current methods. Combine into a risk class that sets the testing depth. (This follows ICH Q9 risk principles; adapt the scales to your quality system.)

**Impact (severity if the attribute shifts):**

| Score | Impact |
|---|---|
| 3 | High: drives safety or efficacy (for example potency, immunogenicity-related glycans, key impurity) |
| 2 | Medium: quality-relevant, indirect link to clinical effect |
| 1 | Low: minor or well-characterized, no plausible clinical link |

**Likelihood the change perturbs the attribute:**

| Score | Likelihood |
|---|---|
| 3 | High: change directly acts on the pathway producing the attribute |
| 2 | Medium: plausible mechanism |
| 1 | Low: no credible mechanism |

**Detectability (can current methods see a meaningful shift):**

| Score | Detectability |
|---|---|
| 3 | Low detectability: method not discriminating or not stability-indicating |
| 2 | Medium |
| 1 | High detectability: validated, discriminating, orthogonal coverage |

Risk class = Impact x Likelihood x Detectability (higher = more scrutiny). Set thresholds, for example: `<<FILL: >= 18 high, 8-17 medium, < 8 low>>`.

## 4. Change-to-CQA assessment table

| CQA | Impact | Likelihood | Detectability | Risk class | Comparability action |
|---|---|---|---|---|---|
| `<<FILL: CQA>>` | `<<1-3>>` | `<<1-3>>` | `<<1-3>>` | `<<product>>` | `<<FILL: methods, n lots, orthogonal coverage>>` |
| `<<FILL>>` | `<<1-3>>` | `<<1-3>>` | `<<1-3>>` | `<<product>>` | `<<FILL>>` |

## 5. Scope output

| Output | Decision |
|---|---|
| Attributes in the comparability matrix | `<<FILL>>` |
| Attributes needing orthogonal/second methods | `<<FILL: the high-risk ones>>` |
| Number of pre-change lots | `<<FILL>>` |
| Number of post-change lots | `<<FILL>>` |
| Forced degradation / side-by-side stability required | `<<FILL: yes for high-risk degradation pathways>>` |
| Likely bridging beyond quality data | `<<FILL: none / nonclinical / clinical, preliminary view>>` |
| Preliminary reporting category | `<<FILL: PAS / CBE-30 / CBE-0 / annual report / EU variation, confirm with Regulatory>>` |

## 6. Residual risk and approval

State the residual risk after the planned comparability testing and any conditions. QA approves the risk logic, not just the signatures: confirm the high-impact, low-detectability attributes landed in the rigorous lane.

## Filled specimen (extract)

Change: switch of Protein A affinity resin to a different vendor grade, monoclonal antibody drug substance.

| CQA | Impact | Likelihood | Detect. | Class | Action |
|---|---|---|---|---|---|
| Host cell protein (HCP) | 3 | 3 | 2 | 18 (High) | HCP ELISA + orthogonal LC-MS HCP; 3 pre / 3 post lots |
| Aggregate (%HMW) | 3 | 2 | 1 | 6 (Low-Med) | SEC; quality range; existing lots |
| Charge variants | 2 | 2 | 1 | 4 (Low) | icIEF; quality range |
| Potency | 3 | 2 | 2 | 12 (Med) | Cell-based relative potency; within % of reference |

Reading: the resin change most plausibly perturbs the impurity-clearance step, so HCP scores highest and earns an orthogonal method plus dedicated lots. Aggregate and charge variants are lower risk and covered by existing methods and quality ranges. Potency sits in the middle and is confirmed by the validated relative-potency assay. The scope follows the risk, not the change label.

## Common inspection findings this assessment prevents

- A comparability exercise scoped by the change label rather than its risk, so a high-impact attribute is under-tested.
- High-impact, low-detectability attributes covered by a single non-discriminating method.
- No documented basis for the number of lots or the choice of attributes.
- The reporting category chosen without a risk rationale.

## How to adapt

1. Set your document number and link the change control and comparability protocol.
2. Adapt the scoring scales and thresholds to your quality system.
3. Use your real CQA list (CGT products add vector identity, genome titer, capsid content, infectious titer, replication-competent virus).
4. Confirm the preliminary reporting category with Regulatory Affairs.
