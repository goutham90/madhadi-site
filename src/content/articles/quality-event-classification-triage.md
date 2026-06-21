---
title: "Triaging Quality Events: Critical, Major, Minor Classification and Risk Ranking"
description: "How to classify GMP quality events as critical, major, or minor, set investigation depth and escalation thresholds, and rank risk against patient impact. Decision trees, worked examples, and the inspection findings that follow weak triage."
pubDate: 2026-06-20
tags: ["deviation management", "quality risk management", "capa", "gmp", "patient safety", "investigations"]
pillar: "quality-assurance"
tier: "Intermediate"
---

Every quality event that lands in your QMS gets a label within hours of opening: critical, major, or minor. That label is not paperwork. It sets the investigation depth, who gets notified, how fast the clock runs, whether product is held, and whether a regulator or notified body needs to hear about it. Get the classification right and the rest of the process is proportionate. Get it wrong and you either drown a minor typo in a root cause investigation, or you ship a batch that should have been quarantined.

This page covers how to triage quality events the way a working QA professional does it: the regulatory basis, the decision logic, the escalation thresholds, the patient-impact assessment, and the mistakes inspectors cite when classification breaks down.

---

## What a quality event is and why classification is required

A quality event is any departure from an approved standard, expectation, or commitment that touches product quality, patient safety, or data integrity. The common types you triage:

- **Deviations / nonconformances**: a documented departure from an approved instruction, procedure, specification, or registered process. See [deviation management](/articles/deviation-management).
- **Out-of-specification (OOS) and out-of-trend (OOT) results**: a test result outside the registered limit or outside the established trend. See [oos-investigation-process](/articles/oos-investigation-process) and [out-of-trend-investigations](/articles/out-of-trend-investigations).
- **Complaints**: a report from outside the firm alleging a quality defect. See [product-complaint-handling](/articles/product-complaint-handling).
- **Audit and inspection findings**: gaps raised internally or by a regulator. See [audit-finding-classification](/articles/audit-finding-classification).
- **Adverse trends, environmental excursions, equipment failures, data integrity events.**

Every one of these needs a severity label before the investigation scopes itself.

### The regulatory basis

No single regulation hands you a three-tier classification table, but the obligation to grade events and respond proportionately runs through all of them.

> ICH Q10, *Pharmaceutical Quality System* (2008), Section 3.2.2: the corrective action and preventive action system should result in "product and process improvements and increased product and process understanding," and the firm should use "a structured approach to the investigation process... with the objective of determining the root cause. The level of effort, formality and documentation of the investigation should be commensurate with the level of risk."

That last sentence is the legal spine of triage. "Commensurate with the level of risk" means you must first establish the level of risk, which is exactly what classification does.

- **21 CFR 211.192** requires that any unexplained discrepancy or batch failure to meet specifications be thoroughly investigated, whether or not the batch was already distributed, and that the investigation extend to other batches and products that may have been associated. The depth of "thorough" scales with severity.
- **21 CFR 211.100(b)** requires deviations from written procedures to be recorded and justified.
- **EU GMP Chapter 1 (Pharmaceutical Quality System)** requires that deviations be assessed for impact on product quality and that significant deviations be investigated.
- **ICH Q9(R1), *Quality Risk Management* (2023 revision)** provides the risk framework that underpins severity, detectability, and probability scoring. Q9(R1) added emphasis on reducing subjectivity in risk assessments, which is directly relevant to keeping classification consistent.
- **EU GMP Annex 16** ties the Qualified Person's batch certification to the disposition of unresolved deviations, so the classification of an open event can block release.
- **For medical devices, 21 CFR 820 / ISO 13485:2016** require nonconformity control and CAPA with action proportionate to risk, and risk management per **ISO 14971:2019**. See [iso-14971-risk-management-devices](/articles/iso-14971-risk-management-devices) and [medical-device-quality-system-qmsr](/articles/medical-device-quality-system-qmsr).
- **For clinical, ICH E6(R3) Good Clinical Practice** distinguishes serious from non-serious GCP noncompliance and protocol deviations, with serious breaches reportable to authorities. See [clinical-qa-gcp-data-integrity](/articles/clinical-qa-gcp-data-integrity).

### The quality rationale

Classification exists to make three downstream decisions defensible:

1. **Investigation depth.** A minor event gets a contained correction and a brief rationale. A critical event gets a formal root cause investigation, batch impact assessment, and CAPA. See [root-cause-analysis-techniques](/articles/root-cause-analysis-techniques).
2. **Escalation and timelines.** Severity drives who is notified and how fast: a critical event reaches the head of quality and possibly management review within hours; a minor event closes at the local level.
3. **Product disposition.** Severity drives whether the affected batch, and potentially other batches, is held, rejected, recalled, or released with justification. See [batch-disposition-decisions](/articles/batch-disposition-decisions).

---

## The three tiers, defined

The exact words vary by company (critical/major/minor; or major/minor/no-impact; or a 1-5 scale), but the meaning is consistent across the industry. Anchor each tier on patient impact first, then product quality, then GMP/system impact.

| Tier | Definition | Patient / product impact | Typical investigation | Disposition default |
|------|-----------|--------------------------|----------------------|---------------------|
| **Critical** | Event that has caused, or could plausibly cause, harm to the patient, or renders product non-compliant with the registered standard in a way affecting safety, identity, strength, quality, or purity (SISPQ). Includes confirmed data integrity failures and sterility assurance breaches. | Direct patient safety risk; product unfit for use | Formal RCA, full batch impact assessment, CAPA, management notification, possible regulatory reporting | Quarantine / reject pending investigation; consider field action |
| **Major** | Significant departure from GMP or registered process that does not directly threaten patient safety but could affect product quality, or indicates a systemic weakness. | Potential quality impact; product may still be usable with justification | Documented investigation with root cause, impact assessment, CAPA if root cause is systemic | Hold pending assessment; release possible with documented justification |
| **Minor** | Isolated departure with no impact on product quality, patient safety, or data integrity; typically procedural or administrative. | None on SISPQ | Brief investigation, correction, short rationale; trend it | Release usually unaffected |

Two anchoring principles keep this honest:

- **Classify on potential, not only outcome.** A vial that was almost shipped under-filled is a critical event even if it was caught. The question is "what could this affect," not only "what did it affect this time." This is the single most common place where classification is gamed downward.
- **Systemic beats isolated.** A trivial defect that is the tenth occurrence this quarter is no longer minor. Recurrence escalates severity because it signals a CAPA failure. See [capa-effectiveness-verification](/articles/capa-effectiveness-verification).

### Worked tier examples

| Event | Initial read | Correct tier | Reasoning |
|-------|-------------|-------------|-----------|
| Operator initialed batch record entry one line below the correct row, no data lost | Looks minor | **Minor** | Administrative, no SISPQ impact, single occurrence. Correct per [good-documentation-practices](/articles/good-documentation-practices). |
| Media fill (aseptic process simulation) showed one contaminated unit | Looks major | **Critical** | Sterility assurance is patient-safety-critical; a positive challenges the aseptic process for all product made under that qualification. See [aseptic-processing-and-media-fills](/articles/aseptic-processing-and-media-fills). |
| HPLC integration parameters changed by an analyst with no audit trail entry and the change moved a result from OOS toward passing | Looks major | **Critical** | Confirmed data integrity event affecting a reportable result; directly impacts product disposition. See [chromatography-data-system-integrity](/articles/chromatography-data-system-integrity). |
| Room temperature excursion in a warehouse, product later shown by stability data to be unaffected | Looks critical | **Major** (often) | Real GMP departure and quality question, but with no demonstrated SISPQ impact once assessed. Critical at open if impact is unknown; can be re-classified after the impact assessment. |
| Cleaning verification swab result above the limit on a shared, multi-product line | Looks minor | **Major / Critical** | Potential cross-contamination of the next product. Severity rises with toxicity of residue. See [cross-contamination-control-shared-facilities](/articles/cross-contamination-control-shared-facilities). |
| Label mix-up: wrong strength label applied and not caught before release | Looks major | **Critical** | Wrong-strength medicine reaching a patient is a textbook recall trigger. See [recall-management-field-actions](/articles/recall-management-field-actions). |

---

## What goes in a classification decision

A classification is a record, not a gut call. The classification section of a quality event should capture:

- **Event description**: what happened, when, where, on which product/batch/lot, which equipment or system, who observed it.
- **Immediate actions / containment**: what was done to secure product and prevent escalation before the investigation started.
- **Affected scope**: batches, lots, products, systems, and time window potentially affected. This is what makes the difference between a one-batch event and a multi-batch problem.
- **Severity drivers**: the specific factors that drove the tier (see the risk-ranking section).
- **Assigned tier and the justification** for it, including why a higher or lower tier was not chosen.
- **Patient-impact statement**: an explicit yes/no/unknown on whether patient safety is or could be affected, with reasoning.
- **Reportability screen**: does this trip a regulatory reporting threshold (field alert, biological product deviation report, recall, GCP serious breach, MDR/vigilance)?
- **Classifier and reviewer**: who proposed the tier and who (QA) confirmed it.

