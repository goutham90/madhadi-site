---
title: "GAMP 5 Second Edition: The Framework for Risk-Based Computer System Validation"
description: "How GAMP 5 (2022) works in practice: software categories, the V-model, risk-based validation, supplier reliance, and what the second edition changed. Written for people who have to apply the standard, not just cite it."
pubDate: 2025-09-02
tags: ["CSV", "GAMP", "validation", "GxP", "21-CFR-Part-11"]
pillar: "csv-csa"
tier: "Intermediate"
---

GAMP 5 is the most widely cited framework for computer system validation in the pharmaceutical industry. Published by ISPE (the International Society for Pharmaceutical Engineering), it gives you a risk-based approach to validating computerized systems used in GxP activities across drug substance, drug product, biologics, medical devices, and combination products. The second edition, published in July 2022, updated the framework to align with the FDA's Computer Software Assurance thinking and to push back against the over-documentation that the first edition had unintentionally encouraged.

If you work in pharmaceutical quality, validation, IT, or device software, you need to understand GAMP 5: not just the acronym, but the framework's actual logic and what it changes about how you approach validation. This article walks through the categories, the lifecycle, the test phases, supplier reliance, the roles, and the judgment calls that separate a defensible validation file from a stack of paper an inspector can pick apart. It also gives you the interview answers an inspector or a hiring manager will press on.

---

## What GAMP 5 Actually Is

GAMP 5 is not a regulation. It is not FDA guidance. It is an industry good-practice framework published by a professional organization. That distinction matters: GAMP 5 compliance is not a legal requirement, but the principles it embodies (risk-based validation, documented evidence of fitness for intended use) map directly onto what regulators expect. When an FDA investigator or an EU qualified person reviews your validation, they will not ask "did you follow GAMP 5." They will ask whether you can demonstrate the system does what it is supposed to do and that the data it produces can be trusted. GAMP 5 is a route to that demonstration, not the demonstration itself.

The document's full title is "GAMP 5: A Risk-Based Approach to Compliant GxP Computerized Systems." The phrase "risk-based" is the central idea. Not all systems carry the same risk. Not all validation activities need to be documented to the same depth. The framework gives you the logic to decide what level of validation evidence is appropriate for a specific system used for a specific purpose in a specific operation. A spreadsheet that calculates a yield for an internal trend report and a manufacturing execution system that releases sterile product to patients both fall under "computerized systems," but treating them the same way is how validation programs either drown in paper or miss the systems that actually matter.

### Why it is required: the regulatory anchors underneath it

GAMP 5 has no force on its own. The force comes from the regulations it helps you satisfy. Know these by number, because an interviewer will ask what law actually obliges you to validate:

- **21 CFR 211.68** ("Automatic, mechanical, and electronic equipment") requires that automated equipment used in manufacturing be routinely calibrated, inspected, or checked, and that input/output of formulas and data be verified. This is the cGMP hook for validating manufacturing computer systems.
- **21 CFR Part 11** (Electronic Records; Electronic Signatures, 1997) requires that systems creating GxP electronic records be validated to ensure accuracy, reliability, and consistent intended performance, and the ability to discern altered records. Section 11.10(a) is the explicit validation requirement.
- **EU GMP Annex 11** (Computerised Systems, current version effective 2011) requires risk-managed validation across the system lifecycle, with the depth of validation justified by a documented risk assessment. Annex 11 and Part 11 are the two pillars; see [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11) and the [Part 11 and Annex 11 practical guide](/articles/part-11-annex-11-practical-guide).
- **21 CFR 820.70(i)** (Quality System Regulation, the device equivalent) requires validation of software used to automate any part of the device production process or quality system. The replacement rule, the Quality Management System Regulation harmonized to ISO 13485, carries the same expectation; see [medical device quality system QMSR](/articles/medical-device-quality-system-qmsr).
- **ICH Q9 (R1)** (Quality Risk Management) provides the risk-management discipline GAMP 5 borrows. The "scale effort to risk" instinct in GAMP 5 is ICH Q9 applied to software.

The 2022 second edition was issued to respond to more than a decade of industry experience with the first edition (2008) and to align with the FDA's Computer Software Assurance philosophy. The major shifts: greater emphasis on critical thinking over volume of documentation, explicit support for agile and iterative development, a more nuanced treatment of testing (including unscripted and exploratory testing), and a set of new appendices covering topics the 2008 edition could not have anticipated, including artificial intelligence and machine learning, IT service management, distributed ledger technology, and software tools used in development and testing.

