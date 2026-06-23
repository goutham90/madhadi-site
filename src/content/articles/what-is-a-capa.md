---
title: "What Is a CAPA? Corrective and Preventive Action Explained"
description: "CAPA is the backbone of every quality management system. This guide explains what CAPA is, when it's triggered, how to run one end to end, and what separates an effective CAPA from a compliance checkbox."
pubDate: 2025-08-17
tags: ["CAPA", "QMS", "GxP", "quality", "foundations"]
tier: "Beginner"
pillar: "quality-assurance"
---

CAPA stands for Corrective and Preventive Action. It's one of the most fundamental concepts in quality management across pharmaceuticals, biologics, and medical devices, and one of the most consistently misunderstood.

The corrective part addresses a quality problem that has already occurred: you've identified a failure, and you're taking action to fix it. The preventive part addresses risk: you've identified something that could fail, and you're taking action before it does. In practice, most CAPAs in a regulated manufacturing or testing environment are corrective. True preventive CAPAs, opened proactively based on risk or trend data rather than in response to a failure, are less common but just as important. A cell therapy site that notices a yield or viability trend drifting toward its action limit and acts before any lot fails release has opened a preventive CAPA; a sterile fill site that tightens an environmental monitoring program after a near-miss did the same.

A second distinction trips up almost everyone new to the field, and it matters more than the corrective-versus-preventive split. A *correction* is the immediate fix that stops the bleeding: you discard the bad batch, you re-run the failed analysis, you lock down the misconfigured system. A *corrective action* is the systemic change that stops the same problem from happening again. Corrections are necessary but never sufficient. A record that contains only corrections, with no corrective action that reaches the root cause, is a record that guarantees recurrence. Inspectors read for exactly this gap, and they find it often.

This article assumes you have never run a CAPA and want to be able to run one, defend it in an inspection, and answer questions on it in an interview by the time you finish. The related mechanics live in [CAPA effectiveness verification](/articles/capa-effectiveness-verification), [root cause analysis techniques](/articles/root-cause-analysis-techniques), and [deviation management](/articles/deviation-management).

---

## Why CAPA Exists: the Regulatory Basis

CAPA is not a best practice that the industry invented. It is required, explicitly in some regulations and implicitly in others, and the wording matters because inspectors quote it back to you.

**Drugs and biologics (US): 21 CFR Part 211.** This is where most pharma, biologic, and cell and gene therapy CAPAs live. There is no clause literally titled "CAPA" in Part 211, but the obligation is there. 21 CFR 211.192 requires that any unexplained discrepancy or failure of a batch to meet specifications be thoroughly investigated, whether or not the batch has been distributed, and that the investigation extend to other batches and products that may have been associated. That investigate-and-extend duty is corrective and preventive action by another name. The broader CGMP system in Part 211 (production records review under 211.180, complaint handling under 211.198) feeds the same loop. The walkthrough of the regulation is in [the 210/211 CGMP walkthrough](/articles/cfr-210-211-cgmp-walkthrough).

**Pharmaceutical quality system: ICH Q10 (2008).** The ICH Q10 Pharmaceutical Quality System names a "corrective action and preventive action (CAPA) system" as one of four core elements, alongside the process performance and product quality monitoring system, the change management system, and management review. Q10 frames CAPA as a tool that should draw on the full range of inputs (complaints, deviations, audits, returns, trends) and feed continual improvement. For a biologic or cell and gene therapy operation, Q10 is the system context that ties deviations, complaints, and trends into one CAPA loop. The system context is laid out in [the pharmaceutical quality system](/articles/pharmaceutical-quality-system).

**The explicit clause (devices, and relevant to combination products): 21 CFR 820.100.** This is the most explicit CAPA clause in any US framework, which is why it is worth knowing even when your product is a drug or biologic, and why it applies directly to the device constituent of a combination product. It requires manufacturers to establish and maintain procedures for corrective and preventive action that include analyzing processes and quality data to identify existing and potential causes of nonconforming product, investigating the cause of nonconformities, identifying the action needed to correct and prevent recurrence, verifying or validating that the action is effective and does not adversely affect the finished device, implementing and recording changes, disseminating the information to those responsible, and submitting relevant information for management review. Read that list once: it is the seven-step process below, written into law.

> 21 CFR 820.100(a): "Each manufacturer shall establish and maintain procedures for implementing corrective and preventive action."

