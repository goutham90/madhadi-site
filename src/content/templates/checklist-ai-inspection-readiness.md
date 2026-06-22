---
title: "Checklist: AI Inspection Readiness"
description: "A plug-and-play inspection readiness checklist for AI and machine learning in GxP: inventory, intended use, risk assessment, validation evidence, data lineage, model documentation, change and retraining records, human oversight, audit trails, vendor evidence, and monitoring, with pass/fail/NA scoring, a filled specimen, and the regulations it satisfies."
pubDate: 2026-06-22
docType: "Checklist"
pillar: "ai-automation"
relatedArticles: ["ai-inspection-readiness", "validating-ai-gxp-systems"]
tags: ["AI", "machine learning", "inspection readiness", "checklist", "GxP", "validation", "model documentation", "audit trail"]
tier: "Advanced"
---

This is a ready-to-use inspection readiness checklist for AI and machine learning systems used in a GxP context. Run it per AI system or per deployed model, not once for the whole site, because intended use, risk class, and controls differ model to model. Replace every `<<FILL: ...>>` placeholder, capture the evidence named in each row, and record a result of Pass, Fail, or N/A. A worked filled specimen follows the template. The AI-regulatory picture is moving, so verify each cited regulation against the current source before you rely on it, and where a reference is draft or proposed, treat it as such.

## Document control header

