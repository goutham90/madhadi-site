---
title: "FDA Inspection Readiness: Building and Maintaining a State of Control"
description: "What FDA inspection readiness actually means: not a sprint before an announced visit, but maintaining systems that would survive one at any time. Covers inspection types, front room and back room operations, SME preparation, and how data integrity is assessed."
pubDate: 2025-11-10
tags: ["FDA", "inspection", "GxP", "data-integrity", "CGMP"]
tier: "Intermediate"
pillar: "audits-inspection"
---

There is a common misconception in regulated quality about what "inspection readiness" means. Many organizations treat it as a preparation sprint, 60 to 90 days of activity before an anticipated inspection: cleaning up documentation, filling gaps in training records, refreshing SOPs.

This is a category error. A state of control is not something you create in 60 days. It is something you maintain continuously. If your program requires a sprint to reach an acceptable state, your program is not in a state of control, it is in a state of managed non-compliance with periodic cosmetic improvement.

The correct framing: inspection readiness means operating at a level that would survive a thorough inspection on any given day, including an inspection where the investigator arrives with little or no warning and asks for records you did not curate in advance. The principle holds whether the site makes small-molecule drugs, biologics, vaccines, medical devices, combination products, or supports clinical studies. The systems differ; the expectation of demonstrable control does not.

This article walks through how FDA structures its inspections, how companies organize during one, how subject matter experts should be prepared, and the specific techniques investigators use to test data integrity. It is written for three readers at once: someone new to GxP who needs the vocabulary, a working practitioner who runs the front room or sits as an SME, and a quality leader accountable for whether the site stays ready between visits.

---

## The Legal Basis for FDA Inspections

Before the logistics, it helps to understand where FDA's authority comes from, because the scope of an inspection is set by statute, not by what a company is comfortable showing.

The Federal Food, Drug, and Cosmetic Act (FD&C Act) authorizes FDA to inspect facilities that manufacture, process, pack, or hold regulated products. Section 704 of the Act covers the right of entry and inspection. Section 501 defines what makes a drug "adulterated," and importantly, a drug is deemed adulterated if it is made in a facility that does not conform to current good manufacturing practice, even if the finished product itself tests within specification. That is the legal hook that makes CGMP compliance, and the records that demonstrate it, inspectable.

Section 704(a)(4) of the Act gives FDA the explicit authority to request records in advance of or in lieu of an inspection, and Section 707 (added by the Drug Quality and Security Act in 2013) deems a drug adulterated if the owner or operator delays, denies, or limits an inspection, or refuses to permit entry. Refusing or stalling is not a neutral act; it changes the product's legal status.

The current good manufacturing practice regulations themselves live in Title 21 of the Code of Federal Regulations. The main parts an investigator will reference include 21 CFR Part 210 and Part 211 (drugs and finished pharmaceuticals), the Part 600 series (biologics), Part 11 (electronic records and electronic signatures), and Part 820 (the Quality System Regulation for devices, being aligned to ISO 13485 under the Quality Management System Regulation, QMSR, with a compliance date of February 2, 2026). For clinical work, the bioresearch monitoring (BIMO) program inspects against 21 CFR Parts 50, 54, 56, and 312. For data integrity specifically, FDA's 2018 guidance "Data Integrity and Compliance With Drug CGMP: Questions and Answers" is the document that lays out the agency's current thinking, and investigators are trained against it.

The FDA Safety and Innovation Act of 2012 (FDASIA) removed the old fixed two-year domestic inspection cycle and replaced it with a risk-based scheduling model, so a site's inspection frequency now depends on its risk profile, history, and product type rather than a calendar rule. This matters for readiness planning: you cannot reliably predict the gap between inspections, which is exactly why a continuous state of control beats a timed sprint.

> 21 CFR 211.180(e): "Records shall be maintained so that data therein can be used for evaluating, at least annually, the quality standards of each drug product." The records are not optional artifacts; their existence and usability are themselves a CGMP requirement.

---

## How FDA Inspections Are Structured

Understanding how FDA conducts inspections helps you prepare realistically, rather than preparing for a version of inspections that does not match reality.

### Types of Inspections

