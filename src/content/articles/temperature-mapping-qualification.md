---
title: "Temperature Mapping and Thermal Qualification of Chambers, Autoclaves, and Cold Storage"
description: "How to plan, execute, and document temperature mapping studies for stability chambers, autoclaves, freezers, refrigerators, and warehouses, including sensor placement, empty and loaded studies, hot and cold spot identification, MKT, and acceptance criteria."
pubDate: 2026-06-20
tags: ["equipment-qualification", "temperature-mapping", "validation", "cold-chain", "autoclaves", "stability-chambers", "gmp"]
pillar: "equipment-qualification"
tier: "Intermediate"
---

Temperature is the one variable almost every regulated product depends on. A stability chamber that drifts 3 degrees high invalidates the data that supports a shelf life. A freezer that swings into and out of its rated band ages cell banks and biologic drug substance. An autoclave with a cold spot delivers an under-sterilized load that still gets labeled sterile. Temperature mapping is how you prove, with measured evidence and not assumption, that every position a product can occupy inside a unit holds the temperature you claim it holds.

This article walks through the full thermal qualification workflow for the equipment classes you will actually be asked to map: stability chambers, refrigerators and freezers, walk-in cold rooms and warehouses, and moist-heat autoclaves and dry-heat ovens. It covers the regulatory basis, sensor counts and placement, empty versus loaded versus door-open studies, how to find and treat hot and cold spots, mean kinetic temperature, acceptance criteria, the worked numbers, who owns what, and the findings inspectors write up most often.

---

## Why thermal qualification is required

Temperature mapping is not its own regulation. It is the evidence layer that satisfies several requirements at once.

For GMP storage and processing equipment, the foundation is 21 CFR 211.68 (automatic, mechanical, and electronic equipment) and 21 CFR 211.142 / 211.150 (warehousing and distribution procedures), plus the general requirement in 21 CFR 211.63 that equipment be of appropriate design and adequate size for its intended use. EU GMP carries the same obligation through Chapter 3 (premises and equipment) and Chapter 5. None of these say "perform a 9-point mapping with 24-hour logging," but all of them require you to demonstrate that storage and processing conditions are controlled, monitored, and suitable. Mapping is how you discharge that burden.

For stability storage specifically, the conditions themselves come from ICH Q1A(R2), Stability Testing of New Drug Substances and Products. The long-term, intermediate, and accelerated conditions (for example 25 degrees C / 60 percent RH, 30 degrees C / 65 percent RH, 40 degrees C / 75 percent RH, and 5 degrees C for refrigerated) are only meaningful if the chamber actually holds them at every shelf the samples sit on. A stability program built on an unmapped chamber has no defensible link between the data and the claimed condition.

For distribution and warehousing, the relevant guidance is the WHO Technical Report Series guidance on temperature mapping of storage areas (WHO TRS 961, Annex 9, and the supplements in TRS 992), and the EU Guidelines on Good Distribution Practice of Medicinal Products for Human Use (2013/C 343/01), which states in section 3.2.1 that an initial temperature mapping exercise should be carried out before use. The risk rationale: a warehouse has stratification, door drafts, sun-facing walls, and HVAC dead zones that a single wall-mounted thermometer will never see.

For sterilization, the controlling standards are ISO 17665 (moist heat) and ISO 20857 (dry heat), with the pharmacopeial backdrop of USP and the FDA and PIC/S sterilization expectations. Thermal mapping (empty-chamber heat distribution and loaded heat penetration) is the core of sterilizer qualification because lethality (F0) is calculated from the coldest measured point in the load.

The quality rationale that ties all of these together is simple. Equipment is never thermally uniform. Air stratifies, doors leak, fans create gradients, and load mass changes the picture entirely. If you do not measure the spread, you are guessing about whether the worst-case position still meets the limit, and the worst-case position is exactly where the product fails first.

---

## Where mapping sits in the qualification lifecycle

Mapping is an OQ and PQ activity, not a standalone exercise. It fits inside the standard chain described in [equipment qualification lifecycle](/articles/equipment-qualification-lifecycle) and the broader [commissioning and qualification under ASTM E2500](/articles/commissioning-qualification-astm-e2500) approach.

