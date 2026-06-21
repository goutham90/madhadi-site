---
title: "Project-Managing a Validation: Planning, Resourcing, and Delivering CSV and Qualification on Time"
description: "How to run a CSV or equipment qualification project end to end: building the plan, setting RACI and stage gates, coordinating vendors, controlling scope, and hitting the date without cutting quality corners."
pubDate: 2026-06-20
tags: ["csv", "validation", "project-management", "qualification", "raci", "vendor-management"]
pillar: "csv-csa"
tier: "Intermediate"
---

Most validation projects do not fail on the science. They fail on coordination. The protocol was technically fine, but the test instruments were not calibrated when the team showed up to execute. The vendor delivered the system three weeks late, so user acceptance testing collapsed into a single panicked week. QA reviewed the summary report the day before go-live and found a deviation nobody had dispositioned. The data integrity controls were never specified, so they were never tested, and the inspector found that out two years later.

Project-managing a validation is the discipline that prevents all of that. It is the skill that separates a validation lead from a validation author. Anyone can write a protocol. Far fewer people can take a system from a signed user requirement to a released, inspection-ready state across a dozen contributors, two vendors, a fixed business date, and a QA function that will not bend on the deliverables. This is a leadership skill, and hiring managers know it, which is why it shows up in interviews disguised as "tell me about a time a validation slipped and what you did."

This article walks the full project lifecycle: how to plan it, who does what, how to gate it, how to manage the vendor, how to keep scope from eating your timeline, and how to land the deliverables QA will actually sign. It assumes you already know what a URS, IQ, OQ, and PQ are. If you do not, start with the [validation deliverables guide](/articles/validation-deliverables-guide) and the [process validation lifecycle](/articles/process-validation-lifecycle), then come back.

---

## What "project-managing a validation" actually means

A validation project has three things a generic IT project does not: a regulatory obligation to demonstrate fitness for intended use, a documentation trail that must survive inspection years later, and a QA gatekeeper who can stop the whole thing at any approval. Your job as the lead is to deliver the validated state on the committed date while keeping all three intact.

The regulatory anchor for computerized systems is GAMP 5 Second Edition (ISPE, 2022), which frames validation as a risk-based lifecycle, not a fixed checklist. For the US legal basis you are satisfying 21 CFR Part 11 (electronic records and signatures) and the predicate-rule requirements under 21 CFR 210/211 for drugs or 21 CFR 820 (now harmonizing to the QMSR under 21 CFR Part 820 as amended, effective February 2026) for devices. In the EU, EU GMP Annex 11 (Computerised Systems) is the parallel expectation, and EU GMP Annex 15 (Qualification and Validation) governs equipment and facility qualification. For equipment-heavy projects, ASTM E2500-13 gives you the science- and risk-based commissioning and qualification model that lets you compress effort onto what matters. The FDA's 2022 draft guidance on Computer Software Assurance (CSA) pushes the same idea further: spend test effort proportional to risk, accept unscripted and exploratory testing for low-risk function, and stop documenting low-value evidence.

None of those documents tells you how to run the project. They tell you what the finished record must show. The project management sits in the gap between the two, and that gap is where deadlines die.

A simple way to hold the whole thing in your head: every validation project is a chain of approved documents, each one a gate, with execution work between the gates and a QA signature on each. Your plan is the schedule of those gates plus the resources to clear each one. Lose sight of a gate and you lose the date.

---

## Phase 0: Initiation and the validation plan

Before any protocol is written, you need a plan that names the system, scopes the effort, and commits the deliverables. For a computerized system this is the Validation Plan (sometimes called a CSV Plan or Validation Project Plan). It is the project-level document that sits beneath the site [validation master plan](/articles/validation-master-plan-and-periodic-review) and governs this one system.

### Why it is required

