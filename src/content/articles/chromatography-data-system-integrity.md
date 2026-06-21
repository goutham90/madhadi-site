---
title: "Chromatography Data System Integrity: Injection Sequences, Integration, and the Reprocessing Trap"
description: "How to keep a chromatography data system inspection-ready: injection sequence control, manual integration discipline, system suitability gating, audit trail review, and the testing-into-compliance patterns regulators cite most."
pubDate: 2026-06-20
tags: ["data-integrity", "chromatography", "cds", "audit-trail", "manual-integration", "system-suitability", "laboratory-controls"]
pillar: "data-integrity"
tier: "Advanced"
---

The chromatography data system (CDS) is the single most cited piece of laboratory software in data integrity enforcement. More warning letters touch a CDS than any other lab system, and the citations cluster in a handful of predictable places: aborted and trial injections that vanish before the official run, manual reintegration that conveniently moves a peak across a specification line, system suitability used as a gate that operators can retry until it passes, shared logins that make attribution impossible, and audit trails nobody reviews. None of these require sophisticated fraud. Most happen when a lab runs a powerful system on default settings, with the wrong user privileges, and no second person ever looking at what the software already recorded.

This article walks the full CDS integrity surface: what each control is, the regulatory basis, how to configure and operate it, what good looks like, worked examples you can copy, and the inspection-finding patterns that put labs in trouble. If you run a QC lab, validate a CDS, review chromatographic data, or face an inspector across a table, this is the level of detail you need to do the job and defend it.

The major commercial systems in this category include Empower, OpenLab/ChemStation, Chromeleon, and similar packages. Names appear here only as neutral generic examples of the software class. Nothing here describes any specific company's configuration.

---

## Why the CDS is the highest-risk lab system

A CDS sits at the exact point where a raw analog signal becomes a number that decides whether product is released. Between the detector and the certificate of analysis, a human makes choices: which peaks to integrate, where to draw the baseline, whether a suitability run passed, whether to reprocess. Each choice is legitimate when justified and documented, and each is a lever that can move a result. That combination, high decision density plus direct release impact, is why regulators concentrate here.

The governing expectations come from a stack of regulations and guidance:

- **21 CFR Part 211**, specifically 211.68 (automatic, mechanical, and electronic equipment), 211.160(b) (scientifically sound laboratory controls), 211.165 (testing and release), 211.192 (review of records and investigation of discrepancies), and 211.194 (complete laboratory records, including all data derived from tests). The phrase "complete records of all data" in 211.194(a) is the hook for aborted injections and deleted runs.
- **21 CFR Part 11** (electronic records and electronic signatures), which sets requirements for audit trails, access controls, electronic signatures, and copies of records for any CDS used as the official record.
- **EU GMP Annex 11** (computerised systems) and **Chapter 4** (documentation), the EU counterparts, with explicit audit trail review and data integrity expectations.
- **MHRA "GXP Data Integrity Guidance and Definitions," March 2018**, which codified ALCOA, original-versus-true-copy thinking, and audit trail review as routine.
- **FDA "Data Integrity and Compliance With Drug CGMP, Questions and Answers," guidance for industry, December 2018**, which answers directly on shared logins, audit trail review frequency, and what "complete data" means.
- **PIC/S PI 041-1, "Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments," July 2021**, the most detailed cross-regulator treatment of CDS-style risks.
- **WHO Technical Report Series No. 1033, Annex 4 (2021)** on data integrity, used widely as a reference.
- **USP General Chapter <621> Chromatography** for system suitability requirements and the rules on what you may and may not adjust.

You do not need to quote all of these in a meeting. You do need to know that "delete the failing injection and rerun" is prohibited under 211.194 and 211.192, that "review the audit trail" is an Annex 11 and FDA-guidance expectation, and that the integration limits you can touch are bounded by <621>.

> 21 CFR 211.194(a): "Laboratory records shall include complete data derived from all tests necessary to assure compliance with established specifications and standards."

