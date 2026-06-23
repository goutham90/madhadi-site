---
title: "Investigating a Data Integrity Breach or Suspected Falsification"
description: "A working method for investigating a data integrity breach or suspected falsification: containment, scope and extent, retrospective data review, product and patient impact, the data-reliability decision, system-gap versus intentional-act root cause, and reportability."
pubDate: 2026-06-22
tags: ["data-integrity", "investigation", "falsification", "FDA", "root-cause", "self-disclosure", "GxP"]
pillar: "data-integrity"
tier: "Advanced"
---

A data integrity investigation is not a deviation investigation with a different label on the folder. When you investigate a broken instrument or a missed in-process check, you generally trust the records and ask what went wrong with the process. When you investigate a suspected falsification, you start from the opposite assumption: the records themselves may be the thing that is wrong, and the person who created or reviewed them may have a reason to make the problem look smaller than it is. That single difference changes the whole method. You preserve before you ask. You determine extent before you accept a tidy explanation. You decide whether the affected data can still be relied upon, and you carry the question all the way through to whether released product and treated patients are at risk.

The recurring failure that regulators cite, in plain words, is that the company's investigation "failed to determine the full extent of the problem and the impact on product." A site finds one altered chromatogram, concludes it was a single analyst on a single day, retrains that person, and closes the file. Six months later an inspector pulls the same instrument's full audit trail, finds the same pattern across forty batches and two other analysts, and the finding is no longer one falsified result. It is a failed investigation, an unreliable data set, and a quality system that could not see its own problem. This article is about how to run the investigation so that does not happen.

If you are new to the underlying concepts, read [data integrity foundations](/articles/data-integrity-foundations) and [the ALCOA+ principles in detail](/articles/alcoa-plus-deep-dive) first. This article assumes you know what an audit trail is and why attributability matters, and focuses on the distinct discipline of investigating when integrity is in doubt.

---

## What Makes This a Distinct Discipline

### Why it is required

The legal and regulatory hooks are the same ones that govern any quality investigation, applied with more force. In the United States, 21 CFR 211.192 requires that any unexplained discrepancy or failure of a batch to meet specifications be thoroughly investigated, that the investigation extend to other batches and products that may have been associated, and that conclusions and follow-up be recorded. A suspected falsification is an unexplained discrepancy of the most serious kind, because it puts the reliability of the record itself in question.

> "Any unexplained discrepancy ... shall be thoroughly investigated, whether or not the batch has already been distributed. The investigation shall extend to other batches of the same drug product and other drug products that may have been associated with the specific failure or discrepancy."

The FDA guidance "Data Integrity and Compliance With Drug CGMP: Questions and Answers" (final, December 2018) is explicit that when a firm finds a data integrity problem, it should hire a qualified third party where appropriate, determine the scope and the root cause, and assess the effect on product quality. The MHRA "GXP Data Integrity Guidance and Definitions" (March 2018) and PIC/S PI 041 carry the same expectation across the international regimes: a data integrity event has to be handled as a quality event with full extent and impact determination, not a personnel matter handled quietly. The EU GMP Chapter 1 requirement that quality risks be identified and managed applies directly, because an unreliable data set is a quality risk that can reach the patient.

### Why it is different from a routine deviation

A normal deviation assumes the data are honest and the process failed. A data integrity investigation has to entertain the possibility that the data are dishonest, which inverts several habits:

- **Preserve first, ask second.** In a routine deviation you can interview the operator early. In a falsification case, an early heads-up gives anyone involved the chance to alter or delete more. Containment and preservation come before any wide conversation.
- **Assume the visible instance is a sample, not the population.** One altered record is a reason to look at everything that person, that instrument, and that method touched, not evidence that the problem is one record.
- **The data-reliability decision is the deliverable.** A deviation closes with a corrective action. An integrity investigation also has to state, on the record, whether the affected data can still be used to support decisions already made, and that is a separate judgment from "what went wrong."
- **Intent matters.** Most quality investigations do not care whether an error was deliberate. Here, system-gap versus intentional-act is a genuine fork, because the corrective action, the reportability, and the human-resources path all depend on it.

For the routine path, see [deviation management](/articles/deviation-management). This article is the escalated path for when integrity is in doubt.

