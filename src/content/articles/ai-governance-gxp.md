---
title: "AI Governance for GxP: Policy, Roles, and Lifecycle Oversight"
description: "How a regulated life-sciences organization governs AI across its lifecycle: the policy, the inventory, the roles, risk tiering, human oversight, change and retraining control, decommissioning, and the link back to quality risk management."
pubDate: 2026-06-22
tags: ["AI", "governance", "GxP", "quality-risk-management", "ai-policy", "lifecycle"]
pillar: "ai-automation"
tier: "Advanced"
---

Validating a single AI system is a project. Governing AI across an organization is a system, and it is the thing that fails an inspection when it is missing. A company can validate one model well, defend it, and still have no answer when an investigator asks: how many AI systems do you run, who decided each was acceptable, who watches them now, and what happens when one degrades? Governance is the layer that answers those questions before they are asked.

This article is about that layer. It covers the AI policy, how you define intended use as a governing act rather than a technical note, the AI inventory or register, the roles that make decisions, the governance board that adjudicates, risk tiering, human oversight, change and retraining control, decommissioning, and how all of it ties back to quality risk management. It is written so that after reading it you could stand up an AI governance program, run it day to day, defend it in an inspection, and answer the questions an interviewer will ask.

Governance sits above validation, not inside it. If you have not built the validation foundation, read [validating AI-enabled GxP systems](/articles/validating-ai-gxp-systems) and the [GxP ML model lifecycle](/articles/gxp-ml-model-lifecycle) first. This article assumes those exist and asks the next question: how does an organization decide, oversee, and control AI as a portfolio rather than one model at a time.

---

## Why Governance, Not Just Validation

> ICH Q10, Pharmaceutical Quality System, places ultimate accountability for an effective quality system on senior management. (Section 2, Management Responsibility.)

The regulatory case for AI governance does not come from an AI-specific rule, because for pharmaceutical and biologics manufacturing there is not yet a single binding one. It comes from the existing expectation that a regulated organization controls its quality-impacting activities through a documented system with defined responsibilities, risk management, and management oversight. AI that touches a GxP decision is a quality-impacting activity. Once you have more than one or two such systems, ad hoc per-project control stops being defensible, because there is no consistent basis for the decisions and no one accountable for the whole.

Three forces make this concrete.

**Risk aggregates.** One advisory model that prioritizes a reviewer's worklist is low risk. Twenty models, some advisory, some driving classification, a few influencing process parameters, with no common view of which is which, is an aggregate exposure no single project owner can see. Governance is what lets quality leadership see the portfolio and size attention to it.

**Decisions need a consistent basis.** Without a policy, every team decides for itself what counts as acceptable model performance, how much human review is enough, and when a retrain needs revalidation. Inconsistency across systems is itself a finding, because it shows there is no controlling standard. A governance framework gives every project the same rules to reason from.

**Accountability has to land somewhere.** When a model error contributes to a quality event, the investigation will ask who approved the system, who was watching it, and who decided the human review was sufficient. If those roles were never named, the organization cannot answer, and "no one owned it" is the worst possible inspection answer.

The frameworks you build on are the ones you already use: ICH Q9(R1) for risk management, ICH Q10 for the quality system and management review, GAMP 5 Second Edition for the risk-based software lifecycle, and the computer software assurance approach for intended-use-driven, critical-thinking validation. Emerging instruments add direction without yet replacing this base: the EU AI Act, Regulation (EU) 2024/1689, applies in phases and classifies AI by risk, with obligations heaviest for high-risk uses; verify the specific application dates and risk tiers against the current text before you rely on them, because they phase in over time. The FDA has draft thinking on AI in drug and biologic development and a device-side approach built around lifecycle management and the predetermined change control plan; these are directionally useful and partly draft, so treat them as inputs, not settled law.

The honest framing for any audience: AI governance in GxP is assembled from existing quality-system principles plus emerging, partly draft AI-specific guidance. You build the program from what exists, document where you reason by analogy, and keep it current as the formal guidance lands.

---

## The AI Policy

### Why

The policy is the controlling document. Without it, there is no organizational standard, so every project improvises and the improvisations diverge. An inspector who asks "what is your position on AI in GxP processes" and gets a different answer from every team has found a governance gap. The policy is also what tells a new project that AI is in scope of quality oversight at all, which is the single most common thing organizations get wrong: a model gets built as an IT or data-science deliverable and never enters the quality system.

### What

An AI governance policy is short, high level, and stable. It states position and principle, not procedure; the procedures live in lower-tier documents (see the [quality manual and document hierarchy](/articles/quality-manual-document-hierarchy) for how the tiers relate). A workable policy covers:

- **Scope and definitions.** What counts as "AI" for the purpose of this policy, stated plainly enough that a non-specialist can apply it. A deliberately broad, function-based definition works better than a technology list: any system that produces an output used in a GxP decision through learned or statistical inference, rather than fixed coded rules. This deliberately catches a spreadsheet running a trained classifier and a vendor feature doing prediction under the hood, not just things branded "AI."
- **Principles.** The non-negotiables: AI in GxP processes is subject to quality oversight; risk drives the level of control; a human remains accountable for every regulated decision; systems are inventoried, validated to risk, monitored, and controlled through change.
- **Governance structure.** That a governance body exists, what it decides, and who sits on it (detail in its charter, not the policy).
- **Roles.** That named accountabilities exist for each AI system, pointing to the roles section below.
- **Lifecycle expectation.** That AI is governed from proposal through decommissioning, not just at go-live.
- **Link to the quality system.** That AI governance operates within the existing pharmaceutical quality system and its risk-management, change-control, and management-review processes, rather than beside them.

### How

1. Get an executive sponsor in quality or a comparable function, because a policy without senior ownership has no force.
2. Draft it short, one to three pages, principle level. If it reads like a procedure, it is in the wrong tier.
3. Socialize it with the functions it binds: quality, data science or analytics, IT, regulatory, manufacturing or operations. The teams that have to live by it must see it before it is final.
4. Approve and issue it through normal [document control](/articles/document-control-fundamentals), with an owner and a periodic review cycle.
5. Cascade it into procedures: an AI inventory SOP, a risk-tiering and validation SOP, a monitoring SOP, a model-change SOP. The policy says what; the SOPs say how.

### Acceptance criteria

- The policy is approved, controlled, and version-managed like any quality document.
- The scope definition is concrete enough that a reasonable person can decide whether a given system is in or out, and it is function-based so it catches hidden AI.
- It names the governance body and the existence of per-system accountabilities.
- It explicitly connects to the existing quality system, not a parallel one.
- Procedures exist or are committed below it; a policy with no procedures underneath is a poster.

### Worked example

A 600-person biologics company issues a two-page "AI in GxP Processes" policy. Scope: "any system whose output informs or drives a GxP decision through learned or statistical inference." Principles: quality oversight applies, risk drives control, a human is accountable for every regulated decision, all such systems are registered and governed lifecycle-long. It names an AI Governance Board, references four SOPs to be issued within ninety days, and states that AI governance runs through the existing change-control, risk-management, and management-review processes. Six weeks later, a manufacturing-sciences team proposing a yield-prediction tool reads the scope line, recognizes their tool is in, and routes it to the board rather than quietly shipping it. That single redirection is the policy paying for itself.

### Common mistakes

- A policy so technology-specific it misses the next model type, or so abstract it decides nothing.
- A scope that lets a model masquerade as "just analytics" or "a vendor feature" and stay outside quality oversight.
- No procedures underneath, so the principles never become actions.
- Owned by IT or data science with no quality authority, so it cannot bind the quality decisions it claims to.

---

## Defining Intended Use as a Governing Act

### Why

Almost every downstream governance decision, the risk tier, the validation depth, the human-oversight design, the monitoring plan, is sized off the intended use. Get it vague and everything built on it is mis-sized. This is also the first question an inspector and an interviewer ask: what does the model actually decide? Intended use is not a technical footnote; it is the governing input.

### What and how

For governance, the intended-use statement must name three things in one sentence: the model output, the action that output triggers, and the role accountable for the consequence. If you cannot write that sentence cleanly, the system is not ready to be tiered, let alone built.

Three patterns recur, and the pattern sets the tier:

- **Advisory or screening.** The model flags or prioritizes; a human makes every determination. Lowest risk.
- **Automated classification or routing.** The model's output drives a downstream action without per-record human review. Higher risk, because the output is acted on directly.
- **Process influence or control.** The model affects a manufacturing parameter or a release-relevant decision. Highest risk, requiring failure-mode analysis and, for true process control, deterministic interlocks independent of the model.

### Acceptance criteria

- A one-sentence intended-use statement exists per system, naming output, triggered action, and accountable role.
- The pattern (advisory / automated / process) is identified and recorded.
- The statement is specific enough that a reader unfamiliar with the project can infer the risk tier from it.

### Worked example

Weak: "An AI tool to help with deviations." Governing: "The model assigns a preliminary criticality tier to each new deviation; the assigned tier sets the default investigation timeline; a QA reviewer confirms or overrides the tier within one business day and owns the final classification." The second version tells the board it is automated-with-confirmation, points straight at the override mechanism, the timeline control, and the accountable role, and lets every downstream control find its home.

### Common mistake

Stating what the tool does technically ("classifies text using a trained model") instead of what it decides and who is accountable. Inspectors care about the decision and the accountability, not the algorithm.

---

## The AI Inventory or Register

### Why

You cannot govern what you cannot see. The register is the single source of truth for which AI systems exist, what each does, its risk tier, who owns it, and its lifecycle state. Its absence is a direct finding, because an organization that cannot list its AI systems cannot claim to control them. The register is also where "hidden AI", a vendor feature or a spreadsheet quietly doing prediction, gets surfaced and brought into oversight.

