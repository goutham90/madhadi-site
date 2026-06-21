---
title: "GxP Roles Explained: Who Does What in a Regulated Biotech or Pharma Company"
description: "A practical map of every quality and compliance role in a regulated organization, what each function owns, how the roles interact, the regulatory basis for each separation, and the interview questions asked about them."
pubDate: 2025-07-04
tags: ["career", "GxP", "QA", "roles", "beginners"]
tier: "Beginner"
pillar: "quality-assurance"
---

Walking into a regulated biotech for the first time, the organization chart is confusing. There is a QA function, a QC function, a validation team, a regulatory affairs team, and a compliance team, and they all seem to be working on overlapping problems. The titles vary wildly by company size and type. A "Quality Specialist" at a 50-person startup might own things that four different departments own at a large contract manufacturer.

This guide maps the core roles, what they actually own day to day, how they interact, and the regulatory reason each one exists in the shape it does. It covers drug, biologic, and medical device environments, with clinical roles treated as a distinct discipline near the end. The intent is to be useful to three readers at once: someone deciding which door to enter the industry through, a working practitioner who needs to understand the function next to theirs, and a senior reader thinking about how to structure responsibilities so the quality system actually holds. Most sections close with the questions an interviewer or an inspector will actually ask, so you can read this page and then hold your own in the room.

One framing helps before the role list. Almost everyone in a regulated company touches GxP records, but only a few functions have decision authority over them. The difference between "generates data," "reviews data," and "decides what the data means for product disposition" is the spine that organizes everything below. Hold that distinction and the org chart stops looking like a tangle.

---

## The legal backbone behind the roles

US drug GMP roles are not arbitrary job descriptions. They trace back to the regulations in 21 CFR Parts 210 and 211, with 21 CFR 211.22 establishing the quality control unit and its authority. EU manufacturers operate under EudraLex Volume 4, the GMP guide, where Chapter 2 covers personnel and Annex 16 defines the Qualified Person who certifies batches. Medical device manufacturers in the US work under 21 CFR Part 820, the Quality System Regulation, now being harmonized to ISO 13485 under the Quality Management System Regulation (QMSR), with a compliance date of February 2, 2026. ICH Q10, the Pharmaceutical Quality System, sits over the drug and biologic side and describes management responsibility, the product lifecycle, and continual improvement in a way that most modern quality organizations now mirror.

These documents matter for one practical reason: they tell you which responsibilities cannot be delegated, blurred, or subordinated. Where the same person both runs a test and decides whether the result passes, that is not a style choice. It is a structural defect an inspector will name. The roles below exist in the shape they do because the regulations require certain separations.

| Role | Primary regulatory anchor | Core authority |
| --- | --- | --- |
| Quality Assurance | 21 CFR 211.22, EudraLex Vol 4 Ch 2, ICH Q10 | Approve or reject; own the quality system |
| Quality Control | 21 CFR 211.165, 211.194 | Generate and report test data |
| Qualified Person (EU) | EudraLex Vol 4 Annex 16 | Certify batches for release in the EU |
| Validation | 21 CFR 211.68, EU Annex 15, GAMP 5 | Produce documented evidence of fitness for use |
| Regulatory Affairs | 21 CFR 314 / 601, ICH M4 (CTD) | Own the submission and the agency relationship |
| Clinical QA | ICH E6(R3) Good Clinical Practice | Oversee trial conduct and clinical data quality |
| Device Quality (US) | 21 CFR 820 / QMSR, ISO 13485 | Own the device quality management system |

A note on reading any regulation that drives a role: the verbs matter. "Shall" and "must" create a hard requirement; "should" in a guidance signals an expectation that you either meet or justify deviating from with documented rationale. When an interviewer asks why your quality unit reports outside of operations, the honest answer is a "shall," not a preference, and you should be able to point to the section.

---

## Quality Assurance (QA)

**What it is and why it exists.** QA is the function responsible for the quality system. In GMP language, QA is the independent unit that has authority to release or reject products and materials, approve or reject procedures, and close out quality events. The reason the role exists at all is conflict of interest: the people under schedule and yield pressure to ship product cannot also be the people who decide the product is fit to ship. Independence here is a specific, testable property. QA's decisions cannot be overridden by manufacturing schedule pressure, and QA does not report in a way that makes it answerable to the people whose output it judges.

