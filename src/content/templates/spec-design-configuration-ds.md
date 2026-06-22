---
title: "Design and Configuration Specification (DS)"
description: "A plug-and-play Design and Configuration Specification for a GxP computerized system: architecture, every configurable item with its set value, custom code, infrastructure, security and role configuration, all mapped to the functional spec and under change control, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Specification"
pillar: "csv-csa"
relatedArticles: ["user-requirements-and-traceability", "validation-deliverables-guide"]
tags: ["design specification", "configuration specification", "csv", "csa", "gamp 5", "21 cfr part 11", "traceability", "change control"]
tier: "Advanced"
---

This is a ready-to-use Design and Configuration Specification. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your architecture diagrams and code repositories, and route it through your normal document control, review, and approval. The DS is where the functional spec stops describing what the system must do and starts recording exactly how it is built and set: the architecture, the as-configured value of every configurable item, the custom code, the infrastructure it runs on, and the security and role model. It is the document an installation and configuration test reads against, and the document an inspector reads to see that the live system matches what was approved. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Design and Configuration Specification for `<<FILL: system name>>` |
| Document number | `<<FILL: DS-ID, e.g. DS-IT-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. System Owner / Technical Lead>>` |
| System / area | `<<FILL: system name, software version, site, business process>>` |
| GAMP software category | `<<FILL: 3 / 4 / 5, per GAMP 5 categorization>>` |
| GxP impact | `<<FILL: GxP / non-GxP, per system risk assessment ID>>` |
| Linked documents | `<<FILL: URS ID, FS ID, traceability matrix ID, IQ/OQ protocol IDs, supplier assessment ID>>` |

## 1. Purpose

This specification records how the system `<<FILL: system name and version>>` is designed, configured, coded, and deployed to meet the functions defined in functional specification `<<FILL: FS-ID>>`, which in turn satisfies user requirements specification `<<FILL: URS-ID>>`. It captures the as-built architecture, the exact value set for every configurable item, any custom code, the infrastructure platform, and the security and role configuration. The objective is a single approved baseline that the installation and configuration verification tests against, that change control protects, and that an inspector can compare against the live system to confirm the two still match.

## 2. Scope

This DS covers the design and as-configured state of `<<FILL: system name>>` as deployed for `<<FILL: business process>>` at `<<FILL: site(s)>>`. It includes the architecture in section 5, the configuration items in section 6, the custom code in section 7, the infrastructure in section 8, and the security and role configuration in section 9. It does not cover `<<FILL: out-of-scope items, e.g. the underlying corporate network, the virtualization host, or processes handled by SYSTEM-Y>>`, which are governed by `<<FILL: cross-reference IDs>>`. Where a configuration item is owned and qualified by a separate platform or supplier, it is referenced here, not redefined.

## 3. Definitions and conventions

- **Configurable item**: a setting, parameter, workflow step, template, calculation, report, or limit that is changed through the application's intended configuration interface, without altering source code.
- **Custom code**: any script, macro, formula, stored procedure, custom report, calculated field, integration interface, or bespoke component written or modified for this implementation, beyond the supplier's standard, configurable product.
- **Configuration baseline**: the complete, approved set of values in section 6 that defines the validated state. Any change to a value in the baseline goes through change control.
- **GAMP category**: the GAMP 5 software classification (3 standard, 4 configured, 5 custom) that sets the rigor of design documentation and testing. A category 4 system is configured; a category 5 system contains custom code and needs design and code review of that code.
- **As-built / as-configured**: the actual state of the deployed system at the effective date, not the intended or default state.

Each design element and configuration item carries a unique, stable ID (for example DS-CONF-012) and a trace to the functional specification item it satisfies. IDs are never reused; superseded items are retired, not renumbered.

## 4. Responsibilities