### What

A practical AI register holds, per system:

| Field | Why it is there |
|---|---|
| Unique ID and name | Stable reference across documents and audits |
| Business purpose and intended-use statement | The governing sentence: output, action, accountable role |
| Use pattern (advisory / automated / process) | Drives expected controls |
| Risk tier | The sizing decision, with rationale referenced |
| Business owner / system owner | Who is accountable |
| Model type and whether it learns continuously | Flags drift and retraining exposure |
| Data sources (training and operational) | Data-integrity scope |
| Vendor / internal, and model version | Supplier and change exposure, including API base-model risk |
| Lifecycle state (proposed / development / validated / live / monitored / retired) | Where it is in the lifecycle |
| Validation reference | Link to the validation evidence |
| Monitoring status and last performance review | Evidence it is still in a validated state |
| Date entered, last reviewed, decommission date | Governance currency |

### How

1. Seed it by active discovery, not a survey alone. Walk the GxP processes and ask where decisions are informed by learned inference; interview process owners; review IT and vendor system feature lists for embedded ML. A passive "tell us your AI" email misses exactly the hidden cases that matter.
2. Make registration a mandatory gate: no AI system enters development or production without a register entry. Wire it into the project-intake and change-control workflows so it cannot be skipped.
3. Assign an owner for the register itself, usually within quality or a digital-quality function, responsible for completeness and currency.
4. Review it at a defined cadence and at the governance board, reconciling against new projects and change records so it does not silently rot.
5. Use it as the inspection artifact: when an investigator asks "what AI do you run in GxP processes," you hand them the register.

### Acceptance criteria

- A single register exists, owned, and current within its defined review cycle.
- Every in-scope system per the policy definition has an entry, including embedded and vendor-feature AI.
- Each entry carries at minimum: intended use, use pattern, risk tier with rationale link, owner, lifecycle state, validation reference, monitoring status.
- Registration is enforced as a gate in intake and change control, demonstrably, not just stated.
- Reconciliation against new projects and changes is evidenced at the board.

### Worked example

A digital-quality lead seeds the register by walking eight GxP processes. The survey returned three "AI systems." The walk-through surfaces eleven: the three known models, a LIMS vendor feature flagging anomalous results, two spreadsheets running trained classifiers a power user built, a complaint-triage tool, two RPA bots with an embedded prediction step (see [validating RPA automation](/articles/validating-rpa-automation)), a forecasting tool feeding a planning decision, and a document-classification feature in the eDMS. Eight of eleven were invisible to the survey. Each gets an entry, a tier, and an owner; the four that were live without validation become a tracked remediation.

### Common mistakes

- A register built once and never reconciled, so it lists last year's systems.
- Relying on self-reporting, which systematically misses embedded and shadow AI, the highest-risk category because it was never assessed at all.
- No enforced registration gate, so new systems appear in production before the register hears about them.
- Treating it as an IT asset list rather than a quality-governed record with intended use and risk tier.

---

## Roles and Responsibilities

### Why

AI governance fails most often at the seams between functions, because the work spans business, data science, IT, and quality, and no single role naturally owns the whole. Naming accountabilities is the control. The recurring failure pattern, and a frequent finding, is treating model building as a pure data-science task that QA reviews only at the end; by then the data-integrity, labeling, test-discipline, and change decisions are baked in. For the broader accountability model these sit within, see [GxP roles and responsibilities](/articles/gxp-roles-responsibilities).

### What

The core roles, with titles to adapt to your organization:

| Role | Owns | Key responsibilities |
|---|---|---|
| Business owner / system owner | The system end to end | Intended-use statement, business justification, accepting the validated system, owning the consequence of its decisions, lifecycle decisions including retirement |
| Data science / ML engineering | The model | Development, training-data handling, performance testing, retraining, technical monitoring |
| Quality assurance | Quality oversight | Risk-tier concurrence, validation approach approval, acceptance of performance against spec, release decision, audit-trail and record review |
| IT / infrastructure | The platform | Hosting, access control, security, backup and recovery, change and configuration management of the environment |
| Data steward / SME labelers | Data and ground truth | Source and lineage of training data, labeling per SOP, inter-rater agreement, label-disagreement resolution |
| Operational reviewers | The human-in-the-loop control | Performing the defined human review meaningfully, recording the conclusion |
| AI governance board | The portfolio | Standards, tier adjudication for novel or high-risk cases, exceptions, portfolio risk, escalation, periodic review of the program |
| Executive sponsor / quality leadership | The system's authority | Policy ownership, resourcing, management-review accountability for AI risk |

### How

1. Name the business owner per system first; it is the load-bearing role and the one most often left implicit.
2. For each system, fill a simple responsibility matrix (a RACI works) across the lifecycle stages: intended use, data, development, validation, release, monitoring, change, retirement. Disagreements about who is accountable surface here, on paper, which is where you want them.
3. Insert quality early, at intended-use and data decisions, not only at release. This is the single change that prevents the most rework and the most findings.
4. Train operational reviewers specifically on the model's known weaknesses, not just on the click path, so the human control is real.

