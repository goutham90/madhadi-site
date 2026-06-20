---
title: "MES, EBR, SCADA, and the Shop Floor: Data Integrity in Manufacturing Automation"
description: "How data integrity requirements apply to manufacturing automation: MES, electronic batch records, SCADA, DCS, PLCs, and historians. Where the compliance gaps are and how to close them."
pubDate: 2025-10-23
tags: ["MES", "SCADA", "manufacturing", "data-integrity", "21-CFR-Part-11", "GxP"]
tier: "Intermediate"
pillar: "manufacturing-automation"
---

The manufacturing floor generates more GxP data than any other area of a pharmaceutical facility. A single biologic production batch may involve continuous data streams from bioreactors, discrete process events logged by a distributed control system, in-process samples recorded in a laboratory information management system (LIMS), and a complete batch record executed in a manufacturing execution system (MES). The total can run to millions of individual data points before anyone signs the lot release.

It is also, in most organizations, the area with the weakest data integrity program. The reasons are structural. Manufacturing automation systems often predate modern Part 11 expectations. They were specified by control engineers focused on keeping a process inside its operating window, not on attributability or audit trails. And the people who own them day to day, automation engineers, controls technicians, and plant IT, frequently have less formal GxP training than laboratory analysts who have lived with electronic records since chromatography software arrived.

The result is a predictable pattern in inspections and warning letters: the lab gets the scrutiny first, the lab cleans up first, and then an inspector walks onto the floor, asks an operator to show who changed a bioreactor setpoint last shift, and the gap becomes visible. This article walks through the system layers, the requirements that apply to each, the gaps that recur, and a sequencing that lets a small team make real progress without trying to remediate everything at once.

---

## The System Environment

Data integrity on the floor starts with knowing what systems exist and what each one does. A useful way to picture it is a stack: physical equipment at the bottom controlled by embedded controllers, a supervisory layer above that, a batch-execution layer above that, and an enterprise layer on top. Data flows up the stack and is archived along the way. Each layer has its own integrity profile.

| Layer | Typical system | Primary GxP record it owns | Most common integrity gap |
|-------|---------------|----------------------------|---------------------------|
| Enterprise | ERP | Material genealogy, lot disposition status | Weak link to the actual batch record |
| Execution | MES / EBR | The official batch record | Corrections that overwrite the original entry |
| Supervisory | SCADA / HMI | Operator actions, alarms, trends | Shared logins, no access-event audit trail |
| Control | DCS | Setpoints, recipe parameters, process values | No audit trail on configuration changes |
| Device | PLC | Equipment-level control logic and setpoints | No audit trail capability at all |
| Archive | Historian | Long-term time-series process data | Compression that discards meaningful points |

### MES (Manufacturing Execution System)

An MES manages the execution of batch manufacturing. It routes the batch record to operators, enforces step sequences, captures operator actions and confirmations, applies in-process limits, and generates the electronic batch record (EBR). In a mature plant the MES integrates directly with process control systems for parameter values, with the LIMS for in-process sample results, and with ERP for material dispensing and consumption. It becomes the hub through which the batch story flows.

From a data integrity standpoint the MES is the highest-criticality system on the floor, because it produces the official record on which the lot release decision is made. Under [21 CFR Part 11](/articles/21-cfr-part-11-eu-annex-11) and EU GMP Annex 11, an electronic batch record carries the same regulatory weight as a paper one, and the controls must match that weight. The core requirements:

- Individual user accounts for every operator. No shared logins, no generic "production" account.
- An audit trail that captures every entry, correction, and approval with user identity, timestamp, old value, new value, and reason where applicable.
- Electronic signatures meeting Part 11 Subpart C for critical review and approval steps, including the printed name, date and time, and meaning of the signature.
- Change control over master batch records and system configuration, so the version of the master used for a given lot is identifiable and traceable.
- A validated system with documented qualification and a periodic review that confirms it has stayed in its validated state.

A subtle point that trips up new MES owners: the MES audit trail and the EBR are not the same thing. The EBR is the assembled record for one batch. The audit trail is the continuous, system-level log of who did what. An inspector may ask for both, and the two must tell a consistent story.

### Electronic Batch Records (EBR)

The EBR is the batch record executed and stored in the MES. It differs from paper in how corrections work. There is no ink, no single line through a wrong number with an initial and date beside it. A correction in an EBR has to follow a defined process that keeps the original entry, records the new entry, captures the reason, and identifies who made and approved the change.

