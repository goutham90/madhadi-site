---
title: "Clinical Operational Records Pack: Deviation Log, Monitoring Visit Report, Delegation Log, Note to File"
description: "Four ready-to-use GCP clinical forms in one controlled pack: a protocol-deviation log with classification, a site monitoring visit report, a delegation-of-authority log, and a note-to-file, each with placeholders, a filled specimen, common inspection findings, and the regulations they satisfy."
pubDate: 2026-06-22
docType: "Form"
pillar: "clinical-gcp"
relatedArticles: ["ich-e6-good-clinical-practice", "clinical-qa-gcp-data-integrity"]
tags: ["GCP", "clinical trials", "protocol deviation", "monitoring visit report", "delegation log", "note to file", "form", "ICH E6"]
tier: "Intermediate"
---

This pack holds four forms that a clinical site or a sponsor uses every week: a protocol-deviation log, a monitoring (site) visit report, a delegation-of-authority log, and a note-to-file. Each is a standalone controlled record with its own document-control header, so you can issue them together or one at a time. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your form numbers under document control, and route each through your normal review and approval. A worked filled specimen follows each blank form so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

A note on why these four sit together: they form the spine of an inspectable clinical trial. The delegation log says who was allowed to do what. The monitoring visit report says the sponsor checked the work. The deviation log says what went off-plan and how it was handled. The note-to-file explains a single decision that does not belong on any other form. An inspector reads them as a set, so they should agree with each other and with the source documents and the trial master file.

---

# Form 1: Protocol Deviation Log and Classification

## Document control header