- **URS / DQ**: the user requirement states the operating range, the allowable excursion, recovery time, and the monitoring strategy. Build this from [user requirements and traceability](/articles/user-requirements-and-traceability).
- **IQ**: confirms the unit is installed, the control sensor is identified, the controller and any chart recorder or building management system points are connected.
- **OQ**: empty-chamber distribution mapping, controller setpoint verification, door-open recovery, and alarm/excursion testing.
- **PQ**: loaded distribution mapping that proves the unit performs with the actual or worst-case load, in the real room, under real use.

Tie every mapping protocol back to the [validation master plan](/articles/validation-master-plan-and-periodic-review) and document the deliverables per the [validation deliverables guide](/articles/validation-deliverables-guide).

---

## The mapping instrumentation: data loggers and the calibration chain

Before any sensor goes into a chamber, the measurement system has to be defensible. This is where many studies fall apart on inspection.

### What you use

Independent, battery-powered data loggers (thermocouples or RTD-based loggers, or self-contained electronic loggers) are placed at mapped positions. You do not rely on the unit's own control sensor for the mapping evidence; the control sensor is the thing you are checking, not the reference. For humidity-controlled chambers, combined temperature and relative humidity loggers are used.

### Calibration before and after

Every logger must be calibrated against a standard traceable to a national metrology institute (NIST in the US), with calibration performed at points that bracket the study setpoint. The non-negotiable practice is a pre-study and a post-study calibration verification of the same sensors. If a logger drifts during the study, the post-study check catches it, and a sensor that fails the post-check invalidates its data. Document the calibration certificates, the standard used, the uncertainty, and the as-found / as-left values. See [calibration and metrology program](/articles/calibration-and-metrology-program) for the program-level expectations.

### Measurement uncertainty

The combined uncertainty of the logger plus its calibration must be small relative to the acceptance band, and it must be factored into the result. A common practical rule is that the measurement system uncertainty should not consume more than about a quarter to a third of the allowable tolerance. If your freezer band is +/- 5 degrees and your loggers carry +/- 0.5 degree uncertainty, you have margin; if your band is +/- 1 degree and your uncertainty is +/- 0.5 degree, you are too close and need better instrumentation. State the uncertainty in the report and, where the data is borderline, apply it against the limit (guard-banding).

### Logging interval

Set the interval fine enough to capture transients. One reading every 1 to 5 minutes is typical for storage units; for autoclave and oven cycles, intervals of a few seconds to capture the heat-up and exposure phases are normal. An interval of 15 minutes will miss a brief excursion entirely and is hard to defend.

---

## Sensor count and placement

This is the part interviewers probe and inspectors scrutinize. There is no single number that fits every unit, so you justify the count and the positions in a risk-based, documented rationale rather than copying a template.

### The general rule

WHO TRS guidance and common industry practice converge on a minimum of around 9 sensors for a small chamber and 15 or more for a large walk-in or warehouse. The principle is more important than the number: you place sensors so that every product location is bounded by measured points, with the suspected worst-case locations deliberately instrumented.

A workable framework:

| Unit type | Typical minimum sensors | Placement logic |
|---|---|---|
| Small reach-in chamber, refrigerator, freezer | 9 | 8 corners plus 1 center (a cube), all within the usable storage volume |
| Larger chamber or upright with shelves | 9 to 15 | corners plus center plus mid-shelf positions; add near door and near supply/return |
| Walk-in cold room | 15+ | 3D grid; add near door, near coil/evaporator, near floor and ceiling, near any heat source |
| Warehouse / large ambient store | 20 to 40+ | grid across length, width, height; near loading docks, sun-facing walls, HVAC supplies/returns, near racks and floor |
| Autoclave / oven | per chamber size, plus control and reference | distribution sensors throughout empty chamber; penetration sensors inside the load at hardest-to-heat points |

### Mandatory positions regardless of count

- The 8 geometric corners of the usable volume (not the dead space behind a fan baffle).
- The geometric center.
- Immediately adjacent to the unit's control sensor, so you can compare the mapping data to what the controller "thinks."
- At the door or door seal, the single most common source of warm or cold ingress.
- Near the air supply (coldest in a freezer, warmest in a heated chamber) and near the return.
- Near any internal heat or cold source: lights, fans, coils, defrost heaters.
- One sensor near the building monitoring probe if a BMS point is used for routine monitoring, to qualify that point against the mapped reality.

