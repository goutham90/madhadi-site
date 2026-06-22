---
title: "Validation Master Plan (VMP)"
description: "A plug-and-play site or program Validation Master Plan covering validation policy, organizational responsibilities, the system inventory and risk-based validation approach, deliverables per GxP category, periodic review, change control, training, and acceptance, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Plan"
pillar: "csv-csa"
relatedArticles: ["validation-master-plan-and-periodic-review", "writing-validation-protocols-and-reports", "validation-deliverables-guide"]
tags: ["validation master plan", "vmp", "csv", "annex 15", "gamp 5", "risk-based", "periodic review"]
tier: "Intermediate"
---

This is a ready-to-use Validation Master Plan. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your system inventory, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

A VMP is a governing document, not a protocol. It states how your organization decides what to validate, to what depth, who is accountable, and how the validated state is kept current. Inspectors read it first to understand your whole approach, then sample individual systems against what it promises. Write only commitments you can show evidence for.

## Document control header

| Field | Entry |
|---|---|
| Document title | Validation Master Plan for `<<FILL: site / program / system scope>>` |
| Document number | `<<FILL: VMP-ID, e.g. VMP-SITE-001>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Validation>>` |
| Scope (sites / areas) | `<<FILL: sites, buildings, departments in scope>>` |
| Review cycle | `<<FILL: e.g. every 2 years, or on significant change>>` |

## 1. Purpose

This plan defines how `<<FILL: COMPANY NAME>>` qualifies equipment and utilities and validates computerized systems, processes, and analytical methods that have a GxP impact, so that each is fit for its intended use and stays in a validated state across its lifecycle. The objective is a single governing reference that tells anyone, including an inspector, what is in scope, how much validation each item gets, who is accountable, and how the validated state is maintained.

## 2. Scope

This plan applies to all systems, equipment, utilities, facilities, processes, and analytical methods with a GxP impact within the scope stated in the header. GxP covers Good Manufacturing Practice, Good Laboratory Practice, Good Clinical Practice, Good Distribution Practice, and Good Pharmacovigilance Practice activities as they apply to `<<FILL: COMPANY NAME>>`.

This plan covers:

- Computerized systems that create, modify, store, or transmit GxP records.
- Process equipment, utilities, and facilities requiring qualification.
- Manufacturing and packaging processes requiring process validation.
- Analytical methods requiring validation or verification.
- Cleaning procedures requiring cleaning validation.

This plan does not replace the individual validation protocols, qualification protocols, or method validation reports it governs. It does not cover items determined to have no GxP impact in section 5, which are managed under good engineering practice or routine business controls only.

## 3. Validation policy

`<<FILL: COMPANY NAME>>` commits to a documented, risk-based, lifecycle approach to validation. The policy statements below are binding on every validation activity in scope:

1. Validation is risk-based. The depth and rigor of validation for any item is proportionate to its GxP risk, determined by patient safety, product quality, and data integrity impact, per ICH Q9 and the GAMP 5 risk-based approach.
2. Validation follows the system lifecycle, from planning and specification, through verification, to operation, periodic review, and retirement. No GxP system enters use without an approved deliverable set, and none is retired without controlled decommissioning.
3. Specifications precede testing. Requirements are defined and approved before they are verified, so that every test traces to a requirement and every critical requirement is tested.
4. The validated state is maintained, not assumed. Change control, periodic review, and ongoing monitoring keep each item validated after release.
5. Records supporting validation follow ALCOA+ data integrity principles and are retained per the records retention schedule.
6. Suppliers are assessed, and supplier activity is reused only to the extent justified by a documented assessment. Reliance on a supplier never removes `<<FILL: COMPANY NAME>>` accountability.

## 4. Responsibilities

| Role | Responsibility |
|---|---|
| Site / executive sponsor | Provides resources, approves this plan, and owns the validation program at the management-review level. |
| Validation lead / function | Authors and maintains this plan, sets the validation approach per item, authors or reviews protocols and reports, and reports validation status to management. |
| System / process owner | Owns the item in use, defines requirements, approves protocols and reports for their item, raises changes, and ensures periodic review happens on schedule. |
| Quality Assurance | Approves this plan and all validation deliverables, owns the deviation and change-control processes, and gives the final disposition that an item is validated and may be used. |
| IT / engineering | Maintains the technical environment, infrastructure qualification, backup and restore, and access controls that the validated state depends on. |
| Subject matter experts (process, QC, automation) | Define and confirm requirements, execute or witness testing, and support risk assessment. |
| Suppliers / integrators | Provide specification, build, and documented testing evidence under assessed quality arrangements. |

