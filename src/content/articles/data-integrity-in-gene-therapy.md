---
title: "Data Integrity in Gene Therapy: What FDA Really Expects"
description: "How FDA's data integrity expectations actually play out for gene and cell therapy manufacturers, from inspection findings to the controls that pass."
pubDate: 2026-04-07
tags: ["data-integrity", "FDA", "gene-therapy", "GxP"]
tier: "Advanced"
pillar: "cell-gene-therapy"
---

Gene therapy is one of the most data-intensive categories of biologics the FDA regulates. A single Biologics License Application (BLA) for a viral vector or a base editing product can carry hundreds of assay datasets, manufacturing batch records, stability profiles, and clinical data packages, all of which have to hold together under a reviewer who has seen every kind of data manipulation, system misconfiguration, and documentation failure imaginable.

The gap that sinks programs is rarely a missing study. It is the integrity of the data underneath the studies: who generated it, whether it can be reconstructed, and whether the systems that produced it would let someone change a number without leaving a trace. This article walks through what FDA inspectors actually look for in this space, why gene therapy is structurally harder than small molecule manufacturing, and what a program that passes inspection looks like in practice.

## Why gene therapy raises the stakes

Two features of the modality make data integrity unusually load bearing.

First, the products are often administered once. A patient receiving a one-time gene addition or editing therapeutic cannot stop taking it if a problem emerges later. The data supporting safety, identity, purity, and potency is the only protection between a manufacturing or analytical error and an irreversible clinical outcome. Reviewers know this, and they treat the supporting records accordingly.

Second, the analytical and manufacturing workflows are immature and instrument-heavy compared with a legacy small molecule line. Potency, identity, and genomic integrity are assessed with methods that are still evolving: digital PCR (ddPCR) for vector genome titer, next generation sequencing for editing outcomes and off-target assessment, flow cytometry for transduction and immunophenotyping, and cell-based potency assays whose biology is genuinely hard. Each of these runs on instrument-specific software, much of it with weaker access controls and audit trail capability than a mature chromatography data system. The result is a long chain of hand-offs, each one a place where data can be lost, overwritten, or silently altered.

There is a third factor that quietly multiplies the first two. Much gene therapy work is split across contract development and manufacturing organizations and contract testing labs. A sponsor may own the BLA but hold none of the instruments that generated the data in it. That means the sponsor has to assure data integrity at sites it does not operate, through audits, quality agreements, and access to records it cannot see day to day. When a CDMO's instrument software has a partial audit trail or a shared login, the finding lands on the sponsor's submission. The oversight obligations here are spelled out in [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements) and in [supplier and vendor qualification](/articles/supplier-vendor-qualification), and they are not optional in this modality, they are the normal operating model.

Put those together and the inspection posture is straightforward: high consequence, immature systems, many hand-offs, and shared accountability across organizations. That is exactly the profile that draws scrutiny.

## The gap between the guidance and what gets cited

FDA's guidance "Data Integrity and Compliance With Drug CGMP: Questions and Answers" was finalized in December 2018 (the draft was issued in April 2016). It restates the ALCOA expectations that have anchored records and signatures requirements for decades: data must be Attributable, Legible, Contemporaneous, Original, and Accurate. The "plus" elements widely taught alongside it, Complete, Consistent, Enduring, and Available, come from MHRA and PIC/S guidance and are now common vocabulary across both agencies. For a fuller treatment of each attribute, see the [ALCOA+ breakdown](/articles/alcoa-plus-deep-dive) and the [data integrity foundations](/articles/data-integrity-foundations) article.

Every quality team has a slide on ALCOA+. What the slide does not capture is the inspector's real question. They are not walking the floor hunting for an ALCOA violation in the abstract. They are looking for systems that allow data to be manipulated without detection, whether or not manipulation actually occurred.

That distinction matters more than almost anything else in this topic. A company can have clean data, complete records, and tidy audit trails and still receive a data integrity citation, because the system would have allowed backdating without forcing a reason, or because the electronic lab notebook does not capture edits at the field level. The finding is not the data. The finding is the control gap that makes the data untrustworthy.

