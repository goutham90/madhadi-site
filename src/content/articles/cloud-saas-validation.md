---
title: "Validating Cloud and SaaS Systems in GxP: The Shared Responsibility Model"
description: "How to approach validation for cloud-hosted and SaaS GxP systems, what IaaS, PaaS, and SaaS mean for validation scope, the shared responsibility model, and what your quality agreement must cover."
pubDate: 2026-01-12
tags: ["CSV", "validation", "cloud", "SaaS", "GxP", "21-CFR-Part-11"]
pillar: "csv-csa"
tier: "Advanced"
---

Cloud and SaaS systems are now the dominant model for new GxP system deployments. The major LIMS, ELN, QMS, and MES vendors have largely shifted to cloud-hosted or SaaS offerings, and for many categories an on-premises option no longer exists. For pharmaceutical quality teams, this creates a validation problem that does not fit neatly into the traditional on-premises CSV playbook.

The core difficulty: in a cloud environment, the responsibilities for system operation, maintenance, and control are split across three parties. There is the cloud service provider (CSP) who owns the physical infrastructure, the software vendor who builds and operates the application, and the customer (you) who configures and uses it. Often the CSP and the software vendor are different companies, so a single SaaS QMS may sit on a hyperscale platform run by a third firm. Validation has to account for all of these layers, which means understanding what each party controls, what objective evidence exists for those controls, and what responsibilities stay with your site no matter which cloud model you buy.

This article is written for practitioners who need to validate a cloud or SaaS system, assess one already in production, or defend one at inspection. Foundational concepts are covered in the [GAMP 5 article](/articles/gamp5-csv-framework) and the [computer software assurance article](/articles/computer-software-assurance-fda). If you are new to the underlying vocabulary, read [what CSV deliverables look like](/articles/validation-deliverables-guide) first.

---

## Why Cloud Changes the Validation Question

Traditional CSV was built on an assumption that no longer holds: that the regulated company controls the environment. When you owned the server, you controlled the operating system patch schedule, the database version, the backup job, and the moment any change happened. Validation worked because you could freeze the system, test it, and keep it frozen until you chose to change it.

In a SaaS model you control almost none of that. The vendor patches the platform on its own cadence, upgrades the application on its own release schedule, and may move your data between data centers without telling you unless the contract says otherwise. The validated state is therefore not something you alone can hold still. This is the single most important mental shift: cloud validation is less about a one-time qualification event and more about an ongoing relationship that has to be governed, monitored, and re-evidenced over the system's life.

That shift does not lower your accountability. Regulators have been consistent on this point. A vendor hosting your data does not make the vendor responsible for your compliance. The marketing authorization holder or the regulated establishment remains answerable for the integrity and availability of the records. The cloud just changes how you generate the evidence, not who owns the outcome.

---

## The Three Cloud Models and What They Mean for Validation

The cloud service models come from the same NIST definitions everyone uses (NIST Special Publication 800-145, "The NIST Definition of Cloud Computing," 2011). They matter for validation because each model draws the line between vendor and customer in a different place.

**Infrastructure as a Service (IaaS):** The CSP provides compute, storage, and networking. The customer manages everything above the bare infrastructure: operating system, middleware, application, data, and configuration. An example is hosting your own LIMS on rented virtual machines.

For validation, IaaS behaves almost exactly like an on-premises deployment on someone else's hardware. The customer is responsible for the same activities as an on-premises system, including infrastructure qualification of the operating system and database, because you installed and control them. The CSP's responsibility is limited to physical security, power, cooling, and the availability of the virtual hardware, which you assess through their certifications rather than by inspecting their data center.

**Platform as a Service (PaaS):** The CSP provides infrastructure plus operating system, middleware, and runtime. The customer manages the application and its data. An example is deploying a custom-built application onto a managed application platform.

For validation, PaaS reduces your infrastructure qualification scope. You do not qualify the operating system or the database engine because the CSP manages those, but you remain responsible for validating the application and its configuration. The platform layer is addressed through CSP compliance documentation rather than direct testing.

**Software as a Service (SaaS):** The vendor provides the complete application, running on infrastructure the vendor controls, delivered to many customers from a shared code base. The customer manages data and configuration within the application. An example is a cloud-native QMS or LIMS where the vendor hosts, maintains, and continuously updates the software.

