---
title: "Combination Products: cGMP Compliance Under 21 CFR Part 4"
description: "How drug-device, biologic-device, and other combination products are regulated for manufacturing: primary mode of action, the streamlined cGMP approach, which provisions you add to a drug or device base system, and how to survive an inspection."
pubDate: 2026-06-21
tags: ["combination products", "21 CFR Part 4", "cGMP", "drug-device", "design controls", "QMSR", "quality systems"]
pillar: "medical-devices"
tier: "Intermediate"
---

A prefilled syringe is a drug and a device. So is an autoinjector, a drug-eluting stent, a transdermal patch, a metered-dose inhaler, a wearable insulin pump with its cartridge, and a kit that pairs a vial with a delivery set. Each combines constituents that, on their own, would sit under different regulations with different vocabularies, different inspectors, and different assumptions about what "in control" means. Combination products are where the drug world and the device world collide, and the manufacturing rules that govern them are a deliberate splice of both.

This article covers what a combination product is, who decides which rules apply, the streamlined cGMP framework in 21 CFR Part 4, exactly which provisions you bolt onto a drug or a device base system, how to build and run a compliant operation, and the inspection findings that recur. The goal is that after reading it you can scope the quality system for a combination product, defend the design of that system to an inspector, and answer the questions an interviewer will ask.

## What counts as a combination product

The definition lives in 21 CFR 3.2(e). A combination product is a product composed of two or more regulated constituents, that is a drug, a device, or a biological product, that are combined or otherwise associated. There are four recognized configurations:

- **Single-entity.** The constituents are physically or chemically combined into one product. A prefilled syringe, a drug-eluting stent, a transdermal patch, and an antibody conjugated to a small molecule are single-entity combinations.
- **Co-packaged.** Two or more separate constituents are packaged together in one package. A vial of lyophilized drug co-packaged with a diluent and a reconstitution syringe is co-packaged.
- **Cross-labeled (two products).** A drug or device is provided separately but its labeling requires use with a specific other constituent that is approved separately, where the two are needed to achieve the intended effect. A light-activated drug plus the specific laser that activates it is the classic example.
- **Cross-labeled (investigational).** A separately packaged constituent intended for use only with another individually specified investigational constituent.

The configuration matters because it changes how the constituents move through manufacturing and what a "lot" is. A single-entity product is made as one thing. A co-packaged product is two constituents assembled into a kit, which means two manufacturing histories converge at the packaging step and both have to be reconciled before release.

> 21 CFR 3.2(e): "The term combination product includes: (1) A product comprised of two or more regulated components, i.e., drug/device, biologic/device, drug/biologic, or drug/device/biologic, that are physically, chemically, or otherwise combined or mixed and produced as a single entity..."

## Who decides the rules: primary mode of action

Before you can design a quality system you have to know which set of regulations is the spine and which is the graft. That turns on the **primary mode of action (PMOA)**, defined in 21 CFR 3.2(m). The mode of action is how a constituent achieves its intended therapeutic effect. The primary mode of action is the single mode that provides the most important therapeutic action of the combination product as a whole.

PMOA does two things. It assigns the lead FDA center that takes the marketing application (CDER, CBER, or CDRH), and it sets the base cGMP operating system you build the manufacturing quality system around.

- If the **drug or biologic** provides the PMOA, the product is drug-led or biologic-led. The natural base is the drug cGMP regulation, 21 CFR Parts 210 and 211 (and the biologics regulations in Parts 600 to 680 for a biologic constituent).
- If the **device** provides the PMOA, the product is device-led. The natural base is the device quality system regulation in 21 CFR Part 820.

A prefilled syringe is drug-led: the drug does the work, the syringe delivers it. A drug-eluting stent is device-led: the stent holds the vessel open, the drug suppresses restenosis as a supporting action. A drug-coated balloon, a metered-dose inhaler, and a wearable drug pump each get sorted the same way, by asking what the most important therapeutic action is.

