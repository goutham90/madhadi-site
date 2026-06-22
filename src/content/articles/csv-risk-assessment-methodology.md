---
title: "CSV Risk Assessment: How to Scope and Execute Risk-Based Validation"
description: "A working guide to validation risk assessment: FMEA, risk ranking matrices, criticality determination, GAMP 5 software categorization, and using risk to set testing scope without over-validating or under-validating."
pubDate: 2026-01-02
tags: ["CSV", "risk assessment", "GAMP", "validation", "FMEA"]
tier: "Intermediate"
pillar: "csv-csa"
---

Risk assessment is the analytical step that decides how much validation work a system actually requires. Done well, it protects product quality and data integrity without generating documentation for its own sake. Done poorly, it either leaves real risks unaddressed or buries the team in testing for functions that carry no GxP risk at all.

The regulatory basis is settled. FDA's guidance on Computer Software Assurance for Production and Quality System Software (a draft in 2022, finalized in 2025), ISPE GAMP 5 Second Edition (2022), and ICH Q9(R1) Quality Risk Management (Step 4, 2023) all say the same thing in different words: validation effort should be proportionate to the risk a system poses to patient safety, product quality, and data integrity. The principle is easy to recite. The hard part is applying it so that an inspector, and your own future self, can follow the logic from "this is what the system does" to "this is why we tested it the way we did."

This article walks the full sequence: defining GxP context, assigning a GAMP category, finding the functions that actually matter, scoring them with FMEA, translating scores into a testing approach, deciding when vendor evidence is enough, and keeping the assessment honest through change. The same method applies whether the system is a pharmaceutical manufacturing platform, a medical device design or complaint system, a clinical data system, or a laboratory information system. If you are new to the discipline, start with the foundational picture in [the GAMP 5 CSV framework](/articles/gamp5-csv-framework) and [computer software assurance](/articles/computer-software-assurance-fda) before going deep here. If you run a program, the sections on common mistakes and revalidation are where audits tend to find the weak points.

---

## Why risk assessment, and not just "validate everything"

The instinct to test every function to the same depth feels safe. It is not. Exhaustive scripted testing of a configured enterprise platform with thousands of functions is not achievable in any realistic timeline, so what actually happens is that teams write a large volume of shallow, copy-paste protocols, run them under deadline pressure, and produce binders that look thorough but never seriously probed the functions that could hurt a patient. The volume hides the gap.

A genuine risk assessment does the opposite. It concentrates the team's limited attention on the small set of functions where a silent failure would corrupt a release decision or a clinical record, and it deliberately spends less on the cosmetic and administrative functions. ICH Q9(R1) added emphasis on this exact point after observing that many organizations were applying risk management as a paperwork ritual rather than as a tool for decisions. The revision calls out "subjectivity" and "lack of meaningful risk-based decisions" as the failure modes to avoid. That is the bar your assessment has to clear.

Where this sits in the wider quality system matters too. A CSV risk assessment is one application of the broader discipline described in [quality risk management](/articles/quality-risk-management). The Q9 toolkit (FMEA, risk ranking and filtering, fault tree, HACCP) is the same toolkit you use for process and facility risk; the CSV version simply applies it to a system's functions. Treat the CSV assessment as a specialization, not a separate universe, and your reviewers will recognize the logic.

---

## Step 1: Define the system and its GxP context

Before assigning any score, understand what the system does and where it sits in the regulated environment. This step is unglamorous and routinely skipped, which is why so many assessments score functions in a vacuum.

Ask the questions that establish whether GxP even applies:

- Does the system create, store, process, or transmit data used to make GxP decisions? Release decisions, in-process decisions, batch disposition, clinical endpoints, device lot acceptance.
- Does it control or monitor a process that directly affects product quality or patient safety?
- Does it generate records required by FDA, EMA, MHRA, or another authority, including records you would have to produce in an inspection?
- Is it referenced in a regulatory submission or relied on for a submission's data?

