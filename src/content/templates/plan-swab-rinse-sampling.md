---
title: "Plan: Swab and Rinse Sampling for Cleaning Validation"
description: "A plug-and-play swab and rinse sampling plan: numbered worst-case locations, swab area and technique, rinse volumes, blanks and controls, chain of custody, and acceptance per location, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Plan"
pillar: "quality-assurance"
relatedArticles: ["cleaning-validation-execution"]
tags: ["cleaning validation", "swab sampling", "rinse sampling", "sampling plan", "recovery study", "annex 15", "gmp"]
tier: "Advanced"
---

This is a ready-to-use swab and rinse sampling plan to attach to a cleaning validation protocol. Replace every `<<FILL: ...>>` placeholder with your own specifics, attach the numbered equipment diagrams, and route it through your normal document control. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Swab and Rinse Sampling Plan for `<<FILL: equipment train / product>>` |
| Document number | `<<FILL: PLN-ID, e.g. CVS-MFG-022>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Parent protocol | `<<FILL: cleaning validation protocol number>>` |
| Document owner | `<<FILL: role, e.g. Validation Engineer>>` |
| Site / area | `<<FILL: site, building, room, equipment train>>` |

## 1. Purpose

This plan defines exactly where, how, and with what controls swab and rinse samples are taken during execution of cleaning validation protocol `<<FILL: protocol number>>`. It exists so that sampling is reproducible across samplers and runs, that the hardest-to-clean locations are covered, and that each sample can be tied to a location, a swab area, a recovery factor, and an acceptance limit.

## 2. Scope

This plan covers product-contact sampling on the equipment train in the parent protocol: swab sampling of accessible worst-case locations, rinse sampling of inaccessible or large-area surfaces, the blanks and controls run with each sample set, and chain of custody to the laboratory. It does not set the acceptance limits themselves, which are derived in the parent protocol, nor does it qualify the analytical methods, which are validated under `<<FILL: method validation reference>>`.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Validation engineer / scientist | Authors this plan, selects and justifies locations, and reconciles results to limits. |
| Manufacturing / equipment SME | Confirms the locations are physically correct, reachable, and worst case. |
| Qualified samplers | Execute swab and rinse sampling per the qualified technique and complete the sampling record. |
| QC analytical | Receives samples, confirms the LOQ sits below the per-location limit, runs the assay, and reports recovery-corrected results. |
| Quality Assurance | Approves the plan and the sampling record, and oversees deviations. |

## 4. Definitions

- **Swab sample**: a direct, location-specific sample taken by physically wiping a defined surface area with a wetted swab.
- **Rinse sample**: a sample of the final rinse solution that has contacted a large or inaccessible surface, used for area coverage.
- **Swab area**: the defined surface area wiped for one swab, used to convert a per-area limit to a per-swab limit.
- **Blank / control**: a swab or vial processed without contacting equipment, used to measure and subtract background.
- **Recovery factor**: the established fraction a swab or rinse captures, applied to correct field results.

## 5. Sampling locations

Locations are the hardest-to-clean spots: welds, gasket grooves, agitator shafts and seals, baffles, spray-ball shadows, dip tubes, valve bodies, transfer-line low points, mesh and sintered elements, the splash line, and threads. Each is numbered on the equipment diagram in Attachment 1, classified swab or rinse, and justified as worst case. A final rinse covers total area.

| Loc. no. | Equipment item / ID | Description | Swab or rinse | Material | Swab area (cm2) | Per-location limit (corrected) | Worst-case rationale |
|---|---|---|---|---|---|---|---|
| `<<FILL: 1>>` | `<<FILL>>` | `<<FILL: agitator shaft weld>>` | Swab | `<<FILL: 316L>>` | `<<FILL: 25>>` | `<<FILL: ug/swab>>` | `<<FILL>>` |
| `<<FILL: 2>>` | `<<FILL>>` | `<<FILL: spray-ball shadow>>` | Swab | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: R1>>` | `<<FILL>>` | `<<FILL: whole-vessel final rinse>>` | Rinse | `<<FILL>>` | n/a | `<<FILL: ug/mL or total>>` | `<<FILL>>` |

