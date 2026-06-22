---
title: "Equipment Qualification: DQ, IQ, OQ, PQ, What Each Phase Actually Proves"
description: "A clear breakdown of the equipment qualification lifecycle, Design Qualification through Performance Qualification, what each phase is testing, where programs most commonly fail, and how this connects to data integrity."
pubDate: 2025-09-30
tags: ["equipment-qualification", "IQ-OQ-PQ", "GxP", "EU-Annex-15", "validation"]
pillar: "equipment-qualification"
tier: "Intermediate"
---

Equipment qualification is one of the oldest disciplines in pharmaceutical manufacturing compliance, and one of the most misunderstood. The four-phase structure, DQ, IQ, OQ, PQ, appears in every GxP training program. What is less commonly understood is what each phase is actually *proving*, where the work actually sits, and how qualification connects to the data integrity requirements that increasingly dominate inspections.

This article covers the qualification lifecycle in practical terms, including the regulatory basis, the document contents, the execution sequence, the acceptance criteria, the common failure modes, and the specific connection between instrument qualification and the data those instruments generate. It is written so a reader new to GxP can follow the logic, a working validation engineer can sharpen protocol scope, and a program owner can see where qualification debt accumulates across a site. The discipline applies the same way to a tablet press in oral solid dose, a bioreactor in biologics, a fill-finish line for injectables, an automated assembly station in a medical device plant, and a benchtop balance in any QC lab. The rigor scales to the risk; the structure does not change.

---

## Qualification vs Validation: The Distinction Matters

These terms are used interchangeably in practice, which creates confusion. The distinction is real:

**Qualification** applies to equipment and instruments, physical items. It shows that a piece of equipment is installed correctly, operates within its designed parameters, and performs consistently enough to support its intended use.

**Validation** applies to processes, methods, and computerized systems. Process validation shows that a manufacturing process consistently produces a product meeting its specifications. Method validation shows that an analytical procedure measures what it claims to measure with appropriate accuracy, precision, and specificity.

A qualified autoclave operates within temperature and pressure parameters. A validated sterilization process uses a qualified autoclave but also validates the specific cycle parameters, load configurations, and biological indicator performance.

Both are required. They are not interchangeable. An inspector who finds a qualification report labeled "Process Validation" will ask why the organization does not distinguish them. The opposite mislabeling, calling a process validation exercise a "PQ," is just as common and just as telling, because it usually means the firm never separated the equipment fitness question from the product consistency question.

The regulatory basis for this distinction:

> EU GMP Annex 15 (Qualification and Validation), revised version effective October 2015, provides the most explicit treatment of the qualification lifecycle in pharmaceutical manufacturing.

FDA's equivalent expectations sit in 21 CFR Part 211. Specifically, 211.63 requires that equipment used in manufacture, processing, packing, or holding be of appropriate design, adequate size, and suitably located for its intended use; 211.68 covers automatic, mechanical, and electronic equipment including computerized systems; and 211.160(b)(4) requires that instruments and equipment be routinely calibrated, inspected, or checked. FDA's 2011 Process Validation guidance (Guidance for Industry: Process Validation: General Principles and Practices) frames the broader lifecycle, with qualification of equipment and utilities living inside Stage 1 and Stage 2 (Process Qualification). For analytical instruments specifically, USP General Chapter <1058> Analytical Instrument Qualification is the recognized framework. For medical device manufacturers, the same intent lives in 21 CFR 820.70(g) (equipment requirements) and 820.75 (process validation), and from February 2026 inside the harmonized Quality Management System Regulation (QMSR, 21 CFR 820 incorporating ISO 13485:2016). Reading these together gives you the full picture rather than any single document.

A simple test for which discipline applies: if the noun is a thing you can touch, it is qualification. If the noun is something that happens (a method runs, a process makes product, software computes a result), it is validation. The two meet at every instrument, because a qualified instrument running a validated method is the minimum bar for a defensible result.

---

## The V-Model and Where Qualification Sits

Most qualification programs are organized around a V-model. Down the left side you write requirements, increasing in detail: user requirements, functional specifications, design specifications. Up the right side you verify against each, in mirror order: IQ confirms the design was built and installed, OQ confirms the functional specification is met, PQ confirms the user requirements are satisfied in real use. DQ sits at the bottom of the V, where requirements meet design.

