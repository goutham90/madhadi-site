---
title: "Technical Writing for GxP: Protocols, Reports, Deviations, and Defensible Documentation"
description: "How to write GxP records that survive inspection: objective tone, contemporaneous entries, and investigation narratives that hold up under scrutiny. Covers protocols, reports, deviations, and the documentation conventions inspectors check."
pubDate: 2026-06-20
tags: ["technical writing", "documentation", "deviations", "data integrity", "quality assurance", "gmp", "investigations"]
pillar: "quality-assurance"
tier: "Intermediate"
---

In a GxP environment, the document is the proof. If a batch was made correctly but the record is ambiguous, contradictory, or written after the fact, the batch is suspect. Inspectors do not watch you make the product. They read what you wrote about making it, and they decide whether to trust you based on the quality of that writing. This is why technical writing is a quality skill, not a clerical one.

Most quality professionals were never taught to write for this audience. They learned to write essays in school, where flourish and persuasion earn marks. GxP writing rewards the opposite: precision, neutrality, completeness, and a tone that assumes a skeptical reader who was not in the room. This article covers how to write the documents that matter most, protocols, reports, deviations, and investigations, to a standard that holds up when a regulator reads them line by line.

---

## Why writing quality is a regulatory issue, not a style preference

The expectation that records be accurate, legible, attributable, and contemporaneous is written into the regulations themselves. It is not a house style.

US current Good Manufacturing Practice requires that records be made at the time each activity is performed and that they be accurate. **21 CFR 211.100(b)** states that written procedures shall be followed in execution and that deviations shall be recorded and justified. **21 CFR 211.188** requires batch production records to include complete information, with the date and identity of each person performing or checking each significant step. **21 CFR 211.194** requires laboratory records to include complete data derived from all tests. The phrase that recurs across these sections is "complete." A record that omits a step, a result, or a reason is not compliant, regardless of how cleanly it reads.

The data integrity expectations layer on top of this. The **ALCOA** principles (Attributable, Legible, Contemporaneous, Original, Accurate), expanded to **ALCOA+** with Complete, Consistent, Enduring, and Available, are the framework regulators use to judge a record. The MHRA "GXP Data Integrity Guidance and Definitions" (2018) and the FDA guidance "Data Integrity and Compliance With Drug CGMP, Questions and Answers" (2018) both make clear that these apply to paper and electronic records alike. PIC/S PI 041-1 "Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments" (2021) gives the most detailed treatment of what good documentation behavior looks like in practice.

The risk rationale is direct. A poorly written record creates three problems. First, it cannot be relied on to make a quality decision, because the reader cannot tell what actually happened. Second, it invites the regulator to assume the worst, because an ambiguous record is indistinguishable from a record that is hiding something. Third, it damages the credibility of every other record in the system, because inspectors generalize. One investigation that reads like it was written to reach a predetermined conclusion makes them read all your investigations that way.

