---
title: "AI/ML in Regulated Drug and Biologic Software: Change Control and Regulatory Expectations"
description: "How regulators frame AI and machine learning in software that supports drug, biologic, and combination products, covering the model lifecycle, good machine learning practice, the predetermined change control plan, transparency, and real-world performance monitoring, with a worked PCCP outline."
pubDate: 2026-06-22
tags: ["AI", "machine-learning", "SaMD", "combination-products", "PCCP", "GMLP", "change-control"]
pillar: "ai-automation"
tier: "Advanced"
---

A machine learning model embedded in regulated product software creates a problem the premarket framework was not built to handle. The traditional model assumes the software is designed, locked, authorized, and then distributed in that fixed state until the manufacturer files for a change. An AI model wants to do the opposite: keep learning, keep improving, change its behavior as it sees more data. The whole value proposition of machine learning is adaptation, and the whole logic of premarket review is stability. Regulators have spent the last several years building a framework to reconcile those two facts, and that framework is now concrete enough to be operational. For pharma, biotech, biologics, and cell and gene therapy organizations, this matters wherever software performs a clinical function: digital health software that supports a drug or biologic, the software component of a combination product, or a companion diagnostic that gates therapy.

This article covers how regulators frame AI and machine learning in clinical software, the AI/ML lifecycle, the good machine learning practice principles, the predetermined change control plan (PCCP) and what goes in it, transparency expectations, and real-world performance monitoring. It is written so that after reading it you could scope the work, sit in a design review, and answer the questions an interviewer or an inspector will ask. It is general guidance to adapt and verify against current regulations and your own quality system, not legal or regulatory advice.

If you are coming to this from the manufacturing and quality side, the companion piece on [validating AI-enabled GxP systems](/articles/validating-ai-gxp-systems) covers the same problems for models used inside a quality operation rather than distributed as part of a product. The quality system that all of this sits inside is described in [the pharmaceutical quality system](/articles/pharmaceutical-quality-system), and the underlying software lifecycle standard in [IEC 62304 software lifecycle](/articles/iec-62304-samd-software-lifecycle).

---

## How Regulators Frame AI and Machine Learning in Clinical Software

The first thing to get right is the vocabulary, because the regulatory category drives everything downstream.

Software as a medical device (SaMD) is software intended for a medical purpose that performs that purpose without being part of a hardware product. A diagnostic algorithm that reads images and flags suspected disease is SaMD. The software that drives an autoinjector or a connected drug-delivery system is software within a combination product, not standalone SaMD, though much of the AI thinking applies to both. For a therapeutics company, the AI usually shows up as a companion or complementary diagnostic, a digital health tool tied to a drug or biologic, or the software part of a drug-device combination. Regulators often use the broader phrase "AI-enabled device software function" to capture the AI component wherever it lives, in standalone SaMD or as part of a larger product.

Regulators frame these AI-enabled products around a few load-bearing ideas.

**Total product lifecycle (TPLC).** Regulators treat an AI-enabled product as something to be governed across its entire life, from design through retirement, not just at the moment of authorization. The reason is the one above: an AI product's behavior is not fixed at authorization, so a point-in-time review is insufficient on its own. The TPLC framing is why so much of the AI framework is about what happens after the product is on the market.

**Locked versus adaptive (continuously learning) models.** A locked model produces the same output for the same input every time; it only changes when the manufacturer deliberately retrains and redeploys it. An adaptive or continuously learning model updates itself in the field as it sees new data. Almost everything authorized to date has been a locked model, redeployed in controlled steps, because a model that silently rewrites itself in the field is very hard to keep inside an authorized safety envelope. The PCCP, discussed below, is the mechanism that lets a manufacturer plan and pre-authorize those controlled updates without a new submission each time.

**The international guiding principles.** Three regulators, the US FDA, Health Canada, and the UK MHRA, have published joint guiding principles that set the shared direction even where binding law differs by jurisdiction:

- Good Machine Learning Practice for Medical Device Development: Guiding Principles, jointly published October 2021, ten principles.
- Predetermined Change Control Plans for Machine Learning-Enabled Medical Devices: Guiding Principles, jointly published October 24, 2023, five principles.
- Transparency for Machine Learning-Enabled Medical Devices: Guiding Principles, jointly published June 13, 2024.

These are principles, not binding guidance. They tell you the direction of travel and the expectations regulators share, and they sit underneath the country-specific guidance that does carry weight.

