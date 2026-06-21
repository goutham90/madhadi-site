---
title: "Medical Device Quality Systems: From 21 CFR 820 to the QMSR and ISO 13485"
description: "How FDA's 2026 Quality Management System Regulation folds ISO 13485:2016 into device law, and what it means for design controls, DHF/DMR/DHR records, CAPA, complaint handling, and combination-product makers."
pubDate: 2026-06-20
tags: ["medical-devices", "QMSR", "21 CFR 820", "ISO 13485", "design controls", "CAPA", "combination products", "quality systems"]
pillar: "medical-devices"
tier: "Intermediate"
---

For three decades, a U.S. device manufacturer's quality system lived under 21 CFR Part 820, the Quality System Regulation, or QSR. A company selling the same product in Europe, Canada, Japan, or Australia built a parallel system to ISO 13485, the international quality management standard for medical devices. The two overlap heavily but were never identical, so most manufacturers maintained mappings, ran dual audits, and explained to inspectors why a procedure satisfied both at once.

That ends in 2026. FDA published the Quality Management System Regulation (QMSR) on February 2, 2024, amending Part 820 to incorporate ISO 13485:2016 by reference, with a two-year transition that makes it the operative requirement on **February 2, 2026**. After that date, conformance to ISO 13485 plus a layer of FDA-specific additions *is* compliance with U.S. device quality law. This article covers what a device quality system contains, how each element is actually built and inspected, how it differs from pharmaceutical GMP, and the practical questions a combination-product or biotech team faces when a drug-led organization finds itself owning a device constituent.

## What a device quality system actually governs

A quality system is the set of procedures, records, and responsibilities that keep a device safe and effective across its life: design, sourcing, manufacture, distribution, complaint handling, and field correction. The QSR organized this into subparts: management responsibility, design controls, document and record controls, purchasing, production and process controls, corrective and preventive action, labeling, handling and storage, servicing, and statistical techniques. ISO 13485 covers the same ground but arranges it differently and uses the vocabulary of the broader ISO management-system family (clauses 4 through 8, the process approach, "documented information").

The key point for anyone coming from drugs: device regulation is risk-proportionate and design-centric in a way GMP is not. A Class I elastic bandage and a Class III implantable defibrillator fall under the same regulation, but the depth of design control, verification, validation, and clinical evidence scales with risk class. Pharmaceutical GMP under 21 CFR Parts 210 and 211 assumes you already know the product (it was defined in the marketing application) and concentrates on reproducing it identically, lot after lot. Device quality systems put most of their weight on getting the design right and proving it, before manufacturing reproducibility is even the question.

### Where device classification comes from, and why it sets the workload

Before any of the quality-system machinery applies at full depth, you need to know the device's class, because class drives how much design control, what premarket pathway, and what evidence you owe. Classification flows from intended use and indications for use, matched against the FDA classification regulations in 21 CFR Parts 862 through 892 (the device classification panels).

| Class | Risk | Typical controls | Premarket pathway (typical) | Design controls? |
|---|---|---|---|---|
| I | Low | General controls (registration, labeling, GMP) | Most exempt; some 510(k) | Mostly exempt, a named subset applies |
| II | Moderate | General + special controls (performance standards, guidance) | 510(k) premarket notification | Yes, full |
| III | High | General + premarket approval | PMA premarket approval | Yes, full |

If you are unsure of pathway, the companion articles on [device submission pathways (510(k) and PMA)](/articles/device-submission-pathways-510k-pma) and [EU MDR and IVDR](/articles/eu-mdr-ivdr-overview) walk through how the same device gets a U.S. clearance and a European CE mark. Get the class wrong and every downstream estimate (design-control depth, testing, timeline) is wrong, so this is the first decision, not an afterthought.

## The QSR-to-QMSR shift: what changed and what did not

The QMSR does not throw out the old expectations. ISO 13485:2016 and the former Part 820 address the same controls. What changed:

| Dimension | QSR (pre-2026) | QMSR (effective Feb 2, 2026) |
|---|---|---|
| Core text | FDA-drafted requirements in Part 820 | ISO 13485:2016 incorporated by reference |
| Terminology | FDA terms (DHF, DMR, DHR) | ISO terms (medical device file, documented information) layered with retained FDA definitions |
| Risk management | Implied, scattered | Explicit, via ISO 13485's pervasive risk requirement |
| FDA-specific adds | n/a | Records control, labeling and packaging controls, retained definitions, links to UDI and complaint/MDR rules |
| Inspection approach | QSIT-based | Aligned toward ISO 13485 structure; FDA developing a new inspection method |

