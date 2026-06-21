---
title: "IND, NDA, and BLA: US Regulatory Pathways From First-in-Human to Approval"
description: "How a drug or biologic moves through the US system from IND to approval: what each submission contains, the clinical phases, the expedited programs, and the review clock that runs underneath it all."
pubDate: 2026-06-20
tags: ["regulatory", "ind", "nda", "bla", "clinical", "fda", "quality-assurance"]
pillar: "quality-assurance"
tier: "Intermediate"
---

A new drug or biologic does not get one approval. It passes through a chain of regulatory gates, each with its own document, its own decision-maker inside the agency, and its own quality expectations. A quality professional who understands only the GMP side of the house, the batch records and the deviations, will eventually be in a meeting where someone says "that has to go in the IND amendment" or "the BLA Module 3 stability section is the long pole" and have no idea what the timeline or the stakes are. This article walks the full US pathway: the Investigational New Drug application that opens human testing, the clinical phases that generate the evidence, the New Drug Application and Biologics License Application that ask for marketing approval, the expedited programs that change the speed, and the review clock that the agency runs underneath everything.

The framing matters. In the US, a drug cannot legally be shipped across state lines for clinical use unless it is the subject of an effective IND or is an approved product. That is the legal trigger for the whole regulated machine, and it sits in statute, not just guidance.

---

## The legal skeleton: what authorizes each step

Before the documents, know the law they sit on. Memorize these because interviewers and inspectors expect you to place each activity in the right legal box.

| Activity | Primary legal basis | What it does |
|---|---|---|
| Human testing of an unapproved drug | 21 CFR Part 312 | Governs the IND, the application that lets an unapproved drug be used in humans |
| Marketing approval of a drug | Federal Food, Drug, and Cosmetic Act (FD&C Act) section 505; 21 CFR Part 314 | Governs the NDA and the approval standard |
| Marketing approval of a biologic | Public Health Service Act (PHS Act) section 351; 21 CFR Part 601 | Governs the BLA and biologics licensure |
| Clinical conduct, subject protection | 21 CFR Part 50 (informed consent), Part 56 (IRBs), Part 54 (financial disclosure) | Protects human subjects and data integrity |
| Good clinical practice | ICH E6(R2), with E6(R3) finalized in 2023 | The international quality standard for running trials |
| Nonclinical safety study quality | 21 CFR Part 58, Good Laboratory Practice | Governs the integrity of animal/toxicology data supporting the IND |

The drug-versus-biologic split is the single most common thing newcomers get wrong. A small-molecule chemical drug goes the 505/NDA route. A protein, monoclonal antibody, vaccine, blood product, gene therapy, or cell therapy goes the 351/BLA route. The clinical evidence requirements look similar, but the chemistry/manufacturing expectations, the review division, and even the user-fee accounting differ. Therapeutic proteins were moved under the PHS Act biologics framework by the Biologics Price Competition and Innovation Act of 2009, with the transition completed in 2020, so by default a protein is a biologic.

---

## The IND: opening human testing

### What it is and why it is required

The Investigational New Drug application (21 CFR Part 312) is not an approval. It is a request to the FDA for an exemption from the law that otherwise bars shipping an unapproved drug across state lines. When the IND is "in effect," you may dose humans. The agency does not send a letter saying "approved." Instead, a 30-day clock runs from receipt, and if the FDA does not place the study on clinical hold within those 30 days, the IND goes into effect and dosing can begin.

The quality rationale is subject safety. Before anyone takes an experimental compound, the agency wants to see that the animal toxicology supports the proposed human dose, that the manufacturing is controlled enough that the material is what you say it is, and that the clinical protocol has a sound monitoring and stopping plan.

### Types of IND

- **Commercial IND**: filed by a sponsor intending to develop and market the product. This is the standard industry pathway.
- **Research (investigator-initiated) IND**: filed by a physician who both initiates and conducts an investigation.
- **Expanded access (compassionate use) IND**: for treatment of patients outside a clinical trial, under 21 CFR Part 312 Subpart I. Different intent, same regulatory family.
- **Emergency use IND**: for a single patient in an emergency when there is no time for the standard process.