For validation, SaaS has the most complex responsibility model and the smallest customer-controlled surface. The vendor controls infrastructure, platform, application code, and the software version itself. You control configuration, the data you enter, your user access model, and your standard operating procedures for using the system. This is where the shared responsibility model does its real work.

A useful way to hold these in your head: as you move from IaaS to PaaS to SaaS, your direct testing burden shrinks and your evidence-review and contractual-control burden grows. The total work does not disappear; it changes shape.

| Layer | IaaS | PaaS | SaaS |
|---|---|---|---|
| Physical data center | Vendor | Vendor | Vendor |
| Network and storage | Vendor | Vendor | Vendor |
| Operating system | Customer | Vendor | Vendor |
| Database / runtime | Customer | Vendor | Vendor |
| Application code | Customer | Customer | Vendor |
| Application configuration | Customer | Customer | Customer |
| Data and user access | Customer | Customer | Customer |

---

## The Shared Responsibility Model

In a SaaS deployment, validation responsibilities are distributed rather than owned end to end by one party. The table below shows the common split. The exact allocation belongs in your quality agreement, because a vague split is the gap inspectors find.

| Responsibility Area | SaaS Vendor | Customer Site |
|---|---|---|
| Infrastructure security and availability | Owns | Reviews evidence |
| Platform (OS, database) management | Owns | Reviews evidence |
| Application code and software testing | Owns | Reviews evidence via audit |
| Application configuration | Shared | Customer validates its configuration |
| Access control and user management | Shared | Customer manages users and roles |
| Data integrity controls (audit trail) | Vendor provides capability | Customer verifies configuration and use |
| Data backup and recovery | Vendor provides capability | Customer verifies and tests restore |
| Change management (software updates) | Vendor initiates | Customer assesses impact, tests if needed |
| Incident response | Vendor manages | Customer monitors and escalates |
| Compliance documentation | Vendor provides | Customer incorporates into validation |

The practical implication is that, for a SaaS GxP system, a meaningful portion of your validation scope shifts from testing to evidence review. You cannot test the underlying database engine, so you review the vendor's documentation that it is qualified. You cannot control the operating system patch schedule, so you review the vendor's change management process and its outputs. What you validate directly is the configuration of the application, the controls you implement inside it, and your procedures for using it.

"Shared" is the word that causes trouble. A shared control with no named owner is an unowned control. For audit trail, for example, the vendor provides the capability, but if no one at your site confirms it was switched on, scoped to the right events, and protected from disablement, the capability is worthless. Treat every "shared" row as two responsibilities with two owners, not one fuzzy one.

---

## Worked Example: Validating a Cloud QMS

A concrete sequence helps. Suppose your site is bringing in a cloud-native QMS that runs deviations, CAPAs, and change control, hosted and operated entirely by the vendor.

1. **Define use and risk.** Write the user requirements specification describing the GxP processes the system supports, then run a risk assessment to set the depth of testing. A QMS that holds your [CAPA records](/articles/what-is-a-capa) and [deviation workflow](/articles/deviation-management) is high impact, so e-signatures, audit trail, and record retention get the most rigor. The method is covered in [CSV risk assessment](/articles/csv-risk-assessment-methodology).

2. **Assess the supplier.** Review the vendor's quality system, development practices, security certifications, and Part 11 / Annex 11 self-assessment. Decide whether a documentation review is enough or a remote audit is warranted. See [supplier and vendor qualification](/articles/supplier-vendor-qualification).

3. **Verify configuration as your IQ.** Confirm the production tenant is set up with the approved configuration: workflow states, role definitions, audit trail enabled and scoped, e-signature manifestations, retention rules, and any integrations. You are not installing software, so IQ is configuration verification, not infrastructure installation.

4. **Test the configured behavior as your OQ.** Challenge the configured workflows and the controls that matter for compliance. Confirm an unauthorized user cannot approve a CAPA, that the audit trail captures the who/what/when/why for record changes, and that an electronic signature is bound to the record. Lean on vendor test evidence for generic platform functions; spend your own testing on your configuration and the [audit trail behavior](/articles/audit-trail-design-and-review).

5. **Run end-to-end UAT/PQ.** Walk a real deviation from open to closure with the people who will actually use it, in the production-equivalent environment.

6. **Wire up ongoing governance.** Define how vendor updates are handled, who reviews release notes, and what triggers re-testing. This is the part on-premises habits tend to skip.

The point of the example is the proportion. Roughly speaking, far more of your effort goes into supplier assessment, configuration verification, and update governance than into the kind of full-stack installation testing an on-premises deployment demands.

