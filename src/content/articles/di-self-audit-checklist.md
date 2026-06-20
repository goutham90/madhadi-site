---
title: "Data Integrity Self-Audit: A Compliance Checklist for GxP Organizations"
description: "A layered data integrity self-audit framework covering infrastructure controls, system configuration, procedural controls, work practice verification, and culture indicators. Structured to find what inspectors find."
pubDate: 2026-05-31
tags: ["data-integrity", "audit", "ALCOA+", "FDA", "self-audit", "compliance"]
tier: "Advanced"
pillar: "data-integrity"
---

Running a data integrity self-audit is not a documentation exercise. The question isn't whether your procedures say the right things. It's whether your systems, procedures, and day-to-day practices actually produce ALCOA+ compliant records, and whether that can be proven from the records themselves rather than from the SOP that governs them.

This checklist is structured in five layers: infrastructure controls, system configuration, procedural controls, work practice verification, and culture indicators. That layering matters. Most organizations can pass a documentation audit. Far fewer can pass a forensic review of what their systems actually recorded over the past 12 months. An inspector who has examined a few hundred firms knows the difference instinctively, and the gap between the two is where 483 observations and warning letters come from.

Work through each layer with someone who is not the owner of the processes being assessed. Self-assessment is only useful if the assessors are willing to find real problems and are organizationally insulated enough to write them down. If your auditor reports to the lab manager whose data they are reviewing, you have not run an audit. You have run a rehearsal.

A note on what this is and is not. This document is a generic, public-standard framework built from published regulations and guidance. It is not a substitute for a formal internal audit program or for qualified regulatory and legal review. Use it to find gaps; use your quality system to act on them.

---

## How to use this checklist

Three readers will use this differently. If you are new to GxP, treat the checklist items as a vocabulary: each box is a question an inspector might ask, phrased the way they would phrase it, and the "what a finding looks like" notes teach you what the failure looks like in a record rather than in the abstract.

If you are a working practitioner, this is a workplan. Pull a sample, sit with the records, and answer each question with evidence rather than belief. The most useful column to add to your own copy is "evidence reviewed," because an auditor who writes "appears adequate" without naming the record they looked at has produced nothing defensible.

If you run a program, the value is in the pattern across layers. A single weak control is a finding. The same weakness appearing in infrastructure, configuration, and work practice is a systemic signal, and systemic findings are what change a firm's regulatory posture. The [DI program architecture](/articles/di-program-architecture) and [data governance framework](/articles/data-governance-framework) articles cover how these findings should feed a standing program rather than a one-off cleanup.

---

## Before you start: define your system inventory

Before any DI audit begins, confirm you have a complete, current inventory of all GxP-generating systems. Missing systems are the most common gap, not because organizations are hiding them, but because nobody knows what they don't know. A spreadsheet on a single analyst's desktop that calculates a reportable result is a GxP system whether or not anyone validated it.

Your inventory should include every system that generates, modifies, stores, or transmits GxP data. That means:

- Standalone analytical instruments (HPLC, UV-Vis spectrophotometers, balances, pH meters, particle counters, dissolution apparatus)
- Networked laboratory systems (LIMS, chromatography data systems, electronic lab notebooks)
- Manufacturing systems (MES, DCS and SCADA, process historians, ERP modules that touch release)
- Quality systems (eQMS, electronic document management, deviation and CAPA platforms)
- Clinical systems (EDC, CTMS, the electronic trial master file)
- Infrastructure that supports GxP systems (network, backup, the time server itself)
- Cloud or hosted applications used for GxP data

For each system, record GxP criticality, validation status, data ownership, backup frequency, and last periodic review date. If you cannot fill in those fields for every system, that gap is your first finding. The inventory is also where you set depth of review: a high-criticality system that releases product warrants record forensics, while a low-risk read-only viewer may need only a configuration check. That risk-based decision should trace to your [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology), so the audit scope is defensible rather than arbitrary.

---

## Layer 1: Infrastructure controls

Infrastructure is the foundation that GxP systems sit on. If time is wrong, if backups fail, if access controls at the network level are weak, everything above them is compromised, no matter how clean the application looks.

### System time and time synchronization