**Medical devices under QMSR.** The FDA finalized a rule in early 2024 that incorporates ISO 13485:2016 by reference and replaces the Quality System Regulation with the Quality Management System Regulation (QMSR), with the rule taking effect February 2, 2026. CAPA expectations carry through the change largely intact; ISO 13485 clauses 8.5.2 (corrective action) and 8.5.3 (preventive action) now do the regulatory work that 820.100 did. This matters mainly to combination products and software as a medical device that sit under the device quality system.

**ISO 9001:2015 and ISO 13485:2016.** Both standards carry corrective action requirements in clause 10.2 (ISO 9001) and 8.5.2/8.5.3 (ISO 13485). Note one terminology shift worth knowing: the 2015 revision of ISO 9001 dropped the standalone "preventive action" clause and reframed prevention as risk-based thinking built into the management system. The intent, preventing problems before they occur, is unchanged; the structure moved into risk management across the whole system. ISO 13485, because of its device focus, kept an explicit preventive action clause.

**The risk and quality rationale.** Strip away the citations and CAPA exists for one reason: regulated products reach patients, and a quality system that only fixes the batch in front of it while leaving the cause intact will ship the same defect again. CAPA is the mechanism that converts a single failure into organizational learning. A firm without a working CAPA system is not learning from its own data, which means it is accumulating latent failures that surface as recalls, field actions, and patient harm. That is why the absence of effective CAPA is treated by inspectors as a quality system failure, not a paperwork gap.

---

## When Is a CAPA Opened?

CAPAs aren't opened for every quality event. A CAPA is warranted when the issue is significant enough that a structured, tracked response is needed, and when there's a root cause that requires systemic correction to prevent recurrence. Not every deviation needs a CAPA. Many minor deviations are resolved with direct corrective action (retraining, remediation of the immediate issue) without needing a formal CAPA.

CAPAs are typically opened from:

- Deviations with significant or recurring root causes
- Out-of-specification or out-of-trend results that indicate a systemic issue
- Internal or external audit findings
- Customer complaints or product complaints
- Adverse event trends, field safety corrective actions, or recall triggers
- Supplier nonconformances and incoming inspection failures
- Nonconforming product or process monitoring excursions
- FDA Form 483 observations or warning letter items
- Recurring deviation patterns identified during trending
- Management review conclusions that identify quality gaps

The decision to open a CAPA versus handle an issue through the deviation process alone is a quality judgment. It should be documented. "This deviation was handled within the deviation record without a CAPA because the cause was isolated, fully contained, and not systemic" is acceptable. Leaving it unaddressed because no one decided either way is not.

### Triage: the gate most systems get wrong

The trigger list above tells you where CAPAs come from. It does not tell you which events deserve one. That decision is triage, and a mature quality system makes it explicit rather than ad hoc. The two questions that drive triage are severity and likelihood of recurrence. The companion discipline of classifying the event itself is covered in [quality event classification and triage](/articles/quality-event-classification-triage).

A useful way to structure this is a simple matrix. Plot the potential impact of the event (negligible, minor, major, critical) against how likely the same cause is to repeat (isolated, occasional, frequent, systemic). High impact or high recurrence pushes the event toward a CAPA. Low on both axes usually means the deviation record's own corrective action is enough.

| Potential impact | Isolated cause | Recurring or systemic cause |
|---|---|---|
| Negligible / minor | Resolve in deviation record | Trend it; CAPA if the trend confirms |
| Major | CAPA, standard timeline | CAPA, expedited, with containment |
| Critical (product or patient at risk) | CAPA with immediate containment | CAPA with immediate containment and escalation |

The matrix is a guide, not a substitute for judgment. What it gives you is consistency: two reviewers looking at the same event reach a similar decision, and the rationale is on the record. The failure mode to avoid runs in both directions. Under-triage leaves real systemic problems sitting in deviation records that close in two weeks and teach the organization nothing. Over-triage floods the system with low-value CAPAs, which dilutes attention and produces the aging backlog that inspectors treat as a red flag in itself. A CAPA system drowning in trivial entries is no healthier than one with too few.

---

## What a CAPA Record Contains

Before walking the process, it helps to know what fields a CAPA record actually carries, because the procedure populates these in sequence. A complete CAPA record, whether in a paper form or an electronic quality management system, has the following:

| Field | What it captures | Owner |
|---|---|---|
| CAPA number | Unique identifier, links to source records | QA / system |
| Source / trigger | Deviation, audit, complaint, trend, or 483 that opened it | Initiator |
| Date opened | Start of the clock for timelines | QA |
| Problem statement | What failed, where, when, how detected, what is affected | Initiator |
| Risk classification | Severity and recurrence rating, drives timeline | QA / risk owner |
| Immediate corrections / containment | Actions already taken to stop the bleeding | Process owner |
| Root cause analysis | Method used, evidence, conclusion | Investigator |
| Corrective action plan | Specific actions, owners, due dates | Process owner |
| Preventive action plan | Read-across actions to adjacent risks | Process owner |
| Verification of implementation | Evidence each action was completed | QA |
| Effectiveness check plan | Criteria, metric, method, scheduled date | QA |
| Effectiveness check result | Pass / fail with supporting data | QA |
| Closure approval | Signature confirming the CAPA is complete | QA / quality head |
| Linked records | Deviation, OOS, change control, complaint numbers | All |

A record missing the effectiveness check plan at opening, or missing linked records, is a record that will close badly. Fill these in as the CAPA moves, not at the end.

---

## The CAPA Process Step by Step

**Step 1: Problem Statement**
Describe the issue being addressed specifically and factually. "Data integrity concerns identified during internal audit of the chromatography data system" is vague. "Internal audit conducted 2026-05-15 identified that a liquid chromatography instrument had its audit trail disabled for sequence integration events, affecting 47 sequences processed between 2026-01-01 and 2026-05-15" is specific. The problem statement determines the scope of the entire CAPA.

A weak problem statement is the most common reason a CAPA goes wrong, because everything downstream inherits its scope. If the statement is too narrow, the investigation misses related failures. If it is too broad, the CAPA balloons into an unfinishable project. A good test: the problem statement should name what failed, where, when, how it was detected, and what is known to be affected, in plain factual terms, with no speculation about cause. Cause comes later. Mixing a presumed cause into the problem statement ("audit trail disabled due to analyst error") biases the entire investigation toward confirming that guess.

**Step 2: Risk Assessment**
Before diving into root cause analysis, assess whether the identified issue poses immediate product or patient risk. If it does, the CAPA process includes immediate containment actions taken concurrently with the full investigation, not after. Risk assessment documents whether affected product is in distribution, whether further risk exists if the problem continues, and what the likely impact on product quality or safety is. The structured discipline behind this sits in [quality risk management](/articles/quality-risk-management).

Containment and root cause work run in parallel for a reason. Waiting for a finished investigation before you quarantine suspect material or freeze a compromised system is how a contained event becomes a recall. The risk assessment is also where you decide the scope of the "affected" determination: one instrument or the whole laboratory, one batch or every batch processed since the last known-good state. Getting that boundary right early saves a painful re-scoping later.

**Step 3: Root Cause Analysis**
This is where most CAPAs succeed or fail. Root cause analysis must identify the systemic reason why the failure occurred, not just describe what happened. The methods in detail, with worked examples, are in [root cause analysis techniques](/articles/root-cause-analysis-techniques). The short version of the common methods:

*5-Why Analysis:* Ask "why" repeatedly until you reach the systemic failure. The audit trail was disabled (why?) because an IT upgrade reset audit trail settings (why?) because the change control process for IT upgrades didn't include a validation impact assessment checkpoint (why?) because the change control SOP was written before the data integrity policy was implemented and wasn't updated (root cause: change control SOP gap).

*Fishbone Diagram (Ishikawa):* Categorizes potential causes into branches (People, Process, Equipment, Materials, Environment, Measurement) and works through each branch to identify contributing factors. Useful for complex failures with multiple contributing causes.

*Failure Mode and Effects Analysis (FMEA):* More structured, assesses severity, occurrence, and detectability for each identified failure mode. More commonly used for process design risk assessment than for single-event CAPA investigations, but valuable when a CAPA needs to evaluate where else a failure mode could surface.

Whatever method you use, the root cause conclusion must be supported by evidence. "Root cause: human error" supported by no further investigation is not a root cause. When an investigation lands on operator action, the next question is always why the system allowed that action to cause harm: Was the procedure ambiguous? Was the training inadequate? Was there no second check at the point of risk? Most "human error" findings, examined honestly, resolve into a process or system gap that a person merely revealed. The honest treatment of operator-attributed failures is set out in [human error in deviations](/articles/human-error-in-deviations).

