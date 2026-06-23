---
title: "IT Change and Configuration Management for GxP: Bridging ITIL and Validation"
description: "How to run IT change and configuration management for validated GxP systems: patch management, emergency change, the CMDB, and the interface between an ITIL change process and validation change control."
pubDate: 2026-06-20
tags: ["change control", "configuration management", "itil", "patch management", "csv", "data integrity", "infrastructure qualification"]
pillar: "csv-csa"
tier: "Intermediate"
---

A validated GxP system does not sit still. The operating system underneath it gets patched on Patch Tuesday. The database engine reaches end of support and has to move a major version. The virtualization host is migrated to new hardware. A security team pushes a configuration change to a load balancer at 2 a.m. to stop an active exploit. Every one of these touches the validated state, and most of them are driven by an IT organization that runs on ITIL, not on 21 CFR Part 11.

The job of IT change and configuration management for GxP is to make those two worlds meet without either breaking the validated state or grinding IT operations to a halt. This page covers how patch management, emergency change, and the configuration management database (CMDB) work in a regulated shop, and exactly where the ITIL change record hands off to the validation change control record.

If you have not already, read [Change Control for Validated Systems](/articles/change-control-validated-systems) and [GxP Computerized Systems Operations](/articles/gxp-computerized-systems-operations) first. This article assumes you know what a validated system is and focuses on the IT-operations layer underneath it.

---

## Why this is a regulated activity, not just IT housekeeping

A computerized system that supports a GxP decision must remain in its validated state for as long as it is in use. That principle is not subtle in the regulations.

EU GMP Annex 11 (2011), clause 10 requires that any change to a computerized system, including its system configurations, be made only in a controlled way and under a defined procedure.

EU GMP Annex 11 (2011), clause 8.1 requires the ability to obtain clear printed copies of electronically stored data, and clause 12.1 requires physical and/or logical controls that restrict system access to authorized persons. A configuration change to access control is therefore a regulated change.

The US side rests on the predicate rules. 21 CFR 211.68(a) requires that automatic, mechanical, or electronic equipment used in manufacture, processing, packing, or holding be "routinely calibrated, inspected, or checked according to a written program designed to assure proper performance." 21 CFR 211.68(b) requires that "appropriate controls" be exercised over computer systems to assure that changes are "instituted only by authorized personnel." 21 CFR 11.10(j) requires written policies that hold individuals accountable for actions taken under their electronic signatures, and 11.10(a) requires validation of systems to ensure accuracy, reliability, and consistent intended performance. Most directly on point for this article, 11.10(k)(2) requires revision and change control procedures that maintain an audit trail documenting the time-sequenced development and modification of systems documentation.

The practical translation: an OS patch, a database upgrade, a firmware update, a TLS certificate rotation, or an access-control tweak on a GxP system is a change to a validated computerized system. It has to be controlled, risk-assessed, and documented, and the validated state has to be re-established or shown to be intact before the system is used for GxP work again.

GAMP 5 Second Edition (ISPE, 2022) frames the same thing through the lifecycle: infrastructure and operational processes (change management, configuration management, backup, security, incident management) are part of keeping a system fit for intended use across the operational phase. The PIC/S guidance PI 011-3 "Good Practices for Computerised Systems in Regulated GxP Environments" reinforces that change control must cover the full system, including the platform and infrastructure it runs on, not only the application.

The risk rationale is concrete. A patch can silently change a rounding behavior, break a report, alter a time-zone handling, or disable an audit trail. A database upgrade can change a collation that reorders query results that feed a release calculation. A firewall rule can cut off a time server and let a system clock drift. None of these are application "features," yet every one can corrupt GxP data or invalidate a result. That is why infrastructure change is in scope.

---

## ITIL and GxP: same goal, different vocabulary

ITIL (the IT service management framework, current version ITIL 4) gives IT a mature, well-understood machine for handling change and configuration. GxP change control gives quality a defensible, regulator-facing record. They overlap heavily but are not the same, and confusion at the seam is where findings happen.