When PMOA is genuinely unclear, the sponsor can ask FDA's Office of Combination Products (OCP) for a formal assignment through a Request for Designation (RFD), or the less formal Pre-RFD. Get this settled early. The center assignment and the base quality system cascade into the application type, the inspection program, and the staffing of your quality unit. Guessing wrong is expensive to unwind.

## The streamlined approach: do not run two full systems

The naive reading of Part 4 is that a drug-device combination must comply with the entire drug cGMP and the entire device QMS at once. That would be wasteful and, in places, contradictory. 21 CFR 4.4 gives you a streamlined alternative, and it is the heart of the regulation.

You operate under **one base system** and then **add a defined, short list of provisions** from the other. You do not implement the other regulation in full. You demonstrate compliance with your base in full, and you demonstrate compliance with the named provisions from the other side. FDA accepts this as meeting cGMP for the whole combination product.

The base is normally the one tied to the PMOA, but the regulation lets you choose either base as long as you then add the right provisions from the other. Most manufacturers pick the base that matches their existing operation. A pharma company making a prefilled syringe already runs a Part 211 plant, so it uses 211 as the base and adds device provisions. A device maker building a drug-coated implant already runs a Part 820 system, so it uses 820 as the base and adds drug provisions.

### Drug base: the six device provisions you add

If your operating system is a drug cGMP system under Part 211, 21 CFR 4.4(b)(1) requires you to also comply with these provisions of the device quality system regulation:

| Provision | Section | What it adds that 211 does not cover well |
|---|---|---|
| Management responsibility | 820.20 | A defined quality policy, quality objectives, an organizational structure with named responsibility and authority, a management representative, and management review of the quality system. |
| Design controls | 820.30 | A formal design control process: design and development planning, design inputs and outputs, design review, design verification and validation, design transfer, design changes, and a design history file. |
| Purchasing controls | 820.50 | Evaluation and selection of suppliers based on their ability to meet requirements, defined purchasing data, and supplier agreements appropriate to the device constituent. |
| Corrective and preventive action | 820.100 | A CAPA system that captures device-type failure modes (mechanical failure, use error, delivery malfunction), with analysis of quality data, investigation, action, verification of effectiveness, and management awareness. |
| Installation | 820.170 | Where applicable, documented installation and inspection instructions and records, for devices that are installed. |
| Servicing | 820.200 | Where servicing is a specified requirement, procedures and records for servicing activities and analysis of service reports as a quality signal. |

The two that bite hardest in practice are **design controls (820.30)** and **CAPA (820.100)**. Drug companies generally do not run formal design controls. The drug development process is rich, but it is not structured as user needs to design inputs to verified and validated outputs with a design history file. For a combination product, the delivery system has to go through real design controls. The needle, the spring, the actuation force, the dose accuracy, the human factors of a patient self-injecting under stress, all of it lives in the design control file. See [Design Controls for Medical Devices](/articles/design-controls-medical-devices) for the full method.

### Device base: the eight drug provisions you add

If your operating system is a device quality system under Part 820, 21 CFR 4.4(b)(2) requires you to also comply with these provisions of the drug cGMP regulation:

| Provision | Section | What it adds that 820 does not cover well |
|---|---|---|
| Testing and approval or rejection of components, containers, and closures | 211.84 | Sampling and testing of incoming drug components, containers, and closures, with documented approval or rejection before use. |
| Calculation of yield | 211.103 | Calculation of actual yield and percentage of theoretical yield at appropriate phases of manufacture, a basic drug-process control. |
| Tamper-evident packaging | 211.132 | Tamper-evident packaging requirements for over-the-counter drug products. |
| Expiration dating | 211.137 | Scientifically justified expiration dating supported by stability data. |
| Testing and release for distribution | 211.165 | Testing of each batch for identity and strength of active ingredients and conformance to final specifications before release. |
| Stability testing | 211.166 | A written stability program with appropriate test intervals, storage conditions, and statistically sound sampling that supports the expiration date. |
| Special testing requirements | 211.167 | Special tests such as sterility and pyrogen testing for products that must be sterile or pyrogen-free. |
| Reserve samples | 211.170 | Retention of reserve samples of active ingredient and finished product for the required periods. |

