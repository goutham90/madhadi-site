---
title: "GMP for Cell and Gene Therapies: Chain of Identity, Chain of Custody, and ATMP Controls"
description: "How GMP works for autologous and viral-vector products, with chain of identity, chain of custody, single-batch release, and the EU ATMP framework explained for quality staff who run the operation."
pubDate: 2026-06-20
tags: ["cell-gene-therapy", "atmp", "gmp", "chain-of-identity", "viral-vector", "quality"]
pillar: "cell-gene-therapy"
tier: "Advanced"
---

Cell and gene therapy manufacturing breaks several assumptions that ordinary small-molecule and even most biologics GMP takes for granted. The batch is often one patient. The starting material is a person, not a vendor lot. A mix-up is not a quality deviation, it is a potential fatality. And the supply chain runs in two directions: cells leave the patient, travel to a manufacturing site, get engineered, and then have to come back to the same patient, sometimes across an ocean, on a timeline measured in days.

This article covers the GMP controls that make that work: chain of identity, chain of custody, single-batch operations, viral-vector specifics, and the EU ATMP regulatory frame including PRIME. It is written for quality professionals who have to build, run, or inspect a CGT operation, not for a general audience. If you are new to GMP fundamentals first, start with [what is GMP](/articles/what-is-gmp) and the [pharmaceutical quality system](/articles/pharmaceutical-quality-system), then come back.

---

## The regulatory map: what governs CGT and what each text actually requires

There is no single rulebook. You assemble the applicable controls from several sources depending on region and product type.

**United States.** Human cells, tissues, and cellular and tissue-based products are regulated under 21 CFR Part 1271 (the HCT/P rule), which carries the donor-eligibility and current good tissue practice (CGTP) requirements. Products that are more than minimally manipulated, or used for a non-homologous function, or are gene therapies, are regulated as biological products and also fall under the drug cGMPs in 21 CFR Parts 210 and 211, the biologics rules in 21 CFR Part 600, and licensing under section 351 of the Public Health Service Act via a Biologics License Application. FDA's CBER issues the guidance layer. Key documents include the 2020 guidances "Chemistry, Manufacturing, and Control (CMC) Information for Human Gene Therapy Investigational New Drug Applications" and "Testing of Retroviral Vector-Based Human Gene Therapy Products for Replication Competent Retrovirus During Product Manufacture and Patient Follow-up," plus the 2024 final guidance "Considerations for the Development of Chimeric Antigen Receptor (CAR) T Cell Products." For walkthroughs of the underlying drug rule see [21 CFR 210/211 cGMP](/articles/cfr-210-211-cgmp-walkthrough).

**European Union.** The defining feature of the EU frame is that Advanced Therapy Medicinal Products (ATMPs) have their own GMP. ATMP is a legal category created by Regulation (EC) No 1394/2007. It covers gene therapy medicinal products, somatic cell therapy medicinal products, tissue-engineered products, and combined ATMPs. The GMP that applies is not the standard EudraLex Volume 4 Part I; it is the dedicated "Guidelines on Good Manufacturing Practice specific to Advanced Therapy Medicinal Products" (the ATMP GMP Guidelines, EudraLex Volume 4 Part IV, in force since 2018). That standalone status matters: it is risk-based, it explicitly allows flexibility for products made in small batches or in hospital settings, and it carries CGT-specific sections on traceability, starting materials, and out-of-specification handling. Marketing authorisation is centralised through EMA, and scientific evaluation runs through the Committee for Advanced Therapies (CAT).

**ICH and shared standards.** ICH Q5A(R2) (2023) addresses viral safety evaluation, and the R2 revision explicitly extended scope toward newer modalities. ICH Q5D covers cell substrate derivation and characterisation. Quality risk management under ICH Q9(R1) and the quality system under ICH Q10 apply across the board. For sterility, you still live in Annex 1 of EU GMP and in USP chapters such as USP <71> sterility testing. See [aseptic processing and media fills](/articles/aseptic-processing-and-media-fills) and [sterility testing USP <71>](/articles/sterility-testing-usp-71).

A practical way to hold this in your head: in the US, CGT is "drug GMP plus tissue rules plus biologics rules plus CBER guidance." In the EU, CGT is "its own GMP (Part IV) plus the ATMP regulation plus EMA/CAT." The data-integrity expectations are common to both; for the CGT-specific angle see [cell and gene therapy data integrity](/articles/cell-gene-therapy-data-integrity) and [data integrity in gene therapy](/articles/data-integrity-in-gene-therapy).

