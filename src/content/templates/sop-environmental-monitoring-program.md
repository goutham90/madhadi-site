---
title: "SOP: Environmental Monitoring Program for Sterile Manufacturing"
description: "A plug-and-play standard operating procedure for routine viable and non-viable environmental monitoring of cleanrooms: site selection, sampling methods, alert and action levels, incubation, plate reconciliation, trending, and excursion handling, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "SOP"
pillar: "sterility-microbiology"
relatedArticles: ["environmental-monitoring-program"]
tags: ["environmental monitoring", "aseptic processing", "annex 1", "sop", "microbiology", "contamination control"]
tier: "Intermediate"
---

This is a ready-to-use SOP for routine environmental monitoring (EM). Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed sampling record reads. Verify each cited regulation and every numeric limit against the current source for your filing before you rely on it, because the viable and non-viable limits in this SOP are orientation values and the operative numbers live in Annex 1 and your own qualification.

## Document control header

| Field | Entry |
|---|---|
| Document title | Environmental Monitoring Program for Sterile Manufacturing |
| Document number | `<<FILL: SOP-ID, e.g. SOP-QC-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. QC Microbiology Lead>>` |
| Applies to | `<<FILL: sites / cleanroom suites in scope>>` |

## 1. Purpose

This procedure defines how `<<FILL: COMPANY NAME>>` performs routine environmental monitoring of classified cleanrooms used for sterile manufacturing, so that the aseptic process is shown to remain in its qualified state. EM is surveillance, not a release test and not a sterility control. The objective is to detect drift, resident flora, and excursions early, to feed the contamination control strategy (CCS), and to produce records that account for every sample taken.

## 2. Scope

This procedure applies to all Grade A, B, C, and D cleanrooms and to the personnel who work in them at the sites in the header. It covers non-viable particle counting, viable active (volumetric) air sampling, settle (passive air) plates, contact (RODAC) plates and swabs for surfaces, and personnel monitoring of gloves and gowns. It does not cover cleanroom classification or requalification (governed by `<<FILL: SOP-ID for classification/requalification>>`), media fills (governed by `<<FILL: SOP-ID for aseptic process simulation>>`), or utility (water and gas) monitoring (governed by `<<FILL: SOP-ID for utility monitoring>>`).

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| EM operator / sampling technician | Collects samples per this SOP, records site, time, exposure duration, and sampled volume; maintains aseptic technique during sampling; reconciles plates issued against plates exposed plus controls plus documented breakages. |
| QC microbiology analyst | Incubates per the defined regime, reads and counts plates contemporaneously, records and verifies counts, runs growth promotion and negative controls. |
| QC micro lead / supervisor | Performs second-person verification of critical reads, approves isolate identification dispositions, maintains the house-flora library, reviews growth promotion results. |
| EM program owner (QA or micro SME) | Owns the EM plan and site rationale, sets and re-derives alert and action levels, runs the periodic trend review, links EM to the CCS. |
| Manufacturing / production | Runs the process so EM reflects real operations; supports interventions and physical access for sampling. |
| Quality Assurance | Approves the EM plan and SOPs; owns the deviation and CAPA systems; makes the batch-impact call on excursions; defends the program in inspection. |
| Facilities / engineering | Maintains HVAC, HEPA integrity, room qualification, smoke studies, and ingress control that EM trends point to. |

## 4. Definitions

- **Viable monitoring**: detection of organisms that can grow (bacteria, yeast, mold) by capture onto growth media, incubation, and colony counting.
- **Non-viable monitoring**: counting of total airborne particulate by a light-scattering particle counter, reported at >=0.5 um and >=5.0 um, with no distinction between living and inert particles.
- **CFU**: colony-forming unit, the count of discrete colonies recovered on a plate, used as a proxy for viable load.
- **Alert level**: an early-warning value below the action level. Crossing it signals drift from the site's normal baseline and warrants a heightened look; it is documented but does not by itself require a formal investigation.
- **Action level**: a value at or below the regulatory limit. Crossing it requires a documented investigation and corrective response.
- **Recovery rate**: the fraction of samples at a site or grade that show any growth, the honest metric for near-zero zones where a mean CFU is meaningless.
- **In operation (operational) state**: the process running with operators present and interventions occurring. Routine viable monitoring is taken in this state.

## 5. Procedure

### 5.1 Maintain the EM site map and frequency

The sites, methods, and frequencies are fixed in the EM plan `<<FILL: EM plan document ID>>`, which derives each location from a documented risk assessment grounded in product proximity, qualification smoke-study airflow, intervention frequency, and difficulty to clean. Do not sample off-map without a documented justification. Default frequency scales with grade: the cleaner the zone, the more often it is watched.

| Grade | Typical use | Default viable frequency | Non-viable monitoring |
|---|---|---|---|
| A | Critical zone: open product, aseptic connections, filling | Each fill / each batch, settle plates exposed throughout the operation | Continuous during operations |
| B | Background to Grade A | Each operating shift | Continuous during operations |
| C | Less critical preparation | Each operating day or per defined schedule | Periodic per schedule |
| D | Support areas | Per defined schedule | Periodic per schedule |