- [ ] Are all GxP systems synchronized to a single, authoritative time source (typically an NTP server)?
- [ ] Is the NTP server itself qualified or documented as part of IT infrastructure qualification?
- [ ] Are workstations and servers configured so individual users cannot change local time?
- [ ] Is there a documented process for investigating time discrepancies if they occur?
- [ ] Are timestamps in audit trails from different systems consistent for the same concurrent event?

**What a finding looks like:** an HPLC workstation clock four minutes behind the LIMS, or an analyst who ran a test at 2:47 PM according to the instrument and 2:30 PM according to the LIMS, when both share the same building and network. Time sync failures are cited because investigators routinely cross-check timestamps across systems, and a contemporaneous record (the C in ALCOA+) cannot be contemporaneous against two different clocks. The expectation that records be contemporaneous is stated in the FDA guidance "Data Integrity and Compliance With Drug CGMP" (December 2018) and in the MHRA "GXP Data Integrity Guidance and Definitions" (March 2018).

### User account management

- [ ] Is there a documented process for creating, modifying, disabling, and deleting accounts?
- [ ] Are there any shared or generic accounts (admin, labuser, quality) used in GxP systems?
- [ ] When an employee leaves, how quickly are accounts disabled, and is there documented evidence?
- [ ] Do contractors and temporary staff have individual accounts rather than shared access?
- [ ] Is there a periodic review confirming active accounts match current users?
- [ ] Can you produce an activity report for a departed employee showing no access after their termination date?

**Red flag:** if anyone says "we share the admin password between the lab manager and the backup analyst," that is a finding on the spot. Shared credentials destroy attributability, the first A in ALCOA+, and they implicate 21 CFR 211.68(b), which requires that input to and output from computer systems be checked for accuracy, and the broader expectation in 21 CFR Part 11 that actions be traceable to a unique individual.

### Backup and recovery

- [ ] Are backup schedules documented and followed for all GxP systems?
- [ ] Has backup recovery ever been tested, and is there a test record?
- [ ] Are backup media stored separately from primary systems (offsite or network-isolated)?
- [ ] Does the retention period for backups match the data retention requirement for the records?
- [ ] Are archived electronic records retrievable and readable in human-readable form?
- [ ] Has anyone verified old archived data is still readable, not merely present on the medium?

**What a finding looks like:** backups running nightly but never tested for recovery. When an inspector asks "can you restore your LIMS to a specific point in time," and the answer is "we have never tried," it puts the reliability of every record in question. The depth behind this layer lives in [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation), and the readability-over-time problem (formats that no longer open, drives that no longer mount) is covered in [data lifecycle and metadata](/articles/data-lifecycle-and-metadata).

### Network and physical access controls

- [ ] Are GxP workstations protected from unauthorized physical access (locked rooms, automatic screen locks)?
- [ ] Could a walk-in visitor sit at an analyst workstation and reach GxP data without credentials?
- [ ] Are GxP workstations protected from unauthorized software installation?
- [ ] Is there separation between GxP network segments and general corporate IT, or at least a documented risk assessment of shared infrastructure?

Physical and network controls rarely fail loudly, which is why they get overlooked. The test is concrete: walk the floor during a shift, look for an unlocked, logged-in workstation, and time how long an unattended screen stays open before it locks.

---

## Layer 2: System configuration

This layer asks whether GxP systems are actually configured to enforce data integrity, not whether the SOP says they should be. Configuration is where intent meets reality, and the two diverge more often than anyone expects.

### Audit trail configuration

For each system generating regulated records:

- [ ] Is the audit trail enabled and capturing all required events (entry, modification, deletion, approval)?
- [ ] Does the audit trail capture the prior value when a result is changed, not just that a change occurred?
- [ ] Is the audit trail protected from modification or deletion, including by system administrators?
- [ ] Are events timestamped to the system clock rather than a user-entered time?
- [ ] Is there a documented procedure for audit trail review, with defined frequency and scope?
- [ ] Are audit trail reviews actually performed and documented?

**The specific failure mode:** for chromatography data systems such as Empower, ChemStation, or Chromeleon, check whether analysts can modify processing methods or integration parameters after acquisition without the change appearing in the audit trail. CDS audit trail behavior is highly version- and configuration-dependent; the same product can be adequate or completely inadequate depending on how it was set up and which release is running. The regulatory anchors are 21 CFR 11.10(e), which requires secure, computer-generated, time-stamped audit trails, and EU GMP Annex 11 clause 9, which requires consideration of an audit trail for changes to GMP-relevant data. The full mechanics of getting this right are in [audit trail design and review](/articles/audit-trail-design-and-review).

