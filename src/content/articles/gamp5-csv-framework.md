---
title: "GAMP 5 Second Edition: The Framework for Risk-Based Computer System Validation"
description: "How GAMP 5 (2022) works in practice: software categories, the V-model, risk-based validation, and what the second edition changed. Written for people who have to apply the standard, not just cite it."
pubDate: 2025-09-02
tags: ["CSV", "GAMP", "validation", "GxP", "21-CFR-Part-11"]
pillar: "csv-csa"
tier: "Intermediate"
---

GAMP 5 is the most widely cited framework for computer system validation in the pharmaceutical industry. Published by ISPE (the International Society for Pharmaceutical Engineering), it provides a risk-based approach to validating computerized systems used in GxP activities. The second edition, published in July 2022, updated the framework to align with the FDA's Computer Software Assurance (CSA) thinking and to push back against the over-documentation that the first edition had unintentionally encouraged.

If you work in pharmaceutical quality, validation, or IT, you need to understand GAMP 5: not just the acronym, but the framework's actual logic and what it changes about how you approach validation. This article walks through the categories, the lifecycle, the test phases, and the judgment calls that separate a defensible validation file from a stack of paper that an inspector can pick apart.

---

## What GAMP 5 Actually Is

GAMP 5 is not a regulation. It is not FDA guidance. It is an industry good-practice framework published by a professional organization. That distinction matters: GAMP 5 compliance is not a legal requirement, but the principles it embodies (risk-based validation, documented evidence of fitness for intended use) map directly onto what regulators expect. When an FDA investigator or an EU qualified person reviews your validation, they will not ask "did you follow GAMP 5." They will ask whether you can demonstrate the system does what it is supposed to do and that the data it produces can be trusted. GAMP 5 is a route to that demonstration, not the demonstration itself.

The document's full title is "GAMP 5: A Risk-Based Approach to Compliant GxP Computerized Systems." The phrase "risk-based" is the central idea. Not all systems carry the same risk. Not all validation activities need to be documented to the same depth. The framework gives you the logic to decide what level of validation evidence is appropriate for a specific system used for a specific purpose in a specific operation. A spreadsheet that calculates a yield for an internal trend report and a manufacturing execution system that releases sterile product to patients both fall under "computerized systems," but treating them the same way is how validation programs either drown in paper or miss the systems that actually matter.

The 2022 second edition was issued to respond to more than a decade of industry experience with the first edition (2008) and to align with the FDA's CSA philosophy. The major shifts: greater emphasis on critical thinking over volume of documentation, explicit support for agile and iterative development, a more nuanced treatment of testing (including unscripted and exploratory testing), and a set of new appendices covering topics the 2008 edition could not have anticipated, including artificial intelligence and machine learning, IT service management, distributed ledger technology, and software tools used in development and testing.

For readers new to this space, two foundational pieces sit underneath everything below: [data integrity foundations](/articles/data-integrity-foundations) and the regulatory expectations in [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11). GAMP 5 is the engineering method; those two define what "trustworthy" means and what the law requires.

---

## The Software Category Model

The most practical tool in GAMP 5 is the software category system. It gives you a starting point for calibrating the depth of validation effort. The categories describe the nature of the software, which is a strong proxy for where the risk and uncertainty sit.

**Category 1: Infrastructure Software**
Operating systems, database engines, network components, virtualization layers, middleware, and antivirus tooling. Infrastructure software is not directly GxP-critical, but it underpins the systems that are. Validation here is really qualification: documented evidence that the infrastructure is installed, configured, and controlled. The focus is on the configuration that affects the GxP applications running on top, plus the procedures that keep that infrastructure under control over time (patching, backup, access). For depth on this layer, see [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation).

**Category 3: Non-Configured Software**
Software used as-is, with no configuration beyond basic installation settings. Examples include standalone instrument firmware used with default settings, simple data-acquisition utilities, and commercial tools run in their out-of-the-box state. The validation expectation is limited but not zero: documented evidence that the software performs as intended for the specific use being made of it. The trap here is assuming "we did not configure it" means "we do not need to test it." You still verify the functions you actually rely on.

