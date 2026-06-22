---
title: "Using Generative AI in Deviation, CAPA, and Investigation Workflows"
description: "A practical look at putting generative AI to work drafting deviations, assisting root cause analysis, drafting CAPAs, and summarizing complaints and trends, with the guardrails, validation, and data-integrity controls that keep it inspection-defensible."
pubDate: 2026-06-22
tags: ["AI", "deviation", "CAPA", "investigations", "GxP", "data-integrity", "validation"]
pillar: "ai-automation"
tier: "Intermediate"
---

Generative AI is already drafting text inside quality systems, sometimes with a sanctioned tool, sometimes through someone quietly pasting a deviation summary into a public chatbot. The second case is the one that should worry you. The first case, done properly, is a genuine productivity gain: a deviation that took an investigator two hours to write up can be drafted in ten minutes, leaving the human to do the part that actually requires judgment.

This article is about doing the first case properly. It covers where generative AI helps in deviation, CAPA, and investigation work, where it must never be allowed to decide, and the controls that let you defend its use in an inspection. It is written so that after reading it you could scope a pilot, write the procedure, set the acceptance criteria, and answer the questions an inspector or an interviewer will ask.

A note on scope. Generative AI here means large-language-model tools that produce text: drafting, summarizing, rewriting, extracting. This is a different beast from the predictive classification models covered in [validating AI-enabled GxP systems](/articles/validating-ai-gxp-systems), and the controls differ. A classifier outputs a label you can score against ground truth. A generative model outputs fluent prose that can be confidently wrong, which changes the failure mode and the guardrails. If you have not read it, the companion article on [qualifying LLMs and generative AI for GxP](/articles/qualifying-llms-genai-gxp) covers the qualification mechanics in more depth; this article is about applying them to the specific workflows of deviation, CAPA, and investigation management.

---

## The Core Principle: Generative AI Drafts, Humans Decide

Before any use case, fix one rule that does not bend: generative AI assists with drafting and summarizing, it does not make quality-critical decisions. A human owns every regulated determination, and the human's judgment is documented, not rubber-stamped.

**WHY this matters (regulation and risk).** The GxP record is built on the principle that quality decisions carry accountable human judgment. 21 CFR Part 11 and EU GMP Annex 11 require that electronic records be attributable to the person responsible. ICH Q10 frames the pharmaceutical quality system around management accountability for quality outcomes. None of these contemplate an algorithm signing off a root cause or approving a CAPA. The risk is concrete: a generative model can produce a plausible, well-written root cause that is simply wrong, and because it reads well, a tired reviewer can approve it without the scrutiny they would give a clumsy human draft. The fluency is the hazard. A bad human draft looks bad and gets challenged. A bad AI draft looks polished and slips through.

> ALCOA+ expects records to be Attributable, Legible, Contemporaneous, Original, and Accurate, among other attributes. A generated draft is none of these until a qualified human reviews it, takes ownership, and the record captures who did so.

So the model is a drafting aid sitting upstream of the regulated record. The investigator, the QA approver, the subject-matter expert: they remain the authors of record in every sense that matters. The audit trail must show that a person reviewed, edited where needed, and approved the content, and that the person, not the tool, is accountable for it.

Keep this line in view through every use case below. Each one is framed as "the model drafts X, the human owns the decision about X."

---

## Use Case 1: Drafting Deviation Descriptions

The deviation description is the foundation of the whole investigation. A vague or incomplete description sends the investigation in the wrong direction. See [deviation management](/articles/deviation-management) for the full process; here we focus on where generative AI helps write the initial record.

**WHAT it does.** The operator or initiator describes what happened in their own words, often hurriedly and incompletely. The model takes that raw input plus structured context (batch number, equipment ID, step, expected vs observed) and drafts a clear, complete deviation description in the house format: what was expected, what was observed, when, where, the immediate impact, and the immediate actions taken.

**HOW to do it, step by step.**

