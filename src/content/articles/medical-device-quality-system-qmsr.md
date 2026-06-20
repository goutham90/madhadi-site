---
title: "Medical Device Quality Systems: From 21 CFR 820 to the QMSR and ISO 13485"
description: "How FDA's 2026 Quality Management System Regulation folds ISO 13485:2016 into device law, and what changes for design controls, DHF/DMR/DHR records, CAPA, and combination-product makers."
pubDate: 2026-06-20
tags: ["medical-devices", "QMSR", "21 CFR 820", "ISO 13485", "design controls", "CAPA", "combination products", "quality systems"]
pillar: "medical-devices"
tier: "Intermediate"
---

For three decades, a U.S. device manufacturer's quality system lived under 21 CFR Part 820 — the Quality System Regulation, or QSR. A company selling the same product in Europe, Canada, Japan, or Australia built a parallel system to ISO 13485, the international quality management standard for medical devices. The two overlap heavily but were never identical, so most manufacturers maintained mappings, ran dual audits, and explained to inspectors why a procedure satisfied both at once.

That ends in 2026. FDA published the Quality Management System Regulation (QMSR) on February 2, 2024, amending Part 820 to incorporate ISO 13485:2016 by reference, with a two-year transition that makes it the operative requirement on **February 2, 2026**. After that date, conformance to ISO 13485 plus a layer of FDA-specific additions *is* compliance with U.S. device quality law. This article covers what a device quality system contains, how it differs from pharmaceutical GMP, and the practical questions a combination-product or biotech team faces when a drug-led organization finds itself owning a device constituent.

## What a device quality system actually governs

A quality system is the set of procedures, records, and responsibilities that keep a device safe and effective across its life — design, sourcing, manufacture, distribution, complaint handling, and field correction. The QSR organized this into subparts: management responsibility, design controls, document and record controls, purchasing, production and process controls, corrective and preventive action, labeling, handling and storage, servicing, and statistical techniques. ISO 13485 covers the same ground but arranges it differently and uses the vocabulary of the broader ISO management-system family (clauses 4 through 8, process approach, "documented information").

The key point for anyone coming from drugs: device regulation is risk-proportionate and design-centric in a way GMP is not. A Class I elastic bandage and a Class III implantable defibrillator fall under the same regulation, but the depth of design control, verification, validation, and clinical evidence scales with risk class. Pharmaceutical GMP under 21 CFR Parts 210 and 211 assumes you already know the product — it was defined in the marketing application — and concentrates on reproducing it identically, lot after lot. Device quality systems put most of their weight on getting the design right and proving it, before manufacturing reproducibility is even the question.

## The QSR-to-QMSR shift: what changed and what did not

The QMSR does not throw out the old expectations. ISO 13485:2016 and the former Part 820 address the same controls. What changed:

| Dimension | QSR (pre-2026) | QMSR (effective Feb 2, 2026) |
|---|---|---|
| Core text | FDA-drafted requirements in Part 820 | ISO 13485:2016 incorporated by reference |
| Terminology | FDA terms (DHF, DMR, DHR) | ISO terms (medical device file, documented information) layered with retained FDA definitions |
| Risk management | Implied, scattered | Explicit, via ISO 13485's pervasive risk requirement |
| FDA-specific adds | n/a | §820.35 records, §820.45 labeling/packaging controls, retained definitions, links to UDI and complaint/MDR rules |
| Inspection approach | QSIT-based | Aligned toward ISO 13485 structure; FDA developing a new inspection method |

A few things to internalize:

**ISO 13485:2016 is the spine.** The regulation incorporates that specific 2016 edition. You buy and read the standard from ISO or ANSI; FDA does not reprint its text. When a future ISO revision appears, it does *not* automatically become law — FDA would have to amend the regulation again.

**FDA kept the parts ISO doesn't cover.** ISO 13485 is silent on uniquely U.S. obligations, so the QMSR retains FDA-specific requirements. Record controls get a dedicated section (§820.35), as do labeling and packaging controls (§820.45). FDA also preserved cross-references so the quality system connects to the Unique Device Identification rule (21 CFR Part 830), Medical Device Reporting (21 CFR Part 803), and corrections and removals (21 CFR Part 806). Those reporting regulations were never inside Part 820 and are unaffected.

**The familiar acronyms survive in substance.** ISO 13485 uses "medical device file" and "documented information" instead of Design History File and Device Master Record, but the underlying objects — a design record, a manufacturing recipe, a production traceability record — are the same things you always built. FDA retained the historic definitions so the terms remain meaningful in U.S. practice and on inspection.

