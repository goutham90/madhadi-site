---
title: "How to Qualify IT Infrastructure (Guide)"
description: "A step-by-step guide to qualifying site IT infrastructure: inventory and classification, baseline standards, IQ and OQ of servers, network, storage, virtualization, OS, and time, environmental and physical security, monitoring, reusing cloud and vendor qualification, periodic review, and the findings it prevents."
pubDate: 2026-06-21
docType: "Guideline"
pillar: "csv-csa"
relatedArticles: ["infrastructure-qualification-and-spreadsheet-validation", "cloud-saas-validation"]
tags: ["infrastructure qualification", "csv", "gamp 5", "annex 11", "21 cfr part 11", "qualification", "data integrity"]
tier: "Intermediate"
---

This is a working guide for qualifying the IT infrastructure that GxP applications run on. Infrastructure qualification is the layer below application validation: the servers, network, storage, virtualization, operating systems, and the clock that every validated application inherits. Get it right once and every application on it starts from a controlled, documented base. Get it wrong and a single mis-set time zone or a silent storage change can put every record on the platform in doubt. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route the deliverables through your normal document control. A worked filled specimen follows so you can see how a completed infrastructure qualification reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | IT Infrastructure Qualification for `<<FILL: site / environment, e.g. primary data center>>` |
| Document number | `<<FILL: doc-ID, e.g. IQP-IT-007>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of IT Quality / Infrastructure>>` |
| Applies to | `<<FILL: sites / data centers / cloud tenancies in scope>>` |

## Where this fits

Infrastructure is GAMP 5 Category 1, the platform layer. It does not hold the business logic, but every Category 3, 4, and 5 application sits on it and inherits its controls. The point of qualifying infrastructure is to prove, and keep proving, that the platform is installed against a known standard, configured the way the documentation says, controlled against unmanaged change, and monitored so that drift is caught. When the application team validates their system, they reference your infrastructure qualification rather than re-proving the network and the clock from scratch. That reference only holds if your qualification is current and your change control is real.

## Step 1: Build and classify the infrastructure inventory

You cannot qualify what you have not listed. Start with a complete inventory of every infrastructure component that supports a GxP application, then classify each one so effort lands where risk is.

1. List every physical and virtual server, the hypervisor hosts, network devices (switches, routers, firewalls, load balancers), storage arrays and the backup infrastructure, the directory and authentication services, the time source, and the data center facility controls.
2. For each component, record the hostname or asset ID, location, role, the GxP applications it supports, owner, and the support or maintenance arrangement.
3. Classify each component as GxP-supporting or non-GxP. A component is GxP-supporting if loss, change, or failure of it could affect the availability, integrity, or attributability of GxP records.
4. Assign a risk level (high, medium, low) from the criticality of the data on the applications it supports and how many of them depend on it. A shared storage array under a release-testing system is high; an isolated print server is low.

Record the inventory and classification in the infrastructure register and keep it under change control. The register is the spine of everything that follows.

| Component / ID | Type | Role | GxP applications supported | GxP? | Risk |
|---|---|---|---|---|---|
| `<<FILL: SRV-APP-01>>` | `<<FILL: virtual server>>` | `<<FILL: application server>>` | `<<FILL: list>>` | Yes / No | `<<FILL: H/M/L>>` |
| `<<FILL: SAN-01>>` | `<<FILL: storage array>>` | `<<FILL: primary data store>>` | `<<FILL: list>>` | Yes / No | `<<FILL>>` |
| `<<FILL: NTP-01>>` | `<<FILL: time source>>` | `<<FILL: clock for the domain>>` | `<<FILL: all>>` | Yes | `<<FILL>>` |

## Step 2: Define baseline and configuration standards

Qualification means verifying installation and configuration against a defined standard, so the standard has to exist first and be approved before you test. Without it, "installed correctly" has no meaning and OQ has nothing to compare against.

Define and approve, as controlled documents:

- A build standard for each server class (OS version and edition, patch baseline, hardening settings, required agents for backup, monitoring, and anti-malware, disabled services, local account policy).
- A network configuration standard (VLAN and segmentation scheme, firewall rule basis, naming, NTP and DNS pointing, change records for rules).
- A storage standard (RAID or equivalent redundancy, allocation, replication, snapshot and retention settings).
- A virtualization standard (host configuration, resource allocation policy, snapshot policy, VM template, separation of GxP and non-GxP guests where required).
- A time standard naming the authoritative source, the protocol, the hierarchy, the synchronization tolerance, and the time zone and format convention.

Reference these standards from the qualification protocol. When a standard changes, that is a change control event that may trigger requalification of the affected components.

