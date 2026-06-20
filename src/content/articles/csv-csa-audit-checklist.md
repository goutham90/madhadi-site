---
title: "CSV/CSA Self-Audit: Evaluating Your Computer System Validation Program"
description: "A detailed self-audit checklist for computer system validation programs covering system inventory, validation documentation, testing evidence, change control, supplier management, and periodic review. Aligned with GAMP 5 Second Edition and FDA CSA final guidance."
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

**What gaps look like:** A system that generates GxP data but isn't in the inventory has no change control, no periodic review, and no one who is accountable for its validated state. This is one of the most common findings in CSV-focused inspections. The usual culprits are not the big enterprise platforms, which everyone knows about, but the quiet ones: a calculation spreadsheet a lab built and never registered, a small instrument that came with the equipment and shipped with its own control software, a free trial of a cloud tool that quietly became the system of record. For the spreadsheet problem specifically, see [Infrastructure Qualification and Spreadsheet Validation](/articles/infrastructure-qualification-and-spreadsheet-validation), which is its own category of recurring finding.

A practical test of inventory completeness: walk the floor and the labs and ask the people doing the work what they use to record or calculate anything that touches a batch, a result, or a release decision. Then check each answer against the inventory. The systems that don't appear are your risk.

### GAMP 5 Software Category Assignment

For each system in the inventory:

- [ ] Has a GAMP 5 software category been assigned (Category 1 infrastructure, Category 3 non-configured, Category 4 configured, Category 5 custom)?
- [ ] Is the category assignment documented with rationale, not just asserted?
- [ ] For systems with multiple components (for example a LIMS with standard modules plus custom interfaces): are the different components correctly categorized separately?
- [ ] Has the category assignment been reviewed when significant changes were made to the system?
- [ ] Is the category assignment consistent with the validation approach (Category 4 systems should have configuration specifications and configuration testing; Category 5 systems should have software development lifecycle documentation)?

**Category assignment rationale:** In GAMP 5 Second Edition, published by ISPE in 2022, categories 3 to 5 are a continuum, not rigid boxes. A pure COTS product used as delivered with minimal parameterization sits near Category 3. The same product with extensive workflow configuration, custom reports, and integration scripting is closer to Category 5 even though the base product is COTS. The category should reflect what the site has actually done to the system, not what the vendor sells it as.

Why does the category matter enough to audit? Because it drives the expected validation effort and deliverable set. Getting it wrong in the conservative direction wastes effort. Getting it wrong in the permissive direction, calling a heavily customized system "configured" when it carries custom code, leaves you with a thin testing package that won't survive scrutiny. A worked example: a chromatography data system such as Empower or an equivalent commercial CDS, installed and used with standard methods and standard reports, is reasonably treated as a configured Category 4 application. The moment someone writes custom calculation fields, custom export macros, or a bidirectional interface to LIMS, those specific components carry development lifecycle expectations closer to Category 5, and the testing must follow. The base product's category does not absolve the bespoke parts. For the framework behind these decisions, see [GAMP 5 Second Edition: The Framework](/articles/gamp5-csv-framework).

---

## Section 2: Validation Documentation

### Validation Plans

For each validated system, check:

- [ ] Is there an approved validation plan or master validation plan?
- [ ] Does the validation plan describe the scope, approach, and rationale for the testing level applied?
- [ ] Does the validation plan document the risk-based rationale for testing scope, specifically why certain functions were tested at depth and others were addressed through supplier evidence or exploratory testing?
- [ ] Is the validation plan approved before testing begins, not after?
- [ ] Does the plan identify who is responsible for executing, reviewing, and approving each deliverable?

The validation plan is where the risk thinking lives, and it is the document an inspector reads first to understand how you decided what to test. A plan that says "all functions will be fully scripted and tested" is easy to write but usually means nobody did the risk analysis; it also tends to generate a testing package so large that the quality of any individual test suffers. A plan that ties testing depth to function risk, and says so explicitly, is the modern expectation under both GAMP 5 Second Edition and the FDA's computer software assurance approach.

