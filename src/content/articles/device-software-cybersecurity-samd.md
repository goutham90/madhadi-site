---
title: "Software as a Medical Device in Pharma and Combination Products: FDA Premarket Expectations, Cybersecurity, and the Product Lifecycle"
description: "How to build, document, and defend regulated software in a combination product or digital health context: FDA premarket expectations, premarket cybersecurity, and AI/ML change control. Covers software documentation level, V&V, threat modeling, and predetermined change control plans."
pubDate: 2026-06-20
tags: ["samd", "combination-products", "cybersecurity", "fda", "software-validation", "ai-ml", "iec-62304", "premarket"]
pillar: "csv-csa"
tier: "Advanced"
---

Software with a medical purpose gets regulated as a medical device, even when it sits inside a drug or biologic program. This matters for pharma, biotech, biologics, and cell and gene therapy companies more often than people expect: a prefilled pen or autoinjector with embedded dosing logic, a digital companion app that adjusts a regimen, an on-body delivery system for a biologic, or a connected device constituent of a combination product all carry software that FDA reviews under a device apparatus distinct from the drug or biologic application. If you came up through GMP and computerized system validation, the vocabulary overlaps (V&V, risk, traceability) but the artifacts, the submission expectations, and the lifecycle obligations are distinct.

This page walks through what FDA expects for this kind of software, how premarket cybersecurity has become a statutory requirement rather than a best practice, and how AI and machine learning models are handled through a predetermined change control plan. The companion to this page is [IEC 62304 software lifecycle](/articles/iec-62304-samd-software-lifecycle), which is the process standard that produces most of the evidence you will submit. Read that one for the engineering process. Read this one for the regulatory deliverables, the security expectations, and the lifecycle obligations that sit on top of that process.

---

## Scope: when software is a device, and what kind

Before any V&V or submission work, you have to classify what you are building. Three categories matter.

**Software in a Medical Device (SiMD).** Firmware or application software that is a component of a physical device, for example the dosing and occlusion logic in an on-body delivery system for a biologic, or the embedded control software in a connected autoinjector that is the device constituent of a combination product. The device is regulated; the software rides along as part of it.

**Software as a Medical Device (SaMD).** Software that performs a medical purpose without being part of a hardware device. The International Medical Device Regulators Forum (IMDRF) defined this term in its 2013 document "Software as a Medical Device (SaMD): Key Definitions." A digital companion application that recommends a dose adjustment for a therapy, running on a patient's own phone, is SaMD. FDA adopted the IMDRF framing.

**Non-device software.** The 21st Century Cures Act of 2016 amended section 520(o) of the Federal Food, Drug, and Cosmetic Act to carve certain software functions out of the device definition: administrative support of a facility, maintaining or encouraging a healthy lifestyle, electronic patient records, transferring or displaying data, and certain clinical decision support that meets specific conditions. FDA's revised final guidance "Clinical Decision Support Software" (January 2026), which superseded the September 2022 version, explains the current CDS criteria. The 2026 revision added enforcement discretion where a CDS function produces a single clinically appropriate recommendation, rather than treating any specific output as automatically device-like, and it raised transparency and usability expectations. If your function meets all four CDS criteria (it does not acquire signals from a device, it displays medical information, it provides recommendations a provider can act on independently, and the user can review the basis for those recommendations), it is not a device.

> Getting this classification wrong is the most expensive mistake on the topic. If you treat a regulated function as non-device, you ship without clearance and face enforcement. If you treat a non-device wellness function as a device, you burden a product with submission work it never needed.

**Acceptance criteria for the classification step:** a written determination, signed by regulatory affairs, that names the software function, cites the relevant definition or exclusion, identifies the device classification (Class I, II, or III) and product code where a device constituent applies, and identifies the submission pathway. For a combination product, cross-link this to your overall [marketing application pathway](/articles/ind-nda-bla-pathways) analysis, since the device constituent and its software are reviewed alongside the drug or biologic.

---

## The premarket software documentation level

For decades FDA's expectations for software documentation were keyed to a "level of concern" (minor, moderate, major). That framework was replaced. The current guidance is "Content of Premarket Submissions for Device Software Functions" (final, June 2023), and it introduces two **Documentation Levels**: Basic and Enhanced.

### How to determine the Documentation Level

Two categories are hard triggers for Enhanced:

- The device is intended to test blood donations for transmissible agents, or is used to determine donor and recipient compatibility, or is a Blood Establishment Computer Software.
- A failure or latent flaw of the device software function could present a probable risk of death or serious injury, to a patient, user, or others, before risk mitigation.

