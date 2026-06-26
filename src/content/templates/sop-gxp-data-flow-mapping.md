---
title: "SOP: Building and Maintaining GxP Data Flow Maps"
description: "A plug-and-play standard operating procedure for building, reviewing, approving, and maintaining GxP data flow maps: scoping the element, walking the real flow, marking where data can be altered, deleted, or orphaned, and feeding the map into data criticality and audit trail review scope, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-26
docType: "SOP"
pillar: "data-integrity"
relatedArticles: ["building-a-gxp-data-flow-map"]
tags: ["data integrity", "data flow map", "data lifecycle", "audit trail", "data criticality", "SOP"]
tier: "Intermediate"
---

This is a ready-to-use SOP for the data flow mapping process itself: how to produce a map, who approves it, and how to keep it current when the flow changes. It pairs with the [Data Flow Map Worksheet](/templates/worksheet-data-flow-map), which is the fill-in tool a mapper uses for one element; this procedure governs the program around those worksheets. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed control record reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Building and Maintaining GxP Data Flow Maps |
| Document number | `<<FILL: SOP-ID, e.g. SOP-DI-021>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Data Integrity Lead>>` |
| Applies to | `<<FILL: sites / departments in scope>>` |

## 1. Purpose

This procedure defines how `<<FILL: COMPANY NAME>>` builds, reviews, approves, and maintains data flow maps for GxP data so that every point where a record can be altered, deleted, or orphaned is identified and controlled. The map is the artifact that ties the system inventory, the data criticality assessment, and the audit trail review scope into one defensible line of reasoning.

## 2. Scope

This procedure applies to GxP data elements handled by computerized and hybrid (paper plus electronic) systems within the sites listed in the header, including laboratory, manufacturing, and quality systems. It covers the full data lifecycle: create, modify, transfer, review, store, and archive. It does not replace the system inventory (`<<FILL: SOP-ID for system inventory>>`) or the data criticality assessment (`<<FILL: SOP-ID for data criticality>>`); it consumes both and feeds the audit trail review program.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Data integrity / data governance lead | Owns this procedure, the map template, and consistency across maps; confirms the criticality-to-review linkage is drawn. |
| Process owner (lab, manufacturing, clinical) | Walks the real flow honestly, including workarounds; keeps the map true to current practice. |
| System owner | Confirms a current map exists for data their system handles; raises a map update when their system changes. |
| IT / system administrator | Provides accurate input on access, transfer mechanisms, storage permissions, and archive controls. |
| Quality Assurance | Approves the map and the controls it drives; uses it in inspection defense. |
| Validation | Confirms the mapped flow matches the validated state; flags drift after change. |

## 4. Definitions

- **Data flow map**: a traced path of one defined GxP data element across its lifecycle, recording at each step where the data sits, who can change it, how it moves, and what control protects it.
- **Data element**: the unit being mapped (a result, a batch record entry, an environmental reading), not the system it passes through.
- **Vulnerability point**: a transition or step where data can be altered, deleted, or orphaned without a complete, protected record.
- **Orphaned data**: data that exists in one location but never reaches the next, so the official record is incomplete (for example an instrument run that never reaches the LIMS).

## 5. Procedure

### 5.1 Prioritize what to map

You cannot map everything at once. Drive the backlog from the system inventory and the data criticality assessment: map the highest-criticality data elements first (release results, batch disposition inputs, sterility data, data integrity hot spots from prior findings). Record the mapping backlog and its priority order in `<<FILL: location of backlog>>`. Target a defined coverage milestone, for example all high-criticality elements mapped within `<<FILL: timeframe>>`.

### 5.2 Scope one element

Write one sentence naming the data and its boundaries, for example "the assay result for finished drug product, from acquisition on the HPLC through to the released certificate of analysis and its archive." Decide what is in and what is out. One element, end to end, then the next.

### 5.3 Walk the real flow with the people who do the work

Do not draw the map from the SOP at a desk. Sit with the analyst, the reviewer, and the system administrator and walk the data from source to archive, asking at every step: where does it go next, who can touch it, and what do you do when the normal path fails. The failure paths and workarounds are where the worst seams hide and are the reason this step is mandatory.

### 5.4 Record each step in the worksheet

Use the [Data Flow Map Worksheet](/templates/worksheet-data-flow-map) to capture, for every stage and transition: step, location and system, format, who can read, who can modify or delete, audit trail status at that step, transfer mechanism, and the control in place. Push hard on the "who can modify or delete" column; "the system controls that" is not an acceptable entry.

### 5.5 Draw the visual flow and mark the vulnerability points

Render the rows as a left-to-right flow so a reader sees the path and the boundaries at a glance. Then tag every transition against the three failure modes using the standard marks below, so a reader can scan the map and immediately find the points that carry risk.

| Mark | Failure mode | Meaning |
|---|---|---|
| A | Can be altered | A value can be changed without a complete record of the change |
| D | Can be deleted | A record can be removed without a surviving, protected record of the deletion |
| O | Can be orphaned | Data can exist in one place and never reach the next, leaving the official record incomplete |