| Field | Entry |
|---|---|
| Form title | Protocol Deviation Log and Classification |
| Form number | `<<FILL: FORM-ID, e.g. FRM-CL-031-01>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Linked SOP | `<<FILL: SOP-ID for deviation handling in clinical trials>>` |
| Protocol number | `<<FILL: protocol number / version>>` |
| Site number | `<<FILL: site ID>>` |
| Page | `<<FILL: page of pages>>` |

## How this form works

A protocol deviation is any departure from the approved protocol, the consent process, or the applicable procedures and regulations. Log every deviation, not only the ones you judge important; the judgment of importance is the classification, and it is recorded separately so an inspector can see your reasoning. Keep the log current at the site and reconcile it against the deviations the sponsor and the monitor have recorded. Each row is one deviation. Repeat the row block for each deviation.

## Per-deviation record

| Field | Entry |
|---|---|
| Deviation ID | `<<FILL: site-assigned sequential number>>` |
| Subject ID (if subject-specific) | `<<FILL: subject number or "site-level / not subject-specific">>` |
| Date of deviation | `<<FILL>>` |
| Date identified | `<<FILL>>` |
| Identified by (name, role) | `<<FILL>>` |
| Protocol section or requirement not met | `<<FILL: e.g. visit window, inclusion criterion, prohibited medication, sample handling>>` |
| Factual description | `<<FILL: what happened, stated as fact, no blame>>` |
| Planned or unplanned | Planned (pre-approved) / Unplanned |
| Subject safety potentially affected | Yes / No |
| Data integrity or primary endpoint potentially affected | Yes / No |
| Immediate action taken | `<<FILL: e.g. subject reconsented, sample re-drawn, dose corrected>>` |
| Classification | Important (major) / Non-important (minor) |
| Classification rationale | `<<FILL: why this tier, tied to safety and data impact>>` |
| Reported to sponsor (date) | `<<FILL>>` |
| Reported to IRB or EC (date, if required) | `<<FILL or N/A>>` |
| CAPA reference (if any) | `<<FILL or "none required" with reason>>` |
| Recorded by (name, signature, date) | `<<FILL>>` |
| PI review (name, signature, date) | `<<FILL>>` |

## Classification guide

Classify by the effect on subject safety, subject rights, and the reliability of the trial data. Use the two questions in the record (safety affected, data or endpoint affected) to drive the tier, and write the rationale every time.

| Tier | Use when | Examples |
|---|---|---|
| Important (major) | The deviation could affect subject safety or rights, the integrity of the trial data, or a subject's willingness to continue, or it shows a pattern | Enrolling a subject who failed an inclusion criterion, missed safety assessment, consent obtained after a study procedure, repeated visit-window breaches |
| Non-important (minor) | A one-off departure with no effect on safety, rights, or the primary data | A single non-safety lab drawn one day outside a wide window, a procedure done in the wrong order with no data impact |

A run of non-important deviations of the same kind becomes important, because the pattern points to a process problem. Note the pattern when you see it.

## Acceptance criteria for a completed log

- Every known deviation is logged, including the minor ones, with a date of occurrence and a date identified.
- Each deviation states the specific protocol requirement that was not met, not a vague label.
- The classification has a written rationale tied to safety and data impact, and patterns are escalated.
- Important deviations show sponsor notification and, where the protocol or local rules require it, IRB or EC notification, with dates.
- Each row is signed by the recorder and reviewed by the principal investigator.

## References

> ICH E6 Good Clinical Practice. Under E6(R2), sections 4.5 (compliance with protocol) and 5.20 (noncompliance): the investigator should document and explain any deviation, and the sponsor should secure agreement and document deviations. E6(R3) reached Step 4 in January 2025 and reorganized this material; where your region has adopted R3, map these requirements to the R3 principles and Annex 1. Cite whichever version applies to your trial.
> 21 CFR 312.60 and 312.66 (investigator responsibilities, including not deviating from the protocol except to protect subject safety, and IRB notification).
> 21 CFR 56.108(a)(3) and 56.108(a)(4) (IRB review of changes and reporting of deviations that affect subject rights or welfare).
> EU Clinical Trials Regulation 536/2014, Article 52 (notification of serious breaches by the sponsor) where the trial is conducted in the EU.
> ICH E6 record-retention and source-data expectations for the deviation log as part of the trial records.

Confirm the current version and clause numbers of each reference before issue.

---

## Filled specimen: protocol deviation log

The following shows two rows completed for an example oncology trial, so you can see the level of detail an inspector expects. The protocol, site, and subjects are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Deviation ID | DEV-S047-014 |
| Subject ID | S047-0103 |
| Date of deviation | 03 June 2026 |
| Date identified | 04 June 2026 |
| Identified by | M. Owens, Study Coordinator |
| Protocol section not met | Section 7.2, Week 8 tumor assessment visit window of plus or minus 3 days |
| Factual description | The Week 8 imaging visit occurred on study day 60. The protocol window allowed days 49 to 59. The visit was 1 day late because the imaging center had no slot within the window. |
| Planned or unplanned | Unplanned |
| Subject safety potentially affected | No |
| Data or primary endpoint potentially affected | Yes (efficacy assessment timing) |
| Immediate action taken | Imaging completed day 60; subsequent visits rescheduled from the original baseline anchor, not the late visit. |
| Classification | Important (major) |
| Classification rationale | The primary endpoint depends on scheduled tumor assessment timing, so an out-of-window efficacy visit can affect the primary data; classified important even though safety was not affected. |
| Reported to sponsor | 04 June 2026 |
| Reported to IRB | Not required per protocol (single, non-safety, no consent impact); logged for periodic IRB summary. |
| CAPA reference | CAPA-S047-006 (imaging-slot pre-booking added to visit-planning checklist) |
| Recorded by | M. Owens, signed, 04 June 2026 |
| PI review | Dr. A. Fischer, signed, 05 June 2026 |

| Field | Entry |
|---|---|
| Deviation ID | DEV-S047-015 |
| Subject ID | Site-level / not subject-specific |
| Date of deviation | 06 June 2026 |
| Date identified | 06 June 2026 |
| Identified by | M. Owens, Study Coordinator |
| Protocol section not met | Pharmacy manual section 4, investigational product stored at 26 C for 40 minutes against a 2 to 8 C requirement during a fridge defrost |
| Factual description | The drug fridge defrost cycle ran during a power event; the logger recorded 26 C for 40 minutes. Affected kits identified by lot. |
| Planned or unplanned | Unplanned |
| Subject safety potentially affected | Yes |
| Data or primary endpoint potentially affected | No |
| Immediate action taken | Affected kits quarantined and not dispensed; sponsor drug-management contacted for an excursion assessment. |
| Classification | Important (major) |
| Classification rationale | Potential effect on product quality and therefore subject safety; quarantined pending sponsor stability assessment. |
| Reported to sponsor | 06 June 2026 |
| Reported to IRB | Not required (no subject exposed); logged. |
| CAPA reference | CAPA-S047-007 (backup alarm and monthly page-test added) |
| Recorded by | M. Owens, signed, 06 June 2026 |
| PI review | Dr. A. Fischer, signed, 06 June 2026 |

In this example the first deviation looks minor (one day late) but is classified important because the primary endpoint depends on assessment timing, and the rationale says so. The second is a site-level event with no subject exposed, quarantined before anyone could be harmed. Both name the exact requirement, both reach the sponsor the same day, and both carry a CAPA that fixes the process, not the person.

## Common inspection findings this form prevents

- Only the deviations someone judged serious are logged; the minor ones are missing, so the log does not match the source documents.
- Deviations are labeled major or minor with no rationale, and the classification does not match the safety and data impact.
- A pattern of the same minor deviation is never escalated to important.
- Important deviations show no sponsor or IRB notification, or the notification is undated.
- The log does not reconcile with the deviations the monitor recorded in the visit reports.

## How to adapt this form

1. Set your form number, linked SOP, protocol, and site in the header.
2. If your sponsor uses different tier names, relabel the classification field but keep the two driving questions (safety, data).
3. Set the IRB or EC notification rule to match your protocol and local regulation, and reference the SOP that defines it.
4. If deviations are captured in an electronic trial system, keep this log as the validated export or as a pointer to that system, and reconcile both.
5. Confirm every regulation in the references against the current published version before issue.

---

# Form 2: Monitoring (Site) Visit Report

## Document control header

| Field | Entry |
|---|---|
| Form title | Monitoring Visit Report |
| Form number | `<<FILL: FORM-ID, e.g. FRM-CL-032-01>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Linked SOP | `<<FILL: SOP-ID for clinical monitoring / monitoring plan reference>>` |
| Protocol number | `<<FILL: protocol number / version>>` |
| Page | `<<FILL: page of pages>>` |