"Complete data derived from all tests" is the load-bearing phrase. All tests means trial injections, aborted runs, and the first failing sequence, not just the run you decided to report.

**Cross-links:** [data-integrity-foundations](/articles/data-integrity-foundations), [ALCOA+ in detail](/articles/alcoa-plus-deep-dive), [21-cfr-part-11-eu-annex-11](/articles/21-cfr-part-11-eu-annex-11), [oos-investigation-process](/articles/oos-investigation-process).

---

## CDS architecture and the records that matter

Before the controls, understand where the records live, because integrity arguments turn on which file is the "raw data."

A modern CDS has three layers:

| Layer | What it holds | Integrity concern |
|---|---|---|
| Acquisition | The raw detector signal (the chromatogram data file), instrument method, sequence | Is the raw signal captured and retained, or only a processed result? |
| Processing | Processing method, integration parameters, peak tables, calculations | Every reprocessing event must be versioned and audit-trailed |
| Reporting | Result sets, reports, electronic signatures, review status | The report is a derivative, not the original record |

The **original raw data** is the acquired signal plus the metadata needed to reconstruct the result: the instrument method, the sequence, the processing method, the integration applied, and the audit trail of every change. A PDF report is a true copy at best and is never a substitute for the underlying data file. This matters because a common bad practice is to print a report, sign it, and archive only paper while the database is wiped or the file deleted. That destroys the original record and the audit trail with it.

Two architecture choices drive integrity strength:

1. **Networked client-server with a central database** beats standalone workstations. A central database gives one audit trail, centralized backup, and no local "scratch" projects. Standalone instruments with local storage are the classic setting where files get moved, renamed, or deleted off the audit trail.
2. **Project or database segregation** so a user cannot acquire into a personal sandbox and selectively promote results. If users can create ad hoc projects and copy data between them, you have an uncontrolled path.

**Acceptance criteria for architecture:** raw data acquired to a controlled, backed-up, audit-trailed location; no local-only acquisition for GMP testing; no user-creatable uncontrolled projects; report generation that always references and can re-open the source data.

**Cross-links:** [static-dynamic-records-true-copies](/articles/static-dynamic-records-true-copies), [data-lifecycle-and-metadata](/articles/data-lifecycle-and-metadata), [lims-implementation-and-validation](/articles/lims-implementation-and-validation).

---

## Injection sequences: trial, aborted, and the rule of completeness

This is the area regulators raid first. The sequence is the ordered list of injections in a run: blanks, system suitability standards, calibration standards, bracketing standards, and samples. Integrity failures here are almost always about injections that exist in the system but not in the reported record.

### The vocabulary you must get right

- **Trial injection / test injection:** an injection run before the official sequence, often labeled "test," "trial," "prep," "demo," or with a sample name like "wash" or "x." Sometimes legitimately used to verify the column is equilibrated or the autosampler is working. Becomes a violation when used to preview sample results and decide whether to proceed.
- **Aborted / incomplete injection:** a run stopped before completion. Legitimate when there is a genuine fault (leak, pressure alarm). A violation when aborted because the analyst saw an unfavorable result forming.
- **Unreported / orphan injection:** any acquired data file not carried into the reported result and not explained.

### What 211.194 and the guidance require

All injections acquired on a GMP instrument are part of the laboratory record. You cannot pick the favorable subset. If a trial or aborted injection occurred, it must be visible, retained, and explained. The FDA 2018 data integrity guidance is explicit that testing samples to evaluate them outside the official record, then reporting only the passing result, is "testing into compliance," which is prohibited.

### How to control sequences

1. **Configure the system so injections cannot be hidden.** Disable any "do not save" acquisition option. The system must save every acquired file with a sequence-level audit trail.
2. **Forbid pre-injection of samples for evaluation.** System suitability and equilibration use designated standards or blanks, not the test sample. If you must run a column check, use a defined standard, not the unknown.
3. **Require sequence-level justification for any non-reported injection.** A documented reason at the time, not after.
4. **Lock the sample set / sequence after acquisition** so injection order and identity cannot be silently re-ordered.
5. **Review the injection log and audit trail** against the reported result set. Count injections. The number acquired must reconcile with the number reported plus the number explained.

