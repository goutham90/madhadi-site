---
title: "Batch Disposition: How Release, Reject, and Quarantine Decisions Get Made"
description: "How quality units decide to release, reject, or hold a manufactured batch: the regulatory basis, the review sequence, conditional and parametric release, and the QA versus QP roles that sign off."
pubDate: 2026-06-20
tags: ["batch release", "quality assurance", "gmp", "disposition", "qualified person", "deviation management"]
pillar: "quality-assurance"
tier: "Intermediate"
---

Batch disposition is the moment everything else in the quality system either holds or fails. Every SOP, every calibration record, every operator training file, every deviation investigation exists so that one person, or a small set of accountable people, can look at a finished lot and decide: release it to patients, reject it, or hold it while open questions get answered. Get this decision right consistently and the rest of the quality system has a point. Get it wrong, even once, and you have either harmed a patient or destroyed product that was fine.

This article covers how that decision actually gets made in a GMP environment: what the regulations require, what goes into the disposition package, the sequence of the review, how open deviations and conditional release are handled, the difference between standard and parametric release, and who owns which part. It is written for someone who reviews batch records, makes or supports disposition calls, or wants to be ready to discuss the topic in an interview.

---

## What batch disposition is and why it is required

Batch disposition is the formal quality decision on the fate of a defined quantity of drug substance or drug product. The three primary outcomes are **release** (approved for distribution or for use in the next step), **reject** (not usable, slated for destruction or, rarely, rework), and **quarantine or hold** (a holding state while a decision is pending). Disposition is a documented, signed act performed by the quality unit, not by manufacturing or by the plant manager.

The regulatory basis is direct.

> Under **21 CFR 211.22(a)**, the quality control unit shall have "the responsibility and authority to approve or reject all components, drug product containers, closures, in-process materials, packaging material, labeling, and drug products."

That single sentence is the legal root of disposition authority in the US. It is reinforced by **21 CFR 211.165** (testing and release for distribution), which requires that each batch conform to final specifications, including identity and strength of each active ingredient, before release. **21 CFR 211.192** requires a written review of production and control records for every batch before release, and an investigation of any unexplained discrepancy or failure to meet specification, whether or not the batch was already distributed.

In the EU, the framework is **EudraLex Volume 4, Part I, Chapter 1** (Pharmaceutical Quality System) and **Chapter 6** (Quality Control), with the actual act of certification governed by **Annex 16 (Certification by a Qualified Person and Batch Release)**. EU law requires that a batch of a medicinal product not be released to market until a **Qualified Person (QP)** has certified that it was manufactured and tested in accordance with the marketing authorisation and GMP. For investigational products the parallel requirement sits in **Annex 13 / Annex 16** logic and the clinical trial regulation framework. **ICH Q7** Section 11 and Section 6 cover the equivalent activities for active pharmaceutical ingredients.

The risk rationale is simple. A batch that has not been independently reviewed against its specifications and its full manufacturing history can carry defects that testing alone will not catch: a missed step, a wrong component lot, a deviation that was never closed, a calibration that lapsed, an environmental excursion during an aseptic fill. Final-product testing samples a tiny fraction of units and cannot detect a sterility breach or a labeling mix-up reliably. Disposition is the control that forces a human to reconcile what was supposed to happen with what actually happened, before product reaches a patient.

---

## The three outcomes, defined precisely

Disposition language gets sloppy in practice, so define the states clearly.

| State | Meaning | Who can move out of it | Typical system status |
|-------|---------|------------------------|----------------------|
| Quarantine | Physically or logically segregated, not usable, awaiting decision | QA only | "Quarantine" / "Restricted" in the ERP or LIMS |
| Released / Approved | Conforms to all requirements, cleared for its intended use | N/A (terminal positive state) | "Unrestricted" / "Released" |
| Rejected | Does not conform, cannot be used as is | QA only | "Blocked" / "Rejected" |
| On hold / Pending | A working sub-state of quarantine during an open investigation | QA | "Hold" |

A few points that interviewers probe:

