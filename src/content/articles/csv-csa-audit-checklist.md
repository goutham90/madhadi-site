---
title: "CSV/CSA Self-Audit: Evaluating Your Computer System Validation Program"
description: "An operational self-audit checklist for computer system validation programs covering system inventory, validation documentation, testing evidence, traceability, supplier reliance, change control, periodic review, and retirement. Aligned with GAMP 5 Second Edition and FDA CSA final guidance, with roles, worked examples, and interview questions."
pubDate: 2026-06-01
tags: ["CSV", "CSA", "GAMP", "validation", "audit", "self-audit", "FDA"]
tier: "Advanced"
pillar: "csv-csa"
---

Most validation programs have documentation. Fewer have validation programs that actually demonstrate what the documentation says they do. This self-audit is designed to distinguish between the two.

Use this when you're preparing for an inspection, assessing a validation program you've inherited, or doing an annual program health check. Work through each section with someone who can access the actual systems and documentation, not just the SOPs describing what should happen. The difference matters: an SOP tells you what the organization intended; the records and the live systems tell you what it did. Inspectors care about the second one, and so should you.

A note on how to run this exercise. A self-audit is only useful if it is allowed to find things. Pair a validation person who knows the systems with a quality person who can be skeptical, and give them authority to open whatever they want, including the configuration screens, the change records, and the audit trails. Schedule it far enough from an actual inspection that you have time to fix what you find. Treat any finding you can't close immediately as a tracked item with an owner and a due date, the same way you would treat an inspection observation. A self-audit that produces a clean report and no actions is usually a self-audit that did not look hard enough.

The checklist below follows the validation lifecycle, from knowing what you have through retiring it. Each section pairs the questions you should be able to answer "yes" to with a short note on what the failure mode actually looks like in practice.

---

## The regulatory basis you are auditing against

Before the checklist, fix the standards in your head, because every finding you raise has to point back to one of these. An observation without a citation is an opinion, and an opinion does not survive a debate with a system owner who does not want to do the work.

- **21 CFR Part 11 (Electronic Records; Electronic Signatures), 1997.** The US predicate for electronic records and signatures in FDA-regulated activities. Drives requirements for audit trails, access controls, electronic signature manifestations, and copies of records. The FDA's 2003 guidance "Part 11, Electronic Records; Electronic Signatures, Scope and Application" narrowed enforcement to a risk-based reading, which is the legal root of the risk-based posture you see in CSV today.
- **EU GMP Annex 11 (Computerised Systems), current version effective 2011.** The European counterpart to Part 11. It is broader than Part 11 in that it explicitly covers validation, risk management, suppliers and service providers, data, accuracy checks, periodic evaluation, and business continuity. An EU revision has been in progress and you should track it, but you audit against the in-force version.
- **EU GMP Annex 15 (Qualification and Validation), revised 2015.** Sets expectations for the qualification and validation lifecycle that computerized system validation sits inside.
- **GAMP 5 Second Edition: A Risk-Based Approach to Compliant GxP Computerized Systems, ISPE, 2022.** Not a regulation, an industry guide, but the de facto framework inspectors expect you to know. It carries the software category model (1, 3, 4, 5), the V-model lifecycle, critical thinking, and the supplier-reliance logic. The Second Edition explicitly aligns with iterative and Agile delivery and with computer software assurance thinking.
- **FDA Guidance, "Computer Software Assurance for Production and Quality System Software," final 2025.** This is the assurance-effort-follows-risk guidance. It supports unscripted, ad hoc, and exploratory testing for lower-risk features and steers documentation effort toward where the risk is. Note the timeline carefully in interviews: it was a draft in September 2022 and was finalized in 2025. Calling the 2022 draft "final" is a tell that you have not read it.
- **ICH Q9(R1) Quality Risk Management, 2023 revision.** The risk-management discipline that the whole risk-based approach rests on. Your CSV risk assessments should be recognizable as Q9 thinking.
- **PIC/S PI 011 (Good Practices for Computerised Systems in Regulated GxP Environments).** The inspectorate guide many non-FDA, non-EU authorities use. Useful to know it exists if you supply globally.

For data integrity specifically, the same activities are also judged against MHRA and FDA data integrity guidance and the ALCOA+ attributes. Read [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11) and [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) alongside this checklist.

**Who owns this self-audit.** Define the roles before you start, or the report has no teeth.

| Role | Responsibility in the self-audit |
|---|---|
| Lead auditor (validation or CSV SME) | Plans the audit, drives the technical questioning, writes findings with citations |
| Independent reviewer (Quality Assurance) | Challenges conclusions, confirms findings are real and risk-rated correctly, approves the report |
| System owner / business process owner | Provides access, answers questions, owns the corrective actions for their systems |
| IT / system administrator | Pulls audit trails, configuration exports, access lists, version evidence |
| QA management | Receives the report, tracks actions to closure in the quality system, escalates patterns |

---

## Section 1: System Inventory and Classification

Every CSV/CSA audit starts here. If your inventory is incomplete or your classifications are wrong, everything downstream is unreliable. You cannot validate, change-control, or periodically review a system you don't know you have.

### System Inventory

