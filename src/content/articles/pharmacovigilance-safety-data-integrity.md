---
title: "Pharmacovigilance and Safety Data: GVP and Data Integrity After Approval"
description: "How individual case safety reports, expedited and periodic reporting, signal detection, and a validated safety database carry GxP data integrity obligations into the postmarketing phase."
pubDate: 2026-06-20
tags: ["pharmacovigilance", "GVP", "data integrity", "ICSR", "signal detection", "PSUR", "safety database", "computerized system validation"]
pillar: "clinical-gcp"
tier: "Intermediate"
---

A drug does not stop being a data problem the day it gets approved. It becomes a different one. During development, the dataset is finite, the patients are counted, and the protocol bounds what gets collected. After launch, the population is everyone who fills a prescription, the reporters are pharmacists and call-center agents and patients who Google a side effect at 2 a.m., and the data arrives forever. Pharmacovigilance, the science of detecting, assessing, understanding, and preventing adverse effects, is the system that keeps a marketed product honest about its own harms. The same discipline governs small-molecule drugs, vaccines, biologics, cell and gene therapies, and the drug part of a combination product, where the data integrity backbone is identical across all of them.

For anyone who came up through GMP or GCP, the useful reframe is this: pharmacovigilance is a GxP discipline with the same backbone you already know. There is a regulated process, a validated computerized system, documented procedures, audit trails, and an inspector who will eventually pull a case and trace it end to end. The vocabulary changes, you trade batch records for individual case safety reports and stability data for signal detection, but the data integrity expectations are the same ones written into ALCOA+ and 21 CFR Part 11. This article walks from the atom of safety data outward: the individual case, the reporting obligations built on top of it, the signal work that turns cases into knowledge, the validated database that has to hold all of it without losing a record, and the inspection questions you will face on every one of these.

## The atom: the individual case safety report

Everything in postmarketing safety is built on the Individual Case Safety Report, or ICSR. An ICSR is the structured record of a single adverse event experienced by a single patient, attributed (at least as suspected) to a medicinal product. Get this right and the rest of the system has something true to stand on. Get it wrong, drop a case, mis-code an event, lose the original reporter's words, and every downstream signal, aggregate report, and regulatory submission inherits the error.

### The four-element validity test

A valid ICSR requires four minimum elements before the clock on reporting even starts:

1. **An identifiable patient.** Not a name necessarily, but enough to establish that a real person exists: age, sex, initials, a case identifier, or a stated "a patient." One non-specific characteristic is enough.
2. **An identifiable reporter.** A healthcare professional, consumer, or other source you can in principle contact for follow-up. A wholly anonymous internet post with no contactable source generally fails this test.
3. **A suspect product.** A named medicinal product, vaccine, or biologic suspected of involvement.
4. **An adverse event or outcome.** A sign, symptom, abnormal lab value, or outcome described as adverse.

Miss any one and you do not yet have a *valid* (reportable) case, but you do have an obligation to follow up and try to complete it, and you must document that you tried. This four-element test is the front door, and it is where a lot of compliance failures begin, because intake staff either over-reject (discarding cases that should have been chased) or under-document (accepting a case without recording the follow-up attempts). ICH **E2D** ("Postapproval Safety Data Management," 2003) is the harmonized guidance that defines valid case management and these minimum criteria.

### The case lifecycle and its integrity controls

The data moves through a predictable lifecycle, and each stage has integrity controls:

| Stage | What happens | Integrity control |
|---|---|---|
| Receipt | Case arrives via call center, email, literature, portal, partner | Date of receipt captured automatically; "day zero" defined and timestamped |
| Triage | Validity (4 elements) and seriousness assessed | Seriousness criteria applied consistently; decisions attributable |
| Data entry | Event coded, narrative written, causality assessed | MedDRA coding; verbatim term preserved; audit trail on every field |
| Medical review | Physician reviews causality, expectedness, completeness | Reviewer identity recorded; changes versioned |
| Submission | Case transmitted to authorities | E2B(R3) transmission; acknowledgment retained |
| Follow-up | Missing data chased; case updated | Each version retained; nothing overwritten silently |

