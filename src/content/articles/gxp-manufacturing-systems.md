---
title: "GxP Manufacturing and Laboratory Systems: MES, SCADA, LIMS, CDS, and ELN"
description: "How the major GxP informatics systems, MES, SCADA, DCS, PLC, historians, LIMS, ELN, and CDS, generate and manage regulated data, their specific data integrity risks, and how 21 CFR Part 11 applies on the shop floor."
pubDate: 2025-10-16
tags: ["MES", "LIMS", "CDS", "SCADA", "GxP", "21-CFR-Part-11", "data-integrity"]
pillar: "manufacturing-automation"
tier: "Intermediate"
---

Pharmaceutical data integrity is usually discussed in terms of laboratory systems: LIMS, CDS, ELN. But the manufacturing floor is where an equal or greater volume of GxP data is generated: batch manufacturing records in MES, process parameters from DCS and SCADA, historian data from bioreactors and environmental monitoring, packaging records from line management systems. All of it is subject to the same data integrity requirements, and the specific risks are often less well understood than their laboratory counterparts.

The reason for the imbalance is partly historical. Laboratory instruments grew up under analyst-by-analyst scrutiny, and inspectors learned to look hard at chromatography. Process control systems came from the industrial automation world, where the design priorities were uptime and safety, not regulatory recordkeeping. A controller that runs a fermenter flawlessly for five years can still keep no usable audit trail. That mismatch between engineering intent and GMP expectation is where most shop floor findings come from.

This article walks through the major system categories, the kind of regulated data each one creates, the specific integrity risks attached to it, and where 21 CFR Part 11 and EU GMP Annex 11 actually bite. It is written to serve three readers at once: someone new to GxP who needs the system map, a working validation or QA practitioner who needs the failure modes, and a program owner deciding where to spend limited remediation budget.

For the underlying principles referenced throughout, see [data integrity foundations](/articles/data-integrity-foundations) and the [ALCOA+ guide](/articles/alcoa-plus-deep-dive). For the regulatory text itself, see the [21 CFR Part 11 and EU Annex 11 guide](/articles/21-cfr-part-11-eu-annex-11).

---

## A quick map of the systems

Before the detail, it helps to see how the systems relate. Data on the manufacturing and laboratory side tends to flow in two roughly parallel chains that meet at batch disposition.

| System | What it does | Primary GxP record it owns | Typical criticality |
|---|---|---|---|
| PLC | Executes control logic on equipment | Control program, real time setpoints | High (program), variable (data) |
| DCS / SCADA | Supervises and monitors process | Process parameter trends, alarms | High |
| Historian | Archives continuous process data | Long term parameter history | High |
| MES / EBR | Directs and documents production | Electronic batch record | Very high |
| LIMS | Manages sample testing and release | Results, specifications, CoA | Very high |
| CDS | Runs and processes chromatography | Raw data files, integrated results | Very high |
| ELN | Records lab work and investigations | Structured and narrative entries | Variable |

Criticality is not fixed. A data criticality tiering exercise, covered in [data lifecycle and metadata](/articles/data-lifecycle-and-metadata), assigns it based on the GMP decision the data supports, not on the price of the software. A spreadsheet that sets a release limit can outrank a six figure platform.

---

## Manufacturing Execution Systems (MES) and Electronic Batch Records (EBR)

An MES manages and documents manufacturing operations in real time. It directs personnel through production steps, collects electronic signatures at critical points, captures in process measurements, and generates the electronic batch record as a complete, contemporaneous account of the manufacturing process. A mature MES turns the batch record from a paper artifact filled out after the fact into a living workflow that cannot move forward until the right thing has been done in the right order by the right person.

**Data integrity strengths of a well implemented MES:**
- Contemporaneous capture of each step, timestamped at execution
- Electronic signatures that bind individual operators to specific actions
- Audit trail at the step level: who performed each step, what values were entered, what deviations were noted
- System enforced sequence, so the system prevents skipping steps or recording them out of order
- Inline limit checks that stop an out of range entry from being accepted silently

