---
title: "MES, EBR, SCADA, and the Shop Floor: Data Integrity in Manufacturing Automation"
description: "How data integrity requirements apply to manufacturing automation: MES, electronic batch records, SCADA, DCS, PLCs, and historians. Where the compliance gaps are and how to close them."
pubDate: 2025-10-23
tags: ["MES", "SCADA", "manufacturing", "data-integrity", "21-CFR-Part-11", "GxP"]
tier: "Intermediate"
pillar: "manufacturing-automation"
---

The manufacturing floor generates more GxP data than any other area of a pharmaceutical or biotech facility. A single biologic production batch may involve continuous data streams from bioreactors, discrete process events logged by a distributed control system, in-process samples recorded in a laboratory information management system (LIMS), and a complete batch record executed in a manufacturing execution system (MES). A small-molecule tablet line, a sterile fill-finish suite, and a medical device assembly cell all produce the same kind of layered automation data. The total can run to millions of individual data points before anyone signs the lot release.

It is also, in most organizations, the area with the weakest data integrity program. The reasons are structural. Manufacturing automation systems often predate modern Part 11 expectations. They were specified by control engineers focused on keeping a process inside its operating window, not on attributability or audit trails. And the people who own them day to day, automation engineers, controls technicians, and plant IT, frequently have less formal GxP training than laboratory analysts who have lived with electronic records since chromatography software arrived.

The result is a predictable pattern in inspections and warning letters: the lab gets the scrutiny first, the lab cleans up first, and then an inspector walks onto the floor, asks an operator to show who changed a bioreactor setpoint last shift, and the gap becomes visible. This article walks through the system layers, the requirements that apply to each, the gaps that recur, and a sequencing that lets a small team make real progress without trying to remediate everything at once. By the end you should be able to inventory a plant's automation stack, judge where the integrity risk concentrates, design the controls, and answer the questions an inspector or interviewer will put to you.

---

## The Regulatory Basis in One Place

Before the system layers, fix the rules that govern all of them. Floor automation does not get a lighter regulatory treatment than the lab. The same texts apply.

| Source | What it requires that touches the floor |
|--------|------------------------------------------|
| 21 CFR Part 11 (Electronic Records; Electronic Signatures, 1997) | Audit trails, individual accounts, electronic signatures, validation, copies for inspection. Applies to any GxP electronic record on the floor. |
| 21 CFR 211.68 (Automatic, mechanical, electronic equipment) | Computers and automated equipment used in manufacturing must be validated, with controls over input/output, change, and access. The direct cGMP hook for MES, SCADA, DCS, and PLCs. |
| 21 CFR 211.188 and 211.194 (Batch production records; laboratory records) | The batch record must show complete data and the identity of personnel performing each step. Drives EBR content and operator attribution. |
| EU GMP Annex 11 (Computerised Systems, 2011 revision) | Risk management, validation, audit trails, accuracy checks, periodic evaluation, security, and electronic signatures for any computerized system used in GMP. |
| EU GMP Chapter 4 (Documentation) | Records must be ALCOA-aligned; the batch record is a defined GMP document. |
| FDA Guidance: Data Integrity and Compliance with Drug CGMP (Q&A, 2018) | FDA's current thinking on audit trails, shared logins, system access, and what "true copy" means. |
| MHRA GxP Data Integrity Guidance (2018) | The data lifecycle model and ALCOA+ expectations regulators apply during inspection. |
| PIC/S PI 041 (Good Practices for Data Management and Integrity, 2021) | The most detailed inspectorate guide; covers computerized system data integrity layer by layer. |
| FDA Guidance: Part 11 Scope and Application (2003) | Set the risk-based tone still in force: controls proportionate to the record's impact on product quality and patient safety. |

For medical device manufacturing the same logic flows through 21 CFR Part 820 (transitioning to the Quality Management System Regulation, QMSR, aligned to ISO 13485) and its requirements for automated process validation and record controls. The vocabulary differs; the integrity expectation does not. The deeper treatment of the two pillars is in [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11).