1. Capture the raw facts in a structured intake form: free-text "what happened," plus required fields (date, time, batch, equipment, process step, expected condition, observed condition).
2. The model drafts a deviation description from those inputs, in the standard template, in neutral factual language, without speculating about cause.
3. The initiator reviews the draft against what actually happened, corrects any detail, and adds anything the model could not know.
4. The initiator submits the description into the deviation system under their own name. The record captures that the description was AI-assisted and human-reviewed.

The discipline that makes this safe: the model drafts only from facts the human supplied. It must not invent batch numbers, infer impact the initiator did not state, or speculate on cause inside the description. The description records what happened; the cause comes later, from the investigation.

**Acceptance criteria for this use.**

- The drafted description contains no fact the initiator did not provide or confirm.
- The description states observed facts only, with no premature cause attribution.
- The human reviewer is recorded as the author and owner of the submitted record.
- The record flags that generative AI assisted the drafting (transparency, not hiding the tool).

**WORKED EXAMPLE.** An operator types into the intake form: "tablet press stopped mid run, hopper level sensor alarm, batch 24-0417, around 14:30, restarted after 20 min." The model drafts: "During compression of batch 24-0417, the tablet press halted at approximately 14:30 following a hopper level sensor alarm. Production was interrupted for approximately 20 minutes before the press was restarted. Expected condition: continuous compression per the batch record. Observed condition: unplanned stop with hopper level alarm active. Immediate action: press restarted after the alarm cleared; affected tablets segregated pending evaluation." The initiator reads it, corrects "20 minutes" to "22 minutes" against the equipment log, confirms the segregation actually happened, and submits. The model saved fifteen minutes of writing; the human owns every fact.

**COMMON mistakes (inspection and 483 patterns).**

- Letting the model speculate on cause in the description ("the stop was likely due to a sensor fault"), which biases the investigation before it starts. A description that prejudges cause is a recurring data-integrity and investigation-quality concern.
- The model importing a fact from a similar past deviation that does not apply here, a confabulation that reads plausibly. The human review must catch it.
- No record that the description was AI-assisted, so the practice is invisible until an inspector finds the tool in use and asks why it was never assessed.

**INTERVIEW angle.** "Would you let AI write a deviation description?" The strong answer: yes, as a drafting aid, where the model writes only from facts the initiator supplied, states observations not cause, and a named human reviews and owns the submitted record. The hazard is fluent confabulation, so the description must never contain a fact the human did not confirm, and the use must be transparent in the record.

---

## Use Case 2: Root Cause Analysis Assistance

Root cause analysis is where the temptation to over-trust AI is strongest, because the model will happily produce a confident root cause. This is exactly where it must not decide. See [root cause analysis techniques](/articles/root-cause-analysis-techniques) for the methods; the model assists the method, it does not replace the analyst's reasoning.

**WHAT it does, and what it does not.** Generative AI can help the investigation team by: organizing the facts into a structured timeline, suggesting candidate cause categories to consider (so the team does not anchor on the first idea), drafting the questions for a five-whys or fishbone exercise, surfacing similar past deviations for comparison, and writing up the team's reasoning into a clear narrative once the team has reached its conclusion. What it does not do: determine the root cause. The root cause is a conclusion the qualified investigation team reaches from evidence; the model can scaffold the analysis and draft the writeup, but the determination is human.

**HOW to do it, step by step.**

1. Feed the model the verified deviation facts and ask it to build a chronological timeline and a structured fact set. The team verifies the timeline against source records.
2. Ask the model to propose candidate cause categories (man, machine, method, material, measurement, environment) with possible mechanisms under each, as a checklist to broaden thinking, not as an answer.
3. The investigation team runs the actual analysis, evaluating evidence for and against each candidate, and reaches a conclusion. This step is human reasoning over evidence.
4. Once the team has its conclusion, the model drafts the root cause narrative from the team's findings, which the team reviews, corrects, and owns.
5. The model can cross-reference similar historical deviations to check whether this is a recurring issue, which the team verifies against the actual records.

