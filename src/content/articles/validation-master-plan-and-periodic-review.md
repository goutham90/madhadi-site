---
title: "The Validation Master Plan and Computerized System Periodic Review"
description: "How a Validation Master Plan governs a CSV/CSA program and how periodic review under EU Annex 11 and GAMP 5 keeps validated computerized systems in a validated state, including review frequency by risk and the triggers for re-validation."
pubDate: 2026-06-20
tags: ["CSV", "CSA", "validation master plan", "periodic review", "Annex 11", "GAMP 5", "data integrity", "21 CFR Part 11"]
pillar: "csv-csa"
tier: "Intermediate"
---

Most computerized system validation failures are not failures of testing. The protocols passed. The screenshots were captured. The deviations were closed. The failure shows up two years later, when an inspector asks a simple question — "show me the current list of GxP systems and tell me which ones are still in a validated state" — and the answer is a shrug, three spreadsheets that disagree, and a system that was patched eleven times since its last qualification with no one re-assessing whether the validation still held.

That gap is exactly what two governing documents are supposed to close: the Validation Master Plan (VMP), which defines *how the whole program runs*, and the periodic review, which is the recurring obligation to *confirm a system is still validated long after go-live*. This article covers both — what each must contain, how they connect, and what an inspector is actually probing when they pull on either thread.

## Why a program needs a plan above the protocol level

Individual validation deliverables — a User Requirements Specification, an IQ/OQ/PQ, a Requirements Traceability Matrix — answer the question "is this one system fit for use?" They say nothing about consistency, prioritization, or how a hundred systems are kept current across an organization. Two project teams left to their own devices will validate to two different standards, classify risk two different ways, and disagree about what even counts as a GxP system. The VMP exists to impose one answer to those questions before any single project starts.

The expectation for a documented, planned approach to validation is long-standing in GxP. EU GMP Annex 15 (Qualification and Validation) establishes that validation should be planned and that a Validation Master Plan or equivalent document should summarize the facility's validation philosophy, approach, and program. EU GMP Annex 11 (Computerised Systems) carries the same expectation into the digital domain, requiring that validation documentation and reports cover the relevant life-cycle steps and that risk management be applied throughout. ISPE's GAMP 5 — *A Risk-Based Approach to Compliant GxP Computerized Systems*, Second Edition — provides the industry framework that operationalizes these expectations, and FDA's 2022 draft guidance *Computer Software Assurance for Production and Quality System Software* (the CSA guidance) reframes the effort toward critical-thinking and least-burdensome assurance rather than documentation volume. None of these mandate a single document literally titled "VMP," but every one assumes that a planned, risk-based, governed approach exists and is written down somewhere defensible.

One way to hold the relationship straight: the VMP is the constitution, the validation plans are the statutes for each project, and the periodic review is the standing audit that confirms the constitution is still being honored after the projects ship.

## What a Validation Master Plan must define

A VMP that earns its keep answers five questions concretely. Vague mission statements about "commitment to quality" are not what an auditor reads it for.

**1. Scope and policy.** State exactly which systems, processes, sites, and product types the plan governs, and — just as important — what it excludes and why. The defensible scoping criterion is GxP impact: does the system create, modify, store, archive, retrieve, or transmit data or decisions that affect product quality, patient safety, or data integrity? A document management system holding batch records is in scope. A cafeteria menu app is not. The boundary cases — a building management system whose alarms feed a GMP cold-storage qualification, a spreadsheet doing a release calculation — are where scoping discipline shows, so the VMP should give the decision logic, not just a list.

**2. Validation approach and life cycle.** Declare the life-cycle model the organization follows (the V-model remains the common reference, mapping specifications on the left arm to corresponding verification on the right) and how GAMP software categories drive the rigor applied. GAMP 5 categories — Category 1 infrastructure software, Category 3 non-configured products, Category 4 configured products, and Category 5 custom/bespoke applications — scale the expected effort: a Category 3 instrument with default firmware is verified far more lightly than a Category 5 custom LIMS workflow. The VMP states this scaling explicitly so teams do not over-test commodity software or under-test custom code. Under the CSA philosophy, it should also state where assurance effort is concentrated — on features whose failure would directly harm the patient or corrupt a quality record — and where unscripted or exploratory testing and vendor leverage are acceptable for lower-risk, non-product features.