If every answer is no, the system is not a GxP system and does not need pharmaceutical validation. Validate the manufacturing execution system. Do not validate the expense reporting tool. Writing "not GxP, rationale below" with a short justification is itself a valid and defensible output. Inspectors respect a clear scoping decision far more than a validation package for software that had no business being in the program.

If any answer is yes, the system is in scope, and you then qualify the extent of use. A LIMS that manages sample lifecycle, results, and specification comparisons is deeply GxP. The same LIMS instance used only to track non-GxP reagent inventory may be in scope for very little. Capture the boundary explicitly, because the boundary you draw here determines everything downstream. For the data-handling view of this same question, [the data lifecycle and metadata](/articles/data-lifecycle-and-metadata) article is a useful companion, and [data criticality and data risk](/articles/data-criticality-and-data-risk) explains how to rate the data itself, not just the function.

### A worked GxP determination

Make the determination visible, not implicit. A short table per system, signed by the system owner and Quality, settles the question and gives an inspector a one-page answer.

| Question | Answer | Basis |
|---|---|---|
| Creates/processes GxP decision data? | Yes | Stores release-relevant assay results and spec comparisons |
| Controls a quality-critical process? | No | Read-only of instrument results, no process control |
| Generates regulated records? | Yes | Audit trail and e-signature records subject to 21 CFR Part 11 |
| Referenced in a submission? | Indirect | Method results feed stability data used in filings |
| **GxP determination** | **In scope** | **High-impact for result and record functions; low for inventory module** |

The "extent of use" line at the bottom is what keeps the scope honest. A blanket "in scope" with no boundary forces the team to validate modules nobody uses for GxP work.

---

## Step 2: Assign the GAMP 5 software category

GAMP 5 Second Edition keeps the familiar four categories. The category sets the baseline approach before any risk-based adjustment. It is a starting posture, not a verdict.

| Category | What it is | Typical examples | Baseline approach |
|---|---|---|---|
| 1: Infrastructure | Layered software the application runs on | OS, database engine, virtualization, network services | Qualified as infrastructure, not validated as an application. Installation records, version control, vendor documentation. |
| 3: Non-configured | Used as delivered, no GxP-meaningful configuration | Firmware-driven instruments, off-the-shelf tools used as-is | Verify it does what the vendor claims for your use. Confirm function, rely on supplier testing. |
| 4: Configured | Standard platform configured for site use | LIMS, MES, eQMS, CTMS, chromatography data systems, device complaint-handling systems | Risk-based verification focused on configured GxP functions. Most enterprise GxP software lands here. |
| 5: Custom | Built specifically for the organization | Bespoke applications, custom scripts, custom control logic, custom interfaces | Highest rigor. Development lifecycle evidence, design review, code review where relevant, full functional testing. |

Two things trip teams up. First, Category 2 no longer exists. It was retired years ago, and seeing it in a current document is a tell that the template is stale. Second, category is not always clean. A Category 4 platform almost always contains Category 5 elements: a custom report calculation, a bespoke integration, a workflow scripted beyond the vendor's configuration toolkit. Those elements inherit Category 5 expectations even though the platform as a whole is Category 4. Document the split and the rationale. A common inspection finding is a custom calculation hidden inside a "configured" system that never received custom-software scrutiny.

How the category steers effort, in practice:

- **Category 1** drives qualification of the platform, covered in [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation). You do not write functional test scripts for an operating system; you record version, patch state, and that it was installed per the build standard.
- **Category 3** lets you lean heavily on the supplier, provided you confirm the delivered function in your environment. Verify, do not assume.
- **Category 4** is where risk assessment earns its keep, because the configured functions are exactly the ones you must triage.
- **Category 5** raises occurrence risk by default. Custom code has no installed base, so it carries higher likelihood of latent defects and usually warrants design and code review in addition to functional testing. See [validating scripts and low-code analytics](/articles/validating-scripts-low-code-analytics) for the lighter end of custom work.

A practical tip: assign the category before you score, and let it inform the occurrence score in Step 4 rather than double-counting it. The category is an input to risk, not a second risk axis.

