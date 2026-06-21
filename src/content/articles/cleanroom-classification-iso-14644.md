---
title: "Cleanroom Classification and Qualification: ISO 14644, Grade A-D, and Recovery Testing"
description: "How cleanrooms are classified and qualified for sterile manufacturing: ISO 14644 particle counting, EU GMP Grade A-D, at-rest vs in-operation states, smoke studies, recovery testing, pressure cascade, and HEPA integrity."
pubDate: 2026-06-20
tags: ["cleanroom", "iso-14644", "annex-1", "aseptic", "qualification", "environmental-monitoring", "sterility", "hvac"]
pillar: "sterility-microbiology"
tier: "Intermediate"
---

A cleanroom is a controlled space where airborne particle concentration, and in the GMP world the microbial load that rides on those particles, is held below defined limits. For a sterile drug product the cleanroom is not background infrastructure. It is part of the process. If you cannot show, with data, that the room delivers the air cleanliness its grade demands at rest and while people are working in it, you cannot claim the product was made under control. This article walks through how cleanrooms are classified, how they are qualified, and how the recurring tests (particle counting, recovery, airflow visualization, HEPA integrity, pressure cascade) actually get done and judged.

The two documents you will live inside are ISO 14644 (the international standard for classifying air cleanliness by particle concentration) and EU GMP Annex 1 (the regulatory expectation for sterile product manufacture, which maps a Grade A-D scheme onto the ISO numbers and adds microbial and operational requirements). FDA's 2004 Aseptic Processing guidance covers the same ground for US-regulated facilities. You need to hold all three in your head at once, because an inspector will.

---

## The two languages: ISO classes and EU GMP grades

There are two classification schemes, and people mix them up constantly. Knowing exactly how they relate is interview table stakes.

### ISO 14644-1: air cleanliness by particle concentration

ISO 14644-1:2015 *Cleanrooms and associated controlled environments, Part 1: Classification of air cleanliness by particle concentration* defines ISO Classes 1 through 9. The class number is the exponent: an ISO Class N room has a maximum allowed concentration of particles per cubic metre given by a formula, and lower class numbers mean cleaner air. ISO 5 is very clean (the core of aseptic filling), ISO 8 is a typical controlled background.

The maximum allowed concentrations (particles per cubic metre, equal to or greater than the stated size) that matter for pharma are:

| ISO Class | ≥0.5 µm (particles/m³) | ≥5.0 µm (particles/m³) |
|-----------|------------------------|------------------------|
| ISO 5 | 3,520 | 29 (see note) |
| ISO 6 | 35,200 | 293 |
| ISO 7 | 352,000 | 2,930 |
| ISO 8 | 3,520,000 | 29,300 |

Note on the ≥5.0 µm column at ISO 5: the 2015 revision of ISO 14644-1 removed the ≥5.0 µm limit at ISO 5 from the body of the standard because counting statistics for large particles at very low concentrations are unreliable. EU GMP, however, still wants a macroparticle figure at Grade A/B for continuity with the older scheme, so Annex 1 carries its own ≥5.0 µm limits. This is a real point of confusion and a good interview probe.

### EU GMP Annex 1 Grade A-D

EU GMP Annex 1 (the 2022 revision, fully effective 25 August 2023, with the lyophilizer loading provisions effective 25 August 2024) defines four grades for sterile manufacturing. Each grade is pinned to an ISO class, but the grade carries more than a particle number. It also carries microbial limits and, critically, a defined state in which the limit applies.

| EU Grade | At rest (≈ISO) | In operation (≈ISO) | Typical use |
|----------|----------------|---------------------|-------------|
| A | ISO 5 | ISO 5 | The critical zone: filling, stoppering, open product/container, aseptic connections |
| B | ISO 5 | ISO 7 | Background to Grade A for aseptic processing |
| C | ISO 7 | ISO 8 | Less critical aseptic steps, preparation of solutions to be filtered |
| D | ISO 8 | not defined (microbial controlled) | Handling components after washing, less critical support |

The key idea: Grade A must hold ISO 5 in both states (at rest and in operation), because there is no acceptable degradation in the zone where sterile product is exposed. Grade B is ISO 5 at rest but is allowed to drift to ISO 7 in operation, reflecting that operators are present but the product is not open there. Grades C and D step down accordingly.

