---
title: "Clinical Statistical Programming and TLF Validation"
description: "How double programming, ADaM dataset and TLF validation, end-to-end traceability, version control, and the SAP linkage produce tables, listings, and figures that can be reproduced and defended in an inspection."
pubDate: 2026-06-22
tags: ["clinical-gcp", "statistical-programming", "adam", "sdtm", "data-integrity", "validation", "traceability", "version-control"]
pillar: "clinical-gcp"
tier: "Advanced"
---

A clinical study report stands on a few hundred tables, listings, and figures. The primary efficacy table, the demographics table, the adverse event summaries, the Kaplan-Meier curve in the protocol's lead endpoint. Every one of those outputs is the end of a chain that starts at a case report form entry at a site and runs through collected data, analysis datasets, and statistical code before it lands as a number on a page. If any link in that chain cannot be reproduced or traced, the number on the page is an assertion, not a result. That is a study-integrity problem, and it is exactly what a GCP inspector or a statistical reviewer at a health authority is trained to pull apart.

This article covers how statistical programming is validated so the outputs hold up: double or independent programming, validation of ADaM analysis datasets and of the tables, listings, and figures (TLFs) themselves, traceability from raw data through analysis to the report, version control of code and outputs, and how all of it ties back to the statistical analysis plan. If you are coming to this from the data side, read [clinical data management, EDC build, edit checks, and CDISC standards](/articles/clinical-data-management-cdisc) first, because the SDTM datasets that feed this work are built there. If you want the statistical framing, [ICH E8(R1) and E9 trial design and statistics](/articles/ich-e8-e9-trial-design-statistics) sets up the estimands and analysis-population thinking that the SAP turns into code.

---

## Where Statistical Programming Sits in the Data Chain

The flow from a site to a study report is a series of transformations, each of which can introduce an error. The programming group owns the middle of it.

<div class="flow">
  <div class="flow-step">Site CRF entry</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">EDC / clinical database</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">SDTM (tabulation)</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">ADaM (analysis)</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">TLFs</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">CSR / submission</div>
</div>

SDTM (the Study Data Tabulation Model) is a near-verbatim, standardized representation of what was collected. ADaM (the Analysis Data Model) is the analysis-ready layer: it carries derived variables, analysis flags, treatment-emergent indicators, baselines, and change-from-baseline values, structured so that a table can be produced with minimal further computation. The TLFs are generated from ADaM. The statistical analysis plan (SAP) governs what every one of those derivations and tables is supposed to be.

The reason this layering matters for validation is that it forces the analysis logic into a place you can inspect. A reviewer should be able to point at any cell in the primary efficacy table and walk it back to the ADaM records that produced it, then back to the SDTM records, then back to the CRF. If the derivation logic is buried inside the table program instead of living in a defined ADaM variable, that walk-back breaks. CDISC's ADaM standard exists in part to make analyses traceable, and the FDA requires CDISC-conformant standardized data for most submissions through the Study Data Technical Conformance Guide. Traceability is not a nice-to-have here; it is a stated design goal of the standard you are required to use.

---

## Double Programming and Independent Validation

### Why it is required

There is no regulation that says the words "double programming." What the regulations say is that data used to support conclusions must be accurate and reliable. ICH E6(R2) requires the sponsor to have systems with procedures that assure the quality of every aspect of the trial, and Section 5.5.3 requires, for electronically handled data, that the systems be validated and that there is an ability to identify and reconstruct changes. ICH E9 requires the planned analysis to be carried out as specified. The risk these create is concrete: a single programmer working alone can misread a SAP shell, apply the wrong analysis population, miscount a denominator, or carry a derivation error straight into the primary endpoint, and there is nothing in a one-person workflow to catch it before it reaches the CSR.

ICH E6(R2) Section 5.5.3(a) directs the sponsor, for electronic data processing systems, to confirm and document that the system meets the sponsor's defined requirements for completeness, accuracy, reliability, and consistent intended performance, which is the guideline's working definition of validation.

