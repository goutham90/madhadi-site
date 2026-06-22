---
title: "Cloud / SaaS Qualification Template"
description: "A plug-and-play template for qualifying a cloud or SaaS application used in GxP: shared-responsibility matrix, supplier and CSP assessment, configuration versus the vendor-managed platform, data location and retention, what the customer must still test, periodic re-assessment, and acceptance, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Template"
pillar: "csv-csa"
relatedArticles: ["cloud-saas-validation", "infrastructure-qualification-and-spreadsheet-validation"]
tags: ["cloud", "saas", "csv", "csa", "shared responsibility", "supplier qualification", "21 CFR Part 11", "annex 11"]
tier: "Intermediate"
---

This is a ready-to-use cloud and SaaS qualification template. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your supplier audit reports and certifications, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

The point of this document is to answer the one question an inspector always asks about a cloud system: you do not run the infrastructure and you cannot see most of the stack, so how do you know the system is fit for GxP use and stays that way. A signed qualification that draws the responsibility line, evidences the supplier, tests what only you can test, and re-checks on a schedule is the answer.

## Document control header

| Field | Entry |
|---|---|
| Document title | Cloud / SaaS Qualification for `<<FILL: application name>>` |
| Document number | `<<FILL: ID, e.g. CSQ-IT-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. System Owner / Head of IT Quality>>` |
| Service model | `<<FILL: SaaS / PaaS / IaaS>>` |
| Deployment model | `<<FILL: public multi-tenant / single-tenant / private / hybrid>>` |
| Linked URS / risk assessment | `<<FILL: URS-ID, RA-ID>>` |

## 1. Purpose

This document defines how `<<FILL: COMPANY NAME>>` qualifies the cloud or SaaS application `<<FILL: application name>>`, supplied by `<<FILL: SaaS vendor>>` and hosted on `<<FILL: cloud service provider, e.g. a major public cloud>>`, for GxP use. It records who is responsible for which controls, the evidence relied on for the parts of the system the company cannot directly test, the testing the company must still perform itself, and the schedule for confirming the qualified state stays valid over time.

## 2. Scope

This template applies to the named application and the GxP processes it supports at the sites listed below. It covers the application layer, its configuration, the data it holds, and the supplier and hosting arrangement behind it. It does not replace the computerized system validation of the workflows built in the application, which is governed by `<<FILL: CSV / CSA SOP-ID>>`, nor the general IT infrastructure qualification of company-managed components, governed by `<<FILL: infrastructure qualification SOP-ID>>`.

| Item | Entry |
|---|---|
| GxP processes supported | `<<FILL: e.g. document control, LIMS data capture, training records>>` |
| Sites / business units in scope | `<<FILL>>` |
| GxP record types held | `<<FILL: electronic records subject to 21 CFR Part 11 / Annex 11>>` |
| Integrations in scope | `<<FILL: upstream/downstream systems and interfaces>>` |

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| System owner | Owns the qualified state, the configuration baseline, periodic re-assessment, and the supplier relationship for quality matters. |
| Process owner / business SME | Defines the intended use, the configuration that supports it, and runs user acceptance testing. |
| IT / IT Quality | Manages access provisioning, integrations, the company side of identity and backup, and technical assessment of the supplier. |
| Quality Assurance | Approves the supplier assessment, the risk assessment, this qualification, and the periodic re-assessment, and owns disposition. |
| SaaS vendor | Operates and maintains the application, manages releases, and provides the certifications, audit reports, and notifications relied on here. |
| Cloud service provider (CSP) | Operates the underlying infrastructure under the vendor, with controls evidenced through the vendor's audit reports. |

## 4. Definitions

- **SaaS, PaaS, IaaS**: software, platform, and infrastructure as a service. The service model sets how much of the stack the supplier manages and how much the customer manages.
- **Shared responsibility**: the division of security and compliance controls between the customer, the SaaS vendor, and the cloud service provider. In SaaS the customer keeps least; the customer always keeps responsibility for its own data, user access, and configuration.
- **CSP**: cloud service provider, the operator of the underlying compute, storage, and network the SaaS vendor builds on.
- **Multi-tenancy**: one application instance serving many customers, with logical separation of each customer's data.
- **Configuration**: settings turned on or set within the vendor-managed platform without changing vendor source code. Distinct from customization (code, scripts, or bespoke modules), which carries more validation effort.
- **Sub-processor**: a third party the vendor uses to process customer data, including the CSP itself.

