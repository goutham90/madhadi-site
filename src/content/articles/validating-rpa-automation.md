---
title: "Validating RPA and Workflow Automation in Quality Operations"
description: "How to validate robotic process automation and workflow bots that touch GxP records, with a risk-based approach that fits modern CSA thinking rather than treating a bot like a monolithic application."
pubDate: 2026-06-20
tags: ["rpa", "automation", "csv", "csa", "data-integrity", "part-11", "quality-operations", "validation"]
pillar: "ai-automation"
tier: "Intermediate"
---

Robotic process automation (RPA) shows up in quality operations the moment someone gets tired of copying data between two systems that will never have a real interface. A bot logs into a LIMS, reads a result, types it into a stability tracker, attaches a PDF to a document management system, and emails a reviewer. None of that is hard to build. All of it can break data integrity if you treat the bot the way you would treat a desktop macro nobody validated.

This page covers how to validate RPA and configurable workflow automation that touches GxP records: what the regulatory basis actually is, what deliverables you produce, how to scope effort by risk, what good acceptance criteria look like, and the inspection findings that show up when teams skip steps. The mental model that works is this: the bot is not the system of record. It is an automated user. You validate what it does to records, not the bot as a sealed black box.

---

## What RPA is, and why it needs a different validation lens

RPA is software that mimics a human operator at the user-interface layer. Instead of integrating two systems through an API or a database link, an RPA bot drives the same screens a person would: it clicks buttons, reads fields, copies values, and moves data between applications. Common platforms in this category include UiPath, Automation Anywhere, Microsoft Power Automate, and Blue Prism. Workflow automation tools (form-driven routing, approvals, conditional logic builders) sit next to RPA and raise the same questions, so this page treats them together.

Three properties make RPA different from a traditional validated application and force a different validation approach.

**It operates at the UI layer, so it is brittle.** A field that moves, a pop-up that appears, a screen resolution change, or a vendor patch to the underlying application can silently break the bot or, worse, make it act on the wrong field. Traditional CSV assumes a relatively stable application. RPA assumes the opposite: the surfaces it touches change underneath it.

**It usually spans multiple systems.** A single bot may read from a chromatography data system, transform a value, and write to a spreadsheet and an ERP. That means the validation boundary is not one application. It is a transaction that crosses several validated and sometimes unvalidated systems.

**It runs unattended.** A human transcriber makes errors but also notices when something looks wrong. An unattended bot will happily transcribe a result into the wrong batch a thousand times before anyone catches it. The control you lose is human judgment in the loop; the control you must add is detection and exception handling.

Because of these properties, the question is never "is the RPA tool validated." The platform is infrastructure. The question is "is this specific automation, doing this specific task, on these specific records, fit for its intended use, and can we detect when it fails."

---

## The regulatory basis

There is no regulation titled "RPA validation." You assemble the obligation from existing GxP computerized-system and data-integrity expectations. Know these and be able to map each to a concrete control.

**21 CFR Part 11 (Electronic Records; Electronic Signatures).** If the bot creates, modifies, deletes, or transfers electronic records that are GxP records, Part 11 applies to those records. The relevant clauses for RPA: §11.10(a) validation of systems to ensure accuracy, reliability, and consistent intended performance; §11.10(b) the ability to generate accurate and complete copies; §11.10(d) limiting system access to authorized individuals; §11.10(e) secure, computer-generated, time-stamped audit trails; and §11.10(g)/(h) authority and device checks. A bot is an authorized individual in the sense that it acts under credentials. That has consequences for access control and audit trails covered below.

**EU GMP Annex 11 (Computerised Systems).** Annex 11 is the European counterpart and is in some respects more explicit for RPA. Clause 5 (Data) requires that data transfers between systems include built-in checks for the correct and secure entry and processing of data. That clause is the direct hook for the verification controls every RPA transcription bot needs. Clause 1 requires risk management across the lifecycle, clause 4 covers validation, clause 6 covers accuracy checks for critical data entered manually, clause 7 covers data storage, and clause 12 covers security and access.

**FDA guidance, Computer Software Assurance for Production and Quality System Software (final, September 2025).** This is the guidance that makes a risk-based, least-burden approach to RPA defensible. CSA tells you to spend effort proportional to the risk the software poses to product quality and patient safety, to favor unscripted and exploratory testing where appropriate, and to record evidence in proportion to risk rather than generating documentation for its own sake. RPA is a textbook CSA candidate because much of it is low-to-medium risk plumbing where heavy scripted protocols add cost without adding assurance.

