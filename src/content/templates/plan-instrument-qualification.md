---
title: "Instrument Qualification Plan (AIQ, USP <1058>)"
description: "A plug-and-play analytical instrument qualification plan using the USP <1058> 4Q model and group A/B/C classification, covering scope, the DQ/IQ/OQ/PQ approach by group, roles, acceptance, and references, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Plan"
pillar: "equipment-qualification"
relatedArticles: ["analytical-instrument-qualification", "equipment-qualification-lifecycle"]
tags: ["instrument qualification", "aiq", "usp 1058", "4q model", "iq oq pq", "data integrity", "gmp"]
tier: "Intermediate"
---

This is a ready-to-use analytical instrument qualification (AIQ) plan. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your vendor specifications and qualification protocols, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Analytical Instrument Qualification Plan for `<<FILL: instrument or instrument family>>` |
| Document number | `<<FILL: PLAN-ID, e.g. AIQ-LAB-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Laboratory Quality Lead>>` |
| Site / laboratory | `<<FILL: site, building, lab area>>` |
| Linked protocols / reports | `<<FILL: IQ/OQ/PQ protocol and report numbers>>` |

## 1. Purpose

This plan defines how `<<FILL: COMPANY NAME>>` qualifies the analytical instrument `<<FILL: instrument name / model / asset ID>>` for use in GxP testing, using the four-stage qualification model and the group A/B/C classification described in USP <1058>, Analytical Instrument Qualification. The objective is to establish documented evidence that the instrument is suitable for its intended use, is installed and operating correctly, and continues to perform within defined limits across its service life. Data produced on an instrument that is not qualified to the right level cannot be trusted for a regulated decision.

## 2. Scope

This plan applies to the instrument or instrument family listed in the header, located in the laboratory named above, used to generate GxP data for `<<FILL: release testing / stability / in-process / characterization>>`. It covers the instrument hardware, firmware, and any embedded or attached data system, and it sets the depth of qualification by USP <1058> group.

This plan does not by itself satisfy computerized system validation for a networked data system that manages users, audit trails, and electronic records across multiple instruments. Where the instrument is controlled by such a system, the system is validated under `<<FILL: CSV / CSA SOP-ID>>` and this plan covers the instrument and its local control only. Routine calibration and preventive maintenance after qualification are governed by `<<FILL: calibration / PM SOP-ID>>`.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Instrument owner / user laboratory | Defines the intended use and the performance the instrument must deliver; confirms the group classification; executes PQ and ongoing performance checks. |
| Metrology / qualification engineer | Authors and executes IQ and OQ, manages standards traceability, and maintains the qualification records. |
| Vendor / service engineer | Performs installation and OEM functional tests under the supervision of the user; supplies certificates, manuals, and specifications. Vendor work is reviewed and accepted by the user, never accepted blind. |
| Quality Assurance | Approves the group classification, this plan, the protocols, deviations, and the summary report; owns the release-for-use decision. |
| IT / data system administrator | Where a data system is involved, maintains accounts, audit trail, time synchronization, and backup, and supports the link to system validation. |

## 4. Definitions

- **AIQ (analytical instrument qualification)**: the documented collection of activities that demonstrate an instrument is suitable for its intended use and kept in a state of maintenance and calibration consistent with that use.
- **Intended use**: the specific analytical purpose, the methods to be run, and the performance the instrument must deliver, written down before qualification so that qualification can be designed against it.
- **DQ (design qualification)**: documented evidence that the proposed instrument is suitable for the intended use, including selection of the supplier and the specification it must meet.
- **IQ (installation qualification)**: documented evidence that the instrument as received and installed matches the purchase order and the design specification, and that the installation environment and utilities are correct.
- **OQ (operational qualification)**: documented evidence that the installed instrument operates across its intended ranges as specified, tested against the manufacturer specification and the user's requirements.
- **PQ (performance qualification)**: documented evidence that the instrument performs for its intended use under real conditions, typically using a representative method and a system suitability check, on an ongoing basis.
- **Group A / B / C**: the USP <1058> risk-based classification that sets how much qualification an instrument needs, from simple apparatus (A) to standard equipment with a defined function (B) to configurable instruments with software (C).

## 5. Group classification

Classify the instrument before deciding the qualification depth. The class is driven by complexity and by how much the instrument's software can be configured or programmed, not by how expensive it is. Record the classification and its basis below; QA approves it.

