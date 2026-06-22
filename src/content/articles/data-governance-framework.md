---
title: "Building a Data Governance Framework for GxP Operations"
description: "How to design and operate a GxP data governance program: system inventory, criticality tiering, data ownership, data-flow mapping, risk assessment, governance committee, and the remediation process that sustains it."
pubDate: 2026-01-22
tags: ["data-integrity", "data-governance", "GxP", "FDA", "QMS"]
pillar: "data-integrity"
tier: "Advanced"
---

A data governance framework is the organizational layer that makes a data integrity program sustainable. You can build every technical control correctly, complete audit trails, individual user accounts, validated systems, and still have a fragile program if no one owns the problem at a system level, if there is no process for assessing new systems before they go into GxP use, and if there is no way to know what data you actually have.

This article is aimed at people building or assessing a data governance program at the site or enterprise level. The technical controls are covered elsewhere: [audit trail design](/articles/audit-trail-design-and-review), [data lifecycle management](/articles/data-lifecycle-and-metadata), and the [foundations of data integrity](/articles/data-integrity-foundations). What is covered here is the organizational infrastructure that makes those controls work at scale, and keeps them working through the staff turnover, system upgrades, and growth that erode every program over time.

A note on where this sits. If you are new to GxP, read [data integrity foundations](/articles/data-integrity-foundations) and [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) first, then come back. The material below assumes you already understand what an audit trail is and why a shared login is a problem. If you are a senior or program-level reader, the sections on organizational structure, criticality tiering at the enterprise level, and remediation prioritization are where the value sits. The framework applies across the GxP family: a small-molecule plant, a biologics fill-finish line, a medical device manufacturer running design and production records, a clinical operations group managing trial data, and a distribution business under GDP all need the same governance spine.

---

## What Data Governance Is (and Isn't)

Data governance is not the same as data integrity. Data integrity is a property, a characteristic of the data itself, usually described through ALCOA+ (attributable, legible, contemporaneous, original, accurate, plus complete, consistent, enduring, available). Data governance is the program that ensures that property is achieved and sustained across all GxP systems, over time, despite system changes, personnel changes, and organizational growth.

A data governance program answers three questions:

1. What GxP data do we have, and where does it live?
2. Who is responsible for its integrity at each stage of its lifecycle?
3. How do we ensure the controls remain effective as systems and processes evolve?

Without answers to these questions, data integrity is a reactive discipline. You fix problems after inspectors find them rather than preventing them. Companies that pass difficult DI inspections have systematic answers to all three. Companies that fail usually cannot answer the first one: they do not have a current, complete inventory of their GxP systems.

### The regulatory basis

Data governance is a documented expectation, not a buzzword that vendors invented. The specific sources an inspector will hold you to:

- **MHRA, "GXP Data Integrity Guidance and Definitions," March 2018.** States directly that "Data Governance should address data ownership throughout the lifecycle, and consider the design, operation and monitoring of processes and systems." It frames data governance as the sum of arrangements that ensure data are recorded, processed, retained, and used to assure a complete, consistent, and accurate record.
- **PIC/S PI 041-1, "Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments," July 2021.** Devotes a full section to data governance systems and is explicit that senior management is responsible for implementing systems and procedures to minimize the potential risk to data integrity, and for identifying the residual risk.
- **WHO Technical Report Series 1033, Annex 4, "Guideline on Data Integrity," 2019.** Carries the same lifecycle and management-ownership expectation.
- **FDA, "Data Integrity and Compliance With Drug CGMP: Questions and Answers," December 2018.** Ties data integrity to the existing CGMP regulations in 21 CFR Parts 210, 211, and 212, and reinforces management responsibility for a work environment that supports data integrity.
- **EU GMP Annex 11 (Computerised Systems)** and **21 CFR Part 11 (Electronic Records; Electronic Signatures)** supply the technical-control requirements that governance has to keep effective. See the [Part 11 and Annex 11 comparison](/articles/21-cfr-part-11-eu-annex-11).