**Risk-based classification still applies.** AI does not create a separate risk class. AI-enabled software is classified by the same rules as any product of its type, by intended use and risk. Where the software is a standalone diagnostic, the device classification and submission rules apply; where it is part of a drug-device combination, the product follows the marketing pathway for its primary mode of action, which for a therapeutics company usually means an IND, NDA, or BLA. The submission pathways for drugs and biologics are covered in [IND, NDA, and BLA pathways](/articles/ind-nda-bla-pathways). In the EU, standalone diagnostic software falls under the Medical Devices Regulation (MDR) or In Vitro Diagnostic Regulation (IVDR) device class. AI raises the evidentiary bar within a class; it does not move the class.

A note on the EU, where a second law now stacks on top of the product rules. The EU Artificial Intelligence Act, Regulation (EU) 2024/1689, entered into force on 1 August 2024 and applies in phases. AI systems that are themselves medical devices, or that are safety components of devices subject to third-party conformity assessment under MDR or IVDR, fall into the AI Act's high-risk category, which brings obligations on data governance, human oversight, transparency, and risk management on top of the existing requirements. The phased application dates are staggered and, as of mid-2026, actively moving: most of the Act became applicable on 2 August 2026, while the high-risk obligations for AI that is embedded in a regulated product (the Annex I bucket, which captures devices and IVDs) were dated 2 August 2027. A proposed amendment under discussion in 2026 would push those product-embedded high-risk obligations for MDR and IVDR products out to 2028. Treat any single date as provisional and verify the deadline applicable to your product class and notified-body route against the current text rather than quoting one from memory. The practical point holds regardless of the exact date: an AI-enabled diagnostic or combination product sold in the EU answers to two overlapping regimes at once, and the technical file has to satisfy both.

---

## The AI/ML Lifecycle for a Regulated Product

WHY this matters: the regulatory expectations attach to lifecycle stages, so if you cannot describe your own lifecycle you cannot show where each control lives. The lifecycle below is the product-facing version of the general model lifecycle in [the GxP ML model lifecycle](/articles/gxp-ml-model-lifecycle); the difference is that here the artifact is a regulated product and the evidence ends up in a marketing submission and a technical file.

The stages, in order:

1. **Intended use and clinical problem definition.** State what clinical decision or task the model supports, for which patient population, in which clinical workflow, and what the consequence of a wrong output is. This is the anchor for everything: the data you need, the performance you must prove, the human oversight you must design.
2. **Data collection and curation.** Assemble training, tuning, and test data that represents the intended population. Document source, provenance, inclusion and exclusion logic, and demographic composition.
3. **Model development and training.** Select the architecture, train, and tune. Record what was tried and the rationale for the final choice.
4. **Validation and clinical performance evaluation.** Measure performance on data the model never saw, against pre-stated acceptance criteria, broken out across relevant subgroups, not just in aggregate.
5. **Human factors and workflow integration.** Evaluate how a clinician actually uses the output, because the device's real-world safety depends on the human-AI interaction, not the model alone.
6. **Submission and authorization.** Package the evidence for the relevant pathway, including a PCCP if you intend to update the model after authorization.
7. **Deployment and labeling.** Release with transparency artifacts: what the model does, its performance, its limitations, the population it was validated on.
8. **Real-world performance monitoring.** Watch the deployed model for performance degradation, drift, and unexpected behavior across sites and populations.
9. **Modification and change control.** Update the model under the PCCP if you have one, or through a new submission if the change falls outside it. Then the loop returns to monitoring.

HOW to make this operational: build a single lifecycle traceability map that ties each stage to its evidence object (the data card, the validation report, the human factors report, the PCCP, the monitoring plan) and to the role accountable for it. An inspector or reviewer who asks "show me how this model was developed and how you keep it safe" is asking you to walk this map.

ACCEPTANCE CRITERIA for the lifecycle as a whole: every stage has a documented owner, a defined input and output, and an evidence object under document control; the chain from intended use to clinical performance to post-market monitoring is unbroken; and any model in the field can be reproduced from versioned data, code, and configuration.

---

## Good Machine Learning Practice (GMLP)

WHY: GMLP is the shared baseline the three regulators expect, the AI analogue of good engineering practice. It is not a checklist you certify against; it is the set of habits a credible AI program demonstrates. WHAT it contains: ten principles published in October 2021. The themes below are summarized in my own words for working use, not reproduced from the source text:

- **Bring every discipline in early.** Clinical, data science, software, quality, and human factors all engaged from the start, not consulted at the end.
- **Build on sound software engineering and security.** Version control, secure development, data integrity, and the discipline of [software cybersecurity for SaMD](/articles/device-software-cybersecurity-samd) underneath the model.
- **Make the data look like the people who will use the product.** Across age, sex, race, ethnicity, disease severity, sites, and equipment, so performance claims hold for the population that will actually be exposed.
- **Keep the data you train on separate from the data you test on.** No leakage between the data the model learned from and the data used to judge it.
- **Define ground truth with the strongest method you can.** A model can only be as good as the labels it learned from, so reference standards have to be rigorous.
- **Fit the model to the data and the intended use.** Including a clear account of how the model's outputs map to clinical decisions.
- **Judge the clinician-plus-tool, not the model alone.** The product in use is the human and the algorithm together, so that is what you measure.
- **Test under conditions that look like real use.** Realistic data, realistic sites, realistic workflow, not just a clean benchmark.
- **Give users the information they need to use it well.** The transparency theme, expanded in the 2024 transparency principles.
- **Watch the deployed model and manage retraining risk.** The post-market half of the lifecycle, and the conceptual root of the PCCP.

> The guiding principles call for deployed models to be monitored for performance and for retraining risks to be managed, framed across the total product lifecycle. (Summarized from the jointly published GMLP guiding principles, FDA, Health Canada, and MHRA, October 2021.)

HOW to evidence GMLP in practice: do not write a document called "GMLP compliance." Instead, point to where each principle is satisfied in your real records. Cross-functional involvement shows up in design review attendance and the risk file. Representativeness shows up in the data card and the subgroup performance table. Monitoring shows up in the post-market plan. GMLP is a lens for completeness, not a separate deliverable.

WORKED EXAMPLE: a team building an AI tool that flags suspected intracranial hemorrhage on head CT. Representativeness means the training data span scanner vendors, slice thicknesses, hospital sites, patient ages, and a realistic mix of hemorrhage types and sizes, including the small bleeds that are easy to miss. Clinician-plus-tool performance means measuring how radiologists perform with the tool versus without it, because a tool that is accurate but ignored, or accurate but trusted blindly, changes patient outcomes in ways the standalone metric will not show.

COMMON MISTAKES that map to inspection or review findings: a model validated only on data from one or two sites, then claimed for general use; demographic subgroups not analyzed, so a performance gap for an underrepresented group is invisible until it surfaces in the field; test-set leakage inflating the headline number; and standalone algorithm metrics presented as if they were clinical performance, with no study of the clinician using it.

---

## The Predetermined Change Control Plan (PCCP)

This is the part of the framework that is genuinely new, and the part most worth understanding well, because it is what makes a learning device governable.

### What a PCCP is and why it exists

WHY: without a PCCP, every meaningful change to an authorized AI model would require a new marketing submission, which is slow and incompatible with the pace at which models improve. The PCCP solves this by letting a manufacturer describe, in advance and as part of the original submission, the modifications it expects to make, how it will make and validate them, and the limits within which they stay. The regulator reviews and authorizes that plan up front. Modifications that fall inside the authorized plan can then be implemented without a new submission; modifications outside it still need one.

### Guidance status, verified

Get this right, because it is the kind of detail an interviewer uses to separate the people who track the framework from the people who skim headlines.

| Document | Type | Status as of mid-2026 |
|---|---|---|
| Predetermined Change Control Plans for Machine Learning-Enabled Medical Devices: Guiding Principles (FDA, Health Canada, MHRA) | Joint guiding principles, five principles | Published October 24, 2023; principles, not binding guidance |
| Marketing Submission Recommendations for a Predetermined Change Control Plan for Artificial Intelligence-Enabled Device Software Functions (FDA) | Guidance for industry | FINAL, December 2024 (Federal Register notice 4 December 2024) |
| Artificial Intelligence-Enabled Device Software Functions: Lifecycle Management and Marketing Submission Recommendations (FDA) | Guidance for industry | DRAFT, issued January 2025; comment period ran to spring 2025; not final, do not present as settled |