**Pre-Approval Inspection (PAI):** Triggered by an NDA, BLA, ANDA, or supplemental application. FDA inspects the manufacturing facility to verify that the processes and data supporting the application match what is described in the submission. PAIs are usually more data-focused than routine CGMP inspections, because the investigator is judging whether the data package in the application can be trusted. A PAI has three stated objectives: readiness for commercial manufacturing, conformance to the application, and data integrity of the supporting records. Sites preparing a first submission should read this alongside [BLA Readiness and the Data Package](/articles/bla-readiness-data-package).

**Routine CGMP (surveillance) inspection:** Periodic surveillance of manufacturing facilities, scheduled by risk tier under the FDASIA model described above. The investigator is assessing the ongoing health of the quality system rather than a single application.

**For-cause inspection:** Triggered by a specific concern: a complaint, a recall, a suspicious adverse event pattern, a whistleblower report, an import alert review, or information shared by another regulator. For-cause inspections are narrower and deeper, aimed at the triggering issue.

**Directed inspection:** Focused on a specific issue, often follow-up on observations from a previous inspection that were not fully resolved, or verification of corrective actions promised in a 483 response.

**BIMO (clinical) inspection:** For sponsors, CROs, and clinical sites, FDA's Bioresearch Monitoring program inspects trial conduct, informed consent, IRB function, and source data against the Good Clinical Practice framework. See [GCP Audits and Inspections](/articles/gcp-audits-and-inspections).

FDA uses a Compliance Program Guidance Manual to drive how investigators run drug inspections, including the "systems-based" model (Compliance Program 7356.002) that organizes a facility into six systems: quality, facilities and equipment, materials, production, packaging and labeling, and laboratory controls. An investigator may do a "full" inspection covering all six or an "abbreviated" inspection covering the mandatory quality system plus at least one other. Knowing which system the investigator is sampling tells you where to focus back room support.

### A Comparison at a Glance

| Inspection type | Typical trigger | Primary focus | Data integrity intensity |
|---|---|---|---|
| Pre-Approval (PAI) | New or supplemental application | Conformance to submission | High |
| Routine CGMP surveillance | Risk-based schedule | Quality system health across systems | Moderate to high |
| For-cause | Complaint, recall, signal | The specific triggering concern | Variable, often high |
| Directed | Unresolved prior observations | Corrective action verification | Targeted |
| BIMO (clinical) | Application, complaint, or surveillance | Trial conduct, consent, source data | High on source data |

### Announced vs Unannounced

Domestic CGMP surveillance inspections are often unannounced or given only short notice; FDA is not required to give advance warning for a domestic facility. Foreign inspections are typically pre-arranged for logistical reasons, which has led to scrutiny of whether announced foreign visits see a different reality than unannounced domestic ones. PAIs are usually coordinated against the application review timeline, so a site with an application under review can anticipate a window but not an exact date. The planning consequence is blunt: build for the unannounced case, because the announced case is then trivially covered.

### The Inspection Timeline

**Opening meeting:** The FDA investigator presents credentials and issues form FDA 482, the Notice of Inspection, describes the scope, and begins requesting documents and records. The scope stated at the opening is often broader than the company expected from any advance notice. Confirm the investigator's name, district, and the stated scope, and have your scribe record them verbatim.

**During the inspection:** Investigators tour the facility, interview personnel, review documents, and examine data in electronic systems. They may request access to instrument audit trails, LIMS records, training files, deviation and CAPA logs, and batch records, frequently without telling you in advance which specific records they want. A multi-day inspection settles into a rhythm of daily document requests followed by review and follow-up questions the next morning.

**Sample collection (FDA 484):** If the investigator collects physical samples, a Receipt for Samples (form FDA 484) is issued. Log it.

**Daily wrap-ups:** Many investigators hold a short end-of-day discussion. This is a chance to clarify misunderstandings before they harden into observations and to plan the next day's document pulls.

**Closing meeting:** At the close, investigators present their observations verbally. If they intend to issue a Form 483, they walk through it at this meeting and hand it over. This is the right moment to correct factual errors (for example, "that system was retired in March, the record you saw is the predecessor") but not the moment to argue conclusions.

**FDA Form 483 (Inspectional Observations):** A written list of observations issued at the close of an inspection under Section 704 authority. The 483 is not a final agency determination, it is the investigator's written findings, and the company has the opportunity to respond. The response window matters: FDA has stated it will review a 483 response received within 15 business days before deciding on further action such as a Warning Letter. The response strategy is covered in [FDA Form 483 and Warning Letters](/articles/483-warning-letter-response) and in more depth in [483 Response Strategy](/articles/fda-483-response-strategy).

