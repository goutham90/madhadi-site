---
title: "Device CAPA, Complaints, MDR Reporting, and Postmarket Surveillance"
description: "How medical device postmarket works in practice: complaint handling, MDR and vigilance reporting, CAPA, recalls and field actions, and the PMS and PMCF feedback loop that feeds the risk file."
pubDate: 2026-06-20
tags: ["medical-devices", "postmarket-surveillance", "complaints", "mdr-reporting", "capa", "recalls", "vigilance"]
pillar: "medical-devices"
tier: "Intermediate"
---

Device postmarket is where most pharma quality people get tripped up. The vocabulary is similar to drugs (complaints, CAPA, deviations), but the regulatory machinery is different, the timelines are tighter, and the obligations do not stop at "investigate and close." A device manufacturer has to keep watching a product across its whole market life, report adverse events to authorities on hard clocks, run field actions when something goes wrong, and feed everything learned back into the design and risk files. That loop is the job.

This page covers the four connected systems that make up device postmarket: complaint handling, regulatory reporting (FDA Medical Device Reporting and EU vigilance), CAPA, and postmarket surveillance including post-market clinical follow-up (PMCF). It assumes you already know basic GxP quality. If you do not, start with [what is GMP](/articles/what-is-gmp) and [what is a CAPA](/articles/what-is-a-capa), then come back.

---

## The regulatory frame: what governs device postmarket

You cannot do this job without knowing which rule applies to which activity. Five instruments carry most of the weight.

**US, FDA Quality System Regulation, 21 CFR Part 820.** This is the device QSR. It has been in force since 1996. FDA published a final rule in February 2024 that replaces the bulk of Part 820 with ISO 13485:2016 by reference, renaming the framework the Quality Management System Regulation (QMSR). The QMSR takes effect February 2, 2026. Until then Part 820 as written still applies, and even after, the core postmarket clauses do not disappear, they get re-expressed through ISO 13485. The QSR sections that matter for postmarket are 820.198 (complaint files), 820.100 (corrective and preventive action), and 820.200 (servicing). See [medical device quality system QMSR](/articles/medical-device-quality-system-qmsr) for the transition detail.

**US, Medical Device Reporting, 21 CFR Part 803.** This is the federal rule that forces manufacturers, importers, and device user facilities to report device-related deaths, serious injuries, and certain malfunctions to FDA. It is separate from the complaint rule. A complaint is an internal record. An MDR is a report you send to the agency. Part 803 sets the clock: 30 calendar days for most events, 5 working days for events requiring remedial action to prevent unreasonable risk of substantial harm to public health.

**US, Reports of Corrections and Removals, 21 CFR Part 806.** This governs field corrections and removals (the device word for recalls). It tells you when a field action must be reported to FDA and what records to keep even when it need not be reported.

**EU, Medical Device Regulation (EU) 2017/745 (MDR)** and **In Vitro Diagnostic Regulation (EU) 2017/746 (IVDR).** The MDR applied from May 2021, the IVDR from May 2022. These regulations rebuilt EU postmarket from the ground up. Articles 83 to 92 of the MDR define the postmarket surveillance system, the PMS plan, the PMS report, the periodic safety update report (PSUR), vigilance, and trend reporting. Vigilance timelines live in Article 87. See [EU MDR IVDR overview](/articles/eu-mdr-ivdr-overview).

**Standards that operationalize all of this.** ISO 13485:2016 is the QMS standard. ISO 14971:2019 is the risk management standard, and its companion technical report ISO/TR 24971:2020 gives guidance. For PMS specifically, ISO/TR 20416:2020 describes a PMS process aligned to ISO 13485 and ISO 14971. Risk management is not a side activity here, it is the spine that connects complaints to design. Read [ISO 14971 risk management devices](/articles/iso-14971-risk-management-devices) alongside this.

A quick translation table, because the same idea has different names on each side of the Atlantic:

| Concept | US term | EU term |
|---|---|---|
| Customer report of a problem | Complaint (820.198) | Complaint, feeds vigilance |
| Report to the authority | MDR (Part 803) | Serious incident report / vigilance (Art. 87) |
| Field action | Correction / Removal (Part 806) | Field Safety Corrective Action (FSCA) |
| Customer notice of a field action | Recall notice | Field Safety Notice (FSN) |
| Ongoing market watch | Postmarket surveillance | Postmarket Surveillance (Art. 83-86) |
| Periodic safety roll-up | (no direct QSR equivalent) | PSUR (Art. 86) / PMS Report |

---

## Complaint handling: the front door

### What it is and why it is required

A complaint, in the QSR definition at 21 CFR 820.198, is any written, electronic, or oral communication that alleges deficiencies related to the identity, quality, durability, reliability, safety, effectiveness, or performance of a device after it is released for distribution. That definition is broad on purpose. "It didn't work," "the display flickered," "the catheter kinked," "the result looked wrong," all of those are complaints. So is a sales rep's note, a social media post your team sees, and a clinician's offhand remark captured in a field service log.

Why it matters: the complaint file is the earliest signal that a device is hurting people or failing. Regulators treat complaint handling as a bellwether for the whole quality system. If a manufacturer cannot show it captures, evaluates, investigates, and reports complaints reliably, inspectors assume the rest of the system is weak. Complaint-handling failures are among the most cited device findings in FDA inspections.

The shared mechanics of intake, triage, investigation, and closure are the same across GxP. The device-specific overlay is the reportability decision and the link to MDR and vigilance. For the general process see [product complaint handling](/articles/product-complaint-handling) and [quality event classification triage](/articles/quality-event-classification-triage). What follows is the device flavor.

### What goes in a complaint record

A device complaint file under 820.198(e) must contain, at minimum:

- Whether the device failed to meet specifications.
- Whether the device was being used for treatment or diagnosis.
- The relationship of the device to the reported incident or injury.
- The name, model/catalog number, and the lot/serial/UDI of the device.
- The date and nature of the complaint, the name/address/phone of the complainant.
- The dates and results of the investigation.
- Any correction or corrective action taken.
- The reply to the complainant.

Add the fields you need to make a reportability call: event date, awareness date (the clock for MDR starts when your firm becomes aware), patient outcome (death / serious injury / no harm), whether a malfunction occurred and whether recurrence could cause death or serious injury, and the device's Unique Device Identifier so you can trace it. UDI is not optional bookkeeping, it is how you connect a field event to a specific production lot. See [unique device identification UDI](/articles/unique-device-identification-udi).

### How to handle a complaint, step by step

1. **Intake and log.** Capture every complaint in a formal record on the day of awareness. Stamp the awareness date. This date is the legal trigger for reporting clocks, so it must be defensible. Do not let complaints sit in an inbox, a rep's phone, or a service ticketing system that the quality unit cannot see.
2. **Initial review and triage.** A trained reviewer decides: is this a complaint per the definition? (If it is a question or a compliment, document why it is not a complaint.) Classify severity using your risk file. Flag anything involving death, serious injury, or a malfunction.
3. **Reportability assessment, MDR.** Run the Part 803 decision: did a death or serious injury occur, or a malfunction that would likely cause death or serious injury if it recurred? Document the decision either way. A "no" decision still has to be written down with rationale. This is where firms get cited, for undocumented or wrong "non-reportable" calls.
4. **Reportability assessment, EU.** In parallel, run the MDR Article 87 serious incident test for product placed on the EU market.
5. **Investigate.** Determine whether the device caused or contributed to the event. Request the device back if you can (returned-product analysis is gold). Reproduce the failure if feasible. Pull the device history record, the lot, the design risk file. Use structured root cause technique, see [root cause analysis techniques](/articles/root-cause-analysis-techniques).
6. **Decide on action.** No action, single-complaint correction, trend monitoring, CAPA, or field action. Tie the decision to risk, not to complaint count alone.
7. **Reply and close.** Document the reply to the complainant, the investigation results, and any action. Verify all required reports were filed.

A complaint that is referred for MDR reporting still has to be fully investigated and closed as a complaint. They are two records with two clocks. Do not collapse them.

### Acceptance criteria, what good looks like

