---
title: "EU MDR and IVDR: Classification, Notified Bodies, Technical Documentation, and CE Marking"
description: "How medical devices and IVDs get to the EU market under Regulation (EU) 2017/745 and 2017/746: classification rules, conformity assessment routes, Annex II and III technical documentation, post-market surveillance, and the Notified Body relationship."
pubDate: 2026-06-20
tags: ["medical-devices", "mdr", "ivdr", "ce-marking", "notified-body", "technical-documentation", "post-market-surveillance", "regulatory"]
pillar: "medical-devices"
tier: "Advanced"
---

If you have worked in pharma quality and moved into devices, the first thing that hits you is that there is no single market authorization. There is no MDR equivalent of a marketing authorization granted by one agency. Instead you build a conformity case, a third party called a Notified Body audits it, and you self-declare conformity by affixing the CE mark. The manufacturer carries the legal responsibility, not the regulator. Get the logic of that shift and most of the regulation makes sense.

This page covers the two core regulations: Regulation (EU) 2017/745 on medical devices (MDR) and Regulation (EU) 2017/746 on in vitro diagnostic medical devices (IVDR). Both are directly applicable regulations, not directives, which means they apply in every Member State without national transposition. MDR became applicable on 26 May 2021. IVDR became applicable on 26 May 2022, with a phased transition for legacy devices running into the late 2020s. They replaced the old Directives (93/42/EEC, 90/385/EEC for active implantables, and 98/79/EC for IVDs).

---

## Why MDR and IVDR exist, and what changed

The directives were criticized for being light-touch and inconsistently applied across Member States. High-profile device failures, the breast implant scandal being the most cited, exposed weak clinical evidence requirements and weak oversight of Notified Bodies. The regulations tightened the whole system.

The headline changes you should be able to name in an interview:

- **Up-classification.** Many products moved to higher risk classes. Under IVDR especially, the change is dramatic. Under the old IVD Directive, roughly 80 percent of IVDs were self-certified by the manufacturer with no Notified Body. Under IVDR, the majority now require Notified Body involvement because of the new risk-based classification (Rules in Annex VIII).
- **Stronger clinical and performance evidence.** MDR demands a clinical evaluation backed by clinical data; IVDR introduces the concept of performance evaluation built on scientific validity, analytical performance, and clinical performance.
- **Lifecycle post-market surveillance.** PMS is no longer an afterthought. There are defined documents (PMS plan, PMS report, PSUR) with defined update frequencies tied to device class.
- **EUDAMED and UDI.** A European database (EUDAMED) and Unique Device Identification system create traceability from manufacturer to patient.
- **Economic operators.** The regulations define obligations not just for manufacturers but for authorized representatives, importers, and distributors. The whole supply chain has duties.
- **Person Responsible for Regulatory Compliance (PRRC).** Article 15 requires a named, qualified individual inside the manufacturer (and the authorized representative) responsible for compliance.

> "This Regulation establishes rules concerning the placing on the market, making available on the market or putting into service of medical devices for human use and accessories for such devices in the Union." (MDR Article 1(1))

Keep the language precise. *Placing on the market* means the first making available of a device in the EU. *Putting into service* means the device is made available to the end user as ready to use for the first time. These phrases trigger obligations, so they matter.

---

## The actors: who does what

Devices reach patients through a chain of economic operators, each with defined legal duties. Knowing the roles is interview gold because people confuse them.