After the inspection, the investigator writes an Establishment Inspection Report (EIR), and the inspection receives a final classification: NAI (No Action Indicated), VAI (Voluntary Action Indicated), or OAI (Official Action Indicated). The classification, not the 483 itself, drives whether enforcement follows. An OAI is what precedes a Warning Letter, import alert, or further regulatory action.

> A 483 observation is written as a statement of significance, not a citation of a specific regulation. The investigator must believe the observation represents a deviation from the Act or its regulations. Your response does not have to accept the framing, but it does have to address the underlying fact.

---

## Front Room and Back Room Operations

When an FDA inspection occurs, companies typically split into two operations: the front room, where the investigator works, and the back room, which feeds and protects it. The live mechanics of running these rooms day to day are covered in [Managing a Live Inspection](/articles/managing-a-live-inspection); this section sets up the roles and the controls.

### Front Room

The front room is where the inspection happens: where FDA investigators are escorted, where they conduct interviews, where requested documents are provided. Front room roles include the following.

**An inspection coordinator (lead host):** One named person who is the primary point of contact with the investigator. This person does not answer technical questions across every topic. They manage logistics, make sure investigators have what they requested in a reasonable time, and keep the back room informed of every request as it lands.

**A scribe:** A person present in all interactions with investigators who keeps a detailed contemporaneous log: every question asked, every document requested, every commitment made, every verbal statement of significance. The scribe's record is the company's memory of the inspection and becomes important if there is later a dispute about what was said, requested, or observed. Two scribes on rotation prevent fatigue errors during long days.

**SMEs (subject matter experts):** The people who answer technical questions in their area of responsibility. SMEs are brought in for their topic and excused when it is done, so the investigator deals with one credible expert at a time rather than a crowd.

**A document runner:** Someone whose job is to retrieve requested documents from files, systems, and physical locations and bring them to the front room. This is not the same as giving the investigator raw system access. The runner ensures documents are retrieved in a controlled, logged manner, and that what crosses the table is exactly what was asked for, nothing extra.

### Back Room

The back room coordinates support for the front room and manages the company's posture during the inspection.

**Document control:** A tracking system for every document requested and provided: what was requested, what was provided, when, in what format, and who was involved. Two clean copies of each document are standard practice, one for the investigator and one held in the back room so reviewers see exactly what the investigator sees. This log is essential both for managing the inspection in real time and for reconstructing it afterward for the response.

**Real-time review:** As documents are pulled, qualified back room staff review the same documents to spot anything the company needs to be ready to discuss. If an investigator is about to review an audit trail that has a gap, the back room should know about that gap, and have an explanation ready, before the investigator raises it.

**Escalation:** A defined path for raising significant emerging observations to senior management. Leadership should never be surprised at the closing meeting. A short daily back room huddle keeps the site head and quality head current.

**Legal counsel:** For significant or for-cause inspections, having counsel available, even if not in the room, lets the company invoke attorney-client privilege appropriately and advise on commitments before they are made verbally.

A practical caution: the front room should provide copies and read-only views, not unattended administrative access to validated systems. If an investigator needs to see live system behavior, a qualified user drives the system while the investigator watches and directs. This keeps actions attributable and avoids any change to records during the inspection.

### A Sample Document Request Log

The single most useful artifact during an inspection is a clean request log. A workable structure:

| Req # | Date / time | Requested by | Description | System / source | Provided (date / time) | Copies (FDA / file) | SME | Notes |
|---|---|---|---|---|---|---|---|---|
| 014 | 06-18 09:42 | Inv. (lead) | Audit trail config record, HPLC-07 CDS | CDS admin export | 06-18 10:15 | Y / Y | M. Quality (Lab) | Provided as PDF + screen demo |
| 015 | 06-18 10:05 | Inv. (lead) | Last 3 OOS for Product B, 2025 | QMS / LIMS | 06-18 11:30 | Y / Y | Lab supervisor | One still open, status shown |
| 016 | 06-18 13:20 | Inv. (2nd) | Training records, 4 named analysts | LMS export | 06-18 14:00 | Y / Y | Training lead | One reassigned role, noted |

