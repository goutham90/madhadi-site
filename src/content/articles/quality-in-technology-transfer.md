---
title: "Quality in Technology Transfer: Site-to-Site, R&D-to-GMP, and the Transfer Protocol"
description: "How quality teams run a controlled technology transfer: the transfer protocol, knowledge transfer, process and analytical method transfer, acceptance criteria, and the roles that keep it defensible."
pubDate: 2026-06-20
tags: ["technology transfer", "process validation", "analytical method transfer", "quality assurance", "gmp", "knowledge management", "ich q10"]
pillar: "quality-assurance"
tier: "Advanced"
---

Technology transfer is the moment a process leaves the hands of the people who invented it and lands in the hands of the people who have to run it every day, often in a different building, a different country, and a different quality system. It is where a lot of products quietly fail. The chemistry was fine, the clinical data was fine, and then the first three commercial batches at the receiving site did not meet specification because nobody wrote down that the addition rate had to stay below a certain value, or because the receiving lab ran the assay on a column with a different particle size.

Quality owns the controls that prevent that. Not the science itself, but the structure: the transfer protocol, the knowledge package, the acceptance criteria, the gating between stages, and the documented evidence that the receiving unit can do what the sending unit could do. This article walks through that structure end to end, the way a quality or validation professional actually has to execute it.

---

## What technology transfer is, and the regulatory basis

A technology transfer is the documented, controlled movement of product and process knowledge from one organization or location (the sending unit, sometimes called the transferring or originating site) to another (the receiving unit), so the receiving unit can manufacture, test, or both, to the same standard. The transfer can be:

- **R&D to GMP (scale-up):** development takes a process from lab or pilot scale into a validated commercial process. Often called the development-to-commercial transfer.
- **Site to site:** an established commercial process moves from one GMP plant to another, frequently to a contract manufacturer.
- **Analytical transfer:** a test method moves from one lab to another (a sub-type that almost always rides along with the process transfer, and is also done on its own).
- **Internal transfer between lines or equipment trains** within the same site, which is still a transfer even though the quality system is shared.

The reason quality cares is that a transfer changes the conditions under which a validated state was established. Anything that changes scale, equipment, facility, analyst, or material supply is a change that can affect the product. The whole discipline exists to make sure the receiving unit does not just copy the recipe but reproduces the **state of control**.

The regulatory anchors you should be able to cite:

> **ICH Q10, Pharmaceutical Quality System (2008), Section 3.2.3** names technology transfer (described under the broader heading of knowledge management and the product lifecycle). Q10 frames transfer as one of the lifecycle stages and ties it to knowledge management and quality risk management as the two enablers.

- **ICH Q8(R2), Pharmaceutical Development (2009)** establishes the quality-by-design concepts (critical quality attributes, critical process parameters, design space) that define what knowledge has to move in a transfer.
- **ICH Q9(R1), Quality Risk Management (2023 revision)** is the basis for the risk assessment that scopes every transfer.
- **ICH Q7, Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients (2000), Section 12.5** specifically covers process validation and revalidation triggered by transfers and changes for APIs.
- **WHO Technical Report Series, the WHO guidelines on technology transfer in pharmaceutical manufacturing (TRS 961, Annex 7, 2011, with a revised version issued in TRS in the early 2020s)** is the most detailed standalone public guidance on transfer and is the document most teams build their procedure around.
- **EU GMP** does not have a dedicated transfer annex, but Chapter 7 (Outsourced Activities) and the change-control expectations across Chapters 1 and 5 govern transfers to and from contract sites. For investigational product transfers, **Annex 13 / Annex 16** considerations apply.
- **21 CFR 211** in the US does not use the words "technology transfer," but 211.100 (written procedures, deviations), 211.110 (in-process controls), and 211.165/211.166 (testing and stability) all bite during a transfer, and **FDA's Process Validation guidance (2011)** Stage 1 (Process Design) and Stage 2 (Process Qualification) map directly onto the transfer lifecycle.
- **USP General Chapter <1224> Transfer of Analytical Procedures** is the compendial reference for analytical method transfer and defines the recognized transfer options.

