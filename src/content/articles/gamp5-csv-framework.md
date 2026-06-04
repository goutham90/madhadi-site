---
title: "GAMP 5 Second Edition: The Framework for Risk-Based Computer System Validation"
description: "How GAMP 5 (2022) works in practice, software categories, the V-model, risk-based validation, and what the second edition changed. For practitioners who need to understand the standard, not just cite it."
pubDate: 2025-09-02
tags: ["CSV", "GAMP", "validation", "GxP", "21-CFR-Part-11"]
pillar: "csv-csa"
tier: "Intermediate"
---

GAMP 5 is the most widely cited framework for computer system validation in the pharmaceutical industry. Published by ISPE (the International Society for Pharmaceutical Engineering), it provides a risk-based approach to validating computerized systems used in GxP activities. The second edition, published in 2022, updated the framework significantly to align with the FDA's Computer Software Assurance (CSA) concept and reduce the documentation burden of over-engineering.

If you work in pharmaceutical quality, validation, or IT, you need to understand GAMP 5. Not just the acronym, the framework's actual logic and what it changes about how you approach validation.

---

## What GAMP 5 Actually Is

GAMP 5 isn't a regulation. It isn't FDA guidance. It's an industry best-practice framework published by a professional organization. This matters because GAMP 5 compliance is not a legal requirement, but the principles it embodies (risk-based validation, documented evidence of fitness for intended use) align directly with what FDA and EMA expect.

The document's full title is "GAMP 5: A Risk-Based Approach to Compliant GxP Computerized Systems." That phrase, risk-based, is the central idea. Not all systems carry the same risk. Not all validation activities need to be documented to the same depth. The framework gives you the logic to decide what level of validation evidence is appropriate for a specific system in a specific context.

The 2022 second edition was issued to respond to years of industry experience with the first edition (2008) and to align with FDA's CSA philosophy (which FDA finalized in February 2026). The key updates: greater emphasis on critical thinking over documentation, explicit support for agile development approaches, a more nuanced discussion of testing approaches, and new appendices covering AI/ML systems, IT infrastructure, blockchain, and the Enabling Innovation framework.

---

## The Software Category Model

The most practical tool in GAMP 5 is the software category system. It provides a starting point for calibrating the depth of validation effort.

**Category 1, Infrastructure Software**
Operating systems, database platforms, network components, middleware. Infrastructure software is not directly GxP-critical, but it supports the systems that are. Validation typically consists of qualification records confirming the infrastructure is installed and configured correctly, with focus on the configuration that affects GxP systems.

**Category 3, Non-Configured Software**
Software used as-is, with no configuration beyond basic installation settings. Examples: standard office productivity tools used for non-GxP purposes, visualization tools, utilities. Limited validation required: documented evidence that the software functions as intended for the use being made of it.

**Category 4, Configured Software**
The largest and most important category in practice. Software that is configured to meet specific business requirements but not modified at the code level. This includes LIMS, ELN, MES, document management systems, HRMS, and most commercial off-the-shelf (COTS) GxP platforms. The vendor provides the underlying functionality; the company configures it. Validation effort focuses on the configuration, proving that the configuration meets the requirements, that it's controlled, and that changes to it are managed.

**Category 5, Custom Software**
Software developed specifically for the purpose, bespoke applications, custom scripting within a platform, or significant extensions to a commercial platform. Custom software carries the highest risk and requires the most thorough validation, including software lifecycle documentation, code review, and more extensive testing.

> **Note:** The original GAMP 5 (2008) had five categories, including a Category 2 for firmware. The 2022 second edition consolidated categories, Category 2 no longer exists as a separate category. Firmware is now addressed under infrastructure or configured software depending on context. Verify against your access to the ISPE GAMP 5 second edition for the specific current categorization.

Category assignment should be documented with rationale and reviewed when the system changes significantly.

---

## The V-Model Validation Lifecycle

The V-model is the structure for organizing validation activities across the system lifecycle. It represents the phases of development and testing as two arms of a "V":

**Left arm (specification):**
- User Requirements Specification (URS), what the users need the system to do
- Functional Requirements Specification (FRS/FS), what functions the system must perform to meet the URS
- Design Specification / Configuration Specification, how the system will be built or configured to meet the FRS

**Bottom of the V (implementation):**
- System installation, configuration, development

**Right arm (testing/verification):**
- Installation Qualification (IQ), verifies the system is installed as designed
- Operational Qualification (OQ), verifies the system operates as specified
- Performance Qualification (PQ) / User Acceptance Testing (UAT), verifies the system meets user requirements in the intended use environment

Each level of the right arm traces back to the corresponding level on the left: IQ tests the design specification, OQ tests the functional requirements, PQ/UAT tests the user requirements. This traceability is captured in a Requirements Traceability Matrix (RTM), which is one of the key validation deliverables.

---

