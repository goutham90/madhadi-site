---
title: "OOS Investigations: The Step-by-Step Process FDA Expects"
description: "An operational walkthrough of out-of-specification investigations: Phase 1 laboratory assessment, Phase 2 full investigation, assignable cause determination, retest and resample rules, batch disposition, and exactly what FDA inspectors examine."
pubDate: 2026-02-19
tags: ["OOS", "laboratory", "QC", "investigation", "FDA", "GxP"]
tier: "Intermediate"
pillar: "quality-assurance"
---

Out-of-specification results sit at the intersection of analytical science, quality decision-making, and data integrity. They are also where careers and product approvals quietly come apart. The single most cited theme in FDA warning letters to pharmaceutical laboratories over the past decade has been the mishandling of OOS results: invalidating failing data without a documented cause, retesting into compliance, and releasing batches on the strength of a passing retest while the original failure sits unexplained in the audit trail.

FDA's guidance "Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production" was issued in October 2006 and remains the controlling reference. It is unusually specific for an FDA guidance, walking through the two-phase investigation, the rules for retesting and resampling, and the statistical treatment of results. The regulatory hook behind it is short and blunt: 21 CFR 211.192 requires that any unexplained discrepancy or failure of a batch to meet specifications be thoroughly investigated, whether or not the batch was already distributed.

An OOS occurs when a reportable result falls outside an established acceptance criterion for the test being run. That usually means a registered specification limit, which is a regulatory commitment in the marketing application or compendial monograph. Depending on how the procedure is written, it can also capture in-house alert and action limits. The reportable result matters here: a specification applies to the final reportable value defined by the method, for example the average of a defined number of preparations, not to each individual injection or weighing along the way.

---

## The Two-Phase Structure and Why It Exists

The investigation is split into two phases for a reason that is easy to lose sight of under deadline pressure. Phase 1 asks a narrow question: did the laboratory make a specific, identifiable mistake that produced this number? Phase 2 asks the broader question: if the laboratory did everything right, does this result mean the product itself is bad?

Keeping these separate protects the integrity of the decision. If you let the second question contaminate the first, the laboratory starts hunting for any plausible reason to discard an inconvenient result rather than genuinely assessing its own execution. The firewall between "was this a lab error" and "is the product out of spec" is the structural defense against results-driven investigation.

A timeline helps orient the three readers who use this process differently. The analyst lives in the first hours. The QC supervisor and QA reviewer own the formal phases. The site quality head and the regulatory function care about the disposition and the systemic signal.

| Stage | Owner | Question answered | Typical timing |
|---|---|---|---|
| Result observed and flagged | Analyst | Is this outside acceptance criteria? | Immediately, before any rerun |
| Phase 1 laboratory assessment | Analyst with QC supervisor, QA oversight | Was there an assignable laboratory error? | Usually within 1 business day |
| Phase 2 full investigation | QA leads, with manufacturing and process | Does the result reflect a real product failure? | Often 20-30 days to close |
| Disposition decision | QA | Release, reject, or further characterize | At investigation closure |

---

## Phase 1: Laboratory Investigation

The moment an analyst observes an OOS result, the laboratory phase begins. The first obligation is preservation: do not discard solutions, do not reintegrate, do not rerun the sample, and do not adjust anything until the data has been reviewed with the supervisor. A common failure is the analyst who, on instinct, reinjects the vial "to confirm" before anyone has looked at the original. That second injection now sits in the sequence and has to be accounted for forever.

Phase 1 is conducted by laboratory personnel, normally the analyst together with the QC supervisor, under QA oversight. It must be completed before Phase 2, and it must not involve additional testing of the original sample. Its only job is to find, or rule out, a laboratory cause.

**Phase 1 assessment areas:**

*The analytical method.* Was the correct, current, approved version used? Was the right reportable-value formula applied? Methods drift through revisions, and using a superseded procedure is itself an assignable cause.

*Instrument status.* Was the instrument inside its calibration and qualification window? Were system suitability (SST) criteria met before and during the sequence? On a chromatographic run, resolution, tailing, and replicate precision of the standard tell you whether the system was fit to produce a trustworthy number at all. An SST failure recorded in the run is one of the cleanest assignable causes there is. See [analytical instrument qualification](/articles/analytical-instrument-qualification) for what "qualified" actually requires.