For devices, the same logic lands through the **Quality Management System Regulation (21 CFR Part 820, harmonized to ISO 13485 as the QMSR effective February 2026)** and its record and document controls, and through **IEC 62304** for software lifecycle records. For nonclinical work, **21 CFR Part 58 (GLP)** carries record and archiving expectations. The vocabulary differs by predicate rule, but the governance question is identical: do you know what records you have, who owns them, and whether the controls still hold.

### What it is not

Data governance is not the same as IT governance. IT governance worries about uptime, security patching, and license management. Data governance worries about whether the record that supports a release decision is attributable, complete, and protected from undetected change. The two overlap heavily and must coordinate, but a healthy IT function does not by itself produce a defensible GxP data record. IT keeps the system running; governance makes sure the record the system holds can be trusted by a regulator and by a patient.

---

## The System Inventory

The starting point for any data governance program is knowing what you have. This sounds trivial. It is not.

In a mid-size regulated operation, there may be 40 to 80 computerized systems that touch GxP data in some way: instruments with embedded firmware, standalone laboratory informatics systems, manufacturing execution systems, quality management systems, document management platforms, enterprise resource planning modules, electronic data capture and clinical data systems, and warehouse or distribution management systems. Some are formally validated. Others have been running for years in a semi-validated state. Others are informal tools, often spreadsheets, that staff use without IT visibility. The spreadsheet that calculates a result and feeds it into a batch record is a GxP system even if no one ever treated it as one. See [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation) for why those are the easiest items to miss and the most common to draw a citation.

### What the inventory captures

A system inventory should capture, for each system:

- System name and version
- Business function and the GxP activities it supports
- GxP applicability (GMP, GLP, GCP, GDP, device QMS, or a mix)
- Data types generated (results, batch records, deviations, approvals, signatures, and so on)
- Validation status and date of last qualification or periodic review
- Data criticality tier (see below)
- System owner (an individual, not a team)
- Location and configuration of audit trail data, including retention settings and who can disable it
- Interfaces to and from other systems
- Hosting model (on-premise, vendor-hosted, or cloud or SaaS)
- GAMP software category (1, 3, 4, or 5) to set the validation approach, per [GAMP 5](/articles/gamp5-csv-framework)
- Record retention requirement and the legal basis for it

That hosting field matters more every year. A [cloud or SaaS system](/articles/cloud-saas-validation) shifts part of the control to a vendor, and the inventory should make that shared responsibility visible rather than hiding it.

### A worked inventory row

| Field | Value |
|---|---|
| System name / version | Chromatography Data System, v8.x |
| Business function | QC release and stability HPLC/UPLC analysis |
| GxP applicability | GMP |
| Data types | Raw chromatograms, integration parameters, calculated results, e-signatures |
| Validation status | Validated; last periodic review 2025-09 |
| Criticality tier | Tier 1 |
| System owner | QC Laboratory Director (named individual) |
| Audit trail | Enabled, immutable, 10-year retention; disable right restricted to one DB admin, logged |
| Interfaces | One-way result export to LIMS via validated interface |
| Hosting | On-premise, single instance, nightly backup |
| GAMP category | 4 (configured product) |
| Retention | Records retained 1 year past product expiry, minimum 5 years |

### How to build it the first time

Building this inventory for the first time is slow work. A reliable way to find the hidden systems is to start from the data, not the IT asset register: walk a few real processes end to end and write down every place a number is created, transformed, or stored. Spreadsheets, instrument data stations, and small departmental databases surface fast when you do this, and they are exactly the items missing from the IT asset list. Three sources triangulated together give the most complete picture: the IT asset register, the validation document index, and a physical or process walkdown of the labs, the production floor, and the QA office.

### Acceptance criteria

