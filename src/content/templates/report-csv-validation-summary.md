---
title: "Computerized System Validation Summary Report"
description: "A plug-and-play summary report that closes the validation of a GxP computerized system: deliverables executed, results against acceptance criteria, deviations, traceability, a Part 11 and Annex 11 compliance statement, residual risk, release for use, and the periodic review interval, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Report"
pillar: "csv-csa"
relatedArticles: ["gamp5-csv-framework", "computer-software-assurance-fda", "lims-implementation-and-validation"]
tags: ["csv", "validation summary report", "21 cfr part 11", "annex 11", "gamp 5", "traceability", "release for use", "periodic review"]
tier: "Intermediate"
---

This is a ready-to-use computerized system validation summary report (CSV VSR). Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your executed protocols and deviation records, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

A CSV VSR is the closing record for a single computerized system. It does not repeat the testing; it summarizes what the validation plan called for, what was executed, the results against pre-approved acceptance criteria, every deviation and how it was resolved, the requirements-to-test traceability, and the two statements an inspector looks for in a software validation that the generic equipment report does not always carry: an explicit Part 11 and Annex 11 electronic records and signatures compliance statement, and the periodic review interval that keeps the validated state alive after go-live. An inspector reads this report first to decide whether to trust the system, then follows the trail you cite into the protocols and the traceability matrix. Write it so every claim points to evidence.

## Document control header

| Field | Entry |
|---|---|
| Document title | Computerized System Validation Summary Report for `<<FILL: system name>>` |
| Document number | `<<FILL: VSR-ID, e.g. CSV-VSR-IT-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. CSV Lead>>` |
| Linked validation plan | `<<FILL: plan number this report closes, e.g. CSV-VP-IT-031>>` |
| Site / business unit | `<<FILL: site, department>>` |

## 1. Purpose

This report summarizes the validation of `<<FILL: system name>>` performed under validation plan `<<FILL: plan number>>` and concludes on its validated state and fitness for intended use. It records the deliverables executed, the results against approved acceptance criteria, all deviations and their resolution, confirmation of requirements-to-test traceability, the system's compliance with 21 CFR Part 11 and EU GMP Annex 11, the residual risk accepted, the release statement that authorizes GxP use, and the interval at which the system will be periodically reviewed.

## 2. System description, scope, and intended use

State the boundary the conclusion covers, in the same terms the plan used. A report that claims more than the plan tested is not defensible.

| Item | Entry |
|---|---|
| System name and ID | `<<FILL: name, asset/ID>>` |
| Software version / build validated | `<<FILL: version, build number>>` |
| Supplier / product | `<<FILL: vendor and product name>>` |
| GAMP 5 software category | `<<FILL: 1 infrastructure / 3 non-configured / 4 configured / 5 custom>>` |
| GxP impact | `<<FILL: GxP yes-no and the predicate rule, e.g. 21 CFR 211, 21 CFR 58, 21 CFR 820>>` |
| Intended use (GxP functions covered) | `<<FILL: e.g. sample login, result entry and review, electronic batch record approval>>` |
| Deployment / hosting | `<<FILL: on-premise / private cloud / SaaS; name the qualified infrastructure>>` |
| Interfaces in scope | `<<FILL: instruments, ERP, LIMS, middleware interfaces validated here>>` |
| Explicitly out of scope | `<<FILL: modules, interfaces, sites not covered by this report>>` |
| Configuration baseline | `<<FILL: configuration ID, version, recipe/method version frozen at release>>` |

## 3. References

> The governing plan, specifications, supplier assessment, and risk assessment that defined this effort.

| Document | Number | Title |
|---|---|---|
| Validation plan | `<<FILL>>` | `<<FILL>>` |
| User requirements (URS) | `<<FILL>>` | `<<FILL>>` |
| Functional / configuration / design spec | `<<FILL>>` | `<<FILL>>` |
| System risk assessment | `<<FILL>>` | `<<FILL>>` |
| Supplier assessment / audit | `<<FILL>>` | `<<FILL>>` |
| Requirements-to-test traceability matrix | `<<FILL>>` | `<<FILL>>` |
| Standards and regulations | see section 13 | |