- 100 percent of complaints have a documented reportability decision, both the "report" and the "do not report" calls.
- Awareness date is captured and reporting timeliness is measured against it (percent of MDRs filed within 30 days).
- Investigations reach a conclusion on device involvement, not just "could not be reproduced, closed."
- No backlog of open complaints beyond your SOP-defined target (e.g., 90 percent closed within 30 days, with justification for the rest).
- Complaint data feeds trending and PMS, and you can show the link.

### Worked example: complaint triage table

| Field | Entry |
|---|---|
| Complaint ID | CMP-2026-0417 |
| Awareness date | 2026-03-11 |
| Device / model / UDI | Infusion pump, model X200, (01)00812345600012(21)SN884412 |
| Lot | LOT-2025-219 |
| Reported event | Pump under-delivered; clinician noted "alarm did not sound at occlusion" |
| Patient outcome | Patient required additional monitoring, no permanent harm reported |
| Use context | Therapeutic, in-hospital |
| Initial severity | High (alarm failure on a life-supporting function) |
| MDR reportable? | Yes, malfunction that could cause serious injury if it recurred; 30-day MDR. Decision rationale recorded. |
| EU serious incident? | Yes, vigilance report initiated to relevant authority within 15 days; trend watch opened |
| Investigation | Device returned; occlusion sensor firmware fault confirmed on bench; 4 similar complaints in 60 days on same firmware rev |
| Action | CAPA opened (firmware), field action evaluated |

The "4 similar complaints in 60 days" line is the trigger that turns four individual complaints into a systemic problem. That is the whole point of trending.

---

## MDR reporting (US) and vigilance (EU)

### What it is and why

MDR reporting under 21 CFR Part 803 obligates manufacturers to tell FDA when their device may have caused or contributed to a death or serious injury, or malfunctioned in a way that could do so on recurrence. It exists so FDA can see safety signals across the whole market that no single manufacturer can see alone. Reports flow into the public MAUDE database. EU vigilance under MDR Article 87 does the same for the EU, feeding national competent authorities and EUDAMED.

Reporting is not a judgment of fault. You report a reportable event even when you believe the device performed correctly and user error was the cause. The standard is "may have caused or contributed," not "was proven to cause."

### The US decision logic, in plain terms

A manufacturer must submit an MDR when it becomes aware of information that reasonably suggests its device:

- **May have caused or contributed to a death or serious injury.** Serious injury means life-threatening, resulting in permanent impairment of a body function or permanent damage to a body structure, or necessitating medical or surgical intervention to preclude such permanent impairment or damage.
- **Has malfunctioned**, and that device or a similar one would be likely to cause or contribute to a death or serious injury if the malfunction were to recur.

Timelines:

| Situation | Form | Deadline |
|---|---|---|
| Death or serious injury, or reportable malfunction | eMDR (Form FDA 3500A, electronic) | 30 calendar days from awareness |
| Event needs remedial action to prevent unreasonable risk of substantial harm to public health | 5-day report | 5 working days |
| FDA has specifically requested 5-day reporting for a device | 5-day report | 5 working days |
| Baseline / supplemental reports | as required | per request / when new info found |

Manufacturer MDRs are filed electronically (eMDR) through FDA's Electronic Submissions Gateway. Paper 3500A is no longer the manufacturer route. User facilities (hospitals) and importers have their own obligations and forms.

You also must keep MDR event files and written MDR procedures (803.17). Even a "we decided not to report" determination has to be documented and retained.

### The EU decision logic

Under MDR Article 87, a manufacturer reports a "serious incident" (broadly: an incident that led, might have led, or might lead to death, serious deterioration of health, or a serious public health threat) to the relevant competent authority. Timelines under Article 87:

- **Serious public health threat:** immediately, no later than 2 days after awareness.
- **Death or unanticipated serious deterioration in health:** no later than 10 days.
- **All other serious incidents:** no later than 15 days after awareness.

EU also has **trend reporting** (Article 88): a statistically significant increase in the frequency or severity of non-serious incidents or expected side effects must be reported, even when each individual event is below the serious-incident bar. This is a real difference from the US model and a common gap for firms new to MDR.

### How to run the reporting process