### Define the usable volume first

Place sensors only within the volume products can occupy. Manufacturers reserve clearance near walls, ceilings, fans, and coils where air does not circulate; product is not allowed there, so do not penalize the unit for those zones, but do document where the usable boundary is and physically mark it (load lines, "do not stack above this line" markings).

### Worked placement example, upright pharmacy freezer rated -20 degrees C +/- 5

A 9-sensor cube inside the usable volume, plus extras:

| Sensor | Position | Rationale |
|---|---|---|
| T1-T4 | top four corners | top of unit, near supply air |
| T5-T8 | bottom four corners | bottom, near floor / cold sink |
| T9 | geometric center | reference center |
| T10 | adjacent to control probe | controller comparison |
| T11 | just inside door, mid-height | door ingress / warmest expected point |
| T12 | near evaporator/coil | coldest expected point |

That is 12 sensors for a unit where the "minimum" was 9. The extras target the two suspected extremes (door and coil), which is exactly what a reviewer wants to see.

---

## Empty, loaded, and door-open studies

You run the chamber under more than one condition because each answers a different question.

### Empty-chamber (distribution) study

The empty study characterizes the equipment itself, free of load effects. It shows the inherent gradient the unit produces, the controller's setpoint offset, and the natural hot and cold spots. This is typically an OQ activity. It is the cleanest way to find the worst-case positions, because nothing is blocking airflow.

### Loaded (heat penetration / loaded distribution) study

The loaded study proves performance under real use, and it usually shifts the picture. A full load of vials or boxes blocks airflow, adds thermal mass that buffers transients, and creates new cold or hot pockets in the center of pallets. For storage units you test worst-case load: maximum stack, tightest packing, the configuration that most impedes circulation. For autoclaves the loaded study is heat penetration into the hardest-to-heat item. This is a PQ activity and is the study that actually licenses the routine use of the unit. Document the exact load pattern with photos so it is reproducible.

A subtle point reviewers like: empty and loaded can give opposite worst cases. Empty, the door area might be warmest. Loaded, the dense center of a pallet might be slowest to recover and become the worst case. You need both to know which controls.

### Door-open / recovery study

Open the door for a defined, realistic duration (for example 60 to 120 seconds, or the time it actually takes to retrieve material) and measure how far the inside warms (or cools) and how long it takes to recover to setpoint. This proves the unit tolerates routine access without excursion and establishes the basis for any "maximum door-open time" SOP limit. For freezers and cold rooms this is critical because frequent access is real-world behavior.

### Power-loss / open-loop study (where required)

For units storing high-value or irreplaceable material, characterize how fast the chamber drifts with the door closed and power off. This supports the excursion procedure and the decision on backup power or relocation timelines. Not always required, but valuable for ultra-low freezers and biologic storage.

### Study duration

Run a storage-unit mapping study for a minimum of 24 hours, and run it long enough to capture at least one full defrost cycle for any unit that defrosts (defrost is when freezers spike warmest). Many sites run 48 to 72 hours for warehouses to capture day/night and HVAC cycling. Capture the system at steady state, not just during pull-down.

---

## Hot spots, cold spots, and mean kinetic temperature

### Finding and treating extremes

Once the data is in, the analysis is straightforward in concept: for every logged interval, look across all sensors and find the maximum and minimum. The sensor that most often holds the warmest reading is the hot spot; the coldest is the cold spot. These are the positions you care about because they define the real operating envelope the product sees.

What you do with them:

- The hot and cold spots become the **designated routine monitoring locations** for the qualified unit. You do not monitor the geometric center if the door corner is where excursions appear first; you put the routine probe at the worst case (or at a location whose relationship to the worst case you have characterized).
- If a hot or cold spot exceeds the acceptance band, you have a fail. Options: reduce the usable volume to exclude that zone (and mark the load line accordingly), adjust the controller setpoint to recenter the distribution, modify airflow/baffling, or, for distribution units, reposition the unit away from a sun-facing wall or heat source.
- Re-run after any corrective change. A setpoint shift to recenter a distribution must be reverified by a fresh map.

### Mean kinetic temperature