## Step 3: Design qualification (DQ): confirm the design before you build

DQ confirms the proposed infrastructure design satisfies the requirements and the standards before money and time go into building it. Keep it proportionate to risk; for infrastructure it is often a short, signed design review rather than a heavy protocol.

In DQ, confirm and record:

- The design meets capacity, availability, redundancy, and security requirements for the highest-risk application it will carry.
- The design follows the baseline standards from Step 2, or documents and justifies any deviation.
- Vendor recommendations and the relevant hardening guidance are reflected.
- A traceable link exists from each infrastructure requirement to where it is verified in IQ or OQ.

## Step 4: Installation qualification (IQ): verify it is installed against the standard

IQ verifies that each component is physically present, correctly installed, and configured to match the approved standard and the documentation. This is the "as-built equals as-designed" check. Record actual values, never a bare tick. An inspector will ask to see the captured screen or report behind a pass.

For each in-scope component, verify and record:

- Hardware or virtual specification matches the design (CPU, memory, storage allocation, network interfaces).
- OS version, edition, and patch level match the build standard, with the actual reported version captured.
- Required agents are installed and reporting: backup, monitoring, anti-malware, time synchronization.
- Hostname, IP, DNS, and network placement match the network standard.
- Hardening settings from the build standard are applied (disabled unneeded services, account and password policy, logging enabled).
- Storage is configured to the storage standard (redundancy level, allocation, replication target).
- The component clock points to the authoritative time source and is synchronized within tolerance.

| IQ check | Acceptance criterion | Actual recorded | Pass/Fail |
|---|---|---|---|
| OS version and patch baseline | Matches build standard `<<FILL: ref>>` | `<<FILL: actual>>` | |
| Backup agent installed and reporting | Present, version `<<FILL>>`, last backup logged | `<<FILL>>` | |
| Anti-malware installed, definitions current | Present, definitions within `<<FILL: N days>>` | `<<FILL>>` | |
| Time synchronization configured | Points to `<<FILL: NTP source>>`, offset within `<<FILL: tolerance>>` | `<<FILL>>` | |
| Storage redundancy | Matches storage standard `<<FILL: ref>>` | `<<FILL>>` | |

## Step 5: Operational qualification (OQ): verify it works as intended

OQ challenges the installed infrastructure to confirm it operates as the standards and requirements demand, across the layers below. Test the behavior, not just the presence of a setting. Capture evidence for each test.

### 5.1 Servers and operating system

- Server boots, recovers cleanly after a controlled restart, and services start in the correct order.
- Access control works: an authorized account gains the right access, an unauthorized account is refused, and both are logged.
- System and security logging is on, captures the expected events, and the logs are protected from ordinary-user edit.
- Patch deployment through the managed process applies a test patch and is recorded.

### 5.2 Network

- Segmentation behaves as designed: permitted paths pass, denied paths are blocked, and the firewall logs the attempt.
- Redundant links and load balancers fail over within the required time when a path is dropped.
- DNS resolves the expected names and NTP is reachable from the hosts that depend on it.

### 5.3 Storage

- Read and write integrity holds: a written file is read back unchanged (checksum verified).
- Redundancy works: a simulated single disk or path failure does not lose data, and the array rebuilds.
- Replication or snapshot to the secondary target completes and is verifiable.
- Capacity alerting triggers at the configured threshold.

### 5.4 Virtualization

- A VM provisions from the approved template with the standard configuration.
- Live migration or restart of a guest on a host event keeps the guest available within the required limit.
- A snapshot can be taken and a guest restored from it, with the restored guest verified.
- Resource isolation holds: one guest cannot starve another beyond the policy.

### 5.5 Time synchronization

- All in-scope hosts read the same authoritative source and agree within the synchronization tolerance.
- The time zone and format match the documented convention across servers, so audit trail timestamps reconcile.
- A controlled clock drift is corrected by synchronization within the expected interval, and the correction is logged.

### 5.6 Backup and restore

- A scheduled backup completes and is logged.
- A restore of a representative data set succeeds and the restored data is verified against the original. A backup is only qualified once a restore has actually been demonstrated, not assumed.
- The recovery point and recovery time meet the documented objectives.

| OQ test | Acceptance criterion | Result captured | Pass/Fail |
|---|---|---|---|
| Restore from backup | Representative data set restored and verified against original | `<<FILL: evidence ref>>` | |
| Storage redundancy | Single-path failure simulated, no data loss, array rebuilds | `<<FILL>>` | |
| Network segmentation | Permitted path passes, denied path blocked and logged | `<<FILL>>` | |
| Time agreement | All hosts within `<<FILL: tolerance>>` of `<<FILL: source>>` | `<<FILL>>` | |
| VM restore from snapshot | Guest restored and verified | `<<FILL>>` | |

