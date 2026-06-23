---
title: "Clean Utilities Qualification: Clean Steam, Compressed Gases, and HVAC"
description: "How to qualify the clean utilities that touch product: clean and pure steam, compressed air and process gases, and HVAC. Regulatory basis, sampling plans, acceptance criteria, and the inspection findings that catch people out."
pubDate: 2026-06-20
tags: ["equipment-qualification", "clean-utilities", "clean-steam", "compressed-gases", "hvac", "validation", "gmp"]
pillar: "equipment-qualification"
tier: "Advanced"
---

Water gets all the attention. Most qualification programs treat the purified water and water-for-injection loop as the marquee utility, write a thick validation package for it, and then handle clean steam, compressed gases, and HVAC as afterthoughts buried in a building handover. That is exactly backwards from a risk standpoint, because clean steam contacts sterilized product paths, compressed air blows directly onto open product and primary containers, and HVAC is the single largest source of viable and non-viable contamination in a sterile facility. These are the utilities that touch the product when nobody is watching, and they are the ones inspectors increasingly drill into once the water system passes.

This article covers the three utilities that complete the set: clean and pure steam, compressed air and process gases, and HVAC beyond the cleanroom classification number. For each, the regulatory basis, what the qualification package contains, how to run the study, the acceptance criteria, worked examples, who owns what, and the findings that show up in 483s and inspection reports. Water itself is covered separately in [Water System Validation per USP 1231](/articles/water-system-validation-usp-1231) and the cleanroom particle classification is in [Cleanroom Classification per ISO 14644](/articles/cleanroom-classification-iso-14644); this page assumes you have read or will read those.

---

## Why clean utilities are qualified at all

A clean utility is a service that contacts the product, the product-contact surface, or the immediate product environment. The defining test is contact, direct or indirect. Plant steam that heats a jacket through a closed wall is a black utility (a building service) and is commissioned, not qualified. The clean steam that is injected into an autoclave chamber and condenses on sterilized parts is a direct-contact utility and is qualified. Compressed air used to drive a cylinder is black; compressed air that purges a vial before filling is clean. Drawing this line correctly is the first decision in the whole program, and getting it wrong in either direction is a classic finding: a missed clean utility (under-qualification) or a fully qualified building chiller that never touches anything (wasted effort, and an audit trail of pointless testing that an inspector will read as a program that cannot prioritize risk).

The regulatory hooks are general rather than utility-specific. In the US, 21 CFR 211.46 covers ventilation, air filtration, and air handling, and 21 CFR 211.63 and 211.67 require equipment (which includes utility systems) to be suitable and maintained. 21 CFR 211.48 covers plumbing and the supply of water and other services. The EU GMP framework, in EudraLex Volume 4 Part I Chapter 3, requires premises and equipment, including services, to be designed and qualified to suit operations and minimize contamination. For sterile manufacturing, EU GMP Annex 1 (2022, effective 25 August 2023) is now the most prescriptive single document on clean utilities: it explicitly names water systems, steam used for sterilization, gases, and HVAC, and it folds all of them into the site Contamination Control Strategy. ISPE Baseline Guide Volume 4 (Water and Steam Systems) and ISPE Good Practice Guides on process gases and HVAC are the engineering references practitioners actually build from. The lifecycle approach (URS, risk assessment, IQ/OQ/PQ or the ASTM E2500 commissioning-and-qualification flow) is covered in [Equipment Qualification Lifecycle](/articles/equipment-qualification-lifecycle) and [Commissioning and Qualification per ASTM E2500](/articles/commissioning-qualification-astm-e2500), and the same lifecycle applies to every utility below.

The risk rationale, stated plainly: these utilities can introduce chemical contaminants (oil, hydrocarbons, rust, condensate fines), microbial contaminants (viable organisms, biofilm), pyrogens (endotoxin), and particulate. They can also fail to deliver the property you depend on, for example steam that is too wet to sterilize, or air that carries the wrong dew point and condenses inside a line. The qualification proves both that the utility is clean and that it performs.

---