MKT is the single calculated temperature that, if held constant, would impose the same thermal stress on the product as the varying temperatures the product actually experienced. It weights higher temperatures more heavily than a simple average, because chemical degradation accelerates non-linearly with temperature (Arrhenius). It is the standard tool for evaluating storage temperature data and for judging excursions against a labeled storage condition. USP General Chapter 1079, Good Storage and Distribution Practices for Drug Products, describes MKT and its use.

The Haynes equation:

```
                  -Ea / R
MKT = -------------------------------------------------
       ln [ ( e^(-Ea/RT1) + e^(-Ea/RT2) + ... + e^(-Ea/RTn) ) / n ]
```

where Ea is the activation energy (a common default is 83.144 kJ/mol when product-specific data is absent), R is the gas constant (0.0083144 kJ/mol/K), T1 through Tn are the individual temperature readings in kelvin, and n is the number of readings.

Worked example. Suppose over a study a controlled-room-temperature store records these hourly means across a 24 hour window, but to keep it short take five readings: 23, 26, 31, 22, 24 degrees C. Convert to kelvin: 296.15, 299.15, 304.15, 295.15, 297.15. Using Ea = 83.144 kJ/mol, the MKT works out to roughly 25.6 degrees C, slightly above the arithmetic mean of 25.2 degrees C. The gap is small here because the spread is modest; with a brief spike to 40 degrees the MKT would pull noticeably above the average, which is exactly the point. MKT punishes excursions.

When to use MKT versus the raw limit:

- For "controlled room temperature" stores and stability conditions defined with an MKT (for example 25 degrees C with excursions permitted such that MKT stays at or below 25), MKT is the judging metric.
- For a freezer with a hard band of -20 +/- 5, you generally judge against the band directly. An individual reading at -14 is an excursion you investigate even if MKT looks fine, because the band is a hard limit, not a stress-integration condition.
- Never use MKT to hide a sustained out-of-range condition. MKT smooths short transients; it does not license a chamber that runs 3 degrees high all week.

---

## Acceptance criteria

Acceptance criteria must be defined in the protocol before execution, traceable to the URS, and never written after seeing the data. Typical criteria:

| Parameter | Typical acceptance criterion |
|---|---|
| All mapped sensors, steady state | within the rated operating band (e.g. -20 +/- 5 degrees C, or 5 +/- 3 degrees C, or 25 +/- 2 degrees C / 60 +/- 5 percent RH per the controlled condition) |
| Spatial uniformity (gradient) | maximum minus minimum sensor difference at any instant within a defined spread (often <= the band, or a tighter chamber-specific value) |
| Control sensor vs mapped reference | within stated tolerance (e.g. within 1-2 degrees of co-located logger) |
| Door-open recovery | returns to within band within a defined recovery time; no logger exceeds the excursion limit during the open period |
| Defrost spike | any warming during defrost stays within band, or returns within a defined time and is excluded by procedure |
| MKT (where applicable) | MKT at or below the labeled storage condition |
| Sensor post-calibration | all loggers pass post-study calibration verification; out-of-tolerance loggers invalidate their data |

The criteria for stability chambers are usually the tightest, because the chamber must hold a defined ICH condition closely for years. For an autoclave the acceptance shifts to lethality: the empty-chamber distribution must be uniform within a defined spread (commonly the load reaches saturated-steam temperature with all distribution sensors within about 1 degree of each other at exposure, and within a band such as the sterilization temperature +0 to +3 degrees per ISO 17665), and the heat-penetration cold point must accumulate the required F0 (commonly >= 15 minutes for an overkill moist-heat cycle, with all penetration sensors meeting the minimum lethality).

---

## Equipment-specific notes

### Stability chambers

These must hold a tight band on both temperature and humidity for years, so map temperature and RH together, run the study long enough to see the chamber cycle, and pay attention to RH uniformity and the door area where humidity ingress is worst. Tie the mapped chamber directly to the stability protocol; see [stability programs under ICH](/articles/stability-programs-ich). Photometric integrity of the chart recorder or BMS data feeding the stability record must also be controlled.

### Refrigerators and freezers (including ultra-low)

Watch defrost cycles (the warmest event), door access (loaded studies plus door-open recovery), and the coil/supply zone (coldest). Ultra-low freezers (-70 to -80 degrees C) storing cell banks and biologic substance warrant a power-loss characterization and a defined excursion/relocation plan. Cold-chain storage feeds directly into [cold chain shipping qualification](/articles/cold-chain-shipping-qualification) and [good distribution practice cold chain](/articles/good-distribution-practice-cold-chain).

