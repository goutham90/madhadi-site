---
title: "GxP Roles Explained: Who Does What in a Regulated Biotech or Pharma Company"
description: "A practical map of every quality and compliance role in a regulated organization, what each function owns, how the roles interact, and what a day in each one actually looks like."
pubDate: 2025-07-04
tags: ["career", "GxP", "QA", "roles", "beginners"]
tier: "Beginner"
pillar: "quality-assurance"
---

Walking into a regulated biotech for the first time, the organization chart is confusing. There is a QA function, a QC function, a validation team, a regulatory affairs team, and a compliance team, and they all seem to be working on overlapping problems. The titles vary wildly by company size and type. A "Quality Specialist" at a 50-person startup might own things that four different departments own at a large contract manufacturer.

This guide maps the core roles, what they actually own day to day, and how they interact. It covers pharmaceutical and biotech manufacturing environments primarily, with clinical roles treated as a distinct discipline at the end. The intent is to be useful to three readers at once: someone deciding which door to enter the industry through, a working practitioner who needs to understand the function next to theirs, and a senior reader thinking about how to structure responsibilities so the quality system actually holds.

One framing helps before the role list. Almost everyone in a regulated company touches GxP records, but only a few functions have decision authority over them. The difference between "generates data," "reviews data," and "decides what the data means for product disposition" is the spine that organizes everything below. Hold that distinction and the org chart stops looking like a tangle.

---

## The legal backbone behind the roles

US drug GMP roles are not arbitrary job descriptions. They trace back to the regulations in 21 CFR Parts 210 and 211, with 21 CFR 211.22 establishing the quality control unit and its authority. EU manufacturers operate under EudraLex Volume 4, the GMP guide, where Chapter 2 covers personnel and Annex 16 defines the Qualified Person who certifies batches. ICH Q10, the Pharmaceutical Quality System, sits over both and describes management responsibility, the product lifecycle, and continual improvement in a way that most modern quality organizations now mirror.

These documents matter for one practical reason: they tell you which responsibilities cannot be delegated, blurred, or subordinated. Where the same person both runs a test and decides whether the result passes, that is not a style choice. It is a structural defect an inspector will name. The roles below exist in the shape they do because the regulations require certain separations.

| Role | Primary regulatory anchor | Core authority |
| --- | --- | --- |
| Quality Assurance | 21 CFR 211.22, EudraLex Vol 4 Ch 2, ICH Q10 | Approve or reject; own the quality system |
| Quality Control | 21 CFR 211.165, 211.194 | Generate and report test data |
| Qualified Person (EU) | EudraLex Vol 4 Annex 16 | Certify batches for release in the EU |
| Validation | 21 CFR 211.68, EU Annex 15, GAMP 5 | Produce documented evidence of fitness for use |
| Regulatory Affairs | 21 CFR 314 / 601, ICH M4 (CTD) | Own the submission and the agency relationship |
| Clinical QA | ICH E6(R3) Good Clinical Practice | Oversee trial conduct and clinical data quality |

---

## Quality Assurance (QA)

QA is the function responsible for the quality system. In GMP language, QA is the independent unit that has authority to release or reject products and materials, approve or reject procedures, and close out quality events. Independence here is a specific, testable property: QA's decisions cannot be overridden by manufacturing schedule pressure, and QA does not report in a way that makes it answerable to the people whose output it judges.

**What QA actually does:**

- Reviews and approves batch records before product release
- Reviews and approves deviations and CAPAs
- Reviews and approves change control records
- Conducts or coordinates internal audits
- Manages and approves controlled documents (SOPs, forms, specifications)
- Provides QA oversight during manufacturing, which may include shop-floor presence
- Manages supplier and vendor qualifications
- Interfaces with regulatory agencies during inspections
- Approves validation protocols and reports

QA does not test products. That is QC. QA designs and maintains the systems that ensure testing is done correctly and results are trustworthy. A useful mental model: QC answers "is this batch within specification," and QA answers "do I trust the entire chain that produced that answer, and is it disposable."

