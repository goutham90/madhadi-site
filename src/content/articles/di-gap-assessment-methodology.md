---
title: "Data Integrity Gap Assessment: A Methodology That Actually Finds Something"
description: "A working methodology for a GxP data integrity gap assessment: how to scope it, evaluate each system layer, classify and score findings, write a defensible report, and sequence remediation. Written for DI program leaders and quality directors."
pubDate: 2026-05-02
tags: ["data integrity", "gap assessment", "DI program", "ALCOA+", "audit"]
tier: "Advanced"
pillar: "data-integrity"
---

A data integrity gap assessment is a structured evaluation of how well a regulated organization's computerized systems, manual processes, and quality culture protect GxP data across its full lifecycle, from the moment data is generated to the point it is archived or destroyed. It is the starting point for building or improving a data integrity (DI) program, and it is, in effect, what an inspector does during a DI-focused inspection. Doing it yourself first, honestly, is the entire point.

The methodology is what separates a useful assessment from a box-ticking exercise. An assessment that reviews only audit trail configurations but ignores the procedural controls around them, or that covers GMP lab systems but not clinical or pharmacovigilance data, or that produces a flat list of findings with no remediation priority, gives you very little you can act on. The approach below covers all of it, and it is written to be run by an internal team or commissioned externally.

If you are new to the underlying principles, read [Data Integrity Foundations](/articles/data-integrity-foundations) and the [ALCOA+ principles in detail](/articles/alcoa-plus-deep-dive) first. This article assumes you already know what attributable, legible, contemporaneous, original, and accurate mean, and that you want to find where your organization falls short of them.

---

## Why Gap Assessments Fail Before They Start

Most weak assessments fail for one of three reasons. The scope is set to what is easy to look at rather than what is risky. The assessor accepts documentation as evidence instead of looking at the live system. Or the output is a report that nobody can prioritize, so nothing gets fixed and the same gaps reappear at the next inspection.

The discipline that fixes all three is the same: decide what you are assessing against, look at the actual configuration and the actual behavior of people, and produce findings that are ranked by risk rather than by the order you happened to find them. Everything that follows is built around those three habits.

---

## Assessment Scope

Define the scope in writing before anyone touches a system. A scope that drifts during execution produces a report nobody trusts, because the reader cannot tell what was excluded by design and what was simply missed.

**Systems in scope.** Every computerized system that generates, stores, processes, or transmits data used in GxP decisions. In a typical organization this includes the laboratory information management system (LIMS), the chromatography data system (CDS, for example Waters Empower or Agilent OpenLab), the electronic lab notebook (ELN), the manufacturing execution system (MES), the electronic quality management system (eQMS), the electronic document management system (EDMS), the clinical trial management system (CTMS), the electronic data capture (EDC) platform, process historians, SCADA and PLC layers on equipment, individual instrument workstations, and standalone spreadsheets used for GxP calculations.

Standalone spreadsheets deserve their own line of attention. Many sites carry dozens of Excel files used for out-of-specification (OOS) recalculations, analytical result summaries, stability slope calculations, or yield reconciliation that are uncontrolled, unvalidated, and have no audit trail. They are a recurring source of inspection observations precisely because they sit outside the validated estate. Treat each as a system in its own right. The mechanics of bringing them under control are covered in [Infrastructure Qualification and Spreadsheet Validation](/articles/infrastructure-qualification-and-spreadsheet-validation).

**Processes in scope.** The procedural controls that surround data: raw data review and second-person verification, audit trail review procedures, access provisioning and deprovisioning, backup and recovery, data retention and archival, and the DI awareness training program. A system can be configured perfectly and still fail if nobody reviews its audit trail.

**People in scope.** A DI assessment is not only about systems. It includes observation of work practices, interviews with the people who do the work, and review of training records. The question is not only whether a control exists but whether people use it the way the procedure says they should.

**Regulatory frameworks.** Confirm which regulations actually apply to the organization's activities, then assess against all of them. For drug products, that usually means the FDA predicate rules in 21 CFR Parts 210 and 211, electronic records and signatures under 21 CFR Part 11, and the EU GMP requirements with EudraLex Volume 4 Annex 11 for computerized systems. For devices, the FDA Quality Management System Regulation (21 CFR Part 820, harmonized to ISO 13485 under the QMSR final rule effective February 2, 2026) applies. The MHRA "GXP Data Integrity Guidance and Definitions" (March 2018), the WHO "Guideline on data integrity" (Technical Report Series, 2021), and the PIC/S PI 041 "Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments" guidance are the practical references inspectors reason from, alongside ICH Q9(R1) for risk and ICH Q10 for the quality system. A useful side reference is the [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11) comparison, because the two frameworks diverge in ways that matter for global sites.

