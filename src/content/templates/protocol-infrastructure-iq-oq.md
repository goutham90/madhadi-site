---
title: "Infrastructure Qualification IQ/OQ Protocol"
description: "A plug-and-play installation and operational qualification protocol for GxP IT infrastructure: hardware or virtual build against specification, OS and patch baseline, network and firewall configuration, time synchronization, storage and RAID, database, monitoring and alerting, security hardening, and backup, with a worked virtualized-host specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Protocol"
pillar: "csv-csa"
relatedArticles: ["infrastructure-qualification-and-spreadsheet-validation","cloud-saas-validation"]
tags: ["infrastructure qualification", "iq", "oq", "qualified infrastructure", "gamp 5", "patch management", "backup", "21 cfr part 11"]
tier: "Intermediate"
---

This is a ready-to-use IQ/OQ protocol for GxP IT infrastructure. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach the build sheets and screenshots the protocol calls for, and route it through your normal document control, review, and approval. A worked filled specimen for a virtualized server host follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

Infrastructure qualification proves that the platform underneath your validated applications was built, configured, and operates the way the design said it would, before any GxP application sits on top of it. GAMP 5 calls this layer the qualified infrastructure: servers and virtual hosts, the operating system and its patch baseline, network and firewall rules, time synchronization, storage and redundancy, databases, monitoring, security hardening, and backup. You qualify it once, you reference it from every application IQ that runs on it, and you keep it under change control. IQ confirms the build matches specification. OQ confirms the platform functions correctly under controlled conditions, that failover works, that backups restore, that alerts fire, that an unauthorized account cannot log in. Get this layer right and every application above it inherits a documented foundation; get it wrong and an inspector pulls the thread through every system you host.

## Document control header

| Field | Entry |
|---|---|
| Document title | Infrastructure IQ/OQ Protocol for `<<FILL: platform / host name>>` |
| Document number | `<<FILL: PRT-ID, e.g. IQOQ-INF-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of IT Quality / Infrastructure>>` |
| Platform / scope | `<<FILL: host(s), cluster, environment, e.g. production virtual host VH-PRD-02>>` |
| Linked design / build spec | `<<FILL: infrastructure design specification ref>>` |
| GxP classification basis | `<<FILL: hosts GxP applications, ref system inventory>>` |
| Linked report | `<<FILL: IQ/OQ summary report number to be issued>>` |

## 1. Purpose

This protocol defines the checks and acceptance criteria to confirm that the infrastructure component `<<FILL: platform / host name>>` was built and configured per the approved design specification (IQ), and that it operates correctly under controlled, repeatable conditions (OQ), so that GxP applications can be installed and qualified on a documented, trustworthy foundation. The objective is an inspection-ready record that the build, operating system and patch baseline, network and firewall configuration, time source, storage and redundancy, database where present, monitoring and alerting, security hardening, and backup are all established, verified, and operating as designed.

## 2. Scope

This protocol applies to the single infrastructure component or platform identified in the header and section 5: the physical or virtual host, its operating system, the network and firewall configuration that serves it, its time synchronization source, its storage and redundancy arrangement, any database instance that supports hosted GxP applications, the monitoring and alerting that watches it, its security hardening, and the backup that protects its data. It covers verification at build time (IQ) and controlled functional verification of the platform (OQ). It does not validate any application hosted on the platform, which is covered by each application's own IQ/OQ/PQ or CSA-scaled testing, and it does not cover routine operation, periodic review, or change control after qualification, which are governed by `<<FILL: cross-reference SOP-IDs>>`. Where a cloud or hosted service provides part of this stack, the provider's responsibilities are defined in the shared-responsibility matrix referenced in section 5 and verified through supplier assessment rather than re-tested here.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Infrastructure / build engineer | Builds the host to the design specification, records the build sheet, captures configuration evidence, and executes the IQ checks. |
| System / platform administrator | Configures OS baseline, patching, time source, storage, security hardening, monitoring, and backup; supports OQ execution. |
| Network / security engineer | Confirms network and firewall configuration, time-source reachability, and hardening against the agreed baseline. |
| Database administrator (if in scope) | Confirms database instance configuration, accounts, and backup, and supports OQ restore testing. |
| Validation / CSV lead | Authors this protocol, defines acceptance criteria, reviews execution, manages deviations, and writes the report. |
| Quality Assurance | Reviews and approves the protocol, deviations, and report, and owns disposition of the qualified state. |

