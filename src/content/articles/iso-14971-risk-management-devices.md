---
title: "ISO 14971 Risk Management for Medical Devices and Combination Products"
description: "How ISO 14971 structures the device risk management file, hazard analysis, the risk control hierarchy, benefit-risk determination, and post-production feedback — and where combination products must satisfy both ISO 14971 and ICH Q9."
pubDate: 2026-06-20
tags: ["ISO 14971", "risk management", "medical devices", "combination products", "ICH Q9", "benefit-risk", "post-market surveillance", "design controls"]
pillar: "medical-devices"
tier: "Intermediate"
---

A pharmaceutical reviewer reads "risk" and thinks ICH Q9: severity times probability, a risk matrix, a quality risk management report filed once and revisited at change control. A device reviewer reads the same word and reaches for ISO 14971, where "risk" is an estimate built from a specific hazard, a foreseeable sequence of events, a harm, and the probability that the whole chain plays out. The two frameworks rhyme but they are not the same instrument, and the place they collide hardest is the combination product — a prefilled syringe, an autoinjector, a drug-coated stent, an inhaler — where a single object has to satisfy both at once.

What follows is ISO 14971 as it actually gets implemented: what goes in the risk management file, how hazard analysis is structured, the risk control hierarchy inspectors expect applied in order, how benefit-risk gets determined and documented, and how production and post-production feedback feeds back into the file. Then a map onto ICH Q9 quality risk management, and where a combination product team has to run both rails in parallel.

## What ISO 14971 actually is

ISO 14971, *Medical devices — Application of risk management to medical devices*, is the international consensus standard for the process by which a manufacturer identifies hazards, estimates and evaluates risks, controls them, and monitors the effectiveness of those controls. The current edition is ISO 14971:2019, accompanied by a companion guidance document, ISO/TR 24971, that explains how to apply the requirements. The standard is harmonized under the EU Medical Device Regulation (Regulation (EU) 2017/745, "MDR") and the IVDR, and the FDA recognizes ISO 14971 as a consensus standard for premarket submissions.

A point worth fixing early: ISO 14971 is a *process* standard, not a checklist of acceptable risks. It does not tell you what level of risk is tolerable for a given device. It tells you that you must define your own criteria for risk acceptability in a plan, apply them consistently, and justify your conclusions with evidence. The judgment stays with the manufacturer; the standard governs the rigor of how that judgment is reached and recorded.

The standard ties directly into the device quality system. ISO 13485:2016 requires risk management across the product realization lifecycle and references ISO 14971 for the method. In the US, 21 CFR Part 820 requires design risk analysis as part of design controls (820.30(g)), and the Quality Management System Regulation (QMSR) amendment harmonizes Part 820 with ISO 13485 — pulling risk management even more explicitly into the regulatory fabric.

## The risk management file

The deliverable that ties everything together is the **risk management file (RMF)**. It is not a single document; it is the organized set of records and references that demonstrate the risk management process was planned and executed for a specific device. ISO 14971 requires traceability for each identified hazard to:

- The risk analysis
- The risk evaluation
- The implementation and verification of risk control measures
- The assessment of any residual risk

In practice the RMF is anchored by a **risk management plan** written before analysis begins, and closed by a **risk management report** written when the device is released. Between them sit the working analyses — usually a hazard analysis, one or more FMEAs, and the benefit-risk determination.

| RMF component | Purpose | Written when |
|---|---|---|
| Risk management plan | Scope, responsibilities, criteria for risk acceptability, method for evaluating overall residual risk, production/post-production review approach | Before analysis |
| Hazard analysis / risk analysis | Identify hazards, hazardous situations, harms; estimate risk | Design phase, iterative |
| Risk control records | Measures selected, implemented, verified for effectiveness | Design and verification |
| Residual risk evaluation | Acceptability of each residual risk and overall residual risk | After controls verified |
| Benefit-risk determination | Whether benefits outweigh residual risk | Before release |
| Risk management report | Confirms plan was executed, file is complete, methods to collect production/post-production information are in place | At release |

