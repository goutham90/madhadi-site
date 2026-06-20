---
title: "Pharmacovigilance and Safety Data: GVP and Data Integrity After Approval"
description: "How individual case safety reports, expedited and periodic reporting, signal detection, and a validated safety database carry GxP data integrity obligations into the postmarketing phase."
pubDate: 2026-06-20
tags: ["pharmacovigilance", "GVP", "data integrity", "ICSR", "signal detection", "PSUR", "safety database", "computerized system validation"]
pillar: "clinical-gcp"
tier: "Intermediate"
---

A drug does not stop being a data problem the day it gets approved. It becomes a different one. During development, the dataset is finite, the patients are counted, and the protocol bounds what gets collected. After launch, the population is everyone who fills a prescription, the reporters are pharmacists and call-center agents and patients who Google a side effect at 2 a.m., and the data arrives forever. Pharmacovigilance, the science of detecting, assessing, understanding, and preventing adverse effects, is the system that keeps a marketed product honest about its own harms.

For anyone who came up through GMP or GCP, the useful reframe is this: pharmacovigilance is a GxP discipline with the same backbone you already know. There is a regulated process, a validated computerized system, documented procedures, audit trails, and an inspector who will eventually pull a case and trace it end to end. The vocabulary changes, you trade batch records for individual case safety reports and stability data for signal detection, but the data integrity expectations are the same ones written into ALCOA+ and 21 CFR Part 11. This piece walks from the atom of safety data outward: the individual case, the reporting obligations built on top of it, the signal work that turns cases into knowledge, and the validated database that has to hold all of it without losing a record.

## The atom: the individual case safety report

Everything in postmarketing safety is built on the Individual Case Safety Report, or ICSR. An ICSR is the structured record of a single adverse event experienced by a single patient, attributed (at least as suspected) to a medicinal product. Get this right and the rest of the system has something true to stand on. Get it wrong, drop a case, mis-code an event, lose the original reporter's words, and every downstream signal, aggregate report, and regulatory submission inherits the error.

A valid ICSR requires four minimum elements before the clock on reporting even starts: an identifiable patient, an identifiable reporter, a suspect product, and an adverse event or outcome. Miss any one and you do not yet have a reportable case, but you do have an obligation to follow up and try to complete it. This four-element test is the front door, and it is where a lot of compliance failures begin, because intake staff either over-reject (discarding cases that should have been chased) or under-document (accepting a case without recording the follow-up attempts).

The data moves through a predictable lifecycle, and each stage has integrity controls:

| Stage | What happens | Integrity control |
|---|---|---|
| Receipt | Case arrives via call center, email, literature, portal, partner | Date of receipt captured automatically; "day zero" defined and timestamped |
| Triage | Validity (4 elements) and seriousness assessed | Seriousness criteria applied consistently; decisions attributable |
| Data entry | Event coded, narrative written, causality assessed | MedDRA coding; verbatim term preserved; audit trail on every field |
| Medical review | Physician reviews causality, expectedness, completeness | Reviewer identity recorded; changes versioned |
| Submission | Case transmitted to authorities | E2B(R3) transmission; acknowledgment retained |
| Follow-up | Missing data chased; case updated | Each version retained; nothing overwritten silently |

Two coding conventions do enormous work here. Adverse events are coded in **MedDRA** (Medical Dictionary for Regulatory Activities), maintained under ICH, which gives a standardized hierarchy from the broad System Organ Class down to the granular Preferred Term and Lowest Level Term. The integrity rule that inspectors care about: the reporter's original words, the *verbatim*, must be preserved alongside the coded term. You never throw away what the patient or clinician actually said, because the coding is an interpretation and interpretations get revisited. Products and substances are increasingly identified using ISO IDMP (Identification of Medicinal Products) standards, which matter the moment you need to reconcile the same drug across markets, manufacturers, and partner agreements.

Seriousness is the other determination that drives everything. An event is **serious** if it results in death, is life-threatening, requires or prolongs hospitalization, causes persistent or significant disability or incapacity, is a congenital anomaly, or is an "important medical event" by medical judgment. Seriousness is not the same as severity, a severe headache is not serious; a brief hospitalization for an arrhythmia is. Getting this distinction wrong is one of the most common findings in pharmacovigilance audits, because it changes the reporting timeline.

