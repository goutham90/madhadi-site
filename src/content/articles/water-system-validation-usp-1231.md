---
title: "Pharmaceutical Water System Validation: USP <1231>, WFI, and the Three-Phase Qualification"
description: "How to qualify and validate a pharmaceutical water system: generation of Purified Water and Water for Injection, distribution loop design and sanitization, the three-phase qualification, and the conductivity, TOC, and microbial monitoring program."
pubDate: 2026-06-20
tags: ["water systems", "qualification", "wfi", "usp", "sterility", "microbiology", "validation"]
pillar: "sterility-microbiology"
tier: "Advanced"
---

Water is the most-used raw material in a pharmaceutical plant, and it is the one ingredient you cannot fully test into compliance after the fact. You make it on site, you store it, you pipe it to dozens of points of use, and you consume it continuously. A water system that drifts microbiologically does not fail one batch, it threatens every batch that touched the loop between two sample points. That is why water systems get their own validation discipline, their own monitoring program, and their own three-phase qualification that runs for a full year before you trust the data.

This article covers how pharmaceutical water grades are defined, how Purified Water (PW) and Water for Injection (WFI) are generated and distributed, why loop design and sanitization decide whether you have a microbiology problem, and how to plan and execute the three-phase qualification with the right conductivity, total organic carbon (TOC), and microbial monitoring. The aim is that you can walk into a water system project, read an existing validation package critically, and answer the questions an inspector or interviewer will ask.

---

## The regulatory and compendial basis

There is no single document that tells you everything. A real water program is built from a stack of references, and you need to know which one governs which decision.

- **USP General Chapter <1231> Water for Pharmaceutical Purposes** is the informational chapter. It is the engineering and design reference: feedwater considerations, unit operations (carbon, softening, reverse osmosis, electrodeionization, distillation), distribution loop design, sanitization methods, biofilm, sampling, and the rationale behind the monitoring program. Being an informational chapter (numbered above 1000), it gives guidance and reasoning rather than pass/fail limits.
- **USP <1231> is informational; the specifications live in the monographs.** The **Purified Water** and **Water for Injection** monographs carry the actual acceptance criteria. Both require **conductivity per USP <645> Water Conductivity** and **TOC per USP <643> Total Organic Carbon**. For microbial count the chapters give recommended guidance rather than a release spec, the commonly cited values being on the order of 100 CFU/mL for Purified Water and 10 CFU/100 mL for Water for Injection. WFI additionally carries a **bacterial endotoxin** limit, tested per **USP <85> Bacterial Endotoxins Test**, with the standard endotoxin value applied to WFI.
- **USP <1231> also describes Pharmaceutical Waters of lesser purity and special waters** (for example sterile waters, water for hemodialysis), but for most drug manufacturing the working grades are PW and WFI.
- **EU GMP context:** the **European Pharmacopoeia** monographs for Purified Water and Water for Injection set the EU criteria, and **EU GMP Annex 1 (2022 revision, effective 25 August 2023)** treats water systems as part of the contamination control strategy for sterile manufacturing. A meaningful change happened in EU rules: **WFI may now be produced by methods other than distillation** (for example reverse osmosis coupled with appropriate downstream techniques), provided the system is qualified and continuously monitored. That aligns the EU position with what USP has long allowed.
- **US cGMP:** the binding US requirement is **21 CFR 211.48 (Plumbing)** and the general equipment/facility expectations in **21 CFR Part 211**. The CFR does not prescribe a water specification; it requires that water meet the standard for its intended use. The FDA also publishes a **Guide to Inspections of High Purity Water Systems**, which inspectors still use as a mental model: it is where the emphasis on loop design, dead legs, sanitization, and trending comes from.
- **ISPE Baseline Guide Volume 4 (Water and Steam Systems)** and **ASTM E2500** inform the engineering and the commissioning-and-qualification approach.

> A common interview trap: candidates quote a microbial "spec" for water as if it were a hard limit. The microbial counts in the monographs and <1231> are **action levels**, not pass/fail release specifications. Conductivity and TOC are the attributes with compendial limits; the microbial program is run on alert and action levels you justify and trend.

For how this fits into the broader utilities picture, see [clean utilities qualification](/articles/clean-utilities-qualification) and [equipment qualification lifecycle](/articles/equipment-qualification-lifecycle).

---

## Water grades and where each one is used