- **Quarantine is the default state of any newly produced or received material.** Nothing is usable until positively dispositioned. The system should enforce this, not rely on a paper sign.
- **Quarantine is not a disposition.** It is the absence of one. A batch sitting in quarantine for ninety days because nobody closed the investigation is an aging-inventory and a data-integrity problem, not a neutral state.
- **Reject is a deliberate decision with its own record.** You do not just delete the lot. A rejection triggers root cause work, potential CAPA, financial write-off controls, and in some cases reporting obligations.
- **Rework or reprocessing** is a separate, pre-approved pathway, not a way to rescue a reject on the fly. It needs its own approved procedure, justification, and often additional testing, and it must be described or supportable against the marketing authorisation.

---

## What goes into the disposition package

The disposition decision is only as good as the package the reviewer assembles. A complete package, sometimes called the batch release dossier or the disposition checklist, typically pulls together the following. The exact list belongs in your batch release SOP.

**Core manufacturing and packaging records**

- Executed batch production record (the master batch record as filled in during manufacture), including all in-process control results, line clearance records, and operator/verifier signatures.
- Executed packaging and labeling records, including reconciliation of labels and printed components.
- Yield reconciliation at each major step, with any out-of-limit yields explained.

**Materials**

- Confirmation that all components, APIs, excipients, primary packaging, and printed components were released and within retest/expiry at time of use.
- Certificates of analysis for incoming materials (see [/articles/certificate-of-analysis](/articles/certificate-of-analysis)).

**Testing and analytical**

- Finished product test results against the release specification, including identity, assay, impurities, dissolution, microbial limits or sterility, and any product-specific tests.
- The certificate of analysis for the finished batch.
- Confirmation that all out-of-specification and out-of-trend results were investigated and closed (see [/articles/oos-investigation-process](/articles/oos-investigation-process) and [/articles/out-of-trend-investigations](/articles/out-of-trend-investigations)).
- Stability commitments confirmed (the batch is being placed on stability if required by protocol).

**Quality events**

- List of all deviations, discrepancies, and events linked to the batch, with status (closed, or open with a documented impact assessment).
- Any related change controls in effect during manufacture.
- CAPAs triggered, where relevant.
- Environmental monitoring and utilities data for the relevant manufacturing windows (especially for sterile products): see [/articles/environmental-monitoring-program](/articles/environmental-monitoring-program).

**Equipment and facility**

- Confirmation that equipment used was qualified and within calibration during the batch (see [/articles/calibration-and-metrology-program](/articles/calibration-and-metrology-program)).
- Cleaning records / cleaning validation status for shared equipment (see [/articles/cleaning-validation-execution](/articles/cleaning-validation-execution)).

**Regulatory**

- Confirmation that the batch conforms to the registered process and specifications in the marketing authorisation or, for clinical product, the IND/IMPD and the clinical protocol.
- For imported product, confirmation of the supply chain and, in the EU, the QP-to-QP confirmation chain where applicable.

The package does not have to be a single physical binder. In a mature shop much of it is a structured checklist in the quality management system that links to the underlying electronic records. What matters is that the reviewer can demonstrate each element was checked and the basis for the conclusion is traceable.

---

## How the disposition decision gets made: the sequence

Disposition is a sequence, not a single glance. A defensible flow looks like this.

### Step 1: Batch record review

A trained reviewer, usually QA but sometimes a manufacturing reviewer with a QA second check, performs the line-by-line review of the executed batch record. This is the workhorse step and has its own article: [/articles/batch-record-review-gmp](/articles/batch-record-review-gmp). The reviewer checks that every step was performed in sequence, every entry is complete and contemporaneous, every signature and verification is present, all in-process controls passed, yields reconcile, and there are no unexplained gaps. Good documentation practices apply throughout (see [/articles/good-documentation-practices](/articles/good-documentation-practices)).

### Step 2: Reconcile testing against specification

Confirm that every required release test was performed, against the current approved specification and method, on the correct sample, by a qualified lab, and that all results pass. Any OOS or OOT must be closed with a scientifically sound investigation. A result that was retested into compliance without a valid invalidation of the original is a classic finding, so the reviewer confirms the investigation, not just the final number.

### Step 3: Resolve quality events

Pull the full list of deviations, discrepancies, and changes linked to the batch. Each one must be either closed, or open with a documented impact assessment that explicitly addresses whether it affects this batch's quality, safety, identity, strength, purity, or efficacy. This is where conditional or "release with open deviation" decisions live, covered below. Deviation management fundamentals: [/articles/deviation-management](/articles/deviation-management).

### Step 4: Confirm the manufacturing environment