## 4. Definitions

- **Qualified infrastructure**: the GAMP 5 platform layer (compute, OS, network, storage, database, monitoring, backup) that is built and verified to a documented specification and kept under change control, on which validated applications run.
- **IQ (installation qualification)**: documented verification that the component is built and configured as specified, on the right hardware or virtual platform, at the right OS and patch level.
- **OQ (operational qualification)**: documented verification that the component functions correctly across its intended operating range under controlled conditions, including failover, restore, alerting, and access control.
- **Configuration baseline**: the as-built, approved set of settings (OS build, services, accounts, firewall rules, time source, storage layout) that becomes the reference for change control.
- **Hardening**: removal or disabling of unneeded services, default accounts, and open ports, and application of a security configuration standard.
- **RTO / RPO**: recovery time objective (how fast service is restored) and recovery point objective (how much data loss is tolerable), the targets a restore test must meet.

## 5. Infrastructure under qualification

| Item | Entry |
|---|---|
| Component / host name and ID | `<<FILL: VH-PRD-02 / host ID>>` |
| Type | `<<FILL: physical server / virtual host / VM / cluster node>>` |
| Hypervisor / platform (if virtual) | `<<FILL: hypervisor name and version>>` |
| Environment | `<<FILL: production / qualification / development>>` |
| GxP applications to be hosted | `<<FILL: list or "per system inventory">>` |
| Design / build specification ref | `<<FILL: ref and version>>` |
| Cloud / hosted portion (if any) | `<<FILL: provider, service, shared-responsibility matrix ref, or "none">>` |
| Underlying infra already qualified | `<<FILL: e.g. SAN / hypervisor cluster qualification ref, or "N/A">>` |

## 6. Prerequisites

Confirm and record each before execution begins. Do not start IQ until all are met.

1. The design or build specification is approved and current.
2. The host or VM is built and powered, accessible to the executors with the access they need.
3. Required vendor or platform documentation (hardware datasheet, hypervisor version, OS media, security baseline) is available.
4. Executors are trained on this protocol and on the systems they will check.
5. A change record authorizing the build exists, referenced in section 14.

## 7. IQ test cases (installation)

Execute each test case in order. Record the expected result, the observed result, pass or fail, evidence reference (screenshot, build sheet, query output), and executor initials and date. A single failed test is a deviation per section 11, not a quiet re-run.

### 7.1 Hardware or virtual build versus specification

| Step | Check | Acceptance criterion |
|---|---|---|
| 7.1.1 | Host model, CPU, RAM, and assigned resources match the specification. | All match the approved spec; record actual values. |
| 7.1.2 | For a VM: vCPU, memory, disk allocation, and host placement match. | Match spec; placement on the intended (qualified) host or cluster. |
| 7.1.3 | Firmware / BIOS / hypervisor version recorded and within the approved range. | Version recorded and approved. |
| 7.1.4 | Asset tag / CMDB record created and accurate. | Record exists and matches build. |

### 7.2 Operating system and patch baseline

| Step | Check | Acceptance criterion |
|---|---|---|
| 7.2.1 | OS edition, version, and build number match the specification. | Match spec; record exact build. |
| 7.2.2 | Patch level captured against the approved baseline date. | At or above the approved baseline; deltas documented. |
| 7.2.3 | Locale, language, and regional settings set per spec. | Match spec. |
| 7.2.4 | Required runtimes / agents (per spec) installed at correct versions. | Present at correct versions. |

### 7.3 Network and firewall configuration