Annex 11 clause 4.1 requires that validation documentation and reports cover the relevant lifecycle steps, and GAMP 5 expects a planned, documented, risk-based approach. The Validation Plan is the evidence that you decided the approach up front rather than reverse-engineering it after execution. Inspectors read the plan first because it tells them if you knew what you were doing before you started. A plan written after the fact is a finding waiting to happen, and the dates on the approvals will give it away.

### What goes in it

| Section | Content |
|---|---|
| System description | What the system is, what it does, GxP processes it supports |
| GxP assessment | Is it GxP? Which predicate rules apply? Part 11 applicability |
| GAMP software category | Cat 1 (infrastructure), Cat 3 (non-configured COTS), Cat 4 (configured), Cat 5 (custom) |
| Risk approach | How risk drives test rigor; reference to the [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology) |
| Deliverables list | URS, FRS/config spec, risk assessment, IQ, OQ, PQ/UAT, traceability matrix, summary report |
| Roles and responsibilities | RACI by deliverable (see below) |
| Acceptance and release criteria | What conditions must be met to declare the system validated |
| Test strategy | Scripted vs unscripted, reusing vendor documentation, CSA approach |
| Deviation handling | How test failures and deviations are managed and dispositioned |
| Assumptions, exclusions, dependencies | What is in scope, what is explicitly not, what you depend on |

The GAMP category drives everything downstream. A Category 3 system (used as supplied, no configuration) gets a thin URS and heavy reliance on supplier testing. A Category 4 configured product (a configured LIMS or a configured electronic batch record system) needs configuration specification and verification of those configured items. A Category 5 custom application needs design review, code-level controls, and the most testing. Get the category wrong and you either over-validate a simple system or under-validate a complex one, and the second mistake is the one that ends in a 483.

### How to do it: the initiation sequence

1. Confirm GxP impact and Part 11 applicability. If it is not GxP, you exit here with a documented rationale. Do not validate what does not need validating; that is wasted budget and it dilutes attention from the systems that matter.
2. Assign the GAMP category. Default to the lowest defensible category and justify any move up.
3. Draft the deliverables list from the category. This is your work breakdown structure.
4. Identify the system owner, process owner, QA approver, and SMEs. No plan approves without an owner who will sign for the system in production.
5. Set acceptance criteria for release at the project level (not test level), so everyone knows what "done" means before they start.
6. Route for approval. The Validation Plan is typically approved by the system owner, the validation lead, and QA at minimum.

### Acceptance criteria for a good plan

The plan is good when a reviewer who has never seen the system can read it and predict the entire document set, the test depth, and who signs what. If the deliverables list does not reconcile to the GAMP category, or if "QA approval" appears nowhere in the RACI, the plan is not ready.

---

## RACI: who does what, and why the lead does not own everything

RACI (Responsible, Accountable, Consulted, Informed) is the single most useful artifact for keeping a validation moving, because most slips come from someone assuming someone else owned a task. Defined per deliverable, it removes that ambiguity.

The four roles, stated plainly:

- **Responsible**: does the work. Can be many people.
- **Accountable**: owns the outcome and signs for it. Exactly one per deliverable. This is the failure mode if you get it wrong; two accountable parties means none.
- **Consulted**: provides input before the work is done. Two-way.
- **Informed**: told after the fact. One-way.

### Worked RACI for a configured system (GAMP Category 4)

| Deliverable | Validation Lead | System Owner | QA | SME / Business | Vendor | IT/Infra |
|---|---|---|---|---|---|---|
| Validation Plan | R | A | C | C | I | I |
| User Requirements (URS) | C | A | C | R | I | C |
| Functional / Config spec | C | A | I | C | R | C |
| Risk assessment | R | A | C | C | C | C |
| IQ protocol | R | A | C | I | C | R |
| IQ execution | R | I | C | I | C | R |
| OQ protocol | R | A | C | C | C | I |
| OQ execution | R | C | C | C | C | I |
| PQ / UAT protocol | C | A | C | R | I | I |
| PQ / UAT execution | C | I | C | R | I | I |
| Traceability matrix | R | A | C | C | I | I |
| Deviation disposition | C | C | A | C | C | I |
| Validation Summary Report | R | A | A | I | I | I |