Know the difference between these in an interview. Mixing up an expanded-access IND with a commercial IND signals you have never been near a regulatory filing.

### What goes in an IND

The required content is laid out in 21 CFR 312.23. The core pieces:

| Section | Form/content | What it must show |
|---|---|---|
| Cover sheet | Form FDA 1571 | Sponsor, drug, phase, prior submissions, commitments |
| Form FDA 1572 | Statement of Investigator | Each clinical investigator's qualifications and commitments |
| Introductory statement and general plan | Narrative | The drug, the rationale, the broad development plan for the coming year |
| Investigator's Brochure (IB) | Document per ICH E6 | Everything known about the drug: chemistry, pharmacology, toxicology, prior human experience, reference safety information |
| Clinical protocol | Protocol per ICH E6 | Objectives, design, population, dosing, endpoints, safety monitoring, stopping rules, statistics |
| Chemistry, Manufacturing, and Controls (CMC) | Module 3 content | Composition, manufacture, control of drug substance and drug product, stability, labeling for investigational use |
| Pharmacology and toxicology | Module 4 content | Nonclinical studies (GLP toxicology) supporting the safety of the proposed human dose and duration |
| Previous human experience | Narrative/tables | Any prior clinical exposure, foreign marketing, related compounds |

The IB and the protocol carry the clinical and ethical weight. The CMC and the toxicology carry the "is this safe enough to start" weight. For a first-in-human IND, the toxicology package and the dose-justification narrative are usually what reviewers scrutinize hardest.

### How to do it: the sequence

1. **Hold a pre-IND meeting (Type B).** This is the single most useful step. You bring your nonclinical package, proposed first-in-human dose, and CMC plan, and you ask the review division specific questions. Getting agency alignment here prevents a clinical hold later. See [health-authority-meetings](/articles/health-authority-meetings) for how to run these.
2. **Finish the GLP-compliant toxicology** to the duration and route needed to support the planned dosing, under 21 CFR Part 58. See [glp-21-cfr-58-nonclinical](/articles/glp-21-cfr-58-nonclinical).
3. **Manufacture investigational material** under GMP appropriate to phase, and assemble the CMC section. Investigational-product GMP expectations are lighter than commercial but real; see [gmp-for-investigational-products-annex-13](/articles/gmp-for-investigational-products-annex-13).
4. **Write the protocol and IB**, finalize the investigator list (Form 1572 for each), and confirm IRB and informed-consent plans under Parts 56 and 50.
5. **Compile in eCTD format** and submit. The IND is organized in the Common Technical Document modules even though it is not a marketing application; see [ectd-submission-architecture](/articles/ectd-submission-architecture).
6. **Run the 30-day clock.** Respond fast to any FDA information requests. If the agency identifies a deficiency that puts subjects at unreasonable risk, it issues a clinical hold and dosing cannot start.

### Acceptance criteria: how you know the IND is done right

- The 30 days pass with no clinical hold, or any hold is resolved and lifted.
- The toxicology supports the starting dose with a defensible safety margin (often expressed as a multiple of the No Observed Adverse Effect Level, scaled to human equivalent dose).
- The CMC section establishes identity, strength, quality, and purity of the investigational material, with stability covering the trial duration.
- The protocol's safety monitoring and stopping rules are explicit and reviewable.

### Worked example: a first-in-human dose justification snippet

> The highest non-severely-toxic dose in the 28-day repeat-dose toxicology study in the most sensitive species was 50 mg/kg. Applying the standard body-surface-area conversion to a human equivalent dose and a 10-fold safety factor, the proposed maximum recommended starting dose is calculated and supported. The single-ascending-dose protocol begins three dose levels below this ceiling, with predefined stopping rules at grade 2 or higher drug-related adverse events.

That is the kind of paragraph a reviewer reads in the introductory statement and cross-checks against Module 4. If the arithmetic does not tie, you get an information request, and your clock is now under pressure.

---

## The clinical phases: generating the evidence

The IND opens the door; the clinical program produces the data that the eventual NDA or BLA will be judged on. The phases are a convention, not rigid legal categories, but everyone in the industry uses them and an interviewer will expect crisp definitions.

