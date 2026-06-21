---
title: "ISO 14971 Risk Management for Medical Devices and Combination Products"
description: "How ISO 14971 structures the device risk management file, hazard analysis, the risk control hierarchy, benefit-risk determination, and post-production feedback, and where combination products must satisfy both ISO 14971 and ICH Q9."
pubDate: 2026-06-20
tags: ["ISO 14971", "risk management", "medical devices", "combination products", "ICH Q9", "benefit-risk", "post-market surveillance", "design controls"]
pillar: "medical-devices"
tier: "Intermediate"
---

A pharmaceutical reviewer reads "risk" and thinks ICH Q9: severity times probability, a risk matrix, a quality risk management report filed once and revisited at change control. A device reviewer reads the same word and reaches for ISO 14971, where "risk" is an estimate built from a specific hazard, a foreseeable sequence of events, a harm, and the probability that the whole chain plays out. The two frameworks rhyme but they are not the same instrument, and the place they collide hardest is the combination product, a prefilled syringe, an autoinjector, a drug-coated stent, an inhaler, where a single object has to satisfy both at once.

What follows is ISO 14971 as it actually gets implemented: what goes in the risk management file, how hazard analysis is structured, the risk control hierarchy inspectors expect applied in order, how benefit-risk gets determined and documented, and how production and post-production feedback feeds back into the file. Then a map onto ICH Q9 quality risk management, and where a combination product team has to run both rails in parallel. By the end you should be able to set up a risk management file from scratch, defend it in an audit, and answer the questions an interviewer or notified-body reviewer will put to you.

## What ISO 14971 actually is

ISO 14971, *Medical devices, Application of risk management to medical devices*, is the international consensus standard for the process by which a manufacturer identifies hazards, estimates and evaluates risks, controls them, and monitors the effectiveness of those controls. The current edition is ISO 14971:2019, accompanied by a companion guidance document, ISO/TR 24971:2020, that explains how to apply the requirements and supplies worked examples, hazard checklists, and sample acceptability criteria. The standard is harmonized under the EU Medical Device Regulation (Regulation (EU) 2017/745, "MDR") and the In Vitro Diagnostic Regulation (Regulation (EU) 2017/746, "IVDR"), and the FDA recognizes ISO 14971 as a consensus standard for premarket submissions, with a US national adoption (ANSI/AAMI/ISO 14971) carrying an informative annex that maps the standard to US expectations.

A point worth fixing early: ISO 14971 is a *process* standard, not a checklist of acceptable risks. It does not tell you what level of risk is tolerable for a given device. It tells you that you must define your own criteria for risk acceptability in a plan, apply them consistently, and justify your conclusions with evidence. The judgment stays with the manufacturer; the standard governs the rigor of how that judgment is reached and recorded.

The standard ties directly into the device quality system. ISO 13485:2016 requires risk management across the product realization lifecycle and references ISO 14971 for the method. In the US, 21 CFR Part 820 requires design risk analysis as part of design controls (820.30(g)), and the Quality Management System Regulation (QMSR) amendment, which incorporates ISO 13485:2016 by reference and takes effect February 2, 2026, pulls risk management even more explicitly into the regulatory fabric. See also [Design Controls for Medical Devices](/articles/design-controls-medical-devices), [Medical Device Quality System (QMSR)](/articles/medical-device-quality-system-qmsr), and [EU MDR and IVDR Overview](/articles/eu-mdr-ivdr-overview).

### The process at a glance

ISO 14971:2019 lays out the process in a fixed clause order, and an inspector who knows the standard will check that your file follows it. Memorize this spine; it is the backbone of every good answer on the topic.

| Clause | Activity | What it produces |
|---|---|---|
| 4 | General requirements: process, management responsibility, competence, plan | Risk management plan, defined acceptability criteria |
| 5 | Risk analysis: intended use, safety characteristics, hazard identification, risk estimation | Hazard analysis, risk estimates |
| 6 | Risk evaluation | Each risk judged acceptable or not against criteria |
| 7 | Risk control: option analysis, implementation, residual risk, new-risk check, completeness | Verified controls, residual risk evaluation |
| 8 | Evaluation of overall residual risk | Aggregate acceptability decision, disclosure |
| 9 | Risk management review | Risk management report at release |
| 10 | Production and post-production activities | Information collection system, feedback into the file |

## The risk management file

The deliverable that ties everything together is the **risk management file (RMF)**. It is not a single document; it is the organized set of records and references that demonstrate the risk management process was planned and executed for a specific device. ISO 14971 requires traceability, for each identified hazard, to:

- The risk analysis
- The risk evaluation
- The implementation and verification of risk control measures
- The assessment of any residual risk

In practice the RMF is anchored by a **risk management plan** written before analysis begins, and closed by a **risk management report** written when the device is released. Between them sit the working analyses, usually a hazard analysis, one or more FMEAs, and the benefit-risk determination.

| RMF component | Purpose | Written when |
|---|---|---|
| Risk management plan | Scope, responsibilities, criteria for risk acceptability, method for evaluating overall residual risk, production/post-production review approach | Before analysis |
| Hazard analysis / risk analysis | Identify hazards, hazardous situations, harms; estimate risk | Design phase, iterative |
| Risk control records | Measures selected, implemented, verified for effectiveness | Design and verification |
| Residual risk evaluation | Acceptability of each residual risk and overall residual risk | After controls verified |
| Benefit-risk determination | Whether benefits outweigh residual risk | Before release |
| Risk management report | Confirms plan was executed, file is complete, methods to collect production/post-production information are in place | At release |

### What the risk management plan must contain

The plan is the contract you write with yourself before you know the answers, which is exactly why inspectors trust it. ISO 14971 Clause 4.4 requires the plan to cover, at minimum:

1. **Scope.** Which device, which configurations, which lifecycle phases the plan covers. Name the intended use and the version/revision so the plan ties to a specific design state.
2. **Allocation of responsibilities and authorities.** Who performs the analysis, who reviews, who approves risk acceptability decisions, who owns the post-production loop.
3. **Requirements for review of risk management activities.** When and how the program is reviewed (design reviews, milestone gates).
4. **Criteria for risk acceptability.** The policy and the matrix or rule set, including how acceptability is determined when the probability of harm cannot be estimated.
5. **The method to evaluate overall residual risk** and the criteria for accepting it.
6. **Activities for verification of the implementation and effectiveness of risk control measures.**
7. **Activities to collect and review production and post-production information.**

A plan missing the overall-residual-risk method, or missing the production/post-production approach, is incomplete on its face. Reviewers read the plan first and grade the rest of the file against it.

### Acceptance criteria for the RMF

You know the RMF is done correctly when:

- The plan was approved and dated before the first hazard analysis entry.
- Every hazardous situation in the analysis carries a risk estimate.
- Every risk above the acceptability threshold links to at least one implemented, verified control.
- Every control links to both implementation evidence and effectiveness evidence.
- The residual risk and overall residual risk are evaluated and dispositioned.
- The benefit-risk record is present where required and consistent with the clinical evaluation.
- The report states the file is complete and the post-production system is in place, and that statement is actually true when you sample the traceability.

A frequent finding in audits and notified-body reviews is an RMF that is internally inconsistent, a hazard identified in the analysis with no corresponding control, a control with no verification record, or a risk management report that claims completeness while the traceability does not actually close. The RMF is the first thing a competent reviewer pulls precisely because gaps there reveal whether the process was real or retrofitted.

## Vocabulary, because the words carry weight

ISO 14971 defines its terms tightly, and the definitions drive the analysis. Three distinctions matter most:

- **Hazard** is a potential source of harm. Electrical energy, a sharp edge, a software defect, biological contamination, these are hazards, latent and always present.
- **Hazardous situation** is the circumstance in which people, property, or the environment are *exposed* to one or more hazards. The sharp edge becomes a hazardous situation when a user's finger is near it during assembly.
- **Harm** is the actual injury or damage to health (and, in the 2019 edition, damage to property or the environment where relevant). Laceration, infection, under-dose, over-dose, delayed therapy.

**Risk** is the combination of the probability of occurrence of harm and the severity of that harm. The critical move ISO 14971 forces is the **sequence of events**: a hazard does not produce harm directly. A hazard, under some initiating cause, leads to a hazardous situation, which, if it persists or is not detected, leads to harm. Each link in that chain has a probability, and the probability of harm (often modeled as P1 times P2: probability of the hazardous situation occurring, times probability that the hazardous situation leads to harm) is what you estimate. Teams that skip the sequence and jump straight from "hazard" to "harm" produce shallow analyses that miss the control points sitting in the middle of the chain.

A worked line from a hazard analysis makes the chain concrete:

| Element | Example entry (autoinjector) |
|---|---|
| Hazard | Stored mechanical energy (spring) |
| Foreseeable sequence / cause | Patient removes cap and presses device against skin at wrong angle |
| Hazardous situation | Needle not fully inserted; partial dose delivered |
| Harm | Under-dose, sub-therapeutic exposure, disease progression |
| Severity | Serious |
| P1 (situation occurs) | Medium |
| P2 (situation leads to harm) | Medium |
| Risk before control | Unacceptable |

That single row already tells you where to put controls: at the cap, the skin-contact sensor, the audible/visible end-of-dose indicator, and the instructions for use. Skip the middle columns and you would never see those control points.

## Hazard analysis: how it is structured

The analysis usually proceeds along two complementary axes.

**Top-down (hazard-driven).** Start from a structured list of hazard categories, energy (electrical, thermal, mechanical, radiation), biological and chemical (biocompatibility, contamination, toxicity), operational and use-related (use error, misconnection, alarm conditions), and information hazards (labeling, IFU adequacy). Annex A of ISO/TR 24971 provides question sets to systematically surface characteristics related to safety, and Annex C gives examples of hazards and sequences. For each hazard, walk the sequence of events to credible hazardous situations and harms.

**Bottom-up (failure-driven).** Use a **design FMEA** to ask, for each function or component, how it can fail, what the effect of that failure is, and how that effect propagates to a hazardous situation and harm. Process FMEAs do the same for manufacturing. Use FMEA carefully: it is a single-point-failure tool and is not by itself a complete risk analysis, because it tends to miss combinations of failures and systemic or use-related hazards. ISO 14971 expects FMEA to feed the hazard analysis, not replace it.

For devices with a use interface, **use-related risk analysis** under usability engineering (IEC 62366-1:2015) runs alongside and feeds the RMF; use errors are hazards in their own right, and the usability file and the RMF must reference each other. For software, **IEC 62304:2006/AMD1:2015** governs the lifecycle and assigns a software safety classification (Class A/B/C) that scales process rigor. For programmable devices that can be networked, **IEC 81001-5-1** and **AAMI TIR57** cover cybersecurity risk, which feeds the same RMF. None of these are optional add-ons; they are inputs the RMF must integrate. See [IEC 62304 Software Lifecycle for SaMD](/articles/iec-62304-samd-software-lifecycle) and [Device Software Cybersecurity (SaMD)](/articles/device-software-cybersecurity-samd).

### Step-by-step: running the analysis

1. **Define intended use and reasonably foreseeable misuse.** State the indication, the user population, the use environment, and how the device could plausibly be misused. This scopes everything downstream.
2. **Identify safety characteristics.** Work through the ISO/TR 24971 question sets to list characteristics that could affect safety (sterility, energy delivery, dose accuracy, materials in patient contact, software functions).
3. **Identify hazards** against each characteristic, top-down by category and bottom-up by FMEA.
4. **Build the sequence of events** for each hazard to one or more hazardous situations and harms.
5. **Estimate severity and probability** for each hazardous situation, recording the basis.
6. **Evaluate** each risk against the plan's criteria.
7. **Control** the unacceptable ones in hierarchy order (below), then re-estimate residual risk.
8. **Verify** implementation and effectiveness; check for new hazards introduced.
9. **Aggregate** to overall residual risk; run benefit-risk where needed.
10. **Report** and set up the production/post-production loop.

A concrete acceptance expectation: every credible hazardous situation traces to a risk estimate, and every estimate above the acceptability threshold traces to a risk control. Reviewers test this by sampling, picking a hazard and walking it left to right and right to left until the trace either closes or breaks.

## Estimating and evaluating risk

Risk estimation combines severity and probability. Severity is usually a fixed ordinal scale (for example: negligible, minor, serious, critical, catastrophic) keyed to the nature of the harm. Probability is harder, because for many device harms there is little or no statistical data pre-launch. ISO 14971 permits qualitative estimation where quantitative data are unavailable, but it expects the rationale to be documented and, where possible, grounded in available evidence, clinical literature, post-market data on similar devices, complaint history, biocompatibility testing, bench data.

A worked acceptability matrix shows what "defined in advance" looks like. Severity runs across, probability down; the cells say acceptable (A), reduce as far as possible then evaluate (R), or unacceptable (U).

| Probability \ Severity | Negligible | Minor | Serious | Critical | Catastrophic |
|---|---|---|---|---|---|
| Frequent | R | U | U | U | U |
| Probable | A | R | U | U | U |
| Occasional | A | A | R | U | U |
| Remote | A | A | A | R | U |
| Improbable | A | A | A | A | R |

