---
title: "Validation Summary Report (VSR)"
description: "A plug-and-play validation summary report that closes a validation effort: deliverables executed, results against acceptance criteria, deviations and their resolution, traceability confirmation, residual risk, the conclusion on validated state, and the release statement, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Report"
pillar: "csv-csa"
relatedArticles: ["validation-master-plan-and-periodic-review", "writing-validation-protocols-and-reports", "validation-deliverables-guide"]
tags: ["validation summary report", "vsr", "csv", "computer system validation", "traceability", "release for use", "annex 11"]
tier: "Intermediate"
---

This is a ready-to-use validation summary report. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your executed protocols and deviation records, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

A VSR is the closing record of a validation effort. It does not repeat the work; it summarizes what was planned, what was executed, what the results were against the acceptance criteria, what went wrong and how it was resolved, and whether the system or process can be declared validated and released for use. An inspector reads the VSR first to decide whether to trust the validated state, then follows the trail you cite into the protocols, the traceability matrix, and the deviation records. Write it so every claim points to evidence.

## Document control header

| Field | Entry |
|---|---|
| Document title | Validation Summary Report for `<<FILL: system / process / equipment name>>` |
| Document number | `<<FILL: VSR-ID, e.g. VSR-IT-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Validation Lead>>` |
| System / process | `<<FILL: name, ID, version/build, environment>>` |
| Linked plan | `<<FILL: validation plan number this report closes, e.g. VP-IT-031>>` |
| Site / area | `<<FILL: site, business unit>>` |

## 1. Purpose

This report summarizes the validation of `<<FILL: system / process / equipment name>>` performed under validation plan `<<FILL: plan number>>` and concludes on its validated state and fitness for intended use. It records the deliverables executed, the results against pre-approved acceptance criteria, all deviations and their resolution, confirmation of requirements-to-test traceability, the residual risk accepted, and the release statement that authorizes the system or process for GxP use.

## 2. Scope and intended use

State the boundary the conclusion covers, in the same terms the plan used. A VSR that claims more than the plan tested is not defensible.

| Item | Entry |
|---|---|
| System / process validated | `<<FILL: name, version/build>>` |
| Intended use (GxP functions covered) | `<<FILL: e.g. batch record review, sample login, result reporting>>` |
| Environment validated | `<<FILL: production environment / equipment ID / line>>` |
| GxP impact / category | `<<FILL: GxP yes-no; for software, GAMP 5 category 1/3/4/5>>` |
| Explicitly out of scope | `<<FILL: modules, interfaces, sites not covered by this report>>` |
| Configuration / version baseline | `<<FILL: configuration ID, software version, recipe/method version>>` |

## 3. References

> The governing plan, specifications, and risk assessment that defined this effort.

| Document | Number | Title |
|---|---|---|
| Validation plan | `<<FILL>>` | `<<FILL>>` |
| User requirements (URS) | `<<FILL>>` | `<<FILL>>` |
| Functional / design spec | `<<FILL>>` | `<<FILL>>` |
| Risk assessment | `<<FILL>>` | `<<FILL>>` |
| Traceability matrix | `<<FILL>>` | `<<FILL>>` |
| Standards and regulations | see section 12 | |

## 4. Summary of deliverables executed

List every planned deliverable and its real status. The "planned versus executed" comparison is the heart of the report: any deliverable in the plan that was not executed, or any test run that was not in the plan, must be explained here, not buried.

| Deliverable | Document number | Planned | Executed | Date completed | Outcome |
|---|---|---|---|---|---|
| Requirements (URS) | `<<FILL>>` | Yes | Yes / No | `<<FILL>>` | Approved |
| Risk assessment | `<<FILL>>` | Yes | Yes / No | `<<FILL>>` | Approved |
| Functional / design spec | `<<FILL>>` | Yes | Yes / No | `<<FILL>>` | Approved |
| Installation qualification (IQ) | `<<FILL>>` | Yes | Yes / No | `<<FILL>>` | `<<FILL: Pass / Pass with deviations>>` |
| Operational qualification (OQ) | `<<FILL>>` | Yes | Yes / No | `<<FILL>>` | `<<FILL>>` |
| Performance qualification (PQ) / UAT | `<<FILL>>` | Yes | Yes / No | `<<FILL>>` | `<<FILL>>` |
| Data migration verification | `<<FILL>>` | Yes / N/A | Yes / No | `<<FILL>>` | `<<FILL>>` |
| Traceability matrix | `<<FILL>>` | Yes | Yes / No | `<<FILL>>` | Complete |
| Procedures / training | `<<FILL>>` | Yes | Yes / No | `<<FILL>>` | In place |