1. **Single intake.** Every complaint, vigilance contact, service report, and literature hit lands in one process with one awareness-date stamp.
2. **Two parallel reportability assessments**, US and EU, run by trained, named reviewers using a written decision tree.
3. **Document the determination**, report or not, with rationale tied to the definitions above.
4. **File on the correct clock.** Build the deadline from the awareness date, not the date someone got around to reviewing it. The clock does not pause while you investigate.
5. **Supplement** when new information changes the picture (e.g., a "no harm" event later confirmed as a serious injury).
6. **Reconcile** filed reports against complaints and field actions monthly so nothing falls through.

### Common mistakes and inspection patterns

- **Treating "we think it was user error" as non-reportable.** It is still reportable if the device may have contributed. This is one of the most common citations.
- **Starting the clock late.** Awareness is when any employee or agent reasonably should know, not when the file reaches the regulatory team. Service techs and sales reps are "the firm."
- **Underreporting malfunctions.** Malfunction reportability does not need an actual injury, only the likelihood on recurrence.
- **No documented non-report decisions.** Inspectors specifically pull the "closed, no report" complaints and ask to see the rationale.
- **Missing EU trend reports** because each event looked minor.
- **Procedures that do not match Part 803 / Article 87 definitions**, often copied from an old version.

### Interview-ready

> "What is the difference between a complaint and an MDR?"

A complaint is an internal QSR record of any alleged device deficiency. An MDR is a report you submit to FDA when a death, serious injury, or reportable malfunction occurs. Every MDR starts as a complaint, but most complaints are not MDRs. Two records, two clocks, both have to close.

> "Walk me through your reportability decision."

Stamp the awareness date. Ask: death or serious injury, did the device cause or contribute? If yes, 30-day MDR. If no death/injury, did a malfunction occur that would likely cause death or serious injury if it recurred? If yes, reportable malfunction. Run the EU serious-incident test in parallel. Document the decision either way, including non-reportable, with rationale tied to the Part 803 and Article 87 definitions.

> "An event needs immediate action to stop harm. What is your timeline?"

5 working days for the US 5-day report; immediately and no later than 2 days for an EU serious public health threat.

---

## CAPA in the device world

### What it is and why

CAPA under 21 CFR 820.100 is the QSR clause that forces a manufacturer to analyze quality data, identify existing and potential nonconformities, take action, verify the action works, and feed results into management review. The device CAPA concept is the same engine you know from drug GMP, but 820.100 is unusually prescriptive, and CAPA is the single most cited subsystem in FDA device inspections, year after year. The agency's QSIT inspection model treats CAPA as a primary subsystem and inspectors almost always start there.

For the general method, source selection, root cause, effectiveness checks, read [what is a CAPA](/articles/what-is-a-capa) and [CAPA effectiveness verification](/articles/capa-effectiveness-verification). Below is what is device-specific.

### What 820.100 actually requires

The clause has seven explicit requirements. Inspectors check each one:

1. Analyze processes, work operations, concessions, quality audit reports, quality records, service records, complaints, returned product, and other sources to identify existing and potential causes of nonconforming product. **Use appropriate statistical methodology** where necessary to detect recurring problems.
2. Investigate the cause of nonconformities relating to product, processes, and the quality system.
3. Identify the action needed to correct and prevent recurrence.
4. **Verify or validate** the corrective and preventive action to ensure it is effective and does not adversely affect the finished device.
5. Implement and record changes in methods and procedures.
6. Disseminate information about quality problems and nonconforming product to those directly responsible.
7. Submit relevant CAPA information for management review.

Two device-specific traps live in this list. First, item 1's demand for statistical methodology means you must be able to show that your trending actually detects recurrence, not just count complaints. Second, item 4's "verify or validate, and does not adversely affect the finished device" means your effectiveness check must confirm both that the problem is gone and that you did not break something else. A firmware fix that stops one fault and introduces another fails this clause.

### How to run a device CAPA

