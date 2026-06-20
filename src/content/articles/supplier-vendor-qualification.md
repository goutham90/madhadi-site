---
title: "Supplier and Vendor Qualification in GxP: From Approved Vendor List to Audit"
description: "A practical guide to GxP supplier qualification: the approved vendor list, risk-based qualification levels, audit programs, ongoing monitoring, quality agreements, and how to qualify cloud and SaaS vendors under 21 CFR Part 11."
pubDate: 2025-10-28
tags: ["supplier qualification", "vendor management", "QMS", "GxP", "audit"]
tier: "Intermediate"
pillar: "quality-assurance"
---

Every product that moves through a GxP process depends on materials, services, and systems provided by external organizations. Raw materials, active pharmaceutical ingredients, excipients, packaging components, contract manufacturing, contract testing, software platforms, calibration services: all of them come from vendors who sit outside your quality management system but whose work directly shapes your product quality and your data. The regulator's view is consistent and old. You are accountable for what a supplier does on your behalf, whether or not the supplier is inspected, whether or not you knew.

Supplier qualification is the documented process of establishing that a supplier can consistently provide materials or services that meet your requirements and the applicable GxP standards. It is a requirement, not a courtesy. In the United States, 21 CFR 211.84 requires that drug components be tested or examined and approved before use, which assumes you know who supplied them and under what controls. 21 CFR 211.68 requires control over computerized systems, and for software bought from a vendor, that control reaches back to the vendor's own development and quality practices. The EU GMP framework states the expectation more bluntly: EudraLex Volume 4, Chapter 5, requires manufacturers to evaluate and approve suppliers of starting and packaging materials, and EudraLex Volume 4, Chapter 7 governs outsourced activities through a written agreement between the contract giver and the contract acceptor. ICH Q10, the pharmaceutical quality system guideline, names management of outsourced activities and purchased materials as one of the system's defined responsibilities.

This article walks through the full lifecycle: building and controlling the approved vendor list, tiering suppliers by risk, running the qualification, writing a quality agreement that holds up, monitoring suppliers after approval, and handling the cases where a supplier has to be put on hold or removed. It also covers the two areas that trip teams up most often: software and cloud vendors, and the specialized raw material chains in biologics and cell and gene therapy.

---

## Why supplier qualification fails inspections

Before the mechanics, it helps to know where this goes wrong, because the inspection findings are predictable. Three patterns repeat across published warning letters and inspection observations.

The first is a missing or stale program. A site receives GMP materials from suppliers that were never formally qualified, or that were qualified once years ago with no review since. The approved vendor list exists as a spreadsheet that no one controls, and additions happen by purchasing convenience rather than quality decision.

The second is qualification on paper only. The supplier file holds a questionnaire and an ISO certificate, but nothing demonstrates that anyone evaluated the answers or that the certificate covers the right scope. A certificate to ISO 9001 says a quality management system exists. It says nothing about GMP, about the specific material, or about data integrity controls in the supplier's laboratory.

The third is the broken feedback loop. The supplier was qualified properly, then changed a manufacturing site, a test method, or a key raw material, and no one found out until a batch behaved differently. The quality agreement either did not require change notification or was never enforced.

Each of these is avoidable. The structure below exists to close those gaps.

---

## The Approved Vendor List (AVL)

The AVL, also called the Approved Supplier List or ASL, is the controlled list of suppliers cleared to provide materials or services to your GxP operations. The rule it enforces is simple: only suppliers on the AVL may supply GxP materials or services, and only within the scope for which they were approved.

The AVL is a controlled document, not a working spreadsheet that anyone can edit. It belongs under your [document control](/articles/document-control-fundamentals) system, with versioning, approval, and an audit history of changes. At minimum it carries:

- Supplier name, site address, and quality contact
- The specific materials or services approved, by name and grade
- Qualification status (approved, conditional, suspended, disqualified)
- Qualification date and the method used to qualify
- The assigned risk tier and required qualification level
- Next scheduled audit or periodic review date

Scope matters more than people expect. A supplier approved to manufacture a tablet excipient at one site is not approved to supply the same excipient from a second site. A contract laboratory approved for dissolution testing is not approved for microbial limits testing unless that method was in scope. Inspectors read the AVL against actual purchase and testing records, and a mismatch between what you bought and what you approved is a finding.

Receiving material from an off-AVL supplier is a GMP violation. Sending a sample to an unqualified contract laboratory that produces data used in a regulatory decision is a GxP failure. These are not administrative slips. They go to the integrity of the supply chain and the data, which is why the AVL sits close to the center of the [pharmaceutical quality system](/articles/pharmaceutical-quality-system).

