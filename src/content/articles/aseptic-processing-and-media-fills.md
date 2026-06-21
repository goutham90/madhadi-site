---
title: "Aseptic Processing and Aseptic Process Simulations (Media Fills)"
description: "A working reference on how sterile drug products are made by aseptic processing and how media fills qualify the line: cleanroom grades, gowning, intervention design, acceptance criteria, and what inspectors check."
pubDate: 2026-06-20
tags: ["aseptic processing", "media fill", "Annex 1", "sterile manufacturing", "cleanroom", "process simulation", "FDA aseptic guidance", "contamination control"]
pillar: "sterility-microbiology"
tier: "Advanced"
---

A sterile injectable has to be free of viable microorganisms when it reaches a patient, because there is no liver, no gut wall, and no time for an immune response to intercept a contaminant injected directly into tissue or bloodstream. There are two fundamentally different ways to get there. The first is **terminal sterilization**: fill the product, seal it, and then sterilize the sealed container, usually by moist heat in an autoclave. The container itself becomes the sterilizing barrier and you can prove, with a probability of a nonsterile unit (PNSU) of one in a million or better, that the lot is sterile. The second is **aseptic processing**: sterilize the drug, the container, the closure, and every contact surface separately, then bring them together and fill under conditions that are clean enough to keep contamination out.

Terminal sterilization is the more solid of the two, and regulators expect you to use it whenever the product can tolerate it. The decision tree in the European Pharmacopoeia and EU GMP makes this explicit: a sterilizing process should be chosen on the basis of its sterility assurance, and aseptic processing is reserved for products that cannot survive a terminal cycle. Most biologics, many peptides, cell and gene therapies, and any molecule that degrades under heat or radiation fall into that category. That is why aseptic processing is common across the modern sterile pipeline despite being the harder path to control. The same controls apply whether the line fills a small-molecule injectable, a monoclonal antibody, a vaccine, an ophthalmic, or an autologous cell product; only the scale and a few product-specific details change.

This article is about that harder path, and specifically about the test that proves you can walk it: the **aseptic process simulation**, almost universally called the **media fill**. A media fill substitutes a sterile microbiological growth medium for the actual drug and runs the line as if it were making product. If the units stay sterile, you have evidence the process can produce sterile product. If they don't, you have a problem you must understand before you make another lot.

## The regulatory frame

Three sources do most of the work here, and a practitioner should know what each one is for.

- **FDA's 2004 guidance, *Sterile Drug Products Produced by Aseptic Processing, Current Good Manufacturing Practice*.** This is the long-standing U.S. reference. It defines cleanroom air classifications by particle count, sets expectations for personnel, environmental monitoring, and validation, and lays out the media-fill program: frequency, size, and acceptance criteria. It remains current; FDA has not superseded it.
- **EU GMP Annex 1, *Manufacture of Sterile Medicinal Products*.** The revised Annex 1 became effective on 25 August 2023 (with the lyophilization provisions in point 8.123 following on 25 August 2024). It is the most demanding and most current articulation of expectations, and it introduced the **Contamination Control Strategy (CCS)** as an organizing requirement: a documented, holistic view of every control that keeps the product sterile, with the gaps and interactions made visible. Annex 1 is an EU document, but because it is the newest and strictest, it has effectively become the global benchmark; PIC/S adopted an aligned version (PI 032), so it reaches inspectors well beyond Europe.
- **The United States Pharmacopeia chapters on sterility and microbiological control**, including USP General Chapter <71> Sterility Tests, USP <1116> on microbiological evaluation of cleanrooms and other controlled environments, and USP <797> for compounding. ISO 14644 supplies the cleanroom classification and monitoring methodology that the GMP documents reference.

Underneath all of these sits 21 CFR Part 211, the U.S. cGMP regulations for finished pharmaceuticals. The subparts on production and process controls (211.100, 211.110, 211.113 on control of microbiological contamination) and on laboratory controls (211.165, 211.167 on sterility testing) are the legal hooks FDA cites in a Form 483 or warning letter when aseptic controls fail. For a deeper read on the underlying regulation, see [CFR 210/211 cGMP walkthrough](/articles/cfr-210-211-cgmp-walkthrough) and the Annex 1 piece, [Annex 1 and the Contamination Control Strategy](/articles/annex-1-contamination-control-strategy).

## Cleanroom grades: A, B, C, D

