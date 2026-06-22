---
title: "Operating Validated GxP Computerized Systems: What Happens After Go-Live"
description: "The operational controls that keep a GxP computerized system in a validated state after go-live: handover, support and service levels, incident management, change control, security, backup and recovery, periodic review, and retirement. Grounded in GAMP 5 and Annex 11."
pubDate: 2026-03-29
tags: ["CSV", "GxP", "computerized-systems", "validation", "operations", "GAMP"]
tier: "Intermediate"
pillar: "csv-csa"
---

Validation gets most of the attention in pharmaceutical quality documentation, conferences, and audits. But the validated state of a GxP computerized system is not a fixed achievement. It is a condition that has to be actively maintained across the entire operational life of the system. Most validation problems that inspectors find are not in the original qualification packages at all. They are in what happened to the system after go-live: the patch that was applied without an impact assessment, the new report template that nobody tested, the administrator account that still belongs to someone who left two years ago, the backup that was never test-restored.

This article covers the operational controls that keep a validated system in a validated state. It walks through how systems are handed over from the project team to operations, how support and service levels are structured, how incidents and changes are managed, how security is maintained, how backup and archiving differ, how periodic review actually works, and how a system is retired without orphaning its data.

For readers newer to the topic, the framing is simple: validation proves the system was fit for use at one point in time. Everything in this article is about keeping that statement true on every day that follows. For experienced readers, the value is in the boundaries: where an impact assessment is enough and where requalification is owed, what an inspector reads in your change log, and how to keep the operational record defensible when something goes wrong at 2 a.m. during a release window.

### Why this matters and where the requirements come from

The phrase "maintain the validated state" is not marketing language. It traces to specific clauses. EU GMP Annex 11 (2011) is the European requirement set for computerised systems. Its operational clauses are the spine of this article: clause 10 (change and configuration management), clause 11 (periodic evaluation), clause 12 (security), clause 13 (incident management), clause 7 (data storage and backup), and clause 17 (archiving). In the United States, the predicate rules in 21 CFR Parts 210 and 211 require that equipment, including computer systems, be maintained and that records be protected, accurate, and retrievable for their retention period; 21 CFR Part 11 (1997) adds the electronic records and electronic signatures layer. ISPE GAMP 5 Second Edition (2022) is the methodology that ties these together across the system lifecycle, and it explicitly treats operation and maintenance as lifecycle phases with their own deliverables, not an afterthought once the validation report is signed.

This applies across the regulated industries, not one modality. The same operational controls govern a Laboratory Information Management System (LIMS) in a small-molecule QC lab, a Manufacturing Execution System (MES) on a biologics line, an electronic Quality Management System used by a medical device maker under 21 CFR Part 820 / ISO 13485, a clinical Electronic Data Capture (EDC) platform run under ICH E6(R3), and a chromatography data system in a contract testing organization. The criticality and the rigor scale with GxP risk, but the control set is common.

---

## The Handover: From Validation to Operations

System handover is the formal transfer of a validated system from the project team that built and qualified it to the operational team that will run and maintain it. Done well, the people maintaining the system understand its validated state and the boundaries they have to work within. Done poorly, it leaves a gap between "here is a validation package" and "here is what you can and cannot do to this system in production."

The handover is also the moment when accountability moves. Up to go-live, the project owns the system. After go-live, the system owner and the quality unit own it. If that transfer is fuzzy, the system enters operations with nobody clearly responsible for its compliance, which is exactly the state inspectors notice.

### What the Handover Should Include

**Validation documentation transfer.** The complete, approved validation package (validation plan, qualification protocols, executed test results, the validation summary report, and supporting evidence) must be formally transferred, indexed, and stored where it can be retrieved. The operational team needs to know where it lives and what it contains. A validation summary report sitting on a project share that gets archived and forgotten six months later is not a transfer. See [Validation Summary Report and Release](/articles/validation-summary-report-and-release) for what closes out the project side of this.

**Configuration baseline documentation.** For configured commercial systems (GAMP Category 4), the configuration that was qualified is the baseline. The handover should record exactly which software version was qualified, the specific configuration settings, which workflows were activated, which calculations and reports were validated, and which interfaces were tested. This baseline is what every future change assessment compares against. See [GAMP 5 Second Edition](/articles/gamp5-csv-framework) for how the category drives the rigor.

**Requirements traceability.** The handover should include or point to the traceability matrix linking user requirements to the tests that verified them. When a future change touches a function, the operations team needs to find the requirement and the test that originally proved it, so they know what to re-verify. See [User Requirements and Traceability](/articles/user-requirements-and-traceability).