**GAMP 5 Second Edition (ISPE, 2022).** GAMP 5 gives you the software category model and the critical-thinking framing. Most RPA automations are configured or, where you write custom selectors and code, custom logic on top of a configurable platform (think GAMP categories 4 and 5). GAMP 5 Second Edition explicitly endorses critical thinking, reliance on supplier activities, and scaling rigor to risk, which aligns with CSA.

**ALCOA+ and the data-integrity guidances.** MHRA's "GXP Data Integrity Guidance and Definitions" (March 2018) and FDA's "Data Integrity and Compliance With Drug CGMP" (December 2018) frame what the records the bot touches must remain: attributable, legible, contemporaneous, original, accurate, plus complete, consistent, enduring, and available. The bot must not break any of these. The two that RPA threatens most are attributable (who really did this, the bot or a person) and accurate (did the value survive the hop intact).

Put plainly: Part 11 and Annex 11 say the records must stay controlled, CSA and GAMP 5 tell you how much effort to spend proving it, and ALCOA+ is the yardstick for the records themselves.

---

## Decide whether the automation is in scope, and at what risk level

Not every bot is a GxP system. The first deliverable is a documented determination. Do this before you write a single test.

### Step 1: GxP determination

Ask whether the records the automation creates, modifies, deletes, or moves are used to make a GxP decision (release, stability conclusion, deviation closure, submission content, complaint trending). If yes, it is in scope. If the bot only moves non-GxP administrative data (booking a meeting room, generating a non-quality metrics chart for an internal dashboard with no GxP use), document the rationale and stop. Write the determination down; "we decided it was not GxP" with no record is itself a finding waiting to happen.

### Step 2: Intended use statement

Write one or two sentences that state exactly what the automation does and the boundary of its action. Vague intended-use statements produce vague validation. Compare:

- Weak: "The bot helps with stability data."
- Strong: "The bot reads the final reportable assay result and its result status from the LIMS sample record, and writes both values, unchanged, into the corresponding row of the stability summary register. It performs no calculation, rounding, or interpretation. A qualified analyst reviews every written row against the LIMS source before the register is used for any decision."

The strong version tells you precisely what to test and what risk you carry.

### Step 3: Risk assessment

Score the automation on impact and detectability. A simple, defensible matrix:

| Factor | Low | Medium | High |
|---|---|---|---|
| Record criticality | Indirect / supporting | Influences a GxP decision | Directly determines release or safety decision |
| Bot action | Read and display only | Move data unchanged | Calculate, decide, transform, or delete |
| Human review of output | Every transaction reviewed before use | Sampled review | No human review (fully unattended, acted on automatically) |
| Detectability if wrong | Error is obvious and caught downstream | Error caught by periodic check | Error is silent and propagates |

The combination drives rigor. A read-only bot that populates a screen a human then fully verifies is low risk and gets light testing. An unattended bot that calculates a value and writes it to a record nobody re-checks before release is high risk and gets full scripted verification, boundary testing, and strong exception handling. Document the score and the resulting test strategy. This risk assessment is your CSA "assurance needs" decision and it is the document an inspector will read first.

Cross-reference the dedicated method here: see [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology) and [data criticality and data risk](/articles/data-criticality-and-data-risk).

---

## What goes in the validation package

For an in-scope RPA automation, the deliverable set mirrors a small CSV package but is sized to the risk. A medium-risk bot typically needs the following. Lower risk drops items; higher risk expands them.

| Deliverable | Purpose | Notes for RPA |
|---|---|---|
| Validation plan or assurance plan | States scope, risk level, approach, deliverables, roles | Can be a section in a broader plan for a fleet of bots |
| Intended use / process description | What the bot does and its boundary | The single most important document |
| Risk assessment | Justifies the level of effort | The CSA decision record |
| User requirements (URS) | What the bot must do and must not do | Keep it testable; include negative requirements |
| Configuration / design specification | The bot's logic, selectors, decision points, exception handling | The "as-built" of the workflow |
| Traceability matrix | Requirements to tests | Proves coverage |
| Test protocol(s) and results | Evidence the bot meets requirements | Mix of scripted and unscripted per CSA |
| Supplier assessment | Reliance on the platform vendor's own controls | Done once for the platform, reused across bots |
| Release / summary report | Conclusion and approval to use | States residual risk and conditions of use |
| Procedures: change control, periodic review, incident handling | Keep it validated over its life | RPA changes often; this matters more than for static apps |

