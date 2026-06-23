---
title: "Quality Risk Management: ICH Q9(R1), FMEA, and Risk-Based Decision Making in GxP"
description: "How to apply ICH Q9(R1) quality risk management in practice: FMEA, risk ranking, risk assessment methodology, scoring scales, and when to use which tool. Written for people who have to apply it, not just cite it."
pubDate: 2025-08-28
tags: ["risk-management", "ICH-Q9", "FMEA", "GxP", "QMS"]
pillar: "quality-assurance"
tier: "Intermediate"
---

Quality risk management (QRM) is the formal framework for making quality decisions under uncertainty. In GxP practice it sits underneath almost everything: deciding what level of validation a system needs, deciding whether a deviation requires a full investigation and CAPA, deciding how to sequence a data integrity remediation program, deciding which suppliers get an on-site audit and which get a questionnaire. When QRM works, those decisions are defensible, consistent, and traceable. When it fails, the organization either over-controls trivial risks or, worse, controls nothing of substance while generating a stack of documents that satisfy no one.

[ICH Q9(R1)](https://www.ich.org/page/quality-guidelines), the revision that reached Step 4 in January 2023, is the governing guideline. The original Q9 was issued in 2005 and adopted by FDA (as a guidance for industry in 2006), EMA, and the other ICH regions in the years that followed. The R1 revision did not rewrite the framework. It tightened the language around four problems that 18 years of practice had exposed: subjectivity in scoring, formality that did not match the size of the decision, gaps in knowledge that scoring masks, and risk-based decisions made by people who never communicate them. Anyone who applies QRM seriously should read R1 with those four targets in mind, because they are the things inspectors now probe.

This article covers the Q9(R1) framework, the main risk assessment tools, the scoring mechanics, the documentation that holds up under inspection, and the judgment calls that separate useful QRM from a risk-documentation exercise. It applies across small-molecule drug product, biologics, cell and gene therapy, combination products, and the GxP systems that support them.

---

## What ICH Q9(R1) Actually Says

Q9(R1) sets out principles and a process. Two principles anchor the guideline and are worth committing to memory, because they decide every argument you will ever have about scope. The first: a quality risk evaluation should rest on scientific knowledge and tie back, in the end, to protecting the patient. The second: how much effort, formality, and documentation you put into the QRM process should track the level of risk involved.

Everything else is method. Hold onto the second principle in particular. It is the sentence that lets you say no to a forty-row FMEA for a low-impact change, and it is the sentence inspectors quote when they find you produced one anyway and used none of it.

The process has four phases, and they form a loop rather than a line:

1. **Risk assessment.** Identify what can go wrong (risk identification), analyze how likely it is and how bad it would be (risk analysis), then weigh it against criteria you defined in advance (risk evaluation).
2. **Risk control.** Decide whether and how to reduce the risk (risk reduction), then decide what residual risk you are willing to accept (risk acceptance). Both decisions get documented, including the acceptance.
3. **Risk communication.** Share the inputs and outputs with the people who need them: the system owner, QA, the affected process owners, and where relevant the regulator.
4. **Risk review.** Revisit the assessment when something changes. A new finding, a system change, a recurring deviation, or new knowledge about a hazard are all triggers.

The loop matters. A risk assessment that fit a system at go-live can be wrong two years later because the process volume tripled, an interface was added, or a near-miss revealed a failure mode nobody had listed. Q9(R1) treats the review phase as a real obligation, not a calendar formality.

R1 also added something the 2005 version only implied: an explicit statement that risk assessment is **subjective**, and that the goal is structured, documented, defensible reasoning rather than an objective number. Two competent teams can score the same hazard differently and both be acceptable, provided each can show the knowledge and logic behind the score. This single clarification changes how you should write a risk assessment. Stop pretending the RPN is a measurement. Write down what you knew, what you assumed, and who decided.

### The vocabulary inspectors expect you to use precisely

QRM has a small set of defined terms, and getting them wrong in conversation marks you as someone who runs the template without understanding it.

| Term | Plain-language meaning (Q9 vocabulary) | Common confusion |
|---|---|---|
| Harm | Injury to health, which Q9 counts as including harm that flows from a product losing quality or from the product not being available | Treated as the same as the failure that caused it |
| Hazard | Anything that could act as a source of harm | Conflated with risk |
| Risk | How likely harm is to occur, taken together with how bad that harm would be | Reduced to "probability" alone |
| Severity | How serious the consequences of a hazard could be | Confused with how often it happens |
| Risk reduction | Steps that cut either how often harm occurs or how serious it is | Assumed to be the only allowed response (acceptance is also valid) |
| Risk acceptance | A deliberate decision to live with the risk that is left | Skipped entirely, so no one owns the leftover risk |
| Residual risk | Whatever risk is still present once the control measures are in place | Never calculated, so reduction is claimed without proof |

If you can state these cleanly and explain that risk is severity combined with probability (not one or the other), you are already ahead of most candidates.

---

## The Knowledge Problem Behind Every Score

Before the tools, a point R1 makes that most programs skip. Risk is estimated from knowledge, and knowledge is uneven. Where data is thin, scores carry hidden uncertainty, and a confident-looking number can paper over a genuine gap.

R1 introduces the idea of explicitly considering **uncertainty** and the **availability of information** as you assess. In practice this means three habits:

- State the basis for each score. "Likelihood = 3 based on twelve months of trend data, n=4 events" is defensible. "Likelihood = 3" alone is a guess wearing a number.
- Flag where you are scoring on opinion rather than data, and treat those rows as candidates for more investigation rather than less.
- Separate **hazard** (the intrinsic source of harm) from **risk** (the combination of probability and severity of that harm). People conflate them constantly, which leads to scoring the same thing twice or arguing past each other.

A practical tell that a program understands this: its assessments cite where the numbers came from. A practical tell that it does not: every cell is a round number and no source is named.

R1 also warns about two human factors that quietly corrupt assessments. The first is **subjectivity that is never acknowledged**, so a score reads as fact when it is one person's view. The second is the dominance of a single person or function in a process that is supposed to be cross-functional. If the operations lead scores occurrence, the QA lead scores severity, and the engineer who actually understands the failure mode stays quiet, the assessment is weaker than it looks. Build the panel so the people closest to the failure mode have a real voice.

---

## Failure Mode and Effects Analysis (FMEA)

FMEA is the most common risk assessment tool in pharmaceutical quality, and for good reason. It is systematic, it works as a cross-functional workshop, and its output maps directly to actions. You take a process, system, or design, walk it step by step, and for each step ask what could fail, why, and what the consequence would be.

When the analysis adds a criticality dimension, the method is often called FMECA (failure mode, effects, and criticality analysis). The worksheet and mechanics are the same; FMECA just makes the ranking of consequences explicit.

### How to actually run an FMEA, start to finish

The worksheet is the easy part. The discipline is in the steps around it.

1. **Define the scope and boundary.** Write down what is in and out: which process steps, which equipment, which unit operations, the start and end points. A scope creep into "the whole site" is how FMEAs become unusable.
2. **Assemble the team.** Cross-functional by design: quality, the process or system owner, engineering or automation, and someone who runs the step day to day. One facilitator who does not own the outcome keeps the scoring honest.
3. **Agree the scales and legend before scoring.** Severity, occurrence, and detectability scales (1-5 or 1-10), the legend for each anchor point, and the action thresholds. Do this first, in the room, so scoring is not relitigated halfway through.
4. **Break the process into steps.** A process flow diagram or the validated process description is the backbone. Each step becomes one or more rows.
5. **For each step, list failure modes.** What could go wrong at this step. Be specific: "balance not within calibration tolerance" not "weighing error."
6. **For each failure mode, list effects and causes.** The effect is what the failure does downstream (the consequence for product, patient, or data). The cause is why the failure mode happens. One failure mode can have several causes; score each cause line separately where they differ.
7. **Score S, O, D and compute the priority.** Use the agreed scales. Record the basis for each score in a notes column.
8. **Apply the action rules.** Anything above the RPN threshold, plus anything hitting the severity gate, gets a recommended action and an owner.
9. **Re-score the residual risk after actions are planned or taken.** Show the before and after. An FMEA with no residual column has not closed the loop.
10. **Route for review and approval, then schedule the review trigger.** QA approval, a stated review trigger (change, finding, periodic), and version control.

### The standard worksheet

| Process Step | Potential Failure Mode | Potential Effect | Severity (S) | Potential Cause | Occurrence (O) | Detectability (D) | RPN | Recommended Action | Owner | Residual RPN |
|---|---|---|---|---|---|---|---|---|---|---|

Three numbers drive it:

- **Severity (S):** how serious the consequence is if the failure happens. On a 1-10 scale, 10 is catastrophic patient harm or a falsified record reaching a submission, 1 is negligible. Severity is a property of the effect and you cannot reduce it by adding a detection step; you can only reduce it by changing the design so the effect is less serious.
- **Occurrence (O), sometimes called Likelihood:** how often the cause is expected to produce the failure. 10 is near-certain, 1 is remote. This is the number that should rest on data when data exists.
- **Detectability (D):** how likely the existing controls are to catch the failure before it does harm. Note the scale is inverted: 10 means undetectable, 1 means certain to be caught. New practitioners reverse this constantly, so state the legend on every sheet.

**RPN = S x O x D.** Higher means higher priority. On a 1-10 scale the range runs 1 to 1000.

### A worked scale you can adapt

Scales must be defined in advance. Here is a defensible 1-5 set for a GxP process FMEA. Anchor every score to a description, never a bare number.

| Score | Severity (S): effect on patient/product/data | Occurrence (O): how often the cause acts | Detectability (D): chance existing controls catch it |
|---|---|---|---|
| 1 | Negligible, no patient or data impact | Remote, no known occurrence | Almost certain to detect before harm |
| 2 | Minor, cosmetic or easily corrected | Low, isolated past events | High chance of detection |
| 3 | Moderate, affects a quality attribute, recoverable | Occasional, occurs a few times a year | Moderate chance of detection |
| 4 | Serious, potential product reject or reportable event | Frequent, occurs monthly or more | Low chance of detection |
| 5 | Critical, potential patient harm or falsified submission record | Very high, occurs routinely | Very unlikely to detect before harm |

With a 1-5 scale the RPN range is 1 to 125. Pick one scale and use it across the assessment. Mixing a 1-5 severity with a 1-10 occurrence is a finding waiting to happen.

### Reading RPN correctly

The RPN is a sorting key, not a verdict. Consider three rows on a 1-10 scale:

| Failure mode | S | O | D | RPN |
|---|---|---|---|---|
| Wrong product label printed, undetected until distribution | 10 | 2 | 9 | 180 |
| Minor formatting error in an internal report, caught at review | 3 | 8 | 2 | 48 |
| Sterility-affecting environmental excursion, rarely occurs, hard to detect | 10 | 2 | 8 | 160 |

If you sorted purely by RPN, the label row and the sterility row land near each other and the formatting row is dismissed, which is roughly right. But notice that the two high-RPN rows share Severity 10 and Detectability 8-9. That combination, a severe effect that current controls would probably miss, is the dangerous pattern, and it is more informative than the RPN total. This is why mature programs apply a **severity rule** alongside RPN: any failure mode at the top of the severity scale gets risk-reduction attention regardless of its RPN, because a low occurrence score is a statement about the past, not a guarantee about the future. Q9(R1)'s emphasis on linking risk to patient protection supports treating severity as a gate, not just a multiplier.

A second mechanical caution: RPN is non-linear and degenerate. Different S, O, D triples produce the same product (2x5x10 and 4x5x5 both equal 100) while meaning very different things, and small score changes near the top of the scale swing the total enormously. Treat RPN bands loosely. The automotive sector (AIAG-VDA) has moved to an action-priority (AP) logic that reads S, O, and D as an ordered set rather than a product, which avoids the worst of the arithmetic artifacts. Either approach is fine for GxP use as long as severity is never allowed to disappear into the multiplication.

### Setting action thresholds

A common, defensible scheme on a 1-10 scale: define action bands up front and write them into the procedure so the FMEA does not negotiate them after seeing the numbers.

| RPN band | Action required |
|---|---|
| RPN >= 100, or any S = 9-10 | Risk reduction required; action and owner mandatory before acceptance |
| RPN 40-99 | Evaluate for reduction; document rationale if accepted as is |
| RPN < 40 | Acceptable as is unless a high single score warrants a closer look |

The exact cutoffs are a business decision, not a regulatory number. What inspectors look for is that the thresholds were defined before scoring, applied consistently, and that any score above a threshold has a corresponding action or a written acceptance rationale. A high RPN with no action and no rationale is the single most common QRM finding.

---

## Where FMEA Works Well, and Where It Doesn't

FMEA earns its keep when:

- there is a defined process or system whose steps you can list,
- failure modes can be enumerated step by step,
- several functions need to contribute (it is a good workshop discipline because it forces quality, operations, and engineering to argue in the same room),
- the output has to drive prioritized remediation or design choices.

FMEA is the wrong tool when:

- the decision is binary, acceptable or not, and ranking adds nothing,
- the system is too entangled to decompose cleanly into independent steps (a fault tree may serve better when failures interact),
- the decision is small and time-sensitive and a short documented discussion would settle it.

That last case is exactly what Q9(R1) was clarifying. Whether a change to a non-critical SOP needs retraining does not require a worksheet. A recorded risk discussion with a conclusion and a name attached is proportionate, and it is the right answer. Forcing formal FMEA onto trivial decisions produces volume, not rigor, and it trains people to fill in scores mechanically so the real ones get the same cursory treatment.

---

## Risk Ranking and Filtering

FMEA analyzes one process in depth. Risk ranking compares many dissimilar things against a common scale: which of forty systems to validate first, which CAPAs deserve extra resources, which audit findings to close this month. You score each item against shared criteria and bucket them into tiers (high/medium/low, or red/yellow/green), producing a prioritized list that drives where money and people go.

A worked example for a system inventory, scoring two factors and combining them into a tier:

| System | Patient/data impact (1-5) | GxP criticality (1-5) | Score | Tier |
|---|---|---|---|---|
| LIMS used for lot release | 5 | 5 | 25 | High |
| Chromatography data system | 5 | 4 | 20 | High |
| Stability chamber monitoring | 4 | 4 | 16 | High |
| Training record database | 2 | 3 | 6 | Medium |
| Meeting-room scheduling tool | 1 | 1 | 1 | Low |

The value is consistency. People will always disagree about priorities; a ranking that applies the same criteria to every item gives them a shared object to argue over, and forces the disagreement into the open where it can be resolved.

The limitation is the same as the strength: the output is only as good as the scoring, and scoring is judgment. The same item scored by two assessors lands in two tiers. So the credibility of a ranking comes from the process behind it, who scored, what evidence they used, what assumptions they declared, not from the tidy numbers it produces. A ranking with a documented panel and stated criteria is defensible. A ranking that appeared with no record of how is just an opinion in a spreadsheet.

---

## Hazard Analysis and Critical Control Points (HACCP)

HACCP came out of food safety and was carried into pharmaceutical manufacturing, especially for sterile products and for certain biologics. It is built around critical control points (CCPs): the specific steps where a control must hold to prevent, eliminate, or reduce a hazard to an acceptable level. The seven HACCP principles run from hazard analysis through CCP identification, critical limits, monitoring, corrective action, verification, and record-keeping.

The distinction from FMEA is one of emphasis. FMEA asks what can go wrong at every step. HACCP asks where, in the whole flow, control is non-negotiable, then concentrates monitoring there. The two complement each other: use FMEA in design to surface failure modes, then use HACCP thinking to decide which control points actually carry the risk in the validated process so monitoring is not spread thin across steps that do not matter.

HACCP fits best where a single step is a point of no return:

- aseptic processing and terminal sterilization, where a lapse cannot be undone,
- steps in some biologic and advanced-therapy processes where a contamination event would be undetectable in the final product because there is no terminal sterilization,
- any step where loss of control on a quality attribute cannot be recovered downstream.

For sterile and aseptic work, HACCP thinking dovetails with the contamination control strategy expected under [Annex 1](/articles/annex-1-contamination-control-strategy), and the broader program lives in your [environmental monitoring program](/articles/environmental-monitoring-program). For the device-constituent side of a [combination product](/articles/combination-products-cgmp-part-4) or for software as a medical device, ISO 14971 supplies a parallel structured risk-management discipline that uses similar logic with its own vocabulary, and the same Q9 thinking carries across.

---

## Choosing a Tool

A short map for the common cases:

| Decision | Reasonable tool |
|---|---|
| Analyze one process or system for failure modes | FMEA / FMECA |
| Failures that interact, top-down from an undesired event | Fault tree analysis (FTA) |
| Identify the few control points that must hold | HACCP |
| Compare many dissimilar items for prioritization | Risk ranking and filtering |
| A small, time-bound, low-impact decision | Documented risk discussion, no formal tool |
| Early, exploratory, structured brainstorming of hazards | PHA or a structured what-if |
| Line-by-line study of a process for deviations from design intent | HAZOP |

Q9(R1) does not mandate any particular tool. It names FMEA, FMECA, FTA, HACCP, HAZOP, PHA, and risk ranking and filtering as examples and leaves selection to you. It also reminds you that basic supporting techniques such as flowcharts, check sheets, and cause-and-effect (Ishikawa) diagrams are part of the toolbox and are often enough. The defensible choice is the simplest tool that produces a decision you can stand behind.

---

## Risk Management in Practice: Three Applications

**Application 1: Validation scope (GAMP 5).** The risk assessment behind a validation plan answers one question: what could go wrong with this system, and how serious would it be for the patient or the data? A laboratory information management system used for lot release decisions earns far more scrutiny than a scheduling tool that only plans shifts. The analysis names the critical failure modes and shows which tests address them, which is the mechanism by which the risk-based GAMP categories translate into a test plan. The full method is covered in [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology) and the broader [GAMP 5 CSV framework](/articles/gamp5-csv-framework). Note that FDA's [Computer Software Assurance](/articles/computer-software-assurance-fda) guidance, issued as a draft in 2022 and finalized in 2025, pushes the same idea harder: spend testing effort where risk to the patient and product is highest, and stop gold-plating low-risk features.

**Application 2: Data integrity remediation.** A data integrity risk assessment across a site's system inventory yields a ranked backlog of gaps. The trap is producing a ranking and then funding by intuition anyway. Risk-based prioritization should produce an explicit order driven by documented factors, system criticality, the nature of the gap, detectability of a failure, not "these are our priorities this quarter." The method and the way it feeds a program are in [data governance framework](/articles/data-governance-framework) and [DI gap assessment methodology](/articles/di-gap-assessment-methodology), and the link back to first principles runs through [ALCOA+ in detail](/articles/alcoa-plus-deep-dive). The way you weight criticality also draws on [data criticality and data risk](/articles/data-criticality-and-data-risk).

**Application 3: Deviation investigation depth.** Not every deviation needs a full root cause investigation and CAPA. The potential quality impact and the chance a recurrence would reach the patient are the risk factors that should set investigation depth. A one-off in a non-critical step is not the same as a repeat in a critical release step that has now happened three times this year, and the second one should also trigger a review of why the first investigation did not prevent it. Q9(R1) explicitly endorses risk-based decisions about investigation scope, with one condition: the rationale is written down. The mechanics of doing this well are in [deviation management](/articles/deviation-management), [quality event classification and triage](/articles/quality-event-classification-triage), and [what is a CAPA](/articles/what-is-a-capa).

---

## Roles and Responsibilities

QRM is a team activity with named owners. Inspectors ask who did what, so the assessment should make that visible.

| Role | Responsibility in QRM |
|---|---|
| Risk owner (system or process owner) | Owns the risk, the technical inputs, and the residual risk acceptance for their area. Provides occurrence and detectability data. |
| Facilitator | Runs the assessment, keeps scoring anchored to the defined scales, prevents one voice from dominating. Should not own the outcome. |
| Quality Assurance | Approves the methodology and the final assessment, confirms scales and thresholds were applied consistently, owns the link to patient and product. |
| Subject matter experts (engineering, operations, lab, automation) | Provide the failure modes, causes, and the basis for scores. |
| Senior management / quality management | Sets risk acceptance policy, resources the actions, sees QRM outputs through [management review](/articles/management-review-q10). |

The cross-functional requirement is not a courtesy. Q9(R1) specifically flags the danger of an assessment driven by one person's view. A risk assessment signed by a single author with no evidence of a panel is weaker on its face.

---

## Documenting a Risk Assessment So It Survives an Inspection

A QRM record that holds up has a predictable structure. Auditors look for these elements and notice when they are missing.

- **Purpose and scope.** What decision this assessment supports, and the boundary of what was assessed.
- **Team and date.** Who participated, their functions, when it was performed.
- **Method and scales.** The tool used and the defined scoring scales and action thresholds, ideally referenced to a governing SOP.
- **The assessment body.** The worksheet or ranking with the basis for scores recorded, not just the numbers.
- **Risk control decisions.** What will be reduced, how, by whom, by when, and what is accepted as residual risk with a rationale.
- **Residual risk and acceptance.** The post-action risk and an explicit sign-off that it is acceptable, by someone with the authority to accept it.
- **Communication and review trigger.** Who the output goes to and what will trigger a re-review.
- **Approval.** Author, reviewers, QA approval, version, effective date.

The acceptance step is the one most often skipped. Reducing a risk and then never recording that the leftover risk was reviewed and accepted leaves an open loop. "We lowered it" is not the same as "we lowered it, looked at what remained, and a responsible person accepted it."

---

## Common Failures in QRM Programs

**Risk assessment as paperwork.** The team runs the FMEA to produce a document the validation plan or the submission demands, calculates the RPNs, and never uses them to change a single test or CAPA. The output exists; the decision it was supposed to inform was made some other way. An inspector who asks "what did this assessment change?" and gets silence has found a real finding.

**Assessments that are never reviewed.** A risk assessment from several years ago, untouched through multiple system changes and two inspection findings, is not living risk management. Reviews should fire on change and on findings, not only on an annual calendar entry, and the review record should say what was reconsidered, not just "reviewed, no change."

**Over-formalization.** The mirror image of paperwork. Requiring a full FMEA for every minor change buries the significant assessments under routine ones and teaches people that scores are a box to fill. R1's proportionality principle exists precisely to license a shorter path for small decisions.

**Detectability treated as an afterthought.** Many programs score severity and occurrence carefully and wave at detectability. That is backwards for pharmaceutical quality, where the detection failure is often the thing that lets a problem reach a patient or a submission undetected. A failure with modest severity and modest occurrence but near-zero detectability can outrank a severe, frequent failure that in-process testing is certain to catch. Detectability is also the dimension most often improved by the controls you already own, an audit trail review, a second-person check, an in-line sensor, so it is where risk reduction is frequently cheapest. The discipline of building detection into systems is the subject of [audit trail design and review](/articles/audit-trail-design-and-review).

**Scoring without a basis.** Round numbers in every cell, no source named. This is the failure R1's uncertainty language was written to surface. If you cannot say where a score came from, you are not managing risk, you are decorating a decision you already made.

**Scales invented on the fly.** Scoring anchors that change row to row, or a severity scale borrowed from one assessment and stretched onto another with a different criticality. Define the scales once, in the procedure, and apply them consistently within the assessment.

**No residual risk acceptance.** Actions are listed, but no one records that the remaining risk was reviewed and accepted. The loop is left open. This is a frequent observation and an easy one to avoid.

**The single-author assessment.** One person filled in the whole worksheet, signed it, and called it cross-functional. The scores reflect one viewpoint, which is exactly the failure mode R1 calls out.

---

## Interview Questions and How to Answer Them

These come up in QA, validation, and data integrity interviews, and in inspection conversations.

**"What is the difference between hazard, risk, and harm?"**
Harm is damage to health, including from loss of product quality. A hazard is a potential source of harm. Risk is the combination of the probability that harm occurs and its severity. The clean way to say it: risk is severity combined with likelihood; a hazard is just the source, harm is the consequence.

**"Walk me through running an FMEA."**
Define scope and the team, agree the scales and action thresholds before scoring, break the process into steps, list failure modes with their effects and causes, score severity, occurrence, and detectability with the basis recorded, compute the RPN, apply the action rules including a severity gate, assign owners and actions, re-score the residual risk, then QA approval and a review trigger. Emphasize that the RPN is a sorting key, not a verdict.

**"What is the detectability scale, and which way does it run?"**
It is inverted. A high detectability score means the failure is hard to detect; a low score means controls are almost certain to catch it. Always state the legend on the sheet because people reverse it.

**"Why is RPN a poor sole basis for decisions?"**
It is a non-linear product. Different score combinations give the same total while meaning different things, and a severe failure with low occurrence can sort below a trivial frequent one. That is why a severity gate sits alongside the RPN, so any high-severity failure mode gets attention regardless of its product.

**"What did ICH Q9(R1) change?"**
It kept the four-phase framework and sharpened four things: it stated outright that risk assessment is subjective and the goal is documented defensible reasoning; it stressed that formality and documentation must match the size of the decision; it made uncertainty and the availability of information an explicit input; and it put weight on the quality of risk-based decisions and on avoiding one person dominating an assessment that should be cross-functional.

**"How do you decide how much QRM a decision needs?"**
By the proportionality principle. The effort, formality, and documentation scale with the level of risk. A low-impact change gets a short documented discussion with a conclusion and a name; a high-impact, multi-system change gets a formal tool and a panel. Producing a forty-row FMEA for a trivial decision is itself a finding.

**"How do you handle a risk you cannot reduce further?"**
You document the residual risk and have someone with the authority to accept it sign off, with a rationale. Acceptance is a valid, named QRM outcome, not a failure to act.

**"Give an example of QRM driving a real decision."**
Validation scope is the cleanest one: the system's risk to patient and data sets the depth of testing, so a lot-release LIMS gets far more scrutiny than a scheduling tool. Deviation investigation depth and data integrity remediation sequencing are equally good examples.

---

## What the R1 Revision Changed

The 2023 revision left the four-phase framework intact and sharpened the parts people had been getting wrong:

- **Subjectivity, stated outright.** R1 says risk assessment is subjective and that the aim is structured, documented, defensible reasoning, not an objective truth. Two organizations applying the same framework can reach different conclusions, and that is acceptable when both have shown their work.
- **Formality matched to the decision.** R1 articulates more clearly than the 2005 text that effort, formality, and documentation should scale with complexity and criticality. Small decisions do not need formal tools.
- **Uncertainty and knowledge made explicit.** R1 asks assessors to consider how much they actually know and to acknowledge where information is thin, so scores stop hiding gaps.
- **Risk-based decision-making, and who is making it.** R1 puts more weight on the quality of the decisions QRM feeds and on the people involved, including avoiding situations where one person's view dominates an assessment that should be cross-functional. It also draws an explicit link between QRM and product availability, recognizing that supply disruptions and shortages are themselves a risk to patients.
- **Read alongside the rest of the Q family.** R1 is meant to sit with ICH Q8 (pharmaceutical development), Q10 (the [pharmaceutical quality system](/articles/pharmaceutical-quality-system)), and Q11, forming one quality-by-design picture rather than a standalone risk exercise. QRM also feeds directly into [quality by design and DoE](/articles/quality-by-design-and-doe) and into [change control of validated systems](/articles/change-control-validated-systems).

None of this is new philosophy. It is the accumulated lesson of two decades of seeing how Q9 gets misused, written back into the guideline so the misuses are harder to defend. If you take one thing from R1 into daily practice, take this: a risk assessment is a record of reasoning, not a calculation. Make the reasoning good, make it visible, and make it match the size of the decision in front of you.

---

## Related Reading

- [Pharmaceutical Quality System (ICH Q10)](/articles/pharmaceutical-quality-system)
- [CSV Risk Assessment Methodology](/articles/csv-risk-assessment-methodology)
- [GAMP 5 CSV Framework](/articles/gamp5-csv-framework)
- [Combination Products Under cGMP Part 4](/articles/combination-products-cgmp-part-4)
- [Deviation Management](/articles/deviation-management)
- [Root Cause Analysis Techniques](/articles/root-cause-analysis-techniques)
- [Data Criticality and Data Risk](/articles/data-criticality-and-data-risk)
- [Change Control of Validated Systems](/articles/change-control-validated-systems)
