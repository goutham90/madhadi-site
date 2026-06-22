---
title: "Supplier and Vendor Collaboration for AI in a GxP Context"
description: "How to work with AI and SaaS vendors under GxP using a shared-responsibility model: what to assess, how to use supplier documentation, what to put in the quality and AI agreement, and how to keep oversight going after go-live."
pubDate: 2026-06-22
tags: ["ai", "supplier-qualification", "csv", "gxp", "saas", "vendor-management", "shared-responsibility"]
pillar: "csv-csa"
tier: "Intermediate"
---

Most AI used in regulated pharma, biotech, and device companies is not built in house. It arrives as a vendor product: a SaaS platform with a machine learning feature, a cloud model accessed through an API, a document-classification engine sold as part of a quality system, or a large language model wrapped in someone else's application. The regulated company still owns the GxP decision the AI touches, but it does not own the model, the training data, the infrastructure, or the change schedule. That split is the central problem of this article.

A traditional software supplier ships a deterministic product, you validate it for your intended use, and as long as the version does not change, the validated state holds. An AI supplier ships something that can change behavior without a version bump, whose internal logic neither of you can fully inspect, and whose performance depends on data you may never see. You cannot validate that away by yourself, and you cannot delegate it entirely to the vendor either. What you can do is agree, in writing and in advance, on who is responsible for what, then assess and monitor against that agreement.

This article covers how to do that. It assumes you already understand basic supplier qualification, the [supplier and vendor qualification](/articles/supplier-vendor-qualification) process and the [risk-based software supplier assessment](/articles/software-supplier-assessment-csa) method. The AI-specific collaboration work sits on top of that base. If your concern is validating the system itself rather than managing the relationship, read [validating AI-enabled GxP systems](/articles/validating-ai-gxp-systems); if the AI is a large language model or generative component, read [qualifying LLMs and generative AI for GxP](/articles/qualifying-llms-genai-gxp).

---

## The Shared-Responsibility Model

### Why it matters

The shared-responsibility idea comes from cloud computing, where the provider secures the infrastructure and the customer secures what they put on it. Auditors and inspectors already expect a clear division of duties for any outsourced GxP activity, and 21 CFR Part 11 plus EU GMP Annex 11 both keep the regulated company accountable for the integrity of records regardless of where the system runs. EU GMP Annex 11 clause 3.1 requires a formal agreement that states the third party's responsibilities:

> When third parties (e.g. suppliers, service providers) are used e.g. to provide, install, configure, integrate, validate, maintain (e.g. via remote access), modify or retain a computerised system or related service or for data processing, formal agreements must exist between the manufacturer and any third parties, and these agreements should include clear statements of the responsibilities of the third party.
>
> -- EU GMP Annex 11, clause 3.1 (Suppliers and Service Providers)

The risk if you skip this: the most common AI supplier failure is not a technical defect, it is an accountability gap. Each side assumes the other validated the model, tested for drift, or controlled the change. Nobody did. The first time anyone notices is during an inspection, when the investigator asks who confirmed the model still performs and both parties point at each other. A documented shared-responsibility model closes that gap before it opens.

### What it is

A shared-responsibility model is a written allocation of every responsibility across the AI lifecycle to either the supplier, the customer, or both. It is not a vague statement that "the vendor handles the AI." It is a line-by-line map. The useful framing is a responsibility matrix that covers the model's whole life: how it was built, what data trained it, how it was tested, how changes are notified and controlled, how transparent its behavior is, and how the platform and data are secured.

A typical split looks like this. Adapt it to the specific product; the point is that no row is left unassigned.

