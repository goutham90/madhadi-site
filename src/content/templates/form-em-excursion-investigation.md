---
title: "Form: Environmental Monitoring Excursion Investigation"
description: "A plug-and-play form for investigating an environmental monitoring excursion: result confirmation, organism identification, product impact assessment, root cause, CAPA, and enhanced monitoring, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Form"
pillar: "sterility-microbiology"
relatedArticles: ["environmental-monitoring-program"]
tags: ["environmental monitoring", "excursion investigation", "deviation", "microbial id", "aseptic processing", "capa"]
tier: "Intermediate"
---

This is a ready-to-use excursion investigation form. Open it whenever a viable result crosses an action level, when anything grows in Grade A, or when a non-viable count exceeds its limit. Replace every `<<FILL: ...>>` placeholder with your own specifics. A worked filled specimen follows the template. The discipline this form enforces is the same one inspectors look for: confirm the result is real before you explain it away, name the organism, hold the product, fix the source, and verify the fix held.

## Document control header

| Field | Entry |
|---|---|
| Form title | Environmental Monitoring Excursion Investigation |
| Form number | `<<FILL: FORM-ID, e.g. FRM-QC-031-02>>` |
| Linked SOP | `<<FILL: SOP-ID for EM excursion investigation>>` |
| Deviation / record number | `<<FILL: DEV/INV number>>` |
| Version | `<<FILL: version>>` |

## 1. Excursion identification

| Field | Entry |
|---|---|
| Date and time excursion detected | `<<FILL>>` |
| Detected by (name, role) | `<<FILL>>` |
| Suite / room and grade | `<<FILL: room ID and grade>>` |
| Site ID (from EM map) | `<<FILL>>` |
| Method | Active air / Settle plate / Contact / Swab / Personnel / Non-viable |
| Result | `<<FILL: CFU and units, or particle count>>` |
| Alert level / action level / regulatory limit | `<<FILL>>` / `<<FILL>>` / `<<FILL>>` |
| Excursion type | Action level exceeded / Any Grade A recovery / Non-viable limit exceeded / Alert trend |
| Operation in progress at detection | `<<FILL: e.g. fill of batch ID, at rest, cleaning>>` |
| Media lot and growth promotion record | `<<FILL: lot / GP record ID>>` |
| Plate retained and photographed (Yes/No) | `<<FILL>>` (must be Yes before disposal) |

## 2. Immediate actions (Day 0)

Record what was done on detection, before any disposition.

1. Plate retained and photographed; not discarded. `<<FILL: confirm + storage location>>`
2. Deviation opened under `<<FILL: SOP-ID for deviation management>>`. Number: `<<FILL>>`
3. Product or units exposed in the window provisionally identified and placed on hold pending impact assessment. `<<FILL: batch/units and hold status>>`
4. EM program owner and QA notified the same working day. `<<FILL: who, when>>`
5. Enhanced sampling at the affected site initiated where appropriate. `<<FILL>>`

## 3. Confirm the result is real

Rule out laboratory error with objective evidence. The default is that the count is real until evidence shows otherwise. A result must not be invalidated because it is inconvenient.

| Check | Finding |
|---|---|
| Negative control for the session clean? | `<<FILL: yes / no>>` |
| Same-lot plates from the session normal? | `<<FILL>>` |
| Media lot growth promotion passing and dated before use? | `<<FILL>>` |
| Handling, transport, and incubation reviewed for contamination opportunity? | `<<FILL>>` |
| Reader and second-person verification consistent? | `<<FILL>>` |
| Objective evidence of a specific lab error (Yes/No)? | `<<FILL>>` |
| Disposition | Result confirmed real / Invalidated with documented evidence (state evidence) |

If invalidated, the specific objective evidence must be stated here, not a generic "probable lab error": `<<FILL: evidence or "result confirmed real">>`

## 4. Organism identification

