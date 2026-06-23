---
title: "Root Cause Analysis in GxP: 5 Whys, Fishbone, Fault Tree, and How to Pick One"
description: "A working guide to root cause analysis for pharma and biotech quality. Covers 5 Whys, Ishikawa, fault tree, Is/Is-Not, contributing versus root cause, and how to write an RCA that survives an inspection."
pubDate: 2026-06-20
tags: ["root cause analysis", "deviation management", "capa", "investigations", "quality assurance", "human error", "rca techniques"]
pillar: "quality-assurance"
tier: "Intermediate"
---

Most deviation investigations fail at the same place. The team finds a cause that is true, fixes it, closes the record, and the same event recurs three months later. The cause was real but it was not the root cause, and the CAPA was aimed at the wrong target. Root cause analysis (RCA) is the discipline that separates a symptom from the thing that, if corrected, actually stops recurrence. It is the single skill that quality investigators are tested on most, in the job and in the interview, because a weak RCA is the most common reason a regulator rejects an investigation.

This article covers what RCA is, why regulators expect it, the three techniques you will use most (5 Whys, Ishikawa/fishbone, fault tree), the Is/Is-Not comparative method for scoping a problem, how to tell a contributing factor from a root cause, and how to write an RCA that holds up under inspection. It assumes you already understand the deviation and CAPA machinery around it. If you do not, start with [deviation management](/articles/deviation-management), [what is a CAPA](/articles/what-is-a-capa), and the [OOS investigation process](/articles/oos-investigation-process), then come back.

---

## What RCA is and why it is required

Root cause analysis is a structured method for identifying the most basic, correctable reason an event occurred, such that addressing it prevents recurrence. The keyword is *correctable*. "Operator made an error" is a true statement and a useless root cause, because you cannot correct human fallibility. "The batch record step sequence allowed the operator to add buffer before the pH check, with no forcing function" is correctable. That distinction is the whole game.

### The regulatory basis

No single regulation says "perform a 5 Whys." RCA is an expectation that sits inside the CAPA and investigation requirements across the GxP world.

- **US cGMP, 21 CFR 211.192**, requires that any unexplained discrepancy or batch failure "shall be thoroughly investigated" and the investigation "shall extend to other batches" that may be associated. "Thoroughly" is the operative word inspectors lean on. An investigation that names a cause without showing how it was reached is not thorough.
- **ICH Q10 (Pharmaceutical Quality System, 2008)** names a CAPA system as a core element and expects the degree of investigation effort to be commensurate with the risk. Q10 is where the proportionality principle lives.
- **ICH Q9(R1) (Quality Risk Management, 2023 revision)** is the basis for scaling RCA rigor to risk. A minor, well understood event does not need a fault tree. A repeat sterility failure does.
- **EU GMP Chapter 1 (Pharmaceutical Quality System)** requires that deviations be investigated and that the root cause or causes be determined, and **EU GMP Annex 16** makes the Qualified Person accountable for ensuring deviations affecting a batch are properly investigated before release. See [qualified person batch release under Annex 16](/articles/qualified-person-batch-release-annex-16).
- The **FDA CAPA inspection approach** expects documented cause determination before corrective action, and it speaks of identifying the cause or *causes* of nonconforming product and other quality problems. Note the plural: the system anticipates more than one cause. For combination products and software as a medical device, the device-side quality system standards (the QMSR aligned to ISO 13485, with a compliance date of February 2, 2026, and ISO 13485:2016 clause 8.5) carry the same documented cause-determination expectation.

The common thread: the regulation does not mandate a named tool, it mandates that you find the real cause, prove how you found it, and act on it. The tool is your means of getting there defensibly.

### The quality rationale

RCA exists because of recurrence cost and patient risk. An investigation that fixes a symptom leaves the failure mode live. In a sterile fill, in a cell therapy batch where the patient material is irreplaceable, or in a data integrity breach, a recurrence is not an inconvenience, it is a potential product impact or a patient impact. RCA is also the mechanism that turns a single event into a systemic lesson. Done well, it feeds trending, [quality risk management](/articles/quality-risk-management), and [management review under Q10](/articles/management-review-q10). Done badly, it produces a graveyard of closed records and repeat findings.