The classic gap shows up here. An operator types a weight, realizes it is wrong, and corrects it. If the system stores only the corrected value with a fresh timestamp, the original is gone. That is an Original and Complete failure under [ALCOA+](/articles/alcoa-plus-deep-dive), and it is exactly the kind of finding that turns a routine inspection sour, because it suggests the system was configured without understanding what a GMP record is. The EBR must retain both the original and the correction, the reason, and the approver. During system validation this is something to test directly: make a correction, then go look at whether the original value is still retrievable and presented as part of the record.

Two EBR behaviors are worth confirming during user acceptance testing. First, that the system prevents progression past a critical step until the required entry and verification are complete, rather than allowing operators to skip and backfill. Second, that an aborted or partial batch still produces a reviewable record rather than vanishing, because partial and failed batches are exactly the ones investigators want to read.

### SCADA (Supervisory Control and Data Acquisition)

SCADA systems monitor and supervise the process: temperature, pressure, flow, pH, dissolved oxygen, agitation, and hundreds of other parameters across a unit operation. They generate the continuous data stream that is, for much of a batch, the process record. The supervisory layer is also where operators interact with the process through the human-machine interface (HMI), so it is where most operator actions originate.

SCADA presents several recurring data integrity problems:

**Audit trail limitations.** Many SCADA platforms were built for operational visibility, not regulatory evidence. They will happily log process events and alarms but may not log access events, configuration changes, or alarm acknowledgments at the granularity Part 11 expects. The audit trail then shows what the system did without showing who did it or why.

**Time synchronization.** A SCADA server running on its own clock, drifting against the MES and LIMS, produces timestamps that no longer line up across systems. When an investigator correlates records, those mismatches read like backdating even when every entry is genuine. More on this below, because it deserves its own treatment.

**Access control.** Older SCADA deployments often run a single shared operator account at the HMI, or a near-empty access model where everyone can do everything. That makes individual attributability impossible, which undermines the A in ALCOA before any other control matters.

**Alarm management.** Who acknowledged an alarm, when, and what they did about it are GxP records. A system that does not retain alarm acknowledgment history, or that lets alarm history be edited without an audit trail, or that allows retrospective acknowledgment with no flag, creates an attribution gap on safety-relevant events.

### DCS (Distributed Control System)

A DCS controls and monitors the process at the equipment level, coordinating the controllers, sensors, and actuators that physically run the operation. It is frequently the source of record for critical process parameters, because it holds the setpoints and reads the instruments. The data integrity focus for a DCS is on:

- An audit trail for configuration changes, meaning recipe edits, setpoint changes, and alarm-limit changes, with user and old and new values.
- Access control that separates configuration rights from monitoring rights, so a viewing operator cannot silently alter control logic.
- Defined data retention and archival of process records, usually via the historian.
- A clean, validated interface to the historian so that what the DCS measured is what the historian keeps.

The broader treatment of how SCADA, DCS, and PLC layers are validated as a connected system is covered in [automation validation across PLC, SCADA, and DCS](/articles/automation-validation-plc-scada-dcs); the focus here is the integrity of the records they produce.

### PLCs (Programmable Logic Controllers)

PLCs are embedded controllers that run specific equipment: a bioreactor controller, an autoclave cycle controller, a fill line controller. They sit at the bottom of the stack, they generate process data, and they are frequently the weakest link in the whole program.

Many PLCs have limited or no audit trail capability for configuration changes. A setpoint or an alarm limit can be changed at the controller without any record of who changed it, when, or from what value. For a PLC that governs a critical process parameter in a GMP operation, that is a genuine gap, and it is not one you can fully close with a firmware update on legacy hardware.

The realistic approach is to understand exactly what the PLC controls, what logging it can produce, and what compensating controls cover the rest. This is where the [GAMP 5](/articles/gamp5-csv-framework) software-category framework earns its keep. A PLC running non-configured embedded firmware is usually treated as a lower category, but the criticality of the records and parameters it touches is independent of the category. So the validation and the controls are scaled to the data, not just the software type. Practically, the compensating controls tend to be procedural: locked-cabinet or key-switch access to the controller, configuration captured and version-controlled outside the device, periodic verification that the running configuration matches the approved baseline, and the supervisory layer recording the parameter values the PLC drives so there is an independent witness to what actually happened.

### Process Historians

