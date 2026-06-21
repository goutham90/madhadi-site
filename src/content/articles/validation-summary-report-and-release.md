---
title: "The Validation Summary Report and the System Release Decision"
description: "How the validation summary report closes a validation effort, summarizes deviations and residual risk, and authorizes go-live. Covers contents, sign-off authority, release criteria, and the VMP vs VSR confusion."
pubDate: 2026-06-20
tags: ["csv", "validation", "vsr", "release", "residual-risk", "deviations", "qa-approval", "gamp5"]
pillar: "csv-csa"
tier: "Intermediate"
---

The validation summary report is the document that closes the loop. Every protocol, every test script, every deviation, every traceability matrix line leads here. It is the deliverable that says, in writing and with signatures, "this system did what the requirements said it would do, we know what did not go to plan, we have decided that the remaining risk is acceptable, and you may now use it for GxP work."

People underestimate it. They treat it as a formality typed up after the real work of testing is done. That is exactly the mistake that produces a glossy report nobody can defend in front of an inspector. The summary report is where the release decision is made, recorded, and made auditable. If it is wrong, weak, or contradicted by the evidence behind it, the whole validation is wrong no matter how clean the test scripts looked.

This article covers what the validation summary report (often abbreviated VSR or sometimes called a validation report or validation final report) is, why it is required, what goes in it, how to write and approve it, how the release decision actually works, and the difference between the VSR and the validation master plan that people constantly confuse.

---

## What the validation summary report is and why it exists

The VSR is the final qualitative report of a validation effort for a specific computerized system, equipment, process, or facility. It is written after execution is complete. Its job is to:

1. State what was validated and against which requirements and plan.
2. Confirm that the planned activities were performed.
3. Summarize the results, including every deviation and its resolution.
4. State the residual risk and whether it is accepted.
5. Make a clear, signed conclusion about whether the system is fit for intended use.
6. Authorize (or withhold) release into the GxP environment.

### The regulatory basis

There is no single clause that says "thou shalt write a document called a validation summary report." The requirement is built up from several sources, and you should be able to name them.

> "Each manufacturer shall establish and maintain procedures for monitoring and control of process parameters for validated processes to ensure that the specified requirements continue to be met. ... When changes or process deviations occur, the manufacturer shall review and evaluate the process and perform revalidation where appropriate." (Source: *21 CFR 820.75*, Process validation, US FDA Quality System Regulation; note the regulation has been amended by the Quality Management System Regulation, QMSR, with a 2026 compliance date that harmonizes it with ISO 13485:2016)

For pharmaceutical computerized systems, the structural expectation comes through:

> "There should be documented evidence that computerised systems are fit for their intended purpose. ... Validation documentation and reports should cover the relevant steps of the life cycle." (Source: *EU GMP Annex 11, Computerised Systems*, principle and clause 4)

US predicate-rule support sits in **21 CFR 211.68** (automatic, mechanical, and electronic equipment) and **21 CFR 211.100/211.110** (written procedures and control of process), with electronic records and signatures governed by **21 CFR Part 11**. For process validation generally, the FDA's *Guidance for Industry: Process Validation: General Principles and Practices (January 2011)* establishes the three-stage lifecycle and the expectation that each stage produces documented conclusions.

The industry framework that most directly shapes the VSR is **GAMP 5: A Risk-Based Approach to Compliant GxP Computerized Systems, Second Edition (ISPE, 2022)**. GAMP 5 names the reporting deliverable explicitly and ties it to the validation plan: a validation plan opens the effort and a validation report closes it, summarizing results against that plan and stating fitness for intended use. Computer software assurance thinking, reflected in the FDA's draft and final *Computer Software Assurance for Production and Quality System Software* guidance, does not remove the report. It changes how much scripted evidence sits behind it and pushes toward a record of assurance activities and conclusions that is proportionate to risk.

### The risk and quality rationale

Strip away the citations and the reason is simple. A GxP system controls or records something that can affect product quality, patient safety, or data integrity. Before anyone relies on it for those purposes, a qualified person has to look at the totality of the evidence and make a judgment call: is this good enough to trust. The VSR is the artifact of that judgment. It forces someone with authority to read the whole story, confront the deviations, accept the residual risk in their own name, and put a date on go-live. Without it you have a pile of executed scripts and no decision. Inspectors do not cite "you tested." They cite "you released a system into GxP use without a documented, justified conclusion that it was fit for purpose."

---

## VSR vs VMP vs validation plan: kill the confusion now

This is the single most common conceptual mix-up on this topic, and it shows up in interviews constantly. Get it crisp.