### Electronic signature configuration

- [ ] Do electronic approvals require both a unique identifier and a private element such as a password?
- [ ] Is the signature meaning (review, approval, responsibility) captured at the moment of signing?
- [ ] Are signatures linked to their records so they cannot be excised, copied, or transferred?
- [ ] Does the signed record display the signatory's name, the date and time, and the meaning when printed or viewed?
- [ ] Are electronic signatures on GxP records as legally binding as handwritten ones under site procedures?

These map to 21 CFR 11.50 (signature manifestations), 21 CFR 11.70 (signature-to-record linking), and 21 CFR 11.200 (signature components and controls), plus Annex 11 clause 14. The practical reading of both frameworks side by side is covered in [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11).

### Access controls and role-based access

- [ ] Does each user's access match their job function (least privilege)?
- [ ] Are there users with administrator rights who do not need them?
- [ ] Can analysts approve their own results without an independent second review?
- [ ] Are role assignments documented and reviewed periodically?
- [ ] When someone changes roles, is their access updated to match?

The single most common configuration finding is the analyst who also holds the rights to delete or reprocess their own data. That is a segregation-of-duties failure, and it is hard to defend even if no misuse ever occurred. The principle that system administration should be independent of the people generating the data is stated plainly in both the FDA and MHRA guidance.

### System configuration controls

- [ ] For each configured system, is the configuration documented (configuration specification or equivalent)?
- [ ] Are configuration changes managed through change control rather than ad hoc edits?
- [ ] Is there a mechanism to detect unauthorized configuration changes during periodic review?
- [ ] For instruments, are analytical methods protected from modification by users without the appropriate role?

Configuration drift is silent. A setting changed during troubleshooting and never reverted will not announce itself; periodic configuration verification against an approved baseline is how you catch it. Tie this to your [change control for validated systems](/articles/change-control-validated-systems) so that every deviation from baseline has a record.

---

## Layer 3: Procedural controls

Good configuration is necessary but not sufficient. SOPs have to close the gaps that technical controls cannot reach, and they have to do it in language operators can actually follow at the bench.

### Data recording procedures

- [ ] Do SOPs require data to be recorded directly to the GxP record, not to scratch paper, sticky notes, or re-recorded from temporary notes?
- [ ] Do procedures address pre-printed forms with blanks, to prevent blank reuse or alteration?
- [ ] Are there clear rules for paper corrections (single line through, date, initial, never obscure the original)?
- [ ] Do procedures prohibit processing electronic data in non-GxP tools (for example, a spreadsheet for CDS data) before it enters the official record?

The "original" in ALCOA+ is what gets lost when an analyst transcribes a balance reading onto a notebook and then enters it into the LIMS an hour later. The expectations here trace to 21 CFR 211.194(a) on complete records and to EU GMP Chapter 4 on documentation, with the underlying habits covered in [good documentation practices](/articles/good-documentation-practices).

### OOS and anomaly handling procedures

- [ ] Does the OOS procedure require investigation before any retest?
- [ ] Does it prohibit invalidating a result without documented scientific justification?
- [ ] Does it define what constitutes an assignable laboratory error, and what does not?
- [ ] Are all analytical runs, including failing ones, retained in the system?
- [ ] Does it address practice injections and system suitability runs that precede sample analysis?

**This specific issue:** if analysts routinely run a sample, see an unexpected result, and re-inject without documenting the first run, that is a data integrity failure regardless of whether the system happened to record it. The SOP must define the threshold for a reportable run, and every run above that threshold belongs in the official record. The governing expectations are 21 CFR 211.192 (investigation of discrepancies) and the FDA guidance "Investigating Out-of-Specification Test Results for Pharmaceutical Production" (October 2006). The full workflow is in the [OOS investigation process](/articles/oos-investigation-process) and the related [deviation management](/articles/deviation-management) article.

### Data review procedures

- [ ] Does the review SOP require reviewers to examine the audit trail, not just the final result?
- [ ] Is there a defined checklist for what the reviewer looks for in the audit trail?
- [ ] Does review cover post-entry modifications, mid-run method changes, off-hours access, and deletions?
- [ ] Are reviewers trained on what anomalies look like and what to do when they find one?

