---
title: "Worksheet: Environmental Monitoring Sampling Plan and Limit Derivation"
description: "A plug-and-play worksheet to select viable and non-viable EM sampling sites with documented risk justification and to derive statistical alert and action limits, with a filled specimen and the regulations it satisfies. Closes the inspection finding that sampling sites and limits are not justified."
pubDate: 2026-06-22
docType: "Template"
pillar: "sterility-microbiology"
relatedArticles: ["environmental-monitoring-program"]
tags: ["environmental monitoring", "aseptic processing", "alert and action limits", "sampling sites", "Annex 1", "risk assessment", "sterility microbiology"]
tier: "Intermediate"
---

This is a ready-to-use worksheet for two deliverables an inspector always asks to see: the documented rationale for where you take environmental monitoring (EM) samples, and the documented basis for the alert and action limits you judge those samples against. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Confirm each cited regulation and limit against the current source before you rely on it, because the specific Annex 1 limits and occupancy-state distinctions are exactly the details that get misquoted.

## Document control header

| Field | Entry |
|---|---|
| Document title | Environmental Monitoring Sampling Plan and Limit Derivation |
| Document number | `<<FILL: doc ID, e.g. EM-PLAN-007>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Microbiology / QC Lead>>` |
| Room / area covered | `<<FILL: room ID and grade, e.g. Fill Suite 2, Grade A/B>>` |
| Product / process | `<<FILL: e.g. aseptic fill of sterile injectable / biologic drug substance / CGT clean area>>` |

## 1. Purpose

This worksheet documents how `<<FILL: COMPANY NAME>>` selects EM sampling sites and sets alert and action limits for the area above, so that both decisions are traceable to risk and to data rather than to habit. It produces two records an inspector can challenge directly: a site rationale that ties every sampling point to a contamination risk, and a limit derivation that shows where each numeric alert and action value came from.

## 2. Scope

This worksheet covers viable monitoring (active air, settle plates, contact or RODAC surface plates, and personnel monitoring) and non-viable particle monitoring for the room and process listed in the header. It feeds the contamination control strategy (CCS) and the routine EM procedure `<<FILL: SOP-ID for routine EM execution>>`. It does not replace cleanroom classification, which is a qualification activity governed by `<<FILL: SOP-ID or protocol for classification>>`; classification establishes the room's class under defined occupancy states, while this plan governs routine monitoring during operations.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Microbiology / QC | Drafts the site rationale, runs the limit derivation from historical data, owns the worksheet content. |
| Process / manufacturing SME | Confirms the product path, intervention points, and operational state against the real process. |
| Facilities / engineering | Provides smoke-study (airflow visualization) evidence and HVAC layout that inform site placement. |
| Quality Assurance | Reviews and approves the rationale and the limits, confirms re-derivation cadence is followed. |

## 4. Definitions

- **Viable monitoring**: detection of living organisms, reported as colony-forming units (CFU), by active air (CFU/m3), settle plates (CFU/plate over exposure time), and contact plates (CFU/plate).
- **Non-viable monitoring**: airborne total particle counts at >=0.5 um and >=5.0 um by light-scattering counter; says nothing about whether a particle is alive.
- **Alert limit**: an early-warning value set below the action limit; crossing it signals drift from the room's normal baseline and warrants a heightened look, not necessarily a full investigation.
- **Action limit**: a value that, when crossed, requires a documented investigation; it sits at or below the regulatory limit, never above it.
- **Contamination recovery rate**: the percentage of samples showing any recovery; the honest metric for clean zones that mostly read zero, where a mean CFU is meaningless.

## 5. Site selection by risk

### 5.1 Pull the inputs first

Before scoring any site, gather and reference: the CCS, the latest smoke-study report, the room layout with the product path marked, the intervention list from the aseptic process simulation (media fill) design, and the cleaning and gowning procedures. Site selection that ignores the smoke-study evidence or the media-fill intervention list is a soft target in an inspection.

### 5.2 Score each candidate location

For each candidate location, score the risk factors below, then justify whether it goes on the routine EM map. Use a structured method (for example FMEA) so the scoring is reproducible.