---

## Before you pick a technique: scope and characterize the problem

The most common failure in RCA is not choosing the wrong tool. It is starting the tool before the problem is defined. A 5 Whys on a fuzzy problem statement produces a fuzzy root cause.

### Write a sharp problem statement

A usable problem statement answers: what, where, when, how big, and how it was detected. It is factual and free of any presumed cause.

Weak: "Tablet weight problem on the press."

Strong: "During compression of Lot 24-0417 on Press 3 on 14-Mar, 18 of 200 in-process tablet weight checks over a 40-minute window exceeded the upper control limit of 312 mg (max 318 mg). Detected by the in-process QC check at 10:20. No other presses or lots affected."

The strong version already tells you the event is bounded in time, equipment, and lot, which immediately shapes the investigation.

### Use Is / Is-Not to bound the problem (Kepner-Tregoe)

Is/Is-Not is a comparative specification borrowed from the Kepner-Tregoe problem analysis method. You describe exactly where the problem IS and, crucially, where it could be but IS NOT. The contrast between the two columns points at the cause.

| Dimension | IS | IS NOT | What the contrast suggests |
|---|---|---|---|
| What object | Press 3, lots run after 09:40 | Press 1, 2, 4; lots before 09:40 | Something changed on Press 3 around 09:40 |
| Where (location) | Upper weight limit exceeded | Lower limit, hardness, thickness | A force/fill issue, not a granulation issue |
| When | Single 40-min window, then stopped | Continuous; other shifts | A transient condition, not a standing setup error |
| Extent | 18 of 200 checks | All tablets; other products | Intermittent mechanism, not a constant one |

The right-hand column is the discipline. By forcing yourself to state where the problem is *not* despite an opportunity to occur, you eliminate whole branches of cause. Here the IS-NOT pattern (only Press 3, only a 40-minute window, only the upper limit) rules out granulation, formulation, and operator-wide procedure, and points toward a transient mechanical or setup event on one press. You have done real elimination before drawing a single fishbone bone.

Is/Is-Not is the most underused tool in pharma RCA and the one that most impresses an interviewer, because it shows you scope before you theorize.

---

## Technique 1: 5 Whys

The 5 Whys is an iterative interrogative method: state the problem, ask why it happened, and for each answer ask why again, until you reach a cause that is both correctable and, if removed, would prevent recurrence. "Five" is a guideline, not a rule. Sometimes it is three, sometimes seven.

### When to use it

Use 5 Whys for simple to moderate events with a single, fairly linear causal chain: a documentation error, a missed step, a single equipment behavior. It is fast, needs no software, and reads clearly in a report. It is poor for events with multiple interacting causes, where it collapses a branching reality into one false line.

### How to do it, step by step

1. Start from the sharp problem statement, not a vague one.
2. Ask "why did this happen?" and answer with a verified fact, not a guess. Each answer must be evidenced (a record, an interview, a measurement), or marked as a hypothesis to be tested.
3. Take that answer and ask why *it* happened.
4. Continue until the next "why" would leave the boundary of your system or land on something not correctable (for example, "because gravity exists"). The last correctable, recurrence-preventing answer is your candidate root cause.
5. Validate by reversing: read it back as "therefore" statements. If "because the SOP had no forcing function, therefore the operator could skip the pH check, therefore the buffer was added early, therefore the lot failed" reads cleanly, the chain holds. If a "therefore" does not follow, you have a gap.
6. Run a sufficiency test: if I correct only the bottom item, would this event have been prevented? If yes, you have a root cause. If no, you stopped too early or you have parallel causes that need a fishbone.

### Worked example

Problem: A stability sample for Lot 23-0912 was pulled 9 days late, breaching the protocol window.

| Why | Answer (evidenced) |
|---|---|
| Why was the sample late? | The pull task was not on anyone's schedule for that week. |
| Why was it not scheduled? | The stability LIMS did not generate the pull reminder for this lot. |
| Why did LIMS not generate the reminder? | The lot's stability protocol was registered with a start date one month off. |
| Why was the start date wrong? | The analyst keyed it manually from the CoA and transposed the month. |
| Why was a manual transposition possible and undetected? | The LIMS allowed free-text date entry on protocol registration with no second-person verification and no cross-check to the batch record date. |

