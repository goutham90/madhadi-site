---
title: "Design Controls: Inputs, Outputs, Verification, Validation, and the Design History File"
description: "How the device design control waterfall actually works: inputs and outputs, design reviews, the verification versus validation split, traceability, and the Design History File. Built for the job and the interview."
pubDate: 2026-06-20
tags: ["design controls", "medical devices", "verification and validation", "design history file", "traceability", "qmsr", "21 cfr 820"]
pillar: "medical-devices"
tier: "Intermediate"
---

Design controls are the part of the device quality system where most products are won or lost on paper before a single unit ships. They force a team to write down what the device is supposed to do, prove it does that, prove it does the right thing for the user, and keep the evidence in one place. Inspectors love this area because the gaps are easy to see: a requirement with no test, a test with no requirement, a design review with no attendees, a change that never went back through verification. If you can read a traceability matrix and tell a clean story from user need to released design, you can run this process and you can pass the interview on it.

This article walks the full design control waterfall the way it is actually built and inspected. It uses US terminology as the spine because the US regulation is the most prescriptive and the most asked about, then maps it to the international standard so you can work either side of the Atlantic.

---

## The regulatory basis: where design controls come from

Two documents define the obligation, and they now point at the same place.

**21 CFR 820.30, Design Controls.** This is the section of the US Quality System Regulation that requires design controls for most Class II and Class III devices and a small set of Class I devices. It lists the required elements: design and development planning, design input, design output, design review, design verification, design validation, design transfer, design changes, and the Design History File. The text is short. The expectation behind it is large.

**ISO 13485:2016, Clause 7.3, Design and Development.** The international quality management system standard for medical devices. It covers the same lifecycle with slightly different vocabulary and a few extra explicit requirements, for example a design and development file and a clearer treatment of design transfer and of changes after release.

The convergence point matters for anyone working in 2026. In early 2024 the FDA published the **Quality Management System Regulation (QMSR), 21 CFR Part 820 as amended**, which incorporates ISO 13485:2016 by reference. The QMSR has a transition and becomes effective on **February 2, 2026**. After that date the standalone 820.30 design control text is largely replaced by reliance on ISO 13485 Clause 7.3 plus FDA-specific additions. In practice the engineering work does not change. The same inputs, outputs, reviews, verification, validation, transfer, and file are required. You should know both the old 820.30 element names (still how most people talk and how legacy DHFs are organized) and the ISO 13485 clause structure, because both will appear in audits and interviews during and after the transition.

The risk rationale is simple. A device that was never specified against real user needs, or that was built but never proven to meet its own specification, is a patient safety problem waiting for a field. Design controls are the documented chain of evidence that the finished design is safe and effective for its intended use. Risk management under **ISO 14971:2019** runs in parallel and feeds the design controls at every step. See [ISO 14971 risk management for devices](/articles/iso-14971-risk-management-devices) for that side of the house.

> 21 CFR 820.30(a): "Each manufacturer of any class III or class II device, and the class I devices listed in paragraph (a)(2) of this section, shall establish and maintain procedures to control the design of the device in order to ensure that specified design requirements are met."

---

## The waterfall, end to end

The standard mental model is a V or a waterfall. User needs go in at the top left, the design is decomposed into requirements and then a built design, and the right side of the V proves each level against its matching left-side level.

```
User needs ───────────────────────────────► Design validation
   │                                              ▲
   ▼                                              │
Design inputs (requirements) ──────────────► Design verification
   │                                              ▲
   ▼                                              │
Design outputs (drawings, code, specs) ───────────┘
```

Read it this way:

- **Design validation** confirms the device meets **user needs and intended use**. Are we building the right thing?
- **Design verification** confirms design outputs meet **design inputs**. Did we build the thing right?
- Both run against documented requirements, both produce records, and both feed the Design History File.

Design reviews sit at the transitions between phases as formal gates. Risk management threads through every box. Now the elements one at a time.

---

## Design and development planning

**What and why.** Required by 820.30(b) and ISO 13485 Clause 7.3.2. Before real design work starts you write a plan that describes the activities, the phases, who is responsible, and the interfaces between groups. The risk rationale: a device program touches engineering, software, quality, regulatory, clinical, manufacturing, and often external suppliers. Without a plan the design reviews get skipped, the responsibilities blur, and the DHF ends up with holes nobody noticed until an inspection.