## 6. Swab sampling method

Follow the qualified technique exactly. The recovery study mirrors this method, so any departure invalidates the recovery factor.

| Item | Entry |
|---|---|
| Swab type / material | `<<FILL: swab type and lot control>>` |
| Wetting solvent | `<<FILL: solvent>>` |
| Swab area template | `<<FILL: defined area, e.g. 5 cm x 5 cm template>>` |
| Stroke pattern | `<<FILL: e.g. parallel strokes one direction, rotate swab, perpendicular strokes the other face>>` |
| Number of strokes / passes | `<<FILL>>` |
| Extraction solvent and volume | `<<FILL>>` |
| Handling and storage | `<<FILL: cap, label, time-to-analysis limit, temperature>>` |

## 7. Rinse sampling method

| Item | Entry |
|---|---|
| Rinse solvent | `<<FILL: e.g. purified water or WFI>>` |
| Rinse volume | `<<FILL>>` |
| Collection point | `<<FILL: lowest drain point / sample valve>>` |
| Volume sampled for assay | `<<FILL>>` |
| Handling and storage | `<<FILL: container, label, time-to-analysis limit, temperature>>` |

## 8. Blanks and controls

Run with every sample set, identified on the sampling record:

| Control | Purpose | Frequency |
|---|---|---|
| Swab blank | Background carbon/residue from an unused swab through the full process | `<<FILL: each set>>` |
| Vial / solvent blank | Background from extraction solvent and vials | `<<FILL: each set>>` |
| Field blank | A swab taken to the floor, not contacting equipment, to detect environmental contribution | `<<FILL: each run>>` |
| Positive / recovery control (optional) | Confirms the assay reads a known spike on the day | `<<FILL: as defined>>` |

Background from blanks is subtracted per the analytical method. Uncontrolled background carbon is a quiet way to fail or to falsely pass.

## 9. Sampling sequence

1. Confirm the equipment is cleaned, dried, and visually inspected. Record the visual result before sampling.
2. Verify samplers are qualified and the parent protocol and this plan are the current versions.
3. Take the swab blank and vial blank first; label and set aside.
4. Sample each numbered swab location in the order on the diagram, using the section 6 technique. Do not re-swab a location.
5. Take the rinse sample(s) per section 7 after the swabs.
6. Take the field blank.
7. Complete the sampling record (section 11), including any deviation from the plan.
8. Maintain chain of custody to the laboratory (section 10).

## 10. Chain of custody

Each sample is labeled with the plan number, run number, location number, sampler, date, and time. The sampler and the laboratory sign the transfer. Samples are analyzed within the time-to-analysis limit stated in sections 6 and 7. Any break in custody or an exceeded hold-to-analysis time is a deviation.

## 11. Sampling record (per run)

| Field | Entry |
|---|---|
| Run number | `<<FILL>>` |
| Date / shift | `<<FILL>>` |
| Equipment cleaned per SOP | `<<FILL: cleaning SOP-ID and record>>` |
| Visual inspection result | Pass / Fail |
| Samplers (name, qualification, signature) | `<<FILL>>` |
| Swab locations sampled (count) | `<<FILL>>` |
| Rinse samples taken (count) | `<<FILL>>` |
| Blanks / controls taken | `<<FILL>>` |
| Deviations from plan | `<<FILL: none, or detail>>` |
| Chain-of-custody transfer (sampler / lab, time) | `<<FILL>>` |
| QA review (name, signature, date) | `<<FILL>>` |

## 12. Acceptance per location

| Criterion | Requirement |
|---|---|
| Visual | No visible residue before sampling |
| Swab (each location) | Recovery-corrected residue at or below the per-location limit in section 5 |
| Rinse | Recovery-corrected residue at or below the rinse limit |
| Blanks | Background within the method's defined control and properly subtracted |

A single location over its limit is a failure of the run, raised as a deviation per `<<FILL: deviation SOP-ID>>`, not averaged with passing locations.