**Regulatory basis.** 21 CFR 211.22 requires that the quality control unit have the authority and responsibility to approve or reject all components, drug product containers, closures, in-process materials, packaging materials, labeling, and drug products, and to approve or reject procedures and specifications. The same section requires adequate laboratory facilities and written, approved procedures. EudraLex Volume 4 Chapter 2 sets the personnel and independence expectations for the EU. ICH Q10 frames QA's lifecycle role and the management responsibility that sits above it. For devices, 21 CFR 820 and ISO 13485 place equivalent management responsibility and independence expectations on the device quality function.

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

QA does not test products. That is QC. QA designs and maintains the systems that ensure testing is done correctly and results are trustworthy. A useful mental model: QC answers "is this batch within specification," and QA answers "do I trust the entire chain that produced that answer, and is this batch disposable."

**How a batch release decision actually flows.** This is the QA workflow an interviewer most often probes, so know the sequence cold:

1. Manufacturing completes the batch and the executed batch record arrives in QA.
2. QA performs batch record review: every entry dated, signed, contemporaneous, calculations independently verified, no step skipped, in-process checks within limits.
3. QC release results and the Certificate of Analysis are confirmed against the specification.
4. Any open deviation, OOS, or change tied to the batch is reviewed and dispositioned before release, not after.
5. QA confirms the batch was made under a validated process by qualified, trained operators on qualified equipment.
6. QA makes the disposition decision: release, reject, or hold pending further information.
7. In the EU, the Qualified Person then certifies the batch as the final personal act.

**Acceptance criteria for a clean QA decision.** A reviewer reading the record later, with no narration from you, should reach the same disposition. Every deviation linked to the batch is closed or risk-assessed with documented rationale. No data integrity question is left open. The disposition is signed and dated by an authorized person whose authority is defined in a current, approved procedure. If any of those is missing, the decision is not defensible.

**Worked example: a disposition entry.**

| Field | Entry |
| --- | --- |
| Batch number | BX-2451 |
| Product / dosage form | Lyophilized injectable, 10 mg/vial |
| Batch record review | Complete; 2 minor documentation corrections, both with explanation and second-person verification |
| Linked deviations | DEV-0331 (fill weight check 5 min late), risk-assessed no product impact, closed |
| QC release results | All within specification; CoA reviewed and signed |
| Change controls | None open against this batch |
| Disposition | RELEASED |
| Decided by / date | QA Reviewer, signed and dated |

**Roles and responsibilities by level.** A new QA associate spends most of the day in batch record review and document control: checking that every entry is dated, signed, and contemporaneous, that calculations were verified, and that no required step was skipped. A mid-career QA reviewer leads deviation and CAPA assessments, makes disposition recommendations, and hosts auditors during an inspection. A QA head or site quality director owns the management review process, sets the audit program, signs off on the risk posture of the whole system, and is the person an inspector asks "show me how you know your quality system is effective." That last question is answered with quality metrics, trended deviations, and evidence that management acts on what the data shows, which is exactly what ICH Q10 expects through its management review element.

**Common mistakes and inspection-finding patterns.** The quality unit lacking documented authority or independence is a recurring 211.22 citation. Batch records released with open deviations not properly dispositioned. Disposition signatures applied by people whose authority is not defined in a current delegation list. Review-by-exception treated as no review, where audit trails or critical entries are never actually examined. A QA function so understaffed that "review" becomes a rubber stamp shows up as a backlog of overdue CAPAs and late batch reviews.

**Interview-ready.** Expect these:

- "What gives the quality unit the authority to reject a batch?" Answer with 21 CFR 211.22 and the principle that the unit must be independent of production.
- "Walk me through how you would disposition a batch with an open deviation." Describe the sequence above: the deviation must be assessed and closed or risk-assessed with rationale before release, never released first and explained later.
- "What is the difference between QA and QC?" QC generates data, QA decides what the data means for disposition and owns the system that makes the data trustworthy.
- "How do you know your quality system is effective?" Trended metrics, management review acting on them, audit findings closing on time. Tie it to ICH Q10.

For a fuller treatment of the system QA maintains, see [the pharmaceutical quality system](/articles/pharmaceutical-quality-system), the mechanics of [batch record review](/articles/batch-record-review-gmp), and how [batch disposition decisions](/articles/batch-disposition-decisions) are documented.

---

## The Qualified Person (QP) in the EU

US readers sometimes miss this role because it has no exact US equivalent. Under EudraLex Volume 4 Annex 16, every batch of a medicinal product sold in the EU must be certified by a named Qualified Person before it can be released to market. The QP is a specific individual with defined qualifications under Article 49 of Directive 2001/83/EC, holding personal, legally attributable responsibility. A US company exporting to Europe through an EU importer will encounter the QP as the final gate, and the QP's expectations often shape the entire data package that crosses the Atlantic.