State any plan deviation: `<<FILL: any planned deliverable not executed, with rationale and approval, or "All planned deliverables were executed as planned.">>`

## 5. Results against acceptance criteria

Summarize the test execution. Counts must reconcile: executed equals passed plus failed, and every failed or repeated test must trace to a deviation in section 6. Do not report a percentage that hides an unresolved failure.

| Test phase | Test cases planned | Executed | Passed first run | Failed / repeated | Deviations raised | Final result |
|---|---|---|---|---|---|---|
| IQ | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| OQ | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| PQ / UAT | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Total | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

Narrative: `<<FILL: state plainly whether every acceptance criterion in the protocols was met after resolution, and call out any criterion met only by an approved change to the test or limit.>>`

## 6. Deviations and their resolution

Every deviation, test failure, and protocol departure raised during execution is listed here with its resolution and its impact on the conclusion. An open deviation that affects intended use blocks the release statement; an open deviation that does not must be justified and routed to an action with an owner and due date.

| Deviation ID | Phase / test | Description | Root cause | Resolution | Impact on validated state | Status |
|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: retest, code/config fix, spec correction, procedural control>>` | `<<FILL: none / mitigated / residual risk in sec 8>>` | Closed / Open |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Closed / Open |

Open items at release: `<<FILL: list any deviation or action open at the time of release, the interim control in place, the owner, and the due date, OR "No deviations are open at the time of release.">>`

## 7. Traceability confirmation

Confirm that the requirements-to-test trail is complete and bidirectional: every GxP requirement traces forward to at least one executed test that passed, and every executed test traces back to a requirement and to its risk. This is the single statement an inspector checks to know that nothing in scope went untested.

| Traceability check | Result |
|---|---|
| Every in-scope URS requirement has at least one linked test | Yes / No |
| Every high-risk function has a linked test that passed | Yes / No |
| Every executed test traces back to a requirement | Yes / No |
| No requirement is left untested or test-orphaned | Yes / No |
| Traceability matrix reviewed and approved | Yes / No |

Confirmation: `<<FILL: e.g. "Traceability matrix VTM-IT-031 confirms full bidirectional coverage of all 47 in-scope requirements; no gaps." OR describe any accepted gap and its justification.>>`

## 8. Residual risk

State the risk that remains after validation, drawn from the risk assessment and from any deviation resolved by a control rather than a fix. A VSR that claims zero residual risk is rarely believed; name what remains, the control that holds it, and who owns the control.

| Residual risk | Source (risk ID / deviation) | Control / mitigation in place | Owner | Acceptable for release |
|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL: periodic review, procedural control, monitoring, planned phase 2>>` | `<<FILL>>` | Yes / No |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Yes / No |

Overall residual risk statement: `<<FILL: e.g. "Residual risk is reduced to acceptable by the controls above and is acceptable for the intended use." Quality Assurance confirms acceptance.>>`

## 9. Procedures, training, and ongoing controls

A system is not validated for use until the people and procedures around it are ready. Confirm the controls that keep the validated state after release.

| Item | Status |
|---|---|
| Operating / user procedures approved and effective | `<<FILL: SOP-IDs>>` |
| Users trained and training recorded | `<<FILL: complete / list pending>>` |
| Administration, backup, and restore procedures in place | `<<FILL>>` |
| Periodic review scheduled | `<<FILL: due date / interval>>` |
| Change control applies to further changes | `<<FILL: change control SOP-ID>>` |
| Security and access controls confirmed | `<<FILL>>` |

## 10. Conclusion on validated state

