---
title: "Second-Person Review of Analytical and QC Laboratory Data"
description: "How the analyst-then-reviewer workflow actually works: what a reviewer checks across chromatograms, integration, system suitability, sample-set completeness, calculations, and the audit trail, plus independence, evidencing, and the recurring finding that data review did not include the audit trail."
pubDate: 2026-06-22
tags: ["data-integrity", "second-person-review", "QC-laboratory", "chromatography", "audit-trail", "GxP"]
pillar: "data-integrity"
tier: "Intermediate"
---

Almost every analytical result that supports a batch release passes through two people: the analyst who generates it and a second person who reviews it before it counts. That second-person review is one of the oldest controls in the quality laboratory, and it is also one of the most commonly faked. A reviewer initials a printed result sheet, the batch moves on, and nobody ever opens the chromatography data system to see what actually happened during the run. Years later an inspector opens it and finds three integrations of the same peak, a deleted injection, and a manual baseline drag that turned a failing assay into a passing one, none of which the reviewer ever saw, because the reviewer only looked at the printout.

This article covers what the second-person review of laboratory data is supposed to do, what a competent reviewer actually checks, how to keep the review independent, and how to evidence it so an inspector can see it was real. It is written for analytical and QC laboratory work in pharmaceutical, biologics, and cell and gene therapy settings, where the data feeds a release decision. If you are new to the surrounding concepts, [data integrity foundations](/articles/data-integrity-foundations) and [the ALCOA+ principles in detail](/articles/alcoa-plus-deep-dive) set the stage. The single most useful thing here for an interview is the section on the "data review did not include audit trail" finding, because some version of that question comes up in nearly every QC and data integrity interview.

---

## What Second-Person Review Is, and Why It Exists

### The workflow in one line

The analyst-then-reviewer model is simple to state. One qualified person performs the work and records the result. A different qualified person, independent of the first, examines the result and everything behind it, and either accepts it or sends it back. Only after the review is complete does the result feed the next decision, usually batch disposition.

<div class="flow">
  <div class="flow-step">Analyst runs test and records result</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Second person reviews data and metadata</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Accept, or return for correction</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Result feeds disposition</div>
</div>

### Why it is required

The regulatory basis in the United States is 21 CFR 211.194(a)(8), which requires laboratory records to include the initials or signature of a second person showing that the original records have been reviewed for accuracy, completeness, and compliance with established standards. Note the three words: accuracy, completeness, and compliance. The review is not just "does the number look right". It is a check that the record is correct, that nothing is missing, and that the work followed the method and the procedures.

Those three words are the whole legal hook, and the requirement is broader than most laboratories treat it. In the European Union, EU GMP Annex 11 clause 1 expects risk management across the lifecycle of a computerized system, and the data integrity guidances make the review of GxP-relevant metadata, including the audit trail, an explicit expectation. The FDA guidance "Data Integrity and Compliance With Drug CGMP: Questions and Answers" (final, December 2018) states plainly that a complete data review must include a review of the audit trail and other metadata, not only the human-readable result. The MHRA "GXP Data Integrity Guidance and Definitions" (March 2018) and PIC/S PI 041 carry the same expectation.

### The risk rationale

A single human-readable result is the end of a long chain: an injection, an integration, a calibration, a calculation, a transcription. Any link in that chain can fail or be manipulated, and the printed number will look identical whether the chain was clean or not. The second-person review exists to inspect the chain, not just the number at the end. Without it, the integrity of every batch release rests on one analyst being both competent and honest, with no independent check. Regulators do not accept single-person control over data that decides whether a product reaches a patient. The review is the control that catches the honest mistake and deters the dishonest edit.

### Acceptance criteria for the concept

You know your second-person review model is sound, before getting into the line-by-line checks, when: the reviewer is genuinely independent of the analyst, the review covers accuracy plus completeness plus method compliance, the review reaches the underlying electronic data and metadata rather than a printout alone, and the review is evidenced in a way that survives an inspector pulling the same data months later.

