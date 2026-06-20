---
title: "QMS Self-Audit: Evaluating Your Pharmaceutical Quality Management System"
description: "A complete QMS self-audit framework covering document control, deviation and CAPA management, change control, training, supplier qualification, internal audits, and quality metrics. Structured around ICH Q10 and FDA/EMA expectations."
pubDate: 2026-03-24
tags: ["QMS", "audit", "self-audit", "CAPA", "deviation", "document-control", "ICH-Q10"]
tier: "Intermediate"
pillar: "quality-assurance"
---

A quality management system audit isn't just a pre-inspection exercise. It's the diagnostic tool for understanding whether your quality system is actually managing quality, or just producing documentation that looks like it does. The difference matters enormously when your system is under pressure: when batches are failing, when an out-of-specification result won't resolve, when an inspector is in the building.

This checklist covers the core elements of a pharmaceutical QMS aligned with ICH Q10 and FDA/EMA expectations. Work through each section methodically. The questions are designed to probe whether the system works, not just whether documentation exists. A useful mental model: an inspector reads your records to find what your system actually does, not what your procedures say it should do. Your self-audit should read the same way.

Before you start, decide how you will run it. A self-audit done as a paperwork tick-box exercise produces a clean report and a false sense of security. A self-audit done by someone willing to pull records, follow threads, and ask people what really happens produces findings that sting a little. The second kind is the one worth doing. Schedule it when you have time to chase the uncomfortable answers, give yourself permission to write down what you find, and treat your own findings with the same seriousness you would treat an external observation.

---

## How to use this checklist

A few ground rules make the difference between a useful self-audit and a wasted week.

**Audit by sample, not by survey.** You cannot review every record. Pull a defined sample, follow it end to end, and let what you find drive where you dig deeper. If the first five deviations you pull all show late reporting, pull twenty more before you conclude anything. One bad record is an event. A pattern across a sample is a system finding.

**Trace, don't tour.** The strongest audit technique is tracing a single event through every system it touches. Take one significant deviation. Follow it into the investigation, into the impact assessment, into the CAPA, into the change control if a process was altered, into the training records if retraining was the action, into the next product quality review where the trend should appear. A weakness anywhere in that chain is invisible if you only look at each system in isolation.

**Separate the isolated gap from the systemic one.** A single SOP missing a review date is a typo. The document review process failing to flag forty overdue SOPs is a system failure. Always ask whether the thing you found is one occurrence or evidence of a broken control.

**Write findings against the requirement, not your opinion.** Each finding should name the regulation, standard, or internal procedure that the observed practice does not meet. This keeps the self-audit defensible and gives the people who have to fix it a clear target.

A simple severity scheme keeps prioritization honest. Critical means product of uncertain quality may have reached a patient, or a control that protects patients is absent or ineffective. Major means a required system exists but does not work reliably enough to be trusted. Minor means an isolated lapse with no quality impact. Tie every finding to one of these before you decide what to fix first.

---

## Section 1: Document Control

Document control is foundational. If your document system doesn't work, if people don't know which version is current, if documents take six months to get approved, if training records don't match the current document versions, nothing downstream is reliable. This is why both FDA and EU inspectors often start here: a weak document system predicts weakness everywhere else.

### Document hierarchy and classification

- [ ] Is there a documented hierarchy of GxP documents (policies, SOPs, work instructions, forms, records)?
- [ ] Is it clear which document types require GxP controls and which don't?
- [ ] Are all GxP documents given unique identifiers, version numbers, and effective dates?
- [ ] Is there a system (an electronic document management system or a controlled physical system) that prevents use of obsolete document versions?

### Document lifecycle controls

- [ ] Does the document creation and revision process require QA review and approval before a document becomes effective?
- [ ] Is there a defined review cycle (for example, biennial or triennial review) for all SOPs?
- [ ] Are documents past their scheduled review date identified and tracked?
- [ ] When a document is revised, are all previous versions archived (not deleted) and marked as obsolete?
- [ ] Is there a process to ensure old document versions are removed from working areas when new versions are issued?

