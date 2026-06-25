---
title: "SOP: TMF Document Filing, Indexing, and Quality Control"
description: "A plug-and-play SOP for capturing, classifying, dating, QC-ing, and reconciling essential documents into an eTMF, with true-copy and exception handling, a filled specimen, and the GCP and Part 11 basis it satisfies."
pubDate: 2026-06-25
docType: "SOP"
pillar: "clinical-gcp"
relatedArticles: ["etmf-trial-master-file"]
tags: ["TMF", "eTMF", "SOP", "clinical-gcp", "ICH E6", "21 CFR Part 11", "document-control"]
tier: "Intermediate"
---

This is a ready-to-use SOP for the day-to-day filing process behind a Trial Master File. Replace every `<<FILL: ...>>` placeholder with your own specifics and route it through document control. A filled specimen follows the template. Verify each cited regulation against the current source before you rely on it. This is general guidance to adapt, not legal or regulatory advice.

## Document control header

| Field | Entry |
|---|---|
| Document title | TMF Document Filing, Indexing, and Quality Control |
| Document number | `<<FILL: e.g. SOP-CLIN-021>>` |
| Version | `<<FILL: e.g. 1.0>>` |
| Effective date | `<<FILL: date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. TMF Lead>>` |
| Applies to | `<<FILL: studies / sites in scope>>` |

## 1. Purpose

This procedure defines how `<<FILL: COMPANY NAME>>` captures, classifies, dates, quality-controls, and reconciles essential documents into the electronic Trial Master File so the file is inspection-ready continuously rather than reconstructed before an audit. It supports the controlling TMF Management Plan, `<<FILL: TMF-PLAN-ID>>`.

## 2. Scope

Applies to all essential documents filed into the eTMF for the studies listed in the header, sponsor TMF and Investigator Site File copies, paper-origin and electronic-origin documents. It does not define the study expected-document list, which is set in the TMF Management Plan.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| TMF Coordinator | Captures, classifies, indexes, sets document dates, files; performs first-line QC where permitted (not on documents they indexed). |
| Independent QC reviewer | Performs second-person QC of legibility, classification, version, signatures, and dates. |
| TMF Lead | Owns the study TMF Index and metrics; resolves classification disputes; manages remediation. |
| Clinical QA | Verifies QC effectiveness independently; does not perform the filing. |

The QC reviewer must be a different person from the one who indexed the document.

## 4. Definitions

- **Artifact**: a defined essential-document type in the reference model and the study TMF Index.
- **Document date**: the date the document was effective or signed, distinct from the filing date recorded by the system audit trail.
- **True copy**: a copy verified to reproduce the original completely and accurately, with the same content and meaning, so it can replace a paper original.
- **Placeholder**: the expected-list slot for a document; an empty placeholder with no rationale is treated as a gap.

## 5. Procedure

### 5.1 Capture

1. Receive the document (signed PDF, wet-ink scan, validated system export).
2. For paper, scan to the true-copy standard: full page, legible, all annotations and signatures captured, color where color carries meaning.
3. Verify the scan against the original and record the true-copy verification before any original is destroyed per `<<FILL: retention/destruction SOP-ID>>`.

### 5.2 Classify and index

1. Assign the artifact type from the study TMF Index.
2. Enter metadata: site number, country, version, language, and sub-artifact where relevant.
3. Where the correct artifact is unclear, escalate to the TMF Lead rather than guessing; misclassification is a common and costly error.

### 5.3 Set the document date

1. Set the document date to the effective or signature date on the document.
2. Do not use the scan or upload date. The system records the filing event separately in the audit trail.

### 5.4 QC (second person)

For each document the QC reviewer confirms:

1. Legible and complete (all pages, signatures, and dates present).
2. Correct artifact classification.
3. Correct and current version (no superseded ICF or sample CRF masquerading as current).
4. Document date accurate.
5. Metadata complete.

QC pass or reject is recorded. Rejects route back with a reason and are re-QC'd after correction.

### 5.5 Finalize and reconcile

1. Move the QC-passed record to Final/Approved status.
2. Mark the expected-list placeholder satisfied so any remaining gap is visible.

### 5.6 Exceptions

1. Where a document genuinely does not exist, file a dated "not applicable" rationale.
2. Where a document is delayed, file a dated "missing document" note stating why and the expected date.
3. Never leave a silent empty placeholder.
4. Never close a gap by back-dating; use a current-dated note explaining the historical situation.

## 6. Acceptance criteria

A single filed record is acceptable when all are true: correct artifact classification; correct and current version; legible and complete; accurate document date; QC passed by an independent second person; filed within the timeliness target; metadata complete; audit trail intact.

## 7. Records generated

- TMF QC record (section 9).
- True-copy verification record.
- Exception / missing-document notes.

## 8. References

> ICH E6(R2) Good Clinical Practice, Section 8; ICH E6(R3).
> 21 CFR Part 11 (electronic records and signatures); 21 CFR 312.62.
> EU GMP Annex 11; Clinical Trials Regulation (EU) No 536/2014, Articles 57 (TMF contents and accessibility) and 58 (archiving).
> ALCOA+ contemporaneous principle (MHRA / PIC/S PI 041 data integrity guidance).

Confirm the current version and clause numbers of each reference before issue.

## 9. Record generated: TMF QC record

| Field | Entry |
|---|---|
| Document / artifact | `<<FILL: artifact name>>` |
| Site / country | `<<FILL>>` |
| Version | `<<FILL>>` |
| Document date | `<<FILL>>` |
| Indexed by | `<<FILL: name, date>>` |
| QC result | Pass / Reject (reason if reject) |
| QC reviewer (name, signature, date) | `<<FILL>>` |
| Placeholder reconciled | Yes / No |

## 10. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 11. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (QA) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows a QC record completed for an example document. Details are illustrative; replace with your own.

| Field | Entry |
|---|---|
| Document / artifact | Blank Informed Consent Form (Site 04, Spanish) |
| Site / country | Site 04 / Spain |
| Version | v3.0-ES (IRB-approved 2026-04-18) |
| Document date | 18 April 2026 |
| Indexed by | M. Alvarez, 21 April 2026 |
| QC result | Reject: prior version v2.0-ES was attached in error |
| QC reviewer | A. Patel, signed, 22 April 2026 |
| Placeholder reconciled | No, returned for re-filing with v3.0-ES |

In this example the QC reviewer caught a superseded consent version attached in place of the current IRB-approved one, which is exactly the high-severity error 100% ICF QC exists to catch. The document was rejected, re-filed with the correct version, and re-QC'd before the placeholder was reconciled.

## Common inspection findings this SOP prevents

- Superseded ICF or sample CRF filed as the current version.
- Document date set to the scan date, corrupting timeliness reporting.
- Misclassified documents that cannot be retrieved where they belong.
- True copies accepted without a documented verification.
- The same person filing and QC-ing, with no independent check.
- Empty placeholders with no rationale.

## How to adapt this SOP

1. Set your document number, owner, and effective date in the header.
2. Point the TMF Management Plan and deviation/retention cross-references to your real documents.
3. Match the QC fields to your eTMF's metadata configuration.
4. Confirm every regulation in section 8 against the current published version before issue.