Note what this tells you. The business SME owns user requirements and PQ because only the user knows what "fit for intended use" means. The vendor is Responsible for the configuration specification because they built the configuration, but the system owner is still Accountable, you cannot outsource accountability. QA is Accountable for deviation disposition and co-approves the summary report. The validation lead is Responsible for most protocols and the traceability, but Accountable for almost nothing, which is correct: the lead drives the work, the owner and QA own the outcome.

A common interview question is "who owns the URS?" The weak answer is "the validation team." The strong answer is "the process or system owner is accountable, the users and SMEs author it, validation and QA review, because requirements are a business statement of intended use, not a validation artifact." Read [user requirements and traceability](/articles/user-requirements-and-traceability) for why that ownership matters to the whole chain.

### Roles you must name on every project

- **Project sponsor / business owner**: holds the budget and the business date. Escalate scope and timeline tradeoffs here.
- **System owner**: accountable for the system in production, including its validated state and periodic review.
- **Process owner**: accountable for the business process the system serves; often the same person as system owner on smaller systems.
- **Validation lead**: drives the plan, protocols, schedule, and report. The project manager of the validation.
- **QA**: independent approval of deliverables, deviations, and release. QA does not execute tests; QA approves. Keep that line clean.
- **SMEs**: provide requirements, review protocols for technical correctness, witness or perform PQ.
- **Vendor / supplier**: delivers software, configuration, and supporting test documentation you may reuse as evidence.

---

## Phase 1: Building the schedule and the critical path

A validation schedule is not a list of tasks with dates. It is a dependency network with a critical path, and the critical path runs through your gates and your test environment.

### The hard dependencies that always exist

1. You cannot write an OQ protocol until the functional/configuration specification is approved (you test against the spec).
2. You cannot execute IQ until the environment is installed and the test instruments are calibrated.
3. You cannot execute OQ until IQ passes (the system has to be correctly installed before you test that it works).
4. You cannot execute PQ/UAT until OQ passes and trained users and real or representative data are available.
5. You cannot write the summary report until every deviation is dispositioned and the traceability matrix is complete.
6. You cannot release until QA approves the summary report.

These dependencies are sequential and they are non-negotiable, which means they define your minimum project duration. The frequent mistake is planning OQ and PQ to overlap to save time, then discovering an OQ failure that invalidates the PQ runs you already executed against the broken function. You rework both. Plan the gates sequentially and protect the buffer.

### Worked timeline (configured LIMS, 12-week target)

| Week | Milestone | Gate |
|---|---|---|
| 1-2 | Validation Plan approved; URS finalized | Plan + URS signed |
| 2-3 | Risk assessment complete; FRS/config spec approved | Spec signed |
| 3-5 | IQ/OQ protocols drafted and approved | Protocols signed (QA) |
| 4 | Environment built; instruments calibrated; vendor delivery accepted | Readiness gate |
| 5-6 | IQ execution | IQ passed, deviations dispositioned |
| 6-8 | OQ execution | OQ passed, deviations dispositioned |
| 8 | Users trained; PQ/UAT protocol approved | Training records complete |
| 9-10 | PQ / UAT execution | PQ passed |
| 11 | Traceability matrix reconciled; deviations closed | Trace 100% |
| 12 | Validation Summary Report approved; release | Released (QA) |

The two milestones people skip are week 4 (readiness) and week 11 (traceability reconciliation), and those are exactly the two that sink the date. Readiness is where calibration, training prerequisites, and vendor delivery either line up or do not. Traceability reconciliation is where you discover a requirement that was never tested, which forces a new test in the last week. Put both on the critical path explicitly.

### Estimating effort honestly