---

## Autologous versus allogeneic: how the controls differ

Before the specific controls, fix the distinction that drives most of them. An **autologous** product is made from the patient's own cells and given back to that same patient. An **allogeneic** product is made from a donor's cells and given to one or more different patients. The quality system is not the same for the two, and an interviewer or inspector will expect you to know exactly where they diverge.

| Control area | Autologous | Allogeneic |
|---|---|---|
| Batch size | One patient per batch; n=1, no second unit to sample | One donor lot can yield many doses for many patients |
| Donor eligibility | No eligibility "rejection" (you cannot reject the patient); still test and label, including biohazard labeling if markers positive | Full donor eligibility determination required (21 CFR 1271 Subpart C; EU Directive 2004/23/EC) before use |
| Chain of identity | The dominant control: patient-to-product link must be unbroken, mix-up is catastrophic | Still required donor-to-product-to-recipient, but one lot maps to many recipients, so traceability is one-to-many |
| Starting material variability | High and patient-driven (disease, prior therapy, lymphocyte counts); incoming material cannot be re-ordered | More controllable; healthy or selected donors, banked and characterised |
| Release strategy | Conditional / out-of-specification release pathway often needed because of n=1 and short shelf life | Conventional batch release more achievable; larger lots allow full testing |
| Scale and comparability | "Scale-out" (more single-patient runs), comparability hard with no side-by-side material | "Scale-up" possible; comparability more like conventional biologics |
| Failure consequence | A failed batch can mean no treatment for that specific patient (may not tolerate a second collection) | A failed lot affects supply but not a single named patient's only chance |

The practical lesson: autologous products push you toward closed systems, n=1 release thinking, and chain of identity as the highest control, while allogeneic products push you toward donor eligibility rigor, banking and characterisation, and one-to-many traceability. Many programs run both modalities, so the quality system has to carry both logics without confusing them.

## Chain of identity: the control that has no equivalent in conventional GMP

### What it is and why it is required

Chain of identity (COI) is the unbroken, documented link between the patient and every material derived from or destined for that patient, maintained across the whole process from collection to administration. In an autologous therapy the product IS the patient's own cells; giving patient A's engineered cells to patient B is an immunological catastrophe and, with gene-modified cells, an irreversible one. COI exists to make that mix-up impossible, not merely unlikely.

The regulatory hook in the EU is explicit. The ATMP GMP Guidelines require a system that ensures, for autologous products and for allogeneic products intended for a specific patient, that the identity of the patient is maintained throughout and that the product can be reconciled to that individual. In the US the equivalent expectation flows from the cGMP requirements on identity, labeling, and prevention of mix-ups in 21 CFR 211 (subparts on production controls and labeling) combined with the CGTP traceability provisions in 21 CFR 1271, and is reinforced in CBER's CAR-T guidance, which treats COI as a core control.

### What goes in a COI system

A COI system is built around a single, unique, patient-linked identifier that is assigned at the earliest possible point (apheresis or collection) and travels with everything: the bag, the shipper, the manufacturing batch record, the labels, the final product, and the administration record. Typical contents:

- A unique COI number (often a Donor/Patient Identification Number, DIN or similar) assigned at collection.
- A separate Chain-of-Custody/Condition identifier or the same identifier extended.
- At least two independent patient identifiers verified at each handoff (for example, the COI number plus date of birth, or the COI number plus a second hospital identifier).
- A reconciliation point at each transformation step: receipt at the manufacturing site, start of processing, cryopreservation, release, shipment, receipt at the treatment site, thaw, and administration.

Many programs deliberately decouple the manufacturing COI identifier from direct patient-identifying data so the manufacturing site holds a pseudonymised key, while the treating site holds the link back to the named patient. That protects privacy without breaking the chain.

### How to do it, step by step

1. **Assign at collection.** The apheresis or tissue collection site applies the COI identifier and at least one secondary identifier to the bag and the accompanying record before the material leaves the room.
2. **Verify at every handoff.** Each receiving party performs an independent two-identifier check and records who checked, when, and the result. No material moves to the next step until the check passes.
3. **Carry it into the batch record.** The COI identifier becomes the batch identifier (or is rigidly cross-referenced to it). Single-patient batches mean the batch record and the COI record are effectively the same object.
4. **Re-verify before any irreversible step.** Before pooling (rare in autologous), before cryopreservation, and absolutely before administration, repeat the two-identifier verification.
5. **Reconcile at the bedside.** At administration, the clinical team verifies the product label against the patient's own identifiers in their presence. This is the last gate and the one that catches a shipping error.