| Concept | ITIL term | GxP term | Where they differ |
|---|---|---|---|
| A proposed change | Change request / RFC | Change control record | GxP record must carry validation impact assessment and QA approval |
| Routine, pre-authorized change | Standard change | Pre-approved / like-for-like change | GxP still needs a defined procedure and a record; "standard" does not mean "no record" |
| Risk-assessed change needing review | Normal change | Change control (full) | GxP adds regulatory and data-integrity impact, not just service risk |
| Urgent change to restore service | Emergency change | Emergency change control | GxP demands retrospective QA review and impact-on-validated-state assessment |
| Authorizing body | Change Advisory Board (CAB) | Change control board / review with QA | GxP CAB must include or escalate to Quality for GxP-impacting changes |
| System of record for assets | CMDB | Validated system inventory / configuration baseline | The CMDB must be reconciled with the validation inventory; they often diverge |
| A managed asset | Configuration item (CI) | Configuration item / configured setting | GxP cares specifically about GxP-relevant configuration, not every asset attribute |

The single most important design decision in a regulated IT shop is how the ITIL change process and the validation change control process connect. Two patterns work:

- **One process, GxP-aware.** The ITIL change tool is configured so that any change flagged as touching a GxP system triggers extra mandatory fields (validation impact assessment, QA approval, regression test reference) and routes to Quality. There is one change record per change.
- **Two processes, linked.** IT runs its ITIL change in its tool; when the change touches a GxP system, a linked validation change control record is opened in the quality system and the two are cross-referenced. The GxP record gates go-live.

Both are acceptable. The failure mode is a third pattern that exists by accident: IT makes the change under ITIL, Quality never sees it, and the validated state is altered with no GxP record. Inspectors find this by sampling the IT change log and looking for GxP systems that changed without a corresponding quality record.

---

## The configuration management database (CMDB) and the configuration baseline

### What it is and why it matters

A CMDB is the inventory of configuration items and their relationships: which application runs on which server, which database, which OS build, which network segment, which storage. In ITIL it is the backbone of change and incident management. In GxP it serves a second purpose: it is part of how you prove you know the boundary of your validated system and its current configuration.

GAMP 5 and Annex 11 both expect that you can describe the system, its components, and its environment. Annex 11 clause 4.3 requires an up-to-date listing of relevant systems and their GMP functionality. The CMDB, when kept honest, is a large part of that evidence.

### What goes in it for a GxP system

A useful CMDB entry for a validated system, at minimum:

- CI identifier and friendly name
- GxP classification (GxP / non-GxP) and the data criticality it handles
- GAMP software category (1 infrastructure, 3 non-configured, 4 configured, 5 custom) for context
- System owner, business owner, QA contact
- Validation status (validated, in validation, retired) and link to the validation summary report or system file
- Software versions: application, OS, database, middleware, firmware where relevant
- Configuration baseline reference (the controlled record of the configured settings)
- Hosting model (on-premises, virtual, IaaS, SaaS) and physical or logical location
- Relationships: depends-on / depended-on-by (the application depends on a database CI, which depends on a server CI, which depends on a storage CI)
- Patch and maintenance window
- Backup configuration reference and last successful restore test

### The configuration baseline

The CMDB tells you what the system is. The **configuration baseline** tells you how it is configured: the specific settings that were verified during validation and that, if changed, would require assessment. Examples of baseline-controlled settings:

- Audit trail enabled, and the events it captures
- Time synchronization source and time-zone handling
- Password and account-lockout policy
- User roles and the privileges attached to them
- Data retention and archival settings
- Calculation parameters, rounding rules, and significant-figure settings
- Interface and integration endpoints
- Report templates that produce GxP output

The baseline is established at the end of validation and is the reference point for every future change. A change is, by definition, a deviation from the baseline that must be controlled and then folded back into a new baseline.

### Acceptance criteria for the CMDB

You know the CMDB is doing its GxP job when:

- Every GxP application in the validated system inventory has a corresponding CI, and the two lists reconcile with no orphans on either side
- For any GxP CI you can answer, in under a minute, "what version of OS and database is it on, and when was it last patched"
- A periodic reconciliation runs (commonly quarterly) and discrepancies are investigated, not just corrected silently
- The configuration baseline for each system exists, is version-controlled, and matches the running system at the time of a periodic review

