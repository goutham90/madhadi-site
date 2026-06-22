---
title: "SOP: Data Criticality and Data Risk Classification"
description: "A plug-and-play standard operating procedure for classifying GxP record streams by criticality and residual data integrity risk, then right-sizing controls and audit-trail review frequency to the result, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-22
docType: "SOP"
pillar: "data-integrity"
relatedArticles: ["data-criticality-and-data-risk"]
tags: ["data integrity", "data criticality", "data risk", "risk-based", "SOP", "MHRA", "audit trail"]
tier: "Intermediate"
---

This is a ready-to-use SOP for classifying GxP data by criticality and risk and right-sizing controls to the result. Replace every `<<FILL: ...>>` placeholder, set your document numbers and dates, and route it through document control. A worked filled specimen follows. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Data Criticality and Data Risk Classification |
| Document number | `<<FILL: SOP-ID, e.g. SOP-DI-007>>` |
| Version | `<<FILL>>` |
| Effective date | `<<FILL>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Data Integrity Lead>>` |

## 1. Purpose

Define how `<<FILL: COMPANY NAME>>` classifies GxP record streams by data criticality (the consequence of the record being wrong) and data integrity risk (the likelihood it is wrong, missing, or manipulated after controls), and how that classification sets the depth of controls, so effort lands where impact and probability of error are highest.

## 2. Scope

Applies to all GxP record streams generated, modified, or stored at the sites in the header, including paper, hybrid, and electronic data across laboratory, manufacturing, and quality systems. Classification is performed at the record-stream level, not the individual value.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Process / data owner | Provides the inventory and data flow, proposes criticality, identifies touchpoints. |
| System owner / SME | Describes generation method, configurability, and technical controls; assesses inherent and residual risk. |
| Quality Assurance | Owns the methodology and scale anchors, challenges and approves classifications, ensures consistency. |
| IT / automation | Confirms technical controls (access, audit trail, time sync, interfaces, backup). |
| Validation | Translates the classification into validation scope and rigor. |

## 4. Definitions

- **Record stream**: a defined output from a process or system (for example, HPLC assay results for release).
- **Data criticality**: the consequence of the record being wrong, driven by the decision it supports.
- **Inherent risk**: vulnerability to error or manipulation as generated, before controls.
- **Residual risk**: vulnerability after the controls in place are credited.

## 5. Procedure

### 5.1 Inventory the data and define the streams

Build or update the data inventory / flow map. For each stream, capture the source system, generation method, data flow and where the data of record lives, and the decision it feeds. Record on the data stream inventory `<<FILL: log number>>`.

### 5.2 Score criticality

Rate the consequence of the record being wrong against the anchored scale.

| Criticality | Definition | Examples |
|---|---|---|
| High | Drives batch disposition, dose, sterility assurance, stability claim, or clinical-safety decision; on a submission or CoA | HPLC assay for release, sterility result, dispensing weighments, stability data |
| Medium | Supports a quality decision indirectly, or verifies a high-criticality activity | In-process pH, line clearance, calibration, training records |
| Low | Informational, supporting, or non-GMP | Non-product facility trend logs, non-GMP R&D data |

### 5.3 Assess inherent risk (before controls)

Score vulnerability as generated, ignoring controls: generation method (electronic, hybrid, paper), manipulability (fixed display vs. configurable software), human touchpoints (transcriptions, manual calculations), and complexity (systems crossed).

### 5.4 Evaluate controls and derive residual risk

List the controls on the stream (unique logins, role-based access, audit trail enabled and reviewed, locked validated methods, automated transfer, second-person verification, time sync, backup) and reduce inherent risk to a residual likelihood. Use the matrix.

| | Low residual likelihood | Medium | High |
|---|---|---|---|
| High criticality | Medium priority | High priority | Critical priority |
| Medium criticality | Low priority | Medium priority | High priority |
| Low criticality | Low priority | Low priority | Medium priority |