| Role | Who they are | Core duties |
|------|--------------|-------------|
| Manufacturer | The legal entity that develops, manufactures, or has a device made and markets it under its name | Owns the QMS, the technical documentation, the conformity declaration, PMS, vigilance. Ultimate responsibility. |
| Authorized Representative (EC REP) | An EU-established entity appointed by a non-EU manufacturer | Verifies the conformity declaration and technical documentation exist, holds a mandate, cooperates with authorities, shares liability for defective devices. |
| Importer | EU entity that places a device from a non-EU manufacturer on the EU market | Verifies CE marking, declaration, UDI, labeling, registration before placing on market. Keeps records, cooperates on corrective actions. |
| Distributor | Any entity in the supply chain, other than manufacturer or importer, that makes a device available | Verifies CE mark, declaration, labeling, and that the importer is identified. Storage and transport per manufacturer conditions. |
| Notified Body | An independent conformity assessment body designated by a Member State authority | Audits the QMS and technical documentation, issues certificates, conducts surveillance audits, unannounced audits. |
| Competent Authority | The national regulator in each Member State | Market surveillance, vigilance oversight, designating and monitoring Notified Bodies. |
| PRRC (Article 15) | A qualified person inside the manufacturer | Ensures conformity is checked before release, technical documentation and declaration are up to date, PMS and vigilance obligations are met. |

Note one trap: a distributor or importer who relabels, repackages, or significantly modifies a device can become a manufacturer under Article 16 and inherit the full obligations. People miss this.

---

## Classification: the heart of the system

Everything downstream, conformity route, Notified Body involvement, evidence burden, depends on the class. Classify wrong and the whole compliance plan is wrong.

### MDR classification (Annex VIII)

MDR uses 22 classification rules in Annex VIII. The classes are I, IIa, IIb, and III, in ascending risk. Risk is driven by:

- **Duration of contact.** Transient (less than 60 minutes), short term (60 minutes to 30 days), long term (over 30 days).
- **Invasiveness.** Non-invasive, invasive through a body orifice, surgically invasive, implantable.
- **Active vs non-active.** Active devices depend on a source of energy.
- **Part of the body.** Devices in contact with the central circulatory system or central nervous system carry the highest risk.

The class is decided by applying all relevant rules and taking the highest class that results. The rules group roughly as follows:

| Rules | Cover |
|-------|-------|
| Rules 1-4 | Non-invasive devices |
| Rules 5-8 | Invasive devices |
| Rules 9-13 | Active devices (including Rule 11, software) |
| Rules 14-22 | Special rules (substances, nanomaterials, blood bags, devices using animal tissue, etc.) |

Class I has three notable subcategories that change whether a Notified Body is needed:

- **Class I** (standard) is self-certified, no Notified Body for the device itself.
- **Class Is** is Class I supplied sterile. The Notified Body audits the aspects related to sterility only.
- **Class Im** is Class I with a measuring function. The Notified Body audits the metrological aspects only.
- **Class Ir** is Class I reusable surgical instruments. The Notified Body audits the reprocessing aspects only.

Rule 11, the software rule, deserves its own mention because it caught a lot of products. Software intended to provide information used to make diagnostic or therapeutic decisions is at least Class IIa, and rises to IIb or III depending on whether the decisions could cause serious deterioration of health, surgical intervention, or death. The practical effect is that most clinical decision support and Software as a Medical Device (SaMD) jumped from the unregulated or Class I tier under the old directive into IIa or higher. See [device-software-cybersecurity-samd](/articles/device-software-cybersecurity-samd) and [iec-62304-samd-software-lifecycle](/articles/iec-62304-samd-software-lifecycle).

### IVDR classification (Annex VIII)

IVDR is completely different in structure. It uses a single set of 7 classification rules and four classes labeled A, B, C, D, in ascending risk. Risk here is about the consequence of a wrong result, both to the individual and to public health.

| Class | Risk profile | Examples (generic) |
|-------|--------------|--------------------|
| A | Low individual risk, low public health risk | Instruments, specimen receptacles, general reagents, buffers, wash solutions |
| B | Moderate individual risk and/or low public health risk | Pregnancy self-tests, cholesterol self-tests, many tests not otherwise classified (Rule 6 default) |
| C | High individual risk and/or moderate public health risk | Companion diagnostics, cancer markers, genetic testing, blood typing not in Class D |
| D | High individual risk and high public health risk | Tests for transmissible agents in blood/organ donation, life-threatening transmissible agents with high propagation risk (HIV, hepatitis) |