Every row that leaves the back room should be matched by a row that the back room reviewed first. If a request lands that the company cannot fulfill in a reasonable time, the coordinator commits to a time rather than letting it sit, and the scribe records the commitment.

### Roles at a Glance

| Role | Owns | Does NOT do |
|---|---|---|
| Inspection coordinator | Logistics, single point of contact, pacing | Answer deep technical questions |
| Scribe | Contemporaneous log of all interactions | Speak to the investigator |
| SME | Accurate answers in their area | Volunteer outside their area |
| Document runner | Controlled retrieval and hand-off | Give raw system access |
| Back room lead | Real-time review, escalation, response prep | Appear in the front room |
| Site / quality leadership | Daily huddle, commitments, posture | Hear bad news first at closing |

---

## SME Preparation

Subject matter experts are the people who actually know the systems, processes, and data that investigators want to understand. Poorly prepared SMEs are one of the most common sources of inspection complications, and unlike a missing record, a bad SME answer cannot be quietly corrected later.

**Know your systems.** An SME should be able to describe every system in their area: what it does, how it is validated, what the audit trail captures, who has access, and when it was last periodically reviewed. They should not need to look this up when an investigator asks. The expected fluency tracks the controls described in [Audit Trail Design and Review](/articles/audit-trail-design-and-review) and [GxP Computerized Systems Operations](/articles/gxp-computerized-systems-operations).

**Know your procedures.** The relevant SOPs should be familiar: not memorized word for word, but understood. An SME who can walk an investigator through how an out-of-specification investigation runs in their lab is demonstrating control. An SME who has to find and read the SOP during the inspection is demonstrating the opposite.

**Answer the question asked.** One of the most common missteps is volunteering information beyond the question. If an investigator asks "how do you configure audit trails in this system?", the correct answer describes audit trail configuration. It does not describe the two times the audit trail failed and what you did about it. The company's posture is not to hide problems, it is to answer accurately without expanding the question's scope. Each new topic an SME opens is a new thread the investigator can pull.

**"I do not know" is an acceptable answer.** If an SME does not know, the right response is to say so and offer to find out. Speculating or guessing creates more risk than acknowledging the gap, because a confident wrong answer that the records later contradict reads as either incompetence or evasion.

**Behavioral coaching matters as much as content.** Pause before answering. Let the investigator finish the question. Do not fill silence, investigators sometimes stay quiet specifically to see what an anxious SME will add. Speak in plain language, not internal shorthand. If a question is unclear, ask for clarification rather than guessing at intent. These habits are best built through mock interviews, not a memo the week before.

### The Listen, Clarify, Answer, Stop Pattern

A reliable structure to coach SMEs through:

1. **Listen** to the full question without starting to answer in your head.
2. **Clarify** if the scope is ambiguous ("Are you asking about the configuration or the review process?").
3. **Answer** the specific question, in plain terms, supported by a document if one exists.
4. **Stop.** Do not keep talking to fill silence. The investigator will ask the next question.

### Worked Example: A Good Answer vs a Poor One

> **Investigator:** "Who can change integration parameters in your chromatography software, and what gets recorded when they do?"

A poor answer: "Only senior analysts, and honestly we hardly ever reprocess. There was a stretch last year where we had to reintegrate a lot because the method was drifting, but we tightened it up."

That answer opens three new threads: a method that was "drifting," a period of heavy reprocessing, and an implied control weakness, none of which the investigator asked about.

A good answer: "Integration parameters can be changed by users in the analyst and reviewer roles. Any change is captured in the audit trail with the previous value, the new value, the user, the timestamp, and a reason for change, and reprocessing creates a new result version while retaining the original. I can show you the access list and the audit trail for a recent change if you would like." That answer is accurate, complete to the question, backed by records, and does not volunteer a new topic.

### A Mock Interview Question Bank

These are representative of what investigators actually open with. SMEs should be able to answer each without notes:

- Walk me through the lifecycle of a sample from receipt to reported result.
- How is this system validated, and where is the validation summary?
- Who has administrator rights to this system, and how is that controlled?
- Show me the last time the audit trail for this system was reviewed.
- How do you know the system clock is correct?
- What happens when an analyst makes an entry error in a batch record?
- How do you decide whether a deviation is major or minor?
- Walk me through your last OOS that confirmed.
- How do you ensure a contractor follows your procedures?

