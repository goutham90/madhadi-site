---
title: "21 CFR 210 and 211 Walkthrough: The US cGMP Regulation Subpart by Subpart"
description: "A structured map of the US current Good Manufacturing Practice regulation for finished drugs, walking through every subpart of 21 CFR Part 211 with the contents, roles, and inspection findings a QA professional needs to cite it from memory."
pubDate: 2026-06-20
tags: ["cgmp", "21-cfr-211", "quality-assurance", "fda", "gmp", "regulatory", "interview-prep"]
pillar: "quality-assurance"
tier: "Beginner"
---

If you work in US pharmaceutical quality, two regulations sit under almost everything you do: 21 CFR Part 210 and 21 CFR Part 211. Inspectors cite them in 483 observations. Warning letters quote them by section number. SOPs reference them in their scope statements. And in an interview, "where does the requirement for a second-person batch record review come from?" is a fair question, with a real answer: 211.194 and 211.186, backed by 211.22.

This article walks the regulation the way an experienced QA person carries it in their head. Not a paraphrase of every sentence, but a map: what each part and subpart covers, why it exists, what good compliance looks like, the worked examples that make it concrete, and the findings inspectors write when a site gets it wrong. By the end you should be able to navigate Part 211 by section number and explain any subpart cold.

A note on what this regulation is and is not. Parts 210 and 211 are federal regulations issued by the US Food and Drug Administration under the authority of the Federal Food, Drug, and Cosmetic Act (FD&C Act). They are law. They are not guidance, and the phrase "current good manufacturing practice" means the expectation rises over time even when the text does not change. The text is terse on purpose. FDA guidance documents, ICH guidelines, and USP chapters fill in the "how." This page is an independent educational resource and is not affiliated with FDA.

---

## The big picture: what 210, 211, and the cGMP family cover

The FD&C Act, at section 501(a)(2)(B), says a drug is "adulterated" if it was not made in conformity with current good manufacturing practice. That single statutory hook is why cGMP matters: a noncompliant drug is legally adulterated, which is an enforcement basis for warning letters, seizure, injunction, and import refusal. The regulations define what cGMP means in practice.

The relevant parts of Title 21 of the Code of Federal Regulations:

| Part | Title | Scope |
|------|-------|-------|
| 210 | Current Good Manufacturing Practice in Manufacturing, Processing, Packing, or Holding of Drugs; General | Definitions and the status of the regulations |
| 211 | Current Good Manufacturing Practice for Finished Pharmaceuticals | The operative cGMP rules for finished drug products |
| 212 | cGMP for Positron Emission Tomography Drugs | PET drugs (separate, narrow scope) |
| 600-680 | Biological products | Additional requirements for biologics; 211 still applies |
| 4 | Combination products | cGMP for products combining drug, device, and biologic |

Part 211 is the heart of finished-drug cGMP. It is organized into lettered subparts, A through K, each covering one domain of the operation. Memorize the subpart letters and you can place almost any requirement.

| Subpart | Letter | Domain |
|---------|--------|--------|
| A | General Provisions | Scope, definitions |
| B | Organization and Personnel | The quality unit, training, responsibilities |
| C | Buildings and Facilities | Plant design, cleaning, utilities |
| D | Equipment | Design, cleaning, calibration, automated systems |
| E | Control of Components and Drug Product Containers and Closures | Incoming materials |
| F | Production and Process Controls | Making the product, in-process control |
| G | Packaging and Labeling Control | The single biggest mix-up risk area |
| H | Holding and Distribution | Warehousing and shipping |
| I | Laboratory Controls | Testing, stability, specifications |
| J | Records and Reports | Batch records, complaints, retention |
| K | Returned and Salvaged Drug Products | Returns handling |

Two memory anchors help in interviews. First: the quality unit's authority and the requirement to approve or reject everything lives in Subpart B (211.22). Second: the requirement to investigate every unexplained discrepancy and out of specification result, and to extend the investigation to other batches, lives in Subpart J (211.192). Those two are quoted in more findings than any others.

---

## Part 210: definitions and status

Part 210 is short. It does two jobs.

**210.1** states that the regulations in this part and in parts 211, 213, 225, and 226 are the minimum cGMP for methods, facilities, and controls used in manufacturing, processing, packing, or holding of a drug. It also states the consequence directly: failure to comply renders the drug adulterated under section 501(a)(2)(B), and the person responsible is subject to regulatory action.

**210.2** addresses applicability and how Part 211 interacts with other regulations (for example, biologics regulations in Parts 600-680). Where two cGMP regulations apply, you follow both; the more specific or more stringent requirement governs.

**210.3** is the definitions section. Know these cold, because precise vocabulary separates a strong QA candidate from a weak one:

- **Batch**: a specific quantity of a drug of uniform character and quality, within specified limits, produced according to a single manufacturing order during the same cycle of manufacture.
- **Lot**: a batch, or a specific identified portion of a batch, having uniform character and quality within specified limits; or, for continuous process, a specific identified amount produced in a unit of time or quantity in a manner that assures uniformity.
- **Component**: any ingredient intended for use in the manufacture of a drug product, including those that may not appear in the finished product.
- **Drug product**: a finished dosage form (tablet, capsule, solution) that contains an active ingredient, generally but not necessarily with inactive ingredients.
- **Active ingredient** and **inactive ingredient**: the component intended to furnish pharmacological activity, versus everything else.
- **Quality control unit**: any person or organizational element designated by the firm to perform the quality control responsibilities, defined further in 211.22.
- **Strength**, **theoretical yield**, **actual yield**, **percentage of theoretical yield**, **representative sample**, and **lot number / control number** are all defined here too.

