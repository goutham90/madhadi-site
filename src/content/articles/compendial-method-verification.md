---
title: "Compendial Method Verification: USP <1226> and When Validation Is Not Required"
description: "How to verify a pharmacopeial method under your own conditions, and the practical difference between verification, validation, and transfer. Covers USP <1226>, what goes in a verification protocol, acceptance criteria, and the inspection findings that trip labs up."
pubDate: 2026-06-20
tags: ["analytical-methods", "usp", "method-verification", "qc-lab", "compendial", "method-validation", "data-integrity"]
pillar: "equipment-qualification"
tier: "Intermediate"
---

A new analyst tells you the assay you run for a finished product comes straight out of the USP monograph, so it does not need validation. That is correct, but it is only half of the answer. A compendial method is presumed valid because the pharmacopeia already validated it. What the pharmacopeia did not do is run it on your instrument, with your analyst, against your specific drug substance and its specific impurity and excipient matrix. Closing that gap is verification, and skipping it is one of the more common quiet gaps an inspector finds when they pull your QC method files.

This article covers what verification is, the chapter that governs it (USP General Chapter <1226>, Verification of Compendial Procedures), how it differs from full validation and from method transfer, exactly what goes into a verification study and protocol, the acceptance criteria you defend, a worked example, who owns each piece, and the mistakes that show up in 483 observations and warning letters. By the end you should be able to design a verification, defend the decision not to validate, and answer the questions an inspector or hiring manager will ask.

---

## The core distinction: validation vs verification vs transfer

These three words get used loosely, and using the wrong one in a protocol title is a finding waiting to happen. Get the definitions straight first.

**Validation** is the full demonstration that an analytical procedure is suitable for its intended purpose. You generate primary data for every characteristic that applies to the procedure type: accuracy, precision (repeatability and intermediate precision), specificity, detection limit, quantitation limit, linearity, range, and you assess robustness. This is what you do for a method you developed in-house, or any non-compendial method. The reference is ICH Q2(R2), Validation of Analytical Procedures (2023), which replaced the older Q2(R1)/Q2A/Q2B set. See [method-validation-essentials](/articles/method-validation-essentials) and [ich-q14-q2r2-analytical-lifecycle](/articles/ich-q14-q2r2-analytical-lifecycle).

**Verification** applies only to a compendial (pharmacopeial) procedure. You are not re-proving the whole method. You are confirming that the published procedure works under the actual conditions of use in your laboratory, with your samples. The pharmacopeia already established the procedure is valid in principle. USP General Chapter <1226> is the governing chapter. The verification scope is risk-based and deliberately narrower than validation.

**Transfer** moves an already-validated or already-verified method from one qualified laboratory (the sending unit) to another (the receiving unit). Both labs run a designed comparison, usually a co-validation or a comparative testing study, against pre-agreed acceptance criteria. The governing chapter is USP General Chapter <1224>, Transfer of Analytical Procedures, supported by ICH Q14, Analytical Procedure Development (2023). See [analytical-method-transfer](/articles/analytical-method-transfer).

Here is the decision in one table.

| Situation | What you do | Governing chapter / guidance |
|---|---|---|
| In-house developed method, or any non-compendial method, first use | Full validation | ICH Q2(R2); USP <1225> |
| Method published in USP/NF or another official compendium, first use in your lab | Verification | USP <1226> |
| Validated/verified method moving between two labs (sites, CMO, contract lab) | Transfer | USP <1224>; ICH Q14 |
| Compendial method you change beyond the allowed adjustments | Treat the change as a new method, validate the changed portion | ICH Q2(R2); USP <621> system suitability for chromatographic adjustments |

The single most useful sentence to memorize: **you verify a compendial method, you validate a non-compendial method, and you transfer either one between labs.**

The decision is quick once you ask the questions in order: is the method published in an official compendium, did you keep it inside the allowed adjustments, and is it moving between labs.

