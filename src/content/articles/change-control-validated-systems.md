---
title: "Change Control for Validated Systems: What Triggers Revalidation and How to Manage It"
description: "How to manage change in a validated environment: impact assessment, revalidation scope, documentation, roles, and the difference between changes that need full revalidation and those that need a brief confirmation test."
pubDate: 2026-01-14
tags: ["change control", "CSV", "validation", "GxP", "revalidation"]
tier: "Intermediate"
pillar: "csv-csa"
---

Change control is the process that keeps validated systems in a validated state. A system that passed its original qualification in 2022 and has since had twelve software updates, three configuration changes, two interface modifications, and a server migration is not a validated system unless each of those changes was assessed and handled correctly.

This is one of the most common validation failures found in inspections across pharma, biotech, and medical device manufacturers: a system was once validated, but the ongoing change management was not maintained. The original validation documentation is perfect. The system in production looks nothing like what the validation was done on. The gap between the two is exactly where inspectors look, because that gap is where data integrity quietly erodes.

The regulatory expectation is explicit. EU Annex 11 (Computerised Systems), section 10, states that any changes to a computerised system including system configurations should only be made in a controlled manner in accordance with a defined procedure. FDA's predicate rules, including 21 CFR 211.68 for automatic, mechanical, and electronic equipment and 21 CFR 211.100 for written procedures, carry the same intent: you must control changes to systems that affect product quality and data reliability. For medical devices, 21 CFR 820.70(i) requires validation of software changes and documentation of the validation, and the design control rule at 21 CFR 820.30(i) requires documented change control for design changes. GAMP 5 (A Risk-Based Approach to Compliant GxP Computerized Systems, Second Edition, 2022) places change and configuration management among the operational processes that sustain a system across its life, not a one-time event at go-live. The unifying principle from ICH Q10 (Pharmaceutical Quality System, 2008) is that change management is one of the four elements that keep a system in a state of control after launch.

> EU Annex 11, Section 10: "Any changes to a computerised system including system configurations should only be made in a controlled manner in accordance with a defined procedure."

---

## What Constitutes a Change to a Validated System

Any modification to the validated state of a system requires a change control record. A change to the validated state means any change to:

- The software (version, patch, hotfix, configuration setting, custom code)
- The hardware (server, client, peripheral devices, storage)
- The operating system, database, virtualization layer, or middleware
- Validated interfaces with other systems
- User roles and permission matrices, if roles affect GxP functions
- Data retention, archival, or backup configuration
- The use context (new user population, new intended use, new data types, new business process)
- The operating environment (moving to a new server, migrating to cloud, changing a hosting region)

Changes that do not require a change control record are those entirely outside the GxP scope of the system: changing the display language on a non-regulated screen, modifying a non-GxP report template, updating a user's email address. The boundary is the GxP scope you defined during validation, which means a thin or vague scope statement comes back to bite you here. If your validation never established which functions are GxP-relevant, you cannot defensibly argue that a given change falls outside that scope.

When in doubt, open a change control record. An unnecessary change control is administrative overhead. A GxP change without documentation is a regulatory finding. The asymmetry of consequences should settle most borderline calls.

A worked example. A chromatography data system used for release testing receives a vendor patch described as fixing a printing defect. On the surface this is a cosmetic fix. The impact assessment, however, reveals the patch also touches the reporting engine that generates certificates of analysis. Printing and reporting share code. The change is no longer trivial, because a change to how results are rendered on a CoA is a change to a GxP output. The lesson: the requestor's description of a change is a starting hypothesis, not the impact assessment.

---

## The Anatomy of a Change Control Record

Before the analysis, get the record itself right. An inspector who pulls a change control expects to find specific fields, and a missing field is a quick finding. A defensible change control record contains, at minimum:

| Field | What it holds | Why it matters |
|---|---|---|
| Unique ID | e.g., CC-2026-0142 | Traceable, searchable, cross-referenced from deviations and CAPAs |
| Title and description | What is changing, in plain language | The reviewer must understand the change without a meeting |
| System and configuration item | The validated system and the specific component affected | Ties the change to a baseline |
| Reason for change | Defect fix, upgrade, security patch, new requirement, obsolescence | Distinguishes proactive from reactive, supports trending |
| Requestor and date | Who raised it, when | Attributable, contemporaneous |
| Risk and impact assessment | The analysis (see next section) | The analytical heart of the record |
| Change category | Minor / Major / Significant (or your tier scheme) | Sets the default path and approvers |
| Implementation plan | Steps, sequence, who does what, rollback plan | Shows the change was thought through before it was made |
| Test plan and acceptance criteria | What will be verified, what counts as pass | Prevents test-to-pass after the fact |
| Approvals (pre-implementation) | Signatures with dates, QA among them | Demonstrates approval preceded implementation |
| Implementation record | Who implemented, when, deviations encountered | Proves the plan was followed |
| Verification/test evidence | Executed protocols, results, reviewer sign-off | Demonstrates the change did not break validated functions |
| Baseline update | Reference to the updated configuration baseline | Closes the loop to the as-is state |
| Closure | QA closure signature and date | Confirms all actions complete before close |

The two dates an inspector mentally subtracts are the **approval date** and the **implementation date**. If implementation precedes approval, you have an uncontrolled change regardless of how good the rest of the record looks. Build the form and the workflow so that sequence is enforced, not just hoped for.

---

## The Impact Assessment

The impact assessment is the core analytical step of the change control process. It evaluates what the proposed change affects in the validated system, and it is the document an inspector reads first to judge how well your change control program actually reasons.

**Impact assessment questions:**

1. What GxP functions does this change potentially affect? Review the validated functions list from the URS, FRS, or requirements traceability matrix and identify any that could be affected. This is why the [traceability matrix](/articles/validation-deliverables-guide) earns its keep long after go-live: it tells you, change by change, which requirements a modification touches. The way you built it is covered in [user requirements and traceability](/articles/user-requirements-and-traceability).

2. Is the change within the validated design space? A software patch addressing a security vulnerability in the operating system, with no changes to application functionality, may be within the validated design space if the validation documentation captures the relevant application behaviors and those have not changed.

3. What are the risks associated with the change? Consider unintended effects on validated functions, data integrity risks during the transition itself, the chance of configuration drift, and any effect on the [audit trail](/articles/audit-trail-design-and-review) or electronic records.

4. What testing is needed to verify the change does not adversely affect validated functions, and what evidence will demonstrate that?

The assessment should be specific. A statement that reads "this change does not affect GxP functions" with no analysis of which functions were considered is not an impact assessment, it is an assertion. Tie the conclusion to the functions you examined and the reason each is or is not affected.

**Impact assessment output.** One of three conclusions:

- **No impact.** The change does not affect validated functions. Document the assessment and proceed. No revalidation testing needed.
- **Low impact.** The change may have limited effects on non-critical functions. Verification testing is required for the affected areas. No full revalidation.
- **High impact.** The change affects critical GxP functions or core system architecture. Revalidation testing is required for the affected functions.

A useful discipline is to drive the assessment with [risk management](/articles/quality-risk-management) thinking rather than category labels alone. Severity (what happens if the change introduces a defect) and probability (how likely the change is to introduce one, given how it was developed and tested upstream) together set the testing depth. A vendor-validated patch to a mature, widely deployed product carries different residual risk than a custom configuration change a contractor wrote last week. This is also where the modern [Computer Software Assurance](/articles/computer-software-assurance-fda) thinking applies: the FDA CSA guidance (draft September 2022, finalized 2024) asks you to put assurance effort where the risk to patient safety and product quality is highest, and to use lighter, justified methods such as unscripted or ad hoc testing where the risk is low. A low-risk change does not need a heavyweight scripted protocol to be defensible.

### A worked impact assessment

Below is a filled-in fragment for a single change, the kind of specificity an inspector wants to see instead of a one-line conclusion.

**Change:** Upgrade of a LIMS from v8.2 to v8.4 (minor version, vendor release).

