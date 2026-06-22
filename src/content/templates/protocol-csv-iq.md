---
title: "Computerized System Installation Qualification (IQ) Protocol"
description: "A plug-and-play installation qualification protocol for a GxP computerized system: environment and server build, software version and build, installation against the design specification, configuration baseline, interfaces, security setup, backup, documentation, test cases, deviations, and summary, with a worked LIMS specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Protocol"
pillar: "csv-csa"
relatedArticles: ["gamp5-csv-framework","computer-software-assurance-fda","lims-implementation-and-validation"]
tags: ["installation qualification", "iq", "computerized system validation", "gamp 5", "21 cfr part 11", "lims", "configuration baseline"]
tier: "Intermediate"
---

This is a ready-to-use installation qualification protocol for a GxP computerized system. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach the vendor documents and configuration records the protocol calls for, and route it through your normal document control, review, and approval. A worked filled specimen for a laboratory information management system (LIMS) follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

IQ for a computerized system proves one thing: that the right software, at the right version and build, was installed correctly on the right qualified infrastructure, in the right configuration, with security, interfaces, backup, and documentation all established and recorded, before anyone tries to test what the system does. It is the installation stage of validation. Operational qualification (OQ) and performance qualification (PQ), or the equivalent CSA-scaled functional and process testing, all assume the installed state captured here. If the IQ record is wrong or thin, every later test sits on sand. Under a CSA-aligned approach (FDA guidance finalized 24 Sep 2025) you scale the depth of recorded evidence to risk, but the installed configuration of a GxP system is high value to capture regardless of method.

## Document control header

| Field | Entry |
|---|---|
| Document title | Installation Qualification Protocol for `<<FILL: system name / type>>` |
| Document number | `<<FILL: PRT-ID, e.g. IQ-CSV-044>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Computerized System Validation>>` |
| System / environment | `<<FILL: system name, environment (e.g. production), host(s)>>` |
| GAMP software category | `<<FILL: 1 / 3 / 4 / 5 per GAMP 5 Second Edition>>` |
| Linked DS / config spec | `<<FILL: design / configuration specification ref>>` |
| Linked OQ / PQ or CSA test plan | `<<FILL: OQ ref to follow; PQ or CSA test plan ref to follow>>` |
| Linked report | `<<FILL: IQ summary report number to be issued>>` |

## 1. Purpose

This protocol defines the checks and acceptance criteria to confirm that `<<FILL: system name / ID>>` was installed correctly in the `<<FILL: environment, e.g. validated production>>` environment, at the software version and build defined in the design specification, on qualified infrastructure, in the approved configuration baseline, with interfaces, security, and backup established, and with the required documentation in place, so the system is ready to enter functional and process testing. The objective is a documented, inspection-ready record that installation matches the approved specification, the vendor installation instructions, and the configuration the project agreed.

## 2. Scope

This protocol applies to the single computerized system and environment identified in the header and section 5, including the application software, its database and middleware, the operating system and server or virtual host it runs on, the controlling workstations or thin clients where in scope, the interfaces it exchanges GxP data through, and the backup arrangement that protects its records. It covers verification at installation only. It does not establish what the system does functionally, which is covered by the OQ or CSA functional testing referenced in the header, and it does not cover routine use, periodic review, or change control after qualification, which are governed by `<<FILL: cross-reference SOP-IDs>>`. Where the underlying infrastructure (server, virtual platform, network, storage) was qualified separately, that qualification is referenced here and not repeated.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Validation lead / author | Authors this protocol, defines the test cases against the design specification, executes or oversees execution, manages deviations, and writes the summary report. |
| System owner / business owner | Confirms the configuration baseline matches the approved configuration specification and the intended business use. |
| IT / infrastructure | Builds and confirms the server, operating system, database, network, and storage; confirms infrastructure qualification; supports interface and backup checks. |
| Application administrator / vendor engineer | Installs the application per the vendor installation instructions, records versions and build numbers, and supports configuration capture. |
| Security / identity administrator | Confirms authentication, account provisioning, role and privilege setup, and password and audit-trail settings. |
| Quality Assurance | Reviews and approves the protocol, deviations, and report, and owns the disposition that installation is acceptable. |