## 5. System overview and service model

| Item | Entry |
|---|---|
| Application and version | `<<FILL: application name and version/release channel>>` |
| SaaS vendor | `<<FILL>>` |
| Underlying CSP and region(s) | `<<FILL: provider and data region(s)>>` |
| Service model | `<<FILL: SaaS (typical) / PaaS / IaaS>>` |
| Deployment / tenancy | `<<FILL: public multi-tenant / single-tenant>>` |
| GAMP 5 software category | `<<FILL: typically Category 3 (non-configured) or 4 (configured)>>` |
| Update / release model | `<<FILL: continuous / quarterly / customer-scheduled>>` |
| Customer control over updates | `<<FILL: none / staged via sandbox / opt-in window>>` |

The update model matters more for cloud than for on-premise software. A vendor that pushes continuous releases you cannot defer changes the validated state without your action, so section 9 and section 11 must address how you detect and assess those releases.

## 6. Shared-responsibility matrix

Map every control to exactly one accountable party, customer (C), SaaS vendor (V), or cloud service provider (P), and name how the company verifies the parties it does not control. Do not leave a control unowned. The split shifts with the service model; the matrix below is a SaaS-typical starting point.

| Control area | Accountable (C / V / P) | How the company verifies it |
|---|---|---|
| Physical data center security | P | `<<FILL: via vendor audit report covering CSP, e.g. SOC 2 / ISO 27001>>` |
| Compute, storage, network, hypervisor | P | `<<FILL: vendor audit report>>` |
| Operating system and platform patching | V | `<<FILL: vendor audit report / SLA>>` |
| Application code and vendor configuration | V | `<<FILL: vendor SDLC evidence / audit>>` |
| Application availability and resilience | V (P) | `<<FILL: SLA and uptime reporting>>` |
| Backup and disaster recovery of the platform | V (P) | `<<FILL: SLA, DR test evidence>>` |
| Data encryption at rest and in transit | V (P) | `<<FILL: audit report / vendor attestation>>` |
| Tenant data separation (multi-tenancy) | V | `<<FILL: audit report / penetration test summary>>` |
| Customer configuration (workflows, rules, fields) | C | `<<FILL: company change control and testing>>` |
| User access, roles, and privileges | C | `<<FILL: company access management SOP>>` |
| Identity and authentication (SSO, MFA) | C (V) | `<<FILL: company IAM + vendor capability>>` |
| Audit trail configuration and review | C (V) | `<<FILL: vendor provides function; company configures and reviews>>` |
| Data entered, its accuracy and meaning | C | `<<FILL: company process controls>>` |
| Data export, archive, and retention decisions | C | `<<FILL: company retention schedule>>` |
| Regulatory fitness for the company's GxP use | C | This qualification |

Two rules an inspector will test. First, the customer always owns its data, its users, and its configuration, no matter how much the vendor manages. Second, the supplier audit report you rely on must actually cover the controls you assigned to V and P; a report scoped to a different service or region does not count.

## 7. Supplier and CSP assessment

The company cannot inspect the vendor's data center or read its source code, so qualification rests on a documented supplier assessment plus independent third-party evidence. Record the evidence and its currency below.

### 7.1 Supplier assessment

| Item | Entry |
|---|---|
| Assessment type | `<<FILL: postal questionnaire / remote audit / on-site audit, set by risk>>` |
| Assessment date and assessor | `<<FILL>>` |
| Vendor quality system | `<<FILL: ISO 9001 / documented SDLC / none>>` |
| Vendor GxP awareness | `<<FILL: evidence vendor understands GxP obligations>>` |
| Outcome / approved status | `<<FILL: approved / approved with conditions / not approved>>` |
| Reference to assessment record | `<<FILL: supplier file / audit report ID>>` |

### 7.2 Third-party certifications and audit reports relied on

| Evidence | Held? | Date / period | Scope confirmed to cover this service | Reference |
|---|---|---|---|---|
| SOC 2 Type II report | `<<FILL: Y/N>>` | `<<FILL: audit period>>` | `<<FILL: Y/N>>` | `<<FILL>>` |
| ISO/IEC 27001 certificate | `<<FILL>>` | `<<FILL: valid to>>` | `<<FILL>>` | `<<FILL>>` |
| ISO/IEC 27017 / 27018 (cloud, PII) | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Penetration test summary | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Vendor validation / qualification pack | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| DR / business continuity test evidence | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

