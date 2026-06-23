---
title: "Data Integrity Risk and Gap Assessment (Per System)"
description: "A plug-and-play per-system data integrity risk assessment built on a five-layer checklist (physical, configuration, procedural, work-practice, culture), with current-control evaluation, residual risk, scoring, and CAPA, plus a filled specimen and the regulations it satisfies."
pubDate: 2026-06-22
docType: "Risk Assessment"
pillar: "data-integrity"
relatedArticles: ["di-gap-assessment-methodology", "data-criticality-and-data-risk"]
tags: ["data integrity", "risk assessment", "gap assessment", "ALCOA+", "21 CFR Part 11", "Annex 11", "data criticality"]
tier: "Intermediate"
---

This is a ready-to-use per-system data integrity risk and gap assessment. It is the fillable record a DI program is built on: one completed assessment per GxP system, refreshed on a defined cycle and after any significant change. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Confirm each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Data Integrity Risk and Gap Assessment for `<<FILL: SYSTEM NAME / ID>>` |
| Document number | `<<FILL: ASMT-ID, e.g. DI-RA-018>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Assessment date | `<<FILL: date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Data Integrity Lead>>` |
| System owner | `<<FILL: name / role>>` |
| Next review due | `<<FILL: date or trigger, e.g. annual or on significant change>>` |

## 1. Purpose

This assessment evaluates the data integrity risk of `<<FILL: SYSTEM NAME / ID>>` and identifies gaps between the controls in place and the controls the data criticality requires. The objective is to confirm that records the system creates, modifies, stores, or transmits stay attributable, legible, contemporaneous, original, accurate, and complete across their lifecycle, and to drive any shortfall into a tracked CAPA.

## 2. Scope

This assessment covers the system named in the header, its records, its interfaces to other systems, and the people and procedures that operate it. It assesses controls across five layers: physical, configuration, procedural, work-practice, and culture. It does not re-perform computerized system validation, which is governed by `<<FILL: CSV SOP-ID>>`; it consumes the validation state as an input.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Assessor (DI lead or QA SME) | Performs the assessment, scores each layer, derives residual risk, and proposes CAPA. |
| System owner | Provides the configuration, access, and procedural facts, and owns the resulting actions. |
| IT / system administrator | Confirms the technical configuration: audit trail state, access controls, backups, time synchronization. |
| Process SME / users | Describe how the system is actually used day to day, which feeds the work-practice layer. |
| Quality Assurance | Reviews and approves the assessment, the residual risk acceptance, and the CAPA plan. |

## 4. Definitions

- **ALCOA+**: the data integrity expectations, attributable, legible, contemporaneous, original, accurate, plus complete, consistent, enduring, and available.
- **Data criticality**: the impact of the data on a product-quality or patient-safety decision; it sets how much control the data needs (see related article on data criticality and data risk).
- **Inherent risk**: the data integrity risk before any control is credited.
- **Residual risk**: the risk that remains after the current controls are credited at their assessed effectiveness.
- **Gap**: a required control that is absent, weak, or unverified for the data criticality at hand.
- **Five-layer model**: physical, configuration, procedural, work-practice, and culture controls, assessed together because a strong control at one layer can be defeated by a weak one at another.

## 5. System and data profile

Capture what the system is and what its data drives before scoring anything. The criticality recorded here sets the bar every later layer is measured against.

| Item | Entry |
|---|---|
| System name / ID | `<<FILL>>` |
| GxP category (GMP/GLP/GCP/GDP) | `<<FILL>>` |
| GAMP software category | `<<FILL: 1 / 3 / 4 / 5>>` |
| Validation state | `<<FILL: validated, date, report ref>>` |
| Records created / modified / stored | `<<FILL: e.g. release test results, batch records>>` |
| Highest data criticality | `<<FILL: High / Medium / Low and the decision it supports>>` |
| Interfaces / downstream consumers | `<<FILL: LIMS, MES, data historian, paper printout>>` |
| Record retention requirement | `<<FILL: years>>` |

## 6. Five-layer control checklist

Assess each layer below. For every line, record the control state, rate its effectiveness, and note the evidence you saw (screenshot, configuration export, SOP number, observation, interview). A "No" or "Partial" is a candidate gap; carry it to section 8. Do not credit a control you could not verify.

Effectiveness rating used throughout: **E (effective, verified), P (partial or unverified), N (absent or ineffective)**.

### 6.1 Layer 1, physical

Controls over the hardware, the room, and the media that hold the records.

| # | Control question | State (Y/N/Partial) | Effectiveness (E/P/N) | Evidence |
|---|---|---|---|---|
| P1 | Is the server or instrument in a controlled-access location? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| P2 | Are local storage media (drives, USB, removable disks) controlled and is uncontrolled removable media blocked? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| P3 | Are backups taken, stored separately, and is restore tested? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| P4 | Is the environment protected (power, temperature, fire/water) to the records' retention need? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| P5 | Are printouts and any paper raw data physically controlled? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

### 6.2 Layer 2, configuration

Technical settings that make the electronic record trustworthy.

| # | Control question | State (Y/N/Partial) | Effectiveness (E/P/N) | Evidence |
|---|---|---|---|---|
| C1 | Is the audit trail on, complete, and unable to be disabled by ordinary users? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| C2 | Are unique user accounts enforced with no shared or generic logins? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| C3 | Are roles least-privilege, and are admin rights held only by people who do not generate or approve the data? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| C4 | Is the system clock synchronized and locked against user change? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| C5 | Is delete or overwrite of raw data prevented or fully audit-trailed? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| C6 | Are electronic signatures linked to the record and protected per the rule? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| C7 | Are interfaces and data transfers verified end to end with no manual re-keying gap? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

### 6.3 Layer 3, procedural

Whether the written rules that govern the system exist and cover the right things.

| # | Control question | State (Y/N/Partial) | Effectiveness (E/P/N) | Evidence |
|---|---|---|---|---|
| Q1 | Is there an approved, current SOP for operating the system? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Q2 | Is audit trail review defined, with frequency set by data criticality? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Q3 | Are user access provisioning, change, and removal procedurally controlled? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Q4 | Are backup, restore, and archival procedures defined and assigned? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Q5 | Is data review (second-person check of results) defined? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

### 6.4 Layer 4, work practice

What people actually do, which is where written controls succeed or fail. Establish this by observation and interview, not by reading the SOP.

| # | Control question | State (Y/N/Partial) | Effectiveness (E/P/N) | Evidence |
|---|---|---|---|---|
| W1 | Do users log in under their own account every time, with no password sharing? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| W2 | Are results recorded contemporaneously, not transcribed later from scrap or memory? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| W3 | Is the audit trail review actually performed and signed at the defined frequency? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| W4 | Are "test", "trial", or aborted runs handled openly and explained, not deleted quietly? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| W5 | Are changes to results always given a recorded reason? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

### 6.5 Layer 5, culture

Whether the environment lets people report problems and disincentivizes shortcuts. Soft to score, but it is the layer that decides whether the other four hold under pressure.

| # | Control question | State (Y/N/Partial) | Effectiveness (E/P/N) | Evidence |
|---|---|---|---|---|
| K1 | Can staff raise data integrity concerns without fear, with a route to do so? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| K2 | Is data integrity training current, role-specific, and beyond a generic slide deck? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| K3 | Are deadlines and metrics set so they do not push staff to cut corners on records? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| K4 | Does management review include data integrity, with action when issues surface? | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 7. Scoring

Score in two steps so the assessment is repeatable rather than a gut feel.

### 7.1 Inherent (pre-control) risk

Set inherent risk from data criticality and the system's exposure (manual steps, interfaces, prior history). Use a simple band.

| Inherent risk | Set when |
|---|---|
| High | High-criticality data, or significant manual handling or known prior DI issues |
| Medium | Medium-criticality data with some manual handling |
| Low | Low-criticality, fully automated, or reference-only data |

| Item | Entry |
|---|---|
| Inherent risk band | `<<FILL: High / Medium / Low>>` |
| Basis | `<<FILL: criticality from section 5 plus exposure factors>>` |

### 7.2 Control effectiveness and residual risk

Roll up the five layers. The weakest material layer caps the credit, because a perfect configuration is undone by a culture that hides deletions, and a strong culture cannot fix an audit trail that is switched off.

| Layer | Count E | Count P | Count N | Layer effectiveness (E/P/N) |
|---|---|---|---|---|
| Physical | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Configuration | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Procedural | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Work practice | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Culture | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

Residual risk grid (inherent risk versus overall control effectiveness):

| Inherent \ Control | Effective (E) | Partial (P) | Ineffective (N) |
|---|---|---|---|
| High | Medium | High | High |
| Medium | Low | Medium | High |
| Low | Low | Low | Medium |

| Item | Entry |
|---|---|
| Overall control effectiveness | `<<FILL: E / P / N, capped by weakest material layer>>` |
| Residual risk | `<<FILL: High / Medium / Low from the grid>>` |
| Residual risk acceptance | `<<FILL: accepted by QA / not accepted, CAPA required>>` |

## 8. Gaps and CAPA

List every line scored P or N as a gap. Each High or Medium residual gap needs a dated, owned action. Low residual gaps may be accepted with a recorded rationale.

| Gap ref (from section 6) | Layer | Description of gap | Residual risk | Action (CAPA) | Owner | Due date | CAPA / change ref |
|---|---|---|---|---|---|---|---|
| `<<FILL: C1>>` | `<<FILL: Configuration>>` | `<<FILL>>` | `<<FILL: High>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

