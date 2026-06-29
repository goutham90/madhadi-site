---
title: "Form: Transit Temperature Excursion Investigation and Disposition Record"
description: "A plug-and-play record for investigating and dispositioning a distribution temperature excursion, gating the quality decision on a trustworthy logger record and a stability-based rule, with field definitions and a filled specimen."
pubDate: 2026-06-29
docType: "Form"
pillar: "supply-chain-gdp"
relatedArticles: ["supply-chain-data-integrity", "good-distribution-practice-cold-chain", "cold-chain-shipping-qualification"]
tags: ["cold chain", "temperature excursion", "gdp", "data integrity", "Form", "3pl"]
tier: "Intermediate"
---

This is a ready-to-use record to document a single transit (or storage) temperature excursion from detection to disposition. It is the paired record for the [excursion management SOP](/templates/sop-temperature-excursion-management-disposition). Replace every `<<FILL: ...>>` placeholder. A field guide and a filled specimen follow.

## Field guide

| Field | Format | Required | Who enters | When |
|---|---|---|---|---|
| Record number | `<<FILL: scheme>>` | Yes | QA | At open |
| Product / lot / quantity | Text / number | Yes | Logistics | At open |
| Shipment / order reference | Text | Yes | Logistics | At open |
| Logger serial / type | Text | Yes | Logistics | At open |
| Calibration reference and validity | Text / date | Yes | Logger owner | At open |
| Detected by / date | Text / date | Yes | Detector | At open |

## Section 1: Event and quarantine

| Field | Entry |
|---|---|
| Record number | `<<FILL>>` |
| Product / lot / quantity | `<<FILL>>` |
| Shipment / order reference | `<<FILL>>` |
| Logger serial / type | `<<FILL>>` |
| Detected by / date | `<<FILL>>` |
| Quarantine applied (Y/N, system status) | `<<FILL>>` |
| Sponsor QA notified (date / time) | `<<FILL>>` |
| Raw logger data received (Y/N, location) | `<<FILL>>` |

## Section 2: Trustworthiness gate (must pass before assessment)

| Check | Result (Pass/Fail) | Note |
|---|---|---|
| Calibration current and traceable | `<<FILL>>` | `<<FILL>>` |
| Logger serial matches dispatch record | `<<FILL>>` | `<<FILL>>` |
| Logging interval bounds the excursion duration | `<<FILL>>` | `<<FILL>>` |
| No custody gap / data gap (profile brackets custody) | `<<FILL>>` | `<<FILL>>` |
| Gate result | `<<FILL: PASS / FAIL>>` | If FAIL, default to reject/hold and raise a DI deviation |

## Section 3: Excursion characterization

| Field | Entry |
|---|---|
| Limit(s) breached | `<<FILL>>` |
| Peak temperature | `<<FILL>>` |
| Segments above limit (count, durations) | `<<FILL>>` |
| Cumulative time outside limit | `<<FILL>>` |
| MKT (supporting only) | `<<FILL>>` |

## Section 4: Acceptance-rule comparison

| Field | Entry |
|---|---|
| Product stability-derived allowance | `<<FILL: peak / cumulative-time / freeze rule>>` |
| Cumulative excursion budget already consumed by this lot | `<<FILL>>` |
| Within allowance? (Y/N) | `<<FILL>>` |
| If outside: stability / regulatory assessment reference | `<<FILL>>` |

## Section 5: Disposition

| Field | Entry |
|---|---|
| Disposition | `<<FILL: Release / Reject / Release-with-restriction>>` |
| Rationale (tied to the rule, not to MKT alone) | `<<FILL>>` |
| Inventory status updated (Y/N) | `<<FILL>>` |
| Deviation / CAPA raised (number or N/A) | `<<FILL>>` |
| QA disposition (name, signature, date) | `<<FILL>>` |

## Acceptance criteria

- Section 2 gate passed before any disposition, or the shipment was held / rejected and a DI deviation raised.
- The disposition rationale references the stability-derived rule, not MKT alone.
- Raw logger data, calibration certificate, and this record are retained together.

## References

> EU GDP (2013/C 343/01), Chapter 9 (Transportation).
> USP General Chapter <1118> (Monitoring Devices).
> MHRA GxP Data Integrity Guidance; PIC/S PI 041.

Confirm current versions before issue.

---

## Filled specimen

Illustrative completed record for an example 2-8 C biologic shipment.

| Section | Entry |
|---|---|
| Record number | EXC-2026-0231 |
| Product / lot / quantity | mAb-217, lot L26-118, 50 units |
| Logger serial / type | TL-2291847, single-use electronic |
| Trustworthiness gate | Calibration valid to Dec 2026, NIST-traceable; serial matched dispatch; 10-min interval; profile 06:00-23:32 brackets custody. Gate: PASS |
| Characterization | Above 8 C: 2 segments (20 + 50 min), cumulative 70 min; peak 9.4 C; MKT 5.9 C |
| Acceptance-rule comparison | Allowance: up to 96 h cumulative 8-25 C; 70 min within budget; no prior excursions on lot. Within allowance: Yes |
| Disposition | Release; rationale: within studied allowance, gate passed, budget recorded; QA R. Gomez, 12 Jun 2026 |

The record shows the gate first, the rule second, and MKT used only as support. That ordering is what makes the release defensible to an inspector.

## Common inspection findings this record prevents

- A disposition with no record of whether the temperature data could even be trusted.
- A release justified by MKT while a peak or cumulative-time limit was breached.
- Raw logger data not retained with the disposition.

## How to adapt this form

1. Pre-load the product allowances or reference the stability document that holds them.
2. Add a field for the cumulative-budget ledger if you track allowance consumption across a lot's life.
3. Point the deviation / CAPA field to your real procedures.