A minor event may compress most of this into a few lines. A critical event expands each into its own section.

---

## How to triage: the step-by-step procedure

Triage runs in a fixed sequence. Do not skip to "assign a tier" before you have contained the event and scoped the impact, because the scope often changes the tier.

### Step 1: Contain before you classify

The moment a potential event is identified, secure the situation. Quarantine affected product, stop the line if needed, isolate the suspect system, preserve the original records and any failing samples. Containment is not the investigation; it buys you time to classify correctly without product moving in the meantime.

### Step 2: Capture the facts

Write the objective description: what, where, when, who, which lot/system. No root cause yet, no blame, no speculation. Pull the underlying records (batch record, audit trail, chromatogram, EM data) before they can be overwritten. For data-integrity-adjacent events, freeze the audit trail and metadata. See [audit-trail-design-and-review](/articles/audit-trail-design-and-review).

### Step 3: Define the affected scope

Ask: what else could this touch? Other units in the batch, other batches on the same equipment, other products on a shared line, other results from the same instrument or analyst, other time periods. Scope is where minor events become major events. A single OOS that turns out to share a root cause with three other lots is no longer a one-lot problem.

### Step 4: Assess potential patient impact

This is the decision that anchors the tier. Run the patient-impact questions (next section). If the honest answer to "could this reach a patient and cause harm" is yes or unknown, you are at critical until proven otherwise.

### Step 5: Score the risk drivers

Apply your severity, probability, and detectability logic (the risk-ranking section). Many sites use a simple matrix; ICH Q9(R1) backs scoring methods such as FMEA for complex events. See [quality-risk-management](/articles/quality-risk-management).

### Step 6: Assign the tier and write the justification

State the tier and the specific drivers. Critically, document why you did not go one level higher. "Classified major, not critical, because the impact assessment confirmed no SISPQ effect on released product; isolated occurrence; no patient exposure" is a defensible sentence. "Classified minor" with no reasoning is an inspection finding.

### Step 7: Trigger the right downstream path

The tier now drives investigation depth, timeline, escalation, and disposition. Open the CAPA if warranted. Notify per the escalation matrix.

### Step 8: Re-classify if the facts change

Classification is provisional until the investigation closes. If the impact assessment reveals broader scope or patient exposure, escalate the tier and document the change. Downgrading is allowed too, but only on evidence, and the original rationale must remain visible. Never quietly overwrite the first classification.

> Practical rule: **classify high at open, refine on evidence.** It is always easier to defend an event that started critical and was justified down to major than one that started minor and had to be escalated after a regulator asked questions.

---

## Patient-impact assessment: the heart of triage

Severity is ultimately about the patient. A structured set of questions keeps this from being subjective:

1. **Does the event affect SISPQ?** Safety, identity, strength, purity, or quality of the product as registered. If yes, it is at least major and likely critical.
2. **Could affected product reach a patient?** Already distributed, or in finished-goods inventory, or still in process and containable? Distributed product raises severity and may trigger field action.
3. **What is the harm if it does reach a patient?** Map to a harm scale: negligible, minor, serious, life-threatening. Wrong strength, missing dose, contamination, and sterility failures sit at the top.
4. **What population is exposed?** Pediatric, immunocompromised, or single-source life-sustaining products raise the stakes. Investigational product carries its own considerations under [gmp-for-investigational-products-annex-13](/articles/gmp-for-investigational-products-annex-13).
5. **Is the data supporting disposition trustworthy?** A data integrity failure means you cannot rely on the very results that would otherwise reassure you, so DI events default high. See [data-integrity-foundations](/articles/data-integrity-foundations).

### Worked patient-impact example

A sterile injectable lot shows a single positive in the sterility test (USP <71>). Run the questions:

- SISPQ affected: yes, sterility is the defining safety attribute of a parenteral.
- Could reach patient: lot is in finished-goods quarantine, not yet distributed.
- Harm if reached: serious to life-threatening (bloodstream infection).
- Population: parenteral, potentially compromised patients.
- Data trustworthy: assuming no lab error, yes.

Classification: **critical.** Investigation per USP <71> retest rules and a full sterility assurance review. See [sterility-testing-usp-71](/articles/sterility-testing-usp-71). Even though the lot is contained, the event is critical because the potential harm and the SISPQ hit are both maximal, and the same root cause may implicate other lots.