| Lifecycle area | Typically supplier | Typically customer | Usually shared |
|---|---|---|---|
| Model architecture and development | Build and document the model | -- | -- |
| Training data sourcing and quality (vendor base model) | Source, label, govern | -- | -- |
| Customer-specific training/fine-tuning data | -- | Source, label, govern integrity | Vendor provides the tooling |
| Base-model performance evidence | Provide held-out test results | -- | -- |
| Intended-use performance in your context | -- | Define and verify acceptance criteria | Vendor supplies metrics, you confirm fit |
| Infrastructure and platform security | Secure hosting, encryption, availability | -- | -- |
| Access control and user provisioning | Provide the controls | Configure and govern your users | -- |
| Change notification | Notify of model changes per agreement | -- | -- |
| Change impact assessment and approval | -- | Assess impact, approve for GxP use | -- |
| Drift and performance monitoring | Platform-level signals where offered | Monitor against your intended use | Both contribute data |
| Audit trail and record integrity | Provide compliant logging | Configure, review, retain | -- |
| Periodic re-evaluation | Provide updated evidence | Re-confirm fitness for use | -- |

The principle that survives every product variation: the supplier is responsible for what it builds and operates, the customer is responsible for fitness for the specific GxP intended use and for the integrity of customer data, and the two share anything that requires information to flow between them, which is most of the interesting risk.

### How to build one, step by step

1. List the AI capabilities the product actually exposes in your workflow. Not the marketing list, the functions you will rely on for a GxP decision. If the platform also does classification or prediction behind the scenes, capture that too; hidden AI is a recurring inspection finding.
2. For each capability, write the intended-use sentence: what the model outputs, what action it triggers, and who owns the consequence. This is the same discipline you would apply when validating the system, and it determines how much of the matrix matters.
3. Take each lifecycle area in the table and assign an owner. Where a row is "shared," name the specific information that must pass between the parties and in which direction.
4. Resolve every "to be determined." A blank cell is the accountability gap you are trying to close. If the vendor will not commit to a row, that is itself a risk finding, document it and decide whether you can mitigate it on your side.
5. Get it signed by both parties as part of the quality agreement, and review it whenever the product or the intended use changes.

### Acceptance criteria

You have a defensible shared-responsibility model when:

- every lifecycle area has a named owner and no cell reads "unassigned" or "to be determined";
- every shared responsibility names the specific information flow and its direction;
- the model is signed by both the supplier and the customer and referenced from the quality agreement;
- it is mapped to the actual capabilities you use, not a generic template;
- it is reviewed on a defined trigger (product change, intended-use change, periodic review).

### Roles

The system owner drives the intended-use definition and owns the customer-side rows. Quality assurance approves the allocation and confirms it is defensible. Procurement and legal turn it into contractual language. Data science or IT reviews the technical rows for realism. The supplier's quality and product teams confirm what they can actually commit to. See [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) for the broader accountability model.

### Common inspection findings

- No documented division of responsibility, so the customer cannot say who is accountable for model performance.
- A generic responsibility template that does not match the product the company actually bought.
- "Shared" responsibilities with no defined information flow, so in practice neither side acts.
- The customer assuming a vendor's "validated" claim discharges the customer's own responsibility, which it does not.

### Interview angle

> "What is a shared-responsibility model and why does it matter for AI vendors?" A good answer: it is a written, line-by-line allocation of every lifecycle responsibility across supplier and customer, because Annex 11 keeps the regulated company accountable for record integrity even when a third party runs the system. The supplier owns what it builds and hosts; the customer owns fitness for the specific intended use and the integrity of customer data; anything needing information to flow is shared. The failure it prevents is the accountability gap where both parties assume the other handled validation, drift, or change.

---

## What to Assess in an AI Supplier

Supplier assessment for AI extends the standard risk-based assessment with categories that a deterministic-software assessment never had to consider. The depth of assessment scales with the risk the AI poses to product quality and patient safety, which is the [computer software assurance](/articles/computer-software-assurance-fda) principle applied to procurement: an advisory tool that a human always reviews needs a lighter assessment than a model that drives an action automatically.

### The assessment areas

**Model development.** How was the model built, what type of model is it, and what is the development process? You are not auditing the data scientists' code line by line, you are confirming there is a disciplined, documented development lifecycle rather than an undocumented experiment that happened to ship. Ask for evidence of a defined development process, version control over models, and a methodology for selecting and testing the model. The risk if you skip this: a model with no development discipline cannot be reproduced or investigated when it goes wrong, and you inherit that opacity.

