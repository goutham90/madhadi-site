---
title: "Checklist: 3PL and Distributor Data Integrity Audit"
description: "A plug-and-play audit checklist for assessing a third-party logistics provider or distributor on distribution-record data integrity, system audit trails, logger governance, and excursion authority, with the weak and strong answers to listen for and a filled specimen."
pubDate: 2026-06-29
docType: "Checklist"
pillar: "supply-chain-gdp"
relatedArticles: ["supply-chain-data-integrity", "conducting-a-supplier-audit", "cdmo-oversight-quality-agreements"]
tags: ["3pl", "gdp", "data integrity", "supplier audit", "Checklist", "cold chain"]
tier: "Advanced"
---

This is a ready-to-use audit checklist for a third-party logistics provider (3PL) or distributor, focused on data integrity rather than only the warehouse walk. Use it on qualification and for-cause audits. Mark each item Pass, Fail, or N/A, record the evidence, and route Fails to your finding-classification process. A filled specimen follows. The point of this checklist is to get past the dock: a spotless warehouse can still run on shared logins and editable temperature records.

## How to use

- Sit at the WMS and the monitoring portal, do not rely on a presentation. Pull real records.
- For each item, capture the actual answer or evidence, not just a checkbox.
- Treat any Attributable, Original, or Accurate failure as high priority; these break the whole record set.

## Section A: Quality system and contract

| # | Item | Pass / Fail / N/A | Evidence / answer |
|---|---|---|---|
| A1 | GDP authorization / registration current where applicable | | `<<FILL>>` |
| A2 | A written quality / technical agreement exists and addresses data integrity (record access, audit trails, excursion authority, notification, retention) | | `<<FILL>>` |
| A3 | No onward subcontracting of regulated activity without sponsor approval and flow-down of terms | | `<<FILL>>` |

## Section B: Attributable (who did what)

| # | Item | Pass / Fail / N/A | Evidence / answer |
|---|---|---|---|
| B1 | WMS and monitoring portal use individual named accounts; no shared or generic logins, including night shift | | `<<FILL>>` |
| B2 | Pull the user list; confirm leavers are deactivated and access is role-based | | `<<FILL>>` |
| B3 | Custody handoffs identify a person or a scan tied to a controlled device, not "picked up by courier" | | `<<FILL>>` |

## Section C: Audit trail and edit control

| # | Item | Pass / Fail / N/A | Evidence / answer |
|---|---|---|---|
| C1 | Critical fields (lot, quantity, ship-to, condition status) are audit-trailed with user, time, old and new value, and reason | | `<<FILL>>` |
| C2 | Pull a real audit trail entry on a changed ship-to or lot field and confirm it is complete | | `<<FILL>>` |
| C3 | Excursion alarms cannot be deleted or silently acknowledged; acknowledgment is attributable and reasoned | | `<<FILL>>` |

## Section D: Logger governance (Original and Accurate)

| # | Item | Pass / Fail / N/A | Evidence / answer |
|---|---|---|---|
| D1 | Raw logger data is retained and exportable; the summary report is derived from it, not the only record | | `<<FILL>>` |
| D2 | Reusable loggers have a recalibration interval and a control to pull out-of-interval units; ask to see a current certificate | | `<<FILL>>` |
| D3 | A courier cannot stop and restart a logger without the stop being recorded; the original profile is preserved | | `<<FILL>>` |
| D4 | Logging interval is fine enough to bound an excursion duration for the products handled | | `<<FILL>>` |
| D5 | Logger serial on the dispatch record is reconciled against the serial read out at receipt | | `<<FILL>>` |

## Section E: Excursion authority (independence)

| # | Item | Pass / Fail / N/A | Evidence / answer |
|---|---|---|---|
| E1 | The 3PL quarantines a breached shipment but does not self-disposition; sponsor QA decides | | `<<FILL>>` |
| E2 | Review a recent excursion and confirm sponsor QA, not the 3PL, made the release / reject call | | `<<FILL>>` |
| E3 | Excursion and data-integrity events (lost logger, corrupted record) are notified to the sponsor within the agreed timeframe | | `<<FILL>>` |