## Step 6: Environmental and physical security

Infrastructure availability and record integrity depend on the room as much as the racks. Qualify the facility controls that protect the equipment.

- Physical access to the data center or comms rooms is restricted, logged, and reviewed; the access list is current.
- Environmental controls (temperature, humidity, where specified) are within the equipment vendor's stated operating range and monitored with alarms.
- Power protection is in place and tested: UPS holds the load for the documented runtime, and generator or failover transfer works on a simulated outage.
- Fire detection and suppression suitable for an equipment room is present and maintained.
- Cabling and racking are documented so a fault can be traced.

Record the verification of each control and reference the facility's own maintenance and monitoring records rather than re-proving them in your protocol.

## Step 7: Monitoring and ongoing control

Qualification is a point-in-time statement; monitoring is what keeps it true between qualifications. Define the monitoring that detects drift and the alerts that bring a human in.

- Availability and performance monitoring on the high and medium risk components, with alert thresholds and a named responder.
- Capacity monitoring on storage, compute, and memory, with action before exhaustion, not after.
- Security and access-event monitoring, with review of privileged-access and failed-access events.
- Backup success and time-synchronization status monitored as standard daily checks, since both fail silently.
- Patch and configuration drift monitored against the approved baselines.

Tie the monitoring outputs to incident and change processes so that an alert leads to a recorded action.

## Step 8: Reuse cloud and vendor qualification

When part of the infrastructure is delivered by a cloud provider or a managed-service vendor, you do not re-prove what they prove, but you stay accountable for the regulated outcome. The regulated company keeps responsibility even when the vendor does the work.

1. Risk-assess the service and the vendor, weighting how much GxP data and how many GxP applications depend on it.
2. Audit or assess the vendor: review the current third-party audit reports (for example a SOC 2 Type II report and any ISO 27001 certificate), and verify the scope of those reports actually covers the service and region you use.
3. Use the audit outcome to reduce, not remove, your own testing. Verify the configuration that is yours to set (your tenant settings, your access model, your encryption choices, your backup and retention configuration) and accept the underlying platform controls on the strength of the assessed evidence.
4. Capture the division of responsibility in the agreement and a responsibility matrix, so it is clear who patches, who backs up, who monitors, and who notifies on incident and change.
5. Keep a current copy or a tracked reference to the vendor evidence, and set a date to refresh it. A SOC 2 report from two years ago is stale.

Record the reused evidence and what you still tested yourself, so an inspector can see the seam between vendor controls and your controls. For cloud-hosted applications, see the related guidance on cloud and SaaS validation.

## Step 9: Periodic review and requalification

Infrastructure changes constantly, so a one-time qualification ages out. Define the periodic review that confirms the qualified state still holds, and the triggers that force requalification sooner.

Periodic review (typically annual for high-risk infrastructure, at a justified interval for lower risk) confirms:

- The infrastructure register is still complete and accurate.
- Changes since the last review went through change control and the qualification documentation is current.
- Monitoring data shows the platform stayed within its operating envelope, with incidents resolved.
- Backups continued to run and at least one restore was demonstrated in the period.
- Vendor and cloud evidence is current and still covers the service in use.

Requalify (in full or in the affected scope) on a significant change: a major OS or hypervisor upgrade, a storage or array replacement, a data center move or new region, a network re-architecture, or a vendor change. Define what counts as significant in the change procedure so the decision is not improvised.

## Acceptance criteria for a qualified infrastructure

The infrastructure is in a qualified state when all of the following hold:

- A current, classified inventory exists and every GxP-supporting component is covered by an approved qualification.
- DQ, IQ, and OQ were executed with actual recorded values and captured evidence, and any deviations were resolved.
- Baseline standards are approved, components match them, and change control is enforcing them.
- Backup is proven by a demonstrated restore, and time across all hosts agrees within tolerance.
- Monitoring is live on the high and medium risk components with named responders.
- Reused vendor and cloud evidence is current, scoped correctly, and paired with verification of the customer-side configuration.
- Periodic review is scheduled and requalification triggers are defined.

## References

> EU GMP Annex 11 (Computerised Systems), sections on infrastructure, security, audit trails, and backup.
> 21 CFR Part 11 (electronic records and signatures).
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment), where applicable to manufacturing systems.
> GAMP 5 (A Risk-Based Approach to Compliant GxP Computerized Systems), Second Edition, and the GAMP Good Practice Guide on IT Infrastructure Control and Compliance.
> ISO/IEC 27001 (information security management) and SOC 2 reporting, for vendor and cloud assessment.
> ICH Q9 (Quality Risk Management), for the risk-based effort.
> PIC/S PI 041, Good Practices for Data Management and Integrity.