### Worked example: a sequence reconciliation

A potency assay sequence as acquired:

| Inj # | Time | Sample name | Type | Reported? | Note |
|---|---|---|---|---|---|
| 1 | 08:02 | Blank | Blank | Yes | |
| 2 | 08:14 | SST Std | Suitability | Yes | 5 replicate set begins |
| 3-6 | 08:26-09:02 | SST Std | Suitability | Yes | %RSD 0.4 |
| 7 | 09:14 | Cal Std | Standard | Yes | |
| 8 | 09:26 | Sample-A prep1 | Sample | Yes | |
| 9 | 09:38 | test | Sample | No | unexplained |
| 10 | 09:50 | Sample-A prep2 | Sample | Yes | |

Injection 9, named "test," sitting between two genuine sample preps, with no documented reason, is exactly the finding pattern an inspector looks for. The reconciliation must either explain it (a documented system check using a standard, not the sample) or it becomes a deviation and likely an OOS-adjacent investigation. If "test" was the same sample previewed before prep2 was reported, that is testing into compliance.

**Acceptance criteria:** acquired-injection count equals reported plus documented-explained count, with zero unexplained orphans; no test sample injected before its official run; aborted injections each have a contemporaneous fault reason.

**Common findings:** sample injections labeled "test," "trial," "x," or single letters; aborted runs immediately before a passing run; sequences re-ordered after acquisition; standalone workstations where files were deleted to clean up "extra" injections.

**Cross-links:** [oos-investigation-process](/articles/oos-investigation-process), [out-of-trend-investigations](/articles/out-of-trend-investigations), [audit-trail-design-and-review](/articles/audit-trail-design-and-review).

---

## Integration and the reprocessing trap

Integration is where scientific judgment is real and where abuse is easiest to hide. The software draws a baseline and finds peak start and end points; the analyst can override these. Both the automated and the manual versions are legitimate tools. The trap is reprocessing data repeatedly, with manual adjustments, until a result lands on the favorable side of a limit, then reporting only the final version.

### Processing methods versus manual integration

- A **processing method** is a saved, version-controlled set of integration parameters (threshold, peak width, baseline mode, inhibit windows). It should be developed and validated with the analytical method, locked, and applied consistently. This is the default.
- **Manual integration** is a per-injection override: the analyst redraws baselines or sets peak boundaries by hand. It is allowed only when scientifically justified, by procedure, with a contemporaneous reason, and reviewed by a second person.

USP <621> and method validation define what is fixed. You may not adjust integration to chase a result. Within a compendial or validated method, the parameters that can be varied (and how much) are bounded; mobile phase and column adjustments have explicit limits in <621>, and integration is governed by the validated processing method, not by feel.

### The reprocessing audit trail is the evidence

Every CDS records reprocessing as discrete events with versioned result sets. The audit trail shows: who reprocessed, when, what changed, and the before/after result. The single most damning inspection finding is a chain of reprocessing events where the result migrates toward the spec limit and only the last one is reported.

### Worked example: reprocessing migration that fails

An impurity result against a 0.50 percent specification:

| Version | Time | Action | Integration | Result (%) | Reported? |
|---|---|---|---|---|---|
| v1 | 10:05 | Auto, locked method | Default | 0.58 | No |
| v2 | 10:22 | Manual reintegration | Baseline dropped under peak | 0.49 | Yes |
| v3 | (none) | | | | |

The default method gave 0.58 percent, which fails. A manual reintegration that lowers the baseline brings it to 0.49 percent, which passes, and only that version is reported. Unless there is a documented, scientifically valid reason the default integration was wrong (a genuine co-eluting artifact, a baseline disturbance the validated method did not anticipate), this is manipulation. The reviewer must see v1, ask why it was overridden, and either accept a real justification or open an OOS investigation on the 0.58 percent result.

