---
title: "GCP Audits and Regulatory Inspections: Sponsor, Site, and Vendor Audit Programs"
description: "How to build and run a GCP audit program across sponsor systems, investigator sites, and vendors, and how to prepare for and survive an FDA BIMO or EMA GCP inspection."
pubDate: 2026-06-20
tags: ["gcp", "clinical-qa", "audits", "inspections", "bimo", "capa", "vendor-qualification"]
pillar: "clinical-gcp"
tier: "Advanced"
---

A clinical quality assurance group lives or dies on two activities: the audits it runs on itself, its sites, and its vendors before a regulator shows up, and the way it handles the regulator when one does. Both run on the same engine, which is Good Clinical Practice. If your audit program is risk-based, documented, and feeds a real CAPA loop, an inspection is a confirmation exercise. If it is a checklist you run once a year to satisfy an SOP, the inspection becomes a discovery exercise, and discovery in front of an inspector is where 483 observations and integrity findings come from.

This article covers the full GCP audit and inspection program: the regulatory basis, how to design the audit program, the difference between routine and for-cause audits, how to run site and vendor audits, how to handle an FDA Bioresearch Monitoring (BIMO) or EMA GCP inspection, and how the CAPA loop closes it all out. It is written for the person who owns or works inside a clinical QA function.

---

## The regulatory basis: what GCP audits and inspections rest on

Before designing anything, you need to know which documents the auditors and inspectors are actually holding.

### ICH E6(R2) Good Clinical Practice

The controlling standard is **ICH E6(R2), Integrated Addendum to ICH E6(R1): Guideline for Good Clinical Practice**, finalized in 2016 and adopted by FDA, EMA, and the other ICH regions. It defines audit and inspection explicitly:

> **Audit** (1.6): A systematic and independent examination of trial-related activities and documents to determine whether the evaluated trial-related activities were conducted, and the data were recorded, analyzed and accurately reported according to the protocol, sponsor's standard operating procedures (SOPs), Good Clinical Practice, and the applicable regulatory requirement(s).

> **Inspection** (1.29): The act by a regulatory authority(ies) of conducting an official review of documents, facilities, records, and any other resources that are deemed by the authority(ies) to be related to the clinical trial...

The structural point in that pair of definitions: an **audit is what the sponsor does**; an **inspection is what the authority does**. Section 5.19 (Audit) makes the sponsor responsible for a written audit procedure, for auditor independence from the audited activity, and for keeping audit certificates and reports protected so they are not routinely demanded by inspectors. Section 5.2 (Contract Research Organization) makes the sponsor responsible for any trial-related duty it transfers to a CRO or vendor, which is why vendor audits exist at all. Section 5.0 (Quality Management) added in R2 introduces risk-based quality management, which is the basis for risk-based audit planning.

E6(R3) was finalized in 2023 and is being adopted across regions, sharpening the quality-by-design and risk-proportionate themes. The audit and inspection logic carries forward. Build to the version in force in your protocols and reference R3 where it applies.

### FDA regulations and BIMO

FDA does not regulate through ICH directly. It uses its own regulations, and the inspectors enforce them:

- **21 CFR Part 312** (Investigational New Drug Application), including 312.50 (sponsor general responsibilities), 312.53 (selecting investigators and monitors), 312.56 (monitoring), 312.58 (FDA access to records), and 312.62 (investigator recordkeeping and retention).
- **21 CFR Part 50** (Protection of Human Subjects, informed consent).
- **21 CFR Part 56** (Institutional Review Boards).
- **21 CFR Part 54** (Financial Disclosure by Clinical Investigators).
- **21 CFR Part 11** (Electronic Records; Electronic Signatures) for any computerized system holding trial data.
- For devices, **21 CFR Part 812** (Investigational Device Exemptions).

FDA's inspection arm for trials is the **Bioresearch Monitoring (BIMO) program**, run under a set of Compliance Program Guidance Manuals (CPGMs): the clinical investigator program (7348.811), the sponsor/monitor/CRO program (7348.810), and the IRB program (7348.809). When an inspector arrives, they are working from the relevant CPGM. Reading those CPGMs is the single most useful prep you can do, because they tell you literally what the inspector will look at and in what order.

### EMA and the GCP inspection framework