The ones that surprise device teams are **stability (211.166)** and **expiration dating (211.137)**. Devices do not normally carry an expiration date driven by chemical degradation of an active ingredient. A drug constituent does, and that means a stability program with ICH-aligned conditions, a defined pull schedule, and stability-indicating methods. See [Stability Programs and ICH Q1](/articles/stability-programs-ich). Container closure integrity also becomes a sterility-over-shelf-life question for sterile combination products, covered in [Container Closure Integrity Testing](/articles/container-closure-integrity-testing).

### Choosing your base: a short decision path

Two decisions sit behind the quality system. They are related but not the same, and people blur them.

1. **What is the PMOA?** Identify the single constituent that provides the most important therapeutic action. Drug or biologic PMOA points to a drug or biologics lead center; device PMOA points to the device center. If it is genuinely unclear, file a Pre-RFD or RFD with the Office of Combination Products before building anything.
2. **Which base operating system do you run?** The base does not have to match the PMOA, although it usually does. Ask which full quality system your site already operates well. A Part 211 plant uses 211 as the base and adds the six device provisions; a Part 820 / QMSR site uses 820 as the base and adds the eight drug provisions. Pick the base that matches your real operation, then add the other side's named provisions in full.
3. **Write both down.** The PMOA determination (with rationale and any RFD correspondence) and the base choice (with the mapped added provisions) are the two things an inspector asks for first.

## A regulatory note: Part 820, the QMSR, and Part 4

The device base referenced throughout Part 4 is 21 CFR Part 820. As of 2 February 2026, FDA's amended Part 820, the Quality Management System Regulation (QMSR), incorporates ISO 13485:2016 by reference rather than spelling out the old quality system elements. The substance of the provisions Part 4 calls out (management responsibility, design controls, purchasing, CAPA, installation, servicing) maps onto ISO 13485 clauses, but the citations and document structure shift. When you write or audit a combination-product quality plan after that date, expect the device side to be expressed in ISO 13485 clause language with FDA additions, not the legacy 820.x subpart names. Know both, because legacy design history files and many people's habits still use the old names. See [Medical Device Quality System Regulation (QMSR)](/articles/medical-device-quality-system-qmsr).

This matters specifically for combination products because the QMSR transition refined how the streamlined provisions read. The intent did not change: a drug-led combination still needs genuine design controls over the device constituent, and a device-led combination still needs genuine drug release and stability testing. Frame your quality plan around the intent and the current citations together.

## Building the quality system: a worked approach

Take a drug-led single-entity product, an autoinjector containing a biologic, made in a Part 211 plant. Here is how you stand up a compliant system.

**1. Confirm PMOA and base.** The biologic provides the primary therapeutic action, so the product is biologic-led, the lead center is CBER, and the base operating system is the drug and biologics cGMP. Document this determination and keep the rationale on file. If there was an RFD or Pre-RFD interaction, file that correspondence.

**2. Write a combination product control strategy or quality plan.** One controlling document that states the base system, lists the added provisions from 21 CFR 4.4(b)(1), and maps each added provision to the specific procedure that satisfies it. This is the document an inspector will ask for first. It is the proof that you thought about Part 4 deliberately rather than by accident.

**3. Stand up design controls for the device constituent.** The autoinjector is a device. It needs a design and development plan, design inputs derived from user needs and intended use, design outputs (drawings, specifications, software requirements if it is electromechanical), design reviews at defined gates, verification that outputs meet inputs, validation that the device meets user needs including a summative human factors study, design transfer to manufacturing, and a design history file. Use error is a primary risk for a self-administered injector, so human factors and use-related risk analysis under IEC 62366-1 are central. See [Design Controls for Medical Devices](/articles/design-controls-medical-devices) and [ISO 14971 Risk Management for Devices](/articles/iso-14971-risk-management-devices).