**What the QP certifies.** The certification confirms that each batch was manufactured and tested in compliance with the marketing authorization, the EU GMP requirements, and the relevant Annex 16 conditions. For imported product from outside the EU, the QP confirms full qualitative and quantitative testing has been performed, or relies on a mutual recognition agreement where one exists. The QP signs the register of certified batches; that signature is the release act.

The QP is not a committee and not a department. The certification is a personal act. That single fact explains why European sites treat the integrity of batch documentation with a particular seriousness: an individual is putting their name and professional standing behind it. A QP who certifies a batch knowing of an unresolved GMP deficiency can face personal regulatory consequences.

**Interview-ready.** "What is the difference between batch release in the US and the EU?" In the US the quality unit dispositions the batch as a unit decision under 211.22. In the EU a named QP must personally certify the batch under Annex 16 before release. "Can a QP delegate certification?" No. The certification act is personal, though the QP relies on the quality system and supporting staff to inform the decision. See [Qualified Person batch release under Annex 16](/articles/qualified-person-batch-release-annex-16).

---

## Quality Control (QC)

**What it is and why it exists.** QC does the actual testing. Analysts in QC run the chromatography assays, the microbiology tests, the potency and identity methods, the environmental monitoring programs, and the stability testing program. QC owns the laboratory. It exists because release cannot be a matter of opinion: someone has to generate objective, method-based evidence that the material meets its specification.

**Regulatory basis.** 21 CFR 211.165 requires testing and release of each batch against specifications for identity, strength, quality, and purity. 21 CFR 211.194 governs laboratory records and what they must contain. 21 CFR 211.160 covers the general requirements for laboratory controls, including scientifically sound specifications and procedures. Compendial methods carry the force of these regulations when a product is labeled as meeting a compendial standard.

**What QC actually does:**

- Executes release testing on raw materials, in-process samples, and finished products
- Maintains the stability testing program
- Runs environmental monitoring programs (viable and non-viable particulates)
- Performs reference standard management
- Executes method transfers and analytical method validations
- Maintains laboratory instruments through calibration and maintenance records
- Generates Certificates of Analysis
- Investigates Out-of-Specification (OOS) and Out-of-Trend (OOT) results

QC generates data. QA reviews and approves data. The two functions are kept organizationally separate because an analyst investigating their own OOS result has a conflict of interest.

**How an OOS result is handled.** This is the QC procedure interviewers ask about most:

1. The analyst gets a result outside specification and stops; the result is not discarded or rerun on a hunch.
2. Phase I, the laboratory investigation: was there an obvious, documented laboratory error such as a calculation mistake, a failed system suitability, or a documented dilution error? Only an assignable laboratory cause justifies invalidating the result.
3. If no assignable laboratory cause is found, Phase II, the full investigation, expands into manufacturing and the broader process, often with a formal hypothesis test.
4. QA oversees the investigation and approves the conclusion. Retesting and resampling follow predefined, approved rules, not analyst discretion.

This two-phase structure comes from FDA's 2006 guidance "Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production." QA oversight is a regulatory expectation, not a bureaucratic preference.

**Acceptance criteria for clean QC data.** Each result is attributable to a named analyst and a qualified instrument, contemporaneously recorded, with the original electronic data and its audit trail preserved. System suitability passes before the run is used. Any reintegration or reprocessing is documented with the reason. The Certificate of Analysis matches the underlying raw data exactly.

**Worked example: a Certificate of Analysis line.**

| Test | Method | Specification | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Assay (HPLC) | Validated, USP-referenced | 95.0 - 105.0% label claim | 99.2% | Pass |
| Related substances | Validated gradient HPLC | Any single impurity NMT 0.5% | 0.21% max | Pass |
| Water content (KF) | USP <921> | NMT 2.0% w/w | 1.4% | Pass |
| Sterility | USP <71> | No growth | No growth | Pass |
| Bacterial endotoxin | USP <85> | NMT 0.5 EU/mg | 0.18 EU/mg | Pass |

**Roles and responsibilities.** A QC analyst's day is bench work plus documentation: weighing standards, preparing mobile phases, running a sequence, integrating peaks, and recording each step as it happens. A QC supervisor reviews data, leads OOS triage, approves methods, and balances release timelines against analyst capacity. The hardest part is rarely the chemistry. It is keeping documentation contemporaneous and complete when the schedule is tight.

**Common mistakes and inspection-finding patterns.** QC is where a large share of data integrity findings originate, because the laboratory is where the most consequential numbers are created. Chromatography data systems, sample sequences, and audit trails in the lab are recurring themes in warning letters. The analyst who reprocesses an injection without documenting why, the "test injection" that quietly becomes a real result, shared logins that break attributability, audit trails turned off or never reviewed, and OOS results invalidated without a true assignable cause are the patterns regulators look hardest for.