In the EU, GCP is law through **Regulation (EU) No 536/2014 (the Clinical Trials Regulation, CTR)**, applied from 31 January 2022, which replaced Directive 2001/20/EC. GCP inspections are coordinated through EMA's GCP Inspectors Working Group and carried out by national competent authority inspectors. The EMA inspection procedures and the older but still referenced guidance on the conduct of GCP inspections describe the process. The CTR also introduced the Clinical Trials Information System (CTIS) as the single entry point for submissions across member states, which changes the document trail inspectors follow.

### MHRA and other authorities

The UK MHRA runs a statutory GCP inspection program with a published grading scheme (critical, major, minor, plus other) that many sponsors adopt as their internal classification language. PMDA (Japan) and other ICH regulators run parallel programs. The vocabulary differs slightly, but the substance is the same.

---

## Designing the GCP audit program

An audit program is a plan, not a pile of audits. The deliverable is a documented, risk-based **audit program** or **audit master schedule**, governed by an SOP, that says what you will audit, why, when, and to what standard.

### Why a program is required

ICH E6(R2) 5.19.1 requires the sponsor to ensure that trials are audited as part of quality assurance, and 5.19.2 requires that the purpose, selection, procedure, frequency, and report format of audits be defined in writing. The risk rationale: you cannot audit everything every year, so you must steer finite auditor time toward the activities most likely to harm subjects or data. An audit program that picks targets by risk is defensible; one that picks them by habit is not.

### What goes in the program

A complete annual GCP audit program document contains:

| Element | What it specifies |
|---|---|
| Scope and objectives | Which trials, systems, processes, sites, and vendors are in scope for the period |
| Risk assessment | The methodology and the resulting risk scores driving selection |
| Audit universe | The full list of auditable entities (sites, vendors, processes, systems, study documents) |
| Audit types | Routine/scheduled, for-cause/directed, system/process, database, document/TMF |
| Schedule | Planned quarter or month for each audit, with named lead auditor |
| Auditor assignments | Who audits what, with independence confirmed |
| Standards and references | The applicable regulations, ICH version, and SOPs each audit measures against |
| Reporting and escalation | Report timelines, classification scheme, escalation triggers |
| Metrics | KPIs the program reports up (findings per audit, CAPA closure on time, repeat findings) |

### How to build it: the risk-based selection procedure

1. **Define the audit universe.** List every auditable entity: each active and recently completed trial, each investigator site (or a sample frame of sites), each vendor performing a delegated GCP activity, each computerized system holding subject or trial data, and each core process (informed consent, IP accountability, safety reporting, monitoring, data management).
2. **Score risk per entity.** Use a consistent rubric. Typical factors: subject vulnerability and trial phase, enrollment volume and number of sites, complexity (adaptive design, complex IP handling, decentralized elements), novelty of the vendor or system, prior audit and inspection history, monitoring metrics (open queries, protocol deviations, screen-failure or withdrawal anomalies), and proximity to a submission. Weight and sum.
3. **Set frequency rules.** Tie audit frequency to score bands. For example, high-risk vendors audited every 1-2 years, medium every 2-3, low by questionnaire or remote review. New critical vendors get a qualification audit before go-live regardless of score.
4. **Reserve for-cause capacity.** Do not schedule auditors to 100 percent. Hold back roughly 20-30 percent of audit days for directed audits triggered during the year. For-cause work is unplannable and it is also the highest-value work, so it must have room.
5. **Approve and baseline.** QA management approves the program. It becomes the controlled baseline you measure execution against.
6. **Reassess on triggers.** The program is living. A serious deviation, a safety signal, a failed vendor deliverable, or a regulator action on a peer should pull the program back open mid-year.

### Acceptance criteria for the program

A good audit program is risk-traceable (every scheduled audit maps to a risk score or a written trigger), resourced (auditor days reconcile to the schedule with for-cause reserve), independent (no auditor scheduled to audit their own work), measurable (it carries KPIs), and approved before the period starts. If a manager cannot explain in one sentence why a given audit is on the schedule and another is not, the program is not risk-based.

### Roles

QA owns and approves the program. The lead GCP auditor or audit program manager builds and maintains it. Clinical operations, data management, pharmacovigilance, and the study teams feed risk inputs. Senior management endorses it through quality management review, consistent with the management responsibility theme in ICH Q10 for the broader quality system.

