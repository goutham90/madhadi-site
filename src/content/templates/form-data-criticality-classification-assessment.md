---
title: "Form: Data Criticality and Risk Classification Assessment"
description: "A plug-and-play assessment form to classify one GxP record stream by criticality and residual data integrity risk, record the controls and priority band, and map the result to a required control depth, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-22
docType: "Form"
pillar: "data-integrity"
relatedArticles: ["data-criticality-and-data-risk"]
tags: ["data integrity", "data criticality", "data risk", "form", "assessment", "audit trail", "risk-based"]
tier: "Intermediate"
---

This is a ready-to-use assessment form for classifying one GxP record stream. Complete one form per stream and attach it to your data governance file. Replace every `<<FILL: ...>>` placeholder. A worked filled specimen follows. This form supports the [SOP: Data Criticality and Data Risk Classification](/templates/sop-data-criticality-classification). Verify each cited regulation against the current source before you rely on it.

## Field definitions

| Field | Format | Required | Who completes | When |
|---|---|---|---|---|
| Record stream | Text (defined output) | Yes | Process / data owner | At classification |
| System / instrument | Text | Yes | System owner | At classification |
| Generation method | Electronic / hybrid / paper | Yes | System owner | At classification |
| Decision supported | Text | Yes | Process owner | At classification |
| Criticality | High / Medium / Low + rationale | Yes | Owner, QA-reviewed | At classification |
| Inherent risk | High / Medium / Low + rationale | Yes | System owner / SME | At classification |
| Controls present | List | Yes | System owner / IT | At classification |
| Residual likelihood | High / Medium / Low | Yes | SME, QA-reviewed | At classification |
| Priority band | Critical / High / Medium / Low | Yes | Derived | At classification |
| Required control depth | Text | Yes | QA | At classification |
| Owner / approver | Name, date | Yes | Owner and QA | At approval |
| Next review | Trigger + date | Yes | QA | At approval |

## Assessment record (blank)

| Field | Entry |
|---|---|
| Record stream | `<<FILL>>` |
| System / instrument | `<<FILL>>` |
| Generation method | `<<FILL: electronic / hybrid / paper>>` |
| Data of record location | `<<FILL>>` |
| Decision supported | `<<FILL>>` |
| Criticality (+ rationale) | `<<FILL: High/Medium/Low, why>>` |
| Inherent risk (+ rationale) | `<<FILL: High/Medium/Low, why>>` |
| Controls present | `<<FILL: logins, RBAC, audit trail + review freq, locked method, transfer, second check, time sync, backup>>` |
| Residual likelihood | `<<FILL: High/Medium/Low>>` |
| Priority band | `<<FILL: Critical/High/Medium/Low>>` |
| Required control depth | `<<FILL: audit-trail review frequency, access model, raw-data retention, validation rigor>>` |
| Optional numeric score (C x L) | `<<FILL: e.g. 4 x 2 = 8>>` |
| Owner (name, date) | `<<FILL>>` |
| QA approver (name, date) | `<<FILL>>` |
| Next review (trigger + cycle) | `<<FILL>>` |

## Priority matrix (reference)

| | Low residual likelihood | Medium | High |
|---|---|---|---|
| High criticality | Medium priority | High priority | Critical priority |
| Medium criticality | Low priority | Medium priority | High priority |
| Low criticality | Low priority | Low priority | Medium priority |

## Acceptance criteria

- Criticality and residual risk are scored separately, each with a rationale.
- The controls are listed and residual (not inherent) risk drives the band.
- The band maps to a specific, named control depth.
- The owner proposed and QA approved; the form is dated and under change control.
- A review trigger and cycle are set.

## References

> MHRA GxP Data Integrity Guidance (March 2018); PIC/S PI 041; FDA Data Integrity Q&A (December 2018); EU GMP Annex 11; 21 CFR Part 11; ICH Q9.

Confirm the current version before you rely on it.

## Retention

Retain with the data governance records for not less than `<<FILL: retention period>>`.

---

## Filled specimen

Two completed rows on the same dial, so the contrast is visible. Illustrative.

| Field | Stream A | Stream B |
|---|---|---|
| Record stream | Finished-product HPLC assay (release) | Dispensing balance weighment |
| System / instrument | Chromatography data system | Calibrated balance + paper ticket |
| Generation method | Electronic, auto-transfer to LIMS | Hybrid: print, transcribe, verify |
| Decision supported | Batch disposition / CoA | Batch formulation |
| Criticality | High (drives release) | High (wrong weight, wrong dose) |
| Inherent risk | High (configurable, manipulable) | Medium-High (transcription, ticket can be reprinted) |
| Controls present | Logins, segregated admin, locked method, audit trail reviewed per run, time sync, LIMS | Ticket retained as raw data, contemporaneous second-person verification, ticket attached to batch record |
| Residual likelihood | Low-Medium | Low-Medium |
| Priority band | Critical / High | High |
| Required control depth | 100% audit-trail review per release run; controlled reprocessing; periodic DI self-audit | Retain printout as raw data; second-person verification; missing/reprinted ticket is a deviation; no audit-trail review (no audit trail exists) |
| Numeric score (C x L) | 4 x 3 = 12 | 4 x 2 = 8 |
| Owner / QA | Lab system owner / QA, dated | Production / QA, dated |
| Next review | Annual or on CDS change | Annual or on process change |

Both streams are high-criticality, but they need different controls: the CDS needs audit-trail review because its risk is electronic manipulation, while the balance needs raw-data retention and a second check because its risk is transcription. The form makes that reasoning explicit and approvable.

## Common inspection findings this form prevents

- A final score with no rationale, so the classification cannot be defended.
- Inherent risk recorded but the controls and residual conclusion missing.
- A priority band that maps to nothing concrete.
- No QA approval or no review trigger, so the classification is treated as no classification.

## How to adapt this form

1. Complete one form per record stream from your inventory.
2. Score criticality and residual risk separately, each with a rationale.
3. List the controls and map the band to a named control depth.
4. Have the owner propose and QA approve, date it, and set the review trigger.