- [ ] Does your site have a current, complete inventory of all GxP computerized systems?
- [ ] Does the inventory include all standalone instruments with embedded software (analytical instruments, process equipment)?
- [ ] Does the inventory include cloud-hosted and SaaS applications used for GxP activities?
- [ ] Does the inventory capture spreadsheets and small departmental tools that perform GxP calculations or hold GxP data, not just enterprise applications?
- [ ] Is each system's validation status documented (validated, in validation, retirement pending, risk-assessed as non-GxP)?
- [ ] Does the inventory identify the system owner (the function responsible for validation and change control)?
- [ ] Does each entry record the GxP impact basis, why the system is in scope, so the determination can be re-examined later?
- [ ] Is the inventory reviewed and updated at least annually?
- [ ] When a new system is deployed, is there a defined process for adding it to the inventory before it goes live?

**Why it is required.** Annex 11 paragraph 4.3 expects an up-to-date listing of relevant systems and their GMP functionality, and the inventory is the practical control that makes Annex 11 periodic evaluation (paragraph 11) and change control (paragraph 10) possible at all. No inventory entry, no lifecycle.

**What goes in a usable inventory.** A row per system with, at minimum: a unique system ID, the system name and version, a one-line description of GxP use, the GxP impact and the basis for it, the GAMP category, the validation status and last validation date, the regulatory record type (does it hold Part 11 electronic records, signatures, audit trails), the system owner and the QA owner, the hosting model (on-prem, vendor-hosted, SaaS), the periodic review frequency and last review date, and a data classification. A worked example:

| System ID | System | GxP use | GxP impact basis | GAMP cat | Status | Owner | Hosting | Periodic review |
|---|---|---|---|---|---|---|---|---|
| SYS-014 | Chromatography data system | Acquire/process release-test data | Generates data supporting batch release | 4 | Validated 2025-03 | QC | On-prem | Annual, last 2026-02 |
| SYS-027 | LIMS | Sample mgmt, result entry, spec checks | Holds GxP results and release decisions | 4 | Validated 2024-11 | QC | On-prem | Annual, last 2026-01 |
| SYS-051 | Stability calculation workbook | Trend stability data, predict shelf life | GxP calculation feeding shelf-life | 5 (macro) | In validation | Stability | On-prem | TBD |
| SYS-066 | Cold-chain monitoring SaaS | Shipment temperature records | Records supporting distribution decisions | 4 | Validated 2025-09 | Logistics | SaaS | Annual, last 2025-09 |

**What gaps look like:** A system that generates GxP data but isn't in the inventory has no change control, no periodic review, and no one who is accountable for its validated state. This is one of the most common findings in CSV-focused inspections. The usual culprits are not the big enterprise platforms, which everyone knows about, but the quiet ones: a calculation spreadsheet a lab built and never registered, a small instrument that came with the equipment and shipped with its own control software, a free trial of a cloud tool that quietly became the system of record. For the spreadsheet problem specifically, see [Infrastructure Qualification and Spreadsheet Validation](/articles/infrastructure-qualification-and-spreadsheet-validation), which is its own category of recurring finding.

A practical test of inventory completeness: walk the floor and the labs and ask the people doing the work what they use to record or calculate anything that touches a batch, a result, or a release decision. Then check each answer against the inventory. The systems that don't appear are your risk. A second test: reconcile the inventory against three independent lists you can pull without the inventory's help, the IT asset register, the calibrated-instrument list, and the list of accounts in your identity provider. Anything on those lists that handles GxP data and is missing from the CSV inventory is a finding.

**Acceptance criteria for this section.** The inventory was updated within the last twelve months, every GxP system you can find by independent means appears on it, every entry names an owner and a GxP-impact basis, and there is a documented gate that puts a new system on the list before go-live.

### GAMP 5 Software Category Assignment

For each system in the inventory:

- [ ] Has a GAMP 5 software category been assigned (Category 1 infrastructure, Category 3 non-configured, Category 4 configured, Category 5 custom)?
- [ ] Is the category assignment documented with rationale, not just asserted?
- [ ] For systems with multiple components (for example a LIMS with standard modules plus custom interfaces): are the different components correctly categorized separately?
- [ ] Has the category assignment been reviewed when significant changes were made to the system?
- [ ] Is the category assignment consistent with the validation approach (Category 4 systems should have configuration specifications and configuration testing; Category 5 systems should have software development lifecycle documentation)?

**Category assignment rationale:** In GAMP 5 Second Edition, published by ISPE in 2022, categories 3 to 5 are a continuum, not rigid boxes. A pure COTS product used as delivered with minimal parameterization sits near Category 3. The same product with extensive workflow configuration, custom reports, and integration scripting is closer to Category 5 even though the base product is COTS. The category should reflect what the site has actually done to the system, not what the vendor sells it as.

The quick reference for what each category implies:

| GAMP category | What it is | Typical examples | Validation effort it drives |
|---|---|---|---|
| 1 | Infrastructure software | Operating systems, databases, middleware | Qualify the platform, version control, no functional validation of the layer itself |
| 3 | Non-configured products | A balance readout, a simple instrument used as supplied | Verify it meets intended use; rely heavily on supplier evidence |
| 4 | Configured products | LIMS, CDS, ERP, MES used with site-specific configuration | Configuration spec + configuration and functional testing of the GxP-critical parts |
| 5 | Custom / bespoke | In-house applications, custom code, complex macros, custom interfaces | Full development lifecycle: design, code review, unit and integration testing |

