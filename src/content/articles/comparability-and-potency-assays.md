---
title: "Comparability and Potency Assays for Biologics and Cell & Gene Therapies"
description: "How to plan and execute an ICH Q5E comparability exercise and build a potency assay strategy for biologics and cell and gene therapies, including the matrix approach, acceptance criteria, and the inspection findings that recur."
pubDate: 2026-06-20
tags: ["comparability", "potency-assay", "cell-gene-therapy", "biologics", "ich-q5e", "analytical-characterization", "cmc"]
pillar: "cell-gene-therapy"
tier: "Advanced"
---

Two of the hardest CMC problems for biologics and for cell and gene therapy (CGT) products live next to each other: proving that product made after a change is still the same product (comparability), and proving that a living or complex molecule actually does what it is supposed to do (potency). They are linked. A comparability exercise that lacks a meaningful potency assay is a comparability exercise that cannot conclude anything about the mechanism that matters to the patient. A potency assay that drifts or fails to discriminate makes every future change harder to justify. This article walks through both, with the regulatory basis, the procedure, the acceptance logic, worked examples, and the findings inspectors keep writing up.

The audience is CMC, analytical development, QA, and regulatory practitioners who own or review these packages. If you sit in any of those seats and you can explain the matrix approach, the difference between comparability and biosimilarity, and why a single potency number is rarely enough, you are ahead of most candidates in an interview and most reviewers in an inspection.

---

## Part 1: Comparability

### What comparability is and why it is required

Comparability is the structured demonstration that a biological product remains highly similar in quality after a manufacturing change, such that the change has no adverse impact on safety or efficacy. It is not a claim that pre-change and post-change material are identical. Biologics are heterogeneous by nature, so identity at the molecule level is the wrong bar. The bar is "highly similar, with no adverse impact on the quality attributes that drive safety and efficacy."

The governing guidance is **ICH Q5E, "Comparability of Biotechnological/Biological Products Subject to Changes in Their Manufacturing Process" (2004)**. ICH Q5E sets the framework: you assess the change, you characterize pre- and post-change product, and you decide whether quality data alone are sufficient or whether nonclinical or clinical bridging data are needed.

> "The demonstration of comparability does not necessarily mean that the quality attributes of the pre-change and post-change product are identical, but that they are highly similar and that the existing knowledge is sufficiently predictive to ensure that any differences in quality attributes have no adverse impact upon safety or efficacy of the drug product." (ICH Q5E, Section 1.3)

Comparability does not stand alone. It pulls in:

- **ICH Q5C** (stability of biotech products), because you usually compare stability profiles.
- **ICH Q6B** (specifications for biotech products), because the specification is one anchor of the comparison.
- **ICH Q8(R2), Q9(R1), Q10, Q11, Q12, Q14**, because change management, risk, lifecycle, and analytical procedure lifecycle all touch comparability.
- For post-approval changes in the US, **21 CFR 601.12** (changes to an approved BLA) defines which changes need prior approval (PAS), CBE-30, CBE-0, or annual report, and the comparability data drive that classification.
- In the EU, the variations framework (Regulation (EC) No 1234/2008 and Commission guidelines) plays the equivalent role.

The quality rationale: a process change can shift glycosylation, aggregation, charge variants, impurity profile, or, for CGT, vector identity, transduction efficiency, or cell phenotype. Some of those shifts are clinically silent. Some are not. Comparability forces you to find the shifts before the patient does.

### Comparability is not biosimilarity

This distinction comes up in every serious interview. Comparability (ICH Q5E) is a single manufacturer comparing its own product before and after its own change, with full access to the historical process, samples, and clinical data. Biosimilarity (a different regulatory pathway, ICH-aligned but governed by region-specific frameworks such as the US 351(k) pathway and EMA biosimilar guidelines) is a different sponsor trying to match an originator product they did not make, with no access to the originator process. The analytical toolbox overlaps heavily, but the evidentiary burden and the statistical approaches differ. If an interviewer asks "is this comparability or biosimilarity," the answer hinges on who owns the reference and the process history.

### When comparability is triggered

