---
title: "Software as a Medical Device: IEC 62304 and SaMD Lifecycle"
description: "How medical device software is engineered and regulated under IEC 62304 safety classes, SOUP management, and the IMDRF SaMD framework, and where this diverges from GAMP 5 computerized system validation."
pubDate: 2026-06-20
tags: ["IEC 62304", "SaMD", "medical device software", "GAMP 5", "FDA", "ISO 14971", "software lifecycle", "predetermined change control"]
pillar: "medical-devices"
tier: "Advanced"
---

A pharma quality professional walks into a software audit and reaches for GAMP 5. A medical device software engineer reaches for IEC 62304. They are looking at the same artifact, code that influences a patient, but through different regulatory lenses, with different deliverables, different vocabularies, and different definitions of what "validated" even means. The gap matters more every year, because the line between a drug-adjacent computerized system and a regulated medical device is blurring. A mobile app that calculates an insulin dose, an algorithm that flags a stroke on a CT scan, a cloud service that triages dermatology images, these are not spreadsheets with a validation summary. They are devices.

This article walks through how software gets built and controlled when the software *is* the device. It starts with the basic question of what counts as a medical device, builds through IEC 62304's lifecycle and safety classification, covers Software of Unknown Provenance (SOUP), then moves into the modern Software as a Medical Device (SaMD) framework and the regulatory machinery now governing AI/ML models that change over time. Throughout, it contrasts this world with the GAMP 5 computerized system validation (CSV) world that pharma practitioners know, and marks the places where the two genuinely meet.

A note on scope before we start. None of this is specific to one therapeutic area or modality. The same standard governs an imaging-AI startup, a large medical device manufacturer building a patient monitor, a pharma company shipping a connected inhaler with a companion app, and a diagnostics firm running a SaMD in the cloud. The vocabulary and the deliverables are the same; only the intended use and the risk change.

## When is software a medical device?

The threshold question is jurisdictional and definitional, not technical. In the United States, the definition of a device sits in Section 201(h) of the Federal Food, Drug, and Cosmetic Act: an instrument, apparatus, or *contrivance* intended for diagnosis, cure, mitigation, treatment, or prevention of disease, or intended to affect structure or function of the body, that does not achieve its primary purpose through chemical action or metabolism. Software can satisfy this on its own.

The 21st Century Cures Act of 2016 amended the FD&C Act (adding section 520(o)) to carve out several categories of software that are *not* devices, administrative support of a healthcare facility, general wellness, electronic health record functions, and certain clinical decision support that merely provides recommendations a clinician can independently review. FDA's guidance "Clinical Decision Support Software" (final, September 2022) explains how the agency reads the CDS exclusion, and the "Policy for Device Software Functions and Mobile Medical Applications" guidance describes which mobile and software functions FDA actively regulates versus exercises enforcement discretion over.

Internationally, the International Medical Device Regulators Forum (IMDRF) coined the term **Software as a Medical Device (SaMD)**: "software intended to be used for one or more medical purposes that perform these purposes without being part of a hardware medical device." The "without being part of" clause is the key distinction. Software embedded in an infusion pump is *Software in a Medical Device* (sometimes abbreviated SiMD), governed as a component of that device. Standalone software, a radiology AI running in the cloud, an app on a clinician's phone, is SaMD.

In the EU, the Medical Device Regulation (Regulation (EU) 2017/745, the MDR) treats software as a device in its own right, and MDR Rule 11 classifies most diagnostic and therapeutic software into Class IIa or higher, which pulls in Notified Body oversight. The MDR replaced the older Medical Device Directive and tightened software classification substantially. For broader EU device context, see our [EU MDR and IVDR overview](/articles/eu-mdr-ivdr-overview).

This is the first hard fork from the pharma CSV mindset. In GAMP 5, you are validating a *computerized system that supports a regulated process*, a LIMS, an electronic batch record, a chromatography data system. The drug is the product; the software is infrastructure. In the device world, the software can be the product. Validation is not the end goal; *demonstrating the device is safe and effective* is the goal, and the software lifecycle is one input to that demonstration.

### A decision procedure you can actually run

When someone hands you a piece of software and asks "is this a device, and what governs it," work the question in this order. The sequence matters because each answer narrows the next.

1. **Is there a medical purpose?** If the software's intended use is diagnosis, treatment, prevention, monitoring, prediction, or mitigation of a disease or condition, you are likely in device territory. General wellness ("track your steps") and pure administration ("schedule appointments") are not.
2. **Does it fall in a Cures Act exclusion?** Check the CDS criteria and the mobile-app enforcement-discretion policy. The CDS exclusion turns largely on whether a clinician can independently review the basis for the recommendation. Software that drives a time-critical decision the clinician cannot meaningfully second-guess (an automated alert that triggers a stroke pathway) is usually *not* excluded.
3. **Is it standalone or embedded?** Standalone software meeting the device definition is SaMD. Software that is a functional part of a hardware device is SiMD and rides along with that device's classification.
4. **What jurisdictions are in play?** US (FD&C Act, FDA), EU (MDR Rule 11, Notified Body), and others each classify independently. A product can be unregulated in one market and Class IIa in another.
5. **Where does the output land?** If a SaMD result feeds a GxP record (a clinical trial endpoint, a batch decision, a pharmacovigilance signal), the data integrity regime attaches downstream even though IEC 62304 governed the code. Hold this thought; it returns at the end.