For readers new to this space, two foundational pieces sit underneath everything below: [data integrity foundations](/articles/data-integrity-foundations) and the regulatory expectations in [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11). GAMP 5 is the engineering method; those two define what "trustworthy" means and what the law requires.

---

## The Software Category Model

The most practical tool in GAMP 5 is the software category system. It gives you a starting point for calibrating the depth of validation effort. The categories describe the nature of the software, which is a strong proxy for where the risk and uncertainty sit. The deeper logic: uncertainty rises as you move from infrastructure to custom code, because fewer other users have already found and fixed the defects for you.

**Category 1: Infrastructure Software**
Operating systems, database engines, network components, virtualization layers, middleware, and antivirus tooling. Infrastructure software is not directly GxP-critical, but it underpins the systems that are. Validation here is really qualification: documented evidence that the infrastructure is installed, configured, and controlled. The focus is on the configuration that affects the GxP applications running on top, plus the procedures that keep that infrastructure under control over time (patching, backup, access). For depth on this layer, see [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation).

**Category 3: Non-Configured Software**
Software used as-is, with no configuration beyond basic installation settings. Examples include standalone instrument firmware used with default settings, simple data-acquisition utilities, a pH meter or balance interface run out of the box, and commercial tools used in their default state. The validation expectation is limited but not zero: documented evidence that the software performs as intended for the specific use being made of it. The trap here is assuming "we did not configure it" means "we do not need to test it." You still verify the functions you actually rely on, with risk-based scripted or unscripted testing.

**Category 4: Configured Software**
The largest and most important category in practice. Software configured to meet specific business requirements but not modified at the code level. This includes LIMS, electronic lab notebooks, manufacturing execution systems, electronic document management systems, enterprise resource planning modules touching GxP, chromatography data systems, and most commercial off-the-shelf GxP platforms. The vendor supplies the underlying functionality; you configure workflows, user roles, calculations, limits, and reports. Validation effort concentrates on the configuration: proving the configuration meets the requirements, that it is documented and controlled, and that changes to it run through change control. The vendor's core code is treated as a baseline you can lean on (more on that under supplier assessment), so your testing energy goes into what you built on top.

**Category 5: Custom Software**
Software developed specifically for the purpose: bespoke applications, custom scripts that perform GxP calculations, validated spreadsheets with custom macros, robotic process automation bots, and significant code-level extensions to a commercial platform. Custom software carries the highest uncertainty because no other site has shaken out its defects for you. It requires the most thorough lifecycle treatment: design documentation, code review where appropriate, structural (white-box) and functional (black-box) testing, and tighter configuration management of the source itself. See [validating scripts and low-code analytics](/articles/validating-scripts-low-code-analytics) and [validating RPA automation](/articles/validating-rpa-automation).

> **Note on Category 2:** The original GAMP 5 (2008) included a Category 2 for firmware. The second edition removed Category 2 as a separate category. Firmware is now assessed as infrastructure, non-configured, or configured software depending on how it is used and whether it can be configured. If you maintain an older validation framework that still references five active categories, that is a sign it predates the second edition and should be refreshed.

### How to assign a category, step by step

1. Define the **intended use** in one or two sentences. Category follows use, not the product name.
2. Ask: does it run user-installable software, or is it platform/infrastructure? Infrastructure goes to Category 1.
3. Ask: is anything configured beyond installation defaults? If no, Category 3.
4. Ask: is configuration done within vendor-supplied options (workflows, fields, limits, roles), with no code change? If yes, Category 4.
5. Ask: is there bespoke code, custom scripting, custom macros, or a code-level extension? If yes, that part is Category 5, even if the host platform is Category 4.
6. Record the assignment and rationale in the validation plan or system inventory, and re-evaluate on material change.

Category assignment is a judgment, not a fact that drops out of a datasheet. The same commercial platform can be Category 4 for most deployments and effectively Category 5 in the modules where you wrote custom code. A common and avoidable finding is a system validated as Category 3 or 4 that has quietly grown a layer of custom scripting nobody re-categorized.

**Worked categorization example:**

