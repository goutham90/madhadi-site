---
title: "How to Write an SOP People Actually Follow: Structure, Language, and Common Failures"
description: "A step-by-step guide to authoring GxP standard operating procedures that are accurate, usable, and inspection-ready, with templates, sample text, and the failure patterns regulators cite."
pubDate: 2026-06-20
tags: ["sop", "document control", "gmp", "technical writing", "quality assurance", "data integrity", "training"]
pillar: "quality-assurance"
tier: "Beginner"
---

Most standard operating procedures fail for the same reason: they are written to satisfy a document control checklist, not to be followed by a person doing a job under time pressure. The result is a procedure that is technically approved, formally trained, and routinely ignored. Then a deviation happens, the investigation finds that the operator did not follow the SOP, and the corrective action is "retrain." Six months later the same gap produces the same deviation. The procedure was never the problem the retraining could fix. The procedure was the problem.

Writing an SOP that people actually follow is a real skill, and it is mostly unglamorous. It is part regulatory literacy, part process knowledge, part plain technical writing, and part empathy for the person at the bench at 2 a.m. This page walks through how to do it: the regulatory basis, the structure, the language rules, the step-by-step authoring procedure, what "good" looks like, a worked example, who owns what, and the failures that show up in inspection findings.

---

## What an SOP is, and why it is required

A standard operating procedure is an approved, controlled document that describes how a specific, repeatable activity is to be performed so that it is done the same way, correctly, every time, by every qualified person. It sits inside a document hierarchy: policies state intent, SOPs state how, and forms and logbooks capture the records that prove it happened. If you are unclear on where SOPs fit relative to policies, work instructions, and forms, read [the quality manual and document hierarchy](/articles/quality-manual-document-hierarchy) and [document control fundamentals](/articles/document-control-fundamentals).

The requirement for written procedures is not optional and not a matter of house style. For drug manufacturing in the United States, 21 CFR 211 (Current Good Manufacturing Practice for Finished Pharmaceuticals) requires written procedures across nearly every functional area. 21 CFR 211.100(a) requires written procedures for production and process control "designed to assure that the drug products have the identity, strength, quality, and purity they purport or are represented to possess," and 211.100(b) states:

> Written production and process control procedures shall be followed in the execution of the various production and process control functions and shall be documented at the time of performance.

That last clause is the whole point. The regulation does not just require that procedures exist; it requires that they be followed and that the following be recorded contemporaneously. A beautiful SOP that nobody can follow is a compliance liability, because the gap between the written procedure and the actual practice is exactly what an inspector looks for.

Other regulations carry the same expectation in their own domains. 21 CFR 211.22(d) requires that the responsibilities and procedures of the quality control unit "shall be in writing." 21 CFR 820, now harmonized toward the medical device Quality Management System Regulation, requires documented procedures for the device quality system. In the EU, EudraLex Volume 4 GMP Chapter 4 (Documentation) describes procedures and the records they generate, and ICH Q10 (Pharmaceutical Quality System) and ICH Q7 (Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients) both assume a system of written procedures as the backbone of the quality system. For the broader regulatory frame, see [what GMP is](/articles/what-is-gmp), [the CFR 210/211 cGMP walkthrough](/articles/cfr-210-211-cgmp-walkthrough), and [the pharmaceutical quality system](/articles/pharmaceutical-quality-system).

The quality rationale underneath the regulation is simple. Variation is the enemy of quality. Two operators who each do a task "their way" produce two different results, and you cannot investigate, trend, or improve a process that has no defined baseline. An SOP is how an organization captures the one agreed correct way to do something, so that variation is reduced, knowledge survives staff turnover, training has a target, and deviations become meaningful because there is a defined standard to deviate from.

---

## What goes in an SOP: the standard sections

There is no single mandated template, but mature quality systems converge on roughly the same sections. The structure below is typical and inspection-friendly. Your organization's document control SOP (the SOP that governs how SOPs are written) defines the binding template; the content of each section is what matters.