**What goes in it.**

- Scope and a description of the device and intended use.
- Phases and gates (for example: concept, feasibility, design and development, verification and validation, design transfer, launch).
- Deliverables expected at each phase and the gate criteria to exit each phase.
- Roles and responsibilities, including who chairs design reviews and who approves outputs.
- Interfaces between functions and with suppliers, and how information passes between them.
- References to the risk management plan, the human factors / usability plan, the software development plan if applicable, and the verification and validation strategy.
- A schedule, kept as a living document.

**How to do it.** Draft the plan at the start of the program. Make it phase-gated so each gate has explicit entry and exit criteria. Keep it under change control and update it as the design evolves; 820.30(b) explicitly says the plan shall be reviewed, updated, and approved as the design evolves. Reference, do not duplicate, the subordinate plans (risk, software, usability) so you maintain one source of truth.

**Acceptance criteria.** The plan exists before design output is generated, names responsible parties, defines the interfaces, has documented gate criteria, is approved, and shows evidence of being updated as the design changed. A static plan dated only at kickoff and never touched again is a red flag to an inspector.

**Roles.** Program or project management owns the plan. R&D leads define the technical phases. Quality assures the plan meets the procedure. Regulatory confirms the submission pathway assumptions. See [project managing validation](/articles/project-managing-validation) for the gate-and-deliverable mechanics that apply here too.

---

## Design inputs

This is the element that decides whether the rest of the program is buildable. Required by 820.30(c) and ISO 13485 Clause 7.3.3.

**What and why.** Design inputs are the physical and performance requirements of the device used as the basis for the design. They are the engineering translation of user needs plus regulatory requirements, applicable standards, and the outputs of risk management. The whole downstream chain (outputs, verification, the DHF) is anchored to inputs. Weak inputs produce a design you cannot verify because there is nothing concrete to verify against.

A critical distinction that interviewers probe: **user needs are not design inputs.** User needs are what the user wants ("the infusion shall be easy to set up at the bedside"). Design inputs are the engineering requirements derived from those needs ("priming volume shall be no greater than 25 mL"; "setup shall be achievable in no more than 5 discrete steps"). Validation tests against user needs; verification tests against design inputs.

**What goes in it.** Good design inputs typically cover:

- Functional requirements (what the device does).
- Performance requirements (how well, with numbers and tolerances).
- Interface requirements (electrical, mechanical, software, user, network).
- Environmental and use-condition requirements (temperature, humidity, transport, reprocessing).
- Safety requirements derived from risk analysis, including risk control measures from ISO 14971.
- Regulatory and standards requirements (for example electrical safety to IEC 60601-1 for electrical medical equipment, biocompatibility per ISO 10993 for patient-contacting materials, software lifecycle per IEC 62304).
- Labeling, sterility, packaging, and shelf-life requirements.

**The number-one quality rule for inputs.** Every input must be **unambiguous, complete, non-conflicting, and verifiable.** "User friendly" is not a design input. "Setup shall be completed in 5 steps or fewer by a trained nurse, demonstrated by usability testing" is. If you cannot write a test for it, it is not yet an input.

**Worked example: from user need to input.**

| User need (validate against) | Derived design input (verify against) | How it will be verified |
|---|---|---|
| Clinician can read the display in a dim room | Display luminance >= 80 cd/m2 across full range; contrast ratio >= 4.5:1 | Photometer measurement per test method TM-014 |
| Device survives normal hospital transport | Withstands ISTA 2A transport simulation with no functional failure | Transport test per ISTA 2A, full functional check after |
| Alarm is noticed over ward noise | Auditory alarm sound pressure >= 65 dBA at 1 m, per IEC 60601-1-8 | Sound level meter at 1 m, ambient subtracted |
| Single-use, sterile at point of use | Sterile per SAL 10^-6; sterilized by ethylene oxide per ISO 11135 | Sterilization validation; sterility per USP <71> on samples |

**How to do it.**

