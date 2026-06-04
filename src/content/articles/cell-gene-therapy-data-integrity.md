---
title: "Cell & Gene Therapy: Why Data Integrity Is Structurally Different"
description: "How the scientific and regulatory characteristics of CGT create data integrity challenges that don't exist in conventional drug manufacturing — and what to do about them."
pubDate: 2026-04-05
tags: ["Cell & Gene Therapy", "BLA", "GxP", "Potency"]
tier: "Intermediate"
pillar: "cell-gene-therapy"
---

Data integrity in conventional pharmaceutical manufacturing is well-understood territory. The failure modes are documented in decades of warning letters. The systems, LIMS, CDS, MES, have established validation playbooks. The regulatory expectations are mature.

Cell and gene therapy is different. Not because the principles change, ALCOA+ is ALCOA+ regardless of product type, but because the scientific and manufacturing characteristics of CGT create data integrity challenges that don't exist in small molecule or conventional biologics manufacturing.

This is what that looks like in practice.

---

## The Novel Assay Problem

The most fundamental data integrity challenge in CGT is potency. For most conventional drugs, potency is measured by a validated assay that has been run thousands of times across the industry. The method is well-characterized, the system suitability criteria are established, and the variability is understood.

For many cell and gene therapies, the potency assay is novel. It may be a cell-based assay measuring transduction efficiency, a flow cytometry panel characterizing a specific cell phenotype, a ddPCR method for vector genome copies, or a functional assay measuring cell-killing activity. These assays are often:

- **High variability**, biological systems have inherent run-to-run variability that analytical chemistry does not
- **Time-sensitive**, cell viability, for example, changes with every hour post-harvest
- **Operator-dependent**, cell counting, cell culture passage, and flow cytometry setup have significant analyst-to-analyst variability
- **Difficult to invalidate**, when a potency assay fails system suitability, the decision to invalidate requires scientific judgment that is hard to standardize

Every one of these characteristics creates data integrity risk. High variability means OOS results are common and the temptation to find scientific reasons to invalidate them is high. Time-sensitivity means contemporaneity requirements are more critical and harder to meet. Operator dependence means attributability matters more, the data is only meaningful if you know who ran it and under what conditions.

**The result:** CGT companies face more OOS results, more complex OOS investigations, and more frequent pressure to release product with incomplete or borderline analytical data than conventional pharma. Each of those is a data integrity risk point.

---

## The Electronic Data Landscape Is More Complex

A conventional drug product batch might involve data from:
- HPLC for assay and impurity testing
- UV/Vis for protein concentration
- Karl Fischer for water content
- A batch record in an ERP or paper system

A CGT batch might involve data from:
- Flow cytometry for cell phenotyping and viability
- ddPCR for vector genome copies and transduction efficiency
- ELISA or ECLIA for residual process impurities
- Sterility testing systems
- Environmental monitoring (real-time, multiple locations)
- RABS or isolator control systems
- Cell culture bioreactor control systems with continuous data streams
- Cryopreservation equipment monitoring
- Chain of custody systems for patient-derived material
- LIS systems for connected clinical operations

Each of these systems generates data with its own format, its own audit trail architecture, and its own retention requirements. The integration between them is often limited, data is transferred by manual export or CSV rather than by validated electronic interfaces.

The scope of data under integrity requirements in a CGT operation is an order of magnitude larger than conventional pharmaceutical manufacturing. The number of systems that need to be validated, the number of data types that need to be reviewed, and the number of potential failure points is correspondingly larger.

---

## Patient-Specific Manufacturing and Chain of Custody

For autologous cell therapies, products manufactured from a specific patient's cells, data integrity has a dimension that doesn't exist anywhere else in GxP manufacturing: the chain of custody of the patient material.

From the time a patient's cells are collected to the time the finished product is infused, every step must be documented with complete attributability and contemporaneity:

- Apheresis collection records at the clinical site
- Cryopreservation and transport records
- Receipt verification at the manufacturing facility
- In-process cell culture monitoring
- Release testing attribution to the correct patient lot
- Cryopreservation and shipment of finished product
- Delivery confirmation at the infusion site

A chain-of-custody error, wrong patient material used in manufacturing, incorrect labeling, incorrect attributing of release results to the wrong lot, is not just a data integrity finding. It's a patient safety event. The consequences of attributability failures in autologous CGT are uniquely severe.

**The system challenge:** Chain of custody in CGT involves multiple organizations (clinical site, manufacturing, logistics, infusion center), each with their own systems and their own data formats. Integrating this data into a coherent, auditable record that can be reviewed by FDA during a BLA inspection or a site audit is a significant data governance challenge.

---