Aseptic processing happens inside classified cleanrooms, and the grading system is the spine of the whole discipline. EU GMP and Annex 1 use letter grades; ISO 14644 uses numbered classes; the FDA guidance uses ISO classes directly. They map onto each other but not perfectly, and the differences matter.

| EU GMP grade | At rest (max particles/m3 >=0.5 um) | In operation (max particles/m3 >=0.5 um) | Rough ISO 14644-1 equivalent | Typical use |
|---|---|---|---|---|
| A | 3,520 | 3,520 | ISO 5 at rest and in operation | The critical zone: open filling, stopper bowls, exposed sterile product and containers |
| B | 3,520 | 352,000 | ISO 5 at rest, ISO 7 in operation | Background to grade A for aseptic operations |
| C | 352,000 | 3,520,000 | ISO 7 at rest, ISO 8 in operation | Less critical preparation steps |
| D | 3,520,000 | Not defined by Annex 1 | ISO 8 at rest | Earlier stages, component prep |

Annex 1 also sets a separate limit at the larger >=5 um particle size (for example 29 particles/m3 in grade A) and treats a sustained count at that size as an early warning of a developing problem. The numbers above are the headline >=0.5 um limits, which is what most people quote.

The two facts to internalize. First, **a grade A zone holds ISO 5 both at rest and in operation**; it does not degrade when people and machines are working, because it is protected by unidirectional (laminar) airflow at roughly 0.36 to 0.54 m/s, continuously sweeping particles away from the exposed product. Annex 1 frames that velocity as a guidance value to be justified for the specific equipment, not a hard pass/fail number, and the proof is the airflow visualization study, not the anemometer alone. Second, **the grade distinction is about what happens "in operation," not just "at rest."** Anyone can certify an empty room to ISO 5. The discipline is holding the class while operators move, machines run, and interventions happen.

Annex 1 pushed the industry hard toward removing the human from the grade A zone entirely. Its stated preference is for **barrier technology**, restricted access barrier systems (RABS) and, better still, **isolators**, over the conventional manned cleanroom. An isolator physically separates the operator from the critical zone with a sealed enclosure and glove ports, and is decontaminated by a sporicidal process (vaporized hydrogen peroxide is the common method). The logic is simple and unforgiving: the operator is the single largest source of contamination in a cleanroom, so the strongest control is to get the operator out of the air around the exposed product. A new sterile facility designed in the last few years that is *not* using isolators or closed RABS should expect to defend that choice in detail. For the classification mechanics, see [Cleanroom classification per ISO 14644](/articles/cleanroom-classification-iso-14644).

## Environmental monitoring: proving the room stays clean

Classifying a room is a one-time-per-period qualification. **Environmental monitoring (EM)** is the ongoing evidence that it stays in control. A monitoring program covers four things:

1. **Non-viable particle counts**, continuous in grade A and frequent in grade B during operations, against the ISO 14644 limits.
2. **Viable air monitoring**, by active air sampling (a volumetric sampler drawing a known air volume onto an agar plate) and passive settle plates (open agar exposed for a defined period, conventionally up to four hours per plate in grade A/B).
3. **Surface monitoring**, by contact (RODAC) plates and swabs of equipment, walls, and floors.
4. **Personnel monitoring**, by contact plates of gloved fingers and gown locations after critical interventions and on exit.

Annex 1 sets the headline expectation that the grade A zone should show **no growth**; the recommended action limit for viable contamination in grade A is effectively zero CFU across active air, settle plate, contact plate, and glove print. Any recovery of a microorganism from a grade A location is a signal that demands investigation, because by design nothing living should survive there. The lower grades carry numerical alert and action limits that tighten as you move from D to B. The point of EM is not to "pass" but to detect drift early: a rising trend of a particular organism, a recurring isolate at one location, or a single grade A excursion are all data the contamination control strategy is supposed to act on before a batch is at risk.

Build the EM program around an organism identification and isolate library. When a media fill, a sterility test, or a routine EM plate goes positive, the first question is "what grew, and have we seen it before." See [Environmental monitoring program](/articles/environmental-monitoring-program) and [Microbial ID and EM excursions](/articles/microbial-id-and-em-excursions) for how to run that.

## Gowning and gowning qualification