## Clean steam and pure steam

### What it is and the two grades

"Clean steam" and "pure steam" are not interchangeable, and the distinction matters in interviews and audits.

- **Clean steam (also called clean utility steam)** is steam generated from treated feedwater (typically purified water or softened/deionized water) in a dedicated generator, free of the boiler additives (amines, hydrazine, phosphates) found in plant steam. It is used where its condensate will contact product or product-contact surfaces but where the very tightest water quality is not mandated.
- **Pure steam (also called clean steam for sterilization, or WFI-quality steam)** is the higher grade: its condensate must meet Water for Injection quality. It is generated from feedwater of at least purified-water quality in a pure steam generator, and its condensate is tested against the WFI monograph. Pure steam is what you use to sterilize equipment and components that contact sterile or parenteral product, and to sterilize the WFI distribution system itself.

The governing quality bar for pure steam condensate is the Water for Injection monograph and the supporting general chapter [USP 1231 Water for Pharmaceutical Purposes](/articles/water-system-validation-usp-1231): conductivity per USP 645, Total Organic Carbon per USP 643, plus bacterial endotoxin (USP 85, limit 0.25 EU/mL for WFI), and microbial control. The European Pharmacopoeia general monograph "Pure steam" makes this explicit: condensed pure steam must comply with the WFI requirements. Annex 1 (2022) states that steam used for sterilization should be of suitable quality and should not contain additives that could contaminate product or equipment.

### Steam quality: the three physical attributes (the part people forget)

Chemistry is only half of steam qualification. The other half is the steam quality triad, which is what actually determines if your autoclave or SIP cycle sterilizes. The standard that practitioners build from is EN 285 (Sterilization, Steam sterilizers, Large sterilizers); refer to the current edition for its exact limits. It describes three measurements, performed with a steam quality test rig at the point of use. The values below are the limits commonly applied in practice; confirm them against your own edition of the standard:

| Attribute | What it measures | Limit commonly applied | Failure mode if out |
|---|---|---|---|
| Non-condensable gases (NCG) | The proportion of air and other gases carried in the steam that stay gaseous instead of condensing | No more than about 3.5% by volume | Air pockets shield items from steam; cold spots; sterilization failure |
| Dryness value (dryness fraction) | How much of the steam is dry saturated vapor rather than entrained liquid water | At least roughly 0.90, and tighter (around 0.95) for dense metal loads | Wet steam, superheating risk, poor heat transfer, wet packs |
| Superheat | How far the steam temperature climbs above saturation when it expands to atmospheric pressure | No more than about 25 C | Steam behaves like hot air, drastically reduced lethality |

If you only test condensate chemistry and skip the EN 285 triad, you have tested whether the steam is clean but not whether it sterilizes. That is a real and common gap.

### What goes in the qualification package

A clean/pure steam qualification typically contains:

1. **User Requirements Specification (URS)** naming the steam grade, capacity, pressure, point-of-use list, and the quality attributes with limits. Traceability of these requirements is covered in [User Requirements and Traceability](/articles/user-requirements-and-traceability).
2. **Risk assessment** (FMEA or similar, see [Quality Risk Management](/articles/quality-risk-management)) identifying critical aspects: feedwater quality, generator design (column/separator carryover), distribution material (316L stainless, orbital-welded, sloped to drain), and points of use.
3. **Design qualification / enhanced design review** confirming sanitary design: no dead legs greater than the usual rule of thumb (commonly stated as no more than 2 to 3 pipe diameters, measured from the run wall to the obstruction), sloped piping, steam traps positioned to remove condensate, sample valves at each point of use.
4. **Installation Qualification (IQ)**: P&ID verification, material certificates (mill certs for 316L, surface finish records, often Ra ≤ 0.8 µm for product-contact lines), weld logs and boroscope/radiography records, slope verification, instrument calibration ([Calibration and Metrology Program](/articles/calibration-and-metrology-program)).
5. **Operational Qualification (OQ)**: generator performance, pressure control, time to reach steady state, alarms, and an initial steam quality (EN 285) and condensate chemistry check at worst-case points of use.
6. **Performance Qualification (PQ)**: the three-phase sampling study described below, proving sustained quality and chemistry over time.

