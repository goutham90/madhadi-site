---
title: "Building a Data Integrity Program: Architecture, Governance, and the Gap Assessment"
description: "What a mature enterprise data integrity program actually looks like: system inventory and criticality tiering, the governance model, data-flow mapping, risk assessment methodology, and how to measure where you are against where you need to be."
pubDate: 2026-02-04
tags: ["data-integrity", "FDA", "GxP", "data-governance", "program-management"]
tier: "Advanced"
pillar: "data-integrity"
---

Most data integrity programs start with a regulatory finding. A Form FDA 483 observation or a warning letter creates urgency, and the remediation that follows produces a program shaped by the specific gaps that were cited, not by a coherent design.

Programs built this way tend to be reactive. They address the observed symptoms, not the underlying architecture. They create documentation to satisfy auditors, not controls that actually make data trustworthy. And they frequently fail the next inspection, because the next inspector looks at different systems and finds the same underlying weaknesses.

Building a data integrity program correctly means starting with architecture: understanding what data exists, where it flows, who is responsible for it, and what controls are needed at each point. The work is unglamorous. It is inventory, mapping, scoring, and the assignment of names to accountabilities. But it is the difference between a program that survives a change in inspector and one that does not.

This article assumes you already understand the underlying principles. If you do not, start with [the foundations of data integrity](/articles/data-integrity-foundations) and [the ALCOA+ framework](/articles/alcoa-plus-deep-dive), then come back. What follows is about turning those principles into an operating program.

---

## Why a Program, Not a Project: The Regulatory Basis

Before the mechanics, it is worth being precise about what regulators expect, because the expectation is a managed system and not a one-time cleanup. The relevant sources are consistent on this point.

> "Data integrity refers to the completeness, consistency, and accuracy of data. Complete, consistent, and accurate data should be attributable, legible, contemporaneously recorded, original or a true copy, and accurate (ALCOA)."
> , FDA, *Data Integrity and Compliance With Drug CGMP: Questions and Answers, Guidance for Industry*, final, December 2018

The legal hooks under U.S. cGMP are in 21 CFR Parts 210 and 211. Section 211.68 requires that computerized systems have controls and that backup data be exact and complete. Section 211.180(c) requires records to be readily available for authorized inspection during the retention period, and 211.180(d) permits retention as originals or true copies. Section 211.194 requires complete laboratory records. For electronic records and signatures, 21 CFR Part 11 applies wherever a predicate rule record is created, modified, maintained, archived, retrieved, or transmitted in electronic form. In Europe, EudraLex Volume 4 Annex 11 (Computerised Systems) and Chapter 4 (Documentation) carry the equivalent expectations.

The guidance layer is where the program expectation is most explicit:

- FDA, *Data Integrity and Compliance With Drug CGMP: Questions and Answers* (final, December 2018).
- MHRA, *GXP Data Integrity Guidance and Definitions* (Revision 1, March 2018).
- PIC/S PI 041-1, *Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments* (effective July 2021).
- WHO Technical Report Series No. 1033, Annex 4, *Guideline on Data Integrity* (2021).

Every one of these documents frames data integrity as a risk-based, lifecycle, system-level responsibility owned by senior management, not a checklist. PIC/S PI 041-1 in particular ties data integrity controls to a documented risk assessment and to the maturity of the quality system. The quality rationale is simple: if you cannot trust the data, you cannot trust any decision built on it, which means you cannot trust a release decision, a stability conclusion, a deviation closure, or a submission. A program exists because trust has to be engineered and maintained across hundreds of systems and thousands of records, not asserted once.

**Interview angle.** A common opening question is "what is the difference between a data integrity remediation and a data integrity program?" The answer an inspector wants: a remediation closes cited gaps; a program prevents them, finds the ones nobody cited, and keeps doing so as systems change. If you can only describe what you fixed last year, you have a project, not a program.

---

## The Starting Point: System Inventory

You cannot manage data integrity across systems you have not identified. The first step in building a program is a complete inventory of every GxP data-generating system in scope.

