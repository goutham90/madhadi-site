---
title: "Building a Data Governance Framework for GxP Operations"
description: "How to design and operate a data governance program: system inventory, criticality tiering, data ownership, data-flow mapping, risk assessment, and the organizational structure that sustains it."
pubDate: 2026-01-22
tags: ["data-integrity", "data-governance", "GxP", "FDA", "QMS"]
pillar: "data-integrity"
tier: "Advanced"
---

A data governance framework is the organizational layer that makes a data integrity program sustainable. You can build every technical control correctly, complete audit trails, individual user accounts, validated systems, and still have a fragile program if no one owns the problem at a system level, if there is no process for assessing new systems before they go into GxP use, and if there is no way to know what data you actually have.

This article is aimed at people building or assessing a data governance program at the site or enterprise level. The technical controls are covered elsewhere: [audit trail design](/articles/audit-trail-design-and-review), [data lifecycle management](/articles/data-lifecycle-and-metadata), and the [foundations of data integrity](/articles/data-integrity-foundations). What is covered here is the organizational infrastructure that makes those controls work at scale, and keeps them working through the staff turnover, system upgrades, and growth that erode every program over time.

A note on where this sits. If you are new to GxP, read [data integrity foundations](/articles/data-integrity-foundations) and [ALCOA+](/articles/alcoa-plus-deep-dive) first, then come back. The material below assumes you already understand what an audit trail is and why a shared login is a problem. If you are a senior or program-level reader, the sections on organizational structure, criticality tiering at the enterprise level, and remediation prioritization are where the value sits.

---

## What Data Governance Is (and Isn't)

Data governance is not the same as data integrity. Data integrity is a property, a characteristic of the data itself, usually described through ALCOA+ (attributable, legible, contemporaneous, original, accurate, plus complete, consistent, enduring, available). Data governance is the program that ensures that property is achieved and sustained across all GxP systems, over time, despite system changes, personnel changes, and organizational growth.

A data governance program answers three questions:

1. What GxP data do we have, and where does it live?
2. Who is responsible for its integrity at each stage of its lifecycle?
3. How do we ensure the controls remain effective as systems and processes evolve?

Without answers to these questions, data integrity is a reactive discipline. You fix problems after inspectors find them rather than preventing them. Companies that pass difficult DI inspections have systematic answers to all three. Companies that fail usually cannot answer the first one: they do not have a current, complete inventory of their GxP systems.

It is worth being precise about the regulatory basis, because data governance is not a buzzword that vendors invented. The MHRA's 2018 guidance, "GXP Data Integrity Guidance and Definitions," states directly that "data governance should address data ownership throughout the lifecycle, and consider the design, operation and monitoring of processes and systems." The PIC/S guidance PI 041-1, "Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments" (2021), devotes an entire section to data governance systems and expects management to take active ownership. The WHO Technical Report Series 1033, Annex 4 (2019) carries the same expectation. These are not optional reading. When an inspector asks "show me your data governance program," they are quoting a documented expectation, not improvising.

Data governance also is not the same as IT governance. IT governance worries about uptime, security patching, and license management. Data governance worries about whether the record that supports a lot release decision is attributable, complete, and protected from undetected change. The two overlap heavily and must coordinate, but a healthy IT function does not by itself produce a defensible GxP data record.

---

## The System Inventory

The starting point for any data governance program is knowing what you have. This sounds trivial. It is not.

In a mid-size pharmaceutical operation, there may be 40 to 80 computerized systems that touch GxP data in some way: instruments with embedded firmware, standalone laboratory informatics systems, manufacturing execution systems, quality management systems, document management platforms, enterprise resource planning modules, and clinical data systems. Some of these are formally validated. Others have been running for years in a semi-validated state. Others are informal tools, often spreadsheets, that analysts use without IT visibility. The spreadsheet that calculates a result and feeds it into a batch record is a GxP system even if no one ever treated it as one. See [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation) for why those are the easiest items to miss and the most common to draw a citation.

A system inventory should capture, for each system:

- System name and version
- Business function and the GxP activities it supports
- GxP applicability (is it GMP, GLP, GCP, GDP, or a mix)
- Data types generated (results, batch records, deviations, approvals, and so on)
- Validation status and date of last qualification or periodic review
- Data criticality tier (see below)
- System owner (an individual, not a team)
- Location and configuration of audit trail data, including retention settings
- Interfaces to and from other systems
- Hosting model (on-premise, vendor-hosted, or cloud or SaaS)

That last field matters more every year. A [cloud or SaaS system](/articles/cloud-saas-validation) shifts part of the control to a vendor, and the inventory should make that shared responsibility visible rather than hiding it.