So the position to state cleanly: the PCCP marketing-submission guidance is FINAL (December 2024). The broader total-product-lifecycle and marketing-submission guidance that surrounds it is still DRAFT (January 2025) and should be described as draft, evolving, and subject to change, not as binding. The five-principle PCCP document from 2023 is international guiding principles, harmonized across the three regulators, underneath the binding US guidance.

> The PCCP describes the planned device modifications, the methodology to develop, validate, and implement those modifications, and an assessment of the impact, with the intent of supporting iterative improvement while maintaining a reasonable assurance of safety and effectiveness. (Paraphrased from the FDA final guidance, December 2024.)

### What a PCCP contains

WHAT: the final guidance frames a PCCP around three parts. Learn these three, because the structure is the answer to most PCCP questions.

1. **Description of Modifications.** The specific changes you intend to make after authorization, and only those. Stated concretely: which performance characteristics may change, the inputs or populations involved, and the bounds the changes stay within. Vague, open-ended language ("we may improve the model") is not a description of modifications and will not be authorized.
2. **Modification Protocol.** How each described modification will be developed, validated, and implemented. This is the methods section: the data management approach for any new data, the retraining or update method, the verification and validation plan with pre-stated acceptance criteria, and the steps to deploy the update in a controlled way. It is where you prove that an in-scope change will be made the same disciplined way every time.
3. **Impact Assessment.** A structured analysis of the benefits and risks of the planned modifications, including how the Modification Protocol controls the new risks the changes introduce, and the effect on the device's overall benefit-risk profile. This is the safety argument that the planned changes, executed under the protocol, keep the device safe and effective.

ACCEPTANCE CRITERIA for a PCCP that will survive review:

- Each modification is specific and bounded, with the limits stated quantitatively where possible (for example, the population it may extend to, or the performance range it must stay within).
- The Modification Protocol has objective, pre-stated acceptance criteria for each modification type, and a held-out test methodology that prevents the team from grading its own homework after the fact.
- The Impact Assessment links every modification to its risks and to the specific protocol step that controls each risk.
- The plan distinguishes clearly between what is in scope (implement under the PCCP) and what is out of scope (requires a new submission).
- Labeling and transparency commitments are included: how users will be told what version they are using and what changed.

### Worked PCCP outline

Here is a concrete outline for a hypothetical locked SaMD that triages chest X-rays for suspected pneumothorax, authorized via De Novo, with a PCCP to allow controlled improvement. Treat it as a template to adapt, not a finished plan.

```
PCCP: Chest X-ray Pneumothorax Triage SaMD, v1.0

1. SCOPE AND DEVICE OVERVIEW
   - Intended use, patient population, clinical workflow (triage prioritization,
     not diagnosis; radiologist remains the decision-maker)
   - Model type: locked CNN classifier, single output (priority flag + score)
   - Authorized performance baseline (sensitivity/specificity with CIs, by subgroup)

2. DESCRIPTION OF MODIFICATIONS (in scope only)
   M1. Periodic retraining on accumulated, curated data from existing
       indicated population and scanner types (no new population, no new input)
   M2. Recalibration of the triage score threshold within a stated range
   M3. Extension to one additional scanner manufacturer already in clinical use,
       within the existing intended population
   - Explicitly OUT of scope (new submission required): new patient population
     (e.g., pediatric), new clinical claim (diagnosis vs triage), new input
     modality, architecture family change

3. MODIFICATION PROTOCOL
   3.1 Data management
       - Source, provenance, curation, and labeling SOP for new data
       - Independence of training, tuning, and locked test sets
       - Subgroup representativeness requirements (age, sex, site, scanner)
   3.2 Re-training / update method (per modification type M1-M3)
   3.3 Verification and validation
       - Locked, version-controlled test set, touched once per update
       - Pre-stated acceptance criteria:
         * sensitivity >= authorized baseline, lower CI bound not below X
         * specificity within stated band
         * no subgroup performance drop beyond defined tolerance
       - Statistical method and sample-size basis
   3.4 Controlled implementation / deployment
       - Staged rollout, version stamping, rollback procedure
       - Update only proceeds if all acceptance criteria are met

4. IMPACT ASSESSMENT
   - For M1-M3: benefits, new risks introduced, and the specific 3.x protocol
     step that controls each risk
   - Effect on overall benefit-risk; cumulative-change consideration
   - Human-AI interaction impact (does the change alter how clinicians use it?)

5. TRANSPARENCY AND LABELING
   - How users are informed of the active version and what changed
   - Performance information updated at each in-scope change

6. RECORDS AND TRACEABILITY
   - Each executed modification produces a controlled record:
     data version, model version, V&V results vs criteria, release decision
```