A practical caution on the 5-Why method: it is only as good as the person asking. Two investigators can run five whys on the same event and reach completely different conclusions, because each "why" is a branch point. Treat the chain as a hypothesis to be tested against evidence (records, configuration logs, interviews, the physical state of the system), not as a script that produces a root cause by itself. Stopping too early lands on a symptom; forcing the chain too far invents causes that the evidence does not support.

**Step 4: Corrective Actions**
What will be done to fix the identified failure and its direct effects? Corrective actions are specific, have owners, and have due dates. They address the root cause, not just the symptom.

Poor corrective action: "Retrain personnel on audit trail requirements."
Better corrective action: "Revise the change control SOP to include a validation impact assessment checkpoint for all IT system changes. Train all IT and validation personnel on the revised SOP within 30 days of SOP approval."

The difference: the first doesn't address the systemic gap. The second does. It also helps to think in terms of a hierarchy of effectiveness, the same logic that occupational safety uses. The most reliable actions remove the possibility of the failure (eliminate the manual step, configure the system so the unsafe setting cannot be selected). Next come engineering and system controls that catch the failure automatically. Below that sit procedural controls and, weakest of all, training and reminders, which depend on a person remembering to do the right thing every time. Retraining as the sole corrective action is the classic weak fix, because the moment attention lapses, the failure returns. Strong CAPAs reach for the top of the hierarchy wherever the risk justifies it.

| Tier | Type of action | Reliability | Example |
|---|---|---|---|
| 1 | Eliminate / design out | Highest | Remove the manual integration step; lock the audit trail setting |
| 2 | Engineering / system control | High | Configuration that prevents the setting from being changed without QA approval |
| 3 | Automated detection | Medium-high | Periodic system report flags any disabled audit trail |
| 4 | Procedural control | Medium | New SOP checkpoint requiring verification after IT changes |
| 5 | Training / awareness | Lowest | Retrain analysts on audit trail requirements |

Any action at tier 4 or 5 standing alone should prompt the question: why couldn't we reach higher? Sometimes the answer is legitimate, but it should be a deliberate decision, not the default.

**Step 5: Preventive Actions**
Are there similar issues elsewhere that haven't caused a problem yet but could? If the audit trail was disabled on one liquid chromatography instrument due to an IT upgrade, check the other instruments. If the change control SOP gap affected chromatography instruments, could it have affected other validated systems? Preventive actions extend the fix to adjacent risks.

This horizontal extension, often called read-across, is what separates a fix from an improvement. The corrective action repairs the instance that broke. The preventive action assumes the same latent cause is lying in wait elsewhere and goes looking for it before it surfaces. A change control gap that reset one instrument's audit trail almost certainly threatens every validated system that goes through the same change process. Closing the CAPA on the single instrument while leaving that exposure untouched is exactly the pattern that produces the same finding again, on a different system, a year later. Note that 211.192 makes read-across a legal duty for drug investigations: the investigation "shall extend to other batches of the same drug product and other drug products that may have been associated with the specific failure."

**Step 6: Implementation and Verification**
Each action has a due date and an owner. QA tracks completion. When an action is completed, it's verified: the SOP was revised and approved (check the document control system), training was completed (check training records), the audit trail is now correctly configured (verify in the system).

Verification is not the same as effectiveness, and conflating the two is a frequent mistake. Verification confirms the action was done. Effectiveness confirms the action worked. Marking a corrective action complete because the revised SOP is approved tells you the document exists. It tells you nothing about whether the change actually prevents recurrence. That is a separate question, answered later, with data.

**Step 7: Effectiveness Check**
This is where many CAPA systems fail. An effectiveness check is a planned assessment, conducted after implementation, that verifies the CAPA actually solved the problem. It's not enough to complete the actions. The actions must have worked. The full method, including how to size the window and pick the metric, is in [CAPA effectiveness verification](/articles/capa-effectiveness-verification).

For the audit trail CAPA example: conduct a follow-up audit of chromatography systems 6 months after the revised change control SOP is implemented. Verify no new audit trail issues were introduced during IT changes during that period. If there are no new issues, the CAPA is effective. If there are, the CAPA is reopened and the root cause analysis is revisited.