<div class="flow">
  <div class="flow-step">Method to set up</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">From an official compendium? No &rarr; validate (ICH Q2(R2))</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Yes, changed beyond &lt;621&gt; limits? &rarr; validate the change</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Moving between two labs? &rarr; transfer (&lt;1224&gt;)</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Otherwise, first use here &rarr; verify (&lt;1226&gt;)</div>
</div>

---

## What USP <1226> actually says

USP General Chapter <1226> is short and is a general information chapter, meaning it carries the chapter number above <1000> and is guidance rather than a mandatory requirement on its own. It becomes effectively required because compendial compliance, and the GMP expectation that you demonstrate methods are suitable for use, point straight at it. In the US the legal hook is 21 CFR 211.194(a)(2), which requires that test methods used be verified under actual conditions of use, and 21 CFR 211.165(e), which requires that the accuracy, sensitivity, specificity, and reproducibility of test methods be established and documented. Those two CFR citations are what an FDA investigator will lean on, with <1226> describing how to satisfy them for a compendial method.

The chapter makes a few points that matter in practice:

- Verification is **not a re-validation**. You do not have to repeat every validation characteristic. You select the characteristics that are at risk given your specific sample and conditions.
- The extent of verification is **risk-based**. The riskier and more complex the matrix and the procedure, the more characteristics you test. A simple, well-behaved test on a clean matrix may need very little; a trace impurity method on a complex biologic matrix needs more.
- Verification must be done **before first use** of the compendial procedure for release or stability testing of an article.
- If verification **fails**, that is a signal the procedure may not be suitable for your particular article under your conditions. You investigate, and you may need to revalidate the procedure (or the failing portion of it) for that article, or develop an alternative. A failed verification is not a license to quietly tweak the published method.
- The chapter explicitly notes that verification requirements depend on the type of procedure, the published level of validation in the compendium, the complexity of the article, and the experience of the laboratory.

<1226> works alongside <1225> (Validation of Compendial Procedures) and <1224> (Transfer). Think of them as a family: <1225> validate, <1226> verify, <1224> transfer.

> USP added <1220> (Analytical Procedure Life Cycle) as the lifecycle-framing chapter, and <1226> remains the verification chapter alongside <1225> (validation) and <1224> (transfer). USP continues to revise this family to track ICH Q2(R2) and Q14, including a proposed revision of <1225> circulated in Pharmacopeial Forum. When you cite any of them in a protocol, cite the specific USP-NF edition and supplement you are operating under, confirm whether a proposed revision in Pharmacopeial Forum has become official, and do not cite a year as if the chapter were static. The lifecycle view in <1220> reframes verification as one stage of ongoing performance monitoring rather than a one-time event, which is worth reflecting in how you trigger re-verification (see the conditions-changed cases below).

---

## When verification is required, and when it is genuinely not

Verification is required when you take a procedure directly from an official compendium (USP-NF, Ph. Eur., JP, or another recognized pharmacopeia) and intend to use it for GMP release, stability, or other decision-making testing of your product. The classic cases:

- A finished-product assay or impurities method taken from the USP drug product monograph.
- A drug substance identity, assay, or related-substances method from the USP/NF monograph.
- A compendial general-chapter test applied to your specific article, where the matrix could interfere (for example a quantitative method on a complex formulation).

Verification is **not required** in these situations, and being able to articulate why is interview gold:

1. **Certain general chapter tests are exempt or need only minimal verification by their nature.** USP <1226> states that verification is not required for basic compendial test procedures such as loss on drying, residue on ignition, various wet chemistry tests, and simple instrumental determinations, unless there is an indication the article's matrix could affect the result. The logic: these procedures are not article-specific and the matrix risk is low. Document the rationale; do not just assume.
2. **Sterility (USP <71>) and bacterial endotoxins (USP <85>) are handled by their own chapters, not by <1226>.** These compendial microbiological tests have built-in suitability requirements: the method suitability test (bacteriostasis/fungistasis for sterility) and the inhibition/enhancement test for endotoxins. You perform those suitability studies, which is the microbiological equivalent of verification, rather than a <1226> verification. See [sterility-testing-usp-71](/articles/sterility-testing-usp-71) and [bioburden-and-endotoxin-testing](/articles/bioburden-and-endotoxin-testing).
3. **A method you developed yourself, even if it tests the same attribute a USP method tests, is not compendial.** It needs full validation, not verification. You only verify the actual published procedure.
4. **A method you have modified beyond the allowable adjustments** is no longer the compendial procedure. You validate the change.