---

## What the Reviewer Actually Checks

This is the core of the job. A competent reviewer works through a defined set of checks, in roughly this order, and each one has a specific failure mode. The list below is what an experienced QC reviewer covers for a typical chromatographic assay or related-substances method; adapt the specifics for other techniques, but the structure holds.

| Check | What the reviewer is confirming | The failure it catches |
|---|---|---|
| Chromatogram and integration | Peaks integrated correctly, baselines sensible, manual integration justified | A dragged baseline that changes the result |
| Run audit trail | What happened during acquisition and processing, in sequence | Reprocessing, deletions, edits the printout hides |
| System suitability | The system was fit before real samples ran | Results trusted from an unqualified system |
| Sample-set completeness | Every injection accounted for, nothing missing | Orphaned injections, testing into compliance |
| Calculation verification | The reported value follows from the raw data | A spreadsheet or method math error |
| OOS and aborted-run reconciliation | Failures and aborts handled and explained | A quiet retest that buried a failing result |

### Chromatogram and integration

The reviewer opens the actual chromatogram, not a thumbnail on a report, and looks at how each peak was integrated. The baseline should sit where a baseline belongs. Peak start and end points should make sense. Shoulders, tailing, and co-eluting peaks should be handled the way the method specifies. The reviewer compares the integration against the method's stated integration parameters and against how the same peak was integrated in the standards and across the sample set, because inconsistency is the tell.

Manual integration is the highest-risk part of this check and deserves its own treatment. The default expectation is automatic integration using the method's parameters. Manual integration, where an analyst overrides the software and sets baselines or peak boundaries by hand, is allowed only when it is justified, documented, and performed under a procedure that says when it is acceptable. The reviewer confirms three things for every manual integration: that it was flagged as manual in the data system (the audit trail marks manual integrations), that a documented reason exists, and that the result of the manual integration is scientifically defensible rather than convenient. A manual integration that moves a result toward passing, with a vague reason like "improved integration", is exactly the pattern inspectors hunt for. [Chromatography data system integrity](/articles/chromatography-data-system-integrity) covers the CDS-specific traps in depth.

**How to do this check, step by step:**

1. Open the chromatogram in the data system, not the PDF report.
2. Confirm the integration method applied matches the validated method.
3. Look at the baseline placement for each quantified peak against the standards.
4. List every manual integration the audit trail flags.
5. For each manual integration, find the documented reason and judge whether it is scientifically sound.
6. Confirm no manual integration moved the result across a specification limit without a strong, independent justification.

**Acceptance criteria:** integration matches the method, every manual integration is flagged, justified, and defensible, and no manual edit quietly converted a fail to a pass.

### Run audit trail

The audit trail is the metadata that says what actually happened during acquisition and processing, in time order. The reviewer reads it for the run, looking for reprocessing, re-integration, deletions, changes to sample identity, sequence edits, and any activity that does not match the analyst's account. This is the step that most often gets skipped, and skipping it is the single most cited data review finding in the laboratory. The chromatogram shows the final state; the audit trail shows the history that produced it. A clean chromatogram sitting on top of three reprocessing events is not a clean result. For the mechanics of what a complete trail captures and how to review it at scale, see [audit trail design and review](/articles/audit-trail-design-and-review) and [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).

**Step by step:**

1. Pull the audit trail for the specific run from the live data system.
2. Read it chronologically alongside the analyst's recorded narrative.
3. Flag every reprocess, re-integration, deletion, and sample-ID change.
4. For each flagged event, confirm a recorded reason exists and is acceptable.
5. Confirm the final reported result corresponds to the last legitimate processing, with no later silent edit.
6. Record in the review that the audit trail was examined, for what period, and what was found.

**Acceptance criteria:** the trail was read for the run, every modification has an acceptable recorded reason, and the reported result traces to a clean, final processing step.

### System suitability