### How to run the PQ: the three-phase model

Clean utility PQ borrows the three-phase logic from water systems, because the failure mode (biofilm, drift, seasonal feedwater change) is the same.

- **Phase 1 (intensive, roughly 2 to 4 weeks):** sample every point of use, every operating day, for condensate chemistry (conductivity, TOC), endotoxin (pure steam), microbial, and run steam quality (NCG, dryness, superheat) at worst-case points. Do not release the system to routine production based on Phase 1 alone; this phase confirms there is no immediate problem and sets the operating procedures.
- **Phase 2 (roughly 2 to 4 weeks):** same testing, demonstrating the system performs reliably under the SOPs derived from Phase 1. The system can typically support production during Phase 2 under a documented interim release.
- **Phase 3 (the remainder of about a year):** reduced-frequency monitoring, often rotating through points of use, specifically to capture seasonal variation in feedwater. This is why steam and water are qualified across a full year and not in three weeks.

A worked acceptance summary for a pure steam point of use looks like this:

| Attribute | Method/standard | Limit | Phase 1 worst result | Verdict |
|---|---|---|---|---|
| Conductivity | USP 645 (Stage 1) | within Stage 1 table for temperature | 1.0 µS/cm | Pass |
| TOC | USP 643 | ≤ 500 ppb | 180 ppb | Pass |
| Endotoxin | USP 85, BET | < 0.25 EU/mL | < 0.05 EU/mL | Pass |
| Microbial (condensate) | membrane filtration | ≤ 10 CFU/100 mL (action; WFI alert/action set by site) | < 1 CFU/100 mL | Pass |
| Non-condensable gases | EN 285 | ≤ 3.5% v/v | 1.8% | Pass |
| Dryness value | EN 285 | ≥ 0.90 | 0.97 | Pass |
| Superheat | EN 285 | ≤ 25 °C | 4 °C | Pass |

Microbial and endotoxin limits should be set against the WFI monograph and your site's alert/action regime; the numbers above are illustrative of how the table reads, not a substitute for your specifications.

### Common clean steam mistakes and findings

- **Treating plant steam as clean steam** because "it goes through a clean line." If it carries boiler amines, it is not clean. Inspectors look for the additive specification of the boiler chemicals and ask where that steam ends up.
- **No steam quality testing at all**, only condensate chemistry. Very common gap. EN 285 NCG/dryness/superheat is a separate test rig and a separate skill, and it is frequently skipped.
- **Sampling at the generator outlet only**, not at the points of use. Quality degrades along the distribution: condensate forms, traps fail, dead legs harbor problems. The point of use is where the product sees it, so that is where you sample.
- **Dead legs and poor slope** that pool condensate, defeating sterilization and growing microbial issues. Found on P&ID review and walkdown.
- **Endotoxin not tested on pure steam condensate.** Pure steam sterilizes parenteral contact surfaces; if its condensate carries endotoxin, you are depositing pyrogen on a "sterile" surface. This ties to [Bioburden and Endotoxin Testing](/articles/bioburden-and-endotoxin-testing).

---

## Compressed air and process gases

### What it is and why it is high-risk

Compressed air, nitrogen, oxygen, carbon dioxide, and argon are clean utilities when they contact product, primary container surfaces, or the product environment. The reason they rank high on risk is mechanical: gas is blown, often at velocity, directly onto open product, into vials and bottles, into lyophilizers, into bioreactors as a sparge, and as an inert overlay. Whatever the gas carries (oil aerosol from the compressor, water that condenses and grows organisms, particulate, hydrocarbons) lands on or in the product. There is no rinse step after a nitrogen purge.

### The quality standard: ISO 8573 and the pharmacopeial gas monographs

Two different quality regimes apply and you must know which is which.