You know the inventory is good when: every GxP decision (a release, a disposition, a submission data point, a device record sign-off) can be traced to a system on the list; QA has reviewed and approved it; no spreadsheet or standalone instrument that produces a reportable result is missing; and a change-control trigger keeps it current. Keeping the inventory current requires a process, not goodwill. The reliable mechanism is to wire it into [change control](/articles/change-control-validated-systems): any new system, significant upgrade, interface change, or decommissioning event triggers a mandatory inventory update before the change can close. An inventory that is refreshed only during inspection prep is, by definition, wrong most of the time.

---

## Data Criticality Tiering

Not all GxP data carries the same risk. Applying the same level of oversight to a room temperature monitoring system as to a release system misallocates resources and, worse, dilutes attention away from the records that actually decide patient outcomes. A criticality-based tier model allows proportionate controls and gives you a defensible answer when an inspector asks why one system gets daily audit trail review and another gets quarterly.

A common three-tier model:

| Tier | Meaning | Examples | Typical controls |
|---|---|---|---|
| Tier 1, Critical | Data that directly supports lot release, regulatory submission, product safety, patient safety, or patient identification decisions | Final release assay results, batch manufacturing records, certificate of analysis data, potency results, sterility results, device history records, primary clinical efficacy and safety data | Highest audit trail review frequency, strict access control with segregation of duties, periodic qualification review, formal change control |
| Tier 2, Supporting | Data that indirectly supports GxP decisions or is required for regulatory documentation but does not directly determine disposition | In-process monitoring records, equipment calibration records, environmental monitoring trends, training records, distribution temperature logs | Periodic audit trail review, standard access controls, scheduled periodic review |
| Tier 3, Peripheral | Data used for operational efficiency or trending, not required for any individual GxP decision | Utility monitoring, non-GxP administrative records, capacity planning tools | Baseline controls proportionate to context, light or exception-based review |

### How to assign a tier

Run each system or data type through one question: what is the worst GxP decision this data can influence, and what happens if it is wrong? Answer for the worst case the data can reach, not the typical one. If a record can flow into a release, a submission, a recall decision, or a patient-safety report, it is Tier 1, full stop. If it informs those decisions only through aggregation or trending, it is Tier 2. If no individual GxP decision depends on it, it is Tier 3.

The tiering should be documented, reviewed by QA, and linked to the specific control requirements for each tier so that the tier assignment actually drives behavior. The rationale for each system's tier is part of the governance record, and it should be revisited when a system's use changes. A monitoring system that was Tier 3 becomes Tier 1 the moment its output starts supporting a release decision, and that transition is easy to miss.

One caution from practice: do not let tiering become a way to argue critical systems down into a lower tier to save effort. The tier should follow the worst GxP decision the data can influence, not the typical one. This connects directly to [data criticality and data risk](/articles/data-criticality-and-data-risk) and to [DI risk assessment](/articles/csv-risk-assessment-methodology), where the same conservative logic applies.

### Acceptance criteria

Tiering is sound when every system has a documented tier with a one-line rationale, the control set for each tier is written down (review frequency, access model, review cadence), QA has signed it, and re-tiering is triggered by change control whenever a system's use changes. If you cannot explain in one sentence why a given system sits in its tier, the tiering is decorative.

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

The data owner is not necessarily the system administrator or the power user. They are the person who understands the GxP criticality of the system and is accountable for its data quality. In practice this is often the department head who relies most heavily on the system: the QC director for a chromatography data system, the manufacturing lead for a manufacturing execution system, the clinical data manager for an electronic data capture platform, the device engineering lead for a design history record system. There is a deliberate segregation here. The owner sets and verifies the controls; the IT administrator implements them. Letting the same person hold both roles removes the independence that makes the control credible.

### A RACI for the common governance activities

