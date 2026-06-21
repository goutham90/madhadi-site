---
title: "Data Integrity in Gene Therapy: What FDA Really Expects"
description: "How FDA's data integrity expectations actually play out for advanced therapies, from inspection findings to the controls that pass and the procedures behind them."
pubDate: 2026-04-07
tags: ["data-integrity", "FDA", "gene-therapy", "GxP"]
tier: "Advanced"
pillar: "cell-gene-therapy"
---

Gene therapy is one of the most data-intensive categories of biologics any regulator reviews, and the same data integrity principles apply across pharma, biotech, medical devices, and the wider life sciences. A single Biologics License Application (BLA) for a viral vector or a base editing product can carry hundreds of assay datasets, manufacturing batch records, stability profiles, and clinical data packages, all of which have to hold together under a reviewer who has seen every kind of data manipulation, system misconfiguration, and documentation failure imaginable.

The gap that sinks programs is rarely a missing study. It is the integrity of the data underneath the studies: who generated it, whether it can be reconstructed, and whether the systems that produced it would let someone change a number without leaving a trace. This article walks through what inspectors actually look for, why advanced therapies are structurally harder than legacy small molecule manufacturing, and what a program that passes inspection looks like in practice, down to the procedures, roles, and acceptance criteria. The thinking here is modality-agnostic. A sterile injectable line, a medical device firmware build, or a clinical data management system faces the same questions, with gene therapy as the sharpest illustration because the consequences are the most permanent.

## Why one-time therapies raise the stakes

Two features of the modality make data integrity unusually load bearing, and both have analogues elsewhere in the industry.

First, the products are often administered once. A patient receiving a one-time gene addition or editing therapeutic cannot stop taking it if a problem emerges later. The data supporting safety, identity, purity, and potency is the only protection between a manufacturing or analytical error and an irreversible clinical outcome. Reviewers know this, and they treat the supporting records accordingly. The same logic raises the stakes for an implantable device that cannot be recalled from a patient, or a vaccine lot given to millions before a stability signal appears.

Second, the analytical and manufacturing workflows are immature and instrument-heavy compared with a mature small molecule line. Potency, identity, and genomic integrity are assessed with methods that are still evolving: digital PCR (ddPCR) for vector genome titer, next generation sequencing for editing outcomes and off-target assessment, flow cytometry for transduction and immunophenotyping, and cell-based potency assays whose biology is genuinely hard. Each of these runs on instrument-specific software, much of it with weaker access controls and audit trail capability than a mature chromatography data system. The result is a long chain of hand-offs, each one a place where data can be lost, overwritten, or silently altered. Any organization adopting new instrumentation faster than its quality systems can absorb it lives with the same exposure.

There is a third factor that quietly multiplies the first two. Much of this work is split across contract development and manufacturing organizations and contract testing labs. A sponsor may own the BLA but hold none of the instruments that generated the data in it. That means the sponsor has to assure data integrity at sites it does not operate, through audits, quality agreements, and access to records it cannot see day to day. When a partner's instrument software has a partial audit trail or a shared login, the finding lands on the sponsor's submission. The oversight obligations here are spelled out in [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements) and in [supplier and vendor qualification](/articles/supplier-vendor-qualification), and they are not optional in this modality, they are the normal operating model.

Put those together and the inspection posture is straightforward: high consequence, immature systems, many hand-offs, and shared accountability across organizations. That is exactly the profile that draws scrutiny.

## The gap between the guidance and what gets cited

FDA's guidance "Data Integrity and Compliance With Drug CGMP: Questions and Answers" was finalized in December 2018 (the draft was issued in April 2016). It restates the ALCOA expectations that have anchored records and signatures requirements for decades: data must be Attributable, Legible, Contemporaneous, Original, and Accurate. The "plus" elements widely taught alongside it, Complete, Consistent, Enduring, and Available, come from MHRA guidance ("GXP Data Integrity Guidance and Definitions," 2018) and PIC/S guidance (PI 041, "Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments") and are now common vocabulary across agencies. For a fuller treatment of each attribute, see [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and the [data integrity foundations](/articles/data-integrity-foundations) article.