Two coding conventions do enormous work here. Adverse events are coded in **MedDRA** (Medical Dictionary for Regulatory Activities), maintained under ICH, which gives a standardized hierarchy from the broad System Organ Class (SOC) down through High Level Group Term, High Level Term, Preferred Term (PT), and Lowest Level Term (LLT). The integrity rule that inspectors care about: the reporter's original words, the *verbatim*, must be preserved alongside the coded term. You never throw away what the patient or clinician actually said, because the coding is an interpretation and interpretations get revisited (a new MedDRA version is released every March and September). Products and substances are increasingly identified using ISO IDMP (Identification of Medicinal Products) standards, which matter the moment you need to reconcile the same drug across markets, manufacturers, and partner agreements.

### Seriousness vs severity

Seriousness is the other determination that drives everything, because it changes the reporting timeline. An event is **serious** if it meets any one of these criteria:

- results in death;
- is life-threatening (the patient was at risk of death *at the time of the event*, not a hypothetical worse outcome);
- requires inpatient hospitalization or prolongs an existing hospitalization;
- causes persistent or significant disability or incapacity;
- is a congenital anomaly or birth defect;
- is an "important medical event" (IME) by medical judgment, that is, it may jeopardize the patient or require intervention to prevent one of the outcomes above.

Seriousness is not the same as severity. Severity describes intensity (mild, moderate, severe). A *severe* headache is not serious; a *brief* hospitalization for an arrhythmia is. Getting this distinction wrong is one of the most common findings in pharmacovigilance audits, because an event mis-classified as non-serious skips the 15-day expedited clock entirely.

> Worked example. A reporter says: "My mother, who is 71, took the tablets and ended up in the hospital overnight for an irregular heartbeat. She is fine now." Validity: identifiable patient (71-year-old female), reporter (the daughter, contactable), suspect product (the tablets), event ("irregular heartbeat," verbatim preserved). Seriousness: hospitalization, therefore serious, regardless of the reassuring "she is fine now." MedDRA: verbatim "irregular heartbeat" codes to a PT such as "Arrhythmia" or, with follow-up, a more specific term. Day zero is the date this call was received. This is a valid, serious case on a 15-day clock.

## Roles and responsibilities

Pharmacovigilance is a team sport, and inspectors expect a clear, documented division of labor. A typical operating model:

| Role | Owns | Data integrity stake |
|---|---|---|
| Intake / case processing associate | Receipt, validity check, data entry, MedDRA coding, narrative | Day-zero capture, verbatim preservation, complete fields |
| Medical reviewer (safety physician) | Causality, expectedness, seriousness confirmation, narrative QC | Attributable medical judgment, documented rationale |
| Drug safety / PV scientist | Signal detection, aggregate report authoring | Reconciliation of counts, signal disposition records |
| QPPV (EU) | Overall accountability for the PV system | Named, reachable, oversees PSMF accuracy |
| PV quality / QA | Audits, CAPA, SOP governance, inspection readiness | Audit-trail review evidence, deviation handling |
| Regulatory affairs | Submission to authorities, RSI and label management | Acknowledgment reconciliation, label-vs-RSI alignment |
| Computerized systems / validation | Safety database validation and change control | Validated state, Part 11/Annex 11 controls |

In the EU, the **Qualified Person for Pharmacovigilance (QPPV)** is a named, legally accountable individual residing and operating in the EU/EEA, responsible for the establishment and maintenance of the PV system. Naming a QPPV who is not actually informed of safety issues, the "QPPV on paper," is a recognized inspection failure.

## Reporting obligations: expedited and periodic

Once you have a valid case, the regulatory clock starts, and there are two parallel reporting streams: fast individual reports for the worst cases, and slower aggregate reports that step back and look at the whole picture.

### Expedited (individual) reporting

