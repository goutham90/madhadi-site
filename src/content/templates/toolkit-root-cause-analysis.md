---
title: "Root Cause Analysis Toolkit for Deviations, OOS, and Complaints"
description: "A plug-and-play RCA toolkit with a 5-Whys worksheet, a fishbone (Ishikawa) frame, a fault-tree, and a structured investigation report for deviations, OOS, and complaints, built to stop the lazy default-to-human-error finding, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-22
docType: "Template"
pillar: "quality-assurance"
relatedArticles: ["root-cause-analysis-techniques", "human-error-in-deviations"]
tags: ["root cause analysis", "deviation", "out of specification", "complaint", "CAPA", "investigation", "5 whys", "fishbone"]
tier: "Intermediate"
---

This is a ready-to-use RCA toolkit. It bundles four tools that work together: a 5-Whys worksheet, a fishbone (Ishikawa) frame, a fault-tree, and a structured investigation report you can attach to any deviation, out-of-specification (OOS) result, or complaint. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route the completed report through your normal deviation and CAPA system. A worked filled specimen follows so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

The toolkit is built around one rule: a root cause is something you can act on to stop recurrence. "Operator error", "analyst made a mistake", and "did not follow the procedure" are starting points, not conclusions. If your finding cannot be turned into a corrective action that changes the system, you have not reached root cause yet.

## Document control header

| Field | Entry |
|---|---|
| Document title | Root Cause Analysis Toolkit for Deviations, OOS, and Complaints |
| Document number | `<<FILL: FORM/SOP-ID, e.g. FRM-QA-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Quality Assurance>>` |
| Applies to | `<<FILL: sites / departments in scope>>` |
| Governing procedure | `<<FILL: deviation/OOS/complaint SOP-ID this attaches to>>` |

## 1. Purpose

This toolkit gives investigators a consistent way to find the true, actionable root cause of an event at `<<FILL: COMPANY NAME>>` and to record the investigation so a reviewer or inspector can follow the logic from the event to the cause to the corrective and preventive action. The objective is to fix the system that allowed the event, not to assign blame, and to prevent recurrence.

## 2. Scope

This toolkit applies to investigations of deviations, OOS and out-of-trend (OOT) results, and product complaints across the sites listed in the header. Pick the depth of analysis from the event's risk: a minor, well-understood, single-occurrence event may need only a short 5-Whys, while a critical, repeat, or unexplained event needs a fishbone or fault-tree plus the full report. The depth decision is recorded in section 7 of the report. This toolkit does not replace the governing deviation, OOS, or complaint procedure; it supports it.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Investigation owner | Runs the investigation, picks the tools by risk, gathers facts, writes the report, and proposes CAPA. |
| Area SME / supervisor | Provides process knowledge, reconstructs the timeline, and confirms what actually happened on the floor or bench. |
| Quality Assurance | Confirms the root cause is actionable (not a stopped-at-human-error finding), approves the report and CAPA, and owns disposition of affected material. |
| Subject experts (engineering, QC, validation, supplier quality) | Support technical analysis where the event touches equipment, methods, materials, or suppliers. |

## 4. Definitions

- **Root cause**: the underlying, actionable reason an event occurred; removing or controlling it prevents recurrence. There may be more than one.
- **Contributing factor**: a condition that increased the chance of the event or its severity but is not, on its own, the root cause.
- **Direct cause**: the immediate event or action that produced the problem (the last link in the chain), often confused with root cause.
- **Human error as root cause**: an unacceptable stopping point unless the investigation has shown the task was reasonable, the procedure was correct and usable, training and tools were adequate, and no system factor made the error likely. See section 6.
- **Human factors**: the design of tasks, procedures, tools, environment, and workload that make correct performance easy or hard. The real target when a person "made a mistake".

## 5. The investigation flow

Run the investigation in this order. Containment first so the problem does not spread, then facts, then cause, then action, then check that the action worked.

<div class="flow">
<div class="flow-step">Detect and contain</div>
<span class="flow-arrow">&rarr;</span>
<div class="flow-step">Describe the problem (what, where, when, how much)</div>
<span class="flow-arrow">&rarr;</span>
<div class="flow-step">Build the timeline and gather facts</div>
<span class="flow-arrow">&rarr;</span>
<div class="flow-step">Analyze cause (5-Whys / fishbone / fault-tree)</div>
<span class="flow-arrow">&rarr;</span>
<div class="flow-step">Confirm root cause is actionable</div>
<span class="flow-arrow">&rarr;</span>
<div class="flow-step">Assess affected material and scope</div>
<span class="flow-arrow">&rarr;</span>
<div class="flow-step">Define CAPA and verify effectiveness</div>
</div>

