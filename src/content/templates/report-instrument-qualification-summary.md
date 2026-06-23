---
title: "Instrument Qualification Summary Report"
description: "A plug-and-play summary report that rolls up DQ, IQ, OQ, and PQ for a laboratory instrument: results against acceptance criteria, deviations and resolution, calibration status, the release-for-use decision, and the requalification interval, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Report"
pillar: "equipment-qualification"
relatedArticles: ["analytical-instrument-qualification", "equipment-qualification-lifecycle"]
tags: ["instrument qualification", "iq oq pq", "usp 1058", "calibration", "release for use", "requalification", "report"]
tier: "Intermediate"
---

This is a ready-to-use instrument qualification summary report. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your executed DQ, IQ, OQ, and PQ protocols and any deviation records, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

This report closes the qualification of a single laboratory instrument. It does not repeat the test data; it summarizes what was qualified, what the results were against the acceptance criteria in each protocol, what deviations occurred and how they were resolved, the current calibration state, and whether the instrument can be released for routine GxP use. An inspector reads this report first to decide whether to trust data the instrument produces, then follows the references into the executed protocols and the calibration records. Write it so every claim points to evidence. Group the instrument by USP <1058> qualification category (Group A, B, or C) so the depth of testing matches the instrument risk.

## Document control header

| Field | Entry |
|---|---|
| Document title | Instrument Qualification Summary Report for `<<FILL: instrument name>>` |
| Document number | `<<FILL: IQSR-ID, e.g. IQSR-QC-018>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Laboratory Manager>>` |
| Instrument / equipment ID | `<<FILL: asset / equipment ID>>` |
| Linked protocols | `<<FILL: DQ, IQ, OQ, PQ protocol numbers this report closes>>` |
| Site / area / lab | `<<FILL: site, building, lab>>` |

## 1. Purpose

This report summarizes the qualification of `<<FILL: instrument name and asset ID>>` at `<<FILL: site / lab>>` and records the decision on its release for routine GxP use. It rolls up the design qualification (DQ), installation qualification (IQ), operational qualification (OQ), and performance qualification (PQ) executed under the protocols listed in the header, states each result against its acceptance criteria, resolves every deviation, confirms calibration status, and sets the requalification interval. The objective is a single defensible record that an inspector or a reviewer can read to confirm the instrument is fit for its intended use.

## 2. Scope

This report covers the qualification lifecycle of the instrument identified above and the qualification phases executed for it. It states the intended use the instrument was qualified against, the USP <1058> qualification group, and the analytical methods or operations it is approved to support. It does not cover routine calibration and maintenance after release, which run under `<<FILL: calibration / preventive maintenance SOP-ID>>`, nor the validation of any analytical method run on the instrument, which is governed by `<<FILL: method validation SOP-ID / report number>>`.

## 3. Instrument and intended use

| Field | Entry |
|---|---|
| Instrument name | `<<FILL: e.g. HPLC with UV/diode-array detector>>` |
| Manufacturer / model | `<<FILL: manufacturer, model>>` |
| Serial number | `<<FILL: serial>>` |
| Asset / equipment ID | `<<FILL: asset ID>>` |
| Location | `<<FILL: building / room>>` |
| Software / firmware version | `<<FILL: CDS or control software name and version, firmware version>>` |
| USP <1058> qualification group | `<<FILL: pick the group per USP <1058>: Group A for simple non-measuring apparatus, Group B for routine instruments verified against firm specifications, or Group C for complex instruments needing the full DQ/IQ/OQ/PQ lifecycle>>` |
| Intended use | `<<FILL: methods / operations the instrument supports, e.g. assay and related-substances by HPLC>>` |
| GxP impact | `<<FILL: GxP / non-GxP, and data criticality>>` |

State the intended use in concrete terms. The operating ranges qualified in OQ and PQ must cover the actual ranges the methods use; an instrument qualified only at mid-range cannot support a method that runs at the extremes.

## 4. Responsibilities

| Role | Responsibility |
|---|---|
| Instrument owner / lab SME | Defines the intended use and operating ranges, executes or oversees the qualification, and authors this report. |
| Metrology / calibration | Confirms calibration status of the instrument and of the standards and reference equipment used in OQ and PQ, with traceability to a recognized standard. |
| QC analytical | Confirms the instrument supports the methods at the required ranges and that system suitability is met where applicable. |
| Validation / engineering | Reviews the qualification deliverables and the deviation resolutions. |
| IT / system administrator | Confirms software version, configuration, time synchronization, and access controls where the instrument is computerized. |
| Quality Assurance | Reviews and approves this report, the deviations, and the release decision, and owns the disposition. |

