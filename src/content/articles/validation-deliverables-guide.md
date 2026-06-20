---
title: "The GxP Validation Deliverable Set: What Each Document Is Actually For"
description: "A working guide to the full set of computer system validation documents, URS, FRS, IQ/OQ/PQ protocols, RTM, validation plan and report, and what each one is actually trying to accomplish."
pubDate: 2026-01-06
tags: ["CSV", "validation", "GxP", "GAMP", "documentation"]
pillar: "csv-csa"
tier: "Intermediate"
---

One of the most common frustrations in computer system validation is generating documents without understanding what they are actually for. Teams write URS documents that are really FRS documents, execute test scripts that do not trace to any requirement, and produce validation summary reports that summarize nothing of substance. The output looks like a validation package. The underlying logic is absent.

This matters because the deliverable set is not a checklist of files an inspector wants to see. It is the evidence chain that lets you defend a single claim: this system does what we need it to do, it does only that, and we can prove both. Every document in the set exists to support one link in that chain. When a document loses its connection to that purpose, it becomes paper that costs money to produce, costs more to maintain, and protects no one when the system fails.

This article breaks down the core validation deliverables, what each document is for, what makes it useful rather than just complete, and the common mistakes that turn each document into overhead. The framework is GAMP 5 (Second Edition, 2022) aligned, using the IQ/OQ/PQ structure that remains the industry standard, and it maps to the regulatory expectations in 21 CFR Part 11, EU GMP Annex 11, and the data integrity guidances published by the FDA, MHRA, and PIC/S.

---

## The deliverable set as a single argument

Before looking at individual documents, it helps to see the whole. The validation lifecycle is a V-model. Requirements descend the left arm of the V, each becoming more specific: user needs, then functional behavior, then configuration and design. Testing climbs the right arm, each stage verifying the matching layer on the left: design is checked at IQ, function at OQ, user need at PQ. The Requirements Traceability Matrix is the horizontal line that ties left to right, proving every requirement was both built and tested.

The table below shows how the pieces line up. Read it as one argument, not nine separate forms.

| Document | Question it answers | When produced | Verified by |
|---|---|---|---|
| Validation Plan | What will we validate, how, and why? | Before execution | Closed by the VSR |
| URS | What do the users need? | Before system selection | PQ / UAT |
| FRS | What must the system do to meet those needs? | After selection | OQ |
| Configuration / Design Spec | How is the system built or set up? | During build/config | IQ |
| RTM | Is every requirement built and tested? | Built continuously | Reviewed at each stage |
| IQ | Was it installed and configured as specified? | At install | IQ report |
| OQ | Does each function work as specified? | After install | OQ report |
| PQ / UAT | Does it meet user needs in real use? | Before go-live | PQ report |
| Validation Summary Report | Is the system fit for intended use? | At completion | QA and owner approval |

A reader new to GxP should hold one idea: each document on the left is answered by a test on the right, and the RTM is what stops anything from slipping through the gap between them. A senior reviewer reads the same table differently, as a map of where validation effort should scale up or down based on risk. Both readings are correct.

---

## Validation Plan

**Purpose:** Defines what will be validated, how, and why. It is the master document that governs the entire validation effort for a single system. It sits below the site Validation Master Plan, which governs the whole estate of systems and is covered separately in [Validation Master Plan and Periodic Review](/articles/validation-master-plan-and-periodic-review).

**What it must contain:**
- System description and intended GxP use
- Regulatory basis for validation (which regulations and guidance apply)
- Scope: what is included and explicitly what is excluded
- Software category assignment per GAMP 5 with rationale
- Validation approach, the risk-based rationale for testing depth and type
- Deliverables list
- Roles and responsibilities
- Acceptance criteria for successful validation completion
- Change control and deviation handling during validation

**What makes it useful:** A validation plan that states "the system will be validated per GAMP 5" is not useful. A useful plan states what aspects of the system carry what risks, what testing addresses those risks, and what level of documentation results. The reasoning belongs in the document, not implied. The GAMP 5 category assignment is the hinge here, because it sets the default effort for everything downstream. A Category 1 infrastructure component (operating system, database engine) is qualified, not validated from scratch. A Category 3 non-configured product is tested as used. A Category 4 configured product needs its configuration specified and verified. A Category 5 bespoke or custom-coded system carries the full weight of design review and structural testing. State the category and the reason, then let the rest of the plan follow from it.

**Worked example:** A laboratory information management system (LIMS) bought off the shelf but configured with site-specific workflows, sample types, and approval routes is Category 4. The plan should say so, and should say that the configuration is the highest-risk area, so configuration verification at IQ and workflow testing at OQ will be the deepest parts of the package. The vendor's standard, unconfigured functions can rely on supplier testing rather than full re-execution. That single paragraph of reasoning is worth more than ten pages of generic boilerplate.