**Training data.** What data trained the model, where did it come from, and how was its quality and representativeness controlled? For a vendor base model you will rarely get the raw data, but you should get a description: sources, date ranges, domains covered, and known limitations or populations the model was not trained for. The risk: a model trained on data that does not resemble your population, your products, your sites, or your edge cases will quietly underperform exactly where it matters, and you will not know until it fails. Representativeness is the question that exposes this.

**Validation evidence.** What evidence does the vendor hold that the model performs, and on what test set? Ask specifically whether performance was measured on data the model never saw during training, because performance reported on training data is meaningless. Ask which metrics they report (recall, precision, F1, calibration) and against what thresholds. The risk: a vendor headline accuracy number with no held-out test set, no metric definition, and no population description is marketing, not evidence.

**Change notification.** How and when will the vendor tell you when the model changes? This is the single most AI-specific assessment area and the one teams most often miss. A vendor that updates its base model silently can change your system's behavior overnight with no notice and no opportunity for you to re-confirm fitness. The risk: your validated state lapses without anyone knowing. You need a contractual commitment to advance notification with enough lead time to assess impact.

**Transparency and explainability.** What can the vendor tell you about why the model produces a given output? The level you need depends on your use pattern, but you should know what is available: confidence scores, feature attributions, source grounding for generative outputs, and the documented limitations of any explanation method. The risk: a black box you cannot interrogate makes meaningful human review impossible, which undermines the control standing between a model error and a quality event.

**Security.** How is the platform secured, how is your data protected in transit and at rest, who has access, and how is record integrity preserved? For AI specifically, also ask what happens to your data: is it used to train the vendor's models, is it segregated, is it deleted on request? This is standard [cloud and SaaS validation](/articles/cloud-saas-validation) territory, with the added question of data reuse for model training, which carries both confidentiality and integrity implications.

### How to run the assessment, step by step

1. Set the risk class from the intended use (advisory, automated classification, process-influencing) and let it set the depth of every following step.
2. Send a structured questionnaire covering the six areas above, with the AI-specific questions called out, not buried.
3. Request supporting documentation: development process description, model and data documentation, validation report or summary, change-management procedure, security and certifications, and any third-party audit reports.
4. Score the responses and the evidence against your acceptance criteria, not against the vendor's self-description.
5. For higher-risk uses, escalate from questionnaire to a supplier audit, on site or remote. The standard [conducting a supplier audit](/articles/conducting-a-supplier-audit) approach applies, with added auditor focus on model lifecycle, training-data governance, and change control.
6. Record the assessment outcome, any gaps, the mitigations you will run on your side for gaps the vendor cannot close, and the approval decision.

### Acceptance criteria

The supplier is qualified for the intended use when:

- the assessment depth matches the documented risk class;
- all six AI areas were assessed and evidenced, not just the standard software ones;
- validation evidence references a held-out test set with defined metrics, or the gap is documented and mitigated;
- there is a contractual change-notification commitment with usable lead time;
- security and data-handling answers, including whether your data trains the vendor's models, are on file;
- gaps the vendor cannot close have a named customer-side mitigation and QA sign-off.

### Roles

QA owns the assessment decision and the acceptance criteria. The system owner provides the intended use and risk class. IT and security assess the platform and data-handling rows. Data science, where available, reviews the model and validation evidence for credibility. Procurement coordinates the questionnaire and the audit logistics.

### Common inspection findings

- An AI supplier assessed with the generic software questionnaire, so model development, training data, and change notification were never asked about.
- Acceptance of a vendor accuracy figure with no held-out test set and no metric definition.
- No change-notification clause, so the company has no mechanism to learn when the model changed.
- No record of whether customer data is used to train the vendor's models.
- Assessment depth disconnected from risk: a process-influencing model assessed as lightly as an advisory one.

### Interview angle

> "What do you assess in an AI vendor that you would not assess in a normal software vendor?" Six things on top of the standard assessment: how the model was developed, what data trained it and whether that data is representative of your population, what validation evidence exists and whether it was measured on a held-out test set, how and when the vendor notifies you of model changes, what transparency the model offers, and what happens to your data including whether it trains the vendor's models. The change-notification question is the one people forget and the one that quietly breaks the validated state.

