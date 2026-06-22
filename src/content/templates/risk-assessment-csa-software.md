---
title: "Risk Assessment: CSA Software Feature Risk Assessment"
description: "A plug-and-play risk assessment that runs each software feature through the CSA four-step method, classifies direct vs indirect impact, assigns severity and probability, and selects the testing method, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Risk Assessment"
pillar: "csv-csa"
relatedArticles: ["computer-software-assurance-fda"]
tags: ["csa", "risk assessment", "csv", "validation", "gamp", "intended use"]
tier: "Advanced"
---

This is a ready-to-use feature-level risk assessment built on FDA's Computer Software Assurance four-step method. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Confirm each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | CSA Software Feature Risk Assessment for `<<FILL: SYSTEM NAME>>` |
| Document number | `<<FILL: RA-ID, e.g. RA-CSV-021>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. System Owner>>` |
| GAMP category of system | `<<FILL: 1 / 3 / 4 / 5>>` |
| Linked validation plan | `<<FILL: VP-ID>>` |

## 1. Purpose

This risk assessment determines, for each in-scope feature of `<<FILL: SYSTEM NAME>>`, how much and what kind of assurance evidence the feature needs. It does this with the four-step CSA method: identify intended use, determine risk, determine the assurance activity, and define the record. The output drives the test scope in the test plan and the entries in the traceability matrix, so an inspector can reconstruct why each feature was tested the way it was.

## 2. Scope

This assessment covers the GxP-relevant features of `<<FILL: SYSTEM NAME>>`, a `<<FILL: production / quality system>>` software application used for `<<FILL: business purpose>>`. It applies the CSA framing only to features that create, modify, store, retrieve, or act on GxP records or that control a production step. Features with no GxP effect are listed and recorded as out of GxP scope with a reason. This assessment does not cover the underlying infrastructure qualification, which is governed by `<<FILL: SOP-ID for infrastructure qualification>>`, and it does not assess the manufacturing process itself.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| System / business owner | Owns the intended-use statement and the risk determination for each feature; understands what depends on the feature and what catches a failure. |
| Validation / CSV lead | Facilitates the assessment, selects the assurance method that matches each risk, and ties the output to the test plan and traceability matrix. |
| Quality Assurance | Approves the risk logic, not just the signatures; confirms direct/indirect calls are reasoned and that critical controls land in the rigorous lane. |
| Subject matter expert | Confirms how the feature behaves and what downstream control would catch a failure. |
| IT / system administrator | Confirms technical controls (access, audit trail, time sync) that the risk reasoning depends on. |

## 4. Definitions

- **Intended use**: what the feature is used for in the regulated process, stated specifically enough that the risk of incorrect operation can be judged.
- **Direct impact feature**: a feature where a failure could affect the product, a GxP record, or the patient with no intervening human check or system control.
- **Indirect impact feature**: a feature where a human review or another control stands between the feature and the GxP outcome, so a failure is caught before it reaches product or record.
- **Severity**: the magnitude of harm if the feature fails (product, patient, or record effect).
- **Probability of an undetected failure**: the chance that a failure reaches the GxP outcome without being caught by an existing control.
- **Assurance method**: the testing approach selected for the feature: rigorous scripted, limited scripted, unscripted / exploratory, or ad hoc covered by use.

## 5. Method

### 5.1 Step 1, identify the intended use

For each feature, write one specific intended-use statement. Avoid generic statements such as "stores data." State what the feature does in the regulated process and what depends on its output. The statement has to be specific enough that someone else can judge what a failure would do.

### 5.2 Step 2, determine the risk

Decide two things and record the reasoning for each.

First, direct or indirect impact. Ask: if this feature silently produced the wrong output, what is the next thing that would notice? If the answer is "a person who reviews the output as part of an existing control" or "another system check," the feature leans indirect, and you name that control. If the answer is "nothing, the wrong output flows straight to the batch record, the release decision, or the patient," it is direct. The control you name becomes load-bearing, so it must actually exist and be reliable.

