---
title: "Validating AI-Based Automated Visual Inspection of Injectables"
description: "How to validate a machine-vision or deep-learning automated visual inspection system for parenteral products: the visual-inspection regulatory base, why AI changes the validation, how to qualify the camera-to-classifier chain, set defect-detection acceptance criteria, manage drift and model change, and defend it in an inspection."
pubDate: 2026-06-22
tags: ["AI", "visual-inspection", "validation", "injectables", "machine-vision", "USP-790", "CSV", "GxP", "machine-learning"]
pillar: "ai-automation"
tier: "Advanced"
---

Automated visual inspection of injectable products is one of the oldest places machine vision earned a home in pharmaceutical manufacturing, and it is now one of the first places deep learning is replacing the rule-based vision systems that ran for decades. A machine that decides whether a filled vial, syringe, or cartridge is fit to ship, or whether it goes to reject, is making a product-quality and patient-safety decision at line speed, thousands of units an hour. When the classifier behind that decision is a trained model rather than a fixed threshold on a pixel count, the validation problem changes shape.

This article is about validating that system: the camera-to-classifier chain that performs automated visual inspection (AVI) on parenteral products, where the defect decision is driven by AI or machine learning. It assumes you already know how to validate a deterministic computerized system and a learning model in general terms. If you do not, read the [GAMP 5 CSV framework](/articles/gamp5-csv-framework) and the [computer software assurance approach](/articles/computer-software-assurance-fda) for the lifecycle, and [validating AI-enabled GxP systems](/articles/validating-ai-gxp-systems) and the [GxP ML model lifecycle](/articles/gxp-ml-model-lifecycle) for the model-specific deliverables. This piece sits at the intersection: an AI model doing a specific, high-consequence inspection job under a specific set of compendial and GMP expectations.

After reading it you should be able to scope the validation of an AI-based AVI machine, set defensible defect-detection acceptance criteria, qualify the imaging and the model together, govern model change and drift, and answer the questions an inspector or an interviewer will put to you.

---

## The Inspection Job and Its Regulatory Base

Before any AI question, understand what the machine is for and what rules already govern it. Every injectable product released to a patient must be inspected for visible particulates and other defects. Particulate contamination in a sterile injectable can cause serious harm, and the requirement to inspect is long-settled.

The base expectations, which exist independently of how the inspection is automated:

- **USP General Chapter <790>, Visible Particulates in Injections,** is the enforceable compendial standard in the US. It sets the requirement that injectable products be essentially free of visible particulates, demonstrated through 100 percent inspection of every unit plus a statistical acceptance-sampling step. The 100 percent inspection may be manual, semi-automated, or automated; the subsequent acceptance-quality-limit (AQL) sampling inspection is performed manually.
- **USP General Chapter <1790>, Visual Inspection of Injections,** is informational, not a pass/fail standard. It describes how to design, qualify, and operate a visual inspection program across its lifecycle, including the use of automated equipment and the role of probability-of-detection studies. It is the closest thing to a method handbook for this topic.
- **USP General Chapter <1>, Injections and Implanted Drug Products (Parenterals), Product Quality Tests,** carries the over-arching requirement.
- **The FDA draft guidance "Inspection of Injectable Products for Visible Particulates"** (issued for comment in December 2021, draft as of this writing, verify its current status before you cite it as final) frames a holistic, risk-based program: product and container design, manufacturing controls, the inspection step itself, particulate identification, investigation, and corrective action. Treat it as the FDA's current thinking, stated as draft, not as settled law.
- **EU GMP Annex 1 (the 2022 revision)** sets the sterile-products expectations within which inspection sits, including the requirement that inspection methods be qualified and that automated inspection equipment be validated, with operators of manual or semi-automated steps qualified and periodically requalified.

Two points matter before we add AI. First, the regulatory base does not require AI; it requires that the chosen inspection method reliably detects the defects that matter, at a defined and demonstrated capability. AI is one way to meet that bar, and it has to clear the same bar a human line or a rule-based vision system clears, by a method appropriate to its nature. Second, the inspection is a detection problem with a known, asymmetric cost: a missed defect that reaches a patient is the failure you most need to prevent, while a false reject costs yield but not safety. That asymmetry drives every acceptance criterion later in this article.

---

## Why AI Changes the AVI Validation

Rule-based machine vision has been validated on AVI lines for years. A traditional vision system applies fixed image-processing operations, a blob-size threshold, an edge filter, a brightness band, and rejects a unit when a measured value crosses a set limit. It is deterministic: the same image yields the same decision, and you can read the decision logic. You validate it the way you validate any deterministic system, by proving the input-output behavior against a specification and freezing the configuration.