| Activity | Data Owner | IT / System Admin | QA | Governance Lead | Management |
|---|---|---|---|---|---|
| Define DI control requirements | A | C | R | C | I |
| Configure audit trail and access | C | R | A | I | I |
| Periodic audit trail review | A/R | C | C | I | I |
| Approve user access changes | A | R | C | I | I |
| Maintain system inventory | C | C | C | R | A |
| New system DI assessment | C | C | A | R | I |
| Risk assessment and remediation | A | C | R | R | A |
| Governance committee oversight | I | C | C | R | A |

(A = accountable, R = responsible, C = consulted, I = informed. Tailor the letters to your org; the point is that accountability and execution sit with different people.) This mirrors the broader [roles and responsibilities](/articles/gxp-roles-responsibilities) structure a quality system needs, and the career path for the people who fill these seats is covered in [data governance roles and careers](/articles/data-governance-roles-and-careers).

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

### What to record at each transfer

For each transfer, the map should record what moves (the data element), how it moves (automated interface, file export, or manual entry), and how integrity is verified (interface checksum, second-person verification, or reconciliation). A useful refinement is to mark, on the map, where the original record lives for each data element, because under ALCOA+ you must be able to retrieve the original, not just a downstream copy. The distinction between an original, a true copy, and a downstream summary is its own topic; see [static and dynamic records and true copies](/articles/static-dynamic-records-true-copies).

### A worked transfer-point table

| # | From | To | Data element | Transfer method | Integrity control | Original record location |
|---|---|---|---|---|---|---|
| 1 | Instrument | CDS | Raw signal | Direct acquisition | Validated acquisition, audit trail on | CDS project file |
| 2 | CDS | LIMS | Calculated assay result | Validated one-way interface | Interface field-level checksum + exception report | CDS (raw + calc retained) |
| 3 | LIMS | Batch record | Pass/fail and reportable value | Manual entry by analyst | Second-person verification against LIMS | LIMS |
| 4 | Batch record | Submission package | Summary value | Manual compilation | QA reconciliation to source | LIMS / batch record |

Transfer #3 is the weak link in that chain: a manual entry with only a human check. The map tells you exactly where to invest, either in an automated interface or in a tighter verification step.

### Why it is required and when to do it

Data flow mapping is expected by every major data integrity guidance. The FDA's 2018 Q&A frames data integrity around the full lifecycle of data creation, processing, and storage. The MHRA and PIC/S guidance both expect organizations to understand where data is generated, how it is transferred, where it is stored, and who has access to it. You cannot perform a meaningful DI risk assessment on a system you have not mapped, which is why mapping comes before scoring. Map a system before its risk assessment, and refresh the map under change control when an interface, a transformation, or a storage location changes.

### Acceptance criteria

A flow map is good when every Tier 1 data element can be traced from source to its final regulated use, every transfer has a named integrity control, the location of the original is marked at each stage, and a knowledgeable reviewer can find no undocumented hop where a number is keyed, exported, or transformed without a control.

---

## DI Risk Assessment Methodology

A DI risk assessment evaluates each system, or each data type within a system, against the likelihood that integrity could be compromised and the consequence if it is. It produces a prioritized list of gaps and remediation actions. It is not a paperwork exercise; done honestly, it tells you where to spend the next year of remediation budget.

A practical approach uses a simplified version of the framework in **ICH Q9(R1), "Quality Risk Management"** (the R1 revision was adopted in 2023 and adds emphasis on subjectivity, formality of risk approaches, and risk-based decision making). The principle to borrow from Q9 is proportionality: the effort, formality, and documentation of the risk process should scale with the risk and complexity involved. For the broader QRM toolkit, see [quality risk management](/articles/quality-risk-management).

### Risk factors to evaluate

