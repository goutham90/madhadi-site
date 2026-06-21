---
title: "The eCTD and Regulatory Submission Architecture: Modules 1 to 5 and Data Integrity in Filings"
description: "How the Common Technical Document and eCTD work in practice: the five modules, lifecycle sequences, publishing and validation, and the data integrity controls that keep a filing inspection-defensible."
pubDate: 2026-06-20
tags: ["ectd", "regulatory-submissions", "ctd", "data-integrity", "publishing", "quality-assurance"]
pillar: "quality-assurance"
tier: "Advanced"
---

A regulatory submission is the single largest controlled document any drug or biologic company produces. A new drug application can run into hundreds of thousands of pages across tens of thousands of files, assembled from manufacturing, nonclinical, clinical, and regulatory functions, and it has to arrive at the health authority as one navigable, validated, signed electronic object. The electronic Common Technical Document (eCTD) is the format that object takes. Get the architecture right and a reviewer can find the genotoxicity study, the stability data, and the proposed label in seconds. Get it wrong and you draw a technical rejection at the gateway before a single reviewer reads a word of science.

This article covers the CTD pyramid and the five modules, the eCTD specification and folder structure, lifecycle operations and sequences, publishing and validation, and the data integrity controls that determine whether the submission is trustworthy. The goal is that you can sit in a submission planning meeting, run a publishing QC, defend a sequence in an inspection, and answer the interview questions a regulatory operations or quality lead will ask.

---

## The CTD and eCTD: what they are and why they exist

### The Common Technical Document

The CTD is the harmonized content and format for a marketing application, agreed under the International Council for Harmonisation as ICH M4: Organisation of the Common Technical Document for the Registration of Pharmaceuticals for Human Use. Before the CTD, a sponsor filing the same product in the US, the EU, and Japan built three structurally different dossiers. The CTD fixed the structure so the same content could be organized identically in all three regions. The current guideline is ICH M4 (R4), with content sub-guidelines M4Q (quality), M4S (safety), and M4E (efficacy).

The CTD organizes content into a pyramid of five modules. Module 1 is region-specific and sits outside the harmonized part. Modules 2 through 5 are common across regions.

### The eCTD

The eCTD is the electronic implementation of the CTD. It is defined by the ICH M8 Implementation Guide and its accompanying specification and validation criteria. The eCTD is not just "the CTD as PDFs." It is a defined folder hierarchy plus an XML backbone (the index file) that maps every leaf file to its place in the CTD, carries metadata, and records lifecycle operations. The XML backbone is what lets a reviewing tool render the whole application as a clickable table of contents and track what changed between submissions.

Two specification families matter in practice:

- **ICH eCTD v3.2.2**, the long-standing global standard, with regional implementations and regional Module 1 specifications (FDA US regional, EU M1, and others).
- **ICH eCTD v4.0**, built on the HL7 Regulated Product Submission (RPS) message standard, being phased in by region on their own timelines. Most submissions today are still v3.2.2; you should know v4.0 exists and changes the backbone technology (controlled vocabularies, two-way communication, reuse of content across submissions) without changing the underlying CTD content model.

### Why it is required

For the FDA, electronic submission in eCTD format is mandatory for NDAs, ANDAs, BLAs, and most commercial INDs under the requirements established by the FDA Safety and Innovation Act (FDASIA) Section 1136 and the agency's binding guidance, *Providing Regulatory Submissions in Electronic Format, Certain Human Pharmaceutical Product Applications and Related Submissions Using the eCTD Specifications*. A submission that is not in valid eCTD format can be refused. In the EU, eCTD is the required format for the centralised procedure and is the expected format across procedures.

The quality rationale is reviewability and traceability. A reviewer must be able to navigate, a lifecycle must be reconstructable years later, and the agency must be able to prove which file was current at any point in the review. eCTD gives all three.

---

## The five modules: what goes where

Think of the dossier as a pyramid. The base (Modules 4 and 5) holds the raw study reports. The middle (Module 3) holds the manufacturing and quality data. Module 2 holds the summaries that bridge raw data to conclusions. Module 1 holds the regional administrative wrapper.

