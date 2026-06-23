---
title: "Equipment Design Qualification (DQ) Protocol"
description: "A plug-and-play design qualification protocol for manufacturing equipment: user and process requirements, design review against the URS, critical design elements, good engineering practice, supplier assessment, acceptance, and approval, with a worked specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Protocol"
pillar: "equipment-qualification"
relatedArticles: ["equipment-qualification-lifecycle", "commissioning-qualification-astm-e2500", "factory-site-acceptance-testing"]
tags: ["design qualification", "equipment qualification", "protocol", "URS", "good engineering practice", "ASTM E2500", "gmp"]
tier: "Intermediate"
---

This is a ready-to-use design qualification (DQ) protocol for a piece of GMP manufacturing equipment. DQ is the documented check, done before the equipment is built or bought, that the proposed design meets the user and process requirements and that a capable supplier has been selected. It is the front end of the qualification lifecycle: DQ ties the user requirements specification (URS) to a specific design and supplier so that factory acceptance, installation, operational, and performance qualification have a defensible starting point. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach the URS and design documents, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Design Qualification Protocol for `<<FILL: equipment, e.g. lyophilizer / fluid-bed dryer / bioreactor>>` |
| Document number | `<<FILL: PRT-ID, e.g. DQ-MFG-044>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Engineering / Validation>>` |
| Site / area | `<<FILL: site, building, room, line>>` |
| Linked URS | `<<FILL: URS number, e.g. URS-MFG-044>>` |
| Linked FAT/SAT and IQ/OQ/PQ | `<<FILL: downstream protocol numbers>>` |
| Linked risk assessment | `<<FILL: risk assessment number>>` |

## 1. Purpose

This protocol defines how `<<FILL: COMPANY NAME>>` confirms, before the equipment is built or purchased, that the proposed design of the `<<FILL: equipment>>` meets the documented user and process requirements, complies with good engineering practice, and was sourced from a supplier shown to be capable of delivering and supporting it. DQ records the rationale for the selected design and supplier so the rest of the qualification lifecycle proceeds from a controlled baseline.

## 2. Scope

This protocol applies to the single `<<FILL: equipment / make / model>>` to be installed at the area named in the header, including its control system and instrumentation supplied with the equipment. It covers the user and process requirements, the supplier assessment, the design review against the URS, the identification of critical design elements that affect product quality or patient safety, and the fitness-for-purpose conclusion that supports the acceptance decision. It does not cover factory acceptance testing, site acceptance testing, installation, operational, or performance qualification, or computerized system validation of the control system, which are governed by `<<FILL: cross-reference protocol / SOP-IDs>>`. Where the equipment carries configurable or custom software, this DQ records the software category and risk; detailed software validation follows `<<FILL: CSV / CSA SOP-ID>>`.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Process / equipment owner (user) | Defines the intended use, the process requirements, and the user requirements; confirms fitness for purpose; owns the equipment after qualification. |
| Engineering | Authors this protocol, leads the design review, derives the good engineering practice and critical design element assessment, and manages the supplier interface. |
| Validation | Confirms the URS is testable, links design elements to downstream qualification, and ensures traceability into FAT/SAT and IQ/OQ/PQ. |
| Quality Assurance | Reviews and approves the URS, the risk assessment, this protocol, and the DQ conclusion; confirms critical design elements are correctly identified and controlled. |
| Subject matter experts (automation, EHS, metrology, microbiology, cleaning) | Review the design against their domain requirements and sign the relevant sections. |
| Supplier | Provides design documentation, the traceability needed for the review, and evidence of its quality management system. |

## 4. Definitions

