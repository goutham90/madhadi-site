---
title: "Validating Cloud and SaaS Systems in GxP: The Shared Responsibility Model"
description: "How to approach validation for cloud-hosted and SaaS GxP systems — what IaaS, PaaS, and SaaS mean for validation scope, the shared responsibility model, and what your quality agreement must cover."
pubDate: 2026-05-08
tags: ["CSV", "validation", "cloud", "SaaS", "GxP", "21-CFR-Part-11"]
pillar: "csv-csa"
tier: "Advanced"
---

Cloud and SaaS systems are now the dominant model for new GxP system deployments. The major LIMS, ELN, QMS, and MES vendors have largely shifted to cloud-hosted or SaaS offerings. For pharmaceutical quality teams, this creates a validation challenge that doesn't fit neatly into the traditional on-premises CSV playbook.

The core problem: in a cloud environment, the responsibilities for system operation, maintenance, and control are split between the cloud service provider (CSP), the software vendor, and the customer. Validation must account for all three layers — which means understanding what each party controls, what evidence exists for their controls, and what responsibilities fall to your site regardless of the cloud model.

This article is aimed at practitioners who need to validate a cloud or SaaS system or assess an existing one. Foundational CSV concepts are covered in the [GAMP 5 article](/articles/gamp5-csv-framework) and [CSA guidance article](/articles/computer-software-assurance-fda).

---

## The Three Cloud Models and What They Mean for Validation

**Infrastructure as a Service (IaaS):** The CSP provides compute, storage, and networking. The customer manages everything above the infrastructure: OS, middleware, application, data, and configuration. Example: hosting your own LIMS on AWS EC2 instances.

For validation: IaaS is essentially an on-premises deployment on managed hardware. The customer is responsible for all the same validation activities as an on-premises system. The CSP's responsibility is limited to the infrastructure uptime and physical security, which you assess via their ISO 27001, SOC 2, or FedRAMP compliance documentation.

**Platform as a Service (PaaS):** The CSP provides infrastructure plus OS, middleware, and runtime. The customer manages the application and data. Example: deploying a custom application on Azure App Service.

For validation: PaaS reduces the customer's infrastructure qualification scope — you don't need to validate the OS or database platform, because the CSP manages those. But the customer is still responsible for application validation. The PaaS layer is addressed through CSP compliance documentation.

**Software as a Service (SaaS):** The vendor provides the complete application, running on infrastructure the vendor controls. The customer manages data and configuration within the application. Example: a cloud-native QMS or LIMS where the vendor hosts, maintains, and updates the software.

For validation: SaaS has the most complex responsibility model. The vendor controls almost everything — infrastructure, platform, application, and software version. The customer controls only configuration and data. This is where the shared responsibility model matters most.

---

## The Shared Responsibility Model

In a SaaS model, the validation responsibilities are distributed:

| Responsibility Area | SaaS Vendor | Customer Site |
|---|---|---|
| Infrastructure security and availability | Owns | Reviews evidence |
| Platform (OS, database) management | Owns | Reviews evidence |
| Application code and software testing | Owns | Reviews evidence via audit |
| Application configuration | Shared | Customer validates their configuration |
| Access control and user management | Shared | Customer manages users and roles |
| Data integrity controls (audit trail) | Vendor provides capability | Customer verifies configuration and use |
| Data backup and recovery | Vendor provides capability | Customer verifies and tests |
| Change management (software updates) | Vendor initiates | Customer assesses impact and tests if needed |
| Incident response | Vendor manages | Customer monitors and escalates |
| Compliance documentation | Vendor provides | Customer incorporates into validation |

The practical implication: for a SaaS GxP system, a significant portion of your validation scope shifts from testing to evidence review. You can't test the underlying database platform — you review the vendor's documentation. You can't control the OS patch schedule — you review the vendor's change management process. What you validate directly is: the configuration of the application, the controls you implement within the system, and your procedures for using it.

---

## What the Quality Agreement Must Cover

The quality agreement between the pharmaceutical company and the SaaS vendor is the document that allocates responsibility and establishes the vendor's commitments. For a GxP SaaS system, the quality agreement (or service level agreement with GxP provisions) must address:

**Data integrity commitments:**
- Audit trail retention period and scope
- Confirmation that the vendor will not modify or delete customer data without authorization
- Notification requirements for any data loss, corruption, or access breach

**Change management:**
- Advance notification period for planned software updates (typically 30–90 days for major changes)
- Customer's right to test-cycle access before production deployment of major updates
- Maintenance of a validated state through updates (or notification when a major release requires customer revalidation)

**Access controls:**
- Vendor employee access to customer data — conditions under which vendor staff can access your data, logging of such access, and customer notification requirements
- Segregation of customer data from other customers' data