### Acceptance criteria: how you know it is right

- Every record from collection to administration carries the same COI identifier with no gaps and no transcription errors.
- Every handoff shows two independent identifiers checked by a named person.
- A reconciliation can be run end to end and ties out: one patient in, one product out, no orphaned bags.
- The label on the final product cannot be produced or printed without the COI identifier present.

### Worked example: a COI verification log

| Step | Site | COI ID | 2nd identifier | Verified by | Date/time (UTC) | Result |
|---|---|---|---|---|---|---|
| Apheresis collection | Treatment center | COI-7F3A21 | DOB 1979-04-12 | RN, badge 4471 | 2026-03-02 09:14 | Pass |
| Receipt at mfg site | Manufacturing | COI-7F3A21 | DOB 1979-04-12 | Op, badge M118 | 2026-03-03 07:50 | Pass |
| Start processing | Manufacturing | COI-7F3A21 | Batch BR-7F3A21 | Op, badge M118 | 2026-03-03 08:30 | Pass |
| Cryopreservation | Manufacturing | COI-7F3A21 | Batch BR-7F3A21 | Op, badge M204 | 2026-03-10 16:05 | Pass |
| Final release ship | Manufacturing | COI-7F3A21 | Lot 7F3A21-FP | QA, badge Q07 | 2026-03-12 11:20 | Pass |
| Receipt at center | Treatment center | COI-7F3A21 | DOB 1979-04-12 | Pharm, badge 9912 | 2026-03-13 06:40 | Pass |
| Thaw | Treatment center | COI-7F3A21 | DOB 1979-04-12 | Pharm, badge 9912 | 2026-03-13 13:00 | Pass |
| Administration | Treatment center | COI-7F3A21 | DOB 1979-04-12 + name confirmed bedside | MD, badge 3320 | 2026-03-13 13:35 | Pass |

If any "2nd identifier" disagrees, the chain is broken and the product is quarantined pending investigation. That is a [deviation](/articles/deviation-management), and depending on severity it may be a non-conformance that blocks release.

---

## Chain of custody: who held it, under what conditions

Chain of identity answers "is this the right patient's product." Chain of custody (COC) answers "where has it been, who controlled it, and was it kept within its allowed conditions the whole time." For CGT these two chains run side by side because the material is alive and time- and temperature-sensitive.

### What COC controls and why

A COC system documents every transfer of physical possession plus the environmental conditions during transport and storage. The risk it manages is product degradation: cells lose viability if they warm, vectors lose titer, cryopreserved material is destroyed by even a brief excursion above its glass-transition temperature. Because most CGT products cannot be re-made quickly (the patient may not be able to undergo a second apheresis), a custody or condition failure can mean no treatment at all.

In the EU the ATMP GMP Guidelines, the traceability provisions of Regulation 1394/2007, and the donor-to-recipient traceability of Directive 2004/23/EC require that traceability be maintained for a defined retention period (the EU requirement is 30 years after the product expiry date for ATMPs). In the US, 21 CFR 1271 sets tracking and record-retention requirements, and the drug cGMPs require distribution records that allow recall.

### What goes in COC records

- Custodian at each leg (sending organisation, courier, receiving organisation), with signatures and timestamps.
- Continuous temperature monitoring data for cryogenic and refrigerated transport, with the data file retained.
- Shipper/dewar identification and its qualification status.
- Time out of controlled storage at each manual handling step.
- Excursion log: any reading outside the allowed band, with magnitude and duration.

### How to do it

The operational backbone is a qualified shipper plus a continuous logger plus a courier with a documented handoff protocol. The cold-chain mechanics overlap heavily with vaccine and biologic logistics, so build on [cold chain shipping qualification](/articles/cold-chain-shipping-qualification) and [temperature mapping qualification](/articles/temperature-mapping-qualification). What is CGT-specific:

1. **Use vapor-phase liquid nitrogen (LN2) dry shippers for cryopreserved product.** Validate hold time with margin (a 10-day rated dry shipper used for a 3-day route).
2. **Attach a logger that records throughout, not just at the endpoints.** You need the full curve to defend the product, and to detect a brief excursion a min/max logger would miss.
3. **Define maximum time-out-of-cryo for any thaw-adjacent step** and enforce it with a timer, not a memory.
4. **Reconcile COC against COI at receipt.** The receiving site verifies both the patient identity and that the conditions held before it accepts custody.