The bottom answer is correctable and systemic: it is a control gap, not "the analyst made a typo." A CAPA aimed at the typo (retrain the analyst) fixes nothing. A CAPA aimed at the bottom (add a verified-entry control plus a system cross-check) prevents the class of error. Note also the [human error](/articles/human-error-in-deviations) trap: stopping at "analyst transposed the date" would have been the lazy, wrong answer.

### Common mistakes with 5 Whys

- Stopping at human error. "Operator forgot" is almost never a root cause; it is a prompt to ask why the system permitted and depended on memory.
- Single-track tunnel vision when the event actually had two or three independent contributors.
- Unevidenced "whys." Each link must be backed by a fact, or the chain is a story.
- Jumping to the CAPA the team already wanted and reverse-engineering the whys to reach it.

---

## Technique 2: Ishikawa (fishbone / cause-and-effect diagram)

The Ishikawa diagram, named for Kaoru Ishikawa and also called a fishbone or cause-and-effect diagram, organizes possible causes into categories so the team brainstorms breadth before depth. The effect (the problem) is the fish head; the major cause categories are the bones.

### When to use it

Use the fishbone when the cause is not obvious, when multiple categories could be involved, or when you want a structured group brainstorm that does not anchor on the first idea. It is the right opening move for moderate-to-complex events and the natural partner to 5 Whys: fishbone for breadth, then 5 Whys down the most likely bone for depth.

### The category sets

The classic manufacturing set is the **6 Ms**: Man (people), Machine (equipment), Method (procedure), Material, Measurement, Mother Nature (environment). For lab, clinical, or computerized-system events, adapt the categories. A common GxP-friendly set:

- **People**: training, experience, fatigue, staffing, supervision
- **Procedure/Method**: SOP clarity, batch record sequence, ambiguity, missing forcing functions
- **Equipment/System**: calibration, maintenance, software defect, configuration
- **Material**: raw material variability, reagent expiry, container
- **Measurement**: method capability, instrument qualification, sampling
- **Environment**: temperature, humidity, cleanroom state, utilities

For data integrity events, swap in categories such as system access controls, [audit trail](/articles/audit-trail-design-and-review) configuration, time/clock control, and data lifecycle.

### How to do it, step by step

1. Put the verified problem statement in the fish head.
2. Draw the category bones. Pick a set that fits the event; do not force all 6 Ms if some are irrelevant.
3. Brainstorm candidate causes onto each bone. Ask the team for every plausible contributor, not just the likely one. Suspend judgment during this phase.
4. For each candidate, ask "could this have caused or contributed to the effect?" and tag it: confirmed, ruled out, or to-be-investigated. This is where Is/Is-Not data does heavy lifting, ruling causes in or out with evidence.
5. Take the surviving high-likelihood bones and drive each down with 5 Whys to reach correctable causes.
6. Document what you ruled out and why. The bones you eliminate are evidence of thoroughness; inspectors value a documented "considered and excluded" as much as the cause you found.

### Worked example (abbreviated)

Effect: Environmental monitoring excursion, action-limit exceedance for total particulates in a Grade B corridor.

| Bone | Candidate causes | Disposition |
|---|---|---|
| People | Gowning error; excess personnel in room | Ruled out: gowning records and badge logs show 2 staff, both compliant |
| Equipment | HVAC HEPA breakthrough; differential pressure loss | To investigate: BMS trend shows a 6-minute dP dip at 14:02 |
| Method | Cleaning not performed | Ruled out: cleaning record complete and verified |
| Measurement | Particle counter miscalibration | Ruled out: counter calibration current, challenge passed |
| Material | Transfer of unsanitized cart | Confirmed contributor: cart transfer logged at 14:01 |
| Environment | Adjacent door held open | Confirmed contributor: door alarm logged 14:00-14:05 |

This event has *three* live threads (dP dip, cart, door) that a 5 Whys alone would have missed. That is exactly when you need the fishbone first. See [environmental monitoring program](/articles/environmental-monitoring-program) and [microbial ID and EM excursions](/articles/microbial-id-and-em-excursions) for the EM-specific investigation flow.