1. **Source and trigger.** Define the data sources (820.100 item 1) and the thresholds that open a CAPA. Tie complaint trends, MDR rates, audit findings, and nonconformance data to defined triggers so the system is rule-driven, not personality-driven.
2. **Scope and contain.** Define affected product, lots, and markets. Take immediate correction (containment) separate from the long-term corrective action.
3. **Investigate root cause.** Structured technique, evidence-based. Returned-device analysis where possible.
4. **Plan actions.** Correction (fix what is here), corrective action (stop recurrence), preventive action (stop it elsewhere). Each action has an owner and a due date.
5. **Verify/validate effectiveness.** Define the success metric and the data window before you close. Example: "complaint rate for occlusion-alarm failure drops below 0.1 per 1,000 units over 3 months post-deployment, with no new related complaints." Confirm no adverse effect on the device.
6. **Change control.** Route any design or process change through formal [change control](/articles/change-control-validated-systems) and update the [design controls](/articles/design-controls-medical-devices) and risk files.
7. **Close and feed management review.** Document the verification evidence. Report metrics up.

### Acceptance criteria

- Every CAPA has a documented, evidence-based root cause, not a restatement of the symptom.
- Effectiveness is verified against a pre-defined, measurable criterion over a defined period, with objective data, before closure.
- CAPA aging is controlled; an overflowing backlog is itself a finding.
- Statistical trending demonstrably detects recurrence.
- CAPA links to complaints, MDRs, field actions, design changes, and risk file updates are traceable.

### Common mistakes and inspection patterns

- **CAPA closed before effectiveness is demonstrated**, or "effectiveness check" that is just "we trained people, done."
- **Root cause is the symptom restated** ("the alarm failed because the alarm failed").
- **No statistical trending**, so recurrence is invisible until it becomes a field action.
- **CAPA backlog** with chronic overdue items, signaling the system cannot keep up.
- **Containment confused with corrective action**, fixing the units in the field but never preventing the next batch.
- **CAPA that does not update the risk file**, so the same hazard reappears in the next product.

### Interview-ready

> "FDA cites CAPA more than any other device subsystem. Why?"

Because CAPA is where the whole quality system either works or does not. Inspectors use QSIT and start in CAPA because complaint, MDR, audit, and nonconformance data all converge there. Weak root cause, missing effectiveness checks, and backlogs are easy to find and reveal systemic weakness.

> "What does 'verify or validate the CAPA' mean in 820.100?"

Confirm with objective evidence, before closing, that the action actually eliminated the cause and did not adversely affect the finished device. You define a measurable success criterion and a data window up front, then prove it with real data, not by asserting the action was completed.

---

## Recalls and field actions

### What it is and why

When a marketed device is defective or violates the law in a way that could harm health, the manufacturer corrects it in the field (a correction) or removes it from the market (a removal). In FDA terms these are "corrections and removals" under 21 CFR Part 806; "recall" is the common word and is defined in 21 CFR Part 7. In the EU the same activity is a Field Safety Corrective Action (FSCA), communicated to users by a Field Safety Notice (FSN). See [recall management field actions](/articles/recall-management-field-actions) for the cross-product treatment.

A correction fixes the device where it is (a software patch, a labeling update, an inspection, a repair). A removal physically retrieves it. Both can be reportable.

### When you must report (US, Part 806)

A field correction or removal must be reported to FDA when it is initiated to reduce a risk to health posed by the device or to remedy a violation of the FD&C Act that may present a risk to health. The report is due within **10 working days** of initiating the action. If a correction or removal is not reportable (e.g., a market withdrawal for a minor issue with no health risk, or a stock recovery before distribution), you do not file, but Part 806.20 still requires you to keep a record of why it was not reportable. Inspectors read those records.

FDA classifies recalls by severity:

| Class | Meaning |
|---|---|
| Class I | Reasonable probability that use will cause serious adverse health consequences or death |
| Class II | Use may cause temporary or medically reversible adverse health consequences, or probability of serious consequences is remote |
| Class III | Use is not likely to cause adverse health consequences |

### How to run a field action

