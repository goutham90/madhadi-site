---
title: "Clinical Systems and GCP Digital Quality: EDC, IRT, eTMF, and CTMS"
description: "A practical guide to computerized systems in clinical trials: EDC, IRT/RTSM, eTMF, CTMS, and safety databases. What validation means for clinical systems, what FDA and ICH E6 require, and what inspectors check in a BIMO inspection."
pubDate: 2026-06-02
tags: ["GCP", "clinical systems", "EDC", "validation", "data-integrity", "FDA", "BIMO"]
pillar: "quality-assurance"
tier: "Intermediate"
---

Clinical trial systems operate in a different regulatory frame from GMP systems, but the data integrity and validation obligations carry equivalent weight. The consequences of failure differ. A GMP failure risks product quality. A GCP failure risks the credibility of the evidence base for regulatory approval and, downstream, the safety decisions made about every patient who later takes the product.

That difference shapes everything about how clinical systems are governed. In manufacturing, a single batch can be quarantined and destroyed. In a clinical program, you cannot re-run a study. If randomization integrity is compromised in a Phase 3 trial, you may have spent two years and tens of millions of dollars generating evidence that a reviewer will not trust. The data is the asset, and the system that produced it is the thing an inspector will take apart first.

This article covers the five core clinical computerized systems: EDC, IRT/RTSM, eTMF, CTMS, and safety databases. For each, it describes what compliant validation and data integrity look like, what the sponsor owns versus what the vendor owns, and what an inspector actually asks to see. The audience spans someone meeting these acronyms for the first time, a clinical data manager or validation lead doing the work, and a quality leader deciding how much rigor a program needs before a submission.

---

## The regulatory framework for clinical computerized systems

Three sources govern clinical system requirements in the US context.

**21 CFR Part 11**, Electronic Records; Electronic Signatures. Part 11 applies when electronic records are used to satisfy a predicate rule. For clinical research the predicate rules are 21 CFR Part 312 (Investigational New Drug Application), Part 314 (New Drug Application), and Part 50 and Part 56 (informed consent and institutional review boards). Any system that generates, modifies, maintains, archives, retrieves, or transmits an electronic record that substitutes for a paper record is in scope. The two halves of Part 11 are records controls (Subpart B) and signature controls (Subpart C). Audit trails sit in §11.10(e), authority checks in §11.10(g), and the electronic signature mechanics in §11.50, §11.70, and §11.200-11.300.

**FDA Guidance: Use of Electronic Records and Electronic Signatures in Clinical Investigations Under 21 CFR Part 11, Questions and Answers** (finalized 2023, replacing the 2007 draft on electronic source data and earlier guidance). This is the document that translates Part 11 into clinical specifics. It addresses electronic source data, certified copies, the use of digital health technologies and patient-owned devices, electronic informed consent, and the allocation of responsibility among sponsors, contract research organizations (CROs), and sites. When inspectors talk about Part 11 in a clinical context, this guidance is the lens they apply.

**ICH E6 Good Clinical Practice.** E6(R2), the integrated addendum finalized in 2016, formally added risk-based quality management, sponsor oversight of vendors, and explicit expectations for validated computerized systems and electronic source data. E6(R3), adopted by the ICH in 2025, restructures the guideline around principles and proportionate, risk-based design. R3 keeps and strengthens the requirements that computerized systems be validated, that audit trails capture changes, and that sponsors maintain oversight regardless of how much work is outsourced. Annex 1 of R3 carries the operational detail on systems and data governance.

The EU and UK add their own expectations. The **EMA Guideline on Computerised Systems and Electronic Data in Clinical Trials** (effective 2023) is now the most detailed regulator-issued document on the subject anywhere, covering audit trails, validation, cloud and SaaS arrangements, access management, and direct data capture. The earlier EMA reflection paper on electronic source data (2010) is largely superseded by it. The UK MHRA publishes a **GxP Data Integrity Guidance and Definitions** document and an annual GCP inspection metrics report that, in practice, tells you exactly which clinical system failures inspectors are finding most often.

