---
title: "Configuration Management and Baseline Standard"
description: "A plug-and-play configuration management standard for GxP computerized systems: the configuration item register, how to set and approve a baseline, version control, the link to change control, drift detection, periodic baseline verification, and roles, with a filled specimen of a baseline record and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Specification"
pillar: "csv-csa"
relatedArticles: ["it-change-and-configuration-management-gxp", "infrastructure-qualification-and-spreadsheet-validation"]
tags: ["configuration management", "baseline", "version control", "change control", "csv", "csa", "drift detection", "gamp 5"]
tier: "Advanced"
---

This is a ready-to-use configuration management standard. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your configuration item register and tool references, and route it through your normal document control, review, and approval. Configuration management is the discipline that keeps the validated state of a system knowable: it records every part of the system that affects GxP function or data integrity, fixes those parts at an approved value (the baseline), controls how that value changes, and detects when the live system has quietly drifted away from what was approved. A worked filled specimen of a baseline record follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Configuration Management and Baseline Standard |
| Document number | `<<FILL: STD-ID, e.g. STD-IT-009>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of IT Quality / Validation>>` |
| Applies to | `<<FILL: sites, system classes, and platforms in scope>>` |
| Linked documents | `<<FILL: change control SOP-ID, CSV plan ID, periodic review SOP-ID, backup SOP-ID>>` |

## 1. Purpose

This standard defines how `<<FILL: COMPANY NAME>>` identifies, records, baselines, version-controls, and verifies the configuration of GxP computerized systems and their infrastructure. The objective is that the validated state of every in-scope system is documented, that any change to that state is deliberate and controlled, and that the live system can be shown, at any time, to match its approved baseline. Configuration management is what lets you answer, on the day of an inspection, the single question an inspector returns to: is the system today still the system you validated, and how do you know.

## 2. Scope

This standard applies to all GxP computerized systems and the infrastructure they depend on at the sites listed in the header, across the full lifecycle from initial baseline at release to retirement. In scope are applications, their as-configured settings, custom code, databases and schemas, operating systems and middleware, network and security configuration that bears on the validated state, and qualified infrastructure platforms. It works alongside change control, which authorizes changes, and periodic review, which confirms ongoing control. It does not replace either. Out of scope are non-GxP systems and `<<FILL: any platform governed elsewhere, e.g. the corporate end-user device fleet>>`, governed by `<<FILL: cross-reference IDs>>`.

## 3. Definitions

- **Configuration item (CI)**: any component whose state must be controlled because a change to it could affect GxP function, a regulated calculation, data integrity, or security. A CI can be a piece of software, a setting, a script, a database, a server, a document, or an interface.
- **Configuration item register (CMDB)**: the controlled list of all CIs, their attributes, their relationships, and their current approved version. The single source of truth for what makes up each system.
- **Baseline**: a formally reviewed and approved snapshot of the configuration of a system, or part of a system, at a point in time, that thereafter serves as the reference for development, build, qualification, and change. The validated baseline is the baseline that the qualification evidence was produced against.
- **Version control**: the controlled recording of successive versions of a CI such that any prior version can be identified and, where it is code or documents, retrieved unchanged.
- **Drift**: a difference between the live configuration of a system and its approved baseline that arose without a change record. Drift is, by definition, uncontrolled change.
- **Drift detection**: the activity, manual or tool-based, that compares the live configuration to the baseline and surfaces drift.
- **Baseline verification**: a periodic confirmation that the live configuration still matches the approved baseline, or that every difference is explained by an approved change.

## 4. Responsibilities

| Role | Responsibility |
|---|---|
| System owner | Owns the system's baseline, ensures every GxP-relevant CI is in the register, approves baselines and re-baselines, and owns the response to detected drift. |
| Configuration manager / CM coordinator | Maintains the configuration item register, runs or schedules drift detection and baseline verification, and reconciles change records to the register. |
| IT / infrastructure | Records and version-controls infrastructure CIs (OS, middleware, database, virtualization), and supports automated baseline capture where tools exist. |
| Developer (for custom code) | Holds source code under version control, tags released versions, and links the deployed build to a specific tag. |
| Change control board / change owner | Authorizes changes that alter a baseline and ensures the register and baseline are updated as part of change closure. |
| Quality Assurance | Approves this standard and the baselines, reviews drift investigations and re-baselines, and confirms configuration control at periodic review and at release. |