1. **Health hazard evaluation.** Assess the risk to health from the defect, drawing on the risk file. This drives whether the action is reportable and how urgent it is.
2. **Define scope.** Use UDI, lot, and serial traceability to identify exactly which units are affected and where they went. Distribution records and traceability make or break the action, see [user requirements and traceability](/articles/user-requirements-and-traceability) for the discipline, and UDI above for device identification.
3. **Decide the action.** Correction vs removal, and the urgency.
4. **Notify.** Draft and issue the FSN / recall notice to consignees and users with clear instructions and a response mechanism. Notify FDA within 10 working days (US) and the relevant competent authorities (EU).
5. **Execute and track effectiveness.** Measure response and recovery rates. A recall that recovers 30 percent of units is not effective.
6. **Open a CAPA.** A field action is almost always a CAPA trigger. The field action contains the immediate risk; the CAPA prevents recurrence.
7. **Close out** with documented effectiveness and authority concurrence.

### Acceptance criteria

- Health hazard evaluation is documented and risk-based.
- Affected population is fully identified through traceability, with a credible recovery target.
- Reportability decision (report or not) is documented, including non-reportable rationale per 806.20.
- Effectiveness checks show adequate response/recovery; the action is not closed on a low recovery rate without justification.
- A CAPA is linked.

### Worked example

A diagnostic analyzer ships with a calibration table error that biases one assay's results high. Health hazard evaluation: false-high results could lead to unnecessary treatment; reasonable probability of serious consequence in a subset of patients, so this trends Class I/II. Action: software correction (corrected calibration file) pushed to all installed units, plus an FSN instructing labs to re-run affected samples from a stated date range. FDA notified within 10 working days; EU competent authorities notified and FSN distributed. Effectiveness: confirm the patch is installed on 100 percent of units and obtain lab acknowledgments. CAPA: root-cause the calibration-table release control, fix the verification step that let the bad table ship, and update the design verification protocol.

### Common mistakes

- **Calling a real recall a "field correction" or "stock rotation"** to dodge reporting. FDA tracks this and will reclassify.
- **Poor traceability**, so the manufacturer cannot identify all affected units.
- **No effectiveness check**, or closing the action with a low recovery rate.
- **Non-reportable decisions with no record**, violating 806.20.
- **No linked CAPA**, so the same defect recurs.

---

## Postmarket surveillance and PMCF: the feedback loop

### What it is and why

Postmarket surveillance (PMS) is the proactive, planned, continuous process of collecting and analyzing data on a device once it is on the market, to confirm it stays safe and performs as intended and to catch problems early. Complaints, MDRs, and field actions are reactive. PMS is the system that sits above them and is supposed to be proactive. ISO/TR 20416:2020 describes the PMS process. In the EU, PMS is a legal obligation under MDR Articles 83 to 86, and it is one of the biggest changes the MDR introduced. The US has long had postmarket tools too: FDA can require post-market surveillance studies under Section 522 of the FD&C Act for certain higher-risk devices.

The reason PMS matters: a device is only partly characterized at approval. Real-world use surfaces rare events, off-label use, wear-out, and human-factors failures that no premarket study could find. PMS turns that real-world experience into evidence, and crucially feeds it back into the risk file and the design. That closed loop is the difference between a quality system that learns and one that just files paperwork.

### The EU PMS architecture (MDR)

The MDR built PMS as a documented system with named deliverables:

- **PMS plan (Annex III).** Required for every device. Describes the methods and processes to collect and use postmarket data: complaints, vigilance, trend reporting, literature, registries, similar-device data, and proactive data collection. Defines indicators and thresholds for re-assessing benefit-risk.
- **PMS report (Article 85)** for lower-risk devices (Class I): a summary of PMS results and conclusions, updated as necessary.
- **Periodic Safety Update Report, PSUR (Article 86)** for Class IIa, IIb, and III devices: summarizes PMS data and conclusions, the benefit-risk determination, sales volumes, and the size and characteristics of the user population. Updated at least every two years for Class IIa and at least annually for Class IIb and III. For Class III and implantable devices the PSUR goes through the Notified Body and into EUDAMED.
- **Post-Market Clinical Follow-up, PMCF (Annex XIV Part B).** The clinical arm of PMS: a continuous process to confirm safety and performance and the clinical benefit using clinical data from the marketed device, throughout its expected lifetime. PMCF feeds the clinical evaluation report (CER). When PMCF is not performed, the manufacturer has to justify why.

### How PMS connects everything