Pick the analysis tool by the event:

- **5-Whys** for a single, fairly linear event where the chain of cause is mostly known. Fast, but shallow if the event has several interacting causes.
- **Fishbone (Ishikawa)** when you need to widen the search before narrowing, or when the cause is not obvious. It forces you to look across categories so you do not lock onto the first idea.
- **Fault-tree** for a critical or complex failure with several possible paths, or where combinations of conditions had to line up. It shows AND and OR logic and supports a quantitative view.

You can combine them: use the fishbone to surface candidate causes, then a 5-Whys on the most likely branch, and a fault-tree if several conditions had to coincide.

## 6. The anti-human-error gate (run before you accept any "person" cause)

If your draft root cause is that a person did something wrong, you may not close the investigation until you have answered all of these and recorded the answers. Any "No" points to a system root cause that sits behind the human action.

| Question | Answer (Yes/No) | Evidence |
|---|---|---|
| Was a current, correct, and approved procedure available for the task? | `<<FILL>>` | `<<FILL>>` |
| Was the procedure clear, usable, and matched to how the task is really done? | `<<FILL>>` | `<<FILL>>` |
| Was the person trained and assessed as competent for this task? | `<<FILL>>` | `<<FILL>>` |
| Were the tools, equipment, and environment adequate (lighting, layout, alarms, fixtures, software prompts)? | `<<FILL>>` | `<<FILL>>` |
| Was workload, staffing, time pressure, or shift handover a factor? | `<<FILL>>` | `<<FILL>>` |
| Could the design have prevented or caught the error (forcing function, check, alarm, second verify)? | `<<FILL>>` | `<<FILL>>` |
| Has the same or a similar error happened before? | `<<FILL>>` | `<<FILL>>` |

If every answer supports that the task was reasonable, the procedure correct and usable, training adequate, tools and environment sound, and no design control could reasonably have caught it, then a genuine slip or lapse may be the cause; classify the human-factors type (slip, lapse, mistake, or violation) and target the contributing factors with the CAPA. Re-training alone is rarely an adequate corrective action and is a frequent inspection finding.

## 7. Tool A: 5-Whys worksheet

State the problem precisely, then ask "why" until each answer points to something you can act on. Stop when the next "why" leaves your control or stops being actionable. Branch when an answer has more than one cause; a single straight line of five whys is often a sign you stopped looking too early.

| Step | Question | Answer (fact, not opinion) | Evidence reference |
|---|---|---|---|
| Problem | What happened, exactly? | `<<FILL: the defined problem>>` | `<<FILL>>` |
| Why 1 | Why did that happen? | `<<FILL>>` | `<<FILL>>` |
| Why 2 | Why did that happen? | `<<FILL>>` | `<<FILL>>` |
| Why 3 | Why did that happen? | `<<FILL>>` | `<<FILL>>` |
| Why 4 | Why did that happen? | `<<FILL>>` | `<<FILL>>` |
| Why 5 | Why did that happen? | `<<FILL>>` | `<<FILL>>` |
| Root cause(s) | Actionable cause reached | `<<FILL: one or more>>` | `<<FILL>>` |

Quality checks for the 5-Whys:

- Each answer is a verified fact with evidence, not a guess.
- Read the chain bottom-up ("therefore"): if the logic does not hold in reverse, a link is weak.
- The final answer can be turned into a corrective action that changes the system.

## 8. Tool B: fishbone (Ishikawa) frame

List candidate causes under each category for the stated effect, then test each one against the facts. Mark each as ruled in, ruled out, or open with the evidence. The standard categories for a manufacturing or laboratory event are below; adapt the set to the event.

**Effect (problem statement):** `<<FILL: the problem the fishbone analyzes>>`

| Category | Candidate causes | Status (ruled in / out / open) | Evidence |
|---|---|---|---|
| People (training, competence, staffing, fatigue) | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Procedure / method (clarity, correctness, instructions) | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Equipment / machine (calibration, maintenance, design) | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Materials (raw materials, reagents, components, supplier) | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Measurement / data (method, sampling, instrument, software) | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Environment (facility, utilities, temperature, humidity) | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

Carry every cause marked "ruled in" into the 5-Whys or fault-tree and into section 11. Do not leave a category blank without saying you considered and excluded it; a blank looks like you never asked.

## 9. Tool C: fault-tree