## 5. Configuration item identification

### 5.1 What to put under configuration management

A CI is anything whose uncontrolled change could break the validated state. Identify CIs at the level you can actually control and verify, not so coarse that a change hides inside a CI, and not so fine that the register is unmanageable. As a default, place the following under control for each system:

| CI category | Typical configuration items |
|---|---|
| Application | The application software and its version; the as-configured baseline (the approved set of settings); configured workflows, templates, calculations, limits, and reports. |
| Custom code | Scripts, macros, calculated fields, stored procedures, custom reports, integration interfaces, with repository and tag. |
| Data structures | Database schema version, controlled master data and lookup tables, audit-trail configuration. |
| Infrastructure | Operating system and patch level, middleware and application-server version, database engine version, virtualization or cloud platform and its qualification reference, time-synchronization source. |
| Security | Role-to-privilege model, password and lockout policy, electronic-signature configuration, named service accounts. |
| Documentation | The controlled documents that define the validated state: URS, FS, design and configuration specification, qualification protocols and reports, the baseline record itself. |

### 5.2 The configuration item register

Every CI is recorded in the register with a stable, unique ID that is never reused. The register is the authoritative inventory; if a CI is not in it, it is not under control.

| Field | Content |
|---|---|
| CI ID | `<<FILL: stable unique ID, e.g. CI-LIMS-DB-001>>` |
| CI name and description | `<<FILL>>` |
| CI category | `<<FILL: application / custom code / data / infrastructure / security / documentation>>` |
| System / parent | `<<FILL: the system this CI belongs to>>` |
| Current approved version | `<<FILL: version or tag>>` |
| GxP relevance | `<<FILL: GxP / supporting / non-GxP, per system risk assessment>>` |
| CI owner | `<<FILL: role>>` |
| Source of record / location | `<<FILL: where the controlled instance lives, e.g. repo path, config export, server>>` |
| Relationships / dependencies | `<<FILL: CIs this depends on or is depended on by>>` |
| Linked change records | `<<FILL: change IDs that touched this CI>>` |

State the source of record for the register: `<<FILL: a validated configuration management database, OR a controlled spreadsheet under document control if no CMDB tool is used>>`. If the register itself is a spreadsheet, it is itself a CI and is version-controlled and access-restricted.

## 6. Baselines

### 6.1 When a baseline is set

A baseline is established at defined points so that there is always a known, approved reference. At minimum:

| Baseline | When set | Purpose |
|---|---|---|
| Initial / release baseline | At first release to production, after qualification | Records the validated state at go-live; this is the validated baseline. |
| Change baseline | At closure of any change that alters a CI | Records the new approved state after a controlled change. |
| Periodic re-confirmation | At each periodic review, if unchanged | Confirms the baseline still represents the live system. |
| Major re-baseline | At an upgrade, migration, or revalidation | Establishes a new validated baseline; the prior one is retired, not deleted. |

### 6.2 What a baseline contains

A baseline is a complete snapshot, not a summary. It records the exact version of every CI that makes up the system at that point, captured so it can be reproduced or compared against later. A baseline record (section 11) carries, at a minimum: the baseline ID and date, the system and its release, every CI and its version, the change records that moved the system to this state since the last baseline, the evidence the baseline was captured from a real system, and the approval. Do not record "current version" loosely; record the actual version string, tag, or configuration export reference for each CI.

### 6.3 How a baseline is approved

The system owner reviews the baseline record for completeness and correctness, confirms it reconciles to the change records since the prior baseline, and confirms it was captured from the live system, not from intent or from a design document. Quality Assurance approves. Once approved, the baseline is frozen: it is a controlled record and is not edited. A subsequent change produces a new baseline; it does not amend an approved one.