## 5. Qualification phases executed

State each phase, the protocol it ran under, the dates, and the outcome. A phase is "Pass" only when every acceptance criterion in its protocol was met or every deviation was resolved as not-impacting.

| Phase | Protocol number | Executed by | Date completed | Outcome (Pass / Pass with deviation / Fail) |
|---|---|---|---|---|
| Design qualification (DQ) | `<<FILL: DQ protocol no.>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Installation qualification (IQ) | `<<FILL: IQ protocol no.>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Operational qualification (OQ) | `<<FILL: OQ protocol no.>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Performance qualification (PQ) | `<<FILL: PQ protocol no.>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

For a Group A or simple Group B instrument, not every phase is separately documented; record "Not applicable, covered by `<<FILL: reference>>`" and state the justification rather than leaving a blank. Do not invent a DQ for a calibrated weight set.

## 6. Results against acceptance criteria

Summarize the key acceptance criteria of each phase and the actual result. Do not transcribe every data point; cite the protocol for the raw data. Each line must show the criterion, the limit, the result, and Pass or Fail.

### 6.1 Design qualification

| Criterion | Acceptance limit | Result | Pass / Fail |
|---|---|---|---|
| Requirements defined and traced to intended use | All user requirements documented and approved | `<<FILL>>` | `<<FILL>>` |
| Supplier / vendor assessed | Assessment on file, fit for intended use | `<<FILL>>` | `<<FILL>>` |
| Model / configuration selected meets requirements | Documented gap analysis, no open gaps | `<<FILL>>` | `<<FILL>>` |

### 6.2 Installation qualification

| Criterion | Acceptance limit | Result | Pass / Fail |
|---|---|---|---|
| Components and accessories present and correct | Match purchase order and design spec | `<<FILL>>` | `<<FILL>>` |
| Utilities and environment within spec | Power, gas, temperature, humidity per manufacturer | `<<FILL>>` | `<<FILL>>` |
| Software / firmware version verified and recorded | Matches approved version | `<<FILL>>` | `<<FILL>>` |
| Documentation present (manuals, certificates) | On file | `<<FILL>>` | `<<FILL>>` |

### 6.3 Operational qualification

| Criterion | Acceptance limit | Result | Pass / Fail |
|---|---|---|---|
| `<<FILL: e.g. wavelength accuracy>>` | `<<FILL: e.g. within +/- 1 nm>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: e.g. flow-rate accuracy>>` | `<<FILL: e.g. within +/- 2 percent of setpoint>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: e.g. injector precision / carryover>>` | `<<FILL: e.g. RSD <= 1.0 percent, carryover <= 0.05 percent>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: e.g. temperature accuracy (column oven)>>` | `<<FILL: e.g. within +/- 1 C>>` | `<<FILL>>` | `<<FILL>>` |
| Audit trail enabled and access controls verified | Enabled, cannot be disabled by users | `<<FILL>>` | `<<FILL>>` |

### 6.4 Performance qualification

