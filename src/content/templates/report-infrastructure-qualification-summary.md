---
title: "Infrastructure Qualification Summary Report"
description: "A plug-and-play summary report that rolls up the qualification of GxP IT infrastructure: results against acceptance criteria, deviations and their resolution, the qualified baseline established, the release decision, and the periodic review basis, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Report"
pillar: "csv-csa"
relatedArticles: ["infrastructure-qualification-and-spreadsheet-validation", "cloud-saas-validation"]
tags: ["infrastructure qualification", "qualification summary report", "it qualification", "gamp 5", "baseline", "periodic review", "annex 11"]
tier: "Intermediate"
---

This is a ready-to-use infrastructure qualification summary report. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your executed installation and operational verification records, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

An infrastructure qualification summary report is the closing record for the IT platform that GxP applications run on: the servers, operating systems, virtualization layer, network, storage, database engines, time synchronization, and backup that sit underneath the validated applications. It does not validate the applications themselves; it proves the platform they depend on was installed, configured, and verified against a controlled specification, and it freezes that proven state as a qualified baseline. An inspector reads this report to decide whether the foundation is trustworthy before looking at any application validation that rests on it. Infrastructure is GAMP 5 Category 1, so the effort is verification against a specification, not full application-style testing, but the record still has to show what was built, that it matched the spec, what deviated, and how the state is kept under control over time.

## Document control header

| Field | Entry |
|---|---|
| Document title | Infrastructure Qualification Summary Report for `<<FILL: infrastructure scope / platform name>>` |
| Document number | `<<FILL: IQSR-ID, e.g. IQSR-IT-009>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. IT Quality / Infrastructure Lead>>` |
| Infrastructure scope | `<<FILL: data center / hosts / cluster / environment names and IDs>>` |
| Linked plan | `<<FILL: qualification plan or VMP this report closes, e.g. IQP-IT-009>>` |
| Site / location | `<<FILL: data center, room, region, or cloud region>>` |
| GxP classification | `<<FILL: GxP / GxP-supporting, GAMP 5 Category 1 infrastructure>>` |

## 1. Purpose

This report summarizes the qualification of the IT infrastructure components listed in section 2, performed under plan `<<FILL: plan number>>`, and concludes on whether that infrastructure is fit to host GxP applications and data. It records each verification activity executed, the results against pre-approved acceptance criteria, all deviations and their resolution, confirmation that requirements were traced to a verification and a result, the qualified baseline established, the release statement, and the periodic review basis that keeps the infrastructure in a qualified state.

## 2. Scope and intended use

State exactly which components are covered and which are excluded, in the same terms the plan and the infrastructure specification used. A summary report that claims more than the verification covered is not defensible.

| Item | Entry |
|---|---|
| Infrastructure qualified | `<<FILL: hosts, cluster, network segments, storage arrays, OS builds, DB engine versions>>` |
| Intended use | `<<FILL: host validated GxP applications X, Y; store GxP records; provide backup and time service>>` |
| Environments in scope | `<<FILL: production / DR; qualification environment if separate>>` |
| In scope | `<<FILL: physical hosts, hypervisor, guest OS gold images, network/firewall config, storage/SAN, NTP, backup/restore, monitoring agents>>` |
| Out of scope | `<<FILL: application-layer validation, end-user devices, building utilities/HVAC, items covered by separate qualification>>` |
| Hosting model | `<<FILL: on-premise / private cloud / IaaS; if IaaS, the provider's qualified scope vs yours>>` |
| Classification basis | `<<FILL: reference to system inventory / impact assessment classifying this as GxP infrastructure>>` |

For infrastructure delivered as a service (IaaS or PaaS), state clearly which layers the provider qualifies under its own controls and which layers you qualify. Reuse of the provider's evidence is acceptable when you have assessed it; record that assessment, do not assume it.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Infrastructure engineer / author | Authors this report, compiles verification results, confirms the build matches the specification, and writes the conclusion. |
| Infrastructure architect | Owns the infrastructure specification and the design the build is verified against; owns engineering deviations. |
| IT operations | Confirms standard builds, patching, backup, monitoring, and time sync are established and supportable before release. |
| Information security | Confirms access control, hardening, and the firewall ruleset meet the security baseline. |
| Quality Assurance / IT Quality | Reviews and approves the plan, verification records, deviations, and this report, and owns the disposition. |
| Qualification lead / approver | Confirms the qualification is complete and the infrastructure can be declared qualified and released. |