You qualify a water system against the grade it must deliver, so get the grades straight first.

| Grade | Typical use | Key compendial attributes | Microbial action level |
|---|---|---|---|
| Drinking (potable) water | Feedwater to the purification train | Meets national drinking water regulations (for example US EPA NPDWR / EU Drinking Water Directive) | Per drinking water regulation |
| Purified Water (PW) | Non-parenteral product formulation, equipment final rinse, cleaning, reagent prep | Conductivity (<645>), TOC (<643>) | Not more than 100 CFU/mL |
| Water for Injection (WFI) | Parenteral product formulation, final rinse of product-contact parts for sterile products, WFI for component washing | Conductivity (<645>), TOC (<643>), bacterial endotoxin not more than 0.25 EU/mL | Not more than 10 CFU/100 mL |
| Pure Steam | Sterilization of equipment, SIP of vessels and lines | Condensate meets WFI quality; non-condensable gas, dryness, superheat per EN 285 testing | Tested as condensate |

The feedwater point matters. Drinking water is the regulatory starting line: the FDA expects the source water entering your system to meet drinking water standards, and your feedwater monitoring is part of the system. Everything downstream is your responsibility to design, qualify, and monitor.

A frequent design question is where WFI is genuinely required versus where PW is acceptable. The rule of thumb: anything that contacts a parenteral product, or is the final rinse for product-contact surfaces of a sterile product, wants WFI. Non-sterile oral or topical formulation typically uses PW. Document the rationale per point of use; an inspector will ask why a given outlet is PW and not WFI.

---

## How the water is generated

### The purification train

A typical PW generation train, in order, looks like this:

1. **Pretreatment.** Multimedia or depth filtration to remove particulates, then activated carbon to remove chlorine and chloramine (which would destroy downstream RO membranes), and softening (ion exchange) to remove hardness that would scale membranes. Carbon beds are a known microbial breeding ground, so many designs use hot-water-sanitizable carbon or replace carbon with sodium metabisulfite dosing plus a UV or membrane step.
2. **Reverse osmosis (RO).** The primary demineralization and organic-removal step. Often run as double-pass RO for higher quality.
3. **Electrodeionization (EDI / CEDI).** Polishes the RO permeate to compendial conductivity continuously, regenerating its resin electrically so there is no chemical regeneration and no chemical-handling risk.

This RO + EDI combination is the modern standard for producing PW that meets <645> conductivity continuously. The output is sent to a storage tank and a distribution loop.

### WFI generation

Historically, WFI meant **distillation**, typically multiple-effect stills or vapor compression stills. Distillation provides a phase change that gives a strong, well-understood barrier to endotoxin and microbial carryover, which is why it was mandated for so long.

The EU change (Annex 1 alignment and the Ph. Eur. WFI monograph) now permits **membrane-based WFI**: RO, often double-pass, combined with EDI and/or ultrafiltration, with the whole system continuously monitored for conductivity, TOC, and microbial/endotoxin control. USP has permitted non-distillation WFI for years. If you build a membrane WFI system, the validation burden shifts: you must demonstrate continuous endotoxin control because you no longer have a phase-change barrier, so ultrafiltration integrity, online TOC, and a tight microbial program become load-bearing.

Pure steam generators produce the steam used for SIP and equipment sterilization; the condensate must meet WFI quality, so a pure steam system is qualified against WFI attributes plus EN 285 steam-quality tests (dryness, superheat, non-condensable gases).

### Acceptance criteria for generation

The generation skid is qualified so that, at the point it feeds the storage tank, the water already meets the grade. For PW/WFI that means online conductivity within <645> Stage 1 limits and TOC within the <643> limit (commonly applied as not more than 500 ppb / 0.5 mg/L of carbon). For WFI, endotoxin control is demonstrated. Generation qualification is part of the operational qualification of the system, but the proof that water is reliably in spec is the job of the three-phase qualification described below.

---

## Distribution loop design: where systems live or die

Generation is solvable engineering. The microbiology problem lives in storage and distribution, because that is where water sits, warms, and contacts surfaces for long enough to grow biofilm. Most water system inspection findings trace back to distribution design or sanitization, not to the still or the RO skid.

### Design principles you must be able to defend

