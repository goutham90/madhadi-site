---
title: "Component Criticality Assessment"
description: "A plug-and-play ASTM E2500 component-level criticality assessment that lists components, their critical aspects and critical design elements, the critical-versus-noncritical determination, and how that determination scales qualification effort, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Risk Assessment"
pillar: "equipment-qualification"
relatedArticles: ["equipment-qualification-lifecycle","commissioning-qualification-astm-e2500","factory-site-acceptance-testing"]
tags: ["component criticality", "astm e2500", "equipment qualification", "critical aspects", "risk assessment", "commissioning", "gmp"]
tier: "Advanced"
---

This is a ready-to-use component criticality assessment. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your P&IDs and user requirements, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

A component criticality assessment is the engine that drives a science- and risk-based qualification effort under ASTM E2500. It works from the system down to the component, decides which components can affect product quality or patient safety, names the specific design features and ranges that have to be right, and uses that determination to scale how much verification each component gets. Critical components earn formal, QA-approved verification; noncritical components are handled by good engineering practice. Get this assessment wrong and you either qualify everything (wasteful, and inspectors see padding) or miss a real risk (a finding waiting to happen).

## Document control header

| Field | Entry |
|---|---|
| Document title | Component Criticality Assessment for `<<FILL: system name>>` |
| Document number | `<<FILL: CCA-ID, e.g. CCA-ENG-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Engineering / Validation>>` |
| System / area | `<<FILL: system, building, room, equipment train>>` |
| Linked documents | `<<FILL: URS-ID, FRA-ID, P&ID numbers, system risk assessment>>` |

## 1. Purpose

This assessment determines, at the component level, which components of `<<FILL: system name>>` are critical to product quality, patient safety, or data integrity, and which are not. The determination sets the verification strategy for each component: critical components receive formal verification against acceptance criteria with Quality approval, noncritical components are confirmed under good engineering practice (GEP). The objective is to focus qualification effort where risk lives and to record the rationale so the strategy is defensible to a regulator.

## 2. Scope

This assessment applies to the components of `<<FILL: system name>>` at `<<FILL: site / area>>`, as defined by the boundary diagram and component list in section 6. It covers process-contact and process-control components and the instruments, alarms, and interlocks that influence a critical aspect. It does not cover facility or utility systems outside the named boundary, which are assessed under `<<FILL: cross-reference system risk assessments>>`. This assessment feeds, and is consistent with, the system-level risk assessment `<<FILL: system risk assessment ID>>` and does not replace it.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Subject matter experts (process, automation, equipment) | Provide product and process knowledge, identify critical aspects and critical design elements, and propose the criticality determination for each component. |
| Engineering / Validation lead | Owns this assessment, runs the team session, derives the verification strategy from the determination, and links it to the verification plan. |
| Quality Assurance | Reviews and approves the assessment, confirms that every critical aspect traces to a product quality or patient safety requirement, and owns the acceptance of risk-based decisions. |
| Supplier / vendor (where used) | Provides design documentation, GEP records, and FAT/SAT evidence that may be reused for verification. |

## 4. Definitions

- **Component**: an individual item within a system that performs a function, for example a pump, a valve, a sensor, a heat exchanger, a controller, a filter housing.
- **Critical aspect (CA)** (term used in ASTM E2500): in this assessment, anything a piece of equipment or a system does, or any property it holds, that has the potential to change product quality or put a patient at risk. We work each one out from the product's critical quality attributes and critical process parameters, so a critical aspect is what ties the product back to the hardware.
- **Critical design element (CDE)** (term used in ASTM E2500): in this assessment, the precise design choice within a component, a setting, an operating range, a material, or a built-in function, that makes a critical aspect happen and so has to be tested. The CDE is the thing you put under test.
- **Critical component**: in this assessment, any component that carries one or more critical design elements, meaning the plant cannot deliver a critical aspect unless that component works correctly.
- **Noncritical component**: in this assessment, any component that carries no critical design element. Its failure leaves product quality, patient safety, and data integrity untouched, so we confirm it through good engineering practice.
- **Good engineering practice (GEP)** (term used in ASTM E2500): for this assessment, the recognized engineering know-how and reference standards we apply when we design, buy, install, and commission a system, used to confirm noncritical components without putting them through formal qualification.
- **Verification** (term used in ASTM E2500): in this assessment, the documented act of showing that a critical aspect, as built into its critical design elements, satisfies its acceptance criteria. When work follows an integrated, risk-based route, this single verified record takes the place of the separate IQ and OQ steps that older programs ran.