## BLA Submissions and the Retrospective Data Integrity Audit

When a CGT company files a BLA, FDA receives not just the summary statistics but the underlying raw data, or at minimum, the ability to request and audit it. The data integrity of every analytical result included in the submission must be defensible.

For conventional drugs with established manufacturing processes, the analytical database behind a BLA may represent years of commercial manufacturing with well-understood variability. The data integrity program has been running through multiple inspections.

For CGT companies at first BLA filing:
- The product may have been manufactured under multiple protocol versions as the process was developed
- The analytical methods may have evolved over the development period, with different versions used for different development lots
- Some data may have been generated at clinical sites or CROs with varying levels of data integrity maturity
- The commercial process may be substantially different from the clinical process, with comparability data connecting them

The BLA filing creates a forcing function: all of the data generated across development must be reviewable, attributable, and consistent. Companies that have not built data integrity programs from the start of clinical manufacturing often discover during BLA preparation that they have data gaps, missing raw data, unretained audit trails, or systems that are no longer supported, that require either remediation or risk assessment.

**The retrospective audit:** Pre-BLA data integrity audits of development and clinical manufacturing data are increasingly common and increasingly recommended. The goal is to identify gaps before FDA does, assess the risk to each finding, and either remediate or document a reasoned assessment of why the data remains reliable despite the gap.

---

## Real-Time Release and In-Process Data

CGT products, particularly autologous products, often have very short shelf lives post-manufacturing, sometimes as little as 24-72 hours for unfrozen products. This creates pressure for real-time release: releasing product for infusion based on in-process data rather than waiting for completed final release testing.

Real-time release requires:
- Data from in-process tests that are available and reviewable before product release
- Validated systems that can aggregate in-process data and surface it for QA review
- Release workflows that can be completed in hours, not days
- Data integrity of in-process records that is equivalent to final release record integrity

The data integrity challenge of real-time release is not that the requirements are different, they're the same as conventional release. The challenge is the compressed timeline. Audit trail reviews, result verification, and electronic approval workflows that typically run over days must be completed in hours.

---

## Novel Technologies Create Novel Data Types

CGT is at the frontier of biological science, which means new analytical technologies are continuously being integrated into manufacturing and release testing. Each new technology brings:

- A new data format
- A new vendor's implementation of 21 CFR Part 11 features (or lack thereof)
- A new validation requirement
- A new set of audit trail architecture decisions

Single-cell sequencing, mass spectrometry-based identity testing, next-generation sequencing for adventitious agent testing, in-line Raman spectroscopy for bioreactor monitoring, all of these have been or are being integrated into CGT manufacturing. None of them have mature, established GxP data management playbooks comparable to what exists for HPLC or plate readers.

**The practical implication:** CGT data integrity teams are constantly evaluating new systems against 21 CFR Part 11 requirements before those systems have regulatory precedent. The decision-making is harder, the documentation burden is higher, and the risk of getting it wrong is real.

---

## What a Mature CGT Data Integrity Program Looks Like

Given these challenges, what does a mature data integrity program look like in a CGT environment?

**System inventory and tiering:** A complete inventory of all GxP data-generating systems, tiered by data criticality. Tier 1 systems (lot disposition, release testing, chain of custody) get the highest level of audit trail review and access control. Tier 2 and 3 systems get proportionate controls.

**Assay lifecycle management:** Data integrity requirements built into assay development and validation, not added post-validation. Audit trail configuration reviewed and documented before the assay is used on clinical or commercial lots.

**Chain of custody as a defined data domain:** A documented data governance model for patient material tracking that identifies every handoff point, every responsible party, and every system that generates a record. Not left to individual departments to figure out.

**Pre-BLA data integrity assessment:** A scheduled, documented review of clinical manufacturing data against ALCOA+ requirements before BLA filing. Not a surprise audit, a planned quality activity.

**Novel technology qualification pathway:** A defined process for evaluating new analytical technologies against 21 CFR Part 11 and data integrity requirements before deployment in GxP use.

**Real-time audit trail review:** Not periodic sampling, actual real-time review of audit trail records as batches are manufactured and released, built into the batch record review process.

---

## The Bottom Line

Data integrity in CGT is harder than in conventional pharma. The data is more complex, the analytical methods are more variable, the systems are less mature, and the patient stakes are more immediate.

The answer is not to make peace with that and do less. It's to build programs that are proportionate to the actual risk profile, which means investing earlier, building more rigorously, and treating data governance as a foundational element of the manufacturing program rather than an add-on to it.

The companies that successfully navigate BLA inspections in CGT are the ones that started building data integrity infrastructure during clinical development, not the ones that scrambled to retrofit it in the 12 months before filing.