Any change to the manufacturing process of a licensed or clinical-stage biologic can trigger a comparability assessment. Common triggers:

- Cell bank change (new MCB or WCB, host cell line change).
- Scale change (for example 200 L to 2000 L bioreactor).
- Site change or addition of a second manufacturing site.
- Raw material or reagent change (media component, resin, filter, single-use assembly).
- Process parameter or sequence change (purification step added or removed, formulation change).
- Container closure change.
- For CGT: change in vector production, plasmid source, transfection method, cell selection, cryopreservation, or fill format.

The change itself does not tell you the size of the comparability exercise. The **risk of the change** does. A buffer supplier change with identical specification is low risk. A change in the affinity resin or in the viral vector packaging system is high risk. ICH Q5E expects a risk-based scope.

### What goes in a comparability package

A comparability protocol and report typically contain:

1. **Description of the change** and the rationale.
2. **Risk assessment** of the change against quality attributes, ideally tied to your Quality Target Product Profile (QTPP) and Critical Quality Attributes (CQAs). See [quality-by-design-and-doe](/articles/quality-by-design-and-doe) and [quality-risk-management](/articles/quality-risk-management).
3. **Comparability strategy**: which attributes, which methods, how many lots, what acceptance criteria, and whether the comparison is at drug substance, drug product, or both.
4. **Analytical methods list** with their validation or qualification status and discriminating power.
5. **Pre-change and post-change lot selection** and justification (representative, recent, relevant).
6. **Acceptance criteria** per attribute, set in advance.
7. **Stability comparison plan** (real-time and accelerated/forced degradation).
8. **Results, statistical analysis, and conclusion**, including any out-of-expectation differences and their assessment.
9. **Decision** on whether quality data are sufficient or whether nonclinical/clinical bridging is required, and the regulatory reporting category.

### The comparability attribute matrix

The core deliverable is an attribute-by-method matrix. Each row is a quality attribute, each column an analytical dimension. A worked example for a monoclonal antibody:

| Quality attribute | Method category | Example technique | Criticality | Acceptance approach |
|---|---|---|---|---|
| Primary structure / identity | Mass spec | Intact mass, peptide map LC-MS | High | Match within method capability |
| Charge variants | Charge-based separation | icIEF or CEX-HPLC | High | Pre/post ranges overlap; quantitative limits |
| Size variants / aggregates | Size-based separation | SEC-HPLC, CE-SDS (reduced/non-reduced) | High | %HMW within preset limit |
| Glycosylation | Released glycan / LC-MS | HILIC-FLR glycan map | High (effector function) | Key glycans within range |
| Potency | Bioassay | Cell-based or binding assay | High | Within preset % of reference |
| Process impurities | ELISA / orthogonal | HCP ELISA, residual DNA, residual Protein A | High (safety) | Below limit, no adverse trend |
| Higher-order structure | Spectroscopy | CD, DSC, HDX-MS, NMR fingerprint | Medium | Comparable profiles |
| Subvisible particles | Light obscuration / imaging | HIAC, MFI | Medium | USP <788> limits, comparable |
| Forced degradation | Stress + stability-indicating panel | Thermal, oxidative, pH, light | High | Comparable degradation pathways and rates |

For a CGT product (for example an AAV gene therapy), the matrix shifts:

| Quality attribute | Method category | Example technique | Criticality |
|---|---|---|---|
| Vector identity | Sequence / restriction | Sanger/NGS, restriction digest | High |
| Vector genome titer | qPCR / ddPCR | Digital PCR of transgene | High |
| Capsid content (full/empty/partial) | AUC / charge / cryo | Analytical ultracentrifugation, AEX, cryo-EM | High |
| Infectious titer / transduction | Cell-based | TCID50, infectious unit assay | High |
| Potency / transgene function | Cell-based functional | Expression + functional readout | High |
| Purity / impurities | SDS-PAGE, ELISA, PCR | Residual host DNA, HCP, plasmid, helper virus | High (safety) |
| Aggregation | DLS / SEC-MALS | Particle sizing | Medium-High |