| Step | Check | Acceptance criterion |
|---|---|---|
| 7.3.1 | Hostname, IP address, subnet mask, gateway, and DNS match the spec. | Match spec; no duplicate IP. |
| 7.3.2 | Host is reachable on required ports from required sources only. | Allowed ports open; all others closed. |
| 7.3.3 | Firewall rules match the approved rule set (inbound and outbound). | Match approved rule set; no any-any rules. |
| 7.3.4 | VLAN / network segment is the one specified for GxP hosts. | Correct segment. |

### 7.4 Time synchronization

| Step | Check | Acceptance criterion |
|---|---|---|
| 7.4.1 | Host clock is synchronized to the approved authoritative time source. | Synchronized to the named NTP / domain time source. |
| 7.4.2 | Time zone and daylight-saving handling set per spec. | Match spec; consistent with other GxP hosts. |
| 7.4.3 | Ordinary users cannot change the system clock. | Clock change restricted to admins; verified. |
| 7.4.4 | Offset from the time source is within the defined tolerance. | Offset within `<<FILL: tolerance, e.g. +/- 1 second>>`. |

Time synchronization is a recurring inspection target because audit trail trustworthiness depends on a reliable, controlled clock. Tie the time source here to the same source referenced in your audit trail review SOP.

### 7.5 Storage and RAID

| Step | Check | Acceptance criterion |
|---|---|---|
| 7.5.1 | Disk layout, volumes, and mount points match the spec. | Match spec; capacity adequate with headroom. |
| 7.5.2 | RAID level or redundancy configured as specified. | Configured per spec; array reports healthy. |
| 7.5.3 | Storage path / datastore is the one approved for GxP data. | Correct storage tier / datastore. |
| 7.5.4 | Free-space and growth allowance recorded. | Free space at or above the threshold in spec. |

### 7.6 Database (where the platform provides one)

| Step | Check | Acceptance criterion |
|---|---|---|
| 7.6.1 | Database engine, edition, and version match the spec. | Match spec; record exact version and patch. |
| 7.6.2 | Instance, collation, and key parameters set per spec. | Match spec. |
| 7.6.3 | Service accounts least-privileged; no default or shared admin in use. | Least-privilege accounts; defaults disabled or renamed. |
| 7.6.4 | Data and log file locations on the approved storage. | Correct locations. |

### 7.7 Security hardening

| Step | Check | Acceptance criterion |
|---|---|---|
| 7.7.1 | Security baseline / hardening standard applied and recorded. | Baseline applied; deviations documented. |
| 7.7.2 | Default and unused accounts disabled or removed. | No active default accounts. |
| 7.7.3 | Unneeded services and ports disabled. | Only required services running. |
| 7.7.4 | Password policy, lockout, and session settings per spec. | Match spec. |
| 7.7.5 | Antivirus / endpoint protection installed and current (where applicable). | Installed, current, exclusions documented. |

### 7.8 Monitoring and alerting configured

| Step | Check | Acceptance criterion |
|---|---|---|
| 7.8.1 | Host enrolled in the monitoring platform. | Host appears and reports in. |
| 7.8.2 | Monitors defined for CPU, memory, disk, service state, and time drift. | All defined per spec with thresholds. |
| 7.8.3 | Alert routing points to the correct on-call / queue. | Routing matches the approved escalation. |

### 7.9 Backup configured

| Step | Check | Acceptance criterion |
|---|---|---|
| 7.9.1 | Backup job covers OS, data, and database (where present). | Scope per spec; nothing GxP excluded. |
| 7.9.2 | Schedule and retention match spec and meet RPO. | Match spec; retention meets records-retention requirement. |
| 7.9.3 | Backup target is the approved, off-host (and where required off-site) location. | Correct target; separation from primary. |
| 7.9.4 | Backup encryption and access controls per spec. | Encrypted; access restricted. |

## 8. OQ test cases (operation)

OQ exercises the platform under controlled conditions to show it behaves as designed. Restore and failover are the high-value tests inspectors look for; configuration alone never proves recoverability.