### Common mistakes with Ishikawa

- Treating the diagram as the finished RCA. The fishbone lists *possible* causes; it does not identify the root cause until each branch is evidenced and the survivors are driven to depth.
- Brainstorming with no follow-through disposition, leaving twenty unverified candidates.
- Letting one loud voice anchor the team on a single bone before breadth is captured.

---

## Technique 3: Fault Tree Analysis (FTA)

Fault tree analysis is a top-down, logic-gate method. You place the undesired top event at the top and work downward through AND and OR gates to the basic events that can cause it, building a Boolean logic model of failure. It is the most rigorous of the three and the only one that handles combinations of conditions explicitly. FTA is described in **IEC 61025** and is one of the recognized methods referenced in **ICH Q9(R1)** for quality risk management.

### When to use it

Reach for FTA when the event is serious, complex, or involves multiple conditions that must coincide; when you need to show an inspector a defensible logical structure; or when you want to evaluate which combinations of failures are credible. Typical triggers: sterility assurance failures, a repeat critical deviation, a serious data integrity breach, or a complex equipment failure where several safeguards were defeated at once. It is overkill for a single transposed date.

### AND vs OR gates, the heart of FTA

- An **OR gate** means any one of the inputs alone causes the event above it. Independent single-point failures.
- An **AND gate** means all inputs must occur together for the event above to happen. This is how you model defense in depth: a breach required multiple barriers to fail simultaneously.

The AND gate is what makes FTA powerful for GxP. A well designed process has layered controls. If your top event happened, FTA forces you to identify which barriers failed and whether they failed independently or from a common cause.

### How to do it, step by step

1. Define the top event precisely (for example, "non-sterile unit released to market"). Make it specific and singular.
2. Identify the immediate, necessary, and sufficient causes one level down. Connect them with the correct gate (AND if all are needed, OR if any suffices).
3. Decompose each of those down another level, again choosing gates, until you reach basic events: things you can verify directly and will not decompose further (a component failure, a missed step, a defeated alarm).
4. Populate with evidence. Mark each basic event as occurred, not-occurred, or unknown, based on records.
5. Read the **minimal cut sets**, the smallest combinations of basic events that together cause the top event. A cut set of one basic event is a single point of failure and a priority. A cut set behind an AND gate tells you how many barriers actually failed.
6. Identify **common-cause** contributors, a single underlying issue that defeats several "independent" barriers at once (for example, one untrained shift defeats both the performer and the verifier check).
7. Direct CAPA at the cut sets, prioritizing single-point failures and common causes.

### Worked example (text form)

Top event: Out-of-specification assay result reported on the Certificate of Analysis without a valid investigation.

- Top event is fed by an **AND** gate: it required (A) an erroneous result generated AND (B) the error not caught before CoA issue.
- (A) erroneous result is fed by an **OR** gate: sample prep error OR instrument malfunction OR calculation error in the spreadsheet.
- (B) not caught is fed by an **AND** gate: the second-person review did not detect it AND the [chromatography data system](/articles/chromatography-data-system-integrity) audit trail was not reviewed AND there was no automated spec-limit flag.

Reading the tree: the result reaching the CoA required both an error *and* a triple review failure. The minimal cut sets show the review layer is the bigger exposure (three controls all permeable at once). A common cause emerges: the same analyst performed and self-reviewed under a procedure that allowed it, defeating two barriers with one condition. CAPA priority becomes the review architecture (independent review, mandated audit-trail review, automated flagging), not just the prep error.

### Common mistakes with FTA

- Mixing up AND and OR gates, which inverts the logic and the conclusion.
- Stopping decomposition too high, so "basic events" are still vague.
- Ignoring common-cause failures, the most dangerous omission, because they make multiple "independent" barriers fail together.
- Building an elaborate tree with no evidence populated, which is just a drawing.

---

## Choosing the right technique

There is no single best tool. The choice scales with event complexity and risk, consistent with the [quality event triage](/articles/quality-event-classification-triage) and [audit finding classification](/articles/audit-finding-classification) you have already done. A practical decision guide:

| Situation | Primary technique | Why |
|---|---|---|
| Single linear cause, low/moderate risk (a documentation error, one missed step) | 5 Whys | Fast, clear, sufficient for a single chain |
| Cause unclear, several categories possible | Ishikawa first, then 5 Whys on live bones | Breadth before depth; avoids tunnel vision |
| Serious or repeat event; multiple conditions had to coincide | Fault Tree Analysis | Models AND/OR logic and common causes |
| Need to bound/scope before theorizing | Is / Is-Not (Kepner-Tregoe) | Eliminates branches with evidence first |
| Process-step failure mode hunting (often during prevention, not after an event) | FMEA (see below) | Proactive, severity x occurrence x detection |

Two more points on selection. First, the tools combine. The strongest investigations often run Is/Is-Not to scope, fishbone to generate breadth, and 5 Whys or FTA to reach depth on the survivors. Treating them as exclusive is a beginner mistake. Second, match rigor to risk per **ICH Q9(R1)**. Using a fault tree on a trivial event wastes effort and signals poor judgment; using a 5 Whys on a sterility failure signals worse judgment and gets cited.

### A note on FMEA

Failure Mode and Effects Analysis (FMEA) is a *proactive* risk tool, not strictly an RCA tool. It scores potential failure modes by severity, occurrence, and detection to prioritize prevention. You will see it in [quality risk management](/articles/quality-risk-management), process and equipment risk assessments, and combination-product design risk work. It is mentioned here because interviewers test for the difference: RCA is reactive (an event happened, find why), FMEA is prospective (what could happen, prioritize before it does). Confusing the two is a common stumble.

---

## Contributing cause vs root cause vs direct cause

This distinction is where many investigations and many candidates fall down. Use precise terms.

- **Direct (immediate) cause**: the event that directly produced the failure. "Buffer added before pH adjustment." It is the proximate mechanism.
- **Contributing cause**: a condition that increased the likelihood or severity but, if removed alone, would not by itself have prevented the event. "End-of-shift time pressure." Real, worth a CAPA, but not sufficient.
- **Root cause**: the most basic correctable cause whose removal prevents recurrence of the event and others like it. "The batch record sequence and SOP permitted addition before the pH check with no forcing function or independent verification."

A clean test: for each candidate, ask "if I remove only this, would the event have been prevented and would the class of event be prevented?" Yes to both: root cause. Yes to severity-reduction only, or only this instance: contributing. Neither: direct cause or symptom.

It is acceptable, and often correct, to conclude there are **multiple root causes** or **no single root cause established** with several contributing causes. Inspectors do not require a single tidy root cause. They require a logically supported conclusion. A forced single root cause on a multi-factor event is itself a finding. What gets cited is the *opposite*: an investigation that declares one cause when the evidence shows several, then under-scopes the CAPA.

---

## Linking RCA to CAPA, effectiveness, and extent of condition

RCA is not the finish line; it is the input to corrective and preventive action. Three connections matter.

1. **CAPA must map to the cause type.** A correction addresses the immediate problem (reprocess, reject, re-pull the sample). A corrective action addresses the root cause to prevent recurrence. A preventive action addresses the same root cause class elsewhere before it occurs. If your RCA found a control gap, "retrain the operator" is not a corrective action for it; it is a correction at best. See [what is a CAPA](/articles/what-is-a-capa).
2. **Extent of condition / extent of the problem.** 21 CFR 211.192 requires the investigation to extend to other potentially affected batches. The same logic extends to other products, lines, systems, and time periods that share the root cause. A root cause in one CDS configuration likely lives in every instance of that configuration. Failing to ask "where else does this cause apply?" is one of the most cited CAPA weaknesses.
3. **Effectiveness verification closes the loop.** A root cause is only proven correct in hindsight, when the CAPA aimed at it demonstrably stops recurrence. Define an effectiveness check with objective criteria and a monitoring period up front. If recurrence continues, the RCA was wrong and reopens. See [CAPA effectiveness verification](/articles/capa-effectiveness-verification).

---

## How to write a defensible RCA

