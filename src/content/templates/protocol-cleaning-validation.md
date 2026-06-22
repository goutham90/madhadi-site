---
title: "Protocol: Cleaning Validation"
description: "A plug-and-play cleaning validation protocol covering worst-case product and equipment grouping, MACO and per-swab limits, swab and rinse sampling, recovery factors, dirty and clean hold times, analytical methods, runs, and acceptance, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Protocol"
pillar: "quality-assurance"
relatedArticles: ["cleaning-validation-execution"]
tags: ["cleaning validation", "maco", "protocol", "swab sampling", "recovery study", "annex 15", "gmp"]
tier: "Advanced"
---

This is a ready-to-use cleaning validation protocol. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your equipment diagrams and HBEL monographs, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Cleaning Validation Protocol for `<<FILL: equipment train / product>>` |
| Document number | `<<FILL: PRT-ID, e.g. CVP-MFG-022>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Validation>>` |
| Site / area | `<<FILL: site, building, room, equipment train>>` |
| Linked report | `<<FILL: report number to be issued, e.g. CVR-MFG-022>>` |

## 1. Purpose

This protocol defines the approach, sampling, limits, and acceptance criteria to demonstrate that the cleaning procedure `<<FILL: cleaning SOP-ID>>` consistently reduces residue of the worst-case product, cleaning agent, and microbial load on the equipment train `<<FILL: equipment train name/ID>>` to below scientifically justified, health-based limits. The objective is to prove that carryover into the next product is controlled to a safe level, run after run.

## 2. Scope

This protocol applies to the equipment train listed in section 5.2 at `<<FILL: site / area>>`, cleaned by the procedure named above. It covers product-contact surfaces, the cleaning agent, microbial and (where the product is sterile or injectable) endotoxin limits, and the dirty and clean hold times to be challenged. It does not cover non-product-contact surfaces, facility cleaning, or sanitization of utilities, which are governed by `<<FILL: cross-reference SOP-IDs>>`.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Validation engineer / scientist | Authors this protocol, derives worst-case and grouping rationale, MACO and limit calculations, designs the sampling plan, and writes the report. |
| Toxicologist | Derives and signs the ADE/PDE/HBEL monographs and the cleaning-agent limit consumed by section 6. |
| Manufacturing / equipment SME | Confirms the hardest-to-clean locations are physically correct and reachable, executes the cleaning, and supports hold-time realism. |
| QC analytical | Validates the analytical methods, confirms the limit of quantitation sits below the acceptance limits, establishes recovery, and runs samples. |
| Qualified samplers | Execute swab and rinse sampling per the qualified technique. |
| Quality Assurance | Reviews and approves the protocol, HBEL, deviations, and report, and owns the disposition. |

## 4. Definitions

- **MACO (maximum allowable carryover)**: the maximum quantity of the worst-case product that may carry into the entire next batch without exceeding a safe exposure.
- **MSSR (maximum safe surface residue)**: MACO divided by total shared product-contact surface area, in ug/cm2.
- **Recovery factor**: the fraction of residue a sampling method and assay actually capture from a surface, established by coupon study.
- **DHT (dirty hold time)**: the maximum time soiled equipment may wait before cleaning while cleaning remains effective.
- **CHT (clean hold time)**: the maximum time cleaned equipment may be stored before use while staying within microbial and endotoxin limits.
- **Worst case**: the product, equipment item, or condition that is hardest to clean or most risk-bearing, validated to represent its group.

## 5. Equipment, products, and grouping

### 5.1 Worst-case product selection

The worst-case product is selected by a documented scoring of solubility, cleanability, lowest HBEL (smallest ADE), the next product's minimum batch size and shared surface area, and difficulty of analytical detection. Record the scoring in Attachment 1.

| Item | Entry |
|---|---|
| Worst-case product (residue validated) | `<<FILL: worst-case product>>` |
| Basis for selection | `<<FILL: lowest ADE / least soluble / hardest to clean, with score>>` |
| Next-product family represented | `<<FILL: products represented>>` |

### 5.2 Equipment train and grouping (bracketing)