System suitability testing (SST) proves the chromatographic system was performing acceptably before and, where required, during the real sample injections. The reviewer confirms the SST was run, that it passed against the method's criteria (resolution, tailing, theoretical plates, relative standard deviation of replicate standard injections, and so on), and crucially that it passed before the sample results that depend on it. A subtle but serious failure is an SST that was run after the samples, or an SST failure followed by samples reported anyway. If the system was not suitable, the sample data acquired on it cannot be trusted, full stop.

**Step by step:**

1. Confirm SST was performed per the method.
2. Check each SST parameter against its acceptance criterion.
3. Confirm the passing SST precedes the sample injections it supports in the sequence and the timestamps.
4. If any SST failed, confirm samples on that system were not reported as valid.

**Acceptance criteria:** SST passed against the method criteria and passed before the dependent samples ran, with no failed-SST data reported as valid.

### Sample-set completeness

The reviewer reconciles the full sequence: every injection that the instrument performed should map to a documented purpose, a sample, a standard, a blank, a bracket, a system suitability injection, or a documented aborted run with a reason. The danger is the orphaned injection, a run that the instrument performed but that appears nowhere in the reported record. That is the fingerprint of testing into compliance, where unfavorable results were generated and then discarded so only the passing run was reported. The reviewer counts and accounts. See [the OOS investigation process](/articles/oos-investigation-process) for how a genuine failing result must be handled instead of buried.

**A worked reconciliation:**

| Source | Count |
|---|---|
| Injections in the instrument sequence log | 22 |
| Reported sample results | 8 |
| System suitability injections | 6 |
| Blanks and standards | 5 |
| Documented aborted runs with reason | 1 |
| Accounted for | 20 |
| Unexplained gap | 2 |

In this example two injections happened on the instrument but match nothing in the documented record. The reviewer cannot accept the result set until both are explained: either they were legitimate equilibration injections that were not logged, or they were real sample runs that never reached the report. The second possibility is the one that ends careers.

**Acceptance criteria:** total injections equal the sum of documented purposes, with zero unexplained injections.

### Calculation verification

The reviewer confirms that the reported value follows correctly from the raw data: the right standard concentration, the right dilution and correction factors, the right formula, the right rounding and significant figures, and the right reporting against the specification. For methods that use a validated spreadsheet or a LIMS calculation, the reviewer confirms the calculation engine is the validated one and the inputs were entered correctly, rather than re-deriving every digit by hand. For manual calculations, an independent recalculation is the gold standard. Transcription points, where a number moves from the instrument to a form or a spreadsheet, are the highest-risk spots and deserve a direct check against the source.

**Step by step:**

1. Confirm the calculation used is the validated method calculation.
2. Verify each input (standard purity, weights, dilutions, factors) against the source.
3. Recalculate or confirm the engine output for at least the reportable result.
4. Check rounding, significant figures, and units against the method.
5. Compare the final value to the specification and confirm the pass/fail call is correct.

**Acceptance criteria:** the reported result is reproducible from the raw data using the validated calculation, with correct inputs, rounding, and specification comparison.

### OOS and aborted-run reconciliation

Finally, the reviewer reconciles anything that did not go cleanly: out-of-specification results, out-of-trend results, aborted runs, and invalidated injections. Each must have been handled through the proper channel. An OOS result must trigger an [OOS investigation](/articles/oos-investigation-process), not a quiet retest. An aborted run must have a documented, contemporaneous reason. An invalidated injection must have a recorded justification that stands up to scrutiny. The reviewer's job is to confirm that nothing inconvenient was simply made to disappear, and that every failure or anomaly was escalated and resolved through the quality system, with the original failing data retained. See [out-of-trend investigations](/articles/out-of-trend-investigations) for the trend dimension.

**Acceptance criteria:** every OOS, OOT, abort, and invalidation has a documented, contemporaneous, defensible disposition, and no failing result was discarded outside the investigation process.

---

## Independence: What It Means and How to Keep It

### Why independence is the whole point

