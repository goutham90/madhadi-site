---
title: "CDMO Oversight and Quality Agreements"
description: "How to allocate GMP responsibilities, retain audit rights, and control data integrity when manufacturing or testing is outsourced to a contract organization."
pubDate: 2026-06-20
tags: ["quality agreement", "CDMO", "outsourcing", "data integrity", "EU GMP Chapter 7", "audit rights", "batch disposition", "supplier quality"]
pillar: "quality-assurance"
tier: "Intermediate"
---

Outsourcing manufacturing or testing does not outsource the obligation to comply. That single sentence is the foundation of every quality agreement, and it is the one inspectors return to when a contract operation goes wrong. The product license holder, the Marketing Authorisation Holder in the EU, the application holder or the firm whose name is on the label in the US, remains accountable for the quality of every batch, regardless of how many parties touched it along the way.

A Contract Development and Manufacturing Organization (CDMO), a contract manufacturer (CMO), or a contract testing laboratory operates under your quality system as an extension of it, not as a separate island. The mechanism that makes that work is the quality agreement: a document, separate from the commercial supply contract, that allocates GMP responsibilities task by task. Get it right and an inspection of the contract site reflects well on both parties. Get it wrong and you discover during a 483 close-out who actually owned a control that nobody was running.

What follows is what the agreement must allocate, the regulatory basis for each obligation, how to build oversight that scales from a person-in-plant to a remote relationship, and the data integrity failure modes specific to contract labs and CMOs. This applies across drug substance and drug product, finished pharmaceuticals, biologics, sterile injectables, medical devices, combination products, and contract analytical testing. The modality changes the risk depth, not the principle.

## The regulatory frame: owner accountable, responsibilities allocated in writing

Two documents anchor the expectation, and you should be able to cite both by name in an interview.

**EU GMP Chapter 7, "Outsourced Activities"** governs any GMP activity contracted out, including manufacturing, analysis, and certain qualification and validation work. Its core principles: there must be a written contract between the Contract Giver (the owner) and the Contract Acceptor (the contractor); the contract must clearly establish the duties of each party; and the Contract Giver is responsible for assessing the legality, suitability, and competence of the Contract Acceptor before any work begins, and for ensuring the principles of GMP are followed. Chapter 7 also forbids the Contract Acceptor from subcontracting any of the work without the Contract Giver's prior written evaluation and approval, the "no silent subcontracting" rule that catches a surprising number of firms.

> "The Contract Giver is responsible for assessing the legality, suitability and the competence of the Contract Acceptor to successfully carry out the outsourced activities... The Contract Acceptor must not subcontract to a third party any of the work entrusted to him under the contract without the Contract Giver's prior evaluation and approval of the arrangements." (EU GMP Chapter 7)

**FDA's guidance "Contract Manufacturing Arrangements for Drugs: Quality Agreements"** (the agency's contract-manufacturing quality agreement guidance) frames the same expectation under 21 CFR Parts 210 and 211. It is explicit that the owner and the contract facility are both manufacturers under the CGMP regulations and both are responsible for ensuring the drug is produced in compliance. The guidance recommends a written quality agreement that defines each party's manufacturing activities and clarifies how they will comply with CGMP. It draws a clean line: the **commercial/business agreement** handles price, volume, capacity, and liability; the **quality agreement** handles GMP roles, responsibilities, and the mechanics of compliance. The two should not be conflated, and a quality term buried in a master supply agreement tends to get lost. The guidance is also explicit that a quality agreement does not, and cannot, shift CGMP responsibility away from either party: a contract does not relieve the owner of its obligation to ensure compliance, and it does not relieve the contractor of its obligation to follow CGMP.

For medical devices and combination products, the parallel concept lives in 21 CFR 820 (the Quality System Regulation, harmonizing toward ISO 13485 under the Quality Management System Regulation, QMSR, with the amended rule taking effect February 2, 2026) through purchasing controls and supplier evaluation. ISO 13485:2016 Clause 7.4 requires defined criteria for supplier selection, evaluation, and re-evaluation, with controls proportionate to the risk the purchased product or service poses, plus a written purchasing agreement that specifies what the supplier must notify the manufacturer about before changes. The principle is identical: responsibility flows down by contract, accountability does not transfer.