**Interview-ready.**

- "Walk me through an OOS investigation." Give the two-phase structure above and stress that you cannot invalidate a result without a documented assignable cause.
- "An analyst tells you a result is wrong and wants to rerun. What do you do?" You do not simply rerun. You open an investigation; rerunning to get a passing result without justification is testing into compliance.
- "What makes laboratory data trustworthy?" Original electronic data plus audit trail preserved, system suitability met, unique attributable logins, contemporaneous records.

See [the OOS investigation process](/articles/oos-investigation-process), [out-of-trend investigations](/articles/out-of-trend-investigations), [chromatography data system integrity](/articles/chromatography-data-system-integrity), and [audit trail design and review](/articles/audit-trail-design-and-review) for the detail.

---

## Validation (CSV and Equipment Qualification)

**What it is and why it exists.** The validation function owns the formal documented evidence that systems, processes, and equipment are fit for their intended use. Without it, you are asserting fitness rather than demonstrating it, and an inspector has no objective basis to trust the result of any computerized or automated step. In large organizations this splits into Computer System Validation (CSV), equipment qualification, process validation, and analytical method validation. In smaller organizations, one team covers all of it.

**Regulatory basis.** 21 CFR 211.68 requires that automatic, mechanical, and electronic equipment be calibrated, inspected, and checked, and that computerized systems be validated. EU equipment and process qualification follows EudraLex Annex 15. Computerized system controls in the US run through 21 CFR Part 11 for electronic records and signatures, mirrored by EU Annex 11. GAMP 5 from ISPE, "A Risk-Based Approach to Compliant GxP Computerized Systems," whose second edition published in 2022, is the dominant framework for computerized systems and leans further into risk-based, critical-thinking-driven testing. Process validation in the US follows FDA's 2011 "Process Validation: General Principles and Practices," which defines the three-stage lifecycle: Stage 1 process design, Stage 2 process qualification, and Stage 3 continued process verification.

**What validation actually does:**

- Writes validation plans, protocols, and summary reports for computerized systems
- Executes IQ, OQ, and PQ testing for software systems and equipment
- Maintains the validated state of systems through change control and periodic review
- Authors user requirements, functional requirements, and risk assessments for new systems
- Manages the validation master plan
- Coordinates with IT, vendors, and QA during system implementation
- Supports process validation across its three stages for manufacturing processes

**How a CSV effort runs, in sequence.** The V-model is the structure to know:

1. User Requirements Specification (URS): what the business and quality need the system to do.
2. Risk assessment: which functions are GxP-critical and therefore need the most testing.
3. Functional and configuration specifications: what the system does and how it is set up.
4. IQ (Installation Qualification): the system is installed and configured per specification.
5. OQ (Operational Qualification): each function works across its operating range, including challenge and negative tests.
6. PQ (Performance Qualification): the system performs in the real business process with real users and data.
7. Traceability matrix: every requirement traces to a test that exercised it.
8. Validation Summary Report: results, deviations and their resolution, and the release statement.

**Acceptance criteria.** Every GxP requirement traces to executed evidence. Test failures are documented as deviations, investigated, and resolved before release. Evidence is legible, dated, and attributable, and a reviewer who was not present can follow it. The summary report concludes fitness for intended use with the risks addressed.

**Worked example: a requirement traced to a test.**

| Req ID | Requirement | Risk | Test ID | Result |
| --- | --- | --- | --- | --- |
| URS-014 | System enforces unique user IDs; no shared accounts | High (attributability) | OQ-022 | Pass; duplicate ID rejected |
| URS-027 | Audit trail captures who, what, when for GxP record changes, and cannot be disabled by users | High (data integrity) | OQ-031 | Pass; change logged with old/new value, user, timestamp |
| URS-040 | Result rounds to 2 decimals per rounding SOP | Medium | OQ-045 | Pass across boundary values |

**A newer testing philosophy.** FDA's "Computer Software Assurance for Production and Quality System Software" was issued as a draft in 2022 and finalized in 2024. It pushes toward effort proportional to risk, with less rote scripted testing for low-risk functions and more for the features that actually affect product or data quality. Practitioners increasingly speak of CSA as the testing philosophy and CSV as the documented outcome. The two are covered in [the GAMP 5 CSV framework](/articles/gamp5-csv-framework) and [computer software assurance](/articles/computer-software-assurance-fda).