**4. Extend CAPA to device failure modes.** Your existing 211 CAPA process handles drug deviations. Extend it so that mechanical failures, delivery malfunctions, dose-accuracy excursions, and use errors flow into the same system, get investigated, and get effectiveness-verified. See [What Is a CAPA](/articles/what-is-a-capa) and [CAPA Effectiveness Verification](/articles/capa-effectiveness-verification).

**5. Extend purchasing controls to the device suppliers.** The injector body, spring, needle, and any electronics come from device suppliers who may never have been audited to device expectations. Qualify them for device-specific risks, not just as chemical-component vendors. See [Supplier and Vendor Qualification](/articles/supplier-vendor-qualification).

**6. Reconcile the rest under the base.** Batch records, component testing, yield, sterility assurance, stability, release, reserve samples, and environmental control all run under your Part 211 base as usual. See [21 CFR 210/211 cGMP Walkthrough](/articles/cfr-210-211-cgmp-walkthrough).

The mirror-image approach applies to a device-led product. Run your Part 820 / QMSR system, then add the eight drug provisions, with stability and release testing usually being the new build.

### A short mapping example

A compact version of the quality plan mapping table for the drug-base case:

| Added device provision | Procedure that satisfies it | Owner |
|---|---|---|
| 820.30 Design controls | SOP-DC-001 Design Control Procedure plus the device DHF | R&D / Device engineering |
| 820.20 Management responsibility | Quality manual and management review procedure, extended to device scope | Site quality head |
| 820.50 Purchasing controls | Supplier qualification SOP with device supplier criteria | Procurement / Supplier quality |
| 820.100 CAPA | Existing CAPA SOP, scope expanded to device failure modes | Quality systems |
| 820.170 Installation | Not applicable (product is patient-administered, not installed); documented N/A rationale | Quality |
| 820.200 Servicing | Not applicable (single-use disposable); documented N/A rationale | Quality |

Writing "not applicable" is fine and expected, but write the rationale. An undocumented gap reads as an oversight. A documented N/A reads as a decision.

### Worked example: releasing a co-packaged kit

Take a co-packaged kit: a vial of lyophilized biologic, a prefilled diluent syringe, and a reconstitution needle, assembled into one carton and released as one product. Two constituent histories converge at the packaging step, and release has to reconcile both before the kit ships.

| Release element | Drug constituent (vial) | Device constituent (syringe, needle) |
|---|---|---|
| Batch record complete and reviewed | Drug batch record under Part 211 | Device history record / device master record evidence |
| Specification met | Assay, sterility, endotoxin, appearance | Dimensional, functional (delivery), package integrity |
| Stability and dating support | Stability data supports the kit expiry | Component shelf life supports the kit expiry |
| Traceability | Drug lot number captured on the kit record | Device lot or serial captured on the kit record |
| Reconciliation | Quantities reconciled against components issued | Quantities reconciled against components issued |

The release rule: no kit ships until both constituent histories are complete, both sets of specifications are met, the labeled expiry is supported by the shorter-lived constituent, and lot traceability lets you reconstruct which drug lot was paired with which device lot. One quality decision releases the kit, but it rests on two reconciled records. The common failure here is releasing on the drug record alone and treating the device components as bought-in stock with no constituent reconciliation.

## The EU view: drug-device combinations and MDR Article 117

The US framework is Part 4. The EU regulates the same physical products differently, and anyone scoping a global program needs both. In the EU there is no single combination-product regulation. A product whose principal mode of action is pharmacological, immunological, or metabolic is regulated as a medicinal product under Directive 2001/83/EC, and the device part rides along inside the marketing authorization. The hinge is **Article 117 of the EU Medical Device Regulation (MDR, Regulation (EU) 2017/745)**, which amended Annex I of that medicinal-products directive.

