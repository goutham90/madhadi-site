---
title: "Certificate of Analysis and Certificate of Compliance: Reading, Issuing, and Verifying"
description: "How to read, issue, and verify a Certificate of Analysis and a Certificate of Compliance in a GMP environment, including spec linkage, transcription and data integrity risk, supplier reliance, and skip-lot testing."
pubDate: 2026-06-20
tags: ["quality-assurance", "certificate-of-analysis", "supplier-qualification", "data-integrity", "gmp", "incoming-inspection", "specifications"]
pillar: "quality-assurance"
tier: "Beginner"
---

The Certificate of Analysis (CoA) is the single document a QA professional handles more than any other. Every lot of raw material, excipient, primary packaging component, API, drug substance, and finished product carries one. It is the evidence that a specific quantity of material was tested against a specification and met it. Get CoA review right and you have a fast, defensible material release. Get it wrong and you have either a quality escape, where out-of-spec material reaches the floor, or a self-inflicted finding, where an inspector watches you accept a material whose certificate does not actually support release.

This article covers the CoA and its close relative, the Certificate of Compliance (CoC). It explains what each document is, the regulatory basis for requiring and reviewing them, what fields they must contain, how to read and verify one step by step, how to issue your own, how supplier reliance and reduced testing work, and the recurring mistakes that show up in audits and warning letters.

---

## What a Certificate of Analysis is and why it exists

A Certificate of Analysis is a document issued by the party that performed testing on a defined lot of material, listing each test performed, the method or reference used, the specification limit (acceptance criterion), and the actual result obtained, together with a conclusion that the lot conforms or does not conform.

The CoA exists because GMP runs on documented evidence, not assertions. You cannot release material on the basis that a supplier says it is good. You release it because tests with defined acceptance criteria were run and the recorded results meet those criteria.

### The regulatory basis

The core US requirements sit in 21 CFR Part 211 (Current Good Manufacturing Practice for Finished Pharmaceuticals):

> 21 CFR 211.84(a): "Each lot of components, drug product containers, and closures shall be withheld from use until the lot has been sampled, tested, or examined, as appropriate, and released for use by the quality control unit."

> 21 CFR 211.84(d)(2): a manufacturer may accept a supplier's report of analysis "in lieu of" its own testing for components, drug product containers, and closures, provided at least one specific identity test is conducted by the receiving site and the reliability of the supplier's analyses is established through appropriate validation of the supplier's test results at appropriate intervals.

So the regulation expressly permits CoA reliance, but with two non-negotiable conditions: you still run your own identity test on each lot, and you periodically verify that the supplier's CoA results are real by testing against them.

For active pharmaceutical ingredients, ICH Q7 (Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients, 2000) addresses the CoA directly in Section 11.4. It requires that authentic CoAs be issued for each batch of intermediate or API on request, that the CoA reflect actual results obtained, and that it reference the test methods used.

For finished product testing and release, 21 CFR 211.165 (testing and release for distribution) and 211.194 (laboratory records, which define what a complete analytical record looks like) govern the data behind the certificate. In the EU, EudraLex Volume 4 (the EU GMP Guide) Chapter 6 covers quality control and the data that must support release decisions.

ISO has a relevant general standard worth knowing by name: ISO/IEC 17025 (General requirements for the competence of testing and calibration laboratories, current edition 2017) governs how accredited laboratories report results, including content requirements for test reports. Contract labs that issue CoAs are often accredited to it.

### Certificate of Analysis versus Certificate of Compliance

These two documents are routinely confused, and the difference matters at release.

| | Certificate of Analysis (CoA) | Certificate of Compliance (CoC) |
|---|---|---|
| What it asserts | This lot was tested and here are the actual results against each spec | This lot complies with stated requirements/standards |
| Contains numeric results | Yes, result for every test | Often no, a conformance statement only |
| Basis for analytical release | Yes, you can review results against spec | No, you cannot see the data |
| Typical use | Raw materials, API, drug product, components requiring testing | Components released on attributes, e.g. statements that an item meets a compendial monograph, is animal-origin-free, is BSE/TSE compliant, meets a food-grade or USP/NF grade claim |

