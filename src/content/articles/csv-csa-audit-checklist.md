---
title: "CSV/CSA Self-Audit: Evaluating Your Computer System Validation Program"
description: "A detailed self-audit checklist for computer system validation programs — system inventory, validation documentation, testing evidence, change control, supplier management, and periodic review. Aligned with GAMP 5 Second Edition and FDA CSA final guidance."
pubDate: 2026-06-04
tags: ["CSV", "CSA", "GAMP", "validation", "audit", "self-audit", "FDA"]
tier: "Advanced"
pillar: "csv-csa"
---

Most validation programs have documentation. Fewer have validation programs that actually demonstrate what the documentation says they do. This self-audit is designed to distinguish between the two.

Use this when you're preparing for an inspection, assessing a validation program you've inherited, or doing an annual program health check. Work through each section with someone who can access the actual systems and documentation — not just the SOPs describing what should happen.

---

## Section 1: System Inventory and Classification

Every CSV/CSA audit starts here. If your inventory is incomplete or your classifications are wrong, everything downstream is unreliable.

### System Inventory

- [ ] Does your site have a current, complete inventory of all GxP computerized systems?
- [ ] Does the inventory include all standalone instruments with embedded software (analytical instruments, process equipment)?
- [ ] Does the inventory include cloud-hosted and SaaS applications used for GxP activities?
- [ ] Is each system's validation status documented (validated, in validation, retirement pending, risk-assessed as non-GxP)?
- [ ] Does the inventory identify the system owner (the function responsible for validation and change control)?
- [ ] Is the inventory reviewed and updated at least annually?
- [ ] When a new system is deployed, is there a defined process for adding it to the inventory?

**What gaps look like:** A system that generates GxP data but isn't in the inventory has no change control, no periodic review, and no one who is accountable for its validated state. This is one of the most common findings in CSV-focused inspections.

### GAMP 5 Software Category Assignment

For each system in the inventory:

- [ ] Has a GAMP 5 software category been assigned (Category 1 infrastructure, Category 3 non-configured, Category 4 configured, Category 5 custom)?
- [ ] Is the category assignment documented with rationale, not just asserted?
- [ ] For systems with multiple components (e.g., a LIMS with standard modules plus custom interfaces): are the different components correctly categorized separately?
- [ ] Has the category assignment been reviewed when significant changes were made to the system?
- [ ] Is the category assignment consistent with the validation approach (Category 4 systems should have configuration specifications and configuration testing; Category 5 systems should have software development lifecycle documentation)?

**Category assignment rationale:** In GAMP 5 Second Edition, categories 3 to 5 are a continuum, not rigid boxes. A pure COTS product used as-delivered with minimal parameterization sits near Category 3. The same product with extensive workflow configuration, custom reports, and integration scripting is closer to Category 5 even though the base product is COTS. The category should reflect what the site has actually done to the system, not what the vendor sells it as.

---

## Section 2: Validation Documentation

### Validation Plans

For each validated system, check:

- [ ] Is there an approved validation plan or master validation plan?
- [ ] Does the validation plan describe the scope, approach, and rationale for the testing level applied?
- [ ] Does the validation plan document the risk-based rationale for testing scope — specifically why certain functions were tested at depth and others were addressed through supplier evidence or exploratory testing?
- [ ] Is the validation plan approved before testing begins, not after?
- [ ] Does the plan identify who is responsible for executing, reviewing, and approving each deliverable?

### User Requirements Specifications

- [ ] Does every validated system have a URS?
- [ ] Does the URS describe what the system must do from a user perspective — not how it does it?
- [ ] Does the URS identify which requirements are GxP-critical (those directly affecting product quality, patient safety, or record integrity)?
- [ ] Is the URS approved before configuration or development begins?
- [ ] Is the URS kept current through the system's lifecycle via change control?

**Common gap:** URS documents that describe system features from the vendor's perspective rather than the site's requirements. A URS that says "the system provides role-based access control" describes a feature. A URS that says "the system shall prevent analysts from approving their own results" describes a GxP requirement. Only the second version is meaningful for validation scope decisions.

### Testing Documentation

For scripted test protocols:

- [ ] Do all test scripts have predefined steps, expected results, and acceptance criteria — defined before execution?
- [ ] Are test scripts linked to the requirements they verify (traceability matrix)?
- [ ] Are test execution records complete — every step has a pass/fail result and an executor signature?
- [ ] Are deviations from expected results documented on the test record, not corrected and re-run without documentation?
- [ ] Is there a documented review and approval of test results?