The value of the V-model is traceability. Every test in your qualification protocols should trace back to a requirement, and every requirement should trace forward to a test. A requirements traceability matrix makes this explicit and is one of the first artifacts an auditor asks for. If a requirement has no verifying test, you have an untested claim. If a test verifies nothing in the requirements, you are spending effort on something nobody asked for, which is its own kind of waste. The mechanics of building one are covered in the [user requirements and traceability article](/articles/user-requirements-and-traceability).

A small worked traceability extract for a stability chamber shows the idea:

| Req ID | Requirement | Source | Verified by | Phase |
|---|---|---|---|---|
| URS-04 | Chamber maintains 25C ±2C, 60% RH ±5% | URS | Empty + loaded mapping, 16 sensors | PQ |
| FS-11 | High-temp alarm activates above 27C and logs the event | Functional spec | Alarm challenge test | OQ |
| DS-07 | Audit trail records setpoint changes with user ID and time | Design spec | Audit trail verification | OQ |
| URS-09 | Recovers to setpoint within 60 min after a 30 min power loss | URS | Power-recovery challenge | PQ |

The risk-based scaling of this model is what separates a mature program from one that treats every coffee maker and every bioreactor with identical rigor. A non-GxP item needs no qualification. A simple GxP item with no measurement function and no data output may need only verified installation and a calibration record. A complex computerized instrument needs the full lifecycle plus software assurance. The decision of how much rigor to apply should be documented, ideally tied to a [quality risk management](/articles/quality-risk-management) assessment per ICH Q9(R1), so the scaling is defensible rather than improvised. For larger capital projects, many sites now run this scaling through a science-and-risk-based commissioning and qualification approach aligned to [ASTM E2500](/articles/commissioning-qualification-astm-e2500), which lets verified engineering work (commissioning, [factory and site acceptance testing](/articles/factory-site-acceptance-testing)) reduce duplicate formal qualification testing where it can be justified.

---

## Roles and Responsibilities Across the Lifecycle

Qualification is a team activity, and inspectors look for clear ownership. A typical RACI across the four phases:

| Activity | Validation / Engineering | System or Equipment Owner | Quality Assurance | Vendor / Supplier |
|---|---|---|---|---|
| Write URS | Support | Responsible | Review | Input |
| DQ / design review | Responsible | Accountable | Approve | Provide design docs |
| Author IQ/OQ/PQ protocols | Responsible | Review | Approve | May provide templates |
| Execute IQ/OQ | Execute / witness | Witness | Witness or review | Often executes IQ |
| Execute PQ | Support | Responsible (real users) | Review | Not involved |
| Disposition deviations | Investigate | Input | Approve / classify | Support if vendor cause |
| Approve summary report | Review | Review | Approve / release | N/A |

The rule that catches firms out: the regulated company owns the result even when the vendor executes the work. A supplier field engineer can run IQ, but a qualified person at the firm must review the executed protocol, confirm the acceptance criteria match the firm's own requirements, and reconcile every deviation. QA approves protocols before execution and approves the summary report that releases the equipment for GxP use. PQ in particular should be owned by the people who will actually operate the equipment, not only by validation specialists, because PQ is where procedures and training get tested alongside the hardware.

---

## Design Qualification (DQ)

**What it proves:** That the design of the equipment, including its specifications, controls, and interfaces, meets the requirements of the intended use before it is built or purchased.

**Why it is required:** Annex 15 lists DQ as the first element of qualification. The rationale is economic and risk based at once: design choices are cheap to change on paper and expensive to change in steel. DQ is the gate where you confirm, in writing, that what you are about to buy or build can do the job under the conditions it will face.

**When it matters most:** DQ is most critical for custom-built or highly specialized process equipment where the design phase involves choices that are hard to reverse once the equipment is manufactured. For standard catalog laboratory equipment (an incubator, a centrifuge, a pH meter), DQ is often addressed through the procurement specification and vendor documentation rather than a separate DQ exercise.