The critical IVDR rule is **Rule 6**: any device not covered by another rule defaults to Class B. That single sentence is why the IVDR self-certification share collapsed. Under the old directive, an unlisted IVD was self-certified. Under IVDR, an unlisted IVD is Class B and needs a Notified Body. Companion diagnostics are explicitly Class C under **Rule 3(k)** and additionally require consultation with a medicines authority (EMA or a national competent authority) on the suitability of the device in relation to the medicinal product.

### How to classify, step by step

1. Write a precise **intended purpose** statement. This is the legal anchor. Classification flows from intended purpose, not from what the device could technically do. Vague intended purpose is the number one cause of misclassification.
2. Identify every classification rule in Annex VIII that could apply. Do not stop at the first match.
3. Apply each rule and record the resulting class with a written rationale.
4. Take the **highest** class that results across all applicable rules.
5. For borderline or novel products, consult the European Commission borderline and classification guidance (the MDCG manual on borderline and classification) and document your reasoning.
6. Have the PRRC or regulatory lead review and sign the classification rationale. Keep it in the technical documentation.

**Acceptance criteria:** a one-page (or longer) classification rationale that names the device, states the intended purpose verbatim, lists every rule considered, gives the class and reasoning for each, and concludes with the final class. An auditor should be able to follow your logic without asking a single question.

---

## Conformity assessment routes

Once you know the class, you pick a conformity assessment route. The routes live in the Annexes and combine in defined ways. The general principle: the higher the class, the deeper the Notified Body involvement and the more the technical documentation is scrutinized per device rather than sampled.

### MDR routes

| Class | Typical route | Notified Body role |
|-------|---------------|--------------------|
| I (standard) | Self-declaration | None for the device |
| Is / Im / Ir | Self-declaration + NB audit of the specific aspect | Sterility, metrology, or reprocessing only |
| IIa | Annex IX (QMS + technical documentation assessment on a representative basis per category) or Annex XI | NB certifies QMS and samples technical documentation |
| IIb | Annex IX with technical documentation assessment per generic device group, or Annex X + XI | Deeper sampling; implantable IIb often assessed per device |
| III | Annex IX (full QMS) plus technical documentation assessment of each device, or Annex X (type examination) + Annex XI | Full review per device, plus scrutiny mechanisms |

For Class III and certain Class IIb implantables, there is an additional **clinical evaluation consultation procedure (CECP)**, also called the scrutiny procedure, where an expert panel can review the clinical evaluation. Manufacturers also need a **Summary of Safety and Clinical Performance (SSCP)** for implantables and Class III, published in EUDAMED.

### IVDR routes

| Class | Notified Body involvement | Notable extras |
|-------|---------------------------|----------------|
| A | Self-declaration | A (sterile): NB audits sterility aspects only |
| B | NB: QMS + technical documentation sampled per category | |
| C | NB: QMS + technical documentation reviewed; companion diagnostics need medicines authority consultation | |
| D | NB + EU reference laboratory batch verification and performance verification; expert panel may review performance evaluation | Highest scrutiny tier |

The IVDR Class D layer is worth remembering: an **EU reference laboratory** verifies performance and, for many Class D devices, tests batches. That is a genuinely new control with no real directive predecessor.

---

## The Quality Management System

Both regulations require a QMS. MDR Article 10(9) and IVDR Article 10(8) list what the QMS must address. In practice the harmonized standard everyone uses is **EN ISO 13485:2016** (Medical devices, Quality management systems, Requirements for regulatory purposes). Conformity to ISO 13485 gives a presumption of conformity for the QMS-related requirements, though it does not cover every regulatory obligation (PMS, vigilance, and clinical/performance evaluation go beyond ISO 13485).

Elements the QMS must cover, straight from Article 10:

- Regulatory compliance strategy, including classification and conformity assessment.
- Identification of applicable general safety and performance requirements (GSPRs) and methods to address them.
- Responsibilities of management.
- Resource management, including selection and control of suppliers and subcontractors.
- Risk management (ISO 14971).
- Clinical evaluation (MDR) or performance evaluation (IVDR), including PMCF/PMPF.
- Product realization, including planning, design, and manufacturing.
- Verification of UDI assignments.
- Setting up, implementing, and maintaining PMS.
- Vigilance and reporting of serious incidents and field safety corrective actions.
- Management of corrective and preventive actions and verification of their effectiveness.
- Processes for monitoring and measurement of output, data analysis, and product improvement.