| Phase | Typical N | Primary question | Typical duration |
|---|---|---|---|
| Phase 1 | 20-100 | Is it safe in humans? Pharmacokinetics, tolerability, dose range | Several months to ~1 year |
| Phase 2 | ~100-300 | Does it work, and at what dose? Proof of concept, dose-finding | 1-2 years |
| Phase 3 | several hundred to several thousand | Does it work in a representative population, confirmed? Safety at scale | 1-4 years |
| Phase 4 | varies | Post-approval safety and effectiveness commitments | After approval |

Phase 1 in oncology often enrolls patients rather than healthy volunteers because the drugs are too toxic for healthy subjects, which is a nuance worth knowing. Phase 3 is the confirmatory, pivotal-trial stage: the FDA generally expects substantial evidence of effectiveness, historically interpreted as adequate and well-controlled investigations, and the 1997 FDA Modernization Act clarified that in some cases a single adequate and well-controlled trial plus confirmatory evidence can suffice.

The trial design and statistics that make these phases interpretable are their own discipline. The international standards live in ICH E8(R1) on general study considerations and ICH E9 on statistical principles; see [ich-e8-e9-trial-design-statistics](/articles/ich-e8-e9-trial-design-statistics). The conduct quality standard is ICH E6 Good Clinical Practice; see [ich-e6-good-clinical-practice](/articles/ich-e6-good-clinical-practice).

### Quality touchpoints during the clinical program

Between IND effectiveness and the marketing application, the IND stays alive and the sponsor keeps feeding it:

- **Protocol amendments** (312.30): any change to the protocol goes in as an amendment.
- **Information amendments** (312.31): new CMC, toxicology, or other technical information.
- **IND safety reports** (312.32): serious and unexpected suspected adverse reactions must be reported, with the 7-day fatal/life-threatening and 15-day calendar-day timelines that every safety group lives by.
- **Annual reports** (312.33): a yearly summary of progress.

The data that flows out of these trials has to survive a later inspection. Source data, monitoring, and electronic-record controls are where quality earns its keep; see [source-data-and-sdv-clinical](/articles/source-data-and-sdv-clinical) and [clinical-qa-gcp-data-integrity](/articles/clinical-qa-gcp-data-integrity).

---

## The NDA and BLA: asking for approval

### What they are and the legal standard

When the clinical program supports it, the sponsor files the marketing application. For a small-molecule drug, that is a New Drug Application under FD&C Act section 505(b) and 21 CFR Part 314. For a biologic, it is a Biologics License Application under PHS Act section 351 and 21 CFR Part 601.

The approval standard differs in wording but converges in practice. For an NDA, the FDA must find substantial evidence of effectiveness and a demonstration of safety for the intended use. For a BLA, the agency must find the product safe, pure, and potent, and the facility must meet standards designed to assure those attributes. The "potency" language is biologics-specific and ties directly to the potency assays that QC runs.

There are two NDA flavors worth knowing:

- **505(b)(1)**: a full application with the applicant's own complete safety and effectiveness data. The classic new-molecule path.
- **505(b)(2)**: an application that relies in part on data the applicant did not generate, such as published literature or the agency's prior findings for an approved drug. Used for reformulations, new routes, and similar.

Generics go through 505(j) as Abbreviated New Drug Applications, and biosimilars go through 351(k), but those are separate topics from the innovator pathway covered here.

### What goes in the application: the CTD structure

Both NDAs and BLAs are organized as the electronic Common Technical Document (eCTD), the ICH M4 structure. Knowing the five modules cold is non-negotiable for a regulatory or quality role.

| Module | Content | Who owns it |
|---|---|---|
| Module 1 | Regional administrative information (forms, labeling, REMS, patent info) | Regulatory affairs |
| Module 2 | Summaries and overviews (Quality Overall Summary, nonclinical and clinical overviews and summaries) | Cross-functional, medical writing |
| Module 3 | Quality (CMC): drug substance and drug product, manufacturing, controls, stability | CMC, manufacturing, QC, QA |
| Module 4 | Nonclinical study reports (pharmacology, toxicology) | Nonclinical/preclinical |
| Module 5 | Clinical study reports, the actual trial data | Clinical, biostatistics, data management |