## Reporting obligations: expedited and periodic

Once you have a valid case, the regulatory clock starts, and there are two parallel reporting streams: fast individual reports for the worst cases, and slower aggregate reports that step back and look at the whole picture.

### Expedited (individual) reporting

In the United States, postmarketing safety reporting is governed by **21 CFR 314.80** for drugs and 600.80 for biologics. The headline rule: a serious *and* unexpected adverse experience, unexpected meaning not listed in the current labeling, must be reported to FDA as a **15-day Alert Report** (an "expedited report") within 15 calendar days of the sponsor first becoming aware of it. Non-serious and serious-but-expected events flow into periodic reports rather than the expedited stream.

In the EU, the framework lives in the **Good Pharmacovigilance Practices (GVP) modules** published by the EMA, with **Module VI** covering the collection, management, and submission of ICSRs. The EU timelines differentiate by seriousness: serious cases within 15 days, non-serious cases within 90 days, transmitted electronically to the **EudraVigilance** database. ICH **E2D** harmonized the definitions and good case management practices that underpin both regions.

The data integrity stakes in expedited reporting are concrete. "Day zero", the date the company first became aware of a valid case, is a recorded, defensible fact, not a convenience. Inspectors will pull cases and reconstruct the timeline from the system: when did the email land, when was the voicemail left, when did the literature screen flag the article? If your day-zero clock and your audit trail disagree, you have both a compliance problem and a data integrity problem, and the second is worse because it calls the whole system into question.

### Periodic reporting: PSUR / PBRER

The aggregate report is where postmarketing safety becomes an argument rather than a list. The modern format is the **PBRER** (Periodic Benefit-Risk Evaluation Report), defined in **ICH E2C(R2)** and adopted in the EU as the **PSUR** (Periodic Safety Update Report). The name shift from "safety" to "benefit-risk" was deliberate: a marketed product is not judged on harms alone but on whether the benefit still outweighs the accumulating risk.

A PBRER pulls together, over a defined interval, the worldwide safety experience: cumulative and interval case counts, signals evaluated and their disposition, changes to reference safety information, literature, clinical-trial and observational data, and an integrated benefit-risk assessment. In the EU, the **EU reference dates (EURD) list** sets the data lock points and submission schedule, and reports go through the **PSUR single assessment** procedure so the same active substance is assessed once across the network rather than country by country.

From a data-integrity standpoint, the periodic report is a *reconciliation exercise at scale*. The case counts in the PBRER must match the cases in the safety database, which must match what was submitted to authorities, which must match what partners reported under license agreements. When those numbers do not tie out, you do not just edit the report, you investigate why the source systems disagree, because the discrepancy usually means a case was lost, double-counted, or mis-classified somewhere upstream.

| Report | Standard / regulation | Scope | Cadence |
|---|---|---|---|
| Expedited / 15-day | 21 CFR 314.80 (US); GVP Module VI, ICH E2D (EU) | Single serious & unexpected case | Within 15 calendar days |
| PBRER / PSUR | ICH E2C(R2); GVP Module VII | Aggregate benefit-risk over interval | Per EURD list / approval terms |
| DSUR | ICH E2F | Investigational product safety (development phase) | Annual |
| RMP | GVP Module V | Risk minimization commitments | Lifecycle, updated on change |

## Signal detection and management

Reporting tells regulators what you found. Signal detection is how you *find* it. A **signal**, in the GVP **Module IX** sense, is information arising from one or more sources that suggests a new potentially causal association, or a new aspect of a known association, between a product and an event, judged sufficient to justify verifying action. It is not a confirmed risk. It is a hypothesis worth chasing.

Signals come from two complementary directions. **Qualitative** detection is a trained safety physician reading individual cases and noticing a pattern, three reports of the same unusual liver injury, a cluster of a rare event, a designated medical event that should never appear without scrutiny. **Quantitative** detection is statistical: disproportionality analysis run across the case database to find product-event pairs that occur more often than chance would predict.

The common disproportionality measures are worth knowing by name because they show up in inspection questions and SOPs:

- **PRR** (Proportional Reporting Ratio) and **ROR** (Reporting Odds Ratio), frequentist measures comparing the reporting rate of an event for your product against all other products in the database.
- **EBGM** (Empirical Bayes Geometric Mean, from the MGPS algorithm) and **IC** (Information Component, from a Bayesian neural-network approach), Bayesian measures that shrink unstable estimates from small counts, which keeps a single-case fluke from masquerading as a signal.

A disproportionality hit is a flag, not a finding. Every flagged pair goes into a tracked **signal management** workflow: detection, validation, prioritization, assessment, recommendation, and action, each step documented with who decided what, when, and on what evidence. GVP Module IX expects this to be auditable. The integrity failure mode here is the "silent dismissal": a signal gets flagged, someone decides it is noise, and there is no record of the rationale. When an inspector asks "what happened to this signal?" the answer must be in the system, not in someone's memory.

The data quality dependency runs deep. Disproportionality math is only as good as the coding underneath it. If liver events are coded inconsistently, some as "hepatic failure," some as "liver function abnormal," some buried in free text, the statistics fragment the true rate across multiple terms and the signal disappears below threshold. This is why MedDRA coding consistency and Standardised MedDRA Queries (SMQs, predefined groupings of terms for a medical condition) are not clerical niceties; they are the substrate the entire detection system runs on.

## The safety database as a validated GxP system

The thing holding all of this, every ICSR, every version, every coding decision, every submission acknowledgment, is the safety database. Commercial systems exist (Oracle Argus and ArisGlobal LifeSphere are common industry examples; some organizations build on other platforms), but the regulatory expectation is platform-agnostic: the safety database is a **GxP computerized system** and must be validated and controlled accordingly.