---

## Routine versus for-cause audits

These are different instruments. Confusing them is a common program weakness.

### Routine (scheduled, systematic) audits

A routine audit is planned, periodic, and broad. It samples to confirm that a site, vendor, or process is operating in control. It is scheduled in the program based on risk, and it follows a standard agenda and checklist. Its output answers: does this entity meet GCP and our procedures across the activities we sampled?

### For-cause (directed, triggered) audits

A for-cause audit is launched because something happened. It is narrow, deep, and fast. It targets a specific concern. The output answers: what went wrong, how far does it reach, and is the data and subject safety affected?

Typical for-cause triggers:

- A serious or repeated GCP non-compliance reported by monitoring.
- A safety signal or a serious adverse event reporting failure.
- Enrollment or data anomalies, including unusual screen-pass rates, identical data patterns, or implausible visit timing that suggest fabrication.
- A whistleblower or complaint.
- A failed vendor deliverable or a missed migration.
- A regulator finding at a peer site or a class issue across a CRO.
- A data integrity signal, such as audit-trail gaps or backdated entries.

### How a for-cause audit differs in execution

Scope it tightly to the trigger, but follow the data wherever it leads. Move quickly, because subjects may be at risk and because a regulator may be days behind you. Preserve evidence; a for-cause audit that touches possible fraud must protect the original records and the audit trail rather than working from copies. Escalate immediately on findings that affect subject safety or data reliability. The report often feeds directly into a recall of data, an unblinding decision, exclusion of a site's data from analysis, or a report to the authority.

> Practical tip: if a for-cause audit confirms misconduct or a reportable serious breach, the timeline to notify the authority is short. Under the EU CTR, a serious breach likely to affect subject safety or data reliability must be reported to the relevant authorities without undue delay and not later than seven days of becoming aware. Know your reporting clock before you need it.

---

## Site (investigator) audits

The investigator site is where consent happens, where IP is dosed, and where source data is created. A site audit checks that what is in the database can be traced to a real subject who consented and was treated per protocol.

### Why and on what basis

ICH E6(R2) Section 4 places direct obligations on the investigator: qualification (4.1), adequate resources (4.2), medical care of subjects (4.3), protocol compliance (4.5), IP accountability (4.6), randomization and unblinding (4.7), informed consent (4.8), records and reports including source documents and the ALCOA attributes (4.9), and safety reporting (4.11). FDA mirrors these in 21 CFR 312.60-312.69. A site audit measures the site against exactly these.

### What a site audit covers

| Area | What the auditor checks |
|---|---|
| Regulatory/essential documents | Site delegation log, CVs, licenses, training records, IRB/EC approvals current, signed protocol and amendments, lab certifications and normal ranges |
| Informed consent | Correct version used, signed and dated by subject before any trial procedure, re-consent on amendments, process documented, no consent after procedures |
| Source data and CRF | Source-to-CRF verification on a sample of subjects, ALCOA+ attributes, corrections done properly, no transcription errors, audit trail intact for eCRF |
| Eligibility | Inclusion/exclusion documented in source, eligibility confirmed before enrollment |
| IP management | Receipt, storage temperature records, accountability reconciliation (received, dispensed, returned, destroyed), randomization integrity, blinding maintained |
| Safety | AE/SAE capture in source, SAE reporting timelines met, causality and severity assessed, follow-up documented |
| Protocol compliance | Visit windows, procedures performed, deviations recorded and reported |
| Facilities and equipment | Calibration, sample handling, restricted access, pharmacy/IP storage |

### How to run a site audit, step by step

1. **Plan and notify.** Schedule with the site (routine), send the audit plan and agenda, request documents in advance, and define your subject sample. A common sample frame: all subjects with SAEs, all early discontinuations, the first and last enrolled, and a random selection across the remainder.
2. **Opening meeting.** State scope, standard, schedule, and how findings will be communicated. Confirm the right people are available, including the principal investigator at some point.
3. **Document and facility review.** Walk the regulatory binder/eTMF, the pharmacy/IP area, and the source records.
4. **Source data verification.** For each sampled subject, trace consent, eligibility, key efficacy and safety data, and IP dosing from source to CRF and back. This is the core of the audit.
5. **Staff interviews.** Confirm delegation matches reality, training is current, and people understand their roles.
6. **Daily debrief and closing meeting.** Communicate preliminary findings, let the site correct factual misunderstandings, agree on the classification, and set CAPA expectations.
7. **Report and CAPA.** Issue the audit report within the SOP timeline, obtain the site CAPA, verify it, and close.

