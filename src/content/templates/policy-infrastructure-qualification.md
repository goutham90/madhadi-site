---
title: "IT Infrastructure Qualification Policy"
description: "A plug-and-play policy that defines which IT infrastructure must be qualified, the qualification lifecycle for servers, storage, network, virtualization, operating systems, databases, time synchronization, and environment, the roles that own it, and the regulations it satisfies, with a filled specimen and the inspection findings it prevents."
pubDate: 2026-06-21
docType: "Policy"
pillar: "csv-csa"
relatedArticles: ["infrastructure-qualification-and-spreadsheet-validation", "cloud-saas-validation"]
tags: ["infrastructure qualification", "csv", "annex 11", "21 cfr part 11", "gamp 5", "it qualification", "policy"]
tier: "Intermediate"
---

This is a ready-to-use policy. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | IT Infrastructure Qualification Policy |
| Document number | `<<FILL: POL-ID, e.g. POL-IT-006>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of IT Quality>>` |
| Applies to | `<<FILL: sites / business units / hosting locations in scope>>` |

## 1. Purpose

This policy sets the requirement that `<<FILL: COMPANY NAME>>` qualifies the IT infrastructure on which GxP computerized systems run, and keeps it in a controlled, documented state for its full life. Applications are validated against requirements; the platform underneath them is qualified to show it is fit, controlled, and stable. A validated application running on an unqualified platform is not defensible, because the integrity of its electronic records depends on the servers, storage, network, time source, and access controls it sits on. This policy makes infrastructure qualification a standing obligation, not a one-time event.

## 2. Scope

This policy applies to all IT infrastructure that hosts, transports, processes, or stores GxP electronic records and electronic signatures at the locations in the header, whether physical, virtual, on-premise, co-located, or cloud-hosted. Where infrastructure is provided by a third party (IaaS, PaaS, managed hosting, or a data center), this policy applies to the oversight, qualification evidence, and contractual controls `<<FILL: COMPANY NAME>>` holds over that provider, governed together with `<<FILL: cross-reference cloud / SaaS validation SOP-ID>>`.

The following infrastructure components are in scope:

- **Compute (servers)**: physical hosts, virtual machines, hypervisor hosts, application and web servers, and any container runtime hosting GxP workloads.
- **Storage**: SAN, NAS, direct-attached storage, object storage, archive tiers, and the storage controllers and arrays that hold GxP data and backups.
- **Network**: switches, routers, firewalls, load balancers, VPN concentrators, wireless infrastructure where GxP traffic crosses it, DNS, and segmentation between GxP and non-GxP zones.
- **Virtualization**: the hypervisor platform, virtualization management layer, resource pools, snapshots, high-availability and live-migration configuration, and the templates used to provision GxP virtual machines.
- **Operating systems**: server and, where they hold GxP records locally, workstation operating systems, including the configured baseline and the patch state.
- **Database platform**: the database management system, its instances, the service accounts, and the configuration that governs integrity, access, and logging (not the application schema, which is covered by the application's validation).
- **Time synchronization**: the authoritative time source (for example an NTP hierarchy traceable to a recognized reference), the synchronization configuration of every GxP host, and the time zone and clock-change controls.
- **Environment and supporting facilities**: the data center or server room power (UPS and generator), cooling, physical access control, fire detection and suppression, and environmental monitoring for the space that houses GxP infrastructure.

This policy does not cover application-level validation (governed by `<<FILL: CSV SOP-ID>>`), end-user computing such as spreadsheets (governed by `<<FILL: spreadsheet validation SOP-ID>>`), or non-GxP IT, except where non-GxP infrastructure shares a platform or network with GxP systems and could affect them.

## 3. Policy statements

1. No GxP application may go live on infrastructure that has not been qualified for the components it depends on. Qualification status is recorded in the system inventory and confirmed before application go-live.
2. Infrastructure qualification is risk-based. The depth of qualification for each component is set from its impact on GxP record integrity, availability, and the safety of patients and product, per `<<FILL: risk SOP-ID>>` and ICH Q9.
3. Qualification follows a defined lifecycle (section 5) and produces controlled, retrievable documented evidence. Verbal assurance, vendor marketing, or an undocumented build does not satisfy this policy.
4. Standard, repeated infrastructure (for example a hardened OS baseline, a hypervisor template, a network device class) is qualified once as a controlled standard, then deployed under change control with a leaner verification of each instance against the qualified standard.
5. Qualified infrastructure stays qualified only while it is under change control, monitored, backed up, patched, and periodically reviewed. A change made outside change control invalidates the qualified state until it is assessed and re-baselined.
6. Time across all GxP infrastructure is synchronized to a single authoritative, controlled source, so that audit trail and record time stamps are accurate and consistent.
7. Where a third party supplies infrastructure, `<<FILL: COMPANY NAME>>` qualifies its own oversight: it assesses the provider, holds the provider's relevant qualification and audit evidence, defines responsibilities in a written agreement, and verifies the controls it relies on.
8. Decommissioning of GxP infrastructure is planned so that records remain readable and retrievable for their full retention period, per `<<FILL: decommissioning SOP-ID>>`.

## 4. Roles and responsibilities

| Role | Responsibility |
|---|---|
| Infrastructure / system owner | Owns the qualified state of the infrastructure in scope, maintains the inventory entry, sponsors qualification and requalification, and confirms qualification before application go-live. |
| IT infrastructure / platform engineer | Designs and builds infrastructure to the qualified standard, executes qualification, applies changes only under change control, and maintains baselines, patching, and time synchronization. |
| IT Quality / Validation | Defines the risk-based qualification approach, reviews and approves qualification deliverables, and confirms the qualified state is maintained. |
| Quality Assurance | Approves this policy and the qualification summary, owns the link to GxP risk, and reviews qualification status during audits and periodic review. |
| Security / network administrator | Maintains firewall rules, segmentation, access controls, and the controls that protect GxP infrastructure, and supports their qualification. |
| Facilities / data center management | Maintains and qualifies power, cooling, physical access, and environmental monitoring for the space housing GxP infrastructure. |
| Third-party provider (where used) | Supplies qualification evidence, maintains the agreed controls, and notifies of changes per the written agreement. |

## 5. Infrastructure qualification lifecycle

Qualification follows the same V-model logic as application validation, scaled to infrastructure. Each component or standard moves through the stages below. Use the established qualification terms; the depth at each stage is set by risk.

### 5.1 Plan

Define what is being qualified, the risk-based depth, the deliverables, and acceptance, in an infrastructure qualification plan referenced from the system inventory. Identify the components in scope and whether each is qualified as a one-off or against a controlled standard. The plan names the standards, builds, and versions to be qualified.

### 5.2 Specify (requirements and design)

Capture the requirements the infrastructure must meet (capacity, availability, integrity, security, time, retention support) and the configuration that meets them. For standard infrastructure, this is the controlled baseline or template specification: the hardened OS image, the hypervisor template, the network device standard, the database build standard.

### 5.3 Installation qualification (IQ)

Verify the infrastructure is installed and configured to the approved specification: correct hardware or virtual resources, correct OS and database versions and patch level, correct network configuration and segmentation, time source configured, monitoring and backup agents present, and access controls applied. IQ confirms what was built matches what was specified.

### 5.4 Operational qualification (OQ)

Verify the infrastructure functions as intended across its operating range: failover and high availability behave correctly, backup completes and a restore succeeds, time synchronization holds across hosts, capacity and performance meet the requirement, security controls block what they should, and alerts fire on the conditions they should. OQ challenges the platform, it does not just confirm the build.

### 5.5 Release and baseline

On acceptable IQ and OQ, the infrastructure is released for GxP use, its configuration is baselined, and its entry in the system inventory records the qualification reference and status. The application that will run on it can now proceed to its own validation and go-live.

### 5.6 Maintain the qualified state (operational life)

The qualified state is held throughout operation by:

- **Change control**: every change to qualified infrastructure (patch, firmware, configuration, capacity, firewall rule, template) is assessed for GxP impact and authorized before it is made, per `<<FILL: change control SOP-ID>>`, with re-verification proportionate to the change.
- **Configuration management**: the baseline of each component and standard is documented and kept current, so the qualified configuration is always known.
- **Patch and vulnerability management**: security patches are assessed, tested, and applied on a defined cadence under change control, with the patch state recorded.
- **Backup and restore**: backups run to schedule and restores are tested periodically, not assumed, per `<<FILL: backup / disaster recovery SOP-ID>>`.
- **Monitoring**: capacity, availability, time drift, and security events are monitored, with alerts and a defined response.
- **Time synchronization**: synchronization to the authoritative source is monitored and any drift beyond the defined tolerance is investigated.
- **Periodic review**: each GxP infrastructure component or standard is reviewed on a defined cadence (section 6) to confirm it remains qualified and under control.

### 5.7 Retire

When infrastructure is removed from GxP use, it is decommissioned under a plan that confirms records have been migrated or archived in readable, retrievable form for their full retention period, accounts and access are removed, and the inventory is updated, per `<<FILL: decommissioning SOP-ID>>`.

## 6. Periodic review and requalification

| Risk classification of component | Default periodic review cadence | Requalification trigger |
|---|---|---|
| High (direct impact on GxP record integrity, availability, or patient/product) | `<<FILL: e.g. annually>>` | Major change, repeated incidents, platform end-of-life, migration, or review finding |
| Medium | `<<FILL: e.g. every 2 years>>` | Significant change or review finding |
| Low (supporting, indirect) | `<<FILL: e.g. every 3 years or at platform change>>` | Material change to scope or risk |

Periodic review confirms the baseline is current, changes were controlled, patching is on schedule, backups and restores are evidenced, time synchronization holds, monitoring and alerting work, and the inventory is accurate. A failed review, a major change, or a migration triggers requalification of the affected component, scoped to the change.

## 7. Standards followed

This policy aligns to:

> 21 CFR Part 11 (electronic records and electronic signatures), including the controls on accurate, time-stamped audit trails and limited system access.
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment), where infrastructure supports GMP records.
> EU GMP Annex 11 (Computerised Systems), in particular the principles on infrastructure, physical and logical security, data storage, backups, and IT suppliers and service providers.
> ICH Q9 (Quality Risk Management), for the risk-based depth of qualification.
> ISO/IEC 27001 (information security management) and ISO 22301 (business continuity), where used to support security and continuity controls.
> GAMP 5 (Second Edition) and the GAMP Good Practice Guide on IT Infrastructure Control and Compliance, for the qualification approach and the qualify-the-standard model.
> NIST SP 800-53 / SP 800-171, where used as the security control baseline.

