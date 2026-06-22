---
title: "Instrument Performance Qualification (PQ) Protocol"
description: "A plug-and-play performance qualification protocol for a laboratory instrument: holistic performance under real method conditions, system suitability, frequency, acceptance criteria, ongoing performance verification, test cases, deviations, and summary, with a worked HPLC specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Protocol"
pillar: "equipment-qualification"
relatedArticles: ["analytical-instrument-qualification","equipment-qualification-lifecycle"]
tags: ["performance qualification", "pq", "instrument qualification", "system suitability", "usp 1058", "annex 15", "hplc"]
tier: "Intermediate"
---

This is a ready-to-use performance qualification protocol for a laboratory instrument. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach the OQ summary and the analytical method the protocol runs against, and route it through your normal document control, review, and approval. A worked filled specimen for an HPLC system follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

PQ proves one thing that OQ cannot: that the instrument performs as a whole, under the actual conditions of an actual method, in the hands of the actual analysts, against actual acceptance criteria. OQ tested each module against the vendor specification one parameter at a time. PQ runs the assembled system end to end on a representative method and shows the result meets the criteria the method itself sets. It is the final stage of the qualification lifecycle after design qualification (DQ), installation qualification (IQ), and operational qualification (OQ), and it is the stage that connects qualification to routine use through ongoing performance verification and system suitability. The categorization that drives how much of this applies is in USP <1058> (analytical instrument qualification); a Group C instrument needs the full PQ here, a Group B instrument a lighter holistic check, a Group A instrument none.

## Document control header

| Field | Entry |
|---|---|
| Document title | Performance Qualification Protocol for `<<FILL: instrument type / model>>` |
| Document number | `<<FILL: PRT-ID, e.g. PQ-LAB-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Metrology / Laboratory>>` |
| Site / room | `<<FILL: site, building, laboratory room>>` |
| Instrument ID / asset number | `<<FILL: asset/equipment ID>>` |
| Linked DQ / IQ / OQ | `<<FILL: DQ ref; IQ ref; OQ ref (must be complete before PQ)>>` |
| Linked report | `<<FILL: PQ summary report number to be issued>>` |

## 1. Purpose

This protocol defines the tests and acceptance criteria to confirm that instrument `<<FILL: instrument ID / asset number>>`, with OQ complete under `<<FILL: OQ ref>>`, performs to the requirements of a representative routine method under real operating conditions, and that it stays in that performing state during routine use through system suitability and ongoing performance verification. The objective is a documented, inspection-ready record that the instrument as configured is fit for its intended analytical use, not just that each module meets a vendor number in isolation.

## 2. Scope

This protocol applies to the single instrument identified in the header, including its modules, the controlling workstation and data system where fitted, the column or sensor in use, and the analysts who will operate it. PQ is performed against one or more representative methods chosen to challenge the instrument across its real working range. It does not re-test OQ parameters in isolation, and it does not validate the analytical method itself, which is covered by `<<FILL: method validation report ref>>` under ICH Q2(R2). Where the instrument includes a computerized system holding GxP data, the data-handling checks here are coordinated with the computerized system validation under `<<FILL: CSV SOP-ID>>` and do not replace it. Routine calibration intervals and change control after qualification are governed by `<<FILL: cross-reference SOP-IDs>>`.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Laboratory / metrology owner | Authors this protocol, selects the representative method and the routine analysts, defines acceptance criteria from the method, and issues the report. |
| Analyst(s) performing PQ | Run the PQ method as they would run routine work, record raw results, and raise deviations. The PQ is run by the people who will use the instrument, not only by a vendor engineer. |
| QC method SME | Confirms the chosen method is representative, confirms the system suitability criteria match the validated method, and reviews results. |
| IT / system administrator | Confirms the data system, audit trail, time synchronization, and user access are in the qualified state for the PQ runs. |
| Quality Assurance | Reviews and approves the protocol, deviations, and report, and authorizes release of the instrument to routine GxP use. |

## 4. Definitions

- **Performance qualification (PQ)**: documented verification that the assembled instrument performs as intended under real method conditions in the actual operating environment.
- **System suitability test (SST)**: a set of checks run with each analytical sequence to confirm the system is performing adequately for that run, using criteria set by the validated method. SST is the routine, per-run continuation of PQ.
- **Ongoing performance verification (OPV)**: scheduled re-checks (often called PQ intervals or requalification) that confirm the instrument stays qualified between full requalifications, distinct from per-run SST.
- **Holistic test**: a single test that exercises several modules together as the analyst uses them (for example a full injection sequence that exercises pump, autosampler, column oven, and detector at once), rather than one parameter on one module.
- **Representative method**: a routine method chosen because it challenges the instrument across its real working range (lowest expected concentration, full gradient, full run time), not the easiest method available.

