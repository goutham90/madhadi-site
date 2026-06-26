---
title: "Form: Audit Trail Review Scope Determination"
description: "A plug-and-play record that turns a data flow map and data criticality into a defensible audit trail review scope: which trails get routine review, which get periodic review, and which are out of scope, with the rationale an inspector asks for, a filled specimen, and the regulations it satisfies."
pubDate: 2026-06-26
docType: "Form"
pillar: "data-integrity"
relatedArticles: ["building-a-gxp-data-flow-map"]
tags: ["data integrity", "audit trail", "data flow map", "data criticality", "review by exception", "form"]
tier: "Intermediate"
---

This is a ready-to-use record that documents how you set the boundary of your audit trail review program from a data flow map and the data criticality it reveals. It answers the question an inspector asks first: why do you review some audit trails routinely and not others. Replace every `<<FILL: ...>>` placeholder with your own specifics, complete one record per data element or system, and reference it from your audit trail review SOP. A worked filled specimen follows the blank form. Verify each cited regulation against the current source before you rely on it.

## Why this record exists

Reviewing every audit trail entry in every system is impossible, and pretending otherwise produces fictional review records. The FDA 2018 data integrity Q&A scopes routine audit trail review to the data that matters most. This record is the bridge: the data flow map shows where high-criticality data flows and which trails record its changes; that intersection is your routine review scope. The record makes the boundary explicit and defensible instead of leaving it to "resourcing."

## Document control header

| Field | Entry |
|---|---|
| Record title | Audit Trail Review Scope Determination |
| Record number | `<<FILL: REC-ID>>` |
| Data element / system | `<<FILL: data element or system name and ID>>` |
| Source data flow map ref | `<<FILL: map document number and version>>` |
| Data criticality ref | `<<FILL: criticality assessment number>>` |
| Prepared by | `<<FILL: name, role>>` |
| Date | `<<FILL: date>>` |

## 1. Inputs

| Input | Entry |
|---|---|
| Data element mapped | `<<FILL: the element this scope covers>>` |
| Data criticality (High / Medium / Low) | `<<FILL: from criticality assessment>>` |
| What the data decides downstream | `<<FILL: e.g. batch release, internal trend only>>` |
| Systems the data passes through | `<<FILL: list, e.g. CDS, LIMS, archive>>` |
| Audit trails present along the flow | `<<FILL: list each trail and the system it belongs to>>` |

## 2. Scope determination

For each audit trail along the flow, decide its review tier from the criticality of the data whose changes it records. Use the default below and document the basis.

| Audit trail (system + content) | Records changes to | Data criticality | Review tier | Frequency | Basis |
|---|---|---|---|---|---|
| `<<FILL: e.g. CDS, result and re-integration trail>>` | `<<FILL: reportable result>>` | `<<FILL: High>>` | Routine | `<<FILL: each run before result use>>` | `<<FILL: feeds release>>` |
| `<<FILL: e.g. LIMS, sample login trail>>` | `<<FILL: sample identity>>` | `<<FILL: High>>` | Routine | `<<FILL: each batch>>` | `<<FILL: identity integrity>>` |
| `<<FILL: e.g. LIMS, configuration trail>>` | `<<FILL: system config>>` | `<<FILL: Medium>>` | Periodic | `<<FILL: at periodic review>>` | `<<FILL: change-controlled already>>` |
| `<<FILL: e.g. trend-only module>>` | `<<FILL: non-decision data>>` | `<<FILL: Low>>` | Out of scope (routine) | `<<FILL: covered at periodic review>>` | `<<FILL: no SISPQ decision>>` |

Default tiers:

| Data criticality | Default review tier | What it means |
|---|---|---|
| High | Routine, by exception | Reviewed each batch or run, before the result is used, using a validated filter that surfaces critical entries |
| Medium | Periodic | Reviewed on a defined periodic cadence (for example monthly or at periodic system review) |
| Low | Out of routine scope | Covered at periodic system review only; rationale recorded here |

## 3. Review-by-exception method (for routine trails)

| Field | Entry |
|---|---|
| Validated filter / query used | `<<FILL: name and validation reference, or "full read, no validated filter">>` |
| Critical entry types it surfaces | `<<FILL: result changes, re-integrations, deletions, sequence/identity changes, clock changes, privilege changes>>` |
| Who performs the review | `<<FILL: role>>` |
| Where the result is recorded | `<<FILL: audit trail review record ID>>` |

## 4. Rationale for the boundary

State, in plain words, why the in-scope trails are reviewed routinely and why the rest are not. This is the answer you give an inspector.

`<<FILL: e.g. "The mapped element feeds batch disposition, so its result, re-integration, and identity trails are reviewed each run by exception. The configuration trail is change-controlled and reviewed at periodic review. The trend-only module makes no disposition decision and is out of routine scope; it is covered at periodic system review.">>`

## 5. Approval

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared (DI / data governance) | `<<FILL>>` | | |
| Reviewed (System owner) | `<<FILL>>` | | |
| Approved (QA) | `<<FILL>>` | | |

## 6. References

> FDA Data Integrity and Compliance With Drug CGMP: Questions and Answers (final, December 2018), on risk-based audit trail review.
> 21 CFR Part 11; 21 CFR 211.68, 211.194.
> EU GMP Annex 11, audit trail and computerised system principles. (A substantially expanded draft revision was issued for consultation on 7 July 2025; confirm the in-force version before issue.)
> MHRA GxP Data Integrity Guidance and Definitions; PIC/S PI 041.
> ICH Q9, Quality Risk Management (risk-based scoping basis).

Confirm the current version and clause numbers before issue.

---

## Filled specimen

Illustrative completed determination for a chromatography result feeding batch release. Replace with your own.

**Inputs.** Data element: finished-product assay result from HPLC to certificate of analysis. Criticality: High (feeds batch release). Systems: CDS, LIMS, archive. Trails present: CDS result/re-integration trail; LIMS sample-login trail; LIMS configuration trail; reporting-module trail.

| Audit trail | Records changes to | Criticality | Review tier | Frequency | Basis |
|---|---|---|---|---|---|
| CDS result and re-integration trail | Reportable assay result | High | Routine, by exception | Each analytical run, before result use | Result feeds release; re-integration is the classic integrity hot spot |
| LIMS sample-login trail | Sample identity | High | Routine, by exception | Each batch | Wrong identity invalidates the result |
| LIMS configuration trail | System settings, roles | Medium | Periodic | At periodic review | Already governed by change control |
| Reporting-module trail | Report layout only | Low | Out of routine scope | Periodic review | No SISPQ decision rests on layout |

**Rationale.** The result and identity trails are reviewed every run by exception using validated filter FLT-CDS-03, because a change there can move a release decision. The configuration trail is change-controlled and reviewed at periodic review. The reporting-module trail affects layout only and is out of routine scope, covered at periodic system review. Approved by QA (R. Gomez, 25 June 2026).

## Common inspection findings this record prevents

- Routine audit trail review claimed for "all systems" with no evidence it is feasible or actually done.
- No documented rationale for why some trails are reviewed and others are not, so the boundary looks arbitrary.
- A high-criticality result trail left out of routine review while low-value trails are reviewed.
- Review-by-exception used with no named validated filter and no validation reference.

## How to adapt this record

1. Complete one record per high-criticality data element or per system, driven by the matching data flow map.
2. Set your review frequencies in section 2 to match your audit trail review SOP defaults.
3. Name your validated filters and their validation references in section 3.
4. Keep section 4 in plain words; it is the sentence you will say in an inspection.
5. Re-confirm the determination whenever the data flow map changes.