In the United States, postmarketing safety reporting for approved drugs is governed by **21 CFR 314.80** and for biologics by **21 CFR 600.80**. The headline rule: a serious *and* unexpected adverse experience, unexpected meaning not listed in the current approved labeling, must be reported to FDA as a **15-day Alert Report** (an "expedited report") within 15 calendar days of the applicant first receiving the information. Non-serious events, and serious-but-expected events, flow into periodic reports rather than the expedited stream. Reports are submitted electronically to FAERS (the FDA Adverse Event Reporting System) via the FDA Safety Reporting Portal or E2B gateway.

In the EU, the framework lives in the **Good Pharmacovigilance Practices (GVP) modules** published by EMA, with **Module VI** covering the collection, management, and submission of reports of suspected adverse reactions. EU timelines differentiate by seriousness: serious cases within 15 days, non-serious cases within 90 days, transmitted electronically to the **EudraVigilance** database in E2B(R3) format. ICH **E2D** harmonized the underlying case-management definitions used in both regions.

For investigational products, the parallel obligation is the SUSAR (Suspected Unexpected Serious Adverse Reaction): in the US under **21 CFR 312.32** (IND safety reporting), fatal or life-threatening within 7 calendar days and other serious-and-unexpected within 15. Knowing the difference between the postmarket 15-day rule and the IND 7/15-day rule is a frequent interview question; see [GCP audits and inspections](/articles/gcp-audits-and-inspections) and [ICH E6 Good Clinical Practice](/articles/ich-e6-good-clinical-practice).

The data integrity stakes in expedited reporting are concrete. "Day zero," the date the company first became aware of a valid case, is a recorded, defensible fact, not a convenience. The clock starts the moment *any* employee or contractual partner with a reporting duty becomes aware of a case meeting the four elements, not the day the central PV inbox happened to open it. Inspectors will pull cases and reconstruct the timeline from the system: when did the email land, when was the voicemail left, when did the literature screen flag the article? If your day-zero clock and your audit trail disagree, you have both a compliance problem and a data integrity problem, and the second is worse because it calls the whole system into question.

> Day-zero worked example. A sales representative hears about a serious reaction during a customer visit on a Friday and emails the safety mailbox the following Monday. Day zero is the Friday (the date a company affiliate first became aware), not the Monday. The 15-day clock runs from Friday. Training non-PV staff on this onward-reporting duty (usually within 1 business day to the PV function) is exactly what closes the gap inspectors probe.

### Periodic reporting: PSUR / PBRER

The aggregate report is where postmarketing safety becomes an argument rather than a list. The modern format is the **PBRER** (Periodic Benefit-Risk Evaluation Report), defined in **ICH E2C(R2)** (2012) and adopted in the EU as the **PSUR** (Periodic Safety Update Report) under **GVP Module VII**. The name shift from "safety" to "benefit-risk" was deliberate: a marketed product is not judged on harms alone but on whether the benefit still outweighs the accumulating risk.

A PBRER pulls together, over a defined interval, the worldwide safety experience. Its main building blocks include:

- worldwide marketing authorization status;
- actions taken in the interval for safety reasons (label changes, restrictions, suspensions);
- changes to the reference safety information (RSI);
- cumulative and interval exposure estimates (patient-time on drug);
- cumulative and interval case counts in summary tabulations;
- signals: new, ongoing, and closed, with their evaluation;
- evaluation of risks and new information by safety topic;
- benefit evaluation and an integrated benefit-risk analysis;
- conclusions and actions.

In the EU, the **EU reference dates (EURD) list** sets the data lock points (DLP) and submission schedule, and reports go through the **PSUR single assessment (PSUSA)** procedure so the same active substance is assessed once across the network rather than country by country.

From a data-integrity standpoint, the periodic report is a *reconciliation exercise at scale*. The case counts in the PBRER must match the cases in the safety database as of the data lock point, which must match what was submitted to authorities, which must match what partners reported under license agreements. When those numbers do not tie out, you do not just edit the report, you investigate why the source systems disagree, because the discrepancy usually means a case was lost, double-counted, or mis-classified somewhere upstream. The acceptance criterion: every number in the report is traceable to a reproducible database query run against the locked dataset, and the query specifications are retained.