Contrast with a legitimate manual integration: a known shouldering peak that the validated method's threshold splits incorrectly, corrected per a documented procedure, with the reason "manual split of co-eluting degradant per method appendix B," reviewed and approved. Same mechanic, completely different integrity posture, because it is justified, documented, consistent, and not result-driven.

### How to control integration

1. **Default to the locked processing method.** Manual integration is the exception, not the routine.
2. **Write a manual integration SOP** that defines when it is allowed (poor baseline, split/shoulder, rider peaks), forbids result-driven adjustment, requires a contemporaneous reason code, and mandates second-person review with the before/after visible.
3. **Restrict who can manual-integrate** via user roles; analysts integrate, but the act is flagged and reviewed.
4. **Make reprocessing visible.** Reviewers must open the result audit trail and see every version, not just the final report.
5. **Trend manual integration frequency** by analyst, method, and product. A spike on one method or one analyst is a signal.

**Acceptance criteria:** manual integration rate is low and explained; every manual integration has a contemporaneous reason and second-person review; no reprocessing chain shows a result migrating across a limit without a documented scientific basis; the reported version is the justified one, not merely the passing one.

**Common findings:** baselines manually dropped to reduce impurity areas; peaks "inhibited" or excluded without justification; repeated reprocessing with only the passing version reported; manual integration used as routine across most injections; no second-person review of reintegration.

**Cross-links:** [oos-investigation-process](/articles/oos-investigation-process), [method-validation-essentials](/articles/method-validation-essentials), [audit-trail-design-and-review](/articles/audit-trail-design-and-review), [good-documentation-practices](/articles/good-documentation-practices).

---

## System suitability as a gate, not a retry loop

System suitability (SST) confirms the chromatographic system is performing adequately before and during sample analysis: resolution, tailing, theoretical plates, and replicate precision (%RSD) against criteria from <621> and the validated method. SST is a gate. The integrity failure is treating it as a retry: running suitability, failing, adjusting something, rerunning until it passes, and reporting only the passing set with no record of the failures.

### What SST must contain

- The criteria, from <621> and the method: for example, %RSD of replicate standard injections not more than a defined value, resolution not less than a defined value between the critical pair, tailing factor within range, and a minimum plate count if specified.
- A defined number of replicate standard injections (commonly five or six for the precision check, per <621>).
- Bracketing standards where the method requires them, so suitability is demonstrated across the run, not only at the start.

### The retry trap

If suitability fails, that is data. You cannot simply rerun until it passes and discard the failures. A failed SST may indicate a real problem (column degradation, mobile phase error, instrument fault) that also affects the samples. The correct path is a documented investigation: identify and fix the cause, document it, and only then re-establish suitability. Pre-judging samples while "establishing suitability" by injecting the actual test sample is doubly wrong.

### Worked example: SST gating done right

| Event | Time | Outcome | Action |
|---|---|---|---|
| SST set 1 | 07:40 | %RSD 2.8 (limit 2.0), fail | Investigation opened: mobile phase ratio error found |
| Corrective | 08:10 | Fresh mobile phase prepared, documented | Deviation reference recorded |
| SST set 2 | 08:30 | %RSD 0.5, pass | Suitability established, samples proceed |

Both SST sets are retained and audit-trailed. The failure is explained by a real, documented root cause. That is defensible. The failure pattern is: SST set 1 fails, no investigation, "tweak and rerun," set 2 passes, set 1 is deleted from a standalone workstation, only set 2 reported. Same failing first set, opposite integrity posture.

### How to control SST gating

1. **Configure SST in the method so the sequence enforces it.** Many systems can stop or flag a run when SST fails; use that.
2. **Forbid sample injection before SST passes**, and forbid using the test sample for suitability.
3. **Retain all SST runs**, passing and failing, in the audit-trailed record.
4. **Require an investigation for any SST failure** before re-establishing suitability; link the deviation.
5. **Review the audit trail for repeated SST attempts**, which is the signature of a retry loop.