---

## Qualification Levels

Not every supplier needs the same scrutiny, and treating them all the same wastes audit budget on low-risk vendors while under-resourcing the ones that matter. Risk-based tiering is the standard approach, and it should follow your [quality risk management](/articles/quality-risk-management) process so the tier assignment is documented and defensible rather than arbitrary.

The criteria that drive the tier are the impact on product quality, the impact on patient safety, the impact on data integrity, the difficulty of detecting a problem downstream, and the availability of alternative suppliers. A material whose defect would be caught by routine incoming testing carries less risk than one whose defect only shows up in the finished product or in the patient.

| Tier | Typical suppliers | Qualification activities | Re-evaluation |
|------|------------------|--------------------------|---------------|
| 1 Critical | API and drug substance makers, contract manufacturers, contract testing labs, critical excipients, validated software platforms | Full questionnaire, quality system documentation review, on-site audit before approval, quality agreement, ongoing monitoring | On-site re-audit, often every 1-3 years, risk-adjusted |
| 2 Major | Non-critical excipients, packaging components, calibration providers, document management vendors | Questionnaire, documentation review, desk audit or scheduled on-site audit, quality agreement | Periodic review, audit on a longer cycle or for cause |
| 3 General | Laboratory consumables, general reagents, low-impact services | Basic questionnaire, certificate of compliance or conformance review | Periodic review of performance data |

The tier is a starting point, not a verdict. A Tier 2 supplier with a poor performance history can be managed as if it were Tier 1, with tighter monitoring and an on-site audit. A Tier 1 supplier with a long clean record and strong regulatory standing can have its re-audit interval extended on a documented risk basis. The framework gives you a default; the data lets you adjust.

---

## The Qualification Process

### Step 1: Identification and initial screening

Identify the need and the candidate suppliers, then collect the basics: company profile, relevant certifications (ISO 9001, ISO 13485 for devices, a GMP license or certificate, food facility registration where relevant), and regulatory history. For higher-risk suppliers, check the public record. The FDA warning letter database, import alert lists, and the availability of Establishment Inspection Reports tell you whether the supplier has a recent enforcement history. A critical warning letter tied to the exact material or service you intend to buy is a red flag that should be resolved before money moves, not after.

Screening is cheap and saves the most expensive failures. A supplier that cannot produce a current GMP certificate, or whose certificate scope does not include your material, has told you something useful before you spend a day on the rest.

### Step 2: Supplier questionnaire

A structured questionnaire gathers detail on the supplier's quality system: organizational structure, the scope and certification of the quality management system, batch release process, record retention practices, change control, deviation and [CAPA](/articles/what-is-a-capa) handling, contamination prevention, and regulatory inspection history.

Design the questionnaire for the materials you are actually buying. A generic form that every supplier completes the same way produces a file, not information. If you are sourcing a sterile component, the questions about environmental monitoring and aseptic controls are the ones that earn their place. If you are buying a chromatography reagent, lot-to-lot consistency and certificate content matter more. Targeted questions also reveal how seriously the supplier takes quality, because a vague answer to a specific question is itself a data point.

### Step 3: Documentation review

For Tier 1 and Tier 2 suppliers, review the quality system evidence rather than just filing it. The set usually includes the quality manual, QMS certificates, GMP certificates or recent inspection outcomes, Certificate of Analysis format and content, analytical records for recent representative lots, and any third-party or customer audit summaries the supplier is willing to share.

For software vendors the document set is different: the software development lifecycle description, defect and bug tracking process, release and version management procedures, the validation documentation package (installation and operational qualification templates, design documentation), and any regulatory compliance statements or third-party audit reports such as a SOC 2 Type II for hosted services. The depth of this review feeds directly into how much in-house testing your [computer system validation](/articles/gamp5-csv-framework) will need, which is the link people most often miss.

### Step 4: On-site audit

For Tier 1 suppliers, an on-site audit before approval is the expectation. The audit tests the quality system in practice, where the gap between the written procedure and the daily reality usually lives.

For a contract testing laboratory, the audit looks at:

- Analyst training and qualification records against the methods they run
- Instrument calibration and [qualification](/articles/analytical-instrument-qualification) status
- SOP coverage and document control
- Data integrity controls: audit trails, access control, raw data retention, and whether the chromatography data system is configured to prevent unofficial reprocessing
- The out-of-specification investigation process
- Reference standard management and traceability

