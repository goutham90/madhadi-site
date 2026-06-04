---
title: "The GxP Validation Deliverable Set: What Each Document Is Actually For"
description: "A practitioner's guide to the full set of computer system validation documents, URS, FRS, IQ/OQ/PQ protocols, RTM, validation plan and report, and what each one is actually trying to accomplish."
pubDate: 2026-01-06
tags: ["CSV", "validation", "GxP", "GAMP", "documentation"]
pillar: "csv-csa"
tier: "Intermediate"
---

One of the most common frustrations in computer system validation is generating documents without understanding what they're actually for. Teams write URS documents that are really FRS documents, execute test scripts that don't trace to any requirement, and produce validation summary reports that summarize nothing of substance. The output looks like a validation package; the underlying logic is absent.

This article breaks down the core validation deliverables, what each document is for, what makes it useful rather than just complete, and the common mistakes that turn each document into overhead.

The framework is GAMP 5 (second edition, 2022) aligned, using the IQ/OQ/PQ structure that remains the industry standard.

---

## Validation Plan

**Purpose:** Defines what will be validated, how, and why. The master document that governs the entire validation effort for a system.

**What it must contain:**
- System description and intended GxP use
- Regulatory basis for validation (which regulations and guidance apply)
- Scope: what is included and explicitly what is excluded
- Software category assignment (GAMP 5) with rationale
- Validation approach, risk-based rationale for the testing depth and type
- Deliverables list
- Roles and responsibilities
- Acceptance criteria for successful validation completion
- Change control and deviation handling during validation

**What makes it useful:** A validation plan that states "the system will be validated per GAMP 5" is not useful. A useful validation plan states what aspects of the system carry what risks, what testing will address those risks, and what level of documentation will result. The reasoning should be present in the document, not implied.

**Common mistakes:** Validation plans written at the beginning and never updated when scope changes. Plans that list deliverables without describing what makes each deliverable complete. Scope statements that are vague enough to justify almost any testing depth.

---

## User Requirements Specification (URS)

**Purpose:** Documents what the users need the system to do. Written before system selection, from the users' perspective, without reference to how the system will accomplish each requirement.

**What it must contain:**
- Business requirements: what business processes the system supports
- Functional requirements (at the user level): what the system must be able to do
- GxP-specific requirements: audit trail, access control, electronic signature, data retention, data export
- Non-functional requirements: performance, availability, integration needs
- Regulatory and compliance requirements

**What makes it useful:** A URS written from the user's perspective, not IT's. Requirements stated as outcomes ("the system shall prevent unauthorized modification of approved results") rather than implementations ("the system shall use row-level locking"). A good URS can be used to evaluate candidate systems against user needs, to write test acceptance criteria, and to trace test results back to requirements.

**Common mistakes:** URS written after system selection to justify a decision already made. Requirements that describe the existing system rather than what's needed. Missing GxP requirements (the URS that doesn't mention audit trails, access controls, or electronic signatures is not a GxP URS).

---

## Functional Requirements Specification (FRS)

**Purpose:** Translates URS requirements into specific functional behaviors the system must exhibit. Where the URS is user-language ("the system shall allow QA review and approval of test results"), the FRS is more specific about the mechanism ("the system shall implement a two-step approval workflow requiring the original analyst and a QA reviewer, with electronic signatures captured for each step").

**What makes it useful:** Direct traceability to URS requirements, so that every FRS item can be traced back to a business need. FRS items at a level of specificity that makes testing tractable, you should be able to write a test script directly from an FRS statement.

**Note:** For some organizations, the URS and FRS are combined into a single document. For complex systems with multiple stakeholders, keeping them separate helps maintain the distinction between "what users need" and "what the system must do." Neither approach is wrong; what matters is that both layers of requirements are captured.

---

## Configuration Specification (CS) / Design Specification (DS)

**Purpose:** Documents how the system will be configured to meet the functional requirements. For Category 4 (configured) systems, this is where configuration settings, system parameters, and the approved configuration baseline are captured.

**What it must contain:**
- Configuration settings that affect GxP functionality (especially audit trail configuration, access control settings, workflow configurations)
- User roles and permissions matrix
- System interfaces and integration specifications
- Data retention and archival configuration

**What makes it useful:** A configuration specification that describes the approved configuration with enough detail to verify it during IQ, and to detect deviations from it during periodic review or after changes.

---

## Requirements Traceability Matrix (RTM)

**Purpose:** Maps each URS requirement to the FRS requirement(s) that address it, and to the test script(s) that verify it. shows that testing coverage is complete.

**Structure:**

| URS Req | Description | FRS Ref | Test ID | Pass/Fail | Notes |
|---|---|---|---|---|---|
| URS-001 | Individual user authentication required | FRS-012 | OQ-015 | Pass | |
| URS-002 | Audit trail captures prior value for result modifications | FRS-031, FRS-032 | OQ-027, OQ-028 | Pass | |

**What makes it useful:** Built alongside the documents it traces, not assembled at the end from completed documents. A living RTM that gets updated as requirements change and tests are executed is a meaningful quality management tool. An RTM assembled after the fact to close out a validation package is overhead.