## How this form works

This report records a sponsor monitoring visit to a site: what the monitor checked, what they found, what they instructed, and what is still open. It is the sponsor's evidence that it oversaw the trial and verified the data and subject protection at the site. Complete it during and immediately after the visit, send the follow-up letter to the site, and track the action items to closure before or at the next visit. Use the same form structure for the visit types you run (selection, initiation, routine or interim, and close-out) and mark the type at the top.

## Section A: Visit identification

| Field | Entry |
|---|---|
| Visit type | Selection / Initiation / Routine (interim) / Close-out |
| Visit date(s) | `<<FILL>>` |
| On-site or remote | On-site / Remote |
| Site number and name | `<<FILL>>` |
| Principal investigator | `<<FILL>>` |
| Monitor (name, role) | `<<FILL>>` |
| Site staff met | `<<FILL: names and roles>>` |
| Visit objectives | `<<FILL: from the monitoring plan>>` |

## Section B: Subjects and consent reviewed

| Field | Entry |
|---|---|
| Subjects enrolled to date | `<<FILL>>` |
| Subjects reviewed this visit | `<<FILL: IDs or count, per the monitoring plan sampling>>` |
| Informed consent verified (current version, dated before any study procedure, signed by subject and consenter) | Yes / No / findings: `<<FILL>>` |
| Eligibility verified against source | Yes / No / findings: `<<FILL>>` |
| Serious adverse events reviewed and reconciled (site vs sponsor safety database) | Yes / No / N/A |

## Section C: Source data verification and data review

| Field | Entry |
|---|---|
| Monitoring approach used this visit | 100 percent SDV / targeted (risk-based) / off-site data review only |
| Data points or fields verified | `<<FILL: critical data per the monitoring plan, e.g. primary endpoint, eligibility, dosing, SAEs>>` |
| Source-to-eCRF discrepancies found | `<<FILL: count and nature>>` |
| Outstanding data queries | `<<FILL: count, age of oldest>>` |
| Protocol deviations identified or reconciled this visit | `<<FILL: reconciled against the site deviation log>>` |

## Section D: Investigational product and site facilities