| Field | Entry |
|---|---|
| Number of colonies / isolates | `<<FILL>>` |
| Identification method | `<<FILL: e.g. MALDI-TOF, 16S rRNA sequencing, phenotypic system>>` |
| Genus / species | `<<FILL>>` |
| Likely source class | People (Staphylococcus, Micrococcus) / Ingress or materials (mold, Bacillus) / Water or wet surface (Gram-negative) / Other |
| Already in house-flora library (Yes/No) | `<<FILL>>` |
| Identification record reference | `<<FILL>>` |

Identification is required for any recovery in a critical zone and for recoveries above the defined threshold elsewhere. "1 CFU, not identified, discarded" is not an acceptable closure for a critical-zone recovery, because the source can then never be known.

## 5. Product and batch impact assessment

| Field | Entry |
|---|---|
| Product / batch(es) potentially affected | `<<FILL>>` |
| Proximity of site to exposed product | `<<FILL: e.g. settle plate at open-product fill point>>` |
| Units exposed during the excursion window | `<<FILL: count or description>>` |
| Concurrent media fill / intervention data reviewed | `<<FILL>>` |
| Concurrent EM (other streams, same operation) reviewed | `<<FILL: viable air, surface, personnel, non-viable>>` |
| Sterility risk to the batch | `<<FILL: assessment>>` |
| Disposition input to batch decision | `<<FILL: hold, release pending, reject, escalate to QA>>` |

The batch impact is one input into a holistic decision made under `<<FILL: SOP-ID for batch disposition>>`, not a standalone pass or fail. Affected product stays on hold until the assessment is complete.

## 6. Root cause and CAPA

| Field | Entry |
|---|---|
| Root cause method used | `<<FILL: e.g. 5 Whys, fishbone, fault tree>>` |
| Root cause statement | `<<FILL>>` |
| Contributing factors | `<<FILL>>` |
| Correction (immediate) | `<<FILL>>` |
| Corrective action (prevent recurrence) | `<<FILL>>` |
| Preventive action (related sites/processes) | `<<FILL>>` |
| CAPA reference(s) | `<<FILL: CAPA number(s)>>` |
| Site map / SOP changes triggered | `<<FILL: e.g. add gasket to contact-plate map and PM>>` |

## 7. Effectiveness verification (enhanced monitoring)

| Field | Entry |
|---|---|
| Enhanced monitoring plan (site, method, frequency, duration) | `<<FILL>>` |
| Results during enhanced period | `<<FILL>>` |
| Recovery returned to baseline (Yes/No) | `<<FILL>>` |
| Isolate added to house-flora library and disinfectant challenge panel (Yes/No) | `<<FILL>>` |
| Verification conclusion | `<<FILL: fix held / not held, re-open>>` |

## 8. Closure

| Field | Entry |
|---|---|
| Investigation summary | `<<FILL>>` |
| Investigator (name, signature, date) | `<<FILL>>` |
| QC micro lead review (name, signature, date) | `<<FILL>>` |
| QA approval and batch decision (name, signature, date) | `<<FILL>>` |
| Deviation closed (date) | `<<FILL>>` |

## 9. References

> EU GMP Annex 1, Manufacture of Sterile Medicinal Products (excursion handling, Grade A any-recovery expectation, link to CCS).
> FDA Guidance for Industry, Sterile Drug Products Produced by Aseptic Processing, Current Good Manufacturing Practice.
> 21 CFR 211.113 (control of microbiological contamination) and 211.192 (Production record review), which mandates investigation of any unexplained discrepancy or failure of a batch to meet specifications.
> USP <1116> Microbiological Control and Monitoring of Aseptic Processing Environments.
> ICH Q9, Quality Risk Management (impact assessment and risk-based disposition).

Confirm the current version and clause numbers before issue.

---

## Filled specimen

The following shows the form completed for an example Grade A recovery, so you can see the level of detail an inspector expects. The company, organism, and numbers are illustrative; replace them with your own.