| Document | When | Scope | What it does |
|---|---|---|---|
| Validation Master Plan (VMP) | Program level, written up front, lives for years | Site, program, or portfolio of many systems | Strategy. Lists what will be validated, the approach, roles, standards, and how validation is governed across many systems. A planning and governance umbrella. |
| Validation Plan (VP) | Project level, written up front for one system | One system or one validation effort | Strategy for this one system. Scope, deliverables, approach, acceptance philosophy, risk approach, schedule, roles for this project. |
| Validation Summary Report (VSR) | Project level, written at the end | Same one system as its VP | Conclusion. Confirms the plan was executed, summarizes results and deviations, states residual risk, and authorizes release. |

The clean way to say it: the VMP is the site's standing strategy, the VP is one project's promise, and the VSR is that same project's proof that the promise was kept (or an honest account of where it was not, and why that is acceptable). A VSR maps one to one to a VP. A VMP does not get a VSR; it gets a periodic review.

A frequent error is writing a VSR that summarizes against the VMP. It should summarize against the system's validation plan and user requirements, not against the program umbrella. If your VSR's "scope" section reads like the VMP's table of contents, you have conflated them.

See [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review) for the VMP side, and [validation deliverables guide](/articles/validation-deliverables-guide) for how all the deliverables fit together.

---

## What goes in the VSR: section by section

There is no mandated template, but a defensible VSR has these sections. Treat the list as the contents you should expect to write or review.

### 1. Header and identification

System name and version, document number and version, the validation plan number it closes, the GxP classification, the GAMP software category (1, 3, 4, or 5), and the system owner and process owner. The reader must be able to tie this report to exactly one validation effort in seconds.

### 2. Purpose and scope

What was validated, what was deliberately excluded, and the boundary of the system (interfaces in and out, infrastructure assumed qualified, modules in and out of scope). State the intended use in plain language, because "fit for intended use" later is judged against this sentence. If reporting, calculations, or an interface to a downstream system were out of scope, say so here so nobody assumes they were covered.

### 3. References

The validation plan, user requirements specification, functional/configuration specifications, risk assessment, design and traceability documents, IQ/OQ/PQ or equivalent protocols, the supplier assessment, relevant SOPs, and applicable regulations and standards. This is the spine the rest of the report hangs on.

### 4. Validation approach actually used

A short narrative of what was done: the lifecycle model, the risk-based rationale for the depth of testing, the use of supplier documentation or vendor testing, and any assurance activities done in lieu of fully scripted testing (relevant under a CSA approach). If the approach deviated from the plan, that is itself a deviation and belongs in the deviation section.

### 5. Summary of executed deliverables

A table confirming each planned deliverable was produced, executed, reviewed, and approved. This is where you demonstrate the plan was actually followed.

### 6. Summary of results

Pass/fail counts by protocol, requirements coverage, and a pointer to the requirements traceability matrix showing every requirement was verified. This is the heart of the evidence summary. (See [user requirements and traceability](/articles/user-requirements-and-traceability).)

### 7. Deviations and their disposition

Every test failure, every protocol deviation, every incident during execution, each one listed with its identifier, classification, root cause, resolution, and current status. This section gets its own deep treatment below because it is where reports go wrong.

### 8. Outstanding items and residual risk

Anything not fully closed at the time of release: open deviations carried as conditions, CAPAs not yet effective, items deferred to the operational phase, and the residual risk that remains. Each open item needs a justification for why release is acceptable with it open, an owner, and a due date.

### 9. Conclusion and fitness statement

The explicit statement: the system is (or is not) validated and fit for intended use, subject to the listed conditions. This is the sentence the release decision rests on.

### 10. Approval signatures

The signatories, their roles, and dates. At minimum the validation lead, the system/process owner, and QA. More on authority below.

### 11. Appendices

Deviation log, traceability matrix reference, list of executed protocols, and any supporting summaries.

---

## How to write it: step by step

The VSR is written last, but the work that makes it easy or hard happens throughout the project. Here is the actual sequence.