Every operator who enters grade B is a walking shedder of skin cells, each carrying microorganisms, at a rate of millions per hour. The gown is a barrier that traps that shedding. A full aseptic gown for grade A/B work covers everything: sterile hood and mask leaving no skin exposed, sterilized one-piece or two-piece suit, sterile boots, and sterile gloves, all donned in a defined sequence inside an airlock so the outer surfaces never touch an unclassified surface.

**Gowning qualification** is the formal demonstration that a specific person can gown correctly and keep the gown's microbial load within limits. The typical program:

- Training and an initial demonstration of correct aseptic gowning technique, observed and documented.
- **Three consecutive successful gowning qualifications**, each verified by contact plates taken at defined gown locations, fingertips of both gloves, forearms, chest, and facemask region, meeting the grade A/B surface limits.
- **Periodic requalification**, commonly annual, plus requalification triggered by an EM excursion attributable to a person or by a documented gowning deficiency.

Critically, **personnel access to the aseptic area is gated on current media-fill participation as well as gowning qualification.** An operator who has not taken part in a successful media fill within the program's defined interval is not qualified to work on the line. This couples the individual to the process: the people who run the line are the same people who proved the line works.

### Worked example: a gowning qualification record

| Location sampled | Method | Grade B action limit (CFU) | Run 1 | Run 2 | Run 3 | Result |
|---|---|---|---|---|---|---|
| Left glove fingertips (5 fingers) | Contact plate | <=5 | 0 | 1 | 0 | Pass |
| Right glove fingertips (5 fingers) | Contact plate | <=5 | 0 | 0 | 0 | Pass |
| Forearm | Contact plate | <=5 | 1 | 0 | 0 | Pass |
| Chest | Contact plate | <=5 | 0 | 0 | 0 | Pass |
| Facemask / forehead | Contact plate | <=5 | 0 | 0 | 0 | Pass |

Three consecutive runs all within limit qualifies the operator. The glove fingertip print is the most sensitive location and the one inspectors look at first, because the hands are what enter the critical zone. Note that grade A glove and gown limits are effectively zero, so an operator working directly in grade A (gloved hands inside an isolator or under laminar flow) is held to the tighter target.

## Interventions: the part that actually contaminates product

The media fill's real job is to challenge the **interventions**, the moments when the controlled state is perturbed. Interventions split into two kinds, and the distinction drives the whole design.

- **Inherent (routine) interventions** are the ones built into every batch: setting up the line, environmental monitoring, weight checks, removing the occasional fallen or tipped container, replenishing stoppers, replacing a roll of filling tubing on schedule. These are planned, written into the batch record, and happen on every lot.
- **Corrective (non-routine) interventions** are the unplanned ones: clearing a jam, fixing a misfeed, responding to a stopped machine, retrieving a broken container. They are not on a schedule, but they are foreseeable, and they are where contamination most often enters because they put a hand or a tool into the critical zone under stress.

A defensible media-fill design enumerates **every intervention type the process allows** and incorporates them into the simulation at a frequency that represents, or deliberately exceeds, worst-case routine production. Annex 1 is explicit that the simulation should challenge all interventions and that any intervention not qualified in a media fill is not permitted in production. That last clause is a powerful constraint: **if an operator performs an intervention during a real batch that was never simulated, the batch's aseptic assurance is compromised**, and inspectors look hard for exactly this gap by comparing the media-fill protocol's intervention list against the actual batch records' intervention logs.

Good practice also includes designing in **worst-case conditions**: maximum line speed *or* the slowest speed with the longest container exposure time (whichever is harder to defend), the maximum number of operators and shift changes, the longest permitted campaign duration, lighting and setup at the limits of what is allowed, and deliberately fatiguing the line with the maximum allowable interventions. The simulation should represent the edges of the operating envelope, not a tidy demonstration run.

### Worked example: an intervention matrix for a vial filling line

| # | Intervention | Type | Frequency in production | Simulated in media fill | Performed at unit/time |
|---|---|---|---|---|---|
| 1 | Line setup and aseptic assembly | Inherent | Every batch start | Yes | Start |
| 2 | In-process weight/fill-volume check | Inherent | Every 30 min | Yes, x6 | Throughout |
| 3 | Active air and settle plate placement/retrieval | Inherent | Per EM plan | Yes | Throughout |
| 4 | Stopper bowl replenishment | Inherent | ~Every 60 min | Yes, x3 | Throughout |
| 5 | Operator/shift change with regown entry | Inherent | At 4 h | Yes, x1 | Mid-run |
| 6 | Remove fallen/tipped vial from track | Corrective | As needed | Yes, x5 | Distributed |
| 7 | Clear vial jam at infeed star wheel | Corrective | As needed | Yes, x3 | Distributed |
| 8 | Clear jam under filling needles | Corrective | As needed | Yes, x2 | Distributed |
| 9 | Replace broken vial and clear glass | Corrective | As needed | Yes, x1 | Distributed |
| 10 | Adjust stopper placement station | Corrective | As needed | Yes, x1 | Distributed |