---

## What the Quality Agreement Must Cover

The quality agreement between the regulated company and the SaaS vendor is the document that allocates responsibility and records the vendor's commitments. For a GxP SaaS system, the quality agreement, or a service level agreement carrying explicit GxP provisions, should address the following.

**Data integrity commitments:**
- Audit trail retention period and scope, aligned to your record retention obligations
- Confirmation that the vendor will not modify or delete customer data without authorization
- Notification requirements for any data loss, corruption, or access breach, with a defined timeframe

**Change management:**
- Advance notification period for planned software updates, often in the range of 30-90 days for major changes
- The customer's right to access a test or sandbox environment before production deployment of major updates
- A commitment to maintain a validated state through updates, or to flag when a major release requires customer revalidation

**Access controls:**
- The conditions under which vendor staff can access customer data, logging of that access, and customer notification requirements
- Logical segregation of your data from other tenants' data in a multi-tenant environment

**Availability and business continuity:**
- Uptime commitments and how downtime is measured and credited
- Backup frequency and the recovery point and recovery time objectives (RPO and RTO)
- A disaster recovery plan with evidence of periodic testing, not just a written plan

**Audit rights:**
- The customer's right to audit the vendor's GxP-relevant facilities, systems, and processes
- The vendor's provision of audit reports in lieu of physical audits, which is common for large platform providers who cannot host individual customer visits
- Independent third-party reports such as ISO/IEC 27001 certification or SOC 2 Type II reports made available under appropriate confidentiality terms

**Data portability and exit:**
- The ability to export all customer data, including metadata and audit trails, in a usable and ideally non-proprietary format
- The process and timeline for data return on contract termination
- Confirmation of data destruction after exit

A practical tip: do not let procurement sign the master service agreement before quality has reviewed the GxP terms. Once the contract is signed, your bargaining position to add data-return clauses or audit rights is gone, and you will spend the system's life working around the gap.

---

## Validation Scope for a SaaS GxP System

The validation approach follows the same GAMP 5 lifecycle and V-model structure as any other system. What changes is the scope of each deliverable.

**URS and functional specifications.** The same as any system. Document what the system must do in GxP use and the functional requirements it must meet. Requirements remain the backbone of traceability.

**Supplier assessment.** More extensive than for on-premises systems, because the vendor controls more of the stack. A sound assessment covers the vendor's quality management system, its software development lifecycle, security controls and certifications, regulatory compliance documentation including a Part 11 assessment and Annex 11 considerations, data center certifications, and the exercise of audit rights through either a physical audit or a documentation review.

**IQ scope.** For SaaS, installation qualification is primarily configuration verification: confirming the production environment was set up with the approved configuration, including user roles, workflow settings, audit trail configuration, e-signature setup, and integration settings. Infrastructure and platform installation is addressed through vendor documentation rather than your own testing.

**OQ scope.** Tests the configured application against functional requirements. You may reference vendor test documentation for core, unconfigured application functions and concentrate your own OQ on your configuration, custom workflows, and the controls that protect data integrity.

**PQ / UAT scope.** End-to-end process testing in a production-equivalent setting, with real users and realistic data. This is essentially unchanged from on-premises.

**Impact of vendor updates.** SaaS vendors update on their own schedule, sometimes monthly or even continuously. Your validation plan must define how you handle updates: what triggers an impact assessment, which change types require customer testing, and when revalidation is needed. For most minor updates, vendor release notes plus their regression evidence may be enough. For major releases, targeted OQ of the affected functionality is usually required. Build this into [change control for validated systems](/articles/change-control-validated-systems) rather than treating each release as a surprise.

A common failure is the "validate once and forget" pattern carried over from on-premises practice. With a continuously updated SaaS system, a validation report dated two years ago, covering a version that no longer exists, is a finding waiting to happen. Periodic review, covered in [the validation master plan and periodic review article](/articles/validation-master-plan-and-periodic-review), is how you keep the validated state credible over time.

---

## Annex 11 and Third-Party Systems

EU GMP Annex 11, "Computerised Systems" (EudraLex Volume 4, in force since 2011), addresses third-party arrangements directly. Clause 3.1 states:

> "When third parties (e.g. suppliers, service providers) are used e.g. to provide, install, configure, integrate, validate, maintain (e.g. via remote access), modify or retain a computerised system or related service or for data processing, formal agreements must exist between the manufacturer and any third parties, and these agreements should include clear statements of the responsibilities of the third party."

