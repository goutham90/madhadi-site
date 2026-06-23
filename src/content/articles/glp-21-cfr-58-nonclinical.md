---
title: "Good Laboratory Practice (21 CFR 58) for Nonclinical Safety Studies"
description: "How 21 CFR Part 58 and OECD GLP principles govern nonclinical safety studies through the study director, the study plan and final report, an independent Quality Assurance Unit, archiving, and computerized-system data integrity."
pubDate: 2026-06-20
tags: ["GLP", "21 CFR 58", "nonclinical safety", "OECD GLP", "data integrity", "quality assurance unit", "study director", "21 CFR Part 11"]
pillar: "clinical-gcp"
tier: "Intermediate"
---

People who work in pharmaceutical quality tend to collapse the three "good practice" regimes into one blurry idea of compliance. They are not the same. GMP (21 CFR 210/211) governs how you make a drug. GCP (ICH E6) governs how you study it in humans. GLP, 21 CFR Part 58 in the United States, and the OECD Principles of Good Laboratory Practice internationally, governs the nonclinical safety studies that decide whether a molecule is safe enough to put into humans at all. Toxicology, safety pharmacology, genotoxicity, carcinogenicity, the studies that fill the nonclinical sections of an IND or a marketing application: GLP is the rulebook for those. This is true across modalities. A small-molecule oral drug, a monoclonal antibody, a vaccine, a cell or gene therapy, and a combination product all reach the same gate: before a human takes a dose, a regulator has to be persuaded the nonclinical safety package is reliable, and GLP is the standard that makes those records reliable.

The distinction matters because GLP is built around a problem the other two don't have in the same form. A GLP safety study is a one-shot scientific experiment whose result, "no adverse effect at this dose", is taken on trust by a regulator who was not in the room. Years later that result becomes the safety justification for dosing humans. So GLP is engineered backward from a single question: **could an inspector, given only your records, reconstruct exactly what was done, by whom, to which animals, with what test article, and conclude that the reported result is what actually happened?** That property, full reconstructability from the archive, is the spine of the whole regulation. Everything in this article hangs off it.

This article walks the full lifecycle of a GLP study the way an inspector reads it: scope, the study director, the protocol and final report, the Quality Assurance Unit, the archive, and computerized-system data integrity. For each piece you get the regulatory basis, what actually goes in it, how to do it step by step, what "done correctly" looks like, a worked example, who owns it, the findings inspectors write up, and the questions you will be asked in an interview or an audit.

## What GLP covers, and what it deliberately does not

GLP applies to *nonclinical laboratory studies*, studies in test systems (animals, plants, microorganisms, or sub-parts thereof) conducted to evaluate the safety of regulated articles. The scope is defined in **21 CFR 58.1 and 58.3**. It is a safety regulation, not a science-quality regulation. This is one of the most misunderstood points in the field.

GLP does **not** apply to:

- **Basic exploratory or discovery research** done to characterize physical/chemical properties or screen for activity. Dose-ranging and early pharmacology screens generally fall outside GLP.
- **Efficacy / pharmacodynamic studies** intended to show that a drug works. Those are excluded by scope; safety is the trigger.
- **Clinical studies** in humans, those are GCP.
- **Manufacturing and analytical release** of the drug substance, that is GMP.

A frequent failure mode is teams either over-applying GLP to discovery work (wasting effort) or under-applying it to a study that turns out to be a central safety study supporting first-in-human dosing. The decision rule is the study's *purpose*: if the result will be submitted to a regulatory authority to support the safety of a product, it should be run under GLP. The FDA's bioresearch monitoring (BIMO) program inspects these studies, and a finding that a central tox study was *not* run under GLP can invalidate it.

### A quick decision aid

Use this table when someone asks "does this study need to be GLP?" The trigger is the regulatory use of the result, not the science being interesting.