Module 1 is regional and differs between FDA and EMA submissions; Modules 2 through 5 are harmonized. The eCTD lifecycle, the leaf files, the operations of submitting and amending, are covered in [ectd-submission-architecture](/articles/ectd-submission-architecture).

For a quality professional, Module 3 is home territory. It carries the specifications, the analytical methods and their validation, the process validation summary, the container-closure data, and the stability program that justifies the shelf life. The BLA's Module 3 is heavier because biologics manufacturing is more variable: comparability, potency, host-cell protein and other process-related impurities, viral safety, and the cell-bank characterization all live here. A clean, inspection-ready CMC package is often the difference between an on-time approval and a Complete Response Letter; see [bla-readiness-data-package](/articles/bla-readiness-data-package).

### How to do it: the submission and review sequence

1. **Hold an end-of-Phase-2 meeting (Type B)** to agree the Phase 3 design before you commit the expensive pivotal trials.
2. **Run Phase 3, lock the database, analyze.** A clean database lock and a defensible statistical analysis plan are the foundation; a messy lock haunts the whole review.
3. **Hold a pre-NDA or pre-BLA meeting** to align on the content and format of the application and to surface review issues early.
4. **Assemble and submit the eCTD.** Pay the user fee under the Prescription Drug User Fee Act (PDUFA).
5. **Filing review (about 60 days).** The FDA decides whether the application is complete enough to review. It can issue a Refuse to File if there are major gaps. Crossing the filing gate is itself an acceptance criterion.
6. **Substantive review.** The review division evaluates the data, often convenes an advisory committee for novel products, and conducts inspections.
7. **The decision.** Either an approval letter or a Complete Response Letter (CRL) describing the deficiencies that prevent approval.

### Inspections that gate the approval

A marketing application is not approved on paper alone. Expect:

- **Pre-Approval Inspection (PAI)** of the manufacturing sites in Module 3, verifying that the commercial process is validated and the facility is in a state of control. See [fda-inspection-readiness](/articles/fda-inspection-readiness).
- **Bioresearch Monitoring (BIMO) inspections** of clinical sites and the sponsor, verifying that the pivotal-trial data are real and were collected under GCP. See [gcp-audits-and-inspections](/articles/gcp-audits-and-inspections).

A data-integrity finding at either type of inspection can sink an otherwise approvable application. This is why the quality function's work during development is not bureaucratic overhead: it is the evidence that survives the PAI and BIMO.

---

## Expedited programs: changing the speed without changing the standard

The FDA has four formal programs to speed up development and review for serious conditions with unmet need. Candidates confuse these constantly, so here is the clean version. All four require a serious or life-threatening condition; what differs is the trigger and the benefit.

| Program | Legal/policy basis | Trigger | What you get |
|---|---|---|---|
| Fast Track | FDASIA 2012 / FD&C Act 506 | Serious condition, potential to address unmet need | More frequent FDA interaction, eligibility for rolling review |
| Breakthrough Therapy | FDASIA 2012 / FD&C Act 506 | Preliminary clinical evidence of substantial improvement over available therapy on a clinically significant endpoint | Intensive FDA guidance, organizational commitment, all Fast Track features |
| Accelerated Approval | FD&C Act 506(c); 21 CFR Part 314 Subpart H and Part 601 Subpart E | Effect on a surrogate or intermediate clinical endpoint reasonably likely to predict benefit | Approval on the surrogate, with a required confirmatory trial post-approval |
| Priority Review | PDUFA policy | Significant improvement in safety or effectiveness | Shorter review clock (see below) |

Two distinctions interviewers probe:

- **Fast Track and Breakthrough are development designations; Accelerated Approval and Priority Review are about the approval and review.** You can hold more than one at once. A breakthrough-designated product might be approved under accelerated approval with a priority review.
- **Accelerated approval comes with strings.** The confirmatory trial is a post-marketing requirement. The Consolidated Appropriations Act of 2023 strengthened the FDA's authority to require those confirmatory trials be underway and to withdraw approval expeditiously if benefit is not verified. If you describe accelerated approval as a free pass, you have failed the question.