That last point is where most teams get into trouble, so it gets its own section.

---

## The allowable-adjustments boundary

Chromatographers love to nudge a compendial HPLC method to make it run better. The rule is that the pharmacopeia allows certain adjustments to chromatographic conditions without revalidation, provided system suitability still passes. In USP, the allowed adjustments are listed in General Chapter <621>, Chromatography. The European Pharmacopoeia has an equivalent set of permitted adjustments in its general chapter on chromatographic separation techniques (Ph. Eur. 2.2.46).

Adjustments that are generally permitted within stated limits (verify against the current <621> text for the exact percentages, because USP has revised these limits over time):

- Mobile phase composition for isocratic methods, within a defined relative limit on the minor component.
- Buffer concentration and pH, within stated absolute limits.
- Column length, internal diameter, and particle size, within ratios that keep the column plate count comparable.
- Flow rate, within a defined relative range when the column dimensions change.
- Injection volume and column temperature, within limits, provided detection and precision are not compromised.

If you stay inside those limits and system suitability passes, you are still running the compendial method. You do not revalidate, though good practice is to document that the adjustment is within <621> and that system suitability was met.

If you go outside those limits, change the detection mode, change the column chemistry (for example C18 to phenyl), or change the fundamental separation principle, you have created a new method. Now you validate the affected characteristics under ICH Q2(R2). Calling that a "verification" in your protocol title is a misrepresentation an inspector can cite.

System suitability itself is part of the compendial procedure, not optional. The monograph or the general chapter defines the system suitability criteria (resolution, tailing, plate count, repeatability of replicate injections). Meeting them on the day of test is how you demonstrate, run by run, that the system is performing as the verified method requires. See [chromatography-data-system-integrity](/articles/chromatography-data-system-integrity) for how SST results and the surrounding data are protected.

---

## What goes in a verification: characteristics to consider

You do not test every ICH Q2 characteristic. You select based on the procedure category and the risk that your specific conditions differ from those the pharmacopeia assumed. Use the procedure type as your starting frame, the same four categories ICH Q2 and USP <1225> use:

- **Identification** tests.
- **Quantitative assay** of the active or major component.
- **Quantitative test for impurities** (limit or quantitation).
- **Limit test for impurities** (pass/fail at a threshold).

Map characteristics to the procedure type, then pare down for verification.

| Characteristic | Identification | Assay | Impurities (quant) | Impurities (limit) | Typical verification focus |
|---|---|---|---|---|---|
| Specificity / selectivity | Yes | Yes | Yes | Yes | Almost always verified, because your matrix is the variable |
| Accuracy (recovery) | No | Yes | Yes | No | Verify when matrix interference is plausible |
| Precision: repeatability | No | Yes | Yes | No | Commonly verified |
| Precision: intermediate | No | Yes | Yes | No | Verify when more than one analyst/day/instrument will run it |
| Detection limit | No | No | Sometimes | Yes | Verify for low-level impurity work |
| Quantitation limit | No | No | Yes | No | Verify for low-level impurity work |
| Linearity | No | Yes | Yes | No | Often a reduced check or covered by SST |
| Range | No | Yes | Yes | No | Confirm method covers your spec range |

The two characteristics that nearly always carry the verification, because they are the ones most sensitive to your particular article, are **specificity** (does anything in your matrix coelute or interfere with the analyte) and **accuracy/recovery** (can you recover the analyte cleanly from your formulation). For a low-level impurity or residual solvent method, add **detection and quantitation limit** confirmation, because the published LOQ was established on the pharmacopeia's sample, not yours.