Confirm the current version and clause numbers of each reference before issue.

## 8. Related documents

| Type | Document |
|---|---|
| CSV / application validation | `<<FILL: SOP-ID>>` |
| Change control for validated systems | `<<FILL: SOP-ID>>` |
| Backup, restore, and disaster recovery | `<<FILL: SOP-ID>>` |
| Patch and vulnerability management | `<<FILL: SOP-ID>>` |
| Cloud / SaaS / supplier oversight | `<<FILL: SOP-ID>>` |
| Decommissioning and retirement | `<<FILL: SOP-ID>>` |
| System inventory | `<<FILL: register location / ID>>` |

## 9. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 10. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (IT Quality) | `<<FILL>>` | | |
| Reviewer (IT / Infrastructure) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows a single qualified-infrastructure record completed for an example on-premise virtual platform that hosts a GxP laboratory application, so you can see the level of detail an inspector expects. The company, systems, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Infrastructure item / standard | Production virtualization platform, hypervisor cluster VH-PROD-A (3 hosts), hosting GxP VMs |
| GxP systems it supports | Laboratory data system LAB-DS-01 (High); document management DMS-02 (High) |
| Components qualified | Hypervisor cluster, hardened Linux OS standard v3, SAN storage tier, network segment VLAN-GxP-20, NTP time source, database build standard |
| Risk classification | High (hosts release-testing records and quality records) |
| Qualification approach | Standards qualified once (OS image, DB build, network device class); each VM instance verified against the qualified standard at provisioning |
| IQ reference / outcome | IQ-IT-VH-PROD-A-001, passed: correct host firmware, hypervisor version, OS image hash matched baseline, VLAN segmentation confirmed, NTP source configured on all hosts |
| OQ reference / outcome | OQ-IT-VH-PROD-A-001, passed: live migration tested, host failover restored VMs within target, nightly backup completed, restore of LAB-DS-01 verified, time drift across hosts under 1 second over 7 days, firewall ruleset blocked non-GxP segment access |
| Time synchronization | All hosts synced to internal NTP hierarchy traceable to a recognized reference; drift tolerance 2 seconds; monitored daily |
| Baseline / configuration record | CFG-VH-PROD-A v1.2, current; OS standard v3 baseline on file |
| Maintained controls | Monthly assessed patch cycle under change control; quarterly restore test; capacity and time-drift monitoring with alerts |
| Periodic review | Annual; last review PR-IT-VH-PROD-A-2026, qualified state confirmed, two minor changes traced to approved change records |
| Inventory status | Qualified, released, recorded in system inventory; confirmed before LAB-DS-01 go-live |

