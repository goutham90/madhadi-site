---
title: "Cell & Gene Therapy: Why Data Integrity Is Structurally Different"
description: "How the scientific and manufacturing characteristics of cell and gene therapy create data integrity challenges that conventional drug manufacturing never faces, and how to build a program that holds up at BLA inspection."
pubDate: 2026-04-05
tags: ["Cell & Gene Therapy", "BLA", "GxP", "Potency"]
tier: "Intermediate"
pillar: "cell-gene-therapy"
---

Data integrity in conventional pharmaceutical manufacturing is well-understood territory. The failure modes are documented in decades of warning letters. The systems, LIMS, chromatography data systems (CDS), and manufacturing execution systems (MES), have established validation playbooks. The regulatory expectations are mature, and the people running quality units have usually seen the same problems several times before.

Cell and gene therapy (CGT) is different. Not because the principles change. ALCOA+ is ALCOA+ regardless of product type, and the legal framework, 21 CFR Part 11 in the United States and EU GMP Annex 11 in Europe, applies the same way. The difference is that the scientific and manufacturing characteristics of CGT create data integrity challenges that simply do not exist in small molecule or conventional biologics manufacturing. The volume of data is larger, the methods are less stable, the timelines are shorter, and the consequences of an attribution error can reach the patient directly.

This article walks through where those structural differences live, what they look like on the floor and in the data room, and what a program that survives a Biologics License Application (BLA) inspection actually contains. If you are new to the underlying concepts, start with [data integrity foundations](/articles/data-integrity-foundations) and the [ALCOA+ principles explained](/articles/alcoa-plus-deep-dive), then come back here for how those principles bend under CGT conditions.

---

## The Novel Assay Problem

The most fundamental data integrity challenge in CGT is potency. For most conventional drugs, potency is measured by a validated assay that has been run thousands of times across the industry. The method is well characterized, the system suitability criteria are established, and the variability is understood within tight bounds.

For many cell and gene therapies, the potency assay is novel. It may be a cell-based assay measuring transduction efficiency, a flow cytometry panel characterizing a specific cell phenotype, a droplet digital PCR (ddPCR) method for vector genome copies, or a functional assay measuring cell-killing activity against a target cell line. FDA's expectation, set out in the 2011 guidance "Potency Tests for Cellular and Gene Therapy Products," is that potency reflects the relevant biological activity of the product, which is exactly what pushes sponsors toward complex, biology-driven assays. These assays tend to be:

- **High variability.** Biological systems carry inherent run-to-run variability that analytical chemistry does not. A reference standard cell line behaves slightly differently every passage.
- **Time-sensitive.** Cell viability, for example, changes with every hour post-harvest, so the gap between sample draw and result generation is itself a quality attribute.
- **Operator-dependent.** Cell counting, culture passage, gating decisions in flow cytometry, and assay setup all carry meaningful analyst-to-analyst variation.
- **Difficult to invalidate.** When a potency assay fails system suitability, the decision to invalidate requires scientific judgment that is hard to standardize and easy to abuse.

Every one of these characteristics creates data integrity risk. High variability means out-of-specification (OOS) results are common, and the temptation to find a scientific reason to invalidate them is high. Time-sensitivity means contemporaneity requirements are more critical and harder to meet. Operator dependence means attributability matters more, because the data is only meaningful if you know who ran it, on which instrument, with which reagent lot, and under what incubation conditions.

The combined effect is that CGT operations face more OOS results, more complex OOS investigations, and more frequent pressure to release product with borderline analytical data than conventional pharma does. Each of those is a recognized data integrity pressure point. The discipline that protects you is the same one that protects any lab: a pre-defined, scientifically justified invalidation policy, and an [OOS investigation process](/articles/oos-investigation-process) that treats "the assay is variable" as a hypothesis to be tested with data, never as a conclusion that lets a failing result disappear.

### A worked example

