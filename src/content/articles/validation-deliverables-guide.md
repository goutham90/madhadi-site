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

This article breaks down the core validation deliverables, what each document is for, what makes it useful rather than just complete, and the common mistakes that turn each document into overhead. The framework is GAMP 5 (Second Edition, 2022) aligned, using the IQ/OQ/PQ structure that remains the industry standard, and it maps to the regulatory expectations in 21 CFR Part 11, EU GMP Annex 11, and the data integrity guidances published by the FDA, MHRA, and PIC/S. The examples cover the full range of regulated systems: a LIMS in a QC lab, an MES on a fill line, an electronic batch record, a clinical data management system, a complaint-handling database for a device firm, and a spreadsheet that calculates a release result. The deliverable logic is the same across all of them.

---

## The regulatory basis in one place

Before the documents, the rules they answer to. Knowing the citation behind each control is what separates someone who fills in a template from someone who can defend the package to an inspector.

| Source | What it requires that drives validation |
|---|---|
| 21 CFR 211.68 (US cGMP) | Automatic, mechanical, or electronic equipment used in manufacture/control must be routinely checked or calibrated; input/output must be verified for accuracy. This is the cGMP hook for validating computerized systems. |
| 21 CFR Part 11 (1997) | Electronic records and signatures: validation of systems (11.10(a)), audit trails (11.10(e)), access controls (11.10(d), 11.10(g)), record copies and retention. |
| EU GMP Annex 11 (2011) | Computerised systems: risk management (1), validation (4), data integrity, audit trails (9), change/configuration management (10), periodic evaluation (11), security (12). |
| EU GMP Annex 15 (2015) | Qualification and validation: URS as the basis, DQ/IQ/OQ/PQ structure, traceability, validation reports. Annex 15 is where the IQ/OQ/PQ vocabulary is formally anchored in EU GMP. |
| GAMP 5 (Second Edition, 2022) | The industry framework: software categories, the V-model, scaling effort to risk, reuse of supplier evidence, critical thinking over document volume. Guidance, not law, but the expected approach. |
| FDA Computer Software Assurance (draft 2022, finalized 2024) | A risk-based, least-burdensome approach to assuring software used in production and quality systems; emphasizes unscripted and targeted testing where risk is low. |
| 21 CFR 820.70(i) / ISO 13485:2016 (devices) | Validation of software used in production or the quality system per its intended use, with documented results. The device-world equivalent of the same expectation. |
| ICH E6(R2) Good Clinical Practice (5.5.3) | For clinical systems: validation of computerized systems, SOPs, and the ability to maintain the records. |
| PIC/S PI 011 and the WHO/MHRA data integrity guidances | Expectations for data integrity in computerized systems that the testing must demonstrate (attributable, legible, contemporaneous, original, accurate, plus complete, consistent, enduring, available). |

> Annex 11, clause 4.4: "User Requirements Specifications should describe the required functions of the computerised system and be based on documented risk assessment and GMP impact. User requirements should be traceable throughout the life-cycle."

That single clause is why the URS and the traceability matrix exist as separate, mandatory artifacts in a GMP context, and why "we'll write the requirements later" is not a defensible position.

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

For the requirements-and-traceability mechanics in their own right, see [User Requirements and Traceability](/articles/user-requirements-and-traceability). For the broader framework these documents sit inside, see [the GAMP 5 CSV framework](/articles/gamp5-csv-framework).

### Roles across the whole set

Validation is a team sport, and inspectors check that the right people wrote, executed, and approved the right things. Independence matters: the person who builds a configuration should not be the only person who verifies it, and QA approval is a quality decision, not a rubber stamp.

| Role | Owns / does | Approves |
|---|---|---|
| System owner / process owner | Defines intended use, owns the URS content, accepts residual risk | URS, Validation Plan, VSR |
| Business / functional SMEs | Author requirements, write and often execute PQ/UAT | PQ scripts, UAT results |
| IT / system administrator | Installs, configures, supports IQ; maintains the build | Configuration Spec (technical) |
| Validation lead / CSV engineer | Authors plan and protocols, manages RTM, runs OQ, compiles VSR | Protocols, RTM, reports (author) |
| Quality Assurance | Independent review, approves deviations, gates release | Every controlled deliverable |
| Vendor / supplier | Provides design, supplier testing evidence, sometimes IQ/OQ scripts | Supplier documentation (assessed) |

