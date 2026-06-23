---
title: "Audit Finding Classification: Critical, Major, Minor and the Evidence Behind Each"
description: "How GxP audit and inspection findings are graded into critical, major and minor categories, the regulatory basis for each tier, and how to substantiate a finding with objective evidence."
pubDate: 2026-06-20
tags: ["audits", "inspection", "quality systems", "gmp", "capa", "compliance"]
pillar: "audits-inspection"
tier: "Intermediate"
---

A finding is only as good as its classification and its evidence. Two auditors can walk the same room, see the same gap, and write it up very differently. One writes "documentation issues observed." The other writes a major finding citing a specific batch record, a specific requirement, and a specific consequence. The second auditor is the one whose report drives action, survives challenge, and holds up when a regulator later reads the same file.

Classifying a finding is a judgment call with a defensible structure behind it. Get the structure right and the judgment becomes consistent across auditors, defensible to the auditee, and useful to the people who have to fix the problem. Get it wrong and you either inflate trivial observations into firefights or, worse, you bury a critical risk inside a list of minor housekeeping items where nobody acts on it.

This page covers what critical, major and minor mean, where those categories come from in the regulatory framework, how to substantiate each one with objective evidence, and how to write the finding so the classification is obvious from the words on the page.

---

## Why finding classification exists at all

Classification serves three purposes, and keeping them straight tells you why the rules are written the way they are.

First, **prioritization of action.** A site cannot fix everything at once. Grading tells the auditee, and its management, which gaps threaten product quality, patient safety, or data reliability now, versus which are improvements that can wait. A critical finding stops shipment or stops a study. A minor finding goes into the next revision cycle.

Second, **risk communication.** The grade is a one word risk signal to people who will never read the full finding text: the quality council, the receiving company in a supplier audit, the qualified person deciding on batch release, a regulator reading an audit file during an inspection. The grade has to mean the same thing to all of them.

Third, **decision triggers.** Many quality systems tie automatic consequences to the grade. A critical supplier finding can trigger a hold on incoming material or disqualification. A critical internal finding can require senior management notification within a defined number of hours and a CAPA before the affected product is released. The grade is not cosmetic. It pulls levers.

Because the grade pulls levers, the definitions have to be tight and the evidence has to be objective. A finding graded on opinion instead of evidence falls apart the moment the auditee pushes back, and auditees push back hardest on the gradings that cost them the most.

---

## The regulatory and standards basis

There is no single global regulation that says "a critical finding is X." Instead, a consistent three tier model appears across the major frameworks, and you should be able to cite the ones that apply to your audit type.

### PIC/S and the GMP inspection model

The most widely used definitions come from the **PIC/S Guide to Good Manufacturing Practice** and its companion inspection documents, in particular **PI 040 (PIC/S Guidance on Classification of GMP Deficiencies)** and the deficiency classification approach shared across PIC/S participating authorities. (The inspection report format is a separate document, PI 013.) The model is the one most quality professionals carry in their heads:

> A **critical deficiency** is one that has caused, or carries a significant risk of causing, product that could harm the patient. It also covers deficiencies tied to fraud, misrepresentation, or falsified product or data.
>
> A **major deficiency** is a non-critical deficiency that has produced, or could produce, product outside its marketing authorization; or that shows a significant departure from GMP; or that shows release procedures were not carried out properly; or a group of lesser deficiencies that, taken together, add up to a major problem even though none would be major alone.
>
> A **minor deficiency** is one that fits neither critical nor major, but still represents a departure from GMP.

Three things to notice in those definitions. Critical is anchored to **patient harm or data falsification.** Major is anchored to **the marketing authorization (the registered, approved way of making the product) and to systemic GMP failure.** Minor is the residual category, a real departure from GMP that does not rise to the other two. And the major definition explicitly allows **aggregation**: several minor findings of the same kind become a major one.

The same model underpins the **EU GMP** inspection regime. EU GMP inspectorates classify deficiencies as critical, major or other (minor) using criteria aligned with PIC/S, and the EMA's compilation of Union procedures for GMP inspections uses these categories.

### ICH Q9 and risk based grading