Second, severity and probability of an undetected failure. Use the coarse scale below. The point is reproducibility: two reviewers given the same feature should land in the same cell.

| Severity | Definition |
|---|---|
| High | A failure could affect the product, a release decision, patient safety, or the integrity of a GxP record. |
| Low | A failure has no product, decision, patient, or GxP record effect. |

| Probability of undetected failure | Definition |
|---|---|
| Yes | A failure would likely reach the GxP outcome before any control catches it. |
| No | An existing downstream control (named) would catch the failure first. |

### 5.3 Step 3, determine the assurance activity

Map the risk to a testing method with the rule below. Document the method for each feature; do not let GAMP category alone set the depth. A Category 4 configured system holds both direct and indirect features.

| Severity | Undetected before harm? | Resulting risk | Default assurance method |
|---|---|---|---|
| High | Yes | High | Rigorous scripted testing, independent review, boundary and negative cases |
| High | No (downstream control catches it) | Medium | Limited scripted testing |
| Low | Yes | Low to Medium | Unscripted / exploratory testing with a written record |
| Low | No | Low | Ad hoc, covered by routine use |

Override rule: regardless of where a feature lands above, electronic records and signatures controls (audit trail capture and protection, electronic signature binding, access and privilege enforcement) are tested with scripted rigor. CSA reallocates effort toward these controls, it does not lower the bar on them.

### 5.4 Step 4, define the record

For each feature, state what evidence will be produced and where it is documented: the executed scripted protocol, the exploratory test summary, or the supplier assessment that reduced site testing. Reference the test plan section and the traceability matrix line so the chain is reconstructable.

### 5.5 Supplier evidence

Where vendor testing evidence reduces site testing for a feature, record the supplier assessment reference and state explicitly what the site still verifies. A vendor certificate or a SOC 2 report is an input to the supplier assessment, not a substitute for it, and it does not cover how the feature was configured at the site.

## 6. Feature risk register

Complete one row per in-scope feature. This register is the working output of the assessment.

| # | Feature | Intended use (specific) | Direct / Indirect (reason, name the catching control) | Severity (H/L) | Undetected? (Y/N) | Resulting risk | Assurance method | Supplier evidence used (ref) | Test plan / RTM ref |
|---|---|---|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL: feature>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 7. Acceptance criteria

This risk assessment is acceptable when all of the following are true:

- Every in-scope GxP feature has a specific intended-use statement, not a generic label.
- Every feature carries a direct or indirect decision with written reasoning, and the catching control is named for every feature called indirect.
- Severity and probability are assigned per the written scale, and two reviewers would reproduce the same cell.
- The assurance method for each feature matches its risk per the rule in section 5.3, and the highest-risk features carry rigorous scripted testing with independent review.
- Audit trail, electronic signature, and access controls are in the scripted lane regardless of their other scoring.
- Where supplier evidence reduced site testing, a documented supplier assessment supports it and the residual site verification is explicit.
- Each feature points to its test plan section and traceability matrix line so the logic is reconstructable end to end.

## 8. References

> 21 CFR Part 11 (electronic records and signatures).
> 21 CFR Part 211 (drug cGMP) and 21 CFR Part 820 as revised by the Quality Management System Regulation (device).
> FDA, Computer Software Assurance for Production and Quality Management System Software, Final Guidance (February 3, 2026, superseding the September 24, 2025 version).
> FDA, General Principles of Software Validation (CDRH, January 2002).
> ICH Q9, Quality Risk Management.
> ISPE GAMP 5, A Risk-Based Approach to Compliant GxP Computerized Systems, Second Edition.
> EU GMP Annex 11, Computerised Systems.
> PIC/S PI 041, Good Practices for Data Management and Integrity.

Confirm the current version and clause numbers of each reference before issue.

