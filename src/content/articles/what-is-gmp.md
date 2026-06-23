---
title: "What Is GMP? A Plain-Language Introduction to Good Manufacturing Practice"
description: "GMP explained without the bureaucratic fog. What the regulations actually require, why they exist, the records they generate, and how to work inside the system well enough to pass an inspection or an interview."
pubDate: 2025-07-01
tags: ["GMP", "FDA", "foundations", "regulations", "beginners"]
tier: "Beginner"
pillar: "quality-assurance"
---

Good Manufacturing Practice is the set of regulations that defines the minimum conditions under which pharmaceutical products, biologics, and medical devices must be manufactured. The goal is plain: make sure patients receive products that are safe, effective, and consistently what the label says they are. A patient who fills a prescription has no way to test the tablet, verify its potency, or confirm it is free of contamination. GMP is the system that stands in for that impossible personal inspection, batch after batch, across the entire supply chain.

In the United States, GMP requirements live primarily in Title 21 of the Code of Federal Regulations. Part 211 covers finished pharmaceuticals, with the general provisions and definitions in Part 210. Part 606 covers blood and blood components. Medical devices are governed by Part 820, which FDA amended in 2024 (effective 2 February 2026) to become the Quality Management System Regulation (QMSR), incorporating ISO 13485:2016 by reference. For biological products, the Part 600 series applies on top of the drug requirements. The EU equivalent is EudraLex Volume 4, commonly called EU GMP, which carries the binding Parts I and II plus a set of Annexes. These are not optional frameworks. They are law, and failure to comply can lead to product recalls, import alerts, consent decrees, and in extreme cases criminal liability for individuals.

This article walks the whole system from the ground up: why GMP exists, the core principles, the records each principle produces, how a batch actually moves through a compliant operation, what an inspector probes, and the questions you should be able to answer in an interview. By the end you should be able to name the regulation behind any GMP activity, point to the record it generates, and explain who is accountable for it.

---

## Why GMP Exists

GMP did not emerge from a committee that wanted more paperwork. It came out of disasters that killed people.

Before modern GMP, pharmaceutical manufacturing had no enforceable quality standards. The 1937 Elixir Sulfanilamide tragedy killed more than 100 people, many of them children, because a manufacturer dissolved the drug in diethylene glycol, an antifreeze ingredient, without testing it for toxicity. There was no law requiring such testing. The public outrage led directly to the Federal Food, Drug, and Cosmetic Act of 1938, which established that the government could regulate how drugs were made, not just what was claimed on the label.

The thalidomide crisis of the late 1950s and early 1960s deepened the lesson. Thalidomide, marketed as a sedative and for morning sickness, caused severe birth defects in thousands of children across countries that approved it without rigorous review. The United States largely avoided the catastrophe because an FDA reviewer declined to approve the drug pending more safety data. The episode produced the 1962 Kefauver-Harris Amendments, which required proof of effectiveness and gave the FDA clearer authority over manufacturing quality. The current cGMP regulations in 21 CFR Parts 210 and 211 trace their lineage to that period and were substantially codified in 1978.

Modern GMP rests on one hard truth: "we tested the finished product" is not sufficient assurance of drug safety. Testing a sample from a batch tells you about that sample. If you pull twenty tablets from a batch of a million and they pass, you know those twenty were acceptable. You know almost nothing about the other 999,980 unless the process that made them was reliable. GMP gives assurance about the process, so the sample result actually means something for the batch as a whole.

The legal teeth matter too. Under the FD&C Act, a drug made outside cGMP is deemed "adulterated" (Section 501(a)(2)(B)) even if testing shows it meets specification. Adulteration is a status, not a test result. That single point explains why an inspector can cite a violation without ever finding a bad tablet: the absence of control is itself the defect.

---

## The Core Principles

GMP is grounded in a handful of non-negotiable ideas that show up in every regulatory framework. The wording differs between 21 CFR 211 and EU GMP, but the underlying expectations are the same. For each principle below, it helps to hold three things in your head at once: the regulation that requires it, the record that proves it, and the failure mode an inspector looks for.