Two reading rules. The number of times each intervention is simulated should meet or exceed the worst-case routine frequency, and the interventions are spread across the run rather than clustered, so operator fatigue and the full campaign time are represented. Every intervention in column two must be traceable to an authorized procedure; an undocumented "the operator reached in and fixed it" intervention is the gap inspectors hunt for.

## Media fill design and acceptance criteria

The mechanics: a sterile, filterable, growth-promoting medium, usually **soybean-casein digest medium (tryptic soy broth, TSB)**, replaces the product. The line is set up and run exactly as for product. Units are filled, stoppered, and sealed. They are then **incubated** and read for growth. The standard incubation is a two-stage scheme, commonly **7 days at 20-25 C followed by 7 days at 30-35 C**, totaling 14 days, to recover both molds and lower-temperature organisms and faster-growing bacteria (the order of the two temperature stages can be reversed if justified). Before relying on any of this, the lab must confirm the medium is **growth-promoting** by inoculating a set of post-incubation units (or a parallel set) with a low challenge (<=100 CFU) of compendial test organisms plus relevant environmental isolates and showing growth within the incubation period; a media fill read as "no growth" is meaningless unless the medium has been proven able to support growth.

Now the number that matters. The **acceptance criterion for the modern standard is zero positive units** at the relevant batch size, and the regulatory framing is tied explicitly to the fill volume:

| Number of units filled | Acceptance / action (FDA 2004 guidance and Annex 1 framework) |
|---|---|
| Fewer than 5,000 | No contaminated units. One contaminated unit is cause for revalidation, following an investigation. |
| 5,000 to 10,000 | One contaminated unit triggers investigation, possibly a repeat. Two contaminated units are cause for revalidation after investigation. |
| More than 10,000 | One contaminated unit triggers investigation; two contaminated units are cause for revalidation after investigation. |

The practical reading every quality unit should carry: **the target is zero growth.** The tiered language above describes how to *handle* a contaminated unit, not a license to expect one. Annex 1 states the goal plainly: the expectation is zero growth, and **any** contaminated unit must be investigated as a possible failure of the aseptic process. A single positive in a media fill is never a clerical event to be waved off; it is a contamination event on a line that is supposed to make sterile product, and it gets a full root-cause investigation: identify the organism (and compare it against the EM and personnel isolate library), review every intervention and operator on the run, examine the video if the line is monitored, and assess impact on product made on that line since the last successful media fill.

Two more design rules:

- **Fill size must be at least large enough to detect a low contamination rate with reasonable confidence**, which is why media fills are typically run at production-representative volumes. A run of a few hundred units gives almost no statistical power; runs of thousands are standard, and very large or continuous processes scale up accordingly. As a rough statistical floor, detecting a contamination rate of 0.1% with about 95% confidence takes on the order of 3,000 units, which is one reason the under-5,000 tier still expects a zero result.
- **Every filled unit is incubated and read.** Damaged or cosmetically defective units may be set aside, but the disposition of every unit must be accounted for and justified, and units removed from incubation must not be used to inflate the apparent pass rate. Inspectors check unit reconciliation carefully here.

### Worked example: a media fill reconciliation

| Line item | Count | Notes |
|---|---|---|
| Units filled | 6,210 | Per filling counter and physical count |
| Rejected at fill (no/low fill, cosmetic) | 95 | Documented, removed before incubation, photographed |
| Units incubated | 6,115 | Equals filled minus rejects |
| Units read at day 14 | 6,115 | 100% read, all accounted for |
| Positive (turbid) units | 0 | Acceptance met |
| Growth promotion (post-incubation challenge) | Pass | All challenge organisms grew within incubation |

Every number ties out: 6,210 filled, 95 removed with documented justification, 6,115 incubated and 6,115 read. A reconciliation that does not close, or that quietly drops turbid units into the "rejected" pile, is a finding waiting to happen.