Consider a flow cytometry viability result on an autologous lot that reads 68% against a 70% release limit. The analyst believes a clump of dead cells in one tube skewed the gate. In a low-integrity culture, the analyst re-gates, the number moves to 72%, the original is overwritten, and nobody can later see what happened. In a sound culture, the original acquisition file is preserved, the re-analysis is performed as a documented second result with a reason recorded in the audit trail, both values are visible to the reviewer, and the decision to use either one follows a pre-approved data review procedure. Same instrument, same operator, completely different integrity posture. The difference is entirely in whether the original observation survives.

---

## The Electronic Data Environment Is Larger and Less Connected

A conventional small molecule batch might generate data from a handful of recognizable sources: HPLC for assay and impurities, UV/Vis for concentration, Karl Fischer for water content, and a batch record in an electronic batch record (EBR) or paper system.

A single CGT batch routinely involves far more. The table below contrasts a typical instrument footprint.

| Conventional small molecule batch | Autologous CGT batch |
|---|---|
| HPLC (assay, impurities) | Flow cytometry (phenotype, viability) |
| UV/Vis (concentration) | ddPCR / qPCR (vector genome copies, transduction) |
| Karl Fischer (water content) | ELISA / ECLIA (residual process impurities) |
| Dissolution apparatus | Rapid and compendial sterility / endotoxin systems |
| EBR or paper batch record | Bioreactor control with continuous data streams |
| | Environmental monitoring across multiple rooms |
| | RABS or isolator control systems |
| | Cryopreservation and storage monitoring |
| | Chain-of-custody system for patient material |
| | Clinical / laboratory information systems at sites |

Each system generates data in its own format, with its own audit trail architecture and its own retention rules. Integration between them is frequently limited, so data moves by manual export or CSV rather than through validated electronic interfaces. Manual transfer is itself a data integrity hazard, because every export and re-import is a point where data can be transcribed wrong, truncated, or silently altered. Where a CSV bridge exists between two systems, that transfer should be qualified like any other data flow, with a documented check that the record landing in the receiving system matches the source. The principles behind that check sit in [data lifecycle and metadata](/articles/data-lifecycle-and-metadata).

The practical consequence is scale. The scope of data under integrity requirements in a CGT operation is an order of magnitude larger than in conventional pharmaceutical manufacturing. The number of systems to validate, the number of data types to review, and the number of potential failure points all grow together. A program designed for four instruments does not stretch to forty by working harder; it has to be re-architected around tiering and proportionate control, which the [data governance framework](/articles/data-governance-framework) describes in general terms.

---

## Patient-Specific Manufacturing and Chain of Custody

For autologous cell therapies, products manufactured from a specific patient's own cells, data integrity carries a dimension that exists nowhere else in GxP manufacturing: the chain of custody of the patient material itself.

From the time a patient's cells are collected to the time the finished product is infused, every step has to be documented with complete attributability and contemporaneity:

- Apheresis collection records at the clinical site
- Cryopreservation and transport records
- Receipt verification at the manufacturing facility
- In-process cell culture monitoring
- Release testing attributed to the correct patient lot
- Cryopreservation and shipment of finished product
- Delivery confirmation at the infusion site

A chain-of-custody error, the wrong patient material entering manufacturing, incorrect labeling, or release results attributed to the wrong lot, is not merely a data integrity finding. It is a patient safety event. An autologous product is, by definition, not interchangeable; a mix-up means a patient could receive cells that are not their own, with consequences that range from a failed therapy to a serious immune reaction. This is why FDA treats labeling and segregation controls for these products as a Current Good Tissue Practice and GMP concern under 21 CFR Part 1271 and Part 211, and why the attributability element of ALCOA+ is doing heavier work here than anywhere else in the plant.

The system challenge is organizational as much as technical. Chain of custody spans the clinical site, the manufacturing facility, the logistics provider, and the infusion center, each with its own systems and data formats. Stitching that into a coherent, auditable record that an inspector can follow end to end during a BLA inspection or a site audit is a governance problem, not a single-system problem. The Chain of Identity and Chain of Custody concept that the cell therapy field has converged on, a unique identifier that travels with the material from collection through infusion and links every record to one patient, is the practical answer. It only works if every handoff writes a record against that identifier and no step is left to local habit. A related treatment focused on the gene therapy side is in [data integrity in gene therapy](/articles/data-integrity-in-gene-therapy), and the supply chain handoffs are covered in [good distribution practice and cold chain](/articles/good-distribution-practice-cold-chain).