A GxP system for these purposes is any computerized system that generates, processes, transmits, stores, or retrieves data used to support a regulatory submission, a quality decision, or a GxP-controlled activity. This spans manufacturing, laboratory, clinical, pharmacovigilance, and distribution domains, so the same method applies whether the regulated activity is GMP, GLP, GCP, or GDP. It includes:

- Laboratory systems: LIMS, ELN, chromatography data systems (CDS) such as Empower or OpenLab, spectroscopy software, flow cytometry, plate readers, dissolution apparatus, balances, and pH meters with electronic output.
- Manufacturing systems: MES and electronic batch records, SCADA, DCS, PLCs, process historians, building management and environmental monitoring systems.
- Quality systems: the QMS, CAPA and deviation modules, document management, training management, and complaint handling.
- Clinical and safety systems: EDC, CTMS, eTMF, randomization (IRT/RTSM), and pharmacovigilance safety databases, where the activity is GCP or pharmacovigilance.
- Infrastructure: network time servers, backup and archive systems, identity and access management, and the virtualization or cloud platforms underneath everything else.

The inventory needs to capture, at minimum:

| Field | Why it is there |
|---|---|
| System name and version | Identity; ties to validation and patch records |
| Vendor or supplier | Drives supplier assessment and support model |
| GxP use and data generated | Establishes scope and what is at stake |
| Downstream destinations | Feeds data-flow mapping and transfer-control assessment |
| Business owner and IT owner | Assigns accountability (see Governance) |
| Validation status and last periodic review | Shows current state of control |
| GAMP 5 software category | Sets proportionate validation rigor |
| Hosting model (on-prem, cloud, hybrid) | Drives infrastructure and supplier controls |
| Part 11 / Annex 11 applicability | Flags electronic record and signature obligations |
| Record retention requirement | Drives archive and disposal controls |

That GAMP 5 field matters more than it looks. The software category (from ISPE GAMP 5, Second Edition, 2022) tells you how much validation rigor a system needs: a configured commercial product in Category 4 carries different testing expectations than custom code in Category 5, and infrastructure software sits in Category 1. Recording the category at inventory time means your validation effort can be proportionate from the start rather than retrofitted. The framework detail lives in [the GAMP 5 CSV framework](/articles/gamp5-csv-framework).

### How to build the inventory, step by step

1. **Define scope and the GxP test.** Write a one-line decision rule: a system is in scope if its data supports a regulatory submission, a GxP quality decision, or a regulated process. Document the rule so inclusion and exclusion are defensible.
2. **Pull the obvious sources.** Start from the IT asset register, the CSV validation list, the application portfolio, and the list of qualified instruments from metrology.
3. **Reconcile the lists.** They will not agree. A system on the IT register may have no validation record; a validated system may be missing from the asset register. Each mismatch is a finding in waiting.
4. **Walk the floor.** Go to the labs, the manufacturing suites, the QC bench, and the clinical operations team and ask what they actually use to make a decision. This is where the shadow inventory surfaces.
5. **Classify each entry.** Assign GxP status, GAMP category, Part 11 applicability, and owners.
6. **Baseline and bring under control.** Place the completed inventory under document control and connect its maintenance to change control.

### Acceptance criteria for the inventory

- Every entry has both a business owner and an IT owner named (a role or a person, not "IT").
- Every entry has a GAMP category and a GxP determination with a recorded rationale.
- No entry has a blank validation status; "not validated" is a valid, and revealing, answer.
- A documented procedure exists that adds new systems to the inventory through change control, so the list cannot silently fall behind.

### The shadow inventory problem

The systems that cause inspection findings are rarely the LIMS or the MES. Everyone validates those. The findings come from the spreadsheet that calculates a stability trend, the standalone instrument with a local hard drive and a shared login, the small piece of analysis software a scientist installed without telling anyone. These are real GxP systems generating real GxP data, and they are invisible to a program that only inventories the obvious enterprise platforms.

Finding the shadow inventory takes active effort: walk the labs, ask what people actually use to make a decision, read SOPs for references to systems no one mentioned, and check what is plugged into the network or has a USB drive attached. Spreadsheets deserve particular attention because they are so easy to create and so rarely controlled. The handling of end-user computing tools is covered in more depth in [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation).