For an integral drug-device combination (a single, integral product such as a prefilled syringe, an autoinjector, or a drug-eluting stent) where the device part is not already CE-marked for that use, Article 117 requires the marketing authorization dossier to include a **Notified Body Opinion (NBOp)** confirming that the device part conforms to the relevant General Safety and Performance Requirements (GSPRs) in Annex I of the MDR. The requirement applies to new marketing authorization applications submitted from 26 May 2021. In practice it means engaging a notified body early, building the device-part evidence to MDR GSPRs, and aligning device lifecycle changes with the medicines variation framework.

The mapping to the US concepts is close but not identical. EU principal mode of action parallels US primary mode of action, and the EU integral combination parallels the US single-entity drug-led combination. The deliverables differ: the EU wants an NBOp on the device part against MDR GSPRs; the US wants the streamlined Part 4 quality plan with the added device provisions. A global program builds the device design and risk file once (design controls, ISO 14971, IEC 62366-1 human factors) and then presents it to each regulator in its own form: a design history file mapped to 21 CFR 4.4 for FDA, and an MDR GSPR conformity file for the NBOp in the EU.

## Acceptance criteria: what good looks like

- A documented PMOA determination with rationale, and any RFD or Pre-RFD correspondence on file.
- One controlling quality plan that names the base operating system and maps every added provision from 21 CFR 4.4 to a specific procedure, including documented justifications for any provision marked not applicable.
- A complete design history file for the device constituent if drug-led, or a complete drug release and stability dossier if device-led.
- CAPA, complaint handling, and adverse event reporting that capture both drug and device failure modes and route them to the correct reporting pathway.
- Postmarket reporting set up correctly for combination products, including the combination product adverse event reporting requirements in 21 CFR Part 4 Subpart B.
- Batch release that reconciles all constituents. For a co-packaged kit, no release until both constituent histories are complete and consistent.
- Stability data that supports the labeled expiration date and, for sterile products, container closure integrity over shelf life.

## Postmarket: reporting under Part 4 Subpart B

Manufacturing compliance is Subpart A. Combination products also have specific postmarket safety reporting rules in 21 CFR Part 4 Subpart B. A combination product applicant has to meet the reporting requirements that apply to the type of application held, plus additional combination-product-specific reports. In practice this means a drug-led product still has to capture and report device-type events such as malfunctions, and a device-led product still has to handle drug-type adverse experience reporting. The pharmacovigilance and complaint systems have to be wired so an event is classified correctly and sent down the right reporting channel with the right timelines. See [Product Complaint Handling](/articles/product-complaint-handling) and [Pharmacovigilance and Safety Data Integrity](/articles/pharmacovigilance-safety-data-integrity).

## Common 483-type mistakes

- **No streamlined-approach documentation.** The plant complies with Part 211 and assumes it is done. There is no quality plan identifying the added device provisions, so design controls and device CAPA simply do not exist. This is the single most common combination-product finding.
- **Design controls treated as a paperwork afterthought.** A design history file assembled after the fact to satisfy an auditor, with no real design reviews, no traceability from user needs to verification, and a human factors study that was never done for a self-administered product.
- **Suppliers of device constituents never qualified to device expectations.** The needle or injector supplier was qualified as a generic component vendor, with no assessment of device-specific risk or design change control on their side.
- **CAPA blind to device failure modes.** Mechanical failures and use errors handled as one-off complaints, never escalated into CAPA, so a systemic delivery problem is invisible until the field signal is loud.
- **Stability or expiration dating missing on a device-led product.** The device team did not realize the drug constituent forces a stability program and a justified expiration date.
- **Adverse event misrouting.** A device malfunction on a drug-led product reported only through the drug pathway, missing the combination-product malfunction reporting obligation, or the reverse.
- **Change control that updates one constituent and forgets the other.** A change to the device that affects the drug's stability or sterility, pushed through device change control without a drug impact assessment. See [Change Control for Validated Systems](/articles/change-control-validated-systems) for the discipline, applied here across both constituents.

## Roles and responsibilities