Annex 1 total particle limits, for the record:

| Grade | At rest ≥0.5 µm | At rest ≥5.0 µm | In operation ≥0.5 µm | In operation ≥5.0 µm |
|-------|-----------------|-----------------|----------------------|----------------------|
| A | 3,520 | 20 | 3,520 | 20 |
| B | 3,520 | 29 | 352,000 | 2,930 |
| C | 352,000 | 2,930 | 3,520,000 | 29,300 |
| D | 3,520,000 | 29,300 | not defined | not defined |

And the microbial limits (action limits), measured by air sampling, settle plates, contact plates, and glove prints. Grade A targets effectively no recovery (limit expressed as <1 CFU, meaning any recovery is investigated). The recovery of any microorganism in Grade A is a contamination control failure that gets investigated.

| Grade | Air sample CFU/m³ | Settle plate (90 mm) CFU/4h | Contact plate (55 mm) CFU/plate | Glove print (5 fingers) CFU |
|-------|-------------------|----------------------------|----------------------------------|------------------------------|
| A | <1 | <1 | <1 | <1 |
| B | 10 | 5 | 5 | 5 |
| C | 100 | 50 | 25 | not specified |
| D | 200 | 100 | 50 | not specified |

These microbial figures are EU GMP action limits, not ISO numbers. ISO 14644 says nothing about microbes. That separation (particles from ISO, microbes from GMP) is worth saying out loud in an interview.

---

## "At rest" versus "in operation": the state that breaks people

The single most common conceptual error is treating classification as a one-time particle count. It is not. A cleanroom is classified and monitored in defined occupancy states, and the state is part of the acceptance criterion.

- **As built**: the room is complete and functioning, with services connected, but no production equipment, materials, or people. Rarely the governing GMP state, but sometimes used during commissioning.
- **At rest**: equipment is installed and running as it would in production, but there is no product and no operators present. Annex 1 expects you to define the at-rest condition and the time it takes the room to reach in-operation cleanliness once people enter (the recovery time, more on that below).
- **In operation**: the room is running with the defined process, equipment operating, and the defined maximum number of operators present and working. This is the worst-case state and the one the product actually experiences.

You qualify in both at rest and in operation. The in-operation count is normally done during a simulated or actual process with the planned crew doing representative activities. A finding inspectors raise often: a firm classified the room at rest, called it ISO 7, and never demonstrated the in-operation state, so there is no evidence the room held its grade while people were gowned up and moving around. That gap invalidates the aseptic claim.

A practical scheduling point: when you run the in-operation particle count, the activity has to be representative. Standing still next to the counter is not "in operation." You want the operators doing the things that actually shed particles: connecting lines, loading the filler, intervening at the line. Otherwise you have measured a fiction.

---

## ISO 14644-1 classification: how the particle count is actually done

This is the procedure that produces the number. Get it right and most of the qualification follows.

### Step 1: define the occupancy state and the considered particle sizes

Decide if the classification run is at rest or in operation, and which particle sizes you are using for classification. For ISO 5 to ISO 8 pharma rooms the considered sizes are ≥0.5 µm (and ≥5.0 µm where Annex 1 requires it). Record this before you start.

### Step 2: determine the number of sampling locations

ISO 14644-1:2015 sets the minimum number of sampling locations from the cleanroom area using a table (informative Annex A). The number of locations scales with floor area. A small ISO 5 enclosure might need only a handful of points; a large room needs many. The 2015 revision changed this method from the old square-root-of-area rule to a fixed lookup table tied to a 95% upper confidence approach, so do not use the pre-2015 √area shortcut. Lay the locations out to represent the whole space, including the points that matter for the process (over the filling zone, near returns, at work height).

### Step 3: determine the sample volume per location

At each location you must sample enough air to have a reasonable chance of detecting particles at the class limit. The standard sets a minimum single sample volume so that, at the class concentration limit for the most stringent considered size, you would expect to count at least 20 particles. Practically, for ISO 5 at ≥0.5 µm this drives a sample of at least 1 m³ (1,000 litres) at each point, which at a 28.3 L/min (1 cfm) counter is about 35 minutes per location, or proportionally less with a higher flow counter. The minimum sample volume is never less than 2 litres and never less than a one-minute sample.

### Step 4: sample at work height, isophasic with airflow