## 5. Prerequisites

PQ does not start until all of the following are confirmed and recorded. A failed prerequisite is a deviation, not a quiet workaround.

| Prerequisite | Confirmed (Yes / N/A) | Reference |
|---|---|---|
| DQ, IQ, and OQ complete and approved | `<<FILL>>` | `<<FILL: DQ/IQ/OQ refs>>` |
| Instrument calibrated, calibration in date | `<<FILL>>` | `<<FILL: calibration cert no.>>` |
| Representative method approved and (where required) validated | `<<FILL>>` | `<<FILL: method ref>>` |
| Column / sensor / consumable identified and conditioned | `<<FILL>>` | `<<FILL: lot/serial>>` |
| Reference standard / control sample available, in date | `<<FILL>>` | `<<FILL: standard ID, expiry>>` |
| Mobile phase / reagents prepared and labeled | `<<FILL>>` | `<<FILL>>` |
| Data system in qualified state, audit trail on, clock synced | `<<FILL>>` | `<<FILL: CSV ref>>` |
| Analyst(s) trained on the method and instrument | `<<FILL>>` | `<<FILL: training records>>` |

## 6. PQ approach and representative method

State which method PQ runs against and why it is representative. PQ should challenge the working range, not run a single mid-range standard once.

| Item | Entry |
|---|---|
| Representative method(s) | `<<FILL: method name/ID>>` |
| Why representative | `<<FILL: covers lowest expected level, full gradient, full run length, hardest peak pair, etc.>>` |
| Working range challenged | `<<FILL: e.g. LOQ-level standard to upper assay level>>` |
| Number of analysts | `<<FILL: at least the analysts who will use it routinely>>` |
| Number of replicate sequences | `<<FILL: e.g. one sequence per analyst per day across 2 days>>` |

## 7. System suitability criteria (from the validated method)

Copy the system suitability criteria from the validated method, do not invent them here. PQ passes when the holistic runs meet these. The same criteria become the per-run SST in routine use.

| SST parameter | Acceptance criterion (from method) | Basis |
|---|---|---|
| Resolution (critical pair) | `<<FILL: e.g. Rs >= 2.0>>` | `<<FILL: method ref>>` |
| Repeatability of replicate injections (%RSD of area) | `<<FILL: e.g. <= 2.0% for n = 5 or 6>>` | USP <621> / method |
| Tailing / symmetry factor | `<<FILL: e.g. 0.8 to 1.5>>` | USP <621> / method |
| Theoretical plates (efficiency) | `<<FILL: e.g. N >= 2000>>` | USP <621> / method |
| Retention time reproducibility | `<<FILL: e.g. %RSD <= 1.0%>>` | method |
| Signal-to-noise at LOQ (if applicable) | `<<FILL: e.g. S/N >= 10>>` | method |
| Standard recovery / check standard | `<<FILL: e.g. 98.0 to 102.0% of nominal>>` | method |

For USP general chromatography expectations, see USP <621> (Chromatography). The numeric criteria above must come from the validated method; the chapter sets the conventions, the method sets the limits.

## 8. PQ test cases

Each test case lists what is run, the expected result tied to the method's criteria, and a place for the actual result and pass/fail. These are holistic: each run exercises the whole system as routine work would.

| No. | Test case | Procedure | Expected result | Actual result | Pass / Fail |
|---|---|---|---|---|---|
| PQ-1 | Holistic SST sequence, analyst 1 | Run the full method sequence (blank, standards, system suitability replicates, check standard) | All SST criteria in section 7 met | `<<FILL>>` | `<<FILL>>` |
| PQ-2 | Holistic SST sequence, analyst 2 | Same sequence, second routine analyst, separate day | All SST criteria met; results consistent with PQ-1 | `<<FILL>>` | `<<FILL>>` |
| PQ-3 | Working-range challenge | Inject a low-end (near LOQ) standard and an upper-range standard | Both within method criteria; S/N at low end met; linearity check if defined | `<<FILL>>` | `<<FILL>>` |
| PQ-4 | Carryover check | Inject a blank immediately after the highest standard | Carryover below the method limit (e.g. < reporting threshold) | `<<FILL>>` | `<<FILL>>` |
| PQ-5 | Full-duration run / autosampler stability | Run a representative full-length sequence to confirm baseline, gradient, and oven hold over the real run time | Baseline, retention times, and areas stable across the sequence; no drift beyond method limits | `<<FILL>>` | `<<FILL>>` |
| PQ-6 | Data integrity check | Confirm raw data, audit trail entries, and metadata captured for the runs above | Complete, attributable, time-stamped records consistent with the runs | `<<FILL>>` | `<<FILL>>` |

