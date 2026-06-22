---
title: "Policy: AI Governance for GxP Systems"
description: "A plug-and-play corporate policy that sets the standard for governing AI and machine learning used in or affecting GxP: the AI register, risk tiering, an AI governance board, human oversight, validation and retraining control, monitoring, and decommissioning, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-22
docType: "Policy"
pillar: "ai-automation"
relatedArticles: ["ai-governance-gxp", "validating-ai-gxp-systems"]
tags: ["AI", "machine learning", "policy", "governance", "GxP", "validation", "risk tiering"]
tier: "Advanced"
---

This is a ready-to-use corporate policy. A policy states what the organization requires and who owns it; the procedures underneath it state how to do the work. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. The regulatory picture for AI in regulated industries is moving, so several references below are draft or evolving; treat them as such and verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | AI Governance Policy for GxP Systems |
| Document number | `<<FILL: POL-ID, e.g. POL-QA-007>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Policy owner | `<<FILL: role, e.g. Head of Quality / Quality Council sponsor>>` |
| Applies to | `<<FILL: all sites, functions, and contracted parties in scope>>` |
| Review cycle | `<<FILL: e.g. annually, given the pace of regulatory change>>` |

## 1. Purpose

This policy sets the requirement that any artificial intelligence or machine learning capability used in, or capable of affecting, a GxP activity at `<<FILL: COMPANY NAME>>` is identified, risk-tiered, validated to its risk, kept under human oversight, monitored while in use, and retired in a controlled way. The objective is that AI does not enter a regulated decision through an ungoverned path, and that for every AI output a person remains accountable for the consequence. It states the standard, names the people and the board accountable for meeting it, and defines the behaviors that are required and the behaviors that are prohibited.

## 2. Policy statement

`<<FILL: COMPANY NAME>>` treats AI and machine learning as a class of computerized system that carries specific additional risks: behavior that is probabilistic rather than deterministic, performance that can degrade over time with no code change, logic that is not fully interpretable, and the ability to change through retraining without a conventional software release. These properties do not exempt AI from the company's quality system; they raise the bar for how it is governed.

Every AI capability in scope is entered in the AI register, assigned a risk tier, and validated and controlled in proportion to that tier. No AI output drives a GxP decision without a defined, documented, and meaningful human control sized to the risk. AI is held to the same data integrity, validation, change control, and records expectations as any other GxP system, with the AI-specific additions stated in this policy.

This policy is binding on all employees, contractors, temporary staff, and contracted organizations (including CDMOs, CROs, contract laboratories, and software suppliers) that build, configure, deploy, operate, or supply AI capability that touches GxP data or decisions on behalf of the company.

## 3. Scope

This policy applies to any AI or machine learning capability that is used in, or could affect, a GxP activity across good manufacturing, laboratory, clinical, distribution, and pharmacovigilance practice as relevant to the business. "AI capability" is read broadly and includes:

- Custom models built and trained for a specific GxP use.
- Machine learning features inside a commercial platform, configured for a GxP use.
- Large language models and generative components accessed through a vendor interface or API, including retrieval and prompt configurations built on top of them.
- Statistical or pattern-recognition logic embedded in instruments, vision systems, automation, or spreadsheets that performs classification, prediction, or decision support.

Scope is defined by effect, not by what a tool is called. A feature that classifies, predicts, scores, ranks, or recommends in a way that can influence a GxP outcome is in scope even if a vendor labels it "analytics," "assistant," or "automation." A capability used only for non-GxP business purposes, with no path into a GxP record or decision, is out of scope, and that out-of-scope determination is itself recorded in the AI register.

This policy does not by itself define system-level configuration or model design; those are governed by the supporting procedures referenced in section 14.

## 4. Definitions

- **AI / machine learning system**: a computerized capability that produces outputs (classifications, predictions, scores, recommendations, or generated content) learned from data or rules rather than fully specified by deterministic code, and whose behavior is judged against performance on a population rather than a fixed input-output table.
- **AI register (AI inventory)**: the controlled list of every AI capability in scope, its intended use, owner, risk tier, validation status, and lifecycle state.
- **Intended use**: a single statement naming the model output, the action it triggers, and the person or system accountable for the consequence.
- **Risk tier**: the classification (for example advisory, automated decision, process control) that sets the depth of validation, oversight, and monitoring required.
- **Human oversight**: a defined, documented human control over an AI output, scaled to risk, ranging from review of every output to periodic audit of automated decisions.
- **Drift**: degradation of model performance over time, from a shift in the input data (data drift) or in the relationship between inputs and the correct answer (concept drift), with no change to the model itself.
- **Retraining**: updating a model on new data; a change in the validation sense, not a routine maintenance task.
- **Predetermined change control plan**: a plan approved before deployment that defines the anticipated model changes, their performance boundaries, and the testing each class of change requires.

## 5. Principles

The company governs AI in scope by the following principles. They apply to every AI capability, with the depth of application set by risk tier.

| Principle | The rule at `<<FILL: COMPANY NAME>>` |
|---|---|
| Accountability stays human | For every AI output that can affect a GxP outcome, a named role owns the consequence. AI advises or executes; it is never accountable. |
| Intended use is defined first | No AI is built, bought, or deployed for GxP until its intended use is written and approved. Undefined intended use means undefined risk. |
| Risk-proportionate effort | Validation, oversight, and monitoring scale to the risk the AI poses to product quality and patient safety, not to convenience. |
| Visibility | Every AI capability in scope is in the register. Hidden or shadow AI in a GxP process is a finding waiting to happen. |
| Data integrity extends to AI | Training, tuning, and production data used by AI are GxP records and meet ALCOA+ when they support a GxP decision. |
| Transparency over false certainty | The company states what an AI can and cannot do, including known weaknesses, rather than presenting it as infallible or as fully explainable when it is not. |
| Honest documentation where guidance is silent | Where no settled regulation fits, the company records the reasoning it applied so the rationale survives an inspection. |

## 6. AI register

The company maintains a single controlled AI register that is the authoritative list of AI capability in scope. The register is owned by `<<FILL: role, e.g. the AI Governance Board chair>>` and is reviewed at each board meeting.

No AI capability is deployed into, or connected to, a GxP process until it has a register entry. Each entry holds at least:

1. A unique identifier and name.
2. The intended-use statement (output, action triggered, accountable role).
3. The owner (a named role).
4. The type (custom model, configured platform feature, vendor API or large language model, embedded logic).
5. The GxP processes and systems it touches, and the data it consumes.
6. The assigned risk tier and the basis for it.
7. The validation status and the reference to the validation record.
8. The human oversight control in operation.
9. The lifecycle state (proposed, in validation, live, under review, retiring, retired).
10. The supplier, where applicable, and the reference to the supplier assessment.

The register is reconciled against reality on a defined cycle, because the most common gap is an AI capability, often a vendor feature switched on or a spreadsheet that quietly learned a rule, that entered a GxP process without an entry. The reconciliation actively looks for that shadow AI.

## 7. Risk tiering

Every AI capability in scope is assigned a risk tier before deployment, using the company's quality risk management method and recorded against the register entry. The tier sets the depth of every downstream control. The default scheme:

| Risk tier | What the AI does | Typical controls required |
|---|---|---|
| Tier 1, advisory or screening | Flags, ranks, or suggests for a person to act on; a human makes every final determination | Performance shown adequate for the screening purpose; defined human review; register entry; periodic monitoring |
| Tier 2, automated decision | Classifies, routes, or decides without per-output human review, and the output drives a downstream action | Full performance validation on a held-out test set; predetermined change control plan; continuous and periodic monitoring; defined human oversight by audit; QA release |
| Tier 3, process control | Influences a manufacturing parameter or a direct product or patient-affecting action | Tier 2 controls plus failure-mode analysis and independent deterministic safety interlocks that hold the process inside validated bounds regardless of the model |

Two rules sharpen the scheme. First, generative and large-language-model outputs that could enter a regulated decision are treated as at least Tier 2 because of the confident-but-wrong failure mode, and are constrained (grounded in retrieved source, output checkable, human in the loop) rather than trusted on fluency. Second, when the tier is uncertain, the higher tier applies until a documented assessment justifies a lower one. Mis-tiering a decision-driving model as advisory because the paperwork is lighter is a prohibited behavior under section 11.

## 8. Roles and the AI Governance Board

AI governance fails most often at the seams between quality, data science, IT, and the business, because no single function owns the whole thing. The company assigns accountability explicitly and establishes a cross-functional board to own the policy in practice.

### 8.1 The AI Governance Board

The AI Governance Board is the standing body accountable for AI governance across GxP. Its purpose is to keep AI inside the quality system, not to slow useful work. Composition, chaired by `<<FILL: role, e.g. Head of Quality or designated AI governance lead>>`:

- Quality Assurance (chair or co-chair, and the final release authority).
- Data science / machine learning engineering.
- IT and infrastructure.
- Validation / computerized system validation.
- The relevant business or process owners.
- Subject-matter input from regulatory affairs and, where personal or patient data is involved, privacy and information security.

Responsibilities:

1. Own and maintain the AI register and approve every new entry and its risk tier.
2. Approve the intended-use statement and validation approach for each Tier 2 and Tier 3 capability before deployment.
3. Approve predetermined change control plans and review retraining decisions that fall outside an approved plan.
4. Review monitoring output and act on drift, rising override rates, and incidents.
5. Approve decommissioning of AI capability and confirm record retention.
6. Track the evolving regulatory position and trigger policy or practice updates when it shifts.
7. Report AI risk into management review with real metrics.

The board meets at a defined cadence (`<<FILL: e.g. monthly>>`) and on demand for an incident or an urgent deployment decision. Decisions are minuted and retained as GxP records.

### 8.2 Accountabilities

| Role | Accountability under this policy |
|---|---|
| Executive management | Provides resources, sets the tone that AI is governed not exempted, and reviews AI risk in management review. |
| AI Governance Board | Owns the register, risk tiering, and the decisions above; the collective owner of this policy in operation. |
| Policy owner / Quality | Owns this policy and the supporting procedures, and owns final release and inspection defense for AI in GxP. |
| AI capability owner | A named role accountable for one capability across its lifecycle: intended use, validation, oversight, monitoring, change, and retirement. |
| Data science / ML engineering | Builds, trains, tests, and maintains models to the approved design and performance specification. |
| Validation / CSV lead | Owns the validation approach and protocols and the traceability from intended use to evidence. |
| Data steward / SME labelers | Own training-data integrity, labeling quality, and inter-rater agreement. |
| IT / infrastructure | Provides the controlled environment, access control, time synchronization, backup, and the technical means of versioning and monitoring. |
| Operational reviewers | Exercise the human oversight control as defined, and record their judgment. |
| All staff | Do not introduce AI into a GxP process outside this policy, and report AI capability they encounter that is not in the register. |

## 9. Human oversight

For any AI in scope, human oversight is the control that keeps the system consistent with the GxP principle that quality decisions rest on documented human judgment. The oversight is scaled to risk tier and, whatever the tier, it is:

- **Defined.** What the reviewer does, what information they see (including the model output and, where relevant, its confidence and the version that produced it), and what decision they make.
- **Documented.** The reviewer's conclusion enters a GxP record together with the AI output reviewed.
- **Meaningful.** Reviewers are trained on the capability's performance characteristics, including its known weaknesses, and apply judgment rather than rubber-stamping. For a Tier 1 advisory model a confidence score and the drivers of the flag may suffice; for a Tier 2 automated decision the oversight is a defined audit of a sample plus the controls that catch errors before harm; for a Tier 3 control the deterministic interlock is the primary protection and the human monitors it.

The known failure mode this section exists to prevent is automation bias: a model that is right almost all the time leads reviewers to approve without engaging, hollowing out the only control between a model error and a quality event. The company designs oversight to stay genuinely exercised and monitors the rate at which outputs are accepted without modification as a signal, treating an unusually high acceptance rate as something to investigate, not as success.

## 10. Mandatory rules

The following are requirements, not guidance:

1. No AI capability in scope is deployed into or connected to a GxP process without a register entry, an approved intended-use statement, and an assigned risk tier.
2. Validation effort and evidence are sized to the risk tier per `<<FILL: SOP-ID for AI validation / CSV>>`, and acceptance criteria are set as performance metrics before training, never fitted to the result afterward.
3. Performance is reported on a locked, version-controlled test set the model never saw during training or tuning; performance on training data is not accepted as validation evidence.
4. Training, tuning, and production data used by an in-scope AI meet the company data integrity standard, with documented source, lineage, representativeness, labeling quality, class balance, and a versioned, reproducible dataset.
5. Every Tier 2 and Tier 3 capability has an approved predetermined change control plan before deployment; retraining and model changes follow it or are routed to the board.
6. A retrain or model change is treated as a change in the validation sense, recorded under `<<FILL: SOP-ID for change control>>`, and is confirmed against the performance specification on the held-out test set before the changed model is used.
7. Every in-scope AI has a human oversight control defined and operating before it goes live, sized to its risk tier.
8. Every in-scope AI has a monitoring plan live from the first day of operation, with defined triggers and a defined response when a trigger fires.
9. Vendor claims of "validated AI" are not accepted at face value for the company's specific model, data, and intended use; the trained, configured instance is validated by the company, and the vendor and its model-change behavior are captured in the supplier assessment per `<<FILL: SOP-ID for supplier / vendor management>>`.
10. For Tier 3, deterministic safety interlocks independent of the model are validated and keep the process inside validated bounds regardless of model behavior.
11. AI capability is retired in a controlled way per section 13; it is never simply switched off or left running unowned.
12. Any AI capability found operating in a GxP process without a register entry is reported to the board and brought under control or removed.

## 11. Prohibited behaviors

- Introducing AI into a GxP process outside this policy (no register entry, no intended use, no tier).
- Mis-tiering a decision-driving or process-influencing capability as advisory to reduce the validation burden.
- Setting or rewriting acceptance criteria after seeing the model's performance.
- Reporting model performance measured on data the model trained or tuned on.
- Retraining or swapping a model in a GxP use with no change control and no confirmatory test.
- Running an in-scope AI with no monitoring, so the validated state is asserted rather than demonstrated.
- Presenting an approximate, post-hoc explanation as a guaranteed causal account of why a model decided.
- Letting an unconstrained generative output drive a GxP decision unreviewed.
- Treating a vendor's general "AI is validated" statement as the company's validation.

## 12. Validation, qualification, monitoring, and transparency expectations

### 12.1 Validation and qualification

In-scope AI is validated across the familiar lifecycle, with AI-shaped content inside each stage and depth set by risk tier: intended use defined first; performance specification (metric, threshold, justification tied to the consequence of error, and the held-out test population) written before training; training-data integrity established; the model tested against the specification on a locked test set; and traceability recorded from intended use to evidence, including the reasoning applied wherever guidance was silent. The detailed method is in `<<FILL: SOP-ID for AI validation>>`.

### 12.2 Change and retraining control

Model updates, whether retraining, threshold changes, new features, architecture changes, or a vendor-driven base-model change, are system changes. A predetermined change control plan, approved before deployment, classifies the anticipated changes and the testing each class requires, and names the threshold above which a change forces full revalidation rather than a confirmatory check. Changes outside the plan go to the board. The point of writing the logic down in advance is that the decision was approved before anyone had a result to defend.

### 12.3 Monitoring after deployment

The validated state of an in-scope AI includes ongoing monitoring, because performance can degrade with no intentional change as the data the model sees moves. From day one, each capability monitors, at a depth set by its tier:

- performance on periodically labeled production samples against the specification;
- the rate at which reviewers override or disagree with the model, as a continuous leading indicator;
- the input data distribution against the training distribution (drift);
- the confidence distribution.

The monitoring plan defines the triggers and the response when one fires: who is notified, whether the model is paused or routed to fuller human review, and how the event is investigated. Monitoring records are GxP records and are retained and reviewable. A monitoring system with no defined response is not a control.

### 12.4 Transparency and explainability

The company scales the explainability requirement to the use pattern and states honestly what an explanation does and does not establish. For Tier 1, a confidence score and the drivers of a flag may be enough. For Tier 2, a per-decision rationale a reviewer can check is expected. For Tier 3, the deterministic interlock matters more than the model's self-explanation. Post-hoc feature-attribution methods are treated as an aid to human judgment with documented limitations, not as a literal causal account, and are never overclaimed.

## 13. Decommissioning

AI capability is retired under control. When a capability is to be withdrawn, replaced, or has reached end of life, the owner, with board approval, ensures that:

1. The decommissioning is recorded as a change per `<<FILL: SOP-ID for change control>>`, with the rationale and the date the capability stops driving GxP decisions.
2. Any GxP records the capability produced, together with its model versions, training-data references, validation records, and monitoring history, are retained per the records retention schedule so past decisions remain reconstructable and investigable.
3. Downstream processes and human controls that depended on the capability are reassigned or re-validated as needed, so retiring the AI does not silently break a control.
4. Access to the capability is removed and the register entry is moved to "retired" with the date and the reference to the decommissioning record.

A capability is never left running unowned or switched off with no record; both create a gap an inspection will find.

## 14. Supporting procedures

| Procedure | Reference |
|---|---|
| AI validation / computerized system validation | `<<FILL: SOP-ID>>` |
| Quality risk management (for risk tiering) | `<<FILL: SOP-ID>>` |
| Change control for validated systems | `<<FILL: SOP-ID>>` |
| Data integrity | `<<FILL: SOP-ID>>` |
| Supplier and vendor management | `<<FILL: SOP-ID>>` |
| Deviations and investigations | `<<FILL: SOP-ID>>` |
| Access control and user management | `<<FILL: SOP-ID>>` |
| Backup, restore, and archival | `<<FILL: SOP-ID>>` |
| Training | `<<FILL: SOP-ID>>` |

## 15. References

> 21 CFR Part 11 (electronic records and electronic signatures) and EU GMP Annex 11 (computerized systems): records, signatures, and audit trails apply to AI as to any computerized system.
> ICH Q9(R1), Quality Risk Management (2023 revision): the basis for sizing AI governance and validation effort to risk, including the treatment of formality and subjectivity.
> ICH Q10, Pharmaceutical Quality System: management responsibility and management review, into which AI risk is reported.
> GAMP 5 Second Edition (ISPE, 2022), including its material on machine learning and other novel technologies: the risk-based, intended-use-driven lifecycle.
> FDA guidance, "Computer Software Assurance for Production and Quality Management System Software" (draft September 2022, finalized September 2025): the critical-thinking, risk-based assurance approach; it does not address AI-specific risks such as drift or explainability.
> FDA AI/ML-Based Software as a Medical Device Action Plan (January 2021): source of the predetermined change control plan concept; a device document, so it informs by analogy rather than governing manufacturing or quality-operations AI.
> FDA draft guidance, "Artificial Intelligence-Enabled Device Software Functions: Lifecycle Management and Marketing Submission Recommendations" (January 2025 draft; confirm current status before relying on it): expands lifecycle management and predetermined change control for AI in device submissions; draft and premarket-device in scope.
> FDA draft guidance, "Considerations for the Use of Artificial Intelligence To Support Regulatory Decision-Making for Drug and Biological Products" (January 2025 draft; confirm current status before relying on it): emerging FDA thinking on a risk-based credibility approach sized to the model's context of use; draft and evolving.
> Good Machine Learning Practice for Medical Device Development: Guiding Principles (FDA, Health Canada, MHRA, 2021) and related IMDRF work: cross-jurisdiction principles useful by analogy.
> Regulation (EU) 2024/1689 (the EU AI Act): a risk-tiered horizontal regulation that entered into force in 2024 with obligations phased in over several years; the application dates are still being amended, so confirm the current dates and which tier and obligations apply to a given use before relying on it.

Several of the AI-specific references above are draft or evolving and are not settled law. Confirm the current version, status, and identifier of each before issue, and update this policy when the position changes.

## 16. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 17. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (QA) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |
| Endorsed by (Executive sponsor) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the header and a few sections completed for an illustrative mid-size biologics company that has begun deploying machine learning in quality operations, so you can see the level of specificity expected. The company, numbers, and references are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| Document title | AI Governance Policy for GxP Systems |
| Document number | POL-QA-007 |
| Version | 1.0 |
| Effective date | 01 August 2026 |
| Supersedes | New |
| Policy owner | Vice President, Quality (Quality Council sponsor) |
| Applies to | All sites (US and EU), all GxP functions, and all contracted CDMOs, CROs, contract laboratories, and software suppliers |
| Review cycle | Annually, or on material regulatory change |

Specimen of one register entry as recorded:

> Capability AI-003, "Deviation criticality triage." Intended use: the model assigns a preliminary criticality tier to each new deviation; the assigned tier sets the investigation timeline; the QA reviewer confirms or overrides the tier within one business day and owns the final classification. Owner: Associate Director, Quality Systems. Type: custom model (Category 5) trained on three years of internal deviation records. Touches: the deviation management workflow and the QMS. Risk tier: Tier 2 (automated decision driving the investigation timeline). Validation: VAL-2026-0188, recall 0.92 and precision 0.74 on a locked, time-split test set; threshold set before training because a missed critical deviation is the dangerous failure. Human oversight: QA confirm-or-override within one business day, with a daily report of overrides. Lifecycle state: live since 01 July 2026. Supplier: none (internal). Predetermined change control plan: PCCP-AI-003 permits quarterly retrain on accumulated records if the retrained model meets or exceeds the original spec on the held-out test set and input drift is within limits.

Specimen of one mandatory rule as enforced:

> Rule 5 (change control before deployment). When the model was retrained in Q4 2026 on three new months of deviation records, the change was executed under PCCP-AI-003 and CR-2026-0431. The retrained model was tested on the locked test set, returned recall 0.93 and precision 0.76, met the specification, and was released by QA before it replaced the prior version. The board reviewed the confirmatory record at its November meeting. The prior model version and its test record were retained so the two months of decisions made under it remain reconstructable.

That short narrative is exactly what an inspector wants to see behind a policy statement: the rule, how it is enforced, the evidence it was followed, and that earlier decisions remain reconstructable.

## Common inspection findings this policy prevents

- AI capability is operating in a GxP process with no register entry, so the company cannot show what AI it runs or how it is controlled.
- A model that drives an action automatically was validated as if it were advisory, with no failure-mode analysis and no monitoring.
- Acceptance criteria were written after the model's performance was known, so the headline metric is not trusted.
- A model has been live for many months with no monitoring, so there is no evidence it still performs.
- Retraining happened with no change control, so the validated state silently lapsed.
- A vendor's general "validated AI" claim was accepted for the company's specific model on its own data, with no site-level evidence.
- A retired model was switched off with no record, leaving a gap where past decisions can no longer be reconstructed.

## How to adapt this policy

1. Set your document number, owner, effective date, and review cycle in the header; an annual cycle is sensible while AI guidance is moving.
2. Confirm the scope statement matches your actual GxP footprint and the kinds of AI you run (custom models, configured platform features, vendor APIs and large language models, embedded logic).
3. Decide where the AI register lives (a controlled list, a validated tool, or a section of your existing system inventory) and name its owner.
4. Confirm the three risk tiers fit your use cases, or adjust them, and align the tier definitions with your quality risk management method.
5. Set the AI Governance Board composition and cadence to your organization, and make sure QA holds the final release authority.
6. Point every `<<FILL: SOP-ID>>` cross-reference to your real supporting procedures, and remove any that do not apply.
7. Have the executive sponsor endorse the policy so it carries leadership weight, not only a QA signature.
8. Confirm every regulation in section 15 against its current published version and status before issue, and treat the draft and evolving items as draft, not settled law.
