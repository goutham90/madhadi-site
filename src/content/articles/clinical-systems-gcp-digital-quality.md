---
title: "Clinical Systems and GCP Digital Quality: EDC, IRT, eTMF, and CTMS"
description: "A practical guide to computerized systems in clinical trials: EDC, IRT/RTSM, eTMF, CTMS, and safety databases. What validation means for clinical systems, what FDA and ICH E6 require, who owns what between sponsor and vendor, and what inspectors check in a BIMO inspection."
pubDate: 2026-06-02
tags: ["GCP", "clinical systems", "EDC", "validation", "data-integrity", "FDA", "BIMO"]
pillar: "quality-assurance"
tier: "Intermediate"
---

Clinical trial systems operate in a different regulatory frame from GMP systems, but the data integrity and validation obligations carry equivalent weight. The consequences of failure differ. A GMP failure risks product quality. A GCP failure risks the credibility of the evidence base for regulatory approval and, downstream, the safety decisions made about every patient who later takes the product.

That difference shapes everything about how clinical systems are governed. In manufacturing, a single batch can be quarantined and destroyed. In a clinical program, you cannot re-run a study. If randomization integrity is compromised in a Phase 3 trial, you may have spent two years and tens of millions of dollars generating evidence that a reviewer will not trust. The data is the asset, and the system that produced it is the thing an inspector will take apart first.

This article covers the five core clinical computerized systems: EDC, IRT/RTSM, eTMF, CTMS, and safety databases. For each, it describes what compliant validation and data integrity look like, what the sponsor owns versus what the vendor owns, and what an inspector actually asks to see. The audience spans someone meeting these acronyms for the first time, a clinical data manager or validation lead doing the work, and a quality leader deciding how much rigor a program needs before a submission.

The principles here apply across pharmaceuticals, biologics, vaccines, and medical devices. A device trial running under 21 CFR Part 812 uses the same EDC, the same eTMF discipline, and the same Part 11 controls as a drug trial running under Part 312. The predicate rule changes, the system obligations do not.

---

## The regulatory framework for clinical computerized systems

Three sources govern clinical system requirements in the US context, with EU and UK documents adding operational detail.

**21 CFR Part 11**, Electronic Records; Electronic Signatures. Part 11 applies when electronic records are used to satisfy a predicate rule. For clinical research the predicate rules are 21 CFR Part 312 (Investigational New Drug Application), Part 314 (New Drug Application), Part 812 (Investigational Device Exemption), and Part 50 and Part 56 (informed consent and institutional review boards). Any system that generates, modifies, maintains, archives, retrieves, or transmits an electronic record that substitutes for a paper record is in scope. The two halves of Part 11 are records controls (Subpart B) and signature controls (Subpart C). Audit trails sit in §11.10(e), authority checks in §11.10(g), and the electronic signature mechanics in §11.50, §11.70, and §11.200 through §11.300.

**FDA Guidance: Electronic Systems, Electronic Records, and Electronic Signatures in Clinical Investigations: Questions and Answers** (final guidance issued 2 October 2024, finalizing the March 2023 draft and superseding the May 2007 final guidance Computerized Systems Used in Clinical Investigations and earlier guidance). This is the document that translates Part 11 into clinical specifics. It addresses electronic source data, certified copies, the use of digital health technologies and patient-owned devices, electronic informed consent, and the allocation of responsibility among sponsors, contract research organizations (CROs), and sites. When inspectors talk about Part 11 in a clinical context, this guidance is the lens they apply.

**ICH E6 Good Clinical Practice.** E6(R2), the integrated addendum finalized in 2016, formally added risk-based quality management, sponsor oversight of vendors, and explicit expectations for validated computerized systems and electronic source data. E6(R3), adopted by the ICH in 2025, restructures the guideline around principles and proportionate, risk-based design. R3 keeps and strengthens the requirements that computerized systems be validated, that audit trails capture changes, and that sponsors maintain oversight regardless of how much work is outsourced. Annex 1 of R3 carries the operational detail on systems and data governance. The full treatment is in [ICH E6 Good Clinical Practice](/articles/ich-e6-good-clinical-practice).