State the conclusion in one defensible sentence, then qualify it. The conclusion must be supported by every section above; do not conclude "validated" if a section 6 deviation or a section 7 gap is unresolved for the intended use.

`<<FILL: e.g. "Based on the deliverables executed, the results against acceptance criteria, the resolution of all deviations, and confirmed traceability, [system] is validated and fit for its intended use within the scope of section 2.">>`

Conditions or limitations on the conclusion: `<<FILL: any function not validated, any environment not covered, any condition under which revalidation is required, OR "No limitations beyond the stated scope.">>`

## 11. Release statement and authorization

The release statement is the act that authorizes GxP use. It is dated and signed by the role that owns the disposition, normally Quality Assurance, and it is the line an inspector reads to confirm the system was approved before data was generated under it.

`<<FILL: e.g. "[System], configuration baseline [ID], is released for GxP use as of [date] within the scope and conditions of this report. Further changes are controlled under [change control SOP].">>`

| Field | Entry |
|---|---|
| Released for use (Yes / No) | `<<FILL>>` |
| Release effective date | `<<FILL>>` |
| Conditions of release | `<<FILL: none, or interim controls / open actions>>` |
| Authorized by (QA) | `<<FILL: name, signature, date>>` |

## 12. References (standards and regulations)

> 21 CFR Part 11 (electronic records and signatures), where the system holds electronic GxP records.
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment), for drug GMP systems.
> EU GMP Annex 11 (Computerised Systems), 2011 revision, and Annex 15 (Qualification and Validation), 2015 revision.
> FDA Computer Software Assurance for Production and Quality System Software, final guidance issued 24 September 2025.
> GAMP 5 (A Risk-Based Approach to Compliant GxP Computerized Systems), second edition, for the lifecycle and categories.
> ICH Q9 (Quality Risk Management), for the risk basis of test depth and residual-risk acceptance.
> 21 CFR Part 820 (QMSR), effective 2 February 2026, which incorporates ISO 13485:2016 by reference, for medical-device process and software validation.
> PIC/S PI 011 (Good Practices for Computerised Systems in Regulated GxP Environments), where applicable.

Confirm the current version and clause numbers of each reference before issue.

## 13. Attachments

| No. | Attachment |
|---|---|
| 1 | Executed IQ / OQ / PQ protocols (or document numbers) |
| 2 | Requirements-to-test traceability matrix |
| 3 | Deviation records and their resolutions |
| 4 | Residual risk register entries |
| 5 | Training completion record |
| 6 | Configuration / version baseline record |

## 14. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 15. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Validation) | `<<FILL>>` | | |
| System owner / business owner | `<<FILL>>` | | |
| IT / engineering reviewer | `<<FILL>>` | | |
| Approver (Quality Assurance) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the core sections completed for an example laboratory information management system (a GAMP 5 category 4 configured product), so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

**Header and scope.** VSR-LAB-018 v1.0, closing validation plan VP-LAB-018, for a LIMS, build 7.2.1, production environment, GxP category 4 (configured). Intended use: sample login, stability scheduling, result entry and review, certificate of analysis generation. Out of scope: the instrument-integration interface to the chromatography data system, validated separately under VSR-LAB-019.

**Deliverables executed.**

| Deliverable | Number | Planned | Executed | Outcome |
|---|---|---|---|---|
| URS | URS-LAB-018 | Yes | Yes | Approved |
| Risk assessment | RA-LAB-018 | Yes | Yes | Approved |
| Configuration spec | CS-LAB-018 | Yes | Yes | Approved |
| IQ | IQ-LAB-018 | Yes | Yes | Pass |
| OQ | OQ-LAB-018 | Yes | Yes | Pass with deviations |
| PQ / UAT | PQ-LAB-018 | Yes | Yes | Pass with deviations |
| Data migration verification | DMV-LAB-018 | Yes | Yes | Pass |
| Traceability matrix | VTM-LAB-018 | Yes | Yes | Complete |

**Results against acceptance criteria.**

