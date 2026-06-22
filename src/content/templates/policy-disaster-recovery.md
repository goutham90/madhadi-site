---
title: "Disaster Recovery Policy"
description: "A plug-and-play disaster recovery policy for GxP IT systems: recovery objectives, RTO and RPO tiers by system criticality, the requirement for a tested DR plan, roles, invocation authority, review frequency, and the relationship to business continuity, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Policy"
pillar: "csv-csa"
relatedArticles: ["backup-restore-disaster-recovery-validation", "it-change-and-configuration-management-gxp"]
tags: ["disaster recovery", "rto", "rpo", "business continuity", "gxp it", "data integrity", "policy"]
tier: "Intermediate"
---

This is a ready-to-use disaster recovery policy. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

A policy states what must be true and who is accountable; it does not give step-by-step instructions. The detailed recovery steps live in the per-system DR plans this policy requires. Keep that line clean: the policy sets the rules and the objectives, the plans carry the runbooks.

## Document control header

| Field | Entry |
|---|---|
| Document title | Disaster Recovery Policy |
| Document number | `<<FILL: POL-ID, e.g. POL-IT-007>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of IT or CISO>>` |
| Approved by | `<<FILL: role, e.g. Head of Quality and Head of IT>>` |
| Applies to | `<<FILL: sites / business units in scope>>` |

## 1. Purpose

This policy sets the rules under which `<<FILL: COMPANY NAME>>` recovers its computerized systems and the GxP data they hold after a disruptive event, so that records stay available, complete, and trustworthy and so that regulated operations can resume within a defined time. The objective is that no event, a hardware loss, a data-center outage, a ransomware encryption, a corrupted database, or a cloud-region failure, results in lost GxP data beyond a stated tolerance or in a recovery that cannot be demonstrated to have restored the data intact.

## 2. Scope

This policy applies to every computerized system that creates, processes, transmits, or stores GxP records, and to the infrastructure those systems depend on (servers, storage, network, virtualization, identity, and the backup systems themselves), whether hosted on-premises, in a private data center, or with a cloud or SaaS provider. It applies to systems owned by `<<FILL: COMPANY NAME>>` and to outsourced systems where the contract places recovery duties on a supplier. It does not by itself cover personnel safety, facility evacuation, or commercial continuity of supply, which sit under the business continuity program referenced in section 9.

## 3. Policy statements

Each statement below is mandatory. Conformance is auditable against the records named in section 8.

### 3.1 Every GxP system is assigned a recovery tier

Every GxP system carries a documented criticality rating and a recovery tier in the system inventory. The tier sets the recovery time objective (RTO) and recovery point objective (RPO) the system must meet. No GxP system goes live without a tier assigned and a DR plan in place.

### 3.2 Recovery objectives are defined and met by tier

RTO (how fast the system must be usable again) and RPO (how much recent data may be lost, measured as the maximum acceptable gap between the last good backup and the moment of failure) are set per tier in section 4. Backup frequency, replication, and architecture are chosen so the stated RPO and RTO are achievable, not aspirational. A system whose backup interval is longer than its RPO is not in conformance.

### 3.3 Every GxP system has a documented, current DR plan

Each system (or each defined group of systems) has a DR plan that names the recovery team, the recovery sequence and dependencies, the location of backups and recovery media, the restore procedure, the data integrity verification step, and the criteria to declare recovery complete. The plan is version-controlled and kept current as the system changes.

### 3.4 DR plans are tested on a schedule, and the test is evidence

DR capability is proven by test, not assumed from the existence of a plan. Each plan is exercised at the frequency set in section 4, by a restore to a usable state, and the test produces a dated record with the measured recovery time, the verified data point, and any gaps found. An untested DR plan is treated as not validated.

### 3.5 Restored GxP data is verified for integrity before reliance

After any recovery, the data is checked to confirm it is complete and unaltered against the last known good state (record counts, checksums or hashes where available, audit trail continuity, and a sample data comparison) before the system is returned to GxP use. Recovery is not "the application starts"; recovery is "the data is proven intact and the system is usable."

### 3.6 Backups are protected, off-site, and themselves recoverable