**Key principle:** 21 CFR 211.22 requires that the quality control unit have the authority and responsibility to approve or reject all components, drug product containers, closures, in-process materials, packaging materials, labeling, and drug products. The same section requires adequate laboratory facilities and written, approved procedures. This independence is not negotiable. QA cannot sit under manufacturing in a way that lets production pressure override quality decisions.

**A day in the role, by level.** A new QA associate spends most of the day in batch record review and document control: checking that every entry is dated, signed, and contemporaneous, that calculations were verified, and that no required step was skipped. A mid-career QA reviewer leads deviation and CAPA assessments, makes disposition recommendations, and hosts auditors during an inspection. A QA head or site quality director owns the management review process, sets the audit program, signs off on the risk posture of the whole system, and is the person an inspector asks "show me how you know your quality system is effective." That last question is answered with quality metrics, trended deviations, and evidence that management acts on what the data shows, which is exactly what ICH Q10 expects.

For a fuller treatment of the system QA maintains, see [the pharmaceutical quality system](/articles/pharmaceutical-quality-system) and the mechanics of [batch record review](/articles/batch-record-review-gmp).

---

## The Qualified Person (QP) in the EU

US readers sometimes miss this role because it has no exact US equivalent. Under EudraLex Volume 4 Annex 16, every batch of a medicinal product sold in the EU must be certified by a named Qualified Person before it can be released to market. The QP is a specific individual with defined qualifications and personal, legally attributable responsibility. A US company exporting to Europe through an EU importer will encounter the QP as the final gate, and the QP's expectations often shape the entire data package that crosses the Atlantic.

The QP is not a committee and not a department. The certification is a personal act. That single fact explains why European sites treat the integrity of batch documentation with a particular seriousness: an individual is putting their name and license behind it.

---

## Quality Control (QC)

QC does the actual testing. Analysts in QC run the chromatography assays, the microbiology tests, the potency and identity methods, the environmental monitoring programs, and the stability testing program. QC owns the laboratory.

**What QC actually does:**

- Executes release testing on raw materials, in-process samples, and finished products
- Maintains the stability testing program
- Runs environmental monitoring programs (viable and non-viable particulates)
- Performs reference standard management
- Executes method transfers and analytical method validations
- Maintains laboratory instruments through calibration and maintenance records
- Generates Certificates of Analysis
- Investigates Out-of-Specification (OOS) and Out-of-Trend (OOT) results

QC generates data. QA reviews and approves data. The two functions are kept organizationally separate because an analyst investigating their own OOS result has a conflict of interest. The expectation that OOS investigations follow a defined, two-phase process, a laboratory phase first and a full investigation if no assignable cause is found, comes from FDA's 2006 guidance "Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production." QA oversight of those investigations is a regulatory expectation, not a bureaucratic preference.

QC is also where a large share of data integrity findings originate, because the laboratory is where the most consequential numbers are created. Chromatography data systems, sample sequences, and audit trails in the lab are recurring themes in warning letters. The analyst who reprocesses an injection without documenting why, or who runs a "test injection" that quietly becomes a real result, is the failure mode regulators look hardest for. See [OOS investigation](/articles/oos-investigation-process) and [audit trail design and review](/articles/audit-trail-design-and-review) for the detail.

**A day in the role.** A QC analyst's day is bench work plus documentation: weighing standards, preparing mobile phases, running a sequence, integrating peaks, and recording each step as it happens. A QC supervisor reviews data, leads OOS triage, approves methods, and balances release timelines against analyst capacity. The hardest part is rarely the chemistry. It is keeping documentation contemporaneous and complete when the schedule is tight.

---

## Validation (CSV and Equipment Qualification)

The validation function owns the formal documented evidence that systems, processes, and equipment are fit for their intended use. In large organizations this splits into Computer System Validation (CSV), equipment qualification, process validation, and analytical method validation. In smaller organizations, one team covers all of it.

**What validation actually does:**

- Writes validation plans, protocols, and summary reports for computerized systems
- Executes IQ, OQ, and PQ testing for software systems and equipment
- Maintains the validated state of systems through change control and periodic review
- Authors user requirements, functional requirements, and risk assessments for new systems
- Manages the validation master plan
- Coordinates with IT, vendors, and QA during system implementation
- Supports process validation across its three stages for manufacturing processes