| Module | Name | Harmonized? | Core content |
|--------|------|-------------|--------------|
| 1 | Administrative and prescribing information | No (region-specific) | Cover letter, application forms, proposed labeling, patent/exclusivity, environmental assessment, regional forms |
| 2 | Common technical document summaries | Yes | Overall summaries and overviews: QOS, nonclinical overview/summaries, clinical overview/summaries |
| 3 | Quality | Yes | Chemistry, manufacturing, and controls (CMC) for drug substance and drug product |
| 4 | Nonclinical study reports | Yes | Pharmacology, pharmacokinetics, toxicology study reports |
| 5 | Clinical study reports | Yes | Clinical study reports, datasets, literature |

### Module 1: regional administrative information

Module 1 is everything the region needs to process and act on the application that is not harmonized science. Its structure is set by each region's Module 1 specification, not by ICH M4.

What goes in it (US example): the cover letter, the FDA forms (Form FDA 356h for an NDA/BLA, 1571 for an IND, 3674 for ClinicalTrials.gov certification), the proposed prescribing information and labeling, Patent information, Debarment certification, Field Copy certification where applicable, the Pediatric Study Plan or waiver, Risk Evaluation and Mitigation Strategy materials if any, and meeting background. The EU Module 1 carries the application form, product information (SmPC, labelling, package leaflet), information about experts, environmental risk assessment, and other regional annexes.

This is where regulatory operations and regulatory affairs do most of their assembly work, and where small errors (wrong form version, mismatched application number, an unsigned 356h) cause the most preventable rejections.

### Module 2: the summaries

Module 2 is the layer reviewers read first. It contains:

- **2.1** CTD table of contents
- **2.2** Introduction
- **2.3** Quality Overall Summary (QOS), a critical summary of Module 3
- **2.4** Nonclinical Overview
- **2.5** Clinical Overview
- **2.6** Nonclinical Written and Tabulated Summaries
- **2.7** Clinical Summary (biopharmaceutics, clinical pharmacology, efficacy, safety)

The integrity risk here is consistency. Every number, conclusion, and cross-reference in Module 2 must trace to the underlying data in Modules 3, 4, and 5. A summary that states a tighter specification than the one in 3.2.S.4 or quotes a different efficacy endpoint result than the clinical study report invites a deficiency question and undermines reviewer trust in the whole dossier.

### Module 3: quality (CMC)

Module 3 is the CMC heart of the dossier, governed by ICH M4Q and the relevant ICH quality guidelines (Q8 pharmaceutical development, Q1 stability, Q3A/Q3B/Q3C/Q3D impurities, Q6A/Q6B specifications, and others). It splits into:

- **3.2.S** Drug Substance: nomenclature, structure, manufacture, characterization, control of drug substance, reference standards, container closure, stability.
- **3.2.P** Drug Product: description and composition, pharmaceutical development, manufacture, control of excipients, control of drug product, reference standards, container closure, stability.
- **3.2.A** Appendices (facilities and equipment, adventitious agents safety, excipients).
- **3.2.R** Regional information.

For a biologic, Module 3 carries the cell line history, the upstream and downstream process, viral safety, comparability, and the full analytical control strategy. This module changes constantly across the product lifecycle through variations and supplements, so its lifecycle hygiene matters more than any other.

### Module 4: nonclinical study reports

Module 4 holds the actual GLP study reports that Module 2.6 summarizes: primary and secondary pharmacology, safety pharmacology, pharmacokinetics, single and repeat dose toxicity, genotoxicity, carcinogenicity, reproductive and developmental toxicity, local tolerance, and other toxicity studies. The expectation is that the key studies were conducted under Good Laboratory Practice (21 CFR Part 58 in the US, OECD GLP principles elsewhere). Each study report is a leaf, structured under the M4 granularity annex.

### Module 5: clinical study reports

Module 5 holds the clinical evidence: the listing of all clinical studies, the clinical study reports (CSRs) structured per ICH E3, the case report forms and individual patient listings as appendices, the analysis datasets, and the literature references. For most modern applications the datasets follow the CDISC standards (SDTM for tabulation, ADaM for analysis) and the FDA expects them per the agency's Study Data Technical Conformance Guide. The CSR structure (E3) and the dataset standards are themselves an integrity control: a reviewer can re-derive the primary analysis from the submitted ADaM datasets, so the datasets must reproduce the result reported in the CSR and Module 2.7.