**3. Roles and responsibilities.** Name the functions, not the individuals: System Owner (accountable for the system meeting business needs and staying compliant across its life), Process Owner (accountable for the business process the system serves), Quality Assurance (independent review and approval, release decision), IT/infrastructure (the qualified platform the application runs on), and the validation lead. Annex 11 specifically expects a defined relationship between the regulated company and any supplier or service provider, with responsibilities documented — so supplier and integrator roles belong here too. The single most common ambiguity an inspector exploits is the boundary between System Owner and QA approval authority; the VMP should leave no doubt who can authorize a system for GxP use and who can release it back to service after a change.

**4. System inventory.** The VMP must require and point to a controlled inventory of computerized systems within scope. Annex 11 is explicit that an up-to-date list of relevant systems and their GxP functionality should be available. This inventory is the spine of the entire program — it is what periodic review schedules against, what change control checks against, and what an inspector requests first. A workable inventory carries at minimum the fields below.

| Inventory field | Why it matters |
|---|---|
| System name / unique ID | Unambiguous reference across all records |
| GxP impact (Y/N) and rationale | Drives whether validation applies at all |
| GAMP category (1/3/4/5) | Sets validation rigor and review depth |
| Business and data-integrity criticality | Drives periodic review frequency |
| System Owner / Process Owner | Accountability |
| Validation status and date of last validation | Current-state evidence |
| Date of last and next periodic review | Closes the review loop |
| Supplier / hosting model (on-prem, SaaS) | Defines responsibility split |

If the inventory is a stale spreadsheet that disagrees with reality, the rest of the program is theater. Keeping it current is itself a controlled, owned activity — not a once-a-year cleanup.

**5. Prioritization and risk-based effort.** The VMP defines how risk determines where effort goes — which systems get validated first, how deeply, and how often they are reviewed afterward. This is the bridge to ICH Q9 (Quality Risk Management), whose principles — that risk evaluation should be based on scientific knowledge and ultimately link to patient protection, and that the level of effort should be commensurate with the level of risk — apply directly to validation prioritization. A high-criticality, custom (Category 5) system handling release decisions sits at one end; a Category 3 utility system with no direct GxP data at the other. The VMP should give the matrix or scoring logic that places systems on that spectrum, because that placement is what later justifies a two-year review interval for one system and an annual one for another.

A VMP should also state its supporting infrastructure expectations — that production sits on qualified infrastructure, that there are procedures for backup and restore, business continuity, security and access management, audit trails, periodic review, and decommissioning — even if the detailed procedures live in separate SOPs. The VMP is the map that shows those procedures exist and connect.

## The periodic review obligation

Validation is a point-in-time conclusion: *as configured, tested, and documented on this date, the system is fit for its intended use.* The problem is that systems do not stay frozen. They get patched, upgraded, re-configured, integrated with new interfaces, moved to new servers, and operated by new people running new processes. Every one of those changes is a chance for the validated state to quietly erode. Periodic review is the control that periodically re-asks the question the original validation answered: *is this system still in a validated state today?*

The requirement is explicit. EU GMP Annex 11, Section 11 states that computerised systems should be periodically evaluated to confirm that they remain in a valid state and are compliant with GMP, and that such evaluations should include, where appropriate, the current range of functionality, deviation records, incidents, problems, upgrade history, performance, reliability, security, and the validation status reports. The MHRA's *GxP Data Integrity Guidance and Definitions* reinforces the same theme from the data-integrity angle — that the ongoing suitability and control of systems generating regulated data must be maintained, not assumed. GAMP 5 treats periodic review as a core operational-phase activity within the system life cycle, alongside change management, incident management, backup/restore, and security administration.

Periodic review is not re-validation. It is an evidence-gathering and assessment exercise that *concludes whether* the validated state still holds — and, if it does not, identifies the corrective action, which *may* be re-validation, remediation, or a return to controlled change. Confusing the two leads either to wasteful full re-qualification of stable systems or, worse, to skipping the assessment because "full re-validation seemed like too much."

