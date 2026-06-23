---
title: "Validating Agile and DevOps-Delivered GxP Software: CI/CD in a Regulated World"
description: "How to keep GxP software validated when it ships every sprint: iterative validation, automated tests as objective evidence, sprint-level documentation, and the GAMP 5 second edition Agile model."
pubDate: 2026-06-20
tags: ["csv", "agile", "devops", "ci-cd", "gamp5", "computer-software-assurance", "automated-testing"]
pillar: "csv-csa"
tier: "Advanced"
---

The old computer system validation model assumed a system arrived once, got tested once, and then sat still under change control for ten years. Agile and DevOps break that assumption on purpose. Software now ships in two-week increments, configuration changes daily, and an automated pipeline can push code to a GxP-relevant environment in minutes. The validation question is not "should we allow this" (the regulators already allow it) but "how do we keep the system in a validated state while it moves that fast, and how do we prove it."

This article covers that. It is aimed at validation leads, QA reviewers, CSV specialists, and product owners working on systems where the software is built or heavily configured in-house or by a vendor using Agile sprints and continuous integration / continuous delivery (CI/CD). It assumes you already know the basics of [the GAMP 5 framework](/articles/gamp5-csv-framework) and [computer software assurance](/articles/computer-software-assurance-fda). If you do not, read those first.

---

## Why iterative validation is allowed (and what changed)

### The regulatory basis

Nothing in the predicate rules forces a waterfall lifecycle. **21 CFR Part 11** (electronic records and signatures) and **EU Annex 11** (computerised systems) require that systems be validated, that records be attributable, legible, contemporaneous, original, and accurate, and that change control exist. They do not prescribe a project methodology. The same is true of **21 CFR 211.68** (automatic, mechanical, and electronic equipment) for drug manufacturing and **21 CFR 820.70(i)** (now folded into the Quality Management System Regulation, QMSR, effective February 2, 2026) for device software.

Three documents made Agile validation defensible in practice:

- **ISPE GAMP 5: A Risk-Based Approach to Compliant GxP Computerized Systems, Second Edition (2022).** The second edition added explicit treatment of iterative and incremental (Agile) development, of software tools and automation, and of IT service management practices like ITIL. It is the reference most auditors expect you to cite. GAMP 5 second edition has a dedicated appendix on Agile software development and another on software tools.
- **FDA Guidance, "Computer Software Assurance for Production and Quality System Software" (draft September 2022, finalized 24 September 2025).** Computer Software Assurance (CSA) reframes effort around risk and explicitly endorses using vendor activities, unscripted testing, and automated testing as evidence. CSA is the philosophy that makes "the pipeline tested it" an acceptable sentence in a validation report. See [the CSA article](/articles/computer-software-assurance-fda) for the full treatment.
- **ISPE GAMP Good Practice Guides on agile and innovative delivery.** ISPE has published GAMP good practice guidance addressing agile and modern software delivery; these flesh out how to document Agile work without drowning it in paperwork. Use the current ISPE catalogue for the exact title in force when you write your plan.

> EU Annex 11, paragraph 4.1 directs that the validation documentation and reports span the relevant steps of the system life cycle. The life cycle can be iterative. The requirement is coverage of the relevant steps, not a single linear pass.

### The quality rationale

The reason iterative validation is not just permitted but often better: small, frequent changes are easier to test, easier to trace, and easier to roll back than a large annual release. A two-week increment touching five user stories has a far smaller risk surface than a twelve-month release touching two hundred. The danger is the opposite one. Speed without discipline produces undocumented changes, tests that nobody reviewed, and a "validated state" that quietly drifts away from reality. The entire job of Agile CSV is to bolt quality evidence onto a fast pipeline so that velocity and a defensible validated state coexist.

---

## The core concept: validation as a continuous state, not a one-time event

In a waterfall project, "validated" is a milestone. You execute the protocols, sign the [validation summary report](/articles/validation-summary-report-and-release), and the system goes live.

In Agile and DevOps, treat "validated" as a **state you continuously maintain**. Every increment that touches GxP functionality must leave the system in a documented, tested, traceable, released-with-approval condition before it reaches the production (validated) environment. The mechanism that enforces this is the **definition of done** plus a controlled promotion path through environments.

Two practical anchors:

1. **The validated state lives in production only.** Developers can do anything in a sandbox. The control gate is the promotion of code and configuration into the qualified production environment. That gate is where QA approval, traceability, and release evidence must be complete.
2. **Risk drives rigor per story, not per project.** A user story that changes a GxP calculation, an audit trail, an electronic signature, or batch disposition logic gets full scripted verification and QA review. A story that changes the color of a non-GxP dashboard tile gets a code review and an automated test, nothing more. This is CSA thinking applied at the story level.

---

## The Agile / DevOps validation operating model

Here is the end-to-end model. The rest of the article expands each piece.

| Layer | Artifact | Frequency | Owner | GxP purpose |
|---|---|---|---|---|
| Plan | Validation plan / VMP addendum for Agile delivery | Once per product, reviewed periodically | Validation lead, QA | States the iterative approach, environments, gates |
| Requirement | User story + acceptance criteria, GxP-tagged | Every sprint | Product owner, SME | Traceable requirement of record |
| Risk | Story-level risk assessment / impact tag | Every sprint, at refinement | Validation, SME, QA | Sets test rigor per story |
| Design | Configuration spec / design notes in the story or linked | As needed | Developer, SME | Shows how the requirement is met |
| Build/Test | Automated unit, integration, regression tests in CI | Every commit / merge | Developer, automation engineer | Objective evidence, fast feedback |
| Verify | Scripted + unscripted acceptance test execution | Per story, per increment | Tester, SME | Verifies GxP requirements met |
| Release | Definition of done met, QA release approval, release notes | Per increment to production | QA, release manager | Authorizes the validated state change |
| Operate | Change control linkage, periodic review, CPV-style monitoring | Continuous | System owner, QA | Sustains the validated state |

The genius of the model is that most evidence is generated as a by-product of doing the work properly, not as a separate documentation exercise afterward.

---

## User stories and acceptance criteria as the requirement of record

### What it is and why it is required

Annex 11 paragraph 4.4 and GAMP 5 both require that requirements be documented, current, and traceable to testing. In waterfall you write a User Requirements Specification (URS). In Agile, the **product backlog of user stories with acceptance criteria** is the living requirements specification. This is allowed, but only if the stories are managed as controlled records: versioned, approved, and traceable. See [user requirements and traceability](/articles/user-requirements-and-traceability) for the foundational treatment.

### What goes in it

A GxP-fit user story contains:

- **Story statement**: "As a [role], I want [capability], so that [benefit]."
- **GxP tag / classification**: GxP-impacting (and which predicate area) or non-GxP. This drives rigor.
- **Acceptance criteria**: testable, unambiguous conditions, ideally in Given/When/Then form.
- **Risk note**: severity if the function fails, probability, detectability.
- **Linked design / configuration notes** where the implementation is non-trivial.
- **Traceability links**: to the regulatory or business requirement above it, and to the tests below it.
- **Approval and version**: who accepted it into the sprint, when, and the version that was built.

### A worked example

| Field | Content |
|---|---|
| Story ID | US-1042 |
| Statement | As a QC analyst, I want the LIMS to flag a result outside spec so that out-of-specification results cannot be silently released. |
| GxP tag | GxP-impacting, data integrity + batch disposition |
| Acceptance criteria | Given a result is entered above the upper spec limit, When the analyst saves, Then the record is flagged OOS, the result cannot be auto-approved, and an audit trail entry records the flag with user, timestamp, and reason. |
| Risk note | Severity high (could release failing product), probability low, detectability low if not flagged → high rigor |
| Design link | CFG-1042: rule engine spec, spec-limit lookup table |
| Trace up | URS-07 (OOS handling), Annex 11 cl. 9 (Audit Trails), Part 11 audit trail |
| Trace down | AT-1042-01 scripted test, automated test suite OOS-flag-001 |
| Approval | Product owner accepted 2026-03-04, built in v2.7.0 |

### Acceptance criteria for the artifact

You know the story is done right when: it is testable as written (a tester can pass or fail it without guessing), it carries a GxP classification, it traces up and down, and the acceptance criteria match what was actually built and tested. A vague story ("improve OOS handling") is a finding waiting to happen, because nobody can prove what "improved" means.

### Common mistakes

- Stories with no GxP classification, so every story gets the same heavy treatment (kills velocity) or the same light treatment (kills compliance).
- Acceptance criteria written after the demo to match what was built. That is reverse-engineering evidence, and reviewers can smell it.
- Backlog tools (the popular issue trackers) used without any approval or version control, so the requirement of record is editable by anyone with no signature. Annex 11 and Part 11 expect controlled records; a freely editable ticket is not one.