**Quality must be built in, not tested in.** A manufacturer cannot test its way to a quality product. If the process is unstable, no amount of end-product testing will rescue it. GMP requires that processes be designed, validated, and controlled so that every batch consistently meets its specifications (21 CFR 211.100 requires written, established, and followed production and process controls). This is the central idea behind [process validation](/articles/process-validation-lifecycle) and the modern lifecycle approach to it. Proof lives in validation protocols and reports and in the ongoing trend data of [continued process verification](/articles/continued-process-verification-cpv).

**All critical activities must be documented.** In GMP the working rule is that if it was not written down, it did not happen. This covers everything from batch manufacturing instructions to equipment cleaning logs to training records. 21 CFR 211 Subpart J (211.180 to 211.198) sets the records and reports requirements, and EU GMP Chapter 4 sets the documentation expectations. The documentation is the evidence that the requirements were met, and it is the first thing an investigator reviews. The discipline of recording work correctly has its own body of practice, covered in [good documentation practices](/articles/good-documentation-practices).

**Personnel must be qualified for the work they perform.** Every person who performs a GxP task must be trained on the procedure that governs it and must have demonstrated they can perform it correctly (21 CFR 211.25 requires education, training, and experience to perform assigned functions). Training is dated, recorded, and kept current as procedures change. A signature on a batch record carries weight only because the person who signed it was qualified to make that judgment. The record is the training file, mapped to a current job description and a training matrix.

**Facilities and equipment must be appropriate for their purpose.** Manufacturing areas are designed to prevent contamination, cross-contamination, and mix-ups (21 CFR 211 Subparts C and D). Air handling, room pressures, material and personnel flow, and segregation of operations all matter. Equipment must be qualified for its intended use, calibrated on schedule, and maintained, a topic covered in depth under [equipment qualification](/articles/equipment-qualification-lifecycle). The records are qualification packages, calibration certificates, and maintenance logs.

**Materials must be controlled from receipt through release.** Raw materials, excipients, packaging components, and active pharmaceutical ingredients are quarantined on receipt, tested or verified, and approved before use (21 CFR 211 Subpart E). Rejected materials are clearly labeled and physically segregated so they cannot reach production by mistake. Suppliers themselves are qualified and monitored, as described in [supplier and vendor qualification](/articles/supplier-vendor-qualification). The records are the certificate of analysis, the receiving and status-change log, and the supplier qualification file.

**Products must be tested against specifications before release.** No batch leaves a GMP facility without passing all required release tests and without Quality reviewing and approving the complete batch record (21 CFR 211.165 and 211.192). The person who releases the batch, the Qualified Person in the EU system under Annex 16, takes personal responsibility for that decision. The record is the disposition statement on the batch record, signed and dated.

A useful mental model: every principle creates a paper or electronic trail, and the trail is the only thing that survives the moment of work. The product ships, the operator goes home, the cleanroom is cleaned for the next lot. Two years later a complaint arrives and the only witness left is the record.

---

## A Worked Example: One Batch, Start to Finish

Principles are easier to grasp when you follow a single batch through the system. Consider a sterile injectable produced at a typical fill-finish site. The same flow applies, with different tests, to an oral solid dose tablet, a biologic drug substance, or a device subassembly.

A delivery of the active ingredient arrives. Receiving staff verify the shipment against the purchase order, check the certificate of analysis, and place the material in quarantine status in the inventory system. QC samples it, runs identity and purity tests, and only then does Quality change its status to approved. Until that moment, the operating procedures and the inventory system both block it from being dispensed.

When production begins, an operator follows an approved master batch record. Each step has a written instruction, a place to record the actual result, and a second-person verification for critical operations such as line clearance and weighing. The compounding vessel, the sterilizing filter, and the filling line were all qualified before first use, and their calibration is current. Environmental monitoring runs throughout the fill, sampling air and surfaces in the cleanroom, a discipline detailed in the [environmental monitoring program](/articles/environmental-monitoring-program). If a particle count drifts above its alert limit, that event is captured and assessed.

After fill, QC tests the finished units for sterility, endotoxin, potency, fill volume, and appearance. Suppose the potency result comes back slightly low. That triggers an [out-of-specification investigation](/articles/oos-investigation-process) before anyone can decide what the number means. The batch record, every in-process check, the analyst's notes, and the instrument data are reviewed by Quality in a structured [batch record review](/articles/batch-record-review-gmp). Only when the record is complete, the deviations are closed, and every result is within specification does Quality disposition the batch as released. The same record will sit in the archive for years, ready to be pulled if a complaint or recall ever points back to it.