- **Design qualification (DQ)**: documented verification that the proposed design of the equipment is suitable for its intended use and meets the user requirements before it is built or bought.
- **User requirements specification (URS)**: the controlled document that states what the equipment must do, expressed in user and process terms, against which every downstream test is traced.
- **Good engineering practice (GEP)**: how the project does sound, value-for-money engineering at every stage using recognized methods, codes, and in-house standards; it is the baseline of competent work that the quality and qualification effort then builds on top of (concept per ISPE GEP).
- **Critical design element (CDE), also called critical aspect**: any part of the equipment's design, a function, a built-in feature, or a measurable characteristic, that has to work for the product to be safe and meet its quality requirements; CDEs are picked out using what is known about the process plus the risk assessment, and they get the closest verification effort (concept per ASTM E2500 critical aspects).
- **Critical process parameter (CPP) and critical quality attribute (CQA)**: the process inputs and product outputs that the equipment design must be able to control and deliver; CDEs are the design features that make that control possible.
- **Subject matter expert (SME)**: the qualified person whose knowledge and judgment support a design decision and its verification.

## 5. Inputs to the design qualification

List the controlled documents the design review is performed against. The review cannot start until each input is approved and current.

| Input | Document / reference | Approved? |
|---|---|---|
| User requirements specification | `<<FILL: URS number and version>>` | Yes / No |
| Process description / process flow | `<<FILL>>` | Yes / No |
| Quality target product profile / CQA list | `<<FILL>>` | Yes / No |
| Quality risk assessment (process and equipment) | `<<FILL: risk assessment number>>` | Yes / No |
| Supplier design documents (P&ID, GA drawings, datasheets, functional design) | `<<FILL>>` | Yes / No |
| Materials of construction / surface finish documentation | `<<FILL>>` | Yes / No |
| Applicable standards and site engineering standards | `<<FILL>>` | Yes / No |

## 6. User and process requirements

Summarize the user and process requirements that the design must satisfy. Each requirement carries a unique ID so it can be traced through the design review in section 8 and forward into FAT/SAT and IQ/OQ/PQ. Classify each as critical (affects product quality or patient safety, a CDE) or non-critical (GEP / business). The full statements live in the URS; this table is the working extract for the review.

| Req. ID | Requirement (user / process) | Type | Critical (CDE)? | Acceptance basis |
|---|---|---|---|---|
| `<<FILL: URS-001>>` | `<<FILL: e.g. product-contact surfaces 316L, Ra <=0.5 um, electropolished>>` | Material | Yes | `<<FILL: certificate / drawing reference>>` |
| `<<FILL: URS-002>>` | `<<FILL: e.g. holds and controls product temperature 2 to 8 C, +/- 0.5 C>>` | Process | Yes | `<<FILL: control philosophy / datasheet>>` |
| `<<FILL: URS-003>>` | `<<FILL: e.g. CIP/SIP capable, drainable, no dead legs >3D>>` | Cleanability | Yes | `<<FILL: P&ID, slope statement>>` |
| `<<FILL: URS-004>>` | `<<FILL: e.g. audit trail and access control per 21 CFR Part 11>>` | Data integrity | Yes | `<<FILL: functional design spec>>` |
| `<<FILL: URS-005>>` | `<<FILL: e.g. machine guarding and E-stop to site EHS standard>>` | Safety | No | `<<FILL: EHS standard>>` |
| `<<FILL: URS-006>>` | `<<FILL: e.g. footprint <=2.0 x 3.0 m>>` | Business / GEP | No | `<<FILL: layout drawing>>` |

## 7. Supplier assessment

DQ includes documented evidence that the supplier can deliver and support the equipment. Record the assessment and its conclusion; attach the questionnaire and any audit report.

| Item | Entry |
|---|---|
| Supplier name | `<<FILL>>` |
| Equipment / model proposed | `<<FILL>>` |
| Assessment method | `<<FILL: postal questionnaire / remote audit / on-site audit, with date>>` |
| Quality management system | `<<FILL: ISO 9001 cert no. / GMP experience / references>>` |
| Relevant design and build experience | `<<FILL: comparable installations>>` |
| Software development and lifecycle controls (if applicable) | `<<FILL: GAMP category, dev practices>>` |
| Documentation and traceability available for review | `<<FILL: P&ID, datasheets, FAT plan, MoC certs>>` |
| Spares, service, and support arrangement | `<<FILL>>` |
| Open issues / risks from assessment | `<<FILL: none, or list>>` |
| Assessment conclusion | Acceptable / Acceptable with conditions / Not acceptable |
| Supplier assessment reference | `<<FILL: report number>>` |

