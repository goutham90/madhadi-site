---
title: "Protocol: Extractables (Controlled Extraction) Study"
description: "A plug-and-play controlled extraction study protocol for container closure, delivery, and single-use system materials: material inventory, solvent selection bracketing polarity, exaggerated conditions, orthogonal analytics, the AET, and acceptance criteria, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-22
docType: "Protocol"
pillar: "quality-assurance"
relatedArticles: ["extractables-and-leachables"]
tags: ["extractables", "controlled extraction", "protocol", "USP 1663", "single-use systems", "AET", "GC-MS"]
tier: "Advanced"
---

This is a ready-to-use controlled extraction (extractables) study protocol. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your material inventory and analytical methods, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited standard against the current source before you rely on it.

## Approval page

| Field | Entry |
|---|---|
| Document title | Controlled Extraction Study for `<<FILL: SYSTEM / PRODUCT NAME>>` |
| Document number | `<<FILL: PROT-ID, e.g. PROT-EL-001>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Study owner | `<<FILL: role, e.g. Analytical / E&L Chemistry Lead>>` |

| Approval role | Name | Signature | Date |
|---|---|---|---|
| Author (E&L chemistry) | `<<FILL>>` | | |
| Reviewer (Toxicology) | `<<FILL>>` | | |
| Reviewer (Packaging / Device engineering) | `<<FILL>>` | | |
| Approver (Quality Assurance) | `<<FILL>>` | | |

## 1. Objective

Characterize the chemical species that the materials of construction of `<<FILL: SYSTEM NAME>>` can release under exaggerated extraction conditions, so the resulting extractables profile can be used to design the leachables study, set its target compound list, and support the container closure or single-use system safety assessment.

## 2. Scope

This protocol covers the controlled (exaggerated) extraction of the product-contact materials listed in section 5. It is an extractables study only. It does not establish what migrates into the product under real conditions; that is the leachables study, governed by `<<FILL: leachables protocol number>>`. Elemental impurities are assessed in parallel under ICH Q3D.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| E&L / analytical chemistry | Designs and executes the extraction, runs the orthogonal analyses, identifies and semi-quantifies extractables, calculates the AET, writes the report. |
| Toxicology | Confirms the AET basis and the safety thresholds (SCT, QT) for the route, reviews the target list. |
| Packaging / device engineering | Provides the material inventory, the contact conditions, and the surface-area-to-volume basis. |
| Quality Assurance | Approves the protocol and report, confirms the study supports the leachables design. |

## 4. Definitions

- **Extractable**: a chemical species pulled from a material under exaggerated or forced conditions (aggressive solvent, heat, time).
- **Controlled extraction study**: an exaggerated extraction designed as a credible worst case to survey the population of possible extractables.
- **AET (Analytical Evaluation Threshold)**: the analytical level at and above which compounds must be reported and identified, derived from the Safety Concern Threshold and the product dose. An identification threshold, not a safety limit.
- **Surface-area-to-volume ratio (SA/V)**: the ratio of contact-material surface area to extraction solvent volume, controlled so the study is reproducible and defensibly conservative.

## 5. System description and material inventory

List every product-contact material in the system. Study high-risk components individually and, where relevant, the assembled system.

| Material / component | Material of construction | Contact role | Risk rank (H/M/L) | Studied individually / in assembly |
|---|---|---|---|---|
| `<<FILL: e.g. vial>>` | `<<FILL: Type I glass>>` | `<<FILL: primary container>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: stopper>>` | `<<FILL: bromobutyl elastomer>>` | `<<FILL: closure>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: tubing / filter / bag>>` | `<<FILL: polymer grade>>` | `<<FILL: process contact>>` | `<<FILL>>` | `<<FILL>>` |

## 6. Prerequisites

1. Material inventory complete and risk-ranked (section 5).
2. Analytical methods available and qualified: GC-MS (headspace and direct injection), LC with high-resolution MS, ICP-MS.
3. SA/V ratio and component sample preparation defined and justified.
4. Reference standards and surrogate(s) for semi-quantification identified.
5. The route of administration and the daily dose are known so the AET can be calculated.

## 7. Extraction design

### 7.1 Solvents (bracket polarity)

Use multiple media so chemically diverse extractables are mobilized.

| Solvent | Polarity role | Rationale |
|---|---|---|
| `<<FILL: e.g. hexane or dichloromethane>>` | Nonpolar | Mobilizes nonpolar organics (oligomers, some antioxidants). |
| `<<FILL: e.g. 50/50 ethanol-water>>` | Mid-polarity | Bridges nonpolar and aqueous. |
| `<<FILL: e.g. aqueous buffer near formulation pH>>` | Polar / aqueous | Approximates the aqueous environment of many formulations. |

### 7.2 Conditions (exaggerated but realistic)

| Parameter | Value | Basis |
|---|---|---|
| Temperature | `<<FILL: e.g. 50 C>>` | Exaggerated vs. storage, below the point that creates artifacts. |
| Duration | `<<FILL: e.g. 24 h, plus a longer time point>>` | Multiple time points to show extraction plateau. |
| SA/V ratio | `<<FILL: e.g. 6 cm2/mL>>` | Conservative vs. real contact. |
| Extraction technique | `<<FILL: reflux / sealed-vessel / sonication>>` | Justify the technique. |
| Replicates and controls | `<<FILL: n, plus solvent blanks>>` | Blanks subtract solvent and handling background. |

### 7.3 Orthogonal analytics

| Technique | Targets |
|---|---|
| GC-MS (headspace) | Volatile organics. |
| GC-MS (direct injection / liquid) | Semivolatile organics. |
| LC with high-resolution MS and diode array | Nonvolatile organics, additives, oligomers. |
| ICP-MS | Elemental and metal extractables (links to the ICH Q3D assessment). |

## 8. AET calculation

Record the AET derivation and attach the calculation worksheet (`<<FILL: worksheet number>>`).

1. Safety Concern Threshold (SCT) for the route: `<<FILL: e.g. 0.15 micrograms/day OINDP>>`.
2. Daily dose / number of dose units per day: `<<FILL>>`.
3. Estimated AET per dose unit = SCT divided by units per day = `<<FILL>>`.
4. Uncertainty (response-factor) correction applied: `<<FILL: factor and basis>>`.
5. Final AET = `<<FILL>>`. Report and identify every extractable at or above this level.

## 9. Acceptance criteria

- The material inventory is complete and risk-ranked, and the studied components match it.
- Solvents bracket polarity; conditions and SA/V are defined and justified as a credible worst case.
- Orthogonal analytics (GC-MS, LC-HRMS, ICP-MS) were run, with solvent blanks.
- A product-specific AET is calculated and documented.
- Every extractable at or above the final AET is reported and identified, with structures supported by the data.
- The extractables list is carried forward as the leachables target list.

## 10. Deviation handling

Record any departure from this protocol (condition, method, or solvent change) as a deviation, assess its impact on the extractables picture, and disposition before the report is approved. Reference `<<FILL: deviation SOP number>>`.

## 11. Summary and conclusion

State whether the study met the acceptance criteria, summarize the extractables identified and semi-quantified against the AET, and state the target compound list passed to the leachables study. Reference the report number `<<FILL>>`.

## 12. Attachments

- Material inventory and risk ranking.
- Analytical method references and chromatograms.
- AET calculation worksheet.
- Reference standard and surrogate records.

## 13. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## References

> USP <1663> Assessment of Extractables Associated with Pharmaceutical Packaging and Delivery Systems.
> USP <661.1> Plastic Materials of Construction; USP <661.2> Plastic Packaging Systems for Pharmaceutical Use.
> ISO 10993-18 Chemical characterization of medical device materials (for a device constituent).
> ICH Q3D Elemental Impurities (for the metals path).
> PQRI recommendations on safety thresholds (SCT, QT, AET) for the applicable route.

Confirm the current version and clause numbers of each reference before issue.

---

## Filled specimen

The following shows the key sections completed for an example prefilled syringe, so you can see the level of detail expected. The system and numbers are illustrative; replace them with your own.

**System**: Prefilled syringe, 1 mL, for an injectable biologic. Route: parenteral.

**Material inventory (extract):**

| Material / component | Material of construction | Contact role | Risk rank | Studied |
|---|---|---|---|---|
| Barrel | Type I borosilicate glass | Primary container | H | Individually and in assembly |
| Plunger stopper | Bromobutyl elastomer, fluoropolymer-laminated | Closure | H | Individually |
| Needle shield | Synthetic polyisoprene | Closure | M | Individually |

**Conditions used:** 50 C, time points at 24 h and 72 h, SA/V 6 cm2/mL, sealed-vessel extraction in three media (n-heptane, 50/50 isopropanol-water, pH 5.5 aqueous buffer), with solvent blanks.

**AET (illustrative):** SCT taken from the applicable PODP recommendation for the parenteral route and the product's daily volume; estimated AET corrected by a 50 percent response-factor uncertainty factor to a final AET, recorded on worksheet WS-EL-001.

**Outcome:** 11 extractables identified at or above the final AET across the three media (two antioxidants and a degradant from the elastomer, several siloxane oligomers, one vulcanization-related species). All 11 were carried to the leachables target list. One species flagged for genotoxic-structure screening and routed to toxicology.

In this example the extractables study did exactly its job: it surveyed the worst case, produced an identified target list, and flagged one structure for hazard-specific evaluation, all before any leachables work began.

## Common inspection findings this protocol prevents

- An extractables study run and the product called qualified, with no leachables study to follow.
- A single analytical technique used (often only GC-MS), missing nonvolatile organics or metals.
- No documented SA/V ratio or solvent rationale, so the study is not a defensible worst case.
- AET not calculated, so there is no defined reporting threshold and the identification list is arbitrary.
- An extractable with a genotoxic structure not flagged for hazard-specific assessment.

## How to adapt this protocol

1. Set your document number, owner, and effective date.
2. Replace the material inventory with your real components and risk ranking.
3. Justify your solvents, conditions, and SA/V for your system and route.
4. Attach your qualified analytical methods and your AET worksheet.
5. Point the cross-references to your real leachables protocol and deviation SOP, and confirm every standard against the current published version before issue.