A process historian is a time-series database that stores the continuous streams from the DCS, SCADA, and other control systems. It is the long-term archive of process data, and it is routinely left out of data integrity programs because it looks like infrastructure rather than a user-facing application. That omission is a mistake. The historian is where process data lives for the retention period, and if a batch has to be reconstructed years later for a complaint or a regulatory question, the historian is the source.

The concerns specific to historians:

- **Retrieval.** Can you query the historian and pull back the full process record for one batch, bounded by its start and end, in a form a reviewer can read? A historian you cannot easily query is a poor archive.
- **Compression.** Most historians store trend data using compression rather than every raw point, keeping the points that define the curve and dropping the rest. The question is whether the compression settings preserve every GxP-significant point, including transient excursions and the values around an alarm. A deadband tuned for storage efficiency can quietly erase the exact spike an investigator needs.
- **Access control and audit trail.** Can stored values be edited, and if so, is there an audit trail? Historians are mostly insert-only by design, but back doors and bulk-edit utilities exist, and they need to be controlled.
- **Backup and recovery.** Is the historian backed up, and has a restore actually been tested? An untested backup is a hope, not a control. The validation of backup and restore for archives is its own discipline, covered in [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation).

---

## 21 CFR Part 11 on the Shop Floor

[21 CFR Part 11](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11) applies to electronic records and electronic signatures in GxP manufacturing exactly as it applies to LIMS and chromatography data systems in the lab. The requirements do not change at the door to the production suite. What changes is the maturity of implementation, because floor systems are older, more tightly coupled, and owned by people less steeped in the regulation. FDA's 2003 guidance on the scope and application of Part 11 set a risk-based tone that still governs how inspectors weigh these systems: controls should be proportionate to the record's impact on product quality and patient safety. EU Annex 11 reinforces the same expectations for inspections under EU GMP. The four gaps that recur most often:

**1. Inadequate audit trails.** SCADA and DCS systems that log process events but not access events, alarm acknowledgments with user identity, or configuration changes. The trail shows the machine's behavior but not the human's.

**2. Shared operator accounts.** A single login shared across a shift at an HMI is extremely common and squarely inconsistent with attributability. It is also one of the more visible findings, because an inspector only has to ask one operator to log in to expose it.

**3. Alarm history manipulation.** Alarm histories that can be acknowledged retrospectively, or that drop the identity of the acknowledging operator, or that can be cleared without trace.

**4. Recipe and program management.** Manufacturing recipes, meaning the process instructions programmed into the DCS or MES, are GMP-critical documents. Recipe changes must go through change control, and the recipe version used for a specific batch must be identifiable after the fact. Many automation platforms have thin version control for recipes, so a change can be made and the prior version lost. Tying recipe management into the formal [change control process for validated systems](/articles/change-control-validated-systems) is what closes this.

A note on the difference between a finding and a falsification. Most floor audit-trail gaps are honest design limitations, not fraud. But an inspector cannot tell the two apart from the outside, and a gap that makes data unverifiable is treated as a serious deficiency regardless of intent. That is the argument for fixing them: not that someone manipulated data, but that the system cannot prove no one did.

---

## Review-by-Exception and Batch Record Review

In a high-volume plant the batch record review has to be practical, because reviewing every one of millions of data points by eye is neither feasible nor genuinely valuable. Review-by-exception is the standard answer: the system applies validated, rule-based checks across the record and flags entries outside acceptable limits, and the reviewer focuses on the flagged exceptions plus a defined set of critical data, rather than reading every point.

Review-by-exception is acceptable in GMP under specific conditions:

- The exception rules are documented, validated, and managed through change control, so a quiet edit to a limit cannot silently shrink what gets reviewed.
- The review itself is documented: what was reviewed, which exceptions were found, and how each was resolved or justified.
- Critical data points get appropriate scrutiny whether or not an exception fired. Lot identity, yield, and critical process parameters should be reviewed directly.
- Data that could not be evaluated automatically, because of a system outage, a format problem, or a broken interface, is flagged for manual review rather than passing silently.

The failure mode to guard against is treating "no exceptions" as "nothing to review." A rule set only catches what it was written to catch. If a parameter has no rule, an out-of-trend value can sail through with no flag and no human ever looking at it. The broader mechanics of reviewing the record, including who reviews what and the order of operations, are in [batch record review in GMP](/articles/batch-record-review-gmp), and audit-trail review specifically in [audit trail design and review](/articles/audit-trail-design-and-review).

---

## Time Synchronization