The risk rationale behind all of it is simple. The batch record is the evidence that the product was made the way the marketing authorization says it is made. If that record cannot prove who did what, when, with which value, and whether anyone altered it, then the lot release decision rests on data the firm cannot defend. A data integrity gap is not primarily a paperwork problem. It is a patient-safety assurance that the firm cannot stand behind.

---

## The System Environment

Data integrity on the floor starts with knowing what systems exist and what each one does. A useful way to picture it is a stack: physical equipment at the bottom controlled by embedded controllers, a supervisory layer above that, a batch-execution layer above that, and an enterprise layer on top. Data flows up the stack and is archived along the way. Each layer has its own integrity profile. This layering is not informal shorthand; it maps onto the ISA-95 enterprise-control model (levels 0 through 4) that most plants already use, so naming it that way helps you talk to the automation team in their own terms.

| Layer | Typical system | Primary GxP record it owns | Most common integrity gap |
|-------|---------------|----------------------------|---------------------------|
| Enterprise (L4) | ERP | Material genealogy, lot disposition status | Weak link to the actual batch record |
| Execution (L3) | MES / EBR | The official batch record | Corrections that overwrite the original entry |
| Supervisory (L2) | SCADA / HMI | Operator actions, alarms, trends | Shared logins, no access-event audit trail |
| Control (L1) | DCS | Setpoints, recipe parameters, process values | No audit trail on configuration changes |
| Device (L0/L1) | PLC | Equipment-level control logic and setpoints | No audit trail capability at all |
| Archive | Historian | Long-term time-series process data | Compression that discards meaningful points |

A practical first deliverable is a one-page version of this table filled in for your own site, with the real system names, the responsible owner, the validation status, and the GxP criticality of each. That single artifact answers the first three questions of almost any inspection of automation: what do you have, who owns it, and how do you know it works. The method for building it is in [data integrity gap assessment methodology](/articles/di-gap-assessment-methodology).

### MES (Manufacturing Execution System)

An MES manages the execution of batch manufacturing. It routes the batch record to operators, enforces step sequences, captures operator actions and confirmations, applies in-process limits, and generates the electronic batch record (EBR). In a mature plant the MES integrates directly with process control systems for parameter values, with the LIMS for in-process sample results, and with ERP for material dispensing and consumption. It becomes the hub through which the batch story flows.

From a data integrity standpoint the MES is the highest-criticality system on the floor, because it produces the official record on which the lot release decision is made. Under 21 CFR Part 11 and EU GMP Annex 11, an electronic batch record carries the same regulatory weight as a paper one, and the controls must match that weight.

**What good looks like.** The core controls an MES must demonstrate:

- Individual user accounts for every operator. No shared logins, no generic "production" account. Account provisioning and de-provisioning are tied to HR onboarding and termination so that leavers lose access promptly.
- An audit trail that captures every entry, correction, and approval with user identity, timestamp, old value, new value, and reason where applicable. The audit trail is enabled by configuration, cannot be turned off by a normal user, and is itself protected from edit and deletion.
- Electronic signatures meeting Part 11 Subpart C for critical review and approval steps, including the printed name, date and time, and meaning of the signature. The mechanics are covered in [electronic signatures implementation](/articles/electronic-signatures-implementation).
- Change control over master batch records and system configuration, so the version of the master used for a given lot is identifiable and traceable.
- A validated system with documented qualification and a periodic review that confirms it has stayed in its validated state.

**How to verify it during validation.** Do not take the vendor's word. In the operational qualification or user acceptance test, execute these scenarios and record the result against a pre-approved expected outcome:

1. Log in as two different operators, make entries, and confirm each entry attributes to the correct individual.
2. Make a correction to a recorded value and confirm the audit trail shows old value, new value, who, when, and reason, with the original still retrievable.
3. Attempt to skip a critical step and confirm the system blocks progression.
4. Apply an electronic signature and confirm name, date/time, and meaning are captured and bound to the record.
5. Attempt to edit or delete an audit trail entry as a normal and as a privileged user, and confirm both are prevented or, if a privileged path exists, that it is itself audited.

A subtle point that trips up new MES owners: the MES audit trail and the EBR are not the same thing. The EBR is the assembled record for one batch. The audit trail is the continuous, system-level log of who did what across all batches. An inspector may ask for both, and the two must tell a consistent story.