---

## The eCTD technical architecture

### Folder structure and the XML backbone

An eCTD submission on disk is a folder named for the sequence (for example `0000`) containing:

- An `index.xml` file (the eCTD backbone) and its checksum file `index-md5.txt`.
- A regional backbone (for example `us-regional.xml` or `eu-regional.xml`) for Module 1.
- A `util` folder with the DTD/stylesheet and any modified files reference.
- The `m1` through `m5` folders holding the actual content files (the leaves), arranged in the CTD subfolder hierarchy.

The `index.xml` backbone is the spine. For every leaf file it records: the CTD heading it belongs under, a title, the file path, an MD5 checksum of that file, and the lifecycle operation (new, append, replace, delete). The reviewing tool reads the backbone to build the navigable view and to apply lifecycle logic across sequences.

### Leaf files and formats

Each piece of content is a "leaf." The dominant leaf format is PDF, with specific requirements: PDF version compatibility, no security or password protection that blocks the reviewer, fonts embedded, bookmarks and hyperlinks for navigation, and a defined resolution for scanned pages. Datasets are submitted in defined transport formats (for clinical data, the formats specified in the FDA data standards catalog, currently XPT for SAS transport plus define.xml metadata). Study data carry a `define.xml` data definition file and a reviewer's guide.

Acceptance criteria for a leaf, in practice:

- The file opens, prints, and is searchable text (not a flat image where text is expected).
- Bookmarks reach the right level of granularity and hyperlinks resolve.
- The checksum in the backbone matches the actual file.
- The file is placed under the correct CTD heading with a clear, specification-compliant leaf title.
- No broken cross-document links and no orphan files outside the backbone.

---

## Lifecycle and sequences: the operations model

This is the concept most people get wrong, and the one inspectors and interviewers probe hardest.

An eCTD application is not a single submission. It is a **cumulative lifecycle** of numbered **sequences**. The first sequence is `0000` (the original application or original IND). Every later interaction (an amendment, a variation, a supplement, a response to a deficiency, an annual report) is a new sequence (`0001`, `0002`, and so on) submitted into the same application. The agency's system stitches the sequences together into a single **current view**.

### Lifecycle operations

Each leaf in a new sequence carries a lifecycle operation that tells the agency how it relates to what was submitted before:

| Operation | Meaning | Typical use |
|-----------|---------|-------------|
| new | A brand new leaf not seen before | First time a document is filed |
| replace | This leaf supersedes a specific prior leaf | Updated specification, revised label, corrected report |
| append | Add to an existing leaf without replacing it | Add a follow-up to a prior document |
| delete | Remove a prior leaf from the current view | Withdraw a document that no longer applies |

The critical mechanic: **nothing is ever physically deleted.** A `delete` or `replace` operation does not erase the old file. The old file stays in its original sequence forever; the operation only changes which file appears in the current view. This is the heart of eCTD integrity. The full history is permanent and reconstructable. An agency can always show what was current on any date and what changed.

### Worked example of a replace operation

Say the original sequence `0000` filed a drug product specification as leaf at heading 3.2.P.5.1 with a release limit for an impurity of "not more than 0.5%." Six months later you tighten the limit to "not more than 0.3%" via a variation.

- You build sequence `0003`.
- At heading 3.2.P.5.1 you place the new specification file with operation `replace`, and the backbone records that it replaces the leaf submitted in `0000`.
- After the agency loads `0003`, the current view shows the 0.3% specification. The 0.5% file still physically exists in the `0000` folder and is visible in the lifecycle history, but it is no longer the current document.

If a reviewer later asks "when did the impurity limit change and what was it before," the lifecycle answers it without anyone digging through email. That is the integrity payoff.

### Submission types and the regional wrapper

The same physical sequence mechanism carries different regulatory meanings depending on the region's metadata: an original application, an amendment, a resubmission, a Prior Approval Supplement or Changes Being Effected supplement (US), or a Type IA/IB/II variation (EU). The submission type and related metadata live in the regional backbone (Module 1), and choosing the wrong one is a common cause of a sequence being mis-routed or rejected.

---

## Publishing: how the submission gets built