A few things to internalize:

**ISO 13485:2016 is the spine.** The regulation incorporates that specific 2016 edition. You buy and read the standard from ISO or its U.S. distributor; FDA does not reprint its text. When a future ISO revision appears, it does *not* automatically become law. FDA would have to amend the regulation again.

**FDA kept the parts ISO does not cover.** ISO 13485 is silent on uniquely U.S. obligations, so the QMSR retains FDA-specific requirements. Records control and labeling and packaging controls get dedicated treatment, and FDA preserved cross-references so the quality system connects to the Unique Device Identification rule (21 CFR Part 830), Medical Device Reporting (21 CFR Part 803), and corrections and removals (21 CFR Part 806). Those reporting regulations were never inside Part 820 and are unaffected. See [Unique Device Identification (UDI)](/articles/unique-device-identification-udi) and [device postmarket surveillance and MDR](/articles/device-postmarket-surveillance-mdr).

**The familiar acronyms survive in substance.** ISO 13485 uses "medical device file" and "documented information" instead of Design History File and Device Master Record, but the underlying objects (a design record, a manufacturing recipe, a production traceability record) are the same things you always built. FDA retained the historic definitions so the terms remain meaningful in U.S. practice and on inspection.

**Inspections will look different.** FDA's longstanding inspection technique, the Quality System Inspection Technique (QSIT), was structured around the QSR's subsystems. Expect FDA to align its inspection approach with the clause structure of ISO 13485 over the transition. Notified-body audits in Europe already work this way, which is part of the harmonization payoff: one quality system, fewer translation layers.

If you already run a mature ISO 13485 system because you sell globally, the QMSR mostly confirms your existing structure as your U.S. baseline. If you run a U.S.-only QSR shop, you have a gap assessment and remediation to finish, chiefly making risk management explicit end-to-end and reorganizing documentation to the ISO clause structure.

### How to run the QSR-to-QMSR transition (step by step)

For a team that still runs a legacy QSR system, the transition is a project, not a memo. A workable sequence:

1. **Buy and read ISO 13485:2016.** You cannot map to a standard you have not read. Assign clause ownership across functions (R&D owns 7.3, quality owns 8.5, operations owns 7.5).
2. **Run a clause-by-clause gap assessment.** Map each existing Part 820 procedure to the ISO clause it now serves. Score each as compliant, partial, or gap. The usual gaps are explicit risk management woven into design and production, "medical device file" assembly, and the ISO "documented information" control conventions.
3. **Remediate the gaps as change controls.** Update the quality manual and document hierarchy first (it sets the structure), then procedures, then forms and templates. Use your normal [change control](/articles/change-control-validated-systems) process so the transition itself is traceable.
4. **Re-map records vocabulary.** Decide how DHF/DMR/DHR map to "medical device file" and controlled documented information in your SOPs, and keep the FDA definitions usable so inspectors and your own staff are not confused.
5. **Retrain and re-issue.** Update training curricula, retrain affected roles, and capture training records. An inspector will ask who is trained to the new procedures and check the records.
6. **Internal audit against the new structure.** Run an [internal audit](/articles/internal-audit-program) to the ISO clause structure before FDA does, and close findings.

**Acceptance criteria for "transition done":** every ISO 13485 clause maps to an owned, current procedure; risk management is referenced from design inputs, production controls, and CAPA; the quality manual reflects the ISO structure; training is complete with records; and a clause-structured internal audit closed with no open critical findings.

## Design controls: the heart of device quality

Design controls are the core of device quality and the biggest conceptual jump for a pharma practitioner. The former design-controls requirement (21 CFR 820.30), and the corresponding ISO 13485 clause 7.3, require a planned, documented design process for most Class II and Class III devices and a named subset of Class I. The logic is a closed loop:

- **Design and development planning.** Define the plan, the stages, the responsibilities, and the review points before you start.
- **Design inputs.** Translate user needs and intended use into engineering requirements that are unambiguous and verifiable. Vague inputs ("the catheter should be comfortable") are a classic finding; inputs must be testable.
- **Design outputs.** The drawings, specifications, code, and acceptance criteria that result. Outputs must reference the acceptance criteria essential to proper functioning.
- **Design review.** Formal, documented reviews at planned stages, including an independent reviewer with no direct responsibility for the stage under review.
- **Design verification.** Confirms outputs meet inputs. *Did we build the device right?* Bench testing, biocompatibility, electrical safety, dimensional analysis.
- **Design validation.** Confirms the device meets user needs and intended uses under actual or simulated use. *Did we build the right device?* Often involves clinical or human-factors evidence on production-equivalent units.
- **Design transfer.** Ensures the design is correctly translated into production specifications. This is where the design record becomes the manufacturing record.
- **Design changes.** Identified, documented, reviewed, verified or validated as appropriate, and approved before implementation.
- **Design History File (DHF).** The compiled record demonstrating the design was developed per the plan.