| GxP function (from RTM) | Affected by upgrade? | Basis | Testing required |
|---|---|---|---|
| Sample login and chain of custody | No | Release notes show no change to login module | None |
| Result entry and significant-figure rounding | Yes | Release note item 4.1 changes the rounding engine | Regression test rounding across boundary values |
| Specification evaluation / OOS flagging | Yes | Depends on rounded result | Verify OOS triggers at spec limits with known data |
| Audit trail capture | No | No change noted; verify by spot check | Confirmatory check only |
| Electronic signature on approval | No | No change noted | None |
| CoA report generation | Yes | Report templates re-rendered by new engine | Compare CoA output before/after for a known sample |

The conclusion writes itself from the table: targeted regression on rounding, OOS flagging, and CoA output, plus confirmatory checks on audit trail and e-signature. That is a scope you can defend, line by line, against any challenge.

---

## Categorizing Changes

Most facilities categorize changes into tiers to streamline the process. Tiers are a planning aid, not a substitute for the impact assessment. The category sets the default path; the assessment can always escalate a change to a higher tier when it finds more than expected.

**Category 1 (Minor).** Changes with no GxP impact or minimal, well-understood effects on non-critical functions. Examples: adding a user account, updating a report header, patching a third-party library with no application-level impact, correcting a typo in a screen label. Review process: change requestor and QA review, brief impact assessment, no testing required, expedited approval. Often processed within days.

**Category 2 (Major).** Changes affecting non-critical GxP functions or the interface between the validated application and infrastructure. Examples: a new report template that generates data exports, a configuration change to user permissions for a non-critical function, a new integration point with a non-critical system. Review process: change requestor, IT, validation, and QA review, full impact assessment, targeted revalidation testing, standard approval process. Typically two to four weeks.

**Category 3 (Significant).** Changes affecting critical GxP functions, core application behavior, or system architecture. Examples: major software version upgrade, changes to audit trail configuration, a new critical interface, database migration, a change to the electronic signature workflow. Review process: full cross-functional review, formal impact assessment, revalidation testing comparable to original validation scope for the affected functions, QA approval required before implementation. Typically four to twelve weeks depending on scope.

The table below summarizes the practical differences.

| Dimension | Category 1 (Minor) | Category 2 (Major) | Category 3 (Significant) |
|---|---|---|---|
| GxP impact | None or trivial | Non-critical functions | Critical functions or architecture |
| Reviewers | Requestor, QA | Requestor, IT, validation, QA | Full cross-functional, QA sign-off mandatory |
| Testing | None | Targeted, affected areas | Revalidation for affected functions |
| Typical timeline | Days | 2-4 weeks | 4-12 weeks |
| Example | User account, screen label fix | New export report, permission change | Version upgrade, audit trail config change |

One caution on tiers. Categories speed the routine and the obvious. They become a trap when people categorize first and assess second, downgrading a change to fit the fast lane. Make the impact assessment the gatekeeper of the category, not the other way around. The category is a prediction; the assessment is the verdict.

---

## Roles and Responsibilities

Change control fails most often at the seams between functions, so the responsibilities have to be unambiguous. The split below is typical; the titles vary by organization, but the duties do not.

| Role | Responsibilities in change control |
|---|---|
| Change requestor / initiator | Raises the change, describes it accurately, provides the technical reason and any vendor documentation |
| System owner / process owner | Owns the business and GxP context, confirms intended use and criticality, accepts residual risk |
| System administrator / IT | Plans and executes the technical implementation, prepares the rollback plan, updates infrastructure records |
| Validation / CSV lead | Performs or reviews the impact assessment, defines revalidation scope, writes and executes test protocols |
| Quality Assurance | Reviews the assessment and scope for adequacy, approves the change before implementation, approves closure |
| Vendor / supplier (where applicable) | Provides release notes, regulatory support packages, and patch documentation under the [supplier qualification](/articles/supplier-vendor-qualification) and quality agreement |

A few rules that keep the seams clean. QA approval is required before implementation for anything above the trivial tier, and QA approval is required for closure in all tiers. The person who implements a change should not be the only person who verifies it; independent review of test evidence is the expectation. The system owner, not IT, owns the decision on intended use and criticality, because that decision drives the whole assessment. For how these duties map across the broader organization, see [GxP roles and responsibilities](/articles/gxp-roles-responsibilities).