**ICH Q9(R1), Quality Risk Management** does not define finding categories directly, but it gives you the risk vocabulary that every defensible grading rests on: severity, probability of occurrence, and detectability. When you argue a grade, you are really arguing severity (how bad is the consequence) and likelihood (is this a one off or a pattern). Q9 is the reference you cite when an auditee asks you to justify why you scored severity high.

### GAMP 5 for computerized systems and CSV audits

For computerized system and data integrity audits, **ISPE GAMP 5 (Second Edition, 2022)** frames findings against intended use and risk to patient safety, product quality and data integrity. The same three way severity logic applies, with data integrity findings weighted heavily because an unreliable record undermines every quality decision built on top of it.

### Clinical (GCP) audits and inspections

For GCP audits and sponsor inspections, **ICH E6(R2)/E6(R3) Good Clinical Practice** is the standard, and regulators apply their own grading. The EMA's GCP inspection procedures and national authorities use **critical, major and minor** with definitions tuned to subject safety and data credibility rather than product quality:

> A **critical** GCP finding is a condition, practice, or process that harms the rights, safety, or well-being of trial subjects, or that compromises the quality and reliability of the data, or both.

The structure is identical to GMP; only the protected interest changes from product quality to subject safety and data integrity.

### ISO 19011 and ISO 17025/9001 audit terminology

For management system and laboratory audits under **ISO 19011:2018 (Guidelines for auditing management systems)** and **ISO/IEC 17025:2017**, the common terms are **major nonconformity** and **minor nonconformity**, plus **observation** or **opportunity for improvement (OFI).** A major nonconformity is the absence or total breakdown of a required system element, or a situation that would on the available evidence raise significant doubt about conformity. A minor nonconformity is a single lapse against a requirement. The two tier model maps onto the three tier model: ISO "major" sits roughly where GMP "major plus critical" sit, and ISO "minor" matches GMP "minor."

### Internal company procedures

Whatever the external frameworks say, your own audit SOP defines how your organization grades and what each grade triggers. The cardinal rule: **your internal definitions must be consistent with, and no looser than, the regulatory definitions for the audit type.** An inspector who finds your SOP grading a data falsification as "minor" has just found a quality system finding of its own.

---

## The three categories, defined for working use

Here are the categories restated in the way you actually apply them in the room, with the test you run in your head.

### Critical

**Test:** Could this directly harm a patient or trial subject, or does it involve falsification, fraud, or fabrication of data or product?

Critical findings are about consequence, not volume. A single instance is enough. The two doors into "critical" are:

1. **Direct patient/subject risk.** A sterility assurance breach on a parenteral product. Release of a batch that failed a specification without a justified investigation. A computerized system that controls a critical process parameter with no access control, so anyone can change the setpoint. A clinical site dosing subjects against the protocol's safety stopping rules.
2. **Data integrity failure of the falsification class.** Backdated records. A shared admin login used to delete audit trail entries. Recording results before the test was run. An analyst aborting failing injections and reporting only the passing ones. These are critical regardless of whether a single bad batch can be traced, because they destroy trust in the entire record.

### Major

**Test:** Does this represent a systemic failure of a required process, or a departure that could produce product not meeting its registered requirements, even if no immediate patient harm is shown?

Major is the workhorse category. It captures:

- A required process that exists on paper but is not followed in practice (the system has broken down).
- A deviation from the marketing authorization, validated process, or approved method that is not yet shown to harm a patient.
- A failure of release controls (a batch released without all required testing complete).
- **Aggregation:** a cluster of related minor findings that, together, show the underlying process is not in control.

The aggregation rule is the most underused tool in finding classification. Five separate "training record not signed" minors across five departments is not five minors; it is one major finding that the training system is not functioning.

### Minor

**Test:** Is this a genuine, evidenced departure from a requirement that is isolated, low risk, and does not indicate a broken system?

Minor findings are real nonconformities, not nitpicks. A single SOP that references a superseded form number. One logbook entry missing a second-person verification where the rest of the book is complete. A calibration sticker that is legible but faded. The defining features are **isolated** and **low consequence.** If you find yourself writing the same minor over and over, stop and re-grade it as a major via aggregation.

### Observation / Opportunity for improvement