**Roles and responsibilities.** A validation specialist's day is mostly structured document work: writing test scripts, reviewing vendor documentation, executing protocols, capturing evidence as screenshots or printouts, writing deviation reports when a test fails, and chasing approvals. The work is bursty. It peaks at system go-live, then quiets until the next change or upgrade triggers regression testing. A validation lead is judged on whether the documented evidence would survive an inspector reading it cold, with no narration from the author. QA approves the plan, the protocols, and the summary report; without QA approval, the package is not valid.

**Common mistakes and inspection-finding patterns.** Testing without traceability, so you cannot show that a requirement was actually exercised. Test failures resolved by quietly editing the expected result instead of raising a deviation. Screenshots with no date, no signature, or no record of who executed the step. "Validated" systems running in production with open high-severity test failures. Periodic review skipped, so a system drifts out of its validated state after years of small changes. Relying on a vendor's validation package with no documented assessment of the supplier.

**Interview-ready.**

- "Explain the V-model." Map requirements on the left to verification on the right: URS to PQ, functional spec to OQ, design/installation to IQ.
- "What is the difference between IQ, OQ, and PQ?" Installed correctly, functions correctly across its range, performs correctly in the real process.
- "What is the difference between CSV and CSA?" CSA is the risk-based assurance mindset that scales testing effort to risk; CSV is the documented validation outcome. The 2022 FDA CSA guidance was a draft, finalized in 2024.
- "A test fails. What do you do?" Raise a deviation, investigate, and resolve it. You never change the expected result to make it pass.

For the artifacts this function produces, see [the validation deliverables guide](/articles/validation-deliverables-guide), [writing validation protocols and reports](/articles/writing-validation-protocols-and-reports), and [the validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review).

---

## Regulatory Affairs (RA)

**What it is and why it exists.** Regulatory Affairs manages the company's relationship with health authorities. They prepare and submit marketing authorization applications, maintain existing licenses, and advise internal teams on how regulatory requirements apply to specific situations. The function exists because the right to market a product is a license granted on the strength of a data package, and that license has to be obtained, maintained, and kept current as the product changes.

**Regulatory basis.** US drug and biologic approvals run through 21 CFR Part 314 (drugs) and Part 601 (biologics). Most submissions follow the Common Technical Document structure defined by ICH M4, which organizes a marketing application into five modules. Device pathways in the US run through Part 807 (510(k)) and Part 814 (PMA). Post-approval changes in the US run through 21 CFR 314.70 for drugs and the corresponding biologics provisions: prior approval supplements for the most significant changes, Changes Being Effected supplements for moderate ones, and annual reports for the least significant.

**What RA actually does:**

- Prepares and submits INDs, NDAs, BLAs, CTAs, MAAs, and device submissions
- Tracks and responds to agency questions and deficiency letters
- Advises on regulatory strategy for new products and new markets
- Reviews labeling for compliance with approved content
- Manages post-approval changes
- Monitors the global regulatory environment for changes affecting the portfolio
- Coordinates with QA on GMP compliance for submissions

**The CTD module map, worth memorizing.**

| Module | Content |
| --- | --- |
| Module 1 | Regional administrative information and labeling (region-specific) |
| Module 2 | Summaries and overviews of quality, nonclinical, and clinical |
| Module 3 | Quality (chemistry, manufacturing, and controls) |
| Module 4 | Nonclinical study reports |
| Module 5 | Clinical study reports |

ICH Q12, "Technical and Regulatory Considerations for Pharmaceutical Product Lifecycle Management," gives companies tools such as established conditions to manage post-approval change more predictably; see [ICH Q12 lifecycle management](/articles/ich-q12-lifecycle-management).

**Roles and responsibilities.** RA and QA interact constantly because the data package submitted to regulators comes out of the GMP quality system. Module 3 quality content is drawn directly from QC release data, validation reports, and stability programs that QA controls. Any data integrity problem that touches GMP records also potentially affects regulatory submissions. In some organizations the integrity of submission data is formally owned by RA and QA jointly, because a clean submission depends on clean source records that QA controls.

**Common mistakes and inspection-finding patterns.** Marketed product no longer matching the approved filing because a change was made without the correct supplement. Labeling drifting from approved content. A change implemented before the required prior approval was granted. Promotional or technical claims that the data package does not support.

**Interview-ready.**

- "What is the CTD and what is in Module 3?" Five modules; Module 3 is the quality/CMC content.
- "You change a supplier for a critical raw material. What regulatory step is required?" Assess the change level under 314.70; a significant change typically needs a prior approval supplement before implementation.
- "How does RA depend on QA?" The submission's quality content is QA-controlled GMP data; the filing is only as clean as the source records.