The investigation can be excellent and still get cited if the write-up does not show the reasoning. Inspectors read the record, not your head.

### What goes in the RCA section of an investigation

- **Problem statement**: the sharp, factual statement (what, where, when, magnitude, detection).
- **Timeline**: dated, sourced sequence of relevant events.
- **Scope / extent assessment**: what other batches, lots, products, systems, or periods were assessed and the Is/Is-Not boundaries.
- **Methodology**: which RCA technique(s) used and why that choice fit the event.
- **The analysis itself**: the 5 Whys chain, the fishbone disposition table, or the fault tree, with each link evidenced.
- **Causes considered and ruled out**: explicit, with the evidence that excluded them.
- **Root cause(s) and contributing cause(s)**: clearly labeled and distinguished.
- **Product impact / risk assessment**: the quality and patient-risk evaluation.
- **Link to CAPA**: each cause traced to a specific action, with effectiveness criteria.

### Acceptance criteria: what a good RCA looks like

- The root cause is **correctable and recurrence-preventing**, not a restatement of the symptom and not bare human error.
- Every causal link is **evidenced**, not asserted. A reviewer can trace each "why" to a record, measurement, or interview.
- **Ruled-out causes are documented** with their evidence. Thoroughness is visible.
- The **methodology fits the risk** of the event.
- The **CAPA addresses the root cause**, the extent of condition is assessed, and effectiveness is defined.
- A second reviewer who was not in the room can **follow the logic to the same conclusion** from the record alone. That is the real acceptance test.

### Roles and responsibilities

| Role | Responsibility in RCA |
|---|---|
| Investigation owner / initiator | Drafts the problem statement, gathers facts, drives the analysis, writes the record |
| Area SME / process owner | Provides technical reality, validates that proposed causes are mechanistically plausible, often leads the fishbone |
| QA | Independent oversight; challenges the logic, confirms the root cause is correctable and CAPA maps to it, approves; does not invent the cause for the area |
| Cross-functional team (engineering, validation, microbiology, IT, as relevant) | Brings discipline-specific evidence; for system events, [validation](/articles/process-validation-lifecycle) and IT assess configuration and audit-trail evidence |
| Management | Provides resources and time; ICH Q10 expects them to support proportionate investigation, not to pressure a fast, shallow close |
| Qualified Person (EU) | For batch-impacting deviations, ensures the investigation is adequate before certification under Annex 16 |
| Supplier / CDMO | For events at a contract site, conducts or contributes to the RCA under the quality agreement; the MAH retains oversight. See [CDMO oversight](/articles/cdmo-oversight-quality-agreements) |

QA's independence is the structural safeguard. The area owner is closest to the facts and also closest to the temptation to blame the operator and move on. QA's job is to refuse a root cause that is a symptom and to refuse a CAPA that does not address the cause found.

---

## Common inspection-finding patterns

These are the recurring RCA weaknesses cited across FDA 483 observations, warning letters, and EU GMP non-compliance reports. None require a company name to recognize.

- **Root cause not identified or not supported.** The investigation names a cause but shows no analysis of how it was reached. The classic "the root cause was determined to be operator error" with nothing behind it.
- **Human error as a catch-all.** Repeatedly attributing events to human error without examining the systemic enablers (procedure design, workload, training adequacy, system controls). Regulators treat a high human-error rate as a signal of a weak quality system, not a run of careless people. See [human error in deviations](/articles/human-error-in-deviations).
- **CAPA does not address the root cause.** Retraining a single operator for a systemic design gap; the recurrence that follows is then a second finding.
- **Extent of condition not assessed.** The investigation fixes one batch or one system and never asks where else the cause lives. 211.192 makes the other-batches assessment explicit.
- **No effectiveness check, or a check with no objective criteria.** The CAPA is closed on completion of the action, not on proof it worked.
- **Investigations closed without resolution to meet a timeline.** Premature closure to hit a metric, often visible as a cluster of look-alike deviations each closed as a one-off.
- **Ignoring multiple/contributing causes.** Forcing a single root cause onto a multi-factor event and under-scoping the response.
- **Trending not used.** The same minor event recurring across many records, each investigated in isolation, with no aggregate RCA. See [quality metrics and KPIs](/articles/quality-metrics-and-kpis).