**Category 4: Configured Software**
The largest and most important category in practice. Software configured to meet specific business requirements but not modified at the code level. This includes LIMS, electronic lab notebooks, manufacturing execution systems, electronic document management systems, chromatography data systems such as Empower or OpenLab, and most commercial off-the-shelf GxP platforms. The vendor supplies the underlying functionality; you configure workflows, user roles, calculations, limits, and reports. Validation effort concentrates on the configuration: proving the configuration meets the requirements, that it is documented and controlled, and that changes to it run through change control. The vendor's code is assumed to work as a baseline you can lean on (more on that under supplier assessment), so your testing energy goes into what you built on top.

**Category 5: Custom Software**
Software developed specifically for the purpose: bespoke applications, custom scripts that perform GxP calculations, macros, or significant code-level extensions to a commercial platform. Custom software carries the highest uncertainty because no other site has shaken out its defects for you. It requires the most thorough lifecycle treatment: design documentation, code review where appropriate, structural and functional testing, and tighter configuration management of the source itself.

> **Note on Category 2:** The original GAMP 5 (2008) included a Category 2 for firmware. The second edition removed Category 2 as a separate category. Firmware is now assessed as infrastructure, non-configured, or configured software depending on how it is used and whether it can be configured. If you maintain an older validation framework that still references five active categories, that is a sign it predates the second edition and should be refreshed.

Category assignment is a judgment, not a fact that drops out of a datasheet. The same commercial platform can be Category 4 for most deployments and effectively Category 5 in the modules where you wrote custom code. Document the assignment with rationale and revisit it when the system changes materially. A common and avoidable finding is a system validated as Category 3 or 4 that has quietly grown a layer of custom scripting nobody re-categorized.

---

## The V-Model Validation Lifecycle

The V-model is the structure for organizing validation activities across the system lifecycle. It lays out the phases of specification and verification as two arms of a "V," with the implementation at the bottom point. The power of the model is the horizontal relationship: each verification activity on the right tests a specific specification on the left.

**Left arm (specification):**
- User Requirements Specification (URS): what the users need the system to do, in business terms
- Functional Specification (FS): what functions the system must perform to satisfy the URS
- Configuration Specification / Design Specification: how the system will be configured or built to deliver those functions

**Bottom of the V (implementation):**
- System installation, configuration, and (for Category 5) development

**Right arm (verification):**
- Installation Qualification (IQ): verifies the system is installed and configured as designed
- Operational Qualification (OQ): verifies the system operates according to its functional specification
- Performance Qualification (PQ) or User Acceptance Testing (UAT): verifies the system meets user requirements in the intended use environment

Each level of the right arm traces back to its counterpart on the left: IQ verifies the design and configuration, OQ verifies the functional specification, PQ/UAT verifies the user requirements. That traceability is captured in a Requirements Traceability Matrix.

A frequent misreading of the V-model is treating it as a rigid waterfall that forbids iteration. The second edition is explicit that the V-model is a logical relationship between specification and verification, not a mandate to finish all specifications before any building or testing starts. Agile and incremental delivery are compatible with GAMP 5 as long as the linkage between requirements and verification holds and is documented. For a configured platform delivered in sprints, you can specify, build, and verify in increments, then pull the threads together into a coherent validation summary.

---

## Requirements Traceability

The Requirements Traceability Matrix (RTM) is the document that demonstrates your testing was complete: that every requirement was tested, and that every test executed traces back to a requirement. Without it, you can have a hundred test scripts and still be unable to show that the system does what it was supposed to do. It is also one of the first things a reviewer reaches for, because it exposes gaps fast: a requirement with no test, or a test with no requirement, both jump out.

A workable RTM structure:

| URS Req ID | Requirement Description | FS Ref | Risk | Test Script ID | Result | Status |
|---|---|---|---|---|---|---|
| URS-001 | System shall enforce individual user authentication | FS-004 | High | OQ-012 | Pass | Verified |
| URS-002 | System shall maintain an audit trail capturing prior value, user, date, and time for all GxP record changes | FS-007, FS-008 | High | OQ-018, OQ-019 | Pass | Verified |
| URS-014 | System shall produce a result certificate in the approved format | FS-021 | Medium | PQ-006 | Pass | Verified |

Adding a risk column is a small change that pays off: it lets you show, at a glance, that high-risk requirements received deeper or independent testing. The RTM is a living document. It is maintained throughout the lifecycle and updated when requirements change through [change control](/articles/change-control-validated-systems) or when testing surfaces a gap. A static RTM signed once and never touched again usually means the system drifted away from its own documentation.