> Interview tip: if asked "what is the difference between a batch and a lot," the clean answer is that a lot can be a batch or an identified portion of a batch. Every lot traces to a batch; a batch can be split into multiple lots.

For deeper treatment of what cGMP means as a discipline, see [what is GMP](/articles/what-is-gmp).

---

## Subpart A and B: scope, the quality unit, and people

### Subpart A: General Provisions (211.1, 211.3)

**211.1** sets scope: these regulations apply to the manufacture, processing, packing, or holding of a drug product, including OTC and prescription human and veterinary drugs. **211.3** points back to the Part 210.3 definitions.

### Subpart B: Organization and Personnel (211.22, 211.25, 211.28, 211.34)

This subpart is small but carries enormous weight, because it establishes the quality unit and human accountability.

**211.22, Responsibilities of the quality control unit.** This is arguably the most-cited section in all of Part 211. It requires:

- A quality control unit with the authority and responsibility to approve or reject all components, drug product containers, closures, in-process materials, packaging, labeling, and finished products, and the authority to review production records.
- Authority to reject any of the above that do not meet established specifications.
- A separate testing function (or contracted testing) adequate to determine conformance.
- Written and approved procedures defining the quality unit's responsibilities, which must be followed.

Why it exists: independence. The person who decides whether to release a batch must be organizationally able to say no, even when production pressure is high. The recurring inspection theme is a quality unit that is understaffed, overruled, or operating without the written procedures the section demands.

**211.25, Personnel qualifications.** Employees must have the education, training, and experience to do their jobs, and that training must be in the particular operations and in cGMP as they relate to those operations. Training must be ongoing and frequent enough to keep people current. See [training program in GxP](/articles/training-program-gxp).

**211.28, Personnel responsibilities.** Clothing, hygiene, restrictions for people with illnesses or open lesions who could contaminate product, and a requirement that only authorized personnel enter manufacturing areas.

**211.34, Consultants.** If you use consultants for cGMP functions, they must be qualified, and you must keep records of their name, address, and qualifications.

#### Worked example: who approves what

A small sterile facility maps Subpart B responsibilities like this:

| Decision | Owner | Regulatory basis |
|----------|-------|------------------|
| Approve or reject incoming API lot | QA on the quality unit | 211.22, 211.84 |
| Approve master batch record | QA, with input from manufacturing and the SME | 211.22, 211.186 |
| Release finished batch for distribution | Designated QA disposition authority | 211.22, 211.165, 211.192 |
| Approve a deviation and its investigation | QA | 211.22, 211.192 |
| Approve OOS investigation conclusion | QA | 211.192, 211.165 |

The pattern: QA on the quality unit owns every approve-or-reject gate. Production proposes, QA disposes. Related reading: [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) and [batch disposition decisions](/articles/batch-disposition-decisions).

#### Common findings in Subpart B

- Quality unit lacks written procedures for its own responsibilities, or has them but does not follow them.
- Quality unit was overruled by production on a release or an investigation, showing it lacks real authority.
- Training records do not show cGMP training or do not cover the specific operations a person performs.
- A person performed a quality-critical task without documented qualification.

---

## Subpart C: Buildings and Facilities

Sections 211.42 through 211.58. This subpart governs the physical plant.

**211.42, Design and construction features.** Adequate space, defined areas (or other control systems) to prevent contamination and mix-ups, and a list of operations needing separation or defined areas: receipt and storage of components, manufacturing, packaging and labeling, quarantine of materials, storage of released materials, control and laboratory operations, and aseptic processing. For sterile products, 211.42(c)(10) requires specific design features including air supply filtered through HEPA filters under positive pressure, an environmental monitoring system, and a system for cleaning and disinfecting to produce aseptic conditions.

**211.44, Lighting.** Adequate lighting in all areas.

**211.46, Ventilation, air filtration, air heating and cooling.** Adequate ventilation, control of air pressure, microorganisms, dust, humidity, and temperature; air filtration where appropriate; and dust control to prevent cross-contamination, especially for penicillin (which has its own dedicated section).

**211.48, Plumbing.** Potable water meeting the EPA primary drinking water standards; drains of adequate size with air breaks or other mechanical devices to prevent back-siphonage.

**211.50, Sewage and refuse.** Disposed of safely and sanitarily.

**211.52, Washing and toilet facilities.** Adequate and clean.

**211.56, Sanitation.** Buildings kept clean and free of infestation; written procedures for cleaning, sanitizing agents, and rodenticide/insecticide use.

**211.58, Maintenance.** Buildings maintained in a good state of repair.

Why this subpart matters: contamination and mix-up are the two failure modes cGMP exists to prevent, and the building is the first line of defense. Subpart C concepts connect directly to [cleanroom classification (ISO 14644)](/articles/cleanroom-classification-iso-14644), the [environmental monitoring program](/articles/environmental-monitoring-program), and [clean utilities qualification](/articles/clean-utilities-qualification).