## 5. Inputs to this assessment

List the knowledge this assessment is built from. The determination is only as good as these inputs, so name them explicitly.

| Input | Reference |
|---|---|
| Critical quality attributes (CQAs) of the product | `<<FILL: CQA list / control strategy ID>>` |
| Critical process parameters (CPPs) for this system | `<<FILL: CPP list / process description ID>>` |
| User requirements specification (URS) | `<<FILL: URS-ID>>` |
| Functional / design specification | `<<FILL: FS / DS-ID>>` |
| P&ID and component list | `<<FILL: P&ID numbers, asset register>>` |
| System-level risk assessment | `<<FILL: system risk assessment ID>>` |
| Process / product knowledge, prior platform experience | `<<FILL: development report, platform data>>` |
| Applicable regulations and company standards | section 13 |

## 6. Method

The assessment runs top down so that every critical aspect traces to the product, and every verification traces to a critical aspect. Document the session: attendees, date, and the references used.

1. Define the system boundary and list every component (section 7), referenced to the P&ID tag.
2. From the CQAs and CPPs, state the critical aspects of the system: the functions or characteristics that can affect product quality or patient safety (section 8).
3. For each component, ask whether it delivers, controls, or measures any critical aspect. If yes, the component is critical and you name its critical design element(s). If no, it is noncritical and handled by GEP (section 9).
4. For each critical design element, set the acceptance criterion and the verification approach, including any FAT, SAT, or supplier evidence to be reused (section 10).
5. Set the verification effort for each component from its determination (section 11). Critical to formal verification with QA approval; noncritical to GEP.
6. QA reviews and approves. Re-assess on change per section 12.

A component is critical if any one of these is true: it directly contacts product or product-contact material in a way that can affect a CQA; it controls or directly influences a critical process parameter; it measures or records a parameter used for a quality decision or batch record; it provides a safety interlock or alarm protecting product or patient; it preserves data integrity for a GxP record. If none of these is true, the component is noncritical.

## 7. Component inventory

List every component within the boundary. Use the P&ID tag as the unique identifier.

| Component ID (P&ID tag) | Component description | Function | In product-contact path? |
|---|---|---|---|
| `<<FILL: tag>>` | `<<FILL: description>>` | `<<FILL: what it does>>` | Yes / No |
| `<<FILL: tag>>` | `<<FILL: description>>` | `<<FILL>>` | Yes / No |
| `<<FILL: tag>>` | `<<FILL: description>>` | `<<FILL>>` | Yes / No |

## 8. Critical aspects of the system

State the critical aspects, each traced to a CQA or CPP. These are derived from the product, not from the equipment list. The equipment exists to deliver these.

| Critical aspect ID | Critical aspect (function / characteristic) | Linked CQA / CPP | Why it matters (impact if not delivered) |
|---|---|---|---|
| `<<FILL: CA-01>>` | `<<FILL: e.g. maintain product temperature within range during hold>>` | `<<FILL: CQA/CPP>>` | `<<FILL: degradation / loss of potency / patient harm>>` |
| `<<FILL: CA-02>>` | `<<FILL: e.g. prevent cross-contamination via product-contact surface>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: CA-03>>` | `<<FILL: e.g. record fill weight to the batch record (data integrity)>>` | `<<FILL>>` | `<<FILL>>` |

## 9. Component criticality determination

For each component, decide critical or noncritical against the rule in section 6. Name the critical aspect it serves and, if critical, its critical design element(s). Record the rationale; "obvious" is not a rationale an inspector accepts.

| Component ID | Critical aspect served (or "none") | Critical design element(s) | Determination | Rationale |
|---|---|---|---|---|
| `<<FILL: tag>>` | `<<FILL: CA-01>>` | `<<FILL: e.g. control range, sensor accuracy, alarm setpoint>>` | Critical | `<<FILL: controls a CPP that affects a CQA>>` |
| `<<FILL: tag>>` | `<<FILL: none>>` | `<<FILL: n/a>>` | Noncritical | `<<FILL: no product contact, no quality/safety/data function>>` |
| `<<FILL: tag>>` | `<<FILL: CA-02>>` | `<<FILL>>` | Critical | `<<FILL>>` |

