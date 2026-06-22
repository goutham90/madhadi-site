---
title: "GxP Manufacturing and Laboratory Systems: MES, SCADA, LIMS, CDS, and ELN"
description: "How the major GxP informatics systems, MES, SCADA, DCS, PLC, historians, LIMS, ELN, and CDS, generate and manage regulated data, their specific data integrity risks, and how 21 CFR Part 11 applies on the shop floor."
pubDate: 2025-10-16
tags: ["MES", "LIMS", "CDS", "SCADA", "GxP", "21-CFR-Part-11", "data-integrity"]
pillar: "manufacturing-automation"
tier: "Intermediate"
---

Data integrity is usually discussed in terms of laboratory systems: LIMS, chromatography, electronic notebooks. But the manufacturing floor generates an equal or greater volume of GxP data: batch manufacturing records in MES, process parameters from DCS and SCADA, historian data from bioreactors and environmental monitoring, packaging and serialization records from line management systems. All of it falls under the same data integrity requirements, and the specific risks are often less well understood than their laboratory counterparts. The same picture holds for a small-molecule oral solid dose plant, a sterile fill-finish line, a biologics drug substance suite, or a medical device assembly cell. The systems differ in detail, the obligations do not.

The reason for the imbalance is partly historical. Laboratory instruments grew up under analyst-by-analyst scrutiny, and inspectors learned to look hard at chromatography. Process control systems came from the industrial automation world, where the design priorities were uptime, throughput, and safety, not regulatory recordkeeping. A controller that runs a fermenter or a sterilizer flawlessly for five years can still keep no usable audit trail. That mismatch between engineering intent and GMP expectation is where most shop floor findings come from.

This article walks through the major system categories, the kind of regulated data each one creates, the specific integrity risks attached to it, how to configure and validate each control, and where 21 CFR Part 11 and EU GMP Annex 11 actually bite. It is written to serve three readers at once: someone new to GxP who needs the system map, a working validation or QA practitioner who needs the failure modes and acceptance criteria, and a program owner deciding where to spend limited remediation budget. The interview sections at the end of each system give you the questions an inspector or hiring manager asks, with answers that show you have done the work.

For the underlying principles referenced throughout, see [data integrity foundations](/articles/data-integrity-foundations) and [ALCOA+ in detail](/articles/alcoa-plus-deep-dive). For the regulatory text itself, see the [21 CFR Part 11 and EU Annex 11 guide](/articles/21-cfr-part-11-eu-annex-11).

---

## The regulatory basis, in one place

Before the systems, fix the rules they answer to. Every control in this article traces back to a specific obligation.

| Requirement | Source | What it demands |
|---|---|---|
| Records and signatures equivalent to paper | 21 CFR Part 11 (FDA, effective 1997; scope narrowed by the 2003 Scope and Application guidance) | Validation, audit trails, copies in human-readable form, record retention, signature-to-record binding, operational and authority checks |
| Computerised systems in EU GMP | EudraLex Volume 4, Annex 11 (current version 2011) | Risk management, validated state, data security, audit trails for GMP-relevant changes, accuracy checks, periodic evaluation |
| cGMP records and controls | 21 CFR 211.68 (automatic equipment), 211.180-211.194 (records and reports) | Backup, input/output checks, complete batch and laboratory records |
| Data integrity expectations | FDA Data Integrity and Compliance with cGMP, guidance for industry (2018); MHRA GxP Data Integrity Guidance (2018); PIC/S PI 041 (2021); WHO TRS 1033 Annex 4 (2021) | ALCOA, audit trail review, true copies, system access control, the original-record concept |
| Computerised system lifecycle | ISPE GAMP 5 Second Edition (2022) | Risk-based, scalable validation by software category; supplier reuse; data integrity by design |
| Software assurance approach | FDA Computer Software Assurance for Production and Quality System Software (draft 2022, finalized 2025) | Risk-based, least-burdensome assurance for non-product software, scripted vs unscripted testing |
| Device production and process software | 21 CFR 820.70(i), now harmonized under the QMSR (21 CFR 820, effective February 2026, incorporating ISO 13485:2016) | Validation of software used in production or the quality system per its intended use |