List every product-contact item. Group by material of construction, design complexity, and cleaning method. Validate the largest and most complex item of each group and justify that it represents the group. Items with unique features (for example an internal coil) stand alone.

| Equipment item / ID | Material of construction | Cleaning method (CIP/COP/manual) | Group | Sampled? |
|---|---|---|---|---|
| `<<FILL>>` | `<<FILL: 316L / glass-lined / PTFE>>` | `<<FILL>>` | `<<FILL>>` | Yes / No |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Yes / No |

| Item | Entry |
|---|---|
| Total shared product-contact surface area | `<<FILL: total cm2>>` |
| Grouping rationale | `<<FILL: reference Attachment 2>>` |

## 6. Acceptance limit derivation (MACO to per-swab)

Compute all three criteria and carry the most conservative (lowest) as the limit, or use the health-based MACO as the safety limit and the traditional values as tighter internal action levels. State the recovery-correction convention once and apply it everywhere.

| Quantity | Formula | Inputs | Result |
|---|---|---|---|
| Health-based MACO (mg of A in batch B) | (ADE_A x MBS_B) / TDD_B | ADE_A = `<<FILL: mg/day>>`; MBS_B = `<<FILL: mg>>`; TDD_B = `<<FILL: mg/day>>` | `<<FILL>>` |
| 10 ppm criterion (mg) | 10 ppm x MBS_B | MBS_B = `<<FILL: mg>>` | `<<FILL>>` |
| Dose criterion (mg) | (1/1000 x smallest dose A x MBS_B) / TDD_B | `<<FILL>>` | `<<FILL>>` |
| Governing MACO | most conservative of the above | `<<FILL>>` | `<<FILL>>` |
| MSSR (ug/cm2) | MACO / total shared surface area | `<<FILL>>` | `<<FILL>>` |
| Swab limit (ug/swab) | MSSR x swab area | swab area = `<<FILL: cm2>>` | `<<FILL>>` |
| Recovery-corrected acceptance (ug/swab) | swab limit / recovery factor | recovery = `<<FILL: e.g. 0.72>>` | `<<FILL>>` |
| Rinse limit | MACO / total rinse volume, recovery-corrected | `<<FILL>>` | `<<FILL>>` |

**Recovery-correction convention for this protocol:** `<<FILL: state one convention, e.g. divide the swab limit by the recovery factor to set a corrected acceptance limit, OR multiply the measured result by 1/recovery and compare to the uncorrected limit. Use one only.>>`

**Cleaning-agent limit:** `<<FILL: toxicological limit per swab/rinse; conductivity/pH back to baseline value>>`.

## 7. Sampling plan

### 7.1 Location selection

Sample the hardest-to-clean locations: welds, gasket grooves, agitator shafts and seals, baffles, spray-ball shadows, dip tubes, valve bodies, transfer-line low points, mesh and sintered elements, the splash line, and threads. Number each location on the equipment diagram in Attachment 3 and classify as swab (accessible) or rinse (inaccessible or porous). A final rinse sample covers total area.

| Location no. | Description | Swab or rinse | Swab area (cm2) | Worst-case rationale |
|---|---|---|---|---|
| `<<FILL: 1>>` | `<<FILL: agitator shaft weld>>` | Swab | `<<FILL: 25>>` | `<<FILL>>` |
| `<<FILL: 2>>` | `<<FILL: spray-ball shadow at baffle>>` | Swab | `<<FILL: 25>>` | `<<FILL>>` |
| `<<FILL: R1>>` | `<<FILL: whole-vessel final rinse>>` | Rinse | n/a | `<<FILL>>` |

### 7.2 Sampling method

| Item | Entry |
|---|---|
| Swab material / type | `<<FILL: swab type>>` |
| Swab solvent / wetting | `<<FILL: solvent>>` |
| Swab technique | `<<FILL: number of strokes, pattern, reference to qualified technique>>` |
| Rinse volume and solvent | `<<FILL>>` |
| Sampler qualification reference | `<<FILL: training/qualification record>>` |

## 8. Recovery factors

