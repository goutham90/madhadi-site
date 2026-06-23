---
title: "Sterilizing-Grade Filtration Validation"
description: "How to validate a 0.2 micron sterilizing-grade filter for a drug product, covering bacterial retention, chemical compatibility, extractables and leachables, adsorption, integrity test correlation, PUPSIT, and post-use release testing."
pubDate: 2026-06-22
tags: ["sterile filtration", "Annex 1", "PUPSIT", "filter integrity", "bacterial retention", "extractables and leachables", "aseptic processing"]
pillar: "sterility-microbiology"
tier: "Advanced"
---

Sterilizing-grade filtration is the last engineering barrier between a non-sterile bulk solution and a product that will be injected into a patient. For most large-molecule biologics, cell and gene therapy intermediates, and many small-molecule parenterals, the drug cannot survive terminal sterilization by moist heat, so the final filter is the sterility-assurance step. That makes the filter, the filtration process, and the validation behind both a high-stakes part of the dossier. Inspectors read filter validation packages closely because a filter that lets organisms through, adsorbs the active, sheds leachables, or cannot be proven intact at the point of use defeats the whole sterile process.

This article walks through what a sterilizing-grade filter actually is, what the filter vendor proves versus what the drug maker still owes, how integrity tests work and how their limits are tied to bacterial retention, the PUPSIT debate under EU GMP Annex 1 (2022), post-use testing as the release-relevant check, redundant filtration, sizing, and how to handle an integrity test failure. It closes with the inspection findings that recur and a set of interview questions.

## What "sterilizing-grade" actually means

A sterilizing-grade filter is defined by performance, not by pore size on a label. The accepted definition is a filter that produces a sterile effluent when challenged with a specified high load of a small test organism under defined conditions. The historical reference organism is *Brevundimonas diminuta* (formerly *Pseudomonas diminuta*), strain ATCC 19146, because it is one of the smallest culturable bacteria and, grown under controlled conditions, presents cells small enough to challenge a 0.2 or 0.22 micron membrane realistically.

The "0.2 micron" rating is a nominal descriptor tied to that retention performance, not a literal measurement that every pore is exactly 0.2 micron. Membranes have a pore-size distribution, and retention depends on more than sieving: adsorptive capture, the tortuous path through the membrane depth, and the cell's own size and deformability all matter. Two filters with the same nominal rating from different vendors are not interchangeable for validation purposes, and a 0.45 micron filter is not sterilizing-grade for bacteria even though it once was treated that way historically.

The standard method for the bacterial liquid challenge is ASTM F838 (current revision). The method specifies how the challenge organism is grown to yield small cells, the minimum total challenge level (on the order of 1 x 10^7 colony-forming units per square centimeter of effective filtration area), the test pressure or flow, and the requirement that the downstream effluent be cultured and show no growth. I am describing the method, not reproducing it; the controlling text sits with ASTM and should be read directly when you design a study. The headline expectation a reviewer carries is simple: at least 10^7 organisms per cm^2 challenged, zero passage detected downstream, and a demonstrated correlation between that retention and a non-destructive integrity test.

## The two halves of validation: vendor generic data versus product-specific work

A common and dangerous misconception is that buying a "validated" sterilizing-grade filter means filtration is validated. It does not. There are two distinct bodies of validation, and only one of them is the filter maker's job.

The filter manufacturer performs **generic qualification** of the filter cartridge design. Using a standard challenge fluid such as saline lactose broth or a similar surrogate, the vendor establishes that the filter family retains *B. diminuta* at the required challenge level, sets the integrity test limits for that filter type at production scale, characterizes extractables under model conditions, confirms biological safety and endotoxin limits of the device, and documents flow, throughput, and steam or gamma sterilization cycles the cartridge can withstand. This is the data in the validation guide that ships with the product.

The drug maker still owes a **product-specific (process-specific) validation**, because the generic data was generated with a surrogate fluid under conditions that are not your conditions. The actual product changes the picture: its viscosity, surfactant content, ionic strength, pH, and any antimicrobial preservative can alter how the membrane behaves and whether the challenge organism is retained. The five pillars the drug maker must establish on its own product and process are:

| Element | Question it answers | Typical study |
|---|---|---|
| Bacterial retention | Does the filter still produce sterile effluent with my product, at my time/pressure/temperature? | Product-specific bacterial challenge per ASTM F838 conditions, often at a contract lab |
| Chemical compatibility | Does my product degrade the membrane or housing, or does the filter degrade my product? | Compatibility/aging study at process contact time and temperature |
| Extractables and leachables | What comes off the filter into my product, and is it toxicologically safe? | Extractables study (vendor + confirmatory) and a product-specific leachables assessment |
| Adsorption | Does the filter remove active, preservative, or excipient by binding? | Adsorption study measuring concentration upstream vs downstream |
| Integrity test correlation | Does a passing integrity test on my product/wetting fluid guarantee retention? | Product-wetted integrity limits tied back to the bacterial challenge |

These are not optional. A filter that holds back *B. diminuta* in broth may fail with a low-surface-tension product because the product wets the membrane differently and lowers the bubble point. A filter that is microbiologically fine may strip 30 percent of a low-concentration preservative or a dilute therapeutic protein by adsorption. The generic package cannot answer any of these for your formulation.

## Product-specific bacterial retention

This is the heart of the package. The objective is to show the filter retains the challenge organism under the worst-case conditions the production filtration will ever see, using either the actual product or a justified surrogate that matches the product's relevant physicochemical properties.

The first decision is the test fluid. If the product itself is bactericidal or bacteriostatic (many do not support survival of *B. diminuta* during the test window), you cannot simply spike organisms into the product and expect them to be recoverable. Two accepted routes: filter the actual product first, then immediately challenge with organisms suspended in a viability-supporting fluid (product-then-challenge), or use a surrogate fluid matched for pH, viscosity, surface tension, and conductivity. Whichever route, the laboratory must run a viability control proving the organisms survive long enough in the test fluid to constitute a real challenge. A retention claim built on organisms that were already dying is worthless, and inspectors look for that viability control.

Worst-case conditions to bracket include:

- **Maximum process time** the filter is in contact with product, including any hold and any campaign reuse, because a filter wetted for hours behaves differently from one used for minutes.
- **Maximum differential pressure** and maximum flux, since high pressure can in theory push cells through.
- **Temperature** at the high end of the process range, which lowers viscosity and surface tension.
- **Total throughput** at the maximum volume per filter, so you challenge a filter loaded near its capacity.
- **Pre-use sterilization** applied to the test filter (autoclave or in-line steam) so the membrane tested has the same history as production.

The acceptance criterion is unambiguous: sterile effluent (no growth from the downstream sample) at a challenge of at least 10^7 CFU per cm^2 of effective filtration area, with the viability control passing and the positive control growing. The study report should state the lot of filters tested (ideally three lots to capture manufacturing variability), the measured challenge level, the integrity test values of the challenged filters before and after, and the correlation back to those values. That last point is what links the destructive bacterial test to the non-destructive integrity test you will actually run in production.

## Chemical compatibility

Compatibility runs both directions. The product must not chemically attack the membrane polymer (commonly PVDF or PES for aqueous biologics, PTFE for solvents and gas filtration), the support layers, the cage and core, the O-rings, and the potting. And the filter must not change the product. The study exposes the filter to product (or a representative solvent matrix) for at least the maximum cumulative contact time at the maximum temperature, then examines the filter for swelling, loss of mechanical strength, or change in integrity values, and examines the fluid for any filter-derived change.

For solvent-containing or non-aqueous formulations this is decisive: a membrane perfectly fine in water can soften, swell, or lose bubble point in an organic solvent, which both compromises retention and floods the product with extractables. The compatibility study is also where you confirm the integrity test method still works on the post-exposure filter, because a degraded membrane can pass a fresh integrity test yet fail after realistic contact.

## Extractables and leachables