---

## Story-level risk assessment: the engine that sets rigor

### Why it is required and how it works

GAMP 5 second edition and FDA CSA both put risk at the center. The required activity is the same as a classic [CSV risk assessment](/articles/csv-risk-assessment-methodology), but performed continuously at the story level during backlog refinement rather than once at project start.

For each GxP-tagged story, assess:

- **Severity**: what is the harm if this function is wrong (patient safety, product quality, data integrity)?
- **Probability**: how likely is a defect given the complexity and novelty?
- **Detectability**: would a downstream control catch the failure before it caused harm?

The output is a rigor level that sets the test approach.

### Worked example: rigor tiers

| Risk class | Example story | Test approach |
|---|---|---|
| High GxP | Changes an OOS flag, e-signature meaning, audit trail content, dose/spec calculation | Scripted acceptance test + automated regression + QA witness/review of evidence; full traceability |
| Medium GxP | Adds a GxP report field, changes a workflow step that has downstream review | Scripted or rigorous unscripted test + automated test; QA review of result |
| Low GxP / non-GxP | UI layout, non-GxP filter, internal logging | Automated test + peer code review; no separate scripted protocol |

### Roles

The product owner brings the business and process context, the SME (the quality or process expert, for example a QC manager for a LIMS story) judges the GxP impact and severity, validation facilitates the method and consistency, and QA approves the rigor decision for high-risk stories. Do not let developers self-assess GxP impact alone; that is a segregation-of-duties gap.

### Common mistakes

- Treating the risk assessment as a one-time project artifact, so new high-risk stories sneak in under the original low-risk rating.
- No documented rationale for why a story was rated low. "We rated it low" is not evidence; "no GxP data, no audit trail, no calculation, change isolated to a cosmetic component" is.

---

## Automated testing as objective evidence

This is the heart of Agile CSV, and the part interviewers probe hardest.

### Why automated tests count as validation evidence

Historically, validation evidence meant a human executing a scripted protocol and signing each step. FDA CSA explicitly recognizes that **automated testing produces objective evidence** and can reduce or replace manual scripted testing where risk allows. GAMP 5 second edition's appendix on software tools provides the framework for trusting tool-generated output. The logic: a test that runs identically a thousand times, with a recorded pass/fail and a timestamp, is more reliable and more reproducible than a tester clicking through screens once.

But the evidence only counts if four conditions hold. Memorize these, because they are the inspection questions:

1. **The test itself is controlled.** The test code is version-controlled, reviewed, and traceable to a requirement. An unreviewed test proves nothing, because nobody knows whether it actually checks what it claims.
2. **The test environment is qualified or representative.** Evidence from an environment that does not match production is weak. The configuration the test ran against must be known and controlled.
3. **The test result is preserved as a record.** The CI system must retain pass/fail results, logs, timestamps, the commit/version under test, and who or what triggered the run, with the same integrity expectations as any GxP record. Results that vanish after the next build are not records.
4. **The automation tool is fit for purpose.** Per GAMP 5, the test framework and CI server are software tools whose suitability is assessed. You do not full-validate a unit-test framework, but you do assess and document that it works, typically leaning on its widespread use and your own confirming runs.

### The test pyramid in a GxP context

| Test layer | What it checks | Who owns | GxP weight |
|---|---|---|---|
| Unit tests | Individual functions/rules in isolation | Developer | Supporting evidence; high value for calculation logic |
| Integration tests | Components working together, interfaces, data flow | Developer / automation engineer | Strong evidence for interface and data-integrity requirements |
| Automated regression suite | Previously passing GxP behavior still works | Automation engineer | Critical: protects validated state across changes |
| Acceptance / system tests | The user story's acceptance criteria, end to end | Tester + SME | Maps directly to requirements; can be scripted automated or manual |
| Unscripted / exploratory | Edge cases, error handling, "try to break it" | Tester / SME | CSA-endorsed; document what was explored and what was found |

### Worked example: an automated acceptance test as evidence

For story US-1042 above, the acceptance test OOS-flag-001 might assert:

- Input: result 105.0 against upper spec limit 100.0
- Expected: record flagged OOS, auto-approval blocked, audit trail entry created with user/timestamp/reason
- Recorded evidence: test name, version of system under test (v2.7.0), commit hash, environment ID, timestamp, PASS, and the captured audit trail entry