| Field | Entry |
|---|---|
| IP accountability reconciled (received, dispensed, returned, destroyed) | Yes / No / findings: `<<FILL>>` |
| IP storage conditions and temperature records reviewed | Yes / No / findings: `<<FILL>>` |
| Essential documents / investigator site file reviewed and current | Yes / No / findings: `<<FILL>>` |
| Delegation log current and signed | Yes / No / findings: `<<FILL>>` |
| Lab certifications, normal ranges, and equipment calibration current | Yes / No / N/A |

## Section E: Findings and action items

List each finding once, classify it, and assign an owner and a due date. Carry forward any action item that is not yet closed.

| Finding ID | Description | Classification (critical / major / minor) | Action required | Owner | Due date | Status (open / closed) |
|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## Section F: Summary and sign-off

| Field | Entry |
|---|---|
| Overall site status | `<<FILL: e.g. compliant with minor follow-ups; or escalation recommended>>` |
| Issues escalated to sponsor / study lead | `<<FILL or none>>` |
| Date follow-up letter sent to site | `<<FILL>>` |
| Next visit planned (type, target date) | `<<FILL>>` |
| Monitor (name, signature, date) | `<<FILL>>` |
| Reviewed by (lead monitor / clinical lead, name, signature, date) | `<<FILL>>` |

## Acceptance criteria for a completed report

- The visit type, date, and objectives match the monitoring plan, and the report is completed promptly after the visit.
- Consent and eligibility verification for the sampled subjects is recorded with specific findings, not a bare yes.
- The monitoring approach (full or targeted) is stated, and the critical data verified matches the monitoring plan.
- Every finding has a classification, an owner, and a due date, and prior open items are carried forward.
- The report is signed by the monitor and reviewed by the responsible lead, and the site follow-up letter is logged.

## References

> ICH E6 Good Clinical Practice. Under E6(R2), section 5.18 (monitoring), including the monitoring plan (5.18.7), the monitor's responsibilities (5.18.4), and risk-based and centralized monitoring (5.18.3); section 5.0 (quality management) supports the risk-based approach. E6(R3) reached Step 4 in January 2025 and restructured these sections around quality by design; where R3 is adopted in your region, cite the R3 principles and Annex 1 for monitoring and oversight.
> 21 CFR 312.50 and 312.56 (sponsor responsibilities, including monitoring the investigation).
> FDA guidance, A Risk-Based Approach to Monitoring of Clinical Investigations (final, 2013) and the 2023 questions-and-answers guidance on risk-based monitoring.
> EU Clinical Trials Regulation 536/2014 and ICH E6 expectations for sponsor oversight of trial conduct.

Confirm the current version and clause numbers of each reference before issue.

---

## Filled specimen: monitoring visit report

The following shows a routine interim visit completed for an example trial, so you can see the level of detail an inspector expects. Names and numbers are illustrative.

### Section A: Visit identification

| Field | Entry |
|---|---|
| Visit type | Routine (interim) |
| Visit date | 09 June 2026 |
| On-site or remote | On-site |
| Site number and name | Site 047, Northgate Cancer Center |
| Principal investigator | Dr. A. Fischer |
| Monitor | J. Romano, Clinical Research Associate |
| Site staff met | M. Owens (coordinator), pharmacy tech P. Lund |
| Visit objectives | Verify consent and eligibility for new enrollments, SDV of primary endpoint and SAE data, IP accountability, reconcile the site deviation log. |

### Section B: Subjects and consent reviewed

| Field | Entry |
|---|---|
| Subjects enrolled to date | 12 |
| Subjects reviewed this visit | 4 (S047-0101, 0102, 0103, 0104; new enrollments plus the two with recent SAEs) |
| Informed consent verified | Yes for 3; finding for S047-0104, consent signed on the protocol-required version but the witness line was left blank where a witness was present. |
| Eligibility verified against source | Yes for all 4. |
| SAEs reviewed and reconciled | Yes; 2 SAEs in the site file matched the sponsor safety database; both reported within timelines. |

### Section C: Source data verification and data review