**What DQ documentation should contain:**
- User requirements for the equipment (what it must do, the environment it will operate in, the GxP activities it will support, the regulatory and safety constraints it must meet)
- Vendor or design response to requirements, demonstrating the design meets each one (a compliance matrix mapping URS line to design feature)
- Assessment of data integrity implications: what electronic data does this equipment generate, and what Part 11 / Annex 11 controls does the built-in software provide
- Critical aspects or critical design elements identified from a risk assessment, so later testing is focused where product quality is at stake
- A documented basis for supplier selection, which ties DQ to [supplier and vendor qualification](/articles/supplier-vendor-qualification)

**Acceptance criteria:** Every URS line traces to a design feature that satisfies it, all critical aspects are identified, data integrity and Part 11 capabilities are documented against the firm's standard, and any gaps are listed with an agreed remediation or accepted-risk rationale. DQ is approved before purchase commitment or fabrication start.

**The data integrity angle at DQ:** When selecting instruments that will generate GxP data, evaluate the Part 11 features during DQ and procurement, before you commit to the purchase. Questions to ask: Does the software support individual user accounts? Does it maintain an audit trail with prior-value capture? Can the audit trail be exported and read by a reviewer? What is the retention architecture for raw data, and where does the original record physically live? Discovering that an instrument generates data in a proprietary format with no audit trail, after purchase and installation, is a problem that could have been caught at DQ. The cost of fixing a data integrity gap rises sharply the later it is found, from a line item in a purchasing specification to a deviation, a vendor escalation, and sometimes a stranded asset.

A worked example: a lab is choosing between two benchtop spectrophotometers. Both meet the optical specification. One stores results to a local flat file with a shared login and no audit trail. The other supports named accounts, time-stamped audit entries with reason-for-change, and an export to a controlled network location. On the optical spec they are equal. On the DQ data integrity criteria they are not close, and the cheaper instrument is the more expensive choice once you price the manual controls needed to make its records defensible.

---

## Installation Qualification (IQ)

**What it proves:** That the equipment was delivered as specified, is installed in an appropriate environment, and that all utilities and connections are correctly established.

**Why it is required:** Annex 15 defines IQ, and 21 CFR 211.63 (appropriate design, suitably located) gives the legal hook. The risk rationale is simple: an instrument installed in the wrong environment or wired to the wrong utility can pass every functional test on a bench and still drift or fail in place.

**What IQ documentation should contain:**
- Equipment identification: serial number, model number, firmware version, confirmation it matches the specification and the purchase order
- Installation location: environmental conditions (temperature, humidity, vibration, electrical) confirmed against equipment requirements
- Utility connections: electrical supply specification confirmed, water supply if applicable, compressed air or process gas if applicable, drains and exhaust
- Calibration status: confirmation that built-in measurement references are calibrated, or a documented plan for initial calibration before OQ, tied to the [calibration and metrology program](/articles/calibration-and-metrology-program)
- Documentation package received: operating manuals, maintenance manuals, safety data, spare parts list, P&IDs or wiring diagrams, material certificates where relevant
- Software and configuration baseline: installed version, patch level, and a record of the as-built configuration so later [change control](/articles/change-control-validated-systems) has a reference point

**How IQ runs, in sequence:** confirm receipt against PO and spec, verify no transit damage, confirm location and environment, verify utilities are connected and within spec, install software and record the configuration baseline, confirm document deliverables are present, then capture and disposition any deviations. Each step has a pre-approved acceptance criterion and a place for an initialed, dated result.

**Acceptance criteria:** Every component matches the specification, all utilities meet their stated requirements, the documentation package is complete, the configuration baseline is recorded, and all deviations are closed or risk-assessed before OQ begins.

**Where IQ fails:** The most common IQ failure is not at execution, it is incomplete scope. Organizations write IQ protocols for process equipment but skip IQ for analytical instruments on the assumption that instruments are "just plugged in." The expectation across regulators is that all instruments used in GxP activities require documented qualification appropriate to their complexity and criticality. A second frequent failure is treating IQ as a one-time formality and never recording the configuration baseline, which leaves the firm unable to prove later that a setting was always the way it is now versus quietly changed by an unrecorded action.