### Walk-in cold rooms and warehouses

Stratification is the enemy: warm air rises, so ceiling and top-of-rack positions run warmest, floor positions coolest. Map a full 3D grid, instrument near every door and dock, near sun-facing walls, near HVAC supplies and returns, and during the seasonal worst case (a summer map and a winter map for ambient warehouses, because the building behaves differently). Define routine monitoring probe locations at the identified extremes. EU GDP section 3.2.1 and WHO TRS guidance both expect an initial mapping and re-mapping after significant change or seasonally.

### Autoclaves (moist heat)

Two distinct studies under ISO 17665: empty-chamber heat distribution (find cold spots, confirm air removal and steam quality, verify uniformity) and heat penetration into the loaded configuration (thermocouples inside the hardest-to-heat items, F0 calculated from the cold point). Couple a biological indicator challenge with the thermocouple cold point. The drain or a defined geometric location is often the reference. See [sterilization validation, moist heat](/articles/sterilization-validation-moist-heat).

### Dry-heat ovens and depyrogenation tunnels

ISO 20857 governs. For depyrogenation the criterion is not just temperature but endotoxin reduction (a 3-log reduction of endotoxin challenge), so heat penetration to the coldest item must demonstrate the time-at-temperature that achieves it. See [depyrogenation and dry heat sterilization](/articles/depyrogenation-dry-heat-sterilization).

---

## A worked protocol skeleton

A loaded-freezer PQ mapping protocol contains, at minimum:

1. **Purpose and scope**: which unit (asset ID), the rated condition, the study (loaded PQ), the load configuration.
2. **References**: URS, IQ/OQ reports, applicable SOPs, ICH/GDP/WHO references, calibration SOP.
3. **Responsibilities**: who executes, who reviews, who approves.
4. **Instrumentation**: logger make/model, count, asset IDs, calibration certificate numbers, pre-study calibration results, logging interval, measurement uncertainty.
5. **Sensor placement**: a labeled diagram and a table mapping each logger ID to a physical location, with rationale for worst-case positions.
6. **Load configuration**: photos and a description of the worst-case load.
7. **Test method**: stabilization period, study duration (>= 24 h, including a defrost), door-open test parameters, environmental conditions during the study.
8. **Acceptance criteria**: the table above, defined before execution.
9. **Data handling**: how raw logger files are extracted, retained, and reviewed; the MKT method if used.
10. **Deviations**: how excursions and anomalies are handled and dispositioned.
11. **Post-study calibration verification** and the rule that a failing logger invalidates its data.
12. **Conclusion and routine monitoring recommendation**: identified hot/cold spots and the designated monitoring location(s).

Write protocols to the standard in [writing validation protocols and reports](/articles/writing-validation-protocols-and-reports), and capture results in a [validation summary report](/articles/validation-summary-report-and-release).

### Sample results table (loaded freezer, -20 +/- 5 degrees C, 48 h study)

| Logger | Location | Min (C) | Max (C) | Mean (C) | In band? |
|---|---|---|---|---|---|
| T1 | top front-left corner | -22.1 | -16.8 | -19.4 | Yes |
| T7 | bottom rear-right corner | -23.4 | -19.9 | -21.6 | Yes |
| T9 | center | -22.0 | -18.2 | -20.1 | Yes |
| T11 | inside door, mid-height | -21.0 | -15.4 | -18.3 | Yes (hot spot) |
| T12 | near coil | -24.1 | -20.6 | -22.4 | Yes (cold spot) |

Instantaneous max spread across sensors: 6.9 degrees during a defrost transient, recovering within 14 minutes; outside defrost, spread <= 4.8 degrees. Hot spot T11 (door), cold spot T12 (coil). Routine monitoring probe to be located at the door zone (T11) as the first-to-excurse position. Door-open 90 s test: warmest logger reached -14.9 degrees C briefly and recovered to band within 8 minutes. All loggers passed post-study calibration.

In this example T11's max of -15.4 is within the -15 limit of the band, but the door-open transient reached -14.9, an excursion of the band. That gets investigated and dispositioned; you might conclude the brief door-open transient at an empty load line is acceptable per a defined max-door-open SOP, or you might restrict the top-door storage zone. The point is you do not paper over it.