Backups are stored so a single event cannot destroy both production and backup (geographic separation), are protected against alteration and deletion (immutability or air-gap for the ransomware case), and are periodically test-restored to prove they are readable. Encryption keys and credentials needed to restore are themselves backed up and held separately.

### 3.7 Invocation authority is defined and limited

A disaster is declared, and the DR plan invoked, only by an authorized role named in section 6. Declaration, the decision basis, the time, and the systems affected are recorded. This prevents both unauthorized failovers and the more common failure, no one being clearly authorized to make the call while the clock runs.

### 3.8 Outsourced and cloud systems carry equivalent commitments

Where a system is hosted by a supplier or SaaS provider, the contract or quality agreement states the provider's RTO, RPO, backup arrangement, DR test cadence, and the evidence the provider will supply. `<<FILL: COMPANY NAME>>` keeps its own ability to obtain its GxP data, in usable form, on exit or on provider failure.

### 3.9 Recovery is exercised under change control and reviewed after the fact

Any real disaster invocation is followed by a post-event review that captures what worked, what did not, the actual RTO and RPO achieved, and corrective actions raised through the CAPA system. Changes that affect recovery (new system, architecture change, backup change) are assessed for DR impact under the change management procedure `<<FILL: SOP-ID for change management>>`.

## 4. Recovery tiers, objectives, and test cadence

Tiers below are the default. Assign each GxP system to a tier in the inventory and record the basis. Tighter or looser values are allowed only with a documented, risk-based justification approved by Quality and IT.

| Tier | System criticality (examples) | RTO (usable again within) | RPO (max data loss) | Min DR test cadence |
|---|---|---|---|---|
| Tier 1, critical | Systems whose loss halts release, manufacturing, or patient-impacting decisions (e.g. MES, LIMS for release, EBR, batch disposition, pharmacovigilance safety database) | `<<FILL: e.g. 4 hours>>` | `<<FILL: e.g. 15 minutes>>` | `<<FILL: e.g. annually, plus after major change>>` |
| Tier 2, important | Systems that support GxP operations but tolerate a short, planned outage (e.g. QMS for deviations/CAPA, document management, stability/EM data systems) | `<<FILL: e.g. 24 hours>>` | `<<FILL: e.g. 4 hours>>` | `<<FILL: e.g. every 2 years>>` |
| Tier 3, supporting | GxP-relevant systems where data is recoverable from other records and a longer outage is acceptable (e.g. training records, periodic-review trackers) | `<<FILL: e.g. 72 hours>>` | `<<FILL: e.g. 24 hours>>` | `<<FILL: e.g. via backup restore verification>>` |

Two rules govern the table. First, backup frequency must be at least as often as the RPO, a 15-minute RPO needs continuous or 15-minute-interval protection, not a nightly backup. Second, the RTO clock runs from declaration to "data verified and system usable," not to "server powered on." Size both against those definitions.

## 5. Definitions

- **Disaster**: any event that renders a GxP system, or its data, unavailable or untrustworthy and that cannot be resolved within normal operational support, requiring invocation of a DR plan.
- **RTO (recovery time objective)**: the maximum acceptable time from declaration of a disaster to the system being usable again with verified data.
- **RPO (recovery point objective)**: the maximum acceptable amount of recent data loss, expressed as the largest acceptable time gap between the last recoverable good state and the point of failure.
- **DR plan**: the system-specific, version-controlled document containing the recovery team, sequence, media locations, restore steps, integrity verification, and completion criteria.
- **Failover / failback**: switching processing to a recovery environment, and later returning to the primary, each performed under the DR plan.
- **Immutable backup**: a backup that cannot be altered or deleted for a defined retention window, the principal defense against ransomware that also encrypts backups.
- **Business continuity (BC)**: the broader program that keeps the business operating through disruption (people, facilities, supply); DR is the IT and data recovery component of it.

## 6. Roles, responsibilities, and invocation authority