## 7. Version control

### 7.1 Principles

Every CI carries a version. Versions advance only through controlled change, never silently. A prior version is always identifiable, and where the CI is source code or a controlled document, the exact prior version is retrievable, unchanged. Two systems with the same baseline ID must be the same system. The deployed instance of a coded CI traces to a specific repository tag, and the tag is what was reviewed and tested.

### 7.2 Version control by CI type

| CI type | Version control mechanism |
|---|---|
| Source code, scripts, custom reports | `<<FILL: version control system, e.g. a Git repository>>` with tagged releases; deployed build traces to the tag. |
| As-configured settings | Versioned configuration export plus the approved design and configuration specification version; each setting change is a new specification version under change control. |
| Database schema | Schema version recorded; schema changes are scripted, version-controlled, and applied through the controlled migration path. |
| Documents | The document control system; superseded versions retired and retrievable. |
| Infrastructure | Build version, patch level, and image or template version recorded; environments rebuilt from version-controlled definitions where infrastructure-as-code is used. |

State the versioning convention once and apply it everywhere: `<<FILL: e.g. semantic versioning MAJOR.MINOR.PATCH for code; date-based versioning for configuration exports>>`. Numbers are not reused; a superseded version is retired, not overwritten.

## 8. Link to change control

Configuration management and change control are two halves of one control. Change control decides whether a change is allowed and assesses its impact; configuration management records the before and after state and keeps the register and baseline current. They are joined by an explicit rule: no CI changes in production except through an approved change record, and no change record closes until the configuration item register and, where the change altered the validated state, the baseline are updated.

For every change that alters a CI, the change record states the CI ID, the old version or value, the new version or value, the qualification or regression testing performed, and the new baseline ID produced. At change closure, the configuration manager reconciles the change to the register, advances the CI version, and the system owner confirms the updated baseline. A change that is approved but never reflected in the register, or a register entry that advanced with no change record behind it, are both findings: the first means the record is stale, the second means the change was uncontrolled. Cross-reference: change control SOP `<<FILL: change control SOP-ID>>`.

## 9. Drift detection

Drift is uncontrolled change: a live setting, file, version, or privilege that differs from the approved baseline with no change record to explain it. Drift is detected, not assumed absent.

### 9.1 How drift is detected

| Method | Use |
|---|---|
| Automated configuration comparison | Where a tool can export and diff the live configuration against the baseline (settings, file integrity, OS and package versions, privilege assignments). Preferred for breadth and frequency. |
| Scheduled manual verification | Where no tool exists: a documented comparison of defined critical settings against the baseline record. |
| Event-triggered check | After any unplanned event that could change configuration: an emergency fix, a vendor patch, a restore from backup, a failover. |

### 9.2 Frequency by risk

Set drift-detection frequency from the GxP criticality of the system. Document the basis for each system in the register.

| System criticality | Default drift-detection frequency |
|---|---|
| High (release, batch disposition, sterility, primary GxP data) | Continuous or `<<FILL: e.g. weekly>>` automated comparison |
| Medium (supporting GxP function) | `<<FILL: e.g. monthly>>` |
| Low (indirect or non-decision) | At periodic review |

### 9.3 Responding to detected drift

Any detected difference is one of two things, and you must determine which:

1. An authorized change that was not reflected in the register or baseline. Correct the record: update the register and baseline, and close the gap that let the record fall behind.
2. An unauthorized or unexplained change. Open a deviation per `<<FILL: deviation SOP-ID>>`, assess impact on data and product made while the system was off-baseline, restore the approved configuration or formally accept and re-baseline the new state through change control, and address the access or process gap that allowed the change.

Do not silently re-baseline drift. Re-baselining an unexplained difference without an investigation hides an integrity problem; the difference must be explained before the new state is accepted.

## 10. Periodic baseline verification