The classic finding is a CMDB that drifted: it says the database is version X but production has been on X+1 for eight months because a DBA upgraded it under an IT change that never reached Quality. The CMDB looks complete on paper and is wrong in fact.

---

## Patch management: the day-to-day battlefield

Patching is where IT change and GxP collide most often, because it is high-volume, vendor-driven, and security-urgent. The goal is a risk-based, repeatable program, not a per-patch panic.

### The regulatory hook

There is no regulation that says "you must apply every patch," and there is none that says "you may never patch." Annex 11 clause 10 (controlled change), 211.68(b) (changes by authorized personnel), and Part 11.10(a) (maintained validated state) together mean: patches are changes; assess them, control them, and keep the system validated. Security guidance pulls in the same direction. The FDA's posture on legacy systems and on medical device cybersecurity, and the general expectation that you maintain a secure environment, mean that not patching a known-exploited vulnerability is itself a quality and compliance risk. You cannot hide behind "validation" to run a system with an unpatched critical vulnerability.

### A risk-based patch classification

Build a small, documented decision model and apply it to every patch or patch group. A workable scheme:

| Patch class | Examples | GxP impact | Route |
|---|---|---|---|
| Security, no functional change | OS security rollup, library CVE fix, certificate rotation | Low, no change to GxP function | Pre-approved standard change with defined regression check |
| Functional or minor version | Service pack, minor app or DB version, driver update | Possible, depends on what changed | Normal change control, targeted regression testing |
| Major version or platform | Major OS or DB upgrade, infrastructure migration, hypervisor change | High, behavior may change | Full change control, formal impact assessment, likely re-validation activities |
| Emergency security | Actively exploited zero-day | Restore security now, assess after | Emergency change, retrospective GxP review |

The key insight: a security-only patch with no change to the application's GxP behavior can usually be pre-approved as a standard change with a defined, repeatable regression test, so it does not need a fresh full change control every month. That is how you keep patching at IT speed without abandoning control. What makes it defensible is the documented rationale (vendor release notes reviewed, no GxP-relevant change identified), the standing regression test, and a record that it ran and passed.

### Step-by-step patch procedure

1. **Intake and triage.** Vendor or security team announces patches. The system owner and a CSV or IT-quality person review the release notes and security advisories. Classify each patch using the model above. Record the classification rationale, especially the "no GxP-relevant change" judgment.
2. **Impact assessment.** For normal and major changes, assess: does this touch a baseline setting, a calculation, an audit trail, an interface, a report, time handling, or access control. List affected GxP functions. Decide the testing needed.
3. **Schedule and approve.** Pre-approved patches go into the standing maintenance window. Normal and major changes get a change control record approved by the owner, QA, and, where relevant, the vendor or SME.
4. **Test in a non-production environment.** Apply to a qualified test or staging environment that mirrors production. Run the regression test set: the GxP-critical functions, the reports, the interfaces, the calculations, an audit-trail spot check, and a login/role check.
5. **Back up and snapshot production.** Before applying to production, take a verified backup and, for virtual systems, a snapshot or restore point. Confirm the rollback path actually works, not just that it exists.
6. **Apply to production in the window.** Apply, then run the production verification: a smoke test of the GxP-critical paths and a confirmation that the audit trail still records.
7. **Update records.** Update the CMDB version fields, the configuration baseline if a setting changed, and close the change record with the test evidence attached.
8. **Periodic review.** At periodic review, confirm the running versions match the CMDB and that all patches applied since the last review have a record.

### Acceptance criteria for the patch program

- Every GxP system has a defined patch policy (cadence, classification model, who approves)
- A patch backlog report exists and known critical vulnerabilities on GxP systems are tracked to closure with risk-based timelines
- Pre-approved patch changes carry a standing regression test that is actually executed each cycle, with evidence
- Test-environment results precede every production change for normal and major patches
- No GxP system is found running a version that has no corresponding change record

---

## Emergency change: doing it right under pressure

Emergency change is the highest-risk path because the normal gates are compressed or moved after the fact. It is also unavoidable: a failed disk, an expired certificate that just took the system offline, an actively exploited vulnerability. Regulators do not object to emergency change. They object to emergency change with no record, no QA awareness, and no retrospective assessment of the validated state.