The EU and UK add their own expectations. The **EMA Guideline on Computerised Systems and Electronic Data in Clinical Trials** (effective 2023) is the most detailed regulator-issued document on the subject anywhere, covering audit trails, validation, cloud and SaaS arrangements, access management, and direct data capture. The earlier EMA reflection paper on electronic source data (2010) is largely superseded by it. The UK MHRA publishes a **GxP Data Integrity Guidance and Definitions** document and an annual GCP inspection metrics report that, in practice, tells you which clinical system failures inspectors are finding most often.

A note on the predicate rule logic, because it trips people up. Part 11 does not apply to a system in the abstract. It applies because a predicate regulation requires a record and the record is kept electronically. The same EDC platform can be in or out of Part 11 scope depending on whether its records are the ones the regulation requires you to keep. For clinical trial data feeding an IND, NDA, BLA, or device submission, the answer is almost always that you are in scope. The Part 11 and Annex 11 mechanics are covered in [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11) and a working-level version in [Part 11 and Annex 11 practical guide](/articles/part-11-annex-11-practical-guide).

### Who governs what: a quick map

| Source | Type | What it controls for clinical systems |
|---|---|---|
| 21 CFR Part 11 | US regulation | Audit trails, access, e-signatures on electronic records |
| 21 CFR Part 312 / 314 / 812 | US predicate rules | Why the records exist; safety reporting timelines |
| FDA Part 11 clinical Q&A (2024) | US guidance | Electronic source, eConsent, sponsor/CRO/site responsibility |
| ICH E6(R2)/(R3) | International GCP | Validated systems, audit trails, sponsor oversight |
| ICH E2A / E2B(R3) | International safety | Case management, electronic ICSR format |
| EMA Computerised Systems guideline (2023) | EU guidance | Validation, audit trails, cloud, direct data capture |
| MHRA GxP DI Guidance | UK guidance | Data integrity definitions and expectations |
| GAMP 5 (2nd ed, 2022) | Industry framework | Risk-based validation lifecycle |

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

The **GAMP 5 framework**, A Risk-Based Approach to Compliant GxP Computerized Systems (Second Edition, 2022), provides the structure. A vendor-supplied SaaS EDC platform is a GAMP Category 4 (configured) product. The vendor delivers the platform qualification. The sponsor validates the study build on top of it. Both layers are required, and neither substitutes for the other. The complementary concept of risk-based testing effort comes from the FDA's Computer Software Assurance guidance, issued as a draft in 2022 and finalized on 24 September 2025 as Computer Software Assurance for Production and Quality Management System Software. CSA is written for production and quality systems rather than clinical, but its core argument, that testing effort should scale with risk and that unscripted and exploratory testing can produce valid evidence, applies cleanly to study configuration testing. The riskiest items (randomization, dispensing logic, eligibility edit checks) deserve the deepest scrutiny and the cosmetic items do not.

For the foundational treatment of these ideas, see [GAMP 5 and the CSV framework](/articles/gamp5-csv-framework) and [Computer Software Assurance](/articles/computer-software-assurance-fda).

### The two-layer validation model, made concrete

The cleanest way to keep sponsor and vendor responsibility straight is to draw the line as two stacked layers and write down which deliverable lives in each.

| Layer | Owner | Deliverables | What it proves |
|---|---|---|---|
| Platform qualification | Vendor | URS for the product, IQ/OQ, platform validation summary, infrastructure qualification, SOC 2 Type II | The base product works as designed and the hosting is controlled |
| Study configuration validation | Sponsor (or sponsor-directed CRO) | Configuration spec, edit-check test scripts, UAT, data export verification, Part 11 configuration assessment, traceability matrix | The study build (forms, checks, randomization, exports) works against this protocol |

A practical test: if a finding would be identical across every study on the platform, it belongs to the vendor layer. If a finding is specific to your protocol version, your visit schedule, or your edit checks, it belongs to the sponsor layer. The skill is drawing that line and documenting where it sits, because the two most common failure modes are under-oversight (no one validated the study build) and over-validation (the sponsor burns budget retesting platform functions the vendor already qualified).

### A risk-tiering view of the five systems

Not every clinical system carries the same weight. A useful first move on any program is to rank them by data integrity impact, because that ranking decides where validation and audit trail review effort should concentrate.