This inventory is not a one-time document. It needs to be maintained as systems are added, upgraded, decommissioned, or modified. Connecting system inventory management to your [change control process](/articles/change-control-validated-systems) is the mechanism that keeps it current. A system added without an inventory entry is, by definition, an uncontrolled system.

---

## Criticality Tiering

Not all systems carry equal data integrity risk. A LIMS that stores final release testing results carries higher risk than an environmental monitoring system in a non-GMP area. A process historian logging bioreactor parameters for a commercial lot carries higher risk than a document management system storing archived training records.

Criticality tiering is the process of assigning each GxP system a risk level based on the nature of the data it handles. The most common approach uses two factors.

**Data criticality:** what decisions or regulatory submissions does this data support?

- Tier 1: Data that directly supports lot release, regulatory submissions, or patient safety decisions.
- Tier 2: Data that supports quality decisions but is not directly used for lot release or submissions.
- Tier 3: Data that supports operational efficiency but has minimal direct quality or regulatory impact.

**Control vulnerability:** how well are current controls designed to prevent and detect data integrity failures?

- High vulnerability: shared logins, no audit trail, no backup, no validated state.
- Moderate vulnerability: some controls present but gaps exist.
- Low vulnerability: validated, access-controlled, with a complete audit trail and tested backup and recovery.

The intersection of data criticality and control vulnerability gives you a risk position for each system, which drives prioritization for remediation, audit trail review frequency, access control requirements, and validation depth. The table below shows how the two axes combine into action priority.

| Data criticality \ Control vulnerability | High | Moderate | Low |
|---|---|---|---|
| Tier 1 (release / submission) | Immediate remediation; do not rely on data until controlled | Active remediation; interim controls in place | Maintain; frequent audit trail review |
| Tier 2 (quality decisions) | Active remediation | Planned remediation | Maintain; periodic review |
| Tier 3 (operational) | Planned remediation | Monitor | Maintain; lightweight oversight |

The point of the matrix is to stop spending equal effort on every system. A Tier 3 system with low vulnerability needs little more than confirmation that it stays that way. A Tier 1 system with high vulnerability is a finding waiting to happen and should be treated as one before an inspector treats it as one for you.

### Making the scoring repeatable

The weakness in most tiering schemes is that two assessors score the same system differently. Fix this with explicit anchors. For data criticality, write the decision rule as a question chain: does failure of this data directly affect a release or submission (Tier 1); does it affect a quality decision short of release (Tier 2); or neither (Tier 3)? For control vulnerability, score against named control elements rather than a feeling.

| Control element | Present and verified = 0 | Partial = 1 | Absent = 2 |
|---|---|---|---|
| Unique user accounts (no shared logins) | | | |
| Audit trail enabled, complete, not user-editable | | | |
| Audit trail reviewed on a defined schedule | | | |
| Validated state with current periodic review | | | |
| Backup performed and restore tested | | | |
| Access reviewed periodically; privileges least-privilege | | | |

Sum the points. A worked example: a standalone QC balance interface with shared login (2), no audit trail (2), no review (2), not validated (2), local-only storage with no tested restore (2), and no access review (2) scores 12 of 12, which is unambiguously High vulnerability. A validated LIMS that scores 0 or 1 across the board is Low. The numbers are not the point; the auditability of the judgment is. When an inspector asks why a system is Tier 1 Moderate rather than Tier 1 High, you can point to the line items.

This tiering methodology is publicly defensible. It aligns with the risk-based approaches described in FDA's *Data Integrity and Compliance With Drug CGMP: Questions and Answers* guidance (final, December 2018), the MHRA's *GXP Data Integrity Guidance and Definitions* (Revision 1, March 2018), and PIC/S PI 041-1, *Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments* (effective July 2021). The specific tier definitions and scoring criteria should be documented in your [data governance framework](/articles/data-governance-framework) so the logic is consistent and auditable. The underlying logic of rating data by its impact is covered in [data criticality and data risk](/articles/data-criticality-and-data-risk).

---

## Data-Flow Mapping

A data integrity program that only considers systems in isolation misses some of the highest-risk points: the transfer points between systems.