**ICH Q10 (Pharmaceutical Quality System)** closes the loop by treating outsourced activities and purchased materials as a management responsibility of the owner's PQS, requiring oversight of the supplier's performance over the life of the relationship, not just at qualification. ICH Q7 (Good Manufacturing Practice for Active Pharmaceutical Ingredients), Section 16, carries the same expectation specifically for contract manufacturers and contract laboratories handling APIs: written agreements, defined responsibilities, the prohibition on unauthorized subcontracting, and the owner's right to audit.

Three threads run through all of these and are worth memorizing as the spine of the topic:

1. The owner stays accountable. A contract allocates work, never accountability.
2. Responsibilities must be in writing, party by party, with no gaps.
3. Oversight is continuous, not a one-time qualification event.

## Commercial agreement vs. quality agreement: keep them separate

A frequent and avoidable failure is the firm that has one master supply agreement with a "quality" annex written by lawyers, and no standalone quality agreement reviewed and signed by both quality units. The two documents serve different masters and have different signatories.

| Topic | Commercial / supply agreement | Quality agreement |
|---|---|---|
| Owner | Procurement, legal, business | Quality units of both parties |
| Signatories | Authorized business officers | QA heads (and QP where relevant) |
| Price, volume, capacity, forecasting | Yes | No |
| Liability, indemnity, term, termination commercials | Yes | References, does not set GMP terms |
| GMP roles and responsibilities | No | Yes (the whole point) |
| Deviation/OOS/change/complaint flow | No | Yes |
| Batch disposition and release boundary | No | Yes |
| Audit rights and inspection notification | No | Yes |
| Data integrity and records retention | No | Yes |
| Change control over the document | Contract management | Document control under the QMS |

The quality agreement should be a controlled GMP document with a version number, an effective date, a defined review period (commonly every two to three years, or on a triggering change), and a cross-reference to the commercial agreement for the avoidance-of-conflict clause. Where the two documents disagree on a quality matter, the quality agreement should prevail, and it should say so.

## What a quality agreement must allocate

The agreement should read like a responsibility matrix, because that is what an inspector will reduce it to. The most defensible format is a RACI-style table covering every GMP touchpoint, with no row left to "to be determined." R means who performs the work, A means who is accountable for the outcome, C means who is consulted, I means who is informed. The categories below are the ones that consistently matter.

| Area | Typical owner role | Typical contractor role | Where ambiguity bites |
|---|---|---|---|
| Specifications and methods | Owns specs, approves methods | Executes per approved methods | Who controls revisions; method transfer ownership |
| Materials and components | May own qualification of certain materials | Receives, samples, tests, releases incoming | Vendor qualification split for raw materials |
| Batch record content | Approves master batch record | Executes and completes batch record | Who authors vs. approves changes |
| Deviations and investigations | Approves, may own root cause for product issues | Initiates, investigates site events | Escalation triggers and timelines |
| OOS / OOT results | Notified, concurs on disposition | Conducts lab investigation | Phase I vs. Phase II responsibilities |
| Change control | Approves changes affecting product | Notifies and implements | What counts as a notifiable change |
| Stability | Often owns program design | May execute pulls and testing | Storage, sample retention, data ownership |
| Batch disposition | Final release / QP certification | Manufacturing disposition, CoA/CoC | The two-tier release boundary |
| Complaints and recalls | Owns to regulators | Provides records, supports investigation | Notification within hours, not days |
| Audits and inspections | Right to audit; manages own inspections | Hosts audits; notifies of its inspections | Access scope and "for cause" rights |
| Records and retention | Defines retention period | Maintains and provides on request | Retention period and post-termination access |
| Regulatory communications | Owns submissions | Supports CMC sections, site data | Who notifies whom of regulatory contact |
| Training and qualification | Defines product-specific training needs | Trains and qualifies its operators | Product-specific vs. general GMP training |
| Validation (process, cleaning, methods) | Approves protocols and reports | Executes per approved protocols | Who owns the validation strategy and acceptance criteria |
| Environmental and utility monitoring | Reviews trends, sets alert/action limits | Performs monitoring, investigates excursions | Excursion notification threshold |