**A specific check:** Pick five SOPs at random. Check whether the training records for the staff performing those procedures show training on the current version, not a previous version. This single check reveals whether your document control and training systems are synchronized. It is one of the fastest ways to expose a disconnect that would otherwise stay hidden until an inspector finds it.

### Forms management

- [ ] Are blank forms controlled and version-identified?
- [ ] Is there a process to prevent use of obsolete form versions?
- [ ] Are completed GxP forms retained as records?
- [ ] For paper-based recording, are forms pre-printed and issued under control to prevent post-hoc reconstruction?

### What the regulations expect here

The requirement to control records and define who may issue and change them sits in 21 CFR 211.68, 211.180, 211.186, and 211.194, and in EU GMP Chapter 4 (Documentation). EU GMP Chapter 4 is explicit that documents must be designed, prepared, reviewed, and distributed with care, and that records must be made or completed at the time each action is taken. If your forms allow blanks to be filled in later from memory, you are not meeting that contemporaneous-record expectation. The same principle underpins the data integrity expectation that records be original and contemporaneous, which is treated in more depth in [Good Documentation Practices](/articles/good-documentation-practices) and [ALCOA+ Principles](/articles/alcoa-plus-deep-dive).

A common worked example: a site issues a controlled batch record but lets operators photocopy a spare blank when the line is busy. The photocopy has no issuance log, no reconciliation, and no way to prove it is the current version. That single shortcut breaks document control, record reconciliation, and contemporaneous recording at once. For the mechanics of building a system that prevents this, see [Document Control Fundamentals](/articles/document-control-fundamentals).

---

## Section 2: Deviation Management

Deviations are the primary signal of how well your processes are actually working. A deviation system that finds and closes deviations quickly is good. A deviation system that finds nothing, or finds the same things repeatedly, or closes deviations with superficial corrective actions, is a problem. A suspiciously low deviation count is rarely a sign of a perfect process. It usually means events are not being captured.

### Deviation identification and reporting

- [ ] Is there a clear procedure for when to open a deviation, and who is responsible?
- [ ] Are deviations opened at the time they occur, not days later?
- [ ] Is there a classification system (critical, major, minor) with defined criteria for each?
- [ ] Do all areas generating GxP data (manufacturing, the QC lab, clinical, warehouse) use the same deviation system?
- [ ] Are near misses, events that almost caused a problem but didn't, captured and trended?

**The documentation timing problem:** Pull ten deviation records from the past quarter. Check the date the event occurred against the date the deviation was opened. Events opened more than 48 hours after they occurred suggest one of three things: staff don't know the reporting requirement, staff feel uncomfortable reporting, or staff are making private judgments about what "needs" to be documented. All three are problems, and the third is the most dangerous because it means someone other than QA is deciding what enters the quality system.

### Investigation quality

- [ ] Do investigations identify root cause, not just describe what happened?
- [ ] For deviations affecting product quality, is there a documented impact assessment on the affected batch or batches?
- [ ] Are corrective actions proposed in response to the root cause, not just the symptom?
- [ ] Are deviations involving GxP systems linked to the change control or CAPA system as appropriate?
- [ ] Is investigation quality reviewed by QA, not just the conclusion?

**Root cause quality check:** Pull five recent deviation closure records. For each, ask whether the proposed corrective action could have prevented the event described as the root cause. If the root cause is "analyst transcription error" and the corrective action is "retrain analyst," would retraining actually prevent recurrence, or is there a process design issue (confusing forms, unclear instructions, a manual transcription step that should have been eliminated) that made the error likely? Weak root causes lead to recurrences. A genuinely useful technique here is asking why several times in sequence until you reach a cause you can act on, but the discipline matters more than the count: stop when you reach a cause that, if fixed, removes the failure mode.

### Deviation trending

