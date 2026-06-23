---
title: "Product Recall and Field Action Plan and Procedure"
description: "A plug-and-play recall and field action plan covering the recall decision and classification, the recall committee and roles, depth of recall, authority and customer notification with timing, effectiveness checks and reconciliation, returned goods handling, mock recall testing, and closure reporting, with a filled mock recall specimen and the regulations it supports."
pubDate: 2026-06-22
docType: "Plan"
pillar: "quality-assurance"
relatedArticles: ["recall-management-field-actions", "regulatory-reporting-obligations-and-clocks", "product-complaint-handling"]
tags: ["recall", "field action", "quality assurance", "field alert report", "mock recall", "effectiveness check", "plan", "gmp"]
tier: "Advanced"
---

This is a ready-to-use recall and field action plan and procedure. It defines how you decide on a recall or field action, classify it, run the recall committee, set the depth, notify the authority and your customers, check that the action worked, handle returned product, and close the file. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your own document numbers and dates, attach your distribution records and contact lists, and route it through your normal document control, review, and approval. A worked filled specimen of a mock recall summary follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it. Using this template does not by itself create compliance; the plan only works if you keep the contact lists current, hold the drills, and act inside the timelines.

## Document control header

| Field | Entry |
|---|---|
| Document title | Product Recall and Field Action Plan and Procedure |
| Document number | `<<FILL: DOC-ID, e.g. QA-PLN-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Quality Assurance>>` |
| Approvers | `<<FILL: QA, Regulatory Affairs, site head, as applicable>>` |
| Applies to | `<<FILL: sites, products, markets in scope>>` |
| Next review date | `<<FILL: date>>` |

## 1. Purpose

This plan defines how `<<FILL: COMPANY NAME>>` decides on, executes, and closes a product recall or other field action when a marketed or distributed product, including investigational supply where stated, is found to be defective, out of specification, mislabeled, contaminated, or otherwise a risk to patient safety or product quality. The goal is to remove or correct the affected product quickly, notify the right authorities and customers on time, prove the action reached the affected stock, and document the whole thing so a reviewer can reconstruct what happened.

## 2. Scope

This plan covers all commercial and, where stated, clinical product placed by `<<FILL: COMPANY NAME>>` into the supply chain across the markets listed in the header. It covers a full recall, a partial recall limited to specific lots, a market withdrawal, a stock recovery before any product leaves your control, and corrections in the field such as relabeling or added warnings. It applies to drug, biologic, cell and gene therapy, and combination products. For a combination product, the device-constituent field correction path is coordinated through `<<FILL: SOP-ID>>` and is in scope here only for the product-quality and notification elements. This plan does not replace adverse event reporting, which runs under `<<FILL: pharmacovigilance SOP-ID>>`, or the underlying investigation, which runs under your deviation and CAPA procedures.

## 3. Definitions

- **Recall**: removal or correction of distributed product that violates the law or your specifications and presents a risk to health or quality. A recall is a firm-initiated action; it is not the same as a seizure ordered by an authority.
- **Field action / field correction**: a fix applied to product already in the field without physically returning it, for example a relabel, a quarantine instruction, or an added handling warning.
- **Market withdrawal**: removal or correction of product for a minor issue that would not be subject to legal action by the authority, or a stock-rotation matter, handled without the recall machinery but still recorded.
- **Stock recovery**: retrieval of product that has not yet left the direct control of the firm, for example still in your warehouse or in transit you control.
- **Depth of recall**: the level in the distribution chain to which the action extends, for example wholesaler, pharmacy or hospital, dispenser, or patient/consumer.
- **Effectiveness check**: a verification that the recall message was received, understood, and acted on by the consignees at the chosen depth.
- **Reconciliation**: the account of quantity produced, distributed, returned, corrected, located, and not located, so the gap between distributed and accounted-for is visible.
- **Mock recall**: a rehearsal that exercises the traceability and contact machinery against a real lot without an actual safety issue, to prove the system works and to measure how fast it works.

## 4. Recall classification