Why does the category matter enough to audit? Because it drives the expected validation effort and deliverable set. Getting it wrong in the conservative direction wastes effort. Getting it wrong in the permissive direction, calling a heavily customized system "configured" when it carries custom code, leaves you with a thin testing package that won't survive scrutiny. A worked example: a chromatography data system such as Empower or an equivalent commercial CDS, installed and used with standard methods and standard reports, is reasonably treated as a configured Category 4 application. The moment someone writes custom calculation fields, custom export macros, or a bidirectional interface to LIMS, those specific components carry development lifecycle expectations closer to Category 5, and the testing must follow. The base product's category does not absolve the bespoke parts. For the framework behind these decisions, see [GAMP 5 Second Edition: The Framework](/articles/gamp5-csv-framework).

**Acceptance criteria.** Every system has a category with written rationale, multi-component systems are decomposed, and the deliverable set on the shelf matches what the category demands (no Category 5 system with only a Category 3 testing package).

---

## Section 2: Validation Documentation

### Validation Plans

For each validated system, check:

- [ ] Is there an approved validation plan or master validation plan?
- [ ] Does the validation plan describe the scope, approach, and rationale for the testing level applied?
- [ ] Does the validation plan document the risk-based rationale for testing scope, specifically why certain functions were tested at depth and others were addressed through supplier evidence or exploratory testing?
- [ ] Is the validation plan approved before testing begins, not after?
- [ ] Does the plan identify who is responsible for executing, reviewing, and approving each deliverable?

**What goes in a validation plan.** Scope and system boundary, GAMP category and the assurance strategy that follows from it, the regulatory and procedural references, the deliverables list, the risk-based testing rationale, roles and the approval matrix, assumptions and exclusions, the acceptance criteria for declaring the system validated, and the handling of deviations found during testing. The plan is the contract for the validation; everything downstream is judged against it.

The validation plan is where the risk thinking lives, and it is the document an inspector reads first to understand how you decided what to test. A plan that says "all functions will be fully scripted and tested" is easy to write but usually means nobody did the risk analysis; it also tends to generate a testing package so large that the quality of any individual test suffers. A plan that ties testing depth to function risk, and says so explicitly, is the modern expectation under both GAMP 5 Second Edition and the FDA's computer software assurance approach.

**Roles.** The validation lead authors the plan. The system owner confirms scope and intended use. QA approves it. A plan approved by QA after testing started is itself a finding, because the controls the plan defines were not in force when the work was done.

### User Requirements Specifications

- [ ] Does every validated system have a URS?
- [ ] Does the URS describe what the system must do from a user perspective, not how it does it?
- [ ] Does the URS identify which requirements are GxP-critical (those directly affecting product quality, patient safety, or record integrity)?
- [ ] Is the URS approved before configuration or development begins?
- [ ] Is the URS kept current through the system's lifecycle via change control?

**Common gap:** URS documents that describe system features from the vendor's perspective rather than the site's requirements. A URS that says "the system provides role-based access control" describes a feature. A URS that says "the system shall prevent analysts from approving their own results" describes a GxP requirement. Only the second version is meaningful for validation scope decisions, because only the second version can be traced to a test that proves something a regulator cares about. When you audit a URS, sample a handful of requirements and ask: could I write a test that passes or fails against this statement? Vague, feature-flavored requirements fail that test and tend to produce vague, feature-flavored tests downstream.

A good requirement is uniquely numbered, atomic (one testable idea), unambiguous, and tagged with its GxP criticality. A worked example of a sampled set:

| Req ID | Requirement | GxP critical? | Testable? |
|---|---|---|---|
| URS-101 | The system shall prevent a user from approving a result they entered. | Yes | Yes, attempt self-approval, expect rejection |
| URS-102 | The system shall record an audit trail entry for every change to a result, capturing old value, new value, user, timestamp, and reason. | Yes | Yes, change a value and inspect the trail |
| URS-103 | The system shall present a friendly, modern user interface. | No | No, rewrite or drop |
| URS-104 | The system shall lock the account after five failed login attempts. | Yes (access control) | Yes, fail five times, expect lockout |

URS-103 is the kind of requirement an audit should flag: it cannot be passed or failed. For how requirements feed traceability end to end, see [User Requirements and Traceability](/articles/user-requirements-and-traceability).

### Testing Documentation

For scripted test protocols:

- [ ] Do all test scripts have predefined steps, expected results, and acceptance criteria, defined before execution?
- [ ] Are test scripts linked to the requirements they verify (traceability matrix)?
- [ ] Are test execution records complete, with every step carrying a pass/fail result and an executor signature?
- [ ] Are deviations from expected results documented on the test record, not corrected and re-run without documentation?
- [ ] Is there a documented review and approval of test results?
- [ ] Where screenshots or printouts are used as objective evidence, are they legible, attributable, and clearly tied to the step they support?

For unscripted/exploratory testing (under CSA):

- [ ] Is there a written record of what was explored, what the tester was looking for, and what was found?
- [ ] Is the purpose of the exploratory testing documented (why this approach was applied to this function)?
- [ ] Does the record include an assessment of whether the system behaved as expected?
- [ ] Is the exploratory testing record approved by QA?