A deep-learning classifier changes that in the ways covered generally in [validating AI-enabled GxP systems](/articles/validating-ai-gxp-systems), with specifics that bite hard in inspection:

- **The decision is learned, not coded.** The model decides "defect" or "good" (often "defect class X") from the image through millions of parameters, not from a readable threshold. You cannot point to the rule that rejected a unit, which changes how you generate test evidence and how you explain a reject in an investigation.
- **Performance is a probability of detection, not a guarantee.** The honest claim is statistical: the system detects a given defect type, at a given size, under defined conditions, with a measured probability. That is the language USP <1790> already uses for inspection capability, so AI fits the compendial framing, but it forces you to state and defend a number rather than assert a pass.
- **The model can degrade with no code change.** A new container vendor, a tweak to the fill volume, a lamp aging and shifting color temperature, a different glass tint, any of these shifts the images the model sees away from what it trained on. The model has not changed; its world has. Detection can quietly fall off, which the periodic-review framing in [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review) has to account for.
- **The imaging and the model are one system, and the weak link governs.** A defect the camera never resolves cannot be classified by any model, however good. A model trained on one lighting setup will mis-decide under another. The validation cannot treat the optics, the lighting, the handling, and the classifier as separate boxes; it has to qualify the chain end to end, because the chain is only as capable as its worst stage.

The practical consequence: you carry forward everything you already do for AVI qualification, defect-set design, probability-of-detection studies, AQL sampling, and you add the model-specific controls, training-data integrity, held-out test discipline, drift monitoring, and model change control. You are not replacing the inspection validation playbook; you are extending it.

A short comparison makes the shift concrete.

| Dimension | Rule-based machine vision AVI | AI / ML AVI |
|---|---|---|
| Decision logic | Fixed thresholds, readable | Learned parameters, not directly readable |
| Capability claim | Threshold meets a limit | Probability of detection per defect type and size |
| "Validated state" means | Configuration and recipe unchanged | Detection capability not degraded (drift-aware) |
| Change trigger | Recipe or threshold edit | Retrain, new container, lighting or handling change |
| Test evidence | Defect-set runs vs expected reject | Defect-set runs plus held-out image test set, per-class metrics |
| Explainability | Read the recipe | Approximate, per-image saliency, designed in deliberately |
| Periodic check | Recipe has not changed | Detection still meets the qualified capability |

---

## Define the Inspection Scope and the AI's Role Precisely

As with any AI in a regulated workflow, the first and most consequential design act is stating exactly what the system decides and what role the model output plays. Get this wrong and the whole validation is mis-sized. Inspectors ask it first, and so will an interviewer: what does the machine actually decide, and what happens to a unit it rejects or passes?

Three patterns are common on an AVI line, in rising order of risk.

**Model as a pre-sort feeding human inspection.** The AI screens every unit and routes the suspect ones to a trained human inspector who makes the release decision; clearly good units pass. The model is a sensitivity aid, not the final arbiter for the units it flags. This is the lowest-risk pattern and the easiest to defend, because a qualified human still stands between the model and any borderline reject decision. The validation has to show the pre-sort does not silently pass defective units (its false-negative rate is acceptable) and that the human step is defined and recorded.

**Model as the automated accept/reject decision.** The AI decides, per unit, accept or reject, with no per-unit human review, and the decision physically routes the unit to good or reject. This is the high-consequence pattern, because a false negative means a defective unit can reach the lot that ships. The validation must demonstrate detection capability per defect type at the level the product requires and must run a monitoring program that catches capability loss before it causes a problem. The downstream AQL manual sampling step under USP <790> remains as an independent check, and your validation should treat it that way: a separate control, not part of the model.

**Model influencing a process or a feedback loop.** The AI's defect data drives an automated upstream adjustment, for example tightening a fill or stopper setpoint based on detected defect trends. This is the highest-risk pattern because a model error propagates into the process. It needs the failure-mode analysis and the deterministic guardrails described in [automation and control system validation](/articles/automation-validation-plc-scada-dcs); the model may inform the loop, but engineered limits, validated the deterministic way, must keep the process inside its proven operating bounds independent of the model.

A discipline worth borrowing: write one sentence that names the model output, the physical action it triggers, and the role accountable for the consequence. A filled-in example for the second pattern: "For each filled vial, the model assigns accept or a defect class; a reject classification diverts the vial to the reject track; the line is qualified to a demonstrated detection capability per defect type, and Quality owns the qualified capability and any decision to run, pause, or revert to manual inspection." If you cannot write that sentence cleanly, the scope is not yet defined.