A SOC 2 Type II report is read, not just filed. Check the audit period covers a meaningful window, that the scope names this service and region, and review every exception and every Complementary User Entity Control (CUEC), because each CUEC is a control the report hands back to you. List the CUECs you must implement in section 8.

## 8. Customer-managed controls to implement

These are the controls the matrix assigned to the company, plus any CUECs handed back by the supplier audit report. They are configured and evidenced by the company, not the vendor.

| Control | Configuration / action | Evidence |
|---|---|---|
| User access and role design | `<<FILL: roles mapped to least privilege>>` | `<<FILL>>` |
| Authentication (SSO / MFA) | `<<FILL: enforced via company IAM>>` | `<<FILL>>` |
| Audit trail enabled and protected | `<<FILL: enabled, not user-disableable, review defined>>` | `<<FILL>>` |
| Periodic access review | `<<FILL: frequency, owner>>` | `<<FILL>>` |
| Configuration baseline recorded | `<<FILL: exported settings under change control>>` | `<<FILL>>` |
| Data export / archive routine | `<<FILL: format, frequency, integrity check>>` | `<<FILL>>` |
| Integration / interface controls | `<<FILL: validated data exchange>>` | `<<FILL>>` |
| CUECs from supplier audit report | `<<FILL: list each CUEC and how met>>` | `<<FILL>>` |

## 9. Configuration versus the vendor-managed platform

Draw a clear line between settings within the vendor platform and any code-level customization, because the two carry different validation effort and different exposure to vendor updates.

| Item | Entry |
|---|---|
| Configuration items (platform settings) | `<<FILL: workflows, business rules, fields, templates, e-signature settings>>` |
| Configuration baseline reference | `<<FILL: exported config / config spec ID>>` |
| Customizations (code / scripts / modules) | `<<FILL: list, or "none">>` |
| Customization validation effort | `<<FILL: customizations need fuller testing than configuration>>` |
| Change control for configuration | `<<FILL: company change control SOP-ID>>` |
| Impact of vendor releases on configuration | `<<FILL: how a vendor update could alter or reset config, and how detected>>` |

Configuration of a vendor-managed platform is verified through testing the configured behavior; you are not validating the vendor's code, which sits behind the supplier assessment. Customization, by contrast, is your code in the vendor's environment and must be tested as such. Record which is which so the test effort in section 11 is proportionate and defensible.

## 10. Data location, retention, and portability

| Item | Entry |
|---|---|
| Primary data location / region | `<<FILL: country/region of storage>>` |
| Backup / DR location | `<<FILL: region, confirm acceptable for data residency>>` |
| Sub-processors and their locations | `<<FILL: list, including the CSP>>` |
| Cross-border transfer mechanism | `<<FILL: SCCs / adequacy / other, if personal data crosses borders>>` |
| Encryption at rest / in transit | `<<FILL: standard and key management>>` |
| Data retention in the application | `<<FILL: retention period and enforcement>>` |
| Archive / export format | `<<FILL: human-readable + structured, supports full reconstruction>>` |
| Records retention obligation | `<<FILL: company retention schedule, GxP minimums>>` |
| Exit / data return on termination | `<<FILL: format, timeframe, deletion certificate from vendor>>` |

The two questions that catch teams out: can you get your GxP records back, complete, in a usable format, if the vendor relationship ends, and can you keep the records for the full retention period even though the vendor may retain them for less. If the application's own retention is shorter than your obligation, your section 8 export routine is what closes the gap, and it must be qualified.

## 11. What the customer must still test

A supplier audit report and a vendor validation pack do not discharge the company's testing duty. The company tests its intended use, its configuration, its data, and its controls. Risk-based and critical-thinking-led under current CSA thinking: test the GxP-critical, high-risk functions deeply and rely on supplier evidence for the platform underneath.

