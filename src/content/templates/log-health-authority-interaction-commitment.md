---
title: "Log: Health Authority Interaction and Commitment Register"
description: "A plug-and-play running log of every health authority interaction and the commitments arising from it, so agency positions and sponsor obligations are tracked to closure across the life of a program, with field definitions and a filled specimen."
pubDate: 2026-06-29
docType: "Log"
pillar: "audits-inspection"
relatedArticles: ["health-authority-meetings", "ind-nda-bla-pathways", "bla-readiness-data-package"]
tags: ["regulatory affairs", "fda meetings", "commitments", "Log", "inspection readiness", "briefing book"]
tier: "Advanced"
---

This is a ready-to-use log. It serves two jobs at once: a chronological record of every interaction with a health authority, and a register of the commitments (sponsor obligations and agency agreements) that arise from them. Keep one per program. Replace every `<<FILL: ...>>` placeholder, and maintain it in a controlled, queryable form rather than a personal spreadsheet. A field guide and a filled specimen follow.

## Why this log exists

Agency positions and sponsor commitments outlive the people who made them. A meeting agreement from a pre-IND interaction is routinely tested two years later at the pre-BLA meeting or at the pre-approval inspection. Without a single maintained register, the program relies on memory, and undocumented agreements effectively do not exist. This log is also a primary inspection-readiness artifact: it lets the team reconstruct the full regulatory history on demand.

## Part 1: Interaction log (chronological)

| Field | Format | Required | Who enters | When |
|---|---|---|---|---|
| Interaction ID | `<<FILL: scheme, e.g. INT-2026-007>>` | Yes | Regulatory lead | At request |
| Date | Date | Yes | Regulatory lead | At each event |
| Authority | FDA / EMA / national CA / other | Yes | Regulatory lead | At request |
| Type | Type A/B/B(EOP)/C/D/INTERACT / scientific advice / IR / DRL / RTF / CRL / LoQ / LoOI / other | Yes | Regulatory lead | At request |
| Topic / purpose | Free text, brief | Yes | Regulatory lead | At request |
| Status | Requested / scheduled / held / responded / closed | Yes | Regulatory lead | Updated through |
| Outcome summary | Free text | Yes | Regulatory lead | After event |
| Record location | Link / doc number to package, minutes, response | Yes | Regulatory lead | After event |

### Interaction log table

| Interaction ID | Date | Authority | Type | Topic / purpose | Status | Outcome summary | Record location |
|---|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## Part 2: Commitment register

A commitment is anything the sponsor agreed to do, or any agency position the program is relying on. Each is tracked to closure.

| Field | Format | Required | Who enters | When |
|---|---|---|---|---|
| Commitment ID | `<<FILL: scheme, e.g. COM-2026-014>>` | Yes | Regulatory lead | When made |
| Source interaction ID | Links to Part 1 | Yes | Regulatory lead | When made |
| Commitment text | Free text, exact | Yes | Regulatory lead | When made |
| Made by | Sponsor / agency | Yes | Regulatory lead | When made |
| Owner | Named role / person | Yes | Regulatory lead | When made |
| Due date | Date | Yes | Owner | When made |
| Status | Open / in progress / met / superseded | Yes | Owner | Updated through |
| Evidence of closure | Link / doc number | Yes (to close) | Owner | At closure |
| QA verified (Y/N) | For quality-system commitments | Conditional | QA | At closure |

### Commitment register table

| Commitment ID | Source | Commitment text | Made by | Owner | Due | Status | Evidence | QA verified |
|---|---|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## Retention

Retain for the life of the program plus the applicable record-retention period (commonly the marketing-application retention period in your jurisdiction). Confirm against `<<FILL: records retention SOP>>`.

## Acceptance criteria

- Every formal interaction appears in Part 1 with its record location.
- Every commitment, sponsor or agency, appears in Part 2 with an owner and a due date.
- No commitment is closed without evidence; quality-system commitments carry QA verification.
- The log reconciles against the actual package, minutes, and response files with no orphans.

---

## Filled specimen

Illustrative entries for an example program. Replace with your own.

### Interaction log (excerpt)

| Interaction ID | Date | Authority | Type | Topic / purpose | Status | Outcome summary | Record location |
|---|---|---|---|---|---|---|---|
| INT-2024-002 | 14 Feb 2024 | FDA | Type B pre-IND | First-in-human design, CMC plan | Closed | Agency agreed FIH design; requested added stability commitment | MIN-2024-002 |
| INT-2026-007 | 22 May 2026 | FDA | Type B pre-BLA | Comparability after site change | Closed | Agency agreed Q5E data support site change | MIN-2026-007 |
| INT-2026-009 | 03 Jun 2026 | FDA | Information request | Clarify dissolution method | Responded | Responded in 7 days; accepted | IR-2026-009 |

### Commitment register (excerpt)

| Commitment ID | Source | Commitment text | Made by | Owner | Due | Status | Evidence | QA verified |
|---|---|---|---|---|---|---|---|---|
| COM-2024-005 | INT-2024-002 | Complete stability through 24 months post-approval | Sponsor | CMC SME | Ongoing | In progress | STB-protocol-12 | n/a |
| COM-2026-018 | INT-2026-007 | Finalize comparability protocol before site transfer | Sponsor | CMC / QA | 31 Jul 2026 | Open | (pending) | (pending) |
| COM-2026-019 | INT-2026-007 | Agency position: no clinical bridging required for site change | Agency | Regulatory | n/a | Met (relied on in BLA) | MIN-2026-007 sec 3 | n/a |

The value shows at the next milestone: when the pre-BLA team needed to confirm the site-change path, COM-2026-019 captured the agency's exact position with its source, and COM-2024-005 reminded them the stability commitment from two years earlier was still live and had to be delivered.

## Common inspection findings this log prevents

- A commitment made to the agency that was never tracked and went undelivered, surfacing at inspection.
- An agency agreement referenced in a submission that cannot be traced to any minutes.
- Two functions relying on different recollections of what the agency agreed.

## How to adapt this log

1. Set your ID schemes and point the retention line to your records-retention SOP.
2. If you run many programs, key the IDs by program so the registers do not collide.
3. Add a column for the jurisdiction or Member State where a single program interacts with several authorities.