## 13. Attachments

| No. | Attachment |
|---|---|
| 1 | Numbered equipment diagrams / labeled photos with sampling locations |
| 2 | Qualified swab technique reference |
| 3 | Recovery study reference (factors per residue, surface, method) |

## 14. References

> EU GMP Annex 15 (Qualification and Validation), 2015 revision (recovery for swab and rinse, worst-case sampling).
> FDA Guide to Inspections, Validation of Cleaning Processes (1993) (swab the hardest-to-clean location).
> PIC/S PI 006, Recommendations on Validation Master Plan and cleaning validation.
> ICH Q2(R2), Validation of Analytical Procedures (method sensitivity and LOQ versus limit).
> USP <643> Total Organic Carbon and USP <1231> Water for Pharmaceutical Purposes (where TOC and rinse water apply).

Confirm the current version and clause numbers of each reference before issue.

## 15. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 16. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Validation) | `<<FILL>>` | | |
| Reviewer (Manufacturing SME) | `<<FILL>>` | | |
| Reviewer (QC) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the location table and a sampling record completed for an example mixing vessel, so you can see the level of detail an inspector expects. The numbers are illustrative; replace them with your own.

| Loc. no. | Description | Swab or rinse | Material | Swab area | Per-location limit (corrected) | Worst-case rationale |
|---|---|---|---|---|---|---|
| 1 | Agitator shaft lower weld | Swab | 316L EP | 25 cm2 | 43.4 ug/swab | Weld crevice in the CIP spray shadow, hardest to clean |
| 2 | Spray-ball shadow behind baffle | Swab | 316L EP | 25 cm2 | 43.4 ug/swab | Not directly hit by spray pattern |
| 3 | Lower gasket groove at outlet | Swab | 316L EP | 25 cm2 | 43.4 ug/swab | Recess that traps residue |
| 4 | Dip-tube base | Swab | 316L EP | 25 cm2 | 43.4 ug/swab | Low point, drains last |
| R1 | Whole-vessel final rinse | Rinse | 316L EP | n/a | rinse limit per protocol | Covers total interior area |

| Field | Entry |
|---|---|
| Run number | Run 2 of 3 |
| Date / shift | 03 June 2026, day shift |
| Equipment cleaned per SOP | Cleaned per cleaning SOP, record CIP-2206-018 |
| Visual inspection result | Pass |
| Samplers | J. Romero (qualified, signed), 03 June 2026 |
| Swab locations sampled | 4 |
| Rinse samples taken | 1 |
| Blanks / controls taken | 1 swab blank, 1 vial blank, 1 field blank |
| Deviations from plan | None |
| Chain-of-custody transfer | J. Romero to QC, 10:40, signed both sides |
| QA review | L. Tan, signed, 04 June 2026 |

In this example all four swabs and the rinse came back below the recovery-corrected limit of 43.4 ug/swab, the blanks were within control and subtracted, and chain of custody held. That is what a clean execution looks like on the record.

## Common inspection findings this plan prevents

- Sampling at easy-to-clean locations with no numbered diagram or worst-case rationale.
- Different samplers using different swab technique, breaking the recovery factor that was established for one technique.
- No swab, vial, or field blanks, so background carbon is neither measured nor subtracted.
- Samples analyzed long after collection, past any qualified hold-to-analysis time, with no record of when they were taken.
- A location swabbed twice or skipped, with no note on the record.
- The per-location limit not written next to each location, so the disposition is reconstructed after the fact.

## How to adapt this plan

1. Set your document number, parent protocol number, and effective date in the header.
2. Number your actual worst-case locations on real equipment diagrams and attach them.
3. Carry the recovery-corrected per-location limits from the parent protocol into section 5.
4. State your exact swab type, solvent, area template, and stroke pattern in section 6 so the recovery study mirrors it.
5. Point the deviation cross-references to your real procedure and set your hold-to-analysis times.
6. Confirm every regulation in section 14 against the current published version before issue.