Below minor, some audit programs record **observations** or **OFIs**: things that are compliant but could be better, or risks that are not yet nonconformities. These do not require a CAPA. The discipline here is to not let an OFI do the work of a finding. If it is a requirement gap, it is a finding. If it is genuinely "you meet the requirement but here is a better way," it is an OFI. Auditees, and regulators, lose respect for an audit program that dresses up advice as findings or hides findings as advice.

---

## Worked grading examples

The same underlying issue can land in different categories depending on consequence and spread. Here is a single theme, audit trail review, graded three ways.

| Scenario | Evidence | Grade | Reasoning |
|---|---|---|---|
| Chromatography data system has audit trail review disabled in the user procedure; reviewers sign batch records without reviewing the audit trail; one batch's audit trail shows a deleted failing run not investigated | The deleted-run audit trail entry; the SOP step that omits audit trail review; the signed record with no trail review | Critical | A failing result was deleted and not investigated. This is data falsification class and bears directly on whether released product met specification. |
| Audit trail review SOP exists and is followed for the laboratory CDS, but three of four reviewed batches show the review was performed after batch disposition rather than before | Three batch records with review timestamps later than the disposition signature | Major | A required release control is not operating in sequence. Systemic across the sample, affects release decisions, no shown patient harm yet. |
| Audit trail review is performed and documented before disposition on all sampled batches, but the review checklist does not record the date range reviewed on two occasions | Two checklists missing the date-range field | Minor | Isolated documentation gap. The control functioned; the record of it was incomplete on two of many instances. |

Now the inverse: how spread changes the grade.

| Finding | Spread | Grade |
|---|---|---|
| Training record not signed by trainee | One record, one person, otherwise complete system | Minor |
| Training record not signed | 14 records across 4 departments, spanning 6 months | Major (aggregated): the training documentation system is not in control |
| Personnel performing aseptic interventions with no documented gowning qualification | Two operators on the sterile line | Critical: direct sterility/patient risk, even at low count |

The lesson: **count and consequence both move the needle.** A trivial-looking gap becomes major by repetition and critical by who or what it touches.

---

## Anatomy of a defensible finding

A grade is only as strong as the finding behind it. A finding has four required parts. Auditors remember them as condition, criteria, cause (or evidence of), and consequence. Some programs add a fifth, the requirement reference, as its own element.

### 1. The requirement (criteria)

The exact rule the auditee failed to meet. Cite it specifically: the regulation clause, the standard section, or the auditee's own SOP number and step. "Good documentation practices" is not a requirement. "21 CFR 211.194(a), which requires complete records of all tests performed" is. For data integrity, anchor to **ALCOA+** attributes (attributable, legible, contemporaneous, original, accurate, plus complete, consistent, enduring, available) and to **21 CFR Part 11** or **EU GMP Annex 11** for electronic records.

Citing the auditee's own SOP is often stronger than citing the regulation, because the auditee cannot argue with their own written standard.

### 2. The condition (what was found)

The factual, observed state. Specific. Identifiable. "Batch record 2026-0417 for product lot ABC, page 12, shows the pH result recorded as 7.2 with no analyst initials or date." Not "records are sometimes incomplete." The condition must be something a second person could go and verify.

### 3. The objective evidence

The artifacts that prove the condition. Record the identifiers, not your impression. Document number and version, batch or lot number, page or line, timestamp, equipment ID, screenshot reference, the name of the person who showed it to you and when. If the evidence is verbal (an operator told you they routinely skip a step), record who said it and corroborate it against a record before you grade it major.

### 4. The consequence / risk (why it matters)

The link between the condition and the protected interest: patient safety, product quality, or data reliability. This is the part that justifies the grade. "Because the analyst initials are missing, the result is not attributable and a reviewer cannot confirm who performed the test or whether they were qualified." The consequence statement is what an auditee, a CAPA owner, and a regulator all read to understand why you graded it the way you did.

### Worked finding (filled in)