For an API or drug substance manufacturer the focus shifts to:

- Manufacturing process controls and in-process testing
- Batch release testing and documentation
- Change control, especially changes that could alter the impurity profile
- The stability program supporting the assigned retest or expiry period
- Environmental monitoring and cross-contamination prevention
- Handling of starting materials, which carries through to ICH Q7 expectations for [API GMP](/articles/ich-q7-api-gmp)

A good audit is not a checklist exercise. The most useful findings come from following a real batch or a real sample through the system and seeing whether the records, the people, and the controls line up. The output is an audit report with classified observations and, where needed, a request for corrective action with agreed timelines. Auditing principles carry over from your [internal audit program](/articles/internal-audit-program); the difference is that you have less influence and limited time on site, so preparation matters more.

### Step 5: Quality agreement

A quality agreement is a formal contract that assigns the quality responsibilities of each party. It is expected for contract manufacturers and contract testing laboratories, and it is good practice for software and service providers whose work touches GxP data. The FDA guidance on contract manufacturing quality agreements (2016) and EudraLex Chapter 7 both describe the same idea: a clear, written split of who does what, so nothing falls between the two organizations.

For a contract manufacturer, the agreement specifies who releases the batch, who approves the batch record, which changes require notification and which require prior approval, who owns the regulatory submissions for the contracted activity, how deviations are reported and within what timeframe, and the customer's right to audit. The depth that this needs is covered in [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements).

For a software-as-a-service vendor such as a cloud LIMS or cloud document system, the agreement addresses how the vendor manages and notifies you of updates, who is responsible for backup and recovery, what audit trail and security controls are in place, how security incidents are communicated and within what window, and what data and audit access you retain.

The agreement is only useful if it is enforced. A change notification clause that no one tracks is the clause that produces an inspection finding three years later.

### Step 6: Approval and AVL update

Quality assurance reviews the full qualification package and makes the approval decision. The approval is documented with a date and a defined scope: which materials, which services, which facility locations. The supplier goes on the AVL, and the periodic review or re-audit date is set. The whole record should be reconstructable, because an inspector will ask not just whether a supplier is approved, but on what basis, by whom, and when.

---

## Ongoing Monitoring

Qualification is a lifecycle, not a one-time gate. Approved suppliers need active monitoring, and the monitoring data is what lets you adjust risk tiers and audit frequency on evidence rather than habit.

**Incoming material testing.** Materials and components from approved suppliers are tested at receipt against specification. This confirms the lot meets spec and, over time, detects drift in the supplier's process before it becomes a failure.

**Certificate of Analysis review.** Review the CoA for every lot, and compare the supplier's reported results against your specification. Watch the trend, not just the pass or fail. A supplier whose impurity result sits just under the limit lot after lot is a monitoring concern even when every lot technically passes, because the margin is eroding and the next lot may not.

**Change notification.** The quality agreement must require notification of significant changes before they take effect: manufacturing process, test methods, sites, key personnel, or anything that affects GxP quality. A relevant change can trigger re-qualification of the supplier, re-qualification of the material, or a bridging study. Treat an unreported change discovered after the fact as a [deviation](/articles/deviation-management) and investigate it, because it tells you the agreement is not being honored.

**Performance and complaints.** Track delivery quality, rejected lots, recurring deviations attributed to the supplier, and the supplier's responsiveness to corrective action requests. This record is the substance of the periodic supplier review and feeds the [annual product review](/articles/annual-product-review-pqr) where supplier performance for a product is summarized.

**Periodic re-audit.** Tier 1 suppliers are re-audited on a defined schedule, often every one to three years, adjusted for risk. A supplier with consistently strong performance and clean inspections can move to a longer cycle; one with recent deviations or a quality system in flux moves to a shorter one.

**Regulatory intelligence.** Monitor whether your suppliers receive warning letters, recalls, or import alerts. A data integrity warning letter for a contract laboratory is a quality event for you even if your samples were not the ones in question, because it calls the reliability of all that lab's data into doubt. The patterns that show up in these letters are worth knowing in advance; see [FDA warning letter patterns](/articles/fda-warning-letters-patterns).

---

## Disqualification and Suspension

When a supplier's performance degrades or a significant quality event occurs, the response should match the risk, and every step should be documented.

**Conditional approval.** The supplier stays approved but under enhanced monitoring: more incoming testing, closer contact with the supplier's quality team, a formal corrective action request. This fits issues that are manageable and where the supplier is cooperating.