- [ ] Is there a periodic review of deviation frequency, type, and location?
- [ ] Are repeat deviations of the same type identified and escalated?
- [ ] Are trending reviews documented and reviewed at quality review meetings?
- [ ] Is the deviation trend data used to identify systemic issues, or does it sit in a report that nobody acts on?

The requirement to investigate any unexplained discrepancy or batch failure, and to extend the investigation to other batches and products that may be associated, comes directly from 21 CFR 211.192. EU GMP Chapter 1 establishes that deviations are documented and investigated, and the broader principle of quality risk management governing how deeply you investigate is set out in ICH Q9 (Quality Risk Management). For the full mechanics, see [Deviation Management](/articles/deviation-management) and, for the laboratory-specific path, [OOS Investigation Process](/articles/oos-investigation-process).

---

## Section 3: CAPA Management

CAPA is the corrective and preventive action system, the mechanism by which quality problems are systematically resolved and prevented from recurring. A CAPA system that generates action items without verifying they worked isn't a quality system. It's an action item tracker.

### CAPA triggers and opening

- [ ] Is it clear when a CAPA should be opened rather than a deviation corrective action?
- [ ] Are CAPAs opened for repeat deviations, significant audit findings, OOS trends, complaint trends, and data integrity events?
- [ ] Are CAPA timelines defined at opening and tracked?
- [ ] Who reviews and approves CAPA plans before implementation begins?

### CAPA quality

- [ ] Does the CAPA identify the root cause independently from the symptom?
- [ ] Does the corrective action address the root cause directly?
- [ ] Does the preventive action address related situations that haven't yet caused a problem?
- [ ] Is the scope of the CAPA assessed, does the problem exist in other areas, products, or sites beyond where it was identified?

**Scope assessment is the most commonly skipped step.** An OOS found to be caused by an audit trail gap on one chromatography data system instrument shouldn't trigger a CAPA only for that instrument. The CAPA should assess whether the same gap exists on other instruments in the same lab, in other labs, and at other facilities. The scope of the CAPA should match the scope of the problem, not the scope of where it happened to surface. Inspectors look for exactly this: a narrow fix to a wide problem is one of the most cited CAPA weaknesses.

### Effectiveness checks

- [ ] Is there a documented effectiveness check plan for every CAPA?
- [ ] Do the effectiveness check criteria define what success means, a specific measurable outcome, not just "no recurrence"?
- [ ] Are effectiveness checks actually performed at the planned timeframe?
- [ ] When an effectiveness check shows the CAPA didn't work, is a new CAPA opened?
- [ ] Are overdue CAPAs and overdue effectiveness checks tracked as a compliance metric?

**Check what the data shows:** Pull the past twelve months of CAPAs that should have had effectiveness checks completed. How many were completed on time? What percentage showed recurrence? A low effectiveness-check completion rate or a high recurrence rate signals that something is wrong with CAPA discipline. The exact threshold you set is a local risk decision, but a recurrence rate that climbs quarter over quarter is a finding regardless of the absolute number.

ICH Q10 (Pharmaceutical Quality System), section 3.2.2, names CAPA as one of the four core pharmaceutical quality system elements and requires that the methodology result in product and process improvements and an enhanced understanding of products and processes. The underlying regulatory hook for corrective action in US GMP is 21 CFR 211.192. For a ground-up explanation of the concept, see [What Is a CAPA?](/articles/what-is-a-capa).

---

## Section 4: Change Control

Change control governs modifications to processes, procedures, equipment, facilities, and computer systems under GxP control. Without good change control, you don't know whether your current validated and qualified state reflects what was assessed and approved, or what someone changed six months ago.

### Change control scope

- [ ] Is there a documented scope for what requires change control?
- [ ] Does change control cover manufacturing processes, cleaning processes, analytical methods, equipment and facilities, computer systems, SOPs affecting GxP activities, and raw material specifications?
- [ ] Are staff aware of the change control requirement, or do some changes get made informally without documentation?