The line is sharp: the model widens the search space and writes up the result; the humans do the judging in between.

**Acceptance criteria.**

- The root cause statement is supported by evidence the team verified, not by model assertion.
- Every candidate cause the model raised was either evidenced or explicitly ruled out by the team, with the reasoning recorded.
- The final root cause is attributed to the named investigators, not to the tool.
- Any historical deviation the model cited was confirmed to exist and to be relevant.

**WORKED EXAMPLE.** For the tablet-press stop above, the team feeds verified facts to the model and asks for candidate categories. The model returns: machine (sensor fault, mechanical jam, calibration drift), method (incorrect hopper fill procedure), material (powder flow or bridging in the hopper), measurement (sensor miscalibration), environment (humidity affecting flow). The team investigates: the sensor calibration was in date and verified good, ruling out measurement; the equipment log showed no mechanical fault; but the granulation humidity that day was at the high end and the powder showed bridging on inspection. The team concludes the root cause is powder bridging in the hopper driven by elevated moisture, with the level sensor correctly detecting the resulting low-flow condition. The model then drafts the narrative from the team's conclusion. Note what happened: the model's "sensor fault" suggestion was wrong, and a team that had let the model decide would have chased a calibration that was fine. The human evidence-weighing is the control.

**COMMON mistakes.**

- Treating the model's first suggested cause as the answer, which is automation bias wearing a lab coat. The most common and most dangerous failure.
- The model citing a "similar past deviation" that does not actually exist or is not relevant, a confabulated reference that a hurried team accepts.
- A root cause narrative that reads beautifully but is not traceable to verified evidence. Inspectors probe the evidence behind a root cause, not the prose quality.
- Letting the model's framing narrow the investigation, so a real cause outside its suggested categories is never considered. The model should broaden, not narrow.

**INTERVIEW angle.** "Can AI determine root cause?" No, and saying yes is a red flag. The model can structure the timeline, suggest categories to avoid anchoring, surface historical comparisons, and draft the writeup, but the root cause is a conclusion the qualified team reaches from verified evidence. The failure mode is a confident wrong cause that reads well, so the control is human evidence-weighing and traceability of the conclusion to verified facts.

---

## Use Case 3: Drafting CAPAs

Once root cause is established, corrective and preventive actions follow. See [what is a CAPA](/articles/what-is-a-capa) for the fundamentals. Generative AI helps draft the action plan; it does not decide what actions are adequate or whether they are effective.

**WHAT it does.** Given the confirmed root cause and the deviation context, the model drafts candidate corrective actions (fixing the immediate problem) and preventive actions (stopping recurrence), in the house CAPA format, with draft action descriptions, suggested owners by function, and proposed completion approaches. It can also draft the effectiveness-check design as a starting point.

**HOW to do it, step by step.**

1. Provide the confirmed root cause and the affected process to the model.
2. The model drafts candidate corrective actions (addressing what already happened) and preventive actions (addressing the mechanism so it does not recur), distinguishing the two clearly.
3. The quality team and process owners evaluate the drafted actions for adequacy: do they actually address the root cause, are they feasible, are they proportionate to the risk?
4. The team finalizes the CAPA, assigns real owners and dates, and approves it under their names. The model's draft is a starting point, not the plan of record.
5. The model can draft the effectiveness-verification approach, which the team must scrutinize because a weak effectiveness check is a common finding. See [CAPA effectiveness verification](/articles/capa-effectiveness-verification).

The danger specific to CAPAs: a model tends to produce generic, plausible actions ("retrain the operator," "update the SOP") that sound reasonable but do not address the actual root cause and do not prevent recurrence. Retraining as a reflex CAPA is one of the most cited weak responses in the industry. The human must reject generic actions that do not connect to the specific root cause.

**Acceptance criteria.**

