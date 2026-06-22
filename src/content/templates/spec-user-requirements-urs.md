---
title: "User Requirements Specification (URS)"
description: "A plug-and-play User Requirements Specification for a GxP computerized system: a requirement table with unique IDs, categories, priority, testable wording, and traceability hooks, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Specification"
pillar: "csv-csa"
relatedArticles: ["user-requirements-and-traceability", "validation-deliverables-guide"]
tags: ["urs", "user requirements", "csv", "csa", "traceability", "gamp 5", "data integrity", "21 cfr part 11"]
tier: "Intermediate"
---

This is a ready-to-use User Requirements Specification. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your process maps and data flow diagrams, and route it through your normal document control, review, and approval. The URS is the foundation document of a computerized system validation: every test, every traceability link, and every supplier commitment traces back to a requirement written here. A worked filled specimen follows the template so you can see how completed requirements read. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | User Requirements Specification for `<<FILL: system name>>` |
| Document number | `<<FILL: URS-ID, e.g. URS-IT-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Process Owner / Business System Owner>>` |
| System / area | `<<FILL: system name, version, site, business process>>` |
| GxP impact | `<<FILL: GxP / non-GxP, per system risk assessment ID>>` |
| Linked documents | `<<FILL: validation plan, functional spec, traceability matrix, supplier assessment IDs>>` |

## 1. Purpose

This specification states what `<<FILL: COMPANY NAME>>` requires the system `<<FILL: system name and version>>` to do, the conditions it must do it under, and the controls it must enforce, so that the system supports the business process `<<FILL: process name>>` while keeping GxP records attributable, complete, and trustworthy. It is written before configuration or build, in business and regulatory language, so that requirements can be tested objectively and traced through design, build, and qualification.

## 2. Scope

This URS covers the functions, data, interfaces, and controls of `<<FILL: system name>>` as used for `<<FILL: business process>>` at `<<FILL: site(s)>>`. It includes the user roles in section 4, the system boundary and integrations in section 5, and the requirement categories in section 7. It does not cover `<<FILL: out-of-scope items, e.g. underlying network infrastructure, end-user desktop builds, or processes handled by SYSTEM-Y>>`, which are governed by `<<FILL: cross-reference IDs>>`. Requirements for a future phase, if any, are listed and marked out of scope in Attachment 3.

## 3. Definitions and conventions

- **User requirement**: a single, testable statement of what the business and regulations need the system to do or enforce, written from the user's point of view, free of a specific technical solution.
- **Requirement ID**: a unique, stable identifier (for example URS-FUNC-012) that never changes once issued; superseded requirements are retired, not renumbered.
- **Category**: the classification used to sort and risk-rank a requirement (regulatory, business, data integrity, security, performance, interface, or environment).
- **Priority**: M (mandatory, the system cannot be accepted without it), S (should-have, important but with a documented workaround), or C (could-have, desirable, deferred if needed). This URS uses the MoSCoW convention.
- **Verification method**: how the requirement will be confirmed, by Test (T), Inspection (I, document or configuration review), Demonstration (D), or Analysis/Review (A).
- **Traceability hook**: the columns that let each requirement be carried forward into the functional specification, the design, and the test cases, and back again, in the traceability matrix `<<FILL: matrix ID>>`.

### 3.1 How to write a testable requirement

Every requirement in section 8 follows these rules, because an untestable requirement cannot pass qualification and is a finding waiting to happen.

1. One requirement per row. Split compound statements ("the system shall log in and report") into separate IDs.
2. Use "shall" for mandatory, "should" for recommended. Never "will", "may", or "could" in a mandatory row.
3. State a measurable outcome or threshold, not a vague quality. Replace "fast", "user-friendly", "as needed" with a number, a list, or a defined condition.
4. Be solution-neutral. State the need (the system shall prevent a result from being changed without a recorded reason), not the build (the system shall use trigger T_AUDIT on table RESULTS).
5. Make it verifiable by one of the methods in 3. If you cannot name how you would test it, rewrite it.
6. Avoid "and/or", "etc.", and "including but not limited to" in the requirement text; these hide untestable scope.

