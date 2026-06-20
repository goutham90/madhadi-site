---
title: "CDMO Oversight and Quality Agreements"
description: "How to allocate responsibilities, retain audit rights, and control data integrity when manufacturing or testing is outsourced to a contract organization."
pubDate: 2026-06-20
tags: ["quality agreement", "CDMO", "outsourcing", "data integrity", "EU GMP Chapter 7", "audit rights", "batch disposition", "supplier quality"]
pillar: "quality-assurance"
tier: "Intermediate"
---

Outsourcing manufacturing or testing does not outsource the obligation to comply. That single sentence is the foundation of every quality agreement, and it is the one inspectors return to when a contract operation goes wrong. The product license holder — the Marketing Authorisation Holder in the EU, the application holder or the firm whose name is on the label in the US — remains accountable for the quality of every batch, regardless of how many parties touched it along the way.

A Contract Development and Manufacturing Organization (CDMO), a contract manufacturer (CMO), or a contract testing laboratory operates under your quality system as an extension of it, not as a separate island. The mechanism that makes that work is the quality agreement: a document, separate from the commercial supply contract, that allocates GMP responsibilities task by task. Get it right and an inspection of the contract site reflects well on both parties. Get it wrong and you discover during a 483 close-out who actually owned a control that nobody was running.

What follows is what the agreement must allocate, the regulatory basis for each obligation, how to build oversight that scales from a person-in-plant to a remote relationship, and the data integrity failure modes specific to contract labs and CMOs.

## The regulatory frame: owner accountable, responsibilities allocated in writing

Two documents anchor the expectation.

**EU GMP Chapter 7 — "Outsourced Activities"** governs any GMP activity contracted out, including manufacturing, analysis, and certain qualification and validation work. Its core principles: there must be a written contract between the Contract Giver (the owner) and the Contract Acceptor (the contractor); the contract must clearly establish the duties of each party; and the Contract Giver is responsible for assessing the legality, suitability, and competence of the Contract Acceptor before any work begins, and for ensuring the principles of GMP are followed. Chapter 7 also forbids the Contract Acceptor from subcontracting any of the work without the Contract Giver's prior written evaluation and approval — the "no silent subcontracting" rule that catches a surprising number of firms.

**FDA's guidance "Contract Manufacturing Arrangements for Drugs: Quality Agreements"** (the agency's contract-manufacturing quality agreement guidance) frames the same expectation under 21 CFR Parts 210 and 211. It is explicit that the owner and the contract facility are both manufacturers under the CGMP regulations and both are responsible for ensuring the drug is produced in compliance. The guidance recommends a written quality agreement that defines each party's manufacturing activities and clarifies how they will comply with CGMP. It draws a clean line: the **commercial/business agreement** handles price, volume, capacity, and liability; the **quality agreement** handles GMP roles, responsibilities, and the mechanics of compliance. The two should not be conflated, and a quality term buried in a master supply agreement tends to get lost.

For medical devices and combination products, the parallel concept lives in 21 CFR 820 (the Quality System Regulation, now harmonizing toward ISO 13485 under the Quality Management System Regulation) through purchasing controls and supplier evaluation. ISO 13485:2016 Clause 7.4 requires defined criteria for supplier selection, evaluation, and re-evaluation, with controls proportionate to the risk the purchased product or service poses. The principle is identical: responsibility flows down by contract, accountability does not transfer.

ICH Q10 (Pharmaceutical Quality System) closes the loop by treating outsourced activities and purchased materials as a management responsibility of the owner's PQS, requiring oversight of the supplier's performance over the life of the relationship — not just at qualification.

## What a quality agreement must allocate

The agreement should read like a responsibility matrix, because that is what an inspector will reduce it to. The most defensible format is a RACI-style table covering every GMP touchpoint, with no row left to "to be determined." The categories below are the ones that consistently matter.

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

A few rows deserve more than a table cell.

### Batch disposition: the two-tier boundary

This is the area most often muddied. In practice there are two distinct decisions:

1. **Manufacturing disposition** at the contract site. The contractor's quality unit reviews the executed batch record, in-process and release testing, and any deviations, then concludes the batch was manufactured in compliance with the agreed process and specifications. The contractor issues a Certificate of Analysis and, where appropriate, a Certificate of Compliance/Conformance.

2. **Final release** by the owner. The owner's quality unit — and in the EU, the Qualified Person under Article 51 of Directive 2001/83/EC and Annex 16 to the EU GMP Guide — performs final certification before the batch is placed on the market. The QP relies on the contractor's work but does not blindly accept it; Annex 16 lays out the chain of confidence the QP must establish across all sites in the supply chain, and explicitly contemplates QPs at different stages relying on each other through documented arrangements.

The agreement must state who makes which decision, what package the owner receives to make the final call, and what the owner is *not* permitted to delegate. A common and defensible model: the contractor dispositions for manufacture and ships only after the owner's QP/quality unit grants final release; quarantine status is maintained until that release. Spell out the data package — executed batch record (or a defined summary plus full record on request), CoA, deviation summary, and any open investigations — and the timeline for delivering it.