### What a periodic review actually examines

A credible periodic review pulls evidence from the operational records accumulated since the last review and tests each against the assumption that the system is still controlled and fit for use. The inputs below map directly to what Annex 11 Section 11 contemplates.

| Review input | What you are checking |
|---|---|
| Change control records since last review | Were all changes assessed for validation impact and properly documented? Any change that bypassed control? |
| Deviations, incidents, problems | Recurring failures, unresolved root causes, patterns pointing to an eroded validated state |
| Configuration vs. validated baseline | Does the live configuration still match what was validated and documented? |
| Upgrade / patch history | Were OS, database, and application patches risk-assessed and, where needed, re-tested? |
| Audit trail review records | Is the audit trail enabled, complete, and actually being reviewed per procedure? |
| User access / security | Access list current, segregation of duties intact, leavers removed, privileges appropriate? |
| Backup and restore | Backups running and — critically — a restore actually verified, not just assumed |
| Business continuity / DR | Recovery plan current and tested |
| SOP and training currency | Procedures match the current system; users trained on the current version |
| Supplier status | Vendor support still active; vendor audit/assessment current; SaaS change notifications reviewed |
| Open CAPAs from prior review | Were last review's actions closed and effective? |

The output is a periodic review report with a clear, signed conclusion — *system remains in a validated state*, *remains validated with actions*, or *validated state not confirmed* — plus a CAPA list with owners and due dates, and the date set for the next review. QA approval of that conclusion is the control that makes the review more than a self-attestation by the system owner.

### Frequency by risk

There is no universal regulatory number for review frequency; Annex 11 says "periodically" and leaves the interval to a risk-based, justified rationale. That is a feature, not a gap — it forces the organization to defend its intervals against criticality rather than apply a blanket rule. The VMP should define the scheme; a defensible one ties interval to the same criticality used for validation prioritization.

| Risk / criticality tier | Typical review interval | Rationale |
|---|---|---|
| High — direct product-quality, patient-safety, or batch-release impact; complex/custom (Cat 5); high change rate | 12 months | Highest consequence of an undetected eroded state; most exposed to drift |
| Medium — supports GxP data but not release decisions; configured (Cat 4); moderate change | 24 months | Material but bounded impact; slower drift |
| Low — indirect GxP relevance; non-configured (Cat 3) or stable infrastructure; minimal change | 36 months | Low consequence and low change; longer interval defensible |

Two refinements matter. First, the interval is a maximum, not a target — a high change rate or a major incident should pull a review forward regardless of the calendar. Second, the rationale for each tier must be written and approved, because an inspector who sees a three-year interval on a release-critical system will ask precisely one question: *justify that.* "It's our standard" is not a justification; a documented risk assessment tied to ICH Q9 principles is.

## What triggers re-validation (versus a periodic review)

Periodic review is scheduled. Re-validation is *triggered* — by an event that plausibly invalidates the prior validation conclusion. The distinction the program must encode is that change control, not the calendar, is the primary trigger mechanism: every change is impact-assessed, and the assessment decides whether no validation action, a targeted re-test, or full re-validation is warranted. Annex 15 frames this directly — significant changes that could affect product quality or the validated/qualified state require evaluation and, where justified, re-qualification or re-validation.

Common re-validation (or partial re-validation) triggers:

- **Major application upgrades** — a new version that changes functionality, data structures, or the audit trail. A point patch may need only regression testing of affected functions; a major version generally needs a planned re-validation of impacted requirements.
- **Configuration changes to GxP-relevant functionality** — altered calculations, workflows, electronic signature behavior, audit-trail settings, or user-role definitions.
- **Infrastructure / platform migration** — moving to a new server, database engine, OS, or from on-premises to cloud/SaaS. The qualified platform changed, so the validated state must be re-confirmed on the new platform.
- **New or changed interfaces / integrations** — any new data flow into or out of the system, where data-transfer accuracy must be re-verified end to end.
- **Process or intended-use change** — the system is now used for a new GxP purpose the original validation never covered; the URS itself has effectively changed.
- **A periodic review that concludes the validated state is not confirmed** — drift, undocumented changes, or repeated incidents found during review feed directly into a re-validation CAPA.
- **Findings from data-integrity assessment, audit, or inspection** — a finding that the system's controls are inadequate is a trigger in its own right.