Independent programming is the operational answer. Two programmers, working from the same specification but writing separate code without seeing each other's logic, should arrive at identical output. When they do, the agreement is evidence that the output reflects the specification and not one person's interpretation of it. When they disagree, you have found a defect before it shipped, which is the entire point.

### What independent means

The strength of the control depends on how independent the second program really is. There is a spectrum, and you should know where your study sits on it.

| Approach | What the validator does | Strength |
|---|---|---|
| Code review only | Reads the production code, checks logic against the SAP | Weak. Shares the original programmer's blind spots. |
| QC against output | Independently checks selected numbers by hand or in a spreadsheet | Moderate. Good for spot checks, not full coverage. |
| Independent double programming | Writes a fully separate program from the spec, no sight of production code, compares output | Strong. Two independent interpretations must converge. |

For the primary and key secondary efficacy outputs, for the analysis datasets that feed them, and for anything in the submission's safety summaries, the expectation in practice is full independent double programming. The two programmers must not share code, must not talk each other into a shared (possibly wrong) reading of an ambiguous SAP rule, and ideally should not even use the same starting template if the template itself could carry a defect. The comparison between their outputs is then automated, usually with a dataset compare utility such as PROC COMPARE in SAS or an equivalent in R or Python, so that the match is documented rather than eyeballed.

### How to run it, step by step

1. **Fix the specification first.** The SAP and the table shells must be approved and under version control before programming starts. Programming against a moving specification is how two programmers end up validating different things.
2. **Assign two independent programmers.** One produces the production output. The other produces the validation output. Record both assignments. They report the work, not to each other.
3. **Both program from the spec, not from each other.** The validator does not open the production code. This is the rule that makes the control real, and it is the one most often quietly broken under deadline pressure.
4. **Compare programmatically.** Run an automated compare of the two datasets or the two output files. A clean compare (zero unequal values, same number of observations, same variable attributes) is the pass condition. Save the compare log as evidence.
5. **Reconcile every difference.** Each discrepancy is investigated until you know which program was right and why. The fix goes into whichever program had the defect, and the compare is rerun. Document the discrepancy, the root cause, and the resolution.
6. **Sign off.** A reviewer who is neither of the two programmers confirms the compare is clean, the discrepancy log is closed, and the output matches the approved shell, then signs the validation record.

### Acceptance criteria

Independent validation is complete for a given output when: the production and validation programs were written from the approved spec without code sharing; the automated compare shows no unequal values, equal observation counts, and matching key variable attributes; every discrepancy raised during the cycle has a documented root cause and resolution; the final output matches the approved shell exactly in structure, titles, footnotes, and decimal precision; and a third person has signed the validation record. A compare that "matches except for rounding" is not a pass. Rounding differences mean the two programs implemented the SAP's rounding rule differently, and one of them is wrong.

### Worked example

A study's primary endpoint is the proportion of responders at Week 24 in the ITT population, with response defined in the SAP as a 50 percent or greater reduction from baseline in a composite score, treating any subject who discontinued before Week 24 as a non-responder.

The production programmer derives an ADaM responder flag (`AVALC = "Responder"`) and produces the table: 41.2 percent on treatment, 22.7 percent on placebo. The validation programmer, working only from the SAP, writes separate code and gets 41.2 percent on treatment but 24.1 percent on placebo. The compare flags the placebo arm.

Reconciliation finds the cause. The production program counted three placebo subjects who discontinued at Week 20 as non-responders correctly, but also dropped two subjects who had a Week 24 visit recorded slightly outside the visit window, excluding them from the denominator. The SAP's non-responder-imputation rule says all randomized ITT subjects stay in the denominator regardless of visit timing. The validation program kept them in. The production program was wrong; the denominator was understated, which inflated the placebo response rate and shrank the treatment difference. The fix corrects the denominator logic, the compare reruns clean at 41.2 versus 22.7, and the discrepancy log records a visit-window handling defect against the SAP's imputation section. Without the second program, a wrong primary endpoint difference goes into the CSR.

---

## Validating ADaM Datasets

### Why the analysis layer gets its own validation

