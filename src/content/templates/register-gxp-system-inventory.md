---
title: "GxP Computerized System Inventory Register"
description: "A plug-and-play register with one row per computerized system: ownership, GxP determination and basis, GAMP category, criticality tier, regulated records held, Part 11 and Annex 11 applicability, validation status and last validation date, periodic review due date, supplier, hosting, data classification, and decommission status, with maintenance rules and a filled specimen."
pubDate: 2026-06-22
docType: "Log"
pillar: "csv-csa"
relatedArticles: ["gxp-system-inventory-classification", "gxp-computerized-systems-operations"]
tags: ["computerized systems", "system inventory", "GAMP", "CSV", "21 CFR Part 11", "Annex 11", "periodic review", "register", "log"]
tier: "Intermediate"
---

This is a ready-to-use register of computerized systems. It is the master list every other control depends on: you cannot show an inspector a validation state, a periodic review schedule, or a Part 11 scope for systems you have not inventoried, and the most common opening finding in a computer system inspection is a system in use that was never on a list. Replace every `<<FILL: ...>>` placeholder, keep one row per system, set your own document numbers and dates, and route the register through your normal document control, review, and approval. A worked filled specimen follows so you can see how a completed register reads. Verify each cited regulation against the current source before you rely on it. Maintaining this register does not by itself create compliance; it makes the state of your estate visible so the rest of the system can act on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | GxP Computerized System Inventory Register |
| Document number | `<<FILL: LOG-ID, e.g. LOG-QA-CSV-001>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Register owner | `<<FILL: role, e.g. CSV / Computerized Systems Lead, Quality>>` |
| Approvers | `<<FILL: e.g. Head of Quality, Head of IT/Validation>>` |
| Applies to | `<<FILL: sites / business units in scope>>` |
| Review cadence | `<<FILL: e.g. quarterly reconciliation, full review annually>>` |

## How to use this register

1. Set the document number, owner, and approvers in the header.
2. Enter one row per computerized system in scope. A system is in scope if it creates, modifies, stores, transmits, or uses data that supports a GxP decision, including spreadsheets, standalone instrument workstations, and cloud applications, not only the large validated platforms.
3. Complete the GxP determination column with a Yes or No and a short basis. A No still gets a row, with the basis recorded, so the decision is defensible later.
4. For GxP systems, complete the GAMP category, criticality tier, Part 11 and Annex 11 applicability, validation status, and periodic review due date.
5. Link each row to its supporting records (validation report number, periodic review record, system risk assessment).
6. Keep the register under change control. Reconcile it on the cadence in the header and update it whenever a trigger occurs.

## Field definitions

Use these definitions so every entry is consistent. The same field meanings apply to the blank register and the filled specimen below.

| Column | What goes in it | Allowed values / format |
|---|---|---|
| System ID | Unique internal identifier for the system | Short code, e.g. SYS-001 |
| System name and version | Common name plus the version or release in production | Text |
| Business owner | The accountable user-side owner (function that relies on the system) | Role / name |
| System owner | The accountable owner for the system lifecycle and validated state | Role / name |
| GxP determination | Whether the system is GxP, with a one-line basis | Yes / No + basis |
| GAMP category | Software category that sets the validation approach | 1, 3, 4, or 5 |
| Criticality tier | Risk-based tier driving rigor and review frequency | High / Medium / Low |
| Regulated records held | The GxP records the system creates or stores | Text |
| Part 11 / Annex 11 applicability | Whether electronic records and signatures rules apply | Yes / No + scope note |
| Validation status | Current state of the validated condition | Validated / In validation / Not required / Retired |
| Last validation date | Date validation (or last revalidation) was completed | Date |
| Periodic review due | Date the next periodic review is due | Date |
| Supplier | Vendor of the software | Text |
| Hosting | Where the system runs | On-prem / SaaS / Hosted / Hybrid |
| Data classification | Confidentiality / sensitivity class per company policy | e.g. Restricted / Confidential / Internal |
| Decommission status | Active or retirement state | Active / Planned retirement / Retired-archived |

### GAMP category at a glance

These are the GAMP 5 (2nd ed.) software categories. Use them to set the validation effort, not to skip a risk assessment.

| Category | Meaning (in plain terms) | Typical validation emphasis |
|---|---|---|
| 1 | Foundational layer the applications run on, such as operating systems, database engines, and network or middleware services | Qualified infrastructure; record version and patch control |
| 3 | Off-the-shelf product run as delivered, with no setup beyond its out-of-the-box behavior | Verify intended use; risk-based testing of GxP functions |
| 4 | Commercial product tailored to your process through built-in settings and parameters, without writing code | Validate the configuration and the GxP-relevant workflows |
| 5 | Software written or coded for your needs, including bespoke applications and user-authored scripts or macros | Full lifecycle rigor; design review and code-level controls |

### Criticality tier and what it drives

| Tier | Basis | Drives |
|---|---|---|
| High | Direct impact on product quality, patient safety, or batch / lot disposition | Most rigorous validation, tightest review frequency, shortest periodic review interval |
| Medium | Indirect or supporting GxP impact | Moderate validation, periodic review on a standard interval |
| Low | Minor GxP relevance, reference or non-decision data | Reuse supplier evidence where justified, longest periodic review interval |

## Register (blank)

Keep one row per system. Wide registers are usually maintained in a controlled spreadsheet or a validated inventory tool; the columns below are the controlled minimum. Split into two stacked tables if your page is narrow, but keep the System ID as the key in both.

| System ID | System name and version | Business owner | System owner | GxP (Y/N + basis) | GAMP cat | Tier |
|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

| System ID | Regulated records held | Part 11 / Annex 11 | Validation status | Last validation | Periodic review due | Supplier | Hosting | Data class | Decommission |
|---|---|---|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## Rules for keeping the register current

The value of an inventory is its accuracy on the day an inspector asks for it. A register that was right at go-live and never updated is worse than no register, because it asserts a state that is no longer true. Maintain it against the triggers and cadence below.

### Triggers that require an update before the change takes effect

| Trigger | Action | Owner |
|---|---|---|
| New system introduced (including a new spreadsheet used for a GxP calculation, a new standalone instrument, or a new SaaS subscription) | Add a row and complete the GxP determination before the system is used for GxP work | System owner with register owner |
| Version upgrade, major configuration change, migration, or re-hosting | Update version, validation status, last validation date, and re-evaluate GAMP category and tier | System owner |
| Change in GxP use (a system starts or stops holding regulated records) | Re-run the GxP determination and update the basis, Part 11 / Annex 11 scope, and tier | Business owner with Quality |
| Ownership change (people or function) | Update business owner and system owner | Register owner |
| Supplier or hosting change | Update supplier, hosting, and supplier assessment reference | System owner |
| Periodic review completed | Update the periodic review due date to the next interval | Register owner |
| Retirement / decommission | Set decommission status, record the data archival or migration reference, and the retention end date | System owner with Quality and IT |

### Periodic reconciliation

- On the cadence stated in the header, the register owner reconciles the register against an independent source (for example the IT asset list, the access management list, software purchase records, and validation document indexes) to find systems that are in use but missing from the register, and entries that should be retired.
- Discrepancies are logged and corrected under change control, with a short note of how each gap arose so the process can be improved.
- The reconciliation is itself recorded, dated, and signed, so the act of keeping the register current is evidenced.

### Ownership

- The register has one accountable owner (the register owner in the header). Distributed editing without a single owner is how inventories drift.
- Each row has a named business owner and a named system owner; an unowned system is a finding waiting to happen and should be resolved, not parked.

## Acceptance criteria

- Every computerized system that creates, modifies, stores, transmits, or uses GxP data has a row, including spreadsheets, standalone instrument workstations, and cloud applications.
- Each row records a GxP determination with a one-line basis, including the No determinations.
- For each GxP system, the GAMP category, criticality tier, Part 11 and Annex 11 applicability, validation status, last validation date, and periodic review due date are populated and current.
- Each GxP row links to its supporting records (validation report, periodic review record, system risk assessment, supplier assessment).
- The register is under change control, reconciled on the stated cadence, and updated against the defined triggers before changes take effect.
- No system is in production GxP use without a corresponding row.

## Roles and responsibilities

| Role | Responsibility |
|---|---|
| Register owner (CSV / Computerized Systems Lead) | Maintains the register, runs reconciliation, ensures one owner per row, controls versions. |
| Business owner | Confirms GxP use and the records held; raises changes in use. |
| System owner | Keeps version, GAMP category, validation status, hosting, and supplier current; drives validation and periodic review for the system. |
| Quality Assurance | Approves the register, confirms GxP determinations are defensible, oversees the link to validation and periodic review. |
| IT | Provides the independent asset and access lists for reconciliation; maintains hosting and infrastructure qualification state. |

## Regulations this supports

> 21 CFR Part 11 (electronic records and electronic signatures); EU GMP Annex 11 (2011, computerised systems) and EU GMP Chapter 4 (documentation); GAMP 5 (2nd ed.), ISPE (software categories and risk-based validation); FDA guidance "Computer Software Assurance for Production and Quality System Software" (final, 24 Sep 2025); MHRA GxP Data Integrity Guidance (2018); PIC/S PI 041; ICH Q9(R1) (2022) for risk-based prioritization.

Cite these by number and title only and confirm the current version before you rely on any of them.

## Retention

Retain the register and its superseded versions as controlled records for not less than `<<FILL: retention period per records policy>>`. Retired-system rows stay in the register (or a controlled retired-systems annex) with their archival reference for the full record retention period of the data those systems held.

---

## Filled specimen

The following shows representative rows for a small estate, including the spreadsheet and standalone monitoring system that inventories most often miss. Company and system names are fictional and used only to illustrate format.

**Register header (specimen)**

| Field | Entry |
|---|---|
| Document title | GxP Computerized System Inventory Register |
| Document number | LOG-QA-CSV-001 |
| Version | 4.0 |
| Effective date | 12 May 2026 |
| Register owner | CSV Lead, Quality (A. Rao) |
| Applies to | Acme Bio, Site B (drug substance and QC) |
| Review cadence | Quarterly reconciliation, full review annually |

**Identity and classification (specimen)**

| System ID | System name and version | Business owner | System owner | GxP (Y/N + basis) | GAMP cat | Tier |
|---|---|---|---|---|---|---|
| SYS-001 | LIMS-01 (LabTrack v8.2) | QC Manager | CSV Lead | Yes, holds QC release results | 4 | High |
| SYS-002 | CDS-01 (ChromaWorks v5.1) | QC Lab Lead | CSV Lead | Yes, generates release chromatography | 4 | High |
| SYS-003 | ERP-QM (NovaERP Quality module v2024.1) | QA Manager | IT Apps Lead | Yes, batch disposition and deviations | 4 | High |
| SYS-014 | Stability pull scheduler (controlled spreadsheet) | Stability Lead | QC Lab Lead | Yes, schedules and tracks GxP stability pulls | 5 | Medium |
| SYS-022 | EM-01 (EnviroMon v3.0 monitoring system) | Microbiology Lead | Facilities Lead | Yes, environmental monitoring data | 4 | Medium |

**Lifecycle and hosting (specimen)**

| System ID | Regulated records held | Part 11 / Annex 11 | Validation status | Last validation | Periodic review due | Supplier | Hosting | Data class | Decommission |
|---|---|---|---|---|---|---|---|---|---|
| SYS-001 | Sample results, specifications, CoA data | Yes, e-records + e-signatures | Validated | 18 Feb 2026 | 18 Feb 2027 | LabTrack Inc | On-prem | Restricted | Active |
| SYS-002 | Chromatograms, integration, sequences | Yes, e-records + e-signatures | Validated | 03 Nov 2025 | 03 Nov 2026 | ChromaWorks Ltd | On-prem | Restricted | Active |
| SYS-003 | Disposition decisions, deviations, CAPAs | Yes, e-records + e-signatures | Validated | 27 Jan 2026 | 27 Jan 2027 | NovaERP | SaaS | Confidential | Active |
| SYS-014 | Stability pull dates and confirmations | Yes, e-records (no e-sig; hybrid approval) | Validated | 09 Apr 2026 | 09 Apr 2027 | In-house (workbook) | On-prem | Internal | Active |
| SYS-022 | Viable/non-viable counts, alarms, trends | Yes, e-records + e-signatures | In validation | n/a (target 30 Jun 2026) | First review 30 Jun 2027 | EnviroMon GmbH | Hosted | Confidential | Active |

The register earns its keep in rows SYS-014 and SYS-022. The stability spreadsheet is a custom (category 5) GxP tool that an estate often treats as "just a spreadsheet" and leaves off every list; here it is owned, classified, validated, and on a review clock. The EM system is shown mid-validation, so the inventory truthfully reflects a not-yet-validated state with a target date rather than an empty cell that hides a gap. SYS-003 is a SaaS module, which keeps the hosting and supplier columns honest and points to the supplier assessment that the on-prem systems do not need in the same way.

## Common inspection findings this register prevents

- A system in GxP use that appears on no inventory, surfaced by the inspector before the company finds it.
- A spreadsheet or standalone instrument workstation performing a GxP function with no owner, no classification, and no validation.
- A periodic review that is overdue because nothing tracked the due date.
- A GxP determination that cannot be explained because the basis was never recorded.
- A retired system still listed as active, or a still-active system marked retired, because retirement was never driven through the register.
- Part 11 or Annex 11 scope that was never stated for systems holding electronic records and signatures.

## How to adapt this register

1. Set the document number, owner, and approvers; decide whether the controlled master lives in a spreadsheet or a validated inventory tool.
2. Seed the register by reconciling against IT asset lists, access lists, and validation indexes, so the first version is complete rather than convenient.
3. Sweep deliberately for spreadsheets, standalone instruments, and SaaS subscriptions; these are the rows that prevent findings.
4. Wire the triggers into your change control so a new or changed system updates the register before it goes live.
5. Set periodic review intervals by tier and let the register drive the schedule.
