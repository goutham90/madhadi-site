---
title: "Work Instruction: Saleable Returns Verification via VRS"
description: "A plug-and-play work instruction for verifying a saleable return before re-shelving: scan the 2D code, send the VRS request, act on valid, invalid, or no-response, with per-step acceptance and a filled specimen."
pubDate: 2026-06-24
docType: "Work Instruction"
pillar: "supply-chain-gdp"
relatedArticles: ["dscsa-serialization-track-and-trace"]
tags: ["dscsa", "saleable-returns", "vrs", "verification", "work-instruction", "wholesale-distributor", "serialization"]
tier: "Intermediate"
---

This is a ready-to-use work instruction for the bench-level task of verifying a saleable return before it re-enters sellable inventory. It sits under a parent SOP. Replace every `<<FILL: ...>>` placeholder with your specifics. A worked filled specimen follows. Verify each cited requirement against the current source before you rely on it. This content is educational and general, not legal or regulatory advice.

## Header

| Field | Entry |
|---|---|
| Document title | Saleable Returns Verification via VRS |
| Document number | `<<FILL: WI-ID, e.g. WI-SC-022>>` |
| Version | `<<FILL: version>>` |
| Effective date | `<<FILL: effective date>>` |
| Parent SOP | `<<FILL: SOP-ID for returns / DSCSA>>` |
| Performed by | `<<FILL: role, e.g. Returns Processor>>` |
| Applies to | `<<FILL: wholesale distribution sites>>` |

## Purpose and context

DSCSA requires a wholesale distributor to verify the product identifier of a returned, undamaged, in-date prescription drug before reselling it. Given returns volume, this is done at scale through the Verification Router Service (VRS), which routes the query to the manufacturer's responder and returns whether the identifier is valid. VRS confirms the number is genuine; it does not by itself prove the physical unit is authentic, so the steps below pair the electronic check with physical and data checks.

## Prerequisites

1. The returned unit is undamaged and in date (damaged or expired product follows `<<FILL: returns/destruction SOP ID>>`, not this WI).
2. A 2D-capable scanner and access to the `<<FILL: VRS provider / platform>>`.
3. The operator is trained on this WI (`<<FILL: training record reference>>`).

## Steps

| # | Action | Per-step acceptance |
|---|---|---|
| 1 | Confirm the unit is undamaged and in date. | Damaged or expired units removed from this flow and routed per the returns SOP. |
| 2 | Scan the **2D DataMatrix** to capture GTIN, serial, lot, and expiry. Do not scan the linear/legacy barcode. | All four PI elements captured; if the 2D code is unreadable, treat as a verification failure (step 6). |
| 3 | Confirm the human-readable lot and expiry match the captured data. | Match. A mismatch is a trigger for the suspect-product flow. |
| 4 | Send the verification request through VRS. | Request transmitted; response received within the agreed service level. |
| 5 | If VRS returns **valid**, record the result against the unit and return it to sellable inventory; update the associated transaction data. | Verification result recorded and linked to the physical unit before re-shelving. |
| 6 | If VRS returns **invalid**, **no response**, or the 2D code was unreadable, do **not** re-shelve. Quarantine and enter the suspect-product workflow per `<<FILL: suspect-product SOP ID>>`. | Unit segregated; suspect-product record opened. No re-shelving on a pending or failed result. |
| 7 | Log the transaction in the returns verification log (below). | Every return has a recorded result, valid or not. |

## Acceptance criteria

- Every saleable return has a recorded verification result before re-shelving.
- No product is resold on a "no response" or a mismatch.
- The 2D DataMatrix, not the linear barcode, was the source of the PI.
- Verification turnaround met the agreed service level; throughput did not force re-shelving on pending results.
- The audit trail links the physical unit to the verification transaction.

## Record: returns verification log

| Field | Format |
|---|---|
| Date / time | YYYY-MM-DD HH:MM |
| Product / NDC | text |
| GTIN | 14 digits |
| Serial | alphanumeric |
| Lot / expiry | text / YYMMDD |
| VRS result | valid / invalid / no response |
| Action | re-shelved / quarantined (suspect) |
| Operator | initials |

## References

> DSCSA, section 582 of the FD&C Act (saleable-returns verification for wholesale distributors).
> GS1 Lightweight Messaging Standard / product-identifier lookup used by VRS.
> FDA DSCSA guidance (confirm current enforcement posture for your trading-partner type).

Confirm the current statute and guidance before issue.

## Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

---

## Filled specimen

A returns processor handles three units in a morning. The log shows the level of detail expected; values are illustrative.

| Date / time | Product / NDC | GTIN | Serial | Lot / expiry | VRS result | Action | Operator |
|---|---|---|---|---|---|---|---|
| 2026-06-18 08:14 | Example Drug 50 mg / 0312-3456-78 | 00312345678906 | A1B2C3D4E5 | LOT4521 / 271130 | valid | re-shelved | TR |
| 2026-06-18 08:21 | Example Drug 50 mg / 0312-3456-78 | 00312345678906 | Z9Y8X7W6V5 | LOT4521 / 271130 | no response | quarantined (suspect) | TR |
| 2026-06-18 08:33 | Example Drug 25 mg / 0312-3456-12 | 00312345671200 | Q4R5S6T7U8 | LOT3310 / 270831 | valid | re-shelved | TR |

The second unit got a no-response from VRS, so the processor quarantined it and opened a suspect-product record rather than re-shelving on a pending result. That single decision is the most common place this task goes wrong under volume pressure.

## Common inspection findings this WI prevents

- Scanning the linear/legacy barcode instead of the 2D DataMatrix, so the serial is never captured.
- Returns re-shelved on a pending or no-response result because throughput outran VRS.
- Human-readable lot/expiry not checked against the encoded data.
- No log linking the physical unit to a verification result.
- Damaged or expired product run through the saleable-returns flow instead of the destruction flow.

## How to adapt this work instruction

1. Set your document number, parent SOP, and VRS provider in the header and step 4.
2. Point steps 6 and the prerequisites at your real suspect-product and returns/destruction SOPs.
3. Set the verification service-level target your platform commits to and forbid re-shelving on pending results.
4. Confirm the statute and guidance, and the current enforcement posture for wholesale distributors, before issue.
