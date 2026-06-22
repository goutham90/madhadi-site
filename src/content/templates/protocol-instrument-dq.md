---
title: "Instrument Design Qualification (DQ) Protocol"
description: "A plug-and-play design qualification protocol for a laboratory instrument: intended use, user requirements, supplier assessment, technical specification selection, fitness-for-purpose verification, acceptance, and approval, with a worked HPLC specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Protocol"
pillar: "equipment-qualification"
relatedArticles: ["analytical-instrument-qualification", "equipment-qualification-lifecycle"]
tags: ["design qualification", "instrument qualification", "protocol", "USP 1058", "GAMP 5", "hplc", "URS"]
tier: "Intermediate"
---

This is a ready-to-use design qualification (DQ) protocol for a laboratory instrument. DQ is the documented check, done before you buy or build, that the instrument you intend to acquire is fit for its intended use and that a supplier capable of supporting it has been selected. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach the user requirements and supplier evidence, and route it through your normal document control, review, and approval. A worked filled specimen for an HPLC follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Design Qualification Protocol for `<<FILL: instrument type, e.g. HPLC system>>` |
| Document number | `<<FILL: PRT-ID, e.g. DQ-LAB-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Laboratory Validation Lead>>` |
| Site / laboratory | `<<FILL: site, building, lab>>` |
| Linked URS | `<<FILL: URS number, e.g. URS-LAB-031>>` |
| Linked IQ/OQ/PQ | `<<FILL: downstream qualification protocol numbers>>` |

## 1. Purpose

This protocol defines how `<<FILL: COMPANY NAME>>` confirms, before purchase, that the proposed `<<FILL: instrument type>>` and its supplier meet the documented user requirements and are fit for the intended use described in section 4. DQ closes the front end of the qualification lifecycle: it links the intended use and user requirements to a specific make and model and a specific supplier, and records the rationale for that selection so that installation, operational, and performance qualification have a defensible starting point.

## 2. Scope

This protocol applies to the single `<<FILL: instrument type / make / model>>` to be installed at the laboratory named in the header, including its instrument control and data system where that software is supplied with the instrument. It covers intended use, user requirements, supplier capability, the technical specification of the proposed model, and the fitness-for-purpose comparison that supports the acceptance decision. It does not cover installation qualification, operational qualification, performance qualification, or computerized system validation of the data system, which are governed by `<<FILL: cross-reference protocol / SOP-IDs>>`. Where the instrument carries software, this DQ records the software category and risk; detailed software validation follows the approach in `<<FILL: CSV / CSA SOP-ID>>`.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Laboratory / process owner (user) | Defines the intended use and the user requirements, confirms fitness for purpose, and uses the instrument after qualification. |
| Validation lead / scientist | Authors this protocol, runs the supplier assessment and specification comparison, records the acceptance rationale, and links DQ to the downstream IQ/OQ/PQ. |
| Procurement | Issues the request to suppliers, confirms commercial terms and supplier status, and retains supplier qualification records. |
| Quality Assurance | Reviews and approves the protocol and the acceptance decision, confirms the supplier is on the approved list or is qualified, and owns deviations. |
| IT / data integrity SME (if instrument carries software) | Confirms the data system supports access control, audit trail, and the electronic records and signatures requirements in scope. |

## 4. Intended use

State the intended use in concrete, testable terms. Vague intended use is the single most common reason a DQ fails to defend a later purchase, because nothing downstream can be traced back to it.

| Item | Entry |
|---|---|
| What the instrument will measure or do | `<<FILL: e.g. quantitate related substances and assay of small-molecule drug products>>` |
| Sample types and matrices | `<<FILL: e.g. aqueous and organic solutions, finished product, in-process>>` |
| Methods to be run | `<<FILL: e.g. compendial and validated in-house RP methods, gradient and isocratic>>` |
| GxP use and data criticality | `<<FILL: GMP release testing / stability / R and D; high / medium / low criticality>>` |
| Regulated records produced | `<<FILL: e.g. chromatograms, integration results, audit trail; subject to 21 CFR Part 11 / Annex 11>>` |
| Expected throughput and lifetime | `<<FILL: e.g. 40 injections/day, 7-10 year service life>>` |
| Environment and utilities | `<<FILL: bench space, power, drainage, temperature/humidity range, gas/solvent supply>>` |

## 5. User requirements