Add or remove cases to fit the instrument and method. The point is holistic performance plus the working-range and routine-use challenges, not a re-run of OQ module tests.

## 9. Acceptance criteria

PQ is acceptable when all of the following are true:

- Every PQ test case meets its expected result, with raw data attached.
- All system suitability criteria in section 7 are met in every holistic run, by every routine analyst tested.
- The working-range, carryover, and full-duration challenges pass against the method limits.
- Data integrity for the PQ runs is complete and attributable, with audit trail intact.
- Any deviation is documented, assessed, and resolved before the instrument is released to routine use.

A single failing test case fails the PQ for that configuration; it is investigated as a deviation per section 11, not averaged away or repeated until it passes.

## 10. Ongoing performance verification

PQ is not a one-time event. The same checks continue in two forms; define both here so the instrument stays qualified.

| Mechanism | Frequency | What is checked | Acceptance |
|---|---|---|---|
| System suitability (per run) | Every analytical sequence | The SST parameters in section 7 | Method SST limits; sequence is invalid if SST fails |
| Ongoing performance verification (interval PQ) | `<<FILL: e.g. every 6 months, or after defined use>>` | A reduced holistic run plus calibration currency | This protocol's criteria |
| Full requalification | `<<FILL: e.g. annually, or after major change>>` | Repeat relevant DQ/IQ/OQ/PQ as risk dictates | DQ/IQ/OQ/PQ criteria |
| Trigger-based requalification | On the trigger | After relocation, major repair, firmware/software change, or out-of-trend SST | Change-control assessment under `<<FILL: change control SOP-ID>>` decides scope |

Set the interval and the requalification triggers by risk using ICH Q9 (Quality Risk Management) and the instrument's USP <1058> group. A Group C instrument with high-criticality data earns a shorter interval than a Group B instrument used for non-decision checks.

## 11. Deviations and handling

Any out-of-criteria result, prerequisite failure, or departure from this protocol is documented as a deviation per `<<FILL: deviation SOP-ID>>` and assessed for impact before the qualified state is accepted. Do not release the instrument for routine GxP use, and do not report results from data generated during the deviation, until the deviation is resolved. Where a PQ failure could affect data already produced (for example a recurring SST failure that was not caught), assess the impact on prior results and escalate per `<<FILL: OOS/data integrity SOP-ID>>`.

## 12. Report

On completion, the laboratory owner issues report `<<FILL: PQ report number>>` summarizing the test cases run, the actual results against acceptance criteria, all deviations and their resolution, the system suitability criteria adopted for routine use, the ongoing performance verification interval and triggers, and the conclusion on the qualified state. The report is approved by QA, who authorizes release of the instrument to routine GxP use.

## 13. Attachments

| No. | Attachment |
|---|---|
| 1 | OQ summary report (prerequisite) |
| 2 | Representative method and its system suitability section |
| 3 | Raw data, chromatograms / sensor traces, and sequence printouts for each PQ run |
| 4 | Calibration certificate(s) in date for the PQ runs |
| 5 | Reference standard / control sample certificates and expiry |
| 6 | Analyst training records for the method and instrument |

## 14. References

> USP <1058> Analytical Instrument Qualification.
> USP <621> Chromatography (system suitability for chromatographic methods).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> EU GMP Annex 11 (Computerised Systems), where the instrument holds GxP electronic records.
> 21 CFR 211.160(b)(4) and 211.68 (calibration, accuracy of equipment; automatic equipment).
> 21 CFR 211.194 (laboratory records and complete data).
> ICH Q2(R2), Validation of Analytical Procedures (for the underlying method).
> ICH Q9, Quality Risk Management (for interval and requalification scope).
> PIC/S PI 041, Good Practices for Data Management and Integrity (for the data-integrity checks).

Confirm the current version and clause numbers of each reference before issue.