Related on this site: [pharmaceutical-quality-system](/articles/pharmaceutical-quality-system), [quality-risk-management](/articles/quality-risk-management), [process-validation-lifecycle](/articles/process-validation-lifecycle), and [ich-q12-lifecycle-management](/articles/ich-q12-lifecycle-management).

---

## The transfer lifecycle: how the whole thing sequences

A defensible transfer runs in stages, with a quality gate between each. Skipping the gate is the most common way transfers go wrong, because the receiving unit starts running engineering batches before the knowledge package is complete and then has to re-do work.

| Stage | What happens | Quality gate / exit criterion |
|-------|-------------|-------------------------------|
| 1. Initiation and feasibility | Define scope, confirm receiving unit capability, identify gaps (equipment, facility fit, capacity, regulatory) | Approved transfer charter or project initiation; feasibility/gap assessment signed |
| 2. Risk assessment | Map CQAs and CPPs, assess risk of each transferred element, define what is critical vs routine | Approved risk assessment (per ICH Q9) feeding the protocol scope |
| 3. Transfer protocol approval | Write and approve the protocol: strategy, deliverables, acceptance criteria, responsibilities | Protocol signed by both sending and receiving QA before any execution |
| 4. Knowledge transfer | Move documents, training, hands-on demonstration, materials and specs | Knowledge package transmittal complete and acknowledged |
| 5. Analytical transfer | Receiving lab qualifies the methods | Analytical transfer report meeting acceptance criteria |
| 6. Process transfer / engineering and demo batches | Receiving unit runs the process; may include engineering batches before PPQ | Demo batch results within criteria; deviations resolved |
| 7. Process qualification (PPQ) | Formal validation batches at the receiving site | PPQ protocol acceptance criteria met (see [process-performance-qualification-ppq](/articles/process-performance-qualification-ppq)) |
| 8. Transfer report and closeout | Summarize all evidence, conclude success or partial, hand over to routine | Approved transfer summary report; regulatory filing where required |

Two things to fix in your mind. First, **analytical transfer should be completed before, or in parallel with, the start of process demo batches**, because if the receiving lab cannot reliably measure the product, the process data is uninterpretable. Second, **engineering or demonstration batches are not validation batches.** PPQ (the three-or-more-batch process performance qualification, FDA Stage 2) is a separate, later step with its own protocol. Confusing the two is a classic finding.

---

## The transfer protocol: the central document

The transfer protocol is the contract between the sending and receiving units. It is the single approved document that says what is being transferred, how success will be judged, and who is responsible for what. If an inspector asks "show me how you controlled this transfer," this is the first document you hand over.

### Why it is required

There is no clause that literally says "thou shalt write a transfer protocol," but the requirement is constructed from several places: ICH Q10's expectation that transfers be managed within the quality system, the change-control requirement (a transfer is a change), and the WHO TRS guidance, which explicitly calls for a written transfer protocol with predefined acceptance criteria. The risk rationale is simple: predefined acceptance criteria stop the team from rationalizing whatever results they happen to get. You decide what "success" means before you have the data, not after.

### What goes in it

A complete transfer protocol contains, at minimum:

1. **Purpose and scope.** Product, dosage form or API, presentation, the specific transfer type, the sending and receiving units, and what is in and out of scope.
2. **Roles and responsibilities.** A RACI-style table covering both units (detailed below).
3. **References.** The development reports, the marketing authorization or filing, the master batch record, the control strategy, applicable SOPs.
4. **Product and process description.** Formulation, process flow, critical steps, the control strategy summary (CQAs, CPPs, in-process controls).
5. **Equipment and facility comparison.** Sending vs receiving equipment, a documented equivalence or difference assessment, and how differences are managed.
6. **Materials.** Raw materials, components, suppliers, grades, and any required re-qualification of suppliers at the receiving site.
7. **Analytical strategy.** Which methods transfer, by which option (comparative testing, co-validation, revalidation, or transfer waiver), and the analytical acceptance criteria.
8. **Process transfer strategy.** Number and purpose of engineering/demo batches, any planned at-scale studies, the link to the PPQ protocol.
9. **Acceptance criteria.** The heart of the document. Quantitative, predefined criteria for both process and analytical outcomes (covered in its own section below).
10. **Deviation and change handling.** How deviations during transfer are recorded and assessed (normally the receiving site's deviation system, with both QAs notified).
11. **Stability commitment.** Stability batches to be placed and the protocol reference.
12. **Documentation and reporting.** What reports will be generated and what closeout looks like.
13. **Approval signatures.** Both QA units, both technical owners, and any other required functions.

### How to write it, step by step

1. Pull the development/control-strategy documentation and identify every CQA and CPP. If the product was developed under QBD, this is in the development report and the control strategy. If it was not (older legacy products), you reconstruct it from the master batch record, specifications, and historical data. See [quality-by-design-and-doe](/articles/quality-by-design-and-doe).
2. Run the risk assessment first, then let it scope the protocol. Do not write acceptance criteria for things that do not matter and do not skip the things that do.
3. Build the equipment equivalence table. For each unit operation, compare the sending and receiving equipment on the parameters that drive the CQA (for a blender: working volume, fill level, rotation, geometry; for a lyophilizer: shelf area, condenser capacity, controllable ramp rates).
4. Define the analytical transfer option per method (see USP <1224> section below).
5. Set acceptance criteria that are tied to the registered specification and to statistically meaningful equivalence, not to "looks about the same."
6. Define the number of demo batches based on risk and on what you need to demonstrate, and clearly separate them from PPQ.
7. Route for approval. Nothing executes until both QA units sign.

### Acceptance criteria for a "good" protocol

A protocol is in good shape when: every CQA and CPP from the risk assessment maps to a deliverable or acceptance criterion; acceptance criteria are quantitative and pre-set; the equipment differences are addressed, not just listed; both QA units have signed before execution; and the link to PPQ and stability is explicit so the transfer cannot be declared "done" while validation is still open.

---

## Knowledge transfer: moving what is actually in people's heads

The protocol moves the documents. Knowledge transfer moves the understanding. ICH Q10 names **knowledge management** as one of the two enablers of the pharmaceutical quality system precisely because so much process understanding is tacit and never makes it into the batch record.

### What has to move

Build a knowledge transfer package and track it with a transmittal log. The package typically includes:

- The development report(s) and the formulation/process rationale.
- The control strategy: CQAs, CPPs, in-process controls, the registered specifications, and the justification for each limit.
- Process flow diagrams and the master batch record.
- Equipment lists, P&IDs, and qualification status of the receiving equipment.
- Analytical methods, method validation reports, reference standards, and system suitability requirements.
- Raw material and component specifications and approved supplier information.
- Stability data and the stability protocol.
- The **process history and "lessons learned"**: known failure modes, prior deviations and their root causes, batches that went out of trend and why, sensitivity of the process to specific parameters. This is the single most valuable and most frequently omitted element. A list of past deviations and their resolutions is worth more to a receiving site than another copy of the batch record.
- Hands-on demonstration and training, ideally with receiving-site operators present during a sending-site run, and sending-site SMEs present during the first receiving-site runs.

### How to run it

Use a transmittal log so there is evidence of what was sent and acknowledged. A simple worked example:

| Item ID | Document/knowledge item | Sent by | Date sent | Received/acknowledged by | Date | Status |
|---------|------------------------|---------|-----------|--------------------------|------|--------|
| KT-001 | Control strategy v3.0 | Dev SME | 2026-03-02 | Receiving MSAT | 2026-03-04 | Closed |
| KT-002 | Master batch record (draft for site) | Dev SME | 2026-03-02 | Receiving Mfg | 2026-03-05 | Closed |
| KT-003 | Deviation/lessons-learned summary | Sending QA | 2026-03-06 | Receiving QA | 2026-03-09 | Closed |
| KT-004 | HPLC assay method + validation report | Sending QC | 2026-03-06 | Receiving QC | 2026-03-08 | Closed |
| KT-005 | On-site demo batch (operator training) | Sending Mfg | 2026-04-15 | Receiving operators | 2026-04-15 | Closed |

The acceptance criterion for knowledge transfer is binary at the item level (sent and acknowledged) but substantive at the program level: the receiving site's SMEs can explain, in their own words, why each CPP matters and what happens if it drifts. If they cannot, the package moved but the knowledge did not.

Related: [data-governance-framework](/articles/data-governance-framework) and [technical-writing-for-gxp](/articles/technical-writing-for-gxp).

---

## Equipment and facility fit: the equivalence assessment

Scale and equipment differences are where process transfers actually break. The protocol must include a documented assessment of every difference and how it is controlled.

### How to do it

For each unit operation, list the sending and receiving equipment and compare the parameters that influence the CQA. Then decide, with the SME, whether the difference is (a) immaterial, (b) manageable by adjusting a parameter within the design space, or (c) a real risk that needs a study.

Worked example, a high-shear wet granulation step:

| Parameter | Sending site | Receiving site | Assessment | Control |
|-----------|-------------|----------------|------------|---------|
| Bowl working volume | 65 L | 150 L | Different scale | Scale impeller/chopper speed; confirm by demo batch endpoint |
| Impeller geometry | 3-blade | 3-blade | Equivalent | None |
| Spray nozzle | 1 nozzle | 2 nozzles | Different liquid addition | Match liquid addition rate per kg; monitor power/torque endpoint |
| Endpoint control | Power consumption | Power consumption | Equivalent principle | Re-establish endpoint value at scale |
| Drying | Fluid bed, 4 kg | Fluid bed, 9 kg | Different airflow scale | Match inlet temp and product temp profile; verify LOD/moisture CQA |

The acceptance criterion is that no unmanaged difference remains: every (c) item has either a study, a parameter range demonstrated in demo batches, or a documented justification. A common failure is treating the receiving equipment's qualification status as a checkbox; the equipment can be fully qualified and still be the wrong shape for this product. See [equipment-qualification-lifecycle](/articles/equipment-qualification-lifecycle) and [process-validation-for-biologics](/articles/process-validation-for-biologics) for the biologics case, where bioreactor working volume, mixing, and gas transfer scale very differently from small molecules.

---

## Analytical method transfer: USP <1224> and how to choose an option

You cannot judge a process if you cannot trust the measurement. Analytical transfer is the formal demonstration that the receiving lab can run the method and get equivalent results. The compendial reference is **USP General Chapter <1224>, Transfer of Analytical Procedures**, which recognizes four approaches.

| Option (per USP <1224>) | What it is | When to use it |
|-------------------------|-----------|----------------|
| Comparative testing | Both labs test the same homogeneous samples (or aliquots of the same lots); results compared against predefined criteria | The default for most assays and impurity methods |
| Co-validation between labs | Receiving lab participates in the original method validation, generating part of the validation data | When method is being validated around the time of transfer |
| Revalidation (or partial validation) | Receiving lab re-runs validation (full or for the relevant characteristics) | When comparative testing is impractical, or method/equipment changes materially |
| Transfer waiver | No experimental transfer; justified by documented rationale | Compendial methods used as-is, very simple methods (e.g., loss on drying), or when receiving lab already runs the method on the same platform |

Note the related compendial reference for using a pharmacopeial method without a full transfer: **USP <1226> Verification of Compendial Procedures** (see [compendial-method-verification](/articles/compendial-method-verification)). A transfer waiver for a compendial method usually still rides on a verification under <1226>.

### How to execute a comparative-testing transfer

1. Write the analytical transfer protocol (it can be a section of the master transfer protocol or a standalone document). Define the methods, the number of lots and replicates, the analysts, and the acceptance criteria per characteristic.
2. Confirm the receiving lab is ready: instruments qualified ([analytical-instrument-qualification](/articles/analytical-instrument-qualification)), reference standards and reagents in place, analysts trained, system suitability achievable.
3. Select samples. Use real, homogeneous product lots that span the relevant range. For an assay, lots near the middle of the range plus, ideally, samples spiked or selected to challenge specificity. For impurities, lots with detectable, quantifiable levels.
4. Run both labs, blinded where practical, with the predefined number of analysts and replicates.
5. Compare against acceptance criteria and document in an analytical transfer report.

### Acceptance criteria, with a worked example

Set criteria appropriate to the characteristic. For an assay, a common, defensible approach is a difference in mean results within a set absolute or relative limit. For impurities and dissolution, you set criteria per the method's purpose. Avoid the lazy "both within spec" criterion, two labs can both be within spec and still be measurably different in a way that will hurt you later.

Worked example, assay comparative testing acceptance criteria:

| Characteristic | Design | Acceptance criterion (example) | Result |
|----------------|--------|-------------------------------|--------|
| Assay (% label claim) | 3 lots, 2 analysts/lab, 3 reps each | Absolute difference of lab means <= 2.0% LC per lot; receiving lab %RSD <= 2.0% | Lot A diff 0.7%, Lot B 1.1%, Lot C 0.9%; RSD 1.3%. Pass |
| Related substances (largest impurity) | 3 lots, duplicate | Difference in mean <= 0.10% absolute, or within a relative limit; receiving lab reports same impurity profile | Diff 0.04%; profile matches. Pass |
| System suitability | Per method | Resolution and tailing meet method SST limits at receiving lab | Met. Pass |

The point of the absolute/relative limits is that they are pre-set and statistically meaningful for the method, not invented after seeing the data. For methods where variability is the concern, an equivalence approach (for example, a two one-sided test framework) is more rigorous than a simple mean-difference rule. See [analytical-method-transfer](/articles/analytical-method-transfer), [method-validation-essentials](/articles/method-validation-essentials), and [ich-q14-q2r2-analytical-lifecycle](/articles/ich-q14-q2r2-analytical-lifecycle) for the underlying method-validation framework.

---

## Process transfer, demo batches, and the link to PPQ

Once the knowledge has moved, the equipment fit is assessed, and the methods transfer, the receiving site runs the process.

### Engineering and demonstration batches

Engineering batches shake out the equipment, the procedure, and the operators. Demonstration (or confirmation) batches show that the process performs at the receiving site before you commit to formal validation. They are run under GMP if the material may be used, or as non-GMP engineering runs if not, but they are **not** PPQ batches. Use them to:

- Confirm the equipment-difference controls actually work (re-establish endpoints at scale).
- Generate data on the CPPs and in-process controls.
- Surface deviations while they are cheap to fix.
- Confirm the receiving lab's analytical data is interpretable.

### Acceptance criteria for demo batches

Define them in the protocol. Typical criteria: all CPPs stay within the established ranges; in-process controls and final product CQAs meet the registered specification; no unexplained deviations remain open; yield and process indicators (granulation endpoint, blend uniformity, fill weight control, bioreactor titer and viability for biologics) are within expected ranges. If a demo batch misses, you investigate and, depending on root cause, may add batches or revise controls before PPQ.

### The handoff to PPQ

PPQ (FDA Process Validation guidance Stage 2, the process performance qualification) is the formal demonstration that the commercial process at the receiving site is reproducible and in a state of control. It has its own protocol, its own (usually tighter) acceptance criteria, and normally a minimum of three consecutive successful batches, though the number is justified by risk and prior knowledge rather than fixed at three. The transfer is not "complete" until PPQ is done and, where required, the change is filed. See [process-performance-qualification-ppq](/articles/process-performance-qualification-ppq), [process-validation-lifecycle](/articles/process-validation-lifecycle), and [continued-process-verification-cpv](/articles/continued-process-verification-cpv) for the Stage 3 monitoring that follows.

---

## Acceptance criteria across the whole transfer

This is the topic interviewers push on, so be precise. There are three layers of acceptance criteria in a transfer, and people blur them:

1. **Knowledge transfer criteria** (largely qualitative/binary): every package item sent and acknowledged; receiving SMEs trained and able to explain the control strategy.
2. **Analytical transfer criteria** (quantitative, per USP <1224>): the lab-to-lab comparison limits described above.
3. **Process transfer / PPQ criteria** (quantitative): CPPs within range, CQAs within registered specification, statistically supported reproducibility across batches.

Good acceptance criteria share four properties: they are **predefined** (set before execution), **quantitative** wherever the attribute is measurable, **tied to the registered specification and the control strategy** (not invented), and **risk-proportionate** (tight on CQAs, lighter on routine attributes). The single most common weakness inspectors find is post-hoc criteria, limits written or loosened after the data came in. If you change an acceptance criterion mid-transfer, that is a protocol amendment with QA approval and a rationale, recorded before you judge the affected results, not a quiet edit.

---

## Roles and responsibilities

Transfers fail on ownership as often as on science. The split below is the common pattern; titles vary (MSAT, technical services, process engineering, technical transfer lead), but the responsibilities do not.

| Function | Sending unit | Receiving unit |
|----------|-------------|----------------|
| Transfer lead / project manager | Coordinates sending deliverables, schedule | Coordinates receiving readiness, owns the plan |
| Process SME (MSAT / development) | Provides process knowledge, control strategy, lessons learned, on-site support | Absorbs knowledge, adapts MBR to site equipment, runs demo/PPQ |
| Analytical SME (QC) | Provides methods, standards, validation data, lab support | Qualifies methods, runs analytical transfer, releases testing |
| Quality Assurance | Approves protocol, confirms knowledge package complete, supports deviations | Approves protocol and reports, owns deviations/change control at site, dispositions batches |
| Regulatory | Confirms registered process/specs, advises on filing strategy | Same, plus site-specific licenses and filings |
| Manufacturing / operations | Demonstrates process, trains operators | Executes the process under GMP |
| Supply chain / procurement | Supplies materials/specs | Qualifies materials and suppliers at site |

Two non-negotiables. **Both QA units approve the protocol and the report.** A transfer signed by only one side is not controlled. And the **receiving unit's quality system governs once execution starts**, deviations, change control, and disposition happen in the receiving site's system, with the sending QA kept informed. When the receiving unit is a contract manufacturer, the **quality agreement** defines exactly this split and must be in place before transfer (see [cdmo-oversight-quality-agreements](/articles/cdmo-oversight-quality-agreements) and [conducting-a-supplier-audit](/articles/conducting-a-supplier-audit)).

---

## Change control, deviations, and the regulatory filing

A transfer is a change, frequently several changes at once (new site, new equipment, new supplier, sometimes scale). It must run inside change control. See [change-control-validated-systems](/articles/change-control-validated-systems) and [deviation-management](/articles/deviation-management).

What this means in practice:

- The transfer is initiated as a change (or a set of linked changes) in the receiving site's quality system, with an impact assessment.
- Deviations during transfer go into the receiving site's deviation system, are root-caused, and are assessed for impact on the transfer conclusion. An open critical deviation blocks closeout.
- The **regulatory impact** is assessed early. Moving a commercial product to a new site, or changing a registered method, usually requires a regulatory submission (a variation in the EU, a supplement or change-being-effected/prior-approval supplement in the US) before the new site's product can be distributed. **ICH Q12 (2019)** and its post-approval change management protocol (PACMP) concept can pre-agree the data package and reporting category for a planned transfer, which is worth using when the transfer is foreseeable. See [ich-q12-lifecycle-management](/articles/ich-q12-lifecycle-management) and [ind-nda-bla-pathways](/articles/ind-nda-bla-pathways).

A transfer that is technically successful but distributed before the filing is approved is a serious compliance failure, not a paperwork lag. Quality should hold disposition until the regulatory status is confirmed.

---

## The transfer summary report and closeout

The transfer report is the mirror image of the protocol: it states, against each acceptance criterion, what was achieved, and it concludes whether the transfer succeeded.

### What goes in it

- Reference to the approved protocol and any amendments.
- Summary of knowledge transfer completion.
- Analytical transfer results vs each acceptance criterion, with a pass/fail conclusion per method.
- Process/demo and (if in scope) PPQ results vs criteria.
- A consolidated deviation table: every deviation raised during transfer, its root cause, resolution, and impact on the conclusion.
- Any criteria not met and the justification or the corrective path (a partial transfer must say so explicitly).
- Stability status and ongoing commitments.
- Regulatory filing status.
- Conclusion and both QA approvals.

### Acceptance criteria for closeout

The report can conclude "transfer successful" only when: all protocol acceptance criteria are met or formally justified; no critical or unresolved deviation remains open; PPQ is complete (or its own gating is explicitly stated as the remaining step); stability is on protocol; and regulatory status is clear. "Successful with conditions" is an honest and acceptable conclusion when something is still pending, as long as the conditions are tracked and gate distribution.

---

## Common mistakes and inspection-finding patterns

These are the patterns that recur in published inspection findings and warning letters around transfers and the changes they involve. No company names, just the patterns.

- **Acceptance criteria set or relaxed after the data.** The most cited weakness. Criteria appear to have been adjusted to make results pass, or were never quantitative to begin with.
- **PPQ confused with demo/engineering batches**, or commercial distribution from batches that were never properly qualified. Inspectors look hard at whether the validated state was actually established at the receiving site.
- **Process changes distributed without the required regulatory variation/supplement approved.** Manufacturing at a site or by a method not yet approved in the filing.
- **Equipment differences listed but not assessed.** A table of "sending vs receiving" with no analysis of impact on CQAs, and demo batches that then miss because a scale effect was never studied.
- **Analytical transfer skipped or done as a waiver with no real justification.** The receiving lab reports different impurity profiles or fails to reproduce results, discovered only after batches are made.
- **Lessons-learned/process-history not transferred.** Known failure modes recur at the receiving site because the deviation history never moved.
- **Deviations during transfer not investigated to root cause**, or closed without assessing impact on the transfer conclusion.
- **Stability not placed**, so the receiving-site product has no site-specific stability data supporting its shelf life.
- **Single-QA approval.** Protocol or report approved by only the sending or only the receiving unit, breaking the control.
- **No quality agreement in place** before transferring to a contract site, leaving deviation ownership and disposition ambiguous.
- **Data integrity gaps** in the transferred analytical data: incomplete audit trails, processing of comparative-testing data outside controls. See [data-integrity-foundations](/articles/data-integrity-foundations) and [chromatography-data-system-integrity](/articles/chromatography-data-system-integrity).

---

## Interview-ready: questions you will actually be asked

**"Walk me through how you would run a technology transfer."**
Stages, gates, and ownership. Initiation and feasibility, then risk assessment, then an approved transfer protocol with predefined acceptance criteria signed by both QA units, then knowledge transfer, then analytical transfer (USP <1224>), then process demo batches, then PPQ, then the transfer report and the regulatory filing. Emphasize that nothing executes before the protocol is approved and that the receiving site's quality system governs execution.

**"What is the difference between an engineering batch, a demonstration batch, and a PPQ batch?"**
Engineering batches shake out equipment and procedure. Demonstration/confirmation batches show the process works at the receiving site and generate CPP/CQA data, but are not validation. PPQ batches are the formal Stage 2 process performance qualification under the FDA 2011 Process Validation guidance, with their own protocol and tighter criteria, normally at least three consecutive successful batches justified by risk.

**"How do you transfer an analytical method, and what acceptance criteria would you use?"**
Name the USP <1224> options (comparative testing, co-validation, revalidation, transfer waiver) and pick comparative testing as the default. For an assay, predefined lab-to-lab mean-difference limits plus a receiving-lab precision limit; for impurities, an absolute or relative difference limit plus a matching profile; system suitability met at the receiving lab. Stress that criteria are predefined and statistically meaningful, and mention the two one-sided test (equivalence) approach for rigor.

**"A demo batch at the receiving site fails its CQA. What do you do?"**
Treat it as a deviation: contain, investigate to root cause (often an unassessed equipment/scale difference or an analytical issue), assess impact on the transfer, and decide whether to revise controls and add batches before PPQ. Do not proceed to PPQ until the cause is understood and the control is fixed.

**"What regulatory considerations gate a site-to-site transfer of a commercial product?"**
A variation (EU) or a supplement (US, CBE or prior-approval depending on the change) is usually required, and product cannot be distributed from the new site until that is approved. ICH Q12 and a PACMP can pre-agree the data package and reporting category for a planned change.

**"Why does ICH Q10 matter to a transfer?"**
Q10 names technology transfer as a lifecycle stage and identifies knowledge management and quality risk management as the two enablers. It frames the transfer as a controlled, quality-system activity rather than a project that happens outside the QMS.

**"What is the single most common reason transfers go wrong?"**
Either acceptance criteria set after the data, or process knowledge (especially the failure-mode/lessons-learned history) that never actually moved, so the receiving site rediscovers a known problem the hard way.

---

## Practical tips

- **Front-load the risk assessment.** It scopes everything. A transfer with a thin risk assessment produces either a bloated protocol or one with a dangerous gap.
- **Get both QAs to sign the protocol before anyone touches a piece of equipment.** It is the cheapest control you have.
- **Transfer the deviation history, not just the batch record.** A one-page lessons-learned summary prevents the most expensive demo-batch failures.
- **Complete analytical transfer before, or in parallel with, process demo batches.** Unreliable measurement makes process data meaningless.
- **Build the equipment-equivalence table per unit operation and force a decision on each difference** (immaterial / manageable / needs a study). Do not let a difference sit unassessed.
- **Keep PPQ, demo batches, and stability as distinct, explicitly tracked items** so "transfer complete" cannot be declared while validation is still open.
- **Confirm regulatory status before disposition.** A technically perfect transfer distributed ahead of an approved filing is a compliance failure.
- **Use ICH Q12 / PACMP for foreseeable transfers** to pre-agree the data package and avoid surprises on the reporting category.

### Related reading

- [process-validation-lifecycle](/articles/process-validation-lifecycle) and [process-performance-qualification-ppq](/articles/process-performance-qualification-ppq)
- [analytical-method-transfer](/articles/analytical-method-transfer) and [compendial-method-verification](/articles/compendial-method-verification)
- [quality-risk-management](/articles/quality-risk-management) and [quality-by-design-and-doe](/articles/quality-by-design-and-doe)
- [change-control-validated-systems](/articles/change-control-validated-systems) and [ich-q12-lifecycle-management](/articles/ich-q12-lifecycle-management)
- [cdmo-oversight-quality-agreements](/articles/cdmo-oversight-quality-agreements) and [equipment-qualification-lifecycle](/articles/equipment-qualification-lifecycle)
- [pharmaceutical-quality-system](/articles/pharmaceutical-quality-system) and [continued-process-verification-cpv](/articles/continued-process-verification-cpv)