---

## Revalidation Scope Determination

Revalidation scope should be driven by the impact assessment, not by assumptions. The assessment should identify specifically which validated functions are potentially affected, and testing should cover those functions. The two failure modes here are opposite and equally common: retesting everything (expensive, slow, and a sign you do not understand your own system) and retesting nothing (a finding waiting to happen). The defensible middle is risk-targeted scope you can justify in writing.

**For software version upgrades.** Request the software vendor's release notes. Identify all functional changes in the new version. Map each change against the validated functions list. Functions unchanged in the new version may not require retesting. Functions that changed, were added, or were modified by the upgrade require testing. Where release notes are vague, push the vendor for detail; an upgrade you cannot scope is an upgrade you cannot safely take.

For major platform upgrades, the vendor may offer a regulatory support package with qualification documentation for the new version. Review it on its merits. If it addresses your critical functions and the testing it describes is relevant to your configuration, you can rely on it and supplement with site-specific testing only where your use diverges from the vendor's. Vendor documentation supplements your validation; it does not replace your responsibility for the system as you configured and use it. This is the supplier-reliance approach GAMP 5 endorses, and it is the same logic behind [supplier qualification](/articles/supplier-vendor-qualification) and the [software supplier assessment](/articles/software-supplier-assessment-csa): the more credible the vendor's quality evidence, the less you duplicate.

**For configuration changes.** Test the specific function affected. If you changed the audit trail settings for one module of a LIMS, test that module's audit trail. Do not retest the entire LIMS. Scope the test to the configuration item and its immediate dependencies.

**For interface changes.** Test the interface in both directions, data flowing in and data flowing out. Verify data integrity through the interface: values do not change, units and metadata are preserved, rounding behaves as expected, and error handling works when the interface receives malformed or out-of-range data. Interfaces are where silent corruption hides, because a value that transfers wrong but plausible is far harder to catch than one that fails outright.

A practical heuristic for the senior reviewer: ask whether the change touches anything an inspector would call a critical data quality attribute, the ALCOA+ properties of attributable, legible, contemporaneous, original, and accurate records. If it does, the change is Category 3 by default and the burden is on the assessment to argue it down, not up. For the underlying principles, see [data integrity foundations](/articles/data-integrity-foundations) and [ALCOA+ in detail](/articles/alcoa-plus-deep-dive).

### Acceptance criteria for a revalidation effort

You know the revalidation was done correctly when all of the following hold. Treat this as the closure checklist.

- Every validated function the impact assessment flagged as affected has executed test evidence with a documented pass.
- Test cases include challenge and boundary conditions, not just the happy path (for example, a value exactly at a specification limit, an out-of-range input, a rejected electronic signature).
- Any test failures were managed through [validation test failure management](/articles/validation-test-failure-management), with root cause and resolution recorded, not silently re-run until green.
- The audit trail and electronic records still behave as required after the change (verified, not assumed).
- The configuration baseline is updated to the new state.
- Pre-implementation approval dates precede the implementation date; closure follows all testing.
- The change control references, and is referenced by, any related deviation or CAPA.

---

## Emergency Changes

Sometimes a change must be implemented immediately, before the full change control process can be completed. Security patches, critical bug fixes, and infrastructure failures may require emergency implementation.

The correct approach to emergency changes:

1. Implement the change with the minimum necessary QA oversight, with verbal or email approval from QA documented at the time.
2. Open a change control record immediately, the same day or the next day at the latest.
3. Complete the full impact assessment retrospectively.
4. Perform any required testing as rapidly as possible.
5. Close the change control record normally.

Emergency changes do not bypass the process. They reorder it by necessity, deferring the analysis and testing rather than skipping them, and then complete it as quickly as possible. An emergency change documented only as "emergency implementation, approved verbally" with no subsequent impact assessment or testing is not a controlled change, it is an uncontrolled change with a label on it.