## 4. User roles in scope

| Role | Description | Typical privileges |
|---|---|---|
| `<<FILL: e.g. Operator>>` | `<<FILL>>` | `<<FILL: create / enter data>>` |
| `<<FILL: e.g. Reviewer / Approver>>` | `<<FILL>>` | `<<FILL: review, approve, e-sign>>` |
| `<<FILL: e.g. QA>>` | `<<FILL>>` | `<<FILL: release, audit trail review>>` |
| `<<FILL: e.g. System Administrator>>` | `<<FILL>>` | `<<FILL: user and config management, no data entry>>` |

## 5. System context and boundaries

| Item | Entry |
|---|---|
| Business process supported | `<<FILL: process name and reference to process map, Attachment 1>>` |
| Deployment model | `<<FILL: on-premise / SaaS / hybrid>>` |
| Upstream interfaces (data in) | `<<FILL: source system(s) and data>>` |
| Downstream interfaces (data out) | `<<FILL: target system(s) and data>>` |
| Records the system is the source of truth for | `<<FILL: e.g. batch disposition records>>` |
| Records held elsewhere | `<<FILL: e.g. master data owned by ERP>>` |

A data flow diagram showing every GxP record entering, residing in, and leaving the system is attached as Attachment 2. The boundary defines what this URS is responsible for; anything outside it is an interface requirement, not an internal one.

## 6. Assumptions, constraints, and dependencies

| Type | Statement |
|---|---|
| Assumption | `<<FILL: e.g. qualified infrastructure already exists per IQ-INF-007>>` |
| Constraint | `<<FILL: e.g. must integrate with the existing identity provider for single sign-on>>` |
| Dependency | `<<FILL: e.g. master data migration completed before go-live>>` |
| Regulatory constraint | `<<FILL: e.g. system holds Part 11 electronic records, electronic signatures required>>` |

State these so that a requirement is not later failed for a condition outside the system's control. An assumption that proves false becomes a change, not a silent gap.

## 7. Requirement categories

Each requirement carries exactly one primary category. Categories let the validation team risk-rank, decide test rigor under a risk-based or CSA approach, and confirm that the regulatory and data integrity needs were not forgotten under business pressure.

| Code | Category | Covers |
|---|---|---|
| REG | Regulatory / compliance | 21 CFR Part 11, EU GMP Annex 11, predicate-rule obligations, electronic signatures, records retention |
| BUS | Business / functional | what the process needs the system to do day to day |
| DI | Data integrity | ALCOA+ controls: audit trail, original record protection, true copies, sequencing, contemporaneous capture |
| SEC | Security / access | authentication, authorization, role-based access, password rules, segregation of duties |
| PERF | Performance / capacity | response time, throughput, volume, availability, recovery time |
| INT | Interface / data exchange | inbound and outbound integrations, file formats, field mapping, error handling |
| ENV | Environment / non-functional | backup and restore, archiving, supportability, language, accessibility |

## 8. User requirements table

This is the body of the document. Each row is a single testable requirement. Add rows as needed; never reuse a retired ID. Fill the traceability hook columns at issue where known (functional spec reference) and complete the test case reference column when the protocol is written, so the matrix in `<<FILL: matrix ID>>` can be built without rework.

