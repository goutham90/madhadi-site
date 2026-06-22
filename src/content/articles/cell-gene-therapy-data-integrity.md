---
title: "Cell & Gene Therapy: Why Data Integrity Is Structurally Different"
description: "How the scientific and manufacturing characteristics of cell and gene therapy create data integrity challenges that conventional drug manufacturing never faces, and how to build a program that holds up at BLA inspection."
pubDate: 2026-04-05
tags: ["Cell & Gene Therapy", "BLA", "GxP", "Potency"]
tier: "Intermediate"
pillar: "cell-gene-therapy"
---

Data integrity in conventional pharmaceutical manufacturing is well understood territory. The failure modes are documented in decades of warning letters. The systems, LIMS, chromatography data systems (CDS), and manufacturing execution systems (MES), have established validation playbooks. The regulatory expectations are mature, and the people running quality units have usually seen the same problems several times before.

Cell and gene therapy (CGT) is different. Not because the principles change. ALCOA+ is ALCOA+ regardless of product type, and the legal framework, 21 CFR Part 11 in the United States and EU GMP Annex 11 in Europe, applies the same way. The difference is that the scientific and manufacturing characteristics of CGT create data integrity challenges that simply do not exist in small molecule or conventional biologics manufacturing. The volume of data is larger, the methods are less stable, the timelines are shorter, and the consequences of an attribution error can reach the patient directly.

The same structural pressures show up across modern advanced therapies more broadly, and many of the controls described here apply equally to other complex biologics, combination products, and companion diagnostics where measurement is biology-driven rather than chemistry-driven. This article walks through where those structural differences live, what they look like on the floor and in the data room, and what a program that survives a Biologics License Application (BLA) inspection actually contains. If you are new to the underlying concepts, start with [data integrity foundations](/articles/data-integrity-foundations) and the [ALCOA+ principles in detail](/articles/alcoa-plus-deep-dive), then come back here for how those principles bend under CGT conditions.

---

## The regulatory frame before anything else

It helps to fix the citations you will be quoting before you walk a process. None of these are CGT-specific, which is the point: the same rules govern an HPLC assay for a tablet and a flow cytometry release test for an autologous lot. CGT just exercises them harder.

| Reference | What it governs | Where it bites in CGT |
|---|---|---|
| 21 CFR Part 11 (1997) | Electronic records and electronic signatures in FDA-regulated work | Audit trails, e-signatures, and original dynamic records on novel instruments |
| EU GMP Annex 11 (2011 revision) | Computerised systems in EU GMP | Risk-based validation, audit trail review, data security for the same systems |
| 21 CFR 210 and 211 | cGMP for finished pharmaceuticals | Batch records, laboratory controls, OOS handling, release |
| 21 CFR Part 1271 | Human cells, tissues, and cellular and tissue-based products (HCT/Ps), Current Good Tissue Practice | Donor eligibility, labeling, segregation, and tracking for cell-based products |
| FDA guidance "Data Integrity and Compliance With Drug CGMP" (2018) | ALCOA expectations and common DI questions | The plain-language source FDA cites in 483 observations |
| FDA guidance "Potency Tests for Cellular and Gene Therapy Products" (2011) | What a potency assay must demonstrate | Pushes sponsors toward biology-driven, high-variability assays |
| ICH Q9(R1) (2023) | Quality risk management | The tiering and proportionality you apply to a 40-system estate |
| PIC/S PI 041 (2021) | Good practices for data management and integrity | The most detailed inspector-facing DI guide, harmonised across agencies |

Keep this table close. When an inspector asks "on what basis," the answer is always a specific clause, not a general principle. A practitioner who can name Annex 11 clause 9 for audit trails or 211.194 for the completeness of laboratory records sounds like someone who has done the work.

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

### What a defensible invalidation policy contains

This is the single highest-value document in a CGT lab, so it is worth being concrete about its structure. A policy that holds up at inspection has, at minimum:

1. **System suitability criteria fixed in the method, not chosen after seeing the data.** The acceptance gates for reference standard recovery, replicate precision, gating control populations, and assay controls (positive, negative, isotype) are written into the validated method and locked.
2. **An enumerated, closed list of assignable causes that permit invalidation.** Examples: documented instrument fault with a maintenance record, a reagent lot that fails its own qualification, a confirmed temperature excursion on the incubator with a contemporaneous alarm record. "High biological variability" is never on this list.
3. **The evidence required to invoke each cause.** An invalidation claim must point to an independent record, an alarm log, a calibration certificate, a second analyst's confirmation, not to the analyst's recollection.
4. **A requirement that the original result and original raw data survive invalidation.** Invalidating a result does not delete it. It records, contemporaneously, who invalidated it, when, why, and against which criterion.
5. **A trend trigger.** If the same assay invalidates more than a defined rate, that is a method robustness signal that routes to the method owner, not a quiet repeat-until-pass loop.

**Acceptance criteria for the policy itself:** an independent reviewer, reading only the records, can reconstruct every invalidation decision and tie it to a pre-approved cause with supporting evidence, and the invalidation rate is trended and stays inside the range established during validation.

### A worked example

Consider a flow cytometry viability result on an autologous lot that reads 68% against a 70% release limit. The analyst believes a clump of dead cells in one tube skewed the gate. In a low-integrity culture, the analyst re-gates, the number moves to 72%, the original is overwritten, and nobody can later see what happened. In a sound culture, the original acquisition file is preserved, the re-analysis is performed as a documented second result with a reason recorded in the audit trail, both values are visible to the reviewer, and the decision to use either one follows a pre-approved data review procedure. Same instrument, same operator, completely different integrity posture. The difference is entirely in whether the original observation survives.

Here is what the audit trail and review record should look like in the sound case.

| Field | Entry |
|---|---|
| Acquisition file | LOT-2274-VIA-R1.fcs, acquired 14:02, analyst J.K. |
| Result 1 (locked gate template GT-VIA-03) | 68.4% viable |
| Re-analysis trigger | Analyst observation: debris cluster in FSC/SSC, lower-left |
| Result 2 (same template, doublet exclusion applied per SOP step 7.3) | 71.9% viable |
| Audit trail entry | "Re-analysis per SOP-QC-118 7.3; doublet exclusion gate applied; original retained" timestamp 14:31, analyst J.K. |
| Reviewer action | Both results reviewed; re-analysis accepted per pre-approved rule; result 2 reported; result 1 retained and visible |
| Disposition | Documented in batch record review with reference to both file versions |

Notice that nothing was hidden, the rule that permitted the re-gate existed before the result appeared, and a reviewer can see the whole story. That is the entire game.

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

### How to qualify a manual data transfer

When you cannot validate an electronic interface (often the realistic situation for a new instrument), you make the manual bridge defensible instead. A concrete procedure:

1. **Define the record boundary.** State exactly which fields are being moved, in which order, and what the authoritative source is. The source dynamic record stays the original; the receiving system holds a true copy, not a replacement.
2. **Specify the verification.** A second person, or a system-generated reconciliation, confirms that every moved value matches the source. For numeric results, this is a value-for-value check; for files, a checksum or hash comparison is stronger than visual review.
3. **Lock format handling.** Decimal places, rounding, units, and date formats must not change in transit. Many real findings trace to a CSV that silently dropped trailing precision or reformatted a date.
4. **Record the transfer.** Who exported, when, from what version, who verified, with a contemporaneous signature. This is itself a GMP record.
5. **Retain the source.** The original instrument file is retained for the full retention period, independent of the spreadsheet that consumed it.

The distinction between an original dynamic record and a flattened copy is foundational here; see [static and dynamic records and true copies](/articles/static-dynamic-records-true-copies) for the precise definitions an inspector will use.