| USP <1058> group | What it is | Qualification expectation |
|---|---|---|
| Group A | Standard apparatus with no measurement capability or usual requirement for calibration; correct use is self-evident | No formal qualification beyond a documented conformity check; covered by good documentation that it is fit for use. Examples: nitrogen evaporators, magnetic stirrers, vortex mixers. |
| Group B | Standard equipment and instruments providing a measured value, controlled by firmware, needing calibration against a specification | DQ, IQ, OQ against the manufacturer and user specification; calibration and maintenance on schedule. Examples: balances, pH meters, melting-point apparatus, ovens, pumps, simple detectors. |
| Group C | Instruments and computerized analytical systems, configurable or programmable, where user requirements drive the function | Full DQ, IQ, OQ, PQ; the associated software is addressed by validation appropriate to its configurability. Examples: HPLC and UHPLC with a data system, GC, dissolution apparatus with control software, mass spectrometers. |

| Item | Entry |
|---|---|
| Instrument and model | `<<FILL: instrument / model>>` |
| Assigned group (A / B / C) | `<<FILL>>` |
| Basis for classification | `<<FILL: measurement role, configurability, software>>` |
| Associated data system and its validation reference | `<<FILL: system name and CSV/CSA reference, or "none">>` |

## 6. Intended use and requirements

Define the intended use before qualification so that OQ and PQ test the right things. State the methods the instrument will run, the performance each method needs, and the operating ranges to be challenged.

| Item | Entry |
|---|---|
| Intended analytical use | `<<FILL: e.g. assay and related substances by reversed-phase HPLC for product family Y>>` |
| Methods to be run | `<<FILL: method IDs / compendial chapters>>` |
| Performance the instrument must deliver | `<<FILL: e.g. wavelength accuracy, injection precision, gradient accuracy, baseline noise>>` |
| Operating ranges to qualify | `<<FILL: flow range, temperature range, wavelength range, pressure>>` |
| Regulatory and data integrity requirements | `<<FILL: audit trail, user roles, time stamps, electronic records>>` |

## 7. Qualification approach by group

Match the qualification depth to the group from section 5. Do not over-qualify a group A device, and do not under-qualify a group C system.

### 7.1 Group A approach

A documented check that the apparatus is fit for its purpose and used correctly. Record the make, model, and a conformity statement against intended use. No DQ, IQ, OQ, or PQ protocol is required. Maintenance and any visual or functional check are handled in routine use.

### 7.2 Group B approach

Perform DQ, IQ, and OQ. PQ as a separate exercise is usually not required for group B; ongoing fitness is demonstrated by scheduled calibration and maintenance against the specification.

- **DQ**: document the selection of the instrument and supplier against the intended use and the specification it must meet.
- **IQ**: verify the as-received instrument matches the order and the design specification, the installation site and utilities are correct, and documentation, firmware version, and accessories are present.
- **OQ**: verify the instrument operates across its specified ranges, tested against the manufacturer specification and the user requirements, using traceable standards.
- **Ongoing**: calibrate and maintain on schedule per `<<FILL: calibration SOP-ID>>`; requalify after relocation, major repair, or firmware change that affects function.

### 7.3 Group C approach

Perform full DQ, IQ, OQ, and PQ, and address the software according to its configurability.

- **DQ**: document user requirements, the specification, and the supplier assessment for the configurable system.
- **IQ**: verify hardware, firmware, software version, modules, communications, and the installation environment; confirm the data system connection, time synchronization, and that the audit trail is enabled.
- **OQ**: test each module against its specification and against the user requirements, across the intended operating ranges, and test the critical software functions, security, and audit trail behavior.
- **PQ**: run a representative method with a defined system suitability test under real conditions, and repeat at a defined frequency (for example before each use, daily, or per a holistic schedule) to show ongoing fitness.
- **Software**: where the data system is networked and configurable, its validation is performed under `<<FILL: CSV / CSA SOP-ID>>`. Use a risk-based, critical-thinking approach consistent with the FDA Computer Software Assurance guidance (finalized 24 September 2025), scaling the effort to the risk the function carries.

## 8. Test elements by stage

The table sets the typical content of each stage. Fill the actual tests, ranges, and acceptance from the manufacturer specification and the user requirements in the executable protocols.