A clean rule of thumb: the same signature should not appear as both "executed by" and "reviewed by" on the same script, and QA should not be the only reviewer of testing they did not witness or sample. [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) goes into the wider RACI picture.

---

## Validation Plan

**Purpose:** Defines what will be validated, how, and why. It is the master document that governs the entire validation effort for a single system. It sits below the site Validation Master Plan, which governs the whole estate of systems and is covered separately in [Validation Master Plan and Periodic Review](/articles/validation-master-plan-and-periodic-review).

**Regulatory basis:** Annex 15 expects validation to be planned, and Annex 11 clause 4.1 requires that computerised systems be validated with the extent of validation justified by a risk assessment. The plan is where that justification lives. For devices, 21 CFR 820.70(i) requires the validation approach to be established and documented.

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

**What makes it useful:** A validation plan that states "the system will be validated per GAMP 5" is not useful. A useful plan states what aspects of the system carry what risks, what testing addresses those risks, and what level of documentation results. The reasoning belongs in the document, not implied. The GAMP 5 category assignment is the hinge here, because it sets the default effort for everything downstream.

| GAMP 5 category | What it is | Validation default | Example |
|---|---|---|---|
| 1 | Infrastructure software | Qualified, not validated from scratch | Operating system, database engine, virtualization layer |
| 3 | Non-configured product | Tested as used; rely on supplier where justified | Off-the-shelf instrument firmware used with defaults |
| 4 | Configured product | Configuration specified and verified; OQ on configured functions | LIMS, MES, EDMS, eQMS set up with site workflows |
| 5 | Custom / bespoke | Full design review plus structural testing | Custom interface, bespoke calculation engine, in-house app |

State the category and the reason, then let the rest of the plan follow from it. Note GAMP 5 retired the old Category 2 (firmware) in the first edition; do not assign it.

**Acceptance criteria for the plan itself:** scope has an explicit out-of-scope statement, the GAMP category is assigned with a one-line rationale, the risk-based approach names the highest-risk areas, every planned deliverable has a named owner, and the criteria for declaring validation complete are stated as testable conditions (for example, "all OQ scripts executed, all deviations closed or risk-accepted with QA approval, RTM 100% traced").

**Worked example:** A laboratory information management system (LIMS) bought off the shelf but configured with site-specific workflows, sample types, and approval routes is Category 4. The plan should say so, and should say that the configuration is the highest-risk area, so configuration verification at IQ and workflow testing at OQ will be the deepest parts of the package. The vendor's standard, unconfigured functions can rely on supplier testing rather than full re-execution. That single paragraph of reasoning is worth more than ten pages of generic boilerplate.

**Common mistakes:** Plans written at the start and never updated when scope changes. Plans that list deliverables without describing what makes each one complete. Scope statements vague enough to justify almost any testing depth, which in practice means the testing depth gets decided by whoever runs out of time first. A frequent inspection finding is a validation plan whose risk assessment is generic and whose conclusions do not actually drive the testing strategy that follows.

---

## User Requirements Specification (URS)

**Purpose:** Documents what the users need the system to do. Written before system selection, from the users' perspective, without reference to how the system will accomplish each requirement.

**Regulatory basis:** Annex 15 names the URS as the basis of qualification, and Annex 11 clause 4.4 (quoted above) requires user requirements to be risk-assessed and traceable through the lifecycle. The URS is the document a PQ test ultimately verifies against, so a weak URS produces a weak PQ.

**What it must contain:**
- Business requirements: what processes the system supports
- Functional requirements at the user level: what the system must be able to do
- GxP-specific requirements: audit trail, access control, electronic signature, data retention, data export
- Non-functional requirements: performance, availability, integration needs
- Regulatory and compliance requirements

**What makes it useful:** A URS written from the user's perspective, not IT's. Requirements stated as outcomes ("the system shall prevent unauthorized modification of approved results") rather than implementations ("the system shall use row-level locking"). A good URS can evaluate candidate systems against user needs, write test acceptance criteria, and trace test results back to requirements.

