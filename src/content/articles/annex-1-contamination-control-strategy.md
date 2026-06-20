---
title: "EU GMP Annex 1 and the Contamination Control Strategy"
description: "How the 2022 Annex 1 revision elevated the Contamination Control Strategy from implicit good practice to a documented, holistic requirement — what it must contain and how inspectors test it."
pubDate: 2026-06-20
tags: ["Annex 1", "Contamination Control Strategy", "sterile manufacturing", "aseptic processing", "QRM", "ICH Q9", "isolators", "environmental monitoring"]
pillar: "sterility-microbiology"
tier: "Advanced"
---

The European Commission's revised Annex 1, *Manufacture of Sterile Medicinal Products*, was published in August 2022 and became operative on 25 August 2023, with one provision (the lyophilizer-related clause 8.123) deferred to August 2024. It replaced a 2008 document that had grown badly out of step with both the technology on a modern sterile fill line and the way regulators had come to think about microbial risk. The headline change everyone talks about is one phrase, repeated throughout the text: the **Contamination Control Strategy**, or CCS.

If you are new to sterile manufacturing, here is the orientation. Sterile products — injectables, ophthalmics, some inhalation products — cannot tolerate microorganisms, endotoxin, or particulate beyond extremely tight limits, because they bypass the body's natural barriers. You assure that sterility in one of two ways: you sterilize the product in its final container (terminal sterilization), or, when the product cannot survive that heat or radiation, you assemble it from sterilized components under conditions designed to keep contamination out (aseptic processing). Aseptic processing is the harder problem, and most of Annex 1 is written around it. The CCS is the revision's answer to a recurring inspection finding: facilities had dozens of individual controls — gowning, air classification, monitoring, sanitization — but no single document showing those controls were chosen deliberately, fit together, and actually covered the risks. Annex 1 now demands that document.

## What changed, and why a CCS

The 2008 Annex 1 was prescriptive about cleanroom grades and particle limits but said almost nothing about *how you decide* which controls you need. The revision, developed jointly by the European Commission, EMA, and PIC/S (so the PIC/S version of Annex 1 is materially identical and applies across PIC/S member inspectorates), reframes the whole problem around Quality Risk Management. The text states plainly that contamination control and steps to assure sterility should not rely on any single control or end-product test, but on a layered set of controls designed using QRM principles. The CCS is the artifact that captures that design logic.

Two ideas drive the revision. First, **barrier technology should be the default, not the exception.** Annex 1 now states that, for aseptic processing, isolators or Restricted Access Barrier Systems (RABS) should be considered, and that the choice must be justified within the CCS. The era of an open Grade A fill line staffed by gowned operators is, for new facilities, effectively over. Second, **monitoring is for verification, not control.** You cannot monitor your way to sterility. Environmental and personnel monitoring data confirm that a validated, well-designed process is staying in its state of control; they do not create that control. The CCS forces you to articulate the controls first, then show how monitoring proves they hold.

## Where the CCS sits relative to ICH Q9 and Q10

The CCS is not a free-standing idea. It is a sterile-manufacturing application of the ICH quality framework.

**ICH Q9(R1), *Quality Risk Management*** (the R1 revision was finalized in 2023, adding material on subjectivity, formality of risk management, and risk-based decision-making) provides the method. Every choice in a CCS — why this air classification, this gowning regimen, this monitoring frequency, this transfer method — should trace to a documented risk assessment. Annex 1 explicitly invokes QRM and expects the assessments to be science-based and current.

**ICH Q10, *Pharmaceutical Quality System***, provides the home. The CCS lives inside your PQS. It is not a one-time document you write to pass an inspection; it is a managed element subject to change control, periodic review, management review, and continual improvement. A CCS that has not been touched since the validation campaign is a CCS that has decayed.

**ICH Q9 and Q10 connect to ICH Q12** (lifecycle management) and the broader Q8–Q11 set when you think about how process knowledge accumulates. The practical point: a CCS is a living synthesis of process understanding, not a checklist. Inspectors increasingly probe whether the people maintaining it understand *why* each control exists.

## What a Contamination Control Strategy must contain

