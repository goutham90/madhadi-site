---
title: "Disaster Recovery Plan (DR Setup and Runbook)"
description: "A plug-and-play disaster recovery plan for GxP computerized systems: system inventory with RTO and RPO, DR architecture, invocation criteria and roles, a step-by-step failover and failback runbook, communication, dependencies, and validation of recovered systems, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Plan"
pillar: "csv-csa"
relatedArticles: ["backup-restore-disaster-recovery-validation", "it-change-and-configuration-management-gxp"]
tags: ["disaster recovery", "business continuity", "rto", "rpo", "failover", "gamp 5", "annex 11", "csv"]
tier: "Advanced"
---

This is a ready-to-use disaster recovery plan. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your architecture diagrams and contact roster, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

A disaster recovery plan answers two numbers and one question. The numbers are how much data you can afford to lose (recovery point objective, RPO) and how long you can be down (recovery time objective, RTO). The question is: when the primary site or system is gone, what does each person do, in what order, to bring the GxP records back to a trustworthy state. This plan is the document an inspector asks for after a ransomware event, a data center loss, or a failed upgrade, and the document your own team follows at 2 a.m. when the production batch system will not come up.

## Document control header

| Field | Entry |
|---|---|
| Document title | Disaster Recovery Plan for `<<FILL: system or platform scope>>` |
| Document number | `<<FILL: PLN-ID, e.g. DRP-IT-007>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of IT / Infrastructure>>` |
| Quality owner | `<<FILL: role, e.g. Head of Computer System Validation>>` |
| Applies to | `<<FILL: sites / systems / data centers in scope>>` |
| Linked test record | `<<FILL: DR test report number, e.g. DRT-IT-007>>` |
| Review frequency | `<<FILL: at least annual and after any major change>>` |

## 1. Purpose

This plan defines how `<<FILL: COMPANY NAME>>` recovers the GxP computerized systems in scope after an event that makes a primary system or site unavailable, so that GxP records are restored complete, accurate, and attributable within the agreed recovery objectives. The objective is to return regulated operations to a validated state with no silent data loss and a documented trail of what was recovered and how it was verified.

## 2. Scope

This plan applies to the systems listed in the inventory in section 5 at the sites named in the header. It covers loss of a server, a database, a storage array, a network segment, a whole site or data center, a cloud region or service, and logical loss from corruption, malware, or a failed change. It covers the technical recovery of the system and its GxP data, and the verification that the recovered system is fit to use again.

This plan does not cover routine backup and restore of single files, which is governed by `<<FILL: SOP-ID for backup and restore>>`, nor the wider business continuity plan for people, facilities, and supply, which is governed by `<<FILL: BCP-ID>>`. DR is the technology recovery subset of business continuity; keep the two linked but distinct.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| DR coordinator / incident commander | Declares a disaster per section 7, runs the recovery, owns the timeline and the decision log, and calls the all-clear. |
| System owner (per system) | Confirms the recovered system is functionally correct, authorizes return to production use, and owns the data-integrity check. |
| IT / infrastructure | Executes the technical recovery: restores servers, databases, storage, and network per the runbook in section 8. |
| Database administrator | Restores and verifies databases, confirms the recovery point, and reports actual RPO achieved. |
| Quality Assurance | Confirms the recovered system is validated and fit for use, approves any deviation, and owns the GxP disposition of recovered data. |
| Validation / CSV | Confirms the validated state is intact or determines what revalidation is required per section 11. |
| Communications lead | Runs the notification cascade in section 9 to internal stakeholders and, where required, to customers, partners, and authorities. |
| Vendor / cloud provider contact | Executes provider-side recovery actions per the support contract and confirms provider RTO and RPO commitments. |

## 4. Definitions

