---
title: "Reusing Supplier Documentation: Vendor Audits and Software Supplier Assessment"
description: "How to assess a software supplier's quality system and SDLC, decide what vendor testing to accept versus re-test, and run remote or postal vendor audits under a CSA approach."
pubDate: 2026-06-20
tags: ["csa", "supplier assessment", "vendor audit", "csv", "software vendor", "risk-based validation", "sdlc"]
pillar: "csv-csa"
tier: "Intermediate"
---

A regulated company almost never builds the software it runs. The chromatography data system, the LIMS, the electronic batch record platform, the document management system: these are commercial products built by suppliers who already designed, coded, and tested them against thousands of customer requirements. The whole point of supplier assessment is to figure out how much of that supplier work you can rely on, so your own validation effort lands where it actually reduces risk rather than re-proving what the vendor already proved.

This is the heart of the Computer Software Assurance (CSA) mindset. The FDA final guidance "Computer Software Assurance for Production and Quality System Software" (24 September 2025, which superseded the 2022 draft) is explicit that manufacturers should consider the activities a supplier already performs and avoid duplicating them. GAMP 5 Second Edition (2022) goes further and makes "reusing supplier involvement" one of its key concepts. If you do supplier assessment well, you reduce test scripts, shorten timelines, and still hold a defensible position in front of an inspector. If you do it badly, you either re-test everything (wasteful) or accept everything blindly (a finding waiting to happen).

This article walks through the full supplier assessment lifecycle: deciding which suppliers to assess and how deeply, what to look at in their quality system and software development lifecycle (SDLC), how to run the assessment including remote and postal audit techniques, how to decide what to accept versus re-test, and how to document it so it holds up.

---

## Why supplier assessment exists: the regulatory basis

Supplier assessment is not a nice-to-have. Several regulations and guidances put the obligation squarely on the regulated company.

**EU GMP Annex 11 (Computerised Systems)** is the primary anchor for a pharma, biotech, or biologics operation. Section 3.1 requires that when third parties (suppliers, service providers, and IT departments treated the same way) are used to provide, install, configure, integrate, validate, maintain, or modify a computerised system, formal agreements must exist that set out the third party's responsibilities clearly. Section 3.2 states that the competence and reliability of a supplier are key factors in selecting a product or service provider, and that the decision on whether to audit should rest on a risk assessment. That risk-based principle is the anchor for the decision on whether and how to audit.

**EU GMP Chapter 7 (Outsourced Activities)** and the **PIC/S PI 011 (Good Practices for Computerised Systems in Regulated GxP Environments)** reinforce that responsibility for the validated state stays with the regulated user, even when work is delegated to a supplier.

**21 CFR Part 820.50 (Purchasing Controls)** carries the same obligation in supporting US regulation: you establish and maintain quality requirements that suppliers must meet, and you evaluate and select suppliers on their ability to meet those requirements. Software is a purchased product. The Quality Management System Regulation (QMSR) aligns 21 CFR 820 with ISO 13485:2016, where Clause 7.4 covers purchasing and supplier evaluation, and that alignment matters for combination products and software as a medical device in scope at a biologics or pharma company.

**ICH Q9(R1) Quality Risk Management (2022)** provides the framework for the risk-based depth decision. You scale assessment effort to the risk the system carries to product quality, patient safety, and data integrity.

**GAMP 5 Second Edition** is the industry interpretation, not a regulation, but inspectors recognize it. It introduces software categories (Category 1 infrastructure, Category 3 non-configured products, Category 4 configured products, Category 5 custom applications) and ties supplier reliance to category and risk.

The quality rationale underneath all of this: a supplier who runs a disciplined, documented SDLC produces software with fewer latent defects and a traceable history. If you can demonstrate that the supplier's controls are sound, the residual risk you carry is lower, and your own testing can be lighter and more targeted. If the supplier has no quality system, you cannot lean on anything they tell you, and you carry the full burden yourself.

---

## Step 0: Build the supplier assessment into your CSV procedure

Before any single assessment, your computerized system validation SOP (or a dedicated supplier management SOP) should define:

- The trigger: a supplier assessment is required before selecting or first using a GxP computerized system or service, and on a periodic basis afterward.
- The risk inputs that drive depth (GxP impact, data integrity impact, system category, novelty of the supplier).
- The allowed assessment methods (questionnaire, documentation review, remote audit, on-site audit) and when each is acceptable.
- Roles: who requests, who performs, who approves, who maintains the approved supplier list (ASL).
- Re-assessment frequency.

