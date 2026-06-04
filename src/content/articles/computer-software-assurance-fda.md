---
title: "FDA Computer Software Assurance: What Changed and What Didn't"
description: "FDA's final CSA guidance (February 2026) — what it actually requires, how it changes testing scope, scripted vs exploratory testing, using supplier evidence, and what the finalization means for inspection expectations."
pubDate: 2025-09-11
tags: ["CSV", "CSA", "FDA", "validation", "GAMP", "GxP"]
pillar: "csv-csa"
tier: "Advanced"
---

FDA finalized the Computer Software Assurance (CSA) guidance on February 3, 2026. The draft had circulated since September 2022, which means industry spent more than three years operating under the draft's principles, and now those principles carry the full weight of final FDA guidance. If you work in computer system validation, you need to understand exactly what this guidance says, because "critical thinking over documentation" is no longer an industry aspiration. It's what FDA expects.

Here's what the guidance actually requires, what it changes in practice, and what questions the finalization answered, and which ones are still being worked out in inspection practice.

The reference document: [FDA Computer Software Assurance for Production and Quality System Software, Final Guidance for Industry and FDA Staff (February 2026)](https://www.fda.gov/media/161521/download).

---

## The Problem CSA Was Meant to Solve

The traditional CSV (computer system validation) approach that evolved through the 1990s and 2000s became, in many organizations, a documentation exercise. The focus shifted from "proving the system works for our use" to "producing a thick binder of test scripts that looks like validation." Companies wrote exhaustive test scripts for every function, executed them, and generated validation reports, regardless of whether the functions tested were critical to GxP use.

FDA had been seeing this for years: expensive, time-consuming validation efforts that generated large documentation packages but didn't actually reduce the risk of system failures in use. The 21st Century Cures Act (2016) included a directive to FDA to reduce burdens from unnecessary or duplicative records, and CSA was one of the responses.

The CSA guidance is framed explicitly as a mechanism to "reduce the level of unnecessary documentation and testing burden while maintaining an appropriate level of assurance."

---

## What CSA Actually Says

The core argument of the CSA guidance is that the *purpose* of validation is to provide confidence that a system performs as intended, and that documentation-heavy test scripts are not the only way to achieve that confidence. In some cases, they're not even the best way.

**Intended use is the anchor.** The CSA guidance emphasizes that assurance activities should be calibrated to the intended use of the software and the risk that incorrect operation would create. This is not a new idea, GAMP 5 has said this for years, but CSA formalizes it as FDA's stated expectation.

**Testing approaches exist on a spectrum.** The guidance describes three categories of testing:

- **Scripted testing:** Test steps, expected results, and acceptance criteria are predefined before execution. The traditional CSV approach.
- **Unscripted / exploratory testing:** A tester exercises the system based on expertise and judgment, documenting what they tested and what they found, without predefined scripts. Useful for discovering unexpected behavior.
- **Ad-hoc testing:** Informal testing during regular use, without specific documentation objectives.

CSA's contribution: for lower-risk functions or well-established software with extensive prior use history, unscripted or ad-hoc testing may provide adequate assurance. For high-risk functions, those directly affecting product quality, patient safety, or the integrity of GxP records, scripted testing with documented acceptance criteria remains appropriate.

The guidance does not say "you can stop scripting tests." It says you should apply testing rigor in proportion to risk.

**use supplier activities.** If a software vendor has a mature development process, documented testing, and regulatory compliance documentation, that evidence can be incorporated into the site's assurance activities. The site doesn't need to re-execute tests the vendor has already performed rigorously. This is consistent with GAMP 5 supplier assessment guidance.

**Critical thinking over documentation.** The phrase that appears in every CSA presentation. What it means in context: "the mere creation of documentation does not add to the assurance of a system's suitability for its intended use." A validation that produces documentation without demonstrating critical thinking about risk, what could go wrong, how the testing addresses that risk, why the evidence is sufficient, is not what FDA is looking for.

---

## What CSA Doesn't Change

**Validation is still required.** The CSA guidance explicitly states that it "does not apply to or modify requirements for process validation or the validation of computerized systems used to produce drug products, as those requirements are set forth in CGMPs." 21 CFR Part 211 and 21 CFR Part 11 requirements are unchanged.

**High-risk functions still need scripted testing.** For any function that directly determines product release, patient safety, or the integrity of GxP records, scripted testing with documented acceptance criteria is still the standard. The CSA flexibility applies to the low- and mid-risk portions of the testing scope, not to the critical controls.

**Audit trails, electronic signatures, and access controls.** These Part 11 requirements are not relaxed by CSA. The testing approach for these controls should remain scripted and documented.

**Change control.** Any change to a validated system requires documented assessment, testing proportionate to the risk of the change, and updated validation records.

---

## The Practical Shift: What Changes in Practice

If you apply CSA principles correctly, the change is primarily in how you allocate validation effort:

**Less** exhaustive scripted testing of low-risk, well-established functions (e.g., proving that a login screen accepts valid credentials, this is vendor-tested functionality in every commercial LIMS).

**More** focused, documented critical thinking about high-risk functions: what could fail, what the consequence would be, how the testing provides confidence that it won't.

**More** explicit documentation of the reasoning behind testing scope decisions: why was this function tested at depth? Why was this function addressed through vendor documentation alone?

**More** use of exploratory testing for discovering unexpected behavior, supplementing scripted tests rather than replacing them for critical functions.

A concrete example: a LIMS has 200 configurable features. Under traditional CSV, you might write scripted tests for all 200, even though 160 of them have nothing to do with GxP data management. Under CSA principles, you identify the 40 features that are GxP-critical (audit trail, electronic approval, result storage, specification checking), write thorough scripted tests for those, and address the remaining 160 through exploratory testing or vendor documentation.

The validation package is smaller. The evidence for the critical functions is just as strong, or stronger.

---

## What Finalization Means for Your Program

The CSA guidance is now final FDA guidance, which means inspectors are expected to apply it, and companies can cite it as the basis for their assurance approach. This resolves several uncertainties that existed under the draft, but some questions are still being answered through inspection practice.

**The uncertainty around draft vs. final is gone.** For the past three years, companies faced the question: should we apply draft guidance principles, or will an inspector reject them? That's settled now. CSA-informed approaches are the expected approach, not an experimental one. If your validation program is still generating documentation-heavy test packages for low-risk configured software, you're out of alignment with current FDA expectations.

**Documentation of critical thinking is now a clear requirement.** The guidance requires that critical thinking, the reasoning behind scope decisions, the risk logic, the rationale for use supplier evidence, be documented. Not in a prescribed format, but demonstrably present. An inspector reviewing your validation package should be able to reconstruct: why did you scope testing this way? What risk factors drove that decision? A validation plan that says "scripted OQ testing was applied to the following functions based on risk" needs to be backed by the risk analysis, not just the assertion.

**Supplier use has clearer standing but still needs assessment documentation.** One of the most practically important CSA principles is use supplier activities, using vendor test documentation to reduce site-level scripted testing. The final guidance supports this, but the mechanism requires a documented supplier assessment. You can't simply point to a vendor's SOC 2 report and call it sufficient. The assessment needs to address: Does the vendor's development and testing process meet the quality bar required to justify relying on their output? For well-established GxP software vendors (major LIMS, MES, ERP platforms), this assessment is usually favorable and substantially documented. For niche or emerging vendors, it requires more work.

**Unscripted testing documentation remains judgment-dependent.** The guidance endorses unscripted and exploratory testing for lower-risk functions but doesn't mandate a specific record format. In practice, a written test summary, what functions were explored, what the tester was looking for, what was found, and a statement that the system met expectations, is the minimum defensible record. Some organizations use screen recordings for specific functions. Others use structured exploratory test templates. All of these are defensible if they demonstrate purposeful, documented testing rather than ad hoc activity with no record.

**The transition for legacy validation programs.** If your organization has established procedures that require comprehensive scripted testing for all functions regardless of risk, those procedures need updating to reflect CSA expectations. An SOP that requires 100% scripted OQ coverage for all Category 4 systems is now out of step with FDA expectations, and more importantly, it creates compliance overhead that doesn't add assurance value. Update validation master plans, validation SOPs, and qualification approach templates to incorporate risk-based scope decisions with documented rationale.

My view: apply CSA principles fully for new validations and system upgrades. For existing validated systems, a retrospective risk assessment determining which functions actually warranted scripted testing is reasonable documentation of CSA alignment, you don't need to re-execute testing that was already done, but documenting the risk logic ties your historical validation to the current guidance framework.

---

## CSV vs CSA: The Honest Comparison

| Dimension | Traditional CSV | CSA-Informed Approach |
|---|---|---|
| Testing scope | All functions, comprehensive scripts | Risk-stratified; scripted for critical, exploratory/vendor evidence for lower-risk |
| Documentation volume | High (binder per system) | Lower, focused on critical functions |
| Supplier evidence | Supplementary | Can reduce site testing scope |
| Regulatory basis | FDA Part 11, GAMP 5 first ed | FDA Part 11, GAMP 5 second ed, CSA final (Feb 2026) |
| Risk of over-documentation | High | Lower |
| Risk of under-documentation | Low | Exists if risk stratification is undocumented |
| Inspection track record | Well-established | Evolving |

The right answer for most organizations: apply GAMP 5 second edition principles (which already incorporate CSA-aligned thinking), document risk decisions explicitly, and maintain scripted testing for critical controls. Monitor FDA inspection outcomes for emerging expectations under CSA.

---

## The Validation Deliverable Set

For a Category 4 configured system following GAMP 5 and CSA-informed principles, the core deliverable set is:

- Validation Plan (scope, approach, risk rationale)
- User Requirements Specification (URS)
- Supplier Assessment
- Configuration Specification
- Requirements Traceability Matrix (RTM)
- IQ protocol and report
- OQ protocol(s) and report(s)
- PQ / UAT protocol and report
- Validation Summary Report

The [validation deliverables article](/articles/validation-deliverables-guide) covers what each document is actually for and what makes each one defensible at inspection.