To make the touchpoints concrete, here is the same batch as a control map. Read it as: at each stage, what is controlled, the record it leaves, and who signs.

| Stage | What is controlled | Record generated | Who is accountable |
|---|---|---|---|
| Receipt | Identity, quantity, supplier, quarantine status | Goods receipt log, CoA on file | Warehouse / Materials |
| Material release | Identity and purity testing vs. spec | QC test record, status change to approved | QC analyst tests, QA approves |
| Dispensing | Correct material, correct weight, line clearance | Dispensing record, second-person verify | Production operator + verifier |
| Manufacturing | Critical process parameters within range | Executed batch record entries | Operator records, supervisor reviews |
| In-process control | IPC results at defined hold points | IPC data sheets | QC / Production |
| Environmental monitoring | Viable and non-viable particle counts | EM data, excursion reports | Microbiology / QC |
| Finished testing | Release specifications met | QC certificate of analysis | QC, reviewed by QA |
| Disposition | Complete record, deviations closed | Signed batch disposition | QA / Qualified Person |

Every one of those touchpoints is a GMP requirement. None of them is optional, and each generates a record that an inspector can ask to see. If you can walk an interviewer through this table from memory and name a regulation for two or three of the rows, you have demonstrated that you understand GMP as a connected system rather than a list of rules.

---

## How GMP Is Structured in Practice

A GMP-compliant operation runs through a Quality Management System, or QMS. The QMS is the connected set of policies, procedures, processes, and records that define how quality is managed across the whole organization rather than in isolated pockets. The international reference model for this is [ICH Q10, the Pharmaceutical Quality System](/articles/pharmaceutical-quality-system), which describes the QMS as a single system spanning development, manufacturing, and discontinuation.

The QMS ties together a recognizable set of elements:

| QMS element | What it controls | Related reading |
|---|---|---|
| Document control | How procedures are written, approved, issued, and revised | [Document control fundamentals](/articles/document-control-fundamentals) |
| Change control | How changes to processes, equipment, and systems are assessed and approved | [Change control for validated systems](/articles/change-control-validated-systems) |
| Deviation management | How departures from procedures are captured and investigated | [Deviation management](/articles/deviation-management) |
| CAPA | How problems are corrected and prevented from recurring | [What is a CAPA](/articles/what-is-a-capa) |
| OOS investigation | How unexpected test results are evaluated | [OOS investigation process](/articles/oos-investigation-process) |
| Training | How personnel competence is established and maintained | [GxP training program](/articles/training-program-gxp) |
| Internal audit | How the organization checks itself | [Internal audit program](/articles/internal-audit-program) |
| Management review | How leadership monitors the health of the system | [Management review under Q10](/articles/management-review-q10) |

Every regulated activity in a GMP facility connects back to at least one controlled document, generates at least one record, and falls within the scope of the QMS. That is the structural test for whether something is under control: can you name the procedure, point to the record, and show who reviewed it.

Documents themselves sit in a hierarchy, and knowing it is part of speaking the language fluently. At the top is the quality policy or quality manual, the statement of intent. Below that are standard operating procedures (SOPs) that say how a class of activity is done, then work instructions and forms that capture the detail and the data, then the records that result. A change at the top ripples down; a change to a form does not change the policy. The structure is laid out in [the quality manual and document hierarchy](/articles/quality-manual-document-hierarchy), and the craft of writing the procedures themselves in [how to write an SOP](/articles/how-to-write-an-sop).

The QMS also has a human spine. Roles and decision rights matter, because GMP depends on people knowing exactly what they are accountable for. Who can approve a deviation, who can release a batch, who owns a CAPA: these are defined, not improvised. The breakdown of those duties is covered in [GxP roles and responsibilities](/articles/gxp-roles-responsibilities).

### Roles and responsibilities at a glance

Newcomers often blur the lines between Production, QC, and QA. Inspectors do not, and neither should you. The separation of duties is itself a GMP requirement, because the group that makes the product cannot be the only group that judges it.