A separate concept is the **Real-Time Oncology Review** and similar pilots, plus **rolling review**, which lets a sponsor submit completed portions of the application as they are ready rather than waiting for the whole package. Rolling review is a Fast Track benefit and shortens elapsed time, not review depth.

---

## The review clock: PDUFA and the timelines you must quote

The review timelines are set by performance goals the FDA negotiates with industry under PDUFA, currently in its seventh reauthorization (PDUFA VII), tied to the user fees that fund a large share of the review staff.

The numbers you should have ready:

| Application type | PDUFA goal clock | Clock start |
|---|---|---|
| Standard review, new molecular entity | 10 months | After the 60-day filing period (so ~12 months from submission) |
| Priority review, new molecular entity | 6 months | After the 60-day filing period (so ~8 months from submission) |
| Standard review, original non-NME application | 10 months | From the date of receipt |
| Priority review, original non-NME application | 6 months | From the date of receipt |

The detail that catches people: for new molecular entities, the clock starts after the 60-day filing review, so the calendar time from submission is roughly two months longer than the headline goal. Quote both numbers and you sound like you have lived it.

A few more clock facts:

- **A major amendment** during review (substantial new data) can trigger a three-month extension of the goal date because the agency needs time to review the new material.
- **The Complete Response Letter** resets things: the sponsor responds, the response is classified as Class 1 (two-month goal) or Class 2 (six-month goal) depending on how much new review it requires.
- **PDUFA dates are goals, not statutory deadlines.** The agency usually meets them, but a missed date is not in itself unlawful.

---

## Roles and responsibilities

The pathway is a team sport, and quality threads through all of it. A clean mental model of who owns what helps you function and helps you answer the "describe a cross-functional submission" interview question.

| Function | Owns |
|---|---|
| Regulatory Affairs | Strategy, agency meetings, Module 1, eCTD assembly and publishing, the actual submission and correspondence |
| Clinical Operations | Trial execution, sites, monitoring, the data that becomes Module 5 |
| Biostatistics and Data Management | Analysis plan, database lock, the statistical evidence of effectiveness |
| Nonclinical / Preclinical | GLP toxicology, Module 4, dose justification |
| CMC / Manufacturing | The process, validation, and Module 3 quality data |
| QC / Analytical | Methods, validation, specifications, stability, potency assays |
| Quality Assurance | GMP/GLP/GCP oversight, audits, deviation and CAPA systems, inspection readiness, the integrity of every record that supports the filing |
| Pharmacovigilance / Safety | IND safety reports, the safety database, the integrated safety summary |
| Medical Writing | Module 2 summaries, clinical study reports, the IB |

QA's specific deliverables across the pathway: GLP study audits before the IND, GCP audits of pivotal sites before the BLA/NDA, internal mock inspections ahead of the PAI and BIMO, and continuous data-integrity governance so that nothing in any module collapses under inspection. See [gxp-roles-responsibilities](/articles/gxp-roles-responsibilities) for the broader map.

---

## Common mistakes and inspection-finding patterns

These are the failures that recur across programs, written generically.

- **Treating the IND 30 days as an approval.** It is an exemption that takes effect by default. Teams that wait for a "yes" letter that never comes lose time; teams that dose before resolving a hold create a serious compliance problem.
- **Under-resourcing the CMC section.** Clinical data gets the attention, then Module 3 turns out to be the long pole. Method validation, process validation, and stability cannot be compressed at the end. For biologics, comparability between the clinical and commercial process is a frequent gap.
- **Database and source-data weaknesses surfacing at BIMO.** Missing source documents, unreconciled queries, monitoring that did not catch protocol deviations, and audit-trail gaps in clinical systems are recurring inspection findings. They can render a pivotal trial uninterpretable.
- **Misusing the expedited programs in conversation and in strategy.** Claiming a breakthrough designation lowers the evidence bar, or assuming accelerated approval has no post-marketing obligation, signals weak understanding and, in practice, leads to surprise confirmatory-trial commitments.
- **Refuse to File from administrative gaps.** Incomplete forms, format errors in the eCTD, missing labeling, or an absent integrated summary can cost the entire filing review window.
- **Late agency engagement.** Skipping or under-preparing the pre-IND and pre-NDA/BLA meetings leads to clinical holds and review-cycle deficiencies that a well-run meeting would have caught. The agency meetings are cheap insurance; see [health-authority-meetings](/articles/health-authority-meetings).
- **Data-integrity findings at the PAI.** Incomplete batch records, unreviewed audit trails, and method problems found during the pre-approval inspection delay approval even when the clinical story is strong. See [fda-warning-letters-patterns](/articles/fda-warning-letters-patterns).