The discipline that makes this defensible is the same one that makes any change control defensible: the decision logic is written and approved before there is a result to defend. Compare the worked change-classification approach in [change control for validated systems](/articles/change-control-validated-systems); the PCCP is that idea pushed into the premarket submission so the regulator pre-authorizes the routine changes.

COMMON MISTAKES with PCCPs: writing the Description of Modifications so broadly that it amounts to "we reserve the right to change the model," which a reviewer will not authorize; a Modification Protocol with no pre-stated quantitative acceptance criteria, so any future result can be rationalized as acceptable; an Impact Assessment that lists risks but never ties them to a controlling protocol step; and treating the PCCP as a way to avoid a submission for changes that genuinely alter the intended use, which is exactly what is out of scope.

---

## Transparency

WHY: a clinician cannot use an AI output safely if they do not know what the model does, how well it does it, on whom it was validated, and where it fails. The June 2024 transparency guiding principles make this an explicit expectation, and the EU AI Act makes transparency a legal obligation for high-risk systems. Transparency is also the control that makes meaningful human oversight possible; without it, oversight is a rubber stamp.

WHAT good transparency provides, to the right audience, at the right time:

- **What the device does** and what it does not do (triage, not diagnosis; an aid, not a replacement).
- **How it performs**, including the validated performance with uncertainty, broken out by relevant subgroup.
- **The population and conditions it was validated on**, so a user can judge whether their patient is in or out of that envelope.
- **Known limitations and failure modes**, stated plainly, not buried.
- **What changed**, when the model is updated under a PCCP, and which version is active.

HOW to deliver it: transparency is not a single label paragraph. It is designed into the device, the user interface, the labeling, and the training. The 2024 principles stress that the information should fit the audience and the context of use, a radiologist and a primary-care clinician may need different presentations of the same facts, and that transparency runs across the lifecycle, including at each update.

ACCEPTANCE CRITERIA: a user can determine, from the materials provided, what the device does, how well, on whom it was validated, where it fails, and which version they are running, without contacting the manufacturer.

COMMON MISTAKES: a single aggregate accuracy figure with no subgroup breakdown and no uncertainty; limitations written defensively for liability rather than usefully for the clinician; and no version information, so after a PCCP update no one in the field knows which model produced a given result.

---

## Real-World Performance Monitoring

WHY: this is the post-market half of the total product lifecycle and the part most likely to be weak, because the work happens after the excitement of authorization. An AI model can degrade with no code change at all when the population, the equipment, or clinical practice shifts (data drift and concept drift). A model that performed well at authorization is not assumed to keep performing; you have to show it. This connects directly to [product complaint handling](/articles/product-complaint-handling), of which AI performance monitoring feeds the same post-market channels.

WHAT to monitor:

- **Real-world clinical performance** against the authorized baseline, on representative samples, broken out by site and subgroup so a localized failure does not hide in the aggregate.
- **Input data distribution** versus the training distribution, as an early warning that the model is seeing a population it was not built for.
- **Override and disagreement rate**, where the clinician's final decision differs from the model's output, a cheap continuous signal that often moves before the formal metric review catches degradation.
- **Complaints, adverse events, and use errors** tied to the AI function, feeding the standard postmarket channels.

HOW: define the monitoring plan before launch, with metrics, cadence, thresholds, and, critically, the defined response when a threshold trips, who is notified, whether the model is paused or escalated to fuller human review, and how the event is investigated. A monitoring plan with no defined response is decoration. Where the device has a PCCP, monitoring and the change plan work together: monitoring detects the degradation, and the PCCP provides the pre-authorized, controlled path to correct it.

ACCEPTANCE CRITERIA: monitoring is live from day one, not retrofitted; it covers performance, input drift, and the human-AI interaction; thresholds and responses are pre-defined; and the monitoring evidence is a controlled record, retained and reviewable.

WORKED EXAMPLE: the pneumothorax triage SaMD is deployed across twelve hospitals. Three months in, the input-distribution monitor flags that one site's images skew toward a scanner model underrepresented in training. Before any complaint arrives, the team pulls a labeled sample from that site, confirms a sensitivity drop for that scanner, and uses the PCCP's M3 pathway (controlled extension to an additional scanner) to retrain and revalidate within the pre-authorized acceptance criteria, deploying the update with version stamping and updated transparency information. The monitor caught it, the PCCP fixed it, and no patient harm or new submission was needed. That is the framework working as intended.

