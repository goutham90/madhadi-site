---
title: "Test Script: Installation Verification (IQ)"
description: "A plug-and-play installation qualification test script that verifies software versions and builds, installed components, the configuration baseline, the environment, and connectivity step by step, with expected and actual results, pass or fail, evidence references, a filled specimen, and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Template"
pillar: "csv-csa"
relatedArticles: ["writing-validation-protocols-and-reports", "validation-test-failure-management"]
tags: ["installation qualification", "iq", "test script", "csv", "csa", "configuration baseline", "21 cfr part 11", "version verification"]
tier: "Intermediate"
---

This is a ready-to-use installation verification test script for the IQ stage of a GxP computerized system. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and run it under an approved IQ protocol or validation plan. A worked filled specimen follows the template so you can see how a completed version reads. A test script is contemporaneous GxP evidence: write each actual result as you observe it, in ink or in the validated tool, never reconstructed later. Verify each cited regulation against the current source before you rely on it.

## What this script is, and is not

This is the executable record that captures the as-installed state of a system and compares it, line by line, to what the design and configuration specifications said should be installed. It proves five things and nothing more: the right software at the right version and build, the correct installed components, the agreed configuration baseline, the correct and segregated environment, and established connectivity for every interface in scope. It is the installation evidence the IQ protocol calls for.

It is not the IQ protocol itself, which states the strategy, scope, responsibilities, and acceptance at the protocol level. It is also not operational or functional testing: this script confirms that an interface is configured and connectable, not that GxP data flows across it correctly, which belongs to OQ or the CSA-scaled functional testing that follows. Under a Computer Software Assurance approach (FDA guidance finalized 24 September 2025), scale the recorded evidence to the risk and GAMP category of the system, but the installed version, the configuration baseline, and the access-control setup are high-value to capture regardless of method.

## Document control header

