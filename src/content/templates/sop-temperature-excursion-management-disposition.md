---
title: "SOP: Cold Chain Temperature Excursion Management and Disposition"
description: "A plug-and-play SOP for detecting, investigating, and dispositioning temperature excursions in distribution, gating the quality decision on a trustworthy logger record, with stability-based rules, roles, acceptance criteria, and a filled specimen."
pubDate: 2026-06-29
docType: "SOP"
pillar: "supply-chain-gdp"
relatedArticles: ["supply-chain-data-integrity", "good-distribution-practice-cold-chain", "cold-chain-shipping-qualification"]
tags: ["cold chain", "gdp", "temperature excursion", "data integrity", "SOP", "3pl"]
tier: "Advanced"
---

This is a ready-to-use SOP. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Cold Chain Temperature Excursion Management and Disposition |
| Document number | `<<FILL: SOP-ID, e.g. SOP-DIST-018>>` |
| Version | `<<FILL: version>>` |
| Effective date | `<<FILL: date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of QA / Distribution Quality>>` |
| Applies to | `<<FILL: sites / distribution lanes in scope>>` |

## 1. Purpose

This procedure defines how `<<FILL: COMPANY NAME>>` detects, records, investigates, and dispositions temperature excursions affecting medicinal products in storage and distribution, so that release and reject decisions rest on a trustworthy temperature record and a pre-defined, stability-based acceptance rule, not on after-the-fact judgment.

## 2. Scope

This procedure applies to all storage and transit temperature excursions for products under cold-chain or controlled-room-temperature control, whether monitored by in-house or third-party (3PL) systems, and whether the logger is single-use, reusable, or real-time connected. It applies from goods receipt through delivery to the consignee. It does not cover in-process manufacturing temperature deviations, governed by `<<FILL: SOP-ID for manufacturing deviations>>`.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| QA (sponsor / MAH) | Owns the disposition decision; approves the stability-based acceptance rules; classifies and routes findings. |
| Cold-chain / distribution SME | Maintains transit profiles and stability-derived excursion allowances; supports impact assessment. |
| Logger / monitoring system owner | Confirms calibration currency, record integrity, and that the profile belongs to the shipment. |
| Logistics / 3PL (contract acceptor) | Detects the excursion, quarantines the shipment, notifies, and provides the raw record; does not self-disposition. |
| Stability / regulatory | Provides the studied excursion data and confirms regulatory acceptability where the rule is exceeded. |

## 4. Definitions

- **Excursion**: a recorded temperature outside the product's labeled storage condition for any duration.
- **Stability-derived allowance**: the cumulative time and peak temperature the product can tolerate based on stability and excursion studies, defined per product.
- **Trustworthy record**: a temperature record that is attributable, contemporaneous, original, accurate, and tied to the shipment (calibration current and traceable, logger serial matched, no custody or data gap).
- **MKT**: mean kinetic temperature, a single temperature representing cumulative thermal stress; a supporting metric, never the sole disposition basis.

## 5. Procedure

### 5.1 Detect and quarantine

1. On any alarm, flagged read-out, or out-of-range value at receipt, place the affected units in quarantine status in the WMS / inventory system immediately.
2. The detecting party (often the 3PL) notifies sponsor QA within `<<FILL: timeframe, e.g. 1 business day>>` and provides the raw logger data, not only a summary report.

### 5.2 Verify the record is trustworthy (the gate)

Before any quality assessment, confirm the record can be relied on:

1. Calibration is current and traceable for the logger that produced the record.
2. The logger serial read out matches the serial on the dispatch record.
3. The logging interval is fine enough to bound the excursion duration.
4. There is no custody gap or data gap (the profile span brackets the custody record).

If any of these fail, the risk cannot be bounded. Default to reject / hold pending investigation and raise a data-integrity deviation per `<<FILL: SOP-ID for deviations>>`. Do not proceed to release on an untrustworthy record.

### 5.3 Characterize the excursion

1. Extract peak temperature, cumulative time outside each relevant limit, and the number and duration of segments.
2. Calculate MKT for the profile as a supporting metric.
3. Identify which storage limit(s) were breached and by how much.

### 5.4 Apply the stability-based acceptance rule