| Stage | Typical content | Reference for acceptance |
|---|---|---|
| DQ | Intended use; user requirements; supplier and instrument selection; specification the instrument must meet | User requirements and section 6 |
| IQ | Identity vs purchase order; design specification match; site, utilities, environment; firmware/software version; manuals, certificates, accessories; calibration certificates of standards | Purchase order, design spec, vendor docs |
| OQ | Module and parameter tests across ranges using traceable standards; for group C, software security, user roles, audit trail, data backup/restore | Manufacturer spec and user requirements |
| PQ (group C) | Representative method run; system suitability; holistic check that the whole system meets intended use; defined repeat frequency | The method's system suitability criteria |

## 9. Standards, traceability, and environment

| Item | Entry |
|---|---|
| Reference standards / certified materials used | `<<FILL: e.g. NIST-traceable weights, wavelength standard, certified buffers>>` |
| Traceability | `<<FILL: traceable to a national/international standard via accredited calibration>>` |
| Test equipment used in qualification | `<<FILL: listed, in-calibration, with certificate references>>` |
| Environmental conditions verified | `<<FILL: temperature, humidity, vibration, power as required>>` |

Every standard and tool used to qualify must itself be in calibration and traceable, with the certificate referenced in the IQ or OQ record. A qualification run on an out-of-calibration standard is not evidence.

## 10. Acceptance criteria

The plan is satisfied when all of the following are true for the assigned group:

- The group classification is documented and approved before qualification, and the qualification depth matches the group.
- DQ shows the instrument and supplier were selected against the intended use and the specification (group B and C).
- IQ confirms the installed instrument matches the order and the design specification and the environment is correct.
- OQ shows the instrument operates within specification across the intended ranges, against traceable standards, with every test meeting its predefined acceptance.
- PQ shows the system meets its intended use under real conditions with a passing system suitability test, at the defined frequency (group C).
- All standards and test equipment used were in calibration and traceable.
- Every deviation is documented, assessed for impact, and resolved before the release-for-use decision.
- The summary report concludes on the qualified state and is approved by QA before the instrument is used for GxP data.

## 11. Deviations and handling

Any out-of-specification result, failed test, or departure from this plan or its protocols is documented as a deviation per `<<FILL: deviation SOP-ID>>` and assessed for impact before the qualified state is accepted. Do not release the instrument for GxP use until the deviation is resolved and QA has approved.

## 12. Requalification and change control

State when the instrument is requalified: after relocation, major repair or part replacement that affects performance, firmware or software change, or at a defined periodic interval set by risk. Requalification scope is risk-based and need not repeat every IQ step if the change is bounded. Changes are routed through `<<FILL: change control SOP-ID>>`, which decides the requalification needed before the change takes effect.

| Trigger | Typical requalification scope |
|---|---|
| Relocation | IQ environment checks plus OQ of affected parameters |
| Major repair / part replacement | OQ of the affected module |
| Firmware / software change | Risk-based OQ of affected functions; data system impact assessed under change control |
| Periodic | Risk-based subset confirming continued fitness |

## 13. Summary report

On completion, the qualification owner issues report `<<FILL: report number>>` summarizing the group classification, the DQ/IQ/OQ/PQ stages performed and their results against acceptance, all deviations and their resolution, the standards used, and the conclusion on the qualified state and the date released for GxP use. The report is approved by QA.

## 14. Attachments

| No. | Attachment |
|---|---|
| 1 | Intended use and user requirements |
| 2 | Group classification rationale |
| 3 | Executed DQ record (group B and C) |
| 4 | Executed IQ protocol and record |
| 5 | Executed OQ protocol and record |
| 6 | Executed PQ protocol and record (group C) |
| 7 | Vendor specifications, manuals, and certificates |
| 8 | Calibration certificates of standards and test equipment |

## 15. References

> USP <1058>, Analytical Instrument Qualification.
> USP <621> Chromatography and USP <857> Ultraviolet-Visible Spectroscopy, where the instrument runs those techniques.
> 21 CFR 211.63 (equipment design), 211.67 (cleaning and maintenance), 211.68 (automatic, mechanical, and electronic equipment), 211.160(b)(4) (calibration of instruments).
> 21 CFR Part 11 (electronic records and signatures) where a data system is involved.
> EU GMP Annex 11 (Computerised Systems) and Annex 15 (Qualification and Validation, 2015 revision).
> ICH Q2(R2), Validation of Analytical Procedures, for method-level performance.
> ICH Q9, Quality Risk Management, for the risk-based group and requalification approach.
> FDA Computer Software Assurance for Production and Quality System Software guidance (finalized 24 September 2025), for the software in group C systems.
> PIC/S PI 011, Good Practices for Computerised Systems in GxP Environments.