**1. Excursion identification.** Detected 2026-06-15 15:40 by M. Okafor (EM operator). Fill suite FS-2, Grade A critical zone. Site A-01, needle/fill point. Method: settle plate. Result: 2 CFU per plate. Alert/action/limit for Grade A: any recovery is an excursion. Operation in progress: fill of batch BX-2606-014. Media lot TSA-2604, GP record GP-2026-088. Plate retained and photographed: Yes, stored in micro lab fridge R-3.

**2. Immediate actions (Day 0).** Plate retained and photographed. Deviation DEV-2026-0211 opened. Units filled during the exposure window (units 410 to 612) placed on hold. EM owner (L. Romano) and QA (P. Vance) notified 2026-06-15 16:05. Enhanced sampling at A-01 initiated for the next runs.

**3. Confirm the result is real.** Negative control clean; same-lot plates from the session normal; GP record passing and dated 2026-06-01, before use; handling and incubation reviewed, no contamination opportunity identified; reader and second-person verification consistent at 2 colonies. Objective evidence of a specific lab error: No. Disposition: result confirmed real.

**4. Organism identification.** 2 isolates. Method: MALDI-TOF, confirmed by sequencing. Identified as a mold, Aspergillus species. Likely source class: ingress or materials. Already in house-flora library: No (new). ID record IDR-2026-077.

**5. Product and batch impact assessment.** Batch BX-2606-014 potentially affected. Settle plate sat at the open-product fill point. Units 410 to 612 exposed in the window. Concurrent media fill history and the intervention log reviewed; concurrent active-air and personnel results for the same fill were zero. Sterility risk to the batch judged credible for the exposed units given proximity and a mold recovery. Disposition input: hold all exposed units, escalate batch decision to QA.

**6. Root cause and CAPA.** Method: fishbone plus 5 Whys. Root cause: a degraded door gasket near the fill line allowed unfiltered ingress, consistent with a mold recovery. Contributing factor: gasket not on the preventive maintenance list and not on the EM contact map. Correction: gasket replaced. Corrective action: gasket added to PM and to the EM contact-plate map. Preventive action: all suite door gaskets surveyed and added to PM. CAPA-2026-0098. Site map updated to add contact site for the door gasket.

**7. Effectiveness verification.** Enhanced monitoring at A-01 and the new gasket site, settle plus contact, each fill for 4 weeks. Results: all zero. Recovery returned to baseline: Yes. Isolate added to the house-flora library and disinfectant challenge panel: Yes. Verification conclusion: fix held.

**8. Closure.** Summary: a real Grade A mold recovery driven by a degraded door gasket allowing ingress; exposed units of BX-2606-014 rejected on a holistic risk assessment; gasket replaced and added to PM and EM; enhanced monitoring confirmed the fix. Investigator R. Singh, signed 2026-07-08. QC micro lead L. Romano, signed 2026-07-09. QA P. Vance, signed 2026-07-10, batch decision: reject exposed units, release remainder on full risk assessment. Deviation closed 2026-07-10.

What carried this investigation was the organism identity (a mold pointed at ingress, not at people), a confirmed real result, a real source, a verified fix, and a documented batch decision. "Probable lab error, no action" would not have survived a second look.

## Common inspection findings this form prevents

- An EM result invalidated as "lab error" with no objective evidence, the most heavily criticized practice in this domain.
- A critical-zone recovery recorded as "1 CFU" and discarded without identification, so the source can never be known and trends by organism are impossible.
- Identification shopping, re-running an isolate ID until a less alarming result appears.
- A Grade A recovery treated as noise rather than as an event with a deviation, an impact assessment, and a hold.
- Product released before the impact assessment was complete.
- A root cause that names no source and an excursion closed with no verification that the correction held.

## How to adapt this form

1. Set your form number and link it to your EM excursion SOP and deviation system in the header.
2. Point the cross-references in sections 2, 5, and 6 to your real deviation, batch disposition, and CAPA procedures.
3. State your own identification thresholds (when a recovery must be identified) and your enhanced-monitoring defaults.
4. If you use an electronic deviation or LIMS system, attach this form or replicate its fields, and keep the retained-plate photograph linked to the record.
5. Confirm every regulation in section 9 against the current published version before issue.