Annex 1 (in the section that defines the concept, around clauses 2.3–2.5 of the published text) lists elements that should be considered in the CCS. It is deliberately not a fill-in-the-blank template — the regulator wants you to assemble a site-specific strategy — but the listed elements are the inspectable backbone. A defensible CCS addresses each of the following and, critically, shows how they interact.

| CCS element | What it covers | Common failure mode |
|---|---|---|
| Facility & equipment design | Cleanroom layout, airlocks, pressure cascade, finishes, equipment as a contamination source | Design rationale undocumented; "as built" diverges from "as designed" |
| Premises & utilities | HVAC, water systems (WFI/PW), compressed gases, steam | Gas filters and water loops treated as separate programs, not in the CCS |
| Personnel | Gowning qualification, behavior, numbers in the cleanroom, flow | Gowning re-qualification lapses; operator interventions not risk-assessed |
| Raw materials & components | Bioburden and endotoxin control on incoming items, container/closure | Component bioburden trends not fed back into the strategy |
| Product containers & closures | Integrity, sterilization, handling | CCIT strategy disconnected from the CCS |
| Process & in-process controls | Aseptic process design, sterilizing-grade filtration, holding times | No link drawn between APS results and routine controls |
| Environmental & process monitoring | Viable/non-viable particle monitoring, surfaces, personnel | Monitoring presented as the control rather than its verification |
| Cleaning & disinfection | Agents, rotation, sporicidal use, validated efficacy | Disinfectant efficacy not validated against site isolates |
| Quality systems linkage | Deviations, CAPA, change control, trending | CCS not updated after a contamination event |

The structure that holds up under inspection is one that, for each major risk, names the **hazard**, the **control(s)** that mitigate it, the **monitoring** that verifies the control, and the **residual risk** that remains. A simple traceable form is a risk-to-control matrix: every identified contamination route maps to one or more controls, and every control maps to evidence that it works.

## Barrier technology: RABS vs. isolators in the CCS

Because Annex 1 pushes barrier technology, the CCS has to take a position on it and justify that position. The two dominant approaches differ in how completely they separate the critical zone from the operator.

**RABS (Restricted Access Barrier Systems)** put a rigid barrier and Grade A airflow over the critical zone, with gloveports for routine intervention. A "closed" RABS keeps the doors shut throughout processing; an "open" RABS permits defined door openings under procedure. RABS still sit inside a Grade B background room, because operators are in the same room and open interventions are possible. That Grade B background is itself a substantial monitoring and gowning burden.

**Isolators** fully enclose the critical zone and decontaminate the interior, typically with vapor-phase hydrogen peroxide (VHP), to a validated log reduction against a resistant biological indicator (commonly *Geobacillus stearothermophilus* spores). A validated isolator can sit in a lower-classified background (Annex 1 discusses a Grade C or even Grade D background depending on the application and justification), because the operator never breaches the critical zone. The trade is decontamination cycle development and validation, glove integrity management, and aeration of residual peroxide to levels that will not degrade the product.

| Attribute | Open RABS | Closed RABS | Isolator |
|---|---|---|---|
| Background classification | Grade B | Grade B | Grade C/D (justified) |
| Operator-to-critical-zone separation | Partial | High | Complete |
| Bio-decontamination | Manual disinfection | Manual disinfection | Automated VHP, validated log kill |
| Glove integrity program | Required | Required | Required, and more critical |
| Typical contamination risk | Moderate | Low–moderate | Lowest |

The CCS must record *why* the chosen technology fits the product and process, and must treat the failure modes of that technology as named hazards. For an isolator, glove breaches and VHP cycle failure are the headline risks — which is why Annex 1 expects a glove integrity testing program (physical or pressure-based, with a defined frequency and acceptance criteria) and validated decontamination cycles, not just a visual glove check. For RABS, the headline risk is the open-door intervention, which must be choreographed, time-limited, and proven not to compromise Grade A conditions.

## Air classification and monitoring acceptance criteria

The grade system survived the revision, but the limits were sharpened. The four cleanroom grades and their non-viable particle limits, at rest and in operation, remain anchored to ISO 14644-1 classification methodology. The change with the most operational impact: Annex 1 now specifies a limit for the **≥5 µm particle size in Grade A** of **20 particles/m³** in operation, where the prior text had treated the Grade A 5 µm count as not applicable / effectively unmeasurable. That single number has driven re-qualification work across the industry.