| Factor | Questions to ask |
|---|---|
| Data criticality | What decisions depend on this data? What is the consequence of a wrong decision? |
| Access controls | Who can create, modify, or delete data? Are shared accounts in use? Is there segregation of duties? |
| Audit trail completeness | Does the trail capture prior values, the user, and the time? Who can clear, disable, or alter it? |
| System maturity | Is the system validated? How current is the validation? Is it vendor-supported? |
| Interface controls | How is data transferred to and from this system? Are transfers verified or reconciled? |
| Detectability | If a record were altered or deleted, how would anyone find out, and how quickly? |
| Retention adequacy | Will data be readable and retrievable in its original form for the required period? |

### A worked scoring example

Score each factor (for example, 1 = low risk, 3 = high risk) and combine. A standalone lab instrument with a local data station might score:

| Factor | Score | Reason |
|---|---|---|
| Data criticality | 3 | Feeds a release decision |
| Access controls | 3 | Shared Windows login, no app-level accounts |
| Audit trail completeness | 3 | No application audit trail; file timestamps only |
| System maturity | 2 | Vendor-supported but not validated for DI |
| Interface controls | 2 | Manual export to spreadsheet |
| Detectability | 3 | A deleted or re-run injection would not be caught |
| Retention adequacy | 2 | Local disk, no controlled archive |

Overall: high risk, with criticality, access, audit trail, and detectability all at the top. This is a Tier 1 system running on Tier 3 controls. It moves to the front of the remediation queue.

The detectability factor is the one teams most often forget, and it is the one inspectors care about most: a control gap that no review would ever catch is far more dangerous than one that surfaces at the next periodic check. A 3 on detectability paired with a 3 on criticality is the signature of the gaps that become warning letters.

### When to refresh

The rating determines remediation priority and the level of ongoing oversight a system requires. Review the assessment at least annually and update it after any significant system change, significant process change, or significant finding, whether that finding is at your own site or at a comparable operation in the industry. When a [warning letter](/articles/fda-warning-letters-patterns) describes a failure mode you also have, that is a trigger to re-score, not a reason to wait. For the mechanics of finding gaps in the first place, see [DI gap assessment methodology](/articles/di-gap-assessment-methodology).

---

## The New System Assessment Process

One of the highest-value governance controls is the pre-deployment assessment: evaluating a new system against data integrity requirements before it goes into GxP use. This prevents the slow accumulation of systems that were deployed without DI in mind and then must be remediated, expensively, later. Fixing an audit trail gap before purchase is a contract negotiation; fixing it after deployment is a validated change, a vendor escalation, and sometimes a system replacement.

### What the assessment covers

A pre-deployment DI assessment covers:

- Does the system have an audit trail, and at what level of completeness? Can it be disabled, and if so, by whom?
- Can individual user accounts be created and managed, with role-based privileges and segregation of duties?
- How are electronic signatures implemented, and do they meet the [Part 11 and Annex 11](/articles/21-cfr-part-11-eu-annex-11) expectations for signature/record linking and signature meaning? See [electronic signatures implementation](/articles/electronic-signatures-implementation).
- What are the data storage, backup, and retention capabilities? Can original records be exported in a readable, complete form?
- What interfaces does the system need, and how will transfer integrity be verified?
- Is there a validated migration path if the system is later decommissioned, so data remains retrievable?
- Does the vendor provide a GxP and Part 11 compliance documentation package, and will they support a supplier audit?

### How to run it

Write the DI requirements into the user requirements specification (URS) as testable statements before you shortlist vendors, then score each candidate against them. Require the vendor's compliance documentation to address each requirement before purchase or contract. The URS-to-test traceability is its own discipline; see [user requirements and traceability](/articles/user-requirements-and-traceability). This is also where [supplier and vendor qualification](/articles/supplier-vendor-qualification) and the validation approach under [GAMP 5](/articles/gamp5-csv-framework) connect: the vendor's documented capability reduces, but never eliminates, the validation burden you carry. A risk-based path through testing effort is described in [computer software assurance](/articles/computer-software-assurance-fda), the FDA guidance issued as a draft in 2022 and finalized in September 2025.

### Acceptance criteria