| Field | Entry |
|---|---|
| Document title | AI Inspection Readiness Checklist |
| Document number | `<<FILL: CHK-ID, e.g. CHK-QA-021>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Document owner | `<<FILL: role, e.g. Digital Quality Lead / QA>>` |
| Applies to | `<<FILL: sites / AI system categories in scope>>` |

## How to use this checklist

1. Pick one AI system or one deployed model. Record its identity in the assessment context below.
2. Work through each section. For every line, decide Pass, Fail, or N/A, and write down where the evidence is (validation report section, model card, audit trail export, SOP number, record reference). A "Pass" with no evidence is not a pass.
3. Where a line is a Fail, log it in the gap summary with a risk rating and an owner.
4. A system is inspection-ready only when every applicable line is Pass and any Fail has a dispositioned remediation plan with interim controls. A single open high-risk fail on a system that drives action means the system is not ready.
5. Re-run on a defined cycle, before a known inspection, and after any model retrain, architecture change, or change in intended use.

Scoring legend:
- **Pass**: control is in place and evidence supports it.
- **Fail**: control is missing, partial, or unevidenced. Must be logged and rated.
- **N/A**: line does not apply to this system or risk class (state why, for example explainability depth that a low-risk advisory model does not need).

## Assessment context

| Field | Entry |
|---|---|
| System / model name and ID | `<<FILL: SYSTEM NAME / MODEL ID>>` |
| GxP process supported | `<<FILL: e.g. deviation triage, complaint routing, visual inspection, batch parameter advice>>` |
| AI use pattern | Advisory / Automated classification / Process control (`<<FILL>>`) |
| Model type | `<<FILL: e.g. supervised classifier, vision model, LLM via vendor API>>` |
| Build category | GAMP Category 4 (configured) / Category 5 (custom) (`<<FILL>>`) |
| Risk class basis | `<<FILL: ICH Q9(R1) rationale, High / Medium / Low>>` |
| Model version in production | `<<FILL: version / hash>>` |
| Assessor (name, date) | `<<FILL>>` |

## 1. AI inventory complete

| # | Check | Pass criterion | Evidence to capture | Result |
|---|---|---|---|---|
| IN1 | System is on the AI inventory | The model appears on a maintained inventory of AI used in GxP processes, with owner and risk class | AI inventory extract | `<<FILL>>` |
| IN2 | No hidden AI | Any prediction or classification embedded in spreadsheets, vendor features, or scripts is identified and assessed as a model, not overlooked | Process walk-through; inventory completeness review | `<<FILL>>` |
| IN3 | Boundary defined | The inventory states where the AI starts and stops in the workflow, and what feeds it and consumes its output | Data-flow diagram | `<<FILL>>` |
| IN4 | Inventory maintained | The inventory is reviewed and updated on a defined cycle and on new deployment | Review record; update history | `<<FILL>>` |

## 2. Intended use documented

| # | Check | Pass criterion | Evidence to capture | Result |
|---|---|---|---|---|
| IU1 | Intended use stated precisely | A single approved statement names the model output, the action it triggers, and the accountable role | Intended-use statement, approved | `<<FILL>>` |
| IU2 | Use pattern classified | The model is classified as advisory, automated classification, or process control, with rationale | Risk class record | `<<FILL>>` |
| IU3 | Out-of-scope use stated | The statement says what the model is not to be used for | Intended-use statement | `<<FILL>>` |
| IU4 | Approved by QA | The intended-use statement is reviewed and approved through document control | Approval signatures | `<<FILL>>` |

## 3. Risk assessment

| # | Check | Pass criterion | Evidence to capture | Result |
|---|---|---|---|---|
| RA1 | Risk assessment performed | A documented risk assessment sizes validation effort to patient safety, product quality, and data integrity impact | Risk assessment record | `<<FILL>>` |
| RA2 | AI-specific risks addressed | Drift, explainability limits, training-data bias, automation bias, and model-failure modes are explicitly assessed, not only generic software risks | Risk assessment; FMEA where used | `<<FILL>>` |
| RA3 | Method documented | The risk method follows ICH Q9(R1) or an equivalent defined approach, with the formality matched to risk | Risk method / SOP reference | `<<FILL>>` |
| RA4 | Controls traced to risks | Each significant risk maps to a mitigating control (interlock, human review, monitoring, change control) | Risk-to-control traceability | `<<FILL>>` |

## 4. Validation and qualification evidence

| # | Check | Pass criterion | Evidence to capture | Result |
|---|---|---|---|---|
| VL1 | Performance spec set before training | Acceptance metrics and thresholds were defined in the requirements before the model was trained and tested, justified against the consequence of error | URS / performance spec, dated before test report | `<<FILL>>` |
| VL2 | Locked test set used | Reported performance comes from a version-controlled test set the model never saw in training or tuning | Test set version; test report | `<<FILL>>` |
| VL3 | Metrics meet spec | The reported metrics (for example recall, precision, F1, calibration) meet the approved thresholds | Validation report with confusion matrix or equivalent | `<<FILL>>` |
| VL4 | Deterministic controls qualified | For process control, the safety interlocks that bound the model are independently validated the conventional way | Interlock qualification record | `<<FILL>>` |
| VL5 | Traceability complete | Traceability runs from intended use to requirements to test evidence, with rationale recorded where guidance was silent | Traceability matrix | `<<FILL>>` |

## 5. Data lineage

| # | Check | Pass criterion | Evidence to capture | Result |
|---|---|---|---|---|
| DL1 | Source and lineage documented | The origin of the training, tuning, and test data is documented, including whether it was GxP data and how it was controlled | Data integrity file; source/extract record | `<<FILL>>` |
| DL2 | Representativeness assessed | The data is shown to reflect the production population across products, sites, instruments, and edge cases | Representativeness analysis | `<<FILL>>` |
| DL3 | Dataset versioned | The exact training and test datasets are versioned or hashed so the model can be reproduced | Dataset version / hash record | `<<FILL>>` |
| DL4 | Split method recorded | The train, tuning, and test split method is documented, with the test set held out | Split documentation | `<<FILL>>` |
| DL5 | ALCOA+ on production data reuse | Production data pulled back for retraining is treated as GxP data under the full ALCOA+ expectations | Retraining data record | `<<FILL>>` |

## 6. Model documentation / model card

| # | Check | Pass criterion | Evidence to capture | Result |
|---|---|---|---|---|
| MD1 | Model card exists | A model card or equivalent record describes the model, its purpose, inputs, outputs, and limits | Model card | `<<FILL>>` |
| MD2 | Architecture and version recorded | Model family, architecture, key hyperparameters, and the production version are documented | Model development record | `<<FILL>>` |
| MD3 | Known limitations stated | The model card states known weaknesses, populations it underperforms on, and conditions where it should not be trusted | Model card limitations section | `<<FILL>>` |
| MD4 | Performance characteristics published to reviewers | The performance profile is available to the operational reviewers who must apply judgment over outputs | Training material; reviewer reference | `<<FILL>>` |

## 7. Change and retraining records

| # | Check | Pass criterion | Evidence to capture | Result |
|---|---|---|---|---|
| CH1 | Change control covers the model | Model retrains, threshold moves, feature changes, and architecture changes are governed under change control | Change control SOP reference | `<<FILL>>` |
| CH2 | Predetermined change control plan | An approved plan, written before deployment, classifies anticipated changes and the testing each class requires | Predetermined change control plan | `<<FILL>>` |
| CH3 | Retrain records complete | Each retrain has a record showing the trigger, the data used, the confirmatory test result, and the approval | Retrain change records | `<<FILL>>` |
| CH4 | Revalidation threshold defined | The plan states the line above which a change forces full revalidation rather than a confirmatory check | Predetermined change control plan | `<<FILL>>` |
| CH5 | Vendor model changes governed | For an API or vendor model, vendor-driven base-model changes trigger a defined re-test and deployment hold | Vendor change handling record | `<<FILL>>` |

## 8. Human-oversight evidence

| # | Check | Pass criterion | Evidence to capture | Result |
|---|---|---|---|---|
| HO1 | Review step defined | The procedure states what the reviewer does, what information they see, and what decision they own | SOP for the workflow | `<<FILL>>` |
| HO2 | Review recorded | Reviewer conclusions go into a GxP record together with the AI output and the model version reviewed | Sample reviewed records | `<<FILL>>` |
| HO3 | Reviewers trained on weaknesses | Training records show reviewers were trained on the model's known limitations, not only on the tool | Training records | `<<FILL>>` |
| HO4 | Automation bias guarded | The workflow keeps review meaningful (for example reasoning shown, justification on agreement, acceptance-rate monitoring) | Workflow design; acceptance-rate metric | `<<FILL>>` |
| HO5 | Explainability fits the use | The level of per-decision explanation matches the risk class, and post-hoc explanations are presented as approximations, not literal causes | Explanation method note with stated limits | `<<FILL>>` |

## 9. Audit trails

| # | Check | Pass criterion | Evidence to capture | Result |
|---|---|---|---|---|
| AT1 | Inputs, outputs, decisions logged | The system records the input, the model output, the model version, the reviewer action, and the final decision, time-stamped and attributable | Audit trail export sample | `<<FILL>>` |
| AT2 | Audit trail cannot be disabled by users | The audit trail is enabled continuously and ordinary users cannot disable or edit it | Configuration evidence | `<<FILL>>` |
| AT3 | Audit trail review defined | Audit trail review for the system is defined and performed at a risk-based frequency | Audit trail review records | `<<FILL>>` |
| AT4 | Part 11 / Annex 11 controls met | Access control, time synchronization, and electronic signature controls meet 21 CFR Part 11 and Annex 11 where they apply | Part 11 assessment | `<<FILL>>` |

## 10. Vendor evidence

| # | Check | Pass criterion | Evidence to capture | Result |
|---|---|---|---|---|
| VE1 | Supplier assessed | The model or platform supplier was assessed for quality and development practices appropriate to the risk | Supplier assessment record | `<<FILL>>` |
| VE2 | Vendor claims not taken at face value | A vendor "validated AI" claim is not relied on for the site-specific trained instance; site-level evidence exists | Validation evidence for the trained instance | `<<FILL>>` |
| VE3 | Version pinning and notice | Where the vendor allows, the model version is pinned, and the vendor's model-change and notice behavior is documented | Vendor configuration; contract / agreement clause | `<<FILL>>` |
| VE4 | Vendor responsibilities defined | A quality agreement or equivalent defines who is responsible for model maintenance, security, and change notice | Quality agreement | `<<FILL>>` |

## 11. Monitoring

| # | Check | Pass criterion | Evidence to capture | Result |
|---|---|---|---|---|
| MO1 | Monitoring live from day one | A monitoring plan was operating from first production use, not added later | Monitoring plan; start date | `<<FILL>>` |
| MO2 | Performance re-checked | Performance is re-measured against the spec on periodic labeled production samples | Periodic performance review records | `<<FILL>>` |
| MO3 | Drift and override watched | Input drift and the human override / disagreement rate are tracked as leading indicators | Drift and override metrics | `<<FILL>>` |
| MO4 | Triggers and response defined | The plan states what trips a review and the defined response (notify, pause, route to fuller review, investigate) | Monitoring plan response section | `<<FILL>>` |
| MO5 | Monitoring evidence retained | Monitoring outputs are retained as GxP records and are reviewable | Retained monitoring records | `<<FILL>>` |

## Gap summary

Log every Fail from the lines above here. A system is not inspection-ready while a high-risk fail is open without a dispositioned plan and interim control.

| Gap ref | Check # | Description | Risk (H/M/L) | Owner | Remediation / due date | Interim control | Status |
|---|---|---|---|---|---|---|---|
| `<<FILL: G1>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## Overall result