> **Finding 2026-019. Grade: Major.**
>
> **Requirement:** EU GMP Annex 11 paragraph 9 and the site's Audit Trail Review SOP-QC-114 v4 step 6.2 require that audit trails for GMP-relevant data be reviewed prior to batch disposition.
>
> **Condition:** Across the four finished-product batch records sampled (lots A231, A234, A239, A241), the laboratory CDS audit trail review was documented as performed on a date later than the disposition decision in three of the four records (A231, A239, A241).
>
> **Objective evidence:** Disposition signatures dated 2026-03-02, 2026-03-09 and 2026-03-15 respectively; corresponding audit trail review checklists (forms FRM-114-01) dated 2026-03-04, 2026-03-11 and 2026-03-18; confirmed on screen in the CDS audit trail by QC reviewer at the audit and recorded in audit note AN-07.
>
> **Consequence / risk:** A required release control is being performed after the release decision it is meant to inform. Disposition decisions for three of four sampled lots were made without the audit trail review that could surface unreported reprocessing, deletions, or aborted runs. The control is documented but not operating in sequence, indicating the release-control process is not functioning as designed.

That finding is hard to argue with because every word points at a verifiable artifact, and the grade follows directly from the consequence statement. The auditee can fix it; they cannot wave it away.

---

## How to grade, step by step

When you see something during the audit, run this sequence rather than jumping straight to a label.

1. **Confirm it is a real nonconformity.** Is there an actual requirement, and is it actually not met? If you cannot name the requirement, you do not yet have a finding; you have a question. Ask it.
2. **Gather and pin the objective evidence.** Get the identifiers before you leave the room or the screen. Evidence you cannot relocate later is evidence you will lose in the closing meeting.
3. **Establish spread.** Is this one instance or a pattern? Pull a few more samples on the spot. The difference between minor and major usually lives here, and you can only assess it while you still have access.
4. **Score severity (consequence).** Map the consequence to the protected interest. Direct patient/subject risk or falsification points to critical. Marketing-authorization deviation or systemic process failure points to major. Isolated low-risk lapse points to minor. Use the ICH Q9 severity lens to keep this consistent.
5. **Apply the aggregation test.** If you have several related minors, ask whether together they show a broken system. If yes, write the major and reference the constituent observations.
6. **Apply your SOP's decision rules.** Your program may have a grading matrix or scoring table. Use it, but treat it as a floor, not a ceiling: a matrix should never downgrade a falsification below critical.
7. **Draft the finding with all four parts.** Requirement, condition, evidence, consequence. The grade should be obvious from the consequence sentence alone.
8. **Sanity-check against challenge.** Read it as the auditee would. Where would they push? If the weak point is the evidence, get more before you finalize. If the weak point is the grade, make sure the consequence statement carries it.

---

## Acceptance criteria: what a good finding and a good grade look like

Use this as a checklist before a finding leaves your report.

- The **requirement is cited specifically** (clause, section, or SOP step and version), not by a vague principle.
- The **condition is verifiable** by a second person from the identifiers given.
- The **evidence is recorded as artifacts**, not impressions, with enough identifiers to relocate it.
- The **consequence ties to a protected interest** (patient/subject safety, product quality, or data reliability) and the **grade follows from that consequence.**
- The **grade matches the definitions** in both the applicable framework and your own SOP, with no looser-than-regulation grading.
- **Spread was assessed**, and aggregation was considered for repeated minors.
- The finding is **factual and neutral in tone**, with no speculation about intent beyond what evidence supports, and no proposed solution embedded (the auditee owns the corrective action).
- **Two competent auditors reading the same evidence would land on the same grade.** That reproducibility is the real test of a mature grading system.

---

## Roles and responsibilities

| Role | Responsibility in finding classification |
|---|---|
| Lead auditor | Owns the final grade. Ensures each finding has all four parts, applies the grading definitions consistently, and resolves disputes among the audit team. Presents critical and major findings at the closing meeting. |
| Audit team member / SME | Identifies the technical nonconformity, supplies the subject-matter consequence (why this matters for sterility, for the method, for the system), helps establish spread and severity. |
| Auditee / process owner | Confirms or corrects the factual condition during the audit (not the grade). Owns root cause analysis and corrective action after the report. Should never be the one deciding the grade of a finding against their own area. |
| Quality assurance / audit program owner | Maintains the grading definitions and SOP, ensures consistency across auditors and audits over time, and reviews critical findings before they trigger escalation. |
| Senior / receiving management | Receives critical-finding escalation within the SOP-defined timeline, makes business decisions the grade triggers (hold shipment, disqualify supplier, notify a regulator where required). |
| Qualified Person (EU) / disposition authority | Consumes the grade as a release input. A critical or unresolved major finding on a batch's data or process is a release blocker. |