Two of these deserve extra attention because RPA gets them wrong most often: the configuration specification and the supplier assessment.

The **configuration specification** must capture how the bot finds each field it touches. RPA tools identify UI elements through selectors (attribute paths, image matching, coordinates, or accessibility identifiers). A bot built on screen coordinates or fragile image matching is a future false-result generator. Document the selector strategy so a reviewer can judge how stable it is and so the next person can maintain it.

The **supplier assessment** is done once for the platform vendor (their development lifecycle, their patch and security practices, their support). You do not re-audit UiPath for every bot. You assess the platform once and reuse it, which is exactly the supplier-reliance principle GAMP 5 endorses. See [software supplier assessment (CSA)](/articles/software-supplier-assessment-csa) and [supplier and vendor qualification](/articles/supplier-vendor-qualification).

For the broader deliverable map, see [validation deliverables guide](/articles/validation-deliverables-guide) and [GAMP 5 CSV framework](/articles/gamp5-csv-framework).

---

## Requirements: write the negatives, not just the positives

The URS for a bot is short but has a feature most URS documents lack: explicit negative requirements and exception behavior. Inspectors and good reviewers look for these because they reveal whether you thought about failure.

A usable RPA requirement set has four blocks.

**Functional requirements.** What the bot reads, transforms (if anything), and writes, and where. Each must be testable. Example: "The bot shall write the reportable result exactly as displayed in the LIMS source field, with no rounding or reformatting."

**Negative requirements.** What the bot must not do. Example: "The bot shall not modify any LIMS source record." "The bot shall not proceed if the source field is blank, but shall instead halt and raise an exception."

**Exception and error handling.** What happens when the bot meets a state it cannot handle: a missing record, a login failure, an unexpected pop-up, a value that fails a format check, a target system that is down. The required behavior is almost always "stop, do not guess, log the exception, and route it to a human." A bot that swallows errors silently is the single biggest data-integrity risk in RPA.

**Data verification requirements.** This is the Annex 11 clause 5 hook. For any data transfer, require a built-in check that the written value equals the source value. Read-back verification (write, then read the target field and compare to source, fail if mismatch) is the standard control and turns a transcription bot from "trust me" into "self-checking."

Trace every requirement to a test in the matrix. See [user requirements and traceability](/articles/user-requirements-and-traceability).

---

## Testing: scale it with CSA, but never skip the data-integrity checks

CSA lets you choose the lightest method that gives genuine assurance. For RPA, the practical split is:

- **Unscripted / exploratory testing** for lower-risk, lower-impact behavior and for the happy path on a medium-risk bot. Run the bot on representative inputs, observe, and record evidence (screenshots, output files, a short test note). You do not need a 40-step scripted protocol to confirm a low-risk bot moved three fields correctly.
- **Scripted testing** for high-risk logic, calculations, decision branches, and anything that directly determines a GxP decision. Here you want pre-approved steps, defined expected results, and recorded actual results.
- **Limited / stress testing** that is specific to RPA and must not be skipped regardless of risk band, because it targets the failure modes RPA is prone to.

The RPA-specific tests that earn their keep:

| Test type | What you do | Why it matters |
|---|---|---|
| Happy-path accuracy | Run real, representative records end to end; compare every written value to source | Proves core function |
| Boundary / format | Feed edge values: blank, max length, special characters, unexpected decimal formats, leading zeros, dates near boundaries | RPA mis-handles formatting silently |
| Exception handling | Force failures: source down, target locked, missing field, unexpected pop-up, login expiry | Confirms the bot stops rather than guessing |
| Read-back verification | Confirm the built-in compare actually fails on a deliberate mismatch | A check you never tested failing is not a control |
| Concurrency / volume | Run the bot at production volume and parallelism | UI bots break under load and timing |
| Attributability | Inspect the target audit trail after a run | Confirms actions are traceable to the bot identity, not a person's name |
| Negative / must-not | Attempt to make the bot modify a source record | Confirms boundaries hold |

A worked example of a single test case in the format an auditor expects to see:

> **Test ID:** RPA-TC-007 Boundary, blank source result
> **Requirement traced:** REQ-014 (bot shall halt on blank source), REQ-009 (bot shall not write a guessed value)
> **Pre-condition:** A LIMS sample record exists with the reportable result field empty.
> **Steps:** 1) Trigger the bot against the sample. 2) Observe bot behavior. 3) Inspect the stability register row. 4) Inspect the exception queue.
> **Expected result:** Bot halts; no row written or row written with no result value; exception logged with sample ID, timestamp, and reason "source result blank"; item routed to analyst queue.
> **Actual result:** [recorded at execution]
> **Pass/Fail:** [recorded]
> **Evidence:** screenshot of exception queue entry; export of register showing no fabricated value.

For protocol mechanics and how to handle a test that fails during execution, see [writing validation protocols and reports](/articles/writing-validation-protocols-and-reports) and [validation test failure management](/articles/validation-test-failure-management).

---

## Acceptance criteria: what "done correctly" looks like

State acceptance criteria up front, in the plan, so the conclusion is not a judgment call after the fact. For an RPA automation, "good" means all of the following hold.

- Every requirement traces to at least one executed test with a recorded result.
- Happy-path accuracy is 100 percent on the executed representative dataset. A transcription bot that is "98 percent accurate" is not acceptable; the 2 percent is a wrong GxP record. Accuracy here is binary by design, which is why read-back verification exists.
- The read-back / built-in verification control was demonstrated to detect a deliberate mismatch (you proved the check works by making it fire).
- Every defined exception path was tested and the bot stopped and routed to a human rather than proceeding.
- The target-system audit trail attributes the bot's actions correctly and completely.
- No test failures remain open; any deviation during testing is investigated and closed with documented rationale.
- The residual risk stated in the summary report is accepted by QA in writing, including any conditions of use (for example, "valid only while a qualified reviewer verifies 100 percent of written rows before the register is used").

That last point matters: validation does not remove the human control if your risk assessment relied on it. If you claimed low risk because a human reviews every output, that human review is now a required, procedure-bound control, not an optional nicety.

---

## Access control, credentials, and attributability

This is where RPA most often collides with Part 11 and Annex 11, and it is a favorite inspection topic.

A bot acts under credentials. If it logs into the LIMS as "Service Account RPA01," then the LIMS audit trail attributes the writes to RPA01, which is correct and attributable. The mistakes that generate findings:

**The bot uses a real person's named account.** Now the audit trail says the analyst performed actions the analyst never performed. That destroys attributability and is a direct ALCOA+ failure. Bots get their own clearly named, non-human service accounts.

**The service account is shared or its password is in plain text in a config file or script.** Part 11 §11.10(d) and §11.300 expect controls over identity. A shared bot credential that any developer can read and use breaks the link between an action and an accountable identity. Use a credential vault (the RPA platforms provide one), restrict who can see and change it, and document it.

**The bot has more access than its task needs.** Least privilege applies to bots. A bot that only reads a result and writes one register should not have admin rights or delete permissions on the source system. Map the bot's permissions to its intended use and remove the rest.

**No segregation between who builds the bot and who approves it for GxP use.** The developer who writes the automation should not be the sole approver of its validation. QA approves; an independent reviewer checks. See [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control) and [electronic signatures implementation](/articles/electronic-signatures-implementation).

If the bot's action constitutes a signing or approval step in a GxP record, that crosses into electronic signature territory and needs deliberate design; most teams correctly keep approval decisions with humans and let the bot only prepare and route.

---

## Audit trails: two layers you must think about

RPA creates an audit-trail question with two layers, and reviewers conflate them.

**Layer one: the records the bot touches.** When the bot writes to the LIMS or the register, the target system's own audit trail must capture the change (who/bot, what, old value if applicable, new value, timestamp). This is the GxP-relevant audit trail and it must be reviewed as part of normal audit-trail review. The bot does not get to bypass the target system's controls. If a bot writes through a back door that the application audit trail does not capture, that is a serious finding.

**Layer two: the bot's own execution log.** The RPA platform logs what the bot did, when, on which items, and which exceptions occurred. This log is your evidence of consistent intended performance and your exception record. It is operationally vital (it is how you catch a bot that started misbehaving after an application update) but it is the execution evidence, not a substitute for the target system's record audit trail.