---

## How FDA Assesses Data Integrity During an Inspection

Data integrity assessment is a specific skill experienced FDA investigators bring to inspections. Understanding what they look for helps you confirm your program is actually prepared, not merely documented. The underlying expectation is the ALCOA+ model, attributable, legible, contemporaneous, original, accurate, plus complete, consistent, enduring, and available, covered in [ALCOA+ in detail](/articles/alcoa-plus-deep-dive).

### Workstation-Level Assessment

Investigators go to the instruments. They sit at workstations in the analytical laboratory and access instrument software directly, often with the analyst driving. What they typically examine:

**Audit trail configuration:** Is the audit trail enabled? Can it be disabled, and by whom? Does it capture field-level changes (previous value, new value, user, timestamp, reason) or only event-level entries like "record modified"? An audit trail that records that something changed but not what it changed from is a finding waiting to happen. See [Operationalizing Audit Trail Review](/articles/operationalizing-audit-trail-review).

**User account management:** Are there shared accounts? Generic logins like "lab" or "admin" used by multiple people? Service accounts used for human login? Active accounts for employees who have left? Analysts with the privilege to delete data or alter integration parameters? Access control is a frequent root cause behind data integrity citations, and the expectations are detailed in [CSV Cybersecurity and Access Control](/articles/csv-cybersecurity-access-control).

**Sequence files and injection logs:** The full sequence log of every injection run on the instrument, which may not match what is in the batch record. Investigators compare the instrument's own injection record against what was reported. Gaps, especially "test" or "blank" injections of actual samples that were never reported, indicate unreported runs, the classic "testing into compliance" pattern. The deeper mechanics are in [Chromatography Data System Integrity](/articles/chromatography-data-system-integrity).

**Deleted and orphan records:** Some chromatography data systems keep a log of deleted items and orphan data files not tied to a sequence. Investigators look for deleted injection sequences and ask for the justification and the corresponding deviation.

**Reprocessing history:** Multiple processed versions of the same raw data with different integration parameters. Investigators look at whether reprocessing was documented and justified, whether the original and every version are retained, and whether the pattern is directional, always moving a borderline result toward passing.

### Cross-Reference Analysis

Investigators cross-reference independent data sources to surface inconsistencies a single record would hide:

- Batch record timestamps versus instrument audit trail timestamps
- Electronic signature timestamps versus building access (badge) records
- System login records versus the activity attributed to that user
- Environmental monitoring data versus batch record dates for the same room and time
- Instrument or workstation clock times versus the network time source

An authentic record is internally consistent across all of these. A manipulated record almost always breaks at least one cross-reference. This is why a sample being "tested" at a time the badge log shows nobody in the lab, or a result recorded before the instrument was switched on, becomes a serious observation. Clock control is its own discipline, covered in [Time Stamps and System Clock Control](/articles/time-stamps-and-system-clock-control).

### A Worked Cross-Reference Example

Suppose the batch record says an analyst completed an assay at 14:05 on June 12, signed at 14:10. An investigator pulls four independent sources for that window:

| Source | What it shows |
|---|---|
| CDS injection log | Sample injection started 19:40 on June 12 |
| Instrument workstation clock | Synced to network time, no drift |
| Badge access log | Analyst entered the lab at 19:15, not present at 14:00 |
| Electronic signature audit trail | Signature applied 19:55 |

The batch record time (14:05) contradicts three independent sources that agree among themselves (around 19:40 to 19:55). The conclusion is not "the analyst made a typo"; it is "the recorded time is not contemporaneous, and the contemporaneous record was created hours later." That is an attributable and contemporaneous failure under ALCOA+, and it is exactly the kind of finding that escalates a routine inspection into a data integrity case. The defense is not an explanation invented on the spot; it is having found, investigated, and documented the discrepancy yourself before the investigator arrived.

### Interview-Based Assessment

Investigators ask analytical and production personnel about their procedures in ways that reveal whether people follow the procedures as written or rely on informal workarounds. Common openers:

- "Walk me through what you do when you get an OOS result." (Compare against [The OOS Investigation Process](/articles/oos-investigation-process).)
- "What do you do if an injection fails system suitability?"
- "Who can change integration parameters, and what is logged when they do?"
- "What happens if you realize you made an entry error in a batch record?"