### Electronic Batch Records (EBR)

The EBR is the batch record executed and stored in the MES. Under 21 CFR 211.188, a batch record must capture complete information on the production and control of each batch, including the identity of the people who performed and checked each significant step. The EBR differs from paper in how corrections work. There is no ink, no single line through a wrong number with an initial and date beside it. A correction in an EBR has to follow a defined process that keeps the original entry, records the new entry, captures the reason, and identifies who made and approved the change.

**What goes in an EBR.** At minimum, the assembled record for one lot should let a reviewer see:

- Product, batch number, and the master batch record version used.
- Each step in sequence, with the operator who performed it and the verifier where a second check is required.
- Materials dispensed and consumed, with lot numbers and quantities, tied to ERP genealogy.
- In-process and critical process parameter values, with the limits in force and any results outside them flagged.
- In-process and release sample results pulled from the LIMS.
- Equipment used, with its qualification and cleaning status.
- Deviations raised, exceptions flagged, and their disposition.
- Electronic signatures for review and approval.

**The classic gap.** An operator types a weight, realizes it is wrong, and corrects it. If the system stores only the corrected value with a fresh timestamp, the original is gone. That is an Original and Complete failure under [ALCOA+ in detail](/articles/alcoa-plus-deep-dive), and it is exactly the kind of finding that turns a routine inspection sour, because it suggests the system was configured without understanding what a GMP record is. The EBR must retain both the original and the correction, the reason, and the approver.

Two EBR behaviors are worth confirming during user acceptance testing. First, that the system prevents progression past a critical step until the required entry and verification are complete, rather than allowing operators to skip and backfill. Second, that an aborted or partial batch still produces a reviewable record rather than vanishing, because partial and failed batches are exactly the ones investigators want to read.

**A filled-in correction example.** This is what a defensible EBR correction looks like in the audit trail:

| Field | Original entry | Corrected entry |
|-------|---------------|-----------------|
| Step | Dispense buffer A | Dispense buffer A |
| Value | 12.50 kg | 21.50 kg |
| Entered by | J. OPERATOR (ID 4471) | J. OPERATOR (ID 4471) |
| Timestamp | 2026-03-14 08:42:11 UTC | 2026-03-14 08:43:02 UTC |
| Reason for change | (n/a) | Transposition error at keyboard entry, verified against balance printout |
| Approved by | (n/a) | M. SUPERVISOR (ID 2208), e-signature |

Both rows survive. A reviewer can see the original 12.50, the correction to 21.50, who made each, when, why, and who approved. Nothing is erased.

### SCADA (Supervisory Control and Data Acquisition)

SCADA systems monitor and supervise the process: temperature, pressure, flow, pH, dissolved oxygen, agitation, and hundreds of other parameters across a unit operation. They generate the continuous data stream that is, for much of a batch, the process record. The supervisory layer is also where operators interact with the process through the human-machine interface (HMI), so it is where most operator actions originate. The fundamentals of how these layers connect are in [PLC, DCS, and HMI fundamentals](/articles/plc-dcs-hmi-fundamentals).

SCADA presents several recurring data integrity problems:

**Audit trail limitations.** Many SCADA platforms were built for operational visibility, not regulatory evidence. They will happily log process events and alarms but may not log access events, configuration changes, or alarm acknowledgments at the granularity Part 11 expects. The audit trail then shows what the system did without showing who did it or why. The fix is usually a configuration choice plus a license module that most platforms now offer; the harder part is turning it on without breaking historized tag performance, so plan it as a change-controlled activity.

**Time synchronization.** A SCADA server running on its own clock, drifting against the MES and LIMS, produces timestamps that no longer line up across systems. When an investigator correlates records, those mismatches read like backdating even when every entry is genuine. More on this below, because it deserves its own treatment.

**Access control.** Older SCADA deployments often run a single shared operator account at the HMI, or a near-empty access model where everyone can do everything. That makes individual attributability impossible, which undermines the A in ALCOA before any other control matters. Role-based access, mapping operator, supervisor, engineer, and administrator to distinct privilege sets, is the target. The patterns are covered in [access control and cybersecurity for validated systems](/articles/csv-cybersecurity-access-control).