---

## Interview-ready: questions and how to answer

**"Walk me through the path from molecule to approval."**
Lead with the gates: pre-IND meeting, IND filing and the 30-day default-effective clock, Phases 1 through 3 with the IND staying live through amendments and safety reports, end-of-Phase-2 and pre-NDA/BLA meetings, then the marketing application as an eCTD, the 60-day filing review, the substantive review with PAI and BIMO inspections, and the decision: approval or Complete Response Letter. Naming the meetings and the inspections is what separates a strong answer from a textbook one.

**"What is the difference between an NDA and a BLA?"**
NDA is for small-molecule drugs under FD&C Act 505 and 21 CFR 314; the standard is substantial evidence of effectiveness and safety. BLA is for biologics under PHS Act 351 and 21 CFR 601; the standard is safe, pure, and potent. Biologics carry heavier Module 3 expectations around comparability, potency, impurities, and viral safety. Then note that most therapeutic proteins are biologics following the 2009 BPCI Act transition.

**"Explain the four expedited programs."**
Separate development designations (Fast Track, Breakthrough) from approval-and-review mechanisms (Accelerated Approval, Priority Review). Stress that accelerated approval relies on a surrogate endpoint and requires a confirmatory trial, with the agency's withdrawal authority strengthened in 2023. Mention that they stack.

**"What is the PDUFA clock for a new molecular entity on priority review?"**
Six months after the 60-day filing review, so roughly eight months from submission. Adding the filing-period nuance shows real exposure.

**"What happens after a Complete Response Letter?"**
The sponsor addresses the deficiencies and resubmits; the resubmission is classified Class 1 (two-month review goal) or Class 2 (six-month goal) by the extent of new review needed. A CRL is not a rejection of the program, it is a list of what stands between the application and approval.

**"What does QA actually own across this pathway?"**
GLP audits before the IND, GCP and site audits before the marketing application, CMC and data-integrity oversight feeding Module 3, and mock inspections ahead of the PAI and BIMO. The throughline is that QA produces the evidence that the data in every module will survive inspection.

---

## Practical tips

- Build a single development timeline that overlays the clinical phases, the CMC milestones, and the agency meetings on one page. The CMC track is almost always underestimated, so put process validation and stability on the critical path early.
- Treat every agency meeting as a chance to remove future deficiencies. Prepare specific questions, bring the data, and document the agreements; minutes from these meetings are referenced for years.
- Keep the IND living and tidy. Amendments and safety reports filed cleanly during development become the backbone of the eventual marketing application.
- For biologics, start comparability planning the moment you change anything in the process. The gap between clinical and commercial material is a classic BLA delay.
- Rehearse the PAI and BIMO before they happen. A mock inspection finds the audit-trail gap or the missing source document while you can still fix it. See [mock-inspection-program](/articles/mock-inspection-program).

### Related reading

- [ectd-submission-architecture](/articles/ectd-submission-architecture)
- [bla-readiness-data-package](/articles/bla-readiness-data-package)
- [health-authority-meetings](/articles/health-authority-meetings)
- [ich-e6-good-clinical-practice](/articles/ich-e6-good-clinical-practice)
- [ich-e8-e9-trial-design-statistics](/articles/ich-e8-e9-trial-design-statistics)
- [glp-21-cfr-58-nonclinical](/articles/glp-21-cfr-58-nonclinical)
- [gmp-for-investigational-products-annex-13](/articles/gmp-for-investigational-products-annex-13)
- [fda-inspection-readiness](/articles/fda-inspection-readiness)
- [gcp-audits-and-inspections](/articles/gcp-audits-and-inspections)
- [stability-programs-ich](/articles/stability-programs-ich)
