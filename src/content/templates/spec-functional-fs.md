---
title: "Functional Specification (FS)"
description: "A plug-and-play Functional Specification that states how a GxP computerized system meets each user requirement: functions, interfaces, data, security model, and calculations, each mapped to its URS ID, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Specification"
pillar: "csv-csa"
relatedArticles: ["user-requirements-and-traceability", "validation-deliverables-guide"]
tags: ["functional specification", "csv", "csa", "traceability", "gamp 5", "data integrity", "21 cfr part 11", "design"]
tier: "Intermediate"
---

This is a ready-to-use Functional Specification. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your screen designs, data model, and interface specifications, and route it through your normal document control, review, and approval. The FS is the answer document: for every requirement in the User Requirements Specification, it states how the system, as configured or built, actually does the job. It sits between the URS (what is needed) and the design or configuration specification (how it is built in detail), and it is what the OQ tests against. A worked filled specimen follows the template so you can see how completed functional statements read. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Functional Specification for `<<FILL: system name and version>>` |
| Document number | `<<FILL: FS-ID, e.g. FS-IT-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. System Owner / Technical Lead>>` |
| System / area | `<<FILL: system name, version, site, business process>>` |
| GxP impact | `<<FILL: GxP / non-GxP, per system risk assessment ID>>` |
| Parent URS | `<<FILL: URS-ID and version this FS answers>>` |
| Linked documents | `<<FILL: validation plan, configuration/design spec, traceability matrix, supplier docs, OQ protocol IDs>>` |

## 1. Purpose

This specification states how the system `<<FILL: system name and version>>`, as configured or built by `<<FILL: COMPANY NAME>>` and the supplier `<<FILL: supplier name>>`, meets each requirement in the parent URS `<<FILL: URS-ID>>`. For every user requirement it describes the function, the interface, the data, the security control, or the calculation that satisfies it, in enough detail that the requirement can be tested objectively in operational qualification. It is written after the URS is approved and before, or alongside, detailed design, so the functions can be reviewed for fitness and traced both ways.

## 2. Scope

This FS covers the functional behavior of `<<FILL: system name>>` as used for `<<FILL: business process>>` at `<<FILL: site(s)>>`, answering every in-scope requirement in URS `<<FILL: URS-ID>>`. It includes the functions in section 6, the interfaces in section 7, the data and record model in section 8, the security and access model in section 9, and the calculations in section 10. It does not specify infrastructure build, network architecture, or low-level code or table design, which sit in `<<FILL: design/configuration spec ID, or IT infrastructure qualification ID>>`. Where a requirement is met by a standard, unmodified product feature, it is identified as such (an off-the-shelf function), so test effort can be set accordingly under a risk-based or CSA approach.

## 3. Definitions and conventions

- **Functional specification**: a document that states what the system does to meet each requirement, in terms of observable behavior, not internal code or table structure.
- **Function ID**: a unique, stable identifier (for example FS-FUNC-012) that never changes once issued; superseded functions are retired, not renumbered.
- **Implementation type**: how the requirement is met, classified as COTS (standard product feature, unmodified), CONFIG (delivered by configuration of a standard product, no code change), or CUSTOM (bespoke code, script, macro, or report). This drives test rigor.
- **Trace to URS**: the column that links each function back to the requirement ID it satisfies, so the traceability matrix `<<FILL: matrix ID>>` can be built without rework.
- **Expected result**: the observable, testable outcome a function produces, written so the OQ can confirm it without interpretation.

### 3.1 How to write a functional statement

Every function in section 6 follows these rules, because a vague functional statement cannot be tested and breaks the trace from requirement to qualification.

1. State observable behavior, not internal mechanism. Say what the user or interface sees and what the record shows, not which table or trigger fires.
2. One function per row where practical. Split compound behavior into separate IDs so each can pass or fail on its own.
3. Make the expected result measurable and unambiguous, so the OQ author can write a test from it without guessing.
4. Name the implementation type (COTS, CONFIG, CUSTOM) for every function, because a custom function and an unmodified standard feature do not warrant the same test depth.
5. Carry the URS ID for every function. A function that traces to no requirement is either scope creep or a missing requirement, and both are findings.
6. Do not introduce new requirements in the FS. If a need surfaces that the URS does not cover, route it back to the URS as a change, then answer it here.