**ISO 8573-1 (Compressed air, Part 1: Contaminants and purity classes)** is the engineering standard that classifies compressed air (and by extension other compressed gases) by three contaminants, each on a numbered purity-class scale. The class definitions and their exact thresholds live in the standard's tables; refer to ISO 8573-1:2010 for the numbers. The notes below describe how the classes are used in practice:

| Contaminant | What it controls | Typical pharma target classes |
|---|---|---|
| Particles | Number and size of solid particles per m³ | Class 1 or 2, with the tighter class used for the most sensitive product contact; a stricter class allows fewer and smaller particles per m³ than a looser one (see the ISO 8573-1 table for the per-size-band counts) |
| Water (dew point) | Pressure dew point, i.e. how dry the air is | A class with a low pressure dew point (well below freezing) for product contact, easing to a milder dew point for less demanding uses; product-contact air needs a dew point low enough to prevent condensation and microbial growth in the line |
| Oil (total) | Liquid oil, aerosol, and oil vapor | The tightest oil class (the lowest residual oil tier in the standard) for any product-contact gas |

The companion parts give the test methods: ISO 8573-2 and 8573-4 for oil aerosol and particles, ISO 8573-5 for oil vapor, ISO 8573-7 for viable microbial contaminant. You cite the standard as, for example, "ISO 8573-1:2010 Class 1.2.1" meaning oil Class 1, water Class 2, particles Class 1. Learn to read that triplet; interviewers use it.

**Pharmacopeial gas monographs** apply when the gas itself is a defined substance, most often medical or pharmaceutical-grade gas. USP has monographs for Nitrogen, Oxygen, Carbon Dioxide, and others, and the European Pharmacopoeia has the corresponding gas monographs. These set identity and assay limits (for example nitrogen purity, oxygen content limits, moisture, carbon monoxide). A nitrogen used as a pharmaceutical-grade inert blanket should meet the relevant monograph for identity and purity; a nitrogen used only to actuate a valve does not.

So the decision tree is: gas contacts product as a defined gaseous substance → meet the pharmacopeial monograph plus a microbial/particle/oil control regime appropriate to the contact. Gas contacts product surfaces or environment but is not itself a "drug substance" gas → ISO 8573 purity classes plus microbial control. Gas is a black utility → commission only.

### What goes in the package and how to run it

The IQ confirms the generation and treatment train: compressor type (oil-free vs oil-lubricated with coalescing filtration), dryers (desiccant or refrigerant) sized for the required dew point, sterilizing-grade point-of-use filters (typically 0.22 µm hydrophobic membrane) with integrity-testable housings, sample ports at each point of use, and instrumentation (dew point transmitters, pressure).

The OQ confirms the system holds dew point and pressure across the demand range, that filters can be integrity tested, that alarms work, and that dryers regenerate.

The PQ is a sampling study at the points of use, and the worst-case point of use is the one farthest from treatment or with the highest demand. Test for:

- **Oil content** (ISO 8573-2/-5)
- **Water / pressure dew point** (continuous transmitter plus periodic reference check)
- **Particles** (ISO 8573-4, often using a particle counter at the outlet)
- **Microbial** (ISO 8573-7, impaction or membrane onto the point of use)
- **Identity/assay** for pharmacopeial gases (per monograph)

A worked acceptance table for a nitrogen used to overlay open product:

| Attribute | Standard/method | Limit | Result | Verdict |
|---|---|---|---|---|
| Identity / purity | USP/Ph. Eur. Nitrogen monograph | ≥ 99.0% N2 (per monograph) | 99.9% | Pass |
| Oil total | ISO 8573-1 Class 1 | ≤ 0.01 mg/m³ | < 0.003 mg/m³ | Pass |
| Water (PDP) | ISO 8573-1 Class 2 | ≤ -40 °C PDP | -52 °C | Pass |
| Particles | ISO 8573-1 Class 1 | per Class 1 table | within Class 1 | Pass |
| Microbial | ISO 8573-7 / site limit | ≤ 1 CFU/m³ (site action) | 0 CFU/m³ | Pass |