**The CSA shift in practice:** The FDA's final guidance, "Computer Software Assurance for Production and Quality System Software," issued in 2025, supports using less burdensome testing methods, including unscripted and ad hoc testing, for lower-risk features. The practical change is not that documentation disappears. It is that the documentation now has to justify the method. The risk reasoning must be written down. "This function was addressed through exploratory testing because it is not GxP-critical and the vendor's development documentation provides adequate evidence of its reliability" is a defensible entry in a validation plan. "We used exploratory testing because it was faster" is not. The most common CSA-era audit finding is not too little scripting; it is exploratory testing with no record of what was explored or why that approach was chosen. For the underlying guidance, see [FDA Computer Software Assurance: Final Guidance](/articles/computer-software-assurance-fda).

It helps to look at the same function two ways. The table below shows how a single feature might be handled depending on its risk.

| Function | GxP risk | Reasonable assurance approach | Evidence to expect |
|---|---|---|---|
| Electronic signature on batch disposition | High (record integrity, release decision) | Scripted test with predefined steps and acceptance criteria | Full execution record, screenshots, reviewer approval |
| Audit trail captures who/what/when on data change | High (data integrity) | Scripted test plus targeted negative testing | Execution record showing the trail entries, reviewer approval |
| Standard report layout and formatting | Medium | Unscripted, scenario-based test against the requirement | Note of what was checked and the outcome, QA approval |
| Cosmetic UI label on a non-GxP screen | Low | Exploratory, may rely on supplier evidence | Brief record that the function works as expected |

The point of the table is not to memorize the rows. It is the pattern: assurance effort tracks risk, and every row leaves a record proportionate to that risk.

**What good test evidence looks like, concretely.** A scripted step that survives an inspection reads like this:

> Step 7. As user ANALYST1, open result R-2025-0412 and change the assay value from 98.2 to 99.1. Enter reason "transcription correction." Save.
> Expected result: System saves the change and writes an audit trail entry recording old value 98.2, new value 99.1, user ANALYST1, timestamp, and reason "transcription correction."
> Actual result: As expected. Audit trail entry captured (screenshot 7a attached, page 14).
> Pass / Fail: PASS. Executed by ANALYST1 / J. Doe, 2026-02-11 09:42. Reviewed by QA / M. Roe, 2026-02-12.

Note what makes it good: a specific action, a specific expected outcome, objective evidence tied to the step, attribution, and an independent review. A step that says only "verify audit trail works" with "Pass" written next to it proves nothing.

**Test failure handling.** When a step fails, the failure stays on the record. You raise a test incident or deviation, assess impact, fix the system or the script, and re-execute, with all of it documented. Deleting a failed result and quietly re-running is one of the most damaging patterns an inspector can find, because it puts the integrity of every other "pass" in doubt. The discipline is covered in [Validation Test Failure Management](/articles/validation-test-failure-management).

### Validation Summary Reports

- [ ] Does every completed validation have a summary report?
- [ ] Does the summary report state a clear conclusion: is the system fit for intended use?
- [ ] Does the summary report document any unresolved deviations or risk acceptances?
- [ ] Is the report approved by QA before the system goes into production use?

A summary report that recites activities but never states a conclusion is a surprisingly common gap. The report exists to make a decision: the system is fit for intended use, or it is not, with named exceptions. If a reader has to infer the conclusion, the report has not done its job. The report should reconcile against the plan (every planned deliverable accounted for), list every deviation with its disposition, and carry the explicit release statement and QA approval that authorizes production use. For the full set of expected documents and what each one is for, see [Validation Deliverables Guide](/articles/validation-deliverables-guide) and [Validation Summary Report and Release](/articles/validation-summary-report-and-release).

---

## Section 3: Requirements Traceability

Traceability is the mechanism that proves your testing was complete: that every requirement was tested and every test result maps back to a requirement.

- [ ] Is there a requirements traceability matrix for each validated system?
- [ ] Does the RTM map every URS requirement to at least one test (scripted or unscripted) or other documented evidence?
- [ ] Does the RTM map every test back to at least one URS requirement (no orphan tests)?
- [ ] If the URS was updated through change control, was the RTM also updated?
- [ ] Are there any URS requirements with no corresponding test? If so, is there documented rationale (for example, covered by vendor documentation, addressed through supplier assessment)?

**What incomplete traceability looks like:** A URS with 45 requirements and a test package with 60 test scripts, but no RTM. You don't know which tests cover which requirements. You don't know which requirements have no test. You can't show that the validation was complete. An inspector asking "which test proves that your system enforces your access control requirement?" should get a traceable answer in under two minutes.

Under CSA, traceability becomes more important, not less. When some requirements are covered by scripted tests, some by unscripted testing, and some by supplier evidence, the RTM is the one place that shows the whole picture and demonstrates that nothing fell through the gap between methods. A modern RTM should record, for each requirement, the assurance method used and a pointer to the evidence, whatever its form. A worked example of a modern, method-aware RTM:

| Req ID | Requirement (short) | Risk | Assurance method | Evidence reference | Result |
|---|---|---|---|---|---|
| URS-101 | Prevent self-approval of results | High | Scripted + negative test | TS-12 steps 3-9 | Pass |
| URS-102 | Full audit trail on result change | High | Scripted | TS-14 steps 1-6 | Pass |
| URS-110 | Standard COA report format | Medium | Unscripted scenario test | EXP-03 record | Pass |
| URS-118 | Database backup integrity | Medium | Supplier evidence + IT procedure | SUP-ASSESS-07, IT-SOP-22 | Accepted |
| URS-120 | Time stamps from controlled clock | High | Scripted | TS-19 step 4 | Pass |

