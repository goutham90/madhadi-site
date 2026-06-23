---
title: "Template: Data Flow Map Worksheet"
description: "A plug-and-play worksheet to map one GxP data element step by step: system, format, manual or automated, criticality, where it can be altered or deleted, and the control at each step, so the result feeds data criticality and audit trail review scope, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-22
docType: "Template"
pillar: "data-integrity"
relatedArticles: ["building-a-gxp-data-flow-map", "data-criticality-and-data-risk"]
tags: ["data integrity", "data flow map", "data lifecycle", "audit trail", "data criticality", "GxP"]
tier: "Intermediate"
---

This is a ready-to-use worksheet to map how one GxP data element moves from creation to archive and to expose every point where it can be altered, deleted, or lost. Replace every `<<FILL: ...>>` placeholder with your own specifics, work the steps in order, and attach the completed worksheet to the system or process file it covers. A worked filled specimen follows the template so you can see how a completed version reads. Build the map with the people who actually move the data, not only from the SOP, because the workaround that never made it into the procedure is exactly the seam you are looking for. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Data Flow Map for `<<FILL: data element, e.g. finished-product assay result>>` |
| Document number | `<<FILL: WS-ID, e.g. DFM-DI-007>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Mapped by | `<<FILL: role, e.g. Data Integrity Lead>>` |
| Applies to | `<<FILL: system / process / site in scope>>` |

## 1. Purpose

This worksheet maps the full lifecycle of a single GxP data element at `<<FILL: COMPANY NAME>>` so that every place the data is created, changed, moved, reviewed, stored, and archived is visible, with the integrity vulnerability and the control recorded at each step. The output is used to set the data element's criticality and to scope which audit trails are reviewed routinely.

## 2. Scope

This worksheet covers one data element end to end, named in section 4, across every system and medium it passes through, including paper steps, spreadsheets, shared folders, and instrument-local storage. It does not map a system as a whole and it does not map every data element at once. Complete one worksheet per high-value data element. The criticality scoring it feeds is governed by `<<FILL: SOP-ID for data criticality classification>>` and the audit trail review program it scopes is governed by `<<FILL: SOP-ID for audit trail review>>`.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Data integrity / governance lead | Owns the method and the template, walks the flow with the process, and confirms the criticality-to-review linkage. |
| Process owner (lab, manufacturing, clinical) | Walks the real flow honestly, including workarounds, and confirms the map matches practice. |
| System owner / IT | Confirms access, transfer mechanisms, storage permissions, audit trail state, and archive controls at each step. |
| Quality Assurance | Approves the map and the controls it drives, and uses it in inspection defense. |

## 4. Scope the data element

Write one sentence that names the data and fixes its boundaries, then identify the decision it ultimately serves. Mapping a clearly bounded element is what keeps the worksheet finite and useful.

| Field | Entry |
|---|---|
| Data element | `<<FILL: e.g. the assay result for finished drug product>>` |
| Start point | `<<FILL: where the data is first created, e.g. acquisition on HPLC-07>>` |
| End point | `<<FILL: final resting state, e.g. archived certificate of analysis>>` |
| Decision served downstream | `<<FILL: e.g. batch disposition / release>>` |
| In scope | `<<FILL: what this map covers>>` |
| Out of scope | `<<FILL: what this map deliberately excludes>>` |

## 5. The step-by-step flow map

One row per data step. Walk the element forward and record every step and every transition, including the manual and informal ones. Use the lifecycle stage to anchor each row. Mark the vulnerability honestly: a step where a value can be changed with no record is a finding whether or not anyone has ever abused it.

| # | Lifecycle stage | System / location | Format (paper / electronic) | Manual or automated | Criticality | Vulnerability (where it can be altered, deleted, or orphaned) | Control in place |
|---|---|---|---|---|---|---|---|
| 1 | `<<FILL: Create / Modify / Transfer / Review / Store / Archive>>` | `<<FILL: system or medium and where it physically sits>>` | `<<FILL: paper / dynamic electronic / static PDF / flat file>>` | `<<FILL: manual / automated>>` | `<<FILL: High / Medium / Low>>` | `<<FILL: how this step could be altered, deleted, or lost; "none" only if truly none>>` | `<<FILL: what stops unauthorized change or loss; "gap" if none>>` |
| 2 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 3 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 4 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 5 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

How to fill the columns:

- **Lifecycle stage**: which of create, modify, transfer, review, store, archive this step is. Map the transitions (the transfers) as carefully as the stations, because transfers are where data gets hurt.
- **System / location**: name the real place the data sits, including an instrument local disk, a shared drive, or a paper form, not only the validated system of record.
- **Format**: paper, dynamic electronic, static PDF, or flat file. This drives the true-copy and readability questions later.
- **Manual or automated**: every manual transfer (a person copying, exporting, transcribing, emailing) is a candidate failure point; automated validated interfaces move data the same way every time.
- **Criticality**: how much the served decision depends on this step being right. Set it from what the data decides downstream, not from how new the system is.
- **Vulnerability**: the load-bearing column. State plainly where the value can be changed with no complete record (altered), removed with no surviving record (deleted), or fail to reach the next step so the record of record is incomplete (orphaned). "The system controls that" is not an answer; name the account and the permission.
- **Control in place**: what stops the vulnerability, or the word "gap" where nothing does. A gap becomes a remediation item, not a surprise in an audit.

## 6. Visual flow

Render the rows as a left-to-right flow so a reader sees the path and the branches at a glance. Keep the table as the detail and the diagram as the index into it. Replace the steps below with your own and show the real path, including any branch off the clean route.

<div class="flow">
  <div class="flow-step">`<<FILL: Create step>>`</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">`<<FILL: Transfer step>>`</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">`<<FILL: Review step>>`</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">`<<FILL: Store step>>`</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">`<<FILL: Archive step>>`</div>
</div>

## 7. What the map feeds

The map is not the destination. Record here how it drives the two decisions it exists to make.

| Output | Entry |
|---|---|
| Overall element criticality | `<<FILL: High / Medium / Low, set from the served decision>>` |
| Audit trails carrying this element's changes | `<<FILL: list the systems and trails that record changes to this data>>` |
| In routine audit trail review scope | `<<FILL: which of those trails are reviewed routinely, and the frequency>>` |
| Out of routine scope (lower risk) | `<<FILL: which trails are not, and why>>` |
| Remediation items (gaps) | `<<FILL: each control gap from section 5, with an owner and due date>>` |

The linkage runs in a clean line: map the element, set its criticality from what it decides downstream, identify which audit trails hold the critical data's changes, then scope routine review to those trails by exception. That chain is what makes the review boundary defensible when an inspector asks why some trails are reviewed routinely and others are not.

## 8. Acceptance criteria

A map is real, not decorative, when all of the following are true:

- It names the data element, not just the system, and follows it end to end.
- Every step is captured, including the manual transfers, spreadsheets, local instrument files, and paper steps the SOP does not mention.
- Each step states who can alter or delete the data and what stops them, with no "the system controls that" hand-waving.
- Every marked vulnerability has a control or a recorded gap; gaps are tracked as remediation, not smoothed over.
- The map links to the criticality decision and the audit trail review scope it drives.
- The map is under change control and is updated when a change touches the data flow.

## 9. References

> EU GMP Annex 11, computerized systems, and Chapter 4, documentation, for the lifecycle and system listing expectations.
> 21 CFR Part 11 (electronic records and signatures) and 21 CFR 211.68, 211.180, 211.194 for record controls.
> FDA guidance, Data Integrity and Compliance With Drug CGMP: Questions and Answers (final, December 2018), which ties controls to data criticality.
> MHRA GXP Data Integrity Guidance and Definitions (March 2018), which frames controls around the data lifecycle and asks where records can be created, amended, or deleted.
> PIC/S PI 041, Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments.
> ICH Q9, Quality Risk Management, for the risk basis behind criticality.

Confirm the current version and clause numbers of each reference before issue.

## 10. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 11. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Mapped by | `<<FILL>>` | | |
| Reviewer (process owner) | `<<FILL>>` | | |
| Approver (QA / Data Integrity) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the same worksheet completed for an example environmental monitoring reading, so you can see the level of detail an inspector expects and how a workaround surfaces. The company, system, and numbers are illustrative; replace them with your own.

**Scope of the element:**

| Field | Entry |
|---|---|
| Data element | The viable air-count result from an aseptic fill area |
| Start point | Plate read at the microbiology bench |
| End point | Archived in the LIMS micro module with the batch record |
| Decision served downstream | Batch disposition of a sterile drug product |
| In scope | Plate read through disposition input and archive |
| Out of scope | Trend reports built from the archived data |

**The step-by-step flow map:**

| # | Lifecycle stage | System / location | Format | Manual or automated | Criticality | Vulnerability | Control in place |
|---|---|---|---|---|---|---|---|
| 1 | Create | Paper worksheet at the bench | Paper | Manual | High | Count can be altered before entry; worksheet can be lost and never entered (orphaned) | GDocP: ink, single-line correction with initials; pre-numbered, controlled worksheet |
| 2 | Transfer | Paper to LIMS micro module | Paper to electronic | Manual transcription | High | A number can be mis-keyed or changed between paper and LIMS | Documented second-person verification of the entry |
| 3 | Modify | LIMS micro module | Dynamic electronic | Manual edits, automated capture | High | Analyst or admin can edit the count | Reason-for-change prompt on edit; audit trail captures old value, who, when, why |
| 4 | Review | LIMS micro module | Dynamic electronic | Manual | High | Reviewer could check only the LIMS value, not the paper original | Review opens the dynamic record and reconciles to the paper worksheet |
| 5 | Store | LIMS database | Dynamic electronic | Automated | High | Admin could alter or delete the stored record | Append-only audit table; admin segregation of duties |
| 6 | Archive | LIMS archive store | Static, read-only | Automated | Medium | Data could become unreadable or unrestorable over retention | Read-only archive, tested restore, retention 11 years |

**Visual flow:**

<div class="flow">
  <div class="flow-step">Plate read, count on paper worksheet</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Manual entry into LIMS micro module (later)</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Review against the paper original</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Store in LIMS</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Archive (read-only, 11y)</div>
</div>

**What the map fed:**

| Output | Entry |
|---|---|
| Overall element criticality | High (the reading feeds disposition of a sterile product) |
| Audit trails carrying changes | LIMS micro module audit trail |
| In routine review scope | LIMS micro audit trail for these counts, reviewed each disposition |
| Out of routine scope | Downstream trend reports (read-only, no decision dependence) |
| Remediation items | Paper-to-LIMS reconciliation moved into periodic review; controlled worksheet log added |

In this example the walk-through surfaced a paper workaround the SOP did not mention: when LIMS is slow at month-end the team records counts on paper first and enters them later. That single mapped element produced a criticality call, an audit trail review scope, and two concrete controls, and it caught a seam that a desk-built map would have missed. That is the whole point of the exercise.

## Common inspection findings this worksheet prevents

- A flow drawn from the SOP only, missing the spreadsheet, the local instrument file, or the paper step that everyone actually uses.
- A diagram of system boxes and interfaces that never follows an actual data element, so it answers none of the integrity questions.
- A "who can change this" column smoothed over with "the system controls that", hiding an admin account that can edit data and clear the trail.
- Audit trail review scope set by resourcing rather than by criticality, with no map to justify which trails are in and which are out.
- A map that was true once and never updated after a new interface or system upgrade rerouted the data.

## How to adapt this worksheet

1. Set your document number, owner, and effective date in the header, and name one bounded data element in section 4.
2. Walk the flow with the analyst, reviewer, and system admin, not from the SOP, and add one row per real step in section 5, including paper, spreadsheet, and instrument-local steps.
3. Push hard on the vulnerability and control columns; mark a gap honestly where no control exists and carry it to section 7 as a remediation item.
4. Use the criticality you set to scope audit trail review in section 7, and keep the rest out with a recorded reason.
5. Tie the worksheet to change control so a change that touches the data flow triggers an update, and confirm every regulation in section 9 against the current published version before issue.