Accountability for the validated state cannot be delegated to a supplier. `<<FILL: COMPANY NAME>>` retains it in all cases.

## 5. System inventory and GxP assessment

Every candidate item is entered in the validation inventory and assigned a GxP determination and a risk classification before any validation effort is set. The inventory is a living, controlled document referenced in Attachment 1.

### 5.1 GxP determination

For each item, record whether it has a GxP impact, with the rationale. Non-GxP items are managed under good engineering practice or business controls and are not validated under this plan, but the determination itself is documented and approved.

| Determination | Meaning | Handling |
|---|---|---|
| GxP | Creates, controls, or affects product quality, patient safety, or a GxP record | Validated or qualified under this plan |
| Non-GxP | No impact on product quality, patient safety, or a GxP record | Good engineering practice / business controls; determination documented |

### 5.2 Risk classification

For GxP items, classify risk from the combination of GxP impact and system complexity. For computerized systems, use the GAMP 5 software categories as the starting point and adjust for the process the system controls.

| GAMP 5 software category | Description | Typical validation emphasis |
|---|---|---|
| Category 1 | Infrastructure software (operating systems, databases, network) | Infrastructure qualification; record version; rely on supplier with assessment |
| Category 3 | Non-configured (used as supplied) | Verify fitness for intended use against requirements; supplier testing reused where assessed |
| Category 4 | Configured products | Verify the configuration against requirements; risk-based functional testing of configured GxP functions |
| Category 5 | Custom / bespoke applications | Full lifecycle including design review and code-level controls; highest test rigor |

Map the GxP impact to an overall risk level so that validation effort is proportionate. Spreadsheets used for GxP calculations are assessed individually; a GxP spreadsheet with a formula that affects a result is validated regardless of how simple it appears.

| Overall risk | Examples | Effort principle |
|---|---|---|
| High | System or process directly determines batch disposition, dosing, sterility, or a reported GxP result | Full specification, traceable testing of all critical functions, formal reports |
| Medium | Supports a GxP decision but with downstream human review or secondary control | Risk-based testing of GxP-relevant functions, reduced documentation set |
| Low | GxP record present but low impact, or strong compensating controls | Verification of fitness for use, lean documentation, supplier reuse |

## 6. Validation approach and deliverables by category

The deliverable set scales with risk. The table below is the default. Record any deviation from the default for a specific item, with rationale, in that item's validation plan.

| Deliverable | Low risk | Medium risk | High risk |
|---|---|---|---|
| Item-level validation plan | Optional, may be covered by this VMP | Yes | Yes |
| User / functional requirements specification | Yes (may be lean) | Yes | Yes |
| Risk assessment (per ICH Q9 / GAMP 5) | Yes | Yes | Yes, with critical-function focus |
| Supplier assessment | Yes | Yes | Yes, with audit for Category 5 / critical |
| Design specification / configuration spec | As applicable | Yes for configured / custom | Yes |
| Installation and operational verification (IQ/OQ or equivalent) | Combined / reused supplier testing | Yes | Yes |
| Performance / process qualification (PQ/PPQ) | If process-bearing | Yes | Yes |
| Requirements-to-test traceability | Yes | Yes | Yes |
| Validation / qualification summary report | Yes | Yes | Yes |
| Handover to operation (SOPs, training, backup, access) | Yes | Yes | Yes |

Notes on terminology: CSA, the FDA Computer Software Assurance guidance finalized 24 September 2025, supports a least-burdensome, risk-based mix of testing and assurance activities for production and quality-system software, and is compatible with this risk-based approach. Process validation follows a lifecycle of process design, process qualification, and continued process verification. Analytical methods are validated per ICH Q2(R2) or verified per the compendial chapter, as applicable.

### 6.1 Validation approach by item type

| Item type | Governing standard | Core deliverables |
|---|---|---|
| Computerized system | GAMP 5; EU GMP Annex 11; 21 CFR Part 11 | Requirements, risk assessment, supplier assessment, configuration/design spec, verification (IQ/OQ/PQ as applicable), traceability, summary report |
| Equipment / utility / facility | EU GMP Annex 15; user requirements | URS, DQ, IQ, OQ, PQ as applicable, summary report |
| Manufacturing / packaging process | Process validation lifecycle; EU GMP Annex 15 | Process design, PPQ protocol and report, continued process verification |
| Analytical method | ICH Q2(R2); compendial verification | Validation or verification protocol and report |
| Cleaning procedure | EU GMP Annex 15; HBEL guidance | Cleaning validation protocol and report |