## 15. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 16. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Laboratory / Metrology) | `<<FILL>>` | | |
| Reviewer (QC method SME) | `<<FILL>>` | | |
| Reviewer (IT, if computerized) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the PQ test cases and system suitability section completed for an example HPLC system running a representative assay method, so you can see the level of detail an inspector expects. The company, instrument, method, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Instrument | HPLC system, quaternary pump, autosampler, column oven, PDA detector, asset HPLC-07 |
| OQ status | OQ-LAB-031 complete and approved 02 June 2026 |
| Representative method | Assay of Compound X, gradient, run time 18 min, working range LOQ 0.05 mg/mL to 1.20 mg/mL |
| Why representative | Hardest critical pair (Compound X / degradant 2), full gradient, low-end standard near LOQ |
| Analysts | A. Patel and L. Romano (the two routine analysts) |

System suitability criteria adopted (from the validated method):

| SST parameter | Criterion | Result PQ-1 (Patel) | Result PQ-2 (Romano) |
|---|---|---|---|
| Resolution, Compound X / degradant 2 | Rs >= 2.0 | 2.6 | 2.5 |
| Repeatability, %RSD area, n = 6 | <= 2.0% | 0.6% | 0.8% |
| Tailing factor | 0.8 to 1.5 | 1.1 | 1.1 |
| Theoretical plates | N >= 2000 | 8,400 | 8,200 |
| Check standard recovery | 98.0 to 102.0% | 100.3% | 99.7% |

PQ test cases:

| No. | Test case | Result | Pass/Fail |
|---|---|---|---|
| PQ-1 | Holistic SST sequence, Patel, 03 June | All SST met (table above) | Pass |
| PQ-2 | Holistic SST sequence, Romano, 04 June | All SST met; consistent with PQ-1 | Pass |
| PQ-3 | Working-range challenge | Low-end standard S/N = 28 (>= 10); upper standard within criteria | Pass |
| PQ-4 | Carryover | Blank after high standard = 0.02% of high-standard area, below 0.1% limit | Pass |
| PQ-5 | Full-duration sequence | Baseline stable, RT %RSD 0.3%, no drift across 18-min runs | Pass |
| PQ-6 | Data integrity | Raw data, audit trail, and metadata complete and attributable for all runs | Pass |
| Ongoing performance verification | OPV every 6 months; SST every sequence; requalify on relocation, major repair, or firmware change | n/a | n/a |
| Result | All test cases pass; QA released HPLC-07 to routine GxP use, report RPT-PQ-LAB-031 (PQ protocol PQ-LAB-031) | | |

In this example the PQ ran the real assay method, near the LOQ and across the gradient, with both routine analysts on separate days, checked carryover and baseline stability over a full-length sequence, confirmed the data and audit trail were complete, and set the per-run SST and the 6-month OPV interval before release. That sequence, real method to holistic performance to ongoing verification, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this protocol prevents

- PQ done by a vendor engineer with a generic standard, never by the analysts who use the instrument, and not against a real method.
- OQ module tests repeated and labeled "PQ," with no holistic run and no link to the method's acceptance criteria.
- System suitability criteria in the PQ that do not match the validated method, or that were invented for the qualification.
- PQ run only at a comfortable mid-range level, with the low end (near LOQ) and the full working range never challenged.
- No ongoing performance verification interval or requalification triggers defined, so the instrument is qualified once and never re-checked.
- Per-run system suitability failures handled by re-injecting until the sequence passes, with no deviation and no impact assessment on prior data.
- PQ data with no raw chromatograms, incomplete audit trail, or results reported from runs generated during an open deviation.

## How to adapt this protocol

1. Set your document number, owner, instrument ID, and effective date in the header, and confirm OQ is complete before you start.
2. Choose a method in section 6 that genuinely challenges the working range (low end near LOQ, full gradient, full run time), and state why it is representative.
3. Copy the system suitability criteria in section 7 directly from your validated method; do not write new limits here.
4. Adjust the test cases in section 8 to your instrument type (a dissolution bath, a balance, or a spectrophotometer will need different holistic checks than an HPLC).
5. Set the ongoing performance verification interval and requalification triggers in section 10 by risk, using the instrument's USP <1058> group and ICH Q9.
6. Point the cross-references in sections 2, 10, and 11 to your real CSV, change control, deviation, and OOS procedures.
7. Confirm every regulation in section 14 against the current published version before issue.