The flow, in one sentence: complaints and MDRs and field actions and literature and registry data feed the PMS process; the PMS process analyzes and trends; conclusions update the risk management file and the clinical evaluation; updates to those files feed design changes and CAPA; the loop repeats. If your PMS does not change anything, it is not working.

A practical way to picture it:

```
Complaints  --\
MDR/vigilance --\
Field actions  ---> PMS process (plan, collect, analyze, trend) ---> Risk file (ISO 14971) update
PMCF/clinical --/                                                 ---> Clinical evaluation (CER) update
Literature   --/                                                  ---> Design change / CAPA
Registries  --/                                                          |
                                                                         v
                                                            (benefit-risk re-confirmed or action taken)
```

### How to build a PMS program

1. **Write a PMS plan per device or device family.** Identify data sources, the indicators and thresholds that trigger re-assessment, the methods (including statistical), the responsible roles, and the reporting cadence (PMS report vs PSUR by class).
2. **Set up proactive data collection.** Do not rely only on complaints. Use user surveys, registry data, literature monitoring, similar-device data, and PMCF studies. Proactive is the word the MDR keeps using, and the word inspectors look for.
3. **Define and run PMCF** (or justify its absence) with a PMCF plan and PMCF evaluation report feeding the CER.
4. **Trend and analyze on a schedule**, not just when a complaint spikes. Use defined thresholds.
5. **Feed conclusions back.** Update the risk management file (residual risk, new hazards, benefit-risk), the clinical evaluation, and the design. Open CAPAs where indicated.
6. **Produce the periodic report** (PMS report or PSUR) on the class-driven cadence and route it correctly (Notified Body / EUDAMED for higher-risk classes).

### Acceptance criteria

- A current PMS plan exists for each device/family with defined indicators and thresholds.
- PMS is demonstrably proactive, not just a complaint log re-labeled.
- PSUR / PMS report cadence matches device class and the documents conclude on benefit-risk, not just list numbers.
- PMS conclusions actually update the risk file and CER, with traceable links.
- PMCF is performed or its absence is justified with a documented rationale.

### Common mistakes and inspection patterns

- **PMS plan that is a template with no device-specific indicators or thresholds.** Notified Bodies cite this often under the MDR.
- **Reactive PMS dressed up as proactive**, complaint data summarized once a year and called surveillance.
- **PSUR that lists data but never reaches a benefit-risk conclusion.**
- **PMS that never feeds the risk file or CER**, so the loop is open. This is the classic finding: lots of data collected, nothing fed back.
- **PMCF "not applicable" with no justification.**
- **No defined thresholds**, so there is no objective trigger to escalate.

### Interview-ready

> "What is the difference between vigilance and postmarket surveillance?"

Vigilance is the reactive reporting of serious incidents and field actions to authorities on hard timelines. Postmarket surveillance is the broader, proactive, planned system that continuously gathers and analyzes all postmarket data to confirm the device stays safe and effective. Vigilance is a subset that feeds PMS. PMS is supposed to be proactive; vigilance is event-driven.

> "What is PMCF and when can you skip it?"

Post-Market Clinical Follow-up is the continuous collection and evaluation of clinical data from the marketed device to confirm its safety, performance, and clinical benefit across its lifetime, feeding the clinical evaluation report. You can omit PMCF only when you can document a justification, for example a very well-established, low-risk device with extensive existing clinical evidence. The justification itself is required.

> "Under the MDR, how often is a PSUR updated?"

At least every two years for Class IIa, and at least annually for Class IIb and Class III. For Class III and implantables it is submitted to the Notified Body and into EUDAMED.

> "How does the postmarket loop close?"

Postmarket data (complaints, vigilance, field actions, PMCF, literature) feeds the PMS process; analysis and trending update the ISO 14971 risk management file and the clinical evaluation; those updates drive design changes and CAPA; benefit-risk is re-confirmed. If nothing changes, the loop is broken.

---

## How device postmarket differs from pharma (the part interviewers probe)

If you come from drug GMP, internalize these differences:

- **The reporting clocks are device-specific.** 30-day and 5-day MDRs (Part 803); 2, 10, and 15-day EU vigilance (Article 87). Pharma adverse-event reporting runs on different rules entirely.
- **Malfunction reporting without injury.** Devices require reporting of malfunctions that could cause harm on recurrence, even with no actual injury. This has no clean drug analog.
- **The risk file is live and central.** ISO 14971 risk management is the connective tissue of the whole postmarket loop, and it must be updated by postmarket data. In pharma, risk management is present but the device dependency on a living risk file is tighter.
- **Field actions are reportable on their own clock** (Part 806, 10 working days; EU FSCA).
- **PMS and PMCF are proactive obligations**, not just trend reports. The MDR raised this bar sharply.
- **CAPA is the inspection epicenter.** FDA's QSIT model makes CAPA the primary device subsystem; inspectors start there.

---

## Roles and responsibilities

| Role | Responsibility |
|---|---|
| Complaint handling unit / intake | Capture every complaint on the awareness date, log, classify, route. Often the first human in the loop. |
| Regulatory affairs / reporting specialist | Make and document MDR and vigilance reportability decisions, file eMDRs and serious-incident reports on the clock, submit baseline/supplemental reports. |
| Quality engineering / SME | Lead complaint and CAPA investigations, returned-device analysis, root cause, effectiveness checks. |
| CAPA owner | Drive the CAPA to closure, own actions and due dates, ensure effectiveness is proven before closing. |
| Risk management owner | Update the ISO 14971 risk file with postmarket data; re-assess benefit-risk. |
| PMS / postmarket surveillance lead | Own the PMS plan, run proactive surveillance, produce PMS reports and PSURs, drive PMCF. |
| Clinical / medical affairs | Run PMCF, update the clinical evaluation report. |
| QA management | Provide CAPA and complaint data to management review; ensure the system is resourced and the loop closes. |
| EU Authorized Representative | Represent a non-EU manufacturer to EU authorities for vigilance and PMS. |
| Person Responsible for Regulatory Compliance (PRRC, MDR Art. 15) | Ensure vigilance and PMS obligations are met for EU-placed devices. |
| Notified Body | Reviews PSURs (higher-risk classes), audits the PMS system, oversees the manufacturer's postmarket compliance. |

For the broader role map see [GxP roles and responsibilities](/articles/gxp-roles-responsibilities).

---

## Practical tips

- **One front door, one awareness date.** Funnel service reports, sales contacts, social media, and literature into the same intake so the reporting clock starts correctly and nothing hides in a separate system.
- **Document every non-report.** The "we decided not to report" decisions are exactly what inspectors pull. Write the rationale against the regulatory definition every time.
- **Make trending statistical and threshold-driven.** "We review complaints monthly" is not trending. Define rates, thresholds, and what happens when they trip.
- **Prove CAPA effectiveness with data and a defined window**, not a training record. Define the success metric before you start.
- **Keep the risk file alive.** After every meaningful complaint, CAPA, or field action, ask: does this change the risk file or the benefit-risk? If yes, update it.
- **Use UDI for traceability before you need it.** When a field action hits, clean UDI/lot/serial linkage is what lets you scope it in hours instead of weeks.
- **Map your procedures to the current regulation text.** With the QMSR taking effect February 2026, confirm your QSR-referenced SOPs are being updated to the ISO 13485 framing, and that Part 803 and 806 definitions in your procedures are current.

---

## Related reading

- [Design controls for medical devices](/articles/design-controls-medical-devices)
- [ISO 14971 risk management for devices](/articles/iso-14971-risk-management-devices)
- [EU MDR and IVDR overview](/articles/eu-mdr-ivdr-overview)
- [Medical device quality system (QMSR)](/articles/medical-device-quality-system-qmsr)
- [Device submission pathways (510(k) and PMA)](/articles/device-submission-pathways-510k-pma)
- [Unique device identification (UDI)](/articles/unique-device-identification-udi)
- [Recall management and field actions](/articles/recall-management-field-actions)
- [What is a CAPA](/articles/what-is-a-capa)
- [CAPA effectiveness verification](/articles/capa-effectiveness-verification)
- [Product complaint handling](/articles/product-complaint-handling)
- [Root cause analysis techniques](/articles/root-cause-analysis-techniques)
- [Device software cybersecurity and SaMD](/articles/device-software-cybersecurity-samd)