**Known issues and residual risks.** If deviations were accepted during qualification (tests that failed but were risk-assessed and accepted), those risks belong in the operational record. Future behavior that looks like a defect might be a known, accepted quirk, or it might be something genuinely new. The operations team has to be able to tell the two apart. The closure of those test failures is covered in [Validation Test Failure Management](/articles/validation-test-failure-management).

**Support and escalation contacts.** Who handles technical issues internally? Who is the vendor's support contact? What are the response commitments for critical issues? What is the escalation path if the system fails during a time-critical activity such as batch disposition?

**Approved use documentation.** What the system is actually validated to do. This matters the first time a user wants to add a new calculation, a new workflow, or a new report type. Anything outside the validated use scope needs change control before it touches GxP data.

### A handover checklist that holds up

A short handover record, signed by both the outgoing project lead and the incoming system owner, turns all of this from a hope into a record. A workable structure:

| Handover item | Evidence to confirm | Sign-off |
|---|---|---|
| Validation package transferred and indexed | Document IDs and storage location recorded | Project lead + system owner |
| Configuration baseline documented | Version, settings, active workflows, interfaces listed | System owner + administrator |
| Traceability matrix complete | All URS items traced to executed tests | Quality unit |
| Known issues / accepted deviations logged | Open items carried into operational risk register | Quality unit |
| Operational SOPs approved and effective | SOP IDs for change, backup, access, periodic review | System owner |
| Training delivered to operations staff | Training records for admins and users | System owner |
| Support and escalation model defined | Internal roles + vendor contacts + response times | System owner |

**Acceptance criteria for a good handover:** every row above is closed, the operations team can retrieve the validation package and the configuration baseline on request, and the operational SOPs needed to run the system (change control, backup, access management, periodic review) are approved and effective before, not after, the first production day.

**Roles.** The project lead is accountable for delivering complete and accurate documentation. The incoming system owner is accountable for accepting it and confirming readiness to operate. The quality unit reviews the transfer and confirms the operational controls exist. The system administrator confirms the technical handover (credentials, environments, monitoring).

**Common handover failures inspectors see:** the system went live before the operational SOPs were approved, so changes in the first months were managed informally; the configuration baseline was never documented, so no later change could be properly impact-assessed; accepted deviations from qualification were never carried into operations, so a known quirk later triggered a redundant investigation.

---

## Support Services and Service Level Management

Once in operations, the system needs a structured support model. This does not require complexity, but it does require clarity about who does what.

### Internal Support Structure

Every GxP computerized system should have at least two defined roles. These map directly to the responsibilities described in [GxP Roles and Responsibilities](/articles/gxp-roles-responsibilities).

**System owner (business owner).** The person or function accountable for the system's validated state and its use for GxP purposes. Usually in the function that uses the system (a QC lab manager for a LIMS, a manufacturing lead for an MES, a clinical operations lead for an EDC platform) with quality oversight. Responsibilities include approving changes, overseeing periodic review, owning audit findings about the system, and deciding whether unexpected behavior needs a deviation.

**System administrator.** The person or people responsible for technical operation: user account management, configuration management, backup verification, patch coordination. Often in IT. Responsibilities include implementing approved changes, managing access, generating audit trail reports, and working with the vendor on technical issues.

These roles should not be the same person for GxP-critical systems. Combining them removes the separation of duties that stops one individual from both making an unauthorized change and approving it. Where the organization is too small to fully separate the roles, the compensating control is independent review of changes by the quality unit, documented as an explicit control rather than an informal habit.

A useful way to keep responsibilities unambiguous is a small RACI for the recurring operational activities:

| Activity | System owner | Administrator | Quality unit | IT / vendor |
|---|---|---|---|---|
| Approve a change | A | R | C | I |
| Implement a change | A | R | I | R |
| Provision / remove an account | A | R | C | I |
| Backup execution and verification | A | R | I | R |
| Periodic review | R | C | A | I |
| Incident GxP impact assessment | A/R | C | C | I |

(R = responsible, A = accountable, C = consulted, I = informed.)

### Vendor Support Management

For commercial GxP software, the relationship with the vendor's technical support organization has to be managed formally.

**Support agreements.** Response commitments for critical, major, and minor issues. For systems supporting time-critical activities (batch release, real-time process control), the vendor's commitment for critical issues should match your operational risk tolerance, not the other way around.

**Version management.** Understand the vendor's product lifecycle. When does the current version reach end of support? When are major versions released? Running an end-of-life version means no bug fixes, no security patches, and eventually no support. The qualified version cannot stay in service forever, and the plan to move off it should exist before the deadline, not after.