Keep that table close. When an inspector asks "what requires this control," you cite the row, not a feeling. The device columns matter because the same MES, SCADA, and LIMS platforms run in device plants under 820.70(i) and ISO 13485, not just in drug plants under Part 211.

---

## A quick map of the systems

It helps to see how the systems relate. Data on the manufacturing and laboratory side tends to flow in two roughly parallel chains that meet at batch disposition.

| System | What it does | Primary GxP record it owns | GAMP 5 software category (typical) | Typical criticality |
|---|---|---|---|---|
| PLC | Executes control logic on equipment | Control program, real time setpoints | 3-4 (configured/custom logic) | High (program), variable (data) |
| DCS / SCADA | Supervises and monitors process | Process parameter trends, alarms | 4 (configured) | High |
| Historian | Archives continuous process data | Long term parameter history | 4 (configured) | High |
| MES / EBR | Directs and documents production | Electronic batch record | 4-5 (configured to custom) | Very high |
| LIMS | Manages sample testing and release | Results, specifications, CoA | 4 (configured) | Very high |
| CDS | Runs and processes chromatography | Raw data files, integrated results | 4 (configured) | Very high |
| ELN | Records lab work and investigations | Structured and narrative entries | 3-4 (COTS to configured) | Variable |

Criticality is not fixed. A data criticality tiering exercise, covered in [data criticality and data risk](/articles/data-criticality-and-data-risk), assigns it based on the GMP decision the data supports, not on the price of the software. A validated spreadsheet that sets a release limit can outrank a six figure platform. The GAMP category drives how much testing you do and how much you can reuse from the supplier; the criticality drives how hard you scrutinize the result. The two are independent, and confusing them is a common planning error.

---

## Manufacturing Execution Systems (MES) and Electronic Batch Records (EBR)

### What it is and why it is required

An MES manages and documents manufacturing operations in real time. It directs personnel through production steps, collects electronic signatures at critical points, captures in-process measurements, enforces material and equipment status, and generates the electronic batch record (EBR) as a complete, contemporaneous account of the process. The EBR is the record that 21 CFR 211.188 and 211.186 require (the batch production record and the master production record), rendered electronically. A mature MES turns the batch record from a paper artifact filled out after the fact into a workflow that cannot move forward until the right thing has been done in the right order by the right person, which is exactly the "contemporaneous" leg of ALCOA.

### What goes in it

A controlled master batch record (MBR) in the MES typically holds:

- An ordered recipe of phases and operations, often structured per the ISA-88 batch model (see [ISA-88 batch control and recipes](/articles/isa-88-batch-control-recipes)).
- Material specifications, dispensing limits, and equipment/room status prerequisites for each step.
- Defined data-entry fields with type, units, and acceptance limits.
- Electronic signature points, each declaring its meaning (performed by, verified by, reviewed by, approved by).
- Branching logic for deviations, in-process holds, and yield reconciliation.
- Bill of materials and genealogy links so component lots roll up to the finished lot.

The executed EBR adds the timestamps, the entered values, the operator and verifier identities, any flagged deviations, and the field-level audit trail.

### How to do it: configuration and validation sequence

1. Author the MBR from the approved master formula and process; route it through [document control](/articles/document-control-fundamentals) and a defined MBR approval workflow.
2. Configure user roles and the segregation matrix so an operator cannot also be the independent verifier on the same critical step.
3. Configure each signature point to force re-authentication at the moment of signing, not once per session.
4. Set field-level edit rules: type, units, range, and a forced reason-for-change on any post-entry edit.
5. Turn on the field-level audit trail and confirm it records prior value, new value, user, timestamp, and reason.
6. Test the negative paths in OQ/PQ: try to skip a step, sign out of order, enter an out-of-range value, and edit a signed field. Each must be blocked or trapped, with evidence captured.
7. Validate any interfaces to weigh scales, SCADA/DCS, and LIMS as part of the same effort.