| System | Holds primary clinical data? | Patient-safety impact | Typical GAMP category | Data integrity risk |
|---|---|---|---|---|
| EDC | Yes, often the source | High | 4 (configured) | High |
| IRT / RTSM | Randomization and dispensing records | High | 4 or 5 | High |
| Safety database | Yes, safety case data | Very high | 4 (configured) | High |
| eTMF | Evidence of trial conduct | Indirect | 4 (configured) | Medium-high |
| CTMS | Operational tracking | Low to medium | 3 or 4 | Medium, use-dependent |

The point of the table is not the exact label in each cell. It is that EDC, IRT, and the safety database should get the deepest configuration testing and the most active audit trail review, while CTMS effort is calibrated to whatever regulatory-reportable output it actually produces. The method for assigning these tiers is in [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology) and [data criticality and data risk](/articles/data-criticality-and-data-risk).

---

## Electronic Data Capture (EDC)

EDC is the software used to collect clinical trial data from investigative sites. Commercial platforms in common use include Medidata Rave, Oracle Clinical One, and Veeva Vault EDC, with OpenClinica and REDCap appearing more often in academic and non-commercial settings. These are named only as neutral examples of the category.

### What EDC must do under GCP and Part 11

**Audit trail requirements.** Every data entry, modification, deletion, and query must be captured in an audit trail. The trail must record who made the change, when (with a contemporaneous, attributable timestamp), what changed (both the original and the new value), and the reason for change where one is required. Audit trails must not be editable by the users who generated the data, and the clock that stamps them must be controlled, not the user's local machine time. Audit trail review is part of the sponsor's data management and monitoring obligations, not an end-of-study clean-up task. The mechanics of designing and reviewing trails are covered in [audit trail design and review](/articles/audit-trail-design-and-review) and [operationalizing audit trail review](/articles/operationalizing-audit-trail-review). Clock control specifically is in [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).

**Electronic source data.** When data is entered directly into EDC at the site with no prior paper record, the EDC entry is the source record. The FDA Part 11 clinical guidance requires that source data captured electronically be attributable to the person who entered it, contemporaneously timestamped, and incapable of being altered without the change being documented. This is direct data capture (DDC), and its defining feature is that the EDC audit trail is the only record. There is no paper to fall back on, so the controls on the electronic record carry the full weight of source data integrity. The ALCOA+ attributes that define data integrity, attributable, legible, contemporaneous, original, accurate, complete, consistent, enduring, and available, all attach to that electronic entry. See [ALCOA+ in detail](/articles/alcoa-plus-deep-dive), [data integrity foundations](/articles/data-integrity-foundations), and the clinical-specific [source data and source data verification](/articles/source-data-and-sdv-clinical).

**Access controls.** Site personnel must hold individual accounts with role-appropriate access. Shared or generic accounts are not acceptable because they destroy attributability. Authentication must meet the Part 11 §11.300 controls for identification codes and passwords. Account creation, role change, and deactivation must themselves be tracked, which is the access provisioning audit trail an inspector will ask to see. The broader pattern of access governance is treated in [computerized system access control and cybersecurity](/articles/csv-cybersecurity-access-control), and signing on a CRF page in [electronic signatures implementation](/articles/electronic-signatures-implementation).

### Configuration validation for EDC: step by step

When a study is built in an EDC platform, the build is a configuration, and that configuration is what the sponsor validates. A workable sequence:

1. **Write the configuration specification.** Capture the visit structure, every form, every edit check with its logic, derivations, randomization and dispensing interfaces, and the export definitions. This is your requirement baseline. Trace each item to a protocol section so the traceability is built in from the start. See [user requirements and traceability](/articles/user-requirements-and-traceability).
2. **Build in a validation (test) environment** that is configuration-identical to production, never directly in production.
3. **Write test scripts** that cover both the pass path and the fail path of every edit check, every derivation against a hand-computed expected value, and every export against the statistical analysis plan format.
4. **Execute, with evidence.** Record actual results, screenshots of fired and unfired checks, and the export file itself. Log any failure as a documented deviation and re-test after the fix. See [validation test failure management](/articles/validation-test-failure-management).
5. **Run study-team UAT.** A data manager and a clinical lead exercise the build against the protocol, not against the spec, to catch protocol-to-build mismatches that script testing misses.
6. **Migrate to production under change control** and confirm the production build matches the validated build (a configuration comparison or re-confirmation of key checks). Approve before first-patient-in.
7. **Summarize in a validation report**, traceability complete, open items resolved or risk-accepted with rationale. See [validation summary report and release](/articles/validation-summary-report-and-release).