A note on the predicate rule logic, because it trips people up. Part 11 does not apply to a system in the abstract. It applies because a predicate regulation requires a record and the record is kept electronically. The same EDC platform can be in or out of Part 11 scope depending on whether its records are the ones the regulation requires you to keep. For clinical trial data feeding an IND or NDA, the answer is almost always that you are in scope.

---

## What "validation" means for clinical systems

The term validation in the clinical context means the same thing it means in GMP: documented evidence that a system consistently produces results meeting its predetermined specifications. The practical difference is who does it and who is accountable.

- **GMP systems** are usually validated by the regulated company that owns and operates them.
- **Clinical systems** are usually operated by vendors (CROs, SaaS EDC providers, IRT specialists), yet the sponsor retains regulatory responsibility for the data and the system.

This distinction is the single most misunderstood point in clinical computer system compliance. "The vendor validated it" is not a complete answer, and an inspector will not accept it as one. The sponsor must be able to show that:

1. The vendor's validation documentation is adequate, current, and available for inspection on request.
2. The sponsor's specific study configuration is tested, which is configuration-level validation distinct from platform validation.
3. The system, as configured for the study, meets the applicable Part 11 controls.
4. Audit trails are enabled and capture the right events at the right granularity.
5. Access controls are correct, with individual accounts and timely deprovisioning.

The **GAMP 5 framework**, A Risk-Based Approach to Compliant GxP Computerized Systems (Second Edition, 2022), provides the structure. A vendor-supplied SaaS EDC platform is a GAMP Category 4 (configured) product. The vendor delivers the platform qualification. The sponsor validates the study build on top of it. Both layers are required, and neither substitutes for the other. The complementary concept of risk-based testing effort comes from the FDA's 2022 draft guidance Computer Software Assurance for Production and Quality System Software. CSA is written for production and quality systems rather than clinical, but its core argument, that testing effort should scale with risk and that unscripted and exploratory testing can produce valid evidence, applies cleanly to study configuration testing where the riskiest items (randomization, dispensing logic, eligibility edit checks) deserve the deepest scrutiny and the cosmetic items do not.

For the foundational treatment of these ideas, see [GAMP 5 and the CSV framework](/articles/gamp5-csv-framework) and [Computer Software Assurance](/articles/computer-software-assurance-fda). The Part 11 and Annex 11 specifics are covered in [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11).

### A risk-tiering view of the five systems

Not every clinical system carries the same weight. A useful first move on any program is to rank them by data integrity impact, because that ranking decides where validation and audit trail review effort should concentrate.

| System | Holds primary clinical data? | Patient-safety impact | Typical GAMP category | Data integrity risk |
|---|---|---|---|---|
| EDC | Yes, often the source | High | 4 (configured) | High |
| IRT / RTSM | Randomization and dispensing records | High | 4 or 5 | High |
| Safety database | Yes, safety case data | Very high | 4 (configured) | High |
| eTMF | Evidence of trial conduct | Indirect | 4 (configured) | Medium-high |
| CTMS | Operational tracking | Low to medium | 3 or 4 | Medium, use-dependent |

The point of the table is not the exact label in each cell. It is that EDC, IRT, and the safety database should get the deepest configuration testing and the most active audit trail review, while CTMS effort is calibrated to whatever regulatory-reportable output it actually produces.

---

## Electronic Data Capture (EDC)

EDC is the software used to collect clinical trial data from investigative sites. Commercial platforms in common use include Medidata Rave, Oracle Clinical One, and Veeva Vault EDC, with OpenClinica and REDCap appearing more often in academic and non-commercial settings.

### What EDC must do under GCP and Part 11