### Data integrity strengths of a well implemented MES

- Contemporaneous capture of each step, timestamped at execution.
- Electronic signatures that bind individual operators to specific actions, meeting the 211.188 attribution and the Part 11 signature-to-record link.
- Audit trail at the field level: who performed each step, what values were entered, what was edited, and why.
- System-enforced sequence, so the system prevents skipping steps or recording them out of order.
- Inline limit checks that stop an out-of-range entry from being accepted silently.

### Data integrity risks in MES implementations

- **Audit trail scope too shallow.** MES audit trails need to capture field-level changes, not just step-completion events. A record that shows "Step 14 complete" but not that the weight field was edited from 49.2 to 50.2 kg before sign off is missing the part an investigator cares about.
- **Weak signature design.** Some configurations allow step sign-off without re-confirming identity after initial login, which makes an end-of-shift "sign-off marathon" possible, where one person signs a batch's worth of steps in a few minutes. Part 11 expects signatures applied at the time of the act they attest to.
- **Interface gaps.** Where the MES does not directly interface with process control, values are manually transcribed from a SCADA or DCS display into MES fields, reintroducing the transcription risk the MES was supposed to remove.
- **Hybrid batch records.** Many facilities run some steps in MES and others on paper. The integrity of a hybrid record depends on how the paper and electronic portions are linked, reconciled, and reviewed as one record. A loose paper insert with no controlled link to the electronic master is a common gap. See [hybrid paper and electronic records](/articles/hybrid-paper-electronic-records).

### Acceptance criteria

You know the MES is configured correctly when: every critical step has an attributable, contemporaneous signature that required re-authentication; the field-level audit trail returns prior value and reason for any edit; the system blocks out-of-sequence execution and out-of-range entry; segregation of duties is enforced by configuration, not policy; and a reviewer can export the full EBR plus its audit trail in human-readable form for a named batch.

### Worked example

A weigh-and-dispense step requires 50.0 kg of an excipient with a tolerance of plus or minus 0.5 kg. The operator stages 49.2 kg, the system rejects it (below tolerance), the operator adds material and reweighs to 50.1 kg, and the step completes.

| Event | Time | User | Field value | Audit trail entry |
|---|---|---|---|---|
| First weight | 08:14:02 | jdoe | 49.2 kg | Rejected, below 49.5 kg low limit |
| Second weight | 08:16:41 | jdoe | 50.1 kg | Accepted |
| Step sign-off | 08:16:55 | jdoe | - | Performed-by signature, re-auth confirmed |
| Verification | 08:17:30 | asmith | - | Verified-by signature, re-auth confirmed |

A well configured EBR shows both the rejected and accepted readings. A poorly configured one shows only 50.1 kg. Six months later, during a deviation investigation, the difference between those two records is the difference between a clean explanation and an inspector asking why the first attempt vanished.

### Roles and responsibilities

Manufacturing owns MBR content and execution. Automation/MES engineering owns configuration and the platform. QA owns MBR approval, the audit trail review standard, and final disposition. Validation owns the qualification protocols and the negative-path testing. IT owns infrastructure, backup, and access provisioning. The system owner (often a manufacturing or QA manager) owns periodic review.

### Common mistakes and inspection-finding patterns

Shared or generic operator logins on the shop floor (defeats attribution). Audit trail disabled or set to events-only "to save space." Critical fields configured as free text instead of validated numeric fields. The same person performing and verifying because the role matrix was never enforced. Paper backups run in parallel and treated as the real record while the EBR drifts unreviewed.

### Interview-ready

> "How do you keep an operator from signing a whole batch at end of shift?"

Force re-authentication at each signature point and timestamp it; then review timestamps against process duration. A burst of signatures inside two minutes for a four-hour process is the signal, and the audit trail makes it visible.