Document the answer to each step with a rationale. The "is it a device" determination is itself an inspectable artifact, and a wrong answer here invalidates everything built on top of it.

## IEC 62304: the spine of medical device software

IEC 62304, "Medical device software, Software life cycle processes," is the harmonized international standard that defines what a compliant software lifecycle looks like for medical devices. The standard was first published in 2006, with Amendment 1 issued in 2015 (the version most often cited is "IEC 62304:2006+AMD1:2015"). It is recognized by FDA as a consensus standard and is harmonized under the EU MDR. It applies both to SaMD and to software that is a component of a hardware device.

IEC 62304 does not tell you *how* to write software. It tells you which processes must exist, what they must produce, and how rigor scales with risk. The major process areas:

- **Software development process**, planning, requirements analysis, architectural design, detailed design, unit implementation and verification, integration and integration testing, system testing, and release.
- **Software maintenance process**, handling problem reports and modifications after release, with the same rigor as development.
- **Software risk management process**, interfacing with the device-level risk management of ISO 14971, focused on hazards arising from software failures.
- **Software configuration management process**, version control, change control, and the ability to reproduce any released build.
- **Software problem resolution process**, investigating, analyzing, and resolving anomalies, including trend analysis.

A useful mental model: IEC 62304 is to device software what 21 CFR Part 820 (Quality System Regulation, now harmonizing toward ISO 13485 under the Quality Management System Regulation, the QMSR, which FDA finalized in 2024 with a 2026 compliance date) is to the device overall. It is the software-specific expression of design controls. In fact, FDA's design control requirements in 21 CFR 820.30, design inputs, design outputs, design review, design verification, design validation, design transfer, design history file, map directly onto the IEC 62304 deliverables. An auditor will expect the software lifecycle artifacts to live inside, or be referenced by, the Design History File. Our article on [design controls for medical devices](/articles/design-controls-medical-devices) covers that wrapper in detail, and the [medical device quality system under QMSR](/articles/medical-device-quality-system-qmsr) covers the system it sits inside.

### Roles and responsibilities across the lifecycle

IEC 62304 does not mandate titles, but every compliant project assigns these functions, and an inspector will ask who owns each one.

| Function | Typical owner | What they are accountable for |
|----------|---------------|-------------------------------|
| Software lifecycle planning | Software lead / SW project manager | The software development plan, tailoring of activities to safety class |
| Requirements | Systems engineer / product owner | Complete, testable, traceable software requirements including risk controls |
| Architecture and design | Software architect | Item decomposition, segregation arguments, SOUP placement |
| Implementation and unit verification | Developers | Coding standards, unit tests, defined coverage on risk-relevant units |
| Integration and system test | Test / V&V engineers | Independent verification that requirements are met |
| Software risk management | Risk owner (coordinates with system safety) | Linking software causes to ISO 14971 hazards, verifying controls |
| Configuration management | Build / release engineer | Reproducible builds, version control, controlled baselines |
| Problem resolution | QA / software lead | Anomaly handling, CAPA linkage, trend analysis |
| Release authorization | Quality / regulatory | Confirming the deliverable set is complete and known-anomaly review is done |

A practical point: independence of verification scales with class. For Class C, the person who wrote a unit should not be the sole signer on its verification; you want a second set of eyes on the safety-relevant test evidence. For Class A you can be lighter. Bake the independence expectation into the plan so it is not argued case by case.

## Safety classification: A, B, and C

The single most consequential decision in an IEC 62304 project is the **software safety classification**. The standard defines three classes based on the severity of the harm that could result from a software failure, assuming the software fails and external risk control measures do not prevent the resulting hazardous situation:

| Class | Possible consequence of failure | Rigor |
|-------|----------------------------------|-------|
| **A** | No injury or damage to health is possible | Minimum lifecycle process set |
| **B** | Non-serious injury is possible | Adds detailed design, unit-level verification expectations |
| **C** | Death or serious injury is possible | Full process set, most documentation |

The classification is done per software system, and the standard allows decomposition: a software system can be partitioned into items, and items into units, with the segregation argued and justified. If you can demonstrate effective segregation (independence such that a failure in a Class C item cannot affect a Class B or A item), you can classify items separately and apply the heavy Class C process set only where it is genuinely needed. This is one of the most important architectural levers in the whole standard, it directly determines documentation load and test depth.

