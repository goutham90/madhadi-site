---
title: "Analytical Instrument Qualification: USP <1058> and the 4Qs Framework"
description: "How USP <1058> defines analytical instrument qualification, the four Qs, instrument groups A/B/C, and how AIQ connects to computer system validation and data integrity."
pubDate: 2025-10-13
tags: ["equipment-qualification", "USP-1058", "GxP", "analytical-instruments", "IQ-OQ-PQ"]
pillar: "equipment-qualification"
tier: "Intermediate"
---

Analytical instruments occupy a special place in regulated quality. They are the equipment that generates most of the GxP data used for lot release decisions, stability assessments, process control, device acceptance testing, and clinical sample analysis. A single chromatography system can produce hundreds of assay and impurity results a week, each one feeding a release decision or a regulatory filing. Their qualification requirements sit at the intersection of two disciplines: the equipment qualification lifecycle (DQ/IQ/OQ/PQ) and data integrity, because every modern instrument generates electronic data that must be reliable, complete, and attributable.

[USP General Chapter <1058>](https://www.usp.org/) on Analytical Instrument Qualification provides the most developed framework written specifically for laboratory instruments. The chapter was first published in 2008 and was substantially revised in 2017, with the revision aligning the chapter to a data lifecycle view and tightening the language around software. Understanding it is essential for anyone managing analytical laboratories, building qualification programs, or evaluating the data integrity controls behind a result, whether the lab supports drug substance manufacturing, biologics, medical device testing, or contract testing services.

---

## The USP <1058> Framework

USP <1058> defines Analytical Instrument Qualification (AIQ) as the collection of documented evidence that an instrument is suitable for its intended use. That phrasing is deliberate. It does not ask whether the instrument is good, or new, or expensive. It asks whether you can show, on paper, that the instrument does what your methods need it to do.

The chapter introduces two refinements to the general DQ/IQ/OQ/PQ framework that distinguish it from generic equipment qualification:

1. An instrument classification system (Groups A, B, and C) that scales qualification effort to instrument complexity, so you do not write a 40-page protocol for a vortex mixer.
2. An explicit integration of software qualification, connecting instrument qualification to computer system validation rather than treating the two as separate worlds.

The chapter also formally recognizes the four-qualification structure, commonly shortened to the 4Qs: Design Qualification, Installation Qualification, Operational Qualification, and Performance Qualification. This is consistent with the broader [equipment qualification lifecycle](/articles/equipment-qualification-lifecycle), but USP <1058> adds a useful idea about where responsibility for each Q sits.

### What each Q actually contains

The 4Qs are not interchangeable boxes. Each answers a distinct question, and inspectors expect to see that distinction reflected in the documents.

| Phase | Question it answers | Representative contents |
|---|---|---|
| Design Qualification (DQ) | Did we specify the right instrument for the job? | Intended use statement, user requirements, functional and data specifications, environment and utility needs, vendor selection rationale |
| Installation Qualification (IQ) | Was it installed correctly and completely? | As-built configuration, serial/asset numbers, software version, firmware version, utilities verified, environment verified, manuals and certificates present, network and server connection documented |
| Operational Qualification (OQ) | Does it operate within specification across its range? | Functional tests of each module against acceptance criteria, software function and security tests, audit trail verification, challenge of error handling and limits |
| Performance Qualification (PQ) | Does it perform for the methods we actually run? | Method-representative runs, system suitability against real method criteria, demonstration of sustained performance |

DQ is the phase teams skip most often, then regret. If you never wrote down the intended use and the data requirements, you have nothing to qualify against, and you cannot defend later that the instrument was the right choice. For a purchased commercial instrument, DQ can be short: a documented statement of intended use, the requirements it must meet, and confirmation that the selected model meets them. For a complex or configured system, DQ ties directly to [user requirements and traceability](/articles/user-requirements-and-traceability).

### Who owns each Q

One of the more practical contributions of USP <1058> is its discussion of roles. Qualification is a shared responsibility, and the chapter is explicit that the user, not the vendor, owns the outcome.

| Qualification phase | Primary owner | Typical contribution |
|---|---|---|
| Design Qualification (DQ) | User | Defines intended use, functional and data requirements, environment needs |
| Installation Qualification (IQ) | User and manufacturer | Vendor installs and confirms delivery; user verifies environment, utilities, documentation |
| Operational Qualification (OQ) | Manufacturer and user | Often executed with vendor test scripts; user reviews and approves criteria |
| Performance Qualification (PQ) | User | Ongoing demonstration that the instrument performs for the specific methods in use |

The trap many laboratories fall into is accepting a vendor OQ package at face value and treating it as the whole qualification. A vendor OQ proves the instrument meets the manufacturer's generic specification. It does not prove the instrument is fit for your potency assay. DQ and PQ are where your specific needs enter the record, and those are yours to own.

### Roles and responsibilities across the program

Beyond the per-Q ownership, a working program assigns standing roles:

- **Instrument owner or responsible analyst.** Initiates qualification, drafts or reviews protocols, executes user-side testing, maintains the qualified state day to day.
- **Laboratory or metrology management.** Approves protocols and reports, owns the inventory and schedule, ensures requalification and calibration do not lapse.
- **Quality Assurance.** Independent review and approval of protocols and reports, confirms acceptance criteria are justified, audits the program. QA approval is what makes the record a controlled GxP document, not a lab notebook entry.
- **Vendor or service engineer.** Performs installation, executes vendor IQ/OQ scripts, provides certificates of calibration and traceability. The vendor supports the work; it does not own the conclusion.
- **IT or system administrators.** For Group C systems, manage the server, accounts, backups, and patching, under the change control and access rules the quality system defines.

---

## Instrument Groups: A, B, C

USP <1058> classifies instruments into three groups based on measurement complexity and the degree to which software controls their function. The point of the grouping is proportionality: a balance and a triple-quadrupole mass spectrometer should not carry the same documentation burden. Classification is a documented decision, not an opinion, and the rationale belongs in the qualification record so an auditor can see why a given instrument carries the burden it does.

### Group A: standard equipment with no measurement capability

Equipment for which qualification consists primarily of verifying that it meets its nominal specification. Examples include magnetic stirrers, vortex mixers, ultrasonic baths, nitrogen evaporators, and heating plates. Qualification typically involves:

- Confirmation that the instrument matches its specification (model, serial number)
- A documented conformance check against the manufacturer's stated operation
- Basic functional verification

No software qualification is required, because these instruments have no GxP software components and no data output that supports a decision. The acceptance criterion is simple: the device is present, is the correct model, and visibly performs its stated function (the stirrer stirs, the bath heats).

### Group B: standard instruments with measurement capability, no significant software control

Instruments that measure and display results, but whose operation does not depend on complex software. Examples include analytical balances with digital readouts, calibrated thermometers, pH meters, conductivity meters, melting point apparatus, Karl Fischer titrators, refractometers, and basic UV/Vis spectrophotometers. Qualification focuses on:

- IQ covering installation and environment
- OQ verifying performance across the use range: accuracy, linearity, and precision
- Calibration against traceable standards, with certificates retained

For instruments with limited software interfaces (a USB export, a built-in data logger), a focused [21 CFR Part 11](/articles/21-cfr-part-11-eu-annex-11) assessment of those specific features is appropriate. The question is narrow: does this feature create or store a record that supports a GxP decision, and if so, is it controlled.

### Group C: instruments with significant software control

Instruments where software is integral to measurement, data acquisition, and result generation. Examples include HPLC, UPLC, and GC systems running a chromatography data system (CDS), mass spectrometers, dissolution testers, particle counters, flow cytometers, plate readers driving complex assays, and real-time PCR instruments. For Group C, full AIQ including software qualification is required:

- The instrument hardware is qualified through IQ/OQ/PQ
- The control and data acquisition software is qualified as a computerized system, with a Part 11 assessment, audit trail verification, and access control
- The interface between hardware and the data system is verified end to end

### Why the B versus C line matters

The boundary between Group B and Group C is the one teams argue about, and it has real consequences. A simple UV/Vis with a digital readout and manual transcription of the result is Group B. The same UV/Vis connected to a CDS or LIMS, where the software captures, processes, and stores the spectrum, is Group C. The software is now part of the measurement system. Software classification frameworks such as those in [GAMP 5](/articles/gamp5-csv-framework) help here: the more the result depends on configurable or custom software logic, the more the system pulls toward Group C and toward a full computer system validation effort.

A useful test: if removing the software would prevent you from producing or defending the result, the instrument belongs in Group C.

The grouping is not always one instrument, one group. A multi-mode plate reader used purely for a fixed endpoint read with manual transcription behaves like Group B, but the same reader running a kinetic assay with software-driven curve fitting behaves like Group C. Classify against the intended use, not the box.

---

## Worked Example: Classifying a Mixed Inventory

A small QC laboratory needs to qualify a batch of instruments. Here is how the classification and effort scale out.

| Instrument | Group | Why | Qualification scope |
|---|---|---|---|
| Vortex mixer | A | No measurement, no data | Conformance check, functional verification |
| Drying oven (no logging) | A | Provides a condition, not a result | Conformance check; temperature mapping if used for a controlled process |
| Analytical balance (standalone) | B | Measures, simple firmware, no GxP software control | IQ, OQ (accuracy, linearity, repeatability, eccentricity), traceable calibration |
| pH meter | B | Measures, no significant software | IQ, OQ across pH range, calibration with traceable buffers |
| FTIR with local PC software | B or C | Depends on whether software stores and processes GxP records | Focused Part 11 assessment decides; if it controls records, treat as C |
| UPLC on a networked CDS | C | Software acquires, integrates, and stores the result | Full IQ/OQ/PQ plus CSV: audit trail, access control, raw data retention |
| Real-time PCR system | C | Software drives amplification analysis and call | Full IQ/OQ/PQ plus CSV |

The point is visible at a glance: the vortex mixer gets a one-page record, the UPLC gets an integrated qualification and validation package. That proportionality is the entire reason USP <1058> exists.

---

## The Software Qualification Interface

The most consequential part of USP <1058> for modern laboratories is its treatment of Group C software.

For a contemporary instrument, the hardware and the software that controls it are inseparable. A chromatograph running a commercial CDS, a flow cytometer running its acquisition suite, a digital PCR system running its analysis software: in each case the raw data file is a product of both the hardware measurement and the software's acquisition and processing logic. Qualifying the hardware while ignoring the software leaves a hole exactly where regulators look hardest.

USP <1058> addresses this by stating that the qualification of analytical instruments should include the qualification of relevant software. In practice this means:

- The CDS running the chromatograph is a computerized system subject to [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11) requirements
- The audit trail in the CDS is configured, enabled, and verified
- User accounts are individual, role-based, and controlled
- The data output is complete, including the original raw data and not only the processed summary

This does not mean every Group C instrument gets a separate, parallel validation exercise. Hardware qualification and software qualification can be run as one integrated program, with test scripts that cover hardware performance and software controls in the same set of protocols. But both have to be addressed, and the integrated approach should be documented so an inspector can see that nothing was assumed away. The broader discipline here lives in [computer system validation and the GAMP 5 framework](/articles/gamp5-csv-framework) and, for risk-scaled approaches, in [computer software assurance](/articles/computer-software-assurance-fda). FDA's Computer Software Assurance guidance was issued as a draft in 2022 and finalized in 2024; it supports scaling test effort to risk, which fits the proportionality already built into USP <1058>.

### A worked example

Consider a UPLC system used for a related-substances method. The integrated qualification might include:

- IQ: confirm the pump, autosampler, column oven, and detector are installed; confirm the CDS version, server connection, and that the audit trail is switched on and cannot be disabled by an analyst
- OQ: verify flow rate accuracy, injector precision, detector linearity and wavelength accuracy, oven temperature accuracy; confirm that an audit trail entry is generated when a processing method is changed, and that a low-privilege user cannot delete data
- PQ: run the actual method and confirm system suitability passes against the method's criteria

One program, one report, both the metal and the code covered.

### Sample OQ acceptance criteria

OQ criteria should be concrete and measurable. A generic UPLC module-level OQ might read like this. The exact values come from the manufacturer specification and the methods in use, so treat the numbers below as an illustrative pattern rather than universal limits.

| Module / function | Test | Example acceptance criterion |
|---|---|---|
| Pump | Flow rate accuracy at 1.0 mL/min | Within plus or minus 2% of set flow |
| Pump | Gradient composition accuracy | Within plus or minus 1% absolute at tested steps |
| Autosampler | Injection precision (replicate area RSD) | RSD of peak area no more than 1.0% over 6 injections |
| Autosampler | Carryover | No more than 0.05% area of preceding peak |
| Column oven | Temperature accuracy | Within plus or minus 1.0 degree C of setpoint |
| Detector | Wavelength accuracy | Within plus or minus 1 nm of certified standard |
| Detector | Linearity over concentration range | Coefficient of determination at least 0.999 |
| Software | Audit trail captures a method change | Entry shows old value, new value, user, timestamp |
| Software | Access control enforced | Low-privilege user cannot delete or alter raw data |

A pass on every line, with raw data attached and any deviation investigated and resolved, is what a finished OQ looks like.

---

## Connecting AIQ to Data Integrity

The link between qualification and data integrity is direct. If an instrument is not qualified, you cannot show its data is accurate, and accuracy is an [ALCOA+ attribute](/articles/alcoa-plus-deep-dive) required of every piece of GxP data. The data integrity controls that matter most for Group C instruments are the following.

**Audit trail completeness.** For CDS platforms, the audit trail must capture changes to processing parameters, integration settings, and result values, and it must retain the prior value alongside the new one, the user, and a timestamp. As covered in the article on [audit trail design and review](/articles/audit-trail-design-and-review), this requires deliberate configuration; many systems ship with reduced logging by default. The audit trail configuration should be verified and captured as evidence (a screenshot or exported settings record) as part of OQ, not assumed.

**Manual reintegration.** Chromatographic reintegration is the single most scrutinized data integrity behavior in analytical laboratories, and it appears repeatedly in published FDA warning letters to drug manufacturers. Reprocessing a chromatogram to move a baseline can turn a failing result into a passing one. The qualified system must record every reintegration in the audit trail, and the laboratory's procedures must require a documented, scientific justification for any manual integration. Qualification should confirm the audit trail captures these events. For the detail of how a CDS should be controlled end to end, see [chromatography data system integrity](/articles/chromatography-data-system-integrity).

**User account management.** Each analyst must have an individual account with privileges matched to their role. Shared logins such as a generic admin account are both a qualification problem, because qualification establishes who has authorized access, and a data integrity problem, because shared credentials destroy attributability. Access controls and privilege levels should be verified during IQ/OQ. See [access control and CSV cybersecurity](/articles/csv-cybersecurity-access-control) for the configuration detail.

**Raw data retention.** The instrument's raw data files are the primary electronic records. They must be retained, backed up, and the backup must be restorable. For Group C systems this usually means the CDS data repository is backed up on a verified schedule and a restore is periodically tested. The retention and backup arrangement should be documented in IQ and confirmed through [backup and restore validation](/articles/backup-restore-disaster-recovery-validation).

**Data transfer verification.** Where instrument data moves to a LIMS or another system, the transfer is itself a record-integrity step. A LIMS that imports a result summary from a chromatograph without checking that the imported values match the source raw data has a gap. The transfer logic should be qualified, and for moves of historical data the principles in [data migration validation](/articles/data-migration-validation) apply. The wider system-level work lives in [LIMS implementation and validation](/articles/lims-implementation-and-validation).

---

## Performance Qualification for Analytical Instruments

PQ for analytical instruments deserves specific attention, because this is where qualification connects directly to the analytical method and where the two are most often confused.

### System suitability is not PQ

System suitability testing is the formal demonstration, before or during each analytical run, that the system is performing within the method's requirements. Criteria typically include peak area or retention time relative standard deviation, peak tailing factor, column plate count, and resolution between critical pairs. System suitability is method-specific and is executed every time the method is run. The general requirement for system suitability in chromatography lives in USP General Chapter <621>.

PQ is system-level. It confirms that the instrument operates within its qualified performance range, and it is executed during initial qualification and at requalification, not before every run. The two are complementary:

- System suitability confirms the method is working on this system, on this day, with this column and these reagents.
- PQ confirms the system itself is operating within the range it was qualified for.

You need both. A system can pass PQ and still fail system suitability on a given day because of a degraded column or a bad mobile phase, and that is exactly the kind of method-level problem system suitability exists to catch.

### Deriving PQ acceptance criteria

PQ acceptance criteria should come from the methods the instrument actually runs. If a UPLC is used for an assay method that requires a peak area relative standard deviation of no more than 2.0 percent across six replicate injections, the PQ has to demonstrate the system can reach that level of precision. Pulling criteria from the method, rather than from a generic vendor template, is what makes the qualification defensible. The relationship between method requirements and instrument capability is part of the wider [analytical lifecycle described in ICH Q14 and Q2(R2)](/articles/ich-q14-q2r2-analytical-lifecycle), and connects to [method validation](/articles/method-validation-essentials) and [compendial method verification](/articles/compendial-method-verification).

### Worked PQ example

A UPLC supports both an assay method (loose precision need) and a related-substances method (tight need at low levels). A defensible PQ runs a representative method and demonstrates the system meets the tightest applicable criterion.

| PQ test | Method requirement | Result | Verdict |
|---|---|---|---|
| Peak area RSD, 6 replicate injections | No more than 2.0% | 0.6% | Pass |
| Retention time RSD | No more than 1.0% | 0.2% | Pass |
| Resolution, critical impurity pair | At least 1.5 | 2.1 | Pass |
| Tailing factor, main peak | No more than 2.0 | 1.1 | Pass |
| Limit of detection check at reporting threshold | Signal-to-noise at least 10 | 28 | Pass |

The instrument is qualified for both methods because it cleared the tighter related-substances criteria. If a future method needed a resolution of at least 2.5 between an even closer pair, that would be a new intended use and could require a fresh PQ assessment.

---

## The "Fit for Intended Use" Standard

USP <1058> returns again and again to the phrase fit for intended use. This is the foundational standard for AIQ. The question is never whether an instrument meets some universal performance benchmark, but whether it performs well enough to support the specific measurements it is being used for.

An analytical balance with a readability of 0.1 mg is fit for intended use when an assay requires weighing 200 mg samples to within plus or minus 5 mg. The same balance may not be fit for intended use in a potency method where 5 mg samples must be weighed to within plus or minus 0.1 mg, because at that mass the instrument's uncertainty consumes most of the tolerance. The hardware did not change. The intended use did, and that changes the answer.

This principle drives three program rules:

- Acceptance criteria are derived from method requirements, not from the instrument's headline specification
- An instrument only needs to be qualified for the methods it actually runs
- Expanding an instrument's use, adding a new method with tighter requirements, can require reassessment and additional qualification

That last point is the one programs forget. Qualification status is tied to a defined intended use. Widen the use and you may have invalidated the basis of the existing qualification.

---

## Calibration Versus Qualification

A persistent confusion is worth settling plainly: calibration is not qualification.

**Calibration** verifies that an instrument's measurements are accurate at a point in time, against traceable standards. A calibrated balance reports the correct mass today. Calibration says nothing about whether the balance sits in a draft-free environment, whether it performs across its full weighing range, or whether the software behind it keeps a compliant audit trail.

**Qualification** through IQ/OQ/PQ verifies that the instrument is installed correctly, operates within its specifications, and performs adequately for its intended use. Qualification assumes calibration is in place. An OQ acceptance criterion of plus or minus 0.1 mg accuracy is meaningless unless the balance was calibrated first.

Both are required, and they are sequenced. Calibration alone is not qualification. Qualification that does not confirm calibration is incomplete. In practice the calibration program and the qualification program should reference each other, with current calibration certificates cited in the relevant qualification records. The metrology side of this lives in the [calibration and metrology program](/articles/calibration-and-metrology-program).

---

## Requalification and the Qualified State

Qualification is not a one-time event. An instrument is in a qualified state only as long as nothing has invalidated that status. Several common events should trigger an assessment and, where warranted, requalification:

- A repair that touches a measuring component, for example replacing a detector lamp or a pump head
- Relocation, which changes the installation environment that IQ verified
- A software update or patch to the control or data system
- A change to the analytical method that pushes performance requirements beyond what was qualified
- A defined periodic interval, often annual or biennial depending on instrument type and use

Software updates deserve a specific note. A CDS patch can alter integration algorithms, audit trail behavior, or user permission handling. Any change to a qualified system should run through [change control for validated systems](/articles/change-control-validated-systems), with an impact assessment that decides how much retesting the change demands. Treating a vendor patch as routine IT maintenance, outside the quality system, is a frequent finding.

The depth of requalification scales with the change. A relocation across the same room with the same utilities may need only an abbreviated IQ check and a PQ run. A detector replacement needs the OQ tests for that detector plus a PQ. A major CDS version upgrade can need a full software qualification and regression testing. The governing principles are set out in [requalification and periodic review for equipment](/articles/requalification-and-periodic-review-equipment).

---

## Common Mistakes and Inspection-Finding Patterns

These are the patterns that recur in laboratory inspections and internal audits, stated generically.

- **Vendor OQ accepted as the whole qualification.** No DQ, no user-owned PQ, no intended use written down. The lab cannot show the instrument is fit for its own methods.
- **Audit trail not enabled, or set to reduced logging.** The system was qualified but the audit trail was never verified during OQ, and a default low-logging configuration shipped through. Changes to results are invisible.
- **Shared or generic logins.** A single admin account used by several analysts. Attributability is gone, and access control was never qualified.
- **Reintegration without justification.** Manual integration done freely with no documented scientific rationale, and the audit trail either off or never reviewed. This is among the most cited data integrity failures.
- **Group classification undocumented or wrong.** An instrument with software control treated as Group B to avoid the CSV effort. The qualification looks complete but covers only half the system.
- **Acceptance criteria copied from a vendor template.** Criteria not traceable to any method the instrument runs, so the qualification proves nothing about fitness for intended use.
- **PQ confused with system suitability.** The lab points to daily system suitability as evidence of qualification and has no system-level PQ at all.
- **Calibration lapsed but instrument still in use.** No link between the calibration schedule and the qualification status, so a lapse goes unnoticed.
- **Raw data not retained, only processed reports kept.** The primary electronic record (the raw data file with its metadata) is deleted or never backed up. The processed summary alone is not the complete record.
- **Software patches applied outside change control.** IT updates the CDS without an impact assessment, and the qualified state is broken without anyone in the quality system knowing.
- **Inventory cannot answer "is this instrument qualified."** No central list tying each instrument to its group, qualification status, and next due dates. The program exists on paper but cannot be demonstrated.

---

## Interview and Inspection Questions

Expect these questions in a job interview, an internal audit, or a regulatory inspection. Short, defensible answers follow each.

**What is the difference between calibration and qualification?**
Calibration confirms measurement accuracy against traceable standards at a point in time. Qualification (IQ/OQ/PQ) confirms the instrument is installed correctly, operates within specification, and performs for its intended use. Qualification assumes calibration is in place; neither replaces the other.

**How do you decide whether an instrument is Group B or Group C?**
By how much the software controls the measurement and the record. If software acquires, processes, or stores the result, and removing it would prevent you from producing or defending the result, it is Group C and needs computer system validation. A standalone measuring device with simple firmware and manual transcription is Group B.

**What is the difference between PQ and system suitability?**
PQ is system-level and confirms the instrument operates within its qualified range; it runs at initial qualification and requalification. System suitability is method-level and confirms the method works on the system on a given day; it runs every time the method runs. You need both.

**Where do PQ acceptance criteria come from?**
From the methods the instrument actually runs, specifically the tightest applicable requirement, not from a generic vendor specification. That is what makes the qualification fit for intended use.

**Who owns qualification, the vendor or the user?**
The user owns the outcome. The vendor supports installation and may execute OQ scripts, but the user defines intended use (DQ), verifies the environment, approves acceptance criteria, and owns ongoing performance (PQ).

**What would invalidate a qualified state?**
A repair to a measuring component, relocation, a software update or patch, or a method change that pushes requirements beyond what was qualified. Each triggers an impact assessment and, where warranted, requalification.

**How do you handle a vendor software patch on a qualified CDS?**
Through change control with an impact assessment, not as routine IT maintenance. The assessment decides the retesting scope, which can range from a focused regression check to a full software requalification for a major version change.

**Show me that a specific instrument generating release data is qualified.**
Be ready to produce the current qualification record, the group classification rationale, the audit trail configuration evidence, the access list and why each admin has rights, and a walk-through of a reintegration in the audit trail.

---

## Practical Qualification Program Management

For a laboratory with 30 to 50 analytical instruments spanning Groups A, B, and C, the program is only as good as its tracking. The elements that hold it together:

1. **An instrument inventory.** Every instrument listed with its group classification, current qualification status, responsible analyst, and the next scheduled requalification and calibration dates.
2. **Protocols and reports organized by instrument.** Current approved versions easy to locate, with superseded versions retained but clearly marked, under [document control](/articles/document-control-fundamentals).
3. **A calibration schedule integrated with qualification.** Calibration due dates visible alongside qualification status so neither lapses unnoticed.
4. **Defined requalification triggers.** A written list of events that prompt reassessment, so the decision is not left to individual judgment in the moment.
5. **A periodic review.** A scheduled confirmation that every instrument remains in a qualified state, with documented corrective action for any that has drifted out. This dovetails with the wider [periodic review described in the validation master plan](/articles/validation-master-plan-and-periodic-review).

A sample inventory row shows what good tracking captures:

| Asset ID | Instrument | Group | Qual status | Last qual | Next requal | Calibration due | Owner |
|---|---|---|---|---|---|---|---|
| LAB-0142 | UPLC + CDS | C | Qualified | 2025-03-10 | 2026-03-10 | 2025-12-01 | QC analyst, assay lab |
| LAB-0207 | Analytical balance | B | Qualified | 2025-06-22 | 2027-06-22 | 2025-09-15 | Metrology |
| LAB-0311 | Vortex mixer | A | Qualified | 2025-01-08 | n/a periodic | n/a | Sample prep |

A LIMS or QMS is the natural home for this tracking. A validated spreadsheet, controlled per the principles in [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation), is workable for smaller programs. Either beats the alternative. Inspectors are far more troubled by a laboratory that cannot say which instruments are qualified than by a program that is clearly tracking the work, even if the tracking is not fully electronic.

### How this shows up in an inspection

When an investigator walks the laboratory, the AIQ questions are predictable. Expect to be asked to show the qualification record for a specific instrument generating release data, to demonstrate that the instrument's audit trail is enabled and reviewed, to explain who has administrator rights to the CDS and why, and to walk through a reintegration in the audit trail. A program that can answer those four questions calmly, with records in hand, is a program that holds up. For broader preparation, see [equipment qualification audit checklist](/articles/equipment-qualification-audit-checklist) and [FDA inspection readiness](/articles/fda-inspection-readiness).

The throughline across all of it is the same idea USP <1058> opens with. Qualification is documented evidence that the instrument is suitable for its intended use. Every protocol, every acceptance criterion, every audit trail screenshot exists to make that one sentence defensible when someone outside your laboratory asks you to prove it.