> "What is the difference between the MBR and the EBR?"

The MBR is the approved, version-controlled master (211.186); the EBR is the executed instance for one batch with all entries, signatures, and audit trail (211.188). Confusing them, or letting an EBR deviate from the approved MBR without change control, is a finding.

See [batch record review in GMP](/articles/batch-record-review-gmp) and [batch disposition decisions](/articles/batch-disposition-decisions) for how the completed EBR is then assessed.

---

## SCADA, DCS, and PLC Systems

### What they are and why they matter

SCADA (Supervisory Control and Data Acquisition), DCS (Distributed Control System), and PLC (Programmable Logic Controller) systems control and monitor manufacturing processes: temperature, pressure, pH, flow, agitation, fill weight, environmental conditions. They generate large volumes of near real-time process data. The PLC executes deterministic control logic on the equipment; the DCS coordinates and supervises a process plant; SCADA provides operator visibility, alarming, and data collection over a wider area. Their validation approach is covered in [automation validation for PLC, SCADA, and DCS](/articles/automation-validation-plc-scada-dcs) and the architecture in [PLC, DCS, and HMI fundamentals](/articles/plc-dcs-hmi-fundamentals); this section concentrates on the data integrity exposures, where the most findings sit.

### Audit trails on PLCs and historians are often weak

Unlike LIMS or MES, process control systems are frequently configured without the audit trail rigor expected of GxP records. A SCADA system that shows temperature stayed within range throughout a sterilization cycle is a GxP record, yet many SCADA implementations do not capture who changed a setpoint, what the previous value was, or when access events occurred. PLCs in particular often have no native audit trail at all; the program lives in controller memory and changes leave no trace unless an external change-management layer or a version-control tool records them. This recurs in FDA and EU inspection observations year after year.

The fix is layered. Capture setpoint and recipe-parameter changes in the SCADA/HMI audit trail with prior value, user, and time. Protect the PLC program with offline version control and change control so the running logic can be proven against an approved baseline. Where the PLC genuinely cannot record changes, the compensating control is procedural change management plus a checksum or program-comparison check after every change.

### Time synchronization is critical and often not addressed

SCADA and DCS systems may run on isolated networks with no link to a reliable time source, so instrument-level clocks drift. When a batch record needs to correlate MES timestamps with DCS parameter data, clock discrepancies can make legitimate steps look out of sequence, or hide a real one. The fix is a controlled, validated time source (an NTP server traceable to a reference) feeding all GxP systems, with documented synchronization frequency, an allowed drift tolerance, and operator-level inability to change the clock. See [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).

### Alarm management

SCADA systems raise alarm records when parameters exceed thresholds. In a GMP context, alarms are part of the batch record because they document events that may have affected product quality. Alarms that auto-clear, roll off a fixed-length buffer, or get overwritten before review are an integrity gap. Alarm history must be retained for the life of the record, and the review process has to actually look at it. A useful rule: any alarm tied to a critical process parameter must survive to batch review and appear in the review-by-exception report.

### Configuration management

A PLC program that controls a critical process parameter is itself a GxP record. The current validated program version should be documented and protected, and any change should go through [change control for validated systems](/articles/change-control-validated-systems). PLC logic edited live to "tweak" a setpoint ramp, with no change record, is a classic finding, and the fact that the edit was minor and well intentioned does not save it.

### Process historians

Many facilities use a process historian (OSIsoft PI and AVEVA Historian are common platforms, named here only as neutral examples) to store continuous process data for batch review and trending. Historian data integrity has three load-bearing requirements: the data must be captured in a form that can be compared against approved process parameters, the historian must be validated as a GxP system, and the relationship between historian data and the batch record must be formally defined so everyone knows which copy is the official one.

Compression settings deserve specific attention. Historians routinely apply deadband or swinging-door compression to save storage, and if that compression discards excursions that matter, the archived trace no longer faithfully represents what happened. The control is to set and qualify compression so it cannot drop a value that crosses an action or alert limit, and to document the chosen deadband as a validated parameter. See [process historian data integrity](/articles/process-historian-data-integrity).