## 4. Summary of deliverables executed

List every planned deliverable and its real status. The planned-versus-executed comparison is the heart of the report: any deliverable in the plan that was not executed, and any activity not in the plan, is explained here, not buried. For a SaaS or supplier-supplied effort, name what supplier evidence you accepted and the assessment that justified accepting it.

| Deliverable | Document number | Planned | Executed | Date completed | Outcome |
|---|---|---|---|---|---|
| User requirements (URS) | `<<FILL>>` | Yes | Yes / No | `<<FILL>>` | Approved |
| System risk assessment | `<<FILL>>` | Yes | Yes / No | `<<FILL>>` | Approved |
| Supplier assessment / audit | `<<FILL>>` | Yes / N/A | Yes / No | `<<FILL>>` | `<<FILL>>` |
| Functional / configuration spec | `<<FILL>>` | Yes | Yes / No | `<<FILL>>` | Approved |
| Installation qualification (IQ) | `<<FILL>>` | Yes | Yes / No | `<<FILL>>` | `<<FILL: Pass / Pass with deviations>>` |
| Operational qualification (OQ) | `<<FILL>>` | Yes | Yes / No | `<<FILL>>` | `<<FILL>>` |
| Performance qualification (PQ) / UAT | `<<FILL>>` | Yes | Yes / No | `<<FILL>>` | `<<FILL>>` |
| Data migration verification | `<<FILL>>` | Yes / N/A | Yes / No | `<<FILL>>` | `<<FILL>>` |
| Part 11 / Annex 11 controls verification | `<<FILL>>` | Yes | Yes / No | `<<FILL>>` | `<<FILL>>` |
| Backup, restore, and disaster recovery test | `<<FILL>>` | Yes | Yes / No | `<<FILL>>` | `<<FILL>>` |
| Traceability matrix | `<<FILL>>` | Yes | Yes / No | `<<FILL>>` | Complete |
| SOPs and training | `<<FILL>>` | Yes | Yes / No | `<<FILL>>` | In place |

State any plan deviation: `<<FILL: any planned deliverable not executed, with rationale and approval, or "All planned deliverables were executed as planned.">>`

## 5. Results against acceptance criteria

Summarize execution. Counts must reconcile: executed equals passed first run plus failed or repeated, and every failed or repeated test traces to a deviation in section 6. Do not report a pass percentage that hides an unresolved failure. The test rigor should match the risk-based, critical-thinking approach in the FDA Computer Software Assurance guidance: deep, scripted testing for high-risk GxP functions, lighter unscripted or supplier-supplied evidence for low-risk function.

| Test phase | Test cases planned | Executed | Passed first run | Failed / repeated | Deviations raised | Final result |
|---|---|---|---|---|---|---|
| IQ | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| OQ | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| PQ / UAT | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Total | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

Narrative: `<<FILL: state plainly whether every acceptance criterion in the protocols was met after resolution, and call out any criterion met only by an approved change to a test step or an acceptance limit.>>`

## 6. Deviations and their resolution

Every deviation, test failure, and protocol departure raised during execution is listed here with its resolution and its impact on the conclusion. An open deviation that affects intended use blocks the release statement; an open deviation that does not must be justified and routed to an action with an owner and a due date.