"Publishing" is the process of converting authored source documents into a compliant eCTD sequence. It is a controlled, multi-step process, usually run in a dedicated publishing tool (commercial eCTD publishing and viewer software is the norm; building submissions by hand is error-prone and rare).

### Step by step

1. **Submission planning.** Regulatory affairs defines what the sequence is (type, region, application), the content plan (which leaves, under which headings), the lifecycle operations for each (new/replace/delete against prior sequences), and the timeline. A submission content plan or table of contents is the controlling document.

2. **Authoring and source control.** Source documents are written in their native tools (word processors, statistical outputs, lab reports) under document control. Templates enforce CTD-compliant structure and styles so that headings, numbering, and pagination convert cleanly.

3. **Rendering to PDF.** Source files are rendered to compliant PDF, with fonts embedded, bookmarks generated from the document structure, and internal and cross-document hyperlinks created. Rendering should be from the controlled, approved source, not from an uncontrolled copy.

4. **Hyperlinking and bookmarking.** Navigation aids are added: bookmarks to the granularity the agency expects, hyperlinks from the summaries (Module 2) to the underlying reports (Modules 3 to 5), and a working table of contents.

5. **Backbone assembly.** The publishing tool places each leaf under its CTD heading, assigns the leaf title, computes the MD5 checksum, sets the lifecycle operation, and writes the `index.xml` and regional backbone.

6. **Compilation of the sequence.** The tool produces the full folder structure for the sequence, ready for validation.

### Roles in publishing

| Role | Responsibility |
|------|----------------|
| Regulatory affairs / submission lead | Owns the content plan, regulatory strategy, submission type, and the decision on lifecycle operations |
| Authors (CMC, nonclinical, clinical SMEs) | Produce accurate, approved source documents and own the scientific content |
| Document control / QA | Ensures source documents are approved, current, and traceable |
| Regulatory operations / publisher | Renders, hyperlinks, builds the backbone, runs validation, manages the gateway transmission |
| Quality assurance | Confirms the process was followed, source-to-published fidelity, and that the right approved versions were used |

---

## Validation: proving the sequence is technically acceptable

Before a sequence goes out, it is validated against the published technical validation criteria for that region. Validation is automated by the publishing or a standalone validation tool, then reviewed by a human.

### What validation checks

Validation rules are graded by severity. The exact catalog is regional (FDA publishes its eCTD technical conformance and validation criteria; the EU publishes its eCTD validation criteria), but the categories are consistent:

- **High severity / error.** Defects that cause the agency's system to reject the sequence: a broken backbone, a checksum mismatch, a missing required file, an invalid lifecycle operation (for example a `replace` pointing at a leaf that does not exist), a corrupt PDF, an invalid sequence number, or a wrong folder structure.
- **Medium / low severity / warning.** Defects that will not block loading but are flagged: missing bookmarks, suboptimal PDF settings, broken hyperlinks, oversized files.

### Acceptance criteria for release

- **Zero high-severity errors.** This is non-negotiable. A single error-level finding can trigger a technical refuse-to-file or a gateway rejection.
- Warnings reviewed and either fixed or justified, with the justification documented.
- A human QC pass confirming the validation tool's report matches reality (validators can pass a structurally valid but scientifically wrong placement).

### Worked validation triage example

A validation report on sequence `0002` returns three findings:

| Finding | Severity | Action |
|---------|----------|--------|
| Leaf at 3.2.S.4.1 has `replace` operation but the referenced prior leaf ID is not found | High (error) | Must fix. The author moved the specification to a different heading in a prior sequence; correct the modified-file reference and rebuild |
| Two bookmarks missing in a 400-page clinical study report | Low (warning) | Fix before release; navigation matters to reviewers |
| One cross-document hyperlink from 2.7.3 to a Module 5 listing does not resolve | Medium (warning) | Fix; broken summary-to-data links erode reviewer trust |

You do not release with the high-severity finding open. Period.

### The gateway

The validated sequence is transmitted to the agency through its electronic gateway (the FDA Electronic Submissions Gateway, or the EU eSubmission Gateway / Common Repository). The gateway runs its own validation on receipt and returns acknowledgments. The final acknowledgment of successful processing is your proof of receipt and should be retained as a record. No acknowledgment, no submission, regardless of what your tool said.