The assessment is complete when every DI requirement in the URS has a documented vendor response, gaps are either closed by configuration or accepted with a written interim control, and no Tier 1 system goes live with a known unmitigated DI gap. A "we will fix it after go-live" on a release-critical control is the decision that comes back as a finding.

---

## Organizational Structure

Data governance does not sustain itself. It requires defined accountability and a routine review cadence, backed by management that actually shows up.

### What works in practice

A data integrity committee, or its equivalent, that meets quarterly and includes the site Quality Director or equivalent, the department heads for areas with Tier 1 systems, IT leadership, and the data governance lead. The committee reviews the system inventory, the status of outstanding DI findings and remediation, the results of periodic audit trail reviews, and any new system assessments in progress. Minutes are kept, actions are tracked to closure, and senior management attendance is real rather than delegated. Both the MHRA and PIC/S guidance are explicit that senior management is responsible for the governance system, so an inspector reading committee minutes is checking whether leadership engagement is genuine.

A standing committee agenda that holds up under inspection:

1. Inventory changes since last meeting (additions, decommissions, re-tiering)
2. Periodic audit trail review status and any escalated findings
3. Open DI findings and remediation status against milestones
4. New system DI assessments in progress
5. Relevant external signals (warning letters, guidance changes) and re-scoring triggers
6. Metrics: overdue reviews, remediation aging, access-control exceptions
7. Actions, owners, and due dates

A dedicated data governance role: someone whose job includes maintaining the system inventory, coordinating DI risk assessments, tracking remediation, and supporting the committee. In a smaller organization this does not have to be a full-time post, but it must be assigned to a named person with protected time. Governance that is everyone's spare-time job is no one's job.

This structure should connect upward into the [pharmaceutical quality system](/articles/pharmaceutical-quality-system) and into [management review](/articles/management-review-q10), not run as a parallel island. Data integrity metrics, open findings, audit trail review backlog, and overdue periodic reviews belong in the same management review that looks at deviations and CAPAs.

### What does not work

Assigning data governance to QA as an unfunded add-on. Treating the system inventory as a one-time project rather than a living document. Performing DI risk assessments once and never updating them. Writing a data governance policy without building the process and accountability that give it teeth. Each of these produces a binder that looks compliant and a program that is not, which is precisely the gap an experienced inspector probes for.

---

## Remediation Planning

Most organizations that build a data governance program from scratch will find gaps. Some will be significant. The remediation process has to be honest about timeline and resource and has to prioritize by risk, not by what is easy.

### Prioritization framework

1. **Immediate (0 to 90 days):** Critical control gaps on Tier 1 systems. Shared user accounts, disabled or absent audit trails, missing prior-value capture on release systems, the ability of an analyst to delete or overwrite original data with no trace. These are the failure modes that turn into [warning letters](/articles/fda-warning-letters-patterns), and several need interim procedural controls in place within days while the permanent fix is built.
2. **Short-term (3 to 6 months):** Control gaps on Tier 1 systems that require configuration changes or procedural updates rather than emergency action.
3. **Medium-term (6 to 18 months):** Control gaps on Tier 2 systems, legacy system upgrades or replacements, and [data migration](/articles/data-migration-validation) out of unsupported formats.
4. **Long-term (18+ months):** Enterprise architecture changes, system consolidations, validated interfaces replacing manual transfers, and improved reporting infrastructure.

### Interim controls

For gaps that cannot be closed immediately, define an interim control and document it. A shared account that cannot be eliminated this week can be wrapped in a logged, second-person-witnessed procedure until individual accounts are provisioned. A missing application audit trail can be bridged by a locked-down OS, restricted access, and a contemporaneous logbook reviewed by a second person. The interim control is not the fix, but it is the difference between a managed risk and an open one.

### A worked remediation entry