ADaM datasets carry the derived variables that the tables read directly: baseline values, change from baseline, treatment-emergent flags, analysis flags such as `ANL01FL`, population flags such as `ITTFL` and `SAFFL`, and parameter-level records in the BDS (Basic Data Structure) layout. If a derivation is wrong in ADaM, every table built on that variable inherits the error, often silently. Validating only the final tables, and not the datasets underneath, leaves the derivations untested at the layer where most of the analysis logic actually lives. The risk is a systematic error propagating across dozens of outputs from a single bad variable.

### What conformance and correctness mean here

There are two separate questions for an analysis dataset, and you have to answer both.

- **Conformance:** does the dataset follow the ADaM standard structurally? Correct variable naming, correct metadata, valid BDS or ADSL structure, a Define-XML that describes it accurately, and clean output from a conformance checker (Pinnacle 21 / CDISC conformance tooling is the common choice). Conformance is necessary for the submission to be accepted by the FDA's data fitness checks, but it does not tell you the numbers are right.
- **Correctness:** are the derived values actually what the SAP specifies? A dataset can be perfectly conformant and still carry a wrong baseline definition or a mis-flagged analysis population. Correctness is established by independent programming of the derivations and by targeted QC against the SDTM source.

### How to validate ADaM, step by step

1. **Specify the dataset.** An ADaM specification (often an ADaM spec spreadsheet or the Define-XML metadata) states, variable by variable, the derivation, the source, the controlled terminology, and any algorithm. This is the spec the independent programmer works from.
2. **Run the conformance checker.** Resolve every error and account for every warning with a documented rationale. Warnings are not automatically acceptable; each one needs an explicit "expected because" note.
3. **Independently reproduce key derivations.** Baseline, change from baseline, treatment-emergent flag, and every population and analysis flag get independent programming or documented QC against SDTM. These are the high-risk derivations.
4. **Trace a sample of records end to end.** Pick subjects and walk specific ADaM values back to their SDTM origin and forward into the tables. This confirms the traceability the standard is supposed to provide actually holds in your build.
5. **Validate Define-XML against the data.** The Define-XML must describe the datasets as they actually are, including value-level metadata and derivations. A Define that drifts from the data is a common reviewer complaint.
6. **Document and sign.** Conformance report clean, derivation QC closed, traceability sample passed, Define reconciled, then sign.

### Acceptance criteria

The ADaM layer is validated when the conformance checker is clean (errors zero, warnings each justified), every high-risk derived variable (baseline, change, treatment-emergent, all population and analysis flags) has been independently reproduced or QC'd against SDTM with documented agreement, a record-level traceability sample passes from SDTM to ADaM to TLF, the Define-XML matches the datasets including value-level metadata, and the validation record is signed by someone independent of the production programmer.

### Worked example

In ADLB (the analysis dataset for labs), `BASE` is specified in the SAP as the last non-missing assessment on or before first dose. The production program derives `BASE` using the last assessment with a study day less than or equal to 1. The independent programmer, reading the same SAP line, uses the actual datetime of first dose from ADSL rather than study day 1, because some subjects were dosed in the afternoon after a morning lab draw on the same calendar day. For those subjects the two programs disagree on which value is baseline.

The compare flags the affected subjects, reconciliation confirms the datetime approach matches the SAP's "on or before first dose" wording, the production program is corrected to use the dose datetime, and change-from-baseline across every lab table is now correct. Had only the final tables been validated, and had the table-level QC not happened to land on one of these subjects, the wrong baseline would have shifted every change-from-baseline value for that handful of subjects across the safety package.

---

## Validating Tables, Listings, and Figures

### Why TLFs need explicit validation beyond the datasets

Even with validated datasets, the TLF program can still get the presentation wrong: a misapplied population subset, a wrong denominator, transposed treatment columns, a footnote that no longer matches the analysis, decimal precision that does not match the shell, or a figure whose axis or censoring marks misstate the data. The TLF is what the reviewer reads. A correct dataset behind a wrong table is still a wrong table.

### What "validated TLF" means

