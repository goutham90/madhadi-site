---
title: "SOP: Microbial Identification of Recovered Isolates"
description: "A plug-and-play standard operating procedure for identifying microorganisms recovered from environmental monitoring, water, bioburden, and sterility testing: the level of identification by risk, the method workflow, MALDI-TOF score thresholds and sequencing escalation, and the records, with a filled specimen."
pubDate: 2026-06-28
docType: "SOP"
pillar: "sterility-microbiology"
relatedArticles: ["microbial-id-and-em-excursions", "environmental-monitoring-program", "sterility-testing-usp-71"]
tags: ["microbial identification", "MALDI-TOF", "16S sequencing", "environmental monitoring", "Annex 1", "SOP"]
tier: "Intermediate"
---

This is a ready-to-use SOP for identifying recovered microorganisms in a GMP microbiology laboratory. Replace every `<<FILL: ...>>` placeholder, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows. Verify each cited regulation and compendial chapter against the current source before you rely on it. This content is educational reference, not legal or regulatory advice; adapt it to your own qualified methods and quality system.

## Document control header

| Field | Entry |
|---|---|
| Document title | Microbial Identification of Recovered Isolates |
| Document number | `<<FILL: SOP-ID, e.g. SOP-QC-058>>` |
| Version | `<<FILL: version>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Micro SME / QC Manager>>` |
| Applies to | `<<FILL: lab / site in scope>>` |

## 1. Purpose

This procedure defines how `<<FILL: COMPANY NAME>>` identifies microorganisms recovered from environmental monitoring, personnel monitoring, water and utility sampling, bioburden, and sterility testing, to the level appropriate to the risk, so that identification supports excursion investigation, objectionable-organism assessment, and trending. Identification answers three questions for any isolate: where it likely came from, whether it is objectionable, and whether the same organism is recurring.

## 2. Scope

This procedure applies to all isolates recovered in GMP microbiological monitoring and testing at the lab listed in the header. It covers the level of identification, the phenotypic and genotypic methods used, the escalation rules between them, and the records generated. It does not cover the sampling methods (see `<<FILL: SOP-ID for EM sampling>>`) or the excursion investigation flow (see `<<FILL: SOP-ID for EM excursion / deviation>>`).

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| QC microbiology analyst | Confirms pure culture, performs identification, records the raw result, score, and database version. |
| Micro SME / EM program owner | Owns the identification strategy and the level-by-risk rules; reviews calls; decides escalation and strain typing. |
| Quality Assurance | Approves the SOP and the score thresholds; reviews identifications that feed investigations and dispositions. |
| Lab system administrator | Maintains the qualified instrument, the version-controlled library/database, and the audit trail. |

## 4. Definitions

- **Level of identification**: genus, species, or strain. The level is chosen by the risk of the area and the purpose of the sample.
- **MALDI-TOF score**: the confidence value the instrument returns when matching an organism's protein fingerprint to a library. The SOP defines the cutoffs for a species call, a genus call, and no reliable identification.
- **Escalation**: moving to a higher-discrimination method (sequencing) when a threshold is not met or a call is challenged.
- **Strain typing**: methods (rep-PCR, MLST, whole-genome sequencing) that discriminate below species, used to prove or disprove a link.

## 5. Procedure

### 5.1 Set the level of identification by risk

| Situation | Minimum level |
|---|---|
| Routine Grade C/D and controlled-not-classified trending | Genus (often sufficient) |
| Grade A and Grade B recoveries | Species |
| Sterility test isolates | Species, then strain typing if a link is investigated |
| Any excursion investigation | Species |
| Organisms challenging media fills and disinfectant efficacy | Species |
| Proving or disproving a contamination link | Strain |

### 5.2 Confirm a pure culture

1. Confirm the isolate is pure before identifying it; subculture and re-isolate any mixed growth.
2. Record colony and cell morphology and the Gram stain result as the first read.

### 5.3 Run the primary method (MALDI-TOF)

1. Prepare per the validated method: direct smear first; use formic-acid (tube) extraction for Gram-positives, yeasts, and molds.
2. Record the score and the call. Apply the SOP cutoffs:
   - Score at or above `<<FILL: species cutoff>>`: species-level call accepted.
   - Score between `<<FILL: genus cutoff>>` and the species cutoff: genus-level call; escalate if species is required for the situation.
   - Score below `<<FILL: genus cutoff>>`: no reliable identification; re-prep and re-run once, then escalate.