| Risk factor | What raises the score |
|---|---|
| Proximity to exposed product | Open product, aseptic connections, critical surfaces; sites should bracket the actual product path. |
| Airflow pattern | Downstream of turbulent or stagnant flow per the smoke study; unidirectional clean flow lowers risk. |
| Human intervention frequency | Anywhere operators reach, connect, or adjust; match the interventions simulated in the media fill. |
| Surface or niche history | Wet, hard-to-clean, or previously positive locations. |
| Grade and product impact | Higher grade and direct product exposure raise priority. |

### 5.3 Record the rationale

Complete the site rationale record (section 8.1) for every selected site and note any candidate locations you considered and excluded, with the reason. Frequency scales with grade and criticality: Grade A and B critical points each operating shift or each batch; lower grades less often. The cleaner the zone, the more often and more thoroughly you watch it.

### 5.4 Keep it live

Re-review site selection when the room changes, when the process or interventions change, when trending reveals a hotspot you were not watching, and at the defined CCS review cadence. A static, never-revisited sampling map is itself a finding waiting to happen.

## 6. Alert and action limit derivation

### 6.1 The rule

The regulatory limit is the ceiling, not your action limit. Set action at or below the regulatory limit, and alert below action. Derive both from the room's own historical data, not by copying the regulatory ceiling. Setting limits at the regulatory maximum, so the program can never alert until the room is already at the legal limit, defeats the purpose and is a frequent finding.

### 6.2 Method for zones with real distributions (typically Grade C/D and some B surfaces)

1. Assemble at least `<<FILL: time window, e.g. 12 months>>` of routine operational-state results for the site, with a documented count (n).
2. Compute the distribution: mean, and the percentiles you will use.
3. Set **alert** near the level the room exceeds only infrequently (commonly around the 95th percentile) and **action** near a higher percentile (commonly around the 99th), each capped so it never exceeds the regulatory limit.
4. Record the data set, time window, n, and the statistical rule so anyone can re-derive the numbers.

### 6.3 Method for near-sterile zones (Grade A and Grade B critical points)

Almost every plate reads zero, so do not compute a percentile of mostly-zero data. Instead track the **contamination recovery rate** (the fraction of samples showing any growth) and treat any single recovery in Grade A as an excursion to investigate regardless of a numeric level. Set a recovery-rate target (a Grade A target informed by USP 1116 thinking is below roughly 1% of samples) and watch the trend in recovery rate, because a creep from 0.3% to 1.5% with no single result above one CFU is the real signal that a mean-CFU chart would hide.

### 6.4 Approve and re-derive

QA reviews and approves the derived limits. Re-derive on a defined cadence (commonly annually) and after any significant change to the room, HVAC, process, or cleaning. Record the derivation in section 8.2.

## 7. Acceptance criteria

The deliverable is sound when all of the following are true:

- Every routine sampling site has a recorded risk basis traceable to the CCS, the smoke study, and the intervention list.
- Considered-and-excluded locations are noted with reasons, so the map is defensible as a choice, not an accident.
- Each numeric alert and action limit is re-derivable from a recorded data set, time window, n, and stated statistical rule.
- Alert sits below action; action sits at or below the regulatory limit; near-sterile zones use recovery-rate logic, not a percentile of zeros.
- The derivation cadence and the trigger for re-derivation are stated, and the last review date is current.
- Anyone can ask "where did this site come from?" and "where did this number come from?" and you can show the answer.

## 8. Records generated

### 8.1 Site rationale record

| Site ID | Location | Grade | Method | Frequency | Risk basis (proximity / airflow / intervention) | On map? |
|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: active air / settle / contact / personnel / non-viable>>` | `<<FILL>>` | `<<FILL>>` | Yes / No (reason) |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Yes / No (reason) |

### 8.2 Limit derivation record

| Site ID | Method / unit | Data window and n | Mean | 95th pct | 99th pct | Regulatory limit | Alert set | Action set | Basis |
|---|---|---|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL: e.g. active air, CFU/m3>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: percentile rule, or recovery-rate logic for Grade A>>` |

## 9. References

