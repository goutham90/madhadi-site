---
title: "Plan: Trial Master File (TMF) Management Plan"
description: "A plug-and-play TMF Management Plan: scope, the reference-model-based TMF Index, filing and QC process, completeness/timeliness/quality metrics, transfer and archiving, with a filled specimen and the GCP basis it satisfies."
pubDate: 2026-06-25
docType: "Plan"
pillar: "clinical-gcp"
relatedArticles: ["etmf-trial-master-file"]
tags: ["TMF", "eTMF", "clinical-gcp", "ICH E6", "inspection-readiness", "plan", "document-control"]
tier: "Intermediate"
---

This is a ready-to-use TMF Management Plan (also called a TMF Plan). It is the governing document for how one trial's Trial Master File is structured, filed, quality-controlled, transferred, and archived. Replace every `<<FILL: ...>>` placeholder with your own specifics and route it through your normal review and approval. A filled specimen follows the template. Verify each cited regulation against the current source before you rely on it. This is general guidance to adapt, not legal or regulatory advice.

## Document control header

| Field | Entry |
|---|---|
| Document title | TMF Management Plan, Study `<<FILL: protocol number>>` |
| Document number | `<<FILL: e.g. TMF-PLAN-001>>` |
| Version | `<<FILL: e.g. 1.0>>` |
| Effective date | `<<FILL: date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Sponsor | `<<FILL: SPONSOR NAME>>` |
| Study / protocol | `<<FILL: protocol number and title>>` |
| TMF owner | `<<FILL: role, e.g. TMF Lead>>` |

## 1. Purpose and scope

This plan governs the Trial Master File for study `<<FILL: protocol number>>`. It defines the TMF structure, how documents are filed and quality-controlled, how completeness, timeliness, and quality are measured, and how the file is transferred and archived. The TMF is the evidence that the trial was conducted per the protocol, ICH E6 Good Clinical Practice, and applicable regulation. If a document is not in the TMF, it is treated as if the activity did not happen.

Scope covers both halves of the file: the **Sponsor TMF** held by `<<FILL: sponsor or CRO>>` and the **Investigator Site File (ISF)** held at each site. It covers all essential documents from study start-up through archiving.

## 2. Roles and responsibilities (RACI)

| Role | Responsibility |
|---|---|
| Sponsor | Accountable for the TMF even when a CRO runs it; owns oversight and final archiving. Accountability cannot be delegated, only activity. |
| TMF Lead / Manager | Owns this plan and the study TMF Index; runs metrics and periodic reviews; manages remediation; inspection point of contact. |
| TMF Coordinator / Document Specialist | Day-to-day capture, classification, indexing, first-line QC. |
| Clinical Operations / CRA (monitor) | Files monitoring documents; performs ISF reconciliation at site. |
| Clinical QA | Independent oversight; audits the TMF process; verifies QC effectiveness. Not the people who file. |
| CRO / vendors | File documents under contract; transfer TMF segments back cleanly. |
| Investigator and site staff | Maintain the ISF; file site-level documents; keep delegation and training current. |

The non-negotiable control: the people who QC documents are independent of the people who file them.

## 3. TMF structure and the study TMF Index

The TMF is structured on the `<<FILL: reference model name and version, e.g. CDISC/DIA TMF Reference Model v3.x>>`. State the version, because artifact numbering shifts between versions and a mismatch causes mis-filing.

The **study TMF Index** is the tailored expected-document list. It is produced by:

1. Starting from the current reference model as the master artifact list.
2. Removing artifacts that cannot apply to this trial, each with a documented exclusion rationale (not a silent drop).
3. Adding study-specific artifacts the model handles thinly (for example eConsent validation evidence, decentralized vendor oversight, wearable data agreements).
4. Setting the expected count and level for each artifact: trial, country, or site.
5. Mapping the responsible role for each artifact.

The study TMF Index is maintained at `<<FILL: location/system>>` and is the denominator for completeness metrics.

## 4. Filing and QC process

| Step | What happens | Who |
|---|---|---|
| Capture | Receive the document; for paper, scan to a verified true-copy standard | TMF Coordinator |
| Classify / index | Assign artifact type and metadata (site, country, document date, version, language) | TMF Coordinator |
| Set document date | The date the document was effective or signed, not the scan date | TMF Coordinator |
| QC | Second-person check of legibility, classification, version, signatures, dates | Independent QC reviewer |
| Finalize | Move to Final/Approved status | QC reviewer |
| Reconcile | Mark the expected-list placeholder satisfied | TMF Coordinator |
| Exception | File a dated rationale or missing-document note where a document is absent or delayed | TMF Coordinator |

Timeliness targets, measured from the trigger event to the file date, are set by document tier:

| Tier | Examples | Target (set per organisation) |
|---|---|---|
| Critical / safety | SAE reports, IRB/IEC approvals, regulatory approvals | `<<FILL: e.g. within 3 business days>>` |
| Standard oversight | Monitoring visit reports, training records | `<<FILL: e.g. within 10 business days>>` |
| Routine | Administrative correspondence | `<<FILL: e.g. end of month>>` |

## 5. Metrics

Three live metrics are reported at `<<FILL: cadence, e.g. monthly>>`:

- **Completeness** = filed expected documents / total expected documents, weighted by criticality so a missing IRB approval is not scored equal to a missing administrative letter.
- **Timeliness** = documents filed within target / documents filed, tied to the ALCOA+ contemporaneous principle.
- **Quality** = QC first-pass rate and misclassification rate from risk-based QC sampling.

Targets: `<<FILL: e.g. completeness >=95%, critical timeliness >=98%, QC first-pass >=90%, misclassification <2%>>`. Metrics that are reported but not acted on are worse than no metrics, so each below-target item carries an owner and an action.

## 6. Risk-based QC sampling

- 100% QC for highest-risk artifacts: informed consent versions, IRB/IEC approvals, regulatory approvals, delegation logs, safety reports.
- Defined-size sampling for medium-risk routine documents, with an acceptance limit that triggers a 100% review of that artifact type or site when exceeded.
- Sample size, acceptance limit, result, and any triggered action are recorded for each sampling event.

## 7. Periodic TMF review

Scheduled reviews at: start-up complete, first patient in, a recurring cadence of `<<FILL: e.g. quarterly>>`, database lock, and pre-inspection. Each review checks completeness, timeliness trends, open placeholders, and quality sampling, and produces a documented report with actions, owners, and closure dates. See the companion checklist for the review itself.

## 8. Hybrid handling, transfer, and archiving

- **Hybrid**: where paper and electronic coexist, the master copy location is recorded per artifact and the boundary is controlled by `<<FILL: SOP-ID>>`.
- **Transfer** (CRO change or in-housing): run as a controlled, dual-signed project. Freeze the source, agree the index mapping, export with metadata and audit trail intact, verify counts and a risk-based content sample (100% for high-risk artifacts), reconfigure the expected-document list, close every exception, and sign off.
- **Archiving and retention**: retain for the longest applicable period. Under EU CTR (EU) No 536/2014, Article 58 (archiving), this is at least 25 years after the end of the trial; US 21 CFR 312.62 ties retention to 2 years after marketing approval or IND discontinuation. Use a durable format (PDF/A or equivalent), preserve the audit trail as part of the record, and plan migration if the system is decommissioned.

## 9. Acceptance criteria for this plan

A reviewer who has never seen the study can predict, for any document type, where it goes, who files it, by when, and how it is QC'd. The reference-model version is stated, exclusions are documented, the expected list drives completeness, and transfer and archiving are defined.

## 10. References

> ICH E6(R2) Good Clinical Practice, Section 8 (Essential Documents); ICH E6(R3) (Principles and Annex 1 Step 4 January 2025; Annex 2 Step 4 3 June 2026).
> 21 CFR Part 11 (electronic records and signatures); 21 CFR 312.57, 312.58, 312.62.
> EU GMP Annex 11 (computerised systems); Clinical Trials Regulation (EU) No 536/2014, Articles 57 (TMF contents and accessibility) and 58 (archiving).
> CDISC/DIA TMF Reference Model (state the version used).

Confirm the current version and clause numbers of each reference before issue.

## 11. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 12. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (TMF Lead) | `<<FILL>>` | | |
| Reviewer (Clinical QA) | `<<FILL>>` | | |
| Approver (Sponsor) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the metrics section completed for an example study at one reporting point. Company, study, and numbers are illustrative; replace with your own.

| Metric | Trial-level | Site avg | Target | Status / action |
|---|---|---|---|---|
| Completeness (criticality-weighted) | 96% | 93% | >=95% | Watch sites 04, 11; owner TMF Lead; action by 30 Jul |
| Timeliness (critical) | 98% | 97% | >=98% | Site 11 two late IRB filings; CAPA opened |
| QC first-pass rate | 91% | 89% | >=90% | Coordinator refresher on artifact coding |
| Misclassification rate | 1.8% | 2.4% | <2% | 100% review of monitoring reports at site 04 triggered |
| Overdue placeholders | 14 open | n/a | trend down | Each assigned an owner and expected date |

In this example completeness looks acceptable at 96%, but the criticality weighting and the site breakdown surface two sites with late IRB filings, which is where the real risk sits. The plan turns that into named actions with dates rather than a percentage on a slide.

## Common inspection findings this plan prevents

- No documented TMF Plan or expected-document list, so there is no defensible completeness denominator.
- Reference-model version not stated, causing mis-filing after a migration or CRO change.
- Metrics reported for months with no remediation.
- Empty placeholders with no rationale, indistinguishable from lost documents.
- Transfer between systems that loses metadata and audit trail, never formally closed.

## How to adapt this plan

1. Set your document number, sponsor, study, and TMF owner in the header.
2. State the exact reference-model version and attach or reference the study TMF Index.
3. Set your real timeliness targets and metric thresholds; do not ship the placeholders.
4. Point the SOP cross-references to your real filing, deviation, and retention procedures.
5. Confirm every regulation in section 10 against the current published version before issue.