---

## Phase 1: Containment and Preservation

The first hour decides whether the rest of the investigation is possible. The single most damaging mistake is to discuss the concern openly before the data are preserved, because the evidence you need lives in systems that the people involved can often still reach.

### What to do, step by step

1. **Limit who knows.** Brief only the people who must act: quality leadership, the system owner, IT, and, where the matter could be serious, the legal function. Do not confront the suspected individual yet. A premature confrontation is the most common way evidence is lost.
2. **Preserve the electronic evidence.** Freeze or image the relevant systems. This means a forensic-quality capture of the audit trail, the raw data files (including any aborted, trial, or "test" injections), the instrument logs, the operating-system event logs, and the database tables behind the application. Capture metadata, not just printed reports. A PDF shows only what someone chose to print; the raw record shows what actually happened.
3. **Lock down access where appropriate.** Where there is a credible risk of ongoing alteration, suspend or restrict the relevant accounts and privileged access, and record the time and basis for doing so. Coordinate with IT so the lock-down does not itself destroy logs.
4. **Sequester the physical evidence.** Secure the relevant logbooks, worksheets, printouts, notebooks, and any local copies. Note who held them and where they were found.
5. **Quarantine potentially affected product.** Place any batch whose disposition relied on the questioned data into a quality hold so it cannot ship while reliability is unknown. This is a precaution, not a conclusion.
6. **Open the record with a timestamp.** Start a controlled investigation file immediately, capturing what was found, by whom, when, and what was preserved. The chain of custody starts here.

### Chain of custody

Treat the evidence as you would in any matter that could end in a regulatory submission or a personnel action: every item logged, every transfer signed, originals preserved and only copies worked on. A break in custody lets anyone later argue the evidence was tampered with after the fact, which can sink an otherwise sound investigation.

### Acceptance criteria

Containment is adequate when the relevant electronic and paper evidence is preserved in a form that cannot be altered by the people who might be involved, when potentially affected product is on hold, when access is controlled to the extent the risk warrants, and when all of this is recorded with times and signatures before any wide interview. If a suspected individual still has live edit or delete access to the questioned systems when you start interviewing, containment failed.

### Roles in this phase

| Role | Responsibility in containment |
|---|---|
| QA / data integrity lead | Declares the integrity investigation, directs containment, owns the file |
| System owner | Identifies all systems and data in scope; authorizes the hold |
| IT / forensics | Performs the preservation capture without altering source; controls access changes |
| Legal | Advises where intent, employment, or reportability is in play; protects privilege where appropriate |
| Site quality head | Authorizes product quarantine and resourcing |

---

## Phase 2: Scope and Extent Determination

This is the phase that failed investigations skip, and it is the one inspectors test hardest. The question is not "what is the one thing we found." It is "what is the full population of records that could share this problem, and have we examined all of it."

### How to bound the scope

Define the boundaries along every axis the problem could travel, then justify each boundary in writing:

- **Person.** Every record created, modified, reviewed, or approved by the involved individual, across all systems and the full period of their involvement, not just the batch where the issue surfaced.
- **System and instrument.** Every record on the instrument, method, or system where the issue appeared, because the mechanism (a deletable folder, a clock that can be moved, a shared login) is available to anyone who uses it.
- **Method and product.** Other batches, products, and studies that used the same method, the same test, or the same data path.
- **Time.** As far back as the same mechanism and the same people could have produced the same pattern. Resist the urge to stop at the current campaign.
- **Pattern.** Once you know the signature (for example, deletions at a particular time of day, or re-injections that always precede a passing result), search the whole data estate for the same signature.

The cardinal rule: **scope outward until you can demonstrate, with evidence, where the problem stops, rather than assuming it stops at the first place you looked.** "We have no evidence it goes further" is not the same as "we looked and it does not go further." Inspectors know the difference and will ask which one you are claiming.

### Acceptance criteria

Scope is adequate when each boundary has a written, evidence-based justification; when the full population inside the boundary has been examined or sampled with a defensible statistical rationale; and when you can show the boundary was set by looking, not by assumption. A scope statement that reads "limited to the single batch" with no examination of the analyst's other work, the instrument's other runs, or the method's other uses is the textbook inadequate scope.