Data-flow mapping traces how data moves from generation through to final use or archival:

```
Instrument generates raw data
 → CDS stores and processes it
 → Result exported to LIMS
 → LIMS stores result and generates batch disposition record
 → QMS receives deviation if OOS
 → Archive receives batch record at end of retention period
```

At each arrow in this diagram, there are questions to answer:

- Is the transfer validated? Is there a checksum or hash comparison verifying the data arrived complete and unaltered?
- Is the transfer auditable? Is there a record showing what was transferred, when, and by whom?
- Is there data loss at transfer? Does the receiving system capture all metadata from the source, or does some information get stripped?

That last question is where most damage hides. When a chromatography result moves from the CDS to the LIMS, often only the final reportable value travels. The integration parameters, the reprocessing history, the audit trail entries, and the underlying raw data stay behind in the source system. If retention or backup of the source system is weak, the LIMS now holds an orphaned number with no way to reconstruct how it was produced. That breaks the "original" and "complete" attributes of ALCOA+ even though both systems individually look healthy. The deeper mechanics of what counts as raw data and metadata are covered in [the data lifecycle and metadata](/articles/data-lifecycle-and-metadata), and the specific risks at the CDS-to-LIMS boundary in [chromatography data system integrity](/articles/chromatography-data-system-integrity).

Manual transfer steps deserve special scrutiny. A value re-keyed by a person from one screen into another is a transcription point, and transcription points need a documented second-person verification or a validated automated transfer. Inspectors look for exactly these manual handoffs because they are where numbers get "corrected" without a trace.

### A practical mapping method

1. **Pick the unit of mapping.** Map by reportable result or by record type, not by system. "Assay result for finished product release" is a usable unit; "the LIMS" is not.
2. **Identify the system of record at the point of creation.** This is where the original data and its metadata live. Everything downstream is a copy or a derivation.
3. **Draw every hop.** Each transfer is an arrow. Mark whether it is automated and validated, automated and unvalidated, or manual.
4. **Tag each hop with a control question** from the list above, and record the answer with evidence.
5. **Flag the orphan risk.** For each downstream destination, ask: if the source system were lost tomorrow, could the destination value still be reconstructed and defended? If not, you have an enduring/complete exposure at that hop.

A small worked example of a flow record:

| Hop | Type | Validated transfer? | Metadata carried | Verification | Gap |
|---|---|---|---|---|---|
| Balance → spreadsheet | Manual | N/A | Value only | None documented | Transcription point, no second check |
| CDS → LIMS | Automated interface | Yes (IQ/OQ) | Result + injection ID | Checksum on transfer | None |
| LIMS → archive | Automated | Restore not tested | Full record | None | Restore never verified |

Data transfer failures are one of the most common sources of data integrity findings, precisely because they are invisible when the systems on either side appear to be performing correctly. The LIMS shows the right result, but no one has verified that the result in the LIMS matches the result in the instrument. The distinction between static and dynamic records, and what a true copy must preserve, matters here and is covered in [static and dynamic records and true copies](/articles/static-dynamic-records-true-copies).

---

## The DI Risk Assessment

With a system inventory, criticality tiers, and data-flow maps in place, you can conduct a systematic data integrity risk assessment across the program.

A DI risk assessment evaluates each system and each data-flow against the ALCOA+ principles. The matrix below uses a simple status mark per attribute: a check for adequate, an exclamation mark for a gap requiring remediation.

| System | Attributable | Legible | Contemporaneous | Original | Accurate | Complete | Consistent | Enduring | Available | Notes |
|--------|---|---|---|---|---|---|---|---|---|-------|
| CDS v4.2 | ✓ | ✓ | ✓ | ! | ✓ | ! | ✓ | ✓ | ✓ | Original file not retained for transferred results; audit trail review not yet scheduled |
| LIMS v12 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ! | ✓ | Archive recovery never tested |
| Stability spreadsheet | ! | ✓ | ! | ! | ! | ! | ✓ | ! | ✓ | Shared login, no audit trail, no validated state, local storage only |

The `!` marks are gaps requiring remediation. Each gap should be documented with:

- The nature of the gap
- The risk it presents (what failure could occur, and what would it affect?)
- A remediation action with an owner and target date
- Priority relative to other gaps, using the criticality tiering above

A fully worked gap entry, expanded from the stability spreadsheet row, looks like this:

| Attribute | Gap | Risk | Remediation | Owner | Priority |
|---|---|---|---|---|---|
| Attributable | Shared login; entries not traceable to a person | A falsified or erroneous entry cannot be tied to an individual; release decisions rest on unattributable data | Migrate calculation into validated LIMS or apply named accounts plus a validated template with locked cells | QC Lab Manager | Tier 1 High, immediate |
| Original/Complete | No audit trail; prior values overwritten without trace | Data can be changed with no record; "complete" attribute fails | Same migration; interim control = second-person verified printout retained as raw data | QC Lab Manager | Tier 1 High, immediate |
| Enduring | Local storage only, no backup | Loss of the file loses the record | Move to backed-up network share; verify restore | IT Owner | Tier 1 High, immediate |

Two practical notes. First, score against evidence, not assumption. "The system has an audit trail" is not the same as "the audit trail is turned on, captures the right events, cannot be disabled by users, and is reviewed." Open the configuration and look. Second, keep the assessment at a granularity you can maintain. Some teams score per system, others score per critical data-flow within a system. Per data-flow is more precise and more work; choose based on the size of your estate and the team you have.

For the underlying assessment discipline, align the DI risk assessment with your wider [quality risk management](/articles/quality-risk-management) approach (ICH Q9(R1), *Quality Risk Management*) and your [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology) so the program speaks one risk language rather than three.

This risk assessment matrix is both an internal management tool and an inspection-ready artifact. When an inspector asks "how do you know your data integrity program is adequate?", a well-maintained DI risk assessment is a coherent answer: you have identified every system, assessed it against defined criteria, and have a documented plan for every gap. The companion method for an existing estate is described in [DI gap assessment methodology](/articles/di-gap-assessment-methodology), and turning the output into action is covered in [the DI remediation program](/articles/di-remediation-program).

---

## Governance: Ownership and Accountability

A data integrity program without defined ownership is a document, not a program. Governance establishes who is accountable for what, in operational terms. The roles below map onto broader [GxP roles and responsibilities](/articles/gxp-roles-responsibilities), but data integrity adds specific accountabilities that are easy to leave unassigned.

**Data Integrity Officer (or equivalent role):** a named individual accountable for the DI program at the site or enterprise level. This is not necessarily a separate headcount. In most organizations it is a role assigned to a senior quality professional. The DI Officer owns the system inventory, the risk assessment, the DI risk register, and the periodic review process.

**System Owners (Business Owners):** for each GxP system, there should be a named business owner accountable for the operational integrity of that system's data. The business owner is not IT. They are the department that uses the data to make decisions. They are accountable for ensuring access controls are appropriate, that audit trail review is performed, and that changes to the system go through change control.

**IT System Administrators:** separate from business owners, the IT staff who manage infrastructure, backups, access provisioning, and technical configuration. They implement controls but are not accountable for the quality decisions those controls support.

**QA Oversight:** QA provides oversight of the DI program, periodic review, audits of DI activities, and independent assessment of gap closure. QA does not own individual systems, but QA approves the DI risk assessment, the remediation plan, and changes to the DI governance policy.

A compact responsibility map keeps the accountabilities from blurring:

| Activity | DI Officer | Business Owner | IT Admin | QA |
|---|---|---|---|---|
| Maintain system inventory | A | C | C | I |
| Score criticality / DI risk assessment | R | C | C | A |
| Configure technical controls | I | C | R | I |
| Perform audit trail review | A | R | C | C |
| Approve remediation plan | R | C | C | A |
| Provision and review access | I | A | R | C |
| Periodic review and management reporting | R | C | C | A |

(R = responsible, A = accountable, C = consulted, I = informed.)