Define who reviews each, how often, and what triggers action. For a high-risk unattended bot, periodic review of the execution log (exception rates, run completeness) is a real control, not paperwork. See [audit trail design and review](/articles/audit-trail-design-and-review) and [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).

---

## Keeping it validated: change control and periodic review

RPA breaks the "validate once, leave alone" assumption harder than any other system class, because the applications underneath it change constantly and a vendor patch can silently shift a field. Your validated state has more moving parts than the bot itself.

**Change control.** Changes to the bot logic obviously trigger assessment, but the RPA-specific addition is that changes to the underlying applications can invalidate the bot without anyone touching the bot. Wire your change-control process so that an upgrade to the LIMS, the ERP, the browser, or the operating system triggers an impact assessment on every bot that touches those surfaces. Maintain a register that maps each bot to the systems it drives, so when a system change comes in you can immediately see which bots are exposed. Re-test the affected paths before the changed environment goes live. See [change control for validated systems](/articles/change-control-validated-systems) and [IT change and configuration management in GxP](/articles/it-change-and-configuration-management-gxp).

**Periodic review.** On a defined cadence, review each bot: exception and error rates from the execution log, any drift in accuracy, open changes, incidents, and whether the intended use still matches what the business actually does with the bot. A bot whose exception rate is climbing is telling you a surface is drifting underneath it. See [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review) and [requalification and periodic review of equipment](/articles/requalification-and-periodic-review-equipment) for the cadence pattern.

**Incident handling.** When a bot does produce a wrong record (it will, eventually), that is a deviation. Investigate it, assess the impact on records already produced (how many transactions since the last known-good state, what decisions relied on them), correct, and feed the lessons back into the bot design and the change-control wiring. See [deviation management](/articles/deviation-management) and [CAPA effectiveness verification](/articles/capa-effectiveness-verification).

---

## Roles and responsibilities

Clear ownership prevents the most common RPA failure mode, which is a bot built by an enthusiastic citizen developer that nobody validated, owns, or maintains.

| Role | Responsibility |
|---|---|
| Process / business owner | Owns the intended use and the business process; accountable that the bot does what the process needs; approves the requirements |
| RPA developer / builder | Builds and configures the bot, writes the configuration specification, executes initial testing, raises changes through change control |
| Quality Assurance | Approves the GxP determination, risk assessment, validation plan, and summary report; ensures procedures (change control, periodic review) are followed; independent of the build |
| Validation / CSV lead | Designs the test strategy proportional to risk, reviews traceability and evidence, ensures CSA approach is defensible |
| System / application owners (LIMS, ERP, etc.) | Notify when their systems change so impacted bots can be reassessed; confirm bot service accounts and audit-trail capture |
| IT / security | Manage bot credentials and the credential vault, enforce least privilege, manage the platform environment |
| Platform vendor | Maintains the RPA platform; subject of the one-time supplier assessment; provides patch and security information |

The non-negotiable separation: the person who builds the bot is not the only person who approves it for GxP use. See [GxP roles and responsibilities](/articles/gxp-roles-responsibilities).

---

## Common mistakes and inspection-finding patterns

These are the patterns that turn up in computerized-system and data-integrity observations. None require naming a company; they are generic and recurring.

**Citizen-developer bots in production with no validation.** A team buys a low-code RPA license, a non-validation person automates a GxP transcription task, and it runs unvalidated for months. The fix is governance: any bot touching GxP records goes through the determination and risk process before it runs. See [validating scripts and low-code analytics](/articles/validating-scripts-low-code-analytics).

**Treating the platform as the validated object.** "We validated UiPath" tells you nothing about whether a specific bot moves your specific data correctly. The platform is qualified infrastructure; each automation is validated for its intended use.

**No data-transfer verification (the Annex 11 clause 5 miss).** A transcription bot with no read-back check is trusted blind. When it eventually writes a wrong value, there is no detection until a human stumbles on it. Build and test the verification.

**Silent exception handling.** The bot meets an unexpected state and guesses, retries, or skips without logging. This is the worst case because it produces wrong records with no trail. Exceptions must stop the bot and route to a human.

**Bots running under human credentials.** The audit trail attributes bot actions to a named person, which is a false record and an attributability failure under ALCOA+ and Part 11.

**No impact assessment when underlying systems change.** A LIMS upgrade moves a field; the bot now reads the wrong field and transcribes wrong results for weeks. The change-control wiring that links system changes to bot re-testing was never built.