Extractables are the compounds that can be forced off the filter under exaggerated lab conditions (aggressive solvents, elevated temperature, long contact). Leachables are the subset that actually migrate into your specific product under real process conditions. Filters contribute oligomers, polymer additives, surfactant wetting agents, and trace metals.

The vendor supplies an extractables profile generated under model conditions. The drug maker uses that as the starting screen, then makes a product-specific judgment. For a short-contact final filter on an aqueous biologic, a documented risk assessment leaning on vendor extractables plus the product's contact time, surface-area-to-volume ratio, and route of administration is often defensible without a full leachables study. For longer contact, solvent systems, or high-risk routes, a confirmatory leachables study on the actual product is expected. Either way, identified compounds are run against a toxicological assessment with a permitted daily exposure or other safety threshold, and the conclusion is documented. The current expectation, reflected in industry practice and FDA's container-closure thinking, is a science- and risk-based extractables/leachables strategy, not a blanket full study for every filter regardless of risk. Pre-flushing the filter (a defined initial volume diverted to waste) is a common and creditable control to reduce initial leachable burden, and if you claim a flush it must be specified and validated.

## Adsorption (binding of product to the filter)

Membranes can bind components out of solution, which is a yield and a potency problem rather than a safety one, but it can sink a low-concentration product. The two classic victims are antimicrobial preservatives in multi-dose products (the filter strips preservative below the effective concentration) and dilute biologics or peptides at low protein concentration (the active adsorbs to the large internal surface area until binding sites saturate).

The adsorption study measures the concentration of the component of interest upstream and in the filtrate across the run, ideally including the first volume through (worst case, before sites saturate) and steady state. If meaningful loss is found, mitigations include a pre-saturation flush with a sacrificial volume of product, selecting a lower-binding membrane chemistry, or revising the formulation overage. The acceptance criterion is tied to the product specification: filtrate potency and preservative content must stay within release limits across the full batch volume, including the first and last portions.

## Integrity testing: the methods and how limits are set

A sterilizing-grade filter is integrity-tested because you cannot culture the effluent of every production batch and wait days for sterility before releasing a parenteral. The non-destructive integrity test is the surrogate. Three methods are in routine use, all based on the physics of a fully wetted membrane.

When a membrane is wetted, liquid fills its pores by capillary action. To push gas through a wetted pore you must apply enough pressure to displace that liquid; the pressure at which bulk gas flow begins is the **bubble point**, and it is inversely related to the largest pore. A defect or oversized pore shows up as a lower bubble point. Below the bubble point, gas still crosses the membrane slowly by dissolving in the pore liquid and diffusing through, which is **diffusive flow** (forward flow). A breach causes diffusive flow to rise above the expected value. **Pressure hold** (pressure decay) is the same physics measured as a pressure drop over time in an isolated upstream volume; excess decay signals a leak or oversized pore.

| Method | What is measured | Best for | What a failure looks like |
|---|---|---|---|
| Bubble point | Pressure at which bulk gas flow starts through the wetted membrane | Small-area filters; confirming maximum pore | Bubble point below the validated minimum |
| Diffusive / forward flow | Gas flow rate across the wetted membrane at a set test pressure below bubble point | Large-area filters and assemblies | Diffusive flow above the validated maximum |
| Pressure hold (decay) | Pressure drop over a fixed time in the isolated upstream volume | In-line testing where venting gas is undesirable | Pressure decay greater than the validated limit |

The limits are not invented by the user. The vendor establishes the integrity-test specification for each filter type and wetting fluid by correlating the test value to the bacterial retention proven in the ASTM F838 challenge. Concretely, the vendor challenges filters across a range of integrity values, identifies the value above which retention is no longer guaranteed, and sets the production limit on the safe side of that threshold with margin. So a bubble point minimum or a diffusive flow maximum is a retention-correlated limit, not an arbitrary number.