Validation execution time is dominated by two things: the number of test cases and the deviation rate. A useful planning rule is that real execution takes longer than the protocol's nominal duration because some fraction of tests fail and generate deviations, each of which costs investigation and retest time. If you have history, use your site's actual deviation rate. If you do not, assume a meaningful fraction of test steps will generate a deviation on a configured system and build that into the schedule rather than pretending every test passes first time. A plan with zero deviation contingency is a plan that will slip, and an experienced QA reviewer will not believe a project that reports zero deviations across a large test set; it reads as untested, not perfect.

---

## Phase 2: Stage gates and how to run them

A stage gate is a checkpoint where you stop, verify a defined set of conditions, and get an explicit decision to proceed before the next phase consumes resources. Gates are how you avoid the expensive failure of executing PQ on a system that should never have passed OQ.

### The standard gates

| Gate | Entry criteria | Approvers | What it protects against |
|---|---|---|---|
| Plan approved | GxP and category confirmed, deliverables defined | Owner, Validation, QA | Starting work with no agreed scope |
| Specs approved | URS and FRS/config baselined, risk assessment done | Owner, SME, QA | Testing against a moving target |
| Test readiness | Environment built, instruments calibrated, protocols approved, testers trained | Validation lead, QA | Executing with bad prerequisites |
| IQ to OQ | IQ passed, IQ deviations dispositioned | Validation lead | Testing function on a wrong install |
| OQ to PQ | OQ passed, OQ deviations dispositioned, users trained | Validation lead, QA | Wasting PQ effort on broken function |
| Release | PQ passed, all deviations closed, traceability complete, report approved | Owner, QA | Go-live of an unvalidated system |

### How to run a gate meeting

Keep it short and evidence-based. Walk the entry criteria one at a time, point to the objective evidence for each (the calibration certificate, the signed protocol, the deviation log), and record the proceed or hold decision with names and date. Do not let a gate become a status meeting; it is a decision with a documented outcome. If a criterion is not met, the only honest options are hold, or proceed with a documented, risk-assessed conditional approval that names the open item and its owner and due date. "Proceed and we'll fix it later" with nothing written down is how open items become inspection findings.

### The test readiness gate deserves special attention

More projects slip here than anywhere else. The readiness gate confirms, before anyone touches a keyboard to execute:

- The qualified environment exists and matches the IQ assumptions.
- Every test instrument (the calibrated thermometer, the reference standard, the network analyzer) is in calibration and will remain so through the execution window. An expired calibration mid-execution voids every test that relied on that instrument.
- The protocols are approved, with pre-approved acceptance criteria. You never write acceptance criteria after seeing the result.
- Testers are trained on the protocol and the system, and that training is documented. An inspector will check the executor's training record against the execution date.
- Test data, including any challenge or negative-test data, is prepared.

Run this gate as a literal checklist and refuse to start execution until it is green. The cross-link here is [factory and site acceptance testing](/articles/factory-site-acceptance-testing), because FAT and SAT are where you can pull defects forward before they cost you on the critical path.

---

## Phase 3: Vendor and supplier coordination

On most modern projects the system is built by a vendor, configured by a vendor, or both, which means a large part of your timeline and your evidence sits outside your direct control. Managing that is half the job.

### Supplier assessment comes first

Before you commit to reusing a vendor's test documentation, you assess them. This is required by GAMP 5 and expected under Annex 11 clause 3.2, which states that competence and reliability of a supplier are key factors when selecting a product or service provider, and that the need for an audit is based on risk. The depth of assessment scales with risk and GAMP category: a questionnaire for a low-risk Category 3 product, a full on-site audit for a high-risk Category 4 or 5 system. See [software supplier assessment](/articles/software-supplier-assessment-csa) and [supplier and vendor qualification](/articles/supplier-vendor-qualification) for the mechanics.

The payoff for a good assessment is real schedule time. If you can demonstrate the supplier has a controlled, audited development and test process, you can reuse their IQ and functional testing evidence rather than re-testing from scratch, which is exactly what GAMP 5 and the CSA guidance encourage. You do not blindly accept it; you review it, map it to your requirements, and test the gaps and the high-risk function yourself. But you stop re-proving what a qualified supplier already proved.

