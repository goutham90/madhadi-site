---
title: "Record: OOS Investigation Report (Phase 1 and Phase 2)"
description: "A plug-and-play two-phase OOS investigation record: triage, Phase 1 laboratory assessment with every execution area documented, Phase 2 root cause, retest and resample plan, assignable cause and invalidation, disposition, and CAPA, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Record"
pillar: "quality-assurance"
relatedArticles: ["oos-investigation-process"]
tags: ["oos", "investigation record", "laboratory", "qc", "root cause", "batch disposition", "21 cfr 211.192"]
tier: "Intermediate"
---

This is a ready-to-use investigation record. Replace every `<<FILL: ...>>` placeholder with your own specifics, and complete every field at the phase it belongs to, contemporaneously and signed. Phase 1 must be completed and signed before Phase 2 begins. Sections marked "complete only if applicable" are left N/A with a reason when not used. A worked filled specimen follows so you can see how a completed record reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Record title | OOS Investigation Report (Phase 1 and Phase 2) |
| Form / template number | `<<FILL: FORM-ID, e.g. FRM-QC-031-01>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Governing SOP | `<<FILL: SOP-ID for OOS investigation>>` |
| OOS event ID | `<<FILL: OOS-YYYY-NNNN>>` |
| Date opened | `<<FILL: date>>` |

## Section A: Event identification and triage

| Field | Entry |
|---|---|
| Material / product | `<<FILL: name>>` |
| Lot / batch number | `<<FILL: lot>>` |
| Sample type | Raw material / In-process / Finished product / Stability / Other: `<<FILL>>` |
| Test performed | `<<FILL: e.g. assay, dissolution, sterility, endotoxin>>` |
| Method ID and version | `<<FILL: AM-NNN vN>>` |
| Specification (limits) | `<<FILL: e.g. 95.0 to 105.0 percent LC>>` |
| Reportable-result definition | `<<FILL: e.g. mean of 2 preparations>>` |
| Original reportable result | `<<FILL: value>>` |
| Confirmed OOS (not OOT/aberrant) | Yes / No (if No, route to OOT or raw-data note and close this record) |
| Instrument ID | `<<FILL: e.g. HPLC-07>>` |
| Sequence / run file | `<<FILL: file name>>` |
| Analyst | `<<FILL: name>>` |
| Date / time observed | `<<FILL>>` |

**Triage actions confirmed before any rerun:**

| Action | Confirmed (initials / date) |
|---|---|
| All solutions, standards, mobile phase, column retained where practical | `<<FILL>>` |
| No reinjection, reintegration, or recalculation performed before review | `<<FILL>>` |
| System clock, time zone, and date format not changed | `<<FILL>>` |
| QC supervisor and QA notified same working day | `<<FILL>>` |
| Event logged with unique OOS ID | `<<FILL>>` |

## Section B: Phase 1 laboratory assessment

Performed by the analyst and QC supervisor under QA oversight, before Phase 2, evaluating execution only. Document each area as checked with the specific evidence reviewed. "Checked" with no evidence is not acceptable.

| # | Assessment area | Finding | Evidence reviewed (file / printout / lot) | OK / Issue |
|---|---|---|---|---|
| 1 | Correct, current, approved method and version; correct reportable formula | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 2 | Instrument in calibration/qualification; SST met before and during run | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 3 | Sample prep: weight, diluent, dilution factor, concentration in validated range | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 4 | Reagents and standards in date, stored correctly, traceable, prepared correctly | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 5 | Calculation re-run independently; dilution factor, potency, response factor correct | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6 | Analyst trained and qualified on this method and instrument (supporting only) | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 7 | Raw data: peak shape, co-elution, baseline, integration per method, no saturation or missed injection | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

**Phase 1 conclusion (select exactly one):**

| Conclusion | Select | Detail required |
|---|---|---|
| Assignable laboratory cause found | `<<FILL: yes/no>>` | State the specific error, the evidence, and the source; describe the justified retest or recalculation |
| No assignable laboratory cause found | `<<FILL: yes/no>>` | Result stands as a confirmed laboratory finding; Phase 2 begins |

| Field | Entry |
|---|---|
| Assignable cause statement (if found) | `<<FILL>>` |
| Corrected / valid result (if recalculated) | `<<FILL: value or N/A>>` |
| Original result retained and documented | Yes / No |
| Phase 1 reviewer (analyst), signature, date | `<<FILL>>` |
| Phase 1 reviewer (QC supervisor), signature, date | `<<FILL>>` |
| QA oversight, signature, date | `<<FILL>>` |

## Section C: Retest / resample plan (complete only if applicable)

Approved by QA before any new result is generated. Leave N/A with a reason if neither is used.

| Field | Entry |
|---|---|
| Type | Retest (original retained sample) / Resample (new sample) / Not applicable |
| Scientific rationale | `<<FILL>>` |
| Justification for resampling (documented unrepresentative original sample) | `<<FILL: required only for resample>>` |
| Number of preparations / determinations | `<<FILL>>` |
| Analyst(s) performing (often a second qualified analyst) | `<<FILL>>` |
| Predefined acceptance / evaluation rule (set before results seen) | `<<FILL>>` |
| All results, including the original OOS, will be in the final evaluation | Confirmed: `<<FILL>>` |
| Outlier procedure applied (only if prospectively defined and justified) | None / `<<FILL: procedure ID and assay type>>` |
| QA authorization, signature, date (before testing) | `<<FILL>>` |

## Section D: Phase 2 full investigation (complete when Phase 1 finds no assignable laboratory cause)

Led by QA with manufacturing, process, and, where relevant, supplier quality and validation.

| # | Investigation area | Finding | Evidence reviewed | OK / Issue |
|---|---|---|---|---|
| 1 | Batch manufacturing record: steps in sequence, parameters in proven ranges, deviations open during manufacture | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 2 | Related batches and historical distribution; trend after any material change | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 3 | Raw materials and components: approved suppliers, released lots, no borderline incoming results | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 4 | Process validation: conforming product reliably yielded under conditions used | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

| Field | Entry |
|---|---|
| Root-cause method used | Fishbone + 5-Whys / Fault tree / Other: `<<FILL>>` |
| Candidate causes considered (ruled in/out with reason) | `<<FILL>>` |
| Root cause determined | `<<FILL: cause, or "no assignable product cause identified">>` |
| Scope: other lots or products potentially affected | `<<FILL: list or "none">>` |
| Distributed product implicated | Yes / No (if Yes, escalate per recall / field action SOP) |
| Investigational product: sponsor notified, subject-safety impact | N/A / `<<FILL>>` |

## Section E: Assignable cause and invalidation decision

| Field | Entry |
|---|---|
| Result invalidated | Yes / No |
| Basis for invalidation (must be a documented assignable cause) | `<<FILL>>` |
| Decision made by (QA, not the analyst who generated the result) | `<<FILL: name, signature, date>>` |

If no assignable cause was identified, the OOS is confirmed and attributable to the material. Record "Result invalidated: No" and proceed to disposition on that basis.

## Section F: Batch disposition

| Field | Entry |
|---|---|
| Disposition | Release / Reject / Further characterize, then: `<<FILL>>` |
| Disposition rationale (follows from the findings) | `<<FILL>>` |
| Patient-risk consideration (product type, route, severity) | `<<FILL>>` |
| Rejected batch segregated, labeled, quarantined under control | N/A / Yes |
| QP / authorized release decision (where applicable) | N/A / `<<FILL: name, signature, date>>` |
| Disposition approved by, signature, date | `<<FILL>>` |

## Section G: CAPA and closure

| Field | Entry |
|---|---|
| CAPA required | Yes / No |
| CAPA reference | `<<FILL: CAPA-ID or N/A>>` |
| Corrective / preventive actions | `<<FILL>>` |
| Effectiveness check planned | `<<FILL: how and when>>` |
| Target closure date | `<<FILL>>` |
| Actual closure date | `<<FILL>>` |
| Timeline met (or justified extension on file) | Yes / No: `<<FILL: justification ref>>` |
| Final QA approval, signature, date | `<<FILL>>` |

## References

This record satisfies the documentation requirements of the governing OOS SOP and the following sources. Confirm the current version and clause numbers of each before issue.

> 21 CFR 211.192 (production record review and investigation of any unexplained discrepancy or failure of a batch or component to meet specifications, whether or not the batch has been distributed).
> 21 CFR 211.165(f) (rejection of batches that fail to meet specifications).
> 21 CFR 211.194 (laboratory records and the supporting raw data).
> FDA Guidance for Industry, Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production (October 2006).
> ICH Q7, section 8.15 (deviations) and section 2.5 (quality unit review of deviations and investigations) for active pharmaceutical ingredients.
> ICH Q10 (pharmaceutical quality system) for the systemic handling and trending of quality events.
> EU GMP Chapter 6 (quality control) and Chapter 1 (pharmaceutical quality system); MHRA GxP Data Integrity Guidance and Definitions.
> 21 CFR 820.90 / harmonized QMSR (control of nonconforming product) for finished-device testing.

---

## Filled specimen

The following shows the record completed for an example finished-product assay closed at Phase 1 on a documented integration error. The company, system, and numbers are illustrative; replace them with your own.

**Section A (extract):**

| Field | Entry |
|---|---|
| Material / product | Product X tablets |
| Lot / batch number | AB1234 |
| Test performed | Assay by HPLC |
| Method ID and version | AM-201 v6 |
| Specification | 95.0 to 105.0 percent of label claim |
| Reportable-result definition | Mean of 2 preparations |
| Original reportable result | 93.4 percent (OOS) |
| Confirmed OOS | Yes |
| Instrument ID | HPLC-07 |
| Sequence / run file | HPLC-07-2206-031 |
| Analyst | J. Doe |
| Date / time observed | 02 June 2026, 13:50 |

**Section B (extract):**

| # | Assessment area | Finding | Evidence reviewed | OK / Issue |
|---|---|---|---|---|
| 2 | Instrument / SST | SST passed, standard replicate RSD 0.4 percent | Sequence HPLC-07-2206-031, SST report | OK |
| 4 | Standards | Reference standard in date, stored correctly | Standard lot RS-2206, COA | OK |
| 7 | Raw data | Main peak shoulder merged with late-eluting peak; integration baseline dropped manually, excluding part of analyte area | Chromatogram, audit trail entry (reprocess by J. Doe, 14:22) | Issue |

| Field | Entry |
|---|---|
| Phase 1 conclusion | Assignable laboratory cause found |
| Assignable cause statement | Manual integration excluded part of the analyte peak; reprocessing per method gives the valid value |
| Corrected / valid result | 99.1 percent (within spec) |
| Original result retained and documented | Yes |
| Phase 1 reviewer (QC supervisor), signature, date | A. Patel, signed, 03 June 2026 |
| QA oversight, signature, date | R. Gomez, signed, 03 June 2026 |

**Section E and F (extract):**

| Field | Entry |
|---|---|
| Result invalidated | Yes |
| Basis for invalidation | Documented integration error visible in the audit trail; corrected value obtained by reprocessing per method |
| Decision made by | R. Gomez (QA), signed, 03 June 2026 |
| Disposition | Release, on the corrected reportable value of 99.1 percent |
| Disposition rationale | Original result invalidated on a documented laboratory cause; corrected reportable value within specification |

**Section G (extract):**

| Field | Entry |
|---|---|
| CAPA required | Yes |
| CAPA reference | CAPA-2026-0078 |
| Corrective / preventive actions | Clarify integration parameters in the method, retrain analyst, review last 20 runs of method AM-201 for similar manual integrations |
| Actual closure date | 03 June 2026 |
| Timeline met | Yes |

Change one fact and the record runs differently. Had the chromatogram been clean, SST passed, calculation right, and nothing in the preparation explaining the number, Phase 1 would close with no cause, the 93.4 percent would stand, and Section D Phase 2 would open: a long granulation hold time in the batch record and two adjacent lots trending low (97.8 and 96.9 percent against a 95.0 floor) would give the OOS a product-side story, widen the scope to those lots, and force a disposition that confronts a real assay shortfall. The two records start with the identical number; the investigation, not the number, decides what it means.

## Common inspection findings this record prevents

- Phase 1 documented as "no error found" with no evidence behind each assessment area.
- A result invalidated with no documented assignable cause recorded in Section E.
- Retest or resample performed without a QA-approved plan and predefined acceptance rule signed before results were seen.
- The original OOS omitted from the final evaluation, or an outlier test used to discard a failing assay.
- The analyst who generated the result recorded as the person who invalidated it.
- Phase 2 root cause stated as "human error" with no specific error and no scope assessment of related lots.
- Disposition that does not follow from the findings, or a batch released over a confirmed OOS.
- Closure past the committed timeline with no justification on file.

## How to adapt this record

1. Set the form number and the governing SOP in the header to match your OOS procedure.
2. Add or remove Phase 1 assessment rows in Section B to fit your test types (for example microbiological identity, growth promotion, and incubation controls for a sterility OOS; standard curve and controls for a bioassay).
3. Keep the one-conclusion rule in Phase 1; do not add an in-between option.
4. Point Section D and F cross-references to your real recall, stability, and batch release procedures, and add the QP signature line only where Annex 16 release applies.
5. Tie Section G to your CAPA system so the CAPA-ID and effectiveness check are traceable.
6. Confirm every regulation cited in the governing SOP against the current published version before issue.