Classify by the health hazard the defect presents, not by how much product is involved. Use the health hazard evaluation in section 6.3 to assign the class. The three-class concept used by health authorities is summarized below in plain terms; confirm the exact wording and any local equivalents against the current authority guidance for each market.

| Class | Health hazard concept | Typical triggers |
|---|---|---|
| Class I | Reasonable probability that use or exposure will cause serious adverse health consequences or death. | Sterility failure in a sterile product, wrong active ingredient, severe contamination, dose error with serious harm potential, mix-up of a high-risk product. |
| Class II | Use or exposure may cause temporary or medically reversible adverse consequences, or the probability of serious harm is remote. | Subpotency in a non-critical product, minor label error without a safety consequence, certain content uniformity failures. |
| Class III | Use or exposure is not likely to cause adverse health consequences. | Cosmetic defects, minor non-safety labeling or packaging issues, container defects with no quality impact. |

The class drives the depth, the urgency, the press strategy, and the effectiveness-check sample size. A Class I action runs at the highest urgency and usually reaches the consumer or patient level.

## 5. Roles and responsibilities

| Role | Responsibility |
|---|---|
| Recall coordinator (usually QA) | Owns the recall file end to end; convenes the committee; tracks every action and timeline to closure; single point of contact for the authority unless RA is named. |
| Quality Assurance | Confirms the defect, leads the health hazard evaluation, decides class with RA, approves the recall strategy, approves closure. |
| Regulatory Affairs | Notifies the competent authority, manages authority correspondence, confirms reporting timelines per market. |
| Recall committee chair | `<<FILL: senior role, e.g. Site Head or VP Quality>>`; authorizes the recall decision and the depth. |
| Manufacturing / Operations | Provides batch records, identifies affected lots and any shared-cause lots, quarantines in-house stock. |
| Supply chain / Distribution | Produces the distribution list within the target time, executes consignee notification, manages returns logistics. |
| Pharmacovigilance / Medical | Assesses patient risk, links to adverse events, supports the health hazard evaluation. |
| Customer service | Handles inbound consignee and patient calls against an approved script; logs all contacts. |
| Communications / Legal | Drafts and clears public communications and press notices where used. |
| IT | Provides traceability data extracts from ERP, WMS, or serialization systems on demand. |

The committee is standing, not ad hoc. Names and current contact details live in Attachment A, kept outside the controlled body so they can be updated without reissuing the plan.

## 6. Procedure

### 6.1 Trigger and intake

A field action can be triggered by an out-of-specification result, a stability failure, a confirmed complaint, an internal deviation, a supplier notification, an authority request, or a returned-goods finding. Anyone may raise a potential trigger; route it to the recall coordinator and QA the same business day. Open the recall file and assign a unique recall reference number at intake.

### 6.2 Initial assessment and containment

Within `<<FILL: hours, e.g. 24 hours>>` of intake, QA confirms whether a genuine defect exists, identifies the affected lots and any lots that share the root cause, and places all in-house and firm-controlled stock on quarantine hold. Do not wait for the full investigation to start containment.

### 6.3 Health hazard evaluation

QA, Pharmacovigilance/Medical, and RA jointly assess the hazard: what the defect is, how likely exposure is to cause harm, which populations are most at risk (for example pediatric, immunocompromised, single-source therapy), whether harm is reversible, and whether the product is a sole therapy with no substitute. Record the evaluation on the form in Attachment B and assign the class from section 4.

### 6.4 Decision

The recall committee convenes and decides: act or do not act, and if acting, the type (recall, field correction, market withdrawal, stock recovery), the class, the depth, and the urgency. Record the decision, the rationale, the attendees, and the time on the decision record. If the committee decides not to act on a borderline case, record that rationale too; a documented no-action decision is defensible, a silent one is not.

### 6.5 Depth of recall

Set the depth from the class and the realistic exposure point.

| Depth | Reaches | Typical use |
|---|---|---|
| Wholesale | Distributors and wholesalers only | Product not yet dispensed; Class III or contained Class II |
| Retail / institutional | Pharmacies, hospitals, dispensers | Most Class II; product may have been dispensed |
| Consumer / patient | End users and patients | Class I and any case where dispensed product presents serious risk |