---

## Risk ranking: turning severity into a defensible score

For events where the tier is not obvious, use a risk matrix so the classification is reproducible rather than personality-driven. The standard inputs from quality risk management:

- **Severity (S)**: how bad is the consequence if the event causes harm? Anchored on patient impact.
- **Probability / occurrence (P)**: how likely is the harm given the event happened? For a contained, caught event the probability of patient harm may be low even when severity is high.
- **Detectability (D)**: how likely is it that the existing controls would catch this before product reaches a patient? Low detectability raises risk.

### Example severity / probability matrix

A 3x3 example. Map the resulting band to a tier.

| Severity ↓ / Probability → | Low | Medium | High |
|---------------------------|-----|--------|------|
| **High** (serious patient harm possible) | Major | Critical | Critical |
| **Medium** (quality impact, limited harm) | Minor | Major | Major |
| **Low** (no SISPQ impact) | Minor | Minor | Major |

Detectability then adjusts: an event with very poor detectability (controls would not have caught it) bumps one band higher. This mirrors FMEA logic where RPN = S × O × D, used in [iso-14971-risk-management-devices](/articles/iso-14971-risk-management-devices) and device CAPA.

### Worked risk-ranking example

A fill-line in-process check finds a single under-filled vial; the upstream checkweigher was later found to have drifted out of calibration for an unknown period.

- Severity: medium-high. Under-dose of an injectable affects strength (SISPQ).
- Probability: unknown because the checkweigher window is open; assume medium-high until bounded.
- Detectability: poor, the automated control that should have caught it was the failed control.

Initial classification: **critical**, because detectability of the primary control was compromised and the affected window is unbounded. After the impact assessment bounds the window (last good calibration, statistical sampling of retained units), if no further under-fills are found and the affected quantity is small and contained, this can be re-classified to major with documented justification. The calibration program then gets a CAPA. See [calibration-and-metrology-program](/articles/calibration-and-metrology-program).

---

## Escalation thresholds and timelines

Severity sets who is told, and how fast. Build an escalation matrix into the SOP so it is not improvised.

| Tier | Notify within | Who is notified | Investigation target | Reportability check |
|------|--------------|-----------------|---------------------|--------------------|
| **Critical** | Same day (hours) | QA head, site quality lead, affected function head, often regulatory affairs; management review for major safety events | Formal RCA; closure target commonly ~30 days with extensions justified | Field alert / BPDR / recall / vigilance assessment triggered immediately |
| **Major** | 1-2 business days | QA reviewer, area management | Documented investigation with root cause; ~30 day target | Screen for reportability; usually no immediate report |
| **Minor** | Routine (logged) | Local QA / supervisor | Brief; close quickly | None |

A few hard points on timelines and reporting:

- **Timelines are commitments, not suggestions.** Inspectors look at on-time closure rates. Overdue critical investigations are a recurring finding. If you need an extension, document the rationale before the due date, not after.
- **US field alert reports (21 CFR 314.81)** for NDA/ANDA products must be submitted within 3 working days of receiving information about specified problems (for example, mix-ups, failures to meet specifications, bacteriological contamination). A critical classification should trip this screen automatically.
- **Biological Product Deviation Reports (21 CFR 600.14 / 21 CFR 1271.350)** require reporting deviations affecting safety, purity, or potency of distributed biologics or HCT/Ps, generally within 45 calendar days.
- **EU Annex 16** means an open critical or major deviation can block QP certification, so the QP must be looped in. See [qualified-person-batch-release-annex-16](/articles/qualified-person-batch-release-annex-16).
- **Medical device adverse events / field corrections** follow MDR reporting (21 CFR 803) and EU MDR vigilance timelines; a critical device nonconformity triggers a reportability decision. See [device-postmarket-surveillance-mdr](/articles/device-postmarket-surveillance-mdr).
- **GCP serious breaches** under ICH E6(R3) and regional rules are reportable to authorities, typically within a short window (for example, 7 days in some regions) of becoming aware. See [gcp-audits-and-inspections](/articles/gcp-audits-and-inspections).

The classification step should include a "reportability screen" so the regulatory clock starts on day zero, not after the investigation finishes.

---

## How classification drives investigation depth

This is the payoff of getting the tier right, and the thing inspectors test.