The two words that trip people up are **verification** and **validation**. Verification proves outputs satisfy inputs. Validation proves the finished device satisfies the user's real-world need. A device can pass every verification test and still fail validation if the inputs themselves were wrong. That is why human factors and usability engineering (aligned with IEC 62366-1) matter: use errors, not component failures, drive a large share of serious device incidents. A fuller treatment lives in [design controls for medical devices](/articles/design-controls-medical-devices).

### Worked example: a design input traced through to validation

The single most inspected idea in design controls is **traceability**: every user need must trace to a design input, every input to an output, every output to a verification, and every need to a validation. A trace matrix is how you prove it. A short example for an autoinjector delivery device:

| User need | Design input (testable) | Design output | Verification | Validation |
|---|---|---|---|---|
| Patient can self-inject a full dose | Deliverable volume 1.0 mL +/- 5% at 23 C | Spring force spec, needle ID spec, dose-stop drawing | Bench dose-accuracy test, n per sampling plan, all within tolerance | Human-factors study: untrained users deliver full dose without critical use error |
| Device usable by arthritic hands | Activation force <= 15 N | Trigger geometry, spring rate | Force-gauge test across lot | Usability study with representative users |
| No accidental needlestick | Passive needle guard locks after use | Guard latch design, drawing | Cycle test: 100% guard lock over n units | Simulated-use study, zero unintended exposures |

When an investigator asks "show me how this user need was satisfied," you hand over the row and the underlying reports. A trace matrix with a user need that dead-ends (no input, or an input with no verification) is a finding waiting to happen.

### Acceptance criteria for a defensible DHF

A DHF that survives inspection has: an approved design and development plan with defined stages and reviews; design inputs that are specific and verifiable, each linked to a user need; design outputs with acceptance criteria; dated minutes from each design review naming the independent reviewer; verification and validation reports with predefined acceptance criteria, executed on the right configuration (validation on production-equivalent units); a complete trace matrix; a documented design transfer; and design changes processed through change control. If any verification or validation was run on a prototype that does not represent production, expect a challenge.

### Software design controls

For software, design controls extend into the software development lifecycle. **IEC 62304** defines lifecycle processes for medical device software, scaled by a safety classification (Class A, B, or C by potential harm). FDA's premarket guidance on the content of premarket submissions for device software functions, and its 2023 final guidance on cybersecurity in medical devices, set expectations for software documentation and for securing connected devices: a Software Bill of Materials, threat modeling, and a plan to monitor and patch vulnerabilities across the device's supported life. See [IEC 62304 software lifecycle](/articles/iec-62304-samd-software-lifecycle) and [device software cybersecurity and SaMD](/articles/device-software-cybersecurity-samd).

## Risk management ties it together: ISO 14971

You cannot run a modern device quality system without risk management, and the QMSR makes that explicit by pulling ISO 13485's risk requirements into U.S. law. The reference standard is **ISO 14971:2019**, the application of risk management to medical devices. Its loop runs across the whole lifecycle:

1. **Risk analysis:** identify hazards, hazardous situations, and the sequences of events that lead to harm.
2. **Risk evaluation:** estimate probability and severity, compare against acceptability criteria.
3. **Risk control:** reduce risk by design first, then protective measures, then information for safety (the order matters; you do not warn your way out of a design hazard you could have engineered out).
4. **Residual risk evaluation** and overall benefit-risk determination.
5. **Production and post-production:** feed real-world data back in; complaints and field signals can change your risk picture.

Risk management is not a document you write once for the submission. It is a living file that design controls reference (risk drives design inputs), that production controls reference (risk drives which process parameters get validated and monitored), and that CAPA references (a confirmed complaint trend may invalidate a prior probability estimate). An investigator who pulls your risk management file and finds it frozen at the date of clearance, with no post-production input, has found a problem.

### A worked risk-table row

A risk file is built from rows, each tracing a hazard to harm to a control to verification of that control. One row for the autoinjector above:

| Hazard | Hazardous situation | Harm | Severity | Probability (pre-control) | Risk control | Probability (post-control) | Control verified by |
|---|---|---|---|---|---|---|---|
| Sharp needle | Needle exposed after injection | Needlestick, infection | Serious | Occasional | Passive needle guard (design) | Remote | Guard-lock cycle test, simulated-use study |

