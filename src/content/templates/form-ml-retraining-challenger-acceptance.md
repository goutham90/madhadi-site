---
title: "Form: ML Model Retraining and Challenger Acceptance Record"
description: "A plug-and-play controlled record for a GxP machine learning retraining event: the trigger, the dataset version, the champion versus challenger evaluation on a held-out set, the subgroup checks, and the deployment decision, with field definitions and a filled specimen."
pubDate: 2026-06-28
docType: "Form"
pillar: "ai-automation"
relatedArticles: ["gxp-ml-model-lifecycle", "change-control-validated-systems", "validating-ai-gxp-systems"]
tags: ["machine learning", "retraining", "champion challenger", "change control", "AI", "record"]
tier: "Advanced"
---

This is a ready-to-use controlled record for one retraining event of a GxP machine learning model. It captures the evidence that promotes a challenger to production, or rejects it. Replace every `<<FILL: ...>>` placeholder, attach it to the governing change control, and route it through your normal review and approval. A field-definition table and a filled specimen follow. This content is educational reference, not legal or regulatory advice.

## Record header

| Field | Format | Required | Who | When |
|---|---|---|---|---|
| Record number | `<<FILL: REC-ID>>` | Yes | Author | At open |
| Change control reference | text | Yes | Author | At open |
| Model name | text | Yes | Author | At open |
| Champion version (in production) | text | Yes | Author | At open |
| Challenger version (candidate) | text | Yes | Author | At open |
| PCCP reference (if inside envelope) | text | If applicable | Model owner | At open |

## 1. Trigger and envelope determination

| Field | Entry |
|---|---|
| Retraining trigger | `<<FILL: performance breach / drift act-breach / scheduled / data or process change / defect found>>` |
| Source record | `<<FILL: monitoring report ID / deviation ID / schedule>>` |
| Inside PCCP envelope? | Yes (cite PCCP) / No (full change control) |
| Determination by | `<<FILL: name, date>>` |

## 2. Retraining dataset

| Field | Entry |
|---|---|
| Training dataset version | `<<FILL: dataset version ID>>` |
| Held-out test set version | `<<FILL: test set version ID>>` |
| Provenance and date range | `<<FILL>>` |
| Label source and QC | `<<FILL: how labels assigned and quality-checked>>` |
| Leakage check (train vs test) | Pass / Fail, `<<FILL: evidence>>` |
| Reference dataset retained and versioned | Yes / No |

## 3. Champion versus challenger evaluation (held-out set)

| Criterion | Champion | Challenger | Acceptance | Result |
|---|---|---|---|---|
| `<<FILL: primary metric>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Pass / Fail |
| `<<FILL: safety metric>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Pass / Fail |
| `<<FILL: secondary metric>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Pass / Fail |
| `<<FILL: safety-critical subgroup>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Pass / Fail |
| `<<FILL: operational metric>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Pass / Fail |

## 4. Decision

| Field | Entry |
|---|---|
| All acceptance criteria met | Yes / No |
| Decision | Promote challenger / Reject challenger |
| If promote: new production version | `<<FILL>>` |
| Rollback version retained | `<<FILL: prior version>>` |
| Inventory updated | Yes / No |
| Heightened monitoring period | `<<FILL: e.g. 30 days>>` |
| If reject: disposition | `<<FILL: returned to data science with reason>>` |

## 5. Independent review and approval

| Role | Name | Signature | Date |
|---|---|---|---|
| Trainer (data science) | `<<FILL>>` | | |
| Independent validator (not trainer) | `<<FILL>>` | | |
| QA approval | `<<FILL>>` | | |

## Field definitions

- **Champion / Challenger**: the champion is the model currently in production; the challenger is the candidate. A challenger is never promoted on training performance, only on independent held-out performance against pre-defined criteria.
- **Leakage check**: documented confirmation that no test-set record appeared in training; leakage makes the evaluation meaningless.
- **Safety-critical subgroup**: a slice of the data where a regression would cause GxP harm even if aggregate metrics improve (for example a specific defect type).
- **Heightened monitoring period**: a defined post-deployment window of closer monitoring to confirm production behavior matches the test.

## Retention

Retain with the governing change control for not less than `<<FILL: retention period>>`. The record, the dataset versions, and the rollback version together let you reproduce or defend the decision later.

---

## Filled specimen (sample row set)

The following shows a completed evaluation for an example defect classifier. Numbers are illustrative.

**Record:** REC-ML-2026-031. **Change control:** CC-2026-0091. **Model:** VisInspect. **Champion:** v3.1. **Challenger:** v3.2. **PCCP:** PCCP-DS-004 (inside envelope).

Trigger: recall act-breach in the May 2026 monitoring report (DEV-2026-0188). Training dataset DS-2026-05 (Jan to Apr 2026 production images, labels dual-reviewed). Held-out set TS-2026-05. Leakage check: Pass.

| Criterion | Champion v3.1 | Challenger v3.2 | Acceptance | Result |
|---|---|---|---|---|
| Recall | 0.96 | 0.98 | >= 0.96 and >= champion | Pass |
| False-negative rate | 4.0% | 2.0% | <= 4.0% | Pass |
| Precision | 0.91 | 0.89 | >= 0.85 | Pass |
| Cosmetic-defect subgroup recall | 0.95 | 0.88 | >= 0.95, no regression | Fail |
| Latency | 120 ms | 130 ms | <= 200 ms | Pass |

Decision: Reject challenger. Even with better overall recall and half the false negatives, v3.2 regressed on the cosmetic-defect subgroup below its floor. Returned to data science to rebalance the training set for cosmetic defects; champion v3.1 stays in production under heightened monitoring until a passing challenger is produced. Independent validator and QA both signed the rejection.

## Common inspection findings this record prevents

- A retrain promoted on training performance with no independent held-out evidence.
- No subgroup check, so an aggregate improvement hid a safety-critical regression.
- The same person trained and validated, with no independence.
- No rollback version retained, so a bad promotion cannot be undone.
- Acceptance criteria filled in after the results were known.

## How to adapt this form

1. Set your record numbering and link it to your change-control system.
2. Replace the generic criteria in sections 3 with your model's real metrics, floors, and subgroups.
3. Make the independent-validator signature a hard gate in your workflow; it cannot be the trainer.
4. Confirm the retention period against your records schedule.