## 9. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 10. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (CSV lead) | `<<FILL>>` | | |
| System / business owner | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows a feature risk register completed for an example laboratory information management system that holds release-testing data. The company, system, and numbers are illustrative; replace them with your own. The point of the specimen is to show how the reasoning, not just the labels, is recorded.

| # | Feature | Intended use (specific) | Direct / Indirect (reason, catching control) | Sev | Undet? | Risk | Assurance method | Supplier evidence | Test plan / RTM ref |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Specification limit check | Compares an entered result against the approved spec and flags out-of-specification results so they enter the OOS process | Direct: a missed flag lets a failing result pass as conforming; nothing downstream re-checks the comparison | H | Y | High | Rigorous scripted, independent review, boundary and negative cases | None | TP sec 7.1 / RTM-04 |
| 2 | Electronic approval signature on a test record | Binds an approver identity, meaning, and timestamp to the released result | Direct: the signature is the official record of who approved the result | H | Y | High | Rigorous scripted (Part 11 override applies regardless) | None | TP sec 7.2 / RTM-09 |
| 3 | Audit trail capture on result edits | Records who changed a result, when, old and new value, and reason | Direct: the audit trail is the control that makes a result edit visible | H | Y | High | Rigorous scripted, completeness and tamper resistance (Part 11 override) | None | TP sec 7.3 / RTM-11 |
| 4 | Analyst role and permission enforcement | Restricts who can enter, edit, and approve results | Direct: prevents an unauthorized approval of a release result | H | Y | High | Scripted testing of the GxP-relevant roles (access override) | None | TP sec 7.4 / RTM-14 |
| 5 | Worklist sort order in the sample queue | Orders pending samples for the analyst's convenience | Indirect: the underlying data is unchanged; the analyst visually confirms each sample identity before testing (existing control) | L | N | Low | Ad hoc, covered by routine use | Vendor functional testing, SA-2026-007 | TP sec 8.1 / RTM-31 |
| 6 | Result report PDF export formatting | Formats an approved result into a printable report | Indirect: the data is already approved and stored; a reviewer reads the report against the system record (existing control) | L | N | Low | Ad hoc, covered by routine use | Vendor release notes, SA-2026-007 | TP sec 8.2 / RTM-33 |

For feature 1, the assessment did not stop at the label "direct." It recorded the reasoning: a missed flag lets a failing result pass as conforming, and nothing downstream re-checks the comparison. That sentence is what survives an inspection question. For feature 5, the assessment named the catching control (the analyst visually confirms sample identity), which is what justifies the lighter touch. A bare "indirect" with no named control would not.

## Common inspection findings this risk assessment prevents

- Testing scope reduced "per CSA, risk-based approach" with no risk assessment behind it.
- A direct-impact feature routed into the easy lane with no chain of reasoning, just a convenient conclusion.
- Indirect calls with no named catching control, so the basis for lighter testing is unverifiable.
- Audit trail, electronic signature, or access controls scoped to light testing because the system was scored low overall.
- Supplier evidence treated as automatic, with a vendor certificate standing in for an actual supplier assessment.
- Two analysts scoping similar systems to wildly different testing depth because there is no written risk rule.
- A risk assessment that exists but cannot be traced to the test scope it supposedly drove.

## How to adapt this risk assessment

1. Set your document number, owner, GAMP category, and linked validation plan in the header.
2. List every in-scope feature in section 6, one row each; keep non-GxP features in a separate list marked out of scope with a reason.
3. For each feature, force the intended-use statement to be specific enough that a reader can judge what a failure would do.
4. For every feature you call indirect, name the real downstream control that catches a failure, and confirm that control actually exists and is reliable.
5. Keep the severity and probability scale coarse but reproducible; if two reviewers cannot land in the same cell, tighten the definitions.
6. Apply the Part 11 override in section 5.3 to every electronic records and signatures control before you finalize.
7. Point each feature's last column to the real test plan section and traceability matrix line so the chain is closed.
8. Confirm every regulation in section 8 against the current published version before issue.