- **Continuous circulation.** The loop should recirculate constantly. Stagnant water grows biofilm. No "fill the tank and let it sit."
- **Turbulent flow.** Maintain a Reynolds number in the turbulent regime (commonly cited as a target velocity around 1 to 1.5 m/s, giving Re well above the turbulent threshold). Turbulence scours the pipe wall and disrupts biofilm formation. This is the single most-quoted distribution design rule.
- **No dead legs.** A dead leg is a length of pipe off the main loop where water does not circulate. The classic rule is the **L/D ratio**: the unused leg length (L) to pipe diameter (D) should be less than a defined limit. The widely used guidance is **L/D less than 6 measured from the inner wall of the recirculating loop**, though many modern designs push to zero-dead-leg diaphragm valves where the valve body sits directly on the loop. Excessive dead legs are one of the most cited water findings.
- **Slope and drainability.** Lines should slope to drain so the loop can be fully emptied and dried during maintenance and so there are no low pockets that hold water.
- **Sanitary materials and finish.** 316L stainless steel with controlled surface finish (often a mechanically polished or electropolished interior, Ra below a defined value such as 0.5 to 0.8 micrometers), orbital welds with documented weld maps and boroscope inspection, and sanitary (tri-clamp or weld) connections. Rouge control and passivation are part of the program.
- **Sanitary instrumentation and point-of-use valves.** Diaphragm valves and instrument pockets designed to drain, sample valves that do not create their own dead leg.
- **Storage tank design.** A spray ball to wet and rinse the headspace continuously, a hydrophobic vent filter (often heated to prevent condensate that would wet the filter and admit organisms), and a nitrogen or filtered-air overlay where used.

### Hot versus cold loops

- **Hot loops (held at 80 to 85 C, often around 80 C)** are self-sanitizing. Bacteria do not establish biofilm at that temperature, so a continuously hot WFI loop is the lowest-microbial-risk design. Points of use are cooled at the outlet when ambient water is needed.
- **Cold or ambient loops** are easier to use but require an active sanitization strategy because they sit in the temperature range bacteria love. Cold loops are typically sanitized periodically (hot water, ozone, or steam).
- **Ozonated cold loops** keep a low residual ozone concentration circulating to suppress microbial growth, with UV destruct units at points of use to remove ozone before the water is drawn. This gives you a cold loop with continuous microbial control.

The design choice drives the monitoring and the sanitization SOP, so it must be justified in the validation plan and the user requirements.

---

## Sanitization: methods, frequency, and proof

Sanitization is the periodic kill step that prevents biofilm from establishing. The method depends on the loop design.

| Method | Where used | How it works | Typical proof of effectiveness |
|---|---|---|---|
| Continuous hot circulation (80-85 C) | Hot WFI / PW loops | Temperature prevents biofilm | Loop temperature continuously recorded; microbial trend stays low |
| Periodic hot water sanitization | Cold/ambient loops, RO/EDI skids (hot-water-sanitizable) | Heat the whole loop to 80+ C for a defined hold, then cool | Temperature/time at all worst-case points; post-sanitization microbial recovery |
| Ozonation | Cold loops with ozone generation | Dissolved ozone residual oxidizes organisms; UV destruct at POU | Ozone residual (ppm) and contact time; UV destruct verified; microbial trend |
| Pure steam / SIP | Skids, tanks, sterilizing-grade applications | Saturated steam achieves lethality | Temperature distribution / F0 at cold points |
| Chemical (e.g. peracetic acid, hydrogen peroxide) | Some RO and cold loops | Oxidizing biocide, then rinse to compendial | Concentration/contact time; rinse-out to TOC and conductivity limits |

Whatever method you choose, the validation must prove the sanitization reaches every point, including the worst-case (the most distal point, the lowest-flow leg, the point that heats slowest). For thermal sanitization, that means temperature mapping of the loop during a sanitization cycle, demonstrating the target temperature and hold time at the coldest location. See [temperature mapping qualification](/articles/temperature-mapping-qualification) and [sterilization validation moist heat](/articles/sterilization-validation-moist-heat) for the thermal-lethality methodology that carries over here.

**Sanitization frequency** is set during qualification and confirmed by trend. A common approach: start with a conservative frequency, then use the Phase 1 and Phase 2 microbial data to justify the routine frequency. If counts creep up before the next scheduled sanitization, the interval is too long.

---

## The three-phase qualification

