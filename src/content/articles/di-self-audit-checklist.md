---
title: "Data Integrity Self-Audit: A Compliance Checklist for GxP Organizations"
description: "A complete data integrity self-audit framework covering infrastructure controls, system configuration, procedural controls, work practice verification, and culture indicators. Structured to find what FDA inspectors find."
pubDate: 2026-06-04
tags: ["data-integrity", "audit", "ALCOA+", "FDA", "self-audit", "compliance"]
tier: "Advanced"
pillar: "data-integrity"
---

Running a data integrity self-audit is not a compliance exercise — it's an intelligence operation. The question isn't whether your documentation says the right things. It's whether your systems, procedures, and day-to-day practices actually produce ALCOA+ compliant records.

This checklist is structured in five layers: infrastructure controls, system configuration, procedural controls, work practice verification, and culture indicators. That layering matters. Most organizations can pass a documentation audit. Fewer can pass a forensic review of what their systems actually recorded over the past 12 months.

Work through each layer with someone who isn't the owner of the processes being assessed. Self-assessment is only useful if the assessors are willing to find real problems.

---

## Before You Start: Define Your System Inventory

Before any DI audit begins, confirm you have a complete, current inventory of all GxP-generating systems. Missing systems are the most common gap — not because organizations are hiding them, but because nobody knows what they don't know.

Your inventory should include every system that generates, modifies, stores, or transmits GxP data. That means:

- Standalone analytical instruments (HPLCs, UV-Vis, balances, pH meters, particle counters)
- Networked laboratory systems (LIMS, CDS, ELN)
- Manufacturing systems (MES, DCS/SCADA, process historians, ERP)
- Quality management systems (eQMS, EDMS, TrackWise, Veeva Vault)
- Clinical systems (EDC, CTMS, TMF)
- Infrastructure supporting GxP systems (network, backup, time server)
- Cloud or hosted applications used for GxP data

For each system, note: GxP criticality, validation status, data ownership, backup frequency, and last periodic review date. If you can't fill in all those fields for every system, that gap is your first finding.

---

## Layer 1: Infrastructure Controls

Infrastructure is the foundation that GxP systems sit on. If time is wrong, if backups fail, if access controls at the network level are weak, everything above them is compromised.

### System Time and Time Synchronization

- [ ] Are all GxP systems synchronized to a single, authoritative time source (typically NTP server)?
- [ ] Is the NTP server itself qualified or documented as part of the IT infrastructure qualification?
- [ ] Are workstations and servers prevented from having local time changed by individual users?
- [ ] Is there a documented process for investigating and documenting time discrepancies if they occur?
- [ ] Are timestamps in audit trails from different systems consistent with each other for concurrent events?

**What a finding looks like:** HPLC workstation times that are 4 minutes behind the LIMS, or an analyst who ran a test at 2:47 PM according to the instrument and at 2:30 PM according to the LIMS — which they share the same building, same network. Time sync failures are frequently cited in warning letters as evidence of audit trail manipulation because FDA investigators examine timestamps across systems.

### User Account Management

- [ ] Is there a documented process for creating, modifying, disabling, and deleting user accounts?
- [ ] Are there any shared or generic accounts (e.g., "admin," "labuser," "quality") used in GxP systems?
- [ ] When an employee leaves, how quickly are their accounts disabled? Is there documented evidence?
- [ ] Do contractors and temporary staff have individual accounts rather than shared access?
- [ ] Is there a periodic review of active accounts to confirm current users match current employees?
- [ ] Can you pull an account activity report for a departed employee and confirm they had no access after their termination date?

**Red flag:** If anyone says "we share the admin password between the lab manager and the backup analyst" — that's a finding. Immediately. Shared credentials eliminate attributability for every action taken under that account.

### Backup and Recovery