Two further categories make Enhanced the default, but a sponsor may instead submit a rationale for Basic that FDA will consider during review:

- The device is a constituent part of a combination product (for example a drug delivery device with software).
- The device is a class III device.

If none apply, the device software function is Basic. The decisive clause is the pre-mitigation one: the probable risk of death or serious injury **before** mitigation. You assess the hazard of the software failing, not the residual risk after you have added safeguards. A practical consequence is that many higher risk devices land in Enhanced even when their mitigations are excellent, because the determination is made pre mitigation.

**Acceptance criteria:** the determination is documented with a rationale that maps to the Enhanced categories, and it is consistent with the risk analysis. If you call a combination-product or Class III software function Basic, document the rationale FDA will weigh. An inspector or reviewer will check that a device you called Basic does not have hazards in its risk file that read like "death or serious injury."

### What documents each level requires

The June 2023 guidance specifies the set of documents and which level needs which. The table below summarizes the core deliverables. Items marked "both" are expected at Basic and Enhanced; items marked "Enhanced" are added when the level is Enhanced.

| Deliverable | Basic | Enhanced | What it contains |
|---|---|---|---|
| Documentation Level Evaluation | yes | yes | The rationale for Basic vs Enhanced |
| Software Description | yes | yes | Features, intended use, operating environment, programming language |
| Risk Management File | yes | yes | Risk analysis, evaluation, controls, traceability (per ISO 14971) |
| Software Requirements Specification (SRS) | yes | yes | The full set of software requirements |
| System and software architecture diagram | yes (focus on Basic = high level) | yes (detailed) | How modules, layers, and external interfaces fit together |
| Software Design Specification (SDS) | no | yes | Design detail sufficient to implement and to evaluate against requirements |
| Software testing as part of V&V | yes (summary) | yes (unit, integration, system level detail) | Test plans, protocols, results, coverage |
| Revision history | yes | yes | Version history of the released software |
| Unresolved anomalies (bug list) | yes | yes | Open defects with impact assessment and justification why each is acceptable |

The single largest practical difference between Basic and Enhanced is the depth of testing evidence and the inclusion of the design specification. At Enhanced, you are expected to show unit and integration level testing, not only system level pass or fail.

### The unresolved anomalies list, in detail

Every release ships with open defects. FDA expects you to disclose them. The unresolved anomalies list contains, for each open issue: an identifier, a description, the problem it causes, the impact on safety and effectiveness, any operational workaround, and a rationale for why shipping with it open is acceptable. Reviewers read this list carefully. A defect described as "intermittent failure to deliver alarm" with a hand wave rationale will draw a deficiency letter. The skill here is honest impact assessment tied to your risk file, not minimizing the count.

---

## Software verification and validation

V&V is where most of the engineering evidence lives. The process standard is [IEC 62304](/articles/iec-62304-samd-software-lifecycle), "Medical device software, Software life cycle processes" (2006, plus Amendment 1 in 2015). FDA recognizes it as a consensus standard. Your V&V evidence is the output of running that lifecycle.

A few definitions, because interviewers test them:

- **Verification** answers "did we build the software right?" It checks that outputs of a development phase meet the inputs of that phase. Unit tests verify code against design; integration tests verify modules against the architecture.
- **Validation** answers "did we build the right software?" It checks that the finished device meets user needs and intended use in the intended environment. Human factors and clinical evidence feed validation.
- The general principles document is "General Principles of Software Validation" (final, 2002). It is old but still cited, and it establishes that software validation is "confirmation by examination and provision of objective evidence that software specifications conform to user needs and intended uses."

### IEC 62304 software safety classification

IEC 62304 assigns each software item a safety class that scales the required rigor. The three classes are graded by the worst harm the software could contribute to, per clause 4.3:

- **Class A:** the software cannot lead to any harm to a person's health.
- **Class B:** the software could contribute to a harm that stays short of serious.
- **Class C:** the software could contribute to a fatal outcome or a serious harm.

The classification is done after considering the system level risk controls external to the software (hardware interlocks, for example). Class C demands the fullest set of process activities: detailed design, unit verification, integration testing, and a documented architecture that supports segregation of safety critical items.

### V&V deliverables and acceptance criteria