Open CAPA from data integrity gaps under your CAPA procedure `<<FILL: CAPA SOP-ID>>` so the actions are tracked and effectiveness-checked, not just listed here.

## 9. Acceptance criteria

This assessment is complete and acceptable when all of the following are true:

- Every line in section 6 has a state, an effectiveness rating, and recorded evidence; no control is credited without verification.
- Inherent risk, control effectiveness, and residual risk are scored per section 7 with the basis recorded.
- Every P or N line appears in section 8 as a gap.
- Every High and Medium residual gap has a dated, owned CAPA; every accepted Low gap has a recorded rationale.
- QA has reviewed and approved the assessment and the residual risk position.

## 10. References

> 21 CFR Part 11 (electronic records and electronic signatures).
> 21 CFR 211.68, 211.180, 211.188, 211.194 (records and controls).
> EU GMP Annex 11 (computerized systems).
> MHRA GxP Data Integrity Guidance and Definitions.
> PIC/S PI 041, Good Practices for Data Management and Integrity.
> WHO Annex 4, Guideline on Data Integrity (TRS).
> FDA Data Integrity and Compliance With Drug CGMP, Questions and Answers.
> ICH Q9, Quality Risk Management (for the risk-based scoring).

Confirm the current version and clause numbers of each reference before issue.