### Acceptance criteria

- Every register entry names a business owner accountable for the consequence of the system's decisions.
- A responsibility matrix exists per system or per system class, covering all lifecycle stages with no gap and no decision owned by "everyone."
- Quality involvement is evidenced at intended-use and data stages, not only at release.
- Operational reviewers have training records that reflect the model's limitations.

### Common mistakes

- The business owner role left implicit, so when a decision goes wrong no one is accountable.
- Quality bolted on at the end, reviewing decisions it could no longer influence.
- "Data science owns the model, quality owns compliance" drawn as a clean line, leaving the seams, training-data integrity, retraining triggers, monitoring response, owned by nobody.
- Reviewers trained on the interface but not on where the model is weak, producing rubber-stamp review.

---

## The AI Governance Board

### Why

Per-system decisions need a consistent adjudicator and the portfolio needs an owner. A board is how an organization keeps standards consistent, decides the hard or novel cases, sees aggregate risk, and feeds AI into management review. Without it, tiering and exception decisions are made inconsistently across projects, which is the inconsistency finding again.

### What and how

The board is a cross-functional body with a charter that defines its authority, membership, cadence, and decision rights. Keep it small enough to decide and broad enough to cover the disciplines.

- **Membership.** Quality (chair or co-chair, for authority), data science or analytics, IT, regulatory, and a rotating business-process representative for the system under discussion. Pull in subject-matter experts as needed.
- **Decision rights.** Approve the AI policy and standards; adjudicate risk tier for novel, borderline, or high-risk systems (routine low-risk tiering can be delegated to the system owner with QA concurrence, so the board is not a bottleneck); approve exceptions and time-bound deviations; own the register's portfolio view; escalate to quality leadership and management review.
- **Cadence.** Regular (monthly or quarterly to fit the volume) plus an on-demand path for a system that cannot wait. A board that meets too rarely becomes a bottleneck people route around, which quietly kills governance.
- **Records.** Minutes, decisions, and rationale captured as quality records. The rationale is the inspection artifact: it shows the thinking, not just the outcome.

### Acceptance criteria

- A charter exists defining authority, membership, cadence, and decision rights.
- Meetings produce minuted, retained decisions with rationale.
- Routine low-risk tiering is delegated with QA concurrence so the board is not a chokepoint, while novel and high-risk cases come to it.
- The board reports AI portfolio risk into management review.

### Worked example

The board reviews the deviation-criticality model. Data science presents performance, the business owner presents intended use, QA challenges the held-out test discipline and the override-rate threshold. The board confirms the tier as automated-with-confirmation, approves release on the condition that monitoring goes live on day one with a defined override-rate trigger, and minutes the rationale for accepting the lower precision against high recall. Three months later the override rate trips the trigger; because the response was pre-defined and minuted, the system routes to fuller human review and an investigation opens, with no debate about what to do.

### Common mistakes

- A board that meets so rarely projects bypass it to hit timelines.
- A board with no real authority, so its decisions are advisory and ignored.
- No rationale captured, only outcomes, so a year later no one can reconstruct why a tier was set, which reads as undocumented decision-making in an inspection.
- The board acting as a bottleneck on routine low-risk cases instead of delegating them.

---

## Risk Tiering

### Why

Risk tiering is the engine of proportionate governance: it sets how much validation, oversight, monitoring, and board attention a system gets. It is a direct application of ICH Q9(R1), which is why every tiering decision should trace to the [quality risk management](/articles/quality-risk-management) method and be documented as a risk decision. Under tier, and you under-control a system that can hurt product or patient; over tier, and you bury low-risk tools in paperwork and train people to see governance as friction. The detailed mechanics of assessing an individual AI system's risk live in [AI risk assessment for GxP](/articles/ai-risk-assessment-gxp); governance is about applying that consistently across the portfolio.

### What and how

Tier on the consequence of the model being wrong and on how directly its output is acted upon, not on how technically sophisticated the model is. A simple, defensible three-tier scheme:

| Tier | Definition | Typical governance |
|---|---|---|
| Low | Advisory or screening; a human makes every determination; a model error is caught by routine human work | Lighter validation focused on usefulness at the intended sensitivity; documented human review; periodic monitoring; tiering delegable to owner with QA concurrence |
| Medium | Output drives an action without per-record human review, but errors are recoverable and not directly patient-impacting | Full performance validation on a held-out set; defined monitoring with triggers; predetermined change control; board awareness |
| High | Output influences a manufacturing parameter, a release decision, or anything with direct product-quality or patient-safety impact | Failure-mode analysis; deterministic interlocks where it is process control; tightest monitoring; mandatory board adjudication; revalidation discipline |