| Study | Purpose | GLP? | Why |
|---|---|---|---|
| Single-dose and repeat-dose toxicology supporting first-in-human | Safety, submitted in IND | Yes | Central safety study; result is the basis for dosing humans |
| Safety pharmacology core battery (cardiovascular, CNS, respiratory) | Safety, submitted | Yes | Defines acute physiological risk before dosing |
| Genotoxicity battery (Ames, in vitro micronucleus, in vivo) | Safety, submitted | Yes | Mutagenic/clastogenic risk, regulatory expectation |
| Carcinogenicity (2-year rodent or equivalent) | Safety, marketing application | Yes | Long-term safety, retained for the life of the product |
| In vitro target screen / high-throughput hit finding | Discovery | No | Not submitted as safety; not yet GLP-scoped |
| Pharmacokinetic profiling to set doses | Often supportive | Case by case | GLP if it underpins the safety interpretation and is submitted |
| Efficacy model in disease animals | Show it works | No | Efficacy is out of GLP scope |

A useful tie-breaker: when in doubt on a study that *could* end up in a submission, run it GLP or at minimum design it so it can be reconstructed to GLP standards. It is far cheaper to apply GLP discipline up front than to repeat a pivotal animal study because the original was not GLP-compliant.

The international counterpart is the **OECD Principles of Good Laboratory Practice** (OECD Series on Principles of GLP and Compliance Monitoring, No. 1). The two systems are deliberately harmonized in structure and intent, same study director model, same QA function, same archiving discipline, so that a study run in an OECD member country can be accepted across borders under the OECD Mutual Acceptance of Data (MAD) framework. Where this article cites a 21 CFR 58 subpart, the OECD principles carry an equivalent requirement; the differences are mostly in terminology (OECD speaks of the "test facility" and "sponsor" with slightly different role boundaries) rather than substance. One structural difference worth knowing: OECD adds a formal role, the **Study Director's counterpart at multi-site studies, the Principal Investigator**, who runs a defined phase at a test site under the overall study director. US Part 58 historically did not name the principal investigator role, though FDA recognizes multi-site conduct in practice.

## The study director: one person, total scientific responsibility

The single most important structural feature of GLP, the one that distinguishes it most sharply from GMP, is the **study director**, defined in **21 CFR 58.33**. GMP distributes responsibility across a quality unit, production, and a chain of approvals. GLP concentrates the scientific conduct of a study in one named individual.

There is exactly **one** study director per study. That person has overall responsibility for the technical conduct of the study and for the interpretation, analysis, documentation, and reporting of results. Concretely, 58.33 makes the study director the single point of control for:

- Ensuring the **study plan / protocol** and any amendments are approved and followed.
- Ensuring all experimental data, including unanticipated responses of the test system, are accurately recorded and verified.
- Ensuring deviations from the protocol and standard operating procedures (SOPs) are documented, acknowledged, and their impact on the study assessed.
- Ensuring the test systems are as specified in the protocol.
- Ensuring **GLP regulations are followed**, and that all raw data, documentation, protocols, specimens, and final reports are transferred to the **archives** when the study ends.

This concentration of authority is the point. When an inspector wants to know why a sick animal was kept on study, or why a dose was changed, the answer is not "the team decided", it is a decision the study director owned and documented. If the study director changes mid-study (people leave, get reassigned), the change must be documented in the study record, with the new director formally taking responsibility from a defined date. Inspectors look hard at study-director transitions; an undocumented gap in responsibility is a classic finding.

The OECD principles articulate the same role and add an explicit phrase that captures its spirit: the study director is the "single point of study control." If you remember one thing about GLP versus GMP, remember that GLP personalizes scientific accountability in a way GMP does not.

### Roles and responsibilities across the whole study

The study director sits inside a defined cast. GLP is unusually explicit about who owns what, and inspectors test whether the org chart on paper matches who actually made decisions.

| Role | Regulatory basis | Owns |
|---|---|---|
| **Test facility management** | 21 CFR 58.31 | Appoints the study director, ensures a QAU exists, provides resources/facilities/personnel, ensures deviations are communicated, ensures corrective actions happen, approves SOPs |
| **Study director** | 21 CFR 58.33 | Single point of scientific control: protocol, conduct, data, interpretation, final report, archive transfer |
| **Principal investigator** (multi-site, OECD term) | OECD No. 1 | Conduct of a delegated phase at a test site, on behalf of the study director |
| **Quality Assurance Unit (QAU)** | 21 CFR 58.35 | Independent verification: master schedule, protocol/SOP copies, phase inspections, report audit, QA statement |
| **Study personnel / technicians** | 21 CFR 58.29 | Execute the protocol and SOPs, record raw data contemporaneously, report problems and unanticipated responses |
| **Archivist** | 21 CFR 58.190 | Controlled storage, access logging, chain of custody, retrieval |
| **Sponsor** | Throughout | Defines the regulatory purpose, may be the same legal entity as the test facility or a separate contracted lab |