Confirm the current version and clause numbers of each reference before issue.

## 16. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 17. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Metrology / Qualification) | `<<FILL>>` | | |
| Reviewer (Laboratory) | `<<FILL>>` | | |
| Reviewer (IT, if data system) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the classification and qualification approach completed for an example HPLC system with a data system, so you can see the level of detail an inspector expects. The company, instrument, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Instrument and model | Reversed-phase HPLC, quaternary pump, autosampler, column oven, diode-array detector, asset ID HPLC-12 |
| Intended analytical use | Assay and related substances for product family Y, methods MTH-0451 and MTH-0452 |
| Assigned group | Group C (configurable system controlled by a chromatography data system) |
| Basis for classification | Configurable software, programmable methods and sequences, multi-module instrument generating GxP results |
| Associated data system and validation reference | Chromatography data system, networked, validated under CSV-IT-118 (CSA risk-based) |
| DQ | User requirements URS-LAB-031 mapped to vendor specification; supplier assessment on file |
| IQ | Modules, firmware, software version verified vs purchase order; site power, temperature, vibration confirmed; data system connection and time synchronization verified; audit trail confirmed enabled; standards' calibration certificates referenced |
| OQ (worked tests) | Wavelength accuracy +/- 1 nm at 360.8 nm against a certified holmium oxide standard; injection precision %RSD at or below 1.0 percent over 6 injections; flow accuracy within +/- 2 percent at 0.5, 1.0, and 2.0 mL/min; gradient accuracy within +/- 2 percent; column oven within +/- 1 degree C of setpoint; user roles, audit trail capture, and backup/restore verified |
| PQ | System suitability per MTH-0451 (resolution, tailing, %RSD of replicate injections) met on the day of release and required before each analytical run thereafter |
| Standards used | NIST-traceable holmium oxide wavelength standard; certified flow and temperature references, all in calibration |
| Deviations | One: autosampler needle seat replaced during IQ; OQ injection precision re-run after replacement, passed; deviation DEV-2026-0207 closed |
| Result | All OQ tests met acceptance after the needle-seat deviation was closed; PQ system suitability passed; instrument released for GxP use on `<<FILL: date>>` under report AIQ-LAB-031-R |

In this example the team classified the system as group C because the data system is configurable and programmable, qualified each module against the vendor specification and the user requirements, confirmed the audit trail and user roles at OQ rather than assuming the software was fine, and tied ongoing fitness to a system suitability test before every run. A hardware fault during IQ was handled as a deviation and the affected OQ test re-run, not waved through. That sequence is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this plan prevents

- Group classification not documented, so an HPLC data system was qualified to the same shallow depth as a balance, or a simple device was over-qualified with no benefit.
- IQ and OQ accepted from the vendor's certificate alone, with no user review or any test against the user's own requirements.
- OQ performed only against the manufacturer specification, with the instrument's intended use and the methods it actually runs never tested.
- For a configurable data system, the audit trail, user roles, and security never checked at qualification, leaving a data integrity gap discovered only at inspection.
- Standards or test equipment used in qualification were themselves out of calibration or not traceable.
- No PQ or ongoing performance check for a group C system, so there is no evidence the instrument stayed fit between qualifications.
- The instrument used for GxP data before the summary report concluded on the qualified state and QA released it.
- No requalification after a firmware update, relocation, or major repair, with no change control linking the change to the qualification.

## How to adapt this plan

1. Set your document number, owner, protocol and report numbers, and effective date in the header.
2. Classify your instrument in section 5 against USP <1058> group A, B, or C, and have QA approve the basis before you design the protocols.
3. Write the real intended use, methods, and operating ranges in section 6 so OQ and PQ test what the instrument actually does.
4. Pick the matching approach in section 7 (do not run full PQ on a group B balance; do not skip the audit trail check on a group C system).
5. List your real traceable standards and test equipment in section 9 and reference their current certificates.
6. Point the cross-references in sections 2, 7.3, 11, and 12 to your real computerized system validation, calibration, deviation, and change control procedures.
7. Confirm every regulation in section 15 against the current published version before issue.