**Worked example, the penicillin separation rule.** 211.42(d) requires that operations relating to the manufacture of penicillin be performed in facilities separate from those used for other drug products. A site making a beta-lactam and a non-beta-lactam product cannot share air handling or, in practice, the building. This is one of the few absolute physical-separation rules in Part 211, and inspectors look hard for cross-contamination controls around it.

Common findings: inadequate environmental monitoring in aseptic areas, pressure differentials not maintained or not monitored, gaps in cleaning procedures, and facility maintenance issues (peeling paint, condensation) in classified areas.

---

## Subpart D: Equipment

Sections 211.63 through 211.72.

**211.63, Equipment design, size, and location.** Equipment must be suitably designed, sized, and located to facilitate cleaning, maintenance, and proper operation.

**211.65, Equipment construction.** Surfaces that contact components or product must not be reactive, additive, or absorptive so as to alter quality. Lubricants and coolants must not contact product.

**211.67, Equipment cleaning and maintenance.** Equipment cleaned, maintained, and sanitized at appropriate intervals. Written procedures must assign responsibility, specify schedules, methods, equipment, and materials, describe disassembly and reassembly, removal of prior-batch identification, and protection of clean equipment before use. Cleaning and use records are required. This section is the regulatory anchor for [cleaning validation fundamentals](/articles/cleaning-validation-fundamentals) and [cleaning validation execution](/articles/cleaning-validation-execution).

**211.68, Automatic, mechanical, and electronic equipment.** This is the cGMP basis people forget exists for computerized systems. It permits the use of automated equipment and requires:

- Calibration, inspection, or checking according to a written program designed to assure proper performance.
- Written records of those calibration checks.
- Appropriate controls over computers or related systems to assure that changes are instituted only by authorized personnel.
- Input/output verification for accuracy.
- A backup file of data maintained, with assurance that backup data are exact and complete and secure from alteration, erasure, or loss.

211.68 predates Part 11 and sits underneath it. When people debate whether a spreadsheet or a chromatography data system needs controls, 211.68 is the answer for finished-drug operations. See [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11), [chromatography data system integrity](/articles/chromatography-data-system-integrity), and [GAMP 5 CSV framework](/articles/gamp5-csv-framework).

**211.72, Filters.** Filters for liquid filtration must not release fibers; asbestos-containing filters are prohibited for parenteral use.

**Worked example, calibration program acceptance.** A balance used for component weighing falls under 211.68 and 211.160(b)(4). Good practice: documented calibration schedule, calibration against traceable standards, defined acceptance tolerance, an as-found / as-left record, and an out-of-tolerance procedure that triggers an impact assessment on product weighed since the last good calibration. If an inspector asks "what do you do when an instrument fails calibration," the right answer includes the backward-looking impact assessment, not just recalibration. See [calibration and metrology program](/articles/calibration-and-metrology-program).

Common findings: equipment not cleaned per procedure or no cleaning records; automated systems without access controls or audit trails; calibration overdue or out-of-tolerance with no impact assessment; product-contact surfaces of unsuitable material.

---

## Subpart E: Control of Components, Containers, and Closures

Sections 211.80 through 211.94. This subpart governs incoming materials from receipt to release for use.

**211.80, General requirements.** Written procedures for receipt, identification, storage, handling, sampling, testing, and approval or rejection. Components handled and stored to prevent contamination, and stored off the floor and suitably spaced for cleaning and inspection.

**211.82, Receipt and storage of untested components.** On receipt, each container examined for damage and correct labeling; held in quarantine until tested and released.

**211.84, Testing and approval or rejection.** The core gate. Each lot of components, containers, and closures must be:

- Withheld from use until sampled, tested or examined, and released by the quality unit.
- Sampled using a representative sample; the number of containers sampled and the amount taken must be based on appropriate criteria (variability, confidence levels, past quality history).
- Tested for identity, and tested or examined for conformity to written specifications for purity, strength, and quality. At minimum, one specific identity test is required for each component.
- A supplier's certificate of analysis may be accepted in place of full testing for attributes other than identity, but only if the supplier's reliability is established by validation of the supplier's test results at appropriate intervals.

That last point is heavily tested in interviews. You always run your own identity test. You may rely on the supplier's COA for other attributes only after qualifying the supplier and periodically re-verifying their data. See [certificate of analysis](/articles/certificate-of-analysis) and [supplier and vendor qualification](/articles/supplier-vendor-qualification).

**211.86, Use of approved components, containers, and closures.** Stock rotation so the oldest approved stock is used first (FEFO/FIFO), with deviations allowed if not detrimental.

**211.87, Retesting of approved components, containers, and closures.** Retest or re-examine after long storage or exposure to conditions that could adversely affect them.

**211.89, Rejected components, containers, and closures.** Identified and controlled under a quarantine system to prevent use.

**211.94, Drug product containers and closures.** Not reactive, additive, or absorptive; provide adequate protection; standards or specifications, methods of testing, and cleaning/sterilization procedures where appropriate. References USP standards for containers.

**Worked example, an incoming API release decision.**

| Step | Action | Acceptance |
|------|--------|------------|
| Receipt | Inspect containers, verify label vs PO, assign control number, quarantine | No damage; label matches; control number assigned |
| Sampling | Sample per a justified plan (for example a square-root-of-n + 1 container approach for identity) | Representative sample per written procedure |
| Identity | Run an in-house identity test (FTIR, for example) on each sampled container | Spectrum matches reference |
| Other attributes | Review supplier COA for assay, impurities, water content | COA within spec; supplier qualified and COA periodically verified |
| Disposition | QA approves and moves to released status | All criteria met; documented release |