| Field | Entry |
|---|---|
| Monitoring approach used this visit | Targeted (risk-based) per the monitoring plan, plus 100 percent SDV of consent, eligibility, primary endpoint, and SAEs. |
| Data points verified | Primary endpoint (Week 8 imaging response), eligibility criteria, dosing records, SAE source. |
| Source-to-eCRF discrepancies found | 3 minor transcription discrepancies (lab values), all corrected with the site during the visit. |
| Outstanding data queries | 5 open; oldest 9 days. |
| Protocol deviations identified or reconciled | Reconciled the site deviation log against monitor records; DEV-S047-014 (visit window) and DEV-S047-015 (IP excursion) confirmed and consistent; no unlogged deviations found. |

### Section D: Investigational product and site facilities

| Field | Entry |
|---|---|
| IP accountability reconciled | Yes; received 30 kits, dispensed 18, 0 returned, quarantined 2 (excursion lot), balance 10; reconciled to records. |
| IP storage and temperature records reviewed | Finding; the excursion (DEV-S047-015) confirmed quarantined; new backup alarm installed, page-test pending first monthly cycle. |
| Essential documents / ISF current | Yes. |
| Delegation log current and signed | Finding; new sub-investigator Dr. R. Mehta performing assessments since 02 June but delegation row not yet signed by the PI (see action item F-03). |
| Lab certifications and calibration current | Yes. |

### Section E: Findings and action items

| Finding ID | Description | Classification | Action required | Owner | Due date | Status |
|---|---|---|---|---|---|---|
| F-01 | Consent witness line blank for S047-0104 | Minor | Site to document the circumstance via note-to-file; reconfirm witness practice | M. Owens | 16 Jun 2026 | Open |
| F-02 | IP excursion lot quarantined, page-test pending | Major | Complete first monthly alarm page-test and record | P. Lund | 30 Jun 2026 | Open |
| F-03 | Delegation row for Dr. Mehta unsigned while active | Major | PI to sign delegation row dated to the actual start; confirm no work occurred outside delegation | Dr. Fischer | 11 Jun 2026 | Open |
| F-04 | 3 lab transcription discrepancies | Minor | Corrected on site; no further action | J. Romano | 09 Jun 2026 | Closed |

### Section F: Summary and sign-off

| Field | Entry |
|---|---|
| Overall site status | Compliant with three follow-ups; no critical findings. Delegation gap (F-03) flagged for prompt closure. |
| Issues escalated | F-03 noted to study lead because activity occurred before the delegation row was signed. |
| Date follow-up letter sent to site | 10 June 2026 |
| Next visit planned | Routine interim, target 21 July 2026 |
| Monitor | J. Romano, signed, 10 June 2026 |
| Reviewed by | Lead CRA S. Becker, signed, 11 June 2026 |

In this example the monitor did not just tick boxes; the consent finding names the exact field, the delegation gap is escalated because work happened before the sign-off, and the IP excursion ties back to the deviation log. Each finding has an owner and a date, and the closed item is shown closed. That is what oversight looks like on paper.

## Common inspection findings this form prevents

- Monitoring visits happened but no reports exist, or reports are written long after the visit.
- The report says consent and eligibility were verified but records no specific findings, so there is no evidence of what was actually checked.
- The monitoring approach is not stated, so an inspector cannot tell what was source-verified against the monitoring plan.
- Findings have no owner or due date, and open items are not carried forward between visits.
- Deviations the monitor saw are not reconciled with the site's deviation log.

## How to adapt this form

1. Set your form number and reference your monitoring plan in the header.
2. Keep one form skeleton and mark the visit type; trim the sections that do not apply to selection or close-out visits rather than maintaining four separate forms.
3. Align Section C with your monitoring plan's critical data and your sampling rule for full or targeted source data verification.
4. If you monitor centrally or remotely, keep Section C honest about what was reviewed off-site versus on-site.
5. Confirm every regulation in the references against the current published version before issue.

---

# Form 3: Delegation of Authority Log

## Document control header