A second-person review that signs the result page but never opens the audit trail is theater. The MHRA guidance is explicit that review of audit trails should be part of routine data review, and the FDA guidance treats audit trail review as a CGMP expectation for the data on which product decisions rest.

### Training procedures for DI

- [ ] Does GxP training cover data integrity principles (ALCOA+), not just SOP compliance?
- [ ] Is DI training role-specific, so analysts get instrument-specific DI training rather than only generic GMP?
- [ ] Is there documented evidence of DI training for everyone who generates GxP records?
- [ ] Are new hires prevented from generating GxP records before completing DI training?

Training is the control that fails quietly because everyone assumes it happened. Pull the training matrix and trace three people who generate records back to a completed DI curriculum; the [training program for GxP](/articles/training-program-gxp) article covers building one that holds up.

---

## Layer 4: Work practice verification

This is where most organizations discover the gap between what their procedures say and what actually happens. This layer requires observation and record forensics, not document review. It is the most time-consuming layer and the most diagnostic.

### Analytical lab work practice review

Pull records from the past 12 months for 10-20 representative analytical runs. For each run, examine:

- [ ] Does the sample sequence in the CDS match what the LIMS shows as received and scheduled?
- [ ] Are instrument timestamps consistent with when the lab was staffed (compare access logs to instrument times)?
- [ ] Are all injections in the sequence present, or are there gaps suggesting deletions?
- [ ] Does the sequence file metadata show modifications after initial setup?
- [ ] Were processing methods consistent through the run, or changed after execution?
- [ ] Do the LIMS results match the CDS raw data?

**What you are looking for:** a LIMS assay of 99.2% backed by a CDS run that shows three injections before one came in at 99.2%, with the earlier injections carrying no disposition. Or instrument access at 11 PM on a Saturday when no analyst should be present. These are the patterns that appear, almost verbatim, in published warning letters describing falsification of laboratory records.

### Manufacturing record review

For batch records, examine roughly 10 representative batches:

- [ ] Were GMP activities recorded when they occurred (compare timestamps to the production schedule)?
- [ ] Were corrections made, and do they meet good documentation requirements?
- [ ] Were any process parameters outside specification, and how were they documented and dispositioned?
- [ ] Were all required signatures obtained before the batch advanced to the next step?
- [ ] Is there any sign of blank forms filled out in advance?

Tie what you find back to the formal [batch record review](/articles/batch-record-review-gmp) process; a self-audit that uncovers a recurring pattern of late entries is telling you the review step is not catching them in routine operation.

### Access pattern analysis

Pull user access logs for the past 6-12 months for key systems. Look for:

- [ ] After-hours, weekend, or holiday access not explained by scheduled activities
- [ ] Concurrent logins from different physical locations for one user
- [ ] High-volume modifications in a short window (bulk editing)
- [ ] Logins from accounts that should be inactive (departed staff)
- [ ] Access immediately before or after an out-of-specification or failing result

Access logs are the one data source that is hard to dress up after the fact, which is exactly why inspectors ask for them. A short script that flags off-hours logins and overlaps will surface in minutes what manual review would miss entirely.

---

## Layer 5: Culture indicators

Culture is the hardest layer to assess formally and the most predictive of data integrity failures. Organizations with healthy quality cultures do not need to falsify data, because their systems and processes are designed to find and correct problems rather than punish the people who surface them.

### Reporting climate

Have direct conversations with analysts, operators, and quality staff. The questions to explore:

- [ ] Do analysts feel safe reporting an unexpected result without being pushed to investigate until they find a lab error?
- [ ] Is there pressure, implicit or explicit, to meet schedule or yield targets?
- [ ] When an investigation finds no assignable laboratory cause for an OOS, is that accepted, or is there pressure to keep looking?
- [ ] Are deviations and OOS investigations treated as learning opportunities or as blame exercises?

**The behavioral pattern:** under sustained production pressure, people learn over time that certain results create problems and others do not. Once that learning shapes how data is recorded or reported, integrity is already compromised. It starts small, recording only the second of two runs because "the first was a practice run," and it escalates toward frank falsification. The [quality culture and DI failures](/articles/quality-culture-di-failures) article traces how that drift happens and how to interrupt it.

### Management behavior