The user's product-specific obligation is the **wetting fluid**. Integrity limits are fluid-specific because surface tension changes the bubble point. If you integrity-test the filter wetted with product rather than water (or with water after a product run), you must establish a product-wetted limit, either from the vendor or by your own correlation, and use that limit. Testing a product-wetted filter against a water-based limit is a recurring and serious error. Automated integrity test instruments store the recipe, perform the test, and produce a printed or electronic record; that record is a GMP record subject to the same data-integrity controls (audit trail, user access, no deletion of failing tests) as any other.

## Pre-use post-sterilization integrity testing (PUPSIT)

PUPSIT is testing the sterilized final filter for integrity *before* the batch is filtered through it, after the filter has been sterilized in place. The rationale is the "flaw-masking" or "filter-blocking" concern: a tiny defect present after sterilization could, during filtration, become plugged by product or by the bioburden it is removing, so that the post-use integrity test passes even though the filter was defective at the start and may have let organisms through early in the run. PUPSIT catches a defect that the post-use test could mask.

This is where EU GMP Annex 1 (2022) sets the expectation. The current Annex 1 position is that PUPSIT should be performed for the sterilizing filter of the final product, and any decision **not** to perform PUPSIT must be supported by a documented risk assessment and implemented only where that assessment justifies it. In other words, Annex 1 makes PUPSIT the default and puts the burden of proof on the manufacturer who wants to omit it. The PDA technical work in this area (notably PDA Technical Report 80 on PUPSIT) lays out the risk-assessment framework that regulators expect to see, and the published mechanistic studies on whether flaw-masking is realistically probable for a given product and filter feed that assessment.

The practical tension: PUPSIT adds a non-trivial contamination risk of its own. To test the sterilized filter before use you must wet it, pressurize it with gas, and handle the downstream side, all of which create opportunities to breach the sterile boundary you just created. Engineering solutions exist, sterilizing the test gas, using a redundant downstream sterilizing filter to protect the line during the pre-use test, automated closed test rigs, but they add complexity and cost. The honest engineering answer for many processes is that the residual flaw-masking risk after a sound post-use test is low, and the documented risk-assessment route in Annex 1 exists precisely so a manufacturer can make and defend that call.

If you go the no-PUPSIT route, the risk assessment must address, at minimum: the probability of an undetected post-sterilization defect for the specific filter, whether the product and its bioburden could realistically mask a flaw (filterability and particle characteristics), the bioburden control upstream of the filter, the strength of the post-use test, and whether redundant filtration is in place. That document, signed off by quality, is what an inspector will ask for the moment they see no PUPSIT in the batch record.

<div class="flow flow-v">
  <div class="flow-box">Bulk solution, bioburden controlled and within pre-filtration limit</div>
  <div class="flow-arrow">&darr;</div>
  <div class="flow-box">Filter sterilized in place (SIP) or pre-sterilized and installed aseptically</div>
  <div class="flow-arrow">&darr;</div>
  <div class="flow-box">PUPSIT: pre-use integrity test (or documented risk-based omission)</div>
  <div class="flow-arrow">&darr;</div>
  <div class="flow-box">Sterilizing filtration of the batch into the filled units</div>
  <div class="flow-arrow">&darr;</div>
  <div class="flow-box">Post-use integrity test (release-relevant; must pass)</div>
  <div class="flow-arrow">&darr;</div>
  <div class="flow-box">Filter retained / disposition; result in batch record</div>
</div>

## Post-use integrity testing as the release-relevant test

Whatever you decide about PUPSIT, the **post-use integrity test is mandatory and is the test that supports batch release**. It is run on the filter after the batch has been filtered, while the filter is still installed, before the assembly is broken down. A passing post-use integrity test is documented evidence that the filter remained intact through the entire filtration and therefore that the sterile barrier held. A failing post-use test means you cannot assume the effluent was sterile, and the batch is in jeopardy regardless of every other result.