### Acceptance criteria

- No gap in custody: every minute is owned by an identified custodian.
- The full temperature trace is within band for the entire journey, or any excursion has a documented disposition.
- Retention satisfies the regional rule (EU: 30 years post-expiry; US per 1271 and cGMP distribution-record rules).

### Worked example: a transport excursion decision

Suppose a dry shipper logger shows the product reached minus 110 C for 22 minutes during a customs delay, against a specification of "maintain below minus 150 C." That is an excursion. The decision path:

1. Quarantine on receipt, do not administer.
2. Raise the deviation and pull the stability and thaw-stability data: does a documented study support viability and potency after a minus 110 C / 22 minute event?
3. If yes, with margin, QA can disposition for use with a documented rationale. If no data exist, the default answer is reject, because you cannot invent acceptance criteria after the fact. See [out-of-specification investigation](/articles/oos-investigation-process) for the discipline here.

---

## Single-batch operations: when n equals one

### Why autologous breaks normal batch logic

In conventional GMP a batch is many units made together, and statistics are your friend: you sample, you trend, you build a control strategy across lots. Autologous CGT inverts this. Each batch is one patient's cells, the batch size is effectively one dose, and there is no second unit to sample destructively without consuming the therapy. This forces several adaptations that an inspector will expect you to have thought through.

**Release testing must fit in one dose.** You cannot use a sterility test that needs more material than you can spare, or that takes 14 days when the product must infuse in 7. This drives the use of rapid microbiological methods and the practice of **conditional or out-of-specification release with risk assessment** that the ATMP GMP Guidelines explicitly permit. The Guidelines allow administration before all release tests are complete in defined circumstances, provided a procedure is in place, the prescribing physician is informed, and the risk is managed. That flexibility is unique to ATMPs and is heavily examined.

**Process variability is patient-driven.** The incoming material varies because patients vary: disease state, prior treatment, lymphocyte counts. Your process has to hold up across that range, and your in-process controls matter more than end-product testing because you have so little product to test at the end.

**Concurrent multi-patient manufacturing raises segregation risk.** Running several single-patient batches in the same facility at the same time is the norm, and it is exactly where mix-ups happen. The ATMP GMP Guidelines and CBER both require either closed systems or strict spatial and temporal segregation, with line clearance discipline that is more like aseptic filling than like bulk biologics. See [cross-contamination control in shared facilities](/articles/cross-contamination-control-shared-facilities).

**Vein-to-vein time is a quality constraint, not just a logistics one.** The total turnaround from apheresis (vein) to infusion (vein) sets the clock for everything: manufacturing slot, release testing, cold-chain transport, and clinical scheduling all have to fit inside it for a patient whose disease may be progressing. This is why rapid release methods, conditional release pathways, and tightly choreographed scheduling exist in CGT. A quality decision that adds days (a re-test, a deviation hold) has a direct clinical cost, which is the tension the QA-to-clinical interface has to manage honestly rather than by quietly cutting corners. Build the expected vein-to-vein timeline, the manufacturing slot booking, and the release-test turnaround into one schedule so a delay surfaces early instead of at the bedside.

### How single-batch release actually runs

1. **Define the release panel and split it into "before infusion" and "for the record."** Identity, dose (cell count), viability, and a rapid sterility readout typically gate infusion. Full sterility (USP <71>, 14 days) and some characterisation assays may report after administration.
2. **Pre-agree the OOS-release pathway.** Write the SOP that says what happens if a result is out of specification but the physician judges benefit outweighs risk: who approves, what is communicated, how it is recorded. This is a clinical-quality joint decision.
3. **Use a per-patient batch record that is also the COI record.** One document, one identifier, one disposition.
4. **Disposition by the Qualified Person (EU) or the responsible quality unit (US).** In the EU, ATMP release is a QP function under the ATMP GMP Guidelines, aligned in spirit with the principles in Annex 16. See [Qualified Person batch release (Annex 16)](/articles/qualified-person-batch-release-annex-16) and [batch disposition decisions](/articles/batch-disposition-decisions).

The release decision drawn as a path, including the rare out-of-specification branch the ATMP Guidelines permit:

<div class="flow-v">
  <div class="flow-step">Are all infusion-gating tests (identity, viable dose, viability, endotoxin, rapid sterility) complete and within spec, and does the COI reconciliation tie out?</div>
  <span class="flow-arrow">&darr;</span>
  <div class="flow-step">Yes: QP / quality unit certifies and releases; list pending for-the-record tests with committed report dates and a plan to act on a later failure</div>