---

## Step 3: Identify the GxP-critical functions

Inside a Category 4 system, functions are not equal. The goal of this step is to separate the functions that affect quality and safety from the ones that do not, so that FMEA in the next step is applied where it matters.

A function is GxP-critical when it directly supports or affects:

- Data used for batch release, lot acceptance, or disposition decisions
- Patient safety
- The integrity of a regulatory record
- Control of a critical quality attribute or critical process parameter

For a LIMS, the critical functions usually include sample login and chain of custody, result entry and specification comparison, out-of-specification flagging, batch status management, electronic signature enforcement, access control, and audit trail capture. The report template editor, dashboard layout, and notification preferences are not critical functions. Capture the split in a criticality matrix that an inspector can read in two minutes.

| Function | GxP impact | Criticality |
|---|---|---|
| Sample login and assignment | Direct: determines what is tested and when | High |
| Result entry and spec comparison | Direct: determines pass/fail and disposition | High |
| OOS flagging | Direct: gates the investigation trigger | High |
| Electronic signature binding | Direct: record authenticity and attribution | High |
| Access control configuration | Direct: determines who can do what | High |
| Audit trail capture | Direct: record integrity and traceability | High |
| Report template formatting | Indirect: presentation only | Low |
| Dashboard configuration | None: display preference | None |
| Email notification settings | None: administrative convenience | None |

The audit trail and signature rows deserve attention because they map directly to 21 CFR Part 11 and EU Annex 11 requirements. Functions that enforce those controls are almost never low risk, no matter how mature the vendor is. The detailed treatment of audit trail expectations sits in [audit trail design and review](/articles/audit-trail-design-and-review), and the access side in [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control).

A method note that saves rework: drive the function list from the user requirements, not from a feature tour of the software. Every GxP-critical function should trace back to a requirement, and every high-risk requirement should trace forward to a test. The traceability discipline that ties this together is in [user requirements and traceability](/articles/user-requirements-and-traceability). If a "critical function" has no requirement behind it, either the requirement is missing or the function is not actually in scope.

---

## Step 4: Score the risk with FMEA

Failure Mode and Effects Analysis is the most widely used structured method for CSV risk assessment. For each critical function, you identify what could fail, what the failure does, and three scores that together set priority. Keep the scale consistent across the whole assessment. Mixing a 1-5 and a 1-10 scale within one document is a frequent and avoidable error.

**Failure mode:** the specific way the function could go wrong. Not "result entry fails" but "result is saved to the wrong sample record" or "a value outside the entry limits is accepted without warning." Specificity here is what makes the rest of the analysis usable.

**Effect:** what happens to the data, process, or product if the failure occurs.

**Severity (S):** how serious the effect is.

| Score | Severity |
|---|---|
| 1 | No GxP impact |
| 2 | Minor: administrative impact only |
| 3 | Moderate: potential record-integrity impact, detectable |
| 4 | Major: affects batch quality decisions or critical records |
| 5 | Critical: direct patient safety or submission impact |

**Occurrence (O):** how likely the failure is, considering vendor maturity, complexity, configuration history, and how novel the use case is.

| Score | Occurrence |
|---|---|
| 1 | Very unlikely: established function in mature software |
| 2 | Unlikely: established function, minor customization |
| 3 | Possible: new configuration or integration point |
| 4 | Likely: complex custom configuration or novel use |
| 5 | Very likely: poorly defined requirements or immature software |

**Detectability (D):** if the failure happens, how readily it is caught before it causes harm.

| Score | Detectability |
|---|---|
| 1 | Immediately detected by the system or user |
| 2 | Detected through normal review |
| 3 | May be missed in routine review |
| 4 | Unlikely to be found without a targeted audit |
| 5 | Silent: not detectable in practice |

**Risk Priority Number (RPN):** S x O x D. Higher numbers mean higher priority for validation attention.

Define the scales once, in the document, and make every scorer use the same anchors. Two analysts who disagree on whether a failure is "moderate" or "major" will produce an assessment no inspector can trust. The published anchor table is what converts a number into a defensible statement.