**Defect notification.** Many GxP software vendors maintain a published defect and patch list. The system owner needs a standing process to review defect notifications and assess whether any known defect affects the validated use of the system. A vendor-disclosed calculation bug in a module you actually use is a data integrity question, not just an IT ticket.

**Vendor as a hosted-service provider.** For Software-as-a-Service and hosted systems, much of the operational control sits with the vendor, and your control becomes oversight plus a written agreement. The supplier qualification and the service agreement carry the controls you cannot run yourself. See [Cloud and SaaS Validation in GxP](/articles/cloud-saas-validation) and [Supplier and Vendor Qualification](/articles/supplier-vendor-qualification).

A useful way to keep vendor obligations visible is a small living table:

| Vendor obligation | What to confirm | Review cadence |
|---|---|---|
| Critical-issue response | Stated commitment vs. operational need | At contract renewal |
| Version support window | End-of-support date for the qualified version | Each periodic review |
| Defect / patch notification | Subscription active, owner assigned | Quarterly |
| Audit / inspection support | Vendor will provide records on request | At qualification, then renewal |
| Change notification (hosted systems) | Advance notice of vendor-side changes | Per agreement, confirmed each review |

---

## Incident Management

When something goes wrong with a GxP computerized system, the response matters for two reasons at once: operational continuity, and the GxP record of what happened. Incident handling for these systems sits alongside the broader [deviation management](/articles/deviation-management) process, and the two connect through impact assessment. Annex 11 clause 13 requires that incidents be reported, assessed, and that root cause be evaluated for critical ones.

### Classifying System Incidents

Not every problem needs the same response. A workable classification:

**Critical.** The system is unavailable or is generating data that cannot be trusted. A LIMS that will not accept results during an active release window. An MES that lost data mid-batch. An EDC system that recorded the wrong subject identifiers. These need immediate response, both to restore the system and to assess the GxP impact.

**Major.** The system is degraded, or a specific function is down, but GxP activities can continue with a workaround. An audit trail that has stopped recording. A report producing incorrect output for one configuration. These need investigation and resolution within a defined, short timeframe.

**Minor.** Cosmetic issues, non-critical failures, or performance degradation that does not touch GxP data quality. These go through the normal support queue.

### GxP Impact Assessment for Incidents

Every incident on a GxP-critical system needs a documented impact assessment that answers one question: did this affect any GxP data, and if so, which records and how?

The answer drives whether a deviation is opened. Two contrasting examples make the line concrete:

- The system was unavailable for two hours but no data already in it was altered, lost, or made unreadable. No GxP record was affected. Document the incident, restore service, close it.
- An audit trail silently stopped recording for eight hours while analysts were entering results. That is a data integrity event. It needs a deviation, a retrospective review of every record created in that window, and an assessment of whether those records can still be relied on. The audit trail gap means the normal evidence of who did what is missing, so the review has to reconstruct it from other controls. This is exactly the failure mode covered in [Audit Trail Design and Review](/articles/audit-trail-design-and-review).

The discipline that protects you here is writing the impact assessment at the time, not reconstructing it weeks later when an inspector asks.

### A worked incident record

A concrete example of what a closed critical incident looks like:

| Field | Entry |
|---|---|
| Incident ID | INC-2026-0142 |
| System | QC LIMS (commercial, GAMP Cat 4) |
| Detected | 2026-04-12 06:40, by night-shift analyst |
| Description | Result-entry screen rejected all submissions; database connection pool exhausted |
| Classification | Critical (release-window impact) |
| Immediate action | Switched to validated paper fallback (SOP-QC-118); analysts logged results on controlled forms |
| GxP impact | No existing records altered or lost; 14 results captured on paper during 2.5 h outage |
| Restoration | Connection pool reset by administrator; service confirmed at 09:10 |
| Reconciliation | 14 paper results transcribed into LIMS by 11:00, independently verified, paper retained as source |
| Deviation? | Yes (DEV-2026-0091) opened for the unplanned downtime and paper-to-system reconciliation |
| Root cause | Mis-sized connection pool after a prior config change; CAPA to add monitoring threshold |
| Closed | 2026-04-19, system owner + quality approval |

Notice what makes this defensible: classification matched the operational risk, the fallback was a validated procedure not an improvised one, the impact on existing records was assessed explicitly, the reconciliation preserved the paper as source data, and a deviation linked the incident to a CAPA. See [Root Cause Analysis Techniques](/articles/root-cause-analysis-techniques) and [What Is a CAPA](/articles/what-is-a-capa).

**Acceptance criteria:** every critical incident on a GxP system has a documented impact assessment, a clear yes/no on whether a deviation was opened, and traceability from incident to deviation to CAPA where applicable. The mean time to assess GxP impact is short and consistent, not "whenever someone got around to it."

