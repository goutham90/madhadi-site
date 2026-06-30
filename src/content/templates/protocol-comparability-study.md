---
title: "Protocol: Post-Change Comparability Study (Biologics and CGT)"
description: "A plug-and-play ICH Q5E comparability protocol: change description, attribute-by-method matrix, lot selection, pre-set quality ranges and equivalence criteria, forced degradation and side-by-side stability, the decision logic, and the reporting category, with a filled specimen."
pubDate: 2026-06-30
docType: "Protocol"
pillar: "cell-gene-therapy"
relatedArticles: ["comparability-and-potency-assays"]
tags: ["comparability", "ich-q5e", "biologics", "cell-gene-therapy", "cmc", "protocol", "acceptance-criteria"]
tier: "Advanced"
---

This is a ready-to-use comparability protocol for demonstrating that product made after a manufacturing change remains highly similar, with no adverse impact on safety or efficacy, per ICH Q5E. The protocol is written and approved before any comparison data are generated; post hoc acceptance criteria are a classic finding. Replace every `<<FILL: ...>>` placeholder and route it through your change-control and document-control processes. A filled specimen follows. This is general guidance to adapt and verify, not legal or regulatory advice.

## Approval page

| Field | Entry |
|---|---|
| Document title | Comparability Study for `<<FILL: product>>`, `<<FILL: change>>` |
| Document number | `<<FILL: PROT-ID, e.g. COMP-2026-007>>` |
| Version / effective date | `<<FILL>>` |
| Product / stage | `<<FILL: product, DS/DP, clinical phase or commercial>>` |
| Linked change control | `<<FILL: change control ID>>` |
| Supersedes | `<<FILL: prior version or "New">>` |

| Approval | Name | Signature | Date |
|---|---|---|---|
| Author (Analytical Dev / CMC) | `<<FILL>>` | | |
| Process Dev / MSAT | `<<FILL>>` | | |
| Statistics | `<<FILL>>` | | |
| Regulatory Affairs | `<<FILL>>` | | |
| Quality Assurance | `<<FILL>>` | | |

## 1. Objective

Demonstrate that `<<FILL: product>>` produced after the change described in section 3 is highly similar to pre-change material, such that the change has no adverse impact on the quality attributes that drive safety and efficacy, and determine whether quality data alone are sufficient or whether nonclinical or clinical bridging is needed.

## 2. Scope

Covers comparison at `<<FILL: drug substance / drug product / both>>` for the change in section 3. It does not re-validate the analytical methods (their status is referenced in section 6) nor cover unrelated changes.

## 3. Description of the change and rationale

| Item | Detail |
|---|---|
| What is changing | `<<FILL: e.g. affinity resin lot-to-vendor change; scale 200 L to 2000 L; new fill site>>` |
| What is held constant | `<<FILL>>` |
| Rationale | `<<FILL: why the change is made>>` |
| Pre-change reference process | `<<FILL: process version / site>>` |

## 4. Risk assessment summary

Summarize the change-to-CQA risk assessment (`<<FILL: risk assessment ID>>`) that sets the scope: which attributes could move, the detectability of a shift, and therefore which attributes need orthogonal methods and how many lots. The risk drives the size of the exercise, not the change alone.

## 5. Comparability attribute matrix

Each high-criticality conclusion is supported by more than one independent (orthogonal) method, because no single method sees everything. Adapt rows to your product (the example below is a monoclonal antibody; a CGT matrix would add vector identity, genome titer, full/empty capsid ratio, infectious titer, and replication-competent virus).

| Quality attribute | Method | Criticality | Acceptance approach |
|---|---|---|---|
| Identity / primary structure | `<<FILL: intact mass, peptide map LC-MS>>` | High | Match within method capability |
| Charge variants | `<<FILL: icIEF or CEX>>` | High | Pre/post quality ranges overlap |
| Size variants / aggregates | `<<FILL: SEC, CE-SDS>>` | High | %HMW within preset range |
| Glycosylation | `<<FILL: HILIC glycan map>>` | High | Key glycans within range |
| Potency | `<<FILL: cell-based relative potency>>` | High | Within preset % of reference |
| Process impurities | `<<FILL: HCP ELISA, residual DNA>>` | High (safety) | Below limit, no adverse trend |
| Higher-order structure | `<<FILL: CD, DSC>>` | Medium | Comparable profiles |
| Forced degradation | `<<FILL: thermal, oxidative, pH, light>>` | High | Comparable degradation pathways/rates |