Every quality team has a slide on ALCOA+. What the slide does not capture is the inspector's real question. They are not walking the floor hunting for an ALCOA violation in the abstract. They are looking for systems that allow data to be manipulated without detection, whether or not manipulation actually occurred.

That distinction matters more than almost anything else in this topic. A company can have clean data, complete records, and tidy audit trails and still receive a data integrity citation, because the system would have allowed backdating without forcing a reason, or because the electronic lab notebook does not capture edits at the field level. The finding is not the data. The finding is the control gap that makes the data untrustworthy.

This is why "we checked and the numbers are right" is not a defense. The agency is assessing whether the numbers can be proven right to a skeptical third party, using the system's own records, without relying on the honesty of the analyst.

### The regulatory anchors you should be able to name

When an inspector or interviewer presses on basis, these are the citations that carry the weight. Know them by number and by what each one actually requires.

| Citation | Title / scope | What it requires for data integrity |
|---|---|---|
| 21 CFR 211.68 | Automatic, mechanical, and electronic equipment | Computerized systems controlled; backup of data; access limited to authorized persons; audit trail capable of reconstructing changes |
| 21 CFR 211.194 | Laboratory records | Complete record of all data from each test, including raw data, calculations, and the person who performed each test |
| 21 CFR 211.192 | Production record review | Investigation of any unexplained discrepancy or failure of a batch to meet specification, whether or not the batch was released |
| 21 CFR Part 11 | Electronic records, electronic signatures | Validation, audit trails, unique accounts, access controls, operational system checks, signature/record linking |
| EU Annex 11 | Computerised systems (EU GMP) | Risk-managed validation, audit trails for GMP-relevant changes, data integrity throughout the lifecycle |
| EU Annex 1 (2022) | Manufacture of sterile medicinal products | Contamination control strategy; relevant where environmental and process data feed release |
| FDA 2018 DI Q&A | Data Integrity and Compliance with Drug CGMP | Practical interpretation: audit trail review frequency, shared accounts, retention of all data |
| FDA 2006 OOS guidance | Investigating Out-of-Specification Test Results | All results retained and evaluated; invalidation requires documented scientific justification |

A program that almost always runs in parallel jurisdictions should treat the US and EU requirements as a single combined bar. The [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11) article and the [practical Part 11 / Annex 11 guide](/articles/part-11-annex-11-practical-guide) map the two side by side.

## The findings that recur

Drawing on published warning letters, FDA Form 483 observations, and inspection trends, the findings cluster into a handful of failure modes. None of them are exotic. They are the same failures that have generated data integrity warning letters across pharma, devices, and clinical operations for fifteen years, made worse by the instrument sprawl described above.

### Partial audit trails

The obvious failure, audit trails switched off, gets caught immediately and is increasingly rare. The harder problem is partial audit trails. A system records that a result was created and that a record was deleted, but it does not capture field-level edits, or it captures that a value was "modified" with a timestamp but not the previous value.

The standard from 21 CFR 211.68 and 21 CFR Part 11 is that the audit trail must be complete enough to reconstruct any change to raw or critical data: the old value, the new value, who made the change, when, and why. If you cannot reconstruct the prior state of a number, the system fails. For how to design and review trails so they actually meet this bar, see [audit trail design and review](/articles/audit-trail-design-and-review) and [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).

Instrument software for ddPCR, flow cytometry, and plate readers is the usual offender, because many of these packages were built as scientific tools first and compliant records systems second. The same gap appears in older standalone balances, pH meters, and device test rigs.

### Shared or generic login credentials

Still happening. When two analysts share a login for convenience, or a workstation runs under a single generic account, every record produced is unattributable. This fails the Attributable principle outright, and it makes the data scientifically uninterpretable, because you cannot establish who performed which step or whether the person was trained and qualified for it.

Specialized instruments are especially exposed here. They often ship with a single administrative account and weak user management, and small teams under schedule pressure rationalize sharing. The fix is individual named accounts everywhere, enforced through identity and access management, with privileged functions separated from routine ones. The access control angle is covered in depth in [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control) and [electronic signatures implementation](/articles/electronic-signatures-implementation).

### Data transfer without verification

Raw data leaves an instrument, lands on a network share, gets imported into a LIMS or a calculation spreadsheet, and at each step the only check is that an analyst looked at the numbers and they seemed fine. That is not a control. It is an opportunity for transcription error or selective omission.