## 4. Definitions

- **Installation qualification (IQ)**: documented verification that a system and its components are installed correctly, to specification, on suitable infrastructure, before functional testing.
- **Configuration baseline**: the complete, recorded set of configurable settings (parameters, master data, business rules, security model) that defines this installed instance, captured so any later change is visible.
- **Build / version**: the exact released software version plus the patch or build identifier of the application, database, and operating system as installed.
- **Environment**: the named instance, such as development, validation/test, or production, kept separate so testing does not touch live GxP data.
- **GAMP software category**: the GAMP 5 Second Edition classification (1 infrastructure, 3 non-configured, 4 configured, 5 custom) that scales the rigor of the lifecycle.
- **Interface**: an automated path that moves GxP data into or out of the system, for example to an instrument, an ERP, or a manufacturing system.

## 5. System and environment under qualification

Record the as-installed identity of the system and its host. Every field below is an inspection question, so fill each precisely rather than "see vendor docs".

| Item | Entry |
|---|---|
| System name and unique ID | `<<FILL: system name / asset ID>>` |
| Business purpose (GxP records held) | `<<FILL: what regulated records it creates/holds>>` |
| Environment | `<<FILL: production / validation / etc.>>` |
| Vendor and product | `<<FILL: vendor, product name>>` |
| Application version and build | `<<FILL: e.g. v8.4.2, build 1190>>` |
| Database engine and version | `<<FILL: e.g. relational DB vX.Y>>` |
| Operating system and version | `<<FILL: server OS and patch level>>` |
| Host / platform | `<<FILL: physical server, virtual host, or cloud service tier>>` |
| Infrastructure qualification reference | `<<FILL: IQ/qualification ref for server, virtual platform, network, storage>>` |
| Hosting model | `<<FILL: on-premises / private cloud / SaaS (note shared responsibility)>>` |

## 6. Test cases

Each test case states what is checked, how, the expected result, the actual result, pass or fail, and the evidence captured. Execute in order, record contemporaneously, sign and date each step, and attach the listed evidence. Where a step is not applicable, write N/A with a reason; do not leave it blank. Each case below maps to a section of the design or configuration specification named in the header.

### 6.1 Environment and infrastructure prerequisites

| Field | Detail |
|---|---|
| Objective | Confirm the system is installed in the correct, separate environment on qualified infrastructure. |
| Method | Verify the environment label and host names match the design; confirm the production environment is segregated from development and validation; confirm the server, virtual platform, network, and storage carry a current infrastructure qualification; verify time synchronization to the defined time source. |
| Expected result | Correct environment confirmed and segregated; infrastructure qualification current and referenced; clock synchronized to the defined source. |
| Acceptance criteria | All confirmed; infrastructure qualification reference valid; no unqualified host component. |
| Actual / pass-fail / evidence | `<<FILL: actual>>` / `<<FILL: P/F>>` / `<<FILL: screenshots, infra qual ref, time-source record>>` |

### 6.2 Software version and build

| Field | Detail |
|---|---|
| Objective | Confirm the exact application, database, and operating system versions and build numbers match the design specification and the approved release. |
| Method | Read the application "About" / version page; query database and OS versions; compare each to the design specification and the vendor release notes; record any patches applied. |
| Expected result | Application, database, and OS versions and builds match the design specification exactly. |
| Acceptance criteria | No version or build mismatch; any deviation from the specified version raised per section 7. |
| Actual / pass-fail / evidence | `<<FILL>>` / `<<FILL: P/F>>` / `<<FILL: version screenshots, release notes ref>>` |

### 6.3 Installation per the design specification

| Field | Detail |
|---|---|
| Objective | Confirm the application and its components were installed following the vendor installation instructions and the design specification. |
| Method | Confirm each component listed in the design specification is present (application, services, database schema, file shares); verify install paths, service accounts, and ports against the specification; review the vendor installation log for errors. |
| Expected result | All specified components present and installed to the defined locations; install log free of unresolved errors. |
| Acceptance criteria | Every design-specified component installed; no unresolved installation error; install evidence retained. |
| Actual / pass-fail / evidence | `<<FILL>>` / `<<FILL: P/F>>` / `<<FILL: install log, component inventory, path/port list>>` |