| Deviation ID | Phase / test | Description | Root cause | Resolution | Impact on validated state | Status |
|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: retest, code/config fix, spec correction, procedural control>>` | `<<FILL: none / mitigated / residual risk in sec 9>>` | Closed / Open |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Closed / Open |

Open items at release: `<<FILL: list any deviation or action open at the time of release, the interim control in place, the owner, and the due date, OR "No deviations are open at the time of release.">>`

## 7. Traceability confirmation

Confirm that the requirements-to-test trail is complete and bidirectional: every GxP requirement traces forward to at least one executed test that passed, and every executed test traces back to a requirement and to its assessed risk. This is the single statement an inspector checks to know that nothing in scope went untested.

| Traceability check | Result |
|---|---|
| Every in-scope URS requirement has at least one linked test | Yes / No |
| Every high-risk GxP function has a linked test that passed | Yes / No |
| Every Part 11 / Annex 11 control requirement has a linked test | Yes / No |
| Every executed test traces back to a requirement | Yes / No |
| No requirement is left untested or test-orphaned | Yes / No |
| Traceability matrix reviewed and approved | Yes / No |

Confirmation: `<<FILL: e.g. "Traceability matrix CSV-VTM-IT-031 confirms full bidirectional coverage of all 53 in-scope requirements, including 11 Part 11 / Annex 11 control requirements; no gaps." OR describe any accepted gap and its justification.>>`

## 8. Part 11 and Annex 11 compliance statement

This is the section a CSV report carries that a plain equipment report often does not. Confirm, control by control, that the system meets the electronic records and electronic signatures expectations, with the test or evidence that proves each one. Mark a control N/A only with a stated reason (for example, the system uses no electronic signatures). This table is the evidence that supports the single compliance sentence below it.

| Control | Requirement source | Implemented | Verified by (test / evidence) |
|---|---|---|---|
| Audit trail: secure, time-stamped, captures who, what, old and new value, when, and why for create, change, delete | 21 CFR 11.10(e); Annex 11 section 9 | Yes / No / N/A | `<<FILL: test ID>>` |
| Audit trail cannot be disabled or edited by ordinary users | 21 CFR 11.10(e); Annex 11 section 9 | Yes / No / N/A | `<<FILL>>` |
| Access control: unique user IDs, role-based privileges, no shared accounts | 21 CFR 11.10(d), 11.10(g); Annex 11 section 12 | Yes / No / N/A | `<<FILL>>` |
| Authority checks limit functions to authorized individuals | 21 CFR 11.10(g) | Yes / No / N/A | `<<FILL>>` |
| Electronic signature components: identity, meaning of signing, link to record, not transferable | 21 CFR 11.50, 11.70, 11.200 | Yes / No / N/A | `<<FILL>>` |
| Records are accurate, complete, and retrievable for the retention period, with human-readable copies | 21 CFR 11.10(b), 11.10(c); Annex 11 sections 7 and 8 | Yes / No / N/A | `<<FILL>>` |
| Accurate and complete copies for inspection (export / report) | 21 CFR 11.10(b); Annex 11 section 8 | Yes / No / N/A | `<<FILL>>` |
| Backup, restore, and data retention verified | Annex 11 section 7.2 | Yes / No / N/A | `<<FILL>>` |
| Time and date synchronized to a controlled source; time zone defined | Annex 11 section 9 | Yes / No / N/A | `<<FILL>>` |
| Data integrity across interfaces: built-in accuracy checks for data entered and transferred | 21 CFR 11.10(h); Annex 11 section 5 | Yes / No / N/A | `<<FILL>>` |
| Operational system / sequencing checks where order of steps matters | 21 CFR 11.10(f) | Yes / No / N/A | `<<FILL>>` |

Compliance statement: `<<FILL: e.g. "The system meets the applicable requirements of 21 CFR Part 11 and EU GMP Annex 11 for the intended use. All controls above are implemented and verified, except [list any N/A with reason]. The system is suitable to create and retain GxP electronic records [and apply electronic signatures].">>`

## 9. Residual risk

State the risk that remains after validation, drawn from the risk assessment and from any deviation resolved by a control rather than a fix. A report that claims zero residual risk is rarely believed; name what remains, the control that holds it, and who owns the control.

| Residual risk | Source (risk ID / deviation) | Control / mitigation in place | Owner | Acceptable for release |
|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL: periodic review, procedural control, monitoring, planned next phase>>` | `<<FILL>>` | Yes / No |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Yes / No |

Overall residual risk statement: `<<FILL: e.g. "Residual risk is reduced to acceptable by the controls above and is acceptable for the intended use." Quality Assurance confirms acceptance.>>`

## 10. Procedures, training, and ongoing controls