1. **Confirm execution is complete.** All protocols executed, all test evidence collected, all deviations logged. Do not start the VSR while testing is still open unless you are explicitly documenting a phased release.
2. **Reconcile the traceability matrix.** Walk every requirement to its verifying test and that test's result. Any requirement without a verified, passing result (or a documented, accepted reason it is unverified) is a gap. Close it or carry it as a deviation. This reconciliation is the most underrated step and the one inspectors probe hardest.
3. **Close out the deviation log.** Every deviation needs a root cause, an impact assessment, a resolution, and a status. Decide which are fully closed and which will be carried as conditions of release.
4. **Reassess residual risk.** Go back to the original risk assessment. For each high or medium risk, confirm the controls were verified and are working. Where a control failed or a deviation introduced new risk, evaluate whether the residual risk is acceptable. (See [csv risk assessment methodology](/articles/csv-risk-assessment-methodology) and [quality risk management](/articles/quality-risk-management).)
5. **Draft the report.** Fill the sections above. Write the deviation summaries and residual-risk justifications carefully; these are the parts that get read in an audit.
6. **State the conclusion honestly.** Either fit for intended use, fit for intended use with conditions, or not fit. Do not soften a "with conditions" into an unqualified pass.
7. **Route for review and approval.** Validation lead and SMEs review for technical accuracy; the owner reviews for operational acceptability; QA reviews for compliance, completeness, and the soundness of the residual-risk acceptance.
8. **Record the release decision and effective date.** The signed VSR is the authorization. Make sure the go-live date, any conditions, and the link to change control are all captured.

---

## The release decision: how authorization actually works

The release decision is not a separate ceremony. It is the act of signing the VSR (or, in some quality systems, signing a linked release certificate or change-control record that references the approved VSR). Either way, the decision has three components that must all be present.

### Release criteria

Before you can release, you need to have stated, ideally back in the validation plan, what "done" means. Typical release criteria:

- All planned deliverables produced, executed, reviewed, and approved.
- 100% of requirements traced and verified (or documented justification for any not verified).
- All critical and major deviations closed; minor deviations either closed or accepted as conditions with justification, owner, and due date.
- Required SOPs approved and in effect (operation, backup/restore, security administration, periodic review, business continuity).
- Training completed for users and administrators.
- Supporting infrastructure qualified.
- Data migration verified, if applicable. (See [data migration validation](/articles/data-migration-validation).)
- Residual risk assessed and formally accepted.

If a criterion is not met, you have two honest choices: do not release, or release with a documented condition and an accepted residual risk. You do not have the choice of releasing and pretending the criterion was met.

### Residual-risk acceptance

This is the intellectual core of the release decision. Validation never drives risk to zero. The question is whether what remains is acceptable in light of the intended use and the controls in place. Someone has to own that acceptance by name. For a high-residual-risk item, the acceptor is usually senior QA or a designated risk owner, not the validation engineer.

A residual-risk acceptance should state: the risk, why the planned control did not fully eliminate it, the compensating or procedural control now relied on, the impact if it materializes, and who accepts it. Vague acceptance ("residual risk is low and acceptable") with no reasoning is a finding waiting to happen.

### Sign-off authority

Who can sign matters. A general pattern:

| Role | What they attest |
|---|---|
| Validation lead / author | The report accurately reflects what was done and the evidence supports the conclusion. |
| System owner / process owner | The system meets the business and process needs and is operationally ready. |
| SME / technical reviewer | The technical content and results are correct. |
| QA / Quality unit | The validation met procedural and regulatory requirements, the deviation handling is sound, and the residual-risk acceptance is justified. QA approval is the gating signature for GxP release. |

The quality unit's signature is the one that authorizes GxP use. That authority is grounded in the quality unit's responsibilities under **21 CFR 211.22**, which gives the quality control unit responsibility to approve or reject the procedures and specifications affecting product quality. The owner can say it works; only QA can say it is released for GxP. Build your signature block so the QA line is unambiguous and last.

---

## A worked example

Consider a configured LIMS for a QC laboratory, GAMP Category 4. The validation plan called for IQ, OQ, and a PQ-style user acceptance run, with 142 requirements traced. Here is what the core of its VSR might contain.

**Executed deliverables summary**

| Deliverable | Planned | Executed | Reviewed | Status |
|---|---|---|---|---|
| Installation Qualification | Yes | Yes | Yes | Approved |
| Operational Qualification | Yes | Yes | Yes | Approved |
| User Acceptance / PQ | Yes | Yes | Yes | Approved |
| Requirements Traceability Matrix | Yes | Yes | Yes | Approved |
| Data migration verification | Yes | Yes | Yes | Approved with 1 deviation |

**Results summary**

| Protocol | Test cases | Passed | Failed/deviation | Coverage |
|---|---|---|---|---|
| IQ | 38 | 38 | 0 | n/a |
| OQ | 96 | 92 | 4 | n/a |
| UAT/PQ | 54 | 53 | 1 | functional |
| Requirements traced | 142 | 142 verified | 0 unverified | 100% |

**Deviation summary**