**Alarm management.** Who acknowledged an alarm, when, and what they did about it are GxP records. A system that does not retain alarm acknowledgment history, or that lets alarm history be edited without an audit trail, or that allows retrospective acknowledgment with no flag, creates an attribution gap on safety-relevant events. Critical alarms tied to a critical process parameter deserve the strongest controls here.

### DCS (Distributed Control System)

A DCS controls and monitors the process at the equipment level, coordinating the controllers, sensors, and actuators that physically run the operation. It is frequently the source of record for critical process parameters, because it holds the setpoints and reads the instruments. The data integrity focus for a DCS is on:

- An audit trail for configuration changes, meaning recipe edits, setpoint changes, and alarm-limit changes, with user and old and new values.
- Access control that separates configuration rights from monitoring rights, so a viewing operator cannot silently alter control logic.
- Defined data retention and archival of process records, usually via the historian.
- A clean, validated interface to the historian so that what the DCS measured is what the historian keeps.

The broader treatment of how SCADA, DCS, and PLC layers are validated as a connected system is covered in [automation validation across PLC, SCADA, and DCS](/articles/automation-validation-plc-scada-dcs); the focus here is the integrity of the records they produce.

### PLCs (Programmable Logic Controllers)

PLCs are embedded controllers that run specific equipment: a bioreactor controller, an autoclave cycle controller, a fill line controller, a device assembly station. They sit at the bottom of the stack, they generate process data, and they are frequently the weakest link in the whole program.

Many PLCs have limited or no audit trail capability for configuration changes. A setpoint or an alarm limit can be changed at the controller without any record of who changed it, when, or from what value. For a PLC that governs a critical process parameter in a GMP operation, that is a genuine gap, and it is not one you can fully close with a firmware update on legacy hardware.

The realistic approach is to understand exactly what the PLC controls, what logging it can produce, and what compensating controls cover the rest. This is where the [GAMP 5 software-category framework](/articles/gamp5-csv-framework) earns its keep. A PLC running non-configured embedded firmware is usually treated as a lower category, but the criticality of the records and parameters it touches is independent of the category. So the validation and the controls are scaled to the data, not just the software type.

**Compensating controls for a PLC with no audit trail.** When the device itself cannot record who changed a setpoint, you build a defensible perimeter around it:

- Locked-cabinet or key-switch access to the controller, with key custody documented, so physical change requires authorized access.
- Configuration captured and version-controlled outside the device, with the approved baseline held under document control.
- Periodic verification that the running configuration matches the approved baseline, on a defined schedule and after any maintenance.
- The supervisory layer recording the parameter values the PLC drives, so there is an independent witness to what actually happened even if the PLC change itself is silent.
- Critical setpoints that must not change mid-batch enforced or write-protected at the recipe or MES level so the PLC cannot be freely edited during execution.

Document this set as the rationale in the validation file, and carry a remediation plan to replace or upgrade the controller when its lifecycle allows. A compensating control is an accepted bridge, not a permanent excuse.

### Process Historians

A process historian is a time-series database that stores the continuous streams from the DCS, SCADA, and other control systems. It is the long-term archive of process data, and it is routinely left out of data integrity programs because it looks like infrastructure rather than a user-facing application. That omission is a mistake. The historian is where process data lives for the retention period, and if a batch has to be reconstructed years later for a complaint or a regulatory question, the historian is the source. The dedicated treatment is in [process historian data integrity](/articles/process-historian-data-integrity); the points that matter here:

- **Retrieval.** Can you query the historian and pull back the full process record for one batch, bounded by its start and end, in a form a reviewer can read? A historian you cannot easily query is a poor archive.
- **Compression.** Most historians store trend data using compression rather than every raw point, keeping the points that define the curve and dropping the rest. The question is whether the compression settings preserve every GxP-significant point, including transient excursions and the values around an alarm. A deadband tuned for storage efficiency can quietly erase the exact spike an investigator needs. Set and qualify compression deadbands against the precision the process genuinely requires, then lock them under change control.
- **Access control and audit trail.** Can stored values be edited, and if so, is there an audit trail? Historians are mostly insert-only by design, but back doors and bulk-edit utilities exist, and they need to be controlled.
- **Backup and recovery.** Is the historian backed up, and has a restore actually been tested? An untested backup is a hope, not a control. The validation of backup and restore for archives is its own discipline, covered in [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation).