Sampling frequency in the qualification mirrors water/steam: an intensive phase, then routine monitoring at a justified frequency in the validated state. Dew point is usually monitored continuously; oil and microbial are periodic.

### Common gas mistakes and findings

- **Point-of-use filter not integrity tested.** A 0.22 µm sterilizing filter that protects open product must be integrity tested (bubble point or pressure hold) on a defined schedule, and the housing must be designed to allow it. Inspectors ask to see the filter integrity records, and "we change it annually but never test it" is a finding.
- **Dew point set too high.** If the pressure dew point is above the line temperature, water condenses inside the distribution, and standing water grows organisms. A common error is qualifying air to a +3 °C dew point and running it through a cold room.
- **Oil-lubricated compressor with single-stage filtration** feeding a product-contact gas. Either use an oil-free compressor or prove the coalescing/carbon train delivers Class 1 oil consistently, including oil vapor (the part people forget, because they test aerosol oil but not vapor).
- **Wrong standard cited.** Calling pharmaceutical nitrogen "ISO 8573 compliant" without checking the pharmacopeial monograph, or conversely qualifying instrument air against a drug monograph it never needed. Match the standard to the use.
- **No microbial sampling of gas.** People assume compressed gas is sterile because it is dry. It is not; biofilm forms at any wet point, and the gas carries organisms onto product. ISO 8573-7 microbial sampling belongs in the package.
- **Single sample point at the receiver.** Quality is point-of-use, after the final filter, in the actual fitting that meets the process.

---

## HVAC qualification (beyond the cleanroom class number)

### What HVAC qualification actually has to prove

The cleanroom particle classification (ISO 14644-1 Class 5, 7, 8, or the EU GMP Grade A/B/C/D) is the headline number, and it is covered in [Cleanroom Classification per ISO 14644](/articles/cleanroom-classification-iso-14644). But the particle count is an outcome, not the qualification. HVAC qualification proves the system that delivers that outcome: that it conditions the air, filters it, moves enough of it, sweeps the room in the right direction, holds the right pressure relationships, recovers after a disturbance, and keeps the right temperature and humidity. ISO 14644-3 (Test methods) defines how to run these tests, and Annex 1 (2022) is explicit that HVAC, room qualification, and recovery are part of the contamination control strategy. The classification tests themselves are in ISO 14644-1 and the requalification cadence in ISO 14644-2.

### The HVAC qualification test set

A full HVAC PQ covers the following. Know all of them; interviewers like to ask "name the HVAC qualification tests" and a strong answer lists them with their purpose.

| Test | What it proves | Typical acceptance basis |
|---|---|---|
| HEPA filter installation integrity (DOP/PAO leak test) | The terminal filters and their gaskets/frames have no leaks | ≤ 0.01% penetration (≤ 0.01% of upstream challenge), per IEST-RP-CC034 / ISO 14644-3 |
| Airflow volume / air changes per hour (ACH) | Enough clean air is delivered to dilute and remove contamination | Design ACH met (e.g. ≥ 20 ACH common for Grade C/D, higher or unidirectional for Grade A/B) |
| Air velocity (unidirectional/Grade A) | Laminar sweep removes particles from the critical zone | Annex 1 guides ~0.36 to 0.54 m/s at the working position for Grade A (guidance value, justify your set point) |
| Airflow direction / visualization (smoke study) | Air moves from clean to less clean, sweeps the critical zone, no turbulence over open product | Documented video; no ingress, no entrainment over product |
| Room pressure differentials (cascade) | Cleaner rooms are positive to dirtier rooms, contamination flows outward | Annex 1 guides ~10 to 15 Pa between grades (justify) |
| Particle classification (at rest and in operation) | The room meets its ISO class / EU Grade | ISO 14644-1 class limits, both occupancy states |
| Recovery time | The room clears a particle challenge in a defined time | Often ~15 to 20 min to recover to class, or a 100:1 cleanup ratio per ISO 14644-3 |
| Temperature and relative humidity | Comfort, microbial control, product/process needs met | Per URS (e.g. 20 ± 2 °C, RH 30 to 60%) |
| Containment / induction leakage (where applicable) | For containment suites, no inward/outward leakage of hazardous material | Per containment design |