Every requirement should be atomic, testable, and uniquely numbered. Atomic means one requirement per statement, so "the system shall capture and report results" is two requirements wearing one ID. Testable means you can write a pass or fail condition for it, which rules out "the system shall be user-friendly." Uniquely numbered means the ID never gets reused even if the requirement is later deleted, because the RTM and your test records point at that number forever.

**Worked example, GxP requirements written well:**

| ID | Requirement | Risk | Verified at |
|---|---|---|---|
| URS-007 | Each user shall authenticate with a unique individual account; shared or generic accounts shall not be permitted for any GxP action. | High | OQ |
| URS-008 | The system shall maintain a secure, time-stamped audit trail recording the user, date, time, action, the prior value, and the new value for any change to GxP-relevant data. | High | OQ |
| URS-009 | Once a result is approved, it shall not be editable; any correction shall require a controlled, audit-trailed change with reason. | High | OQ + PQ |
| URS-010 | The system shall apply electronic signatures that are linked to the signed record and that capture signer name, date/time, and meaning of the signature. | High | OQ |
| URS-022 | The system shall export complete data, including metadata and audit trail, to a human-readable format for inspection. | Medium | OQ |

The GxP requirements deserve special attention because they are the ones an inspector will test against. Audit trail, access control, and electronic signatures map directly to Part 11 and Annex 11 expectations. Treat them as first-class requirements with their own IDs, not as a footnote. The [Part 11 and Annex 11 practical guide](/articles/part-11-annex-11-practical-guide) covers what those controls have to do, and [electronic signatures implementation](/articles/electronic-signatures-implementation) covers the signature mechanics specifically.

**Acceptance criteria for a URS:** every requirement is atomic, has a unique permanent ID, is testable (a yes/no acceptance condition exists), carries a GxP-impact or criticality rating, and the set covers the four Part 11/Annex 11 pillars (access, audit trail, signatures, record copies/retention). If you cannot write a test from a line, the line is not done.

**Common mistakes:** URS written after system selection to justify a decision already made. Requirements that describe the existing system rather than what is needed. Missing GxP requirements, because a URS that does not mention audit trails, access controls, or electronic signatures is not a GxP URS. Inspectors regularly find URS requirements with no risk rating and no corresponding trace, which means nobody can show the requirement was actually verified.

---

## Functional Requirements Specification (FRS)

**Purpose:** Translates URS requirements into specific functional behaviors the system must exhibit. Where the URS is user language ("the system shall allow QA review and approval of test results"), the FRS is specific about mechanism ("the system shall implement a two-step approval workflow requiring the original analyst and a QA reviewer, with electronic signatures captured for each step").

**What it must contain:**
- A functional statement for each user need that requires one, traced to its URS ID
- The specific behavior, inputs, outputs, and conditions
- The configuration or workflow that delivers the behavior, at a functional (not code) level
- Error and exception behavior where it matters for GxP

**Worked example, URS to FRS translation:**

| URS | FRS derived from it |
|---|---|
| URS-009 Approved results cannot be edited | FRS-040: On approval, the record status changes to "Approved" and the result fields become read-only at the application level for all roles. FRS-041: Any post-approval correction is performed via a controlled "amend result" function that requires a reason code, a QA e-signature, and writes both the old and new values to the audit trail. |

**What makes it useful:** Direct traceability to URS requirements, so every FRS item traces back to a business need. FRS items at a level of specificity that makes testing tractable. You should be able to write a test script directly from an FRS statement without inventing detail.

A useful test: take any FRS line and ask whether two reasonable engineers would build the same thing from it. If the answer is no, the statement is still at URS altitude and needs more detail. If the FRS starts naming database tables and code modules, it has dropped into design and belongs in the design specification instead. The FRS lives in the middle: specific enough to test, abstract enough to survive a configuration change.

**Note on combining documents:** Some organizations combine URS and FRS into a single requirements document. For simple Category 3 products this is reasonable and reduces overhead. For complex Category 4 and 5 systems with many stakeholders, keeping them separate preserves the distinction between "what users need" and "what the system must do," which matters when a user need stays constant but the implementation changes. Neither approach is wrong. What matters is that both layers of reasoning are captured and that the split, or the merge, is stated in the validation plan rather than discovered later.