See [IND, NDA, and BLA pathways](/articles/ind-nda-bla-pathways) and [eCTD submission architecture](/articles/ectd-submission-architecture).

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

**How an inspection response works.** An FDA inspection ends with a Form 483 listing observations if the investigator found objectionable conditions. A written response within the customary fifteen business days strongly influences whether the matter escalates to a warning letter. Compliance owns the quality of that response. A strong response does four things for each observation: acknowledges the observation factually, states the immediate correction already made (with evidence), commits to systemic corrective action with dated milestones, and addresses the root cause so the issue does not recur. Promises without evidence and dates are the weak response that invites escalation.

**Acceptance criteria for a good response.** Each observation is answered specifically, not generically. Corrections are evidenced, not asserted. Systemic CAPA reaches beyond the single instance the investigator happened to find. Commitment dates are realistic and then actually met, because the agency tracks them.

**Common mistakes and inspection-finding patterns.** Treating an isolated observation as isolated when it is symptomatic of a system gap. Missing committed remediation dates. Responding to the example the investigator cited without checking whether the same problem exists elsewhere. Treating readiness as an event rather than a continuous state of the quality system. A practical note for smaller companies: even without a dedicated compliance function, someone must own inspection readiness before the inspector arrives, not after.

**Interview-ready.**

- "What is a Form 483 and how is it different from a warning letter?" A 483 is the investigator's list of observations issued at the close of an inspection; a warning letter is a formal agency action that can follow if the response and conditions are inadequate.
- "How long do you have to respond to a 483, and why does timing matter?" Respond within roughly fifteen business days; a prompt, substantive response reduces the chance of escalation.
- "What makes a 483 response credible?" Correction with evidence, systemic CAPA, root cause, and dated commitments you then meet.

See [FDA inspection readiness](/articles/fda-inspection-readiness), [managing a live inspection](/articles/managing-a-live-inspection), and [483 and warning letter response strategy](/articles/fda-483-response-strategy).

---

## Data Integrity

**What it is and why it exists.** Data Integrity as a stand-alone function is relatively new. It began appearing as a dedicated role in the mid-2010s as regulators sharpened enforcement and published expectations. The discipline exists because the entire regulatory framework rests on trusting recorded data, and a wave of enforcement made clear that data could be selectively reported, back-dated, or quietly altered if controls were weak.

**Regulatory basis.** MHRA issued data integrity guidance for industry (current version 2018). The WHO published its guideline on good data and record management practices in 2016. FDA released its data integrity questions-and-answers guidance in 2018. The underlying obligations are not new; they sit in 21 CFR Part 11, 211.68, 211.194, and the EU Annex 11. The DI function packages and enforces those obligations as a coherent program.

**What a DI function does:**

- Conducts DI gap assessments across computerized systems
- Reviews audit trail data as part of routine or triggered oversight
- Develops and delivers DI training programs
- Owns the data integrity policy and related procedures
- Supports remediation programs when DI findings are identified
- Participates in system design and configuration decisions for new systems
- Audits data lifecycle controls for systems generating GxP records

**The principles to know cold.** The discipline is organized around the ALCOA principles, that records be Attributable, Legible, Contemporaneous, Original, and Accurate, extended in current guidance to ALCOA+ with Complete, Consistent, Enduring, and Available.

| Principle | Plain meaning | Typical control |
| --- | --- | --- |
| Attributable | Who did it and when | Unique logins, no shared accounts |
| Legible | Readable and permanent | No correction fluid; durable media |
| Contemporaneous | Recorded as it happens | Real-time entry, synchronized clocks |
| Original | The first capture, or a true copy | Preserve source electronic data |
| Accurate | Correct and error-free | Verification, calibration, review |
| Complete | Nothing deleted, including repeats | Audit trail, no orphan data |
| Consistent | Sequenced and date/time ordered | Controlled, locked timestamps |
| Enduring | Survives its retention period | Backup, archive, media migration |
| Available | Retrievable when needed | Indexed records, readable archives |

A Data Integrity Manager or Director typically sits within QA but with a specialized scope. In high-volume computerized environments such as laboratories running large numbers of chromatography sequences, sites with complex laboratory information management systems, and electronic batch record operations, DI expertise is increasingly its own discipline rather than a slice of general QA. This holds across small molecule, biologics, and device software contexts alike.

**Roles and responsibilities.** DI is the one function that legitimately reaches into every other. A gap in the QC laboratory's audit trail review is simultaneously a QC problem, a QA problem, and a validation problem, and the DI function is what makes sure all three see it the same way.