---

## Roles and responsibilities

| Role | Responsibility |
|---|---|
| Validation / qualification engineer | Authors the protocol, designs sensor placement, executes the study, analyzes data, writes the report |
| Equipment / system owner (user) | Defines the URS, operating range, load configurations, and routine use patterns; owns the unit post-qualification |
| Metrology / calibration | Calibrates and certifies the data loggers pre and post study; maintains traceability |
| Quality Assurance | Reviews and approves the protocol and report, ensures acceptance criteria are pre-defined, dispositions deviations, approves routine monitoring locations |
| SME (cold chain, sterilization, stability) | Provides worst-case load and condition input; for autoclaves, sets F0 and BI requirements |
| Vendor / installer | Provides equipment specs, usable volume limits, manufacturer test data (supplementary, never a substitute for site mapping) |

Roles map to the broader [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) framework. QA does not execute the study, and the executor does not approve their own acceptance criteria; that separation matters on inspection.

---

## Common mistakes and inspection findings

These are the patterns that show up in inspection observations and audit findings, described generically.

- **Too few sensors, or sensors placed only where it is convenient.** A 3-sensor "map" of a walk-in, or sensors clustered at eye level near the door, does not characterize the volume. Inspectors look for a justified count and worst-case coverage.
- **No worst-case load.** Mapping empty, then storing fully loaded, with no loaded study. The empty map does not represent real use, and the worst case shifts under load.
- **Acceptance criteria written after the data.** Criteria that conveniently match the observed spread, or no criteria at all, is a classic data integrity and qualification failure. Define them in the approved protocol first.
- **No post-study calibration.** Loggers calibrated only before the study leave you unable to prove they held accuracy throughout. A drifting logger silently corrupts the result.
- **Measurement uncertainty ignored.** Reporting "all within +/- 5" when the loggers carry +/- 1 uncertainty and several points sat at -15.2, inside the band only if uncertainty is ignored.
- **Routine monitoring probe in the wrong place.** Mapping finds the hot spot at the door, but the monitoring probe stays at the geometric center, so real excursions go undetected. The qualified output must drive the monitoring location.
- **Ignoring defrost.** Studies that run only a few hours and miss the defrost cycle, then a freezer excurses on defrost in production. Always capture at least one defrost.
- **No seasonal or post-change re-mapping.** A warehouse mapped once in spring, never re-mapped, then summer roof load pushes the top racks out of range. GDP expects re-mapping after significant change and periodically.
- **MKT misused.** Using MKT to wave away a sustained out-of-band condition, or applying MKT to a hard-band freezer where individual limits apply.
- **Raw data not retained.** Only a summary report kept, original logger files deleted, so the result cannot be reconstructed. Raw electronic data must be retained per data integrity expectations; see [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and [data integrity foundations](/articles/data-integrity-foundations).
- **Disconnect between mapping and the stability or distribution record.** The chamber is mapped but the BMS/chart point feeding the GMP record was never qualified against the map.

---

## Requalification and periodic review

A mapping study is a snapshot. It must be repeated on a defined basis and after triggers:

- **Periodic requalification** on a risk-based interval (commonly every 1 to 3 years for storage units, often annually for sterilizers and critical stability chambers).
- **After significant change**: relocation, controller replacement, refrigeration system repair, change in load type or volume, HVAC modification, room layout change, or a new shelving configuration.
- **After an excursion investigation** that implicates distribution.
- **Seasonally** for ambient warehouses sensitive to outside temperature.

Manage these triggers and intervals through [requalification and periodic review of equipment](/articles/requalification-and-periodic-review-equipment) and [change control for validated systems](/articles/change-control-validated-systems). A requalification can sometimes be a reduced study (the identified worst-case points only) if justified by a documented rationale, but a full re-map is the conservative default after a major change.

---

## Interview-ready questions and answers

**How many sensors do you put in a chamber, and how do you decide?**
Start from the industry baseline (around 9 for a small reach-in, 15 or more for a walk-in or warehouse) but treat it as a floor, not a rule. You justify the number in the protocol: the 8 corners and center bound the usable volume, and you add sensors at the suspected worst cases (door, coil, supply air, near heat sources) and next to the control probe. The count follows the risk, not a template.

**What is the difference between an empty and a loaded study, and which matters more?**
Empty characterizes the equipment's inherent gradient and is cleanest for finding worst-case positions. Loaded proves performance under real use and usually shifts the worst case because the load blocks airflow and adds thermal mass. Both matter; the loaded study is what actually qualifies the unit for routine use, but you need the empty study to understand the equipment.

**What is MKT and when do you use it?**
Mean kinetic temperature is the single constant temperature that imposes the same thermal stress as the varying real conditions, weighting higher temperatures more heavily because degradation follows Arrhenius. You use it to judge controlled-room-temperature storage and excursions against a labeled condition, per USP 1079. You do not use it to excuse a sustained out-of-band condition or to judge a hard-band freezer where individual readings have their own limit.

**Why do you calibrate loggers after the study, not just before?**
A pre-study calibration only proves the logger was good at the start. Loggers drift. The post-study verification proves it stayed accurate across the whole study; a logger that fails the post-check has its data invalidated. Without it you cannot defend the measurements.

**A mapping found the hot spot at the door. What do you do with that?**
The hot spot becomes the designated routine monitoring location, because it excurses first. If it is within the band, you monitor there and you are done. If it exceeds the band, you correct it: restrict the usable volume to exclude that zone with a load line, recenter the setpoint, fix airflow, or relocate the unit, then re-map to confirm.

**How long do you run a storage mapping study and why?**
At least 24 hours, longer for warehouses (48 to 72 h to capture day/night HVAC cycling), and always long enough to capture at least one full defrost cycle for any defrosting unit, because defrost is the warmest event a freezer sees. You capture steady state, not just pull-down.

**For an autoclave, what does mapping actually prove?**
Two things, under ISO 17665. Empty-chamber heat distribution proves uniformity and air removal so there is no cold spot in the chamber. Loaded heat penetration proves the hardest-to-heat point inside the load reaches the sterilization temperature and accumulates the required lethality (F0), confirmed alongside a biological indicator at that cold point.

**What is the most common finding inspectors write on mapping?**
Acceptance criteria not pre-defined, too few or poorly placed sensors, no loaded study, missing post-study calibration, and a routine monitoring probe sitting somewhere other than the qualified worst case. Any of those breaks the chain between the study and the claim that storage is controlled.

---

## Practical tips

- Photograph the loaded configuration and the sensor positions. A reviewer two years later, or an inspector, needs to see exactly what you tested.
- Label loggers physically and in the data file with the same IDs as the placement diagram. Mismatched IDs are a frequent and avoidable headache.
- Sync logger clocks before the study so you can compare across sensors at the same instant; that comparison is how you compute spatial spread.
- Mark the usable volume in the unit (load lines) and write them into the SOP, so operators do not store product in the unqualified dead zones.
- For warehouses, run the map in the worst season and keep the historical building monitoring data as supporting context.
- Keep the raw logger files, not just the summary. Retain them with the qualification package under your records retention rules.
- Carry the measurement uncertainty into borderline calls. A point at the edge of the band, with a logger uncertainty that crosses it, is not a clean pass.
- Use the mapping output to set both the routine monitoring location and the alarm setpoints, so the live monitoring system actually watches the spot that fails first.

---

## Related articles

- [Equipment qualification lifecycle](/articles/equipment-qualification-lifecycle)
- [Requalification and periodic review of equipment](/articles/requalification-and-periodic-review-equipment)
- [Calibration and metrology program](/articles/calibration-and-metrology-program)
- [Cold chain shipping qualification](/articles/cold-chain-shipping-qualification)
- [Good distribution practice cold chain](/articles/good-distribution-practice-cold-chain)
- [Sterilization validation, moist heat](/articles/sterilization-validation-moist-heat)
- [Depyrogenation and dry heat sterilization](/articles/depyrogenation-dry-heat-sterilization)
- [Stability programs under ICH](/articles/stability-programs-ich)
- [Clean utilities qualification](/articles/clean-utilities-qualification)
- [Commissioning and qualification under ASTM E2500](/articles/commissioning-qualification-astm-e2500)
- [Writing validation protocols and reports](/articles/writing-validation-protocols-and-reports)
- [Equipment qualification audit checklist](/articles/equipment-qualification-audit-checklist)