Effectiveness checks need defined criteria upfront: what does "effective" look like? How will it be measured? When will it be assessed? These questions should be answered when the CAPA is opened, not when it's time to close it. The strongest effectiveness checks rest on objective data rather than opinion: a recurrence count of zero over a defined window, a deviation rate that has dropped against a stated baseline, an audit of the population of systems that were supposedly fixed. A check that reads "confirmed effective, no further issues observed" with no measurement behind it is a check in name only, and a reviewer will treat it as such.

### Acceptance criteria: how you know each step is done right

| Step | The step is done correctly when... |
|---|---|
| Problem statement | A reader who was not present can scope the issue from it; no cause is assumed |
| Risk assessment | Affected product and distribution status are stated; containment is decided, not deferred |
| Root cause | The conclusion is backed by cited evidence and logically explains the problem statement |
| Corrective action | Actions trace to the root cause, sit as high on the effectiveness hierarchy as the risk allows, and each has an owner and date |
| Preventive action | Read-across to adjacent systems/products is documented, even if the answer is "none found, here's why" |
| Verification | Objective evidence (document numbers, training records, system screenshots) shows each action completed |
| Effectiveness check | A measurable criterion, a metric, a method, and a date were defined at opening and the result cites data |
| Closure | All actions verified, effectiveness confirmed, linked records updated, QA signature present |

---

## A Worked Example, End to End

The fragments above all trace one event. Here is the same CAPA assembled as a record would read it.

- **CAPA number:** CAPA-2026-0142, opened 2026-05-18.
- **Source:** Internal audit finding, audit report IA-2026-09.
- **Problem statement:** Internal audit conducted 2026-05-15 identified that a liquid chromatography instrument (asset tag LC-04) had its audit trail disabled for sequence integration events. 47 analytical sequences processed between 2026-01-01 and 2026-05-15 ran without a complete audit trail. Detected by audit trail configuration review.
- **Risk assessment:** Of the 47 sequences, 31 supported released batches and 16 supported in-process testing. No product is out of specification. Risk is to data integrity and reconstructability, not to product quality directly. Containment: LC-04 taken out of service for GMP work until reconfigured; data review of the 47 sequences initiated to confirm results were not altered.
- **Root cause:** A vendor IT upgrade applied 2025-12-20 reset audit trail settings to default (disabled). The change was processed through change control but the change control SOP had no validation impact assessment checkpoint, so the audit trail impact was never evaluated. Root cause: change control SOP gap (no validation impact assessment step for IT changes). Evidence: change record CC-2025-318, system configuration log, vendor upgrade notes.
- **Corrective actions:** (1) Reconfigure LC-04 audit trail to capture integration events, verify, return to service. Owner: lab IT. Due 2026-05-22. (2) Revise change control SOP to add a validation impact assessment checkpoint for all IT/computerized system changes. Owner: QA. Due 2026-06-30. (3) Train IT and validation staff on revised SOP within 30 days of approval. Owner: training. Due SOP approval + 30 days.
- **Preventive actions:** Review audit trail configuration on all 12 GMP chromatography and computerized lab systems for the same default-reset exposure. Owner: validation. Due 2026-06-15. (Result: 2 additional systems found with the same issue, added to corrective scope.)
- **Verification:** SOP revision QMS-DOC-441 rev 3 approved 2026-06-25; training completion records for 18 staff; LC-04 configuration screenshot confirming integration audit trail active.
- **Effectiveness check:** Defined at opening. Criterion: zero new audit-trail-disabled findings on any computerized lab system attributable to a change, over the 6 months following SOP approval, confirmed by a targeted re-audit. Scheduled 2026-12-25. Result recorded at that date.
- **Linked records:** Deviation DEV-2026-077 (data review of 47 sequences), change control CC-2026-205 (SOP revision), audit report IA-2026-09.

Read that record and you can see every operational dimension: what failed, the risk, the systemic cause, actions that reach the cause and climb the effectiveness hierarchy, read-across that found two more systems, and an effectiveness check with a number behind it. That is the shape a defensible CAPA takes.

---

## Roles and Responsibilities

CAPA is a team activity, and inspectors ask who owned what. A clear RACI prevents the "everyone and no one" ownership that lets CAPAs age.