**Common mistakes:** Plans written at the start and never updated when scope changes. Plans that list deliverables without describing what makes each one complete. Scope statements vague enough to justify almost any testing depth, which in practice means the testing depth gets decided by whoever runs out of time first.

---

## User Requirements Specification (URS)

**Purpose:** Documents what the users need the system to do. Written before system selection, from the users' perspective, without reference to how the system will accomplish each requirement.

**What it must contain:**
- Business requirements: what processes the system supports
- Functional requirements at the user level: what the system must be able to do
- GxP-specific requirements: audit trail, access control, electronic signature, data retention, data export
- Non-functional requirements: performance, availability, integration needs
- Regulatory and compliance requirements

**What makes it useful:** A URS written from the user's perspective, not IT's. Requirements stated as outcomes ("the system shall prevent unauthorized modification of approved results") rather than implementations ("the system shall use row-level locking"). A good URS can evaluate candidate systems against user needs, write test acceptance criteria, and trace test results back to requirements.

Every requirement should be atomic, testable, and uniquely numbered. Atomic means one requirement per statement, so "the system shall capture and report results" is two requirements wearing one ID. Testable means you can write a pass or fail condition for it, which rules out "the system shall be user-friendly." Uniquely numbered means the ID never gets reused even if the requirement is later deleted, because the RTM and your test records point at that number forever.

The GxP requirements deserve special attention because they are the ones an inspector will test against. Audit trail, access control, and electronic signatures map directly to Part 11 and Annex 11 expectations. Treat them as first-class requirements with their own IDs, not as a footnote. The [Part 11 and Annex 11 Practical Guide](/articles/part-11-annex-11-practical-guide) covers what those controls have to do.

**Common mistakes:** URS written after system selection to justify a decision already made. Requirements that describe the existing system rather than what is needed. Missing GxP requirements, because a URS that does not mention audit trails, access controls, or electronic signatures is not a GxP URS.

---

## Functional Requirements Specification (FRS)

**Purpose:** Translates URS requirements into specific functional behaviors the system must exhibit. Where the URS is user language ("the system shall allow QA review and approval of test results"), the FRS is specific about mechanism ("the system shall implement a two-step approval workflow requiring the original analyst and a QA reviewer, with electronic signatures captured for each step").

**What makes it useful:** Direct traceability to URS requirements, so every FRS item traces back to a business need. FRS items at a level of specificity that makes testing tractable. You should be able to write a test script directly from an FRS statement without inventing detail.

A useful test: take any FRS line and ask whether two reasonable engineers would build the same thing from it. If the answer is no, the statement is still at URS altitude and needs more detail. If the FRS starts naming database tables and code modules, it has dropped into design and belongs in the design specification instead. The FRS lives in the middle: specific enough to test, abstract enough to survive a configuration change.

**Note on combining documents:** Some organizations combine URS and FRS into a single requirements document. For simple Category 3 products this is reasonable and reduces overhead. For complex Category 4 and 5 systems with many stakeholders, keeping them separate preserves the distinction between "what users need" and "what the system must do," which matters when a user need stays constant but the implementation changes. Neither approach is wrong. What matters is that both layers of reasoning are captured and that the split, or the merge, is stated in the validation plan rather than discovered later.

---

## Configuration Specification (CS) / Design Specification (DS)

**Purpose:** Documents how the system will be configured or built to meet the functional requirements. For Category 4 configured systems, the configuration specification captures settings, parameters, and the approved configuration baseline. For Category 5 custom systems, a design specification captures the architecture, data model, and code-level design, and triggers additional source code review and structural testing.

**What it must contain:**
- Configuration settings that affect GxP functionality, especially audit trail configuration, access control settings, and workflow configurations
- User roles and permissions matrix
- System interfaces and integration specifications
- Data retention and archival configuration

**What makes it useful:** A configuration specification detailed enough to verify the setup during IQ and to detect drift during periodic review or after a change. The baseline is the point. If you cannot tell from the document whether the live system still matches what was approved, the document is not doing its job. Capture exact values, not descriptions: "password minimum length 8, complexity enabled, account lockout after 5 failed attempts," not "passwords are configured securely." When a setting is left at the vendor default, say so explicitly, because "default" is a moving target across product versions.

---

## Requirements Traceability Matrix (RTM)

**Purpose:** Maps each URS requirement to the FRS requirement(s) that address it, and to the test script(s) that verify it. It shows that testing coverage is complete and, just as importantly, that no test exists without a requirement behind it.

**Structure:**

| URS Req | Description | FRS Ref | Test ID | Pass/Fail | Notes |
|---|---|---|---|---|---|
| URS-001 | Individual user authentication required | FRS-012 | OQ-015 | Pass | |
| URS-002 | Audit trail captures prior value for result modifications | FRS-031, FRS-032 | OQ-027, OQ-028 | Pass | |
| URS-014 | Approved results cannot be edited | FRS-040 | OQ-033, PQ-006 | Pass | Negative test |