A few rows deserve more than a table cell.

### Batch disposition: the two-tier boundary

This is the area most often muddied. In practice there are two distinct decisions:

1. **Manufacturing disposition** at the contract site. The contractor's quality unit reviews the executed batch record, in-process and release testing, and any deviations, then concludes the batch was manufactured in compliance with the agreed process and specifications. The contractor issues a Certificate of Analysis and, where appropriate, a Certificate of Compliance/Conformance.

2. **Final release** by the owner. The owner's quality unit, and in the EU, the Qualified Person under Article 51 of Directive 2001/83/EC and Annex 16 to the EU GMP Guide, performs final certification before the batch is placed on the market. The QP relies on the contractor's work but does not blindly accept it; Annex 16 lays out the chain of confidence the QP must establish across all sites in the supply chain, and explicitly contemplates QPs at different stages relying on each other through documented arrangements.

The agreement must state who makes which decision, what package the owner receives to make the final call, and what the owner is *not* permitted to delegate. A common and defensible model: the contractor dispositions for manufacture and ships only after the owner's QP/quality unit grants final release; quarantine status is maintained until that release. Spell out the data package, executed batch record (or a defined summary plus full record on request), CoA, deviation summary, and any open investigations, and the timeline for delivering it.

A worked release-package definition you can lift into an agreement:

> For each batch, the Contract Acceptor will provide, within five business days of manufacturing disposition: the completed Certificate of Analysis against the agreed specification; a deviation summary listing all deviations with classification and disposition; a list of any open investigations affecting the batch; the executed master batch record (or a batch summary report with the full record available within two business days on request); and reprocessing/rework records, if any. The Contract Giver's Qualified Person/quality unit retains sole authority for final certification and market release. No batch ships before final release except under a documented, pre-approved quarantine-with-restricted-shipment arrangement.

Cross-link: see [batch disposition decisions](/articles/batch-disposition-decisions) and [Qualified Person batch release under Annex 16](/articles/qualified-person-batch-release-annex-16) for the mechanics each party runs on its side of this line.

### Change notification: define "notifiable" precisely

The most expensive failures here are silent changes. The contractor changes a supplier of a critical raw material, swaps a piece of equipment, moves an operation to a different suite, or "improves" a cleaning procedure, and the owner learns about it only when a batch fails or an inspector asks. EU GMP Chapter 7 places the obligation on the Contract Acceptor to inform the Contract Giver of anything that may affect product quality, and forbids subcontracting without approval.

A workable agreement does three things:

- **Enumerates change categories** that always require prior written approval before implementation: changes to the registered process, critical equipment, critical raw material suppliers, facility/location of a registered operation, analytical methods supporting release, primary packaging/container-closure, and any subcontracting.
- **Defines a notification-only tier** for changes assessed as having no product-quality impact, with a defined window (for example, notification within a set number of business days) and the owner's right to reclassify.
- **Forbids implementation of approval-tier changes before the owner concurs**, and ties this to the owner's regulatory filing obligations. Many such changes require a variation or supplement, and an unapproved-at-the-agency change can put product out of compliance even if technically sound.

A short change classification table you can hand to a contractor removes most of the argument:

| Change type | Tier | Action before implementation |
|---|---|---|
| Registered process parameter / critical step | Approval | Owner written approval; assess regulatory filing |
| Critical raw material supplier or grade | Approval | Owner approval; may need comparability/variation |
| Critical/major equipment replacement | Approval | Owner approval; assess requalification |
| Manufacturing suite or site change | Approval | Owner approval; almost always a regulatory filing |
| Release analytical method change | Approval | Owner approval; method transfer/validation |
| Primary packaging / container-closure | Approval | Owner approval; stability and filing impact |
| Non-critical consumable, equivalent grade | Notification | Notify within defined window; owner may reclassify |
| Like-for-like minor equipment, no GMP impact | Notification | Notify; owner may reclassify |
| Administrative / document formatting | Notification or log | Per agreed threshold |