---

## Roles and Responsibilities

Data integrity on the floor fails when ownership is fuzzy, so name the roles explicitly. The exact titles vary by site, but the accountabilities should map cleanly to people.

| Role | Owns | Typical accountability |
|------|------|------------------------|
| System owner (often Manufacturing or Automation lead) | The system in operation | Validated state, access management, audit-trail enablement, periodic review |
| Process owner / Production | The process the system runs | That the batch record reflects what happened, deviations raised honestly |
| Quality Assurance | The GxP framework | Approves validation, change control, batch record review, disposition |
| IT / Automation engineering | The technical platform | Infrastructure qualification, backups, patching, time sync, account administration |
| Data steward / data governance | The data lifecycle | Criticality classification, audit-trail review cadence, lifecycle controls |
| Operators | The entries they make | Accurate, contemporaneous, attributable entries under their own login |
| Qualified Person / disposition authority | Lot release | The decision that the record supports release |

The separation that matters most for integrity: whoever administers system accounts and configuration should not also be the person whose work that system records, and QA should be independent of both. When the same automation engineer can change a recipe, grant himself access, and clear the audit trail, you have lost the segregation that makes the record trustworthy. Map this to the broader picture in [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) and the program structure in [data governance framework](/articles/data-governance-framework).

---

## 21 CFR Part 11 on the Shop Floor

21 CFR Part 11 applies to electronic records and electronic signatures in GxP manufacturing exactly as it applies to LIMS and chromatography data systems in the lab. The requirements do not change at the door to the production suite. What changes is the maturity of implementation, because floor systems are older, more tightly coupled, and owned by people less steeped in the regulation. FDA's 2003 guidance on the scope and application of Part 11 set a risk-based tone that still governs how inspectors weigh these systems: controls should be proportionate to the record's impact on product quality and patient safety. EU Annex 11 reinforces the same expectations for inspections under EU GMP. The four gaps that recur most often:

**1. Inadequate audit trails.** SCADA and DCS systems that log process events but not access events, alarm acknowledgments with user identity, or configuration changes. The trail shows the machine's behavior but not the human's. Design and review of audit trails is covered in [audit trail design and review](/articles/audit-trail-design-and-review).

**2. Shared operator accounts.** A single login shared across a shift at an HMI is extremely common and squarely inconsistent with attributability. It is also one of the more visible findings, because an inspector only has to ask one operator to log in to expose it. FDA's 2018 data integrity Q&A is explicit that shared logins prevent attribution and are not acceptable for systems that create GMP records.

**3. Alarm history manipulation.** Alarm histories that can be acknowledged retrospectively, or that drop the identity of the acknowledging operator, or that can be cleared without trace.

**4. Recipe and program management.** Manufacturing recipes, meaning the process instructions programmed into the DCS or MES, are GMP-critical documents. Recipe changes must go through change control, and the recipe version used for a specific batch must be identifiable after the fact. Many automation platforms have thin version control for recipes, so a change can be made and the prior version lost. The recipe model itself follows the [ISA-88 batch control and recipe](/articles/isa-88-batch-control-recipes) structure of general, site, master, and control recipes; tying recipe management into the formal [change control process for validated systems](/articles/change-control-validated-systems) is what closes the integrity gap.

A note on the difference between a finding and a falsification. Most floor audit-trail gaps are honest design limitations, not fraud. But an inspector cannot tell the two apart from the outside, and a gap that makes data unverifiable is treated as a serious deficiency regardless of intent. That is the argument for fixing them: not that someone manipulated data, but that the system cannot prove no one did.

---

## Review-by-Exception and Batch Record Review

In a high-volume plant the batch record review has to be practical, because reviewing every one of millions of data points by eye is neither feasible nor genuinely valuable. Review-by-exception is the standard answer: the system applies validated, rule-based checks across the record and flags entries outside acceptable limits, and the reviewer focuses on the flagged exceptions plus a defined set of critical data, rather than reading every point.