### 6.4 Configuration baseline

| Field | Detail |
|---|---|
| Objective | Capture and verify the complete configuration baseline against the approved configuration specification so the installed instance is fully defined. |
| Method | Export or screenshot every configurable setting in scope: system parameters, business rules, workflows, master data, calculations, report templates, and the security model; compare each to the configuration specification line by line. |
| Expected result | Every in-scope setting matches the approved configuration specification; the baseline is captured as a controlled record. |
| Acceptance criteria | No undocumented or mismatched setting; baseline export attached and referenced for future change control. |
| Actual / pass-fail / evidence | `<<FILL>>` / `<<FILL: P/F>>` / `<<FILL: configuration export / screenshots, config spec ref>>` |

### 6.5 Interfaces

| Field | Detail |
|---|---|
| Objective | Confirm every GxP data interface is configured as specified and connectivity is established at the installation level. |
| Method | For each interface in the design, verify endpoint addresses, protocols, credentials, and data mappings against the specification; confirm connectivity (handshake / authentication succeeds); confirm error handling and queueing settings are configured. |
| Expected result | Each interface configured per specification; connectivity established; error handling configured. |
| Acceptance criteria | All in-scope interfaces present and connectable; mappings match the specification; functional data exchange testing is deferred to OQ / functional testing and noted as such. |
| Actual / pass-fail / evidence | `<<FILL>>` / `<<FILL: P/F>>` / `<<FILL: interface config, connectivity logs, mapping table ref>>` |

### 6.6 Security setup

| Field | Detail |
|---|---|
| Objective | Confirm authentication, accounts, roles, privileges, and electronic-records controls are configured per the security design and 21 CFR Part 11 / EU GMP Annex 11 expectations. |
| Method | Verify the authentication method (for example directory integration or unique application logins); confirm password rules (length, complexity, expiry, lockout) match the design; confirm role and privilege definitions match the configuration specification; confirm the audit trail is enabled and cannot be disabled by ordinary users; confirm no shared or default vendor accounts remain active. |
| Expected result | Unique user identities enforced; password and lockout rules per design; roles and privileges match specification; audit trail enabled and protected; default/shared accounts removed or disabled. |
| Acceptance criteria | No active default or shared account; audit trail confirmed on and protected; segregation of duties reflected in roles; settings match the security design. |
| Actual / pass-fail / evidence | `<<FILL>>` / `<<FILL: P/F>>` / `<<FILL: security config screenshots, role matrix ref, account list>>` |

### 6.7 Backup and recovery configured

| Field | Detail |
|---|---|
| Objective | Confirm backup of the system's GxP data and configuration is configured per the design, with a defined schedule and retention. |
| Method | Verify the backup job scope (database, configuration, document store), schedule, retention period, and storage location against the design; confirm backup success notification is configured; confirm a restore procedure exists and is referenced. |
| Expected result | Backup configured to the defined scope, schedule, and retention; notifications on; restore procedure referenced. |
| Acceptance criteria | Backup covers all GxP records and configuration; schedule and retention match the design; a documented restore test is scheduled (full restore test may be performed here or recorded as a planned activity per the design). |
| Actual / pass-fail / evidence | `<<FILL>>` / `<<FILL: P/F>>` / `<<FILL: backup job config, schedule, restore SOP ref>>` |

### 6.8 Documentation present

| Field | Detail |
|---|---|
| Objective | Confirm the documentation needed to operate, support, and audit the system is present and version-controlled. |
| Method | Verify the presence and version of: vendor installation and administration manuals, the design and configuration specifications, the security/role design, operating and administration SOPs (or drafts with an issue plan), the backup/restore procedure, and the supplier assessment for the vendor. |
| Expected result | All listed documents present at the correct version, or a dated plan exists for any document still in draft. |
| Acceptance criteria | No required document missing without a plan; all available documents version-controlled. |
| Actual / pass-fail / evidence | `<<FILL>>` / `<<FILL: P/F>>` / `<<FILL: document register extract, version list>>` |