**Acceptance criteria:** every SST failure is retained and investigated; no sample is injected before SST passes; suitability uses standards, not the test sample; bracketing standards meet criteria across the run; no pattern of multiple undocumented SST attempts.

**Common findings:** repeated SST runs with only the passing one reported; SST failures deleted off standalone systems; the test sample injected during "suitability"; bracketing standards out but the run reported anyway.

**Cross-links:** [compendial-method-verification](/articles/compendial-method-verification), [method-validation-execution](/articles/method-validation-execution), [analytical-instrument-qualification](/articles/analytical-instrument-qualification).

---

## Access control, shared logins, and attribution

ALCOA's "Attributable" collapses the moment two people share a login. If injections, integrations, and approvals all show one generic account, you cannot tie any action to a person, and the audit trail is worthless for accountability. This is one of the most frequently cited CDS deficiencies.

### Requirements

- **Part 11 and Annex 11** require unique user identification and that actions be attributable to the individual who performed them. The FDA 2018 guidance answers directly that each user must have a unique login and that shared accounts undermine attribution.
- **Role-based privileges** so that capability matches job: analysts acquire and process, reviewers review, and only administrators (who do not also analyze GMP data) configure the system, manage users, and control deletion rights.

### The administrator conflict

The most important access-control principle is segregation of duties: the person who can delete data, change the clock, modify methods, or alter the audit trail configuration must not be the same person who generates and reports results. A QC analyst should not hold administrator rights on the CDS. Where IT or a system owner holds admin, their actions are themselves audit-trailed and reviewed. If analysts have admin rights, an inspector will assume any control can be bypassed, and the burden is on you to prove otherwise.

### Worked example: a privilege matrix

| Capability | Analyst | Reviewer | Lab supervisor | System admin (IT) |
|---|---|---|---|---|
| Acquire injections | Yes | No | No | No |
| Apply locked processing method | Yes | No | No | No |
| Manual integration | Yes (flagged) | No | No | No |
| Approve / e-sign results | No | Yes | Yes | No |
| Modify processing method | No | No | No | Yes (controlled) |
| Manage users / privileges | No | No | No | Yes |
| Change system clock | No | No | No | No (locked to time server) |
| Delete data | No | No | No | Restricted, audit-trailed |
| Configure audit trail | No | No | No | Yes, audit-trailed |

**Acceptance criteria:** every user is unique and named; no shared or generic GMP accounts; analysts lack admin and delete rights; segregation of duties between data generation and data deletion/configuration; privilege assignments documented and periodically reviewed; departed users disabled promptly.

**Common findings:** shared "QC" or "Admin" logins; analysts with administrator rights; no periodic user access review; departed staff still active; passwords on sticky notes or shared verbally.

**Cross-links:** [electronic-signatures-implementation](/articles/electronic-signatures-implementation), [csv-cybersecurity-access-control](/articles/csv-cybersecurity-access-control), [gxp-roles-responsibilities](/articles/gxp-roles-responsibilities).

---

## Time stamps and the system clock

Chromatography integrity depends on trustworthy time. If a user can change the system clock, they can make a re-run appear to precede an "original," or backdate a reintegration. The clock must be controlled.

- **Sync to a controlled time source** (a network time server), not a manually settable local clock.
- **Remove user rights to change the clock** at the OS and application level.
- **Record time zone and ensure consistency**; mismatched time zones across instruments cause apparent sequence anomalies that look like manipulation even when they are not.

**Acceptance criteria:** clock locked to a controlled source, no user-changeable time, consistent time zone, audit trail time stamps that reconcile with the network time. A simple inspection test: ask an analyst to change the instrument clock in front of you. They should not be able to.

**Cross-links:** [time-stamps-and-system-clock-control](/articles/time-stamps-and-system-clock-control), [audit-trail-design-and-review](/articles/audit-trail-design-and-review).

---

## Audit trail review: the control that catches everything above