### What makes an emergency change defensible

- A pre-defined emergency change procedure exists before you need it, with named authorizers reachable out of hours
- The minimum necessary change is made to restore service or security, nothing more
- The change is recorded contemporaneously or as close to it as the emergency allows, even if it is a phone-authorized verbal approval logged immediately after
- A retrospective review by QA happens within a defined window (commonly 1-3 business days), assessing impact on the validated state and on data
- Any data created or modified during the unstable period is reviewed for integrity
- If the emergency fix altered a baseline setting, a follow-up normal change formalizes and fully tests it

### Worked emergency-change example

A GxP chromatography data system loses TLS connectivity because the server certificate expired overnight, blocking analyst logins. The on-call IT engineer:

1. Invokes the emergency change procedure, gets verbal authorization from the duty manager, and logs the emergency change record with timestamp.
2. Installs a new valid certificate (a like-for-like replacement of an expired credential, no change to application logic).
3. Confirms analysts can log in, the audit trail records, and no data was written during the outage.
4. Files the contemporaneous record with screenshots and the new certificate details.
5. QA reviews within two business days, confirms the change was a like-for-like certificate rotation with no impact on the validated state or on data, updates the CMDB certificate-expiry field, and closes the record.

This is clean because the change was minimal, recorded, and reviewed, and the validated state was never actually altered. Contrast with the bad version: the engineer also "took the opportunity" to bump the OS to the latest build because it was right there, told no one, and the next report run produced a different time-zone stamp. Now you have an undocumented major change discovered through a data anomaly.

See [Deviation Management](/articles/deviation-management) for how a botched emergency change becomes a deviation, and [Backup, Restore, and Disaster Recovery Validation](/articles/backup-restore-disaster-recovery-validation) for the rollback evidence the procedure depends on.

---

## The handoff: where ITIL change control becomes GxP change control

This is the interface that earns or loses inspection points. Draw it explicitly in your procedures.

### The triage gate

Every change request hitting the IT change process must pass through a GxP-impact triage. The triage answers one question: **does this change touch a system, or the infrastructure of a system, that is in the validated GxP inventory.** The CMDB's GxP classification flag is what makes this fast and reliable. If yes, the change cannot close on the ITIL side alone; it requires the GxP path (impact assessment, validation activities, QA approval).

### Roles and responsibilities at the seam

| Role | Responsibility |
|---|---|
| IT change / service management | Runs the ITIL process, raises and schedules changes, maintains the CMDB, executes infrastructure changes |
| System owner (business or IT) | Owns the validated system, accountable for keeping it validated, approves changes, ensures testing is adequate |
| CSV / validation | Performs or reviews the validation impact assessment, defines required testing, authors or reviews protocols, confirms validated state restored |
| QA / Quality | Approves GxP-impacting changes, reviews emergency changes retrospectively, owns the quality system that holds the change control record, gates go-live |
| SME / process owner | Confirms the change does or does not affect the GxP process and its data, helps scope regression testing |
| Vendor / supplier | Provides release notes, known issues, and support; for SaaS, executes the change and provides evidence under the [supplier assessment](/articles/software-supplier-assessment-csa) and quality agreement |

### A worked end-to-end example: a database major-version upgrade

The database under a validated LIMS is reaching end of vendor support and must move from a major version to the next.

1. **IT raises the RFC** in the ITIL tool. The GxP-impact triage flags the LIMS as a validated GxP system. A linked validation change control record is opened in the quality system, cross-referenced to the RFC.
2. **Impact assessment** (CSV with the system owner and a LIMS SME): a major DB version can change collation, sort order, default date handling, and query performance. The LIMS uses sorted query results in a result-selection step and stores audit data in the DB. Assessed as high impact. Required: regression testing of result calculations, sort-dependent screens, audit-trail integrity, report output, and a data-comparison before and after.
3. **Approval**: system owner, QA, and CSV approve the change control. The vendor confirms supported upgrade path.
4. **Execution in qualified staging**: clone production data into a qualified staging LIMS, perform the upgrade, run the regression suite, and compare a set of known records and calculations before and after. A sort-order difference is found in one screen; the vendor provides a configuration setting to preserve the prior collation. The fix is added to the baseline and re-tested.
5. **Production change** in the maintenance window: verified backup taken, rollback path confirmed, upgrade applied, production verification run, audit trail confirmed recording.
6. **Close-out**: CMDB updated to the new DB version, configuration baseline updated with the collation setting, validation summary or system file updated, both the RFC and the change control record closed with the test evidence. The change is reportable at the next periodic review.