| Role | Responsibility in the CAPA |
|---|---|
| CAPA owner (often process or area owner) | Accountable for the whole record reaching effective closure; drives the actions |
| Initiator | Raises the CAPA, drafts the problem statement, links the source record |
| Investigator / SME | Performs root cause analysis, gathers evidence, proposes actions |
| Action owners | Execute individual corrective/preventive actions by the due date |
| Quality Assurance | Reviews and approves the problem statement, root cause, action plan, and effectiveness criteria; tracks timelines; approves closure |
| Quality head / management | Reviews CAPA metrics at management review, resolves resourcing, escalates aging items |
| Area management | Provides resources and removes blockers so action owners can deliver |

The roles map to the wider organization in [GxP roles and responsibilities](/articles/gxp-roles-responsibilities). One principle holds across all of them: the person who caused or is closest to the problem can own actions, but QA owns the integrity of the process, including the decision that the CAPA is genuinely closed.

---

## CAPA Timelines

CAPAs need due dates for root cause completion, action completion, and effectiveness check. FDA doesn't specify exact numerical timelines in regulation, but inspection experience makes the expectations clear:

- Root cause analysis: generally within 30 days of CAPA opening for standard CAPAs, faster for critical ones
- Action items: typically 30-90 days, depending on complexity
- Effectiveness checks: typically 3-12 months after implementation, depending on the issue and what metric will demonstrate effectiveness

CAPAs without due dates, or with due dates that keep getting extended without justification, are findings. An aging CAPA with a root cause that says "under investigation" after 90 days tells an inspector the organization isn't taking it seriously.

Extensions are not forbidden, and a system that never extends a date is probably setting unrealistic ones. What inspectors look for is whether each extension carries a documented, approved justification and a revised date, rather than a quiet slip with no record. One disciplined extension on a genuinely complex action is defensible. A pattern of serial extensions across the CAPA population, with no impact assessment of the delay, signals a system that has lost control of its own commitments. The phrase to keep in mind is that you are accountable not for closing fast but for closing honestly, on a schedule you can justify.

---

## What Makes a CAPA System Work vs. Just Exist

Companies have CAPA systems. Not all of them work.

A CAPA system that works:
- Has clear ownership (every CAPA has an owner who is accountable for completion)
- Tracks due dates and escalates overdue items
- Has meaningful effectiveness checks with defined criteria
- Is reviewed regularly at management review (CAPA aging, overdue items, effectiveness failures)
- Gets closed only when actions are verified and effectiveness is confirmed

A CAPA system that just exists:
- Has CAPAs open for years with no substantive progress
- Has effectiveness checks that say "effective" with no data to support the conclusion
- Has root causes that are generic ("training," "human error") across all events
- Has actions that are completed on paper but haven't changed anything in practice
- Is never discussed at management review

The FDA has seen both. An inspector reviewing your CAPA system can tell the difference within 30 minutes by reading a random sample of records.

### What an inspector actually does

The 30-minute claim is not rhetorical. Inspectors have a repeatable method. They pull the CAPA log, scan for the oldest open items and the ones tied to high-risk events, and request a handful of full records. Then they read for the seams: Does the root cause actually explain the problem statement, or is there a logical gap? Do the corrective actions reach that root cause, or do they stop at a correction? Was an effectiveness check defined, scheduled, and supported by data, or was it backfilled at closure? They will also trace the link the other way, from a deviation or complaint to its CAPA, to confirm that significant events were not quietly closed without one. CAPA draws sustained attention in any GMP inspection, and for combination products with a device constituent it is one of the four subsystems FDA examines under its device inspection approach. How to prepare for that scrutiny is in [FDA inspection readiness](/articles/fda-inspection-readiness).

A pattern of vague root causes and training-only fixes across the sample is what produces the recurring CAPA-related observations in FDA Form 483s and warning letters, especially the failure to extend corrective action to the full scope of the problem and the absence of effectiveness verification. CAPA procedure deficiencies are among the most cited quality system observations year after year, and they are largely preventable by running the seven steps honestly. The detailed pattern analysis lives in [FDA warning letters: the patterns](/articles/fda-warning-letters-patterns), and the mechanics of responding when you do receive an observation are in [483 and warning letter response](/articles/483-warning-letter-response).

---

## Common Mistakes and Inspection-Finding Patterns