The matrix is the heart of the package. Orthogonality matters: more than one independent method should support each high-criticality conclusion, because no single method sees everything.

### How to run a comparability exercise, step by step

1. **Define the change and its boundaries.** Exactly what is changing, and what is held constant.
2. **Run the risk assessment.** Map the change to each CQA. Rate impact and detectability. This tells you which attributes need the closest look and where extra orthogonal methods are warranted. Tie this to [change-control-validated-systems](/articles/change-control-validated-systems) and your formal change record.
3. **Write the comparability protocol BEFORE generating data.** Pre-specify attributes, methods, lot numbers, sample sizes, and acceptance criteria. Post hoc acceptance criteria are a classic finding.
4. **Confirm method suitability.** Each method used in the comparison should be validated or at least qualified and demonstrably stability-indicating and discriminating. A method that cannot detect a real difference will pass everything, which is worse than failing.
5. **Select lots.** Use representative pre-change lots (recent, in-control, ideally spanning the historical range) and the available post-change lots. CGT autologous products complicate this because each lot is one patient; you may have to compare process-representative or engineering runs.
6. **Execute side by side where possible.** Same analyst, same instrument, same reference standard reduces between-run noise. Head-to-head testing of retained pre-change samples against fresh post-change samples is the strongest design.
7. **Run forced degradation and stability comparison.** Comparable release data with divergent degradation pathways is a red flag. ICH Q5C and side-by-side accelerated/stress studies expose that.
8. **Analyze against pre-set criteria.** Where you used ranges, confirm overlap. Where you used statistical equivalence, apply the pre-specified test.
9. **Adjudicate differences.** Any observed difference is assessed for clinical relevance, not just statistical significance. Document the rationale.
10. **Conclude and classify.** State comparable / not comparable / comparable-with-conditions, decide if bridging data are needed, and assign the regulatory reporting category (PAS, CBE-30, CBE-0, annual report, or EU variation type).

### Setting acceptance criteria

This is where comparability lives or dies. Three common approaches:

- **Specification-based:** post-change results meet the registered specification. Necessary but weak on its own, because specifications are often wide.
- **Range-based / quality-range:** define an acceptable range from the historical pre-change dataset (for example mean ± 3 SD, or min-max of historical lots). Post-change lots must fall inside. Document how the range was derived.
- **Statistical equivalence:** for attributes with enough lots, pre-specify an equivalence margin and test (for example a two-one-sided-test approach). More rigorous, needs more lots, and the margin must be justified on clinical relevance, not convenience.

A worked example for the aggregate attribute (%HMW by SEC):

| Item | Value |
|---|---|
| Historical pre-change lots (n) | 12 |
| Historical mean %HMW | 1.2% |
| Historical SD | 0.15% |
| Pre-set quality range (mean ± 3 SD) | 0.75% to 1.65% |
| Registered specification | NMT 3.0% |
| Post-change lots (n) | 3 |
| Post-change results | 1.3%, 1.1%, 1.4% |
| Conclusion | All within quality range and far below spec: comparable for this attribute |

If a post-change lot had read 2.1%, it would still pass the specification (NMT 3.0%) but fail the quality range. That is exactly the situation comparability is meant to catch: in-spec but not comparable. You would then investigate, and you might need to characterize the new aggregate species and assess clinical relevance before concluding.

### Roles and responsibilities for comparability

| Role | Responsibility |
|---|---|
| Analytical Development / CMC | Designs the analytical strategy, confirms method discriminating power, executes characterization |
| Process Development / MSAT | Defines the change, provides process knowledge, runs representative lots |
| QA | Approves the protocol and report, owns the change control, ensures pre-set criteria and GMP compliance |
| Regulatory Affairs | Determines reporting category, files the variation/supplement, manages agency interaction |
| Statistics | Designs equivalence tests, justifies sample size and margins |
| Stability group | Executes side-by-side stability and forced degradation |
| QC | Performs release testing under GMP for the comparison lots |

QA owns the gate. Analytical and process SMEs own the science. Regulatory owns the filing consequence.

---

## Part 2: Potency assays

### What potency is and why it is required