A CoC tells you the supplier believes the material conforms. A CoA shows you the numbers so you can make your own conformance call. A common error is treating a CoC as if it were a CoA and "releasing on the data" when there is no data on the page. If a specification requires a numeric result (assay, water content, particle count), a CoC alone does not support release of that attribute.

---

## What goes into a Certificate of Analysis

A complete CoA is identifiable by lot, traceable to a specification, and signed. The fields below are what a reviewer expects to find. Missing fields are not cosmetic; each one is a control.

| Field | Why it matters |
|---|---|
| Issuing party name and address | Establishes who is responsible and lets you confirm it is the qualified manufacturer, not an unqualified repackager |
| Material name and grade | Confirms you received what you ordered (e.g. "Sodium chloride, USP") |
| Manufacturer's item/part number and your material code | Links the certificate to your approved spec and item master |
| Lot/batch number | The single most important traceability field; must match the physical container labels |
| Manufacture date and retest/expiry date | Drives material expiry and retest scheduling |
| Quantity/batch size | Confirms the certificate covers the lot you received |
| Specification reference and version | Ties each test to an acceptance criterion and a controlled spec |
| Each test name | What was measured |
| Method reference for each test | The validated/compendial method used (e.g. USP <921> for water, USP <191> for identification of a specific ion) |
| Acceptance criterion (limit) for each test | The spec the result is judged against |
| Actual result for each test | The numeric or descriptive outcome |
| Units | Avoids the classic %w/w versus mg/g confusion |
| Pass/fail or conform/non-conform conclusion | The supplier's overall call |
| Date of analysis or release | Confirms testing was done on this lot, not copied forward |
| Authorized signature/approval and title | Establishes that a responsible person released the certificate |

For compendial materials, the method column should reference the actual chapter, for example USP general chapters such as <191> (identification tests, general), <197> (spectroscopic identification), <281> (residue on ignition), <731> (loss on drying), <921> (water determination, Karl Fischer), and the relevant monograph. The presence of correct compendial references is one of the fastest signals that a CoA is genuine and the testing was real.

---

## How to read and verify a CoA, step by step

This is the daily QA task. Do it in a fixed order so nothing is skipped. The goal is a yes/no release decision with a documented basis.

### Step 1: Identify and match the lot

Compare the lot number, material name, and grade on the CoA against the physical labels on the received containers and against the purchase order and packing slip. They must all agree. A CoA that does not match the container in front of you is the most common single defect. If the lot on the certificate is not the lot in the warehouse, stop; you have either a wrong certificate or a mislabeled material, both of which are quarantine events.

### Step 2: Confirm the issuer is a qualified source

The CoA must come from an approved supplier or manufacturer on your Approved Supplier List. Watch for the case where the CoA is issued by the manufacturer but the material was supplied through a distributor. The supply chain must be qualified end to end. A distributor's own CoC stapled to a manufacturer's CoA does not make an unqualified manufacturer acceptable. See [supplier-vendor-qualification](/articles/supplier-vendor-qualification).

### Step 3: Pull the controlled specification and compare it to the CoA spec reference

Open your internal, approved specification for this material at its current version. The CoA must test against acceptance criteria that meet or exceed your spec. Two failure modes here:

- The CoA lists fewer tests than your spec requires. The missing tests are gaps; the material is not fully certified.
- The CoA limits are wider than your spec. The supplier passed its own looser limit but your tighter limit might be failed by the same numeric result.

You judge the result against YOUR specification, not the supplier's. This is the step most often shortcut, and it is exactly where escapes happen.

### Step 4: Walk every test row, result against limit

For each test, confirm the result satisfies your acceptance criterion. Check units. Check direction (a "not more than" limit versus a "not less than" limit). For ranges, confirm the result falls inside. For descriptive tests (appearance, identification), confirm the recorded outcome matches ("conforms", "passes", "white crystalline powder").

Worked example. Suppose your spec for a purified excipient reads:

| Test | Method | Your acceptance criterion |
|---|---|---|
| Identification | IR per USP <197> | Conforms to reference |
| Assay | Titration | 98.0 - 102.0 % |
| Loss on drying | USP <731> | NMT 0.5 % |
| Residue on ignition | USP <281> | NMT 0.1 % |
| Heavy metals | ICP per USP <232>/<233> | NMT 10 ppm |
| Microbial limits (TAMC) | USP <61> | NMT 1000 CFU/g |