The acceptance test for an RTM is bidirectional closure: no requirement without evidence, no test without a parent requirement, and a documented rationale for any requirement covered by something other than a site test.

---

## Section 4: Supplier Assessment and Reliance

Supplier assessment is the foundation for relying on vendor documentation to reduce site testing scope. Without a documented assessment, claiming supplier evidence as a validation basis is not defensible.

- [ ] Has a supplier assessment been performed for each validated system?
- [ ] Does the assessment evaluate the vendor's software development lifecycle and quality management system?
- [ ] Does the assessment evaluate the vendor's testing documentation (what they tested, at what depth, to what acceptance criteria)?
- [ ] Does the assessment reach a documented conclusion about what site-level testing can be reduced or eliminated based on vendor evidence?
- [ ] Is there a schedule for reviewing or renewing supplier assessments?
- [ ] For cloud/SaaS systems: does the supplier assessment cover the vendor's data security practices, backup and recovery procedures, and audit trail capabilities?

**Why it is required.** Annex 11 paragraph 3.2 makes the regulated company responsible for assessing competence and reliability of suppliers and service providers, and it is the explicit basis for using supplier activity in validation. GAMP 5 builds the same idea into its reliance logic: the more you rely on a supplier, the more your assessment has to support it. You cannot transfer accountability to the vendor, only effort.

**What an adequate supplier assessment covers:** For a major commercial LIMS or CDS vendor, the assessment might include review of the vendor's ISO 9001 or equivalent certification, review of their SDLC documentation, assessment of their regulatory compliance documentation (a Part 11 assessment and an EU Annex 11 assessment), review of their published test evidence for the specific version being deployed, and possibly an audit of the vendor's facilities or a remote assessment via questionnaire. The outcome determines how much of the vendor's testing you can rely on without re-executing it at your site.

The risk tiering decides the rigor. A worked example of how assessment depth scales:

| Supplier criticality | Driver | Minimum assessment |
|---|---|---|
| High | Hosts or processes GxP data, custom development for you | On-site or thorough remote audit, SDLC review, test evidence review, periodic re-audit |
| Medium | Configured GxP product, vendor-hosted standard service | Documented questionnaire, certification review, contractual quality terms |
| Low | Non-GxP-critical or infrastructure-only | Certification check, register the supplier, light review |

The recurring weak spot here is the assessment that concludes nothing. "Vendor documentation reviewed" is not an assessment; it is a sentence. A usable assessment says what was reviewed, what it found, and what site testing that justifies skipping or reducing. If a supplier assessment cannot answer "so what can we now not test ourselves," it is not doing the job it exists to do. The discipline overlaps heavily with general vendor management, so it is worth reading alongside [Supplier and Vendor Qualification](/articles/supplier-vendor-qualification) and, for the CSA-specific angle, [Software Supplier Assessment under CSA](/articles/software-supplier-assessment-csa).

For systems hosted by the vendor, the assessment has to reach into operational territory the site cannot see directly: where the data physically lives, how backups are tested, how the vendor manages its own changes and patches, and whether the vendor will notify you before an upgrade hits your validated environment. Those questions are specific enough that cloud and SaaS validation deserves its own treatment, covered in [Cloud and SaaS Validation](/articles/cloud-saas-validation). The quality agreement that pins down upgrade notification, data ownership, and audit rights is part of the same control set; see [CDMO Oversight and Quality Agreements](/articles/cdmo-oversight-quality-agreements) for the agreement mechanics.

---

## Section 5: Change Control

Change control for validated systems is where most ongoing validation programs have gaps. Systems don't stay static, and changes that aren't properly controlled erode the validated state.

- [ ] Is there a documented change control procedure for validated systems?
- [ ] Does the procedure require an impact assessment for every change request before it's approved?
- [ ] Does the impact assessment evaluate whether the change affects GxP-critical functions, what testing is required, and whether revalidation is needed?
- [ ] Are changes categorized (minor/major or similar tier system) with defined testing and documentation requirements for each tier?
- [ ] Are all changes, including vendor patches, version upgrades, and configuration changes, going through the change control process?
- [ ] Is there evidence that the required testing for each change was actually performed and documented?
- [ ] Is the validation summary report updated or supplemented when significant changes are made?

**Why it is required.** Annex 11 paragraph 10 requires that changes to computerized systems be made in a controlled manner per a defined procedure. The change record is the only thing that explains why a validated system as it runs today still matches the validated state you signed off at go-live.

**What an impact assessment evaluates, in order.** Does the change touch a GxP-critical function or a Part 11 record/signature/audit trail? Does it change data, calculations, or interfaces? What is the worst-case effect if the change misbehaves? What level of testing does that worst case justify? Is any revalidation or regression testing needed, and on which functions? The output is a change category and a defined test and documentation set.

A worked tiering example:

| Change | Touches GxP function? | Category | Testing required |
|---|---|---|---|
| New non-GxP cosmetic report logo | No | Minor | Verify report still generates, light check |
| New calculation field feeding a release spec | Yes | Major | Scripted test of the calculation, regression on affected report, RTM update |
| Vendor patch, security only, no functional change per release notes | Possibly | Expedited | Documented impact assessment, smoke test of GxP-critical paths |
| Major version upgrade of the CDS | Yes | Major | Re-qualification of affected functions, supplier evidence review, summary report supplement |