| Field | Value |
|---|---|
| Finding | Standalone titrator on shared login, no app audit trail; feeds release result |
| Tier | 1 |
| Risk rating | High (criticality 3, access 3, audit trail 3, detectability 3) |
| Interim control | Restrict to two named analysts; locked OS account each; witnessed, logged use; QA review of bound logbook weekly |
| Permanent fix | Upgrade to version with per-user accounts and audit trail; validate; one-way LIMS interface |
| Priority | Immediate interim, short-term permanent |
| Owner | QC Lab Director |
| Target dates | Interim 5 days; permanent 5 months |
| Status | Interim in place; permanent in validation |

### Acceptance criteria

The remediation plan should be documented, approved by QA and site leadership, and maintained as a living document with status tracking. If an inspection occurs while remediation is in progress, a documented plan with clear milestones, owners, and dates is a meaningful mitigating factor. An undocumented effort, however sincere, is not, because the inspector has no way to distinguish it from inaction. For a structured program-level approach to running this end to end, see [DI remediation program](/articles/di-remediation-program) and [retroactive validation of legacy systems](/articles/retroactive-validation-legacy-systems).

---

## The Governance Audit

A useful self-assessment tool is the governance audit: periodically walking the data flow for one specific, complete process, say a full analytical result from instrument acquisition through batch disposition, or a single device history record from build through release, and evaluating the integrity controls at every step against documented requirements.

This is not the same as a system audit, which evaluates a single system, or an audit trail review, which evaluates specific records. The governance audit looks at the chain as a whole and asks a blunt question: does data integrity governance actually work end to end for a real business process? You follow one number from the moment the instrument creates it to the moment it appears on a certificate of analysis, checking attributability, the survival of metadata, the verification of each transfer, and whether the original record is still retrievable at each stage.

The output is a gap analysis and an updated risk assessment. The findings feed straight into the remediation plan and the next risk-assessment cycle, which is what keeps the whole program from going stale. Organizations that do this regularly, quarterly for critical processes, annually for supporting processes, find their own problems before regulators do. That is the entire goal of a mature data governance program, and it pairs naturally with a periodic [DI self-audit checklist](/articles/di-self-audit-checklist) and a broader [internal audit program](/articles/internal-audit-program).

---

## Common Mistakes and Inspection-Finding Patterns

The patterns below are generic and recur across sites and modalities. An experienced inspector goes looking for them.

- **Incomplete inventory.** The spreadsheet or standalone instrument that produces a reportable result is not on the list, so it was never assessed and never controlled. The most common single root cause of a failed DI inspection.
- **Audit trail present but not reviewed.** The system can produce a trail; no one reviews it on a schedule, or the review is a tick-box with no defined scope. Inspectors ask to see the review records and the procedure that defines what is reviewed.
- **Shared accounts on critical systems.** A generic login means records are not attributable, which breaks the first letter of ALCOA. Often paired with the excuse that "everyone knows who was on shift."
- **Disable rights too broadly held.** The ability to turn off or alter the audit trail sits with ordinary users or with the same person who enters data. Inspectors check who holds this right and whether its use is itself logged.
- **Tier shopping.** A critical system argued into a lower tier to reduce review burden, with no documented rationale that survives the worst-case test.
- **Stale ownership and stale risk assessments.** Ownership names a departed employee; the risk assessment was done once at deployment and never revisited. Both signal a program that runs only at inspection time.
- **Governance as a binder.** A policy and an org chart with no evidence of committee meetings, tracked actions, or management attendance. The paperwork exists; the process does not.
- **Manual transfers with no verification.** A number re-keyed from a printout into a downstream system, with no second-person check and no path back to the original electronic record.

For the human and organizational dimension behind many of these, see [quality culture and DI failures](/articles/quality-culture-di-failures).

---

## Interview-Ready: Questions and How to Answer

These are the questions a DI or quality interviewer, or an inspector, asks on this topic. Strong answers are concrete and tie back to a documented control.