### Workaround Procedures

For systems supporting critical activities, there should be documented fallback procedures for when the system is down: a paper-based route for recording results when the LIMS is offline, a manual batch record when the MES is unavailable. These workarounds are GxP records in their own right. The paper fallback has to meet the same ALCOA+ expectations as the system records it temporarily replaces, including how the manual data is later reconciled into the system once it is back. See [ALCOA+ in Practice](/articles/alcoa-plus-deep-dive) for what those attributes require, and [Hybrid Paper and Electronic Records](/articles/hybrid-paper-electronic-records) for the controls on the paper-to-system bridge.

**Common incident-handling findings:** an outage was logged as an IT ticket with no GxP impact assessment at all; an audit trail gap was noticed but never investigated for what records it affected; a paper fallback was used but the transcription into the system was never independently verified, so the system record and the paper diverged silently.

---

## Operational Change Management

Change management for validated systems in operation is, in practice, more consequential than the original validation. Changes to live systems are frequent, often time-pressured, and carry real risk to the validated state. The general principles are covered in [Change Control for Validated Systems](/articles/change-control-validated-systems); the configuration-management mechanics are in [IT Change and Configuration Management for GxP](/articles/it-change-and-configuration-management-gxp). This section focuses on the operational mechanics specific to a running validated system.

### The Impact Assessment as the Core Control

Every proposed change (a patch, a configuration edit, a new user role, a new report template, a workflow change) needs a documented impact assessment before it is implemented. The assessment asks:

1. **What is changing?** Describe the change precisely.
2. **Does it touch validated functionality?** If the system was qualified with specific configurations, does the change modify them?
3. **What is the GxP risk?** Could it affect data integrity, calculation accuracy, audit trail behavior, or electronic signature reliability?
4. **What testing is required?** Proportionate to risk. Not every change needs full requalification.
5. **What documentation has to be updated?** Configuration baseline, validation records, SOPs, training.

The risk-proportionate decision on test depth is where modern thinking has moved. The FDA Computer Software Assurance (CSA) guidance, issued as a draft in 2022 and finalized in September 2025 ("Computer Software Assurance for Production and Quality System Software"), pushes the same idea: spend test effort where the patient or product risk is, use unscripted and ad-hoc testing for lower-risk features, and reserve scripted testing for high-risk functions. For a change, that means a configuration edit to a low-risk display field is not tested the same way as a change to a calculation that feeds a release decision. See [Computer Software Assurance (CSA)](/articles/computer-software-assurance-fda) and [CSV Risk Assessment Methodology](/articles/csv-risk-assessment-methodology).

### Change Categories in Practice

| Category | Examples | Typical control |
|---|---|---|
| Minor (no qualification impact) | New user with an existing role; cosmetic report formatting; vendor patch scoped to non-GxP functionality | Change record + system owner approval; no new protocol |
| Major (qualification-affecting) | Changing a qualified workflow; adding an interface; modifying audit trail settings; major version upgrade | Documented impact assessment, testing proportionate to scope, updated validation records |
| Emergency | Critical security patch; correction of a defect affecting live GxP data | Abbreviated impact assessment and approval first, immediate implementation, retrospective testing and documentation |

The emergency path deserves a clear boundary. Abbreviated does not mean undocumented. An emergency change still gets an impact assessment and an approval before implementation, even if both are condensed, followed by full testing and documentation after the fact. The risk of not acting (an open security hole, an unstable system) is weighed against the risk of acting without complete prior paperwork. What is never acceptable is making the change first and inventing the justification later, or deferring it to "we'll catch it in the next periodic review."

### A worked change example

A vendor releases a point upgrade for a chromatography data system that, among other fixes, corrects a peak-integration edge case. Walk it through:

1. **What is changing:** application minor version, including a peak-integration fix and several non-GxP UI changes.
2. **Validated functionality touched:** yes, integration affects reportable results.
3. **GxP risk:** high, because integration feeds assay and purity results that drive release.
4. **Testing required:** scripted regression of integration against a set of known reference chromatograms with predetermined expected results; verification that existing methods reprocess identically where the fix does not apply, and predictably where it does; audit trail and e-signature spot checks.
5. **Documentation updated:** configuration baseline version bumped, validation record supplemented with the regression results, SOP unchanged, no retraining needed.

Acceptance: the upgraded system reproduces the reference results within predefined tolerance, the integration fix changes results only where the documented defect applied, and the audit trail captures the version change. The change is approved by the system owner with quality concurrence before promotion to production. See [Chromatography Data System Integrity](/articles/chromatography-data-system-integrity).

### Configuration Baseline Maintenance