## Frequency and the validation lifecycle

Media fills are not a one-time validation. The expectation is:

- **Initial qualification:** at least **three consecutive successful media fills** per line and process configuration before the line is released for routine aseptic production.
- **Periodic requalification:** at least **twice a year (every six months) per line and per shift/crew configuration**, so that each filling line and each crew is re-proven on a recurring basis.
- **Re-validation on change:** any significant change, new container/closure format, line modification, facility change, a new or modified intervention, an extended campaign length, or a change to the operator population, triggers an assessment and often a directed media fill before the change is adopted in production. Route these through formal [change control for validated systems](/articles/change-control-validated-systems).

This cadence is why aseptic manufacturing is sometimes described as continuously revalidated. A sterile line is never "validated once and done"; it carries a rolling obligation to keep proving itself, and a lapse in media-fill currency for a line or a crew suspends their qualification to make product.

| Trigger | Media fill response | Typical timing |
|---|---|---|
| New line commissioned | 3 consecutive successful runs | Before first commercial batch |
| Routine maintenance of currency | 1 run per line per shift | Every 6 months |
| New container/closure format | At least 1 directed run on the new format | Before adoption |
| New or modified intervention | 1 run including the new intervention | Before adoption |
| Recurring EM or sterility-test concern | 1 directed run, plus investigation | Per investigation outcome |
| Extended/longer campaign duration | 1 run at the new maximum duration | Before adoption |
| Line idle beyond a defined period | Confirm currency, repeat if lapsed | Per procedure |

## Roles and responsibilities

A media fill is a cross-functional exercise. When it goes wrong, the investigation usually shows that one of these owners did not do their part.

| Role | Responsibility on a media fill |
|---|---|
| Manufacturing / aseptic operators | Run the line as in production, perform the scripted interventions, gown and behave to standard, record what actually happened (including unscripted events) |
| Manufacturing supervisor / line lead | Confirm the crew is gowning- and media-fill-qualified, ensure interventions are executed as scripted, halt and document deviations |
| Process / validation engineering | Author the media fill protocol, design the intervention matrix and worst-case conditions, define fill size and incubation, write the report |
| Microbiology / QC lab | Prepare and sterilize the medium, run growth promotion, incubate and read units, identify any isolates, run concurrent EM and sterility testing |
| Quality Assurance | Approve the protocol and report, judge acceptance, own any investigation into a positive, gate line and personnel qualification status |
| Qualified Person (EU) / quality unit | Confirm media fill currency as part of the conditions for batch certification and release |

Clear sign-off chains matter: the people who design the simulation should not be the only ones judging whether it was hard enough. See [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) and, for the EU release angle, [Qualified Person batch release under Annex 16](/articles/qualified-person-batch-release-annex-16).

## Sterilizing-grade filtration and the rest of the chain

Aseptic filling is the last and most visible step, but it sits on top of a chain of unit operations that each have to deliver sterility:

- **Sterile filtration** of the drug solution through a **0.22 um (or finer) sterilizing-grade filter**, validated by **bacterial retention testing** against *Brevundimonas diminuta* (ATCC 19146) at a challenge of at least 10^7 CFU per cm2 of filter area, plus pre-use and post-use **filter integrity testing** (bubble point, diffusion, or pressure hold). Annex 1 strengthened expectations here, including the pre-use post-sterilization integrity test (PUPSIT) discussion, where the integrity of a sterilized filter is confirmed before use to guard against a filter flaw that sterilization or installation might have introduced; where PUPSIT is not performed, the rationale and the risk assessment must be documented.
- **Container and closure sterilization**, depyrogenation of glass vials by dry-heat tunnel (validated to reduce endotoxin by at least 3 logs), and moist-heat or irradiation sterilization of stoppers and other components. See [depyrogenation and dry-heat sterilization](/articles/depyrogenation-dry-heat-sterilization).
- **Equipment and contact-part sterilization**, typically steam-in-place or autoclaved sterilized parts handled aseptically into the line. See [sterilization validation by moist heat](/articles/sterilization-validation-moist-heat).