| System | Use | Category | Why |
|---|---|---|---|
| Server operating system | Hosts the LIMS | 1 | Infrastructure under the GxP app |
| Balance with default firmware | Weighing, default settings | 3 | Used as-is, no configuration |
| LIMS with configured workflows | Sample management, result entry | 4 | Vendor product, configured not coded |
| Custom yield-calculation macro in a spreadsheet | Releases a batch number | 5 | Bespoke code performing a GxP calc |
| Chromatography data system with a custom report template script | Generates result certificates | Mixed: 4 platform, 5 for the script | The script is custom and gets Category 5 rigor |

---

## The V-Model Validation Lifecycle

The V-model is the structure for organizing validation activities across the system lifecycle. It lays out the phases of specification and verification as two arms of a "V," with implementation at the bottom point. The power of the model is the horizontal relationship: each verification activity on the right tests a specific specification on the left.

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

A frequent misreading of the V-model is treating it as a rigid waterfall that forbids iteration. The second edition is explicit that the V-model is a logical relationship between specification and verification, not a mandate to finish all specifications before any building or testing starts. Agile and incremental delivery are compatible with GAMP 5 as long as the linkage between requirements and verification holds and is documented. For a configured platform delivered in sprints, you can specify, build, and verify in increments, then pull the threads together into a coherent validation summary. The mechanics of running validation inside an agile delivery model are in [agile and DevOps CSV](/articles/agile-devops-csv).

### What good documentation looks like at each V-model stage

| Stage | Document | Owner | What "done" means |
|---|---|---|---|
| URS | User Requirements Specification | Business/process owner | Each requirement is testable, uniquely numbered, and risk-rated |
| FS | Functional Specification | Vendor or IT/system owner | Every URS line maps to one or more functions |
| Config/Design | Configuration or Design Specification | IT/system owner | The build is reproducible from the document |
| IQ | Installation Qualification protocol/report | IT/validation | Installed state matches the design baseline |
| OQ | Operational Qualification protocol/report | Validation | Each function verified, including limits and errors |
| PQ/UAT | Performance Qualification / UAT protocol/report | Business users | Real process runs end to end under the trained SOP |

The [validation deliverables guide](/articles/validation-deliverables-guide) covers how these documents fit together, and [writing validation protocols and reports](/articles/writing-validation-protocols-and-reports) covers how to author them so they pass review.

---

## Requirements Traceability

The Requirements Traceability Matrix (RTM) is the document that demonstrates your testing was complete: that every requirement was tested, and that every test executed traces back to a requirement. Without it, you can have a hundred test scripts and still be unable to show that the system does what it was supposed to do. It is also one of the first things a reviewer reaches for, because it exposes gaps fast: a requirement with no test, or a test with no requirement, both jump out.

A workable RTM structure:

| URS Req ID | Requirement Description | FS Ref | Risk | Test Script ID | Result | Status |
|---|---|---|---|---|---|---|
| URS-001 | System shall enforce individual user authentication | FS-004 | High | OQ-012 | Pass | Verified |
| URS-002 | System shall maintain an audit trail capturing prior value, user, date, and time for all GxP record changes | FS-007, FS-008 | High | OQ-018, OQ-019 | Pass | Verified |
| URS-014 | System shall produce a result certificate in the approved format | FS-021 | Medium | PQ-006 | Pass | Verified |
| URS-022 | System shall lock the record after second-person approval | FS-031 | High | OQ-027 | Pass | Verified |

Adding a risk column is a small change that pays off: it lets you show, at a glance, that high-risk requirements received deeper or independent testing. The RTM is a living document. It is maintained throughout the lifecycle and updated when requirements change through [change control](/articles/change-control-validated-systems) or when testing surfaces a gap. A static RTM signed once and never touched again usually means the system drifted away from its own documentation.

**Acceptance criteria for an RTM:** no orphan requirements (every URS line has at least one test or a documented rationale for not testing), no orphan tests (every executed test references a requirement), every high-risk requirement has a test, and the matrix matches the executed test record exactly. For the full discipline of writing requirements that trace cleanly, see [user requirements and traceability](/articles/user-requirements-and-traceability).

---

## IQ, OQ, PQ: What Each Phase Actually Proves