</div>
<div class="flow-v">
  <div class="flow-step">No: one or more gating results is out of specification, but the treating physician judges benefit may outweigh risk for this patient</div>
  <span class="flow-arrow">&darr;</span>
  <div class="flow-step">Invoke the pre-approved OOS-release SOP: documented risk assessment, defined approval chain, mandatory physician notification recorded, patient informed; QP/quality unit and physician jointly authorise and record the rationale</div>
</div>
<div class="flow-v">
  <div class="flow-step">No SOP, no pre-agreed approval chain, or COI does not reconcile</div>
  <span class="flow-arrow">&darr;</span>
  <div class="flow-step">Do not release; quarantine and investigate. You cannot improvise an OOS-release decision case by case without the procedure built in advance</div>
</div>

### Acceptance criteria for a single-batch release

- The gating tests (identity, viability, dose, rapid sterility/endotoxin) are complete and within spec, or an OOS-release rationale is documented and signed.
- The COI reconciliation ties out.
- The pending tests are listed with their committed report dates and a process exists to act on a later failure (notify the physician, investigate, report).

### Worked example: a single-patient release panel

| Attribute | Method | Spec | Gates infusion? | Result | Status |
|---|---|---|---|---|---|
| Identity (cell phenotype) | Flow cytometry | Defined marker profile | Yes | Conforms | Pass |
| Transduction efficiency | Flow / qPCR (VCN) | Within defined range | Yes | In range | Pass |
| Viable cell dose | Flow viability + count | >= target dose | Yes | Meets dose | Pass |
| Viability | Flow / dye exclusion | >= defined % | Yes | Above limit | Pass |
| Endotoxin | Kinetic LAL | <= limit | Yes | Below limit | Pass |
| Rapid sterility | Rapid micro method | No growth at readout | Yes | No growth | Pass |
| Sterility (USP <71>) | 14-day compendial | No growth | No (post-infusion) | Pending | Open |
| RCR/RCL | Per ICH Q5A(R2)/CBER | None detected | No (post-infusion) | Pending | Open |
| Potency | Functional assay | Within defined range | No (post-infusion) | Pending | Open |

The two-column "gates infusion?" design is the heart of single-batch release. For the assays themselves see [comparability and potency assays](/articles/comparability-and-potency-assays) and [bioburden and endotoxin testing](/articles/bioburden-and-endotoxin-testing).

---

## Viral vectors: the part of the process that can be a hazard itself

Most gene therapies and CAR-T products use a viral vector (lentiviral, gammaretroviral, or AAV) to deliver the genetic payload. The vector is both a critical raw material and a biosafety hazard, and it brings controls that have no analogue in cell-only or small-molecule work.

### Replication-competent virus: the signature CGT test

The defining risk of integrating vectors is that the manufacturing process could generate a **replication-competent retrovirus or lentivirus (RCR/RCL)** by recombination. A replication-competent virus could spread in the patient, which is why this is treated as a safety attribute, not just a quality one.

The regulatory basis is concrete. CBER's 2020 guidance on testing retroviral vector products for RCR during manufacture and patient follow-up sets the expectation, and ICH Q5A(R2) (2023) frames viral safety overall. Testing occurs at multiple points: on the vector production material (end-of-production cells and supernatant), on the transduced cell product, and through long-term patient follow-up. The follow-up expectation for integrating vectors runs for years (the framework anticipates up to 15 years of long-term follow-up for certain gene therapies under FDA's long-term follow-up guidance).

A common inspection question: "When do you test for RCR/RCL and what triggers a positive result handling plan?" Good answer: testing is built into vector lot release, into product release where applicable per the risk assessment, and into the clinical follow-up plan, with a defined escalation that involves the biosafety committee, the sponsor's pharmacovigilance function, and the health authority.

### Vector lot as a critical starting material

Treat the vector lot as a qualified, traceable starting material with its own full release: identity, titer (infectious and physical), purity (residual host-cell DNA and protein, residual plasmid, residual nuclease), potency, sterility, endotoxin, and adventitious agent testing. ICH Q5A(R2) and Q5D inform the viral-safety and cell-substrate elements. The plasmid and cell bank upstream of the vector are themselves controlled materials with their own banking and characterisation, so the traceability chain runs all the way back to the master and working cell banks and the plasmid lot.

### AAV-specific points