Building this inventory for the first time is slow work. A reliable way to find the hidden systems is to start from the data, not the IT asset register: walk a few real processes end to end and write down every place a number is created, transformed, or stored. Spreadsheets, instrument data stations, and small departmental databases surface fast when you do this, and they are exactly the items missing from the IT asset list.

Keeping the inventory current requires a process, not goodwill. The reliable mechanism is to wire it into [change control](/articles/change-control-validated-systems): any new system, significant upgrade, interface change, or decommissioning event triggers a mandatory inventory update before the change can close. An inventory that is refreshed only during inspection prep is, by definition, wrong most of the time.

---

## Data Criticality Tiering

Not all GxP data carries the same risk. Applying the same level of oversight to a room temperature monitoring system as to a lot release system misallocates resources and, worse, dilutes attention away from the records that actually decide patient outcomes. A criticality-based tier model allows proportionate controls and gives you a defensible answer when an inspector asks why one system gets daily audit trail review and another gets quarterly.

A common three-tier model:

| Tier | Meaning | Examples | Typical controls |
|---|---|---|---|
| Tier 1, Critical | Data that directly supports lot release, regulatory submission, product safety, or patient identification decisions | Final release assay results, batch manufacturing records, certificate of analysis data, potency results, chain of custody for patient-derived materials | Highest audit trail review frequency, strict access control with segregation of duties, periodic qualification review, formal change control |
| Tier 2, Supporting | Data that indirectly supports GxP decisions or is required for regulatory documentation but does not directly determine lot disposition | In-process monitoring records, equipment calibration records, environmental monitoring trends, training records | Periodic audit trail review, standard access controls, scheduled periodic review |
| Tier 3, Peripheral | Data used for operational efficiency or trending, not required for any individual GxP decision | Utility monitoring, non-GxP administrative records, capacity planning tools | Baseline controls proportionate to context, light or exception-based review |

The tiering should be documented, reviewed by QA, and linked to the specific control requirements for each tier so that the tier assignment actually drives behavior. The rationale for each system's tier is part of the governance record, and it should be revisited when a system's use changes. A monitoring system that was Tier 3 becomes Tier 1 the moment its output starts supporting a release decision, and that transition is easy to miss.

One caution from practice: do not let tiering become a way to argue critical systems down into a lower tier to save effort. The tier should follow the worst GxP decision the data can influence, not the typical one. This connects directly to [data integrity risk assessment](/articles/csv-risk-assessment-methodology), where the same conservative logic applies.

---

## Data Ownership Model

For every system in Tier 1 and Tier 2, there should be a named individual who owns the data integrity of that system. Not a team, not a department. A person. Shared ownership is no ownership; when everyone is accountable, no one is.

The data owner is accountable for:

- Ensuring the system's audit trail is configured correctly and stays configured correctly through changes
- Ensuring periodic audit trail review occurs on schedule and that findings are actioned
- Escalating access control issues such as shared accounts, dormant accounts, or inappropriate privileges
- Managing the system's data lifecycle, including retention periods, archival, and decommissioning
- Coordinating with IT on changes that could affect data integrity controls
- Confirming, at periodic review, that the system still does what its validation says it does

The data owner is not necessarily the system administrator or the power user. They are the person who understands the GxP criticality of the system and is accountable for its data quality. In practice this is often the department head who relies most heavily on the system: the analytical QC director for a chromatography data system, the manufacturing lead for a manufacturing execution system. There is a deliberate segregation here. The owner sets and verifies the controls; the IT administrator implements them. Letting the same person hold both roles removes the independence that makes the control credible. This mirrors the broader [roles and responsibilities](/articles/gxp-roles-responsibilities) structure a quality system needs.

Ownership assignments should be documented, reviewed at least annually, and reassigned promptly when people change roles or leave. An ownership record that still names someone who left eighteen months ago is a finding waiting to happen, and it usually signals that the periodic review behind it never ran either.

---

## Data Flow Mapping

A data flow map documents how data moves from system to system: where it originates, what transformations it undergoes, and where it ends up. This is the tool that makes data transfer risks visible, and it is the single most useful artifact most programs are missing.

For a typical analytical result, the data flow might look like:

```
Instrument (raw acquisition) -> CDS (integration / calculation) ->
LIMS (result storage / specification check) ->
Batch Record (summary reporting) ->
Regulatory Submission (data package compilation)
```

Each arrow in that diagram is a transfer point. At each transfer point there are integrity risks: truncation, rounding or reformatting, loss of metadata, manual transcription error, or silent unit conversion. A data flow map makes these risks explicit so that controls can be applied at each point. The classic failure mode is a manual re-key from an instrument printout into a spreadsheet: the original electronic record, with its audit trail, never makes it downstream, and the number that reaches the batch record cannot be traced back to source.