These are the recurring CAPA failures inspectors cite, stated generically. Recognize them in your own system before someone else does.

- **Correction dressed up as corrective action.** The record discards the batch and stops. No systemic change, so the event will recur. The tell: the action plan describes what was done to this instance, never what changed for the future.
- **"Human error" or "training" as the universal root cause.** When most CAPAs in a system land on the same generic cause, the investigations are not reaching the real systemic gap. Inspectors specifically look for this monoculture of root causes.
- **No effectiveness check, or a check with no data.** Closing on action completion alone, or an effectiveness statement that reads "no further issues observed" with nothing measured.
- **Scope too narrow.** The CAPA fixes the one instrument and ignores the eleven identical ones, then the same finding appears elsewhere later. This is the read-across failure, and it is explicitly required by 211.192 for drugs.
- **Aging and serial extensions.** Open CAPAs with no progress, due dates that slide repeatedly without justification, and a backlog that is itself a finding.
- **Effectiveness check backfilled at closure.** Criteria invented at the end to match whatever happened, rather than defined at opening. Inspectors check the open date against when the criteria were set.
- **Significant events closed without a CAPA.** A serious deviation or complaint resolved in the deviation record alone, with no documented rationale for why no CAPA was raised.
- **Disconnected records.** The deviation, the OOS, the change control, and the CAPA all exist but do not reference each other, so no one can reconstruct the full story.

---

## 21 CFR 820 vs. 211 Requirements, Side by Side

The two US frameworks reach the same destination by different routes. Knowing the difference is a common interview question.

| Aspect | 21 CFR 820.100 (devices, QSR / now QMSR via ISO 13485) | 21 CFR Part 211 (drugs and biologics) |
|---|---|---|
| Is "CAPA" named? | Yes, explicit procedure required | No, the duty lives in investigation and quality system clauses |
| Core clause | 820.100 (QMSR: ISO 13485 cl. 8.5.2 / 8.5.3) | 211.192 (investigation of discrepancies/failures) |
| Preventive action | Explicit | Implicit through trending and quality system expectations |
| Effectiveness | "Verify or validate" the action is effective and doesn't adversely affect the device | Expected through the broader CGMP system, not a literal clause |
| Read-across | Required by the investigation duty | Required by 211.192 ("extend to other batches and products") |

The ISO 9001 and ISO 13485 frameworks add corrective action clauses that align with the FDA expectations through nonconformity handling. ICH Q10 ties them together at the system level. For practical purposes the seven-step process in this article satisfies all of these frameworks when run honestly; the differences are in vocabulary and emphasis, not in the underlying logic.

---

## CAPA vs. Deviation: When to Use Which

A deviation documents that something happened and resolves the immediate situation. A CAPA addresses the root cause systemically.

Think of it this way: a deviation is the incident report; a CAPA is the improvement program. For a single, minor deviation with an obvious and non-systemic cause, a deviation record with documented corrective action is sufficient. When the investigation reveals that the same problem has happened before, or the root cause is a systemic gap in a procedure or system, a CAPA is warranted.

The deviation record and the CAPA record are separate but linked. The deviation documents what happened and the immediate response. The CAPA, if opened, documents the systemic investigation and long-term fix. Both can reference each other by number. The detail of running the investigation itself, severity classification, and timely closure lives in [deviation management](/articles/deviation-management), and the parallel discipline for laboratory failures is set out in [the OOS investigation process](/articles/oos-investigation-process). A clean handoff between these processes matters: the deviation should record the correction and the rationale for whether a CAPA was raised, and the CAPA should inherit a well-formed problem statement rather than starting the analysis from scratch.

CAPA also connects to change control. Many corrective actions (a revised SOP, a reconfigured system, a new in-process check) are themselves changes that must run through the change control process. The clean pattern is: the CAPA decides what must change and the change control record manages making the change in a validated environment. That linkage is developed in [change control for validated systems](/articles/change-control-validated-systems).

---

## Using CAPA Data for Continuous Improvement

Aggregated CAPA data is one of the most valuable sources of information about the health of a quality system. At management review (an ICH Q10 element in its own right, covered in [management review under Q10](/articles/management-review-q10)), CAPA metrics worth tracking:

- Number of CAPAs opened by source (deviation, audit, complaint, trending)
- Number of CAPAs overdue and aging distribution
- Average time to root cause completion
- Effectiveness check pass rate
- Recurring root causes (same root cause appearing in multiple CAPAs)