### 6.6 Recall strategy and communication plan

Document the strategy: depth, the consignee notification method and wording, whether a public warning or press notice is needed, the effectiveness-check method and level, and how returned or corrected product will be handled. Communication timing:

| Action | Owner | Target timing |
|---|---|---|
| Notify competent authority | Regulatory Affairs | Within `<<FILL: market-specific window; for US drugs the related Field Alert Report under 21 CFR 314.81 is due within 3 working days of becoming aware of the distribution of a defective or out-of-specification product>>` |
| Notify direct consignees | Supply chain | Within `<<FILL: hours, e.g. 24 hours of decision>>` |
| Issue recall communication to depth | Supply chain | Within `<<FILL: hours, e.g. 48 hours of decision>>` |
| Public warning / press notice (if Class I or wide exposure) | Communications + RA | Per authority direction |

Use a controlled recall letter template (Attachment C). The letter states the product, lots, the defect, the hazard in plain language, the exact action the consignee must take, how to return or correct product, who to call, and a response form to confirm receipt and action. For a biologic where a reportable distribution deviation exists, also assess the Biological Product Deviation Report under 21 CFR 600.14, which is due within 45 calendar days; coordinate timing with RA so the BPDR and any FAR are both handled.

### 6.7 Execution

Supply chain produces the distribution list and contacts every consignee at the chosen depth. Customer service works inbound calls against the approved script. Manufacturing quarantines internal stock. Track every consignee contact and every response on the recall tracking log (Attachment D).

### 6.8 Effectiveness checks

Verify that consignees received the message and acted. Set the check level by class.

| Class | Effectiveness-check level (default) |
|---|---|
| Class I | 100 percent of consignees at the recall depth |
| Class II | A defined sample, for example `<<FILL: percent>>` of consignees |
| Class III | A smaller sample or response-form review only, per the strategy |

Methods include written response forms, phone confirmation, visits, or a combination. Document non-responders and the escalation steps taken (second contact, registered notice, authority involvement). The check is not complete while non-responders remain unresolved.

### 6.9 Returned and quarantined goods

Receive returned product into a segregated, labeled quarantine area under restricted access. Reconcile every return against the tracking log. Hold returned and internal quarantined stock pending the disposition decision. Destroy only under an approved disposition with a witnessed, documented destruction record, or relabel/rework only under an approved and validated procedure. Never return recalled product to saleable stock without a documented, QA-approved disposition. For field corrections where product stays with the consignee, capture evidence the correction was applied (returned confirmation form, photo, or completed checklist) instead of a physical return.

### 6.10 Reconciliation

Account for the full quantity:

| Line | Quantity |
|---|---|
| Quantity manufactured (affected lots) | `<<FILL>>` |
| Quantity distributed | `<<FILL>>` |
| Quantity returned | `<<FILL>>` |
| Quantity corrected in field | `<<FILL>>` |
| Quantity confirmed used/consumed before recall | `<<FILL>>` |
| Quantity located but not returned (e.g. destroyed by consignee on instruction) | `<<FILL>>` |
| Quantity not accounted for | `<<FILL>>` |

Explain the not-accounted-for quantity. A reconciliation that does not close needs a documented rationale and a risk statement, not a blank.

### 6.11 Closure

Close only when: effectiveness checks are complete and non-responders resolved, reconciliation is closed or explained, returned goods are dispositioned, the root-cause investigation and CAPA are at least initiated and tracked, and the authority has agreed to closure where its agreement is required. Issue a closure report (section 7) and obtain the approvals in the header.

### 6.12 Linkage to investigation and CAPA

The recall handles the field; the investigation handles the cause. Open or link the deviation and CAPA so the defect does not recur. The recall file references the investigation number; the investigation references the recall number.

## 7. Recall closure report contents

The closure report records: recall reference and class; product, lots, and quantities; the defect and confirmed root cause; the timeline of every key action with dates and times; depth and consignee counts; effectiveness-check results and non-responder resolution; reconciliation table; returned-goods disposition; authority correspondence and any agreed closure; linked investigation and CAPA; and lessons learned feeding back into this plan.

