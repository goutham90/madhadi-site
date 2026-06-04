---
title: "MES, EBR, SCADA, and the Shop Floor: Data Integrity in Manufacturing Automation"
description: "How data integrity requirements apply to manufacturing automation systems — MES, electronic batch records, SCADA, DCS, PLCs, and historians. Where the compliance gaps are and how to address them."
pubDate: 2025-10-23
tags: ["MES", "SCADA", "manufacturing", "data-integrity", "21-CFR-Part-11", "GxP"]
tier: "Intermediate"
pillar: "manufacturing-automation"
---

The manufacturing floor generates more GxP data than any other area of a pharmaceutical facility. A single biologic production batch may involve continuous data streams from bioreactors, discrete process events logged by a DCS, in-process samples recorded in a LIMS, and a complete batch record executed in an MES, totaling millions of individual data points before the batch is released.

It is also, in most organizations, the area with the weakest data integrity program. The reasons are structural: manufacturing automation systems often predate modern Part 11 compliance expectations; they were designed by engineers focused on process control rather than regulatory compliance; and the people responsible for them, manufacturing, automation, and IT, may not have the same GxP training as laboratory staff.

---

## The System Landscape

Understanding data integrity in manufacturing automation starts with understanding what systems are involved and what role each plays.

### MES (Manufacturing Execution System)

An MES is the system that manages the execution of batch manufacturing, routing batch records to operators, enforcing step sequences, capturing operator actions and confirmations, and generating the electronic batch record (EBR).

In a mature implementation, the MES integrates directly with process control systems (DCS/SCADA), LIMS (for in-process sample results), and ERP systems (for materials management). It is the hub through which all manufacturing data flows.

From a data integrity perspective, the MES is a high-criticality system: it generates the official batch record on which lot release decisions are made. Under 21 CFR Part 11 and EU Annex 11, an electronic batch record has the same regulatory status as a paper batch record, and the controls must be commensurate.

Key data integrity requirements for MES:
- Individual user accounts for all operators; no shared logins
- Audit trail capturing all entries, corrections, and approvals with user, timestamp, and previous value
- Electronic signatures for critical review and approval steps
- Change control for any change to master batch records or system configuration
- Validated system with documented IQ/OQ/PQ and periodic review

### Electronic Batch Records (EBR)

The EBR is the batch record executed and stored in the MES. It differs from a paper batch record in how corrections are made, there is no ink, no signature over a crossed-out entry. Corrections in an EBR must follow a documented process that retains the original entry and provides an audit trail of the correction.

A common compliance gap in EBR implementations is that corrections can be made in ways that overwrite the original entry. If an operator corrects a weight entry and the system records only the corrected value with a timestamp, the original value is lost, an Original/Complete failure under ALCOA+. The EBR must be configured to retain both the original entry and the correction, with the reason for correction and the approver's identity.

### SCADA (Supervisory Control and Data Acquisition)

SCADA systems monitor and control manufacturing processes, temperature, pressure, flow rates, pH, agitation in bioreactors, and hundreds of other process parameters. SCADA systems generate continuous data streams that are the process record for critical manufacturing operations.

SCADA systems present several data integrity challenges:

**Audit trail limitations.** Many SCADA systems were designed for operational visibility, not regulatory compliance. Their logging capabilities may not meet Part 11 requirements, they may log process events but not log access events, configuration changes, or alarm acknowledgments with sufficient granularity.

**Time synchronization.** SCADA systems that are not synchronized to a reference time standard (NTP or equivalent) create apparent timestamp discrepancies that look like backdating when they are compared against other system records.

**Access control.** Many older SCADA systems have single shared operator accounts or minimal access control, making individual attributability impossible.

**Alarm management.** Alarm acknowledgment records, who acknowledged an alarm, when, and what action was taken, are GxP records. Systems that do not retain alarm acknowledgment history or allow alarm histories to be modified without audit trail are a compliance risk.

### DCS (Distributed Control System)

A DCS controls and monitors manufacturing processes at the hardware level, the PLCs, sensors, and actuators that operate physical equipment. The DCS generates continuous process data that is often the source of record for critical process parameters.

Data integrity requirements for DCS systems focus on:
- Audit trail for configuration changes (recipe changes, setpoint changes, alarm limit changes)
- Access control for configuration versus monitoring access
- Data retention and archival of process records
- Integration with the historian (see below)

### PLCs (Programmable Logic Controllers)

PLCs are embedded controllers that manage specific equipment, a bioreactor controller, an autoclave cycle controller, a fill-and-finish line controller. They are low-level components that generate process data, and they are frequently the weakest link in a data integrity program.

Many PLCs have limited or no audit trail capability for configuration changes. A PLC setpoint can be changed without generating a record of who changed it, when, and from what value. For PLCs that control critical process parameters in GMP operations, this is a significant compliance gap.