| Role | Responsibility |
|---|---|
| System owner / technical lead | Authors this DS, records the as-configured baseline, owns the architecture, and keeps the DS current under change control. |
| Process owner / business SME | Confirms that the configured workflows, templates, calculations, and reports match the business intent in the FS. |
| Developer (for custom code) | Writes custom code to an approved design, supports code review, and documents version and repository location. |
| Independent reviewer | Performs design review and, for custom code, code review against the requirement and against secure-coding practice. |
| IT / infrastructure | Confirms the infrastructure, environments, time synchronization, backup, and platform qualification referenced in section 8. |
| Security administrator | Confirms the role model, privilege assignments, password and lockout policy, and electronic-signature configuration in section 9. |
| Quality Assurance | Reviews and approves the DS, confirms traceability and change control, and owns the validated-state disposition. |

## 5. System architecture

Describe the system as deployed: the tiers, the components, the data stores, the interfaces, and the boundary. Attach the architecture diagram and the data flow diagram. State the GAMP category and the rationale, because it sets how much of sections 6, 7, and 9 you must document and test.

| Item | Entry |
|---|---|
| Architecture pattern | `<<FILL: e.g. three-tier client/server, web application, thick client, cloud SaaS>>` |
| Application tier | `<<FILL: application server, version, count>>` |
| Database tier | `<<FILL: database engine and version, instance/schema name>>` |
| Client / presentation tier | `<<FILL: browser + version range, or thick-client build>>` |
| Hosting model | `<<FILL: on-premise / private cloud / vendor SaaS, with supplier qualification reference>>` |
| External interfaces | `<<FILL: list each interface, direction, protocol, and the systems connected>>` |
| Data stores in GxP scope | `<<FILL: databases, file shares, audit-trail store>>` |
| System boundary | `<<FILL: what is in scope vs governed elsewhere, reference the diagram>>` |
| Architecture diagram reference | `<<FILL: Attachment 1>>` |
| Data flow diagram reference | `<<FILL: Attachment 2>>` |

State the GAMP category here and justify it: a configured product with no bespoke code is category 4; the moment a calculated field, custom report, macro, or interface is written, the relevant component is category 5 and section 7 applies.

## 6. Configuration items (the as-configured baseline)

This is the heart of the DS. List every configurable item that affects GxP function, data integrity, security, or a regulated calculation, and record its exact set value. Do not write "as per vendor default"; record the value. Group by configuration area so the installation and configuration verification can step through it. Every safety-, data-, or decision-relevant item traces to a functional specification item and will be verified in the configuration test.

| DS-ID | Configuration area | Item / parameter | Set value (as configured) | Traces to FS | Verified in (OQ ref) |
|---|---|---|---|---|---|
| `<<FILL: DS-CONF-001>>` | Audit trail | Audit trail enabled, scope, and edit-protection | `<<FILL: Enabled for all GxP record types; users cannot disable; reason-for-change mandatory on critical fields>>` | `<<FILL: FS-012>>` | `<<FILL: OQ-018>>` |
| `<<FILL: DS-CONF-002>>` | Security | Password minimum length / complexity | `<<FILL: e.g. 8 chars, 3 of 4 character classes>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: DS-CONF-003>>` | Security | Inactivity auto-logoff timeout | `<<FILL: e.g. 15 minutes>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: DS-CONF-004>>` | Security | Failed-login lockout threshold and duration | `<<FILL: e.g. 5 attempts, 30-minute lockout>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: DS-CONF-005>>` | Electronic signature | Signature meaning, two-component challenge, manifestation | `<<FILL: e.g. user ID + password; signed/approved meanings; name, date/time, meaning shown on record>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: DS-CONF-006>>` | Workflow | Approval routing and required steps | `<<FILL: e.g. author -> reviewer -> QA approve; no self-approval; mandatory steps>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: DS-CONF-007>>` | Calculation | Configured calculation or formula and its rounding | `<<FILL: state the exact formula and rounding rule>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: DS-CONF-008>>` | Limits / specifications | Configured limits, ranges, or alarm thresholds | `<<FILL: state values and units>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: DS-CONF-009>>` | Templates / master data | Controlled templates, master lists, lookup tables | `<<FILL: identify each by name/version>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: DS-CONF-010>>` | Date / time | System time zone, date format, NTP source | `<<FILL: e.g. UTC stored, local displayed; ISO 8601; synced to NTP source>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: DS-CONF-011>>` | Data retention | Record retention, archive, and purge configuration | `<<FILL: retention period; purge disabled or controlled>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: DS-CONF-012>>` | Reports | Configured GxP reports and their content | `<<FILL: report name, fields, version>>` | `<<FILL>>` | `<<FILL>>` |