This is why "we checked and the numbers are right" is not a defense. The agency is assessing whether you could prove the numbers are right to a skeptical third party, using the system's own records, without relying on the honesty of the analyst.

## The findings that recur

Drawing on published warning letters, FDA Form 483 observations, and inspection trends, the gene and cell therapy findings cluster into a handful of failure modes. None of them are exotic. They are the same failures that have generated data integrity warning letters across pharma for fifteen years, made worse by the instrument sprawl described above.

### Partial audit trails

The obvious failure, audit trails switched off, gets caught immediately and is increasingly rare. The harder problem is partial audit trails. A system records that a result was created and that a record was deleted, but it does not capture field-level edits, or it captures that a value was "modified" with a timestamp but not the previous value.

The standard from 21 CFR 211.68 and 21 CFR Part 11 is that the audit trail must be complete enough to reconstruct any change to raw or critical data: the old value, the new value, who made the change, when, and why. If you cannot reconstruct the prior state of a number, the system fails. For how to design and review trails so they actually meet this bar, see [audit trail design and review](/articles/audit-trail-design-and-review).

Instrument software for ddPCR, flow cytometry, and plate readers is the usual offender, because many of these packages were built as scientific tools first and compliant records systems second.

### Shared or generic login credentials

Still happening. When two analysts share a login for convenience, or a workstation runs under a single generic account, every record produced is unattributable. This fails the Attributable principle outright, and it makes the data scientifically uninterpretable, because you cannot establish who performed which step or whether the person was trained and qualified for it.

Gene therapy is especially exposed here. Specialized assay instruments often ship with a single administrative account and weak user management, and small analytical teams under schedule pressure rationalize sharing. The fix is individual named accounts everywhere, enforced through identity and access management, with privileged functions separated from routine ones. The access control angle is covered in depth in [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control).

### Data transfer without verification

Raw data leaves an instrument, lands on a network share, gets imported into a LIMS or a calculation spreadsheet, and at each step the only check is that an analyst looked at the numbers and they seemed fine. That is not a control. It is an opportunity for transcription error or selective omission.

A defensible transfer either keeps the data inside a single validated system end to end, or applies an automated integrity check at each boundary: a checksum or hash comparison, a reconciliation count, or a system-to-system interface whose mapping has been verified. The transfer event should be logged on both sides. The principles here overlap heavily with [data lifecycle and metadata](/articles/data-lifecycle-and-metadata) and with the controls described in [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation), since spreadsheets are where most uncontrolled transfers happen.

### Failing or aberrant results discarded before disposition

This is the finding that turns a 483 into a warning letter. An analyst gets a result that looks wrong, decides the instrument was off or the sample was bad, reruns, and deletes the first acquisition from the instrument software. The only record that survives is the passing one.

FDA's position is unambiguous: all data, including failing and aberrant runs, must be retained and evaluated under the out-of-specification process. A decision to invalidate a result requires a documented scientific or technical justification, reviewed and approved, not a quiet deletion. The reference framework is the agency's 2006 guidance "Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production," and the mechanics are covered in [the OOS investigation process](/articles/oos-investigation-process). When a failure points at a systemic problem, it should also feed [the CAPA system](/articles/what-is-a-capa).

Gene therapy potency assays make this temptation acute. The assays are variable, batches are precious and few, and timelines are brutal. That combination is exactly when discipline matters most and is hardest to hold.

### Testing into compliance and uncontrolled reprocessing

Closely related: re-injecting, re-integrating chromatographic peaks, or re-running an analysis with different parameters until the answer passes, without documenting each attempt and its justification. In an electronic system this leaves fingerprints in the audit trail. Inspectors increasingly pull the trail and compare the number of acquisitions against the number of reported results. A mismatch is one of the fastest ways to lose credibility for an entire data set.

## A quick map of findings to expectations

The table below summarizes the recurring findings, the underlying expectation, and the regulatory anchor. The citations are real and current as of writing.