If you come from pharma, map this against [medical-device-quality-system-qmsr](/articles/medical-device-quality-system-qmsr) and [pharmaceutical-quality-system](/articles/pharmaceutical-quality-system). The grammar is similar to ICH Q10, but the device QMS leans harder on design controls and risk management.

---

## General Safety and Performance Requirements (GSPRs)

The GSPRs are the essential requirements every device must meet. MDR Annex I and IVDR Annex I list them. You demonstrate conformity to each applicable GSPR, usually by applying a harmonized standard or a common specification.

The mechanism you build is the **GSPR checklist** (sometimes called the essential requirements checklist). It is a controlled document, normally a table, and Notified Bodies read it carefully.

Worked example, an excerpt of an MDR Annex I GSPR checklist for a Class IIb infusion-related device:

| GSPR | Requirement (paraphrased) | Applicable? | Method of conformity | Evidence (document ref) |
|------|---------------------------|-------------|----------------------|--------------------------|
| 1 | Devices shall achieve intended performance and be safe; risks acceptable vs benefit | Yes | Risk management per ISO 14971 | RMF-014, Clinical Eval CER-009 |
| 4 | Risk control measures reduce risks as far as possible | Yes | Inherent safe design, protective measures, info for safety | Design FMEA DFMEA-022 |
| 10.1 | Chemical, physical, biological properties; biocompatibility | Yes | ISO 10993 series | Biocomp report BIO-031 |
| 14.2 | Software lifecycle, repeatability, reliability | Yes | IEC 62304, IEC 82304 | SW lifecycle file SWF-007 |
| 17 | Electronic programmable systems and software | Yes | IEC 62304, IEC 60601-1 | Verification report VER-018 |
| 23 | Information supplied with the device (labeling, IFU) | Yes | EN ISO 15223-1, IFU per Annex I 23 | Labeling spec LBL-005 |

**Acceptance criteria:** every GSPR is addressed with an explicit applicable/not applicable decision, a stated method, and a traceable evidence reference. "Not applicable" must carry a justification. Blank cells or unjustified N/A entries are a classic finding.

---

## Technical documentation: Annex II and Annex III

This is the core deliverable, the dossier that proves the device is safe and performs. Under both MDR and IVDR, technical documentation is split into two annexes:

- **Annex II:** the technical documentation itself.
- **Annex III:** the technical documentation on post-market surveillance.

They are kept up to date for the life of the device and made available to the Notified Body and competent authorities on request.

### Annex II contents (MDR and IVDR are closely parallel)

1. **Device description and specification, including variants and accessories.**
   - Intended purpose and intended users, indications, contraindications.
   - The device class and the classification rule applied, with rationale.
   - A general description, including how it works, its novelty, accessories, configurations.
   - Basic UDI-DI assignment.
   - Reference to previous and similar generations of the device.

2. **Information to be supplied by the manufacturer (labeling and IFU).**
   - Labels on the device and packaging.
   - Instructions for use, in the languages accepted by the target Member States.

3. **Design and manufacturing information.**
   - Design stages, manufacturing processes, sites, and key suppliers/subcontractors.

4. **GSPR checklist** (the table described above).

5. **Benefit-risk analysis and risk management.**
   - The complete risk management file per ISO 14971, including the risk management plan, hazard analysis, risk control measures, and the overall residual risk evaluation.

6. **Product verification and validation.**
   - Pre-clinical and clinical data: biocompatibility, electrical safety and EMC, software verification and validation, stability and shelf life, sterilization validation if applicable, performance bench testing.
   - For MDR: the **Clinical Evaluation Report (CER)** and the clinical development / Post-Market Clinical Follow-up (PMCF) plan.
   - For IVDR: the **Performance Evaluation Report (PER)** covering scientific validity, analytical performance, and clinical performance, plus the Post-Market Performance Follow-up (PMPF) plan.