The validation record references the CI run ID. The reviewer can open that run, see the result, and trace it to US-1042 and to URS-07. That is a complete, defensible thread: requirement, risk, test, result, traceability, all generated by the pipeline.

### Acceptance criteria for the test strategy

Good looks like: every high-risk acceptance criterion has at least one automated or scripted test, the regression suite runs on every promotion toward production and must pass, test results are retained as records, and there is documented traceability from requirement to test to result. A red build never reaches the production environment.

### Common mistakes and inspection findings

- **Tests exist but results are not retained.** The single most common Agile-CSV finding: the team "has CI" but cannot produce the pass/fail record for the version that was released. No retained result, no evidence, no validation.
- **No traceability from automated tests to requirements.** A green dashboard with 4,000 passing tests proves nothing if you cannot show which test verifies the OOS-flag requirement.
- **Test code never reviewed.** A test that asserts `true == true` passes forever and verifies nothing. Reviewers check that tests actually exercise the requirement.
- **The qualified environment question ignored.** Tests run against a developer laptop config, then code ships to a different production config, and nobody re-verified GxP behavior in the qualified environment.
- **Treating coverage percentage as a quality metric.** High coverage of trivial code while the GxP calculation is barely tested. Risk-weight your coverage, do not chase a number.

---

## The CI/CD pipeline as a controlled, qualified path to production

### Why the pipeline needs qualifying

In DevOps, the pipeline is the thing that changes the validated state. It builds, tests, and promotes code to production. If the pipeline is uncontrolled, then your validated state can change without control, which is exactly what Annex 11 paragraph 10 (change and configuration management) and [change control for validated systems](/articles/change-control-validated-systems) forbid. So the pipeline itself is GxP infrastructure and must be qualified to the extent it can change a validated system. See also [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation) and [IT change and configuration management for GxP](/articles/it-change-and-configuration-management-gxp).

### What "qualifying the pipeline" actually means

You are not writing IQ/OQ/PQ for a Jenkins server in the old style. You are establishing and documenting controls:

- **The pipeline definition is version-controlled.** Pipeline-as-code (the YAML or script that defines the stages) is itself a controlled configuration item. Changes to it go through review.
- **The pipeline enforces the gates.** It is configured so that a build cannot reach production unless tests pass, required approvals are recorded, and the branch is the approved one. The control is built into the tooling, not left to discipline.
- **Access and segregation of duties are controlled.** The person who can merge to the release branch and the person who approves the production release should be separable for high-risk changes. Production-promotion permissions are restricted and reviewed. This ties to [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control).
- **Promotion to production is recorded.** Who/what promoted which version, when, and with what approval. This is your release record.
- **Environments are defined and controlled.** Dev, test/QA, and production (validated) are distinct, and what moves between them is known. Production configuration is under [configuration management](/articles/it-change-and-configuration-management-gxp).

### Worked example: a gated pipeline

| Stage | Action | Gate to pass | Evidence produced |
|---|---|---|---|
| Commit | Build, unit tests, static checks | All unit tests pass, no critical static-analysis defects | Build log, test results, commit hash |
| Merge to main | Integration + regression suite, code review approval | All tests green, peer review recorded | Review record, CI run ID, results |
| Deploy to QA env | Deploy build to validated-representative env | Deployment success, smoke tests pass | Deploy log, env ID |
| Acceptance | Scripted + unscripted acceptance tests for the increment | High-risk acceptance criteria all pass, SME sign-off | Executed test evidence |
| Release to production | Promote version; definition of done verified | QA release approval recorded, all prior gates green | Release record, release notes, approval |

The infrastructure-as-code and automation here are explicitly within scope of GAMP 5 second edition's treatment of IT service management and software tools.

### Common mistakes

- **A manual back door around the pipeline.** Someone can SSH into production and change a file or config directly, bypassing every gate. That single capability voids the controlled-path argument. Lock it down or you cannot claim the pipeline controls the validated state.
- **The pipeline config is editable by developers with no review.** If a developer can quietly delete the "tests must pass" gate, the gate is theater.
- **No record of what was deployed.** The pipeline deploys "latest" with no captured version/commit, so you cannot say what is actually running in the validated environment.

---

## Sprint-level documentation: enough, not exhaustive

### The problem this solves