## 4. System overview and architecture

| Item | Entry |
|---|---|
| System name and version | `<<FILL>>` |
| Supplier and product | `<<FILL: vendor, product, edition>>` |
| Deployment model | `<<FILL: on-premise / SaaS / hybrid>>` |
| Application tier(s) | `<<FILL: presentation, application, database; or SaaS service description>>` |
| Hosting / infrastructure reference | `<<FILL: IQ-INF-ID or SaaS service description and qualification>>` |
| Client access | `<<FILL: thick client / browser and supported versions>>` |
| Time source | `<<FILL: synchronized to an authoritative time source; record of clock control>>` |

A context diagram showing the system, its users, and its interfaces is attached as Attachment 1. This section orients the reader; it does not by itself meet a requirement.

## 5. Operational environment and assumptions

| Type | Statement |
|---|---|
| Assumption | `<<FILL: e.g. infrastructure qualified per IQ-INF-007 before OQ>>` |
| Constraint | `<<FILL: e.g. authentication delegated to the corporate identity provider>>` |
| Dependency | `<<FILL: e.g. master data loaded before functional testing>>` |
| Configuration baseline | `<<FILL: configuration spec / settings record ID that this FS assumes>>` |

State these so a function is not later failed for a condition outside the system's control. A function described against an assumption that proves false becomes a change, not a silent gap.

## 6. Functional requirements (how the system meets each URS function)

This is the body of the document. Each row states one function, how it behaves, the URS requirement it answers, its implementation type, and the observable expected result the OQ will confirm. Add rows as needed; never reuse a retired ID. Fill the test case reference when the OQ protocol is written so the matrix in `<<FILL: matrix ID>>` is complete.

| Function ID | Trace to URS | Function description (what the system does) | Type (COTS/CONFIG/CUSTOM) | Expected result (testable) | Test case ref |
|---|---|---|---|---|---|
| `<<FILL: FS-FUNC-001>>` | `<<FILL: URS-BUS-001>>` | `<<FILL: A qualified user creates a draft <<record type>>, enters the required fields, and submits it for review; the record is read-only after approval.>>` | `<<FILL: CONFIG>>` | `<<FILL: Draft created, submitted, approved; record becomes read-only and cannot be edited post-approval.>>` | `<<FILL: OQ-05>>` |
| `<<FILL: FS-FUNC-002>>` | `<<FILL: URS-REG-001>>` | `<<FILL: Every create, modify, and delete on a GxP record writes a secure, time-stamped audit trail entry that no role can edit or disable.>>` | `<<FILL: COTS>>` | `<<FILL: Audit trail shows old value, new value, user ID, timestamp, and reason where prompted; admin role confirmed unable to edit or switch off the trail.>>` | `<<FILL: OQ-12>>` |
| `<<FILL: FS-FUNC-003>>` | `<<FILL: URS-DI-001>>` | `<<FILL: Changing an original result retains the original value and requires a reason for change before the change is committed.>>` | `<<FILL: CONFIG>>` | `<<FILL: Change blocked until a reason is entered; original value remains retrievable; both shown in the audit trail.>>` | `<<FILL: OQ-13>>` |
| `<<FILL: FS-FUNC-004>>` | `<<FILL: URS-REG-002>>` | `<<FILL: Record approval requires an electronic signature of two distinct components and records the signer name, date, time, and meaning of signing.>>` | `<<FILL: COTS>>` | `<<FILL: Signature manifestation shows printed name, date/time, and meaning; signature bound to its record and not transferable.>>` | `<<FILL: OQ-18>>` |
| `<<FILL: FS-FUNC-005>>` | `<<FILL: URS-SEC-001>>` | `<<FILL: The system prevents the user who entered a record from approving that same record.>>` | `<<FILL: CONFIG>>` | `<<FILL: The entering user is blocked from approving the same record; a second qualified user is required.>>` | `<<FILL: OQ-21>>` |
| `<<FILL: FS-FUNC-006>>` | `<<FILL: URS-ENV-002>>` | `<<FILL: The system exports a record as a complete, human-readable true copy with its metadata and audit trail.>>` | `<<FILL: COTS>>` | `<<FILL: Export contains data, metadata, and full audit trail; readable without the application; reconciled to source with no difference.>>` | `<<FILL: OQ-41>>` |
| `<<FILL: FS-FUNC-007>>` | `<<FILL: URS-PERF-001>>` | `<<FILL: A saved record is returned on query within the agreed response time at the stated concurrency.>>` | `<<FILL: COTS>>` | `<<FILL: 95th-percentile query time at or below the URS threshold at the stated number of concurrent users.>>` | `<<FILL: PQ-03>>` |

