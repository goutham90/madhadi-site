---
title: "Form: Objectionable Organism Determination"
description: "A plug-and-play risk-based assessment to decide whether a recovered organism is objectionable for a given product: the inputs (route, population, pathogenicity, survival, source), the reasoned determination, the decision authority, and the product-impact linkage, with a filled specimen."
pubDate: 2026-06-28
docType: "Form"
pillar: "sterility-microbiology"
relatedArticles: ["microbial-id-and-em-excursions", "bioburden-and-endotoxin-testing", "deviation-management"]
tags: ["objectionable organism", "21 CFR 211.113", "USP 1111", "microbiology", "product impact", "form"]
tier: "Intermediate"
---

This is a ready-to-use form for determining whether a recovered organism is objectionable in the context of a specific product. The determination is risk-based and product-specific, not a fixed list, so the form captures the inputs and the reasoning rather than a lookup. Replace every `<<FILL: ...>>` placeholder, attach it to the governing investigation, and route it through your normal review and approval. Field definitions and a filled specimen follow. This content is educational reference, not legal or regulatory advice.

## Form header

| Field | Format | Required | Who | When |
|---|---|---|---|---|
| Form number | `<<FILL: OOD-ID>>` | Yes | Author | At raise |
| Investigation / deviation reference | text | Yes | Author | At raise |
| Organism (final identification) | text | Yes | Micro SME | After ID |
| Identification level and record ref | text | Yes | Micro SME | After ID |
| Product / material affected | text | Yes | Author | At raise |
| Date | date | Yes | Author | At raise |

## 1. Product and context inputs

| Input | Entry |
|---|---|
| Product type | `<<FILL: sterile injectable / inhalation / topical / nonsterile oral / API / other>>` |
| Route of administration | `<<FILL>>` |
| Patient population | `<<FILL: general / paediatric / immunocompromised / other>>` |
| Preservative system | `<<FILL: present and type, or none>>` |
| Manufacturing context | `<<FILL: aseptic fill / terminal sterilization / nonsterile, plus area/grade of recovery>>` |
| Numeric limit status | `<<FILL: within / exceeds bioburden or EM limit>>` |

## 2. Organism risk drivers

| Driver | Assessment |
|---|---|
| Route and population sensitivity | `<<FILL>>` |
| Pathogenicity / toxin (e.g. endotoxin for Gram-negatives) | `<<FILL>>` |
| Ability to survive or grow in the product / resist the preservative | `<<FILL>>` |
| Source significance (e.g. waterborne Gram-negative near a sterile fill) | `<<FILL>>` |
| Recognized association with recalls / patient harm | `<<FILL>>` |

## 3. Determination

| Field | Entry |
|---|---|
| Objectionable for this product/context? | Yes / No |
| Reasoning | `<<FILL: tie the determination to the drivers above>>` |
| Critical-zone rule applied (sterile) | `<<FILL: for sterile critical zones, any recovered organism is treated as significant>>` |
| Decision authority | Micro SME and QA |

## 4. Product-impact and onward actions

| Field | Entry |
|---|---|
| Batch impact assessment reference | `<<FILL>>` |
| Disposition input | `<<FILL: how this determination feeds disposition>>` |
| Water system / preservative review triggered | Yes / No, `<<FILL>>` |
| Recall / field-action evaluation triggered | Yes / No, `<<FILL>>` |
| Watch-list update | `<<FILL: added to organisms-of-concern list?>>` |

## 5. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Micro SME | `<<FILL>>` | | |
| QA | `<<FILL>>` | | |

QA must engage with the reasoning and the disposition input, not just sign; the determination drives whether product is at risk.

## Field definitions

- **Objectionable organism**: one that, given the product, route, population, and context, poses a risk to product quality or patient safety. The concept comes from 21 CFR 211.113 and is developed in USP <1111> and <62>. It is risk-based and product-specific.
- **Critical-zone rule**: for sterile products made aseptically, any organism recovered in the critical zone is treated as significant and fully investigated, regardless of any "pathogen" list.
- **Numeric limit status**: meeting a numeric bioburden limit does not end the inquiry; the identity can still make the organism objectionable.

## Retention

Retain with the governing investigation for not less than `<<FILL: retention period>>`. The reasoned determination is the record an inspector traces when asking why an in-limit count was, or was not, escalated.

---

## Filled specimen

The following shows the form completed for an example nonsterile oral liquid. Numbers and organisms are illustrative.

**Form:** OOD-2026-018. **Investigation:** DEV-2026-0207. **Organism:** Burkholderia cepacia complex (species-level, ID-2026-0809). **Product:** nonsterile oral liquid, aqueous.

| Input | Entry |
|---|---|
| Product type / route / population | Nonsterile aqueous oral liquid; oral; general including potentially vulnerable users |
| Preservative system | Present; the organism is known to resist some preservative systems |
| Numeric limit status | Within the numeric bioburden limit |
| Route/population sensitivity | Moderate orally, but the organism is a recognized concern for aqueous products |
| Pathogenicity / survival | Survives in water, resists some preservatives, associated with recalls of contaminated aqueous products |
| Source significance | Points to the water system and preservative efficacy |

**Determination:** Objectionable in this context, despite the count being within the numeric limit. Reasoning: Burkholderia cepacia complex is a recognized objectionable organism for nonsterile aqueous products because of its water survival, preservative resistance, and recall history; the numeric limit being met does not change that. **Actions:** batch impact assessment raised; water system and preservative-efficacy review triggered; organism added to the facility watch list; QA and Micro SME approved.

The point this specimen makes: the numeric limit was met, and a count-only program would have released the batch. The identity, not the count, drove the escalation. That is exactly the determination this form exists to force.

## Common inspection findings this form prevents

- An objectionable-organism assessment skipped for nonsterile product because the count was within the numeric limit, missing a waterborne pathogen.
- A determination made by micro alone with no QA engagement on product impact.
- A "not objectionable" conclusion asserted with no reasoning tied to route, population, survival, or source.
- A sterile critical-zone recovery treated as acceptable because it was not on a pathogen list.

## How to adapt this form

1. Set your form numbering and link it to your deviation system.
2. Replace the driver list in section 2 with any additional inputs your products require.
3. Maintain a facility watch list of organisms of concern and feed it from section 4.
4. Make QA co-approval a hard gate; confirm the retention period against your schedule.