1. Compare the characterized excursion against the product's stability-derived allowance (peak limit, cumulative-time budget, and any rate or freeze rule).
2. If the excursion is within the studied allowance and the cumulative budget across this product's prior excursions is not exhausted, QA may release per the rule, recording the rationale and the remaining budget.
3. If the excursion exceeds the allowance, or no studied basis exists, escalate to stability / regulatory for an impact assessment; reject if the risk cannot be bounded.

### 5.5 Disposition and record

1. QA records the disposition (release, reject, or release-with-restriction) and the basis on the excursion disposition record (`<<FILL: form doc number, e.g. /templates/form-transit-temperature-excursion-disposition>>`).
2. Update inventory status; release or destroy per the decision and per `<<FILL: SOP-ID for destruction>>`.
3. Retain the raw logger record, the calibration certificate, and the disposition record together.

### 5.6 Trend and CAPA

1. Trend excursions by lane, 3PL, logger type, and root cause on a defined cadence.
2. For systemic patterns (a recurring lane, a 3PL, a packout failure), open a CAPA per `<<FILL: SOP-ID for CAPA>>`.

## 6. Acceptance criteria

- No release decision is made on a record that failed the trustworthiness gate in 5.2.
- Every disposition is traceable to a pre-defined, stability-based rule, with the rationale recorded.
- MKT is used only alongside peak and cumulative-time rules, never as the sole basis.
- The raw logger data, calibration certificate, and disposition record are retained together and retrievable.
- The 3PL quarantines but never self-dispositions; sponsor QA owns the decision.

## 7. References

> EU Guidelines on Good Distribution Practice of medicinal products for human use (2013/C 343/01), Chapters 9 (Transportation) and 7 (Outsourced activities).
> 21 CFR 211.142 (warehousing) and 211.150 (distribution) where a manufacturer controls the operation.
> USP General Chapter <1079> (Good Storage and Distribution Practices) and <1118> (Monitoring Devices).
> MHRA GxP Data Integrity Guidance and Definitions; PIC/S PI 041 (GMP/GDP data integrity).

Confirm the current version and clause numbers before issue.

## 8. Record generated: see the excursion disposition record

The disposition record is maintained on the paired form. The minimum captured fields are product, lot, logger serial and calibration reference, profile characterization (peak, cumulative time, segments, MKT), the trustworthiness-gate result, the acceptance-rule comparison, the QA disposition and rationale, and signatures.

## 9. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 10. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (QA) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows a disposition worked through for an example 2-8 C biologic shipment. Illustrative only.

| Step | Outcome |
|---|---|
| Detect / quarantine | Receipt read-out flagged a high excursion; 50 units quarantined in WMS; 3PL notified QA same day with raw file |
| Trustworthiness gate | Calibration valid through Dec 2026, traceable to NIST; logger serial TL-2291847 matched dispatch record; 10-min interval; logger span 06:00 to 23:32 brackets custody. Gate: pass |
| Characterize | Peak 9.4 C; two segments above 8 C of 20 and 50 min (70 min cumulative); MKT 5.9 C |
| Acceptance rule | Product studied allowance: up to 96 h cumulative above 8 C below 25 C; 70 min well within budget; no prior excursions on this lot |
| Disposition | QA released; rationale recorded; remaining budget noted on the lot record |
| Trend / CAPA | Logged against the lane; no pattern; no CAPA |

The decision held up because the trustworthiness gate passed first and the release rested on a pre-defined studied allowance, not on the comforting-looking MKT of 5.9 C. Had the calibration been expired or the serial mismatched, the same numbers would have driven a reject.

## Common inspection findings this SOP prevents

- An excursion released on MKT alone while a peak or cumulative-time limit was breached.
- A disposition made on a logger record with expired calibration or a serial mismatch.
- The 3PL releasing a breached shipment without sponsor QA.
- Only a summary PDF retained, with the raw profile gone.

## How to adapt this SOP

1. Insert your stability-derived allowances per product, or reference the document that holds them.
2. Point the cross-references to your real deviation, CAPA, destruction, and forms.
3. Set the notification timeframe in 5.1 to match your 3PL quality agreements.
4. Confirm every reference in section 7 against the current published version.