## Section F: Traceability and retention

| # | Item | Pass / Fail / N/A | Evidence / answer |
|---|---|---|---|
| F1 | Run a live traceability test: pick a random lot and trace receipt to dispatch from records alone; time it | | `<<FILL>>` |
| F2 | Records (including raw logger files) are retained for the required period and remain retrievable, including from a retired platform | | `<<FILL>>` |
| F3 | The sponsor has the right and the means to access and copy original records | | `<<FILL>>` |

## Signoff

| Field | Entry |
|---|---|
| 3PL / distributor | `<<FILL>>` |
| Site / systems audited | `<<FILL>>` |
| Audit type (qualification / periodic / for-cause) | `<<FILL>>` |
| Findings raised (count, by priority) | `<<FILL>>` |
| Lead auditor (name, signature, date) | `<<FILL>>` |
| QA approval (name, signature, date) | `<<FILL>>` |

## Reference: weak versus strong answers to listen for

| You ask | Weak answer (finding) | Strong answer |
|---|---|---|
| Who edited this ship-to field? | "We don't track that" | Audit trail entry: user, time, old value, new value, reason |
| Do operators share the WMS login at night? | "Yes, one shared account" | Individual named accounts, role-based |
| Can a courier stop and restart the logger? | "Yes, it just starts a new file" | Stop is recorded; original profile preserved and flagged |
| Where is the raw logger data? | "We keep the summary PDF only" | Raw data retained and exportable; summary derived from it |
| Who released this excursion shipment? | "Our shift lead released it" | Sponsor QA dispositioned; the 3PL only quarantined |

## References

> EU GDP (2013/C 343/01), Chapter 7 (Outsourced activities) and Chapter 4 (Documentation).
> MHRA GxP Data Integrity Guidance; PIC/S PI 041 (GMP/GDP data integrity).
> 21 CFR Part 11 / EU GMP Annex 11 for electronic distribution and monitoring systems.

Confirm current versions before relying on this checklist.

---

## Filled specimen

Section B and the signoff completed for an example qualification audit. Illustrative only.

| # | Item | Pass / Fail / N/A | Evidence / answer |
|---|---|---|---|
| B1 | Individual named accounts; no shared logins | Fail | Night-shift WMS used a shared "warehouse1" account; no individual attribution |
| B2 | User list reviewed; leavers deactivated; role-based | Pass | List current; two leavers deactivated on exit |
| B3 | Custody handoffs identify a person / controlled scan | Pass | Driver badge scan at each handoff |

| Field | Entry |
|---|---|
| 3PL / distributor | NorthCold Logistics, Lane EU-NE |
| Site / systems audited | WMS, cold-room monitoring portal |
| Audit type | Qualification |
| Findings raised | 2: one major (B1 shared login), one minor (D2 one logger near interval end) |
| Lead auditor | A. Patel, signed, 16 Jun 2026 |
| QA approval | R. Gomez, signed, 17 Jun 2026 |

The shared night-shift login (B1) is the classic distribution data-integrity finding: it breaks Attributable for every record touched on that shift, so it was raised as major and the qualification was made conditional on individual accounts before go-live.

## Common inspection findings this checklist surfaces

- Shared logins at the 3PL, breaking attribution for the whole record set.
- Only summary reports retained, with raw logger data unavailable.
- The 3PL self-dispositioning excursions the sponsor should decide.
- A quality agreement silent on data integrity, discovered only for-cause.

## How to adapt this checklist

1. Add lane- or product-specific rows (ultra-cold, controlled substances, DSCSA-scope handling).
2. Tie the finding-priority scheme to your [audit finding classification](/articles/audit-finding-classification) procedure.
3. Where a 3PL serves multiple sponsors, confirm segregation of your records and access.