### Acceptance criteria

A controlled time source feeds every GxP system within a stated tolerance. Setpoint and recipe changes are attributable with prior values. PLC programs are under version control and verifiable against an approved baseline. Alarms tied to critical parameters are retained for the record life and surfaced at review. Historian compression is qualified not to drop limit-crossing values, and the official copy of any value is defined.

### Roles and responsibilities

Automation/controls engineering owns the programs, setpoints, and the historian configuration. IT owns time servers and network segregation. QA owns the GxP classification, the alarm-review standard, and change approval. Validation qualifies the system and the compression behavior.

### Common mistakes and inspection-finding patterns

PLC logic with no audit trail and no offline baseline. Operators able to change setpoints with no record. Clocks unsynchronized across MES, DCS, and CDS, producing impossible sequences. Alarms overwritten before review. Historian compression set for storage convenience, silently smoothing out an excursion that a batch review should have caught.

### Interview-ready

> "A PLC has no native audit trail. Is that automatically a violation?"

No, but it is a gap you must close with compensating controls: tight physical and logical access, offline version control of the program, change management, and a post-change program comparison or checksum. You prove the running logic equals the approved baseline.

> "Why do you care about historian compression?"

Because compression can discard the very excursion the batch review exists to find. I qualify the deadband so no value that crosses an action or alert limit is dropped, and I document the setting as a validated parameter.

---

## Laboratory Information Management Systems (LIMS)

### What it is and why it is required

The LIMS is the central laboratory data management system: it receives samples, manages testing assignments, stores results, applies specification limits, and generates the certificate of analysis (see [certificate of analysis](/articles/certificate-of-analysis)). For most regulated laboratories it is the highest-criticality GxP system, typically the top tier in a data criticality framework, because its output drives the release decision under 211.165 and 211.194. Its result-to-release path is what an inspector follows first.

### What goes in it and how to configure it

LIMS data integrity fundamentals, with the configuration intent behind each:

- **Individual accounts with role-based access**, so analyst, supervisor, and QA reviewer hold different capabilities. Configure roles so no single role can both enter and release a result.
- **Field-level audit trail** for all result entries and modifications, capturing prior values, not just the fact that something changed. Confirm prior-value capture during validation by editing a value and retrieving the original.
- **Electronic approval workflows** with compliant electronic signatures at each step (see [electronic signatures implementation](/articles/electronic-signatures-implementation)).
- **Specification limit checking** with automatic flagging of out-of-specification results, wired to the [OOS investigation process](/articles/oos-investigation-process).
- **Data export** that preserves the associated metadata, so an exported result is still a true copy with its context (see [static vs dynamic records and true copies](/articles/static-dynamic-records-true-copies)).

### LIMS-specific risks

- **Audit trail configuration during initial validation.** As described in [audit trail design and review](/articles/audit-trail-design-and-review), LIMS audit trails are frequently set up to record events but not prior values, which defeats the purpose. Whoever writes the validation protocol should test the trail by making a change and confirming the old value is retrievable.
- **Instrument interfaces.** The link between the LIMS and analytical instruments is a data transfer point. If results arrive by manual CSV import or copy-paste rather than a validated electronic interface, the transfer is a human data-entry step with no automated verification, and the OOS detection logic only sees whatever number the analyst typed.
- **Versioning and change control.** LIMS software is updated regularly and is highly configurable. Changes should go through impact assessment, and where GxP-critical functions are affected, revalidation testing belongs before deployment to production, never after. Configuration changes made directly in production without a controlled path are themselves a finding.

A practical control worth singling out: the LIMS should not let the same person enter a result and approve its release. Segregation of duties enforced in the workflow is far more reliable than a policy asking people to behave.

### Worked example