### Quality agreements set the contract

For any vendor providing GxP-relevant deliverables, a quality or technical agreement defines who is responsible for what: documentation deliverables and their format, defect handling and timelines, change notification, access for audits, support for inspections, and data ownership. The single most damaging vendor surprise is discovering, mid-project, that the test documentation you planned to reuse is proprietary and will not be released, or arrives in a form QA will not accept. Nail the deliverable list and format in the agreement up front. The [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements) article covers the agreement structure in depth.

### The coordination tactics that keep vendors on the date

1. Put vendor deliverables on your critical path with the vendor's name against them, and review them in your gate meetings the same way you review internal work.
2. Run a joint FAT before the system ships so you accept it against your requirements, not theirs, and catch defects while they are still the vendor's problem.
3. Define the acceptance criteria for vendor delivery in writing. "Delivered" means it passed your incoming acceptance, not that a box arrived.
4. Hold a standing short vendor sync (weekly is usually right) focused only on deliverables, dates, and open defects. Status emails do not surface a slipping date fast enough.
5. Track vendor defects in one shared log with severity and target dates, and tie release to closure of the severity levels you agreed cannot ship open.

A frequent finding pattern is a system released to production with vendor configuration changes that were never put under your [change control](/articles/change-control-validated-systems) and never re-tested. The fix is to bring vendor changes into your change control from day one, including changes the vendor makes during the project, not just after go-live.

---

## Phase 4: Scope and change control during the project

Scope creep is the quiet killer. A user asks for "just one more report," a stakeholder wants an extra interface, the vendor offers a newer version mid-build. Each looks small. Together they push the date and add untested surface area.

### Why you control project scope formally

Two reasons. First, schedule: every added requirement adds specification, test design, execution, and review effort, and it adds risk of a late-discovered defect. Second, integrity of the validated state: a requirement added after the risk assessment was baselined may carry risk that was never assessed, and a function added after the test design may ship untested. Both are findings.

### How to handle a change request mid-project

1. Capture it in writing against a change/scope log. No verbal scope changes survive.
2. Assess impact: which deliverables change, how much effort, what new risk, what timeline impact.
3. Decide with the sponsor and QA. Scope tradeoffs are a sponsor decision because they cost time or money; quality tradeoffs are a QA decision and most of them are simply not available.
4. If accepted, update the affected documents (URS, spec, risk assessment, traceability) and re-baseline. A scope change that is not reflected in the requirement and trace is a change that will not get tested.
5. If deferred, log it as a documented post-go-live item with an owner, so it is a controlled backlog and not a silent gap.

### Worked example: the "minor" version bump

The vendor offers to ship the next minor release because it fixes a bug you reported. Tempting, and free. Run the assessment: the new version changes two configured screens you have already specified and partially tested, the release notes list four other changes to function you rely on, and accepting it invalidates the OQ test cases already executed against those screens. The honest impact is re-spec, re-test of the affected cases, and a one-week slip. The decision: take the bug fix as a documented defect to close post-go-live under change control, ship on the validated version, and schedule the upgrade as its own small change later. That is scope discipline. The instinct to "just take the newer one" is how a 12-week project becomes 16.

---

## Phase 5: Managing test execution and deviations

Execution is where the plan meets reality. Two things determine if you hold the date here: how you handle test failures, and how tightly you keep the evidence clean.

### Test failures are normal; handle them by the procedure

A test failure is not a project failure. It is expected, and your readiness for it is what an inspector and an interviewer both probe. When a test step does not meet its pre-approved acceptance criterion you raise a deviation, investigate the cause, classify it, and disposition it. The detailed mechanics live in [validation test failure management](/articles/validation-test-failure-management) and the broader [deviation management](/articles/deviation-management) process; the project-level point is that you must have decided, in the plan, how failures are handled before the first one happens.