A validated TLF is one where the output matches its approved shell exactly, the numbers reproduce under independent programming, and the titles, footnotes, population labels, and denominators are all consistent with the SAP and with the data. Listings get particular attention for completeness: a listing that silently drops records is worse than one that is obviously incomplete, because it looks finished.

### How to validate TLFs, step by step

1. **Lock the shells.** The table shells (with titles, column structure, footnotes, and decimal places) are approved and version-controlled as part of the SAP package before production.
2. **Independently program the high-risk outputs.** Primary and key secondary efficacy tables, the main safety summaries (AE overview, AEs by SOC/PT, deaths, SAEs, discontinuations), and disposition get full independent double programming with an automated compare.
3. **QC the remainder against defined criteria.** Lower-risk descriptive tables and many listings can use documented QC (independent number checks, denominator checks, cross-table consistency) rather than full double programming, with the risk basis written down.
4. **Check cross-output consistency.** The N in the demographics table, the disposition table, and the population-flag counts must agree. Subject counts that disagree across tables are a classic finding.
5. **Validate figures deliberately.** For a Kaplan-Meier figure, confirm the number at risk, the censoring marks, the median estimates, and the axis ranges against the corresponding table. A figure is data, not decoration.
6. **Reconcile footnotes and titles to the SAP.** Footnotes describing the analysis must still be true after any SAP amendment. Stale footnotes are an easy and common error.
7. **Sign off** once compares are clean, QC is closed, cross-output consistency holds, and outputs match the shells.

### Acceptance criteria

A TLF deliverable passes when high-risk outputs have a clean independent compare; lower-risk outputs have documented QC with a written risk rationale; every output matches its approved shell in structure, titles, footnotes, and decimal precision; subject counts and denominators reconcile across all related outputs; figures reconcile to their companion tables; and the deliverable is signed by an independent reviewer.

### Worked example

The AE overview table reports 142 subjects with at least one treatment-emergent adverse event in the safety population. The AEs-by-preferred-term table, when its unique subject counts are summed and de-duplicated, implies 145 subjects with at least one TEAE. The two should match.

Reconciliation finds that the overview table applied the treatment-emergent flag at the record level but counted subjects using a population subset that excluded three subjects who were randomized but flagged as major protocol deviations, while the by-PT table used the full safety population per the SAP. The SAP defines the safety population without the deviation exclusion. The overview table's subset was wrong. The fix aligns the overview to the safety population, both tables read 145, and the cross-table inconsistency that a reviewer would have caught is closed before delivery.

---

## Traceability: Raw Data to Report

### Why traceability is the spine of the whole thing

Reproducibility and traceability are different claims. Reproducible means you can run the code again and get the same output. Traceable means you can follow any reported number back to the data that produced it and forward from any raw value to where it ended up. ICH E6(R2) Section 5.5.3 supports this: sub-item (b) calls for SOPs covering how the electronic systems are used, and sub-item (c) requires those systems to record any change to entered data without deleting the original value, so an audit trail, data trail, and edit trail are retained. Together they mean the path from a reported value back to its source can be reconstructed. The FDA's data integrity expectations and the CDISC traceability principle both push the same way. The risk when traceability breaks is that you cannot defend a number under questioning, and an indefensible primary endpoint can sink a submission.

### What end-to-end traceability requires

Two directions have to work:

- **Backward:** from a TLF cell, to the ADaM records, to the SDTM records, to the CRF / source. The ADaM `--SEQ`, `USUBJID`, and parameter variables, plus the Define-XML derivation metadata, are what let you trace this path.
- **Forward:** from a raw or collected value, to its SDTM representation, to the ADaM derivation it feeds, to the outputs that use it.

The connective tissue is metadata. The SAP describes the analysis, the ADaM spec and Define-XML describe each variable's derivation and source, the program headers reference the SAP section and shell they implement, and the output footers carry the program name, run date, and dataset version. When all of these line up, anyone can follow the chain end to end. When they drift apart, traceability is asserted in an SOP but absent in the deliverable.

### How to build and prove traceability, step by step