In this example the team qualified the platform once at the standard level, then provisioned each GxP virtual machine against that controlled standard with a light instance verification rather than re-running full IQ and OQ every time. They proved the platform under load (failover, restore, time drift) rather than just confirming the build, synchronized every host to one controlled time source, and kept the qualified state alive with change control, restore tests, and an annual review. That sequence, qualify the standard, deploy under control, prove it works, and keep proving it, is exactly what a reviewer is expected to see.

## Common inspection findings this policy prevents

- A validated application running on infrastructure with no qualification evidence, so the platform under the trusted records is unproven.
- Servers, hypervisors, or network devices changed or patched outside change control, breaking the qualified baseline with no impact assessment.
- Backups scheduled but restores never tested, so recoverability of GxP records is assumed rather than demonstrated.
- Hosts running on different or drifting clocks, making audit trail and record time stamps inconsistent and not attributable in time.
- Full IQ and OQ never repeated, and no periodic review either, so qualified status is years stale with no evidence it still holds.
- Cloud or co-located infrastructure used with no provider assessment, no shared-responsibility agreement, and no qualification evidence held by the company.
- Decommissioned servers retired with GxP records left unreadable or unretrievable before the retention period ended.
- No system inventory, so neither the company nor the inspector can tell which infrastructure is GxP and what its qualification status is.

## How to adapt this policy

1. Set your document number, owner, and effective date in the header, and your in-scope sites and hosting locations in section 2.
2. Confirm the component list in section 2 matches your real estate; remove components you do not operate and add any you do (for example container orchestration or a message bus that carries GxP data).
3. Decide which infrastructure you will qualify as controlled standards versus one-offs, and state it in the qualification plan called up by section 5.1.
4. Set your real risk classifications and the periodic review cadences in section 6 to match your risk procedure and inventory.
5. Point the cross-references in sections 2, 5, and 8 to your actual CSV, change control, backup and disaster recovery, patch management, cloud oversight, and decommissioning procedures, and to your system inventory.
6. If you use third-party infrastructure, define in section 3 statement 7 and your supplier procedure exactly which qualification evidence you will hold and which controls you will verify yourself.
7. Confirm every standard in section 7 against the current published version before issue.