A frequent misunderstanding: the safety class is assigned *after* considering risk control measures external to the software (hardware interlocks, independent monitoring, clinician confirmation steps). If a hardware watchdog independently prevents an overdose regardless of what the software does, the software contribution to that hazard may be reduced. But the standard is explicit that you cannot lower a software item's class by relying on *software* risk controls implemented in the same item, the segregation argument must hold up.

### A worked classification example

Consider a closed-loop glucose management app that reads a continuous glucose sensor and recommends or commands insulin dosing. Walk the classification:

- **The dosing recommendation engine.** A miscalculated dose could cause severe hypoglycemia, which can be fatal. Severity is "death or serious injury." This item is **Class C**.
- **The trend display and history charts.** A rendering bug here misleads but does not directly drive a dose, and a clinician or patient reviews trends with other information. Plausible worst case is a non-serious decision error. **Class B.**
- **The settings and account-management module.** Cosmetic and administrative. No credible path to injury. **Class A.**

Now suppose the dosing engine and the display run in the same process, share memory, and a crash in one can corrupt the other. You cannot honestly call the display Class B, because a fault in the Class C item can propagate. To keep the lighter classification you must *segregate*: separate processes or partitions, defined and verified interfaces, and an argument (often supported by architectural analysis and fault injection testing) that a failure in the dosing engine cannot affect the display, and vice versa. If you cannot make that argument stick, the safest items inherit the highest class of anything they are coupled to, and your documentation load grows accordingly.

Write the classification and its rationale into the architecture document, and re-derive it if the architecture changes. A late refactor that breaks a segregation boundary silently raises the safety class of the affected items.

What inspectors look for here: a documented, traceable rationale for the classification, consistency between the classification and the architecture, and evidence that the chosen process rigor actually matches the assigned class. A Class C labeling with Class A documentation depth is an immediate finding. So is a suspiciously convenient Class A classification for software that clearly touches dosing, diagnosis, or life support.

**Acceptance criteria for a defensible classification:** every software item has an assigned class; each assignment has a written severity rationale tied to a specific hazard; segregation claims are supported by architecture and verification evidence; and the process artifacts actually produced match the class table (a Class C item without a detailed design or unit verification is a gap, not a judgment call).

## The lifecycle, deliverable by deliverable

For a Class C system, the expected artifacts roughly track this sequence, each traceable to the next:

1. **Software development plan**, defines the lifecycle model (the standard is process-model agnostic; iterative, agile, and V-model approaches all comply if the required activities and traceability exist), tools, standards, and configuration management approach.
2. **Software requirements specification**, functional, performance, interface, security, and risk-control requirements. Every risk control measure that lands in software must appear here as a requirement, traceable back to the ISO 14971 risk analysis.
3. **Software architecture**, decomposition into items, interfaces, and the SOUP inventory. Required for Class B and C.
4. **Detailed design**, required for Class C; design of each software unit.
5. **Unit implementation and verification**, coding to defined standards, with unit verification. Acceptance criteria for unit verification must be established (e.g., defined coverage targets, boundary-value tests on risk-relevant units).
6. **Integration and integration testing**, verifying that items work together at their interfaces.
7. **System testing**, verifying the software requirements are met, including the risk control requirements.
8. **Software release**, with a record of known anomalies (residual defects), each evaluated for safety impact. You may release with known bugs; you may not release without having evaluated them.

### What each deliverable actually contains

The bullet list above tells you the sequence. Here is what good content looks like in the deliverables that inspectors scrutinize most.

**Software development plan.** Names the lifecycle model and how activities were tailored to the safety class (which Class C activities apply, what is justified out for lower-class items). Lists the development environment and tools, the coding standards, the configuration management approach, the verification strategy and independence rules, and how this software plan connects to the device-level design and risk plans. A common weakness is a plan that describes an idealized process the team never followed; the plan and the actual evidence must agree.

**Software requirements specification (SRS).** Each requirement is uniquely identified, atomic, and testable. Categories you should see: functional behavior, performance (latency, throughput, accuracy targets for an algorithm), interfaces (to hardware, to other software, to users), data definitions, security requirements, usability and alarm behavior, regulatory and labeling-driven requirements, and, critically, every software-implemented risk control measure carried down from the risk file. A risk control written into the SRS as "the system shall reject a commanded dose exceeding the configured maximum and alert the user" is what gets verified later; if it is not a requirement, it will not be tested, and the control is unverified.

**Software architecture.** Shows the decomposition into items, the interfaces between them, the segregation boundaries that justify any mixed-class design, and where each SOUP component sits. For an AI product, the architecture also has to show where the model, the preprocessing, the inference runtime, and the postprocessing live, because that is where most of the SOUP and most of the failure modes are.

**Detailed design (Class C).** Enough design of each unit that a competent engineer could implement and verify it, including algorithms, data structures, error handling, and the behavior at boundaries and on bad input.