A computerized system is not validated for use until the people, procedures, and operational safeguards around it are ready. Confirm the controls that hold the validated state after release.

| Item | Status |
|---|---|
| Operating / user SOPs approved and effective | `<<FILL: SOP-IDs>>` |
| Administrator, backup, restore, and DR procedures in place | `<<FILL: SOP-IDs>>` |
| Users and administrators trained, training recorded | `<<FILL: complete / list pending>>` |
| User access list reviewed and approved at go-live | `<<FILL: date / record>>` |
| Audit trail review procedure and frequency defined | `<<FILL: SOP-ID and frequency>>` |
| Change control applies to all further changes | `<<FILL: change control SOP-ID>>` |
| Service / quality agreement in place (if hosted or outsourced) | `<<FILL: agreement reference or N/A>>` |

## 11. Conclusion, release for use, and periodic review interval

State the conclusion in one defensible sentence, qualify it, release the system, and set the date the validated state will be re-confirmed. The conclusion must be supported by every section above; do not conclude "validated" if a section 6 deviation, a section 7 gap, or a section 8 control is unresolved for the intended use.

**Conclusion on validated state:** `<<FILL: e.g. "Based on the deliverables executed, the results against acceptance criteria, the resolution of all deviations, confirmed traceability, and verified Part 11 / Annex 11 controls, [system] version [build] is validated and fit for its intended use within the scope of section 2.">>`

Conditions or limitations: `<<FILL: any function not validated, any environment not covered, any condition under which revalidation is required, OR "No limitations beyond the stated scope.">>`

**Release statement.** The release statement authorizes GxP use. It is dated and signed by the role that owns the disposition, normally Quality Assurance, and it is the line an inspector reads to confirm the system was approved before data was generated under it.

| Field | Entry |
|---|---|
| Released for GxP use (Yes / No) | `<<FILL>>` |
| Release effective date | `<<FILL>>` |
| Configuration baseline released | `<<FILL: configuration ID / version>>` |
| Conditions of release | `<<FILL: none, or interim controls / open actions>>` |
| Authorized by (QA) | `<<FILL: name, signature, date>>` |

**Periodic review interval.** Set the interval by the system's GxP impact and risk; a common range is one to three years, with the highest-impact systems reviewed most often. Record the basis so the interval is defensible, not arbitrary.

| Field | Entry |
|---|---|
| Periodic review interval | `<<FILL: e.g. annual / every 2 years / every 3 years>>` |
| Basis for the interval | `<<FILL: GxP impact, risk class, change frequency>>` |
| Next periodic review due | `<<FILL: date>>` |
| Governing periodic review procedure | `<<FILL: SOP-ID>>` |

## 12. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (CSV / Validation) | `<<FILL>>` | | |
| System owner / business owner | `<<FILL>>` | | |
| IT / system administrator reviewer | `<<FILL>>` | | |
| Approver (Quality Assurance) | `<<FILL>>` | | |

## 13. References (standards and regulations)

> 21 CFR Part 11 (electronic records and electronic signatures).
> EU GMP Annex 11 (Computerised Systems) and Annex 15 (Qualification and Validation), 2015 revision.
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment), for drug GMP systems.
> FDA Computer Software Assurance for Production and Quality System Software, final guidance issued 24 September 2025.
> GAMP 5 (A Risk-Based Approach to Compliant GxP Computerized Systems), second edition, for the lifecycle and software categories.
> ICH Q9 (Quality Risk Management), for the risk basis of test depth and residual-risk acceptance.
> 21 CFR Part 820 (QMSR), effective 2 February 2026, which incorporates ISO 13485:2016 by reference, for medical-device software and process validation.
> PIC/S PI 011 (Good Practices for Computerised Systems in Regulated GxP Environments).
> MHRA GxP Data Integrity Guidance and Definitions, for the data integrity expectations behind the audit trail and access controls.

Confirm the current version and clause numbers of each reference before issue.

## 14. Attachments