A defensible transfer either keeps the data inside a single validated system end to end, or applies an automated integrity check at each boundary: a checksum or hash comparison, a reconciliation count, or a system-to-system interface whose mapping has been verified. The transfer event should be logged on both sides. The principles here overlap heavily with [data lifecycle and metadata](/articles/data-lifecycle-and-metadata) and with the controls described in [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation), since spreadsheets are where most uncontrolled transfers happen.

### Failing or aberrant results discarded before disposition

This is the finding that turns a 483 into a warning letter. An analyst gets a result that looks wrong, decides the instrument was off or the sample was bad, reruns, and deletes the first acquisition from the instrument software. The only record that survives is the passing one.

The agency position is unambiguous: all data, including failing and aberrant runs, must be retained and evaluated under the out-of-specification process. A decision to invalidate a result requires a documented scientific or technical justification, reviewed and approved, not a quiet deletion. The reference framework is the 2006 guidance "Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production," reinforced by 21 CFR 211.192, and the mechanics are covered in [the OOS investigation process](/articles/oos-investigation-process). When a failure points at a systemic problem, it should also feed [the CAPA system](/articles/what-is-a-capa).

Potency assays make this temptation acute. The assays are variable, batches are precious and few, and timelines are brutal. That combination is exactly when discipline matters most and is hardest to hold.

### Testing into compliance and uncontrolled reprocessing

Closely related: re-injecting, re-integrating chromatographic peaks, or re-running an analysis with different parameters until the answer passes, without documenting each attempt and its justification. In an electronic system this leaves fingerprints in the audit trail. Inspectors increasingly pull the trail and compare the number of acquisitions against the number of reported results. A mismatch is one of the fastest ways to lose credibility for an entire data set. The chromatography-specific version of this is detailed in [chromatography data system integrity](/articles/chromatography-data-system-integrity).

### A quick map of findings to expectations

The table below summarizes the recurring findings, the underlying expectation, and the regulatory anchor. The citations are real and current as of writing.

| Finding | Underlying expectation | Primary anchor |
|---|---|---|
| Partial or missing audit trail | Any change to critical data is reconstructable (old value, new value, who, when, why) | 21 CFR 211.68; 21 CFR Part 11.10(e); FDA 2018 DI Q&A |
| Shared or generic logins | Each action attributable to a unique individual | 21 CFR Part 11.10(d), 11.10(g) |
| Unverified data transfer | Data preserved and verified across every hand-off | FDA 2018 DI Q&A; ALCOA Original/Accurate |
| Deleted failing results | All data retained; invalidation justified and approved | FDA 2006 OOS guidance; 21 CFR 211.192 |
| Testing into compliance | Every acquisition accounted for against reported results | 21 CFR 211.194; 21 CFR Part 11.10(e) |
| Inadequate computerized system controls | Systems validated for intended use, access controlled | 21 CFR Part 11; 21 CFR 211.68(b) |

## How to assess where your data integrity risk actually sits

Before you can build controls, you have to know which records carry the most risk. Spreading effort evenly across every system wastes the budget and leaves the dangerous records under-protected. A risk-based pass is the first operational step, and it is also what the 2018 Q&A, GAMP 5, and the [computer software assurance](/articles/computer-software-assurance-fda) thinking all push you toward.

A workable procedure runs in this sequence.

1. Inventory every computerized system that creates, processes, or stores GxP data. Instruments, LIMS, ELN, MES, historians, spreadsheets, and any cloud service. If it touches a release, stability, or submission decision, it is in scope.
2. For each system, classify the records it produces by data criticality: how directly the record drives a quality decision, and how severe the consequence of an undetected error would be. The method is laid out in [data criticality and data risk](/articles/data-criticality-and-data-risk).
3. For each critical record, score data integrity risk by combining criticality with the system's vulnerability to undetected change. A record on a system with field-level audit trail, named accounts, and a verified interface is low vulnerability. The same record on a standalone instrument with a shared admin account and manual export is high.
4. Rank, then assign control depth and audit trail review frequency to match. The highest-risk records get reviewed every batch; lower-risk records get periodic review.
5. Record the assessment, the rationale, and the resulting controls so it can be defended and re-run when systems change.