One scope question is specific to inspection and easy to miss: define the defect catalog the system is accountable for. An AVI machine is qualified to detect a named set of defect types, particulates of stated size ranges, cosmetic glass defects, fill-level and meniscus faults, closure and crimp defects, and so on. A defect type that is not in the catalog and not represented in training and test is, by definition, outside the qualified capability. State the catalog, tie each defect type to its criticality, and make clear that anything outside it is handled by another control. An undefined defect catalog is the inspection version of an undefined intended use.

---

## Apply GAMP Categories With AI and Equipment Nuance

An AI-based AVI system is a hybrid of equipment qualification and software validation, and the GAMP category sits mostly on the software side. In practice the trained classifier is a custom artifact (GAMP Category 5 in nature) even when it runs inside a commercial inspection platform that you would otherwise treat as configured (Category 4). The platform vendor builds and maintains the camera, the handling, and often the model framework; the trained model that decides your defects on your product is yours, and it is bespoke.

This produces the same trap described in [validating AI-enabled GxP systems](/articles/validating-ai-gxp-systems): a vendor's general claim of a "validated AI inspection platform" almost never covers your specific model, trained on your defect set, for your product and container. Assess the supplier properly, see [software supplier assessment](/articles/software-supplier-assessment-csa), and use that assessment to scope how much you rely on vendor evidence for the platform and infrastructure. But size the model evidence to the risk of the trained instance, which is yours to validate regardless of the platform's marketing category.

Two equipment-side realities ride along. The imaging hardware, lighting, optics, handling, and rejector still need conventional installation and operational qualification; a model cannot compensate for an out-of-qualification camera. And the recipe or configuration that selects which model and which parameters apply to a given product or container is itself a controlled object, versioned and under change control like any GxP recipe.

---

## Qualify the Imaging Chain Before You Trust the Model

A model can only decide on what the camera resolves and the lighting reveals. So the imaging chain is qualified first, and its qualification is a precondition for the model's claimed capability. The order matters: a capability number measured on one optical and lighting setup does not transfer to another. Address, and document:

- **Optical resolution and field of view.** Can the system resolve the smallest defect in the catalog at the smallest size you claim to detect? A particulate near the limit of the visible range (often taken around 100 micrometers, though the true visible limit depends on the product, container, and particle properties) must occupy enough pixels to be classifiable. Resolution sets the floor on what any model can achieve.
- **Lighting and contrast.** Defect visibility depends on lighting geometry, intensity, and color, and on the container's glass and tint. Lighting is a qualified, controlled condition, and a change to it is a change to the system. Lamp aging that shifts intensity or color temperature over time is a known drift driver; build it into monitoring and maintenance.
- **Container handling and presentation.** Rotation, spin-stop dynamics for liquids, alignment, and stability of presentation determine whether the defect is even in the captured image. A particulate hidden behind a fill meniscus or on the far wall during the capture window is invisible to the model.
- **Camera and trigger stability.** Exposure, focus, and trigger timing must be stable and within qualified ranges across the run, and the system should detect and handle out-of-range captures rather than classifying a bad image.
- **Image capture integrity.** Captured images and the resulting decision records are GxP records. They carry the [ALCOA+ expectations](/articles/alcoa-plus-deep-dive) like any other data: attributable to the unit and the run, time-stamped, retained, and protected from alteration, with [audit trail](/articles/audit-trail-design-and-review) coverage of decision and override events.

A clean way to express the dependency in the validation file: state the qualified imaging conditions explicitly, then state that the model's demonstrated detection capability is valid only within those conditions. That single sentence closes a common inspection gap, where a capability number floats free of the conditions under which it was measured.

---

## Build the Defect Set and the Test Images Honestly

The heart of an AVI validation is the defect set: the physical reference units and the images used to challenge detection. For an AI system this is also the training and test data, and its integrity governs the integrity of every capability claim. The same [data integrity foundations](/articles/data-integrity-foundations) apply, with inspection-specific additions.