**Audit trail requirements.** Every data entry, modification, deletion, and query must be captured in an audit trail. The trail must record who made the change, when (with a contemporaneous, attributable timestamp), what changed (both the original and the new value), and the reason for change where one is required. Audit trails must not be editable by the users who generated the data, and the clock that stamps them must be controlled, not the user's local machine time. Audit trail review is part of the sponsor's data management and monitoring obligations, not an end-of-study clean-up task. The mechanics of designing and reviewing trails are covered in [audit trail design and review](/articles/audit-trail-design-and-review).

**Electronic source data.** When data is entered directly into EDC at the site with no prior paper record, the EDC entry is the source record. The FDA Part 11 clinical guidance requires that source data captured electronically be attributable to the person who entered it, contemporaneously timestamped, and incapable of being altered without the change being documented. This is direct data capture (DDC), and its defining feature is that the EDC audit trail is the only record. There is no paper to fall back on, so the controls on the electronic record carry the full weight of source data integrity. The ALCOA+ attributes that define data integrity, attributable, legible, contemporaneous, original, accurate, complete, consistent, enduring, and available, all attach to that electronic entry. See [ALCOA+ in depth](/articles/alcoa-plus-deep-dive) and [data integrity foundations](/articles/data-integrity-foundations).

**Access controls.** Site personnel must hold individual accounts with role-appropriate access. Shared or generic accounts are not acceptable because they destroy attributability. Authentication must meet the Part 11 §11.300 controls for identification codes and passwords. Account creation, role change, and deactivation must themselves be tracked, which is the access provisioning audit trail an inspector will ask to see. The broader pattern of access governance is treated in [computerized system access control and cybersecurity](/articles/csv-cybersecurity-access-control).

### Configuration validation for EDC

When a study is built in an EDC platform, the build is a configuration, and that configuration is what the sponsor validates. Coverage should include:

- **Edit checks (logic validation rules).** Each rule must be tested to confirm it fires correctly and does not generate false queries. Test both paths. A frequent inspection finding is a production edit check that was only tested on the data that passes, never on the data it is supposed to flag.
- **Visit structure and form layout** verified against the current protocol version, including handling of unscheduled visits and early termination.
- **Randomization and stratification interfaces** where EDC integrates with IRT, tested across the scenario combinations the protocol defines.
- **Derivations and calculated fields** (for example, BMI, eGFR, or visit windows) tested against hand-computed expected values.
- **Data exports** verified to match the statistical analysis plan and the formats the downstream analysis tools expect.
- **Electronic signatures** on case report form (CRF) pages confirmed to meet the Part 11 signature manifestation and meaning requirements.

A worked example shows why path coverage matters. Suppose a protocol requires that systolic blood pressure entries above 180 mmHg trigger a query. A test that enters 120 and sees no query proves nothing about the rule. The validation evidence must show an entry of, say, 190 firing the query, an entry of 180 sitting on the boundary as the protocol defines it, and an entry of 179 staying silent. Three records, not one, and the boundary case is the one that catches off-by-one logic errors.

### What BIMO inspectors check in EDC

FDA's Bioresearch Monitoring (BIMO) program inspects clinical sites, sponsors, and CROs against Compliance Program Guidance Manual 7348.810 (sponsors, CROs, and monitors) and related programs. In an EDC review, inspectors typically request:

- Audit trail extracts for selected subjects, looking for unexplained corrections, date discrepancies, or patterns suggesting data was not entered contemporaneously, for example a cluster of entries made days before a monitoring visit.
- Access control records showing who held what access and when, and whether access was terminated when personnel left the study.
- EDC validation documentation: system qualification, configuration testing, the Part 11 assessment.
- Training records for system use, tied to the version of the system the user was actually working in.
- Query resolution records, watching for queries closed without any corresponding update to source documents, which can indicate compliance-only corrections rather than genuine data correction.

The deeper treatment of clinical data integrity sits in [clinical QA and GCP data integrity](/articles/clinical-qa-gcp-data-integrity).

---

## IRT / RTSM (Interactive Response Technology / Randomization and Trial Supply Management)

