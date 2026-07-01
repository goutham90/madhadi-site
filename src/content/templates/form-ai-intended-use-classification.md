---
title: "Form: AI Intended-Use and Use-Pattern Classification Record"
description: "A plug-and-play front-end record for an AI/ML system in a GxP context: the one-sentence decision statement, the GxP determination, the use-pattern classification that sets the risk floor, and the GAMP category with the AI twist, feeding the detailed risk assessment, with a filled specimen and the regulations it satisfies."
pubDate: 2026-07-01
docType: "Form"
pillar: "ai-automation"
relatedArticles: ["ai-risk-assessment-gxp"]
tags: ["AI", "machine learning", "intended use", "use pattern", "GAMP", "GxP", "risk floor"]
tier: "Intermediate"
---

This is a ready-to-use record for the scoping step that comes before a full AI risk assessment. It captures the four things that must be settled first: the one-sentence statement of what the model decides, whether GxP even applies, the use pattern that sets the risk floor, and the GAMP category once you account for the trained model rather than the platform. Get these wrong and every downstream score is guesswork. This record feeds the detailed [AI/ML risk assessment](/templates/risk-assessment-ai-ml). Replace every `<<FILL: ...>>` placeholder with your own specifics. A worked filled specimen follows. Verify each cited reference against the current source, and treat AI-specific guidance as evolving rather than settled.

## Document control header

| Field | Entry |
|---|---|
| System / model name and ID | `<<FILL: name / ID>>` |
| Document number | `<<FILL: e.g. AIC-2026-007>>` |
| Version | `<<FILL: 1.0>>` |
| Author | `<<FILL: name, role>>` |
| Date | `<<FILL: date>>` |
| Linked risk assessment | `<<FILL: risk assessment doc no, or "to be raised">>` |

## 1. The decision statement (the single most important line)

State, in one sentence, the model output, the action it triggers, and the role accountable for the consequence. If you cannot write this cleanly, the intended use is undefined and you stop here.

| Field | Format | Required | Entry |
|---|---|---|---|
| Model output | Free text | Yes | `<<FILL: what the model produces>>` |
| Action it triggers | Free text | Yes | `<<FILL: what happens next as a result>>` |
| Accountable role | Role title | Yes | `<<FILL: who owns the consequence>>` |
| One-sentence decision statement | Free text | Yes | `<<FILL: output + action + accountable role in one sentence>>` |

## 2. GxP determination

Answer each. If all are No, the system is not GxP; record the rationale and stop.

| # | Question | Answer |
|---|---|---|
| 2.1 | Does it create, process, or transmit data used in GxP decisions? | Yes / No |
| 2.2 | Does it control or monitor a process affecting product quality or patient safety? | Yes / No |
| 2.3 | Does it generate records an authority could request in an inspection? | Yes / No |
| 2.4 | Is it relied on for a regulatory submission? | Yes / No |
| 2.5 | GxP determination | GxP / Not GxP |
| 2.6 | If Not GxP, rationale | `<<FILL: why>>` |

## 3. Use-pattern classification (sets the risk floor)

Select one. The pattern sets the floor; AI-specific failure modes decide how far above it you land.

| Use pattern | Definition | Risk floor | Select |
|---|---|---|---|
| Advisory / screening | Model flags or prioritizes; a human makes the determination and can catch what the model misses. | Low | `<<FILL: [ ]>>` |
| Automated classification / action | Model output drives downstream action without per-record human review. | Medium | `<<FILL: [ ]>>` |
| Process control / influence | Model influences a physical manufacturing parameter (feed rate, temperature, hold time). | High | `<<FILL: [ ]>>` |

| Field | Entry |
|---|---|
| Selected pattern and resulting risk floor | `<<FILL: pattern + floor>>` |
| Human oversight in place (who reviews, when, on what basis) | `<<FILL: describe, or "none">>` |
| For process control: independent deterministic safety interlock exists? | `<<FILL: Yes/No + description>>` |

## 4. GAMP category (with the AI twist)

Classify the artifact you actually control, not the platform's marketing category. A configured platform produces a bespoke, Category 5-like artifact the moment you train a custom model in it; an API-reached model means your controlled artifact is the prompt, retrieval, guardrails, and output handling.