| Field | Entry |
|---|---|
| Lines assessed | `<<FILL: count>>` |
| Pass | `<<FILL: count>>` |
| Fail (open) | `<<FILL: count>>` |
| N/A | `<<FILL: count>>` |
| Highest open risk | `<<FILL: H / M / L>>` |
| System verdict | Ready / Conditional (gaps with plan and interim control) / Not ready |
| Assessor (name, signature, date) | `<<FILL>>` |
| QA review (name, signature, date) | `<<FILL>>` |

## References

> 21 CFR Part 11 (electronic records and signatures).
> 21 CFR Part 211 (drug CGMP, including 211.68, 211.180, 211.194) and 21 CFR Part 820 (device quality system; QMSR amendments effective February 2026), as applicable to the process.
> EU GMP Annex 11 (computerized systems).
> FDA guidance, "Computer Software Assurance for Production and Quality Management System Software" (finalized 24 September 2025; the 2022 draft was titled "...Quality System Software"); it notes the risk-based framework can be applied to AI tools used in production or quality systems.
> GAMP 5 Second Edition (ISPE, 2022), including its material on machine learning and novel technologies.
> ICH Q9(R1), Quality Risk Management (Step 4, 2022; FDA final guidance 2023), for sizing effort to risk.
> FDA AI/ML-Based Software as a Medical Device Action Plan (January 2021), for context. For the predetermined change control plan concept, the source is the FDA final guidance "Marketing Submission Recommendations for a Predetermined Change Control Plan for Artificial Intelligence-Enabled Device Software Functions" (final, December 2024). Separately, the FDA draft guidance "Artificial Intelligence-Enabled Device Software Functions: Lifecycle Management and Marketing Submission Recommendations" (draft, January 2025) addresses lifecycle management and marketing submissions; treat it as draft. These are device documents; treat them as a source of principles, not as binding on a manufacturing or quality-operations model.
> EU Artificial Intelligence Act, Regulation (EU) 2024/1689 (in force August 2024, applying in phases). The high-risk system obligations are still being staged in, and a deferral of the high-risk deadline has been proposed but is not yet settled law, so treat the timing as moving. Confirm the current dates and whether your system is in scope before relying on them.
> IMDRF and the published Good Machine Learning Practice guiding principles, for development practice.