1. Capture user needs and intended use first, from voice-of-customer, clinical input, and the indications statement.
2. Pull in applicable standards and regulatory requirements for the device type.
3. Run the initial risk analysis (hazard identification) and bring risk control requirements forward as inputs.
4. Translate each need into one or more verifiable engineering requirements with quantities and tolerances.
5. Assign every input a unique identifier so it can be traced.
6. Resolve conflicts and gaps; a documented review under 820.30(c) must address incomplete, ambiguous, or conflicting requirements.
7. Approve the input set in a design review before significant output work proceeds.

**Acceptance criteria.** Inputs are documented, uniquely identified, traceable to user needs and to risk controls, each one verifiable, conflicts resolved, and the set formally reviewed and approved. See [user requirements and traceability](/articles/user-requirements-and-traceability) for the requirement-writing discipline, which is the same skill applied in validated computer systems.

---

## Design outputs

**What and why.** Required by 820.30(d) and ISO 13485 Clause 7.3.4. Design outputs are the results of the design effort at each phase and at the end. They are the things that define the device: drawings, specifications, source code, bills of materials, formulations, software, labeling, and the procedures needed to make and inspect the device. The rule that catches teams: outputs must be expressed in terms that allow an adequate evaluation of conformance to inputs, and outputs that are essential for the proper functioning of the device must be identified (often called "essential outputs" or device master record items that bear directly on safety).

**What goes in it.** Typical outputs include component and assembly drawings with tolerances, material and component specifications, software builds and software design specifications, the device labeling and IFU, packaging specifications, the device master record items, inspection and test procedures, and acceptance criteria for incoming, in-process, and finished device inspection.

**How to do it.** Generate outputs against the inputs. Document acceptance criteria within or alongside each output (an output you cannot inspect against is not finished). Identify the outputs essential for safe function. Review and approve outputs, with records of the approval and date, before release. Place approved outputs under document control. The set of approved outputs becomes the **Device Master Record (DMR)**, the recipe for building the device, which is distinct from the DHF (the history of how the design was developed). Do not confuse the two; interviewers will ask.

**Acceptance criteria.** Each output references the input(s) it satisfies, contains or points to acceptance criteria, is reviewed and approved with signature and date before use, essential outputs are flagged, and the outputs are under document control. See [document control fundamentals](/articles/document-control-fundamentals) for the approval-and-revision mechanics.

---

## Design reviews

**What and why.** Required by 820.30(e) and ISO 13485 Clause 7.3.5. A design review is a documented, systematic examination of the design at a defined stage to evaluate adequacy against requirements, identify problems, and propose actions. They are the gates of the waterfall. The reason they are required: design problems are cheapest to fix early, and a structured cross-functional review surfaces the conflicts that a single discipline misses.

**The independent reviewer rule.** Both 820.30(e) and ISO 13485 require that participants include an individual who does **not have direct responsibility** for the design stage being reviewed, plus any needed specialists. The independent reviewer is the most-cited gap in this element. If your review attendance list is only the people who did the work, you have a finding waiting to happen.

**What goes in the record.** A design review record must capture: the design being reviewed and its stage, the date, the attendees and their roles (with the independent reviewer identified), the items reviewed, the issues and action items raised with owners and due dates, the decision (proceed, proceed with actions, or hold), and signatures. Open action items must be tracked to closure; a review that "passed" with open critical actions and no closure evidence is a classic finding.

**How to do it.**

1. Schedule reviews at the planned gates (end of inputs, end of outputs, pre-verification, pre-transfer, and so on).
2. Define entry criteria; do not hold the review if the deliverables are not ready.
3. Distribute materials in advance.
4. Hold the review with the required cross-functional attendance including the independent reviewer.
5. Record issues and assign owners and dates.
6. Document the gate decision.
7. Track actions to closure and verify closure before the next gate.

**Acceptance criteria.** Reviews occur at planned stages, the independent reviewer is present and identified, records show what was reviewed and decided, action items have owners and due dates, and closure is documented before the gate is declared passed.

**Worked example, design review minute skeleton.**