The governing principle is risk and impact, not the size of the change ticket. A one-line configuration change to a release-decision calculation is more consequential than a cosmetic UI upgrade touching a hundred screens. The impact assessment — not the change's apparent magnitude — sets the validation response, and that assessment must be documented and QA-reviewed for GxP-critical systems.

## What inspectors actually look for

Auditors and inspectors rarely read a VMP cover to cover. They sample, and they sample at the seams where programs break.

- **Inventory completeness.** The first request is usually the system list. Inspectors then probe for systems that *should* be on it but are not — the validated spreadsheet doing a calculation, the lab instrument's data station, the SaaS tool a department adopted without IT. A system performing a GxP function that is absent from the inventory is a finding, because it means the governance described in the VMP is not actually being applied to reality.
- **Periodic reviews that are real, not retrospective box-checks.** They will pull a review report and check whether it genuinely examined change history, deviations, access, and backups — or whether it is a template with a pre-written "remains validated" conclusion and no evidence behind it. A review that concludes "validated" while open deviations and undocumented changes sit in the same period is worse than no review, because it documents that the control failed to detect a known problem.
- **The change-control-to-validation link.** They trace a sample of changes and check whether each was impact-assessed for validation, and whether changes that should have triggered re-validation actually did. A patch applied to a GMP system with no documented impact assessment is a classic finding.
- **Audit trail and Part 11 controls in the operational phase.** For systems holding electronic records and signatures, FDA expects compliance with 21 CFR Part 11 — secure, time-stamped audit trails, controlled access, and signature controls — sustained across the system's life, not just demonstrated once at validation. Annex 11 and the MHRA data-integrity guidance reinforce that audit trails must be reviewed; a periodic review is where "are we actually reviewing audit trails per our SOP?" gets verified.
- **Overdue reviews and stale intervals.** A review past its due date, or a long interval on a high-criticality system without a documented risk rationale, is a quick finding that signals broader program drift.

What ties all of this together is consistency between what the VMP *says* the program does and what the records *show* the program did. The plan can be elegant; if the inventory is incomplete, reviews are overdue, and changes bypass impact assessment, the VMP becomes evidence *against* the organization — a documented standard it failed to meet.

## Bringing it together

The VMP and periodic review are two sides of the same discipline. The VMP defines the program once — scope, life cycle, roles, inventory, and how risk concentrates effort — so that every project is validated to one consistent, defensible standard. Periodic review keeps the conclusion of each of those projects honest over time, re-confirming on a risk-based schedule that systems still hold the validated state they were granted, and routing change-driven erosion into re-validation when an impact assessment demands it.

When both work, the program can keep a simple promise: at any moment, the organization can produce a current list of its GxP computerized systems, state the validation status of each, and show evidence — recent, signed, and grounded in operational records — that each remains fit for its intended use. That is what an inspector is looking for, and it matters beyond the audit, because behind many of those systems is a record that decides whether a product is safe to release.

### Key references

- EU GMP Annex 11 — *Computerised Systems* (validation, risk management, periodic evaluation, supplier responsibilities, audit trails). [EudraLex Volume 4, Annex 11](https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en)
- EU GMP Annex 15 — *Qualification and Validation* (Validation Master Plan, change control, re-qualification triggers).
- ICH Q9 — *Quality Risk Management* (risk-based effort, link to patient protection). [ICH Q9](https://www.ich.org/page/quality-guidelines)
- ISPE GAMP 5, 2nd Edition — *A Risk-Based Approach to Compliant GxP Computerized Systems* (software categories, life cycle, operational-phase activities including periodic review).
- FDA — *Computer Software Assurance for Production and Quality System Software* (draft guidance, 2022), and 21 CFR Part 11 — *Electronic Records; Electronic Signatures*. [21 CFR Part 11](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11)
- MHRA — *'GxP' Data Integrity Guidance and Definitions* (ongoing control and suitability of data-generating systems).