User requirements are the formal, numbered, testable statements the instrument must satisfy. They are the contract DQ checks the proposed model against and the source IQ, OQ, and PQ trace back to. Record them in the linked URS and summarize the critical ones here. Classify each as a regulatory, operational, or performance requirement, and mark each as mandatory (must) or desirable (should), so the acceptance decision is not held hostage by a nice-to-have.

| URS ref | Requirement (testable) | Class | Mandatory? |
|---|---|---|---|
| `<<FILL: URS-001>>` | `<<FILL: e.g. flow rate 0.1 to 5.0 mL/min, accuracy within +/- 2 percent>>` | Performance | Must |
| `<<FILL: URS-002>>` | `<<FILL: e.g. column oven control 5 degrees C above ambient to 80 degrees C, +/- 1 degree C>>` | Performance | Must |
| `<<FILL: URS-003>>` | `<<FILL: e.g. detector wavelength range 190 to 700 nm, baseline noise below stated limit>>` | Performance | Must |
| `<<FILL: URS-004>>` | `<<FILL: e.g. data system enforces unique user IDs, role-based access, and a non-defeatable audit trail>>` | Regulatory | Must |
| `<<FILL: URS-005>>` | `<<FILL: e.g. injector carryover below 0.05 percent for the worst-case analyte>>` | Performance | Must |
| `<<FILL: URS-006>>` | `<<FILL: e.g. footprint within available bench width and existing power supply>>` | Operational | Must |
| `<<FILL: URS-007>>` | `<<FILL: e.g. supplier offers IQ/OQ service and preventive maintenance within the country>>` | Operational | Should |

## 6. Supplier assessment

DQ records that the supplier can deliver and support the instrument over its life, not only sell it. The depth of assessment is risk-based: a low-risk bench instrument from an established vendor may need only a documented review of public information, while a high-risk system or a configured/custom data system warrants a questionnaire or an audit. State the basis for the depth you chose.

### 6.1 Supplier capability record

| Item | Entry |
|---|---|
| Supplier name and site | `<<FILL: supplier, manufacturing site>>` |
| Approved supplier status | `<<FILL: on approved list / newly qualified, reference>>` |
| Assessment depth and basis | `<<FILL: documented review / questionnaire / on-site audit, with risk rationale>>` |
| Quality system / certification | `<<FILL: e.g. ISO 9001 certificate number and expiry; ISO 13485 if applicable>>` |
| Software development practices (if applicable) | `<<FILL: documented SDLC, change control, version control evidence>>` |
| Service and support coverage | `<<FILL: response time, local engineers, spare-parts availability, end-of-life policy>>` |
| Qualification services offered | `<<FILL: vendor IQ/OQ packages, calibration, traceable standards>>` |
| Questionnaire / audit reference | `<<FILL: record number or N/A with justification>>` |

### 6.2 GAMP software category (if instrument carries software)

Record the software category so the validation effort downstream is proportionate. Most analytical instrument control and data software is GAMP Category 4 (configured) or a mix of Category 3 (non-configured/standard) and 4.

| Item | Entry |
|---|---|
| Software supplied | `<<FILL: instrument control / chromatography data system / firmware>>` |
| GAMP category | `<<FILL: 1 infrastructure / 3 non-configured / 4 configured / 5 custom>>` |
| Configuration to be applied | `<<FILL: user roles, calculation methods, system policies>>` |
| Part 11 / Annex 11 features needed | `<<FILL: audit trail, e-signatures, access control, time sync>>` |

## 7. Technical specification selection and fitness-for-purpose comparison

This is the technical heart of DQ. For each user requirement, record the supplier-stated specification of the proposed model and the verdict on whether it meets the requirement. Where you are unsure, do not write "meets"; record "to verify at OQ" and carry it into the OQ protocol so the gap is closed with evidence, not assumed away. Cite the source of each supplier specification (datasheet revision, quotation, or written supplier confirmation) so the comparison is verifiable.

| URS ref | Requirement | Supplier-stated specification (source) | Verdict |
|---|---|---|---|
| `<<FILL: URS-001>>` | `<<FILL: flow 0.1 to 5.0 mL/min, +/- 2 percent>>` | `<<FILL: 0.001 to 10 mL/min, +/- 1 percent (datasheet rev C)>>` | Meets |
| `<<FILL: URS-002>>` | `<<FILL: column oven to 80 C, +/- 1 C>>` | `<<FILL: 4 to 110 C, +/- 0.5 C (datasheet rev C)>>` | Meets |
| `<<FILL: URS-003>>` | `<<FILL: detector 190 to 700 nm>>` | `<<FILL: 190 to 800 nm (datasheet rev C)>>` | Meets |
| `<<FILL: URS-004>>` | `<<FILL: non-defeatable audit trail, role-based access>>` | `<<FILL: supports per supplier compliance statement>>` | Meets, to confirm config at CSV |
| `<<FILL: URS-005>>` | `<<FILL: carryover below 0.05 percent>>` | `<<FILL: not stated on datasheet>>` | To verify at OQ |
| `<<FILL: URS-006>>` | `<<FILL: footprint within bench width>>` | `<<FILL: dimensions per datasheet, confirmed against site drawing>>` | Meets |

