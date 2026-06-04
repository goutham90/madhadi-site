---
title: "GxP Manufacturing and Laboratory Systems: MES, SCADA, LIMS, CDS, and ELN"
description: "How the major GxP informatics systems — MES, SCADA, DCS, PLC, historians, LIMS, ELN, and CDS — generate and manage regulated data, their specific data integrity risks, and how 21 CFR Part 11 applies on the shop floor."
pubDate: 2025-10-16
tags: ["MES", "LIMS", "CDS", "SCADA", "GxP", "21-CFR-Part-11", "data-integrity"]
pillar: "manufacturing-automation"
tier: "Intermediate"
---

Pharmaceutical data integrity is usually discussed for laboratory systems, LIMS, CDS, ELN. But the manufacturing floor is where an equal or greater volume of GxP data is generated: batch manufacturing records in MES, process parameters from DCS and SCADA, historian data from bioreactors and environmental monitoring, packaging records from line management systems. All of it is subject to the same data integrity requirements, and the specific risks are often less well-understood than their laboratory counterparts.

This article covers the major system categories, their data integrity characteristics, and where the specific risks lie.

---

## Manufacturing Execution Systems (MES) and Electronic Batch Records (EBR)

An MES is the system that manages and documents manufacturing operations in real time, directing manufacturing personnel through production steps, collecting electronic signatures at critical steps, capturing in-process measurements, and generating the electronic batch record (EBR) as a complete, contemporaneous documentation of the manufacturing process.

**Data integrity strengths of a well-implemented MES:**
- Contemporaneous capture of each step, timestamped at execution
- Electronic signatures that bind individual operators to specific actions
- Audit trail at the step level, who performed each step, what values were entered, what deviations were noted
- System-enforced sequence (the system prevents skipping steps or recording steps out of order)

**Data integrity risks in MES implementations:**
- Incomplete or incorrect configuration of the audit trail, MES audit trails need to capture field-level changes, not just step completion events
- Electronic signature design, some MES implementations allow step sign-off without confirming the operator's identity again after initial login, making a "sign-off marathon" at end-of-shift possible
- Interface gaps, where the MES doesn't directly interface with process control systems (SCADA, DCS), values are manually transcribed from control system displays into MES fields, introducing transcription risk
- Hybrid batch records, some facilities use MES for some steps and paper for others; the integrity of the hybrid record requires particular attention to how paper and electronic steps are linked and reviewed

**Part 11 on the MES:** The electronic batch record is a 21 CFR Part 11 record. The MES must support individual user accounts, compliant electronic signatures, complete audit trails, and record export in human-readable form. Many MES platforms are designed for Part 11 compliance, but configuration is required, a default installation may not have all controls enabled.

---

## SCADA, DCS, and PLC Systems

SCADA (Supervisory Control and Data Acquisition), DCS (Distributed Control System), and PLC (Programmable Logic Controller) systems control and monitor manufacturing processes, temperature, pressure, pH, flow rates, agitation, environmental conditions. They generate enormous volumes of process data, most of it in near-real-time.

**Data integrity considerations unique to SCADA/DCS/PLC:**

**Audit trails on PLCs and historians are often weak.** Unlike LIMS or MES, process control systems are often configured without the audit trail rigor expected of GxP records. A SCADA system that shows temperature stayed within range throughout a batch is a GxP record, but many SCADA implementations don't maintain audit trails that capture who changed setpoints, what the previous values were, or when access events occurred. This is a common finding in FDA inspections.

**Time synchronization is critical and often not addressed.** SCADA and DCS systems may run on dedicated networks without access to an NTP server, resulting in instrument-level clocks that drift. When a batch record needs to correlate MES timestamps with DCS parameter data, clock discrepancies can appear to indicate that steps occurred out of sequence.

**Alarm management.** SCADA systems generate alarm records when process parameters exceed thresholds. In a GxP context, alarm records are part of the batch record, they document process events that may have affected product quality. Alarm records that are automatically cleared or overwritten are a data integrity gap.

**Configuration management.** PLC programs that control critical process parameters are GxP records. The current validated PLC program version should be documented, and changes to it should go through change control. PLC programs changed without change control, even for apparently minor adjustments, are a validation finding.

**Process historians.** Many facilities use process historians (OSIsoft PI is a common platform) to store continuous streams of process data. Historian data is often used for batch record review and trending. Data integrity requirements for historians: the data should be captured in a form that can be compared against the approved process parameters, the historian should be validated, and the connection between historian data and the batch record should be defined.

---

## Laboratory Information Management Systems (LIMS)

The LIMS is the central laboratory data management system, receiving samples, managing testing assignments, storing results, applying specification limits, and generating certificates of analysis. For most regulated laboratories, the LIMS is the highest-criticality GxP system (Tier 1 in a data criticality tiering framework).