- **Representative real defects, not just easy ones.** The defect set must span the catalog, each defect type across its size range and severity, including the hard, borderline cases near the detection limit. A set made only of obvious defects produces a flattering capability number that collapses in production. Where natural defects are too rare to collect, characterized and documented manufactured or seeded defects are standard practice; document how each was created and characterized so a reviewer can trust it represents the real thing.
- **Representative good units.** The "good" class must reflect the real variation of acceptable product: normal fill-level spread, acceptable cosmetic variation, container-to-container glass differences. A model trained on pristine good units learns to reject normal variation, driving false rejects and yield loss.
- **Coverage of the production envelope.** Containers, sites, fill volumes, products, and product appearance (clear, colored, suspension, lyophilized cake) that the system will face must be represented. A model qualified on one container and run on another is operating outside its qualification.
- **Labeling by qualified inspectors, with agreement recorded.** Ground-truth labels are the reference the model learns from and is judged against. They must be assigned by qualified visual inspectors against the defect catalog, and for borderline calls the inter-inspector agreement must be measured and disagreements resolved by a documented procedure. The model can be no more consistent than its labels.
- **Class balance handled deliberately.** Defects are rare relative to good units, so raw accuracy is meaningless: a model that calls everything good scores high and detects nothing. Know the base rates and choose detection metrics that imbalance does not fool.
- **Three-way split, with a locked test set.** Keep training, tuning, and a locked test set that the model never sees until final reporting, exactly as in [validating AI-enabled GxP systems](/articles/validating-ai-gxp-systems). The capability number that goes in the report comes from the locked set, ideally including units and conditions the model never trained on. Version every dataset so the model can be reproduced.

A worked record for the defect-set file: name the defect catalog and the criticality of each type; list the reference units by defect type, size, and severity, noting which are natural and which characterized/seeded and how; describe the good-unit population and its variation; map coverage to containers, products, and sites; name the labeling procedure, the qualified labelers, the measured agreement, and the disagreement resolution; state the split method and the version hash of each frozen dataset. That package lets an investigator reproduce a decision and lets an inspector trace the chain from defect to capability claim.

---

## Set Detection-Capability Acceptance Criteria Before You Train

Where rule-based vision is tested against thresholds, an AI AVI system is tested against a stated detection capability per defect type. Define the criteria, in the user requirements specification, before the model is trained and tested, and anchor them with [user requirements and traceability](/articles/user-requirements-and-traceability). If you measure first and write criteria to match, you have rationalized a result, not validated a system.

The metrics that matter for inspection:

- **Probability of detection (sensitivity, recall) per defect type and size.** For each defect type, the proportion of true defects the system correctly rejects. This is the safety-critical number, because a missed defect is the dangerous failure. State it per defect type and size band, not as a single blended figure that hides a weak class.
- **False reject rate (one minus specificity on good units).** The proportion of good units wrongly rejected. This is the yield and cost metric. It does not threaten patient safety, but an excessive false reject rate makes the system operationally unusable and creates pressure to weaken detection, which is where safety problems start.
- **Per-class performance, not just an aggregate.** A system can post strong overall numbers while quietly failing on one rare but critical defect class. Acceptance criteria are set and reported per defect class.
- **Confidence calibration,** where the workflow routes by model confidence (for example, sending only low-confidence units to a human). A model whose stated confidence does not match its observed accuracy will mis-route.

It helps to read the safety-critical metric off a confusion matrix for one defect class. Suppose the locked test set contains 500 units, of which 50 carry a critical particulate defect. The system rejects 58: 48 of them truly defective (true positives) and 10 good units wrongly rejected (false positives), and it misses 2 truly defective units (false negatives).

|  | System rejects | System accepts |
|---|---|---|
| Actually defective | 48 (TP) | 2 (FN) |
| Actually good | 10 (FP) | 440 (TN) |

From this: probability of detection (recall) = 48 / (48 + 2) = 0.96; false reject rate = 10 / (10 + 440) = 0.022, about 2.2 percent. For a critical particulate, the 2 missed units are the failure you must drive down, so you set a high detection threshold for that class and accept the modest false reject cost, knowing the downstream AQL manual sampling provides an independent backstop. Writing these numbers before you train forces the explicit conversation about which error you can least afford, and ties the threshold to the criticality of the defect.

A defensible acceptance specification therefore states, per defect class: the metric, the required detection probability and the acceptable false reject ceiling, the justification tied to the defect's criticality, the test population and conditions it must be met on (including the qualified imaging conditions), and how the test set was constructed and held out. Where a defect class is rare, report a confidence interval or run a sensitivity check rather than trusting a single point estimate on a few units. A capability claim without its conditions and its uncertainty is an opinion, not a specification.

One inspection-specific comparison belongs in the file: the AI system's demonstrated capability against the capability of the method it replaces or supplements, whether a qualified manual line or a rule-based vision system. You are not obliged to beat human inspection on every class, but you must understand and state where the AI is stronger, where it is weaker, and how the overall program, including the AQL step and any human pre-sort, covers the gaps.

---

## Govern Model Change and Drift