The practical consequence is scale. The scope of data under integrity requirements in a CGT operation is an order of magnitude larger than in conventional pharmaceutical manufacturing. The number of systems to validate, the number of data types to review, and the number of potential failure points all grow together. A program designed for four instruments does not stretch to forty by working harder; it has to be re-architected around tiering and proportionate control, which the [data governance framework](/articles/data-governance-framework) describes in general terms and [data criticality and data risk](/articles/data-criticality-and-data-risk) operationalizes.

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

The system challenge is organizational as much as technical. Chain of custody spans the clinical site, the manufacturing facility, the logistics provider, and the infusion center, each with its own systems and data formats. Stitching that into a coherent, auditable record that an inspector can follow end to end during a BLA inspection or a site audit is a governance problem, not a single-system problem. The Chain of Identity and Chain of Custody concept that the cell therapy field has converged on, a unique identifier that travels with the material from collection through infusion and links every record to one patient, is the practical answer. It only works if every handoff writes a record against that identifier and no step is left to local habit.

### Chain of Identity versus Chain of Custody

These two terms are used loosely in conversation and precisely at inspection, so know the difference.

- **Chain of Identity (COI)** keeps the link between the starting material and the finished product tied to the correct patient. It answers "are these the right cells for this patient." The COI is anchored by a unique identifier assigned at collection that never changes and is verified at every handoff and at infusion.
- **Chain of Custody (COC)** records who physically held the material, when, and under what conditions at every step. It answers "where has this material been and was it controlled the whole way." Temperature, time, and responsible party are its content.

A sound program proves both. Below is a sample handoff register keyed to a single patient identifier.

| Step | Responsible party | System of record | COI verification | COC record written |
|---|---|---|---|---|
| Apheresis collection | Clinical site | Site collection system | Patient ID and unique identifier (UID) assigned and label-verified | Collection time, volume, storage temp |
| Cryopreservation and ship | Site / logistics | Logistics platform | UID scanned against shipping manifest | Container temp log, custody transfer signature |
| Receipt at manufacturing | Receiving QA | LIMS / MES | UID scanned, two-person identity check | Receipt temp read, time of receipt |
| In-process and release | Manufacturing / QC | MES, LIMS, instruments | All results filed against UID lot | Process parameter records, EM records |
| Finished product ship | Shipping QA | Logistics platform | UID on finished label reconciled to manufacturing record | Outbound temp log, custody signature |
| Infusion | Treatment center | Site EHR / chain system | UID verified bedside against patient ID before infusion | Final custody confirmation, infusion time |

**Acceptance criteria:** an inspector can pick any one patient identifier and walk it from apheresis to infusion without a single undocumented handoff, every identity check is recorded, and there is no point at which the material's location or custody is unknown.

A related treatment focused on the gene therapy side is in [data integrity in gene therapy](/articles/data-integrity-in-gene-therapy); the GMP foundations for these products are in [ATMP GMP for cell and gene manufacturing](/articles/atmp-gmp-cell-gene-manufacturing); and the supply chain handoffs are covered in [good distribution practice and cold chain](/articles/good-distribution-practice-cold-chain) and [cold chain shipping qualification](/articles/cold-chain-shipping-qualification).

---

## Roles and responsibilities

A CGT data integrity program fails most often not because nobody owns it but because everyone assumes someone else does. Write the RACI down. A workable split:

| Role | Primary data integrity responsibility |
|---|---|
| Data owner (process or method owner) | Defines what the critical data is, sets the controls, owns the audit trail configuration for their systems |
| System owner / IT | Validation state, access management, backup and restore, time synchronization, patch and change control |
| QC analyst / operator | Generates data contemporaneously, follows the locked method, records deviations, never deletes an original |
| Reviewer (second person) | Verifies result and audit trail at the point of review, confirms attributability and completeness |
| QA / quality unit | Owns the DI program, approves invalidation policy, gates disposition, runs periodic and for-cause audits |
| Qualified Person or designated releaser | Confirms the data supporting release is complete and reliable before disposition |
| Data governance lead | Maintains the system inventory and tiering, owns the cross-functional chain-of-custody model, drives the pre-BLA assessment |