Operationally: the post-use test must use the validated method, the validated limits for the wetting condition actually used, and a qualified instrument. The wetting matters; if the filter is product-wetted, use the product-wetted limit, or perform a controlled flush to a known wetting fluid and use that limit. The result, the limit, the method, the instrument ID, and the analyst go into the batch record. No batch of aseptically filled, filter-sterilized product is released without a passing post-use integrity test on file. This is also why the post-use test sits in the batch record review before QP or quality release, alongside the media-fill and environmental-monitoring picture.

## Redundant (series) filtration

Redundant filtration places a second sterilizing-grade filter in series with the primary final filter, so two sterilizing filters stand between bulk and fill. The two filters give two independent sterile barriers and, importantly, allow filtration to continue and the batch to be salvaged if one filter fails its post-use integrity test, provided the other passes and the configuration was validated for that outcome.

The design choices and their consequences:

- **Both filters tested post-use.** The strong configuration. If the primary (downstream) filter passes, the batch is supported even if the upstream redundant filter fails, because the last barrier the product crossed was intact. Conventions on which filter is "primary" vary, so the validated logic and the batch-record decision rules must be explicit.
- **Redundant filtration is not a license to skip integrity testing.** A common 483 theme is treating the second filter as a reason not to test one of them. Both should be integrity tested for the configuration to deliver its benefit.
- **It is also a route to reduce PUPSIT risk.** A redundant downstream filter can protect the line during a pre-use test of the upstream filter, which is one engineering answer to the PUPSIT contamination problem.

Redundancy adds cost, pressure drop, and extractables surface area, so it is a risk-based choice, common for high-value biologics and gene therapy products where a single filter failure would scrap an irreplaceable batch.

## Filter sizing and Vmax

Sizing is not just throughput economics; an undersized filter that plugs mid-batch can foul, lose flow, and in the worst case shed retained material or be pushed to higher differential pressure that stresses the membrane. The **Vmax** method is the standard small-scale tool to size a filter from constant-pressure filtration data. You run a small-area membrane at the process pressure, record cumulative filtrate volume against time, and use the gradual-pore-plugging model: a plot of time-over-volume (t/V) against volume (V) is linear, and the inverse of its slope gives Vmax, the maximum volume the membrane could ever pass before complete plugging. From Vmax and the required batch volume you scale to the production area, applying a safety factor (often sizing for the batch to use only a fraction of Vmax so the filter never approaches plugging).

A companion method, **Pmax**, addresses constant-flow processes by finding the volume at which pressure would reach the maximum allowable. Sizing studies should be run on the actual product (or a representative bulk) at worst-case bioburden and at the high end of the process temperature and concentration, because a more fouling bulk needs more area. The sizing rationale belongs in the validation package; an inspector who sees a filter routinely plugging or being changed mid-run will ask for the sizing study, and "we picked the size we always use" is not an answer.

## Handling an integrity test failure

A failed integrity test, pre-use or post-use, is a deviation that must be investigated before any disposition. The instinct to immediately re-test and move on is exactly what gets cited.

A disciplined sequence:

1. **Stop and preserve.** Quarantine the batch. Do not break down the filter assembly until the investigation team agrees, because the physical filter is evidence and may need retesting or autopsy.
2. **Rule out test-system causes first, but document the rationale.** A common true cause is incomplete wetting, wrong wetting fluid, residual product, temperature drift, a leak in the test rig rather than the filter, or the wrong recipe/limit. These are legitimate explanations, but you must show evidence, not assert them. A re-test is permitted only with a documented, justified reason (for example, evidence the filter was incompletely wetted), under a procedure, with the original failing result retained and visible. You cannot test-into-compliance.
3. **If the filter is genuinely failed**, treat the sterility of the affected portion of the batch as not assured. Assess impact: was this pre-use (the batch was never filtered through it, so swap the filter, re-sterilize, re-test, proceed under deviation) or post-use (the batch already passed through a filter you can no longer prove was intact)? A post-use failure on a non-redundant single filter is, in most quality systems, grounds to reject the batch, because you cannot demonstrate the effluent was sterile.
4. **Redundant configuration changes the math.** If a redundant downstream filter passed post-use, the batch may be supportable per the validated decision logic, with full investigation.
5. **Root cause and CAPA.** Investigate why the filter failed (manufacturing defect, sterilization stress, over-pressure, compatibility degradation, installation damage) and act on it. A recurring post-use failure pattern points to sizing, handling, or filter selection.
6. **Document everything,** including the disposition decision, the quality sign-off, and any field implications. Tie the conclusion to the validation: the failure means the validated state was not maintained for this run.