**Availability and business continuity:**
- Uptime commitments
- Backup frequency and recovery time objectives (RTO / RPO)
- Disaster recovery plan and evidence of periodic testing

**Audit rights:**
- Customer's right to audit the vendor's GxP-relevant facilities, systems, and processes
- Vendor's provision of audit documentation in lieu of physical audits (common for large cloud vendors who can't accommodate individual customer audits)
- ISO 27001, SOC 2 Type II, or equivalent third-party audit reports made available to the customer

**Data portability and exit:**
- Ability to export all customer data in a usable format
- Process and timeline for data return upon contract termination
- Data destruction confirmation after exit

---

## Validation Scope for a SaaS GxP System

The validation approach for a SaaS system follows the same GAMP 5 / V-model structure as any other system, but the scope of testing differs:

**URS and FRS:** Same as any system — document what you need the system to do in GxP use, and what functional requirements it must meet.

**Supplier assessment:** More extensive than for on-premises systems, because the vendor controls more. The supplier assessment should cover:
- Quality management system documentation
- Software development lifecycle practices
- Security controls and certifications (ISO 27001, SOC 2 Type II)
- Regulatory compliance documentation (Part 11 assessment, Annex 11 considerations)
- Data center certifications
- Audit rights exercise (either physical audit or documentation review)

**IQ scope:** For SaaS, IQ is primarily a configuration verification — confirming that the production environment has been set up with the approved configuration (user roles, workflow settings, audit trail configuration, integration settings). The infrastructure and platform IQ is addressed by vendor documentation.

**OQ scope:** Tests the configured application against functional requirements. Leverages vendor test documentation for core application functionality; customer OQ focuses on the configuration and any custom workflows.

**PQ/UAT scope:** End-to-end process testing, same as on-premises.

**Impact of vendor updates:** SaaS vendors typically update their software on their own schedule. Your validation plan must define how you handle vendor updates: what triggers an impact assessment, what types of changes require customer testing, and when revalidation is required. For most minor updates, vendor release notes and regression testing documentation may be sufficient. For major releases, targeted customer OQ testing of affected functionality is typically required.

---

## Annex 11 and Third-Party Systems

[EMA EudraLex Volume 4, Annex 11, Clause 3](https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf) explicitly addresses third-party systems:

> "When a third party is used to provide, install, configure, integrate, validate, maintain or modify computerised systems, or to process data, formal agreements must exist between the manufacturer and any third parties that define the responsibilities of each party."

This clause is the EU basis for the quality agreement requirements described above. The agreement must clearly define who is responsible for validation, who is responsible for data security, and who is responsible for ensuring regulatory compliance.

For EU-marketed products, the fact that a vendor hosts your system in a data center doesn't transfer your compliance responsibility. The manufacturer (you) remains responsible for ensuring the system is validated, controlled, and operating compliantly.

---

## Data Residency and Regulatory Jurisdiction

For international operations, the location where data is stored matters. Different regulatory jurisdictions have different data residency requirements, and in some cases, specific frameworks (GDPR in EU, PDPA in various Asian markets) impose constraints on where personal data associated with clinical subjects can be processed.

For GxP data, the practical concern is slightly different: if your data is stored in a jurisdiction with different legal frameworks around government access, law enforcement discovery, or business continuity protections, those frameworks could affect the availability and integrity of your data under circumstances outside your control.

Address this in the quality agreement: define where data is stored, require notification of any jurisdictional changes, and confirm your rights to access and export data regardless of the storage location.

---

## Decommissioning and Data Migration

Cloud and SaaS systems add a specific challenge to decommissioning: when you leave a vendor, your data is on their systems and you need to get it back in a usable, validated form.

Before deploying any SaaS GxP system, define the exit plan:
- What data formats can the vendor export?
- Are those formats sufficient for long-term retention (not proprietary, remains readable)?
- What metadata is included in the export?
- Is audit trail data included, and in what format?
- What is the vendor's data retention period after contract termination?

The decommissioning of a cloud or SaaS system — including data migration validation — should follow the same requirements as any other system decommissioning: all GxP records verified as migrated, audit trails preserved, data readable in the destination system, and the decommissioned environment confirmed as no longer holding active GxP records.

---

## The Bottom Line

Cloud and SaaS deployment doesn't reduce your compliance obligations. It redistributes them: some responsibilities shift to the vendor, but your accountability for the data and the system's fitness for GxP use remains yours. A robust supplier assessment, a detailed quality agreement, and a validation approach that explicitly accounts for the shared responsibility model will keep you defensible at inspection. A validation that treats a SaaS system as equivalent to on-premises and doesn't address vendor controls will have gaps that an experienced inspector will find.