| Function | What they own | What they must not do |
|---|---|---|
| Production / Manufacturing | Executing the process to the batch record, recording results contemporaneously | Cannot self-release their own batch |
| Quality Control (QC) | Sampling, testing, generating analytical data, reporting results | Does not decide commercial disposition alone |
| Quality Assurance (QA) | Approving documents, dispositioning batches, owning the QMS, deciding release | Does not run the process it judges |
| Qualified Person (EU) | Personal certification that each batch was made per GMP and the marketing authorization | Cannot delegate the legal certification |
| Site management | Resourcing the quality system, management review, quality culture | Cannot pressure QA to release noncompliant product |

21 CFR 211.22 is explicit that the quality control unit has the authority to approve or reject all components, drug product containers, procedures, and specifications, and to approve or reject finished product. That authority is a structural firewall. If anyone other than the quality unit can override a reject, the firewall is broken, and that is a finding.

---

## What FDA Inspectors Actually Look For

When FDA investigators arrive for a GMP inspection, they are looking for evidence that the quality system is real, not merely documented. They observe operations, interview staff, and request records, then compare what they see against what the procedures and regulations require. Findings are recorded on a Form FDA 483, and serious or unresolved problems can escalate to a Warning Letter. The agency's own framework for this work is the Quality System inspection approach in its Compliance Program Guidance, which organizes the inspection around six systems: quality, facilities and equipment, materials, production, packaging and labeling, and laboratory controls. Recurring themes across published Warning Letters include the following.

**Inadequate investigation of out-of-specification results.** Manufacturing and laboratory data do not always come out clean. An OOS investigation must be thorough, scientifically justified, and documented. Invalidating a result by blaming "analyst error" without evidence, or repeating a test until a passing number appears, is one of the most consistently cited violations. The expectation traces to FDA's 2006 guidance on investigating OOS test results.

**Lack of control over manufacturing processes.** Undefined critical process parameters, weak process validation, or operations that drift from written procedures without documentation all signal that the process is not actually controlled.

**Problems with laboratory controls.** Chromatographic integration practices, sample handling, reference standard management, and analytical method validation are recurring trouble spots. Laboratory data integrity issues, such as testing into compliance, shared logins, or audit trails that were never reviewed, are among the most serious findings an inspector can document. The expectations here are grounded in [data integrity foundations](/articles/data-integrity-foundations) and the [ALCOA+ principles](/articles/alcoa-plus-deep-dive).

**Failure to maintain facilities and equipment.** Preventive maintenance backlogs, instruments overdue for calibration, and unqualified equipment used in production are frequently cited. The [calibration and metrology program](/articles/calibration-and-metrology-program) is a common place this surfaces.

**Personnel and training deficiencies.** Employees performing tasks without completed training records, or training records that do not match the work people actually do.

When a 483 or Warning Letter lands, the response itself is scrutinized. A credible response addresses the specific observation, fixes the systemic root cause, and commits to verifiable corrective actions with dates. A response that treats a finding as a one-off, corrects only the single record that was cited, and ignores the pattern behind it tends to draw a sharper follow-up. The approach is covered in the [483 and Warning Letter response guide](/articles/483-warning-letter-response). Preparing before an inspection happens, rather than scrambling during one, is the subject of [FDA inspection readiness](/articles/fda-inspection-readiness). It is also worth knowing that FDA and EMA inspections, while built on similar principles, differ in emphasis and style, a contrast explored in [FDA versus EMA inspection dynamics](/articles/fda-vs-ema-inspection-dynamics).

An inspector's deeper concern is rarely the single typo or the one late calibration. It is whether the quality system reliably catches and corrects its own problems. A site with a handful of well-investigated deviations and clear, closed CAPAs often inspects better than a site with a suspiciously spotless record, because the first one shows a living system and the second invites the question of what is being missed or buried.

### How a finding is classified

It helps to know the severity ladder, because the same fact can be a minor note or a Warning Letter depending on pattern and impact. Findings are generally graded as critical, major, or other (minor). A critical finding is one that produces, or significantly risks producing, a product that is harmful to the patient, or that involves fraud or falsification. A major finding is a significant departure from GMP that is not critical. The grading logic is covered in [audit finding classification](/articles/audit-finding-classification). When you write or read an investigation, naming the classification and justifying it is part of doing the job correctly.

---

## Common Misconceptions

A few beliefs cause real trouble for newcomers, and are worth naming plainly.

**GMP is not the same as quality.** GMP is a floor, the minimum legally required conditions, not the ceiling of what good manufacturing looks like. A product can be GMP compliant and still be mediocre. Compliance keeps you legal; engineering, process understanding, and a healthy quality culture make the product genuinely good. The relationship between rules and culture is the subject of [quality culture and data integrity failures](/articles/quality-culture-di-failures).

