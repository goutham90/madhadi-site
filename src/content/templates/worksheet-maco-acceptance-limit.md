---
title: "Template: MACO and Acceptance Limit Calculation Worksheet"
description: "A plug-and-play worksheet to derive the cleaning validation acceptance limit: health-based MACO, the 10 ppm and dose criteria, the governing limit, MSSR, per-swab and per-rinse limits, and recovery correction, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Template"
pillar: "quality-assurance"
relatedArticles: ["cleaning-validation-execution"]
tags: ["cleaning validation", "maco", "acceptance limit", "hbel", "ade", "swab limit", "recovery"]
tier: "Advanced"
---

This is a ready-to-use worksheet to derive a cleaning validation acceptance limit from health-based inputs. Replace every `<<FILL: ...>>` placeholder with your own numbers, work through the steps in order, and attach the completed worksheet to your cleaning validation protocol. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it. Build this as a validated, controlled calculation, not a one-off hand calc, so a new product or batch size recomputes everything consistently.

## Document control header

| Field | Entry |
|---|---|
| Document title | MACO and Acceptance Limit Worksheet for `<<FILL: worst-case product / equipment train>>` |
| Document number | `<<FILL: WS-ID, e.g. CVM-MFG-022>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Parent protocol | `<<FILL: cleaning validation protocol number>>` |
| Calculation tool reference | `<<FILL: validated spreadsheet ID and validation record>>` |
| Prepared by | `<<FILL: role, e.g. Validation Scientist>>` |

## 1. Purpose

This worksheet derives the cleaning validation acceptance limit for the worst-case product `<<FILL: worst-case product>>` carrying into the next product `<<FILL: next product>>` on the equipment train `<<FILL: train ID>>`. It computes the health-based MACO and the traditional criteria, selects the governing (most conservative) limit, and converts it to a per-swab and a per-rinse acceptance number with recovery correction.

## 2. Scope

This worksheet covers a single worst-case product into a single next product on one equipment train, using a health-based exposure limit from a signed toxicology monograph. It does not derive the ADE/PDE itself, which comes from the toxicology assessment `<<FILL: HBEL monograph reference>>`, and it does not establish recovery factors, which come from the recovery study `<<FILL: recovery study reference>>`.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Toxicologist | Provides and signs the ADE/PDE/HBEL for the residue and the cleaning-agent limit. |
| Validation engineer / scientist | Completes this worksheet, selects the governing limit, and carries it into the protocol. |
| QC analytical | Confirms the analytical limit of quantitation sits below the per-swab and per-rinse limits with margin. |
| Quality Assurance | Reviews and approves the HBEL, this worksheet, and the resulting limits. |

## 4. Definitions and conventions

- **ADE / PDE (mg/day)**: acceptable / permitted daily exposure of the residue, from the signed toxicology monograph.
- **MACO (mg)**: maximum allowable carryover of the residue into the entire next batch.
- **MSSR (ug/cm2)**: MACO divided by total shared product-contact surface area.
- **Per-swab limit (ug/swab)**: MSSR multiplied by the swab area.
- **Recovery factor**: established fraction the sampling method and assay capture, applied to correct results.

**Unit discipline:** keep mass units consistent through the chain. 1 mg = 1,000 ug. Carry surface area in cm2 and swab area in cm2 so MSSR and the per-swab limit cancel correctly.

**Recovery-correction convention (state one and use it everywhere):** `<<FILL: e.g. divide the swab limit by the recovery factor to set a corrected acceptance limit, OR multiply each measured result by 1/recovery and compare to the uncorrected limit.>>`

## 5. Inputs

| Symbol | Input | Value | Source |
|---|---|---|---|
| ADE_A | Acceptable daily exposure of worst-case product A | `<<FILL: mg/day>>` | `<<FILL: HBEL monograph ref>>` |
| MBS_B | Minimum batch size of next product B | `<<FILL: mg (convert kg x 1,000,000)>>` | `<<FILL: master batch record>>` |
| TDD_B | Largest daily dose of next product B | `<<FILL: mg/day>>` | `<<FILL: label / dose>>` |
| Dose_A | Smallest therapeutic dose of product A | `<<FILL: mg>>` | `<<FILL: label / dose>>` |
| SA | Total shared product-contact surface area | `<<FILL: cm2>>` | `<<FILL: equipment surface-area calc>>` |
| Aswab | Swab area | `<<FILL: cm2>>` | Sampling plan |
| Vrinse | Total rinse volume | `<<FILL: mL>>` | Sampling plan |
| RF_swab | Recovery factor, swab | `<<FILL: e.g. 0.72>>` | `<<FILL: recovery study ref>>` |
| RF_rinse | Recovery factor, rinse | `<<FILL>>` | `<<FILL: recovery study ref>>` |

## 6. Step 1: Health-based MACO

```
MACO_HBEL = (ADE_A x MBS_B) / TDD_B
```

| Quantity | Calculation | Result |
|---|---|---|
| MACO_HBEL (mg) | (`<<FILL: ADE_A>>` x `<<FILL: MBS_B>>`) / `<<FILL: TDD_B>>` | `<<FILL>>` |

## 7. Step 2: Traditional criteria (action levels)

```
MACO_10ppm = 10 ppm x MBS_B          (10 ppm = 10 mg per kg = MBS_B x 10 / 1,000,000 in mg)
MACO_dose  = ((1/1000) x Dose_A x MBS_B) / TDD_B
```

| Quantity | Calculation | Result |
|---|---|---|
| MACO_10ppm (mg) | `<<FILL>>` | `<<FILL>>` |
| MACO_dose (mg) | `<<FILL>>` | `<<FILL>>` |

## 8. Step 3: Governing MACO

Carry the most conservative (lowest) of the three. Visually clean is always an additional, separate criterion.

| Candidate | Value (mg) |
|---|---|
| MACO_HBEL | `<<FILL>>` |
| MACO_10ppm | `<<FILL>>` |
| MACO_dose | `<<FILL>>` |
| **Governing MACO** | `<<FILL: lowest>>` |
| Basis | `<<FILL: which criterion governs and why>>` |

## 9. Step 4: MSSR (per-area limit)

```
MSSR = governing MACO / SA
```

| Quantity | Calculation | Result |
|---|---|---|
| MSSR (mg/cm2) | `<<FILL: MACO>>` / `<<FILL: SA>>` | `<<FILL>>` |
| MSSR (ug/cm2) | mg/cm2 x 1,000 | `<<FILL>>` |

## 10. Step 5: Per-swab limit

```
Swab limit = MSSR (ug/cm2) x Aswab (cm2)
Recovery-corrected acceptance (swab) = Swab limit / RF_swab
```

| Quantity | Calculation | Result |
|---|---|---|
| Swab limit (ug/swab) | `<<FILL: MSSR>>` x `<<FILL: Aswab>>` | `<<FILL>>` |
| Recovery-corrected acceptance (ug/swab) | `<<FILL: swab limit>>` / `<<FILL: RF_swab>>` | `<<FILL>>` |

## 11. Step 6: Per-rinse limit

```
Rinse limit (ug/mL) = governing MACO (ug) / Vrinse (mL)
Recovery-corrected acceptance (rinse) = Rinse limit / RF_rinse
```

| Quantity | Calculation | Result |
|---|---|---|
| MACO (ug) | MACO (mg) x 1,000 | `<<FILL>>` |
| Rinse limit (ug/mL) | `<<FILL: MACO ug>>` / `<<FILL: Vrinse>>` | `<<FILL>>` |
| Recovery-corrected acceptance (rinse, ug/mL) | `<<FILL: rinse limit>>` / `<<FILL: RF_rinse>>` | `<<FILL>>` |

## 12. Step 7: Analytical feasibility check

| Check | Entry |
|---|---|
| Method LOQ (swab) | `<<FILL: ug/swab>>` |
| LOQ below per-swab acceptance with margin | Yes / No (if No, the method cannot support release) |
| Method LOQ (rinse) | `<<FILL: ug/mL>>` |
| LOQ below per-rinse acceptance with margin | Yes / No |
| For TOC: residue carbon fraction used | `<<FILL: fraction>>` |
| TOC-equivalent swab limit | `<<FILL: ug C/swab>>` |

A "below LOQ" result only proves a pass if the LOQ sits below the acceptance limit. If the LOQ is above the limit, improve the method or change methods before relying on this worksheet.

## 13. Result summary

| Output | Value |
|---|---|
| Governing MACO (mg) | `<<FILL>>` |
| MSSR (ug/cm2) | `<<FILL>>` |
| Per-swab acceptance, recovery-corrected (ug/swab) | `<<FILL>>` |
| Per-rinse acceptance, recovery-corrected (ug/mL) | `<<FILL>>` |
| Cleaning-agent limit | `<<FILL>>` |
| Additional criterion | Visually clean (always) |

## 14. References

> EU GMP Annex 15 (Qualification and Validation), 2015 revision (toxicological basis for limits, documented rationale).
> EMA Guideline on setting health-based exposure limits, EMA/CHMP/CVMP/SWP/169430/2012, and its implementation Q&A (HBEL apply to all products; traditional limits as alarm/action levels).
> ICH M7 (Mutagenic Impurities) and ICH Q3D (Elemental Impurities), where the residue or cleaning agent contributes such species.
> ICH Q9, Quality Risk Management.
> ICH Q2(R2), Validation of Analytical Procedures (LOQ below limit).
> FDA Guide to Inspections, Validation of Cleaning Processes (1993).
> USP <643> Total Organic Carbon (where TOC is used).

Confirm the current version and clause numbers of each reference before issue.

## 15. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 16. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared by (Validation) | `<<FILL>>` | | |
| Toxicology reviewer | `<<FILL>>` | | |
| Reviewer (QC) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the worksheet completed for an example worst-case product, so you can see the level of detail an inspector expects and how the cross-check changes the answer. The numbers are illustrative; replace them with your own.

**Inputs:**

| Symbol | Input | Value |
|---|---|---|
| ADE_A | ADE of worst-case Compound X | 0.10 mg/day |
| MBS_B | Minimum batch size of next product B | 50 kg = 50,000,000 mg |
| TDD_B | Largest daily dose of B | 500 mg/day |
| Dose_A | Smallest dose of A | 5 mg |
| SA | Total shared surface area | 400,000 cm2 |
| Aswab | Swab area | 25 cm2 |
| Vrinse | Total rinse volume | 100,000 mL |
| RF_swab | Recovery factor, swab | 0.72 |
| RF_rinse | Recovery factor, rinse | 0.85 |

**Calculation:**

| Quantity | Calculation | Result |
|---|---|---|
| MACO_HBEL (mg) | (0.10 x 50,000,000) / 500 | 10,000 mg = 10 g |
| MACO_10ppm (mg) | 50,000,000 x 10 / 1,000,000 | 500 mg = 0.5 g |
| MACO_dose (mg) | ((1/1000) x 5 x 50,000,000) / 500 | 500 mg = 0.5 g |
| Governing MACO | most conservative | 500 mg (10 ppm and dose tie, both tighter than health-based) |
| MSSR (ug/cm2) | 500 mg / 400,000 cm2 = 0.00125 mg/cm2 x 1,000 | 1.25 ug/cm2 |
| Swab limit (ug/swab) | 1.25 x 25 | 31.25 ug/swab |
| Recovery-corrected acceptance (swab) | 31.25 / 0.72 | 43.4 ug/swab |
| MACO (ug) | 500 mg x 1,000 | 500,000 ug |
| Rinse limit (ug/mL) | 500,000 / 100,000 | 5.0 ug/mL |
| Recovery-corrected acceptance (rinse) | 5.0 / 0.85 | 5.88 ug/mL |

**Feasibility:** swab LOQ = 5 ug/swab, well below 43.4 ug/swab corrected, so the method supports release.

In this example the health-based MACO came to 10 g, but the 10 ppm and dose criteria both came to 0.5 g, so the worksheet carried 0.5 g, not the friendly 10 g. The per-swab acceptance dropped accordingly to 43.4 ug/swab corrected. Running all three criteria and carrying the lowest is exactly the cross-check an inspector wants to see.

## Common inspection findings this worksheet prevents

- Only the health-based number derived, with the 10 ppm and dose criteria never computed, so it looks cherry-picked.
- A unit error (kg left where mg was needed) that inflates MACO by a thousand.
- Recovery applied in two different directions across the same program, so the disposition math cannot be reproduced.
- The per-swab limit set below the method's LOQ, making every result a meaningless "not detected".
- An ADE used with no signed toxicology monograph behind it.
- The calculation kept as an uncontrolled hand calc, so a new lower-ADE product silently breaks the old limit and no one notices.

## How to adapt this worksheet

1. Set your document number, parent protocol, and validated-tool reference in the header.
2. Enter your real ADE, batch size, dose, and surface-area inputs in section 5 and confirm units before you start.
3. State your one recovery-correction convention in section 4 and apply it in sections 10 and 11 only.
4. Recompute all three MACO criteria and carry the lowest; never skip the cross-check.
5. Confirm the analytical LOQ sits below the per-swab and per-rinse limits before issuing the protocol.
6. Build the live version as a validated, controlled spreadsheet so a new product or batch size recomputes everything, and confirm every regulation in section 14 against the current published version before issue.