This separation of roles is not bureaucratic decoration. It exists to prevent a single person from both generating data and controlling the evidence about how that data was generated. The people generating data should not be able to modify access controls or audit trail configurations without QA approval. The person who administers a system should not be the same person who reviews that system's audit trail for anomalies. When those duties collapse into one role, the control collapses with them, because the one person with the most reason to hide a problem is also the only person positioned to see it.

A useful test during design: for each Tier 1 system, can you name the person who would detect a falsified or altered record, and confirm they are different from the person who could create one? If the answer is no, you have a segregation-of-duties gap regardless of how good the technical controls look. The classic finding here is an analyst who holds local administrator rights on the chromatography workstation, which lets the same person acquire data, reprocess it, and adjust the system clock. Access design specifics are covered in [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control), and clock control specifically in [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).

**Management responsibility.** Both MHRA and PIC/S guidance place ownership of the data integrity environment with senior management, who are expected to set the quality culture and provide resources. In practice this means the DI risk register feeds [management review](/articles/management-review-q10) under ICH Q10, and that resourcing decisions for remediation are made and minuted at that level. A program with no line into management review is a program with no budget.

---

## The Periodic Review Process

A data integrity program requires ongoing maintenance. The periodic review process is the mechanism that keeps it current, and it should be tied into the wider [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review) cadence rather than run as a separate orphan activity.

At minimum, a DI program should have the following review activities.

**Annual DI risk assessment review:** review the system inventory for additions and changes. Re-score systems where configurations, validation status, or data criticality has changed. Update the remediation plan and close out completed actions with evidence.

**Quarterly or periodic audit trail review:** for Tier 1 systems, scheduled review of audit trail records. Not just reviewing what is flagged, but a defined sample review to confirm the audit trail is capturing what it should and that anomaly detection, manual or automated, is functioning. The mechanics of doing this without drowning are in [audit trail design and review](/articles/audit-trail-design-and-review) and [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).

**Change-triggered DI review:** when a system is modified, upgraded, or decommissioned, the DI risk assessment for that system should be reviewed as part of change control. Many DI programs deteriorate precisely because changes are made without assessing DI impact. A patch that disables an audit trail, an integration that strips metadata, a decommissioning that loses retained data, all of these arrive through change.

**Access review:** at a defined frequency, confirm that user accounts and privilege levels still match job roles, that leavers have been removed, and that no shared or generic accounts have crept back in. Privilege creep is one of the quieter ways a controlled system drifts back to uncontrolled.

**Post-inspection review:** following any regulatory inspection, review the DI program against any DI-related observations, both to address cited gaps and to assess whether similar gaps exist in other systems not directly cited. The lateral read is the part most organizations skip and the part inspectors most reward, because it shows you treat a finding as a symptom rather than an isolated defect.

The cadences above are a starting baseline. The right frequency for any given activity should follow the criticality tiering. A Tier 1 release system may warrant monthly audit trail review; a Tier 3 system may need nothing more than confirmation during the annual cycle that it has not changed.

### Acceptance criteria for periodic review

- Each review activity has a named owner, a defined frequency tied to tier, and a record of completion.
- Reviews produce dispositions, not just attendance: gaps found go to CAPA or change control, not into a meeting minute that nobody actions.
- Overdue reviews are visible (a metric, see below), so a missed cycle is caught rather than discovered by an inspector.

---

## Measuring Program Maturity

A mature DI program has four properties that distinguish it from a compliance documentation exercise.

**Coverage:** every GxP system is inventoried, assessed, and assigned to an owner. There are no unmanaged systems, and the shadow inventory has been actively hunted, not assumed away.

**Proportionality:** controls are scaled to data criticality. Tier 1 systems have more rigorous controls, more frequent audit trail review, and more stringent access controls than Tier 3 systems. Effort follows risk rather than habit.

**Sustainability:** the program can be maintained by the organization without extraordinary effort. The periodic review cadence is realistic for the team. The audit trail review process is scoped appropriately using risk-based sampling or automated tools. A program that depends on one heroic individual working weekends is not sustainable, and it will degrade the moment that person leaves.

**Defensibility:** every element of the program can be explained to an inspector with documentation. The system inventory is current. The risk assessment is documented with evidence. Remediation timelines are realistic and tracked, and the closed actions have proof they were closed.