The separation that matters most: **the auditor grades, the auditee fixes.** Letting the auditee negotiate the grade down to ease their own remediation burden is how grading systems rot.

---

## Common mistakes and real inspection-finding patterns

These are the failure modes that show up in audit-of-the-audit reviews and in regulatory critiques of company audit programs.

**Grade inflation and grade deflation.** Inflation makes every finding a major to look thorough; it exhausts the auditee and devalues the genuine majors. Deflation, the more dangerous one, downgrades real problems to keep relationships smooth or to avoid triggering escalation. Regulators have cited firms whose internal audits "failed to classify deficiencies commensurate with their risk," meaning the company saw the problem and graded it away.

**No objective evidence behind the grade.** A finding that says "concerns regarding data integrity" with no record, no timestamp, no specific instance, cannot be acted on and cannot survive a challenge. The fix is discipline at the point of observation: pin the artifact before you write the conclusion.

**Citing a principle instead of a requirement.** "Violates ALCOA" is a conclusion, not a citation. Name the attribute and the underlying regulation (Part 11, Annex 11, the predicate rule, or the SOP). A finding that cannot point to a breached requirement is an opinion.

**Missing the aggregation.** Listing twelve isolated minors and never stepping back to see that they are one systemic major. Inspectors do exactly this synthesis, and a firm whose own audits missed the pattern looks like it was not really looking.

**Embedding the solution in the finding.** Writing "should retrain staff and revise SOP" inside the finding. This presupposes the root cause, lets the auditee skip a real investigation, and blurs the line between the auditor (who states the problem) and the auditee (who owns the fix). State the condition and consequence; let CAPA find the cause.

**Speculating about intent.** Writing "the analyst deliberately falsified" when the evidence shows only that a result is not attributable. Grade what the evidence supports. A data integrity finding can be critical on the facts (a deleted failing run) without you having to prove motive. Overreaching on intent is the fastest way to get a finding thrown out.

**Inconsistent grading across auditors.** The same gap graded major by one auditor and minor by another, because the program has no calibration. This is a quality-system finding waiting to be made against the audit program itself. Calibration sessions, where auditors grade the same scenarios and reconcile, are the countermeasure.

**Letting the auditee write or soften the finding.** Findings negotiated for tone until the consequence statement is gone. The audit record should be the auditor's, factual and unedited as to substance.

**Regulatory pattern (GMP):** common deficiency themes published by inspectorates repeatedly include inadequate investigation and classification of deviations and out-of-specification results, weak data integrity controls (shared logins, disabled or unreviewed audit trails), and quality systems that detected problems but did not grade or escalate them properly. The through-line is not that firms missed problems, but that they misclassified them.

---

## Linking classification to what happens next

The grade is the handoff to the rest of the quality system, and the connection points should be explicit in your program.

- **Critical** typically triggers immediate notification to senior management and QA, a possible product or batch hold, a formal CAPA with root cause analysis, and in supplier audits a possible hold on the supplier or a for-cause re-audit. In regulated inspections it can lead to refusal of certification or regulatory action.
- **Major** triggers a CAPA with documented root cause and effectiveness check, with a defined response timeline (commonly tighter than for minors).
- **Minor** triggers correction and, where useful, a lightweight corrective action, often grouped and tracked to closure without a full investigation.

Every grade should map to a response commitment with a due date and an owner. A finding with no owner and no date is not closed-loop, and an audit program that does not drive its findings to closure is itself a finding. The mechanics of that closure (root cause, corrective and preventive action, effectiveness verification) sit in the CAPA process, and the grade you assign sets how rigorous that process has to be.

---

## Interview-ready: questions you will be asked and how to answer

**"Define critical, major and minor findings."**
Anchor each to its protected interest. Critical: a deficiency that has caused or risks causing product harmful to the patient (or subject), including data falsification and fraud. Major: a non-critical deficiency that produces or could produce product not meeting its marketing authorization, or a systemic GMP failure, or a failure of release controls, including an aggregation of related minors. Minor: a real departure from requirements that is isolated and low risk. Mention that the PIC/S and EU GMP definitions are the source, and that GCP uses the same structure anchored to subject safety and data integrity.