| Field | Entry |
|---|---|
| Review ID / stage | DR-03, end of design output |
| Date | 2026-05-14 |
| Attendees | R&D lead (design owner), Systems engineer, QA reviewer (independent, no design responsibility), Regulatory, Manufacturing engineer |
| Items reviewed | Output-to-input traceability matrix rev C, drawing package rev B, risk control verification status |
| Issues raised | AI-21: input REQ-118 (alarm SPL) has no linked output. AI-22: 2 risk controls not yet traced to outputs |
| Decision | Proceed with actions; verification cannot start until AI-21, AI-22 closed |
| Actions / owner / due | AI-21 add output spec, R&D, 2026-05-21. AI-22 update RMF traceability, Risk owner, 2026-05-21 |

---

## Design verification

**What and why.** Required by 820.30(f) and ISO 13485 Clause 7.3.6. Verification confirms that **design outputs meet design inputs.** It answers "did we build the device right against its own specification." Methods include test, inspection, analysis, and comparison to a proven equivalent design. The risk rationale: a device can be perfectly built to a wrong or unmet specification; verification is the proof that the build matches the spec.

**What goes in it.** A verification plan and protocols mapped to each input, the test methods and equipment (calibrated), sample sizes with statistical rationale, predetermined acceptance criteria, the executed records, and a verification report summarizing pass/fail against every input. Verification is performed on devices representative of production, ideally from production-equivalent processes.

**How to do it.**

1. Build the verification plan from the input list; every verifiable input gets a verification method.
2. Justify sample sizes statistically (confidence and reliability, for example a 95% confidence / 90% reliability attribute plan, or a variables plan with a tolerance interval). Document the rationale; an unjustified n=3 is a frequent finding.
3. Write protocols with predetermined acceptance criteria. Do not let acceptance criteria appear after results.
4. Use calibrated equipment and approved, often validated, test methods.
5. Execute, record raw data, and handle any test failures formally (do not quietly re-test).
6. Write the verification report and update traceability.

**Acceptance criteria.** Every design input has a verification result, sample sizes are justified, acceptance criteria were predetermined, equipment was calibrated and methods qualified, failures were investigated and resolved, and the report concludes verification complete with traceability intact. See [writing validation protocols and reports](/articles/writing-validation-protocols-and-reports) and [statistics in quality](/articles/statistics-in-quality-cpk-control-charts) for the protocol and sampling mechanics.

---

## Design validation

**What and why.** Required by 820.30(g) and ISO 13485 Clause 7.3.7. Validation confirms that the device **conforms to defined user needs and intended uses.** It answers "did we build the right device for the people who use it, in the conditions they use it." Validation must be performed on **initial production units, lots, or batches, or their equivalents,** under defined operating conditions, on actual or simulated use conditions, and must include software validation and risk analysis where applicable.

This is the element most often misunderstood. Three points an interviewer wants to hear:

1. **Validation tests against user needs, not against design inputs.** That is what separates it from verification.
2. **Validation uses production or production-equivalent units,** not engineering prototypes. Validating on a hand-built lab unit and calling it done is a recognized gap.
3. **Human factors / usability is part of design validation** for most devices. Use-related risk is evaluated under IEC 62366-1:2015 (usability engineering) and the FDA human factors guidance "Applying Human Factors and Usability Engineering to Medical Devices" (2016). A summative usability study with representative users in a realistic environment is the heart of validation for many devices.

**What goes in it.** A validation plan tied to user needs and intended use, simulated-use or clinical-use protocols, the human factors validation (summative) study, software validation evidence, clinical evidence if needed, the executed records on production-equivalent units, and a validation report with traceability to each user need.

**Worked example, the verification/validation split on one device (a bedside infusion controller).**

| Item | Type | Tests against | On what units | Example evidence |
|---|---|---|---|---|
| Flow rate accuracy +/- 5% | Verification | Design input (accuracy spec) | Production-equivalent, n per stats plan | Gravimetric flow test report |
| Alarm SPL >= 65 dBA at 1 m | Verification | Design input (alarm spec) | Production-equivalent | Sound level test report |
| Nurse can set up correctly under ward conditions without use error | Validation | User need / intended use | Initial production units | Summative human factors study per IEC 62366-1 |
| Device usable by intended users across the full task set | Validation | User needs | Initial production units | Simulated-use validation report |

**Acceptance criteria.** Each user need has a validation result, validation was done on production-equivalent units under defined/simulated use conditions, human factors validation is present and shows acceptable use-error performance, software validation is included where applicable, and the report traces to all user needs and intended uses.