Potency is the measure of the biological activity of the product using a relevant, quantitative biological assay, based on the attribute or attributes linked to the relevant biological properties. For US biologics, potency is a statutory requirement. **21 CFR 600.3(s)** defines potency as "the specific ability or capacity of the product, as indicated by appropriate laboratory tests or by adequately controlled clinical data obtained through the administration of the product in the manner intended, to effect a given result." **21 CFR 610.10** requires that tests for potency consist of either in vitro or in vivo tests, or both, specifically designed for each product to indicate its potency.

> "Tests for potency shall consist of either in vitro or in vivo tests, or both, which have been specifically designed for each product so as to indicate its potency in a manner adequate to satisfy the requirements for potency stated in the license application." (21 CFR 610.10)

The key FDA guidance for CGT is **"Potency Tests for Cellular and Gene Therapy Products" (FDA, January 2011)** and the more recent draft **"Potency Assurance for Cellular and Gene Therapy Products"** which moves toward a potency assurance strategy (a system of complementary measures) rather than reliance on a single assay. ICH ties in through **ICH Q6B**, which addresses biological activity in the specification, and the analytical procedure lifecycle now sits under **ICH Q2(R2) (2023)** for validation and **ICH Q14 (2023)** for development.

Why it is required, in quality terms: potency is the assay that links your product to its mechanism of action. Identity, purity, and quantity tell you what is in the vial. Potency tells you whether it works. For a "living drug" (a cell therapy, a gene therapy), the active ingredient is the biology, and a chemical quantity measurement (mg, vector genomes) does not, on its own, prove function.

### The potency problem for living drugs

Conventional small molecules have a defined structure and a content assay that essentially equals potency. Biologics are harder. CGT products are the hardest case:

- **Mechanism may be complex or partly unknown.** A cell therapy may act through several pathways (cytotoxicity, cytokine secretion, persistence, differentiation). Which one do you measure?
- **The product is heterogeneous and live.** Cell composition varies. Viability matters. The product changes over its short shelf life.
- **Short shelf life and small lot size.** An autologous product may need to be released and infused before a slow cell-based potency assay can read out. You cannot wait two weeks for a bioassay if the product expires in 48 hours.
- **No relevant animal model in some cases**, and reference standards are difficult to establish for a product that is unique per patient.
- **Assays are inherently variable.** Cell-based assays routinely carry high variability, so the assay must be designed and qualified to keep that variability controlled.

This is why FDA's current thinking favors a **potency assurance strategy**: a matrix of complementary measurements (for example a quantitative cell-based functional assay plus a marker-based assay plus identity and viability) where the whole set, together with process controls, assures potency, rather than betting everything on one slow, variable bioassay.

### Types of potency assay

| Assay type | What it measures | Strength | Weakness |
|---|---|---|---|
| In vivo bioassay | Effect in an animal model | Closest to clinical effect | Slow, variable, ethical and 3Rs pressure, hard to standardize |
| Cell-based functional assay | A functional response in cells (proliferation, killing, reporter signal) | Reflects mechanism of action | Variable, slow, needs cell bank control |
| Binding assay (for example ELISA, SPR) | Binding to target | Precise, fast | May not reflect downstream function |
| Reporter gene assay | Pathway activation via engineered readout | Fast, lower variability than primary cells | Surrogate, must be shown MOA-relevant |
| Enzymatic / biochemical | Catalytic activity | Fast, precise | Only valid if activity equals MOA |
| Marker-based / phenotypic (flow) | Surface markers, transduction, expression | Fast, quantitative | Quantity not function; needs functional anchor |

A binding assay alone is rarely accepted as the sole potency assay when the mechanism involves a downstream effect. The expectation is that the potency measure reflects the relevant biological activity, not just an upstream surrogate.

### The matrix approach to potency

For complex products, a single assay seldom captures the full mechanism. The matrix (or multi-assay) approach combines complementary assays so that together they cover identity, quantity, and the relevant function. A worked example for a gene-modified cell therapy:

| Measurement | Assay | Reads on | Release vs characterization |
|---|---|---|---|
| Cell viability | Flow / dye exclusion | Live active cells present | Release |
| Identity / phenotype | Flow cytometry | Correct cell population, transduction marker | Release |
| Transgene expression | Flow / qPCR | Construct is expressed | Release |
| Functional activity | Cell-based kill or cytokine assay | Cells perform intended function | Release (where feasible) or matrix anchor |
| Vector copy number | ddPCR | Integration / dose surrogate | Release / safety |

The functional assay is the anchor. Marker assays are fast and support release timing, but the strategy must show that the markers correlate with function. Over time you build the data that justify which assays release the product and which inform the broader potency assurance picture. FDA expects that at licensure you have a quantitative assay measuring a relevant biological activity, even if early clinical lots were released on a broader matrix.

### What goes in a potency assay (design elements)

A defensible potency method specifies:

- **The biological activity measured** and its link to MOA.
- **Reference standard** (and a documented qualification and bridging program, two-tier where appropriate: primary reference plus working standard).
- **Assay format**: relative potency against a reference standard, reported as a percentage of reference, using a parallel-line or 4-parameter logistic (4PL) dose-response model.
- **System suitability criteria**: curve fit quality (R squared), parallelism between sample and reference, slope, EC50 range, asymptote ranges, plate controls.
- **Replication strategy**: number of plates, wells, independent assays averaged to a reportable result.
- **Acceptance criteria for the reportable value** (the specification range, for example 50% to 150% relative potency).
- **Validation characteristics per ICH Q2(R2)**: specificity, accuracy, precision (repeatability and intermediate precision), linearity, range. For bioassays, relative accuracy and the dilutional linearity of relative potency are central.

See [bioassay-and-elisa-validation](/articles/bioassay-and-elisa-validation) and [method-validation-essentials](/articles/method-validation-essentials) for the validation mechanics.

### Relative potency and parallelism: a worked example

Bioassays almost always report **relative potency**: the activity of the sample as a ratio to a reference standard run on the same plate. The validity of the ratio depends on **parallelism**, meaning the sample and reference dose-response curves have the same shape. If they are not parallel, the ratio is not meaningful and the result is invalid.

A worked snippet using a 4PL fit:

| Parameter | Reference | Sample | System suitability |
|---|---|---|---|
| Upper asymptote | 2.10 | 2.08 | Within 0.20 of reference: pass |
| Lower asymptote | 0.05 | 0.06 | Within range: pass |
| Slope (Hill) | 1.05 | 1.02 | Equivalence test for parallelism: pass |
| EC50 | 12.4 ng/mL | 10.1 ng/mL | Reference within historical range: pass |
| Relative potency | 1.00 (defined) | 1.23 (123%) | Reportable; within 50-150% spec: pass |
| Curve fit R squared | 0.998 | 0.997 | NLT 0.98: pass |

Reading: the sample is 123% as potent as the reference. Because the curves are parallel and system suitability passes, the 123% is a valid reportable value, and it sits inside the 50% to 150% release specification. If the parallelism equivalence test had failed, the run is invalid and gets repeated or investigated; you do not report a potency number from non-parallel curves. Modern practice uses an **equivalence test for parallelism** (pre-set equivalence bounds on slope/asymptote ratios) rather than the older difference test, because a difference test perversely rewards an imprecise assay by failing to detect non-parallelism. Knowing that distinction is a strong interview signal.

### How to develop and qualify a potency assay, step by step

1. **Map the mechanism of action.** Identify the biological activity that matters clinically. This drives assay selection.
2. **Select assay format(s).** Choose the functional readout closest to MOA that is operationally feasible (timing, throughput, variability). Decide early if you need a matrix.
3. **Develop the assay** under ICH Q14 thinking: define the analytical target profile, the readout, the dose-response model, and the controls.
4. **Establish the reference standard** and a bridging plan. Without a stable reference, relative potency is impossible.
5. **Qualify, then validate per ICH Q2(R2):** accuracy, precision, specificity, linearity, range. For early clinical use, a qualified assay may suffice; a validated assay is expected by the BLA. See [bla-readiness-data-package](/articles/bla-readiness-data-package).
6. **Set system suitability and sample acceptance criteria** based on assay performance and historical data.
7. **Set the specification** for relative potency, justified by clinical and manufacturing experience, and tightened over the lifecycle.
8. **Establish a trending and assay monitoring program** so you detect reference standard drift and assay degradation early. Link to [continued-process-verification-cpv](/articles/continued-process-verification-cpv) and [out-of-trend-investigations](/articles/out-of-trend-investigations).
9. **Build the comparability hook:** the potency assay you validate is the one you will rely on for future process changes, so its discriminating power is a comparability asset.