Two cautions on the matrix. First, the boundaries are a manufacturer policy decision; you must be able to justify why a given cell is "acceptable." Second, the matrix is a tool, not the standard. ISO 14971:2019 does not mandate a 5x5 grid, and a defensible program can use a rule set instead. What it does require is that the criteria be set before the analysis and applied consistently.

The risk acceptability criteria, the matrix or the rules that say which severity/probability combinations are acceptable, which require further control, and which are unacceptable, must be defined in the risk management plan *before* the analysis, not reverse-engineered to make the numbers pass. This is a recurring inspection theme. A risk matrix tuned after the fact so that every residual risk lands in "acceptable" is a credibility problem, and experienced reviewers spot it by checking the plan's date against the analysis.

One substantive change from the older ISO 14971:2007 to the 2019 edition: the standard removed the concept of reducing risk "as low as reasonably practicable" (ALARP, which invited economic trade-offs) and instead requires reducing risk "as far as possible" (AFAP) consistent with the state of the art, without allowing cost to justify leaving a feasible control unimplemented. If a control is technically feasible and would meaningfully reduce risk, you implement it; cost is not a defense for omitting it. This aligns with the MDR's general safety and performance requirements (Annex I), which also use "as far as possible" language and require risks to be reduced without adversely affecting the benefit-risk ratio.

## The risk control hierarchy, and the order matters

ISO 14971 requires risk control options to be considered **in a defined priority order** (Clause 7.1). You do not get to jump to the easiest option (a warning label) when a higher-order option (designing the hazard out) is feasible.

1. **Inherently safe design and manufacture.** Eliminate the hazard or reduce its probability through design. A Luer connector that is physically incompatible with the wrong line (a design that prevents misconnection) beats any amount of labeling. Rounding a sharp edge eliminates the laceration hazard. Material selection that avoids a known sensitizer removes a biocompatibility hazard at the source.
2. **Protective measures in the device itself or in manufacturing.** Where the hazard cannot be designed out, add guards, alarms, interlocks, limits, safety mechanisms, a needle-stick guard, a software dose-limit check, an occlusion alarm on a pump, a sterility-assurance step validated in manufacturing.
3. **Information for safety.** Warnings, contraindications, instructions for use, training. This is the *last* resort, not the first, because it depends on humans reading, understanding, and acting.

The standard's logic is that controls higher in the hierarchy are more reliable because they do not depend on user behavior. An auditor reviewing a control set that leans heavily on IFU warnings for risks that could have been designed out will ask why the higher-order options were not taken, and "it was cheaper" is not an acceptable answer under the AFAP principle.

After controls are implemented, you must **verify** two things: that the control was actually implemented (verification of implementation) and that it is **effective** at reducing the risk (verification of effectiveness). The second is the one teams shortchange. A dose-limit feature that exists in the design but was never tested to confirm it actually prevents the over-dose under realistic conditions is not a verified control. ISO 14971 also requires you to check whether any risk control **introduced new hazards or hazardous situations** (Clause 7.5), adding a needle guard can introduce an actuation-failure hazard, and to fold those back into the analysis. Finally, Clause 7.6 requires a check that risk control is *complete*, every risk has been considered, before you move on.

### Worked control example

Take the under-dose hazard from the autoinjector table. The control set, applied in order:

| Hierarchy level | Control | Verification of implementation | Verification of effectiveness |
|---|---|---|---|
| Inherent design | Auto-retracting needle with fixed insertion depth | Design output drawing, DHF | Insertion-depth testing across tolerance stack; n samples to spec |
| Protective measure | End-of-dose click plus viewing window indicator | Design verification of indicator function | Bench test confirming indicator fires only at full dose |
| Information | IFU step "hold until you hear the second click" | Approved labeling | Summative usability study, use-error rate within acceptance |

Residual risk after these controls drops from "unacceptable" to a lower probability band; you re-estimate, record the new value, and check that the needle-retraction mechanism did not introduce a new jam hazard. If it did, that new hazard enters the analysis and gets its own control.

## Residual risk and overall residual risk

After all controls are in place and verified, each remaining risk is the **residual risk**, evaluated against the acceptability criteria. If a residual risk is still unacceptable and no further control is feasible, the only remaining path is a benefit-risk analysis to determine whether the medical benefit justifies the residual risk.