Coverage inside those steps should include:

- **Edit checks (logic validation rules).** Each rule tested on both paths. A frequent inspection finding is a production edit check tested only on the data that passes, never on the data it is supposed to flag.
- **Visit structure and form layout** verified against the current protocol version, including unscheduled visits and early termination.
- **Randomization and stratification interfaces** where EDC integrates with IRT, tested across the protocol's scenario combinations.
- **Derivations and calculated fields** (BMI, eGFR, visit windows) tested against hand-computed expected values.
- **Data exports** verified to match the statistical analysis plan and the downstream analysis formats, including CDISC SDTM mapping where applicable. See [clinical data management and CDISC](/articles/clinical-data-management-cdisc).
- **Electronic signatures** on case report form (CRF) pages confirmed to meet the Part 11 signature manifestation and meaning requirements.

A worked example shows why path coverage matters. Suppose a protocol requires that systolic blood pressure entries above 180 mmHg trigger a query. A test that enters 120 and sees no query proves nothing about the rule. The validation evidence must show an entry of 190 firing the query, an entry of 181 firing as the first value above the threshold, and an entry of 180 staying silent because 180 is not above 180. Three records, not one, and the boundary case is the one that catches off-by-one logic errors. A filled-in test line looks like this:

| Test ID | Check | Input | Expected | Actual | Evidence | Result |
|---|---|---|---|---|---|---|
| EC-014a | SBP high alert | SBP = 190 | Query fires | Query fired | Screenshot 14a | Pass |
| EC-014b | SBP boundary above | SBP = 181 | Query fires (first value above 180) | Query fired | Screenshot 14b | Pass |
| EC-014c | SBP boundary at limit | SBP = 180 | No query (180 is not above 180) | No query | Screenshot 14c | Pass |

### Acceptance criteria for an EDC build

You know the build is validated when: every edit check has documented pass-path and fail-path evidence; every derivation matches an independent hand calculation; the export matches the SAP-specified format byte for field; UAT is signed by data management and clinical; the traceability matrix shows no requirement without a test and no test without a requirement; the Part 11 configuration assessment is complete; and the production build is confirmed identical to the validated build before first-patient-in.

### What BIMO inspectors check in EDC

FDA's Bioresearch Monitoring (BIMO) program inspects clinical sites, sponsors, and CROs against Compliance Program Guidance Manual 7348.810 (sponsors, CROs, and monitors) and related programs (7348.811 for clinical investigators, 7348.809 for IRBs). In an EDC review, inspectors typically request:

- Audit trail extracts for selected subjects, looking for unexplained corrections, date discrepancies, or patterns suggesting data was not entered contemporaneously, for example a cluster of entries made days before a monitoring visit.
- Access control records showing who held what access and when, and whether access was terminated when personnel left the study.
- EDC validation documentation: system qualification, configuration testing, the Part 11 assessment.
- Training records for system use, tied to the version of the system the user was actually working in.
- Query resolution records, watching for queries closed without any corresponding update to source documents, which can indicate compliance-only corrections rather than genuine data correction.

The deeper treatment of clinical data integrity sits in [clinical QA and GCP data integrity](/articles/clinical-qa-gcp-data-integrity) and the inspection mechanics in [GCP audits and inspections](/articles/gcp-audits-and-inspections).

### Common EDC mistakes and inspection-finding patterns

- Edit checks validated on the pass path only, so the rule that should flag bad data was never proven to flag it.
- Shared or role-based generic logins at a site, destroying attributability.
- Access not deprovisioned when a coordinator leaves, leaving a live account for someone no longer on the study.
- Audit trail review treated as a database-lock activity rather than an ongoing one, so anomalies surface months after they could have been corrected at source.
- Training records that reference a system version different from the one the user actually worked in after an upgrade.
- Exports never reconciled against the SAP, surfacing as analysis rework or, worse, a mismatch found at submission.

---

## IRT / RTSM (Interactive Response Technology / Randomization and Trial Supply Management)

IRT, increasingly called RTSM, is the system that manages randomization, drug dispensing, and supply chain logistics for a trial. Every patient randomization and every drug dispense is a GCP-regulated event with a permanent record.

### Why IRT validation is high stakes