The governing principle: the post-use integrity test is a sterility-assurance gate, and a failed gate cannot be reasoned away by a clean re-test alone.

## Required documentation and the link to aseptic process simulation

The filter validation package is a defined set of documents, and an inspector will expect to find them and to see them referenced from the batch record. A minimum set:

| Document | Content |
|---|---|
| Filter validation plan / protocol | Scope, filters and lots tested, worst-case conditions, acceptance criteria, study designs |
| Bacterial retention report | Product-specific (or surrogate-justified) ASTM F838 challenge, viability control, integrity correlation |
| Chemical compatibility report | Membrane and housing exposure results, integrity values pre/post exposure |
| Extractables/leachables assessment | Vendor extractables, product-specific evaluation, toxicological conclusion, flush justification |
| Adsorption study | Upstream vs filtrate concentration of active/preservative across the batch |
| Integrity test correlation | Limits per wetting fluid, traceable to retention; method validation for the test |
| Sizing rationale (Vmax/Pmax) | Filter area justification at worst case |
| PUPSIT decision | PUPSIT procedure, or the documented risk assessment supporting omission |
| Vendor documentation | Filter validation guide, certificates of quality, change-notification agreement |

This validation does not stand alone. The sterilizing filter and its operation are part of the aseptic process, so the way the filter is installed, sterilized, integrity tested, and changed must be inside the scope of the **aseptic process simulation (media fill)**. The media fill should mimic the real filtration setup, including filter installation and the manipulations around it, so that the operator interventions associated with filtration are challenged for their contamination risk. Filter changes, integrity-test handling, and assembly connections are exactly the manual steps a media fill exists to qualify. A filter validation that proves the membrane retains organisms is necessary but not sufficient; the surrounding aseptic operations have to be qualified by media fill, and the contamination control strategy has to tie the filter, its bioburden feed, the environment, and the people into one coherent argument for sterility assurance. See [aseptic processing and media fills](/articles/aseptic-processing-and-media-fills) and the [Annex 1 contamination control strategy](/articles/annex-1-contamination-control-strategy) for how the filter fits the wider sterile process.

## Worked example: 0.2 micron PES filter on a monoclonal antibody drug product

A company fills a 25 mg/mL monoclonal antibody into vials. The bulk cannot be terminally sterilized, so a 0.2 micron PES sterilizing filter is the final step, sized for a 200 L batch.

**Bacterial retention.** The mAb formulation contains polysorbate 80, which lowers surface tension. Because the product does not support *B. diminuta* survival well over the test window, the contract lab runs product-then-challenge: the actual mAb bulk is filtered first at the maximum process pressure (2.0 bar) and the maximum contact time (the validated 6-hour worst-case hold), then the wetted filter is immediately challenged with *B. diminuta* at 1.8 x 10^7 CFU/cm^2 in a viability-supporting fluid. Viability control confirms the organisms survive the test window. Three filter lots are tested. Effluent shows no growth in all cases. The challenged filters' bubble points are recorded and correlate to the vendor's product-wetted limit.

**Integrity limits.** Because polysorbate lowers surface tension, the water-wet bubble point limit (say 3450 mbar) does not apply to a product-wetted test. The vendor provides a product-wetted (or IPA/water) limit, and the site validates testing the filter with a controlled water flush to a defined endpoint, then uses the water-wet limit. The site standardizes on diffusive flow for the large 200 L assembly because bubble point on a big multi-round housing is impractical; the diffusive flow maximum is set from the vendor's retention correlation.