A third, quieter failure: vendor IQ executed by the supplier's field engineer and filed without review. Vendor-supplied IQ is acceptable and often sensible, but the regulated firm owns the result. Someone qualified at the firm has to review the executed protocol, confirm the acceptance criteria match the firm's requirements, and reconcile any deviations the engineer wrote up. An IQ binder no one at the firm has read is a finding waiting to happen.

---

## Operational Qualification (OQ)

**What it proves:** That the equipment operates as specified under defined conditions, and that it performs within its operational parameters across the range of conditions it will be used.

**Why it is required:** Annex 15 and 21 CFR 211.68 (equipment must function as intended, including computerized controls). OQ is where the functional specification gets verified, not assumed.

OQ tests the equipment's function, typically including:
- Normal operating range performance: does the equipment meet its specifications under normal conditions
- Boundary condition testing: does it behave appropriately at the limits of its operating range
- Alarm and interlock testing: do the safety and alarm systems activate when appropriate, and do they recover correctly
- Software and firmware function testing for instruments with embedded software: audit trail, user authentication, access levels, data output, time synchronization, backup and restore

**The challenge of OQ scope:** OQ should challenge the equipment's ability to maintain its operating parameters, temperature uniformity for an incubator, injection reproducibility for a chromatograph, accuracy across range for a balance. It should also challenge the failure modes: what happens when the incubator is loaded to capacity, when column pressure drops unexpectedly during a run, when power is interrupted mid-cycle. A protocol that only tests the happy path proves the equipment works when nothing goes wrong, which is the least interesting case.

Worst-case testing is the principle that earns the most argument and the most value. Annex 15 supports challenging the limits of operating ranges rather than only nominal conditions, because that is where marginal equipment reveals itself. Testing a balance only at mid-range tells you little about its behavior near its minimum weight, which is exactly where weighing of small sample quantities lives.

**A worked OQ acceptance snippet for an analytical balance:**

| Test | Method | Acceptance criterion | Result |
|---|---|---|---|
| Repeatability at low load | Weigh a 200 mg reference mass 10 times | RSD within manufacturer spec for the class; supports minimum weight per USP <41> | Pass |
| Accuracy across range | OIML-certified masses at 5 points (1 g to 200 g) | Each within stated tolerance for the weight class | Pass |
| Eccentricity (off-center) | Reference mass placed at 4 corners and center | Deviation within spec | Pass |
| Audit trail enforcement | Attempt to disable audit trail as a standard analyst | Standard user cannot disable; admin rights separated | Pass |

**For instruments with embedded software:** OQ is where you test the Part 11 / Annex 11 controls: audit trail configuration, user account enforcement, access-role separation, data output completeness, time-stamp accuracy and synchronization, and backup functionality. This is the qualification phase where the data integrity controls are formally verified. Confirm that the audit trail captures the operator identity, the old and new value on a change, a reason where required, and an accurate, synchronized time stamp tied to a controlled clock (see [time stamps and system clock control](/articles/time-stamps-and-system-clock-control)). Confirm that a standard user cannot turn the audit trail off and that administrative rights are separated from routine analyst rights. See the [analytical instrument qualification article](/articles/analytical-instrument-qualification) for instrument-specific coverage and the [audit trail design and review article](/articles/audit-trail-design-and-review) for what a defensible trail must contain.

**Acceptance criteria:** All functional and boundary tests meet their pre-approved limits, every alarm and interlock activates and recovers as designed, and the electronic-record controls are proven to work and proven not to be defeatable by a routine user. A common OQ shortfall is to verify a feature exists without verifying it cannot be defeated. An audit trail that is present but can be disabled by the analyst is, for inspection purposes, an audit trail you do not have. OQ is the right place to prove the negative.

---

## Performance Qualification (PQ)

**What it proves:** That the equipment consistently performs as intended under actual operating conditions, specifically the conditions under which it will be used in production or for GxP analyses.

**Why it is required:** Annex 15 defines PQ; it is the phase that connects equipment fitness to real use. The risk rationale is that equipment can pass functional tests run by a specialist under ideal conditions and still fail in the hands of routine operators running real materials over time.