Review-by-exception is acceptable in GMP under specific conditions:

- The exception rules are documented, validated, and managed through change control, so a quiet edit to a limit cannot silently shrink what gets reviewed.
- The review itself is documented: what was reviewed, which exceptions were found, and how each was resolved or justified.
- Critical data points get appropriate scrutiny whether or not an exception fired. Lot identity, yield, and critical process parameters should be reviewed directly.
- Data that could not be evaluated automatically, because of a system outage, a format problem, or a broken interface, is flagged for manual review rather than passing silently.
- Audit trail review is part of the batch review, not a separate forgotten task. The review confirms no unexplained corrections, no out-of-hours configuration changes, and no exceptions that were silenced rather than resolved.

**Acceptance criteria for a clean review-by-exception.** You can say the review is sound when: every exception has a documented disposition, every critical parameter has been confirmed in or out of limit, the audit trail shows no unexplained edits, no data was excluded without a recorded justification, and the reviewer and approver are distinct individuals with their signatures bound to the record.

The failure mode to guard against is treating "no exceptions" as "nothing to review." A rule set only catches what it was written to catch. If a parameter has no rule, an out-of-trend value can sail through with no flag and no human ever looking at it. The broader mechanics of reviewing the record, including who reviews what and the order of operations, are in [batch record review in GMP](/articles/batch-record-review-gmp), and audit-trail review specifically in [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).

---

## Time Synchronization

Time synchronization is fundamental wherever several systems generate records that have to be correlated. If the SCADA server, the LIMS, and the MES each keep their own clock, their timestamps drift apart, and a reviewer trying to line up a sample draw against a process event against an operator action sees inconsistencies that look like time manipulation even when every record is authentic. On the floor this is acute, because a single batch crosses many systems and the timeline is the spine of the investigation when something goes wrong.

The fix is to synchronize every GxP system to a common, reliable reference using Network Time Protocol or an equivalent, with the synchronization treated as a qualified attribute of each system rather than an afterthought. That means it appears in the qualification documentation, the source is defined, and drift is monitored rather than assumed. A few practical details that matter:

- Decide and document the time zone convention. Mixing local time and a coordinated standard across systems reintroduces the problem you were trying to solve. Many multi-site organizations standardize on storing in coordinated universal time and displaying local.
- Handle daylight-saving transitions deliberately, because the duplicated or skipped hour creates ordering ambiguity in records spanning the change.
- Lock down who can change a system clock, because a freely editable clock is itself a data integrity weakness.

For older systems that genuinely cannot be synchronized, document the maximum expected clock drift, monitor it, and write the procedure for accounting for the known offset when records are compared. That is a compensating control, not a cure, and it should carry a plan to replace or upgrade the system. The full treatment of clock control and timestamps is in [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).

---

## A Worked Example: Tracing One Setpoint Change

It helps to follow a single event through the stack, because that is what an inspector does. Suppose a bioreactor temperature setpoint was changed mid-batch. The questions, and where each is answered:

1. **What was the setpoint changed from and to?** The DCS or PLC holds the change. If only the new value exists with no prior value, the record is incomplete.
2. **Who changed it?** This needs an individual account at the layer where the change was made. A shared HMI login answers "production," which is no answer.
3. **When, against a trustworthy clock?** The timestamp is only meaningful if the system is synchronized, so the change can be placed correctly relative to the rest of the batch.
4. **Was it authorized?** Either the MES enforced it as a controlled, in-recipe deviation with an electronic signature, or it was an off-recipe change that should surface as a deviation and feed a [deviation investigation](/articles/deviation-management).
5. **Did it affect the product?** The historian provides the actual temperature profile before and after, so reviewers can judge impact rather than guess.

**The same trace, shown as evidence:**

| Question | Source system | Good answer | Bad answer (becomes a finding) |
|----------|--------------|-------------|--------------------------------|
| From / to | DCS config audit trail | 37.0 to 36.5 deg C captured | Only 36.5 stored, no prior value |
| Who | Individual login on DCS | "T. ENGINEER (ID 3390)" | "operator" (shared account) |
| When | NTP-synced timestamp | 2026-03-14 09:12 UTC, sync verified | Local clock, 6-minute drift vs MES |
| Authorized | MES e-signed deviation | Controlled in-recipe change, signed | No record, change appears nowhere |
| Product impact | Historian trend | Full profile retrievable, no excursion | Compressed away, gap in the trend |