- **RTO (recovery time objective)**: the maximum acceptable elapsed time from disaster declaration to the system being usable again. It drives the architecture you must buy.
- **RPO (recovery point objective)**: the maximum acceptable amount of data loss, expressed as time. An RPO of 15 minutes means you may lose up to the last 15 minutes of transactions. It drives backup and replication frequency.
- **MTD (maximum tolerable downtime)**: the absolute outer limit beyond which the outage causes unacceptable harm to patients, product, or the business. RTO must sit inside MTD with margin.
- **Failover**: switching production from the failed primary to a standby or recovered environment.
- **Failback**: returning production to the primary (or a rebuilt primary) once it is stable, in a controlled way that does not lose data created during failover.
- **Warm / hot / cold standby**: a standby kept running and current (hot), kept built but lagging or off (warm), or assembled only when needed (cold). Colder is cheaper and slower.
- **Recovery point achieved / recovery time achieved**: the measured RPO and RTO actually delivered in a real event or a test, compared against the objective.

## 5. System inventory with RTO and RPO

List every in-scope system, its GxP criticality, the recovery objectives it must meet, and the recovery method that delivers them. Derive criticality and objectives from a documented business impact analysis (BIA), referenced in Attachment 1. RTO and RPO are commitments you must be able to demonstrate, not aspirations; set them where your architecture can actually meet them, then prove it in the test in section 10.