| Field | Entry |
|---|---|
| Form title | Delegation of Authority Log |
| Form number | `<<FILL: FORM-ID, e.g. FRM-CL-033-01>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Linked SOP | `<<FILL: SOP-ID for delegation / trial conduct>>` |
| Protocol number | `<<FILL: protocol number / version>>` |
| Site number | `<<FILL: site ID>>` |
| Principal investigator | `<<FILL>>` |
| Page | `<<FILL: page of pages>>` |

## How this form works

The delegation log records which trial tasks the principal investigator has assigned to which qualified staff, and for what period. It is one of the first documents an inspector asks for, because it answers a simple question: was the person who did this task allowed to do it, and were they qualified and trained at the time. Every person who performs a trial-related task that affects subjects or data should appear on the log, with a specific task list, a start date, a signature, and the PI's authorizing signature. The PI signs each row, and the PI's own signature establishes overall responsibility.

Set up a task key first, then list each person against the tasks they are delegated.

## Task key (define once, reference by code)

| Code | Task |
|---|---|
| 1 | Obtain and document informed consent |
| 2 | Assess eligibility |
| 3 | Conduct study visits and clinical assessments |
| 4 | Prescribe or adjust investigational product / make medical decisions |
| 5 | Dispense, prepare, or account for investigational product |
| 6 | Record source data |
| 7 | Enter and correct data in the eCRF |
| 8 | Assess and record adverse events |
| 9 | Perform protocol-specified procedures (specify) `<<FILL>>` |
| 10 | Other (specify) `<<FILL>>` |

Mark only tasks that require a licensed clinician (typically 4, and 1, 2, 8 where local rules require) as restricted, and confirm the delegate holds the qualification.

## Delegation entries

| Name | Role / title | Tasks delegated (codes) | Start date | End date | Delegate signature and date | PI authorizing signature and date |
|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL or "ongoing">>` | `<<FILL>>` | `<<FILL>>` |

## Supporting records (confirm before the start date, do not record on this log)

- Current CV and, where required, medical license or professional registration on file in the investigator site file.
- Protocol-specific and GCP training completed and dated on or before the delegated start date.
- Financial-disclosure and any role-specific qualification on file where the protocol or sponsor requires it.

## Acceptance criteria for a completed log

- Every person who performed a trial task that touches subjects or data appears on the log.
- Each delegated task is specific (by code), not a blanket "all study activities."
- The start date is on or before the first day the person performed the task, and training and qualification were complete by that date.
- Tasks that require a licensed clinician are delegated only to qualified clinicians.
- Each row carries the delegate's signature and the PI's authorizing signature, both dated, and end dates are recorded when a person leaves the team.

## References

> ICH E6 Good Clinical Practice. Under E6(R2), sections 4.1 (investigator qualifications and agreements) and 4.2 (adequate resources), including 4.2.5 and 4.2.6 on supervising and ensuring that delegated trial-related duties go to qualified persons. E6(R3) reached Step 4 in January 2025 and reorganized the investigator responsibilities; cite the R3 Annex 1 investigator section where your region has adopted R3.
> 21 CFR 312.53 and the investigator commitments on Form FDA 1572 (the investigator personally conducts or supervises the investigation and ensures staff are informed of their obligations).
> 21 CFR 312.62 (investigator recordkeeping, including adequate and accurate records).
> FDA Compliance Program Guidance for clinical investigator inspections, which treats the delegation log and staff qualification as a routine review area.

Confirm the current version and clause numbers of each reference before issue.

---

## Filled specimen: delegation of authority log

The following shows a delegation log completed for an example site, so you can see the level of detail an inspector expects. Names are illustrative.

Task key as defined above. Restricted tasks (require licensed clinician): 4; and 1, 2, 8 per local rule.

| Name | Role / title | Tasks delegated | Start date | End date | Delegate signature and date | PI authorizing signature and date |
|---|---|---|---|---|---|---|
| Dr. A. Fischer | Principal Investigator | 1-9 | 01 Apr 2026 | Ongoing | A. Fischer, 28 Mar 2026 | A. Fischer, 28 Mar 2026 |
| Dr. R. Mehta | Sub-Investigator (oncologist) | 2, 3, 4, 8 | 02 Jun 2026 | Ongoing | R. Mehta, 02 Jun 2026 | A. Fischer, 02 Jun 2026 |
| M. Owens | Study Coordinator | 1, 2, 3, 6, 7 | 01 Apr 2026 | Ongoing | M. Owens, 28 Mar 2026 | A. Fischer, 28 Mar 2026 |
| P. Lund | Pharmacy Technician | 5 | 01 Apr 2026 | Ongoing | P. Lund, 29 Mar 2026 | A. Fischer, 29 Mar 2026 |
| T. Greene | Research Nurse | 3, 6, 8 | 01 Apr 2026 | 22 May 2026 | T. Greene, 28 Mar 2026 | A. Fischer, 28 Mar 2026 |