- [ ] Do quality managers act on audit trail review findings, or sign off without real review?
- [ ] When a DI concern is raised, is it investigated proportionally to its severity, or minimized?
- [ ] Does management reinforce DI in routine communication, or only during audit preparation?
- [ ] Are DI issues tracked, trended, and reviewed at the quality system level?

### Leading indicators to track

Trended over time, these metrics surface culture and control problems before they become inspection findings. The thresholds below are starting points for discussion, not regulatory limits, and the right band depends on your products and methods.

| Indicator | What it signals | How to read it |
|---|---|---|
| OOS invalidation rate | Pressure to find lab-error justifications | An unusually high share of OOS results closing as assignable lab error warrants scrutiny of the investigations |
| Batch record amendment rate | Records not captured contemporaneously | Late corrections clustered just before release deserve a closer look |
| After-hours access frequency | Work happening outside oversight | Track by system and area; investigate unexplained spikes, not the baseline |
| CDS re-injection rate | Testing into compliance | A rising re-injection rate per run is the metric to watch over the absolute number |

The point of these metrics is the trend, not the snapshot. A single quarter tells you little; the same number drifting in one direction across a year tells you something is changing in how work is done.

---

## Scoring and prioritization

Do not run this as a yes/no checklist. For each gap, assess severity and reach.

**Severity:**

- **Critical:** directly compromises the integrity of released product data, or shows evidence of intentional manipulation
- **Major:** a systemic control failure affecting record reliability across multiple systems or records
- **Minor:** an isolated gap or documentation weakness that does not affect the integrity of specific records

**Systemic versus isolated:** one missing audit trail review signature is a minor isolated finding. Missing audit trail review signatures across all systems for the past 18 months is a major systemic finding, and it changes how everything else you found should be read.

**Remediation timeline:**

- Critical: stop the activity if possible, take immediate corrective action, escalate to QA leadership, and assess product and submission impact
- Major: root cause analysis and CAPA, typically within 30-60 days
- Minor: correct and close, typically within 90-120 days

These timelines are conventions, not requirements. What matters to an inspector is that the timeline is risk-based, documented, and actually met.

---

## Regulatory reference points

The requirements these audit questions map to:

| Audit area | Primary regulatory reference |
|---|---|
| Time synchronization, contemporaneous records | FDA Data Integrity and CGMP guidance (Dec 2018); MHRA GXP Data Integrity Guidance (Mar 2018) |
| Shared accounts, attributability | 21 CFR 211.68(b); 21 CFR Part 11 |
| Audit trail configuration | 21 CFR 11.10(e); EU GMP Annex 11 clause 9 |
| Audit trail review | FDA Data Integrity and CGMP guidance (Dec 2018); MHRA GXP Data Integrity Guidance (Mar 2018) |
| Electronic signatures | 21 CFR 11.50, 11.70, 11.200; EU GMP Annex 11 clause 14 |
| OOS handling | 21 CFR 211.192; FDA OOS Investigation guidance (Oct 2006) |
| Documentation and corrections | 21 CFR 211.194(a); EU GMP Chapter 4 |
| Backup and archival | EU GMP Annex 11 clauses 7 and 17 |

For multinational programs, the WHO "Guideline on data integrity" and the PIC/S guidance PI 041 "Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments" cover the same principles and are worth mapping against if you ship into jurisdictions that reference them.

---

## After the audit

A self-audit that finds nothing is either a reflection of a genuinely strong program or an audit that was not looking hard enough. Be honest about which it is, and be suspicious of the clean result.

If you find significant gaps, document them, assess their impact on specific batch records or regulatory submissions, and build a remediation plan. The fact that you found and are fixing them is a far better inspection story than an investigator finding them first. That story holds up only if the corrective actions are real, so connect serious findings to a structured [DI remediation program](/articles/di-remediation-program) rather than a list of promises.

If you find the same gaps audit after audit, that is a CAPA failure, not a new finding. The corrective actions from the previous cycle did not work, and the root cause was never properly identified. Recurrence is itself an observation, and it is one an inspector will draw a circle around faster than the underlying gap.

The articles on [DI gap assessment methodology](/articles/di-gap-assessment-methodology) and the broader [internal audit program](/articles/internal-audit-program) cover how to structure this work as a repeatable capability rather than a fire drill, and [FDA inspection readiness](/articles/fda-inspection-readiness) covers how to carry the results into an inspection without flinching.