3. Record the library version used for the call.

### 5.4 Escalate to sequencing where required

Escalate to 16S rRNA sequencing (bacteria) or ITS / D2 sequencing (fungi) when: the score is below the species cutoff and species is required; the organism is poorly represented in the library; or the identification is challenged in an investigation. Record the sequencing result, the database, and the percent identity.

### 5.5 Strain typing for link investigations

When the purpose is to prove or disprove a link (for example a sterility positive against an EM isolate, or a persistent contaminant), apply a strain-typing method and record whether the isolates are the same strain.

### 5.6 Record and review

Record each identification with the raw result, the score or percent identity, the database/library version, the method, the analyst, and the date, with a reviewer signature. Retain the isolate per `<<FILL: isolate retention rule>>`, at least until any related investigation is closed.

## 6. Acceptance criteria

- The method is qualified and the database/library is version-controlled and current.
- The score or match threshold for each call level is defined and met, or escalation is documented.
- Pure culture is confirmed before identification.
- The identification record is complete (raw result, score, database version, analyst, date, reviewer).
- The level of identification matches the risk-based rule in 5.1.
- Isolates for critical-area recoveries and investigations are retained.

## 7. References

> EU GMP Annex 1, Manufacture of Sterile Medicinal Products (2022), identification and trending expectations.
> FDA guidance, Sterile Drug Products Produced by Aseptic Processing (2004).
> USP General Chapter <1113>, Microbial Characterization, Identification, and Strain Typing (described by reference only).
> USP General Chapters <1116>, <61>/<62>, <71>, and <1111> as applicable (described by reference only).
> 21 CFR 211.113 (control of microbiological contamination).

Confirm the current version and clause numbers of each reference before issue.

## 8. Record generated: identification record summary

| Field | Entry |
|---|---|
| Isolate ID and source | `<<FILL: ID, area/grade, sample type>>` |
| Gram stain / morphology | `<<FILL>>` |
| Primary method and score | `<<FILL: MALDI score and call>>` |
| Library / database version | `<<FILL>>` |
| Escalation (if any) and result | `<<FILL: sequencing / strain typing>>` |
| Final identification and level | `<<FILL>>` |
| Analyst / reviewer (names, dates) | `<<FILL>>` |

## 9. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 10. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (Micro SME) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the record completed for an example Grade A glove-print recovery. Numbers and organisms are illustrative; replace with your own.

| Field | Entry |
|---|---|
| Isolate ID and source | ISO-2026-0442, Grade A glove print, aseptic intervention |
| Gram stain / morphology | Gram-positive cocci in clusters |
| Primary method and score | MALDI direct smear below species cutoff (genus Staphylococcus); re-prep with extraction gave species score, S. epidermidis |
| Library / database version | LIB-v12.3 |
| Escalation (if any) and result | 16S sequencing held in reserve; performed and confirmed S. epidermidis after the call was challenged in the investigation |
| Final identification and level | Staphylococcus epidermidis, species |
| Analyst / reviewer | T. Lin (analyst) / S. Marsh (reviewer), 14 May 2026 |

A Grade A recovery of a typical human skin organism still triggers a full investigation because of where it was found. The species-level ID supports the conclusion that the source was personnel, which points the corrective action at gowning and aseptic technique. When the call was challenged, sequencing closed the gap rather than leaving a low-score MALDI result to be argued over.

## Common inspection findings this SOP prevents

- Critical-area recoveries identified only to genus, or "Gram-positive rod" recorded with no further work.
- A low-score MALDI call accepted with no escalation, leaving the organism's identity uncertain.
- No defined score cutoffs, so different analysts accept different confidence levels.
- The identifying library version not recorded, so a call cannot be reproduced or defended.
- Isolates discarded before the related investigation closed, making strain matching impossible.

## How to adapt this SOP

1. Set your document number, owner, and effective date in the header.
2. Fill the MALDI score cutoffs in 5.3 from your instrument's validated thresholds.
3. Confirm the level-by-risk rules in 5.1 against your area classifications and product risk.
4. Point the cross-references in section 2 to your real sampling and excursion procedures.
5. Confirm every reference in section 7 against the current published version before issue.