**Inspections will look different.** FDA's longstanding inspection technique, the Quality System Inspection Technique (QSIT), was structured around the QSR's subsystems. Expect FDA to align its inspection approach with the clause structure of ISO 13485 over the transition. Notified-body audits in Europe already work this way, which is part of the harmonization payoff: one quality system, fewer translation layers.

If you already run a mature ISO 13485 system because you sell globally, the QMSR mostly confirms your existing structure as your U.S. baseline. If you run a U.S.-only QSR shop, you have a gap assessment and remediation to finish — chiefly making risk management explicit end-to-end, and reorganizing documentation to the ISO clause structure.

## Design controls: the heart of device quality

Design controls are the core of device quality and the biggest conceptual jump for a pharma practitioner. The former §820.30, and the corresponding ISO 13485 clause 7.3, require a planned, documented design process for most Class II and Class III devices and a subset of Class I. The logic is a closed loop:

- **Design and development planning.** Define the plan, the stages, the responsibilities, and the review points before you start.
- **Design inputs.** Translate user needs and intended use into engineering requirements that are unambiguous and verifiable. Vague inputs ("the catheter should be comfortable") are a classic finding; inputs must be testable.
- **Design outputs.** The drawings, specifications, code, and acceptance criteria that result. Outputs must reference the acceptance criteria essential to proper functioning.
- **Design review.** Formal, documented reviews at planned stages, including an independent reviewer with no direct responsibility for the stage under review.
- **Design verification.** Confirms outputs meet inputs — *did we build the device right?* Bench testing, biocompatibility, electrical safety, dimensional analysis.
- **Design validation.** Confirms the device meets user needs and intended uses under actual or simulated use — *did we build the right device?* Often involves clinical or human-factors evidence on production-equivalent units.
- **Design transfer.** Ensures the design is correctly translated into production specifications. This is where the design record becomes the manufacturing record.
- **Design changes.** Identified, documented, reviewed, verified/validated as appropriate, and approved before implementation.
- **Design History File (DHF).** The compiled record demonstrating the design was developed per the plan.

The two words that trip people up are **verification** and **validation**. Verification proves outputs satisfy inputs. Validation proves the finished device satisfies the user's real-world need. A device can pass every verification test and still fail validation if the inputs themselves were wrong. That is why human factors and usability engineering (aligned with IEC 62366-1) matter: use errors, not component failures, drive a large share of serious device incidents.

For software, design controls extend into the software development lifecycle. **IEC 62304** defines lifecycle processes for medical device software, scaled by a safety classification (Class A/B/C by potential harm). FDA's premarket guidance on software functions and its 2023 cybersecurity guidance set expectations for software documentation and for securing connected devices — a Software Bill of Materials, threat modeling, and a plan to monitor and patch vulnerabilities across the device's supported life.

## Risk management ties it together: ISO 14971

You cannot run a modern device quality system without risk management, and the QMSR makes that explicit by pulling ISO 13485's risk requirements into U.S. law. The reference standard is **ISO 14971**, the application of risk management to medical devices. Its loop runs across the whole lifecycle:

1. **Risk analysis** — identify hazards, hazardous situations, and the sequences of events that lead to harm.
2. **Risk evaluation** — estimate probability and severity, compare against acceptability criteria.
3. **Risk control** — reduce risk by design first, then protective measures, then information for safety (the order matters; you do not warn your way out of a design hazard you could have engineered out).
4. **Residual risk evaluation** and overall benefit-risk determination.
5. **Production and post-production** — feed real-world data back in; complaints and field signals can change your risk picture.

Risk management is not a document you write once for the submission. It is a living file that design controls reference (risk drives design inputs), that production controls reference (risk drives which process parameters get validated and monitored), and that CAPA references (a confirmed complaint trend may invalidate a prior probability estimate). An investigator who pulls your risk management file and finds it frozen at the date of clearance, with no post-production input, has found a problem.

## CAPA: the subsystem inspectors open first

Corrective and Preventive Action is, in practice, the part of a device quality system everything else leans on, and historically the most-cited area in FDA inspections. The former §820.100, mirrored in ISO 13485 clauses 8.5.2 and 8.5.3, requires procedures that:

- **Analyze** quality data — complaints, returns, nonconformances, audit results, process monitoring — to detect existing and *potential* causes of nonconforming product.
- **Investigate** the cause of nonconformities with rigor proportional to risk.
- **Identify** the action needed to correct and prevent recurrence.
- **Verify or validate** that the action is effective and does not adversely affect the device.
- **Implement and record** the changes.
- **Disseminate** information to those responsible, and feed CAPA inputs into management review.

