---
title: "Form: Serial Number Reconciliation Report (per Batch)"
description: "A plug-and-play DSCSA serialization reconciliation form: commissioned, printed, rejected, sampled, shipped, and decommissioned counts that must balance per batch, with field definitions and a filled specimen."
pubDate: 2026-06-24
docType: "Form"
pillar: "supply-chain-gdp"
relatedArticles: ["dscsa-serialization-track-and-trace"]
tags: ["dscsa", "serialization", "reconciliation", "form", "aggregation", "batch-record", "data-integrity"]
tier: "Intermediate"
---

This is a ready-to-use reconciliation form for a serialized packaging batch. It proves every serial number is accounted for, which is the cleanest evidence that you control your numbers and the first thing a thorough auditor asks for. Replace every `<<FILL: ...>>` placeholder with your specifics. A filled specimen follows. This content is educational and general; adapt and verify it for your systems and commitments.

## Header

| Field | Entry |
|---|---|
| Form title | Serial Number Reconciliation Report |
| Form number | `<<FILL: FORM-ID, e.g. FRM-SER-005>>` |
| Version | `<<FILL: version>>` |
| Parent SOP | `<<FILL: serialization SOP ID>>` |
| Retention | `<<FILL: period, generally aligned to the 6-year DSCSA record period>>` |

## Field definitions

| Field | Format | Required | Who | When |
|---|---|---|---|---|
| Batch / packaging order | text | Yes | Packaging | At batch start |
| Product / NDC / GTIN | text / 14-digit | Yes | Packaging | At batch start |
| Serial range or number-pack ID | text | Yes | Serialization (L4) | At provisioning |
| Commissioned | integer | Yes | L2/L4 | At commissioning |
| Printed and verified good | integer | Yes | L2 (vision) | During run |
| Rejected / decommissioned | integer | Yes | L2 | During run |
| Sampled / destroyed (QC, line clearance) | integer | Yes | Packaging/QC | During and after run |
| Aggregated into cases/pallets | integer | Yes | L2 | During run |
| Shipped (EPCIS commissioned-to-shipped) | integer | Yes | L4 | At dispatch |
| Unused / returned to pool | integer | Yes | L4 | At batch close |
| Discrepancy (must be zero or explained) | integer | Yes | QA | At reconciliation |

## The reconciliation identity

The counts must close. The basic balance:

Commissioned = printed-good + rejected/decommissioned + sampled/destroyed + unused/returned

and

Printed-good = aggregated = shipped + on-hand reconciled at close

Any non-zero residual is a discrepancy that must be explained and dispositioned before the batch is released. An unexplained discrepancy is a data-integrity finding, because it means a serialized unit cannot be accounted for.

## Reconciliation table

| Count | Value |
|---|---|
| Commissioned | `<<FILL>>` |
| Printed and verified good | `<<FILL>>` |
| Rejected / decommissioned | `<<FILL>>` |
| Sampled / destroyed | `<<FILL>>` |
| Unused / returned to pool | `<<FILL>>` |
| Sum check (printed + rejected + sampled + unused) | `<<FILL>>` |
| Aggregated into parents | `<<FILL>>` |
| Shipped (EPCIS) | `<<FILL>>` |
| On-hand at close | `<<FILL>>` |
| Discrepancy (commissioned minus sum) | `<<FILL: 0 or explain>>` |

## Acceptance criteria

- The reconciliation identity closes to zero, or every residual is explained and dispositioned by QA.
- Rejected serials are decommissioned (a decommissioning event exists), not silently dropped.
- Aggregated count equals printed-good; no orphan or cross-mapped serials.
- Shipped count in EPCIS equals the commissioned-to-shipped chain for the batch.
- The report is reviewed and approved before batch release and retained for the required period.

## Sign-off

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared by (Serialization) | `<<FILL>>` | | |
| Reviewed by (QA) | `<<FILL>>` | | |

## Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

---

## Filled specimen

Reconciliation for an example batch of 10,000 commissioned serials. Values are illustrative and balance to zero.

| Count | Value |
|---|---|
| Commissioned | 10,000 |
| Printed and verified good | 9,840 |
| Rejected / decommissioned | 120 |
| Sampled / destroyed | 20 |
| Unused / returned to pool | 20 |
| Sum check (printed + rejected + sampled + unused) | 10,000 |
| Aggregated into parents | 9,840 |
| Shipped (EPCIS) | 9,600 |
| On-hand at close | 240 |
| Discrepancy (commissioned minus sum) | 0 |

Read it across: 10,000 commissioned, of which 9,840 printed good (all aggregated), 120 rejected and decommissioned, 20 sampled, 20 returned to the pool. Shipped 9,600 with 240 on hand, and shipped plus on-hand equals the 9,840 good units. Discrepancy zero. Had the sum-check been 9,998 instead of 10,000, two serials would be unaccounted for and QA would hold release until the two were found (a missed reject scan, an un-aggregated unit) and the cause corrected.

## Common inspection findings this form prevents

- No reconciliation of serial numbers, so the program cannot prove every number is accounted for.
- Rejected serials dropped without a decommissioning event.
- Aggregation count not equal to printed-good (orphan or cross-mapped serials).
- Shipped EPCIS count not reconciled to the commissioned chain.
- Batch released before the reconciliation closed or its discrepancy was explained.

## How to adapt this form

1. Set your form number and parent serialization SOP in the header.
2. Map the count fields to the exact reports your L2 and L4 systems produce.
3. If your process has additional states (rework, re-serialization), add a count line and fold it into the identity.
4. Make QA review of a closed reconciliation a release prerequisite in your batch-record flow.
