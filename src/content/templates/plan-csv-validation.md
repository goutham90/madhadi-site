---
title: "Computerized System Validation Plan (GAMP 5)"
description: "A plug-and-play computerized system validation plan that sets the GAMP 5 software category, the supplier assessment reliance, the deliverables, the test rigor scaled by risk under a CSA approach, the Part 11 and Annex 11 controls, roles, and acceptance, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Plan"
pillar: "csv-csa"
relatedArticles: ["gamp5-csv-framework","computer-software-assurance-fda","lims-implementation-and-validation"]
tags: ["gamp 5", "csv", "computer software assurance", "21 CFR Part 11", "annex 11", "validation plan", "risk-based testing", "supplier assessment"]
tier: "Advanced"
---

This is a ready-to-use computerized system validation plan. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your supplier assessment and risk assessment, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Computerized System Validation Plan for `<<FILL: SYSTEM NAME>>` |
| Document number | `<<FILL: VP-ID, e.g. CSVP-IT-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Validation Lead>>` |
| System / business owner | `<<FILL: role / function>>` |
| Linked summary report | `<<FILL: report number to be issued, e.g. CSVR-IT-031>>` |

## 1. Purpose

This plan defines the validation approach, deliverables, and acceptance for `<<FILL: SYSTEM NAME>>` so that the system is fit for its intended use, the electronic records it holds are trustworthy, and the validated state is maintained for the life of the system. The objective is to size the validation effort to the risk the system carries, not to apply the same effort to every system, and to record enough objective evidence that an inspector can reconstruct why the system is trusted.

## 2. Scope

This plan applies to `<<FILL: SYSTEM NAME>>` at `<<FILL: site / department>>`, including the application, its configuration, the supporting infrastructure listed in section 8, the interfaces in section 8, and the business processes the system supports. It covers initial validation through release to operation, and it names the controls that keep the system validated afterward. It does not cover `<<FILL: out-of-scope items, e.g. retired modules, separately validated interfaced systems, infrastructure qualified under a separate IQ>>`, which are governed by `<<FILL: cross-reference document numbers>>`.

## 3. System description and GxP determination

| Field | Entry |
|---|---|
| System name and version | `<<FILL: name, build/version>>` |
| Business process supported | `<<FILL: e.g. release testing, batch records, stability, training>>` |
| GxP regulation(s) applicable | `<<FILL: GMP / GLP / GCP / GDP / device>>` |
| GxP impact decision | GxP / non-GxP, with rationale: `<<FILL>>` |
| Creates, modifies, or stores electronic records used for a GxP decision | Yes / No |
| Uses electronic signatures | Yes / No |
| Deployment model | `<<FILL: on-premise / SaaS / hosted / hybrid>>` |
| Data classification (highest criticality) | `<<FILL: per data criticality assessment>>` |

If the GxP impact decision is non-GxP, this plan is not required; record the decision and stop. If GxP, continue.

## 4. GAMP 5 software category and what it drives

State the GAMP 5 category for the application, because the category sets the default level of effort and how far supplier evidence can be reused. Mixed systems are common; categorize the configured or custom parts separately and validate to the highest applicable category.

| GAMP 5 category | Description | Typical examples | Default approach |
|---|---|---|---|
| Category 1 | Infrastructure software | Operating systems, databases, middleware, network software | Record version; qualify the platform; rely on it through the application above it |
| Category 3 | Non-configured (used as supplied) | Off-the-shelf instrument firmware, simple commercial software run with default settings | Risk-based verification of intended use; heavy reliance on supplier evidence |
| Category 4 | Configured | LIMS, MES, QMS, EDMS, ERP set up with business rules and workflows | Verify the configuration against requirements; reuse supplier testing of the core product |
| Category 5 | Custom (bespoke) | In-house code, custom interfaces, custom reports, bespoke scripts | Full lifecycle including code review and design verification; least reliance on supplier |