### How to run it, in sequence

The order matters because each test depends on the previous one being settled.

1. **Stabilize and balance the system first.** The TAB (test, adjust, balance) contractor sets dampers and fan speeds so airflows match design. This is commissioning, not qualification, but qualification cannot start until it is done and documented.
2. **HEPA integrity (DOP/PAO).** Test every terminal filter for leaks before you trust any downstream count. A leaking filter invalidates the classification.
3. **Airflow volume and ACH.** Measure supply volumes (capture hood or duct traverse), compute ACH per room.
4. **Air velocity** for unidirectional zones.
5. **Pressure cascade.** Verify each room's differential to its neighbors, doors closed, with the design door-open and door-transition behavior also assessed.
6. **Airflow visualization (smoke study).** Run at rest and, critically, in operation with personnel and equipment present, video-recorded, over every open-product location in Grade A. Annex 1 effectively makes the in-operation smoke study mandatory for aseptic critical zones.
7. **Particle classification**, at rest and in operation, per ISO 14644-1 sampling-location and sample-volume rules.
8. **Recovery time.** Generate a particle challenge, switch to clean operation, and time the return to class.
9. **Temperature and RH** mapping/monitoring, linked to [Temperature Mapping Qualification](/articles/temperature-mapping-qualification) for the spatial study.

### Worked example: a Grade C filling support room

| Parameter | URS / design | Acceptance criterion | Measured | Verdict |
|---|---|---|---|---|
| Terminal HEPA integrity | All filters | ≤ 0.01% penetration | max 0.004% | Pass |
| Air changes per hour | ≥ 20 ACH | ≥ 20 ACH | 24 ACH | Pass |
| Pressure to adjacent Grade D | +15 Pa | 10 to 15 Pa, positive | +14 Pa | Pass |
| Particle class at rest | ISO 7 (Grade C at rest) | ≤ 352,000 / m³ at 0.5 µm | 120,000 | Pass |
| Particle class in operation | ISO 8 (Grade C in operation) | ≤ 3,520,000 / m³ at 0.5 µm | 1,400,000 | Pass |
| Recovery time | clean-up | ≤ 20 min to class | 12 min | Pass |
| Temperature | 20 ± 2 °C | 18 to 22 °C | 20.4 °C | Pass |
| Relative humidity | 45 ± 15% | 30 to 60% | 48% | Pass |

The "at rest" and "in operation" rows show the EU GMP two-state requirement; reporting only one state is a finding. The viable side of the room (settle plates, active air, contact plates) is qualified and run under the [Environmental Monitoring Program](/articles/environmental-monitoring-program), and the whole HVAC picture feeds the [Annex 1 Contamination Control Strategy](/articles/annex-1-contamination-control-strategy).

### Common HVAC mistakes and findings

- **Smoke study done at rest only, or not done over open product.** This is one of the most cited sterile findings. Annex 1 wants dynamic, in-operation visualization at every Grade A intervention point, video-recorded and retained. A still photo or a single at-rest pass does not satisfy it.
- **Classification reported in one occupancy state.** Both at-rest and in-operation are required for EU Grades; reporting only at-rest hides the real exposure.
- **Recovery time never tested**, so the room cannot be shown to recover after a door opening or a spill. ISO 14644-3 defines the method; do not skip it.
- **Pressure cascade verified only with doors closed.** Doors open during normal work. The qualification should assess door-open behavior or, at minimum, prove the interlock/airlock strategy that protects the cascade.
- **HEPA integrity confused with classification.** Counting particles in the room is not a filter leak test. You must scan the filter face and frame with an aerosol challenge (DOP/PAO) to find a pinhole leak that a room-average count would miss.
- **Stale qualification, no requalification cadence.** ISO 14644-2 and Annex 1 expect periodic requalification (commonly 6 months for Grade A/B, 12 months for Grade C/D for classification, plus integrity and other tests on their own cycles). See [Requalification and Periodic Review of Equipment](/articles/requalification-and-periodic-review-equipment).