## 4. Definitions

- **Infrastructure qualification (IQ for infrastructure)**: documented verification that IT infrastructure components are installed and configured according to an approved specification and operate as required to support GxP applications.
- **GAMP 5 Category 1**: the GAMP 5 classification for infrastructure software (operating systems, database engines, network software, virtualization), qualified by verification against a specification rather than by application-style functional testing.
- **Qualified baseline**: the recorded, controlled, as-built state (component versions, configuration values, firmware, OS and database versions, patch level) that the conclusion certifies and that change control then protects.
- **Installation verification**: confirmation that the right components, versions, and configuration are present, matching the specification.
- **Operational verification**: confirmation that infrastructure services (time sync, backup and restore, failover, access control, monitoring) actually work as required.
- **Configuration management database (CMDB)**: the controlled inventory of infrastructure items and their attributes that holds the baseline going forward.

## 5. Components and specification

List each infrastructure component in scope, its identity and version, and the specification it was built and verified against. This table is the backbone of the report.

| Component | Identifier / hostname | Type | Version / build | Specification reference |
|---|---|---|---|---|
| `<<FILL: physical host>>` | `<<FILL: ESXHOST-01>>` | Hypervisor host | `<<FILL: hypervisor version, firmware>>` | `<<FILL: spec/build doc>>` |
| `<<FILL: guest OS image>>` | `<<FILL: gold image ID>>` | OS build | `<<FILL: OS version, patch level>>` | `<<FILL>>` |
| `<<FILL: database engine>>` | `<<FILL: DB-01>>` | Database | `<<FILL: engine version>>` | `<<FILL>>` |
| `<<FILL: storage array>>` | `<<FILL: SAN-01>>` | Storage | `<<FILL: firmware, LUN config>>` | `<<FILL>>` |
| `<<FILL: network/firewall>>` | `<<FILL: FW-01>>` | Network | `<<FILL: OS version, ruleset ID>>` | `<<FILL>>` |
| `<<FILL: time source>>` | `<<FILL: NTP-01>>` | Time service | `<<FILL: source, stratum>>` | `<<FILL>>` |

| Item | Entry |
|---|---|
| Infrastructure specification reference | `<<FILL: spec/build standard number>>` |
| Standard build / hardening reference | `<<FILL: build standard, security baseline, e.g. CIS benchmark ID>>` |
| Risk basis for verification depth | `<<FILL: reference to risk assessment driving what was verified and how hard>>` |

## 6. Results against acceptance criteria

Summarize the outcome of each verification activity against the criteria defined in the plan or verification protocol. Do not restate every screenshot or query output; state whether all criteria were met and reference the executed record for the evidence.

### 6.1 Installation verification

| Acceptance area | Requirement | Result |
|---|---|---|
| Component inventory | Hosts, OS, DB, storage, network present and recorded against spec | `<<FILL>>` |
| Versions and patch level | OS, hypervisor, DB engine, firmware match the specified baseline | `<<FILL>>` |
| Configuration values | Build settings, resource allocation, and parameters match the specification | `<<FILL>>` |
| Hardening / security baseline | Host and OS hardened to the security baseline; unused services disabled | `<<FILL>>` |
| Network and firewall | Segmentation, IP plan, and firewall ruleset match the approved design | `<<FILL>>` |
| Documentation | Build records, architecture diagram, and CMDB entries in place | `<<FILL>>` |

### 6.2 Operational verification

| Acceptance area | Requirement | Result |
|---|---|---|
| Time synchronization | All in-scope hosts sync to the authoritative source within the defined tolerance | `<<FILL: e.g. drift within 1 second, traceable to a trusted time source>>` |
| Access control | Authentication, role-based access, and privileged-access controls work as specified | `<<FILL>>` |
| Backup | Scheduled backups complete and are logged for the in-scope systems | `<<FILL>>` |
| Restore | A test restore returns data correctly and within the recovery objective | `<<FILL: confirm restore actually verified, not just backup>>` |
| Resilience / failover | Cluster failover, redundancy, or HA behaves as designed | `<<FILL>>` |
| Monitoring and alerting | Capacity, availability, and security events are monitored and alert as specified | `<<FILL>>` |
| Capacity | Compute, memory, and storage headroom meet the documented sizing | `<<FILL>>` |