If any of those five questions has no clean answer, that single setpoint change becomes a data integrity finding. Walking real changes through this chain during an internal review is one of the better ways to find your own gaps before an inspector does.

---

## Common Mistakes and Inspection-Finding Patterns

These recur across inspections and warning letters in pharmaceutical, biotech, and device manufacturing. None name a company; all are patterns you can check for at your own site.

- **Audit trail present but never reviewed.** The system records changes, but no one looks at the trail during batch review, so an anomalous edit would never be caught. Having the function is not the control; reviewing it is.
- **Audit trail disabled or configurable off.** A privileged account can switch the trail off, or it shipped off by default and was never turned on. Confirm it is on, enforced, and that enabling state is itself controlled.
- **Shared HMI logins on the night shift.** Day shift uses individual accounts, but a generic login persists where supervision is thinner. Attribution fails exactly when it matters most.
- **Historian compression set for storage, not for evidence.** Deadbands tuned during commissioning to save disk space quietly drop the transient values that prove a deviation did or did not breach a limit.
- **Recipe changed without versioning.** A parameter was adjusted at the controller and the prior recipe overwritten, so the firm cannot prove which recipe ran which batch.
- **Orphaned data on local drives.** Trend exports, screenshots, or troubleshooting captures saved to an engineering laptop or a local C: drive, outside the controlled record, where they can be created and deleted without trace.
- **Test and production share an environment.** Engineers test recipe changes in the live system because there is no qualified test environment, blurring what is real data and what is a trial.
- **Clock drift treated as cosmetic.** Time differences across systems written off as minor, until an investigation needs to order events to the minute and cannot.
- **"No exceptions" read as "no review needed."** Review-by-exception used as a reason to look at nothing, when the rule set has blind spots.
- **Backups never restore-tested.** The backup job runs green for years; the first real restore attempt, during an actual outage, reveals it never worked.

---

## Interview-Ready: Questions and How to Answer

These come up in interviews for manufacturing quality, CSV, and data integrity roles, and they mirror what an inspector asks on the floor. Strong answers are specific and show you understand both the rule and the risk.

**"An inspector asks an operator to show who changed a setpoint last shift, and the HMI uses a shared login. What is the finding and how do you remediate?"**
The finding is loss of attributability, the A in ALCOA, against Part 11 and Annex 11. Short term: assess scope, raise a deviation, and put a compensating control in place, for example a logbook tying named individuals to shift activity, while the technical fix lands. Long term: implement individual role-based accounts on the HMI, tie provisioning to HR, and validate the change. Be honest that the logbook is a bridge, not the cure.

**"What is the difference between the EBR and the MES audit trail?"**
The EBR is the assembled batch record for one lot, the thing reviewed for disposition. The audit trail is the continuous system log of who did what across all activity. They must be consistent. An inspector may ask for both and compare them.

**"How do you justify review-by-exception to an inspector?"**
The exception rules are validated and change-controlled, critical parameters are reviewed directly regardless of exceptions, data the system could not evaluate is flagged for manual review, and the review itself, including audit-trail review, is documented. "No exceptions" is never treated as "nothing to review."

**"A PLC controlling a critical parameter has no audit trail. Is that acceptable?"**
The gap is real and you cannot pretend otherwise. You scale controls to the data, not the software category. Acceptable interim posture is a documented set of compensating controls, physical access control, version-controlled external configuration, periodic baseline verification, and independent recording of the values at the supervisory layer, plus a remediation plan to replace or upgrade the device. What is not acceptable is leaving it uncontrolled and unjustified.

**"Why does time synchronization matter for data integrity?"**
Because the batch timeline is the spine of any investigation. If systems drift, genuine records look like backdating, and you cannot reliably order events. Sync every GxP system to a common reference, qualify it as a system attribute, monitor drift, and control who can change a clock.