A common inspection finding is that supplier assessments happen ad hoc with no governing procedure, so two reviewers reach different conclusions for similar systems. Codify the logic once.

---

## Step 1: Classify the system and score the risk

Depth follows risk. You cannot decide how hard to assess a supplier until you know what the system does and what happens if its software is wrong.

Score, at minimum:

| Factor | Low | Medium | High |
|--------|-----|--------|------|
| GxP impact | Indirect (no GxP record or decision) | Supports GxP but with manual check | Direct GxP record, batch release, or patient safety |
| Data integrity impact | No electronic records retained | Records retained, manual verification possible | Records are the primary GxP evidence, Part 11 in scope |
| GAMP category | Cat 1 / Cat 3 | Cat 4 (configured) | Cat 5 (custom / bespoke) |
| Supplier maturity | Established, widely used, known quality system | Some track record | New, niche, or unknown vendor |
| Business / availability impact | Low | Medium | High |

A configured LIMS that holds release-critical results (Category 4, high GxP, high DI) sits at the top of this matrix and earns a deep supplier assessment, very possibly an audit. A read-only dashboard that displays already-released data, with the system of record elsewhere, sits low and may need only a questionnaire and a documentation review.

This scoring is your justification artifact. When an inspector asks "why didn't you audit this supplier?", the answer is the documented risk score, not "we were busy."

See the deeper treatment in [csv-risk-assessment-methodology](/articles/csv-risk-assessment-methodology) and [data-criticality-and-data-risk](/articles/data-criticality-and-data-risk).

---

## Step 2: Choose the assessment method

There is a ladder of methods, from cheapest and weakest evidence to most expensive and strongest. Match the rung to the risk.

1. **Supplier qualification questionnaire (self-assessment)**: the supplier completes a structured form about their quality system and SDLC. Cheapest. Weakest, because it is self-reported. Acceptable on its own only for low-risk systems.
2. **Documentation review (desk assessment)**: the supplier provides actual evidence (quality manual, SDLC procedures, a validation/test summary, certificates) and you review it against your checklist. Stronger, because you see artifacts, not just claims.
3. **Remote audit**: a live video audit where the supplier screen-shares records, walks you through their SDLC, and answers questions in real time. Strong, and now widely accepted.
4. **Postal / mailbox audit**: a structured documentary audit where the supplier returns a defined evidence package against your request list, with a formal report. A middle option between questionnaire and live audit.
5. **On-site audit**: physical visit. Strongest evidence, highest cost. Reserve for the highest-risk, highest-spend, or problem suppliers.

A pragmatic mapping:

| Risk tier | Minimum method |
|-----------|----------------|
| Low | Questionnaire (and check approved supplier status) |
| Medium | Questionnaire + documentation review, or postal audit |
| High | Remote or on-site audit, plus documentation review |
| High + new/unknown supplier | On-site or thorough remote audit |

Annex 11 Section 3.2 is the cover for not auditing every supplier: it ties the decision to audit to a risk assessment. Document the risk basis and you are aligned.

The method is an escalation ladder, not a menu. Start at the rung the risk score points to, and climb only when the evidence at that rung raises a question you cannot close on paper.

<div class="flow">
  <div class="flow-step">Risk score (GxP, DI, category, maturity)</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Low: questionnaire + ASL check</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Medium: + documentation review or postal audit</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">High: remote or on-site audit</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Evidence raises a question? Escalate one rung</div>
</div>

The escalation trigger is the part inspectors look for. A postal package that contradicts itself, a questionnaire that claims full traceability with no sample to show, a remote session where the supplier cannot open the record you named: each is a reason to climb, and the decision to climb (or not) belongs in the assessment record.

---

## Step 3: What to look at in the supplier's quality system

When you assess a supplier, you are answering one question: can I trust what this organization tells me about its software? You answer it by examining their quality system and their SDLC.

### Quality system elements to examine