ISO 14971:2019 also makes explicit the evaluation of **overall residual risk** (Clause 8), the aggregate of all residual risks considered together. Individually acceptable risks can sum to an unacceptable whole: a device with a dozen "minor, acceptable" residual risks may still impose an overall burden on the user that no single line item captures. The overall residual risk evaluation is a deliberate step, decided by a method defined in the plan (for example, expert panel review, comparison to similar devices on the market, an event-tree or fault-tree roll-up), and disclosed to users where relevant (often through the IFU). Inspectors increasingly look for this step specifically, because it was a known weak point under the older edition. The method must be named in the plan; "we reviewed it and it was fine" is not a method.

## Benefit-risk determination

For any residual risk judged unacceptable against the criteria, and for the overall residual risk, ISO 14971 requires a **benefit-risk determination**: a documented judgment that the benefits of the intended use outweigh the residual risk. Benefit here is the positive impact on clinical outcome, patient health, or patient management, weighed against the probability and severity of harm.

This determination must rest on evidence, clinical evaluation data, literature, equivalence to existing devices, post-market data, not assertion. Under the MDR, benefit-risk is woven through the clinical evaluation (Annex XIV) and the general safety and performance requirements (Annex I), so the ISO 14971 benefit-risk record and the clinical evaluation report have to tell a consistent story. A benefit-risk conclusion in the RMF that contradicts the clinical evaluation is an obvious and serious inconsistency. The FDA articulates a parallel structure in its benefit-risk guidance for device premarket decisions, which weighs the probability, magnitude, and duration of benefit against the severity, probability, and duration of harm, plus uncertainty and patient tolerance for risk.

A defensible benefit-risk record states the intended benefit and its evidence basis, lists the residual risks it is weighing, applies a stated weighing rationale, and reaches an explicit conclusion with the names and dates of who decided. It is a judgment, but a traceable one.

## Production and post-production feedback

The part of ISO 14971 most often treated as an afterthought, and most often cited, is the **production and post-production information** requirement (Clause 10). Risk management does not end at release. The standard requires a system to actively collect and review information generated during production and after the device is on the market, and to feed it back into the RMF.

Sources include:

- Production and in-process monitoring (yields, nonconformances, CAPA)
- Complaints and service reports
- Adverse event and vigilance data
- Post-market surveillance and, where applicable, post-market clinical follow-up
- Information on similar devices and state-of-the-art changes
- Publicly available information such as recalls and field safety notices for comparable devices

The required loop: when new information arrives, evaluate whether it affects the risk analysis (new hazards, changed probability estimates, controls that are not performing as assumed), whether previously acceptable risks are no longer acceptable, and whether the benefit-risk conclusion still holds. If it does affect the file, the RMF must be updated and the changes traced through. Under the MDR this dovetails with the post-market surveillance plan (Article 84), the post-market surveillance report or periodic safety update report (PSUR, Articles 85 and 86), and post-market clinical follow-up (Annex XIV Part B). Under FDA's framework it connects to complaint handling, medical device reporting (21 CFR Part 803), and CAPA (21 CFR 820.100). See [Device Post-Market Surveillance under MDR](/articles/device-postmarket-surveillance-mdr), [Product Complaint Handling](/articles/product-complaint-handling), and [What Is a CAPA](/articles/what-is-a-capa).

The classic failure mode: a complaint trend shows a control failing in the field, the complaint system processes it as an isolated event, and nobody updates the risk file. The control is documented as effective in the RMF while the field data say otherwise. That disconnect, a live RMF that no longer matches reality, is exactly what a thorough inspector probes by cross-referencing complaint data against the risk file's stated control effectiveness.

A practical mechanism that satisfies this requirement: define, in the plan, a periodic risk file review (for example quarterly or annual, plus event-triggered) where complaint rates, CAPA outcomes, and vigilance data are compared against the probability estimates in the RMF. When a field rate exceeds the estimated probability, that is a trigger to re-open the analysis. Record the review even when no change is warranted, because "we looked and nothing changed" is itself evidence the loop is alive.

## Roles and responsibilities

ISO 14971 puts named accountability on the program. Top management is explicitly responsible for providing resources, assigning competent personnel, defining and reviewing the risk acceptability policy, and reviewing the suitability of the process. Below that, responsibilities typically allocate as follows.

