---
title: "Log: Inspection Back Room Document Request Log"
description: "A plug-and-play back-room request log for an inspection or mock: request, retrieval time, screening, and release decision, so nothing is lost, retrieval time is measured, and weak records are caught before they go forward."
pubDate: 2026-06-24
docType: "Log"
pillar: "audits-inspection"
relatedArticles: ["mock-inspection-program"]
tags: ["inspection-readiness", "back-room", "log", "mock-inspection", "document-control", "retrieval-time"]
tier: "Intermediate"
---

This is a ready-to-use back-room document request log for a live inspection or a mock. The back room receives every document request, finds the record, screens it, and decides what goes to the front room. This log makes that controllable: nothing is lost, retrieval time is measured, and a weak record is caught before it turns a small request into a new line of inquiry. Replace every `<<FILL: ...>>` placeholder with your specifics. A filled specimen follows. This content is educational and general.

## Header

| Field | Entry |
|---|---|
| Log title | Back Room Document Request Log |
| Log number | `<<FILL: LOG-ID, e.g. LOG-INSP-01>>` |
| Event | `<<FILL: mock inspection / real inspection ref>>` |
| Date | `<<FILL>>` |
| Back room lead | `<<FILL>>` |

## Field definitions

| Field | Format | Required | Who | When |
|---|---|---|---|---|
| Req # | sequential integer | Yes | Scribe | At request |
| Time requested | HH:MM | Yes | Scribe | At request |
| Document requested | text | Yes | Scribe | At request |
| Owner / source | text | Yes | Back room lead | At assignment |
| Time retrieved | HH:MM | Yes | Runner | On retrieval |
| Retrieval minutes | integer | Yes | Back room lead | On retrieval |
| Screened by | initials | Yes | Screener (QA) | Before release |
| Screen result | OK / held | Yes | Screener | Before release |
| To front room (time) | HH:MM or "held" | Yes | Back room lead | At release |
| Notes | text | Yes | Screener | As needed |

## How to use it

1. The scribe logs every request the moment it is made, in order.
2. The back room lead assigns an owner and a runner.
3. The runner retrieves; the lead records retrieval time.
4. A competent screener reviews the record for completeness, an unexplained anomaly the inspector will spot, and the correct version, before it goes forward.
5. A weak or wrong record is **held**, not forwarded, and a prep statement or the right version is obtained first.
6. The lead releases the screened record to the front room through the host, not through a side conversation the inspector can overhear.

## Acceptance criteria

- Every request is logged in order with a time; nothing is lost or re-pulled blindly.
- Retrieval time is recorded for each request and reviewed (median and worst case).
- Every record is screened before it reaches the front room.
- Weak records are held and remediated before release, not forwarded unscreened.
- Communication runs through the host, not overheard side channels.

## Log

| Req # | Time req | Document requested | Owner | Time retr | Min | Screened by | Result | To front | Notes |
|---|---|---|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

---

## Filled specimen

A morning of a mock, three requests. Values are illustrative.

| Req # | Time req | Document requested | Owner | Time retr | Min | Screened by | Result | To front | Notes |
|---|---|---|---|---|---|---|---|---|---|
| 12 | 09:42 | Batch record lot 23B-114 | Production | 09:51 | 9 | QA-2 | OK | 09:55 | Complete, no flags |
| 13 | 09:48 | OOS investigation INV-0231 | QC | 10:14 | 26 | QA-1 | held | held | RCA section thin; prep statement before release |
| 14 | 10:03 | Calibration cert balance BAL-07 | Metrology | 10:07 | 4 | QA-2 | OK | 10:09 | Current, in date |

Request 13 is the teachable moment: the back room caught a weak investigation before it went forward, and the 26-minute retrieval flags an OOS file that was not where it should have been. Both are exactly what this log is meant to surface. Publish the retrieval times after the event; that single number predicts real-inspection pain and improves fast once people see it.

## Common findings this log prevents

- Slow, unmeasured document retrieval that reads to an inspector as records not under control.
- Records forwarded unscreened, so a small request opens a new line of inquiry.
- The same document re-pulled several times because nothing was tracked.
- Back-room and front-room coordination through side conversations the inspector overhears.

## How to adapt this log

1. Set your log number and event reference in the header.
2. Decide your screening standard (who screens, what "held" requires) and brief it before the event.
3. Capture retrieval minutes and review median and worst case in the wrap.
4. Use the same log in real inspections so the team has rehearsed the exact instrument.