Depth of supplier assessment is set by the criticality and complexity of the equipment and the software it carries, per the risk assessment. A questionnaire may suffice for low-risk standard equipment; a custom GMP system with bespoke software warrants an on-site audit.

## 8. Design review against the URS

This is the core of the DQ. Each requirement from section 6 is compared with the corresponding feature of the proposed design, the evidence is cited, and a verdict is recorded. Critical (CDE) requirements receive focused attention. A gap is not a failure on its own; it is recorded, risk-assessed, and either closed by a design change or carried as a justified deviation with QA approval.

| Req. ID | Requirement | Proposed design feature | Design evidence (doc / drawing) | Meets requirement? | Action if gap |
|---|---|---|---|---|---|
| `<<FILL: URS-001>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: MoC certificate, Ra report>>` | Yes / No / Partial | `<<FILL>>` |
| `<<FILL: URS-002>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: datasheet, control narrative>>` | Yes / No / Partial | `<<FILL>>` |
| `<<FILL: URS-003>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: P&ID, slope and drainability statement>>` | Yes / No / Partial | `<<FILL>>` |
| `<<FILL: URS-004>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: functional design spec>>` | Yes / No / Partial | `<<FILL>>` |

### 8.1 Critical design elements (CDE) register

Pull every critical requirement into a register so each CDE is named, traced to its design feature, and assigned the downstream test that will verify it. This register is the bridge from DQ into qualification and is the artifact an inspector follows to confirm that what matters for quality was designed in, not bolted on.

| CDE ID | Critical design element | Why critical (quality / safety) | Design feature delivering it | Verified downstream by |
|---|---|---|---|---|
| `<<FILL: CDE-01>>` | `<<FILL: product-contact material and finish>>` | `<<FILL: cleanability, leachables>>` | `<<FILL: 316L EP, Ra <=0.5 um>>` | `<<FILL: IQ MoC check / FAT>>` |
| `<<FILL: CDE-02>>` | `<<FILL: temperature control loop>>` | `<<FILL: product stability>>` | `<<FILL: jacketed, PID control, dual probes>>` | `<<FILL: OQ temperature mapping>>` |
| `<<FILL: CDE-03>>` | `<<FILL: drainability / no dead legs>>` | `<<FILL: cleaning effectiveness>>` | `<<FILL: sloped lines, sanitary fittings>>` | `<<FILL: IQ slope check / cleaning validation>>` |
| `<<FILL: CDE-04>>` | `<<FILL: data integrity and access control>>` | `<<FILL: record trustworthiness>>` | `<<FILL: role-based access, audit trail>>` | `<<FILL: CSV / OQ>>` |

### 8.2 Good engineering practice review

Confirm the non-critical (GEP and business) requirements and the general engineering quality of the design: standards compliance, utilities and interfaces, maintainability and access, ergonomics, materials and surface finish on non-product-contact parts, layout and footprint, energy and consumables. GEP findings are tracked but do not by themselves block acceptance unless they touch a critical element.

| GEP area | Finding | Acceptable? | Note |
|---|---|---|---|
| Standards compliance (mechanical, electrical, pressure, EHS) | `<<FILL>>` | Yes / No | `<<FILL>>` |
| Utilities and interfaces (clean steam, WFI, compressed gases, electrical, drains) | `<<FILL>>` | Yes / No | `<<FILL>>` |
| Maintainability and access | `<<FILL>>` | Yes / No | `<<FILL>>` |
| Layout, footprint, and personnel/material flow | `<<FILL>>` | Yes / No | `<<FILL>>` |