| Role | Responsibility |
|---|---|
| Top management | Owns the risk policy and acceptability criteria; provides resources; reviews process suitability |
| Risk management lead | Maintains the plan and RMF; chairs analysis sessions; ensures traceability closes |
| Design / R&D engineering | Identifies hazards and failure modes; designs and implements controls; produces design verification evidence |
| Human factors / usability | Runs use-related risk analysis (IEC 62366-1); feeds use errors and summative study results into the RMF |
| Software / cybersecurity | Assigns software safety class (IEC 62304); supplies software hazards and security risks |
| Clinical / medical affairs | Provides severity assessments, clinical evidence, and the benefit side of benefit-risk |
| Quality assurance | Reviews the file for completeness and consistency; links it to design controls and CAPA |
| Regulatory affairs | Ensures consistency with the clinical evaluation and the submission; maps to MDR/FDA expectations |
| Post-market / vigilance | Runs the production and post-production information loop; triggers RMF updates |

The point of naming roles is that the standard expects competence to be documented. An inspector may ask who graded the severity of a given harm and on what authority. "The intern filled in the spreadsheet" is the wrong answer; severity grades should be set or confirmed by someone with clinical or appropriate technical competence.

## ISO 14971 versus ICH Q9: same goal, different machinery

ICH Q9(R1), *Quality Risk Management*, is the pharmaceutical world's risk framework, a principles-and-tools document. The R1 revision was adopted by the ICH in January 2023 and reached step 4. It establishes that quality risk should be assessed on scientific knowledge, linked ultimately to patient protection, with effort proportionate to risk. It is deliberately tool-agnostic, pointing to FMEA, FMECA, FTA, HACCP, HAZOP, PHA, and risk ranking and filtering, and it lives inside the ICH Q8/Q9/Q10 system. The R1 revision sharpened guidance on managing subjectivity, the formality of QRM, and risk-based decision-making. See [Quality Risk Management (ICH Q9)](/articles/quality-risk-management) and [Pharmaceutical Quality System](/articles/pharmaceutical-quality-system).

Where they align:

- Both demand risk assessment grounded in science and evidence, not opinion.
- Both scale rigor to risk (Q9's proportionality; ISO 14971's AFAP and state-of-the-art).
- Both require the risk conclusion to be documented and revisited as new information arrives.
- Both ultimately point at patient safety.

Where they differ in a way that matters operationally:

| Dimension | ISO 14971 | ICH Q9 |
|---|---|---|
| Object of analysis | A specific device and its harms to patient/user | Quality risks to the product and, through it, the patient |
| Core unit | Hazard, hazardous situation, harm, with severity times probability | Risk to quality attributes; severity, probability, often detectability |
| Lifecycle anchor | Risk management file across design, production, post-production | QRM integrated in the pharmaceutical quality system (ICH Q10) |
| Acceptability | Manufacturer-defined criteria, AFAP, overall residual risk | Proportionate effort; risk acceptance decisions, no fixed matrix mandated |
| Detectability | Not a primary factor in the estimate (treated as a control attribute) | Frequently included (for example, in an RPN under FMEA) |
| Mandated deliverable | A formal RMF with defined components | No single mandated file; documentation proportionate to risk |

That detectability row trips up combination product teams. A device-side hazard analysis under ISO 14971 estimates risk from severity and probability of harm; detectability is treated as a *control* that lowers probability, not as a third multiplier. A pharma FMEA under Q9 often bakes detectability straight into a risk priority number. Run the same FMEA twice with two different conventions and you get two different prioritizations for the same failure. When the device and drug-quality teams share an FMEA on a combination product, they need to agree up front on the scoring convention, or the two functions will argue past each other.

## Combination products: where you satisfy both

A **combination product**, under the FDA definition at 21 CFR Part 3, a product combining a drug, device, and/or biological product, must comply with the relevant requirements for *each* constituent part. The FDA's current good manufacturing practice framework for combination products, 21 CFR Part 4, lets a manufacturer operate primarily under either the drug cGMP (21 CFR 210/211) or the device QMSR (21 CFR 820), but then requires bringing in the specified provisions from the *other* framework. For a drug-led combination product operating under 211, Part 4 explicitly pulls in key device-system elements, including design controls (820.30), which is where device risk analysis lives. See [CDMO Oversight and Quality Agreements](/articles/cdmo-oversight-quality-agreements) where contract operations split these obligations, and [Visual Inspection of Injectables (USP 790)](/articles/visual-inspection-injectables-usp-790) for a delivery-system interface example.

