---
title: "Good Laboratory Practice (21 CFR 58) for Nonclinical Safety Studies"
description: "How 21 CFR Part 58 and OECD GLP principles govern nonclinical safety studies through the study director, the study plan and final report, an independent Quality Assurance Unit, archiving, and computerized-system data integrity."
pubDate: 2026-06-20
tags: ["GLP", "21 CFR 58", "nonclinical safety", "OECD GLP", "data integrity", "quality assurance unit", "study director", "21 CFR Part 11"]
pillar: "clinical-gcp"
tier: "Intermediate"
---

People who work in pharmaceutical quality tend to collapse the three "good practice" regimes into one blurry idea of compliance. They are not the same. GMP (21 CFR 210/211) governs how you make a drug. GCP (ICH E6) governs how you study it in humans. GLP, 21 CFR Part 58 in the United States, and the OECD Principles of Good Laboratory Practice internationally, governs the nonclinical safety studies that decide whether a molecule is safe enough to put into humans at all. Toxicology, safety pharmacology, genotoxicity, carcinogenicity, the studies that fill the nonclinical sections of an IND or a marketing application: GLP is the rulebook for those.

The distinction matters because GLP is built around a problem the other two don't have in the same form. A GLP safety study is a one-shot scientific experiment whose result, "no adverse effect at this dose", is taken on trust by a regulator who was not in the room. Years later that result becomes the safety justification for dosing humans. So GLP is engineered backward from a single question: **could an inspector, given only your records, reconstruct exactly what was done, by whom, to which animals, with what test article, and conclude that the reported result is what actually happened?** That property, full reconstructability from the archive, is the spine of the whole regulation. Everything in this article hangs off it.

## What GLP covers, and what it deliberately does not

GLP applies to *nonclinical laboratory studies*, studies in test systems (animals, plants, microorganisms, or sub-parts thereof) conducted to evaluate the safety of regulated articles. The scope is defined in **21 CFR 58.1 and 58.3**. It is a safety regulation, not a science-quality regulation. This is one of the most misunderstood points in the field.

GLP does **not** apply to:

- **Basic exploratory or discovery research** done to characterize physical/chemical properties or screen for activity. Dose-ranging and early pharmacology screens generally fall outside GLP.
- **Efficacy / pharmacodynamic studies** intended to show that a drug works. Those are excluded by scope; safety is the trigger.
- **Clinical studies** in humans, those are GCP.
- **Manufacturing and analytical release** of the drug substance, that is GMP.

A frequent failure mode is teams either over-applying GLP to discovery work (wasting effort) or under-applying it to a study that turns out to be a central safety study supporting first-in-human dosing. The decision rule is the study's *purpose*: if the result will be submitted to a regulatory authority to support the safety of a product, it should be run under GLP. The FDA's bioresearch monitoring (BIMO) program inspects these studies, and a finding that a central tox study was *not* run under GLP can invalidate it.

The international counterpart is the **OECD Principles of Good Laboratory Practice** (OECD Series on Principles of GLP and Compliance Monitoring, No. 1). The two systems are deliberately harmonized in structure and intent, same study director model, same QA function, same archiving discipline, so that a study run in an OECD member country can be accepted across borders under the OECD Mutual Acceptance of Data (MAD) framework. Where this article cites a 21 CFR 58 subpart, the OECD principles carry an equivalent requirement; the differences are mostly in terminology (OECD speaks of the "test facility" and "sponsor" with slightly different role boundaries) rather than substance.

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

## The study plan and the final report: the two anchor documents

A GLP study is bracketed by two controlling documents. Everything in between must trace cleanly from one to the other.

**The study plan (protocol)**, **21 CFR 58.120**, is written and approved *before* the study starts. It defines the objective, the test and control articles, the test system, the number and sex of animals, dose levels and route, the experimental design including bias-control methods, the types of data to be collected, the statistical methods, and the records to be maintained. Critically, it must be **signed and dated by the study director** before the work begins, and any change after that point is a formal **protocol amendment**, signed, dated, and reasoned. You cannot quietly revise the design after seeing the data; that is the integrity firewall.