**LIMS data integrity fundamentals:**
- Individual user accounts with role-based access controls (analyst, supervisor, QA reviewer, each with different capabilities)
- Audit trail at the field level for all result entries and modifications, capturing prior values
- Electronic approval workflows with compliant electronic signatures at each approval step
- Specification limit checking and flagging of OOS results
- Data export with metadata preservation

**LIMS-specific risks:**
- Configuration of the audit trail during initial validation. As described in the [audit trail design article](/articles/audit-trail-design-and-review), LIMS audit trails are frequently misconfigured to capture events but not prior values.
- Interface with instruments. The interface between the LIMS and analytical instruments is a data transfer point. If instrument results are imported via manual CSV or copy-paste rather than validated electronic interface, the transfer is a human data entry step with no automated verification.
- LIMS versioning and change control. LIMS software is updated regularly. Changes to LIMS software should go through impact assessment and, where GxP-critical functions are affected, should include revalidation testing before deployment to the production environment.

---

## Chromatography Data Systems (CDS)

The CDS is the software that controls HPLC, UPLC, GC, and other chromatographic instruments, acquiring raw data, managing instrument methods, controlling sequences, processing data through integration and calibration, and storing results. CDS platforms (Empower, Chromeleon, ChemStation, OpenLAB) are among the most frequently cited systems in FDA data integrity enforcement actions.

**Why CDS platforms draw so many findings:**
1. Raw data generation and processing happen within the same system, meaning the same user who generated the data can also reprocess it
2. Integration parameters (the settings that determine how peaks are identified and measured) are configurable after data acquisition, allowing results to be changed
3. Many CDS implementations have incomplete audit trail configuration, events are logged but prior values are not captured

**Specific CDS data integrity controls:**
- Audit trail must capture integration parameter changes with prior values
- Reprocessing of raw data (changing integration settings after acquisition) should require documented justification and a second review
- The "original" result and all subsequent reprocessing versions should be retained
- Sequence logs should show all injections performed, including failing runs
- The connection between the raw data file and the reported result should be unambiguous

**Instrument-to-CDS and CDS-to-LIMS interfaces** are both transfer points requiring integrity verification. The raw data file in the CDS is the original; the result in the LIMS is a downstream record. The chain from raw data to reported result should be traceable and verified.

---

## Electronic Lab Notebooks (ELN)

ELNs replace paper lab notebooks for research and development data, formulation development, method development, and in some cases laboratory investigations. Their data integrity requirements are equivalent to LIMS for the data they manage, but their implementation history is more variable.

**ELN-specific considerations:**
- ELNs are often used in less structured workflows than LIMS, entries are more narrative, less structured, and harder to audit systematically
- Audit trails in ELNs must capture field-level edits to structured data (numerical entries, date/time fields) as well as changes to narrative text entries
- ELNs may receive data from instruments via electronic import, or users may manually transcribe instrument readings, both are common
- ELNs used for GxP activities (method development that will be used in a submission, lab investigations that support batch disposition) are Part 11 records

The distinction between what's "in scope" for Part 11 in an ELN is sometimes ambiguous. The practical approach: any notebook entry that contributes to a GxP decision or regulatory submission is in scope. Many organizations err toward broader coverage rather than trying to maintain sharp lines between in-scope and out-of-scope content within the same ELN.

---

## Review-by-Exception on the Shop Floor

Review-by-exception (RBE) is an approach to electronic batch record review where the reviewer's attention is directed toward exceptions, departures from expected values, alarmed events, steps completed outside expected time windows, rather than reviewing every data point.

In principle, RBE is a risk-based approach that focuses human review effort where it's needed. In practice, the design of RBE workflows is critical: if the exceptions are defined too narrowly, the reviewer only sees a small fraction of the batch record and important issues may be missed. If the exceptions are defined too broadly, RBE provides no efficiency benefit over full review.

FDA expects that RBE workflows are validated, that the exception criteria are documented and risk-justified, and that records of what was reviewed and what was flagged are maintained. RBE is not a reduction in oversight, it's a redirection of oversight toward higher-risk items.

---

## The Weak Link: Interfaces Between Systems

In most pharmaceutical operations, data doesn't stay in one system. It moves: from the instrument to the CDS, from the CDS to the LIMS, from the LIMS to the MES or ERP, from all of them to the regulatory submission. Each of those moves is a potential integrity failure point.

The pattern that drives the most findings: manual data transfer. An analyst reads a result from the CDS, types it into the LIMS. The LIMS value may or may not match the CDS value, there's no automated verification. Errors are detectable only by comparison between systems, and that comparison typically doesn't happen unless there's a finding that triggers investigation.

Validated electronic interfaces, where data is transferred programmatically with checksum verification, eliminate the human transcription risk. Building and validating those interfaces is resource-intensive but pays dividends in data quality and inspection readiness. Prioritizing interfaces for Tier 1 systems and high-volume data flows is the practical starting point.
