---
title: "Template: Quality Metrics Trend Report"
description: "A plug-and-play quality metrics trend report: control-chart rules, complaint and deviation rates, CAPA and deviation aging and backlog, right-first-time, a management-review-ready summary, and an escalation log, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-22
docType: "Template"
pillar: "quality-assurance"
relatedArticles: ["quality-metrics-and-kpis", "out-of-trend-investigations"]
tags: ["quality metrics", "KPI", "trend report", "control chart", "right first time", "management review", "CAPA"]
tier: "Intermediate"
---

This is a ready-to-use quality metrics trend report. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your source charts, and route it through your normal review and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Quality Metrics Trend Report |
| Document number | `<<FILL: REP-ID, e.g. QMR-2026-Q2>>` |
| Reporting period | `<<FILL: from date>>` to `<<FILL: to date>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Site / scope | `<<FILL: site(s), area(s), product family in scope>>` |
| Prepared by | `<<FILL: role, e.g. Quality Metrics Lead>>` |
| Reviewed by | `<<FILL: role, e.g. Head of Quality Assurance>>` |
| Distribution | `<<FILL: management review members, recipients>>` |

## 1. Purpose

This report presents the quality metrics for `<<FILL: COMPANY NAME>>` for the period above, with trend direction, control status, and the actions arising. The objective is to give management an honest, data-backed view of process and quality system health, surface adverse trends early, and drive decisions before a single point becomes a pattern.

## 2. Scope

This report covers the metrics in section 4 for the sites, products, and quality systems listed in the header. It draws on the deviation, complaint, CAPA, change control, and batch disposition systems for the period. It does not replace individual out-of-trend (OOT) investigations, which are governed by `<<FILL: SOP-ID for OOT/OOS>>`, nor the formal management review, which it feeds.

## 3. Method: how trends and signals are decided

State the rules once, up front, so a reviewer sees that a "trend" is defined, not eyeballed. Apply the same rules every period.

| Element | Definition for this report |
|---|---|
| Baseline | `<<FILL: how the centerline / mean is set, e.g. trailing 12 months, or the validated/registered target>>` |
| Control limits | `<<FILL: e.g. mean +/- 3 sigma for an individuals chart, or a fixed action limit>>` |
| Alert (warning) limit | `<<FILL: e.g. mean +/- 2 sigma, or a defined warning threshold>>` |
| Rates | Reported per a fixed denominator (per 1,000 units, per 100 batches, per million units) so periods are comparable |
| Rounding / convention | `<<FILL: decimal places, how partial periods are handled>>` |

### 3.1 Control-chart signal rules

A metric is flagged when any of the following is true for the period. These are the common Western Electric / Nelson style run rules; cite the set you have adopted.

1. One point beyond a control (action) limit.
2. Two of three consecutive points beyond the same alert (2 sigma) limit.
3. Four of five consecutive points beyond the same 1 sigma line.
4. Seven (or eight) consecutive points on the same side of the centerline (a shift).
5. Six consecutive points steadily increasing or decreasing (a drift).
6. A point at or worse than a registered, validated, or regulatory limit, regardless of statistical status.

Any flagged metric gets a row in the escalation log (section 8) and, where required, an OOT investigation per `<<FILL: SOP-ID>>`.

## 4. Metrics dashboard

One row per metric. State the value, the comparison to last period and to the baseline, the control status, and the trend direction. Attach the source control chart for each metric as listed in section 9.

| # | Metric | Definition / denominator | This period | Last period | Baseline / target | Control status | Trend |
|---|---|---|---|---|---|---|---|
| 1 | Complaint rate | Complaints per `<<FILL: 1,000 / million units shipped>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | In control / Alert / Action | Up / Down / Flat |
| 2 | Confirmed complaint rate | Confirmed (substantiated) complaints per `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 3 | Deviation rate | Deviations per `<<FILL: 100 batches / 1,000 units>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 4 | Critical/major deviation rate | Critical + major deviations per `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 5 | Right first time (RFT) | Batches with no deviation/rework, as % of batches disposed | `<<FILL: %>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 6 | OOS rate | Confirmed OOS results per `<<FILL: 1,000 tests>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 7 | CAPA on-time closure | CAPAs closed on or before due date, as % closed | `<<FILL: %>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 8 | Recurrence / repeat deviations | Deviations linked to a prior same root cause, as % of total | `<<FILL: %>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

Add or remove rows so the dashboard matches your registered metric set. Keep every row tied to a definition and a denominator.

## 5. Complaint and deviation rate analysis

For each adverse or flagged rate, give the number, the rate, the signal rule it tripped (if any), and the leading contributors. Do not report a raw count without the rate; a rising count on rising volume can still be a falling rate.

| Item | Entry |
|---|---|
| Complaints received (count) | `<<FILL>>` |
| Units shipped (denominator) | `<<FILL>>` |
| Complaint rate (per `<<FILL>>`) | `<<FILL>>` |
| Top complaint categories | `<<FILL: e.g. appearance, packaging, efficacy, with counts>>` |
| Deviations opened (count) | `<<FILL>>` |
| By severity (critical / major / minor) | `<<FILL>>` |
| Deviation rate (per `<<FILL>>`) | `<<FILL>>` |
| Top deviation themes | `<<FILL: e.g. human error, equipment, environmental, with counts>>` |
| Signal rules tripped | `<<FILL: none, or which rule(s) and on which metric>>` |

## 6. CAPA and deviation aging and backlog

Aging is the early-warning metric inspectors look at first; a healthy rate with a growing backlog of overdue records is still a quality system in trouble. Report open inventory by age band, not just averages.

### 6.1 Deviation aging

| Status / age band | Count this period | Count last period |
|---|---|---|
| Open, within target age (`<<FILL: e.g. <=30 days>>`) | `<<FILL>>` | `<<FILL>>` |
| Open, `<<FILL: 31-60 days>>` | `<<FILL>>` | `<<FILL>>` |
| Open, `<<FILL: 61-90 days>>` | `<<FILL>>` | `<<FILL>>` |
| Open, overdue (`<<FILL: >90 days or > target>>`) | `<<FILL>>` | `<<FILL>>` |
| Total open (backlog) | `<<FILL>>` | `<<FILL>>` |
| Closed this period | `<<FILL>>` | `<<FILL>>` |

### 6.2 CAPA aging

| Status / age band | Count this period | Count last period |
|---|---|---|
| Open, within target | `<<FILL>>` | `<<FILL>>` |
| Open, overdue | `<<FILL>>` | `<<FILL>>` |
| Extensions granted this period | `<<FILL>>` | `<<FILL>>` |
| CAPA on-time closure rate | `<<FILL: %>>` | `<<FILL>>` |
| CAPA effectiveness checks due | `<<FILL>>` | `<<FILL>>` |
| Effectiveness checks failed (reopened) | `<<FILL>>` | `<<FILL>>` |

State whether backlog is growing or shrinking and the action for any band that grew. A rising overdue count with extensions masking it is itself a finding to escalate.

## 7. Right first time and process health

| Item | Entry |
|---|---|
| Batches disposed in period | `<<FILL>>` |
| Batches with at least one deviation or rework | `<<FILL>>` |
| Right first time (RFT) | `<<FILL: %>>` |
| RFT trend vs baseline | `<<FILL: up / down / flat, with the signal rule if tripped>>` |
| Rejected / scrapped batches | `<<FILL: count and %>>` |
| Rework / reprocessing events | `<<FILL>>` |
| Recurrence rate (repeat root cause) | `<<FILL: %>>` |

RFT falling while the deviation rate looks flat usually means deviations are concentrating in fewer batches; call that out rather than averaging it away.

## 8. Escalation log

Every flagged metric and every adverse trend gets a row, from detection through to the decision and owner. This log is the evidence that signals were acted on, not just plotted.

| # | Metric / trend | Signal rule tripped | Severity | Action / decision | Owner | Due date | Status |
|---|---|---|---|---|---|---|---|
| `<<FILL: 1>>` | `<<FILL: e.g. deviation rate>>` | `<<FILL: e.g. rule 4, 8-point shift>>` | `<<FILL: High / Med / Low>>` | `<<FILL: OOT raised / CAPA-#### opened / monitor>>` | `<<FILL>>` | `<<FILL>>` | Open / Closed |
| `<<FILL: 2>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 9. Management-review-ready summary

One page management can act on. State the verdict plainly, then the few things needing a decision. This section is what feeds the formal management review per `<<FILL: SOP-ID for management review>>`.

| Item | Entry |
|---|---|
| Overall verdict | `<<FILL: quality system state of control: in control / watch / action needed>>` |
| Metrics in control | `<<FILL: count of N>>` |
| Metrics in alert | `<<FILL: list>>` |
| Metrics in action / out of trend | `<<FILL: list>>` |
| Adverse trends needing a decision | `<<FILL: short list>>` |
| Resources / decisions requested | `<<FILL: what management must approve, e.g. headcount, system fix, hold>>` |
| Prior-period actions: status | `<<FILL: closed / open, with overdue called out>>` |
| Recommendation | `<<FILL: one or two clear recommendations>>` |

## 10. Acceptance criteria

This report is complete and fit for management review when all of the following are true:

- Every metric has a stated definition, denominator, and baseline, and is plotted with control and alert limits.
- The signal rules in section 3.1 were applied consistently, and every flagged metric appears in the escalation log.
- Rates, not raw counts alone, are reported, so periods are comparable across changing volume.
- Aging and backlog are shown by age band, with growth and any masking extensions called out.
- The management summary states a clear verdict and the decisions requested, and prior-period actions are tracked to closure.

## 11. References

> 21 CFR 211.180(e) (annual review of records and trends) and 211.192 (investigation of discrepancies and failures).
> ICH Q10, Pharmaceutical Quality System (management review, performance monitoring, and continual improvement).
> ICH Q9, Quality Risk Management (risk-based prioritization of signals and actions).
> EU GMP Chapter 1 (Pharmaceutical Quality System) and the Product Quality Review under Chapter 1.
> FDA Guidance for Industry, Submission of Quality Metrics Data (for the standard metric definitions, e.g. RFT, where adopted).

Confirm the current version and clause numbers of each reference before issue.

## 12. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 13. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared by | `<<FILL>>` | | |
| Reviewed by (QA) | `<<FILL>>` | | |
| Approved by (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the dashboard, aging, and summary completed for an example sterile fill-finish site for one quarter, so you can see the level of detail an inspector expects. The company and numbers are illustrative; replace them with your own.

**Reporting period:** 01 April 2026 to 30 June 2026. **Scope:** sterile fill-finish, Site B, all commercial products.

| # | Metric | This period | Last period | Baseline / target | Status | Trend |
|---|---|---|---|---|---|---|
| 1 | Complaint rate (per million units) | 3.1 | 2.9 | 3.0 (12-mo mean) | In control | Flat |
| 2 | Deviation rate (per 100 batches) | 41 | 33 | 30 (target) | Action | Up |
| 3 | Critical/major deviation rate (per 100 batches) | 6 | 4 | 5 | Alert | Up |
| 4 | Right first time | 88% | 93% | 92% | Action | Down |
| 5 | OOS rate (per 1,000 tests) | 1.2 | 1.3 | 1.4 | In control | Flat |
| 6 | CAPA on-time closure | 79% | 91% | 90% | Action | Down |
| 7 | Recurrence (repeat root cause) | 22% | 12% | <=10% | Action | Up |

Aging, deviations: 18 open within 30 days, 9 open 31 to 60 days, 11 open 61 to 90 days, 14 overdue (>90 days). Total backlog 52, up from 31 last period. CAPA: 6 overdue, 4 extensions granted, 2 effectiveness checks failed and reopened.

Management summary verdict: **action needed**. The deviation rate tripped rule 4 (an 8-point upward shift), RFT tripped a 6-point downward drift, and recurrence doubled, all pointing to the same theme: aseptic-process interventions on Line 3 after a vendor stopper change. CAPA on-time closure fell as the backlog grew and extensions piled up. Decision requested: approve a focused CAPA on the Line 3 stopper-feed interventions, add one investigator to clear the >90-day backlog, and hold the next two campaigns to a tightened intervention limit.

| Escalation # | Metric / trend | Signal rule | Action / decision | Owner | Status |
|---|---|---|---|---|---|
| 1 | Deviation rate | Rule 4, 8-point shift | OOT raised, CAPA-2026-0218 opened on Line 3 stopper feed | Mfg Ops Lead | Open |
| 2 | Right first time | 6-point downward drift | Linked to CAPA-2026-0218; interim intervention limit applied | Production Mgr | Open |
| 3 | Deviation backlog (>90 days) | Backlog grew 31 to 52 | +1 investigator approved; weekly burn-down review | QA Investigations | Open |
| 4 | Recurrence rate | Above 10% target | Root-cause depth review of repeat themes commissioned | QA Manager | Open |

In this example the metrics did not just go in a table; the report tied three flagged metrics to one root-cause theme, showed the backlog growing behind a healthy-looking closure rate, and gave management two or three concrete decisions to make. That sequence, signal to theme to decision with an owner, is exactly what a reviewer is expected to see.

## Common inspection findings this report prevents

- Metrics plotted but never assessed against defined limits, so a clear shift or drift was never flagged.
- Raw counts reported with no rate, so a trend was hidden by changing production volume.
- A healthy on-time closure rate published while the overdue backlog quietly grew, masked by serial extensions.
- Adverse trends shown in the report with no action, owner, or escalation recorded against them.
- Recurrence and repeat root causes not tracked, so the same problem recurred without anyone connecting it.
- The report produced but never presented to or acted on by management review.
- Different definitions or denominators used period to period, making the trend meaningless.

## How to adapt this report

1. Set your document number, period, scope, and distribution in the header.
2. Replace the metric rows in section 4 with your registered metric set, each with its own definition and denominator.
3. Adopt one set of control-chart signal rules in section 3.1 and apply it every period without changing it mid-stream.
4. Set your real age bands and targets in section 6 to match your deviation and CAPA SOPs.
5. Point the cross-references in sections 2, 3.1, and 9 to your real OOT/OOS, deviation, and management review procedures.
6. Confirm every regulation in section 11 against the current published version before issue.