The common failure modes are predictable, and inspectors know them well:

- **Containment mistaken for correction.** Sorting out the bad lot is a correction. Stopping the cause from producing more bad lots is corrective action. Closing a CAPA at containment is a top finding.
- **Root cause that isn't.** "Operator error" is almost never a root cause; it is a symptom of a training, procedure, or design gap. Investigations that name the human and stop there tend to produce repeat events.
- **No effectiveness check.** Closing a CAPA without objective evidence that the action worked. Effectiveness verification needs a defined criterion and a defined check window.
- **Trend-blindness.** A complaint handling system that processes each complaint in isolation and never aggregates to detect a signal. CAPA must connect to complaint trending.

A strong CAPA system is risk-tiered: a minor cosmetic nonconformity does not get the same investigative weight as a complaint alleging patient harm. What it must always have is a closed loop with documented effectiveness.

## Complaint handling and its link to MDR

Complaint handling (former §820.198, ISO 13485 clause 8.2.2) requires a formally designated unit, documented procedures, and timely, uniform review of every complaint. Each complaint must be evaluated to determine whether it is reportable to FDA under the Medical Device Reporting regulation (21 CFR Part 803). That MDR evaluation is the bright line investigators probe: a manufacturer must report deaths and serious injuries, and certain malfunctions that could cause them, within defined timeframes. The complaint file has to show the reportability decision and its rationale.

Complaints, MDRs, returns, and service records are also CAPA inputs and risk-management inputs. The systems are not silos. An investigator reconstructs the chain: complaint received → evaluated → MDR decision → trend analysis → CAPA when a threshold is crossed → risk file updated. A break anywhere in that chain is what turns a single complaint into an enforcement problem.

## The device record set: DHF, DMR, DHR

Three records anchor device manufacturing, and the distinction is worth fixing in mind because pharma has no exact analog:

| Record | What it is | GMP analog (loose) |
|---|---|---|
| **DHF** — Design History File | The record proving the design was developed per the design plan | Development report / design space rationale |
| **DMR** — Device Master Record | The recipe: specifications, production processes, QA procedures, labeling, packaging — everything needed to make the device | Master batch record + specs |
| **DHR** — Device History Record | The as-built record for a specific unit or lot showing it was made per the DMR | Executed batch record |

Under ISO 13485 vocabulary these map to the "medical device file" and the controlled documented information that defines and records production, but the three jobs — how we proved the design, how we make it, how we made this one — persist. Design transfer is the moment DHF content becomes DMR content, and a sloppy transfer (an input that never made it into a production specification) is a recurring source of nonconformity.

## Production and process controls, and process validation

Where a manufacturing process result cannot be fully verified by subsequent inspection and test, it **must be validated** (former §820.75, ISO 13485 clause 7.5.6). This is the device framing of process validation, and it differs in emphasis from the pharmaceutical lifecycle.

Sterilization is the standard example. You cannot inspect a finished sterile device to confirm sterility without destroying it, so the sterilization process is validated to a defined sterility assurance level and then monitored: ethylene oxide validation follows ISO 11135, radiation sterilization ISO 11137, moist heat ISO 17665. Welds, adhesive bonds, injection-molded dimensions buried in an assembly, and software builds are other "special processes" that get validated because end-of-line inspection cannot fully confirm them.

The discipline often runs as IQ/OQ/PQ — installation, operational, and performance qualification — establishing that equipment is installed correctly, operates across its specified range, and consistently produces conforming product under production conditions. Device process validation leans hard on statistical rationale for sampling and on identifying the worst-case conditions the process must tolerate.

## How device QMS differs from pharma GMP

For a biotech or pharma practitioner moving into devices — or, increasingly, into combination products — the mental model has to shift on several axes:

- **Design controls have no GMP equivalent.** Drug GMP starts after the product is defined. Device quality systems own the design process itself, with formal inputs, outputs, verification, validation, and a design history file. This is the single largest conceptual gap.
- **Risk class is the dial.** Device requirements scale by class (I/II/III). Drug GMP applies fairly uniformly regardless of molecule; device controls are explicitly proportionate to harm potential.
- **Validation vocabulary diverges.** In devices, "verification" (outputs meet inputs) and "validation" (device meets user needs) are sharply distinct design-control terms. In drugs, "validation" usually means process or method validation. Same words, different referents — a frequent source of cross-functional confusion.
- **Risk management is a named, standard-driven discipline.** ISO 14971 gives devices a structured, auditable risk file. Pharma uses ICH Q9 for quality risk management, but it is not woven into a design-control loop the way 14971 is.
- **The records differ.** DHF/DMR/DHR have no clean drug analog; the executed batch record is closest to a DHR, but nothing in GMP corresponds to a design history file.
- **Post-market surveillance is structurally central.** Complaint handling → MDR → CAPA → risk-file update is a defined, inspected loop. Pharmacovigilance exists in drugs, but the device version is tightly bound into the quality system itself.