### 6.1 Implementation type and test rigor

- COTS: a standard, unmodified product feature; supplier evidence may reduce the depth of replicated testing, but high-risk regulatory and data integrity behavior is still confirmed in your environment.
- CONFIG: behavior delivered by configuring a standard product; tested as configured, against the configuration baseline in section 5.
- CUSTOM: bespoke code, scripts, macros, or reports; carries the most test scrutiny and a source/design reference, because nobody outside has tested it.
- Set the test strategy per implementation type and per the requirement's category and priority in the URS, and record the rationale in the validation plan `<<FILL: VP-ID>>`, consistent with a risk-based or CSA approach.

## 7. Interface specification (data in and data out)

For every interface, state the direction, the data exchanged, the trigger and frequency, the format, the field mapping, and the error handling, and trace it to the URS interface requirement. Silent data loss at an interface is a classic data integrity failure, so error handling is mandatory, not optional.

| Interface ID | Trace to URS | Direction | Partner system | Data exchanged | Trigger / frequency | Format / protocol | Field mapping ref | Error handling | Test case ref |
|---|---|---|---|---|---|---|---|---|---|
| `<<FILL: FS-INT-001>>` | `<<FILL: URS-INT-001>>` | `<<FILL: Inbound>>` | `<<FILL: source system>>` | `<<FILL: data>>` | `<<FILL: nightly / on event>>` | `<<FILL: API / flat file / HL7>>` | `<<FILL: Attachment 3>>` | `<<FILL: reject and log invalid records; no silent drop; reconciliation count>>` | `<<FILL: OQ-30>>` |
| `<<FILL: FS-INT-002>>` | `<<FILL: URS-INT-002>>` | `<<FILL: Outbound>>` | `<<FILL: target system>>` | `<<FILL: data>>` | `<<FILL: on approval>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: retry, alert on failure, no partial send accepted as complete>>` | `<<FILL: OQ-31>>` |

| Item | Entry |
|---|---|
| Reconciliation control | `<<FILL: how completeness is confirmed, e.g. record counts and checksums per transfer>>` |
| Failure alerting | `<<FILL: who is alerted, how, and the recovery action>>` |
| Interface audit / log | `<<FILL: where interface activity is logged and retained>>` |

## 8. Data and record model

State what records the system holds, which are GxP, who owns each, and how original records and their metadata are protected. This section answers the URS data and data integrity requirements at the record level.

| Item | Entry |
|---|---|
| GxP records held | `<<FILL: list of record types, e.g. results, batch records, approvals>>` |
| Records the system is source of truth for | `<<FILL>>` |
| Master data and its owner | `<<FILL: e.g. material master owned by ERP, consumed read-only>>` |
| Metadata captured with each record | `<<FILL: user, timestamp, instrument/source, version, status>>` |
| Original record protection | `<<FILL: how the original is retained on change, e.g. versioning, no hard delete>>` |
| Record states and transitions | `<<FILL: e.g. draft -> in review -> approved -> superseded/voided, and who can move each>>` |
| Data retention and archival | `<<FILL: retention period, archive trigger, readability of archived records>>` |
| Backup and restore | `<<FILL: schedule, RPO/RTO, where restore is demonstrated>>` |

A logical data model or record map is attached as Attachment 2. State explicitly that no GxP record can be hard-deleted and that voids and supersessions retain the original; this is what an inspector looks for here.

## 9. Security and access model

State authentication, the role-to-privilege mapping, segregation of duties, and account controls, and trace each to the URS security requirements. The role matrix is the heart of this section: it shows that a user can do only what their role allows, and that the same person cannot both enter and approve the same record.