And the supplier CoA reports:

| Test | Result on CoA | Your call |
|---|---|---|
| Identification | Conforms | Pass |
| Assay | 99.4 % | Pass (within 98.0-102.0) |
| Loss on drying | 0.7 % | FAIL against your NMT 0.5 %, even though it may pass a looser supplier limit |
| Residue on ignition | 0.05 % | Pass |
| Heavy metals | 4 ppm | Pass |
| Microbial limits (TAMC) | < 10 CFU/g | Pass |

The loss-on-drying result is the teaching point. The supplier's certificate may declare the lot "conforms" because the supplier's own internal limit is NMT 1.0 %. Against your tighter NMT 0.5 %, the same 0.7 % result is a failure. If you release on the supplier's "conforms" stamp instead of comparing to your own spec, you have just accepted out-of-specification material. Reject the lot or open a [deviation-management](/articles/deviation-management) record and escalate, do not silently accept.

### Step 5: Run required incoming testing

Even under full CoA reliance, 21 CFR 211.84(d)(2) requires at least one identity test per lot performed by you. Confirm that identity test was executed, sampled per a [sampling plan](/articles/conducting-a-supplier-audit) appropriate to the lot, and that the in-house result matches the CoA identity claim. For materials not under reduced testing, run the full incoming test panel and judge those results the same way.

### Step 6: Check dates and lifecycle attributes

Confirm the date of analysis is consistent with the manufacture date (testing should follow manufacture, not predate it). Assign material expiry/retest from the manufacture or retest date on the CoA. A CoA whose analysis date is years old, or which lacks a retest date for a material that needs one, is a flag.

### Step 7: Record the disposition with traceable evidence

Document the review: certificate reviewed, spec version compared against, identity test result, and the release/reject decision with date and signature (electronic or wet). The CoA, your incoming test data, and the disposition record together form the release package and must be retrievable on inspection. See [batch-disposition-decisions](/articles/batch-disposition-decisions).

### Acceptance criteria for a correctly reviewed CoA

You have done the review correctly when all of the following are true:

- Lot, material, and grade match the physical material and the order.
- The issuer is a qualified source on the approved list.
- Every test in your current spec is present on the CoA with a method reference.
- Every result meets YOUR acceptance criterion, with units and direction verified.
- Your own identity test was performed and matches.
- Dates are consistent and expiry/retest is assigned.
- The disposition decision is recorded, signed, and dated, with the CoA retained.

---

## How to issue a Certificate of Analysis

If your site tests and ships material (API, drug substance, finished product, or as a contract lab), you issue CoAs. The certificate is a controlled GMP document and the data behind it must be complete and traceable.

### Step by step

1. Complete all testing per validated or compendial methods, with full laboratory records meeting 21 CFR 211.194 (raw data, calculations, instrument printouts, analyst identity, review).
2. Verify each result against the approved specification. Any out-of-specification result must go through an [oos-investigation-process](/articles/oos-investigation-process) and be resolved before a conforming CoA can issue. You never issue a "conforms" CoA over an unresolved OOS.
3. Transcribe or, far better, electronically transfer results from the source data (LIMS, chromatography data system) onto the certificate. Manual transcription is a known data integrity risk; minimize it.
4. Populate every required field (see the contents table above), including method references and the spec version.
5. Reconcile the CoA against the source records: every reported value must be traceable to a specific analytical record and must match it exactly.
6. Independent QA review and approval. A second qualified person checks the CoA against the underlying data before release. This four-eyes step is the control that catches transcription errors and selective reporting.
7. Issue the signed CoA tied to the released lot, and retain it for the required record retention period.

### What "good" looks like for an issued CoA

Every value on the certificate ties to a controlled analytical record with no unexplained difference. The spec version on the CoA is the one in force at the time of test. Methods cited are the validated or compendial methods actually used. The certificate was approved by someone independent of the analyst who generated the data. There are no rounded, "tidied", or back-calculated numbers that do not appear in the raw data.

### Roles and responsibilities