A trained AVI model is not static in practice. New container lots, a new product on the line, a vendor change, lamp aging, or simply accumulated production data prompting a retrain, all are changes in the validation sense and need [change control](/articles/change-control-validated-systems). The difficulty is the range: a full model-architecture replacement clearly demands revalidation, while a minor retrain on additional images of an existing defect type may need only a confirmatory check on the locked test set.

A predetermined change control plan, written and approved before deployment, makes routine maintenance controlled instead of treating every retrain as an unplanned deviation. The concept comes from FDA's device program, and it is worth naming the device context accurately because the inspection-AI reader straddles drug-manufacturing and device worlds. FDA finalized its marketing-submission guidance on predetermined change control plans for AI-enabled device software functions in December 2024, and issued a broader draft guidance on lifecycle management and marketing submissions for AI-enabled device software functions in January 2025 (draft, verify status before relying on it). The 10 Good Machine Learning Practice guiding principles, published jointly by FDA, Health Canada, and the UK MHRA in October 2021, are non-binding but are a sound checklist for model lifecycle thinking. These device documents do not bind a drug-manufacturing AVI line, but the predetermined-change-plan mechanism and the GMLP principles transfer cleanly as good practice. For the device-software lifecycle picture see [software as a medical device and IEC 62304](/articles/iec-62304-samd-software-lifecycle), and for how to classify AI use and size the evidence, including where evolving frameworks like the EU AI Act may apply and why its timeline is still moving, see [AI risk assessment for GxP systems](/articles/ai-risk-assessment-gxp).

A worked change-classification table makes the plan operational:

| Change type | Example | Required action |
|---|---|---|
| Routine retrain, same architecture and defect catalog, additional in-envelope images | Retrain on accumulated production images of existing defect types | Confirmatory test on locked test set; must meet or exceed qualified capability per class; documented record; no revalidation |
| Detection-threshold adjustment | Raise the rejection threshold for one defect class to lift detection | Re-test affected classes, update spec rationale, Quality approval |
| New container, product, or fill within scope | Qualify the line for a new vial vendor | Imaging re-qualification for the new presentation; targeted capability re-demonstration on representative defects in that container |
| New defect type added to the catalog | Add a new closure defect to scope | Build defect set for the new type; demonstrate capability; data integrity review of new images |
| Architecture or model-family change | Replace the classifier model | Full revalidation; new URS capability spec if the inspection scope shifts |
| Vendor-driven platform or model-framework change | Vendor updates the inspection platform software or embedded model framework | Treat as a change you did not initiate; impact-assess, re-run the confirmatory test set, hold deployment until it passes |

The plan might permit retraining on accumulated in-envelope production images, provided the retrained model meets or exceeds the qualified detection capability for every defect class on the locked test set and the imaging conditions and product envelope are unchanged, with a documented confirmatory record for each retrain and a hard requirement for full revalidation on any architecture change or scope expansion. The value of writing it down in advance is that the decision logic was approved before anyone had a result to defend.

Drift deserves explicit treatment because it is how an AVI model fails silently. Detection capability can fall with no model or code change because the images shifted: a new glass tint, a fill-volume tweak, an aging lamp, a different stopper color. Monitor for it (below), and treat a confirmed drift signal as a change-control trigger, not a curiosity.

---

## Monitor Detection Capability After Deployment

The validated state of an AI AVI system includes ongoing monitoring that its detection capability has not degraded. This is the inspection-specific form of the periodic review every validated system needs, see [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review), and the difference from a traditional system is the same one that runs through all AI validation: a traditional periodic review confirms the configuration has not changed, while an AI periodic review confirms capability has not degraded, which can happen with no change at all.

What to monitor, and how:

- **Periodic capability re-challenge with the defect set.** On a defined cadence, and after any qualifying change, run representative reference defects through the live line and confirm detection still meets the qualified capability per class. This is the only direct measure that the system still works; it costs effort, so it runs on a schedule and on triggers.
- **Reject rate and reject-mix trending.** Continuous and cheap. A drift in the overall reject rate, or a shift in which defect classes are being rejected, is a leading indicator of an imaging or model change. A sudden drop in rejects is as concerning as a spike.
- **The downstream AQL sampling result as a feedback signal.** The manual AQL inspection required under USP <790> is an independent check on the lot. A defect found at AQL that the automated step should have caught is a direct signal that capability may have degraded, and it should feed an investigation, not just a lot disposition.
- **Human-pre-sort override or recheck rate,** where a human step exists. A rising rate of humans overturning the model is an early warning.
- **Imaging-condition monitoring.** Track lamp intensity and color, focus, and exposure against qualified ranges. Catching an optical drift here lets you act before detection visibly breaks.