### Worked example: a site audit findings table

| # | Finding | Classification | GCP reference | Evidence | CAPA owner |
|---|---|---|---|---|---|
| 1 | Subject 014 underwent a screening blood draw on 12-Mar before the ICF was signed (signed 13-Mar) | Critical | ICH E6(R2) 4.8.8; 21 CFR 50.27 | ICF page 4 and lab requisition timestamps | PI |
| 2 | IP accountability log shows 3 unaccounted kits across two subjects; no destruction record | Major | ICH E6(R2) 4.6.3 | IP log vs pharmacy count 04-Apr | Site pharmacist |
| 3 | Two SAEs reported to sponsor 6 and 8 days after site awareness against a 24-hour requirement | Major | ICH E6(R2) 4.11.1; protocol 9.3 | SAE forms vs source notes | Study coordinator |
| 4 | Delegation log not updated when sub-investigator started performing assessments | Minor | ICH E6(R2) 4.1.5 | Delegation log vs assessment signatures | PI |

That consent timing finding in row 1 is the single most common serious site finding in real GCP inspections. Procedures performed before a valid signed consent are cited again and again in FDA Warning Letters to clinical investigators.

### Common site findings inspectors and auditors cite

- Informed consent performed late, on the wrong version, or without re-consent after an amendment.
- Failure to follow the protocol, including missed assessments and out-of-window visits not recorded as deviations.
- Inadequate or inaccurate records and source documents, missing the ALCOA+ attributes.
- IP accountability that does not reconcile.
- Failure to report AEs/SAEs to the sponsor and IRB/EC in the required timeframe.
- Inadequate PI oversight and supervision of delegated staff.

---

## Vendor and CRO audits

When a sponsor delegates a GCP activity, it keeps the responsibility. The vendor audit is how the sponsor exercises the oversight it cannot delegate away.

### Why and on what basis

ICH E6(R2) 5.2.1 states that any trial-related duty transferred to a CRO should be specified in writing, and that any duty not specifically transferred is retained by the sponsor. 5.2.2 makes the sponsor responsible for the quality and integrity of the trial data regardless of who generated it. That is the legal hook for auditing CROs, central labs, IRT/RTSM providers, eCOA/ePRO vendors, central imaging, bioanalytical labs, EDC and eTMF system providers, pharmacovigilance vendors, and IP depots.

Vendor audits also connect to broader supplier qualification expectations. See the companion articles on supplier and vendor qualification and on conducting a supplier audit for the procurement-side mechanics.

### Qualification audit versus periodic audit

A **qualification audit** happens before you contract or before go-live, to decide whether to use the vendor at all. A **periodic (re-)audit** happens on a risk-based cycle during the relationship, to confirm continued compliance. A **for-cause audit** happens when the vendor fails a deliverable or a quality event points at them.

### What a vendor audit covers

The scope depends on what the vendor does, but the recurring areas are:

| Area | Focus |
|---|---|
| Quality system | SOPs current and followed, training, internal audit program, management review, CAPA system |
| Personnel | Qualifications, training records, capacity for the volume |
| Process specific to the service | For a lab: method validation, sample chain of custody, instrument calibration. For an EDC/eTMF provider: computerized system validation, change control, access control, backup/restore |
| Data integrity and Part 11 | Audit trails enabled and reviewed, electronic signatures, time stamps and clock control, true copies, no shared logins |
| Subcontracting | Whether the vendor further delegates, and how it oversees its own subcontractors |
| Security and continuity | Access management, disaster recovery, data retention and return at trial end |
| Inspection history | Findings from prior client audits and regulatory inspections, and their CAPAs |

For computerized-system vendors, the audit overlaps heavily with computer software assurance and CSV expectations. The audit confirms the vendor validated the system and controls change, not that you will revalidate their product yourself.

### How to run a vendor audit