| Area | What good looks like | What a gap looks like |
|------|----------------------|-----------------------|
| Quality management system | Documented QMS, ideally certified (ISO 9001) or, for medical software, ISO 13485 | No QMS, no procedures, "we just know how to do it" |
| Document and record control | Versioned, approved, retrievable SDLC procedures | Undated drafts, no approval signatures |
| Training and competence | Records that developers and testers are trained on procedures | No evidence anyone follows the procedures |
| CAPA / defect management | A closed-loop system for product defects and customer complaints | Bugs tracked in email and memory |
| Change control | Formal process for releasing changes and patches | Changes pushed with no record |
| Supplier's own subcontractor control | They assess their own hosting / component suppliers | Open-source and cloud components unmanaged |
| Security and access control | Defined access management, vulnerability handling | No security posture |

For a cloud or SaaS product, certifications such as SOC 2 Type II or ISO 27001 are useful evidence of operational and security controls, but they are not a validation. They tell you the supplier runs disciplined operations; they do not tell you the software does what your process needs. Treat them as inputs, not conclusions. See [cloud-saas-validation](/articles/cloud-saas-validation).

### SDLC elements to examine

This is where the CSA savings come from. A supplier that follows a real software development lifecycle has already produced requirements, design, code, and test evidence that you may be able to rely on.

Look for:

- **Requirements management**: do they capture and version product requirements? Can a requirement be traced to a test?
- **Design and architecture documentation**: appropriate to the product type.
- **Coding standards and code review / static analysis**: especially relevant for higher-risk or custom (Category 5) work.
- **Testing**: do they have a documented test strategy, unit tests, integration tests, system/functional tests, and regression testing for each release? Are results recorded with pass/fail and defects linked?
- **Release management**: how a version is built, version-controlled, approved, and released, with release notes.
- **Defect and bug tracking**: triage, severity, and resolution tracking that closes the loop.
- **Traceability**: requirement to design to test. This single artifact, if it exists and is credible, is the strongest reason you can reduce your own re-testing.

The GAMP 5 Second Edition concept of supplier involvement is precisely this: where the supplier produces good quality SDLC documentation, the regulated company can reference it in its own validation package rather than recreate it.

---

## Step 4: Run the assessment

### The questionnaire

A supplier qualification questionnaire should not be a yes/no survey that any salesperson can pass. Ask for evidence pointers, not just claims.

Sample sections and questions:

> **Company and quality system**
> 1. Do you operate a documented quality management system? If certified, attach the current certificate (ISO 9001 / ISO 13485) and scope.
> 2. Provide your top-level index of SDLC procedures with version and approval dates.
>
> **Software development**
> 3. Describe your release lifecycle. How is a version requirement traced to a test result?
> 4. Provide a redacted sample of a requirements-to-test traceability record for a recent release.
> 5. How are defects classified, tracked, and closed? Provide your severity definitions.
>
> **Testing and release**
> 6. What testing is performed before a release (unit, integration, system, regression)? Are results retained and approved?
> 7. Provide a redacted test summary / validation summary for the version we intend to use.
>
> **Records, Part 11 / Annex 11**
> 8. For products holding electronic records, describe audit trail, electronic signature, and access control capabilities.
> 9. Confirm whether time stamps are configurable and how the system clock is controlled.
>
> **Change, support, security**
> 10. How are patches and changes communicated and released to customers?
> 11. Describe your security vulnerability disclosure and patching commitments.
> 12. For hosted/SaaS: provide your latest SOC 2 Type II or ISO 27001 report and describe your backup and disaster recovery.

The questions about audit trail, signatures, and time stamps connect directly to [21-cfr-part-11-eu-annex-11](/articles/21-cfr-part-11-eu-annex-11), [audit-trail-design-and-review](/articles/audit-trail-design-and-review), and [time-stamps-and-system-clock-control](/articles/time-stamps-and-system-clock-control). A supplier whose product cannot meet these is not disqualified, but you now know you must add compensating controls.

### The documentation review (desk assessment)

Request the actual artifacts the questionnaire pointed to and review them against a checklist. You are checking whether the evidence is real, current, approved, and consistent with the claims. A vendor who claims full traceability but cannot produce a single sample of it has just told you something important.

Build the review against a defined checklist so it is repeatable. The companion [csv-csa-audit-checklist](/articles/csv-csa-audit-checklist) gives a worked checklist you can adapt.

### The remote audit

A remote audit is a live, scheduled session (often a half day to two days) conducted over video conference with screen sharing. It became mainstream during travel restrictions and is now an accepted, often preferred, method for software suppliers, whose evidence is digital anyway.

How to run one:

1. **Plan and agenda**: send the audit scope, agenda, and a document request list 2-4 weeks ahead. Specify what you want to see live versus in advance.
2. **Pre-read**: review provided documents before the session so live time is spent on follow-up, not first reading.
3. **Opening meeting**: confirm scope, attendees, and ground rules for screen sharing of records.
4. **Live evidence walkthrough**: ask the supplier to open their actual systems (requirements tool, test management tool, defect tracker, change records) and open specific records you name. Naming the record on the spot prevents a curated demo. For example: "Open the test record for the most recent point release and show me a failed test and how it was resolved."
5. **Sampling**: pick records yourself rather than accepting the ones offered. Trace one requirement end to end through design, code reference, and test.
6. **Interviews**: talk to a developer and a tester, not only the quality manager.
7. **Closing meeting**: present preliminary observations, agree on facts, and set a timeline for the report and any responses.

The single biggest remote-audit weakness is the curated demo, where the supplier shows only polished records. Counter it by naming records live and by sampling across at least two recent releases.

### The postal (mailbox) audit

A postal audit, sometimes called a documentary or mailbox audit, sits between a questionnaire and a live audit. You send a formal, detailed evidence request package; the supplier returns specific records and completed attestations; you assess them and issue a report. It is useful when travel is not justified, a live session cannot be scheduled, or the risk does not warrant a full audit but a questionnaire is too weak.

To make a postal audit credible rather than a glorified questionnaire:

- Request **objective evidence**, not statements. Ask for redacted copies of an actual traceability matrix, an actual test report, an actual change record, an actual defect log extract.
- Specify the **exact version** in scope, so the evidence matches what you will use.
- Require a **signed attestation** from the supplier's quality function that the evidence provided is true and current.
- Score the response against a checklist and issue a **formal report** with findings, just as you would for a live audit.

Its limitation: you cannot probe inconsistencies live or watch a person move through their real systems, so a supplier can still send only their best material. Reserve postal audits for medium risk, and escalate to a remote or on-site audit if the package raises questions you cannot resolve on paper.

### Cloud, SaaS, and the shared-responsibility split

For a hosted or SaaS product the supplier runs the infrastructure, the platform, and often the application, so a large part of the control environment is outside your walls. Your assessment has to draw the line clearly: what the supplier is responsible for, what you are responsible for, and where the line moves with the service model.

A practical split for a typical SaaS GxP application:

| Control area | Infrastructure / platform (supplier) | Application configuration and use (you) |
|---|---|---|
| Physical and network security | Supplier | N/A |
| Platform patching, backups, disaster recovery | Supplier (verify against their SOC 2 / ISO 27001 and SLA) | Confirm restore actually works for your data |
| Application availability and uptime | Supplier (per SLA) | Monitor and hold the SLA |
| User access, roles, segregation of duties | Supplier provides the capability | You configure and review it |
| Audit trail, e-signature configuration | Supplier provides the capability | You enable, configure, and review it |
| Data ownership, export, return on exit | Defined in the agreement | You confirm you can get your data out |
| Validation for intended use | N/A | Yours: the supplier never saw your process |

The recurring error is assuming the supplier's certifications cover the right-hand column. They do not. SOC 2 Type II tells you the platform is run with discipline; it says nothing about whether you configured roles, audit trail, and workflows correctly for your GxP use. Write the shared-responsibility split into the assessment and the quality agreement so the boundary is explicit and testable. The deeper treatment is in [cloud-saas-validation](/articles/cloud-saas-validation) and the [template-cloud-saas-qualification](/templates/template-cloud-saas-qualification) document.

### Open-source, freeware, and embedded components

Suppliers build on other people's code, and so might you. Open-source libraries, freeware utilities, and embedded third-party components carry no supplier you can audit in the usual way. Two questions decide how you handle them. First, does the component touch a GxP record or decision? A logging library buried in infrastructure is low concern; an open-source statistical package that computes a release result is not. Second, who controls the version and the patching? For a component inside a vendor product, push the question to the vendor: their subcontractor and component control is part of what you assess in Step 3. For a component you introduced yourself, you own its qualification, its version control, and its security patching, and you document the intended use and the testing the same way you would for any Category 3 or 4 software. "It is free, so it is not validated" is not a position that survives an inspection when the free tool produces GxP data.

---

## Step 5: Decide what to accept versus what to re-test