Inputs to the tiering decision: severity of harm if the model is wrong, probability the error reaches the patient or product, detectability before harm (strong human review or a downstream check raises detectability and can justify a lower tier), and reversibility of the consequence. This is the classic severity-probability-detectability logic of risk management applied to a model.

### Acceptance criteria

- Every register entry has a tier with a documented rationale that traces to the risk-management method.
- The rationale references consequence and directness of action, not model sophistication.
- The tier maps to a defined set of controls (validation depth, monitoring, oversight) the organization actually applies.
- High-tier systems show evidence of the extra controls (failure-mode analysis, interlocks for process control, board adjudication).

### Worked example

A model predicting a chromatography column's remaining useful life. If its output merely flags columns for an engineer to inspect, with the engineer deciding, it is low: error is caught by the human, harm is remote. If its output automatically extends a column's use beyond the normal schedule with no human check, it is high: a wrong prediction could put a release-relevant separation at risk, the action is direct, and detectability is low. Same model, two tiers, because intended use and directness differ. The tiering rationale records exactly that distinction.

### Common mistakes

- Tiering on model complexity ("it is just a simple model, low risk") rather than consequence.
- One-size validation: treating every AI system as high risk, which buries the program, or every system as low, which under-controls the dangerous ones.
- No documented rationale, so the tier cannot be defended as a risk decision.
- Ignoring detectability, so a model with strong human review is over-tiered and one with none is under-tiered.

---

## Human Oversight

### Why

Human oversight is the control that keeps an AI system consistent with the GxP principle that quality decisions require documented human judgment. It is also, for higher-risk and high-impact uses, an expectation echoed in emerging AI regulation. It is the last line between a model error and a quality event, so its design is a governance decision, not an operational afterthought.

### What and how

Oversight scales with the tier. The forms:

- **Human-in-the-loop.** A person reviews and approves each output before it drives an action. Appropriate for higher-risk classification and anything approaching a release-relevant decision.
- **Human-on-the-loop.** The system acts, a person monitors aggregate behavior and intervenes on exceptions or trends. Appropriate for higher-volume automated routing where per-record review is impractical but the population is watched.
- **Human-in-command.** A person can override, pause, or shut the system down, and that authority is defined and exercisable. This should exist for every tier above low; someone must be able to stop the thing.

For each system the oversight step must be:

- **Defined.** What the reviewer sees, what they decide, and what they do. Vague review steps fail in inspection.
- **Documented.** The reviewer's conclusion enters a GxP record with the AI output reviewed and the model version that produced it.
- **Meaningful.** Reviewers are trained on the model's known weaknesses and apply judgment. The standing threat is automation bias: a model that is right almost always trains reviewers to approve without reviewing, hollowing out the only control that mattered.

Governance mechanisms that keep oversight real: present the model's reasoning, not just its conclusion; require a short justification on agreement with high-confidence outputs; and monitor the acceptance-without-modification rate, treating an unusually high rate as a signal to investigate rather than as success.

### Acceptance criteria

- The oversight form (in-the-loop / on-the-loop / in-command) is specified per system and matches the tier.
- The review step is defined, the conclusion is captured in a GxP record with the model version, and reviewers have weakness-aware training records.
- A stop or override authority is defined and exercisable for every system above low risk.
- The acceptance/override rate is monitored as a leading indicator, with a defined response when it moves.

### Common mistakes

- Oversight that is real on paper and rubber-stamp in practice, revealed by a near-100 percent acceptance rate.
- No one with the authority to stop the system when it misbehaves.
- The model version not recorded with the review, so a later investigation cannot tell which model made the decision.
- Reviewers trained on the click path but not on where the model fails.

---

## Change and Retraining Control

### Why

A model that changes, by retraining, a feature change, an architecture swap, or a vendor updating a base model under you, has changed the validated system. Without governed change, the validated state silently lapses, which is one of the most common and most serious AI findings. The general discipline is [change control for validated systems](/articles/change-control-validated-systems); the AI-specific addition is that the system can change without anyone editing code, through new data or a vendor update.

### What and how

The instrument is the predetermined change control plan, written and approved before deployment, that classifies anticipated changes and pre-defines the action each requires. A worked classification:

| Change type | Example | Required action |
|---|---|---|
| Routine retrain, same architecture and features, in-distribution data | Quarterly retrain on accumulated production records | Confirmatory test on the locked test set, must meet or exceed the original spec; documented record; no revalidation |
| Threshold or cutoff adjustment | Move the classification cutoff to raise recall | Re-test the affected metrics, update the spec rationale, QA approval |
| New feature or new data source | Add an input attribute | Targeted revalidation of affected performance; data-integrity review of the new source |
| Architecture change | Replace the model family | Full revalidation; new performance spec if intended use shifts |
| Vendor base-model change (API model) | Vendor updates the underlying model version | Treat as an uninitiated change: re-run the confirmatory test set, hold deployment until it passes; capture vendor change behavior in supplier assessment |