---

## Data integrity in filings

A submission is a regulated record, and the ALCOA+ principles apply to it as much as to a batch record or a chromatogram. The expectations trace to the FDA data integrity guidance (*Data Integrity and Compliance With Drug CGMP, Questions and Answers*, 2018) and the equivalent expectations from other authorities (the MHRA *GXP Data Integrity Guidance and Definitions*, 2018, and the PIC/S PI 041 guidance). The submission must be **A**ttributable, **L**egible, **C**ontemporaneous, **O**riginal, **A**ccurate, and **C**omplete, **C**onsistent, **E**nduring, and **A**vailable.

### Source-to-submission traceability

The number on the page in Module 2 must be the number in the study report in Module 5 must be the number in the source dataset must be the number in the raw data. Every transcription and every rounding step is a place where integrity can break. The control is a documented chain: raw data to analysis dataset (validated programs, version controlled) to study report to summary to submission. Any selective reporting, any data that exists but was not submitted, any inconsistency between the narrative and the data, is a data integrity failure and a serious one. The completeness expectation is explicit: a sponsor cannot submit only the favorable studies and omit the rest.

### Document approval and electronic signatures

Source documents feeding a submission are approved under the company's quality system, typically with electronic signatures meeting 21 CFR Part 11 and EU Annex 11. The signed, approved version is the one that must be rendered into the submission. A common and serious failure is rendering a draft, an unapproved copy, or a version that differs from the controlled approved record.

### The submission as an enduring record

The full lifecycle (every sequence, every superseded file, the validation reports, the gateway acknowledgments) must be retained and remain readable for the legal retention period, which for a marketing application extends well beyond approval. The eCTD's never-delete model supports this: the archive is the cumulative set of all sequences, and you should be able to reconstruct the exact current view as it stood on any past date.

### Roles for submission data integrity

| Role | Data integrity responsibility |
|------|-------------------------------|
| SME author | Accuracy of the content; that the submitted figure matches the source |
| QA | That approved, current source was used; source-to-submission consistency; that nothing material was omitted |
| Regulatory operations | Fidelity of rendering, correct lifecycle operations, valid backbone, retained acknowledgments |
| Regulatory affairs | That the complete and correct content was filed and that selective reporting did not occur |
| IT / system owner | Part 11 / Annex 11 controls on the authoring, publishing, and archive systems (access control, audit trail, backup) |

---

## Common mistakes and inspection-finding patterns

These are the patterns that show up in deficiency letters, refuse-to-file actions, and inspections. None are tied to any specific company; they are the generic recurring failures.

- **Inconsistency between summary and source.** Module 2 states a number, conclusion, or specification that does not match Module 3, 4, or 5. The single most common reviewer deficiency and an integrity flag.
- **Selective or incomplete data.** A study or analysis exists but was not submitted, or only favorable results were included. This is a data integrity failure, not a formatting one.
- **Wrong or broken lifecycle operations.** A `replace` that points at the wrong prior leaf, a document filed as `new` when it should have replaced an old one (leaving two contradictory current versions), or a `delete` that removes the wrong leaf. The result is a corrupted current view, where the agency sees a document the sponsor thinks is gone or two versions of the same thing.
- **Rendering from an uncontrolled source.** The published PDF differs from the approved, signed source document.
- **Validation errors shipped anyway.** A sequence sent with a known high-severity error, causing a gateway rejection and a lost day or a refuse-to-file.
- **Module 1 administrative errors.** Wrong form version, mismatched application number across files, unsigned forms, missing required certifications.
- **Broken navigation.** Missing bookmarks, dead hyperlinks, scanned image where searchable text is required, security settings that block the reviewer.
- **No retained gateway acknowledgment.** The team believes a sequence was filed but cannot prove receipt.
- **Dataset non-conformance.** Submitted datasets do not conform to the required standards or do not reproduce the reported analysis result.
- **Granularity errors.** Content placed at the wrong CTD heading or at the wrong granularity, so the reviewer cannot find it where the structure says it should be.

---

## Interview-ready: questions and strong answers