The dominant framework for computerized systems is GAMP 5, ISPE's "A Risk-Based Approach to Compliant GxP Computerized Systems," whose second edition published in 2022 leans further into risk-based, critical-thinking-driven testing. Process validation in the US follows FDA's 2011 "Process Validation: General Principles and Practices," which defines the three-stage lifecycle: Stage 1 process design, Stage 2 process qualification, and Stage 3 continued process verification. EU equipment and process qualification follows EudraLex Annex 15.

A newer current runs alongside GAMP 5: FDA's 2022 guidance "Computer Software Assurance for Production and Quality System Software" pushes toward effort proportional to risk, with less rote scripted testing for low-risk functions and more for the features that actually affect product or data. Practitioners increasingly speak of CSA as the testing philosophy and CSV as the documented outcome. The two are covered in [the GAMP 5 CSV framework](/articles/gamp5-csv-framework) and [computer software assurance](/articles/computer-software-assurance-fda).

**A day in the role.** A validation specialist's day is mostly structured document work: writing test scripts, reviewing vendor documentation, executing protocols, capturing evidence as screenshots or printouts, writing deviation reports when a test fails, and chasing approvals. The work is bursty. It peaks at system go-live, then quiets until the next change or upgrade triggers regression testing. A validation lead is judged on whether the documented evidence would survive an inspector reading it cold, with no narration from the author.

For the artifacts this function produces, see [the validation deliverables guide](/articles/validation-deliverables-guide) and [the validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review).

---

## Regulatory Affairs (RA)

Regulatory Affairs manages the company's relationship with health authorities. They prepare and submit marketing authorization applications, maintain existing licenses, and advise internal teams on how regulatory requirements apply to specific situations.

**What RA actually does:**

- Prepares and submits INDs, NDAs, BLAs, CTAs, and MAAs
- Tracks and responds to agency questions and deficiency letters
- Advises on regulatory strategy for new products and new markets
- Reviews labeling for compliance with approved content
- Manages post-approval changes
- Monitors the global regulatory environment for changes affecting the portfolio
- Coordinates with QA on GMP compliance for submissions

Most submissions follow the Common Technical Document structure defined by ICH M4, which organizes a marketing application into five modules. Post-approval changes in the US run through mechanisms in 21 CFR 314.70 for drugs and the corresponding biologics provisions: prior approval supplements for the most significant changes, Changes Being Effected supplements for moderate ones, and annual reports for the least significant. ICH Q12, "Technical and Regulatory Considerations for Pharmaceutical Product Lifecycle Management," gives companies tools such as established conditions to manage post-approval change more predictably; see [ICH Q12 lifecycle management](/articles/ich-q12-lifecycle-management).

RA and QA interact constantly because the data package submitted to regulators comes out of the GMP quality system. Any data integrity problem that touches GMP records also potentially affects regulatory submissions. In some organizations the integrity of submission data is formally owned by RA and QA jointly, because a clean submission depends on clean source records that QA controls.

---

## Regulatory Compliance and GMP Compliance

Some organizations separate Regulatory Affairs, which handles submissions, from Regulatory Compliance or GMP Compliance, which handles inspection readiness, quality system compliance, and agency relationships during inspections. In smaller companies one group does both. In larger organizations they are separate.

**What Regulatory Compliance does:**

- Monitors evolving GMP requirements and guidance
- Leads inspection preparation and mock inspections
- Serves as the primary interface with inspectors during agency audits
- Manages responses to FDA Form 483 observations and warning letters
- Tracks global inspection trends and regulatory intelligence
- Advises site operations on GMP gaps and remediation priorities

This function is where the document trail meets the human moment of an inspection. An FDA inspection ends with a Form 483 listing observations if the investigator found objectionable conditions; a written response within the customary fifteen business days strongly influences whether the matter escalates to a warning letter. Compliance owns the quality of that response: factual, specific, with committed dates and evidence of correction plus systemic CAPA, not promises. See [FDA inspection readiness](/articles/fda-inspection-readiness) and [483 and warning letter response strategy](/articles/fda-483-response-strategy).