| Finding | Underlying expectation | Primary anchor |
|---|---|---|
| Partial or missing audit trail | Any change to critical data is reconstructable (old value, new value, who, when, why) | 21 CFR 211.68; 21 CFR Part 11.10(e); FDA 2018 DI Q&A |
| Shared or generic logins | Each action attributable to a unique individual | 21 CFR Part 11.10(d), 11.10(g) |
| Unverified data transfer | Data preserved and verified across every hand-off | FDA 2018 DI Q&A; ALCOA Original/Accurate |
| Deleted failing results | All data retained; invalidation justified and approved | FDA 2006 OOS guidance; 21 CFR 211.192 |
| Inadequate computerized system controls | Systems validated for intended use, access controlled | 21 CFR Part 11; 21 CFR 211.68(b) |

For readers who want the regulatory mechanics in detail, the [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11) article and the [practical Part 11 / Annex 11 guide](/articles/part-11-annex-11-practical-guide) cover both the US and European requirements, which gene therapy programs almost always have to satisfy in parallel.

## What good actually looks like

A mature data integrity program for a gene therapy manufacturer is not defined by the volume of its documentation. It is defined by controls that make manipulation hard, make errors visible, and keep the full history of every data point available for review. In practice, that means a specific and observable set of behaviors.

- Instrument-to-system data transfer with automated verification: a checksum or system interface that confirms imported values match exported values, logged in both the source software and the destination audit trail. No manual retyping of critical data into spreadsheets that then drive disposition.
- Individual named accounts everywhere, with no human users sharing credentials and no routine work done under service or administrative accounts. Access is provisioned by role, reviewed periodically, and revoked promptly when people change roles or leave.
- Audit trail review built into the workflow, not bolted on. The expectation from the 2018 Q&A is that audit trails be reviewed with the same frequency and rigor as the records they support. For a release-critical result, that means a documented step confirming the trail for that batch or run was reviewed before the data was used for a decision. The mechanics live in [batch record review](/articles/batch-record-review-gmp).
- OOS and out-of-trend procedures that explicitly address electronic data: what an analyst may and may not do when a computerized result is out of specification, before touching the instrument or the file.
- A validated state that is maintained, not just achieved once. Software versions, configurations, and integrations change constantly in this space, so periodic review confirms the system is still in its validated state and that changes went through [change control](/articles/change-control-validated-systems). The wider lifecycle approach is laid out in [GAMP 5 and the CSV framework](/articles/gamp5-csv-framework) and the newer [computer software assurance](/articles/computer-software-assurance-fda) thinking, which lets teams concentrate effort on the highest-risk records rather than spreading testing thin.
- A governance layer above the individual systems, so that ownership, periodic review, risk assessment, and remediation are coordinated rather than left to each lab. That program-level view is the subject of [the data governance framework](/articles/data-governance-framework) and [data integrity program architecture](/articles/di-program-architecture).

None of this is novel. All of it requires organizational discipline to sustain, especially at the speed gene therapy programs run.

## A worked example: vector genome titer by ddPCR

Consider a concrete path. A ddPCR run measures vector genome titer for a lot of viral vector that will be used for clinical or commercial supply. The instrument produces raw amplitude data, the software calls positive and negative droplets against a threshold, and a concentration is calculated and reported into the LIMS, where it is compared against the release specification.

The integrity-critical decisions are not at the end, they are buried in the middle. Who set the threshold, and is the threshold setting captured in the audit trail or buried in an unversioned analysis template? If the first analysis gave a borderline result and the threshold was adjusted, is the original analysis retained with a justification, or was it overwritten? When the concentration moved from the instrument software into the LIMS, was it transcribed by hand or transferred through a verified interface? Can a reviewer, months later, open the audit trail and reconstruct every reportable result this lot ever produced, including any that were not reported?

A program that passes will answer all four cleanly. The threshold and any change to it are captured and attributable. Every analysis is retained. The transfer is verified and logged. The reviewer can reconstruct the full history. A program that fails usually fails on the second and third questions: the borderline analysis quietly disappeared, and the number was retyped into a spreadsheet with no trace.

The lesson generalizes to flow cytometry gating, sequencing pipeline parameters, and potency assay curve fitting. The judgment calls in the analysis are where integrity is won or lost, and they are exactly the steps that weakly controlled scientific software fails to capture.

## How an inspector actually tests this