## 7. Deviations and handling

Any failed test case, departure from this protocol, or version, configuration, or security mismatch is recorded as a deviation per `<<FILL: deviation SOP-ID>>` and assessed for impact before installation is accepted. Each deviation records the observed result, the assessment, the resolution (correct and retest, or accept with justification), and the retest evidence. Installation is not accepted, and the system is not advanced to functional testing, until every deviation is resolved or formally justified and approved by QA.

| Deviation no. | Test case | Description | Assessment / impact | Resolution and retest | Status |
|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL: 6.x>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Open / Closed |

## 8. Acceptance criteria (protocol level)

Installation is acceptable, and the system may enter OQ or functional testing, only when all of the following are true:

- Every test case in section 6 passed, or any failure is captured as a deviation that is resolved or formally justified and approved.
- The application, database, and operating system versions and builds match the design specification exactly.
- The configuration baseline is captured as a controlled record and matches the approved configuration specification.
- All in-scope interfaces are configured per specification and connectable.
- Security is configured per design: unique identities, password and lockout rules, role-based privileges, audit trail enabled and protected, no active default or shared accounts.
- Backup is configured to the defined scope, schedule, and retention, with a restore procedure referenced.
- Required documentation is present and version-controlled, or carries a dated completion plan.

## 9. Summary report

On completion, the validation lead issues report `<<FILL: report number>>` summarizing the test cases and their results, every deviation and its resolution, the captured configuration baseline reference, and the conclusion that installation is acceptable (or not) and the system is ready (or not) to enter functional testing. The report is approved by QA.

## 10. Attachments

| No. | Attachment |
|---|---|
| 1 | Version and build evidence (application, database, OS) |
| 2 | Vendor installation log and component inventory |
| 3 | Configuration baseline export |
| 4 | Interface configuration and connectivity evidence |
| 5 | Security configuration: role matrix, account list, audit-trail and password settings |
| 6 | Backup job configuration and restore procedure reference |
| 7 | Document register extract and supplier assessment reference |
| 8 | Infrastructure qualification reference |

## 11. References

> 21 CFR Part 11 (electronic records and electronic signatures).
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment), where the system controls or records GMP data.
> EU GMP Annex 11 (Computerised Systems) and Annex 15 (Qualification and Validation), 2015 revision.
> FDA Guidance, Computer Software Assurance for Production and Quality System Software (finalized 24 Sep 2025).
> ISPE GAMP 5: A Risk-Based Approach to Compliant GxP Computerized Systems, Second Edition.
> PIC/S PI 011, Good Practices for Computerised Systems in Regulated GxP Environments.
> ICH Q9, Quality Risk Management (for the risk-based scaling of effort).

Confirm the current version and clause numbers of each reference before issue.

## 12. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 13. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Validation) | `<<FILL>>` | | |
| Reviewer (IT / System owner) | `<<FILL>>` | | |
| Reviewer (Security) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the test-case section completed for an example LIMS installation in the production environment, so you can see the level of detail an inspector expects. The company, system, versions, and numbers are illustrative; replace them with your own.

| Item | Entry |
|---|---|
| System name and ID | Laboratory Information Management System, LIMS-PROD-01 |
| Business purpose | Sample login, test result entry, specification checks, and certificate of analysis generation for QC release testing |
| Environment | Production, segregated from LIMS-VAL-01 (validation) and LIMS-DEV-01 (development) |
| Vendor and product | Example LIMS vendor, LIMS product, configured (GAMP category 4) |
| Application version and build | v8.4.2, build 1190 |
| Database engine and version | Relational database v19c |
| Operating system | Server OS 2022, patch level current as of install date |
| Host / platform | Virtual server on the qualified private-cloud platform, infra qualification IQ-INFRA-2026-007 |