## 6. Methods and their status

| Method | Validated / qualified | Stability-indicating | Discriminating power demonstrated |
|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

A method that cannot detect a real difference will pass everything, which is worse than failing. State how discriminating power was shown for each high-criticality method.

## 7. Lot selection

| Group | Lots | Justification |
|---|---|---|
| Pre-change | `<<FILL: n recent, in-control lots spanning historical range>>` | Representative of registered process |
| Post-change | `<<FILL: n available post-change lots>>` | Made by the changed process |

For autologous CGT, where each lot is one patient, state how process-representative or engineering runs are used in place of head-to-head patient lots.

## 8. Acceptance criteria (pre-set)

| Attribute | Approach | Pre-set criterion |
|---|---|---|
| `<<FILL>>` | Quality range | `<<FILL: e.g. historical mean +/- 3 SD>>` |
| `<<FILL>>` | Statistical equivalence | `<<FILL: equivalence margin justified on clinical relevance + test>>` |
| `<<FILL>>` | Specification-based (supporting only) | Meets registered spec |

State explicitly: meeting the registered specification is necessary but not sufficient. An in-spec but out-of-quality-range result triggers investigation, characterization of any new species, and a clinical-relevance assessment before a comparable conclusion.

## 9. Execution

1. Test pre-change retains side by side with post-change material on the same plate, same analyst, same reference standard where samples allow, to remove between-run noise.
2. Run forced degradation and a side-by-side accelerated/real-time stability comparison (ICH Q5C), not just release testing.
3. Record all data under GMP with audit trail; no selective use of passing runs; any chromatographic reintegration justified and documented.

## 10. Decision logic and reporting category

After analysis against the pre-set criteria, conclude and classify:

| Outcome | Action |
|---|---|
| All attributes within ranges, low-risk change | Quality data may suffice; assign reporting category |
| A difference or higher-risk change | Assess clinical relevance, characterize, decide on nonclinical/clinical bridging |
| Not comparable | Do not implement, or treat as a new product/process per regulatory advice |

Reporting category (`<<FILL: PAS / CBE-30 / CBE-0 / annual report (US 21 CFR 601.12), or EU variation type>>`), confirmed with Regulatory Affairs.

## 11. Summary, conclusion, approvals

State the conclusion (comparable / not / with conditions), the bridging decision, the reporting category, and any commitments. Authors and QA sign.

## Filled specimen (one attribute)

| Item | Value |
|---|---|
| Attribute | Aggregate (%HMW by SEC) |
| Historical pre-change lots (n) | 12 |
| Historical mean / SD | 1.2% / 0.15% |
| Pre-set quality range (mean +/- 3 SD) | 0.75% to 1.65% |
| Registered specification | NMT 3.0% |
| Post-change lots (n=3) | 1.3%, 1.1%, 1.4% |
| Conclusion | All within quality range and far below spec: comparable for this attribute |

Had a post-change lot read 2.1%, it would still pass the specification (NMT 3.0%) but fail the quality range. That in-spec but out-of-range situation is exactly what comparability is meant to catch: it would trigger characterization of the new aggregate species and a clinical-relevance assessment before any comparable conclusion.

## Common inspection findings this protocol prevents

- Acceptance criteria set after seeing the data, or "met specification" used to declare comparability when the spec is far wider than historical experience.
- Methods that cannot detect a meaningful difference, so everything passes and the conclusion is hollow.
- No forced degradation or side-by-side stability, so a divergent degradation pathway is missed.
- The comparability conclusion not feeding the correct regulatory reporting category.

## How to adapt

1. Set your document number and link the change control.
2. Replace the antibody matrix with your product's attributes (CGT rows where relevant), and set real pre-set criteria.
3. Justify each equivalence margin on clinical relevance, not on what the assay can pass.
4. Confirm the reporting category with Regulatory Affairs against the current framework before filing.