A potency assay returns 92.4 percent against a specification of 95.0 to 105.0 percent. Configured correctly, the LIMS flags the result OOS on entry, locks it from edit, and routes it to the OOS workflow with the analyst, instrument, and timestamp captured. Configured poorly, the limit check is off, the analyst sees a red number, "corrects" the dilution by hand, and re-enters 96.1 percent with no audit trail of the first value. The first case produces a defensible investigation; the second produces a falsified record and, when found, a data-integrity citation.

### Acceptance criteria, roles, and common mistakes

You are done when limit checks fire automatically and lock OOS results, the audit trail returns prior values, segregation of duties is enforced in workflow, and interfaces transfer results without manual retyping. The lab manager owns the system and workflows; QA owns release configuration and audit-trail review; validation owns qualification; IT owns infrastructure. The recurring findings: shared analyst logins, audit trail without prior values, manual result import bypassing the interface, and config changes made live in production.

### Interview-ready

> "How do you prove a LIMS audit trail is adequate?"

I do not take the vendor's word. During validation I change a result, then retrieve the prior value, user, timestamp, and reason from the trail. If the old value is gone, the trail is events-only and inadequate, and that is documented as a deficiency to fix before go-live.

See [LIMS implementation and validation](/articles/lims-implementation-and-validation) for the full lifecycle.

---

## Chromatography Data Systems (CDS)

### What it is and why it draws so many findings

The CDS controls HPLC, UPLC, GC, and other chromatographic instruments. It acquires raw data, manages instrument methods, controls injection sequences, processes data through integration and calibration, and stores results. Commercial CDS platforms such as Empower, Chromeleon, ChemStation, and OpenLAB (named only as neutral examples) are among the most frequently cited systems in FDA data integrity enforcement.

Three structural features make CDS a magnet for findings:

1. Raw data generation and processing happen in the same system, so the same user who generated the data can reprocess it.
2. Integration parameters, the settings that determine how peaks are identified and measured, are configurable after acquisition, which means a reported result can be changed without rerunning the sample.
3. Many implementations have incomplete audit trail configuration, where events are logged but prior values are not captured.

### The enforcement patterns you must know

A recurring pattern in published warning letters is the use of standalone "test" or unofficial injection sequences run outside the controlled project, sometimes into a folder that is later deleted, to find acceptable results before the official run ("testing into compliance"). Another is reintegration of failing peaks to bring a result into specification without a documented, reviewed justification. A third is using local administrator rights or a shared analyst login to delete data or change the system clock. The [FDA warning letter patterns](/articles/fda-warning-letters-patterns) article catalogues these. The common thread is that the system technically permitted the behavior, and the controls that should have prevented or revealed it were not configured.

### Specific CDS data integrity controls

- The audit trail must capture integration-parameter changes with prior values, and it must be turned on at the project or system level, not left to the user.
- Reprocessing of raw data should require documented justification and a second review before the new result is accepted.
- The original result and every subsequent reprocessing version should be retained, with the basis for selecting the reported result clear.
- Sequence and injection logs should show every injection performed, including aborted and failing runs, so deleted or hidden runs are detectable.
- Disable any local administrator rights that would let a user delete data files, change the system clock, or alter the audit trail. Keep system administration out of the analyst role.
- The link between the raw data file and the reported result should be unambiguous and traceable.

### Worked example: reading a sequence log

| Injection | Sample ID | Result | Audit trail / log note |
|---|---|---|---|
| 1-5 | System suitability | Pass | Standard sequence |
| 6 | Sample A | 99.1% | Official |
| 7 | Sample A "test" | 94.2% | Run in a separate, later-deleted project (red flag) |
| 8 | Sample A reinjection | 99.3% | No deviation referenced (red flag) |

A complete injection log shows injection 7 existed even though its project was deleted, and shows injection 8 with no documented reason. That visibility is the whole point of capturing aborted and failing runs. If the log only showed injection 6, the trail would hide the off-script work, which is exactly the gap inspectors probe.

### Acceptance criteria, roles, and common mistakes

