---
title: "Form: Chain of Identity / Chain of Custody Verification Log (CGT)"
description: "A plug-and-play COI/COC verification log for autologous and patient-specific CGT: field definitions, two-identifier and condition checks at each handoff from apheresis to administration, with a filled specimen row set."
pubDate: 2026-06-25
docType: "Form"
pillar: "cell-gene-therapy"
relatedArticles: ["atmp-gmp-cell-gene-manufacturing"]
tags: ["cell-gene-therapy", "ATMP", "chain-of-identity", "chain-of-custody", "form", "log", "traceability"]
tier: "Advanced"
---

This is a ready-to-use log for recording chain-of-identity and chain-of-custody verification at every handoff in a cell or gene therapy journey. Replace every `<<FILL: ...>>` placeholder. A field-definition table, the blank log, instructions, and a filled specimen follow. This is general guidance to adapt, not legal or regulatory advice.

## Header

| Field | Entry |
|---|---|
| Form number | `<<FILL: e.g. FORM-MFG-040-01>>` |
| Linked SOP | `<<FILL: chain-of-identity/custody SOP-ID>>` |
| COI identifier | `<<FILL: e.g. COI-XXXXXX>>` |
| Product / protocol | `<<FILL>>` |
| Batch / lot | `<<FILL>>` |

## Field definitions

| Field | Format | Required | Who enters | When |
|---|---|---|---|---|
| Step | Defined handoff name | Yes | Receiving party | At each handoff |
| Site / location | Text | Yes | Receiving party | At handoff |
| COI identifier | Controlled identifier | Yes | Receiving party | At handoff |
| Second identifier | DOB or controlled site ID | Yes | Receiving party | At handoff |
| Identity check result | Pass / Fail | Yes | Verifier | At handoff |
| Custodian in / out | Name or org | Yes | Both parties | At transfer |
| Condition in band? | Yes / No (from logger) | Yes | Receiving party | At receipt |
| Verified by | Name + badge/ID | Yes | Verifier | At handoff |
| Date/time (UTC) | YYYY-MM-DD HH:MM | Yes | Verifier | At handoff |

## Blank log

| Step | Site | COI ID | 2nd identifier | Identity result | Custody in/out | Condition in band? | Verified by | Date/time (UTC) |
|---|---|---|---|---|---|---|---|---|
| Apheresis collection | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Pass / Fail | `<<FILL>>` | NA | `<<FILL>>` | `<<FILL>>` |
| Receipt at mfg site | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Pass / Fail | `<<FILL>>` | Yes / No | `<<FILL>>` | `<<FILL>>` |
| Start processing | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Pass / Fail | `<<FILL>>` | NA | `<<FILL>>` | `<<FILL>>` |
| Cryopreservation | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Pass / Fail | `<<FILL>>` | Yes / No | `<<FILL>>` | `<<FILL>>` |
| Final release ship | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Pass / Fail | `<<FILL>>` | Yes / No | `<<FILL>>` | `<<FILL>>` |
| Receipt at center | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Pass / Fail | `<<FILL>>` | Yes / No | `<<FILL>>` | `<<FILL>>` |
| Thaw | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Pass / Fail | `<<FILL>>` | Yes / No | `<<FILL>>` | `<<FILL>>` |
| Administration | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` + name confirmed bedside | Pass / Fail | `<<FILL>>` | NA | `<<FILL>>` | `<<FILL>>` |

## Instructions

1. One log per COI identifier (per patient product). The COI identifier on this log must match the batch record.
2. Complete a row at every handoff. A receiving party never accepts custody until both the identity check and the condition check pass.
3. Any Fail on the identity check, or any "No" on condition in band, stops the flow: quarantine the product and raise a deviation per the linked SOP. Do not advance.
4. Two independent identifiers are mandatory at each step. The COI number alone is not a two-identifier check.
5. Retain this log with the batch record for the regional traceability period (EU ATMP: 30 years after product expiry; US per 21 CFR 1271 and cGMP).

## Acceptance criteria

- Every row is complete with two identifiers and a named verifier.
- No identity Fail and no condition "No" is left open; each has a deviation reference and disposition.
- The COI identifier is identical across every row and matches the batch and final-product label.

---

## Filled specimen

The following shows a completed log for an example product. Details are illustrative; replace with your own.

| Step | Site | COI ID | 2nd identifier | Identity result | Custody in/out | Condition in band? | Verified by | Date/time (UTC) |
|---|---|---|---|---|---|---|---|---|
| Apheresis collection | Treatment center A | COI-7F3A21 | DOB 1979-04-12 | Pass | Site A to Courier X | NA | RN badge 4471 | 2026-03-02 09:14 |
| Receipt at mfg site | Manufacturing | COI-7F3A21 | DOB 1979-04-12 | Pass | Courier X to Mfg | Yes | Op badge M118 | 2026-03-03 07:50 |
| Cryopreservation | Manufacturing | COI-7F3A21 | Batch BR-7F3A21 | Pass | Mfg internal | Yes | Op badge M204 | 2026-03-10 16:05 |
| Final release ship | Manufacturing | COI-7F3A21 | Lot 7F3A21-FP | Pass | Mfg to Courier Y | Yes | QA badge Q07 | 2026-03-12 11:20 |
| Receipt at center | Treatment center A | COI-7F3A21 | DOB 1979-04-12 | Pass | Courier Y to Site A | Yes | Pharm badge 9912 | 2026-03-13 06:40 |
| Administration | Treatment center A | COI-7F3A21 | DOB 1979-04-12 + name confirmed bedside | Pass | Site A | NA | MD badge 3320 | 2026-03-13 13:35 |

Every row carries the same COI identifier, two identifiers were checked by a named person at each handoff, and the condition stayed in band, so the end-to-end reconciliation ties out: one patient in, one product out.

## Common inspection findings this log prevents

- A handoff recorded with one identifier only.
- A custody leg with no identified custodian.
- An out-of-band condition reading accepted without a deviation.
- A COI identifier that does not match the batch record or the final label.

## How to adapt this form

1. Set the form number and link it to your COI/COC SOP.
2. Match the step rows to your actual process map (add or remove handoffs).
3. Define your two acceptable secondary identifiers.
4. Confirm the regional retention period before use.