### User Requirements Specifications

- [ ] Does every validated system have a URS?
- [ ] Does the URS describe what the system must do from a user perspective, not how it does it?
- [ ] Does the URS identify which requirements are GxP-critical (those directly affecting product quality, patient safety, or record integrity)?
- [ ] Is the URS approved before configuration or development begins?
- [ ] Is the URS kept current through the system's lifecycle via change control?

**Common gap:** URS documents that describe system features from the vendor's perspective rather than the site's requirements. A URS that says "the system provides role-based access control" describes a feature. A URS that says "the system shall prevent analysts from approving their own results" describes a GxP requirement. Only the second version is meaningful for validation scope decisions, because only the second version can be traced to a test that proves something a regulator cares about. When you audit a URS, sample a handful of requirements and ask: could I write a test that passes or fails against this statement? Vague, feature-flavored requirements fail that test and tend to produce vague, feature-flavored tests downstream.

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

### Validation Summary Reports

- [ ] Does every completed validation have a summary report?
- [ ] Does the summary report state a clear conclusion: is the system fit for intended use?
- [ ] Does the summary report document any unresolved deviations or risk acceptances?
- [ ] Is the report approved by QA before the system goes into production use?

A summary report that recites activities but never states a conclusion is a surprisingly common gap. The report exists to make a decision: the system is fit for intended use, or it is not, with named exceptions. If a reader has to infer the conclusion, the report has not done its job. For the full set of expected documents and what each one is for, see [Validation Deliverables Guide](/articles/validation-deliverables-guide).

---

## Section 3: Requirements Traceability

Traceability is the mechanism that proves your testing was complete: that every requirement was tested and every test result maps back to a requirement.

- [ ] Is there a requirements traceability matrix for each validated system?
- [ ] Does the RTM map every URS requirement to at least one test (scripted or unscripted) or other documented evidence?
- [ ] Does the RTM map every test back to at least one URS requirement (no orphan tests)?
- [ ] If the URS was updated through change control, was the RTM also updated?
- [ ] Are there any URS requirements with no corresponding test? If so, is there documented rationale (for example, covered by vendor documentation, addressed through supplier assessment)?

**What incomplete traceability looks like:** A URS with 45 requirements and a test package with 60 test scripts, but no RTM. You don't know which tests cover which requirements. You don't know which requirements have no test. You can't show that the validation was complete. An inspector asking "which test proves that your system enforces your access control requirement?" should get a traceable answer in under two minutes.

Under CSA, traceability becomes more important, not less. When some requirements are covered by scripted tests, some by unscripted testing, and some by supplier evidence, the RTM is the one place that shows the whole picture and demonstrates that nothing fell through the gap between methods. A modern RTM should record, for each requirement, the assurance method used and a pointer to the evidence, whatever its form.

---

## Section 4: Supplier Assessment and Reliance

Supplier assessment is the foundation for relying on vendor documentation to reduce site testing scope. Without a documented assessment, claiming supplier evidence as a validation basis is not defensible.

- [ ] Has a supplier assessment been performed for each validated system?
- [ ] Does the assessment evaluate the vendor's software development lifecycle and quality management system?
- [ ] Does the assessment evaluate the vendor's testing documentation (what they tested, at what depth, to what acceptance criteria)?
- [ ] Does the assessment reach a documented conclusion about what site-level testing can be reduced or eliminated based on vendor evidence?
- [ ] Is there a schedule for reviewing or renewing supplier assessments?
- [ ] For cloud/SaaS systems: does the supplier assessment cover the vendor's data security practices, backup and recovery procedures, and audit trail capabilities?

