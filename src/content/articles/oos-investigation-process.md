---
title: "OOS Investigations: The Step-by-Step Process FDA Expects"
description: "A complete operational guide to out-of-specification investigations — Phase 1 laboratory investigation, Phase 2 full investigation, assignable cause determination, batch disposition, and what FDA inspectors actually examine."
pubDate: 2026-02-19
tags: ["OOS", "laboratory", "QC", "investigation", "FDA", "GxP"]
tier: "Intermediate"
pillar: "quality-assurance"
---

Out-of-specification results are one of the most regulated activities in pharmaceutical quality control. FDA's 2006 guidance document "Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production" is one of the most detailed pieces of guidance FDA has ever issued on a single topic, and for good reason: OOS investigations are where data integrity failures are discovered, where product quality decisions are made, and where the science of pharmaceutical analysis must be applied rigorously.

An OOS occurs when a test result falls outside the established acceptance criteria for the test being conducted. This includes specification limits, which are the regulatory commitments, and may also include internal alert and action limits depending on how the OOS procedure is written.

---

## Phase 1: Laboratory Investigation

The moment an analyst observes an OOS result, the laboratory investigation begins. This phase is conducted by laboratory personnel under QA oversight. It must be completed before Phase 2, and it must not involve additional testing of the original sample.

**What Phase 1 is investigating:**
Whether the OOS result was caused by a laboratory error. Not whether the product is bad, that question comes later. Phase 1 is asking: did something happen in the laboratory that would explain this result independent of the product?

**Phase 1 checklist:**

*Review the analytical method:* Was the correct method used? Was it the current approved version?

*Review instrument status:* Was the instrument within its calibration and qualification window? Were system suitability criteria met? Were SST results within specification before and during the sample sequence?

*Review sample preparation:* Was the sample prepared according to the method? Was the correct diluent used? Was the dilution factor correct? Were concentrations within the method's linear range?

*Review reagents and standards:* Were reference standards within their expiry and storage conditions? Were reagents prepared correctly and within their valid use period?

*Review the calculation:* Was the correct calculation applied? Is there a transcription error or arithmetic error?

*Review analyst training:* Was the analyst trained on the method and instrument?

*Review the raw data:* Look at the actual chromatogram or instrument output. Are there obvious signs of analytical problems, co-eluting peaks, abnormal peak shapes, baseline problems, detector saturation?

**Phase 1 can only conclude one of two things:**

- An assignable laboratory cause was found. The error is documented, the source is identified with evidence, and a retest of the original sample is warranted. The OOS result is attributable to the identified error, not to the product.
- No assignable laboratory cause was found. The result is a confirmed OOS. Phase 2 begins.

**What Phase 1 cannot do:**

- Invalidate an OOS result because "it doesn't seem right" or "we've never seen a result this low before"
- Assume the result is wrong without finding a documented, specific laboratory error
- Test additional samples in hopes of getting passing results before Phase 1 is complete
- Allow the analyst to rerun the test because their judgment tells them something was wrong

This is where a lot of OOS failures begin. Phase 1 is supposed to be a systematic evaluation of the laboratory execution. When it becomes "keep looking for a reason to invalidate this result," the investigation is corrupted and the batch disposition that follows is not defensible.

---

## Phase 2: Full Investigation

Phase 2 begins when Phase 1 finds no assignable laboratory cause. It involves both QA and the manufacturing or process function, and it's investigating whether the OOS result reflects an actual product quality failure.

**Phase 2 scope:**

*Production review:* Review the batch manufacturing record for the affected batch. Were all process steps completed as written? Were any parameters out of range? Were any deviations opened during manufacture? Were any atypical events noted by operators?

*Review of related batches:* Has this product, manufactured by this process, shown similar results in the past? What is the historical result distribution? Where does this OOS fall relative to prior experience?

*Review of raw materials and components:* Were the materials used in this batch from approved suppliers and lots? Were any incoming material results borderline?

*Review of process validation data:* Does the process validation data for this product establish that this process, under the conditions used, consistently produces product within specification? Does the OOS fall outside the validation design space?

*Additional testing, retesting and resampling:*

Retesting means taking additional test preparations from the original retained sample. It requires advance QA approval and a documented rationale. The number of retests and the criteria for using retest data must be predefined, not decided after seeing the results.

Resampling means taking a new sample from the original batch. It's only justified when Phase 1 or Phase 2 investigation identifies a specific reason to believe the original sample was not representative of the batch. Random resampling hoping to get different results is not acceptable.

FDA is explicit: "If a retest is performed, you need to include all test results, including the outlier, in the final statistical evaluation."

---

## Assignable Cause and Invalidation

An OOS result can be invalidated only when an assignable cause is identified with documented evidence. The cause must be a specific, identifiable error in the laboratory execution. Assignable causes include:

- Documented sample preparation error (wrong weight, wrong volume, wrong diluent confirmed by reviewing instrument raw data or preparation records)
- Equipment malfunction documented contemporaneously (instrument alarm, system suitability failure recorded in the sequence)
- Analyst error documented at the time (transcription error with original corrected in audit trail, calculation error caught and documented)
- Contamination of the standard solution (confirmed by analysis of the standard)

**What is not an assignable cause:**

- "The result doesn't fit our expectations"
- "The analyst is new" (without specific documented evidence of the specific error)
- "This instrument has given us problems before" (without specific evidence for this specific run)
- Statistical outlier designation based on the OOS result alone
- Retesting with passing results, without an identified cause for the original failure

When Phase 2 concludes without an assignable cause, the OOS is confirmed and the batch must be evaluated for rejection. The confirmed OOS is a quality failure attributable to the product, not the laboratory.

---

## Batch Disposition After OOS

The batch disposition decision is a QA decision. It depends on:

- Whether an assignable cause was found and whether invalidation is defensible
- Whether additional testing was performed and what it showed
- Whether the OOS reflects a single isolated test or a pattern
- The product type, route of administration, and associated patient risk

For confirmed OOS with no assignable cause, rejection is the correct outcome in most cases. There are circumstances where additional testing may be used to characterize the batch further, but the logic must be defensible: additional testing characterizes the batch, it doesn't erase the OOS.

A batch rejected for OOS must be properly segregated, labeled, and its disposition documented. The OOS result, the full investigation, and the rejection decision are part of the batch record.

---

## Reporting Requirements

**21 CFR 211.192** requires that each failure to meet specifications be investigated. The investigation must include the assignment of results to all lots of drug product manufactured in association with the failure.

For marketed products, if the investigation reveals the OOS was caused by a manufacturing failure that may have affected other batches, all potentially affected batches must be evaluated. This can trigger a market recall if product in distribution is affected.

For investigational products in clinical trials, OOS results affecting batches used in ongoing trials must be communicated to the sponsor's quality function and evaluated for impact on clinical study integrity.

---

## OOS vs. Out of Trend (OOT)

An OOS result is a hard specification failure: the result is outside the regulatory commitment. An OOT result is a result that, while within specification, is statistically unusual relative to historical results for that product and process. OOT limits are internal alert levels, not regulatory specifications.

OOT investigations are less regulated but equally important. A result that's technically passing but historically unusual may indicate a process drift that will become an OOS problem if not addressed. OOT trending systems catch these early. The investigation for an OOT is less formal than for an OOS, but it must still document what was found and what was done.

---

## What FDA Inspectors Examine

During an inspection, FDA investigators frequently request OOS investigation records. They're looking for:

**Timeliness.** The investigation should begin promptly after the OOS is observed. Days-long gaps between the analytical result and the start of the investigation are a finding.

**Phase 1 integrity.** Did Phase 1 actually investigate the laboratory execution, or did it conclude "no error found" with no documented evaluation? Investigators will review the Phase 1 checklist and look for documented evidence that each step was actually checked.

**No results-based invalidation.** Are there OOS results that were invalidated without documented, specific assignable causes? This is among the most serious findings in pharmaceutical inspections. It's the signature pattern of data manipulation.

**Retest protocols.** When retesting was used, was it pre-approved? Were all results (including the original OOS) included in the final data set?

**Batch disposition logic.** Does the batch disposition decision flow logically from the investigation findings? Or was a lot released despite a confirmed OOS?

**Review of all results.** A facility that retests until it gets passing results and then reports only the passing data has committed a significant data integrity violation. Inspectors look for complete sequence logs in the CDS, compare them to LIMS records, and identify any runs that are in the instrument but absent from the investigation.

---

## Common OOS Failures and How to Avoid Them

| Failure | What it looks like | Why it's a problem |
|---|---|---|
| Rushing Phase 1 | "No error found" with no documented evaluation | Invalidation decisions aren't defensible |
| Retest before Phase 1 is complete | Running additional samples while still "investigating" | Contaminates Phase 2 data and the investigation logic |
| Counting passing retests but ignoring the original OOS | Final conclusion based only on retests | Violates FDA OOS guidance explicitly |
| Root cause "human error" with no specifics | Investigation that names the analyst but not the specific error | Doesn't establish an assignable cause |
| Verbal investigation, paper documentation | Documenting an investigation that happened in someone's head | Creates a contemporaneity problem |
| No comparison to related batches | Evaluating in isolation | Misses the signal that the OOS reflects a broader issue |

The OOS investigation process is more rigorously documented than almost any other quality event in pharmaceutical manufacturing. That's because the integrity of the process directly determines whether safe products are released and unsafe ones are rejected. Getting it right is not optional.