IRT, increasingly called RTSM, is the system that manages randomization, drug dispensing, and supply chain logistics for a trial. Every patient randomization and every drug dispense is a GCP-regulated event with a permanent record.

### Why IRT validation is high stakes

IRT decides which treatment arm a patient is assigned to, whether a patient receives the correct study medication, and when drug expiry and resupply actions are triggered. A logic error in any of those can cascade across hundreds of patients and dozens of sites before anyone notices. Misconfigured stratification can leave treatment arms unbalanced, and the only remedies are unblinding, statistical adjustment that a reviewer may not accept, or in the worst case re-running affected work. Dispensing errors put the wrong product in a patient's hands. These are not theoretical risks. Randomization and supply system failures appear in the published GCP inspection findings of multiple regulators.

### IRT validation requirements

IRT platforms are GAMP Category 4 when configured from a commercial product and Category 5 when custom-built, and the validation package scales accordingly. It must cover:

- **Randomization algorithm testing.** Every randomization scenario the protocol defines must be tested with pre-specified expected outcomes, including block size handling and any minimization or adaptive logic.
- **Stratification testing.** Each stratification factor must be verified individually and in combination, since the failure mode is usually an interaction between two factors rather than either one alone.
- **Dispensing logic.** Confirm that dispensing rules fire correctly across all visit types, dose levels, and subject conditions, including dose reductions and re-escalations.
- **Drug accountability.** Verify quantity tracking and that low-stock and expiry alerts fire at the right thresholds and reach the right people.
- **Emergency unblinding.** The unblinding workflow must be tested and documented, including who can unblind, what is recorded, and how the event is reported.
- **User acceptance testing by the study team.** The study pharmacist, project manager, and clinical lead must execute UAT against the protocol, not merely an IT-led functional test. UAT failures here are the ones that catch protocol-to-configuration mismatches that pure technical testing misses.

### Common IRT data integrity issues

- **Paper backup randomization** used when the IRT is unavailable. A manual fallback is acceptable only if it carries the same attributability and reconciliation controls as the system, and the reconciliation back into IRT is documented.
- **Shared site credentials**, the same attributability failure as in EDC, which here means you cannot prove who dispensed which kit to which subject.
- **Protocol amendments not flowing into IRT.** When a visit schedule, dosing rule, or stratification factor changes, the IRT configuration must change through formal change control. Drift between the approved protocol and the live system configuration is a recurring finding. Change control discipline is covered in [change control for validated systems](/articles/change-control-validated-systems).

---

## eTMF (Electronic Trial Master File)

The Trial Master File is the collection of essential documents that, individually and collectively, allow the conduct of a trial and the quality of its data to be reconstructed and evaluated after the fact. The eTMF is the system that holds them. The defining standard for content is ICH E6, and many sponsors map their eTMF structure to the TMF Reference Model, an industry-maintained taxonomy that is not a regulation but is widely treated as a de facto baseline.

### What the TMF must demonstrate

ICH E6 and the underlying FDA regulations require the TMF to contain the essential documents that permit evaluation of the conduct of the trial, the quality of the data collected, and the investigator's and sponsor's compliance with GCP. The eTMF must be complete, organized to a defined structure, contemporaneous in its filing, and available for inspection. Inspectors routinely request eTMF access or a structured export early in a BIMO inspection because the TMF is the map of the whole trial.

### eTMF validation requirements

eTMF platforms are typically GAMP Category 4. Validation covers document upload and metadata capture (document type, date, version, status, site), role-based and site-level access controls, an audit trail for uploads, revisions, moves, and deletions, completeness tracking that compares expected against filed documents, and retention and archival so documents stay retrievable for the full required period. Long-term retrievability is its own discipline, especially across system migrations and decommissioning, treated in [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation) and [data migration validation](/articles/data-migration-validation).

### Inspection readiness for eTMF