| Field | Entry |
|---|---|
| Test script title | Installation Verification for `<<FILL: system name / type>>` |
| Test script ID | `<<FILL: TS-ID, e.g. TS-IQ-007>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Parent protocol / plan | `<<FILL: IQ protocol or validation plan ID this script executes under>>` |
| System name and ID | `<<FILL: SYSTEM NAME / asset ID>>` |
| Environment | `<<FILL: production / validation / development, named instance>>` |
| Design / configuration spec | `<<FILL: DS and CS references the baseline is checked against>>` |
| GAMP software category | `<<FILL: 1 / 3 / 4 / 5 per GAMP 5 Second Edition>>` |
| Test type and risk | `<<FILL: scripted / limited; system risk High / Medium / Low>>` |
| Author | `<<FILL: name, role>>` |
| Effective date | `<<FILL: date>>` |

## 1. Requirements and specifications traced

State which requirement and specification clauses this script verifies, so the traceability matrix can link each one to its installation evidence in both directions. Every clause listed here must be exercised by at least one numbered step below.

| Ref ID | What it requires (summary) | Source document | Risk |
|---|---|---|---|
| `<<FILL: URS-031>>` | `<<FILL: the system shall run the approved validated version of the application on qualified infrastructure>>` | `<<FILL: URS-ID, version>>` | `<<FILL: High / Medium / Low>>` |
| `<<FILL: DS-2.4>>` | `<<FILL: installed components, paths, ports, and service accounts as defined in the design specification>>` | `<<FILL: DS-ID, version>>` | `<<FILL>>` |
| `<<FILL: CS-3.1>>` | `<<FILL: configuration baseline, parameters, roles, and business rules as defined in the configuration specification>>` | `<<FILL: CS-ID, version>>` | `<<FILL>>` |

## 2. Objective

In one or two sentences, state what passing this script demonstrates. Example: this script verifies that `<<FILL: system name>>` is installed at the approved version and build, with the design-specified components present, the configuration baseline matching the approved configuration specification, in the correct segregated environment, and with every in-scope interface configured and connectable, so the system is ready to enter functional testing.

`<<FILL: objective>>`

## 3. Prerequisites

List everything that must be true before execution starts. If any prerequisite is not met, do not execute; record the gap as a deviation and stop.

| No. | Prerequisite | Verified (initials / date) |
|---|---|---|
| 3.1 | Parent IQ protocol `<<FILL: ID>>` is approved and effective. | `<<FILL>>` |
| 3.2 | The design specification `<<FILL: DS-ID>>` and configuration specification `<<FILL: CS-ID>>` are approved and current. | `<<FILL>>` |
| 3.3 | The installation is complete per the vendor installation instructions, and the install log is available. | `<<FILL>>` |
| 3.4 | The infrastructure (server, virtual host, network, storage) carries a current qualification, reference `<<FILL: infra qual ID>>`. | `<<FILL>>` |
| 3.5 | Read access to the application version page, configuration export, security settings, and interface configuration is available to the tester. | `<<FILL>>` |
| 3.6 | The tester is trained on this script and on the system, training record `<<FILL: ref>>`. | `<<FILL>>` |

## 4. Reference baseline and tools used

Record the expected values this script compares against and the tools used to read the installed state, so a reviewer can reproduce each check.

| Item | Value used at execution |
|---|---|
| Expected application version / build | `<<FILL: from DS, e.g. v8.4.2 build 1190>>` |
| Expected database / OS versions | `<<FILL: from DS>>` |
| Configuration export method | `<<FILL: native export, screenshot set, or config report; tool and version>>` |
| Account / role used to read settings | `<<FILL: read account with sufficient privilege>>` |
| Time source / reference clock | `<<FILL: NTP source or reference used to verify synchronization>>` |

## 5. Execution conventions

Read these before executing, then follow them for every step. They are the rules an inspector expects to see applied consistently.

- Record each actual result contemporaneously, as you observe it, in the actual result cell. Do not pre-fill, do not batch at the end.
- "Meets expected result" is not an actual result. Write what you actually saw: the exact version string, the path, the count, the message text, the connection status.
- Use one unambiguous mark for pass or fail. A blank cell is incomplete, not a pass.
- For any single-line correction, strike through once, initial, date, and add a brief reason. Never obliterate the original entry.
- Capture objective evidence (version screenshot, configuration export, connectivity log) for every step whose pass depends on a system output, and give that evidence a unique reference recorded in the step.
- Where a step is not applicable, write N/A with a reason; do not leave it blank.
- The moment any step does not meet its expected result, mark it Fail, stop if instructed, and open a deviation per section 9. Do not retest a failed step in place without a documented disposition.

## 6. Test steps

For each step give the action, the precise expected result, the actual result as observed, pass or fail, and the evidence reference. The expected result must be written before execution and must be specific enough that two people would agree on whether it was met. The steps are grouped by the five things IQ proves; add or remove rows so every clause in section 1 is exercised.

### 6.A Environment verification

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 6.1 | `<<FILL: read the environment label / instance name on the application and host>>` | `<<FILL: environment matches the design, e.g. production instance PROD-01>>` | `<<FILL: observed>>` | `<<FILL>>` | `<<FILL: SCR-001>>` | `<<FILL>>` |
| 6.2 | `<<FILL: confirm production is segregated from validation and development instances>>` | `<<FILL: separate instances confirmed; no shared database or data path>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-002>>` | `<<FILL>>` |
| 6.3 | `<<FILL: confirm the infrastructure qualification reference is current>>` | `<<FILL: infra qual ID valid and in date; host listed in scope>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-003>>` | `<<FILL>>` |
| 6.4 | `<<FILL: verify the system clock and time zone against the defined time source>>` | `<<FILL: clock synchronized to the named source; correct time zone>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-004>>` | `<<FILL>>` |

### 6.B Version and build verification

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 6.5 | `<<FILL: open the application About / version page; record version and build>>` | `<<FILL: application version and build match the DS exactly, e.g. v8.4.2 build 1190>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-005>>` | `<<FILL>>` |
| 6.6 | `<<FILL: query the database engine version>>` | `<<FILL: database version matches the DS>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-006>>` | `<<FILL>>` |
| 6.7 | `<<FILL: read the operating system version and patch level>>` | `<<FILL: OS version and patch level match the DS>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-007>>` | `<<FILL>>` |
| 6.8 | `<<FILL: confirm any patches or hotfixes applied against the approved release notes>>` | `<<FILL: only approved patches present; each listed in the release notes>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-008>>` | `<<FILL>>` |

### 6.C Installed component verification

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 6.9 | `<<FILL: confirm each application component from the DS is present (application, services, scheduler, database schema, document store)>>` | `<<FILL: every DS-listed component present; no undocumented extra component>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-009>>` | `<<FILL>>` |
| 6.10 | `<<FILL: verify install paths, service accounts, and ports against the DS>>` | `<<FILL: paths, service accounts, and ports match the DS>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-010>>` | `<<FILL>>` |
| 6.11 | `<<FILL: review the vendor installation log for errors>>` | `<<FILL: no unresolved installation errors in the log>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: SCR-011>>` | `<<FILL>>` |

### 6.D Configuration baseline verification

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 6.12 | `<<FILL: export or capture the full set of configurable settings (parameters, workflows, business rules, master data, report templates)>>` | `<<FILL: complete baseline captured as a controlled record; count matches CS scope>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: CFG-001>>` | `<<FILL>>` |
| 6.13 | `<<FILL: compare each in-scope setting to the configuration specification line by line>>` | `<<FILL: every in-scope setting matches the approved CS; no mismatch>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: CFG-001>>` | `<<FILL>>` |
| 6.14 | `<<FILL: verify the security configuration: authentication method, password rules, lockout, roles and privileges>>` | `<<FILL: unique identities; password and lockout rules per CS; roles match the role matrix>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: CFG-002>>` | `<<FILL>>` |
| 6.15 | `<<FILL: confirm the audit trail is enabled and cannot be disabled by ordinary users>>` | `<<FILL: audit trail on and protected; ordinary user cannot turn it off>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: CFG-003>>` | `<<FILL>>` |
| 6.16 | `<<FILL: confirm no default or shared vendor accounts remain active>>` | `<<FILL: default / shared vendor accounts removed or disabled>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: CFG-004>>` | `<<FILL>>` |

### 6.E Connectivity verification

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 6.17 | `<<FILL: for each in-scope interface, verify endpoint address, protocol, and credentials against the DS>>` | `<<FILL: endpoints, protocols, and credentials match the DS>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: CON-001>>` | `<<FILL>>` |
| 6.18 | `<<FILL: confirm connectivity by handshake / authentication for each interface>>` | `<<FILL: connection established; authentication succeeds; functional data exchange deferred to OQ and noted>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: CON-002>>` | `<<FILL>>` |
| 6.19 | `<<FILL: confirm the backup job connectivity to its storage target and that the backup scope and schedule match the design>>` | `<<FILL: backup reaches the storage target; scope, schedule, and retention match the design; restore procedure referenced>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: CON-003>>` | `<<FILL>>` |

Number steps continuously; do not reuse a number after a revision.

## 7. Acceptance criteria

This script passes only when all of the following are true:

- Every step required to verify the clauses in section 1 is marked Pass, with a recorded actual result and, where applicable, an evidence reference.
- The application, database, and operating system versions and builds match the design specification exactly, with no undocumented patch.
- The configuration baseline is captured as a controlled record and matches the approved configuration specification, with no mismatched or undocumented setting.
- The environment is correct and segregated, the clock is synchronized, and the infrastructure qualification is current.
- Every in-scope interface is configured per the design and connectable, and backup connectivity to its storage target is confirmed.
- The audit trail is enabled and protected, unique identities are enforced, and no default or shared vendor account is active.
- No step is left blank or ambiguous, every deviation raised during execution is resolved with a documented disposition, and any retest is recorded under its own step or attachment.
- The completed script is reviewed and approved per section 11.

A script with one or more open Fail steps, or unresolved deviations, does not pass and cannot support the conclusion in the parent IQ report.

## 8. Evidence index

List every piece of objective evidence captured, so a reviewer can find each one without hunting.

| Evidence ref | Description | Step | Storage location / attachment |
|---|---|---|---|
| `<<FILL: SCR-005>>` | `<<FILL: application version / build page>>` | 6.5 | `<<FILL>>` |
| `<<FILL: CFG-001>>` | `<<FILL: configuration baseline export>>` | 6.12, 6.13 | `<<FILL>>` |
| `<<FILL: CON-002>>` | `<<FILL: interface connectivity logs>>` | 6.18 | `<<FILL>>` |

## 9. Deviations raised during execution

Any step that does not meet its expected result, any departure from the written steps, and any prerequisite not met is recorded here and managed per the parent protocol and `<<FILL: deviation / test-incident SOP-ID>>`. Cross-reference the deviation number on the failing step. Installation is not accepted, and the system is not advanced to functional testing, until every deviation is resolved or formally justified and approved by QA.

| Deviation / incident no. | Step | Description | Classification | Disposition (correct and retest, requirement change, accept with justification) | Closed (date) |
|---|---|---|---|---|---|
| `<<FILL: TI-2026-011>>` | `<<FILL: 6.x>>` | `<<FILL: what was observed vs expected>>` | `<<FILL: critical / major / minor>>` | `<<FILL>>` | `<<FILL>>` |

A failed step is not a finding against the tester. It is data. The discipline an inspector looks for is that the failure was captured honestly, classified, dispositioned, and that any retest is traceable to the original failure, not quietly overwritten.

## 10. Execution summary

| Field | Entry |
|---|---|
| Total steps | `<<FILL>>` |
| Steps passed | `<<FILL>>` |
| Steps failed | `<<FILL>>` |
| Deviations raised / closed | `<<FILL>>` |
| Clauses verified (from section 1) | `<<FILL>>` |
| Configuration baseline reference captured | `<<FILL: CFG-001 attachment / record ID>>` |
| Overall result | Pass / Fail (`<<FILL>>`) |

## 11. Sign-off

The tester executes and signs; an independent reviewer who did not execute the test confirms the record is complete, the evidence supports each pass, and deviations are resolved. The reviewer should not be the same person who executed the script.

| Role | Name | Signature | Date |
|---|---|---|---|
| Tester (executed) | `<<FILL>>` | | |
| Reviewer (independent) | `<<FILL>>` | | |
| QA approval | `<<FILL>>` | | |

## 12. References

> 21 CFR Part 11 (electronic records and electronic signatures), where the system is Part 11 in scope.
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment), where the system controls or records GMP data.
> EU GMP Annex 11 (Computerised Systems), validation and installation principles.
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> FDA Guidance, Computer Software Assurance for Production and Quality System Software, finalized 24 September 2025 (risk-based scaling of recorded evidence).
> ISPE GAMP 5: A Risk-Based Approach to Compliant GxP Computerized Systems, Second Edition.
> PIC/S PI 011, Good Practices for Computerised Systems in Regulated GxP Environments.
> ICH Q9 (Quality Risk Management), for the risk basis of evidence depth.
> For medical device software: 21 CFR Part 820 (QMSR, effective 2 February 2026, incorporating ISO 13485:2016) and IEC 62304.

Confirm the current version and clause numbers of each reference before issue.

## 13. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

---

## Filled specimen

The following shows the script executed for an example chromatography data system (CDS) server installation in the production environment, so you can see the level of detail an inspector expects. The company, system, versions, accounts, and numbers are illustrative; replace them with your own.

**Header (extract)**

| Field | Entry |
|---|---|
| Test script title | Installation Verification for Chromatography Data System server |
| Test script ID | TS-IQ-007, v1.0 |
| Parent protocol | IQ-CDS-004 |
| System name and ID | Chromatography Data System, instance CDS-PROD-01 |
| Environment | Production, segregated from CDS-VAL-01 and CDS-DEV-01 |
| Design / config spec | DS-CDS-2026-002, CS-CDS-2026-003 |
| GAMP category / risk | Category 4 (configured), system risk High |

**Test steps (executed)**

| Step | Action | Expected result | Actual result | P/F | Evidence | Initials / date |
|---|---|---|---|---|---|---|
| 6.1 | Read environment label on the application and host. | Production instance CDS-PROD-01. | Header and host both showed "CDS-PROD-01". | Pass | SCR-001 | AP 04 Jun 2026 |
| 6.2 | Confirm production is segregated from VAL and DEV. | Separate instances; no shared database. | Three separate databases confirmed; no shared data path. | Pass | SCR-002 | AP 04 Jun 2026 |
| 6.4 | Verify system clock against the site time source. | Clock synced to site NTP, time zone EDT. | Synced to site NTP; offset under 1 second; time zone EDT. | Pass | SCR-004 | AP 04 Jun 2026 |
| 6.5 | Read the application version / build. | v8.2.1 build 4471 per DS. | About page showed v8.2.1 build 4471. | Pass | SCR-005 | AP 04 Jun 2026 |
| 6.7 | Read OS version and patch level. | Server OS 2022, patch level per DS. | OS 2022; one patch (KB-listed) not in the approved release notes. | Fail, raised TI-2026-011 | SCR-007 | AP 04 Jun 2026 |
| 6.9 | Confirm DS components present. | Application, acquisition service, database schema CDSPROD, archive store. | All present; one extra demo project library from the vendor default install. | Fail, raised TI-2026-012 | SCR-009 | AP 04 Jun 2026 |
| 6.12 to 6.13 | Capture baseline; compare 187 in-scope settings to CS. | All 187 settings match CS-CDS-2026-003. | 186 matched; the e-signature reason-code list had one extra unapproved code. | Fail, raised TI-2026-013 | CFG-001 | AP 04 Jun 2026 |
| 6.15 | Confirm audit trail on and protected. | Audit trail on; ordinary user cannot disable. | Audit trail enabled; analyst role had no option to disable it. | Pass | CFG-003 | AP 04 Jun 2026 |
| 6.16 | Confirm no default vendor accounts active. | Default "cdsadmin" account disabled. | Default "cdsadmin" account was still enabled with the vendor password. | Fail, raised TI-2026-014 | CFG-004 | AP 04 Jun 2026 |
| 6.18 | Confirm connectivity to the two instruments and the LIMS interface. | All three endpoints authenticate and connect. | All three authenticated and connected; data exchange deferred to OQ. | Pass | CON-002 | AP 04 Jun 2026 |

**Execution summary**

| Field | Entry |
|---|---|
| Total steps | 19 |
| Steps passed | 15 |
| Steps failed | 4 |
| Deviations raised / closed | 4 / 4 |
| Clauses verified | URS-031, DS-2.4, CS-3.1 |
| Configuration baseline reference captured | CFG-001 |
| Overall result | Pass (after all four deviations corrected, re-verified, and approved by QA) |

In this example, installation verification caught four real defects that functional testing would have inherited silently: an unapproved OS patch, a leftover demo project library from the vendor default install, an extra unapproved e-signature reason code in the configuration baseline, and an active default vendor admin account, which is a direct 21 CFR Part 11 access-control gap. The tester recorded the exact version strings, counts, and account state seen, not "meets expected", marked each defect Fail at the moment it was found, and raised a test incident for each. The team removed the unapproved patch, deleted the demo library, removed the extra reason code and re-verified the baseline, disabled the default account, re-executed the affected steps, and only then accepted installation and advanced to OQ. That sequence, capture the as-installed state, compare it to the approved specification line by line, and route every mismatch as a deviation before testing, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this script prevents

- Testing performed against an installation whose software version or build was never recorded, so it cannot be proven what was tested.
- Test steps marked "Pass" with the actual result column filled in only as "meets expected result", giving no record of the version string, count, or setting actually observed.
- No captured configuration baseline at installation, so later configuration changes have no documented starting point and change control cannot show what changed.
- An unapproved patch or hotfix on the installed system that was never compared to the approved release notes.
- Default or shared vendor accounts left active after install, defeating attributability under 21 CFR Part 11 and EU GMP Annex 11.
- Audit trail not confirmed enabled and protected from ordinary users at installation, discovered only after live data exists.
- Validation done in a non-production environment with no record that production was installed identically and segregated.
- Interfaces present on the live system that were never verified against the design or confirmed connectable.
- A failed installation check quietly corrected and the step overwritten, with no test incident, no disposition, and no link between the failure and the eventual pass.

## How to adapt this script

1. Set your test script ID, parent IQ protocol, system version, GAMP category, and effective date in the header, and confirm you are verifying the environment named in the design.
2. Scale the recorded evidence to risk and GAMP category per the CSA guidance: a category 3 non-configured product needs lighter configuration capture than the category 4 specimen above, while a category 5 custom system needs more around build and code control. Keep the version, configuration baseline, and access-control evidence regardless of method.
3. List the real URS, DS, and CS clauses in section 1 and confirm each one is exercised by at least one numbered step; keep the script and your traceability matrix in agreement in both directions.
4. Replace the steps in section 6 with checks that map to your own design and configuration specifications, and delete any (for example interfaces or backup) that do not apply, with a recorded reason. Write every expected result before execution, specific enough that two people would agree on the outcome.
5. For a hosted or SaaS system, add the supplier responsibility boundary: confirm which installation elements (version, infrastructure, backup) the provider owns under the service agreement and reference their evidence, then verify what you configure and control.
6. Point the cross-references in sections 3, 9, and 11 to your real IQ protocol, deviation or test-incident procedure, and review and approval process.
7. Confirm every regulation in section 12 against the current published version before issue.