| Section | Purpose | Common pitfalls |
|---|---|---|
| Header / footer | Document number, title, version, effective date, page x of y | Page numbers missing "of y" so pages can go missing undetected |
| Purpose | One or two sentences on what the procedure achieves | Restating the title; vague aspiration |
| Scope | What activities, areas, products, and systems this applies to, and what it explicitly does not | Silent on boundaries, so two SOPs overlap or a gap opens |
| Responsibilities | Which role does which part | Naming people instead of roles; listing roles never referenced in the steps |
| Definitions / abbreviations | Terms and acronyms used | Defining obvious words; leaving a load-bearing acronym undefined |
| References | Parent policies, related SOPs, regulations, forms | Dead references to superseded documents |
| Materials / equipment | What is needed before starting | Omitted, so the operator stops mid-task to hunt for a part |
| Safety / EHS | Hazards and controls relevant to the task | Generic boilerplate disconnected from the actual steps |
| Procedure | The numbered, sequential steps | Passive voice, no actor, missing decisions, buried acceptance criteria |
| Records | What records this procedure generates and where they go | Not stating retention or location |
| Attachments | Forms, templates, diagrams, decision trees | Forms not under document control |
| Revision history | What changed and why, by version | "Updated for clarity" with no real description |

The procedure section is where SOPs live or die. Everything else is framing. A good procedure section reads as a sequence of unambiguous instructions, each with one clear actor, one clear action, and, where relevant, the acceptance criterion right there in the step rather than hidden in an appendix.

---

## How to write one: the step-by-step procedure

Authoring an SOP is itself a process, and treating it like one is what separates a usable procedure from a wall of text.

### Step 1: Confirm the SOP is the right instrument

Before writing, decide whether you actually need an SOP. If the activity is a single one-time task, a protocol or work order may fit better. If the content is policy ("we will qualify all suppliers"), it belongs in a policy, with the SOP describing how. If it is a detailed sequence of physical actions on one machine, a work instruction subordinate to a higher SOP may be cleaner. Writing at the wrong altitude is the first and most common error. A 40-page SOP that tries to be policy, procedure, and work instruction at once is unusable and unmaintainable.

### Step 2: Walk the process before you write a word

Go to where the work happens and watch it, or interview the people who do it. The author should never be only the person who thinks they know how the task is done. Capture what actually happens, including the undocumented workarounds, because those workarounds usually exist for a reason and ignoring them guarantees the SOP will be unfollowable. Identify every decision point, every place a value is read or recorded, every handoff between roles, and every place something can go wrong.

### Step 3: Identify the regulatory and risk drivers

