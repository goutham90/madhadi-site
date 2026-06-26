---
title: "Matrix: Quality Event Escalation and Notification"
description: "A plug-and-play escalation and notification matrix for GMP quality events: who is notified and how fast by tier, investigation and closure targets, the reportability triggers, and the weekend/out-of-hours path, with a filled specimen and the findings it prevents."
pubDate: 2026-06-26
docType: "Matrix"
pillar: "quality-assurance"
relatedArticles: ["quality-event-classification-triage"]
tags: ["escalation", "notification", "deviations", "classification", "reportability", "matrix"]
tier: "Intermediate"
---

This is a ready-to-use escalation and notification matrix. It turns "tell the right people fast enough" into a defined table instead of an improvisation during a crisis. Replace every `<<FILL: ...>>` placeholder with your own roles, channels, and timelines, and attach it as a controlled annex to your classification SOP. A worked filled specimen follows the blank matrix. Verify each cited regulation against the current source before you rely on it.

## How to use this matrix

Severity sets who is told and how fast. The tier comes from the [classification SOP](/templates/sop-quality-event-classification-triage) and the [triage record](/templates/form-quality-event-triage-classification). Notification times start at the moment of classification, not at closure. Build the timings into your QMS workflow so they are enforced, not remembered.

## 1. Notification matrix by tier

| Tier | Notify within | Who is notified | Channel | Investigation target | Reportability check |
|---|---|---|---|---|---|
| Critical | `<<FILL: same day / hours>>` | `<<FILL: QA head, site quality lead, affected function head, regulatory affairs; management review for major safety events>>` | `<<FILL: phone + QMS + email>>` | `<<FILL: formal RCA; closure target, e.g. 30 days with justified extensions>>` | `<<FILL: field alert / BPDR / recall / vigilance assessment triggered immediately>>` |
| Major | `<<FILL: 1-2 business days>>` | `<<FILL: QA reviewer, area management>>` | `<<FILL: QMS + email>>` | `<<FILL: documented investigation with root cause; ~30 day target>>` | `<<FILL: screen for reportability; usually no immediate report>>` |
| Minor | `<<FILL: routine / logged>>` | `<<FILL: local QA / supervisor>>` | `<<FILL: QMS>>` | `<<FILL: brief; close quickly>>` | `<<FILL: none>>` |

## 2. Reportability triggers (start the clock at classification)

| Trigger | Threshold | Owner | Timeline |
|---|---|---|---|
| US field alert report | 21 CFR 314.81, specified NDA/ANDA problems | `<<FILL: Regulatory Affairs>>` | Within 3 working days |
| Biological product deviation report | 21 CFR 600.14 / 1271.350, distributed biologics or HCT/Ps | `<<FILL>>` | Generally within 45 calendar days |
| Recall / field action | Distributed product fails SISPQ | `<<FILL: Recall committee>>` | `<<FILL: immediate assessment>>` |
| GCP serious breach | ICH E6(R3) and regional rules | `<<FILL: Clinical QA>>` | `<<FILL: regional window, e.g. 7 days>>` |
| Combination product, device side | Device-side postmarket reporting | `<<FILL>>` | `<<FILL: per device framework>>` |
| QP notification (EU) | Open critical/major deviation affecting a batch | `<<FILL: QP>>` | Before certification |

## 3. Escalation path (when notification is not acknowledged)

| Step | If no response within | Escalate to |
|---|---|---|
| 1 | `<<FILL: e.g. 2 hours (critical)>>` | `<<FILL: deputy / on-call quality manager>>` |
| 2 | `<<FILL: e.g. 4 hours>>` | `<<FILL: head of quality>>` |
| 3 | `<<FILL: e.g. same day>>` | `<<FILL: site head / management review>>` |

## 4. Out-of-hours and weekend path

| Field | Entry |
|---|---|
| On-call quality contact | `<<FILL: role + reachable channel>>` |
| Critical-event out-of-hours trigger | `<<FILL: which events page the on-call>>` |
| Interim containment authority | `<<FILL: who can quarantine/stop a line out of hours>>` |
| Record-of-contact requirement | `<<FILL: log the verbal notification and confirm in QMS next business day>>` |

## 5. Acceptance criteria

- Every critical and major event has a notification record showing who was told and when.
- Notification times are met from the moment of classification.
- The reportability owner and clock are assigned at classification, not closure.
- The out-of-hours path is named and reachable, and verbal notifications are logged.
- Overdue critical/major investigations are visible and escalated.

## 6. References

> 21 CFR 211.192, 314.81, 600.14 / 1271.350; EU GMP Chapter 1 and Annex 16; ICH Q9(R1) and Q10; ICH E6(R3); 21 CFR Part 4 where applicable.

Confirm the current version of each reference before issue.

---

## Filled specimen

Illustrative completed matrix for a mid-size sterile-products site. Replace with your own.

| Tier | Notify within | Who | Channel | Investigation target | Reportability |
|---|---|---|---|---|---|
| Critical | Same day, within 2 hours | QA head, site quality lead, fill-finish head, Regulatory Affairs; management review if patient safety | Phone call + QMS event + email | Formal RCA, batch impact, closure 30 days (extension justified before due date) | Field alert / BPDR / recall assessment triggered same day |
| Major | 1 business day | QA reviewer, area manager | QMS event + email | Documented RCA + impact, 30 days | Screen; usually no immediate report |
| Minor | Logged at open | Shift QA, supervisor | QMS event | Correction + rationale, 10 days | None |

**Worked path.** A media fill shows one contaminated unit (classified critical). Within two hours the on-call QA manager pages the QA head and site quality lead; Regulatory Affairs is looped for the reportability screen; the aseptic process qualification status of all product made under that qualification is flagged; a formal investigation opens with a 30-day target. The verbal weekend notification is logged and confirmed in the QMS the next business day.

## Common inspection findings this matrix prevents

- Critical events that reached the head of quality days late, or not at all.
- A reportability obligation missed because no owner or clock was assigned at classification.
- No defined out-of-hours path, so a weekend critical event sat until Monday.
- Overdue critical investigations with no escalation and no justified extension.
- Notification "happened" but with no record of who was told or when.

## How to adapt this matrix

1. Replace every role with your real titles and reachable channels.
2. Set notification and closure timelines to match your QMS commitments.
3. Confirm the reportability thresholds and windows against the current regulations and your product types.
4. Name a real on-call contact and interim containment authority for the out-of-hours path.
5. Wire the timings into your QMS workflow so they are enforced automatically.