### 5.6 Attach a control and residual risk to every mark

For each marked vulnerability, record the control that addresses it and the residual risk after the control. Where no adequate control exists, the residual risk entry says so, and that line becomes a remediation item routed per `<<FILL: SOP-ID for CAPA / remediation>>`.

### 5.7 Feed criticality and audit trail review scope

Use the finished map to confirm or set the data element's criticality from what the data decides downstream, then identify which audit trails hold the critical data's changes and scope routine audit trail review to those trails by exception. Record the resulting review scope on the [Audit Trail Review Scope Determination](/templates/form-audit-trail-review-scope-determination) record and reference it from the audit trail review SOP (`<<FILL: SOP-ID for audit trail review>>`).

### 5.8 Review and approve

1. The process owner confirms the map reflects current practice including workarounds.
2. IT confirms the access, transfer, and storage entries are accurate.
3. QA reviews the marks, controls, and residual risks and approves the map.
4. The approved map is version-controlled and stored in `<<FILL: location / system>>`.

### 5.9 Keep it current under change control

Tie the map to change control (`<<FILL: SOP-ID for change control>>`) so that any change touching data flow (a new interface, a system upgrade, a process change, a new instrument) triggers a map update. Review each map on a periodic cycle of not more than `<<FILL: interval, e.g. 24 months>>`, and on any change that reroutes the data. An out-of-date map is worse than none, because it asserts a flow that no longer exists.

## 6. Acceptance criteria

A data flow map is acceptable when all of the following are true:

- It names a data element, not just a system, and traces it end to end across all six lifecycle stages.
- Every transfer step is shown, including the manual, informal, and workaround paths.
- Each step identifies who can alter or delete the data and what stops them.
- Every alter, delete, and orphan point is marked, with a control and a residual risk attached.
- The map links to the criticality decision and to the audit trail review scope it drives.
- The map is reviewed and approved, version-controlled, and current with the live flow.

## 7. Records generated

- Data flow map (per element), with vulnerability marks and controls.
- Mapping backlog and coverage status.
- Audit trail review scope determination derived from the map.
- Map review and approval record; periodic review record.

## 8. References

> EU GMP Annex 11 (computerised systems), including the system inventory expectation in clause 4.3 and the data integrity lifecycle principle. (A substantially expanded draft revision was issued for consultation on 7 July 2025; confirm the in-force version before issue.)
> 21 CFR Part 11 (electronic records and signatures); 21 CFR 211.68, 211.194.
> FDA Data Integrity and Compliance With Drug CGMP: Questions and Answers (final, December 2018).
> MHRA GxP Data Integrity Guidance and Definitions (March 2018).
> PIC/S PI 041, Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments.
> ICH Q9, Quality Risk Management (for the risk-based prioritization and criticality linkage).

Confirm the current version and clause numbers of each reference before issue.

## 9. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 10. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (Process owner) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows a completed map-control record for one element, so you can see the level an inspector expects. The company, system, and details are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Data element | Viable air count from aseptic fill area, from plate read to disposition input and archive |
| Mapping priority basis | High criticality: reading feeds disposition of a sterile product |
| Flow walked with | Microbiologist, micro reviewer, LIMS administrator (workaround surfaced: month-end counts recorded on paper worksheet first, entered to LIMS later) |
| Vulnerability marks | Paper worksheet: A (count changeable before entry) and O (worksheet could be lost, LIMS record then incomplete). Paper-to-LIMS transcription: A (mis-entry or change between paper and LIMS) |
| Controls attached | Transcription: documented second-person verification. Orphan risk: pre-numbered worksheet log reconciled against LIMS entries at month-end. Residual risk: low and explainable |
| Criticality set | High |
| Audit trail review scope driven | LIMS micro audit trail for these counts placed in routine review; paper-to-LIMS reconciliation placed in periodic review |
| Map approved (name, date) | QA: R. Gomez, signed, 25 June 2026 |
| Next periodic review due | 25 June 2028, or on change to the EM data flow |

In this example one mapped element produced a criticality call, an audit trail review-scope decision, and two concrete controls, and it surfaced a paper workaround the SOP did not mention. That is exactly what a working map is supposed to do.

## Common inspection findings this SOP prevents

- A data flow "map" that diagrams system boxes and interfaces but never follows an actual data element end to end.
- A map drawn from the SOP that misses every workaround, so the inspector finds the manual export the map never showed.
- A map with no "who can modify or delete" detail, the one column that drives most integrity risk.
- A map that exists for an audit but does not feed criticality or audit trail review scope, so it is a prop, not a control.
- Stale maps that describe a flow two upgrades out of date.

## How to adapt this SOP

1. Set your document number, owner, and effective date in the header.
2. Point the cross-references in sections 5.1, 5.6, 5.7, and 5.9 to your real inventory, criticality, CAPA, audit trail review, and change control procedures.
3. Set your mapping backlog location and coverage milestone in 5.1.
4. Set your periodic review interval in 5.9 to match your risk policy.
5. Confirm every regulation in section 8 against the current published version, including the in-force status of Annex 11, before issue.