| Field | Entry |
|---|---|
| Assigned GAMP 5 category | `<<FILL: 1 / 3 / 4 / 5, or mixed with breakdown>>` |
| Custom or bespoke elements within the system | `<<FILL: custom reports, interfaces, scripts, or "none">>` |
| Category rationale | `<<FILL: one or two sentences>>` |

## 5. Computer software assurance (CSA): scaling test rigor by risk

This plan applies a CSA, risk-based approach consistent with the FDA Computer Software Assurance guidance (finalized 24 September 2025) and GAMP 5 Second Edition. Effort follows risk: identify what each function is used for, assess the patient, product, and data risk of that function failing undetected, then choose the lightest assurance activity that gives the right confidence. The point is more evidence where it matters and less ceremony where it does not, not less rigor overall.

### 5.1 Risk assessment basis

Functions are risk-assessed in the risk assessment referenced in the header attachments, using `<<FILL: risk method, e.g. ICH Q9 / FMEA / process-risk class>>`. Each function gets an intended-use statement, a severity of harm if it fails undetected, and a likelihood that the failure would not be caught by another control. The resulting risk class sets the assurance activity and the test rigor below.

### 5.2 Assurance activity by risk class

| Risk class | Assurance activity | Test rigor and evidence |
|---|---|---|
| High (direct impact on patient safety, product quality, or a GxP record/decision with no downstream catch) | Scripted testing | Pre-approved scripts with expected results, step-by-step execution, captured objective evidence (screenshots / reports), independent review |
| Medium (GxP relevance but with a detecting control downstream, or limited impact) | Unscripted or limited scripted testing | Documented exploratory or limited scripted testing against requirements, recorded outcome and tester, evidence proportionate to risk |
| Low (no GxP record impact, supports but does not decide) | Ad hoc testing or supplier reliance | Recorded confirmation of intended use; rely on supplier evidence where assessed adequate |

State the rigor decision per function in the traceability matrix (section 7) so the link from risk to test depth is auditable.

## 6. Supplier assessment and reuse of supplier evidence

How far supplier testing and documentation can replace your own testing depends on the GAMP 5 category and the outcome of a supplier assessment. Reuse is allowed and encouraged where the supplier's quality system is adequate; it is not a blanket waiver.

| Field | Entry |
|---|---|
| Supplier name and product | `<<FILL>>` |
| Supplier assessment performed | Audit / postal questionnaire / documentation review / reliance on prior audit |
| Assessment reference and date | `<<FILL: report number, date>>` |
| Supplier quality system found adequate | Yes / No / Conditional, with conditions: `<<FILL>>` |
| Supplier evidence to be reused | `<<FILL: e.g. design specs, FAT/SAT records, standard test results, release notes>>` |
| Your testing focus given that reuse | `<<FILL: configuration, your data, your integrations, your business rules>>` |
| Hosted/SaaS controls obtained | `<<FILL: SOC 2 / ISO 27001 report, qualification of the hosting, change notification agreement, or N/A>>` |

For configured (category 4) and custom (category 5) systems you still verify the configuration and any bespoke elements yourself, even where the core product carries strong supplier evidence. For hosted or SaaS systems, confirm the supplier's change notification and that you receive enough notice to assess and re-test changes before they reach production.

## 7. Deliverables and lifecycle

Deliverables are scaled to the GAMP 5 category and risk. The set below is the default; mark any item not applicable with a recorded rationale rather than dropping it silently. A requirements-to-test traceability matrix runs through the whole set so every requirement maps to a risk class and to the test that verifies it.

