---
title: "Data Integrity Gap Assessment: How to Conduct One That Actually Finds Something"
description: "A complete methodology for conducting a GxP data integrity gap assessment — scoping the assessment, evaluating each system layer, scoring findings, producing a defensible report, and prioritizing remediation. For DI program leaders and quality directors."
pubDate: 2026-06-03
tags: ["data integrity", "gap assessment", "DI program", "ALCOA+", "audit"]
tier: "Advanced"
pillar: "data-integrity"
---

A data integrity gap assessment is a systematic evaluation of how well a regulated organization's computerized systems, manual processes, and quality culture protect the integrity of GxP data across its entire lifecycle. It's the starting point for building or improving a DI program. It's also what a regulator effectively does during a DI-focused inspection — so doing it before they arrive is the point.

The methodology matters. A gap assessment that reviews only system audit trail configurations but not the procedural controls around them, or that evaluates GMP lab systems but not clinical data systems, or that produces a list of findings with no remediation priority, has limited value. The methodology described here covers all layers.

---

## Assessment Scope

Define the scope before starting. The scope should cover:

**Systems in scope:** Every computerized system that generates, stores, processes, or transmits data used in GxP decisions. This typically includes: LIMS, CDS, ELN, MES, eQMS, EDMS, CTMS, EDC, process historians, SCADA systems, laboratory instrument workstations, and standalone spreadsheets used for GxP calculations.

Standalone spreadsheets deserve special attention. Many organizations have dozens of Excel files used for GxP calculations (OOS calculations, analytical result summaries, stability calculations) that are uncontrolled, unvalidated, and without audit trail. These are a consistent source of inspection findings.

**Processes in scope:** The procedural controls surrounding data generation and management: raw data review policies, audit trail review procedures, access control management processes, backup and recovery procedures, data retention policies, and the DI awareness training program.

**People in scope:** The DI assessment is not just about systems. It includes observation of work practices (are people following the procedures?), interview of personnel (do they understand ALCOA+?), and review of training records (have they been trained?).

**Regulatory frameworks:** Confirm which regulations apply to the organization's activities. FDA (21 CFR Part 11, 211, 820), EMA (Annex 11, EU GMP), MHRA DI guidance, WHO TRS guidance, ICH Q10. The gap assessment evaluates against all applicable frameworks.

---

## Assessment Framework: The Five Layers

A comprehensive DI gap assessment evaluates five layers. Most organizations have gaps at multiple layers; the distribution of gaps tells you about the maturity of the DI program.

**Layer 1: Physical and Infrastructure Controls**
Does the infrastructure support data integrity? This covers:
- Network architecture: are GxP systems on segregated networks with controlled access?
- Physical security: are instrument workstations in controlled-access areas? Are servers in locked data centers?
- Backup and recovery: are GxP data stores backed up? Is recovery tested? Is backup verification documented?
- Clock synchronization: are all GxP system clocks synchronized to a reliable time source (NTP)?

Clock synchronization is consistently undervalued until an inspection. When FDA investigators compare timestamps across systems and find that the instrument clock was 35 minutes behind the LIMS server clock, every timestamp in both systems becomes questionable.

**Layer 2: System Configuration Controls**
Does each system's configuration enforce data integrity requirements?
- Audit trail enabled: is the audit trail active for all GxP-relevant event types?
- Audit trail completeness: does the audit trail capture event, user, timestamp, old value, new value?
- Audit trail protection: can the audit trail be deleted, disabled, or modified by a user?
- User authentication: does each user have a unique account? Is sharing of credentials detectable?
- Password controls: are minimum complexity and expiration requirements enforced?
- Session timeout: are inactive sessions timed out automatically?
- Access control: does access control enforce least privilege? Can administrators modify data?

For each system, verify configuration by looking at the configuration itself, not just the documentation. Pull up the audit trail settings in the CDS application. Confirm the trail is enabled and configured correctly. Don't accept "yes, it's enabled" as evidence.

**Layer 3: Procedural Controls**
Do the procedures governing data integrity activities exist, are they adequate, and are they followed?
- Is there a DI policy? Does it cover all GxP systems?
- Is there a procedure for audit trail review? Does it specify how often, by whom, looking for what?
- Is there a procedure for correcting errors in records? Does it require prior value preservation?
- Is there a procedure for access control management (provisioning, deprovisioning)?
- Is there a procedure for handling raw data? Is it clear what constitutes raw data and who can access it?

Review the actual procedures, then look for evidence of implementation. Training records showing personnel trained on DI procedures. Audit trail review records showing the review was performed. Access control review records.

**Layer 4: Work Practice Verification**
What do people actually do? This is where procedure-versus-practice gaps are found.
- Observe data entry practices: are analysts entering data directly as it's generated, or transcribing from informal scratch paper later?
- Observe correction practices: when an error is made in an electronic record, what does the analyst do? Delete and retype? Or make a correction per the error correction procedure?
- Observe instrument use: are individual logins being used, or is a group account in use?
- Observe out-of-specification handling: when a result looks unusual, what is the first instinct — investigate or rerun?

Work practice observation requires being present in the laboratory during operations. Reviewing records alone won't reveal these behaviors.

**Layer 5: DI Awareness and Culture**
Do personnel understand what data integrity means and why it matters?
- Can an analyst explain the ALCOA+ principles in their own words?
- Can a laboratory manager describe the audit trail configuration of their LIMS?
- Does leadership visibly support DI expectations, or is there implicit pressure to get data that passes?
- Is there a mechanism for personnel to report DI concerns without fear of retaliation?