State the source of record for the baseline: the table above is authoritative; if a configuration-export file is the operational record, name it and its location, and reconcile it to this table at each change. Do not let an undocumented live setting drift away from the approved value.

## 7. Custom code

If the system is GAMP category 4 with no bespoke code, state that explicitly and mark this section "Not applicable, no custom code." If any custom code exists (a calculated field, a macro, a custom report, a stored procedure, an integration interface, a script), each component is listed and is subject to design and code review. Standard, unmodified supplier product is not custom code.

| DS-ID | Component | Purpose / requirement met | Language / type | Repository and version | Design review ref | Code review ref | Unit test ref |
|---|---|---|---|---|---|---|---|
| `<<FILL: DS-CODE-001>>` | `<<FILL: e.g. potency calculation script>>` | `<<FILL: FS item satisfied>>` | `<<FILL: e.g. SQL stored procedure>>` | `<<FILL: repo path, commit/tag>>` | `<<FILL: review record>>` | `<<FILL: review record>>` | `<<FILL: test record>>` |
| `<<FILL: DS-CODE-002>>` | `<<FILL: e.g. inbound LIMS interface>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

Code-review notes to capture for each component: that the code meets the stated requirement, that error and exception handling is present, that there is no hard-coded credential, that inputs are validated, and that the version under review is the version deployed. Source is version-controlled; the deployed binary or script traces to a specific repository tag.

## 8. Infrastructure and environments

Record the platform the application runs on and the environments used, so the installation verification has something to confirm against and so the validated-state baseline includes the stack, not just the application.

| Item | Entry |
|---|---|
| Operating system(s) and version | `<<FILL>>` |
| Application server / middleware and version | `<<FILL>>` |
| Database engine and version | `<<FILL>>` |
| Virtualization / cloud platform | `<<FILL: host or cloud service, with qualification reference>>` |
| Environments | `<<FILL: development, validation/test, production, with separation stated>>` |
| Migration path to production | `<<FILL: how a configuration moves from test to production under control>>` |
| Time synchronization | `<<FILL: NTP source, all components synced>>` |
| Backup and restore | `<<FILL: schedule, scope, restore tested, reference to backup SOP-ID>>` |
| Disaster recovery / high availability | `<<FILL: RTO/RPO, failover, reference to DR plan ID>>` |
| Infrastructure qualification reference | `<<FILL: IQ record or platform qualification ID>>` |

Where the platform is a qualified shared service (for example a qualified hosting platform or a database service under its own IQ), reference that qualification rather than re-qualifying it here, and confirm the application's reliance on it is in scope.

## 9. Security and role configuration

Record the access-control model exactly as configured: the roles, the privileges each role holds, the separation between conflicting duties, and the application-level controls that satisfy 21 CFR Part 11 and EU GMP Annex 11. This section is read directly by the access-control test.

### 9.1 Role-to-privilege model

| Role | Key privileges | Cannot do (separation of duties) | Approval to grant |
|---|---|---|---|
| `<<FILL: e.g. Operator>>` | `<<FILL: enter and edit own data>>` | `<<FILL: cannot approve, cannot change config>>` | `<<FILL: approver role>>` |
| `<<FILL: e.g. Reviewer/QA>>` | `<<FILL: review, approve, e-sign>>` | `<<FILL: cannot author the record being approved>>` | `<<FILL>>` |
| `<<FILL: e.g. Administrator>>` | `<<FILL: manage users, config>>` | `<<FILL: cannot enter or approve GxP data; admin actions audit-trailed>>` | `<<FILL>>` |

### 9.2 Application-level security configuration

| Item | Set value |
|---|---|
| Unique user IDs, no shared/generic accounts | `<<FILL: enforced; list any exception with justification>>` |
| Password policy (length, complexity, history, expiry) | `<<FILL>>` |
| Account lockout and reactivation | `<<FILL>>` |
| Inactivity timeout | `<<FILL>>` |
| Electronic-signature link to record and two-component check | `<<FILL>>` |
| Administrator actions audit-trailed | `<<FILL: enabled>>` |
| Periodic access review configured / supported | `<<FILL: reference to access-review SOP-ID>>` |

State whether administrators can edit GxP data or audit trails; the answer should be no, and where the product cannot fully prevent it, the procedural control and its monitoring are stated.

## 10. Traceability

Every configuration item, every custom-code component, and every security setting in this DS traces upward to a functional specification item (and through it to a user requirement) and downward to the qualification test that verifies it. The traceability matrix `<<FILL: matrix ID>>` is the authoritative cross-reference; the per-row "Traces to FS" and "Verified in" columns above are the working trace. No GxP-relevant configuration item exists in the live system without an entry here, and no entry here is left unverified.

## 11. Change control

This DS is the configuration baseline. After approval, any change to the architecture, a configuration value, custom code, the infrastructure stack, or the security model is made through change control per `<<FILL: change control SOP-ID>>`. The change record states the item, the old value, the new value, the reason, the impact and regression assessment, the re-test performed, and the DS version updated. The DS is reissued so its as-configured state always matches production. A live setting that differs from the approved DS value, with no change record, is a finding.

## 12. Acceptance criteria

This DS is acceptable for use when all of the following are true:

- The architecture and GAMP category are stated, justified, and consistent with the FS.
- Every GxP-relevant configurable item is listed with its exact set value, not a "default" reference, and traces to an FS item and a verification test.
- All custom code is identified, version-controlled, and has design and code review records, or the section is justified as not applicable.
- The infrastructure stack and environments are recorded, with platform qualification referenced.
- The role-to-privilege model and Part 11 / Annex 11 security settings are recorded, with separation of duties shown.
- The document is traceable, under change control, reviewed, signed, dated, and approved.

## 13. References

> 21 CFR Part 11 (electronic records and signatures).
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment).
> EU GMP Annex 11 (Computerised Systems).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> ISPE GAMP 5, A Risk-Based Approach to Compliant GxP Computerized Systems (2nd edition).
> FDA Guidance, Computer Software Assurance for Production and Quality System Software (finalized 24 September 2025).
> PIC/S PI 011, Good Practices for Computerised Systems in Regulated GxP Environments.
> ICH Q9, Quality Risk Management.
> IEC 62304 (medical device software lifecycle), where the system is or contains a medical device.
> 21 CFR Part 820 (QMSR), effective 2 February 2026, incorporating ISO 13485:2016 by reference, where applicable.

Confirm the current version and clause numbers of each reference before issue.

## 14. Attachments

| No. | Attachment |
|---|---|
| 1 | System architecture diagram |
| 2 | Data flow diagram |
| 3 | Configuration export / settings file (operational record, reconciled to section 6) |
| 4 | Custom code design and code-review records |
| 5 | Infrastructure / platform qualification references |
| 6 | Role-to-privilege matrix (full) |

## 15. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 16. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (System Owner / Technical Lead) | `<<FILL>>` | | |
| Reviewer (Process Owner) | `<<FILL>>` | | |
| Reviewer (IT / Security) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the configuration, custom-code, and security sections completed for an example laboratory information management system, so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| System | Laboratory Information Management System, version 9.4, on-premise three-tier |
| GAMP category | Category 5: configured product plus one custom potency-calculation stored procedure and one inbound instrument interface |
| Architecture | Three-tier: web app on two load-balanced application servers (Linux), database on a clustered SQL instance, browser clients; one inbound interface from the balance system, one outbound to the document management system |

Configuration baseline (extract):

| DS-ID | Area | Item | Set value | Traces to FS | Verified in |
|---|---|---|---|---|---|
| DS-CONF-001 | Audit trail | Audit trail | Enabled for all sample, result, and specification records; users cannot disable; reason-for-change mandatory on results and specifications | FS-012 | OQ-018 |
| DS-CONF-003 | Security | Inactivity auto-logoff | 15 minutes | FS-031 | OQ-024 |
| DS-CONF-004 | Security | Failed-login lockout | 5 attempts, 30-minute lockout, admin reactivation with reason | FS-032 | OQ-025 |
| DS-CONF-007 | Calculation | Potency result rounding | Reported to 1 decimal place, round-half-up, raw value retained | FS-040 | OQ-031 |
| DS-CONF-010 | Date / time | Time configuration | UTC stored, local time displayed, ISO 8601 format, synced to site NTP source | FS-014 | OQ-019 |

Custom code:

| DS-ID | Component | Language | Repository / version | Code review |
|---|---|---|---|---|
| DS-CODE-001 | Potency calculation stored procedure | SQL | repo/lims-custom, tag v1.2.0 | CR-2026-0077: requirement met, no hard-coded values, inputs validated, deployed version matches tag |
| DS-CODE-002 | Inbound balance interface | Python service | repo/lims-iface, tag v0.9.4 | CR-2026-0078: error handling and reconciliation confirmed |

Security model:

| Role | Key privileges | Cannot do |
|---|---|---|
| Analyst | Enter and edit own results before submission | Cannot approve results, cannot change specifications or config |
| QC Reviewer | Review and approve results, electronic signature | Cannot author the result being approved |
| Administrator | Manage users and configuration | Cannot enter or approve GxP data; all admin actions audit-trailed |

In this example the team recorded the real timeout value rather than "vendor default," traced each setting to an FS item and an OQ test, treated the one calculation script and the one interface as category 5 with full code review, and showed that an administrator cannot approve data and a reviewer cannot approve their own result. That is exactly the configuration evidence a reviewer is expected to see, and it is what the installation and configuration verification reads against.

## Common inspection findings this specification prevents

- Configuration values recorded as "as per vendor default" with no actual value, so no one can tell what the validated state is or whether production still matches it.
- The live system holds settings that differ from the approved specification, with no change record explaining the difference.
- Custom code (a calculated field, a macro, a custom report, an interface) present in production but not identified, with no design or code review, so the system is treated as configured-only when it is actually custom.
- An audit-trail, timeout, lockout, or signature setting claimed as "configured" with no value recorded and nothing for the qualification test to verify.
- No traceability from a configuration item to the requirement it satisfies or the test that verified it.
- Administrators able to enter or approve GxP data, or to edit the audit trail, with no segregation of duties and no compensating control.
- The infrastructure stack and environments left undocumented, so the validated state covers the application but not the platform it depends on.

## How to adapt this specification

1. Set your document number, owner, GAMP category, and effective date in the header, and link the URS, FS, and traceability matrix.
2. Replace the architecture in section 5 with your real tiers, interfaces, hosting model, and diagrams, and justify your GAMP category.
3. Record the exact as-configured value of every GxP-relevant item in section 6; remove the example rows that do not apply and add the configuration areas your product actually has.
4. If you have no custom code, mark section 7 not applicable with a justification; if you do, list every component with its repository, version, and review records.
5. Fill the infrastructure and environments in section 8, and reference platform qualification rather than re-qualifying a shared service.
6. Build the role-to-privilege model in section 9 from your actual roles and confirm separation of duties and the Part 11 / Annex 11 settings.
7. Point the cross-references in sections 8 and 11 to your real backup, DR, and change control procedures.
8. Confirm every regulation in section 13 against the current published version before issue.