### Change notification: define "notifiable" precisely

The most expensive failures here are silent changes. The contractor changes a supplier of a critical raw material, swaps a piece of equipment, moves an operation to a different suite, or "improves" a cleaning procedure — and the owner learns about it only when a batch fails or an inspector asks. EU GMP Chapter 7 places the obligation on the Contract Acceptor to inform the Contract Giver of anything that may affect product quality, and forbids subcontracting without approval.

A workable agreement does three things:

- **Enumerates change categories** that always require prior written approval before implementation: changes to the registered process, critical equipment, critical raw material suppliers, facility/location of a registered operation, analytical methods supporting release, and any subcontracting.
- **Defines a notification-only tier** for changes assessed as having no product-quality impact, with a defined window (for example, notification within a set number of business days) and the owner's right to reclassify.
- **Forbids implementation of approval-tier changes before the owner concurs**, and ties this to the owner's regulatory filing obligations — many such changes require a variation or supplement, and an unapproved-at-the-agency change can put product out of compliance even if technically sound.

### Audit rights: written, unconditional, and including "for cause"

The owner's right to audit is non-negotiable and must survive the commercial relationship's friction. State the routine audit cadence (commonly risk-based: higher-risk sterile or biologics operations annually, lower-risk operations on a longer interval justified by risk assessment), the right to **for-cause audits** triggered by events (recurring deviations, an OOS trend, a serious complaint, a regulatory action at the site), and the scope of access — areas, records, raw data, and personnel. Include the contractor's obligation to notify the owner of regulatory inspections of the site and to share inspection outcomes (e.g., a 483 or inspection report relevant to the owner's product), within a defined timeframe.

Resist letting the contractor cap audits at one per year regardless of cause. A for-cause right that the commercial team negotiated away is a gap an inspector will find.

## Qualifying the contractor before the first batch

Chapter 7 and FDA's guidance both put the burden of assessing competence on the owner *before* work begins. A defensible qualification has three legs:

1. **Risk assessment** of what is being outsourced. A sterile fill, a biologic, or a low-dose potent compound carries different risk than a simple secondary-packaging operation, and the depth of qualification should scale to it. ICH Q9 (Quality Risk Management) is the reference for documenting the rationale.
2. **On-site qualification audit** by trained GMP auditors, covering the quality system, the specific operations to be performed, data integrity controls, and the contractor's own oversight of *its* suppliers. A questionnaire is a screen, not a substitute.
3. **Technical and method transfer**, with documented protocols and acceptance criteria, before routine production. Analytical method transfer in particular should follow a protocol with predefined comparative acceptance criteria; the relevant USP general chapters on validation and transfer of procedures (the chapters covering validation of compendial procedures and transfer of procedures) and ICH Q2(R2) for method validation are the technical basis.

Qualification is not a one-time gate. ICH Q10 expects ongoing performance monitoring — periodic requalification audits, performance metrics, and a documented re-evaluation cadence tied to risk and to the contractor's track record.

## Oversight models: person-in-plant to virtual

How closely you watch depends on risk, product complexity, the contractor's maturity, and the stage of the relationship. The models below are points on a spectrum, and most programs blend them.

**Person-in-plant (PIP).** A representative of the owner is physically present during specified operations — campaign starts, critical steps, first batches after a change, or technology transfer runs. The PIP observes execution against the agreed process, flags departures in real time, and accelerates communication. PIP is expensive and is usually reserved for early relationships, high-risk products (sterile, biologics, ATMPs), or recovery from a quality problem. The agreement should define the PIP's scope and authority: an observer who escalates, not a second operator who executes or signs the contractor's records. Blurring that line creates its own compliance problem.

**Resident or embedded oversight.** A lighter, longer-running version: a quality liaison who is on site frequently but not for every operation, often used during ramp-up or for a strategically important product.

**Periodic on-site audits plus document review.** The standard steady-state model. Routine and for-cause audits anchor the relationship; between audits the owner reviews batch records (or defined summaries), deviation and OOS reports, change notifications, and trended quality metrics.

**Virtual / remote oversight.** Increasingly common and, used well, genuinely effective — but it raises the data integrity stakes, because the owner sees what the contractor chooses to send rather than what an auditor on the floor would see. Effective remote oversight combines:

- A defined **quality metrics dashboard** reviewed on a fixed cadence (deviations by category and trend, OOS/OOT rate, right-first-time, on-time investigation closure, change notifications, complaint linkage).
- **Periodic Product Quality Reviews / Annual Product Reviews** as required under EU GMP Chapter 1 and 21 CFR 211.180(e), with the agreement stating who compiles which sections and how source data is provided.
- **Direct, controlled read access** where feasible — for example, audit-only access to the contractor's electronic batch record or LIMS, or a documented mechanism to request raw data (chromatograms, audit trails) rather than only summary reports.
- A **management review and escalation forum** (a joint quality council) with defined membership, cadence, and decision authority.