The control type matters. The guard is a design control (preferred), not a warning label. If your risk file controls a serious hazard only with a label, expect the inspector to ask why a design or protective measure was not feasible, and the ISO 14971 hierarchy expects that answer to be documented. The companion article [ISO 14971 risk management for devices](/articles/iso-14971-risk-management-devices) covers the full file structure; for the pharma equivalent see [quality risk management](/articles/quality-risk-management).

## CAPA: the subsystem inspectors open first

Corrective and Preventive Action is, in practice, the part of a device quality system everything else leans on, and historically the most-cited area in FDA device inspections. The former CAPA requirement (21 CFR 820.100), mirrored in ISO 13485 clauses 8.5.2 and 8.5.3, requires procedures that:

- **Analyze** quality data (complaints, returns, nonconformances, audit results, process monitoring) to detect existing and *potential* causes of nonconforming product.
- **Investigate** the cause of nonconformities with rigor proportional to risk.
- **Identify** the action needed to correct and prevent recurrence.
- **Verify or validate** that the action is effective and does not adversely affect the device.
- **Implement and record** the changes.
- **Disseminate** information to those responsible, and feed CAPA inputs into management review.

### How a CAPA actually runs, start to finish

The procedure is more useful than the principle. A defensible CAPA moves through defined gates:

1. **Trigger and intake.** A source (complaint trend, failed audit, nonconformance, internal signal) opens a record. Capture the problem statement in objective terms: what, where, when, how many, what the standard or spec required.
2. **Immediate correction and containment.** Stop the bleeding: quarantine affected product, assess whether shipped product is implicated (this is the trigger to consider a field action or recall), and decide on health-hazard evaluation if patient harm is plausible.
3. **Risk-based triage.** Decide the investigation depth from the risk. A cosmetic label smudge and a complaint alleging under-dose do not get the same effort. Document the triage rationale.
4. **Root cause analysis.** Use a structured method (5 Whys, fishbone, fault tree) and converge on a verifiable cause, not a guess. See [root cause analysis techniques](/articles/root-cause-analysis-techniques).
5. **Action plan.** Define the corrective action (fix the cause) and, where the analysis points to it, preventive action (the same cause in adjacent products or processes). Assign owners and due dates.
6. **Implementation.** Execute through change control; verify the change did not introduce a new problem.
7. **Effectiveness check.** Define the criterion *before* you close, and a check window (for example: zero recurrence of the defect mode over the next 90 days or next 10 lots, whichever is later). Close only when the evidence meets the criterion.
8. **Closure and escalation to management review.** Summarize, archive the evidence, and roll the metric into [management review](/articles/management-review-q10).

### Common failure modes inspectors know well

- **Containment mistaken for correction.** Sorting out the bad lot is a correction. Stopping the cause from producing more bad lots is corrective action. Closing a CAPA at containment is a top finding.
- **Root cause that is not one.** "Operator error" is almost never a root cause; it is a symptom of a training, procedure, or design gap. Investigations that name the human and stop there tend to produce repeat events. See [human error in deviations](/articles/human-error-in-deviations).
- **No effectiveness check.** Closing a CAPA without objective evidence that the action worked. Effectiveness verification needs a defined criterion and a defined check window. See [CAPA effectiveness verification](/articles/capa-effectiveness-verification).
- **Trend-blindness.** A complaint-handling system that processes each complaint in isolation and never aggregates to detect a signal. CAPA must connect to complaint trending.
- **Aging backlog.** A pile of open CAPAs past due date with no escalation tells an inspector the system is not resourced. Overdue and aging metrics belong in management review.

A strong CAPA system is risk-tiered: a minor cosmetic nonconformity does not get the same investigative weight as a complaint alleging patient harm. What it must always have is a closed loop with documented effectiveness. The general-purpose treatment is in [what is a CAPA](/articles/what-is-a-capa).

## Complaint handling and its link to MDR

Complaint handling (former 21 CFR 820.198, ISO 13485 clause 8.2.2) requires a formally designated unit, documented procedures, and timely, uniform review of every complaint. Each complaint must be evaluated to determine whether it is reportable to FDA under the Medical Device Reporting regulation (21 CFR Part 803). That MDR evaluation is the bright line investigators probe: a manufacturer must report deaths and serious injuries, and certain malfunctions that could cause them, within defined timeframes (generally 30 calendar days for individual reportable events, 5 working days where remedial action is needed to prevent unreasonable risk of substantial harm). The complaint file has to show the reportability decision and its rationale.

