---
title: "Log: Protocol Deviation Trending Register"
description: "A plug-and-play structured register for clinical protocol deviations built so the data can actually be trended by site, category, and rate, with the metrics, denominators, review cadence, and a filled specimen that turns a pile of events into a signal."
pubDate: 2026-06-29
docType: "Log"
pillar: "clinical-gcp"
relatedArticles: ["protocol-deviation-management", "risk-based-monitoring-clinical", "out-of-trend-investigations"]
tags: ["protocol-deviation", "gcp", "clinical-trials", "Log", "trending", "rbm"]
tier: "Intermediate"
---

This is a ready-to-use register for capturing clinical protocol deviations in a structured, queryable form so they can be trended. Free-text deviation logs cannot be trended, and untrended deviations are a finding by themselves. Keep one per study. Replace every `<<FILL: ...>>` placeholder, and maintain it in a queryable system rather than prose. A field guide, a metrics section, and a filled specimen follow.

## Why structure matters

A single missed visit is an event; the same missed visit at one site fifteen times is a broken process. You can only see the second if the data is structured: category, site, subject, dates, classification as discrete fields, not sentences. This register defines those fields and the metrics computed from them.

## Part 1: Deviation register (one row per deviation)

| Field | Format | Required | Notes |
|---|---|---|---|
| Deviation ID | Text | Yes | Links to the deviation record |
| Site | Code | Yes | For per-site rates |
| Subject ID | ID only | Yes | No names |
| Category | Controlled list | Yes | e.g. inclusion/exclusion, out-of-window, missed assessment, IP/dosing, consent |
| Classification | Minor / Important | Yes | Drives the important-rate metric |
| Serious breach? | Y/N | Yes | EU determination |
| Event date / discovery date | Date / date | Yes | For time-to-detect |
| Report date | Date | Conditional | For time-to-report |
| Close date | Date | Yes (to close) | For time-to-close |
| Root cause code | Controlled list | Yes | Process / training / protocol / supply / subject |
| CAPA reference | Text | Conditional | Where raised |

### Register table

| Deviation ID | Site | Subject ID | Category | Class | Serious? | Event / discovery | Report | Close | Root cause | CAPA |
|---|---|---|---|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## Part 2: Trending metrics

Compute on a defined cadence (commonly monthly at study level, per-visit at site level). Use the right denominator so a high-enrolling site is not unfairly flagged.

| Metric | Definition | Threshold / action |
|---|---|---|
| Deviation rate per site | Deviations / subjects (or / visits) per site | `<<FILL: e.g. > 1.5x study mean = review>>` |
| Important-deviation rate | Important deviations / subjects, over time | `<<FILL: rising trend = escalate>>` |
| Rate by category | Deviations per category | `<<FILL: top category = candidate amendment>>` |
| Repeated identical deviations | Same category, same site, count | `<<FILL: >= N = amendment signal>>` |
| Time-to-report | Report date minus discovery date | `<<FILL: > IRB clock = process issue>>` |
| Time-to-close | Close date minus discovery date | `<<FILL: target>>` |
| Self-identification share | Site-found / total at site | `<<FILL: low = site awareness issue>>` |

## Part 3: Review record

| Field | Entry |
|---|---|
| Review period | `<<FILL>>` |
| Outliers identified | `<<FILL>>` |
| Decisions (monitoring / retraining / amendment / CAPA) | `<<FILL>>` |
| Reviewer (name, date) | `<<FILL>>` |

## Acceptance criteria

- Deviation data is captured in discrete, queryable fields, not free text.
- Metrics are computed on the defined cadence with the correct denominator.
- Site and category outliers are identified against a defined threshold.
- At least some reviews demonstrably led to action; a register where every review concludes "no action" is not a real review.

## References

> ICH E6 GCP (risk-based quality management; sponsor oversight of deviation patterns).
> FDA guidance on a risk-based approach to monitoring of clinical investigations.
> ICH E3 (important protocol deviations in the CSR).

Confirm current versions before issue.

---

## Filled specimen

A trending review that found a real signal, illustrative.

### Register (excerpt)

| Deviation ID | Site | Subject ID | Category | Class | Serious? | Event / discovery | Report | Close | Root cause | CAPA |
|---|---|---|---|---|---|---|---|---|---|---|
| PD-014-031 | 14 | S-014-007 | Out-of-window primary draw | Important | N | 03 Jun / 17 Jun | 23 Jun | 30 Jun | Process (no window check) | PD-CAPA-022 |
| PD-014-033 | 14 | S-014-011 | Out-of-window primary draw | Important | N | 10 Jun / 17 Jun | 23 Jun | 30 Jun | Process | PD-CAPA-022 |
| PD-014-035 | 14 | S-014-014 | Out-of-window primary draw | Important | N | 14 Jun / 17 Jun | 23 Jun | 30 Jun | Process | PD-CAPA-022 |
| PD-009-018 | 09 | S-009-004 | Out-of-window primary draw | Important | N | 12 Jun / 20 Jun | 27 Jun | 04 Jul | Process | PD-CAPA-022 |

### Metric and decision

| Metric | Value | Decision |
|---|---|---|
| Repeated identical deviation (out-of-window primary draw) | 4 across 2 sites in one month (3 at site 14, 1 at site 9) | Not unique to one site, points to the scheduling tool, not just site 14 |
| Decision | Study-wide preventive action | Add an automated out-of-window alert to the visit-scheduling tool; verify the category rate drops to zero over two cycles |

Trending is what turned three separate "important" deviations into one systemic finding and one study-wide fix, instead of three site retrainings that would have left the same broken tool running everywhere. That is the difference between logging deviations and managing them.

## Common inspection findings this register prevents

- Free-text deviation logs that cannot be queried, so trending never happens.
- A systemic cause fixed at one site while it recurs at the others.
- Repeated identical deviations that should have triggered a protocol amendment.
- Trend reviews that always conclude "no action," signalling the review is theater.

## How to adapt this register

1. Set your controlled category and root-cause lists so the fields stay queryable.
2. Calibrate the thresholds to your therapeutic area and enrollment; rare-disease trials carry different baselines.
3. Feed the outputs into the monitoring plan so a flagged site drives targeted monitoring.