Place the probe at the working level (the height where product is exposed) and orient it into the airflow (isokinetic for unidirectional flow). Use a calibrated discrete particle counter (light-scattering, also called an optical particle counter). Take the sample, record the count per location, normalize to particles per cubic metre.

### Step 5: evaluate against the class limit

For classification you compare the particle concentration at each location against the class limit. Under the 2015 method, each individual location's average must not exceed the class limit (the old "95% confidence on the mean of means" UCL calculation that applied when you had 2 to 9 locations was removed in the 2015 revision, simplifying the pass criterion to a per-location comparison). If every location is at or below the limit for every considered size, the room meets the class.

### Worked example: classifying a Grade B background at rest

Suppose a 40 m² Grade B gowning-adjacent room, classified at rest, target ISO 5 at ≥0.5 µm (limit 3,520 particles/m³).

1. Annex A lookup for 40 m² gives a minimum number of locations (in this size band the table yields a defined count; lay them on a grid covering the room and over the door transfer point).
2. Considered sizes: ≥0.5 µm and ≥5.0 µm (Annex 1 wants the macroparticle figure at Grade B at rest, limit 29/m³).
3. Sample volume: 1 m³ per location to satisfy the 20-particle rule at ISO 5.
4. Counter at 28.3 L/min runs ~35 min per location at work height.
5. Results (≥0.5 µm, particles/m³): 1,210; 980; 1,540; 2,030; 760; 1,890. Every value is below 3,520. The ≥5.0 µm column reads 0, 4, 11, 7, 2, 9, all below 29. The room passes at rest as ISO 5 / Grade B at rest.

Document the counter serial number, calibration due date, flow rate, locations on a diagram, raw counts, and the pass/fail per location. That package is your classification report.

---

## Smoke studies (airflow visualization)

Smoke studies, formally airflow pattern visualization, demonstrate that air moves the way you claim it does, especially that unidirectional (laminar) flow in the Grade A zone sweeps particles away from exposed product and does not create eddies, dead spots, or in-rushes that carry contamination toward the product.

### Why it is required

Annex 1 explicitly requires airflow visualization studies for the Grade A zone, performed under both at-rest and in-operation (dynamic) conditions, including operator interventions. The rationale is direct: a particle count tells you the air was clean at the probe at that moment, but it does not tell you whether the airflow protects the product during a stopper bowl intervention or when an operator reaches across an open vial. Smoke shows the pattern.

### How it is done

You introduce a visible neutral-buoyancy smoke (commonly a glycol or DI-water fog from a fog generator, or a controlled fume) into the airflow and record it on video. You film the at-rest pattern first to show clean unidirectional sweep, then film the dynamic state with operators performing every routine and non-routine intervention the process allows: line setup, weight checks, stopper additions, sample pulls, machine jams clearing, glove changes. You film from multiple angles. The deliverable is annotated video with a written report.

### Acceptance criteria

There is no particle number here. The criterion is observational and judged against defined questions: does air sweep unidirectionally over the critical zone, does it move away from the product, are there no upward currents or stagnant zones over the open product path, does each intervention avoid drawing air from a less clean area toward the exposed product. Failures look like smoke curling back over an open vial, smoke trapped behind equipment, or an operator's arm creating a wake that pulls room air into the Grade A zone.

### Common findings

Inspectors frequently cite smoke studies that were done only at rest, that did not film representative interventions, that used poor camera angles hiding the critical area, or whose video clearly shows turbulence over the product but the report concluded "acceptable" anyway. The video is the evidence. If the video contradicts the conclusion, the firm has a problem. Another recurring gap: smoke studies not repeated after a change to equipment layout, RABS/isolator configuration, or HVAC.

---

## Recovery testing (cleanliness recovery / recovery time)

Recovery testing answers a specific operational question: after the room is challenged with particles, how long does it take to return to its classified cleanliness? It links to the at-rest claim, because Annex 1 wants you to know how long after operators leave the room takes to recover to its at-rest state.

### Why it is required

ISO 14644-3:2019 *Test methods* describes the recovery test as one of the optional cleanroom characterization tests. EU GMP Annex 1 expects, for non-unidirectional (turbulently ventilated) rooms, that you demonstrate the recovery time, that is, the time for the room to clear a particle challenge and return to its cleanliness class. The quality rationale: if a contamination event occurs, or after a shift change, you need confidence the air system flushes the room in a defined time, and that time supports your at-rest-to-in-operation transition and your cleaning/changeover procedures.