PQ is the bridge between "the equipment works per its specifications" (OQ) and "the equipment is suitable for the specific use we are going to make of it." It is typically executed:
- Over a period of time, multiple runs rather than a single session
- Using representative materials or methods: actual analytical procedures, actual formulations, real load configurations
- By the personnel who will operate the equipment in production, not only by specialists

**What PQ looks like for different equipment types:**

| Equipment | PQ approach | Typical acceptance focus |
|---|---|---|
| Balance | Weigh reference masses at multiple points across the weighing range, repeated over time | Accuracy, repeatability, minimum weight per applicable pharmacopeial criteria |
| HPLC / UPLC | Run actual methods with representative samples | System suitability: peak area RSD, tailing factor, plate count, resolution |
| Incubator | Temperature mapping under loaded conditions over time | All locations within specification, including the slowest-to-recover spots |
| Autoclave | Cycle development with biological indicators and heat distribution and penetration studies under maximum load | Sterility assurance, cold-spot identification, F0 delivered |
| Stability chamber | Temperature and humidity mapping, empty and loaded, with power-recovery challenge | Uniformity and excursion recovery against [ICH stability](/articles/stability-programs-ich) conditions |
| Device assembly station | Run representative product builds across operators and shifts | Output consistency, defect rate, fixture repeatability |

**A worked HPLC system suitability acceptance example:** for a typical assay method, PQ might require, across replicate injections of a reference standard, a peak area RSD not more than 2.0%, USP tailing factor not more than 2.0, theoretical plates not less than 2000, and resolution between the two closest peaks not less than 2.0. The exact limits come from the validated method, not from the instrument; PQ confirms the instrument delivers them reliably in your hands.

**PQ vs process validation:** For manufacturing equipment, PQ is sometimes hard to distinguish from process validation. Annex 15 clarifies the line: PQ of the equipment shows it can perform the required function under operating conditions; process validation shows that the process, using that equipment, consistently produces product meeting specifications. Both are necessary, and PQ typically precedes process validation. The deeper treatment of the process side lives in the [process validation lifecycle article](/articles/process-validation-lifecycle), with the manufacturing-scale confirmation runs covered in [process performance qualification (PPQ)](/articles/process-performance-qualification-ppq).

**Acceptance criteria:** Multiple runs over time, with real materials and real operators, all meet their pre-approved limits, and any variability is within the stated tolerance. A practical sequencing note: PQ is where personnel and procedures get tested alongside the hardware. If the same analytical method behaves well in OQ run by a specialist but drifts in PQ run by the routine analysts, the gap is usually training or procedure clarity, not the equipment. That is a useful finding, and one reason PQ should be run by the people who will own the equipment day to day.

---

## Protocols, Deviations, and the Summary Report

Each phase runs against a pre-approved protocol that is signed by the author, a technical reviewer, and QA before any test is executed. Executing tests against a protocol that was approved after the data were collected is one of the most damaging findings in this area, because it suggests acceptance criteria were written to fit the result. Protocol structure and good authoring are covered in [writing validation protocols and reports](/articles/writing-validation-protocols-and-reports).

When a test result falls outside its acceptance criterion, that is a protocol deviation, not a quiet pen correction. The deviation gets a unique number, a description of what was observed, a root cause where determinable, an impact assessment, and a disposition: corrected and retested, accepted with justification, or escalated. The handling rules sit in [validation test failure management](/articles/validation-test-failure-management). A protocol that runs with zero deviations on a complex instrument is sometimes a sign of an undemanding protocol rather than flawless equipment.

The phases close with a summary report that states the objective, what was executed, every deviation and its disposition, whether acceptance criteria were met, and a clear conclusion on qualified status. QA approval of this report is what releases the equipment for GxP use. The structure of that closing document is covered in [validation summary report and release](/articles/validation-summary-report-and-release), and the full set of expected lifecycle artifacts in the [validation deliverables guide](/articles/validation-deliverables-guide).

---

## Calibration, Maintenance, and Requalification

Qualification is not a one-time activity. Equipment that passes PQ at installation requires an ongoing program to stay in a qualified state.