| Phase | Deliverable | Applies to | Cross-reference |
|---|---|---|---|
| Plan | This validation plan | All GxP systems | This document |
| Specify | User Requirements Specification (URS) | All | `<<FILL: URS number>>` |
| Specify | Functional / configuration specification | Cat 3 (as needed), 4, 5 | `<<FILL>>` |
| Specify | Design specification | Cat 5; configured custom elements | `<<FILL>>` |
| Assess | Supplier assessment | All (proportionate) | `<<FILL>>` |
| Assess | Risk assessment (function-level) | All | `<<FILL>>` |
| Build | Configuration specification / setup record | Cat 4, 5 | `<<FILL>>` |
| Build | Code review record | Cat 5 and bespoke elements | `<<FILL>>` |
| Verify | Traceability matrix (requirement to risk to test) | All | `<<FILL>>` |
| Verify | Installation verification / IQ | All | `<<FILL>>` |
| Verify | Functional verification / OQ (scripted by risk) | All (rigor by risk) | `<<FILL>>` |
| Verify | Process / performance verification / PQ or UAT | All (rigor by risk) | `<<FILL>>` |
| Verify | Data migration verification | Where data is migrated | `<<FILL>>` |
| Release | Validation summary report | All | `<<FILL: report number>>` |
| Operate | Procedures (admin, backup/restore, DR, change, periodic review) | All | `<<FILL>>` |

Acronyms here map to GAMP terms: IQ confirms the system is installed as specified, OQ confirms functions work as specified, PQ or UAT confirms the system works in its real process with real users and data.

## 8. Infrastructure, interfaces, and environment

| Field | Entry |
|---|---|
| Infrastructure qualified | Yes / No, reference `<<FILL: IQ/infrastructure qual record>>` |
| Server / hosting environment | `<<FILL: on-prem / cloud region / SaaS tenant>>` |
| Interfaces in scope | `<<FILL: interfaced systems, direction, GxP data crossing>>` |
| Interface verification approach | `<<FILL: end-to-end data integrity check at each interface>>` |
| Test environment representativeness | `<<FILL: how test config matches production>>` |
| Time synchronization source | `<<FILL: NTP source, time zone>>` |

Interfaces that carry GxP data are tested end to end: confirm the right data crosses, unchanged, attributed, with failures handled so nothing is lost or silently altered.

## 9. Electronic records and signatures (21 CFR Part 11 and EU GMP Annex 11)

Where the system creates, modifies, or stores GxP records, or applies electronic signatures, the controls below are verified during functional testing. Cite the assessment that lists each control and where it is tested.

| Control | Requirement | Verified in |
|---|---|---|
| Access control | Unique user IDs, role-based privileges, no shared accounts, password/authentication policy | `<<FILL: OQ test ID>>` |
| Audit trail | Secure, time-stamped, computer-generated record of create/modify/delete with user, time, and reason where applicable; cannot be disabled or edited by ordinary users | `<<FILL>>` |
| Audit trail review | The system supports review of the audit trail; review is procedurally defined | `<<FILL>>` |
| Copies and retention | True and complete copies in human-readable and electronic form available for the retention period | `<<FILL>>` |
| Record protection | Records protected, backed up, and restorable for the retention period | `<<FILL>>` |
| Electronic signatures | Signature linked to its record, shows signer name, date/time, and meaning; cannot be excised or copied | `<<FILL>>` |
| Open vs closed system | System classified; if open, additional controls (encryption, additional measures) verified | `<<FILL>>` |
| Time and date controls | Independent, synchronized, secure date/time stamps | `<<FILL>>` |
| Data integrity (ALCOA+) | Records attributable, legible, contemporaneous, original, accurate, plus complete, consistent, enduring, available | `<<FILL>>` |

For SaaS and hosted systems, confirm who holds the records, how you obtain complete copies on demand, and that you can still produce records if the contract ends.

## 10. Roles and responsibilities