- Each action traces to the confirmed root cause; generic actions unconnected to the cause are rejected.
- Corrective and preventive actions are correctly distinguished, with at least one genuine preventive action addressing the mechanism, not just the symptom.
- Real, accountable owners and realistic dates are assigned by the team, not left as model placeholders.
- The effectiveness-verification method is defined, measurable, and actually capable of showing whether recurrence was prevented.

**WORKED EXAMPLE.** For the powder-bridging root cause, the model drafts: corrective action, reprocess or evaluate the affected batch per procedure; preventive actions, "retrain operators on hopper monitoring" and "review granulation moisture specification." The team scrutinizes. "Retrain operators" is rejected as a reflex action, the operators did nothing wrong, the sensor worked correctly. The real preventive action is to evaluate whether the granulation in-process moisture limit is tight enough to prevent bridging, and whether a hopper agitator or flow aid is warranted. The team rewrites the CAPA accordingly, assigns the process engineering lead as owner, and defines an effectiveness check: zero recurrence of hopper low-flow stops over the next twenty batches, with moisture data trended. The model's draft surfaced the structure; the human judgment fixed a weak, generic action that would have failed an effectiveness review.

**COMMON mistakes.**

- Accepting generic "retrain and update SOP" actions that do not address the mechanism. A leading category of inadequate-CAPA findings.
- No genuine preventive action, only corrective, so the deviation recurs and the repeat becomes its own finding.
- An effectiveness check that cannot actually demonstrate prevention, for example "monitor for recurrence" with no metric, timeframe, or acceptance threshold.
- The model's draft owners and dates left unchanged, so accountability is fictional.

**INTERVIEW angle.** "What is the risk of using AI to write CAPAs?" The model defaults to generic, plausible actions like blanket retraining that do not address the specific root cause, which is the single most common weak-CAPA pattern. The control is human evaluation of adequacy: every action must trace to the confirmed cause, there must be a real preventive action, and the effectiveness check must be measurable. The model drafts structure; the human ensures the actions actually work.

---

## Use Case 4: Summarizing Complaints and Trends

Generative AI is well suited to summarization, which is lower risk than decision support because the output is a digest a human verifies against the source, not a determination. See [product complaint handling](/articles/product-complaint-handling) for the underlying process.

**WHAT it does.** The model reads a body of complaint records, deviation histories, or trend data and produces a structured summary: common themes, frequency patterns, groupings by product or failure mode, and candidate signals worth a human looking at. It can draft the narrative section of a periodic trend review or a complaint summary, which the quality team verifies and owns.

**HOW to do it, step by step.**

1. Provide the model the relevant records (complaint texts, deviation summaries, trend data) from the validated source system.
2. Ask for a structured summary: themes, frequencies, groupings, and notable patterns, with each claim tied back to the source records it came from.
3. The quality reviewer verifies the summary against the source data, especially any counts, percentages, or trend claims, because a generated number can be wrong.
4. The reviewer uses the verified summary to support, not replace, the trend assessment and signal-detection judgment, which remains a human conclusion.

The key control for summarization: the model must not invent or miscount. Any quantitative claim it makes (this failure mode appeared 14 times, complaints rose 30 percent) must be verifiable against the source, because language models are unreliable at counting and arithmetic over large inputs. Where exact counts matter, compute them with a deterministic query and have the model narrate the verified numbers, not generate them.

**Acceptance criteria.**

- Every quantitative claim in the summary is verified against the source data or computed deterministically.
- The summary covers the records it claims to cover; nothing material was silently dropped because it exceeded a context window.
- Signal-detection and trend conclusions remain human judgments, supported by the summary, not made by it.
- The source records behind the summary are traceable.

