---
title: "Form: Microbial Identification Record"
description: "A plug-and-play controlled record for a single microbial identification: isolate source, purity, Gram stain, MALDI-TOF score and library version, sequencing or strain-typing escalation, final identification and level, with field definitions and a filled specimen."
pubDate: 2026-06-28
docType: "Form"
pillar: "sterility-microbiology"
relatedArticles: ["microbial-id-and-em-excursions", "environmental-monitoring-program", "sterility-testing-usp-71"]
tags: ["microbial identification", "MALDI-TOF", "record", "environmental monitoring", "data integrity", "form"]
tier: "Intermediate"
---

This is a ready-to-use controlled record for one microbial identification. It captures the raw result, the confidence, the library version, and any escalation, so the call is attributable, reproducible, and defensible. Replace every `<<FILL: ...>>` placeholder, attach it to the source sample or investigation, and route it through your normal review. Field definitions and a filled specimen follow. This content is educational reference, not legal or regulatory advice.

## Record header

| Field | Format | Required | Who | When |
|---|---|---|---|---|
| Record number | `<<FILL: ID-ID>>` | Yes | Analyst | At start |
| Isolate ID | text | Yes | Analyst | At start |
| Source sample / event reference | text | Yes | Analyst | At start |
| Area and grade | text | Yes | Analyst | At start |
| Sample type | text | Yes | Analyst | At start |
| Date recovered | date | Yes | Analyst | At start |

## 1. Purity and first read

| Field | Entry |
|---|---|
| Pure culture confirmed | Yes / No (if No, subculture and re-isolate) |
| Colony morphology | `<<FILL>>` |
| Cell morphology | `<<FILL>>` |
| Gram reaction | `<<FILL: Gram-positive / negative; cocci / rods; yeast / mold>>` |

## 2. Primary identification (MALDI-TOF)

| Field | Entry |
|---|---|
| Preparation | Direct smear / formic-acid extraction |
| Score | `<<FILL>>` |
| Call at that score | `<<FILL: species / genus / no reliable ID>>` |
| Organism called | `<<FILL>>` |
| Library / database version | `<<FILL>>` |
| Re-prep / re-run performed | Yes / No, `<<FILL: result>>` |

## 3. Escalation (if required)

| Field | Entry |
|---|---|
| Escalation trigger | `<<FILL: below cutoff / poorly represented / challenged in investigation>>` |
| Method | `<<FILL: 16S / ITS / D2 sequencing / strain typing>>` |
| Database and percent identity | `<<FILL>>` |
| Strain-typing result (if any) | `<<FILL: same strain / different strain>>` |

## 4. Final result

| Field | Entry |
|---|---|
| Final identification | `<<FILL>>` |
| Level achieved | Genus / Species / Strain |
| Level required for this situation | `<<FILL>>` |
| Level requirement met | Yes / No |
| Objectionable-organism assessment needed | Yes / No (route to the assessment form) |

## 5. Records and review

| Field | Entry |
|---|---|
| Isolate retained | Yes / No, location `<<FILL>>` |
| Analyst (name, signature, date) | `<<FILL>>` |
| Reviewer (name, signature, date) | `<<FILL>>` |

## Field definitions

- **Pure culture confirmed**: identification of a mixed culture is invalid; confirm purity first.
- **Score**: the MALDI confidence value; compare to the cutoffs defined in the governing SOP, not to a personal judgment.
- **Library / database version**: records which reference produced the call so it can be reproduced; the library is a controlled record changed under change control.
- **Level required for this situation**: from the risk-based rule (species for Grade A/B and investigations; genus often acceptable for routine lower-grade trending).

## Retention

Retain with the source sample record or investigation for not less than `<<FILL: retention period>>`. Retain the physical isolate at least until any related investigation closes; you cannot strain-type a plate you threw away.

---

## Filled specimen

The following shows the record completed for an example Grade B active-air recovery during an excursion. Numbers are illustrative.

**Record:** ID-2026-0771. **Isolate:** ISO-2026-0512. **Source:** EM excursion DEV-2026-0140. **Area/grade:** Grade B, active air. **Sample type:** active air, 1 m3. **Recovered:** 09 May 2026.

| Step | Entry |
|---|---|
| Pure culture | Yes |
| Gram reaction | Gram-positive cocci in tetrads |
| MALDI prep / score / call | Formic-acid extraction; score above species cutoff; Micrococcus luteus |
| Library version | LIB-v12.3 |
| Escalation | None required (clear species score, not challenged) |
| Final ID / level | Micrococcus luteus, species |
| Level required / met | Species (Grade B recovery, excursion) / Yes |
| Objectionable assessment | Not classically objectionable; assessment recorded in the investigation |
| Isolate retained | Yes, freezer rack B-12 |
| Analyst / reviewer | T. Lin / S. Marsh, 10 May 2026 |

The species-level call on a Grade B excursion isolate let the investigation conclude it was a transient human-associated organism rather than a waterborne Gram-negative or a spore-former, which directed the root cause and disposition. The isolate was retained in case the trend later required strain comparison.

## Common inspection findings this record prevents

- A call recorded with no score and no library version, so it cannot be reproduced.
- Genus recorded where the situation required species, with no escalation.
- Identification of a mixed culture with no purity confirmation.
- Isolate discarded before the related investigation closed.

## How to adapt this form

1. Set your record numbering and link it to the sample and investigation systems.
2. Make the library-version and score fields mandatory in your electronic or paper form.
3. Make the "level requirement met" answer a gate: a No must force escalation, not a sign-off.
4. Confirm the retention period and isolate-retention rule against your schedule.