In this example the sub-investigator is delegated medical decision-making (task 4) because she is a licensed oncologist, the coordinator is not delegated tasks 4 or 8, the pharmacy technician is limited to drug handling, and the nurse who left has an end date that closes her delegation. Note that Dr. Mehta started on 02 June and the row is signed 02 June; the monitoring visit caught the case where the PI's authorizing signature lagged behind the start, which is exactly the gap this log exists to expose.

## Common inspection findings this form prevents

- A person recorded source data or assessed a subject but does not appear on the delegation log.
- Tasks are delegated as "all study procedures," so it is impossible to tell who could do what.
- The delegated start date is after the date the person first performed the task, or training was completed after the start date.
- A non-clinician is delegated medical decisions or drug accountability without the required qualification.
- Staff who left the team have no end date, so the log does not reflect who was actually active.

## How to adapt this form

1. Set your form number, protocol, site, and PI in the header.
2. Edit the task key to match the actual roles and procedures in your protocol; add protocol-specific procedures under code 9.
3. Mark which tasks require a licensed clinician under your local regulation, and check the qualification before delegating those.
4. Keep the supporting records (CV, license, training) in the investigator site file and reference them; do not duplicate them on the log.
5. Update the log promptly when staff join or leave, and reconcile it at every monitoring visit.
6. Confirm every regulation in the references against the current published version before issue.

---

# Form 4: Note to File

## Document control header