A frequent finding in audits and notified-body reviews is an RMF that is internally inconsistent — a hazard identified in the analysis with no corresponding control, a control with no verification record, or a risk management report that claims completeness while the traceability does not actually close. The RMF is the first thing a competent reviewer pulls precisely because gaps there reveal whether the process was real or retrofitted.

## Vocabulary, because the words carry weight

ISO 14971 defines its terms tightly, and the definitions drive the analysis. Three distinctions matter most:

- **Hazard** is a potential source of harm. Electrical energy, a sharp edge, a software defect, biological contamination — these are hazards, latent and ever-present.
- **Hazardous situation** is the circumstance in which people, property, or the environment are *exposed* to one or more hazards. The sharp edge becomes a hazardous situation when a user's finger is near it during assembly.
- **Harm** is the actual injury or damage to health. Laceration, infection, under-dose, over-dose, delayed therapy.

**Risk** is the combination of the probability of occurrence of harm and the severity of that harm. The critical move ISO 14971 forces is the **sequence of events**: a hazard does not produce harm directly. A hazard, under some initiating cause, leads to a hazardous situation, which — if it persists or is not detected — leads to harm. Each link in that chain has a probability, and the probability of harm (often modeled as P1 × P2: probability of the hazardous situation occurring, times probability that the hazardous situation leads to harm) is what you estimate. Teams that skip the sequence and jump straight from "hazard" to "harm" produce shallow analyses that miss the control points sitting in the middle of the chain.

## Hazard analysis: how it is structured

The analysis usually proceeds along two complementary axes.

**Top-down (hazard-driven).** Start from a structured list of hazard categories — energy (electrical, thermal, mechanical, radiation), biological and chemical (biocompatibility, contamination, toxicity), operational and use-related (use error, misconnection, alarm conditions), and information hazards (labeling, IFU adequacy). Annex C of ISO/TR 24971 provides question sets to systematically surface characteristics related to safety. For each hazard, walk the sequence of events to credible hazardous situations and harms.

**Bottom-up (failure-driven).** Use a **design FMEA** to ask, for each function or component, how it can fail, what the effect of that failure is, and how that effect propagates to a hazardous situation and harm. Process FMEAs do the same for manufacturing. Use FMEA carefully: it is a single-point-failure tool and is not by itself a complete risk analysis, because it tends to miss combinations of failures and systemic/use-related hazards. ISO 14971 expects FMEA to feed the hazard analysis, not replace it.

For devices with a use interface, **use-related risk analysis** under usability engineering (IEC 62366-1) runs alongside and feeds the RMF — use errors are hazards in their own right. For software, **IEC 62304** governs the lifecycle and assigns a software safety classification (Class A/B/C) that scales process rigor. None of these are optional add-ons; they are inputs the RMF must integrate.

A concrete acceptance expectation: every credible hazardous situation traces to a risk estimate, and every estimate above the acceptability threshold traces to a risk control. Reviewers test this by sampling.

## Estimating and evaluating risk

Risk estimation combines severity and probability. Severity is usually a fixed ordinal scale (e.g., negligible, minor, serious, critical, catastrophic) keyed to the nature of the harm. Probability is harder, because for many device harms there is little or no statistical data pre-launch. ISO 14971 permits qualitative estimation where quantitative data are unavailable, but it expects the rationale to be documented and, where possible, grounded in available evidence — clinical literature, post-market data on similar devices, complaint history, biocompatibility testing, bench data.

The risk acceptability criteria — the matrix or the rules that say which severity/probability combinations are acceptable, which require further control, and which are unacceptable — must be defined in the risk management plan *before* the analysis, not reverse-engineered to make the numbers pass. This is a recurring inspection theme. A risk matrix tuned after the fact so that every residual risk lands in "acceptable" is a credibility problem, and experienced reviewers spot it by checking the plan's date against the analysis.

