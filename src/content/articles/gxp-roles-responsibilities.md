---
title: "GxP Roles Explained: Who Does What in a Regulated Biotech or Pharma Company"
description: "A practical map of every quality and compliance role in a regulated organization — what each function owns, how they interact, and what a day in each role actually looks like."
pubDate: 2026-06-03
tags: ["career", "GxP", "QA", "roles", "beginners"]
tier: "Beginner"
pillar: "quality-assurance"
---

Walking into a regulated biotech for the first time, the organization chart is confusing. There's a QA function, a QC function, a validation team, a regulatory affairs team, and a compliance team, and they all seem to be working on overlapping problems. The titles vary wildly by company size and type. A "Quality Specialist" at a 50-person startup might own things that four different departments own at a large CMO.

This guide maps the core roles, what they actually own day-to-day, and how they interact. It covers pharmaceutical and biotech manufacturing environments. Clinical organizations are covered separately.

---

## Quality Assurance (QA)

QA is the function responsible for the quality system. In GMP language, QA is the "independent" function that has authority to release or reject products and materials, approve or reject procedures, and close out quality events.

**What QA actually does:**

- Reviews and approves batch records before product release
- Reviews and approves deviations and CAPAs
- Reviews and approves change control records
- Conducts or coordinates internal audits
- Manages and approves controlled documents (SOPs, forms, specifications)
- Provides QA oversight during manufacturing (may include shop-floor presence)
- Manages supplier and vendor qualifications
- Interfaces with regulatory agencies during inspections
- Approves validation protocols and reports

QA does not test products. That's QC. QA designs and maintains the systems that ensure testing is done correctly and results are trustworthy.

**Key principle:** 21 CFR 211.22 requires that QA have the authority and responsibility to approve or reject all components, drug product containers, closures, in-process materials, and drug products. This independence is non-negotiable. QA cannot be subordinate to manufacturing in a way that allows production pressure to override quality decisions.

---

## Quality Control (QC)

QC does the actual testing. Analysts in QC run the HPLC assays, the microbiology tests, the potency assays, the environmental monitoring programs, and the stability testing programs. QC owns the laboratory.

**What QC actually does:**

- Executes release testing on raw materials, in-process samples, and finished products
- Maintains the stability testing program
- Runs environmental monitoring programs (viable and non-viable particulates)
- Performs reference standard management
- Executes method transfers and analytical method validations
- Maintains laboratory instruments (calibration records, maintenance logs)
- Generates CoAs (Certificates of Analysis)
- Investigates OOS (Out-of-Specification) and OOT (Out-of-Trend) results

QC generates data. QA reviews and approves data. The two functions are kept organizationally separate because an analyst investigating their own OOS result has a conflict of interest. QA oversight of OOS investigations is a regulatory requirement, not a bureaucratic choice.

---

## Validation (CSV / Equipment Qualification)

The validation function owns the formal documented evidence that systems, processes, and equipment are fit for their intended use. In large organizations, this may be split between Computer System Validation (CSV), equipment qualification, process validation, and analytical method validation. In smaller organizations, one team handles all of it.

**What validation actually does:**

- Writes validation plans, protocols, and summary reports for computerized systems
- Executes IQ, OQ, PQ testing for software systems and equipment
- Maintains the validated state of systems through change control and periodic review
- Authors URS, FRS, and risk assessments for new systems
- Manages the validation master plan
- Coordinates with IT, vendors, and QA during system implementation
- Supports process validation (Stage 1, 2, 3) for manufacturing processes

A validation specialist's day is mostly document work: writing test scripts, reviewing vendor documentation, executing protocols, writing deviation reports, getting protocols approved. A lot of the work happens at system go-live, then quiets down until the next change or upgrade.

---

## Regulatory Affairs (RA)

Regulatory Affairs manages the company's relationship with health authorities. They prepare and submit marketing authorization applications (IND, NDA, BLA, MAA), maintain existing licenses, and advise internal teams on how regulatory requirements apply to specific situations.

**What RA actually does:**

- Prepares and submits INDs, NDAs, BLAs, CTAs, and MAAs
- Tracks and responds to agency questions and deficiency letters
- Advises on regulatory strategy for new products and new markets
- Reviews labeling for compliance with approved content
- Manages post-approval changes (CBEs, PASes, variation applications)
- Monitors the global regulatory landscape for changes affecting the portfolio
- Coordinates with QA on GMP compliance for submissions

RA and QA interact constantly because the data package submitted to regulators comes from the GMP quality system. Any data integrity problem that touches GMP records also potentially affects regulatory submissions. In some organizations, regulatory submissions quality (the data quality in the submission package) is formally owned by RA and QA jointly.

---

## Regulatory Compliance / GMP Compliance

Some organizations separate "Regulatory Affairs" (which handles submissions) from "Regulatory Compliance" or "GMP Compliance" (which handles inspection readiness, quality system compliance, and agency relationships during inspections). In smaller companies, one group does both. In larger organizations, they're separate.

**What Regulatory Compliance does:**

- Monitors evolving GMP requirements and guidance
- Leads inspection preparation and mock inspections
- Serves as the primary interface with inspectors during FDA or EMA audits
- Manages responses to 483 observations and warning letters
- Tracks global inspection trends and regulatory intelligence
- Advises site operations on GMP gaps and remediation priorities

---

## Data Integrity