Common findings: accepting supplier COA without doing your own identity test; sampling plans with no scientific justification; no periodic verification of supplier COA data; quarantine that is electronic-status-only with no physical or system control preventing use.

---

## Subpart F: Production and Process Controls

Sections 211.100 through 211.115. This is where the product is made.

**211.100, Written procedures; deviations.** There must be written procedures for production and process control designed to assure the drug products have the identity, strength, quality, and purity they purport to have. These procedures, including any changes, must be drafted, reviewed, and approved by the appropriate organizational units and reviewed and approved by the quality unit. And then the sentence that drives a huge share of deviation systems: procedures must be followed in execution, and any deviation must be recorded and justified.

**211.101, Charge-in of components.** Weighing and measuring components with appropriate controls; one container of a component cannot be added to a batch when the rest of the lot is identified for a different batch; a second verification of identity and weight (the independent check on dispensing).

**211.103, Calculation of yields.** Actual yields and percentages of theoretical yield determined at the conclusion of each appropriate phase, by one person and independently verified by a second.

**211.105, Equipment identification.** Major equipment and lines identified to indicate contents and, where appropriate, the phase of processing; batch identification visible.

**211.110, Sampling and testing of in-process materials and drug products.** Written procedures to monitor and validate the performance of processes that may be responsible for variability. In-process specifications must be consistent with final specs and derived from previous acceptable process average and variability. This is the regulatory home of in-process controls and, in modern reading, of validated processes. Connects to [process validation lifecycle](/articles/process-validation-lifecycle), [continued process verification (CPV)](/articles/continued-process-verification-cpv), and [statistics in quality (Cpk, control charts)](/articles/statistics-in-quality-cpk-control-charts).

**211.111, Time limits on production.** When appropriate, time limits for each phase to assure quality.

**211.113, Control of microbiological contamination.** Written procedures to prevent objectionable microorganisms in nonsterile products and to assure sterility of products purporting to be sterile. Sterilization processes must be validated. This single sentence is the cGMP basis for [aseptic processing and media fills](/articles/aseptic-processing-and-media-fills) and [sterilization validation (moist heat)](/articles/sterilization-validation-moist-heat).

**211.115, Reprocessing.** Written procedures for reprocessing batches that do not conform, with quality unit review and approval.

**Worked example, the second-person dispensing check.** 211.101(c) and 211.103 both build in independent verification. On the floor: operator A weighs 12.50 kg of an excipient, records the weight and balance ID; operator B (or QA) independently confirms the material identity, the weighed amount, and that the right component went to the right batch, and signs. The acceptance criterion is two independent signatures with no shared error. Inspectors read these signatures to confirm the check was real and contemporaneous, not signed in a block at the end of the shift.

Common findings: procedures not followed with deviations neither recorded nor justified (a 211.100 violation, one of the most common citations in the regulation); missing or pencil-whipped second-person verifications; in-process limits not derived from data; sterilization or other critical processes not validated (a 211.113 / 211.110 issue). See [deviation management](/articles/deviation-management) and [process validation for biologics](/articles/process-validation-for-biologics).

---

## Subpart G: Packaging and Labeling Control

Sections 211.122 through 211.137. More label mix-up recalls and findings come from this subpart than almost anywhere else, because a correct product in the wrong label is a dangerous, often class I, error.

**211.122, Materials examination and usage criteria.** Written procedures for receipt, identification, storage, handling, sampling, examination, and testing of labeling and packaging materials. Labeling reconciled and obsolete labeling destroyed. Gang-printed labeling for different products with similar appearance is prohibited unless differentiated.

**211.125, Labeling issuance.** Strict control of labeling issuance; quantities reconciled; discrepancies investigated; excess labeling bearing lot numbers destroyed.

**211.130, Packaging and labeling operations.** Written procedures to assure correct labels are used, including:

- Prevention of mix-ups and cross-contamination by physical or spatial separation from operations on other products.
- Identification of the drug product with a lot or control number that permits determination of the history.
- Examination of packaging and labeling materials for suitability and correctness before operations, documented in the batch record.
- Inspection of the facility before and after use to assure all materials from the prior operation are removed (line clearance).

**211.132, Tamper-evident packaging for OTC human drug products.** The tamper-evident packaging requirement for OTC products.

**211.134, Drug product inspection.** Packaged and labeled products examined to assure correct labeling; a representative sample of units collected and visually examined.

**211.137, Expiration dating.** An expiration date determined by stability testing (per 211.166) on each product, with the date on the label.

**Worked example, line clearance acceptance.** Before a packaging line runs lot B, the prior lot A materials must be fully removed and verified absent. A good line clearance: a written checklist covering the labeler, coder, reject station, and area; a second-person verification; a record of which lot's labels and inserts were removed; and reconciliation counts. Acceptance is zero residual lot A material and two signatures. The classic mix-up is a single stray lot A label left in a feed track that ends up on a lot B bottle.

Common findings: inadequate line clearance leading to label mix-up; label reconciliation not performed or not investigated when out of range; gang printing of similar labels; expiration dating not supported by stability data. See [batch record review (GMP)](/articles/batch-record-review-gmp).

---

## Subpart H: Holding and Distribution

Sections 211.142 and 211.150.