Addressing PLC data integrity requires understanding what the PLC controls, what audit trail capabilities it has, and what controls (procedural or technical) can compensate for gaps. This is an area where the GAMP 5 category framework (Category 1 infrastructure through Category 5 custom software) becomes important: PLCs are typically Category 3 (non-configured, embedded software), but the data they generate and the parameters they control may be GMP-critical.

### Process Historians

A process historian is a time-series database that stores the continuous data streams from DCS, SCADA, and other process control systems. It is the primary archive of process data for manufacturing.

Process historians are often overlooked in data integrity programs because they are infrastructure rather than user-facing systems. This is a mistake. The historian is where process data lives long-term, and its integrity is foundational.

Key historian data integrity concerns:
- Data retrieval: can the data in the historian be queried and retrieved to reconstruct the process record for a specific batch?
- Data compression: most historians use data compression algorithms that store trend data rather than every data point. Does this compression preserve the GxP-significant data points?
- Access control and audit trail: can historian data be modified? Is there an audit trail for modifications?
- Backup and recovery: is the historian backed up? Has the backup been tested (i.e., can you actually restore from it)?

---

## 21 CFR Part 11 on the Shop Floor

[21 CFR Part 11](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11) requirements, audit trails, access controls, electronic signatures, apply to electronic records in GxP manufacturing the same way they apply to LIMS and CDS systems in the laboratory. But shop-floor implementation often lags laboratory implementation for practical reasons: older systems, more complex integration, and less familiarity with the requirements among automation engineers.

The four most common Part 11 compliance gaps in manufacturing automation:

**1. Inadequate audit trails.** SCADA and DCS systems often log process events but not access events, alarm acknowledgments with user identification, or configuration changes. The audit trail shows what the system did but not who did it or why.

**2. Shared operator accounts.** Operators sharing a single login on HMI (Human-Machine Interface) terminals is extremely common and completely inconsistent with attributability requirements.

**3. Alarm history manipulation.** SCADA alarm histories that can be acknowledged retrospectively, or that do not retain the identity of the acknowledging operator, create attribution gaps.

**4. Recipe/program management.** Manufacturing recipes (the process instructions programmed into DCS or MES) are GxP-critical documents. Recipe changes must go through change control. The version of the recipe used for a specific batch must be identifiable. Many automation systems have limited version control for recipes.

---

## Review-by-Exception and Batch Record Review

In a high-volume manufacturing environment, the batch record review process must be practical. Review-by-exception is an approach where the electronic system performs rule-based checks and flags entries that fall outside acceptable limits, the reviewer then focuses on flagged exceptions rather than reviewing every individual data point.

Review-by-exception is acceptable in GxP environments under several conditions:
- The exception rules must be documented, validated, and controlled through change control
- The review must be documented, what was reviewed, what exceptions were found, how they were resolved
- The review process must show that critical data points receive appropriate scrutiny even if no exceptions are flagged
- The system must ensure that data that cannot be reviewed (due to system outage, format issues, etc.) is flagged for manual review

Review-by-exception does not mean that data is only reviewed when a rule is triggered. Critical data, lot identity, yields, critical process parameters, should receive direct review regardless of whether exceptions were flagged.

---

## Time Synchronization

Time synchronization is fundamental to data integrity in manufacturing environments where multiple systems generate records that must be correlated. If a SCADA system, a LIMS, and an MES each have different clock times, the timestamps in their records will not match, creating apparent inconsistencies that look like backdating or time manipulation even when the data is authentic.

The solution is to synchronize all GxP systems to a common, reliable time source using NTP (Network Time Protocol) or equivalent. This is a technical requirement that should be part of the qualification documentation for every GxP system.

For older systems that cannot be synchronized, the validation documentation should include the maximum expected clock drift and the procedure for documenting and accounting for time discrepancies.

---

## Practical Priorities

If you are trying to improve data integrity across a manufacturing automation environment and need to prioritize, focus first on:

1. **System inventory and criticality assessment.** Know what systems you have, what data they generate, and how critical that data is to quality decisions and regulatory submissions.

2. **Access control.** Shared operator logins on HMI terminals are a simple, high-impact fix. Individual accounts with role-based access take resources to implement but are fundamental to attributability.

3. **Audit trail coverage on high-criticality systems.** Identify the systems where audit trail gaps pose the greatest regulatory risk, typically MES, LIMS connected to lot release, and any DCS controlling critical process parameters, and address those first.

4. **Time synchronization.** Ensure all GxP systems are synchronized to a common time source and the synchronization is documented and monitored.

5. **Recipe and configuration management.** Implement version control and change control for manufacturing recipes and critical system configurations.

---

## Cross-links

- [21 CFR Part 11 and EU Annex 11: Electronic Records and Signatures Explained](/articles/21-cfr-part-11-eu-annex-11)
- [Audit Trail Design and Review: What FDA Actually Expects](/articles/audit-trail-design-and-review)
- [GAMP 5: The Framework for Risk-Based Computer System Validation](/articles/gamp5-csv-framework)
- [Data Integrity Foundations: What It Is and Why Regulators Care](/articles/data-integrity-foundations)