### A worked FMEA, several rows

A single row is a definition; several rows show the method discriminating between functions. Here is a fragment of a LIMS FMEA with the reasoning attached.

| Function | Failure mode | Effect | S | O | D | RPN | Testing decision |
|---|---|---|---|---|---|---|---|
| Audit trail capture | Result change not written to audit trail | Silent loss of traceability on a release-relevant record | 5 | 2 | 5 | 50 | Scripted, with a negative test (make a change, confirm the entry appears) |
| Spec comparison | Result inside spec flagged as OOS, or true OOS passed | Wrong disposition decision | 5 | 3 | 2 | 30 | Scripted, boundary values tested at, just inside, and just outside limit |
| E-signature binding | Signature applied without re-authentication | Record attribution breaks, Part 11 gap | 5 | 2 | 3 | 30 | Scripted, attempt to sign without credentials |
| Access control | Analyst role can approve own results | Segregation-of-duty breach | 4 | 3 | 3 | 36 | Scripted, role-permission matrix test |
| Result rounding rule | Last decimal rounds the wrong way | Borderline result mis-dispositioned | 4 | 3 | 2 | 24 | Scripted, numeric examples at rounding boundaries |
| Report template layout | Logo or column header misaligned | Cosmetic only | 2 | 3 | 1 | 6 | Unscripted confirmation or vendor doc review |

Walk the audit trail row, since it is the one most people score wrong:

- Severity 5. A silent loss of audit trail data destroys traceability for a record that supports release and could be requested in an inspection.
- Occurrence 2. Audit trail capture is a mature, vendor-tested core function, but the configuration that scopes which fields are tracked is site-specific, so it is not a 1.
- Detectability 5. By definition, a missing audit trail entry leaves nothing to find in routine review. You would only catch it through a deliberate negative test.
- RPN 5 x 2 x 5 = 50.

The RPN of 50 is moderate, but the combination of Severity 5 and Detectability 5 is the signal that matters more than the product. A high-severity, low-detectability failure demands scripted testing with documented expected results regardless of how the RPN nets out, because the failure is exactly the kind no operational control will catch later. This is why mature programs apply a severity gate on top of RPN rather than relying on RPN alone: any Severity 4 or 5 function gets rigorous testing even when occurrence is low. ICH Q9(R1) reinforces this by reminding teams that risk acceptability is not a single number, it is a judgment that has to account for the kind of harm, not only its arithmetic likelihood.

By contrast, a low-severity function such as report template formatting, where the worst case is a cosmetic layout issue an analyst would notice immediately, can be handled with unscripted exploratory testing, a vendor documentation check, or a brief confirmation. Spending a scripted protocol there is the over-validation the whole method exists to prevent.

A note on the RPN's known weakness: equal RPNs are not equal risks. An RPN of 36 built from a Severity 4 is more important than an RPN of 36 built from a Severity 2 and a high occurrence. The severity gate fixes this, which is why every credible CSV assessment ranks on severity first and uses RPN as a secondary sort within a severity band. FMEA is one of the named Q9 tools; if your functions do not decompose into discrete failure modes, risk ranking and filtering can be the better fit, and the choice itself should be justified in the document.

---

## Step 5: Turn scores into a testing approach

The FMEA output drives the testing decision for each function. The link from score to method has to be written down as a rule, applied consistently, and visible in the document, so that an auditor can replay the logic.

| Risk level | Testing approach |
|---|---|
| High: S >= 4, or RPN > 50 | Scripted testing with explicit expected results, documented execution, formal deviation handling |
| Medium: S = 3, or RPN 25-50 | Scripted or structured unscripted testing, documented execution |
| Low: S <= 2, or RPN < 25 | Exploratory unscripted testing, or vendor documentation review |
| None | No testing, document the rationale |