**The patch management gap:** Vendor security patches are often applied quickly, as they should be for security, but without formal change control. A validated system should have an emergency or expedited change control pathway that applies an abbreviated but documented impact assessment and testing to patches before they reach the production GxP system. Applying patches without any change control record means you have no documented basis for the continued validated state of the system. The fix is not to slow down security; it is to give security changes a fast, documented lane rather than no lane at all. The boundary between IT-driven infrastructure change and GxP change control is a common source of confusion; see [IT Change and Configuration Management in GxP](/articles/it-change-and-configuration-management-gxp).

A second common gap is the configuration change that nobody treats as a change. Adjusting a user permission group, adding a new instrument method, modifying a report template, changing a calculation parameter: each can affect a GxP-critical function, and each can drift outside change control because it feels like routine administration rather than a "change." When you audit change control, do not only read the change log. Compare the current configuration of a sampled system against its documented validated configuration and ask whether every difference has a change record. The differences with no record are your finding. Change control for validated systems has enough nuance that it warrants its own reading: see [Change Control for Validated Systems](/articles/change-control-validated-systems).

---

## Section 6: Periodic Review

Periodic review confirms that validated systems remain in a state of control: that the validation done at go-live still applies to the system as it's running today.

- [ ] Is there a periodic review schedule for all validated systems?
- [ ] Are reviews actually occurring on schedule? (Check the last review date for each system.)
- [ ] Does the periodic review cover change log review, deviation and OOS review related to the system, audit trail sampling, current software version versus validated version, user access review, and backup/recovery status?
- [ ] Does the review produce a documented conclusion: does the system remain fit for intended use?
- [ ] When periodic review identifies gaps, are CAPAs opened and tracked to completion?
- [ ] Are systems that have undergone significant changes since the last review flagged for a focused review before the scheduled periodic review?

**Why it is required.** Annex 11 paragraph 11 requires that computerized systems be periodically evaluated to confirm they remain in a valid state and compliant. The review frequency should be risk-based, with higher-impact systems reviewed more often.

**A periodic review checklist that actually does something.** For each system, on each review:

1. Pull and read the change log since the last review. Confirm each change went through change control and required testing was done.
2. List deviations, incidents, and out-of-specification events involving the system. Look for repeat issues that signal an unstable system.
3. Sample audit trail entries. Confirm the trail is on, capturing the expected fields, and being reviewed per procedure.
4. Reconcile the current production version against the validated version. They must match, or a change record must explain the difference.
5. Reconcile the user access list against current personnel and roles. Remove leavers, confirm privileged accounts are still justified.
6. Confirm backup and restore are running and that a restore has been tested within the policy interval.
7. Write a conclusion: the system remains fit for intended use, or it does not, with actions.

**The gap between schedule and execution:** It's common to see a validated system inventory with a note that a system requires annual periodic review, and then to find that the last completed review was 26 months ago. The review schedule is only useful if it's enforced. Assign review ownership clearly in the system inventory, set calendar reminders, and track overdue reviews as compliance metrics that someone is accountable for in a quality management review.

A periodic review that only confirms "no changes, system fine" without actually sampling the audit trail or comparing the running version to the validated version is a paperwork exercise. The value of the review is in the active checks: pulling a sample of audit trail entries to confirm the trail is working and being reviewed, reconciling the user access list against current personnel and roles, and confirming that the version in production is the version that was validated. Each of those is a place where reality drifts from documentation, which is exactly what periodic review exists to catch. Periodic review also intersects with the validation master plan and with broader system operations, covered in [Validation Master Plan and Periodic Review](/articles/validation-master-plan-and-periodic-review) and [GxP Computerized Systems Operations](/articles/gxp-computerized-systems-operations). For the audit-trail review mechanics, see [Operationalizing Audit Trail Review](/articles/operationalizing-audit-trail-review).

---

## Section 7: Retirement and Data Migration

System retirement is a validation lifecycle phase that's often skipped. When a system is retired, the GxP records it holds still have retention requirements, and any data migration to a successor system or archive needs to be validated.

- [ ] When a validated system is retired, is there a documented retirement plan?
- [ ] Does the retirement plan address how historical GxP data will be retained and remain accessible for the required retention period?
- [ ] If data is migrated to a new system, was the migration validated (data mapping verified, completeness confirmed, integrity checks performed)?
- [ ] Are retired systems removed from the active validation inventory rather than left on the list with "retired" status and no retirement documentation?
- [ ] Is archived data from retired systems retrievable in human-readable form, with its dynamic functionality and audit trail preserved where required?

**Why it is required.** Record retention obligations do not end when the system that created the records is switched off. Under the predicate GMP rules (for example 21 CFR 211 record-retention requirements) and equivalents, GxP records must remain accessible and readable for their full retention period, with their integrity intact. The audit trail and the metadata are part of the record, not optional extras.

**What a retirement plan contains.** The decommissioning steps and sequence, the data retention and archival approach, the migration plan if a successor system exists, the verification that migrated data is complete and accurate, the handling of the audit trail and metadata, the access plan for archived data during the retention period, and the formal approval to retire. A migration verification, concretely, samples records across the data set and confirms field-by-field that the value, the metadata, and the audit trail survived the move:

| Check | Method | Acceptance |
|---|---|---|
| Record count | Count source vs target | Equal, or every difference explained |
| Field mapping | Sample N records, compare each mapped field | 100% match on sampled GxP fields |
| Audit trail preservation | Inspect migrated audit trail for sample records | Trail present, readable, attributable |
| Readability of archive | Open archived records without the original system | Human-readable, dynamic data still queryable where required |

The quiet risk in retirement is the audit trail. It is straightforward to export the data; it is much harder to preserve the metadata and the audit trail in a form that remains usable years later. If the only surviving copy of a retired system's records is a flat export with no audit trail and no context, the records have lost the integrity attributes that made them GxP records in the first place. Migration to a new platform is its own validation problem with its own failure modes, covered in [Data Migration Validation](/articles/data-migration-validation). The distinction between a static export and a true copy that preserves dynamic functionality is itself a recurring inspection topic; see [Static, Dynamic Records and True Copies](/articles/static-dynamic-records-true-copies).

---

## Section 8: Program Governance

The first seven sections audit individual systems. This one audits the program that is supposed to keep all of them in control.

### SOPs and Procedures

- [ ] Is there a Master Validation Plan or equivalent governing document describing the overall CSV/CSA approach?
- [ ] Does the governing document reflect current practices, including CSA risk-based scope decisions?
- [ ] Are validation SOPs aligned with GAMP 5 Second Edition and the FDA CSA final guidance?
- [ ] Do validation SOPs specify what constitutes adequate documentation for exploratory versus scripted testing?

A frequent finding is the SOP that still mandates full scripted testing for everything while the team has quietly moved to a risk-based, CSA-style approach in practice. When procedure and practice disagree, an inspector can write you up either way: for not following your own SOP, or for an SOP that no longer reflects current expectations. The procedures have to catch up to the practice, or the practice has to follow the procedure. Pick one and align.

### Training and Competency

- [ ] Are all validation practitioners trained on GAMP 5 Second Edition?
- [ ] Are reviewers and approvers of validation documentation trained on what adequate validation looks like?
- [ ] For systems with unusual technical characteristics (cloud, AI/ML, custom APIs), are the practitioners validating them technically competent to design and evaluate testing for those specific technologies?

Competency is not the same as having attended a training session. The real test is whether the people approving validation documentation can recognize a weak test package when one crosses their desk. For systems that use machine learning or other adaptive components, the validation thinking is genuinely different, and a team trained only on traditional CSV may not know what to ask; that gap is worth examining directly, and is addressed in [Validating AI in GxP Systems](/articles/validating-ai-gxp-systems).

### QA Oversight

- [ ] Does QA review and approve validation plans, protocols, and reports, rather than just signing them?
- [ ] Are QA reviewers challenging inadequate validation documentation, or approving what's presented to them?
- [ ] Is there a mechanism for QA to identify validation gaps proactively, not just at inspection time?

QA oversight is the control that catches the failures the first seven sections describe. If QA signs whatever is put in front of it, none of the other controls are reliable, because there is no independent check. The healthiest signal in a program is a QA function that sometimes sends validation packages back, and a documented record of those rejections. A QA group that has never rejected anything is either supervising perfect work or not really looking.

---

## Common inspection-finding patterns

These are the recurring patterns CSV-focused inspectors and auditors hit, drawn from public 483 and warning-letter themes, with no company names. Audit yourself against each before someone else does.

- **Ghost systems.** A GxP spreadsheet, instrument, or cloud tool generating or holding data with no inventory entry, no validation, and no owner. Usually surfaces when an inspector follows a number on a printout back to its source.
- **Audit trail not enabled or not reviewed.** The system can produce an audit trail, but it was left off, or it is on and nobody reviews it. A common variant: shared logins that make the trail non-attributable.
- **No traceability.** Tests and requirements both exist, but nothing connects them, so completeness cannot be shown.
- **Test failures handled informally.** Failed steps corrected and re-run with no deviation, or "Pass" recorded against steps with no objective evidence.
- **Configuration drift.** The running configuration differs from the validated configuration with no change record. Permission groups, methods, report templates, and calculation parameters are the usual suspects.
- **Patches outside change control.** Security and version patches applied straight to production GxP systems with no impact assessment.
- **Supplier reliance with no assessment.** Vendor testing claimed as the validation basis with no documented assessment to support the reliance.
- **Periodic reviews overdue.** A schedule on paper, reviews months or years late in practice.
- **Summary reports with no conclusion.** Activity recited, fitness-for-intended-use never stated.
- **SOP-practice mismatch.** Procedures that still demand full scripting while the team runs a risk-based approach, or vice versa.

For how these get classified and escalated once found, see [Audit Finding Classification](/articles/audit-finding-classification), and for the broader set of recurring patterns, [FDA Warning Letter Patterns](/articles/fda-warning-letters-patterns).

---

## Interview questions on CSV/CSA self-audit

If you run or own a validation program, expect these in an interview or an inspection. Short, defensible answers follow each.

**"How do you decide how much to test a computerized system?"**
Risk drives effort. I assess each function for GxP impact and the consequence of failure, then match the assurance method to that risk: scripted testing with predefined acceptance criteria for high-risk functions like electronic signatures and audit trails, unscripted scenario testing for medium risk, and exploratory testing or supplier evidence for low risk. The reasoning is written in the validation plan and reflected in the RTM. This is the GAMP 5 Second Edition and FDA computer software assurance approach.

