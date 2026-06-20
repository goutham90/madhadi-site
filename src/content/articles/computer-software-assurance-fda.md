---
title: "FDA Computer Software Assurance: What Changed and What Didn't"
description: "FDA's final CSA guidance (February 2026), what it actually requires, how it changes testing scope, scripted vs exploratory testing, using supplier evidence, and what finalization means for inspection expectations."
pubDate: 2025-09-11
tags: ["CSV", "CSA", "FDA", "validation", "GAMP", "GxP"]
pillar: "csv-csa"
tier: "Advanced"
---

FDA finalized the Computer Software Assurance (CSA) guidance on February 3, 2026. The draft had circulated since September 2022, which means industry spent more than three years operating under the draft's principles, and now those principles carry the full weight of final FDA guidance. If you work in computer system validation, you need to understand exactly what this guidance says, because "critical thinking over documentation" is no longer an industry aspiration. It is what FDA expects.

Here is what the guidance actually requires, what it changes in practice, what questions the finalization answered, and which ones are still being worked out in inspection practice.

The reference document is [FDA Computer Software Assurance for Production and Quality System Software, Final Guidance for Industry and FDA Staff (February 2026)](https://www.fda.gov/media/161521/download).

---

## The Problem CSA Was Meant to Solve

The traditional CSV (computer system validation) approach that evolved through the 1990s and 2000s became, in many organizations, a documentation exercise. The focus shifted from "proving the system works for our use" to "producing a thick binder of test scripts that looks like validation." Companies wrote exhaustive test scripts for every function, executed them, and generated validation reports, regardless of whether the functions tested were critical to GxP use.

FDA had been seeing this for years: expensive, time-consuming validation efforts that generated large documentation packages but did not actually reduce the risk of system failures in use. There is a well-known failure pattern behind this. When validation is measured by page count, teams optimize for page count. A login screen gets the same twelve-step scripted protocol as the audit trail engine, a screenshot is captured for every step, a second person reviews every screenshot, and at the end the binder is thick and the genuinely risky behavior of the system has been tested no more carefully than the trivial behavior. Worse, the cost of this exercise discourages teams from making system changes at all, so improvements that would reduce risk get deferred because revalidation is too expensive.

The 21st Century Cures Act (Public Law 114-255, signed December 2016) included a directive to FDA to reduce burdens from unnecessary or duplicative records and to modernize how the agency thinks about software. CSA was one of the responses. The agency had also published its "General Principles of Software Validation" guidance through the Center for Devices and Radiological Health back in January 2002, and CSA extends that risk-based logic specifically into production and quality system software.

The CSA guidance is framed explicitly as a mechanism to reduce the level of unnecessary documentation and testing burden while maintaining an appropriate level of assurance.

### For readers new to the term

If you are early in a GxP quality career, two definitions will keep the rest of this article readable. "Assurance" is the confidence that a system does what you intend it to do for your regulated use. "Validation" is the documented activity that produces and records that confidence. CSA does not replace validation. It is a way of thinking about how much and what kind of evidence each function actually needs. For the broader framework that CSA sits inside, see [the GAMP 5 CSV framework](/articles/gamp5-csv-framework) and [GxP computerized systems operations](/articles/gxp-computerized-systems-operations).

---

## What CSA Actually Says

The core argument of the CSA guidance is that the purpose of validation is to provide confidence that a system performs as intended, and that documentation-heavy test scripts are not the only way to achieve that confidence. In some cases they are not even the best way.

**Intended use is the anchor.** The CSA guidance emphasizes that assurance activities should be calibrated to the intended use of the software and the risk that incorrect operation would create. This is not a new idea. GAMP 5 has said this for years. But CSA formalizes it as FDA's stated expectation, and it ties the scope of testing directly to a two-step question: what is this feature used for, and what happens if it is wrong.

**Testing approaches exist on a spectrum.** The guidance describes a graduated set of testing methods:

- **Scripted testing:** Test steps, expected results, and acceptance criteria are predefined before execution. This is the traditional CSV approach. The guidance further distinguishes rigorous scripted testing (independent review, detailed evidence) from limited scripted testing (less independent oversight for lower-risk items).
- **Unscripted testing, including exploratory testing:** A tester exercises the system based on expertise and judgment, documenting what was tested and what was found, without predefined step-by-step scripts. Useful for discovering unexpected behavior that a fixed script would never look for.
- **Ad hoc testing:** Informal testing during regular use, without specific documentation objectives, suitable only for the lowest-risk situations.

CSA's contribution is the pairing of method to risk. For lower-risk functions, or well-established software with extensive prior use history, unscripted or ad hoc testing may provide adequate assurance. For high-risk functions, those directly affecting product quality, patient safety, or the integrity of GxP records, scripted testing with documented acceptance criteria remains appropriate.

The guidance does not say "you can stop scripting tests." It says you should apply testing rigor in proportion to risk.

**Use supplier activities.** If a software vendor has a mature development process, documented testing, and regulatory compliance documentation, that evidence can be incorporated into the site's assurance activities. The site does not need to re-execute tests the vendor has already performed rigorously. This is consistent with GAMP 5 supplier assessment guidance and with the use-vendor-evidence logic of [supplier and vendor qualification](/articles/supplier-vendor-qualification).

**Critical thinking over documentation.** This is the phrase that appears in every CSA presentation. What it means in context is that the mere creation of documentation does not add to the assurance of a system's suitability for its intended use. A validation that produces documentation without demonstrating critical thinking about risk, what could go wrong, how the testing addresses that risk, and why the evidence is sufficient, is not what FDA is looking for.

### The four-step method the guidance lays out

The guidance is unusually concrete about the sequence it expects. It is worth memorizing because it is the skeleton of any CSA-aligned validation plan:

1. **Identify the intended use** of the software feature, including whether it is part of production or the quality system.
2. **Determine the risk** the feature poses. The guidance splits this into whether the feature has a direct or indirect impact, and then the probability and severity of harm if it fails.
3. **Determine the appropriate assurance activity** and select the testing method that matches the risk.
4. **Establish the record** that captures the activity, keeping it proportionate to the risk rather than uniform across all features.

Notice that risk determination sits at step two, not buried in an appendix. The risk decision drives the testing decision, and the record exists to document both. For the mechanics of doing step two well, see [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology) and the broader [quality risk management](/articles/quality-risk-management) approach.

---

## Direct vs Indirect Impact: The Distinction That Does the Work

Most of the practical savings in CSA come from one classification: does a software feature have a direct or an indirect impact on product quality or safety.

A **direct impact** feature does something where a failure could affect the product, the GxP record, or the patient with no intervening human check. A manufacturing execution system that calculates a yield, enforces a recipe parameter, or releases a batch step has direct impact. An electronic batch record that captures the official record of manufacture has direct impact. A laboratory system that performs a specification comparison and flags an out-of-specification result has direct impact. These features sit in the high-assurance lane, and they get scripted testing with documented acceptance criteria.

An **indirect impact** feature supports the work but does not by itself determine quality, because a human or another control stands between the feature and the outcome. A feature that schedules a report, sorts a worklist, or formats a label preview is usually indirect. A failure there is annoying but is caught downstream before it can reach the product or the record.

The honest difficulty is that this line is not always obvious, and inspectors will challenge a classification that conveniently routes a risky feature into the easy lane. The defensible move is to write down the reasoning. State the feature, state what depends on it, state what catches a failure if the feature is wrong, and conclude direct or indirect from that chain. A classification with a visible chain of reasoning survives an inspection question. A bare assertion does not.

| Feature example (illustrative) | Likely impact | Typical assurance method |
|---|---|---|
| Batch release calculation in an MES | Direct | Rigorous scripted testing, independent review |
| Audit trail capture and protection | Direct | Rigorous scripted testing, focused on completeness and tamper resistance |
| Electronic signature binding to a record | Direct | Rigorous scripted testing |
| Specification limit check in a LIMS | Direct | Rigorous scripted testing |
| User role and permission enforcement | Direct | Scripted testing of the GxP-relevant roles |
| Worklist sorting or display order | Indirect | Unscripted or exploratory |
| Report scheduling or export formatting | Indirect | Unscripted, or supplier evidence |
| Cosmetic UI labels with no data effect | Indirect (low) | Ad hoc, covered by use |

---

## What CSA Doesn't Change

**Validation is still required.** The CSA guidance explicitly states that it does not apply to or modify requirements for process validation or the validation of computerized systems used to produce drug products, as those requirements are set forth in current good manufacturing practice. The predicate rules under 21 CFR Part 211 and the electronic records and signatures requirements of 21 CFR Part 11 are unchanged. CSA changes how you decide to generate evidence, not whether the underlying legal obligation exists.

**High-risk functions still need scripted testing.** For any function that directly determines product release, patient safety, or the integrity of GxP records, scripted testing with documented acceptance criteria is still the standard. The CSA flexibility applies to the low- and mid-risk portions of the testing scope, not to the critical controls.

**Audit trails, electronic signatures, and access controls.** These Part 11 requirements are not relaxed by CSA. The testing approach for these controls should remain scripted and documented. If anything, CSA sharpens the expectation here, because by freeing effort from trivial features it removes any excuse for thin testing of the controls that matter. For how to design and review these specifically, see [audit trail design and review](/articles/audit-trail-design-and-review) and [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control).

**Change control.** Any change to a validated system requires documented assessment, testing proportionate to the risk of the change, and updated validation records. CSA actually makes change control more sustainable, because a smaller, risk-focused validation footprint means a change is cheaper to assess and re-test, which removes the perverse incentive to avoid beneficial changes. See [change control for validated systems](/articles/change-control-validated-systems).

**Data integrity expectations.** Nothing in CSA loosens ALCOA+ or the data integrity obligations behind it. A risk-based testing approach still has to demonstrate that records are attributable, legible, contemporaneous, original, accurate, and complete. See [data integrity foundations](/articles/data-integrity-foundations) and [the ALCOA+ deep look](/articles/alcoa-plus-deep-dive).

---

## The Practical Shift: What Changes in Practice

If you apply CSA principles correctly, the change is primarily in how you allocate validation effort.

**Less** exhaustive scripted testing of low-risk, well-established functions. Proving that a login screen accepts valid credentials is vendor-tested functionality in every commercial laboratory information management system, and re-proving it at the site adds cost without adding assurance.

**More** focused, documented critical thinking about high-risk functions: what could fail, what the consequence would be, and how the testing provides confidence that it will not.

**More** explicit documentation of the reasoning behind testing scope decisions: why was this function tested at depth, and why was that function addressed through vendor documentation alone.

**More** use of exploratory testing for discovering unexpected behavior, supplementing scripted tests rather than replacing them for critical functions.

A concrete example. A LIMS has 200 configurable features. Under traditional CSV you might write scripted tests for all 200, even though 160 of them have nothing to do with GxP data management. Under CSA principles you identify the 40 features that are GxP-critical, audit trail, electronic approval, result storage, specification checking, write thorough scripted tests for those, and address the remaining 160 through exploratory testing or vendor documentation. The validation package is smaller. The evidence for the critical functions is just as strong, or stronger.

### A worked example, function by function

Take a single GxP-critical function in that LIMS: the out-of-specification flag that fires when a numeric result falls outside a configured limit. A CSA-aligned plan would record the following:

- **Intended use:** the system compares an entered result against the approved specification and flags results outside the limit so they enter the [out-of-specification investigation process](/articles/oos-investigation-process).
- **Risk:** direct impact, because a missed flag could let a failing result pass as conforming, with high severity to product and patient.
- **Assurance method:** rigorous scripted testing with independent review, covering values below the lower limit, above the upper limit, exactly on each limit, just inside each limit, and edge cases such as rounding behavior, null entries, and unit mismatches.
- **Record:** the executed protocol with expected and actual results, a deviation log for any discrepancy, and traceability back to the requirement in the [requirements traceability matrix](/articles/validation-deliverables-guide).

Now take an indirect function in the same system: the column order in a results grid. Intended use is display convenience, risk is indirect and low because the underlying data is unchanged, the method is a brief exploratory check, and the record is a one-paragraph test summary stating what was explored and that it behaved as expected. Two functions, the same system, two very different evidence footprints, each justified by a written risk decision. That contrast is the whole point of CSA.

---

## What Finalization Means for Your Program

The CSA guidance is now final FDA guidance, which means inspectors are expected to apply it, and companies can cite it as the basis for their assurance approach. This resolves several uncertainties that existed under the draft, but some questions are still being answered through inspection practice.

**The uncertainty around draft versus final is gone.** For the past three years companies faced the question of whether to apply draft guidance principles or risk an inspector rejecting them. That is settled now. CSA-informed approaches are the expected approach, not an experimental one. If your validation program is still generating documentation-heavy test packages for low-risk configured software, you are out of alignment with current FDA expectations, and you are spending money to be out of alignment.

**Documentation of critical thinking is now a clear requirement.** The guidance requires that critical thinking, the reasoning behind scope decisions, the risk logic, the rationale for using supplier evidence, be documented. Not in a prescribed format, but demonstrably present. An inspector reviewing your validation package should be able to reconstruct why you scoped testing the way you did and what risk factors drove that decision. A validation plan that says "scripted OQ testing was applied to the following functions based on risk" needs to be backed by the risk analysis, not just the assertion. The risk that comes with CSA is the inverse of the old one: under traditional CSV you risked over-documenting, under CSA you risk under-documenting the reasoning that justifies a lighter touch.

**Supplier evidence has clearer standing but still needs assessment documentation.** Using vendor test documentation to reduce site-level scripted testing is one of the most practically important CSA principles. The final guidance supports it, but the mechanism requires a documented supplier assessment. You cannot simply point to a vendor's SOC 2 report and call it sufficient. The assessment needs to answer whether the vendor's development and testing process meets the quality bar required to justify relying on their output. For well-established GxP software vendors, this assessment is usually favorable and substantially documented. For niche or emerging vendors it requires more work, and for cloud-delivered software the shared-responsibility boundary needs to be explicit, which is the subject of [cloud and SaaS validation](/articles/cloud-saas-validation).

**Unscripted testing documentation remains judgment-dependent.** The guidance endorses unscripted and exploratory testing for lower-risk functions but does not mandate a specific record format. In practice, a written test summary, what functions were explored, what the tester was looking for, what was found, and a statement that the system met expectations, is the minimum defensible record. Some organizations use screen recordings for specific functions. Others use structured exploratory test templates. All of these are defensible if they demonstrate purposeful, documented testing rather than activity with no record.

**The transition for legacy validation programs.** If your organization has established procedures that require complete scripted testing for all functions regardless of risk, those procedures need updating to reflect CSA expectations. An SOP that mandates 100 percent scripted OQ coverage for all Category 4 systems is now out of step with FDA expectations, and more importantly it creates compliance overhead that does not add assurance value. Update validation master plans, validation SOPs, and qualification approach templates to incorporate risk-based scope decisions with documented rationale. See [the validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review).

My view: apply CSA principles fully for new validations and system upgrades. For existing validated systems, a retrospective risk assessment determining which functions actually warranted scripted testing is reasonable documentation of CSA alignment. You do not need to re-execute testing that was already done, but documenting the risk logic ties your historical validation to the current guidance framework. For systems with thin or missing original validation, that effort grows into a remediation question, covered in [retroactive validation of legacy systems](/articles/retroactive-validation-legacy-systems).

---

## How CSA Sits Beside GAMP 5 Second Edition

A common point of confusion is whether CSA and GAMP 5 compete. They do not. GAMP 5 Second Edition, published by ISPE in July 2022, was revised specifically to align with risk-based, critical-thinking principles, and it predates the final CSA guidance by several years. If your program already follows GAMP 5 Second Edition faithfully, you are already most of the way to CSA alignment.

The cleanest way to hold the two together is by role. GAMP 5 gives you the engineering framework: software categories, the specification and verification approach, supplier assessment, the lifecycle deliverables, and the language for describing configured versus custom software. CSA gives you FDA's stated expectation about how to scale testing within that framework and the assurance the agency wants to see for production and quality system software. GAMP 5 is the how-to, CSA is the regulatory why and how-much. Use GAMP 5 categories to describe the software, use the CSA four-step method to decide the evidence each feature needs, and document the link between the two.

One practical caution. GAMP categories describe the nature of the software, not its risk. A Category 4 configured product can contain both direct-impact and indirect-impact features. Do not let the category alone set the testing depth. The category tells you how much could be unique to your configuration, the risk assessment tells you which of those configured features actually matter. CSA is the discipline that keeps those two ideas separate.

---

## CSV vs CSA: The Honest Comparison

| Dimension | Traditional CSV | CSA-Informed Approach |
|---|---|---|
| Testing scope | All functions, complete scripts | Risk-stratified; scripted for critical, exploratory or vendor evidence for lower-risk |
| Documentation volume | High, a binder per system | Lower, focused on critical functions |
| Supplier evidence | Supplementary | Can reduce site testing scope |
| Regulatory basis | Part 11, GAMP 5 first edition | Part 11, GAMP 5 second edition, CSA final (Feb 2026) |
| Risk of over-documentation | High | Lower |
| Risk of under-documentation | Low | Exists if risk stratification is undocumented |
| Inspection track record | Well-established | Evolving |

The right answer for most organizations is to apply GAMP 5 Second Edition principles, which already incorporate CSA-aligned thinking, document risk decisions explicitly, and maintain scripted testing for critical controls. Then monitor FDA inspection outcomes for emerging expectations under CSA, because the body of inspection precedent is still forming.

---

## Common Ways CSA Goes Wrong

Adopting CSA badly is its own failure mode, and inspectors have started to see the pattern. A few traps to avoid:

**Using CSA as a cost-cutting label without the risk work.** The most dangerous version of CSA is a program that cuts scripted testing in half and writes "per CSA, risk-based approach" with no risk assessment behind it. That is not CSA. That is reduced testing with a slogan attached, and it is more exposed at inspection than the old over-documented binder, because the absence of reasoning is now visible.

**Routing direct-impact features into the easy lane.** When budgets are tight, there is pressure to call a borderline feature indirect. Resist it, and document the call honestly. A defensible direct or indirect decision has a written chain of reasoning, an undefensible one has a convenient conclusion.

**Treating supplier evidence as automatic.** A vendor certificate is an input to a supplier assessment, not a substitute for one. The assessment is where you decide whether the vendor's process actually justifies relying on their testing.

**No record at all for unscripted testing.** Exploratory testing without a record is just clicking around. The whole defensibility of unscripted testing rests on a purposeful, written account of what was tested and what was found.

For an inspection-oriented checklist of these issues, see [the CSV and CSA audit checklist](/articles/csv-csa-audit-checklist), and for how these gaps surface in regulatory findings, [FDA warning letter patterns](/articles/fda-warning-letters-patterns).

---

## The Validation Deliverable Set

For a Category 4 configured system following GAMP 5 and CSA-informed principles, the core deliverable set is:

- Validation Plan, including scope, approach, and risk rationale
- User Requirements Specification (URS)
- Supplier Assessment
- Configuration Specification
- Requirements Traceability Matrix (RTM)
- IQ protocol and report
- OQ protocol or protocols and report or reports
- PQ or UAT protocol and report
- Validation Summary Report

Under CSA the contents of these documents change more than the list does. The Validation Plan carries the risk rationale that drives scope. The OQ reports show rigorous scripted testing for direct-impact features and lighter records for indirect ones. The Validation Summary Report ties the whole package back to the risk decisions so that an inspector can read the logic, not just the results.

The [validation deliverables guide](/articles/validation-deliverables-guide) covers what each document is actually for and what makes each one defensible at inspection. For the electronic records and signatures controls that sit underneath all of this, see [the Part 11 and Annex 11 practical guide](/articles/part-11-annex-11-practical-guide). And if your scope includes software that learns or adapts, the assurance questions change again, which is the subject of [validating AI in GxP systems](/articles/validating-ai-gxp-systems).