**Adsorption.** At 25 mg/mL, protein adsorption to the membrane is negligible relative to batch mass, confirmed by upstream-vs-filtrate concentration on the first and last 5 L. Polysorbate 80 adsorption is checked too, because surfactant loss can destabilize the protein; a 2 L pre-flush with product is validated to saturate binding sites, and post-flush filtrate polysorbate stays within spec.

**E/L.** Contact time is short and the route is parenteral, so the site does a risk-based extractables review using vendor data plus a 2 L pre-flush, concludes a full leachables study is not warranted, and documents the toxicological assessment of the identified extractables against PDE limits.

**PUPSIT.** The site performs PUPSIT, with a redundant downstream sterilizing filter protecting the line during the pre-use test, eliminating the flaw-masking concern and managing the pre-use test's own contamination risk. Both filters are integrity tested post-use; the decision logic states the batch is supported if the downstream filter passes.

**Sizing.** A Vmax study on the actual bulk at worst-case bioburden gives a Vmax that, with a 1.5x safety factor, sizes the assembly so the 200 L batch uses well under the plugging volume.

**Outcome.** Pre-use tests pass. The batch is filtered. The post-use diffusive flow on the downstream filter is within limit; the upstream filter is marginally above limit. Because the validated logic supports the batch on a passing downstream filter, and an investigation confirms the upstream filter's slightly high diffusive flow traces to incomplete wetting (re-test after proper wetting passes, original result retained), the batch is dispositioned for release with full documentation. Had there been no redundant filter and the single post-use test failed for a true membrane defect, the batch would have been rejected.

## Acceptance criteria and checklist

| Item | Acceptance criterion |
|---|---|
| Bacterial challenge level | At least 1 x 10^7 CFU/cm^2 of effective filtration area |
| Bacterial retention result | No growth in downstream effluent; viability and positive controls valid |
| Filter lots tested for retention | Three lots (capturing manufacturing variability) |
| Worst-case bracketing | Max time, max pressure, max throughput, high-end temperature, real sterilization history |
| Integrity test limit | Vendor-set, correlated to retention, specific to the wetting fluid actually used |
| Product-wetted integrity | Product-wetted limit established and used, or validated flush to a known wetting fluid |
| Chemical compatibility | No membrane/housing degradation; integrity values hold after max contact |
| E/L | Identified compounds within toxicological safety limits; flush justified if claimed |
| Adsorption | Filtrate potency and preservative within release spec, first and last portions |
| Sizing | Vmax/Pmax rationale at worst case with safety factor; filter does not plug in routine use |
| PUPSIT | Performed, or omission supported by an approved documented risk assessment |
| Post-use integrity test | Performed every batch, validated method/limit, passing, recorded in batch record |
| Data integrity of instrument | Audit trail on, unique logins, failing tests retained, no deletion |
| Media fill coverage | Filter installation/change/integrity-test interventions included in the simulation |

## Common 483 and Annex 1 findings

These recur across inspection reports and warning letters:

- **No product-specific bacterial retention validation.** Relying on the vendor's generic broth data and never challenging the actual product or a justified surrogate.
- **No viability control in the bacterial challenge,** so retention was claimed on organisms that may have been dying in a bactericidal product.
- **Wrong integrity limit for the wetting fluid.** Testing a product-wetted filter against the water-wet specification, which can pass a defective filter or fail a sound one.
- **Missing or unjustified PUPSIT decision.** No PUPSIT and no risk assessment, or a risk assessment that does not actually address flaw-masking, bioburden, and filterability.
- **Releasing on a failed post-use integrity test** after an undocumented re-test, with the failing result not retained or not investigated. A textbook testing-into-compliance citation.
- **Filter integrity instrument data-integrity gaps:** shared logins, audit trail disabled, ability to delete a failing test, results not in the batch record.
- **Filter used beyond validated time or throughput,** or campaign reuse not validated, so the filter operated outside the conditions retention was proven under.
- **No extractables/leachables assessment** for the actual product, or a flush claimed but never validated.
- **Adsorption ignored** for a low-concentration preservative or dilute biologic, with out-of-spec potency or preservative found later.
- **Filtration interventions not covered by the media fill,** breaking the link between filter validation and aseptic process qualification.
- **No bioburden limit before the final filter,** or a bioburden specification with no link to the validated challenge load, so the filter could see more organisms than it was qualified against.