The media fill challenges the **assembly and filling** portion of this chain. It does not, on its own, validate filtration or depyrogenation, which carry their own validations, but a holistic contamination control strategy ties them together so that no single step is treated as the sole barrier. The released lot still has to pass [sterility testing per USP <71>](/articles/sterility-testing-usp-71), [bioburden and endotoxin testing](/articles/bioburden-and-endotoxin-testing), and [container closure integrity testing](/articles/container-closure-integrity-testing) before disposition.

## What inspectors actually look for

When an investigator examines an aseptic operation, a predictable set of questions surfaces, and a quality unit should be able to answer all of them on demand:

1. **Does the media-fill intervention list match reality?** They will pull batch records and compare the interventions actually performed on commercial lots against what was simulated. An intervention performed in production but never qualified in a media fill is a frequent and serious finding.
2. **How were media-fill failures handled?** A positive unit that was investigated thinly, attributed to "lab error" or "incubation artifact" without evidence, and not escalated is a classic warning-letter trigger. They want to see the organism identified, the source pursued, and product impact assessed.
3. **Is the grade A zone genuinely ISO 5 in operation, with smoke studies to prove it?** Airflow visualization (smoke studies) demonstrating unidirectional flow over the exposed product, with no turbulence drawing air from operators or surfaces toward the open product, is expected current practice. The studies should be filmed under dynamic conditions including interventions, not just a static empty line.
4. **Is environmental monitoring data trended and acted on, or just filed?** Recurring isolates, slow upward trends, and grade A recoveries that were closed without action are red flags.
5. **Are personnel qualified and current?** Gowning qualification, media-fill participation within interval, and aseptic-technique behavior observed during the inspection itself all get checked, and inspectors will watch operators through the viewing window.
6. **Does the Contamination Control Strategy exist as a living document** that connects facility design, utilities, personnel, process, and monitoring, or is it a binder assembled the week before the audit?

The throughline is that aseptic processing is a system, not a step. The media fill is the most direct test of that system, and its credibility rests entirely on whether it honestly reproduces, at the edges, what the line really does when it makes product. A media fill engineered to pass cleanly, with the easy interventions and the careful operators and the short campaign, tells you nothing useful. A media fill designed to be hard, with every permitted intervention performed at worst-case frequency by the actual production crew, at the limits of the operating envelope, and read with a zero-growth expectation, is one of the strongest pieces of evidence in pharmaceutical manufacturing that a patient will receive a sterile product.

## Common mistakes and recurring findings

These are the patterns that surface again and again in inspections and internal audits. None name a company; they are generic and well documented in published 483 and warning-letter trends.

- **Interventions in production that were never simulated.** The single most common serious finding. Operators improvise a fix during a real batch (reaching under the needles, re-seating a stopper by hand) that the media fill protocol never covered.
- **Media fills run "clean."** The simulation uses the best operators, the fewest interventions, the shortest run, and the smoothest conditions, then passes. It proves the line works on a good day, which is not the question.
- **Weak failure investigations.** A positive unit is dismissed as contamination during reading or "lab artifact" without identifying the organism, ruling out the line, or assessing impact on product made since the last good media fill.
- **No growth promotion, or growth promotion done late.** Reading "no growth" without proving the medium could support growth makes the whole run uninterpretable. Growth promotion that is run weeks after the fill, or fails and is quietly repeated, is a finding.
- **Reconciliation that does not close.** Filled, rejected, incubated, and read counts that do not tie out, or turbid units reclassified as cosmetic rejects to preserve a pass.
- **Currency lapses.** A line or a crew worked product while their media fill currency had expired, or an operator returned from extended leave and worked aseptically without requalifying.
- **Smoke studies that do not match the real operation.** Airflow visualization filmed on a static, empty line that never shows an operator performing an intervention over open product.
- **Grade A excursions closed without action.** A viable recovery in grade A treated as a one-off and filed, with no trend review and no link to the isolate library.
- **Settle plate exposure beyond the validated drying time**, or active-air sampler placement that does not represent the most exposed point near the open product.

## Interview questions and how to answer them

Expect these in any sterile-operations, microbiology QC, or aseptic-validation interview, and from an inspector.

**Q: When is aseptic processing justified instead of terminal sterilization?**
Only when the product cannot survive a terminal cycle. The decision follows the sterilization decision tree: choose the process with the highest sterility assurance the product can tolerate, default to moist-heat terminal sterilization, and reserve aseptic processing for heat- or radiation-labile products like most biologics, peptides, and cell and gene therapies. The justification has to be documented.