FDA's CSA guidance explicitly endorses this scaling. It describes a spectrum of assurance activities from rigorous scripted testing down to unscripted and ad hoc testing, and it directs the rigor toward functions whose failure would affect patient safety or product quality. The point of CSA is not a license to skip testing. It is a directive to stop testing low-risk functions at the same depth as high-risk ones, and to let some of that effort move into testing that actually challenges the high-risk functions. Read alongside [the CSV/CSA audit checklist](/articles/csv-csa-audit-checklist), this is where a program either becomes genuinely risk-based or stays risk-based only on the cover page.

One practical note on unscripted testing: "unscripted" does not mean "undocumented." A record of who tested, what they exercised, what they observed, and a screenshot or system record of the outcome is still required. The difference from scripted testing is that the tester is not following a predetermined step list with predetermined expected results. The evidence obligation does not disappear.

Two more activity types belong in the CSA spectrum and are easy to forget. **Ad hoc testing** is the lightest form, a quick check with a contemporaneous record, suitable for the lowest-risk functions. **Vendor-supplied assurance** is not a test at all but a documented reliance on supplier evidence, which Step 6 covers. The rule of thumb: the higher the severity and the lower the detectability, the further left on the spectrum you move (toward scripted, toward negative testing), and that movement must be traceable to the FMEA row that drove it. When the testing actually runs, failures get handled per [validation test failure management](/articles/validation-test-failure-management); do not quietly downgrade a failed high-risk test to make the timeline.

---

## Step 6: Decide when vendor evidence is enough

For functions you intend to address through vendor documentation instead of site testing, the question is whether the vendor's evidence actually exists, applies to your configuration, and is good enough to rely on. Relying on supplier work is encouraged by GAMP 5, but it is a conscious decision you have to justify, not a default.

At minimum, vendor documentation worth relying on shows:

- Evidence of a defined software development lifecycle and quality system at the vendor
- Test documentation showing the function was tested during development
- A regulatory support package, or IQ/OQ documentation relevant to your deployment
- A statement of GxP applicability or compliance for the function in question

Write down the assessment plainly. Something like: "Functions X, Y, and Z are non-configured Category 3 features. We reviewed the supplier's quality system documentation and development test summaries dated [date], confirmed they cover these functions for our use, and relied on them in place of site OQ for these functions." That is auditable. "We trust the vendor" is not.

Vendor evidence is insufficient, and site testing is required regardless of the risk rating, when:

- The vendor has no formal quality system
- The documentation is generic and silent on your configuration
- The function was customized beyond the vendor-validated baseline
- The vendor cannot or will not provide documentation on request

A supplier audit or a documented supplier qualification underpins this decision; [supplier and vendor qualification](/articles/supplier-vendor-qualification) and [software supplier assessment](/articles/software-supplier-assessment-csa) cover how far that assurance can be stretched and when it cannot. For systems hosted by the vendor, [cloud and SaaS validation](/articles/cloud-saas-validation) adds the shared-responsibility dimension, because you cannot test infrastructure you do not control and have to rely on the provider's evidence and your own configuration testing. The dividing line is simple to state and easy to forget: the supplier is accountable for the product as built, you remain accountable for the system as configured and used. Vendor evidence can satisfy the first; it can never satisfy the second.

---

## Step 7: Document the assessment as a deliverable

The risk assessment is a validation deliverable in its own right, and it is approved before the protocols are finalized, because the protocols flow from it. At a minimum it contains:

- System description and GxP context, including the in-scope boundary
- GAMP category assignment with rationale, including any Category 5 elements
- The list of identified critical functions and the criticality matrix
- The FMEA table with scores and a written rationale for each score
- The scoring scale definitions (the S, O, D anchor tables) used
- The testing approach by function, traceable to the scores
- The vendor documentation assessment
- Author and QA approval signatures with dates

Traceability is the thread an inspector pulls. Each high-risk function should trace forward to a specific test, and each test should trace back to a requirement and a risk. If the testing scope in the protocols does not match the risk assessment, one of the two documents is wrong, and the mismatch is a finding waiting to be written. The broader set of documents this connects to is laid out in [the validation deliverables guide](/articles/validation-deliverables-guide), and the protocol mechanics are in [writing validation protocols and reports](/articles/writing-validation-protocols-and-reports).