Establish which requirements the procedure must satisfy. Which regulation or standard mandates this activity? What are the critical control points where an error affects product quality, patient safety, or data integrity? Those points need the most precise language and, often, a verification or second-check step. For data-handling steps, apply ALCOA+ thinking so that records are attributable, legible, contemporaneous, original, accurate, and complete; see [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and [good documentation practices](/articles/good-documentation-practices).

### Step 4: Draft the procedure as numbered, single-action steps

Write the procedure section first, then build the framing sections around it. Each step should be one action, in the active voice, with a named role as the actor. Put the acceptance criterion in the step. Put decisions as explicit branches. A worked sample appears later in this article.

### Step 5: Add the framing sections

Once the steps are stable, write purpose, scope, responsibilities, references, materials, records, and revision history. Doing these last keeps them honest, because you now know exactly which roles act, which records are generated, and which references are truly used.

### Step 6: Run it past the people who will use it

Have an actual operator read the draft and try to follow it, ideally by performing or simulating the task with only the SOP in hand. Every place they hesitate, ask a question, or reach for tribal knowledge is a defect. This dry run catches more usability problems than any review by management. It is the single highest-value step and the one most often skipped.

### Step 7: Route for review and approval

The author, an independent technical reviewer or subject matter expert, and quality assurance review and approve. Approvals must be controlled, with signatures and dates, electronic or wet ink, traceable to the version. For electronic signatures, the controls in 21 CFR Part 11 and EU Annex 11 apply; see [the Part 11 and Annex 11 practical guide](/articles/part-11-annex-11-practical-guide) and [electronic signatures implementation](/articles/electronic-signatures-implementation).

### Step 8: Train before effective, then make it effective

A new or revised SOP cannot take effect before the people who must follow it are trained on it. Coordinate the effective date with training completion so there is never a window where the SOP is in force but staff are untrained, and never a window where staff follow a draft. See [the GxP training program](/articles/training-program-gxp).

### Step 9: Maintain it through change control and periodic review

An SOP is a living controlled document. Changes go through change control, and the document is reviewed periodically to confirm it still reflects reality. See [change control for validated systems](/articles/change-control-validated-systems) and the periodic review expectations in [document control fundamentals](/articles/document-control-fundamentals).

---

## Writing the steps: language rules that decide whether people follow it

The difference between a followed and an ignored SOP is usually in the sentences. These rules are not stylistic preferences. They are reliability controls.

### One actor, one action, active voice

Compare:

- Weak: "The sample is to be labeled and the temperature should be verified prior to storage."
- Strong: "5.3 The analyst labels the sample with the sample ID and date. 5.4 The analyst verifies the freezer temperature reads -20 C plus or minus 5 C before storing the sample."

The strong version tells you who, what, the acceptance criterion, and the sequence. The weak version uses passive voice ("is to be labeled") with no actor, bundles two actions into one sentence, and hides the temperature acceptance range. Passive voice without a named role is the most common failure mode in SOP language, because it lets everyone assume someone else does the step.

### Put the acceptance criterion in the step

If a step requires a value, range, or condition, state it inside the step. "Set the incubator and wait" is not followable. "Set the incubator to 37 C plus or minus 1 C and confirm the displayed temperature is within range before proceeding" is. The operator should never have to leave the step to know whether they did it correctly.

### Make decisions explicit branches

Where the next action depends on a result, write it as an if/then with a defined path for each outcome.

- "5.7 If the bioburden result is at or below the alert limit, the analyst records the result and continues. If the result exceeds the alert limit, the analyst stops, initiates a deviation per the [deviation management SOP](/articles/deviation-management), and notifies the supervisor before proceeding."

Never leave the failure path undefined. Undefined failure paths are where operators improvise, and improvisation is where deviations are born. For investigation triggers, see [quality event classification and triage](/articles/quality-event-classification-triage).

### Use controlled, consistent terminology

Pick one term for one thing and use it throughout. If the form is the "sample log," it is the sample log everywhere, not "the logbook" in step 5 and "the record" in step 9. Inconsistent terms force the reader to infer whether two words mean the same object, and inference is where errors enter. Define abbreviations once and use them consistently.

### Avoid vague qualifiers

"Periodically," "as needed," "appropriate," "sufficient," and "if necessary" are red flags. They push a judgment onto the operator without giving them the basis to make it. Either define the frequency, quantity, or condition, or move the judgment to a defined role with defined criteria. "Clean the surface as appropriate" is unfollowable and unauditable. "Wipe the surface with a lint-free wipe wetted with 70 percent IPA, using overlapping strokes, until visibly dry" is both.

### Write for the actual reader

The person following the SOP may be new, may not be a native English speaker, and may be tired. Short sentences, plain words, consistent structure, and visuals where they help. A decision tree or a labeled photograph often replaces three paragraphs of prose. The goal is not literary; the goal is that a qualified person can execute the task correctly with the document in hand. For broader guidance on this craft, see [technical writing for GxP](/articles/technical-writing-for-gxp).

### Right-size the detail

Detail should match the criticality and the trained competence of the user. An SOP for highly trained microbiologists doing a compendial method does not re-teach aseptic technique; it points to the method and focuses on the site-specific decisions and records. An SOP for a task done rarely by rotating staff needs more detail. Over-specifying a step that the qualified user already knows makes the document long, hard to maintain, and prone to becoming wrong when minor practice changes. Under-specifying a critical, error-prone step invites variation. Judgment here is the author's real work.

---

## What good looks like: acceptance criteria for the SOP itself

Before you route an SOP for approval, test it against these criteria. If any answer is no, it is not ready.

- Can a qualified but new person perform the task correctly using only this document and the referenced forms? (The dry run from Step 6 answers this.)
- Does every procedural step have a clear actor and a single action?
- Is every acceptance criterion (value, range, condition) stated where the step needs it?
- Is every decision point written as an explicit branch with all outcomes handled?
- Are all references current, and do all attached forms exist under document control?
- Does the scope state both what is covered and what is excluded?
- Do the responsibilities match the roles that actually appear in the steps, with no orphan roles and no unnamed actors?
- Does the records section state what is generated, where it goes, and how long it is retained?
- Is the language free of vague qualifiers at critical steps?
- Does the revision history describe what actually changed and why?
- Does the effective date align with training completion?
- Is the SOP at the right altitude, not trying to be policy and work instruction at once?

A practical extra test: read the procedure aloud as if instructing someone. Anywhere you naturally add a word the document does not contain ("and then you check the..."), that missing word is a defect to add.

---

## A worked example

Below is a condensed sample procedure section for a simple, generic task: receiving and storing an incoming raw material sample for testing. It is illustrative, not a regulatory template, and shows the language rules applied. Real SOPs include the full header, scope, responsibilities, and records sections; only the procedure body and a record snippet are shown.

### Sample procedure section

**5.0 Procedure**

5.1 The receiving analyst confirms the delivered container matches the purchase order for material name, lot number, and quantity. If any attribute does not match, the analyst quarantines the container, labels it "HOLD," and notifies QA before proceeding. Do not test material that does not match the order.

5.2 The receiving analyst inspects the container for damage, leakage, or tampering. If damage is present, the analyst initiates a deviation per the [deviation management SOP](/articles/deviation-management) and places the container on hold.

5.3 The receiving analyst assigns the next sequential sample ID from the Sample Receipt Log and records the material name, lot number, supplier, receipt date, and the analyst's initials in the log at the time of receipt.

5.4 The receiving analyst applies a "QUARANTINE" status label to the container, bearing the sample ID.

5.5 The receiving analyst measures the container surface temperature with a calibrated thermometer. The acceptance range is 2 C to 8 C. The analyst records the reading in the Sample Receipt Log.

5.6 If the temperature is within 2 C to 8 C, the analyst proceeds to step 5.7. If the temperature is outside 2 C to 8 C, the analyst stops, retains the container in the quarantine cooler, initiates a temperature excursion deviation, and notifies the supervisor and QA before any further handling.

5.7 The receiving analyst transfers the container to the quarantine cooler, confirms the cooler display reads within 2 C to 8 C, and records the storage location and time in the Sample Receipt Log.

5.8 The receiving analyst notifies the QC laboratory that the sample is available for testing by completing the handoff field in the log and signing.

### Sample record snippet (Sample Receipt Log)

| Sample ID | Material | Lot | Receipt date | Surface temp (C) | In range? | Storage loc | Analyst | Time |
|---|---|---|---|---|---|---|---|---|
| SR-0481 | Sodium chloride | NA-2291 | 20-Jun-2026 | 5.2 | Yes | QC-Cooler-2 | A. Rao | 09:14 |
| SR-0482 | Polysorbate 80 | PS-7733 | 20-Jun-2026 | 9.1 | No (dev DV-0337) | Quar-Cooler | A. Rao | 09:31 |

Notice how the record was designed alongside the procedure. The "In range?" and deviation cross-reference columns exist because steps 5.5 and 5.6 created the need for them. SOP and form are designed together, never separately, because a form that does not capture what the steps require leaves an undocumented gap.

---

## Roles and responsibilities

Authoring is a team activity even when one person holds the pen. Clear ownership prevents both gaps and turf fights.

| Role | Responsibility in the SOP lifecycle |
|---|---|
| Author / SOP owner | Usually the process owner or an SME from the function. Drafts content, owns accuracy, keeps it current, initiates periodic review and changes |
| Subject matter expert (SME) | Provides technical correctness; may be the author or a separate reviewer for cross-functional steps |
| Technical / peer reviewer | Independent check that steps are correct, complete, and executable; ideally includes a user who runs the dry run |
| Quality assurance | Reviews for compliance with the document control system, regulatory alignment, and overall adequacy; approves; does not own the technical content |
| Document control / document management | Assigns the number, manages versioning, distribution, effective date, training linkage, archival of superseded versions |
| Training coordinator | Ensures affected staff are trained before the effective date and records completion |
| Management | Approves where the procedure crosses functions or carries quality risk; ensures resources for compliance |

A boundary worth stating plainly: QA approves the SOP but does not own its technical content. The process owner owns accuracy. When QA is treated as the author of every SOP, two failures follow: the procedures drift from how the work is actually done, and the functions stop feeling responsible for their own procedures. For the wider map of who does what across the quality system, see [GxP roles and responsibilities](/articles/gxp-roles-responsibilities).

---

## Common mistakes and inspection-finding patterns

These are the patterns that show up repeatedly in regulatory citations and in the deviations that trace back to procedures. None require naming a company; they are generic and well documented across published findings.

**Procedure not followed, because it could not be.** The most common quality-system finding is a variant of "established procedures were not followed." Often the deeper cause is that the procedure was not followable: a step was wrong, a value had changed, the form did not match the steps, or a workaround had become standard practice without the SOP ever being updated. The fix is not retraining; it is fixing the procedure and the change control that let it drift. For why "retrain" is a weak corrective action, see [human error in deviations](/articles/human-error-in-deviations) and [root cause analysis techniques](/articles/root-cause-analysis-techniques).

**Contradictory or overlapping procedures.** Two SOPs describe the same activity differently, or two SOPs both claim a step with no clear boundary. Inspectors find these by cross-reading. The scope sections are supposed to prevent this; vague scopes cause it.

**Forms not under document control.** The procedure references a form or template that is uncontrolled, has no version, or circulates as an unmanaged spreadsheet. Records generated on uncontrolled forms have weak provenance and are a data integrity exposure. Every form an SOP references must be a controlled attachment or controlled standalone document.

**Vague language at critical steps.** "Periodically verify," "clean as appropriate," "use suitable conditions." These get cited because they make the procedure unauditable: there is no defined standard to check compliance against. Define the frequency, the criterion, or the condition.

**Records not captured contemporaneously, because the SOP allowed it.** When a procedure does not require recording at the time of performance, operators batch their documentation later, which 211.100(b) directly prohibits and which is a classic ALCOA+ contemporaneous failure. The SOP should require the record at the point of the action. See [data integrity foundations](/articles/data-integrity-foundations).

**Backdated, future-dated, or untrained effective dates.** SOP effective before training, or a revision in use before approval, or operators following a draft. Document control discipline prevents this; the finding is usually a training-to-effective-date misalignment.

**No real revision history.** "Updated for clarity" tells an inspector nothing and prevents reconstruction of what the procedure required at a past date, which matters when investigating an old batch. State what changed and why.

**Over-long, unmaintainable monoliths.** A single SOP trying to be policy, procedure, and work instruction. It is hard to follow, harder to maintain, and goes out of date in pieces. Right-altitude documents that reference each other age better.

**Orphan roles and unnamed actors.** Responsibilities list roles that never appear in the steps, or steps with passive voice and no actor. Both signal that the document was assembled rather than written for use.

---

## Interview-ready: questions you should be able to answer

If you are interviewing for a quality, manufacturing, or validation role, expect questions on procedures. Strong answers show you understand both the regulation and the practice.

**"What regulation requires written procedures, and what does it actually demand?"** Cite 21 CFR 211, specifically 211.100(b): written production and process control procedures must be followed and documented at the time of performance. Add that 211.22(d) requires the quality unit's procedures to be in writing, and that EU GMP Chapter 4 and ICH Q10 carry the same expectation. The strong candidate stresses the "followed and documented at the time of performance" clause, because that is where most findings sit.

**"An operator did not follow the SOP. Is retraining the right corrective action?"** Usually no, and saying so is the answer that distinguishes you. First determine whether the procedure was followable. If a step was wrong, the form mismatched, or a workaround had become normal, the corrective action is to fix the procedure and the change control, not retrain a person on a defective document. Retraining is appropriate only when the procedure was correct and usable and the gap was genuinely a knowledge or attention failure, which is rarer than investigations assume.

**"How do you make an SOP that people actually follow?"** Walk the process and write from observed reality, not assumption. Single-action steps, active voice, named actors. Acceptance criteria in the step. Explicit decision branches with defined failure paths. Controlled, consistent terminology. No vague qualifiers at critical steps. Design the form alongside the steps. And run a dry run with a real user before approval. That last point signals practical experience.

**"What is the difference between a policy, an SOP, and a work instruction?"** Policy states intent and what must be done; SOP states how a repeatable activity is performed and who does it; work instruction gives the detailed step-level mechanics, often for a single task or machine, subordinate to an SOP. Forms and logs capture the records. The skill is writing each at the correct altitude.

**"How do you handle a step where the result determines the next action?"** Write it as an explicit if/then with every outcome defined, including the failure path: what to record, when to stop, when to initiate a deviation, and who to notify. Never leave the failure path to operator improvisation.

**"How does an SOP stay current?"** Through change control for any change and periodic review on a defined cycle to confirm it still reflects the real process. Both are documented. An SOP that has not been reviewed in years and no longer matches practice is a finding waiting to happen.

**"What makes a good revision history entry?"** A description of what changed and why, traceable to a change control record, sufficient that someone can reconstruct what the procedure required at any past date. "Updated for clarity" fails this test.

---

## Practical tips

A few things that make the work easier and the result better:

- Keep a controlled SOP template and a short authoring guide so every author starts from the same structure and language conventions. Consistency across the SOP library reduces reader error.
- Number steps so they can be referenced. "Repeat 5.3 through 5.6" is precise; "repeat the labeling steps" is not. Numbered steps also let deviations and investigations cite the exact step that failed.
- Design the form first when the records are the hard part. Sometimes laying out the record fields clarifies the steps faster than writing the steps does.
- Use visuals for spatial or sequential tasks. A labeled photo of a correctly assembled setup prevents more errors than a paragraph describing it.
- Write the scope exclusions deliberately. Stating what an SOP does not cover prevents the overlaps and gaps that inspectors find by cross-reading.
- Time the dry run with someone who did not write it. The author is the worst tester because they fill gaps from memory without noticing.
- Resist scope creep during review. When a reviewer wants to add a tangential requirement, ask whether it belongs in this SOP or a different one. Monoliths grow one well-meaning addition at a time.
- Tie every recording step to "at the time of performance" so contemporaneous documentation is built in, not assumed.

Related reading on this site: [document control fundamentals](/articles/document-control-fundamentals), [good documentation practices](/articles/good-documentation-practices), [technical writing for GxP](/articles/technical-writing-for-gxp), [the training program](/articles/training-program-gxp), [deviation management](/articles/deviation-management), [change control for validated systems](/articles/change-control-validated-systems), [the quality manual and document hierarchy](/articles/quality-manual-document-hierarchy), and [the pharmaceutical quality system](/articles/pharmaceutical-quality-system).

The test of an SOP is never whether it was approved. It is whether the next person who has never seen it can pick it up, do the task right, and leave a record that proves it. Write for that person, and the compliance takes care of itself.