### The complaint-to-MDR decision, step by step

1. **Receive and log** every complaint, regardless of source (call center, sales, literature, social channels). A complaint is any communication alleging deficiencies in identity, quality, durability, reliability, safety, effectiveness, or performance of a device after release.
2. **Determine if it is a complaint** under your definition. Do not let intake staff dismiss reports informally; the decision must be documented.
3. **Investigate** to the extent warranted by risk. Some complaints require device return and failure analysis; capture why, if no investigation was done.
4. **Make the MDR decision.** Did a death or serious injury occur or could one have occurred? Did a device malfunction that would likely cause death or serious injury if it recurred? Record the decision and reasoning even when the answer is "not reportable."
5. **File on time** if reportable, and track the clock from awareness.
6. **Trend and feed CAPA.** Aggregate by failure mode; a threshold breach opens a CAPA and may update the risk file.

**Acceptance criteria:** every complaint has a documented reportability decision; reportable events were filed within the regulatory clock; non-reportable decisions carry a rationale an inspector can follow; and the trending output is visible in management review. The companion articles are [device postmarket surveillance and MDR](/articles/device-postmarket-surveillance-mdr) and the general [product complaint handling](/articles/product-complaint-handling).

Complaints, MDRs, returns, and service records are also CAPA inputs and risk-management inputs. The systems are not silos. An investigator reconstructs the chain: complaint received, evaluated, MDR decision, trend analysis, CAPA when a threshold is crossed, risk file updated. A break anywhere in that chain is what turns a single complaint into an enforcement problem. When a complaint signals shipped product is unsafe, the chain extends into [recall management and field actions](/articles/recall-management-field-actions) under 21 CFR Part 806.

## The device record set: DHF, DMR, DHR

Three records anchor device manufacturing, and the distinction is worth fixing in mind because pharma has no exact analog:

| Record | What it is | GMP analog (loose) |
|---|---|---|
| **DHF**, Design History File | The record proving the design was developed per the design plan | Development report / design-space rationale |
| **DMR**, Device Master Record | The recipe: specifications, production processes, QA procedures, labeling, packaging, everything needed to make the device | Master batch record plus specs |
| **DHR**, Device History Record | The as-built record for a specific unit or lot showing it was made per the DMR | Executed batch record |

### What goes in each, concretely

**DHF** holds the design plan, design inputs and outputs, design review minutes, verification and validation protocols and reports, the trace matrix, risk management file references, and the design transfer record. It is a history, assembled as the project runs, not written at the end.

**DMR** holds, at minimum: device specifications including drawings and component specs; production process specifications including methods, equipment, and environment; quality assurance procedures and acceptance criteria; packaging and labeling specifications including methods and processes; and installation, maintenance, and servicing procedures where applicable. The DMR is the controlled, current recipe; changes flow through change control.

**DHR** holds, for each unit or lot: the dates of manufacture; the quantity made and released; the acceptance records showing the device was made per the DMR; the primary identification label and labeling used; and any unique device identifier or control number. The DHR is the evidence that *this* lot was built right.

Under ISO 13485 vocabulary these map to the "medical device file" and the controlled documented information that defines and records production, but the three jobs (how we proved the design, how we make it, how we made this one) persist. Design transfer is the moment DHF content becomes DMR content, and a sloppy transfer (an input that never made it into a production specification) is a recurring source of nonconformity. For the underlying documentation discipline see [document control fundamentals](/articles/document-control-fundamentals), [good documentation practices](/articles/good-documentation-practices), and [batch record review](/articles/batch-record-review-gmp), whose principles carry directly to DHR review.

## Production and process controls, and process validation

Where a manufacturing process result cannot be fully verified by subsequent inspection and test, it **must be validated** (former 21 CFR 820.75, ISO 13485 clause 7.5.6). This is the device framing of process validation, and it differs in emphasis from the pharmaceutical lifecycle.

Sterilization is the standard example. You cannot inspect a finished sterile device to confirm sterility without destroying it, so the sterilization process is validated to a defined sterility assurance level and then monitored: ethylene oxide validation follows ISO 11135, radiation sterilization ISO 11137, moist heat ISO 17665. Welds, adhesive bonds, injection-molded dimensions buried in an assembly, and software builds are other "special processes" that get validated because end-of-line inspection cannot fully confirm them.