AAV vectors (common in in-vivo gene therapy) are non-integrating, so RCR/RCL is not the dominant concern; instead the critical attributes are the **full-to-empty capsid ratio** (empty capsids are an impurity and an immunogenicity risk), aggregation, residual host-cell and helper-virus DNA, and potency tied to expression of the transgene. Dose is expressed in vector genomes, and the analytics (qPCR or ddPCR for genome titer, analytical ultracentrifugation or charge-based methods for full/empty) are themselves hard to validate. See [bioassay and ELISA validation](/articles/bioassay-and-elisa-validation) and [process validation for biologics](/articles/process-validation-for-biologics).

### Biosafety containment as a GMP control

Vector manufacturing happens at a defined biosafety level with containment that protects operators and prevents cross-contamination of other products in the facility. Closed systems, single-use assemblies, unidirectional flow, and decontamination of waste streams are GMP controls here, not just EHS controls, because a containment breach is both a safety event and a potential cross-contamination event. Segregation between vector production and cell processing, and between different patients' cell processing, is a standing inspection focus.

---

## Starting and raw materials: the human-derived input problem

CGT starting materials include the patient's or donor's cells, which arrive as a non-GMP biological input you cannot reject and re-order. This reshapes incoming-material control.

**Donor eligibility (allogeneic).** For allogeneic products and for donor-derived material, donor screening and testing for relevant communicable diseases is mandatory: 21 CFR 1271 Subpart C in the US, and the EU Tissues and Cells Directive 2004/23/EC and its technical directives in Europe. Autologous products are exempt from donor-eligibility determination in the usual sense (you cannot reject the patient), but you still test and you still label appropriately, including biohazard labeling when infectious markers are positive.

**Critical reagents.** Vectors, cytokines, activation beads, selection reagents, and media are critical raw materials. Where ancillary materials contact the product but are not intended to be present in the final product (for example, a cytokine used during expansion), qualify them against the principles in USP <1043> on ancillary materials for cell, gene, and tissue-engineered products, and document residual clearance. Supplier control here is stricter than commodity-reagent control; see [supplier and vendor qualification](/articles/supplier-vendor-qualification) and [conducting a supplier audit](/articles/conducting-a-supplier-audit).

**Traceability both ways.** EU traceability requirements demand a bidirectional link from donor/patient to product and back, including the ancillary materials and the human cells, retained for 30 years. Build the material genealogy into the same system that holds COI/COC so you can answer, for any final product, every lot of every material that touched it, and for any reagent lot, every patient it reached.

---

## The EU ATMP framework and PRIME: the regulatory pathway

### Why ATMPs have a separate regime

The EU decided that advanced therapies needed their own rules because conventional pharmaceutical law did not fit living, often individualized, products. Regulation (EC) No 1394/2007 created the ATMP category, established the Committee for Advanced Therapies (CAT) at EMA, and routed ATMP marketing authorisation through the centralised procedure. The dedicated Part IV GMP guidelines followed in 2018 so that the GMP itself could be risk-based and proportionate rather than forcing CGT into Part I.

Two features stand out for quality staff:

- **Risk-based flexibility.** The ATMP GMP Guidelines repeatedly allow controls to be scaled to the actual risk and to the development stage, which is essential for hospital-based and small-batch manufacture. This is a feature you must use deliberately and justify, not an excuse to do less.
- **The hospital exemption.** Article 28 of Regulation 1394/2007 lets a member state allow an ATMP to be prepared and used within that state, on a non-routine basis, under a doctor's responsibility for an individual patient, outside the central marketing authorisation. It is national, non-routine, and not a route to market, but it shapes early access.

### PRIME: priority medicines

PRIME (PRIority MEdicines) is EMA's scheme, launched in 2016, to support medicines that target an unmet medical need. It is not CGT-specific, but advanced therapies are heavily represented because they often address conditions with no treatment. PRIME gives a sponsor early and enhanced scientific and regulatory dialogue: a confirmed eligibility, an appointed CHMP/CAT rapporteur early, a kick-off meeting, and the prospect of accelerated assessment at the marketing-authorisation stage. PRIME does not lower the GMP or quality bar; it front-loads the regulatory conversation so the sponsor can build the right CMC and quality package earlier. The US analogues to know for an interview are Breakthrough Therapy designation and the Regenerative Medicine Advanced Therapy (RMAT) designation created by the 21st Century Cures Act (2016), which is the closest US counterpart for regenerative medicine. For meeting mechanics see [health authority meetings](/articles/health-authority-meetings) and for the broader inspection comparison [FDA vs EMA inspection dynamics](/articles/fda-vs-ema-inspection-dynamics).