**"What is the difference between data integrity and data governance?"**
Data integrity is a property of the record, attributable, legible, contemporaneous, original, accurate, and the rest of ALCOA+. Data governance is the program that achieves and sustains that property across all systems over time, through change. Integrity is the outcome; governance is how you keep getting it.

**"Where does the requirement for data governance actually come from?"**
Name the sources: MHRA 2018 DI guidance (data ownership across the lifecycle), PIC/S PI 041-1 (2021, senior management responsibility for the governance system), WHO TRS 1033 Annex 4 (2019), and the FDA 2018 CGMP DI Q&A tied to 21 CFR 210/211/212, with Part 11 and Annex 11 supplying the technical controls. For devices, the QMSR (21 CFR 820 harmonized to ISO 13485). It is a documented expectation, not a vendor concept.

**"How would you build a GxP system inventory from scratch?"**
Triangulate three sources, the IT asset register, the validation document index, and a process walkdown, and start from the data rather than the asset list. Walk real processes end to end and record every place a number is created, transformed, or stored. That is how you find the spreadsheets and standalone instruments the IT list misses. Then wire updates to change control so it stays current.

**"How do you decide how much oversight a system gets?"**
Criticality tiering. Each system gets a tier based on the worst GxP decision its data can influence, not the typical one. Tier 1 (release, submission, patient safety) gets the strictest controls and the most frequent audit trail review; Tier 3 gets baseline controls. The tier drives a defined control set, and re-tiering is triggered by change control when use changes.

**"Who owns data integrity for a system, and why a single person?"**
A named individual, typically the department head who relies on the system, not the IT administrator. Shared ownership is no ownership. The owner sets and verifies controls; IT implements them, which preserves independence. Ownership is reviewed annually and reassigned promptly when people move.

**"What is the most overlooked factor in a DI risk assessment?"**
Detectability. A gap that no review would ever catch is more dangerous than one that surfaces at the next periodic check. A high-criticality, low-detectability system is exactly where the serious findings come from.

**"An inspector finds remediation in progress. Does that hurt you?"**
Not if it is documented. A risk-prioritized plan with owners, milestones, dates, and interim controls in place is a mitigating factor. The same effort undocumented looks identical to inaction, because the inspector cannot distinguish sincerity from a story.

**"How do you keep the program from going stale?"**
Cadence. Change control keeps the inventory current; annual and event-driven re-scoring keeps risk assessments current; annual ownership review keeps accountability current; the governance committee keeps management engaged; and periodic governance audits walk real data flows end to end to find drift before regulators do.

---

## Practical Tips

- Start the inventory from a process walkdown, not the IT asset register. The walkdown finds the systems that hurt you in inspection.
- Mark the location of the original record on every data flow map. Under ALCOA+ you must retrieve the original, not a downstream summary.
- Treat detectability as a first-class risk factor. Score it explicitly and let it drive priority.
- Put DI requirements in the URS as testable statements before you talk to vendors. Fixing a gap pre-purchase is free; fixing it post-deployment is a project.
- Keep committee minutes that show tracked actions and real management attendance. Minutes are the evidence an inspector reads to judge whether governance is genuine.
- Document interim controls. A managed risk and an open risk look the same on paper unless the interim control is written down.
- Re-score when a peer's warning letter describes a gap you also have. External findings are free risk-assessment inputs.

A final point worth holding onto. None of this is one and done. Systems get upgraded, vendors change hosting models, people move on, and a process that was mapped correctly two years ago drifts. The value of a governance framework is not the inventory or the tier model or the committee in isolation; it is the cadence that keeps all of them honest. A program that re-walks its own data flows, re-scores its own risks, and re-confirms its own ownership on a schedule is one that stays inspection-ready as a side effect of being well run, rather than as a frantic project every time an inspection is announced.

For the wider program context, see [DI program architecture](/articles/di-program-architecture). For the people side, see [data governance roles and careers](/articles/data-governance-roles-and-careers).