> EU GMP Annex 1, Manufacture of Sterile Medicinal Products (2022 revision), for cleanroom grades, viable and non-viable limits, continuous monitoring of Grade A/B, and the contamination control strategy.
> FDA Guidance for Industry, Sterile Drug Products Produced by Aseptic Processing, Current Good Manufacturing Practice (2004), for program intent, frequency, and monitoring during operations.
> 21 CFR 211.42, 211.46, 211.113, and 211.192, for aseptic area controls, HVAC, control of microbiological contamination, and investigation of discrepancies.
> ISO 14644-1 and 14644-2, for cleanroom classification and monitoring (a qualification activity, distinct from routine monitoring).
> USP <1116>, Microbiological Control and Monitoring of Aseptic Processing Environments, for contamination recovery rates and low-count statistics.
> ICH Q9(R1), Quality Risk Management (2022), for the risk-based site selection method.

Confirm the current version, clause numbers, and the specific limits of each reference before issue.

## 10. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 11. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Microbiology / QC) | `<<FILL>>` | | |
| Reviewer (Process SME) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the two records completed for an example aseptic fill suite, so you can see the level of detail an inspector expects. The company, sites, and numbers are illustrative; replace them with your own and confirm the regulatory limits against the current Annex 1 text.

### Site rationale (extract)

| Site ID | Location | Grade | Method | Frequency | Risk basis | On map? |
|---|---|---|---|---|---|---|
| A-01 | Needle / filling point, at exposed product | A | Settle plate + active air | Each fill / each batch | Highest proximity to open product; in unidirectional flow but directly over the product path | Yes |
| A-02 | Stopper bowl, aseptic connection | A | Contact + active air | Each fill | Aseptic connection, frequent operator intervention per media-fill list | Yes |
| B-04 | RABS background, left of fill line | B | Active air + contact | Each shift | Background supporting Grade A; smoke study shows mild turbulence at this corner | Yes |
| C-02 | Component staging bench | C | Settle plate | Each shift | Lower proximity; staged components are still closed at this point | Yes |
| (excluded) | Return-air grille, far wall | B | -- | -- | Considered; far from product path, downstream of all activity, low product impact | No (low risk) |

### Limit derivation (extract)

| Site ID | Method / unit | Data window and n | Mean | 95th pct | 99th pct | Regulatory limit | Alert set | Action set | Basis |
|---|---|---|---|---|---|---|---|---|---|
| C-02 | Active air, CFU/m3 | 12 months, n=480 | 3 | 14 | 28 | 100 (Grade C) | 15 | 30 | Alert near 95th pct, action near 99th pct, both below the 100 ceiling |
| A-01 | Settle plate, CFU | 12 months, n=300 | ~0 | n/a | n/a | <1 (Grade A) | n/a | any recovery | Near-sterile: recovery rate tracked, target below ~1%; any single recovery investigated |

For C-02 the alert and action come from the room's own distribution: 15 sits near the 95th percentile, 30 near the 99th, and both stay well under the Grade C limit of 100, so the program reacts to drift long before the room reaches the legal ceiling. For A-01 the team did not compute a percentile of mostly-zero data; they set no numeric "level" beyond the Grade A expectation and instead trend the recovery rate, treating any single growth as an excursion. That is the difference between a limit set from data and a limit copied from the regulation.

## Common inspection findings this worksheet prevents

- Sampling sites are not justified; the map exists but no record ties each point to a contamination risk.
- Site placement ignores the smoke study or the media-fill intervention list, so the points that matter are not watched.
- Alert and action limits are set at the regulatory maximum, so the program can never alert until the room is already at the legal limit.
- A Grade A "limit" is built from a percentile of zeros instead of a recovery-rate approach, hiding slow contamination creep.
- Limits exist but cannot be re-derived; no one can show the data set, the time window, or the rule behind the numbers.
- The sampling map and limits were set once and never re-reviewed after a room, process, or HVAC change.

## How to adapt this worksheet

1. Set your document number, owner, room, and process in the header.
2. Run section 5 against your real room: pull the CCS, smoke study, layout, and intervention list, then score and record every site, including the ones you exclude.
3. Run section 6 against your own historical data: percentile method for zones with real distributions, recovery-rate method for Grade A and critical Grade B points.
4. Point the cross-references in section 2 to your real routine EM and classification procedures.
5. State your re-derivation cadence and re-review triggers, and keep the last-review date current.
6. Confirm every limit and regulation in section 9 against the current published Annex 1, USP, and CFR text before issue.