---

## Configuration Specification (CS) / Design Specification (DS)

**Purpose:** Documents how the system will be configured or built to meet the functional requirements. For Category 4 configured systems, the configuration specification captures settings, parameters, and the approved configuration baseline. For Category 5 custom systems, a design specification captures the architecture, data model, and code-level design, and triggers additional source code review and structural testing.

**Regulatory basis:** Annex 11 clause 10 requires that changes to computerised systems be made in a controlled manner, which is only possible against a documented baseline. The configuration specification is that baseline. Without it, "configuration management" has nothing to manage against.

**What it must contain:**
- Configuration settings that affect GxP functionality, especially audit trail configuration, access control settings, and workflow configurations
- User roles and permissions matrix
- System interfaces and integration specifications
- Data retention and archival configuration

**Worked example, a configuration baseline that can actually be verified:**

| Setting | Approved value | Source |
|---|---|---|
| Audit trail | Enabled, cannot be disabled by any role, captures old/new value | Config screen, exported config report |
| Password minimum length | 8 | Security policy screen |
| Password complexity | Enabled (upper, lower, numeric) | Security policy screen |
| Account lockout | After 5 failed attempts, 30-minute lockout | Security policy screen |
| Session timeout | 15 minutes inactivity | System parameter |
| Approved-result editing | Blocked for all roles | Workflow config |
| Time source | Synchronized to site NTP server | OS / app config |

**What makes it useful:** A configuration specification detailed enough to verify the setup during IQ and to detect drift during periodic review or after a change. The baseline is the point. If you cannot tell from the document whether the live system still matches what was approved, the document is not doing its job. Capture exact values, not descriptions: "password minimum length 8, complexity enabled, account lockout after 5 failed attempts," not "passwords are configured securely." When a setting is left at the vendor default, say so explicitly, because "default" is a moving target across product versions. The time-source row matters more than it looks: a system clock a user can reset undermines every timestamp in the audit trail, which is why [time stamps and system clock control](/articles/time-stamps-and-system-clock-control) is its own topic.

---

## Requirements Traceability Matrix (RTM)

**Purpose:** Maps each URS requirement to the FRS requirement(s) that address it, and to the test script(s) that verify it. It shows that testing coverage is complete and, just as importantly, that no test exists without a requirement behind it.

**Regulatory basis:** Annex 11 clause 4.4 explicitly requires user requirements to be "traceable throughout the life-cycle." The RTM is how that traceability is demonstrated. An inspector who asks "show me that requirement URS-009 was tested" expects the RTM to answer in seconds.

**Structure:**

| URS Req | Description | FRS Ref | Test ID | Pass/Fail | Notes |
|---|---|---|---|---|---|
| URS-001 | Individual user authentication required | FRS-012 | OQ-015 | Pass | |
| URS-002 | Audit trail captures prior value for result modifications | FRS-031, FRS-032 | OQ-027, OQ-028 | Pass | |
| URS-014 | Approved results cannot be edited | FRS-040 | OQ-033, PQ-006 | Pass | Negative test |

**What makes it useful:** Built alongside the documents it traces, not assembled at the end from finished files. A living RTM that updates as requirements change and tests execute is a real quality tool. An RTM reverse-engineered after the fact to close out a package is overhead that also tends to hide gaps, because it is written by someone whose goal is a clean grid rather than honest coverage.

Trace in both directions. Forward tracing (requirement to test) proves coverage. Backward tracing (test to requirement) catches orphan tests, which usually signal either scrap work or, more interestingly, a behavior the system has that nobody asked for and nobody assessed for GxP impact. Both directions matter, and an RTM that only goes forward is doing half the job.

**Acceptance criteria for the RTM:** every URS requirement traces to at least one FRS item and at least one executed test; every test traces back to a requirement (zero orphans) or has a documented rationale; every "not tested" or "N/A" entry has a written justification; and at closure the pass/fail column is fully populated with no blanks.