At a defined interval, and as part of periodic system review, confirm that the live configuration still matches the approved baseline or that every difference traces to an approved change. This is the planned, documented backstop to continuous drift detection.

| Item | Entry |
|---|---|
| Verification frequency | `<<FILL: e.g. annually for high-criticality, aligned to periodic review cycle>>` |
| Verification method | `<<FILL: automated diff against baseline / documented manual comparison of critical settings>>` |
| Scope each cycle | All GxP-relevant CIs, or a risk-based defined subset with rationale |
| Reconciliation | Every difference matched to a change record; unmatched differences raised per section 9.3 |
| Output | A signed verification record; result feeds the periodic review report |
| Re-baseline if needed | If the system has changed through approved changes, confirm the current baseline reflects them; if not, re-baseline |

A periodic review that asserts "configuration unchanged" without an actual comparison against the baseline is an assertion, not evidence, and inspectors treat it as such. Cross-reference: periodic review SOP `<<FILL: periodic review SOP-ID>>`.

## 11. Record generated: baseline record

This is the controlled record produced when a baseline is set. Complete one per baseline event.

| Field | Entry |
|---|---|
| Baseline ID | `<<FILL: BL-ID, e.g. BL-LIMS-2026-002>>` |
| System and release | `<<FILL: system name and version/release>>` |
| Baseline type | Initial / Change / Periodic re-confirmation / Major re-baseline |
| Baseline date | `<<FILL: date captured>>` |
| Supersedes baseline | `<<FILL: prior baseline ID or "New">>` |
| Captured from | `<<FILL: production / validation environment; capture method or tool>>` |
| Change records since last baseline | `<<FILL: list of change IDs, or "none">>` |
| Configuration items and versions | `<<FILL: each CI ID and its version; or reference the attached register extract>>` |
| Drift at capture | `<<FILL: none, or differences found and how resolved>>` |
| Configuration manager (name, signature, date) | `<<FILL>>` |
| System owner approval (name, signature, date) | `<<FILL>>` |
| QA approval (name, signature, date) | `<<FILL>>` |

## 12. Acceptance criteria

Configuration management for a system is in control when all of the following are true:

- Every GxP-relevant CI is in the configuration item register with a stable ID, an owner, and a current approved version.
- An approved validated baseline exists, was captured from the live system, and is reconcilable to the change records since the prior baseline.
- Every CI is version-controlled, prior versions are identifiable, and coded CIs trace from the deployed build to a specific tag.
- No CI has changed in production without an approved change record, and every closed change is reflected in the register and baseline.
- Drift detection runs at a risk-based frequency, and any detected drift was investigated and resolved, not silently re-baselined.
- Periodic baseline verification has been performed and signed, with every difference explained by an approved change.

## 13. References

> 21 CFR Part 11 (electronic records and signatures).
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment).
> EU GMP Annex 11 (Computerised Systems), section 4.3 (inventory of systems) and section 10 (change and configuration management).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> ISPE GAMP 5, A Risk-Based Approach to Compliant GxP Computerized Systems (2nd edition), configuration management and the configuration item concept.
> FDA Guidance, Computer Software Assurance for Production and Quality System Software (finalized 24 September 2025).
> PIC/S PI 011, Good Practices for Computerised Systems in Regulated GxP Environments.
> ICH Q9, Quality Risk Management (for risk-based drift-detection frequency).
> IEC 62304 (medical device software lifecycle: configuration management), where the system is or contains a medical device.
> 21 CFR Part 820 (QMSR), effective 2 February 2026, incorporating ISO 13485:2016 by reference, where applicable.

Confirm the current version and clause numbers of each reference before issue.

## 14. Attachments

| No. | Attachment |
|---|---|
| 1 | Configuration item register (or CMDB export) template |
| 2 | Baseline record template |
| 3 | Drift-detection method and tool reference |
| 4 | Periodic baseline verification record template |