The risk argument you write into the protocol should explicitly say which characteristics you are testing and why the others are not at risk. That rationale is the heart of a <1226> study. "We tested specificity and accuracy because our formulation contains novel excipients not present in the monograph's typical matrix; linearity and range were not re-established because the published procedure's working range fully brackets our specification and the detector response is well characterized" is the kind of sentence that makes a verification defensible.

---

## How to run a verification, step by step

This is the sequence I follow, and the sequence a reviewer expects to see reflected in the documents.

**1. Confirm the method is genuinely compendial and current.** Pull the monograph or general chapter from the current official compendium. Confirm the version, the effective date, and that no pending revision (a USP Pharmacopeial Forum proposal or an in-process revision) affects it. Record the exact compendial reference and edition in the protocol.

**2. Define intended use and scope.** State the article, the attribute tested, the specification limits the result feeds, the instruments and column lot to be used, and the analysts. Verification is condition-specific, so the conditions belong in the document.

**3. Perform a risk assessment.** Compare your conditions to the conditions the compendial method assumes. Where could yours differ: matrix complexity, excipients, novel impurities, instrument platform, detector, sample preparation? The output is the list of characteristics to verify and a documented rationale for those you exclude. Tie this to your quality risk management framework, see [quality-risk-management](/articles/quality-risk-management).

**4. Write the verification protocol** (contents in the next section), get it reviewed and approved before execution. Pre-approval is non-negotiable. Generating data first and writing the protocol to fit is testing into compliance, and it is a data integrity finding.

**5. Execute against the protocol.** Run the system suitability defined by the method. Generate the verification data for each selected characteristic. Capture everything contemporaneously with full audit trail. See [good-documentation-practices](/articles/good-documentation-practices) and [ALCOA+ in detail](/articles/alcoa-plus-deep-dive).

**6. Evaluate against pre-defined acceptance criteria.** Do not move the criteria after seeing the data. If something fails, raise a deviation, do not silently rerun.

**7. Investigate any failure.** A failed verification means either an assignable execution error (then justify, correct, and repeat) or a genuine signal that the compendial method is not suitable for your article under your conditions. The second case may force partial revalidation or an alternative procedure, and you document that conclusion.

**8. Write the verification report,** approve it, and only then release the method for GMP use. The report states the conclusion that the procedure is verified as suitable for use with the named article under the stated conditions.

---

## The verification protocol: contents

A verification protocol is leaner than a validation protocol but has the same backbone. Include:

- **Title and unique document ID**, clearly saying "Verification of Compendial Procedure," not "validation."
- **Purpose and scope:** the article, the attribute, the compendial reference (monograph number and current edition, or general chapter number), the specification the result supports.
- **Reference to USP <1226>** (or the equivalent rationale chapter) and the applicable CFR citations.
- **Description of the compendial procedure** as published, including the verbatim system suitability requirements.
- **Risk assessment summary** and the resulting list of characteristics to verify, with the rationale for exclusions.
- **Materials, reference standards, instruments, columns, software/CDS** to be used, with traceability (reference standard lot, instrument qualification status, see [analytical-instrument-qualification](/articles/analytical-instrument-qualification)).
- **Test design for each characteristic:** number of preparations, levels, replicates, who and how many analysts, how many days/instruments for intermediate precision.
- **Acceptance criteria** for each characteristic, defined and justified before execution.
- **Deviation and OOS handling** reference, see [oos-investigation-process](/articles/oos-investigation-process) and [deviation-management](/articles/deviation-management).
- **Roles and approvals,** with signature lines.

Keep the executed protocol, raw data, and report linked and retrievable. Reviewers and inspectors will trace the chain from the conclusion back to the raw chromatograms.

---

## Acceptance criteria: what good looks like

Acceptance criteria for verification are usually anchored to the validation criteria the procedure category would normally use, scaled to the risk. There is no single regulatory table of numbers; you justify them. These are common, defensible starting points, but the figures must fit your method, your spec, and your matrix, not be copied blindly.