The governance point is that the decision logic was approved before anyone had a result to defend, so routine maintenance proceeds in a controlled way instead of every retrain becoming an unplanned deviation, and a change big enough to need revalidation cannot slip through as "just a retrain." Production data pulled to retrain a live model is itself GxP data under full [ALCOA+ expectations](/articles/alcoa-plus-deep-dive); retraining is a data-integrity event, not only an engineering task.

### Acceptance criteria

- A predetermined change control plan exists per system (or per class), approved before deployment, classifying anticipated changes and their required testing.
- The plan defines the line above which a change forces full revalidation rather than a confirmatory check.
- Vendor-driven base-model changes are explicitly addressed for API-based systems.
- Each model change has a record showing the plan was followed; retraining data integrity is evidenced.

### Worked example

The deviation-criticality model's plan permits quarterly retraining on accumulated production data, provided the retrained model meets or exceeds the original spec on the locked test set and the input distribution has not shifted beyond defined limits. Q1 and Q2 retrains pass and are recorded as confirmatory tests, no revalidation. In Q3, data science wants to add a new free-text field as an input; the plan classifies that as a new feature, so it triggers targeted revalidation and a data-integrity review of the new source rather than slipping through as a routine retrain. The plan made that distinction in advance.

### Common mistakes

- No change plan, so either every retrain is an unplanned deviation or, worse, retrains happen ungoverned and the validated state lapses unnoticed.
- Treating a vendor base-model update as nothing, when the model behind your API silently changed.
- Retraining on production data with no integrity record, so the new model cannot be reproduced or investigated.
- A change plan written but not followed, with no per-change record to prove it was.

---

## Monitoring and Periodic Review

### Why

The validated state of an AI system includes ongoing evidence that it still performs, because, unlike traditional software, an AI system can degrade with no change to its code as the data it sees moves (drift). "Deploy and forget" is a recurring finding: the validated state is asserted from release day but never demonstrated since. Governance owns the expectation that monitoring exists, is reviewed, and triggers action.

### What and how

Periodic review of a traditional system confirms the software has not changed; periodic review of an AI system confirms performance has not degraded. What governance requires per live system:

- **A monitoring plan live from day one,** defining what is measured, the triggers, and the response when a trigger fires. A monitoring system with no defined response is decoration.
- **Performance on labeled samples** on a cadence: pull a representative production sample, have qualified reviewers establish ground truth, recompute the metrics against the spec.
- **Override and disagreement rate,** tracked continuously as a cheap leading indicator that usually moves before the formal metric review catches a problem.
- **Input-distribution monitoring** to catch drift before performance visibly breaks.
- **A defined response:** who is notified, whether the model is paused or routed to fuller review, and how the event is investigated.

Governance rolls the per-system monitoring up into the portfolio view and feeds it to management review under ICH Q10, so leadership sees aggregate AI risk, not just individual dashboards. See [management review under ICH Q10](/articles/management-review-q10) for that mechanism.

### Acceptance criteria

- Every live system has a monitoring plan with measures, triggers, and a pre-defined response, active from go-live.
- Performance reviews against the spec occur on the defined cadence and are retained as records.
- A defined escalation and response exists and has been exercised (or tabletop-tested) when a trigger fires.
- AI portfolio performance and risk are reported into management review.

### Common mistakes

- No monitoring, so no evidence the model still works, the deploy-and-forget finding.
- Monitoring that measures something but defines no response, so a trigger fires and nothing happens.
- Per-system dashboards that never roll up, so leadership and management review never see aggregate AI risk.
- Treating the AI periodic review as a configuration check (it has not changed) instead of a performance check (it still works).

---

## Decommissioning

### Why

Retirement is the most neglected lifecycle stage and a real source of findings. A retired model that still has a live endpoint, whose training data is unmanaged, or whose records were not retained, is an uncontrolled state. Governance closes the loop so a system leaves the portfolio cleanly rather than lingering as a half-dead service no one watches.

### What and how

A controlled decommissioning, run through change control, addresses:

1. **The decision and its rationale,** recorded: why the system is being retired (replaced, no longer needed, performance no longer acceptable) and who decided.
2. **The replacement and transition,** if any: how the decision the model made is handled afterward, and a migration plan if a new system takes over (see [data migration validation](/articles/data-migration-validation) when data moves).
3. **Record retention.** The validation file, monitoring history, model versions, and the GxP records the system produced are retained per the retention policy. Decommissioning does not end the retention obligation.
4. **Access and endpoint shutdown.** The model is genuinely taken out of service, its endpoints disabled, and its access removed, so it cannot keep silently producing outputs.
5. **Register update.** The lifecycle state moves to retired with a decommission date, so the portfolio view stays honest.

### Acceptance criteria

- A documented decommissioning record exists with the decision, rationale, and approver.
- Records and the validation/monitoring history are retained per policy after retirement.
- The system is verifiably out of service: endpoints disabled, access removed, no residual live output.
- The register reflects the retired state and date.