---

## BLA Submissions and the Retrospective Data Integrity Audit

When a CGT sponsor files a BLA, FDA receives not only the summary statistics but the obligation, on the sponsor's part, to produce and defend the underlying raw data on request. The data integrity of every analytical result that feeds the submission has to hold up.

For a conventional drug with an established process, the analytical database behind a BLA may represent years of commercial manufacturing with well understood variability, and the data integrity program has already been through multiple inspections. CGT sponsors at first BLA rarely have that luxury:

- The product may have been made under several protocol versions as the process matured.
- The analytical methods may have evolved across development, with different versions used for different lots.
- Some data may have been generated at clinical sites or contract organizations with varying data integrity maturity.
- The commercial process may differ substantially from the clinical process, connected only by comparability data.

The filing creates a forcing function: all the data generated across development has to be reviewable, attributable, and internally consistent. Sponsors that did not build data integrity discipline from the start of clinical manufacturing often discover, during BLA preparation, that they have gaps, missing raw data, audit trails that were never retained, or instruments that are no longer supported and whose data cannot be regenerated. Each gap then needs either remediation or a documented, defensible risk assessment.

The remedy that experienced teams adopt is a pre-BLA data integrity audit of development and clinical manufacturing data. The goal is to find the gaps before FDA does, score the risk of each one, and either fix it or write a reasoned justification for why the data remains reliable despite it. Treat it as a planned quality activity with a protocol, not a surprise. The expectations for the broader filing are laid out in [BLA readiness data package](/articles/bla-readiness-data-package), and the assessment mechanics translate directly from a general [DI gap assessment methodology](/articles/di-gap-assessment-methodology).

### What the retrospective audit actually examines

A useful pre-BLA review does not stop at "is there an audit trail." It asks, for each critical result type, whether the original raw data still exists, whether it can be tied to a specific instrument run and analyst, whether the method version in use at the time is identifiable, and whether any result that was invalidated or reprocessed has a contemporaneous reason recorded. Where development pre-dated a given system, the review documents what controls were in place instead and why the data is still trustworthy. The output is a ranked gap list with disposition for each item, which becomes part of the inspection story rather than a liability discovered during it.

---

## Real-Time Release and Compressed Timelines

CGT products, particularly autologous ones, often have very short shelf lives after manufacturing, sometimes as little as 24 to 72 hours for unfrozen material. That creates pressure for real-time release: disposition of product for infusion based on in-process and rapid testing rather than waiting for the full suite of conventional final-release assays, several of which (classical sterility, for instance) take longer than the product survives.

Real-time release requires:

- In-process tests whose data is available and reviewable before disposition
- Validated systems that can aggregate that data and surface it for QA review
- Release workflows that complete in hours, not days
- In-process record integrity that is genuinely equivalent to final-release record integrity

The data integrity challenge here is not that the requirements change. They do not. The challenge is the compressed timeline. Audit trail reviews, result verification, and electronic approval workflows that usually run over days have to happen in hours, sometimes with a clinician waiting. Speed is exactly the condition under which review steps get skipped and approvals get rubber-stamped, so the controls have to be designed to stay meaningful under time pressure. In practice that means audit trail review is built into the disposition step rather than deferred, exception handling is pre-defined so an aberrant in-process value triggers a known path instead of an improvised one, and the people performing release have authority to hold product without an escalation that blows the clock. The relevant compendial expectation for the rapid sterility approaches that make this possible sits under the alternative methods framework of the major pharmacopeias, and the disposition logic itself follows ordinary [batch record review](/articles/batch-record-review-gmp) discipline, just faster.

---

## Novel Technologies Create Novel Data Types

CGT sits at the frontier of biological measurement, which means new analytical technologies are continuously pulled into manufacturing and release testing. Each one arrives with:

- A new data format
- A vendor's particular implementation of 21 CFR Part 11 controls, or the absence of them
- A new validation requirement
- A fresh set of audit trail architecture decisions