## 10. Critical design elements and verification approach

For every critical component, expand each critical design element into an acceptance criterion and a verification approach. State where supplier, FAT, or SAT evidence is reused, and what is verified on site.

| Component ID | Critical design element | Acceptance criterion | Verification approach | Evidence reused (FAT/SAT/supplier) |
|---|---|---|---|---|
| `<<FILL: tag>>` | `<<FILL: control range 2 to 8 C>>` | `<<FILL: maintains 2 to 8 C at worst-case load>>` | `<<FILL: challenge test against calibrated reference>>` | `<<FILL: FAT loop test report, calibration cert>>` |
| `<<FILL: tag>>` | `<<FILL: material 316L, Ra <= 0.8 um>>` | `<<FILL: MoC cert + surface finish report>>` | `<<FILL: document review of mill cert and finish report>>` | `<<FILL: supplier MoC documentation>>` |
| `<<FILL: tag>>` | `<<FILL: high-temp alarm at setpoint>>` | `<<FILL: alarm annunciates and interlocks at setpoint>>` | `<<FILL: alarm/interlock challenge>>` | `<<FILL: FAT alarm matrix>>` |

## 11. Verification effort by determination

This section is the point of the whole assessment. The determination sets how much qualification effort each component receives. State the rule, then apply it.

| Determination | Verification effort | Documentation | Approval |
|---|---|---|---|
| Critical | Formal verification of each critical design element against acceptance criteria; defects affecting a CDE are corrected and re-verified | Verification protocol/report or test scripts under document control | QA approval required |
| Noncritical | Confirmed under good engineering practice (commissioning checks, installation records, supplier docs) | GEP records, commissioning turnover package | Engineering sign-off; QA approval not required |

| Item | Entry |
|---|---|
| Count of components assessed | `<<FILL: total>>` |
| Count critical | `<<FILL: number>>` |
| Count noncritical | `<<FILL: number>>` |
| Critical components without reusable FAT/SAT evidence | `<<FILL: number, drives on-site verification scope>>` |

## 12. Re-assessment on change

This assessment is a living document. Re-assess a component, or the system, when any of the following occurs, under change control `<<FILL: change control SOP-ID>>`:

- A change to the product, its CQAs, CPPs, or control strategy.
- A modification, replacement, or relocation of a component.
- A new or revised user requirement that touches a critical aspect.
- An investigation or deviation that shows a component affects quality, safety, or data integrity in a way not captured here.

Record the re-assessment as a new version with the trigger noted in the revision history.

## 13. References

> ASTM E2500 (Standard Guide for Specification, Design, and Verification of Pharmaceutical and Biopharmaceutical Manufacturing Systems and Equipment).
> ICH Q9 (Quality Risk Management).
> ICH Q8(R2) (Pharmaceutical Development), for CQAs and CPPs.
> ICH Q10 (Pharmaceutical Quality System).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> EU GMP Annex 11 (Computerised Systems), for critical aspects involving control and data.
> 21 CFR 211.63 and 211.68 (equipment design, automatic equipment).
> ISPE Baseline Guide Volume 5 (Commissioning and Qualification) and the ISPE Good Practice Guide: Applied Risk Management for Commissioning and Qualification.

Confirm the current version and clause numbers of each reference before issue.

## 14. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 15. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Engineering / Validation) | `<<FILL>>` | | |
| SME reviewer (Process / Automation) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the determination and verification sections completed for an example single-use bioreactor skid, so you can see the level of detail an inspector expects. The company, tags, and numbers are illustrative; replace them with your own.

System: single-use bioreactor skid, SUB-200, drug-substance upstream. CQAs in scope: viable cell density, product titer, bioburden control. CPPs in scope: temperature, pH, dissolved oxygen.

Critical aspects identified:

| CA ID | Critical aspect | Linked CQA / CPP | Impact if not delivered |
|---|---|---|---|
| CA-01 | Maintain culture temperature 36.5 to 37.5 C | CPP temperature -> cell growth / titer | Off-target growth, low titer, batch loss |
| CA-02 | Maintain pH 6.9 to 7.1 by base addition | CPP pH -> viability / titer | Loss of viability, reduced product |
| CA-03 | Maintain DO at setpoint via sparge control | CPP DO -> cell health | Cell stress, reduced titer |
| CA-04 | Sterile boundary integrity of single-use assembly | CQA bioburden / sterility assurance | Contamination, batch loss, patient risk |