The owner keeps the right to reclassify any notification-tier change as approval-tier. That single sentence prevents the contractor from grading its way around your oversight. See [change control for validated systems](/articles/change-control-validated-systems) and [quality in technology transfer](/articles/quality-in-technology-transfer) for how change and transfer interact.

### Audit rights: written, unconditional, and including "for cause"

The owner's right to audit is non-negotiable and must survive the commercial relationship's friction. State the routine audit cadence (commonly risk-based: higher-risk sterile or biologics operations annually, lower-risk operations on a longer interval justified by risk assessment), the right to **for-cause audits** triggered by events (recurring deviations, an OOS trend, a serious complaint, a regulatory action at the site), and the scope of access, areas, records, raw data, and personnel. Include the contractor's obligation to notify the owner of regulatory inspections of the site and to share inspection outcomes (for example, a 483 or inspection report relevant to the owner's product) within a defined timeframe.

Resist letting the contractor cap audits at one per year regardless of cause. A for-cause right that the commercial team negotiated away is a gap an inspector will find. Negotiate these audit terms explicitly:

- Routine audit frequency tied to a documented risk rating, not a flat number.
- For-cause audit right with no annual cap and a defined response window for the contractor to host (for example, within 30 days, or sooner for a serious event).
- Access scope: GMP areas relevant to the owner's product, batch records, raw electronic data and audit trails, training records, validation files, and the contractor's own supplier-qualification files.
- Notification of any regulatory inspection touching the owner's product, and sharing of the relevant findings (with commercially sensitive third-party content redacted) within a fixed number of business days.
- Notification of any serious GMP event (a critical deviation, a confirmed OOS on released product, a recall at the site) within hours, not at the next quarterly review.

Cross-link: [conducting a supplier audit](/articles/conducting-a-supplier-audit) and [audit finding classification](/articles/audit-finding-classification) cover how to run the audit itself and grade what you find.

## Qualifying the contractor before the first batch

Chapter 7 and FDA's guidance both put the burden of assessing competence on the owner *before* work begins. A defensible qualification has three legs:

1. **Risk assessment** of what is being outsourced. A sterile fill, a biologic, a cytotoxic or high-potency compound, or an implantable device carries different risk than a simple secondary-packaging operation, and the depth of qualification should scale to it. ICH Q9(R1) (Quality Risk Management) is the reference for documenting the rationale. See [quality risk management](/articles/quality-risk-management).
2. **On-site qualification audit** by trained GMP auditors, covering the quality system, the specific operations to be performed, data integrity controls, and the contractor's own oversight of *its* suppliers. A questionnaire is a screen, not a substitute. A desktop or remote qualification may be acceptable only for low-risk activities with a documented justification.
3. **Technical and method transfer**, with documented protocols and acceptance criteria, before routine production. Analytical method transfer in particular should follow a protocol with predefined comparative acceptance criteria; the relevant USP general chapters on validation and transfer of procedures (USP <1225> Validation of Compendial Procedures and USP <1224> Transfer of Analytical Procedures) and ICH Q2(R2) for method validation are the technical basis. See [analytical method transfer](/articles/analytical-method-transfer) and [method validation essentials](/articles/method-validation-essentials).

A practical qualification sequence:

1. Define the scope and the criticality of the outsourced activity.
2. Run a documented risk assessment (process, product, and data-integrity risk).
3. Screen candidates with a quality questionnaire and a review of inspection history, certifications, and any public regulatory actions.
4. Perform the on-site qualification audit; classify and track findings to closure or a justified risk acceptance.
5. Negotiate and execute the quality agreement and the commercial agreement.
6. Run technology and method transfer with protocols and acceptance criteria.
7. Approve the contractor in the approved supplier list with a defined scope, then run confirmation/engineering and validation batches before routine supply.

Qualification is not a one-time gate. ICH Q10 expects ongoing performance monitoring, periodic requalification audits, performance metrics, and a documented re-evaluation cadence tied to risk and to the contractor's track record. See [supplier and vendor qualification](/articles/supplier-vendor-qualification) for the program-level view.

### Acceptance criteria: how you know qualification is sound