This is general guidance to adapt to your own quality system, not legal or compliance advice. Confirm the current version and clause numbers of each reference, and the current status of any draft or proposed instrument, before issue.

## Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (QA) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows part of a completed checklist for an illustrative deviation-triage model that assigns a preliminary criticality tier, which a QA reviewer confirms or overrides. The system, references, and findings are illustrative; replace them with your own.

Assessment context:

| Field | Entry |
|---|---|
| System / model name and ID | Deviation Triage Classifier, model DTC-2 |
| GxP process supported | Initial criticality tiering of new deviations |
| AI use pattern | Automated classification with mandatory human confirmation |
| Model type | Supervised text classifier |
| Build category | GAMP Category 5 (custom model on configured platform) |
| Risk class basis | Medium: output sets the investigation timeline; QA confirms within one business day and owns the final tier (ICH Q9(R1) rationale on file) |
| Model version in production | DTC-2.3, dataset hash 9f1c |
| Assessor (name, date) | A. Patel, 18 June 2026 |

Sample of completed lines:

| # | Check | Result | Evidence / note |
|---|---|---|---|
| IN2 | No hidden AI | Pass | Process walk-through confirmed no other classifier feeds the triage step |
| IU1 | Intended use stated precisely | Pass | Approved statement: model proposes tier, QA confirms or overrides, QA owns final tier |
| VL1 | Performance spec set before training | Pass | URS dated 03 Feb 2026, threshold recall >= 0.92 on critical class; test report dated 21 Apr 2026 |
| VL2 | Locked test set used | Pass | Test set v4, held out, time-split after training window |
| DL3 | Dataset versioned | Pass | Training and test sets hashed; reproduce confirmed |
| CH2 | Predetermined change control plan | Fail | Quarterly retrain is performed but no approved predetermined change control plan exists; each retrain handled ad hoc |
| HO4 | Automation bias guarded | Fail | Reviewer acceptance rate is 99.6 percent with no monitoring or justification step, suggesting rubber-stamping |
| MO3 | Drift and override watched | Pass | Override rate tracked weekly; input drift monitored against training profile |