**211.142, Warehousing procedures.** Written procedures for quarantine of products before release, and storage under appropriate conditions of temperature, humidity, and light so identity, strength, quality, and purity are not affected.

**211.150, Distribution procedures.** Written procedures for distribution, including a system by which the distribution of each lot can be readily determined to facilitate recall if necessary, and stock rotation (oldest approved stock distributed first, with controlled exceptions).

Why it matters: the distribution traceability requirement is what makes a recall executable. If you cannot determine where a lot went, you cannot recall it. See [recall management and field actions](/articles/recall-management-field-actions), [cold chain shipping qualification](/articles/cold-chain-shipping-qualification), and [good distribution practice and cold chain](/articles/good-distribution-practice-cold-chain).

Common findings: storage conditions not monitored or excursions not assessed; distribution records that cannot reconstruct lot disposition; FEFO not enforced.

---

## Subpart I: Laboratory Controls

Sections 211.160 through 211.176. This is the second-largest subpart by inspection weight after Subparts F and J, and it is where data integrity and OOS handling live.

**211.160, General requirements.** Specifications, standards, sampling plans, and test procedures must be scientifically sound, established, documented, approved by the quality unit, and followed. Any deviation from written specs or procedures recorded and justified. Laboratory controls include calibration of instruments at suitable intervals per a written program (the lab-side companion to 211.68).

**211.165, Testing and release for distribution.** For each batch, appropriate laboratory testing to determine conformance to final specifications, including identity and strength of each active ingredient, before release. For sterile and pyrogen-free products, the laboratory testing necessary to assure those attributes. Sampling and testing plans, and the central statement: any sampling and testing plan must be in writing and followed, and the batch must meet its specifications. 211.165(f) is direct: drug products failing to meet established standards and other relevant quality criteria shall be rejected.

**211.166, Stability testing.** A written stability program to assess stability characteristics and determine appropriate storage conditions and expiration dates, with sample sizes and test intervals based on statistical criteria, storage under conditions in the program, reliable and specific test methods (stability-indicating), and testing of the product in the same container-closure as marketed. See [stability programs (ICH)](/articles/stability-programs-ich).

**211.167, Special testing requirements.** Sterility and pyrogen testing for products purporting to be sterile and pyrogen-free; ophthalmic ointment testing; controlled-release dosage form testing. See [sterility testing (USP 71)](/articles/sterility-testing-usp-71) and [bioburden and endotoxin testing](/articles/bioburden-and-endotoxin-testing).

**211.170, Reserve samples.** Retain reserve samples of active ingredients and of each lot of drug product, in the marketed container-closure, in quantities at least twice that needed for all required tests (except sterility and pyrogen), retained for the required period after expiration, and visually examined at least annually for deterioration.

**211.173, Laboratory animals.** Maintained and controlled to assure suitability.

**211.176, Penicillin contamination.** If a non-penicillin product is found to contain penicillin (or if reasonable possibility exists), test for penicillin; if present at detectable levels, the product is deemed adulterated.

**The OOS connection.** Although the words "out of specification" do not appear in 211.165 as a defined term, the requirement to investigate failing results comes from 211.192 (Subpart J). The lab side of an OOS, the analyst's responsibilities, retesting rules, and averaging restrictions, is shaped by FDA's guidance "Investigating Out of Specification (OOS) Test Results for Pharmaceutical Production." Know that the regulation requires investigation; the guidance defines the disciplined two-phase approach (laboratory phase, then full-scale investigation). See [OOS investigation process](/articles/oos-investigation-process) and [out of trend investigations](/articles/out-of-trend-investigations).

**Worked example, what release testing must cover.** For a film-coated tablet, 211.165 minimally requires identity and strength of each active ingredient confirmed against final specifications before release. In practice the specification (per the approved application and USP monograph) also covers assay, content uniformity, dissolution, related substances, water content, and microbial limits. The acceptance criterion is conformance of every tested attribute to the written specification; a single confirmed failure means rejection under 211.165(f).

Common findings: this subpart and 211.192 together dominate data integrity warning letters. Recurring patterns include invalidating failing results without a scientific root cause, retesting into compliance, unofficial or "trial" injections not recorded, shared logins and disabled audit trails on lab systems, reserve samples not retained or not examined, and stability methods that are not stability-indicating. See [data integrity foundations](/articles/data-integrity-foundations), [ALCOA+ in detail](/articles/alcoa-plus-deep-dive), and [audit trail design and review](/articles/audit-trail-design-and-review).

---

## Subpart J: Records and Reports

Sections 211.180 through 211.198. If Subpart B gives the quality unit its authority, Subpart J gives the inspection its evidence. Records are the only proof cGMP happened.

**211.180, General requirements.** Records retained for at least 1 year after the expiration date of the batch, or 3 years after distribution of the batch for certain OTC drug products that lack expiration dating because they qualify for the exemption in 211.137. Records available for inspection. Records of equipment, components, and procedures kept. The often-overlooked 211.180(e) requires periodic review of records (an annual product review style requirement) to evaluate quality standards and determine the need for changes. That is the regulatory root of the [annual product review / PQR](/articles/annual-product-review-pqr).

**211.182, Equipment cleaning and use log.** A written record of major equipment cleaning, maintenance, and use, in chronological order.

**211.184, Component, container, closure, and labeling records.** Records covering receipt, examination, testing, inventory, and disposition.