| Req ID | Category | Requirement (testable "shall" statement) | Priority (M/S/C) | Verification (T/I/D/A) | Acceptance criterion | FS / design ref | Test case ref |
|---|---|---|---|---|---|---|---|
| `<<FILL: URS-REG-001>>` | REG | `<<FILL: The system shall apply a secure, time-stamped, computer-generated audit trail to all create, modify, and delete actions on GxP records, and the audit trail shall not be editable or disableable by any user role.>>` | M | T | `<<FILL: Audit trail entries show old value, new value, user, UTC-referenced timestamp, and reason where required; no role can edit or switch off the trail.>>` | `<<FILL: FS-4.2>>` | `<<FILL: OQ-12>>` |
| `<<FILL: URS-REG-002>>` | REG | `<<FILL: The system shall require an electronic signature, comprising user ID and a second distinct component, for each record approval, and shall record the signed meaning, signer name, date, and time with the signed record.>>` | M | T | `<<FILL: Signature manifestation shows printed name, date/time, and meaning; signature is linked to its record and cannot be copied to another.>>` | `<<FILL: FS-5.1>>` | `<<FILL: OQ-18>>` |
| `<<FILL: URS-DI-001>>` | DI | `<<FILL: The system shall prevent any change to an original result without retaining the original value and capturing a reason for change.>>` | M | T | `<<FILL: Original value remains retrievable; change blocked until a reason is entered; both shown in audit trail.>>` | `<<FILL: FS-4.3>>` | `<<FILL: OQ-13>>` |
| `<<FILL: URS-SEC-001>>` | SEC | `<<FILL: The system shall enforce role-based access so that a user can perform only the actions assigned to their role, and shall prevent the same user from both entering and approving the same record.>>` | M | T | `<<FILL: Operator role cannot approve; approver cannot edit entered data; self-approval blocked.>>` | `<<FILL: FS-6.1>>` | `<<FILL: OQ-21>>` |
| `<<FILL: URS-SEC-002>>` | SEC | `<<FILL: The system shall lock an account after a configurable number of failed login attempts, default five, and require defined password length and complexity.>>` | M | T | `<<FILL: Account locks at the set threshold; password rules enforced at creation and change.>>` | `<<FILL: FS-6.2>>` | `<<FILL: OQ-22>>` |
| `<<FILL: URS-BUS-001>>` | BUS | `<<FILL: The system shall allow a qualified user to record <<process step>> and present it for review and approval before the record is final.>>` | M | T | `<<FILL: Draft can be created, sent for review, and is read-only after approval.>>` | `<<FILL: FS-3.1>>` | `<<FILL: OQ-05>>` |
| `<<FILL: URS-PERF-001>>` | PERF | `<<FILL: The system shall return a saved record on query within 3 seconds for 95 percent of queries with up to <<n>> concurrent users.>>` | S | T | `<<FILL: Measured 95th-percentile response at or below 3 s at the stated concurrency.>>` | `<<FILL: FS-9.1>>` | `<<FILL: PQ-03>>` |
| `<<FILL: URS-INT-001>>` | INT | `<<FILL: The system shall import <<data>> from <<source system>>, reject records that fail the defined field validation, and report each rejection with a traceable reason.>>` | M | T | `<<FILL: Valid records imported intact; invalid records rejected and logged; no silent data loss.>>` | `<<FILL: FS-8.1>>` | `<<FILL: OQ-30>>` |
| `<<FILL: URS-ENV-001>>` | ENV | `<<FILL: The system data and configuration shall be backed up on a defined schedule, and a restore shall recover data and configuration to within the agreed recovery point objective (RPO = <<FILL: e.g. last completed backup / <=15 min of transaction log>>) with the system returned to an operational state within the agreed recovery time objective (RTO = <<FILL: e.g. 4 hours>>).>>` | M | D | `<<FILL: Restore test recovers data and config with data loss no greater than the stated RPO (RPO = <<FILL>>) and the system operational within the stated RTO (RTO = <<FILL>>); both measured and documented in the DR test record.>>` | `<<FILL: FS-10.1>>` | `<<FILL: OQ-40>>` |
| `<<FILL: URS-ENV-002>>` | ENV | `<<FILL: The system shall allow records to be exported as a complete, human-readable true copy with their metadata and audit trail for inspection and retention.>>` | M | I | `<<FILL: Export contains data plus audit trail and metadata; readable without the application; verified against the source record.>>` | `<<FILL: FS-10.2>>` | `<<FILL: OQ-41>>` |