For any verdict that is not a clean "Meets", record the disposition in section 8.

## 8. Gaps, risks, and dispositions

List every requirement not cleanly met by the proposed specification, the risk it carries, and how it is handled. A gap is acceptable only with a documented disposition; an unhandled gap blocks acceptance.

| URS ref | Gap or risk | Risk level | Disposition |
|---|---|---|---|
| `<<FILL: URS-005>>` | `<<FILL: carryover not on datasheet>>` | `<<FILL: medium>>` | `<<FILL: verify at OQ against the 0.05 percent limit; do not release for GMP use until passed>>` |
| `<<FILL: URS-004>>` | `<<FILL: audit trail capability stated, configuration not yet proven>>` | `<<FILL: high>>` | `<<FILL: confirm configuration during CSV per the linked CSV/CSA SOP>>` |

## 9. Acceptance criteria

DQ is acceptable, and the purchase and downstream qualification may proceed, only when all of the following are true:

- The intended use (section 4) is stated in concrete, testable terms.
- Every mandatory user requirement is documented, numbered, and testable in the linked URS.
- Every mandatory requirement is either met by the proposed specification or carries a documented disposition that closes the gap downstream, with nothing left unhandled.
- The supplier is on the approved list or has been qualified at a depth justified by risk, with the evidence referenced.
- Where software is supplied, the GAMP category is recorded and the records and signatures features in scope are identified.
- The acceptance decision, with rationale, is recorded and approved by the user and Quality Assurance.

## 10. Acceptance decision

| Field | Entry |
|---|---|
| Proposed instrument (make / model) | `<<FILL>>` |
| Supplier | `<<FILL>>` |
| All mandatory requirements met or dispositioned | Yes / No (if No, do not accept) |
| Open items carried to IQ/OQ/PQ | `<<FILL: list with protocol references>>` |
| Open items carried to CSV | `<<FILL: list or N/A>>` |
| Decision | Accept / Accept with conditions / Reject |
| Rationale | `<<FILL: one or two sentences linking the decision to sections 5 to 8>>` |
| User sign-off (name, signature, date) | `<<FILL>>` |
| QA approval (name, signature, date) | `<<FILL>>` |

## 11. References

> USP <1058> Analytical Instrument Qualification (defines the DQ/IQ/OQ/PQ framework and instrument groups A, B, C).
> 21 CFR 211.63 and 211.68 (equipment design, suitability, and automatic/electronic equipment).
> 21 CFR 211.160(b) (laboratory controls scientifically sound).
> 21 CFR Part 11 (electronic records and signatures), where the data system creates regulated records.
> EU GMP Annex 11 (computerised systems) and Annex 15 (Qualification and Validation), 2015 revision.
> ICH Q9, Quality Risk Management (for the risk-based depth of supplier assessment and qualification).
> ISPE GAMP 5, A Risk-Based Approach to Compliant GxP Computerized Systems (software categories and supplier assessment).
> ISO 9001 (supplier quality management), and ISO 13485 where the instrument supports a medical-device process.

Confirm the current version and clause numbers of each reference before issue.

## 12. Attachments

| No. | Attachment |
|---|---|
| 1 | User requirements specification (URS) |
| 2 | Supplier datasheet(s) with revision, and the quotation or written supplier confirmation of specifications |
| 3 | Supplier quality evidence (certificate, questionnaire, or audit report) |
| 4 | Site readiness check (bench, power, utilities, environment) |
| 5 | Requirements traceability extract linking URS to OQ/PQ tests |

## 13. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 14. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Validation) | `<<FILL>>` | | |
| Reviewer (Laboratory / user) | `<<FILL>>` | | |
| Reviewer (IT / DI, if software) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the requirements, supplier, and specification-comparison sections completed for an example quaternary HPLC system intended for GMP release testing, so you can see the level of detail an inspector expects. The company, supplier, model, and numbers are illustrative; replace them with your own.