### Annex III contents (PMS documentation)

- The **PMS plan** (drawn up per Article 84 MDR / Article 79 IVDR).
- The **PSUR** for Class IIa, IIb, III (MDR) and Class C, D (IVDR), or the **PMS report** for Class I (MDR) and Class A, B (IVDR).
- PMCF/PMPF evaluation reports.

### How to build technical documentation, in sequence

1. Lock the intended purpose and classification first. Everything references it.
2. Build the design and risk management files in parallel; risk management feeds the GSPR checklist.
3. Run verification and validation testing against the design inputs (this is where [design-controls-medical-devices](/articles/design-controls-medical-devices) and the user requirements traceability matrix matter, see [user-requirements-and-traceability](/articles/user-requirements-and-traceability)).
4. Compile the clinical or performance evaluation. For MDR, that is the CER built on a clinical evaluation plan, literature, and any clinical investigation data. For IVDR, the PER assembling the three pillars.
5. Complete the GSPR checklist with live document references, not placeholders.
6. Assemble the PMS plan and the PMS/PSUR templates so they are ready to generate post-launch.
7. PRRC review, then submit to the Notified Body (for IIa and above / B and above).

**Acceptance criteria:** the documentation is internally consistent (the intended purpose in the IFU matches the CER matches the classification rationale), every GSPR traces to evidence, the benefit-risk conclusion is explicit, and a reviewer can navigate from a claim in the IFU to the test report that supports it. Notified Bodies frequently reject dossiers for traceability gaps, not for missing science.

---

## Clinical evaluation (MDR) and performance evaluation (IVDR)

These are the evidence engines, and they are where the regulations bit hardest.

### MDR clinical evaluation (Article 61, Annex XIV)