Two refinements keep the emergency path honest. First, define in the procedure what qualifies as an emergency, so the route cannot be used to skip the queue for ordinary work. A backlog is not an emergency. Second, track emergency changes as a metric and review the trend. A facility that routinely runs changes through the emergency path is telling you its normal change process is too slow to be used, which is its own quality-system problem worth fixing at the root rather than working around. Where the emergency change overlaps IT-managed infrastructure, the handshake with the IT process is covered in [IT change and configuration management](/articles/it-change-and-configuration-management-gxp).

---

## Configuration Baseline Management

Maintaining a configuration baseline means knowing the exact configuration of the validated system at any point in time: software version, patch level, OS version, database version, application configuration settings, user roles, and integration configurations.

The configuration baseline is established during IQ and updated with each change control. At any point you should be able to answer one question: what is the current validated configuration of this system? If you cannot answer it quickly and with evidence, the rest of your change control program is built on sand, because you have no fixed reference to assess changes against.

Configuration baselines are reviewed during periodic review and during the impact assessment for proposed changes. If you do not know what the current baseline is, you cannot assess the impact of a change against it. The baseline and the change log are two views of the same truth: the baseline is the present state, and the change log is the sequence of controlled steps that produced it from the as-qualified state.

A simple baseline record makes this concrete. The point is not the format; it is that the values are real, dated, and traceable to the change controls that produced them.

| Configuration item | As-qualified (IQ) | Current value | Last changed by |
|---|---|---|---|
| Application version | 8.2.1 | 8.4.0 | CC-2026-0142 |
| Database engine | 14.6 | 14.9 | CC-2026-0098 |
| Operating system | Server 2019, patch level Jan-2025 | Server 2019, patch level Mar-2026 | CC-2026-0177 (security) |
| GxP user roles defined | 6 | 7 (added Reviewer-QC) | CC-2026-0153 |
| Interface to data historian | v2 (read-only) | v2 (read-only) | unchanged since IQ |

**For cloud and SaaS systems.** Configuration baseline management is harder because the vendor controls system updates and can change the platform underneath you on the vendor's schedule. The vendor agreement must specify notification requirements before updates take effect, and the system owner must have a defined process to assess those updates in time to act. An automatic cloud update that changes validated functionality without notification is a significant validation gap, and the controls for it belong in the [vendor quality agreement](/articles/cdmo-oversight-quality-agreements) and the [cloud and SaaS validation](/articles/cloud-saas-validation) approach. The shared-responsibility model means some configuration items are yours and some are the vendor's; the baseline document should state which is which, so a change on either side has a clear owner.

---

## Change Control and Periodic Review

Periodic review, typically annual, confirms the validated system is still in its validated state. One of the primary periodic review activities is reviewing all change controls executed since the last review, confirming:

- All changes were documented in the change control system
- Impact assessments were completed for each change
- Required testing was completed and documented
- The configuration baseline has been updated for each change

If the periodic review finds changes that were implemented without change controls, those must be assessed retrospectively. In some cases they may require retroactive validation testing, the approach in [retroactive validation of legacy systems](/articles/retroactive-validation-legacy-systems). In all cases they must be documented as deviations and run through [deviation management](/articles/deviation-management) and, where the root cause is systemic, [CAPA](/articles/what-is-a-capa).

A periodic review that finds zero changes over a year is suspicious, not reassuring, unless the facility can demonstrate that no changes actually occurred. Systems running unchanged for years, with no patches, no configuration updates, and no user changes, are unusual. In practice they often mean changes happened off the record rather than that none happened, and that is precisely the pattern a thorough reviewer chases down. The wider periodic review program is covered in the [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review) article.

---

## Change Control for Manufacturing Processes and Equipment

Change control in the CSV context applies to computerized systems. The same logic applies to manufacturing processes and equipment, governed by the process validation program rather than the computer system validation program. The vocabulary differs, but the question is identical: does this change move the system outside the conditions you proved acceptable?

**Process changes that trigger reassessment or revalidation:**

- Changes to critical process parameters or their operating ranges
- Changes to a raw material supplier or specification
- Equipment modifications affecting product contact or a critical process function
- Scale changes, in either direction
- Changes to manufacturing site, that is, technology transfer
- Changes to a cleaning procedure, which trigger a cleaning validation reassessment