Acceptance criteria for this step: an inspector can ask "show me how you decided which audit trails get reviewed every run," and you hand over a documented, current risk assessment that traces each control back to the criticality of the record it protects. The structured methods are in [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology) and [DI gap assessment methodology](/articles/di-gap-assessment-methodology).

## What good actually looks like

A mature data integrity program is not defined by the volume of its documentation. It is defined by controls that make manipulation hard, make errors visible, and keep the full history of every data point available for review. In practice, that means a specific and observable set of behaviors.

- Instrument-to-system data transfer with automated verification: a checksum or system interface that confirms imported values match exported values, logged in both the source software and the destination audit trail. No manual retyping of critical data into spreadsheets that then drive disposition.
- Individual named accounts everywhere, with no human users sharing credentials and no routine work done under service or administrative accounts. Access is provisioned by role, reviewed periodically, and revoked promptly when people change roles or leave.
- Audit trail review built into the workflow, not bolted on. The expectation from the 2018 Q&A is that audit trails be reviewed with the same frequency and rigor as the records they support. For a release-critical result, that means a documented step confirming the trail for that batch or run was reviewed before the data was used for a decision. The mechanics live in [batch record review](/articles/batch-record-review-gmp) and [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).
- OOS and out-of-trend procedures that explicitly address electronic data: what an analyst may and may not do when a computerized result is out of specification, before touching the instrument or the file. The out-of-trend angle is in [out-of-trend investigations](/articles/out-of-trend-investigations).
- System clocks synchronized and protected so contemporaneous timestamps are trustworthy and a user cannot move the clock to backdate an entry, the subject of [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).
- A validated state that is maintained, not just achieved once. Software versions, configurations, and integrations change constantly in this space, so periodic review confirms the system is still in its validated state and that changes went through [change control](/articles/change-control-validated-systems). The wider lifecycle approach is laid out in [GAMP 5 and the CSV framework](/articles/gamp5-csv-framework) and the newer [computer software assurance](/articles/computer-software-assurance-fda) thinking, which lets teams concentrate effort on the highest-risk records rather than spreading testing thin.
- A governance layer above the individual systems, so that ownership, periodic review, risk assessment, and remediation are coordinated rather than left to each lab. That program-level view is the subject of [the data governance framework](/articles/data-governance-framework) and [data integrity program architecture](/articles/di-program-architecture).

None of this is novel. All of it requires organizational discipline to sustain, especially at the speed these programs run.

### Roles and responsibilities

Data integrity fails most often in the seams between roles, so name the owner of each control explicitly. A typical RACI looks like this.

| Activity | Analyst / Operator | System / Instrument Owner | QC / Lab Supervisor | Quality Assurance | IT / CSV |
|---|---|---|---|---|---|
| Generate data correctly and contemporaneously | R | I | A | I | I |
| Configure audit trail and access controls | C | R | C | A | R |
| Provision and review user accounts | I | C | C | A | R |
| Review audit trail before disposition | I | I | R | A | I |
| Investigate OOS / invalidate a result | C | I | R | A | I |
| Approve disposition of a batch or run | I | I | C | R/A | I |
| Maintain validated state and change control | I | C | C | A | R |
| Periodic data integrity governance review | I | C | C | R | C |

R = responsible, A = accountable, C = consulted, I = informed. The point of writing it down is that when an inspector asks "who is allowed to invalidate a result," there is one answer, not three. Clear [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) and a real [training program](/articles/training-program-gxp) make the RACI live rather than theoretical.

## A worked example: vector genome titer by ddPCR

Consider a concrete path. A ddPCR run measures vector genome titer for a lot of viral vector that will be used for clinical or commercial supply. The instrument produces raw amplitude data, the software calls positive and negative droplets against a threshold, and a concentration is calculated and reported into the LIMS, where it is compared against the release specification.

The integrity-critical decisions are not at the end, they are buried in the middle. Who set the threshold, and is the threshold setting captured in the audit trail or buried in an unversioned analysis template? If the first analysis gave a borderline result and the threshold was adjusted, is the original analysis retained with a justification, or was it overwritten? When the concentration moved from the instrument software into the LIMS, was it transcribed by hand or transferred through a verified interface? Can a reviewer, months later, open the audit trail and reconstruct every reportable result this lot ever produced, including any that were not reported?