**211.186, Master production and control records (MPCR).** The approved master template for making a batch. Must include: product name and strength; dosage form; a complete list of components with names and amounts and a statement of theoretical weight or measure; a description of containers and closures; complete manufacturing and control instructions, sampling and testing procedures, specifications, special notations, and precautions; and signatures of the preparer (dated) and an independent checker (dated). One master per product, prepared and verified, used to generate each batch record. See [how to write an SOP](/articles/how-to-write-an-sop) for the discipline of controlled documents.

**211.188, Batch production and control records (BPCR).** The executed record of a specific batch, reproduced from the relevant part of the master, with documentation of each significant step: dates; identity of major equipment and lines; specific identification of each batch of component used; weights and measures; in-process and laboratory control results; inspection of packaging and labeling; the identity of the people performing and directly supervising or checking each step; and any sampling performed. This is the document inspectors live in.

**211.192, Production record review.** The most cited investigation requirement in the regulation. All drug product production and control records, including packaging and labeling, must be reviewed and approved by the quality unit to determine compliance before a batch is released. And critically: any unexplained discrepancy or failure of a batch or any of its components to meet any of its specifications must be thoroughly investigated, whether or not the batch has already been distributed. The investigation must extend to other batches of the same product and other products that may have been associated with the failure, and a written record of the investigation must be made and include the conclusions and follow-up.

That last clause is the heart of OOS and deviation management. The investigation does not stop at the failing batch; it asks "what else could be affected." See [deviation management](/articles/deviation-management), [root cause analysis techniques](/articles/root-cause-analysis-techniques), and [what is a CAPA](/articles/what-is-a-capa).

**211.194, Laboratory records.** The contents of a complete test record: a description of the sample (source, quantity, lot number, date); a statement of each method used (with reference to the established method, for example a USP chapter); a statement of the weight or measure of sample used; a complete record of all raw data generated during each test, including graphs, charts, and spectra, properly identified; a record of all calculations; a statement of results and how they compare to specifications; the initials or signature of the person performing the test and the date; and the initials or signature of a second person showing the records were reviewed for accuracy, completeness, and compliance with standards. 211.194(a)(8) (the second-person review) and the "complete record of all data" requirement are quoted in nearly every data integrity warning letter.

**211.196, Distribution records.** Records of distribution to permit recall, including name and strength, lot or control number, name and address of consignee, date and quantity shipped.

**211.198, Complaint files.** Written procedures for handling complaints; a record of each complaint with all information and the investigation; a determination of whether the complaint represents a serious and unexpected adverse drug experience requiring reporting; and review to decide whether an investigation under 211.192 is needed. See [product complaint handling](/articles/product-complaint-handling).

**Worked example, the batch record review checklist.** A QA reviewer disposing a batch under 211.192 confirms, at minimum:

| Check | Acceptance |
|-------|------------|
| All steps documented, signed, dated, in sequence | No blanks; contemporaneous entries; corrections per good documentation practices |
| Each component lot identified and within release status | All components released; weights match dispensing record |
| In-process results within limits | All within specification or deviation raised |
| Yields within expected range | Actual yield reconciled; out-of-range justified |
| Deviations investigated and closed | Each deviation has root cause, impact, CAPA where needed |
| Lab results reviewed and conform | All release tests pass; OOS handled per 211.192 |
| Labeling reconciliation complete | Counts reconcile; discrepancies investigated |

Acceptance for release is every box satisfied with documented justification for anything out of the ordinary. See [batch record review (GMP)](/articles/batch-record-review-gmp), [good documentation practices](/articles/good-documentation-practices), and [batch disposition decisions](/articles/batch-disposition-decisions).

Common findings: incomplete records and blank fields; investigations that do not extend to other batches as 211.192 requires; lab records missing raw data, especially deleted or unsaved electronic data; second-person review not performed or performed without the records present; complaints not evaluated for the need to investigate.

---

## Subpart K: Returned and Salvaged Drug Products

Sections 211.204 and 211.208.

**211.204, Returned drug products.** Returned products identified and held; destroyed unless examination, testing, or other investigation proves they meet appropriate standards. The condition of return (storage, holding) and the time since return inform the decision. Records of returns including reason and disposition.

**211.208, Drug product salvaging.** Products subjected to improper storage (heat, cold, humidity, smoke, fire) cannot be salvaged and returned to the marketplace unless evidence from laboratory tests and inspection shows they meet all standards, and the conditions and effects are evaluated.

Why it exists: a returned or weather-damaged unit may look fine and be degraded. The default is destruction; reuse is the exception that requires proof. Common findings: returned product reintroduced to stock without justified testing; no records of return disposition.

---

## How the subparts map to a real quality system

Part 211 is organized by operation, but a working pharmaceutical quality system (the model in ICH Q10) cuts across it. This mapping helps in interviews when someone asks "where does change control / CAPA / supplier management live in the CFR," because Part 211 does not use those modern names.

| Modern QMS element | Where it sits in Part 211 |
|--------------------|---------------------------|
| Quality unit / governance | 211.22, 211.180(e) |
| Document control | 211.100, 211.186, 211.160 (written, approved, followed) |
| Deviation / discrepancy management | 211.100, 211.192 |
| OOS investigation | 211.192, 211.165 (plus FDA OOS guidance) |
| CAPA | 211.192 (investigation, conclusions, follow-up) |
| Change control | implied across 211.100, 211.160, 211.68 (changes reviewed/approved by quality unit) |
| Supplier qualification | 211.84, 211.160 |
| Training | 211.25 |
| Annual product review | 211.180(e) |
| Complaints | 211.198 |
| Computerized systems / data integrity | 211.68, 211.180, 211.188, 211.194 (plus Part 11) |