## 7. Periodic review

Each GxP item is periodically reviewed to confirm it remains in a validated state and continues to meet its intended use. Frequency is set by risk and recorded in the inventory.

| Risk level | Default periodic review frequency |
|---|---|
| High | `<<FILL: e.g. annually>>` |
| Medium | `<<FILL: e.g. every 2 years>>` |
| Low | `<<FILL: e.g. every 3 years>>` |

A periodic review confirms, at minimum: validation documentation is current and complete; all changes since the last review were handled under change control; deviations and CAPAs were closed; SOPs, access, and training are current; backup and restore are demonstrable; the supplier and support status is still acceptable; and the risk classification still holds. The outcome is a signed periodic review record with any required actions tracked to closure. Periodic review is governed by `<<FILL: SOP-ID for periodic review>>`.

## 8. Change control

No change is made to a validated item without assessment under change control per `<<FILL: SOP-ID for change control>>`. Each proposed change is assessed for validation impact, the required re-validation or re-qualification is defined and completed, and the item is not returned to GxP use until the change is approved and closed. Emergency changes follow the same controls retrospectively within `<<FILL: number>>` working days. Configuration and software versions are recorded so that the validated baseline is always known.

## 9. Training

Personnel performing validation activities are trained and qualified for the task before they perform it. Training covers this plan, the relevant procedures, GxP and data integrity expectations, and any item-specific requirements. Training records are maintained per `<<FILL: SOP-ID for training>>` and are confirmed during periodic review. Suppliers and contractors performing validation activities work under assessed quality arrangements and documented competence.

## 10. Documentation and records

Validation deliverables are written, reviewed, and approved under document control. Records supporting validation follow ALCOA+ principles, are attributable and contemporaneous, and are retained for not less than `<<FILL: retention period>>` per the records retention schedule. Electronic validation records meet 21 CFR Part 11 and EU GMP Annex 11 expectations for access control, audit trail, and electronic signature where used.

## 11. Deviations

Any departure from this plan, a protocol, or an expected result is documented as a deviation per `<<FILL: SOP-ID for deviation management>>` and assessed for impact before the validated state is accepted. An item is not released for GxP use with open validation deviations that affect fitness for use.

## 12. Acceptance criteria

This plan, and the program it governs, is met when all of the following hold:

- Every GxP item in scope is on the controlled inventory with a documented GxP determination and risk classification.
- Each item has the deliverable set required for its risk level, approved by QA, before GxP use.
- Every critical requirement traces to at least one executed and passed test.
- Periodic reviews are performed on schedule and confirm the validated state.
- All changes since release were handled under change control, and re-validation was completed where the impact assessment required it.
- Validation deviations are documented, assessed, and closed, with no open item affecting fitness for use.

## 13. References

> 21 CFR Part 11 (electronic records and signatures).
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment) and 211.100 (written procedures; deviations, within Production and Process Controls).
> EU GMP Annex 11 (Computerised Systems).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> ISPE GAMP 5, A Risk-Based Approach to Compliant GxP Computerized Systems (second edition).
> ICH Q9 (Quality Risk Management).
> ICH Q10 (Pharmaceutical Quality System).
> ICH Q2(R2) (Validation of Analytical Procedures).
> FDA Guidance, Computer Software Assurance for Production and Quality Management System Software (finalized 24 September 2025).
> FDA Guidance, Process Validation: General Principles and Practices.
> PIC/S PI 011 (Good Practices for Computerised Systems) and PIC/S PI 041 (data integrity).
> USP <1058> (Analytical Instrument Qualification), where laboratory instruments are in scope.

Confirm the current version and clause numbers of each reference before issue.

## 14. Attachments

| No. | Attachment |
|---|---|
| 1 | Validation inventory (controlled list of all in-scope items with GxP determination, risk class, deliverable set, and periodic review frequency) |
| 2 | Risk assessment method / scoring used for classification |
| 3 | Validation deliverable templates referenced (URS, risk assessment, IQ/OQ/PQ, traceability, summary report) |
| 4 | Glossary and abbreviations |