- **Minor**: a correction and a short rationale. You fix the entry, note why it had no impact, and trend it. No formal RCA. The risk is over-investigating, which buries real signals in noise and slows the QMS.
- **Major**: a documented investigation that identifies root cause, assesses product impact, and opens a CAPA if the cause is systemic. Tools: structured problem statement, timeline, and a root cause method appropriate to complexity (5 Whys for simple, fishbone or fault tree for complex). See [root-cause-analysis-techniques](/articles/root-cause-analysis-techniques).
- **Critical**: full formal investigation with batch impact assessment across all potentially affected lots, root cause to the systemic level, CAPA with effectiveness checks, and management notification. Disposition is held until the investigation supports a decision.

The principle from ICH Q10 is **proportionality**: effort commensurate with risk. Over-investigating a minor and under-investigating a critical are both defects, and inspectors cite both.

---

## Roles and responsibilities

| Role | Responsibility in triage |
|------|--------------------------|
| **Event initiator / area owner** | Identifies and reports the event promptly, performs containment, writes the factual description, proposes an initial classification. |
| **QA (event owner / reviewer)** | Owns and approves the final classification; ensures consistency across events; confirms patient-impact assessment; runs the reportability screen; gatekeeps disposition. |
| **SME (process, analytical, microbiology, engineering)** | Provides the technical impact assessment that the tier depends on; bounds the affected scope; supports root cause. |
| **Qualified Person (EU) / disposition decision-maker** | Cannot certify a batch with unresolved critical/major deviations; relies on the classification to decide release. |
| **Regulatory Affairs** | Determines whether the event trips a reporting obligation once flagged by the reportability screen. |
| **Quality / management review** | Reviews critical events and trends; ensures recurring minors are escalated; owns the system-level CAPA. See [management-review-q10](/articles/management-review-q10). |
| **Vendor / contract manufacturer** | Reports events affecting your product per the quality agreement; classification responsibilities and notification timelines must be defined in that agreement. See [cdmo-oversight-quality-agreements](/articles/cdmo-oversight-quality-agreements). |

The unbreakable rule: **QA owns the final classification.** Production can propose, but QA must be able to overrule a downward classification without pressure. An inspector will ask exactly how that independence is protected.

---

## Common mistakes and inspection-finding patterns

These are the patterns regulators cite, drawn from published warning-letter and inspection trends (generic, no company names). See [fda-warning-letters-patterns](/articles/fda-warning-letters-patterns) and [regulatory-intelligence-483-trends](/articles/regulatory-intelligence-483-trends).

- **Classifying down to dodge work.** Events labeled minor that clearly affected, or could affect, product quality. This is the most common and the most damaging because it cascades into a shallow investigation. Inspectors compare your classification against the facts and challenge any tier that looks self-serving.
- **Inconsistent classification.** The same type of event called critical in January and minor in June. Without written criteria and examples, classification drifts with whoever is on shift. Fix it with a classification SOP, anchored examples, and periodic calibration of reviewers.
- **No documented justification.** A tier assigned with no reasoning. "Minor" alone is not a record. The justification, including why a higher tier was rejected, is what makes it defensible.
- **Failing to assess scope.** Investigating one batch when the root cause clearly implicated others. 21 CFR 211.192 explicitly requires extending the investigation to other batches and products that may have been associated.
- **Repeat events never escalated.** The same minor recurring monthly, each closed in isolation, with no trend review and no CAPA. Recurrence is itself a severity driver. See [deviation-management](/articles/deviation-management) and [quality-metrics-and-kpis](/articles/quality-metrics-and-kpis).
- **Late or missing regulatory reporting.** A critical event that met the field alert or BPDR threshold but was not reported in time because the reportability screen was done after the investigation, not at classification.
- **Treating data integrity events as low severity.** A "minor" audit-trail gap that actually undermines the trustworthiness of a reportable result. DI events default high. See [data-integrity-foundations](/articles/data-integrity-foundations).
- **Open investigations past their timeline with no justified extension.** Backlog of overdue critical/major events is a standing finding and a quality-culture red flag. See [quality-culture-di-failures](/articles/quality-culture-di-failures).
- **Classifying on outcome instead of potential.** "No harm occurred, so it's minor." The near-miss that was caught by luck rather than control is still a serious event.

---

## Acceptance criteria: what good triage looks like

You know your classification process is working when:

- Every quality event has a tier assigned, with a written justification, within the SOP-defined timeframe of opening.
- Classification criteria are documented, with anchored examples, and applied consistently across events and shifts.
- Each event has an explicit patient-impact statement and a completed reportability screen.
- Investigation depth visibly matches the tier: minors are short, criticals are formal, and you can show the proportionality.
- Re-classifications are evidence-based and the history is preserved (no silent overwrites).
- Escalation actually happened on time for critical and major events, with notification records.
- Recurring minors are caught by trend review and escalated, with system-level CAPA.
- QA's authority over the final tier is documented and demonstrably independent of production.
- On-time closure rate for critical and major events is tracked and reported in management review.