**Common mistakes:** RTMs that trace FRS to tests but never trace URS to FRS, leaving the link between business need and testing unestablished. RTMs with "N/A" for untested requirements and no documented rationale for why testing was unnecessary, which converts a deliberate scoping decision into what reads like an omission. A grid where several requirements quietly map to the same single test, which usually means the test is too shallow to verify all of them.

---

## Installation Qualification (IQ) Protocol and Report

**Purpose:** Verifies that the system was installed correctly and that hardware, software, and configuration match the approved design.

**Regulatory basis:** Annex 15 defines IQ as verification that equipment and systems are installed in accordance with their design and the manufacturer's recommendations. For computerized systems this extends to verifying the configuration baseline.

**What to test in IQ:**
- Hardware inventory against specification (servers, clients, peripherals)
- Software version confirmation (application, database, operating system)
- Configuration settings against the Configuration Specification
- Network connectivity and integration points
- Backup system installation and configuration
- User account initial setup per approved access control design
- Documentation verification (installation guides, configuration records)

**Worked example, one IQ step done right:**

| Step | Action | Expected result | Actual / evidence | P/F |
|---|---|---|---|---|
| IQ-012 | Open Help > About in the application | Version reads exactly 7.4.2 as specified | 7.4.2; screenshot IQ-012-a attached | Pass |
| IQ-018 | Export the audit trail configuration report | Audit trail enabled, not disableable, captures old/new values | Matches; export IQ-018-a attached | Pass |

**What makes IQ useful:** An IQ executed by someone who actually checks each item rather than reading it off and ticking boxes. Configuration verification means looking at the live system settings, not asking the administrator what they should be. Software version confirmation means reading the version string inside the application, not the installer summary. Capture the evidence: a screenshot of the version dialog, an export of the audit trail configuration, the actual permissions matrix pulled from the system. An IQ whose evidence is the executor's signature and nothing else is hard to defend two years later when the version in front of an inspector does not match.

**Acceptance criteria:** every installed component matches the specified version/model, every GxP-relevant configuration setting matches the approved baseline with attached objective evidence, and any deviation is documented and resolved before the IQ report is signed.

**The IQ report:** Summarizes execution, documents any deviations from the protocol (investigated and resolved or accepted), and concludes whether IQ criteria were met. For depth on aligning IQ with broader asset qualification, see [Equipment Qualification Lifecycle](/articles/equipment-qualification-lifecycle).

---

## Operational Qualification (OQ) Protocol(s) and Report(s)

**Purpose:** Verifies that the system operates according to its functional requirements.

**Regulatory basis:** Annex 15 defines OQ as verification that the system operates as intended across the anticipated operating ranges. For computerized systems, "operating ranges" means the functional behaviors, the boundaries, and the error paths, not just the happy path.

**What to test in OQ:**
- Every FRS requirement that has a testable behavior
- Boundary and edge conditions for critical functions
- Error handling and system response to unexpected inputs
- GxP-critical controls: audit trail capture, access control enforcement, electronic signature behavior, data export completeness

**Design of OQ test scripts:** Each script should state the requirement being tested (FRS reference), the preconditions, the exact steps, the expected result, and the acceptance criteria. The expected result must be defined before execution, not written after watching what the system does. Defining the expected result afterward is the single most common way a test package quietly stops being objective evidence.

Cover three kinds of case for any critical function. Positive cases confirm the system does what it should with valid input. Negative cases confirm it refuses what it should refuse, for example that a locked, approved record cannot be edited and that a user without the right role is blocked from a privileged action. Boundary cases probe the edges, the maximum field length, the date rollover, the empty input, the duplicate entry. Most real-world failures and most inspection findings live in the negative and boundary cases, not the happy path.

**Worked example, an OQ script with a defined expected result:**

> **OQ-027** Audit trail captures result modification (FRS-031)
> **Precondition:** A test sample with an entered result exists; logged in as analyst with edit rights.
> **Steps:** 1. Open the sample. 2. Change the result from 12.4 to 13.1. 3. Enter reason "transcription correction." 4. Save. 5. Open the audit trail for that record.
> **Expected result:** The audit trail shows one entry containing: user ID of the analyst, date and time of the change, field = result, previous value = 12.4, new value = 13.1, reason = transcription correction. No element is blank.
> **Acceptance:** All six elements present and correct. Pass only if every element matches.