### 5.5 Set the control depth (right-sizing)

| Priority band | Expected controls |
|---|---|
| Critical / High | Audit trail reviewed at high frequency (e.g. each release run), unique logins, segregated admin, locked validated methods, automated transfer where feasible, periodic DI review, time-source control |
| Medium | Audit trail enabled with risk-based (less frequent) review, access control, second-person review, periodic check |
| Low | Good documentation practice, standard backup, proportionate access; intensive audit-trail review not required |

Where a stream has no audit trail (a simple instrument or paper), the controlling measure is raw-data retention and second-person verification, not audit-trail review.

### 5.6 Document, approve, feed downstream

Record each classification on the assessment form `<<FILL: form number>>`, signed by the owner/SME and approved by QA. Feed the output into validation scope, the audit-trail review SOP, and the periodic review schedule.

### 5.7 Review on trigger and on cycle

Re-assess on a system change, process change, deviation or inspection finding implicating the data, or on a periodic cycle: commonly annual for high-criticality streams, longer for low.

## 6. Acceptance criteria

- Every GxP record stream is inventoried and classified; nothing is unclassified.
- Criticality and risk are scored separately, each with a written rationale.
- Residual risk (not inherent) drives the control decision, with the controls shown.
- The scale is anchored so two assessors reach the same tier.
- Each classification traces to a specific control depth (audit-trail review frequency, access model, validation rigor).
- QA approved, dated, under change control, and reviewed on trigger and cycle.

## 7. Records generated

- Data stream inventory (`<<FILL: log number>>`).
- Data criticality and risk classification assessment per stream (`<<FILL: form number>>`).

## 8. References

> MHRA "GxP Data Integrity Definitions and Guidance for Industry" (March 2018).
> PIC/S PI 041, Good Practices for Data Management and Integrity.
> WHO TRS 996 Annex 5, Good Data and Record Management Practices.
> FDA "Data Integrity and Compliance With Drug CGMP, Questions and Answers" (December 2018).
> EU GMP Annex 11 (paragraph 1, risk management) and Chapter 4; 21 CFR Part 11; ICH Q9.

Confirm the current version and clause numbers before issue.

## 9. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL>>` | `<<FILL>>` | Initial issue. |

## 10. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (QA) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the procedure applied to one stream, so you can see the expected detail. Illustrative.

**Stream:** Finished-product HPLC assay (release), chromatography data system, auto-transfer to LIMS.

| Step | Outcome |
|---|---|
| Criticality (5.2) | High: drives release, printed on the CoA |
| Inherent risk (5.3) | High: configurable system, integration and clock can be altered by a privileged user |
| Controls (5.4) | Unique logins, segregated admin, locked validated method, audit trail reviewed each release run, time sync, LIMS interface |
| Residual likelihood | Low-Medium |
| Priority band | Critical / High |
| Control depth (5.5) | 100% audit-trail review per release run, no shared accounts, controlled reprocessing, periodic DI self-audit |
| Approval | Lab system owner proposed; QA challenged and approved; dated, under change control |

The same procedure applied to a non-product facility temperature trend (low criticality, electronic, fixed output) lands in the Low band: backup and access control, no routine audit-trail review. The model is what lets you defend treating the two differently to an inspector.

## Common inspection findings this SOP prevents

- No data inventory, so hybrid and spreadsheet streams are never classified.
- Criticality and risk collapsed into one hand-wave.
- Classification stopped at inherent risk, ignoring the controls actually operating (or crediting controls that exist only on paper).
- Audit-trail review applied flat or not at all, with no documented classification behind the choice.
- Classification done by IT alone with no QA challenge, or done once and never revisited.

## How to adapt this SOP

1. Set your document number, owner, and effective date.
2. Anchor the criticality and risk scales with your own examples per tier.
3. Point the records cross-references to your inventory log and assessment form.
4. Align the control-depth table with your audit-trail review SOP and validation procedure.
5. Confirm every regulation against the current published version before issue.