| Role | Responsibility |
|---|---|
| System / business owner | Owns the system, its intended use, the URS, and the operational decision to use it; ensures resources. |
| Process owner / SME | Defines requirements, performs or reviews testing for intended use, owns acceptance of fitness for purpose. |
| Validation lead | Authors this plan, owns the risk-based strategy and traceability, writes the summary report. |
| IT / infrastructure | Provides and qualifies infrastructure, manages environments, backup, restore, and disaster recovery. |
| Supplier (where used) | Provides product, supplier evidence, change notification, and support per the agreement. |
| Quality Assurance | Approves the plan, risk assessment, deviations, and report; confirms the evidence supports release. |

Independence: the person who executes a scripted test is not the sole reviewer of that test. QA approval is independent of the team that built or configured the system.

## 11. Test execution rules

1. Pre-approve scripted tests (test cases, steps, expected results) before execution for high-risk functions.
2. Record actual results and objective evidence at the point of test, contemporaneously, with tester name and date.
3. Capture evidence sufficient to reconstruct the result (screenshots, system reports, printouts), referenced to the test step.
4. Handle every test failure as a documented test incident or deviation per `<<FILL: deviation SOP-ID>>`, with root cause, correction, and any re-test; do not edit a failed result to pass.
5. An independent reviewer checks executed scripts for completeness and correctness before the result counts.
6. Unscripted and ad hoc testing still records what was tested, by whom, when, and the outcome.

## 12. Acceptance criteria

Validation is accepted, and the system released to operational use, only when all of the following are true:

- All planned deliverables for the assigned category and risk are complete, reviewed, and approved, or marked not-applicable with a recorded rationale.
- Every requirement traces to a risk class and to at least one executed test, and all high-risk functions were verified by scripted testing.
- All tests passed, or every failure has a closed incident or deviation with documented impact, correction, and re-test where needed.
- Part 11 and Annex 11 controls in section 9 are verified, or any gap has an approved, time-bound remediation or interim control.
- Operational procedures (administration, backup and restore, disaster recovery, change control, periodic review) are in place before go-live.
- The validation summary report is written, the residual risk is stated and accepted, and QA has approved release.

## 13. Maintaining the validated state

| Control | Reference |
|---|---|
| Change control for validated systems | `<<FILL: SOP-ID>>` |
| Periodic review | `<<FILL: SOP-ID, frequency by risk>>` |
| Backup, restore, and disaster recovery | `<<FILL: SOP-ID, test frequency>>` |
| Access review (recertification of users/roles) | `<<FILL: SOP-ID, frequency>>` |
| Incident, problem, and deviation handling | `<<FILL: SOP-ID>>` |
| Supplier change notification handling | `<<FILL: process / agreement reference>>` |
| Decommissioning and record retention at end of life | `<<FILL: SOP-ID>>` |

The validated state is maintained, not assumed. Each change is assessed for validation impact and re-tested to the same risk-based depth before it reaches production.

## 14. References

> 21 CFR Part 11 (electronic records and electronic signatures).
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment), where GMP applies.
> FDA Guidance, Computer Software Assurance for Production and Quality System Software (finalized 24 September 2025).
> FDA Guidance, General Principles of Software Validation (2002), where applicable.
> EU GMP Annex 11 (Computerised Systems).
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> ICH Q9, Quality Risk Management.
> ISPE GAMP 5: A Risk-Based Approach to Compliant GxP Computerized Systems, Second Edition.
> PIC/S PI 011 (Good Practices for Computerised Systems) and PIC/S PI 041 (Good Practices for Data Management and Integrity).
> 21 CFR Part 820 (QMSR), effective 2 February 2026, incorporating ISO 13485:2016 by reference, where the system supports a medical device quality system.

Confirm the current version and clause numbers of each reference before issue.