**The informal change:** The most common gap is not that the change control SOP is wrong, it's that some changes happen outside the system. A manufacturing supervisor modifies a step "temporarily" to solve a production problem. An IT administrator applies a patch without going through change control because "it was urgent." An analyst adjusts a method parameter to get a passing result without a method change control record. Finding these requires talking to people and comparing what systems actually do against the last approved configuration, not just reading the change log, which by definition will not contain the change that was never logged. A practical test: ask an operator to walk you through a step, then compare their description to the current procedure. Quiet drift shows up fast.

### Impact assessment quality

- [ ] Does the change control form require an impact assessment specific to the change, not a generic checklist?
- [ ] Does the assessment address the validated state of systems and equipment, regulatory filings, quality risk, and the need for revalidation or requalification?
- [ ] Are impact assessments reviewed by someone with technical knowledge of what's being changed?
- [ ] Is QA required to review and approve the impact assessment before the change is implemented?

### Post-implementation verification

- [ ] Is there a step to verify the change was implemented as planned?
- [ ] For changes requiring testing, is there documented evidence that testing was performed and passed before the change is considered complete?
- [ ] Are changes linked to their supporting documentation (updated SOPs, new training records, updated validation documentation)?

The expectation that production and process controls are not changed without review and approval sits in 21 CFR 211.100(a). EU GMP Chapter 1 establishes change management as a quality system responsibility, and ICH Q10 section 3.2.3 names change management as a core element. ICH Q12 (Technical and Regulatory Considerations for Pharmaceutical Product Lifecycle Management) adds the established-conditions framework that helps a company decide which changes need prior regulatory approval and which can be managed within the quality system. For changes to computerized systems specifically, where the impact assessment must address validated state and data integrity together, see [Change Control for Validated Systems](/articles/change-control-validated-systems) and [ICH Q12 Lifecycle Management](/articles/ich-q12-lifecycle-management).

---

## Section 5: Training Program

Training is the mechanism by which procedural knowledge becomes actual practice. A training program that produces completion records without producing competent, compliant practice is documentation overhead, not quality infrastructure.

### Training curriculum and matrix

- [ ] Is there a training matrix that defines what training each role requires?
- [ ] Does the curriculum cover GxP fundamentals, role-specific procedures, and site-specific practices?
- [ ] Is the training matrix updated when procedures change?
- [ ] Are new hires prevented from performing GxP activities before completing required initial training?

### Training record currency

- [ ] Do training records for each employee show training on the current version of every SOP they are required to use?
- [ ] When a document is revised, is retraining assigned and tracked to completion?
- [ ] Are there any gaps where employees are performing GxP activities against outdated training records?

**The specific check:** Pick five employees who regularly perform GxP activities. Cross-reference their training records against the current version of the SOPs governing their work. Is every SOP they need current in their training record? This check takes about twenty minutes and reveals the state of your training and document control integration immediately. It is the mirror image of the document control check in Section 1, and running both gives you a reliable read on whether the two systems are actually wired together.

### Effectiveness assessment

- [ ] Is there a mechanism to verify training was effective, that people actually understood and can apply what they were trained on?
- [ ] For critical GxP tasks, is there practical demonstration or on-the-job verification, not just read-and-sign?
- [ ] When a training failure is identified, an employee performing a task incorrectly, is it investigated as a training system failure, not just a human failure?

The requirement that personnel have the education, training, and experience to perform their functions is in 21 CFR 211.25, and the requirement for training in current good manufacturing practice and in employees' specific functions is reinforced in 211.25(a) and 211.68. EU GMP Chapter 2 (Personnel) sets out the same expectation and adds that training effectiveness should be periodically assessed. The distinction between read-and-sign acknowledgment and demonstrated competence is exactly where many programs fall short. For program design, see [Training Program Design](/articles/training-program-gxp), and for how training intersects with a healthy quality culture, see [Quality Culture and Data Integrity Failures](/articles/quality-culture-di-failures).