Component determination (extract):

| Component ID | CA served | Critical design element | Determination | Rationale |
|---|---|---|---|---|
| TE-201 (temperature sensor) | CA-01 | Accuracy +/- 0.2 C across range; calibrated | Critical | Measures a CPP used for control and the batch record |
| TIC-201 (temp controller loop) | CA-01 | Control band holds 36.5 to 37.5 C at full load | Critical | Controls a CPP affecting a CQA |
| AE-203 (pH probe) | CA-02 | Accuracy +/- 0.05 pH; one-point recal at use | Critical | Measures a CPP used for control |
| FCV-205 (gas mass-flow controller, sparge) | CA-03 | Flow setpoint accuracy +/- 5 percent | Critical | Controls a CPP affecting a CQA |
| Single-use bioreactor bag, product-contact | CA-04 | Film MoC, gamma-irradiated, integrity-tested | Critical | Product-contact, sterile boundary |
| LT-209 (jacket coolant level transmitter) | none | n/a | Noncritical | Utility level, no product quality, safety, or data function |
| Skid frame casters | none | n/a | Noncritical | No process function |
| Local HMI ambient-light sensor | none | n/a | Noncritical | Display brightness only, no GxP function |

Verification approach for the critical components (extract):

| Component ID | Critical design element | Acceptance criterion | Verification approach | Evidence reused |
|---|---|---|---|---|
| TE-201 | Accuracy +/- 0.2 C | Calibrated against NIST-traceable reference; error within +/- 0.2 C | Document review of calibration certificate + on-site verification at two points | Supplier calibration cert |
| TIC-201 | Control band 36.5 to 37.5 C | Holds band at worst-case heat load, no setpoint excursion | Loop challenge test at full load against calibrated reference | FAT control-loop test report (re-witnessed on site) |
| Bioreactor bag | Sterile, integrity-tested film | CoC for gamma dose + pre-use integrity test pass | Document review of irradiation CoC + execute pre-use integrity test | Supplier irradiation and integrity documentation |

Outcome counts: 41 components assessed, 12 critical, 29 noncritical. Of the 12 critical, 9 had reusable FAT/SAT evidence approved for reuse; 3 required full on-site verification. QA approved the assessment and the reuse decisions.

In this specimen the team traced every critical aspect back to a CQA or CPP, named the exact design element and range each critical component had to deliver, sent only the 12 critical components to formal QA-approved verification, and confirmed the 29 noncritical ones under good engineering practice. The 9-of-12 evidence reuse, witnessed and re-verified on site rather than rubber-stamped, is exactly the efficiency ASTM E2500 was designed to give, and exactly what a reviewer expects to see justified.

## Common inspection findings this assessment prevents

- Everything in the system qualified the same way, with no link from verification back to a product quality or patient safety requirement (padding that inspectors read as a lack of process understanding).
- A component called critical with no named critical design element, so it is unclear what was actually verified.
- A critical aspect with no traceable CQA or CPP behind it, or a CPP with no component assigned to deliver it (a gap).
- "Determination: noncritical" with no rationale, or a rationale that does not address product contact, process control, quality decisions, safety interlocks, or data integrity.
- FAT or SAT evidence accepted for reuse with no documented review of suitability and no on-site confirmation.
- The assessment never re-opened after a component was replaced or the control strategy changed.
- Data-integrity-relevant instruments (those whose readings enter the batch record) treated as noncritical because they were viewed only as "instrumentation".

## How to adapt this assessment

1. Set your document number, owner, system, and effective date in the header, and list your real URS, FS, P&ID, and system risk assessment in section 5.
2. Build section 7 from your actual asset register and P&ID tags so every component is uniquely identified.
3. Derive section 8 from your real CQAs and CPPs (control strategy), not from the equipment list. If a CPP has no component delivering it, you have found a gap.
4. Apply the single criticality rule in section 6 consistently; record a real rationale for every determination, including the noncritical ones.
5. In section 10, decide for each critical design element what FAT, SAT, or supplier evidence you will reuse and what you will verify on site, and reference the source records.
6. Wire section 11 into your verification plan so the determination actually scales effort, and section 12 into your change control so the assessment stays current.
7. Confirm every regulation in section 13 against the current published version before issue.