## 8. Mock recall testing

Run a mock recall at least `<<FILL: frequency, e.g. annually>>`, and after any major change to the distribution or traceability systems. The mock exercises traceability and contact machinery against a real, randomly selected lot, without an actual safety issue and without alarming consignees. Measure:

| Metric | Target |
|---|---|
| Time to produce the full distribution list from lot number | `<<FILL: target, e.g. within 4 hours>>` |
| Percentage of distributed quantity traced and reconciled | `<<FILL: target, e.g. 100 percent>>` |
| Time to reach all direct consignees (simulated) | `<<FILL: target>>` |
| Contact-list accuracy (reachable on current details) | `<<FILL: target, e.g. 95 percent>>` |

Record the mock on a mock recall summary (specimen in section 11). Any target missed becomes a CAPA against this plan. A mock that always passes easily may be too shallow; vary the lot and the market.

## 9. Records and retention

Keep the recall file, decision record, health hazard evaluation, distribution lists, recall letters, tracking log, effectiveness-check evidence, reconciliation, disposition and destruction records, authority correspondence, mock recall summaries, and the closure report for `<<FILL: retention period per market and product type>>`.

## 10. Process flow

<div class="flow flow-v">
  <div class="flow-box">Trigger and intake, open recall file, assign reference</div>
  <div class="flow-arrow">&darr;</div>
  <div class="flow-box">Initial assessment and containment (quarantine in-house stock)</div>
  <div class="flow-arrow">&darr;</div>
  <div class="flow-box">Health hazard evaluation and classification</div>
  <div class="flow-arrow">&darr;</div>
  <div class="flow-box">Committee decision: type, class, depth, urgency</div>
  <div class="flow-arrow">&darr;</div>
  <div class="flow-box">Notify authority and consignees, execute to depth</div>
  <div class="flow-arrow">&darr;</div>
  <div class="flow-box">Effectiveness checks and returned-goods handling</div>
  <div class="flow-arrow">&darr;</div>
  <div class="flow-box">Reconciliation, investigation and CAPA linkage</div>
  <div class="flow-arrow">&darr;</div>
  <div class="flow-box">Closure report and authority agreement</div>
</div>

## 11. Worked specimen: mock recall summary

The following is a completed mock recall summary using a plainly fictional company and systems. It shows how the record reads when done.

### Mock recall summary

| Field | Entry |
|---|---|
| Document title | Mock Recall Summary |
| Mock recall reference | MR-2026-014 |
| Date conducted | 18 May 2026 |
| Conducted by | J. Okafor, Recall Coordinator, Acme Bio |
| Observers | QA Manager (S. Reyes), Supply Chain Lead (T. Nguyen) |
| Plan reference | QA-PLN-031 v2.0 |
| Type of test | Unannounced, traceability and contact, single lot |

**Lot selected**

| Field | Entry |
|---|---|
| Product | Acme Bio sterile injectable, AcmeMab 100 mg/vial |
| Lot number | AMB-2540 |
| Manufacturing site | Site B |
| Quantity manufactured | 12,400 vials |
| Quantity distributed | 11,950 vials |
| Markets | US, Canada |
| Source systems exercised | ERP-02 (distribution), WMS-01 (warehouse), Serial-Track (serialization) |

**Results**

| Metric | Target | Actual | Pass/Fail |
|---|---|---|---|
| Time to produce full distribution list from lot number | Within 4 h | 2 h 35 min | Pass |
| Distributed quantity traced and reconciled | 100 percent | 100 percent (11,950 of 11,950) | Pass |
| Time to reach all direct consignees (simulated) | Within 24 h | Simulated 9 h | Pass |
| Direct-consignee contact-list accuracy | 95 percent | 88 percent (15 of 17 reachable on file) | Fail |

**Reconciliation (simulated)**

| Line | Quantity |
|---|---|
| Quantity manufactured | 12,400 |
| Quantity distributed | 11,950 |
| Quantity in firm-controlled stock (would quarantine) | 450 |
| Quantity traced to consignees | 11,950 |
| Quantity not traced | 0 |