Verify equipment qualification and calibration status, cleaning status, environmental and utility data for the relevant windows, and that no facility-level event (a utility failure, an EM excursion, a recall of a shared component) touches the batch.

### Step 5: Regulatory conformance check

Confirm the batch was made and tested per the registered/authorised process and specifications. For a change made under change control, confirm it was approved and, where required, that regulators were notified or the variation approved before the changed process was used commercially.

### Step 6: Disposition decision and signature

With the package complete, the accountable person (QA disposition authority, or in the EU the QP for market certification) makes and records the decision. The record states the outcome, the date, the identity of the decision maker, and references the package reviewed. In a validated electronic system this is an electronic signature meeting [/articles/electronic-signatures-implementation](/articles/electronic-signatures-implementation) and Part 11 / Annex 11 requirements.

### Step 7: System status change

Only after the signed decision does the inventory status change in the ERP/LIMS from quarantine to released or rejected. The status change must be tied to the disposition record, not a separate informal action, and segregation of duties should prevent the person who made the product from also flipping the status.

---

## Open deviations and conditional release

This is the part interviewers and inspectors push hardest on, because it is where judgment, schedule pressure, and patient risk collide.

### Can you release a batch with an open deviation?

The honest answer is: sometimes, under defined conditions, and never casually. The principle, drawn from **21 CFR 211.192** and EU **Chapter 1 / Annex 16**, is that the disposition decision maker must understand the impact of every event on the batch before release. An *open* deviation does not automatically block release if its impact on that specific batch has been fully assessed and is understood to be acceptable, even though the broader investigation, root cause, or CAPA is still in progress.

The distinction to hold in your head:

- What must be **closed before release**: the **impact assessment on this batch**. You must be able to state, with evidence, that the deviation does not adversely affect the quality, safety, identity, strength, purity, or efficacy of this lot.
- What may remain **open after release**: the full **root cause investigation and CAPA**, provided the batch-impact conclusion does not depend on the missing root cause.

Annex 16 is explicit that a QP may certify a batch even where an unplanned deviation occurred, provided the deviation is investigated, the impact is assessed, and the relevant quality attributes, registered process parameters, and specifications are still met or the deviation is otherwise justified and recorded. Annex 16 also makes the QP personally accountable for that certification.

### Conditional release

"Conditional release" is a term used in a few distinct ways, and you should be precise about which one you mean.

1. **Release pending a final result.** A batch is released to the next internal step (not to market or to patients) while one non-critical, late-reporting result is still pending, under a pre-approved procedure that defines exactly which steps may proceed and which may not, and what happens if the pending result fails. This is sometimes called "release for further processing." It is internal, controlled, and reversible because nothing has reached a patient.

2. **Conditional/early release of finished product** before all data are final, which is generally **not** acceptable for commercial product going to patients. Final release requires conformance to all final specifications per 211.165.

3. **In ATMPs and short-shelf-life products**, the regulations recognize that some life-saving cell and gene therapy products cannot wait for a full sterility result (which can take up to fourteen days) before administration. EU ATMP GMP and FDA guidance allow a controlled approach where the product is released before the final sterility result using rapid microbiological methods and a defined risk-managed procedure, with the patient's physician informed and a clear plan if the result later fails. This is a deliberate, regulated exception, not a loophole, and it is documented in the marketing authorisation or clinical protocol. See [/articles/atmp-gmp-cell-gene-manufacturing](/articles/atmp-gmp-cell-gene-manufacturing).

The thing to never do: release commercial product to market with an open deviation whose batch impact has not been assessed, on the promise that "we'll figure out root cause later." That is the pattern regulators cite repeatedly.

### A worked example of an open-deviation release decision

Setup: a tablet batch. During compression, the metal detector at the end of the line was found, at end-of-shift verification, to be out of its challenge tolerance. The deviation is raised. The full investigation (why did the detector drift, is there a maintenance gap, is a CAPA needed) will take three weeks.

Disposition reasoning the reviewer documents:

| Question | Finding | Conclusion |
|----------|---------|------------|
| When was the detector last confirmed in tolerance? | At start-of-shift challenge, passed. | Bounds the affected window to one shift. |
| Was challenge product detected at start? | Yes, all three test pieces. | Detection was functional at start. |
| What is the failure mode at end-of-shift? | Detector sensitivity drifted, still detected ferrous test piece but failed the smallest non-ferrous. | Partial loss of capability, not total failure. |
| Is there an alternative control? | 100% units passed visual inspection and weight check; no metal-introducing operations occurred this shift per equipment log. | Low probability of metal contamination. |
| Can batch impact be concluded now? | Yes, based on bounded window, partial detection, and absence of a metal source. | Batch quality not adversely affected. |
| What stays open? | Root cause of the drift and the preventive CAPA. | Open, does not affect this batch's conclusion. |

Decision: release, with the deviation's batch-impact assessment closed and signed, the root cause/CAPA tracked to completion separately, and a note that future batches on this line are covered by interim verification until the CAPA closes. That is a defensible call. The opposite call (release with no impact assessment, "metal detector issue, low risk, release") is the one that becomes a 483 observation.

---

## Parametric release

Parametric release is release based on process and in-process data instead of finished-product end testing for a specific attribute, most commonly **sterility** for terminally sterilized products.

### What it is and the basis

For a product sterilized by a validated terminal moist-heat or other physical process, the sterility test on finished units is a weak control: it samples too few units to detect low-level contamination reliably and adds weeks of delay. Parametric release substitutes confirmation that the validated sterilization cycle ran within its proven parameters (for example, the achieved F0, time, temperature, and load configuration) plus the supporting bioburden, container-closure integrity, and biological/chemical indicator data, in place of the end-product sterility test.

The recognized basis includes the **EU GMP Annex 17 (Real Time Release Testing and Parametric Release)**, the relevant **ICH Q8/Q9/Q10** quality-by-design and quality-risk-management framework, and, in the US, FDA acceptance of parametric release for specific terminally sterilized products supported by guidance and the marketing application. Parametric release is **not** permitted for aseptically processed products, because there is no terminal sterilization step whose parameters can guarantee the outcome.

### What it requires

- A fully validated and well-characterized sterilization process with demonstrated lethality margin.
- Continuously monitored critical process parameters with alarms and recorded data.
- Bioburden monitoring of pre-sterilization product.
- Container closure integrity assurance (see [/articles/container-closure-integrity-testing](/articles/container-closure-integrity-testing)).
- Explicit approval in the marketing authorisation. You cannot decide to do parametric release unilaterally; it is a registered approach.
- A defined procedure for what happens when any parameter falls outside its validated range (the batch reverts to a deviation and standard disposition logic, and parametric release is forfeit for that lot).

### Real-time release testing (RTRT)

RTRT is the broader concept: releasing on the basis of in-process and process data and models rather than end testing for one or more attributes (assay by NIR, dissolution by a validated surrogate model, and so on). Parametric release for sterility is a specific historical case of RTRT. RTRT lives under Annex 17 and ICH Q8/Q12 and is tied to a QbD control strategy. See [/articles/quality-by-design-and-doe](/articles/quality-by-design-and-doe) and [/articles/continued-process-verification-cpv](/articles/continued-process-verification-cpv).

---

## QA versus QP: who actually signs

This trips people up because the same act has different owners in different regions.

### In the EU and the broader ICH/PIC/S world: the Qualified Person

The **Qualified Person** is a named, legally recognized individual (with defined eligibility: an appropriate degree, specified experience, and named on the manufacturing/import authorisation) who personally certifies each batch before it is placed on the EU market. The QP's certification is recorded in a register or equivalent and is a personal legal responsibility, not a delegable rubber stamp. Annex 16 lays out exactly what the QP must ensure and allows for a chain of confirmations across sites, where each site's responsible person confirms their portion and the certifying QP relies on those confirmations while remaining accountable for the final certification. This topic has its own article: [/articles/qualified-person-batch-release-annex-16](/articles/qualified-person-batch-release-annex-16).

Key QP points for interviews:

- The QP certifies against **both** GMP **and** the marketing authorisation. Meeting specifications is necessary but not sufficient; the batch must match the registered process.
- The QP can and must refuse certification if not satisfied, regardless of commercial pressure.
- The QP relies on the pharmaceutical quality system and on others' work, but the certification act is personal.

### In the US: the quality control unit

US cGMP (21 CFR 211.22) vests approve/reject authority in the **quality control unit** as an organizational function. There is no "QP" role in US law. Release is a documented QA decision made by a designated, trained individual within the quality unit acting under the unit's authority. The accountability is organizational and procedural rather than the named-individual legal model of the EU QP. The substantive review is essentially the same; the legal framing differs.