The two operational checks inspectors challenge most are time synchronization and restore. Confirm both directly. A backup that has never been restored is not a verified backup, and an audit trail timestamp is only as trustworthy as the clock behind it.

## 7. Deviations and their resolution

List every deviation raised during qualification, the activity it occurred in, the impact assessment, and how it was resolved. An open or unjustified deviation blocks release.

| Deviation ref | Activity | Description | Impact assessment | Resolution / corrective action | Status |
|---|---|---|---|---|---|
| `<<FILL: DEV-ID>>` | `<<FILL: install / operational>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: Closed>>` |
| `<<FILL: DEV-ID>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

| Item | Entry |
|---|---|
| Total deviations | `<<FILL: count>>` |
| All deviations closed before release | Yes / No (if No, release is blocked) |
| Any deviation affecting the qualified state | `<<FILL: none, or describe residual impact and acceptance>>` |

## 8. Traceability confirmation

Confirm that every infrastructure requirement was carried through to a verification and a result, with no orphan requirements and no untraced checks. Reference the traceability matrix; do not reproduce it.

| Item | Entry |
|---|---|
| Traceability matrix reference | `<<FILL: matrix number>>` |
| Requirements traced to a verification | `<<FILL: e.g. 28 of 28>>` |
| Requirements not met / waived | `<<FILL: none, or list with justification>>` |
| Verifications with no parent requirement | `<<FILL: none, or explain>>` |

## 9. Qualified baseline established

This is the part of the report that infrastructure qualification exists to produce. Record the as-built state precisely enough that any later drift is detectable, and state where that baseline is held and how it is protected.

| Item | Entry |
|---|---|
| Baseline captured | `<<FILL: component list with versions, firmware, OS/DB versions, patch level as of release>>` |
| Configuration baseline | `<<FILL: key configuration values, hardening state, firewall ruleset ID, build standard version>>` |
| Baseline stored in | `<<FILL: CMDB / configuration management tool / signed build record reference>>` |
| Baseline date | `<<FILL: as-built date the baseline reflects>>` |
| Change control governing the baseline | `<<FILL: change control SOP-ID; any change to the baseline runs through it>>` |
| Patch / lifecycle approach | `<<FILL: how OS/DB/firmware patching is assessed and applied under change control>>` |

The baseline is what change control protects. After release, no version, configuration value, firewall rule, or patch on the in-scope infrastructure changes without an assessed and approved change. State that link explicitly so the qualified state has an owner and a control, not just a snapshot.

## 10. Operational readiness

Infrastructure is not released for GxP use until the controls that keep it qualified are in place. Confirm them here.

| Item | Entry |
|---|---|
| Backup and restore in routine operation | `<<FILL: schedule live, restore test passed, ref>>` |
| Monitoring and alerting live | `<<FILL: capacity, availability, security alerts active, ref>>` |
| Time synchronization in routine operation | `<<FILL: authoritative source, monitored for drift>>` |
| Access management process | `<<FILL: provisioning, review, and deprovisioning process active, ref SOP-ID>>` |
| Incident and problem management | `<<FILL: process in place to handle infrastructure incidents, ref SOP-ID>>` |
| Supporting SOPs | `<<FILL: build, patching, backup, access, change SOP-IDs approved>>` |
| CMDB / asset register updated | `<<FILL: all in-scope items recorded with baseline attributes>>` |
| Disaster recovery readiness | `<<FILL: DR plan exists, last test reference, recovery objectives defined>>` |

## 11. Periodic review and requalification basis

State the time-based and trigger-based basis for keeping the infrastructure qualified. This is the part inspectors check years later, so it must be specific, not "as needed."

| Item | Entry |
|---|---|
| Periodic review interval | `<<FILL: e.g. annually for GxP infrastructure, set by risk>>` |
| Periodic review owner | `<<FILL: role>>` |
| Periodic review scope | `<<FILL: change history vs baseline, patch level, deviations, CAPAs, backup/restore record, access reviews, capacity trend, decision to requalify or not>>` |
| Requalification triggers | Significant architecture change, OS or database major version upgrade, host or data center relocation or migration, change of hosting model or provider, repeated infrastructure failures, or a security event affecting the qualified state |
| Requalification depth on trigger | `<<FILL: risk-based, e.g. re-verify the affected components and services only, ref change control>>` |
| Governing change control SOP | `<<FILL: change control SOP-ID>>` |

## 12. Residual risk

State any risk that remains after qualification and why it is acceptable, or state that none remains. Reference the risk assessment.

| Item | Entry |
|---|---|
| Residual risk | `<<FILL: none, or describe, e.g. single-site DR pending, reliance on provider control X>>` |
| Mitigation / control | `<<FILL: how the residual risk is controlled in routine use>>` |
| Risk acceptance | `<<FILL: accepted by role, date, ref risk assessment>>` |

## 13. Conclusion and release statement

State the conclusion plainly and authorize use, or state the conditions that must be met first.

> Based on the installation and operational verification summarized in this report, with all deviations closed and traceability confirmed, the infrastructure `<<FILL: scope and IDs>>` is qualified to host GxP applications and data within the scope stated in section 2. The qualified baseline recorded in section 9 is established and placed under change control, and the infrastructure is released for GxP use as of `<<FILL: release date>>`. It is subject to the requalification triggers and periodic review interval in section 11.

If any condition remains, state it here as a conditional release with the specific items and owners, and do not declare the infrastructure released for production GxP use until each is closed.

## 14. References

> EU GMP Annex 11 (Computerised Systems), sections 3 (suppliers and service providers), 4 (validation), 7 (data storage and backup), and 12 (security).
> 21 CFR Part 11 (electronic records and signatures) and the predicate-rule data controls it supports.
> 21 CFR 211.68 (automatic, mechanical, electronic equipment), where infrastructure runs GMP records.
> ISPE GAMP 5 (a Risk-Based Approach to Compliant GxP Computerized Systems), including the IT Infrastructure Control and Compliance appendix; infrastructure is Category 1.
> ICH Q9, Quality Risk Management (for the risk-based verification depth and review basis).
> ICH Q10, Pharmaceutical Quality System.
> PIC/S PI 011, Good Practices for Computerised Systems in Regulated GxP Environments.

Confirm the current version and clause numbers of each reference before issue.

## 15. Attachments

| No. | Attachment |
|---|---|
| 1 | Approved infrastructure specification and build standard |
| 2 | Executed installation verification records with evidence |
| 3 | Executed operational verification records (time sync, backup, restore, failover, access) |
| 4 | Deviation records and their closure |
| 5 | Requirements-to-verification traceability matrix |
| 6 | Qualified baseline export / signed build record (CMDB snapshot) |
| 7 | Risk assessment driving the verification strategy |

## 16. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 17. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Infrastructure) | `<<FILL>>` | | |
| Reviewer (Architecture) | `<<FILL>>` | | |
| Reviewer (Information Security) | `<<FILL>>` | | |
| Approver (QA / IT Quality) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the summary completed for an example virtualized host cluster supporting a laboratory data system, so you can see the level of detail an inspector expects. The company, hosts, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Infrastructure scope | Two-host virtualization cluster ESXHOST-01/02, shared storage SAN-01, hosting the GxP guest OS gold image GOLD-W2022-03 and database engine DB-LIMS-01 |
| Plan closed | IQP-IT-009, GxP infrastructure, GAMP 5 Category 1 |
| Intended use | Host the validated laboratory data system and store its GxP records; provide backup, restore, time sync, and HA failover |
| Environments | Production cluster plus a separate DR site SAN-02 |

Components and baseline:

| Component | Identifier | Version at release |
|---|---|---|
| Hypervisor hosts | ESXHOST-01, ESXHOST-02 | Hypervisor 8.0 U2, BIOS firmware 2.14 |
| Guest OS gold image | GOLD-W2022-03 | Windows Server 2022, patch level rollup Mar 2026, CIS Level 1 hardened |
| Database engine | DB-LIMS-01 | RDBMS 19c, CU 22 |
| Storage | SAN-01 (prod), SAN-02 (DR) | Array firmware 9.2.1, RAID 6, LUN map per spec |
| Firewall | FW-01 | OS 7.4, ruleset RS-IT-2026-04 |
| Time source | NTP-01 | Two upstream stratum-1 sources, all hosts within 1 second |

Verification results:

| Activity | Date | Result |
|---|---|---|
| Installation verification | 18 Mar 2026 | Pass; all versions, configuration, and hardening match spec; 1 deviation (firewall rule) |
| Operational verification | 25 Mar 2026 | Pass; time sync within 1 second, scheduled backup logged, full test restore returned the database within the 4-hour RTO, host failover automatic, monitoring and alerts confirmed |

Deviations:

| Ref | Activity | Description | Resolution | Status |
|---|---|---|---|---|
| DEV-2026-0090 | Installation | One firewall rule allowed an unneeded outbound port not in the approved ruleset | Rule removed, ruleset re-verified, change recorded under CC-IT-040, no data exposure | Closed |

Traceability: 28 of 28 infrastructure requirements traced to a verification and a result; none waived; no untraced checks (matrix TM-IT-009).

Qualified baseline: the component versions, patch level, hardening state, and firewall ruleset RS-IT-2026-04 above were captured in the CMDB as the as-built baseline dated 25 Mar 2026, and placed under change control CC SOP IT-CC-002. No version, configuration value, or rule changes without an assessed change.

Readiness: nightly backup live with a passed test restore, monitoring and alerting active, time sync monitored for drift, access provisioning and quarterly review process running, build/patch/backup/access/change SOPs approved, all items in the CMDB, DR plan tested 27 Mar 2026.

Periodic review basis: annual review of change history against baseline, patch level, deviations, restore evidence, access reviews, and capacity; requalify on a major OS or database upgrade, cluster relocation or migration, hosting-model change, or a security event affecting the qualified state; trigger depth is risk-based re-verification of the affected components under change control.

Conclusion: Installation and operational verification passed, the single deviation closed with no data impact, traceability confirmed, and the baseline established under change control. The cluster is qualified to host the laboratory data system and released for GxP use as of 27 March 2026.

In this example the team verified the build against a specification rather than running application-style tests, proved a real restore rather than only a backup, captured a precise as-built baseline into the CMDB and tied it to change control, confirmed time synchronization to a trusted source, and set a specific annual review with named requalification triggers. That sequence, verification to baseline to a controlled, reviewed state, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this report prevents

- A summary that concludes "qualified" while a deviation, such as an out-of-spec firewall rule or a missing patch, is still open or was never impact-assessed.
- No qualified baseline recorded, so there is nothing for change control to protect and no way to detect later configuration drift.
- The infrastructure baseline is not under change control, so versions, settings, or firewall rules changed after release with no assessment.
- Backups scheduled but a restore never tested, so recovery of GxP records is unproven.
- Time synchronization not verified, leaving audit trail timestamps untrustworthy across systems.
- Infrastructure tested with application-style functional scripts instead of verification against a specification, inflating effort while still missing the baseline that matters.
- IaaS or cloud infrastructure treated as automatically qualified by the provider, with no assessment of which layers the provider covers and which the company must verify.
- "Requalify as needed" with no defined periodic review interval and no named triggers, so the qualified state has no maintenance basis.

## How to adapt this report

1. Set your document number, owner, infrastructure scope, and the plan number this report closes in the header.
2. In section 2, state the components and environments you actually qualified, and for any cloud or IaaS hosting, split clearly what the provider qualifies from what you do.
3. Fill the component table in section 5 with your real hosts, versions, and the specification each was verified against.
4. Populate the verification tables in section 6 from your executed records; point to the evidence rather than restating it, and confirm time sync and a real restore directly.
5. Record a precise qualified baseline in section 9 and tie it to your change control SOP so the state is protected after release.
6. List every deviation in section 7 and confirm each is closed before you write the conclusion.
7. Set a specific periodic review interval and named requalification triggers in section 11; do not leave it open-ended.
8. Confirm every regulation in section 14 against the current published version before issue.