### Worked example: bounding the scope

A QC analyst is found to have re-integrated a chromatogram to move a result inside specification, with the reason field left blank. The naive scope is "one result, one batch." The defensible scope:

| Axis | What gets pulled |
|---|---|
| Person | All CDS activity by this analyst across all instruments for the last 24 months |
| Instrument | Full audit trail of the instrument used, all users, same 24 months |
| Method | Every batch and study that ran this assay, any analyst |
| Pattern | A site-wide search for re-integrations with blank reasons, and for re-injections immediately preceding a passing result |
| Time | Extended to the analyst's hire date once the pattern is confirmed to predate the campaign |

The pattern search is what turns a one-record finding into a true extent determination. It is also what protects the company: if the search comes back clean outside the known instances, you can now state, with evidence, where the problem stops.

---

## Phase 3: Retrospective Data Review

Scope tells you what to look at. The retrospective review is the disciplined examination of that population. This is where audit trails, raw files, and cross-system reconciliation do the work.

### What to examine

- **Audit trails in full.** Read the trail chronologically for each in-scope record. Look for edits after review sign-off, repeated changes to the same field, reasons that are blank or boilerplate, deletions, and reprocessing without justification. See [audit trail design and review](/articles/audit-trail-design-and-review) for the mechanics and [operationalizing audit trail review](/articles/operationalizing-audit-trail-review) for the program.
- **Cross-system reconciliation.** Reconcile the instrument injection or sequence log against the reported results. Account for system suitability, blanks, standards, and documented aborted runs. Any injection on the instrument that does not map to a documented outcome is an orphan, and orphans are the fingerprint of testing into compliance, generating results until one passes and reporting only that one.
- **Metadata and file system.** Inspect creation, modification, and deletion timestamps on the raw files themselves, recycle bins and recovery folders, renamed or duplicated files, and any local copies that bypassed the controlled system.
- **Clock evidence.** Check operating-system and application logs for backward clock changes near contested timestamps. Moving the clock back is the simplest way to make a late entry look contemporaneous.
- **Original versus reported.** Compare what the dynamic electronic original says against what was transcribed onto paper or into the report. A common pattern is a complete electronic record that nobody reviewed because a single transcribed number was reviewed instead.

### Worked reconciliation

| Source | Count |
|---|---|
| Injections on the instrument sequence log (one analyst, one month) | 312 |
| Reported sample results in LIMS | 198 |
| Documented system suitability injections | 54 |
| Documented blanks and standards | 41 |
| Documented aborted runs with recorded reason | 7 |
| Accounted for | 300 |
| Unexplained gap | 12 |

Twelve injections on the instrument map to nothing in the documented record. Each one has to be run down. Some may turn out to be legitimate but unlogged equilibration runs, which is itself a procedural problem. Any that turn out to be real test results that never reached the LIMS are evidence of selective reporting, and they expand the extent and the impact. The reconciliation is what makes "we determined the full extent" a defensible statement rather than a hope.

### Acceptance criteria

The retrospective review is complete when every in-scope record has been examined or covered by a defensible sample, when cross-system reconciliation closes to zero unexplained items or each item is explained, when the original records (not just reports) were the basis of review, and when the findings are documented with the specific records, the specific anomalies, and the evidence behind each call.

---

## Phase 4: Product and Patient Impact

Determining what happened to the data is half the job. The other half is what it means for product that was released and patients who were treated. This is the part the cited investigations most often miss, and it is the part that turns a quality finding into a patient-safety question.

### How to assess impact

1. **List every decision the questioned data supported.** Batch release, stability conclusions, specification setting, process validation, a regulatory submission, a complaint or recall decision. Each is a decision that may now rest on unreliable evidence.
2. **Re-evaluate each decision on reliable data only.** Where you have valid original data behind the questioned record, re-derive the decision from it. Where the questioned data are the only data, you cannot assume the underlying material was fine. A passing result that was manufactured to pass tells you nothing about the true quality of the batch.
3. **Assess the affected batches against their true state.** If a result was altered to move it inside specification, the honest question is whether the batch actually met specification. If it did not, you are now in batch-failure and possibly field-action territory.
4. **Trace distribution and patient exposure.** Determine which lots reached the market and which patients were treated, working with the supply chain and pharmacovigilance functions. See [supply chain data integrity](/articles/supply-chain-data-integrity) and [pharmacovigilance and safety data integrity](/articles/pharmacovigilance-safety-data-integrity).
5. **Make the health-hazard evaluation.** Where affected product is on the market, conduct a documented health-hazard evaluation that drives the field-action decision: no action, enhanced monitoring, market withdrawal, or recall. Link this to [product complaint handling](/articles/product-complaint-handling) where complaints exist on the affected lots.

