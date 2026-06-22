---
title: "Equipment Performance Qualification (PQ) Protocol"
description: "A plug-and-play performance qualification protocol for manufacturing equipment: performance under real production conditions, replicate runs, the link to process validation, test cases, acceptance criteria, deviations, and the summary report, with a worked specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Protocol"
pillar: "equipment-qualification"
relatedArticles: ["equipment-qualification-lifecycle","commissioning-qualification-astm-e2500","factory-site-acceptance-testing"]
tags: ["performance qualification", "pq", "equipment qualification", "process validation", "annex 15", "ppq", "gmp"]
tier: "Advanced"
---

This is a ready-to-use performance qualification protocol for a piece of manufacturing equipment. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach the IQ and OQ summaries and the production procedure the protocol runs against, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

Equipment PQ proves the one thing IQ and OQ cannot: that the assembled, installed, operating equipment makes acceptable output when it runs under the actual conditions of production, with the real product, the real procedure, and the real operators, repeated enough times to show the result is reproducible and not a single lucky run. IQ confirmed the equipment was installed and connected as designed. OQ confirmed each function operated across its intended range against the engineering specification. PQ confirms the equipment performs, run after run, against criteria set by the process it serves. It is the stage of the qualification lifecycle that connects the equipment to process validation: equipment PQ qualifies the machine, process performance qualification (PPQ) qualifies the process that runs on the qualified machine. Get the boundary right and you avoid the most common argument with an inspector, which is whether a given test belongs in equipment qualification or in process validation.

## Document control header

| Field | Entry |
|---|---|
| Document title | Performance Qualification Protocol for `<<FILL: equipment type / model>>` |
| Document number | `<<FILL: PRT-ID, e.g. PQ-MFG-044>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Validation / Engineering>>` |
| Site / area | `<<FILL: site, building, room, line>>` |
| Equipment ID / asset number | `<<FILL: asset/equipment ID>>` |
| Linked IQ / OQ | `<<FILL: IQ ref; OQ ref (both must be complete and approved before PQ)>>` |
| Linked report | `<<FILL: PQ summary report number to be issued>>` |

## 1. Purpose

This protocol defines the tests, replicate runs, and acceptance criteria that demonstrate the equipment `<<FILL: equipment name/ID>>` performs as required under routine production conditions, using the procedure `<<FILL: production / batch record SOP-ID>>` and the material `<<FILL: product / surrogate>>`. The objective is to show that the equipment, operated as it will be operated in manufacturing, consistently produces output that meets predetermined criteria across `<<FILL: number, conventionally three>>` consecutive runs.

## 2. Scope

This protocol covers performance testing of the equipment listed in the header at `<<FILL: site / area>>`, operating under representative or worst-case production conditions. It begins only after IQ and OQ are complete and approved, and after the relevant SOPs, the calibration of dependent instruments, and operator training are in place. It does not cover process validation of the product made on the equipment, which is governed by `<<FILL: process validation / PPQ protocol-ID>>`, and it does not repeat the parameter-by-parameter range testing already closed in OQ.

### 2.1 Boundary with process validation

Draw the line and state it. Equipment PQ challenges the equipment's ability to perform its defined function reproducibly, using a representative load, a surrogate, or a single product as a vehicle. Process performance qualification (PPQ) challenges the manufacturing process for a specific product across its design space and produces batches intended for, or eligible for, commercial use. Where a single set of runs serves both objectives, say so explicitly and define which acceptance criteria belong to equipment qualification and which belong to process validation, so the same data is not double-counted or, worse, leaves a gap.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Validation engineer / scientist | Authors this protocol, defines worst-case conditions and acceptance criteria, executes or oversees the runs, and writes the report. |
| Manufacturing / process SME | Confirms the test conditions and the procedure reflect real production, operates the equipment, and supports realism of load and setpoints. |
| Quality Assurance | Reviews and approves the protocol, the predetermined acceptance criteria, deviations, and the report, and owns the disposition. |
| Metrology / calibration | Confirms every measuring instrument used to judge performance is calibrated and traceable for the duration of the runs. |
| Engineering / maintenance | Confirms the equipment configuration is under change control and unchanged from the OQ-qualified state. |

## 4. Definitions