| Item | Entry |
|---|---|
| Authentication method | `<<FILL: local accounts / SSO via identity provider / MFA>>` |
| Password / credential rules | `<<FILL: length, complexity, expiry, reuse history, lockout threshold>>` |
| Account lifecycle | `<<FILL: how accounts are requested, approved, disabled on leaver, reviewed periodically>>` |
| Session controls | `<<FILL: inactivity timeout, re-authentication for signing>>` |
| Audit of security events | `<<FILL: logon, failed logon, privilege change logged and reviewable>>` |

### 9.1 Role-to-privilege matrix

| Role | Trace to URS | Create / enter | Review / approve (e-sign) | Configure / admin | Audit trail review | Self-approval blocked |
|---|---|---|---|---|---|---|
| `<<FILL: Operator>>` | `<<FILL: URS-SEC-001>>` | Yes | No | No | No | n/a |
| `<<FILL: Reviewer/Approver>>` | `<<FILL: URS-SEC-001>>` | No | Yes | No | No | Yes |
| `<<FILL: QA>>` | `<<FILL: URS-SEC-001>>` | No | `<<FILL>>` | No | Yes | Yes |
| `<<FILL: Administrator>>` | `<<FILL: URS-SEC-003>>` | No | No | Yes | No | n/a |

Convention for the "Self-approval blocked" column: enter "Yes" only for a role that can approve but is blocked from approving a record it entered; enter "n/a" for any role that has no approval rights, since self-approval cannot arise for it.

Segregation of duties is enforced so that no single role both enters and approves the same record, and the administrator role has no data entry or approval rights. State whether these privileges are enforced by the application (preferred) or by procedure, because a procedural-only control is weaker and an inspector will probe it.

## 10. Calculations

For every GxP-relevant calculation, state the requirement it serves, the exact formula, the inputs and their sources and units, the rounding and significant-figures rule, the order of operations, the limits or pass/fail decision, and a worked example. An unspecified calculation is untestable, and an unstated rounding rule is a common cause of result disputes in an inspection.

| Calculation ID | Trace to URS | Description | Formula | Inputs (source, units) | Rounding / sig figs | Decision / limit | Worked example | Test case ref |
|---|---|---|---|---|---|---|---|---|
| `<<FILL: FS-CALC-001>>` | `<<FILL: URS-BUS-004>>` | `<<FILL: percent of label claim>>` | `<<FILL: (measured / label) x 100>>` | `<<FILL: measured (assay, mg), label (mg)>>` | `<<FILL: 1 decimal place, round half up>>` | `<<FILL: pass if 95.0 to 105.0 percent>>` | `<<FILL: (98.4 / 100) x 100 = 98.4 percent -> pass>>` | `<<FILL: OQ-50>>` |
| `<<FILL: FS-CALC-002>>` | `<<FILL: URS-BUS-005>>` | `<<FILL: result vs specification flag>>` | `<<FILL: compare result to lower and upper limit>>` | `<<FILL: result, spec limits from method master>>` | `<<FILL: compare at reported precision>>` | `<<FILL: OOS flag if outside limits>>` | `<<FILL: result 106.1 percent > 105.0 -> OOS flagged>>` | `<<FILL: OQ-51>>` |

| Item | Entry |
|---|---|
| Calculation governance | `<<FILL: where formulas, limits, and rounding are defined and version-controlled (method master, config); how a change to a formula is controlled>>` |
| Independent verification | `<<FILL: how each calculation is verified against a manual or independent recalculation in OQ>>` |
| Rounding convention (global) | `<<FILL: one stated convention applied everywhere, e.g. round half up at the final step only, no intermediate rounding>>` |

State one global rounding convention and apply it everywhere; round only at the final reported step unless a method dictates otherwise. Verify each calculation in OQ against an independent recalculation, not against the system's own output.

## 11. Traceability

Every function (section 6), interface (section 7), security role (section 9), and calculation (section 10) carries the URS requirement ID it satisfies. These IDs are carried into the requirements traceability matrix `<<FILL: RTM-ID>>`, which links each URS requirement forward to its FS function, to the configuration or design item, and to the executed test case, and back from each test result to the requirement it verifies. Every mandatory URS requirement must trace to at least one FS element, and every FS element must trace to a URS requirement. A function that traces to no requirement is scope creep or a missing requirement; a requirement with no function is an unmet requirement. Both are findings and are resolved before the FS is approved, so the design review and the later validation report can both stand.