DI as a stand-alone function is relatively new. It started appearing as a dedicated role in the mid-2010s as FDA and EMA ratcheted up enforcement. Not every company has a DI team, but organizations that have received DI-related findings or that operate high-risk computerized environments (lots of chromatography data, complex LIMS, electronic batch records) increasingly do.

**What a DI function does:**

- Conducts DI gap assessments across computerized systems
- Reviews audit trail data as part of routine or triggered oversight
- Develops and delivers DI training programs
- Owns the data integrity policy and related procedures
- Supports remediation programs when DI findings are identified
- Participates in system design and configuration decisions for new systems
- Audits data lifecycle controls for systems generating GxP records

A Data Integrity Manager or Director typically sits within QA but with a specialized scope. In CGT environments with high data volumes and novel systems, DI expertise is increasingly a specialized discipline rather than part of general QA.

---

## Computer System Validation (CSV) Consultant

CSV consultants are external specialists brought in to support validation projects. They're common at companies that don't have large internal validation teams, during system go-live surges, or for specialized systems where internal expertise is limited.

**What a CSV consultant does:**

- Scopes the validation effort for a specific system
- Authors validation plans, risk assessments, URS, FRS, IQ/OQ/PQ protocols
- Executes testing or manages execution by site staff
- Authors deviation reports and investigates test failures
- Produces the validation summary report
- Transitions the validated system to the internal team for ongoing management

The consultant model is transactional. The internal QA team stays involved throughout because a validation package signed off entirely by a consultant with no internal review is a risk. QA must own the outcome, even when the execution is outsourced.

---

## Manufacturing / Operations

Manufacturing personnel aren't quality staff, but they're primary generators of GMP records. Every operator who fills in a batch record step, initials a process entry, or performs an environmental monitoring sample is creating GMP documentation.

**GMP responsibilities of manufacturing:**

- Following batch manufacturing records and SOPs exactly as written
- Immediately reporting deviations and discrepancies to QA
- Completing training on all procedures before performing tasks
- Maintaining the cleanliness and organization of manufacturing spaces
- Not improvising or using workarounds without approved change control

The quality of a facility's batch records often reflects the quality of its manufacturing training program. Operators who understand why documentation matters produce better records than operators who treat form-filling as a bureaucratic exercise.

---

## Supply Chain / Materials Management

Supply chain intersects with GMP through the materials flow: raw materials, APIs, excipients, and packaging components all require qualification, receipt testing, and appropriate storage before they can be used in production.

**GMP intersections for supply chain:**

- Supplier qualification (approved vendor list management)
- Receipt, sampling, and testing of incoming materials
- Quarantine of untested or rejected materials
- Inventory controls and expiry management
- Cold chain compliance for temperature-sensitive materials

---

## Clinical Quality Assurance (CQA)

CQA oversees the quality of clinical trial conduct. It's a separate discipline from GMP QA, governed by GCP (Good Clinical Practice, ICH E6(R2)) rather than GMP. The data CQA is concerned with is the clinical study data that ultimately supports regulatory submissions.

**What CQA does:**

- Monitors clinical trial sites for GCP compliance
- Conducts audits of clinical sites, CROs, and clinical laboratories
- Reviews and approves CRF (case report form) design and data collection processes
- Validates or oversees validation of electronic data capture (EDC) systems
- Manages trial master file (TMF) quality
- Responds to regulatory authority clinical inspection requests

CQA and GMP QA are distinct but connected. At a biotech running both manufacturing and clinical programs, the same product's data passes through both quality systems: clinical trial data informs the efficacy package, and manufacturing QA data informs the CMC package. Both need to be clean for a successful BLA.

---

## Where These Roles Interact

The quality system is a network, not a hierarchy. The interactions that matter most:

- **QA and Manufacturing:** QA approves what manufacturing does. Manufacturing generates records QA reviews. When manufacturing wants to change a process, it goes through QA-controlled change control.
- **QA and QC:** QA reviews QC's data before batch release. QA investigates OOS results alongside QC analysts. QC can identify quality problems; QA decides how to respond.
- **Validation and QA:** Validation produces the documented evidence; QA reviews and approves it. A validation protocol not approved by QA is not a valid protocol.
- **RA and QA:** RA submits data that QA has verified. GMP deficiencies found during RA submissions can trigger inspection requests. They need to agree on what the submission says about manufacturing controls.
- **DI and everyone:** DI cuts across all functions because every function generates data. A DI gap in the QC laboratory is a QC problem, a QA problem, and potentially a validation problem simultaneously.

---

## Choosing Your Entry Point

Most people entering the industry do so through one of a few paths:

- **QC Analyst or Associate:** The laboratory route. Good for science graduates. Direct exposure to regulated testing, instrument work, and data generation. Natural progression to QA or validation.
- **QA Associate:** The documentation and compliance route. Involves a lot of reading SOPs, reviewing records, managing CAPAs and deviations. Good for detail-oriented people.
- **Validation Specialist:** The technical/IT route. Good for people with both science and systems backgrounds. Document-heavy, requires understanding both the regulatory and technical sides.
- **Regulatory Affairs Associate:** Usually requires a science degree plus specific regulatory coursework or experience. More writing-focused than lab-focused.

Each role gives you a different view of the quality system. People who spend time in multiple functions early in their careers often become the most effective senior quality leaders because they understand the full picture.