If the analyst reviews their own work, the review catches nothing the analyst already missed and deters no one. The control only works when a different person, who did not perform the work and has no stake in the outcome, looks at it with fresh eyes. Independence is not a nicety; it is the mechanism. 21 CFR 211.194(a)(8) says a second person, and inspectors read that literally.

### What independence requires in practice

| Requirement | What it means |
|---|---|
| Different person | The reviewer did not generate the data being reviewed |
| Qualified | The reviewer is trained on the method and the data system, and competent to spot a bad integration |
| No outcome stake | The reviewer is not under pressure to pass the batch and is not the analyst's direct beneficiary |
| Attributable | The review is signed by a uniquely identified individual, never a shared account |

### The small-laboratory problem

In a small QC group, full independence is genuinely hard: there may be only two qualified analysts, and they end up reviewing each other constantly, or one person does most of the work. This is solvable but it must be documented. Acceptable compensating arrangements include a peer in a different group reviewing the work, a supervisor who did not perform the test acting as reviewer, or a documented arrangement where the reviewer is rotated so the same pair does not always check each other. What is not acceptable is silent self-review, or a reviewer who is the analyst's subordinate and cannot realistically push back. Whatever the arrangement, write it down so an inspector sees a deliberate, justified control rather than an accident of staffing. See [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) for how to map this.

**Acceptance criteria:** the reviewer is a different, qualified, attributable person with no stake in passing the batch, and any constraint on full independence is covered by a written, justified compensating control.

---

## Evidencing the Review

### Why evidencing matters as much as the review

From an inspector's standpoint, a review that left no usable evidence is a review that did not happen. The point of evidencing is to let someone who was not there reconstruct what was checked, by whom, when, and what was found. An initial on a result sheet is the bare minimum and, on its own, is exactly what gets a laboratory in trouble, because it proves a signature happened but says nothing about whether the audit trail was opened, whether the integration was examined, or whether the sequence was reconciled.

### What good evidence looks like

The strongest evidence is a structured review record, often a checklist tied to the result, that captures the specific checks performed. It does not need to be long, but it must be honest and specific. A defensible review record for a chromatographic assay captures at least:

| Field | Example entry |
|---|---|
| Result / sample reviewed | Assay, sample S-2026-1187, batch B-4402 |
| Method and system | HPLC assay method M-021, CDS instrument HPLC-07 |
| Chromatogram and integration | Reviewed; automatic integration; no manual integrations |
| Audit trail | Reviewed for run, 2026-06-18; no reprocessing, no deletions |
| System suitability | Passed; RSD 0.6 percent, resolution 2.4; ran before samples |
| Sequence completeness | 20 injections, all accounted for, zero orphans |
| Calculation | Verified against validated LIMS calculation |
| OOS / OOT / aborts | None |
| Outcome | Accepted |
| Reviewer / date | Reviewer, signed 2026-06-19 |

The two lines that most often distinguish a real review from a paper one are the audit trail line and the sequence completeness line. If your review record has a field that explicitly says the audit trail was reviewed, for what period, and what was found, you have closed the single most common gap before an inspector ever arrives.

### Electronic review workflows

Modern LIMS and CDS platforms support an electronic review-and-approve workflow with an electronic signature that locks the record on approval. Where this exists, configure it so the reviewer cannot approve without the result being in a reviewable state, and so the approval is captured in the audit trail with the reviewer's identity and timestamp. The electronic signature must meet the usual expectations; see [electronic signatures implementation](/articles/electronic-signatures-implementation). The risk with electronic workflows is that an approval click can be even faster and emptier than an initial on paper, so the configuration should require the reviewer to have at least reached the data, and the review record should still capture what was checked.

**Acceptance criteria:** every review produces an attributable, dated record that names the specific checks performed, explicitly including whether the audit trail was reviewed and for what scope, and the record survives independent retrieval of the same data later.

---

## The "Data Review Did Not Include Audit Trail" Finding

### What the finding says