---

## Section 6: Supplier and Vendor Qualification

Your quality system extends to your suppliers. Materials, services, and software that aren't qualified can compromise product quality and GxP record integrity regardless of how well your internal systems are managed. This is a defined responsibility, not a courtesy: you remain accountable for what an outsourced party does on your behalf.

### Approved vendor list management

- [ ] Is there a current approved vendor list for all critical materials and services?
- [ ] Does the list reflect current supplier qualification status?
- [ ] Is there a process to remove suppliers when qualification lapses?
- [ ] Are new materials only purchased from approved suppliers for GxP use?

### Supplier qualification and monitoring

- [ ] Is there a documented supplier qualification process that assigns qualification tiers based on risk?
- [ ] For high-risk suppliers (active pharmaceutical ingredient manufacturers, contract labs, software vendors for validated systems), is there documentation of audits, questionnaires, or other qualification activities?
- [ ] Are qualification activities performed at the required frequency?
- [ ] Is there a change notification requirement from suppliers, must they notify you before making changes that could affect your materials or services?
- [ ] Are supplier deviations (complaints, certificate-of-analysis failures, service failures) tracked and used in qualification decisions?

**The software vendor gap:** Many sites have strong supplier qualification for material suppliers but gaps for software vendors. The vendor of your laboratory information management system is a supplier. The vendor of your chromatography data system is a supplier. If a software vendor makes a change that affects how audit trails work and doesn't notify you, that's a qualification failure, but only if your supplier qualification covers software vendors and includes a change notification requirement in the quality agreement. Hosted and cloud software adds a further layer, because the vendor controls infrastructure you cannot inspect directly; see [Cloud and SaaS Validation](/articles/cloud-saas-validation) for how to qualify that arrangement.

The obligation to test and approve or reject components, containers, and closures, and the conditions for accepting a supplier's certificate of analysis in lieu of full identity-plus-attribute testing, are in 21 CFR 211.80 through 211.84. EU GMP Chapter 7 (Outsourced Activities) sets out the relationship between contract giver and contract acceptor and the requirement for a written quality agreement defining responsibilities. For the operating model, see [Supplier and Vendor Qualification](/articles/supplier-vendor-qualification) and [CDMO Oversight and Quality Agreements](/articles/cdmo-oversight-quality-agreements).

---

## Section 7: Internal Audit Program

Internal audits are your primary mechanism for identifying QMS gaps before external inspectors do. An internal audit program that only confirms compliance is missing the point. The goal is to find real problems while there is still time to fix them on your terms.

### Audit program design

- [ ] Is there a documented annual internal audit schedule?
- [ ] Does the schedule cover all GxP areas on a risk-based frequency?
- [ ] Are auditors independent of the areas being audited?
- [ ] Are auditors trained in audit techniques and GxP requirements?
- [ ] Does the audit scope include follow-up on previous audit findings?

### Audit execution

- [ ] Are audits planned with opening meetings, inspection activities, and closing meetings?
- [ ] Do auditors verify compliance by examining records and observing practice, not just reviewing procedures?
- [ ] Are audit findings classified by severity?
- [ ] Are audit reports completed within a defined timeframe after the audit?

### Audit follow-through

- [ ] Are all audit findings responded to with root cause analysis and corrective actions?
- [ ] Are CAPAs opened for significant audit findings?
- [ ] Is the effectiveness of audit corrective actions verified?
- [ ] Do the same findings recur across multiple audit cycles? If yes, the corrective actions aren't working.

There is a structural point worth naming: the self-audit you are running now should itself be examined by the internal audit program over time, and the internal audit program should be examined by management review. Each layer checks the one below it. A self-audit that consistently finds nothing, paired with an internal audit program that finds nothing, paired with external inspections that find plenty, tells you the internal mechanisms are not calibrated to reality.