COMMON MISTAKES: deploy-and-forget, with no monitoring, so the validated state is asserted rather than demonstrated; aggregate-only monitoring that masks a single failing site or subgroup; thresholds defined but no response defined; and treating a clear performance signal as a reason to quietly patch the model outside the PCCP, which converts a controlled update into an ungoverned change.

---

## Roles and Responsibilities

AI product work fails at the seams between functions, because no one role owns the whole lifecycle. Name owners explicitly. Adapt the titles to your organization.

| Activity | Accountable | Contributes |
|---|---|---|
| Intended use and clinical claim | Product / Clinical lead | Regulatory, Data Science, QA |
| Data curation, representativeness, labeling | Data Steward / Clinical SMEs | Data Science, QA |
| Model development and training | Data Science / ML Engineering | Software, Clinical |
| Clinical and standalone performance evaluation | Clinical / Biostatistics | Data Science, Regulatory |
| Human factors and human-AI interaction | Human Factors Engineering | Clinical, Software |
| Risk management file (ISO 14971 / ICH Q9) | Risk owner / QA | Clinical, Data Science |
| PCCP authorship | Regulatory + System Owner | Data Science, QA, Clinical |
| Marketing submission | Regulatory Affairs | All |
| Transparency and labeling | Regulatory + Product | Clinical, Human Factors |
| Real-world performance monitoring | Post-market / Quality | Data Science, Clinical |
| Change implementation under PCCP | System Owner + QA | Data Science, Regulatory |

The recurring failure is treating the model as a pure data-science deliverable that regulatory and quality see only at submission time. The data representativeness decisions, the held-out test discipline, the PCCP scope, and the monitoring design all need quality and regulatory involvement while the model is being built. The risk file is the spine that ties it together; see [quality risk management](/articles/quality-risk-management) and [user requirements and traceability](/articles/user-requirements-and-traceability) for the surrounding quality-system machinery.

---

## How This Plays Out in an Inspection or Review

A reviewer or inspector approaching an AI-enabled product asks a predictable set of questions, and the technical file should answer them before they are asked: What is the intended use and what clinical decision does the model support? Who was in the training and test data, and does it represent the indicated population across subgroups? Were training and test data independent, and was performance reported on data the model never saw? How does the clinician actually use the output, and was the human-AI team studied? If you intend to update the model, what is in the PCCP, what is in scope, and what falls outside it? How do you monitor real-world performance, and what do you do when it degrades? How do you tell users what the product does, how well, and which version they are running?

The pattern that reads as a system under control: a coherent file that states the intended use, shows representative data and honest subgroup performance, presents a bounded PCCP with pre-stated acceptance criteria, and describes live monitoring with a defined response. The pattern that invites deeper scrutiny: a single aggregate metric, a vague open-ended change plan, and no post-market evidence. The general inspection dynamics in [FDA inspection readiness](/articles/fda-inspection-readiness) apply here too; the AI-specific twist is that the questions center on data representativeness, change control, and post-market performance rather than on a fixed configuration.

---

## Common Mistakes and Finding Patterns

Pulling the recurring failures into one list:

- **Unrepresentative or single-site training data**, with a general-use claim the data does not support.
- **No subgroup analysis**, so a performance gap for an underrepresented group stays hidden until the field exposes it.
- **Test-set leakage**, inflating the reported performance above what the device achieves in use.
- **Standalone metrics passed off as clinical performance**, with no human-AI interaction study.
- **An open-ended PCCP** that reads as a blanket right to change the model, with no bounded modifications or pre-stated acceptance criteria.
- **Implementing changes outside the PCCP scope** without a new submission, when the change actually alters the intended use.
- **Deploy-and-forget**, with no real-world performance monitoring, so the post-market half of the lifecycle is empty.
- **Thin transparency**, an aggregate accuracy number with no uncertainty, no subgroup data, no version information.
- **Confusing the guidance status**, treating the draft lifecycle guidance as binding, or missing that the PCCP marketing-submission guidance is final.
- **Ignoring the EU stack**, building only to MDR or IVDR and missing the additional AI Act obligations on a high-risk AI device sold in the EU.

---