For each transfer, the map should record what moves (the data element), how it moves (automated interface, file export, or manual entry), and how integrity is verified (interface checksum, second-person verification, or reconciliation). A useful refinement is to mark, on the map, where the original record lives for each data element, because under ALCOA+ you must be able to retrieve the original, not just a downstream copy.

Data flow mapping is expected by every major data integrity guidance. The FDA's 2018 guidance, "Data Integrity and Compliance With Drug CGMP: Questions and Answers," frames data integrity around the full lifecycle of data creation, processing, and storage. The MHRA and PIC/S guidance both expect organizations to understand where data is generated, how it is transferred, where it is stored, and who has access to it. You cannot perform a meaningful DI risk assessment on a system you have not mapped, which is why mapping comes before scoring.

---

## DI Risk Assessment Methodology

A DI risk assessment evaluates each system, or each data type within a system, against the likelihood that integrity could be compromised and the consequence if it is. It produces a prioritized list of gaps and remediation actions. It is not a paperwork exercise; done honestly, it tells you where to spend the next year of remediation budget.

A practical approach uses a simplified version of the framework in ICH Q9(R1), "Quality Risk Management" (the R1 revision was adopted in 2023 and adds emphasis on subjectivity and formality of risk approaches). The principle to borrow from Q9 is proportionality: the effort, formality, and documentation of the risk process should scale with the risk and complexity involved.

**Risk factors to evaluate:**

| Factor | Questions to ask |
|---|---|
| Data criticality | What decisions depend on this data? What is the consequence of a wrong decision? |
| Access controls | Who can create, modify, or delete data? Are shared accounts in use? Is there segregation of duties? |
| Audit trail completeness | Does the trail capture prior values, the user, and the time? Who can clear, disable, or alter it? |
| System maturity | Is the system validated? How current is the validation? Is it vendor-supported? |
| Interface controls | How is data transferred to and from this system? Are transfers verified or reconciled? |
| Detectability | If a record were altered or deleted, how would anyone find out, and how quickly? |
| Retention adequacy | Will data be readable and retrievable in its original form for the required period? |

Score each factor (for example, 1 to 3) and combine into an overall risk rating. The detectability factor is the one teams most often forget, and it is the one inspectors care about most: a control gap that no review would ever catch is far more dangerous than one that surfaces at the next periodic check.

The rating determines remediation priority and the level of ongoing oversight a system requires. Review the assessment at least annually and update it after any significant system change, significant process change, or significant finding, whether that finding is at your own site or at a comparable operation in the industry. When a [warning letter](/articles/fda-warning-letters-patterns) describes a failure mode you also have, that is a trigger to re-score, not a reason to wait. For the mechanics of finding gaps in the first place, see [DI gap assessment methodology](/articles/di-gap-assessment-methodology).

---

## The New System Assessment Process

One of the highest-value governance controls is the pre-deployment assessment: evaluating a new system against data integrity requirements before it goes into GxP use. This prevents the slow accumulation of systems that were deployed without DI in mind and then must be remediated, expensively, later. Fixing an audit trail gap before purchase is a contract negotiation; fixing it after deployment is a validated change, a vendor escalation, and sometimes a system replacement.

A pre-deployment DI assessment covers:

- Does the system have an audit trail, and at what level of completeness? Can it be disabled, and if so, by whom?
- Can individual user accounts be created and managed, with role-based privileges and segregation of duties?
- How are electronic signatures implemented, and do they meet the [Part 11 and Annex 11](/articles/21-cfr-part-11-eu-annex-11) expectations for signature/record linking and meaning?
- What are the data storage, backup, and retention capabilities? Can original records be exported in a readable, complete form?
- What interfaces does the system need, and how will transfer integrity be verified?
- Is there a validated migration path if the system is later decommissioned, so data remains retrievable?
- Does the vendor provide a GxP and Part 11 compliance documentation package, and will they support a supplier audit?

These requirements belong in the user requirements specification (URS) for any new GxP system. Write the DI requirements into the URS as testable statements, and require the vendor's compliance documentation to address them before purchase or contract. This is also where [supplier and vendor qualification](/articles/supplier-vendor-qualification) and the validation approach under [GAMP 5](/articles/gamp5-csv-framework) connect: the vendor's documented capability reduces, but never eliminates, the validation burden you carry. A modern, risk-based path through this is described in [computer software assurance](/articles/computer-software-assurance-fda).

---

## Organizational Structure

Data governance does not sustain itself. It requires defined accountability and a routine review cadence, backed by management that actually shows up.

**What works in practice.**