This is the decision that turns supplier assessment into real savings, and it is where CSA thinking pays off. The principle: do not re-test what the supplier credibly tested, unless the function is high risk to you or your configuration changes its behavior.

The decision runs per function, and it has a clear shape:

<div class="flow">
  <div class="flow-step">Function</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Did you configure or extend it? Yes &rarr; you test it</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">No: is it GxP/DI critical? Yes &rarr; focused confirm yourself</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">No: supplier tested it credibly? Yes &rarr; accept + verify install</div>
</div>

A practical decision logic:

1. **Did the supplier test this function, and is the evidence credible?** Credible means you saw it (or a sample of it) during the assessment and the SDLC that produced it is sound. If no, you test it.
2. **Is the function GxP critical or data integrity critical for your use?** High criticality means you confirm it yourself regardless of supplier testing, because the consequence of failure is severe. CSA pushes you toward unscripted or focused testing here, not necessarily a full re-execution of every supplier script.
3. **Did you configure or extend this function?** If you changed configuration, custom calculations, workflows, report templates, then the supplier never tested your version. You own that testing.
4. **Is it standard, off-the-shelf, non-configured behavior used as delivered?** Then supplier testing plus a verification that it installed correctly may be sufficient.

The CSA guidance frames the test effort by risk: high-risk functions warrant scripted testing, lower-risk functions can use less burdensome methods such as unscripted (exploratory) testing, ad hoc testing, or even error-guessing, and the rationale is recorded rather than every step being a formal script.

A worked example for a configured LIMS, Category 4:

| Function | Supplier tested? | Your criticality | You configured it? | Decision |
|----------|------------------|------------------|--------------------|----------|
| Core login / access control | Yes, evidence seen | High (DI) | No | Verify install + focused test of your roles |
| Standard sample login screen | Yes | Medium | No (used as delivered) | Accept supplier testing + smoke test |
| Custom result calculation (your formula) | No (your config) | High | Yes | Full scripted test by you |
| Audit trail capture | Yes | High (DI) | No | Focused test: confirm it captures your critical actions |
| Custom CoA report template | No | High | Yes | Scripted test of your template |
| Built-in unit conversion library | Yes | Low | No | Accept; optional sample check |

The savings come from the rows you do not script. The defensibility comes from documenting why each decision is acceptable, tied to the supplier assessment outcome. An inspector challenging a "we accepted vendor testing" position will ask to see the assessment that justified the reliance. If it exists and is sound, the position holds.

This logic feeds directly into your test planning. See [computer-software-assurance-fda](/articles/computer-software-assurance-fda), [csv-risk-assessment-methodology](/articles/csv-risk-assessment-methodology), and [validation-deliverables-guide](/articles/validation-deliverables-guide).

---

## Step 6: Document the outcome and update the approved supplier list

The assessment is not done until it is written down and the supplier's status is set.

### The supplier assessment report

Contents:

- Supplier and product identification, including the specific version assessed.
- Scope and method (questionnaire / desk / remote / postal / on-site) and the risk score that justified the method.
- Date, assessors, and supplier participants.
- Findings, classified by severity (critical / major / minor / observation). Use the same classification discipline as any audit, covered in [audit-finding-classification](/articles/audit-finding-classification).
- Evidence reviewed (list the records, not just "documents seen").
- Conclusion: approved / approved with conditions / not approved.
- Reliance statement: a clear note of what supplier activities and documentation you are relying on in your validation, and what you will still test yourself. This is the load-bearing sentence for your CSV file.
- CAPA / follow-up actions and due dates, with supplier responses where required.
- Re-assessment date.

### Approved supplier list (ASL)

The outcome updates the ASL with the supplier's status, the products and versions covered, the risk tier, and the next re-assessment date. Procurement and project teams use the ASL to confirm a supplier is qualified before purchase or go-live. A finding pattern inspectors cite is a system in GxP use whose supplier was never on the approved list, or whose qualification expired years ago.

### Periodic re-assessment

Risk-tier the frequency: for example high-risk suppliers every 1-3 years, medium every 3-5 years, low by exception or on trigger. Triggers for off-cycle re-assessment include a major product release, a security incident, a recurring support failure, a supplier acquisition or change of ownership, or a serious quality event traced to the supplier. Tie this into [supplier-vendor-qualification](/articles/supplier-vendor-qualification) and [cdmo-oversight-quality-agreements](/articles/cdmo-oversight-quality-agreements).