### Acceptance criteria: what good looks like

- The assay reads on a **relevant biological activity**, not just binding or quantity, unless you can prove the surrogate equals function.
- **System suitability** (parallelism, curve fit, control wells) gates every run; failing runs are invalid, not just out of spec.
- **Validated per ICH Q2(R2)** for commercial; intermediate precision quantified and controlled.
- A **reference standard** exists with a qualification and replacement (bridging) protocol.
- The **specification** is set on clinical relevance and is defensible, typically a relative potency range.
- The assay is **stability-indicating**: it detects loss of activity on degraded or stressed material.
- For CGT: a **potency assurance strategy** is documented, showing how the matrix of measures plus process controls assures potency given assay and product constraints.

---

## Common mistakes and recurring inspection findings

These patterns appear in regulatory observations, deficiency letters, and complete response letters for biologics and CGT, described generically:

- **Potency assay not measuring a relevant biological activity.** Relying on a binding assay or a content/quantity measure as the sole potency test when the mechanism involves downstream function. For CGT this is the single most common potency deficiency at BLA stage.
- **No quantitative potency assay at licensure.** Carrying a qualitative or matrix-only approach too long without a validated quantitative functional assay measuring relative potency.
- **Reference standard problems.** No two-tier standard, no bridging protocol, reference standard drift uncontrolled, or a new reference qualified without demonstrating equivalence to the prior one. Reference standard mismanagement quietly corrupts every relative potency result.
- **Parallelism handled wrong.** Reporting potency from non-parallel curves, or using a difference test for parallelism that an imprecise assay passes by default.
- **Comparability acceptance criteria set after seeing the data.** Post hoc ranges, or "the result met specification" used to declare comparability when the specification is far wider than the historical experience.
- **Methods not discriminating.** Using assays in a comparability exercise that cannot detect a meaningful difference, so everything passes and the conclusion is hollow.
- **No forced degradation or side-by-side stability comparison**, so a difference in degradation pathway is missed even though release data look identical.
- **Statistical inadequacy.** Too few lots for the equivalence claim made, or an equivalence margin chosen for convenience rather than clinical relevance.
- **Change control disconnected from comparability.** A process change implemented without a comparability assessment, or the comparability conclusion not feeding the correct regulatory reporting category. See [change-control-validated-systems](/articles/change-control-validated-systems) and [deviation-management](/articles/deviation-management).
- **Data integrity gaps in the supporting data.** Missing audit trails, unjustified reintegration of chromatograms, or selective use of passing runs. See [chromatography-data-system-integrity](/articles/chromatography-data-system-integrity), [audit-trail-design-and-review](/articles/audit-trail-design-and-review), and [data-integrity-in-gene-therapy](/articles/data-integrity-in-gene-therapy).
- **Aggregate or impurity shifts in-spec but out of historical range** dismissed without characterization or clinical-relevance assessment.

---

## Interview-ready questions and strong answers

**Q: What is the difference between comparability and biosimilarity?**
A: Comparability (ICH Q5E) is one manufacturer comparing its own product before and after its own change, with full process history and clinical data access. Biosimilarity is a different sponsor matching an originator they did not make, with no access to the originator's process, under a separate regulatory pathway. The toolbox overlaps; the evidentiary burden differs.

**Q: A post-change lot meets specification but falls outside the historical range. Is the product comparable?**
A: Not automatically. Meeting specification is necessary but not sufficient. Comparability is assessed against the quality range derived from historical experience, not just the registered limit. An in-spec but out-of-range result triggers investigation, characterization of any new species, and a clinical-relevance assessment before you can conclude.