### The two methods

ISO 14644-3 gives two approaches:

- **100:1 recovery time**: measure the time for the particle concentration to fall by a factor of 100 (two orders of magnitude) after a deliberate challenge. This is the more common pharma method because it is unambiguous.
- **Recovery rate**: derive the decay rate constant from the concentration-versus-time curve.

### How it is done (100:1 method)

1. Generate a particle challenge in the room to raise concentration to roughly 100 times the class limit (using an aerosol generator with, for example, a PAO/DEHS or polystyrene latex challenge). Confirm you reached the target with the counter.
2. Stop the challenge and start the timer with the HVAC running normally.
3. Log particle concentration at intervals as it decays.
4. Record the time for concentration to drop to 1/100 of the starting (challenge) value.

### Acceptance criteria

There is no single universal number in the standard; you set a target based on the room design and justify it. A widely used informal expectation is that a Grade B/C non-unidirectional cleanroom recovers (100:1) in 15-20 minutes, and many firms write their acceptance as recovery within 20 minutes or less. The defensible criterion is: recovery time is short enough to support your operational claims (your at-rest definition, your changeover hold times, your response to an excursion). Justify the number you choose; do not copy 15 minutes blindly.

### Worked example

Challenge a Grade C room to 35,200,000 particles/m³ at ≥0.5 µm (roughly 100x the ISO 8 in-operation limit). After stopping the challenge, you need the concentration to fall to 352,000/m³ (1/100). Logging every minute, you see it cross 352,000/m³ at 14 minutes. With an acceptance criterion of ≤20 minutes, the room passes, and you record 14 minutes as the qualified recovery time, used downstream to justify a 20-minute settle period after operators exit before declaring at-rest.

Note: recovery testing applies to non-unidirectional (turbulent) rooms. A true Grade A unidirectional zone sweeps continuously, so the recovery concept is replaced by demonstrating the unidirectional flow velocity and uniformity instead.

---

## Pressure cascade (differential pressure)

The pressure cascade keeps clean air flowing from clean to less-clean, so that air leakage across a doorway always moves contamination away from the more critical space.

### Why it is required

Annex 1 expects a documented pressure differential regime between adjacent rooms of different grades. The classic guidance figure is a minimum differential of around 10-15 Pa between adjacent grades (Annex 1 references 10 Pa as a guidance value between cleanrooms of different grades, with the actual value to be justified and continuously monitored). The rationale is airflow direction: positive pressure in the cleaner room means when a door opens or leaks, air spills out of the clean room, not into it. For containment of hazardous or sensitised product the cascade may run the other way (negative), with airlocks managing the conflict.

### How it is done and judged

During qualification you measure and record the differential pressure between every adjacent classified space with doors closed, using calibrated manometers/transducers, and you verify the gauges installed for routine monitoring read correctly. Acceptance: every differential meets its defined setpoint and direction, no reversals, and alarms trigger at the defined low-differential limit. In operation the differentials are continuously monitored, logged, and alarmed; a sustained low or reversed differential is an excursion requiring investigation and an assessment of product impact.

### Common findings

Doors held open defeating the cascade, differential setpoints not justified, monitoring gauges out of calibration, no alarm on low differential, or airlock logic that allows both doors of an airlock open at once (collapsing the cascade). Inspectors also look for the cascade to make sense as a whole map; a single gauge reading 12 Pa means little if the overall room-to-room scheme does not consistently push toward the corridors.

---

## HEPA filter integrity testing (installed leak test)

HEPA (High Efficiency Particulate Air) filters are the barrier that makes the supply air clean. Installed integrity testing proves each filter and its housing/seal has no leak that would let unfiltered air bypass into the room.

### What it is and why

A HEPA filter is rated to remove at least 99.97% of 0.3 µm particles (EN 1822 classifies filters H13/H14 for cleanroom use, with H14 at 99.995% efficiency on the most penetrating particle size). Filter-class efficiency is a manufacturer's factory test. The installed leak test (also called the DOP/PAO test, scan test, or in-situ integrity test) is different: it checks the filter as installed in the ceiling, including the frame seal and gasket, because a perfect filter with a damaged seal still leaks. ISO 14644-3 describes the installed filter system leakage test.

