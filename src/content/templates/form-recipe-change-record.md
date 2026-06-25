---
title: "Form: Master Recipe Change Record (ISA-88 / MES)"
description: "A plug-and-play change record for a master recipe in a validated MES: change description, criticality, regulatory impact, risk-proportionate testing, versioning, and first-batch verification, with field definitions and a filled specimen."
pubDate: 2026-06-25
docType: "Form"
pillar: "manufacturing-automation"
relatedArticles: ["isa-88-batch-control-recipes"]
tags: ["isa-88", "MES", "recipe-management", "change-control", "form", "manufacturing", "ICH Q12"]
tier: "Advanced"
---

This is a ready-to-use change record for a master recipe. Use it with the recipe management and change control SOP. Replace every `<<FILL: ...>>` placeholder. A field-definition table and a filled specimen follow. This is general guidance to adapt, not legal or regulatory advice.

## Header

| Field | Entry |
|---|---|
| Change ID | `<<FILL: e.g. CC-2026-0418>>` |
| Governing SOP | `<<FILL: recipe change control SOP-ID>>` |
| Recipe / unit procedure | `<<FILL>>` |
| Current version | `<<FILL: e.g. 4.2 (effective)>>` |
| Raised by / date | `<<FILL>>` |

## Field definitions

| Field | Format | Required | Who | When |
|---|---|---|---|---|
| Change description | Text, specific old to new value | Yes | Recipe owner | At raise |
| Trigger | CAPA / tech transfer / improvement ref | Yes | Recipe owner | At raise |
| Criticality | CPP / IPC-range / functional / cosmetic | Yes | Owner + QA | At assessment |
| Regulatory impact | ICH Q12 category and filing need | Yes | Regulatory / QA | At assessment |
| Testing path | Challenge / functional / verification | Yes | Validation | At assessment |
| New version | Version number and state | Yes | Automation | At authoring |
| Approvers | Names + e-signatures | Yes | Mfg, Automation, QA | At approval |
| Effective date | Date, applied to new lots | Yes | QA | At release |
| First-batch verification | Lot and outcome | Yes | Mfg + QA | After first lot |

## Change record

| Field | Entry |
|---|---|
| Change ID | `<<FILL>>` |
| Recipe / unit procedure | `<<FILL>>` |
| Current version | `<<FILL>>` |
| Change (old to new) | `<<FILL: precise old value to new value>>` |
| Trigger | `<<FILL>>` |
| Criticality | `<<FILL: CPP / IPC acceptance range / functional non-CPP / cosmetic>>` |
| Regulatory impact | `<<FILL: ICH Q12 established-conditions assessment; reporting category; variation needed Y/N>>` |
| Testing / revalidation | `<<FILL: testing performed proportionate to risk; evidence reference>>` |
| New version | `<<FILL: e.g. 4.3 (draft to approved)>>` |
| Approvers | `<<FILL: Mfg lead, Automation engineer, QA>>` |
| Effective date | `<<FILL: applied to new lots only>>` |
| Superseded version retained | Yes / No |
| First-batch verification | `<<FILL: lot number, heightened-review outcome>>` |

## Acceptance criteria

- The change states a precise old-to-new value, not a vague description.
- Criticality is assessed and drives the testing path (a CPP or IPC-range change is never routed as cosmetic).
- Regulatory impact is assessed against established conditions before release.
- The new version is approved with electronic signatures by manufacturing, automation, and QA.
- The prior version is retained for reconstruction.
- The first batch on the new version is verified with heightened review.

## References

> 21 CFR 211.186, 211.188, 211.100; 21 CFR Part 11; EU GMP Annex 11.
> ANSI/ISA-88 (IEC 61512); ICH Q12; ICH Q9.

Confirm the current version and clause numbers of each reference before use.

---

## Filled specimen

The following shows a completed record. Details are illustrative; replace with your own.

| Field | Entry |
|---|---|
| Change ID | CC-2026-0418 |
| Recipe / unit procedure | DS Production, Bioreactor Production unit procedure |
| Current version | 4.2 (effective) |
| Change (old to new) | Widen harvest VCD IPC range from 18-22 to 16-24 x10^6/mL |
| Trigger | CAPA-2026-0203, recurring near-limit results, supported by additional dataset |
| Criticality | VCD is a critical in-process attribute; acceptance-range change |
| Regulatory impact | Assessed against established conditions per ICH Q12; within reported flexibility, annual-report category, no prior approval |
| Testing / revalidation | Challenge test of IPC range logic in MES; statistical justification of new range attached; no PPQ re-run needed |
| New version | 4.3 (draft to approved) |
| Approvers | Mfg lead, automation engineer, QA |
| Effective date | After approval, new lots only |
| Superseded version retained | Yes (4.2 retained) |
| First-batch verification | Lot 2026-117 reviewed with heightened scrutiny, no issues |

The record shows the full arc: a critical-attribute change correctly assessed, tested with statistical justification, approved by three functions, released forward-only, and verified on the first batch, with the prior version retained.

## Common inspection findings this form prevents

- A recipe edit with no corresponding change record.
- A vague change description that cannot be traced to a precise parameter move.
- A critical change routed through a light-touch path.
- A superseded version overwritten or deleted.
- No first-batch verification after a critical change.

## How to adapt this form

1. Set the change ID scheme and link to your change-control SOP.
2. Align the criticality categories and ICH Q12 reporting categories to your framework.
3. Confirm references against the current published versions before use.