Understanding the inspection mechanics changes how you prepare. Inspectors rarely take a quality system at face value. They trace.

A common technique is to pick a single reported result, often a release-critical one such as a potency or titer value in the BLA, and follow it backward through every system it touched. They will ask to see the raw acquisition on the instrument, the analysis that produced the reported number, the audit trail around that analysis, the transfer record into the LIMS, and the disposition decision that used it. At any point in that chain where the story breaks, the original cannot be produced, the audit trail does not reconcile, the transfer was manual and unverified, the credibility of that result collapses, and the doubt spreads outward to every result produced the same way.

A second technique is to compare the audit trail's count of acquisitions and analyses against the count of reported results. If an instrument shows twelve injections and the records report eight, the inspector wants the other four explained with documented justification. Silence here is read as testing into compliance.

A third is to interview the analysts. Inspectors ask people to walk through what they do when a result looks wrong, and they listen for the gap between the written procedure and the lived practice. If the procedure says retain and investigate but the analyst describes deleting and rerunning, the procedure is decoration. This is why training is a data integrity control, not a separate exercise: a [training program](/articles/training-program-gxp) that does not change behavior at the bench leaves the real risk untouched, and clear [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) determine who is even allowed to invalidate a result.

The practical implication is that you should pressure-test your own program the same way. Before an inspection, pull a release-critical result and trace it end to end yourself. If you cannot reconstruct it cleanly, an inspector will not be able to either, and you would rather find that out first.

## Where AI fits, and where it does not

There is real and growing interest in using machine learning to review audit trails at scale, flagging patterns a human reviewer would miss across thousands of entries: off-hours edits, repeated back-to-back changes to the same field, sequences that statistically do not match the documented process, or acquisition counts that do not reconcile with reported results. For the volume of audit trail data a gene therapy program generates, this is a legitimately useful application.

The caution is about role, not capability. An AI flag is not a data integrity finding. It is a screen. A finding exists only when a qualified reviewer investigates the flag and documents a conclusion. The model narrows where humans look; it does not replace the human judgment or the documented review that the regulations require. And the tool itself is a computerized system used in a GxP decision, so it has to be validated for its intended use, with its inputs, version, and limitations controlled like any other. That validation question is its own subject, covered in [validating AI in GxP systems](/articles/validating-ai-gxp-systems) and [building AI tools for GxP](/articles/building-ai-tools-for-gxp). Treating an unvalidated model's output as fact in a release decision would itself be a data integrity problem.

## For readers at different depths

If you are new to GxP, the single idea to carry away is that data integrity is about trustworthiness, not paperwork volume. The question behind every finding is whether an outsider could verify your data using your own systems, without trusting anyone's word. Start with [data integrity foundations](/articles/data-integrity-foundations) and [good documentation practices](/articles/good-documentation-practices).

If you are a working practitioner, the highest-yield moves are usually unglamorous: kill shared logins, confirm your instrument audit trails capture field-level changes with prior values, eliminate manual retyping of release-critical data, and make audit trail review a documented part of disposition rather than an afterthought. A focused [self-audit checklist](/articles/di-self-audit-checklist) or a structured [gap assessment](/articles/di-gap-assessment-methodology) will surface the worst exposures fast.

If you are a senior or program-level reader, the work is to build a governance layer that treats integrity as a property of the whole system: clear data ownership, a current inventory of computerized systems and their validated state, risk-based review depth, and a remediation pipeline that closes findings before an inspector finds them. When findings do come, the response process matters as much as the fix, which is why [483 and warning letter response](/articles/483-warning-letter-response) and broader [FDA inspection readiness](/articles/fda-inspection-readiness) belong in the same program. Recurring integrity failures are almost always a [quality culture](/articles/quality-culture-di-failures) problem wearing a technical disguise.

## The bottom line

FDA's data integrity expectations for gene therapy are high because the consequences of unreliable data are, for a one-time treatment, effectively permanent. The companies that pass inspection are not the ones with the thickest binders. They are the ones whose systems make manipulation difficult, make errors detectable, and keep the complete history of every data point available for review. That is a harder thing to build than a slide deck on ALCOA+, and it is the standard worth building toward.