For process changes, the impact assessment evaluates whether the change is within the established design space, as defined during process development and validation, or outside it. ICH Q8(R2) (Pharmaceutical Development, 2009) frames the design space as the established multidimensional combination of input variables and process parameters demonstrated to provide assurance of quality; movement within it is not considered a change requiring regulatory action, while movement out of it normally does. Changes within the design space may be implementable through a normal change control without additional batch manufacturing under new conditions. Changes outside the design space require additional process validation work. ICH Q12 (Technical and Regulatory Considerations for Pharmaceutical Product Lifecycle Management, 2019) extends this thinking to the regulatory commitments side, through established conditions and post-approval change management protocols, so the same change is managed consistently across both the quality system and the marketing authorization. See [process validation lifecycle](/articles/process-validation-lifecycle) and [ICH Q12 lifecycle management](/articles/ich-q12-lifecycle-management) for the fuller treatment.

For medical device manufacturers, the analogous discipline lives in design controls. A change to a released design is a design change under 21 CFR 820.30(i), and changes to device software require validation under 21 CFR 820.70(i). The same risk question applies, framed through ISO 14971: does the change introduce or alter a hazard, and has the risk been re-evaluated. See [design controls for medical devices](/articles/design-controls-medical-devices).

---

## What Inspectors Look For in Change Control

FDA and EU GMP investigators request change control records for recent changes and for changes associated with any deviations or out-of-specification results under investigation. The connection is deliberate: a change made shortly before a result went wrong is the first thing a good investigator examines. They look for:

**Completeness of change documentation.** Is there a change control record for every change that occurred? Do the records identify what changed, when, why, who approved it, and what testing was done?

**Quality of impact assessment.** Does the impact assessment actually evaluate GxP function impact, or is it a generic statement? A conclusion of no GxP impact without analysis of which functions were assessed is not a defensible impact assessment.

**Testing appropriate to the risk.** For significant changes to critical functions, is there testing evidence? For minor changes, is the rationale for reduced testing documented and reasonable?

**Closure and implementation sequence.** Were changes implemented after approval, not before? Were all required tests complete before the change was closed? An implementation date that precedes the approval date is a finding on its face.

**Configuration baseline currency.** Does the current validated configuration documentation match what is actually running? Investigators sometimes verify this directly, pulling up the live system version and comparing it to the documented baseline.

A change control system missing entries for half the changes that actually occurred tells an inspector that the validation program is not functioning. That is often a more serious finding than any single change implemented without documentation, because it speaks to the state of control over the whole system rather than one lapse. Inspection citations in this area frequently trace back to inadequate procedures for, or failure to follow, controls over computerized systems and changes to them, the predicate-rule expectations behind Annex 11 and 21 CFR 211. The defense is not perfection on any one change; it is a program that consistently catches, assesses, tests, and records changes, and a baseline that matches reality. For how this fits the wider quality system, see [change control within the pharmaceutical quality system](/articles/pharmaceutical-quality-system) and the [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11) requirements that underpin it.

### Common mistakes and finding patterns

These are the recurring patterns behind change-control citations. None name a company; all are generic to the discipline.

- **Retroactive change controls.** A record opened after the change was already live, with the dates arranged to look prospective. Investigators compare the implementation evidence (server logs, version stamps) to the approval date.
- **Boilerplate impact assessments.** The same "no GxP impact" sentence copied across many changes with no function-by-function analysis. A copy-paste assessment is treated as no assessment.
- **Scope creep inside one change.** A change control approved for "upgrade to v8.4" that quietly also reconfigured user roles and an interface. One change control, one defined scope; bundle and you cannot tell what was tested for what.
- **Emergency path overuse.** A large fraction of changes routed as emergencies, signaling the normal process is unusable.
- **Stale baseline.** The documented configuration does not match the live system. The system shows v8.4; the baseline still says v8.2.
- **Test-to-pass.** Failures re-run until they pass with no failure investigation, instead of being handled through [validation test failure management](/articles/validation-test-failure-management).
- **Orphaned changes.** Changes made directly by an administrator (a hotfix, a permission tweak) that never entered the change control system at all, surfacing only at periodic review or when an inspector compares logs.
- **Closed without testing complete.** The record is closed but the test evidence referenced is incomplete or post-dates closure.