Single-cell sequencing, mass spectrometry-based identity testing, next-generation sequencing for adventitious agent detection, and in-line Raman spectroscopy for bioreactor monitoring have all been moving into CGT manufacturing. None of them carry the mature, settled GxP data management playbook that exists for HPLC or a plate reader. A team qualifying one of these for the first time is often making Part 11 judgment calls that have no regulatory precedent to lean on.

The questions to put to any new system before it touches a GxP lot are concrete: does it generate complete data including the original dynamic record and not just a flattened report, can it produce a secure computer-generated time-stamped audit trail of creation, modification, and deletion, are user actions tied to unique individuals, and can the records be retained and read for the full retention period independent of the vendor. If a system fails one of these, that is not automatically disqualifying, but it forces a documented procedural or technical control to close the gap before use. This is ordinary [computer system validation](/articles/gamp5-csv-framework) thinking applied at the bleeding edge, with the [audit trail design and review](/articles/audit-trail-design-and-review) questions front-loaded rather than discovered later. The documentation burden is higher and the risk of getting it wrong is real, which is the argument for a standing qualification pathway rather than case-by-case improvisation.

---

## What a Mature CGT Data Integrity Program Looks Like

Given all of the above, a program that holds up has a recognizable shape.

**System inventory and tiering.** A complete inventory of every GxP data-generating system, tiered by data criticality. Tier 1 systems, those driving lot disposition, release testing, and chain of custody, get the highest level of audit trail review and the tightest access control. Lower tiers get proportionate controls. Without tiering, a forty-system environment either drowns in over-control or quietly under-controls the systems that matter most.

**Assay lifecycle management.** Data integrity requirements built into assay development and validation, not bolted on afterward. Audit trail configuration, gating templates, and reprocessing rules reviewed and locked before the assay touches a clinical or commercial lot. This connects directly to [method validation essentials](/articles/method-validation-essentials) and the analytical lifecycle thinking in [ICH Q14 and Q2(R2)](/articles/ich-q14-q2r2-analytical-lifecycle).

**Chain of custody as a defined data domain.** A documented governance model for patient material tracking that names every handoff, every responsible party, and every system that writes a record, anchored to a single patient identifier. Not left to individual departments to invent.

**Pre-BLA data integrity assessment.** A scheduled, protocol-driven review of clinical manufacturing data against ALCOA+ before filing. A planned quality activity, not a fire drill in the final twelve months.

**Novel technology qualification pathway.** A standing process for evaluating new analytical technologies against Part 11 and Annex 11 expectations before deployment, so the hard questions are answered once and reused.

**Audit trail review built into batch review.** Not periodic sampling after the fact, but review of the critical audit trail records as part of the batch record review that gates disposition. For high-volume continuous streams from bioreactors and monitoring systems, a risk-based, exception-focused approach is appropriate, reviewing for anomalies and changes rather than reading every data point.

### A short reader's path by role

For someone new to GxP, the takeaway is narrow: the rules are the same as everywhere else, but CGT applies more pressure to attributability and contemporaneity than you will have seen before, so the habits that feel optional elsewhere are load-bearing here. For a working practitioner, the highest-value work is in the assay invalidation policy, the chain-of-custody record model, and the audit trail review built into release; those three carry most of the inspection risk. For a senior or program-level reader, the decision that matters is timing: building this infrastructure during clinical development costs a fraction of what retrofitting it before a BLA does, and it is the difference between an inspection that confirms your story and one that uncovers it.

---

## The Bottom Line

Data integrity in CGT is genuinely harder than in conventional pharma. The data is more voluminous and less connected, the analytical methods are more variable, the systems are less mature, the timelines are shorter, and the patient stakes are immediate rather than statistical.

The right response is not to make peace with that and do less. It is to build a program proportionate to the actual risk profile, which means investing earlier, designing more deliberately, and treating data governance as a foundational element of the manufacturing program rather than a documentation layer added at the end. The sponsors that pass BLA inspections in this space are, almost without exception, the ones that started building data integrity infrastructure during clinical development, not the ones that scrambled to retrofit it in the year before filing.