The disposition options, in plain terms:

- **Test error**: the protocol or the tester was wrong, the system is fine. Correct the protocol under control, re-execute. Never just cross it out and pass it.
- **System defect, fix and retest**: real defect, fixed (under change control), re-tested. The most common.
- **Acceptable with rationale**: the result deviates from expectation but is acceptable for intended use, justified and approved. Use sparingly; over-use of this disposition is a red flag a reviewer will pull on.
- **Defer**: a low-risk defect that does not affect fitness for use, documented as a known limitation with a risk rationale and, ideally, a fix plan.

### Keep the evidence inspection-clean during execution

This is where good documentation practice (GDP) is non-negotiable. Every executed step records the actual result, the pass/fail, the executor, and the date, contemporaneously. Corrections follow the [good documentation practices](/articles/good-documentation-practices) rules: single line through, initial, date, reason, original still legible, never obscured. Screenshots and printouts are attributed and dated. The data integrity expectations of ALCOA+ apply to validation records exactly as they apply to GMP records, see [ALCOA+ in detail](/articles/alcoa-plus-deep-dive). The reason this is a project management concern and not just an execution detail: cleaning up sloppy execution records after the fact is slow, it erodes QA's trust, and in the worst case it forces re-execution. Set the documentation standard at the readiness gate and spot-check it daily during execution, not at the end.

A specific data integrity point that gets missed in project planning: the validation must actually test the Part 11 controls (audit trail capture and review, access control, electronic signature manifestations, time stamps). These have to appear as requirements in the URS so they flow into the test design. If "audit trail records the old and new value, user, and time stamp" is not a requirement, it will not be tested, and the inspector who later asks "show me where you verified the audit trail" will get silence. Build the [audit trail design and review](/articles/audit-trail-design-and-review) and [electronic signatures implementation](/articles/electronic-signatures-implementation) requirements in from the start.

---

## Phase 6: Traceability and closing the loop

The traceability matrix is the spine of the whole project, and reconciling it is the last gate before the report. It maps every user requirement to its specification, to its risk rating, to the test case(s) that verify it, to the test result.

### Why it is required and what it proves

Traceability is the objective evidence that every requirement was tested and every test traces to a requirement. GAMP 5 and Annex 11 both expect demonstrable coverage of requirements. The matrix answers the single question an inspector asks more than any other about CSV: "show me that what you said the system must do was actually verified." Without it you are asserting coverage; with it you are demonstrating it.

### Worked traceability snippet

| Req ID | Requirement | Risk | Spec ref | Test ID | Result |
|---|---|---|---|---|---|
| URS-012 | System shall enforce unique user IDs | High | FRS-4.2 | OQ-018 | Pass |
| URS-013 | Audit trail shall capture old value, new value, user, timestamp | High | FRS-7.1 | OQ-031 | Pass (Dev-04 closed) |
| URS-014 | Result entry shall require second-person electronic signature | High | FRS-5.3 | OQ-024 | Pass |
| URS-027 | System shall export results in CSV for the LIMS interface | Medium | FRS-9.4 | PQ-007 | Pass |
| URS-031 | Reports shall display site logo | Low | FRS-11.2 | OQ-050 | Pass |

When you reconcile, you look for three failures: a requirement with no test (a coverage gap, the dangerous one), a test with no requirement (orphan test, scope you may not have intended), and a high-risk requirement verified by a single weak test (insufficient rigor for the risk). Resolve all three before the report. The 100% reconciliation is a hard gate, not a nice-to-have. See [user requirements and traceability](/articles/user-requirements-and-traceability) for building the matrix correctly from the start so reconciliation at the end is fast.

---

## Phase 7: The summary report and release

The Validation Summary Report (VSR) is the project's closing argument. It states what was validated, summarizes the results, lists every deviation and its disposition, lists any residual risks or restrictions, and concludes that the system is fit for intended use and authorized for GxP use.

### What goes in it