- A documented risk assessment exists and the qualification depth matches the risk.
- The on-site audit happened (for any non-trivial activity), findings are graded, and critical/major findings are closed or formally risk-accepted with rationale.
- A signed quality agreement exists, dated, version-controlled, and signed by both quality units before the first GMP batch.
- Technology/method transfer is complete with met acceptance criteria.
- The contractor sits on the approved supplier list with an explicit scope, and a re-evaluation date is set.

## Oversight models: person-in-plant to virtual

How closely you watch depends on risk, product complexity, the contractor's maturity, and the stage of the relationship. The models below are points on a spectrum, and most programs blend them.

**Person-in-plant (PIP).** A representative of the owner is physically present during specified operations: campaign starts, critical steps, first batches after a change, or technology transfer runs. The PIP observes execution against the agreed process, flags departures in real time, and accelerates communication. PIP is expensive and is usually reserved for early relationships, high-risk products (sterile, biologics, advanced therapies, high-potency), or recovery from a quality problem. The agreement should define the PIP's scope and authority: an observer who escalates, not a second operator who executes or signs the contractor's records. Blurring that line creates its own compliance problem, because a PIP who signs or directs the contractor's GMP records muddies who is accountable for the work.

**Resident or embedded oversight.** A lighter, longer-running version: a quality liaison who is on site frequently but not for every operation, often used during ramp-up or for a strategically important product.

**Periodic on-site audits plus document review.** The standard steady-state model. Routine and for-cause audits anchor the relationship; between audits the owner reviews batch records (or defined summaries), deviation and OOS reports, change notifications, and trended quality metrics.

**Virtual / remote oversight.** Increasingly common and, used well, genuinely effective, but it raises the data integrity stakes, because the owner sees what the contractor chooses to send rather than what an auditor on the floor would see. Effective remote oversight combines:

- A defined **quality metrics dashboard** reviewed on a fixed cadence (deviations by category and trend, OOS/OOT rate, right-first-time, on-time investigation closure, change notifications, complaint linkage). See [quality metrics and KPIs](/articles/quality-metrics-and-kpis).
- **Periodic Product Quality Reviews / Annual Product Reviews** as required under EU GMP Chapter 1 and 21 CFR 211.180(e), with the agreement stating who compiles which sections and how source data is provided. See [annual product review / PQR](/articles/annual-product-review-pqr).
- **Direct, controlled read access** where feasible, for example audit-only access to the contractor's electronic batch record or LIMS, or a documented mechanism to request raw data (chromatograms, audit trails) rather than only summary reports.
- A **management review and escalation forum** (a joint quality council) with defined membership, cadence, and decision authority. See [management review under Q10](/articles/management-review-q10).

A remote relationship is only as good as the owner's ability to pull raw data on demand. If the agreement gives you nothing but the contractor's curated summaries, you have outsourced your visibility along with the work.

### Choosing the model: a quick rule of thumb

| Situation | Default oversight intensity |
|---|---|
| New relationship, high-risk product (sterile, biologic, cell/gene, high-potency) | PIP for first campaigns + on-site audit + full data review |
| New relationship, lower-risk product (packaging, simple oral solid) | On-site qualification + early batch review, then steady-state |
| Mature relationship, strong track record | Periodic audit + metrics dashboard + sampled record review |
| Post-event recovery (483, recall, repeat deviation) | Step up: PIP/embedded + for-cause audit + tightened notification |

## Roles and responsibilities

Inspectors expect named ownership, not "the quality team." A clean allocation:

- **Owner QA (supplier quality / external manufacturing).** Owns the qualification, the quality agreement, change/deviation/OOS review, the audit program, and the performance review. The single throat to choke for the relationship.
- **Owner Qualified Person (EU) / owner quality unit (US).** Owns final batch certification/release and the Annex 16 reliance chain.
- **Owner technical/CMC and validation.** Owns specifications, process and method ownership, transfer, and the regulatory filing impact of changes.
- **Contractor quality unit.** Owns manufacturing disposition, site investigations, audit hosting, and notification to the owner.
- **Contractor manufacturing/QC.** Executes the process and testing per approved documents.
- **Both procurement/legal.** Own the commercial agreement and keep it from contradicting the quality agreement.