---

## Interview-Ready: Questions and How to Answer Them

These come up in CSV, validation, and quality interviews, and the same questions are asked verbatim by inspectors during an audit. Strong answers are specific and show you reason from risk, not from a checklist. For broader prep, see [GxP quality interview preparation](/articles/gxp-quality-interview-preparation).

**Q: What triggers revalidation versus a simple verification test?**
The impact assessment does, not the change category by itself. A change to a critical GxP function or to system architecture (audit trail config, e-signature workflow, a major version upgrade, a database migration) defaults to revalidation of the affected functions. A change to a non-critical function or a well-understood low-risk patch needs targeted verification of the affected area. The deciding factor is which validated functions the change touches and the residual risk after upstream development and testing.

**Q: A vendor pushes a patch labeled "minor printing fix." How do you handle it?**
I treat the label as a hypothesis, not a conclusion. I open a change control, read the release notes, and map the patch against my validated functions list. If the patch touches anything that renders or reports GxP data, such as the reporting engine behind a CoA, it stops being trivial and gets verification testing on those outputs. The requestor's description never replaces the impact assessment.

**Q: How do you scope testing for a major version upgrade without retesting the whole system?**
I get the vendor release notes, identify every changed, added, or removed function, and map each against my requirements traceability matrix. Unchanged functions generally do not need retesting; changed or new functions do. If the vendor provides a regulatory support package, I evaluate it against my critical functions and configuration and supplement only where my use diverges. I document the scope rationale so it is defensible. Retesting everything signals I do not understand my own system; retesting nothing is a finding.

**Q: Walk me through your emergency change process.**
Implement with minimum necessary QA oversight and documented verbal or email approval at the time, open the change control no later than the next day, complete the impact assessment and required testing retrospectively, then close normally. The analysis and testing are deferred, never skipped. I also define in the SOP what qualifies as an emergency and trend emergency-change frequency, because heavy use means the normal process is too slow.

**Q: How do you know your system is still in a validated state today?**
The configuration baseline tells me the exact current state, and the change log is the controlled sequence that produced it from the as-qualified state. Every change since go-live has an assessed, tested, approved record, and the baseline matches what is actually running. Periodic review confirms it annually. If I cannot answer "what is running right now" with evidence, the program is not in control.

**Q: An inspector finds a change that was made without a change control. What do you do?**
Document it as a deviation, perform the impact assessment retrospectively, and run any testing the assessment requires, up to retroactive validation if the function is critical. If the gap is systemic rather than a one-off, open a CAPA to fix the process that let it happen. I do not argue it away; I show the system can catch and remediate its own gaps.

**Q: What is the difference between change control and configuration management?**
Change control is the decision-and-approval process for making a change. Configuration management is the record of what the system is at any point in time. Change control produces the controlled steps; configuration management holds the resulting state. They are two views of the same truth, and a healthy program keeps both current and reconciled.

---

## Practical Tips

- Build the change control form so approval must precede implementation in the workflow, not as a manual instruction people can ignore.
- Keep the impact assessment tied to the requirements traceability matrix. The RTM is what makes "which functions are affected" answerable in minutes instead of guesswork.
- Treat the configuration baseline as a living document with a single owner, reconciled to the live system at least at every periodic review.
- For cloud and SaaS, negotiate update-notification timelines into the contract before go-live; you cannot assess a change you find out about after it ships.
- Trend your change data: volume by category, emergency-change rate, time-to-close, and changes linked to deviations. The trends tell you whether the process is healthy long before an inspector does.
- Right-size the assurance effort to risk, in the spirit of the CSA guidance. A low-risk change does not earn a heavyweight scripted protocol; a high-risk change to a critical function does.

Related reading: [GAMP 5 framework](/articles/gamp5-csv-framework), [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology), [validation deliverables guide](/articles/validation-deliverables-guide), [IT change and configuration management](/articles/it-change-and-configuration-management-gxp), and [audit trail design and review](/articles/audit-trail-design-and-review).