| System / ID | GxP criticality | RTO | RPO | Recovery method | Standby type | Data store | BIA ref |
|---|---|---|---|---|---|---|---|
| `<<FILL: system 1>>` | `<<FILL: High / Med / Low>>` | `<<FILL: e.g. 4 h>>` | `<<FILL: e.g. 15 min>>` | `<<FILL: DB log shipping + VM restore>>` | `<<FILL: hot/warm/cold>>` | `<<FILL: DB + file share>>` | `<<FILL>>` |
| `<<FILL: system 2>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: system 3>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

Tier guidance, to set defaults you then justify per system:

| Criticality | Typical RTO | Typical RPO | Default standby |
|---|---|---|---|
| High: stops manufacturing, release, or patient supply; or holds the only copy of irreplaceable GxP records | Hours, e.g. 2 to 8 h | Minutes to near zero | Hot or warm with synchronous or frequent async replication |
| Medium: degrades operations but a documented manual workaround exists for a bounded time | Up to 24 to 72 h | Hours, e.g. up to 24 h | Warm or restore-from-backup with a tested image |
| Low: convenience or reporting, no immediate GxP impact | Days | Up to last good backup | Cold, restore from backup |

## 6. DR architecture

Describe how the in-scope systems are protected and where they recover to. State the technology, the replication mechanism, and the geographic separation, and attach the topology diagram (Attachment 2). The architecture must be able to meet the RTO and RPO in section 5; if it cannot, either fix the architecture or change the objectives, do not leave a gap.

| Element | Entry |
|---|---|
| Primary site / region | `<<FILL: site, data center, or cloud region>>` |
| Recovery site / region | `<<FILL: physically/geographically separate site or region>>` |
| Separation distance / blast-radius rationale | `<<FILL: far enough that one event cannot take both, e.g. different power, flood plain, region>>` |
| Replication method (database) | `<<FILL: synchronous / asynchronous log shipping / native cluster, and lag>>` |
| Replication method (files / storage) | `<<FILL: storage array replication / object versioning / scheduled sync, and lag>>` |
| Backup chain | `<<FILL: frequency, retention, immutable/air-gapped copy for ransomware, 3-2-1 rule>>` |
| Immutable / air-gapped copy | `<<FILL: WORM or object-lock copy that malware cannot encrypt or delete>>` |
| Failover trigger | `<<FILL: manual declared / automatic cluster failover, and who can authorize>>` |
| Cloud DR specifics (if applicable) | `<<FILL: multi-AZ vs multi-region, IaC templates, shared-responsibility split with provider>>` |
| Time synchronization | `<<FILL: recovery environment uses the same authoritative time source so audit trail timestamps stay trustworthy>>` |
| DNS / load balancer cutover | `<<FILL: how clients are redirected to the recovery environment>>` |

Two architecture facts that inspectors and ransomware both test. First, asynchronous replication means your real RPO equals the replication lag at the moment of failure, not the schedule on paper; measure the lag and record it. Second, a backup that the same credentials can reach and delete is not a backup against malware; keep at least one immutable or air-gapped copy following the 3-2-1 pattern (three copies, two media, one off-site), and prove you can restore from it.

## 7. Invocation criteria

A disaster is declared, and this plan invoked, when one or more of the following is true and a routine fix inside the normal incident process cannot restore service inside the RTO:

1. A primary system, database, or storage component is lost or corrupted and cannot be restored in place within its RTO.
2. A site, data center, network segment, or cloud region is unavailable and expected to stay unavailable beyond the RTO.
3. GxP data is confirmed corrupted, encrypted by malware, or otherwise untrustworthy, so the system cannot be used safely even if it is technically running.
4. A change or upgrade has failed and cannot be rolled back inside the change window, leaving a GxP system unusable.

Who may declare: `<<FILL: roles authorized to declare a disaster, e.g. DR coordinator or on-call IT manager>>`. The declaration, with timestamp and reason, is the first entry in the decision log (Attachment 3). Declaring is not failure; declaring late is. If in doubt and the RTO clock is running, declare.

## 8. Failover runbook (step by step)

Execute in order. Record the actor, timestamp, and result for every step in the decision log. Do not skip the pre-checks; a failover onto an unverified or stale standby creates a second disaster.

### 8.1 Declare and mobilize

1. The authorized person declares the disaster and starts the decision log with the timestamp and reason.
2. The DR coordinator opens the bridge / war room and assigns the roles in section 3 from the on-call roster (Attachment 4).
3. Start the RTO clock and record it. Note the last known good replication point as the expected RPO.

### 8.2 Assess and stop the bleeding

1. Confirm the scope: which systems, which data stores, which sites are affected.
2. Confirm the primary cannot be restored in place inside the RTO (otherwise this is incident handling, not DR).
3. If malware is suspected, isolate affected networks and do not connect the clean recovery environment to anything that could re-infect it. Recover only from an immutable or air-gapped copy.

### 8.3 Recover infrastructure

1. Bring up the recovery environment: compute, storage, network, and the authoritative time source.
2. Confirm the recovery environment matches the qualified configuration baseline (Attachment 5); record any difference as a deviation.
3. Confirm network routing, firewall rules, and certificates are in place for the recovery environment.

### 8.4 Recover data to the recovery point

1. Restore or activate the database from the latest valid replica or backup.
2. The DBA confirms the actual recovery point reached and records the achieved RPO (gap between last committed transaction and the disaster time).
3. Restore associated file shares, object stores, and interfaces to the same point in time so the data set is internally consistent.
4. Run database and file integrity checks (checksums, row counts, referential integrity) and record the result.

### 8.5 Bring up the application and cut over

1. Start the application services in the recovery environment and confirm they connect to the recovered data.
2. Confirm time synchronization so new audit trail entries carry correct, attributable timestamps.
3. Redirect clients via DNS or load balancer to the recovery environment and confirm users can authenticate with correct roles and privileges.

### 8.6 Verify before release

1. Execute the recovery verification checks in section 11 and obtain the system owner's functional confirmation.
2. QA confirms the recovered system is in a validated, fit-for-use state and records the disposition.
3. The DR coordinator records recovery time achieved against RTO and the recovery point achieved against RPO.
4. Authorize return to GxP use only after the section 11 checks pass. Until then, the system is not to be used for GxP decisions.

## 9. Communication

Run the cascade below as soon as a disaster is declared, then on a fixed interval until all-clear. Keep messages factual: what is down, expected restoration, what users must do meanwhile.

| Audience | Trigger | Channel | Owner | Interval |
|---|---|---|---|---|
| Recovery team | At declaration | `<<FILL: bridge / chat / call tree>>` | DR coordinator | Continuous |
| Affected users / operations | At declaration and at restoration | `<<FILL>>` | Communications lead | `<<FILL: e.g. hourly>>` |
| Senior management / quality leadership | At declaration if RTO or release is at risk | `<<FILL>>` | DR coordinator | `<<FILL>>` |
| Vendor / cloud provider | When provider action is needed | Support contract / TAM | Vendor contact | Per contract |
| Customers / partners | If supply or commitments are affected | `<<FILL>>` | `<<FILL: per QA / commercial>>` | As required |
| Regulatory authorities | Only if a reporting obligation is triggered (for example a data breach or a supply interruption) | Per `<<FILL: regulatory reporting SOP-ID>>` | `<<FILL: regulatory affairs>>` | Per obligation |

Manual workaround instruction: while a system is down, operations follow `<<FILL: SOP-ID for the documented manual / contingency procedure>>`. Records created on paper or an alternative system during the outage must be reconciled back into the recovered system per section 11, with full traceability and no loss of attribution.

## 10. DR testing

A DR plan that has never been tested is a hypothesis. Test on a defined schedule and after any major architecture change, and record the result against the objectives in a test report (linked in the header).

| Item | Entry |
|---|---|
| Test frequency | `<<FILL: at least annually; high-criticality systems more often>>` |
| Test type | `<<FILL: tabletop / partial failover / full failover with timed restore>>` |
| Success criteria | Achieved RTO at or below objective; achieved RPO at or below objective; recovered data verified complete and accurate; runbook usable as written |
| Evidence captured | Timed log of each step, achieved RTO/RPO, integrity-check results, any gaps |
| Findings handling | Gaps and runbook errors raised as CAPA per `<<FILL: CAPA SOP-ID>>` and fed back into this plan |

At least once across the test cycle, perform a full timed restore that actually brings the system up and verifies the data, not only a tabletop walk-through. A restore you have only ever discussed is the one that fails in the real event.

## 11. Validation of recovered systems

A recovered GxP system must be proven fit for use before it carries GxP decisions again. The depth is risk-based: a like-for-like restore onto qualified infrastructure needs verification, not a full revalidation, but it needs documented verification.

| Check | What to confirm | Evidence |
|---|---|---|
| Configuration baseline | Recovered system matches the qualified configuration / version baseline | Config compare vs baseline (Attachment 5) |
| Data completeness | Record counts, last-transaction timestamps, and key totals match the expected recovery point; no records past the achieved RPO are silently missing | Reconciliation report |
| Data integrity | Database integrity and checksum / referential-integrity checks pass; spot-check of critical records against an independent source | Integrity-check output |
| Audit trail | Audit trail is intact, enabled, continuous, and timestamps are correct on new entries | Audit trail review per `<<FILL: audit trail review SOP-ID>>` |
| Interfaces | Inbound and outbound interfaces transfer correct data; no duplicated or dropped transactions across the outage window | Interface reconciliation |
| Access control | Users, roles, and privileges are correct; no orphaned or elevated accounts introduced during recovery | Access review |
| Time and sequence | New records carry correct, attributable timestamps in the right sequence | Sample check |
| Workaround reconciliation | Records created during the outage are entered with correct attribution and reason; no gaps and no duplicates | Reconciliation log |
| QA disposition | QA reviews the above and authorizes return to GxP use | Signed disposition |

If the recovery rebuilt the system differently (new infrastructure, changed configuration, a vendor-side change, a different version), assess what revalidation is required per `<<FILL: CSV / change control SOP-ID>>` before release. Treat that assessment as a change, not as part of the firefight.

## 12. Dependencies

A system rarely recovers alone. Map what each in-scope system needs to function so you recover in the right order and do not bring up an application whose authentication, database, or interface partner is still down.

| Dependent system | Depends on | Recovery order | Notes |
|---|---|---|---|
| `<<FILL: application>>` | `<<FILL: identity / SSO, DNS, time source, database, network>>` | `<<FILL: e.g. recover after identity + DB>>` | `<<FILL>>` |
| `<<FILL: application>>` | `<<FILL: upstream interface / shared file share>>` | `<<FILL>>` | `<<FILL>>` |

Cross-dependencies to confirm explicitly: identity and single sign-on, DNS, the authoritative time source, certificate authority, the database tier, shared storage, network and VPN, license servers, and the cloud provider control plane. Recover foundational services first; an application brought up before its identity provider cannot authenticate anyone.

## 13. Acceptance criteria

Recovery is complete and the plan closed only when all of the following are true:

- The system is restored and authorized for GxP use by the system owner and QA.
- Recovery time achieved is at or below the RTO, or the overrun is documented as a deviation with cause.
- Recovery point achieved is at or below the RPO, or the data gap is documented, assessed for GxP impact, and dispositioned.
- The section 11 verification checks pass, with audit trail intact and data reconciled.
- The decision log is complete and signed, and any CAPA from the event or test is opened.

## 14. Failback

Do not run on the recovery environment indefinitely; return to a stable primary in a controlled way that loses none of the data created during failover.

1. Confirm the primary (rebuilt or repaired) is stable and matches the qualified baseline.
2. Reverse-replicate or synchronize all data created on the recovery environment during the outage back to the primary, and verify completeness.
3. Schedule the cutover in a planned window under change control per `<<FILL: change control SOP-ID>>`; do not fail back under pressure.
4. Cut clients back to the primary, run the section 11 checks again on the primary, and obtain QA disposition.
5. Stand the recovery environment back down to standby and restore normal replication and backups.

## 15. References

> 21 CFR Part 11 (electronic records and signatures), including controls for protection of records to enable accurate and ready retrieval.
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment), including backup of data.
> EU GMP Annex 11, sections 7.2 (data, regular backups), 16 (business continuity), and 17 (archiving).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision, for the qualified state and change control of infrastructure.
> PIC/S PI 041, Good Practices for Data Management and Integrity, for backup, restoration, and data protection.
> GAMP 5 (Second Edition), including IT infrastructure control and business continuity / disaster recovery expectations.
> ICH Q9, Quality Risk Management, for the risk-based RTO / RPO and revalidation decisions.
> ISO 22301 (Business continuity management systems) and ISO/IEC 27031 (ICT readiness for business continuity), as recognized frameworks.

Confirm the current version and clause numbers of each reference before issue.

## 16. Attachments

| No. | Attachment |
|---|---|
| 1 | Business impact analysis (criticality, RTO, RPO basis per system) |
| 2 | DR architecture / topology diagram (primary, recovery site, replication, cutover) |
| 3 | Decision log template (timestamped step record) |
| 4 | On-call roster and escalation / contact tree |
| 5 | Qualified configuration baseline per system (version, build, settings) |
| 6 | DR test report(s) and CAPA references |

## 17. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 18. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (IT / Infrastructure) | `<<FILL>>` | | |
| Reviewer (CSV / Validation) | `<<FILL>>` | | |
| System owner(s) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the inventory, an architecture summary, and a recovery log completed for an example manufacturing execution system, so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

**System inventory (extract)**

| System / ID | GxP criticality | RTO | RPO | Recovery method | Standby type | Data store | BIA ref |
|---|---|---|---|---|---|---|---|
| Manufacturing execution system, MES-PROD-01 | High | 4 h | 15 min | Async DB log shipping to recovery region + VM image restore | Warm | SQL database + batch-record file store | BIA-2026-003 |
| Laboratory information management system, LIMS-01 | High | 8 h | 1 h | Nightly + hourly transaction-log backup, restore to standby | Warm | SQL database | BIA-2026-004 |
| Document management system, DMS-01 | Medium | 24 h | 24 h | Daily backup, restore from immutable copy | Cold | Document repository + database | BIA-2026-005 |

**Architecture summary**

| Element | Entry |
|---|---|
| Primary region | Cloud region A |
| Recovery region | Cloud region B (separate region, independent power and network) |
| Replication (database) | Asynchronous log shipping, target lag under 5 minutes; measured lag recorded each shift |
| Backup chain | Hourly transaction logs, daily full, 90-day retention, plus a daily object-lock immutable copy that production credentials cannot delete |
| Failover trigger | Manual, declared by on-call IT manager or DR coordinator |
| Time synchronization | Recovery region uses the same authoritative NTP source as primary |

**Recovery log extract (real event, primary region storage failure)**

| Step | Time | Actor | Result |
|---|---|---|---|
| Disaster declared (MES-PROD-01 storage lost, not restorable in RTO) | 02:14 | On-call IT manager | Declared; RTO clock started; decision log opened |
| Recovery infrastructure brought up in region B against qualified baseline | 02:55 | Infrastructure | Matches baseline DRP-IT-007 Att.5; no deviation |
| Database restored from log-shipped replica | 03:20 | DBA | Recovered to 02:08; achieved RPO = 6 min (within 15 min objective) |
| File store restored to same point; integrity checks run | 03:40 | Infrastructure / DBA | Row counts and checksums pass; batch-record file count reconciled |
| Application up, clients redirected, time sync confirmed | 04:05 | Infrastructure | Users authenticate with correct roles; new audit entries timestamped correctly |
| Section 11 verification + audit trail review | 04:45 | System owner / QA | All checks pass; outage-window paper records reconciled with attribution |
| Return to GxP use authorized | 05:00 | QA | Disposition signed; recovery time achieved = 2 h 46 min (within 4 h objective) |

In this example the team declared early rather than chasing an in-place fix past the RTO, restored from a measured replica and recorded a 6-minute real RPO against a 15-minute objective, verified data integrity and the audit trail before release, reconciled the records made on paper during the outage, and closed inside the 4-hour RTO with a signed QA disposition. That sequence, declare to recover to verify to dispose, with achieved RTO and RPO recorded against objectives, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this plan prevents

- A disaster recovery plan exists but RTO and RPO are not defined per system, or are aspirations the architecture cannot meet.
- Backups or replicas have never been test-restored, so there is no evidence recovery actually works.
- The only backup copy is reachable and deletable by the same credentials, so ransomware encrypts the backup too; no immutable or air-gapped copy.
- Asynchronous replication is in place but the real RPO (replication lag at failure) is never measured or recorded, so the claimed RPO is unproven.
- A recovered system is returned to GxP use with no data-completeness, audit-trail, or QA disposition check.
- Records created on paper during the outage are entered into the recovered system later with no traceability, breaking attribution.
- Recovery happens out of dependency order, so an application is brought up before its identity provider, database, or time source.
- Failback is improvised under pressure and loses the data created on the recovery environment during the outage.
- The plan was never updated after a major architecture or cloud change, so the runbook no longer matches reality.

## How to adapt this plan

1. Set your document number, owners, effective date, and linked DR test report number in the header.
2. Run or reference a business impact analysis, then fill the inventory in section 5 with your real systems and the RTO and RPO each must meet; set objectives where your architecture can actually deliver them.
3. Describe your real architecture in section 6 and attach the topology diagram, including your immutable or air-gapped backup copy.
4. Replace the dependency map in section 12 with your real identity, DNS, time, database, storage, and interface dependencies, and set the recovery order.
5. Point the cross-references in sections 2, 9, 11, and 14 to your real backup, manual-workaround, audit trail review, CAPA, and change control procedures.
6. Schedule and run a full timed restore test per section 10 before you rely on this plan, and feed every gap back into the document.
7. Confirm every regulation in section 15 against the current published version before issue.
