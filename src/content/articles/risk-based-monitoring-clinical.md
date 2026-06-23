---
title: "Risk-Based and Centralized Monitoring of Clinical Trials"
description: "How to design and run a risk-based monitoring program for clinical trials, including the central, remote, and on-site mix, key risk indicators, the monitoring plan, and reduced source data verification."
pubDate: 2026-06-20
tags: ["clinical", "gcp", "monitoring", "risk-based", "data-integrity", "central-monitoring", "kri"]
pillar: "clinical-gcp"
tier: "Intermediate"
---

For most of the history of clinical research, monitoring meant one thing: a clinical research associate (CRA) drove to a site every four to six weeks and compared the case report form (CRF) against the medical chart, field by field, for every subject. That practice, called 100% source data verification (SDV), consumed roughly a quarter to a third of a trial's operating budget and, as several large analyses eventually showed, found very few errors that mattered. Risk-based monitoring (RBM) is the response. It moves effort away from checking transcription on every data point and toward the risks that actually threaten subject safety and the reliability of trial results.

This is not a license to do less. It is a discipline to do the right things, in the right places, supported by data instead of habit. Done well, RBM catches systemic problems a CRA on a quarterly visit would never see: a site that enrolls suspiciously fast, an outlier lab pattern across one country, a data-entry lag that signals an overwhelmed coordinator. Done badly, it becomes a spreadsheet of key risk indicators nobody acts on while real signals slip through. This article walks through the regulatory basis, the strategy, the operating model, the documents, the metrics, and the inspection-finding patterns so you can build a program, run it, and defend it.

---

## What RBM is and why it is required

Risk-based monitoring is an approach to overseeing the conduct of a clinical trial in which the type, frequency, and intensity of monitoring activities are determined by the risks to the critical data and processes of that specific trial, rather than applied uniformly to every site and every data field.

The regulatory foundation is explicit. **ICH E6(R2) Good Clinical Practice**, which added an integrated addendum to the original guideline and reached Step 4 in November 2016, introduced a formal expectation that sponsors use a systematic, risk-based approach. Section 5.0 ("Quality Management") requires sponsors to identify critical processes and data, perform risk assessment, and implement controls proportionate to risk. Section 5.18.3 states that the sponsor should develop a systematic, prioritized, risk-based approach to monitoring and that a combination of on-site and centralized monitoring may be appropriate. **ICH E6(R3)**, which reached Step 4 in early 2025 and is being adopted across regions, carries this further: quality by design and proportionate, risk-based oversight are built into the structure of the guideline rather than bolted on as an addendum.

Two regulator guidances sit alongside ICH and are worth knowing by name:

- **FDA, "A Risk-Based Approach to Monitoring of Clinical Investigations"** (final guidance, March 2019, which revised the 2013 version). It explicitly states that FDA does not consider 100% SDV necessary and encourages sponsors to focus monitoring on preventing or mitigating important risks.
- **EMA, "Reflection paper on risk based quality management in clinical trials"** (EMA/INS/GCP/394194/2011, finalized November 2013). It frames quality risk management across the trial lifecycle and predates, then aligns with, the ICH addendum.