1. **Define scope from the contract and the quality agreement.** Audit what they actually do for you. A central lab audit and an eTMF vendor audit share almost no checklist.
2. **Send an agenda and a pre-audit questionnaire.** Ask for SOP lists, org charts, validation summaries, training matrices, and prior audit/inspection history before you arrive.
3. **Audit on site or remotely.** Remote audits became normal and are acceptable for many process audits; physical control areas (sample storage, IP depot, server rooms) are stronger on site.
4. **Trace a real transaction end to end.** Pick a sample and follow it through the vendor's process, the same way you trace a subject at a site. For a lab, trace a sample from receipt to reported result. For an EDC vendor, trace a change request from intake through validation to release.
5. **Classify, report, and obtain CAPA.** Same loop as any audit.

### Worked example: vendor risk-frequency matrix

| Vendor type | Risk drivers | Risk tier | Audit cadence |
|---|---|---|---|
| Central bioanalytical lab (PK, registration trial) | Direct impact on primary endpoint, complex methods | High | Qualification + every 2 years + for-cause |
| EDC / eTMF system provider | Holds all trial data; Part 11 critical | High | Qualification + every 2-3 years |
| IRT / RTSM (randomization, IP supply) | Blinding and dosing integrity | High | Qualification + every 2-3 years |
| Translation vendor for ICF | Subject comprehension, but low data impact | Low | Questionnaire; audit on cause |
| Archiving/storage facility | Retention only, after lock | Low-Medium | Questionnaire + periodic |

### The quality agreement

Every material GCP vendor needs a quality agreement that defines roles, audit rights, escalation, deviation and CAPA handling, data ownership and return, inspection support obligations, and notification of regulatory inspections. Without an audit-rights clause, your audit program has no legal footing at that vendor. The companion article on CDMO oversight and quality agreements covers the agreement structure in detail; the clinical version follows the same logic.

### Roles

QA leads the vendor audit. The functional owner (clinical ops, data management, PV, bioanalytical) provides the technical co-auditor or SME. Procurement and legal own the contract and quality agreement. The vendor provides a host and access. The sponsor's vendor/alliance manager owns ongoing oversight between audits, including KPI review, which is not a substitute for the audit but feeds the risk score.

---

## Sponsor system and process audits, and internal audits

Sites and vendors are not the only targets. The sponsor must audit itself.

### Internal/system audits

Internal GCP audits examine the sponsor's own processes: monitoring (are CRAs doing what the monitoring plan says), safety/pharmacovigilance (are SAEs and SUSARs reported on time), data management (database build, edit checks, query management, database lock), the trial master file (completeness and timeliness), and IP supply. These are scheduled in the same risk-based program. The companion article on the internal audit program covers the general mechanics; the GCP twist is that subject safety and data reliability are the lenses.

### Database and TMF audits

Two specialized audits worth naming:

- A **database audit** before database lock checks that edit checks worked, queries are resolved, the data in the database matches source on a sample, and the audit trail is intact. A failed pre-lock audit is far cheaper than discovering the problem after analysis.
- A **TMF audit** checks the trial master file against the expected document set (a TMF reference model is the usual benchmark) for completeness, timeliness, and quality. Inspectors increasingly start at the TMF, because a thin or late TMF predicts deeper problems. See the companion article on the eTMF and trial master file.

---

## Audit finding classification and the report

Findings are only useful if they are classified consistently and reported in a form that drives action.

### Classification scheme

Most GCP programs use a three-tier scheme aligned to regulator language:

| Class | Definition | Typical examples |
|---|---|---|
| Critical | Conditions, practices, or processes that adversely affect the rights, safety, or well-being of subjects, or the quality and integrity of data; or that constitute serious GCP/regulatory violations | Consent obtained after procedures, fabricated data, unreported SAEs affecting safety, dosing of ineligible subjects |
| Major | Could adversely affect subject rights/safety or data integrity; a serious GCP deficiency that is not critical, or a pattern of minors | IP accountability not reconciling, systematic late SAE reporting, missing essential documents |
| Minor | A finding that is not expected to adversely affect subject rights/safety or data, often isolated | A single delegation-log gap, an isolated transcription error, a filing delay |

This mirrors the MHRA grading vocabulary and the way EMA and most sponsors describe findings. Keep your SOP definition explicit, because the classification drives escalation, timelines, and whether the trial team can proceed. The companion article on audit finding classification goes deeper on the decision logic.

