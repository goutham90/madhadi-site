---
title: "Plan: Predetermined Change Control Plan (PCCP) for ML Model Retraining"
description: "A plug-and-play predetermined change control plan that pre-authorizes a bounded class of GxP machine learning model retraining: the change types allowed, the methods followed each time, and the acceptance criteria, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-28
docType: "Plan"
pillar: "ai-automation"
relatedArticles: ["gxp-ml-model-lifecycle", "change-control-validated-systems", "validating-ai-gxp-systems"]
tags: ["PCCP", "machine learning", "change control", "AI", "retraining", "validation", "GAMP5"]
tier: "Advanced"
---

This is a ready-to-use Predetermined Change Control Plan (PCCP). It pre-authorizes a defined, bounded class of model changes so that routine retraining executes against a pre-approved protocol and acceptance criteria instead of a fresh full validation each time. Anything outside the envelope still gets full change control. Replace every `<<FILL: ...>>` placeholder, set your document numbers and dates, and route it through your normal review and approval. A filled specimen follows. This content is educational reference, not legal or regulatory advice; the PCCP concept is borrowed from FDA device guidance and adapted here for GxP manufacturing and laboratory models, where no device submission is involved.

## Document control header

| Field | Entry |
|---|---|
| Document title | Predetermined Change Control Plan for `<<FILL: MODEL NAME>>` |
| Document number | `<<FILL: PCCP-ID, e.g. PCCP-DS-004>>` |
| Version | `<<FILL: version>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Model owner | `<<FILL: role>>` |
| Linked validation package | `<<FILL: validation report ID>>` |

## 1. Purpose and scope

This PCCP pre-authorizes a bounded class of retraining changes to `<<FILL: MODEL NAME / VERSION>>`, a `<<FILL: locked / continuously learning>>` model whose output `<<FILL: what GxP record or decision it serves>>`. Within the envelope defined in section 3, a retraining change executes under the methods in section 4 and the acceptance criteria in section 5 without a new validation. Any change that falls outside the envelope (section 3.2) is handled under full change control per `<<FILL: SOP-ID for change control>>`.

## 2. Regulatory basis

The PCCP mechanism comes from FDA device guidance, "Marketing Submission Recommendations for a Predetermined Change Control Plan for Artificial Intelligence-Enabled Device Software Functions" (final, December 2024), and is adapted here for a GxP model under EU GMP Annex 11 change control. The supporting frameworks are GAMP 5 (Second Edition) for proportionate validation of changes, ICH Q9(R1) for the risk basis, and the draft EU GMP Annex 22 on AI (confirm status before relying on it). The single principle: pre-agree the envelope, the method, and the acceptance criteria, so a controlled change inside the envelope is fast and a change outside it is caught.

## 3. The change envelope

### 3.1 Changes pre-authorized by this PCCP

| Allowed change | Boundary condition |
|---|---|
| Retrain on new production data of the same type | No change to input features, schema, or units |
| Refresh on a scheduled cadence | `<<FILL: e.g. quarterly>>`, regardless of measured drift |
| Retrain in response to a drift or performance act-breach | Same task, same intended use |
| Re-fit hyperparameters within a pre-defined search space | `<<FILL: bounded ranges>>`, no architecture change |

### 3.2 Changes that fall OUTSIDE this PCCP (full change control)

- A new or removed input feature, or any change to the input schema, units, or pre-processing.
- A change of model architecture or algorithm family.
- A change to the intended use, the operating context, or the population the model serves.
- A change to the acceptance criteria or the validated performance floors themselves.
- A move to a different inference platform or a different deployment topology.

A change outside the envelope invalidates the fast path. Reassess the PCCP itself when the model or its use changes materially.

## 4. The pre-approved method (executed every retrain)

1. **Open the change** referencing this PCCP and the trigger (the monitoring report, deviation, or schedule).
2. **Confirm the change is inside the envelope** (section 3.1) and record that determination. If outside, stop and route to full change control.
3. **Curate the retraining dataset** to the pre-agreed rules: representativeness, correct and quality-checked labels, no leakage between training and test, and version control. Record the dataset version and provenance.
4. **Retrain** on the qualified, version-controlled training pipeline so the run is reproducible.
5. **Evaluate the challenger against the champion** on an independent held-out test set the model never saw in training, against the criteria in section 5.
6. **Check safety-critical subgroups and regressions** so an improvement in aggregate does not hide a regression on a critical subgroup or defect type.
7. **Independent review** of the evidence by someone other than the person who trained the model.
8. **QA approval**, controlled deployment with a new version number, updated inventory entry, retained rollback version.
9. **Heightened monitoring** for `<<FILL: period>>` post-deployment to confirm in-production behavior matches the test.
10. **Close the change** with all evidence attached.

## 5. Acceptance criteria (pre-defined, applied every retrain)

The challenger is promoted only if every criterion is met. Criteria are fixed in advance and are not adjusted to make a candidate pass.

| Criterion | Acceptance |
|---|---|
| Primary metric (`<<FILL: e.g. recall>>`) | `>= <<FILL: floor>>` and `>=` champion |
| Safety metric (`<<FILL: e.g. false-negative rate>>`) | `<= <<FILL: ceiling>>` |
| Secondary metric (`<<FILL: e.g. precision>>`) | `>= <<FILL: floor>>` |
| Safety-critical subgroup (`<<FILL: subgroup>>`) | `>= <<FILL: floor>>`, no regression vs champion |
| Operational (latency) | `<= <<FILL: limit>>` |
| Held-out set independence | No data leakage between train and test, evidenced |

## 6. Roles, deliverables, and records

| Activity | Owner |
|---|---|
| Confirm change is inside the envelope | Model owner / SME |
| Curate and version data, retrain | Data science |
| Independent challenger validation | Validation / QA-overseen, not the trainer |
| Approve change and evidence | QA |
| Deploy, version, update inventory | IT / system owner |

Records generated each retrain: the change-control record, the dataset version record, the challenger evaluation record (see the paired retraining acceptance record), the deployment record, and the heightened-monitoring summary.

## 7. Revision history and approvals

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Model owner) | `<<FILL>>` | | |
| Reviewer (Validation) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows a completed envelope and acceptance set for an example defect classifier. Numbers are illustrative; replace with your own.

**Model:** VisInspect defect classifier v3.x. **Type:** Locked, quarterly retrain cadence.

Envelope (inside): retrain on new production images of the same product family, same 1024x1024 input, same intended use, quarterly or on a recall act-breach. Outside: any new product family, a switch from the current convolutional architecture, or any change that adds a new sensor input.

| Criterion | Acceptance | Challenger v3.2 result |
|---|---|---|
| Recall (defects caught) | >= 0.96 and >= champion | 0.98 Pass |
| False-negative rate | <= 4.0% | 2.0% Pass |
| Precision | >= 0.85 | 0.89 Pass |
| Cosmetic-defect subgroup recall | >= 0.95, no regression | 0.88 FAIL |
| Inference latency | <= 200 ms | 130 ms Pass |

Even though the challenger improved overall recall and halved false negatives, it regressed on the cosmetic-defect subgroup below the floor. The pre-defined subgroup criterion rejected the candidate; it was sent back rather than promoted. That is the PCCP working: a fast, controlled path that still stops a hidden regression.

## Common inspection findings this PCCP prevents

- Retraining done informally with no change control, no impact assessment, and no QA approval.
- Acceptance criteria set after seeing the results so the new model passes.
- A material change (new feature, new architecture, new use) pushed through the fast path it should never have qualified for.
- No held-out set, or a test set that leaked into training, so the evidence is meaningless.
- Old versions deleted, leaving no rollback and no way to reproduce a historical decision.

## How to adapt this plan

1. Set your document number, model name, and owner in the header.
2. Define the real envelope in section 3 for your model; be conservative about what you pre-authorize.
3. Fill the acceptance criteria in section 5 from your validation report's floors.
4. Point section 1 and 4 cross-references to your real change-control SOP and retraining record.
5. Re-approve the PCCP whenever the model, its inputs, or its intended use changes materially.
