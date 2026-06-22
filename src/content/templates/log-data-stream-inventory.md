---
title: "Log: GxP Data Stream Inventory"
description: "A plug-and-play register of GxP record streams and their data flow: source system, generation method, where the data of record lives, the decision served, and the criticality and priority assigned, so nothing is left unclassified, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-22
docType: "Log"
pillar: "data-integrity"
relatedArticles: ["data-criticality-and-data-risk"]
tags: ["data integrity", "data inventory", "data flow", "log", "register", "data criticality", "audit trail"]
tier: "Intermediate"
---

This is a ready-to-use register of GxP record streams. It is the inventory that classification depends on: you cannot right-size controls for data you have not mapped, and the most common audit hit is a stream that was never listed. Replace every `<<FILL: ...>>` placeholder, keep one row per record stream, and maintain it under change control. A worked filled specimen follows. This log feeds the [SOP: Data Criticality and Data Risk Classification](/templates/sop-data-criticality-classification). Verify each cited regulation against the current source before you rely on it.

## Control header

| Field | Entry |
|---|---|
| Document number | `<<FILL: LOG-ID>>` |
| Site / department | `<<FILL>>` |
| Version / date | `<<FILL>>` |
| Owner | `<<FILL: Data Integrity / Governance Lead>>` |

## Field definitions

| Field | Format | Required | Who | When |
|---|---|---|---|---|
| Stream ID | Unique ID | Yes | Governance lead | At entry |
| Record stream | Text (defined output) | Yes | Process owner | At entry |
| Source system / instrument | Text | Yes | System owner | At entry |
| Generation method | Electronic / hybrid / paper | Yes | System owner | At entry |
| Data flow | Text (source to record of record) | Yes | Process owner | At entry |
| Data of record location | Text | Yes | System owner | At entry |
| Decision supported | Text | Yes | Process owner | At entry |
| Criticality | High / Medium / Low | Yes | From assessment | After classification |
| Priority band | Critical / High / Medium / Low | Yes | From assessment | After classification |
| Assessment ref | Form number | Yes | Governance lead | After classification |
| Last reviewed / next review | Date / trigger | Yes | Governance lead | Ongoing |

## Register (blank)

| Stream ID | Record stream | Source system | Generation | Data flow | Data of record | Decision | Criticality | Priority | Assessment ref | Next review |
|---|---|---|---|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## Acceptance criteria

- Every GxP record stream in scope has a row; hybrid, standalone-instrument, and spreadsheet streams are included, not just the big systems.
- Each row links to a completed classification assessment.
- The data flow and the data of record are identified for each stream.
- The register is under change control and reviewed on a defined cycle.
- New systems and process changes add or update rows before go-live.

## References

> MHRA GxP Data Integrity Guidance (March 2018) (data inventory and data flow mapping); PIC/S PI 041; FDA Data Integrity Q&A (December 2018); EU GMP Annex 11 and Chapter 4.

Confirm the current version before you rely on it.

## Retention

Retain as a controlled record for not less than `<<FILL: retention period>>`.

---

## Filled specimen

The following shows representative rows, including the hybrid and spreadsheet streams that inventories most often miss. Illustrative.

| Stream ID | Record stream | Source system | Generation | Data flow | Data of record | Decision | Criticality | Priority | Assessment ref | Next review |
|---|---|---|---|---|---|---|---|---|---|---|
| DS-001 | Finished-product HPLC assay (release) | Chromatography data system | Electronic | CDS to LIMS to CoA | CDS project + LIMS | Batch disposition | High | Critical/High | FRM-DI-007-001 | Annual / CDS change |
| DS-014 | Dispensing weighment | Balance + paper ticket | Hybrid | Print, transcribe to BR, verify | Paper ticket + batch record | Batch formulation | High | High | FRM-DI-007-014 | Annual / process change |
| DS-022 | Environmental monitoring plate counts | Manual read, LIMS entry | Hybrid | Manual count to LIMS | LIMS | EM trend / excursion | Medium | Medium | FRM-DI-007-022 | Biennial |
| DS-031 | Stability sample tracking | Local spreadsheet | Hybrid | Manual entry, no audit trail | Spreadsheet (qualified) | Pull scheduling | Medium | Medium | FRM-DI-007-031 | Annual / on revalidation |
| DS-045 | Non-product warehouse temperature trend | BMS | Electronic | BMS historian | BMS | Facility monitoring | Low | Low | FRM-DI-007-045 | Triennial |

The value of the register is visible in rows DS-014, DS-022, and DS-031: the hybrid balance, the manual plate counts, and the local spreadsheet are exactly the streams an inspector finds uncontrolled when there is no inventory. Listing them forces each into the classification and control workflow.

## Common inspection findings this log prevents

- An uncontrolled balance printout or a local spreadsheet that never made any list.
- Classification of only the big validated systems, missing hybrid and standalone streams.
- A new system going live before its data streams were inventoried and classified.
- No link from a stream to its classification assessment.

## How to adapt this log

1. Set your document number and owner.
2. Add one row per record stream; deliberately sweep for hybrid, standalone-instrument, and spreadsheet data.
3. Identify the data flow and the data of record for each.
4. Link each row to its classification assessment and set a review cycle, under change control.