IRT decides which treatment arm a patient is assigned to, whether a patient receives the correct study medication, and when drug expiry and resupply actions are triggered. A logic error in any of those can cascade across hundreds of patients and dozens of sites before anyone notices. Misconfigured stratification can leave treatment arms unbalanced, and the only remedies are unblinding, statistical adjustment that a reviewer may not accept, or in the worst case re-running affected work. Dispensing errors put the wrong product in a patient's hands. These are not theoretical risks. Randomization and supply system failures appear in the published GCP inspection findings of multiple regulators. IRT also intersects with GMP for the investigational product, since labeling and accountability fall under [GMP for investigational products (Annex 13)](/articles/gmp-for-investigational-products-annex-13).

### IRT validation requirements

IRT platforms are GAMP Category 4 when configured from a commercial product and Category 5 when custom-built, and the validation package scales accordingly. It must cover:

- **Randomization algorithm testing.** Every randomization scenario the protocol defines must be tested with pre-specified expected outcomes, including block size handling and any minimization or adaptive logic.
- **Stratification testing.** Each stratification factor must be verified individually and in combination, since the failure mode is usually an interaction between two factors rather than either one alone.
- **Dispensing logic.** Confirm that dispensing rules fire correctly across all visit types, dose levels, and subject conditions, including dose reductions and re-escalations.
- **Drug accountability.** Verify quantity tracking and that low-stock and expiry alerts fire at the right thresholds and reach the right people.
- **Emergency unblinding.** The unblinding workflow must be tested and documented, including who can unblind, what is recorded, and how the event is reported.
- **User acceptance testing by the study team.** The study pharmacist, project manager, and clinical lead must execute UAT against the protocol, not merely an IT-led functional test. UAT failures here are the ones that catch protocol-to-configuration mismatches that pure technical testing misses.

### A worked IRT test: stratified block randomization

Take a two-arm trial, 1:1 allocation, permuted blocks of 4, stratified by two factors: prior therapy (yes/no) and region (A/B). The failure mode is almost never a single factor; it is the interaction. A defensible test deck enumerates the strata and confirms balance and block integrity within each cell:

| Stratum | Prior therapy | Region | Subjects enrolled | Expected arm split | Observed | Block integrity |
|---|---|---|---|---|---|---|
| S1 | Yes | A | 8 | 4 / 4 | 4 / 4 | Each block of 4 balanced |
| S2 | Yes | B | 8 | 4 / 4 | 4 / 4 | Each block of 4 balanced |
| S3 | No | A | 8 | 4 / 4 | 4 / 4 | Each block of 4 balanced |
| S4 | No | B | 8 | 4 / 4 | 4 / 4 | Each block of 4 balanced |

Acceptance criteria: each stratum draws from its own randomization list, the within-block balance holds, the list is not reused across strata, and an attempt to randomize a subject with a missing stratification value is handled per protocol (blocked or routed to a defined default), not silently mis-assigned. The same deck should include a dispensing case (correct kit number, correct dose level) and a low-stock trigger confirming the resupply alert fires at the configured threshold.

### Common IRT data integrity issues

- **Paper backup randomization** used when the IRT is unavailable. A manual fallback is acceptable only if it carries the same attributability and reconciliation controls as the system, and the reconciliation back into IRT is documented.
- **Shared site credentials**, the same attributability failure as in EDC, which here means you cannot prove who dispensed which kit to which subject.
- **Protocol amendments not flowing into IRT.** When a visit schedule, dosing rule, or stratification factor changes, the IRT configuration must change through formal change control. Drift between the approved protocol and the live system configuration is a recurring finding. Change control discipline is covered in [change control for validated systems](/articles/change-control-validated-systems).
- **Unblinding events not reconciled** against the safety database and the final analysis, so an emergency unblinding at a site never reaches the statistician or the safety team.

---

## eTMF (Electronic Trial Master File)

The Trial Master File is the collection of essential documents that, individually and collectively, allow the conduct of a trial and the quality of its data to be reconstructed and evaluated after the fact. The eTMF is the system that holds them. The defining standard for content is ICH E6, and many sponsors map their eTMF structure to the TMF Reference Model, an industry-maintained taxonomy that is not a regulation but is widely treated as a de facto baseline. The dedicated article is [eTMF and the Trial Master File](/articles/etmf-trial-master-file).

