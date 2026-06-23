---
title: "Protocol: Compendial Method Verification (USP <1226>)"
description: "A plug-and-play verification protocol for a pharmacopeial method: scope and compendial reference, the risk-based selection of characteristics, test design for specificity, accuracy, and precision, pre-defined acceptance criteria, system suitability, deviation handling, and approvals, with a filled specimen."
pubDate: 2026-06-23
docType: "Protocol"
pillar: "equipment-qualification"
relatedArticles: ["compendial-method-verification"]
tags: ["analytical-methods", "usp", "method-verification", "compendial", "protocol", "qc-lab", "specificity"]
tier: "Intermediate"
---

This is a ready-to-use verification protocol for a compendial (pharmacopeial) analytical procedure under USP General Chapter <1226>. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and get it reviewed and approved before execution. A worked filled specimen follows the template. This is general guidance to adapt, not regulatory advice; confirm the current USP-NF edition and the cited regulation before you rely on them.

## Document control header

| Field | Entry |
|---|---|
| Title | Verification of Compendial Procedure: `<<FILL: attribute / method>>` |
| Document number | `<<FILL: protocol ID>>` |
| Version | `<<FILL>>` |
| Status | Pre-approved before execution (required) |
| Author | `<<FILL>>` |
| Effective date | `<<FILL>>` |

State clearly in the title: "Verification of Compendial Procedure," not "validation." The wrong title invites the wrong scrutiny.

## 1. Purpose and scope

| Field | Entry |
|---|---|
| Article (product / substance) | `<<FILL>>` |
| Attribute tested | `<<FILL: e.g. assay, related substances>>` |
| Compendial reference | `<<FILL: monograph or general chapter, with the current USP-NF edition and supplement>>` |
| Specification the result supports | `<<FILL: e.g. 90.0 to 110.0 percent>>` |
| Instruments / column lot / CDS | `<<FILL>>` |
| Analysts in scope | `<<FILL>>` |

## 2. Regulatory and compendial basis

> USP General Chapter <1226>, Verification of Compendial Procedures (cite the current USP-NF edition).
> 21 CFR 211.194(a)(2): test methods used must be verified under actual conditions of use.
> 21 CFR 211.165(e): accuracy, sensitivity, specificity, and reproducibility of test methods must be established and documented.
> Where chromatographic adjustments are made, USP General Chapter <621> (and Ph. Eur. 2.2.46 equivalent) for allowable adjustments.

Confirm the current chapter content and edition before issue; USP is revised continuously.

## 3. Description of the compendial procedure

Summarise the published procedure as written, and quote the system suitability requirements verbatim so there is no ambiguity about what "passes" means.

| Field | Entry |
|---|---|
| Procedure summary | `<<FILL: column, mobile phase, detection, sample prep, run conditions as published>>` |
| System suitability (verbatim) | `<<FILL: resolution, tailing, plate count, replicate %RSD as the monograph states>>` |

## 4. Risk assessment summary and characteristics to verify

Reference the characteristic-selection assessment (see [assessment-compendial-verification-characteristic-selection](/templates/assessment-compendial-verification-characteristic-selection)). Record which characteristics are verified and the rationale for those excluded.

| Characteristic | Verify? | Rationale |
|---|---|---|
| Specificity / selectivity | `<<FILL: usually Yes>>` | `<<FILL: your matrix is the variable>>` |
| Accuracy (recovery) | `<<FILL>>` | `<<FILL>>` |
| Repeatability | `<<FILL>>` | `<<FILL>>` |
| Intermediate precision | `<<FILL>>` | `<<FILL: yes if more than one analyst/day/instrument>>` |
| Detection / quantitation limit | `<<FILL>>` | `<<FILL: low-level impurity work only>>` |
| Linearity / range | `<<FILL>>` | `<<FILL: often excluded if published range brackets your spec>>` |

## 5. Materials, standards, and instruments

| Item | Detail / traceability |
|---|---|
| Reference standard(s) and lot | `<<FILL>>` |
| Reagents and columns (lot) | `<<FILL>>` |
| Instruments (ID, qualification status) | `<<FILL: confirm AIQ current, see analytical-instrument-qualification>>` |
| Software / CDS (version) | `<<FILL>>` |