Use a fault-tree for critical or multi-path failures. Place the undesired top event at the top, then break it into the immediate causes joined by logic gates: an **OR gate** when any one cause alone produces the event, an **AND gate** when several conditions must coincide. Keep breaking each cause down until you reach a basic, verifiable event you can act on. Mark each basic event as confirmed present, confirmed absent, or not yet checked.

**Top event:** `<<FILL: the failure being analyzed>>`

| Level | Event / condition | Gate to children (AND / OR) | Status (present / absent / unchecked) | Evidence |
|---|---|---|---|---|
| Top | `<<FILL: top event>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 1 | `<<FILL: intermediate cause 1>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 1 | `<<FILL: intermediate cause 2>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 2 | `<<FILL: basic event under cause 1>>` | n/a | `<<FILL>>` | `<<FILL>>` |
| 2 | `<<FILL: basic event under cause 2>>` | n/a | `<<FILL>>` | `<<FILL>>` |

The set of basic events that, together, are sufficient to cause the top event is the minimal cut set; those confirmed present are your root and contributing causes. An AND gate is good news for prevention: break any one leg and the top event cannot occur.

## 10. Structured investigation report

Attach this completed report to the deviation, OOS, or complaint record. Sections 11 to 13 carry the analysis from the tools above.

### 10.1 Event identification

| Field | Entry |
|---|---|
| Record type | Deviation / OOS / OOT / Complaint |
| Record number | `<<FILL>>` |
| Date detected | `<<FILL>>` |
| Detected by / how | `<<FILL>>` |
| Product / batch / system affected | `<<FILL>>` |
| Risk classification | Critical / Major / Minor (with basis) |
| Investigation owner | `<<FILL>>` |

### 10.2 Problem statement

State only what is known and measurable: what happened, where, when, to what, and how much. No cause, no blame, no fix yet.

`<<FILL: precise problem statement, e.g. "Assay result for batch X-2206 was 92.1 percent against a 95.0 to 105.0 percent specification (OOS), confirmed on retest of the original preparation.">>`

### 10.3 Immediate actions and containment

| Action | By whom | When | Reference |
|---|---|---|---|
| `<<FILL: e.g. material quarantined, line stopped, batch placed on hold>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

### 10.4 Timeline and facts

| Time / date | Event (fact) | Source / evidence |
|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

For OOS specifically, record the laboratory investigation (phase 1) outcome before any retest or resampling, and reference the governing OOS procedure. Do not invalidate an original result without an assignable, documented laboratory cause.

## 11. Root cause analysis section

| Field | Entry |
|---|---|
| Tools used (5-Whys / fishbone / fault-tree) and why | `<<FILL>>` |
| Anti-human-error gate completed (section 6)? | Yes / No |
| Root cause(s) identified | `<<FILL: actionable cause(s)>>` |
| Contributing factors | `<<FILL>>` |
| Direct cause (immediate trigger) | `<<FILL>>` |
| Why this is the root cause (logic summary) | `<<FILL>>` |
| If human action involved, human-factors type | Slip / Lapse / Mistake / Violation / N/A |

## 12. Scope, impact, and affected material

| Field | Entry |
|---|---|
| Other batches / lots / systems potentially affected | `<<FILL>>` |
| Basis for the scope decision | `<<FILL>>` |
| Product quality / patient safety impact | `<<FILL>>` |
| Disposition of affected material | `<<FILL: release / reject / further evaluation>>` |
| Regulatory reportability assessed? | Yes / No, with basis |

## 13. CAPA

Each corrective action must trace to a stated root or contributing cause. Mark whether each action is corrective (fixes this occurrence) or preventive (stops recurrence elsewhere). Re-training, re-issuing the SOP, or "reminded the operator" without a system change is not, by itself, an adequate action for a system root cause.

| Cause addressed | Action | Corrective / Preventive | Owner | Due date | Effectiveness check (how, when) |
|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 14. Acceptance criteria

An investigation is acceptable when all of the following are true:

- The problem statement is factual, specific, and free of cause or blame.
- The timeline and every cause statement are supported by referenced evidence.
- The depth of analysis matches the event's risk classification.
- The anti-human-error gate (section 6) was completed before any "person" cause was accepted.
- Each root cause is actionable, and each CAPA traces to a stated cause.
- At least one preventive action exists for any system or repeat cause, with a defined effectiveness check.
- Scope to other batches or systems was assessed, and affected material disposition is justified.

## 15. References