### The hard cases

The clean case is when valid original data survive behind the falsified record, so you can re-derive the true result and find the batch was genuinely fine. The hard case is when the falsification destroyed or replaced the only evidence of the true state. There you cannot assert the product was acceptable, because the data that would prove it no longer exist or were never trustworthy. The honest conclusion may be that the reliability of the batch cannot be established, which, for distributed product, points toward a field action. Inspectors respect an honest "we cannot establish reliability, so we are acting conservatively" far more than a convenient "no impact" that the evidence does not support.

### Acceptance criteria

Impact assessment is adequate when every decision the data supported has been listed and re-evaluated on reliable data, when affected lots and patient exposure are identified, when a documented health-hazard evaluation drives any field-action call, and when "no impact" conclusions are backed by surviving valid data rather than asserted. A "no product impact" statement with no re-evaluation behind it is the single most common inadequate conclusion in this domain.

---

## Phase 5: The Data-Reliability Decision

This is the formal verdict that a data integrity investigation must produce and a routine deviation need not. For each affected data set, the investigation states whether the data can still be relied upon to support the decisions made from it.

The three outcomes:

| Verdict | When it applies | Consequence |
|---|---|---|
| Reliable | The questioned activity did not affect the integrity of the data, proven with evidence (for example, an edit that was a genuine, documented correction with the original preserved) | Decisions stand; the matter may still need CAPA for the control gap |
| Reliable after correction | The true data are recoverable from valid originals; the reported value was wrong but the underlying data are sound | Re-derive and re-issue decisions on the corrected data; assess impact of the period when the wrong value was in use |
| Not reliable | The integrity cannot be established, or the data were falsified and no valid original survives | The data cannot support any decision; every decision built on them is now unsupported and must be addressed |

Write the verdict explicitly, per data set, with the evidence for it. "Not reliable" is not a failure of the investigation; it is often the only honest conclusion, and stating it clearly is what lets you act correctly downstream. The verdict feeds directly into the impact assessment and the reportability decision.

**Acceptance criteria.** The decision is sound when there is a stated, per-data-set reliability verdict; when each verdict is supported by the evidence from the retrospective review; and when the verdict, not a vague narrative, is what drives the impact and reportability conclusions.

---

## Phase 6: Root Cause, System-Gap Versus Intentional Act

Most quality investigations treat intent as irrelevant. Here it is a real fork, because the corrective action and the reportability differ depending on which side you are on. You still apply structured root cause methods (see [root cause analysis techniques](/articles/root-cause-analysis-techniques)), but with an added question that ordinary RCA does not ask.

### The fork

- **System gap.** The controls allowed the problem and would allow it for anyone: a shared login that breaks attributability, a folder where raw data can be deleted, a clock anyone can move, no independent review, no audit trail review. The fix is to close the gap so the act becomes impossible or immediately visible.
- **Intentional act.** A person deliberately altered or fabricated records, possibly working around controls that existed. The fix still includes closing whatever gap was used, but now also includes the human-resources path, a hard look at the culture and pressure that produced it, and a wider trust review of that person's other work.

These are not mutually exclusive, and the most defensible investigations name both: a control gap made it possible, and an individual chose to use it. Avoid the two failure modes. The first is stopping at "human error" or "individual misconduct" and retraining the person while leaving the gap open, so the next person does the same thing. The second is calling deliberate falsification a "training gap" to avoid the harder conversation, which inspectors see through immediately and which understates the problem. See [human error in deviations](/articles/human-error-in-deviations) for why "retrain the analyst" is almost never a complete root cause.

### Reading intent from the evidence