## 12. Acceptance criteria for this FS

This FS is acceptable for issue when all of the following are true:

- Every in-scope URS requirement traces to at least one function, interface, security element, or calculation in this FS.
- Every FS function, interface, security role, and calculation traces back to a URS requirement; there is no orphan function.
- Each function has a stable ID, an implementation type, and a measurable, testable expected result.
- Interfaces define error handling and reconciliation; no interface relies on silent acceptance of partial or invalid data.
- The data model states original-record protection and the absence of hard delete for GxP records; the role matrix enforces segregation of duties.
- Every GxP calculation states its formula, inputs, units, rounding rule, decision/limit, and a worked example.
- The document is reviewed by the system owner, Quality, and the technical SME or supplier, and approved through document control.

## 13. References

> 21 CFR Part 11 (electronic records and electronic signatures).
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment) where the system is GMP.
> EU GMP Annex 11 (Computerised Systems), sections 4 (validation), 5 (data), 7 (data storage), 12 (security), and 13 (incident management).
> FDA Guidance for Industry, Computer Software Assurance for Production and Quality System Software, finalized 24 September 2025.
> FDA General Principles of Software Validation (2002).
> GAMP 5 (ISPE), A Risk-Based Approach to Compliant GxP Computerized Systems, second edition (for the FS within the specification and verification model and for software categories).
> ISO/IEC/IEEE 29148 (requirements engineering) and IEC 62304 (medical device software lifecycle, where the system is or is in a device).
> ICH Q9, Quality Risk Management (for risk-based test rigor).
> PIC/S PI 011, Good Practices for Computerised Systems in Regulated GxP Environments.

Confirm the current version and clause numbers of each reference before issue.

## 14. Attachments

| No. | Attachment |
|---|---|
| 1 | System context / architecture diagram |
| 2 | Logical data model or record map |
| 3 | Interface field-mapping specifications |
| 4 | Screen designs / wireframes (where relevant) |
| 5 | Configuration baseline or settings record reference |
| 6 | Supplier documentation referenced for COTS functions |

## 15. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 16. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (System Owner / Technical Lead) | `<<FILL>>` | | |
| Reviewer (Process Owner) | `<<FILL>>` | | |
| Reviewer (Quality Assurance) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows functions, an interface, the role matrix, and a calculation completed for an example laboratory information management system used for stability sample tracking and result entry, answering the same parent URS used in the User Requirements Specification example. The company, system, and numbers are illustrative; replace them with your own.

### Functions

| Function ID | Trace to URS | Function description | Type | Expected result | Test case ref |
|---|---|---|---|---|---|
| FS-FUNC-002 | URS-REG-001 | Every create, modify, and delete on a stability result writes a secure, time-stamped audit trail entry; no role can edit or disable it. | COTS | Each action logs old value, new value, user ID, UTC-referenced timestamp, and reason where prompted; admin account tested and confirmed unable to edit or switch off the trail. | OQ-12 |
| FS-FUNC-003 | URS-DI-002 | Deleting a stability result is not available; the result must be voided with a recorded reason, retaining the original value. | CONFIG | Delete control absent; void requires a reason; original value remains visible in the audit trail. | OQ-15 |
| FS-FUNC-004 | URS-REG-002 | Result approval requires an electronic signature of two distinct components and records the signer name, date, time, and meaning. | COTS | Manifestation shows "Approved by J. Lee, 14 May 2026 10:32 EDT, meaning: result approved"; signature bound to that result only. | OQ-18 |
| FS-FUNC-005 | URS-SEC-001 | The analyst who entered a result cannot approve that same result. | CONFIG | Analyst account that entered result STB-2026-0451 is blocked from approving it; a second qualified user is required. | OQ-21 |

### Interface

| Interface ID | Trace to URS | Direction | Partner system | Data exchanged | Trigger | Format | Error handling | Test case ref |
|---|---|---|---|---|---|---|---|---|
| FS-INT-001 | URS-INT-001 | Inbound | Stability scheduler | Sample pull dates and study IDs | Nightly batch | Delimited flat file | Records missing a study ID or pull date are rejected and listed in an import error report; record counts reconciled; no silent drop. | OQ-30 |