The data governance career and structure questions sit in [data governance roles and careers](/articles/data-governance-roles-and-careers) and the broader role map in [GxP roles and responsibilities](/articles/gxp-roles-responsibilities).

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

### A scoring approach for the gap list

Rank each gap so the remediation effort goes where the risk is. A simple, defensible scheme:

| Gap | Affects a result feeding the BLA? | Original data recoverable? | Risk rank | Disposition |
|---|---|---|---|---|
| Audit trail not retained for an early clinical CDS | Yes (release assay) | Partial (paper printouts only) | High | Risk assessment plus corroborating records; commit to retained audit trails going forward |
| Spreadsheet calculation not version-controlled | Yes (potency calc) | Yes (raw values exist) | Medium | Revalidate spreadsheet, re-verify affected results |
| Instrument no longer supported, data unreadable | Yes (early phenotype data) | No | High | Documented justification using downstream comparability; flag as known limitation |
| Reagent lot traceability missing for a non-critical assay | No | Yes | Low | Note and monitor; procedural fix going forward |

**Acceptance criteria:** every gap that touches a result in the submission has either a closed remediation or a written, science-based justification that a reviewer would accept, and no high-risk gap is left undispositioned at filing.

This is the same gap-to-disposition discipline used in any [DI remediation program](/articles/di-remediation-program) and reinforced by a [DI self-audit checklist](/articles/di-self-audit-checklist) run periodically rather than once.

---

## Real-Time Release and Compressed Timelines

CGT products, particularly autologous ones, often have very short shelf lives after manufacturing, sometimes as little as 24 to 72 hours for unfrozen material. That creates pressure for real-time release: disposition of product for infusion based on in-process and rapid testing rather than waiting for the full suite of conventional final-release assays, several of which (classical sterility, for instance) take longer than the product survives.

Real-time release requires:

- In-process tests whose data is available and reviewable before disposition
- Validated systems that can aggregate that data and surface it for QA review
- Release workflows that complete in hours, not days
- In-process record integrity that is genuinely equivalent to final-release record integrity

The data integrity challenge here is not that the requirements change. They do not. The challenge is the compressed timeline. Audit trail reviews, result verification, and electronic approval workflows that usually run over days have to happen in hours, sometimes with a clinician waiting. Speed is exactly the condition under which review steps get skipped and approvals get rubber-stamped, so the controls have to be designed to stay meaningful under time pressure. In practice that means audit trail review is built into the disposition step rather than deferred, exception handling is pre-defined so an aberrant in-process value triggers a known path instead of an improvised one, and the people performing release have authority to hold product without an escalation that blows the clock.

### Designing a release step that survives time pressure

A concrete disposition sequence for a short-shelf-life lot:

1. **Pre-stage the review.** The reviewable data set, in-process results, rapid sterility and endotoxin status, identity, and the critical audit trail records, is assembled into a single disposition view before the analyst finishes, not gathered afterward.
2. **Make audit trail review a gate, not a footnote.** The disposition step itself requires the reviewer to confirm the critical audit trails (result generation, any re-analysis, e-signatures) before approval can be recorded. The system does not allow release without it.
3. **Pre-define the out-of-bounds path.** If an in-process value is aberrant, the procedure already names who is called, what the hold record looks like, and what additional data is needed, so nobody improvises while the clock runs.
4. **Protect the authority to hold.** The releaser can hold the lot without first persuading a manager. Removing that authority is how time pressure turns into released bad product.
5. **Record the basis for any pending compendial test.** Where final sterility completes after infusion, the program defines the action plan if it later fails, including patient notification, because the timeline does not remove the obligation.