| Field | Entry |
|---|---|
| Form title | Note to File |
| Form number | `<<FILL: FORM-ID, e.g. FRM-CL-034-01>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Protocol number | `<<FILL: protocol number / version>>` |
| Site number | `<<FILL: site ID>>` |
| Page | `<<FILL: page of pages>>` |

## How this form works

A note to file records a single fact, clarification, or decision that does not have a home on another form. Use it to explain a discrepancy, document a one-time circumstance, or memorialize a decision so the record reads correctly later. A note to file is a clarification, not a fix; it does not correct source data (you correct source data by the controlled correction method, with a single line through the error, the correction, the initials, and the date) and it does not replace a deviation report, a CAPA, or a protocol amendment. If the situation needs one of those, raise that instead and reference it here.

Keep notes to file rare and specific. A file full of notes that explain away problems is itself a finding. One event, one note, one signature.

## Note record

| Field | Entry |
|---|---|
| Note to file ID | `<<FILL: site-assigned number>>` |
| Date of note | `<<FILL: date written, which is the date the note is made>>` |
| Date of the event or fact being described | `<<FILL>>` |
| Subject ID (if applicable) | `<<FILL or "not subject-specific">>` |
| Document or record this note relates to | `<<FILL: e.g. specific eCRF page, consent form, monitoring report, drug log>>` |
| What is being clarified or documented | `<<FILL: state the fact or circumstance plainly>>` |
| Why (background and reason) | `<<FILL: the context an inspector would need to understand it>>` |
| Action taken or decision made | `<<FILL: what was done, by whom>>` |
| Cross-reference | `<<FILL: deviation ID, CAPA, query, or "none">>` |
| Does this require a deviation, CAPA, or amendment? | Yes (raised as `<<FILL>>`) / No (reason: `<<FILL>>`) |
| Written by (name, role, signature, date) | `<<FILL>>` |
| PI or designee aware / reviewed (name, signature, date) | `<<FILL>>` |

## What a note to file should and should not do

| It should | It should not |
|---|---|
| Explain a one-time discrepancy or circumstance | Correct a source-data entry (use the controlled correction method) |
| Memorialize a decision and its reason | Stand in for a deviation, CAPA, or amendment that is actually needed |
| Cross-reference the proper record when one was raised | Be back-dated; the note date is the date it is written |
| Be specific to one event | Become a recurring habit that papers over a process problem |

## Acceptance criteria for a completed note

- The note describes one event or fact, written on the date it is made, with the event date stated separately.
- It names the specific record it relates to, so it can be found alongside that record.
- It states the reason an inspector would need, not just the conclusion.
- It honestly answers whether a deviation, CAPA, or amendment is required, and references it when one was raised.
- It is signed and dated by the author and acknowledged by the PI or designee, and it is not used to alter source data.

## References

> ICH E6 Good Clinical Practice. Under E6(R2), sections 4.9 (records and reports, including source documents and ALCOA-aligned data attributes) and 8 (essential documents), under which a note to file is filed with the record it clarifies. E6(R3) reached Step 4 in January 2025 and carries the same data-attribute and essential-records expectations in its restructured text; cite the R3 sections where your region has adopted R3.
> 21 CFR 312.62 (investigator recordkeeping, accurate and complete records).
> FDA guidance on electronic source data and on data integrity expectations (attributable, legible, contemporaneous, original, accurate), which a note to file must respect rather than circumvent.
> MHRA GxP Data Integrity Guidance, on correcting records by the controlled method and on not using explanatory notes to mask data changes.

Confirm the current version and clause numbers of each reference before issue.

---

## Filled specimen: note to file

The following shows a note to file completed for an example clarification, so you can see the level of detail an inspector expects. Names and numbers are illustrative.

| Field | Entry |
|---|---|
| Note to file ID | NTF-S047-009 |
| Date of note | 16 June 2026 |
| Date of the event being described | 28 May 2026 |
| Subject ID | S047-0104 |
| Document this note relates to | Informed consent form for S047-0104, witness signature line |
| What is being clarified | The witness signature line on the consent form for S047-0104 is blank although a witness, ward nurse C. Diaz, was present and observed the full consent discussion on 28 May 2026. The consent itself was the protocol-required version, signed and dated by the subject and the consenting sub-investigator before any study procedure. |
| Why | The coordinator confirmed with the consenting clinician and the witness that the discussion occurred with the witness present; the witness inadvertently did not sign at the time and the line cannot be back-dated. |
| Action taken | The circumstance is documented here; the consent process itself was valid and complete. Site consent practice reconfirmed with staff to ensure the witness signs at the time. |
| Cross-reference | Monitoring finding F-01 (visit 09 June 2026) |
| Requires a deviation, CAPA, or amendment? | No. The consent was valid and timely; this is a documentation clarification of a missing witness signature, captured as a monitoring follow-up, not a protocol or consent-process deviation. |
| Written by | M. Owens, Study Coordinator, signed, 16 June 2026 |
| PI reviewed | Dr. A. Fischer, signed, 16 June 2026 |

In this example the note does the right things: it does not back-date a signature or alter the consent form, it states the actual circumstance and why the line is blank, it confirms the consent itself was valid and timely, and it cross-references the monitoring finding rather than pretending nothing was missed. It also honestly decides that no deviation is needed and says why. That is the difference between a clarifying note and a note that tries to hide a problem.

## Common inspection findings this form prevents

- A note to file is used to "correct" source data instead of the controlled correction method.
- A note to file substitutes for a deviation, CAPA, or amendment that the situation actually required.
- The note is back-dated, or the note date and the event date are conflated to make a problem look contemporaneous.
- The note states a conclusion ("this is acceptable") without the facts and reason an inspector would need.
- The file is full of notes to file that, taken together, reveal a recurring process problem no one escalated.

## How to adapt this form

1. Set your form number, protocol, and site in the header.
2. Keep the "should and should not" table on the form so authors are reminded what a note to file is for.
3. Make the deviation/CAPA/amendment decision field mandatory, so every note forces an honest answer about whether a controlled record is needed.
4. Train staff that the note date is the date written and that source data is corrected only by the controlled method.
5. Periodically review the volume and pattern of notes to file as a quality signal; a rising count is a process flag.
6. Confirm every regulation in the references against the current published version before issue.

---

## Using the four forms together

These records are strongest as a set. At a monitoring visit (Form 2), the monitor reconciles the site deviation log (Form 1) against what they observed, checks that everyone performing tasks is on the delegation log (Form 3) with the right dates, and confirms that any note to file (Form 4) clarifies rather than conceals. A single chain runs through the filled specimens above: a sub-investigator started before the PI signed her delegation row, the monitor caught it as a finding, and the surrounding records (delegation log, deviation log, note to file) either fix or honestly document it. Build the same internal consistency into your own records and an inspector will find a trial that oversaw itself.