**Intended use:** Quantitate assay and related substances of small-molecule drug products by reversed-phase HPLC, running compendial and validated in-house gradient methods, GMP release and stability testing, high data criticality, producing chromatograms and integration results subject to 21 CFR Part 11.

| URS ref | Requirement | Supplier-stated specification (source) | Verdict |
|---|---|---|---|
| URS-001 | Flow 0.1 to 5.0 mL/min, +/- 2 percent | 0.001 to 10 mL/min, +/- 1 percent (datasheet rev C) | Meets |
| URS-002 | Column oven to 80 C, +/- 1 C | 4 to 110 C, +/- 0.5 C (datasheet rev C) | Meets |
| URS-003 | Detector 190 to 700 nm, noise below limit | DAD 190 to 800 nm (datasheet rev C) | Meets |
| URS-004 | Non-defeatable audit trail, unique IDs, role-based access | Supported per supplier Part 11 compliance statement v4 | Meets, configuration to confirm at CSV |
| URS-005 | Injector carryover below 0.05 percent | Not stated on datasheet | To verify at OQ |
| URS-006 | Footprint within 1.2 m bench, existing 230 V supply | 0.9 m wide, 230 V (datasheet rev C, checked vs site drawing SD-LAB-07) | Meets |

| Acceptance field | Entry |
|---|---|
| Proposed instrument | Quaternary HPLC with diode-array detector, Model XYZ-2000 |
| Supplier | Established analytical instrument vendor, on approved supplier list (ASL-0042), ISO 9001 certified |
| Supplier assessment depth | Documented review of public certification plus Part 11 compliance statement; the instrument is a higher-risk USP <1058> Group C class, but that elevated risk was mitigated by the vendor's public ISO 9001 certification, the supplier Part 11 compliance statement, and local service support, so an on-site audit was judged disproportionate (established vendor, supported by local service) |
| GAMP category of data system | Category 4 (configured chromatography data system) |
| All mandatory requirements met or dispositioned | Yes |
| Open items carried to OQ | URS-005 carryover, verify against 0.05 percent limit in OQ-LAB-031 |
| Open items carried to CSV | URS-004 audit-trail and access configuration, confirm in CSV-LAB-031 |
| Decision | Accept with conditions |
| Rationale | All mandatory specifications meet the URS except carryover (not published), which is dispositioned to OQ, and the data-system configuration, dispositioned to CSV; supplier qualified at risk-appropriate depth. |

In this specimen the team wrote a concrete intended use, traced each mandatory requirement to a published specification, refused to write "meets" for the carryover figure the datasheet did not state, and instead carried it forward to OQ as a tracked open item. They classified the data system as GAMP Category 4 so the software effort downstream would be proportionate, and set the supplier-assessment depth from the instrument's risk rather than auditing reflexively. That sequence, intended use to requirements to specification comparison to dispositioned gaps to an approved decision, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this protocol prevents

- An instrument purchased and qualified with no DQ, so no record links the chosen model to a defined intended use or to user requirements.
- User requirements written as marketing statements, not numbered testable criteria, so IQ/OQ/PQ cannot trace back to anything.
- "Meets requirement" recorded against specifications the datasheet never stated, with no verification planned.
- No supplier assessment at all, or an identical full audit applied to every instrument with no risk basis, neither of which an inspector accepts.
- Software supplied with the instrument never categorized, so the data system reaches GMP use without proportionate validation of audit trail, access control, and Part 11 features.
- Gaps spotted at DQ that quietly disappear instead of being carried as tracked open items into OQ, PQ, or CSV.
- DQ approved by the validation author alone, with no user confirmation of fitness for purpose and no QA approval.

## How to adapt this protocol

1. Set your document number, owner, linked URS number, and downstream IQ/OQ/PQ references in the header.
2. Rewrite the intended use in section 4 in concrete, testable terms for your instrument and its actual GxP use and data criticality.
3. Replace the user requirements in section 5 with your real numbered URS items, classified and marked mandatory or desirable, and keep the URS as Attachment 1.
4. Set the supplier-assessment depth in section 6 from the instrument's risk and the USP <1058> group (A, B, or C); record the GAMP software category only if the instrument carries software.
5. Fill the specification comparison in section 7 from the actual datasheet revision and quotation, and carry every non-clean verdict into section 8 with a disposition that points at OQ, PQ, or CSV.
6. Confirm every regulation in section 11 against the current published version before issue.