Time synchronization is fundamental wherever several systems generate records that have to be correlated. If the SCADA server, the LIMS, and the MES each keep their own clock, their timestamps drift apart, and a reviewer trying to line up a sample draw against a process event against an operator action sees inconsistencies that look like time manipulation even when every record is authentic. On the floor this is acute, because a single batch crosses many systems and the timeline is the spine of the investigation when something goes wrong.

The fix is to synchronize every GxP system to a common, reliable reference using Network Time Protocol or an equivalent, with the synchronization treated as a qualified attribute of each system rather than an afterthought. That means it appears in the qualification documentation, the source is defined, and drift is monitored rather than assumed. A few practical details that matter:

- Decide and document the time zone convention. Mixing local time and a coordinated standard across systems reintroduces the problem you were trying to solve.
- Handle daylight-saving transitions deliberately, because the duplicated or skipped hour creates ordering ambiguity in records spanning the change.
- Lock down who can change a system clock, because a freely editable clock is itself a data integrity weakness.

For older systems that genuinely cannot be synchronized, document the maximum expected clock drift, monitor it, and write the procedure for accounting for the known offset when records are compared. That is a compensating control, not a cure, and it should carry a plan to replace or upgrade the system.

---

## A Worked Example: Tracing One Setpoint Change

It helps to follow a single event through the stack, because that is what an inspector does. Suppose a bioreactor temperature setpoint was changed mid-batch. The questions, and where each is answered:

1. **What was the setpoint changed from and to?** The DCS or PLC holds the change. If only the new value exists with no prior value, the record is incomplete.
2. **Who changed it?** This needs an individual account at the layer where the change was made. A shared HMI login answers "production," which is no answer.
3. **When, against a trustworthy clock?** The timestamp is only meaningful if the system is synchronized, so the change can be placed correctly relative to the rest of the batch.
4. **Was it authorized?** Either the MES enforced it as a controlled, in-recipe deviation with an electronic signature, or it was an off-recipe change that should surface as a deviation and feed a [deviation investigation](/articles/deviation-management).
5. **Did it affect the product?** The historian provides the actual temperature profile before and after, so reviewers can judge impact rather than guess.

If any of those five questions has no clean answer, that single setpoint change becomes a data integrity finding. Walking real changes through this chain during an internal review is one of the better ways to find your own gaps before an inspector does.

---

## Practical Priorities

If you are trying to lift data integrity across a manufacturing automation environment and have to sequence the work, this order tends to give the most risk reduction per unit of effort:

1. **System inventory and criticality assessment.** Know what systems you have, what records each owns, and how those records feed quality decisions and regulatory submissions. You cannot remediate what you have not inventoried, and an inventory tied to a criticality rating tells you where to spend first. The method is covered in [data integrity gap assessment methodology](/articles/di-gap-assessment-methodology).

2. **Access control.** Eliminating shared HMI logins is a high-impact fix and often more procedural than technical in the short term. Full individual, role-based access takes longer to stand up but is the foundation of attributability, so start the work early even if it lands in stages.

3. **Audit trail coverage on high-criticality systems.** Find where audit-trail gaps carry the most regulatory risk, typically the MES, any LIMS tied to lot release, and any DCS controlling a critical process parameter, and address those first rather than spreading thin across everything.

4. **Time synchronization.** Get every GxP system onto a common source, document it as a qualified attribute, and monitor drift.

5. **Recipe and configuration management.** Put version control and change control around manufacturing recipes and critical system configurations so the version used for any batch is provable.

None of this is one project. It is a program, and it lives inside the wider [data governance framework](/articles/data-governance-framework) that defines roles, controls, and review cadence across the site. The floor is usually the last area that framework reaches and the one where it pays off most, because that is where the batch is made and where the record either holds together or does not.

---

## Cross-links

- [21 CFR Part 11 and EU Annex 11: Electronic Records and Signatures Explained](/articles/21-cfr-part-11-eu-annex-11)
- [Automation Validation Across PLC, SCADA, and DCS](/articles/automation-validation-plc-scada-dcs)
- [Audit Trail Design and Review: What FDA Actually Expects](/articles/audit-trail-design-and-review)
- [Batch Record Review in GMP](/articles/batch-record-review-gmp)
- [GAMP 5: The Framework for Risk-Based Computer System Validation](/articles/gamp5-csv-framework)
- [Data Integrity Foundations: What It Is and Why Regulators Care](/articles/data-integrity-foundations)
- [Backup, Restore, and Disaster Recovery Validation](/articles/backup-restore-disaster-recovery-validation)
