---
title: "Template: Quality Agreement"
description: "A plug-and-play quality agreement between a contract giver and a contract acceptor: scope, responsibility split for batch release, change control, deviations, OOS, audits, subcontracting, and data, with a filled responsibility-matrix specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Template"
pillar: "quality-assurance"
relatedArticles: ["supplier-vendor-qualification"]
tags: ["quality agreement", "contract manufacturing", "outsourced activities", "supplier qualification", "change control", "GxP"]
tier: "Advanced"
---

This is a ready-to-use quality agreement template. Replace every `<<FILL: ...>>` placeholder with your own specifics, agree the responsibility split with the other party, and route it through both organizations' approval. The legal contract (the supply or services agreement) sits separately; this document governs the quality responsibilities only, and where the two conflict on quality matters, this agreement prevails. A worked filled specimen of the responsibility matrix follows the template. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Quality Agreement between `<<FILL: CONTRACT GIVER NAME>>` and `<<FILL: CONTRACT ACCEPTOR NAME>>` |
| Agreement number | `<<FILL: QA-ID, e.g. QAG-2026-009>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Expiry / review date | `<<FILL: review date, e.g. effective date + 2 years>>` |
| Linked supply / services agreement | `<<FILL: contract reference>>` |
| Linked supplier qualification record | `<<FILL: qualification record ID>>` |

## 1. Parties and definitions

| Term | Definition |
|---|---|
| Contract giver | `<<FILL: CONTRACT GIVER NAME>>`, the party that outsources the activity and holds overall responsibility for product quality and patient safety. Referred to below as "the Giver." |
| Contract acceptor | `<<FILL: CONTRACT ACCEPTOR NAME>>`, the party that performs the outsourced activity. Referred to below as "the Acceptor." |
| Product / service | `<<FILL: product name(s), presentation(s), or service description>>` |
| Site(s) | `<<FILL: Acceptor site(s) covered, by address>>` |
| Registered details | The specifications, processes, sites, and methods filed in the relevant marketing authorization or submission for the Product. |

The Giver retains overall responsibility for the quality of the Product and for the decision to place it on the market. The Acceptor is responsible for performing the contracted activity in compliance with this agreement, the applicable GxP standards, and the registered details.

## 2. Purpose

This agreement defines and allocates the GxP quality responsibilities of the Giver and the Acceptor for the contracted activity, so that no responsibility falls between the two organizations. It is required by EudraLex Volume 4, Chapter 7 and aligns with the FDA guidance on quality agreements for contract manufacturing (2016).

## 3. Scope

This agreement covers the activity described in Section 1 performed at the named site(s). It does not authorize the Acceptor to perform any other activity for the Giver, nor to perform the contracted activity at any other site, without a documented amendment to this agreement. Activities and materials outside this scope are governed separately.

## 4. Applicable standards and regulations

Both parties operate to the standards applicable to the contracted activity, including as relevant:

- 21 CFR Parts 210 and 211 (current GMP for finished pharmaceuticals) or 21 CFR Part 820 / ISO 13485:2016 (devices), as applicable to the Product.
- EudraLex Volume 4 (EU GMP), including Chapter 7 (outsourced activities) and relevant annexes.
- ICH Q7 (API GMP), ICH Q9 (quality risk management), and ICH Q10 (pharmaceutical quality system), as applicable.
- 21 CFR Part 11 and EU GMP Annex 11 where the activity creates, modifies, or stores electronic GxP records.
- The registered details for the Product in each market where it is supplied.

## 5. Responsibility matrix

For each topic, "R" means responsible (performs and owns the activity), "C" means consulted, "A" means approves, and a blank means not responsible. Where both parties act, both are marked. Edit this matrix to match the agreed split; it is the operative core of the agreement.

| # | Topic | Contract giver | Contract acceptor |
|---|---|---|---|
| 5.1 | Provide specifications, methods, and registered details | R | C |
| 5.2 | Manufacture / perform the contracted activity per specification and registered details | C | R |
| 5.3 | Batch record (or service record) preparation and execution | A | R |
| 5.4 | Batch record review for completeness and compliance | A | R |
| 5.5 | Final batch disposition / release to market | R (or delegated QP) | C, provide complete records |
| 5.6 | Incoming material qualification and testing at the Acceptor | C | R |
| 5.7 | In-process and finished testing per the agreed specification | C | R |
| 5.8 | Out-of-specification (OOS) and out-of-trend investigation | C, review and concur | R, investigate and notify |
| 5.9 | Deviation management and notification | A, assess product impact | R, investigate and notify within the defined window |
| 5.10 | Change control: changes to process, site, equipment, method, or supplier | A, prior approval for changes to registered details | R, notify before change; no unilateral change to registered details |
| 5.11 | CAPA arising from the contracted activity | C | R |
| 5.12 | Stability program and ongoing stability for the Product | R (define) | C / R (execute if contracted) |
| 5.13 | Complaint handling and notification | R, own the complaint | C, investigate manufacturing complaints and notify |
| 5.14 | Recall decision and execution | R, decide | C, support and provide records |
| 5.15 | Audit: the Giver's right to audit the Acceptor | R, audit on schedule and for cause | grant access; respond to findings |
| 5.16 | Regulatory inspection of the Acceptor affecting the Product | C, support | R, notify the Giver |
| 5.17 | Subcontracting of any part of the contracted activity | A, approve in advance | R, disclose and flow down requirements |
| 5.18 | Data integrity controls and audit trail review for GxP records | C | R |
| 5.19 | Record and raw-data retention | define retention period | R, retain raw data and metadata for the agreed period |
| 5.20 | Annual product review / product quality review input | R, compile | C, provide data |

## 6. Change control and notification windows

The Acceptor shall not make any change that affects the Product, the registered details, the contracted process, the site, equipment, test methods, key raw materials, or the GxP systems used, without prior written notification to the Giver. Changes to registered details require the Giver's prior written approval before implementation.

| Change category | Action required | Timing |
|---|---|---|
| Change to registered details (specification, process, site, method in the submission) | Acceptor notifies; Giver prior written approval before implementation | At least `<<FILL: e.g. 90>>` days before planned implementation |
| Major change with potential product impact (equipment, key raw material, critical supplier) | Acceptor notifies; Giver assesses impact | At least `<<FILL: e.g. 60>>` days before planned implementation |
| Minor change with no product impact | Acceptor notifies | Within `<<FILL: e.g. 30>>` days |

A change made without the required notification or approval is a breach of this agreement and is handled as a deviation under Section 7.

## 7. Deviations, OOS, and complaints

| Event type | Acceptor notifies the Giver within | Channel |
|---|---|---|
| Critical deviation or confirmed OOS affecting the Product | `<<FILL: e.g. 1 business day>>` | `<<FILL: named quality contacts>>` |
| Major deviation with potential product impact | `<<FILL: e.g. 3 business days>>` | `<<FILL: named quality contacts>>` |
| Out-of-trend result or recurring minor deviation | `<<FILL: e.g. 5 business days>>` | `<<FILL: named quality contacts>>` |
| Quality complaint received by the Acceptor | `<<FILL: e.g. 2 business days>>` | `<<FILL: named quality contacts>>` |

The Acceptor investigates per its own documented procedures, performs root cause analysis, and shares the investigation and CAPA with the Giver. The Giver assesses product impact and decides on the disposition of affected Product. Affected Product is not released until the Giver concurs.

## 8. Audits

The Giver may audit the Acceptor's site(s) and quality systems relevant to the contracted activity on a defined schedule (default Tier 1: every `<<FILL: e.g. 2>>` years) and for cause (for example after a critical deviation, a failed inspection, or a significant change). The Acceptor grants reasonable access to records, areas, and staff relevant to the Product, and responds to audit findings with a corrective action plan and agreed timelines. The Giver may audit for cause on `<<FILL: e.g. 10>>` business days' notice, or immediately where patient safety is at risk.

## 9. Regulatory inspections

The Acceptor notifies the Giver of any regulatory inspection that covers or affects the Product, including the outcome and any findings relevant to the Product, within `<<FILL: e.g. 2 business days>>`. The Acceptor does not disclose the Giver's confidential information to an inspector beyond what is legally required without informing the Giver where time permits.

## 10. Subcontracting

The Acceptor shall not subcontract any part of the contracted activity without the Giver's prior written approval. Where subcontracting is approved, the Acceptor flows down the relevant requirements of this agreement to the subcontractor, remains responsible to the Giver for the subcontracted work, and discloses the subcontractor on request.

## 11. Data integrity and records

The Acceptor maintains ALCOA+ compliant records for the contracted activity: attributable, legible, contemporaneous, original, accurate, complete, consistent, enduring, and available. Electronic GxP systems used for the Product have audit trails, unique user access, and controls that meet 21 CFR Part 11 and EU Annex 11 where applicable. The Acceptor retains raw data, metadata, and batch or service records for not less than `<<FILL: retention period>>` and makes them available to the Giver and to regulators on request.

## 12. Term, amendment, and termination

This agreement is effective on the date in the header and remains in force until the review or expiry date, after which both parties review and re-approve it. Either party may propose an amendment in writing; amendments are version-controlled and signed by both quality units. On termination, the Acceptor returns or retains (as agreed) all Product records and raw data per Section 11, and supports an orderly transfer of the activity.

## 13. Quality contacts

| Role | Contract giver | Contract acceptor |
|---|---|---|
| Primary quality contact (name, title, email, phone) | `<<FILL>>` | `<<FILL>>` |
| Escalation contact | `<<FILL>>` | `<<FILL>>` |

## 14. Acceptance criteria

This quality agreement is acceptable and inspection-ready when all of the following are true:

- It is in place and executed by both quality units before the contracted activity starts, and it is linked to the supplier qualification record and the supply contract.
- The responsibility matrix in Section 5 is edited line by line and agreed, with no row left ambiguous, and batch release (Section 5.5) is explicitly assigned to one named party.
- Change control (Section 6) has both a defined notification window and a prior-approval category for changes to registered details, with numbers both parties can meet.
- Deviation, OOS, and complaint notification (Section 7) is defined in business days against a named quality contact, not written as "promptly."
- Subcontracting (Section 10) requires the Giver's prior written approval, with flow-down of requirements.
- Data integrity and record retention (Section 11) are defined, including raw data and metadata retention and ALCOA+ expectations.
- The agreement has an effective date, a review or expiry date, and signatures from both quality units and authorized signatories.

## 15. References

> EudraLex Volume 4, Chapter 7 (Outsourced Activities).
> FDA Guidance, Contract Manufacturing Arrangements for Drugs: Quality Agreements (2016).
> ICH Q10, Pharmaceutical Quality System; ICH Q9, Quality Risk Management; ICH Q7 (for API activities).
> 21 CFR Parts 210 and 211, or 21 CFR Part 820 / ISO 13485:2016 for devices.
> 21 CFR Part 11 and EU GMP Annex 11 (electronic records, where applicable).

Confirm the current version and clause numbers of each reference before issue.

## 16. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Contract giver, quality unit | `<<FILL>>` | | |
| Contract giver, authorized signatory | `<<FILL>>` | | |
| Contract acceptor, quality unit | `<<FILL>>` | | |
| Contract acceptor, authorized signatory | `<<FILL>>` | | |

---

## Filled specimen

The following shows a section of the responsibility matrix and the notification windows completed for an example contract giver and a contract manufacturer performing aseptic fill-finish. The companies, sites, and timings are illustrative; agree your own with the other party.

**Giver:** Helix Therapeutics. **Acceptor:** Northgate Sterile CDMO, Building 4 (Greenville, US). **Product:** sterile injectable drug product, 2 mL vial.

| # | Topic | Helix (Giver) | Northgate (Acceptor) |
|---|---|---|---|
| 5.3 | Batch record execution | A | R |
| 5.4 | Batch record review | A | R |
| 5.5 | Final release to market | R (Helix QP releases) | C, provide complete records and CoA |
| 5.9 | Deviation notification | A, assess product impact | R, notify within 1 business day for critical |
| 5.10 | Change control | A, prior approval for registered-detail changes | R, notify 90 days ahead, no unilateral change |
| 5.17 | Subcontracting | A, approve in advance | R, none currently subcontracted; disclose any |
| 5.19 | Raw-data retention | Define: 10 years post-expiry | R, retain batch records, environmental monitoring data, and CDS raw data for 10 years |

Notification windows agreed:

| Event | Notify within |
|---|---|
| Critical deviation or confirmed OOS | 1 business day |
| Major deviation, potential product impact | 3 business days |
| Change to registered details | 90 days before implementation, prior written approval |
| Quality complaint received by Northgate | 2 business days |

In this example the release decision stays with the Giver's QP and is explicit, the change-control clause has both a window and a hard "no unilateral change to registered details" line, and the deviation window is measured in business days against a named contact rather than left as "promptly." Those three details are what make the agreement enforceable instead of decorative.

## Common inspection findings this template prevents

- A contract manufacturer or contract laboratory operating with no quality agreement at all.
- An agreement that exists but never says who releases the batch, so both parties assume the other did.
- A change-notification clause with no defined window and no prior-approval category, the single most expensive omission, so a site or method change surfaces from a certificate of analysis years later.
- Deviation reporting written as "promptly" with no timeframe and no named contact, so critical events reach the Giver late or not at all.
- Onward subcontracting permitted by silence, with the Giver unaware a third party touches the Product.
- No audit-rights clause, so the Giver cannot get on site when something goes wrong.
- Raw data and metadata retention left undefined, so records are gone when an inspector asks for them.

## How to adapt this template

1. Set the agreement number, parties, sites, and review date in the header, and link it to the supply contract and the supplier qualification record.
2. Edit the responsibility matrix in Section 5 line by line with the other party; do not accept the defaults without agreement. Delete rows that do not apply (for example stability for a testing-only contract) and add rows for activities unique to your relationship.
3. Set the notification windows in Sections 6 and 7 to numbers both parties can actually meet, and name the real quality contacts in Section 13.
4. For a software or SaaS provider, recast Section 5 around updates, backup and recovery, security incident windows, and audit and data access, and keep Sections 11 (data integrity) and 8 (audits); the article on supplier and vendor qualification describes the SaaS-specific clauses.
5. Confirm every regulation in Section 15 against the current published version, and have both quality units and authorized signatories sign before the activity starts.