| V&V artifact | What good looks like |
|---|---|
| Software development plan | Named lifecycle model, configuration management, problem resolution process, defined deliverables per phase |
| Requirements (SRS) | Each requirement is testable, uniquely identified, traceable up to a user need and down to a test |
| Traceability matrix | Bidirectional: user need to requirement to design to test to result, with no orphans |
| Unit test evidence | Code coverage reported; safety critical items exercised; pass/fail with reviewer sign off |
| Integration test evidence | Interfaces and data flows between modules exercised, including error paths |
| System test evidence | Requirements verified at the system level under the intended operating environment |
| Anomaly handling | Defects logged, triaged by risk, resolved or justified open |

The non negotiable is the **traceability matrix**. Reviewers and inspectors trace a sample: pick a user need, follow it to a requirement, to a design element, to a test case, to a passing result. A break anywhere is a finding. This is the same discipline as [user requirements and traceability](/articles/user-requirements-and-traceability) in computerized system validation, applied to device software.

A worked traceability fragment:

| User need | Requirement (SRS) | Design (SDS) | Test case | Result |
|---|---|---|---|---|
| UN-04 Clinician must be alerted to a low reading | SR-118 System shall raise an audible and visual alarm within 5 s of a reading below threshold | DS-31 Alarm manager polls reading buffer at 1 Hz, triggers AlarmService | TC-209 Inject sub threshold reading, measure latency to alarm | PASS, 1.8 s latency |

---

## Premarket cybersecurity: now a legal requirement

Cybersecurity moved from guidance to statute. Section 524B of the Federal Food, Drug, and Cosmetic Act, added by the Consolidated Appropriations Act of 2023, makes cybersecurity a condition of a premarket submission for a "cyber device." Effective dates and FDA's intent to "refuse to accept" submissions that lack the required cybersecurity information were communicated in 2023. A cyber device is, in summary, one that includes software, can connect to the internet, and contains technological characteristics that could be vulnerable to cybersecurity threats.

Under section 524B, a sponsor of a cyber device must:

- Submit a plan to monitor, identify, and address postmarket cybersecurity vulnerabilities and exploits, including coordinated vulnerability disclosure.
- Design, develop, and maintain processes and procedures to provide a reasonable assurance that the device and related systems are cybersecure, and make available postmarket updates and patches.
- Provide a software bill of materials (SBOM), including commercial, open source, and off the shelf software components.

FDA's expectations for the content are in the guidance "Cybersecurity in Medical Devices: Quality System Considerations and Content of Premarket Submissions" (final, September 2023). The earlier 2014 guidance is superseded.

### The Secure Product Development Framework

The 2023 guidance frames cybersecurity around a Secure Product Development Framework (SPDF): a set of processes that reduce the number and severity of vulnerabilities across the total product lifecycle. The core idea is that security is engineered in, not tested in at the end. The SPDF spans security risk management, security architecture, testing, and the transfer of security responsibilities to the customer through labeling.

### Threat modeling

Threat modeling is the analytical heart of the security file. You enumerate, in a structured way, how an attacker could compromise the device, what assets are at stake, and what controls reduce the risk. A common method is STRIDE (Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege), applied to each element of a data flow diagram. The output is a list of threats, each with a likelihood and impact, mapped to mitigations.

How to do it, in sequence:

1. Build a data flow diagram of the system, including trust boundaries (where data crosses from a less trusted to a more trusted zone).
2. For each element and each data flow, walk the threat categories and ask how each could be realized.
3. Record each credible threat with its affected asset and a preliminary risk rating.
4. Define a security control for each threat and re rate the residual risk.
5. Feed unresolved residual risk into the security risk assessment.

> A frequent reviewer comment: the threat model treats the network as the only attack surface and ignores physical access, the update mechanism, the debug interface, and third party components. A credible threat model covers all interfaces, including service ports and the supply chain.

### Security risk management vs safety risk management

Keep these separate but linked. Safety risk management under ISO 14971, the same risk-thinking covered in [quality risk management](/articles/quality-risk-management), is about harm to the patient from device malfunction. Security risk management uses a different scale, because the relevant axis is exploitability, not just probability of random failure. AAMI TIR57, "Principles for medical device security, Risk management," is the recognized reference for running security risk management alongside ISO 14971. The link between them is the case where a security exploit leads to patient harm: that crossover must be reflected in the safety risk file.

### The software bill of materials

The SBOM lists every software component, including open source and off the shelf libraries, with version and supplier. The common machine readable formats are SPDX and CycloneDX. The SBOM matters because most modern vulnerabilities arrive through third party components; when a new vulnerability is published against a widely used library, the SBOM is what lets you and the customer determine in minutes whether your device is affected. A worked SBOM entry:

| Component | Version | Supplier | Type | Known vulnerabilities at submission |
|---|---|---|---|---|
| TLS library | 3.1.2 | open source project | open source | None open; CVE history reviewed |
| RTOS kernel | 11.4 | commercial vendor | COTS | None open |
| JSON parser | 1.9.0 | open source project | open source | One low severity, mitigated by input size limit |

### Security testing

The premarket file should include evidence of security testing, not only design. Expected testing includes vulnerability scanning, software composition analysis (scanning the SBOM against vulnerability databases), static and dynamic analysis, and penetration testing by testers independent of the development team. Acceptance criteria: findings are triaged, remediated or justified, and the residual security risk is acceptable per your security risk assessment.

### Cybersecurity labeling and the transfer of responsibility

A device is not secure in isolation; it lives in a hospital network the manufacturer does not control. The submission and labeling must communicate to the operator what they must do: network requirements, the security configuration, how updates are delivered, what to do on end of support, and the cybersecurity related controls the operator is responsible for. This is the formal transfer of security responsibilities to the customer.

---

## AI and machine learning device software

Many SaMD products now contain a trained model. Two threads matter: how FDA reviews them today, and how a model that is meant to change over time can be authorized without a new submission for every update.

### The regulatory framing

FDA has used the term "Good Machine Learning Practice" (GMLP). In October 2021 FDA, Health Canada, and the UK's MHRA jointly published "Good Machine Learning Practice for Medical Device Development: Guiding Principles," ten principles spanning data management, training, evaluation, and human factors. GMLP is principles, not a checklist, but reviewers expect to see them reflected: representative training data, separation of training and test data, demonstrated generalization, and attention to how the model behaves under distribution shift.

A persistent challenge is the **locked vs adaptive** model distinction. A locked model gives the same output for the same input every time; it is straightforward to validate like any deterministic software. An adaptive (continuously learning) model can change its behavior in deployment, which collides with the premise that you cleared a specific, characterized device.

### The Predetermined Change Control Plan (PCCP)

FDA's answer is the Predetermined Change Control Plan. The FD&C Act was amended (section 515C, added by the Food and Drug Omnibus Reform Act of 2022) to authorize FDA to approve a PCCP, and FDA issued the guidance "Marketing Submission Recommendations for a Predetermined Change Control Plan for Artificial Intelligence-Enabled Device Software Functions" (final, December 2024). The final guidance dropped "machine learning" from the title in favor of "AI-enabled," broadening it from the April 2023 draft. A PCCP lets a manufacturer specify, in advance and as part of the authorized submission, certain modifications it intends to make to the device, along with how those modifications will be developed, validated, and implemented, so that making those changes does not require a new marketing submission.

A PCCP has three parts:

1. **Description of Modifications.** The specific changes you intend to make, stated concretely. For an ML model this is often retraining on new data, recalibrating a threshold, or expanding to a new input device, each bounded. Vague intentions ("improve accuracy") are not acceptable; the change must be specific enough to assess in advance.
2. **Modification Protocol.** The methods you will follow to develop, verify, validate, and implement each modification. This is where you commit to the data management practices, the re training procedure, the performance evaluation, the acceptance criteria, and the update process. It is the engineering contract that makes the changes safe.
3. **Impact Assessment.** The analysis of benefits and risks of the planned modifications, including how the modification protocol mitigates the risks, and the impact on the device as a whole.

How to build one, in sequence:

1. Decide which future changes are foreseeable and worth pre authorizing (retraining cadence, threshold tuning, added hardware compatibility).
2. For each, write the change boundary: what may change and what may not (for example, intended use may not change; the patient population may not expand beyond the cleared population).
3. Write the modification protocol: the exact data, training, test, and acceptance procedure, with quantitative acceptance criteria that the new version must meet before release.
4. Run the impact assessment against benefit and risk, including security and the existing risk file.
5. Submit the PCCP as part of the marketing submission. Once authorized, changes within the plan can be made under your quality system without a new submission; changes outside it cannot.

**Acceptance criteria for a PCCP:** the modifications are specific and bounded, the protocol has objective acceptance criteria and a defined verification method, the impact assessment closes the loop on every modification, and the whole plan stays within the cleared intended use. The classic failure is a protocol so broad it amounts to "we will retrain and decide later if it is good," which FDA will not authorize because it cannot be assessed in advance.

A worked PCCP modification entry:

| Planned change | Boundary (what may not change) | Validation method | Acceptance criteria |
|---|---|---|---|
| Annual retraining on new patient data | Intended use, patient population, output type unchanged | Locked hold out test set plus prospective subset; compare to current version | Sensitivity not lower than current minus 2 percent; specificity not lower than current minus 2 percent; no new subgroup performance gap exceeding 5 percent |
| Recalibrate decision threshold | Model architecture unchanged | Re evaluate on validation set | Operating point within pre stated ROC band; alarm burden within stated range |

For the broader engineering view of model lifecycle inside a quality system, see [GxP machine learning model lifecycle](/articles/gxp-ml-model-lifecycle) and [validating AI in GxP systems](/articles/validating-ai-gxp-systems), recognizing that those address GxP operations while this PCCP mechanism is specific to FDA device clearance.

---

## The Total Product Lifecycle: postmarket obligations

Clearance is the start, not the end. Software obligations continue through postmarket surveillance, including the [complaint handling](/articles/product-complaint-handling) process that captures field signals, and the quality system.

### Postmarket cybersecurity

The 524B postmarket plan you committed to must actually run. That means: monitoring vulnerability sources, a coordinated vulnerability disclosure process so security researchers can report findings, a triage process that assesses exploitability and patient impact, and a patch and update mechanism that can deploy fixes to fielded devices. FDA's "Postmarket Management of Cybersecurity in Medical Devices" (final, December 2016) distinguishes routine updates from those addressing uncontrolled risk that may require reporting and remediation timelines.

### Software changes and when a new submission is needed

Not every software change requires a new 510(k). FDA's guidance "Deciding When to Submit a 510(k) for a Software Change to an Existing Device" (final, October 2017) gives a logic flow: a change that could significantly affect safety or effectiveness, that introduces a new risk or modifies an existing risk that could result in significant harm, generally requires a new 510(k). Cosmetic or maintenance changes generally do not. The decision and its rationale must be documented under your quality system whether or not you submit, because an inspector will ask to see the change assessment for any release.

### The quality system anchor

All of this sits inside a quality system. For a combination product, the device constituent must meet device quality system expectations alongside the drug or biologic GMPs (21 CFR Part 4 streamlines how both sets apply). In the United States the device quality system has historically been 21 CFR Part 820, the Quality System Regulation; FDA finalized the Quality Management System Regulation (QMSR), which incorporates ISO 13485:2016 by reference, effective 2 February 2026. The discipline connects to your overall [pharmaceutical quality system](/articles/pharmaceutical-quality-system). Design controls (21 CFR 820.30, and ISO 13485 design and development) are where software requirements, design, V&V, and the design history file live, the same traceability thinking covered in [user requirements and traceability](/articles/user-requirements-and-traceability).

---

## Roles and responsibilities

| Role | Responsibility on device software |
|---|---|
| Regulatory Affairs | Device classification, submission pathway, Documentation Level determination, owning the submission narrative and FDA interactions |
| Software Engineering | Lifecycle execution per IEC 62304, architecture, code, unit and integration testing, anomaly resolution |
| Systems / V&V | Requirements management, traceability, system level verification, validation against intended use |
| Product Security | Threat modeling, SBOM, security risk management, security testing, postmarket vulnerability response |
| Risk Management / SME | ISO 14971 safety risk file, linkage of security risk to safety, hazard analysis |
| Human Factors | Use related risk, validation of the user interface against intended users and environment |
| Quality Assurance | Design control compliance, change control, document control, audit readiness, release approval |
| Data Science (AI/ML devices) | Data curation, training, performance evaluation, the PCCP modification protocol and impact assessment |
| Clinical / Medical | Intended use, clinical evidence supporting validation, postmarket clinical signals |

The recurring organizational failure is treating security as a separate team that arrives at the end. The SPDF only works if product security is embedded from requirements onward, with QA holding the gate at release.

---

## Common mistakes and inspection finding patterns