A program that passes will answer all four cleanly. The threshold and any change to it are captured and attributable. Every analysis is retained. The transfer is verified and logged. The reviewer can reconstruct the full history. A program that fails usually fails on the second and third questions: the borderline analysis quietly disappeared, and the number was retyped into a spreadsheet with no trace.

### What the audit trail should look like

Here is a simplified extract of an audit trail entry that passes. Note that it captures the old value, the new value, the actor, the time, and the reason.

| Timestamp (UTC) | User | Action | Field | Old value | New value | Reason |
|---|---|---|---|---|---|---|
| 2026-03-14 09:12:07 | a.morgan | Acquisition created | Run ID | - | DDP-2026-0142 | Initial run |
| 2026-03-14 09:48:33 | a.morgan | Threshold set | Amplitude threshold | - | 3200 | Per method MV-118 |
| 2026-03-14 10:05:19 | a.morgan | Threshold edited | Amplitude threshold | 3200 | 3450 | Negative cluster overlap, re-set per SOP step 7.4 |
| 2026-03-14 10:06:02 | a.morgan | Result calculated | VG titer (vg/mL) | - | 4.2e12 | - |
| 2026-03-14 14:21:55 | r.singh | Reviewed | Run DDP-2026-0142 | - | Approved | Second-person review, trail reconciled |

The reviewer can see that the threshold was changed once, why, by whom, and that the first calculated result was not silently discarded. If instead the trail showed three acquisitions and only one reported result with no explanation for the other two, that is the gap an inspector pulls on.

### Acceptance criteria for the run

You know this run is defensible when all of the following are true.

- Every acquisition the instrument performed is accounted for, reported or explained.
- The threshold and any change to it appear in the audit trail with a reason and an attributable user.
- The reported titer in the LIMS matches the instrument value, with the transfer verified, not retyped.
- A documented second-person review confirms the audit trail was reviewed before the result was used for disposition.
- No result was invalidated without an approved OOS or atypical-result justification.

The lesson generalizes to flow cytometry gating, sequencing pipeline parameters, potency assay curve fitting, and far beyond cell and gene therapy: chromatographic integration on a small molecule line, automated visual inspection on a device, or query resolution in a clinical database. The judgment calls in the analysis are where integrity is won or lost, and they are exactly the steps that weakly controlled software fails to capture.

## How an inspector actually tests this

Understanding the inspection mechanics changes how you prepare. Inspectors rarely take a quality system at face value. They trace.

A common technique is to pick a single reported result, often a release-critical one such as a potency or titer value in the BLA, and follow it backward through every system it touched. They will ask to see the raw acquisition on the instrument, the analysis that produced the reported number, the audit trail around that analysis, the transfer record into the LIMS, and the disposition decision that used it. At any point in that chain where the story breaks, the original cannot be produced, the audit trail does not reconcile, the transfer was manual and unverified, the credibility of that result collapses, and the doubt spreads outward to every result produced the same way.

A second technique is to compare the audit trail's count of acquisitions and analyses against the count of reported results. If an instrument shows twelve injections and the records report eight, the inspector wants the other four explained with documented justification. Silence here is read as testing into compliance.

A third is to interview the analysts. Inspectors ask people to walk through what they do when a result looks wrong, and they listen for the gap between the written procedure and the lived practice. If the procedure says retain and investigate but the analyst describes deleting and rerunning, the procedure is decoration. This is why training is a data integrity control, not a separate exercise: a [training program](/articles/training-program-gxp) that does not change behavior at the bench leaves the real risk untouched.

The practical implication is that you should pressure-test your own program the same way. Before an inspection, pull a release-critical result and trace it end to end yourself. If you cannot reconstruct it cleanly, an inspector will not be able to either, and you would rather find that out first. A structured [DI self-audit checklist](/articles/di-self-audit-checklist), a [mock inspection program](/articles/mock-inspection-program), and broader [FDA inspection readiness](/articles/fda-inspection-readiness) put this on a schedule rather than leaving it to the week before an audit.

### A self-trace procedure you can run this quarter