- [ ] Are backup schedules documented and followed for all GxP systems?
- [ ] Has backup recovery ever been tested? Is there a test record?
- [ ] Are backup media stored separately from primary systems (offsite or network-isolated)?
- [ ] Is there a documented retention period for backups that matches data retention requirements?
- [ ] Are archived electronic records retrievable and readable in human-readable form?
- [ ] Has anyone verified that old archived data is still readable (not just present on the storage medium)?

**What a finding looks like:** Backups running nightly but never tested for recovery. When FDA asks "can you restore your LIMS data to a specific point in time?" and the answer is "we've never tried that," it raises the question of whether the backups actually work.

### Network and Physical Access Controls

- [ ] Are GxP workstations protected from unauthorized physical access (locked rooms, login screens)?
- [ ] Can a walk-in visitor sit down at an analyst workstation and access GxP data without credentials?
- [ ] Are GxP system workstations protected from unauthorized software installation?
- [ ] Is there separation between GxP network segments and general corporate IT, or at least documented risk assessment of shared infrastructure?

---

## Layer 2: System Configuration

This layer looks at whether GxP systems are actually configured to enforce data integrity requirements — not just whether the SOP says they should be.

### Audit Trail Configuration

For each GxP system generating regulated records:

- [ ] Is the audit trail enabled and capturing all required events (data entry, modifications, deletions, approvals)?
- [ ] Does the audit trail capture the prior value when a result is changed?
- [ ] Is the audit trail protected from modification or deletion (protected by access controls, not editable even by system administrators)?
- [ ] Are the events captured in the audit trail timestamped to the system clock (not user-entered times)?
- [ ] Is there a documented procedure for audit trail review, including frequency and scope?
- [ ] Are audit trail reviews actually being performed and documented as evidence?

**The specific failure mode:** For chromatography data systems (Empower, ChemStation, Chromeleon), examine whether analysts have access to modify processing methods or integration parameters after the fact without the change appearing in the audit trail. CDS audit trail configuration is highly version- and configuration-dependent. The same system can have adequate or completely inadequate audit trail capture depending on how it's set up and which version is running.

### Electronic Signature Configuration

- [ ] Do electronic approvals require a unique username AND password (two-factor verification)?
- [ ] Is the electronic signature meaning (the what and why) captured at the time of signature?
- [ ] Are electronic signatures linked to their associated records in a way that can't be separated or repudiated?
- [ ] Is there a documented manifestation of the electronic signature — meaning does the signed record display the signatory's name, date/time, and meaning when printed or viewed?
- [ ] Are electronic signatures on GxP records (batch records, COAs, validation reports) as legally binding as handwritten signatures under the site's procedures?

### Access Controls and Role-Based Access

- [ ] Does every user's system access match their job function (principle of least privilege)?
- [ ] Are there any users with administrator access who don't need it for their job?
- [ ] Can analysts approve their own results without a second independent review?
- [ ] Are role assignments documented and reviewed periodically?
- [ ] When someone changes roles or responsibilities, is their system access updated to match the new role?

### System Configuration Controls

- [ ] For all configured GxP systems: is the configuration documented (configuration specifications or equivalent)?
- [ ] Are configuration changes managed through change control rather than ad-hoc modification?
- [ ] Is there a mechanism to detect unauthorized configuration changes (configuration verification as part of periodic review)?
- [ ] For laboratory instruments: are analytical methods protected from modification by users without appropriate access?

---

## Layer 3: Procedural Controls

Good system configuration is necessary but not sufficient. The SOPs have to close the gaps that technical controls can't.

### Data Recording Procedures

- [ ] Do your SOPs specify that data must be recorded directly to the GxP record — not to scratch paper, post-its, lab notebooks, or re-recorded from temporary notes?
- [ ] Do your procedures address what to do with pre-printed forms that have blanks, to prevent blank re-use or alteration?
- [ ] Are there clear procedures for corrections to paper records (single line through, date, initial — never white-out)?
- [ ] Do procedures specify that electronic data must not be processed in non-GxP tools (e.g., Excel for CDS data) before entry into the official record?