This is the heart of water system validation and the part interviewers love, because it is unique to water. After the equipment is installed and the engineering checks (IQ/OQ, or the commissioning-and-qualification equivalent under ASTM E2500) are complete, you run a **three-phase performance qualification** that builds confidence over a full year. The point is that you cannot declare a water system reliable until you have seen it behave across a full annual cycle of feedwater and seasonal variation.

### Phase 1: intensive daily monitoring (2 to 4 weeks)

**Purpose:** prove the system can consistently produce and deliver water of the required quality under controlled conditions, and develop and finalize the operating procedures, sanitization frequencies, and monitoring procedures.

**What you do:**
- Sample **every point of use, plus key in-process points, every day** the system operates.
- Test for the full attribute set: conductivity, TOC, and microbial count (and endotoxin for WFI).
- Run the system through its normal operating ranges and challenge the SOPs you intend to use routinely.
- Do **not** use the water for product manufacturing yet. Phase 1 is about proving the system, not releasing water.

**Acceptance:** all samples meet the chemical limits (conductivity, TOC) and stay within the microbial action levels, sanitization and operating procedures are demonstrated, and any excursions are investigated and resolved. You exit Phase 1 with a finalized set of SOPs and a defensible sanitization frequency.

### Phase 2: confirm with the routine procedures (2 to 4 weeks)

**Purpose:** demonstrate that the system, operated by the **finalized routine SOPs and sanitization frequency** from Phase 1, consistently produces compliant water.

**What you do:**
- Continue **daily sampling of every point of use** for the full attribute set.
- Operate exactly as you intend to operate routinely (this is the difference from Phase 1, which was about developing the procedures).
- Many sites begin releasing water for use at the **end of Phase 2** once chemical and microbial data are clean, but this is a risk-based decision documented in the validation plan; for WFI feeding sterile manufacturing, sites are often more conservative.

**Acceptance:** consistent compliance with all attributes under routine operation; the sanitization frequency is confirmed adequate; trends are stable.

### Phase 3: long-term, one full year

**Purpose:** demonstrate that the system performs reliably across **seasonal variation** in feedwater. Source water in winter is not the same as source water in summer: temperature, turbidity, microbial load, and dissolved organics all shift. A system can pass a month in spring and struggle in late summer.

**What you do:**
- Reduce sampling to a **rotating schedule** so that, over a defined period (commonly a week or a cycle), **every point of use is sampled**, while one or more points are sampled daily.
- Continue for **one full year** from the start of routine operation.
- Trend everything and feed excursions into the deviation and CAPA system.

**Acceptance:** stable, in-control trends across a full annual cycle; the monitoring frequency proves adequate; the alert and action levels you set hold up against real data. At the end of Phase 3, you transition to the routine **ongoing monitoring program** whose frequency was justified by the Phase 3 data.

### A worked sampling-plan example

For a WFI loop with eight points of use plus a tank sample and a return-line sample:

| Phase | Duration | Sampling frequency | Points sampled | Water used for product? |
|---|---|---|---|---|
| Phase 1 | 14-28 days | Daily | All 10 points every day | No |
| Phase 2 | 14-28 days | Daily | All 10 points every day | Often released at end, risk-based |
| Phase 3 | 1 year | Rotating | One or two points daily; all 10 covered each week | Yes |

Each sample is tested for conductivity, TOC, microbial count, and (WFI) endotoxin. That is a large analytical load, which is why microbiology lab capacity and incubator space are part of the project plan.

---

## The monitoring program: conductivity, TOC, microbial, endotoxin

### Conductivity (USP <645>)

Conductivity is the measure of ionic purity and the fastest indicator of a generation problem (EDI failure, RO membrane breakthrough). USP <645> defines a **three-stage** test:

- **Stage 1** is an online, temperature-compensated measurement with a temperature-dependent limit table. Most plants run online conductivity at the generation outlet and at the loop return, and Stage 1 is what passes the water continuously.
- **Stage 2 and Stage 3** are offline laboratory procedures invoked only if Stage 1 fails; Stage 3 brings in pH because at higher conductivity the result depends on dissolved carbon dioxide and pH.

Online conductivity instruments must be calibrated and the **cell constant** verified; many sites use a standards-traceable verification of the analyzer plus a documented cell constant. See [calibration and metrology program](/articles/calibration-and-metrology-program).

### Total Organic Carbon (USP <643>)