**Suspension.** No new orders while the issue is investigated. This is the right move when a significant event is identified but the impact is not yet clear. Suspension stops new exposure while you assess.

**Disqualification.** The supplier comes off the AVL. Existing inventory from that supplier is quarantined and assessed for impact, including a look back at material already used. This is for failures that are fundamental and cannot be remediated with confidence.

Disqualification and suspension decisions require quality assurance approval, a documented rationale, a plan for affected inventory, and a transition plan to an alternative source. The transition plan is not an afterthought. Losing a sole-source critical supplier with no qualified backup is itself a risk you should have identified during qualification, which is why supply continuity belongs in the original risk assessment.

---

## Software Vendor Qualification

Software vendor qualification is a specialized form of supplier qualification, and it is tied directly to computer system validation. When you validate a LIMS, an electronic document system, or a chromatography data system such as a commercial CDS, you are validating your implementation of the vendor's platform. The platform itself rests on the vendor's development and quality practices, which you do not control and therefore must assess.

The questions to answer about a software vendor are:

- Is there a formal, documented software development lifecycle?
- How are defects identified, tracked, and resolved, and can you see the defect history?
- How are releases tested and documented before they ship?
- What regulatory support documentation does the vendor provide, and is it usable in your validation?
- How are security vulnerabilities found and patched, and on what timeline?
- What is the vendor's data retention, backup, and business continuity plan?

The output of this assessment changes your validation effort. Under a risk-based, GAMP 5 informed approach, and consistent with the FDA's Computer Software Assurance draft guidance (2022), a vendor with a mature quality system and strong, auditable testing evidence lets you lean on that evidence and reduce duplicative site testing for lower-risk functions. A vendor with a thin quality system increases your burden, because you cannot rely on testing you cannot verify, so the site has to test more itself. This trade-off is the practical reason vendor qualification pays for itself; the detail sits in [computer software assurance](/articles/computer-software-assurance-fda) and the broader [cloud and SaaS validation](/articles/cloud-saas-validation) discussion.

For cloud and SaaS vendors, add the questions that hosted services raise: where is the data physically stored and under which jurisdiction, what contractual protections cover your GxP data, what happens to your data if the vendor is acquired or fails, what audit rights you hold as a customer, and how the vendor manages access control and audit trails to meet [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11). A SOC 2 Type II report is useful evidence but it is not a substitute for confirming the Part 11 and Annex 11 specific controls, because those frameworks ask questions that a generic security audit does not.

---

## Supplier Qualification for Critical Raw Materials in Biologics and Cell and Gene Therapy

In biologics and cell and gene therapy manufacturing, raw material supplier qualification carries extra weight because the materials behave biologically and the consequences of a failure are larger.

Biological raw materials such as cell culture media, bioreactor consumables, and viral vector production reagents can show batch-to-batch variability that affects process performance even when every lot meets its written chemical specification. The specification may not capture the attribute that actually drives the process. GMP-grade materials for cell and gene therapy, including growth factors, serum alternatives, plasmids, and viral vectors, often come from a small number of suppliers, with long qualification timelines and real supply continuity risk. A material with two qualified suppliers worldwide is a different problem from a commodity excipient with twenty.

Raw material qualification in this setting may extend to qualifying the supplier's manufacturing facility, testing incoming lots for process-relevant performance rather than chemical conformance alone, and running bridging studies when a new supplier or a new lot is introduced into the process. The aim is to confirm the material performs in your process, not just that it matches a certificate.

The data integrity requirements for raw material testing here are the same as for any GxP testing, governed by the same [ALCOA+ principles](/articles/alcoa-plus-deep-dive) and [data integrity foundations](/articles/data-integrity-foundations). The difference is the stakes. For an autologous cell therapy, the patient's own cells may be the only starting material that will ever exist, and there is no second batch to fall back on. Getting the supplier, the material, and the testing right the first time is not a quality preference in that context. It is the difference between a product and nothing. The specific controls for this product class are covered in [cell and gene therapy data integrity](/articles/cell-gene-therapy-data-integrity).

---

## Pulling it together

Supplier qualification works when it behaves like a lifecycle rather than a filing exercise. Tier suppliers by real risk, qualify with the depth the tier demands, write a quality agreement that assigns responsibilities clearly, and then keep watching: incoming data, certificate trends, change notifications, performance, and the regulatory record. When a supplier slips, respond in proportion and document the decision. The program that survives an inspection is the one where the AVL matches what you actually buy, every approval traces to a basis and a date, and the feedback loop catches a supplier change before a batch does.