1. Pick one release-critical result from a recent lot or study (a potency, titer, identity, or stability value).
2. Locate the raw data on the originating instrument or system. Confirm it still exists and is in its original or true-copy form, per [static and dynamic records and true copies](/articles/static-dynamic-records-true-copies).
3. Open the audit trail around the analysis. Reconcile the number of acquisitions against the number of reported results. Account for every difference.
4. Confirm each threshold, integration, gating, or parameter decision is captured with an attributable user and, where changed, a reason.
5. Follow the value into the LIMS or report. Confirm the transfer was verified, not manual.
6. Confirm a documented second-person review of both the result and its audit trail preceded disposition.
7. Log every gap you find as a finding, route it through [the CAPA system](/articles/what-is-a-capa), and remediate before the real inspection. If a real integrity gap surfaces, the structured response belongs in a [DI remediation program](/articles/di-remediation-program).

## Handling a finding when one lands

If an inspection produces a 483 observation or a warning letter touching data integrity, the response process matters as much as the technical fix, and inspectors weigh the quality of the response heavily. A credible response does four things.

- Corrects the specific record or system cited, with evidence.
- Assesses the scope: every other record, system, and time period that the same gap could have affected. A response that fixes one instrument and ignores the five others with the same shared-login problem reads as not understanding the issue.
- Addresses root cause, often a procedure, a training gap, or a quality culture problem rather than a single technician's error. Use formal [root cause analysis techniques](/articles/root-cause-analysis-techniques) and avoid stopping at "human error," as covered in [human error in deviations](/articles/human-error-in-deviations).
- Commits to verifiable corrective and preventive actions with dates, then verifies effectiveness, per [CAPA effectiveness verification](/articles/capa-effectiveness-verification).

The mechanics of writing the response are in [483 and warning letter response](/articles/483-warning-letter-response) and [FDA 483 response strategy](/articles/fda-483-response-strategy). Recurring integrity failures are almost always a [quality culture](/articles/quality-culture-di-failures) problem wearing a technical disguise, so a response that names only the technical fault rarely closes the issue for good.

## Common mistakes and inspection-finding patterns

These are the patterns that recur across published findings. None name a company, and all of them are avoidable.

- Audit trail "review" that is a checkbox, never actually opening the trail. The signature exists, the review did not happen. Inspectors test this by asking the reviewer to walk through a specific entry.
- Shared logins justified by "the instrument software doesn't support individual accounts." The expectation is a procedural or technical compensating control, not a free pass. If the software genuinely cannot, the gap and its mitigation must be documented and risk-assessed.
- System clocks that users can change, so a contemporaneous timestamp is not trustworthy. Backdating becomes possible and undetectable.
- Critical data calculated in an uncontrolled spreadsheet with no validation, no protection on formula cells, and no audit trail. This is one of the most common findings of all, and it is usually invisible until someone traces a number.
- Original raw data deleted after a "true copy" is made, where the copy is not actually a verified, complete, dynamic-capable copy. A flattened PDF of a chromatogram is not a true copy of a dynamic record.
- Audit trail review scope that misses metadata: the trail captures result changes but not changes to methods, integration parameters, or sequence tables, which is where manipulation actually hides.
- Treating contract lab data as outside the program. The sponsor still owns the integrity of every number in the submission, regardless of who generated it.

## Interview questions you should be ready for

If you work in or near data integrity, these come up in interviews and in inspection interviews alike. Strong answers are specific.

**What does ALCOA+ stand for, and which part is from which guidance?** Attributable, Legible, Contemporaneous, Original, Accurate from FDA, plus Complete, Consistent, Enduring, Available from MHRA and PIC/S. Then add that the letters are a memory aid, and the real test is whether an outsider can verify your data from your own systems.

**A result is out of specification. Walk me through what an analyst may and may not do.** May not delete or overwrite the result, may not rerun and report only the passing value, may not adjust parameters until it passes. Must retain the original, raise the OOS, investigate per the procedure, and invalidate only with documented, approved scientific justification. Cite the 2006 OOS guidance and 21 CFR 211.192.

**How often should audit trails be reviewed?** With the same frequency and rigor as the records they support, per the 2018 Q&A. Release-critical data gets reviewed every batch or run as part of disposition; lower-risk data on a risk-based periodic schedule. Be ready to explain how you set the schedule from a data criticality assessment.