## Interview Questions and How to Answer Them

If you are interviewing for a regulatory, quality, or digital quality role and AI-enabled products come up, these questions separate a practitioner from someone reciting buzzwords. Short, concrete answers win.

**"What is a PCCP and why does it exist?"** A predetermined change control plan is a plan, submitted and authorized as part of the original marketing submission, that describes the modifications a manufacturer intends to make to an AI-enabled product after authorization, the methodology to develop and validate them, and an impact assessment. It exists so that controlled, planned improvements can be implemented without a new submission each time, while changes outside the plan still require one. It is the mechanism that reconciles a learning model with point-in-time premarket review.

**"What are the three parts of a PCCP?"** Description of Modifications (the specific, bounded changes), the Modification Protocol (how each change is developed, validated, and implemented, with pre-stated acceptance criteria), and the Impact Assessment (the benefit-risk analysis tying each change to the protocol step that controls its risks).

**"What is the status of the PCCP guidance, and is it final?"** The FDA marketing-submission guidance for a PCCP for AI-enabled device software functions was finalized in December 2024, so that one is final. The broader lifecycle-management and marketing-submission guidance issued in January 2025 is still draft and should be treated as evolving. Underneath both sit the international guiding principles on PCCPs jointly published by FDA, Health Canada, and the MHRA in October 2023, which are principles, not binding guidance.

**"What is GMLP?"** Good Machine Learning Practice, ten guiding principles jointly published by FDA, Health Canada, and the MHRA in October 2021. The themes I keep front of mind: multidisciplinary teams across the lifecycle, representative data, independence of training and test sets, focusing on human-AI team performance rather than the algorithm alone, clear information to users, and monitoring deployed models for performance.

**"How do you know an AI product still performs after a year in the field?"** Because real-world performance monitoring shows it. I check clinical performance against the authorized baseline on representative samples by site and subgroup, watch input drift as an early warning, and track the clinician override rate as a continuous leading indicator. Without that evidence, the validated state is just an assertion from authorization day. If degradation appears and the fix is in scope, I correct it through the PCCP; if not, I file a new submission.

**"What does transparency require for an AI device?"** That the user can tell what the device does and does not do, how well it performs with uncertainty and by subgroup, the population it was validated on, its known limitations, and which version is active, all delivered in a form that fits the user and the context of use. It is what makes human oversight meaningful rather than a rubber stamp, and for a high-risk device in the EU it is a legal obligation under the AI Act, not just good practice.

**"How does the EU AI Act interact with the device rules?"** An AI system that is a medical device, or a safety component of one, subject to third-party conformity assessment under MDR or IVDR is high-risk under the EU AI Act, Regulation (EU) 2024/1689. So such a device answers to both regimes at once, with the AI Act adding obligations on data governance, human oversight, transparency, and risk management on top of MDR or IVDR. The application dates are phased and have been moving, a proposed amendment in 2026 would push the high-risk deadline for these products out to 2028, so I verify the current deadline for the device class rather than quoting one from memory.

---

## The Honest Assessment

The AI software framework is further along than the manufacturing-and-quality framework discussed in the companion article, because the device-side regulators started earlier and have published binding guidance that the broader product world now borrows from. The PCCP guidance is final, the GMLP and transparency principles are settled and harmonized across three regulators, and the lifecycle approach is coherent. That is real progress, and it gives an AI software program a defensible structure to build to.

The unsettled parts are honest to name. The lifecycle-management guidance is still draft and will change. Continuously learning, adaptive models in the field remain largely theoretical in practice, because almost everything authorized is a locked model updated in controlled steps. The EU AI Act adds a second, overlapping regime whose phased dates are still settling and worth verifying rather than assuming. And the hardest engineering problems, demonstrating that a model still performs across shifting real-world populations, and keeping human oversight genuinely meaningful rather than a rubber stamp, are operational challenges no guidance fully solves for you.

The path that holds up: state the intended use and clinical claim precisely, build on representative data with honest subgroup performance, study the human-AI team and not just the algorithm, write a bounded PCCP with pre-stated acceptance criteria if you intend to improve the model, deliver transparency that fits the user, and monitor real-world performance from day one with a defined response when it degrades. Describe the guidance status accurately, final where it is final and draft where it is draft, and a reviewer reads a program that knows exactly what framework it is operating in. That is more defensible than a confident claim built on guidance that has not yet settled.