For configured systems, the validated configuration is the reference point for every change. The baseline has to stay current:

- When a change is made, the configuration documentation is updated to reflect the new state.
- The validation record is supplemented with the change record and any new testing.
- The current system can always be compared to the documented baseline.

If you cannot say what configuration was qualified, you cannot assess whether a proposed change affects the validated state. The configuration baseline is not optional documentation. A practical test: pick a setting at random and ask whether the document says what it should be and whether the system actually matches. If those two diverge, change control has been bypassed somewhere.

**Common change-control findings:** patches applied directly to production with no test environment evidence; a configuration changed in the live system but the baseline document never updated, so the two drifted; a "minor" change that actually altered a calculation, miscategorized to avoid testing; emergency changes used as the routine path because the normal process was too slow, with retrospective documentation that never caught up.

---

## Security Management

GxP systems need the same security controls as any enterprise system, plus pharmaceutical-specific expectations around data integrity. The detailed treatment is in [CSV Cybersecurity and Access Control](/articles/csv-cybersecurity-access-control); the operational essentials follow. Annex 11 clause 12 requires controls to restrict access to authorized persons, and 21 CFR 11.10(d) requires limiting system access to authorized individuals.

### Access Control Maintenance

- User accounts are provisioned, modified, and deprovisioned through a documented process, with the trigger for deprovisioning (an employee leaving or changing role) tied to a reliable source such as the HR record.
- Role-based access gives users only the access their job requires.
- Privileged access (system administrator, quality administrator) is tightly controlled and its use is logged and reviewed.
- Shared and generic accounts are avoided. Annex 11 and Part 11 both depend on actions being attributable to a specific person; a shared "admin" login breaks attributability and is a frequent finding. Where a generic account is technically unavoidable, a compensating control logs who used it and when.
- Periodic access reviews confirm that current accounts still match current staff and roles. Orphaned accounts are one of the most common access findings inspectors raise.

A worked access-review snapshot, the kind of evidence an inspector asks to see:

| Account | Role | Last login | Status check | Action |
|---|---|---|---|---|
| jdoe | Analyst | 2026-05-18 | Active employee, role correct | None |
| asmith | Lab manager | 2026-05-20 | Active, role correct | None |
| mlee | Analyst | 2025-11-02 | Left company 2025-12-01 | Disable, document, investigate why not removed |
| svc_lims | Service account | n/a | System interface, owner confirmed | Confirm still needed, password rotated |
| admin2 | Administrator | 2026-03-30 | Active, privileged use logged | Confirm privileged actions reviewed |

The mlee row is the one that matters: an account live for months after the person left. The review both fixes it and triggers a question about why deprovisioning did not run, which may itself be a deviation.

### Patch Management

Operating system, database, and vendor application patches all go through a structured process:

- Security patches are applied promptly, but with a documented impact assessment and testing before production deployment.
- Patches are applied first to a test or qualification environment, confirmed not to affect GxP functionality, then promoted to production.
- Zero-day or actively exploited vulnerabilities follow an expedited but still documented route: abbreviated assessment, rapid confirmation of critical functions, full documentation after the fact.

A system that has not been patched in eighteen months because "change control is too slow for security patches" is two problems at once: a security exposure and a sign that the change process is not designed for the reality of operations. The fix is a pre-defined fast lane for security patches, not a habit of skipping the process.

### Audit Log Monitoring

For GxP systems the audit trail is not only a record, it is a detective control. Routine monitoring should look for:

- Access outside working hours that is not explained by scheduled activity.
- High-volume or bulk modifications that could indicate unauthorized data manipulation.
- Repeated failed logins, which may signal an access attempt.
- Activity on accounts that should be inactive.
- Changes to system clock or time settings, which can mask the true sequence of events. See [Time Stamps and System Clock Control](/articles/time-stamps-and-system-clock-control).

Review of the audit trail is itself a documented activity, with a defined frequency and a record of who reviewed what and what they found. The mechanics of doing this efficiently are in [Operationalizing Audit Trail Review](/articles/operationalizing-audit-trail-review).

---

## Backup and Recovery

Backup is the technical control. Recovery testing is what proves the backup works. Without recovery testing, a backup program is an untested assumption. The full treatment, including disaster recovery scenarios, is in [Backup, Restore and Disaster Recovery Validation](/articles/backup-restore-disaster-recovery-validation). Annex 11 clause 7.2 requires that data be secured by both physical and electronic means and that backup integrity and accuracy be checked.

### Backup Requirements