### How a quality lead uses the ATMP frame in practice

1. **Decide your product's legal classification early** (gene therapy, somatic cell, tissue-engineered, or combined ATMP). CAT issues classification opinions; getting this wrong reshapes your whole dossier.
2. **Map your controls to Part IV, not Part I**, and write down where you have applied risk-based flexibility and the justification.
3. **Plan traceability for 30 years** from day one, because retrofitting it is painful.
4. **If targeting unmet need, seek PRIME eligibility** and use the early dialogue to lock the comparability and potency strategy, which are the usual CMC sticking points.

---

## Comparability and potency: the two hardest CMC topics in CGT

Two themes derail more CGT filings and inspections than anything else, so handle them explicitly.

**Comparability.** Any process change (a new site, a scale change, a new reagent supplier, a vector process improvement) requires a demonstration that the post-change product is comparable to the pre-change product, following the principles of ICH Q5E (2004). In CGT this is hard because lots are single-patient and variable, so you rarely have clean side-by-side material. The practical approach is a pre-defined comparability protocol, a panel of quality attributes ranked by criticality, and acceptance ranges set from prior knowledge. Tie it to [quality in technology transfer](/articles/quality-in-technology-transfer) and [comparability and potency assays](/articles/comparability-and-potency-assays).

**Potency.** Regulators expect a potency assay that reflects the product's mechanism of action and is in place before the registrational trials and certainly before licensure. For a CAR-T this might be a functional killing or cytokine-release assay; for a gene therapy, transgene expression and function. The recurring finding is a potency assay that is not yet quantitative, not yet validated, or does not reflect mechanism of action. Build it early; it cannot be bolted on at BLA. See [BLA readiness data package](/articles/bla-readiness-data-package).

---

## Roles and responsibilities

CGT operations succeed or fail on coordination between clinical and manufacturing functions that, in conventional pharma, barely talk to each other. Define the RACI clearly.

| Function | Owns |
|---|---|
| Apheresis/collection site | Correct collection, COI assignment, donor testing, first custody handoff |
| Manufacturing operations | Closed-system processing, segregation, in-process controls, batch record execution |
| QC | Release testing including rapid methods, RCR/RCL, potency, identity, sterility |
| QA | COI/COC oversight, deviation and OOS management, batch disposition support, audit of the chains |
| Qualified Person (EU) / responsible quality unit (US) | Certification/release, including OOS-release decisions |
| Cold-chain/logistics | Qualified shippers, continuous monitoring, COC documentation |
| Treating physician / clinical team | Bedside COI verification, informed acceptance of any OOS-release, infusion |
| Biosafety committee | Vector containment, RCR/RCL escalation, environmental release controls |
| Regulatory affairs | ATMP classification, PRIME/RMAT strategy, long-term follow-up commitments |
| Pharmacovigilance | Long-term follow-up for integrating vectors, adverse-event reporting |

The single most important interface to get right is QA-to-clinical, because the OOS-release decision and the bedside COI check sit on the seam between a manufacturing organization and a hospital.

---

## Common mistakes and real inspection-finding patterns

These are the patterns regulators cite for CGT, stated generically.

- **Broken or incomplete chain of identity.** A handoff with only one identifier, a transcription error in the COI number, or a gap where custody is undocumented. This is the highest-severity finding in CGT because of the mix-up risk.
- **Inadequate segregation during concurrent multi-patient manufacturing.** No documented line clearance between patients, shared equipment without verified cleaning, or simultaneous open processing of two patients' material in the same space.
- **OOS-release without a pre-approved procedure.** Administering an out-of-specification product on a case-by-case clinical judgment with no SOP, no defined approval chain, and no physician-notification record. The flexibility exists, but only if you built the process first.
- **Potency assay not ready.** A potency method that is qualitative, not validated, or not reflective of mechanism of action at the stage of development where regulators expect it.
- **RCR/RCL testing or long-term follow-up gaps.** Missing test points in manufacture, or a long-term follow-up plan that does not match the integrating-vector risk.
- **Cold-chain monitoring gaps.** Min/max loggers that miss transient excursions, unqualified shippers, or excursions dispositioned without supporting stability data.
- **Starting-material control weakness.** Ancillary materials not qualified against USP <1043> principles, residuals not characterised for clearance, or donor-eligibility documentation incomplete for allogeneic material.
- **Traceability retention shortfalls.** Records not retained for the required period (30 years in the EU), or a genealogy that cannot reconcile material-to-patient in both directions.
- **Treating the ATMP risk-based flexibility as permission to do less** without documenting the risk justification.