- **Performance qualification (PQ)**: documented verification that equipment performs effectively and reproducibly, based on the approved process method and specifications, under conditions representing routine production.
- **Process performance qualification (PPQ)**: the stage of process validation that confirms the process design produces a product meeting its quality attributes, run on qualified equipment.
- **Worst-case condition**: a set of conditions, within operating limits, that poses the greatest chance of process or product failure, used to challenge performance rather than confirm an easy midpoint.
- **Replicate runs**: consecutive runs performed under the same defined conditions to demonstrate reproducibility, not a single passing run.
- **Critical process parameter (CPP)**: a parameter whose variability affects a critical quality attribute and must therefore be controlled.
- **Critical quality attribute (CQA)**: a physical, chemical, biological, or microbiological property that must be within a limit to ensure product quality.

## 5. Prerequisites (verify before execution)

Do not start any PQ run until every item below is confirmed and documented. A run executed on an unqualified or out-of-calibration setup is invalid no matter how good the result looks.

| Prerequisite | Reference / evidence | Confirmed (initial / date) |
|---|---|---|
| IQ complete and approved | `<<FILL: IQ report number>>` | |
| OQ complete and approved | `<<FILL: OQ report number>>` | |
| Equipment configuration under change control, unchanged since OQ | `<<FILL: config baseline ref>>` | |
| Production / batch procedure approved and effective | `<<FILL: SOP-ID>>` | |
| All measuring instruments calibrated and traceable | `<<FILL: calibration record refs>>` | |
| Operators trained on the procedure and on this protocol | `<<FILL: training record refs>>` | |
| Preventive maintenance current | `<<FILL: PM record ref>>` | |
| Material / surrogate available with CoA | `<<FILL: material lot, CoA ref>>` | |
| Sampling and test methods available and validated | `<<FILL: method refs>>` | |

## 6. Test conditions and rationale

State the conditions each run will be performed under and why those conditions challenge the equipment. Where the equipment has an operating range, PQ runs at the conditions most likely to expose weakness, not the comfortable center, unless a documented rationale supports a nominal-condition design.

| Item | Entry |
|---|---|
| Production setpoints used | `<<FILL: CPP setpoints, e.g. speed, temperature, pressure, fill volume>>` |
| Worst-case basis | `<<FILL: minimum/maximum load, longest run, fastest cycle, smallest fill, hardest blend>>` |
| Load configuration | `<<FILL: full load / minimum load / mixed load, with rationale>>` |
| Material / surrogate | `<<FILL: product or surrogate, with justification if a surrogate is used>>` |
| Number of replicate runs | `<<FILL: number, conventionally three consecutive>>` |
| Operators per run | `<<FILL: same or rotated, with rationale>>` |
| Sampling plan reference | `<<FILL: where, when, how many samples per run>>` |

## 7. Test cases

Each test case states what is challenged, the method, the setpoint or condition, the predetermined acceptance criterion, and where the data is recorded. Acceptance criteria are set before execution and approved by QA; a criterion set or changed after seeing the data is a finding. Replace these examples with the cases that matter for your equipment.

| TC no. | Title | What it challenges | Method / instrument | Condition / setpoint | Acceptance criterion (predetermined) | Data location |
|---|---|---|---|---|---|---|
| `<<FILL: PQ-01>>` | `<<FILL: Output uniformity>>` | `<<FILL: that output meets the CQA across the run>>` | `<<FILL: assay / weight / particle size>>` | `<<FILL: worst-case setpoint>>` | `<<FILL: e.g. all samples within X to Y; RSD at or below Z%>>` | `<<FILL: attachment / data system ref>>` |
| `<<FILL: PQ-02>>` | `<<FILL: Run-to-run reproducibility>>` | `<<FILL: that the result repeats across runs>>` | `<<FILL: method>>` | `<<FILL: same condition, 3 runs>>` | `<<FILL: between-run difference within criterion; no trend>>` | `<<FILL>>` |
| `<<FILL: PQ-03>>` | `<<FILL: Hold / steady-state stability>>` | `<<FILL: that performance holds for the full intended duration>>` | `<<FILL: in-line / sampled>>` | `<<FILL: longest realistic run time>>` | `<<FILL: parameter stays within band start to end>>` | `<<FILL>>` |
| `<<FILL: PQ-04>>` | `<<FILL: Worst-case load / position>>` | `<<FILL: that the hardest location still meets criteria>>` | `<<FILL: method>>` | `<<FILL: min/max load, worst position>>` | `<<FILL: criterion met at the worst location>>` | `<<FILL>>` |
| `<<FILL: PQ-05>>` | `<<FILL: Cleanability after performance run (if linked)>>` | `<<FILL: that the equipment cleans after a real load>>` | `<<FILL: visual / swab / rinse>>` | `<<FILL: after PQ run>>` | `<<FILL: cross-reference cleaning validation criteria>>` | `<<FILL>>` |