## Combination products: where drug and device meet

A combination product — a prefilled syringe, an autoinjector, a drug-eluting stent, an on-body delivery system, a drug-device kit — is where a biotech team inherits device quality obligations whether or not it expected to. The governing framework is **21 CFR Part 4**, FDA's current good manufacturing practice requirements for combination products. Part 4 lets a manufacturer operate under one base system and demonstrate compliance with the other through specified provisions, rather than running two complete quality systems in parallel:

- A facility operating under a **drug GMP** system (Parts 210/211) must additionally demonstrate compliance with a defined set of device provisions — including **design controls, purchasing controls, CAPA, installation, and servicing** — drawn from the device quality system.
- A facility operating under a **device quality system** must additionally demonstrate compliance with specified drug GMP provisions — such as testing and release, stability, and expiration dating.

This "streamlined" approach looks lighter than it is, because the device elements it bolts onto a drug system are precisely the ones drug organizations are least equipped to run. Design controls are the recurring pain point: a drug-led team that has never maintained a DHF, never run formal design verification and validation on a delivery device, and never done human-factors validation to IEC 62366-1 now owns all of it for the device constituent. Inspectors examining a combination-product site routinely probe whether the device-constituent design controls and CAPA are real and integrated, or paperwork added after the fact.

The QMSR transition matters here too. Because Part 4 references the device quality system, the move to ISO 13485-based requirements flows through to the device-constituent obligations of combination-product makers. A drug organization adding a device constituent should plan its combination-product quality system against the QMSR baseline, not the legacy QSR text.

Practical guardrails for a biotech entering this space:

1. **Stand up genuine design controls for the device constituent early.** Do not retrofit a DHF after design freeze. Build inputs from user needs and intended use, hold real design reviews with an independent reviewer, and run verification and validation as planned activities.
2. **Run risk management to ISO 14971 across the constituent and the combined product**, and connect it to design inputs and to post-market signals. A delivery-system use error can harm a patient as surely as a formulation defect.
3. **Treat human factors as a validation activity, not a marketing study.** Use-related risk on autoinjectors and on-body systems is a leading cause of serious incidents; usability validation to IEC 62366-1 is expected, and FDA has dedicated human-factors guidance.
4. **Integrate complaint handling so device-attributed events are evaluated for MDR and fed into CAPA and the risk file.** A combination-product complaint that names the device must route through the device reportability logic.
5. **Map your base system honestly against Part 4** and document which constituent's provisions you satisfy through which procedures. The streamlined option is only a saving if the cross-references are real and inspectable.

## What inspectors look for

Across the QSR and the QMSR, the inspection logic is stable. An investigator follows threads from a defect or complaint backward through your system and judges whether the loops actually close. Does CAPA reach root cause and verify effectiveness, or stop at containment? Does the risk file ingest post-production data, or sit frozen at clearance? Are design inputs testable and traced to verification and validation? Is the DHR consistent with the DMR? Are complaints evaluated for MDR reportability with documented rationale? Do management reviews surface the quality data and drive decisions? A system that documents loops but never closes them is the failure pattern, and it is the same pattern under ISO 13485 as it was under Part 820. That sameness is the point of harmonization: the structure changed, the question an inspector asks did not.

## Bottom line

The QMSR is less a new rulebook than a relabeling and tightening of one most global manufacturers already kept. ISO 13485:2016 becomes the U.S. baseline on February 2, 2026, with FDA-specific additions for records, labeling, UDI, MDR, and corrections-and-removals retained on top. Design controls, risk management to ISO 14971, CAPA with real root cause and effectiveness checks, disciplined complaint handling, and clean DHF/DMR/DHR records remain the substance of a defensible device quality system. For drug and biotech teams, the obligation usually arrives through a combination product, where Part 4 hands them device design controls and post-market surveillance duties their GMP training never covered. Build those elements as genuine, integrated loops rather than a documentation layer added after design freeze, and the transition is a consolidation instead of a scramble.

*This article is a neutral practitioner reference based on public FDA regulations and guidance and on published ISO/IEC standards. It is not legal or regulatory advice; verify current regulatory text and effective dates against the Code of Federal Regulations and the official standards before acting.*