Audit trail review is the operational control that detects sequence gaps, suspect reintegration, SST retries, and clock changes. Annex 11 and the FDA 2018 guidance both expect that audit trails capturing GMP-relevant changes are reviewed with the same rigor and frequency as the data they support, which in practice means as part of batch and result review, not once a year.

### What to review

You do not read every keystroke. You review the audit trails that matter for the result:

- **Reprocessing / result audit trail:** every reintegration and result version, with reasons.
- **Sequence / injection audit trail:** all injections acquired, including aborted and unreported, reconciled against the report.
- **Method change audit trail:** any change to the processing or instrument method during the run.
- **System / event log:** clock changes, failed logins, configuration changes, deletions.

### How to make it practical

1. **Define audit-trail review in an SOP** tied to result review, with a checklist of what the reviewer looks at for each result set.
2. **Use risk to focus** on the high-impact trails (reprocessing, sequence, deletions) rather than attempting everything.
3. **Capture the review as a record:** who reviewed, what trails, the date, and any discrepancy raised. A reviewer signature with no evidence of what was examined is weak.
4. **Escalate discrepancies** into deviation/OOS handling, do not silently "fix" them.

### Worked example: a reviewer checklist for one result set

| Check | Pass? | Evidence |
|---|---|---|
| Injection count reconciles (acquired = reported + explained) | Yes | 10 acquired, 9 reported, 1 explained system check |
| No unexplained "test"/"trial" injections | Yes | none present |
| SST passed first time, or failure investigated | Yes | passed, %RSD 0.4 |
| Manual integrations justified and second-reviewed | Yes | 1 integration, reason + co-reviewer initials |
| No reprocessing chain crossing a limit without basis | Yes | single version, default method |
| No clock changes during run | Yes | system log clean |
| No data deletions | Yes | none in event log |

**Acceptance criteria:** audit trail review is procedural, risk-focused, recorded as a discrete activity, performed at batch/result review frequency, and feeds discrepancies into the quality system. The reviewer can show what they looked at.

**Common findings:** audit trail review not performed at all; "performed" but no record of scope; review limited to the report while reprocessing trails are never opened; discrepancies found but not escalated.

**Cross-links:** [operationalizing-audit-trail-review](/articles/operationalizing-audit-trail-review), [audit-trail-design-and-review](/articles/audit-trail-design-and-review), [batch-record-review-gmp](/articles/batch-record-review-gmp).

---

## Testing into compliance: the pattern behind the patterns

Most CDS findings are surface expressions of one underlying behavior: generating a result, seeing it is unfavorable, and using a system capability to reach a favorable one without the investigation the data demands. The mechanics differ; the intent is the same.

| Mechanic | What it looks like | Why it is testing into compliance |
|---|---|---|
| Trial injection preview | Inject sample as "test," see result, decide whether to "officially" run | Sample evaluated outside the record, only favorable reported |
| Aborted-run cherry-pick | Abort runs forming an unfavorable result, keep the good one | Selective reporting |
| Reprocessing migration | Reintegrate until result passes, report final version | Result-driven, not science-driven |
| SST retry loop | Rerun suitability until it passes, discard failures | Hides a real system problem |
| Orphan deletion | Delete the failing injection off a standalone workstation | Destroys complete data |

The unifying control set is the same throughout: capture all data, attribute every action to a unique user, lock methods, review the audit trail, and route every unfavorable result into a documented investigation rather than a quiet retry. An OOS result is not the failure; failing to investigate it is.

**Cross-links:** [oos-investigation-process](/articles/oos-investigation-process), [quality-culture-di-failures](/articles/quality-culture-di-failures), [human-error-in-deviations](/articles/human-error-in-deviations).

---

## Validating and qualifying the CDS

Controls only count if the system enforces them, which is what validation verifies. CDS validation follows the GAMP 5 risk-based approach and Part 11 / Annex 11 expectations.

### What to validate, beyond "the software installs"