Agile teams fear that CSV means turning every two-week sprint into a months-long documentation project, killing the velocity that justified Agile in the first place. The answer is to define, up front, the minimum documentation set that satisfies the predicate rules, and to generate most of it as a by-product of the work.

### What documentation is actually required, mapped to where it lives

| Traditional deliverable | Agile equivalent | Where it lives |
|---|---|---|
| Validation plan | Validation plan stating the iterative approach (written once) | Controlled document / VMP addendum |
| URS | Backlog of GxP-tagged user stories with acceptance criteria | Controlled backlog tool with versioning |
| Risk assessment | Story-level risk notes + overall risk approach | In the story + the plan |
| Functional/design spec | Acceptance criteria + linked configuration/design notes | In the story or linked design records |
| Traceability matrix | Auto-generated requirement-to-test links | Generated from the toolchain |
| Test protocols + results | Automated test definitions + retained CI results + scripted tests for high-risk | CI system + test management tool |
| Validation summary report | Increment release record + periodic summary report | Release record + a periodic [VSR](/articles/validation-summary-report-and-release) |

The key insight: you do not delete deliverables, you relocate them and automate their generation. The [validation deliverables guide](/articles/validation-deliverables-guide) explains each traditional artifact; the Agile job is mapping each to a sprint-native home.

### The definition of done as the documentation contract

The **definition of done (DoD)** is the single most useful Agile-CSV control. It is a checklist that every GxP story must satisfy before the increment is releasable. A worked DoD for a high-GxP story:

- [ ] Acceptance criteria written, testable, and approved
- [ ] GxP classification and risk recorded
- [ ] Code peer-reviewed
- [ ] Automated unit + integration tests written and passing
- [ ] Regression suite passing
- [ ] Scripted acceptance test executed and evidence retained (high-risk)
- [ ] Traceability links (requirement to test to result) complete
- [ ] Configuration/design change documented
- [ ] Change control reference linked
- [ ] QA review/approval recorded for production release
- [ ] Release notes updated

When the DoD is met, the documentation is complete by construction. When an auditor asks "how do you know this change was validated," you point at the DoD evidence for that story.

### Acceptance criteria for sprint documentation

Good looks like: a new reviewer can pick any released GxP story and reconstruct the full thread (requirement, risk, design, test, result, approval) in minutes, without interviewing the developer. If the knowledge lives only in someone's head or a chat thread, it is not documented.

### Common mistakes

- **Documentation deferred to a "validation sprint" at the end.** This recreates waterfall, loses contemporaneousness (a data-integrity problem under ALCOA+, see [ALCOA+ in detail](/articles/alcoa-plus-deep-dive)), and usually means writing evidence from memory. Document per increment.
- **Decisions captured only in chat tools or stand-up conversation.** Verbal acceptance of a GxP story is not a record. The acceptance and approval must land in a controlled artifact.
- **The DoD exists but is not enforced.** A DoD that the team skips under deadline pressure is worse than none, because it documents that you knew the standard and ignored it.

---

## Change control and the validated state in a fast pipeline

Agile does not abolish [change control](/articles/change-control-validated-systems); it makes it lightweight and continuous. The model most teams land on:

- **A standing change control (or change framework) authorizes the iterative delivery process itself.** This is approved once: the environments, the pipeline, the gates, the DoD, the risk method. It says "changes delivered through this controlled process, meeting this DoD, are authorized."
- **Each increment to production is a change executed under that framework**, with its own release record and approval, rather than a separate multi-week change request per story. The release record is the change record.
- **Changes outside the framework** (a new high-risk module, a platform upgrade, an infrastructure change, a vendor major version) still trigger a normal change assessment and may require additional validation.

The control objective from Annex 11 paragraph 10 is unchanged: changes to computerised systems are made in a controlled manner. Agile satisfies it through the gated pipeline plus the DoD plus the release approval, not through a thick change form per commit. Be ready to explain this to an inspector precisely, because "we use Agile so we do not do change control" is the wrong answer and a guaranteed finding.

---

## Vendor-delivered Agile: when the software comes from a supplier

Many regulated companies do not build the software; a vendor builds it Agile and ships releases. This shifts the work toward [supplier assessment](/articles/software-supplier-assessment-csa) and [vendor qualification](/articles/supplier-vendor-qualification), and GAMP 5 second edition's emphasis on supplier activities becomes central.

What to establish:

- **Assess the vendor's own SDLC and quality system.** Do they have a documented Agile process, test automation, defect management, release control? A capable supplier's testing can be used as evidence under CSA and GAMP 5, reducing your duplicate testing. A weak one means you test more yourself.
- **Define release acceptance.** You do not validate every vendor sprint. You define how you accept a vendor release into your validated environment: review of release notes, your own risk-based acceptance testing focused on your GxP use, and regression of your critical workflows.
- **Pin and control the version.** Know exactly which version is in your validated environment and control when it changes. Vendor auto-update into a GxP production system without your acceptance is a finding.
- **Quality agreement.** Spell out who tests what, what the vendor will provide as evidence, notification of changes, and access for audit. See [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements) for the agreement mechanics (the same logic applies to software suppliers).

This applies strongly to [cloud and SaaS validation](/articles/cloud-saas-validation), where the vendor pushes continuous updates you do not control. The discipline there is continuous vendor monitoring, change notification, and risk-based regression of your configured GxP functions after vendor releases.

---

## Operating the system: sustaining the validated state

Validation does not end at release in any model, and Agile makes the operate phase continuous:

- **Periodic review** (Annex 11 paragraph 11) confirms the system, including the accumulated increments, remains validated and fit for use. See [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review).
- **The regression suite is your continuous verification.** Every promotion re-proves that prior GxP behavior still works. This is conceptually similar to [continued process verification](/articles/continued-process-verification-cpv) in manufacturing: you keep proving the validated state, you do not assume it.
- **Audit trail and data integrity controls** (see [audit trail design and review](/articles/audit-trail-design-and-review)) must themselves be in the regression scope, because an Agile change can silently break an audit trail, and that is among the highest-severity failures.
- **Defect and deviation handling.** A defect found in production in a GxP function is a [deviation](/articles/deviation-management) and may need [CAPA](/articles/what-is-a-capa). Agile teams fix fast, but the quality event still gets recorded, assessed, and trended.

---

## Roles and responsibilities across the model

| Role | Responsibility in Agile/DevOps CSV |
|---|---|
| Product owner | Owns the backlog, writes/prioritizes stories, ensures GxP requirements are captured, accepts stories |
| SME (process/quality expert) | Judges GxP impact and risk, writes/reviews acceptance criteria, witnesses high-risk acceptance, owns the process the system serves |
| Validation lead | Defines the validation approach, the risk method, the DoD, traceability standard; ensures the model is documented and followed |
| QA | Approves the validation plan and risk approach, reviews/approves high-risk story evidence, approves production releases, owns the quality system linkage |
| Developer | Builds the configuration/code, writes unit/integration tests, peer-reviews, self-tests in sandbox |
| Automation/test engineer | Builds and maintains the automated test suites and the pipeline gates, ensures results are retained |
| Release manager / DevOps engineer | Owns the controlled pipeline and promotion path, the version control, the environment controls |
| System owner | Accountable for the system staying validated in operation, periodic review, change governance |
| Supplier (if vendor-built) | Provides SDLC evidence, test results, release notes, change notifications per the quality agreement |

The recurring segregation-of-duties principle: the person who writes the code should not be the sole person who approves its release to a validated production environment for a high-risk change.

---

## Interview-ready: the questions and how to answer them

**"Is Agile/DevOps even allowed for GxP software?"**
Yes. The predicate rules (Part 11, Annex 11, 211.68, the device QMSR) are methodology-neutral; they require a validated, controlled, traceable system, not a waterfall. GAMP 5 second edition (2022) added explicit Agile and software-tool appendices, and FDA's Computer Software Assurance guidance endorses risk-based, automated, and vendor-sourced evidence. What is not allowed is uncontrolled change. The job is bolting controlled evidence onto a fast pipeline.

**"How can an automated test be validation evidence if a human did not execute it?"**
Because objective evidence does not require a human clicking. CSA explicitly recognizes automated testing. It counts when four conditions hold: the test code is version-controlled and reviewed (so we know it checks the right thing), it ran in a known/representative environment, the result is retained as a record (pass/fail, timestamp, version under test), and the test framework is an assessed, fit-for-purpose tool. Miss any of those and the green check proves nothing.

**"What stops a developer from changing the validated production system without control?"**
The gated pipeline plus access controls. Promotion to the validated production environment happens only through the pipeline, which enforces passing regression, recorded approvals, and the approved branch, and direct write access to production is locked down. The pipeline definition is itself version-controlled and review-gated. The release record is the change record. If a manual back door to production exists, that is the finding, and I would close it.