## Interview questions and answers

**Q: What makes a filter "sterilizing-grade," and why *Brevundimonas diminuta*?**
A: Performance, not pore size. A sterilizing-grade filter produces sterile effluent when challenged with at least 10^7 CFU/cm^2 of a small test organism under ASTM F838 conditions. *B. diminuta* is used because, grown to yield small cells, it is among the smallest culturable bacteria and gives a realistic worst-case challenge to a 0.2 micron membrane. The rating describes retention performance, not a literal uniform pore.

**Q: The filter vendor says their filter is validated. What do you, the drug maker, still owe?**
A: Everything that depends on my product. The vendor's generic data uses a surrogate fluid. I still owe product-specific bacterial retention under my worst-case conditions, chemical compatibility, an extractables/leachables assessment on my formulation, an adsorption study, and integrity-test limits correlated to retention for the wetting fluid I actually use.

**Q: Explain PUPSIT and the Annex 1 (2022) position.**
A: PUPSIT is integrity testing the sterilized final filter before the batch is filtered through it. The concern it addresses is flaw-masking: a defect could be plugged by product or bioburden during the run so the post-use test passes despite an early breach. Annex 1 (2022) makes PUPSIT the expectation for the final product sterilizing filter, and any decision not to do it must be backed by a documented risk assessment. PDA TR 80 frames that assessment. The counter-consideration is that PUPSIT itself can introduce contamination risk, which is why the risk-based route exists.

**Q: Which integrity test result actually supports batch release?**
A: The post-use test. PUPSIT (or its risk-based omission) is about catching pre-existing defects; the post-use integrity test, run after the batch is filtered and before the assembly is broken down, is the documented evidence the filter stayed intact through the whole filtration. No batch is released without a passing post-use test using the validated method and the correct wetting-fluid limit.

**Q: Post-use integrity test fails on a single non-redundant filter. What do you do?**
A: Quarantine the batch, preserve the filter, and investigate before any disposition. If the failure traces to a documented, justified test-system cause like incomplete wetting, a controlled re-test under procedure is allowed with the original result retained. If the filter is genuinely failed, sterility of the effluent is not assured and, on a single filter, that is normally grounds to reject the batch. With a redundant downstream filter that passed, the validated decision logic may support the batch. Then root cause and CAPA.

**Q: How does redundant filtration help, and what is the trap?**
A: Two sterilizing filters in series give two barriers and let you salvage a batch if one fails its post-use test, per validated logic, usually if the downstream filter passes. The trap is treating redundancy as a reason to skip integrity testing on one filter; both must be tested for the benefit to exist. It also costs pressure drop and extractables area, so it is a risk-based choice for high-value batches.

**Q: How do you size a sterilizing filter and why does it matter for sterility?**
A: Vmax for constant-pressure or Pmax for constant-flow, from small-scale data on the actual worst-case bulk, scaled with a safety factor so the batch uses a fraction of the plugging volume. It matters because an undersized filter that plugs mid-batch loses flow, raises differential pressure, and stresses the membrane, which is both a process and a sterility-assurance risk.

**Q: How is filter validation connected to the media fill?**
A: Filter validation proves the membrane retains organisms; the media fill proves the aseptic operations around it, installation, change-out, integrity-test handling, connections, do not contaminate the product. Both have to hold, and the contamination control strategy ties the filter, its bioburden feed, the environment, and the people into one sterility-assurance argument.

For adjacent topics, see [moist-heat sterilization validation](/articles/sterilization-validation-moist-heat), [container closure integrity testing](/articles/container-closure-integrity-testing), and [sterility testing per USP <71>](/articles/sterility-testing-usp-71).