**More documentation is not automatically better.** Teams new to GMP sometimes respond to pressure by writing longer procedures and adding more sign-offs. Beyond a point this backfires. Procedures nobody can realistically follow get worked around, and the workarounds become the real, undocumented process. Good GMP documentation is accurate, followable, and proportionate to risk, not maximal.

**Validation is not a one-time event.** Qualifying equipment or validating a process at startup does not lock in compliance forever. Changes, drift, and new knowledge all require the system to be kept in a validated state over its life, which is why change control and periodic review exist. The lifecycle view is laid out in the [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review).

**The QA signature is a decision, not a formality.** When QA releases a batch or approves a deviation, that signature represents a judgment that a qualified person is willing to stand behind. Treating it as a rubber stamp is exactly the kind of weakness inspectors probe.

**A deviation is not a black mark.** Newcomers sometimes hide problems because they think raising a deviation makes them look bad. The opposite is true. A documented, investigated, closed deviation is the system working. The dangerous condition is the deviation that was never raised, because that is the one no one fixed.

---

## GMP vs. GxP

GMP is one member of a broader family of standards called GxP, where the "x" is a variable that names the activity being governed.

| Abbreviation | Full Name | Scope |
|---|---|---|
| GMP | Good Manufacturing Practice | Drug, biologic, and device manufacturing |
| GLP | Good Laboratory Practice | Non-clinical safety studies |
| GCP | Good Clinical Practice | Clinical trials in human subjects |
| GDP | Good Distribution Practice | Storage and distribution of medicines |
| GVP | Good Pharmacovigilance Practice | Post-market safety monitoring |

All GxP disciplines share the same logic: document everything that matters, train everyone who does the work, control everything that can affect the outcome, and investigate honestly when something goes wrong. The specific rules differ by activity. GLP in the United States lives in [21 CFR Part 58](/articles/glp-21-cfr-58-nonclinical), GCP draws on [ICH E6 Good Clinical Practice](/articles/ich-e6-good-clinical-practice) and the related [clinical QA and GCP data integrity](/articles/clinical-qa-gcp-data-integrity) practices, and GDP focuses on the [cold chain and distribution controls](/articles/good-distribution-practice-cold-chain). For a single overview of how these fit together, see [the GxP systems overview](/articles/gxp-systems-overview).

---

## Current GMP vs. cGMP

You will often see "cGMP" rather than "GMP." The "c" stands for "current." The FDA uses the term deliberately to signal that manufacturers must keep pace with evolving standards, not just satisfy the minimum requirements that existed when a facility was first licensed. What counted as acceptable practice in the year 2000 may not pass today.

A concrete illustration: paper records and standalone instruments were once normal. As manufacturing moved to networked computerized systems, regulators raised their expectations for [audit trails](/articles/audit-trail-design-and-review), access controls, and electronic records, codified in [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11). A site running a modern chromatography data system, for example a commercial CDS such as Empower or OpenLAB, is now expected to enable and review the audit trail, restrict shared accounts, and protect raw data. None of that was contemplated in the original 1978 rules, yet it is part of current GMP because the technology and the regulators' understanding both moved forward.

This is also why FDA guidance documents carry weight even though they are not regulations. The 2006 Guidance for Industry, Quality Systems Approach to Pharmaceutical CGMP Regulations, and the broader ICH quality guidelines, represent the agency's current thinking on how the rules should be interpreted. Guidance is not binding the way a regulation is, but a manufacturer that ignores current guidance has to be ready to defend an equivalent approach. Following current guidance is the path of least friction, and it is how a manufacturer demonstrates it is keeping its practice current rather than frozen.

---

## How Risk Thinking Shapes GMP

A common misreading of GMP is that everything must be controlled to the same maximum degree. Modern GMP is risk based. Effort and rigor are concentrated where the impact on the patient is highest. A parameter that directly affects sterility or potency gets tight limits, formal validation, and second-person verification. A step with no patient impact gets proportionate, lighter control.