For unscripted/exploratory testing (under CSA):

- [ ] Is there a written record of what was explored, what the tester was looking for, and what was found?
- [ ] Is the purpose of the exploratory testing documented (why this approach was applied to this function)?
- [ ] Does the record include an assessment of whether the system behaved as expected?
- [ ] Is the exploratory testing record approved by QA?

**The CSA shift in practice:** The FDA final CSA guidance (February 2026) explicitly supports using exploratory testing for lower-risk functions. The practical change is that you now need documentation to justify why you applied exploratory rather than scripted testing — the risk reasoning must be documented. "This function was addressed through exploratory testing because it is not GxP-critical and the vendor's development documentation provides adequate evidence of its reliability" is a defensible entry in a validation plan. "We used exploratory testing because it was faster" is not.

### Validation Summary Reports

- [ ] Does every completed validation have a summary report?
- [ ] Does the summary report state a clear conclusion: is the system fit for intended use?
- [ ] Does the summary report document any unresolved deviations or risk acceptances?
- [ ] Is the report approved by QA before the system goes into production use?

---

## Section 3: Requirements Traceability

Traceability is the mechanism that proves your testing was complete — that every requirement was tested and every test result maps back to a requirement.

- [ ] Is there a requirements traceability matrix for each validated system?
- [ ] Does the RTM map every URS requirement to at least one test script?
- [ ] Does the RTM map every test script back to at least one URS requirement (no orphan tests)?
- [ ] If the URS was updated through change control, was the RTM also updated?
- [ ] Are there any URS requirements with no corresponding test? If so, is there documented rationale (e.g., covered by vendor documentation, addressed through supplier assessment)?

**What incomplete traceability looks like:** A URS with 45 requirements and a test package with 60 test scripts — but no RTM. You don't know which tests cover which requirements. You don't know which requirements have no test. You can't demonstrate that the validation was complete. An inspector asking "which test proves that your system enforces your access control requirement?" should get a traceable answer in under two minutes.

---

## Section 4: Supplier Assessment and Leverage

Supplier assessment is the foundation for leveraging vendor documentation to reduce site testing scope. Without a documented assessment, claiming supplier evidence as validation basis is not defensible.

- [ ] Has a supplier assessment been performed for each validated system?
- [ ] Does the assessment evaluate the vendor's software development lifecycle and quality management system?
- [ ] Does the assessment evaluate the vendor's testing documentation (what they tested, at what depth, to what acceptance criteria)?
- [ ] Does the assessment reach a documented conclusion about what site-level testing can be reduced or eliminated based on vendor evidence?
- [ ] Is there a schedule for reviewing/renewing supplier assessments?
- [ ] For cloud/SaaS systems: does the supplier assessment cover the vendor's data security practices, backup and recovery procedures, and audit trail capabilities?

**What an adequate supplier assessment covers:** For a major commercial LIMS vendor, the assessment might include: review of the vendor's ISO 9001 or equivalent certification, review of their SDLC documentation, assessment of their regulatory compliance documentation (Part 11 assessment, EU Annex 11 assessment), review of their published test evidence for the specific version being deployed, and possibly an audit of the vendor's facilities or remote assessment via questionnaire. The outcome determines how much of the vendor's testing you can rely on without re-executing it at your site.

---

## Section 5: Change Control

Change control for validated systems is where most ongoing validation programs have gaps. Systems don't stay static, and changes that aren't properly controlled erode the validated state.

- [ ] Is there a documented change control procedure for validated systems?
- [ ] Does the procedure require an impact assessment for every change request before it's approved?
- [ ] Does the impact assessment evaluate: whether the change affects GxP-critical functions, what testing is required, and whether revalidation is needed?
- [ ] Are changes categorized (minor/major or similar tier system) with defined testing and documentation requirements for each tier?
- [ ] Are all changes — including vendor patches, version upgrades, and configuration changes — going through the change control process?
- [ ] Is there evidence that the required testing for each change was actually performed and documented?
- [ ] Is the validation summary report updated or supplemented when significant changes are made?