The CDS is in good shape when: audit trail is system-level and captures integration changes with prior values; reprocessing needs justification plus second review; all injections including aborts are visible; analysts have no admin rights and cannot change the clock; and the raw-to-reported chain is traceable. The QC lab owns method and result; QC management plus QA own audit-trail review; system administration sits with a separated role; validation qualifies the configuration. The findings that repeat: audit trail off or user-controlled, analysts holding admin rights, orphaned and deleted projects, reintegration with no justification, and no review of the sequence log at second-person check.

### Interfaces

Instrument-to-CDS and CDS-to-LIMS are both transfer points that need integrity verification. The raw data file in the CDS is the original; the result in the LIMS is a downstream copy. The chain from raw data to reported result, then to certificate of analysis, should be traceable and periodically verified, not assumed. Qualification of the instruments feeding the CDS is covered in [analytical instrument qualification](/articles/analytical-instrument-qualification), and the dedicated treatment of CDS integrity is in [chromatography data system integrity](/articles/chromatography-data-system-integrity).

### Interview-ready

> "What is the single biggest CDS risk?"

Reprocessing in the same system that acquired the data, with a user-controlled audit trail. Someone can change integration to move a result and, if the trail is off, leave no trace. I fix it by forcing system-level audit trails with prior values, requiring justification and second review for any reprocessing, and removing admin rights from analysts.

---

## Electronic Lab Notebooks (ELN)

### What it is and where the boundary sits

ELNs replace paper lab notebooks for research and development, formulation and method development, and in some cases laboratory investigations. Their data integrity requirements match LIMS for the data they hold, but their implementation history is more variable because the workflows are less rigid.

The boundary of what is "in scope" for Part 11 within an ELN is sometimes ambiguous, because the same notebook may hold exploratory research and GxP-relevant work side by side. The workable principle: any entry that contributes to a GxP decision or a regulatory submission is in scope. Method development that supports a marketing application, comparability work, and investigation entries that support batch disposition are Part 11 records. Many organizations deliberately err toward broader coverage rather than policing a sharp line inside one system, since the cost of getting that line wrong falls on the side of a missing record.

### ELN-specific considerations

- Entries tend to be more narrative and less structured than LIMS records, which makes systematic audit harder. A free-text field that captures a calculation in prose is far harder to review than a typed numeric field with a defined edit history. Configure structured templates for GxP-relevant work so the values are auditable.
- Audit trails must capture field-level edits to structured data (numerical entries, date and time fields) as well as changes to narrative text. Versioning of attached files and instrument outputs belongs in scope too.
- ELNs may import data from instruments electronically, or users may transcribe instrument readings by hand. Both are common, and the second carries the same transcription risk as anywhere else.
- Witnessing and counter-signature workflows replace the paper "recorded by / witnessed by" convention and should be configured where the work requires a second-person record.

### Acceptance criteria, roles, common mistakes, interview

You are in good shape when GxP-relevant entries use structured templates, edits to both numeric and narrative content are captured with prior values, attachments are versioned, and the in-scope rule is documented and applied. R&D and lab scientists own the entries; QA owns the in-scope determination and witnessing rules; validation qualifies the templates and audit trail. The repeating mistakes: treating the whole ELN as out of scope, free-text capture of results that should be structured, and unversioned attachments that can be swapped silently.

> "When is an ELN entry a Part 11 record?"

Whenever it contributes to a GxP decision or a regulatory submission. I do not try to police a fine line inside the notebook; I apply structured, audit-trailed templates to any GxP-relevant work and treat that content as regulated.

---

## Review by Exception on the Shop Floor

Review by exception (RBE) is an approach to electronic batch record review that directs the reviewer's attention to exceptions, departures from expected values, alarmed events, steps completed outside expected time windows, rather than to every individual data point. It is what makes a fully electronic batch review practical at scale, and it is permitted because risk-based oversight is explicitly endorsed in ICH Q9 quality risk management and the Annex 11 risk-based approach.