The answers are compared against the written SOPs. Where what people say they do diverges from what the procedures say they should do, that gap is the finding. A site can have flawless SOPs and still fail here if the floor runs on habit.

### Common Inspection-Finding Patterns

These recur across published warning letters and 483s, with no company-specific detail needed to recognize them. See [FDA Data Integrity Warning Letters: Patterns That Repeat](/articles/fda-warning-letters-patterns) for the broader catalogue.

- **Shared or generic accounts** so that actions cannot be attributed to an individual, defeating the "attributable" leg of ALCOA+.
- **Audit trails disabled or never reviewed.** The system has the capability, but the trail was off, or no procedure required anyone to look at it.
- **Unofficial or "trial" testing.** Samples run, reviewed, and then re-run on the record only if the first pass looked bad.
- **Backdated or non-contemporaneous records.** Entries written after the fact to match an expected timeline.
- **Original data deleted or overwritten** with only the summary retained, so the raw data cannot be reconstructed.
- **No raw data retained for spreadsheets or standalone instruments.** A printed value with no underlying file behind it.
- **Inadequate response to a known problem.** The site found the issue but the CAPA was cosmetic, narrow, or never effectiveness-checked.

---

## Maintaining Readiness Continuously

True inspection readiness has three components that must all be live at the same time.

**Active monitoring.** Audit trail review is not a reaction to an inspection, it is a defined periodic activity running on its own schedule. The data integrity risk register is not a document created for an inspection, it is a living risk tool. OOS and deviation investigations close within their timelines. Training records stay current. The mechanics of this sit inside the broader [Data Integrity Program Architecture](/articles/di-program-architecture) and the site [Pharmaceutical Quality System](/articles/pharmaceutical-quality-system).

**Documented state.** The current state of every system, validation status, access configuration, audit trail configuration, periodic review date, is documented and current. When an investigator asks "what is the validated state of this system?", the answer is a current document, not a search through old files and a hopeful reconstruction.

**Known gaps.** This is the most underrated component. An organization that has a data integrity finding can defend it far better if it identified the gap itself in a risk assessment, is actively remediating it, and can show the investigator a dated remediation plan with progress. An organization surprised by its own finding is in a much worse position than one that says, in effect, "we know, here is what we are doing, here is the timeline." Self-identification is a sign of control. Surprise is a sign of its absence. The disciplined way to find gaps before an investigator does is covered in [DI Gap Assessment Methodology](/articles/di-gap-assessment-methodology).

### A Weekly Readiness Self-Check

Pick one validated lab system at random and confirm you can produce, on demand and without scrambling, each of the following:

| Artifact | Acceptance criterion |
|---|---|
| Current validation summary | Approved, in effect, matches the system's actual version |
| Access list with role justification | No shared accounts, no leavers active, privileges match role |
| Audit trail configuration record | Trail enabled, field-level, cannot be disabled by a user |
| Last audit trail review record | Within its defined frequency, signed, findings closed |
| Last 3 OOS or deviation records | Closed in time or open with current status, linked to batch records |
| System clock control evidence | Synced to a trusted source, drift within tolerance |

If assembling that takes a week, the site is not ready, whatever the binder says. If it takes an hour, the site is in a state of control, and the inspection becomes a demonstration rather than a scramble.

### Who Owns Continuous Readiness

| Activity | Primary owner | Oversight |
|---|---|---|
| Periodic audit trail review | System owner / lab | QA |
| Access reviews | System owner / IT | QA |
| Validation state currency | Validation / CSV | QA |
| Deviation and OOS closure | Investigation owner | QA |
| DI risk register upkeep | Data governance lead | Quality leadership |
| Mock inspection program | Inspection readiness lead | Site head / quality head |
| Inspection commitments tracking | QA | Site head |

---

## The Role of Mock Inspections

Mock inspections simulate an FDA inspection to test readiness under realistic conditions. The design of a standing program is covered in [Mock Inspection Program](/articles/mock-inspection-program); here is what good looks like. A useful mock inspection:

- Is run by someone not involved in building the program, an external consultant or a colleague from another site, so the perspective is genuinely outside-in
- Follows the same structure as a real inspection: facility tour, unscripted document requests, SME interviews, and direct workstation review of instrument systems
- Tests the front room and back room mechanics, not only the technical content, including whether document control and the scribe log actually function under time pressure
- Produces a written observation report graded the way a real 483 would be
- Feeds a tracked remediation plan that closes before the real inspection