**"Where is your URS if you only have a backlog?"**
The backlog of GxP-tagged user stories with approved, testable acceptance criteria is the requirements specification of record, provided it is versioned, approved, and traceable to tests. A freely editable ticket with no approval is not a controlled requirement, so the control is managing the backlog as a controlled record.

**"How do you do change control if you release every two weeks?"**
A standing framework authorizes the controlled delivery process itself (environments, pipeline, gates, DoD, risk method), approved once with QA. Each production increment is a change executed under that framework with its own release record and approval. Changes outside the framework, a new high-risk module, a platform upgrade, a vendor major version, get a full change assessment. The Annex 11 control objective, controlled change, is met by the gated process plus the release approval, not by a thick form per commit.

**"How do you keep documentation contemporaneous without slowing the sprint?"**
The definition of done is the contract: a GxP story is not done until its acceptance criteria, risk note, tests, results, traceability, change link, and approval exist. Most of that is generated by doing the work properly (CI produces the test record, the toolchain produces traceability), so documentation is by-product, not a separate phase. Deferring it to a "validation sprint" at the end recreates waterfall and breaks contemporaneousness under ALCOA+.

**"A vendor ships continuous SaaS updates you do not control. How is that validated?"**
Through supplier assessment and release acceptance, not by validating their sprints. Assess and draw on the vendor's SDLC and testing under GAMP 5 and CSA, require change notification and release notes, pin/know the version in production, and run risk-based regression of my configured GxP workflows after each vendor release that touches them. Auto-update into validated production without my acceptance would be a finding.

**"What is the single biggest risk in Agile CSV?"**
Drift: the validated state quietly diverging from the documented state because changes outran the evidence. The controls against it are the gated pipeline, the enforced definition of done, and the regression suite that re-proves GxP behavior on every promotion.

---

## Common inspection-finding patterns (generic)

- Test results not retained for the version actually released, so the release cannot be shown to be tested.
- No traceability from automated tests back to GxP requirements.
- Requirements managed in an editable ticketing tool with no approval, version control, or audit trail.
- A definition of done that exists on paper but is bypassed under schedule pressure.
- Direct, ungated access to the validated production environment.
- Documentation written retroactively in a batch at project end rather than per increment.
- Vendor updates reaching the validated environment without acceptance testing or version control.
- The CI/CD pipeline configuration itself uncontrolled, so the gates can be silently removed.
- Audit trail and e-signature functions not included in the regression scope, so a routine change can break them undetected.

---

## Practical tips

- Write the validation plan that states the iterative approach **before** the first sprint and get QA to approve it. Trying to retrofit an Agile narrative onto an inspection is far harder than declaring it up front.
- Make the definition of done specific to risk tier, not one-size-fits-all. A low-GxP story should not carry the high-GxP DoD; that is how you lose the team's buy-in.
- Invest early in traceability automation. The single most painful Agile-CSV gap at audit time is reconstructing requirement-to-test-to-result links by hand. Wire the toolchain to generate them.
- Keep the regression suite honest. A suite that nobody maintains rots into false greens. Review it as a controlled deliverable, prune dead tests, and confirm new GxP behavior is added to it.
- Treat the pipeline-as-code, the test code, and the environment definitions as configuration items under the same change discipline as the application. They control the validated state, so they are in scope.
- Bring the auditor a single worked thread, one GxP story from statement to release record, as your demonstration. A clean end-to-end example is more convincing than a binder of policy.

---

## Related reading

- [GAMP 5 CSV framework](/articles/gamp5-csv-framework)
- [Computer Software Assurance (FDA)](/articles/computer-software-assurance-fda)
- [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology)
- [Change control for validated systems](/articles/change-control-validated-systems)
- [IT change and configuration management for GxP](/articles/it-change-and-configuration-management-gxp)
- [Cloud and SaaS validation](/articles/cloud-saas-validation)
- [Software supplier assessment (CSA)](/articles/software-supplier-assessment-csa)
- [User requirements and traceability](/articles/user-requirements-and-traceability)
- [Validation deliverables guide](/articles/validation-deliverables-guide)
- [Validating low-code, scripts, and analytics](/articles/validating-scripts-low-code-analytics)
- [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11)
- [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control)