TOC measures organic contamination, which is a proxy for both feedwater organics and microbial/biofilm-derived organics. The compendial limit is commonly applied as **not more than 500 ppb (0.5 mg/L) of carbon**, demonstrated through a system suitability that compares the instrument response to a sucrose standard versus a 1,4-benzoquinone standard. TOC is run **online** in most modern systems, which gives continuous assurance and feeds trend charts directly. A rising TOC trend with stable conductivity is a classic early signal of biofilm developing in the loop.

### Microbial monitoring

This is where judgment matters most, because microbial counts are variable and the limits are action levels, not pass/fail.

- **Method:** membrane filtration is preferred for low-count waters (especially WFI at not more than 10 CFU/100 mL) because you can filter a large volume; pour plate or spread plate is used for PW. Use a low-nutrient agar such as **R2A** and **incubate at a lower temperature for a longer time** (commonly cited as around 30-35 C, or lower temperatures like 20-25 C, for 5 days or more) because water organisms are slow-growing oligotrophs that do not recover well on rich media at 35 C for 48 hours. Validate the recovery method.
- **Alert and action levels:** set your own, justified by the Phase 1-3 data and below the compendial action level. Typical practice puts an **alert level** (a statistical early-warning trigger) below the **action level** (which is at or below the compendial guidance). An excursion above alert means investigate the trend; above action means investigate as a deviation, assess impact on any product made with the water, and consider sanitization.
- **Sample handling:** microbial samples must be tested promptly (or held cold) because counts change on standing. Sample point flushing, sanitization of the sample valve, and aseptic technique are part of the SOP, and a sampling artifact (contaminated valve, poor technique) is a common false-positive cause.

See [environmental monitoring program](/articles/environmental-monitoring-program), [microbial id and em excursions](/articles/microbial-id-and-em-excursions), and [bioburden and endotoxin testing](/articles/bioburden-and-endotoxin-testing) for the broader microbiology methodology.

### Endotoxin (WFI only)

WFI carries a **not more than 0.25 EU/mL** bacterial endotoxin limit, tested per **USP <85>** (LAL methods: gel clot, kinetic turbidimetric, or kinetic chromogenic). Endotoxin is the reason WFI exists as a separate grade: gram-negative organisms shed endotoxin that survives even after the cells are killed, and parenteral exposure to endotoxin causes pyrogenic reactions. A hot loop, continuous circulation, and (for membrane WFI) ultrafiltration are the controls. Endotoxin is tested during all three phases and routinely thereafter.

### A sample monitoring-and-limits table

| Attribute | Method | PW limit / level | WFI limit / level | Online or lab |
|---|---|---|---|---|
| Conductivity | USP <645> Stage 1 | Per temperature table | Per temperature table | Online |
| TOC | USP <643> | Not more than 500 ppb | Not more than 500 ppb | Online (typical) |
| Microbial count | Membrane filtration / plate, low-nutrient agar | Action not more than 100 CFU/mL | Action not more than 10 CFU/100 mL | Lab |
| Endotoxin | USP <85> LAL | Not applicable | Not more than 0.25 EU/mL | Lab |

Alert levels are site-specific and set below these action levels using the qualification data.

---

## Roles and responsibilities

A water system project crosses engineering, validation, QC microbiology, and QA. Clear ownership prevents the gaps inspectors find.

| Role | Responsibility |
|---|---|
| System owner / Engineering (Utilities) | Owns the asset, the design, maintenance, sanitization execution, and rouge/passivation program. Often authors the user requirements and the IQ/OQ. |
| Validation | Writes the validation master plan entry and the three-phase qualification protocol, coordinates execution, compiles the validation summary report. |
| QC Microbiology | Develops and validates the microbial and endotoxin methods, performs sampling and testing, sets alert/action levels, trends microbial data. |
| QC Chemistry / Metrology | Maintains and calibrates online conductivity and TOC analyzers, performs offline confirmatory testing. |
| QA | Approves the protocol, the limits, the SOPs, and the summary report; owns deviation and CAPA oversight; makes the release-the-water decision. |
| Vendor / OEM | Supplies the skid, factory acceptance testing data, design documentation (weld maps, materials certs, surface finish records), and commissioning support. |

A useful test of role clarity: who can stop water release if a microbial action level is exceeded? It should be QA, on the basis of an impact assessment, and the SOP should say so. For the wider map of who owns what in a quality system, see [gxp roles responsibilities](/articles/gxp-roles-responsibilities).

