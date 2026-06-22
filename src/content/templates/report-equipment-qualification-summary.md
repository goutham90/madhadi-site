---
title: "Equipment Qualification Summary Report"
description: "A plug-and-play summary report that rolls up DQ, FAT/SAT, IQ, OQ, and PQ for manufacturing equipment: results against acceptance criteria, deviations and their resolution, traceability, the release-for-use decision, and the requalification and periodic review basis, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Report"
pillar: "equipment-qualification"
relatedArticles: ["equipment-qualification-lifecycle", "commissioning-qualification-astm-e2500", "factory-site-acceptance-testing"]
tags: ["equipment qualification", "qualification summary report", "iq oq pq", "fat sat", "requalification", "annex 15", "gmp"]
tier: "Intermediate"
---

This is a ready-to-use equipment qualification summary report. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your executed DQ, FAT/SAT, IQ, OQ, and PQ protocols, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

An equipment qualification summary report (often EQSR, or EQ Summary Report) is the closing record for a piece of manufacturing equipment. It does not repeat the test data; it rolls up the whole lifecycle, from design qualification through factory and site acceptance testing into installation, operational, and performance qualification, states the result of each phase against pre-approved acceptance criteria, lists every deviation and how it was resolved, confirms the requirements-to-test traceability, and makes a single decision: is this equipment qualified and released for GMP use, and on what basis must it be requalified. An inspector reads this report first to decide whether to trust the equipment, then follows the references you cite into the executed protocols and deviation records. Write it so every conclusion points to evidence.

## Document control header

| Field | Entry |
|---|---|
| Document title | Equipment Qualification Summary Report for `<<FILL: equipment name>>` |
| Document number | `<<FILL: EQSR-ID, e.g. EQSR-MFG-018>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Validation>>` |
| Equipment | `<<FILL: name, equipment ID/asset number, manufacturer, model, serial number>>` |
| Linked plan | `<<FILL: validation/qualification plan number this report closes, e.g. VP-MFG-018>>` |
| Site / area | `<<FILL: site, building, room, process area>>` |
| GMP / non-GMP classification | `<<FILL: direct impact / indirect / no impact, per system impact assessment>>` |

## 1. Purpose

This report summarizes the qualification of `<<FILL: equipment name and ID>>` performed under plan `<<FILL: plan number>>` and concludes on its qualified state and fitness for intended use. It records each qualification phase executed, the results against pre-approved acceptance criteria, all deviations and their resolution, confirmation of requirements-to-test traceability, the residual risk accepted, the requalification and periodic review basis, and the release statement that authorizes the equipment for GMP use.

## 2. Scope and intended use

State the boundary the conclusion covers, in the same terms the plan and the user requirements used. A summary report that claims more than the protocols tested is not defensible.

| Item | Entry |
|---|---|
| Equipment qualified | `<<FILL: name, ID, model, serial number>>` |
| Intended use / process | `<<FILL: what the equipment does, products/process steps it serves>>` |
| Operating range qualified | `<<FILL: ranges actually challenged, e.g. 2 to 8 C, 40 to 120 rpm, 121 C / 15 min>>` |
| In scope | `<<FILL: skid, controls, utilities tie-ins, software/recipe layer in scope>>` |
| Out of scope | `<<FILL: items excluded, e.g. facility HVAC, upstream utility generation, covered by separate qualification>>` |
| Impact classification basis | `<<FILL: reference to system impact assessment / risk assessment>>` |

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Validation engineer / author | Authors this report, compiles phase results, confirms traceability, and writes the conclusion. |
| Equipment / process engineer | Confirms the equipment matches design, supports execution, and owns engineering deviations. |
| Manufacturing / equipment owner | Confirms the qualified equipment meets the operational need and assumes ownership at release. |
| Quality Assurance | Reviews and approves the plan, protocols, deviations, and this report, and owns the disposition. |
| Maintenance / metrology | Confirms calibration, preventive maintenance, and spares are established before release. |
| Validation lead / approver | Confirms the qualification is complete and the equipment can be declared qualified. |

## 4. Definitions

- **DQ (design qualification)**: documented verification that the proposed design of the equipment is suitable for its intended purpose and meets the user requirements before purchase or build.
- **FAT (factory acceptance test)**: testing at the vendor site to confirm the equipment meets specification before shipment.
- **SAT (site acceptance test)**: testing on installation at the user site to confirm the equipment arrived and was installed correctly and functions as specified.
- **IQ (installation qualification)**: documented verification that the equipment is installed as designed and specified, with utilities, components, documentation, and calibration in place.
- **OQ (operational qualification)**: documented verification that the equipment operates as intended across its specified ranges, including alarms, interlocks, and worst cases.
- **PQ (performance qualification)**: documented verification that the equipment performs reproducibly under actual or simulated production conditions, often with product.
- **Reusing FAT/SAT into IQ/OQ**: the documented practice of reusing FAT/SAT results so the same test is not repeated, when the result is still valid and the conditions are unchanged. State here what was reused and the justification.