### What goes in the audit report

A complete audit report contains: identification (entity audited, dates, auditors, scope, standard), an executive summary, the findings with classification and regulatory references and objective evidence, areas reviewed and the sample, positive observations where relevant, the distribution and the response/CAPA timeline, and the auditor's overall assessment. Findings must be stated as objective fact tied to evidence, not opinion. "Subject 014 was screened on 12-Mar; ICF signed 13-Mar" is a finding. "The site seems disorganized" is not.

### Acceptance criteria for a report

It is on time per SOP, every finding cites a real requirement and concrete evidence, classifications follow the defined scheme, and it states clearly what response is required by when. The audit certificate (the fact that an audit occurred, per ICH E6(R2) 5.19.3) is retained separately and is generally protected from routine inspection demand, while still being producible when a regulator requests it under its authority.

---

## The CAPA loop

An audit that does not change anything is waste. CAPA is how a finding becomes a fixed system.

### From finding to CAPA

1. **Root cause analysis.** The audited party (site, vendor, or internal function) investigates why the finding happened. A consent-before-signature finding caused by an undertrained coordinator has a different fix than one caused by a missing procedural control. Push past "human error" to the system cause; see the companion articles on root cause analysis techniques and human error in deviations.
2. **Corrective action.** Fix the specific instances found. Re-consent the affected subjects where possible, reconcile the IP, report the late SAEs.
3. **Preventive action.** Fix the system so it does not recur. Update the SOP, retrain, add a control such as a consent checklist or an EDC edit check.
4. **CAPA plan with owners and dates.** Each action has a named owner and a due date.
5. **Verification of implementation, then effectiveness.** First confirm the action was done. Then, after enough time and activity, confirm it worked. Effectiveness checks are where many programs fall down; see the companion article on CAPA effectiveness verification.
6. **Closure.** QA closes the CAPA only when effectiveness is demonstrated.

### Acceptance criteria for CAPA

The corrective action addresses every instance found, the preventive action addresses the root cause not the symptom, owners and dates are real, and closure rests on evidence of effectiveness, not just a statement that the SOP was revised. A repeat finding at the next audit is the clearest signal that a prior CAPA was cosmetic.

### Worked example: a CAPA entry

> **Finding (Critical):** Subject 014 screening blood draw before ICF signature.
> **Immediate correction:** Subject 014 re-consented; protocol deviation logged and reported to IRB/EC; sponsor medical monitor confirmed no safety impact; data flagged for the deviation listing.
> **Root cause:** Site used a paper consent log with no procedural check that consent preceded any trial procedure; coordinator scheduled labs from the screening worklist without confirming consent status.
> **Corrective/preventive action:** Site SOP updated to require a consent-status check before any trial procedure; pre-procedure checklist added to the visit workflow; all study staff retrained (records retained); CRA to verify consent timing on first three subsequent enrollments.
> **Effectiveness check (90 days):** Audit of next five enrollments confirms 5/5 consent before any procedure. CAPA closed.

---

## Surviving the regulatory inspection

Now the regulator. An FDA BIMO or EMA/national GCP inspection is the live test of everything above.

### What triggers an inspection

Inspections are **routine/surveillance** (often tied to a marketing application, where FDA selects investigator sites and the sponsor for inspection) or **for-cause/directed** (triggered by a complaint, a safety signal, data anomalies seen in the application, or a previous problem). FDA's site selection for a pre-approval BIMO program weighs enrollment volume, the site's contribution to the primary efficacy data, prior inspection history, and any signals in the submission. EMA may inspect at the request of the assessors during the review of a marketing authorization application.

### Inspection readiness as a standing state

Readiness is not a sprint before the inspector arrives; it is the condition your audit program is supposed to maintain. The companion articles on FDA inspection readiness, inspection readiness, and the mock inspection program cover the discipline. The GCP-specific elements:

- The TMF is current, complete, and retrievable, because inspectors increasingly start there.
- Essential documents at inspected sites are in order and the site is briefed.
- Key staff are identified and available, including the medical monitor and the data management and PV leads.
- A storyboard exists for each registration trial: design, key amendments, major deviations, safety profile, and how data flowed.
- The audit and CAPA history is organized and closed where possible. Open CAPAs are fine if they show a system working; abandoned CAPAs are a problem.