Confirm the current version and clause numbers of each reference before issue.

## Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (IT / Infrastructure) | `<<FILL>>` | | |
| Reviewer (IT Quality) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the qualification of one shared platform completed for an example virtualized environment, so you can see the level of detail an inspector expects. The company, systems, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Environment | Primary data center, virtualized platform hosting four GxP applications including a release-testing LIMS |
| Components qualified | 3 hypervisor hosts, 8 virtual servers, 1 storage array (SAN-01) with replication to the DR site, 2 firewalls, 1 NTP source (NTP-01), backup infrastructure |
| Classification | SAN-01 and NTP-01 rated high (shared by the LIMS); print and file servers rated low and out of GxP scope |
| Build standard | Server build standard BLD-IT-04 v3.0; network standard NET-IT-02 v2.0; time standard TIM-IT-01 v1.0 (authoritative source NTP-01, tolerance 1 second, time zone fixed to UTC for all GxP hosts) |
| IQ result | All 8 servers matched BLD-IT-04: OS patch baseline current, backup and anti-malware agents reporting, all hosts synchronized to NTP-01 within 0.2 seconds. One deviation: SRV-APP-03 had monitoring agent missing; agent installed, retested, closed. |
| OQ result | Backup restore of the LIMS database verified against original by checksum; SAN-01 single-path failure simulated with no data loss and full rebuild; firewall segmentation confirmed (permitted path passed, denied path blocked and logged); all 11 hosts agreed within 0.3 seconds of NTP-01; a guest restored from snapshot and verified. |
| Environmental | UPS held full load for 22 minutes (objective 15), generator transfer succeeded on simulated outage; room temperature and humidity within the hardware vendor range, monitored with alarms; data center access list reviewed and current. |
| Cloud / vendor reuse | DR replication target is a managed cloud service; provider SOC 2 Type II and ISO/IEC 27001 reviewed and confirmed in scope for the region used; customer-side encryption, retention, and access configuration verified directly. Responsibility matrix records the vendor patches and monitors the platform, the company configures the tenant and demonstrates restore. |
| Monitoring | Availability, capacity, backup-success, and time-sync monitored daily with a named responder; privileged-access events reviewed weekly. |
| Periodic review | Scheduled annually for the high-risk components; requalification triggers defined as a major hypervisor upgrade, a SAN replacement, a region change, or a network re-architecture. |
| Outcome | Platform accepted as qualified. The four hosted applications reference this qualification rather than re-proving the network, storage, and clock. |

In this specimen the team listed and classified everything, qualified against approved standards rather than against memory, proved the backup by an actual restore, proved time agreement across every host, reused the cloud provider's audit evidence while still verifying the customer-side settings, and set the review and requalification rules before closing. That sequence is exactly what an inspector expects to see.

## Common inspection findings this guide prevents

- No infrastructure inventory, or one that does not show which GxP applications depend on each component, so the impact of a change cannot be judged.
- Servers qualified with a bare "pass" and no captured evidence of the actual configuration values.
- Backups scheduled and "verified" on paper, with no restore ever demonstrated.
- Time across hosts not synchronized or running in inconsistent time zones, so audit trail timestamps on different systems do not reconcile.
- Cloud or vendor services treated as out of scope with no risk assessment, no audit evidence reviewed, and no record of who is responsible for patching, backup, and incident notification.
- Vendor SOC 2 or ISO certificates on file but stale, or scoped to a service or region the company does not actually use.
- Infrastructure changed since qualification (OS upgrade, storage swap, region move) with no change control and no requalification, so the qualification on file no longer reflects the live platform.
- No periodic review, so the qualified state is asserted years after it was last verified.

## How to adapt this guide

1. Set your document number, owner, and effective date in the header, and decide whether you issue one infrastructure qualification per environment or one per component class.
2. Replace the generic component list in Step 1 with your real infrastructure register and the risk levels you assigned.
3. Point the baseline standards in Step 2 to your actual build, network, storage, virtualization, and time standards, and reference them from the protocol.
4. Drop any layer in Step 5 that does not apply (for example, virtualization if you run bare metal) and document why, rather than leaving an empty section.
5. For each cloud or managed service in Step 8, name the vendor evidence you reused, confirm its scope and date, and list exactly what you verified yourself.
6. Set your periodic review interval by risk and define your requalification triggers in the change procedure so the decision is consistent.
7. Confirm every regulation in the references against the current published version before issue.
