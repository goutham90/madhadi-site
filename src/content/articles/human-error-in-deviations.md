---
title: "When Human Error Is Not a Root Cause: Investigating and Preventing Repeat Deviations"
description: "Why regulators reject human error as a root cause, and how to run deviation investigations that find the real systemic failure using human-factors analysis, poka-yoke, and CAPA that actually holds."
pubDate: 2026-06-20
tags: ["deviations", "capa", "root-cause-analysis", "human-factors", "quality-assurance", "gmp", "investigations"]
pillar: "quality-assurance"
tier: "Intermediate"
---

"Operator error." "Failure to follow procedure." "Analyst did not adhere to the method." If you have read more than a handful of deviation reports, you have seen these closed out as root cause, signed, and filed. Then the same deviation happens again three months later with a different name in the operator field.

That repeat is the whole problem. When an investigation lands on human error and stops, it has almost always stopped one or two layers above the real cause. The person did something wrong, yes. But why was it possible to do it wrong? Why was it easy? Why did the system let the mistake reach product? Those are the root-cause questions, and "human error" answers none of them.

This article is about how to investigate a deviation properly when a person was involved, how to tell a genuine human-factors finding from a lazy "operator error" closure, why retraining is almost never a corrective action, and how to build CAPA that a regulator will accept and that actually stops the repeat.

---

## Why regulators reject "human error" as a root cause

There is no single regulation that says the words "human error is not a root cause." The rejection is built into the structure of the GMP regulations: they require you to find and fix the cause, and a cause you cannot prevent from recurring is not a cause you have actually found.

### The regulatory hooks

**21 CFR 211.192 (Production record review)** requires that any unexplained discrepancy or failure of a batch to meet specification be **thoroughly investigated**, whether or not the batch was already distributed, and that the investigation extend to other batches and products that may have been associated. "Thoroughly" is the operative word. An investigation that names the operator and stops is not thorough, because it has not established why the error occurred or whether other batches share the same exposure.

**21 CFR 211.22** makes the quality unit responsible for the procedures and controls that govern manufacturing. If a deviation keeps happening, the controls are not working, and that is a quality-unit accountability, not an operator one.

**EudraLex Volume 4, Chapter 1 (Pharmaceutical Quality System)** requires that deviations be investigated to determine root cause and that **corrective and preventive actions** be identified and effectiveness evaluated. ICH Q10 (Pharmaceutical Quality System, 2008) builds CAPA into the quality system as a continual-improvement enabler and expects root-cause analysis "of an appropriate level" based on risk.

**ICH Q9 (Quality Risk Management, R1 2023)** underpins all of this: the depth of investigation and the rigor of the CAPA should match the risk of the deviation. Q9(R1) added explicit language on **subjectivity** in risk decisions, which is directly relevant here, because "blame the operator" is the most common subjective shortcut in the industry.

> Production and control records, including those for packaging and labelling, shall be reviewed... Any unexplained discrepancy... or the failure of a batch or any of its components to meet any of its specifications shall be thoroughly investigated. (21 CFR 211.192)

### The quality rationale

A root cause is, by definition, the thing you can act on so the problem does not come back. Test it: if you fix what you called the root cause, will the deviation recur? If the answer is "yes, the next operator could make the same mistake," then you have not found the root cause. You have found a symptom.

Human beings have a stable, measurable error rate. Under normal conditions a person performing a routine task makes a slip on the order of once in a thousand actions; under stress, time pressure, or a badly designed task, that rate climbs by an order of magnitude or more. This is a known property of people, not a defect in a specific person. A control system that depends on a human never slipping is a control system that is designed to fail. When the investigation says "the operator made an error," it is describing the expected behavior of the population and calling it a surprise.

That is why inspectors push back. They are not being pedantic. A "human error" closure tells them the firm has not understood its own process, has built no defense against a predictable failure mode, and will see the same event again. It is one of the most reliable predictors of repeat findings, which is exactly what an inspection is trying to surface.

---

## What inspectors actually cite

Generic patterns that recur across published inspection observations and warning letters, with no company attached:

- Investigations that **conclude "human error" or "analyst error" without supporting evidence** that a person was the cause, and without examining whether the procedure, equipment, or environment contributed.
- **Retraining listed as the sole corrective action** for repeated deviations, with no analysis of why the original training did not prevent the error.
- **No effectiveness check** on the CAPA, so the firm cannot show the action worked, and the same deviation recurs.
- Investigations that do **not assess other batches or products** with the same exposure (the 211.192 "extend to other batches" requirement).
- **Root cause stated as a restatement of the event** ("the deviation occurred because the line was not cleared") rather than an explanation of why it occurred.
- **No trending of deviations**, so repeat human-error events are never connected and the systemic signal is missed.
- Closing investigations **past procedural timelines** (commonly 30 calendar days) without justification, or extending them without QA approval.

If your investigation has any of these shapes, assume an inspector has seen it before and knows exactly what question to ask next.

---

## Slips, lapses, and mistakes: the model you must know

You cannot investigate human error if you treat all of it as one thing. The error taxonomy from human-factors research (James Reason's work on human error, and the wider human-reliability literature) splits human failure into categories that demand completely different corrective actions.

| Error type | What happens | Example in GMP | What actually fixes it |
|---|---|---|---|
| **Slip** | Right intention, wrong action; an attention failure during a routine task | Operator means to set the mixer to 200 rpm, types 2000 | Design out the chance: hard limits, forcing functions, confirmation steps |
| **Lapse** | Right intention, a step is forgotten; a memory failure | Analyst forgets to record the balance ID before weighing | Make the step impossible to skip: system-enforced fields, checklists, line clearance gates |
| **Rule-based mistake** | Wrong rule applied; the person followed a procedure but it was the wrong one for the situation | Operator uses the standard cleaning procedure on a product changeover that needs the enhanced one | Fix the decision logic: clearer SOP branching, decision aids, better labeling of the situation |
| **Knowledge-based mistake** | No rule existed; the person was problem-solving in an unfamiliar situation and got it wrong | New excursion type, operator improvises | Procedure gap; write the rule, train, add escalation path |
| **Violation (routine)** | Deliberate deviation that has become normal practice because the official way is impractical | Everyone skips a redundant verification because it doubles the time | Fix the procedure so the right way is the easy way; address the local norm |
| **Violation (situational)** | Deliberate deviation forced by conditions | Operator skips a step because the tool is broken and there is production pressure | Fix the conditions, equipment, staffing, schedule, and the pressure |

The single most important investigative move is this: **never write "human error" on a report.** Write which kind. The moment you are forced to say "this was a memory lapse" or "this was a routine violation," the corrective action writes itself, and it is never "retrain." A lapse is fixed by a forcing function. A routine violation is fixed by removing the reason people violate. Retraining a slip does nothing, because the person already knew what to do and their attention failed anyway.

A separate model worth carrying is **SRK (skill-, rule-, knowledge-based behavior)** from Jens Rasmussen. Skill-based tasks (highly practiced, automatic) fail by slips and lapses. Rule-based tasks fail by applying the wrong rule. Knowledge-based tasks (novel problem solving) fail by reasoning errors. Knowing which mode the operator was in tells you which failure to expect and which control to add.

---

## How to run the investigation: step by step

Treat the deviation investigation as a defined procedure with a defined sequence. The order matters, because investigators who jump to cause before they have the facts almost always land on the person.

### Step 1: Capture and contain (day 0)

The moment the deviation is identified, the person who finds it records what happened, when, where, on which batch or system, and what was done immediately. Containment comes first: quarantine affected material, place the batch on hold, stop the line if needed. Containment is not root cause; it is risk control while you investigate.

Assign a severity / classification at intake (often minor / major / critical). The classification drives the investigation depth, the timeline, and who must approve. See [quality event classification and triage](/articles/quality-event-classification-triage) and [deviation management](/articles/deviation-management) for the triage logic.

### Step 2: Preserve and gather the evidence (before you interview anyone)

Collect the objective record while it is fresh: batch record, audit trail, alarm logs, instrument data, environmental data, the SOP version in effect that day, training records, the equipment log, photographs of the setup. Note the SOP **revision and effective date**, because investigations frequently reveal the operator followed an out-of-date copy.

Get the timeline straight to the minute. Most "human error" closures collapse the instant you build a real timeline and find a 10-hour shift, a parallel alarm, a second operator, or a procedure step that physically cannot be done in the stated sequence.

### Step 3: Interview the people, properly

This is where investigations are won or lost. The goal of the interview is information, not attribution. If the operator believes the interview is about deciding who to punish, you will get a defensive, useless account, and your root cause will be wrong.

Do this:
- Interview promptly, privately, one person at a time, before memories fade and before people compare stories.
- Open with "walk me through exactly what you did," not "why did you do it wrong."
- Ask what the task is normally like, what was different that day, what got in the way, what they would change.
- Ask about workload, staffing, time pressure, the state of the equipment, the clarity of the SOP, the lighting, the interruptions.
- Separate what they did from what they intended. (That separation tells you slip vs. mistake.)
- Never write the person's name into the root cause. Names belong in the investigation file, not in the cause statement.

A blame-free interview is not about excusing anyone. It is the only way to get accurate data, and accurate data is the regulatory requirement.

### Step 4: Apply a structured root-cause technique

Pick a method and apply it with discipline. The technique is not the magic; the discipline is. See [root cause analysis techniques](/articles/root-cause-analysis-techniques) for the full toolbox. The common ones:

- **5 Whys**, but with a hard rule: you may not stop at a "why" that names a person. If an answer is "because the operator forgot," the next why is "why was it possible to forget, and why did nothing catch it?" Keep going until you reach a system property you can change.
- **Fishbone / Ishikawa** across the classic categories (Man, Machine, Method, Material, Measurement, Environment, often with Management added). The structure forces you to consider Method (the SOP), Machine (the equipment), and Environment before you blame Man.
- **Fault tree** for complex events with multiple contributing causes.
- **Barrier analysis / "Why did the defenses fail?"** This is the one most suited to human error. List every control that should have caught the mistake (the procedure check, the second-person verify, the system validation, the line clearance, the review). For each barrier, ask why it failed or was absent. The root cause is usually a missing or weak barrier, not the slip itself.

### Step 5: Apply the human-error filter

Once you have a candidate cause that involves a person, run it through these questions. This is the test that distinguishes a real human-factors root cause from a "blame the operator" closure.

1. **Substitution test.** Would a different, competent, well-rested operator have made the same mistake under the same conditions? If yes, the cause is the conditions, not the person.
2. **Could the task have been done wrong easily?** If the wrong action and the right action look identical, are one keystroke apart, or are physically interchangeable, that is a design defect.
3. **Did a barrier fail?** Should a second check, a system validation, or a review have caught it? If yes, the missing barrier is the cause.
4. **Was the procedure correct, current, available, and followable?** Out-of-date, ambiguous, physically impossible-to-follow procedures are method failures wearing a human-error mask.
5. **Was this a violation, and if so, why?** If people routinely skip the step, the step or the conditions are the problem.
6. **Is this the first time, or a repeat?** A repeat with a different operator each time is conclusive proof the cause is systemic.

If the candidate cause survives all six and a genuinely capable, supported person in a well-designed task still erred in a way no reasonable barrier could catch, then you may have a true, narrow human-performance cause. It is rare. Even then the corrective action is to add a barrier, not to retrain the individual.

### Step 6: Determine root cause and contributing causes

Write the root-cause statement as a system property, in cause-and-effect language, specific enough to act on. State contributing factors separately. Avoid restating the event. Avoid the word "failed to" with a person as the subject.

### Step 7: Define CAPA (covered in detail below)

### Step 8: Assess scope and impact

Per 211.192, formally answer: which other batches, lots, products, or systems share this exposure? What is the product-quality and patient-safety impact? Is a field action or recall in scope? This is a required step, not optional, and it is one inspectors check for directly. Link to [batch disposition decisions](/articles/batch-disposition-decisions) and [out-of-specification investigation](/articles/oos-investigation-process) for the impact-assessment mechanics.

### Step 9: QA review, approval, closure, and trending

QA approves the investigation, the root cause, and the CAPA. The deviation is closed within the procedural timeline (or a documented, QA-approved extension). The event is fed into [deviation trending and quality metrics](/articles/quality-metrics-and-kpis) so repeats are detected.

---

## Acceptance criteria: what a good investigation looks like

Use this as a self-audit before you sign. A defensible deviation investigation:

- States a **root cause that is a system property**, not a person and not a restatement of the event.
- Identifies the **error type** (slip / lapse / rule-based mistake / knowledge-based mistake / violation) where a person was involved.
- Passes the **substitution test** explicitly, ideally documented in the report.
- Shows **which barriers failed or were missing**, and the CAPA adds or strengthens at least one barrier.
- Does **not list retraining as the only corrective action** unless a true knowledge gap is documented.
- Includes a **scope/impact assessment** covering other batches and products.
- Has **CAPA with owners, due dates, and a defined effectiveness check**.
- Was **closed within timeline** or has a justified, approved extension.
- Is written so that someone who was not there can understand what happened and why, and reach the same conclusion from the evidence.

---

## The retraining trap

Retraining is the most over-used corrective action in the industry and the one inspectors trust the least. Here is why, and when it is legitimate.

### Why retraining usually fails

Training fixes a **knowledge gap**: the person did not know what to do, or did not know how. Most deviations involving people are **not** knowledge gaps. They are slips (attention) and lapses (memory) by people who knew perfectly well what to do, or violations by people who knew the rule and could not or would not follow it as written. Retraining a person who already knew the correct action changes nothing, because their knowledge was never the problem. The slip will recur at the same rate.

Worse, "retrain the operator" is often a way to close the investigation fast and avoid the harder, more expensive systemic fix (redesigning the form, adding a forcing function, fixing the equipment, restaffing the shift). Inspectors know this, which is why repeated deviations closed with repeated retraining is a classic warning-letter pattern.

### When retraining is a legitimate CAPA

- The root cause is genuinely a **knowledge-based or rule-based gap**: the SOP was unclear or silent, the person was not trained on the current revision, or the training itself was deficient.
- It is **paired with a systemic action**. Retraining plus an improved SOP plus a forcing function is reasonable. Retraining alone almost never is.
- The training problem is itself investigated: if training did not work, **why**? Was the SOP wrong? Was the trainer inconsistent? Was competency never assessed? "Retrain to the same deficient SOP" repeats the failure.

A useful rule of thumb: if your corrective action is "retrain," ask "retrain on what, and why will it work this time when the same training did not prevent it before?" If you cannot answer, retraining is not your CAPA.

---

## Building CAPA that holds: the hierarchy of controls

Borrow the hierarchy of controls from occupational safety and apply it to error prevention. Controls higher on the list are stronger because they reduce reliance on human vigilance. Reach for the highest control you reasonably can.

| Rank | Control type | What it does | GMP example |
|---|---|---|---|
| 1 (strongest) | **Eliminate** | Remove the error opportunity entirely | Delete the redundant manual transcription step; pull the value straight from the instrument |
| 2 | **Substitute / engineer out** | Make the wrong action impossible | Hardware interlock, system field that rejects out-of-range entry, unique connectors that only fit one way |
| 3 | **Forcing function / poka-yoke** | Make the system refuse to proceed until the step is done right | Mandatory field that blocks batch-record progression; scan-to-verify the right material; line-clearance gate |
| 4 | **Warnings / detection** | Catch the error after it happens but before it reaches product | Alarms, automated review-by-exception, second-person verification |
| 5 (weakest) | **Administrative / training** | Tell people to be careful and check | SOP update, retraining, reminders, signs |

Most "human error" CAPAs sit at rank 5, the weakest control, which is exactly why they do not hold. A good investigator pushes the corrective action **up** the hierarchy. The same deviation, fixed at rank 2 or 3, does not recur regardless of who is on shift.

### Poka-yoke (error-proofing) in practice

Poka-yoke, the mistake-proofing concept from manufacturing (Shigeo Shingo), comes in two forms:

- **Prevention poka-yoke**: the error cannot be made. A connector that only mates one way. A balance that will not accept a weight outside the recipe tolerance. A batch record field that will not let you enter a future date or skip a required entry.
- **Detection poka-yoke**: the error is caught immediately and flagged. A barcode scan that confirms the material against the recipe and alarms on mismatch. A system that flags an out-of-sequence operation.

Worked example. Deviation: an analyst recorded a sample weight against the wrong sample ID, found at second-person review. The lazy closure: "analyst error, retrain." The proper investigation finds the worksheet lists six samples in a column and the IDs are similar; the substitution test confirms any analyst could transpose two rows. Root cause: the worksheet design permits transposition with no system check (a method/design cause). CAPA: move weighing into a LIMS workflow where the balance reading is captured electronically against a scanned sample barcode (rank 2-3, prevention poka-yoke), so the wrong-ID entry becomes impossible, plus update the worksheet as an interim control (rank 5). Effectiveness check: zero transposition deviations on this assay over the next defined period and a sample of records confirming the scan step is enforced. That CAPA holds. "Retrain the analyst" would not.

---

## CAPA effectiveness: proving the fix worked

A CAPA is not done when the action is implemented. It is done when you have **evidence** the action prevented recurrence. This is an explicit expectation in ICH Q10 and is checked hard in inspections. See [CAPA effectiveness verification](/articles/capa-effectiveness-verification) and [what is a CAPA](/articles/what-is-a-capa) for the full mechanics.

An effectiveness check needs:
- A **measurable success criterion** defined before the check (for example: zero recurrences of this deviation type over the next defined number of batches or months; or a measured reduction in the related deviation trend).
- A **defined observation window** appropriate to how often the situation recurs. Checking a quarterly task after two weeks proves nothing.
- **Objective evidence**: deviation trend data, audit of records, direct observation that the forcing function is in place and working.
- A **documented conclusion** and, if the criterion is not met, the CAPA is reopened or escalated, not quietly closed.

Common mistake: declaring effectiveness because "no recurrence so far" when the task simply has not run again yet. Another: setting the success criterion as "training completed," which measures the action, not the outcome.

---

## Roles and responsibilities

| Role | Responsibility in a human-involved deviation |
|---|---|
| **Operator / analyst (person involved)** | Reports promptly and honestly, gives an accurate account in the interview, is not the "root cause." A blame-free reporting culture exists so people tell the truth, which is the only way to get correct data. |
| **Investigation owner / area SME** | Runs the investigation, gathers evidence, builds the timeline, applies the RCA method, drafts root cause and CAPA. Usually from the affected function. |
| **Line manager / supervisor** | Provides process context, staffing and workload facts, supports containment, owns many of the systemic CAPAs (staffing, workload, equipment). |
| **Quality Assurance** | Owns the deviation system, classifies and approves, challenges weak root causes (especially "human error"), approves CAPA and effectiveness criteria, gatekeeps closure, ensures trending. QA is accountable for the controls under 211.22. |
| **Subject matter experts (engineering, validation, automation)** | Assess whether equipment, system, or process design contributed and design engineering-level controls (forcing functions, interlocks). |
| **CAPA owner** | Owns implementation and the effectiveness check, with a real due date. |
| **Management** | Reviews deviation and CAPA trends through [management review](/articles/management-review-q10), resources the systemic fixes, and owns the quality culture that decides whether people report honestly. |

The cultural point is load-bearing. If the firm punishes the operator named in a deviation, people stop reporting, near-misses go dark, and the data you need to investigate disappears. A **just culture** distinguishes honest error (which is investigated and designed out) from reckless or willful behavior (which is a different conversation). Without it, every investigation is fighting the people it depends on. See [quality culture and data-integrity failures](/articles/quality-culture-di-failures).

---

## Common mistakes (the ones that get cited)

- **Stopping at the person.** "Operator error, retrain" with no analysis of why. The single most cited investigation defect.
- **Root cause = restated event.** "Root cause: the wrong material was used." That is the deviation, not its cause.
- **Skipping the timeline.** Without a minute-by-minute reconstruction you cannot tell a slip from a mistake from a violation.
- **Blame-driven interviews.** They produce defensive, false accounts and wrong root causes.
- **Retraining-only CAPA** for a slip or lapse, which training cannot prevent.
- **No effectiveness check**, or one that measures the action ("trained") instead of the outcome ("did not recur").
- **No scope assessment.** Ignoring the 211.192 requirement to extend to other batches and products.
- **No trending.** Repeats with different operators are never connected, so the systemic signal is invisible.
- **Treating every human error as one thing** instead of classifying it, which guarantees the wrong corrective action.
- **Closing late** without a justified, approved extension.

---

## Interview questions and how to answer them

These are the questions a hiring manager or an inspector actually asks on this topic. Strong answers below.

**"Why is human error not an acceptable root cause?"**
Because a root cause is something you can act on to prevent recurrence, and you cannot stop people from making the predictable slips and lapses that humans make at a known rate. "Human error" names the symptom and skips the question that matters: why was the error possible, and why did no barrier catch it. Regulators expect a thorough investigation under 21 CFR 211.192, and an investigation that stops at the person is not thorough. The real cause is almost always a design, procedure, or barrier weakness that made the error easy and undetected.

**"You investigate a deviation and the operator clearly made a mistake. Walk me through what you do."**
Contain first, then gather the objective evidence before interviewing anyone: batch record, audit trail, the SOP revision in effect, training records, equipment logs, build the timeline. Interview the operator blame-free, separating what they intended from what they did, to classify the error as a slip, lapse, mistake, or violation. Apply a structured RCA, 5 Whys or barrier analysis, refusing to stop at any "why" that names the person. Run the substitution test: would a competent, well-rested operator have erred under the same conditions? If yes, the cause is the conditions. Identify the failed or missing barrier, write the root cause as a system property, and build a CAPA up the hierarchy of controls, ideally a forcing function, with an effectiveness check. Then assess scope to other batches.

**"What is the substitution test?"**
Mentally replace the individual with another competent, properly rested, properly trained person doing the same task under the same conditions. If that person would likely make the same error, the individual is not the cause; the task design or conditions are. It is the cleanest way to strip blame out of a root cause.

**"When is retraining a valid corrective action?"**
Only when the root cause is a genuine knowledge or rule gap: unclear or missing SOP, training on the wrong revision, or deficient training, and even then it should be paired with a systemic fix and accompanied by an investigation of why the original training did not work. Retraining alone, for a slip or a violation, is not valid and is a known warning-letter pattern.

**"Explain the error taxonomy."**
Slips and lapses are execution failures by someone with the right intention: a slip is an attention error (did the wrong thing), a lapse is a memory error (forgot a step). Mistakes are planning failures: rule-based (applied the wrong rule) or knowledge-based (no rule existed, reasoned wrong). Violations are deliberate deviations, routine (the official way is impractical) or situational (forced by conditions). Each demands a different fix, which is why "human error" as a single label is useless.

**"What is poka-yoke and give a GMP example?"**
Error-proofing. Prevention poka-yoke makes the error impossible, for example a batch-record field that rejects an out-of-range value or a connector that fits only one way. Detection poka-yoke catches it immediately, for example a barcode scan that alarms when the scanned material does not match the recipe. It moves the control off human vigilance and into the system, which is why it holds where retraining does not.

**"How do you prove a CAPA was effective?"**
Define a measurable success criterion before the action, usually no recurrence of that deviation type over a window long enough for the situation to recur, plus objective evidence: trend data, record audits, direct confirmation the control is in place. Conclude in writing. If the criterion is missed, reopen or escalate. "Training completed" measures the action, not the outcome, and is not an effectiveness check.

**"You see the same deviation three times in a year, each with a different operator, each closed as human error and retraining. What does that tell you?"**
That the root cause was never found. Three different people making the same error proves the cause is systemic, in the process, procedure, equipment, or environment, not in any individual. Each retraining closure was a non-corrective action, which is why it recurred. I would open a consolidated investigation across all three, treat the prior closures as evidence the system is at fault, and drive a CAPA up the control hierarchy with an effectiveness check.

---

## Practical tips

- Ban the phrase "human error" from your root-cause field. Force the writer to name the error type. The CAPA will improve immediately.
- Build the timeline before you form a theory. Theories formed early bias every interview that follows.
- Keep the operator's name out of the cause statement and out of any disclosed CAPA. Names live in the confidential investigation file.
- For every candidate human-error cause, write the substitution-test answer into the report. It pre-empts the inspector's first question.
- List the barriers that should have caught the error. The missing barrier is usually your real CAPA.
- If your CAPA is retraining, ask "why will it work this time?" If you have no answer, it is not a CAPA.
- Track an internal metric: percentage of deviations whose CAPA is administrative-only. A high number is a sign your investigations are stopping too high.
- Protect the reporting culture. The data quality of every investigation depends on people telling you the truth without fear.

---

## Related reading

- [Deviation management](/articles/deviation-management)
- [Quality event classification and triage](/articles/quality-event-classification-triage)
- [Root cause analysis techniques](/articles/root-cause-analysis-techniques)
- [What is a CAPA](/articles/what-is-a-capa)
- [CAPA effectiveness verification](/articles/capa-effectiveness-verification)
- [OOS investigation process](/articles/oos-investigation-process)
- [Out-of-trend investigations](/articles/out-of-trend-investigations)
- [Quality risk management](/articles/quality-risk-management)
- [Quality culture and data-integrity failures](/articles/quality-culture-di-failures)
- [Quality metrics and KPIs](/articles/quality-metrics-and-kpis)
- [Management review (ICH Q10)](/articles/management-review-q10)
- [Training program for GxP](/articles/training-program-gxp)
- [How to write an SOP](/articles/how-to-write-an-sop)