This is worth a section of its own because it is the most common data review citation in the laboratory, and it appears in warning letters and 483s year after year in some form. The finding, stated generically, is that the laboratory's second-person review examined the human-readable result but did not review the audit trail or other electronic metadata, so the review could not and did not detect modifications, reprocessing, deletions, or other events visible only in the metadata. The laboratory had a review, signed and dated, but the review was blind to exactly the layer where data integrity problems live.

### Why it keeps happening

The cause is almost always historical and procedural rather than malicious. The review procedure was written for paper and printed results, before the audit trail was something people thought to open. The procedure says "review for accuracy and completeness", the reviewers do that against the printout, and nobody updated the procedure or trained the reviewers to open the data system and read the trail. The capability was there; the procedure and the habit were not. The companion pattern in [audit trail design and review](/articles/audit-trail-design-and-review) is the trail that is captured but never reviewed; here the trail is reviewable but the review procedure never told anyone to review it.

### How to close it

1. Update the review SOP to explicitly require audit trail review as part of the second-person review, naming what to look for (reprocessing, deletions, manual integrations, sample-ID changes, sequence edits).
2. Add an audit trail field to the review record so the reviewer must affirmatively state the trail was reviewed, for what period, and what was found.
3. Train reviewers on how to open and read the trail for each data system they review.
4. Where volume is high, define a risk-based, partly automated approach so the trail review is feasible rather than fictional; see [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).
5. Verify in self-inspection that reviews are actually opening the trail, by pulling a sample of reviewed results and checking the trail for events the review should have caught.

### A worked example of the finding and the fix

A QC laboratory releases an assay result of 99.4 percent against a 95.0 to 105.0 specification. The result sheet is reviewed and signed. Eighteen months later an inspector opens the audit trail for the run and finds the assay was first integrated at 94.1 percent, then reprocessed twice with manual baseline adjustments, with the reason field left blank, until it read 99.4. The printed result the reviewer signed was the final, passing number. The reviewer never saw the journey because the review procedure pointed only at the printout. The finding is not "the result was wrong"; it is "the data review did not include the audit trail and therefore could not detect the reprocessing". The fix is procedural (require and evidence trail review), cultural (reviewers must understand the trail is where problems hide), and remedial (a retrospective review of past results to find any similar pattern, often as part of a broader [data integrity remediation program](/articles/di-remediation-program)).

**Acceptance criteria:** the review procedure mandates audit trail review with named criteria, the review record evidences it, reviewers are trained and demonstrably opening the trail, and a self-inspection confirms reviews catch metadata-only events.

---

## Roles and Responsibilities

The review fails when ownership is fuzzy. Map it explicitly, usually in the laboratory data governance documents and the review SOP. See [data governance framework](/articles/data-governance-framework).

| Role | Owns |
|---|---|
| Analyst (data originator) | Generating accurate data, recording reasons for any manual integration or edit, presenting a complete, reviewable record |
| Reviewer (second person) | Performing the full review including the audit trail, recording what was checked, returning or escalating anomalies; must be independent of the analyst |
| Laboratory supervisor / manager | Ensuring reviewers are qualified and independent, that review is scheduled and completed before disposition, and that the review SOP is current |
| Quality Assurance | Approving the review procedure, oversight of escalations, defending the program in inspection |
| Validation | Confirming the data system supports a reviewable audit trail and an electronic review workflow where used |
| QP / disposition authority | Relying on the completed review as part of [batch disposition](/articles/batch-disposition-decisions) and confirming the review was done before release |

The two segregations that matter most: the analyst must not review their own data, and the reviewer must have the standing and independence to send a result back without career consequences. Where staffing strains this, document the compensating control rather than quietly collapsing the two roles.

---

## Common Mistakes and Inspection-Finding Patterns