- All GxP data is in the backup scope, not just the application but the data it holds, including audit trail data and the metadata that gives records meaning.
- Backup frequency matches the criticality of the data: daily for systems generating release-critical results, less frequent for low-volume systems. The frequency should be justified against your recovery point objective, the maximum amount of data you can afford to lose.
- Backups are stored separately from the primary system, by physical separation, network isolation, or both.
- Media and storage are assessed for degradation and obsolescence risk. Tape degrades; cloud retention depends on the provider continuing to hold and return the data.

### Recovery Testing

Recovery testing should be performed at least annually:

- Restore the backup to a test environment, never over production.
- Confirm the restored data is complete and matches the expected state, including record counts and a sample of values.
- Confirm the restored system is functional.
- Document the test: what was restored, to what point in time, what was verified, who approved the result.

A worked recovery-test record:

| Field | Entry |
|---|---|
| Test ID | DR-2026-007 |
| System | MES (configured, GAMP Cat 4) |
| Backup restored | Full backup dated 2026-05-31, restore to isolated DR environment |
| Record count check | Source 48,213 batch-step records; restored 48,213 (match) |
| Value sample | 25 records compared field-by-field including timestamps and signatures; all match |
| Audit trail restored | Confirmed present and readable for sampled records |
| Functional check | Logged in, opened a sample batch record, audit trail recorded the access |
| Recovery time | 3 h 40 min (within RTO of 8 h) |
| Result / approval | Pass; system owner + quality, 2026-06-03 |

**Acceptance criteria:** restored record counts match source, a documented value sample matches including metadata, the system functions after restore, and the recovery time meets the stated recovery time objective. A backup program with no successful documented restore in the review period is treated as unproven.

When a real incident forces an actual restore from backup, that event serves as the recovery test for that period. Document it as such, with the same verification you would apply to a planned test.

### Archive and Long-Term Retention

Backup is not archiving. Backup is a recovery mechanism with a short horizon. Archiving is the long-term retention of GxP records for their full retention period, which for many pharmaceutical records runs to ten years or more, and for some record types longer. Annex 11 clause 17 addresses archiving specifically: archived data should be checked for accessibility, readability, and integrity, and any change to the system must preserve the ability to retrieve the archive.

For archived records:

- The format stays readable for the full retention period. Storing data in a proprietary format the vendor stops supporting in a decade is a problem you create today and discover later.
- Access is read-only. Archives are not modifiable.
- Retrieval is tested. The ability to find, open, and read archived records is demonstrated, not assumed.
- Metadata is preserved with the data: timestamps, audit trail content, and the context needed to understand the record. A result without its metadata is not a complete record. See [Data Lifecycle and Metadata](/articles/data-lifecycle-and-metadata) and [Static and Dynamic Records and True Copies](/articles/static-dynamic-records-true-copies).

When archiving a system at end of life, the migration into the archive is itself a controlled activity. See [Data Migration Validation](/articles/data-migration-validation) for how to prove nothing was lost or altered in the move.

---

## Periodic Review

Periodic review is the structured assessment of whether a validated system is still in a validated, fit-for-purpose state. It is not a formality. It is the quality system's ongoing oversight of the system between validations, and it is where the threads above (changes, incidents, access, performance) get pulled together and judged as a whole. The relationship between periodic review and the validation master plan is covered in [Validation Master Plan and Periodic Review](/articles/validation-master-plan-and-periodic-review). Annex 11 clause 11 requires periodic evaluation to confirm systems remain in a valid state and compliant.

### What Periodic Review Should Cover

**Change log review.** Every change since the last review. Confirm each went through change control, that the documented testing was actually performed, and flag any change that may warrant requalification beyond what was originally judged.

**Incident review.** Every incident since the last review. For each one with GxP impact, confirm the impact assessment was done and the response was appropriate. Look for patterns: the same incident recurring is a signal of an underlying problem, not a series of coincidences.

**Performance and reliability.** Uptime, error rates, backup success rates. Degrading performance is often the early warning of a failure that has not happened yet.

**Calibration and maintenance status.** For systems with hardware, confirm calibration is current and scheduled maintenance has been done. See [Calibration and Metrology Program](/articles/calibration-and-metrology-program).

**User access review.** Confirm the user list is current: no accounts for departed staff, no users with more access than their role requires.

**Current software version.** Confirm production is running the qualified version, and that the version is still supported by the vendor. If updates have been released, where do they sit in the plan?

**Open CAPAs.** Review CAPAs from the last review or from incidents. Are they closed? Did they work, or has the problem returned? CAPA effectiveness is part of the [pharmaceutical quality system](/articles/pharmaceutical-quality-system), and the periodic review is one of the places it gets checked. See [CAPA Effectiveness Verification](/articles/capa-effectiveness-verification).