### Roles and responsibilities table

| Role | Responsibility in disposition |
|------|------------------------------|
| Manufacturing / production | Executes the batch, completes the batch record, raises deviations promptly, provides first-level record review in some models |
| QC laboratory | Performs and reports release testing, manages OOS/OOT investigations, issues the finished-product CoA |
| QA batch record reviewer | Performs the documented review of the full disposition package, confirms event closure/impact, prepares the disposition recommendation |
| QA disposition authority (US) / QP (EU) | Makes and signs the final release/reject decision; QP certifies for EU market with personal legal accountability |
| Subject matter experts (validation, microbiology, engineering) | Provide impact assessments for deviations and excursions feeding the decision |
| Supply chain / inventory | Executes the system status change only after the signed disposition; maintains physical segregation of quarantine |
| Site quality head | Owns the procedure, the segregation of duties, and the authority delegation matrix |

Segregation of duties is a frequent inspection focus: the person who manufactured or tested the batch should not be the sole person dispositioning it, and the person dispositioning should not be the one who can silently change inventory status without the disposition record.

---

## Acceptance criteria: what a good disposition looks like

You know disposition was done well when all of the following hold:

- The decision is **documented and signed** by an authorized person, with date and clear outcome, and is traceable to the exact package reviewed.
- Every release test passed against the **current approved specification**, on the correct sample, and every OOS/OOT is closed with a valid investigation.
- Every deviation and change linked to the batch is either closed or carries a **documented, signed batch-impact assessment** that concludes acceptability on evidence, not assertion.
- The batch is confirmed to conform to the **registered process and marketing authorisation** (or IND/IMPD/protocol for clinical product), not just to internal specs.
- The **system status change followed** the signed decision, with proper segregation of duties.
- The whole thing is **reconstructable** months later by an inspector who was not there: an independent reviewer can follow the logic and reach the same conclusion.
- Disposition happened within the **timeframe the procedure commits to**, with no batches aging silently in quarantine.

The single best test: hand the disposition record and package to someone who has never seen the batch and ask them to explain why it was released. If they can, it was a good disposition. If they have to reconstruct the reasoning or guess, it was not.

---

## Common mistakes and inspection-finding patterns

These are the recurring patterns regulators cite, described generically.

- **Release with unresolved discrepancies.** A batch released while a deviation's impact on it was never actually assessed, or while an OOS was open. This maps directly to 211.192 and is one of the most cited disposition failures.
- **"Testing into compliance."** Retesting after an OOS until a passing result appears, then releasing, without a valid scientific basis to invalidate the original result. Always a finding.
- **No real review, just a signature.** Batch record review that is a checkbox exercise: the reviewer signed but missing entries, unexplained yield deviations, or uninvestigated in-process failures slipped through. Inspectors test this by pulling a record and finding the gap the reviewer missed.
- **Quality unit lacks independence or authority.** Production effectively decides release, or QA is pressured into release by schedule. 211.22 requires the quality unit to have the authority, and inspectors look for evidence it was actually exercised.
- **Conflating impact assessment closure with full investigation closure.** Either extreme is a problem: refusing to release until every CAPA closes (operationally unworkable and not required) or releasing with no batch-impact conclusion at all (the dangerous error).
- **Parametric release without the basis.** Treating a missed sterility test as "parametric release" when the product is aseptically processed, or when parametric release was never registered. Parametric release is only for validated terminal sterilization and only when approved in the application.
- **Status change disconnected from disposition.** Inventory flipped to "released" in the ERP before or without the signed quality decision, or by someone without authority. A data-integrity and segregation-of-duties finding.
- **Aging quarantine.** Batches sitting undispositioned for long periods, signaling broken investigation timelines and weak management oversight (a [/articles/management-review-q10](/articles/management-review-q10) topic).
- **Disposition not against the marketing authorisation.** Releasing because the product passed specs, while an unapproved change to the registered process was in effect. Specs passing is not the same as conforming to the authorisation.
- **Rework treated as a save.** Reprocessing a reject without a pre-approved procedure and justification.

---

## Interview-ready questions and how to answer them