---

## How this maps onto the qualification lifecycle

Water system validation is a specialized application of standard equipment qualification, so the deliverables look familiar:

1. **User Requirements Specification (URS):** grade required at each point of use, flow and temperature, sanitization method, materials and finish, monitoring instrumentation, capacity. The URS is where you justify PW versus WFI per outlet. See [user requirements and traceability](/articles/user-requirements-and-traceability).
2. **Validation Master Plan / project plan entry:** scope, approach (traditional IQ/OQ/PQ or ASTM E2500 commissioning and qualification), the three-phase strategy. See [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review) and [commissioning qualification astm e2500](/articles/commissioning-qualification-astm-e2500).
3. **Design qualification / enhanced design review:** confirm the design meets the URS (dead-leg analysis, slope, materials, sanitizability).
4. **Factory and site acceptance testing (FAT/SAT):** verify the skid before and after installation. See [factory site acceptance testing](/articles/factory-site-acceptance-testing).
5. **IQ:** installation, weld maps, slope verification, materials certs, instrument lists, P&ID-as-built reconciliation.
6. **OQ:** operating ranges, alarms, sanitization cycle development, control system functions. The control system (PLC/SCADA) is itself a computerized system to be validated and access-controlled. See [automation validation plc scada dcs](/articles/automation-validation-plc-scada-dcs).
7. **PQ = the three-phase qualification** described above.
8. **Validation Summary Report:** ties protocols to results and declares the system fit for use. See [validation summary report and release](/articles/validation-summary-report-and-release).

After validation, the system enters routine monitoring, periodic review, and requalification. See [continued process verification cpv](/articles/continued-process-verification-cpv) and [requalification and periodic review equipment](/articles/requalification-and-periodic-review-equipment) for the ongoing-state expectations.

---

## Common mistakes and inspection-finding patterns

These are the recurring patterns that show up in regulatory findings on water systems. None name any company; they are the generic failure modes.

- **Dead legs and poor loop design.** Unused branches, oversized point-of-use drops, instrument tees, and abandoned-in-place lines that hold water. Inspectors measure L/D and ask for the dead-leg analysis.
- **Inadequate sanitization frequency or coverage.** Sanitizing too rarely, or a thermal cycle that never reaches temperature at the most distal point because no one mapped the loop during sanitization.
- **Microbial trend ignored.** Counts rising over weeks while staying below action level, treated as "in spec" and never investigated. The action level is not a license to ignore an obvious upward trend; alert levels exist precisely to catch this.
- **Treating action levels as release specs (or vice versa).** Confusing the compendial conductivity/TOC limits (real specs) with the microbial action levels (trended guidance) in either direction.
- **Sampling that does not match use.** Sampling a point after a long flush when production draws water without flushing, so the sample is cleaner than the water actually used. Sample the way you use the water, or define and justify the difference.
- **Weak excursion handling.** A microbial action-level exceedance with no impact assessment on product made since the last clean result, no microbial identification, and no link to sanitization. See [oos investigation process](/articles/oos-investigation-process) and [deviation management](/articles/deviation-management).
- **Online instrument data integrity gaps.** Online conductivity and TOC analyzers generate GMP data; if the PLC/SCADA historian has no audit trail, weak access control, or unsynchronized clocks, the data is challengeable. See [process historian data integrity](/articles/process-historian-data-integrity) and [audit trail design and review](/articles/audit-trail-design-and-review).
- **Vent filter and rouge neglect.** Storage tank vent filters not integrity-tested or not heated (so they wet and admit organisms), and no rouge/passivation program for stainless surfaces.
- **Skipping or shortening Phase 3.** Declaring the system validated after a few clean weeks without the full year that proves performance across seasons, then a summer feedwater shift produces excursions that were never anticipated.

---

## Interview-ready questions and strong answers

**Q: Walk me through the three-phase qualification of a water system. Why a full year?**
Phase 1 is intensive daily sampling of every point of use to prove the system can make compliant water and to finalize the operating and sanitization SOPs, with no product use. Phase 2 confirms those finalized routine procedures with continued daily sampling, and water is often released at the end on a risk basis. Phase 3 runs for a full year on a rotating sampling schedule to prove the system holds up across seasonal feedwater variation, because source water in summer differs from winter in temperature, organics, and microbial load. The year is about proving the system across seasons, not paperwork.

