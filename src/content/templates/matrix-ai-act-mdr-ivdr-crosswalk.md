---
title: "Matrix: EU AI Act High-Risk Requirements to MDR/IVDR Evidence Crosswalk"
description: "A plug-and-play crosswalk that maps each EU AI Act high-risk requirement onto the existing MDR/IVDR deliverable that satisfies it, flags the genuinely new AI-specific deliverables to build, and supports one combined conformity assessment for an AI-enabled device constituent of a combination product, with a filled specimen."
pubDate: 2026-06-23
docType: "Matrix"
pillar: "ai-automation"
relatedArticles: ["eu-ai-act-life-sciences"]
tags: ["AI", "EU-AI-Act", "combination-products", "MDR", "IVDR", "crosswalk", "matrix", "regulatory"]
tier: "Advanced"
---

This is a ready-to-use crosswalk for an AI-enabled device constituent of a combination product (or a standalone diagnostic or software as a medical device) that is high-risk under the EU AI Act via the Annex I route and already goes through MDR or IVDR conformity assessment. Replace every `<<FILL: ...>>` placeholder with your own specifics. A worked filled specimen follows the template. This is general guidance to adapt, not legal or regulatory advice; confirm the AI Act, MDR, and IVDR text against current sources before relying on a mapping.

## Document control header

| Field | Entry |
|---|---|
| Crosswalk title | AI Act to MDR/IVDR Evidence Crosswalk: `<<FILL: product>>` |
| Document number | `<<FILL>>` |
| Version | `<<FILL>>` |
| Date | `<<FILL>>` |
| Product / device constituent | `<<FILL>>` |
| MDR/IVDR class and route | `<<FILL: e.g. MDR Class IIa, notified body required>>` |
| Notified body | `<<FILL: name and whether designated for AI-Act assessment too>>` |

## Purpose and principle

Where an AI-enabled device constituent already needs a notified body under MDR or IVDR, the AI Act adds requirements but does not displace the sector law, and the design intent is one combined conformity assessment rather than two parallel files. The point of this crosswalk is to show, for each AI-Act high-risk requirement, the MDR/IVDR deliverable that already satisfies it (extend it) or the new deliverable you must create (build it), so an assessor sees one coherent file.

## How to use it

1. Confirm the device's MDR/IVDR class and that a notified body is required (if so, assume the AI is high-risk via Annex I).
2. For each AI-Act requirement row, name the existing MDR/IVDR deliverable that covers it, or mark it as a new deliverable.
3. Concentrate effort on the genuinely new rows: training/validation/test data governance, AI-specific transparency and human-oversight design, and the AI-Act technical-documentation annex.
4. Confirm the notified body is designated for the AI-Act assessment and plan it inside the MDR/IVDR procedure.
5. Keep one traceable line from each AI-Act requirement to its evidence.

## The crosswalk

| AI Act high-risk requirement | Typical MDR/IVDR home (extend) | New AI-specific deliverable (build) | Evidence reference | Status |
|---|---|---|---|---|
| Risk-management system across the AI lifecycle | ISO 14971 risk-management file | Add AI-specific hazards (data drift, bias, automation reliance) | `<<FILL>>` | `<<FILL>>` |
| Data governance and data quality (training/validation/test) | Design and verification records (partial) | Data-governance record: lineage, representativeness, bias checks | `<<FILL>>` | `<<FILL>>` |
| Technical documentation | Device technical documentation | AI annex: model description, intended purpose, performance on held-out test set | `<<FILL>>` | `<<FILL>>` |
| Logging / record-keeping | Device software design records | Confirm AI event logging is designed and retained | `<<FILL>>` | `<<FILL>>` |
| Human oversight | Instructions for use and labelling | Human-oversight design: how a human reviews/overrides the AI | `<<FILL>>` | `<<FILL>>` |
| Accuracy, robustness, cybersecurity | Verification, validation, and security file | AI performance metrics and robustness/adversarial testing | `<<FILL>>` | `<<FILL>>` |
| Quality management system | Device QMS (ISO 13485) | Extend QMS scope to AI lifecycle activities | `<<FILL>>` | `<<FILL>>` |
| Transparency to users | Labelling and IFU | AI-specific transparency in the IFU | `<<FILL>>` | `<<FILL>>` |
| Conformity assessment and CE marking | MDR/IVDR conformity assessment | Confirm AI-Act elements assessed inside the same procedure | `<<FILL>>` | `<<FILL>>` |
| Post-market monitoring | MDR post-market surveillance plan | Add monitoring of model performance and drift in the field | `<<FILL>>` | `<<FILL>>` |
| Registration | EUDAMED / device registration | Confirm AI-Act registration obligations addressed | `<<FILL>>` | `<<FILL>>` |