A practical note for smaller companies: even if you do not have a dedicated compliance function, someone must own inspection readiness before the inspector arrives, not after. The most common avoidable failure is treating readiness as an event rather than a continuous state of the quality system.

---

## Data Integrity

Data Integrity as a stand-alone function is relatively new. It began appearing as a dedicated role in the mid-2010s as regulators sharpened enforcement and published expectations. MHRA issued data integrity guidance for industry, the WHO published Annex 5 on good data and record management practices in 2016, and FDA released its data integrity questions-and-answers guidance in 2018. Not every company has a DI team, but organizations that have received DI-related findings, or that operate high-risk computerized environments with large volumes of chromatography data, complex laboratory information systems, and electronic batch records, increasingly do.

**What a DI function does:**

- Conducts DI gap assessments across computerized systems
- Reviews audit trail data as part of routine or triggered oversight
- Develops and delivers DI training programs
- Owns the data integrity policy and related procedures
- Supports remediation programs when DI findings are identified
- Participates in system design and configuration decisions for new systems
- Audits data lifecycle controls for systems generating GxP records

The discipline is organized around the ALCOA principles, that records be Attributable, Legible, Contemporaneous, Original, and Accurate, extended in current guidance to ALCOA+ with Complete, Consistent, Enduring, and Available. A Data Integrity Manager or Director typically sits within QA but with a specialized scope. In cell and gene therapy environments with high data volumes and novel systems, DI expertise is increasingly its own discipline rather than a slice of general QA. See [ALCOA+ in depth](/articles/alcoa-plus-deep-dive), [data integrity foundations](/articles/data-integrity-foundations), and [DI program architecture](/articles/di-program-architecture).

DI is the one function that legitimately reaches into every other. A gap in the QC laboratory's audit trail review is simultaneously a QC problem, a QA problem, and a validation problem, and the DI function is what makes sure all three see it the same way.

---

## Computer System Validation (CSV) Consultant

CSV consultants are external specialists brought in to support validation projects. They are common at companies without large internal validation teams, during system go-live surges, and for specialized systems where internal expertise is thin.

**What a CSV consultant does:**

- Scopes the validation effort for a specific system
- Authors validation plans, risk assessments, user and functional requirements, and IQ/OQ/PQ protocols
- Executes testing or manages execution by site staff
- Authors deviation reports and investigates test failures
- Produces the validation summary report
- Transitions the validated system to the internal team for ongoing management

The consultant model is transactional, but the accountability is not. The internal QA team stays involved throughout, because a validation package signed off entirely by an outside party with no internal review is itself a risk. QA must own the outcome even when execution is outsourced. The same logic applies to any outsourced quality work, which is why supplier oversight and quality agreements exist; see [supplier and vendor qualification](/articles/supplier-vendor-qualification) and [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements). For people building a career here, consulting is a fast way to see many systems and companies quickly. The tradeoff is depth: you rarely live with a system long enough to see how it ages.

---

## Manufacturing and Operations

Manufacturing personnel are not quality staff, but they are primary generators of GMP records. Every operator who fills in a batch record step, initials a process entry, or performs an environmental monitoring sample is creating GMP documentation.

**GMP responsibilities of manufacturing:**

- Following batch manufacturing records and SOPs exactly as written
- Immediately reporting deviations and discrepancies to QA
- Completing training on all procedures before performing tasks
- Maintaining the cleanliness and organization of manufacturing spaces
- Not improvising or using workarounds outside approved change control

The quality of a facility's batch records usually reflects the quality of its manufacturing training program. Operators who understand why documentation matters produce better records than operators who treat form-filling as a chore. The single most common manufacturing-origin finding is the undocumented or late-documented action: a step performed and signed later, a correction without explanation, a deviation noticed but not raised. None of these are technical failures. They are training and culture failures, which is why [good documentation practices](/articles/good-documentation-practices) and a strong [training program](/articles/training-program-gxp) carry so much weight.

---

## Supply Chain and Materials Management