| Field | Entry |
|---|---|
| Platform / delivery model | `<<FILL: e.g. commercial ML platform, API-reached LLM, custom-built>>` |
| GAMP category of the platform | `<<FILL: 3 / 4 / 5>>` |
| Artifact you own and must assess | `<<FILL: e.g. the trained classifier; the prompt+retrieval+guardrails>>` |
| Effective category for the artifact | `<<FILL: usually 5>>` |
| Model version pinned / vendor model-change behavior | `<<FILL: how you control base-model change>>` |
| Supplier assessment reference | `<<FILL: doc no or N/A>>` |

## 5. Outputs into the risk assessment

| Field | Entry |
|---|---|
| Risk floor carried forward | `<<FILL: low / medium / high>>` |
| Artifact and category for scoring | `<<FILL>>` |
| Re-look triggers (retrain, data shift, vendor model change, scheduled cadence) | `<<FILL>>` |
| Decision: proceed to full risk assessment? | Yes / No (if No, rationale) |

## Acceptance criteria

This record is complete when the one-sentence decision statement is written and names output, action, and accountable role; the GxP determination is made with a rationale; a use pattern and its risk floor are selected; the GAMP category reflects the trained/controlled artifact rather than the platform; and the re-look triggers are named. If the decision statement cannot be written, the record is not approvable.

## References

> ICH Q9(R1), Quality Risk Management (the risk-management spine; Step 4 reached 2023).
> ISPE GAMP 5, Second Edition (risk-based approach; material on machine learning).
> FDA, Computer Software Assurance for Production and Quality Management System Software (final, 24 September 2025).
> FDA draft guidance, Considerations for the Use of Artificial Intelligence To Support Regulatory Decision-Making for Drug and Biological Products (draft, January 2025; treat as evolving).
> EU GMP Annex 22, Artificial Intelligence (draft, 7 July 2025; not yet in force).
> FDA and EMA, Guiding Principles of Good AI Practice in Drug Development (non-binding, 14 January 2026).

Confirm each reference against the current source; several are drafts or non-binding.

## Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (System Owner) | `<<FILL>>` | | |
| Data Science reviewer | `<<FILL>>` | | |
| Quality Assurance | `<<FILL>>` | | |

---

## Filled specimen

The following shows the record completed for an illustrative complaint-classification model, so you can see how the scoping reads before any FMEA scoring.

| Field | Entry |
|---|---|
| System / model name and ID | Complaint Triage Classifier, CTC-01 |
| Document number | AIC-2026-007 |
| One-sentence decision statement | The model assigns a category to each incoming product complaint; the category routes it to a quality workflow; the intake QA lead owns periodic review of routing accuracy and escalates any miscategorized safety-relevant complaint. |
| GxP determination | GxP (a misrouted safety complaint can delay a required assessment) |
| Selected pattern and risk floor | Automated classification driving action; floor Medium (routing without per-record review) |
| Human oversight in place | Reviewer sees the complaint only after routing; no per-record review at intake; periodic routing-accuracy review by intake QA lead |
| Platform / delivery model | Commercial ML platform (Category 4), custom classifier trained on site data |
| Artifact you own and must assess | The trained classifier (effective Category 5) |
| Model version pinned / vendor change | Platform model library version pinned; vendor model updates trigger a re-run of the confirmatory test set |
| Risk floor carried forward | Medium |
| Re-look triggers | Retrain, product-mix shift, vendor model change, quarterly cadence |
| Decision: proceed to full risk assessment? | Yes |

The specimen shows the value of the front-end record: before anyone scores a failure mode, the file already establishes that this is a medium-floor automated classifier whose worst credible failure is a missed safety complaint, and that the artifact to assess is the trained model, not the vendor platform. The detailed risk assessment then concentrates its controls exactly there.

## Common inspection findings this record prevents

- An AI system in GxP use with no clear statement of what it actually decides, so its intended use, and therefore its validation scope, was never pinned down.
- A process-influencing model assessed as advisory for convenience, with no interlock and no failure-mode analysis.
- A trained custom model treated as covered by a vendor's general "validated AI" claim, so the site-specific instance was never assessed.
- No named re-look trigger, so a retrain or a vendor model change silently changed behavior with no re-assessment.
- A model quietly doing GxP classification that was never determined to be GxP in the first place.

## How to adapt this record

1. Set the model, document number, and author in the header.
2. Keep section 1 first; an unwritable decision statement is a stop, not a formality.
3. Align the use-pattern definitions and GAMP conventions to your CSV and AI governance procedures.
4. Link the completed record to the detailed [AI/ML risk assessment](/templates/risk-assessment-ai-ml) and the [AI supplier assessment](/templates/assessment-ai-supplier).
5. Confirm every reference against the current source, and mark drafts and non-binding principles as such.