| ID | Description | Class | Root cause | Resolution | Status |
|---|---|---|---|---|---|
| DEV-01 | OQ: audit trail did not capture reason-for-change on result edit | Major | Configuration setting disabled | Setting enabled, test re-executed, passed | Closed |
| DEV-02 | OQ: report rounded to 2 decimals vs spec 3 | Major | Report template error | Template corrected, retested, passed | Closed |
| DEV-03 | OQ: timeout message text differed from spec | Minor | Cosmetic, no GxP impact | Spec updated to match as-built; justified | Closed |
| DEV-04 | OQ: slow query under peak load | Minor | Infrastructure tuning | Tuning applied; performance monitoring added in ops | Closed |
| DEV-05 | UAT: legacy result with non-standard unit failed migration mapping | Major | 11 records with deprecated unit code | 11 records corrected manually, verified 1:1; mapping rule added | Open condition |
| DEV-06 | Migration: 3 archived records lacked original analyst ID | Major | Source system did not store it | Records flagged read-only with documented limitation; residual risk accepted | Open condition |

**Outstanding items and residual risk**

DEV-05 carried as a condition: a post-go-live verification that no further deprecated-unit records exist in the active dataset, owner QC supervisor, due within 30 days. Residual risk low because the 11 affected records were individually verified.

DEV-06 residual risk: 3 archived records permanently lack original analyst attribution, an [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) attributable gap inherited from the legacy source. Compensating control: records are read-only, flagged, and excluded from use in current decisions; a documented data-limitation note travels with them. Accepted by Head of QA. Impact if it materializes: limited, as the records are historical and not used for release decisions.

**Conclusion**

The system is fit for intended use and released for GxP use subject to the two conditions above. Effective date recorded; linked to change control CR-xxxx.

**Signatures**: Validation lead, QC system owner, IT SME, Head of QA (release authority).

Notice what makes this defensible: the deviations are not hidden, the two open items have owners and due dates, the residual risk that cannot be closed is owned by name at the right level, and the conclusion is conditional, not a blanket pass.

---

## Roles and responsibilities

| Role | Responsibility in the VSR and release |
|---|---|
| Validation lead / engineer | Authors the report, reconciles traceability, compiles deviations, drafts residual-risk statements, ensures evidence supports the conclusion. |
| System owner | Confirms operational readiness, that SOPs and training are in place, and that the system meets the process need. Often a signatory. |
| Process / business owner | Confirms the system supports the GxP process as intended. |
| SME / technical reviewer | Verifies technical correctness of results, configuration, and infrastructure qualification status. |
| QA / Quality unit | Reviews for compliance and completeness, challenges deviation dispositions and residual-risk acceptance, gives the release-authorizing approval. |
| Supplier / vendor | Provides documentation that may be relied on (supplier testing, qualification records). Does not approve the customer's VSR but is referenced via the [supplier vendor qualification](/articles/supplier-vendor-qualification) and [software supplier assessment](/articles/software-supplier-assessment-csa). |
| Senior management | Accepts high residual risk where escalation thresholds require it; ensures resources for open conditions. |

A clean rule: the people who did the work cannot be the sole approvers of their own conclusion. Independent QA review is what gives the report credibility.

---

## Common mistakes and inspection-finding patterns

These are the recurring failures, framed the way an inspector would frame them.

**Deviations summarized but not resolved.** The report lists open or unresolved deviations with no disposition, no root cause, or no impact assessment, yet concludes the system is fully validated. This is one of the most common findings: a release decision that ignores its own open items. If a deviation is open at release, it must be a stated, justified condition, not a buried line.

**Conclusion not supported by the evidence.** The VSR says "all tests passed" but the attached scripts show failures, reruns, or unexplained handwritten changes. Inspectors read behind the summary. The report must reconcile to the actual evidence.

**Residual risk asserted, not justified.** "Residual risk is acceptable" with no statement of what the risk is, why the control did not eliminate it, or who accepts it. Acceptance without reasoning is not acceptance.

**Traceability gaps.** Requirements with no verifying test, or tests with no requirement, and the VSR claims 100% coverage anyway. The traceability matrix and the report disagree. (See [user requirements and traceability](/articles/user-requirements-and-traceability).)

**System used before the VSR was approved.** GxP data created during the gap between go-live and the signed release decision. Either the data is unvalidated or the report is backdated, and both are serious. The effective date in the VSR must not precede the QA approval date unless there is a documented, justified interim arrangement.

**VSR conflated with VMP.** The report summarizes against the master plan rather than the system's own validation plan and requirements, so scope and conclusion do not align.

**Test failures reclassified to make the numbers look clean.** A genuine functional failure relabeled "documentation error" or "cosmetic" to avoid a retest. Reclassification of failures without sound technical justification is an integrity finding, not just a quality one. (See [validation test failure management](/articles/validation-test-failure-management).)