## 15. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 16. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Validation) | `<<FILL>>` | | |
| System / business owner | `<<FILL>>` | | |
| IT reviewer | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the category, CSA risk, supplier reliance, and acceptance sections completed for an example configured Laboratory Information Management System (LIMS), so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| System | LIMS, used for sample login, test specifications, result entry, and CoA generation for QC release testing (GMP) |
| GxP impact | GxP: creates and stores results used for batch release; uses electronic signatures for result approval |
| GAMP 5 category | Category 4 (configured commercial product), with two Category 5 elements: a custom CoA report and a custom interface to the chromatography data system |
| Category rationale | Core product configured with our specifications, sample types, and approval workflow; the CoA layout and the instrument interface are bespoke and validated as custom |
| Supplier assessment | Postal questionnaire plus review of the supplier's ISO 9001 certificate and test summary; assessed adequate, conditional on receiving release notes for each update |
| Supplier evidence reused | Supplier's standard product functional test summary and release notes; reduced our retesting of unchanged core functions |
| Our testing focus | Our configuration (specifications, limits, approval roles), the custom CoA report, the chromatography interface end to end, and all Part 11 controls |
| Risk classes assigned | High: result entry, specification limit enforcement, result approval e-signature, CoA generation, audit trail. Medium: sample login fields, report scheduling. Low: dashboard color preferences |
| Test rigor | Scripted tests with screenshots for all High functions and the custom report and interface; limited scripted testing for Medium; recorded confirmation for Low |
| Part 11 / Annex 11 | Unique IDs and role-based access verified; audit trail enabled and not editable by analysts, verified; e-signature shows signer, date/time, and meaning, verified; daily backup and a successful restore test recorded |
| Deviations | Two test incidents: one specification limit rounded incorrectly in the custom CoA (corrected, configuration fixed, re-tested and passed); one audit trail did not capture the reason on a manual result change (supplier patch applied, re-tested and passed) |
| Acceptance | All deliverables complete; every requirement traced to risk and test; all High functions scripted; both incidents closed with re-test; operational procedures in place; residual risk accepted; QA approved release |

In this example the team set the category honestly (configured core, two custom parts), reused supplier evidence only after a documented assessment, concentrated scripted testing on the functions that actually decide release, and treated a wrong rounding in the CoA and a missing audit trail reason as deviations to fix and re-test rather than waving them through. That sequence, category to risk to scaled testing to closed deviations to QA-approved release, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this plan prevents

- One-size-fits-all validation: the same heavy scripted testing on a low-risk dashboard and a result-deciding function, or the reverse, light testing on a high-risk function.
- GAMP 5 category not assigned, or a configured or custom system validated as if it were used out of the box, so the configuration and bespoke code are never verified.
- Supplier evidence reused with no supplier assessment on file to justify the reliance.
- Custom reports and interfaces left untested because the core product carried supplier evidence.
- Part 11 or Annex 11 controls (audit trail, unique access, e-signature meaning, backup and restore) assumed rather than tested, with no test ID to point to.
- Test failures edited to pass, or failures with no recorded root cause, correction, or re-test.
- The same person built, tested, and approved the system, with no independent review or QA approval.
- No requirements-to-test traceability, so a requirement cannot be shown to be verified.
- A validation report that releases the system but never states the residual risk that was accepted.
- The validated state never maintained: changes pushed to production, including SaaS vendor updates, with no impact assessment and no re-testing.

## How to adapt this plan

1. Set your document number, owner, summary report number, and effective date in the header.
2. Make the GxP determination in section 3 first; if non-GxP, record it and stop.
3. Assign the GAMP 5 category in section 4 for the application and for any custom elements separately, and validate to the highest category present.
4. Run the function-level risk assessment, then map each function to an assurance activity and test rigor in section 5 and carry that into the traceability matrix.
5. Complete the supplier assessment in section 6 before deciding how much supplier evidence to reuse; for SaaS or hosted systems, secure change notification in the agreement.
6. Mark any deliverable in section 7 not-applicable with a recorded rationale rather than dropping it.
7. Point every test ID in section 9 at the real OQ or UAT test that verifies the control.
8. Point the cross-references in sections 2, 11, and 13 to your real deviation, change control, periodic review, backup, and decommissioning procedures.
9. Confirm every regulation in section 14 against the current published version before issue.