---

## Assessment Framework: The Five Layers

A complete DI gap assessment evaluates five layers. Most organizations have gaps at several of them at once, and the distribution of gaps tells you something useful: gaps concentrated in configuration usually mean a young program, while gaps concentrated in work practice and culture usually mean a program that wrote good procedures and never embedded them.

### Layer 1: Physical and Infrastructure Controls

Does the underlying infrastructure support data integrity at all?

- Network architecture: are GxP systems on segregated networks with controlled access, or do they sit on the general business network?
- Physical security: are instrument workstations in controlled-access areas, and are servers in locked facilities with logged entry?
- Backup and recovery: are GxP data stores backed up on a defined schedule, is recovery actually tested rather than assumed, and is the verification documented? Validation expectations for this are in [Backup, Restore and Disaster Recovery Validation](/articles/backup-restore-disaster-recovery-validation).
- Clock synchronization: are all GxP system clocks synchronized to a reliable time source over NTP?

Clock synchronization is consistently undervalued until an inspection forces the issue. When an investigator lines up timestamps across systems and finds the CDS workstation clock running 35 minutes behind the LIMS server, every timestamp in both systems becomes arguable, and arguable timestamps undermine the "contemporaneous" leg of ALCOA+. This is cheap to fix and expensive to ignore.

### Layer 2: System Configuration Controls

Does each system's live configuration enforce the requirements, not just claim to?

- Audit trail enabled for all GxP-relevant event types, including the ones people forget, such as integration parameter changes, sample reprocessing, and method edits.
- Audit trail completeness: event, user identity, timestamp, old value, new value, and reason where required.
- Audit trail protection: can any user, including an administrator, delete, disable, or overwrite the trail?
- User authentication: a unique account per person, with shared or generic logins eliminated or at least detectable.
- Password controls: minimum complexity and expiration enforced by the system.
- Session timeout: inactive sessions locked automatically.
- Access control: least privilege enforced, with a clear answer to whether anyone with administrative rights can also create or modify GxP data.

For each system, verify the configuration by looking at the configuration, not the document that describes it. Open the audit trail settings inside the CDS and confirm the trail is on and scoped correctly. Pull the user list and the role definitions. Do not accept "yes, it is enabled" as evidence. The design and review of audit trails specifically is covered in [Audit Trail Design and Review](/articles/audit-trail-design-and-review).

A common configuration gap that is easy to miss: an account that has both data-entry and administrative privileges. This breaks segregation of duties because the same person can both create a record and change the controls that protect it. Flag it even when there is no evidence of misuse, because the inspector will.

### Layer 3: Procedural Controls

Do the procedures that govern DI activities exist, are they adequate, and is there evidence they are followed?

- Is there a DI policy, and does it cover every GxP system rather than only the lab?
- Is there an audit trail review procedure that states how often, by whom, and what the reviewer is looking for? A procedure that says "review periodically" with no trigger and no checklist is a gap.
- Is there a procedure for correcting records that requires the prior value to be preserved and a reason recorded?
- Is there a procedure for access management covering both provisioning and, importantly, deprovisioning when someone leaves or changes role?
- Is there a procedure defining what counts as raw data for each system, and who may access it? This matters most where the raw data is electronic and the printout is only a representation of it.

Review the procedures, then look for the implementation evidence behind each one: training records showing people were trained on the current version, audit trail review records showing the review actually happened and what it found, and access reviews showing the user list was reconciled. The supporting discipline here is [Good Documentation Practices](/articles/good-documentation-practices), which governs how all of this evidence is created and corrected.

### Layer 4: Work Practice Verification

What do people actually do? This is where procedure-versus-practice gaps surface, and it is the layer most internal assessments skip because it requires being on the floor during live operations.

- Data entry: are analysts recording results directly as they are generated, or writing them on informal paper first and transcribing later? Transcription introduces a window where the original can be lost or altered.
- Corrections: when an error is made in an electronic record, does the analyst follow the correction procedure, or delete and retype?
- Instrument access: is each person logging in individually, or is a shared instrument account left open all shift?
- OOS handling: when a result looks wrong, what is the first instinct, to investigate or to quietly rerun and keep the passing result? The expected behavior is governed by the [OOS investigation process](/articles/oos-investigation-process), and the gap between the procedure and the instinct is exactly what this layer is meant to expose.