**Q: What is the difference between a microbial action level and a conductivity limit?**
Conductivity (USP <645>) and TOC (USP <643>) are compendial specifications with defined limits; failing them means the water does not meet the monograph. The microbial counts are action levels, recommended guidance you set and trend, not pass/fail release specs. You also set alert levels below them as an early-warning trigger. Strong candidates stress trending and that a rising count below the action level still demands investigation.

**Q: Why is WFI traditionally distilled, and what changed?**
Distillation provides a phase-change barrier that strongly removes endotoxin and microorganisms, which is why it was historically required. The EU has aligned with USP to allow non-distillation WFI, for example reverse osmosis with ultrafiltration and EDI, provided the system is qualified and continuously monitored. The catch is that without a phase-change barrier you must prove continuous endotoxin control, so ultrafiltration integrity, online TOC, and a tight microbial program become essential.

**Q: What is a dead leg and why does it matter?**
A dead leg is a length of pipe off the recirculating loop where water does not move, so it warms and grows biofilm. The classic limit is an L/D ratio of less than 6 from the loop's inner wall, and modern designs target zero-dead-leg valves. Dead legs are one of the most cited water system findings because they seed the whole loop with organisms.

**Q: How do you set up the microbial test for water and why those conditions?**
Membrane filtration for WFI so you can filter a large volume to detect very low counts, low-nutrient agar such as R2A, and extended incubation at a lower temperature because water organisms are slow-growing oligotrophs that recover poorly on rich media at 35 C for two days. The method must be validated for recovery.

**Q: An online conductivity alarm trips on the WFI loop return at 2 a.m. What do you do?**
Treat it as a potential excursion: confirm the instrument is calibrated and not the cause, assess whether water was used for product since the last good reading, perform the staged <645> evaluation if needed, investigate the cause (EDI/RO performance, temperature compensation, a sanitization cycle just finishing), quarantine affected water, and run it through deviation management with impact assessment.

**Q: What is the endotoxin limit for WFI and how is it tested?**
Not more than 0.25 EU/mL, tested per USP <85> by an LAL method (gel clot or a kinetic turbidimetric/chromogenic assay). Endotoxin control is the defining reason WFI is a separate grade.

For broader interview preparation across quality topics, see [gxp quality interview preparation](/articles/gxp-quality-interview-preparation).

---

## Practical tips

- **Build the sampling burden into the project plan.** Phase 1 daily sampling of every point of use can mean dozens of microbial plates per day for weeks. Confirm lab capacity, incubator space, and analyst availability before you start, or the qualification stalls.
- **Map the loop during sanitization, not just during operation.** The worst-case point for sanitization (slowest to heat) is often not the worst-case point for microbial growth. Prove both.
- **Trend in real time and look at the slope, not just the value.** A TOC creeping up while conductivity holds steady is biofilm before it is a count.
- **Sample the way you use the water.** If production does not flush, your qualification sampling should reflect that, or you are validating a cleaner condition than reality.
- **Treat the PLC/SCADA as a GMP computerized system.** Online conductivity, TOC, temperature, and ozone data are GMP records; they need audit trail, access control, time synchronization, and backup like any other system.
- **Keep the weld map, materials certs, and passivation records.** Inspectors ask for them, and they are the only evidence that the loop is what the design said it would be.
- **Have a clear water-release decision rule.** Define exactly which results gate release, who decides, and what happens to water made between a good result and a later failing one.

### Related reading

- [clean utilities qualification](/articles/clean-utilities-qualification)
- [equipment qualification lifecycle](/articles/equipment-qualification-lifecycle)
- [temperature mapping qualification](/articles/temperature-mapping-qualification)
- [sterilization validation moist heat](/articles/sterilization-validation-moist-heat)
- [environmental monitoring program](/articles/environmental-monitoring-program)
- [bioburden and endotoxin testing](/articles/bioburden-and-endotoxin-testing)
- [annex 1 contamination control strategy](/articles/annex-1-contamination-control-strategy)
- [aseptic processing and media fills](/articles/aseptic-processing-and-media-fills)
- [commissioning qualification astm e2500](/articles/commissioning-qualification-astm-e2500)
- [continued process verification cpv](/articles/continued-process-verification-cpv)