**Unit, integration, and system test records.** Each test traces to the requirement or design element it verifies, states a pass/fail acceptance criterion, and carries an execution record (who, when, environment, result, any deviation). Risk-control requirements get explicit, often negative, tests ("inject an out-of-range value and confirm the safety reject fires").

**Known-anomaly / residual-defect list at release.** Every open defect at the time of release is listed with a safety evaluation: does this anomaly, in any reachable state, lead to a hazardous situation? If yes, it is fixed or mitigated before release. If no, the rationale is documented. Releasing with a long list of unevaluated open defects is one of the cleaner ways to fail an audit.

### A traceability matrix you can copy

Traceability is the connective tissue: requirement → architecture → design → code → test, plus risk control → requirement → verification. A workable matrix looks like this:

| Req ID | Requirement (abbrev.) | Risk control? (Hazard ID) | Arch item | Design ref | Test ID(s) | Result |
|--------|-----------------------|---------------------------|-----------|-----------|------------|--------|
| SRS-014 | Reject commanded dose > configured max | Yes (HAZ-03 overdose) | ITEM-DOSE | DD-DOSE-7 | ST-031, ST-032 | Pass |
| SRS-021 | Display sensor signal-loss alarm within 30 s | Yes (HAZ-07 silent failure) | ITEM-ALARM | DD-ALARM-2 | ST-040 | Pass |
| SRS-055 | Compute 14-day glucose trend | No | ITEM-TREND | DD-TREND-4 | UT-110, IT-022 | Pass |

When FDA's guidance "Content of Premarket Submissions for Device Software Functions" (final, June 2023) asks for documentation, it is asking for evidence that this chain is intact and that the documentation level matches the software's risk. That guidance replaced the older "level of concern" framework with a "Basic" versus "Enhanced" documentation tier model, which broadly correlates with, but is not identical to, IEC 62304 safety class. The mapping is a judgment, not a lookup: do not assume Enhanced equals Class C automatically; justify the documentation tier on its own terms.

This is where a GAMP 5 practitioner feels both at home and disoriented. The V-model traceability is familiar; GAMP 5's "specify, verify, against risk" backbone is structurally the same idea. But GAMP 5 organizes around *categories of software* (Category 1 infrastructure, Category 3 non-configured COTS, Category 4 configured products, Category 5 custom applications) and scales validation effort by category and supplier assessment. IEC 62304 organizes around *safety class* and assumes you are the one writing custom software. A GAMP 5 Category 3 "use it as shipped" posture has no clean analogue when the shipped software is itself the medical device. For the CSV side of that comparison, see our [GAMP 5 CSV framework](/articles/gamp5-csv-framework) article and [user requirements and traceability](/articles/user-requirements-and-traceability).

## SOUP: Software of Unknown Provenance

**SOUP**, Software of Unknown Provenance (or Unknown Pedigree), is IEC 62304's term for any software item already developed and generally available, not developed for the purpose of being incorporated into the device, or software for which adequate records of the development process are not available. In practice: operating systems, third-party libraries, open-source components, runtime frameworks, the deep learning library under a neural network.

SOUP is where modern device software actually lives or dies. A contemporary SaMD product might be 5% original code and 95% SOUP, an OS, a web framework, container base images, numerical and machine-learning libraries. IEC 62304 does not forbid SOUP; it requires that you *manage* it. Specifically:

- Maintain a **SOUP inventory** identifying each component, its version, and where it sits in the architecture.
- Define the **functional and performance requirements** the SOUP must meet for its intended use in the device.
- Define the **hardware and software requirements** (the environment the SOUP needs).
- For Class B and C, evaluate **published anomaly lists** (known bugs) of the SOUP for any that could lead to a hazardous situation, and either mitigate them or justify why they are acceptable.

### A sample SOUP inventory row

A usable SOUP record has more than a name and version. This is the level of detail an assessor expects per component:

| Field | Example entry |
|-------|---------------|
| Component | Numerical computing library |
| Version (pinned) | 1.26.4 (exact, not "latest" or a range) |
| Purpose in device | Array math under the inference pipeline |
| Safety class of items it serves | C (used inside the dosing engine) |
| Required functional/perf characteristics | Deterministic results across supported platforms; documented numerical behavior |
| Required environment | Specified OS and runtime versions |
| Anomaly source | Project issue tracker + CVE/NVD feed |
| Known anomalies reviewed | Reviewed through release date; relevant items assessed, none reachable in our configuration |
| Update/patch decision | Patch evaluated under maintenance process; rollback path defined |