**"Walk me through how you would disposition a batch."**
Give the sequence: assemble the package, review the executed batch record line by line, reconcile testing against the current approved specification with all OOS/OOT closed, resolve every linked deviation and change (closed, or open with a signed batch-impact assessment), confirm equipment/calibration/cleaning/EM status, confirm conformance to the registered process and authorisation, then make and sign the documented decision, and only then allow the system status to change. Emphasize traceability and segregation of duties.

**"Can you release a batch with an open deviation?"**
Yes, conditionally, when the deviation's impact on that specific batch has been fully assessed, documented, and concluded acceptable, even if the broader root cause investigation and CAPA remain open. What must be closed before release is the batch-impact assessment; the full investigation may continue afterward. Cite 211.192 and EU Annex 16. Then give the metal-detector style example to show you understand the line.

**"What is the difference between quarantine, release, and reject?"**
Quarantine is the default holding state, the absence of a disposition, segregated and unusable. Release is the positive decision that the batch conforms and is cleared for its intended use. Reject is the decision that it does not conform and cannot be used as is. Only QA can move material out of quarantine.

**"What is parametric release and when is it allowed?"**
Release of a terminally sterilized product based on validated sterilization parameters and supporting data instead of the end-product sterility test. It requires a validated, well-characterized process, monitored critical parameters, bioburden control, container-closure integrity, and explicit approval in the marketing authorisation under EU Annex 17 / ICH Q8-Q10. It is never allowed for aseptically processed product.

**"Who has the authority to release a batch?"**
In the US, the quality control unit per 21 CFR 211.22, exercised by a designated trained QA individual. In the EU, a named Qualified Person certifies each batch per Annex 16, a personal legal responsibility, against both GMP and the marketing authorisation. Make clear you understand both the organizational (US) and named-individual (EU) models.

**"What would make you refuse to release a batch?"**
Any unresolved OOS without a valid investigation; any deviation whose batch impact cannot be concluded acceptable on evidence; use of an unqualified instrument or expired material; non-conformance to the registered process; or any data-integrity concern in the records. Show you will hold the line under schedule pressure, because that independence is the entire point of the role.

**"How do you handle a short-shelf-life product that cannot wait for sterility results?"**
Reference the ATMP/short-shelf-life pathway: a pre-defined, risk-managed procedure registered in the marketing authorisation or protocol, using rapid microbiological methods, with the treating physician informed and a clear contingency if the final result fails. It is a controlled regulated exception, not a routine shortcut.

---

## Practical tips

- Build the disposition decision around a **checklist tied to live records**, not a memory of "the usual stuff." The checklist is your acceptance criteria made operational and your audit defense.
- Keep the **batch-impact assessment physically in the disposition record**, even when the full deviation lives in a separate system. The inspector wants to see the reasoning at the point of decision.
- Track and report **quarantine aging** as a quality metric (see [/articles/quality-metrics-and-kpis](/articles/quality-metrics-and-kpis)). Long-held batches are an early warning that investigations are slipping.
- Enforce **segregation of duties in the system**, not just in the SOP. The person who makes product should not be able to flip its status.
- When in doubt, **do not release.** Quarantine costs money; a wrong release costs patients and the licence. The asymmetry should shape every borderline call.
- For clinical/investigational product, remember disposition is against the **IND/IMPD and protocol**, and the rules differ (see [/articles/gmp-for-investigational-products-annex-13](/articles/gmp-for-investigational-products-annex-13)).

---

## Related articles

- [/articles/batch-record-review-gmp](/articles/batch-record-review-gmp)
- [/articles/qualified-person-batch-release-annex-16](/articles/qualified-person-batch-release-annex-16)
- [/articles/deviation-management](/articles/deviation-management)
- [/articles/oos-investigation-process](/articles/oos-investigation-process)
- [/articles/certificate-of-analysis](/articles/certificate-of-analysis)
- [/articles/what-is-a-capa](/articles/what-is-a-capa)
- [/articles/cfr-210-211-cgmp-walkthrough](/articles/cfr-210-211-cgmp-walkthrough)
- [/articles/atmp-gmp-cell-gene-manufacturing](/articles/atmp-gmp-cell-gene-manufacturing)
- [/articles/quality-event-classification-triage](/articles/quality-event-classification-triage)
- [/articles/pharmaceutical-quality-system](/articles/pharmaceutical-quality-system)