The discipline often runs as IQ/OQ/PQ (installation, operational, and performance qualification), establishing that equipment is installed correctly, operates across its specified range, and consistently produces conforming product under production conditions. Device process validation leans hard on statistical rationale for sampling and on identifying the worst-case conditions the process must tolerate.

### Deciding what needs validation

The decision is not "validate everything." It is risk- and verifiability-driven:

| Process | Can the result be fully verified by later inspection or test? | Treatment |
|---|---|---|
| Final assembly torque (with downstream torque audit) | Yes, sample and test | Verify by inspection (validation may still be chosen) |
| Sterilization | No (test is destructive) | Validate, then monitor |
| Plastic weld inside a sealed device | No (cannot inspect without destroying) | Validate (special process) |
| Visual cosmetic inspection | Yes (re-inspectable) | Verify |
| Software build | No (behavior not fully testable by inspection of output) | Validate |

For the broader validation toolkit shared with pharma, see [process validation lifecycle](/articles/process-validation-lifecycle), [process performance qualification (PPQ)](/articles/process-performance-qualification-ppq), [equipment qualification lifecycle](/articles/equipment-qualification-lifecycle), and [sterilization validation (moist heat)](/articles/sterilization-validation-moist-heat). Sampling plans and acceptance statistics draw on [statistics in quality (Cpk and control charts)](/articles/statistics-in-quality-cpk-control-charts).

## Purchasing and supplier controls

Device quality systems put real weight on supplier control, because much of a device's risk is purchased in. The former purchasing controls (21 CFR 820.50, ISO 13485 clause 7.4) require that you evaluate and select suppliers on the basis of their ability to meet requirements, define purchasing data clearly, and verify purchased product. A contract sterilizer, a contract manufacturer, a component molder, and a software supplier all carry quality obligations that you remain accountable for.

Practically: classify suppliers by the risk they introduce, qualify them proportionately (questionnaire for low risk, on-site audit for a critical sterilizer or contract manufacturer), put quality agreements in place that assign who does what, and monitor performance over time. The mechanics live in [supplier and vendor qualification](/articles/supplier-vendor-qualification), [conducting a supplier audit](/articles/conducting-a-supplier-audit), [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements), and, for software vendors, [software supplier assessment](/articles/software-supplier-assessment-csa). A supplier who changes a process without telling you, with no change-notification clause in the agreement, is a classic source of field failures.

## Roles and responsibilities

A device quality system only works when the loops have owners. Generic role mapping:

| Role | Owns |
|---|---|
| Top management | Quality policy and objectives, resources, management review decisions, and (under ISO 13485) appointing a management representative |
| Management representative | Ensuring quality-system processes are established and maintained, and reporting on performance to top management |
| R&D / design engineering | Design and development plan, inputs, outputs, design transfer, design changes, and the DHF |
| Quality / QA | Independent design review, verification and validation oversight, CAPA governance, complaint and MDR decisions, release of DHRs, supplier qualification, internal audit |
| Operations / manufacturing | DMR adherence, in-process controls, DHR completion, process validation execution |
| Regulatory affairs | Classification, premarket pathway, MDR filing, UDI, and field-action reporting |
| Human factors / usability | Use-related risk analysis and usability validation to IEC 62366-1 |
| Risk management owner | Maintaining the ISO 14971 file across the lifecycle, including post-production input |

The independence requirement in design review and in the complaint or CAPA decision is not bureaucratic. It is the control that stops the people under schedule pressure from grading their own homework. See [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) for the broader picture.

## How device QMS differs from pharma GMP

For a biotech or pharma practitioner moving into devices, or, increasingly, into combination products, the mental model has to shift on several axes:

- **Design controls have no GMP equivalent.** Drug GMP starts after the product is defined. Device quality systems own the design process itself, with formal inputs, outputs, verification, validation, and a design history file. This is the single largest conceptual gap.
- **Risk class is the dial.** Device requirements scale by class (I, II, III). Drug GMP applies fairly uniformly regardless of molecule; device controls are explicitly proportionate to harm potential.
- **Validation vocabulary diverges.** In devices, "verification" (outputs meet inputs) and "validation" (device meets user needs) are sharply distinct design-control terms. In drugs, "validation" usually means process or method validation. Same words, different referents, a frequent source of cross-functional confusion.
- **Risk management is a named, standard-driven discipline.** ISO 14971 gives devices a structured, auditable risk file. Pharma uses ICH Q9(R1) for quality risk management, but it is not woven into a design-control loop the way 14971 is.
- **The records differ.** DHF/DMR/DHR have no clean drug analog; the executed batch record is closest to a DHR, but nothing in GMP corresponds to a design history file.
- **Post-market surveillance is structurally central.** Complaint handling, MDR, CAPA, and risk-file update form a defined, inspected loop. Pharmacovigilance exists in drugs (see [pharmacovigilance and safety data integrity](/articles/pharmacovigilance-safety-data-integrity)), but the device version is tightly bound into the quality system itself.