### 8.1 Priority and verification key

- Priority: M = mandatory (acceptance blocked if not met), S = should-have (acceptance possible with a documented and approved workaround), C = could-have (deferrable).
- Verification: T = Test (executed against the running system), I = Inspection (review of a document, export, or configuration), D = Demonstration (observed walk-through), A = Analysis or Review (assessment of design or supplier evidence).
- A mandatory regulatory or data integrity requirement is normally verified by Test or Demonstration, not by Inspection alone, unless the requirement is itself a documentation requirement.

## 9. Traceability

Every requirement ID in section 8 is carried into the requirements traceability matrix `<<FILL: RTM-ID>>`, which links it forward to the functional specification, the configuration or design item, and the executed test case, and back from each test result to the requirement it verifies. No requirement may be closed as met without a passed verification of the named method. Orphan test cases (tests with no requirement) and orphan requirements (requirements with no test) are both findings and are resolved before the validation report is issued. The category and priority columns let the team apply a risk-based or CSA test strategy: deeper, scripted testing for mandatory REG, DI, and SEC requirements, leaner verification for lower-risk BUS, PERF, and ENV items, with the rationale recorded in the validation plan `<<FILL: VP-ID>>`.

## 10. Acceptance criteria for this URS

This URS is acceptable for issue when all of the following are true:

- Every requirement has a unique, stable ID, exactly one category, a priority, a verification method, and a measurable acceptance criterion.
- Every requirement is solution-neutral, uses "shall" for mandatory statements, and reads as testable against the rules in section 3.1.
- The regulatory (REG), data integrity (DI), and security (SEC) categories are populated and reviewed by Quality, not left implicit.
- Scope, boundaries, assumptions, constraints, and dependencies are stated, and out-of-scope items are explicit.
- The document is reviewed by the process owner, Quality, and IT or the technical SME, and approved through document control.

## 11. References

> 21 CFR Part 11 (electronic records and electronic signatures).
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment) where the system is GMP.
> EU GMP Annex 11 (Computerised Systems), sections 4 (validation) and 4.4 (URS).
> FDA Guidance for Industry, Computer Software Assurance for Production and Quality System Software, finalized 24 September 2025.
> FDA General Principles of Software Validation (2002).
> GAMP 5 (ISPE), A Risk-Based Approach to Compliant GxP Computerized Systems, second edition.
> ICH Q9, Quality Risk Management (for risk-based prioritization and test rigor).
> ISO/IEC/IEEE 29148 (requirements engineering) for requirement quality characteristics.
> PIC/S PI 011, Good Practices for Computerised Systems in Regulated GxP Environments.

Confirm the current version and clause numbers of each reference before issue.

## 12. Attachments

| No. | Attachment |
|---|---|
| 1 | Business process map for the supported process |
| 2 | Data flow diagram of all GxP records across the system boundary |
| 3 | Out-of-scope and future-phase requirements |
| 4 | Supplier / SaaS assessment reference (if a configured or off-the-shelf product) |

## 13. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 14. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Process / System Owner) | `<<FILL>>` | | |
| Reviewer (IT / Technical SME) | `<<FILL>>` | | |
| Reviewer (Quality Assurance) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows requirements completed for an example laboratory information management system used for stability sample tracking and result entry, so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