| Role | Combination-product responsibility |
|---|---|
| Regulatory affairs | Owns the PMOA determination, RFD strategy, center assignment, and the marketing application. The single accountable owner for the regulatory framework. |
| Quality unit | Owns the combination-product quality plan, the mapping of added provisions, batch release reconciliation, and inspection readiness. |
| Drug / process development | Owns the drug constituent: formulation, process validation, stability, release testing. |
| Device / R&D engineering | Owns the device constituent: design controls, design history file, verification and validation, human factors. |
| Supplier quality | Qualifies and monitors both drug-component and device-component suppliers to the right expectations. |
| Pharmacovigilance / complaints | Owns adverse event intake, correct classification across drug and device event types, and Subpart B reporting. |
| Manufacturing / operations | Executes assembly, packaging, and the reconciliation of constituent histories at release. |

## Interview angle

**"What determines which cGMP regulation applies to a combination product?"**
The primary mode of action. PMOA sets the lead FDA center and the natural base operating system. Drug or biologic PMOA points to Parts 210/211 (and the biologics regulations) as the base; device PMOA points to Part 820, now the QMSR. Under 21 CFR Part 4 you run one base in full and add a defined set of provisions from the other rather than implementing both regulations completely.

**"You are at a Part 211 plant adding a prefilled syringe. What do you have to add?"**
The six device provisions from 21 CFR 4.4(b)(1): management responsibility (820.20), design controls (820.30), purchasing controls (820.50), CAPA (820.100), installation (820.170), and servicing (820.200), the last two usually not applicable for a disposable but with the rationale documented. The real work is genuine design controls over the syringe and human factors for patient self-injection, plus extending CAPA and purchasing to device failure modes and suppliers.

**"What new obligations hit a device company adding a drug coating?"**
The eight drug provisions from 4.4(b)(2): component testing (211.84), yield (211.103), tamper-evident packaging for OTC (211.132), expiration dating (211.137), release testing (211.165), stability (211.166), special testing such as sterility (211.167), and reserve samples (211.170). The big new builds are a stability program with a justified expiration date and batch release testing of the drug constituent.

**"What is the most common combination-product inspection finding?"**
No streamlined-approach documentation. The site complies fully with its base regulation but never produced a quality plan identifying the added provisions, so design controls (for a drug-led product) or stability and release testing (for a device-led product) are simply absent.

**"How does postmarket reporting differ?"**
Part 4 Subpart B adds combination-product-specific safety reporting on top of the reporting tied to your application type. A drug-led product still has to report device malfunctions; a device-led product still has to handle drug adverse experience reporting. The complaint and pharmacovigilance systems must classify an event correctly and route it down the right channel with the right timeline.

## Key takeaways

- A combination product joins two or more of drug, device, and biologic, in single-entity, co-packaged, or cross-labeled form.
- Primary mode of action sets the lead center and the base cGMP operating system.
- 21 CFR Part 4 lets you run one base system in full and add a short, defined list of provisions from the other, rather than two complete systems.
- Drug base adds six device provisions; design controls and CAPA are the hard parts. Device base adds eight drug provisions; stability and release testing are the hard parts.
- Document the streamlined approach in one quality plan that maps every added provision to a procedure, with rationale for anything marked not applicable.
- After 2 February 2026 the device side is expressed through the QMSR and ISO 13485; the intent of the Part 4 provisions is unchanged.
- The most common finding is having no documentation of the streamlined approach at all.

For the device-side foundations, see [Design Controls for Medical Devices](/articles/design-controls-medical-devices), [ISO 14971 Risk Management for Devices](/articles/iso-14971-risk-management-devices), and [Medical Device Quality System Regulation (QMSR)](/articles/medical-device-quality-system-qmsr). For the drug-side foundations, see [21 CFR 210/211 cGMP Walkthrough](/articles/cfr-210-211-cgmp-walkthrough) and [Stability Programs and ICH Q1](/articles/stability-programs-ich).