These three qualifications are the backbone of the validation test record. They are often dismissed as bureaucratic boxes, but they are logically distinct phases that together build the case that a system is fit for use. Keeping them distinct prevents the common failure of testing the same thing three times while missing something entirely.

**Installation Qualification (IQ)**
Verifies that the system is installed correctly: hardware matches what was specified, software is the version specified, and configuration settings match the approved design. IQ does not prove the system works. It proves you have the right system, installed and configured correctly, in the right place. IQ typically covers hardware inventory and specification, software and patch version confirmation, configuration baseline capture, network connectivity, integration points present, backup configuration, time synchronization to a controlled source (see [time stamps and system clock control](/articles/time-stamps-and-system-clock-control)), and the initial user-account and access-control setup matching the approved security design.

**Operational Qualification (OQ)**
Verifies that the system operates according to its functional specification: the functions it is supposed to perform actually work. This is where the system is exercised against the FS, function by function, under normal conditions and at boundaries and error conditions. Testing only the happy path is a recurring weakness; the interesting failures live at the edges. For a LIMS, OQ might cover sample login and result entry, specification-limit checking (including a result deliberately out of limit to confirm the flag fires), electronic approval workflows, audit-trail capture with prior-value retention, system-to-system interfaces, calculation accuracy against an independent reference, and access-control enforcement (confirming a user without rights is actually blocked, not just that an authorized user is allowed).

**Performance Qualification (PQ) / User Acceptance Testing (UAT)**
Verifies that the configured, operating system meets user requirements in its real use environment. This bridges "the system works" (OQ) and "the system does what we need in our operation." PQ tests follow actual business processes and are usually executed by the intended users with real or representative data and the site's own procedures. For the LIMS example, PQ might run a complete analytical workflow from sample receipt through result entry, second-person review, and batch disposition, confirming the data flows correctly and the people who will use it daily can do so following the trained procedure.

### A worked OQ test step

Here is what one defensible OQ step looks like, the level of detail an inspector wants to see:

> **Test ID:** OQ-018 (Audit trail captures prior value)
> **Linked requirement:** URS-002 / FS-007
> **Objective:** Confirm the system records the prior value, new value, user identity, and time-stamp when a result field is changed, and that the entry cannot be deleted by a standard user.
> **Pre-conditions:** Test environment at config baseline 1.4; tester logged in as analyst role.
> **Steps:** (1) Enter result 98.2 for sample S-1001 and save. (2) Change the result to 99.0 and save with reason "transcription error." (3) Open the audit trail for S-1001. (4) Log in as a standard user and attempt to delete the audit entry.
> **Expected result:** Audit trail shows prior value 98.2, new value 99.0, the analyst's user ID, a date-time stamp synchronized to the controlled clock, and the entered reason. The delete attempt is denied.
> **Acceptance criteria:** All five attributes present and the delete is blocked. Any missing attribute or successful delete is a failure.
> **Actual result / Pass-Fail / Tester / Date / Reviewer:** (completed at execution)

When a step fails, it does not get quietly overwritten. It is logged, investigated, and resolved through a controlled process; see [validation test failure management](/articles/validation-test-failure-management).

The boundaries between phases are not sacred, and the second edition encourages combining where it makes sense. Many organizations run integrated IQ/OQ for lower-risk Category 4 systems. What matters is coverage and traceability, not the number of separately bound documents. Factory and site acceptance testing can also be reused as validation evidence rather than re-run; see [factory and site acceptance testing](/articles/factory-site-acceptance-testing) and the leaner engineering route in [commissioning and qualification (ASTM E2500)](/articles/commissioning-qualification-astm-e2500).

---

## Risk-Based Calibration in Practice

GAMP 5 explicitly supports applying more rigorous validation to higher-risk systems and functions, and less to lower-risk ones. This is the part most often quoted and least often done well, because "risk-based" is sometimes used as cover for testing less without the analysis to justify it. The calibration factors:

- **Patient and product impact.** What happens if the system, or a specific function within it, fails or produces wrong data? Does it affect product release, patient safety, or the integrity of a regulatory submission? A dosing calculation and a cosmetic label field do not carry the same weight.
- **Software complexity and novelty.** Custom code carries more uncertainty than configured commercial software, which carries more than infrastructure. Novel technology carries more than a well-worn product in wide use.
- **Supplier maturity.** A system from an established GxP vendor with a documented development lifecycle and a real quality management system carries less inherent risk than a bespoke internal tool maintained by one person.
- **Existing evidence.** Vendor test documentation, wide industry use, and prior inspection history all reduce uncertainty, which is what risk-based effort is really chasing.