**What makes it useful:** Built alongside the documents it traces, not assembled at the end from finished files. A living RTM that updates as requirements change and tests execute is a real quality tool. An RTM reverse-engineered after the fact to close out a package is overhead that also tends to hide gaps, because it is written by someone whose goal is a clean grid rather than honest coverage.

Trace in both directions. Forward tracing (requirement to test) proves coverage. Backward tracing (test to requirement) catches orphan tests, which usually signal either scrap work or, more interestingly, a behavior the system has that nobody asked for and nobody assessed for GxP impact. Both directions matter, and an RTM that only goes forward is doing half the job.

**Common mistakes:** RTMs that trace FRS to tests but never trace URS to FRS, leaving the link between business need and testing unestablished. RTMs with "N/A" for untested requirements and no documented rationale for why testing was unnecessary, which converts a deliberate scoping decision into what reads like an omission.

---

## Installation Qualification (IQ) Protocol and Report

**Purpose:** Verifies that the system was installed correctly and that hardware, software, and configuration match the approved design.

**What to test in IQ:**
- Hardware inventory against specification (servers, clients, peripherals)
- Software version confirmation (application, database, operating system)
- Configuration settings against the Configuration Specification
- Network connectivity and integration points
- Backup system installation and configuration
- User account initial setup per approved access control design
- Documentation verification (installation guides, configuration records)

**What makes IQ useful:** An IQ executed by someone who actually checks each item rather than reading it off and ticking boxes. Configuration verification means looking at the live system settings, not asking the administrator what they should be. Software version confirmation means reading the version string inside the application, not the installer summary. Capture the evidence: a screenshot of the version dialog, an export of the audit trail configuration, the actual permissions matrix pulled from the system. An IQ whose evidence is the executor's signature and nothing else is hard to defend two years later when the version in front of an inspector does not match.

**The IQ report:** Summarizes execution, documents any deviations from the protocol (investigated and resolved or accepted), and concludes whether IQ criteria were met. For depth on aligning IQ with broader asset qualification, see [Equipment Qualification Lifecycle](/articles/equipment-qualification-lifecycle).

---

## Operational Qualification (OQ) Protocol(s) and Report(s)

**Purpose:** Verifies that the system operates according to its functional requirements.

**What to test in OQ:**
- Every FRS requirement that has a testable behavior
- Boundary and edge conditions for critical functions
- Error handling and system response to unexpected inputs
- GxP-critical controls: audit trail capture, access control enforcement, electronic signature behavior, data export completeness

**Design of OQ test scripts:** Each script should state the requirement being tested (FRS reference), the preconditions, the exact steps, the expected result, and the acceptance criteria. The expected result must be defined before execution, not written after watching what the system does. Defining the expected result afterward is the single most common way a test package quietly stops being objective evidence.

Cover three kinds of case for any critical function. Positive cases confirm the system does what it should with valid input. Negative cases confirm it refuses what it should refuse, for example that a locked, approved record cannot be edited and that a user without the right role is blocked from a privileged action. Boundary cases probe the edges, the maximum field length, the date rollover, the empty input, the duplicate entry. Most real-world failures and most inspection findings live in the negative and boundary cases, not the happy path.

**Audit trail testing, specifically:** Test that the trail captures the event, the user ID, the timestamp, the field modified, the previous value, and the new value. Execute an actual modification and verify each element is present and correct. Many packages get this wrong: the script says "verify audit trail captures modification" and the expected result is "audit trail is present," with no statement of what it must contain. That is not a test, it is an observation. The detail is what matters under Part 11 and Annex 11, both of which require attributable, time-stamped records that retain the original entry. [Audit Trail Design and Review](/articles/audit-trail-design-and-review) goes deeper on what a complete trail looks like.

**Deviations:** When a result does not match the expected result, open a deviation. Deviations must be investigated before OQ is considered complete. A deviation closed by changing the expected result, because the system does something different from what was specified, may signal a requirements gap rather than a test failure, but it has to be handled transparently and documented either way. Silently editing the expected result to match observed behavior is data integrity rot, and it is exactly what a careful reviewer looks for when sampling executed scripts. Deviation handling here follows the same discipline as production [deviation management](/articles/deviation-management).

---

## Performance Qualification (PQ) / User Acceptance Testing (UAT)

**Purpose:** Verifies that the configured, operating system meets user requirements in its actual use context. Typically executed by intended users (analysts, operators, QA reviewers) against complete business process workflows rather than isolated functions.

**What to test in PQ/UAT:**
- End-to-end business processes, not just individual functions
- Integrations with adjacent systems under real conditions
- Performance under expected load
- Operator usability in context: can the intended users actually accomplish their tasks?