1. **Carry source references in ADaM.** Keep the SDTM linkage (subject, sequence, parameter) so each analysis record points back to its tabulation source.
2. **Document derivations in Define-XML, including value-level metadata.** The Define is the map. It has to be accurate, not aspirational.
3. **Header and footer every program and output.** Program headers cite the SAP section and the shell ID. Output footers carry the source program, dataset name and version, and the generation timestamp.
4. **Run a documented traceability check.** For a sample of outputs, perform the backward walk and confirm it lands on real source records. Keep the evidence.
5. **Keep the analysis reproducible from archived inputs.** Archive the exact ADaM datasets, the programs, the SAP version, and the run environment so the outputs can be regenerated years later if a reviewer asks.

### Acceptance criteria

Traceability is demonstrated when a reviewer can take any primary or key secondary output and walk it back through ADaM to SDTM to source without verbal help; the Define-XML accurately describes every derivation including value-level metadata; programs and outputs carry headers and footers that identify the SAP section, shell, source program, and dataset version; and the analysis can be regenerated from archived datasets, code, and a documented environment.

---

## Version Control of Code and Outputs

### Why version control is a data-integrity control, not a convenience

If you cannot say which version of which program produced which output from which dataset, you cannot prove the deliverable in the CSR is the one that was validated. That is a reconstruction failure, and reconstruction is exactly what an inspector tests. Uncontrolled programming is also how a fixed defect quietly comes back: someone reruns an older copy of a program, regenerates a table, and the corrected logic is gone. Version control of code, datasets, and outputs is what lets you state, defensibly, that the validated output and the delivered output are the same thing.

### What needs to be controlled

- **Code:** every production and validation program, in a repository with commit history (Git is now common in clinical programming groups, alongside older versioned-directory practices). The history shows who changed what, when, and why.
- **Datasets:** SDTM and ADaM versions, with a clear identifier so an output can name the dataset version it consumed.
- **Outputs:** each TLF tied to the program version and dataset version that generated it, plus the run date.
- **Specifications:** the SAP, the shells, and the ADaM spec, versioned so a program can reference the exact version it implements.
- **Environment:** the software versions (for example the SAS or R version and key package versions) used for the production run, because results can shift between versions.

### How to operate it, step by step

1. **Put every program under a repository with mandatory commit messages** that reference the change reason and, where relevant, the discrepancy or change request being addressed.
2. **Baseline the inputs.** When production starts, the SAP version, shell version, and source datasets are baselined and identified. Programs reference these baselines.
3. **Control change after baseline through a change request.** A SAP amendment or a defect fix triggers a controlled change: update the program, re-run validation, regenerate affected outputs, and record the link between the change, the code commit, and the regenerated outputs.
4. **Stamp outputs.** Every output footer carries the program name, the dataset version, the environment, and the run datetime, so the output is self-identifying.
5. **Lock and archive at delivery.** At final delivery, tag the repository, freeze the datasets, and archive the complete set (programs, datasets, specs, environment, logs) so the deliverable can be reproduced.

### Acceptance criteria

Version control is adequate when every delivered output can be matched to the exact program version, dataset version, SAP version, and run environment that produced it; the repository history shows who changed each program and why; any post-baseline change ran through a documented change request that re-triggered validation and regenerated affected outputs; and the final delivery is tagged and archived so it can be regenerated. If you cannot point at a delivered table and name the program commit and dataset version behind it, this control has failed.

For the broader principles of linking requirements to evidence and keeping that link intact, [user requirements, functional/design specs, and the traceability matrix](/articles/user-requirements-and-traceability) covers the CSV-side discipline that the same thinking borrows from.

---

## The SAP Linkage

### Why the SAP is the controlling document

The statistical analysis plan is the specification for everything the programming group produces. ICH E9 requires the principal features of the analysis to be specified in advance, and the SAP is where that pre-specification lives: the analysis populations, the estimands, the handling of missing data, the multiplicity control, the exact definition of each endpoint, and the table shells. Programming that diverges from the SAP, even when the divergence "looks more correct," is an unplanned analysis. The risk is twofold: an output that does not match its specification, and a post-hoc change to the analysis that was never authorized, which a reviewer reads as potential cherry-picking.