---

## Acceptance criteria: a complete, defensible supplier assessment

An assessment is finished and defensible when all of the following are true. Treat this as the self-check before you sign the report.

- The risk score exists, is documented, and justifies the assessment method chosen (questionnaire, documentation review, postal, remote, or on-site).
- The specific product version you will run was the version assessed, and that version is named in the report.
- A software-literate reviewer evaluated the SDLC evidence, not only the quality manual.
- Objective evidence was examined, not just claims: at minimum a sample of real traceability, test, defect, and change records, listed by name in the report.
- A written reliance statement records exactly what supplier activity and documentation you accept and what you will test yourself.
- Findings are classified by severity, with CAPA and due dates for any major or critical finding and supplier responses where required.
- The conclusion (approved, approved with conditions, or not approved) and a re-assessment date are recorded, and the approved supplier list is updated to match.
- For hosted products, the shared-responsibility split is explicit and reflected in the quality or technical agreement.

If any line is missing, the reliance you place on the supplier in your validation file is not yet supported. The most common gap at inspection is the reliance statement: the file leans on vendor work but nothing in writing says what was accepted and why.

## Roles and responsibilities

| Role | Responsibility |
|------|----------------|
| System / business owner | Initiates the assessment, defines intended use and GxP impact, owns the residual risk decision |
| Validation / CSV lead | Runs the risk scoring, selects the method, leads the documentation review and audit, writes the reliance statement and test strategy |
| QA | Approves the method choice and the final report, owns the approved supplier list, signs off on findings classification and supplier status |
| Subject matter expert (SME) | Evaluates the technical content of supplier SDLC evidence (a software-literate reviewer is essential; a non-technical auditor cannot judge SDLC quality) |
| IT / security | Assesses hosting, security posture, access management, backup/DR, and reviews SOC 2 / ISO 27001 evidence |
| Procurement / vendor management | Maintains contracts and quality/technical agreements, confirms approved status before purchase |
| Supplier (vendor) | Provides honest evidence, completes the questionnaire, hosts the audit, responds to findings, notifies of relevant changes |

The most common staffing mistake is sending an auditor who knows quality systems but not software. They will tick boxes on the QMS and completely miss that the supplier has no traceability or regression testing. Put a software-literate SME on every assessment of a configured or custom product.

The contractual layer matters too. Annex 11 Section 3.1 requires formal agreements defining responsibilities. A quality or technical agreement should pin down change notification, support response, data ownership and return on exit, and audit rights, including the right to a future on-site audit if a remote one raises concerns. See [cdmo-oversight-quality-agreements](/articles/cdmo-oversight-quality-agreements).

---

## Common mistakes and inspection-finding patterns

- **No supplier assessment at all** for a GxP system, or one done after go-live to backfill the file. The assessment must precede reliance.
- **Questionnaire treated as a full audit.** A self-completed form with no objective evidence and no risk justification for stopping there. Inspectors read this as box-ticking.
- **No risk basis for the depth chosen.** Annex 11 lets you skip audits based on risk, but only if the risk assessment exists. "We didn't audit because they're a big vendor" is not a documented basis.
- **Accepting supplier testing with no evidence it happened.** Claiming reliance on vendor validation while having never seen a single vendor test record. If you cannot show the assessment that examined the SDLC, the reliance is unsupported.
- **Confusing certifications with validation.** Filing a SOC 2 or ISO 9001 certificate and calling the system validated. Certifications support trust in the organization; they do not demonstrate the software meets your intended use.
- **Re-testing nothing for configured or custom functions.** The opposite error: leaning on vendor testing for calculations, reports, and workflows that you configured and the vendor never saw.
- **No reliance statement.** The CSV file relies on vendor work implicitly, but nothing in writing says what was accepted and why, so the position collapses under questioning.
- **Stale approved supplier list.** Supplier qualification expired, or the version in use is newer than the version assessed.
- **Non-technical auditor** who cannot evaluate SDLC evidence, producing a report that audited the supplier's quality manual but not their software engineering.
- **No change notification mechanism.** The supplier pushes a patch that alters validated behavior and no one knew, because the agreement never required notification.

---

## Interview-ready: questions you should be able to answer