One substantive change from the older ISO 14971:2007 to the 2019 edition: the standard removed the concept of reducing risk "as low as reasonably practicable" (ALARP, which invited economic trade-offs) and instead requires reducing risk "as far as possible" (AFAP) consistent with the state of the art, without allowing cost to justify leaving a feasible control unimplemented. If a control is technically feasible and would meaningfully reduce risk, you implement it; cost is not a defense for omitting it. This aligns with the MDR's general safety and performance requirements.

## The risk control hierarchy — and the order matters

ISO 14971 requires risk control options to be considered **in a defined priority order**. You do not get to jump to the easiest option (a warning label) when a higher-order option (designing the hazard out) is feasible.

1. **Inherently safe design and manufacture.** Eliminate the hazard or reduce its probability through design. A Luer connector that is physically incompatible with the wrong line (a design that prevents misconnection) beats any amount of labeling. Rounding a sharp edge eliminates the laceration hazard.
2. **Protective measures in the device itself or in manufacturing.** Where the hazard cannot be designed out, add guards, alarms, interlocks, limits, safety mechanisms — a needle-stick guard, a software dose-limit check, an occlusion alarm on a pump.
3. **Information for safety.** Warnings, contraindications, instructions for use, training. This is the *last* resort, not the first, because it depends on humans reading, understanding, and acting.

The standard's logic is that controls higher in the hierarchy are more reliable because they do not depend on user behavior. An auditor reviewing a control set that leans heavily on IFU warnings for risks that could have been designed out will ask why the higher-order options were not taken — and "it was cheaper" is not an acceptable answer under the AFAP principle.

After controls are implemented, you must **verify** two things: that the control was actually implemented (verification of implementation) and that it is **effective** at reducing the risk (verification of effectiveness). The second is the one teams shortchange. A dose-limit feature that exists in the design but was never tested to confirm it actually prevents the over-dose under realistic conditions is not a verified control. ISO 14971 also requires you to check whether any risk control **introduced new hazards or hazardous situations** — adding a needle guard can introduce an actuation-failure hazard — and to fold those back into the analysis.

## Residual risk and overall residual risk

After all controls are in place and verified, each remaining risk is the **residual risk**, evaluated against the acceptability criteria. If a residual risk is still unacceptable and no further control is feasible, the only remaining path is a benefit-risk analysis to determine whether the medical benefit justifies the residual risk.

ISO 14971:2019 also makes explicit the evaluation of **overall residual risk** — the aggregate of all residual risks considered together. Individually acceptable risks can sum to an unacceptable whole: a device with a dozen "minor, acceptable" residual risks may still impose an overall burden on the user that no single line item captures. The overall residual risk evaluation is a deliberate step, decided by a method defined in the plan, and disclosed to users where relevant (often through the IFU). Inspectors increasingly look for this step specifically, because it was a known weak point under the older edition.

## Benefit-risk determination

For any residual risk judged unacceptable against the criteria, and for the overall residual risk, ISO 14971 requires a **benefit-risk determination**: a documented judgment that the benefits of the intended use outweigh the residual risk. Benefit here is the positive impact on clinical outcome, patient health, or patient management, weighed against the probability and severity of harm.

This determination must rest on evidence — clinical evaluation data, literature, equivalence to existing devices, post-market data — not assertion. Under the MDR, benefit-risk is woven through the clinical evaluation (Annex XIV) and the general safety and performance requirements (Annex I), so the ISO 14971 benefit-risk record and the clinical evaluation report have to tell a consistent story. A benefit-risk conclusion in the RMF that contradicts the clinical evaluation is an obvious and serious inconsistency.

## Production and post-production feedback

The part of ISO 14971 most often treated as an afterthought, and most often cited, is the **production and post-production information** requirement. Risk management does not end at release. The standard requires a system to actively collect and review information generated during production and after the device is on the market, and to feed it back into the RMF.