The relevant compendial expectation for the rapid sterility approaches that make this possible sits under the alternative methods framework of the major pharmacopeias, and the classical method itself is described in [sterility testing USP 71](/articles/sterility-testing-usp-71). The disposition logic follows ordinary [batch record review](/articles/batch-record-review-gmp) and [batch disposition decisions](/articles/batch-disposition-decisions) discipline, just faster.

---

## Novel Technologies Create Novel Data Types

CGT sits at the frontier of biological measurement, which means new analytical technologies are continuously pulled into manufacturing and release testing. Each one arrives with:

- A new data format
- A vendor's particular implementation of 21 CFR Part 11 controls, or the absence of them
- A new validation requirement
- A fresh set of audit trail architecture decisions

Single-cell sequencing, mass spectrometry-based identity testing, next-generation sequencing for adventitious agent detection, and in-line Raman spectroscopy for bioreactor monitoring have all been moving into CGT manufacturing. None of them carry the mature, settled GxP data management playbook that exists for HPLC or a plate reader. A team qualifying one of these for the first time is often making Part 11 judgment calls that have no regulatory precedent to lean on.

### The qualification checklist for a new GxP instrument

The questions to put to any new system before it touches a GxP lot are concrete. Run them as a gate.

| Question | What good looks like | If it fails |
|---|---|---|
| Does it generate the complete original dynamic record, not just a flattened report? | Raw data file with full metadata is retained and re-openable | Procedural control to retain and reprocess raw data, or do not use for GMP |
| Can it produce a secure, computer-generated, time-stamped audit trail of create, modify, delete? | Audit trail on by default, cannot be disabled by users | Strong procedural and physical controls; document the limitation and risk |
| Are user actions tied to unique individuals? | Named accounts, no shared logins, role-based access | Implement unique accounts before GMP use; shared logins are a finding |
| Is the system clock controlled and synchronized? | Time source controlled, users cannot change it | Lock clock access; see time-stamp controls below |
| Can records be retained and read for the full retention period independent of the vendor? | Open or documented format, export path proven | Negotiate escrow or export; treat vendor lock-in as a risk |
| Can data be deleted or overwritten without a trace? | No silent deletion; deletions audit-trailed | This is disqualifying until fixed |

If a system fails one of these, that is not automatically disqualifying, but it forces a documented procedural or technical control to close the gap before use. This is ordinary [computer system validation](/articles/gamp5-csv-framework) thinking applied at the bleeding edge, with the [audit trail design and review](/articles/audit-trail-design-and-review) and [time stamps and system clock control](/articles/time-stamps-and-system-clock-control) questions front-loaded rather than discovered later. Where a vendor supplies the software, the assessment of their development quality belongs in a [software supplier assessment](/articles/software-supplier-assessment-csa). The documentation burden is higher and the risk of getting it wrong is real, which is the argument for a standing qualification pathway rather than case-by-case improvisation. The modern risk-based testing posture that keeps this proportionate is described in [computer software assurance](/articles/computer-software-assurance-fda), the FDA guidance that was issued in draft in 2022 and finalized in 2025.

---

## What a Mature CGT Data Integrity Program Looks Like

Given all of the above, a program that holds up has a recognizable shape.

**System inventory and tiering.** A complete inventory of every GxP data-generating system, tiered by data criticality. Tier 1 systems, those driving lot disposition, release testing, and chain of custody, get the highest level of audit trail review and the tightest access control. Lower tiers get proportionate controls. Without tiering, a forty-system environment either drowns in over-control or quietly under-controls the systems that matter most.

**Assay lifecycle management.** Data integrity requirements built into assay development and validation, not bolted on afterward. Audit trail configuration, gating templates, and reprocessing rules reviewed and locked before the assay touches a clinical or commercial lot. This connects directly to [method validation essentials](/articles/method-validation-essentials), the analytical lifecycle thinking in [ICH Q14 and Q2(R2)](/articles/ich-q14-q2r2-analytical-lifecycle), and the potency-specific work in [comparability and potency assays](/articles/comparability-and-potency-assays).