## 15. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 16. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Validation) | `<<FILL>>` | | |
| Reviewer (System / process owner) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |
| Approver (Sponsor / Site Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the inventory and approach section completed for a small site with a mix of system types, so you can see the level of detail an inspector expects. The company, systems, and numbers are illustrative; replace them with your own.

| Item / ID | Type | GxP? | GAMP / risk | Deliverable set | Periodic review |
|---|---|---|---|---|---|
| Chromatography data system, CDS-01 | Computerized | Yes | Cat 4 / High | URS, risk assessment, supplier assessment, config spec, IQ/OQ/PQ, traceability, summary report | Annually |
| Building management system, BMS-02 | Computerized | Yes | Cat 4 / Medium | URS, risk assessment, supplier assessment, config spec, IQ/OQ, traceability, summary report | Every 2 years |
| GxP calculation spreadsheet, SS-014 (yield) | Spreadsheet | Yes | Cat 5 logic / Medium | Requirements, risk assessment, formula/IQ/OQ verification, locked template, summary report | Every 2 years |
| LIMS, LIMS-03 | Computerized | Yes | Cat 4 / High | URS, risk assessment, supplier audit, config spec, IQ/OQ/PQ, traceability, summary report | Annually |
| Network and server infrastructure | Computerized | Yes | Cat 1 / supporting | Infrastructure qualification, version record, backup/restore evidence | Every 3 years |
| Conference-room scheduling tool | Business app | No | Non-GxP | Determination documented only; not validated | n/a |

| Field | Entry |
|---|---|
| Scope | Site `<<FILL>>`, QC laboratory and manufacturing building, all GxP computerized systems |
| Risk method | ICH Q9 plus GAMP 5 software categories, scored in Attachment 2 |
| Highest-effort items | CDS-01 and LIMS-03 (High): full lifecycle, all critical functions traced and tested, supplier audit on file |
| Lowest-effort items | Network infrastructure (Cat 1): qualified once, version-recorded, backup/restore demonstrated |
| Spreadsheet handling | GxP yield spreadsheet validated despite apparent simplicity; template locked, formulas verified, change-controlled |
| Periodic review status | All five GxP items current; CDS-01 reviewed 04/2026, no open actions |

In this example the site did not validate everything to the same depth. It classified each item by GxP impact and complexity, gave the CDS and LIMS the full lifecycle, qualified shared infrastructure once, validated even a simple GxP spreadsheet because its formula affects a reported result, and documented the non-GxP scheduling tool as out of scope rather than ignoring it. That risk-based, fully accounted approach is exactly what an inspector expects a VMP to drive.

Note that the supplier assessment column in the section 6 matrix calls for a supplier assessment at every risk tier, so a vendor-supplied system such as BMS-02 carries one in its deliverable set even at Medium risk. The yield spreadsheet SS-014 is the documented exception: it is built and maintained in-house with no external supplier of the GxP logic, so there is no third party to assess and the spreadsheet itself carries no supplier assessment. Record that rationale in the item's risk assessment. The underlying spreadsheet application is covered separately as Category 1 infrastructure, where reliance on the application vendor is justified by the infrastructure qualification rather than a per-spreadsheet supplier assessment.

## Common inspection findings this VMP prevents

- No master document tying validation activities together, so the program looks ad hoc and the inspector cannot tell what is in scope.
- A validation inventory that is incomplete or out of date, with GxP systems in use that never appear on any list.
- Every system validated to the same depth regardless of risk, wasting effort on low-risk items and under-testing high-risk ones, or the reverse.
- GxP spreadsheets and small configured tools treated as out of scope because they look simple, when their calculations affect results.
- Requirements with no traceability to testing, so the inspector cannot confirm critical functions were verified.
- Supplier testing reused with no documented supplier assessment, and accountability effectively handed to the vendor.
- Systems validated once at go-live with no periodic review, so the validated state is asserted years later with no evidence it still holds.
- Changes made to validated systems without an impact assessment or any re-validation.

## How to adapt this VMP

1. Set your document number, owner, scope, and review cycle in the header.
2. Build your validation inventory in Attachment 1 and assign each item a GxP determination and risk class using your scoring method in Attachment 2.
3. Adjust the deliverable matrix in section 6 to match the protocol and report templates your organization actually uses, and name them in Attachment 3.
4. Set your real periodic review frequencies in section 7 by risk level.
5. Point the cross-references in sections 7, 8, 9, and 11 to your real periodic review, change control, training, and deviation procedures.
6. If your scope includes process validation, method validation, or cleaning validation, confirm the item-type approaches in section 6.1 match the governing protocols you issue.
7. Confirm every regulation in section 13 against the current published version before issue, including the GAMP 5 edition you hold.