In the OQ, 200 valid records imported intact and reconciled by count, while 3 records missing a study ID were rejected and appeared in the import error report rather than being silently lost.

### Role-to-privilege matrix

| Role | Trace to URS | Create / enter | Review / approve (e-sign) | Configure / admin | Audit trail review | Self-approval blocked |
|---|---|---|---|---|---|---|
| Analyst | URS-SEC-001 | Yes | No | No | No | n/a |
| Lab Reviewer | URS-SEC-001 | No | Yes | No | No | Yes |
| QA | URS-SEC-001 | No | No | No | Yes | n/a |
| LIMS Administrator | URS-SEC-003 | No | No | Yes | No | n/a |

In OQ-21 the analyst who entered result STB-2026-0451 was confirmed unable to approve it, and the administrator account was confirmed to have no data entry or approval rights, proving segregation of duties is enforced by the application and not only by procedure.

### Calculation

| Calculation ID | Trace to URS | Description | Formula | Inputs | Rounding | Decision | Worked example | Test case ref |
|---|---|---|---|---|---|---|---|---|
| FS-CALC-001 | URS-BUS-004 | Assay percent of label claim | (measured mg / label mg) x 100 | measured = result from instrument import; label = 100 mg from method master | 1 decimal place, round half up, final step only | Pass if 95.0 to 105.0 percent | (98.4 / 100) x 100 = 98.4 percent, within 95.0 to 105.0, pass | OQ-50 |

In OQ-50 the team entered a known measured value, let the system calculate, and compared the system result to an independent manual recalculation; both gave 98.4 percent at one decimal place, confirming the formula and the rounding rule.

In this example every FS element carries the URS ID it answers, names its implementation type so test depth is justified, and states an observable expected result the OQ confirmed. FS-FUNC-002 answered the audit trail requirement, FS-INT-001 proved bad imports were rejected rather than lost, the role matrix proved self-approval was blocked, and FS-CALC-001 was verified against an independent recalculation. Each passed test closed its requirement in the matrix, with no orphan function and no orphan requirement. That chain, requirement to function to test to result, is exactly what a reviewer is expected to see.

## Common inspection findings this specification prevents

- A system validated against a URS with no FS in between, so there is no documented statement of how each requirement is actually met and the OQ tests trace to nothing.
- FS functions that introduce behavior the URS never asked for (scope creep) or, worse, URS requirements with no function answering them (unmet requirements not noticed until the OQ).
- Functional statements written as mechanism ("trigger T_AUDIT updates table RESULTS") instead of observable behavior, so the FS cannot survive a version upgrade and the test author cannot write an objective test.
- No implementation type recorded, so a custom report and an unmodified standard feature were tested at the same shallow depth, or COTS evidence was accepted with no confirmation of high-risk behavior in the real environment.
- An interface with no defined error handling, so invalid or partial data was accepted silently and a data integrity gap went unseen.
- A data model that allows hard deletion of GxP records, or voids that do not retain the original value.
- A role matrix that does not enforce segregation of duties, or where self-approval is blocked only by procedure and not by the application.
- A GxP calculation with no stated rounding rule, no worked example, and verification done against the system's own output rather than an independent recalculation.

## How to adapt this specification

1. Set your document number, owner, GxP impact, and effective date in the header, and link your parent URS, configuration or design spec, and traceability matrix IDs.
2. Replace the architecture, environment, and data model in sections 4, 5, and 8 with your real system and attach the context and data diagrams.
3. Build out section 6 so that every in-scope URS requirement is answered by at least one function with an implementation type and a testable expected result; delete the example rows once yours are written.
4. Specify each interface in section 7 with its direction, data, format, field mapping, and error handling, and attach the mapping in Attachment 3.
5. Complete the role matrix in section 9 to enforce segregation of duties, and state for each control whether it is enforced by the application or by procedure.
6. Fill section 10 with every GxP calculation: exact formula, inputs and units, one global rounding rule, the decision or limit, and a worked example; plan to verify each against an independent recalculation in OQ.
7. Set the test strategy per implementation type and per the URS category and priority, and record the rationale in your validation plan, consistent with a risk-based or CSA approach.
8. Confirm every regulation in section 13 against the current published version before issue.