## 11. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 12. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Assessor | `<<FILL>>` | | |
| System owner | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the assessment completed for an example chromatography data system used for release testing, so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

System and data profile:

| Item | Entry |
|---|---|
| System name / ID | Chromatography Data System, server CDS-PRD-01 |
| GxP category | GMP |
| GAMP software category | 4 (configured product) |
| Validation state | Validated, report VAL-CDS-2025-006, 14 Nov 2025 |
| Records | Release test results, integration data, sequences |
| Highest data criticality | High: results drive batch release |
| Interfaces | LIMS (results push), network backup |
| Retention | 10 years |

Five-layer scoring, with the lines that drove the result:

| Layer | Notable findings | Layer effectiveness |
|---|---|---|
| Physical | Server in controlled data center; backups taken and one restore tested in the last year. | E |
| Configuration | Audit trail on and locked; unique accounts; clock synchronized. But two analysts hold administrator rights and also run sequences (C3). | P |
| Procedural | Operating SOP and audit trail review SOP current; provisioning controlled. | E |
| Work practice | Logins individual; results contemporaneous. Audit trail review was defined daily but records showed it performed only weekly (W3). | P |
| Culture | DI training current and role-specific; concern-reporting route in place and used. | E |

Scoring roll-up:

| Item | Entry |
|---|---|
| Inherent risk | High (release-decision data) |
| Overall control effectiveness | P (capped by the configuration and work-practice gaps) |
| Residual risk | High (High inherent x Partial control) |
| Residual risk acceptance | Not accepted; CAPA required |

Gaps and CAPA:

| Gap ref | Layer | Gap | Residual | Action | Owner | Due | Ref |
|---|---|---|---|---|---|---|---|
| C3 | Configuration | Analysts who run sequences also hold admin rights (no segregation of duties) | High | Remove admin from analyst accounts; move admin to QA-independent IT role | IT lead | 31 Jul 2026 | CAPA-2026-0207 |
| W3 | Work practice | Audit trail review performed weekly, not daily as required for release data | High | Restore daily review; add monthly compliance check of review completion | QC manager | 15 Jul 2026 | CAPA-2026-0208 |

In this example the configuration looked strong on paper, but a segregation-of-duties gap (analysts holding admin rights) plus a work-practice gap (review done weekly instead of daily for High-criticality data) capped the overall control at Partial and held residual risk at High, so QA did not accept it and two CAPAs were opened with owners and dates. That sequence, layered findings to capped effectiveness to residual risk to tracked CAPA, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this assessment prevents

- A data integrity program with policy and training but no per-system risk assessment showing where the actual gaps are.
- Assessments that score only the configuration layer and never look at how the system is really used.
- Controls marked "in place" with no evidence the assessor verified them.
- A risk rating with no method behind it, so the same system scores differently each year.
- Gaps identified in an assessment that were never turned into tracked, dated CAPA.
- Review frequency or access rights set once for every system with no link to data criticality.

## How to adapt this assessment

1. Set your document number, owner, and assessment date in the header, and your review cycle.
2. Fill the system and data profile in section 5 first; the criticality you record there sets the bar for every layer.
3. Work the five-layer checklist in section 6 with evidence, not memory; observe and interview for the work-practice and culture layers.
4. Adjust the scoring bands and the residual risk grid in section 7 to match your quality risk management procedure, then keep them fixed so assessments are comparable year over year.
5. Point the cross-references in sections 2 and 8 to your real CSV and CAPA procedures.
6. Confirm every regulation in section 10 against the current published version before issue.