**"How do you decide whether to audit a software supplier?"**
Risk-based, per Annex 11 Section 3.2. Score GxP impact, data integrity impact, GAMP category, and supplier maturity. Low risk gets a questionnaire and ASL check; medium gets documentation review or a postal audit; high gets a remote or on-site audit. The risk score is the documented justification for the method.

**"What does CSA change about supplier assessment compared with traditional CSV?"**
CSA, per the FDA final guidance dated 24 September 2025, tells you to consider activities the supplier already performs and not duplicate them. It shifts effort toward relying on credible vendor testing and toward unscripted, focused testing for lower-risk functions, with documented rationale, instead of re-scripting everything. The supplier assessment is what earns the right to lean on vendor work.

**"What would let you accept vendor testing instead of re-testing a function?"**
The supplier demonstrably tested it (I saw the records or a credible sample), their SDLC that produced the evidence is sound, the function is not high risk for my specific use, and I did not configure or extend it. If any of those fail, especially configuration or high criticality, I test it myself.

**"What is the difference between a SOC 2 report and software validation?"**
SOC 2 attests to operational and security controls at a service organization over a period. It supports trust in how the vendor runs the service. It says nothing about whether the software does what my regulated process requires. I use it as an input to the assessment, not as validation evidence.

**"How do you run a remote vendor audit and how do you stop it being a sales demo?"**
Send scope and a document request ahead, pre-read, then in the live session name specific records myself and have the supplier open their real systems and pull them up, including a failed test and how it closed. Sample across at least two recent releases and trace one requirement end to end. Interview a developer and a tester, not just the quality manager.

**"A supplier won't let you audit on site. What do you do?"**
Assess the risk. If risk allows, run a remote or postal audit with objective evidence and a signed attestation. Capture the audit-rights gap in the quality agreement and as a risk, add compensating controls and possibly a future on-site trigger. If the risk is high and no adequate assessment is possible, that itself is a finding that may rule the supplier out.

**"How do you handle a hosted SaaS supplier differently from an installed product?"**
I draw the shared-responsibility split explicitly. The supplier owns infrastructure, platform patching, backup, and availability, which I check against their SOC 2 Type II or ISO 27001 and the SLA. I own application configuration, user access and roles, audit trail and signature configuration, data export on exit, and validation for my intended use. Certifications cover the supplier's column, never mine. I write the split into both the assessment and the quality agreement so the boundary is testable.

**"Where does the supplier assessment live in the validation lifecycle?"**
Before selection and before reliance. Its output feeds the validation plan and test strategy through a reliance statement that records what vendor work I accept and what I will test, and it updates the approved supplier list with a re-assessment date.

---

## Practical tips

- Reuse a credible assessment across projects. If you assessed a supplier's QMS and SDLC for one product this year, a second product from the same supplier may only need a delta assessment on the new product, not a full repeat. Record the rationale.
- Ask for sample artifacts in the questionnaire stage. A vendor who can attach a redacted traceability matrix and test report in five minutes is a different risk than one who goes quiet.
- Write the reliance statement in plain terms. "We rely on the supplier's release testing for standard delivered functions A, B, C, evidenced in their test report v3.2 reviewed on [date]; we test our configured functions D, E ourselves." That one paragraph is what an inspector wants to see.
- Keep the version straight. Assess the version you will run. A new major release can invalidate prior reliance; tie it to your change control, see [change-control-validated-systems](/articles/change-control-validated-systems).
- Put a software-literate person in the room for any Category 4 or 5 product.
- Postal audits are a legitimate middle tier, but only with objective evidence and a signed attestation. Without those, you have an expensive questionnaire.

---

## Related articles

- [supplier-vendor-qualification](/articles/supplier-vendor-qualification)
- [conducting-a-supplier-audit](/articles/conducting-a-supplier-audit)
- [computer-software-assurance-fda](/articles/computer-software-assurance-fda)
- [gamp5-csv-framework](/articles/gamp5-csv-framework)
- [csv-risk-assessment-methodology](/articles/csv-risk-assessment-methodology)
- [cloud-saas-validation](/articles/cloud-saas-validation)
- [csv-csa-audit-checklist](/articles/csv-csa-audit-checklist)
- [cdmo-oversight-quality-agreements](/articles/cdmo-oversight-quality-agreements)
- [21-cfr-part-11-eu-annex-11](/articles/21-cfr-part-11-eu-annex-11)
- [validation-deliverables-guide](/articles/validation-deliverables-guide)