Confirm your own frequencies in `<<FILL: EM plan document ID>>`; the table is the default starting point.

### 5.2 Set up and qualify before sampling

1. Use only media lots with a passing growth promotion record dated before first use; quarantine any failing lot. Settle plates, contact plates, and active-air agar each require growth promotion against the standardized test panel plus representative house isolates, with recovery within roughly 50 to 200 percent of the inoculated count.
2. Run a negative control (an uninoculated plate from the same lot, incubated alongside) with each session to confirm the media was not pre-contaminated.
3. Use only active-air samplers with current calibration of flow rate and sampled volume and a characterized capture efficiency.
4. Confirm the incubation regime in section 5.5 matches the recovery study; do not shorten it for convenience.

### 5.3 Collect samples

1. Draw plates from controlled stock and log the lot, quantity issued, and expiry on the sampling record.
2. **Active air:** sample a defined measured volume (commonly 1,000 L = 1 m3) at each mapped point and record the volume and time. Report as CFU/m3.
3. **Settle plates:** expose at the mapped point for the defined period (commonly up to 4 hours per plate in critical zones; never exceed the qualified maximum exposure). Record exposure start and end times. Report as CFU per plate.
4. **Contact (RODAC) plates and swabs:** press a contact plate to a flat surface, or swab an irregular surface, at each mapped point. Disinfect the sampled surface afterward where required. Report contact plates as CFU per plate.
5. **Personnel monitoring:** sample gloved fingertips and the mapped gown locations at the end of the aseptic intervention or shift, before the operator de-gowns. Report as CFU per plate.
6. Maintain aseptic technique throughout so the act of sampling does not create the contamination it is meant to detect.
7. Record on the sampling record (section 8): site ID, grade, method, sampled volume or exposure time, operator, date, and time, contemporaneously.

### 5.4 Reconcile plates

Before plates leave the area, reconcile: **plates issued = plates exposed + negative controls + documented breakages or exclusions**. Every plate that left controlled stock must end at a recorded result or a documented, justified exclusion. Record the reconciliation on the sampling record. An unaccounted plate is treated as a data-integrity event and escalated per section 5.8.

### 5.5 Incubate and read

1. Incubate per the qualified regime, for example a defined lower-temperature band suited to fungi and a higher band suited to bacteria, with the total duration and band order set by the recovery study. Record incubation start and end stamps.
2. Read and count colonies contemporaneously. Initial, date, and time each read. Do not record counts later from memory or a loose note.
3. Obtain a second-person verification of counts at all Grade A and Grade B critical sites and of any plate showing growth.
4. Retain or photograph plates with growth so a count can be re-examined; retain per `<<FILL: retention period for EM plates/images>>`.

### 5.6 Apply alert and action levels

1. Compare each result to the site-specific alert and action levels recorded in `<<FILL: alert/action level report ID>>`. These are derived statistically from the site's own historical data, action at or below the regulatory limit and alert below action, not copied from the regulatory ceiling.
2. In Grade A, treat any single recovery as an excursion regardless of a numeric level.
3. **Alert crossed:** document it, flag for the next trend review, and apply any defined heightened-look response.
4. **Action crossed (or any Grade A recovery):** initiate an excursion investigation per section 5.7.

### 5.7 Handle excursions

Open a deviation per `<<FILL: SOP-ID for deviation management>>` and investigate per `<<FILL: SOP-ID for environmental excursion investigation>>` (the EM excursion form). At minimum: retain and photograph the plate; treat the count as real until objective evidence shows otherwise (do not reflexively disposition as "lab error"); identify the organism by a validated method; assess which product or units were exposed in the window and place affected material on hold; find and fix the root cause; verify with enhanced monitoring; and add the isolate to the house-flora library.

### 5.8 Document, trend, and approve

1. Complete the EM sampling record (section 8) for every session, including sessions with no growth.
2. The EM program owner reviews EM trends on the defined cadence by site, room, grade, and organism, looking for rising recovery rate, recurring organisms at recurring sites, seasonal or shift patterns, and correlation across methods (use the EM trend report, `<<FILL: trend report SOP/template ID>>`).
3. Trend reviews are signed, dated, and fed back into the CCS and the site map.
4. Retain all EM records per the records retention schedule, for not less than `<<FILL: retention period>>`.

## 6. Acceptance criteria

A monitoring session and its record are acceptable when all of the following are true:

- Every plate issued is reconciled to a recorded result or a documented, justified exclusion, with no gaps.
- Each media lot used has a passing growth promotion record dated before first use, and the negative control is clean.
- Samples were taken in operation at the mapped sites, with site, time, volume or exposure, and operator recorded contemporaneously.
- Reads are attributable (initialed, dated, timed), and Grade A/B critical reads and any growth are second-person verified.
- Results are compared to site-specific alert and action levels, any Grade A recovery or action breach is escalated to an investigation, and affected product is held until resolved.
- The record is complete, signed, dated, and reviewed within the defined time.

## 7. References