### A function-level risk method you can run

GAMP 5 directs risk assessment at the function level, not just the whole system. A practical method:

1. Break the system into GxP functions (result entry, limit check, audit trail, e-signature, interface, report).
2. For each function, rate **severity** of a failure (patient/product/data impact), **probability** of that failure, and **detectability** (would you notice before harm).
3. Combine into a risk class (High, Medium, Low). A common rule: high severity plus low detectability is always High regardless of probability.
4. Map the risk class to test depth: High gets independent, scripted, edge-and-error testing; Medium gets scripted happy-path plus key boundaries; Low can use unscripted or vendor-evidence-supported verification.
5. Record the rating and the resulting test strategy in the risk assessment, which becomes the audit trail for why you tested what you tested.

| GxP function | Severity | Detectability | Risk class | Test depth |
|---|---|---|---|---|
| Batch-release calculation | High | Low | High | Scripted, independent, recomputed by hand |
| Audit trail integrity | High | Low | High | Scripted, edge cases, deletion attempt |
| Out-of-limit flag | High | Medium | High | Scripted with deliberate out-of-limit input |
| Internal trend chart (no release impact) | Low | High | Low | Unscripted verification, vendor evidence |

**Worked example.** A Category 4 LIMS from a major vendor, deployed at hundreds of inspected sites, does not need the same depth as a custom application built internally last quarter. Both must be validated, but the scope differs. For the LIMS, you might rely on the vendor's functional testing for core platform behavior and focus your scripts on your configuration: your specifications, your calculations, your workflows, your interfaces, your security model. For the custom application, you cannot lean on anyone else, so you go deeper into design review, structural testing, and independent verification of every GxP-relevant function.

The discipline is to write this down. A validation plan that states what level of testing was applied to which functions and why, citing the specific risk factors, is defensible. "We applied a risk-based approach" with no documented analysis behind it is the version that gets cited, because an inspector cannot distinguish considered judgment from convenience. The mechanics of doing this rigorously are in [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology) and the broader [quality risk management](/articles/quality-risk-management) discipline that ICH Q9 underpins. Data-specific risk is in [data criticality and data risk](/articles/data-criticality-and-data-risk).

---

## Supplier Assessment and Reliance

For Category 4 and 5 systems, the vendor's development practices and quality system directly affect the reliability of the software you are deploying, and therefore how much you can lean on their evidence. GAMP 5 supports using supplier activities: if the vendor has a documented, auditable development lifecycle, their testing and quality records can reduce, though not eliminate, the scope of your site validation.

Supplier assessment typically includes:
- Review of the vendor's quality management system documentation
- Assessment of their development, testing, and release practices
- Review of the product's regulatory compliance documentation, including the supplier's position on [Part 11 and Annex 11](/articles/21-cfr-part-11-eu-annex-11) controls such as audit trails, electronic signatures, and access control
- A vendor audit, on-site or remote, for higher-risk or custom systems

### How to decide how much to rely on the supplier

The output of the assessment feeds the validation plan and sets the **reliance level**:

| Supplier evidence quality | Risk of system | Site validation scope |
|---|---|---|
| Strong, accessible, audited QMS and test records | Low-Medium | Lean: verify configuration and intended use, reference vendor evidence |
| Some evidence, not fully reviewed | Medium | Moderate: verify configuration plus core functions independently |
| Thin or unavailable | Any | Full: test as if no vendor evidence exists |
| Bespoke / single-developer internal tool | High | Full lifecycle, code review, independent verification |

A mature supplier with strong, accessible documentation justifies relying on their evidence and trimming redundant site testing. A supplier with thin quality documentation forces more complete site-level testing to compensate for the uncertainty they leave you holding. One caution that surfaces in inspections: relying on supplier testing is only defensible if you have actually obtained and reviewed that documentation. Citing a vendor's testing you have never seen is worse than doing your own, because it implies a control that does not exist. The wider practice of qualifying and monitoring suppliers is in [supplier and vendor qualification](/articles/supplier-vendor-qualification), the audit mechanics are in [conducting a supplier audit](/articles/conducting-a-supplier-audit), and the CSA-aligned framing of supplier assessment is in [software supplier assessment under CSA](/articles/software-supplier-assessment-csa). For hosted and cloud systems where the supplier also runs the infrastructure, see [cloud and SaaS validation](/articles/cloud-saas-validation).