> 21 CFR 211.192 (production record review and investigation of discrepancies and failures).
> 21 CFR 211.198 (complaint files).
> 21 CFR 820.100 (corrective and preventive action), where a combination product applies.
> ICH Q10, Pharmaceutical Quality System (CAPA and management of deviations).
> ICH Q9, Quality Risk Management (for risk-based investigation depth).
> FDA Guidance for Industry, Investigating Out-of-Specification Test Results for Pharmaceutical Production.
> EU GMP Chapter 1 (Pharmaceutical Quality System) and Chapter 8 (Complaints and Product Recall).
> MHRA GMP Data Integrity Guidance (for evidence and contemporaneous records).

Confirm the current version and clause numbers of each reference before issue.

## 16. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 17. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Investigation owner) | `<<FILL>>` | | |
| Reviewer (Area SME) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the toolkit completed for an example deviation, so you can see how the tools connect and how the analysis moves past the first easy answer. The company, batch, and numbers are illustrative; replace them with your own.

**Problem statement:** During filling of batch FP-2207, the line stopped twice on a fill-weight reject alarm, and 1,420 vials were rejected over 40 minutes. The reject rate (4.1 percent) exceeded the 1.0 percent in-process limit.

**Anti-human-error gate (extract):**

| Question | Answer | Evidence |
|---|---|---|
| Was a current, correct procedure available? | Yes | SOP-FILL-009 v4, current |
| Was the procedure usable and matched to the real task? | No | SOP did not state the warm-up purge step the line needs after a stop |
| Was the operator trained? | Yes | Training record current |
| Were tools and environment adequate? | No | Checkweigher set-point was not re-zeroed after the pump change earlier that shift |

The first draft cause was "operator did not run the line correctly". The gate turned up two system gaps, so that cause was rejected.

**5-Whys (the branch that held):**

| Step | Answer |
|---|---|
| Problem | Fill-weight rejects exceeded the in-process limit on FP-2207. |
| Why 1 | The checkweigher rejected vials that were within true weight. |
| Why 2 | The checkweigher set-point drifted after the filling pump was changed mid-shift. |
| Why 3 | The pump-change procedure did not require re-zeroing the checkweigher. |
| Why 4 | The change procedure and the filling SOP were written separately and never cross-referenced. |
| Root cause | Procedure gap: a pump change does not trigger a required checkweigher re-zero, so the reject set-point can drift undetected. |

**Fishbone confirmation:** People ruled out (training current). Measurement ruled in (checkweigher zero). Equipment ruled in (pump change). Procedure ruled in (no cross-reference). Materials and environment ruled out.

**Root cause(s):** Procedure gap linking a pump change to a required checkweigher re-zero. Contributing factor: SOP-FILL-009 omitted the post-stop purge step.

**CAPA (extract):**

| Cause | Action | C/P | Effectiveness check |
|---|---|---|---|
| No re-zero after pump change | Add a mandatory checkweigher re-zero and verification step to the pump-change procedure, with a recorded check | Preventive | Review next 3 pump changes for the recorded re-zero; reject rate within limit |
| SOP missing purge step | Revise SOP-FILL-009 to include the post-stop purge | Corrective | Confirm revised SOP in use; no recurrence over next 5 batches |

In this example the investigator refused the easy "operator error" finding, ran the gate, found two system gaps, traced the reject rate to a checkweigher zero that drifted after an unrelated pump change, and wrote CAPA that changed the procedures rather than re-training a person who had done nothing wrong. That sequence, reject the blame answer, prove the system cause with evidence, fix the system, is exactly what a reviewer expects to see.

## Common inspection findings this toolkit prevents

- Root cause recorded as "human error", "operator error", or "did not follow procedure" with no analysis of why the error was possible.
- Re-training listed as the only corrective action for a system problem.
- A problem statement that already names a cause or a culprit instead of stating facts.
- Cause statements with no supporting evidence or timeline.
- A single straight 5-Whys that stopped at the first plausible answer, with no branching or cross-check.
- CAPA that does not trace to the stated root cause, or has no effectiveness check.
- No scope assessment, so other affected batches or systems were never evaluated.
- An original OOS result invalidated without a documented, assignable laboratory cause.

## How to adapt this toolkit

1. Set your document number, owner, and effective date in the header, and point the governing-procedure field at your real deviation, OOS, and complaint SOPs.
2. Decide your risk-to-depth rule in section 2: which classifications require a fishbone or fault-tree versus a short 5-Whys.
3. Adjust the fishbone categories in section 8 to fit your operation (a laboratory event may want method, sample, instrument, and reagent categories instead of machine and materials).
4. Keep the anti-human-error gate in section 6 mandatory; it is the part that stops the default-to-human-error finding.
5. Wire section 13 to your CAPA system so each action and its effectiveness check are tracked to closure.
6. Confirm every regulation in section 15 against the current published version before issue.