It helps to track a small number of honest metrics rather than a vanity dashboard. Useful ones include:

| Metric | What it tells you | Healthy direction |
|---|---|---|
| % of GxP systems with a current risk assessment | Coverage | Toward 100% |
| Overdue remediation actions on Tier 1 systems | Where risk is concentrated | Toward 0 |
| Audit trail review completion rate vs plan | Whether the control is real | At or near 100% |
| Systems discovered outside the inventory in the last year | Whether intake controls work | Toward 0 |
| Average age of open Tier 1 DI gaps | Whether remediation is moving | Stable or falling |

That fourth metric is the most diagnostic of all: a number trending toward zero means your intake controls work, while a number that keeps surprising you means the inventory is not connected to how the organization actually adopts systems. Tie these into your broader [quality metrics and KPIs](/articles/quality-metrics-and-kpis) program so DI is reported alongside everything else rather than in a silo.

Maturity also shows up in how the program fits into the [pharmaceutical quality system](/articles/pharmaceutical-quality-system) as a whole. A DI program bolted on the side, with its own parallel meetings and registers, tends to wither. One whose risk register feeds management review, whose changes flow through the normal change control board, and whose findings generate ordinary CAPAs, has a much better chance of lasting. And culture is the substrate underneath all of it: the controls only hold if people believe in raising problems rather than hiding them, which is the subject of [quality culture and DI failures](/articles/quality-culture-di-failures).

---

## What a Gap Assessment Produces

If you are inheriting an existing program, or building one at a company that has had a finding, the gap assessment is your diagnostic tool. It answers a single question: relative to the architecture described above, where are we, and what needs to change?

A gap assessment is not a 483 response, and confusing the two leads to bad outcomes. A [483 response](/articles/483-warning-letter-response) is a defensive document with a regulator as its audience and a clock running. A gap assessment is an internal diagnostic whose audience is your own management and whose purpose is an accurate baseline. Its output is a prioritized remediation roadmap that connects each gap to a business risk, assigns an owner, and sets a realistic timeline. The full method is in [DI gap assessment methodology](/articles/di-gap-assessment-methodology); a lighter self-check you can run against your own estate is in [the DI self-audit checklist](/articles/di-self-audit-checklist).

The most important principle in gap assessment is honesty: documenting the gaps as they actually are, not as you wish they were. An accurate gap assessment that acknowledges systemic problems and proposes realistic remediation is far more defensible in an inspection than an optimistic assessment that understates the gaps. There is a specific trap here. A gap assessment that lists fewer problems than the inspector finds is worse than no gap assessment at all, because it tells the inspector your self-evaluation cannot be trusted, which immediately widens the scope of everything else they look at.

When you present a gap assessment to an inspector, as you may be asked to do if they raise DI concerns, what they are evaluating is your grasp of your own program, its strengths and its weaknesses, and the credibility of your plan for those weaknesses. A coherent, honest assessment demonstrates control even when the underlying controls are not yet complete. Inspectors distinguish between a company that has a gap and knows it from one that has a gap and does not. The first is managing risk; the second is the risk. Preparing to have that conversation well is part of broader [FDA inspection readiness](/articles/fda-inspection-readiness).

---

## Common Mistakes and Inspection-Finding Patterns

These are the recurring patterns that turn into observations. None is hypothetical; all are generic versions of what enforcement actions repeatedly cite.

- **Inventory that excludes standalone instruments and spreadsheets.** The program covers the LIMS and MES beautifully and never names the balance with the shared login or the spreadsheet that trends stability. The finding is written against the uncontrolled spreadsheet, and it implies the inventory itself is incomplete.
- **Audit trail "review" that is a tick-box.** The SOP says audit trails are reviewed monthly, but the review is a signature with no defined scope, no sampling logic, and no record of what was examined. An inspector asks to see evidence of a specific anomaly that was caught, and there is none.
- **Shared and generic accounts.** A single "admin" or "lab" login used by several people defeats attributability at the root. This pattern, combined with local admin rights, is among the most cited data integrity deficiencies.
- **System clock and audit trail under the user's control.** Where the person generating data can change the time or disable the audit trail, the records are not trustworthy regardless of what the SOP claims.
- **Original data not retained.** Only the reportable value survives the transfer to the next system; the raw data and metadata are not kept, so a result cannot be reconstructed. This is the "original" and "complete" failure described in the data-flow section.
- **Backups that are never restore-tested.** Backups run nightly, but no one has ever proven the archive can be read back. The first real test is the day a system fails, which is the worst possible time to learn the restore does not work. The discipline here is in [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation).
- **DI program disconnected from change control.** New systems and patches arrive without a DI impact assessment, so the inventory and risk assessment silently fall out of date.
- **A gap assessment that understates the gaps.** Covered above; the single most damaging self-inflicted wound, because it costs you credibility on everything else.