**Calibration:** Instruments with measurement capability (balances, pH meters, temperature probes, spectrophotometers) require periodic calibration against traceable standards. Calibration is distinct from qualification. Calibration verifies that the instrument's measurements are accurate at a point in time and at specific points across its range; qualification verifies that the instrument operates correctly across its full operating range and supports its intended use. A calibration that fails has implications backward in time: any results generated since the last passing calibration are now in question, which is why a failed calibration usually opens a [deviation](/articles/deviation-management) and an impact assessment. 21 CFR 211.160(b)(4) and 211.68 are the hooks; the program mechanics live in the [calibration and metrology program article](/articles/calibration-and-metrology-program).

**Preventive maintenance (PM):** Most qualification programs specify PM intervals and link PM completion to continued qualified status. Equipment with overdue PM is, arguably, not in a qualified state, and inspectors do compare PM due dates against the dates of records produced on the equipment.

**Requalification triggers:** Events that should trigger reassessment of qualified status:
- Relocation to a different lab or site
- Significant repair or component replacement
- Software or firmware update that affects measurement or GxP functions
- Environmental change such as room renovation or HVAC modification
- Significant deviation or anomalous performance observed during use
- Periodic requalification per the schedule defined in the qualification protocol or [validation master plan](/articles/validation-master-plan-and-periodic-review)

**The risk-based approach to requalification:** Not every trigger requires a full DQ, IQ, OQ, PQ cycle. Annex 15 explicitly supports a risk-based approach: assess what changed, what could be affected, and what testing is proportionate to confirming continued qualified status. Relocating a balance within the same lab may require only IQ verification and an abbreviated OQ; a full chromatography system relocation across facilities likely requires more extensive requalification. The judgment should be written down and approved through change control, so the decision to do less is defensible rather than a matter of who happened to be on shift. The dedicated treatment is in [requalification and periodic review of equipment](/articles/requalification-and-periodic-review-equipment).

A firmware update deserves special attention because it is easy to overlook. A vendor patch that "only fixes a display bug" can silently change rounding behavior or a calculation. Treat any update to GxP-relevant software as a change requiring assessment, capture the before-and-after version in the record, and verify the affected function still meets its acceptance criteria before returning the instrument to service.

---

## Periodic Review and the Qualified State Over Time

The hardest thing to prove in a mature site is not that an instrument was qualified once, but that it has stayed qualified. Periodic review answers this. On a defined cadence, often annual for higher-risk equipment, the program looks back across calibrations, PM records, deviations, change controls, and any requalifications, and makes a documented judgment: is this equipment still fit for use, or has accumulated change and drift eroded the original qualification?

Periodic review is where qualification debt becomes visible. A single overdue calibration is a deviation. A pattern of late calibrations, repeated minor repairs, and a firmware update no one assessed is a different story, and the review is the place to see it as a story rather than a series of isolated tickets. For program owners, a roll-up of qualification status across the equipment fleet, current versus overdue, requalification due dates, open deviations by instrument, is one of the more useful health metrics a quality system can produce, and it feeds directly into [management review under ICH Q10](/articles/management-review-q10) and the site [quality metrics program](/articles/quality-metrics-and-kpis).

---

## Common Findings and How Inspectors Read Them

Equipment qualification gaps show up in inspection observations and warning letters in recognizable patterns. Without inventing specific citations, the recurring themes are worth naming because they tell you where to focus a self-assessment:

- Instruments generating GxP data with no qualification on file, most often laboratory instruments treated as "just plug-in" devices
- Audit trail functionality not enabled, not configured, or never reviewed, frequently surfaced first as a data integrity observation rather than an equipment one
- Shared logins and missing individual user accounts on instrument software, which break attributability
- Calibration or PM overdue against the dates of records produced on the equipment
- Requalification not performed after a relocation, repair, or software change
- Qualification documents that do not trace to requirements, or acceptance criteria written after the data were collected
- Vendor-executed protocols filed without firm review or deviation reconciliation
- A "qualified" instrument whose configuration baseline was never captured, so no one can prove a critical setting was not changed