| Req ID | Category | Requirement (testable "shall" statement) | Priority | Verification | Acceptance criterion | FS / design ref | Test case ref |
|---|---|---|---|---|---|---|---|
| URS-REG-001 | REG | The system shall apply a secure, time-stamped, computer-generated audit trail to all create, modify, and delete actions on stability results, and no user role shall be able to edit or disable it. | M | T | Each action logs old value, new value, user ID, UTC-referenced timestamp, and reason where prompted; admin role tested and confirmed unable to edit or switch off the trail. | FS-4.2 | OQ-12 |
| URS-REG-002 | REG | The system shall require an electronic signature of two distinct components for result approval and shall display the signer name, date, time, and meaning of signing on the signed record. | M | T | Signature manifestation shows "Approved by J. Lee, 14 May 2026 10:32 EDT, meaning: result approved"; signature bound to that result only. | FS-5.1 | OQ-18 |
| URS-DI-002 | DI | The system shall block deletion of a stability result and shall instead require it to be voided with a recorded reason, retaining the original value. | M | T | Delete unavailable; void requires a reason; original value remains visible in the audit trail. | FS-4.4 | OQ-15 |
| URS-SEC-001 | SEC | The system shall prevent the user who entered a result from approving that same result. | M | T | Analyst account that entered result STB-2026-0451 is blocked from approving it; second qualified user required. | FS-6.1 | OQ-21 |
| URS-INT-001 | INT | The system shall receive sample pull dates from the stability scheduler nightly, reject any record missing a study ID or pull date, and log each rejection with a reason. | M | T | 200 valid records imported intact; 3 records missing study ID rejected and listed in the import error report; no records silently dropped. | FS-8.1 | OQ-30 |
| URS-PERF-001 | PERF | The system shall display a result query within 3 seconds for 95 percent of queries with up to 50 concurrent users. | S | T | Load test at 50 users showed 95th-percentile query time of 2.4 seconds. | FS-9.1 | PQ-03 |
| URS-ENV-002 | ENV | The system shall export a stability result as a true copy including its metadata and audit trail in a human-readable format for inspection. | M | I | PDF export of STB-2026-0451 contains the result, all metadata, and the full audit trail; reconciled against the on-screen record with no difference. | FS-10.2 | OQ-41 |

In this example the team wrote one testable requirement per row, gave each a stable ID and a single category, set priority so the regulatory and data integrity rows are mandatory and Test-verified, and pre-linked each requirement to its functional spec and test case. When the OQ ran, OQ-21 proved the entering analyst could not self-approve, OQ-30 proved bad imports were rejected rather than silently lost, and OQ-41 proved a true-copy export. Each passed test closed its requirement in the matrix, with no orphan requirements and no orphan tests. That chain, requirement to design to test to result, is exactly what a reviewer is expected to see.

## Common inspection findings this specification prevents

- A computerized system in GxP use with no URS, so there is nothing the validation could have been tested against.
- Requirements written as wishes ("user-friendly", "fast", "as needed") that cannot be tested and were never objectively verified.
- Data integrity and Part 11 controls (audit trail, e-signature, original-record protection, segregation of duties) absent from the URS and bolted on later, or assumed rather than required.
- A traceability matrix with orphan requirements that were never tested, or orphan tests that trace to nothing.
- Requirement IDs renumbered or reused between versions, breaking traceability across the lifecycle.
- The URS describing the vendor's build ("uses trigger T_AUDIT") instead of the need, so the document cannot survive a system upgrade or replacement.
- Acceptance based on a demo with no recorded acceptance criterion, so "it works" was never defined.

## How to adapt this specification

1. Set your document number, owner, GxP impact, and effective date in the header, and link your validation plan and traceability matrix IDs.
2. Replace the user roles, system context, and data flow in sections 4 and 5 with your real process map and integration list, and attach them.
3. Build out the section 8 table with your real requirements: keep one per row, one category each, a measurable acceptance criterion, and a "shall" statement that passes the section 3.1 rules. Delete the example rows once yours are written.
4. For a configured or SaaS product, add a supplier assessment reference (Attachment 4) and decide which requirements are verified by reviewing supplier evidence (method A or I) versus tested in your environment (method T).
5. Apply a risk-based or CSA strategy: scripted testing for mandatory REG, DI, and SEC requirements, leaner verification for lower-risk items, with the rationale in your validation plan.
6. Confirm every regulation in section 11 against the current published version before issue.