**The patch management gap:** Vendor security patches are often applied quickly (as they should be for security) but without formal change control. A validated system should have an emergency/expedited change control pathway that applies abbreviated but documented impact assessment and testing to patches before they're applied to the production GxP system. Applying patches without any change control record means you have no documented basis for the continued validated state of the system.

---

## Section 6: Periodic Review

Periodic review confirms that validated systems remain in a state of control — that the validation done at go-live still applies to the system as it's running today.

- [ ] Is there a periodic review schedule for all validated systems?
- [ ] Are reviews actually occurring on schedule? (Check the last review date for each system.)
- [ ] Does the periodic review cover: change log review, deviation/OOS review related to the system, audit trail sampling, current software version vs. validated version, user access review, backup/recovery status?
- [ ] Does the review produce a documented conclusion — does the system remain fit for intended use?
- [ ] When periodic review identifies gaps, are CAPAs opened and tracked to completion?
- [ ] Are systems that have undergone significant changes since the last review flagged for a focused review before the scheduled periodic review?

**The gap between schedule and execution:** It's common to see a validated system inventory with a note that system X requires annual periodic review — and then find that the last completed review was 26 months ago. The review schedule is only useful if it's enforced. Assign review ownership clearly in the system inventory, set calendar reminders, and track overdue reviews as compliance metrics.

---

## Section 7: Retirement and Data Migration

System retirement is a validation lifecycle phase that's often skipped. When a system is retired, the GxP records it holds still have retention requirements, and the data migration to a successor system or archive needs to be validated.

- [ ] When a validated system is retired, is there a documented retirement plan?
- [ ] Does the retirement plan address how historical GxP data will be retained and accessible for the required retention period?
- [ ] If data is migrated to a new system, was the migration validated (data mapping verified, completeness confirmed, integrity checks performed)?
- [ ] Are retired systems removed from the active validation inventory rather than left on the list with "retired" status and no retirement documentation?
- [ ] Is archived data from retired systems retrievable in human-readable form?

---

## Section 8: Program Governance

### SOPs and Procedures

- [ ] Is there a Master Validation Plan (MVP) or equivalent governing document describing the overall CSV/CSA approach?
- [ ] Does the MVP reflect current practices, including CSA risk-based scope decisions?
- [ ] Are validation SOPs aligned with GAMP 5 Second Edition and FDA CSA final guidance?
- [ ] Do validation SOPs specify what constitutes adequate documentation for exploratory vs. scripted testing?

### Training and Competency

- [ ] Are all validation practitioners trained on GAMP 5 Second Edition?
- [ ] Are reviewers and approvers of validation documentation trained on what adequate validation looks like?
- [ ] For systems with unusual technical characteristics (cloud, AI/ML, custom APIs), are the practitioners validating them technically competent to design and evaluate testing for those specific technologies?

### QA Oversight

- [ ] Does QA review and approve validation plans, protocols, and reports — not just sign them?
- [ ] Are QA reviewers challenging inadequate validation documentation, or just approving what's presented to them?
- [ ] Is there a mechanism for QA to identify validation gaps proactively (not just at inspection time)?

---

## Interpreting Your Results

**A red flag pattern that should trigger deep investigation:**
- System inventory hasn't been updated in 12+ months
- Multiple systems showing overdue periodic reviews
- Change control records exist but testing evidence is consistently thin
- Supplier assessments that say "documentation reviewed" but don't specify what was reviewed or what was concluded

**A healthy program looks like:**
- Complete, current system inventory with clear ownership
- Validation approaches documented with risk rationale that a new person could understand
- Change control records with testing proportionate to change scope
- Periodic review completed on schedule with documented findings and CAPAs
- Supplier assessments that actually say what they found

If you're preparing for an inspection, the test is simple: pick a random validated system and try to trace a single GxP-critical requirement from URS → test script → test result → current validated state. If you can do that in 10 minutes, your program is in reasonable shape. If you can't, that gap will be visible to an inspector in the same 10 minutes.

---

## Related Articles

- [GAMP 5 Second Edition: The Framework](/articles/gamp5-csv-framework)
- [FDA Computer Software Assurance: Final Guidance](/articles/computer-software-assurance-fda)
- [CSV Risk Assessment Methodology](/articles/csv-risk-assessment-methodology)
- [Change Control for Validated Systems](/articles/change-control-validated-systems)
- [Validation Deliverables Guide](/articles/validation-deliverables-guide)