## 8. Replicate runs and reproducibility

This protocol requires `<<FILL: number, conventionally three>>` consecutive successful runs under the defined conditions. The runs demonstrate reproducibility, not a single capable run.

| Run | Date | Operator | Conditions verified per section 6 | Result (pass/fail per section 10) | Deviation ref (if any) |
|---|---|---|---|---|---|
| 1 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 2 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 3 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

Report the run-to-run summary statistic the acceptance criteria call for (for example the spread, the standard deviation, or the capability index Cpk) so reproducibility is shown with numbers, not asserted. If a run fails, do not quietly add a fourth run to get three passes in a row; investigate the failure under section 9 first, then justify any additional runs.

## 9. Deviations and handling

Any out-of-criterion result, equipment fault, sampling error, or departure from this protocol is documented as a deviation per `<<FILL: deviation SOP-ID>>` at the time it occurs and assessed for impact before the qualified state is accepted.

1. Record the deviation on the run record with the condition, the observed result, and the immediate assessment.
2. Notify QA and the validation owner the same working day.
3. Determine root cause and whether the failure is equipment, method, material, or operator driven.
4. Define and approve any corrective action and any repeat runs before they are executed.
5. Do not accept the qualified state, and do not release the equipment for routine use, until every deviation is resolved and approved by QA.

## 10. Acceptance criteria

The PQ is acceptable only if all of the following are true. A single test case over criterion in any run is a failure of that run, investigated as a deviation, not averaged across runs to a pass.

| Criterion | Requirement |
|---|---|
| Prerequisites | All section 5 prerequisites confirmed and documented before execution |
| Conditions | Every run performed at the conditions defined in section 6, evidenced |
| Per-case results | Every test case in section 7 meets its predetermined acceptance criterion in every run |
| Reproducibility | The run-to-run statistic in section 8 is within the criterion, with no adverse trend |
| Deviations | All deviations recorded, investigated, and resolved before disposition |
| Data integrity | All raw data attributable, legible, contemporaneous, original, accurate, and retained |

## 11. Report

On completion, the validation owner issues report `<<FILL: report number>>` summarizing the runs, the results against each predetermined criterion, the reproducibility statistic, all deviations and their resolution, and the conclusion on the qualified state. The report states the operating conditions the equipment is qualified for, any limitations, and the link to the process validation that will run on this equipment. The report is approved by QA before the equipment is released for routine GMP use.

## 12. Attachments

| No. | Attachment |
|---|---|
| 1 | IQ and OQ summary references |
| 2 | Production / batch procedure used (controlled copy reference) |
| 3 | Sampling plan and numbered sampling locations |
| 4 | Calibration certificates for measuring instruments |
| 5 | Raw data, chromatograms, or data-system reports per run |
| 6 | Deviation records and resolutions |

## 13. References

> 21 CFR 211.63 (equipment design, size, and location), 211.68 (automatic, mechanical, and electronic equipment), 211.100 and 211.110 (process controls).
> FDA Guidance for Industry, Process Validation: General Principles and Practices (2011), Stage 2 (process performance qualification).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision, sections on PQ and process validation.
> ASTM E2500, Standard Guide for Specification, Design, and Verification of Pharmaceutical and Biopharmaceutical Manufacturing Systems and Equipment.
> ICH Q9, Quality Risk Management (for worst-case selection).
> ICH Q8(R2), Pharmaceutical Development (for CPP and CQA).
> ICH Q10, Pharmaceutical Quality System.
> PIC/S PI 006-3 (25 September 2007), Recommendations on Validation Master Plan, Installation and Operational Qualification, Non-Sterile Process Validation, and Cleaning Validation. Note this document covers VMP, IQ, OQ, non-sterile process validation, and cleaning validation; it does not cover PQ. PQ is addressed in EU/PIC/S GMP Annex 15.

Confirm the current version and clause numbers of each reference before issue.