### Common mistakes

- A "retired" model still serving predictions through a forgotten endpoint.
- Training data and model versions deleted on retirement, breaking the ability to investigate a decision the model made while live.
- The register never updated, so the portfolio view shows a system that is gone or hides one still running.

---

## Tying It Back to Quality Risk Management

The thread running through every section is ICH Q9(R1). Risk tiering is a risk assessment. Human-oversight design is a risk-control decision. Monitoring is risk review, the feedback loop that catches a risk that has materialized. The change plan is risk control applied to change. Decommissioning is closing out a risk when the system leaves. AI governance is not a separate discipline bolted onto the quality system; it is quality risk management applied to a class of system that happens to be probabilistic, can change without code, and is not fully interpretable.

That framing is what makes the program defensible. An inspector who sees AI governance expressed in the language and mechanics of the existing quality system, risk assessments, change control, periodic review, management review, reads a system under control. One that sees a bolt-on "AI process" sitting beside the quality system, with its own ad hoc rules, reads a gap. Build the governance inside the [pharmaceutical quality system](/articles/pharmaceutical-quality-system), not next to it.

---

## A Worked Governance Example, End to End

A mid-size biologics company wants to deploy a model that triages incoming product complaints and assigns a preliminary severity, which sets the initial handling path; a complaint specialist confirms or overrides within one business day. Here is the governance, stage by stage.

**Policy.** The company's AI policy already states that any system informing a GxP decision through learned inference is in scope and subject to quality oversight. The complaint-triage tool is plainly in scope, so it routes into governance at proposal rather than shipping as an IT feature.

**Intended use.** The business owner writes: "The model assigns a preliminary severity to each incoming complaint; the severity sets the initial handling path; a complaint specialist confirms or overrides within one business day and owns the final severity." Output, action, accountable role, in one sentence. Pattern: automated-with-confirmation.

**Register.** A register entry is created at proposal: ID, intended use, pattern, owner, model type (a text classifier, not continuously learning), data sources, vendor-versus-internal, lifecycle state "proposed," with tier and validation reference to follow.

**Risk tiering.** Using the [risk-management method](/articles/quality-risk-management), the team tiers it medium: a wrong severity is recoverable because a specialist confirms within a day and the handling path can be corrected, but the output drives an action without per-record review until confirmation, and a missed high-severity complaint has real safety weight. The rationale, severity, probability of reaching harm, detectability via the next-day confirmation, reversibility, is documented and traced to the risk file.

**Board.** Because severity touches safety, it goes to the AI governance board rather than being delegated. The board confirms the medium tier, sets the condition that monitoring with an override-rate trigger goes live on day one, and minutes the rationale.

**Roles.** Business owner: head of complaint handling. Model: data science. Data and labels: complaint SMEs label historical complaints under a labeling SOP, with inter-rater agreement measured. Validation approach and release: QA. Reviewers: trained complaint specialists. The responsibility matrix is filled before development starts, with QA engaged at the data and intended-use stages.

**Validation.** Performance spec written in the requirements before training: high recall on high-severity complaints prioritized over precision, justified because a missed serious complaint is the dangerous failure. Reported on a locked, held-out test set the model never saw, drawn from a later time period. The validation follows [validating AI-enabled GxP systems](/articles/validating-ai-gxp-systems).

**Human oversight.** Human-in-the-loop with next-day confirmation; the specialist sees the model's severity, its top contributing features, and the complaint text, and records the confirmed severity in the complaint record with the model version. Specialists are trained on where the model is weak (rare complaint types, atypical phrasing).

**Change control.** A predetermined change control plan permits quarterly retrains on confirmed-and-labeled production complaints, confirmatory test only, with full revalidation if the feature set or architecture changes. The retraining data carries full ALCOA+ controls.

**Monitoring.** Live from day one: quarterly labeled-sample performance against the spec, continuous override-rate tracking with a defined trigger, and input-distribution monitoring for a shift in complaint mix. The defined response: if the override rate trips, route all complaints to full specialist review and open an investigation. The roll-up feeds management review.

**Decommissioning, eventually.** When the company later replaces this tool with a broader platform, decommissioning runs through change control: decision and rationale recorded, the complaint-handling decision transitioned to the new system, all records and model versions retained, the old endpoint disabled and access removed, the register updated to retired with a date.

Every artifact in that walk-through is a quality record. Handed to an inspector, the package shows a system that was governed from proposal to retirement, with the rationale visible at every decision. That is what AI governance produces, and it is the difference between a portfolio under control and a collection of models no one can account for. The same end-to-end discipline is what lets a successful pilot move into production safely; see [scaling an AI pilot to production](/articles/scaling-ai-pilot-to-production).

---

## How This Plays Out in an Inspection

Inspectors approaching AI governance ask a predictable set of questions; the program should answer them before they are asked:

- What is your position on AI in GxP processes, and where is it documented? (The policy.)
- How many AI systems do you run in GxP processes, and what does each do? (The register.)
- Who decided each was acceptable, and on what basis? (Tiering rationale and board records.)
- Who is accountable for each system's decisions? (The business owner and responsibility matrix.)
- How do you control model changes? (The predetermined change control plan and records.)
- How do you know each model still performs? (Monitoring and periodic review.)
- What is the human control, and how do you keep it meaningful? (Oversight design and acceptance-rate monitoring.)
- Where is AI risk visible to leadership? (Management review.)

The pattern that reads as a system under control is a coherent, honestly documented program expressed in the existing quality-system mechanics, with rationale captured wherever guidance was silent. The pattern that invites deeper scrutiny is a parallel "AI process," an incomplete register, undocumented tiering decisions, and accountabilities that were never named. For the broader inspection mindset, see [FDA inspection readiness](/articles/fda-inspection-readiness).

---

## Interview Questions and How to Answer Them

If you are interviewing for a digital quality, CSV, or data-integrity role with an AI scope, these questions separate a practitioner from someone reciting terms. Short, concrete answers win.

**"What is the difference between validating an AI system and governing AI?"** Validation proves one system is fit for its intended use. Governance is the organizational layer above: the policy, the register, the roles, risk tiering, oversight, change control, monitoring, and decommissioning applied consistently across the whole AI portfolio, with management oversight of aggregate risk. You can validate one model well and still fail an inspection if you cannot list your AI systems or say who is accountable for them.

**"Which frameworks do you build AI governance on when there is no single binding AI rule?"** ICH Q9(R1) for risk management, ICH Q10 for the quality system and management review, GAMP 5 Second Edition for the risk-based lifecycle, and the computer software assurance approach for intended-use-driven validation. The EU AI Act and FDA's emerging AI guidance add direction and are partly draft and phased, so I use them as inputs and document where I reason by analogy.

**"What goes in an AI register, and how do you keep it complete?"** Per system: intended use, use pattern, risk tier with rationale, owner, model type, data sources, lifecycle state, validation reference, and monitoring status. I keep it complete by active discovery, walking the GxP processes and reviewing vendor features and power-user spreadsheets, not a self-report survey, because surveys miss exactly the embedded and shadow AI that carry the most risk. And I make registration a mandatory gate in project intake and change control.

**"How do you tier AI risk?"** On the consequence of the model being wrong and how directly its output is acted on, using severity, probability of reaching harm, detectability, and reversibility, never on how sophisticated the model is. Strong human review raises detectability and can justify a lower tier. Every tier carries a documented rationale traced to the risk-management method.

**"What does an AI governance board actually do, and how do you stop it becoming a bottleneck?"** It owns the standards, adjudicates novel and high-risk tiering and exceptions, owns the portfolio risk view, and escalates to management review. I keep it from becoming a bottleneck by delegating routine low-risk tiering to the system owner with QA concurrence, so only the hard and high-risk cases come to the board, and by giving it an on-demand path for urgent systems.

**"A model has been live a year. How does governance know it is still acceptable?"** Monitoring designed in from day one: periodic labeled-sample performance against the spec, continuous override-rate tracking as a leading indicator, and input-drift monitoring, with a pre-defined response when a trigger fires, all rolled into management review. Without that, the validated state is just an assertion from release day.

**"What is the most overlooked stage, and why does it matter?"** Decommissioning. A retired model with a live endpoint still producing outputs, or with its records and versions discarded, is an uncontrolled state and a real finding. Governance closes the loop: decision and rationale recorded, records retained, endpoints and access genuinely shut down, the register updated.

**"How do you connect AI governance to the existing quality system?"** Through ICH Q9(R1) and Q10: tiering is a risk assessment, oversight design is risk control, monitoring is risk review, change control is risk control on change, and management review surfaces aggregate AI risk to leadership. I build governance inside the quality system using its existing mechanics, not as a parallel process, because that is what reads as a system under control in an inspection.

---

## The Honest Assessment

AI governance in GxP is being assembled from existing quality-system principles and emerging, partly draft AI-specific guidance, and the formal framework is still settling. Waiting for a complete rulebook is not an option, because the operational pressure to deploy is already here and the guidance may be years from final. Deploying AI across an organization with no governance layer is the opposite risk: when an inspector asks how many systems you run, who approved them, and who watches them, the absence of an answer is itself the finding.

The defensible path is unglamorous and steady. Issue a short, function-based policy that puts AI inside the quality system. Build and actively maintain a register that surfaces hidden AI. Name accountabilities, especially the business owner. Tier on consequence using your existing risk-management method. Design human oversight to the tier and keep it meaningful. Govern change with a predetermined plan. Monitor from day one and feed it to management review. Retire systems cleanly. Document the rationale at every decision, including where you reasoned by analogy because guidance was silent. A program that honestly shows what it governs, how it decided, and how it keeps watch is more defensible than one that claims blanket compliance under a framework that does not yet fully exist.