| Role | Responsibility |
|---|---|
| Policy owner (IT / CISO) | Owns this policy, the tier model, and the overall DR capability; ensures every GxP system has a current, tested plan. |
| System owner | Confirms the criticality and tier of their system, owns its DR plan, and confirms the system is fit for GxP use after recovery. |
| IT operations / infrastructure | Maintains backups, replication, recovery environments, and time synchronization; executes restores per the plan. |
| Quality Assurance | Approves this policy and the tier assignments, oversees data integrity verification after recovery, and confirms DR tests and post-event reviews happen and are recorded. |
| Disaster declaration authority | Named role(s) authorized to declare a disaster and invoke a plan: `<<FILL: e.g. Head of IT or on-call IT duty manager, with QA notified>>`. A documented deputy covers absence. |
| Recovery team | The cross-functional group named in each plan who execute recovery for that system. |
| Supplier / cloud provider | Where applicable, meets the contracted RTO, RPO, backup, test, and evidence obligations. |

Invocation rule: a disaster is declared only by the authority above (or the named deputy). The declaration, time, basis, and systems affected are recorded the same day. For ambiguous events, the authority may invoke precautionarily; an unnecessary invocation is preferable to a delayed one.

## 7. Review and currency

| Trigger | Action |
|---|---|
| Periodic review | This policy is reviewed at least every `<<FILL: e.g. 2>>` years and reissued if changed; the review is recorded even when no change results. |
| New or changed GxP system | The system is assigned a tier and a DR plan before go-live; existing plans are reassessed when architecture, hosting, or criticality changes. |
| After a DR test or real invocation | Findings feed plan updates and, where needed, CAPAs; objectives are re-justified if a test shows the stated RTO/RPO is not achievable. |
| Regulatory or threat change | The policy and tiers are reassessed when a relevant regulation, guidance, or threat (for example a new ransomware pattern) changes the risk basis. |

## 8. Records that demonstrate conformance

| Record | Demonstrates |
|---|---|
| System inventory with criticality and tier | Statement 3.1: every system tiered |
| Per-system DR plans (version-controlled) | Statements 3.3, 3.7 |
| Backup configuration and success logs | Statements 3.2, 3.6 |
| DR test records (date, measured RTO, verified data point, gaps) | Statements 3.4, 3.5 |
| Backup test-restore / readability records | Statement 3.6 |
| Disaster declaration log and post-event reviews | Statements 3.7, 3.9 |
| Supplier agreements / SaaS DR evidence | Statement 3.8 |

## 9. Relationship to business continuity and other procedures

Disaster recovery is the IT and data recovery part of the wider business continuity program `<<FILL: BC plan/policy ID>>`. Business continuity decides which business processes must keep running and how (people, facilities, alternate sites, supply); this policy makes sure the systems and GxP data those processes depend on can be restored within the agreed objectives. The two must be consistent: a BC plan that needs a process back in four hours cannot rest on a Tier 3 system with a 72-hour RTO. This policy also connects to: change management `<<FILL: SOP-ID>>` (DR impact of changes), backup and restore operations `<<FILL: SOP-ID>>`, incident and security management `<<FILL: SOP-ID>>`, supplier qualification `<<FILL: SOP-ID>>`, and CAPA `<<FILL: SOP-ID>>` (post-event actions).

## 10. References

> 21 CFR Part 11 (electronic records and signatures), including the requirement to protect records to enable accurate and ready retrieval throughout the retention period.
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment), including backup of data.
> 21 CFR 211.180 (general records requirements and retention).
> EU GMP Annex 11, sections 7.2 (data storage and backup), 16 (business continuity), and 17 (archiving).
> EU GMP Chapter 4 (documentation, retention and retrieval).
> MHRA GxP Data Integrity Guidance and Definitions (availability and recoverability of data).
> PIC/S PI 041, Good Practices for Data Management and Integrity.
> ICH Q9, Quality Risk Management (basis for risk-based tiering).
> GAMP 5 (Second Edition), risk-based approach to GxP computerized systems (DR and backup as supporting processes).
> ISO 22301 (business continuity management) and ISO/IEC 27031 (ICT readiness for business continuity), as recognized references.

Confirm the current version and clause numbers of each reference before issue.