**Validation evidence that is all happy path.** Every test shows the bot working when everything is perfect. No boundary tests, no forced exceptions, no proof the verification check can fire. Inspectors read this as "you never tested failure," which is where data integrity actually lives.

**Lost or undocumented bot inventory.** Nobody can produce a list of which bots exist, what they touch, and which are GxP. You cannot defend a fleet you cannot enumerate. Maintain a bot register tied to the systems each one drives.

---

## Interview-ready: questions you should be able to answer

**"How is validating an RPA bot different from validating an application?"**
The bot is not the system of record; it is an automated user acting at the UI layer across multiple systems, unattended and brittle. You validate what it does to records, not the bot as a sealed black box. The validation boundary is the cross-system transaction, the dominant risks are silent transcription errors and broken attributability, and the bot needs continuous protection against changes in the applications underneath it.

**"What regulation requires a data-transfer verification check?"**
EU GMP Annex 11 clause 5: data transfers between systems should include built-in checks for correct and secure entry and processing. In practice that is read-back verification on every transfer, and FDA Part 11 §11.10(a) and (b) back the same intent through accuracy and accurate-copy requirements.

**"How does CSA change how you test an RPA bot?"**
CSA (FDA's Computer Software Assurance guidance, finalized September 2025) lets you scale effort to risk. Low-risk, read-only or fully human-reviewed bots get unscripted testing and lighter evidence; high-risk unattended bots that calculate or decide get scripted testing, boundary testing, and full exception verification. You spend assurance where wrong records would hurt product quality or patient safety, not uniformly.

**"A bot logs into the LIMS as an analyst's account. What is wrong with that?"**
It breaks attributability. The LIMS audit trail will attribute the bot's actions to a person who never performed them, which is a false record and an ALCOA+ and Part 11 access-control failure. Bots need their own named service accounts with vaulted credentials and least privilege.

**"Your transcription bot writes a wrong result into a register. How do you know, and how should it have been prevented?"**
Prevention is a built-in read-back check that compares the written value to the source and fails on mismatch, tested to confirm it actually fires. Detection in life is that check plus periodic review of the execution log's exception rate and the human review you committed to in the risk assessment. When it happens, it is a deviation: assess every transaction since the last known-good state, correct the records, and fix the design and the change wiring.

**"What triggers re-validation of a bot that you have not changed?"**
A change to any system the bot drives: LIMS, ERP, browser, or operating system upgrades, screen or field changes, or security configuration changes. Your change-control process must link those system changes to an impact assessment and re-test of the affected bots before the changed environment goes live.

**"How do you handle exceptions in a GxP bot?"**
Fail safe: on any unexpected state the bot stops, does not guess or skip silently, logs the exception with enough context (record ID, timestamp, reason), and routes the item to a human queue. Then you test that this actually happens by forcing the failure conditions.

---

## Practical tips

- Write the intended-use statement first and make it precise. Nearly every later argument (risk level, what to test, residual risk) flows from it.
- Default the bot to "stop and ask a human" for anything it was not explicitly built to handle. Optimistic bots produce confident wrong records.
- Build read-back verification into every transfer and then deliberately break it once in testing to prove the check fires.
- Give every bot its own named service account and put the credential in the platform vault. Never a human's login, never a plain-text password.
- Keep a living register that maps each bot to the systems it drives, so a system upgrade ticket immediately surfaces which bots need reassessment.
- Prefer stable selectors (attribute or accessibility identifiers) over screen coordinates or image matching. Document the selector strategy so maintainability is reviewable.
- Lean on the platform supplier assessment once and reuse it; do not re-audit the vendor per bot.
- Govern citizen development. The risk is not the tool; it is an unvalidated GxP bot nobody owns.

### Related reading

- [Computer Software Assurance (FDA)](/articles/computer-software-assurance-fda)
- [GAMP 5 CSV framework](/articles/gamp5-csv-framework)
- [Validating scripts and low-code analytics](/articles/validating-scripts-low-code-analytics)
- [Validating AI GxP systems](/articles/validating-ai-gxp-systems)
- [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology)
- [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11)
- [Audit trail design and review](/articles/audit-trail-design-and-review)
- [Change control for validated systems](/articles/change-control-validated-systems)
- [Data criticality and data risk](/articles/data-criticality-and-data-risk)