---

## Using Supplier Documentation Without Over-Relying On It

### Why this is a balance

Re-creating a vendor's development and testing evidence from scratch is wasteful and usually impossible; you do not have the model internals or the base training data. Both GAMP 5 and the computer software assurance approach explicitly support using supplier documentation to reduce duplicated effort, provided the supplier has been assessed as capable and the documentation is fit for the purpose. So you should use it. The risk is using it as a substitute for confirming fitness in your own context, which it can never be.

The line to hold: supplier documentation can establish that the product was built and tested competently. It cannot establish that the product is fit for your specific GxP intended use, on your data, in your workflow. That second part is yours and cannot be outsourced.

### What you can reuse, and what you cannot

| You can reasonably reuse | You still must do yourself |
|---|---|
| Model development process documentation | Define your intended use and risk class |
| Vendor's base-model validation/test results | Set acceptance criteria for your use case |
| Infrastructure security certifications and audit reports | Verify performance on your data or a representative sample |
| Platform functional documentation | Configuration verification for your configured instance |
| Change-management procedure description | Impact assessment of each notified change |
| Data-handling and privacy attestations | Integrity controls over your own data and your users |

### How to use it defensibly, step by step

1. Confirm the supplier assessment supports reliance: a capable, assessed supplier earns more reuse, an unproven one earns less. Reliance is a function of assessed capability, not convenience.
2. Map each piece of supplier documentation to the requirement it satisfies in your validation, so the traceability is explicit and an inspector can follow it.
3. Identify the gap: list the requirements supplier documentation does not cover, which always includes intended-use fitness and customer-side configuration and data integrity.
4. Fill the gap with your own evidence: targeted verification on representative data, configuration testing, and integrity controls for your data and users.
5. Record the reliance decision and its basis, so the choice to reuse rather than repeat is a documented, risk-based judgment and not an unexamined shortcut.

### A worked reliance decision

A vendor provides a validation summary showing its document-classification model achieves 0.93 recall on a held-out test set of 5,000 documents drawn from general pharmaceutical quality text. Your use is classifying your incoming deviations. You reuse the development-process and security documentation outright. You do not reuse the 0.93 figure as your acceptance evidence, because that test population is not your deviations. Instead you run a confirmatory test on a held-out sample of your own labeled deviations, set your own recall threshold tied to the cost of a missed critical deviation, and record both the reuse decision and the confirmatory result. The reliance is real but bounded, and the boundary is documented.

### Acceptance criteria

- Reliance on supplier documentation is tied to a completed, favorable supplier assessment.
- Each reused document is mapped to the specific requirement it satisfies.
- Intended-use fitness, configuration verification, and customer-data integrity are evidenced by the customer, not assumed from vendor documents.
- The reliance decision and its risk basis are recorded.

### Common inspection findings

- Treating a vendor validation package as the company's own validation, with no intended-use verification.
- No mapping from supplier documents to the requirements they are claimed to satisfy.
- Reliance with no documented supplier assessment behind it.
- A configured, customer-trained instance validated only by the platform vendor's generic claim.

### Interview angle

> "A vendor says their AI is already validated. Is your work done?" No. Their validation can show the product was built and tested competently, which lets me reuse development and security documentation and avoid duplicating it. It cannot show the product is fit for my intended use, on my data, in my workflow, and it cannot cover my configuration or my data integrity. I confirm fitness with my own targeted verification on representative data, map their documents to the requirements they actually satisfy, and document the reliance decision as a risk-based judgment.

---

## The Quality and AI Agreement

### Why you need one

For any outsourced GxP activity, regulators expect a written quality agreement defining responsibilities; EU GMP Chapter 7 and Annex 11 both point to it, and it is standard practice for any [CDMO or supplier relationship](/articles/cdmo-oversight-quality-agreements). For AI, the standard quality agreement is necessary but not sufficient, because it was written for stable products. The model-specific obligations, change notification, performance evidence, drift, data handling, transparency, have to be added, either as AI clauses in the quality agreement or as a dedicated AI addendum.