**WORKED EXAMPLE.** A quality reviewer asks the model to summarize 120 complaints on a prefilled syringe over a quarter. The model groups them: 48 plunger-force complaints, 31 packaging-damage, 22 labeling, 19 other, and notes plunger-force complaints rose against the prior quarter. The reviewer does not trust the counts on faith. A deterministic query against the complaint database confirms the categories and counts, and corrects one miscategorized record. With the numbers verified, the reviewer judges that the plunger-force trend is a signal worth a formal investigation. The model accelerated the read; the human made the signal call and verified the arithmetic.

**COMMON mistakes.**

- Trusting a model-generated count or percentage without verifying it against the source. Models miscount; this is a known limitation, not an edge case.
- Summarizing a sample the model silently truncated, so the summary misses records and a real signal is buried.
- Letting the summary become the trend conclusion, so signal detection is effectively delegated to the model with no human judgment recorded.
- No traceability from a summary claim back to the records, so the basis cannot be reconstructed in an inspection.

**INTERVIEW angle.** "Is summarizing complaints with AI lower risk than using it for root cause?" Yes, because the output is a digest verified against the source rather than a quality decision, but it is not risk-free. The specific hazard is fabricated or miscounted numbers and silent truncation of the input. The controls are deterministic computation of any count that matters, verification against the source, and keeping the trend and signal conclusions as human judgments.

---

## The Guardrails, Made Concrete

Across all four use cases the same guardrails recur. Pulling them together as a control set:

| Guardrail | What it means in practice | Why it matters |
|---|---|---|
| Human review and ownership | A qualified person reviews, edits, and is recorded as the author of every regulated record | Quality decisions require accountable human judgment (Part 11, Annex 11, ICH Q10) |
| Grounding | The model works only from supplied verified facts or retrieved source documents, not from its own world knowledge | Prevents confabulation, the fluent-but-wrong output that is the signature LLM failure |
| No auto-decisions | The model never approves, classifies as final, or closes a quality-critical step on its own | An algorithm cannot own a GxP determination |
| Audit trail | The record shows AI assistance was used, who reviewed it, and what they changed | Transparency and attributability; the practice must be visible, not hidden |
| Verification of facts and numbers | Every fact and every count the model produces is checked against the source | Models confabulate facts and miscount; unverified output is unreliable |
| Transparency of use | Procedures state where AI is permitted, and records flag AI-assisted content | An inspector should never discover undisclosed AI in a quality process |

The most important of these, the one that fails most quietly, is grounding. A model asked to "write a root cause for this deviation" with no constraint will draw on its training data and produce something generic and possibly fabricated. The same model asked to "draft a root cause narrative using only the team's findings below, and flag anything the findings do not support" stays inside the evidence. Constrain the task, supply the source, and require the model to stay within it. Where the architecture supports it, retrieval-augmented generation that pins the output to retrieved controlled documents is the stronger pattern, covered in [qualifying LLMs and generative AI for GxP](/articles/qualifying-llms-genai-gxp).

---

## Validating and Qualifying the Assistant

A generative-AI assistant used in GxP quality operations is a computerized system and needs qualification proportionate to its risk. Because it drafts and never decides, and a human reviews every output, the risk profile is lower than a system that acts autonomously, which means the qualification is achievable, not impossible. But "a human checks it" is the control you are relying on, so the qualification must establish that the tool is fit for the drafting purpose and that the human-review control actually works.

**WHY (regulation and risk).** Under GAMP 5 and the FDA computer software assurance approach, you size assurance to intended use and risk. The intended use here is drafting and summarization with mandatory human review, not autonomous decision-making, so the assurance effort concentrates on the right things rather than trying to "validate" the open-ended output space of a language model, which is not feasible the way a deterministic function is.

**WHAT to qualify.** Not the language model's entire output space, which is unbounded. Instead:

- The configured assistant for its specific intended use: the prompts, the retrieval setup, the templates, the guardrail constraints, the output handling.
- The integration with the quality system: how drafts move into the deviation or CAPA record, how AI-assistance is flagged, how the audit trail captures review.
- The human-review workflow itself: that reviewers see what they need, that their edits and approval are captured, that accountability lands on the person.