*Sample preparation.* Was the sample weighed and diluted per the method, with the correct diluent and dilution factor, and did the final concentration land inside the validated range? A concentration above the linear range produces a low, non-quantitative result that looks like a product failure but is a preparation problem.

*Reagents and standards.* Were reference standards in date, stored correctly, and traceable? Was the standard the right one, prepared correctly, and within its assigned use period?

*The calculation.* Run the arithmetic independently. Transcription slips, a misplaced dilution factor, and the wrong response factor are mundane and extremely common.

*Analyst qualification.* Was the analyst trained and qualified on this method and this instrument? Training status is supporting evidence, never a standalone cause.

*The raw data itself.* Open the actual chromatogram or instrument trace. Look for co-eluting peaks, abnormal peak shape, baseline disturbance, integration that grabbed the wrong area, or detector saturation. The story is usually in the raw data, not the summary. This is also where you check that integration was done per method and not adjusted to move the number. Audit-trail review of any reprocessing belongs here; [audit trail design and review](/articles/audit-trail-design-and-review) covers what that trail should show.

**Phase 1 has exactly two valid conclusions:**

- An assignable laboratory cause was found, documented with evidence, and the source identified. The OOS is attributable to that error, not the product. A retest of the original sample is justified to obtain a valid result.
- No assignable laboratory cause was found. The result stands as a confirmed laboratory finding, and Phase 2 begins.

**What Phase 1 cannot do:**

- Invalidate a result because it "doesn't seem right" or "we've never seen one this low."
- Assume the result is wrong without a specific, documented error.
- Test additional vials hoping for passing numbers before Phase 1 is closed.
- Let the analyst rerun on the basis that their judgment says something felt off.

This is where most OOS failures are born. When Phase 1 quietly turns into "keep looking until we find a reason to discard this," the investigation is corrupted and every downstream disposition decision is indefensible. The discipline that keeps Phase 1 honest is the same discipline behind [deviation management](/articles/deviation-management) and good [good documentation practices](/articles/good-documentation-practices): write what you actually found, when you found it.

---

## Phase 2: Full Investigation

Phase 2 starts when Phase 1 turns up no assignable laboratory cause. It pulls in QA and the manufacturing or process function, because the question has changed. Now you are asking whether the number is telling you something true about the batch.

*Production review.* Read the batch manufacturing record for the affected lot. Were all steps performed as written and in sequence? Did any parameter run outside its proven acceptable range? Were deviations opened during manufacture? Did operators note anything atypical? A blend uniformity OOS sitting next to a deviation about a mixer running short is not a coincidence, it is the root cause.

*Related batches and history.* Where does this result fall against the historical distribution for this product and process? A genuine product failure usually has company: the same trend in adjacent lots, a shift after a raw material change, a slow climb in a degradation product. Plotting the result against prior data is one of the most informative things you can do. This is the link between an OOS and the [annual product review (PQR)](/articles/annual-product-review-pqr) data set, and it is why [statistics in quality (Cpk and control charts)](/articles/statistics-in-quality-cpk-control-charts) matters operationally rather than academically.

*Raw materials and components.* Were materials from approved suppliers and released lots? Were any incoming results borderline or trending? Supplier-side variability is a frequent and overlooked contributor; [supplier and vendor qualification](/articles/supplier-vendor-qualification) is the upstream control.

*Process validation.* Does the validation package show this process reliably yields conforming product under the conditions actually used? Does the OOS fall outside the validated design space, or inside it where the process should have been in control? An OOS inside a supposedly validated space is a stronger product signal than one tied to a clear excursion. See [process validation lifecycle](/articles/process-validation-lifecycle).

### Retesting, Resampling, and Additional Testing

These three terms are not interchangeable, and FDA treats them differently.

**Retesting** means analyzing additional preparations taken from the original, retained sample. It is only appropriate when there is a sound scientific reason, and it must have advance QA approval against a predefined plan. The number of retests and the rule for using the data are written down before the analyst sees a single new result. Deciding the acceptance logic after the numbers come back is the textbook definition of testing into compliance.

**Resampling** means drawing a new sample from the batch. It is justified only when the investigation identifies a specific reason to believe the original sample was not representative, for example a documented sampling error or evidence of non-homogeneity. Random resampling in hope of a better outcome is not acceptable.

**Additional testing** can characterize the batch further, for example extra units to understand a uniformity issue, but it characterizes, it does not erase. The original OOS remains a real data point.

FDA is explicit on the statistics:

> "If a retest is performed, you need to include all test results, including the outlier, in the final statistical evaluation."

Outlier tests deserve their own caution. The guidance permits a documented, prospectively defined outlier procedure for some result types, but an outlier test can never be used to invalidate an OOS for a chemical assay where the failing value is the result of interest. You cannot statistically wish away a failing assay.

---

## Assignable Cause and Invalidation

A result may be invalidated only when an assignable cause is identified with documented evidence. The cause has to be a specific, identifiable error in execution, supported by contemporaneous records.

**Defensible assignable causes:**

- A documented preparation error: wrong weight, wrong volume, or wrong diluent, confirmed by balance printouts, preparation records, or the instrument raw data.
- An equipment malfunction recorded at the time: an instrument alarm, a column failure, or an SST failure captured in the sequence.
- An analyst error caught and documented contemporaneously, such as a transcription error corrected through the audit trail or a calculation error identified during review.
- Contamination of a standard or reagent, confirmed by reanalysis of that standard.

**What does not qualify as an assignable cause:**

- "The result does not fit our expectations."
- "The analyst is new," with no evidence of the specific error they made.
- "This instrument has given us trouble before," with no evidence for this run.
- An outlier designation built on the OOS value itself.
- A passing retest, where the original failure was never explained.

When Phase 2 closes with no assignable cause, the OOS is confirmed and attributable to the product. The batch must then be evaluated for rejection.

---

## A Worked Example

A finished-product tablet assay specification is 95.0 to 105.0 percent of label claim, with the reportable value defined as the mean of two preparations. The analyst obtains 93.4 percent. That is an OOS.

In Phase 1, the supervisor and analyst review the run. SST passed. The standard was in date. The balance log and preparation worksheet check out. The chromatogram, though, shows the main peak shoulder partly merged with a late-eluting peak, and the integration baseline was dropped manually so that part of the analyte peak area was excluded. Reprocessing the data per the method, with the correct integration parameters, gives 99.1 percent. The audit trail confirms the manual integration was applied during the original processing and shows who did it and when.

That is an assignable laboratory cause: an integration error documented in the audit trail. The corrected reportable value is valid, the original is documented and retained, and the event is recorded as a method-execution error with a CAPA on integration practice and analyst training. See [what is a CAPA](/articles/what-is-a-capa).

Change one fact. Suppose the chromatogram is clean, SST passed, the calculation is right, and nothing in the preparation explains the number. Phase 1 closes with no cause. The 93.4 percent stands. Phase 2 reviews the batch record and finds a granulation hold time that ran long, plus two adjacent lots trending toward the lower assay limit. Now the OOS has a plausible product-side story, the investigation widens to those lots, and the disposition has to confront a real assay shortfall, not a paperwork artifact.

The two scenarios start with the identical number. The investigation, not the number, decides what it means.

---

## Batch Disposition After OOS

Disposition is a QA decision, and it has to flow from the evidence. The inputs are:

- Whether an assignable cause was found and whether invalidation is genuinely defensible.
- What additional testing, if any, showed, read in full and in context.
- Whether the OOS is a single isolated event or part of a pattern across lots.
- The product type, route of administration, and patient risk.

For a confirmed OOS with no assignable cause, rejection is the right outcome in most cases. There are situations where additional characterization informs the decision, but the logic must hold up: characterization describes the batch, it does not delete the failure. A sterile injectable failure and a tablet hardness OOS do not carry the same risk weight, and the disposition should say so explicitly.

A rejected batch must be segregated, clearly labeled, and its disposition documented. The OOS, the complete investigation, and the rejection rationale become part of the batch record and feed [batch record review](/articles/batch-record-review-gmp) and the product's annual review.

---

## Reporting and Scope Beyond the Single Batch

21 CFR 211.192 requires that each failure to meet specifications be investigated, and that the investigation extend to other batches and other products that may be associated with the failure. The regulation specifically does not stop at the batch on the bench.

If the investigation shows the OOS came from a manufacturing cause that could have affected other lots, every potentially affected batch must be assessed, including product already in distribution. Where distributed product is implicated, that assessment can escalate to a field action or recall. The decision tree from a single OOS to a recall is not theoretical; it is the path the regulation anticipates.

For investigational products, an OOS affecting material used in active studies has to reach the sponsor's quality function and be evaluated for impact on subject safety and study data. The handling sits inside the broader [clinical QA and GCP data integrity](/articles/clinical-qa-gcp-data-integrity) framework, and the urgency rises when dosing is ongoing.