### How it is done

1. Upstream of the filter, introduce a polydisperse aerosol challenge (PAO, also called Emery 3004, replacing the older DOP; or DEHS) to a known upstream concentration, typically targeted so that downstream you can resolve a 0.01% penetration leak.
2. Measure and record the upstream challenge concentration with a photometer (or discrete particle counter for the aerosol-photometer alternative).
3. With the photometer probe, scan the entire downstream face of the filter and the perimeter frame seal in slightly overlapping strokes at a defined scan rate and probe-to-filter distance (commonly ~25 mm, scan rate per ISO/IEST method).
4. A penetration reading above the leak acceptance limit at any point flags a leak.

### Acceptance criteria

The standard pass for a scanned HEPA is no point reading exceeding 0.01% penetration of the upstream challenge (equivalently, the localized penetration must stay below the leakage limit, conventionally 0.01% for a scan test). A discrete leak above that is repaired (re-seated, re-sealed, or in the worst case the filter is replaced) and re-tested. Record upstream concentration, photometer calibration, scan map, and any leaks with their repair and retest.

### Common findings

Integrity testing overdue (it is periodic, typically every 6-12 months for critical filters plus after any disturbance), the test done at the wrong airflow velocity, scanning that skipped the frame seal (the most common real leak location), upstream challenge concentration not recorded so penetration cannot be calculated, or a leak found and "passed" by re-reading without repair. Also: confusing filter efficiency certification with installed integrity. Inspectors test that distinction.

---

## Air change rate and airflow velocity

Two airflow metrics underpin everything above.

- **Air change rate (ACR)** for non-unidirectional rooms: the number of room air volumes supplied per hour. There is no single regulatory number, but a frequently cited design expectation is around 20 air changes per hour for Grade C/D rooms, justified by recovery performance rather than the number itself. You measure supply air volume (by capture hood or duct traverse), divide by room volume, and report ACH. The acceptance is "supports the cleanliness and recovery you need," which is why ACH and recovery testing travel together.
- **Unidirectional airflow velocity** for Grade A: Annex 1 references a guidance air velocity of 0.36-0.54 m/s at the working position for unidirectional flow, with the actual value justified by smoke studies and qualification data. You measure velocity at a grid across the working plane with a calibrated anemometer; acceptance is uniformity within the justified range and a pattern confirmed by the smoke study.

---

## The qualification lifecycle: stitching it into IQ/OQ/PQ

Cleanroom qualification is not a standalone activity. It sits inside the equipment/facility qualification lifecycle and the broader contamination control strategy.

### Sequence

1. **Design and URS**: user requirements define grades, room layout, pressure scheme, ACH, filter classes, monitoring points. Tie back to the [contamination control strategy](/articles/annex-1-contamination-control-strategy).
2. **Commissioning / FAT-SAT**: HVAC built and balanced; many engineering tests run here (see [commissioning and qualification under ASTM E2500](/articles/commissioning-qualification-astm-e2500)).
3. **IQ (Installation Qualification)**: filters installed and documented, gauges installed and calibrated, room construction verified against drawings.
4. **OQ (Operational Qualification)**: HEPA integrity, airflow velocity/ACH, pressure cascade, smoke studies at rest, recovery testing, and at-rest particle classification. This is where the room earns its grade engineering-wise.
5. **PQ (Performance Qualification)**: in-operation particle classification, in-operation smoke studies with interventions, and the microbial side (the link to [environmental monitoring](/articles/environmental-monitoring-program)). Often run alongside or just before aseptic process simulations (media fills, see [aseptic processing and media fills](/articles/aseptic-processing-and-media-fills)).
6. **Routine monitoring and requalification**: continuous viable and non-viable monitoring in operation, plus periodic requalification (see below).

This maps onto the general [equipment qualification lifecycle](/articles/equipment-qualification-lifecycle) and the deliverables in the [validation deliverables guide](/articles/validation-deliverables-guide).

### Requalification frequency

Annex 1 sets expectations for periodic requalification. The commonly applied intervals: Grade A and B zones requalified every 6 months; Grade C and D every 12 months. Requalification covers classification (particle counts in both states as applicable), airflow velocity, pressure differentials, air change rate, HEPA integrity, and recovery, with smoke studies repeated as risk and changes dictate. Any significant change (HVAC modification, room layout change, equipment change, construction nearby) triggers requalification under [change control](/articles/change-control-validated-systems) regardless of the calendar. See also [requalification and periodic review of equipment](/articles/requalification-and-periodic-review-equipment).