**Audit trail testing, specifically:** Test that the trail captures the event, the user ID, the timestamp, the field modified, the previous value, and the new value. Execute an actual modification and verify each element is present and correct. Many packages get this wrong: the script says "verify audit trail captures modification" and the expected result is "audit trail is present," with no statement of what it must contain. That is not a test, it is an observation. The detail is what matters under Part 11 (11.10(e)) and Annex 11 (clause 9), both of which require attributable, time-stamped records that retain the original entry. [Audit Trail Design and Review](/articles/audit-trail-design-and-review) goes deeper on what a complete trail looks like.

**Acceptance criteria for OQ overall:** every FRS requirement with testable behavior is covered, each critical function has positive plus negative plus boundary cases, every expected result was pre-defined, all deviations are closed or risk-accepted with QA sign-off, and the executed scripts carry objective evidence rather than a bare signature.

**Deviations:** When a result does not match the expected result, open a deviation. Deviations must be investigated before OQ is considered complete. A deviation closed by changing the expected result, because the system does something different from what was specified, may signal a requirements gap rather than a test failure, but it has to be handled transparently and documented either way. Silently editing the expected result to match observed behavior is data integrity rot, and it is exactly what a careful reviewer looks for when sampling executed scripts. Deviation handling here follows the same discipline as production [deviation management](/articles/deviation-management), and the specific case of a failed test script is covered in [validation test failure management](/articles/validation-test-failure-management).

---

## Performance Qualification (PQ) / User Acceptance Testing (UAT)

**Purpose:** Verifies that the configured, operating system meets user requirements in its actual use context. Typically executed by intended users (analysts, operators, QA reviewers) against complete business process workflows rather than isolated functions.

**Regulatory basis:** Annex 15 defines PQ as verification that the system performs effectively and reproducibly under normal operating conditions, against the user requirements. PQ is the test that closes the URS, which is why the URS quality determines what PQ can prove.

**What to test in PQ/UAT:**
- End-to-end business processes, not just individual functions
- Integrations with adjacent systems under real conditions
- Performance under expected load
- Operator usability in context: can the intended users actually accomplish their tasks?

**Worked example, an end-to-end PQ flow:** a QC release scenario run by an analyst and a QA reviewer: log in as analyst, create a sample, enter a result, submit for review, log in as QA reviewer, review and apply e-signature, generate the certificate of analysis, confirm the result and audit trail are intact on the printed and exported record. One scenario like this exercises authentication, the workflow, signatures, the audit trail, and reporting as a connected chain, which is exactly what OQ cannot do function by function.

**Why PQ catches what OQ cannot:** OQ proves each function works in isolation. PQ proves the functions hold together as a workflow a real person can complete without a workaround. A sample login, sample analysis, result entry, second-person review, approval, and report generation chain will expose handoff gaps, integration timing problems, and the small usability traps that push users toward unofficial parallel records. Those parallel records, the personal spreadsheet kept because the validated system is too slow, are a frequent root cause behind data integrity findings, so usability is a compliance issue, not a comfort issue.

**Who executes PQ/UAT:** Ideally the functional users who will run the system in production, not only the validation team. Their domain knowledge surfaces workflow gaps and integration problems that functional testing alone will not reveal. Validation can author and oversee the scripts, but the execution value comes from people who know what the day actually looks like.

**Acceptance criteria:** the in-scope business processes run end to end without unplanned workarounds, integrations pass data correctly and completely, expected load is met, and the executing users sign that they could perform their real tasks. Any workaround discovered is either fixed before go-live or carried as a documented, risk-assessed limitation in the VSR.

---

## Validation Summary Report (VSR)

**Purpose:** Summarizes the validation effort, its outcomes, and the conclusion that the system is validated for its intended use. It is the document an inspector or a future colleague reads first, and often the only one they read in full.

**Regulatory basis:** Annex 15 requires a report cross-referencing the qualification protocols, summarizing results, commenting on deviations, and drawing a conclusion. The VSR is the formal statement that the system is fit for intended use, and it is what release-to-production hinges on.