Work practice observation cannot be done from a desk. It requires watching real operations, ideally across more than one shift, because the night shift and the day shift do not always work the same way.

### Layer 5: DI Awareness and Culture

Do people understand what data integrity means and why it matters, and does the organization make it safe to do the right thing?

- Can an analyst explain ALCOA+ in their own words, not recite it from a slide?
- Can a lab manager describe the audit trail configuration of the system they own?
- Does leadership visibly back DI expectations, or is there quiet pressure to produce data that passes?
- Is there a route for someone to raise a DI concern without fear of being punished for it?

Culture assessment is qualitative and it is the hardest layer to score, but it is also the most predictive. A site where DI violations always end in retraining and never in a systemic fix has a culture problem dressed up as a training problem. The relationship between culture and the failures it produces is examined in [Quality Culture and DI Failures](/articles/quality-culture-di-failures). Treat repeated identical findings across audits as a culture signal, not a coincidence.

---

## System-by-System Evaluation Matrix

For each system in scope, populate an evaluation matrix that scores it against the Layer 1 through Layer 4 controls relevant to that system type. The matrix is what turns observations into a structured, defensible output.

| Control category | Criterion | Status | Evidence | Priority |
|---|---|---|---|---|
| Audit trail enabled | All GxP events captured | Gap | Audit trail off for integration events on instrument AU-04 | Critical |
| User authentication | Individual accounts required | Compliant | User list review confirms no shared accounts | N/A |
| Access control | Least privilege enforced | Gap | 3 users hold admin rights with no documented business need | Major |
| Audit trail review | Procedure exists and is performed | Gap | No procedure for routine audit trail review | Major |
| Backup and recovery | Daily backup, recovery tested | Compliant | Backup logs reviewed, recovery test documented | N/A |
| Clock synchronization | Synchronized to NTP | Gap | AU-04 clock not synced, 12-minute drift measured | Major |
| Segregation of duties | Data role separate from admin role | Gap | One account has both entry and admin rights | Major |

One matrix per in-scope system gives you the raw material for the report and for prioritization. Keep the evidence column specific. "Access control weak" is not evidence. "Three users hold admin rights with no documented business need" is, and it is what the eventual CAPA will need to act on.

A short worked example shows why specificity matters. Suppose the CDS that generates release-testing chromatograms is found with the audit trail capturing manual integrations but not method changes. On paper the trail is "enabled." In practice, an analyst could alter an integration method, requalify a failing peak, and leave no record of the method change. That is a Critical finding on a release-critical system, and the matrix entry should say exactly that, naming the event type that is not captured, so nobody can later argue the trail was fine because it existed.

---

## Finding Classification

Classify every finding so the reader can act on it. Use a consistent four-level scale and tie each level to a remediation timeframe.

| Class | Definition | Typical examples | Target timeframe |
|---|---|---|---|
| Critical | A gap that directly compromises GxP record integrity with no compensating control | Audit trail disabled on a release-critical system, data deletable without trace, results modifiable by an unrestricted user | Immediate, in parallel with formal CAPA |
| Major | A significant gap creating real risk of an undetected DI violation | No audit trail review procedure, shared accounts in a lower-risk area, backup without recovery testing | 30 to 90 days |
| Minor | A procedural or documentation gap with limited direct impact | Training record omits the DI policy version, password expiration not enforced on a non-critical system | 90 to 180 days |
| Observation | A condition that warrants attention but is not yet a finding | Audit trail review procedure exists but not updated for a recent configuration change | Tracked as continuous improvement |

The line between Major and Critical is usually drawn by whether a compensating control exists and by what the system feeds. The same configuration gap can be Major on a raw-material tracking system and Critical on the system that generates release data, because the consequence of corrupted data is different. Classification is a judgment about consequence, not just about the control.

---

## Prioritizing Remediation

A real assessment generates more remediation items than any organization can address at once. Prioritization has to be risk-based or it becomes whoever-shouts-loudest based.

Rank findings against four criteria:

1. Patient safety impact. What happens if this gap lets a quality decision be made on corrupted data?
2. Regulatory risk. How likely is this gap to become an observation if seen during inspection?
3. Scope. Does the gap affect one system or many? A platform-level access control weakness multiplies.
4. Effort. Some high-priority gaps close in a day, such as enabling NTP. Others take months, such as migrating off an unvalidated spreadsheet estate.