---

## Design transfer

**What and why.** Required by 820.30(h) and ISO 13485 Clause 7.3.8. Transfer ensures the design is **correctly translated into production specifications.** The risk rationale: a verified, validated design is worthless if manufacturing builds to the wrong revision, an unqualified process, or an incomplete DMR. Transfer is where the design becomes a repeatable product.

**What goes in it / how to do it.** A documented transfer plan and checklist confirming: the DMR is complete and approved, manufacturing processes are validated (process validation, IQ/OQ/PQ as needed), inspection and test methods are validated and operators trained, suppliers are qualified for production parts, and pilot or first-production lots meet specification. Process validation here connects to the broader [process validation lifecycle](/articles/process-validation-lifecycle); for devices, process validation is required where the result cannot be fully verified by subsequent inspection and test (for example, sealing, welding, sterilization).

**Acceptance criteria.** Transfer checklist complete and signed, DMR released, production processes validated, test methods and inspections qualified, training complete, suppliers qualified, and first lots conform. A device that went to production while the DMR still had open items or unvalidated processes is a transfer-control finding.

---

## Design changes

**What and why.** Required by 820.30(i) and ISO 13485 Clause 7.3.9. Every change to the design must be identified, documented, reviewed, verified or validated as appropriate, and approved before implementation. The reason: an unverified change can silently break a previously proven requirement, and ISO 13485 specifically asks you to evaluate the effect of changes on constituent parts, product in process or already delivered, risk management inputs, and product realization.

**How to do it.** Route every design change through change control. Assess impact across inputs, outputs, risk, verification, validation, the DMR, labeling, and regulatory filings (a change may require a new 510(k) or a regulatory notification; assess against the FDA "Deciding When to Submit a 510(k) for a Change to an Existing Device" guidance, 2017). Re-verify or re-validate the affected requirements. Approve before implementation. Update the DHF and DMR. See [change control for validated systems](/articles/change-control-validated-systems) for the same discipline applied to systems.

**Acceptance criteria.** Each change has an impact assessment, the right re-verification/re-validation evidence, a regulatory impact determination, approval before implementation, and updated records. The classic finding here is a change made and shipped with no re-verification of the requirements it touched, or no assessment of whether a new submission was needed.

---

## The Design History File (DHF)

**What and why.** Required by 820.30(j). The DHF is the compilation of records that **describes the design history of a finished device** and demonstrates the design was developed in accordance with the approved design plan and the design control requirements. Under ISO 13485 the parallel concept is the **design and development file** (Clause 7.3.10). The DHF is the evidence package an inspector opens to confirm the whole process happened and connects.

**What goes in it.** The DHF is usually an index pointing to controlled records, not a single binder of copies. Contents typically include:

- Design and development plan(s) and updates.
- User needs / intended use and the design input requirements.
- Design output documents (or references to the DMR items).
- Design review minutes with attendees, issues, and closures.
- Verification protocols, data, and reports.
- Validation protocols, data, and reports, including human factors.
- Design transfer evidence.
- Design change records.
- The traceability matrix tying user needs to inputs to outputs to verification and validation.
- The risk management file references (or the RMF itself per ISO 14971).

**DHF vs DMR vs DHR (the trio interviewers test).**

| Record | What it is | Question it answers |
|---|---|---|
| DHF (Design History File) | History of how the design was developed | "How did this design come to be, and was it controlled?" |
| DMR (Device Master Record) | The current recipe: specs, drawings, processes, methods | "How do we build and test this device?" |
| DHR (Device History Record) | Production records for a specific unit/lot built | "Was this particular lot built per the DMR?" |

The DHF feeds the DMR; the DMR governs the DHR. Mixing them up is the fastest way to fail a screening interview.

**How to do it.** Maintain the DHF as a living index from the start of the program, not assembled at the end. Keep it organized so any record can be retrieved on request. Confirm completeness at the final design review and at transfer. Keep it current through design changes; a DHF that reflects only the launch revision and ignores subsequent changes is incomplete.

**Acceptance criteria.** The DHF is complete, indexed, current, retrievable, and demonstrates the plan was followed and every design control element was satisfied with linked evidence. The acid test: pick any user need and trace it forward through input, output, verification, and validation, and pick any test and trace it back to a requirement. Both directions should close with no orphans.