> EU GMP Annex 1, Manufacture of Sterile Medicinal Products (cleanroom grades, viable and non-viable limits, contamination control strategy, continuous Grade A/B monitoring in operation).
> FDA Guidance for Industry, Sterile Drug Products Produced by Aseptic Processing, Current Good Manufacturing Practice (program intent, frequency, link to media fills).
> 21 CFR 211.42, 211.46, 211.113, 211.192 (aseptic area controls, HVAC, microbiological control, investigation of discrepancies).
> ISO 14644-1 and 14644-2 (cleanroom classification by particle concentration and monitoring; a qualification activity, not a routine action level).
> USP <1116> Microbiological Control and Monitoring of Aseptic Processing Environments (contamination recovery rates, low-count statistics).
> FDA Guidance for Industry, Data Integrity and Compliance With Drug CGMP, and 21 CFR Part 11 (for LIMS and automated colony counters).
> ICH Q9, Quality Risk Management (for risk-based site selection and frequency).

Confirm the current version, clause numbers, and limits of each reference before issue.

## 8. Record generated: EM sampling record

| Field | Entry |
|---|---|
| Suite / room and grade | `<<FILL: room ID and grade>>` |
| Operation monitored | `<<FILL: e.g. fill of batch ID, or at-rest qualification>>` |
| State | In operation / At rest |
| Media lot(s) and expiry | `<<FILL>>` |
| Growth promotion record(s) referenced | `<<FILL: GP record ID(s)>>` |
| Plates issued / exposed / controls / breakages | `<<FILL>>` / `<<FILL>>` / `<<FILL>>` / `<<FILL>>` |
| Reconciliation balanced (Yes/No) | `<<FILL>>` (if No, escalate per 5.8) |
| Per-site results (site ID, method, volume/exposure, CFU) | `<<FILL: list>>` |
| Negative control result | `<<FILL: no growth / growth (investigate)>>` |
| Alert/action levels exceeded | `<<FILL: none, or list>>` |
| Deviation reference (if raised) | `<<FILL: number or N/A>>` |
| Operator (name, signature, date, time) | `<<FILL>>` |
| Second-person verification of critical reads (name, signature, date) | `<<FILL>>` |
| QC review (name, signature, date) | `<<FILL>>` |

## 9. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 10. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (QC Micro Lead) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the sampling record completed for an example aseptic fill, so you can see the level of detail an inspector expects. The company, room, organisms, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Suite / room and grade | Fill suite FS-2, Grade A critical zone within Grade B background |
| Operation monitored | Fill of batch BX-2606-014, sterile injectable |
| State | In operation |
| Media lot(s) and expiry | TSA settle lot TSA-2604, exp 2026-11; TSA contact lot TSC-2603, exp 2026-10 |
| Growth promotion record(s) referenced | GP-2026-088 (settle), GP-2026-090 (contact) |
| Plates issued / exposed / controls / breakages | 12 / 10 / 1 / 1 (one settle plate dropped during placement, documented) |
| Reconciliation balanced (Yes/No) | Yes (10 exposed + 1 control + 1 breakage = 12 issued) |
| Per-site results | A-01 needle/fill point settle 0 CFU; A-02 stopper bowl settle 0 CFU; A-03 right glove (personnel) 0 CFU; B-04 background active air 1,000 L = 2 CFU/m3; B-05 operator chest gown 1 CFU |
| Negative control result | No growth |
| Alert/action levels exceeded | None at Grade A; B-04 below alert (alert 5 CFU/m3); B-05 below alert |
| Deviation reference (if raised) | N/A |
| Operator | M. Okafor, signed, 2026-06-15, 14:20 |
| Second-person verification of critical reads | S. Reddy, signed, 2026-06-18 (Grade A settle and personnel reads verified) |
| QC review | L. Romano, signed, 2026-06-18 |

In this example every plate that left stock is accounted for, including the dropped plate, the Grade A reads are zero and second-person verified, the in-operation state is recorded, and the personnel result is tied to a named operator. An inspector who picks this single fill can reconstruct all four EM streams and trust the record. The dropped plate is the kind of small honesty that builds credibility, it is documented as a breakage, not silently dropped from the count.

## Common inspection findings this SOP prevents

- EM presented as a release test, with no link to media fills, interventions, or the wider environmental picture.
- Plates that cannot be reconciled, plates issued that do not tie to a recorded result or a justified exclusion, read as possible data manipulation.
- Viable samples taken at rest and presented as routine operational monitoring, understating real in-process risk.
- Alert and action levels set at the regulatory ceiling, so the program can never alert until the room is already at the legal limit.
- Reads recorded later from memory, with no time stamp, no second-person check, and no retained plate.
- Media used without a passing growth promotion record dated before use.
- A static site map that ignores smoke-study airflow and is never revisited when the room or process changes.

## How to adapt this SOP

1. Set your document number, owner, and effective date in the header.
2. Replace the default frequency table in section 5.1 with your actual EM plan site map and frequencies.
3. Point the cross-references in sections 2, 5.6, and 5.7 to your real classification, media fill, alert/action level, deviation, and excursion procedures.
4. Confirm your incubation regime in section 5.5 against your own recovery study, and state the temperatures and durations explicitly.
5. Confirm every limit and every regulation in section 7 against the current published version and your filing before issue.