Gap summary:

| Gap ref | Check # | Description | Risk | Owner | Remediation / due date | Interim control | Status |
|---|---|---|---|---|---|---|---|
| G1 | CH2 | No predetermined change control plan; retrains handled ad hoc | M | System Owner | Write and approve plan; CR-2026-0188; due 31 Jul 2026 | Freeze retraining until plan approved | Open |
| G2 | HO4 | 99.6 percent acceptance rate suggests rubber-stamp review | H | QA / Process Owner | Add reasoning display and justification-on-agree; monitor acceptance rate; CAPA-2026-0073 | 100 percent QA second-check on critical-tier deviations | Open |

Overall result: Conditional. One high-risk fail open (G2) with a dispositioned plan and an interim control (full second check on critical-tier deviations) holding the risk while the workflow is redesigned. The verdict, the open high-risk fail, and the interim control are exactly what an inspector expects to see: not a clean sheet, but an honest picture with risk-rated actions and the control gap covered in the meantime.

## Common inspection findings this checklist prevents

- A model drives a GxP decision but never appears on any inventory and was never assessed as a model at all.
- Performance is reported on data the model trained on, so the headline metric is inflated and unverifiable.
- The acceptance threshold is dated after the test report, so the criteria were fitted to the result rather than set in advance.
- Retraining happens with no predetermined change control plan, so the validated state silently lapses each quarter.
- The system was validated at release with no monitoring, so there is no evidence months later that the model still performs.
- A defined human review step exists, but a near-100 percent acceptance rate shows the control is exercised on paper only.
- A vendor "validated AI" claim is relied on for the site-specific trained model with no site-level evidence.
- Training data has no lineage, no labeling record, and no dataset version, so the model cannot be reproduced or investigated.

## How to adapt this checklist

1. Set your document number, owner, and effective date in the header.
2. Mark lines N/A by risk class with a stated reason. A low-risk advisory model may N/A the deterministic-interlock line (VL4) and need only light explainability (HO5); a process-control model will not N/A either.
3. Map your risk ratings to your own ICH Q9(R1) based scoring so the gap summary is consistent across systems.
4. Point the cross-references (change control, audit trail review, supplier assessment, quality agreement) to your real procedures.
5. Feed every open fail into your real deviation or CAPA system, with an interim control recorded, not just the table here.
6. Set the re-run cycle to your risk tiers, and re-run before a known inspection and after any retrain, architecture change, or change in intended use.
7. Confirm every regulation in the references against the current published version, and check the current status of any draft or proposed instrument, before issue.