## 9. Design gaps and deviations

Any requirement not met by the proposed design is recorded here, risk-assessed for impact on product quality and patient safety, and resolved before the DQ conclusion. Resolution is either a design change (preferred) or a documented, QA-approved deviation with justification. A critical (CDE) gap may not be carried as an open deviation into acceptance.

| Gap ID | Requirement affected | Description of gap | Risk rating | Resolution (change / deviation) | Reference |
|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL: URS-ID>>` | `<<FILL>>` | `<<FILL: per risk SOP>>` | `<<FILL>>` | `<<FILL: deviation no.>>` |

Deviations are handled per `<<FILL: deviation SOP-ID>>`. Design changes after this DQ is approved are managed per `<<FILL: change control SOP-ID>>` and may require the affected sections to be re-reviewed.

## 10. Acceptance criteria

The design qualification passes only when all of the following are true:

- Every input in section 5 is approved and current at the time of the review.
- Every requirement in section 6 is addressed in the section 8 design review, with cited evidence and a verdict.
- Every critical design element is identified, traced to a design feature, and assigned a downstream verification, with no open critical gap.
- The supplier assessment conclusion is acceptable, or acceptable with conditions that are recorded and tracked to closure.
- All design gaps are resolved by a design change or a QA-approved deviation; no critical gap is carried open.
- The DQ conclusion in section 11 is supported by the review and signed by Engineering, the user, and QA.

## 11. Conclusion

State whether the proposed design and supplier are accepted for the next stage of the lifecycle.

| Item | Entry |
|---|---|
| Requirements reviewed | `<<FILL: count>>` |
| Critical design elements identified | `<<FILL: count>>` |
| Open gaps at conclusion | `<<FILL: none, or list with deviation reference>>` |
| Supplier assessment conclusion | `<<FILL>>` |
| DQ outcome | Accepted / Accepted with conditions / Not accepted |
| Next stage authorized | `<<FILL: e.g. proceed to FAT / purchase order>>` |

## 12. References

> 21 CFR 211.63 (equipment design, size, and location) and 211.65 (equipment construction).
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision, which describes the URS and design qualification.
> EU GMP Annex 11 (Computerised Systems) and 21 CFR Part 11, where the equipment carries a computerized system.
> ICH Q9 (Quality Risk Management) for the risk basis of critical design element selection.
> ICH Q8(R2) (Pharmaceutical Development) and ICH Q10 (Pharmaceutical Quality System) for the CQA/CPP linkage.
> ASTM E2500 (Standard Guide for Specification, Design, and Verification of Pharmaceutical and Biopharmaceutical Manufacturing Systems and Equipment) for the science- and risk-based approach and critical aspects.
> ISPE Baseline Guide Volume 5 (Commissioning and Qualification) and the GAMP 5 good practice guide for the software-carrying control system.

Confirm the current version and clause numbers of each reference before issue.

## 13. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 14. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Engineering) | `<<FILL>>` | | |
| Process / equipment owner (user) | `<<FILL>>` | | |
| Reviewer (Validation) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

## 15. Attachments

| No. | Attachment |
|---|---|
| 1 | Approved URS |
| 2 | Supplier assessment report and questionnaire |
| 3 | Design documents reviewed (P&ID, GA drawings, datasheets, functional design) |
| 4 | Materials of construction and surface finish certificates |
| 5 | Quality risk assessment |
| 6 | Gap and deviation records |

---

## Filled specimen

The following shows the design review and critical design element sections completed for an example jacketed mixing vessel used to prepare a temperature-sensitive intermediate, so you can see the level of detail an inspector expects. The company, supplier, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Equipment | Jacketed mixing vessel, 500 L, vessel MV-210, with skid-mounted control system |
| Linked URS | URS-MFG-044 v2.0, approved 04 May 2026 |
| Supplier assessment | On-site audit 12 May 2026; ISO 9001 certified; three comparable GMP installations referenced; conclusion: Acceptable |

Working extract of the design review:

| Req. ID | Requirement | Proposed design feature | Design evidence | Meets? |
|---|---|---|---|---|
| URS-001 | Product-contact surfaces 316L, Ra <=0.5 um, electropolished | 316L electropolished, vendor Ra report 0.38 um | MoC cert MC-7741, Ra report RR-7741 | Yes |
| URS-002 | Control product temperature 2 to 8 C, +/- 0.5 C | Glycol jacket, PID loop, dual PT100 probes | Datasheet DS-210, control narrative CN-210 | Yes |
| URS-003 | Fully drainable, no dead legs greater than 3 pipe diameters | Sloped 1:100 to low-point drain valve; dead legs <2D | P&ID PID-210 rev C, slope statement | Yes |
| URS-004 | Audit trail and role-based access per 21 CFR Part 11 | Configurable software with audit trail and three access levels after reconfiguration | Functional design spec FDS-210 rev B | Yes |

Critical design element register (extract):

| CDE ID | Critical design element | Why critical | Design feature | Verified downstream by |
|---|---|---|---|---|
| CDE-01 | Product-contact material and finish | Cleanability and leachables control | 316L EP, Ra 0.38 um | IQ MoC verification + FAT surface check |
| CDE-02 | Temperature control loop | Intermediate degrades above 8 C | Jacket + PID + dual probes | OQ temperature challenge and mapping |
| CDE-03 | Drainability | Cleaning effectiveness, no pooling | Sloped lines, low-point drain | IQ slope check + cleaning validation |
| CDE-04 | Data integrity / access control | Record trustworthiness | Audit trail, role-based access | CSV + OQ |

In this example the review first found that URS-004 was only partially met: the supplied software had an audit trail but the proposed access model used two levels, not the three the URS required to separate operator, supervisor, and administrator. Because this is a critical design element (data integrity), it could not be carried as an open deviation into acceptance. The team logged a design gap, risk-rated it, and required the supplier to reconfigure to three access levels and reissue the functional design spec (FDS-210 rev B) so the change could be reviewed within the DQ. The design review was reopened against the reissued spec, the three-level access was confirmed, and URS-004 was closed to a Yes verdict with no open critical gap. Only then was the DQ concluded as Accepted with conditions, the conditions being non-critical items such as final layout sign-off; the critical access-control gap was resolved by design change before conclusion, not deferred. That sequence, requirement to evidence to verdict to gap to closure before acceptance, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this protocol prevents

- DQ performed against an unapproved or draft URS, so requirements shifted after the review.
- No documented supplier assessment, or an assessment whose depth does not match the criticality of the equipment and its software.
- Critical design elements never identified, so quality- and safety-relevant features were not traced into downstream qualification.
- Design review verdicts recorded with no cited design evidence, so the conclusion cannot be reconstructed.
- A critical gap carried as an open deviation into installation rather than closed by a design change first.
- No traceability from the URS through DQ into FAT/SAT and IQ/OQ/PQ, so an inspector cannot follow a requirement end to end.
- Software-carrying equipment treated as pure hardware, with the control system's data integrity and access controls never assessed at design.
- Design changes made after DQ approval without change control and without re-review of the affected sections.

## How to adapt this protocol

1. Set your document number, owner, linked URS number, and effective date in the header.
2. Replace the example requirements in section 6 with your own URS extract, and mark which are critical design elements based on your process knowledge and risk assessment.
3. Scale the supplier assessment in section 7 to the equipment's criticality and the software it carries; attach the questionnaire or audit report.
4. Complete the section 8 design review against the actual supplier design documents, and build the critical design element register so each CDE is traced to a downstream test.
5. Point the cross-references in sections 2, 9, and 11 to your real deviation, change control, CSV, and downstream qualification procedures.
6. Confirm every regulation in section 12 against the current published version before issue.