| Test area | Tested by | Rationale |
|---|---|---|
| Configured GxP workflows behave as intended | Customer (UAT) | Only the company knows its intended use; the vendor cannot test your configuration. |
| Roles enforce least privilege and segregation | Customer | Access design is a customer-owned control. |
| Electronic records and signatures meet 21 CFR Part 11 / Annex 11 | Customer | Part 11 / Annex 11 fitness for your records is the customer's call. |
| Audit trail captures the right events and is reviewable | Customer | Configured and reviewed by the customer. |
| Data integrity across integrations / interfaces | Customer | Interfaces are usually customer-built and customer-owned. |
| Data export / archive reproduces complete records | Customer | The retention and exit control lives with the customer. |
| Business continuity from the customer side | Customer | The customer's process for a vendor outage. |
| Underlying infrastructure, hypervisor, platform patching | Rely on supplier evidence | Not customer-accessible; covered by audit report. |

| Item | Entry |
|---|---|
| Test approach and rigor (CSA risk-based) | `<<FILL: scripted for high-risk; unscripted/exploratory acceptable for low-risk>>` |
| Test protocol / script references | `<<FILL: UAT-ID, test script IDs>>` |
| Regression approach for vendor releases | `<<FILL: targeted regression on GxP-critical functions after each release>>` |

## 12. Acceptance criteria

This system is accepted as qualified for GxP use only when all of the following are true.

| Criterion | Requirement |
|---|---|
| Responsibility | Every control in section 6 has one accountable party and a stated verification route. |
| Supplier | The supplier assessment is approved and current; relied-on audit reports cover this service and region, with exceptions and CUECs assessed. |
| Customer controls | All section 8 controls, including CUECs, are configured and evidenced. |
| Configuration | The configuration baseline is recorded under change control; customizations are identified and tested accordingly. |
| Data | Location, residency, retention, and exit/return arrangements are documented and acceptable; export reproduces complete records. |
| Testing | All customer-owned high-risk functions passed; defects are resolved or risk-accepted with rationale. |
| Part 11 / Annex 11 | Electronic record and signature controls are confirmed fit for the records held. |
| Re-assessment | A periodic re-assessment schedule and trigger list are defined in section 13. |

## 13. Periodic re-assessment

A cloud qualification is a point in time; the vendor keeps changing the system under you. Define when the qualified state is re-confirmed, by schedule and by trigger.

| Item | Entry |
|---|---|
| Periodic re-assessment frequency | `<<FILL: by risk, e.g. annual for high GxP impact>>` |
| Supplier evidence refresh | `<<FILL: obtain new SOC 2 / ISO certificate each cycle; confirm continuous coverage, no gaps>>` |
| Event triggers for re-assessment | `<<FILL: major vendor release, new sub-processor, region change, security incident, SLA breach, ownership change>>` |
| Vendor release monitoring | `<<FILL: how release notes are received and assessed for GxP impact>>` |
| Re-assessment record | `<<FILL: report ID, owner, QA approval>>` |

The single most common cloud gap is a supplier whose SOC 2 audit periods leave an uncovered gap between reports, or a new sub-processor added without notice. Re-assessment checks both: continuous audit coverage with no gap, and the current sub-processor list against the one you assessed.

## 14. Acceptance and approval

| Item | Entry |
|---|---|
| Qualification outcome | `<<FILL: Qualified / Qualified with conditions / Not qualified>>` |
| Conditions / open items | `<<FILL: list with owners and due dates, or "none">>` |
| Residual risk statement | `<<FILL: residual risks accepted, with rationale>>` |
| Next re-assessment due | `<<FILL: date>>` |

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (System Owner) | `<<FILL>>` | | |
| Reviewer (IT Quality) | `<<FILL>>` | | |
| Reviewer (Process Owner) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

## 15. References

> 21 CFR Part 11 (electronic records and electronic signatures).
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment).
> EU GMP Annex 11 (computerised systems), including supplier and service provider expectations.
> EU GMP Chapter 7 (outsourced activities).
> FDA Computer Software Assurance for Production and Quality System Software, final guidance, 24 September 2025.
> GAMP 5 (Second Edition) and the ISPE GAMP Good Practice Guide on IT infrastructure and cloud / SaaS.
> PIC/S PI 011 (good practices for computerised systems) and PIC/S PI 041 (data management and integrity).
> ICH Q9 (Quality Risk Management) for the risk-based scope and re-assessment frequency.
> ISO/IEC 27001 (information security management); ISO/IEC 27017 (cloud security) and ISO/IEC 27018 (PII in public clouds) where relied on.

Confirm the current version and clause numbers of each reference before issue.

## 16. Attachments