Non-viable airborne particle limits (per Annex 1, aligned to ISO 14644-1):

| Grade | ≥0.5 µm at rest | ≥5 µm at rest | ≥0.5 µm in operation | ≥5 µm in operation |
|---|---|---|---|---|
| A | 3,520 | 20 | 3,520 | 20 |
| B | 3,520 | 29 | 352,000 | 2,900 |
| C | 352,000 | 2,900 | 3,520,000 | 29,000 |
| D | 3,520,000 | 29,000 | not defined | not defined |

For viable monitoring, Annex 1 sets action limits for Grade A at effectively **no growth** — the expectation is that a single colony-forming unit recovered in Grade A is investigated. The widely-cited maximum limits for viable contamination:

| Grade | Air sample (CFU/m³) | Settle plate, 90 mm (CFU/4 hr) | Contact plate, 55 mm (CFU/plate) | Glove print, 5 fingers (CFU) |
|---|---|---|---|---|
| A | no growth (<1) | no growth (<1) | no growth (<1) | no growth (<1) |
| B | 10 | 5 | 5 | 5 |
| C | 100 | 50 | 25 | — |
| D | 200 | 100 | 50 | — |

A trap here: these are *maximum* limits, not your alert/action limits. Annex 1 expects you to set your own alert and action levels from your own historical data and trend against them. A facility that uses the table values as its action limits and ignores its own much tighter normal distribution is not actually trending — and inspectors notice. The CCS should describe how these limits are derived and reviewed.

The revision also pushed **continuous monitoring** for Grade A. Viable and non-viable monitoring of the Grade A zone should run for the duration of critical processing, including setup, so that an excursion during a fill can be tied to the affected units. Rapid and alternative microbiological methods (RMM) are explicitly encouraged where they shorten time-to-result, and the CCS is the place to justify adopting them.

## Aseptic Process Simulation (media fills)

The aseptic process simulation, or media fill, is where the CCS meets evidence. The principle: substitute a microbiological growth medium for product and run the process as you actually run it, then incubate the filled units and look for growth. Annex 1's acceptance expectation is stringent and worth knowing cold, because inspectors probe it directly:

- Fewer than 5,000 units filled: no contaminated units. A single positive triggers investigation, including consideration of a repeat run.
- 5,000 to 10,000 units: one contaminated unit warrants investigation, including consideration of a repeat run; two positives are cause for revalidation after investigation.
- More than 10,000 units: one contaminated unit triggers investigation; two positives are cause for revalidation after investigation.

Across every run size the target is zero, and any positive is investigated thoroughly — the unit-count thresholds govern when a result also forces revalidation, not whether a single positive can be ignored.

The simulation must be representative: it should incorporate the worst-case interventions, the maximum number of operators and their normal activities, shift changes, and the longest permitted process duration. Designing a media fill that quietly avoids the riskiest interventions is a classic way to pass a media fill and fail reality. The CCS should connect APS design to the routine interventions it is meant to qualify, and APS results should feed back into the CCS as evidence (or counter-evidence) that the controls hold. Media fills are run on a defined periodic basis (commonly twice per year per line, per shift configuration) and after significant change.

## How inspectors test a CCS

Knowing the document exists is not the same as having one that survives contact with an inspector. EU GMP inspectors, MHRA inspectors, and PIC/S-trained inspectors generally, have converged on a recognizable line of questioning. The pattern:

**They start holistic, then drill.** The opening move is often "show me your CCS." A weak response hands over a binder that is really a table of contents pointing at thirty other SOPs. A strong response is a document that *reasons* — it states the contamination risks for this product on this line and walks through how the layered controls address each. Inspectors are testing whether the CCS is a synthesis or a stapler.

**They trace a single risk end to end.** Expect a question like: "Walk me through how you control contamination from operator interventions at the filling point." A good answer moves from the hazard, to the barrier design that minimizes the need to intervene, to the procedure governing the intervention, to the media fill that qualified it, to the monitoring that watches it, to the trend data that shows it staying in control, to the deviation history when it did not. Any break in that chain is a finding.