| Report | Standard / regulation | Scope | Cadence |
|---|---|---|---|
| Expedited / 15-day | 21 CFR 314.80 / 600.80 (US); GVP Module VI, ICH E2D (EU) | Single serious & unexpected case | Within 15 calendar days |
| IND safety report (SUSAR) | 21 CFR 312.32 (US); GVP Module VI / CTR (EU) | Investigational serious & unexpected | 7 days (fatal/life-threatening), 15 days (other) |
| PBRER / PSUR | ICH E2C(R2); GVP Module VII | Aggregate benefit-risk over interval | Per EURD list / approval terms |
| DSUR | ICH E2F | Investigational product safety (development phase) | Annual |
| RMP | GVP Module V | Risk minimization commitments | Lifecycle, updated on change |

The **Risk Management Plan (RMP)** under GVP Module V deserves its own note: it documents the safety specification (important identified risks, important potential risks, missing information), the pharmacovigilance plan (routine plus any additional studies, such as a PASS), and risk minimization measures (routine, such as labeling, plus additional measures, such as a controlled-distribution program or educational materials). When a signal becomes a confirmed risk, the RMP is where the commitment to manage it gets recorded, and inspectors check that what the RMP promises actually happens.

## Signal detection and management

Reporting tells regulators what you found. Signal detection is how you *find* it. A **signal**, in the GVP **Module IX** sense, is information arising from one or more sources that suggests a new potentially causal association, or a new aspect of a known association, between a product and an event, judged sufficient to justify verifying action. It is not a confirmed risk. It is a hypothesis worth chasing.

Signals come from two complementary directions. **Qualitative** detection is a trained safety physician reading individual cases and noticing a pattern: three reports of the same unusual liver injury, a cluster of a rare event, a designated medical event (DME) that should never appear without scrutiny. **Quantitative** detection is statistical: disproportionality analysis run across the case database to find product-event pairs that occur more often than the background of the database would predict.

### Disproportionality measures

The common disproportionality measures are worth knowing by name because they show up in inspection questions and SOPs. They are all built on the classic 2x2 contingency table of your product vs all other products against the event of interest vs all other events.

| Measure | Family | What it does | Reading |
|---|---|---|---|
| PRR (Proportional Reporting Ratio) | Frequentist | Reporting rate of the event for your product / rate for all others | A common threshold flag: PRR >= 2, chi-square >= 4, with >= 3 cases |
| ROR (Reporting Odds Ratio) | Frequentist | Odds of the event for your product / odds for all others | Flag often taken as lower 95% CI bound > 1 |
| EBGM (Empirical Bayes Geometric Mean, MGPS) | Bayesian | Shrunken observed/expected ratio | EB05 (lower 5% bound) >= 2 is a common flag |
| IC (Information Component, BCPNN) | Bayesian | Log-based Bayesian disproportionality | IC025 (lower bound) > 0 flags a signal |

The Bayesian measures (EBGM and IC) shrink unstable estimates from small counts, which keeps a single-case fluke from masquerading as a signal. That property matters most for rare events and newly launched products where counts are tiny.

> Numeric example. Suppose across the database there are 8 reports of a specific liver injury PT for your product out of 4,000 total reports for your product, while the same PT appears in 2,000 of 2,000,000 reports for all other products. The proportion for your product is 8/4,000 = 0.002; for all others it is 2,000/2,000,000 = 0.001. PRR = 0.002 / 0.001 = 2.0. With a supporting chi-square and at least 3 cases, this pair crosses a common screening threshold and enters the signal workflow. The number does not prove causation; it earns the pair a documented review.

### The signal management workflow

A disproportionality hit is a flag, not a finding. Every flagged pair, and every qualitatively noticed pattern, goes into a tracked **signal management** workflow that GVP Module IX expects to be auditable:

1. **Detection** (qualitative review plus quantitative screening on a defined cadence).
2. **Validation** (is there enough evidence that this is a real new association worth investigating? document yes/no with rationale).
3. **Prioritization** (how urgent? based on seriousness, novelty, strength, public-health impact).
4. **Assessment** (full review of all available data: cases, literature, mechanism, epidemiology).
5. **Recommendation** (label change, further study, RMP update, no action, continued monitoring).
6. **Exchange of information and action** (notify authorities where required; implement the change).

Each step is documented with who decided what, when, and on what evidence. The integrity failure mode here is the "silent dismissal": a signal gets flagged, someone decides it is noise, and there is no record of the rationale. When an inspector asks "what happened to this signal?" the answer must be in the system, not in someone's memory. Acceptance criterion: every detected signal has a dated disposition with a documented rationale and an identifiable decision-maker, and the cadence of screening matches the SOP.

### Why coding consistency is the substrate

The data quality dependency runs deep. Disproportionality math is only as good as the coding underneath it. If liver events are coded inconsistently, some as "hepatic failure," some as "liver function test abnormal," some buried in free text, the statistics fragment the true rate across multiple terms and the signal dilutes below threshold. This is why MedDRA coding consistency and **Standardised MedDRA Queries (SMQs)**, predefined groupings of terms for a medical condition such as drug-induced liver injury or torsade de pointes, are not clerical niceties; they are the substrate the entire detection system runs on. Coding quality checks and periodic recoding to the current MedDRA version belong in the SOP, not as an afterthought.

## The safety database as a validated GxP system

The thing holding all of this, every ICSR, every version, every coding decision, every submission acknowledgment, is the safety database. Commercial systems exist (Oracle Argus and ArisGlobal LifeSphere are common industry examples; some organizations build on other platforms), but the regulatory expectation is platform-agnostic: the safety database is a **GxP computerized system** and must be validated and controlled accordingly.