DI culture assessment is qualitative. It involves interviews, observation of how quality events are discussed, and reviewing how DI-related deviations and CAPAs have been handled historically. A facility where DI violations result in retraining but not systemic correction has a culture problem, not a training gap.

---

## System-by-System Evaluation Matrix

For each system in scope, populate an evaluation matrix. The matrix evaluates the system against the Layer 1-4 controls relevant to that system type.

| Control Category | Criterion | Status | Evidence | Priority |
|---|---|---|---|---|
| Audit trail enabled | All GxP events captured | Gap | Audit trail disabled for integration events in AU-04 | Critical |
| User authentication | Individual accounts required | Compliant | User account review confirms no shared accounts | — |
| Access control | Role-based access enforced | Gap | 3 users have admin rights without documented business need | Major |
| Audit trail review | Periodic review procedure and records | Gap | No procedure for routine audit trail review | Major |
| Backup | Daily backup with tested recovery | Compliant | Backup logs reviewed; recovery test documented | — |
| Clock sync | Synchronized to NTP | Gap | AU-04 clock not synchronized; 12-minute drift observed | Major |

A matrix like this for each in-scope system provides the structured output needed for the assessment report and for remediation prioritization.

---

## Finding Classification

**Critical:** A control gap that directly compromises the integrity of GxP records with no compensating control. The audit trail is disabled. Data can be deleted without trace. A user can access and modify results without access being restricted. Immediate remediation required.

**Major:** A significant control gap that creates meaningful risk of undetected data integrity violation. Missing audit trail review procedure. Shared user accounts in a low-risk area. Backup without recovery testing. Remediation within 30-90 days.

**Minor:** A procedural or documentation gap with limited direct impact on data integrity. Training records that document DI training but not the DI policy version. Password expiration not enforced for a non-critical system. Remediation within 90-180 days.

**Observation:** A practice or condition that doesn't rise to a finding but warrants attention. An audit trail review procedure that exists but hasn't been updated to reflect a new system configuration. Remediation tracked as continuous improvement.

---

## Prioritizing Remediation

The gap assessment generates more remediation items than any organization can address simultaneously. Prioritization must be risk-based.

Prioritization criteria:
1. Patient safety impact (what happens if this gap results in a quality decision made on corrupted data?)
2. Regulatory risk (how likely is this gap to generate a warning letter finding if observed during inspection?)
3. Scope (does this gap affect one system or many?)
4. Effort (some high-priority gaps can be closed in a day; others require months)

A critical gap in a CDS audit trail that generates data for product release testing is Priority 1. A minor procedural gap in a system used only for raw material inventory tracking is Priority 4.

Build a remediation roadmap: a time-sequenced plan showing which gaps will be addressed in which order, with owners and due dates for each. The roadmap is a QA-approved document, tracked in the CAPA system, and reported at management review.

---

## The Assessment Report

The assessment report is a controlled document. It must be specific, factual, and actionable.

**Content:**
- Scope: what was assessed, what was not assessed, and why
- Methodology: what was reviewed, who was interviewed, what was observed
- Summary findings by system and by finding category
- Finding details: specific gap, evidence observed, applicable regulation or guidance, classification, recommended remediation
- Risk summary: overall risk profile of the organization's DI program
- Remediation prioritization: recommended sequence
- Appendices: evaluation matrices by system, interview notes, document list reviewed

**What the report is not:** It's not a validation document. It's not a certification of compliance. It's a current-state assessment. The value is in the accuracy and completeness of the findings, not in the quality of the organization's score.

---

## External vs. Internal Assessment

**Internal assessment:** Conducted by the organization's own quality or DI team. Advantage: assessors know the systems and culture. Disadvantage: potential blind spots, both from familiarity and from institutional bias about what's acceptable.

**External assessment:** Conducted by a qualified external consultant. Advantage: fresh perspective, no institutional bias, and if conducted by someone with regulatory agency background, closer alignment to what an inspector would observe. Disadvantage: assessors start with no context, requiring significant time investment for orientation.

**Hybrid approach:** Internal team conducts the preliminary assessment; external consultant reviews the findings and conducts targeted follow-up on high-risk areas. This leverages internal knowledge while getting an independent perspective on the most critical gaps.

For organizations with a recent DI-related finding or preparing for a significant regulatory inspection, an external assessment is strongly advisable. The investment in an honest external opinion is small relative to the cost of a warning letter.

---

## Post-Assessment: Turning Findings into Improvement

The gap assessment is only valuable if it drives remediation. Key principles:

**Don't over-document the findings while under-addressing them.** A 200-page assessment report with 47 findings, none of which are addressed in the following year, is worse than a 30-page report with 15 findings that are systematically closed.

**Address critical findings immediately.** If the assessment finds a critical gap — audit trail disabled on the QC CDS — don't wait for the remediation roadmap to be approved. Initiate immediate action while the formal CAPA is being set up.

**Communicate results to leadership.** DI program improvements require resources. A one-page executive summary of the assessment findings, framed in terms of inspection risk and patient safety impact, is more effective for resource allocation than a 200-page technical report.

**Reassess after remediation.** A follow-up assessment 12-18 months after the initial assessment confirms that remediations were effective and identifies any new gaps. This creates the continuous improvement loop that characterizes a mature DI program.