### What the linkage looks like in practice

Every output should be traceable to a SAP section and a specific shell. Every derivation in ADaM should be traceable to a SAP definition. When the SAP is amended, the affected specs, programs, and outputs all change in a controlled way, and the amendment is dated before database lock and before unblinding wherever the timing matters. A SAP that is finalized after the data are seen, or derivations that exist in code but nowhere in the SAP, are the two failure modes that draw the hardest questions.

### How to keep programming and the SAP linked, step by step

1. **Finalize the SAP and shells before programming production outputs,** and certainly before unblinding. Version and approve them.
2. **Map every output to a SAP section and shell ID,** and every ADaM derivation to a SAP definition, in a maintained index.
3. **Route any analysis change through a SAP amendment first,** then propagate to specs, code, and outputs. Code never leads the SAP.
4. **Date and control amendments relative to lock and unblinding,** so it is always clear that pre-specified analyses were specified before the data could influence them.
5. **Reconcile at the end.** Before delivery, confirm every produced output maps to the SAP and every SAP-specified analysis was produced. Nothing extra, nothing missing.

### Acceptance criteria

The SAP linkage holds when every TLF maps to a SAP section and shell and every ADaM derivation maps to a SAP definition; the SAP and shells were approved before production and before unblinding; any analysis change went through a dated SAP amendment that then drove the code; and a final reconciliation confirms the set of outputs matches the set of SAP-specified analyses exactly.

### Worked example

During TLF production, a programmer notices that a continuous secondary endpoint is heavily skewed and proposes switching the planned ANCOVA to a rank-based analysis "because it fits the data better." The instinct is statistically reasonable and operationally wrong. The SAP specified ANCOVA. Changing the analysis after seeing the data is a post-hoc decision that a reviewer will treat as outcome-driven.

The correct path: the proposal goes to the statistician, who decides whether a SAP amendment is warranted. If the team agrees the rank-based method is genuinely better, the SAP is amended with a dated rationale, ideally before unblinding, the change is described as a sensitivity or revised primary approach as appropriate, and only then does the code change. The planned ANCOVA is still produced and reported. The audit trail of the decision is intact, and the analysis is defensible because the SAP led the code, not the other way around.

---

## Roles and Responsibilities

Clear ownership keeps the controls from collapsing into "whoever has time."

| Role | Owns |
|---|---|
| Trial statistician | The SAP, the analysis definitions and estimands, sign-off that outputs answer the planned questions, and any SAP amendment |
| Production statistical programmer | The production ADaM datasets and TLFs, the program code, and resolution of discrepancies in their code |
| Validation (independent) programmer | The independent validation programs, the automated compares, and the discrepancy log |
| Lead programmer / programming lead | Specifications, version control discipline, the validation strategy and risk tiering, and the final programming sign-off |
| Clinical data management | The SDTM datasets and the database lock that baselines the input, covered in [clinical data management and CDISC standards](/articles/clinical-data-management-cdisc) |
| Clinical QA / GCP audit | Independent assessment that the programming process, validation evidence, and traceability meet GCP, covered in [GCP audits and inspections](/articles/gcp-audits-and-inspections) |

The separation that matters most: the person who validates an output is not the person who produced it, and the person who signs the validation record is a third party. When those collapse onto one or two people under deadline, the control is theater.

---

## Common 483-Type and Inspection Findings

These are the patterns that show up in GCP inspection findings, sponsor audit reports, and statistical-reviewer queries. Read them as a pre-mortem.