**HOW, step by step.**

1. Write the intended-use statement: the assistant drafts and summarizes within named workflows, with mandatory human review, and makes no final quality decision. This statement sizes everything downstream.
2. Risk-assess per ICH Q9, treating the human-review step as the primary mitigation and asking what happens if the model produces a confident wrong output and the reviewer misses it.
3. Define test scenarios that exercise realistic inputs, including adversarial ones: a deviation with a misleading detail, a complaint set with a tricky count, an input designed to tempt the model into speculation. Confirm the guardrails hold and the output is reviewable.
4. Verify the integration controls: AI-assisted content is flagged, the audit trail captures the reviewer and their edits, and the human is recorded as author.
5. Qualify the human-review control: reviewers are trained on the tool's known weaknesses (confabulation, miscounting, generic CAPAs), and the procedure defines what meaningful review looks like.
6. Pin the model version where the vendor allows, and treat a vendor-driven model change as a change-control event, because the output behavior can shift under you without any action on your side. See [change control for validated systems](/articles/change-control-validated-systems).

**Acceptance criteria for the qualification.**

- The intended-use statement is approved and explicitly excludes autonomous decisions.
- Test scenarios, including adversarial inputs, demonstrate the guardrails hold and outputs stay reviewable.
- The audit trail correctly flags AI assistance and captures reviewer identity and edits.
- Reviewers are trained and the review procedure defines meaningful review.
- A change-control plan covers vendor model updates and prompt or template changes.

**COMMON mistakes.**

- Trying to "fully validate" the language model's outputs as if it were deterministic, then giving up because it is impossible, and deploying with no qualification at all. The answer is to qualify the configured use and the human control, not the model's infinite output space.
- Qualifying the tool but never qualifying the human-review step, so the control you are leaning on is untested.
- Ignoring vendor model changes, so a silent backend update changes behavior in production with no assessment.
- No version pinning and no record of which model version produced a given draft, so behavior cannot be reconstructed.

**INTERVIEW angle.** "How do you validate a generative-AI tool when its output is non-deterministic?" You do not validate the unbounded output space; you qualify the configured assistant for its specific intended use (drafting with mandatory human review), test it against realistic and adversarial scenarios to confirm the guardrails hold, qualify the human-review control that the whole approach depends on, and put vendor model changes under change control. The intended-use statement excluding autonomous decisions is what makes this tractable.

---

## Data-Integrity Controls

Generative AI in quality operations touches GxP records, so the [data integrity foundations](/articles/data-integrity-foundations) apply in full, with specifics for the generative case.

**Attributability.** The regulated record must be attributable to the human author, not the tool. The audit trail captures that AI assisted, who reviewed, and what they changed, but the person owns the record. A draft is not a record; it becomes a record when a person adopts it.

**The input data is GxP data.** Whatever you feed the model, deviation facts, complaint texts, batch data, is GxP data and must come from validated sources with its own integrity intact. Garbage in produces a fluent, plausible, garbage-out draft that is harder to catch precisely because it reads well.

**Confidentiality and the public-tool problem.** The most common real-world data-integrity failure is an employee pasting proprietary or confidential GxP content into a public consumer chatbot, where the data leaves your control and may be retained or used for training. The control is a sanctioned, contained tool plus a clear procedure prohibiting public tools for GxP content, plus training so people know why. A public chatbot is not a qualified system and is not a controlled environment; treat its use for GxP content as a data-integrity and confidentiality event.

**Output verification as an integrity control.** Because the model can fabricate facts and miscount, verifying every fact and number against the source is itself a data-integrity control, not just a quality nicety. An unverified generated number that lands in a trend report is an inaccurate record.

**Record what version did what.** Where feasible, capture the model version and the prompt or template version that produced a draft, so the conditions of generation are reconstructable. This is the generative analogue of knowing which version of a validated system created a record.