The risk if you skip it: without contractual obligations, the vendor has no duty to notify you of model changes, no duty to provide performance evidence, and no constraint on using your data to train its models. You will discover all three at the worst possible moment.

### What goes in it

Beyond the standard quality-agreement content (scope, responsibilities, audit rights, deviation and change notification, record retention, subcontracting), an AI agreement should address:

- **Change notification for the model.** Advance written notice of model changes, including base-model updates the vendor initiates, with defined lead time long enough for you to assess impact before the change is live in your environment. Specify which change types are in scope, including retraining and architecture changes.
- **Performance evidence and re-evaluation.** The vendor's obligation to provide validation evidence, the metrics and test-set basis, and updated evidence after material model changes or on a periodic cadence.
- **Drift and monitoring information.** What platform-level performance or drift signals the vendor will surface, and your right to the data needed to monitor performance in your own context.
- **Data handling and ownership.** Whether your data is used to train the vendor's models, how it is segregated, retained, and deleted, and confirmation that your data stays your data. This protects both confidentiality and the integrity of records derived from it.
- **Transparency obligations.** What explainability information the vendor will make available and the documented limitations of it.
- **Audit and access rights.** Your right to audit the supplier's relevant processes, including model lifecycle and change control, scaled to risk.
- **Version pinning where available.** Whether you can pin a model version and for how long, especially for API-delivered models where the vendor can otherwise change the model under you.
- **Incident and escalation.** Notification obligations when the vendor detects a model defect or performance problem that could affect your use.

### How to put it in place, step by step

1. Start from your standard quality-agreement template so you do not lose the established content.
2. Add the AI clauses above, or attach an AI addendum, sized to the risk class of the use.
3. Negotiate the change-notification lead time first; it is the clause most often resisted and most load-bearing. If the vendor cannot commit to advance notice, that is a finding that may rule the product out for higher-risk uses.
4. Reconcile the agreement with the shared-responsibility matrix so the two documents say the same thing; the matrix is the operational view, the agreement is the contractual one.
5. Route through QA, legal, and procurement for signature, and set the review trigger.

### Acceptance criteria

- The agreement is signed by both parties before the AI is used for a GxP purpose.
- It contains a change-notification clause with a defined, usable lead time covering vendor-initiated model changes.
- It states whether and how customer data is used to train vendor models.
- It grants audit and access rights scaled to risk, covering model lifecycle and change control.
- It is consistent with the shared-responsibility matrix.

### Roles

QA owns the GxP content and approval. Legal and procurement own the contractual mechanics and negotiation. The system owner provides the intended use and the change-notification lead time the business actually needs. The vendor's quality and legal teams confirm commitments. See [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements) for the general agreement structure this extends.

### Common inspection findings

- A quality agreement that predates the AI feature and never addresses model change, performance, or data reuse.
- No change-notification obligation, so vendor model updates arrive unannounced.
- Silence on whether customer data trains the vendor's models.
- An AI agreement that contradicts the shared-responsibility matrix because the two were written by different functions and never reconciled.

### Interview angle

> "What would you add to a standard quality agreement for an AI vendor?" Model change notification with enough lead time to assess impact before it goes live, a duty to provide performance evidence and updated evidence after changes, the data and signals I need to monitor drift in my context, explicit terms on whether my data trains their models, transparency obligations with their limitations stated, audit rights over the model lifecycle, and version pinning where the product allows it. The change-notification lead time is the clause I negotiate hardest, because without it my validated state can lapse silently.

---

## Ongoing Oversight After Go-Live

### Why qualification is not the end

A standard supplier is re-qualified periodically and otherwise left alone between versions. An AI supplier cannot be, because the product can change behavior with no version change and no action on your part, through vendor model updates or through drift in the data the model sees. Annex 11 and the [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review) expectation for keeping systems in a validated state both apply, but the thing you are checking is different: not "has the software changed" but "does the model still perform, and has the vendor changed anything."