**Overall conclusion.** Does the system remain fit for intended use in its current state? This documented, quality-approved statement is the single most important output of the review. An honest conclusion sometimes reads "fit for use, with the following actions," and that is a healthier outcome than a reflexive clean bill.

### A worked periodic-review summary

What the conclusion section of a real periodic review reads like:

> Review period: 2025-06 to 2026-06. Eleven changes processed, all through change control; one (major version upgrade) carried regression testing, verified complete. Three incidents, one critical (INC-2026-0142, deviation closed, CAPA effective). Backup success 99.6%; one recovery test passed (DR-2026-007). Access review: one orphaned account found and removed, deviation raised on the deprovisioning gap, CAPA in progress. Running qualified version, vendor support current through 2027-Q2; upgrade planned for 2026-Q4. Conclusion: system remains fit for intended use, contingent on closure of the deprovisioning CAPA (due 2026-07-31) and the planned upgrade.

That is a defensible outcome. It is specific, it names open actions, and a clean bill would have been less credible given the orphaned account.

### Periodic Review Frequency

Frequency should be risk-based. A LIMS supporting product release testing in a commercial facility is typically reviewed annually. A low-use document management system with few changes and no incidents in two years may be defensible at an eighteen to twenty-four month interval, provided the rationale is documented.

GAMP 5 (Second Edition) treats periodic review as a defined activity within the operation phase of the system lifecycle, and EU GMP Annex 15 (2015) calls for periodic review of facilities, systems, and equipment to confirm they remain in a validated state. Categorize systems by GxP criticality and recent change and incident history; the ones with frequent change or recent incidents earn more frequent review.

**Roles in periodic review:** the system owner runs and is responsible for the content; the quality unit is accountable for approving the conclusion; administrators and IT supply the change, incident, access, and performance data. **Common findings:** periodic reviews scheduled but not performed on time; reviews that are a checkbox with no actual examination of the change or incident log; a conclusion of "fit for use" that contradicts the evidence in the same document, such as unresolved orphaned accounts or an unpatched, unsupported version.

---

## System Retirement

When a system is replaced or decommissioned, retirement is managed formally. A system does not leave the GxP environment just because IT removed it from the network. Its records still have to be available, readable, and trustworthy for their full retention period.

### Retirement Planning

- Define what happens to the GxP data currently in the system.
- Confirm the retention period for every record type. Release data is commonly held ten years past last use; stability data is held for the product's commercial life plus a margin; some records carry longer obligations. Medical device records follow device-specific retention rules. Confirm against your retention schedule rather than assuming. See [Document Control Fundamentals](/articles/document-control-fundamentals).
- Choose the strategy: migrate the data to the successor system, archive it in a long-term retention system, or keep a read-only instance of the old system. Each choice has a different cost and a different long-term risk.

The decision among the three strategies, with the trade-offs:

| Strategy | When it fits | The risk you take on |
|---|---|---|
| Migrate to successor | Successor will be the working system; data is actively used | Migration must be validated; transformation can alter meaning |
| Archive in long-term store | Data is reference-only; many systems retiring at once | Archive format and retrieval must stay readable for years |
| Read-only legacy instance | Migration is too costly or risky for low-value data | You keep maintaining and securing an obsolete system |

### Data Migration Validation

If GxP data is migrated from one system to another, the migration is a validated activity:

- Define what "migration complete" means: which fields, which records, which timeframe.
- Define acceptance criteria: every record present in the destination, metadata preserved, values matching the source.
- Execute with documented testing: take samples from the source and confirm they appear correctly, including their metadata, in the destination.
- Retain the source data until migration is confirmed complete and the source is decommissioned per plan. Decommissioning the source before the destination is proven is how data quietly disappears.

The detailed methodology, including reconciliation and handling of transformed data, is in [Data Migration Validation](/articles/data-migration-validation).

### Post-Retirement Record Access

The retired system's data has to stay accessible for the retention period. If it was migrated, the successor system has to maintain that accessibility. If it was archived, the archive format has to remain readable and the retrieval process has to keep working. Test retrieval on a defined schedule for the life of the archive; a record you cannot produce on request is, for inspection purposes, a record you do not have.

**Common retirement findings:** the old system was switched off and the data was assumed to be in the new system without a validated migration; records were archived in a format that, three years later, no current tool could open; the source system was decommissioned before migration was verified, and the gap was found only when a record was requested during an inspection.

---

## Interview and Inspection: How to Answer

These are the questions an inspector or interviewer asks on this topic, and how a credible answer sounds.

**"How do you keep a system in a validated state after go-live?"** Through the operational controls: change control with impact assessment before any change, configuration baseline maintained current, incident management with GxP impact assessment, controlled access with periodic reviews, verified backup with documented recovery tests, and periodic review that judges the whole. Validation is a point in time; these controls keep the statement true afterward.