**What is the difference between the CTD and the eCTD?**
The CTD (ICH M4) is the harmonized content and organization, the five-module pyramid. The eCTD (ICH M8) is the electronic format that implements it: a defined folder structure plus an XML backbone that maps every file to its CTD heading, carries metadata, and records lifecycle operations. CTD is what; eCTD is how it is delivered electronically.

**Which modules are harmonized and which is region-specific?**
Modules 2 through 5 are common across regions. Module 1 is region-specific (administrative and prescribing information) and follows each region's own Module 1 specification.

**What is a sequence and how does the lifecycle work?**
An application is a cumulative series of numbered sequences starting at `0000`. Every later interaction is a new sequence into the same application. Each leaf carries a lifecycle operation (new, replace, append, delete). The agency assembles all sequences into a single current view. Critically, nothing is ever physically deleted; replace and delete only change what is current. The full history is permanent.

**Why does the never-delete model matter for data integrity?**
Because it makes the dossier's history attributable and reconstructable. You can always show what was current on any date and what changed and when. That permanence is the integrity backbone of the format.

**What does eCTD validation check, and what is your release criterion?**
Validation checks the technical conformance of the sequence against the region's published criteria: backbone validity, checksums, file integrity, valid lifecycle references, folder structure, navigation. Findings are graded by severity. My hard rule is zero high-severity errors before transmission; warnings are fixed or formally justified.

**How do you ensure data integrity across a submission?**
Source-to-submission traceability: the figure on the summary page traces through the study report and the analysis dataset to the raw data, with validated, version-controlled programs in between. Render only from approved, signed source. Ensure completeness, no selective reporting. Apply ALCOA+ and Part 11 / Annex 11 controls on the authoring, publishing, and archive systems. Retain the full lifecycle and gateway acknowledgments.

**A reviewer says the specification in your Module 2 QOS does not match Module 3. What happened and how do you prevent it?**
It is a consistency failure, usually because the summary was written or finalized before a late change to the specification in Module 3, or rendered from an out-of-date source. Prevention: a source-to-summary reconciliation QC step before publishing, version control on source, and a freeze on source documents once publishing starts, with any late change routed through a controlled change to both the source and the summary.

**What is the eCTD v4.0 and why does it matter?**
It is the next-generation eCTD built on the HL7 Regulated Product Submission standard. It changes the backbone technology, adds controlled vocabularies, supports content reuse across submissions and two-way communication, and is being phased in regionally. The CTD content model underneath does not change. You should know it is coming and is region-phased; most submissions today are still v3.2.2.

---

## Practical tips

- Lock your content plan and lifecycle operations early, and treat the map of "what replaces what" as a controlled deliverable. Most lifecycle errors are planning errors, not tool errors.
- Run validation early and often, not once at the end. Build a draft sequence and validate it while there is still time to fix structural problems.
- Reconcile Module 2 against Modules 3 to 5 as a deliberate QC step with a checklist, not as an afterthought. Summary-to-source consistency is where reviewers and inspectors find the most.
- Freeze source documents when publishing starts. Late changes are the top cause of summary-source mismatches; route them through controlled change.
- Keep the gateway acknowledgments as records. Receipt is not the same as transmission.
- Never ship a high-severity validation error. A one-day delay to fix it beats a refuse-to-file or a gateway rejection.
- Know your regional Module 1 spec cold; it is where the avoidable administrative rejections live.

---

## Related reading

- [IND, NDA, and BLA Pathways](/articles/ind-nda-bla-pathways)
- [BLA Readiness Data Package](/articles/bla-readiness-data-package)
- [Clinical Data Management and CDISC](/articles/clinical-data-management-cdisc)
- [Source Data and SDV in Clinical Trials](/articles/source-data-and-sdv-clinical)
- [ICH Q12 Lifecycle Management](/articles/ich-q12-lifecycle-management)
- [Document Control Fundamentals](/articles/document-control-fundamentals)
- [Electronic Signatures Implementation](/articles/electronic-signatures-implementation)
- [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11)
- [ALCOA+ in detail](/articles/alcoa-plus-deep-dive)
- [Data Integrity Foundations](/articles/data-integrity-foundations)
- [Good Documentation Practices](/articles/good-documentation-practices)
- [FDA Inspection Readiness](/articles/fda-inspection-readiness)