**Q: Why can't I use a binding assay as my potency assay?**
A: Potency must reflect the relevant biological activity tied to mechanism of action. A binding assay measures an upstream interaction and may not reflect downstream function. It is acceptable only if you demonstrate the binding equals the functional activity. Otherwise it is a characterization assay, not a potency assay.

**Q: What is relative potency and why does parallelism matter?**
A: Relative potency is the ratio of the sample's activity to a reference standard run on the same plate, usually from a 4PL or parallel-line fit. The ratio is only valid if the two dose-response curves have the same shape, which is parallelism. Non-parallel curves mean the ratio changes with dose, so the potency number is meaningless. Parallelism is tested by an equivalence approach, not a difference test.

**Q: How do you handle potency for an autologous cell therapy that expires before a cell-based assay can read out?**
A: You use a potency assurance strategy: release on fast, qualified measures (viability, identity, transgene expression, vector copy number) that correlate with function, while the slower functional assay runs in parallel as part of the matrix and characterization. Over development you build the correlation data and move toward a validated quantitative functional assay, supported by process controls. The current FDA draft guidance on potency assurance frames exactly this.

**Q: What triggers a comparability exercise, and what determines its size?**
A: Any manufacturing change to a licensed or clinical biologic. The size is risk-based: the impact and detectability of the change on CQAs drives how many attributes, methods, and lots you need, and whether quality data alone suffice or nonclinical/clinical bridging is required.

**Q: Which regulations and guidances govern this area?**
A: ICH Q5E for comparability; ICH Q6B for biotech specifications including biological activity; ICH Q5C for stability; ICH Q2(R2) and Q14 for analytical validation and development; 21 CFR 600.3(s) and 610.10 for the US potency requirement; FDA's 2011 potency guidance and the more recent potency assurance draft for CGT; 21 CFR 601.12 for post-approval change reporting categories.

**Q: How do comparability and potency relate?**
A: Comparability needs discriminating methods, and the potency assay is often the most clinically meaningful one. A weak potency assay makes every comparability conclusion weak, because you cannot show function was preserved across the change. Investing in a strong, validated potency assay pays off every time you change the process.

---

## Practical tips

- Write the comparability protocol and lock the acceptance criteria before you run a single comparison sample. Pre-specification is your strongest defense.
- Always test pre-change retains side by side with post-change material on the same plate, same analyst, same reference, where the samples allow it. It removes between-run noise that can mask or fake a difference.
- Treat the reference standard as a product. Two-tier it, qualify it, and bridge every replacement with documented equivalence. Reference drift is silent and corrosive.
- Use an equivalence test for parallelism and for comparability claims, with margins justified on clinical relevance, not on what the assay can pass.
- For CGT, start building the potency matrix early and collect the correlation data between fast markers and the functional readout from the first clinical lots, because you will need it at BLA.
- Keep your quality ranges separate from your specifications in the report. Reviewers want to see both, and the gap between them is where comparability findings live.
- Run forced degradation as part of comparability, not just release stability. Divergent degradation pathways are the differences release data miss.

### Related articles

- [process-validation-for-biologics](/articles/process-validation-for-biologics)
- [atmp-gmp-cell-gene-manufacturing](/articles/atmp-gmp-cell-gene-manufacturing)
- [bioassay-and-elisa-validation](/articles/bioassay-and-elisa-validation)
- [stability-programs-ich](/articles/stability-programs-ich)
- [ich-q14-q2r2-analytical-lifecycle](/articles/ich-q14-q2r2-analytical-lifecycle)
- [quality-in-technology-transfer](/articles/quality-in-technology-transfer)
- [data-integrity-in-gene-therapy](/articles/data-integrity-in-gene-therapy)
- [bla-readiness-data-package](/articles/bla-readiness-data-package)
- [analytical-method-transfer](/articles/analytical-method-transfer)
- [statistics-in-quality-cpk-control-charts](/articles/statistics-in-quality-cpk-control-charts)