This clause is the EU basis for the quality agreement requirements described above. The agreement must define who is responsible for validation, who is responsible for data security, and who is responsible for ensuring ongoing compliance. Annex 11 also expects supplier competence to be assessed (clause 3.2) and audit information to be available on request, which is exactly the audit-rights provision your contract should carry.

In the United States, the same obligations flow from the predicate rules and from 21 CFR Part 11, "Electronic Records; Electronic Signatures" (effective 1997). Part 11 does not mention the cloud, but its controls for electronic records and signatures apply regardless of where the records sit. The mapping between the two frameworks is laid out in [the Part 11 and Annex 11 practical guide](/articles/part-11-annex-11-practical-guide).

The principle is the same on both sides of the Atlantic: the fact that a vendor hosts your system in its data center does not transfer your compliance responsibility. The manufacturer remains responsible for ensuring the system is validated, controlled, and operated compliantly.

---

## Data Residency and Regulatory Jurisdiction

For international operations, where data is physically stored matters. Different jurisdictions impose different data residency rules, and frameworks such as the EU General Data Protection Regulation (Regulation (EU) 2016/679, applicable since 2018) constrain where personal data tied to clinical subjects may be processed and transferred. Several markets in Asia and elsewhere carry their own data protection regimes with similar effects.

For GxP records, the concern is slightly different from privacy. If your data is stored in a jurisdiction with different legal frameworks around government access, law-enforcement discovery, or business-continuity protection, those frameworks could affect the availability and integrity of your data under conditions outside your control. A subpoena, a sanctions regime, or a local data-localization mandate can all touch records you assumed were always yours to reach.

Address this in the quality agreement: define where data is stored and processed, require notification before any change of jurisdiction, and confirm your rights to access and export the data regardless of storage location. For multi-region SaaS, ask specifically whether backups and disaster-recovery copies stay within the same jurisdiction as the primary, because a compliant primary with an out-of-scope backup region is a quiet gap.

---

## Cybersecurity and Access Control in a Shared Model

Moving to the cloud does not move the access-control problem to the vendor. The vendor secures the platform; you still own the application-level access model. Provisioning, periodic access reviews, segregation of duties, and timely deprovisioning of leavers remain your responsibilities, and they are favorite inspection topics. Single sign-on and identity federation can help, but they also create a dependency: if your identity provider is misconfigured, access to a GxP system can be granted or revoked incorrectly without anyone touching the application itself. Map that dependency and test it. The detail lives in [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control).

Backup and restore deserve a specific call-out. A vendor's statement that backups run nightly is a commitment, not evidence. At least once, verify a restore actually returns usable, intact GxP data, and confirm the audit trail survives the restore. The approach is the same as for any system, described in [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation).

---

## Decommissioning and Data Migration

Cloud and SaaS systems add a specific challenge at end of life: when you leave a vendor, your data lives on the vendor's systems, and you have to get it back in a usable, validated form. The time to solve this is before you sign, not when the relationship ends.

Before deploying any SaaS GxP system, define the exit plan and confirm it against real export tests, not contract language alone:

- What data formats can the vendor export, and are they non-proprietary and readable without the vendor's software?
- What metadata is included in the export?
- Is audit trail data included, and in what format that preserves its meaning?
- What is the vendor's data retention period after contract termination, and when is the data destroyed?

The decommissioning of a cloud or SaaS system, including migration of records to a successor, should follow the same expectations as any other system retirement: all GxP records verified as migrated, audit trails preserved and still legible, data readable and accurate in the destination system, and the old environment confirmed as no longer holding active GxP records. The mechanics are covered in [data migration validation](/articles/data-migration-validation) and the broader retirement step in [GxP computerized systems operations](/articles/gxp-computerized-systems-operations).

---

## The Bottom Line

Cloud and SaaS deployment does not reduce your compliance obligations. It redistributes them. Some responsibilities shift to the vendor, but your accountability for the data and for the system's fitness for GxP use stays with you. A thorough supplier assessment, a quality agreement that names an owner for every shared control, and a validation approach that explicitly accounts for the shared responsibility model and for ongoing vendor updates will keep you defensible at inspection. A validation that treats a SaaS system as if it were on-premises, that ignores vendor controls, and that freezes in time while the software keeps changing underneath it will have gaps an experienced inspector will find.