**"Walk me through what happens when you apply a vendor patch."** Impact assessment first: what changes, does it touch validated functionality, what is the GxP risk, what testing is proportionate. Apply to a test environment, verify GxP functions are unaffected, then promote to production under approved change control. Update the configuration baseline and the validation record. Security-critical patches use a pre-defined fast lane, still documented.

**"An audit trail stopped recording for several hours. What do you do?"** Treat it as a data integrity event, not just an IT incident. Open a deviation, identify every record created in that window, assess whether those records can still be relied on using other controls, and document the impact assessment at the time. Determine root cause and CAPA so it cannot recur silently.

**"How often do you do periodic review and why?"** Risk-based. Release-critical systems annually; low-risk, low-change systems can justify a longer interval with documented rationale. The frequency is tied to GxP criticality plus change and incident history, consistent with Annex 11 clause 11 and Annex 15.

**"How do you handle a user who left the company?"** Deprovisioning is triggered from a reliable source, normally the HR record, and runs through a documented process. Periodic access reviews catch anything the trigger missed. An orphaned account found in review is fixed and investigated for why the trigger did not fire.

**"What is the difference between backup and archiving?"** Backup is a short-horizon recovery mechanism, and it is only proven by a successful documented restore. Archiving is long-term retention of records, read-only, format kept readable, metadata preserved, retrieval tested for the full retention period. They are different controls with different acceptance criteria.

**"What's the difference between an impact assessment that needs only testing and one that needs requalification?"** It depends on what the change touches. A change confined to non-GxP function or covered fully by existing qualified behavior needs proportionate verification. A change to qualified workflows, calculations that feed decisions, interfaces, or audit-trail behavior pushes toward requalification of the affected scope. The configuration baseline is what lets you make that call honestly.

The strongest answers name the specific clause (Annex 11 clause 13 for incidents, clause 11 for periodic review, clause 12 for security, 21 CFR Part 11 for records and signatures) and then describe the control in operational terms. More interview practice is in [GxP Quality Interview Preparation](/articles/gxp-quality-interview-preparation).

---

## Regulatory Alignment

The operational controls described here map to the following requirements. The companion article [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11) covers the electronic records and signatures dimension in depth.

| Operational Activity | Regulatory Basis |
|---|---|
| Incident management | 21 CFR 211.68(b); EU GMP Annex 11 clause 13 |
| Change control | 21 CFR 211.100; EU GMP Annex 11 clause 10 |
| Backup and recovery | 21 CFR 211.68(b); EU GMP Annex 11 clause 7.2 |
| Archiving | 21 CFR 211.180; EU GMP Annex 11 clause 17 |
| Periodic review | EU GMP Annex 11 clause 11; EU GMP Annex 15; ISPE GAMP 5 (2nd Edition) |
| Security management | 21 CFR Part 11.10; EU GMP Annex 11 clause 12 |
| User access control | 21 CFR 11.10(d); EU GMP Annex 11 clause 12.1 |
| Risk-proportionate testing of changes | FDA CSA guidance (draft 2022, final 2025); ISPE GAMP 5 (2nd Edition) |
| System retirement | ISPE GAMP 5 (2nd Edition); EU GMP Annex 11 clause 17 |

A closing point worth keeping in view: nothing in this list is a one-time task. Each row is a recurring obligation with an owner, a frequency, and an evidence trail. The systems that hold up under inspection are not the ones with the thickest original validation binder. They are the ones where the operational record shows the controls actually ran, month after month, long after go-live.

---

## Related Articles

- [GAMP 5 Second Edition: The Framework](/articles/gamp5-csv-framework)
- [CSV/CSA Self-Audit Checklist](/articles/csv-csa-audit-checklist)
- [Change Control for Validated Systems](/articles/change-control-validated-systems)
- [IT Change and Configuration Management for GxP](/articles/it-change-and-configuration-management-gxp)
- [Computer Software Assurance (CSA)](/articles/computer-software-assurance-fda)
- [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11)
- [Cloud and SaaS Validation in GxP](/articles/cloud-saas-validation)
- [Backup, Restore and Disaster Recovery Validation](/articles/backup-restore-disaster-recovery-validation)
- [Data Migration Validation](/articles/data-migration-validation)
- [Validation Master Plan and Periodic Review](/articles/validation-master-plan-and-periodic-review)
- [Operationalizing Audit Trail Review](/articles/operationalizing-audit-trail-review)
- [GxP Quality Interview Preparation](/articles/gxp-quality-interview-preparation)
