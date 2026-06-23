---
title: "Protocol: Media Fill (Aseptic Process Simulation)"
description: "A plug-and-play media fill protocol for aseptic process simulation: intervention matrix, worst-case justification, line, shift, and operator coverage, fill volumes, incubation, acceptance criteria, and the unit reconciliation report, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-22
docType: "Protocol"
pillar: "sterility-microbiology"
relatedArticles: ["aseptic-processing-and-media-fills"]
tags: ["media fill", "aseptic process simulation", "annex 1", "protocol", "sterility assurance", "interventions", "incubation"]
tier: "Advanced"
---

This is a ready-to-use media fill protocol, also called an aseptic process simulation (APS). Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your line layout and intervention list, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Media Fill (Aseptic Process Simulation) for `<<FILL: line / product format>>` |
| Document number | `<<FILL: PRT-ID, e.g. APS-FILL-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Aseptic Manufacturing>>` |
| Site / area | `<<FILL: site, building, filling room grade A/B>>` |
| Linked report | `<<FILL: report number to be issued, e.g. APS-RPT-031>>` |

## 1. Purpose

This protocol defines how `<<FILL: COMPANY NAME>>` simulates the aseptic filling process on line `<<FILL: line ID>>` using a sterile growth medium in place of product, to demonstrate that the process, the environment, the equipment, and the people can produce sterile units run after run. The objective is to challenge the aseptic process with the routine and worst-case conditions it actually sees, then show that contaminated units stay within the accepted limit.

## 2. Scope

This protocol applies to the filling line and container-closure format named in the header at `<<FILL: site / area>>`, run by qualified operators under routine grade A/B conditions. It covers the medium, the fill, the interventions to be simulated, the line, shift, and operator coverage, the incubation, the read, and the unit reconciliation. It does not cover routine environmental monitoring trending, sterilization validation, or container-closure integrity validation, which are governed by `<<FILL: cross-reference SOP-IDs>>`. An APS qualifies the process, it does not release any product.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Aseptic manufacturing SME | Authors this protocol, derives the worst-case and intervention rationale, confirms the simulation mirrors the real process, and supervises execution. |
| Qualified filling operators | Execute the fill and the scripted interventions exactly as written, in the gowning and behavior used in routine production. |
| Microbiology / QC | Confirms growth promotion of the medium, performs incubation and the reads, identifies any contaminant, and reports unit counts. |
| Environmental monitoring | Runs the full EM and personnel monitoring program during the simulation as in routine production. |
| Quality Assurance | Reviews and approves the protocol, deviations, and report, owns the disposition, and decides on revalidation triggers. |
| Validation | Maintains the APS schedule, the matrix across lines and formats, and the link to operator qualification. |

## 4. Definitions

- **Aseptic process simulation (APS) / media fill**: a run that replaces product with a sterile microbiological growth medium and runs the aseptic process so any contamination shows as turbidity after incubation.
- **Intervention**: any entry, adjustment, or activity performed at or near the open product path. Inherent interventions are routine and planned; corrective interventions respond to a fault.
- **Worst case**: the combination of conditions (longest duration, most interventions, slowest line speed, largest container, smallest neck, end of shift) that stresses the aseptic process hardest, justified to represent the routine envelope.
- **Growth promotion test (GPT)**: confirmation that the medium supports growth of specified and in-house environmental organisms, so a negative read is meaningful.
- **Unit reconciliation**: the full account of every unit filled, from total filled through rejects to incubated to read, so no positive can be lost or unexplained.
- **Incubation**: holding filled units at defined temperatures for a defined time to let any contaminant grow to a visible level.

## 5. Process and worst-case justification

### 5.1 Process being simulated

| Item | Entry |
|---|---|
| Product format simulated | `<<FILL: vial / syringe / cartridge / bag, container size, closure>>` |
| Line and filling technology | `<<FILL: line ID, filling principle, isolator / RABS / open grade A>>` |
| Routine batch size and fill duration | `<<FILL: typical units; typical and maximum line run time>>` |
| Aseptic connections simulated | `<<FILL: sterile filter connect, transfer set, needle change, etc.>>` |

### 5.2 Worst-case justification

State, with rationale, why the simulated conditions represent or exceed routine production. Cover at least the following and record the basis in Attachment 1.

| Worst-case factor | Routine value | Simulated value | Justification |
|---|---|---|---|
| Maximum permitted run time / fill duration | `<<FILL>>` | `<<FILL: at or beyond max>>` | `<<FILL: longest exposure of open path>>` |
| Line speed | `<<FILL>>` | `<<FILL: slowest qualified speed>>` | `<<FILL: more time per unit at fill point>>` |
| Container size / neck | `<<FILL>>` | `<<FILL: largest opening or hardest format>>` | `<<FILL: greatest ingress risk>>` |
| Number and type of interventions | `<<FILL>>` | `<<FILL: at or above routine maximum>>` | `<<FILL: per section 6>>` |
| Number of operators / shift change | `<<FILL>>` | `<<FILL: maximum crew, includes a shift change>>` | `<<FILL: most personnel-borne risk>>` |
| Environmental challenge | `<<FILL>>` | `<<FILL: end of campaign / max gowning time>>` | `<<FILL>>` |