Build monitoring in from day one. A model with no monitoring is not in a validated state regardless of how it performed at release, because you have no evidence it still works. Define, in advance, the response when a monitor trips: who is notified, whether the line pauses or reverts to a qualified manual or semi-automated inspection, and how the event is investigated. Reverting to a qualified fallback inspection is a real advantage in this domain, because a manual or semi-automated 100 percent inspection is itself an accepted method under USP <790>; design that fallback and keep the staff qualified to run it. A monitoring system with no defined response, and no usable fallback, is decoration.

---

## Roles and Responsibilities

AI AVI validation fails most often at the seams, between the equipment engineers, the data scientists, the inspection SMEs, and Quality, because no single role owns the chain. Name owners explicitly. A workable split, adapt titles to your organization:

| Activity | Accountable | Contributes |
|---|---|---|
| Inspection scope, defect catalog, AI role and risk class | Process or System Owner | QA, Inspection SME, Data Science |
| Imaging chain qualification (optics, lighting, handling) | Equipment Engineering | Validation, Vendor |
| Defect-set design and reference-unit creation | Inspection SME | QA, Data Science |
| Ground-truth labeling and agreement | Qualified inspectors / SME labelers | QA, Data Science |
| Model development and held-out testing | Data Science / ML Engineering | System Owner |
| Capability acceptance criteria and approval | Quality Assurance | System Owner, Inspection SME |
| Predetermined change control plan | System Owner + QA | Data Science, Engineering |
| Post-deployment capability monitoring | System Owner + Data Science | QA on review of records |
| Manual fallback inspection and inspector qualification | Operations / Inspection SME | QA, Training |
| Final release of the validated state | Quality Assurance | All |

The recurring failure is treating the classifier as a pure data-science deliverable that QA and the inspection SME review at the end. The defect catalog, the reference-unit design, the labeling agreement, the held-out discipline, and the change plan all need Quality and inspection-SME involvement while the system is being built, see [GxP roles and responsibilities](/articles/gxp-roles-responsibilities), not after.

---

## Explainability and Why a Reject Happened

Explainability matters in inspection for two concrete reasons: investigation and human review. When a unit is rejected, an investigator may need to understand why, and when a human pre-sort exists, the reviewer needs enough signal to exercise real judgment.

Scale the explanation to the use pattern. For a human pre-sort, presenting the model's defect class and a saliency overlay (a heat map of the image regions that drove the decision) lets the inspector confirm or overturn the call against what they can see. For a fully automated accept/reject, keep the captured image, the assigned class, the confidence, and an image-level rationale (such as the saliency region) in the decision record, so a later investigation can examine why a unit was rejected or, harder, reconstruct why a borderline unit was accepted. For a process-feedback pattern, the deterministic guardrail matters more than the model's self-explanation, because you are relying on engineered bounds.

Be honest about what saliency and feature-attribution methods deliver: they are approximations of the model's behavior, useful for review and investigation, not a literal causal account, and two methods can disagree on the same image. Document their limitations and do not present a saliency map as proof of why the model decided. An accurate statement of what the explanation does and does not establish is more defensible than overclaiming. Avoid generative or large-language-model components in the core accept/reject decision for inspection; the failure mode of a confident wrong output is exactly what you cannot tolerate on a release decision, and a discriminative classifier with a stated capability is the right tool for the job.

---

## Human Inspection: The Control That Stays

Even with a fully automated decision, human inspection does not disappear from the program; the manual AQL sampling step under USP <790> remains, and a manual or semi-automated 100 percent inspection is the qualified fallback. Where a human pre-sort or review exists, it has to be a real control, not a formality:

- **Defined.** What the inspector sees, what they decide, and on which units. A vague review step fails in inspection.
- **Documented.** The inspector's conclusion enters a GxP record, with the model output, the image, and the model version that produced the decision.
- **Meaningful, and inspector-qualified.** Inspectors are qualified and periodically requalified for visual inspection, trained on the system's known weaknesses, and apply judgment rather than rubber-stamping. See [training program](/articles/training-program-gxp).

The hardest part to sustain is meaningfulness, and AVI has a specific version of automation bias: when the machine is right almost all the time, a human pre-sort step decays into clicking through. Guard it by presenting the model's reasoning (the image and saliency), not just the verdict, and by monitoring the rate at which a human accepts the model's call without modification, treating an unusually high acceptance rate as a signal to investigate, not as success. The vigilance that drives effective [audit trail review](/articles/audit-trail-design-and-review) applies here: a control that is never truly exercised is not a control.

---

## Acceptance Criteria: How You Know It Is Done

A pile of activity is not a validated system. Before release, an AI-based AVI line should be able to show all of the following. Use it as a release checklist.