- **User requirements and configuration specification** that name the integrity controls: unique users, role privileges, audit trail enabled and non-disableable by users, clock locked, "do not save" disabled, sequence/result locking, e-signature behavior.
- **Configuration verification:** prove the audit trail cannot be turned off by an analyst, that deletion is restricted, that manual integration is flagged, that the clock cannot be changed by a user.
- **Negative testing:** attempt the prohibited action and show it fails or is recorded. Try to delete a run as an analyst, try to acquire without saving, try to change the clock, try to log in with a shared account. Document that each is blocked or trapped.
- **Audit trail review verification:** confirm the trails you intend to review actually capture reintegration reasons, injection events, and deletions in a readable form.
- **Backup, restore, and archival:** prove raw data and audit trails restore intact and remain readable for the retention period, including after version upgrades.

### Roles in validation

- **System owner / lab management:** owns requirements, configuration decisions, and ongoing control.
- **Validation / CSV:** writes and executes protocols, including negative testing.
- **QA:** approves requirements, protocol, and report; owns the data integrity acceptance position.
- **IT / administrators:** implement infrastructure, time sync, backup, and privilege configuration.
- **Vendor:** provides validation support, configuration documentation, and (for installation/operational checks) qualified components; the regulated firm remains accountable for intended use.

**Acceptance criteria:** validation evidence that integrity controls are configured and cannot be bypassed by ordinary users; negative tests documented; audit trail content verified as reviewable; backup/restore and long-term readability proven.

**Cross-links:** [gamp5-csv-framework](/articles/gamp5-csv-framework), [lims-implementation-and-validation](/articles/lims-implementation-and-validation), [computer-software-assurance-fda](/articles/computer-software-assurance-fda), [backup-restore-disaster-recovery-validation](/articles/backup-restore-disaster-recovery-validation), [analytical-instrument-qualification](/articles/analytical-instrument-qualification).

---

## Roles and responsibilities across the CDS lifecycle

| Activity | Analyst | Reviewer | Lab management / owner | QA | IT / Admin | Vendor |
|---|---|---|---|---|---|---|
| Acquire, process, report results | Do | | | | | |
| Manual integration (flagged) | Do | Review | | Oversight | | |
| Result and audit trail review | | Do | | Approve sampling | | |
| SST gating and investigation | Do | Review | Oversee | Approve | | |
| User and privilege management | | | Request | Approve policy | Implement | |
| Clock / time sync control | | | | Verify | Implement | |
| CDS validation | | | Own requirements | Approve | Configure | Support |
| Backup / restore / archival | | | | Verify | Operate | Support |
| Periodic review of the system | | | Lead | Approve | Support | |

The single most important separation: the people who generate results do not control deletion, configuration, the clock, or the audit trail settings.

**Cross-links:** [gxp-roles-responsibilities](/articles/gxp-roles-responsibilities), [data-governance-framework](/articles/data-governance-framework), [gxp-computerized-systems-operations](/articles/gxp-computerized-systems-operations).

---

## Interview-ready: questions you will be asked and how to answer

**Q: What is the original raw data in a CDS, and why does it matter?**
The acquired detector signal plus the metadata to reconstruct the result: instrument method, sequence, processing method, integration applied, and the full audit trail. It matters because a signed PDF report is a derivative; if you keep only the report and lose the data file and audit trail, you have destroyed the original record and cannot defend the result. Regulation: 211.194, Part 11, Annex 11, plus original-versus-true-copy thinking from the MHRA 2018 guidance.

**Q: How do you handle a trial or test injection?**
On a GMP instrument there is no such thing as an off-the-record injection. Everything acquired is part of the complete data under 211.194(a). System checks and equilibration use designated standards or blanks, never the test sample, and any non-reported injection is documented with a contemporaneous reason and reconciled at review. Previewing the sample to decide whether to "officially" run it is testing into compliance.