Self-inspection is required by EU GMP Chapter 9 (Self Inspection), which expects audits to be conducted to monitor implementation of GMP and to propose corrective measures, with records kept. ICH Q10 section 3.2.4 includes internal audit within the process performance and product quality monitoring and management review elements. US GMP does not name "internal audit" by that title, but the obligation to evaluate quality standards is embedded throughout 21 CFR 211 and in the quality unit responsibilities of 211.22. For depth, see [Internal Audit Program](/articles/internal-audit-program) and, for the inspection-facing side, [FDA Inspection Readiness](/articles/fda-inspection-readiness).

---

## Section 8: Quality Metrics and Management Review

Quality metrics are the dashboard for the QMS. Management review is the governance mechanism that ensures the QMS is actually managed rather than merely operated.

### Quality metrics

A functional QMS should, at minimum, be monitoring:

- [ ] Deviation rate, types, and trend
- [ ] CAPA on-time completion rate
- [ ] CAPA effectiveness check completion rate
- [ ] OOS rate and invalidation rate
- [ ] Document overdue review rate
- [ ] Training completion and overdue rate
- [ ] Supplier complaint and rejection rate
- [ ] Change control cycle time
- [ ] Batch failure and rejection rate
- [ ] Audit finding closure rate

**Are the metrics being acted on?** Pull the last three management review packages. For each metric that showed a negative trend, is there a documented management response, an action item, a CAPA, a resource decision? Metrics that are reviewed and filed without action are not QMS management. They are compliance theater, and an inspector who sees a declining trend with no corresponding action will ask why.

A quick reference for what each metric is really telling you:

| Metric | What a bad reading usually means |
|---|---|
| CAPA on-time completion rate | The system opens actions it lacks capacity or discipline to close |
| CAPA effectiveness rate | Root causes are being fixed on paper but not in practice |
| OOS invalidation rate | Possible bias toward writing off results rather than investigating them |
| Document overdue review rate | The document control engine is not keeping pace with change |
| Deviation rate trending up | Either better detection (good) or a degrading process (bad), so investigate which |
| Deviation rate near zero | Underreporting, almost never a flawless process |
| Repeat audit findings | Corrective actions are not addressing root cause |

The point of the table is that no single number is good or bad in isolation. A rising deviation rate after you improve detection is a healthy sign. A falling one after you discourage reporting is a disaster. Always read the metric alongside what changed around it.

### Management review

- [ ] Is there a documented periodic management review, at minimum annual?
- [ ] Does the review cover all key quality metrics?
- [ ] Does the review identify areas requiring improvement and assign ownership?
- [ ] Are action items from management review tracked to completion?
- [ ] Does senior management actively participate, or is it a QA-run meeting with management present but disengaged?

ICH Q10 sections 3.4 and 4 set out the expectation for management responsibilities and management review of the pharmaceutical quality system, including review of the suitability and effectiveness of the system and the actions arising from it. EU GMP Chapter 1 establishes that senior management has ultimate responsibility for the quality system. The participation question is not cosmetic: regulators increasingly probe whether senior leadership genuinely owns quality outcomes or treats them as a delegated QA function.

---

## Section 9: Product Quality Reviews

Annual product reviews, also called product quality reviews, are the formal annual assessment of product quality trends. They are a regulatory requirement and a genuine quality tool when done well.

- [ ] Is there a product review for every commercial product on a defined annual schedule?
- [ ] Does the review cover batch yield and rejection trends, specification failures, OOS events, complaints, stability data, process capability indices where applicable, CAPA status, and regulatory commitments?
- [ ] Are trends analyzed, not just data presented?
- [ ] Are improvement opportunities identified and actioned?
- [ ] Is the review reviewed and approved by QA?

**The signal in the data:** A product where yield has been declining for three years, the OOS rate sits stubbornly high, and the same batch failure root cause keeps recurring is a process that needs intervention. If your product review trend data consistently shows these signals and there are no corresponding improvement actions, that is a quality governance failure, and it is a finding an inspector can read straight off your own report.