In principle, RBE focuses human effort where it is needed. In practice the design of the exception logic decides everything. Define the exceptions too narrowly and the reviewer sees only a sliver of the batch record while real problems pass unseen. Define them too broadly and RBE collapses back into full review with extra steps and no benefit. The exception rules are, in effect, the review procedure, and they deserve the same scrutiny as any other GMP control.

How to design it: list every failure mode a full manual review would catch (out-of-range entry, late step, alarm on a critical parameter, edited signed field, yield outside limits, unreconciled material). For each, write the exception rule that surfaces it, then validate that the rule fires on a seeded failure during PQ. Document and risk-justify the exception criteria, and keep records of what was reviewed and what was flagged.

FDA and EU inspectors expect RBE workflows to be validated, the exception criteria documented and risk-justified, and records to show what was reviewed and what was flagged. RBE is not a reduction in oversight; it is a redirection of oversight toward higher-risk items.

**Acceptance test.** For any failure you would have caught in a full manual review, you can point to the exception rule that would surface it now. If not, that gap is a design defect, not an efficiency. Keep that as a standing question in every RBE design review and periodic review.

---

## The Weak Link: Interfaces Between Systems

In most operations, data does not stay in one system. It moves: instrument to CDS, CDS to LIMS, LIMS to MES or ERP, SCADA to historian, and from all of them into the regulatory submission. Each move is a potential integrity failure point, and interfaces are where the cleanest individual systems still bleed quality.

The pattern that drives the most findings is manual data transfer. An analyst reads a result from the CDS and types it into the LIMS. The two values may or may not match, and nothing verifies it. Such errors are detectable only by comparing the systems against each other, and that comparison usually does not happen unless a finding has already triggered an investigation. By then the question is no longer whether one number was mistyped but whether the quality system can be trusted at all.

Validated electronic interfaces, where data moves programmatically with checksum or equivalent verification, remove the human transcription risk entirely. Building and validating them is resource intensive, but it pays back in data quality and inspection readiness. The practical starting point is to prioritize interfaces for top-tier systems and high-volume data flows, then work down by criticality. Where a manual transfer has to remain in the short term, a documented independent verification of the transferred value, by a second person or a controlled comparison, is the interim control required by Annex 11's accuracy-check expectation.

### Interface acceptance criteria

For every interface: the data type, range, and mapping are defined; the transfer is verified (checksum, record count, or a reconciled comparison); a failed or partial transfer is detected and alarmed, not silently dropped; and the official copy of each record is named so two systems holding the same value do not disagree about which is authoritative. Validate these in OQ by forcing a transfer failure and confirming the system catches it. See [data lifecycle and metadata](/articles/data-lifecycle-and-metadata) and [supply chain data integrity](/articles/supply-chain-data-integrity) for the broader flow.

---

## Pulling it together

A few principles tie the whole picture together. Decide for every record which system holds the original and protect that copy. Make the chain from raw data to reported result traceable end to end. Configure each system's audit trail to capture prior values, and confirm it during validation rather than trusting the vendor's defaults. Synchronize clocks across every GxP system from one validated source. Enforce segregation of duties in workflow, not in policy. Validate the exception logic behind any review-by-exception with the same rigor as a manual review.

The manufacturing floor and the laboratory generate different kinds of data, but they answer to the same standard. The systems that look least like "data systems," the PLCs and SCADA layers humming away on the line, are often the ones carrying the quietest risk. An inspector who finds a clean lab and an unaudited controller has found a story, and it is rarely a short one.

For related reading, see [GxP computerized systems operations](/articles/gxp-computerized-systems-operations), the [GAMP 5 CSV framework](/articles/gamp5-csv-framework), [computer software assurance (FDA)](/articles/computer-software-assurance-fda), and [data integrity foundations](/articles/data-integrity-foundations). For interview practice across these systems, see [GxP quality interview preparation](/articles/gxp-quality-interview-preparation).