### What the TMF must demonstrate

ICH E6 and the underlying FDA regulations require the TMF to contain the essential documents that permit evaluation of the conduct of the trial, the quality of the data collected, and the investigator's and sponsor's compliance with GCP. The eTMF must be complete, organized to a defined structure, contemporaneous in its filing, and available for inspection. Inspectors routinely request eTMF access or a structured export early in a BIMO inspection because the TMF is the map of the whole trial.

### eTMF validation requirements

eTMF platforms are typically GAMP Category 4. Validation covers document upload and metadata capture (document type, date, version, status, site), role-based and site-level access controls, an audit trail for uploads, revisions, moves, and deletions, completeness tracking that compares expected against filed documents, and retention and archival so documents stay retrievable for the full required period. Long-term retrievability is its own discipline, especially across system migrations and decommissioning, treated in [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation) and [data migration validation](/articles/data-migration-validation).

### Inspection readiness for eTMF

A genuinely inspection-ready eTMF is not assembled at close-out. It shows finalized documents filed contemporaneously throughout the trial, a study-specific TMF plan that names expected documents and responsible parties, a completeness metric maintained continuously rather than calculated once at the end, and a clean audit trail. A simple continuous metric looks like this:

| TMF zone | Expected docs | Filed | Missing/overdue | Completeness |
|---|---|---|---|---|
| Trial management | 120 | 118 | 2 | 98% |
| Regulatory / IRB | 240 | 235 | 5 | 98% |
| Site management | 980 | 902 | 78 | 92% |
| Safety reporting | 60 | 60 | 0 | 100% |

Inspectors look specifically at deletions and at the filing for sites that closed early, because gaps and late bulk uploads are the markers of a TMF that was reconstructed rather than maintained. A spike of documents all uploaded in the week before a lock or an inspection is the classic tell.

---

## CTMS (Clinical Trial Management System)

CTMS manages the operational tracking of a trial: site activation, enrollment, visit tracking, protocol compliance, monitoring activity, and financials. It is generally lower GxP risk than EDC, IRT, the safety database, or eTMF because it typically does not hold the primary clinical data record.

It becomes GxP-impacted, and validation scope grows accordingly, when it generates records used in regulatory submissions (such as enrollment counts or screen-failure tabulations), drives monitoring visit reports that are themselves essential GCP documents, or carries adverse event and serious adverse event tracking. The governing principle is intended use. Validate the CTMS outputs that feed a submission or a GCP decision to the standard those uses demand, and do not over-engineer the purely operational reporting that no regulator will rely on. This is the same proportionality logic that runs through [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology). CTMS also feeds risk-based monitoring decisions, covered in [risk-based monitoring in clinical trials](/articles/risk-based-monitoring-clinical).

---

## Safety databases and SAE reporting

Pharmacovigilance databases (common platforms include Oracle Argus and Veeva Vault Safety) manage adverse event case intake and processing, the generation of Individual Case Safety Reports (ICSRs), MedWatch reports to the FDA, EudraVigilance submissions to the EMA, and the aggregate analyses behind IND annual reports and the Development Safety Update Report (DSUR). These systems carry very high GxP risk because they support patient-safety reporting to regulators on legally mandated timelines.

The IND safety reporting clock under 21 CFR 312.32 leaves no room for a system that loses, misroutes, or mis-codes a case. The two windows: a serious and unexpected suspected adverse reaction that is fatal or life-threatening is reported within 7 calendar days; other serious, unexpected, and reasonably possibly related events within 15 calendar days. ICH E2A defines the underlying concepts of seriousness, expectedness, and causality, and ICH E2B(R3) defines the electronic ICSR transmission format. Missing a window because of a system gap is both a safety failure and a reporting violation.

Validation must cover case processing end to end, with every workflow step from intake to submission tested. The regulatory submission output (ICSRs in the ICH E2B(R3) format and MedWatch forms) must be validated for structural and content accuracy against the receiving gateway's specifications. Duplicate-detection logic must be tested, because both false merges and missed duplicates corrupt the safety signal. The audit trail must capture all case edits, and in particular it must record who changed a causality or expectedness assessment and why, since those are the fields most scrutinized in a pharmacovigilance inspection. The wider safety data integrity picture is covered in [pharmacovigilance and safety data integrity](/articles/pharmacovigilance-safety-data-integrity).