You rarely get a confession, so intent is usually inferred, carefully, from the pattern:

- A single, explainable mistake with the original preserved points toward error.
- Repeated changes that always move results in the favorable direction, deletions of unfavorable runs, blank or false reasons, clock manipulation, and concealment point toward deliberate action.
- Interviews come after the documentary evidence is in hand, not before, so the account can be tested against what the records already show. Keep the legal function involved where intent is credible.

### Acceptance criteria

Root cause is adequate when the systemic enabler is identified and addressed regardless of intent; when the system-gap versus intentional-act determination is made and justified from the evidence; when corrective actions close the mechanism (not just retrain a person); and when, for an intentional act, the wider trust review and the HR and cultural dimensions are addressed rather than buried under "retraining."

---

## Phase 7: Reportability and Self-Disclosure

Once you know the extent, the impact, and the reliability verdict, you have to decide what must be told to whom, and when. This is a judgment that belongs with quality and legal together, never with the investigator alone.

### What can be reportable

- **Field actions.** If affected product on the market is or may be unsafe or out of specification, recall and field-correction obligations attach, on the timelines the relevant authority sets.
- **Submission corrections.** If the questioned data supported a marketing application or a submission, the holder may need to correct the record with the agency. Data integrity findings that touch a submission are serious because they can put the reliability of the whole application in question.
- **Safety reporting.** If patient safety is implicated, the pharmacovigilance and adverse-event reporting obligations run on their own clocks.
- **Notifications under commitments.** Quality agreements, partner contracts, and some authorizations carry their own notification duties to partners and authorities.

### The self-disclosure question

When a firm finds a serious data integrity problem itself, it faces a choice: disclose proactively to the regulator, or remediate quietly and risk the agency finding it later. There is no universal rule, and this is a decision for senior quality and legal leadership, but the practical reality is consistent across enforcement history: regulators respond far better to a firm that found its own problem, scoped it honestly, and came forward with a credible remediation than to a firm where the same problem was discovered during an inspection. Proactive disclosure paired with a complete investigation and a real fix is the stance that preserves credibility. Concealment, or a disclosure that later proves to have understated the extent, destroys it and invites the worst outcomes.

What you do not do is decide reportability before you know the extent. The reportability assessment depends on the impact assessment and the reliability verdict, which is one more reason the extent determination has to be complete before the file closes.

### Acceptance criteria

Reportability is handled correctly when the assessment is made jointly by quality and legal against the actual extent and impact, when every applicable obligation (field action, submission, safety, contractual) is evaluated and documented with its basis, when timelines are tracked, and when any disclosure made is consistent with the evidence and not later contradicted by a wider extent that should have been found first.

---

## Roles Across the Investigation

| Role | Across the investigation |
|---|---|
| QA / data integrity lead | Owns the investigation, the scope decision, and the reliability verdict; the accountable signature on the conclusion |
| Investigator (trained) | Performs the retrospective review and reconciliation; documents findings and evidence |
| IT / digital forensics | Preserves evidence, extracts audit trails and metadata, supports cross-system reconciliation |
| System and process owners | Identify all systems and data in scope; explain the mechanism that was used |
| Manufacturing / supply chain | Trace distribution and lots for impact |
| Pharmacovigilance | Assess patient safety and any safety-reporting trigger |
| Legal | Advise on intent, employment action, privilege, and reportability |
| Senior quality leadership | Authorize product action, resourcing, disclosure, and the final conclusion |
| Independent third party | Where the in-house function is implicated or the matter is severe, an external expert adds the independence inspectors expect |

A point on independence: if the investigation touches the quality unit itself, or anyone in the chain that would normally run it, bring in an independent party. An investigation run by people who could be part of the problem is not credible, and the 2018 FDA guidance specifically contemplates a qualified third party for serious cases.

---

## Common 483-Type Mistakes

These are the patterns that recur in enforcement actions, stated generically:

- **Scope set by assumption, not by looking.** "Limited to one batch" with no examination of the analyst's other work, the instrument's other runs, or the method's other uses. The single most cited failure.
- **No extent determination at all.** The investigation explains the one instance and never asks how far it goes.
- **"No product impact" with nothing behind it.** A conclusion asserted rather than derived from a re-evaluation on reliable data.
- **Evidence not preserved.** The concern was discussed openly first, and the audit trail, raw files, or local copies were altered or deleted before they could be captured.
- **Reviewed reports, not raw data.** The investigation looked at the same printed summaries the problem was hidden behind, instead of the dynamic originals and metadata.
- **"Human error, retrained" as root cause.** The systemic gap that allowed the act stays open, so the next person repeats it.
- **Falsification relabeled as a training gap.** Calling a deliberate act an honest mistake to avoid the harder path, which understates extent and impact.
- **No reliability verdict.** The file closes without ever stating whether the affected data can be used, leaving every downstream decision unsupported.
- **Reportability decided before extent was known.** A premature "no need to report" that a later wider extent contradicts.
- **The quality unit investigating itself.** No independence where the function that would run the investigation is implicated.

---

## Interview Questions and How to Answer Them

Expect these in a data integrity, QA, or compliance interview, and from inspectors.

**"How is a data integrity investigation different from a normal deviation?"** A deviation assumes the records are honest and asks what went wrong with the process. An integrity investigation has to entertain that the records themselves are wrong, so you preserve evidence before you interview, you assume the visible instance is a sample of a larger population, you produce a formal data-reliability verdict, and you treat intent as a real fork that changes the corrective action and the reportability.

**"You find one falsified result. What is the first thing you do?"** Contain and preserve before anyone is confronted. Limit who knows, capture the audit trail, raw files, metadata, and logs in a way the people involved cannot alter, control access where there is a risk of ongoing change, quarantine the affected product, and open the file with a timestamp. Confrontation comes after the documentary evidence is secured, not before.

**"How do you determine the full extent?"** Bound the scope along every axis the problem can travel, person, instrument, method, product, and time, and justify each boundary in writing. Find the signature of the problem and search the whole data estate for it. Scope outward until you can show with evidence where it stops, rather than assuming it stops where you first looked. "We have no evidence it goes further" is not "we looked and it does not."

**"How do you decide whether the data can still be relied on?"** Per data set, state one of three verdicts: reliable, reliable after correction from valid originals, or not reliable. Back each with the evidence from the retrospective review. "Not reliable" is a legitimate and often necessary conclusion, and stating it clearly is what lets you act correctly on impact and reporting.

**"How do you tell a system gap from an intentional act?"** From the documentary pattern, gathered before interviews. A single explainable mistake with the original preserved points to error. Repeated favorable-direction changes, deletions of unfavorable runs, false or blank reasons, clock manipulation, and concealment point to deliberate action. You close the systemic gap either way, and for an intentional act you add the HR path and a wider trust review. Naming both the gap and the choice is the strongest answer.

**"When should a company self-disclose to a regulator?"** It is a senior quality and legal decision made against the actual extent and impact, never before the extent is known. Across enforcement history, a firm that found its own problem, scoped it honestly, and came forward with a credible remediation fares far better than one where the same problem surfaced during an inspection. Concealment, or a disclosure later shown to have understated the extent, is the worst outcome.

**"How do you get to product and patient impact?"** List every decision the questioned data supported, re-evaluate each on reliable data only, assess the affected batches against their true state, trace distribution and patient exposure, and run a documented health-hazard evaluation to drive any field action. Where the falsification destroyed the only evidence of true state, you cannot assert the product was fine, and conservative action follows.

---

## The Durable Principle

A data integrity investigation has one job that a deviation investigation does not: to find out how far the problem really goes and what it did to product and patients, while assuming the records that would normally answer those questions may be the very thing that is compromised. Preserve before you ask. Scope outward until the evidence shows where it stops. State plainly whether the data can be relied on. Close the gap that made it possible, and name the choice if a person made one. Carry it all the way to the patient and to the regulator.

The investigations that fail are the ones that mistake the first thing they found for the whole of the problem. The ones that hold up are the ones that can show, with evidence, that they looked everywhere the problem could have traveled and found its edge. If your file can demonstrate the edge, you have done the work. If it can only describe the one instance you happened to see, you have written the beginning of someone else's Warning Letter. For the response side when an inspection finds what your investigation should have, see [FDA 483 and Warning Letter responses](/articles/fda-483-response-strategy).