**They cross-check the CCS against reality.** The CCS says the pressure cascade is X; the inspector reads the magnehelic gauges. The CCS describes gowning qualification; the inspector pulls the records and checks re-qualification dates. The CCS claims disinfectant efficacy is validated; the inspector asks for the validation study and checks whether it was run against organisms actually recovered from the site, including spore-formers and any objectionable isolates. A CCS that describes an idealized facility rather than the real one is worse than no CCS.

**They probe the feedback loops.** "When did you last update the CCS, and why?" If the answer is "at issue, two years ago," and the site has had environmental excursions, a contamination event, or a facility modification since, the strategy is not being managed as a living element of the PQS. Inspectors look specifically for evidence that deviations, out-of-limit monitoring trends, and change controls flow back into the CCS.

**They examine ownership and competence.** A CCS authored by one person who has since left, that no current staff member can defend, is a red flag. The revision's emphasis on QRM means inspectors expect the people running the line to understand the risk basis of their own controls.

Findings here are not minor. A CCS that is absent, fragmentary, or contradicted by the floor maps directly to deficiencies under the core GMP principle that sterility assurance must be built in and risk-managed — the kind of finding that escalates to major or critical and, in serious cases, to restrictions on certifying batches.

## Building and maintaining a defensible CCS

A workable sequence for assembling one, for a team starting from scattered controls:

1. **Map the process and the facility.** Produce current, accurate flow diagrams: material flow, personnel flow, air flow, waste flow. Most contamination routes reveal themselves as crossings on these maps.
2. **Run the risk assessments.** Use a QRM method appropriate to the question (FMEA for component-level analysis, HACCP-style hazard mapping for process flow, or a structured risk-ranking). Document hazard, likelihood, severity, detectability where used, and the resulting control. ICH Q9(R1)'s caution about subjectivity applies — make the scoring rationale explicit.
3. **Inventory and link the controls.** For each hazard, name the control(s) and the evidence they work: qualification, validation, media-fill results, monitoring data.
4. **Define verification.** Specify the monitoring that confirms each control, with alert/action limits derived from data, and the trending that watches for drift.
5. **State residual risk and acceptance.** Where risk remains after controls, say so, and record who accepted it and on what basis.
6. **Wire it into the PQS.** Define the triggers that force a CCS review: deviations above a threshold, adverse monitoring trends, facility or process change, new objectionable isolate, recurring intervention. Put the CCS on a periodic review cycle and into management review.

The single most common structural weakness is treating the CCS as a *description* of controls rather than a *justification* of them. The 2008 mindset asked "what controls do we have?" The Annex 1 mindset asks "what are the risks, and can we prove these controls cover them?" A CCS that answers the second question survives inspection; one that only answers the first does not.

## Where this connects outward

The CCS does not live alone. It interlocks with **container closure integrity testing**, since a sterile product that loses integrity post-fill is no longer sterile regardless of how clean the line was — Annex 1 expects a defined CCIT strategy, and that strategy belongs inside the CCS narrative. It interlocks with **water and gas systems**, since WFI, pure steam, and sterile-filtered process gases are direct contamination routes that some sites wrongly silo into utilities programs. It interlocks with **sterilizing-grade filtration**, where filter validation (bacterial retention, the 0.22/0.2 µm rated membrane, redundant filtration where justified, and pre/post-use integrity testing) is a load-bearing control that the CCS must reference rather than assume.

For practitioners working under both EU GMP and US FDA frameworks, the conceptual overlap is strong even though the words differ. FDA's 2004 guidance *Sterile Drug Products Produced by Aseptic Processing — Current Good Manufacturing Practice*, the cGMP regulations in 21 CFR Parts 210 and 211, and FDA's expectations around contamination control all push the same direction: layered, risk-based control verified by monitoring, not assured by end-product testing alone. A well-built CCS satisfies the spirit of both. The difference Annex 1 forced is the requirement to write the strategy down as one coherent, maintained document — and to be able to defend every line of it when an inspector traces a single microbe's possible path from the air handler to the open vial.

That is the real test of the revision. The grades, the limits, the barrier technology — those are inputs. The CCS is the proof that someone thought about how they fit together, wrote it down, and keeps it true.