---

## Roles and responsibilities across the five systems

A recurring inspection question is "who is accountable for this," and a program that cannot answer cleanly looks disorganized regardless of how good the documentation is. The split below is typical; the names of functions vary by organization, the responsibilities do not.

| Activity | Sponsor QA / CSV | Clinical data management | Clinical operations | Pharmacovigilance | Vendor / CRO |
|---|---|---|---|---|---|
| Vendor selection and qualification | Approve | Input | Input | Input (safety system) | Provide evidence |
| Platform qualification (IQ/OQ) | Review | Review | - | - | Own and execute |
| Study configuration validation | Oversee / approve | Own (EDC) | Own (IRT UAT) | Own (safety) | Execute build/test support |
| Part 11 assessment per system | Own | Input | Input | Input | Provide platform evidence |
| Access provisioning and review | Define policy, audit | Manage EDC users | Manage IRT users | Manage safety users | Enforce in platform |
| Audit trail review (ongoing) | Audit the program | Own (EDC) | Own (IRT) | Own (safety) | Provide extracts |
| Change control on live system | Approve impact | Assess EDC impact | Assess IRT impact | Assess safety impact | Notify and deploy |
| TMF completeness | Audit | File data docs | Own the plan | File safety docs | File delegated docs |
| Inspection response | Lead | Support | Support | Support | Support on request |

The non-negotiable line: the sponsor may delegate the work but never the responsibility. ICH E6 is explicit on this. See [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) for the broader org view.

---

## Vendor oversight for clinical computerized systems

Clinical systems are almost always vendor-provided, and the sponsor's obligation does not end at contract signature. ICH E6 is explicit that a sponsor may delegate trial-related duties to a CRO or vendor but never delegates the responsibility for the integrity of the data and the conduct of the trial.

### What vendor oversight means in practice

**Supplier assessment before selection.** Review the vendor's quality system, its independent assurance reporting (a SOC 2 Type II report or equivalent for the hosting and security controls), the platform validation library (qualification protocols and summary reports), and the support materials it provides for study-level configuration testing. The assessment method is the same one used across GxP, described in [supplier and vendor qualification](/articles/supplier-vendor-qualification) and [software supplier assessment](/articles/software-supplier-assessment-csa).

**Contractual requirements.** The agreement should specify the sponsor's right to audit the system and its validation documentation, a defined notice period for software updates (critical for systems carrying study-specific configuration), incident and change notification obligations, data portability and export rights on termination, and retention obligations for audit trails and system logs after the trial closes. The structure of these obligations mirrors a quality agreement, covered in [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements).

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

For a company approaching a Biologics License Application (BLA), New Drug Application, or device submission and preparing for a BIMO inspection:

- A full validation package per system: vendor-provided installation and operational qualification, sponsor-owned configuration performance qualification, and protocol-driven UAT.
- An ongoing audit trail review program for EDC and IRT that runs throughout the study, not only at lock, with documented review and follow-up of anomalies.
- TMF completeness metrics tracked continuously, with a clear target maintained well before close-out rather than scrambled together at the end.
- A formal change control process for system updates during the live study, with impact assessment and re-testing where warranted.
- A vendor audit on record, a desk audit for an established platform or an on-site audit for a novel or custom system.
- Data integrity review at interim analyses and at database lock, not deferred to close-out.

The connection between this clinical readiness and the overall submission package is drawn in [BLA readiness and the data package](/articles/bla-readiness-data-package) and [FDA inspection readiness](/articles/fda-inspection-readiness).

---

## What an inspector asks, and how to answer

In a BIMO inspection of a sponsor, expect questions that move from documentation to a specific record very quickly. The pattern is consistent: the inspector starts with the control you claim to have, then picks a real record and asks you to prove the control held for that record.