---

## IQ, OQ, PQ: What Each Phase Actually Proves

These three qualifications are the backbone of the validation test record. They are often dismissed as bureaucratic boxes, but they are logically distinct phases that together build the case that a system is fit for use. Keeping them distinct in your head prevents the common failure of testing the same thing three times while missing something entirely.

**Installation Qualification (IQ)**
Verifies that the system is installed correctly: hardware matches what was specified, software is the version specified, and configuration settings match the approved design. IQ does not prove the system works. It proves you have the right system, installed and configured correctly, in the right place. IQ typically covers hardware inventory and specification, software and patch version confirmation, configuration baseline capture, network connectivity, integration points present, backup configuration, and the initial user-account and access-control setup matching the approved security design.

**Operational Qualification (OQ)**
Verifies that the system operates according to its functional specification: the functions it is supposed to perform actually work. This is where the system is exercised against the FS, function by function, under normal conditions and at boundaries and error conditions. Testing only the happy path is a recurring weakness; the interesting failures live at the edges. For a LIMS, OQ might cover sample login and result entry, specification-limit checking (including a result deliberately out of limit to confirm the flag fires), electronic approval workflows, audit-trail capture with prior-value retention, system-to-system interfaces, calculation accuracy against an independent reference, and access-control enforcement (confirming a user without rights is actually blocked, not just that an authorized user is allowed).

**Performance Qualification (PQ) / User Acceptance Testing (UAT)**
Verifies that the configured, operating system meets user requirements in its real use environment. This bridges "the system works" (OQ) and "the system does what we need in our operation." PQ tests follow actual business processes and are usually executed by the intended users with real or representative data and the site's own procedures. For the LIMS example, PQ might run a complete analytical workflow from sample receipt through result entry, second-person review, and batch disposition, confirming the data flows correctly and the people who will use it daily can do so following the trained procedure.

The boundaries between phases are not sacred, and the second edition encourages combining where it makes sense. Many organizations run integrated IQ/OQ for lower-risk Category 4 systems. What matters is coverage and traceability, not the number of separately bound documents. The [validation deliverables guide](/articles/validation-deliverables-guide) covers how these documents fit together across the project.

---

## Risk-Based Calibration in Practice

GAMP 5 explicitly supports applying more rigorous validation to higher-risk systems and functions, and less to lower-risk ones. This is the part most often quoted and least often done well, because "risk-based" is sometimes used as cover for testing less without the analysis to justify it. The calibration factors:

- **Patient and product impact.** What happens if the system, or a specific function within it, fails or produces wrong data? Does it affect product release, patient safety, or the integrity of a regulatory submission? A dosing calculation and a cosmetic label field do not carry the same weight.
- **Software complexity and novelty.** Custom code carries more uncertainty than configured commercial software, which carries more than infrastructure. Novel technology carries more than a well-worn product in wide use.
- **Supplier maturity.** A system from an established GxP vendor with a documented development lifecycle and a real quality management system carries less inherent risk than a bespoke internal tool maintained by one person.
- **Existing evidence.** Vendor test documentation, wide industry use, and prior inspection history all reduce uncertainty, which is what risk-based effort is really chasing.

Worked example. A Category 4 LIMS from a major vendor, deployed at hundreds of inspected sites, does not need the same depth as a custom application built internally last quarter. Both must be validated, but the scope differs. For the LIMS, you might rely on the vendor's functional testing for core platform behavior and focus your scripts on your configuration: your specifications, your calculations, your workflows, your interfaces, your security model. For the custom application, you cannot lean on anyone else, so you go deeper into design review, structural testing, and independent verification of every GxP-relevant function.

The discipline is to write this down. A validation plan that states what level of testing was applied to which functions and why, citing the specific risk factors, is defensible. "We applied a risk-based approach" with no documented analysis behind it is the version that gets cited, because an inspector cannot distinguish considered judgment from convenience. The mechanics of doing this rigorously are in [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology) and the broader [quality risk management](/articles/quality-risk-management) discipline that ICH Q9 underpins.

---

## Supplier Assessment

For Category 4 and 5 systems, the vendor's development practices and quality system directly affect the reliability of the software you are deploying, and therefore how much you can lean on their evidence. GAMP 5 supports using supplier activities: if the vendor has a documented, auditable development lifecycle, their testing and quality records can reduce, though not eliminate, the scope of your site validation.