**Findings and actions**

| # | Finding | Action | Owner | Due | CAPA ref |
|---|---|---|---|---|---|
| 1 | Two of 17 direct consignees had outdated phone and email on file; primary contacts had changed roles. | Refresh consignee contact master quarterly; add a contact-verification step to the consignee onboarding checklist. | Supply Chain Lead | 30 Jun 2026 | CAPA-2026-118 |
| 2 | Serial-Track export needed a manual join to ERP-02 to map serials to consignees, adding about 40 minutes. | Build a saved cross-system query so the mapping runs in one step. | IT | 31 Jul 2026 | CAPA-2026-119 |

**Conclusion**

The traceability system met the speed and completeness targets for lot AMB-2540: the full distribution list was produced in 2 h 35 min and 100 percent of distributed stock was traced and reconciled. The contact-list accuracy target was missed at 88 percent against a 95 percent target, driven by two stale consignee records, so the mock is recorded as a partial pass with two CAPAs raised. The next mock will select a lot distributed to a different market to test the contact machinery more widely.

**Approvals**

| Role | Name | Signature | Date |
|---|---|---|---|
| Recall Coordinator | J. Okafor | (signed) | 18 May 2026 |
| QA Manager | S. Reyes | (signed) | 19 May 2026 |

## 12. Attachments

- Attachment A: Recall committee contact list (held outside the controlled body, kept current).
- Attachment B: Health hazard evaluation form.
- Attachment C: Controlled recall letter template with consignee response form.
- Attachment D: Recall tracking log.
- Attachment E: Returned-goods receipt and disposition record.
- Attachment F: Mock recall summary template (per section 11).

## 13. Common inspection findings this plan prevents

- A recall procedure exists but has never been exercised; no mock recall on record, so traceability speed is unproven.
- The firm could not produce a complete distribution list within a reasonable time when challenged.
- Recall classification was driven by quantity or commercial impact rather than the health hazard.
- Effectiveness checks were started but non-responders were never resolved or escalated.
- Reconciliation left a large unaccounted quantity with no rationale and no risk statement.
- Returned product was put back into saleable stock without a documented QA disposition.
- The competent authority notification or the related Field Alert Report missed its window.
- The recall was closed while the root-cause investigation and CAPA were still open and untracked.
- Contact lists in the plan named people who had left, costing the first hours of a Class I action.

## 14. How to adapt this plan

1. Set your document number, owner, approvers, effective date, and next review date in the header.
2. Confirm the recall classification wording and the notification windows for every market you sell in; the three-class concept and the US timelines here are a starting point, not a substitute for current authority guidance.
3. Name your standing recall committee and keep the contact list in Attachment A current; reach-test it during the mock.
4. Set the effectiveness-check levels, mock recall frequency, and retention periods to your products and markets.
5. Wire the cross-references in sections 2, 6.6, and 6.12 to your real pharmacovigilance, biological product deviation, deviation, and CAPA procedures.
6. Put the mock recall on the calendar with a named owner and track every mock finding to closure as a CAPA against this plan.
7. Confirm every regulation in section 15 against the current published version before issue.

## 15. Regulations this supports

- 21 CFR Part 7 (FDA recall policy and procedures, including the recall classification concept)
- 21 CFR 314.81 (Field Alert Report for drug products, within 3 working days)
- 21 CFR 600.14 (Biological Product Deviation Report, within 45 calendar days)
- 21 CFR 211 (current good manufacturing practice for finished pharmaceuticals; distribution records and complaint files)
- 21 CFR Part 4 (current good manufacturing practice for combination products)
- EU GMP Chapter 8 (complaints, quality defects, and product recalls) and the relevant national recall guidance for each EU market
- ICH Q9(R1) (quality risk management, 2022; FDA-adopted 2023), supporting the health hazard evaluation and risk-based depth and sampling
- ICH Q10 (pharmaceutical quality system), for the recall process as part of the quality system
- FDA Data Integrity and Compliance with Drug CGMP guidance (2018), for the integrity of distribution and recall records