---

## Interview-ready: questions and strong answers

These are the questions interviewers and inspectors actually ask. Answer with structure and a concrete example.

**"Walk me through how you would investigate a deviation."**
State the sequence: secure and assess immediate product impact, write a sharp factual problem statement, build a timeline, scope with Is/Is-Not and an extent-of-condition assessment, choose an RCA technique matched to complexity, evidence each causal link, distinguish root from contributing causes, define CAPA that maps to the root cause, and set an effectiveness check. Mentioning Is/Is-Not and extent of condition unprompted signals maturity.

**"What is the difference between a root cause and a contributing cause?"**
Root cause: the most basic correctable cause whose removal prevents recurrence of the event and its class. Contributing cause: a condition that increased likelihood or severity but would not alone have prevented the event. Add the test: "if I remove only this, is the event prevented?"

**"When would you use a fault tree instead of 5 Whys?"**
When the event is serious or complex and multiple conditions had to coincide, because FTA models AND/OR logic and exposes common-cause failures and single points of failure. 5 Whys assumes a single linear chain and would miss the interactions.

**"An operator skipped a step. What is the root cause?"**
Resist "operator error." The right move is to ask why the system depended on and permitted the skip: was there a forcing function, an independent verification, a clear and current SOP, adequate training, reasonable workload? The root cause is almost always a control or design gap that made the error possible and undetected. This single question separates strong investigators from weak ones.

**"How do you know your root cause is correct?"**
Two ways: the logic is evidenced and a reviewer can reach the same conclusion from the record, and the effectiveness check on the CAPA shows no recurrence over the monitoring period. The CAPA's success is the empirical proof of the RCA.

**"Can there be more than one root cause?"**
Yes. Many events have several, or no single root cause and several contributing causes. Forcing one is itself a finding. The requirement is a logically supported conclusion proportionate to the evidence, not a tidy single answer.

**"How do you handle pressure to close an investigation by a deadline?"**
The timeline serves the quality of the conclusion, not the other way around. If more time is needed to reach a supported root cause, the record documents the justified extension. Premature closure to hit a metric is a known finding pattern and creates worse exposure than a documented extension.

---

## Practical tips

- Get to the floor or the bench fast. Memories and transient conditions decay. A go-and-see within hours beats a conference-room reconstruction days later.
- Interview people as fact-finders, not as suspects. Blame ends candor, and candor is your best evidence source. A no-blame stance is also what generates honest "I did X because the SOP was unclear" answers that reveal the real control gap.
- Write the IS-NOT column. The discipline of stating where the problem could occur but does not is the single highest-yield habit in RCA.
- Distinguish facts from hypotheses on the page. Tag each as evidenced or to-be-verified, and resolve the hypotheses before you conclude.
- Combine tools deliberately: Is/Is-Not to scope, fishbone for breadth, 5 Whys or FTA for depth.
- Always ask "where else?" before you close. Extent of condition is both a regulatory requirement and the difference between fixing an instance and fixing a class.
- Define the effectiveness check before you close, with objective criteria and a monitoring window, not as an afterthought.

---

## Related reading

- [Deviation management](/articles/deviation-management) and [OOS investigation process](/articles/oos-investigation-process) for the records RCA lives inside
- [What is a CAPA](/articles/what-is-a-capa) and [CAPA effectiveness verification](/articles/capa-effectiveness-verification) for what happens after the cause is found
- [Human error in deviations](/articles/human-error-in-deviations) for the most-abused root cause category
- [Quality risk management](/articles/quality-risk-management) for ICH Q9(R1) and scaling rigor to risk
- [Quality event classification and triage](/articles/quality-event-classification-triage) and [audit finding classification](/articles/audit-finding-classification) for deciding how deep to go
- [Out-of-trend investigations](/articles/out-of-trend-investigations) for the aggregate, trend-driven cousin of single-event RCA
- [FDA inspection readiness](/articles/fda-inspection-readiness) and [483 and warning letter response](/articles/483-warning-letter-response) for defending an RCA in front of a regulator