The practical consequence: a prefilled syringe or autoinjector team cannot satisfy its obligations with an ICH Q9 quality risk assessment alone. The device constituent needs an ISO 14971 risk management file, hazard analysis, control hierarchy, residual risk and overall residual risk evaluation, benefit-risk, and the production/post-production loop, and the drug constituent needs Q9-style quality risk management for the formulation, container closure integrity, manufacturing, and stability. Use-related risk analysis (IEC 62366-1) and, for any embedded software, IEC 62304 also apply to the device side.

Where the two rails must be stitched together rather than run separately:

- **The interface failures.** The hazards that are unique to the combination, drug-device interaction, delivered-dose accuracy across the device's mechanical tolerances, container closure integrity over device actuation, extractables and leachables from the device into the drug, sit in the seam. Neither a pure Q9 nor a pure 14971 analysis owned by one team will catch them unless the interface is explicitly scoped to one file with the other referenced. A common structure is to make the ISO 14971 RMF the integrating document for harms reaching the patient, while the Q9 assessments feed it the drug-quality probability inputs.
- **Consistent severity scales.** If the device hazard analysis grades an under-dose as "serious" and the drug-quality assessment treats the same delivered-dose failure as a lower-tier quality deviation, the combination product has two contradictory views of the same harm. Align the harm definitions across both rails.
- **One benefit-risk story.** The ISO 14971 benefit-risk determination, the clinical and quality risk picture, and the marketing application's overall benefit-risk must agree. Reviewers read across them.
- **One feedback loop, or two that talk.** Production and post-production information has to flow into both the device RMF (per ISO 14971) and the pharmaceutical quality system (per ICH Q10 and Q9). A field signal about delivery failures is simultaneously a device complaint and a drug-quality signal; the systems must reconcile, not silo.

## What reviewers and inspectors actually look for

Distilled from how device and combination-product reviews tend to run:

- **A plan written first.** Acceptability criteria and the overall-residual-risk method dated before the analysis, not after.
- **Traceability that closes.** Every hazard to a risk estimate; every above-threshold risk to a verified control; every control checked for effectiveness *and* for new hazards introduced.
- **The hierarchy applied in order.** Higher-order controls used where feasible, with a justification when reliance falls to information-for-safety; no AFAP shortcuts excused by cost.
- **Effectiveness verification, not just implementation verification.** Evidence the control actually reduces the risk under realistic conditions.
- **Overall residual risk evaluated explicitly,** by a named method, and disclosed where relevant.
- **A benefit-risk record consistent with the clinical evaluation** and the application.
- **A live post-production loop** with documented evidence that field and production data were evaluated for risk impact and the RMF updated when warranted.
- **For combination products, both rails present and reconciled,** an ISO 14971 RMF for the device constituent, Q9 QRM for the drug constituent, a single coherent treatment of interface hazards, aligned severity scales, and one benefit-risk conclusion.

### Common mistakes and recurring findings

- **The frozen file.** The RMF was assembled for submission and never touched again, while complaints and CAPAs accumulated. Cited as a failure to perform Clause 10 activities.
- **Reverse-engineered acceptability.** The matrix was adjusted after the estimates so everything landed "acceptable." The plan date gives it away.
- **Implementation passed off as effectiveness.** A control exists in the design but was never tested to confirm it reduces the risk. The standard requires both checks.
- **Severity drift.** The same harm is graded differently in the device analysis, the use study, and the drug-quality assessment. Inspectors cross-read.
- **FMEA mistaken for the whole analysis.** Single-point failures are covered, but use errors, software conditions, and failure combinations are missing.
- **No new-hazard check.** A control was added without analyzing whether it introduced a new hazard (Clause 7.5).
- **Missing overall residual risk.** Individual risks are dispositioned but never aggregated, the single most common 2019-edition gap.
- **Generic, copy-paste hazards.** A library reused across products without tailoring to the device's intended use and actual sequence of events.

## Interview questions and how to answer them