| Step | Check | Acceptance criterion |
|---|---|---|
| 8.1 | Boot and clean shutdown complete without error. | Both complete; services start in order. |
| 8.2 | Backup restore test: restore a backup to a test target and verify integrity. | Restore succeeds; restored data verified; RTO and RPO met. |
| 8.3 | Failover / redundancy test (cluster, RAID, or HA where present). | Service survives the simulated failure; recovery within target. |
| 8.4 | Monitoring alert test: trigger a threshold (e.g. fill a test disk volume) and confirm an alert reaches the right destination. | Alert fires and is received by the correct recipient. |
| 8.5 | Access control test: an unauthorized account is denied; an authorized account succeeds. | Unauthorized denied; authorized permitted; both logged. |
| 8.6 | Time-source resilience: confirm the host re-synchronizes after a forced drift or source change. | Host re-synchronizes within tolerance. |
| 8.7 | Capacity / load behavior under the defined operating range (where specified). | Behaves within spec; no resource exhaustion. |

## 9. Acceptance criteria

The qualification is acceptable when all of the following are true:

- Every IQ test case in section 7 passes, with evidence attached, or any failure is dispositioned through a closed deviation that does not affect fitness for use.
- Every OQ test case in section 8 passes, including a successful backup restore and any applicable failover, with RTO and RPO met.
- The as-built configuration baseline is captured and approved as the reference for change control.
- Monitoring and alerting are confirmed working, and access control denies the unauthorized and permits the authorized.
- All deviations are documented, assessed, and resolved before the qualified state is accepted.

## 10. Configuration baseline (as-built)

Record the approved as-built baseline so change control has a defined reference point. At minimum capture: host identity and resources, OS version and patch baseline date, network and firewall rule set reference, time source, storage and RAID layout, database version and parameters, security baseline version, monitoring profile, and backup schedule and retention. Attach the full build sheet as Attachment 1.

## 11. Deviations and handling

Any test failure, configuration mismatch, or departure from this protocol is documented as a deviation per `<<FILL: deviation SOP-ID>>`, assessed for impact on fitness for use, and resolved before the qualified state is accepted. Re-execution after a fix is recorded with the deviation reference. Do not release the platform to host GxP applications until all deviations are closed.

## 12. Report

On completion, the validation lead issues report `<<FILL: report number>>` summarizing the IQ and OQ results against acceptance criteria, the approved configuration baseline, all deviations and their resolution, and the conclusion on the qualified state, including the verified RTO and RPO from the restore test. The report is approved by QA.

## 13. References

> 21 CFR Part 11 (electronic records and signatures; controls the platform must support).
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment).
> EU GMP Annex 11 (computerised systems), in particular sections 4 (validation), 7 (data storage), 12 (security), and 13 (incident management).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision, for the IQ/OQ approach.
> GAMP 5 Second Edition (ISPE), infrastructure and platform qualification.
> FDA guidance, Computer Software Assurance for Production and Quality System Software, finalized 24 September 2025 (risk-based scaling of evidence).
> ICH Q9, Quality Risk Management (for the risk basis of test depth).
> PIC/S PI 011, Good Practices for Computerised Systems in Regulated GxP Environments.

Confirm the current version and clause numbers of each reference before issue.

## 14. Linked records

| No. | Record |
|---|---|
| 1 | As-built build sheet and configuration baseline |
| 2 | Design / build specification (approved) |
| 3 | Change record authorizing the build |
| 4 | Security hardening baseline / standard applied |
| 5 | Backup restore test evidence and OQ screenshots |
| 6 | Shared-responsibility matrix (if cloud / hosted portion) |