### Running the inspection: roles and logistics

Establish two rooms. The **front room** is where the inspector works with the host and SMEs. The **back room** retrieves documents, vets answers, logs requests, and prepares the next SME. Define roles:

- **Inspection lead/host:** the single point of contact with the inspector, manages the agenda and the room.
- **Scribe:** records every question, request, and document shown, with timestamps.
- **Runner/document control:** retrieves requested records, ensures each is correct and complete before it goes to the front room.
- **SMEs:** answer questions in their area, on call, briefed before they enter.
- **Back-room lead:** triages requests, assigns SMEs, and catches problems before answers reach the inspector.
- **Management/QA leadership:** available for escalation and the closing meeting.

### How to answer an inspector

Answer the question asked, accurately, then stop. Do not volunteer scope. If you do not know, say you will find out, then have the back room find out. Never guess, never speculate, never argue, never hide a document the inspector is entitled to see. Tell the truth; offering a false statement to a federal inspector is a separate and far more serious problem than the finding itself. Every document shown is logged. The companion article on managing a live inspection covers the front-room and back-room mechanics in full.

### The 483 and the inspection report

At the close of an FDA inspection, the investigator may issue a **Form FDA 483, Inspectional Observations**, listing observations of conditions that may violate the law. The 483 is observations, not a final agency determination. You respond in writing, normally within 15 business days, to have the response considered before any Warning Letter. EMA/national inspectors issue an inspection report classifying findings as critical, major, or minor, to which you also respond with a CAPA plan. The companion articles on the 483 and Warning Letter response and the FDA 483 response strategy cover the response craft. For the way FDA and EMA inspections differ in tone and procedure, see the article on FDA versus EMA inspection dynamics.

### Worked example: closing-meeting 483 observation and response skeleton

> **483 Observation:** "Informed consent was not obtained prior to the conduct of study procedures for one of twenty subjects whose records were reviewed (Subject 014)."
>
> **Response structure:** (1) acknowledge the observation; (2) state the immediate correction already taken (re-consent, deviation reported, no safety impact confirmed); (3) state the root cause; (4) state the systemic corrective and preventive action with owners and dates; (5) commit to an effectiveness check; (6) note this was already identified and CAPA'd through the sponsor audit program, with the audit date, which demonstrates a functioning quality system.

That last point is the payoff of the whole program: when you can show the inspector you already found the issue, classified it, and fixed it through your own audit and CAPA system, a 483 observation becomes evidence that your quality system works rather than evidence that it failed.

---

## Common program-level failures regulators cite

Beyond individual site findings, these systemic patterns draw inspection findings against sponsors and CROs:

- **Inadequate sponsor oversight of CROs and vendors.** Delegating the activity and the oversight, with no evidence the sponsor checked the vendor's work, directly contradicts ICH E6(R2) 5.2.2.
- **An audit program that is not risk-based.** Auditing the easy targets and skipping the high-risk ones, or auditing everyone on the same flat frequency.
- **CAPAs that do not close or are not effective**, shown by repeat findings.
- **No auditor independence**, with people auditing their own processes.
- **Late or missing safety reporting** across the program, not just at one site.
- **A weak or untimely TMF.**
- **Failure to report serious GCP breaches** to authorities within the required timeline.

---

## Interview-ready: questions you will be asked

**What is the difference between an audit and an inspection?** An audit is the sponsor's own systematic, independent examination, defined in ICH E6(R2) 1.6 and run under section 5.19. An inspection is the regulatory authority's official review, defined in 1.29. Same activity, different actor and different legal weight.

**How do you decide what to audit?** Risk. I build an audit universe, score each entity on subject vulnerability, complexity, volume, vendor/system novelty, prior history, monitoring signals, and proximity to a submission, then tie audit frequency to risk bands and reserve capacity for for-cause work. ICH E6(R2) 5.0 and 5.19.2 require the program to be defined and, in R2, risk-based.

**Routine versus for-cause: when do you launch a for-cause audit?** When a trigger appears: a serious or repeated deviation, a safety signal, a data anomaly suggesting fabrication, a whistleblower, a failed vendor deliverable, or a regulator action on a peer. For-cause audits are narrow, deep, fast, and they preserve evidence.

