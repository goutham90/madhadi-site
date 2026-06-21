---
title: "Running a Mock Inspection: Designing a Dry Run That Surfaces Real Gaps"
description: "How to scope, staff, run, score, and remediate a mock regulatory inspection so it finds the gaps a real inspector would, not a feel-good rehearsal."
pubDate: 2026-06-20
tags: ["inspection-readiness", "mock-inspection", "audits", "gmp", "capa", "quality-systems"]
pillar: "audits-inspection"
tier: "Intermediate"
---

A mock inspection is a planned, scored rehearsal of a real health authority inspection, run by people playing the inspector role against your own staff, systems, and records. Done well, it tells you where you would actually be cited before a real investigator arrives. Done badly, it becomes theater: a friendly walkthrough that confirms everyone is nice and the binders are tidy, then leaves the same gaps in place for the real visit.

The difference between those two outcomes is almost entirely in the design. This page covers how to scope a mock, who plays which role, how the front room and back room work, how to score findings so they map to real citation severity, and how to track remediation so the program actually closes gaps instead of generating a feel-good report. The goal is that you can stand up a defensible mock inspection program, run it, and defend the approach in an interview or to your own management.

---

## Why mock inspections exist and where they sit in the regulations

No regulation says "thou shalt run a mock inspection." It is a quality-system practice, not a mandated deliverable. But it sits directly on top of obligations that are mandated, and that is the regulatory basis you cite when someone asks why you spend money on it.

In the US, 21 CFR 211.180(e) and 211.180(f) require management to review records and be informed of quality issues, and 21 CFR 211.22 makes the quality unit responsible for the systems that produce compliant product. The broader expectation that a firm continuously evaluates and improves its own quality system comes from ICH Q10 (Pharmaceutical Quality System, 2008), which calls out management responsibility, internal audit, and management review as ongoing activities. A mock inspection is one of the tools a firm uses to discharge those responsibilities, specifically the part where you verify readiness before a regulator tests it for you.

For inspection readiness as a discipline, the FDA's own investigator guidance matters because it tells you what the real inspection will look like. The Compliance Program Guidance Manual 7356.002 (Drug Manufacturing Inspections) defines the systems-based inspection model: Quality, Facilities and Equipment, Materials, Production, Packaging and Labeling, and Laboratory Control. A serious mock is scoped against those six systems, not against a random binder pull. In the EU, the equivalent framing is the EudraLex Volume 4 GMP guide and the PIC/S inspection approach, where the inspector evaluates the Pharmaceutical Quality System and its sub-elements.

The risk rationale is simpler than the regulatory one. A real inspection finding can lead to a Form FDA 483 observation, a Warning Letter, an Official Action Indicated classification, import alert, or in the EU a critical finding that blocks a certificate. Each of those costs far more than the mock. The mock buys you the chance to convert a would-be 483 observation into an internal finding you fixed on your own schedule, with your own framing, before anyone external saw it.

A mock inspection is not the same as an internal audit, and conflating the two is a common mistake. An internal audit checks conformance to procedures and standards. A mock inspection rehearses the human dynamics of being inspected: how staff answer questions, how fast the back room produces a document, whether the front room stays calm, whether the story holds together across people. You need both. See [internal-audit-program](/articles/internal-audit-program) for the audit side and [fda-inspection-readiness](/articles/fda-inspection-readiness) and [inspection-readiness](/articles/inspection-readiness) for the broader readiness program this mock plugs into.

---

## Scoping: deciding what this mock is actually testing

Scope is the single decision that determines whether the mock finds real gaps. A mock with no scope wanders, runs long, and produces shallow findings. A scoped mock has a hypothesis: "we believe our data integrity controls in the QC lab would not survive an inspection, prove or disprove it."

### Inputs to the scoping decision

Build scope from evidence, not from comfort. Pull from:

- **Upcoming regulatory triggers.** A pending application (an [ind-nda-bla-pathways](/articles/ind-nda-bla-pathways) submission, a pre-approval inspection, a [bla-readiness-data-package](/articles/bla-readiness-data-package)) tells you the real inspection is coming and what it will target. A pre-approval inspection focuses on the product and process tied to the application; a routine surveillance inspection is broader.
- **Recent internal signal.** Open deviations, repeat CAPAs, OOS clusters, a [483-warning-letter-response](/articles/483-warning-letter-response) you committed to, a recent change to a validated system. These are where you are weakest and where a real inspector follows the trail.
- **Industry citation patterns.** What regulators are citing this year. Data integrity, contamination control, and inadequate investigations have been persistent themes. See [fda-warning-letters-patterns](/articles/fda-warning-letters-patterns) and [regulatory-intelligence-483-trends](/articles/regulatory-intelligence-483-trends) to align scope with live regulatory focus.
- **Time since last real inspection.** A site that has not been inspected in years has drift you cannot see from the inside.

### Scope dimensions to fix in writing

Write these down before anyone walks a floor:

| Dimension | Options | Example decision |
|---|---|---|
| Systems in scope | Any of the six (Quality, Facilities/Equipment, Materials, Production, Packaging/Labeling, Laboratory) | Quality + Laboratory Control only |
| Depth | Full multi-day vs targeted half-day | Two days, lab-focused |
| Style | Announced vs unannounced to staff | Announced to management, unannounced to bench |
| Posture | PAI (product-specific) vs routine surveillance | PAI simulation for product X |
| Areas | Specific rooms, lines, systems | QC HPLC lab, stability, sample management |
| Records window | Date range for record requests | Last 18 months |
| Out of scope | Explicitly excluded | Microbiology lab (separate mock planned) |

The "out of scope" line matters as much as the "in scope" line. It stops the mock from sprawling and sets honest expectations: this mock did not test microbiology, so a green result here does not mean microbiology is ready.

### Acceptance criteria for scoping

You have scoped well when: the scope statement names the systems and areas, ties each to a documented trigger or risk, sets the record window, names what is excluded, and fits the time and people you have. If your scope could describe any site on any day, it is not scoped.

---

## Roles and responsibilities: who plays what

A mock inspection has more defined roles than people expect, and casting them deliberately is what makes it feel real.

| Role | Played by | Responsibility |
|---|---|---|
| Mock inspector(s) | Senior QA, external consultant, or staff from another site | Drives the inspection, asks the hard questions, writes observations, classifies severity |
| Front room lead / host | Site QA lead or designated inspection host | Manages the room, receives requests, controls pacing, protects the dynamic |
| SME presenters | Process, lab, validation, IT owners | Answer in their area, demonstrate systems, defend records |
| Scribe | QA associate | Captures every question, request, answer, and document number in real time |
| Back room (war room) lead | Experienced QA | Triages document requests, assigns runners, screens documents before they go to the front |
| Runners / document retrievers | QA, document control | Pull, screen, and deliver requested records on the clock |
| Observers / evaluators | QA management, trainers | Watch staff behavior, note coaching gaps, do not interfere |
| Program owner | Inspection readiness lead or QA head | Owns the plan, the scope, the report, and the CAPA tracking afterward |

Two casting choices drive realism. First, the mock inspector should not be the person who runs the area being inspected; ideally they come from outside the site or from an external party, because an internal owner cannot un-know where the bodies are buried and will unconsciously steer around them. Second, the back room should be staffed by people who will actually staff the real back room, because the back room is where most real inspections are won or lost and it needs the reps.

Roles tie back to your formal accountability map. See [gxp-roles-responsibilities](/articles/gxp-roles-responsibilities) for how quality unit, SME, and management responsibilities are defined, and [managing-a-live-inspection](/articles/managing-a-live-inspection) for how these same roles operate when the inspector is real.

---

## Designing the front room and the back room

Real inspections in the pharma world run on a two-room model, and your mock has to rehearse both because they fail differently.

### The front room

The front room is where the inspector and SMEs sit. The design goals are control, calm, and accuracy. In the mock you are testing whether your staff:

- Answer the question asked, and only the question asked. Over-answering is the most common front-room failure and it volunteers scope you did not need to give.
- Say "I don't know, I will find out" instead of guessing. A confident wrong answer is worse than an honest unknown.
- Avoid speculation, blame, and editorializing about why something happened.
- Pause and let the host manage document requests rather than diving for a binder.
- Keep a consistent story across people. If two SMEs describe the same process differently, the inspector pulls that thread.

The mock inspector should deliberately probe these failure modes: ask an open-ended "walk me through everything that happens here," then narrow. Ask a question slightly outside the SME's lane to see if they guess. Re-ask a question answered earlier by someone else to test consistency.

### The back room

The back room receives every document request, finds the record, screens it, and decides what goes to the front room. Its design goals are speed, accuracy, and judgment. In the mock you are testing:

- **Retrieval time.** How long from request to document in the inspector's hand. A real inspector reads delay as a sign records are not controlled or not where they should be. Measure it.
- **Screening.** Before a record goes forward, someone competent reviews it for completeness, for an unexplained anomaly the inspector will spot, and for whether it is the right version. A back room that forwards documents unscreened is how a small request turns into a new line of inquiry.
- **Tracking.** A request log so nothing is lost and the same document is not re-pulled three times.
- **Communication discipline.** The back room and front room coordinate through the host, not through side conversations the inspector can overhear.

A worked example of a back-room request log:

| Req # | Time requested | Document requested | Owner | Retrieved | Screened by | To front room | Notes |
|---|---|---|---|---|---|---|---|
| 12 | 09:42 | Batch record lot 23B-114 | Production | 09:51 | QA-2 | 09:55 | Complete, no flags |
| 13 | 09:48 | OOS investigation INV-0231 | QC | 10:14 | QA-1 | held | RCA section thin, prep statement before release |
| 14 | 10:03 | Calibration cert balance BAL-07 | Metrology | 10:07 | QA-2 | 10:09 | Current, in date |

Request 13 is the teachable moment: the back room caught a weak investigation before it went forward, exactly the catch you want the mock to rehearse. See [managing-a-live-inspection](/articles/managing-a-live-inspection) for the full front-room/back-room operating model.

---

## Building the mock inspection plan

The plan is the controlled document that makes the mock repeatable and defensible. Treat it like a protocol.

Contents of a mock inspection plan:

1. **Purpose and scope.** Systems, areas, depth, style, record window, exclusions, the readiness hypothesis being tested.
2. **Regulatory basis.** Which inspection type you are simulating (PAI, routine GMP, for-cause, GCP) and the model you are scoring against (the six systems for drug GMP, or the relevant GCP/GLP framework).
3. **Roles and assignments.** Named people in each role above.
4. **Schedule.** Day-by-day, hour-by-hour agenda: opening meeting, tours, system reviews, record reviews, daily wrap, closing meeting.
5. **Scenario and persona.** The inspector persona and the storyline (covered below).
6. **Scoring methodology.** Severity definitions and how findings will be classified.
7. **Logistics.** Front room location, back room location, document delivery path, system access for the inspector, scribe templates.
8. **Reporting and CAPA plan.** How findings convert to a report and into tracked corrective actions with owners and due dates.
9. **Confidentiality and tone.** A clear statement that findings are for improvement, not for individual discipline, so people answer honestly. This single paragraph determines whether you get a real result or a defensive one.

Acceptance criteria for the plan: a competent QA person who was not involved could read it and run the mock, score it the same way you would, and produce a report that maps to real citation severity.

---

## Personas and role play: making the inspector feel real

The persona is the part most programs skip, and skipping it is why mocks feel fake. A real inspector is not a checklist reader. They have a style, a focus, and a way of following threads.

Design at least one persona before the mock and brief the mock inspector to play it consistently. Useful persona dimensions:

- **Focus area.** Data integrity hawk, contamination-control specialist, investigations skeptic, computerized-systems specialist. Match the persona to your scope and to current citation trends.
- **Questioning style.** The thread-puller who starts broad and narrows. The document-driven inspector who reads first and asks second. The floor-walker who learns from watching operators, not from binders.
- **Pace and pressure.** Patient and quiet, or fast and demanding. Both happen in real life and your staff should rehearse both.

### Thread-pulling: the technique to rehearse

The behavior that most distinguishes a real inspection from a binder review is thread-pulling: the inspector starts at one record and follows it across systems until something does not reconcile. Your mock inspector must do this on purpose. A classic thread:

1. Pick a batch record at random from the record window.
2. A deviation is referenced in it. Pull the deviation.
3. The deviation triggered a CAPA. Pull the CAPA and check whether its effectiveness was verified (see [capa-effectiveness-verification](/articles/capa-effectiveness-verification)).
4. The investigation cited an OOS result. Pull the OOS investigation and check the root cause and whether the lab error was confirmed or assumed (see [oos-investigation-process](/articles/oos-investigation-process)).
5. The OOS involved an instrument. Pull the instrument's calibration and the audit trail for the run (see [chromatography-data-system-integrity](/articles/chromatography-data-system-integrity) and [audit-trail-design-and-review](/articles/audit-trail-design-and-review)).
6. Check whether training records support that the analyst was qualified (see [training-program-gxp](/articles/training-program-gxp)).

By step 4 or 5, most sites have surfaced a real gap: a CAPA closed without effectiveness verification, an OOS root cause that blamed the analyst without proof, an audit trail nobody had reviewed. That single thread, rehearsed, is worth more than a hundred binder checks.

Brief the SME presenters that the mock is testing real behavior. Do not script their answers. The point is to see what they actually say.

---

## Scoring: classifying findings the way a regulator would

A mock that produces a list of "things we noticed" is not a mock; it is a tour. The value comes from scoring each finding against the severity scale a real inspection uses, so management can triage.

### Use the regulatory severity language

Score against recognized classification rather than inventing your own colors. In the EU/PIC/S system, findings are classified as **critical, major, or other** (sometimes "minor"). A critical deficiency is one that produces, or significantly risks producing, a product harmful to the patient, or that involves fraud or data integrity falsification. A major deficiency is a significant departure from GMP or a non-critical deficiency that is part of a pattern. Other deficiencies are departures that are neither critical nor major.

