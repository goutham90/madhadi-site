---
title: "QMS Self-Audit: Evaluating Your Pharmaceutical Quality Management System"
description: "A complete QMS self-audit framework covering document control, deviation and CAPA management, change control, training, supplier qualification, internal audits, and quality metrics. Structured around ICH Q10 and FDA/EMA expectations, with worked examples, roles, and interview questions."
pubDate: 2026-03-24
tags: ["QMS", "audit", "self-audit", "CAPA", "deviation", "document-control", "ICH-Q10"]
tier: "Intermediate"
pillar: "quality-assurance"
---

A quality management system audit isn't just a pre-inspection exercise. It's the diagnostic tool for understanding whether your quality system is actually managing quality, or just producing documentation that looks like it does. The difference matters enormously when your system is under pressure: when batches are failing, when an out-of-specification result won't resolve, when an inspector is in the building.

This checklist covers the core elements of a pharmaceutical or life-sciences QMS aligned with ICH Q10 and FDA/EMA expectations. The same structure applies across small-molecule drug product, a biologic, a cell or gene therapy, and a drug-device combination product. The regulation numbers shift between a drug GMP citation and the device-side citation that a combination product also has to satisfy, but the underlying control (a working deviation system, a CAPA loop that closes, document control people trust) is the same in every case. Work through each section methodically. The questions are designed to probe whether the system works, not just whether documentation exists. A useful mental model: an inspector reads your records to find what your system actually does, not what your procedures say it should do. Your self-audit should read the same way.

Before you start, decide how you will run it. A self-audit done as a paperwork tick-box exercise produces a clean report and a false sense of security. A self-audit done by someone willing to pull records, follow threads, and ask people what really happens produces findings that sting a little. The second kind is the one worth doing. Schedule it when you have time to chase the uncomfortable answers, give yourself permission to write down what you find, and treat your own findings with the same seriousness you would treat an external observation.

---

## Why a self-audit exists at all: the regulatory basis

Self-inspection is not optional, and it is not a courtesy you extend to yourself. It is a named, written requirement.

EU GMP Volume 4, Chapter 9 (Self Inspection) frames self-inspection as a way to check how well GMP principles are being put into practice and to drive the corrective measures that follow from what you find.

