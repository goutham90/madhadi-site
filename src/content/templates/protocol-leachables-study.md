---
title: "Protocol: Leachables Study on Stability"
description: "A plug-and-play leachables study protocol tied to the stability program: real product or simulant, ICH storage conditions and orientation, targeted plus non-targeted analysis, comparison to the SCT and QT, and a written safety conclusion, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-22
docType: "Protocol"
pillar: "quality-assurance"
relatedArticles: ["extractables-and-leachables"]
tags: ["leachables", "stability", "protocol", "USP 1664", "SCT", "QT", "shelf life"]
tier: "Advanced"
---

This is a ready-to-use leachables study protocol. It runs on the actual product (or a validated simulant) across the labeled shelf life and is tied to the stability program. Replace every `<<FILL: ...>>` placeholder, set your document numbers and dates, attach the extractables target list and your stability protocol, and route it through document control. A worked filled specimen follows the template. Verify each cited standard against the current source before you rely on it.

## Approval page

| Field | Entry |
|---|---|
| Document title | Leachables Study for `<<FILL: PRODUCT NAME>>` |
| Document number | `<<FILL: PROT-ID, e.g. PROT-EL-002>>` |
| Version | `<<FILL: version>>` |
| Effective date | `<<FILL: date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Linked extractables study | `<<FILL: extractables protocol / report number>>` |
| Linked stability protocol | `<<FILL: stability protocol number>>` |

| Approval role | Name | Signature | Date |
|---|---|---|---|
| Author (E&L chemistry) | `<<FILL>>` | | |
| Reviewer (Toxicology) | `<<FILL>>` | | |
| Reviewer (Stability / Analytical) | `<<FILL>>` | | |
| Approver (Quality Assurance) | `<<FILL>>` | | |

## 1. Objective

Determine which chemical species actually migrate into `<<FILL: PRODUCT NAME>>` from its container closure and delivery system (and, where relevant, its single-use process train) under real storage and use conditions across the labeled shelf life, and conclude whether the product is safe with respect to leachables for that shelf life and route.

## 2. Scope

This protocol covers leachables in the actual product (or validated simulant) on stability. The target compound list comes from the controlled extraction study (`<<FILL: extractables study number>>`); a non-targeted screen catches anything unexpected. Elemental leachables are addressed under ICH Q3D.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| E&L / analytical chemistry | Runs targeted and non-targeted analysis at each pull, quantifies leachables, compares to the AET, SCT, and QT. |
| Toxicology | Performs the safety assessment of identified leachables, writes the safety conclusion. |
| Stability / analytical | Manages pulls, storage conditions, and orientation; aligns leachables pulls with stability pulls. |
| Quality Assurance | Approves protocol and report, confirms the safety conclusion supports release and labeling. |

## 4. Definitions

- **Leachable**: a chemical species that actually migrates into the product under real conditions of manufacture, storage, and use over the shelf life.
- **Target list**: compounds flagged by the extractables study, analyzed for specifically.
- **Non-targeted screen**: a broad analysis to detect leachables not predicted by the extractables study.
- **SCT / QT**: Safety Concern Threshold and Qualification Threshold for the route, the safety benchmarks each leachable is compared to.

## 5. Study design

### 5.1 Test article and simulant

| Item | Entry |
|---|---|
| Product / simulant | `<<FILL: actual product, or validated simulant + justification>>` |
| Configuration | `<<FILL: final container closure / delivery system>>` |
| Batches | `<<FILL: number and identity, representative batches>>` |

### 5.2 Storage conditions and orientation

| Parameter | Value | Basis |
|---|---|---|
| Conditions | `<<FILL: e.g. 25 C/60% RH long-term; 40 C/75% RH accelerated>>` | ICH Q1A-aligned, matched to stability. |
| Orientation | `<<FILL: upright / inverted / on-side>>` | Liquid must contact the closure if it can sit that way. |
| Pull points | `<<FILL: e.g. 0, 3, 6, 9, 12, 18, 24 months>>` | Aligned with stability pulls through labeled expiry. |

### 5.3 Analysis

| Approach | Method | Targets |
|---|---|---|
| Targeted | `<<FILL: LC-HRMS / GC-MS methods>>` | The extractables target list compounds. |
| Non-targeted screen | `<<FILL: screening method>>` | Unexpected leachables at or above the AET. |
| Elemental | ICP-MS | Metal leachables (ICH Q3D). |

## 6. AET and safety benchmarks

| Item | Entry |
|---|---|
| Final AET | `<<FILL: from the AET worksheet>>` |
| SCT for route | `<<FILL>>` |
| QT for route | `<<FILL>>` |
| Hazard-specific limits | `<<FILL: e.g. nitrosamine acceptable intake under ICH M7>>` |

## 7. Disposition rule for each leachable

For every leachable identified at or above the AET:

1. If it is a known genotoxic, carcinogenic, or hazard-classified species, control to its compound-specific limit regardless of the generic thresholds.
2. If its estimated daily exposure is below the SCT, no further toxicological evaluation is needed; record the conclusion.
3. If between the SCT and the QT, identify firmly and perform a structure-based safety evaluation.
4. If at or above the QT, perform a full toxicological qualification.
5. If any leachable exceeds its qualified safe level, treat it as a result requiring action (material change, process change, tightened spec, or qualified higher limit with data).

## 8. Acceptance criteria

- The study runs on the actual product or a validated simulant, in the correct orientation, on stability through the labeled expiry.
- Targeted and non-targeted analysis were performed at each pull, with the AET applied.
- Every leachable at or above the AET is identified and compared to the SCT, QT, or hazard-specific limit.
- A written safety conclusion states the product is acceptable with respect to leachables for the labeled shelf life and route, or identifies the action taken.
- The conclusion is supported by toxicology and approved by QA.

## 9. Deviation handling

Record any departure (condition, orientation, pull, or method) as a deviation, assess its impact on the leachable profile and the safety conclusion, and disposition before report approval. Reference `<<FILL: deviation SOP number>>`.

## 10. Summary and conclusion

State whether the acceptance criteria were met, list leachables found and their disposition against the SCT/QT, and state the overall safety conclusion. Reference the report number `<<FILL>>`.

## 11. Attachments

- Extractables target list.
- Stability protocol cross-reference and pull schedule.
- AET worksheet.
- Chromatograms and toxicological assessment.

## 12. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## References

> USP <1664> Assessment of Drug Product Leachables Associated with Pharmaceutical Packaging and Delivery Systems.
> USP <1663> (for the linked extractables study).
> ICH Q1A(R2) Stability Testing of New Drug Substances and Products (storage conditions).
> ICH Q3D Elemental Impurities; ICH M7 (for genotoxic-class leachables).
> ISO 10993-17:2023 (for the device-constituent toxicological risk assessment, if applicable).

Confirm the current version and clause numbers of each reference before issue.

---

## Filled specimen

The following shows key sections completed for an example injectable in a prefilled syringe, so you can see the expected detail. Numbers are illustrative.

**Test article**: Injectable biologic, 1 mL prefilled syringe, three representative batches. Stored inverted (formulation contacts the plunger) at 25 C/60% RH long-term and 40 C/75% RH accelerated. Pulls at 0, 3, 6, 9, 12, 18, 24 months, aligned to stability.

**Analysis**: targeted LC-HRMS and GC-MS for the 11 compounds on the extractables target list; non-targeted LC-HRMS screen; ICP-MS for metals.

**Result (illustrative):** Three leachables appeared at or above the AET by 24 months: one elastomer antioxidant (exposure below the SCT, no further action), one degradant (between SCT and QT, structure-based evaluation found it acceptable), and trace zinc (below the ICH Q3D PDE for the route). The genotoxic-screen species from the extractables study did not appear above the AET in the real product. Safety conclusion: the product is acceptable with respect to leachables for the 24-month labeled shelf life by the parenteral route. Approved by toxicology and QA.

This is the shape an inspector expects: real product, correct orientation, on stability, each leachable identified and judged against the right threshold, and a signed safety conclusion.

## Common inspection findings this protocol prevents

- No leachables study at all, with an extractables study used to claim the product is qualified.
- Liquid product stored upright when it can sit inverted, so the formulation never contacts the closure and the study understates the leachable load.
- Leachables not run through the labeled shelf life, so end-of-life migration is unknown.
- A leachable reported below the AET and called "safe," confusing the identification threshold with a safety limit.
- A single-use process train ignored, with no process leachables considered.

## How to adapt this protocol

1. Set your document number, owner, and effective date, and link the extractables and stability protocols.
2. Set your real storage conditions, orientation, and pull schedule to match the stability program.
3. Insert your AET, SCT, and QT for the route, and any hazard-specific limits.
4. Attach your target list, methods, and toxicological assessment.
5. Confirm every standard against the current published version before issue.