The line inspectors probe hardest is between **management** (58.31) and the **study director** (58.33). Management cannot offload its duties onto the study director and walk away. If a study runs short of qualified staff or the QAU is starved of resources, that is a management finding, not a study-director finding. Conversely, management cannot reach into a study and overrule the study director's scientific interpretation; that would defeat the single-point-of-control design.

## The study plan and the final report: the two anchor documents

A GLP study is bracketed by two controlling documents. Everything in between must trace cleanly from one to the other.

**The study plan (protocol)**, **21 CFR 58.120**, is written and approved *before* the study starts. It defines the objective, the test and control articles, the test system, the number and sex of animals, dose levels and route, the experimental design including bias-control methods, the types of data to be collected, the statistical methods, and the records to be maintained. Critically, it must be **signed and dated by the study director** before the work begins, and any change after that point is a formal **protocol amendment**, signed, dated, and reasoned. You cannot quietly revise the design after seeing the data; that is the integrity firewall.

### What 58.120 actually requires the protocol to contain

The protocol is not free-form. 58.120 lists the elements, and a missing element is a documentation finding even if the science was sound. The required contents:

| Protocol element (21 CFR 58.120) | What good looks like |
|---|---|
| Descriptive title and statement of purpose | One clear safety objective, not a fishing expedition |
| Identification of test and control articles by name, code, or CAS number | Unambiguous, traceable to the characterized batch |
| Name of the sponsor and the test facility | Both named, with addresses |
| Number, body weight range, sex, source, species, strain, age of the test system | Specific enough to confirm at receipt |
| Procedure for identification of the test system | How each animal is individually tracked (ear tag, tattoo, cage card, microchip) |
| Experimental design including bias-control methods | Randomization and, where relevant, blinding described |
| Description of diet, solvents, emulsifiers, other materials | Anything the test system is exposed to |
| Route of administration and reason for its choice | Tied to the intended clinical route where feasible |
| Each dosage level, expressed in mg/kg or other units, and the method/frequency | Numeric, with the dosing schedule |
| The type and frequency of tests, analyses, and measurements | The data plan |
| Records to be maintained | What raw data will exist |
| Date of approval of the protocol by the sponsor, and the dated signature of the study director | Before any in-life work begins |
| Statistical methods to be used | Pre-specified, not chosen after seeing the data |

**The final report**, **21 CFR 58.185**, is the controlled scientific output. It must describe the methods, the results, the study director's interpretation, and the locations where raw data and specimens are archived. The required contents under 58.185 mirror the protocol and add the outcome elements: name and address of the facility, study dates, objectives and procedures as actually performed, statistical methods, the test and control article characterization, a description of the methods, all circumstances that may have affected the data, the study director's signed interpretation, and the dated QA statement. Two requirements on the final report are inspection favorites:

1. It must be **signed and dated by the study director**, who thereby takes personal responsibility for the conclusions.
2. It must include a **signed and dated Quality Assurance Unit statement** specifying the dates inspections were made and the dates findings were reported to management and to the study director (this comes from 58.35, described below).

A corrected or amended final report can only be issued as a formal **amendment**, signed by the study director, identifying the change and the reason. You do not reissue a clean copy; the amendment trail stays visible. The acceptance criterion an inspector applies is blunt: do the conclusions in the final report follow from the raw data in the archive, with every deviation between protocol and conduct accounted for? If a number in the report cannot be traced to a record, the report is not reliable, and a single unexplained discrepancy can cascade into a data-integrity finding.

### Worked example: a protocol amendment versus a deviation

People confuse these two, and inspectors notice. The distinction:

- An **amendment** is a *planned, prospective* change to the protocol. The design will be different going forward. Example: the sponsor decides to add a recovery group, or the high dose is lowered before dosing starts because of an unexpected finding in a dose-range finder. You write it, the study director signs and dates it, and conduct follows the new instruction.
- A **deviation** is an *unplanned departure* from the protocol or an SOP that already happened. Example: a single dose was administered two hours late because of an equipment fault. You document what happened, when, who, the root cause, and the study director's assessment of impact on the study integrity and the data.