| Characteristic | Common acceptance criterion (justify per method) |
|---|---|
| Specificity | No interference at the analyte retention time from blank, placebo, known impurities, and degradants; peak purity passes if a PDA is used |
| Accuracy (recovery) | Mean recovery within a stated band around 100% (assay methods often 98.0-102.0%; impurity methods wider, e.g. 80-120% at low levels), at the levels tested |
| Repeatability (precision) | %RSD of replicate determinations at or below a method-appropriate limit (assays often <= 2.0%; impurities allow higher) |
| Intermediate precision | %RSD across analysts/days/instruments within a stated limit; or an F-test / acceptance band showing no significant difference |
| LOQ / LOD (when tested) | Confirm the published LOQ is achievable for your matrix; signal-to-noise typically >= 10 for LOQ and >= 3 for LOD, or the method's stated approach |
| Linearity / range (when tested) | Correlation coefficient and residual pattern acceptable across the spec-bracketing range |
| System suitability | Meets the compendial SST exactly as written (resolution, tailing, plate count, replicate %RSD) |

Two points that separate a strong submission from a weak one. First, **system suitability passing is necessary but not sufficient.** SST tells you the system is fit on the day; verification tells you the method is fit for your article. People conflate them, then claim "SST passed, so the method is verified," which is wrong. Second, tie the precision criterion to the specification width. A %RSD of 2.0% means little if your spec is 95.0-105.0% and you are running a release assay near the edge; the measurement uncertainty has to be small relative to the window the decision sits in. See [statistics-in-quality-cpk-control-charts](/articles/statistics-in-quality-cpk-control-charts) for the measurement-vs-spec logic.

---

## Worked example: verifying a compendial assay by HPLC

A drug product assay method comes from the USP monograph. The formulation includes two excipients that are not in the monograph's typical examples. The lab will run the method on a different CDS and column lot than the monograph anticipated, and two analysts will run it routinely.

**Risk assessment outcome.** Specificity is at risk because of the novel excipients (possible coelution). Accuracy is at risk for the same reason (possible incomplete recovery or matrix bias). Intermediate precision matters because two analysts run it. Linearity and range are not re-established because the published working range brackets the 90.0-110.0% specification and detector linearity is well documented. LOQ is not relevant for a major-component assay.

**Test design.**

- Specificity: inject diluent blank, placebo (all excipients, no API), placebo spiked with API at nominal, and a forced-degradation sample. Confirm no interference at the API retention time and acceptable peak purity.
- Accuracy: prepare spiked placebo at 80%, 100%, 120% of nominal, triplicate at each level, calculate recovery.
- Repeatability: six independent sample preparations at 100% by one analyst, one day, one instrument; report %RSD.
- Intermediate precision: a second analyst repeats six preparations on a different day and instrument; compare the two sets.

**Acceptance criteria (pre-defined).** Specificity: no interfering peak > 0.1% area at the API retention time; peak purity passes. Accuracy: mean recovery 98.0-102.0% at each level. Repeatability: %RSD <= 2.0%. Intermediate precision: %RSD of the combined 12 results <= 3.0%, and the difference of the two analyst means within 2.0% absolute.

**Sample results.**

| Characteristic | Result | Criterion | Verdict |
|---|---|---|---|
| Specificity, blank/placebo at API RT | No peak > 0.1% area | No interference > 0.1% | Pass |
| Peak purity (API) | Passes purity threshold | Passes | Pass |
| Accuracy, 80% level (mean of 3) | 99.4% | 98.0-102.0% | Pass |
| Accuracy, 100% level (mean of 3) | 100.2% | 98.0-102.0% | Pass |
| Accuracy, 120% level (mean of 3) | 100.7% | 98.0-102.0% | Pass |
| Repeatability, %RSD (n=6) | 0.8% | <= 2.0% | Pass |
| Intermediate precision, %RSD (n=12) | 1.3% | <= 3.0% | Pass |
| Analyst mean difference | 0.6% absolute | <= 2.0% | Pass |
| System suitability (each run) | Resolution, tailing, replicate %RSD all within monograph SST | Per monograph | Pass |