---

## Roles and responsibilities

Cleanroom qualification is a team sport. Inspectors look for clear ownership.

| Role | Responsibility |
|------|----------------|
| Validation / C&Q engineer | Writes and executes IQ/OQ/PQ protocols, coordinates particle counting, recovery, smoke, HEPA, pressure tests; compiles the qualification report |
| HVAC / facilities engineer (SME) | Owns the air handling system, balancing, filter management, gauge maintenance and calibration |
| QA | Approves protocols and reports, owns acceptance criteria and deviation handling, makes the release decision on the qualified state |
| Microbiology / EM team | Owns the viable monitoring, microbial limits, settle/contact plates, and the link to environmental monitoring and excursion investigation |
| Aseptic operations | Provides representative operators and interventions for in-operation testing and smoke studies |
| Specialist test vendor (often) | Performs the certified physical tests (particle classification, HEPA integrity, recovery) on calibrated, traceable instruments; their report is reviewed and approved by QA, not accepted blind |
| Calibration / metrology | Ensures particle counters, photometers, anemometers, manometers are calibrated and traceable (see [calibration and metrology program](/articles/calibration-and-metrology-program)) |

A frequent weakness: the firm outsources the physical testing to a vendor and treats the vendor report as final without QA reviewing the raw data, the instrument calibration, or whether the in-operation state was genuinely represented. The vendor measures; the firm owns the conclusion.

---

## Common mistakes and inspection-finding patterns

Generic patterns inspectors cite, without naming any firm:

- **Classifying only at rest.** No in-operation data, so the aseptic claim is unsupported. The most fundamental error.
- **Unrepresentative in-operation testing.** Counts taken with operators standing still, or with fewer people than the process allows, so the "in operation" state is not the real worst case.
- **Smoke study video contradicting the report.** Turbulence visible over open product but the conclusion says acceptable; or no dynamic/intervention filming.
- **HEPA integrity overdue or scope-gapped.** Test late, or frame seal not scanned, or efficiency cert confused with installed leak test.
- **Pressure cascade not justified or not monitored.** Setpoints with no rationale, gauges out of calibration, no low-differential alarm, airlock interlock failures.
- **Recovery time not established for turbulent rooms,** so the at-rest definition and changeover times have no basis.
- **Requalification overdue** or not triggered by a change (new equipment, HVAC work, adjacent construction).
- **Microbial and non-viable monitoring locations not justified by risk** or not aligned with where product is exposed and where smoke studies showed vulnerability.
- **Trending ignored.** Individual results within limit but a clear adverse trend in particle or viable counts not investigated (links to [out-of-trend investigations](/articles/out-of-trend-investigations)).
- **Data integrity gaps in counter output:** counts overwritten, no audit trail on the particle counter, manual transcription with no raw data retained (see [data integrity foundations](/articles/data-integrity-foundations)).

---

## Interview-ready questions and strong answers

**Q: What is the difference between ISO 14644 and EU GMP Grade A-D?**
ISO 14644 classifies air cleanliness purely by airborne particle concentration and says nothing about microbes. EU GMP Annex 1 maps a Grade A-D scheme onto ISO classes (A and B at rest equal ISO 5, C at rest equals ISO 7, D at rest equals ISO 8) and adds microbial limits and the requirement to demonstrate the room in defined occupancy states. ISO gives you the particle number; GMP gives you the particle number plus microbes plus the operational expectations.

**Q: Why does Grade A have to hold ISO 5 in operation but Grade B can drift to ISO 7?**
Because Grade A is the critical zone where sterile product, containers, and closures are exposed. There is no acceptable degradation there. Grade B is the background to Grade A: operators are present but product is not open, so a controlled drift to ISO 7 in operation is acceptable as long as the Grade A zone it surrounds stays at ISO 5.

**Q: What happened to the ≥5.0 µm limit at ISO 5 in the 2015 revision?**
ISO 14644-1:2015 removed the ≥5.0 µm limit at ISO 5 from the classification body because counting large particles at such low concentrations is statistically unreliable. EU GMP still requires a macroparticle figure at Grade A/B for monitoring continuity, so Annex 1 carries its own ≥5.0 µm limits separate from ISO classification.