---

## Roles and Responsibilities

Validation is a team activity, and a finding often traces to a role that was unclear about its accountability. GAMP 5 names a set of roles that map onto most quality systems:

| Role | Owns | Key responsibilities |
|---|---|---|
| Process / Business Owner | The intended use | Defines and approves the URS, signs off PQ/UAT, owns the system in operation |
| System Owner (often IT) | The system itself | Maintains the technical state, configuration, change control, infrastructure |
| Quality Assurance | The validated state | Approves the validation plan, protocols, deviations, and summary report; independent oversight |
| Validation Lead | The deliverables | Plans the work, authors or coordinates protocols, manages traceability and the summary |
| Subject Matter Experts / Testers | Execution | Write and execute scripts, document results, raise test failures |
| Supplier / Vendor | The product | Provides functional and design documentation, development and test evidence |

QA approval is what makes the package official; QA does not usually write the scripts but must independently approve the plan, the acceptance criteria, deviations, and the release decision. The broader mapping of who does what across the quality system is in [GxP roles and responsibilities](/articles/gxp-roles-responsibilities), and the validation career path is in [career guide: GxP validation](/articles/career-guide-gxp-validation).

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

The most consequential change is cultural rather than structural: the second edition repeatedly asks practitioners to apply critical thinking and to scale evidence to risk, rather than producing the same heavy package for every system. That sounds obvious, but the first edition was so often implemented as a documentation checklist that the framework became a byword for paperwork. The second edition is, in part, a correction of that drift. The new AI/ML appendix in particular has become a reference point as companies start validating model-driven systems; see [validating AI in GxP systems](/articles/validating-ai-gxp-systems) and the [GxP ML model lifecycle](/articles/gxp-ml-model-lifecycle).

---

## Common Failure Modes and Inspection Findings

A few patterns show up again and again in validation files that look complete but do not hold up. These are the generic finding types inspectors cite, not company-specific cases:

- **Requirements written to match the software.** If the URS reads like the vendor's feature list, it is documenting what the system does rather than what you need. Requirements should come from your process first.
- **Testing only what works.** OQ scripts that never exercise an out-of-limit result, a denied login, or a rejected entry have not tested the controls that matter most.
- **Audit trail assumed, not verified.** Confirm the trail captures the old value, new value, who, when, and why where required, and confirm it cannot be switched off by ordinary users. See [audit trail design and review](/articles/audit-trail-design-and-review) and [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).
- **Shared or generic logins.** Accounts that cannot attribute an action to one person break the single most basic Part 11 control. See [electronic signatures implementation](/articles/electronic-signatures-implementation) and [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control).
- **Frozen documents.** An RTM, configuration specification, or validation summary that no longer matches the live system is itself a finding, regardless of how good the original validation was.
- **Risk-based as a slogan.** Reduced testing with no documented risk rationale reads, to a reviewer, as untested.
- **Open test failures at release.** A validation summary signed while deviations are still open, with no impact assessment, will not survive review. See [validation summary report and release](/articles/validation-summary-report-and-release).
- **Legacy systems never validated.** Long-running systems that predate the program need retrospective treatment, not a pass; see [retroactive validation of legacy systems](/articles/retroactive-validation-legacy-systems).

For the operational side of keeping a system validated after go-live, including periodic review and the ongoing controls that prove the validated state is maintained, see [GxP computerized systems operations](/articles/gxp-computerized-systems-operations) and the [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review). Backup and recovery proof is in [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation).

---

## GAMP 5 and the FDA's CSA Guidance

The FDA finalized its Computer Software Assurance guidance for production and quality system software in 2025, following the September 2022 draft. (Be precise on this in an interview: the 2022 version was a draft, the final came in 2025.) The CSA guidance aligns closely with the GAMP 5 second edition philosophy but comes at it from the regulatory angle rather than the industry good-practice angle. The shorthand: CSA asks you to assure software is fit for its intended use using effort proportionate to risk, and to spend more on assurance and less on documentation for its own sake. That is the same instinct GAMP 5 second edition codifies.