## 5. Qualification phases executed

List each protocol that makes up the lifecycle, its identity, when it ran, the result, and where the evidence lives. This table is the backbone of the report.

| Phase | Protocol / document number | Version | Execution date(s) | Result (Pass / Pass with deviations) | Evidence location |
|---|---|---|---|---|---|
| DQ | `<<FILL: DQ-ID>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| FAT | `<<FILL: FAT report ID>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| SAT | `<<FILL: SAT report ID>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| IQ | `<<FILL: IQ-ID>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| OQ | `<<FILL: OQ-ID>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| PQ | `<<FILL: PQ-ID>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

State the test strategy once: which phases were reused from earlier ones, and the justification.

| Item | Entry |
|---|---|
| FAT/SAT reused into IQ/OQ | `<<FILL: what was reused, e.g. SAT loop checks accepted as IQ instrument verification>>` |
| Justification for reuse | `<<FILL: result still valid, conditions unchanged, reviewed and approved under change control>>` |
| Risk basis for test depth | `<<FILL: reference to risk assessment / FMEA driving what was tested and how hard>>` |

## 6. Results against acceptance criteria

Summarize the outcome of each phase against the acceptance criteria defined in the protocol. Do not restate every test; state whether all criteria were met and reference the executed protocol for the data.

### 6.1 Design qualification (DQ)

| Item | Entry |
|---|---|
| User requirements traced to design | `<<FILL: confirmed all URS items addressed in design, ref traceability>>` |
| Vendor / GMP suitability assessed | `<<FILL: material of construction, contact surfaces, cleanability, 21 CFR 211.65 fit>>` |
| Result | `<<FILL: all DQ acceptance criteria met / exceptions>>` |

### 6.2 Factory and site acceptance testing (FAT/SAT)

| Item | Entry |
|---|---|
| FAT result | `<<FILL: met spec at vendor / punch list items and closure>>` |
| SAT result | `<<FILL: installed correctly, no transit/install damage, functions as specified>>` |
| Punch list closure | `<<FILL: open items closed before IQ, ref closure record>>` |

### 6.3 Installation qualification (IQ)

| Acceptance area | Requirement | Result |
|---|---|---|
| As-built versus design | Equipment matches approved drawings and P&IDs | `<<FILL>>` |
| Components and serial numbers | Verified against bill of materials | `<<FILL>>` |
| Utilities connected and verified | Power, water, gases, drains, HVAC tie-ins per spec | `<<FILL>>` |
| Instruments calibrated | All GMP-critical instruments calibrated and traceable | `<<FILL>>` |
| Materials of construction | Product-contact surfaces verified (e.g. 316L, certs on file) | `<<FILL>>` |
| Documentation | Manuals, spare parts list, software/firmware version recorded | `<<FILL>>` |
| Safety | Lockout/tagout, guarding, EHS sign-off in place | `<<FILL>>` |

### 6.4 Operational qualification (OQ)

| Acceptance area | Requirement | Result |
|---|---|---|
| Operating ranges | Function verified across specified ranges, including limits | `<<FILL>>` |
| Alarms and interlocks | Each alarm and safety interlock challenged and confirmed | `<<FILL>>` |
| Control / recipe functions | Setpoints, sequences, and modes operate as specified | `<<FILL>>` |
| Worst-case conditions | Hardest condition (max load, min/max speed/temp) challenged | `<<FILL>>` |
| Data and security | Audit trail, access control, data capture per 21 CFR Part 11 / Annex 11 (if applicable) | `<<FILL>>` |
| Power recovery | Behavior on power loss and recovery verified safe | `<<FILL>>` |

### 6.5 Performance qualification (PQ)

| Acceptance area | Requirement | Result |
|---|---|---|
| Reproducibility | Defined number of consecutive runs meet criteria | `<<FILL: e.g. 3 consecutive runs>>` |
| Product / simulated load | Performance confirmed with actual or representative material | `<<FILL>>` |
| Critical process parameters | CPPs held within range and recorded each run | `<<FILL>>` |
| Output quality | Output meets the in-process / quality attribute targets | `<<FILL>>` |

## 7. Deviations and their resolution

List every deviation, planned or unplanned, raised during qualification, the phase it occurred in, the impact assessment, and how it was resolved. An open or unjustified deviation blocks release.