**Retention.** The drafts, the human edits, and the final record together tell the story of how the content was produced. Define what is retained. At minimum the final adopted record and the evidence of human review are GxP records; whether intermediate drafts are retained is a documented decision.

---

## Roles and Responsibilities

Generative-AI use in quality operations fails at the seams between functions, so name owners explicitly.

| Activity | Accountable | Contributes |
|---|---|---|
| Intended-use statement and risk class | System / Process Owner | QA, IT, Data Science |
| Tool qualification and guardrail testing | Validation / CSV lead | QA, IT, vendor |
| Procedure defining permitted AI use | Quality Assurance | System Owner |
| Deviation description (AI-assisted) | Initiator / investigator | QA |
| Root cause determination | Investigation team / SMEs | QA |
| CAPA adequacy and approval | QA and process owners | Investigation team |
| Complaint and trend conclusions | Quality reviewer | Complaints team |
| Human-review training | QA / Training | System Owner |
| Vendor model-change control | System Owner + QA | IT, vendor |
| Final record ownership and release | The named human author / approver | All |

The recurring failure is treating the AI tool as IT's responsibility and the outputs as the operator's problem, with no quality involvement in between. QA must own the procedure, the guardrails, and the human-review standard, because those are the controls keeping the practice defensible. See [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) for the broader model.

---

## Acceptance Criteria: How You Know the Program Is Sound

Before you run generative AI across deviation, CAPA, and investigation workflows in production, you should be able to evidence all of the following. Use it as a readiness checklist.

- A procedure defines exactly where generative AI is permitted, where it is prohibited, and that it never makes a final quality decision.
- The assistant is qualified for its intended use, with adversarial test scenarios confirming the guardrails hold.
- The human-review step is defined, trained, and tested, with reviewers aware of confabulation, miscounting, and the generic-CAPA failure mode.
- The audit trail flags AI-assisted content and captures the reviewer, their edits, and the accountable human author.
- A sanctioned contained tool is in place and a clear prohibition on public chatbots for GxP content is trained and enforced.
- Every fact and number the model produces is verified against the source as a defined step.
- Vendor model changes and prompt or template changes are under change control, with versions recorded where feasible.
- Root cause, CAPA adequacy, and trend conclusions are recorded as human judgments traceable to verified evidence.

If any line cannot be evidenced, the program is not ready, regardless of how impressive the demos looked.

---

## How This Plays Out in an Inspection

Inspectors are alert to AI in quality systems, and an investigator who sees AI-assisted records will probe a predictable set of questions. See [AI inspection readiness](/articles/ai-inspection-readiness) for the broader pattern. Expect: Where do you use generative AI and where do you prohibit it? Does the AI make any quality decision (the answer must be no)? How do you know an AI-drafted root cause or CAPA is correct? How is the human review meaningful rather than rubber-stamping? How is the tool qualified, and how do you handle vendor model changes? What stops staff pasting confidential data into public tools?

A program that answers with "the model drafts, a named human reviews and owns every decision, here is the qualification of the configured use, here is how we keep review meaningful, here is the data-integrity control set, and here is the confidential-data prohibition" reads as a system under control. A program where AI is in use but undisclosed, unqualified, or relied upon for decisions invites a finding. The worst inspection outcome is the investigator discovering AI in use that was never assessed at all, which is the same hidden-AI pattern that turns up with unassessed spreadsheet macros and vendor features.

---

## Common Mistakes and Inspection-Finding Patterns

Pulling the failures together, framed generically:

- **AI making the decision.** A root cause or CAPA approval effectively delegated to the model, which violates the principle that quality decisions need accountable human judgment. The single most serious failure.
- **Fluent confabulation accepted.** A confidently written but factually wrong draft approved because it reads well. Automation bias amplified by polish.
- **Unverified numbers in records.** A model-generated count or percentage placed in a trend report or summary without verification, producing an inaccurate record.
- **Generic reflex CAPAs.** Blanket retraining and SOP updates that do not address the root cause, the leading weak-CAPA pattern, now produced faster by AI.
- **Hidden or undisclosed AI.** AI in use that was never assessed, flagged in records, or covered by procedure. Discovered, not declared.
- **Public-tool data leakage.** Confidential GxP content pasted into a public chatbot, a confidentiality and data-integrity event.
- **Rubber-stamp review.** A defined human-review step that reviewers approve without engaging, revealed by near-total acceptance of drafts without edits.
- **No qualification, or impossible qualification attempted.** Either deploying with nothing, or trying to validate the model's unbounded output space and giving up. The right answer is qualifying the configured use and the human control.
- **Vendor model change ignored.** A backend model update changing behavior in production with no change-control assessment.
- **No traceability of generation conditions.** No record of which model version or prompt produced a draft, so the basis cannot be reconstructed.

---

## Interview Questions and How to Answer Them

If you are interviewing for a digital quality, CSV, or data-integrity role and generative AI in quality operations comes up, these questions separate a practitioner from someone reciting hype. Short, concrete answers win.

**"Where would you use generative AI in deviation and CAPA work, and where would you not?"** Use it to draft deviation descriptions from supplied facts, structure timelines and broaden cause categories in RCA, draft CAPA plans, and summarize complaints and trends. Never use it to determine root cause, approve a CAPA, classify a deviation as final, or make any quality decision. The model drafts, the human decides and owns.

**"What is the single most important control?"** Human review and ownership of every regulated record, backed by grounding so the model works only from verified facts rather than its own knowledge. The decision must always belong to an accountable human, and the audit trail must show it.

**"What is the characteristic failure mode of generative AI here, versus a classifier?"** Confabulation: a confident, fluent, factually wrong output. It is more dangerous than a classifier error because the polish defeats scrutiny. The mitigation is grounding, fact and number verification against the source, and a human review trained to expect it.

**"How do you validate something whose output is non-deterministic?"** You qualify the configured assistant for its specific intended use with mandatory human review, not the model's unbounded output space. Test realistic and adversarial scenarios to confirm guardrails hold, qualify the human-review control you depend on, and put vendor model changes under change control. The intended-use statement excluding autonomous decisions makes it tractable.

**"What is the biggest data-integrity risk?"** Two: staff pasting confidential GxP content into public chatbots where data leaves your control, and unverified model-generated facts or counts landing in records. The controls are a sanctioned contained tool with a public-tool prohibition, and mandatory verification of every fact and number against the source.

**"An AI-drafted CAPA says retrain the operator. What do you do?"** Challenge it. Reflex retraining is the most common weak CAPA and usually does not address the mechanism. Check whether the action traces to the confirmed root cause, whether there is a genuine preventive action, and whether the effectiveness check can actually demonstrate prevention. If the action does not connect to the cause, reject and rewrite it.

---

## The Honest Assessment

Generative AI is a real productivity gain in quality operations when it is kept to what it is good at: drafting and summarizing from verified facts, under human review. It is a real liability when it is allowed to drift toward deciding, because its outputs are fluent enough to defeat casual scrutiny and confident enough to be wrong.

The defensible path is unglamorous and consistent. Let the model draft, never decide. Ground it in verified facts and prohibit public tools for GxP content. Verify every fact and number it produces. Keep a named human accountable for every regulated record, and keep that review meaningful rather than reflexive. Qualify the configured use and the human-review control, not the impossible full output space, and put vendor model changes under change control. Make the use transparent, in procedure and in the record, so an inspector never has to discover it.

A program that documents honestly what AI drafts, what humans decide, and how the controls hold, is far more defensible than one that either bans AI while staff quietly use it anyway, or deploys it with no controls and hopes the demos hold up under inspection. The technology is moving quickly; the principle that quality decisions belong to accountable humans is not moving at all, and that is the fixed point to build around.