CSA leans hard on two ideas worth knowing: first, separating software by whether it has **direct** versus **indirect** impact on product quality or the quality system, and second, accepting **unscripted testing** (ad hoc and exploratory) and vendor-supplied evidence for lower-risk functions instead of insisting on heavy scripted protocols everywhere. The two frameworks are complementary, not competing. A GAMP 5 validation approach, applied with genuine risk-based calibration, satisfies the intent of CSA. The full treatment is in the [Computer Software Assurance article](/articles/computer-software-assurance-fda).

One practical point to close on: use the second edition, not the 2008 first edition. If your procedures, templates, and training still reflect the first edition (five active categories, a documentation-first posture, a strictly sequential V-model), you are working from a framework that no longer matches either current industry practice or current FDA thinking. Updating to the second edition is not a paperwork refresh. It is the difference between a validation program that scales effort to risk and one that defends itself by sheer volume.

---

## Interview Questions You Should Be Able to Answer

These come up in CSV and quality interviews and in inspection interviews. Short, correct answers:

**Is GAMP 5 a regulation?**
No. It is an ISPE industry good-practice guide. The regulatory obligation to validate comes from 21 CFR Part 11, 21 CFR 211.68, EU GMP Annex 11, and 21 CFR 820.70(i) for devices. GAMP 5 is a method to meet those.

**What changed in the second edition?**
Category 2 (firmware) was removed, the emphasis shifted from documentation volume to critical thinking and risk-proportionate evidence, agile and iterative delivery and unscripted testing were explicitly supported, and new appendices were added including AI/ML.

**How do you decide a software category?**
By intended use, not product name. Infrastructure is 1, used-as-is is 3, vendor product configured without code is 4, anything bespoke or code-level is 5. Custom code inside a Category 4 platform gets Category 5 rigor.

**Explain the V-model and traceability.**
Left arm specifies (URS, FS, design), right arm verifies (IQ, OQ, PQ/UAT), each verification tests its matching specification, and the RTM proves every requirement was tested and every test traces to a requirement.

**What is the difference between OQ and PQ?**
OQ proves the system performs its functions against the functional spec, often function by function including error and boundary conditions. PQ/UAT proves the system meets user requirements in the real use environment following the trained procedure with representative data.

**How does risk-based validation actually work?**
Assess risk at the function level using severity, probability, and detectability, classify each function, and scale test depth to the class. High-risk functions get independent, scripted, edge-case testing; low-risk functions can use unscripted verification or vendor evidence. Document the rationale.

**Can you rely on supplier testing?**
Yes, if you have assessed the supplier, obtained and reviewed the evidence, and documented the reliance decision. Citing testing you have never seen is a finding.

**How does CSA relate to GAMP 5?**
They point the same way: assure fitness for intended use proportionate to risk, accept unscripted testing and vendor evidence for lower-risk functions, and reduce documentation for its own sake. The CSA guidance was a 2022 draft finalized in 2025.

**Is the V-model incompatible with agile?**
No. The V-model is a logical specification-to-verification relationship, not a mandate to finish all specs before building. You can specify, build, and verify in increments and consolidate the evidence, as the second edition explicitly supports.

For broader exam-style preparation, see [GxP quality interview preparation](/articles/gxp-quality-interview-preparation) and the [GxP CSV data integrity glossary](/articles/gxp-csv-data-integrity-glossary).

---

## Practical Tips

- Write the URS from your process before you have seen the demo. Requirements anchored to your operation are testable and defensible; requirements lifted from a feature sheet are not.
- Keep the risk assessment at the function level and let it drive the test plan. The plan should be readable as a direct consequence of the risk ratings.
- Always test at least one failure case per critical control: one out-of-limit result, one denied login, one rejected approval. Controls that are never exercised are not validated.
- Treat the RTM as the spine of the package, not an afterthought. Build it as you write requirements, not at the end to backfill.
- Synchronize the system clock to a controlled source and verify it in IQ. Time-stamp integrity underpins every audit trail.
- Re-categorize on material change. The most common quiet failure is a configured system that grew custom code nobody re-rated.
- Use the second edition language in your SOPs and templates. Inspectors notice when training and procedures still describe five categories and a documentation-first posture.