| No. | Attachment |
|---|---|
| 1 | Executed IQ / OQ / PQ / UAT protocols (or document numbers) |
| 2 | Requirements-to-test traceability matrix |
| 3 | Deviation records and their resolutions |
| 4 | Part 11 / Annex 11 controls verification record |
| 5 | Data migration verification record (if applicable) |
| 6 | Backup, restore, and disaster recovery test record |
| 7 | Configuration / version baseline record |
| 8 | Training completion record and approved user access list |

## 15. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

---

## Filled specimen

The following shows the core sections completed for an example chromatography data system (a GAMP 5 category 4 configured product) used for drug release testing, so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

**Header and scope.** CSV-VSR-LAB-024 v1.0, closing validation plan CSV-VP-LAB-024, for a chromatography data system (CDS), version 8.3.2, GAMP 5 category 4 (configured), predicate rule 21 CFR 211. Intended use: instrument control, acquisition, integration, result calculation, electronic review and approval of analytical results for drug substance and drug product release. Hosting: on-premise, on a qualified server. Interfaces in scope: bidirectional interface to the LIMS for result transfer. Out of scope: the long-term archive storage appliance, validated separately under CSV-VSR-IT-009. Configuration baseline: config ID CDS-CFG-024-r3.

**Deliverables executed.**

| Deliverable | Number | Planned | Executed | Outcome |
|---|---|---|---|---|
| URS | URS-LAB-024 | Yes | Yes | Approved |
| System risk assessment | RA-LAB-024 | Yes | Yes | Approved |
| Supplier assessment | SA-LAB-024 | Yes | Yes | Acceptable, audit not required |
| Configuration spec | CS-LAB-024 | Yes | Yes | Approved |
| IQ | IQ-LAB-024 | Yes | Yes | Pass |
| OQ | OQ-LAB-024 | Yes | Yes | Pass with deviations |
| PQ / UAT | PQ-LAB-024 | Yes | Yes | Pass with deviations |
| Data migration verification | DMV-LAB-024 | Yes | Yes | Pass |
| Part 11 / Annex 11 controls verification | P11-LAB-024 | Yes | Yes | Pass |
| Backup / restore / DR test | DR-LAB-024 | Yes | Yes | Pass |
| Traceability matrix | CSV-VTM-LAB-024 | Yes | Yes | Complete |

**Results against acceptance criteria.**

| Phase | Planned | Executed | Passed first run | Failed / repeated | Deviations | Result |
|---|---|---|---|---|---|---|
| IQ | 26 | 26 | 26 | 0 | 0 | Pass |
| OQ | 88 | 88 | 85 | 3 | 2 | Pass |
| PQ / UAT | 44 | 44 | 42 | 2 | 1 | Pass |
| Total | 158 | 158 | 153 | 5 | 3 | Pass |

All acceptance criteria were met after resolution. Counts reconcile: 158 executed, 153 passed first run, 5 repeated and passed on retest, all 5 traced to the 3 deviations below.

**Deviations and resolution.**

| ID | Phase | Description | Root cause | Resolution | Impact | Status |
|---|---|---|---|---|---|---|
| DEV-2026-0331 | OQ | Re-integration did not force a mandatory reason entry | Audit trail config option not set | Reason field set mandatory; 2 OQ tests repeated and passed | None after fix | Closed |
| DEV-2026-0332 | OQ | Result rounding showed 2 decimals where the method needed 4 | Configuration value wrong | Configuration corrected; 1 OQ test repeated and passed | None after fix | Closed |
| DEV-2026-0333 | UAT | LIMS interface dropped the units field on transfer of one result type | Interface mapping defect | Mapping corrected; interim manual units check until patch; 2 UAT tests repeated and passed | Residual control, see below | Closed |

**Traceability.** CSV-VTM-LAB-024 confirms full bidirectional coverage of all 53 in-scope URS requirements, including all 11 Part 11 and Annex 11 control requirements. Every high-risk function (audit trail, electronic signature, re-integration, result calculation, LIMS transfer) has at least one passed test. No requirement untested, no test orphaned.