### OOS/Anomaly Handling Procedures

- [ ] Does the OOS procedure require investigation before retesting?
- [ ] Does the procedure prohibit invalidating a result without documented scientific justification?
- [ ] Does the procedure specify what constitutes a laboratory error assignable cause (and what doesn't)?
- [ ] Are all analytical runs, including failing ones, retained in the system?
- [ ] Does the procedure address what happens to "practice injections" or system suitability runs that precede actual sample analysis?

**This specific issue:** If analysts routinely run samples, see unexpected results, and re-inject without documenting the first run — that's data integrity failure regardless of whether the system records it. The SOP needs to define the threshold for what constitutes a reportable run, and every run above that threshold must be in the official record.

### Data Review Procedures

- [ ] Does the data review SOP require reviewers to check the audit trail, not just the final result?
- [ ] Is there a specific checklist or criteria for what the reviewer is looking for in the audit trail?
- [ ] Does review cover: any result modifications after initial entry, any method changes during a run, any access during non-working hours, any deletions of records?
- [ ] Are data reviewers trained on what anomalies look like and what to do when they find one?

### Training Procedures for DI

- [ ] Does GxP training cover data integrity principles (ALCOA+, not just SOP compliance)?
- [ ] Is DI training role-specific — analysts get instrument-specific DI training, not just generic GMP training?
- [ ] Is there documented evidence of DI training for every person generating GxP records?
- [ ] Is there a mechanism to ensure new hires don't generate GxP records before completing DI training?

---

## Layer 4: Work Practice Verification

This is where most organizations discover the gap between what their procedures say and what actually happens. This layer requires observation and record forensics, not just document review.

### Analytical Lab Work Practice Review

Pull records from the past 12 months for 10-20 representative analytical runs. For each run, examine:

- [ ] Does the sample sequence in the CDS match what the LIMS shows as received and scheduled?
- [ ] Are the timestamps on the instrument consistent with when the lab was staffed (check access logs against instrument timestamps)?
- [ ] Are all injections in the sequence present, or are there gaps that suggest deletions?
- [ ] Do the sequence file metadata show any modifications after initial setup?
- [ ] Are processing methods consistent throughout the run, or were they changed after the run was executed?
- [ ] Do the results reported in the LIMS match the CDS raw data?

**What you're looking for:** A LIMS result of 99.2% assay with a CDS run that shows three injections before finding one that came in at 99.2%, while the earlier injections have no disposition in the record. Or instrument access at 11 PM on a Saturday when no analyst should be working.

### Manufacturing Record Review

For batch records, examine 10 representative batches:

- [ ] Were all GMP activities recorded at the time they occurred (check timestamps against production schedule)?
- [ ] Were any corrections made? Do corrections meet GDocP requirements?
- [ ] Were any process parameters outside specification? How was this documented and dispositioned?
- [ ] Were all required signatures obtained before the batch proceeded to the next step?
- [ ] Is there any evidence of blank forms (pre-printed forms filled out in advance)?

### Access Pattern Analysis

Pull user access logs from the past 6-12 months for key GxP systems. Look for:

- [ ] Access during weekends, holidays, or after hours that isn't explained by scheduled activities
- [ ] Concurrent logins from different physical locations for the same user
- [ ] High-volume modifications in a short time period (bulk editing)
- [ ] Logins from accounts that should be inactive (departed employees)
- [ ] Access immediately before or after out-of-specification or failing results

---

## Layer 5: Culture Indicators

Culture is the hardest layer to assess formally, but it's also the most predictive of data integrity failures. Organizations with healthy quality cultures don't need to falsify data because their systems and processes are designed to find and correct problems, not punish them.

### Reporting Climate

Have conversations with analysts, operators, and quality staff. The questions to explore:

- [ ] Do analysts feel comfortable reporting an unexpected result without fear of being required to investigate until they find a lab error?
- [ ] Is there pressure — implicit or explicit — to meet schedule or yield targets?
- [ ] When investigators find no laboratory error assignable cause for an OOS, is it accepted, or is there persistent pressure to keep looking?
- [ ] Are deviations and OOS investigations treated as learning opportunities or as blame exercises?

**The behavioral science:** Organizations under production pressure develop a learned response over time — people figure out that certain results create problems and certain results don't. When that understanding influences how data gets recorded or reported, data integrity is compromised. It starts with small things (running a sequence twice and recording only the second run because "the first was a practice run") and escalates toward frank falsification.

### Management Behavior

- [ ] Do quality managers review and act on audit trail review findings, or do they sign off without real review?
- [ ] When a DI concern is raised, is it investigated proportionally to its severity, or minimized?
- [ ] Does management reinforce data integrity principles in routine communications, or is it only addressed during audit preparation?
- [ ] Are DI issues tracked, trended, and reviewed at the quality system level?

### Leading Indicators to Track

These metrics, trended over time, can identify culture and control problems before they become inspection findings:

- **Invalidation rate:** What percentage of OOS results are invalidated? An unusually high rate (>30-40% of OOS investigations closing as lab error) may indicate pressure to find invalidation justifications.
- **Amendment rate in batch records:** A high rate of amendments, especially last-minute corrections before batch release, warrants scrutiny.
- **After-hours access frequency:** Tracked by system, by area, trended over time. Unexplained spikes are a signal.
- **Re-injection rate in CDS:** What percentage of analytical runs involve re-injection of samples? Is the rate increasing?

---

## Scoring and Prioritization

Don't just run this as a yes/no checklist. For each gap found, assess:

**Severity:**
- **Critical:** Directly compromises the integrity of released product data, or represents evidence of intentional data manipulation
- **Major:** A systemic control failure that affects GxP record reliability across multiple systems or records
- **Minor:** An isolated gap or documentation weakness that doesn't affect the integrity of specific records

**Systemic vs. Isolated:** A single missing audit trail review signature is a minor isolated finding. Missing audit trail review signatures across all systems for the past 18 months is a major systemic finding.

**Remediation Timeline:**
- Critical findings: stop the activity if possible, immediate corrective action, escalate to QA leadership
- Major findings: root cause analysis and CAPA within 30-60 days
- Minor findings: correct and close within 90-120 days

---

## Regulatory Reference Points

The requirements these audit questions map to:

| Audit Area | Primary Regulatory Reference |
|---|---|
| Time synchronization | FDA DI Guidance (Dec 2018): contemporaneous records; multiple warning letter citations |
| Shared accounts | FDA DI Guidance §III.C: individual accountability; 21 CFR 211.68(b) |
| Audit trail configuration | 21 CFR 11.10(e); EU GMP Annex 11 clause 9 |
| Audit trail review | FDA DI Guidance §III.D; MHRA DI Guide §8; WHO TRS 996 |
| Electronic signature | 21 CFR 11.50; EU GMP Annex 11 clause 14 |
| OOS procedure | 21 CFR 211.192; FDA OOS Guidance (2006) |
| GDocP for corrections | 21 CFR 211.194(a); EU GMP Chapter 4 |
| Data review | FDA DI Guidance §III.D |

---

## After the Audit

A self-audit that finds nothing is either a reflection of a genuinely strong program — or an audit that wasn't looking hard enough. Challenge yourself on which it is.

If you find significant gaps: document them, assess their impact on specific batch records or regulatory submissions, and build a remediation plan. The fact that you found and are fixing them is a better inspection story than an inspector finding them first.

If you find the same gaps audit after audit: that's a systemic CAPA failure. The corrective actions from the previous cycle didn't work, and the root cause wasn't properly identified.

The articles on [DI gap assessment methodology](/articles/di-gap-assessment-methodology) and [DI remediation programs](/articles/di-remediation-program) cover what to do when the findings are serious.