| Section | Content |
|---|---|
| Scope and references | System, version, what was validated, links to plan and protocols |
| Summary of execution | What was executed, pass rates, environments |
| Deviation summary | Every deviation, classification, disposition, status (all must be closed) |
| Residual risk / restrictions | Any open low-risk items, operating restrictions, known limitations |
| Traceability conclusion | Confirmation of 100% requirement coverage |
| Conclusion | Statement of fitness for intended use, release authorization |
| Approvals | Owner and QA signatures |

### Acceptance criteria for release

The report is releasable when: every deviation is closed (not open, not pending), traceability is reconciled to 100%, all training records for executors are in place, any residual items are risk-assessed and accepted in writing by QA, and the conclusion explicitly authorizes GxP use. QA's signature on the VSR is the release. Do not let go-live precede that signature; an inspector who finds the system was in GxP use before the VSR was approved has found use of an unvalidated system, which is among the more serious CSV findings. The downstream handoff is covered in [validation summary report and release](/articles/validation-summary-report-and-release) and the system then enters its operational life under [change control](/articles/change-control-validated-systems) and periodic review per the [validation master plan](/articles/validation-master-plan-and-periodic-review).

---

## Common mistakes and real inspection-finding patterns

These are the patterns that show up in inspection observations and warning letters for computerized systems and qualification, stated generically.

- **Validation performed retrospectively or in parallel with use.** Approval dates on the plan or protocols that postdate the start of GxP use. The system was running before it was validated. This is one of the most cited CSV-related patterns.
- **No documented requirements, so testing has nothing to verify against.** Tests exist but trace to nothing, or critical function is untested because it was never a requirement. Audit trail and electronic signature controls are the classic untested-because-unspecified function.
- **Test failures resolved without investigation.** Failed steps overwritten or re-executed with no deviation, no rationale, no record of what changed. This reads as data integrity failure, not just sloppy testing.
- **Acceptance criteria written or changed after seeing the result.** The single clearest sign that testing was not objective. Pre-approve every acceptance criterion.
- **Deviations open at release.** The summary report concludes fitness for use while deviations are still unresolved. The conclusion is not supportable.
- **Vendor documentation reused without assessment.** Supplier IQ/OQ accepted with no supplier qualification, no review, no gap testing. You inherited their unknown quality.
- **Configuration or version changed during the project outside change control.** The validated configuration is not the one that was tested.
- **No traceability, so coverage cannot be demonstrated.** The inspector asks to see a requirement verified and you cannot show the path from requirement to result.
- **Training records do not support the executor.** The person who executed the protocol has no record of training on the system or the protocol as of the execution date.
- **Scope quietly expanded.** Function in production that was never in the validated scope because it was added mid-project without re-baselining the requirements and risk assessment.

---

## Interview-ready: the questions and how to answer them

Hiring for a validation lead role tests project judgment, not protocol-writing. Here is what gets asked and what a strong answer sounds like.

**"Walk me through how you would plan a validation for a new configured LIMS with a fixed go-live date."**
Start with GxP and Part 11 confirmation, assign the GAMP category (Category 4, configured), then build the deliverables list from the category. Lay out the gate sequence, plan, specs, readiness, IQ, OQ, PQ, report, and identify the critical path through specification approval and the test environment. Name the readiness gate and the traceability reconciliation as the two places I protect buffer. Set RACI by deliverable, with the business owner accountable for the URS and PQ and QA accountable for deviation disposition and release. Build deviation contingency into the schedule rather than assuming everything passes.

**"A test fails during OQ. What do you do?"**
Raise a deviation per the pre-agreed procedure, investigate the cause, classify it (test error, system defect, acceptable with rationale, or defer), and disposition it with QA. If it is a system defect, fix under change control and re-test; if it is a test error, correct the protocol under control and re-execute; never overwrite the failed result. The point I make is that failures are expected and the process for handling them is defined in the plan before execution starts.

