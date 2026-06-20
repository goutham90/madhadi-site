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

## When is software a medical device?

The threshold question is jurisdictional and definitional, not technical. In the United States, the definition of a device sits in Section 201(h) of the Federal Food, Drug, and Cosmetic Act: an instrument, apparatus, or *contrivance* intended for diagnosis, cure, mitigation, treatment, or prevention of disease, or intended to affect structure or function of the body, that does not achieve its primary purpose through chemical action or metabolism. Software can satisfy this on its own.

The 21st Century Cures Act of 2016 amended the FD&C Act (adding section 520(o)) to carve out several categories of software that are *not* devices, administrative support of a healthcare facility, general wellness, electronic health record functions, and certain clinical decision support that merely provides recommendations a clinician can independently review. FDA's guidance "Clinical Decision Support Software" (final, September 2022) explains how the agency reads the CDS exclusion, and the "Policy for Device Software Functions and Mobile Medical Applications" guidance describes which mobile and software functions FDA actively regulates versus exercises enforcement discretion over.

Internationally, the International Medical Device Regulators Forum (IMDRF) coined the term **Software as a Medical Device (SaMD)**: "software intended to be used for one or more medical purposes that perform these purposes without being part of a hardware medical device." The "without being part of" clause is the key distinction. Software embedded in an infusion pump is *Software in a Medical Device* (sometimes abbreviated SiMD), governed as a component of that device. Standalone software, a radiology AI running in the cloud, an app on a clinician's phone, is SaMD.

In the EU, the Medical Device Regulation (Regulation (EU) 2017/745, the MDR) treats software as a device in its own right, and MDR Rule 11 classifies most diagnostic and therapeutic software into Class IIa or higher, which pulls in Notified Body oversight. The MDR replaced the older Medical Device Directive and tightened software classification substantially.

This is the first hard fork from the pharma CSV mindset. In GAMP 5, you are validating a *computerized system that supports a regulated process*, a LIMS, an electronic batch record, a chromatography data system. The drug is the product; the software is infrastructure. In the device world, the software can be the product. Validation is not the end goal; *demonstrating the device is safe and effective* is the goal, and the software lifecycle is one input to that demonstration.

## IEC 62304: the spine of medical device software

IEC 62304, "Medical device software, Software life cycle processes," is the harmonized international standard that defines what a compliant software lifecycle looks like for medical devices. It is recognized by FDA as a consensus standard and is harmonized under the EU MDR. It applies both to SaMD and to software that is a component of a hardware device.

IEC 62304 does not tell you *how* to write software. It tells you which processes must exist, what they must produce, and how rigor scales with risk. The major process areas:

- **Software development process**, planning, requirements analysis, architectural design, detailed design, unit implementation and verification, integration and integration testing, system testing, and release.
- **Software maintenance process**, handling problem reports and modifications after release, with the same rigor as development.
- **Software risk management process**, interfacing with the device-level risk management of ISO 14971, focused on hazards arising from software failures.
- **Software configuration management process**, version control, change control, and the ability to reproduce any released build.
- **Software problem resolution process**, investigating, analyzing, and resolving anomalies, including trend analysis.

A useful mental model: IEC 62304 is to device software what 21 CFR Part 820 (Quality System Regulation, now harmonizing toward ISO 13485 under the Quality Management System Regulation) is to the device overall. It is the software-specific expression of design controls. In fact, FDA's design control requirements in 21 CFR 820.30, design inputs, design outputs, design review, design verification, design validation, design transfer, design history file, map directly onto the IEC 62304 deliverables. An auditor will expect the software lifecycle artifacts to live inside, or be referenced by, the Design History File.

## Safety classification: A, B, and C

The single most consequential decision in an IEC 62304 project is the **software safety classification**. The standard defines three classes based on the severity of the harm that could result from a software failure, assuming the software fails and external risk control measures do not prevent the resulting hazardous situation:

| Class | Possible consequence of failure | Rigor |
|-------|----------------------------------|-------|
| **A** | No injury or damage to health is possible | Minimum lifecycle process set |
| **B** | Non-serious injury is possible | Adds detailed design, unit-level verification expectations |
| **C** | Death or serious injury is possible | Full process set, most documentation |

The classification is done per software system, and the standard allows decomposition: a software system can be partitioned into items, and items into units, with the segregation argued and justified. If you can demonstrate effective segregation (independence such that a failure in a Class C item cannot affect a Class B or A item), you can classify items separately and apply the heavy Class C process set only where it is genuinely needed. This is one of the most important architectural levers in the whole standard, it directly determines documentation load and test depth.

A frequent misunderstanding: the safety class is assigned *after* considering risk control measures external to the software (hardware interlocks, independent monitoring, clinician confirmation steps). If a hardware watchdog independently prevents an overdose regardless of what the software does, the software contribution to that hazard may be reduced. But the standard is explicit that you cannot lower a software item's class by relying on *software* risk controls implemented in the same item, the segregation argument must hold up.

What inspectors look for here: a documented, traceable rationale for the classification, consistency between the classification and the architecture, and evidence that the chosen process rigor actually matches the assigned class. A Class C labeling with Class A documentation depth is an immediate finding. So is a suspiciously convenient Class A classification for software that clearly touches dosing, diagnosis, or life support.

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

Traceability is the connective tissue: requirement → architecture → design → code → test, plus risk control → requirement → verification. When FDA's guidance "Content of Premarket Submissions for Device Software Functions" (final, June 2023) asks for documentation, it is asking for evidence that this chain is intact and that the documentation level matches the software's risk. That guidance replaced the older "level of concern" framework with a "Basic" versus "Enhanced" documentation tier model, which broadly correlates with, but is not identical to, IEC 62304 safety class.

This is where a GAMP 5 practitioner feels both at home and disoriented. The V-model traceability is familiar; GAMP 5's "specify, verify, against risk" backbone is structurally the same idea. But GAMP 5 organizes around *categories of software* (Category 1 infrastructure, Category 3 non-configured COTS, Category 4 configured products, Category 5 custom applications) and scales validation effort by category and supplier assessment. IEC 62304 organizes around *safety class* and assumes you are the one writing custom software. A GAMP 5 Category 3 "use it as shipped" posture has no clean analogue when the shipped software is itself the medical device.

## SOUP: Software of Unknown Provenance

**SOUP**, Software of Unknown Provenance (or Unknown Pedigree), is IEC 62304's term for any software item already developed and generally available, not developed for the purpose of being incorporated into the device, or software for which adequate records of the development process are not available. In practice: operating systems, third-party libraries, open-source components, runtime frameworks, the deep learning library under a neural network.

SOUP is where modern device software actually lives or dies. A contemporary SaMD product might be 5% original code and 95% SOUP, Python, TensorFlow or PyTorch, NumPy, an OS, a web framework, container base images. IEC 62304 does not forbid SOUP; it requires that you *manage* it. Specifically:

- Maintain a **SOUP inventory** identifying each component, its version, and where it sits in the architecture.
- Define the **functional and performance requirements** the SOUP must meet for its intended use in the device.
- Define the **hardware and software requirements** (the environment the SOUP needs).
- For Class B and C, evaluate **published anomaly lists** (known bugs) of the SOUP for any that could lead to a hazardous situation, and either mitigate them or justify why they are acceptable.

That last point is the operational heart of SOUP management today, and it merges with cybersecurity. The expected practice is to maintain a **Software Bill of Materials (SBOM)** enumerating every component and version, and to continuously monitor known-vulnerability databases (such as the U.S. National Vulnerability Database / CVE feeds) for entries affecting those components. FDA's premarket cybersecurity guidance, "Cybersecurity in Medical Devices: Quality System Considerations and Content of Premarket Submissions" (final, September 2023), formalized the SBOM expectation, and Section 524B of the FD&C Act (added by the Consolidated Appropriations Act, 2023) gave FDA statutory authority over device cybersecurity, including an SBOM requirement for cyber devices.

What inspectors and reviewers look for in SOUP:

- A complete inventory with pinned versions, "latest" is not a version.
- Evidence that anomaly/vulnerability evaluation is *ongoing*, not a one-time snapshot at submission.
- A defined process for evaluating and incorporating SOUP updates and security patches, because patching a library is a *modification* and triggers the maintenance process.
- Justification when a known vulnerability is left unpatched (e.g., the vulnerable code path is unreachable in the device's configuration).

For pharma readers: SOUP management is the closest IEC 62304 concept to a GAMP 5 supplier assessment, but it is more granular and more continuous. GAMP 5 asks you to assess the supplier and lean on their testing. IEC 62304 asks you to own the risk of every third-party component as installed in your device, indefinitely.

## Risk management: ISO 14971 is the parent, not IEC 62304

A common error is to treat IEC 62304 as the risk standard. It is not. The device risk standard is **ISO 14971**, "Application of risk management to medical devices." IEC 62304's risk process is a software-specific extension that feeds into, and draws from, the overarching ISO 14971 risk management process and its risk management file.

The chain works like this: ISO 14971 identifies hazards and hazardous situations at the device level. For each hazard with a software contribution, IEC 62304 requires you to trace the software cause, define risk control measures (often implemented as software requirements), verify those controls, and document residual risk. The technical report **IEC/TR 80002-1** provides guidance specifically on applying ISO 14971 to medical device software, and is worth knowing by name because it bridges the two standards explicitly.

Two analyses commonly appear: a software-level FMEA (failure modes and effects) for systematic enumeration of failure modes, and a top-down fault-tree analysis for high-severity hazards. The acceptance criterion is not "no defects", software defects are systematic, not probabilistic, and ISO 14971 cautions against assigning meaningful probabilities to software faults. The criterion is that every credible software failure leading to a hazardous situation has a verified control or a justified, documented residual risk that is acceptable in the overall benefit-risk determination.

## The SaMD framework and IMDRF risk categorization

For standalone software, IMDRF built a dedicated risk framework that regulators worldwide reference. The key document, "Software as a Medical Device: Possible Framework for Risk Categorization and Corresponding Considerations" (IMDRF, 2014), defines SaMD risk by two axes:

1. **Significance of the information** the SaMD provides to the healthcare decision: *treat or diagnose*, *drive clinical management*, or *inform clinical management*.
2. **State of the healthcare situation or condition**: *critical*, *serious*, or *non-serious*.

Crossing the two axes produces a four-level categorization, with Category IV the highest impact:

| Healthcare situation | Treat/diagnose | Drive management | Inform management |
|----------------------|----------------|------------------|-------------------|
| **Critical** | IV | III | II |
| **Serious** | III | II | I |
| **Non-serious** | II | I | I |

A SaMD that diagnoses a critical condition (Category IV), say, software that detects a large-vessel occlusion stroke and triages the patient, carries the highest expectations for clinical evidence and quality. Software that merely informs management of a non-serious condition (Category I) carries the least. This categorization is conceptually parallel to IEC 62304 safety class but operates at the clinical/intended-use level rather than the software-failure level; a serious SaMD product will typically also contain Class C software items.

IMDRF complemented this with documents on SaMD quality management system principles and on clinical evaluation, establishing that SaMD needs a defined **clinical evaluation**: demonstrating a *valid clinical association* (the output is meaningful for the condition), *analytical validation* (the software correctly processes input to output), and *clinical validation* (the output achieves the intended clinical purpose in the target population). For an AI diagnostic, analytical validation is roughly your algorithm's measured performance on held-out test data; clinical validation is whether that performance translates to clinical benefit in real use.

## AI/ML SaMD and predetermined change control

The hardest problem in modern device software is that machine-learning models *want to change*. A traditional device is locked: you validate version 1.0, ship it, and any modification triggers change control and possibly a new submission. But the value of an ML model often comes from retraining on new data. Forcing a full premarket cycle for every model update is unworkable and arguably worse for patients.

FDA's answer is the **Predetermined Change Control Plan (PCCP)**. The concept: at submission, the manufacturer specifies *in advance* the modifications it intends to make, *how* it will make and validate them, and the *boundaries* within which it will stay, so that changes within the plan can be implemented without a new marketing submission. Section 515C of the FD&C Act, added by the 2023 appropriations legislation, gave PCCPs explicit statutory standing. FDA finalized "Marketing Submission Recommendations for a Predetermined Change Control Plan for Artificial Intelligence-Enabled Device Software Functions" (final guidance, December 2024), which structures a PCCP into three parts:

- **Description of Modifications**, the specific, enumerated changes planned (e.g., periodic retraining on newly acquired data, recalibration of thresholds, expansion to a new imaging device model).
- **Modification Protocol**, the methods, data management practices, retraining procedures, performance evaluation, and acceptance criteria that govern each modification, including how the data used will be representative and free of relevant bias.
- **Impact Assessment**, analysis of the benefits and risks of the planned modifications and how the protocol controls those risks, including version control and rollback.

The PCCP is the regulatory mechanism that lets a model evolve along a pre-authorized track. Anything outside the authorized envelope still requires a new submission. This is genuinely novel territory and the closest thing in regulation to "pre-approved continuous improvement." It pairs with FDA's broader Good Machine Learning Practice (GMLP), ten guiding principles jointly published by FDA, Health Canada, and the UK's MHRA in 2021, covering data quality, training/test independence, reference-standard quality, human-in-the-loop considerations, and monitoring of deployed performance.

The practical hazards an inspector probes here: training/test data leakage (the same patients or sites in both sets, inflating measured performance), dataset shift between development data and the deployed population, performance degradation over time, and inadequate monitoring once the model is live. A PCCP that promises retraining but cannot demonstrate locked-down data governance, representative datasets, and a working performance-monitoring loop will not hold up.

## Where IEC 62304 and GAMP 5 actually meet

The two frameworks are not rivals; they govern adjacent territory and increasingly overlap. The meeting points:

**Shared spine.** Both are built on risk-based, traceable, specify-then-verify lifecycles. A practitioner fluent in one can read the other's documentation set. Requirements, design, verification, configuration management, and change control exist in both vocabularies.

**The combination-product and connected-system boundary.** A drug-device combination product (an autoinjector with embedded software, a connected inhaler) lives under both regimes. The device software follows IEC 62304 and design controls; the manufacturing and quality systems that produce and release it, and any pharma-side computerized systems that handle its data, follow Part 11 and GAMP 5. Drug delivery devices and digital companion apps are precisely where a pharma quality organization suddenly needs device-software literacy.

**Data integrity converges.** When SaMD output flows into a GxP record, a diagnostic result that informs a clinical trial endpoint, a digital biomarker captured in a study, the ALCOA+ data integrity expectations of the pharma world (attributable, legible, contemporaneous, original, accurate, plus complete, consistent, enduring, available) attach to that data. FDA's data integrity guidance and EU GMP Annex 11 govern the record once it enters the GxP domain, even though IEC 62304 governed the software that produced it. The audit trail, electronic signature, and Part 11 controls do not disappear because the upstream software was a device.

**Validation is not the same word in each world.** This is the trap. In GAMP 5 / Part 11, "validation" means demonstrating fitness for intended use of a computerized system in its operating environment, owned by the user organization. In the device world, "software verification" and "design validation" are distinct regulatory terms with specific meanings under 820.30 and IEC 62304, owned by the manufacturer. When a pharma team and a device team both say "the software is validated," they may mean materially different things. Aligning that vocabulary early is the single most useful thing a cross-functional quality organization can do.

The practical takeaway for anyone straddling these worlds: identify, at the start of a project, *which* artifact you are building. If the software is the device, IEC 62304 and design controls drive the deliverables and GAMP 5 is, at most, a familiar mental scaffold. If the software supports a regulated pharma process, GAMP 5 and Part 11 govern and IEC 62304 is irrelevant. And if the software is the device but its output lands in a GxP record, increasingly the common case, you owe both, at their respective boundaries, and the seam between them is exactly where audits go looking.