**Q: How do you set the number of sampling locations and the sample volume?**
Locations come from the ISO 14644-1:2015 Annex A lookup table tied to floor area (not the old square-root rule). Sample volume per location must be large enough to expect at least 20 particles at the class limit for the most stringent considered size, with a floor of 2 litres and at least one minute. For ISO 5 at ≥0.5 µm that drives roughly 1 m³ per point.

**Q: What does a smoke study prove that a particle count cannot?**
A particle count is a snapshot at the probe. A smoke study shows the airflow pattern, whether unidirectional flow actually sweeps contamination away from exposed product during real interventions. You can pass particle counts and still have an airflow that pulls room air over an open vial when an operator reaches in. Smoke catches that.

**Q: What is recovery testing and what is the acceptance criterion?**
For non-unidirectional rooms, recovery testing measures the time to clear a particle challenge back to class, usually the 100:1 method (time to fall to 1/100 of the challenge). There is no universal mandated number; you justify a target (often ≤20 minutes for Grade B/C) and use the measured recovery time to support your at-rest definition and changeover hold times.

**Q: How does HEPA installed integrity testing differ from filter efficiency certification?**
Efficiency certification is a factory test of the filter medium (for example H14 at 99.995% per EN 1822). Installed integrity (the PAO scan test under ISO 14644-3) tests the filter as mounted, including the frame seal and gasket, because the most common real leak is at the seal, not the medium. A perfect filter with a bad seal still fails. The scan pass limit is no point above 0.01% penetration.

**Q: A particle excursion happens during filling. Walk me through it.**
Stop or hold per procedure, secure the product potentially affected, record the time and location. Investigate: was it a real excursion or a counter artifact, what was happening (intervention, door event, garment shedding), check the pressure cascade and HVAC, check viable monitoring at adjacent points. Assess product impact and decide disposition. Link to deviation management and, if a pattern, requalification or design review. The whole thing rides on having the in-operation baseline and smoke study to interpret against.

**Q: How often do you requalify a cleanroom?**
Annex 1 expectation: Grade A/B every 6 months, Grade C/D every 12 months, covering classification, airflow, pressure, ACH, HEPA integrity, recovery, with smoke studies repeated per risk. Plus event-driven requalification under change control for any HVAC, layout, or equipment change, or nearby construction.

---

## Practical tips

- Build one classification diagram per room showing every sampling location, gauge, HEPA, and return, and reuse it across classification, EM, and requalification so the locations stay consistent and justified.
- When you write the in-operation protocol, script the interventions explicitly (who, what, when) so the test genuinely represents the process and the same scenarios show up in the smoke study video.
- Tie the recovery time you measure to a real operational rule (the post-exit settle period before declaring at rest). A number with no downstream use invites the question "so what."
- Keep the particle counter raw data, not just the summary. Audit-trailed, retained counter output is increasingly an inspection focus.
- Map the pressure cascade as a whole, not gauge by gauge. Inspectors want the room-to-room scheme to make directional sense end to end.
- Do not copy "15 minutes" or "20 air changes" as if they were regulations. They are common design values; Annex 1 wants you to justify yours with data.
- Coordinate cleanroom requalification with media fill scheduling so the in-operation state, smoke studies, and aseptic process simulation tell one coherent story.

---

## Related articles

- [Annex 1 Contamination Control Strategy](/articles/annex-1-contamination-control-strategy)
- [Aseptic Processing and Media Fills](/articles/aseptic-processing-and-media-fills)
- [Environmental Monitoring Program](/articles/environmental-monitoring-program)
- [Microbial ID and EM Excursions](/articles/microbial-id-and-em-excursions)
- [Clean Utilities Qualification](/articles/clean-utilities-qualification)
- [Temperature Mapping Qualification](/articles/temperature-mapping-qualification)
- [Equipment Qualification Lifecycle](/articles/equipment-qualification-lifecycle)
- [Commissioning and Qualification under ASTM E2500](/articles/commissioning-qualification-astm-e2500)
- [Requalification and Periodic Review of Equipment](/articles/requalification-and-periodic-review-equipment)
- [Cross-Contamination Control in Shared Facilities](/articles/cross-contamination-control-shared-facilities)