**Data integrity risks in MES implementations:**
- Incomplete or incorrect configuration of the audit trail. MES audit trails need to capture field level changes, not just step completion events. A record that shows "Step 14 complete" but not that the weight field was edited from 49.2 to 50.2 kg before sign off is missing the part an investigator cares about.
- Electronic signature design. Some MES configurations allow step sign off without confirming the operator's identity again after initial login, which makes an end of shift "sign off marathon" possible, where one person signs a batch's worth of steps in a few minutes. Part 11 expects signatures to be applied at the time of the act they attest to.
- Interface gaps. Where the MES does not directly interface with process control systems, values are manually transcribed from a SCADA or DCS display into MES fields, reintroducing the transcription risk the MES was supposed to remove.
- Hybrid batch records. Many facilities run some steps in MES and others on paper. The integrity of a hybrid record depends entirely on how the paper and electronic portions are linked, reconciled, and reviewed as one record. A loose paper insert with no controlled link to the electronic master is a common gap.

**Worked example.** A weigh and dispense step requires 50.0 kg of an excipient. The operator stages 49.2 kg, the system rejects it, the operator adds material and reweighs to 50.1 kg, and the step completes. A well configured EBR shows both the rejected and accepted readings with timestamps. A poorly configured one shows only 50.1 kg. Six months later, during a deviation, the difference between those two records is the difference between a clean explanation and an inspector asking why the first attempt vanished.

**Part 11 and Annex 11 on the MES.** The electronic batch record is a Part 11 record and, under EU GMP, an Annex 11 record. The MES must support individual user accounts, compliant electronic signatures, complete audit trails, and export in human readable form. Most commercial MES platforms are designed to support compliance, but configuration is required. A default installation may not have all controls enabled, and the gap between "the platform can do this" and "this instance is configured to do this" is exactly what validation has to close. See [batch record review in GMP](/articles/batch-record-review-gmp) for how the completed EBR is then assessed.

---

## SCADA, DCS, and PLC Systems

SCADA (Supervisory Control and Data Acquisition), DCS (Distributed Control System), and PLC (Programmable Logic Controller) systems control and monitor manufacturing processes: temperature, pressure, pH, flow rates, agitation, environmental conditions. They generate enormous volumes of process data, most of it close to real time. The validation approach for these systems is covered in [automation validation for PLC, SCADA, and DCS](/articles/automation-validation-plc-scada-dcs); this section concentrates on the data integrity exposures.

**Audit trails on PLCs and historians are often weak.** Unlike LIMS or MES, process control systems are frequently configured without the audit trail rigor expected of GxP records. A SCADA system that shows temperature stayed within range throughout a batch is a GxP record, yet many SCADA implementations do not capture who changed a setpoint, what the previous value was, or when access events occurred. PLCs in particular often have no native audit trail at all; the program lives in controller memory and changes leave no trace unless an external layer records them. This recurs in FDA and EU inspection observations year after year.

**Time synchronization is critical and often not addressed.** SCADA and DCS systems may run on isolated networks with no link to a reliable time source, so instrument level clocks drift. When a batch record needs to correlate MES timestamps with DCS parameter data, clock discrepancies can make legitimate steps look out of sequence. The fix is a controlled, validated time source feeding all GxP systems, with documented synchronization frequency and tolerance.

**Alarm management.** SCADA systems raise alarm records when parameters exceed thresholds. In a GMP context, alarms are part of the batch record because they document events that may have affected product quality. Alarms that auto clear, roll off a fixed length buffer, or get overwritten before review are an integrity gap. Alarm history needs to be retained for the life of the record, and the review process has to actually look at it.

**Configuration management.** A PLC program that controls a critical process parameter is itself a GxP record. The current validated program version should be documented and protected, and any change should go through [change control](/articles/change-control-validated-systems). PLC logic edited live to "tweak" a setpoint ramp, with no change record, is a classic finding, and the fact that the edit was minor and well intentioned does not save it.