**Part 11 and Annex 11 compliance.** All 11 controls implemented and verified under P11-LAB-024: audit trail captures who, what, old and new value, when, and reason for re-integrations and result changes and cannot be disabled by analysts; unique user IDs with role-based privileges and no shared accounts; electronic signatures carry name, date, time, and meaning and are linked to the result; records are retrievable and human-readable for the 15-year retention period; server time is synchronized to the site time source. Statement: the system meets the applicable requirements of 21 CFR Part 11 and EU GMP Annex 11 for the intended use, with no control marked N/A.

**Residual risk.**

| Residual risk | Source | Control in place | Owner | Acceptable |
|---|---|---|---|---|
| LIMS interface units patch not yet deployed | DEV-2026-0333 | Interim manual units check at result review until patch in next change | QC Manager | Yes |

**Conclusion, release, and periodic review.** Based on the deliverables executed, the results against acceptance criteria, the resolution of all 3 deviations, confirmed traceability, and verified Part 11 and Annex 11 controls, the CDS version 8.3.2 is validated and fit for its intended use within the scope of section 2. Released for GxP use as of 18 June 2026, configuration baseline CDS-CFG-024-r3, with the one interim control above and change CC-2026-0501 raised for the interface patch. Authorized by R. Gomez, QA, signed 18 June 2026. Periodic review interval: every 2 years (high GxP impact, moderate change frequency); next review due 18 June 2028, under SOP-QA-031.

In this example the report did not hide the five OQ and UAT failures; it reconciled the counts, tied each repeat to a closed deviation, proved each Part 11 control with a named test rather than a claim, carried the one item fixed by a control rather than a patch into residual risk with an owner and a change record, and only then released the system and set the review clock. That sequence, executed-versus-planned to results to deviations to traceability to a Part 11 statement to residual risk to a conditioned release with a periodic review date, is exactly what an inspector expects a CSV summary report to demonstrate.

## Common inspection findings this report prevents

- The report concludes "validated" while deviations or test failures remain open with no impact assessment.
- Test counts do not reconcile: more tests passed than were executed, or failures appear in the protocols but not in the report.
- No explicit Part 11 or Annex 11 statement, so it cannot be shown the audit trail, access controls, and electronic signatures were actually verified.
- A Part 11 control claimed as met with no test or evidence behind it, or controls marked N/A with no reason.
- A requirement in scope has no linked test, or a test has no requirement, and the gap is not acknowledged.
- The conclusion claims more than the plan tested, covering modules, interfaces, or a software version that was never qualified.
- No dated release statement signed by Quality Assurance, so it cannot be shown the system was approved before GxP data was generated under it.
- No periodic review interval set, so the validated state is never re-confirmed and quietly decays as the system is patched and reconfigured.
- Residual risk declared as zero, with no mention of the controls that resolved deviations instead of fixes.
- The configuration or software version released is not recorded, so there is no baseline to detect later drift.

## How to adapt this report

1. Set your document number, owner, linked plan number, and effective date in the header, and record the exact software version and configuration baseline in section 2.
2. Match section 2 scope to your plan word for word; if the plan changed, reconcile it here and reference the change.
3. Fill the section 4 deliverable list with your real document numbers and flag any planned deliverable not executed. For a SaaS or supplier-supplied system, name the supplier assessment and the evidence you accepted.
4. Reconcile the section 5 counts against the executed protocols before you sign; executed must equal passed first run plus repeated, and every repeat must trace to a section 6 deviation.
5. Complete the section 8 table control by control; mark a control N/A only with a stated reason, and make sure each non-N/A control names a real test ID or evidence record.
6. Carry any deviation resolved by a control, not a fix, into section 9 residual risk with an owner and a change-control reference.
7. Set the section 11 periodic review interval from the system's GxP impact and risk, record the basis, and put the next-due date in the inventory so it is not forgotten.
8. For a medical-device system keep the QMSR reference; for a non-GMP regulated use, swap the predicate rule in section 2 and the references in section 13 to match.
9. Confirm every regulation in section 13 against the current published version before issue.