The why has three legs. First, subject safety: monitoring effort should concentrate where a mistake could harm a participant, for example informed consent, eligibility, and serious adverse event (SAE) reporting. Second, data reliability: results must be trustworthy, which depends on the integrity of the critical endpoints and the processes that produce them. Third, efficiency and reach: centralized analytics can look at every site every day, something no travel schedule can match, and they free skilled people to investigate rather than transcribe. RBM is also a data integrity instrument. The ALCOA+ attributes apply to clinical data the same way they apply to a manufacturing record, and central monitoring is one of the few tools that can detect attributable, contemporaneous, and consistent problems across an entire study at once. See [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and [data integrity foundations](/articles/data-integrity-foundations).

---

## The strategy: quality by design before any monitoring

RBM starts upstream of the first site visit, during protocol design. If you bolt monitoring onto a protocol that collects 400 variables when 40 drive the conclusion, you have already lost. The sequence is risk identification, risk evaluation, control, then monitoring designed against the residual risk.

### Step 1: identify critical data and critical processes

Critical data are the data points and variables essential to subject safety and to the integrity of the primary (and key secondary) analyses. Critical processes are the activities that generate or protect those data. You name them deliberately and write them down. Examples that appear in almost every trial:

| Critical to safety | Critical to reliability |
|---|---|
| Informed consent (presence, version, dating) | Primary efficacy endpoint data |
| Eligibility / inclusion-exclusion | Randomization and blinding integrity |
| SAE identification and reporting timelines | Investigational product (IP) accountability and dosing |
| Dose modifications and stopping rules | Key inclusion criteria that define the analysis population |
| Pregnancy reporting (where applicable) | Endpoint adjudication source documents |

What is **not** critical gets light-touch treatment. A non-mandatory concomitant medication free-text field, or a demographic detail that never enters an analysis, does not deserve the same scrutiny as the primary endpoint.

### Step 2: assess the risks

Run a structured risk assessment, usually as a failure-mode style exercise. For each critical process, list what could go wrong, score it, and decide on controls. The common scoring model uses three dimensions:

- **Likelihood**: how probable is the failure?
- **Impact**: how badly would it affect subject safety or data reliability?
- **Detectability**: how likely are you to catch it before it does harm?

A risk priority number (RPN) is likelihood × impact × detectability, or a simpler likelihood × impact matrix. The tooling many sponsors use is a **Risk Assessment and Categorization Tool (RACT)**, a template originally published by TransCelerate BioPharma and now widely adapted. The output is a ranked risk register that feeds directly into the monitoring plan. For the underlying methodology and its ICH Q9 lineage, see [quality risk management](/articles/quality-risk-management).

### Step 3: design controls and the monitoring response

For each prioritized risk, decide the mitigation. Some risks are designed out (remove an ambiguous eligibility criterion). Some are controlled by process (mandatory eligibility checklist in the electronic data capture, or EDC, system). The residual risk is what monitoring must watch. This is the link people miss: the monitoring plan is the documented answer to the risk assessment, not a generic template. If a risk in the register has no corresponding monitoring activity, that is a gap an inspector will find.

---

## The monitoring mix: central, remote, and on-site

RBM is not "less travel." It is a deliberate blend of three monitoring modes, each suited to different risks.

### Centralized monitoring

A remote evaluation carried out by the sponsor's central team (data managers, statisticians, central monitors) using aggregated, cross-site data. It is the analytical engine of RBM. ICH E6(R2) 5.18.3(b) describes the role centralized monitoring can play: it can surface data that are missing, inconsistent, or out of range, spot outliers and emerging trends, and detect errors that recur within a single site or run across several sites at once. It also supports profiling of site characteristics and performance, which in turn helps the sponsor decide which sites or processes warrant a targeted on-site review.

What central monitoring does well that on-site cannot: it sees all sites at once. A single CRA at one site cannot tell that this site's mean blood pressure is two standard deviations from every other site, or that one investigator's data has implausibly low variance (a digit-preference or fabrication signal). Central statistical monitoring techniques look for exactly this: distributional anomalies, unusual digit patterns (Benford-type checks), too-clean data, duplicated records, and impossible value combinations.

### Remote monitoring

A site-specific review conducted off-site, increasingly enabled by remote access to source documents (for example, certified copies uploaded to an eTMF or remote read-only access to an electronic health record under a documented agreement). It blurs into both central and on-site work. Use it for targeted SDV of specific high-risk records, consent reverification, or follow-up on a central signal, without the cost and delay of a visit. Remote access to patient records raises privacy and access-control obligations; handle it under a written agreement and the site's governance, and keep the access auditable. Decentralized and hybrid trials lean heavily on remote monitoring; see [eConsent and decentralized trials](/articles/econsent-and-decentralized-trials).

### On-site monitoring

A visit to the investigator site. It remains the only way to do some things: physically verify IP storage and accountability, inspect the consent process and original wet-ink consents, build the site relationship, retrain a struggling coordinator, and look at source that exists only on paper or behind a system you cannot reach remotely. Under RBM, visit frequency and content are driven by risk and by signals, not by a fixed calendar. A clean, experienced, fast site might get fewer visits; a new site, a site with a central signal, or a site enrolling a large fraction of subjects gets more.

### A worked allocation

A simple way to express the mix in your monitoring plan:

| Activity | Mode | Trigger / frequency |
|---|---|---|
| KRI and data-quality dashboard review | Central | Continuous, formally reviewed every 2 weeks |
| Targeted SDV of primary endpoint + consent + eligibility | Remote or on-site | 100% of these fields for all subjects |
| Targeted SDV of other critical data | Remote or on-site | Risk-based sample (for example 25%) |
| Non-critical data | None / EDC edit checks only | System checks only |
| Routine interim on-site visit | On-site | Every ~12-16 weeks, risk-adjusted |
| Triggered on-site visit | On-site | Within defined days of a red signal |
| IP accountability and storage check | On-site | Every visit |

The exact percentages and intervals belong to the trial's risk profile. The point of the table is that the plan states them explicitly and ties them to risk.

---

## Key risk indicators and quality tolerance limits

Central monitoring runs on metrics. Two terms must not be confused, because inspectors test whether you understand the difference.

### Key risk indicators (KRIs)

A KRI is a pre-defined, measurable metric tracked per site (and aggregated) that signals a possible risk to data quality, safety, or trial conduct. KRIs have thresholds (often green/amber/red) and, critically, a defined action when a threshold is crossed. A KRI without a documented response is decoration.

Common KRIs:

| KRI | What it signals | Example threshold logic |
|---|---|---|
| Screen failure rate | Protocol fit, eligibility manipulation, or recruitment pressure | Flag if far above or below study mean |
| Enrollment rate vs. plan | Recruitment fraud risk if implausibly fast; site engagement if too slow | Flag outliers vs. peer sites |
| Query rate / open query aging | Data quality and site responsiveness | Flag rising trend or aged queries > X days |
| Data entry lag (visit to EDC entry) | Contemporaneity, overwhelmed staff | Flag if median lag > X days |
| Protocol deviation rate | Conduct quality, training gaps | Flag rate above peer sites |
| SAE reporting timeliness | Safety reporting compliance | Flag any late report; cluster flags an issue |
| AE/SAE rate vs. expected | Under-reporting (too low) or safety signal (too high) | Flag sites far from pooled rate |
| Missing data / overdue forms | Completeness, ALCOA+ availability | Flag % missing above threshold |
| Visit window compliance | Protocol adherence | Flag % out-of-window above threshold |

KRIs are most useful relative to peers. An absolute screen-failure number means little; a site failing 80% when the study runs at 30% is a signal.

### Quality tolerance limits (QTLs)

A QTL is a study-level (not site-level) parameter with a pre-defined range, set during planning, used to detect systematic issues that could undermine subject safety or the reliability of trial results. QTLs are an ICH E6(R2) 5.0 expectation. The distinction:

- A **KRI** is operational, per-site, and triggers monitoring action.
- A **QTL** is a small number of parameters tied to the critical-to-quality factors of the whole trial. A breach is recorded, assessed for root cause and impact, and may need to be reported in the clinical study report (CSR).

Examples of QTL parameters: overall rate of a specific important protocol deviation, percentage of subjects withdrawing for a reason that threatens the primary analysis, overall rate of important inclusion-criterion violations, or rate of incomplete primary endpoint data. You deliberately keep QTLs few (a handful), because every QTL breach demands documented assessment. ICH E6(R2) 5.20.1 also expects that if you discover noncompliance that significantly affects or has the potential to significantly affect subject protection or data reliability, you perform a root cause analysis and implement corrective and preventive action. See [root cause analysis techniques](/articles/root-cause-analysis-techniques) and [CAPA fundamentals](/articles/what-is-a-capa).

### Worked KRI example

A 30-site oncology study. Central monitoring flags Site 014:

- Enrollment rate: 9 subjects in 6 weeks vs. study median of 2. Amber on speed.
- Screen failure rate: 11% vs. study mean 34%. Red.
- AE rate per subject: 0.4 vs. pooled 1.9. Red on under-reporting.

Individually each could be benign. Together the pattern (fast enrollment, almost nobody screen-failing, very few AEs) is a classic eligibility-and-underreporting signal. The defined action is a triggered, focused on-site visit within 10 business days, with targeted SDV of consent, eligibility source, and AE source for all enrolled subjects, plus an interview with the coordinator. The central monitor documents the signal, the trigger, and the disposition. That documented chain is what an inspector wants to see.

---

## The integrated quality risk management and monitoring plan

The plan is the controlling document. Many sponsors split it into an Integrated Quality and Risk Management Plan (IQRMP) plus a Clinical Monitoring Plan (CMP), or combine them. Names vary; content does not.

### What goes in the monitoring plan

- **Purpose and scope**, and reference to the protocol and risk assessment.
- **Critical data and processes** identified for this trial.
- **Risk assessment summary / risk register** (or reference to the RACT output).
- **Monitoring strategy**: the central / remote / on-site mix and the rationale.
- **SDV strategy**: which fields get 100% SDV, which get sampled, the sample size and method, and what gets no SDV.
- **KRIs**: definitions, thresholds, data source, review frequency, and the action workflow for each.
- **QTLs**: parameters, limits, and the escalation and reporting process for breaches.
- **Central monitoring activities**: dashboards, statistical checks, review cadence, who reviews.
- **On-site visit plan**: types (site initiation, interim, close-out, triggered), frequency basis, and visit content.
- **Roles and responsibilities**: who owns each activity (clearly mapped).
- **Escalation and communication**: how signals move from central monitor to CRA to clinical lead to medical and to QA.
- **Documentation**: monitoring visit reports, follow-up letters, central monitoring records, signal logs.
- **Review and revision**: the plan is living. Risk changes as the trial runs, so the plan is revisited and updated, and the changes are version-controlled.

### Acceptance criteria for a good plan

You know the plan is right when: every prioritized risk in the register maps to at least one monitoring activity; every KRI has a threshold and a named action; QTLs are few and tied to trial-level quality; the SDV strategy is justified, not arbitrary; roles are unambiguous; and the plan is approved before first-subject-first-visit and re-reviewed at defined points. A plan that cannot trace from "risk" to "control" to "monitoring action" to "evidence it was done" is not finished.

---

## Reduced and targeted source data verification

SDV is the act of comparing data in the CRF against the source (medical record, lab report, original consent) to confirm it was transcribed correctly. Reduced SDV is the most visible change RBM brings, and the most misunderstood.

### What changes and what does not

RBM does not abolish source review. It separates two activities that the old 100%-SDV model conflated:

- **Source Data Verification (SDV)**: transcription accuracy. Does the CRF match the source? This is the part you reduce and target.
- **Source Data Review (SDR)**: a broader look at the source for trial conduct, safety, consent, eligibility, and the overall plausibility of the record. SDR is generally not reduced; you still review the source for the things that matter, you just stop transcription-checking every field.

The strategy: apply 100% SDV to the highest-criticality fields (primary endpoint, eligibility, consent, SAEs), apply a risk-based sample to other important fields, and apply EDC edit checks and central monitoring (not manual SDV) to the rest. FDA's 2019 guidance is explicit that 100% SDV is not expected and that targeted SDV plus centralized monitoring is acceptable and often better at finding meaningful errors.

### How to set the SDV sample

A defensible approach:

1. Classify every CRF field by criticality (high / medium / low) during plan development, traceable to the risk assessment.
2. High-criticality fields: 100% SDV for all subjects.
3. Medium-criticality fields: a defined sample, for example a percentage of subjects or a fixed number per site, chosen so a systematic error would surface.
4. Low-criticality fields: EDC edit checks and central monitoring only.
5. Build in **escalation**: if a sampled site shows an error rate above a pre-set limit, increase that site's SDV (up to 100%) and investigate. Reduced SDV is conditional on the site earning it.
6. Document the sampling method and the escalation rule in the plan so it is reproducible and inspectable.

### Worked SDV example

Field classification for a cardiovascular outcomes trial:

| Field group | Criticality | SDV approach |
|---|---|---|
| Informed consent date/version | High | 100% SDV, all subjects, plus SDR of consent process |
| Primary endpoint (adjudicated MACE events) | High | 100% SDV against adjudication source |
| Key eligibility labs | High | 100% SDV |
| Concomitant medications (mandatory) | Medium | 30% subject sample per site |
| Vital signs at non-endpoint visits | Low | EDC checks + central trend review |
| Medical history free text | Low | No SDV; central plausibility checks |

If Site 7's 30% conmed sample shows a 12% transcription error rate against a 2% study tolerance, the escalation rule raises Site 7 to 100% SDV on that group, triggers a query sweep, and prompts a root cause review of the site's data flow.

The closely related topics of what counts as source and how to handle certified copies are covered in [source data and SDV in clinical trials](/articles/source-data-and-sdv-clinical).

---

## Running the program: the operating cadence

A risk register and a dashboard are not a program. The program is the rhythm of review and action.

1. **Set up before first subject**: finalize the risk assessment, the plan, the KRI/QTL definitions, the dashboards, and train the team.
2. **Continuous central monitoring**: data flows into the EDC; central tools compute KRIs and run statistical checks as data accrues.
3. **Scheduled central review meeting** (commonly every two weeks): the central monitoring team, clinical lead, data management, and biostatistics review the dashboard, dispositions signals, and decides actions (query, remote follow-up, trigger a visit, escalate a QTL).
4. **Document each signal and disposition** in a central monitoring report or signal log. "Reviewed, no action" is a valid, documented disposition; silence is not.
5. **Execute on-site visits** (routine and triggered), each producing a monitoring visit report and a follow-up letter to the site with action items and due dates.
6. **Track follow-up to closure**: open action items, open queries, and CAPAs are tracked until closed.
7. **Escalate QTL breaches** through the defined path; assess root cause and impact; record for the CSR if required.
8. **Revise the plan** when the risk picture changes (new safety signal, protocol amendment, a site or country performing differently than assumed).
9. **Feed lessons into the QMS**: systemic findings update SOPs, training, and the next protocol's design. This is the quality-by-design loop closing.

The thread an inspector pulls is the audit trail of decisions: signal detected, assessed, action chosen, action executed, outcome verified, documented throughout. The metrics matter less than the evidence that you acted on them.

---

## Roles and responsibilities

RBM redistributes work. The classic "CRA does everything" model breaks. Map roles explicitly in the plan.

| Role | Responsibilities in RBM |
|---|---|
| Sponsor / clinical trial lead | Owns the quality management system for the trial, approves the plan, accountable for risk decisions and QTL escalation |
| Central monitor / central monitoring lead | Runs the central analytics, reviews KRIs, raises and dispositions signals, recommends triggered visits |
| CRA / clinical monitor | Executes on-site and remote site monitoring, SDV/SDR, writes visit reports, manages site relationship and follow-up |
| Data management | Builds EDC edit checks, supports KRI data, runs query management, supports central data review |
| Biostatistics | Defines QTLs and statistical monitoring methods, interprets distributional anomalies |
| Medical monitor | Reviews safety signals, SAEs, eligibility and dosing concerns |
| Quality assurance (QA) | Independent oversight, audits the RBM process and sites, confirms the system works (does not run the monitoring) |
| Risk owner(s) | Named owners for specific risks in the register, accountable for their controls |
| Investigator / site | Conducts the trial, maintains source, responds to queries and findings, the ultimate generator of the data being monitored |

The QA boundary is worth stressing: QA audits the system and confirms effectiveness; it does not perform monitoring. Conflating the two is both an independence problem and an inspection finding. For the broader map of who does what across GxP, see [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) and [clinical QA and GCP data integrity](/articles/clinical-qa-gcp-data-integrity).

---

## Common mistakes and inspection-finding patterns

These are the patterns regulators and auditors cite, stated generically.

- **A monitoring plan that is generic, not trial-specific.** The plan is a template with the protocol number changed, and the KRIs and QTLs do not match this trial's actual risks. Inspectors test whether the plan traces to a real risk assessment.
- **No traceability from risk to monitoring.** A risk register exists, a plan exists, but nothing connects them. A high risk has no corresponding control or monitoring activity.
- **KRIs computed but not acted on.** Dashboards are green/amber/red, red flags sit for weeks, and there is no documented disposition. "We had the data" is not a defense; the finding is failure to act on a detected signal.
- **No QTLs, or QTLs confused with KRIs.** The sponsor cannot articulate the difference, or has 40 "QTLs" that are really site KRIs, defeating the purpose of a few trial-level limits.
- **Reduced SDV with no justification.** SDV was cut to save money without a documented risk basis, no escalation rule, and no SDR to compensate. The reduction looks like cost-cutting, not risk management.
- **Critical data treated like everything else.** Consent, eligibility, and SAEs got sampled SDV instead of 100%, and an eligibility error or unreported SAE was missed.
- **Centralized monitoring claimed but not performed.** The plan describes central statistical monitoring, but the records show only standard query management; no cross-site analytics, no outlier detection, no evidence the central function operated.
- **No CAPA on systemic findings.** A signal recurs across sites and is handled site-by-site as isolated queries, with no root cause and no preventive action, so the same problem keeps appearing.
- **The plan was never updated.** Risk changed (a safety signal, an amendment, a new region), and the monitoring approach stayed frozen.
- **Poor documentation of central decisions.** Visit reports exist, but central monitoring decisions live in email and personal spreadsheets, so the decision trail cannot be reconstructed for inspection.
- **Over-reliance on the CRO with no sponsor oversight.** The sponsor delegated RBM to a contract research organization and cannot demonstrate its own oversight of the risk decisions, which ICH E6(R2) 5.2 holds the sponsor accountable for regardless of delegation.

---

## Interview-ready questions and answers

**Q: What is risk-based monitoring and why did the industry move to it?**
RBM determines monitoring type, frequency, and intensity by the risks to the critical data and processes of a specific trial, instead of doing uniform 100% SDV everywhere. The move came because 100% SDV was expensive, consuming a large share of trial cost, and analyses showed it caught few meaningful errors, while it missed systemic problems that only cross-site analytics can detect. ICH E6(R2) section 5.18.3 and FDA's 2019 guidance formalized the expectation.

**Q: Difference between a KRI and a QTL?**
A KRI is an operational, per-site metric with a threshold and a defined monitoring action when breached; it drives where you point monitoring effort. A QTL is a small set of study-level parameters with pre-defined limits, tied to the critical-to-quality factors of the whole trial; a breach is assessed for root cause and impact and may be reported in the CSR. KRIs are many and operational; QTLs are few and strategic.

**Q: Does RBM mean you stop doing SDV?**
No. It means you target it. You apply 100% SDV to the highest-criticality fields (consent, eligibility, primary endpoint, SAEs), sample medium-criticality fields, and rely on EDC edit checks and central monitoring for low-criticality fields. You also keep doing source data review for conduct and safety, which is broader than transcription checking. And you build an escalation rule so a site with a high error rate gets more SDV.

**Q: What does centralized monitoring actually find that on-site cannot?**
Cross-site patterns. Outliers and anomalies you can only see by comparing all sites: a site with implausibly low data variance, digit-preference, unusual screen-failure or AE rates, data-entry lag, or duplicated records. A single CRA at one site has no peer comparison.

**Q: Where does the monitoring plan come from?**
From the risk assessment. You identify critical data and processes, assess the risks (often with a RACT and an FMEA-style scoring of likelihood, impact, detectability), design controls, and then the monitoring plan is the documented response to the residual risk. Every monitoring activity should trace back to a risk.

**Q: How do you decide when to trigger an on-site visit under RBM?**
By signal and by risk, not just by calendar. A red KRI or a cluster of signals (for example fast enrollment plus low screen-failure plus low AE rate) triggers a focused visit within a defined timeframe, with targeted SDV on the implicated data. New sites, high-enrolling sites, and sites with poor metrics also warrant more on-site attention.

**Q: A site enrolls far faster than its peers with almost no screen failures. What do you do?**
Treat it as a potential eligibility or integrity signal, not good luck. Have central monitoring confirm the pattern, check related KRIs (AE rate, query rate, data lag), and trigger a focused on-site visit with targeted SDV of consent, eligibility source, and AE source for the enrolled subjects, plus a coordinator interview. Document the signal, the action, and the outcome.

**Q: Who is accountable for RBM if the sponsor uses a CRO?**
The sponsor. ICH E6(R2) 5.2 allows delegation of trial-related duties to a CRO but holds the sponsor accountable for the quality and integrity of the trial data and for oversight. The sponsor must be able to show its own oversight of the risk decisions.

**Q: What is the single most common RBM inspection finding?**
KRIs and dashboards that are reviewed but not acted on, or a monitoring plan that does not trace to a real, trial-specific risk assessment. Having the data is not the same as managing the risk.

---

## Practical tips

- Keep QTLs few. If you have more than a handful, you have KRIs mislabeled, and every breach you must assess becomes a burden that dilutes attention.
- Make every KRI relative to peers where possible. Absolute thresholds age badly; peer comparison surfaces the real outliers.
- Write the action before the threshold is ever crossed. A KRI definition that lacks a "what we do when this goes red" line is incomplete.
- Treat "reviewed, no action" as a real, documented disposition. The inspection risk is undocumented silence, not a defensible no-action decision.
- Protect consent, eligibility, and SAE data at 100% SDV no matter how aggressive your reduction strategy. These are not the place to economize.
- Version-control the plan and record why each revision happened. A frozen plan in a moving trial is a finding.
- Build the central function's decisions into a single auditable record, not personal spreadsheets and email.
- Pilot the dashboards on early data before you rely on them. KRIs need enough data to be meaningful, and thresholds often need calibration once real data arrives.

---

## Related articles

- [ICH E6 Good Clinical Practice](/articles/ich-e6-good-clinical-practice)
- [Source data and SDV in clinical trials](/articles/source-data-and-sdv-clinical)
- [Clinical QA and GCP data integrity](/articles/clinical-qa-gcp-data-integrity)
- [GCP audits and inspections](/articles/gcp-audits-and-inspections)
- [Quality risk management](/articles/quality-risk-management)
- [eConsent and decentralized trials](/articles/econsent-and-decentralized-trials)
- [eTMF and the trial master file](/articles/etmf-trial-master-file)
- [ICH E8/E9 trial design and statistics](/articles/ich-e8-e9-trial-design-statistics)
- [Root cause analysis techniques](/articles/root-cause-analysis-techniques)
- [What is a CAPA](/articles/what-is-a-capa)