**Common mistakes and inspection-finding patterns.** Shared logins that break attributability. Audit trails available but never reviewed, or able to be disabled by ordinary users. System clocks users can change. Original electronic data discarded in favor of a printout. Backups that have never been test-restored. "Testing into compliance," where failing data is quietly excluded.

**Interview-ready.**

- "What is ALCOA+ and give an example of a failure for two principles." Use the table above; for example, a shared login violates Attributable, and reporting only the passing repeat injection violates Complete.
- "How would you review an audit trail and what would you look for?" Risk-based, focused on critical data: changes to results, deletions, aborted runs, integration changes, and changes to date/time settings.
- "An analyst reprocessed a chromatogram. Is that a violation?" Not in itself; reprocessing without a documented reason and without preserving the original is.

See [ALCOA+ in detail](/articles/alcoa-plus-deep-dive), [data integrity foundations](/articles/data-integrity-foundations), [operationalizing audit trail review](/articles/operationalizing-audit-trail-review), and [DI program architecture](/articles/di-program-architecture).

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

The consultant model is transactional, but the accountability is not. The internal QA team stays involved throughout, because a validation package signed off entirely by an outside party with no internal review is itself a risk. QA must own the outcome even when execution is outsourced. The same logic applies to any outsourced quality work, which is why supplier oversight and quality agreements exist; see [supplier and vendor qualification](/articles/supplier-vendor-qualification) and [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements).

For people building a career here, consulting is a fast way to see many systems and companies quickly. The tradeoff is depth: you rarely live with a system long enough to see how it ages. An interviewer for a consulting role will probe whether you can drop into an unfamiliar system, scope the validation to risk, and produce defensible documentation under time pressure.

---

## Manufacturing and Operations

Manufacturing personnel are not quality staff, but they are primary generators of GMP records. Every operator who fills in a batch record step, initials a process entry, or performs an environmental monitoring sample is creating GMP documentation. The same is true on the device side, where production and process controls under 21 CFR 820.70 govern how operators run and record manufacturing steps.

**GMP responsibilities of manufacturing:**

- Following batch manufacturing records and SOPs exactly as written
- Immediately reporting deviations and discrepancies to QA
- Completing training on all procedures before performing tasks
- Maintaining the cleanliness and organization of manufacturing spaces
- Not improvising or using workarounds outside approved change control

**Worked example: contemporaneous documentation done right vs wrong.** Right: the operator records the fill weight in the batch record the moment it is read, signs and dates the entry, and any correction is a single line through the error, initialed, dated, with a brief reason. Wrong: the operator runs three steps, then fills in the record from memory at break; or corrects a number by overwriting it with no explanation. The first is contemporaneous and attributable. The second is the most common manufacturing-origin finding.

**Roles and responsibilities.** The quality of a facility's batch records usually reflects the quality of its manufacturing training program. Operators who understand why documentation matters produce better records than operators who treat form-filling as a chore. The single most common manufacturing-origin finding is the undocumented or late-documented action: a step performed and signed later, a correction without explanation, a deviation noticed but not raised. None of these are technical failures. They are training and culture failures, which is why [good documentation practices](/articles/good-documentation-practices) and a strong [training program](/articles/training-program-gxp) carry so much weight.

**Interview-ready.** "An operator realizes they skipped a documentation step an hour ago. What should they do?" Raise it as a deviation and document the late entry honestly; never back-date. "What does 'contemporaneous' mean on the shop floor?" Record the action as it happens, not from memory later.

---

## Supply Chain and Materials Management

Supply chain intersects with GMP through the materials flow. Raw materials, active ingredients, excipients, and packaging components all require qualification, receipt handling, and appropriate storage before they can be used in production.

**GMP intersections for supply chain:**

- Supplier qualification and approved vendor list management
- Receipt, sampling, and testing of incoming materials
- Quarantine of untested or rejected materials
- Inventory controls and expiry management
- Cold chain compliance for temperature-sensitive materials

Distribution of finished product brings its own rulebook, Good Distribution Practice, which governs storage and transport conditions, the integrity of the supply chain, and protection against falsified products. In the US, the Drug Supply Chain Security Act adds serialization and traceability requirements across the distribution chain. For biologics, vaccines, and many temperature-sensitive products, the cold chain is the make-or-break control: a single temperature excursion can render a batch unusable, and the excursion has to be assessed against the product's stability data before the material is used or released.

**Interview-ready.** "What happens to a shipment that arrives outside its required temperature range?" Quarantine it, raise a deviation, and assess the excursion against stability data before any disposition. "Why qualify a supplier?" Because incoming material quality directly affects product quality and the manufacturer remains accountable for it.