**A CRO delegated a task and botched it. Who is responsible to the regulator?** The sponsor. ICH E6(R2) 5.2.1 says any duty not specifically transferred is retained, and 5.2.2 holds the sponsor responsible for data quality and integrity regardless of who generated it. The CRO's failure is the sponsor's failure to oversee.

**Walk me through a site audit.** Plan and sample, opening meeting, document and facility review, source-data verification on the sample with consent and IP and safety as priorities, staff interviews against the delegation log, daily debriefs, closing meeting, report, CAPA, verification, closure.

**What is the single most common serious site finding?** Informed consent problems: consent obtained after a procedure, the wrong version used, or no re-consent after an amendment. It is a recurring Warning Letter citation to clinical investigators.

**How do you classify findings?** Critical, major, minor, defined by impact on subject rights/safety and data integrity. Critical means subjects or data are actually harmed or a serious violation occurred; minor is isolated with no such impact. The classification drives escalation and timelines.

**What is BIMO?** FDA's Bioresearch Monitoring program, the inspection arm for clinical investigators (CPGM 7348.811), sponsors/monitors/CROs (7348.810), and IRBs (7348.809). The CPGMs tell you what the inspector will look at.

**You receive a 483 with a critical consent observation. What do you do?** Respond in writing within 15 business days. Acknowledge it, state the immediate correction, give the real root cause, lay out systemic corrective and preventive actions with owners and dates, commit to an effectiveness check, and where true, show that the audit program already caught and is fixing it.

**How do you prove your CAPA worked?** Effectiveness verification: after the action and enough subsequent activity, sample again and show the problem did not recur. A repeat finding proves the prior CAPA was cosmetic.

**What changed in the EU with the Clinical Trials Regulation?** Regulation (EU) 536/2014, applied January 2022, replaced the Directive, centralized submissions through CTIS, and set the serious-breach reporting expectation (without undue delay, not later than seven days of awareness). Inspections are still run by national competent authorities, coordinated through EMA.

---

## Practical tips

- Keep 20-30 percent of auditor capacity unscheduled. For-cause work is the highest-value audit you will do and it never appears on the calendar in advance.
- Trace real transactions, not binders. At a site, follow a subject from consent to database. At a vendor, follow a sample or a change request end to end. Binders look fine; transactions reveal the truth.
- Classify the same way the regulator does, so your internal findings translate directly into inspection language and so management understands the stakes.
- Treat the TMF as a living inspection exhibit, not an archive you assemble at the end.
- Make the quality agreement carry an explicit audit-rights and inspection-support clause for every material vendor, before go-live.
- Close CAPAs on effectiveness, never on "SOP revised." Repeat findings are the most damaging thing an inspector can see.
- Run a mock inspection on each registration program before the real one. The back-room muscle memory is what holds up on inspection day.

---

## Related articles

- [ICH E6 Good Clinical Practice](/articles/ich-e6-good-clinical-practice)
- [Clinical QA and GCP Data Integrity](/articles/clinical-qa-gcp-data-integrity)
- [Risk-Based Monitoring in Clinical Trials](/articles/risk-based-monitoring-clinical)
- [Source Data and Source Data Verification](/articles/source-data-and-sdv-clinical)
- [The eTMF and Trial Master File](/articles/etmf-trial-master-file)
- [Conducting a Supplier Audit](/articles/conducting-a-supplier-audit)
- [Supplier and Vendor Qualification](/articles/supplier-vendor-qualification)
- [Audit Finding Classification](/articles/audit-finding-classification)
- [What Is a CAPA](/articles/what-is-a-capa)
- [CAPA Effectiveness Verification](/articles/capa-effectiveness-verification)
- [FDA Inspection Readiness](/articles/fda-inspection-readiness)
- [Managing a Live Inspection](/articles/managing-a-live-inspection)
- [FDA 483 Response Strategy](/articles/fda-483-response-strategy)
- [FDA vs EMA Inspection Dynamics](/articles/fda-vs-ema-inspection-dynamics)
- [Mock Inspection Program](/articles/mock-inspection-program)
- [Internal Audit Program](/articles/internal-audit-program)
- [Root Cause Analysis Techniques](/articles/root-cause-analysis-techniques)