| Role | Responsibility |
|---|---|
| Analyst / QC | Performs testing, records complete raw data, calculates results |
| QC reviewer | Verifies calculations, integrations, and method compliance against laboratory records |
| QA | Reviews the CoA against source data, confirms spec linkage, approves and releases the certificate |
| Quality control unit (release authority) | Makes the final lot disposition; in the EU this culminates in QP certification, see [qualified-person-batch-release-annex-16](/articles/qualified-person-batch-release-annex-16) |
| Supplier quality / procurement | Maintains the approved supplier relationship and CoA template agreement for incoming materials |
| SME / method owner | Owns the analytical method and its validation status |

---

## Specification linkage: the heart of CoA control

A CoA is only as good as the specification it points to. The certificate without a controlled spec behind it is just numbers on a page.

Specification linkage means three things must agree: the test methods, the acceptance criteria, and the version of the specification used. For incoming materials, your internal material spec is the master. The supplier CoA is checked against it. When you change a spec (tighten a limit, add a test for a new impurity such as one driven by [nitrosamines-impurities-q3-m7](/articles/nitrosamines-impurities-q3-m7)), the change must flow to incoming inspection through [change-control-validated-systems](/articles/change-control-validated-systems), and the supplier must be informed if their CoA needs to cover the new attribute.

A frequent finding pattern: a site tightens an internal limit but never updates the incoming CoA review checklist, so QA keeps comparing supplier results to the old, looser limit. The spec changed; the practice did not. Build the spec version into the review record so this mismatch is visible.

For compendial materials, your spec should reference the monograph and the relevant general chapters, and you must verify the supplier is testing to the current compendial edition. See [compendial-method-verification](/articles/compendial-method-verification) and [stability-programs-ich](/articles/stability-programs-ich) for how shelf-life claims tie back to specification testing.

---

## Transcription and data integrity risks on CoAs

The CoA sits at a dangerous seam: data is moved from analytical instruments and notebooks onto a summary document. Every move is a chance for error or, in the worst cases, manipulation.

### The risks

- Transcription error. A number is mistyped from the chromatography data system onto the certificate. The CoA says 99.4 % but the raw data shows 94.9 %. If 94.9 % fails spec, you released failing material on a typo.
- Selective reporting. A passing replicate is reported and a failing one omitted. The CoA looks clean; the data set does not.
- Result not traceable to source. The CoA shows a value that cannot be found in any raw record, or that differs from the record with no documented reason.
- Copied-forward certificates. A certificate from a prior lot is reused with the lot number changed, so the results never reflect the lot actually shipped. ICH Q7 11.4 explicitly requires the CoA to reflect actual results obtained on that batch.
- Rounding and "tidying". Values massaged toward the center of the range to look better. The reported number must follow the documented rounding convention applied to the real result, nothing more.

### How CoA data integrity is judged