**"You are two weeks from go-live and the vendor says they will slip delivery by three weeks. What do you do?"**
Quantify the critical-path impact first, the slip likely cascades through IQ, OQ, and PQ. Then go to the sponsor and QA with options, not just the problem: descope to a minimum validated state for go-live with the rest as a controlled phase-two, partially reuse what is already delivered, or move the date. I do not silently compress testing to absorb the slip, because compressed testing is how you ship untested function. The decision on date versus scope belongs to the sponsor; the decision on what quality is non-negotiable belongs to QA.

**"How do you decide how much testing is enough?"**
Risk drives rigor. Per GAMP 5 and the FDA's CSA guidance, high-risk function gets scripted, thorough verification; low-risk function can use unscripted or exploratory testing or rely on supplier evidence. I assess each requirement's risk in the risk assessment, then design test depth to match, and I prove the coverage with the traceability matrix. Over-testing low-risk function wastes the budget that high-risk function needs.

**"Who owns the user requirements?"**
The process or system owner is accountable; the users and SMEs author them; validation and QA review. Requirements are a business statement of intended use, not a validation deliverable, and that ownership is what makes the whole traceability chain meaningful.

**"How do you know the system is ready to release?"**
Every deviation closed, traceability reconciled to 100%, residual risks assessed and accepted by QA in writing, executor training records in place, and the summary report approved by the owner and QA. The QA signature on the VSR is the release, and GxP use does not start before it.

**"Tell me about a validation that slipped and what you did."**
Have a real, specific story ready. Name the root cause (usually a missed dependency: late calibration, a vendor delivery, a late-found coverage gap), what you changed (added a readiness gate, brought vendor deliverables onto the critical path, built deviation contingency into estimates), and the measurable result. Interviewers want evidence you learned a repeatable lesson, not that you worked a weekend.

---

## Practical tips

- Default to the lowest defensible GAMP category and justify any move up. Over-categorizing burns budget you will want elsewhere.
- Put the two soft milestones (test readiness, traceability reconciliation) on the critical path as hard gates. They are where the date is actually won or lost.
- Write acceptance criteria into the protocol and approve them before execution. Always. No exceptions.
- Get the quality agreement deliverable list and format nailed before the vendor starts, not when their documentation arrives.
- Run a joint FAT to pull vendor defects forward while they are still the vendor's cost.
- Keep one shared deviation/defect log and review it in every gate. A defect nobody is tracking is a defect that ships.
- Build deviation contingency into your estimate. A plan that assumes zero failures is not credible and will slip.
- Bring vendor changes into your change control from day one, including changes made during the project.
- Specify the Part 11 controls (audit trail, e-signatures, access control, time stamps) as requirements so they get tested. Untested controls are the classic CSV finding.
- Reconcile traceability to 100% before you write the report, and resolve every gap, orphan, and under-tested high-risk requirement.
- Do not let go-live precede the QA signature on the summary report.

---

## Related reading

- [Validation deliverables guide](/articles/validation-deliverables-guide)
- [Validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review)
- [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology)
- [GAMP 5 CSV framework](/articles/gamp5-csv-framework)
- [Computer software assurance (FDA)](/articles/computer-software-assurance-fda)
- [User requirements and traceability](/articles/user-requirements-and-traceability)
- [Writing validation protocols and reports](/articles/writing-validation-protocols-and-reports)
- [Validation test failure management](/articles/validation-test-failure-management)
- [Validation summary report and release](/articles/validation-summary-report-and-release)
- [Software supplier assessment (CSA)](/articles/software-supplier-assessment-csa)
- [Supplier and vendor qualification](/articles/supplier-vendor-qualification)
- [Change control for validated systems](/articles/change-control-validated-systems)
- [Equipment qualification lifecycle](/articles/equipment-qualification-lifecycle)
- [Commissioning and qualification (ASTM E2500)](/articles/commissioning-qualification-astm-e2500)
- [Factory and site acceptance testing](/articles/factory-site-acceptance-testing)