**Conclusion in the report.** The compendial assay procedure is verified as suitable for routine use with this drug product on the named instruments and CDS, by the named analysts, under the stated conditions. The method is released for GMP use. If a later change (new instrument platform, new column chemistry, reformulation) falls outside the verified conditions, re-evaluate the need to re-verify.

Note what the example did not do: it did not re-establish linearity, did not redo the full ICH Q2 battery, and did not re-validate. It targeted the two characteristics the risk assessment flagged plus the precision the multi-analyst use demanded. That is the shape of a <1226> study.

---

## Roles and responsibilities

Verification is a team activity, and inspectors check that the right people approved the right things.

| Role | Responsibility |
|---|---|
| QC analyst / method SME | Drafts the protocol, executes the study, generates and records data, drafts the report |
| QC lab management / method owner | Owns the method lifecycle, ensures verification is done before first use, signs protocol and report |
| Analytical / method validation group | Provides design input (which characteristics, statistical treatment), reviews protocol and report for scientific adequacy |
| Quality Assurance | Independent review and approval of protocol and report; ensures pre-approval, deviation handling, and compliance with procedures; confirms the method is released only after verification is complete |
| Metrology / instrument qualification | Ensures instruments used are qualified and within calibration, see [calibration-and-metrology-program](/articles/calibration-and-metrology-program) |
| Regulatory affairs | Confirms the compendial reference is current and that the method as run matches what is filed |

The non-negotiable separation is that the same person cannot author, execute, and provide the sole quality approval. QA approval must be independent of execution. See [gxp-roles-responsibilities](/articles/gxp-roles-responsibilities).

---

## Common mistakes and inspection-finding patterns

These are the patterns that show up in 483 observations and warning letters around compendial methods. None of them name a company; they are the recurring shapes.

1. **No verification at all.** The lab used a USP method for release and assumed "it is compendial, so it is fine." Investigators cite 21 CFR 211.194(a)(2) directly: the method was not verified under actual conditions of use. This is the single most common finding in this area.

2. **Verification done, but specificity ignored for a complex matrix.** The lab verified accuracy and precision but never demonstrated that excipients, degradants, or impurities in their specific product do not interfere. The published method's specificity was established on a different matrix. An interfering coelution that inflates assay or hides an impurity is exactly what specificity verification exists to catch.

3. **Calling a modified method "verified."** The lab changed the column chemistry or the gradient beyond <621> allowable adjustments, then documented a verification instead of validating the change. The method run is no longer the compendial procedure, so the verification basis collapses. Inspectors treat this as both an inadequate validation finding and a data integrity concern.

4. **Treating system suitability as verification.** "SST passes every run, so the method is verified." SST is day-of-test fitness of the system; it is not specificity, accuracy, or precision for your article. Conflating them is a conceptual gap an inspector will probe in interview.

5. **Acceptance criteria set or moved after the data.** Verification run first, criteria written to match. This is testing into compliance, an ALCOA+ and data integrity failure, and it voids the study. See [data-integrity-foundations](/articles/data-integrity-foundations).

6. **No documented risk rationale for excluded characteristics.** The lab tested two things and skipped the rest with no written justification. <1226> is explicitly risk-based, so the absence of the rationale is itself the finding.

7. **Stale compendial reference.** The lab verified against a USP edition that has since been revised, and never re-checked when the monograph changed. The method on file no longer matches the current official text. Build a compendial-monitoring step into your change control, see [change-control-validated-systems](/articles/change-control-validated-systems).

8. **Failed verification handled as a quiet rerun.** A characteristic failed, the analyst reran until it passed, and no deviation was raised. A failed verification is a signal about method suitability and must go through deviation and investigation, see [deviation-management](/articles/deviation-management).

9. **Verification not repeated after a relevant change.** New instrument platform, new column supplier, reformulation, or a new analyst population, and the lab kept using the old verification. Verification is condition-specific; when the conditions move, reassess.

---

## Interview-ready: questions and strong answers