**What it must contain:**
- Summary of the validation scope and approach
- Results of each qualification phase (IQ, OQ, PQ): what was tested, what was found
- Summary of all deviations and their resolution
- RTM completion status: every requirement traced and tested
- Any residual risk or accepted limitation
- Conclusion: the system is validated for a specific intended use as defined in the URS, with any conditions or limitations stated plainly
- Approval signatures from QA and the system owner

**What makes it useful:** A VSR that stands alone. A reader who sees only the VSR should understand what the system does, why it was validated, what evidence was generated, and what the conclusion is. State the deviation count and characterize the deviations, do not just assert that all were closed. Name the residual risks rather than claiming there are none, because a report that finds no limitation in any real system reads as either incurious or dishonest. A VSR that is two pages of "all protocols were executed and passed" summarizes nothing and is the easiest document in the package to discredit.

**Acceptance criteria:** the report cross-references each protocol and its result, gives a deviation count with a one-line characterization of each significant one and its disposition, states RTM completion, names residual risks and any operating restrictions, and reaches an explicit fit-for-intended-use conclusion tied to the URS. For more on this document and the release decision it supports, see [validation summary report and release](/articles/validation-summary-report-and-release).

---

## Change Control and Revalidation

Validation does not end at go-live. Every significant change to a validated system, a new software version, a configuration change, a new interface, a new user population, requires a documented impact assessment and, where the change touches validated functions, revalidation testing scaled to the risk. This is the explicit expectation of Annex 11 clause 10 and the change-control requirements of Annex 15.

The change control record should document:
- Description of the change
- Impact assessment against validated functions and GxP controls, especially audit trail, access control, and electronic signatures
- Testing scope and rationale, tied back to the RTM so you can see which requirements the change affects
- Updated validation documentation (RTM, configuration specification, as applicable)
- QA approval before implementation

**Worked example, scaling the response:**

| Change | Validated functions touched | Testing response |
|---|---|---|
| Report logo / label text | None | Documented assessment, no re-execution |
| New result-calculation formula | Calculation engine, result records | Regression test every affected requirement (RTM-driven) |
| Vendor patch touching audit trail | Audit trail capture | Targeted re-execution of audit trail OQ scripts |
| New interface to a second system | Data integrity at the boundary | New OQ/PQ for the interface, integration testing |

Scale the response to the change. A cosmetic label change does not warrant full re-execution of OQ. A patch that touches the audit trail or the calculation engine warrants targeted regression testing of every affected requirement, and the RTM is what tells you which ones those are. A validated system that has been through ten undocumented software updates is not, in practical terms, validated. The state of validation is defined by the documentation, and the documentation has to be kept current. The discipline here is treated in full in [Change Control for Validated Systems](/articles/change-control-validated-systems).

---

## Periodic Review

Validated systems require periodic review to confirm they remain in a validated state. This is a direct Annex 11 expectation (clause 11): computerised systems should be periodically evaluated to confirm they remain in a valid state and compliant. Periodic review, typically annual and risk-adjusted in frequency, covers:

- Confirmation that the current software version matches the validated version
- Review of change controls executed since the last review
- Review of incidents, failures, or deviations since the last review
- Review of audit trail configuration: is it still complete and correctly configured?
- Review of user access: are accounts current, are leavers disabled, do privileges still match roles?
- Assessment of whether the intended use has changed
- Conclusion: the system remains in a validated state, or re-qualification is required

Periodic review is often underprioritized because it produces no new validation documentation, which makes it easy to defer in favor of the next new-system validation. But a system that passed its original OQ years ago, has taken three software updates since, and has never been reviewed is a finding waiting to happen. The review is the only routine control that catches slow drift, the access list that grew, the configuration that changed under a poorly assessed patch, the intended use that quietly expanded. Periodic review is part of the broader periodic verification discipline in [Validation Master Plan and Periodic Review](/articles/validation-master-plan-and-periodic-review).

---

## Tailoring effort to risk, and to the model