### 5.3 Bracketing across formats and lines

Where one line runs several container sizes, validate the largest and smallest (the bracket) and justify that intermediate sizes are covered. Record the matrix in Attachment 2 so every line, format, and operator is covered on the required cycle.

## 6. Intervention matrix

Every intervention performed in routine production must be represented across the APS program. Inherent interventions appear in every fill; corrective interventions are scripted into the worst-case fill at or above their routine frequency. Do not invent interventions that never happen in production, and do not omit ones that do. Number each one and time-stamp it during execution.

| No. | Intervention | Type (inherent / corrective) | Routine frequency | Simulated count this fill | Operator | Time performed |
|---|---|---|---|---|---|---|
| `<<FILL: 1>>` | `<<FILL: line setup / aseptic assembly>>` | Inherent | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: 2>>` | `<<FILL: filling needle / pump adjustment>>` | Inherent | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: 3>>` | `<<FILL: stopper bowl / hopper refill>>` | Inherent | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: 4>>` | `<<FILL: in-process weight check / sampling>>` | Inherent | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: 5>>` | `<<FILL: clear fallen / jammed container>>` | Corrective | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: 6>>` | `<<FILL: clear stopper misfeed / jam>>` | Corrective | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: 7>>` | `<<FILL: replace component / change part>>` | Corrective | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: 8>>` | `<<FILL: gowning touch-up / regown after break>>` | Corrective | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

Annex 1 expects interventions to be representative of routine and the worst case. Units filled immediately after a corrective intervention should be tracked so any positive can be tied back to the intervention.

## 7. Line, shift, and operator coverage

| Item | Entry |
|---|---|
| Line(s) covered | `<<FILL: line ID(s)>>` |
| Shift(s) covered | `<<FILL: include a shift change within the fill where shifts run>>` |
| Operators participating (all listed by name) | `<<FILL: every operator who performs aseptic interventions>>` |
| Shift change simulated | Yes / No (`<<FILL: when, and the handover steps>>`) |
| Each operator performs at least one aseptic intervention | Yes / No |
| New-operator qualification (initial: number of fills) | `<<FILL: e.g. participate in 3 consecutive successful fills>>` |
| Periodic operator requalification | `<<FILL: at least one successful fill per defined period>>` |

Every operator who works on the aseptic line must be qualified by participation in a successful APS, and must take part in a requalification fill on the defined cycle. The matrix in Attachment 2 shows each operator against each line and shift.

## 8. Medium, fill, and growth promotion

| Item | Entry |
|---|---|
| Medium | `<<FILL: e.g. soybean casein digest medium (TSB)>>` |
| Justification for anaerobic medium (if used) | `<<FILL: needed only where the process or product is anaerobic>>` |
| Fill volume per unit | `<<FILL: enough to wet all inner surfaces, including closure, when inverted>>` |
| Number of units to fill | `<<FILL: per section 11>>` |
| Headspace / gas | `<<FILL: air or sterile-filtered air to support aerobic growth>>` |
| Growth promotion before incubation | Medium confirmed sterile before fill, GPT after incubation |
| GPT organisms | `<<FILL: compendial panel plus in-house environmental isolates>>` |

The medium must contact every internal surface a product would, including the inner closure, so units are swirled or inverted during incubation. Growth promotion is run on incubated units (or a representative set) to prove the medium would have grown a contaminant. A media fill with a failed or missing GPT is not interpretable.

## 9. Incubation

| Item | Entry |
|---|---|
| Incubation scheme | `<<FILL: e.g. 20 to 25 C then 30 to 35 C, or justified single-temperature>>` |
| Duration | `<<FILL: not less than 14 days total>>` |
| Sequence and time at each temperature | `<<FILL: e.g. 7 days at each, justify order>>` |
| Inspection points | `<<FILL: at each temperature transition and at the end, minimum>>` |
| Inspector qualification | `<<FILL: trained reader, vision check>>` |
| Turbid-unit handling | Quarantine, identify the organism, photograph or retain, investigate |

Incubation runs for at least 14 days. Where two temperatures are used, units are read at the transition and at the end. Any turbid unit is treated as a positive, the organism is identified, and the source is investigated against the EM and personnel data for that fill.

## 10. Environmental and personnel monitoring during the fill

Run the full EM program at routine frequency and locations during the simulation: viable air (active and settle plates), surface, glove, and gown monitoring, plus continuous non-viable particle counts in grade A. Record results against the fill timeline so any positive unit can be correlated to an environmental or personnel excursion. Reference: `<<FILL: EM SOP-ID>>`.

## 11. Number of units and runs

| Item | Entry |
|---|---|
| Units filled per run | `<<FILL: sufficient to detect low-rate contamination; commonly 5,000 to 10,000, justify if fewer>>` |
| Initial qualification | `<<FILL: 3 consecutive successful runs per line / shift / format>>` |
| Periodic requalification | `<<FILL: at least twice per year per line / shift, per Annex 1>>` |
| Small-batch processes | `<<FILL: at minimum, units to match the routine batch size, with rationale>>` |

Fill enough units to give statistical confidence that a low contamination rate would be detected; the count drives detection sensitivity, not a numeric pass-fail allowance. Initial qualification of a line is three consecutive successful runs; thereafter each line and shift is requalified on the defined periodic cycle. For low-volume processes, the unit count is justified against the routine batch size.

## 12. Acceptance criteria

Read your acceptance criterion off the current EU GMP Annex 1 (2022). In practice that standard sets the goal at no contaminated units, and it does not give you a sliding scale of allowed positives that grows with batch size. Treat one turbid unit as a failed simulation: stop using the line for aseptic production, run a full investigation, and only resume once the cause is found and fixed. The number of units you fill (section 11) governs how small a contamination rate the run can detect; it is not a budget of positives you are permitted to absorb.

| Result | Disposition |
|---|---|
| No contaminated unit, reconciliation balanced, growth promotion passed | APS passes for this run. |
| One or more contaminated units | APS fails. Investigate root cause (operator, intervention, environment, equipment), identify the organism, assess product filled since the last successful APS, and revalidate with the required number of consecutive successful runs before resuming. |
| Reconciliation does not balance, or growth promotion fails or is missing | Result is not interpretable and is handled as a deviation; the run cannot be accepted on a zero-growth read alone. |

The target is zero growth. Any contaminated unit, at any fill size, is treated as an APS failure that requires a documented investigation into root cause before the line continues. Do not average, discount, or attribute a positive away to make a numeric limit. The number of units filled drives the chance of detecting a low contamination rate; it does not create an allowance for contaminated units.

## 13. Unit reconciliation

Every filled unit must be accounted for. Reconciliation closes the loop between units filled, units rejected, units incubated, and units read, so a positive cannot be lost in handling. Reconcile in the report using the table in section 16.

| Reconciliation line | Definition |
|---|---|
| Units filled | Total units that received medium |
| Units rejected at line (with reason) | Cosmetic / mechanical rejects pulled before incubation, each reason recorded |
| Units removed for positive-control / GPT | Units intentionally inoculated to prove the medium grows |
| Units incubated | Units filled minus line rejects minus positive-control units |
| Units read at each inspection | Count at each inspection point matches incubated count |
| Contaminated (turbid) units | Number positive, each identified |

The incubated count plus the documented rejects must equal the units filled. A gap is itself a deviation. Rejected units are justified one by one, not bulk-discarded to clean up the result.

## 14. Deviations and handling

Any contaminated unit, intervention not performed as written, environmental excursion, incubation interruption, or reconciliation gap is documented as a deviation per `<<FILL: deviation SOP-ID>>` and assessed for impact before the APS is accepted. A failed APS halts use of the line for aseptic production until the investigation is closed and the cause corrected, and triggers an assessment of product filled since the last successful media fill.

## 15. Report

On completion, the owner issues report `<<FILL: report number>>` summarizing the runs, the interventions performed, the EM and personnel data, the incubation reads, the full unit reconciliation, all deviations and their resolution, and the conclusion on the qualified state and the operators qualified. The report is approved by QA.

## 16. Record generated: unit reconciliation report

| Field | Entry |
|---|---|
| Line / format / run number | `<<FILL>>` |
| Date of fill | `<<FILL>>` |
| Units filled | `<<FILL: total>>` |
| Units rejected at line (with reasons) | `<<FILL: count + reasons>>` |
| Positive-control / GPT units removed | `<<FILL: count>>` |
| Units incubated | `<<FILL: filled minus rejects minus positive controls>>` |
| Units read at inspection 1 / 2 / final | `<<FILL>>` / `<<FILL>>` / `<<FILL>>` |
| Contaminated (turbid) units | `<<FILL: count + organism ID>>` |
| Reconciliation balanced (filled = incubated + rejects + controls) | Yes / No |
| Growth promotion result | Pass / Fail |
| Outcome against acceptance | Pass / Investigate / Revalidate |
| Deviation reference (if any) | `<<FILL: number or N/A>>` |
| Reviewer (name, signature, date) | `<<FILL>>` |
| QA approval (name, signature, date) | `<<FILL>>` |

## 17. Attachments

| No. | Attachment |
|---|---|
| 1 | Worst-case justification record |
| 2 | Line / format / shift / operator coverage matrix |
| 3 | Numbered, time-stamped intervention log |
| 4 | EM and personnel monitoring results for the fill |
| 5 | Incubation read records and contaminant identification |
| 6 | Growth promotion test record |

## 18. References

> 21 CFR 211.42, 211.113 (control of microbiological contamination), and 211.110.
> FDA Guidance for Industry, Sterile Drug Products Produced by Aseptic Processing, Current Good Manufacturing Practice (2004).
> EU GMP Annex 1, Manufacture of Sterile Medicinal Products (2022, effective 2023), aseptic process simulation section.
> PIC/S PI 007, Recommendation on the Validation of Aseptic Processes.
> USP <1116> Microbiological Control and Monitoring of Aseptic Processing Environments.
> ISO 14644 series for cleanroom classification (referenced by Annex 1).
> ICH Q9, Quality Risk Management (for the worst-case and intervention rationale).

Confirm the current version and clause numbers of each reference before issue.

## 19. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 20. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Aseptic Mfg) | `<<FILL>>` | | |
| Reviewer (Microbiology) | `<<FILL>>` | | |
| Reviewer (EM) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the intervention, coverage, and reconciliation sections completed for an example vial line, so you can see the level of detail an inspector expects. The company, line, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Line / format / run | Line VFL-02, 20 mL vial, 20 mm stopper, RABS, run APS-031-R2 |
| Worst-case basis | Maximum 8-hour fill duration at slowest qualified speed (180 vials/min), largest qualified vial, shift change at hour 4, full 6-operator crew |
| Medium | Soybean casein digest medium, fill 8 mL per vial, swirled during incubation to wet the closure |
| Interventions simulated | 24 total: 9 inherent (setup, 3 needle adjustments, 2 stopper-bowl refills, 3 in-process checks) plus 15 corrective (8 fallen-vial clears, 4 stopper-misfeed clears, 2 component changes, 1 regown after break), each time-stamped in Attachment 3 |
| Operators | All 6 named; each performed at least one aseptic intervention; shift change A-to-B simulated at hour 4 with documented handover |
| Units filled | 9,840 |
| Units rejected at line (reasons) | 112 (78 cosmetic, 22 fill-volume low, 12 cracked) |
| Positive-control / GPT units removed | 20 |
| Units incubated | 9,708 (9,840 minus 112 minus 20); reconciliation balanced |
| Incubation | 7 days at 20 to 25 C, then 7 days at 30 to 35 C; read at transition and at day 14 |
| Units read at inspections | 9,708 / 9,708 / 9,708 (all counts matched) |
| Contaminated units | 0 |
| Growth promotion | Pass (compendial panel plus 3 in-house isolates grew within 5 days) |
| EM / personnel during fill | All within limits; no grade A excursion |
| Outcome | Pass. Third of three consecutive successful runs; line VFL-02 and all 6 operators qualified |

In this example the team filled at the worst case (longest duration, slowest speed, largest vial, a shift change, the full intervention set), filled enough units to be meaningful at the limit, reconciled every unit so the incubated count tied exactly to filled minus rejects minus controls, proved the medium would have grown a contaminant, and got zero growth across three runs. That sequence is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this protocol prevents

- Interventions in the media fill that do not match the interventions in routine production, either invented for the simulation or omitted from it.
- A media fill run at easy conditions (short duration, fastest speed, fewest interventions) with no worst-case justification.
- Operators who work the aseptic line but have never participated in a successful media fill, or whose requalification has lapsed.
- A positive unit averaged or discounted instead of investigated for root cause against the EM and personnel data.
- Unit reconciliation that does not balance, with rejected units bulk-discarded and no count tie-out, so a positive could have been lost.
- No growth promotion test, or a failed one, leaving a negative read uninterpretable.
- Incubation shorter than 14 days, a single read at the end only, or units not swirled so the inner closure was never wetted.
- Periodic requalification missed for a line or shift, with aseptic production continuing on stale qualification.

## How to adapt this protocol

1. Set your document number, owner, report number, and effective date in the header.
2. Build the intervention matrix in section 6 from your real routine and corrective interventions, at or above their actual frequency, and number them to match your time-stamped execution log.
3. Fill the worst-case table in section 5.2 with your real routine values and your simulated worst case, and justify each one.
4. Complete the coverage matrix in section 7 so every line, shift, format, and operator is on the required cycle, and tie it to your operator qualification records.
5. Set your unit count in section 11 against your routine batch size, and your incubation scheme in section 9, then confirm the acceptance table in section 12 against current Annex 1.
6. Point the cross-references in sections 2, 10, and 14 to your real sterilization, EM, and deviation procedures.
7. Confirm every regulation in section 18 against the current published version before issue.