**Process historians.** Many facilities use a process historian, OSIsoft PI being a common platform, to store continuous streams of process data used for batch review and trending. Historian data integrity has three load bearing requirements: the data must be captured in a form that can be compared against approved process parameters, the historian must be validated as a GxP system, and the relationship between historian data and the batch record must be formally defined so everyone knows which copy is the official one. Compression settings deserve specific attention. Historians routinely apply deadband or swinging door compression to save storage, and if that compression discards excursions that matter, the archived trace no longer faithfully represents what happened.

---

## Laboratory Information Management Systems (LIMS)

The LIMS is the central laboratory data management system: it receives samples, manages testing assignments, stores results, applies specification limits, and generates certificates of analysis. For most regulated laboratories it is the highest criticality GxP system, typically Tier 1 in a data criticality tiering framework, because its output drives release decisions.

**LIMS data integrity fundamentals:**
- Individual user accounts with role based access controls, so analyst, supervisor, and QA reviewer each hold different capabilities
- Field level audit trail for all result entries and modifications, capturing prior values, not just the fact that something changed
- Electronic approval workflows with compliant electronic signatures at each step
- Specification limit checking and automatic flagging of out of specification results
- Data export that preserves the associated metadata

**LIMS specific risks:**
- Audit trail configuration during initial validation. As described in the [audit trail design and review article](/articles/audit-trail-design-and-review), LIMS audit trails are frequently set up to record events but not prior values, which defeats the purpose. Whoever writes the validation protocol should test the trail by making a change and confirming the old value is retrievable.
- Instrument interfaces. The link between the LIMS and analytical instruments is a data transfer point. If results arrive by manual CSV import or copy and paste rather than a validated electronic interface, the transfer is a human data entry step with no automated verification, and the OOS detection logic only sees whatever number the analyst typed.
- Versioning and change control. LIMS software is updated regularly, and the platform is highly configurable. Changes should go through impact assessment, and where GxP critical functions are affected, revalidation testing belongs before deployment to production, never after. Configuration changes made directly in production without a controlled path are themselves a finding.

A practical control worth singling out: the LIMS should not let the same person enter a result and approve its release. Segregation of duties enforced in the workflow is far more reliable than a policy asking people to behave.

---

## Chromatography Data Systems (CDS)

The CDS controls HPLC, UPLC, GC, and other chromatographic instruments. It acquires raw data, manages instrument methods, controls injection sequences, processes data through integration and calibration, and stores results. Commercial CDS platforms such as Empower, Chromeleon, ChemStation, and OpenLAB are among the most frequently cited systems in FDA data integrity enforcement.

**Why CDS platforms draw so many findings:**
1. Raw data generation and processing happen in the same system, so the same user who generated the data can reprocess it.
2. Integration parameters, the settings that determine how peaks are identified and measured, are configurable after acquisition, which means a reported result can be changed without rerunning the sample.
3. Many implementations have incomplete audit trail configuration, where events are logged but prior values are not captured.

The enforcement history here is specific and worth knowing. A recurring pattern in published warning letters is the use of standalone "test" or unofficial injection sequences run outside the controlled project, sometimes into a folder that is later deleted, to find acceptable results before the official run. Another is reintegration of failing peaks to bring a result into specification without a documented, reviewed justification. The [FDA warning letter patterns](/articles/fda-warning-letters-patterns) article catalogues these. The common thread is that the system technically permitted the behavior, and the controls that should have prevented or revealed it were not configured.

**Specific CDS data integrity controls:**
- The audit trail must capture integration parameter changes with prior values, and it must be turned on at the project or system level, not left to the user.
- Reprocessing of raw data should require documented justification and a second review before the new result is accepted.
- The original result and every subsequent reprocessing version should be retained, with the basis for selecting the reported result clear.
- Sequence and injection logs should show every injection performed, including aborted and failing runs, so deleted or hidden runs are detectable.
- Disable any local administrator rights that would let a user delete data files, change the system clock, or alter the audit trail.
- The link between the raw data file and the reported result should be unambiguous and traceable.