## 15. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 16. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Validation / CSV) | `<<FILL>>` | | |
| Reviewer (Infrastructure) | `<<FILL>>` | | |
| Reviewer (Security) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows selected IQ and OQ results completed for an example production virtualized server host, so you can see the level of detail an inspector expects. The host, versions, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Component | Virtual host VH-PRD-02, VM on a qualified hypervisor cluster, production environment |
| GxP applications to be hosted | Laboratory information management system, electronic batch record server |
| Build versus spec (7.1) | 8 vCPU, 32 GB RAM, 500 GB disk, placed on cluster PRD-CL-01; matches spec; CMDB record CI-04417 created. Pass. |
| OS and patch baseline (7.2) | Server OS build 20348.2402, patched to the 31 May 2026 approved baseline; locale en-US; agents present. Pass. |
| Network and firewall (7.3) | IP 10.20.4.62/24, gateway 10.20.4.1, DNS set; VLAN 240 (GxP segment); inbound limited to 443 and 1433 from the app subnet only; no any-any rule. Pass. |
| Time synchronization (7.4) | Synchronized to enterprise NTP source ntp-core-01; offset measured at 0.18 seconds, within +/- 1 second tolerance; clock change restricted to admins. Pass. |
| Storage and RAID (7.5) | Datastore DS-GXP-03 on RAID 10, array healthy; 38 percent free; layout matches spec. Pass. |
| Database (7.6) | Database engine 16.0.x Enterprise; collation per spec; least-privilege service account svc-lims-db; data and log files on DS-GXP-03. Pass. |
| Security hardening (7.7) | CIS-aligned baseline v2.1 applied; built-in administrator renamed and restricted; only required services running; endpoint protection current with documented exclusions. Pass. |
| Monitoring and alerting (7.8) | Host enrolled; monitors for CPU, memory, disk, service state, and time drift active; alerts route to the IT-Infra on-call queue. Pass. |
| Backup configured (7.9) | Nightly job covers OS, data, and database; 35-day retention; target is off-host repository BKP-REPO-02, encrypted. Pass. |
| OQ restore test (8.2) | Backup of 02 June 2026 restored to test target VH-TST-09; database integrity check clean; restore completed in 41 minutes against a 4-hour RTO and a 24-hour RPO. Pass. |
| OQ failover test (8.3) | Simulated host failure on the cluster; VM restarted on a surviving node within 6 minutes; service resumed. Pass. |
| OQ alert test (8.4) | Test volume filled to threshold; disk-space alert received by the on-call queue within 2 minutes. Pass. |
| OQ access control (8.5) | Unauthorized account login denied and logged; authorized admin login succeeded and logged. Pass. |
| Deviations | One: monitoring time-drift monitor was initially routed to the wrong queue (7.8.3). DEV-2026-0188 raised, routing corrected, step re-executed, passed. |
| Result | All IQ and OQ test cases pass after one closed deviation; configuration baseline approved; platform released to host GxP applications. |

In this example the team verified the build against specification, confirmed the clock was tied to a controlled time source within tolerance, then proved recoverability with an actual restore that met RTO and RPO rather than assuming the backup job was enough. They forced a failover and a disk alert instead of trusting the configuration, found the one misrouted alert, dispositioned it through a deviation, and re-tested. That sequence, build verification to operational proof to closed deviation, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this protocol prevents

- Applications validated on infrastructure that was never qualified, so the validated state rests on an undocumented platform.
- A backup job configured but never restore-tested, so recoverability was assumed and not proven.
- System clocks not tied to a controlled time source, undermining audit trail trustworthiness across every hosted application.
- Default or shared administrator accounts left active, with no hardening baseline recorded.
- Firewall rules with broad any-any access on a GxP host, or the host placed on the wrong network segment.
- Monitoring present but alert routing never tested, so a real failure would reach no one.
- No captured configuration baseline, so change control has no reference point and drift goes undetected.
- RTO and RPO stated as targets but never verified against an actual restore.

## How to adapt this protocol

1. Set your document number, owner, report number, and effective date in the header.
2. Replace the component and scope in section 5 with your actual host, environment, and the applications it will carry.
3. Trim test cases that do not apply (for example section 7.6 if the platform hosts no database) and add any platform-specific checks your design demands.
4. Set your real tolerances and targets: clock offset in 7.4, free-space threshold in 7.5, and RTO and RPO for the restore test in section 8.
5. For a cloud or hosted portion, attach the shared-responsibility matrix and verify the provider's controls through supplier assessment rather than re-testing them here.
6. Point the cross-references in sections 2 and 11 to your real change control, periodic review, and deviation procedures.
7. Confirm every regulation in section 13 against the current published version before issue.