## 6. Test design (per selected characteristic)

| Characteristic | Design |
|---|---|
| Specificity | `<<FILL: inject diluent blank, placebo, placebo spiked with analyte, forced-degradation sample; confirm no interference at the analyte retention time; peak purity if PDA>>` |
| Accuracy | `<<FILL: spiked placebo at e.g. 80/100/120 percent, triplicate per level, calculate recovery>>` |
| Repeatability | `<<FILL: six independent preparations at 100 percent, one analyst/day/instrument, report %RSD>>` |
| Intermediate precision | `<<FILL: second analyst, different day and instrument, repeat preparations; compare>>` |

## 7. Acceptance criteria (pre-defined; do not change after seeing data)

| Characteristic | Acceptance criterion (justify per method) |
|---|---|
| Specificity | `<<FILL: no interfering peak above a stated threshold at the analyte RT; peak purity passes>>` |
| Accuracy | `<<FILL: mean recovery within a stated band, e.g. 98.0 to 102.0 percent for an assay>>` |
| Repeatability | `<<FILL: %RSD at or below a method-appropriate limit, e.g. <= 2.0 percent>>` |
| Intermediate precision | `<<FILL: %RSD within a stated limit; analyst mean difference within a stated absolute>>` |
| LOQ/LOD (if tested) | `<<FILL: signal-to-noise typically >= 10 (LOQ) and >= 3 (LOD), or the method's stated approach>>` |
| System suitability | Meets the compendial SST exactly as written |

## 8. Deviation and OOS handling

Any failure is raised as a deviation and investigated; results are not rerun until they pass. Reference `<<FILL: deviation SOP-ID>>` and `<<FILL: OOS SOP-ID>>`. A failed verification is a signal about method suitability for your article, not a reason to quietly adjust the method.

## 9. Roles and approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (QC SME) | `<<FILL>>` | | |
| Reviewer (method validation group) | `<<FILL>>` | | |
| Approver (QA, independent of execution) | `<<FILL>>` | | |

QA approval must be independent of execution; the same person cannot author, execute, and provide the sole quality approval.

---

## Filled specimen

A pre-approved verification protocol for an example finished-product assay by HPLC, where the formulation has two excipients not in the monograph's typical matrix and two analysts will run it (illustrative).

| Field | Entry |
|---|---|
| Compendial reference | USP monograph assay, current USP-NF edition |
| Specification | 90.0 to 110.0 percent of label |
| Characteristics verified | Specificity, accuracy, repeatability, intermediate precision |
| Excluded (with rationale) | Linearity/range (published range brackets the 90 to 110 percent spec; detector linearity well documented); LOQ (major-component assay) |
| Specificity design | Diluent blank, placebo, placebo spiked at nominal, forced-degradation sample |
| Accuracy design | Spiked placebo at 80/100/120 percent, triplicate each |
| Acceptance: accuracy | Mean recovery 98.0 to 102.0 percent per level |
| Acceptance: repeatability | %RSD <= 2.0 percent (n=6) |
| Acceptance: intermediate precision | Combined %RSD (n=12) <= 3.0 percent; analyst mean difference <= 2.0 percent absolute |

The protocol targets the two characteristics the risk assessment flagged (specificity and accuracy, because the matrix is the variable) plus the precision the multi-analyst use demands. It does not redo the full ICH Q2 battery, which is the shape of a <1226> study.

## Common findings this protocol prevents

- A compendial method used for release with no verification (a direct 21 CFR 211.194(a)(2) citation).
- Acceptance criteria set or moved after the data (testing into compliance).
- A modified method called "verified" when the change went beyond <621> allowable adjustments.
- No documented rationale for the characteristics that were excluded.
- Verification on an unqualified instrument or against a stale compendial edition.

## How to adapt this protocol

1. Title it precisely and number it under document control.
2. Quote the actual monograph system suitability verbatim in section 3.
3. Let the characteristic-selection risk assessment drive section 4.
4. Justify each acceptance criterion against your spec and matrix, not a copied table.
5. Get QA pre-approval before any data is generated, and confirm the USP edition is current.