**"Walk me through how you would prove a process value reported in the batch record is trustworthy."**
Trace it: the instrument that measured it (calibrated), the controller and supervisory system that captured it (validated, access-controlled, audit-trailed), the timestamp (synced), the interface to the historian (validated so what was measured is what was kept), and the historian retrieval (queryable, compression qualified to preserve the point). Each link is a control; a break anywhere is a finding.

**"What is the most common data integrity finding on a manufacturing floor and why?"**
Audit trail gaps and shared logins, because floor systems predate Part 11 maturity and were specified for control, not evidence. They are also the easiest to expose, which is why they recur in warning letters. More patterns are in [FDA warning letter patterns](/articles/fda-warning-letters-patterns).

For a wider set of practice questions across the discipline, see [GxP quality interview preparation](/articles/gxp-quality-interview-preparation).

---

## Practical Priorities

If you are trying to lift data integrity across a manufacturing automation environment and have to sequence the work, this order tends to give the most risk reduction per unit of effort:

1. **System inventory and criticality assessment.** Know what systems you have, what records each owns, and how those records feed quality decisions and regulatory submissions. You cannot remediate what you have not inventoried, and an inventory tied to a criticality rating tells you where to spend first. The method is covered in [data integrity gap assessment methodology](/articles/di-gap-assessment-methodology).

2. **Access control.** Eliminating shared HMI logins is a high-impact fix and often more procedural than technical in the short term. Full individual, role-based access takes longer to stand up but is the foundation of attributability, so start the work early even if it lands in stages.

3. **Audit trail coverage on high-criticality systems.** Find where audit-trail gaps carry the most regulatory risk, typically the MES, any LIMS tied to lot release, and any DCS controlling a critical process parameter, and address those first rather than spreading thin across everything.

4. **Time synchronization.** Get every GxP system onto a common source, document it as a qualified attribute, and monitor drift.

5. **Recipe and configuration management.** Put version control and change control around manufacturing recipes and critical system configurations so the version used for any batch is provable.

A note on effort and the modern CSV mindset. The point of risk-based assurance, which FDA's Computer Software Assurance guidance (draft 2022, finalized 2024) reinforces for production and quality system software, is to spend testing and documentation effort where patient-safety and product-quality risk is highest, and lighten it where it is not. On the floor that means the MES, lot-release-linked LIMS, and critical-parameter DCS get deep, scripted assurance; a non-GxP utility historian gets proportionately less. The framework is in [Computer Software Assurance from FDA](/articles/computer-software-assurance-fda).

None of this is one project. It is a program, and it lives inside the wider [data governance framework](/articles/data-governance-framework) that defines roles, controls, and review cadence across the site. The floor is usually the last area that framework reaches and the one where it pays off most, because that is where the batch is made and where the record either holds together or does not.

---

## Cross-links

- [21 CFR Part 11 and EU Annex 11: Electronic Records and Signatures Explained](/articles/21-cfr-part-11-eu-annex-11)
- [Automation Validation Across PLC, SCADA, and DCS](/articles/automation-validation-plc-scada-dcs)
- [PLC, DCS, and HMI Fundamentals](/articles/plc-dcs-hmi-fundamentals)
- [ISA-88 Batch Control and Recipes](/articles/isa-88-batch-control-recipes)
- [Process Historian Data Integrity](/articles/process-historian-data-integrity)
- [Audit Trail Design and Review: What FDA Actually Expects](/articles/audit-trail-design-and-review)
- [Operationalizing Audit Trail Review](/articles/operationalizing-audit-trail-review)
- [Batch Record Review in GMP](/articles/batch-record-review-gmp)
- [GAMP 5: The Framework for Risk-Based Computer System Validation](/articles/gamp5-csv-framework)
- [Computer Software Assurance from FDA](/articles/computer-software-assurance-fda)
- [Time Stamps and System Clock Control](/articles/time-stamps-and-system-clock-control)
- [Electronic Signatures Implementation](/articles/electronic-signatures-implementation)
- [Data Integrity Foundations: What It Is and Why Regulators Care](/articles/data-integrity-foundations)
- [Backup, Restore, and Disaster Recovery Validation](/articles/backup-restore-disaster-recovery-validation)
- [GxP Quality Interview Preparation](/articles/gxp-quality-interview-preparation)