- **Review did not include the audit trail.** The headline finding. The reviewer signed the printout and never opened the metadata where reprocessing and deletions live.
- **Review is an initial with no substance.** A signature that proves a click happened but evidences none of the specific checks.
- **Manual integration not scrutinized.** Manual integrations passed through review without confirming they were flagged, justified, and scientifically sound, especially ones that moved a result across a limit.
- **System suitability accepted out of order.** SST that ran after the samples, or a failed SST followed by reported sample data, not caught in review.
- **Orphaned injections missed.** The reviewer never reconciled the full sequence, so injections that never reached the report went undetected.
- **Self-review in disguise.** A "second person" who is the analyst's subordinate, or a peer arrangement that is really mutual rubber-stamping, with no documented compensating control.
- **Calculation taken on faith.** The reviewer confirmed the number looked plausible but never verified inputs, factors, rounding, or the specification comparison.
- **OOS buried as a retest.** A failing result quietly retested and only the passing repeat reviewed, with the original failure not handled through investigation.
- **Review SOP frozen in the paper era.** The procedure was never updated to require electronic metadata review, so reviewers do exactly what the SOP says and miss the trail.
- **Review after disposition.** The result was released before the review was complete, making the review a formality rather than a control.

---

## Interview Questions and How to Answer Them

Expect these in QC, analytical, and data integrity interviews, and from inspectors.

**"What does the second-person review of laboratory data actually check?"** Accuracy, completeness, and compliance with the method, per 21 CFR 211.194(a)(8). In practice that means the chromatogram and integration including any manual integration justification, the run audit trail, system suitability and its ordering, full sequence completeness with no orphaned injections, the calculation against the raw data, and reconciliation of any OOS, OOT, or aborted runs. It is a review of the chain that produced the number, not just the number.

**"What is the most common data review finding in a QC laboratory?"** That the data review did not include the audit trail. The reviewer examined the printed result but never opened the electronic metadata, so the review could not detect reprocessing, deletions, or manual integrations. The fix is to require and evidence audit trail review in the SOP and the review record, train reviewers to open the trail, and confirm in self-inspection that they actually do.

**"How do you handle manual integration in review?"** Confirm three things for every manual integration: it was flagged as manual by the data system, a documented and scientifically sound reason exists, and the result is defensible rather than convenient. Be especially skeptical of any manual integration that moved a result across a specification limit. The default is automatic integration; manual is the exception that must be justified.

**"How do you detect testing into compliance during review?"** Reconcile the full injection sequence. Every injection the instrument performed must map to a documented purpose: sample, standard, blank, system suitability, or a documented aborted run with a reason. Any injection that appears on the instrument but nowhere in the reported record is an orphan that has to be explained before the result can be accepted.

**"What makes a reviewer independent, and what do you do in a two-person lab?"** Independent means a different, qualified person who did not generate the data and has no stake in passing the batch, signing as a uniquely identified individual. In a small lab where full independence is hard, document a compensating control: a peer in another group, a supervisor who did not run the test, or rotated reviewers, and never silent self-review or a subordinate who cannot push back.

**"How do you evidence that a review really happened?"** A structured review record, tied to the result, that names the specific checks performed, with explicit fields for whether the audit trail was reviewed and for what scope, and whether the sequence reconciled. A bare initial proves a signature, not a review. The record must let someone who was not there reconstruct what was checked and found.

**"When must the review be complete relative to release?"** Before disposition. A review performed after the batch is released is a formality, not a control. The completed second-person review, including the audit trail, is an input to the release decision, not a box ticked afterward.

---

## The Durable Principle

The second-person review exists to inspect the chain behind a result, not the result itself. The printed number tells you nothing about whether it was reprocessed three times, whether the system was suitable, or whether two injections vanished. The chromatogram, the audit trail, the system suitability, the sequence, the calculation, and the handling of every failure together tell the real story, and the reviewer's job is to read that story independently and prove they read it. A review that stops at the printout is the review that gets cited, because it looks at the one layer where nothing was ever going to be wrong. Open the data system, read the trail, reconcile the sequence, and write down what you checked. That is the difference between a control and a signature.