Supply chain intersects with GMP through the materials flow. Raw materials, active ingredients, excipients, and packaging components all require qualification, receipt handling, and appropriate storage before they can be used in production.

**GMP intersections for supply chain:**

- Supplier qualification and approved vendor list management
- Receipt, sampling, and testing of incoming materials
- Quarantine of untested or rejected materials
- Inventory controls and expiry management
- Cold chain compliance for temperature-sensitive materials

Distribution of finished product brings its own rulebook, Good Distribution Practice, which governs storage and transport conditions, the integrity of the supply chain, and protection against falsified products. For biologics and many advanced therapies, the cold chain is the make-or-break control: a single temperature excursion can render a batch unusable. See [good distribution practice and cold chain](/articles/good-distribution-practice-cold-chain).

---

## Clinical Quality Assurance (CQA)

CQA oversees the quality of clinical trial conduct. It is a separate discipline from GMP QA, governed by Good Clinical Practice, ICH E6, rather than GMP. The current revision, ICH E6(R3), reached step 4 in early 2025 and modernizes the guideline around risk-based quality management and the realities of digital trial data. The data CQA cares about is the clinical study data that ultimately supports regulatory submissions.

**What CQA does:**

- Monitors clinical trial sites for GCP compliance
- Conducts audits of clinical sites, contract research organizations, and clinical laboratories
- Reviews and approves case report form design and data collection processes
- Validates or oversees validation of electronic data capture systems
- Manages trial master file quality
- Responds to regulatory authority clinical inspection requests

CQA and GMP QA are distinct but connected. At a biotech running both manufacturing and clinical programs, the same product's data passes through both quality systems: clinical trial data informs the efficacy package, and manufacturing QA data informs the chemistry, manufacturing, and controls package. Both have to be clean for a successful BLA. See [clinical QA and GCP data integrity](/articles/clinical-qa-gcp-data-integrity) and [BLA readiness data package](/articles/bla-readiness-data-package).

---

## Where These Roles Interact

The quality system is a network, not a hierarchy. The interactions that matter most:

- **QA and Manufacturing.** QA approves what manufacturing does; manufacturing generates the records QA reviews. When manufacturing wants to change a process, it goes through QA-controlled change control.
- **QA and QC.** QA reviews QC data before batch release and oversees OOS investigations alongside QC analysts. QC can surface a quality problem; QA decides how to respond and whether to release.
- **Validation and QA.** Validation produces the documented evidence; QA reviews and approves it. A validation protocol QA has not approved is not a valid protocol.
- **RA and QA.** RA submits data that QA has verified. GMP deficiencies found in the course of a submission can trigger an inspection. The two have to agree on what the submission claims about manufacturing controls.
- **DI and everyone.** DI cuts across all functions because every function generates data. A DI gap in the QC laboratory is a QC problem, a QA problem, and a validation problem at the same time.

The thread running through all of these is [change control](/articles/change-control-validated-systems): it is the mechanism that forces these functions to talk before a change happens rather than after it breaks something.

---

## Choosing Your Entry Point

Most people enter the industry through one of a few paths:

- **QC Analyst or Associate.** The laboratory route. Good for science graduates. Direct exposure to regulated testing, instrument work, and data generation. Natural progression toward QA or validation.
- **QA Associate.** The documentation and compliance route. A lot of reading SOPs, reviewing records, and managing CAPAs and deviations. Good for detail-oriented people who like getting the answer exactly right.
- **Validation Specialist.** The technical and systems route. Good for people with both science and IT instincts. Document-heavy, and it rewards understanding both the regulatory and the technical sides.
- **Regulatory Affairs Associate.** Usually requires a science degree plus regulatory coursework or experience. More writing-focused than lab-focused.

Each role gives you a different view of the same quality system. People who spend time in more than one function early often become the most effective senior quality leaders, because they have actually stood in each other's shoes and can see the whole picture rather than defending one corner of it. For a closer look at getting started, see [breaking into GxP quality](/articles/breaking-into-gxp-quality) and [the career guide for GxP validation](/articles/career-guide-gxp-validation).