**"Walk me through the difference between CSV and CSA."**
CSV is the traditional validation lifecycle, often applied with heavy scripted documentation across the board. CSA, from the FDA's 2025 final guidance, is not a different lifecycle, it is a way of allocating assurance effort to where the risk is, so unscripted and exploratory methods are acceptable for lower-risk features and the heavy documentation concentrates on what affects product quality, patient safety, and record integrity. CSA reduces low-value paperwork; it does not reduce the obligation to think about risk or to keep a record of the reasoning.

**"A vendor pushes a security patch to a validated system. What has to happen?"**
It goes through change control, even if it is fast. An expedited pathway applies a documented impact assessment, confirms whether GxP-critical functions or records could be affected, runs proportionate testing such as a smoke test of the critical paths, and records the result before or immediately around deployment. Speed for security is fine; skipping the documented basis for the validated state is not.

**"Which GAMP category is a configured LIMS, and what changes that?"**
Category 4, configured product. It stays Category 4 as long as it is used with configuration. The moment someone adds custom code, complex macros, or a bespoke interface, those specific components carry Category 5 development-lifecycle expectations, and the testing has to follow for those parts even though the base product is still Category 4.

**"When did the FDA CSA guidance become final?"**
It was a draft in September 2022 and was finalized in 2025. The draft is not citable as final.

**"How do you prove your validation was complete?"**
The requirements traceability matrix. Every requirement maps to evidence, scripted, unscripted, or supplier, and every test maps back to a requirement, with documented rationale for anything covered by something other than a site test. I can trace a single GxP-critical requirement from URS to evidence to result to current validated state in a couple of minutes.

**"What is the biggest risk in retiring a system?"**
The audit trail and metadata. Exporting the values is easy; keeping the records human-readable, attributable, and with their audit trail intact for the full retention period is the hard part, and a flat export that loses the trail has lost what made the records GxP records.

**"Your SOP says full scripted testing for everything but the team uses exploratory testing. Is that a problem?"**
Yes, both ways. An inspector can cite us for not following our own SOP, or for an SOP that no longer reflects current expectations. The procedure and the practice have to be aligned, with the risk-based approach written into the SOP.

For broader interview preparation across CSV and data integrity, see [GxP Quality Interview Preparation](/articles/gxp-quality-interview-preparation) and [Career Guide: GxP Validation](/articles/career-guide-gxp-validation).

---

## Interpreting Your Results

The point of a self-audit is not the number of unchecked boxes. It is the pattern they form. A single overdue review is an administrative miss. A cluster of related gaps usually points to a structural problem that will keep generating findings until the structure changes.

**A red flag pattern that should trigger deeper investigation:**

- System inventory hasn't been updated in 12 or more months
- Multiple systems showing overdue periodic reviews
- Change control records exist but testing evidence is consistently thin
- Supplier assessments that say "documentation reviewed" but don't specify what was reviewed or what was concluded
- Validation summary reports that describe activities but never state a fit-for-intended-use conclusion

**A healthy program looks like:**

- Complete, current system inventory with clear ownership and a documented GxP-impact basis for each entry
- Validation approaches documented with risk rationale that a new person could understand
- Change control records with testing proportionate to change scope, including patches and configuration changes
- Periodic review completed on schedule with documented findings and CAPAs
- Supplier assessments that actually say what they found and what site testing they justify reducing
- A QA function with a track record of sending weak packages back

If you're preparing for an inspection, the test is simple. Pick a random validated system and try to trace a single GxP-critical requirement from URS to test (or other documented assurance) to result to current validated state. If you can do that in 10 minutes, your program is in reasonable shape. If you can't, that gap will be visible to an inspector in the same 10 minutes.

One last framing. The strongest validation programs treat this kind of self-audit as routine rather than as inspection panic. The gaps it finds are cheap to fix on your own schedule and expensive to fix under an inspector's gaze. The questions above do not change much from year to year. What changes is whether the answers are still true.

---

## Related Articles

- [GAMP 5 Second Edition: The Framework](/articles/gamp5-csv-framework)
- [FDA Computer Software Assurance: Final Guidance](/articles/computer-software-assurance-fda)
- [CSV Risk Assessment Methodology](/articles/csv-risk-assessment-methodology)
- [Change Control for Validated Systems](/articles/change-control-validated-systems)
- [Validation Deliverables Guide](/articles/validation-deliverables-guide)
- [Validation Summary Report and Release](/articles/validation-summary-report-and-release)
- [User Requirements and Traceability](/articles/user-requirements-and-traceability)
- [Validation Test Failure Management](/articles/validation-test-failure-management)
- [Validation Master Plan and Periodic Review](/articles/validation-master-plan-and-periodic-review)
- [Cloud and SaaS Validation](/articles/cloud-saas-validation)
- [Supplier and Vendor Qualification](/articles/supplier-vendor-qualification)
- [Software Supplier Assessment under CSA](/articles/software-supplier-assessment-csa)
- [Data Migration Validation](/articles/data-migration-validation)
- [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11)
- [GxP Quality Interview Preparation](/articles/gxp-quality-interview-preparation)