---

## Roles and responsibilities across all three utilities

Utility qualification is a team activity, and inspectors expect clear ownership in the protocol and report.

| Role | Responsibility |
|---|---|
| System owner / Engineering | Owns the utility, defines the URS and design, runs maintenance, leads IQ/OQ execution, raises and resolves deviations |
| Validation / C&Q lead | Writes the qualification strategy and protocols, defines acceptance criteria with QA, manages the lifecycle from VMP to summary report (see [Validation Master Plan and Periodic Review](/articles/validation-master-plan-and-periodic-review)) |
| Quality Assurance | Approves URS, risk assessment, protocols, deviations, and the summary report; sets/approves acceptance criteria and release; independent oversight |
| QC / Microbiology | Performs and reports condensate chemistry, endotoxin, microbial, and gas analysis; owns the test methods and their validation |
| SME (steam/HVAC/gas engineer) | Provides design rationale, runs or oversees specialist tests (EN 285 steam rig, ISO 8573 gas sampling, DOP/PAO scans, smoke studies); justifies set points |
| Vendor / specialist contractor | Supplies the system or runs the TAB and filter-integrity testing under a defined protocol; deliverables are reviewed and approved by the site, not taken on faith |
| Metrology / Calibration | Ensures all measuring instruments (dew point, particle counters, pressure, temperature/RH, the EN 285 rig) are calibrated and traceable before use |

The recurring failure here is the vendor doing the testing and the site rubber-stamping it. The site is accountable for the data regardless of who held the instrument. Vendor data must be reviewed, the instruments must be calibrated and traceable, and any vendor deviation must flow into the site deviation system per [Deviation Management](/articles/deviation-management).

---

## Tying it together: the lifecycle and the CCS

All three utilities follow the same spine: URS, risk assessment, design qualification, IQ, OQ, PQ, summary report, then a validated state maintained by calibration, preventive maintenance, monitoring, periodic review, and change control. Use [Change Control for Validated Systems](/articles/change-control-validated-systems) for any modification (a new point of use, a filter change-out program change, a damper rebalance), and [Continued Process Verification](/articles/continued-process-verification-cpv)-style trending for the ongoing monitoring data so drift is caught before it becomes an excursion (see also [Out-of-Trend Investigations](/articles/out-of-trend-investigations)).

For a sterile facility, the single integrating document is the Contamination Control Strategy. Annex 1 (2022) requires the CCS to draw together water, steam, gases, HVAC, personnel, materials, and process into one holistic argument for why contamination is controlled. A clean utility qualification that sits in a binder unconnected to the CCS is a half-finished job. The qualification proves the utility is fit; the CCS proves the utility's role in protecting the product, and that is what an Annex 1 inspector reads first.

---

## Interview-ready questions and strong answers

**Q: What is the difference between clean steam and pure steam?**
Both are free of boiler additives. Pure steam is the higher grade: its condensate must meet the Water for Injection monograph (conductivity per USP 645, TOC per USP 643, endotoxin < 0.25 EU/mL, microbial control), and it is used to sterilize parenteral-contact equipment and the WFI system. Clean steam is generated from treated feedwater and is additive-free but is not held to the full WFI condensate spec. The Ph. Eur. "Pure steam" monograph requires the condensate to comply with WFI.

**Q: Steam chemistry passes but the autoclave keeps failing biological indicators. Where do you look?**
Steam quality, not chemistry. Run the EN 285 triad: non-condensable gases (≤ 3.5% v/v), dryness value (≥ 0.90), and superheat (≤ 25 °C). High NCG creates air pockets that shield the load; wet steam or superheated steam both kill lethality. Clean chemistry tells you the steam is pure, not that it sterilizes.

**Q: How do you specify compressed air that blows onto open vials?**
Against ISO 8573-1, naming the three purity classes: oil Class 1 (≤ 0.01 mg/m³ total, aerosol plus vapor), a water class with a pressure dew point below the lowest line temperature to prevent condensation, and a particle class appropriate to the room grade. Add microbial sampling per ISO 8573-7 and a point-of-use 0.22 µm sterilizing filter that is integrity tested on a schedule. Sample at the point of use after the final filter, not at the receiver.