The most common mistake in mock inspections is treating them as a documentation review rather than a test of systems and behavior. A real investigator at a workstation asking an analyst to show the last three OOS investigations in the chromatography data system is not reviewing a binder. A mock inspection that does the same thing reveals whether the analyst can work the system live, whether the records are actually there, and whether they reconcile with the batch records, in exactly the way a real investigator would test it.

Run mocks on a schedule, not only before an expected PAI. The point of a continuous state of control is that there is nothing to clean up, because cleanup happened as routine work, week after week, long before anyone presented an FDA 482 at the front desk.

---

## Interview Questions on Inspection Readiness

These come up in quality and validation interviews and in regulatory discussions. Strong answers below.

**"What does inspection readiness mean to you?"**
The state of being able to pass a thorough inspection on any given day with no advance cleanup, because the quality system is in continuous control. If you need a 60-day sprint to get ready, you are not in control; you are temporarily presentable.

**"What is the difference between a 483 and a Warning Letter?"**
A 483 is the investigator's written list of inspectional observations handed over at the close of an inspection under Section 704; it is not a final agency action. A Warning Letter is a formal regulatory communication issued later by the agency, after the EIR and classification, when an inspection is classified OAI and the agency concludes there are significant violations. The 483 is the field's findings; the Warning Letter is the agency's position.

**"What are the three objectives of a Pre-Approval Inspection?"**
Readiness for commercial manufacturing, conformance to the application, and data integrity of the records supporting the application.

**"Walk me through how you would set up the front room and back room."**
Name the roles: coordinator as single point of contact, two scribes on rotation, SMEs brought in per topic and excused, a document runner for controlled retrieval. The back room runs document control with two-copy practice, real-time review of everything pulled, a daily leadership huddle, and counsel on call for significant inspections. No raw administrative access is handed to the investigator; a qualified user drives the system.

**"An investigator finds an audit trail gap you already knew about. What is your position?"**
Show the risk assessment that identified it, the open CAPA, the dated remediation plan, and progress to date. A self-identified, actively remediated gap demonstrates control. The worst position is being surprised by your own finding.

**"How does FDA test data integrity at a workstation?"**
Audit trail configuration and whether it can be disabled, account and privilege review, the full injection sequence log versus the reported results, deleted and orphan records, and reprocessing history checked for a directional pattern toward passing. Then cross-referencing timestamps across the CDS, badge logs, signatures, and the system clock.

**"What is the response window for a 483, and why does it matter?"**
FDA has stated it will consider a response received within 15 business days of the 483 before deciding on further action such as a Warning Letter. Responding within that window with credible, dated corrective actions can change the agency's enforcement decision.

**"Can FDA inspect a facility without advance notice?"**
Yes, for domestic CGMP inspections in particular. Delaying, denying, limiting, or refusing an inspection deems the product adulterated under Section 707. The only safe posture is to be ready unannounced.

---

## Cross-links

- [Managing a Live Inspection](/articles/managing-a-live-inspection), running the room day to day
- [Mock Inspection Program](/articles/mock-inspection-program), designing a standing readiness test
- [FDA Form 483 and Warning Letters: How to Respond Effectively](/articles/483-warning-letter-response)
- [483 Response Strategy](/articles/fda-483-response-strategy)
- [FDA Data Integrity Warning Letters: Patterns That Repeat](/articles/fda-warning-letters-patterns), what investigators keep finding
- [Building a Data Integrity Program: Architecture and Governance](/articles/di-program-architecture)
- [Audit Trail Design and Review](/articles/audit-trail-design-and-review), the primary DI control investigators assess
- [ALCOA+ in detail](/articles/alcoa-plus-deep-dive), the data integrity model behind the assessment
- [The OOS Investigation Process](/articles/oos-investigation-process)
- [FDA vs EMA Inspection Dynamics](/articles/fda-vs-ema-inspection-dynamics)
- [DI Gap Assessment Methodology](/articles/di-gap-assessment-methodology)
- [GCP Audits and Inspections](/articles/gcp-audits-and-inspections), the clinical (BIMO) equivalent