---

## Interview Preparation

Data integrity program questions appear at every level from QA analyst to director. The general [GxP quality interview preparation](/articles/gxp-quality-interview-preparation) guide covers format; below are the program-architecture questions specifically, with the shape of a strong answer.

**"Walk me through how you would build a data integrity program from nothing."**
Lead with architecture, not documents. Inventory every GxP system including the shadow estate, tier each by data criticality and control vulnerability, map the data flows and especially the transfer points, run a risk assessment against ALCOA+, assign owners through a governance model with segregation of duties, and stand up periodic review tied into change control and management review. Name the regulatory basis (Parts 210/211, Part 11, Annex 11, the 2018 FDA Q&A guidance, PIC/S PI 041-1) without reciting it. The tell of a strong candidate is that they start with "what data exists and where does it flow," not "we wrote SOPs."

**"How do you decide how much control a system needs?"**
Risk-based proportionality. Tie control depth to the tiering matrix: a Tier 1 release system gets validated state, named accounts, complete and reviewed audit trails, tested backups, and frequent review; a Tier 3 operational system gets confirmation it has not changed. Reference ICH Q9(R1) and GAMP 5 as the basis for scaling effort to risk.

**"Where do data integrity findings actually come from?"**
The transfer points and the shadow inventory, not the validated enterprise systems. Give the CDS-to-LIMS metadata-loss example and the uncontrolled spreadsheet example. This answer signals you have seen real findings rather than read about them.

**"What is the difference between a gap assessment and a 483 response?"**
Audience and purpose. The gap assessment is internal, diagnostic, and honest; the 483 response is external, defensive, and on a clock. The trap to name: a gap assessment that understates gaps is worse than none.

**"How do you keep a program from decaying after the initial remediation?"**
Connect it to the machinery the company already runs. The DI risk register feeds management review, changes flow through change control with a DI impact step, findings become ordinary CAPAs, and a handful of honest metrics (overdue Tier 1 actions, systems found outside the inventory) make decay visible early.

**"Who is accountable for data integrity?"**
Senior management owns the environment and the culture; a named DI Officer runs the program; business owners own their systems' data; IT implements technical controls; QA provides independent oversight and approval. The key point to make is segregation of duties: the person who can create a record must not be the only person who could detect its falsification.

---

## Cross-links

- [The foundations of data integrity](/articles/data-integrity-foundations), the concepts this program operationalizes
- [ALCOA+ in detail](/articles/alcoa-plus-deep-dive), the principles the program is designed to maintain
- [Data criticality and data risk](/articles/data-criticality-and-data-risk), how to rate data by impact
- [Data governance framework](/articles/data-governance-framework), where the tier definitions and DI policy live
- [DI gap assessment methodology](/articles/di-gap-assessment-methodology), the diagnostic method for an existing estate
- [DI remediation program](/articles/di-remediation-program), turning gaps into closed actions
- [Audit trail design and review](/articles/audit-trail-design-and-review), the mechanics of the most common DI control
- [GAMP 5 CSV framework](/articles/gamp5-csv-framework), the basis for proportionate validation
- [Quality risk management](/articles/quality-risk-management), the risk language the program should speak
- [FDA data integrity warning letters: patterns](/articles/fda-warning-letters-patterns), what failure looks like in enforcement
- [FDA inspection readiness](/articles/fda-inspection-readiness), defending a program under scrutiny