This is exactly the kind of change that [Change Control for Validated Systems](/articles/change-control-validated-systems) governs at the application level and that [Infrastructure Qualification and Spreadsheet Validation](/articles/infrastructure-qualification-and-spreadsheet-validation) covers at the platform level.

---

## Configuration management discipline that holds up in an inspection

Beyond the CMDB inventory, configuration management means controlling the actual configured state of systems and detecting drift.

### Version and configuration control

- **Application and infrastructure versions** are recorded and changes are controlled. You can state, for any GxP system, exactly what is running.
- **Configuration as code, where it exists**, lives in a version-controlled repository with controlled change. Infrastructure-as-code templates, scripts, and parameter files are configuration items too. See [Validating Scripts and Low-Code Analytics](/articles/validating-scripts-low-code-analytics) and [Agile and DevOps in CSV](/articles/agile-devops-csv) for how this works in modern pipelines.
- **Drift detection**: a periodic or automated comparison of running configuration against the approved baseline. Unexplained drift is investigated as a potential uncontrolled change.

### Periodic review ties it together

At the system's periodic review (see [Validation Master Plan and Periodic Review](/articles/validation-master-plan-and-periodic-review)), reconcile four things: the CMDB record, the running configuration, the configuration baseline, and the change-control history. They should all agree. Where they do not, you have found either a documentation gap or an uncontrolled change, and either is better found by you than by an inspector.

### Acceptance criteria

- The running configuration of each GxP system matches its documented baseline, or every difference is explained by a closed change record
- Drift checks run on a defined cadence and discrepancies are investigated
- Configuration items that are code or templates are under version control with controlled change
- The four sources (CMDB, running config, baseline, change history) reconcile at periodic review

---

## Common mistakes and real inspection-finding patterns

These are the patterns inspectors and auditors cite, described generically.

- **Infrastructure changes with no GxP change record.** The IT change log shows OS patches, DB upgrades, or firewall changes on GxP systems that have no corresponding change control or impact assessment. This is the single most common finding at the ITIL/GxP seam.
- **CMDB and validated-system inventory disagree.** The CMDB lists versions that do not match what is running, or GxP systems are missing from one list, breaking the claim that you know your validated estate.
- **"Standard change" used as a loophole.** Changes are classified as standard or pre-approved to skip review, but the standing regression test is not actually run, or the classification rationale was never documented, so there is no evidence the change was harmless.
- **Emergency changes never retrospectively reviewed.** The emergency procedure exists but the QA back-review step is skipped, so emergency changes accumulate with no assessment of impact on the validated state or on data.
- **No testing in a representative environment.** Patches go straight to production with no qualified staging environment, so the first place a regression appears is in GxP data.
- **Audit trail silently disabled by a patch or config change.** A change altered logging behavior and no one checked the audit trail afterward, surfacing later as a data-integrity gap. See [Audit Trail Design and Review](/articles/audit-trail-design-and-review).
- **Rollback that does not work.** A documented rollback plan that was never tested, so when a production change fails there is no clean recovery and the system is left in an unknown state.
- **Cloud and SaaS changes invisible to the customer.** A SaaS vendor pushes a change that alters GxP behavior and the regulated company has no notification mechanism in the quality agreement, so it learns of the change after the fact. See [Cloud and SaaS Validation](/articles/cloud-saas-validation).
- **Time source disrupted by a network change.** A firewall or routing change cuts a GxP system off from its NTP source and the clock drifts, corrupting timestamps. See [Time Stamps and System Clock Control](/articles/time-stamps-and-system-clock-control).

---

## Interview-ready: questions you will be asked and how to answer