**Q: Name the HVAC qualification tests.**
HEPA filter integrity by DOP/PAO scan, airflow volume and air changes per hour, air velocity for unidirectional zones, room pressure differentials, airflow visualization (smoke study) at rest and in operation, particle classification at rest and in operation per ISO 14644-1, recovery time per ISO 14644-3, and temperature and relative humidity. Requalification cadence comes from ISO 14644-2 and Annex 1.

**Q: Why must the smoke study be done in operation?**
Because at rest the room is empty and the air sweep is undisturbed. In operation, people, equipment, and interventions create turbulence and can carry contamination over open product. Annex 1 wants dynamic visualization at every Grade A intervention point, video-recorded, because that is the condition under which product is actually exposed.

**Q: Why three phases over a year for steam and gases?**
To capture seasonal variation, mainly in feedwater and ambient conditions, and to confirm the system holds quality over time rather than just on a good day. Phase 1 is intensive and does not release the system on its own; Phase 2 confirms reliability under the operating SOPs; Phase 3 is reduced-frequency monitoring through the seasons.

**Q: A pure steam point of use passes conductivity and TOC but endotoxin is borderline. Can you release it?**
No, not for sterilizing parenteral-contact surfaces. Pure steam condensate must meet WFI, including endotoxin < 0.25 EU/mL. A borderline or failing endotoxin result means you could be depositing pyrogen on a "sterile" surface. Investigate the feedwater and the generator's separation performance (carryover) before release.

**Q: How is a clean utility different from a black utility, and why does it matter?**
A clean utility contacts product, product-contact surfaces, or the immediate environment and must be qualified to a quality spec. A black utility is a building service that does not contact product and is only commissioned. Drawing the line wrong means either under-qualifying a contact utility (a real contamination risk and a finding) or over-qualifying a building service (wasted effort that signals a program that cannot prioritize risk).

---

## Practical tips

- Build the clean-vs-black utility matrix early, get QA to sign it, and let it drive the whole program. Every utility on the site should appear on it with a documented rationale.
- Sample at the point of use, after the last treatment, in the real fitting. Generator-outlet data flatters you and proves nothing about what the product sees.
- For steam, buy or rent a proper EN 285 steam quality test rig and train someone on it. The triad is a genuine skill, and skipping it is the most common steam gap.
- For gas, test oil vapor, not just oil aerosol, and never assume dry gas is sterile. Put ISO 8573-7 microbial sampling in the protocol.
- For HVAC, record the in-operation smoke study on video and keep it; an inspector will ask to watch it. Report both occupancy states for every classified room.
- Align all set points (dew point, pressure cascade, ACH, velocity) with a justification in the URS. "Because the vendor set it there" is not a justification.
- Feed every monitoring stream into trending so drift triggers an investigation before it becomes an out-of-specification event.

---

## Related articles

- [Water System Validation per USP 1231](/articles/water-system-validation-usp-1231)
- [Cleanroom Classification per ISO 14644](/articles/cleanroom-classification-iso-14644)
- [Temperature Mapping Qualification](/articles/temperature-mapping-qualification)
- [Equipment Qualification Lifecycle](/articles/equipment-qualification-lifecycle)
- [Commissioning and Qualification per ASTM E2500](/articles/commissioning-qualification-astm-e2500)
- [Environmental Monitoring Program](/articles/environmental-monitoring-program)
- [Annex 1 Contamination Control Strategy](/articles/annex-1-contamination-control-strategy)
- [Sterilization Validation: Moist Heat](/articles/sterilization-validation-moist-heat)
- [Bioburden and Endotoxin Testing](/articles/bioburden-and-endotoxin-testing)
- [Requalification and Periodic Review of Equipment](/articles/requalification-and-periodic-review-equipment)
- [Quality Risk Management](/articles/quality-risk-management)