| Phase | Planned | Executed | Passed first run | Failed / repeated | Deviations | Result |
|---|---|---|---|---|---|---|
| IQ | 22 | 22 | 22 | 0 | 0 | Pass |
| OQ | 96 | 96 | 92 | 4 | 2 | Pass |
| PQ / UAT | 41 | 41 | 39 | 2 | 1 | Pass |
| Total | 159 | 159 | 153 | 6 | 3 | Pass |

All acceptance criteria were met after resolution. Counts reconcile: 159 executed, 153 passed first run, 6 repeated and passed on retest, all 6 traced to the 3 deviations below.

**Deviations and resolution.**

| ID | Phase | Description | Root cause | Resolution | Impact | Status |
|---|---|---|---|---|---|---|
| DEV-2026-0211 | OQ | Result-rounding displayed 2 decimals where the method required 3 | Configuration value set wrong | Configuration corrected; 3 OQ tests repeated and passed | None after fix | Closed |
| DEV-2026-0212 | OQ | Audit trail did not capture the reason for a result change | Field not made mandatory in config | Reason field set mandatory; 1 OQ test repeated and passed | None after fix | Closed |
| DEV-2026-0213 | UAT | CoA template omitted the specification version | Template defect | Template corrected; interim manual check until patch; 2 UAT tests repeated and passed | Residual control, see below | Closed |

**Traceability.** VTM-LAB-018 confirms full bidirectional coverage of all 47 in-scope URS requirements. Every high-risk function (audit trail, electronic signature, result calculation, CoA generation) has at least one passed test. No requirement untested, no test orphaned.

**Residual risk.**

| Residual risk | Source | Control in place | Owner | Acceptable |
|---|---|---|---|---|
| CoA template patch not yet deployed | DEV-2026-0213 | Interim procedural check of CoA against spec version before release, until patch in next change | QC Manager | Yes |

**Conclusion and release.** Based on the deliverables executed, the results against acceptance criteria, the resolution of all 3 deviations, and confirmed traceability, the LIMS build 7.2.1 is validated and fit for its intended use within the scope of section 2. Released for GxP use as of 18 June 2026, with the one interim control above and change CC-2026-0488 raised for the patch. Authorized by R. Gomez, QA, signed 18 June 2026.

In this example the report did not hide the four OQ and two UAT failures; it reconciled the counts, tied each repeat to a closed deviation, carried the one item that was fixed by a control rather than a patch into residual risk with an owner and a change record, and only then made the release statement. That sequence, executed-versus-planned to results to deviations to traceability to residual risk to a conditioned release, is exactly what an inspector expects a VSR to demonstrate.

## Common inspection findings this report prevents

- The VSR concludes "validated" while deviations or test failures remain open with no impact assessment.
- Test counts do not reconcile: more tests passed than were executed, or failures appear in the protocol but not in the report.
- A requirement in scope has no linked test, or a test has no requirement, and the gap is not acknowledged.
- The conclusion claims more than the plan tested, covering modules, interfaces, or environments that were never qualified.
- No dated release statement signed by Quality Assurance, so it cannot be shown the system was approved before GxP data was generated under it.
- Residual risk declared as zero, with no mention of the controls that resolved deviations instead of fixes.
- The report repeats the protocols in full instead of summarizing and citing them, so the actual conclusion and its basis are hard to find.
- A deviation closed by a procedural control with no owner, due date, or change record to make the permanent fix.

## How to adapt this report

1. Set your document number, owner, linked plan number, and effective date in the header.
2. Match section 2 scope to your plan word for word; if the plan changed, reconcile it here and reference the change.
3. Fill the section 4 deliverable list with your real document numbers and flag any planned deliverable not executed.
4. Reconcile the section 5 counts against the executed protocols before you sign; executed must equal passed plus repeated, and every repeat must trace to a section 6 deviation.
5. Carry any deviation resolved by a control, not a fix, into section 8 residual risk with an owner and a change-control reference.
6. For a process or equipment qualification rather than software, replace IQ/OQ/PQ phrasing as needed and use the equipment-qualification and process-validation references; for a medical-device process keep the QMSR reference.
7. Confirm every regulation in section 12 against the current published version before issue.