The risk if you skip it: deploy and forget is the most common AI failure after go-live. The model degrades, or the vendor updates it, and the first evidence anyone has is a quality event, because there was no mechanism watching.

### What ongoing oversight covers

- **Processing change notifications.** Every notified model change runs through your [change control](/articles/change-control-validated-systems) process: an impact assessment against your intended use, the confirmatory testing your predetermined change plan requires, and a documented approval before the change is in GxP use. A vendor-initiated change is still a change you must govern.
- **Performance monitoring in your context.** Periodic verification that the model still meets your acceptance criteria on representative production samples, plus cheap continuous signals such as the human override rate, which usually moves before a formal metric review catches degradation.
- **Periodic supplier re-evaluation.** On a risk-based cadence, re-confirm the supplier still meets your expectations: any quality issues, any changes to their development or change-management process, current security and data-handling posture, and whether their performance evidence is still current.
- **Vendor communication and incident handling.** A working channel for the vendor to report model defects or performance problems, and a defined response on your side when they do.
- **Watching for silent change.** Where the agreement does not guarantee notification, or for API models the vendor can update freely, monitoring becomes your only line of defense; the override rate and input-distribution signals are how you catch a change you were never told about.

### How to run it, step by step

1. Build the oversight activities into the system's procedures and the supplier's periodic-review schedule from day one, not as an afterthought.
2. Route every change notification through change control with an intended-use impact assessment and the confirmatory testing your plan defines.
3. Run performance monitoring on the defined cadence, watch the override rate continuously, and define in advance who is notified and what happens when a threshold trips: pause, route to fuller human review, investigate.
4. Re-evaluate the supplier on the risk-based cadence and after any significant vendor or product change.
5. Keep the monitoring and oversight records; they are GxP records and they are the evidence that the validated state still holds.

### A worked oversight example

A SaaS quality platform classifies incoming complaints. The agreement requires 30 days advance notice of model changes. In month seven the vendor notifies you of a base-model update. Your change-control process opens a record, your data scientist runs the predetermined confirmatory test on your locked test set, the retrained model meets recall but precision drops slightly, QA reviews the impact, judges it acceptable for the screening use, and approves deployment with a note to watch the override rate. In month nine, with no vendor notification, the complaint override rate rises sharply. Monitoring flags it, you pull a labeled sample, confirm performance has degraded on a new product line the model was not trained for, route those complaints to full human review, and open a supplier discussion. Both the notified change and the silent drift were caught because oversight was running, not because the vendor's qualification three years ago was thorough.

### Acceptance criteria

- Every vendor model change is processed through change control with an intended-use impact assessment, before GxP use.
- Performance monitoring against your acceptance criteria runs on a defined cadence, with continuous override-rate tracking and a defined response when a threshold trips.
- The supplier is re-evaluated on a documented risk-based cadence.
- A vendor incident-notification channel and a defined customer response exist.
- Oversight and monitoring records are retained and reviewable.

### Roles

The system owner owns ongoing performance monitoring and the impact assessment of changes. QA approves change impacts and the supplier re-evaluation outcome. Data science runs the confirmatory testing and analyzes drift signals. Supplier management or procurement owns the relationship and the re-evaluation cadence. Operational reviewers provide the override-rate signal through their daily work.

### Common inspection findings

- Deploy and forget: no monitoring after go-live, so the validated state is asserted, not demonstrated.
- Vendor model changes accepted without impact assessment or confirmatory testing.
- No periodic supplier re-evaluation after the initial qualification.
- No defined response when monitoring trips, so the monitoring is decoration.
- For API models, no compensating monitoring where the vendor can change the model without notice.

### Interview angle

> "The AI vendor was qualified at go-live. Why isn't oversight finished?" Because the product can change behavior with no version change and no action on my part, through vendor model updates or through drift in the data it sees. So I run every notified change through change control with an intended-use impact assessment, monitor performance against my acceptance criteria on a cadence, watch the override rate continuously as a leading indicator, and re-evaluate the supplier on a risk-based schedule. For an API model the vendor can change freely, that monitoring is my main line of defense, because there may be no notification at all.