| Test case | Expected | Actual | P/F |
|---|---|---|---|
| 6.1 Environment and infrastructure | Production segregated; infra qual IQ-INFRA-2026-007 current; clock synced to the site NTP source | Confirmed; production isolated from VAL and DEV; clock synced to site time source | P |
| 6.2 Software version and build | LIMS v8.4.2 build 1190; database v19c; OS 2022 per design spec DS-LIMS-2026-002 | All versions and builds matched the design spec exactly | P |
| 6.3 Installation per DS | Application service, scheduler, database schema LIMSPROD, and document store installed to specified paths and ports | All components present; one extra demo schema found from the vendor default install | F, raised as DEV-2026-0311 |
| 6.4 Configuration baseline | 214 in-scope settings (parameters, workflows, spec limits, COA template, role model) match config spec CS-LIMS-2026-003 | 213 matched; one report footer text field differed from spec | F, raised as DEV-2026-0312 |
| 6.5 Interfaces | Two interfaces: chromatography data system (result import) and ERP (sample order receipt), configured and connectable | Both endpoints authenticated and connected; mappings matched the spec; data exchange deferred to OQ | P |
| 6.6 Security setup | Directory authentication; password 12 chars, 90-day expiry, 5-attempt lockout; 6 roles per role matrix; audit trail on and locked; no default accounts | Settings matched the security design; default vendor admin account was still enabled | F, raised as DEV-2026-0313 |
| 6.7 Backup configured | Nightly backup of database, configuration, and document store; 90-day retention; offsite copy; restore SOP referenced | Backup job confirmed to defined scope, schedule, and retention; restore SOP-IT-022 referenced; restore test scheduled | P |
| 6.8 Documentation present | Install/admin manuals, DS, CS, security design, draft admin SOPs, backup SOP, supplier assessment all present and version-controlled | All present; admin SOPs in draft with an issue plan dated before go-live | P |

In this example, IQ caught three real installation defects that functional testing would have inherited silently: a leftover demo database schema from the vendor default install, a single report footer field that did not match the approved configuration, and an active default vendor admin account, which is a direct 21 CFR Part 11 access-control gap. The team raised each as a deviation, removed the demo schema, corrected the footer field and re-verified the baseline, disabled the default account, and only then accepted installation and advanced to OQ. That sequence, capture the as-installed state, compare it to the approved specification line by line, and route every mismatch as a deviation before testing, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this protocol prevents

- Testing performed against an installation whose software version or build was never recorded, so it cannot be proven what was tested.
- No captured configuration baseline, so later configuration changes have no documented starting point and change control cannot show what changed.
- Default or shared vendor accounts left active after install, defeating attributability under 21 CFR Part 11 and EU GMP Annex 11.
- Audit trail not confirmed enabled (and not protected from ordinary users) at installation, discovered only after live data exists.
- Validation done in a non-production environment with no record that production was installed identically.
- Backup configured but never scoped to the configuration and document store, or with no referenced restore procedure.
- Interfaces present on the live system that were never identified, configured to spec, or assessed for GxP data impact.
- "Installed per vendor" claimed with no install log, component inventory, or path/port verification to support it.

## How to adapt this protocol

1. Set your document number, owner, report number, GAMP category, and effective date in the header, and point the DS, OQ/CSA, and infrastructure-qualification references to your real documents.
2. Scale the recorded evidence to risk per the CSA guidance and your GAMP category: a category 3 non-configured product needs lighter configuration capture than a category 4 configured system like the LIMS specimen, while a category 5 custom system needs more around build and code control. Keep the high-value installed-state and security evidence regardless of method.
3. Replace the test cases in section 6 with checks that map to your own design and configuration specifications, and delete any (for example interfaces) that do not apply, with a recorded reason.
4. For a hosted or SaaS system, add the supplier's responsibility boundary: confirm which IQ elements (version, infrastructure, backup) the provider owns under the service agreement and reference their evidence, then qualify what you configure and control.
5. Point the cross-references in sections 2 and 7 to your real change-control, deviation, periodic-review, and backup/restore procedures.
6. Confirm every regulation in section 11 against the current published version before issue.