**Q: What is the acceptance criterion for a media fill?**
The target is zero growth. Any contaminated unit must be investigated as a possible aseptic process failure. The tiered language (one unit triggers investigation, two units cause revalidation in larger runs) describes how to handle a positive, not an allowance to expect one.

**Q: Why is the grade A "in operation" requirement the same as "at rest," when grade B relaxes?**
Because grade A is protected by unidirectional airflow that continuously sweeps particles away from the exposed product, so the class holds even with people and machines working. Grade B relies on dilution and air changes, which degrade under activity, so it is allowed to drop from ISO 5 at rest to ISO 7 in operation.

**Q: What is the difference between an inherent and a corrective intervention, and why does it matter for media fill design?**
Inherent interventions are routine and planned (setup, weight checks, stopper replenishment). Corrective interventions are unplanned but foreseeable (jam clears, broken-vial removal) and are where contamination most often enters. The media fill must simulate every permitted intervention of both kinds at worst-case frequency, because any intervention not qualified in a media fill is not allowed in production.

**Q: Walk me through what you do when a media fill has one positive unit.**
Quarantine and secure the unit, confirm it is true growth, then identify the organism and compare it to the EM and personnel isolate library. Review the run: every intervention, every operator, gowning data, concurrent EM, line video. Assess product impact for every lot made on that line since the last successful media fill. Decide on revalidation, additional media fills, and any product hold or recall. Document all of it as a formal investigation; do not close it as "lab error" without evidence.

**Q: What is PUPSIT and why does Annex 1 care about it?**
Pre-use post-sterilization integrity test: testing the integrity of the sterilizing-grade filter after it has been sterilized but before it is used to filter product. It guards against a filter flaw that sterilization, handling, or installation could have introduced and that a post-use test alone might mask if the flaw was plugged by product during the run. Where PUPSIT is not performed, the risk has to be assessed and the rationale documented.

**Q: How often do you run media fills, and per what?**
Three consecutive successful runs for initial qualification of a line and process. Then at least twice a year (every six months) per line and per shift or crew. Plus directed runs on significant change: new format, new intervention, line modification, longer campaign, changed operator population.

**Q: How do you prove your medium can actually detect contamination?**
Growth promotion testing: inoculate units of the same medium lot with a low challenge (<=100 CFU) of compendial organisms plus relevant in-house environmental isolates and show growth within the incubation period. Without that, a "no growth" result is uninterpretable.

## A working checklist

For a practitioner standing up or auditing an aseptic line, the load-bearing items:

- Aseptic processing is chosen only because terminal sterilization is not feasible, and that justification is documented.
- The critical zone is grade A / ISO 5 in operation, protected by unidirectional airflow, ideally inside an isolator or closed RABS, with current smoke studies under dynamic conditions.
- A Contamination Control Strategy ties every control together with the gaps made explicit (Annex 1).
- Every operator is gowning-qualified and media-fill-current; access is gated on both.
- The media-fill protocol enumerates every permitted intervention; no intervention occurs in production that was not simulated.
- Worst-case conditions, speed, duration, operator count, intervention frequency, are built into the simulation, not avoided.
- The medium is proven growth-promoting; incubation is a defined two-stage 14-day scheme; every unit is reconciled.
- The acceptance target is zero growth; any positive gets a full investigation against the isolate library, not a dismissal.
- Three consecutive media fills for initial qualification; twice-yearly per line and crew thereafter; revalidation on change.

Get those right and document them honestly, and the aseptic process simulation does what it is supposed to do: give you, and the patient, real assurance that the sterile barrier held.

---

### Related reading

- [Annex 1 and the Contamination Control Strategy](/articles/annex-1-contamination-control-strategy)
- [Cleanroom classification per ISO 14644](/articles/cleanroom-classification-iso-14644)
- [Environmental monitoring program](/articles/environmental-monitoring-program)
- [Microbial ID and EM excursions](/articles/microbial-id-and-em-excursions)
- [Sterility testing per USP <71>](/articles/sterility-testing-usp-71)
- [Sterilization validation by moist heat](/articles/sterilization-validation-moist-heat)
- [Depyrogenation and dry-heat sterilization](/articles/depyrogenation-dry-heat-sterilization)
- [Container closure integrity testing](/articles/container-closure-integrity-testing)
- [Process performance qualification (PPQ)](/articles/process-performance-qualification-ppq)