**An instrument shows twelve injections but the report has eight results. What is your concern and what do you do?** Possible testing into compliance. Pull the audit trail, account for every acquisition, confirm each unreported one has a documented justification, and if any are unexplained, treat it as a potential integrity issue requiring investigation and scope assessment.

**What is a true copy, and when can you destroy the original?** A complete and accurate copy that preserves the content and meaning, including dynamic functionality and metadata, verified against the original. You may retain the verified true copy in place of the original only where the copy genuinely preserves everything the original had, including the audit trail and dynamic behavior. See [static and dynamic records and true copies](/articles/static-dynamic-records-true-copies).

**How do you assure data integrity at a contract lab you do not operate?** Quality agreement defining data integrity expectations and access rights, qualification audit with a specific data integrity focus, periodic audits, the right to review raw data and audit trails, and clarity that the finding lands on your submission regardless. See [conducting a supplier audit](/articles/conducting-a-supplier-audit).

**What is the difference between a static and a dynamic record, and why does it matter?** A static record is a fixed snapshot, like a printout. A dynamic record allows interaction, reprocessing, and reanalysis, like a chromatogram or a ddPCR data file. Dynamic records must be retained in dynamic form because the ability to reprocess is part of the data. Printing them and discarding the electronic file destroys integrity.

## Where AI fits, and where it does not

There is real and growing interest in using machine learning to review audit trails at scale, flagging patterns a human reviewer would miss across thousands of entries: off-hours edits, repeated back-to-back changes to the same field, sequences that statistically do not match the documented process, or acquisition counts that do not reconcile with reported results. For the volume of audit trail data these programs generate, this is a genuinely useful application.

The caution is about role, not capability. An AI flag is not a data integrity finding. It is a screen. A finding exists only when a qualified reviewer investigates the flag and documents a conclusion. The model narrows where humans look; it does not replace the human judgment or the documented review that the regulations require. And the tool itself is a computerized system used in a GxP decision, so it has to be validated for its intended use, with its inputs, version, and limitations controlled like any other. That validation question is its own subject, covered in [validating AI in GxP systems](/articles/validating-ai-gxp-systems) and [building AI tools for GxP](/articles/building-ai-tools-for-gxp). Treating an unvalidated model's output as fact in a release decision would itself be a data integrity problem.

## For readers at different depths

If you are new to GxP, the single idea to carry away is that data integrity is about trustworthiness, not paperwork volume. The question behind every finding is whether an outsider could verify your data using your own systems, without trusting anyone's word. Start with [data integrity foundations](/articles/data-integrity-foundations) and [good documentation practices](/articles/good-documentation-practices), and use the [GxP and data integrity glossary](/articles/gxp-csv-data-integrity-glossary) to fix the vocabulary.

If you are a working practitioner, the highest-yield moves are usually unglamorous: kill shared logins, confirm your instrument audit trails capture field-level changes with prior values, eliminate manual retyping of release-critical data, and make audit trail review a documented part of disposition rather than an afterthought. A focused [self-audit checklist](/articles/di-self-audit-checklist) or a structured [gap assessment](/articles/di-gap-assessment-methodology) will surface the worst exposures fast.

If you are a senior or program-level reader, the work is to build a governance layer that treats integrity as a property of the whole system: clear data ownership, a current inventory of computerized systems and their validated state, risk-based review depth, and a remediation pipeline that closes findings before an inspector finds them. When findings do come, the response process matters as much as the fix, which is why [483 and warning letter response](/articles/483-warning-letter-response) and broader [FDA inspection readiness](/articles/fda-inspection-readiness) belong in the same program. If you are preparing for interviews specifically, pair this with [GxP quality interview preparation](/articles/gxp-quality-interview-preparation).

## The bottom line

Data integrity expectations for gene therapy are high because the consequences of unreliable data are, for a one-time treatment, effectively permanent, and the same logic scales across every regulated modality. The companies that pass inspection are not the ones with the thickest binders. They are the ones whose systems make manipulation difficult, make errors detectable, and keep the complete history of every data point available for review. They can name the regulation behind each control, hand over a current risk assessment that explains their review depth, and trace any reported result end to end without the story breaking. That is a harder thing to build than a slide deck on ALCOA+, and it is the standard worth building toward.