| No. | Attachment |
|---|---|
| 1 | Supplier assessment / audit report |
| 2 | Third-party certifications (SOC 2 Type II, ISO 27001, etc.) |
| 3 | Shared-responsibility matrix (if maintained separately) |
| 4 | Configuration baseline export |
| 5 | UAT / test scripts and results |
| 6 | Data processing agreement and sub-processor list |

## 17. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

---

## Filled specimen

The following shows the responsibility, supplier, and acceptance sections completed for an example multi-tenant SaaS quality management system, so you can see the level of detail an inspector expects. The company, vendor, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Application | Cloud QMS, release channel "Production", continuous releases with a customer sandbox |
| Service / deployment model | SaaS, public multi-tenant |
| SaaS vendor / CSP / region | Vendor Q, hosted on a major public cloud, EU (Frankfurt) region |
| GAMP 5 category | Category 4 (configured) |
| Shared-responsibility split | Customer owns data, users, roles, configuration, audit trail review, export. Vendor owns code, platform patching, availability, tenant separation. CSP owns physical and infrastructure layers. |
| Supplier assessment | Remote audit, approved. SOC 2 Type II for the period 01 Jan 2025 to 31 Dec 2025, scope confirmed to name the QMS service and the EU region, with the next re-assessment to obtain the report covering calendar 2026. ISO/IEC 27001 valid to 30 Sep 2027. |
| SOC 2 review outcome | Two exceptions, both low impact and remediated. Four CUECs handed back: access provisioning, MFA enforcement, audit trail review, and data export verification, all mapped to customer controls in section 8. |
| Customer controls implemented | SSO + MFA enforced, roles set to least privilege, audit trail enabled and reviewed weekly, weekly structured export to the company archive with an integrity check, quarterly access review. |
| Configuration vs customization | 11 configured workflows and 3 e-signature rules under change control; no code customization, so no customization testing required. |
| Data location / retention / exit | Primary and backup both in the EU region, residency acceptable. In-app retention 3 years; company obligation 10 years, closed by the weekly export to the company archive. Exit clause: full export in structured format within 30 days plus a deletion certificate. |
| What the customer tested | UAT on the 11 GxP workflows (scripted, high risk), role enforcement, Part 11 e-signature behavior, audit trail content, and export completeness. Unscripted exploratory testing on low-risk reporting screens. |
| Acceptance outcome | Qualified. No open conditions. Residual risk: continuous vendor releases, mitigated by sandbox-first review and targeted regression on the 11 critical workflows. Next re-assessment 12 months out, or on any major release. |

In this example the team drew the responsibility line first, read the SOC 2 report rather than filing it, pulled the four CUECs into its own control set, found the in-app retention was shorter than the legal obligation and closed the gap with a qualified export, tested only what it owned, and set re-assessment on both a clock and a trigger. That sequence, draw the line, evidence the supplier, claim the CUECs, test your own scope, schedule re-assessment, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this template prevents

- A control in the stack with no owner, because the company assumed the vendor had it and the vendor assumed the company did.
- A SOC 2 or ISO certificate on file but never read, with exceptions and CUECs unassessed and the customer controls never implemented.
- An audit report whose scope covers a different service or region than the one actually used.
- The supplier's validation pack treated as the company's validation, with no customer testing of intended use or configuration.
- Continuous vendor releases changing a validated system with no process to detect, assess, or regression-test the change.
- In-application data retention shorter than the GxP retention obligation, with no qualified export or archive to bridge it.
- No exit plan, so GxP records cannot be retrieved complete and usable if the vendor relationship ends.
- A new sub-processor or a changed data region added by the vendor and never re-assessed.
- A gap between consecutive SOC 2 audit periods, leaving a window with no independent assurance.

## How to adapt this template

1. Set your document number, owner, service model, and effective date in the header, and link your URS and risk assessment.
2. Adjust the shared-responsibility matrix in section 6 to your actual service model; an IaaS or PaaS arrangement moves more controls to the customer column than the SaaS-typical split shown.
3. Replace the certifications in section 7 with the exact reports you hold, confirm each one's scope and period, and list every CUEC the report hands back into section 8.
4. Separate true configuration from customization in section 9 so the testing in section 11 is proportionate.
5. Fill the data table in section 10 with your real regions, sub-processors, retention, and exit terms, and confirm the in-app retention against your legal obligation.
6. Set the re-assessment frequency and trigger list in section 13 to your risk level and your vendor's release cadence.
7. Confirm every regulation in section 15 against the current published version before issue.