## Combination products: where drug and device meet

A combination product (a prefilled syringe, an autoinjector, a drug-eluting stent, an on-body delivery system, a drug-device kit) is where a biotech team inherits device quality obligations whether or not it expected to. The governing framework is **21 CFR Part 4**, FDA's current good manufacturing practice requirements for combination products. Part 4 lets a manufacturer operate under one base system and demonstrate compliance with the other through specified provisions, rather than running two complete quality systems in parallel:

- A facility operating under a **drug GMP** system (Parts 210 and 211) must additionally demonstrate compliance with a defined set of device provisions, including **design controls, purchasing controls, CAPA, installation, and servicing**, drawn from the device quality system.
- A facility operating under a **device quality system** must additionally demonstrate compliance with specified drug GMP provisions, such as testing and release, stability, and expiration dating.

This "streamlined" approach looks lighter than it is, because the device elements it bolts onto a drug system are precisely the ones drug organizations are least equipped to run. Design controls are the recurring pain point: a drug-led team that has never maintained a DHF, never run formal design verification and validation on a delivery device, and never done human-factors validation to IEC 62366-1 now owns all of it for the device constituent. Inspectors examining a combination-product site routinely probe whether the device-constituent design controls and CAPA are real and integrated, or paperwork added after the fact.

The QMSR transition matters here too. Because Part 4 references the device quality system, the move to ISO 13485-based requirements flows through to the device-constituent obligations of combination-product makers. A drug organization adding a device constituent should plan its combination-product quality system against the QMSR baseline, not the legacy QSR text.

Practical guardrails for a biotech entering this space:

1. **Stand up genuine design controls for the device constituent early.** Do not retrofit a DHF after design freeze. Build inputs from user needs and intended use, hold real design reviews with an independent reviewer, and run verification and validation as planned activities.
2. **Run risk management to ISO 14971 across the constituent and the combined product**, and connect it to design inputs and to post-market signals. A delivery-system use error can harm a patient as surely as a formulation defect.
3. **Treat human factors as a validation activity, not a marketing study.** Use-related risk on autoinjectors and on-body systems is a leading cause of serious incidents; usability validation to IEC 62366-1 is expected, and FDA has dedicated human-factors guidance.
4. **Integrate complaint handling so device-attributed events are evaluated for MDR and fed into CAPA and the risk file.** A combination-product complaint that names the device must route through the device reportability logic.
5. **Map your base system honestly against Part 4** and document which constituent's provisions you satisfy through which procedures. The streamlined option is only a saving if the cross-references are real and inspectable.

## What inspectors look for

Across the QSR and the QMSR, the inspection logic is stable. An investigator follows threads from a defect or complaint backward through your system and judges whether the loops actually close. Does CAPA reach root cause and verify effectiveness, or stop at containment? Does the risk file ingest post-production data, or sit frozen at clearance? Are design inputs testable and traced to verification and validation? Is the DHR consistent with the DMR? Are complaints evaluated for MDR reportability with documented rationale? Do management reviews surface the quality data and drive decisions?

A system that documents loops but never closes them is the failure pattern, and it is the same pattern under ISO 13485 as it was under Part 820. That sameness is the point of harmonization: the structure changed, the question an inspector asks did not. The general inspection-readiness playbook is in [FDA inspection readiness](/articles/fda-inspection-readiness) and [managing a live inspection](/articles/managing-a-live-inspection); if you receive observations, see [483 and warning-letter response](/articles/483-warning-letter-response).

### Recurring finding patterns (generic)

- Design validation performed on prototypes rather than production-equivalent units.
- Design inputs that are not verifiable, with verification activities that therefore prove nothing.
- CAPA closed at containment, or with "operator error" as the named root cause and no systemic fix.
- Effectiveness checks missing or undefined at closure.
- Complaints not evaluated for MDR reportability, or non-reportable decisions with no rationale.
- A risk management file last touched on the clearance date, with no post-production input despite known field events.
- DHRs that do not reconcile to the DMR (a process step run that the DMR does not describe, or vice versa).
- Supplier changes that reached production with no change notification or re-qualification.

## Interview questions and how to answer them

If you are interviewing for a device or combination-product quality role, these come up repeatedly. Short, correct answers below.