### Acceptance criteria: what "done correctly" looks like

A finished assessment passes these checks. Use them as a self-audit before you route for approval:

- Every in-scope function has a criticality rating with a one-line rationale, and out-of-scope items are named and justified, not silently omitted.
- The GAMP category is assigned, and any embedded custom elements are called out with their own category.
- Scoring scales are defined in the document and used consistently; no mixed scales, no unanchored numbers.
- Every Severity 4 or 5 function has a scripted test, including a negative test where detectability is low.
- Every score has a written reason. A reviewer who has never seen the system can read the rationale and agree or push back.
- The testing approach column traces, row by row, to the protocols. A spot check of three high-risk rows lands on real test cases.
- The assessment is signed by the author and by Quality before protocol execution begins, with dates that make the sequence obvious.

If any of those fails, the document is not done, regardless of how complete it looks.

---

## Roles and responsibilities

Risk assessment is a team activity, and findings often trace to an unclear ownership line. Name the roles in the document so there is no ambiguity about who decided what.

| Role | Responsibility in the risk assessment |
|---|---|
| System owner / business process owner | Defines what the system does, the GxP context, and how functions are actually used. Owns the criticality calls for the business. |
| Subject matter experts (lab, manufacturing, clinical) | Supply the failure modes and effects that only a practitioner knows. Sanity-check severity and detectability against real operations. |
| Validation / CSV lead | Facilitates the FMEA, enforces consistent scoring, converts scores to the testing approach, owns traceability to protocols. |
| IT / system administrator | Provides configuration and integration detail that drives occurrence scores; flags custom elements inside a configured platform. |
| Quality Assurance | Reviews and approves the assessment, challenges thin rationale, confirms the approach meets procedure and regulatory expectation before protocols proceed. |
| Vendor (where relied upon) | Supplies development and test evidence; subject to supplier qualification. Provides evidence, not the decision to rely on it. |

The split that matters most: SMEs supply the inputs, the CSV lead enforces the method, and Quality approves the output. When one person plays all three roles with no challenge, the assessment tends to drift toward whatever scope was already planned, which is the exact subjectivity Q9(R1) warns against.

---

## Common mistakes that invite findings

**Rating everything high to avoid scrutiny.** If every function is critical and every test is scripted, you have not done a risk assessment, you have done a complete-documentation approach wearing a risk assessment's clothes. Both FDA and GAMP want to see genuine differentiation, and a flat matrix is evidence you never made a real decision.

**Rating everything low to minimize work.** The opposite failure. Audit trail configuration scored "low" because "we trust the vendor" is indefensible when audit trail completeness is a direct Part 11 and Annex 11 requirement. Severity comes from the consequence of failure, not from how confident you feel.

**Scores with no evidence behind them.** A severity score with no statement of why the impact reaches that level. An occurrence score that ignores vendor maturity and configuration history. A detectability score assigned without thinking through how the failure would actually surface. Unexplained numbers are the most common audit observation against risk assessments, because they show the score was reverse-engineered to justify a predetermined scope.

**Mixing scales or shifting anchors mid-document.** A 1-5 severity scale on one page and a 1-10 on the next, or two scorers using different definitions of "moderate," makes every RPN meaningless. Define the scale once and hold to it.

**The assessment disconnected from the protocols.** High-risk functions identified, then tested superficially or not at all. The assessment and the protocols have to be coherent, and traceability is what proves it.

**Treating RPN as the whole answer.** Relying on the raw product while ignoring that a Severity 5 with low detectability deserves scripted testing even at a low RPN. The severity gate exists for this reason.

**A static document.** When a new interface is added or a new critical function emerges during testing, the assessment is updated. It is a living document across the validation lifecycle, not a one-time artifact filed and forgotten.

---

## Revalidation: scope the assessment to the change

When a validated system changes, you need a new risk assessment, but scoped to the change rather than the whole system. The change control record carries an impact assessment that asks:

- What does this change touch in the validated system?
- Which validated functions could be affected, directly or through dependency?
- Is the change inside the validated design space, or outside it and therefore requiring revalidation?
- What testing confirms the change works and does not degrade validated functions, including a regression check on adjacent functions?

The impact assessment sets the revalidation scope. A cosmetic change to a report template may need only a brief confirmation test. A major version upgrade that touches core database structures may require re-execution of the critical OQ scripts and a data integrity check on migrated records; when data moves between structures, [data migration validation](/articles/data-migration-validation) is the relevant method. The discipline that governs all of this is covered in [change control for validated systems](/articles/change-control-validated-systems), and the periodic re-look that catches accumulated drift is in [the validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review).

---

## Interview questions and how to answer them

These come up in CSV, validation, and data integrity interviews, and inspectors ask the same questions in different clothes. Short, concrete answers that show judgment beat textbook recitation.

**"How do you decide how much to test a system?"**
Start from GxP impact, not from the feature list. Determine whether the system is GxP at all, assign a GAMP category, identify the GxP-critical functions, and run FMEA on those functions. The score drives the testing approach: scripted with expected results for high-severity functions, lighter unscripted or vendor-supplied assurance for low-risk ones. The whole point is proportionality, with the logic written down so it can be replayed.

**"What is the difference between CSV and CSA?"**
CSA is the assurance approach FDA's 2022 draft, finalized in 2025, asks you to apply: risk-based, with rigor concentrated on functions that affect patient safety and product quality, and a spectrum of activities from scripted down to ad hoc. CSV is the broader validation discipline. CSA is not "less validation," it is less testing where risk is low and more genuine challenge where risk is high. Say that plainly; interviewers are checking whether you read CSA as a shortcut, which it is not.

**"Walk me through scoring a function with FMEA."**
Name a specific failure mode, not a vague one. State its effect on data, process, or product. Score severity from the consequence, occurrence from vendor maturity and configuration novelty, detectability from whether routine review would catch it. Multiply for RPN, then apply a severity gate so any Severity 4 or 5 gets rigorous testing regardless of RPN. Use the audit trail example: S5, O2, D5, RPN 50, scripted with a negative test because the failure is silent.

**"A vendor says their system is validated. Is that enough?"**
No. The vendor is accountable for the product as built; I remain accountable for the system as configured and used. I can rely on vendor evidence for non-configured functions if their quality system, development testing, and documentation actually cover my use, and I document that reliance. I still test the configured and custom functions on my site.

**"Why not just validate everything to be safe?"**
Because it does not make anything safer. Exhaustive shallow testing produces volume that hides the real gaps, burns the timeline, and never seriously challenges the functions that could hurt a patient. Q9(R1) and the CSA guidance both push against ritual documentation. Risk-based testing puts the effort where a silent failure would do harm.

**"How do you handle a custom calculation inside a configured platform?"**
It inherits Category 5 expectations even though the platform is Category 4. Functional testing alone is not enough; it warrants design review and, where relevant, code review, plus testing at numeric boundaries. A custom calculation treated as "just configuration" is a classic finding.

**"What makes a risk assessment defensible in an inspection?"**
Traceability and rationale. Every high-risk function traces to a test, every test traces to a requirement and a risk, and every score has a written reason a stranger can follow. Consistent scales, a severity gate, Quality approval before protocols, and a living document that was updated when the system changed. If a stranger can read it and tell which functions matter, why, and how each was proven, it will hold.

---

Risk-based validation only works when the assessment is done honestly and used to make real decisions about scope. When it becomes a formality, it produces exactly the bloated, low-value documentation that GAMP 5 Second Edition and the CSA guidance were written to retire. The test of a good risk assessment is simple: hand it to someone who has never seen the system, and they should be able to tell you which functions matter, why, and how you proved each one works. For the wider program context, see [the GxP quality interview preparation](/articles/gxp-quality-interview-preparation) guide and [the CSV/CSA audit checklist](/articles/csv-csa-audit-checklist).