**Why PQ catches what OQ cannot:** OQ proves each function works in isolation. PQ proves the functions hold together as a workflow a real person can complete without a workaround. A sample login, sample analysis, result entry, second-person review, approval, and report generation chain will expose handoff gaps, integration timing problems, and the small usability traps that push users toward unofficial parallel records. Those parallel records, the personal spreadsheet kept because the validated system is too slow, are a frequent root cause behind data integrity findings, so usability is a compliance issue, not a comfort issue.

**Who executes PQ/UAT:** Ideally the functional users who will run the system in production, not only the validation team. Their domain knowledge surfaces workflow gaps and integration problems that functional testing alone will not reveal. Validation can author and oversee the scripts, but the execution value comes from people who know what the day actually looks like.

---

## Validation Summary Report (VSR)

**Purpose:** Summarizes the validation effort, its outcomes, and the conclusion that the system is validated for its intended use. It is the document an inspector or a future colleague reads first, and often the only one they read in full.

**What it must contain:**
- Summary of the validation scope and approach
- Results of each qualification phase (IQ, OQ, PQ): what was tested, what was found
- Summary of all deviations and their resolution
- RTM completion status: every requirement traced and tested
- Any residual risk or accepted limitation
- Conclusion: the system is validated for a specific intended use as defined in the URS, with any conditions or limitations stated plainly
- Approval signatures from QA and the system owner

**What makes it useful:** A VSR that stands alone. A reader who sees only the VSR should understand what the system does, why it was validated, what evidence was generated, and what the conclusion is. State the deviation count and characterize the deviations, do not just assert that all were closed. Name the residual risks rather than claiming there are none, because a report that finds no limitation in any real system reads as either incurious or dishonest. A VSR that is two pages of "all protocols were executed and passed" summarizes nothing and is the easiest document in the package to discredit.

---

## Change Control and Revalidation

Validation does not end at go-live. Every significant change to a validated system, a new software version, a configuration change, a new interface, a new user population, requires a documented impact assessment and, where the change touches validated functions, revalidation testing scaled to the risk.

The change control record should document:
- Description of the change
- Impact assessment against validated functions and GxP controls, especially audit trail, access control, and electronic signatures
- Testing scope and rationale, tied back to the RTM so you can see which requirements the change affects
- Updated validation documentation (RTM, configuration specification, as applicable)
- QA approval before implementation

Scale the response to the change. A cosmetic label change does not warrant full re-execution of OQ. A patch that touches the audit trail or the calculation engine warrants targeted regression testing of every affected requirement, and the RTM is what tells you which ones those are. A validated system that has been through ten undocumented software updates is not, in practical terms, validated. The state of validation is defined by the documentation, and the documentation has to be kept current. The discipline here is treated in full in [Change Control for Validated Systems](/articles/change-control-validated-systems).

---

## Periodic Review

Validated systems require periodic review to confirm they remain in a validated state. Periodic review, typically annual and risk-adjusted in frequency, covers:

- Confirmation that the current software version matches the validated version
- Review of change controls executed since the last review
- Review of incidents, failures, or deviations since the last review
- Review of audit trail configuration: is it still complete and correctly configured?
- Review of user access: are accounts current, are leavers disabled, do privileges still match roles?
- Assessment of whether the intended use has changed
- Conclusion: the system remains in a validated state, or re-qualification is required

Periodic review is often underprioritized because it produces no new validation documentation, which makes it easy to defer in favor of the next new-system validation. But a system that passed its original OQ in 2018, has taken three software updates since, and has never been reviewed is a finding waiting to happen. The review is the only routine control that catches slow drift, the access list that grew, the configuration that changed under a poorly assessed patch, the intended use that quietly expanded. Periodic review is part of the broader periodic verification discipline in [Validation Master Plan and Periodic Review](/articles/validation-master-plan-and-periodic-review).

---

## Tailoring effort to risk, and to the model

None of this means every system gets the full nine-document treatment at full depth. GAMP 5 (Second Edition, 2022) and the FDA's 2022 draft guidance on Computer Software Assurance both push the same point: spend effort where the risk to patient safety, product quality, and data integrity is highest, and lean on supplier evidence and unscripted or focused testing where the risk is low. A high-risk configured system that controls release decisions earns deep, scripted OQ. A low-risk read-only reporting tool earns a much lighter touch, and that lighter touch is a documented decision, not a corner cut. The shift in mindset is covered in [Computer Software Assurance](/articles/computer-software-assurance-fda) and the [GAMP 5 CSV framework](/articles/gamp5-csv-framework).

The deliverable set is not the goal. A system you can trust, with evidence you can defend, is the goal. The documents are how you get there and how you prove you arrived. Produce each one because it closes a real gap in that argument, and the package will hold up. Produce them because a template said to, and you will have a binder full of paper that fails the moment anyone actually reads it.