EU GMP Chapter 9 requires self-inspections, requires that they be recorded, and requires that observations lead to corrective measures that are themselves followed up. ICH Q10 (Pharmaceutical Quality System) folds internal audit into its process performance and product quality monitoring system and into management review, so a self-audit feeds the governance loop above it. US drug GMP under 21 CFR Part 211 does not use the words "internal audit," but 21 CFR 211.22 makes the quality unit responsible for the authority to review and approve all quality-related procedures and to ensure they are followed, which only works if someone checks. If you also make a combination product, the device-side quality system that Part 4 pulls in (21 CFR Part 820, now aligned to ISO 13485 under FDA's Quality Management System Regulation effective 2 February 2026) names internal audits as an explicit requirement, so the obligation is written down directly rather than implied.

So the self-audit answers three questions a regulator will eventually ask you directly:

1. Do you look at your own system honestly?
2. When you find a problem, do you fix the cause, not just the instance?
3. Can you prove both of the above with records?

If your self-audit can answer those, an external inspection becomes a confirmation rather than a discovery.

---

## How to use this checklist

A few ground rules make the difference between a useful self-audit and a wasted week.

**Audit by sample, not by survey.** You cannot review every record. Pull a defined sample, follow it end to end, and let what you find drive where you dig deeper. If the first five deviations you pull all show late reporting, pull twenty more before you conclude anything. One bad record is an event. A pattern across a sample is a system finding.

**Trace, don't tour.** The strongest audit technique is tracing a single event through every system it touches. Take one significant deviation. Follow it into the investigation, into the impact assessment, into the CAPA, into the change control if a process was altered, into the training records if retraining was the action, into the next product quality review where the trend should appear. A weakness anywhere in that chain is invisible if you only look at each system in isolation.

**Separate the isolated gap from the systemic one.** A single SOP missing a review date is a typo. The document review process failing to flag forty overdue SOPs is a system failure. Always ask whether the thing you found is one occurrence or evidence of a broken control.

**Write findings against the requirement, not your opinion.** Each finding should name the regulation, standard, or internal procedure that the observed practice does not meet. This keeps the self-audit defensible and gives the people who have to fix it a clear target.

A simple severity scheme keeps prioritization honest. Critical means product of uncertain quality may have reached a patient, or a control that protects patients is absent or ineffective. Major means a required system exists but does not work reliably enough to be trusted. Minor means an isolated lapse with no quality impact. Tie every finding to one of these before you decide what to fix first. The grading vocabulary and how to defend it is treated in more depth in [Audit Finding Classification](/articles/audit-finding-classification).

### How to write a finding so it survives

A finding that reads "document control is weak" is useless. It cannot be argued, prioritized, or closed. Write each finding in four parts:

| Part | What it states | Example |
|---|---|---|
| Requirement | The rule the practice fails to meet | "EU GMP Chapter 4 sets the expectation that each entry is recorded as the action happens." |
| Observation | The specific, evidenced fact | "In 6 of 10 batch records sampled (BR-2291, BR-2294, ...), the in-process check entry was signed in a single session at end of shift, not at the recorded times." |
| Impact / severity | Why it matters and the grade | "Contemporaneous recording is not assured; data integrity of in-process checks is questionable. Major." |
| Reference | Where to fix it | "SOP-QA-014 §5.3; reinforced via document control and training." |

If you can fill all four columns, the finding is real. If you cannot name the requirement, you have an observation, not a finding, and you should either find the requirement or downgrade it to an improvement suggestion.

### Roles in a self-audit

| Role | Responsibility |
|---|---|
| Lead auditor (QA, independent of audited area) | Plans scope and sample, runs the audit, writes findings, grades severity |
| Subject-matter escort (process owner) | Pulls records, explains how the process really runs, answers trace questions |
| Area management | Owns the response, agrees corrective actions and dates, provides resources |
| Quality unit / Head of Quality | Reviews findings, approves CAPA plan, escalates systemic findings to management review |
| Senior management | Receives the summary through management review, owns the resourcing decisions |

The single non-negotiable: the auditor must be independent of the area being audited. A supervisor auditing their own line is not a self-audit, it is self-assessment, and inspectors read the two very differently.

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

The requirement to control records and define who may issue and change them sits in 21 CFR 211.68, 211.180, 211.186, and 211.194, and in EU GMP Chapter 4 (Documentation). EU GMP Chapter 4 is explicit that documents are designed, prepared, reviewed, and distributed with care, and that an entry goes onto the record as the action it captures takes place. If your forms allow blanks to be filled in later from memory, you are not meeting that contemporaneous-record expectation. The same principle underpins the data integrity expectation that records be original and contemporaneous, which is treated in more depth in [Good Documentation Practices](/articles/good-documentation-practices) and [ALCOA+ in detail](/articles/alcoa-plus-deep-dive).

### Acceptance criteria: what good looks like

You can call document control healthy when all of the following hold for a representative sample:

- Every effective document carries a unique ID, version, effective date, and approval signatures, and the copy in use matches the controlled master.
- No obsolete version is physically present at a point of use. A walk of the floor finds only current documents.
- Overdue-review count is small, bounded, and trending down, and each overdue document has an owner and a target date, not just a flag.
- Training on the current version is in place before that version becomes effective, not weeks after.

### Worked example

A site issues a controlled batch record but lets operators photocopy a spare blank when the line is busy. The photocopy has no issuance log, no reconciliation, and no way to prove it is the current version. That single shortcut breaks document control, record reconciliation, and contemporaneous recording at once. The self-audit catches it not by reading the SOP (which forbids it) but by reconciling issued blank records against returned completed records for one product over one month: if 42 were issued and 44 came back, two came from somewhere uncontrolled. For the mechanics of building a system that prevents this, see [Document Control Fundamentals](/articles/document-control-fundamentals) and [Quality Manual and Document Hierarchy](/articles/quality-manual-document-hierarchy).

### Common mistakes and inspection patterns

- Obsolete SOPs and forms left in binders at the line while the controlled master is current. The most common documentation finding, and entirely avoidable with a periodic floor walk.
- "Effective immediately" documents with no time built in for training, so people are working to a version they were never trained on.
- Review dates that slip with no consequence, so the overdue-review list grows until it is meaningless.
- Uncontrolled spreadsheets and local printouts used as the real working document while the formal SOP gathers dust.

### Interview angle

> "An inspector finds a superseded SOP at the workstation. The current version is in the document system. Is that a finding?"

Yes, and explain why precisely. The risk is that an operator could follow the wrong instructions. The finding is against document control's obligation to remove obsolete versions from use (EU GMP Chapter 4; the same expectation is implicit in 21 CFR 211.100 and 211.186). Then go one level up: the real question is whether this is isolated or systemic. One stray copy is minor; if a floor walk finds obsolete copies at five stations, the withdrawal process is broken and the grade rises to major.

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

**Root cause quality check:** Pull five recent deviation closure records. For each, ask whether the proposed corrective action could have prevented the event described as the root cause. If the root cause is "analyst transcription error" and the corrective action is "retrain analyst," would retraining actually prevent recurrence, or is there a process design issue (confusing forms, unclear instructions, a manual transcription step that should have been eliminated) that made the error likely? Weak root causes lead to recurrences. A genuinely useful technique here is asking why several times in sequence until you reach a cause you can act on, but the discipline matters more than the count: stop when you reach a cause that, if fixed, removes the failure mode. The standard toolkit (the five-whys, fishbone, fault tree) is covered in [Root Cause Analysis Techniques](/articles/root-cause-analysis-techniques), and the specific trap of stamping "human error" on everything is dissected in [Human Error in Deviations](/articles/human-error-in-deviations).

### Deviation trending

- [ ] Is there a periodic review of deviation frequency, type, and location?
- [ ] Are repeat deviations of the same type identified and escalated?
- [ ] Are trending reviews documented and reviewed at quality review meetings?
- [ ] Is the deviation trend data used to identify systemic issues, or does it sit in a report that nobody acts on?

### What the regulations expect here

The requirement to investigate any unexplained discrepancy or batch failure, and to extend the investigation to other batches and products that may be associated, comes directly from 21 CFR 211.192. EU GMP Chapter 1 establishes that deviations are documented and investigated, and the broader principle of quality risk management governing how deeply you investigate is set out in ICH Q9 (Quality Risk Management). The triage step (deciding fast and consistently how serious an event is) is its own discipline; see [Quality Event Classification and Triage](/articles/quality-event-classification-triage). For the full mechanics, see [Deviation Management](/articles/deviation-management) and, for the laboratory-specific path, [OOS Investigation Process](/articles/oos-investigation-process).

### Worked example: a deviation traced end to end

A filling line stops because a fill-weight check fails low on three consecutive vials. Here is what a healthy chain looks like, and where the self-audit pushes:

| Stage | What you expect to find | Where it usually breaks |
|---|---|---|
| Detection | Deviation opened same shift, event time recorded | Opened two days later "once we understood it" |
| Classification | Major (product quality affected), per defined criteria | Auto-classified minor to avoid the major workflow |
| Impact assessment | Affected vials quarantined, adjacent batches assessed | Only the three vials looked at, not the rest of the lot |
| Root cause | Worn pump seal causing intermittent underfill | "Operator error" with no mechanism |
| CAPA | Seal replaced (correction) plus preventive PM interval shortened across all filling lines (scope) | Correction only, no preventive action, no scope check |
| Effectiveness check | Fill-weight trend reviewed at 90 days, no recurrence | No effectiveness check planned |
| Trend / PQR | Event appears in the product quality review fill-weight trend | Never reaches the annual review |

The self-audit value is in walking that whole row, not in confirming the deviation form was filled out.

### Acceptance criteria

- Deviations are opened promptly (a defined target, commonly within 1 business day of awareness) and the event date is recorded distinctly from the open date.
- Investigations name a root cause that explains the mechanism, and the corrective action plausibly removes that mechanism.
- Product-impact deviations carry a documented batch impact assessment, with affected material controlled until disposition.
- Repeat events of the same type are visibly escalated, not re-investigated from scratch each time.

### Common mistakes and inspection patterns

- A deviation rate so low it is implausible for the operation's complexity. Inspectors read near-zero as underreporting, not excellence.
- Investigations that describe the event in detail and then declare "no impact" with no assessment supporting it.
- "Retrain the operator" as the universal corrective action, which treats a recurring system weakness as repeated individual failure.
- Late closure with extension after extension, so the investigation backlog hides the real state of the process.

### Interview angle

> "Your deviation count dropped 40% this year. Good news or bad?"

Refuse the binary. It is good only if you can show the decline tracks a real process improvement (a validated change, a redesigned step) and detection capability is unchanged. It is alarming if it coincides with a reorganization, headcount cuts, or anything that could have chilled reporting. Say you would check the near-miss rate, the deviation age distribution, and whether any event types simply stopped appearing, then read the metric alongside what changed around it.

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

### Correction vs corrective vs preventive: the distinction that trips people up

Many weak CAPAs come from confusing three different things. Keep them separate.

| Term | Question it answers | Example for a mislabeled vial |
|---|---|---|
| Correction | What do I do about this specific instance right now? | Relabel or destroy the affected vials |
| Corrective action | What removes the cause so this exact problem stops recurring? | Add a barcode-verified label reconciliation step |
| Preventive action | Where else could this cause produce a problem, and how do I block it there? | Apply the same reconciliation step on every labeling line |

A CAPA that contains only a correction is not a CAPA, it is a fix. Inspectors and auditors look first for whether corrective and preventive actions exist at all, then whether they map to the stated root cause. The mechanics of proving the loop closed are covered in [CAPA Effectiveness Verification](/articles/capa-effectiveness-verification).

### Worked example: writing a real effectiveness check

Root cause: analysts were able to reprocess chromatographic integration without the action being captured in the audit trail, because audit trail was not enabled at the system level. Corrective action: enable audit trail and lock the configuration on all instruments of that type. A weak effectiveness check says "confirm no recurrence." A real one says:

- Criterion: review 100% of the audit trail configuration on all 14 instruments of this model at 30 days; all must show audit trail enabled and config-locked.
- Criterion: sample 25 chromatographic sequences run after the change; every integration change must have an associated audit trail entry with reason.
- Pass / fail: any instrument unlocked, or any reprocessing without an audit entry, fails the check and reopens the CAPA with a deeper scope.

That is measurable, time-bound, and falsifiable, which is the entire point.

### Acceptance criteria

- Every CAPA states a root cause, a corrective action that maps to it, and a scope assessment that asks "where else."
- Effectiveness checks have a measurable pass/fail criterion and a planned date, and they are actually executed.
- A failed effectiveness check visibly triggers escalation, not a quiet reclose.
- Overdue CAPA and overdue effectiveness-check counts are tracked and reported as metrics.

### What the regulations expect here

ICH Q10 (Pharmaceutical Quality System), section 3.2.2, names CAPA as one of the four core pharmaceutical quality system elements and expects the approach to feed back into better products and processes and a stronger grasp of how they behave. The underlying regulatory hook for corrective action in US drug GMP is 21 CFR 211.192. For combination products that pair a drug or biologic with a delivery device, the device-side quality-system expectations under 21 CFR Part 4 bring CAPA in as its own explicit requirement, which is one reason CAPA gets so much inspection attention. For a ground-up explanation of the concept, see [What Is a CAPA?](/articles/what-is-a-capa).

### Common mistakes and inspection patterns

- Scope assessment skipped, so a fleetwide problem gets a single-instrument fix. One of the most cited CAPA weaknesses.
- Effectiveness checks defined as "no recurrence" with no measurable criterion and no honest way to fail.
- CAPAs left open for years with rolling extensions, which inspectors read as the system being unable to close what it opens.
- Root cause and corrective action that do not connect, so the action could never have prevented the stated cause.

### Interview angle

> "Walk me through how you would judge whether a CAPA is effective."

Name the two failure modes first: the action was never really done (an execution failure) and the action was done but the problem still recurs (a root-cause failure). Then describe a measurable, dated effectiveness check with explicit pass/fail criteria, performed by someone other than the CAPA owner, with a defined consequence if it fails (reopen with broader scope). Close by saying effectiveness is judged against the recurrence the CAPA was meant to prevent, not against whether the task box got ticked.

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

### What the regulations expect here

The expectation that production and process controls are not changed without review and approval sits in 21 CFR 211.100(a). EU GMP Chapter 1 establishes change management as a quality system responsibility, and ICH Q10 section 3.2.3 names change management as a core element. ICH Q12 (Technical and Regulatory Considerations for Pharmaceutical Product Lifecycle Management) adds the established-conditions framework that helps a company decide which changes need prior regulatory approval and which can be managed within the quality system. For changes to computerized systems specifically, where the impact assessment must address validated state and data integrity together, see [Change Control for Validated Systems](/articles/change-control-validated-systems) and [ICH Q12 Lifecycle Management](/articles/ich-q12-lifecycle-management). For the IT-side discipline of versioning and configuration, see [IT Change and Configuration Management for GxP](/articles/it-change-and-configuration-management-gxp).

### Worked example: a "temporary" change that was never closed

An impact assessment table for a real change reads cleanly when each row is forced to a decision:

| Impact dimension | Assessment | Action triggered |
|---|---|---|
| Validated state | New filter changes the validated filtration step | Revalidation of filtration required before routine use |
| Regulatory filing | Filter type is a registered detail | Variation / supplement may be needed; check before implementing |
| Documents | Batch record and SOP reference the old filter | Update both, version-controlled |
| Training | Operators trained on old filter setup | Retrain and record before effective date |
| Risk | Sterility-relevant change | Elevated; QA approval mandatory pre-implementation |

The classic finding is a "temporary deviation-driven change" that ran for nine months because nobody closed the change control or did the revalidation the table demanded. The self-audit finds it by listing all open change controls older than their target date and asking why each is still open.

### Acceptance criteria

- The scope statement is broad enough that staff know an SOP edit, a method tweak, and a server patch all require change control.
- Each change has an impact assessment that forces a yes/no on validated state, filings, documents, training, and risk.
- QA approves before implementation for anything affecting product quality or validated state, and post-implementation verification confirms the change was done as approved.
- No "permanent temporary" changes: open change controls have owners and realistic close dates.

### Common mistakes and inspection patterns

- Generic, pre-ticked impact assessments that say "no impact" by default and were clearly not thought through.
- IT and lab-software changes treated as outside change control ("it's just an update"), which is where data integrity findings cluster.
- Changes implemented before QA approval, with the paperwork backfilled.
- Documentation, training, and validation not updated to match the change, so the records describe a state that no longer exists.

### Interview angle

> "How do you decide whether a change needs prior regulatory approval or can be managed internally?"

Tie it to the framework. Within the quality system you manage changes that do not alter registered details or established conditions; changes that touch a filed parameter, specification, or established condition may require a variation or supplement to the marketing authorization before implementation. Name ICH Q12 and its established-conditions concept as the tool that draws that line, and say that when in doubt you route the change through regulatory affairs to confirm the filing impact before, not after, you act.

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

### What the regulations expect here

The requirement that personnel have the education, training, and experience to perform their functions is in 21 CFR 211.25, and the requirement for training in current good manufacturing practice and in employees' specific functions is reinforced in 211.25(a) and 211.68. EU GMP Chapter 2 (Personnel) sets out the same expectation and adds that training effectiveness should be periodically assessed. The distinction between read-and-sign acknowledgment and demonstrated competence is exactly where many programs fall short. For program design, see [Training Program Design](/articles/training-program-gxp), and for how training intersects with a healthy quality culture, see [Quality Culture and Data Integrity Failures](/articles/quality-culture-di-failures).

### Worked example: read-and-sign vs demonstrated competence

Two records for the same revised aseptic gowning SOP:

| Evidence type | What the record shows | What it proves |
|---|---|---|
| Read-and-sign | Employee signed they read SOP-MFG-031 v4 on the effective date | They acknowledged the document exists |
| Qualification | Gowning qualification with three successful gowning sessions, microbiological glove-print results within limits, assessor sign-off | They can actually perform the task to standard |

For a routine administrative SOP, read-and-sign is proportionate. For a task where doing it wrong harms product or patient (aseptic technique, a critical calculation, a release decision), the program needs the second kind of evidence. A self-audit finding is justified when a critical task is supported only by read-and-sign.

### Acceptance criteria

- A current training matrix maps every GxP role to its required curriculum, and it changes when procedures change.
- No employee performs a GxP task without recorded training on the current version of the relevant procedures.
- Critical tasks carry demonstrated-competence evidence, not just acknowledgment.
- Recurring errors on a task trigger a look at the training and the procedure, not only at the individual.

### Common mistakes and inspection patterns

- Training records lagging document revisions, so people work to a version they were never trained on. This is the most common training finding and the easiest to catch.
- Read-and-sign used as a universal substitute for qualification, even on critical aseptic or analytical tasks.
- New hires allowed onto GxP activities before initial training is complete.
- "Retrained" used as a reflex CAPA, with no check that the training was ever the actual gap.

### Interview angle

> "Is read-and-sign training acceptable?"

Yes for some things, no for others, and say which. Acknowledgment is fine for low-risk procedural awareness. For any task where incorrect performance directly threatens product quality or patient safety, the regulation's intent (21 CFR 211.25, EU GMP Chapter 2) is competence, not awareness, so you need practical demonstration or on-the-job qualification with an assessor. The interviewer is testing whether you treat training as a risk-based control or as a box to tick.

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

### What the regulations expect here

The obligation to test and approve or reject components, containers, and closures, and the conditions for accepting a supplier's certificate of analysis in lieu of full identity-plus-attribute testing, are in 21 CFR 211.80 through 211.84. EU GMP Chapter 7 (Outsourced Activities) sets out the relationship between contract giver and contract acceptor and the requirement for a written quality agreement defining responsibilities. For the operating model, see [Supplier and Vendor Qualification](/articles/supplier-vendor-qualification), and for running the audit itself, [Conducting a Supplier Audit](/articles/conducting-a-supplier-audit) and [CDMO Oversight and Quality Agreements](/articles/cdmo-oversight-quality-agreements).

### Worked example: a risk-tiered qualification model

A defensible tiering scheme makes the qualification effort proportionate to risk:

| Tier | Typical supplier | Qualification activity | Requalification |
|---|---|---|---|
| High | API maker, contract sterile manufacturer, contract lab, validated-system software vendor | On-site or remote audit, quality agreement, change notification clause | Periodic audit on a risk-based interval |
| Medium | Excipient, packaging component, calibration service | Questionnaire, certificate review, sample testing | Periodic questionnaire / performance review |
| Low | Office consumables, non-GxP services | Approved-supplier check only | Monitor by performance |

The self-audit confirms two things: that the tier assigned matches the real risk (a contract sterility lab sitting in the medium tier is itself a finding) and that the activities the tier requires were actually done at the required frequency.

### Acceptance criteria

- The approved vendor list is current, reflects live qualification status, and is the list purchasing actually buys from.
- Risk tiers are assigned with a documented rationale and match the criticality of what the supplier provides.
- High-risk suppliers have audit or equivalent evidence on file, a quality agreement, and a change-notification obligation.
- Supplier performance problems feed back into qualification status, so a failing supplier loses standing.

### Common mistakes and inspection patterns

- Software and cloud vendors omitted from supplier qualification entirely, so a vendor-side change to audit trail behavior arrives with no notification.
- An approved vendor list that does not match what is actually purchased, including GxP buys from unqualified sources "just this once."
- Quality agreements that exist on paper but do not define change notification, deviation reporting, or audit rights.
- Requalification dates lapsing with critical suppliers still treated as current.

### Interview angle

> "How do you qualify a SaaS vendor you can never inspect the data center of?"

Acknowledge you cannot apply a classic on-site supplier audit, then describe the substitute evidence: a quality/technical agreement defining responsibilities and change notification, review of the vendor's own audits and certifications, a clear split of who validates what (the infrastructure qualification is theirs, the configured GxP use is yours), and ongoing monitoring through service reports and incident notifications. Reference the contract-giver / contract-acceptor model in EU GMP Chapter 7 as the framework that still applies even when the supplier is in the cloud.

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

### What the regulations expect here

Self-inspection is required by EU GMP Chapter 9 (Self Inspection), which expects audits to be conducted to monitor implementation of GMP and to propose corrective measures, with records kept. ICH Q10 section 3.2.4 includes internal audit within the process performance and product quality monitoring and management review elements. US drug GMP does not name "internal audit" by that title, but the obligation to evaluate quality standards is embedded throughout 21 CFR 211 and in the quality unit responsibilities of 211.22. For depth, see [Internal Audit Program](/articles/internal-audit-program) and, for the inspection-facing side, [FDA Inspection Readiness](/articles/fda-inspection-readiness) and [Mock Inspection Program](/articles/mock-inspection-program).

### Acceptance criteria

- The schedule covers every GxP area on a frequency justified by risk, and it is actually executed, not just published.
- Auditors are independent of what they audit and trained in both audit technique and the relevant GxP area.
- Findings are graded, reported within a defined timeline, and tracked to closure with effectiveness checks on the significant ones.
- Repeat findings across cycles are recognized as a sign that earlier corrective actions failed, and escalated.

### Common mistakes and inspection patterns

- A published schedule that the program quietly falls behind, so half the planned audits never happen.
- Auditors auditing their own functional area, undermining independence.
- Audits that read SOPs and tick compliance without examining records or watching the work.
- The same finding recurring cycle after cycle, which inspectors read as a CAPA system that does not actually fix things.

### Interview angle

> "What is the difference between an internal audit and a self-inspection?"

Practically, the terms overlap, and EU GMP Chapter 9 uses self-inspection for the formal scheduled program. The useful distinction to state: self-inspection is the named regulatory obligation to examine your own GMP compliance and record it; internal audit is the operational program through which you deliver that obligation, often broader and risk-scheduled. The point an interviewer wants is that you understand it is required, must be independent, must be recorded, and must drive corrective action, not that you can split hairs on the vocabulary.

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

The point of the table is that no single number is good or bad in isolation. A rising deviation rate after you improve detection is a healthy sign. A falling one after you discourage reporting is a disaster. Always read the metric alongside what changed around it. For how to build and target these measures, see [Quality Metrics and KPIs](/articles/quality-metrics-and-kpis).

### Management review

- [ ] Is there a documented periodic management review, at minimum annual?
- [ ] Does the review cover all key quality metrics?
- [ ] Does the review identify areas requiring improvement and assign ownership?
- [ ] Are action items from management review tracked to completion?
- [ ] Does senior management actively participate, or is it a QA-run meeting with management present but disengaged?

### What the regulations expect here

ICH Q10 sections 3.4 and 4 set out the expectation for management responsibilities and management review of the pharmaceutical quality system, including review of the suitability and effectiveness of the system and the actions arising from it. EU GMP Chapter 1 establishes that senior management has ultimate responsibility for the quality system. The participation question is not cosmetic: regulators increasingly probe whether senior leadership genuinely owns quality outcomes or treats them as a delegated QA function. For the full governance mechanism, see [Management Review under ICH Q10](/articles/management-review-q10).

### Worked example: a metric with a response, and one without

| Metric | Reading | Documented management response | Inspector's read |
|---|---|---|---|
| CAPA on-time closure | Slipped from 85% to 61% over three quarters | "Noted. Continue to monitor." | Trend ignored; governance failure |
| CAPA on-time closure | Slipped from 85% to 61% over three quarters | Root cause (investigator capacity) identified, two analysts added, target 80% by next quarter, owner named | System is being managed |

The metric value is identical. The difference between a finding and a clean record is entirely in whether the review produced an owned, dated decision.

### Acceptance criteria

- A defined metric set is reported on a regular cadence with trends, not just single-period snapshots.
- Every adverse trend has a documented response: an owner, an action, a date, or an explicit risk-accepted decision.
- Management review minutes show senior leadership asking questions and making resource decisions, not just attending.
- Action items from prior reviews are tracked to closure and revisited.

### Common mistakes and inspection patterns

- Metrics presented as a snapshot with no trend, so a slow degradation is invisible.
- Adverse trends reviewed and filed with no action, which inspectors cite as failure of management responsibility.
- Management review attended by leadership in name only, with QA doing all the talking and deciding.
- A metric set chosen because the data was easy to pull, not because it reflects real quality risk.

### Interview angle

> "An inspector sees a quality metric trending the wrong way for a year. What do they look for next?"

The response. The trend itself is not automatically a finding; an honest dashboard showing a real problem is healthy. What inspectors cite is the absence of action: a clear adverse trend with no owned decision in management review minutes. Say you would expect to show them the minutes where the trend was discussed, the root cause considered, and the resource or process decision made, with an owner and a date. That demonstrates the QMS is managed, which is exactly what ICH Q10 management review is for.

---

## Section 9: Product Quality Reviews

Annual product reviews, also called product quality reviews, are the formal annual assessment of product quality trends. They are a regulatory requirement and a genuine quality tool when done well.

- [ ] Is there a product review for every commercial product on a defined annual schedule?
- [ ] Does the review cover batch yield and rejection trends, specification failures, OOS events, complaints, stability data, process capability indices where applicable, CAPA status, and regulatory commitments?
- [ ] Are trends analyzed, not just data presented?
- [ ] Are improvement opportunities identified and actioned?
- [ ] Is the review reviewed and approved by QA?

**The signal in the data:** A product where yield has been declining for three years, the OOS rate sits stubbornly high, and the same batch failure root cause keeps recurring is a process that needs intervention. If your product review trend data consistently shows these signals and there are no corresponding improvement actions, that is a quality governance failure, and it is a finding an inspector can read straight off your own report.

### What the regulations expect here

The US requirement is 21 CFR 211.180(e), which mandates an annual review of records for each drug product to determine the need for changes in specifications or manufacturing or control procedures. EU GMP Chapter 1 section 1.10 sets out the product quality review in detail, including the specific elements to be examined and the requirement to assess whether corrective and preventive action or revalidation is needed. For statistical interpretation of capability and control data within these reviews, see [Statistics in Quality: Cpk and Control Charts](/articles/statistics-in-quality-cpk-control-charts), and for the full review methodology, [Annual Product Review and PQR](/articles/annual-product-review-pqr).

### Worked example: reading a PQR trend honestly

| Element | Year 1 | Year 2 | Year 3 | What it signals |
|---|---|---|---|---|
| Batch yield (mean) | 96% | 94% | 91% | Steady decline, process drifting |
| OOS rate | 1.2% | 1.5% | 1.8% | Rising, consistent with the yield drift |
| Top recurring root cause | Pump seal wear | Pump seal wear | Pump seal wear | Corrective action never held |
| Improvement actions logged | none | none | none | Governance gap, the finding writes itself |

A PQR that presents this table and concludes "product quality remains acceptable" is itself the finding. The self-audit checks not whether the PQR exists but whether it drew the obvious conclusion and triggered action.

### Acceptance criteria

- Every commercial product has a PQR on a defined annual schedule, completed and QA-approved.
- The review analyzes trends across the required elements, it does not merely tabulate the year's data.
- Adverse multi-year trends produce documented improvement actions or a justified risk acceptance.
- The PQR conclusion is consistent with the data it presents.

### Common mistakes and inspection patterns

- A PQR that compiles data accurately and then states a generic "quality acceptable" conclusion the data does not support.
- Trends analyzed within a single year only, so a multi-year decline never gets seen.
- PQRs perpetually overdue, so the annual cadence required by 21 CFR 211.180(e) is not met.
- Recurring root causes visible across consecutive reviews with no escalating action.

### Interview angle

> "What is the difference between a PQR and just a year-end data summary?"

Analysis versus compilation. A data summary tabulates the year's batches, OOS events, and complaints. A PQR examines trends across those elements, compares against prior years, and reaches a documented judgment about whether specifications, the process, or controls need to change, and whether revalidation or CAPA is warranted (the explicit ask of EU GMP Chapter 1 §1.10 and 21 CFR 211.180(e)). The signal an interviewer wants is that you treat the PQR as a decision document, not a reporting chore.

---

## Scoring and next steps

As you work through this checklist, prioritize findings by three lenses.

**What affects patient safety or product quality.** Any gap meaning product of uncertain quality may have been released, or that could lead to a safety issue, is the highest priority regardless of other considerations. These findings get fixed first and may require notification, recall assessment, or both.

**What a regulator would cite.** Based on published warning letter and inspection-deficiency patterns over recent years, the most frequently cited QMS weaknesses cluster around three areas: investigation and CAPA adequacy (investigations that fail to determine root cause, scope, or extent), production and process control records (failure to review discrepancies and document them properly under 21 CFR 211.192), and the quality unit not fully exercising its responsibilities under 211.22. These are durable patterns, not one-year anomalies, which is why they belong in a self-audit. For how these surface in inspections and how to respond, see [FDA Warning Letters: Common Patterns](/articles/fda-warning-letters-patterns) and [Responding to a 483 or Warning Letter](/articles/483-warning-letter-response).

**What is systemic versus isolated.** An isolated minor gap corrected in one procedure is a small finding. The same gap across twenty procedures means the document review process is broken. Always escalate the system finding above the individual one, because fixing twenty symptoms one at a time leaves the cause intact.

Turn the findings into a CAPA plan with owners and dates, feed the systemic findings into management review, and schedule a re-check of the highest-severity items rather than assuming the fix held. A self-audit whose findings disappear into a folder is no better than not running one. The value is entirely in what changes afterward.

### A sample finding log

This is the artifact a self-audit produces. Keep it this concrete:

| ID | Section | Finding (requirement / observation) | Severity | Owner | Due | Status |
|---|---|---|---|---|---|---|
| SA-01 | Doc control | EU GMP Ch.4 contemporaneous recording: 6/10 batch records signed end-of-shift in one session | Major | Mfg lead | +30d | Open, CAPA-117 |
| SA-02 | CAPA | ICH Q10 3.2.2: CAPA-102 has no effectiveness check defined | Major | QA | +14d | Open |
| SA-03 | Training | 211.25: 3/5 sampled staff trained on superseded SOP version | Major | Training | +21d | Open, CAPA-118 |
| SA-04 | Change control | 211.100(a): change CC-2204 open 9 months, revalidation not done | Critical | Eng | +7d | Open, escalated |
| SA-05 | Doc control | Obsolete form at one workstation | Minor | Area lead | +14d | Closed |

Note how the critical item (an unclosed change with revalidation outstanding) carries the shortest due date and an escalation flag. That sequencing is the whole point of grading.

### Interview angle on the program itself

> "How would you run a self-audit on a system you have never seen?"

State a method, not a checklist. Scope it to the highest-risk elements first using ICH Q9 risk thinking. Trace at least one real event end to end across deviation, investigation, CAPA, change control, training, and PQR. Sample rather than survey, and let patterns drive where you dig. Write every finding against a named requirement with evidence and a severity. Separate isolated lapses from broken controls. Then close the loop: CAPA plan with owners and dates, systemic findings into management review, and a re-check on the worst items. That answer shows you understand a self-audit is a method for finding the truth, not a form to complete.

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
- [CAPA Effectiveness Verification](/articles/capa-effectiveness-verification)
- [Internal Audit Program](/articles/internal-audit-program)
- [Audit Finding Classification](/articles/audit-finding-classification)
- [Document Control Fundamentals](/articles/document-control-fundamentals)
- [Training Program Design](/articles/training-program-gxp)
- [Annual Product Review and PQR](/articles/annual-product-review-pqr)
- [Supplier and Vendor Qualification](/articles/supplier-vendor-qualification)
- [Management Review under ICH Q10](/articles/management-review-q10)
- [Quality Metrics and KPIs](/articles/quality-metrics-and-kpis)
- [FDA Warning Letters: Common Patterns](/articles/fda-warning-letters-patterns)
- [GxP Quality Interview Preparation](/articles/gxp-quality-interview-preparation)