See [good distribution practice and cold chain](/articles/good-distribution-practice-cold-chain), [cold chain shipping qualification](/articles/cold-chain-shipping-qualification), and [DSCSA serialization and track-and-trace](/articles/dscsa-serialization-track-and-trace).

---

## Medical Device Quality

Device organizations run a quality system that maps to the same separations as drug GMP but under a different rulebook. In the US that is 21 CFR Part 820, transitioning to the Quality Management System Regulation that incorporates ISO 13485 by reference, with a compliance date of February 2, 2026. The EU equivalents are the Medical Device Regulation (EU 2017/745) and the In Vitro Diagnostic Regulation (EU 2017/746).

**What is distinct on the device side:**

- Design controls under 21 CFR 820.30: design inputs, outputs, review, verification, validation, transfer, and the design history file. There is no direct drug-GMP equivalent.
- Risk management under ISO 14971, applied across the product lifecycle.
- For software, IEC 62304 governs the software development lifecycle, and software as a medical device carries its own cybersecurity expectations.
- Postmarket surveillance and vigilance reporting under MDR and, in the US, Medical Device Reporting.

The roles look familiar: a device quality function owns the QMS and CAPA, design assurance engineers own design controls, and regulatory affairs owns submissions through 510(k) or PMA pathways. The mental model from drug GMP carries over: someone generates evidence, someone independent reviews it, and someone with defined authority decides.

See [design controls for medical devices](/articles/design-controls-medical-devices), [the QMSR medical device quality system](/articles/medical-device-quality-system-qmsr), [ISO 14971 risk management](/articles/iso-14971-risk-management-devices), and [device submission pathways](/articles/device-submission-pathways-510k-pma).

---

## Clinical Quality Assurance (CQA)

CQA oversees the quality of clinical trial conduct. It is a separate discipline from GMP QA, governed by Good Clinical Practice, ICH E6, rather than GMP. The current revision, ICH E6(R3), reached step 4 in early 2025 and modernizes the guideline around risk-based quality management and the realities of digital trial data. The data CQA cares about is the clinical study data that ultimately supports regulatory submissions in Module 5.

**What CQA does:**

- Monitors clinical trial sites for GCP compliance
- Conducts audits of clinical sites, contract research organizations, and clinical laboratories
- Reviews and approves case report form design and data collection processes
- Validates or oversees validation of electronic data capture systems
- Manages trial master file quality
- Responds to regulatory authority clinical inspection requests

**Roles and responsibilities.** CQA and GMP QA are distinct but connected. At a company running both manufacturing and clinical programs, the same product's data passes through both quality systems: clinical trial data informs the efficacy package, and manufacturing QA data informs the chemistry, manufacturing, and controls package. Both have to be clean for a successful marketing application.

**Interview-ready.** "What is the difference between GCP and GMP?" GCP governs how trials are conducted and clinical data is generated (ICH E6); GMP governs how product is manufactured and tested. "What does ICH E6(R3) change?" It centers risk-based quality management and addresses modern, digital trial data, replacing the prescriptive posture of earlier revisions.

See [clinical QA and GCP data integrity](/articles/clinical-qa-gcp-data-integrity), [ICH E6 Good Clinical Practice](/articles/ich-e6-good-clinical-practice), and [the BLA readiness data package](/articles/bla-readiness-data-package).

---

## Where These Roles Interact

The quality system is a network, not a hierarchy. A simple RACI view helps for one cross-cutting process, batch release:

| Activity | QC | QA | Manufacturing | RA / QP |
| --- | --- | --- | --- | --- |
| Run release tests | Responsible | Consulted | Informed | Informed |
| Review batch record | Informed | Responsible | Consulted | Informed |
| Disposition the batch | Informed | Accountable | Informed | Informed |
| Certify for EU market | Informed | Consulted | Informed | Accountable (QP) |
| Keep filing current | Informed | Consulted | Informed | Accountable (RA) |

The interactions that matter most:

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
- **Design Assurance or Device Quality Engineer.** The device route, blending engineering with quality. Strong for people who like design controls, risk management, and verification testing.

Each role gives you a different view of the same quality system. People who spend time in more than one function early often become the most effective senior quality leaders, because they have actually stood in each other's shoes and can see the whole picture rather than defending one corner of it. For a closer look at getting started, see [breaking into GxP quality](/articles/breaking-into-gxp-quality), [the career guide for GxP validation](/articles/career-guide-gxp-validation), and [GxP quality interview preparation](/articles/gxp-quality-interview-preparation).