**Q: When is manual integration acceptable?**
When the validated processing method genuinely misintegrates (co-elution, shoulder, rider peak, baseline disturbance), corrected per a written manual integration SOP, with a contemporaneous scientific reason and second-person review of the before/after. It is never acceptable to adjust integration to move a result across a specification limit. If the default method fails and you cannot justify the override scientifically, you open an OOS investigation.

**Q: An analyst reintegrated three times and reported the passing version. What do you do?**
Open the result audit trail and look at every version and reason. If the result migrated toward the limit with no documented scientific basis, that is a data integrity event: the earlier failing result stands as an OOS that must be investigated, and I assess scope (this analyst, this method, this product) and notify QA. I do not accept "the last one passed" as a reason.

**Q: How often should audit trails be reviewed, and which ones?**
At the frequency of the data they support, which for release-relevant chromatography means as part of result and batch review, per Annex 11 and the FDA 2018 guidance. Risk-focused on the trails that matter: reprocessing/result, sequence/injection, method changes, deletions, and clock changes. The review is recorded so I can show what was examined.

**Q: Why are shared logins a problem and how do you remediate?**
They break Attributable in ALCOA and the unique-identification requirement of Part 11 and Annex 11; you cannot tie any action to a person, so the audit trail cannot establish accountability. Remediate by issuing unique accounts, disabling generic ones, applying role-based privileges, removing admin from analysts, and adding periodic access reviews.

**Q: How do you prevent testing into compliance at a system level?**
Capture all data (no "do not save," central audit-trailed acquisition), unique users with segregation of duties, locked processing methods with manual integration as a reviewed exception, SST that gates and retains failures, controlled clock, and audit trail review that reconciles injections and inspects reprocessing. Then every unfavorable result is routed into a documented investigation, never a quiet retry.

**Q: An inspector asks an analyst to change the instrument clock. What should happen?**
Nothing. The analyst should lack the privilege; the clock is synced to a controlled time source. If they can change it, that is a finding, because it lets users reorder the apparent timeline of injections and reprocessing.

**Cross-links:** [gxp-quality-interview-preparation](/articles/gxp-quality-interview-preparation), [fda-warning-letters-patterns](/articles/fda-warning-letters-patterns), [di-self-audit-checklist](/articles/di-self-audit-checklist).

---

## Practical tips

- Run a quick self-test on any instrument: try to acquire one injection without saving, try to delete a run as an analyst, and try to change the clock. If any succeeds, you have a finding waiting to happen.
- Trend manual integration counts per analyst and per method monthly. The outlier tells you where to look before an inspector does.
- Reconcile injection counts on every release-critical result set; it takes a minute and catches the orphan-injection pattern that drives the worst findings.
- Kill standalone workstations for GMP testing where you can. Central database, central audit trail, central backup removes most of the deletion and file-movement risk in one move.
- Treat an SST failure or an unfavorable first injection as data to investigate, not noise to retry. Culture is the real control; the configuration just makes the wrong path harder.
- During an inspection, when asked about a reintegration, open the audit trail and walk the inspector through the reason yourself. Confidence with the trail open is far stronger than a defensive explanation with it closed.

---

## Related articles

- [data-integrity-foundations](/articles/data-integrity-foundations)
- [ALCOA+ in detail](/articles/alcoa-plus-deep-dive)
- [oos-investigation-process](/articles/oos-investigation-process)
- [operationalizing-audit-trail-review](/articles/operationalizing-audit-trail-review)
- [audit-trail-design-and-review](/articles/audit-trail-design-and-review)
- [compendial-method-verification](/articles/compendial-method-verification)
- [method-validation-essentials](/articles/method-validation-essentials)
- [electronic-signatures-implementation](/articles/electronic-signatures-implementation)
- [21-cfr-part-11-eu-annex-11](/articles/21-cfr-part-11-eu-annex-11)
- [gamp5-csv-framework](/articles/gamp5-csv-framework)
- [fda-warning-letters-patterns](/articles/fda-warning-letters-patterns)
- [quality-culture-di-failures](/articles/quality-culture-di-failures)