Supplier assessment typically includes:
- Review of the vendor's quality management system documentation
- Assessment of their development, testing, and release practices
- Review of the product's regulatory compliance documentation, including the supplier's position on [Part 11 and Annex 11](/articles/21-cfr-part-11-eu-annex-11) controls such as audit trails, electronic signatures, and access control
- A vendor audit, on-site or remote, for higher-risk or custom systems

The output of the assessment feeds the validation plan. A mature supplier with strong, accessible documentation justifies relying on their evidence and trimming redundant site testing. A supplier with thin quality documentation forces more complete site-level testing to compensate for the uncertainty they leave you holding. One caution that surfaces in inspections: relying on supplier testing is only defensible if you have actually obtained and reviewed that documentation. Citing a vendor's testing you have never seen is worse than doing your own, because it implies a control that does not exist. The wider practice of qualifying and monitoring suppliers is covered in [supplier and vendor qualification](/articles/supplier-vendor-qualification).

---

## Where the Second Edition Changed the Game

It is worth pulling together what genuinely shifted in 2022, because the differences are not cosmetic.

| Area | 2008 First Edition | 2022 Second Edition |
|---|---|---|
| Categories | Categories 1, 2 (firmware), 3, 4, 5 | Category 2 removed; firmware assessed by use |
| Core emphasis | Lifecycle documentation | Critical thinking; documentation proportionate to risk |
| Development models | Largely sequential | Explicit support for agile and iterative delivery |
| Testing | Predominantly scripted | Scripted plus unscripted and exploratory testing |
| Scope of appendices | Conventional systems | Added AI/ML, IT service management, distributed ledger, dev tools |

The most consequential change is cultural rather than structural: the second edition repeatedly asks practitioners to apply critical thinking and to scale evidence to risk, rather than producing the same heavy package for every system. That sounds obvious, but the first edition was so often implemented as a documentation checklist that the framework became a byword for paperwork. The second edition is, in part, a correction of that drift.

---

## Common Failure Modes

A few patterns show up again and again in validation files that look complete but do not hold up:

- **Requirements written to match the software.** If the URS reads like the vendor's feature list, it is documenting what the system does rather than what you need. Requirements should come from your process first.
- **Testing only what works.** OQ scripts that never exercise an out-of-limit result, a denied login, or a rejected entry have not tested the controls that matter most.
- **Audit trail assumed, not verified.** Confirm the trail captures the old value, new value, who, when, and why where required, and confirm it cannot be switched off by ordinary users. See [audit trail design and review](/articles/audit-trail-design-and-review).
- **Frozen documents.** An RTM, configuration specification, or validation summary that no longer matches the live system is itself a finding, regardless of how good the original validation was.
- **Risk-based as a slogan.** Reduced testing with no documented risk rationale reads, to a reviewer, as untested.

For the operational side of keeping a system validated after go-live, including periodic review and the ongoing controls that prove the validated state is maintained, see [GxP computerized systems operations](/articles/gxp-computerized-systems-operations) and the [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review).

---

## GAMP 5 and the FDA's CSA Guidance

The FDA finalized its Computer Software Assurance guidance for production and quality system software in 2026, following the September 2022 draft. The CSA guidance aligns closely with the GAMP 5 second edition philosophy but comes at it from the regulatory angle rather than the industry good-practice angle. The shorthand: CSA asks you to assure software is fit for its intended use using effort proportionate to risk, and to spend more on assurance and less on documentation for its own sake. That is the same instinct GAMP 5 second edition codifies.

The two are complementary, not competing. A GAMP 5 validation approach, applied with genuine risk-based calibration, satisfies the intent of CSA. The 2022 second edition was developed with awareness of the evolving CSA thinking, and the two bodies of work point in the same direction: critical thinking, risk-proportionate evidence, and reliance on credible existing testing. The full treatment is in the [Computer Software Assurance article](/articles/computer-software-assurance-fda).

One practical point to close on: use the second edition, not the 2008 first edition. If your procedures, templates, and training still reflect the first edition (five active categories, a documentation-first posture, a strictly sequential V-model), you are working from a framework that no longer matches either current industry practice or current FDA thinking. Updating to the second edition is not a paperwork refresh. It is the difference between a validation program that scales effort to risk and one that defends itself by sheer volume.