Apply ALCOA+ to every value on the certificate: Attributable, Legible, Contemporaneous, Original, Accurate, plus Complete, Consistent, Enduring, Available. A reported result must be attributable to the analyst and instrument that produced it, contemporaneously recorded, and accurate to the original data. See [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and [data-integrity-foundations](/articles/data-integrity-foundations).

The strongest control is to remove human transcription. Generate the CoA directly from the LIMS or have the chromatography data system feed results electronically, with the audit trail preserved. Where the CoA is built from a [chromatography-data-system-integrity](/articles/chromatography-data-system-integrity) source, the reviewer should be able to trace any value back to a specific injection, integration, and audit-trailed record. For electronic certificates, the system falls under [21-cfr-part-11-eu-annex-11](/articles/21-cfr-part-11-eu-annex-11) controls.

### Verifying a supplier CoA for integrity, not just for pass/fail

When you periodically test against a supplier's CoA (the 211.84(d)(2) validation), you are not only confirming the material; you are confirming the supplier's certificates can be trusted. If your in-house result diverges materially from the CoA value for the same lot, that is a supplier data integrity signal, not a one-off. Escalate to supplier quality, widen testing, and consider an audit. A pattern of CoA values that are suspiciously consistent lot to lot, or always land mid-range, is a classic tell that the numbers may not be real.

---

## Supplier CoA reliance and reduced testing

Testing every attribute of every incoming lot in-house is slow and expensive. GMP allows you to lean on supplier CoAs, but only after you have earned the right through qualification.

### The conditions for reliance

Under 21 CFR 211.84(d)(2), to accept a supplier's report of analysis in lieu of full testing for components, containers, and closures you must:

1. Establish the reliability of the supplier's analyses through appropriate validation at appropriate intervals. In practice you test a defined number of lots fully in-house and confirm your results agree with the supplier's CoAs.
2. Still conduct at least one specific identity test on every lot you receive, regardless of how qualified the supplier is. The identity test never goes away.

This reliance is built on top of supplier qualification: an approved supplier, a quality agreement defining CoA content and notification of changes, and an audit history. See [supplier-vendor-qualification](/articles/supplier-vendor-qualification), [conducting-a-supplier-audit](/articles/conducting-a-supplier-audit), and [cdmo-oversight-quality-agreements](/articles/cdmo-oversight-quality-agreements).

### Skip-lot and reduced testing

Once reliance is established, you can move to a reduced or skip-lot testing regime: instead of full testing on every lot, you fully test on a defined frequency (for example 1 in N lots, or periodically) while relying on the CoA plus identity for the lots in between.

How to design it:

- Define the rule explicitly in a procedure: what triggers reduced testing, the skip frequency, and what verification testing continues on skipped lots (identity always continues).
- Base the frequency on risk: material criticality, supplier history, and stability of past results. A high-risk API ingredient earns a tighter regime than a low-risk processing aid. See [quality-risk-management](/articles/quality-risk-management) and [data-criticality-and-data-risk](/articles/data-criticality-and-data-risk).
- Define exit conditions. Any OOS result, any CoA discrepancy, any supplier change, or any audit finding pulls the material back to full testing until confidence is re-established.
- Periodically reconfirm. Reduced testing is not permanent; re-validate the supplier's CoA reliability at defined intervals.

Worked example of a skip-lot rule:

> Material X (low-risk excipient, supplier with 24 months of agreement and zero OOS): full incoming test panel on every 5th lot; identity (IR per USP <197>) plus CoA review on all intervening lots. Any OOS, CoA discrepancy, or supplier-notified change reverts the material to full testing on the next 3 consecutive lots before reduced testing may resume. Reliability re-verified annually.

### Acceptance criteria for a reliance program

A defensible reliance/skip-lot program has: documented supplier qualification, an active quality agreement, recorded validation that in-house results agreed with supplier CoAs over the qualifying lots, identity testing on every lot, a written skip rule with risk basis and exit conditions, and periodic re-verification. If any of these is missing, an inspector will read the reduced testing as untethered.

---

## Common mistakes and inspection-finding patterns

These are the recurring issues, the kind that surface in 483 observations and warning letters around component testing, supplier reliance, and laboratory records.

- Releasing against the supplier's spec instead of your own. The CoA says "conforms" to the supplier's looser limit; the result fails your tighter limit; the material is accepted anyway.
- No in-house identity test. Relying fully on the supplier CoA without performing the per-lot identity test required by 211.84(d)(2). This is a direct regulatory violation, not a judgment call.
- Reliance without established reliability. Accepting supplier CoAs in lieu of testing with no documented validation that the supplier's results are trustworthy.
- Lot mismatch. CoA lot number does not match the container; or one CoA used to release multiple lots; or a CoA copied forward from a previous lot.
- Missing tests. CoA covers fewer attributes than the current spec, and the gap is not noticed because the reviewer only checks that present rows pass.
- Spec version drift. Internal limit was tightened; incoming review still compares to the old limit.
- Unqualified supply chain. CoA from a qualified manufacturer but material routed through an unqualified distributor or repackager.
- CoC treated as CoA. A conformance statement with no numeric data used to release an attribute that requires a numeric result.
- Transcription and traceability failures. CoA values that do not match, or cannot be traced to, the underlying laboratory data; values reported with no raw record; selective reporting of passing results.
- OOS overwritten. A CoA issued as "conforms" while an out-of-specification result on that lot was never investigated or was invalidated without justification.
- No documented review. Material released with the CoA on file but no record of who reviewed it against spec, when, or on what basis.

---

## Interview-ready questions and strong answers

These come up for QA, QC, supplier quality, and incoming inspection roles, and inspectors ask the regulatory ones on the floor.

**What is the difference between a Certificate of Analysis and a Certificate of Compliance?**
A CoA lists actual test results against acceptance criteria for a specific lot, so you can make your own conformance call. A CoC is a conformance statement, usually without numeric results. You can release an analytical attribute on a CoA; you cannot release a numeric attribute on a CoC alone because there is no data to judge.

**Can you release incoming material purely on the supplier's CoA?**
Not entirely. 21 CFR 211.84(d)(2) lets you accept the supplier's report of analysis in lieu of your own testing only if you have established the reliability of the supplier's analyses through validation at appropriate intervals, AND you still perform at least one specific identity test on every lot yourself. The identity test is mandatory regardless of how trusted the supplier is.

**A supplier CoA says the lot conforms, but the assay result is 97.5 % and your spec is 98.0 to 102.0 %. What do you do?**
Reject or quarantine. I judge results against my own approved specification, not the supplier's. The supplier may have a looser internal limit, so "conforms" on their certificate does not mean it meets my spec. I would quarantine the lot, open a deviation, and notify supplier quality, because either the material is genuinely out of my spec or there is a spec-alignment problem with the supplier to resolve.

**How do you ensure data integrity of a CoA you issue?**
Generate it directly from the source system where possible to eliminate transcription, reconcile every reported value back to a specific analytical record, apply ALCOA+, route any OOS through investigation before issuing a conforming certificate, and require independent QA review of the CoA against the raw data before release.

**What is skip-lot testing and when is it justified?**
A reduced testing regime where I fully test on a defined frequency rather than every lot, relying on the supplier CoA plus per-lot identity in between. It is justified only after supplier qualification and documented validation of CoA reliability, is risk-based on material criticality and supplier history, has defined exit conditions (any OOS or discrepancy reverts to full testing), and is periodically re-verified.

**Which regulation governs supplier CoA reliance in the US, and what does ICH Q7 say about CoAs?**
21 CFR 211.84(d)(2) governs reliance for components, containers, and closures. ICH Q7 Section 11.4 requires authentic CoAs for each batch of intermediate or API, that the CoA reflect the actual results obtained, and that it reference the methods used.

**What fields must a CoA contain?**
At minimum: issuer, material name and grade, lot number, manufacture and retest/expiry dates, spec reference and version, and for every test the method, the acceptance criterion, the result with units, an overall conform/non-conform conclusion, the date of analysis, and an authorized signature.

---

## Practical tips

- Always compare to your own current spec, with the version recorded in the review. Print the spec next to the CoA so the comparison is visible.
- Check units and limit direction on every row. Most "passing" results that should have failed were a units mismatch or a not-more-than read as not-less-than.
- Treat any unexplained difference between your in-house result and the CoA value as a supplier signal, not noise.
- Keep an incoming-inspection checklist that forces lot match, issuer check, spec-version capture, test-completeness check, identity test, and disposition. Checklists prevent the silent-skip failure mode.
- Eliminate manual transcription on CoAs you issue. Electronic generation from LIMS or the CDS is the strongest data integrity control you can apply.
- Re-verify reduced testing on schedule. Skip-lot programs decay quietly if no one re-validates the supplier's CoA reliability.
- Never issue or accept a "conforms" certificate over an unresolved OOS.

### Related reading

- [supplier-vendor-qualification](/articles/supplier-vendor-qualification)
- [conducting-a-supplier-audit](/articles/conducting-a-supplier-audit)
- [oos-investigation-process](/articles/oos-investigation-process)
- [batch-disposition-decisions](/articles/batch-disposition-decisions)
- [compendial-method-verification](/articles/compendial-method-verification)
- [data-integrity-foundations](/articles/data-integrity-foundations)
- [ALCOA+ in detail](/articles/alcoa-plus-deep-dive)
- [good-documentation-practices](/articles/good-documentation-practices)
- [deviation-management](/articles/deviation-management)
- [qualified-person-batch-release-annex-16](/articles/qualified-person-batch-release-annex-16)