Sources include:
- Production and in-process monitoring (yields, nonconformances, CAPA)
- Complaints and service reports
- Adverse event and vigilance data
- Post-market surveillance and, where applicable, post-market clinical follow-up
- Information on similar devices and state-of-the-art changes

The required loop: when new information arrives, evaluate whether it affects the risk analysis (new hazards, changed probability estimates, controls that are not performing as assumed), whether previously acceptable risks are no longer acceptable, and whether the benefit-risk conclusion still holds. If it does affect the file, the RMF must be updated and the changes traced through. Under the MDR this dovetails with the post-market surveillance plan and the periodic safety update report (PSUR); under FDA's framework it connects to complaint handling, MDR adverse event reporting (21 CFR Part 803), and CAPA (21 CFR 820.100).

The classic failure mode: a complaint trend shows a control failing in the field, the complaint system processes it as an isolated event, and nobody updates the risk file. The control is documented as effective in the RMF while the field data say otherwise. That disconnect — a live RMF that no longer matches reality — is exactly what a thorough inspector probes by cross-referencing complaint data against the risk file's stated control effectiveness.

## ISO 14971 versus ICH Q9: same goal, different machinery

ICH Q9(R1), *Quality Risk Management*, is the pharmaceutical world's risk framework — a principles-and-tools document. It establishes that quality risk should be assessed on scientific knowledge, linked ultimately to patient protection, with effort proportionate to risk. It is deliberately tool-agnostic, pointing to FMEA, FMECA, FTA, HACCP, HAZOP, PHA, and risk ranking, and lives inside the ICH Q8/Q9/Q10 system. The R1 revision sharpened guidance on subjectivity, formality of QRM, and risk-based decision-making.

Where they align:
- Both demand risk assessment grounded in science and evidence, not opinion.
- Both scale rigor to risk (Q9's proportionality; ISO 14971's AFAP/state-of-the-art).
- Both require the risk conclusion to be documented and revisited as new information arrives.
- Both ultimately point at patient safety.

Where they differ in a way that matters operationally:

| Dimension | ISO 14971 | ICH Q9 |
|---|---|---|
| Object of analysis | A specific device and its harms to patient/user | Quality risks to the product and, through it, the patient |
| Core unit | Hazard → hazardous situation → harm, with severity × probability | Risk to quality attributes; severity, probability, often detectability |
| Lifecycle anchor | Risk management file across design, production, post-production | QRM integrated in the pharmaceutical quality system (ICH Q10) |
| Acceptability | Manufacturer-defined criteria, AFAP, overall residual risk | Proportionate effort; risk acceptance decisions, no fixed matrix mandated |
| Detectability | Not a primary risk factor in the estimate (it's a control attribute) | Frequently included (e.g., RPN in FMEA) |

That last row trips up combination product teams. A device-side hazard analysis under ISO 14971 estimates risk from severity and probability of harm; detectability is treated as a *control* that lowers probability, not as a third multiplier. A pharma FMEA under Q9 often bakes detectability straight into a risk priority number. Run the same FMEA twice with two different conventions and you get two different prioritizations for the same failure. When the device and drug-quality teams share an FMEA on a combination product, they need to agree up front on the scoring convention, or the two functions will argue past each other.

## Combination products: where you satisfy both

A **combination product** — under the FDA definition at 21 CFR Part 3, a product combining a drug, device, and/or biological product — must comply with the relevant requirements for *each* constituent part. The FDA's current good manufacturing practice framework for combination products, 21 CFR Part 4, lets a manufacturer operate primarily under either the drug cGMP (21 CFR 210/211) or the device QSR (21 CFR 820), but then requires bringing in the specified provisions from the *other* framework. For a drug-led combination product operating under 211, Part 4 explicitly pulls in key device-system elements — including design controls (820.30), which is where device risk analysis lives.

The practical consequence: a prefilled syringe or autoinjector team cannot satisfy its obligations with an ICH Q9 quality risk assessment alone. The device constituent needs an ISO 14971 risk management file — hazard analysis, control hierarchy, residual risk and overall residual risk evaluation, benefit-risk, and the production/post-production loop — and the drug constituent needs Q9-style quality risk management for the formulation, container closure integrity, manufacturing, and stability. Use-related risk analysis (IEC 62366-1) and, for any embedded software, IEC 62304 also apply to the device side.

Where the two rails must be stitched together rather than run separately:

- **The interface failures.** The hazards that are unique to the combination — drug-device interaction, delivered-dose accuracy across the device's mechanical tolerances, container closure integrity over device actuation, extractables and leachables from the device into the drug — sit in the seam. Neither a pure Q9 nor a pure 14971 analysis owned by one team will catch them unless the interface is explicitly scoped to one file with the other referenced. A common structure is to make the ISO 14971 RMF the integrating document for harms reaching the patient, while the Q9 assessments feed it the drug-quality probability inputs.
- **Consistent severity scales.** If the device hazard analysis grades an under-dose as "serious" and the drug-quality assessment treats the same delivered-dose failure as a lower-tier quality deviation, the combination product has two contradictory views of the same harm. Align the harm definitions across both rails.
- **One benefit-risk story.** The ISO 14971 benefit-risk determination, the clinical/quality risk picture, and the marketing application's overall benefit-risk must agree. Reviewers read across them.
- **One feedback loop, or two that talk.** Production and post-production information has to flow into both the device RMF (per ISO 14971) and the pharmaceutical quality system (per ICH Q10 / Q9). A field signal about delivery failures is simultaneously a device complaint and a drug-quality signal; the systems must reconcile, not silo.

## What reviewers and inspectors actually look for

Distilled from how device and combination-product reviews tend to run:

- **A plan written first.** Acceptability criteria and the overall-residual-risk method dated before the analysis, not after.
- **Traceability that closes.** Every hazard to a risk estimate; every above-threshold risk to a verified control; every control checked for effectiveness *and* for new hazards introduced.
- **The hierarchy applied in order.** Higher-order controls used where feasible, with a justification when reliance falls to information-for-safety; no AFAP shortcuts excused by cost.
- **Effectiveness verification, not just implementation verification.** Evidence the control actually reduces the risk under realistic conditions.
- **Overall residual risk evaluated explicitly,** and disclosed where relevant.
- **A benefit-risk record consistent with the clinical evaluation** and the application.
- **A live post-production loop** with documented evidence that field and production data were evaluated for risk impact and the RMF updated when warranted.
- **For combination products, both rails present and reconciled** — an ISO 14971 RMF for the device constituent, Q9 QRM for the drug constituent, a single coherent treatment of interface hazards, aligned severity scales, and one benefit-risk conclusion.

The standard is unforgiving in one specific way: it is a process you have to *live*, not a document you produce once. A risk management file assembled for a submission and then frozen while complaints accumulate is, by the standard's own logic, non-conforming — the requirement to feed production and post-production information back into the file is as binding as the requirement to do the analysis up front. The cleanest signal of a mature program is not a polished initial RMF; it is an RMF with a visible history of updates because real-world evidence told the team something they did not know at release.

## Key references

- ISO 14971:2019 and ISO/TR 24971 (guidance on application).
- ISO 13485:2016 (device QMS); IEC 62366-1 (usability engineering); IEC 62304 (device software lifecycle).
- ICH Q9(R1), *Quality Risk Management*; ICH Q10, *Pharmaceutical Quality System*.
- Regulation (EU) 2017/745 (MDR), Annex I (safety and performance) and Annex XIV (clinical evaluation).
- FDA: 21 CFR Part 820 and the QMSR amendment; 820.30 (design controls); 21 CFR Part 3 and Part 4 (combination products); 21 CFR Part 803 (medical device reporting).