## 11. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 12. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (IT) | `<<FILL>>` | | |
| Reviewer (QA) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the tier model and a single DR test record completed for an example company, so you can see the level of detail an inspector expects. The company, systems, and numbers are illustrative; replace them with your own.

### Tier model as assigned (extract from inventory)

| System (ID) | Hosting | Criticality | Tier | RTO | RPO | Backup interval | Last DR test |
|---|---|---|---|---|---|---|---|
| LIMS for release testing (SYS-LIMS-01) | On-prem, replicated to DR site | Critical | Tier 1 | 4 hours | 15 minutes | Continuous replication + 15-min snapshots | 12 March 2026, passed |
| Manufacturing execution (SYS-MES-02) | On-prem | Critical | Tier 1 | 4 hours | 15 minutes | 15-min log shipping | 12 March 2026, passed |
| Quality management system (SYS-QMS-03) | SaaS | Important | Tier 2 | 24 hours | 4 hours | Provider 4-hourly, contract-bound | Provider attestation, 31 Jan 2026 |
| Training records (SYS-LMS-04) | SaaS | Supporting | Tier 3 | 72 hours | 24 hours | Provider nightly | Backup readability check, 15 Feb 2026 |

### DR test record (Tier 1, SYS-LIMS-01)

| Field | Entry |
|---|---|
| System and ID | LIMS for release testing, SYS-LIMS-01 |
| Test type | Full failover to DR site and restore of database |
| Test date | 12 March 2026 |
| Declared RTO / RPO | RTO 4 hours; RPO 15 minutes |
| Scenario simulated | Total loss of primary data-center storage array |
| Time declared to system usable (measured RTO) | 2 hours 41 minutes |
| Data loss measured (measured RPO) | Last replicated transaction was 6 minutes before simulated failure |
| Data integrity verification | Row counts matched (4,812,330 result records); SHA-256 hash of the audit-trail export matched the pre-failure baseline; 25-sample result comparison clean; audit trail continuous with no gap |
| Gaps / findings | Two analyst accounts did not authenticate at the DR site due to a stale identity-provider trust; resolved during the test and logged |
| CAPA raised | CAPA-2026-0188, automate identity-provider trust replication to DR site |
| Recovery declared complete by | M. Okafor (System Owner), J. Reyes (QA), 12 March 2026 |

In this example the team did not stop at "the application came up." They measured the actual RTO and RPO against the tier targets, proved the restored data matched the pre-failure state by count and by hash, found a real defect (identity trust) that would have blocked analysts in a true event, and routed it to CAPA. That sequence, test to measured objectives to verified integrity to finding to CAPA, is exactly what an inspector expects DR conformance to look like.

## Common inspection findings this policy prevents

- A DR plan exists on paper but has never been tested, so there is no evidence recovery actually works.
- Backups run nightly while the system's stated RPO is one hour, so the backup design cannot meet its own objective.
- Backups sit in the same room or same cloud region as production, so one event destroys both copies.
- A ransomware event encrypts production and the backups together because no backup was immutable or air-gapped.
- After a restore, the system was returned to use with no verification that the GxP data was complete and unaltered.
- No one is clearly authorized to declare a disaster, so recovery stalls while people debate who can make the call.
- RTO and RPO are stated for IT comfort but were never reconciled with the business continuity plan that depends on them.
- A SaaS-hosted GxP system has no contracted RTO/RPO and no DR evidence from the provider, and the company has no way to retrieve its data if the provider fails.

## How to adapt this policy

1. Set your document number, owner, approvers, and effective date in the header.
2. Replace the example systems in section 4 and the specimen with your real GxP system inventory, and assign each a tier with a recorded basis.
3. Fill the RTO, RPO, and test cadence values per tier to numbers your architecture can actually meet, then confirm backup frequency is at least as often as each RPO.
4. Name your real disaster declaration authority and deputy in section 6, and point the cross-references in section 9 to your real business continuity, change management, backup, incident, supplier, and CAPA procedures.
5. For each outsourced or SaaS GxP system, confirm the contract or quality agreement carries the RTO, RPO, backup, DR-test, and evidence commitments required by statement 3.8, and your own data-exit ability.
6. Confirm every regulation in section 10 against the current published version before issue.