A genuinely inspection-ready eTMF is not assembled at close-out. It shows finalized documents filed contemporaneously throughout the trial, a study-specific TMF plan that names expected documents and responsible parties, a completeness metric maintained continuously rather than calculated once at the end, and a clean audit trail. Inspectors look specifically at deletions and at the filing for sites that closed early, because gaps and late bulk uploads are the markers of a TMF that was reconstructed rather than maintained.

---

## CTMS (Clinical Trial Management System)

CTMS manages the operational tracking of a trial: site activation, enrollment, visit tracking, protocol compliance, monitoring activity, and financials. It is generally lower GxP risk than EDC, IRT, the safety database, or eTMF because it typically does not hold the primary clinical data record.

It becomes GxP-impacted, and validation scope grows accordingly, when it generates records used in regulatory submissions (such as enrollment counts or screen-failure tabulations), drives monitoring visit reports that are themselves essential GCP documents, or carries adverse event and serious adverse event tracking. The governing principle is intended use. Validate the CTMS outputs that feed a submission or a GCP decision to the standard those uses demand, and do not over-engineer the purely operational reporting that no regulator will rely on. This is the same proportionality logic that runs through [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology).

---

## Safety databases and SAE reporting

Pharmacovigilance databases (common platforms include Oracle Argus and Veeva Vault Safety) manage adverse event case intake and processing, the generation of Individual Case Safety Reports (ICSRs), MedWatch reports to the FDA via the FAERS gateway, EudraVigilance submissions to the EMA, and the aggregate analyses behind IND annual reports and the Development Safety Update Report (DSUR). These systems carry very high GxP risk because they support patient-safety reporting to regulators on legally mandated timelines, where the 7-day and 15-day expedited reporting windows under 21 CFR 312.32 and ICH E2A leave no room for a system that loses, misroutes, or mis-codes a case.

Validation must cover case processing end to end, with every workflow step from intake to submission tested. The regulatory submission output (ICSRs in the ICH E2B(R3) format and MedWatch forms) must be validated for structural and content accuracy against the receiving gateway's specifications. Duplicate-detection logic must be tested, because both false merges and missed duplicates corrupt the safety signal. The audit trail must capture all case edits, and in particular it must record who changed a causality or expectedness assessment and why, since those are the fields most scrutinized in a pharmacovigilance inspection. The wider safety data integrity picture is covered in [pharmacovigilance and safety data integrity](/articles/pharmacovigilance-safety-data-integrity).

---

## Vendor oversight for clinical computerized systems

Clinical systems are almost always vendor-provided, and the sponsor's obligation does not end at contract signature. ICH E6 is explicit that a sponsor may delegate trial-related duties to a CRO or vendor but never delegates the responsibility for the integrity of the data and the conduct of the trial.

### What vendor oversight means in practice

**Supplier assessment before selection.** Review the vendor's quality system, its independent assurance reporting (a SOC 2 Type II report or equivalent for the hosting and security controls), the platform validation library (qualification protocols and summary reports), and the support materials it provides for study-level configuration testing. The assessment method is the same one used across GxP, described in [supplier and vendor qualification](/articles/supplier-vendor-qualification).

**Contractual requirements.** The agreement should specify the sponsor's right to audit the system and its validation documentation, a defined notice period for software updates (critical for systems carrying study-specific configuration), incident and change notification obligations, data portability and export rights on termination, and retention obligations for audit trails and system logs after the trial closes. The structure of these obligations is the same as a quality agreement, covered in [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements).

**Ongoing oversight.** Updates, patches, and configuration changes require notification and a sponsor-side change impact assessment. A multi-tenant cloud platform does not exempt the sponsor. It demands a more responsive change-oversight process, because the vendor may deploy a change to all customers on its own schedule, and the sponsor still has to assess whether that change touches the study configuration. The validation considerations specific to hosted platforms are in [cloud and SaaS validation](/articles/cloud-saas-validation).

### What oversight does not mean