- **"Show me the validation documentation for your EDC system. Who performed the UAT, and against which protocol version?"** Good answer: produce the validation summary, point to the traceability matrix, name the data manager and clinical lead who signed UAT, and show that the protocol version in the UAT matches the version active at first-patient-in. A weak answer stops at "the vendor validated it."
- **"Show me the audit trail for subject [ID]. Why was this field changed after the visit date, and where is the corresponding source update?"** Good answer: open the trail, read off who/when/old value/new value/reason, and tie the change to a documented query and a source correction. The trap is a field change with no reason and no source basis.
- **"What is your process when a site user leaves the study?"** Good answer: cite the deprovisioning SOP, show the access-change audit trail for a real departed user, and state the timeline target (for example, deactivation within a defined number of business days of notification). The trap is a live account for someone gone for months.
- **"When did your EDC vendor last push a software update, and how did you assess its impact on your study?"** Good answer: produce the change notification, the impact assessment, and any re-test evidence. The trap is "the vendor handles updates," which concedes you do not track them.
- **"Where is the TMF, and how do you track completeness? Show me the filing for the sites that closed early."** Good answer: open the continuous completeness metric and show contemporaneous filing for an early-closed site. The trap is a bulk upload dated just before the inspection.
- **"Walk me through one SAE from receipt to submission, and show me the audit trail on the causality assessment."** Good answer: trace intake timestamp, coding, causality and expectedness assessment with the audit trail on any change, and the submission within the 7-day or 15-day window per 21 CFR 312.32. The trap is a causality flip with no recorded reason or a missed reporting clock.

A program that can do that for any subject, any document, and any case is inspection-ready. One that can only show the policy is not.

### Interview questions you should be ready for

Beyond the inspection floor, these come up in hiring conversations for clinical data management, CSV, and clinical QA roles:

- **"The vendor says the system is validated. Is that enough?"** No. The vendor validates the platform; the sponsor validates the study configuration and retains regulatory responsibility for the data. Explain the two-layer model.
- **"When is an EDC entry the source record?"** In direct data capture, when data is entered at the site with no prior paper record. The audit trail then carries the full weight of source data integrity.
- **"How do you test an edit check properly?"** Both paths and the boundary: a value that should fire it, a value that should not, and the threshold value itself.
- **"What is the highest-risk system in a typical trial and why?"** Defensible answers are the safety database (mandated reporting timelines, patient safety) and IRT (randomization and dispensing errors cascade and cannot be re-run). Justify, do not just name.
- **"How do you stay on top of changes to a multi-tenant cloud EDC?"** A change-notification clause in the contract plus a sponsor-side impact assessment process, because the vendor can deploy to everyone on its own schedule.
- **"What is the difference between Part 11 scope being triggered and not?"** Part 11 applies because a predicate rule requires a record kept electronically, not because the system exists. Tie it to Part 312 / 314 / 812.

Broader interview preparation is in [GxP quality interview preparation](/articles/gxp-quality-interview-preparation).

---

## Related reading

- [ICH E6 Good Clinical Practice](/articles/ich-e6-good-clinical-practice)
- [Clinical QA and GCP data integrity](/articles/clinical-qa-gcp-data-integrity)
- [eTMF and the Trial Master File](/articles/etmf-trial-master-file)
- [Source data and source data verification](/articles/source-data-and-sdv-clinical)
- [Clinical data management and CDISC](/articles/clinical-data-management-cdisc)
- [eConsent and decentralized trials](/articles/econsent-and-decentralized-trials)
- [Risk-based monitoring in clinical trials](/articles/risk-based-monitoring-clinical)
- [GAMP 5 and the CSV framework](/articles/gamp5-csv-framework)
- [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11)

---

## References

- 21 CFR Part 11: Electronic Records; Electronic Signatures
- 21 CFR Part 312: Investigational New Drug Application (including §312.32 safety reporting)
- 21 CFR Part 812: Investigational Device Exemptions
- FDA Guidance: Electronic Systems, Electronic Records, and Electronic Signatures in Clinical Investigations: Questions and Answers (final 2024)
- FDA Guidance: Computer Software Assurance for Production and Quality Management System Software (draft 2022, finalized 24 September 2025)
- FDA Bioresearch Monitoring (BIMO) Compliance Program 7348.810: Sponsors, Contract Research Organizations, and Monitors
- ICH E6(R2): Guideline for Good Clinical Practice (2016)
- ICH E6(R3): Guideline for Good Clinical Practice (2025)
- ICH E2A and E2B(R3): clinical safety data management and electronic ICSR transmission
- EMA Guideline on Computerised Systems and Electronic Data in Clinical Trials (effective 2023)
- MHRA GxP Data Integrity Guidance and Definitions
- GAMP 5: A Risk-Based Approach to Compliant GxP Computerized Systems, Second Edition (2022)