For how these get classified and written up, see [audit finding classification](/articles/audit-finding-classification) and [FDA warning letter patterns](/articles/fda-warning-letters-patterns).

---

## Interview-ready: questions you will actually be asked

**"What is the difference between chain of identity and chain of custody?"**
COI is the documented link between the patient and their product, the control against mix-ups. COC is the documented history of physical possession and storage conditions, the control against degradation and loss. In autologous CGT they run in parallel and are reconciled together at every handoff and at the bedside.

**"How does batch release differ for an autologous product?"**
The batch is one patient, so you cannot sample freely, and some tests (full sterility, potency) report after the product must infuse. You split the release panel into infusion-gating tests and for-the-record tests, and you operate a pre-approved out-of-specification-release pathway with the treating physician for the rare case where benefit outweighs an OOS result. The EU ATMP GMP Guidelines explicitly permit this with a defined procedure.

**"What is RCR/RCL and why does it matter?"**
Replication-competent retrovirus or lentivirus is a replication-competent virus that could arise by recombination during manufacture of an integrating vector product. It is a safety attribute. You test at vector production, at product where indicated, and through long-term patient follow-up, with escalation defined. The basis is CBER's RCR testing guidance and ICH Q5A(R2).

**"What is an ATMP and why does the EU treat it differently?"**
ATMP is the EU legal category from Regulation 1394/2007 covering gene therapy, somatic cell, tissue-engineered, and combined products. They get dedicated, risk-based GMP in EudraLex Volume 4 Part IV, centralised authorisation via EMA, and scientific evaluation by the CAT, because living, often patient-specific products do not fit conventional pharmaceutical GMP.

**"What is PRIME and is it CGT-specific?"**
PRIME is EMA's priority-medicines scheme (2016) for products addressing unmet medical need. It is not CGT-specific, but advanced therapies dominate it. It provides early enhanced regulatory dialogue and a path to accelerated assessment, without lowering the quality bar. The closest US designation is RMAT under the 21st Century Cures Act.

**"How do you prevent mix-ups when manufacturing several patients at once?"**
Closed systems wherever possible, strict spatial and temporal segregation, line clearance between patients, two-identifier COI verification at every handoff, and a batch record that is also the COI record so the identifier is impossible to lose.

**"How long must CGT traceability be retained in the EU?"**
30 years after the expiry date of the product, with a bidirectional link from patient/donor to product and back, including ancillary materials.

**"What is special about AAV vs lentiviral release testing?"**
AAV is non-integrating, so RCR/RCL is not the dominant risk; full-to-empty capsid ratio, aggregation, residual DNA, and transgene-based potency dominate, and dose is in vector genomes. Lentiviral/gammaretroviral products carry the RCR/RCL and long-term follow-up burden because they integrate.

---

## Practical tips

- Make the COI identifier the batch identifier. One identifier that cannot be separated from the product removes a whole class of error.
- Build traceability for 30 years and bidirectional from day one; retrofitting genealogy is brutal.
- Write the OOS-release SOP before you need it, and run it as a joint quality-clinical decision with mandatory physician notification recorded.
- Use continuous loggers, never min/max, on cryo shipments, and qualify hold time with generous margin.
- Lock the potency assay and the comparability protocol early; these are the usual filing and inspection failure points.
- Treat the vector lot, the plasmid, and the cell banks as fully controlled, fully traceable starting materials, not reagents.
- If you use ATMP risk-based flexibility, document the risk rationale so it reads as a deliberate decision, not a shortcut.

### Related articles

- [Cell and gene therapy data integrity](/articles/cell-gene-therapy-data-integrity)
- [Data integrity in gene therapy](/articles/data-integrity-in-gene-therapy)
- [Process validation for biologics](/articles/process-validation-for-biologics)
- [Comparability and potency assays](/articles/comparability-and-potency-assays)
- [Aseptic processing and media fills](/articles/aseptic-processing-and-media-fills)
- [Cold chain shipping qualification](/articles/cold-chain-shipping-qualification)
- [Cross-contamination control in shared facilities](/articles/cross-contamination-control-shared-facilities)
- [Qualified Person batch release (Annex 16)](/articles/qualified-person-batch-release-annex-16)
- [Supplier and vendor qualification](/articles/supplier-vendor-qualification)
- [BLA readiness data package](/articles/bla-readiness-data-package)