Recovery is established per residue, per surface material, and per sampling method, per the recovery study referenced below. Field results are corrected by the convention in section 6. Round recovery factors down so recovery is not over-credited.

| Residue | Surface | Method | Recovery factor | %RSD | Study reference |
|---|---|---|---|---|---|
| `<<FILL: worst-case product>>` | `<<FILL: 316L>>` | Swab | `<<FILL: 0.72>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: worst-case product>>` | `<<FILL: 316L>>` | Rinse | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: cleaning agent>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

Recovery interpretation: at or above 70 to 80 percent is acceptable; 50 to 70 percent is usable with the correction applied and a justification; below 50 percent must be scientifically justified and is challenged hard by inspectors. %RSD across replicates should be controlled, commonly at or below 15 to 20 percent.

## 9. Hold times to be challenged

| Item | Entry |
|---|---|
| Dirty hold time (DHT) to validate | `<<FILL: maximum hours/days plus margin>>` |
| DHT worst-case condition | `<<FILL: most difficult residue, longest realistic delay, warmest/most humid>>` |
| Clean hold time (CHT) to validate | `<<FILL: maximum hours/days>>` |
| CHT storage condition | `<<FILL: covered, ports capped, in actual storage area>>` |
| CHT sampling at maximum | `<<FILL: bioburden, endotoxin if injectable, optional rinse>>` |

DHT must be validated at or beyond the real campaign duration. If operations exceed the validated maximum, that is a deviation, not a quiet pass.

## 10. Analytical methods

| Item | Entry |
|---|---|
| Primary method | `<<FILL: e.g. TOC for general residue and cleaning agent>>` |
| Specific method | `<<FILL: e.g. HPLC-UV for the high-risk active>>` |
| Cleaning-agent confirmation | `<<FILL: conductivity / pH>>` |
| Method validation reference | `<<FILL: ICH Q2(R2) validation report number>>` |
| LOQ versus acceptance limit | `<<FILL: confirm LOQ sits below limit with margin>>` |

For TOC, convert the active's swab limit to an equivalent TOC value using the carbon fraction of the molecule, and always run swab and vial blanks with background subtraction. A method whose LOQ sits above the acceptance limit cannot be used for the disposition.

## 11. Number of runs

This protocol requires `<<FILL: number, conventionally three>>` consecutive successful cleaning runs to demonstrate reproducibility. If fewer initial runs are used, the risk-based or ongoing-verification justification is recorded in Attachment 4.

## 12. Acceptance criteria

A run passes only if all of the following are met at every sampled location. A single location over limit is a failure of the run, investigated as a deviation per `<<FILL: deviation SOP-ID>>`, not averaged away.

| Criterion | Requirement |
|---|---|
| Visual | No visible residue on cleaned, dried equipment under defined inspection |
| Chemical (swab) | Recovery-corrected residue at or below the per-swab limit at every location |
| Chemical (rinse) | Recovery-corrected residue at or below the rinse limit |
| Cleaning agent | Below its toxicological limit; conductivity/pH back to baseline |
| Microbial | Bioburden at or below limit (and endotoxin at or below limit for sterile/injectable) |
| Hold times | Limits met after maximum DHT and maximum CHT |

## 13. Deviations and handling

Any out-of-limit result, sampling error, or departure from this protocol is documented as a deviation per `<<FILL: deviation SOP-ID>>` and assessed for impact before the cleaning state is accepted. Do not release the equipment for the next product until the deviation is resolved.

## 14. Report

On completion, the validation owner issues report `<<FILL: report number>>` summarizing the runs, the corrected results against limits, all deviations and their resolution, and the conclusion on the validated state, including the validated DHT and CHT. The report is approved by QA.

## 15. Attachments

| No. | Attachment |
|---|---|
| 1 | Worst-case product scoring |
| 2 | Equipment grouping rationale |
| 3 | Numbered equipment diagrams / labeled photos with sampling locations |
| 4 | Run-number justification (if other than three) |
| 5 | HBEL monographs and cleaning-agent limit references |

## 16. References