The mistake to avoid: a quality agreement signed only by procurement and a commercial counterpart, with no quality-unit signature on either side. If the heads of quality did not sign it, an inspector will ask who actually agreed to the GMP terms.

## Data integrity risks specific to contract labs and CMOs

Data integrity is the area where contract relationships fail in ways an internal operation might not, because the incentives and the visibility differ. The expectations are set out in MHRA's "GXP Data Integrity Guidance and Definitions" (2018), FDA's "Data Integrity and Compliance With Drug CGMP" guidance (2018), PIC/S PI 041 ("Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments"), and WHO's data integrity guidance, and the ALCOA+ principles (Attributable, Legible, Contemporaneous, Original, Accurate, plus Complete, Consistent, Enduring, Available) run through all of them. See [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and [data integrity foundations](/articles/data-integrity-foundations). The risks below show up disproportionately at contract sites.

**Testing into compliance and selective reporting.** A contract lab paid per passing batch has a structural incentive to make results pass. The classic failure modes, unexplained reinjections, "trial" or "test" injections run before the official sequence, samples renamed and rerun, peaks reintegrated until they pass, are exactly what inspectors hunt in chromatographic audit trails. Mitigation lives partly in the agreement (the owner's right to review raw data and audit trails for its product, the requirement that all data generated be reported, an explicit prohibition on testing into compliance) and partly in oversight (periodically pulling the full audit trail for a batch and reconciling it against the CoA). See [chromatography data system integrity](/articles/chromatography-data-system-integrity).

**Audit trails disabled, shared, or unreviewed.** Inspectors routinely find audit trails switched off on chromatography or balance software, instruments running under a single shared "admin" login, or audit trails that are technically on but never reviewed. EU GMP Annex 11 (Computerised Systems) and 21 CFR Part 11 require that electronic records be attributable to unique individuals and that audit trails be available and reviewed. The agreement should require unique user accounts, audit trails enabled on all GMP-relevant systems, and a documented audit-trail review process, and the owner should verify these during qualification and audits, not assume them. See [audit trail design and review](/articles/audit-trail-design-and-review) and [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11).

**Orphan, hybrid, and uncontrolled data.** Paper printouts treated as "original" while the underlying electronic data is discarded; results captured in uncontrolled spreadsheets; data on local instrument drives that never enters a managed system. PIC/S PI 041 is built around the complete data lifecycle and the distinction between static and dynamic records. For dynamic records (a chromatogram you can reprocess), a printout is not the original. The owner's qualification audit should map, for each critical test, where the true raw data lives, who controls it, and how it is backed up and retained. See [static, dynamic records and true copies](/articles/static-dynamic-records-true-copies) and [hybrid paper and electronic records](/articles/hybrid-paper-electronic-records).

**Subcontracted and "off-the-books" testing.** A contract lab quietly sends a test it cannot perform to a third lab, or a CMO routes an operation to an unqualified subcontractor. This violates the Chapter 7 no-subcontracting-without-approval rule and breaks the data integrity chain: the owner cannot vouch for raw data it has never seen from a site it has never qualified. The agreement must prohibit it explicitly and the owner should periodically confirm that all testing happens where the agreement says it does.

**Retention and post-termination access.** When a relationship ends, the owner still needs the records, for complaints, recalls, and inspections that may come years later. The agreement must fix the retention period (at least matching the owner's regulatory retention obligations) and guarantee access to records, including raw electronic data and the means to read it, after termination. A contractor that goes out of business or migrates off a legacy system can strand years of GMP records if this was never negotiated. See [data migration validation](/articles/data-migration-validation) and [backup, restore and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation).

### A practical data integrity checklist for contract sites

- For each critical test, is the true raw data identified, and does the owner have a right to it (not just the summary)?
- Are audit trails enabled on all GMP systems, and is there a documented, performed audit-trail review?
- Are user accounts unique and role-controlled, no shared admin logins?
- Is there a written prohibition on testing into compliance and on reporting only passing results?
- Is all subcontracting prohibited without prior written approval, and verified in practice?
- Are retention periods and post-termination access defined and sufficient?
- Can the owner pull a full batch's raw data and reconcile it to the CoA on demand?
- Is system time synchronized and protected, so contemporaneous timestamps can be trusted? See [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).

## A worked example: tracing one event through the agreement

Walk a single OOS through the relationship to see whether the agreement actually functions. The contract lab gets an OOS on assay for a released-pending batch.

1. **Detection and Phase I (contractor).** The contract lab's analyst flags the OOS, secures the original data, and the contractor's quality unit opens a Phase I laboratory investigation to check for assignable lab error, per its SOP and USP/FDA OOS expectations. The agreement says the contractor runs Phase I.
2. **Notification (agreement-driven).** Because the agreement defines an OOS on the owner's product as a same-day notification event, the owner's supplier-quality contact is informed within the agreed window, with the raw data and the Phase I status, not after Phase II concludes.
3. **Concurrence and Phase II (joint).** If Phase I finds no assignable cause, a Phase II investigation extends to the manufacturing process. The agreement says the owner concurs on hypothesis testing and on any decision to invalidate the original result. Neither party invalidates a result unilaterally.
4. **Disposition (boundary).** The contractor cannot release the batch. Manufacturing disposition stays at the contractor; final release stays with the owner's QP/quality unit. If the OOS stands, the batch is rejected, and the agreement defines who notifies whom and the destruction/return path.
5. **Data integrity reconciliation (oversight).** During the next audit, the owner pulls the full chromatographic audit trail for that batch and reconciles every injection against the reported result, confirming no unreported reinjections or reintegrations sit behind the CoA.

If any step in that chain has no owner in the agreement, that is the gap. See [OOS investigation process](/articles/oos-investigation-process) and [deviation management](/articles/deviation-management) for the underlying procedures.

## What inspectors actually look for

When a regulator inspects a contract relationship, at either site, a recognizable pattern of questions emerges:

- **Is there a current, signed quality agreement, and does reality match it?** They will pick an activity and trace who actually performed it against who the agreement says owns it. A mismatch, a control the agreement assigns to one party that neither is running, is a classic finding.
- **How was the contractor qualified, and is qualification current?** Expect them to ask for the qualification audit, the risk assessment, and evidence of ongoing oversight, not just an initial approval.
- **Are deviations, OOS, and changes flowing as the agreement requires?** They will look for site events the owner should have been told about and was not, and for changes implemented without the owner's approval.
- **Batch disposition chain.** Who released, on what basis, and did the owner's quality unit/QP have what it needed? Annex 16 makes the QP's reliance chain a focus in the EU.
- **Data integrity at the contract lab.** Audit trails, shared logins, raw data location, and any sign of selective reporting. This is now a default line of inquiry, not an exception.

### Common findings and how they read in a 483 or inspection report

- Quality agreement absent, expired, unsigned by a quality unit, or contradicting the supply agreement.
- Responsibilities ambiguous or in conflict, a control owned by neither party in practice.
- Inadequate oversight: no periodic audit, no metric review, qualification "archived" rather than maintained.
- Changes at the contract site implemented without owner notification or approval.
- Deviations/OOS not escalated to the owner per the agreement.
- Data integrity at the contract lab: disabled or unreviewed audit trails, shared logins, unexplained reinjections.
- Unauthorized subcontracting, work routed to an unqualified third party.
- Owner cannot demonstrate it can access the contractor's raw data.

See [FDA warning letter patterns](/articles/fda-warning-letters-patterns) and [483 and warning letter response](/articles/483-warning-letter-response) for how these are written up and answered.

## Interview-ready: questions and how to answer them

**"Who is responsible for GMP compliance when you outsource manufacturing?"**
Both parties. The owner and the contract facility are each manufacturers under CGMP (21 CFR 210/211) and under EU GMP Chapter 7. A contract allocates the work; accountability for compliance does not transfer. The owner remains accountable for product quality and for assessing and overseeing the contractor.

**"What is the difference between the quality agreement and the supply agreement?"**
The supply (commercial) agreement covers price, volume, capacity, and liability and is signed by business officers. The quality agreement covers GMP roles, responsibilities, and the mechanics of compliance (deviations, OOS, changes, disposition, audits, data integrity, retention) and is signed by the quality units. They must not contradict each other; where they do on a quality matter, the quality agreement should prevail.

**"What is the 'no silent subcontracting' rule?"**
EU GMP Chapter 7 (and ICH Q7 Section 16) forbid the Contract Acceptor from subcontracting any of the contracted work to a third party without the Contract Giver's prior written evaluation and approval. It matters because the owner cannot vouch for data or work from a site it has never qualified, which is both a GMP and a data integrity failure.

**"Walk me through batch release for an outsourced product."**
Two tiers. The contractor's quality unit makes the manufacturing disposition (executed record, in-process and release testing, deviations) and issues the CoA. The owner's quality unit, and in the EU the QP under Article 51 of Directive 2001/83/EC and Annex 16, makes the final certification and market release, relying on a defined data package but not blindly. The product stays in quarantine until final release.

**"How do you oversee a contract site you cannot easily visit?"**
Remote oversight built on a metrics dashboard reviewed on a cadence, defined PQR/APR contributions, a documented right and mechanism to pull raw data and audit trails on demand, change/deviation/OOS notification triggers, and a joint quality council for escalation. The hard requirement is the ability to reach the contractor's raw data, not just its summaries.

**"What data integrity risks are higher at a contract lab than in-house?"**
The incentive to make results pass (testing into compliance, selective reporting), reduced day-to-day visibility, and the temptation to subcontract quietly. Mitigation: contractual right to all raw data and audit trails, a written prohibition on testing into compliance, verification of unique logins and audit-trail review during audits, and periodic reconciliation of a full batch's raw data against the CoA.

**"What would you check first if asked to review a quality agreement?"**
Is it signed by both quality units and current? Does every GMP activity have a single clear owner with no gaps (especially disposition, change notification, deviation/OOS flow, audit and for-cause rights, data integrity and raw-data access, retention and post-termination access)? Does it contradict the supply agreement? Does reality match what it says?

**"How often should a contractor be audited?"**
Risk-based, not a flat number. Common practice is annual for higher-risk operations (sterile, biologics) and a justified longer interval for lower-risk work, plus an unconditional for-cause right with no annual cap, triggered by deviation trends, OOS trends, serious complaints, or regulatory action at the site.

## Practical tips

- Sequence the quality agreement before the first GMP batch, never after. A retroactive agreement is a finding waiting to happen.
- Make the heads of quality sign it. If only procurement signed, you do not really have a quality agreement.
- Build the change classification table into the agreement so the contractor cannot grade its way around your oversight, and keep the owner's right to reclassify.
- Negotiate raw-data access and post-termination retention up front. These are nearly impossible to add after a relationship sours or the contractor exits a system.
- Keep qualification alive: a metrics review and a periodic audit cadence, not a binder from three years ago.
- Reconcile, do not assume. Periodically pull a full batch's audit trail and tie it to the CoA. That single habit catches most contract-lab data integrity problems.
- Walk a real event (an OOS, a change, a deviation) through the agreement once a year to confirm every step still has an owner.

Related reading: [supplier and vendor qualification](/articles/supplier-vendor-qualification), [conducting a supplier audit](/articles/conducting-a-supplier-audit), [quality in technology transfer](/articles/quality-in-technology-transfer), [batch disposition decisions](/articles/batch-disposition-decisions), [Qualified Person batch release under Annex 16](/articles/qualified-person-batch-release-annex-16), [supply chain data integrity](/articles/supply-chain-data-integrity), and [ICH Q7 API GMP](/articles/ich-q7-api-gmp).

The cleanest defense is also the simplest to state: a current quality agreement that matches what each party actually does, a qualification file that is alive rather than archived, a flow of deviations/OOS/changes that demonstrably reaches the owner, a disposition chain with a clear final-release boundary, and the ability to reach into the contractor's raw data when you need to. Outsourcing the work is routine. Outsourcing the accountability is impossible, and the quality agreement is how you prove you never tried.