That last block, the ongoing anomaly and vulnerability review, is the operational heart of SOUP management today, and it merges with cybersecurity. The expected practice is to maintain a **Software Bill of Materials (SBOM)** enumerating every component and version, and to continuously monitor known-vulnerability databases (such as the U.S. National Vulnerability Database and the CVE feeds) for entries affecting those components. FDA's premarket cybersecurity guidance, "Cybersecurity in Medical Devices: Quality System Considerations and Content of Premarket Submissions" (final, September 2023), formalized the SBOM expectation, and Section 524B of the FD&C Act (added by the Consolidated Appropriations Act, 2023) gave FDA statutory authority over device cybersecurity, including an SBOM requirement for cyber devices. Our article on [device software cybersecurity for SaMD](/articles/device-software-cybersecurity-samd) covers the SBOM and vulnerability program in depth.

What inspectors and reviewers look for in SOUP:

- A complete inventory with pinned versions, "latest" is not a version, and a transitive-dependency list (the libraries your libraries pull in) is expected, not just top-level packages.
- Evidence that anomaly/vulnerability evaluation is *ongoing*, not a one-time snapshot at submission, with a defined cadence and a named owner.
- A defined process for evaluating and incorporating SOUP updates and security patches, because patching a library is a *modification* and triggers the maintenance process.
- Justification when a known vulnerability is left unpatched (for example, the vulnerable code path is unreachable in the device's configuration, or a compensating control blocks the attack).

**Common SOUP mistakes seen in audits:** an inventory that lists only direct dependencies and misses the transitive tree; pinning to a version range so the actual deployed build is non-deterministic; a one-time CVE scan at submission with no ongoing monitoring; and treating a "minor" library bump as a non-event when it is a modification that needs impact analysis and regression testing. Another recurring pattern is no SBOM at all for an older product, then a scramble to reconstruct one when a high-profile vulnerability lands.

For pharma readers: SOUP management is the closest IEC 62304 concept to a GAMP 5 supplier assessment, but it is more granular and more continuous. GAMP 5 asks you to assess the supplier and lean on their testing. IEC 62304 asks you to own the risk of every third-party component as installed in your device, indefinitely. See [software supplier assessment](/articles/software-supplier-assessment-csa) for the CSV-side analogue.

## Risk management: ISO 14971 is the parent, not IEC 62304

A common error is to treat IEC 62304 as the risk standard. It is not. The device risk standard is **ISO 14971**, "Medical devices, Application of risk management to medical devices" (current edition ISO 14971:2019). IEC 62304's risk process is a software-specific extension that feeds into, and draws from, the overarching ISO 14971 risk management process and its risk management file. Our [ISO 14971 risk management for devices](/articles/iso-14971-risk-management-devices) article covers the parent process; this section covers the software seam.

The chain works like this: ISO 14971 identifies hazards and hazardous situations at the device level. For each hazard with a software contribution, IEC 62304 requires you to trace the software cause, define risk control measures (often implemented as software requirements), verify those controls, and document residual risk. The technical report **IEC/TR 80002-1** provides guidance specifically on applying ISO 14971 to medical device software, and is worth knowing by name because it bridges the two standards explicitly.

Two analyses commonly appear: a software-level FMEA (failure modes and effects analysis) for systematic enumeration of failure modes, and a top-down fault-tree analysis for high-severity hazards. The acceptance criterion is not "no defects", software defects are systematic, not probabilistic, and ISO 14971 cautions against assigning meaningful failure-rate probabilities to software faults. The criterion is that every credible software failure leading to a hazardous situation has a verified control or a justified, documented residual risk that is acceptable in the overall benefit-risk determination.

### A worked software risk control example

Take the overdose hazard from the dosing app. The chain, end to end, reads:

> **Hazard (ISO 14971):** patient receives an insulin overdose. **Hazardous situation:** the system commands a dose larger than the configured safe maximum. **Software cause:** a calculation or input error produces an out-of-range dose value. **Risk control (software requirement SRS-014):** the system shall reject any commanded dose exceeding the configured maximum and raise an alarm. **Verification (ST-031, ST-032):** inject doses at, just below, and above the maximum; confirm rejection and alarm above the limit. **Residual risk:** the configured maximum itself is wrong; mitigated by clinician configuration controls and confirmation, residual risk documented as acceptable.

Notice the discipline: hazard, situation, cause, control, control-as-requirement, verification, residual risk. An auditor can walk that line in either direction. The frequent finding is a control that exists in the code but was never written as a requirement, so it was never formally verified and the trace is broken.

## The SaMD framework and IMDRF risk categorization

For standalone software, IMDRF built a dedicated risk framework that regulators worldwide reference. The key document, "Software as a Medical Device (SaMD): Possible Framework for Risk Categorization and Corresponding Considerations" (IMDRF, 2014), defines SaMD risk by two axes:

1. **Significance of the information** the SaMD provides to the healthcare decision: *treat or diagnose*, *drive clinical management*, or *inform clinical management*.
2. **State of the healthcare situation or condition**: *critical*, *serious*, or *non-serious*.

Crossing the two axes produces a four-level categorization, with Category IV the highest impact:

| Healthcare situation | Treat/diagnose | Drive management | Inform management |
|----------------------|----------------|------------------|-------------------|
| **Critical** | IV | III | II |
| **Serious** | III | II | I |
| **Non-serious** | II | I | I |

A SaMD that diagnoses a critical condition (Category IV), say, software that detects a large-vessel occlusion stroke and triages the patient, carries the highest expectations for clinical evidence and quality. Software that merely informs management of a non-serious condition (Category I) carries the least. This categorization is conceptually parallel to IEC 62304 safety class but operates at the clinical and intended-use level rather than the software-failure level; a serious SaMD product will typically also contain Class C software items. Keep the two straight in conversation: IMDRF category describes the clinical stakes of the output, IEC 62304 class describes the harm from a code failure. They correlate but are not the same axis, and an interviewer will test for that confusion.

IMDRF complemented this with documents on SaMD quality management system principles and on clinical evaluation, establishing that SaMD needs a defined **clinical evaluation** built on three pillars:

- **Valid clinical association:** the output is clinically meaningful for the condition. Is there a real, accepted link between what the software measures or predicts and the clinical condition? This is often supported by literature and existing evidence.
- **Analytical (technical) validation:** the software correctly and reliably processes input into output. For an algorithm, this is measured performance (sensitivity, specificity, AUC, error rates) on held-out, representative test data.
- **Clinical validation:** the validated output achieves the intended clinical purpose in the target population and use environment. Good lab performance does not prove clinical benefit; clinical validation closes that gap.

For an AI diagnostic, analytical validation is roughly your algorithm's measured performance on a locked test set; clinical validation is whether that performance translates to benefit in real clinical workflows. Confusing the two, claiming clinical validity from analytical numbers alone, is a classic evidence gap.

## AI/ML SaMD and predetermined change control

The hardest problem in modern device software is that machine-learning models *want to change*. A traditional device is locked: you validate version 1.0, ship it, and any modification triggers change control and possibly a new submission. But the value of an ML model often comes from retraining on new data. Forcing a full premarket cycle for every model update is unworkable and arguably worse for patients.

FDA's answer is the **Predetermined Change Control Plan (PCCP)**. The concept: at submission, the manufacturer specifies *in advance* the modifications it intends to make, *how* it will make and validate them, and the *boundaries* within which it will stay, so that changes within the plan can be implemented without a new marketing submission. Section 515C of the FD&C Act, added by the 2023 appropriations legislation, gave PCCPs explicit statutory standing. FDA finalized "Marketing Submission Recommendations for a Predetermined Change Control Plan for Artificial Intelligence-Enabled Device Software Functions" (final guidance, December 2024), which structures a PCCP into three parts:

- **Description of Modifications**, the specific, enumerated changes planned (for example, periodic retraining on newly acquired data, recalibration of decision thresholds, expansion to a new imaging device model or a new input source).
- **Modification Protocol**, the methods, data management practices, retraining procedures, performance evaluation, and acceptance criteria that govern each modification, including how the data used will be representative and free of relevant bias, and how the change will be verified before deployment.
- **Impact Assessment**, analysis of the benefits and risks of the planned modifications and how the protocol controls those risks, including version control, performance monitoring, and rollback.

### What a defensible PCCP modification actually specifies

A vague "we will retrain periodically" is not a PCCP. A usable Description of Modifications and Modification Protocol pins down each of these for a given planned change:

| Element | What good looks like |
|---------|----------------------|
| Trigger | What initiates the change (scheduled cadence, drift threshold crossed, new data volume reached) |
| Boundary | The envelope the change stays inside (no new indication, same input modality, performance not worse than baseline by a stated margin) |
| Data governance | Source, eligibility, labeling/reference-standard quality, train/test independence, representativeness and bias checks |
| Validation method | The exact tests and metrics run before deployment, and the locked test set used |
| Acceptance criteria | Numeric thresholds that must be met (for example, sensitivity not lower than the cleared baseline, no subgroup performance cliff) |
| Deployment and monitoring | How the change is released, how live performance is monitored, what triggers rollback |
| Rollback | The defined path back to the prior validated version |

Anything outside the authorized envelope still requires a new submission. This is genuinely novel regulatory territory and the closest thing to "pre-authorized continuous improvement." It pairs with **Good Machine Learning Practice (GMLP)**, ten guiding principles jointly published by FDA, Health Canada, and the UK's MHRA in 2021, covering data quality, training and test data independence, reference-standard quality, model design that suits the clinical use, human-AI team considerations, and monitoring of deployed performance.

The practical hazards an inspector probes here: training/test data leakage (the same patients or sites in both sets, inflating measured performance), dataset shift between development data and the deployed population, performance degradation over time, automation bias in the human-in-the-loop, and inadequate monitoring once the model is live. A PCCP that promises retraining but cannot demonstrate locked-down data governance, representative datasets, independent train/test splits, and a working performance-monitoring loop will not hold up. For the GxP-side treatment of ML model governance, see [GxP ML model lifecycle](/articles/gxp-ml-model-lifecycle) and [validating AI in GxP systems](/articles/validating-ai-gxp-systems).

## Maintenance, problem resolution, and change control after release

IEC 62304's maintenance process is not a footnote; for most products it is where the software spends most of its life. The standard requires the same rigor for post-release modifications as for original development, which means a change to a Class C item gets Class C treatment even years after launch.

The mechanics: a **problem report** comes in (a complaint, an internal defect, a reported vulnerability, a field issue). It is evaluated for safety impact, investigated, and resolved through the problem resolution process, which connects to the broader quality system through CAPA. A planned **modification** (a feature, a SOUP update, a model retrain inside a PCCP) goes through change control: impact analysis, requirement and design updates, implementation, regression and targeted verification, and a re-evaluation of risk. Configuration management makes the whole thing auditable by guaranteeing you can reproduce any released build and identify exactly what changed between versions.

A few decisions you have to make explicitly:

- **Does this change affect a risk control or a safety-relevant item?** If yes, the verification effort and the regulatory impact analysis scale up.
- **Does it cross a regulatory line?** A change can be a documented internal modification, or it can be significant enough to require a new or supplemental submission. For AI changes, the PCCP defines that boundary in advance; for everything else, a significance assessment decides.
- **What regression scope is justified?** Risk-based: full regression for changes touching safety items, targeted regression for isolated low-class changes, with the rationale recorded.

Common findings in this area: emergency patches deployed without the maintenance-process paper trail, SOUP updates treated as invisible, missing regression evidence after a "small" change, and a problem-resolution backlog that is never trended (the standard expects trend analysis of anomalies, not just one-by-one firefighting). The CSV analogue is our [change control for validated systems](/articles/change-control-validated-systems) article, and the discipline transfers cleanly.

## Where IEC 62304 and GAMP 5 actually meet

The two frameworks are not rivals; they govern adjacent territory and increasingly overlap. The meeting points:

**Shared spine.** Both are built on risk-based, traceable, specify-then-verify lifecycles. A practitioner fluent in one can read the other's documentation set. Requirements, design, verification, configuration management, and change control exist in both vocabularies.

**The combination-product and connected-system boundary.** A drug-device combination product (an autoinjector with embedded software, a connected inhaler) lives under both regimes. The device software follows IEC 62304 and design controls; the manufacturing and quality systems that produce and release it, and any pharma-side computerized systems that handle its data, follow Part 11 and GAMP 5. Drug delivery devices and digital companion apps are precisely where a pharma quality organization suddenly needs device-software literacy.

**Data integrity converges.** When SaMD output flows into a GxP record, a diagnostic result that informs a clinical trial endpoint, a digital biomarker captured in a study, the ALCOA+ data integrity expectations of the pharma world (attributable, legible, contemporaneous, original, accurate, plus complete, consistent, enduring, available) attach to that data. FDA's data integrity guidance and EU GMP Annex 11 govern the record once it enters the GxP domain, even though IEC 62304 governed the software that produced it. The audit trail, electronic signature, and Part 11 controls do not disappear because the upstream software was a device. See [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and the [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11) article for the record-side requirements.

**Validation is not the same word in each world.** This is the trap. In GAMP 5 and Part 11, "validation" means demonstrating fitness for intended use of a computerized system in its operating environment, owned by the user organization. In the device world, "software verification" and "design validation" are distinct regulatory terms with specific meanings under 820.30 and IEC 62304, owned by the manufacturer. When a pharma team and a device team both say "the software is validated," they may mean materially different things. Aligning that vocabulary early is the single most useful thing a cross-functional quality organization can do.

The practical takeaway for anyone straddling these worlds: identify, at the start of a project, *which* artifact you are building. If the software is the device, IEC 62304 and design controls drive the deliverables and GAMP 5 is, at most, a familiar mental scaffold. If the software supports a regulated pharma process, GAMP 5 and Part 11 govern and IEC 62304 is irrelevant. And if the software is the device but its output lands in a GxP record, increasingly the common case, you owe both, at their respective boundaries, and the seam between them is exactly where audits go looking.

## Common mistakes and inspection-finding patterns

Across IEC 62304 projects, the same gaps recur. Knowing them is half of passing an audit and most of passing an interview.

- **Convenient under-classification.** Software that clearly touches dosing, diagnosis, or life support carried as Class A or B to dodge documentation. The fix is an honest, hazard-driven classification with a written rationale.
- **Broken traceability.** Risk controls in the code that were never written as requirements, so they were never verified; or test records that do not link back to a requirement. The chain has to be walkable both directions.
- **Snapshot SOUP management.** A one-time CVE scan at submission, no transitive dependencies, version ranges instead of pinned versions, and no ongoing monitoring owner.
- **Process-document fiction.** A development plan describing a process the team did not follow, contradicted by the actual evidence. Inspectors compare the plan to reality.
- **Unevaluated known anomalies at release.** A pile of open defects shipped without a documented safety evaluation of each.
- **Maintenance shortcuts.** Field patches and SOUP updates deployed outside the maintenance process, missing impact analysis and regression evidence.
- **AI evidence gaps.** Claiming clinical validity from analytical performance alone; train/test leakage inflating measured performance; a PCCP with no real data governance or live monitoring behind it.
- **Vocabulary collisions.** Device and pharma teams using "validation" to mean different things on the same combination product, with no aligned definition.

## Interview questions and how to answer them

If you sit for a medical device software, SaMD, or digital health quality role, expect these. Short, correct, confident answers follow.

**"What is the difference between SaMD and SiMD?"** SaMD is standalone software that meets the medical device definition without being part of a hardware device. SiMD is software that is a functional component of a hardware device and is regulated as part of that device. The IMDRF "without being part of a hardware medical device" clause is the test.

**"How do IEC 62304 safety classes work, and how do you assign one?"** Three classes, A (no injury possible), B (non-serious injury possible), C (death or serious injury possible), assigned per software item based on the severity of harm from a software failure, assuming the software fails and external controls do not stop the hazard. You can decompose the system and classify items separately if you can demonstrate effective segregation; you cannot lower a class using a software control in the same item.

**"IEC 62304 versus ISO 14971, what is the relationship?"** ISO 14971 is the parent device-level risk standard. IEC 62304 is the software lifecycle standard whose risk process feeds into and draws from the ISO 14971 risk management file. IEC/TR 80002-1 bridges them. IEC 62304 is not itself the risk standard.

**"What is SOUP and how do you manage it?"** Software of Unknown Provenance: pre-existing, generally available software, or software without adequate development records, brought into the device. You manage it with a versioned inventory, defined functional/performance and environment requirements, ongoing evaluation of published anomalies and vulnerabilities (an SBOM plus CVE/NVD monitoring), and treating updates as modifications under the maintenance process.

**"How is IEC 62304 validation different from GAMP 5 validation?"** Different artifact and different owner. IEC 62304 plus design controls govern when the software *is* the device, owned by the manufacturer, with verification and design validation as defined terms. GAMP 5 and Part 11 govern when the software *supports a regulated process*, owned by the user organization, where "validation" means fitness for intended use in the operating environment.

**"Explain the IMDRF SaMD risk categories."** Two axes, significance of the information (treat/diagnose, drive, inform) and state of the condition (critical, serious, non-serious), crossing into Categories I-IV, IV the highest impact. It rates the clinical stakes of the output, not the harm from a code failure, so it correlates with but is distinct from IEC 62304 class.

**"What is a PCCP and why does it matter for AI devices?"** A Predetermined Change Control Plan lets a manufacturer pre-authorize specific model changes, the methods to make and validate them, and the boundaries to stay inside, so changes within the envelope avoid a new submission. It has statutory standing under FD&C Act Section 515C, and FDA's December 2024 final guidance structures it into Description of Modifications, Modification Protocol, and Impact Assessment. It pairs with the GMLP principles.

**"A SaMD outputs a result that becomes a clinical trial endpoint. What governs the data?"** IEC 62304 governed the software, but once the result enters the GxP record it carries ALCOA+ data integrity expectations and Part 11 / Annex 11 controls (audit trail, electronic signatures, true copies). You owe both regimes at their respective boundaries.

## Practical tips

- Decide and document the "is it a device, and what governs it" question first, with a rationale. Everything downstream depends on it.
- Classify by hazard, write the rationale into the architecture, and re-derive the classification whenever the architecture changes. A refactor can silently raise a class.
- Use segregation deliberately. It is the main lever for keeping Class C documentation effort confined to the items that truly need it.
- Build the traceability matrix as you go, not at the end. Retrofitting trace links across requirements, design, code, and tests after the fact is painful and error-prone.
- Treat the SBOM and vulnerability monitoring as a living process with a named owner and a cadence, not a submission artifact.
- For AI products, lock the test set, prove train/test independence, and stand up live performance monitoring before you write the PCCP, not after.
- On combination products and connected systems, get the device team and the pharma quality team to agree on what "validated" means, in writing, at kickoff.

For adjacent reading, see [design controls for medical devices](/articles/design-controls-medical-devices), [ISO 14971 risk management for devices](/articles/iso-14971-risk-management-devices), [device software cybersecurity for SaMD](/articles/device-software-cybersecurity-samd), [the GAMP 5 CSV framework](/articles/gamp5-csv-framework), [EU MDR and IVDR overview](/articles/eu-mdr-ivdr-overview), [device submission pathways (510(k) and PMA)](/articles/device-submission-pathways-510k-pma), and [GxP ML model lifecycle](/articles/gxp-ml-model-lifecycle).