## Requirements Traceability

The RTM is the document that demonstrates your testing was complete, that every requirement in the URS was tested, and that every test executed traces back to a requirement. Without it, you can have a hundred test scripts and still not be able to show that the system does what it was supposed to do.

An RTM structure:

| URS Requirement ID | Requirement Description | FRS Ref | Test Script ID | Test Result | Status |
|---|---|---|---|---|---|
| URS-001 | System shall enforce individual user authentication | FRS-004 | OQ-012 | Pass | Verified |
| URS-002 | System shall maintain audit trail for all result modifications | FRS-007, FRS-008 | OQ-018, OQ-019 | Pass | Verified |

The RTM is maintained throughout the validation lifecycle and updated when requirements change (via change control) or when testing reveals gaps.

---

## IQ, OQ, PQ: What Each Phase Actually Proves

These three qualifications are the backbone of the validation test record. They're often misunderstood as bureaucratic boxes to check; they're actually logically distinct phases that collectively prove the system is fit for use.

**Installation Qualification (IQ)**
Verifies that the system is installed correctly, hardware is what was specified, software is the version specified, configuration settings match the approved design. IQ doesn't prove the system works; it proves you have the right system, installed correctly.

IQ typically covers: hardware inventory and specification verification, software version confirmation, initial configuration verification, network connectivity, backup system verification, and user account setup per the approved access control design.

**Operational Qualification (OQ)**
Verifies that the system operates according to its functional requirements, that the functions it's supposed to perform actually work. This is where the system is tested against the FRS: each specified function is exercised, typically under both normal conditions and edge/boundary conditions.

For a LIMS, OQ testing might cover: sample login and result entry, specification limit checking, electronic approval workflows, audit trail capture (including prior value capture), system-to-system interfaces, and access control enforcement.

**Performance Qualification (PQ) / User Acceptance Testing (UAT)**
Verifies that the configured and operating system meets user requirements in its actual use environment. This is the bridge between "the system works" (OQ) and "the system does what we need it to do in our operation." PQ tests are typically based on actual business processes, often executed by the intended users.

For the LIMS example: PQ might test a complete analytical workflow from sample receipt through result review and batch disposition, using real or representative data and the actual procedures the site uses.

---

## Risk-Based Calibration

GAMP 5 explicitly supports applying more rigorous validation to higher-risk systems and functions, and less rigorous validation where the risk is lower. The calibration factors include:

- **Business risk:** What happens if the system fails? Does it affect product release, patient safety, regulatory compliance?
- **Software complexity:** Custom code carries more risk than configured COTS; configured COTS carries more risk than infrastructure.
- **Supplier maturity:** A system from an established GxP vendor with a documented software development lifecycle and quality management system has less inherent risk than a bespoke internal tool.
- **Existing evidence:** Vendor testing documentation, regulatory agency endorsements, industry-wide use, all reduce the validation burden because they reduce the uncertainty.

A Category 4 LIMS from a major vendor that has been deployed at 500 FDA-inspected sites does not need the same level of testing as a custom Python application built internally. Both need validation; the scope differs based on risk.

This risk-based calibration should be documented, not just applied informally. A validation plan that states what level of testing was applied and why, citing the risk factors, is a defensible document.

---

## Supplier Assessment

For Category 4 and 5 systems, the vendor's development practices and quality system affect the reliability of the software you're deploying. GAMP 5 supports use supplier activities, if the vendor has a documented, auditable software development lifecycle, their testing and quality records can reduce the scope of the site validation effort.

Supplier assessment typically includes:
- Review of the vendor's quality management system documentation
- Assessment of the vendor's development and testing practices
- Review of the system's regulatory compliance documentation (Part 11 assessment, EU Annex 11 considerations)
- Audit of the vendor's facilities (for high-risk, custom systems)

The outcome of the supplier assessment affects the validation plan: a mature supplier with strong documentation can justify reducing redundant testing at the site level. A supplier with limited quality management documentation requires more comprehensive site-level testing to compensate.

---

## GAMP 5 and the FDA's CSA Guidance

FDA finalized its Computer Software Assurance (CSA) guidance on February 3, 2026, the culmination of a process that started with the September 2022 draft. The CSA guidance aligns closely with GAMP 5's second edition philosophy but approaches it from the regulatory enforcement angle rather than the industry best-practice angle. The CSA guidance is covered in detail in the [CSA article](/articles/computer-software-assurance-fda), but the key point here is that GAMP 5 and the FDA CSA final guidance are complementary, not competing. A GAMP 5-compliant validation approach, applied with appropriate risk-based calibration, satisfies the intent of the CSA guidance.

The 2022 GAMP 5 second edition was developed with awareness of the evolving CSA approach, and ISPE participated in FDA discussions around CSA. Using the second edition (not the 2008 first edition) is important if you want alignment with current FDA thinking.