**What an adequate supplier assessment covers:** For a major commercial LIMS or CDS vendor, the assessment might include review of the vendor's ISO 9001 or equivalent certification, review of their SDLC documentation, assessment of their regulatory compliance documentation (a Part 11 assessment and an EU Annex 11 assessment), review of their published test evidence for the specific version being deployed, and possibly an audit of the vendor's facilities or a remote assessment via questionnaire. The outcome determines how much of the vendor's testing you can rely on without re-executing it at your site.

The recurring weak spot here is the assessment that concludes nothing. "Vendor documentation reviewed" is not an assessment; it is a sentence. A usable assessment says what was reviewed, what it found, and what site testing that justifies skipping or reducing. If a supplier assessment cannot answer "so what can we now not test ourselves," it is not doing the job it exists to do. The discipline overlaps heavily with general vendor management, so it is worth reading alongside [Supplier and Vendor Qualification](/articles/supplier-vendor-qualification).

For systems hosted by the vendor, the assessment has to reach into operational territory the site cannot see directly: where the data physically lives, how backups are tested, how the vendor manages its own changes and patches, and whether the vendor will notify you before an upgrade hits your validated environment. Those questions are specific enough that cloud and SaaS validation deserves its own treatment, covered in [Cloud and SaaS Validation](/articles/cloud-saas-validation).

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

**The patch management gap:** Vendor security patches are often applied quickly, as they should be for security, but without formal change control. A validated system should have an emergency or expedited change control pathway that applies an abbreviated but documented impact assessment and testing to patches before they reach the production GxP system. Applying patches without any change control record means you have no documented basis for the continued validated state of the system. The fix is not to slow down security; it is to give security changes a fast, documented lane rather than no lane at all.

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

**The gap between schedule and execution:** It's common to see a validated system inventory with a note that a system requires annual periodic review, and then to find that the last completed review was 26 months ago. The review schedule is only useful if it's enforced. Assign review ownership clearly in the system inventory, set calendar reminders, and track overdue reviews as compliance metrics that someone is accountable for in a quality management review.

A periodic review that only confirms "no changes, system fine" without actually sampling the audit trail or comparing the running version to the validated version is a paperwork exercise. The value of the review is in the active checks: pulling a sample of audit trail entries to confirm the trail is working and being reviewed, reconciling the user access list against current personnel and roles, and confirming that the version in production is the version that was validated. Each of those is a place where reality drifts from documentation, which is exactly what periodic review exists to catch. Periodic review also intersects with the validation master plan and with broader system operations, covered in [Validation Master Plan and Periodic Review](/articles/validation-master-plan-and-periodic-review) and [GxP Computerized Systems Operations](/articles/gxp-computerized-systems-operations).

---

## Section 7: Retirement and Data Migration

System retirement is a validation lifecycle phase that's often skipped. When a system is retired, the GxP records it holds still have retention requirements, and any data migration to a successor system or archive needs to be validated.

- [ ] When a validated system is retired, is there a documented retirement plan?
- [ ] Does the retirement plan address how historical GxP data will be retained and remain accessible for the required retention period?
- [ ] If data is migrated to a new system, was the migration validated (data mapping verified, completeness confirmed, integrity checks performed)?
- [ ] Are retired systems removed from the active validation inventory rather than left on the list with "retired" status and no retirement documentation?
- [ ] Is archived data from retired systems retrievable in human-readable form, with its dynamic functionality and audit trail preserved where required?

The quiet risk in retirement is the audit trail. It is straightforward to export the data; it is much harder to preserve the metadata and the audit trail in a form that remains usable years later. If the only surviving copy of a retired system's records is a flat export with no audit trail and no context, the records have lost the integrity attributes that made them GxP records in the first place. Migration to a new platform is its own validation problem with its own failure modes, covered in [Data Migration Validation](/articles/data-migration-validation).

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
- [Validation Master Plan and Periodic Review](/articles/validation-master-plan-and-periodic-review)
- [Cloud and SaaS Validation](/articles/cloud-saas-validation)
- [Supplier and Vendor Qualification](/articles/supplier-vendor-qualification)
- [Data Migration Validation](/articles/data-migration-validation)