In the US, a real inspection produces 483 observations (which are the investigator's documented observations, not a formal severity grade) and an overall district classification of NAI (No Action Indicated), VAI (Voluntary Action Indicated), or OAI (Official Action Indicated). For a mock, the cleanest approach is to classify each finding as critical/major/minor using the PIC/S definitions, then separately estimate what an FDA investigator would likely document as a 483 observation and what overall classification the site would earn. This gives management both the severity and the likely real-world consequence.

See [audit-finding-classification](/articles/audit-finding-classification) for the full classification logic and [fda-vs-ema-inspection-dynamics](/articles/fda-vs-ema-inspection-dynamics) for how the two systems differ in practice.

### A worked scoring table

| Finding | System | Description | Severity | Likely real outcome | Basis |
|---|---|---|---|---|---|
| MF-01 | Laboratory | Audit trail for a chromatography sequence had not been reviewed for 8 weeks; one aborted run not investigated | Critical | Likely 483; data integrity theme | 21 CFR 211.194; audit trail review expectation |
| MF-02 | Quality | CAPA for a repeat deviation closed without documented effectiveness check | Major | Likely 483 | 21 CFR 211.192; ICH Q10 |
| MF-03 | Production | Operator described a step differently than the batch record sequence | Major | Possible 483 | 21 CFR 211.100; procedure not followed |
| MF-04 | Materials | Two sampling tools without current calibration stickers in a sample room | Minor | Note, possible 483 if pattern | 21 CFR 211.160(b)(4) |
| MF-05 | Facilities | Gowning step performed out of sequence by one operator during tour | Minor | Coaching | Local SOP |

Notice MF-01 and MF-03 are not document problems; they are behavior and data-integrity problems that only a realistic, thread-pulling, floor-walking mock surfaces. A binder review would have missed both.

### Acceptance criteria for scoring

Scoring is sound when every finding has a description specific enough to act on, a severity tied to a definition (not a gut feel), a cited basis (regulation, standard, or SOP), and a defensible link to a likely real-world consequence. "Lab looked disorganized" is not a finding. "Aborted HPLC run on 2026-04-14 not documented or investigated, audit trail unreviewed for 8 weeks, ref sequence 23-0412" is a finding.

---

## The mock inspection report

The report is the deliverable management acts on. Keep it factual and prioritized. Contents:

1. **Executive summary.** Overall readiness assessment, the headline gaps, and a clear statement of likely outcome if a real inspection happened today.
2. **Scope as executed.** What was actually covered versus planned, and what was not.
3. **Findings register.** The scored table, ordered by severity.
4. **Systemic themes.** Patterns across findings. Three minor findings about uncontrolled documents in three areas is one major systemic finding about document control, not three minor ones. Regulators think in patterns; your report should too.
5. **Positive observations.** What was strong. This is not flattery; it tells management where not to over-invest remediation effort, and it keeps the program from being purely punitive.
6. **Behavioral observations.** Front-room and back-room performance: over-answering, retrieval times, story consistency. These rarely fit the findings table but matter enormously.
7. **Recommendations and CAPA seed list.** Each finding mapped to a proposed corrective action, owner, and priority.

Write the report within days while memory is fresh. A report that lands three weeks later has lost half its value and most of its credibility.

---

## Remediation tracking: where most programs fail

The most common failure of a mock inspection program is not in the mock; it is what happens after. A report is produced, everyone agrees it was useful, and six months later the same gaps are open when the real inspector arrives. The fix is to route every finding into your formal CAPA system, not a side spreadsheet that nobody owns.

### How to track

- **Convert findings to CAPAs.** Each major and critical mock finding becomes a tracked corrective action in the same system you use for real deviations and audit findings (see [what-is-a-capa](/articles/what-is-a-capa) and [deviation-management](/articles/deviation-management)). Minor findings can be a tracked action list, but do not let them vanish.
- **Assign a named owner and a real due date.** Not "QA." A person, by name, with a date that has consequences.
- **Address root cause, not the symptom.** If the mock found one unreviewed audit trail, the fix is not "review that audit trail." It is "why did the audit trail review process not catch this," which usually points to a procedure, a workload, or a training gap. See [root-cause-analysis-techniques](/articles/root-cause-analysis-techniques).
- **Verify effectiveness.** For critical and systemic findings, plan an effectiveness check: a follow-up review or a re-test at a defined interval that proves the fix held. See [capa-effectiveness-verification](/articles/capa-effectiveness-verification).
- **Track to closure with metrics.** Report open mock findings in management review (see [management-review-q10](/articles/management-review-q10)) so leadership sees the aging. An overdue critical mock finding is a leadership problem, not a QA problem.

### A worked remediation tracker

| Finding | CAPA ID | Root cause | Action | Owner | Due | Status | Effectiveness check |
|---|---|---|---|---|---|---|---|
| MF-01 | CA-2026-118 | Audit trail review SOP had no defined frequency for sequence-level review | Revise SOP, add weekly review with QA sign-off | QC Lab Lead | 2026-07-15 | Open | Re-audit 3 sequences at 60 and 120 days |
| MF-02 | CA-2026-119 | CAPA closure form did not force an effectiveness field | Update form to require effectiveness plan before closure | QA Systems | 2026-07-01 | Open | Sample 10 closed CAPAs at 90 days |
| MF-03 | CA-2026-120 | Batch record step ambiguous; operator trained to memory not text | Clarify step wording, retrain line | Production Lead | 2026-06-30 | Closed | Observe 5 executions |

Acceptance criteria for remediation: every critical and major finding has an owner, a due date, a root-cause-level action, and a defined effectiveness check, and the open list is reported up the chain until closed. If your mock findings live and die in a PDF, you have an audit, not a program.

---

## Running the day: a step-by-step sequence

Putting the pieces in order, a single mock inspection day runs like this:

1. **Pre-brief (private).** Mock inspector and program owner confirm persona, scope, and the threads to pull. Front room and back room confirm roles and the document delivery path. Set up the scribe template and the back-room request log.
2. **Opening meeting.** Mock inspector states the persona's scope and asks for the standard opening documents: site master file or equivalent, organization chart, list of products, recent inspection history. This rehearses the real opening, where what you hand over sets the tone.
3. **Tour.** Floor walk of in-scope areas. Inspector watches operators, asks open questions, notes housekeeping, flow, and behavior. Most data-integrity and procedure-following findings start here, not in records.
4. **System and record review.** Inspector pulls records and pulls threads. Back room runs. Scribe logs every request and answer. This is the core block; protect the most time for it.
5. **Daily wrap (private).** Inspector and evaluators consolidate the day's observations, classify severity, and decide the next day's threads. Program owner notes behavioral coaching points.
6. **Closing meeting.** Inspector reads out findings as they would in a real closeout, and the front room practices receiving findings without arguing, without over-committing, and without conceding more than the finding states. How a site receives findings is itself a skill worth rehearsing.
7. **Report and CAPA conversion** in the following days.

Time discipline matters. A mock that runs to 7 pm because nobody managed the clock teaches bad habits. Real inspections are paced; rehearse the pacing.

---

## Common mistakes and real finding patterns

These are the patterns that recur across mock programs and that map to what real inspectors cite.

- **The friendly mock.** The inspector is an insider who steers around known weak spots and asks soft questions. Result: green report, red real inspection. Fix: use an external or cross-site inspector and an honest persona.
- **Binder-only mocks.** The mock checks documents and never walks the floor or watches behavior. It misses exactly the data-integrity, procedure-following, and over-answering failures that dominate real 483s. Fix: tour, role-play, thread-pull.
- **No scoring.** Findings are a flat list with no severity. Management cannot triage, so nothing gets prioritized. Fix: classify against critical/major/minor with a cited basis.
- **No back-room rehearsal.** Document retrieval is slow and unscreened in the real inspection because nobody practiced it. Fix: staff the mock back room with the real back-room team and measure retrieval time.
- **Findings that die in a PDF.** The biggest one. No CAPA conversion, no owners, no effectiveness checks, same gaps at the real visit. Fix: route into the formal CAPA system with management-review visibility.
- **Punishing honesty.** Staff sense the mock is a performance review and stop answering honestly. The mock then measures acting, not readiness. Fix: state in writing and in the opening that findings drive improvement, not discipline.
- **Mock scope that never tests the weak area.** The program keeps re-testing the strong lab and never the messy area everyone avoids. Fix: scope from evidence (open deviations, repeat CAPAs), which points you at the weak area by design.

Real inspection finding themes the mock should be hunting for, because they are what regulators cite most: inadequate investigations and OOS handling, data integrity and audit-trail review gaps, CAPAs without effectiveness verification, procedures not followed on the floor, and uncontrolled or out-of-date documents. Aim your persona and threads at these. See [fda-warning-letters-patterns](/articles/fda-warning-letters-patterns) and [oos-investigation-process](/articles/oos-investigation-process).

---

## Interview-ready: questions and strong answers

**"What is the difference between a mock inspection and an internal audit?"**
An internal audit checks conformance of systems and records to procedures and standards. A mock inspection rehearses the inspection itself: the human dynamics, front-room answers, back-room retrieval, and whether the story holds across people under questioning. You need both. The audit finds documentation gaps; the mock finds behavioral and readiness gaps an audit cannot see.

**"How do you scope a mock inspection?"**
From evidence, not comfort. I start with the regulatory trigger (a pending application, time since last inspection), then layer in internal signal (open deviations, repeat CAPAs, recent changes), then align to current citation trends. I fix the systems, areas, depth, record window, and what is explicitly out of scope, in writing, and I tie each in-scope area to a documented risk. A scope that could describe any site on any day is not a scope.

**"What model would you score findings against?"**
I classify each finding as critical, major, or minor using the PIC/S definitions, where critical means likely patient harm or data falsification, then separately estimate what an FDA investigator would likely document as a 483 observation and the overall NAI/VAI/OAI classification. Each finding gets a specific description and a cited basis, a regulation or SOP, so management can triage by real severity rather than by tidiness.

**"What is thread-pulling and why does it matter in a mock?"**
It is following one record across systems until something does not reconcile: batch record to deviation to CAPA to OOS to instrument audit trail to training record. It matters because real inspectors work this way and most genuine gaps, a CAPA closed without effectiveness verification, an OOS that blamed the analyst without proof, only surface when you follow the trail. A mock that does not pull threads is a binder review wearing a costume.

**"Your mock produced a clean report and then the real inspection found a critical. What went wrong?"**
Almost always one of three things: the mock did not test the area that was cited (scope gap), the mock was a friendly insider walkthrough that steered around the weakness, or the mock found something months earlier, it went into a report, and the finding was never converted into a tracked CAPA with an owner and an effectiveness check. The third is the most common. The fix is routing every mock finding into the formal CAPA system with management-review visibility, not a side spreadsheet.

**"How do you make sure people answer honestly in a mock?"**
State in writing and verbally at the opening that the mock exists to find and fix gaps, not to evaluate individuals, and protect that promise. The moment staff believe a wrong answer goes in their file, they perform instead of answer, and the mock measures acting. I also keep behavioral coaching separate from individual discipline.

**"How do you handle a finding at the closeout?"**
The same way I would coach the front room to handle a real one: acknowledge the observation factually, do not argue the inspector out of it, do not over-commit to fixes on the spot, and do not concede beyond what the finding actually states. Then capture it precisely and take it into the formal process. Over-committing at closeout creates promises you then have to defend.

---

## Practical tips

- Run smaller, scoped mocks more often rather than one giant annual event. A two-day lab-focused mock that you actually close out beats a week-long site mock that exhausts everyone and produces a report nobody acts on.
- Rotate the inspector. The same internal person playing inspector twice develops the same blind spots as the site. Bring in cross-site or external eyes periodically.
- Measure back-room retrieval time and publish it. It is the one hard number that predicts real-inspection pain, and it improves fast once people see it.
- Rehearse the unknown answer. Drill SMEs on saying "I don't know, I will confirm and come back" until it is reflexive. It is the highest-value sentence in any inspection.
- Keep a standing inspection-readiness state between mocks (current org charts, key SOPs indexed, a maintained document request map) so a mock is a test of readiness, not a scramble to build it.
- Tie mock findings into management review so leadership owns the aging of corrective actions. Visibility at the top is what keeps findings from dying in a PDF.

### Related reading

- [fda-inspection-readiness](/articles/fda-inspection-readiness) and [inspection-readiness](/articles/inspection-readiness) for the program the mock supports
- [managing-a-live-inspection](/articles/managing-a-live-inspection) for front-room and back-room operation when the inspector is real
- [audit-finding-classification](/articles/audit-finding-classification) for the severity logic behind scoring
- [internal-audit-program](/articles/internal-audit-program) and [qms-self-audit-checklist](/articles/qms-self-audit-checklist) for the audit side of readiness
- [483-warning-letter-response](/articles/483-warning-letter-response) and [fda-483-response-strategy](/articles/fda-483-response-strategy) for what happens if findings reach a real inspection
- [capa-effectiveness-verification](/articles/capa-effectiveness-verification) and [root-cause-analysis-techniques](/articles/root-cause-analysis-techniques) for closing mock findings properly
- [fda-vs-ema-inspection-dynamics](/articles/fda-vs-ema-inspection-dynamics) for differences between the systems you may simulate