**Chain of custody as a defined data domain.** A documented governance model for patient material tracking that names every handoff, every responsible party, and every system that writes a record, anchored to a single patient identifier. Not left to individual departments to invent.

**Pre-BLA data integrity assessment.** A scheduled, protocol-driven review of clinical manufacturing data against ALCOA+ before filing. A planned quality activity, not a fire drill in the final twelve months.

**Novel technology qualification pathway.** A standing process for evaluating new analytical technologies against Part 11 and Annex 11 expectations before deployment, so the hard questions are answered once and reused.

**Audit trail review built into batch review.** Not periodic sampling after the fact, but review of the critical audit trail records as part of the batch record review that gates disposition. For high-volume continuous streams from bioreactors and monitoring systems, a risk-based, exception-focused approach is appropriate, reviewing for anomalies and changes rather than reading every data point. The mechanics of making this routine sit in [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).

### A short reader's path by role

For someone new to GxP, the takeaway is narrow: the rules are the same as everywhere else, but CGT applies more pressure to attributability and contemporaneity than you will have seen before, so the habits that feel optional elsewhere are load-bearing here. For a working practitioner, the highest-value work is in the assay invalidation policy, the chain-of-custody record model, and the audit trail review built into release; those three carry most of the inspection risk. For a senior or program-level reader, the decision that matters is timing: building this infrastructure during clinical development costs a fraction of what retrofitting it before a BLA does, and it is the difference between an inspection that confirms your story and one that uncovers it.

---

## Common mistakes and inspection-finding patterns

These patterns recur across data integrity 483 observations and warning letters. None of them are CGT-specific in form, but CGT conditions make each one more likely.

- **Repeat-to-pass on a variable assay.** An OOS potency or viability result is quietly re-run until it passes, with no investigation and no retained original. The finding is failure to follow the OOS procedure and incomplete laboratory records under 211.194.
- **Re-gating or reprocessing without an audit trail.** Flow cytometry or PCR data re-analyzed with the original overwritten. The finding is loss of the original dynamic record.
- **Shared logins on a new instrument.** A just-installed sequencer or imager run under a generic account because individual accounts were not set up. The finding is loss of attributability.
- **System clock left user-changeable.** A new system where operators can alter the time, breaking contemporaneity. Inspectors test this directly.
- **Audit trail review deferred or never done.** The audit trail exists but nobody reviews it before disposition, so a backdated or altered entry goes unseen.
- **Chain-of-custody handoff with no record.** A transfer between clinical site, logistics, and manufacturing that relied on local habit rather than a written record against the patient identifier.
- **Orphaned development data at BLA.** Raw data from early clinical manufacturing that cannot be located, read, or attributed, discovered too late to remediate.
- **CSV transfer that silently altered data.** A manual export that dropped precision, reformatted dates, or truncated rows, with no reconciliation check.

The recurring lesson, drawn out further in [quality culture and DI failures](/articles/quality-culture-di-failures) and the broader [FDA warning letter patterns](/articles/fda-warning-letters-patterns), is that DI findings are rarely about a single falsified number. They are about a system that allowed an original observation to disappear without a trace.

---

## Interview-ready questions

Expect these in a CGT quality or data integrity interview, and from an inspector at the bench. Concise, specific answers signal that you have actually done the work.

**"Why is data integrity harder for CGT than for a small molecule?"**
The principles are identical; the conditions are harsher. Potency and identity assays are biology-driven, so they are more variable, more time-sensitive, and more operator-dependent, which produces more OOS results and more invalidation pressure. The system estate is much larger and less integrated, so manual transfers multiply. Autologous products add a patient chain of custody where an attribution error is a safety event, not just a record gap. And short shelf life compresses release, putting review steps under time pressure.