This thinking is formalized in [ICH Q9(R1), Quality Risk Management](/articles/quality-risk-management), which gives manufacturers a structured way to identify, assess, and control risk and to document why a given control is enough. Risk based decisions are not a license to do less; they are a discipline for putting attention where it matters and being able to defend that allocation to an inspector. The same logic drives how companies scope validation of computerized systems, where the [GAMP 5 framework](/articles/gamp5-csv-framework) and the FDA's [computer software assurance](/articles/computer-software-assurance-fda) thinking both push for effort proportional to risk rather than uniform paperwork. (Note: FDA's Computer Software Assurance guidance was issued as a draft in 2022 and finalized in 2025.)

---

## Interview-Ready: Questions You Should Be Able to Answer

If you are interviewing for a GMP role, or sitting across from an inspector, a recognizable set of questions comes up. Here is how to answer them with substance rather than recitation. For a wider set, see [GxP quality interview preparation](/articles/gxp-quality-interview-preparation).

**"What is cGMP, and why the small c?"** GMP is the regulatory minimum for how regulated products are made; the "current" signals that the standard is the present state of practice, not the rules frozen at licensure. Give the audit-trail-review example to show you understand that "current" has real consequences.

**"Why can't you just test the product at the end?"** Because a sample describes the sample, not the batch. Quality has to be built in through a validated, controlled process so that the sample result is representative. Cite the adulteration point: a drug made outside cGMP is adulterated under Section 501(a)(2)(B) even if it passes testing.

**"Walk me through what happens when a result is out of specification."** Do not jump to retesting. The first move is to open an OOS investigation, assess the laboratory phase first (was the method followed, the instrument calibrated, the standard correct), and only invalidate a result with documented evidence. If the lab phase finds no assignable cause, the investigation extends to manufacturing. Naming that two-phase structure shows you know the 2006 guidance.

**"What is the difference between QC and QA?"** QC generates data by sampling and testing. QA judges the data, owns the system, and decides disposition. The separation is required so the group that makes or tests the product is not the only group that judges it. Point to 211.22 if you want to be precise.

**"What is the difference between a deviation, a CAPA, and a change control?"** A deviation captures something that already departed from the expected. A CAPA corrects the cause and prevents recurrence. A change control manages a planned, intentional change before it happens. Confusing them is a common tell that someone has read about the system but not lived in it.

**"If it isn't documented, it didn't happen. What does that actually mean?"** It means the record is the only durable evidence of compliance, so records must be contemporaneous, accurate, attributable, and complete. Tie it to [ALCOA+](/articles/alcoa-plus-deep-dive) to show depth.

**"What is the worst kind of finding an inspector can make?"** Data integrity findings: falsification, testing into compliance, disabled or unreviewed audit trails. They are worst because they poison trust in every other record at the site, and they can trigger import alerts or application integrity actions rather than ordinary remediation.

A good general principle for the whole interview: when asked about a control, answer in three parts, the regulation behind it, the record it produces, and the failure mode it prevents. That structure signals you think like a practitioner, not a flashcard.

---

## Getting Started

If you are stepping into a GMP environment for the first time, a short reading list will orient you faster than any orientation deck.

- The regulation that applies to your product. For finished pharmaceuticals that is 21 CFR Part 211, walked through in [the 210/211 cGMP walkthrough](/articles/cfr-210-211-cgmp-walkthrough). For active ingredients it is the principles in [ICH Q7, API GMP](/articles/ich-q7-api-gmp). It is dense, but read it once in full so you know what the rules actually say rather than what people claim they say.
- FDA's Guidance for Industry, Quality Systems Approach to Pharmaceutical CGMP Regulations, from 2006. It connects the regulations to a quality system model that is easier to hold in your head.
- ICH Q10, Pharmaceutical Quality System, for the international framework that aligns with FDA's quality systems thinking.
- Your own site's Quality Manual or Quality Policy, which tells you how GMP is implemented at your specific facility, including which procedures govern your role.

A practical first-week checklist, regardless of your function: find the document control system and learn how to look up an SOP; find the training matrix for your role and confirm your records are current before you touch anything regulated; learn how to raise a deviation, because you will need to; and identify who in QA dispositions the product you work on, so you know where the firewall sits.

For people building a career in this field, the foundations connect to a wider set of skills covered in [breaking into GxP quality](/articles/breaking-into-gxp-quality). The starting point never changes, though. GMP at its core is about doing the right thing every time, in a way that can be demonstrated to a regulator long after the work is done. Everything else is mechanics.