A Critical gap in a CDS audit trail that feeds product release testing is Priority 1. A Minor procedural gap in a system used only for raw-material inventory is Priority 4. Plot the findings on impact against effort and the early wins become obvious: high-impact, low-effort items get done first while the high-impact, high-effort items move into a planned program.

Build the result into a remediation roadmap, a time-sequenced plan naming the gap, the owner, the due date, and the verification method for each item. The roadmap is a QA-approved controlled document, tracked through the [CAPA system](/articles/what-is-a-capa), and reported at management review so that resourcing decisions are made by people who can actually allocate resources. For larger efforts, the roadmap becomes the backbone of a formal [DI remediation program](/articles/di-remediation-program).

---

## The Assessment Report

The assessment report is a controlled document. It has to be specific, factual, and actionable, and it has to be written so that a senior reader and a remediation owner can both use it.

What it contains:

- Scope: what was assessed, what was deliberately excluded, and why.
- Methodology: what was reviewed, who was interviewed, what was observed, and over what period.
- Summary findings by system and by finding class, with a count table so the reader sees the shape of the problem at a glance.
- Finding detail: the specific gap, the evidence observed, the applicable regulation or guidance, the classification, and the recommended remediation.
- Risk summary: the overall DI risk profile of the organization in plain language.
- Remediation prioritization: the recommended sequence and rationale.
- Appendices: the per-system evaluation matrices, interview notes, and the list of documents reviewed.

What it is not. It is not a validation document, it is not a certificate of compliance, and it is not a score to be defended. It is a current-state assessment, and its value is in the accuracy and completeness of the findings, not in how flattering the result is. A report with no Critical or Major findings on a site that has never run a DI assessment before should make the reader more suspicious, not less.

Pair the full report with a one-page executive summary. The technical report serves the remediation owners. The one-pager, framed around inspection risk and patient safety, is what actually moves budget.

---

## External vs. Internal Assessment

**Internal assessment.** Run by the organization's own quality or DI team. The advantage is that the assessors know the systems, the people, and the history. The disadvantage is blind spots, both from familiarity (you stop seeing the workaround you walk past every day) and from institutional drift about what counts as acceptable.

**External assessment.** Run by a qualified outside party. The advantage is a fresh view with no institutional bias, and if the assessor has inspection experience, an output that maps closely to what a regulator would write. The disadvantage is that an external assessor starts with no context and needs orientation time, which costs schedule and money.

**Hybrid.** The internal team runs the preliminary assessment, and an external reviewer checks the findings and does targeted follow-up on the highest-risk systems. This keeps the cost of full external coverage down while still buying an independent view of the parts that matter most. It also tends to surface the gaps the internal team rationalized away, because the external reviewer has no reason to rationalize.

For an organization with a recent DI-related finding, or one preparing for a significant inspection, an external or hybrid assessment is the safer choice. The cost of an honest outside opinion is small next to the cost of a warning letter and the remediation an agency will then dictate. How to read the difference between regulators is covered in [FDA vs EMA inspection dynamics](/articles/fda-vs-ema-inspection-dynamics).

---

## Post-Assessment: Turning Findings into Improvement

The assessment is only worth the effort if it drives change. A few principles separate programs that improve from programs that just keep generating reports.

**Do not over-document findings while under-addressing them.** A 200-page report with 47 findings, none closed within a year, is worse than a 30-page report with 15 findings that are systematically resolved. The report is a means, not the deliverable. Closure is the deliverable.

**Act on Critical findings immediately.** If the assessment finds the audit trail disabled on a QC CDS, do not wait for the roadmap to be approved. Initiate containment, such as restricting access and starting enhanced manual review, while the formal CAPA is set up. Waiting for governance to start an irreversible-data-loss fix is itself a finding.

**Communicate to leadership in their language.** DI improvement needs resources, and resources come from people who think in risk and cost, not in audit trail event types. The one-page summary framed around inspection exposure and patient safety does more for funding than the technical appendix ever will.

**Reassess after remediation.** A follow-up assessment 12 to 18 months later confirms that the fixes held and catches the new gaps that appeared in the meantime, often introduced by the system changes made during remediation. That cycle, assess, remediate, verify, reassess, is what a mature DI program looks like, and it is what the [DI program architecture](/articles/di-program-architecture) is built to sustain. A standing self-check between full assessments, using a [DI self-audit checklist](/articles/di-self-audit-checklist), keeps the program honest in the gaps between formal reviews.

A gap assessment that finds something uncomfortable and leads to durable fixes is a success, even when the report reads badly. One that finds nothing on a program that has never looked before has usually failed to look hard enough.
