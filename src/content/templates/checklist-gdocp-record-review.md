---
title: "Checklist: GDocP Record Review"
description: "A plug-and-play checklist a reviewer runs over a completed paper or hybrid GxP record: contemporaneity, attribution, corrections, blanks, raw data, form and logbook control, and the audit trail, with pass/fail/NA, references, and signoff."
pubDate: 2026-06-30
docType: "Checklist"
pillar: "data-integrity"
relatedArticles: ["good-documentation-practices"]
tags: ["good documentation practices", "GDocP", "record review", "checklist", "data integrity", "second person review"]
tier: "Beginner"
---

This is a ready-to-use checklist for the independent review of a completed GxP record. It is record-level: a reviewer runs it over one batch record, worksheet, or logbook to confirm the documentation mechanics hold before the record supports a decision. It is not a program self-assessment. Replace every `<<FILL: ...>>` placeholder and run it under the parent SOP `<<FILL: GDocP SOP-ID>>`. Mark each item Pass, Fail, or N/A, and resolve every Fail before signoff. A filled specimen follows. This is general guidance to adapt and verify, not legal or regulatory advice.

## Header

| Field | Entry |
|---|---|
| Checklist number | `<<FILL: e.g. CHK-QA-002-01>>` |
| Parent SOP | `<<FILL: GDocP SOP-ID>>` |
| Record under review | `<<FILL: record ID / type>>` |
| Batch / sample / equipment | `<<FILL>>` |
| Reviewer | `<<FILL: name, role>>` |
| Review date | `<<FILL>>` |

## Checklist

| No. | Item | Pass / Fail / NA | Reference |
|---|---|---|---|
| 1 | Every required field is completed; no blanks; N/A used correctly with initials where required. | `<<FILL>>` | GDocP SOP 5.5 |
| 2 | Unused space on partially used pages is struck through with a single diagonal line. | `<<FILL>>` | GDocP SOP 5.5 |
| 3 | Entries are in permanent ink (or the validated electronic equivalent); no pencil or erasable ink. | `<<FILL>>` | GDocP SOP 5.6 |
| 4 | Times run in a plausible forward sequence; no impossible overlaps; no signs of one-sitting reconstruction. | `<<FILL>>` | GDocP SOP 5.1 |
| 5 | Any late entry shows both the event time and the time of writing, with a reason. | `<<FILL>>` | GDocP SOP 5.2 |
| 6 | Every entry, correction, and signature resolves to one person via the signature register. | `<<FILL>>` | Signature register `<<FILL: ID>>` |
| 7 | Corrections are single-lined and legible, with initials, date, and a reason where significant; no obliteration, white-out, or overwrite. | `<<FILL>>` | GDocP SOP 5.4 |
| 8 | Raw data is recorded at full instrument resolution; rounding applied only at the defined step. | `<<FILL>>` | GDocP SOP 5.6 |
| 9 | The form in use is the current approved version. | `<<FILL>>` | Document control |
| 10 | Issued copies reconcile (issued = used + voided); any voided copy retained. | `<<FILL>>` | Issuance log `<<FILL: ID>>` |
| 11 | For logbooks: bound, pre-numbered, sequential, no skipped open lines, no missing pages. | `<<FILL>>` | GDocP SOP 5.7 |
| 12 | Results are within specification, or any OOS/OOT is linked to an open investigation. | `<<FILL>>` | OOS SOP `<<FILL: ID>>` |
| 13 | Required signatures present at every sign-off, by people qualified for the role. | `<<FILL>>` | Training records |
| 14 | Verifier/witness signatures correspond to checks actually performed at the time. | `<<FILL>>` | GDocP SOP 5.3 |
| 15 | For hybrid/electronic data: audit trail reviewed; not disabled; no unexplained deletions, aborted/"test" runs, or unjustified reprocessing. | `<<FILL>>` | Audit trail review SOP `<<FILL: ID>>` |
| 16 | For thermal/fading printouts: a verified true copy exists, or data captured electronically; the designated original is identified. | `<<FILL>>` | GDocP SOP 5.8 |

## Exception handling

For any Fail: describe it, raise it to the area owner and QA the same working day, and open a deviation per `<<FILL: deviation SOP-ID>>` where the issue could affect a result, a decision, or product quality. Do not sign off the review or release the record until every Fail is resolved.

## Signoff

| Field | Entry |
|---|---|
| All items Pass or NA (no open Fail) | Yes / No |
| Deviations raised | `<<FILL: numbers or none>>` |
| Reviewer (name, signature, date) | `<<FILL>>` |
| QA approval (name, signature, date) | `<<FILL>>` |

## Filled specimen

| No. | Item | Result | Note |
|---|---|---|---|
| 1 | No blanks; N/A correct | Pass | One field N/A (single-pass process), initialed |
| 7 | Corrections single-lined | Fail | Step 9 correction had correct value and initials but no date |
| 15 | Audit trail reviewed | Pass | CDS audit trail reviewed; one reintegration, reason recorded |

Outcome: item 7 failed because a correction lacked a date, so the change could not be placed in time. The reviewer held the record, had the analyst add the date with a contemporaneous note, and recorded a minor documentation deviation. Items 1 and 15 passed. The record was released only after the open Fail was closed.

## Common inspection findings this checklist prevents

- A review signature with no evidence the underlying data or audit trail was examined.
- Corrections without a date, so the change cannot be placed in time.
- An OOS result released because the reviewer checked only the clean summary.
- A faded thermal printout left as the only original, with no true copy.

## How to adapt

1. Set your checklist number and parent SOP, and point each reference to your real procedures.
2. Add product- or process-specific items (for example yield reconciliation, line clearance) where your record demands them.
3. For fully paper records, mark items 15 and 16 N/A as appropriate; for fully electronic records, adapt the paper-specific items.