## 15. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 16. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Configuration Manager) | `<<FILL>>` | | |
| Reviewer (System Owner) | `<<FILL>>` | | |
| Reviewer (IT / Infrastructure) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows a baseline record completed for an example laboratory information management system after a configured-report change, so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Baseline ID | BL-LIMS-2026-002 |
| System and release | Laboratory Information Management System, version 9.4, release 9.4.1 |
| Baseline type | Change baseline |
| Baseline date | 14 June 2026 |
| Supersedes baseline | BL-LIMS-2026-001 (initial release baseline, 03 March 2026) |
| Captured from | Production; automated configuration export plus repository tag query |
| Change records since last baseline | CHG-2026-0188 (new stability-report template), CHG-2026-0191 (OS security patch) |
| Drift at capture | One difference found: inactivity timeout read 20 minutes against baseline 15 minutes; investigated, traced to an unrecorded admin edit, deviation DEV-2026-0151 opened, value restored to 15 minutes before baseline approval |

Configuration items and versions (extract):

| CI ID | CI name | Category | Approved version | Linked change |
|---|---|---|---|---|
| CI-LIMS-APP-001 | LIMS application | Application | 9.4.1 | none this cycle |
| CI-LIMS-CFG-001 | As-configured settings (config export) | Application | CFG-2026-06-14 | CHG-2026-0188 |
| CI-LIMS-RPT-014 | Stability summary report (configured) | Custom code | tag v1.3.0 | CHG-2026-0188 |
| CI-LIMS-DB-001 | Database schema | Data | schema r41 | none this cycle |
| CI-LIMS-OS-001 | Application-server OS | Infrastructure | patch level 2026-06 | CHG-2026-0191 |
| CI-LIMS-SEC-001 | Role-to-privilege model | Security | v2.0 | none this cycle |

| Field | Entry |
|---|---|
| Configuration manager | J. Okafor, signed, 15 June 2026 |
| System owner approval | M. Lindqvist, signed, 15 June 2026 |
| QA approval | R. Gomez, signed, 16 June 2026 |

In this example the configuration manager captured the baseline from the live production system rather than from intent, reconciled it to the two changes closed since the prior baseline, found one setting that did not match (a 20-minute timeout against the approved 15), refused to re-baseline it silently, opened a deviation, restored the approved value, and only then put the baseline forward for approval. The two authorized changes advanced their CI versions; the unexplained difference was caught as drift. That sequence, capture to reconcile to drift-caught to deviation to restore to approve, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this standard prevents

- No configuration item register, so no one can state what the system is actually made of or what version each part is at.
- A baseline that was written from the design specification or from intent, never captured from the live system, so it cannot prove the running system matches it.
- Live settings that differ from the approved configuration with no change record, that is, uncontrolled drift that no one detected because no comparison is ever run.
- Drift found and quietly re-baselined as the new "approved" state, with no investigation of how the change happened or what data it affected.
- Closed change records that never updated the register or the baseline, so the controlled record is stale and the validated state is unknown.
- Custom code or configured reports in production that trace to no repository tag, so the deployed version cannot be shown to be the version that was reviewed and tested.
- A periodic review that asserts "no changes" without any actual comparison of the live configuration against the baseline.
- Version numbers reused or overwritten, so a prior validated state can no longer be identified or retrieved.

## How to adapt this standard

1. Set your document number, owner, and effective date in the header, and link your change control, CSV, periodic review, and backup procedures.
2. Decide your CI granularity in section 5 and list the CI categories your systems actually have; record which form your register takes, a validated CMDB tool or a controlled spreadsheet.
3. Confirm the baseline points in section 6 match your lifecycle, and set who approves a baseline and a re-baseline.
4. State your one versioning convention in section 7 and apply it across code, configuration, schema, documents, and infrastructure.
5. Set drift-detection frequency by system criticality in section 9, and name the tool or the manual method you will actually use.
6. Align periodic baseline verification in section 10 to your periodic review cycle and point the cross-reference to your periodic review SOP.
7. Confirm every regulation in section 13 against the current published version before issue.