That means it falls squarely under **21 CFR Part 11** in the US and **EU GMP Annex 11** in the EU, with **GAMP 5** (ISPE's risk-based framework, second edition, 2022) as the practical methodology. A validated safety system carries the same control set you would apply to any GxP application:

- **Validation lifecycle.** Documented user requirements (URS), risk assessment, functional and configuration specifications, installation/operational/performance qualification (IQ/OQ/PQ), and a requirements-traceability matrix linking each requirement to its test. Configuration (workflow rules, coding dictionaries, reporting rules, business-partner profiles) gets validated, not just the base software. See [user requirements and traceability](/articles/user-requirements-and-traceability) and the [GAMP 5 CSV framework](/articles/gamp5-csv-framework).
- **Audit trails.** Secure, computer-generated, time-stamped, capturing the who/what/when/old-value/new-value for any creation, modification, or deletion of a record. Critically, audit trails must be *reviewed*, not merely *enabled*; an unreviewed audit trail is an inspection finding waiting to happen. See [audit trail design and review](/articles/audit-trail-design-and-review) and [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).
- **Access control and electronic signatures.** Unique user accounts, role-based permissions, no shared logins, periodic access reviews, and signature-to-record binding under Part 11. See [electronic signatures implementation](/articles/electronic-signatures-implementation) and [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control).
- **Data lifecycle and retention.** Case data and all its versions retained for the required period (commonly the product's marketed life plus a defined number of years beyond, per regional rules), with no silent overwrites and a controlled archival/migration path. See [data lifecycle and metadata](/articles/data-lifecycle-and-metadata).
- **Change control.** Every configuration change, dictionary upgrade (MedDRA twice a year, plus periodic E2B and IDMP changes), and software patch assessed for impact and revalidated as risk dictates. See [change control for validated systems](/articles/change-control-validated-systems).
- **Backup, recovery, and business continuity.** Tested restore procedures, because a safety database that cannot be recovered cannot meet a 15-day reporting clock during an outage. A documented business-continuity plan for manual case handling during downtime is expected. See [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation).

ALCOA+ maps onto this directly. Every ICSR must be **A**ttributable (who entered and reviewed it), **L**egible, **C**ontemporaneous (entered close to receipt, with day-zero intact), **O**riginal (the verbatim preserved), and **A**ccurate, plus complete, consistent, enduring, and available. The "+" attributes are where safety systems are tested hardest: a case from eight years ago must still be retrievable and intact when a late-breaking signal makes it suddenly relevant. For the full breakdown, see [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and [data integrity foundations](/articles/data-integrity-foundations).

A widening frontier is automation. Organizations increasingly use natural-language processing and machine learning to triage intake, suggest MedDRA codes, and translate literature. None of that escapes validation. An automated coding suggestion is a computerized decision aid, and under a GAMP 5 risk-based view it requires defined intended use, performance qualification against a known reference set, human oversight of outputs, and monitoring for drift over time. The regulators have not relaxed the rules because the tooling got smarter; they have raised the bar on demonstrating that the smarter tooling does what you claim. See [validating AI GxP systems](/articles/validating-ai-gxp-systems) and [GxP ML model lifecycle](/articles/gxp-ml-model-lifecycle).

## Reconciliation: where data integrity gets tested in practice

Reconciliation is the unglamorous discipline that separates a defensible pharmacovigilance system from a fragile one. Safety data does not arrive through one clean pipe. It comes through clinical trial databases, partner companies, distributors, patient support programs, market research, social media monitoring, and literature screening. Each is a potential leak, and reconciliation is the periodic, documented check that no case fell through a gap between systems.

The classic reconciliation pairs:

- **Safety database vs clinical trial database.** Serious adverse events captured in the EDC for an ongoing study must also exist as ICSRs in the safety system. The two are populated by different teams for different purposes, so they drift. A documented periodic reconciliation (counts matched, discrepancies investigated and resolved, sign-off retained) is a standard inspection request. See [clinical data management and CDISC](/articles/clinical-data-management-cdisc).
- **Safety database vs business partners.** Under licensing and co-development agreements, a **Safety Data Exchange Agreement (SDEA)** (also called a pharmacovigilance agreement, or PVA) defines who reports what, to whom, within what timeline, in what format. Reconciliation confirms that every case a partner was obligated to send actually arrived and was processed. A missing partner case is a missing regulatory report. See [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements).
- **Safety database vs submission acknowledgments.** Every E2B transmission to EudraVigilance, FAERS, or a national authority generates an acknowledgment (ACK) message. Reconciling submitted cases against acknowledgments catches transmission failures (a negative ACK, a rejected case, a gateway timeout) before they become reporting violations.
- **Market research and patient support programs.** Adverse events mentioned in a market-research call, a copay-program interaction, or a nurse-support call are reportable. These channels are easy to forget and a recurring source of late or missed cases.

The acceptance criterion is binary and unforgiving: counts must match, and every discrepancy must be investigated to root cause and resolved with a documented rationale. "Close enough" is not a position you can defend. A reconciliation that finds a gap is doing its job; a reconciliation that never finds anything is often one that is not really being performed.

> Reconciliation worked example. A quarterly clinical-vs-safety reconciliation finds 142 SAEs in the trial EDC but 140 ICSRs in the safety database. Investigation shows two SAEs were entered in the EDC late on the last day of the quarter and the safety extract ran an hour earlier. Resolution: the two cases were already created the next morning, both within their reporting timelines; the SOP is amended to align the extract cutoff with the EDC cutoff. The gap is documented, root-caused, and closed. That paper trail is exactly what an inspector wants to see.

## Common mistakes and recurring inspection findings

Patterns that show up across pharmacovigilance audits and inspections (generic, not tied to any one organization):

- **Late expedited reports** caused by a day-zero clock that started at the central inbox rather than at first company awareness, usually because field staff, medical information, or a partner were not trained to forward within one business day.
- **Seriousness mis-classification** that downgrades a reportable case (treating "severe" as the criterion instead of the six serious-outcome criteria), pushing a 15-day case into the periodic stream.
- **Verbatim lost.** Coding applied directly over the reporter's words with no preserved original term, breaking the "Original" leg of ALCOA+ and making later recoding impossible.
- **Silent signal dismissal.** Flagged signals closed without a documented rationale or decision-maker, so the disposition cannot be reconstructed.
- **Audit trail enabled but never reviewed.** No procedure, no records, no evidence of who reviewed what and when. One of the most common data-integrity citations across all of GxP, and pharmacovigilance is not exempt.
- **Missing or stale reconciliation.** No documented SDEA reconciliation with a partner, or a clinical-vs-safety reconciliation that has not run on schedule.
- **PSMF does not match reality.** The Pharmacovigilance System Master File describes a process or a vendor that is no longer how the system actually runs.
- **Out-of-date system configuration.** A MedDRA upgrade applied without change control, or a reporting-rule change made directly in production without revalidation.
- **QPPV on paper.** A named QPPV who is not genuinely kept informed of emerging safety issues and cannot describe the system they are accountable for.

## What inspectors look for

A pharmacovigilance inspection, run in the US through FDA's postmarket drug safety oversight under 21 CFR 314.80/600.80, and in the EU by national competent authorities conducting dedicated PV inspections against the GVP modules, tends to converge on a small set of questions. Knowing them tells you where to harden the system.

- **Pick a case, trace it end to end.** Inspectors choose an ICSR and follow it: date of receipt, day-zero determination, validity, seriousness and expectedness assessment, MedDRA coding against the verbatim, causality, medical review, submission, and acknowledgment. Every step must be in the system, attributable and time-stamped. Breaks in this chain are the most common serious findings.
- **Late reports.** They will sample expedited cases and check the interval between day zero and submission against the 15-day clock. A pattern of late reports points at an intake or triage failure and invites a deeper look.
- **Audit-trail review evidence.** Not "is the audit trail on" but "show me that you review it, and what you did when it surfaced an unexpected change."
- **Signal management completeness.** They will ask what signals were detected, validated, and dispositioned in a period, and pull the documented rationale for signals that were closed without action.
- **Reconciliation records.** Evidence that clinical-vs-safety and partner-vs-safety reconciliations happened on schedule, with discrepancies resolved to root cause.
- **System validation status.** Current validation documentation for the safety database, including the most recent MedDRA upgrade and any configuration changes, with change-control records.
- **The QPPV and the PSMF (EU).** A **Qualified Person for Pharmacovigilance** must be named and reachable, and the **Pharmacovigilance System Master File**, the GVP Module II document describing the whole PV system, must be current and accurately reflect how the system actually runs.

For broader inspection mechanics, see [FDA inspection readiness](/articles/fda-inspection-readiness), [managing a live inspection](/articles/managing-a-live-inspection), and [FDA vs EMA inspection dynamics](/articles/fda-vs-ema-inspection-dynamics). When an inspection produces observations, the response discipline is the same as anywhere in GxP: see [FDA 483 response strategy](/articles/fda-483-response-strategy) and [what is a CAPA](/articles/what-is-a-capa).

## Interview questions you should be ready for

These come up in pharmacovigilance, drug-safety, and PV-systems-validation interviews. Short, defensible answers:

**What are the four elements of a valid ICSR?** An identifiable patient, an identifiable reporter, a suspect product, and an adverse event. All four are needed before the case is valid and the reporting clock starts; if one is missing, you follow up to obtain it and document the attempt.

**Difference between serious and severe?** Severe describes intensity; serious is a regulatory category based on outcome (death, life-threatening, hospitalization or prolongation, persistent or significant disability, congenital anomaly, or important medical event). A severe headache is not serious; an overnight hospitalization is.

**When does the 15-day clock start?** On day zero, the date any company affiliate or contractual partner with a reporting duty first becomes aware of a valid (four-element) case. Not the day the central PV function opened it.

**What is the difference between a 15-day postmarket report and an IND safety report?** The postmarket expedited report (21 CFR 314.80/600.80) covers serious and unexpected marketed-product cases within 15 calendar days. The IND safety report (21 CFR 312.32) covers investigational SUSARs: 7 calendar days for fatal or life-threatening, 15 for other serious-and-unexpected.

**PSUR vs PBRER vs DSUR?** PBRER is the ICH E2C(R2) format for the periodic aggregate benefit-risk report of a marketed product; the EU calls its version the PSUR (GVP Module VII). The DSUR (ICH E2F) is the annual aggregate safety report for products still in development.

**What is a signal and how do you manage one?** A signal is information suggesting a new potentially causal association, or a new aspect of a known one, sufficient to justify verifying action. It is managed through detection, validation, prioritization, assessment, recommendation, and action (GVP Module IX), each step documented.

**Explain disproportionality analysis.** A statistical screen across the case database (PRR, ROR, EBGM, IC) that flags product-event pairs reported more often than the database background would predict. A flag is a hypothesis to investigate, not a confirmed risk; Bayesian measures shrink unstable small-count estimates.

**Why must the verbatim be preserved?** Because the MedDRA code is an interpretation that may be revised, and coding consistency can be re-examined. Losing the verbatim breaks the "Original" attribute of ALCOA+ and makes recoding to a later MedDRA version unreliable.

**Why is the safety database a validated system, and under what regulations?** Because it holds GxP records and decisions; it falls under 21 CFR Part 11 and EU GMP Annex 11, validated using a risk-based GAMP 5 approach, including configuration, audit trails, access control, and change control.

**What is reconciliation and why does it matter?** A periodic documented check that counts of cases tie out across sources (clinical EDC, partners via SDEA, submission acknowledgments) so no reportable case is lost. Each discrepancy must be root-caused and resolved.

**What is the QPPV and the PSMF?** The QPPV is the named EU-based individual accountable for the PV system; the PSMF (GVP Module II) is the master document describing that system and must accurately reflect how it actually operates.

## Practical tips

- Train every customer-facing function (sales, medical information, market access, patient support, the partner's staff) on the duty to forward a possible adverse event within one business day. Most late-report findings die here.
- Make day-zero capture automatic and tamper-evident. If a human can backdate it, an inspector will ask why.
- Keep the verbatim untouched in a dedicated field; code into a separate field. Never let a recoding overwrite the original term.
- Write signal dispositions like an inspector will read them, because one will. "Reviewed, considered background noise" is not a rationale; the evidence and the decision-maker are.
- Treat MedDRA upgrades as change-controlled events with an impact assessment on signal thresholds and any saved queries, not as routine IT patches.
- Run reconciliations on a fixed calendar with named owners, and retain the sign-off even when there are zero discrepancies. The record that "we checked and it tied out" is itself evidence.
- Keep the PSMF a living document; review it on a schedule and after any material change to vendors, systems, or process.

## Bringing it together

The through-line from development to postmarket is continuity of evidence. A clinical program proves a benefit-risk balance in a controlled population; pharmacovigilance defends that balance in the real world, where the population is larger, messier, and unbounded in time. The discipline that makes it credible is the same discipline that makes a batch record or a clinical dataset credible: a defined process, a validated system, complete and attributable records, and the willingness to investigate every discrepancy to root cause rather than paper over it.

For a practitioner crossing into safety from GMP or GCP, the encouraging part is that the muscle already exists. ALCOA+, Part 11, Annex 11, GAMP 5, change control, audit-trail review, validation lifecycle: these are not new ideas in pharmacovigilance, they are the same ideas pointed at a different dataset. The ICSR is your batch record. The PBRER is your trend review. Signal detection is your out-of-specification investigation. And reconciliation is the reminder that in a system fed by many sources, the integrity of the whole depends on never quietly losing a single case.