**Common mistakes:** RTMs that trace FRS requirements to tests but not URS requirements to FRS, leaving the connection between business needs and testing unestablished. RTMs with "N/A" for requirements that weren't tested (with no documented rationale for why testing was unnecessary).

---

## Installation Qualification (IQ) Protocol and Report

**Purpose:** Verifies that the system was installed correctly, that the hardware, software, and configuration match the approved design.

**What to test in IQ:**
- Hardware inventory against specification (servers, clients, peripherals)
- Software version confirmation (application, database, OS)
- Configuration settings against the Configuration Specification
- Network connectivity and integration points
- Backup system installation and configuration
- User account initial setup per approved access control design
- Documentation verification (installation guides, configuration records)

**What makes IQ useful:** An IQ executed by someone who actually checks each item, not just reads it off and checks boxes. Configuration verification means looking at the system settings, not just asking the administrator. Software version confirmation means verifying the version string in the application, not just reading the installation summary.

**The IQ report:** Summarizes execution, documents any deviations from the protocol (investigated and resolved or accepted), and concludes whether IQ criteria were met.

---

## Operational Qualification (OQ) Protocol(s) and Report(s)

**Purpose:** Verifies that the system operates according to its functional requirements.

**What to test in OQ:**
- Every FRS requirement that has a testable behavior
- Boundary and edge conditions for critical functions
- Error handling and system response to unexpected inputs
- GxP-critical controls: audit trail capture, access control enforcement, electronic signature behavior, data export completeness

**Design of OQ test scripts:**
Each test script should state: the requirement being tested (FRS reference), the preconditions, the exact steps to execute, the expected result, and the acceptance criteria. The expected result must be defined before execution, not after observing what the system does.

For audit trail testing specifically: test that the trail captures the event, the user ID, the timestamp, the field modified, the previous value, and the new value. Execute a modification and verify each element. This is a test that many validation packages get wrong, the test script says "verify audit trail captures modification" and the expected result is "audit trail is present," without specifying what it must contain.

**Deviations:** When a test result doesn't match the expected result, a deviation is opened. Deviations must be investigated before OQ is considered complete. A deviation resolved by updating the expected result (because the system does something different from what was specified) may indicate a requirements gap, not a test failure, but it must be handled transparently and documented.

---

## Performance Qualification (PQ) / User Acceptance Testing (UAT)

**Purpose:** Verifies that the configured and operating system meets user requirements in its actual use context. Typically executed by the intended users (analysts, operators, QA reviewers) against complete business process workflows.

**What to test in PQ/UAT:**
- End-to-end business processes (not just individual functions)
- Integrations with adjacent systems under real conditions
- Performance under expected load
- Operator usability in context (can the intended users actually use the system to accomplish their tasks?)

**Who executes PQ/UAT:** Ideally, the functional users who will use the system in production, not just the validation team. This catches usability issues, workflow gaps, and integration problems that aren't visible from functional testing alone.

---

## Validation Summary Report (VSR)

**Purpose:** Summarizes the validation effort, its outcomes, and the conclusion that the system is validated for its intended use.

**What it must contain:**
- Summary of the validation scope and approach
- Results of each qualification phase (IQ, OQ, PQ), what was tested, what was found
- Summary of all deviations and their resolution
- RTM completion status, all requirements tested
- Any residual risk or accepted limitation
- Conclusion: the system is validated for [specific intended use] as defined in the URS, with [any conditions or limitations]
- Approval signatures from QA and the system owner

**What makes it useful:** A VSR that can stand alone as a summary of the validation evidence, someone who reads only the VSR should be able to understand what the system does, why it was validated, what evidence was generated, and what the conclusion is. A VSR that is two pages of "all protocols were executed and passed" is not useful.

---

## Change Control and Revalidation

Validation doesn't end at go-live. Every significant change to a validated system, new software version, configuration change, new interface, new user population, requires documented impact assessment and, where the change affects validated functions, revalidation testing.

The change control record should document:
- Description of the change
- Impact assessment against validated functions and GxP controls (especially audit trail, access control, electronic signatures)
- Testing scope and rationale
- Updated validation documentation (RTM, configuration specification, as applicable)
- QA approval before implementation

A validated system that has been through ten undocumented software updates is not, in practical terms, a validated system. The state of validation is defined by the documentation, and the documentation must be kept current.

---

## Periodic Review

Validated systems require periodic review to confirm they remain in a validated state. Periodic review (typically annual) covers:

- Confirmation that the current software version matches the validated version
- Review of change controls executed since last review
- Review of any incidents or failures since last review
- Review of audit trail configuration (is it still complete and correctly configured?)
- Assessment of whether the intended use has changed
- Conclusion: system remains in a validated state / re-qualification required

Periodic review is often underprioritized, it produces no new validation documentation, so it's easy to deprioritize in favor of new system validations. But a system that passed its original OQ in 2018, has had three software updates, and has never had a periodic review is a finding waiting to happen.