Sample deviation record:

| Field | Entry |
|---|---|
| Deviation ID | DEV-014 |
| Study | TX-2026-031, 28-day repeat-dose rat toxicology |
| Date of event | 2026-04-12 |
| Description | Group 3 (mid-dose) afternoon dose administered at 16:45 instead of the scheduled 14:00 window |
| Cause | Dosing pump failure; replacement pump retrieved and qualified |
| Affected data | Day-7 dosing record, Group 3 animals 31-40 |
| Impact assessment | Single delayed dose, well within the 24h dosing interval; no effect on PK or toxicology endpoints |
| Study director assessment | No impact on study integrity or interpretation |
| Study director signature / date | [signed] 2026-04-13 |
| Reported to QAU | 2026-04-13 |

The acceptance criterion: every deviation in the study file has a documented impact assessment signed by the study director, and the final report's "circumstances that may have affected the data" section reconciles to the deviation log. A deviation log with open, unassessed items at report finalization is a finding.

## The Quality Assurance Unit: independent, by design

GLP requires every test facility to have a **Quality Assurance Unit (QAU)**, **21 CFR 58.35**, and the defining feature is independence. The QAU must be **entirely separate from and independent of the personnel engaged in the direction and conduct of the study**. The people who run a study cannot audit their own study; that is the entire reason the function exists.

The QAU's mandate under 58.35 is specific:

| QAU responsibility (21 CFR 58.35) | What it means in practice |
|---|---|
| Maintain a **master schedule sheet** of all studies | A facility-wide index: test article, test system, study director, start/end dates, status. The first thing an inspector asks for. |
| Maintain copies of all **protocols** and SOPs | The QAU holds the controlled record of approved designs. |
| **Inspect each study** at intervals adequate to assure integrity, and record findings | Phase inspections: protocol review, critical in-life phases (e.g., dosing, necropsy), data audit, report audit. |
| Report problems to **study director and management** | Findings go up to management and across to the study director, both, in writing. |
| Review the **final report** to assure it accurately reflects raw data | The report audit: numbers in the report are traced back to source records. |
| Prepare and sign the **QA statement** in the final report | The signed attestation listing inspection dates and reporting dates. |

### How a QAU actually inspects a study, step by step

The 58.35 list is the *what*. Here is the *how* a QAU runs across a typical repeat-dose toxicology study:

1. **Protocol review.** Before the study starts, the QAU reviews the signed protocol against the SOP for protocol content and confirms all 58.120 elements are present and the study is on the master schedule.
2. **Critical-phase in-life inspections.** The QAU schedules and performs inspections of the phases where errors do the most damage and cannot be redone: first day of dosing, dose preparation and verification, clinical observations, terminal procedures (necropsy), and tissue collection. These are observed live and documented.
3. **Process-based inspections.** For routine, high-volume facilities, the QAU may inspect processes (for example, "all dosing across active studies this week") rather than every study, which OECD explicitly permits, provided each study still gets adequate coverage.
4. **Data audit.** Near report time, the QAU traces a sample of reported values back to raw data: body weights, food consumption, clinical chemistry, histopathology findings. The sample is risk-weighted toward the endpoints that drive the conclusion.
5. **Report audit.** The QAU verifies that every table, figure, and conclusion in the draft final report reconciles to raw data and that the deviation log is fully reflected.
6. **QA statement.** The QAU drafts, signs, and dates the QA statement listing the dates each inspection was performed and the dates findings were reported to the study director and management.

Sample QA statement content (the report-level attestation):

> This study was inspected by the Quality Assurance Unit and findings reported to the Study Director and to management on the dates below. Protocol review: 2026-03-02. In-life dosing inspection: 2026-03-16. Necropsy inspection: 2026-04-14. Data audit: 2026-05-10. Draft report audit: 2026-05-28. Reported to Study Director and management: as dated above. [QAU signature, date]

One nuance that trips people up: **58.35(c) limits FDA access to the QAU's detailed inspection findings.** Inspectors may verify that a QAU *exists and is performing its function* and may review the master schedule, written QAU procedures, and the dates of inspections, but the detailed *findings* of individual QAU inspections are generally not subject to routine FDA copying. The intent is to keep the QAU as a candid internal-audit function rather than a self-incrimination engine. In practice, inspectors confirm the QAU is real and active and then test it indirectly: if the QAU was doing its job, the studies it audited should be clean.