**Q: What is the difference between a hazard, a hazardous situation, and harm?**
A hazard is a potential source of harm (electrical energy, a sharp edge). A hazardous situation is exposure to the hazard (a user's finger near the edge). Harm is the actual injury (the laceration). Risk is estimated at the hazardous situation, using severity of the harm and probability that the situation occurs and leads to harm.

**Q: Walk me through the risk control hierarchy and why order matters.**
Inherently safe design first, then protective measures, then information for safety. Higher levels are more reliable because they do not depend on a human reading and acting. Under the 2019 edition you must reduce risk as far as possible consistent with state of the art, so you cannot skip a feasible higher-order control because a label is cheaper.

**Q: What changed between ISO 14971:2007 and 2019?**
ALARP gave way to AFAP, so cost is no longer a defense for omitting a feasible control. The 2019 edition makes overall residual risk evaluation an explicit step, sharpens benefit-risk, and strengthens the production and post-production information requirement. The companion guidance moved to ISO/TR 24971:2020.

**Q: How do you estimate probability when you have no data before launch?**
ISO 14971 allows qualitative estimation, but the rationale must be documented and grounded where possible in literature, complaint history on similar devices, bench and biocompatibility data, and clinical experience. You record the basis, and you revisit the estimate when post-production data arrive.

**Q: Verification of a control, implementation versus effectiveness?**
Implementation verification confirms the control is in the design as intended. Effectiveness verification confirms it actually reduces the risk under realistic conditions. You need both, and you also check whether the control introduced a new hazard.

**Q: A combination product, what risk frameworks apply and how do they fit together?**
The device constituent needs an ISO 14971 RMF plus usability (IEC 62366-1) and, for software, IEC 62304. The drug constituent needs ICH Q9 quality risk management. Under 21 CFR Part 4 the manufacturer operates under one base GMP and imports the required provisions of the other, including design controls (820.30). Interface hazards, dose accuracy, container closure integrity over actuation, extractables and leachables, sit in the seam and must be owned by one integrating file with aligned severity scales and a single benefit-risk conclusion.

**Q: How does post-market information feed the risk file?**
Through a defined collection and review system: complaints, CAPA, vigilance, post-market surveillance, and information on similar devices. When data show a control underperforming or a new hazard, you re-open the analysis, update estimates and controls, and re-confirm benefit-risk. The cleanest evidence of a mature program is an RMF with a visible history of updates driven by real-world data.

**Q: How would you connect ISO 14971 to ICH Q9?**
Both are evidence-based, proportionate, and patient-focused. ISO 14971 is device-specific, mandates a formal RMF, and treats detectability as a control rather than a multiplier. Q9 is tool-agnostic, lives inside ICH Q10, and often folds detectability into an RPN. On a shared FMEA you must agree the scoring convention up front so the two functions prioritize the same way.

## Practical tips

- **Build the plan as a template and reuse the skeleton,** but tailor intended use, criteria, and the overall-residual-risk method per product. A copied plan with the wrong device name is a finding.
- **Keep the trace in a tool that enforces linkage,** a requirements/risk traceability system, not a spreadsheet that lets a row exist without a control. See [User Requirements and Traceability](/articles/user-requirements-and-traceability).
- **Date everything.** The single fastest way to lose credibility is a plan that appears to post-date its own analysis.
- **Make the post-production review a calendar event with an owner,** not a paragraph in an SOP nobody runs. Record the no-change reviews too.
- **Reconcile severity scales across the device, usability, software, and drug-quality rails on day one** of a combination product, before anyone scores anything.
- **Treat the RMF as a living document tied to change control.** Any design change triggers a risk review. See [Change Control for Validated Systems](/articles/change-control-validated-systems) and [Root Cause Analysis Techniques](/articles/root-cause-analysis-techniques) for the methods that feed it.

The standard is unforgiving in one specific way: it is a process you have to *live*, not a document you produce once. A risk management file assembled for a submission and then frozen while complaints accumulate is, by the standard's own logic, non-conforming; the requirement to feed production and post-production information back into the file is as binding as the requirement to do the analysis up front. The cleanest signal of a mature program is not a polished initial RMF; it is an RMF with a visible history of updates because real-world evidence told the team something they did not know at release.

## Key references

- ISO 14971:2019, *Medical devices, Application of risk management to medical devices*, and ISO/TR 24971:2020 (guidance on application).
- ISO 13485:2016 (device QMS); IEC 62366-1:2015 (usability engineering); IEC 62304:2006/AMD1:2015 (device software lifecycle); IEC 81001-5-1 and AAMI TIR57 (cybersecurity risk).
- ICH Q9(R1), *Quality Risk Management*; ICH Q10, *Pharmaceutical Quality System*.
- Regulation (EU) 2017/745 (MDR), Annex I (safety and performance), Annex XIV (clinical evaluation and post-market clinical follow-up), Articles 83 to 86 (post-market surveillance); Regulation (EU) 2017/746 (IVDR).
- FDA: 21 CFR Part 820 and the QMSR amendment (effective February 2, 2026); 820.30 (design controls); 21 CFR Part 3 and Part 4 (combination products); 21 CFR Part 803 (medical device reporting); FDA benefit-risk guidance for device premarket decisions.