- The inspection scope and defect catalog are written, each defect type tied to its criticality, with anything out of scope assigned to another control, and the AI role (pre-sort, automated decision, process feedback) and risk class are assigned with an [ICH Q9 quality risk management](/articles/quality-risk-management) based rationale on file.
- The imaging chain is qualified (optics, resolution, lighting, handling, capture integrity), and the model's capability claim is explicitly scoped to those qualified conditions.
- Detection-capability acceptance criteria were written in the URS before training, per defect class, with detection-probability targets and false-reject ceilings justified against defect criticality.
- A locked, version-controlled image test set the model never saw was used to report capability, the reported per-class metrics meet the spec, and rare classes carry a stated uncertainty.
- The defect-set and training-data integrity file is complete: catalog, reference units (natural and characterized/seeded), good-unit population, coverage of the production envelope, labeling procedure and qualified labelers, inter-inspector agreement, disagreement resolution, splits, and dataset versions.
- A predetermined change control plan is approved, classifying anticipated changes and the testing each requires, and naming the architecture- or scope-change line that forces full revalidation.
- A monitoring plan is live from day one, with capability re-challenge cadence, reject-trend and AQL-feedback signals, imaging-condition checks, triggers, and the defined response, including a qualified manual or semi-automated fallback.
- The human review or pre-sort step (where present) is defined, documented in a GxP record, with inspectors qualified and requalified and trained on the model's weaknesses; the AQL manual sampling step is in place as an independent check.
- For a process-feedback pattern, deterministic safety interlocks are independently validated.
- Traceability runs from inspection scope and defect catalog to requirements to test evidence, with rationale recorded wherever guidance was silent.

If any line cannot be evidenced from the file, the system is not ready for release regardless of how well the model scored.

---

## How This Plays Out in an Inspection

Investigators approaching an AI-based AVI line tend to ask a predictable set of questions, and the file should answer them before they are asked. Expect: What defect types is the system qualified to detect, and what is its demonstrated detection capability for each? Under what imaging conditions was that capability measured, and how do you know the line still runs within them? Where did the reference defects and the training images come from, and how is their integrity assured? How were the labels generated, by whom, and with what agreement? How do you control model and recipe changes? How do you know detection has not degraded since release, and what do you do when it has? What happens to a rejected unit, and what independent check, the AQL sampling, sits behind the automated decision? If you fall back to manual inspection, are those inspectors qualified?

The theme across the broader inspection patterns, covered in [FDA inspection readiness](/articles/fda-inspection-readiness), is that investigators reward a coherent, honestly documented rationale and penalize gaps that look unmanaged. A file that says, in effect, "here is the qualified imaging, here is the per-class detection capability and the conditions it holds under, here is how we monitor it, here is the AQL backstop, and here is the qualified manual fallback," reads as a system under control. A file that asserts a blanket "validated AI inspection" with one blended accuracy number and no conditions invites a deeper look.

---

## Common Mistakes and Inspection-Finding Patterns

These are the recurring failure patterns, framed generically. Each maps to a real category of finding seen against computerized systems, data integrity, and sterile-products inspection.

- **One blended capability number.** Reporting a single overall accuracy that hides a weak detection rate on a rare but critical defect class. Set and report capability per class.
- **Capability with no conditions.** A detection number measured under imaging conditions that are not stated, so it cannot be tied to the running line. Scope every capability claim to the qualified optics and lighting.
- **Easy defect set.** A reference set of obvious defects that produces a flattering number and fails on the borderline, limit-of-detection cases that matter. Build the set to the hard cases.
- **Test image leakage.** Reporting capability on images the model trained or tuned on, inflating the headline. Use the three-way split and a locked test set touched once.
- **Criteria fitted after the fact.** Writing the acceptance threshold to match the result the model achieved. A spec dated after the test report will not be trusted.
- **No model or recipe change control.** Retraining or swapping models, or editing the recipe, with no governance, so the validated state silently lapses. A predetermined change control plan prevents it.
- **Deploy and forget.** No capability monitoring, so there is no evidence the line still detects months later, especially after a container or lamp change. The validated state is asserted, not demonstrated.
- **Reference and image data with no integrity record.** No lineage for the reference defects, no labeling procedure, no dataset version, so the model cannot be reproduced or a reject investigated. A data-integrity finding wearing an AI costume.
- **Ignoring false rejects.** Tuning only for detection and letting the false reject rate climb, creating yield loss and operational pressure that eventually pushes someone to weaken detection.
- **Rubber-stamp human pre-sort.** A defined human step that operators click through, revealed by a near-total agreement rate with the model. The control exists on paper only.
- **Unqualified manual fallback.** Reverting to manual inspection during a model issue with inspectors who are not qualified or current. The fallback fails when you most need it.
- **Vendor "validated AI" taken at face value.** Relying on a supplier's general platform-validation claim for your specific model on your product and container, with no site-level evidence for the trained instance.