That means it falls squarely under **21 CFR Part 11** in the US and **EU GMP Annex 11** in the EU, with **GAMP 5** (ISPE's risk-based framework, second edition) as the practical methodology. A validated safety system carries the same control set you would apply to any GxP application:

- **Validation lifecycle**, documented user requirements, risk assessment, design and configuration specifications, installation/operational/performance qualification, and a traceability matrix linking requirements to tests. Configuration (workflow rules, coding dictionaries, reporting rules) gets validated, not just the base software.
- **Audit trails**, secure, computer-generated, time-stamped, and capturing the who/what/when/old-value/new-value for any creation, modification, or deletion of a record. Critically, audit trails must be *reviewed*, not merely *enabled*; an unreviewed audit trail is an inspection finding waiting to happen.
- **Access control and electronic signatures**, unique user accounts, role-based permissions, no shared logins, and signature-to-record binding under Part 11.
- **Data lifecycle and retention**, case data and its versions retained for the required period (typically the product's marketed life plus years beyond), with no silent overwrites and a controlled archival/migration path.
- **Change control**, every configuration change, dictionary upgrade (MedDRA versions update twice a year), and software patch assessed for impact and revalidated as risk dictates.
- **Backup, recovery, and business continuity**, tested restore procedures, because a safety database that cannot be recovered cannot meet a 15-day reporting clock during an outage.

ALCOA+ maps onto this directly. Every ICSR must be **A**ttributable (who entered and reviewed it), **L**egible, **C**ontemporaneous (entered close to receipt, with day-zero intact), **O**riginal (the verbatim preserved), and **A**ccurate, plus complete, consistent, enduring, and available. The "+" attributes are where safety systems are tested hardest: a case from eight years ago must still be retrievable and intact when a late-breaking signal makes it suddenly relevant.

A widening frontier is automation. Organizations increasingly use natural-language processing and machine learning to triage intake, suggest MedDRA codes, and translate literature. None of that escapes validation. An automated coding suggestion is a computerized decision aid, and under a GAMP 5 risk-based view it requires defined intended use, performance qualification against known cases, human oversight of outputs, and monitoring for drift. The regulators have not relaxed the rules because the tooling got smarter; they have raised the bar on demonstrating that the smarter tooling does what you claim.

## Reconciliation: where data integrity gets tested in practice

Reconciliation is the unglamorous discipline that separates a defensible pharmacovigilance system from a fragile one. Safety data does not arrive through one clean pipe. It comes through clinical trial databases, partner companies, distributors, patient support programs, market research, social media monitoring, and literature screening. Each is a potential leak, and reconciliation is the periodic, documented check that no case fell through a gap between systems.

The classic reconciliation pairs:

- **Safety database vs. clinical trial database.** Serious adverse events captured in the EDC for an ongoing study must also exist as ICSRs in the safety system. The two are populated by different teams for different purposes, so they drift. A documented periodic reconciliation, counts matched, discrepancies investigated and resolved, sign-off retained, is a standard inspection request.
- **Safety database vs. business partners.** Under licensing and co-development agreements, a **Safety Data Exchange Agreement (SDEA)** (also called a pharmacovigilance agreement) defines who reports what, to whom, within what timeline. Reconciliation confirms that every case a partner was obligated to send actually arrived and was processed. A missing partner case is a missing regulatory report.
- **Safety database vs. submission acknowledgments.** Every E2B transmission to EudraVigilance, FAERS, or a national authority generates an acknowledgment. Reconciling submitted cases against acknowledgments catches transmission failures before they become reporting violations.
- **Market research and patient support programs.** Adverse events mentioned in a market-research call or a nurse-support interaction are reportable. These channels are easy to forget and a recurring source of late or missed cases.

The acceptance criterion is binary and unforgiving: counts must match, and every discrepancy must be investigated to root cause and resolved with a documented rationale. "Close enough" is not a position you can defend. A reconciliation that finds a gap is doing its job; a reconciliation that never finds anything is often one that is not really being performed.

## What inspectors look for

A pharmacovigilance inspection, run in the US by FDA's drug safety oversight under 21 CFR 314.80/600.80, and in the EU by national competent authorities conducting dedicated PV inspections against the GVP modules, tends to converge on a small set of questions. Knowing them tells you where to harden the system.

- **Pick a case, trace it end to end.** Inspectors choose an ICSR and follow it: date of receipt, day-zero determination, seriousness and expectedness assessment, MedDRA coding against the verbatim, causality, medical review, submission, and acknowledgment. Every step must be in the system, attributable and time-stamped. Breaks in this chain are the most common serious findings.
- **Late reports.** They will sample expedited cases and check the interval between day zero and submission against the 15-day clock. A pattern of late reports points at an intake or triage failure and invites a deeper look.
- **Audit-trail review evidence.** Not "is the audit trail on" but "show me that you review it." Unreviewed audit trails are a frequent data-integrity citation across GxP, and pharmacovigilance is no exception.
- **Signal management completeness.** They will ask what signals were detected, validated, and dispositioned in a period, and pull the documented rationale for signals that were closed without action. Silent dismissals get flagged.
- **Reconciliation records.** Evidence that clinical-vs-safety and partner-vs-safety reconciliations happened on schedule, with discrepancies resolved. Missing reconciliation is missing assurance that cases were not lost.
- **System validation status.** Current validation documentation for the safety database, including the most recent MedDRA upgrade and any configuration changes, with change-control records. An out-of-date or unvalidated configuration undermines confidence in every record the system holds.
- **The QPPV and the PSMF (EU).** A **Qualified Person for Pharmacovigilance** must be named and reachable, and the **Pharmacovigilance System Master File**, the GVP Module II document describing the whole PV system, must be current and accurately reflect how the system actually runs. A PSMF that describes a system different from the one in operation is its own finding.

## Bringing it together

The through-line from development to postmarket is continuity of evidence. A clinical program proves a benefit-risk balance in a controlled population; pharmacovigilance defends that balance in the real world, where the population is larger, messier, and unbounded in time. The discipline that makes it credible is the same discipline that makes a batch record or a clinical dataset credible: a defined process, a validated system, complete and attributable records, and the willingness to investigate every discrepancy to root cause rather than paper over it.

For a practitioner crossing into safety from GMP or GCP, the encouraging part is that the muscle already exists. ALCOA+, Part 11, Annex 11, GAMP 5, change control, audit-trail review, validation lifecycle, these are not new ideas in pharmacovigilance, they are the same ideas pointed at a different dataset. The ICSR is your batch record. The PBRER is your trend review. Signal detection is your out-of-specification investigation. And reconciliation is the reminder that in a system fed by many sources, the integrity of the whole depends on never quietly losing a single case.