## 14. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 15. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Validation) | `<<FILL>>` | | |
| Reviewer (Manufacturing) | `<<FILL>>` | | |
| Reviewer (Metrology) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the test conditions, test cases, replicate runs, and acceptance summary completed for an example fluid-bed dryer, so you can see the level of detail an inspector expects. The company, equipment, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Equipment | Fluid-bed dryer FBD-12, asset MFG-FBD-012, 316L product contact |
| Prerequisites | IQ-MFG-012 and OQ-MFG-012 complete and approved; configuration baseline CB-FBD-012 unchanged; batch record BR-440 effective; all probes calibrated and traceable; 4 operators trained |
| Worst-case basis | Maximum batch load (120 kg) and target inlet air temperature at the lower control limit (55 C), the slowest-drying condition |
| Material | Placebo granulation surrogate matched to the commercial blend, lot SUR-2026-014, CoA attached |
| Number of runs | 3 consecutive |

| TC no. | Title | Condition | Acceptance criterion (predetermined) | Run 1 | Run 2 | Run 3 | Result |
|---|---|---|---|---|---|---|---|
| PQ-01 | Final moisture (LOD) | Max load, low inlet temp | LOD 1.5 to 3.0 percent at every sample point, 5 points | 2.1, 2.3, 2.0, 2.4, 2.2 | 2.0, 2.2, 2.1, 2.3, 2.0 | 2.2, 2.4, 2.1, 2.3, 2.2 | Pass |
| PQ-02 | Moisture uniformity | Max load | RSD across 5 points at or below 8 percent | 7.2 percent | 6.2 percent | 5.1 percent | Pass |
| PQ-03 | Run-to-run reproducibility | Same condition, 3 runs | Mean LOD between runs within 0.3 percent; no trend | mean 2.20 / 2.12 / 2.24 percent | range 0.12 percent | n/a | Pass |
| PQ-04 | Product temperature hold | Full drying cycle | Outlet product temp stable, no excursion above 40 C | max 38.4 C | max 38.1 C | max 38.6 C | Pass |
| PQ-05 | Cleanability after load | After PQ run 3 | Visually clean; swab below cleaning validation limit (CVP-MFG-022) | n/a | n/a | clean; swabs below limit | Pass |

| Summary item | Entry |
|---|---|
| Deviations | One: Run 1 inlet-temperature probe drifted 1.2 C high mid-run (DEV-2026-0210). Investigated, probe recalibrated, run repeated; original Run 1 invalidated and excluded, replacement run met all criteria. Three valid consecutive runs achieved. |
| Reproducibility | Between-run mean LOD range 0.12 percent, within the 0.3 percent criterion; no adverse trend |
| Qualified conditions | Loads 60 to 120 kg, inlet air 55 to 70 C, per batch record BR-440 |
| Conclusion | Equipment qualified for routine use within stated conditions; report PQR-MFG-012 issued and approved by QA; PPQ for product A (PV-PRD-A-003) released to proceed on this equipment |

In this example the team set acceptance criteria before execution, ran at the slowest-drying worst case rather than a comfortable midpoint, hit a real deviation when a probe drifted, invalidated and properly replaced the affected run instead of papering over it, and showed reproducibility with a between-run number rather than three separate "pass" stamps. They also drew the boundary cleanly: equipment PQ qualified the dryer, and a separate PPQ protocol qualifies the product process that runs on it. That sequence is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this protocol prevents

- PQ run at nominal, comfortable conditions with no worst-case rationale, so the equipment is never actually challenged.
- A single passing run treated as qualification, with no replicate runs to show reproducibility.
- Acceptance criteria set or adjusted after the data was seen, rather than predetermined and approved.
- A failed run quietly dropped and extra runs added until three pass in a row, with no deviation or investigation.
- Results averaged across runs or sample points to mask a single out-of-criterion value.
- PQ started before IQ or OQ was complete, or with measuring instruments out of calibration.
- The boundary with process validation left undefined, so equipment performance and process performance data are conflated, leaving a gap an inspector finds.
- Equipment released for routine GMP use while a PQ deviation is still open.

## How to adapt this protocol

1. Set your document number, owner, report number, and effective date in the header, and link your real IQ and OQ reports.
2. Define your worst-case conditions in section 6 from your own CPPs and load range; if you run at nominal conditions, write the rationale.
3. Replace the example test cases in section 7 with the CQAs and CPPs that matter for your equipment, and set each predetermined acceptance criterion with QA before execution.
4. Decide and state the boundary in section 2.1: what this protocol qualifies as equipment, and what your process validation or PPQ protocol qualifies as process.
5. Point the cross-references in sections 2, 5, and 9 to your real production, calibration, training, deviation, and process validation procedures.
6. Confirm every regulation in section 13 against the current published version before issue.