A clinical evaluation is a continuous process: plan, gather and appraise clinical data, analyze, conclude, and update. The output is the **Clinical Evaluation Report (CER)**. Clinical data come from clinical investigations of the device, from equivalent devices, or from published literature. The bar for claiming equivalence is high (technical, biological, and clinical characteristics must be sufficiently similar, and you must have sufficient access to the comparator's data). For implantable and Class III devices, clinical investigations are generally required unless a narrow set of conditions is met.

Practical structure of a CER following the MDCG 2020-13 review approach:

1. Clinical evaluation plan (scope, claims, state of the art, acceptance criteria).
2. Identification of clinical data (own investigations, literature search protocol, PMS/PMCF data).
3. Appraisal of each dataset for relevance and quality.
4. Analysis against the benefit-risk profile and the state of the art.
5. Conclusions and gaps feeding the PMCF plan.

### IVDR performance evaluation (Article 56, Annex XIII)

For IVDs the equivalent is the **Performance Evaluation Report (PER)**, built on three pillars:

- **Scientific validity:** the association between the analyte and the clinical condition or physiological state.
- **Analytical performance:** the ability to correctly detect or measure the analyte (sensitivity, specificity, accuracy, precision, limits of detection, measuring range, interference).
- **Clinical performance:** the ability to yield results correlated with a clinical condition or physiological state in the target population (diagnostic sensitivity/specificity, predictive values, likelihood ratios).

The mistake to avoid: treating IVDR performance evaluation as if it were the same as MDR clinical evaluation. The three-pillar structure is specific and Notified Bodies expect to see all three explicitly addressed.

---

## Post-market surveillance, vigilance, and PSUR

PMS is the part pharma people underestimate, and the regulations elevated it to a defined, documented, lifecycle obligation.

### PMS plan (Article 84 MDR / Article 79 IVDR, content in Annex III)

A proactive, systematic process to collect and review experience from devices on the market. The plan specifies the data sources (complaints, returns, field data, literature, registries, similar device data), the indicators and thresholds that trigger action, and the methods for analysis.

### PSUR vs PMS report

| Document | Applies to | Update frequency |
|----------|-----------|------------------|
| PMS report | MDR Class I; IVDR Class A and B | Update when necessary, available on request |
| PSUR | MDR Class IIa | At least every 2 years |
| PSUR | MDR Class IIb and III | At least annually |
| PSUR | IVDR Class C and D | At least annually |

For Class III and implantable devices the PSUR is submitted through EUDAMED to the Notified Body, which adds its evaluation. The PSUR summarizes the results of PMS data analysis, the benefit-risk conclusion, the main findings of PMCF/PMPF, and the sales volume with an estimate of the population using the device.

### Vigilance (Articles 87-92 MDR / 82-87 IVDR)

Serious incidents and field safety corrective actions (FSCAs) must be reported to the competent authorities. The reporting clocks you should memorize:

- **Serious incidents:** report without delay, and no later than **15 days** after awareness.
- **Serious public health threat:** no later than **2 days**.
- **Death or unanticipated serious deterioration in health:** no later than **10 days**.
- **FSCA:** report when the manufacturer takes the action, generally in advance of the action where feasible.

A **trend report** is required where a statistically significant increase in non-serious incidents or expected side effects could affect the benefit-risk analysis (Article 88 MDR). Tie this to your complaint handling process, see [product-complaint-handling](/articles/product-complaint-handling) and the device-specific [device-postmarket-surveillance-mdr](/articles/device-postmarket-surveillance-mdr).

---

## UDI and EUDAMED

The **Unique Device Identification** system gives every device a machine-readable identity. The UDI has two parts: the **UDI-DI** (device identifier, identifies the model/version) and the **UDI-PI** (production identifier, the lot/serial/expiry that identifies the specific unit). A higher-level **Basic UDI-DI** is the access key that links the device to its certificates, declarations, and documentation in EUDAMED. UDI is placed on labels and, for reusables and implantables, directly marked on the device. See [unique-device-identification-udi](/articles/unique-device-identification-udi).

**EUDAMED** is the European database with modules for actor registration, UDI/device registration, certificates, clinical investigations/performance studies, vigilance, and market surveillance. The rollout has been phased. The Commission confirmed the first modules functional in late 2025, which started a six-month transition, and use of those modules (actor registration, UDI/device registration, notified bodies and certificates, and clinical investigations/performance studies) became mandatory in late May 2026. The vigilance and market surveillance modules follow later, so always check the current status of each module rather than assuming the whole database is mandatory yet.

---

## The Notified Body relationship

For Class IIa and above (MDR) or Class B and above (IVDR), you cannot CE mark without a Notified Body. The relationship runs for years and shapes your timeline.

### How it works

1. **Application and contract.** You apply to a designated Notified Body (designated for your device codes / scope). Capacity is a real constraint; lead times have run long, so apply early.
2. **Stage 1 / readiness review.** The NB checks the QMS scope and documentation completeness.
3. **QMS audit (Stage 2).** On-site audit against ISO 13485 and the regulation's QMS requirements.
4. **Technical documentation assessment.** The NB reviews the technical documentation, sampled or full depending on class. Expect deficiency rounds; you respond, they re-review.
5. **Certificate issuance.** The NB issues the QMS certificate and, where applicable, the technical documentation / type examination certificate. Certificates are time-limited (commonly up to 5 years).
6. **Surveillance.** Annual surveillance audits, plus at least one **unannounced audit** per certificate cycle (a deliberate post-directive control). Recertification before expiry.

### Roles in the relationship

- **Regulatory affairs** owns the application, scope, and submission strategy.
- **Quality** owns the QMS and hosts the audits.
- **R&D / design** owns the technical content and answers technical deficiencies.
- **PRRC** signs off that conformity is met before declaration and release.
- **Notified Body** is independent. They are not your consultant. They cannot design your dossier for you, and they must avoid conflicts of interest. Treat them as an auditor, not an advisor.

**Common Notified Body finding patterns** (generic, no company names):

- Intended purpose inconsistent across IFU, CER/PER, and labeling.
- Clinical or performance evidence thin for the claims made; equivalence claimed without sufficient access to comparator data.
- GSPR checklist with unjustified N/A entries or stale document references.
- Risk management file not living: residual risks not reconciled with the benefit-risk conclusion, or post-market data not fed back into the file.
- PMS plan present but generic, with no device-specific indicators or thresholds.
- UDI assignment errors and EUDAMED registration gaps.
- Supplier controls weak for critical subcontractors, especially sterilization and software suppliers.

---

## Declaration of Conformity and CE marking

When the conformity case is complete and the NB certificate (if required) is in hand, the manufacturer draws up the **EU Declaration of Conformity** (MDR Annex IV / IVDR Annex IV). The DoC is a single document that states the device, the Basic UDI-DI, the manufacturer and authorized representative, the class and conformity route, the harmonized standards/common specifications applied, and the NB name and number where applicable. By signing it, the manufacturer takes full legal responsibility.

The **CE mark** is then affixed. Where a Notified Body was involved, the CE mark is accompanied by the NB's four-digit identification number. Class I (self-certified) carries the CE mark with no number. The CE mark must be visible, legible, and indelible on the device or packaging.

**Acceptance criteria for "ready to mark":** valid certificates (if applicable), a complete and consistent technical documentation set, a signed DoC, UDI assigned, EUDAMED registrations done, labeling and IFU finalized in required languages, PMS system operational, and the PRRC sign-off recorded.

---

## Worked end-to-end example

Take a reusable surgical instrument with an electronic measuring function and embedded software that displays a value the surgeon uses during a procedure.

1. **Intended purpose:** intraoperative measurement to inform a surgical decision; reusable; in contact with surgically invasive site, transient duration.
2. **Classification (MDR Annex VIII):** Rule 11 (software providing information for diagnostic/therapeutic decisions) pushes it to at least Class IIa, and because an incorrect output could lead to surgical intervention, it lands at **Class IIb**. The measuring function and reusability are noted but the software rule dominates. Final class: IIb.
3. **Conformity route:** Annex IX QMS plus technical documentation assessment for the generic device group.
4. **QMS:** ISO 13485 certified, with design controls and IEC 62304 software lifecycle.
5. **Technical documentation:** device description, GSPR checklist citing IEC 62304, IEC 60601-1, ISO 14971, ISO 10993 biocompatibility for the patient-contacting parts, sterilization/reprocessing validation, software V&V, and a CER.
6. **Notified Body:** application, QMS audit, technical documentation review with two deficiency rounds (software risk traceability and clinical evidence for the measurement claim), certificate issued.
7. **PMS:** PMS plan with software-failure and measurement-error indicators; PSUR at least annually (Class IIb); PMCF plan to confirm real-world measurement accuracy.
8. **Market:** UDI assigned, EUDAMED registered, DoC signed by the PRRC-reviewed release, CE mark plus the NB four-digit number affixed.

That single example exercises classification, route selection, standards, the NB relationship, and PMS in one chain. It is a good interview answer.

---

## Common mistakes and inspection-finding patterns

- **Writing a vague intended purpose.** It cascades into wrong classification, wrong route, and a CER/PER that does not match the claims. Fix the intended purpose first and freeze it.
- **Stopping at the first classification rule.** You must apply all relevant rules and take the highest class. Auditors test this by asking why a higher rule was not applied.
- **Treating IVDR like MDR.** Different classes (A-D), different rules, the three-pillar performance evaluation, the Rule 6 default to Class B, and the EU reference laboratory layer for Class D.
- **A dead risk management file.** ISO 14971 is a lifecycle process. Post-market data must feed back; residual risk must reconcile with the benefit-risk conclusion. A file frozen at design transfer is a finding.
- **Generic PMS plans.** Boilerplate without device-specific indicators and thresholds gets cited.
- **Missing PSUR cadence.** Class IIb/III annually, Class IIa every two years; forgetting the clock is a documented gap.
- **Assuming the directive certificate still covers you.** Legacy devices ride transition provisions with strict conditions (no significant changes, PMS and vigilance under the new regulation). Misjudging the transition is a market-access risk.
- **Forgetting the PRRC.** Article 15 requires a named, qualified person. Small manufacturers sometimes have no compliant PRRC arrangement.
- **Weak supplier oversight** of sterilization and software subcontractors, which both carry outsized device risk.

---

## Interview-ready questions and how to answer

**"Walk me through how you would CE mark a Class IIb device."**
State the intended purpose, classify via Annex VIII taking the highest applicable rule, pick the Annex IX route, build the QMS to ISO 13485, assemble Annex II technical documentation including the GSPR checklist and CER, set up Annex III PMS, engage a Notified Body for QMS audit and technical documentation assessment, get the certificate, sign the DoC, register UDI and EUDAMED, and affix the CE mark with the NB number. Mention PRRC sign-off.

**"What is the difference between MDR and IVDR classification?"**
MDR has 22 rules and classes I, IIa, IIb, III driven by invasiveness, duration, and active status. IVDR has 7 rules and classes A, B, C, D driven by the risk to the individual and to public health from a wrong result. IVDR Rule 6 defaults unlisted devices to Class B, which is why most IVDs now need a Notified Body.

**"What is the role of a Notified Body, and is it the same as a competent authority?"**
No. A Notified Body is a private conformity assessment body designated by a Member State authority; it audits and certifies. A competent authority is the national regulator that designates and monitors Notified Bodies and runs market surveillance and vigilance. The Notified Body is your auditor, not your regulator and not your consultant.

**"What goes in the technical documentation?"**
Annex II (device description and classification, labeling/IFU, design and manufacturing, GSPR checklist, benefit-risk and risk management, verification and validation including the CER or PER) and Annex III (PMS plan, PSUR or PMS report, PMCF/PMPF reports).

**"What are the vigilance reporting timelines?"**
Serious incidents within 15 days; serious public health threat within 2 days; death or unanticipated serious deterioration within 10 days; FSCAs reported when taken. Trend reporting for significant increases in non-serious incidents.

**"What is the PRRC?"**
The Person Responsible for Regulatory Compliance under Article 15, a qualified individual inside the manufacturer who ensures conformity is checked before release and that documentation, PMS, and vigilance obligations are met.

**"How did MDR/IVDR change things versus the old directives?"**
Up-classification, stronger clinical/performance evidence, lifecycle PMS with defined documents, UDI and EUDAMED traceability, defined economic operator duties, the PRRC requirement, unannounced audits, and for IVDR the collapse of self-certification plus EU reference laboratories for Class D.

---

## Practical tips

- Build the **intended purpose, classification rationale, and GSPR checklist** as a connected set. If you change one, check the others.
- Keep a **standards-to-GSPR map** so when a harmonized standard updates, you know which GSPRs and which test reports are affected.
- Apply early for a **Notified Body**. Capacity, not science, is often the binding constraint on timeline.
- Treat the **CER/PER as living documents**. PMS and PMCF/PMPF feed them; an out-of-date evaluation undermines the whole dossier.
- For software and IVDs, expect the biggest jump in obligations versus the old directives. Plan for it.
- Watch the **transition provisions** for legacy directive-certified devices; the conditions are strict and the dates move, so verify the current state rather than relying on memory.

### Related reading

- [design-controls-medical-devices](/articles/design-controls-medical-devices)
- [iso-14971-risk-management-devices](/articles/iso-14971-risk-management-devices)
- [medical-device-quality-system-qmsr](/articles/medical-device-quality-system-qmsr)
- [device-submission-pathways-510k-pma](/articles/device-submission-pathways-510k-pma)
- [device-postmarket-surveillance-mdr](/articles/device-postmarket-surveillance-mdr)
- [device-software-cybersecurity-samd](/articles/device-software-cybersecurity-samd)
- [iec-62304-samd-software-lifecycle](/articles/iec-62304-samd-software-lifecycle)
- [unique-device-identification-udi](/articles/unique-device-identification-udi)
- [user-requirements-and-traceability](/articles/user-requirements-and-traceability)
- [product-complaint-handling](/articles/product-complaint-handling)