**Instrument to CDS and CDS to LIMS interfaces** are both transfer points that need integrity verification. The raw data file in the CDS is the original; the result in the LIMS is a downstream copy. The chain from raw data to reported result, then to certificate of analysis, should be traceable and periodically verified, not assumed. Qualification of the instruments feeding the CDS is covered in [analytical instrument qualification](/articles/analytical-instrument-qualification).

---

## Electronic Lab Notebooks (ELN)

ELNs replace paper lab notebooks for research and development, formulation development, method development, and in some cases laboratory investigations. Their data integrity requirements match LIMS for the data they hold, but their implementation history is more variable because the workflows are less rigid.

**ELN specific considerations:**
- Entries tend to be more narrative and less structured than LIMS records, which makes systematic audit harder. A free text field that captures a calculation in prose is far harder to review than a typed numeric field with a defined edit history.
- Audit trails must capture field level edits to structured data, numerical entries, date and time fields, as well as changes to narrative text. Versioning of attached files and instrument outputs belongs in scope too.
- ELNs may import data from instruments electronically, or users may transcribe instrument readings by hand. Both are common, and the second carries the same transcription risk as anywhere else.
- ELN entries used for GxP activities, method development that will support a submission, or investigations that support batch disposition, are Part 11 records.

The boundary of what is "in scope" for Part 11 within an ELN is sometimes ambiguous, because the same notebook may hold exploratory research and GxP relevant work side by side. The workable principle: any entry that contributes to a GxP decision or a regulatory submission is in scope. Many organizations deliberately err toward broader coverage rather than trying to police a sharp line between in scope and out of scope content inside one system, since the cost of getting that line wrong falls on the side of a missing record.

---

## Review by Exception on the Shop Floor

Review by exception (RBE) is an approach to electronic batch record review that directs the reviewer's attention to exceptions, departures from expected values, alarmed events, steps completed outside expected time windows, rather than to every individual data point. It is what makes a fully electronic batch review practical at scale.

In principle, RBE is a risk based method that focuses human effort where it is needed. In practice the design of the exception logic decides everything. Define the exceptions too narrowly and the reviewer sees only a sliver of the batch record while real problems pass unseen. Define them too broadly and RBE collapses back into full review with extra steps and no benefit. The exception rules are, in effect, the review procedure, and they deserve the same scrutiny as any other GMP control.

FDA and EU inspectors expect RBE workflows to be validated, the exception criteria to be documented and risk justified, and records to show what was reviewed and what was flagged. RBE is not a reduction in oversight; it is a redirection of oversight toward higher risk items. A useful test when designing it: for any failure you would have caught in a full manual review, can you point to the exception rule that would surface it now? If not, that gap is a design defect, not an efficiency.

---

## The Weak Link: Interfaces Between Systems

In most operations, data does not stay in one system. It moves: instrument to CDS, CDS to LIMS, LIMS to MES or ERP, and from all of them into the regulatory submission. Each move is a potential integrity failure point, and interfaces are where the cleanest individual systems still bleed quality.

The pattern that drives the most findings is manual data transfer. An analyst reads a result from the CDS and types it into the LIMS. The two values may or may not match, and nothing verifies it. Such errors are detectable only by comparing the systems against each other, and that comparison usually does not happen unless a finding has already triggered an investigation. By then the question is no longer whether one number was mistyped but whether the quality system can be trusted at all.

Validated electronic interfaces, where data moves programmatically with checksum or equivalent verification, remove the human transcription risk entirely. Building and validating them is resource intensive, but it pays back in data quality and inspection readiness. The practical starting point is to prioritize interfaces for Tier 1 systems and high volume data flows, then work down by criticality. Where a manual transfer has to remain in the short term, a documented independent verification of the transferred value, by a second person or a controlled comparison, is the interim control.

A few principles tie the whole picture together. Decide for every record which system holds the original and protect that copy. Make the chain from raw data to reported result traceable end to end. Configure each system's audit trail to capture prior values, and confirm it during validation rather than trusting the vendor's defaults. The manufacturing floor and the laboratory generate different kinds of data, but they answer to the same standard, and the systems that look least like "data systems," the PLCs and SCADA layers humming away on the line, are often the ones carrying the quietest risk.