**The final report**, **21 CFR 58.185**, is the controlled scientific output. It must describe the methods, the results, the study director's interpretation, and the locations where raw data and specimens are archived. Two requirements on the final report are inspection favorites:

1. It must be **signed and dated by the study director**, who thereby takes personal responsibility for the conclusions.
2. It must include a **signed and dated Quality Assurance Unit statement** specifying the dates inspections were made and the dates findings were reported to management and to the study director (this comes from 58.35, described below).

A corrected or amended final report can only be issued as a formal **amendment**, signed by the study director, identifying the change and the reason. You do not reissue a clean copy; the amendment trail stays visible. The acceptance criterion an inspector applies is blunt: do the conclusions in the final report follow from the raw data in the archive, with every deviation between protocol and conduct accounted for? If a number in the report cannot be traced to a record, the report is not reliable, and a single unexplained discrepancy can cascade into a data-integrity finding.

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

One nuance that trips people up: **58.35(d) limits FDA access to the QAU's detailed inspection findings.** Inspectors may verify that a QAU *exists and is performing its function* and may review the master schedule, written QAU procedures, and the dates of inspections, but the detailed *findings* of individual QAU inspections are generally not subject to routine FDA copying. The intent is to keep the QAU as a candid internal-audit function rather than a self-incrimination engine. In practice, inspectors confirm the QAU is real and active and then test it indirectly: if the QAU was doing its job, the studies it audited should be clean.

Where the OECD principles differ slightly is structural: OECD describes a "Quality Assurance Programme" and ties QA personnel designation to facility management. The independence requirement is identical in substance.

## Archiving: where reconstructability lives or dies

If reconstructability is the spine of GLP, the **archive** is the vertebra everything attaches to. **21 CFR 58.190 and 58.195** govern storage and retention of records and specimens, and this is where many otherwise-good facilities fail an inspection.

The requirements:

- **All raw data, documentation, protocols, final reports, and specimens** generated as a result of a study must be **retained**. Raw data means the original records, the actual worksheet, the instrument printout, the first-capture electronic file, not a transcribed summary.
- Records and specimens must be stored in an **archive** designed for orderly storage and **expedient retrieval**, with **controlled access** (58.190).
- An **archivist** must be designated; access is limited to authorized personnel and is logged. People take material in and out against a record, so chain of custody is intact.
- The archive must be protected against **deterioration** (and, in practice, against fire, flood, and environmental damage, frozen specimens need monitored storage; paper needs a stable environment).
- **Retention periods** under 58.195 are tied to the regulatory fate of the article: for studies supporting a marketing application, records are generally retained for a defined period after approval; if no application is filed, a shorter defined period applies. The practical rule facilities use is to keep GLP records for the longest applicable period and never destroy on assumption.

The acceptance criterion for archiving is again reconstructability under access control: can an authorized person retrieve a specific study's complete record set, raw data, protocol, deviations, final report, and specimens, quickly, and prove that no one could have altered it in storage? An archive that amounts to a locked cabinet someone has a key to, with no access log, fails on the controlled-access and retrievability tests even if all the paper is physically present.

## Computerized systems and data integrity under GLP

When 21 CFR Part 58 was written, "raw data" meant paper and instrument tape. Today nearly all GLP raw data is electronic, LIMS, electronic lab notebooks, chromatography data systems, instrument software, and the integrity expectations have been mapped onto **21 CFR Part 11** (Electronic Records; Electronic Signatures) and, for thinking about controls, the **OECD guidance on the application of GLP principles to computerised systems** (OECD No. 17). This is the most active inspection area in modern GLP.

The governing framework is **ALCOA+**: data must be **A**ttributable, **L**egible, **C**ontemporaneous, **O**riginal, and **A**ccurate, plus **C**omplete, **C**onsistent, **E**nduring, and **A**vailable. Mapped onto a GLP computerized system, that means:

- **Attributable.** Every record is tied to the individual who created or changed it. Unique user accounts, no shared logins, no generic "lab admin" account doing data entry. Part 11 electronic signatures (§11.50, §11.70) must be linked to their records so they cannot be excised or copied to falsify.
- **Contemporaneous and Original.** The system captures data at the moment of the event, and the *first electronic capture is the raw data*. A printed chromatogram is not the raw data if the underlying electronic file with its integration parameters still exists; that electronic file must be retained and is what the inspector wants.
- **Audit trail (§11.10(e)).** The system must keep a **secure, computer-generated, time-stamped audit trail** that records the operator, the action, the old and new values, and the reason for any change, and that audit trail must be retained for the record's lifetime and be reviewable. Audit trail records must not obscure previously recorded information. The modern inspection move is **audit-trail review**: inspectors look not just at whether an audit trail exists but at whether someone actually reviews it as part of releasing data. An unreviewed audit trail is treated as no audit trail.
- **Access controls and segregation of duties (§11.10(d), (g)).** Authority checks limit who can create, modify, approve, and delete. Crucially, the people generating data should not be able to delete it or alter the audit trail. Disabling, reconfiguring, or having a back door to the audit trail is a cardinal data-integrity finding.
- **Validation (§11.10(a)).** Computerized systems used in GLP studies must be **validated** to demonstrate they do what they are supposed to do, consistently. The industry reference for *how* to do this is **GAMP 5** (ISPE's risk-based computerized system validation framework). GAMP 5 contributes the risk-based, category-driven approach, you validate proportionate to risk and to whether the system is configured or custom, and the V-model linking user requirements to verification.
- **Backup, recovery, and the electronic archive.** Electronic raw data must be backed up, recoverable, and archived for the same retention periods as paper, in a form that stays readable as software changes. "We retained the records but can no longer open them" fails the *enduring* and *available* legs of ALCOA+.

The classic GLP computerized-system failure modes inspectors hunt for are familiar across the data-integrity world: shared logins that break attributability; system clocks that can be changed by analysts (defeating *contemporaneous*); audit trails that were turned off, never reviewed, or configurable by the user; "testing" or "trial" injections quietly discarded before the official run; and orphan data, results that exist in the instrument but never made it into the reported record. Any one of these undermines the central GLP claim that the report reflects what happened.

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

## Why the GLP/GMP/GCP distinction is worth keeping straight

A practitioner who internalizes the differences makes better decisions about which controls to apply. GMP optimizes for *reproducible manufacture*: batch records, release testing, change control on a process you will run many times. GCP optimizes for *subject protection and credible clinical data*: informed consent, IRB oversight, source-data verification at investigator sites. GLP optimizes for *the defensibility of a single safety experiment*: one study director, one fixed protocol, an independent QAU, and an archive built so the experiment can be reconstructed years later.

They share a common ancestor, ALCOA+ data integrity runs through all three, and Part 11 governs electronic records across all of them, but they are tuned for different risks. Treating a central toxicology study like a discovery screen, or auditing it with a GMP batch-record mindset, misses what GLP is actually protecting: the chain of trust that lets a regulator accept "safe enough for humans" from records alone. That chain is reconstructability, and 21 CFR 58 together with the OECD principles is the engineering specification for building it.

---

**Primary sources**

- 21 CFR Part 58, Good Laboratory Practice for Nonclinical Laboratory Studies (U.S. FDA). Key sections: §58.1/58.3 (scope/definitions), §58.33 (study director), §58.35 (Quality Assurance Unit), §58.120 (protocol/study plan), §58.185 (final report), §58.190/58.195 (storage and retention of records and specimens).
- 21 CFR Part 11, Electronic Records; Electronic Signatures (U.S. FDA), and FDA guidance on data integrity and cGMP/GxP expectations.
- OECD Principles of Good Laboratory Practice (OECD Series on Principles of GLP and Compliance Monitoring, No. 1) and OECD No. 17, Application of GLP Principles to Computerised Systems.
- GAMP 5: A Risk-Based Approach to Compliant GxP Computerized Systems (ISPE), referenced as the industry framework for computerized system validation.