Where the OECD principles differ slightly is structural: OECD describes a "Quality Assurance Programme" and ties QA personnel designation to facility management. The independence requirement is identical in substance. For the broader internal-audit discipline behind this function, see [internal audit programs](/articles/internal-audit-program) and [audit finding classification](/articles/audit-finding-classification).

## Archiving: where reconstructability lives or dies

If reconstructability is the spine of GLP, the **archive** is the vertebra everything attaches to. **21 CFR 58.190 and 58.195** govern storage and retention of records and specimens, and this is where many otherwise-good facilities fail an inspection.

The requirements:

- **All raw data, documentation, protocols, final reports, and specimens** generated as a result of a study must be **retained**. Raw data means the original records, the actual worksheet, the instrument printout, the first-capture electronic file, not a transcribed summary.
- Records and specimens must be stored in an **archive** designed for orderly storage and **expedient retrieval**, with **controlled access** (58.190).
- An **archivist** must be designated; access is limited to authorized personnel and is logged. People take material in and out against a record, so chain of custody is intact.
- The archive must be protected against **deterioration** (and, in practice, against fire, flood, and environmental damage, frozen specimens need monitored storage; paper needs a stable environment).
- **Retention periods** under 58.195 are tied to the regulatory fate of the article. The regulation sets three periods: 2 years after an application is approved; 5 years after results are submitted to FDA in support of an application that is not approved; and 2 years after the study is completed or terminated where the results are not submitted at all. Specimens of negligible value, such as wet tissues that have been examined, need only be kept as long as they support the evaluation. The practical rule facilities use is to keep GLP records for the longest applicable period and never destroy on assumption.

The acceptance criterion for archiving is again reconstructability under access control: can an authorized person retrieve a specific study's complete record set, raw data, protocol, deviations, final report, and specimens, quickly, and prove that no one could have altered it in storage? An archive that amounts to a locked cabinet someone has a key to, with no access log, fails on the controlled-access and retrievability tests even if all the paper is physically present.

### What goes in the archive, and how to prove chain of custody

A complete study archive package typically holds: the signed protocol and all amendments; the deviation log; all raw data (in-life observation sheets, dosing records, body weights, food consumption, clinical pathology, instrument output); the test and control article characterization and reserve sample records; the histopathology slides, blocks, and wet tissues; the QAU records and signed QA statement; and the signed final report and any report amendments. A sample archive access log entry:

| Date | Study | Material | Action | Person | Authorized by | Returned |
|---|---|---|---|---|---|---|
| 2026-06-02 | TX-2026-031 | Histo slides, box 4 | Check-out | Pathologist | Archivist | 2026-06-03 |
| 2026-06-09 | TX-2026-031 | Raw clin-chem worksheets | View in archive | QAU | Archivist | n/a (in-room) |

For the electronic side of archiving and what counts as the original record, see [static and dynamic records and true copies](/articles/static-dynamic-records-true-copies) and [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation).

## Computerized systems and data integrity under GLP

When 21 CFR Part 58 was written, "raw data" meant paper and instrument tape. Today nearly all GLP raw data is electronic, LIMS, electronic lab notebooks, chromatography data systems, instrument software, and the integrity expectations have been mapped onto **21 CFR Part 11** (Electronic Records; Electronic Signatures) and, for thinking about controls, the **OECD guidance on the application of GLP principles to computerised systems** (OECD No. 17). This is the most active inspection area in modern GLP.

The governing framework is **ALCOA+**: data must be **A**ttributable, **L**egible, **C**ontemporaneous, **O**riginal, and **A**ccurate, plus **C**omplete, **C**onsistent, **E**nduring, and **A**vailable. Mapped onto a GLP computerized system, that means:

- **Attributable.** Every record is tied to the individual who created or changed it. Unique user accounts, no shared logins, no generic "lab admin" account doing data entry. Part 11 electronic signatures (§11.50, §11.70) must be linked to their records so they cannot be excised or copied to falsify.
- **Contemporaneous and Original.** The system captures data at the moment of the event, and the *first electronic capture is the raw data*. A printed chromatogram is not the raw data if the underlying electronic file with its integration parameters still exists; that electronic file must be retained and is what the inspector wants.
- **Audit trail (§11.10(e)).** The system must keep a **secure, computer-generated, time-stamped audit trail** that records the operator, the action, the old and new values, and the reason for any change, and that audit trail must be retained for the record's lifetime and be reviewable. Audit trail records must not obscure previously recorded information. The modern inspection move is **audit-trail review**: inspectors look not just at whether an audit trail exists but at whether someone actually reviews it as part of releasing data. An unreviewed audit trail is treated as no audit trail.
- **Access controls and segregation of duties (§11.10(d), (g)).** Authority checks limit who can create, modify, approve, and delete. Crucially, the people generating data should not be able to delete it or alter the audit trail. Disabling, reconfiguring, or having a back door to the audit trail is a cardinal data-integrity finding.
- **Validation (§11.10(a)).** Computerized systems used in GLP studies must be **validated** to demonstrate they do what they are supposed to do, consistently. The industry reference for *how* to do this is **GAMP 5** (ISPE's risk-based computerized system validation framework, second edition published 2022). GAMP 5 contributes the risk-based, category-driven approach, you validate proportionate to risk and to whether the system is configured or custom, and the V-model linking user requirements to verification.
- **Backup, recovery, and the electronic archive.** Electronic raw data must be backed up, recoverable, and archived for the same retention periods as paper, in a form that stays readable as software changes. "We retained the records but can no longer open them" fails the *enduring* and *available* legs of ALCOA+.

The classic GLP computerized-system failure modes inspectors hunt for are familiar across the data-integrity world: shared logins that break attributability; system clocks that can be changed by analysts (defeating *contemporaneous*); audit trails that were turned off, never reviewed, or configurable by the user; "testing" or "trial" injections quietly discarded before the official run; and orphan data, results that exist in the instrument but never made it into the reported record. Any one of these undermines the central GLP claim that the report reflects what happened.

For the underlying frameworks behind this section, see [ALCOA+ in detail](/articles/alcoa-plus-deep-dive), [data integrity foundations](/articles/data-integrity-foundations), [the GAMP 5 CSV framework](/articles/gamp5-csv-framework), [audit trail design and review](/articles/audit-trail-design-and-review), and [time stamps and system clock control](/articles/time-stamps-and-system-clock-control). Chromatography systems, the single most inspected GLP instrument class, get their own treatment in [chromatography data system integrity](/articles/chromatography-data-system-integrity).

## What makes a study GLP-reconstructable

Pulling the threads together, a study is *GLP-reconstructable* when an independent person, working only from the archive, could rebuild the entire study and arrive at the same conclusion. That requires every one of the following to hold:

| Element | Reconstructability test it satisfies |
|---|---|
| Signed, dated **study plan** + all amendments (58.120) | The intended design is fixed and timestamped *before* data exist. |
| Named **study director** with documented responsibility throughout (58.33) | One accountable owner; every decision traceable to a person. |
| **Raw data** retained, original first capture, paper or electronic (58.190) | Reported numbers trace to source; nothing is summary-only. |
| Documented **deviations** from protocol and SOPs, with impact assessed | The gap between plan and conduct is fully explained. |
| Independent **QAU** records and signed QA statement (58.35) | A separate function verified integrity at defined points. |
| **Audit trails** + access control on computerized systems (Part 11) | Electronic changes are attributable, reasoned, and reviewable. |
| **Controlled, retrievable archive** with chain of custody (58.190/195) | The record set is complete, intact, and provably unaltered. |
| Signed, dated **final report** tied to the raw data (58.185) | The conclusion is owned and follows from the evidence. |

When an FDA BIMO inspector or an OECD monitoring authority arrives, this is essentially the checklist they run, working backward from the final report into the archive. They will pull the master schedule, pick a study, and trace a reported result down to its raw data, checking deviations, QAU touchpoints, and, increasingly, the electronic audit trail on the way. If every link holds, the study is reliable and the safety conclusion stands. If one link is broken and unexplained, the reliability of the whole study is in question, because the inspector can no longer be sure the report reflects reality.

### How a BIMO / OECD inspection of a GLP facility runs

Knowing the inspection flow lets you prepare the right records. A typical GLP facility inspection:

1. **Open with the master schedule.** The inspector reviews all studies, ongoing and completed, and selects one or more to trace. The master schedule has to be current and complete; gaps suggest studies were run off the books.
2. **Confirm the QAU is real.** SOPs, organization, independence from study conduct, evidence of inspections and a master schedule it maintains. Inspectors confirm the function exists without copying detailed findings (58.35(c)).
3. **Walk the facility.** Animal rooms, dose-prep areas, instrument rooms, the archive. They check segregation, environmental controls, and that the archive has controlled access and a designated archivist.
4. **Trace the selected study end-to-end.** Protocol and amendments, training records of personnel, raw data for key endpoints, deviation log, QAU touchpoints, electronic audit trails, the final report, and the archive package.
5. **Pull on a thread.** They pick a reported number, say a key clinical-chemistry mean that supports the no-observed-adverse-effect level, and trace it to the instrument raw data, the audit trail, and the calculation. If it reconciles cleanly, confidence rises. If not, the inspection widens.
6. **Close-out.** Findings are issued. In the US, observations come on a Form 483; the facility responds in writing with corrections and a CAPA plan.

For how to handle the inspection itself, see [FDA inspection readiness](/articles/fda-inspection-readiness), [managing a live inspection](/articles/managing-a-live-inspection), and [483 and warning letter response strategy](/articles/483-warning-letter-response).

## Common findings and how they get written up

These are the patterns inspectors document across GLP facilities, described generically. Each maps to a part of the chain of trust.

- **Raw data not contemporaneous.** Observations recorded later from memory or transcribed from scrap paper that was then discarded. Defeats *contemporaneous* and *original*. Record at the bench, on the controlled form, at the time.
- **Protocol changes made without amendments.** The design quietly drifted and the final report describes what was actually done, but there is no signed, dated amendment showing the change was made prospectively. Looks like data-driven design changes, which is the integrity firewall failing.
- **Open or unassessed deviations at report finalization.** The study director signed the final report while the deviation log still had items with no impact assessment.
- **QAU not independent.** A QAU member also performed study tasks, or the QAU reports to the same person who runs the studies, so its findings can be suppressed.
- **Study-director transition undocumented.** A gap where no one was formally the study director, or a change with no dated handover.
- **Archive without controlled access or retrieval.** Records present but no access log, no designated archivist, or retrieval that takes days because nothing is indexed.
- **Audit trail disabled or never reviewed.** The computerized system could keep an audit trail but it was switched off, or it runs but no one reviews it before releasing data.
- **Shared logins on data systems.** Attributability broken; you cannot prove who created or changed a record.
- **Test article not properly characterized.** The identity, strength, purity, and stability of the test and control articles were not documented, so you cannot prove the animals received what the report says they received. This is the equivalent failure at the front of the study, and it is a recurring finding.

A practical way to remember the categories: front of the study (test article characterization, protocol), middle (contemporaneous raw data, deviations, QAU oversight), and back (final report, archive, retention). Inspectors find failures at all three ends, and the data-integrity findings cut across the whole timeline. See [data integrity foundations](/articles/data-integrity-foundations) and [good documentation practices](/articles/good-documentation-practices) for the underlying habits that prevent most of these.

## Interview and inspection questions you should be able to answer

If you work in or around GLP, these come up in interviews and in front of inspectors. Short, correct answers.

**What is the difference between GLP, GMP, and GCP?**
GMP (21 CFR 210/211) governs manufacture. GCP (ICH E6) governs human clinical trials. GLP (21 CFR Part 58, OECD principles) governs nonclinical safety studies that support the safety of a regulated product. GLP is triggered by the safety purpose of the study, not by the science being rigorous.

**Does every animal study need to be GLP?**
No. GLP applies to nonclinical *safety* studies whose results will be submitted to a regulatory authority to support a product's safety. Discovery screens, dose-range finders that are not submitted, and efficacy studies are typically outside GLP scope. The tie-breaker: if it could end up as a pivotal safety study, run it GLP.

**Who is the study director and what makes the role unusual?**
The single individual with overall responsibility for the technical conduct, interpretation, and reporting of one study (58.33). It is the single point of study control. Unlike GMP, GLP concentrates scientific accountability in one named person. There is exactly one per study, and any transition must be documented.

**What is the difference between a protocol amendment and a deviation?**
An amendment is a planned, prospective change to the protocol, signed and dated by the study director before the changed work is done. A deviation is an unplanned departure that already happened, documented after the fact with a study-director impact assessment. Confusing the two, or making a design change without an amendment, is a common finding.

**Why does the QAU have to be independent, and what can FDA see of its records?**
Independence (58.35) prevents people from auditing their own work. The QAU maintains the master schedule, holds protocol and SOP copies, inspects studies at defined phases, audits the final report, and signs the QA statement. Under 58.35(c), FDA can confirm the QAU exists and is functioning, including reviewing the master schedule and inspection *dates*, but the detailed inspection *findings* are generally not subject to routine copying.

**What counts as raw data, and why does it matter for electronic systems?**
Raw data is the original first capture: the actual worksheet, instrument printout, or first electronic file, not a transcribed summary. For computerized systems, the first electronic capture (for example, the chromatography data file with its integration parameters) is the raw data, not the printout. It must be retained, audit-trailed, and readable for the full retention period.

**What is ALCOA+ and how does it apply to a GLP study?**
Attributable, Legible, Contemporaneous, Original, Accurate, plus Complete, Consistent, Enduring, Available. In GLP it means unique logins (attributable), recording at the bench at the time (contemporaneous), retaining the first electronic capture (original), a reviewed audit trail (accurate, complete), and an archive that stays readable (enduring, available).

**What is the single property GLP is engineered to guarantee?**
Reconstructability. An independent person, working only from the archive, should be able to rebuild the study and reach the same conclusion. Every requirement, study director, signed protocol, QAU, audit trail, controlled archive, exists to make that possible.

**How are GLP records retained, and for how long?**
All raw data, protocols, specimens, and final reports go to a controlled-access archive with a designated archivist and access logging (58.190). Retention under 58.195 is tied to the regulatory fate: 2 years after an application is approved, 5 years after results are submitted in support of an application that is not approved, and 2 years after completion if results are never submitted, with specific handling for specimens of negligible value. The safe rule is to keep for the longest applicable period.

For broader interview preparation across GxP, see [GxP quality interview preparation](/articles/gxp-quality-interview-preparation) and the roles overview in [GxP roles and responsibilities](/articles/gxp-roles-responsibilities).

## Why the GLP/GMP/GCP distinction is worth keeping straight

A practitioner who internalizes the differences makes better decisions about which controls to apply. GMP optimizes for *reproducible manufacture*: batch records, release testing, change control on a process you will run many times. GCP optimizes for *subject protection and credible clinical data*: informed consent, IRB oversight, source-data verification at investigator sites. GLP optimizes for *the defensibility of a single safety experiment*: one study director, one fixed protocol, an independent QAU, and an archive built so the experiment can be reconstructed years later.

They share a common ancestor, ALCOA+ data integrity runs through all three, and Part 11 governs electronic records across all of them, but they are tuned for different risks. Treating a central toxicology study like a discovery screen, or auditing it with a GMP batch-record mindset, misses what GLP is actually protecting: the chain of trust that lets a regulator accept "safe enough for humans" from records alone. That chain is reconstructability, and 21 CFR 58 together with the OECD principles is the engineering specification for building it.

For how these regimes connect across the product lifecycle, see [the GxP systems overview](/articles/gxp-systems-overview), the clinical handoff in [ICH E6 Good Clinical Practice](/articles/ich-e6-good-clinical-practice), and the submission context in [IND, NDA, and BLA pathways](/articles/ind-nda-bla-pathways).

---

**Primary sources**

- 21 CFR Part 58, Good Laboratory Practice for Nonclinical Laboratory Studies (U.S. FDA). Key sections: §58.1/58.3 (scope/definitions), §58.31 (testing facility management), §58.33 (study director), §58.35 (Quality Assurance Unit), §58.120 (protocol/study plan), §58.185 (final report), §58.190/58.195 (storage and retention of records and specimens).
- 21 CFR Part 11, Electronic Records; Electronic Signatures (U.S. FDA), and FDA guidance on data integrity and cGMP/GxP expectations.
- OECD Principles of Good Laboratory Practice (OECD Series on Principles of GLP and Compliance Monitoring, No. 1) and OECD No. 17, Application of GLP Principles to Computerised Systems.
- GAMP 5: A Risk-Based Approach to Compliant GxP Computerized Systems, Second Edition (ISPE, 2022), referenced as the industry framework for computerized system validation.