- **Classification ducked.** A function shipped as "wellness" or "decision support" that actually meets the device definition. The cure is a documented, signed determination against the specific exclusion criteria.
- **Documentation Level understated.** Calling a device Basic when its own risk file describes serious injury hazards pre mitigation. Reviewers cross check the level against the risk analysis.
- **Traceability gaps.** Requirements with no test, tests with no requirement, design elements that trace to nothing. This is the single most common software finding and the easiest to catch in an audit.
- **Unresolved anomalies minimized.** A thin bug list or rationales that do not engage the safety impact. Honest disclosure with risk linked justification is expected.
- **Threat model too narrow.** Only the network considered; physical ports, update path, and third party components ignored.
- **Missing or stale SBOM.** No SBOM, or one that does not match the shipped binary, or one never re checked against new vulnerabilities.
- **No coordinated vulnerability disclosure.** A 524B postmarket plan on paper with no working channel for researchers to report and no triage process behind it.
- **PCCP too vague.** A modification protocol without objective acceptance criteria, or change descriptions broad enough to alter intended use. FDA cannot authorize what it cannot assess in advance.
- **Change control bypassed.** Software updated in the field with no documented "do we need a new 510(k)" assessment. Even when no submission is needed, the assessment must exist.
- **Security and safety risk siloed.** A security exploit that leads to patient harm not reflected in the ISO 14971 file.

---

## Interview questions and how to answer them

**"What is the difference between SaMD and SiMD, and why does it matter?"**
SaMD performs a medical purpose without being part of a hardware device; SiMD is software that is a component of a physical device. It matters because the classification drives the submission pathway and which requirements apply. Mention the IMDRF SaMD definitions document and the Cures Act software exclusions.

**"How do you decide the premarket software Documentation Level?"**
Name the June 2023 guidance, the Basic vs Enhanced framework, and the four Enhanced triggers, emphasizing the pre mitigation death or serious injury clause. Note that the determination is made before risk controls, so many higher risk devices are Enhanced even with strong mitigations.

**"Walk me through verification versus validation for device software."**
Verification confirms outputs meet inputs at each phase, did we build it right. Validation confirms the device meets user needs and intended use, did we build the right thing. Reference General Principles of Software Validation (2002) and IEC 62304 for the process.

**"What is in a premarket cybersecurity submission now that it is a statutory requirement?"**
Cite section 524B and the September 2023 guidance. List the postmarket vulnerability plan with coordinated disclosure, the secure development processes with update and patch capability, and the SBOM. Mention the SPDF and threat modeling as the analytical backbone.

**"What is a Predetermined Change Control Plan and what are its parts?"**
Define it as the mechanism, authorized under section 515C and the December 2024 guidance, to pre authorize specific device changes. The three parts: Description of Modifications, Modification Protocol, and Impact Assessment. The key point is that changes must be specific and bounded with objective acceptance criteria, and must not alter the cleared intended use.

**"A new vulnerability is published in an open source library you use. What happens?"**
You consult the SBOM to determine if the device includes that component and version, assess exploitability and patient impact through your postmarket process, decide whether it is a controlled or uncontrolled risk, and if needed develop and deploy a patch on a timeline driven by the risk, with reporting if it meets the threshold in the 2016 postmarket guidance.

**"When does a software change require a new 510(k)?"**
Reference the October 2017 guidance logic: changes that could significantly affect safety or effectiveness, or that create or modify a risk that could cause significant harm, generally require a new 510(k); maintenance and cosmetic changes generally do not. Either way, the assessment is documented under the quality system.

**"How do you handle an adaptive ML model in a regulated device?"**
Explain locked vs adaptive, the validation difficulty an adaptive model creates, and that the PCCP is the path to authorize bounded, pre specified changes. Reference GMLP guiding principles for the development discipline.

---

## Practical tips

- Build the traceability matrix from day one and keep it live; retrofitting it before a submission is painful and usually leaves gaps.
- Make the Documentation Level determination early, because it sets the depth of testing evidence you must produce and that drives schedule.
- Keep the SBOM generated automatically from the build, not maintained by hand, so it matches the shipped binary.
- Treat the threat model as a living document updated each release, not a one time submission artifact.
- For ML devices, design the PCCP before clearance even if you are unsure you will use it; deciding the change boundaries up front forces clarity on intended use.
- Write unresolved anomaly rationales as if a reviewer who distrusts you will read them, because one will.

### Related reading

- [IEC 62304 software lifecycle](/articles/iec-62304-samd-software-lifecycle)
- [Quality risk management](/articles/quality-risk-management)
- [Marketing application pathways (IND, NDA, BLA)](/articles/ind-nda-bla-pathways)
- [Product complaint handling](/articles/product-complaint-handling)
- [Pharmaceutical quality system](/articles/pharmaceutical-quality-system)
- [GxP machine learning model lifecycle](/articles/gxp-ml-model-lifecycle)
- [Validating AI in GxP systems](/articles/validating-ai-gxp-systems)
- [Computer software assurance (FDA CSA)](/articles/computer-software-assurance-fda)
- [User requirements and traceability](/articles/user-requirements-and-traceability)