**Q: What changed with the QMSR, and when is it effective?**
FDA amended 21 CFR Part 820 to incorporate ISO 13485:2016 by reference, published February 2, 2024, effective February 2, 2026. ISO 13485 becomes the spine, with FDA-specific additions retained for records control, labeling and packaging, and cross-links to UDI (Part 830), MDR (Part 803), and corrections and removals (Part 806). The controls are largely the same; the structure and vocabulary shift.

**Q: Verification versus validation. Define both.**
Verification confirms design outputs meet design inputs (did we build the device right). Validation confirms the finished device meets user needs and intended use under actual or simulated conditions (did we build the right device). A device can pass verification and still fail validation if the inputs were wrong.

**Q: Walk me through a CAPA.**
Trigger and intake with an objective problem statement, immediate correction and containment, risk-based triage of investigation depth, structured root cause analysis, an action plan separating corrective from preventive action, implementation through change control, a pre-defined effectiveness check with a criterion and a window, then closure and escalation to management review. The two killers are closing at containment and closing without an effectiveness check.

**Q: Why is "operator error" a weak root cause?**
Because it is usually a symptom of a training, procedure, or design gap. A real root cause is verifiable and points to a systemic fix that prevents recurrence; naming the person and stopping there tends to produce repeat events.

**Q: How do complaints connect to MDR and CAPA?**
Every complaint is logged, investigated to the extent risk warrants, and given a documented MDR reportability decision under Part 803. Reportable events are filed within the regulatory clock (generally 30 days, 5 working days for events needing remedial action). Complaints are also trended; a threshold breach opens a CAPA and may update the ISO 14971 risk file.

**Q: What are the DHF, DMR, and DHR, and how do they relate?**
DHF is the record that the design was developed per the plan. DMR is the recipe for making the device. DHR is the as-built record for a specific unit or lot showing it was made per the DMR. Design transfer is the point where DHF content becomes DMR content.

**Q: When must a process be validated?**
When its result cannot be fully verified by later inspection and test (sterilization, welds, sealed-in features, software builds). Otherwise it can be verified by inspection. Validation typically runs as IQ/OQ/PQ with statistical sampling and worst-case challenges.

**Q: A drug company is adding an autoinjector. What new obligations under Part 4?**
Operating under a drug GMP base system, they must additionally meet specified device provisions: design controls, purchasing controls, CAPA, installation, and servicing. Design controls and human-factors validation to IEC 62366-1 are the usual gaps, because GMP training never covered them.

**Q: What does ISO 14971's risk-control hierarchy require?**
Reduce risk by inherently safe design first, then protective measures, then information for safety. You document why a higher control was not feasible before relying on a lower one; you do not warn your way out of a hazard you could have engineered out.

## Practical tips

- Build the trace matrix from the start of design, not at submission time. Retrofitting traceability is slow and error-prone, and a dead-ended user need is an easy finding.
- Write design inputs you can actually test. If you cannot describe the verification before you finish the input, the input is not specific enough.
- Validate on production-equivalent units. Validation on prototypes is one of the most common and most damaging design-control findings.
- Define every CAPA effectiveness criterion before closure, with a measurable target and a check window. "Monitored and appears resolved" is not an effectiveness check.
- Keep the risk file alive. Schedule periodic review and route every complaint trend and field signal back into it.
- For a combination product, decide your Part 4 base system early and document the cross-references; do not discover at inspection that the streamlined mapping was never written down.
- Treat supplier change notification as a contractual must-have, not a nicety.

## Bottom line

The QMSR is less a new rulebook than a relabeling and tightening of one most global manufacturers already kept. ISO 13485:2016 becomes the U.S. baseline on February 2, 2026, with FDA-specific additions for records, labeling, UDI, MDR, and corrections-and-removals retained on top. Design controls with real traceability, risk management to ISO 14971 that stays alive, CAPA with genuine root cause and effectiveness checks, disciplined complaint handling that routes to MDR, clean DHF/DMR/DHR records, and proportionate supplier control remain the substance of a defensible device quality system. For drug and biotech teams, the obligation usually arrives through a combination product, where Part 4 hands them device design controls and post-market surveillance duties their GMP training never covered. Build those elements as genuine, integrated loops rather than a documentation layer added after design freeze, and the transition is a consolidation instead of a scramble.

*This article is a neutral summary based on public FDA regulations and guidance and on published ISO and IEC standards. It is not legal or regulatory advice; verify current regulatory text and effective dates against the Code of Federal Regulations and the official standards before acting.*
