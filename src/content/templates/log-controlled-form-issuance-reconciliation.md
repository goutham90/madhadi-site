---
title: "Log: Controlled Form Issuance and Reconciliation"
description: "A plug-and-play issuance and reconciliation log for controlled forms and blank batch records: numbered issuance, version control, voiding, and the reconciliation that proves issued equals used plus voided, with field definitions and a filled specimen."
pubDate: 2026-06-30
docType: "Log"
pillar: "data-integrity"
relatedArticles: ["good-documentation-practices"]
tags: ["good documentation practices", "GDocP", "controlled forms", "batch record issuance", "reconciliation", "data integrity", "log"]
tier: "Beginner"
---

This is a ready-to-use log for issuing and reconciling controlled forms and blank batch records. It closes the "spare blank" gap: the uncontrolled photocopy that lets someone redo a record and substitute the clean version. The control is arithmetic: issued copies must equal used copies plus voided copies, with nothing unaccounted for. Replace every `<<FILL: ...>>` placeholder, register it under the parent SOP `<<FILL: GDocP SOP-ID or document control SOP-ID>>`. A field-definition table, the blank log, instructions, and a filled specimen follow. This is general guidance to adapt and verify, not legal or regulatory advice.

## Header

| Field | Entry |
|---|---|
| Log number | `<<FILL: e.g. LOG-DC-005>>` |
| Parent SOP | `<<FILL: document control / GDocP SOP-ID>>` |
| Form or record controlled | `<<FILL: form ID and title>>` |
| Custodian | `<<FILL: role who issues and reconciles>>` |
| Period | `<<FILL: from date>>` to `<<FILL: to date>>` |

## Field definitions

| Field | Format | Required | Who enters | When |
|---|---|---|---|---|
| Form ID | Controlled ID | Yes | Custodian | At issue |
| Version | Version number | Yes | Custodian | At issue |
| Copy no. | Sequential number | Yes | Custodian | At issue |
| Issued to | Name | Yes | Custodian | At issue |
| Issued date | YYYY-MM-DD | Yes | Custodian | At issue |
| Returned date | YYYY-MM-DD | Yes | Custodian | At return |
| Status | Used / Voided / Outstanding | Yes | Custodian | At return |
| Void reason | Text | If voided | Custodian | At return |
| Reconciled by | Name + date | Yes | Custodian / QA | At period close |

## Blank log

| Form ID | Version | Copy no. | Issued to | Issued date | Returned date | Status | Void reason |
|---|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | 001 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Used / Voided / Outstanding | `<<FILL or N/A>>` |
| `<<FILL>>` | `<<FILL>>` | 002 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Used / Voided / Outstanding | `<<FILL or N/A>>` |
| `<<FILL>>` | `<<FILL>>` | 003 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Used / Voided / Outstanding | `<<FILL or N/A>>` |

## Reconciliation

| Item | Count |
|---|---|
| Total issued | `<<FILL>>` |
| Used | `<<FILL>>` |
| Voided (retained) | `<<FILL>>` |
| Outstanding | `<<FILL: must be 0 at close, or explained>>` |
| Reconciliation check | Issued = Used + Voided + Outstanding |

## Instructions

1. Issue only the current approved version. If a form is revised mid-period, withdraw the old version and note the changeover.
2. Number every issued copy sequentially so each can be tracked back.
3. A spoiled copy is voided, not discarded: mark it VOID, single-line, initial, date, and record the reason, then retain it with the log.
4. At period close (or batch close for a batch record), reconcile: issued must equal used plus voided plus outstanding, and outstanding must be zero or have a documented explanation.
5. Any unaccounted-for copy is investigated through a deviation `<<FILL: deviation SOP-ID>>` before the related records are released.
6. Make corrections to the log with the single-line method; never obliterate.

## Retention

Retain the log and all voided copies for not less than `<<FILL: retention period>>`.

## Filled specimen

| Form ID | Version | Copy no. | Issued to | Issued date | Returned date | Status | Void reason |
|---|---|---|---|---|---|---|---|
| FRM-0042 | v3.0 | 001 | A. Bose | 2026-06-18 | 2026-06-19 | Used | N/A |
| FRM-0042 | v3.0 | 002 | A. Bose | 2026-06-18 | 2026-06-19 | Voided | Printer jam, partial print |
| FRM-0042 | v3.0 | 003 | A. Brar | 2026-06-19 | 2026-06-19 | Used | N/A |

Reconciliation: 3 issued = 2 used + 1 voided + 0 outstanding. The voided copy 002 is retained, single-lined and marked VOID, so it is impossible to tell later that an inconvenient record was destroyed. Reconciled by R. Gomez, 2026-06-19.

## Common inspection findings this log prevents

- Uncontrolled photocopies or "spare blanks" of a batch record in circulation.
- A spoiled form discarded rather than voided and retained.
- A superseded form version still in use after a revision.
- Issued copies that do not reconcile against used plus voided, with no explanation.

## How to adapt

1. Set your log number, parent SOP, and the specific form or record it controls.
2. Choose a close cadence (per period for routine forms, per batch for batch records).
3. Align the retention period to the records the form supports.
4. If your batch records are printed on demand from a validated system, reconcile printed copies the same way and reference the system control.