A remote relationship is only as good as the owner's ability to pull raw data on demand. If the agreement gives you nothing but the contractor's curated summaries, you have outsourced your visibility along with the work.

## Data integrity risks specific to contract labs and CMOs

Data integrity is the area where contract relationships fail in ways an internal operation might not, because the incentives and the visibility differ. The expectations are set out in MHRA's "GXP Data Integrity Guidance and Definitions," FDA's data integrity guidance for CGMP, PIC/S PI 041 ("Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments"), and WHO's data integrity guidance — and the ALCOA+ principles (Attributable, Legible, Contemporaneous, Original, Accurate, plus Complete, Consistent, Enduring, Available) run through all of them. The risks below are the ones that show up disproportionately at contract sites.

**Testing into compliance and selective reporting.** A contract lab paid per passing batch has a structural incentive to make results pass. The classic failure modes — unexplained reinjections, "trial" or "test" injections run before the official sequence, samples renamed and rerun, peaks reintegrated until they pass — are exactly what inspectors hunt in chromatographic audit trails. Mitigation lives partly in the agreement (the owner's right to review raw data and audit trails for its product, the requirement that all data generated be reported, an explicit prohibition on testing into compliance) and partly in oversight (periodically pulling the full audit trail for a batch and reconciling it against the CoA).

**Audit trails disabled, shared, or unreviewed.** Inspectors routinely find audit trails switched off on chromatography or balance software, instruments running under a single shared "admin" login, or audit trails that are technically on but never reviewed. Annex 11 (Computerised Systems) and 21 CFR Part 11 require that electronic records be attributable to unique individuals and that audit trails be available and reviewed. The agreement should require unique user accounts, audit trails enabled on all GMP-relevant systems, and a documented audit-trail review process — and the owner should verify these during qualification and audits, not assume them.

**Orphan, hybrid, and uncontrolled data.** Paper printouts treated as "original" while the underlying electronic data is discarded; results captured in uncontrolled spreadsheets; data on local instrument drives that never enters a managed system. PIC/S PI 041 is built around the concept of the complete data lifecycle and the distinction between static and dynamic records. For dynamic records (a chromatogram you can reprocess), a printout is not the original. The owner's qualification audit should map, for each critical test, where the true raw data lives, who controls it, and how it is backed up and retained.

**Subcontracted and "off-the-books" testing.** A contract lab quietly sends a test it cannot perform to a third lab, or a CMO routes an operation to an unqualified subcontractor. This violates the Chapter 7 no-subcontracting-without-approval rule and breaks the data integrity chain — the owner cannot vouch for raw data it has never seen from a site it has never qualified. The agreement must prohibit it explicitly and the owner should periodically confirm that all testing happens where the agreement says it does.

**Retention and post-termination access.** When a relationship ends, the owner still needs the records — for complaints, recalls, and inspections that may come years later. The agreement must fix the retention period (at least matching the owner's regulatory retention obligations) and guarantee access to records, including raw electronic data and the means to read it, after termination. A contractor that goes out of business or migrates off a legacy system can strand years of GMP records if this was never negotiated.

### A practical data integrity checklist for contract sites

- For each critical test, is the true raw data identified, and does the owner have a right to it (not just the summary)?
- Are audit trails enabled on all GMP systems, and is there a documented, performed audit-trail review?
- Are user accounts unique and role-controlled — no shared admin logins?
- Is there a written prohibition on testing into compliance and on reporting only passing results?
- Is all subcontracting prohibited without prior written approval, and verified in practice?
- Are retention periods and post-termination access defined and sufficient?
- Can the owner pull a full batch's raw data and reconcile it to the CoA on demand?

## What inspectors actually look for

When a regulator inspects a contract relationship — at either site — a recognizable pattern of questions emerges:

- **Is there a current, signed quality agreement, and does reality match it?** They will pick an activity and trace who actually performed it against who the agreement says owns it. A mismatch — a control the agreement assigns to one party that neither is running — is a classic finding.
- **How was the contractor qualified, and is qualification current?** Expect them to ask for the qualification audit, the risk assessment, and evidence of ongoing oversight, not just an initial approval.
- **Are deviations, OOS, and changes flowing as the agreement requires?** They will look for site events the owner should have been told about and was not, and for changes implemented without the owner's approval.
- **Batch disposition chain.** Who released, on what basis, and did the owner's quality unit/QP have what it needed? Annex 16 makes the QP's reliance chain a focus in the EU.
- **Data integrity at the contract lab.** Audit trails, shared logins, raw data location, and any sign of selective reporting. This is now a default line of inquiry, not an exception.

The cleanest defense is also the simplest to state: a current quality agreement that matches what each party actually does, a qualification file that is alive rather than archived, a flow of deviations/OOS/changes that demonstrably reaches the owner, a disposition chain with a clear final-release boundary, and the ability to reach into the contractor's raw data when you need to. Outsourcing the work is routine. Outsourcing the accountability is impossible — and the quality agreement is how you prove you never tried.