Oversight is not re-doing the vendor's platform validation. The sponsor tests the study configuration and the vendor maintains the platform qualification. Confusing the two leads to one of two failures: under-oversight, where the sponsor assumes the vendor handles everything and no one validates the study build, or over-validation, where the sponsor burns budget retesting platform functions the vendor already qualified. The skill is drawing the line cleanly and documenting where it sits.

---

## Minimum compliant baseline for an early-stage program

For a company running Phase 1 and Phase 2 studies with a small clinical team and vendor-provided systems, the floor is:

1. **Vendor qualification assessment** on file for each system (EDC, IRT, eTMF), at minimum a completed questionnaire and a review of the vendor's qualification documentation library.
2. **Part 11 assessment** for each system, documenting how it meets the audit trail, access control, and signature controls.
3. **Study-level configuration UAT** for EDC and IRT, tested against the current protocol version, documented and approved before first-patient-in.
4. **Training records** for all users of each system, tied to system version.
5. **Access control procedures** covering how accounts are provisioned and, importantly, deprovisioned when study personnel change.
6. **Data export verification**, at least one documented test confirming that an EDC export matches the format the statistical analysis expects.

---

## Better maturity state

For a company approaching a Biologics License Application (BLA) or New Drug Application and preparing for a BIMO inspection:

- A full validation package per system: vendor-provided installation and operational qualification, sponsor-owned configuration performance qualification, and protocol-driven UAT.
- An ongoing audit trail review program for EDC and IRT that runs throughout the study, not only at lock, with documented review and follow-up of anomalies.
- TMF completeness metrics tracked continuously, with a clear target maintained well before close-out rather than scrambled together at the end.
- A formal change control process for system updates during the live study, with impact assessment and re-testing where warranted.
- A vendor audit on record, a desk audit for an established platform or an on-site audit for a novel or custom system.
- Data integrity review at interim analyses and at database lock, not deferred to close-out.

The connection between this clinical readiness and the overall submission package is drawn in [BLA readiness and the data package](/articles/bla-readiness-data-package) and [FDA inspection readiness](/articles/fda-inspection-readiness).

---

## What an inspector asks

In a BIMO inspection of a sponsor, expect questions that move from documentation to a specific record very quickly:

- "Show me the validation documentation for your EDC system." Then: "Who performed the UAT, and against which protocol version?"
- "Show me the audit trail for subject [ID]. Why was this field changed after the visit date, and where is the corresponding source update?"
- "What is your process when a site user leaves the study?" testing access termination timeliness.
- "When did your EDC vendor last push a software update, and how did you assess its impact on your study?"
- "Where is the TMF, and how do you track completeness?" Then: "Show me the filing for the sites that closed early."
- "How are serious adverse events captured and reported? Walk me through one case from receipt to submission, and show me the audit trail on the causality assessment."

The pattern is consistent across all five systems. The inspector starts with the controls you claim to have, then picks a real record and asks you to prove the controls actually held for that record. A program that can do that for any subject, any document, and any case is inspection-ready. One that can only show the policy is not.

---

## References

- 21 CFR Part 11: Electronic Records; Electronic Signatures
- 21 CFR Part 312: Investigational New Drug Application (including §312.32 safety reporting)
- FDA Guidance: Use of Electronic Records and Electronic Signatures in Clinical Investigations Under 21 CFR Part 11, Questions and Answers (2023)
- FDA Draft Guidance: Computer Software Assurance for Production and Quality System Software (2022)
- FDA Bioresearch Monitoring (BIMO) Compliance Program 7348.810: Sponsors, Contract Research Organizations, and Monitors
- ICH E6(R2): Guideline for Good Clinical Practice (2016)
- ICH E6(R3): Guideline for Good Clinical Practice (2025)
- ICH E2A and E2B(R3): clinical safety data management and electronic ICSR transmission
- EMA Guideline on Computerised Systems and Electronic Data in Clinical Trials (effective 2023)
- MHRA GxP Data Integrity Guidance and Definitions
- GAMP 5: A Risk-Based Approach to Compliant GxP Computerized Systems, Second Edition (2022)