---

## Interview Questions and How to Answer Them

If you are interviewing for a CSV, validation, or digital quality role and AI-based visual inspection comes up, these questions separate a practitioner from someone reciting buzzwords. Short, concrete answers win.

**"How is validating an AI visual inspection system different from validating a rule-based vision system?"** Rule-based vision is deterministic: fixed thresholds you can read, validated by proving input-output behavior and freezing the recipe. An AI classifier learns the decision, so its capability is a probability of detection per defect type rather than a threshold, it can degrade with no code change when the images shift, and you cannot read the rule that rejected a unit. So validation extends from the AVI playbook (defect sets, probability-of-detection studies, AQL) to add training-data integrity, a held-out image test set, per-class capability criteria, drift monitoring, and model change control.

**"What is the single most important thing to get right first?"** The scope and the defect catalog, then the imaging chain. The system is qualified to detect a named set of defect types at stated sizes under qualified imaging conditions; anything outside that catalog or those conditions is outside the qualification and needs another control. A model cannot detect what the camera does not resolve, so I qualify the optics, lighting, and handling before I trust any capability number.

**"How do you set acceptance criteria?"** Before training, in the URS, per defect class: a detection-probability target and a false-reject ceiling, justified against the criticality of the defect, measured on a locked test set the model never saw and scoped to the qualified imaging conditions. For a critical particulate I prioritize detection probability and accept a higher false-reject cost, knowing the downstream AQL manual sampling is an independent backstop. For rare classes I report a confidence interval rather than a single point estimate.

**"The system has run for nine months. How do you know it is still validated?"** Monitoring shows it. I re-challenge the line with the reference defect set on a cadence and after any change, trend the reject rate and reject mix continuously, watch the AQL sampling result as an independent feedback signal, and monitor imaging conditions like lamp intensity. Without that evidence the validated state is just an assertion from release day.

**"What is your biggest concern with a fully automated accept/reject decision?"** A false negative, a missed defect reaching the lot, and the fact that detection can degrade silently when containers, fill, or lighting change with no code change. I mitigate with per-class detection criteria, capability monitoring, the AQL backstop, and a predetermined change control plan, and I keep a qualified manual fallback so I can revert without shipping blind.

**"A regulator finds a defect at AQL that the automated step should have caught. What does that tell you, and what do you do?"** It is a direct signal that the qualified detection capability may have degraded, so it is more than a lot-disposition question. I investigate the capability, re-challenge the line with the relevant defect type, check for an imaging or product-envelope change since qualification, and consider reverting to qualified manual inspection while I do. It also tests whether my monitoring should have caught the drift earlier.

**"Which guidance do you apply when there is no single AI-AVI rule?"** USP <790> and <1790> and the FDA draft guidance on visible particulates for the inspection base, EU GMP Annex 1 for the sterile-products context, GAMP 5 and the computer software assurance approach for the lifecycle, ICH Q9 to size effort to risk, and from the device world the predetermined-change-control mechanism (FDA finalized that submission guidance in December 2024) and the GMLP guiding principles as good-practice analogies, noting they do not bind a drug-manufacturing line. I document where I reason by analogy because no single document fits cleanly, and I flag that the device-AI and EU AI Act picture is still evolving.

---

## The Honest Assessment

AI-based automated visual inspection is further along than most GxP AI, because the inspection job is narrow, the defect catalog is definable, and the compendial framework already speaks in the language of detection capability rather than pass/fail certainty. That makes the validation more tractable than open-ended quality AI: you have a clear job, an accepted way to express capability, and an independent AQL check standing behind the automated decision.

The work is still unglamorous and demanding. Qualify the imaging chain first, because the model can only decide on what the camera resolves. Build an honest defect set that includes the hard cases. Set per-class detection criteria before you train, tied to the criticality of each defect, and measure them on a locked test set under stated conditions. Govern model, recipe, and container changes with a predetermined plan, monitor detection capability for drift from day one, keep a qualified manual fallback, and document where you reasoned by analogy because no single guidance fits cleanly.

A deployment with honest documentation of its demonstrated capability, the conditions under which that capability holds, and how it is monitored and backstopped is far more defensible than one that asserts a "validated AI inspection" with a single accuracy number and no conditions. Inspectors respond better to a clearly bounded, well-monitored system than to a confident claim that comes apart under the first hard question.