## Acceptance criteria

- Every AI-Act high-risk requirement maps to a named MDR/IVDR deliverable or a named new deliverable.
- The data-governance record demonstrates the training data was representative for the intended population.
- Human oversight and AI transparency are designed in and reflected in the IFU.
- The conformity-assessment plan names a notified body covering both regimes.
- One traceable line runs from each AI-Act requirement to its evidence; there is no separate parallel file.

## References

> Regulation (EU) 2024/1689 (EU AI Act): Article 6(1) and Annex I; the high-risk requirements (Articles 9 to 15) for risk management, data governance, technical documentation, record-keeping, transparency, human oversight, accuracy/robustness/cybersecurity.
> EU MDR (EU) 2017/745 and IVDR (EU) 2017/746.
> ISO 14971 (risk management) and ISO 13485 (QMS) referenced by number; describe in original wording, do not paste.
> Confirm articles and the conformity-assessment route against current sources; the Digital Omnibus package and harmonised standards are still maturing.

## Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Regulatory) | `<<FILL>>` | | |
| Reviewer (Quality) | `<<FILL>>` | | |
| Approver | `<<FILL>>` | | |

---

## Filled specimen

A crosswalk for an example connected delivery system with an AI dosing-guidance feature; the device constituent assessed on its own would be MDR Class IIa (illustrative).

| AI Act requirement | MDR/IVDR home (extend) | New deliverable (build) | Status |
|---|---|---|---|
| Risk management | ISO 14971 file RM-DEV-07 | Added hazards: dosing-guidance over-reliance, input-data error | Done |
| Data governance | Design verification DV-12 (partial) | New record DG-AI-03: training-data lineage and coverage across the intended patient population | Drafted |
| Technical documentation | Device tech file TF-DEV | AI annex AI-ANX-01: model description, intended purpose, performance vs held-out test set | Drafted |
| Human oversight | IFU rev 6 | Override and review workflow documented in IFU and design | In review |
| Post-market monitoring | PMS plan PMS-DEV-02 | Added field model-performance and drift monitoring | Planned |
| Conformity assessment | MDR procedure with NB 1234 | Confirmed NB 1234 will assess AI-Act elements within the MDR procedure | Confirmed |

The team did not start over. It extended the existing device file and built only the genuinely new AI rows, then ran one combined assessment, which is the design intent of the Act.

## Common findings this crosswalk prevents

- Treating MDR/IVDR compliance as if it satisfied the AI Act (the data-governance and AI-specific rows are additions).
- Building a duplicate parallel AI-Act file instead of extending the device technical documentation.
- Discovering at assessment that the notified body is not designated for the AI-Act elements.
- No traceable line from an AI-Act requirement to its evidence.

## How to adapt this crosswalk

1. Confirm the device class and notified-body requirement first.
2. Map each row to your real deliverables; build only the genuinely new ones.
3. Keep one combined assessment, not two programmes.
4. Maintain the traceability so an assessor sees a single coherent file.
5. Confirm the AI Act, MDR, and IVDR provisions against current sources.