---

## Interview-ready: questions you will be asked

**"Walk me through how you classify a deviation."**
Contain first, capture the facts objectively, define the affected scope, assess potential patient impact, score severity/probability/detectability, assign the tier with written justification including why not higher, then trigger the proportionate investigation and escalation. Re-classify on evidence if the facts change. Emphasize "classify high at open, refine on evidence."

**"What makes an event critical versus major?"**
Critical means it has caused or could plausibly cause patient harm, or it makes product non-compliant on safety, identity, strength, quality, or purity, including confirmed data integrity failures and sterility breaches. Major is a significant GMP departure that could affect quality but does not directly threaten patient safety. The dividing line is patient impact on SISPQ.

**"A batch passed all release tests but one in-process check was missed. How do you classify it?"**
Do not anchor on the passing results. Assess what the missed check protects against, whether passing final tests actually demonstrates that attribute, the scope (other batches with the same gap), and detectability. If the missed check is the only control for a safety-relevant attribute, it leans critical regardless of the final test result.

**"You think it's major; production insists it's minor. What do you do?"**
QA owns the final classification. I document the severity drivers and the patient-impact reasoning, hold to the evidence-based tier, and escalate the disagreement through the quality channel rather than negotiating the tier down. Classification independence is a quality-system control, not a discussion.

**"How does classification connect to investigation depth?"**
ICH Q10 requires effort commensurate with risk. The tier sets the depth: minor gets a correction and rationale, major gets a documented root cause and impact assessment, critical gets a formal investigation with full batch impact assessment and CAPA. Over-investigating a minor is as much a defect as under-investigating a critical.

**"When does a quality event become reportable to a regulator?"**
At classification I run a reportability screen. For US NDA/ANDA products, field alert reportable problems go in within 3 working days (21 CFR 314.81). For distributed biologics and HCT/Ps, BPDRs are generally due within 45 days (21 CFR 600.14 / 1271.350). Devices follow MDR (21 CFR 803) and EU MDR vigilance timelines; serious GCP breaches follow E6(R3) and regional rules. Critical product-quality events also feed the recall decision.

**"How do you keep classification consistent across reviewers?"**
Written criteria with anchored examples in the SOP, a risk matrix for non-obvious cases, periodic calibration sessions where reviewers classify sample events and compare, and trend review to catch drift. Q9(R1) specifically pushes to reduce subjectivity in risk assessment.

**"What's the risk of classifying too aggressively, calling everything critical?"**
You overload the investigation and CAPA system, dilute attention away from real critical events, blow timelines, and erode credibility. Proportionality runs both ways. The goal is the right tier, not the highest tier.

---

## Practical tips

- Keep a one-page anchored-examples job aid posted where events get opened. Concrete examples beat abstract definitions for consistency.
- Build the reportability screen into the classification form so the regulatory clock starts at day zero.
- Add a "why not higher" field to the justification. It forces the classifier to reason and gives the inspector their answer.
- Run periodic classification calibration: have several reviewers independently tier the same set of historical events and reconcile differences. Drift shows up fast.
- Track tier distribution over time. A site reporting almost no critical events and a flood of minors is often classifying down, not running clean.
- Never silently overwrite an initial classification. Re-classification is a documented decision with its own rationale.
- For shared facilities and multi-product lines, default the scope question to "what's the next product on this equipment" before you settle a tier.

---

## Related reading

- [deviation-management](/articles/deviation-management)
- [oos-investigation-process](/articles/oos-investigation-process)
- [out-of-trend-investigations](/articles/out-of-trend-investigations)
- [root-cause-analysis-techniques](/articles/root-cause-analysis-techniques)
- [what-is-a-capa](/articles/what-is-a-capa)
- [capa-effectiveness-verification](/articles/capa-effectiveness-verification)
- [quality-risk-management](/articles/quality-risk-management)
- [batch-disposition-decisions](/articles/batch-disposition-decisions)
- [product-complaint-handling](/articles/product-complaint-handling)
- [recall-management-field-actions](/articles/recall-management-field-actions)
- [audit-finding-classification](/articles/audit-finding-classification)
- [human-error-in-deviations](/articles/human-error-in-deviations)