**"A single instance of a backdated record. Critical or minor? Why?"**
Critical. It is data falsification class, which the definition places in critical regardless of count, because it destroys confidence in the record set, not just the one entry. Do not let "it was only one record" pull you toward minor.

**"Fourteen unsigned training records across four departments. How do you grade it?"**
Major, by aggregation. Individually each is a minor documentation gap, but the spread shows the training documentation system is not in control. State that you would also assess whether any affected person performed GMP work untrained, which could escalate it further.

**"How do you keep grading consistent between auditors?"**
Tight written definitions in the SOP that do not go looser than the regulatory definitions, a grading lens based on severity and spread (ICH Q9 vocabulary), calibration sessions where auditors grade common scenarios and reconcile, and lead-auditor review of all critical and major findings before issue. The acceptance test is that two competent auditors reach the same grade on the same evidence.

**"What makes a finding defensible?"**
Four parts: a specifically cited requirement, a verifiable condition, recorded objective evidence (artifacts with identifiers), and a consequence tied to patient safety, product quality, or data reliability, from which the grade follows. If any of the four is missing, the auditee can challenge it.

**"An auditee disputes a major and wants it downgraded. What do you do?"**
Separate the facts from the grade. If they have evidence the condition is wrong, correct the condition. If the condition stands, the grade follows from the definition and the consequence, and that is not negotiable for convenience. Document the discussion. Never downgrade to ease their remediation or preserve the relationship; that is exactly the deflation pattern regulators cite.

**"Where in the regulations are these categories defined?"**
PIC/S guidance, in particular the inspection report format and shared deficiency classification, mirrored by EU GMP inspection procedures. ICH Q9(R1) supplies the risk vocabulary for severity. For computerized systems, GAMP 5 Second Edition. For clinical, ICH E6 with the EMA/national GCP inspection grading. For management systems and labs, ISO 19011 and ISO/IEC 17025 with major/minor nonconformity terms. No single global rule defines them, but the three tier model is consistent across all of them.

**"How does classification connect to CAPA?"**
The grade sets the rigor and timeline of the response. Critical demands escalation and a full root cause investigation, often with product impact assessment. Major demands a documented root cause and effectiveness check. Minor can be a correction or a grouped lightweight action. Every grade maps to an owner and a due date so the loop closes.

---

## Practical tips

- **Pin evidence before you write the conclusion.** The hardest finding to defend is the one whose evidence you could not relocate. Identifiers first, prose second.
- **Pull one more sample.** The minor/major line almost always turns on spread, and the only place to assess spread is in the room with access. One extra sample often converts an opinion into an aggregated major.
- **Write the consequence sentence first.** If you can state the consequence in one clean line, the grade names itself. If you cannot, you do not yet understand the finding well enough to grade it.
- **Cite the auditee's own SOP when you can.** It is the requirement they cannot argue with.
- **Keep intent out of it unless evidence proves it.** Grade the facts. Critical does not require proving motive.
- **Calibrate the team periodically.** Grade the same five scenarios as a group and reconcile the differences. Drift between auditors is invisible until you test for it.
- **Never embed the fix.** State problem and consequence; leave cause and remedy to the auditee's investigation.

---

## Related reading

- [Internal audit program](/articles/internal-audit-program)
- [Conducting a supplier audit](/articles/conducting-a-supplier-audit)
- [Quality event classification and triage](/articles/quality-event-classification-triage)
- [Deviation management](/articles/deviation-management)
- [What is a CAPA](/articles/what-is-a-capa)
- [CAPA effectiveness verification](/articles/capa-effectiveness-verification)
- [Root cause analysis techniques](/articles/root-cause-analysis-techniques)
- [Quality risk management](/articles/quality-risk-management)
- [ALCOA+ in detail](/articles/alcoa-plus-deep-dive)
- [Audit trail design and review](/articles/audit-trail-design-and-review)
- [FDA 483 response strategy](/articles/fda-483-response-strategy)
- [GCP audits and inspections](/articles/gcp-audits-and-inspections)