The US requirement is 21 CFR 211.180(e), which mandates an annual review of records for each drug product to determine the need for changes in specifications or manufacturing or control procedures. EU GMP Chapter 1 section 1.10 sets out the product quality review in detail, including the specific elements to be examined and the requirement to assess whether corrective and preventive action or revalidation is needed. For statistical interpretation of capability and control data within these reviews, see [Statistics in Quality: Cpk and Control Charts](/articles/statistics-in-quality-cpk-control-charts), and for the full review methodology, [Annual Product Review and PQR](/articles/annual-product-review-pqr).

---

## Scoring and next steps

As you work through this checklist, prioritize findings by three lenses.

**What affects patient safety or product quality.** Any gap meaning product of uncertain quality may have been released, or that could lead to a safety issue, is the highest priority regardless of other considerations. These findings get fixed first and may require notification, recall assessment, or both.

**What a regulator would cite.** Based on published warning letter and inspection-deficiency patterns over recent years, the most frequently cited QMS weaknesses cluster around three areas: investigation and CAPA adequacy (investigations that fail to determine root cause, scope, or extent), production and process control records (failure to review discrepancies and document them properly under 21 CFR 211.192), and the quality unit not fully exercising its responsibilities under 211.22. These are durable patterns, not one-year anomalies, which is why they belong in a self-audit. For how these surface in inspections and how to respond, see [FDA Warning Letters: Common Patterns](/articles/fda-warning-letters-patterns) and [Responding to a 483 or Warning Letter](/articles/483-warning-letter-response).

**What is systemic versus isolated.** An isolated minor gap corrected in one procedure is a small finding. The same gap across twenty procedures means the document review process is broken. Always escalate the system finding above the individual one, because fixing twenty symptoms one at a time leaves the cause intact.

Turn the findings into a CAPA plan with owners and dates, feed the systemic findings into management review, and schedule a re-check of the highest-severity items rather than assuming the fix held. A self-audit whose findings disappear into a folder is no better than not running one. The value is entirely in what changes afterward.

---

## Regulatory reference points

| QMS element | Key regulatory reference |
|---|---|
| Document control | 21 CFR 211.68, 211.180, 211.186, 211.194; EU GMP Chapter 4 |
| Deviations and investigations | 21 CFR 211.192; EU GMP Chapter 1; ICH Q9 |
| CAPA | 21 CFR 211.192; ICH Q10 section 3.2 |
| Change control | 21 CFR 211.100(a); EU GMP Chapter 1; ICH Q10 section 3.2; ICH Q12 |
| Training and personnel | 21 CFR 211.25, 211.68; EU GMP Chapter 2 |
| Supplier qualification and outsourcing | 21 CFR 211.80-211.84; EU GMP Chapter 7 |
| Internal audit and self inspection | EU GMP Chapter 9; ICH Q10 section 3.2; 21 CFR 211.22 |
| Product quality reviews | 21 CFR 211.180(e); EU GMP Chapter 1 section 1.10 |
| Management review | ICH Q10 sections 3.4 and 4; EU GMP Chapter 1 |
| Quality unit responsibilities | 21 CFR 211.22 |

---

## Related Articles

- [The Pharmaceutical Quality System: ICH Q10](/articles/pharmaceutical-quality-system)
- [Deviation Management](/articles/deviation-management)
- [What Is a CAPA?](/articles/what-is-a-capa)
- [Internal Audit Program](/articles/internal-audit-program)
- [Document Control Fundamentals](/articles/document-control-fundamentals)
- [Training Program Design](/articles/training-program-gxp)
- [Annual Product Review and PQR](/articles/annual-product-review-pqr)
- [Supplier and Vendor Qualification](/articles/supplier-vendor-qualification)
- [FDA Warning Letters: Common Patterns](/articles/fda-warning-letters-patterns)