---

## Bringing It Together: A Worked Shared-Responsibility Example

Consider a configured SaaS platform with a built-in machine learning model that triages incoming deviations into a preliminary criticality tier, which a QA reviewer confirms or overrides within one business day. The reviewer owns the final classification; the model only sets the starting point. This is an automated-classification use with a strong human control, so it is mid-risk rather than the highest.

Here is how responsibility falls across the lifecycle, and what each party actually does.

| Lifecycle area | Owner | What that party does |
|---|---|---|
| Model architecture and base training | Supplier | Builds and documents the model; provides development-process documentation |
| Base-model validation evidence | Supplier | Provides held-out test results and metric definitions |
| Intended-use definition and risk class | Customer | Writes the triage intended-use statement; assigns the risk class |
| Acceptance criteria for this use | Customer | Sets the recall threshold tied to the cost of a missed critical deviation |
| Performance verification on customer data | Customer | Runs a confirmatory test on a held-out sample of the company's own labeled deviations |
| Configuration of the instance | Customer | Configures workflow routing, thresholds, and the override step; verifies the configuration |
| Customer training/tuning data integrity | Customer | Governs lineage, labeling SOP, labeler qualifications, dataset versioning |
| Platform and data security | Supplier | Hosts securely, encrypts, provides access controls and compliant logging |
| Access control and user provisioning | Customer | Provisions and governs its own users within the vendor controls |
| Change notification | Supplier | Gives 30 days advance notice of model changes per the agreement |
| Change impact assessment and approval | Customer | Assesses each notified change against intended use; runs confirmatory testing; QA approves |
| Drift signals | Shared | Vendor surfaces platform signals; customer monitors override rate and input distribution in its context |
| Performance re-evaluation | Shared | Vendor provides updated evidence after changes; customer re-confirms fitness on its data |
| Human review in operation | Customer | The QA reviewer confirms or overrides each tier and owns the final call |
| Record retention and audit trail review | Customer | Configures, reviews, and retains the records the platform produces |

Read the table as a story. The supplier builds and runs a competent product and tells you when it changes. You decide what the model is allowed to drive, prove it is fit on your own deviations, control your data and your users, govern every change through your own process, watch for drift the vendor will not see in your context, and keep a meaningful human in the loop. The two shared rows, drift signals and re-evaluation, are exactly the places where neither party can act alone, which is why the agreement has to make the information flow both ways. Nothing in the table is unassigned, and that is the whole point: when an inspector asks who is responsible for knowing the model still performs, there is one clear answer, and it has evidence behind it.

This sits on top of, not instead of, the underlying [supplier and vendor qualification](/articles/supplier-vendor-qualification) work. The qualification confirms the supplier is capable; the shared-responsibility model, the AI agreement, and the ongoing oversight are what keep a probabilistic, vendor-controlled component defensible across its whole life in your GxP process.

---

## The Honest Assessment

Working with AI vendors under GxP is mostly an exercise in refusing to let the unfamiliar technology blur a familiar principle: the regulated company owns the GxP decision and the integrity of its records, no matter who built the model. Everything in this article, the responsibility matrix, the extended assessment, the bounded reuse of supplier documentation, the AI clauses in the agreement, the post-go-live oversight, is a way of making that ownership concrete when the model itself sits inside someone else's product and changes on someone else's schedule.

The two things that go wrong most often are both about information failing to flow. The first is the accountability gap, where each party assumes the other validated, monitored, or controlled the model, and a written shared-responsibility model is the fix. The second is the silent change, where a vendor updates a model with no notice, and the fix is a contractual notification clause backed by your own monitoring for when the clause is not honored or does not exist. Get the division of responsibility in writing, assess the model-specific risks rather than only the software ones, use supplier evidence without mistaking it for fitness in your context, put the AI obligations in the agreement, and keep watching after go-live. Do that and a vendor AI system reads, in an inspection, as a relationship under control rather than a black box nobody owns.