---

## OOS vs. Out of Trend (OOT)

An OOS is a hard failure against a regulatory commitment. An OOT result is inside specification but statistically unusual relative to the product's own history. OOT limits are internal alert levels, not registered specifications, and they exist to catch drift early.

OOT investigations are less formal but not optional. A result that passes today yet sits far from the established mean is often the first visible sign of a process moving toward an eventual OOS. A stability time point that is passing but declining faster than the historical curve is the classic case: catch it at OOT and you have a process conversation; miss it and you have an OOS at the next pull, plus questions about every lot in between. Trending is also tied to the [stability programs (ICH)](/articles/stability-programs-ich) data set, where an emerging OOT against the shelf-life trend can force a re-evaluation of the assigned expiry.

---

## What FDA Inspectors Examine

Investigators routinely pull OOS records, and they read them in a predictable order.

**Timeliness.** The investigation should open promptly. A multi-day gap between the result and the start of the assessment, with no explanation, reads as either a control failure or an attempt to manage the record after the fact.

**Phase 1 integrity.** Did Phase 1 actually evaluate execution, or does it just say "no error found"? Inspectors look for documented evidence that each assessment area was genuinely checked, not a checkbox with nothing behind it.

**No results-based invalidation.** Are there OOS results invalidated without specific, documented causes? This is among the most serious findings in any drug inspection because it is the signature of data manipulation, and it frequently anchors a warning letter. The patterns are catalogued in [FDA warning letter patterns](/articles/fda-warning-letters-patterns).

**Retest discipline.** When retesting occurred, was it pre-approved against a defined plan, and were all results, including the original OOS, carried into the final evaluation?

**Disposition logic.** Does the release-or-reject decision follow from the findings, or was a lot released over a confirmed OOS?

**Completeness of the record.** A laboratory that retests until it passes and then reports only the passing data has committed a serious data integrity violation. Inspectors compare the full sequence log in the chromatography data system against LIMS and the investigation file, and they look for runs that exist in the instrument but never appear in the report. This is why the [ALCOA+ principles](/articles/alcoa-plus-deep-dive) of complete and contemporaneous data are not abstract, and why [data integrity foundations](/articles/data-integrity-foundations) treats the audit trail as primary evidence.

If a 483 or warning letter does land on OOS handling, the response strategy matters as much as the remediation itself; see [FDA 483 response strategy](/articles/fda-483-response-strategy).

---

## Common OOS Failures and How to Avoid Them

| Failure | What it looks like | Why it is a problem |
|---|---|---|
| Rushing Phase 1 | "No error found" with no documented evaluation | Invalidation decisions are not defensible |
| Reinjecting before Phase 1 closes | Running additional vials while still "investigating" | Contaminates Phase 2 data and the investigation logic |
| Counting passing retests, ignoring the original OOS | Final conclusion based only on the retests | Directly contradicts FDA OOS guidance |
| Root cause "human error" with no specifics | Names the analyst but not the actual error | Fails to establish an assignable cause |
| Verbal investigation, paper documentation | Writing up an investigation that happened in someone's head | Breaks contemporaneity and traceability |
| No comparison to related batches | Evaluating one result in isolation | Misses the signal that the OOS is a broader process issue |
| Misusing outlier tests | Discarding a failing assay as a statistical outlier | Not permitted for the result of interest in an assay |

---

## Building a Defensible OOS Program

Strong individual investigations come from a strong system, not heroics. A few program-level controls make the difference. Write the OOS procedure so the two phases, the retest and resample rules, and the predefined statistical plans are unambiguous, with no room to decide acceptance logic after the fact. Train analysts to stop and preserve, not to rerun on instinct. Build trending that surfaces OOT signals before they become OOS events, and feed those signals into the periodic review. Make QA oversight real, with documented review at each phase rather than a signature at the end.

Tie the whole thing back to the [pharmaceutical quality system](/articles/pharmaceutical-quality-system): an OOS is a quality event, and how the system handles it is a direct readout of quality culture. Sites where data is reported honestly and failures are investigated to a real cause are also the sites that pass inspections. The OOS investigation is more heavily documented than almost any other quality event in pharmaceutical manufacturing because the integrity of that process decides whether safe product ships and unsafe product does not. There is no defensible shortcut.