**"How do you keep a validated system patched without re-validating every month?"**
Risk-based classification. Security-only patches with no GxP-relevant change are handled as pre-approved standard changes with a standing regression test, documented rationale from the release notes, and evidence the test ran. Functional and major changes go through full change control with targeted regression testing and staging. You patch at IT speed for the low-risk majority and reserve full validation effort for changes that can actually alter GxP behavior.

**"Where does ITIL change control stop and GxP change control start?"**
At the GxP-impact triage gate. Every IT change is screened against the validated system inventory, usually via the CMDB GxP flag. If it touches a GxP system or its infrastructure, an ITIL change alone cannot close it; it requires the GxP path: validation impact assessment, defined testing, and QA approval before go-live. There is either one GxP-aware change record or two linked records, but the GxP record gates the change.

**"Walk me through your emergency change process."**
A pre-defined procedure with named out-of-hours authorizers. Make the minimum necessary change, record it contemporaneously even if approval was verbal, restore service or security, then have QA retrospectively review within a defined window to assess impact on the validated state and on any data created during the unstable period. If the fix altered a baseline setting, a follow-up normal change formalizes and fully tests it.

**"What is a CMDB and why does Quality care about it?"**
It is the IT inventory of configuration items and their relationships. Quality cares because, reconciled with the validated system inventory, it is part of how you prove you know the boundary and current configuration of every validated system, which Annex 11 clause 4.3 expects. A CMDB that has drifted from reality undermines the whole change-control claim.

**"How do you detect an uncontrolled change?"**
Configuration drift checks against the approved baseline, plus reconciliation at periodic review of four sources: CMDB, running configuration, baseline, and change history. Any difference not explained by a closed change record is investigated as a potential uncontrolled change and, if confirmed, handled as a deviation.

**"A security team needs to patch a critical zero-day on a GxP system today. What do you do?"**
Treat it as an emergency security change. The security risk of leaving a known-exploited vulnerability open generally outweighs the change risk, but you still control it: emergency change record, minimum necessary patch, apply with a verified backup and tested rollback available, run a smoke test of GxP-critical functions and confirm the audit trail still records, then QA retrospective review and CMDB/baseline update. You do not use "it is validated" as a reason to leave it unpatched.

**"What goes wrong most often at this interface?"**
Infrastructure changes that happen entirely inside the IT/ITIL world and never reach Quality, so the validated state is altered with no GxP record. Inspectors find it by sampling the IT change log against the GxP inventory. The fix is a hard triage gate driven by an accurate CMDB.

---

## Practical tips

- Make the CMDB the single source of the GxP flag, and wire your change tool to read it. The triage gate is only as good as that flag.
- Write the emergency change procedure and name the authorizers before you need them. The worst time to design the process is during the outage.
- Keep a standing, version-controlled regression test set per system for routine patches. It is what turns "pre-approved" from a loophole into a controlled practice.
- Test the rollback, do not just document it. A backup you have never restored is a hope, not a control. Pair this with [Backup, Restore, and Disaster Recovery Validation](/articles/backup-restore-disaster-recovery-validation).
- After any change, explicitly check the audit trail and the system clock. These two break quietly and surface as data-integrity findings months later.
- For SaaS, put change notification and the right to assess in the quality agreement up front. You cannot triage a change you are not told about.
- Reconcile the CMDB, baseline, running config, and change history at every periodic review. Finding your own gaps is cheap; an inspector finding them is not.

### Related reading

- [Change Control for Validated Systems](/articles/change-control-validated-systems)
- [GxP Computerized Systems Operations](/articles/gxp-computerized-systems-operations)
- [Infrastructure Qualification and Spreadsheet Validation](/articles/infrastructure-qualification-and-spreadsheet-validation)
- [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11)
- [GAMP 5 CSV Framework](/articles/gamp5-csv-framework)
- [Cloud and SaaS Validation](/articles/cloud-saas-validation)
- [Computer Software Assurance (CSA)](/articles/computer-software-assurance-fda)
- [CSV Cybersecurity and Access Control](/articles/csv-cybersecurity-access-control)
- [Agile and DevOps in CSV](/articles/agile-devops-csv)
- [Validation Master Plan and Periodic Review](/articles/validation-master-plan-and-periodic-review)