> 21 CFR 211.67 (equipment cleaning and maintenance).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> EMA Guideline on setting health-based exposure limits, EMA/CHMP/CVMP/SWP/169430/2012, and its implementation Q&A.
> ICH Q3D (Elemental Impurities) and ICH M7 (Mutagenic Impurities), where relevant.
> ICH Q2(R2), Validation of Analytical Procedures.
> ICH Q9, Quality Risk Management.
> PIC/S PI 006, Recommendations on Validation Master Plan and cleaning validation.
> FDA Guide to Inspections, Validation of Cleaning Processes (1993).
> USP <643> Total Organic Carbon and USP <1231> Water for Pharmaceutical Purposes (where TOC is used).

Confirm the current version and clause numbers of each reference before issue.

## 17. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 18. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Validation) | `<<FILL>>` | | |
| Toxicology reviewer | `<<FILL>>` | | |
| Reviewer (QC) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the protocol's limit derivation and acceptance section completed for an example mixing-vessel train, so you can see the level of detail an inspector expects. The company, products, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Equipment train | Mixing vessel train, vessels MV-101 to MV-105, 316L electropolished, automated CIP |
| Worst-case product | Compound X (lowest ADE = 0.10 mg/day, least soluble in the CIP solvent) |
| Total shared product-contact surface area | 400,000 cm2 |
| Health-based MACO | (0.10 mg/day x 50,000,000 mg) / 500 mg/day = 10,000 mg = 10 g |
| 10 ppm criterion | 10 ppm x 50 kg = 500 mg = 0.5 g |
| Governing MACO | 0.5 g (10 ppm governs; tighter than health-based) |
| MSSR | 500 mg / 400,000 cm2 = 1.25 ug/cm2 |
| Swab limit (25 cm2 swab) | 1.25 ug/cm2 x 25 cm2 = 31.25 ug/swab |
| Recovery factor (Compound X on 316L, swab) | 0.72 |
| Recovery-corrected acceptance | 31.25 / 0.72 = 43.4 ug/swab |
| Sampling locations | 6 swab (agitator shaft weld, two spray-ball shadows, lower gasket groove, dip-tube base, baffle root) + 1 whole-vessel final rinse |
| DHT validated | 7 days (campaign length 6 days plus margin), residue and bioburden within limits |
| CHT validated | 14 days, covered, ports capped, bioburden and endotoxin within limits |
| Methods | TOC primary for general residue and cleaning agent; HPLC-UV for Compound X; conductivity for cleaning-agent rinse-off |
| Runs | 3 consecutive successful |
| Result | All 6 swabs and the rinse below 43.4 ug/swab corrected; visually clean; cleaning agent below limit; bioburden within limit. Validated state accepted. |

In this example the team computed all three criteria, found 10 ppm governed rather than the friendlier health-based number, sampled the hardest spots, validated hold times at the real campaign length, and confirmed the analytical LOQ sat below the corrected limit. That sequence is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this protocol prevents

- Limits derived only from the old 1/1000 dose or 10 ppm with no health-based (HBEL) evaluation after 2015.
- The friendly health-based number used without cross-checking the 10 ppm and dose criteria.
- Sampling at easy-to-clean locations with no documented worst-case rationale on diagrams.
- One recovery factor applied across multiple materials of construction, or a recovery study run on the wrong surface finish or with wet spiking.
- An analytical method whose LOQ sits above the acceptance limit, with "not detected" reported as a pass.
- Dirty hold time on file shorter than the real campaign length; clean hold time never challenged under real storage.
- Cleaning agent ignored, with only the active assayed.
- Results averaged across locations to mask a single failing swab.

## How to adapt this protocol

1. Set your document number, owner, report number, and effective date in the header.
2. Replace the worst-case product and equipment grouping in section 5 with your own scoring and your real equipment inventory.
3. Fill the MACO table in section 6 with your ADE, batch size, dose, and surface-area numbers, and state your one recovery-correction convention.
4. Number your actual sampling locations on real diagrams and attach them.
5. Point the cross-references in sections 5.2, 12, and 13 to your real cleaning, deviation, and cross-contamination procedures.
6. Confirm every regulation in section 16 against the current published version before issue.