None of this means every system gets the full nine-document treatment at full depth. GAMP 5 (Second Edition, 2022) and the FDA's draft 2022 guidance on Computer Software Assurance, finalized in 2024, both push the same point: spend effort where the risk to patient safety, product quality, and data integrity is highest, and reuse supplier evidence and unscripted or focused testing where the risk is low. A high-risk configured system that controls release decisions earns deep, scripted OQ. A low-risk read-only reporting tool earns a much lighter touch, and that lighter touch is a documented decision, not a corner cut. The shift in mindset is covered in [Computer Software Assurance](/articles/computer-software-assurance-fda) and the [GAMP 5 CSV framework](/articles/gamp5-csv-framework). The same logic applies to a release-relevant spreadsheet, which needs its formulas and protections verified even though it never gets a nine-document binder; see [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation).

The deliverable set is not the goal. A system you can trust, with evidence you can defend, is the goal. The documents are how you get there and how you prove you arrived. Produce each one because it closes a real gap in that argument, and the package will hold up. Produce them because a template said to, and you will have a binder full of paper that fails the moment anyone actually reads it.

---

## Interview questions you should be ready for

These are the questions that come up in CSV and quality interviews, and the answers an inspector or hiring manager is listening for.

**"Walk me through the validation V-model."** Requirements descend the left arm (URS to FRS to design/configuration), testing climbs the right arm (IQ verifies installation and configuration, OQ verifies function against the FRS, PQ verifies user needs against the URS). The RTM is the horizontal line proving every requirement was built and tested. The key point to land: each left-arm document is closed by a specific right-arm test.

**"What is the difference between a URS and an FRS?"** The URS states what users need in outcome language, written before selection, owned by the business. The FRS states what the system must do to meet those needs, in functional language specific enough to test, written after selection. Test of altitude: two engineers should build the same thing from an FRS line; if not, it is still a URS statement.

**"What GAMP 5 category is a configured LIMS, and what does that drive?"** Category 4. It drives a configuration specification, configuration verification at IQ, and OQ focused on the configured workflows, while standard unconfigured functions can reuse supplier testing. State the category and the reason in the validation plan.

**"How do you test an audit trail?"** Execute a real change and verify the trail captures user ID, timestamp, field, old value, new value, and reason, with the expected result defined beforehand. The wrong answer is "verify the audit trail is present." Tie it to Part 11 11.10(e) and Annex 11 clause 9.

**"What is the difference between OQ and PQ, and why do you need both?"** OQ proves each function works in isolation against the FRS. PQ proves the functions hold together as an end-to-end workflow a real user can complete, against the URS, ideally executed by the actual users. PQ catches handoff gaps, integration timing, and usability traps that drive shadow records.

**"A test fails during OQ. What do you do?"** Open a deviation, investigate before declaring OQ complete, and document the disposition. Never silently change the expected result to match what the system did. If the system genuinely behaves differently from spec and that behavior is acceptable, that is a requirements/spec change handled through change control, not a quiet edit.

**"How do you decide how much to test?"** Risk-based per GAMP 5 and CSA: highest effort where the risk to patient safety, product quality, and data integrity is highest; reuse supplier evidence and lighter or unscripted testing where risk is low; and document the rationale so the lighter touch is a decision, not a gap.

**"What keeps a system in a validated state after go-live?"** Change control with impact assessment against validated functions, revalidation scaled to risk, and periodic review against the validated baseline. A system with undocumented updates is, in practice, not validated.

**"What is the one document an inspector reads first?"** The Validation Summary Report. It must stand alone, state the deviation count and characterize them, name residual risks, and reach an explicit fit-for-intended-use conclusion tied to the URS.

---

## Related reading

- [User Requirements and Traceability](/articles/user-requirements-and-traceability)
- [Writing Validation Protocols and Reports](/articles/writing-validation-protocols-and-reports)
- [Project Managing Validation](/articles/project-managing-validation)
- [CSV Risk Assessment Methodology](/articles/csv-risk-assessment-methodology)
- [LIMS Implementation and Validation](/articles/lims-implementation-and-validation)
- [Retroactive Validation of Legacy Systems](/articles/retroactive-validation-legacy-systems)
- [The GxP CSV and Data Integrity Glossary](/articles/gxp-csv-data-integrity-glossary)