An inspector reading these does not see eight unrelated problems. They see a program that cannot reliably demonstrate the equipment behind its data is fit for use, which is the same conclusion data integrity findings drive toward. That convergence is the reason qualification and data integrity now sit in the same conversation. The pattern library in the [FDA warning letters patterns article](/articles/fda-warning-letters-patterns) covers how these observations escalate, and the [equipment qualification audit checklist](/articles/equipment-qualification-audit-checklist) gives a line-by-line self-assessment.

---

## Interview-Ready: Questions You Should Be Able to Answer

These come up in validation, QA, and metrology interviews, and from inspectors on the floor.

**"Walk me through the difference between qualification and validation."** Qualification is for equipment and instruments, physical things; validation is for processes, methods, and computerized systems. A qualified autoclave runs within its temperature and pressure spec; a validated sterilization cycle proves the process using that autoclave makes sterile product. Both are required and they are not interchangeable.

**"What does each of DQ, IQ, OQ, PQ actually prove?"** DQ proves the design meets the requirements before you buy or build. IQ proves it was delivered and installed as specified with the right utilities and environment. OQ proves it functions across its operating range, including boundaries and alarms. PQ proves it performs consistently in real use, with real materials and real operators, over time.

**"How do you decide how much qualification an item needs?"** Risk based, documented, and tied to a quality risk management assessment under ICH Q9(R1). A non-GxP item needs none; a simple GxP item with no data output may need verified installation and calibration; a complex computerized instrument needs the full lifecycle plus software assurance. The scaling decision is written down, not improvised.

**"A balance fails its scheduled calibration. What do you do?"** Open a deviation, take the instrument out of service, and run an impact assessment back to the last passing calibration: every result generated on it since then is potentially affected, so you assess affected batches, methods, and decisions. Then determine root cause, recalibrate or repair, and requalify or verify before return to service.

**"How does equipment qualification connect to data integrity?"** A result is only as reliable as the equipment that produced it. ALCOA+ Accurate requires data generated by a qualified instrument using a validated method; an unqualified instrument fails accuracy not because the number is necessarily wrong but because reliability cannot be demonstrated. The user accounts and audit trail you confirm in OQ are what make a result Attributable.

**"What would make you reject a vendor IQ package?"** If no one at the firm reviewed it, if its acceptance criteria do not match our URS, if deviations were left unreconciled, or if it does not match the actual installed configuration. We own the result even when the vendor executes the work.

**"When does a firmware update require requalification?"** Whenever it touches a GxP-relevant function. Even a patch sold as cosmetic can change rounding or a calculation. Assess it through change control, record before and after versions, and re-verify the affected function against its acceptance criteria before the instrument goes back into service.

---

## The Connection to Data Integrity

Equipment qualification and data integrity are more tightly linked than they often appear in practice.

An instrument that generates GxP data, any result that contributes to a quality decision, needs to be qualified for those results to be meaningful. An out-of-qualification balance, a pH meter past its calibration date, a chromatography system whose OQ was never completed: data from any of these is data generated on equipment of unknown fitness. The result may be accurate by coincidence, but it is not demonstrably reliable, and "demonstrably reliable" is the standard.

This is why [ALCOA+](/articles/alcoa-plus-deep-dive) includes the Accurate principle: data must have been generated by a qualified instrument using a validated method. A result generated by an unqualified instrument fails accuracy not because the number is wrong, but because its accuracy cannot be demonstrated. The Attributable principle leans on qualification too, because the user account enforcement and audit trail you confirm during OQ are what make a result traceable to a person and a moment.

The [analytical instrument qualification article](/articles/analytical-instrument-qualification) covers the USP <1058> framework specifically, which sorts instruments into groups by complexity (Group A, B, and C) and connects qualification to laboratory data integrity requirements most rigorously. For the broader system view of how qualification fits alongside computerized system validation, the [GAMP 5 CSV framework article](/articles/gamp5-csv-framework) is the companion piece, since many modern instruments are as much software systems as they are hardware, and the [computer software assurance guidance](/articles/computer-software-assurance-fda) (FDA's CSA guidance, issued in draft in 2022 and finalized in 2025) shapes how much testing effort goes where. Read together, they make the same point from two directions: the fitness of the equipment and the integrity of its data are not separate programs, they are two views of one obligation.