| Criterion | Acceptance limit | Result | Pass / Fail |
|---|---|---|---|
| `<<FILL: e.g. system suitability for the actual method>>` | `<<FILL: e.g. tailing <= 2.0, resolution >= 2.0, RSD <= 1.0 percent>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: e.g. holistic performance across the working range>>` | `<<FILL: meets method requirement at low and high end>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: e.g. reproducibility over time / replicates>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

PQ should challenge the instrument the way it is actually used, ideally with the real method and a known sample, not a vendor canned test alone. If the OQ already covers a performance attribute for a Group B instrument, reference it rather than repeating it, and record the justification.

## 7. Deviations and resolution

List every deviation, OOS, or departure from protocol that occurred during qualification. A deviation does not block release on its own; an unresolved or impacting deviation does.

| Deviation no. | Phase | Description | Impact assessment | Resolution | Status |
|---|---|---|---|---|---|
| `<<FILL: DEV no. or N/A>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: impacting / not impacting and why>>` | `<<FILL>>` | Open / Closed |

No deviation may remain open at release. If one does, the instrument is not released, or it is released under a documented restriction recorded in section 10.

## 8. Calibration status

Confirm the instrument and every standard or reference instrument used during OQ and PQ were calibrated and within their calibration period, with traceability to a recognized national or international standard.

| Item | Calibrated date | Calibration due | Traceable to | Within period at qualification? |
|---|---|---|---|---|
| Instrument (`<<FILL: asset ID>>`) | `<<FILL>>` | `<<FILL>>` | `<<FILL: e.g. NIST-traceable standard>>` | Yes / No |
| `<<FILL: reference standard used in OQ>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Yes / No |
| `<<FILL: reference instrument / weights used in OQ>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Yes / No |

A qualification run with an expired reference standard is not valid evidence. Record the calibration certificate numbers in the executed protocols and cite them here.

## 9. Acceptance criteria for release

The instrument is acceptable for release when all of the following are true:

- Every required qualification phase was executed under an approved protocol and met its acceptance criteria, or any deviation was resolved as not impacting.
- No deviation, OOS, or open action remains unresolved at the time of release.
- The instrument and all standards and reference equipment used were calibrated and within their period during OQ and PQ.
- The software or firmware version, configuration, and access controls match the approved baseline, and the audit trail is enabled where the instrument is computerized.
- The qualified operating ranges cover the intended use stated in section 3.
- This report is complete, with every claim traceable to an executed protocol or calibration record, and approved by QA.

## 10. Release for use and conditions

| Field | Entry |
|---|---|
| Release decision | `<<FILL: Released for routine GxP use / Released with restriction / Not released>>` |
| Restrictions or conditions (if any) | `<<FILL: e.g. approved only for the methods/ranges qualified; not approved for X>>` |
| Approved intended use confirmed | Yes / No |
| Date released | `<<FILL>>` |

If the release is conditional, state the condition in plain terms so the lab cannot accidentally use the instrument outside what was qualified.

## 11. Requalification interval and triggers

State the periodic requalification interval and the events that trigger requalification regardless of the interval. Base the interval on instrument risk and history, not a default copied across all assets.

| Item | Entry |
|---|---|
| Periodic requalification interval | `<<FILL: e.g. 12 months, with annual OQ and PQ; basis recorded>>` |
| Next requalification due | `<<FILL: date>>` |
| Event triggers (requalify before next routine use) | `<<FILL: e.g. relocation, major repair, component replacement affecting performance, software upgrade, failed PQ / system suitability, change to intended use>>` |
| Interim controls | `<<FILL: e.g. system suitability each sequence, periodic verification, preventive maintenance per SOP-ID>>` |

Routine system suitability and scheduled calibration are not a substitute for requalification after a change that could affect performance; they run in addition to it.

## 12. Conclusion

State, in one or two sentences, whether the instrument is qualified and released for its intended use, citing the deliverables that support the statement. Example: the instrument identified in section 3 completed DQ, IQ, OQ, and PQ under the protocols in the header, met all acceptance criteria with deviations resolved as not impacting, was confirmed calibrated and within period, and is released for routine GxP use for the methods and ranges in section 3, with requalification due `<<FILL>>`.

## 13. References

> USP <1058> Analytical Instrument Qualification.
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment) and 211.160(b)(4) (calibration of instruments at suitable intervals).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> EU GMP Annex 11 (Computerised Systems) and 21 CFR Part 11, where the instrument is computerized.
> ICH Q9, Quality Risk Management (for the risk-based qualification depth and requalification interval).
> ISO/IEC 17025 (where calibration traceability is asserted) and the manufacturer's installation and operation specifications.

Confirm the current version and clause numbers of each reference before issue.

## 14. Attachments

| No. | Attachment |
|---|---|
| 1 | Executed DQ protocol and raw records |
| 2 | Executed IQ protocol and raw records |
| 3 | Executed OQ protocol and raw records |
| 4 | Executed PQ protocol and raw records |
| 5 | Calibration certificates for the instrument and reference standards |
| 6 | Deviation records and resolutions |

## 15. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 16. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Instrument owner) | `<<FILL>>` | | |
| Reviewer (QC / Metrology) | `<<FILL>>` | | |
| Reviewer (Validation / IT) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the rollup completed for an example HPLC, so you can see the level of detail an inspector expects. The company, instrument, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Instrument | HPLC with UV/diode-array detector, asset HPLC-12, serial 0427-A |
| Manufacturer / model | Vendor model 1290, CDS version 7.4 SR2 |
| USP <1058> group | Group C (full DQ/IQ/OQ/PQ) |
| Intended use | Assay and related substances for products A and B, flow 0.2 to 1.5 mL/min, detection 210 to 280 nm, column oven 25 to 45 C |
| DQ | Protocol DQ-QC-018, Pass. Requirements traced to intended use; vendor assessed; configuration meets requirements, no open gaps |
| IQ | Protocol IQ-QC-018, Pass. All components match PO; utilities in spec; software 7.4 SR2 verified; manuals and certificates on file |
| OQ | Protocol OQ-QC-018, Pass with deviation. Wavelength accuracy within +/- 1 nm; flow accuracy within +/- 2 percent; injector RSD 0.4 percent; carryover 0.02 percent; column oven within +/- 1 C; audit trail enabled. One deviation on first column-oven run (see below) |
| PQ | Protocol PQ-QC-018, Pass. System suitability with the real assay method met at low and high flow: tailing 1.3, resolution 3.1, replicate RSD 0.5 percent |
| Deviation | DEV-2026-0211: first column-oven run read 46.2 C against a 45.0 C setpoint, outside +/- 1 C. Root cause: ambient draft from an open service panel. Panel closed, run repeated, oven within +/- 0.4 C. Assessed not impacting; no GxP data produced. Closed |
| Calibration status | Instrument calibrated 02 June 2026, due 02 June 2027; OQ reference wavelength standard and certified flow meter both NIST-traceable and within period at qualification |
| Release decision | Released for routine GxP use for the methods and ranges above |
| Requalification interval | 12 months (annual OQ and PQ); next due 09 June 2027; event triggers: relocation, major repair, detector or pump replacement, CDS upgrade, failed system suitability, change to intended use; interim control: system suitability each sequence |
| Conclusion | HPLC-12 completed DQ, IQ, OQ, PQ; met all acceptance criteria with one deviation resolved as not impacting; confirmed calibrated; released for routine GxP use; requalification due 09 June 2027 |
| Approvals | Authored S. Rao 09 June 2026; reviewed M. Chen (Metrology) 10 June 2026; approved L. Fontaine (QA) 11 June 2026 |

In this example the team qualified the instrument across the real operating ranges its methods use, ran PQ with the actual method rather than a vendor canned test alone, caught and resolved an out-of-tolerance oven reading before any GxP data was produced, confirmed every reference standard was traceable and in period, and set a risk-based requalification interval with explicit event triggers. That sequence, results to deviation to resolution to calibration confirmation to a conditioned release decision, is exactly what a reviewer is expected to see.

## Common inspection findings this report prevents

- An instrument used in routine GxP testing with no documented qualification, or qualification only by the vendor with no company review or release decision.
- A release statement with no traceable evidence; the report asserts "qualified" but does not cite the executed protocols or results.
- Qualification ranges narrower than the methods actually run, so the instrument is used outside what was qualified.
- A deviation or OOS during OQ or PQ left open, unassessed, or quietly averaged away, with the instrument released anyway.
- OQ or PQ run with an expired reference standard or an out-of-calibration reference instrument, so the evidence is not valid.
- No requalification interval, or a single default interval copied across every asset with no link to risk, and no event triggers for repair, relocation, or software upgrade.
- A computerized instrument released without confirming the software version, access controls, and audit trail.
- The same person executing and approving the qualification with no independent QA review.

## How to adapt this report

1. Set your document number, owner, linked protocol numbers, and effective date in the header.
2. State the USP <1058> qualification group in section 3 and scale the phases in sections 5 and 6 to match; for a Group A or simple Group B item, reference the lighter approach and justify it rather than fabricating full DQ/IQ/OQ/PQ.
3. Replace the generic OQ and PQ criteria in section 6 with the actual parameters and limits from your executed protocols and the methods the instrument supports.
4. List every real deviation in section 7 and confirm none is open before you complete section 10.
5. Enter real calibration certificate numbers and traceability in section 8, including the standards used during OQ and PQ.
6. Set the requalification interval and event triggers in section 11 from instrument risk and history, and point the interim controls to your real calibration and maintenance procedures.
7. Confirm every regulation in section 13 against the current published version before issue.