| Deviation ref | Phase | Description | Impact assessment | Resolution / corrective action | Status |
|---|---|---|---|---|---|
| `<<FILL: DEV-ID>>` | `<<FILL: IQ/OQ/PQ>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: Closed>>` |
| `<<FILL: DEV-ID>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

| Item | Entry |
|---|---|
| Total deviations | `<<FILL: count>>` |
| All deviations closed before release | Yes / No (if No, release is blocked) |
| Any deviation affecting qualified state | `<<FILL: none, or describe residual impact and acceptance>>` |

## 8. Traceability confirmation

Confirm that every user requirement was carried through to a test and a result, with no orphan requirements and no untraced tests. Reference the traceability matrix; do not reproduce it.

| Item | Entry |
|---|---|
| Traceability matrix reference | `<<FILL: matrix number>>` |
| User requirements traced to a test | `<<FILL: e.g. 42 of 42>>` |
| Requirements not met / waived | `<<FILL: none, or list with justification>>` |
| Tests with no parent requirement | `<<FILL: none, or explain>>` |

## 9. Calibration, maintenance, and operational readiness

Equipment is not released into GMP use until the controls that keep it qualified are in place. Confirm them here.

| Item | Entry |
|---|---|
| Calibration program established | `<<FILL: instruments on schedule, intervals defined, ref>>` |
| Preventive maintenance plan | `<<FILL: PM tasks and frequency loaded in the CMMS / system>>` |
| Spare parts identified | `<<FILL: critical spares list and stock, ref>>` |
| Cleaning approach | `<<FILL: cleaning SOP-ID; cleaning validation status or reference>>` |
| Operating and cleaning SOPs | `<<FILL: SOP-IDs in place and approved before use>>` |
| Operator training | `<<FILL: trained users recorded, ref training records>>` |
| Added to equipment / asset register | `<<FILL: asset ID and master equipment list updated>>` |

## 10. Requalification and periodic review basis

State the trigger-based and time-based basis for keeping the equipment in a qualified state. This is the part inspectors check years later, so it must be specific, not "as needed."

| Item | Entry |
|---|---|
| Periodic review interval | `<<FILL: e.g. every 3 years, set by risk and impact class>>` |
| Periodic review owner | `<<FILL: role>>` |
| Periodic review scope | `<<FILL: change history, deviations, calibration record, CAPA, decision to requalify or not>>` |
| Requalification triggers | Relocation, significant modification, repair affecting the qualified state, change of intended use, repeated failures, or change to the controlling software/recipe |
| Requalification depth on trigger | `<<FILL: risk-based, e.g. re-run affected OQ/PQ tests only, ref change control>>` |
| Governing change control SOP | `<<FILL: change control SOP-ID>>` |

## 11. Residual risk

State any risk that remains after qualification and why it is acceptable, or state that none remains. Reference the risk assessment.

| Item | Entry |
|---|---|
| Residual risk | `<<FILL: none, or describe>>` |
| Mitigation / control | `<<FILL: how the residual risk is controlled in routine use>>` |
| Risk acceptance | `<<FILL: accepted by role, date, ref risk assessment>>` |

## 12. Conclusion and release statement

State the conclusion plainly and authorize use, or state the conditions that must be met first.

> Based on the executed DQ, FAT/SAT, IQ, OQ, and PQ summarized in this report, with all deviations closed and traceability confirmed, the equipment `<<FILL: name and ID>>` is qualified for its intended use within the operating range stated in section 2 and is released for GMP use as of `<<FILL: release date>>`. The equipment is subject to the requalification triggers and periodic review interval in section 10.

If any condition remains, state it here as a conditional release with the specific items and owners, and do not declare the equipment released for production until each is closed.

## 13. References

> 21 CFR 211.63 (equipment design, size, location), 211.65 (equipment construction), 211.67 (cleaning and maintenance), 211.68 (automatic, mechanical, electronic equipment).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> EU GMP Chapter 3 (Premises and Equipment).
> ASTM E2500, Standard Guide for Specification, Design, and Verification of Pharmaceutical and Biopharmaceutical Manufacturing Systems and Equipment.
> ICH Q9, Quality Risk Management (for the risk-based test depth and requalification basis).
> ICH Q10, Pharmaceutical Quality System.
> PIC/S PI 006, Recommendations on Validation Master Plan and qualification.
> 21 CFR Part 11 and EU GMP Annex 11, where the equipment includes a computerized control or data layer.

Confirm the current version and clause numbers of each reference before issue.

## 14. Attachments

| No. | Attachment |
|---|---|
| 1 | Executed DQ protocol and result |
| 2 | FAT and SAT reports with punch list closure |
| 3 | Executed IQ, OQ, and PQ protocols with raw data |
| 4 | Deviation records and their closure |
| 5 | Requirements-to-test traceability matrix |
| 6 | Calibration certificates and preventive maintenance plan |
| 7 | Risk assessment / FMEA driving the test strategy |

## 15. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 16. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Validation) | `<<FILL>>` | | |
| Reviewer (Engineering) | `<<FILL>>` | | |
| Reviewer (Equipment owner) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the summary completed for an example sterilizing autoclave, so you can see the level of detail an inspector expects. The company, equipment, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Equipment | Steam sterilizer (autoclave), asset AUTO-204, manufacturer model GSS-2000, serial 884512 |
| Plan closed | VP-MFG-018, direct-impact GMP equipment |
| Intended use | Terminal sterilization of stainless parts and filled change-part trays for the aseptic fill line |
| Operating range qualified | 121 C / 15 min and 134 C / 4 min cycles; chamber load patterns A, B, and C |

Phases executed:

| Phase | Document | Date | Result |
|---|---|---|---|
| DQ | DQ-AUTO-204 | 14 Jan 2026 | Pass; URS traced to design, 316L chamber confirmed |
| FAT | FAT-GSS-2000 | 03 Feb 2026 | Pass with 4 punch items, all closed before ship |
| SAT | SAT-AUTO-204 | 26 Feb 2026 | Pass; loop checks accepted; no transit damage |
| IQ | IQ-AUTO-204 | 10 Mar 2026 | Pass; 9 of 9 instruments calibrated and traceable |
| OQ | OQ-AUTO-204 | 24 Mar 2026 | Pass with 1 deviation (door interlock retest); empty-chamber heat distribution within 1.0 C |
| PQ | PQ-AUTO-204 | 09 Apr 2026 | Pass; 3 consecutive loaded runs, all biological indicators killed, cold spot held target F0 |

Deviations:

| Ref | Phase | Description | Resolution | Status |
|---|---|---|---|---|
| DEV-2026-0061 | OQ | Door interlock did not re-engage on first power-recovery test | Software setpoint corrected by vendor, test re-run and passed, no product impact | Closed |

Traceability: 31 of 31 user requirements traced to a test and a result; no requirements waived; no untraced tests (matrix TM-AUTO-204).

Readiness: calibration on a 12-month interval, PM loaded in the maintenance system, critical spares stocked, cleaning per SOP-MFG-310, two cycle recipes locked under change control, six operators trained, asset added to the master equipment list.

Requalification basis: periodic review every 3 years; requalify on relocation, chamber or piping modification, recipe change, or two consecutive PQ-equivalent failures; trigger depth is risk-based re-run of the affected OQ/PQ tests under change control CC-MFG-077.

Conclusion: All phases passed, the single deviation closed with no product impact, and traceability confirmed. AUTO-204 is qualified for terminal sterilization within the qualified cycles and released for GMP use as of 15 April 2026.

In this example the team carried one OQ deviation cleanly to closure with an impact assessment, reused SAT loop checks into IQ with a stated justification, proved performance with three loaded runs and biological indicators rather than empty-chamber data alone, and fixed a specific periodic review interval and named requalification triggers. That sequence, evidence to conclusion to a defined requalification basis, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this report prevents

- A qualification summary that concludes "qualified" while one or more deviations are still open or were never impact-assessed.
- The report claims a wider operating range than the OQ or PQ actually challenged.
- PQ proved on empty-chamber or no-load data when product or a representative load was required.
- FAT or SAT results reused into IQ or OQ with no documented justification that the result was still valid and conditions unchanged.
- No traceability shown, so an inspector cannot confirm every user requirement was tested.
- Equipment released to production before calibration, preventive maintenance, cleaning, SOPs, or operator training were in place.
- "Requalify as needed" with no defined interval and no named triggers, so the qualified state has no maintenance basis.
- Acceptance criteria added or softened after the data was seen, rather than pre-approved in the protocols this report rolls up.

## How to adapt this report

1. Set your document number, owner, equipment ID, and the plan number this report closes in the header.
2. In section 2, state the intended use and the operating range you actually qualified, not the equipment's full nameplate capability.
3. Fill the phase table in section 5 with your real protocol numbers and results, and state plainly what you reused from FAT/SAT and why.
4. Populate the acceptance tables in section 6 from your executed protocols; do not restate raw data, point to it.
5. List every deviation in section 7 and confirm each is closed before you write the conclusion.
6. Set a specific periodic review interval and named requalification triggers in section 10; do not leave it open-ended.
7. Confirm every regulation in section 13 against the current published version before issue.