A data integrity committee, or its equivalent, that meets quarterly and includes the site Quality Director or equivalent, the department heads for areas with Tier 1 systems, IT leadership, and the data governance lead. The committee reviews the system inventory, the status of outstanding DI findings and remediation, the results of periodic audit trail reviews, and any new system assessments in progress. Minutes are kept, actions are tracked to closure, and senior management attendance is real rather than delegated. Both the MHRA and PIC/S guidance are explicit that senior management is responsible for the governance system, so an inspector reading committee minutes is checking whether leadership engagement is genuine.

A dedicated data governance role: someone whose job includes maintaining the system inventory, coordinating DI risk assessments, tracking remediation, and supporting the committee. In a smaller organization this does not have to be a full-time post, but it must be assigned to a named person with protected time. Governance that is everyone's spare-time job is no one's job.

This structure should connect upward into the [pharmaceutical quality system](/articles/pharmaceutical-quality-system) and into management review, not run as a parallel island. Data integrity metrics, open findings, audit trail review backlog, overdue periodic reviews, belong in the same management review that looks at deviations and CAPAs.

**What does not work.**

Assigning data governance to QA as an unfunded add-on. Treating the system inventory as a one-time project rather than a living document. Performing DI risk assessments once and never updating them. Writing a data governance policy without building the process and accountability that give it teeth. Each of these produces a binder that looks compliant and a program that is not, which is precisely the gap an experienced inspector probes for.

---

## Remediation Planning

Most organizations that build a data governance program from scratch will find gaps. Some will be significant. The remediation process has to be honest about timeline and resource and has to prioritize by risk, not by what is easy.

Prioritization framework:

1. **Immediate (0 to 90 days):** Critical control gaps on Tier 1 systems. Shared user accounts, disabled or absent audit trails, missing prior-value capture on release systems, the ability of an analyst to delete or overwrite original data with no trace. These are the failure modes that turn into [warning letters](/articles/fda-warning-letters-patterns), and several need interim procedural controls in place within days while the permanent fix is built.
2. **Short-term (3 to 6 months):** Control gaps on Tier 1 systems that require configuration changes or procedural updates rather than emergency action.
3. **Medium-term (6 to 18 months):** Control gaps on Tier 2 systems, legacy system upgrades or replacements, and [data migration](/articles/data-migration-validation) out of unsupported formats.
4. **Long-term (18+ months):** Enterprise architecture changes, system consolidations, validated interfaces replacing manual transfers, and improved reporting infrastructure.

For gaps that cannot be closed immediately, define an interim control and document it. A shared account that cannot be eliminated this week can be wrapped in a logged, second-person-witnessed procedure until individual accounts are provisioned. The interim control is not the fix, but it is the difference between a managed risk and an open one.

The remediation plan should be documented, approved by QA and site leadership, and maintained as a living document with status tracking. If an inspection occurs while remediation is in progress, a documented plan with clear milestones, owners, and dates is a meaningful mitigating factor. An undocumented effort, however sincere, is not, because the inspector has no way to distinguish it from inaction. For a structured program-level approach to running this end to end, see [DI remediation program](/articles/di-remediation-program) and [retroactive validation of legacy systems](/articles/retroactive-validation-legacy-systems).

---

## The Governance Audit

A useful self-assessment tool is the governance audit: periodically walking the data flow for one specific, complete process, say, a full analytical result from instrument acquisition through batch disposition, and evaluating the integrity controls at every step against documented requirements.

This is not the same as a system audit, which evaluates a single system, or an audit trail review, which evaluates specific records. The governance audit looks at the chain as a whole and asks a blunt question: does data integrity governance actually work end to end for a real business process? You follow one number from the moment the instrument creates it to the moment it appears on a certificate of analysis, checking attributability, the survival of metadata, the verification of each transfer, and whether the original record is still retrievable at each stage.

The output is a gap analysis and an updated risk assessment. The findings feed straight into the remediation plan and the next risk-assessment cycle, which is what keeps the whole program from going stale. Organizations that do this regularly, quarterly for critical processes, annually for supporting processes, find their own problems before regulators do. That is the entire goal of a mature data governance program, and it pairs naturally with a periodic [DI self-audit checklist](/articles/di-self-audit-checklist) and a broader [internal audit program](/articles/internal-audit-program).

A final point worth holding onto. None of this is one and done. Systems get upgraded, vendors change hosting models, people move on, and a process that was mapped correctly two years ago drifts. The value of a governance framework is not the inventory or the tier model or the committee in isolation; it is the cadence that keeps all of them honest. A program that re-walks its own data flows, re-scores its own risks, and re-confirms its own ownership on a schedule is one that stays inspection-ready as a side effect of being well run, rather than as a frantic project every time an inspection is announced.