---

## Traceability: the spine that holds it together

Traceability is not its own 820.30 element, but it is what an inspector reads first and what makes a design review meaningful. A **traceability matrix** links, in both directions:

`User need → Design input → Design output → Verification → Validation → Risk control`

**Worked traceability snippet.**

| User need | Design input | Output | Verification | Validation | Risk control link |
|---|---|---|---|---|---|
| UN-04 readable display | REQ-031 luminance >= 80 cd/m2 | DWG-210, display spec | VER-031 photometer, PASS | VAL-04 simulated use, PASS | RC-09 (display legibility) |
| UN-07 audible alarm | REQ-118 SPL >= 65 dBA at 1 m | SPEC-440 alarm | VER-118 SPL test, PASS | VAL-07 use study, PASS | RC-15 (alarm detectability) |

**What good looks like.** No design input without a verification. No verification without an input. Every user need validated. Every risk control verified that it was implemented and effective. No orphan tests and no orphan requirements. When this matrix is clean, the design controls are essentially proven. When it has gaps, that is exactly what gets cited.

---

## Roles and responsibilities

| Function | Responsibility in design controls |
|---|---|
| Program / project management | Owns the design plan, runs gates, tracks deliverables and schedule |
| R&D / systems engineering | Writes inputs, generates outputs, owns the technical design |
| Verification & validation engineering | Plans and executes V&V, owns protocols, reports, and sample-size rationale |
| Quality assurance | Owns the procedure, provides the independent design reviewer, approves records, assures the DHF |
| Regulatory affairs | Determines submission pathway and change-impact on filings, maps to standards |
| Risk management owner | Maintains the RMF per ISO 14971, feeds risk controls into inputs, confirms control verification |
| Human factors / usability | Plans and runs formative and summative usability studies feeding validation |
| Manufacturing / operations | Receives the transfer, validates processes, builds production-equivalent units |
| Suppliers / vendors | Provide qualified components and, when designing to spec, deliverables under the manufacturer's design controls (supplier controls per the QMS apply) |

See [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) and [supplier and vendor qualification](/articles/supplier-vendor-qualification) for how external parties fit.

---

## Common mistakes and real inspection-finding patterns

These are the patterns that show up again and again in device design control citations. None reference any specific company.

- **User needs and design inputs are conflated.** No clear set of user needs, so validation has nothing to test against. Fix: separate the two lists explicitly.
- **Design inputs are not verifiable.** Subjective requirements ("easy to use," "high quality") with no quantity, tolerance, or test. Fix: every input gets a number or an objective method.
- **Verification with no statistical sample-size rationale.** Tests run on whatever was lying around, n=3 with no justification. Fix: document confidence/reliability or tolerance-interval basis.
- **Validation done on prototypes, not production-equivalent units.** A frequent and serious finding, because it defeats the purpose. Fix: validate on initial production units or true equivalents.
- **Acceptance criteria written after the data.** Results in hand, then criteria backfilled to pass. Fix: predetermined criteria in the approved protocol.
- **Design reviews with no independent reviewer,** or no records of attendees and decisions. Fix: name the independent reviewer; record issues, owners, and closure.
- **Open action items at a passed gate** with no closure evidence. Fix: track to closure before declaring the gate passed.
- **Design changes not re-verified or not assessed for new submission.** A change ships, the affected requirement is never re-tested, and no 510(k) change decision was made. Fix: change control with impact assessment and re-V&V.
- **Traceability gaps:** orphan inputs (no verification) and orphan tests (no requirement); risk controls not traced to outputs or not verified as implemented. Fix: a maintained matrix reviewed at each gate.
- **DHF assembled at the end** and missing changes made after launch. Fix: maintain it as a living index from day one.
- **Design transfer before processes are validated** or before the DMR is complete. Fix: a transfer checklist with hard gate criteria.

---

## Interview-ready: questions and strong answers

**"Explain the difference between verification and validation."**
Verification confirms design outputs meet design inputs (did we build the device right against its specification). Validation confirms the device meets user needs and intended use (did we build the right device for the user). Verification is usually bench test, inspection, or analysis against engineering requirements; validation uses production-equivalent units under actual or simulated use and includes human factors and software validation. A device can pass verification and still fail validation if the inputs were wrong for the user.