The point worth internalizing: "change control" and "CAPA" are not words in Part 211, yet the requirements are unmistakably there. Modern guidance (ICH Q10, ICH Q9 on risk management) names and structures them. See [pharmaceutical quality system](/articles/pharmaceutical-quality-system), [quality risk management](/articles/quality-risk-management), and [change control of validated systems](/articles/change-control-validated-systems).

---

## How Part 211 relates to the rest of the cGMP world

Part 211 covers finished drug products. It is one regulation in a connected set, and knowing the boundaries is interview gold.

- **APIs / drug substance**: Part 211 technically applies to drug products, not APIs. API cGMP is enforced through ICH Q7, which FDA adopted as guidance. See [ICH Q7 API GMP](/articles/ich-q7-api-gmp).
- **Biologics**: Parts 600-680 add requirements; Part 211 still applies to the finished biologic. Cell and gene therapies layer on more. See [ATMP GMP for cell and gene manufacturing](/articles/atmp-gmp-cell-gene-manufacturing).
- **Investigational products**: clinical-phase product is made under cGMP appropriate to the phase; FDA's Phase 1 cGMP guidance and, in the EU, Annex 13, address this. See [GMP for investigational products (Annex 13)](/articles/gmp-for-investigational-products-annex-13).
- **EU equivalent**: the EU GMP guide (EudraLex Volume 4) is the European counterpart; the structure differs but the intent matches. Inspection dynamics differ too. See [FDA vs EMA inspection dynamics](/articles/fda-vs-ema-inspection-dynamics).
- **Electronic records and signatures**: Part 11 sits on top of any Part 211 record kept electronically. See [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11).
- **Medical devices**: a different system entirely, historically the Quality System Regulation (21 CFR 820), now harmonized to ISO 13485 under the QMSR. For a combination product such as a prefilled syringe or an autoinjector, both Part 211 and the device system apply under the Part 4 cGMP framework. See [combination products cGMP (Part 4)](/articles/combination-products-cgmp-part-4).

---

## Putting it to work: tracing a finding to a section

A practical skill, and a common interview exercise, is taking a problem statement and naming the section it violates. Work the logic, not memory alone: identify the operation, find the subpart, then the section.

| Observed problem | Subpart | Section | Reasoning |
|------------------|---------|---------|-----------|
| Operator skipped an SOP step, no deviation raised | F | 211.100 | Procedures must be followed; deviations recorded and justified |
| Failing assay result invalidated without root cause | J | 211.192 | Unexplained failure must be thoroughly investigated |
| API used without an in-house identity test | E | 211.84 | At least one identity test required per lot |
| Lab system shared login, audit trail off | D / J | 211.68, 211.194 | Access controls; complete record of all data |
| Label mix-up from poor line clearance | G | 211.130 | Inspect area before/after to remove prior materials |
| No stability data behind the expiry date | I | 211.137, 211.166 | Expiration determined by stability testing |
| Quality unit overruled by production on release | B | 211.22 | Quality unit has authority to approve or reject |
| Returned product put back in stock untested | K | 211.204 | Returns held; reuse requires proof of conformance |

This "operation to subpart to section" reflex is what separates someone who has read the regulation from someone who can use it. See [audit finding classification](/articles/audit-finding-classification) and [FDA warning letters patterns](/articles/fda-warning-letters-patterns).

---

## Roles and responsibilities across Part 211

| Role | Primary cGMP responsibilities | Key sections |
|------|------------------------------|--------------|
| Quality unit / QA | Approve or reject all materials and product; review and approve records and procedures; disposition batches; own investigations | 211.22, 211.100, 211.165, 211.192 |
| Manufacturing / production | Execute per approved procedures; record contemporaneously; perform and verify in-process steps | 211.100, 211.101, 211.188 |
| QC laboratory | Test to specification; generate and retain complete data; second-person review; stability and reserve samples | 211.160, 211.165, 211.170, 211.194 |
| Materials management / warehouse | Receipt, quarantine, storage conditions, stock rotation, distribution traceability | 211.82, 211.142, 211.150 |
| Engineering / metrology | Equipment design, maintenance, calibration, automated system controls | 211.63, 211.67, 211.68 |
| Site / executive management | Provide resources, ensure quality unit independence, periodic review | 211.22, 211.25, 211.180(e) |
| Consultants / contractors | Qualified for the work; documented qualifications; bound by the same cGMP | 211.34 |

---

## Common mistakes and recurring inspection patterns

Beyond the per-subpart findings above, a few patterns cut across the whole regulation and show up year after year in published FDA warning letters and the agency's annual inspection observation data:

- **"Procedures not followed."** 211.100 and 211.160. The most frequent single theme. A perfect SOP that operators ignore is worse than no SOP.
- **Investigations that do not go deep or wide.** 211.192. Root cause not identified; scope not extended to other batches; CAPA missing or ineffective. See [CAPA effectiveness verification](/articles/capa-effectiveness-verification).
- **Data integrity.** 211.68, 211.188, 211.194. Incomplete records, deleted electronic data, shared logins, disabled audit trails, testing into compliance. This is the single largest theme in recent drug GMP warning letters.
- **Quality unit lacks real authority or written procedures.** 211.22.
- **Laboratory failures handled as "the lab made a mistake" without proof.** 211.192 and OOS guidance. Invalidation requires an assignable laboratory root cause.
- **Inadequate sterility assurance.** 211.42(c), 211.113, 211.167 for sterile products: environmental monitoring gaps, media fill failures, contamination control weaknesses.

If you want the structured way regulators turn these into citations, see [audit finding classification](/articles/audit-finding-classification), [FDA inspection readiness](/articles/fda-inspection-readiness), and [483 and warning letter response](/articles/483-warning-letter-response).

---

## Interview-ready questions and strong answers

**"Walk me through the structure of 21 CFR 211."**
Name the subparts A through K and their domains in order. Then anchor with the two heavyweight sections: 211.22 (quality unit authority) and 211.192 (investigate every discrepancy and extend to other batches). Showing you can place a requirement by subpart, not just recite, is what they are listening for.

**"What is the regulatory basis for second-person review of a batch record?"**
211.192 requires quality unit review and approval of production records before release, and 211.194(a)(8) requires a second person to review laboratory records for accuracy, completeness, and compliance. 211.186 and 211.188 require the records themselves.

**"Where does the requirement to investigate an OOS come from?"**
211.192 ("any unexplained discrepancy or failure ... shall be thoroughly investigated, whether or not the batch has already been distributed"). The two-phase investigation discipline comes from FDA's OOS guidance, not the regulation text. The regulation mandates the investigation; the guidance structures it.

**"Can I rely on a supplier's certificate of analysis instead of testing?"**
For identity, no, you always run at least one in-house identity test (211.84(d)(2)). For other attributes, you may accept the COA only after establishing supplier reliability and validating the supplier's results at appropriate intervals.

**"What is the difference between a master production record and a batch production record?"**
211.186 master = the approved, signed template, one per product. 211.188 batch = the executed record reproduced from the master for a specific batch, capturing each significant step, equipment, component lots, results, and the people who did and checked each step.

**"What makes a drug 'adulterated' under cGMP?"**
Section 501(a)(2)(B) of the FD&C Act: not made in conformity with cGMP. 210.1 ties failure to comply with Part 211 and the related cGMP parts directly to that adulteration finding. This is the legal teeth behind the regulation.

**"Where in Part 211 are computerized systems addressed?"**
211.68 (automated equipment: access controls, input/output checks, backups), plus the records sections 211.180, 211.188, and 211.194 read together with Part 11. Many candidates only cite Part 11 and miss that 211.68 is the cGMP foundation.

**"Why is Subpart G (packaging and labeling) considered high risk?"**
Because a correctly made product with the wrong label is a patient-safety event and a frequent recall cause. 211.122, 211.125, and 211.130 build in label control, reconciliation, gang-printing prohibition, and line clearance precisely because mix-ups are easy and dangerous.

**"How long must batch records be retained?"**
211.180: at least 1 year after the batch expiration date, or 3 years after distribution for certain OTC products that are exempt from expiration dating under 211.137. Reserve samples (211.170) are kept for a set period after expiration and examined at least annually.

---

## Practical tips

- Keep the subpart letters A-K and the two anchor sections (211.22 and 211.192) memorized. From those you can reason your way to almost any other section.
- When you read a warning letter, note the cited section numbers and build a mental frequency map. The same ten or twelve sections appear over and over.
- In your own SOPs, cite the specific Part 211 section in the scope or references, not just "per cGMP." It makes audits faster and forces you to confirm the requirement is real.
- Remember that "current" means the bar moves. A practice that passed inspection a decade ago can be a finding today even though the text is unchanged, because expectations (especially on data integrity) have risen.
- Do not confuse Part 211 (finished drugs) with ICH Q7 (APIs) or the device QMSR. Knowing the boundary is itself a competency.
- The phrases "change control" and "CAPA" are not in the regulation. If an interviewer pushes on that, explain that the requirements are present (211.100, 211.192) even though the modern names come from ICH Q10.

### Closely related reading

- [What is GMP](/articles/what-is-gmp) and [what is a CAPA](/articles/what-is-a-capa) for the foundational concepts.
- [Pharmaceutical quality system](/articles/pharmaceutical-quality-system) and [management review (Q10)](/articles/management-review-q10) for how Part 211 maps to ICH Q10.
- [Batch record review (GMP)](/articles/batch-record-review-gmp) and [batch disposition decisions](/articles/batch-disposition-decisions) for Subpart J in practice.
- [OOS investigation process](/articles/oos-investigation-process) and [deviation management](/articles/deviation-management) for 211.192 applied.
- [Data integrity foundations](/articles/data-integrity-foundations) and [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) for the records and laboratory expectations.
- [GxP quality interview preparation](/articles/gxp-quality-interview-preparation) and [breaking into GxP quality](/articles/breaking-into-gxp-quality) for the broader interview set.
- [ICH Q7 API GMP](/articles/ich-q7-api-gmp) and [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11) for the adjacent regulations.

The regulation rewards the people who actually read it. Most of the cGMP world quotes the same handful of sections from memory, often imprecisely. Carry the subpart map, know what each section actually says, and you will read a finding, write a response, or answer an interviewer with the specificity that the work demands.