**"Walk me through how you would invalidate a failing potency result."**
Only against a pre-approved, enumerated assignable cause supported by an independent record, never because the assay is variable. The original result and raw data are retained, the invalidation is recorded contemporaneously with who, when, why, and against which criterion, and the rate of invalidation is trended as a method robustness signal. If there is no documented cause, the result stands and drives an OOS investigation.

**"How do you handle audit trail review when you have forty systems and have to release in hours?"**
Tier the systems by data criticality and review the Tier 1 audit trails (disposition, release testing, chain of custody) as a built-in gate within batch review, not a periodic afterthought. For high-volume continuous streams, use a risk-based, exception-focused review that looks for anomalies and changes rather than reading every point. The disposition step itself cannot complete without the critical audit trail confirmation.

**"What is the difference between Chain of Identity and Chain of Custody?"**
Chain of Identity keeps the material tied to the correct patient end to end through a unique identifier; it answers "are these the right cells." Chain of Custody records who held the material, when, and under what conditions; it answers "where has it been and was it controlled." A program proves both, anchored to one identifier, with a record written at every handoff.

**"What do you look for in a pre-BLA data integrity assessment?"**
For each critical result type: does the original raw data still exist, can it be tied to a specific run and analyst, is the method version identifiable, and does every invalidation or reprocessing have a contemporaneous reason. Output is a ranked gap list with a disposition for each item, remediated or justified, so it becomes part of the inspection story rather than a surprise during it.

**"A new instrument cannot be configured to keep an audit trail on by default. Can you use it?"**
Not in that state for GMP without compensating controls. I would document the limitation, put strong procedural and access controls in place, retain the raw records by a verified manual path, and push the vendor for a fix. Silent deletion or overwriting with no trace is disqualifying until resolved.

**"On what regulatory basis?"**
Be ready to name the clause: 21 CFR Part 11 and EU GMP Annex 11 for electronic records and audit trails, 21 CFR 211.194 for completeness of laboratory records, 21 CFR Part 1271 for cell-based product tracking and labeling, and the 2018 FDA data integrity guidance and PIC/S PI 041 for the ALCOA expectations themselves.

---

## Practical tips

- Lock the gating templates and system suitability criteria in the validated method before the first GMP lot, not after the first surprising result.
- Assign the patient unique identifier at apheresis and verify it at every handoff and at the bedside. One identifier, no exceptions, no local aliases.
- Build audit trail review into the disposition gate so the system cannot release without it. Deferred review is review that does not happen.
- Reconcile every manual CSV transfer value-for-value, and retain the source file. Most transfer findings are silent precision or date losses, not deliberate edits.
- Start the pre-BLA data integrity assessment years before filing, ideally as a standing periodic self-audit, so gaps surface while they are still fixable.
- Run new instruments through a fixed qualification gate that front-loads the Part 11 questions, so the hard calls are made once and reused.
- Keep the regulation table from the top of this article handy; "on what basis" always has a clause-level answer.

For the wider program architecture these tips fit into, see [DI program architecture](/articles/di-program-architecture); for inspection day itself, see [FDA inspection readiness](/articles/fda-inspection-readiness) and [managing a live inspection](/articles/managing-a-live-inspection).

---

## The Bottom Line

Data integrity in CGT is genuinely harder than in conventional pharma. The data is more voluminous and less connected, the analytical methods are more variable, the systems are less mature, the timelines are shorter, and the patient stakes are immediate rather than statistical.

The right response is not to make peace with that and do less. It is to build a program proportionate to the actual risk profile, which means investing earlier, designing more deliberately, and treating data governance as a foundational element of the manufacturing program rather than a documentation layer added at the end. The sponsors that pass BLA inspections in this space are, almost without exception, the ones that started building data integrity infrastructure during clinical development, not the ones that scrambled to retrofit it in the year before filing.