- **No independent validation of key outputs.** The primary endpoint table was produced and "reviewed" but never independently programmed. The single most serious finding, because it leaves the headline result untested.
- **Validation that was not actually independent.** The validation programmer opened the production code, or both used a shared template carrying the same defect. The compare passes because both programs are wrong the same way.
- **Outputs that cannot be reproduced.** No record of which program version and dataset version produced the delivered table, so the deliverable cannot be regenerated. A reconstruction failure under direct inspection.
- **Broken traceability.** A reported number cannot be walked back to source, or the Define-XML describes derivations that do not match the data.
- **SAP finalized after the data were seen,** or derivations in code that do not appear in the SAP. Reads as post-hoc analysis selection.
- **Subject counts that disagree across tables.** Different population subsets applied inconsistently. A quick, embarrassing finding that signals deeper QC gaps.
- **Stale footnotes and titles** describing an analysis that changed in a later SAP amendment.
- **Warnings in the conformance report dismissed without rationale,** or a Define-XML that drifted from the datasets.
- **Discrepancies closed without documented root cause,** so there is no evidence the right program won the disagreement.

The connective lesson: most of these are not statistical errors. They are process and documentation failures around correct statistics, and they are exactly what an inspector can find without being a statistician. For how these surface in a GCP audit specifically, see [GCP audits and inspections](/articles/gcp-audits-and-inspections).

---

## Interview Q&A

**Q: Why double program the primary endpoint instead of just reviewing the code carefully?**
Code review shares the original programmer's blind spots. If they misread an ambiguous SAP rule, a careful read of their code can still look correct, because the reviewer is checking the implementation against the same misreading. Independent double programming forces a second person to interpret the specification from scratch and write separate code. Two independent interpretations converging on the same number is real evidence; one person checking their own logic is not.

**Q: What is the difference between reproducibility and traceability?**
Reproducibility means you can rerun the code on the same inputs and get the same output. Traceability means you can follow any reported number back to the source data and forward from any source value to the outputs that use it. You need both. A study can be reproducible (rerun the program, get the table) and still not traceable (you cannot show where a specific cell's number came from in the source).

**Q: A programmer wants to change the planned analysis because the data are skewed. What do you do?**
Stop, and route it to the statistician, not into the code. Changing the analysis after seeing the data is post-hoc and reads as outcome-driven to a reviewer. If the alternative method is genuinely warranted, it goes through a dated SAP amendment, ideally before unblinding, with the rationale documented, and the planned analysis is still produced. The SAP leads the code, never the reverse.

**Q: How do you validate an ADaM dataset, not just the final tables?**
Two questions, both answered. Conformance: run the CDISC conformance checker, resolve errors, justify warnings, and confirm the Define-XML matches the data. Correctness: independently program or QC the high-risk derivations (baseline, change from baseline, treatment-emergent flag, population and analysis flags) against SDTM, and trace a sample of records end to end. Validating only the tables leaves the derivation logic, which is where most of the analysis lives, untested.

**Q: An inspector asks you to show how the number in the primary efficacy table was produced. Walk me through it.**
Identify the output footer, which names the source program, dataset version, and run date. Open that program, which references the SAP section and shell. Show the ADaM records that feed the cell using the subject and sequence keys, then the SDTM records behind them via the Define-XML derivation, then the CRF or source. Then show the validation record: the independent program, the clean compare, the closed discrepancy log, and the third-party sign-off. If every step is documented, the number defends itself.

**Q: Why is version control a data-integrity issue and not just good engineering?**
Because the regulator's question is "is the table in the CSR the one you validated?" Without version control of code, datasets, and outputs, you cannot prove the delivered output came from the validated program and the locked dataset, and you cannot prevent an old program being rerun and silently undoing a fix. It is the control that lets you state, defensibly, that validated and delivered are the same artifact.

---

Statistical programming validation is where the trial's conclusions either become defensible or stay as assertions. Independent programming catches the errors a single programmer cannot see in their own work. ADaM validation tests the derivations at the layer where the analysis lives. TLF validation catches the presentation errors that sit on top of correct data. Traceability lets any number be walked back to its source, version control lets you prove the delivered output is the validated one, and the SAP linkage keeps every analysis pre-specified. Done together, they produce tables, listings, and figures that an inspector can pull apart and find whole. For the upstream foundation, start with [clinical data management and CDISC standards](/articles/clinical-data-management-cdisc).