**Approval by the wrong authority.** The report approved only by the project team or only by the owner, with no independent quality unit sign-off, or QA signing without evidence they actually reviewed the deviations.

**Stale conditions never closed.** Open items carried as conditions of release that are still open a year later with no follow-up. The conditions become permanent gaps. Conditions need owners, due dates, and tracking to closure.

---

## Interview-ready

The questions you will get, and how to answer them well.

**"What is the difference between a VMP and a VSR?"**
The VMP is a program-level strategy document that governs how many systems get validated across a site. The VSR is a project-level report that concludes a single validation effort, summarizing results and deviations and authorizing release for that one system. A VSR maps one to one to a validation plan, not to the VMP.

**"What does a validation summary report contain?"**
Identification, scope and intended use, references, the approach actually used, a summary of executed deliverables and results, a full deviation summary with dispositions, outstanding items and residual risk, a fitness-for-intended-use conclusion, and approval signatures including the quality unit.

**"Who has the authority to release a system into GxP use?"**
The quality unit. Owners and SMEs attest to readiness and correctness, but the QA approval is the gating signature, grounded in the quality unit's responsibilities under 21 CFR 211.22. For EU GMP, fitness for intended use is the Annex 11 expectation.

**"You have an open deviation at the time of release. What do you do?"**
You do not pretend it is closed. You either delay release until it is closed, or you release with it documented as an explicit condition: stated risk, justification for why release is acceptable, a compensating control, an owner, and a due date, with the residual risk accepted at the appropriate level. The conclusion becomes "fit for intended use with conditions," not an unqualified pass.

**"What is residual risk and who accepts it?"**
Residual risk is the risk that remains after the validated controls are in place. Validation never reaches zero risk. It is accepted by name by someone with appropriate authority, typically senior QA for high residual risk, with a documented rationale: the risk, why it remains, the compensating control, and the impact if it materializes.

**"How do you know the VSR is complete and correct?"**
Every requirement is traced to a verified, passing result or a justified exception; every deviation has a root cause and disposition; the conclusion reconciles to the actual evidence; residual risk is stated and accepted; release criteria are met or carried as justified conditions; and the QA approval date is on or before the effective go-live date.

**"What is the relationship between CSA and the VSR?"**
Computer software assurance, per the FDA's guidance, changes the depth and form of evidence behind the report, favoring risk-based assurance and unscripted or limited testing for lower-risk functions. It does not remove the need for a documented conclusion of fitness for intended use and a recorded release decision. (See [computer software assurance fda](/articles/computer-software-assurance-fda) and [software supplier assessment](/articles/software-supplier-assessment-csa).)

**"Can a system be used before the VSR is signed?"**
As a rule, no. GxP use should begin after the documented release decision. Any interim use requires a documented, justified arrangement, and the report's effective date must not silently precede QA approval.

---

## Practical tips

- Write the residual-risk and deviation sections first, not last. They are the hard part and they shape the conclusion. Everything else is mechanical.
- Keep a live deviation log during execution so the VSR is a compilation, not an archaeology project. Reconstructing deviations at the end is where errors and omissions creep in.
- Reconcile the traceability matrix before you draft the conclusion. Most "100% coverage" claims that fall apart in audit fall apart here.
- Make the conclusion sentence binary and explicit. "Fit for intended use, subject to conditions in Section 8" is defensible. "Generally meets requirements" is not a conclusion.
- Put owners and due dates on every open condition, and feed them into a tracking system so they actually close. An open condition with no owner is just an unmanaged gap.
- Never let the QA approval date land after go-live. Build the routing so the gating signature comes before the effective date, and capture both.
- Link the VSR to change control so the release is traceable and any future change starts from a known validated state. (See [change control for validated systems](/articles/change-control-validated-systems).)
- Match the report's depth to the system's risk. A Category 1 infrastructure component does not need the same report weight as a Category 5 custom application. Proportionality is defensible; one-size-fits-all is wasteful and, paradoxically, less credible.

---

## Related reading

- [Validation deliverables guide](/articles/validation-deliverables-guide)
- [Validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review)
- [Writing validation protocols and reports](/articles/writing-validation-protocols-and-reports)
- [Validation test failure management](/articles/validation-test-failure-management)
- [User requirements and traceability](/articles/user-requirements-and-traceability)
- [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology)
- [Change control for validated systems](/articles/change-control-validated-systems)
- [GAMP 5 CSV framework](/articles/gamp5-csv-framework)
- [Computer software assurance (FDA)](/articles/computer-software-assurance-fda)
- [Project managing validation](/articles/project-managing-validation)