**"Are user needs the same as design inputs?"**
No. User needs are what the user wants. Design inputs are the verifiable engineering requirements derived from those needs plus standards and risk controls. You validate against user needs and verify against design inputs.

**"What is the Design History File and how does it differ from the DMR and DHR?"**
The DHF is the history of how the design was developed and proof the design controls were followed. The DMR is the current recipe for building and testing the device. The DHR is the production record for a specific unit or lot proving it was built per the DMR. DHF feeds DMR, DMR governs DHR.

**"Who must attend a design review?"**
Representatives of the functions concerned with the stage, any needed specialists, and at least one individual with no direct responsibility for the stage under review (the independent reviewer). The review and the independent reviewer must be documented.

**"What units do you validate on, and why does it matter?"**
Initial production units, lots, batches, or their equivalents, under defined operating conditions. It matters because the manufacturing process can introduce variation that prototypes hide; validating on prototypes does not demonstrate the device as actually produced will meet user needs.

**"How does risk management connect to design controls?"**
Risk management per ISO 14971 runs in parallel. Hazard analysis feeds safety requirements into design inputs as risk controls, those controls become outputs, verification confirms the controls were implemented and are effective, and the residual risk evaluation feeds the design reviews and validation. The traceability matrix should link risk controls through to verification.

**"You make a change to a released device. Walk me through what happens."**
Open a design change record, assess impact across inputs, outputs, risk, V&V, DMR, labeling, and regulatory filings, determine whether a new submission is needed using the FDA change guidance, re-verify or re-validate the affected requirements, approve before implementation, and update the DHF and DMR.

**"What changes under the QMSR?"**
Effective February 2, 2026, FDA's Part 820 incorporates ISO 13485:2016 by reference, so design controls are met primarily through ISO 13485 Clause 7.3 plus FDA additions. The engineering activities are the same; the vocabulary and document structure shift toward the ISO clauses.

**"Show me your traceability." (The practical screen.)**
Walk a user need forward to input, output, verification, and validation, then take a random verification result and trace it back to its input. If both close cleanly with no orphans, the design controls are demonstrably sound. This is the single most useful thing to be fluent in.

---

## Practical tips

- Build the traceability matrix on day one and treat it as the system of record, not a deliverable you assemble at the end. Every gate review reads it.
- Write inputs you can test. If you cannot draft the verification method in one sentence, the input is not finished.
- Predetermine acceptance criteria and sample-size rationale in every protocol. This single habit removes a large share of common findings.
- Keep user needs and design inputs in separate, clearly labeled lists so verification and validation never blur.
- Name the independent design reviewer in the procedure and in every review record.
- Validate on production-equivalent units and document why they are equivalent.
- For software-containing devices, align design controls with IEC 62304:2006 (amended 2015) software lifecycle and treat software validation as part of design validation. See [IEC 62304 software lifecycle](/articles/iec-62304-samd-software-lifecycle) and [device software cybersecurity for SaMD](/articles/device-software-cybersecurity-samd).
- Maintain the DHF current through every change; an out-of-date DHF undermines an otherwise clean file.

---

## Related reading

- [ISO 14971 risk management for devices](/articles/iso-14971-risk-management-devices)
- [Medical device quality system (QMSR)](/articles/medical-device-quality-system-qmsr)
- [EU MDR and IVDR overview](/articles/eu-mdr-ivdr-overview)
- [Device submission pathways: 510(k) and PMA](/articles/device-submission-pathways-510k-pma)
- [IEC 62304 software lifecycle for SaMD](/articles/iec-62304-samd-software-lifecycle)
- [Device software cybersecurity and SaMD](/articles/device-software-cybersecurity-samd)
- [Unique device identification (UDI)](/articles/unique-device-identification-udi)
- [User requirements and traceability](/articles/user-requirements-and-traceability)
- [Change control for validated systems](/articles/change-control-validated-systems)
- [Process validation lifecycle](/articles/process-validation-lifecycle)
- [Writing validation protocols and reports](/articles/writing-validation-protocols-and-reports)
- [Statistics in quality: Cpk and control charts](/articles/statistics-in-quality-cpk-control-charts)