Recurring root causes are the most actionable signal. If five CAPAs over the past year all trace back to "change control SOP inadequate" or "training not completed before procedure implementation," that's a quality system gap that needs structural correction. The individual CAPAs addressed individual events; the pattern requires a systemic response.

For a program-level reader, the metric to watch most carefully is the effectiveness check pass rate, because it is the only number that shows whether the CAPAs are actually working. A high closure rate paired with a low effectiveness rate is a warning, not an achievement: it means the organization is good at finishing actions and bad at fixing problems. A low effectiveness pass rate should trigger a look at root cause quality, because ineffective CAPAs almost always trace back to a root cause that was a symptom in disguise. Trend these numbers over time, present them at management review with an owner attached to the trend rather than to a single record, and use them to decide where to invest. That is the point where CAPA stops being a record-keeping obligation and becomes the feedback loop that drives the quality system forward. The wider discipline of turning quality data into action is developed further in [quality metrics and KPIs](/articles/quality-metrics-and-kpis) and in the methods covered under [statistics in quality: Cpk and control charts](/articles/statistics-in-quality-cpk-control-charts).

---

## Interview-Ready: Questions and How to Answer Them

These come up in QA, validation, and manufacturing interviews, and inspectors ask versions of the same.

**"What is the difference between a correction and a corrective action?"**
A correction is the immediate fix to the instance (discard the batch, re-run the test). A corrective action is the systemic change that prevents recurrence (close the procedural gap that allowed it). A CAPA that contains only corrections is incomplete.

**"Walk me through your CAPA process."**
Name the seven steps in order: problem statement, risk assessment with containment, root cause analysis with evidence, corrective action that reaches the cause, preventive action (read-across), implementation and verification, and an effectiveness check with criteria defined at opening. Mention that closure requires effectiveness, not just completion.

**"How do you decide whether an event needs a CAPA?"**
Triage on severity and likelihood of recurrence. High impact or systemic/recurring cause drives a CAPA; low-impact isolated events resolve in the deviation record with documented rationale. The decision is a quality judgment that must be recorded either way.

**"What's the difference between verification and effectiveness?"**
Verification confirms the action was done (the SOP was approved). Effectiveness confirms it worked (no recurrence over a defined window, measured against a criterion set at opening). They are separate gates.

**"Why is 'human error' a weak root cause?"**
Because it stops at the person and ignores the system that let the person's action cause harm. The honest follow-up is: was the procedure ambiguous, the training inadequate, the check missing? Most human-error findings resolve into a process or system gap.

**"Where do CAPA requirements come from?"**
21 CFR 820.100 for devices (now QMSR via ISO 13485:2016, effective February 2026), 21 CFR 211.192 for drugs through the investigation-and-extend duty, ICH Q10 at the pharmaceutical quality system level, and ISO 9001/13485 corrective action clauses.

**"What does an effective effectiveness check look like?"**
A measurable criterion (recurrence count, deviation rate against baseline, audit of the fixed population), a defined metric and method, and a scheduled date, all set when the CAPA is opened and the result supported by data, not opinion.

**"What are the most common CAPA findings in inspections?"**
Corrections without corrective action, generic root causes, missing or data-free effectiveness checks, scope too narrow (no read-across), and aging CAPAs with serial unjustified extensions.

The full set of behavioral and technical quality questions is in [GxP quality interview preparation](/articles/gxp-quality-interview-preparation).

---

## Practical Tips

- Define the effectiveness criteria at opening, in writing. If you cannot say how you will measure success, you do not yet understand the problem.
- Write the problem statement before you let anyone guess the cause. A clean, cause-free statement protects the whole investigation.
- For every action at the training/awareness tier, ask whether a higher-tier control is feasible. Document why if it is not.
- Always do the read-across. The question "where else could this be true?" finds the next finding before the inspector does, and 211.192 makes it mandatory for drugs.
- Link your records by number: deviation, OOS, change control, complaint, audit report. A reconstructable trail is half the defense in an inspection.
- Watch the effectiveness pass rate at the program level. A high closure rate with low effectiveness means you are finishing actions without fixing problems.
- Don't fear a documented, justified extension; fear the pattern of quiet slips. Honest scheduling beats fast, false closure.