For the foundational principles behind this, see [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and [good documentation practices](/articles/good-documentation-practices).

---

## The core conventions every GxP record obeys

Before any specific document type, there is a shared grammar of GxP recordkeeping. These conventions apply across every record type, from a logbook entry to a protocol to a deviation narrative.

### Contemporaneous means at the time, not later that day

Record the activity when you perform it. Not at the end of the shift, not when you get back to your desk, not "while it is still fresh." A common inspection finding is records completed in advance (signing for a step not yet done) or in arrears (reconstructing entries hours later). Both destroy the contemporaneous claim. If a delay is unavoidable, the record must show the actual time of the activity and the actual time of entry, with the delay explained.

### Attributable means a specific human, traceable

Every entry needs to trace to the person who made it. On paper that means a unique signature or initials tied to a current signature log. In electronic systems it means a unique user account, never shared, with the action logged in an audit trail. Generic logins, shared passwords, and initials that match three people on the floor are recurring findings. See [electronic signatures implementation](/articles/electronic-signatures-implementation) and [audit trail design and review](/articles/audit-trail-design-and-review).

### Corrections follow the single-line rule

To correct a paper entry: draw a single line through the error so the original remains legible, write the correct value, then initial and date the change. Add a brief reason where the reason is not obvious. Never obscure the original. Never use correction fluid, never write over a figure, never erase. A correction that hides what was there first is treated as a potential falsification, not a typo.

A correctly corrected entry looks like this:

| Field | Entry |
|---|---|
| pH result | ~~6.2~~ 6.8 |
| Correction note | Transcription error from instrument display, JM 20-Jun-2026 |

### Contemporaneous time and date format must be unambiguous

Use a date format that cannot be misread between regions. 20-Jun-2026 is unambiguous; 06/07/2026 is not. Many sites standardize on DD-MMM-YYYY for exactly this reason. Times should specify the convention (24-hour clock is common) and, where systems span sites, the time zone or the controlled system clock. See [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).

### No blanks, no pencil, no gaps

Every field gets an entry. If a field does not apply, write N/A and initial it; do not leave it blank, because a blank invites the question of whether the step was skipped or the record altered later. Use indelible ink. Do not leave open white space between entries that could later be filled in.

### Write for a reader who was not there

This is the single most useful habit. Assume the reader has no context, was not on the floor, does not know your equipment by nickname, and is reading two years later during an inspection. If the record only makes sense to someone who was present, it is not complete.

---

## Objective tone: the discipline that separates good records from bad

GxP writing is neutral and factual. The reader should not be able to tell whether the author wanted a particular outcome. This is harder than it sounds, because human writers naturally editorialize, minimize, and reassure. Train yourself out of it.

### State observations, not conclusions, then separate the two

A record describes what was observed. The analysis section, clearly labeled, is where interpretation belongs. Mixing them lets a conclusion contaminate the facts.

Weak: "The operator made a minor mistake but the product was fine."

Strong: "At 14:20 the operator added 12.0 kg of excipient against a batch record specification of 10.0 kg. The addition was identified at 14:35 during the in-process check." The judgment about impact belongs in the assessment, supported by data, not asserted in the observation.

### Avoid minimizing and emotive language

Words like "minor," "slight," "just," "only," "human error," "isolated," and "no impact" are red flags when they appear before the evidence supports them. They signal an author steering the reader. The same is true of reassuring phrases ("there is no cause for concern," "this is a one-off"). State the facts and let the criticality assessment do the rating. If something is genuinely low impact, the data will show it; you do not need the adjective.

### Do not speculate in the factual record

"The valve probably leaked" is speculation. Either you have evidence the valve leaked (record it as a finding) or you have a hypothesis to test (record it as a hypothesis in the investigation plan). Keep the two separate. Speculation written as fact is one of the fastest ways to lose a reader's trust.

### Quantify everything you can

"The temperature was high" is not a record. "The chamber reached 27.4 C against an acceptance limit of not more than 25.0 C, for 42 minutes from 02:13 to 02:55" is a record. Numbers, limits, durations, identifiers, and timestamps are the substance. Adjectives are not.

### Active voice and named actors where attribution matters

Passive voice ("the sample was discarded") hides who did what. In an investigation narrative, name the role or the person: "The analyst discarded the sample." Attribution is the point of the record, so do not write it out with passive constructions. Passive voice is acceptable in protocols and procedures where the actor is defined by the role section, but in event narratives, name the actor.

---

## Writing protocols

A protocol is a pre-approved plan that defines what you will do, how, and the criteria by which you will judge the result, written and approved before execution. The "before" is essential. A protocol approved after the work was done is not a protocol; it is a report dressed up as one, and inspectors spot the back-dating immediately.

### Regulatory basis

Validation and qualification protocols sit under the process validation expectations of **21 CFR 211.100** and the FDA "Process Validation: General Principles and Practices" guidance (2011), with ICH Q8/Q9/Q10 framing the lifecycle. The principle is that you define acceptance criteria in advance so the outcome cannot be rationalized after the fact. Pre-defined criteria are what make a passing result meaningful.

### What goes in a protocol

| Section | Content |
|---|---|
| Title, ID, version | Unique identifier, version, effective date |
| Purpose and scope | What is being qualified or studied, and the boundaries |
| Responsibilities | Roles for execution, review, approval |
| References | SOPs, prior protocols, specifications, risk assessments |
| Prerequisites | Calibration status, training, prior qualification, materials |
| Procedure / test steps | Numbered, executable steps with expected results |
| Acceptance criteria | Objective, measurable, pre-defined pass/fail conditions |
| Data recording | Where and how raw data is captured |
| Deviation handling | How test failures and protocol deviations are managed |
| Approval | Signatures before execution begins |

### How to write the test steps

Each step should be executable by a trained person without the author present. Write the expected result next to the action and leave a defined place to record the actual result.

| Step | Action | Expected result | Actual result | Pass/Fail | Performed by / date |
|---|---|---|---|---|---|
| 5.1 | Set chamber setpoint to 25 C and start | Setpoint accepted, run starts | | | |
| 5.2 | Record chamber temperature at 30 min | 25.0 C +/- 2.0 C | | | |
| 5.3 | Verify alarm at 27.0 C | Audible and visible alarm activates | | | |

### Acceptance criteria: what good looks like

Good acceptance criteria are specific, measurable, and tied to a requirement, not to a hope. "The system shall perform adequately" is not a criterion. "Chamber temperature shall remain within 25.0 C +/- 2.0 C at all mapped locations for the full 24-hour run" is. Every criterion should be traceable back to a user requirement or specification, which is why traceability matters. See [user requirements and traceability](/articles/user-requirements-and-traceability) and [writing validation protocols and reports](/articles/writing-validation-protocols-and-reports).

### Common protocol mistakes

- Vague acceptance criteria that can be argued either way after the fact.
- Steps that require judgment the executor has not been given ("verify the system is working correctly").
- Acceptance criteria buried in the procedure rather than stated explicitly so anyone can find them.
- Pre-printing results or expected values in a way that lets the executor copy rather than measure.
- No defined path for handling a test failure, so failures get handled inconsistently or quietly.

For deeper protocol structure see [validation deliverables guide](/articles/validation-deliverables-guide) and [writing validation protocols and reports](/articles/writing-validation-protocols-and-reports).

---

## Writing reports

A report documents what actually happened during execution and states a conclusion against the protocol's pre-defined acceptance criteria. The report's job is to let a reader who never saw the work decide whether the criteria were met, using the evidence presented.

### What goes in a report

- Reference to the approved protocol and its version.
- Summary of execution: when, by whom, what equipment and materials.
- Results presented against each acceptance criterion, with the actual data.
- Every deviation encountered during execution, its disposition, and its impact on the conclusion.
- A clear conclusion: met, not met, or met with documented justification.
- Approval signatures.

### The discipline of reporting against criteria

Do not bury results. For each pre-defined criterion, show the criterion, show the result, and state pass or fail. A summary table is the cleanest way:

| Acceptance criterion | Result | Status |
|---|---|---|
| Temperature 25.0 C +/- 2.0 C, all locations, 24 h | Range observed 23.6 to 26.8 C | Met |
| Alarm activates at 27.0 C | Activated at 27.0 C | Met |
| Recovery to setpoint within 30 min after door open | Recovered in 41 min | Not met |

That third row is the test of an honest report. A weak report omits it, softens it, or hides it in prose. A strong report states it plainly, then handles it: a deviation is raised, the impact is assessed, and the conclusion accounts for it. The credibility of the entire report rests on whether failures are reported as cleanly as passes.

### Handling deviations inside a report

Every deviation from the protocol during execution must be documented, assessed for impact on the result, and dispositioned before the report concludes. Do not write a report that concludes "all criteria met" when a deviation occurred. Write what happened, assess it, and reach a conclusion that survives someone re-reading the raw data. See [validation summary report and release](/articles/validation-summary-report-and-release) and [validation test failure management](/articles/validation-test-failure-management).

### Common report mistakes

- Conclusion not supported by the data presented (the data shows a failure, the conclusion says pass).
- Deviations encountered during execution not mentioned in the report.
- Results summarized without the underlying data, so the reader cannot verify the conclusion.
- "Acceptable" stated without reference to the pre-defined criterion that defines acceptable.
- Report written and signed before all data was reviewed.

---

## Writing deviations

A deviation is a departure from an approved instruction, specification, procedure, or standard. **21 CFR 211.100(b)** requires that deviations be recorded and justified. The deviation record is the raised flag and the first capture of facts; it is the starting point that feeds triage, investigation, and CAPA. For the full process see [deviation management](/articles/deviation-management) and [quality event classification and triage](/articles/quality-event-classification-triage).

### What a deviation record must capture

- What was supposed to happen (the requirement, with the document and section reference).
- What actually happened (the departure, with quantitative detail).
- When it happened and when it was discovered (both times; the gap matters).
- Where, on what product, batch, equipment, or system.
- Who discovered it and the immediate actions taken (containment).
- Initial criticality assessment and the affected scope.

### How to write the deviation statement

The deviation statement is two facts placed side by side: the requirement and the departure. Keep them factual and quantified.

Weak: "Wrong amount of buffer was added during the process. Operator caught the mistake quickly and it was corrected, so there should be no impact on the batch."

Strong: "Batch record BR-XXXX section 7.3 specifies addition of 10.0 kg of buffer. On 20-Jun-2026 at 14:20, 12.0 kg was added, a 2.0 kg overage. The discrepancy was identified at 14:35 during the in-process reconciliation check. The batch was placed on hold pending investigation. Affected scope: Lot 26-0420, single addition step."

Note what the strong version does not do. It does not call the event minor. It does not declare no impact. It does not blame the operator. It does not pre-judge the conclusion. It captures facts and times and quantities, and it states the containment action. The impact assessment comes later, in the investigation, supported by evidence. Writing "no impact" in the deviation statement before any investigation is one of the most common and most damaging habits in the field, because it tells the reader you decided the answer before you looked.

### Immediate actions and containment

The deviation record should show what was done to contain the situation: product on hold, equipment quarantined, line stopped, batch segregated. Containment is a fact to record, not a conclusion. Show it.

### Criticality: state it, justify it briefly, let the investigation confirm it

An initial criticality (often minor / major / critical) drives the investigation depth and timeline. State the initial rating and the basis in one or two sentences, then let the investigation confirm or escalate it. Do not anchor the rating to the answer you want. A "minor" deviation that turns out to affect product quality and was rated minor to avoid a full investigation is a serious finding pattern. See [audit finding classification](/articles/audit-finding-classification) for how rating logic is judged.

### Common deviation mistakes (and inspection patterns)

- "No impact" or "no quality impact" written in the initial record before investigation. Regulators read this as a predetermined conclusion.
- Vague statements with no quantities, times, or document references.
- Minimizing language (minor, slight, isolated, human error) that pre-judges criticality.
- Late entry: the deviation raised days after discovery, breaking contemporaneity and suggesting it was managed informally first.
- Under-rating criticality to dodge a full investigation, then the recurrence proves it mattered.
- Containment not documented, so it is unclear whether affected product was controlled.

---

## Writing the investigation narrative

This is the hardest document to write well and the one inspectors scrutinize most. An investigation narrative tells the story of what happened, why it happened, what the impact is, and what is being done about it, in a way that a skeptical outsider finds convincing because it is honest, evidence-based, and complete. For the analytical methods that feed it, see [root cause analysis techniques](/articles/root-cause-analysis-techniques) and, for lab events, [the OOS investigation process](/articles/oos-investigation-process).

### Structure that works

A defensible investigation narrative generally moves through these blocks:

1. **Problem statement.** The deviation restated precisely: requirement versus departure, quantified, with scope.
2. **Background and timeline.** A chronological account with timestamps. The timeline is often the single most persuasive element; it shows the reader you reconstructed events rather than guessing.
3. **Investigation performed.** What you checked, what data you pulled, what you ruled in and ruled out, and the evidence for each. Hypotheses tested and rejected belong here, with the reason for rejection.
4. **Root cause.** The conclusion of the analysis, stated as the most probable cause, supported by the evidence above. If the root cause is not conclusively determined, say so honestly and explain what was done to narrow it.
5. **Impact assessment.** Product, other batches, other systems, other sites. Quantified and reasoned, not asserted.
6. **Corrective and preventive actions.** What fixes the immediate problem (correction), what addresses the cause (corrective action), what prevents recurrence (preventive action). See [what is a CAPA](/articles/what-is-a-capa) and [CAPA effectiveness verification](/articles/capa-effectiveness-verification).
7. **Conclusion and disposition.** The decision on affected product and the closure of the event.

### Build the timeline first

Before you write a word of narrative, build the timeline from objective sources: audit trails, logbooks, batch records, alarm histories, badge access, instrument data. A timeline assembled from records, not memory, is the backbone of a credible investigation. It also exposes gaps, the 40 minutes nobody can account for, the entry made out of sequence, that the narrative must then address rather than paper over.

| Time | Event | Source |
|---|---|---|
| 02:13 | Chamber temperature crosses 25.0 C limit | Chamber data log |
| 02:16 | High-temp alarm activates | Alarm history |
| 02:55 | Temperature returns below 25.0 C | Chamber data log |
| 06:40 | Excursion identified by oncoming shift | EM review record |
| 07:05 | Product placed on hold | Quarantine log |

### Show the evidence, ruled in and ruled out

A weak investigation lists a root cause and moves on. A strong one shows its work: here are the candidate causes we considered, here is the evidence for and against each, here is why we landed where we did. Documenting the hypotheses you rejected, and why, is what convinces a reader the conclusion was reasoned rather than assumed. It also protects you: if a finding later challenges the conclusion, the record shows you considered the alternatives.

### The honesty test for root cause

The most common and most damaging investigation pattern is the root cause that does not actually explain the event. "Operator error" with no analysis of why the error was possible (no second check, ambiguous instruction, fatigue, poor design) is not a root cause; it is where the analysis stopped. Regulators cite this constantly: investigations that blame the individual and never examine the system that let the error happen. If your corrective action is "retrain the operator" and nothing else, your investigation almost certainly stopped too early. See [human error in deviations](/articles/human-error-in-deviations) for how to handle this without scapegoating.

A genuine root cause passes a simple test: if you implement the action that addresses it, the event cannot recur the same way. If it can, you have not reached root cause.

### Impact assessment: reason it, quantify it

State the impact on the affected product with reasoning and data, then widen the lens: other batches made on the same equipment, the same campaign, related systems, other sites running the same process. The question the inspector will ask is "how did you know this was the only batch affected?" Your impact assessment must answer that question with evidence, not assertion.

### Writing the narrative itself

- Past tense, third person, factual.
- Chronological where possible; the reader follows time.
- Every claim traceable to a source already in the timeline or evidence section.
- No new facts in the conclusion that were not established earlier.
- The conclusion follows from the body; a reader should reach it themselves before they read it.

### Common investigation-writing mistakes (inspection patterns)

- Root cause that does not explain the event (operator error with no systemic analysis).
- Conclusion contradicted by the data in the same document.
- Impact assessment asserted without evidence ("no impact to product" with nothing behind it).
- Investigation that reads as written to reach a chosen conclusion; convenient evidence included, inconvenient evidence absent.
- Timeline gaps unaddressed.
- CAPA that does not address the stated root cause (root cause is systemic, action is "retrain").
- Investigation closed late, past its defined timeline, with no justification for the extension.
- Re-testing into compliance in lab investigations, a serious data integrity finding. See [OOS investigation process](/articles/oos-investigation-process).

---

## A worked deviation-to-investigation example

To show the whole arc, here is a condensed event written the right way.

**Deviation statement.** "SOP-XXX section 6.2 requires storage of intermediate at 2 to 8 C. On 20-Jun-2026, the cold room data log shows the intermediate for Lot 26-0420 was held at 11.3 C for 78 minutes (03:42 to 05:00) following a compressor fault. The excursion was identified at 06:40 by the oncoming shift during routine data review. The lot was placed on hold at 07:05. Affected scope: Lot 26-0420, intermediate stage, single excursion event."

**Initial criticality.** "Rated major pending investigation: the excursion exceeded the validated storage range and product quality impact cannot be excluded without assessment of stability data."

**Timeline.** Built from the cold room data log, alarm history, and maintenance record (compressor fault logged at 03:40, repaired 05:00).

**Investigation.** "Candidate causes considered: (a) compressor mechanical failure, supported by the maintenance log showing fault and repair; (b) controller setpoint drift, ruled out, setpoint verified unchanged at 5.0 C in the controller history; (c) sensor error, ruled out, a second independent probe corroborated the 11.3 C reading. Most probable cause: compressor capacitor failure, confirmed by the replaced part and the immediate return to range after repair."

**Impact assessment.** "Stability data for this intermediate (study STB-XXX) demonstrates no significant change after 14 days at up to 25 C. The 78-minute excursion at 11.3 C is well within the demonstrated stability envelope. Product quality impact: none, supported by stability data. No other lots were in the cold room during the excursion window, confirmed by the inventory record, so scope is limited to Lot 26-0420."

**CAPA.** "Correction: compressor capacitor replaced (complete). Corrective action: add capacitor to the preventive maintenance replacement schedule. Preventive action: review alarm escalation so a compressor fault pages on-call staff immediately rather than relying on next-shift data review, reducing excursion duration. Effectiveness check: no recurrence of unescalated cold-room excursions over the next two quarters."

**Conclusion.** "Lot 26-0420 released. Root cause identified and addressed. CAPA tracked to completion."

Notice that "no impact" appears only in the impact assessment, only after evidence, and only with the stability data cited. That is the difference between a defensible record and a wish.

---

## Roles and responsibilities

| Role | Responsibility in documentation |
|---|---|
| Author / originator | Writes the record contemporaneously, factually, completely; captures the deviation or executes the protocol |
| Subject matter expert | Provides technical content, validates the investigation reasoning, confirms impact assessment |
| Investigation owner | Drives the investigation, builds the timeline, reaches and defends the root cause |
| Reviewer | Checks completeness, accuracy, traceability, and tone; ensures conclusion follows from data |
| Quality Assurance | Independent oversight; approves criticality, root cause adequacy, CAPA, and final disposition; owns the standard |
| Document control | Manages versions, effective dates, retention, retrieval. See [document control fundamentals](/articles/document-control-fundamentals) |
| Approver / decision maker | Signs the disposition; accountable for the quality decision the record supports |

The reviewer and QA roles are where most documentation quality is won or lost. A reviewer who accepts "no impact, operator error" without challenge is part of the problem. The reviewer's job is to read as the inspector will read, and to send it back when it does not hold up.

---

## Acceptance criteria: how to know a GxP record is well written

Use this checklist before any record leaves your hands:

- **Complete.** No blank fields, no missing steps, no unrecorded results. N/A used and initialed where a field does not apply.
- **Attributable.** Every entry traces to a named person and a time.
- **Contemporaneous.** Entries made when the activity happened; any delay explained.
- **Objective.** No minimizing words, no speculation as fact, no conclusion stated before evidence.
- **Quantified.** Numbers, limits, durations, identifiers, not adjectives.
- **Traceable.** Every claim ties to a source; every acceptance result ties to a pre-defined criterion.
- **Self-supporting.** A reader who was not present can follow it and reach the conclusion themselves.
- **Internally consistent.** The conclusion does not contradict the data; the CAPA addresses the stated root cause.
- **Corrections proper.** Single line, original legible, initialed, dated, reason where needed.

If a record fails any of these, it is not done, no matter how polished the prose.

---

## Interview-ready: questions you will be asked and how to answer

**"What makes a record contemporaneous, and why does it matter?"**
Made at the time of the activity, by the person performing it. It matters because a record made later is a reconstruction, and reconstructions drift from fact. Regulators treat late entries as a data integrity risk because they cannot verify what was real versus remembered. Cite ALCOA+ and the CGMP requirement to record at the time of performance.

**"Walk me through how you would write a deviation."**
State the requirement and the departure side by side, quantified, with the document reference. Record both the time it happened and the time it was discovered. Document containment. Give an initial criticality with a one-line basis. Do not write impact or root cause in the deviation statement; those come from the investigation. The interviewer is listening for one thing: did you put "no impact" in the deviation. If you do, you fail.

**"An investigation concludes the root cause was operator error. Is that acceptable?"**
Rarely on its own. Operator error is usually a symptom, not a cause. The real question is why the error was possible: ambiguous instruction, no independent check, poor design, fatigue, training gap. If the only corrective action is retraining, the investigation stopped too early. A good answer cites the systemic analysis and the test that the corrective action would prevent recurrence.

**"How do you keep an investigation narrative objective?"**
Separate observation from interpretation. Build the timeline from records, not memory. Document the hypotheses you rejected and why. Quantify everything. Avoid minimizing language. Make sure the conclusion follows from the evidence presented, with no new facts appearing only at the end.

**"What documentation findings do inspectors cite most often?"**
Incomplete records, late or backdated entries, shared logins breaking attribution, "no impact" written before investigation, root causes that do not explain the event, CAPA that does not address the root cause, re-testing into compliance, and corrections that obscure the original. Being able to name these and how to avoid them shows you have read the warning letter patterns. See [FDA warning letter patterns](/articles/fda-warning-letters-patterns) and [the 483 and warning letter response](/articles/483-warning-letter-response).

**"Why write for someone who was not in the room?"**
Because that is exactly who reads the record that matters: an inspector, two years later, with no context. If the record only makes sense to people who were present, it is not complete, and completeness is a regulatory requirement, not a courtesy.

**"How do you correct a paper record?"**
Single line through the error, leave the original legible, write the correction, initial and date, add a reason if it is not obvious. Never erase, never use correction fluid, never write over. A correction that hides the original is treated as potential falsification.

---

## Practical tips

- Build the timeline before you write the narrative. The timeline finds the gaps and orders the story.
- Write the deviation statement as two facts: requirement, departure. If you find yourself adding a third clause about impact, stop.
- Keep a personal banned-words list: minor, slight, just, only, no impact, human error, isolated, obviously. When one appears in your draft, ask whether the evidence supports it yet.
- Read your own record as the inspector: skeptical, no context, looking for the gap. If you can poke a hole in it, so can they.
- For investigations, write the impact assessment last, after the evidence is in. Writing it first anchors you to a conclusion.
- Make the conclusion the reader's idea. If the body is strong, the reader reaches your conclusion before they read it. That is a record that defends itself.
- When the root cause is genuinely undetermined, say so and document the rigor of the search. An honest "most probable cause, with these alternatives less likely" is far stronger than a confident wrong answer.
- Use tables for results against criteria and for timelines. They force completeness and make omissions visible.

### Related reading

- [Good documentation practices](/articles/good-documentation-practices)
- [ALCOA+ in detail](/articles/alcoa-plus-deep-dive)
- [Deviation management](/articles/deviation-management)
- [Root cause analysis techniques](/articles/root-cause-analysis-techniques)
- [The OOS investigation process](/articles/oos-investigation-process)
- [What is a CAPA](/articles/what-is-a-capa)
- [Human error in deviations](/articles/human-error-in-deviations)
- [Writing validation protocols and reports](/articles/writing-validation-protocols-and-reports)
- [How to write an SOP](/articles/how-to-write-an-sop)
- [FDA warning letter patterns](/articles/fda-warning-letters-patterns)

The standard is simple to state and hard to meet: write so that a skeptical reader who was never in the room comes away trusting what you wrote. Everything in this article serves that one goal.