**"What is the difference between validation and verification of an analytical method?"**
Validation generates primary data proving a non-compendial method is fit for purpose across the full ICH Q2(R2) characteristics. Verification confirms a compendial method, already validated by the pharmacopeia, works under your actual conditions and with your specific article. You validate non-compendial methods, you verify compendial ones, and you transfer either one between labs.

**"Which chapter governs verification, and what is the legal basis for requiring it?"**
USP General Chapter <1226> describes verification. The regulatory requirement in the US comes from 21 CFR 211.194(a)(2), which requires methods be verified under actual conditions of use, and 211.165(e), which requires accuracy, sensitivity, specificity, and reproducibility be established. <1226> is general guidance; the CFR makes it bite.

**"You are setting up a USP assay for a new product. What do you verify, and what do you skip?"**
Start with a risk assessment comparing my conditions to the method's assumptions. I almost always verify specificity, because my matrix is the variable, and accuracy/recovery for the same reason. I verify intermediate precision if more than one analyst or instrument will run it. I can justify skipping linearity and range if the published working range fully brackets my specification and detector response is well characterized. For a major-component assay I do not need LOQ. The key is the documented rationale, not the number of tests.

**"You want to speed up a USP HPLC method by changing the flow rate and column. Can you just verify it?"**
Only if the changes stay inside the USP <621> allowable adjustments and system suitability still passes; then it is still the compendial method and I verify. If I change the column chemistry or go outside the <621> limits, it is a new method and I validate the affected characteristics under ICH Q2(R2). Calling that a verification would be a misrepresentation.

**"A verification result fails. What do you do?"**
I do not rerun until it passes. I raise a deviation and investigate. Either there is an assignable execution error, which I correct, justify, and repeat, or the method genuinely is not suitable for my article under my conditions, in which case I may need partial revalidation or an alternative procedure, and I document that conclusion.

**"Is sterility testing verified under <1226>?"**
No. Compendial sterility (USP <71>) and bacterial endotoxins (USP <85>) carry their own suitability requirements, the method suitability test for sterility and the inhibition/enhancement test for endotoxins. Those studies are the microbiological equivalent of verification; <1226> is not the right chapter for them.

**"How is system suitability different from verification?"**
System suitability is a run-by-run check that the system is performing as required on the day of test. Verification is a one-time, before-first-use study that the method is fit for my specific article under my conditions. SST passing does not mean the method is verified; they answer different questions.

---

## Practical tips

- **Title the document precisely.** "Verification of Compendial Procedure" with the monograph reference. The wrong title invites the wrong scrutiny.
- **Write the risk rationale before the data, and keep it.** The excluded-characteristics justification is the part reviewers and inspectors read first.
- **Quote the compendial system suitability verbatim** in the protocol so there is no ambiguity about what "passes" means.
- **Bind verification status to instrument qualification and reference-standard status.** A verification run on an unqualified instrument is not defensible.
- **Add a compendial-monitoring trigger to change control** so a revised monograph forces a re-look. Pharmacopeias revise continuously.
- **For transfers, do not skip straight to verification.** If a method moves from a development lab to QC, that is a transfer under <1224>, with a comparative study, not a unilateral verification.
- **Keep the executed protocol, raw data, and report linked and audit-trailed end to end,** so the conclusion traces back to raw chromatograms without gaps.

---

## Related articles

- [method-validation-essentials](/articles/method-validation-essentials)
- [method-validation-execution](/articles/method-validation-execution)
- [analytical-method-transfer](/articles/analytical-method-transfer)
- [ich-q14-q2r2-analytical-lifecycle](/articles/ich-q14-q2r2-analytical-lifecycle)
- [analytical-instrument-qualification](/articles/analytical-instrument-qualification)
- [chromatography-data-system-integrity](/articles/chromatography-data-system-integrity)
- [oos-investigation-process](/articles/oos-investigation-process)
- [quality-risk-management](/articles/quality-risk-management)
- [sterility-testing-usp-71](/articles/sterility-testing-usp-71)
- [stability-programs-ich](/articles/stability-programs-ich)
