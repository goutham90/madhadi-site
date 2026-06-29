---
title: "SOP: Protocol Deviation Management in Clinical Trials"
description: "A plug-and-play SOP for identifying, classifying, reporting, and resolving clinical protocol deviations, with the important/minor/serious-breach scheme, IRB/EC and competent-authority reporting clocks, CAPA, trending, and a filled specimen."
pubDate: 2026-06-29
docType: "SOP"
pillar: "clinical-gcp"
relatedArticles: ["protocol-deviation-management", "ich-e6-good-clinical-practice", "risk-based-monitoring-clinical"]
tags: ["protocol-deviation", "gcp", "clinical-trials", "ich-e6", "SOP", "inspection-readiness"]
tier: "Intermediate"
---

This is a ready-to-use SOP for sponsor and site management of clinical protocol deviations. Replace every `<<FILL: ...>>` placeholder, set your document numbers and dates, and route through your document control. A worked filled specimen follows. Verify each cited regulation against the current source; reporting clocks vary by IRB/EC and by jurisdiction.

## Document control header

| Field | Entry |
|---|---|
| Document title | Protocol Deviation Management |
| Document number | `<<FILL: SOP-ID, e.g. SOP-CL-009>>` |
| Version | `<<FILL: version>>` |
| Effective date | `<<FILL: date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Clinical Quality>>` |
| Applies to | `<<FILL: studies / functions in scope>>` |

## 1. Purpose

This procedure defines how `<<FILL: COMPANY NAME>>` and its investigator sites identify, document, classify, report, and resolve departures from the IRB/EC-approved protocol, so that subject safety and rights are protected, the reliability of the trial data is preserved, and deviation reporting is complete, honest, and reconcilable across the deviation log, the IRB/EC submissions, the competent-authority notifications, and the clinical study report.

## 2. Scope

This procedure applies to all protocol deviations in `<<FILL: COMPANY NAME>>`-sponsored interventional clinical trials, at all participating sites, from first subject screening through database lock and the CSR. It covers minor and important deviations and the determination of EU serious breaches. It does not cover protocol amendments (planned, approved changes going forward), governed by `<<FILL: SOP-ID for amendments>>`.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Site coordinator (CRC) | First-line identification and documentation; often the IRB/EC submission. |
| Principal investigator | Owns site conduct; approves classification and explanation; reports immediate-hazard deviations. |
| Clinical research associate (CRA) | Identifies deviations on review; confirms classification; tracks resolution. |
| Sponsor study lead / clinical operations | Aggregates across sites; owns the trial-level view; decides serious-breach notification. |
| Medical monitor | Assesses safety impact of safety-related deviations. |
| Biostatistics / data management | Runs the data-impact assessment and analysis-population decisions. |
| Clinical QA | Audits the process, checks classification honesty and reconciliation, owns inspection readiness. |

## 4. Definitions

- **Protocol deviation**: any departure from the IRB/EC-approved protocol.
- **Important (major) deviation**: one that could affect subject safety, rights, or wellbeing, or the completeness, accuracy, or reliability of the trial data.
- **Minor deviation**: a documented departure not rising to that level.
- **Serious breach (EU)**: under Regulation (EU) No 536/2014 Article 52, a breach likely to affect to a significant degree the safety or rights of a subject or the reliability and robustness of the data; notified to the Member States concerned within seven days of sponsor awareness.
- **Immediate-hazard deviation**: a change made without prior approval to eliminate an immediate hazard to a subject, allowed but reported promptly afterward.

## 5. Procedure

### 5.1 Identify and document

1. The moment a departure is recognized, record it: subject ID (never the name), the protocol section departed from, the date of the event, the date of discovery, and the immediate facts, on the deviation record (`<<FILL: form doc number, e.g. /templates/form-protocol-deviation-report>>`).
2. Capture it without pre-judging the classification. Sites are expected to self-identify; deviations found only by the CRA are themselves a signal.

### 5.2 Assess and classify

1. Determine which requirement was missed and by how much; whether subject safety, rights, or wellbeing were affected; whether data used in an analysis is affected and which analysis; whether it is isolated or a pattern; and the root cause.
2. Classify against the written criteria as minor or important. Record the rationale, not just the verdict.
3. For an important deviation, assess whether the effect is significant enough to be a candidate EU serious breach; if so, escalate to the sponsor immediately so the seven-day clock can be assessed.

### 5.3 Report

1. **IRB/EC**: report per the governing IRB/EC's threshold and timeline using the reporting matrix (`<<FILL: matrix doc number, e.g. /templates/matrix-irb-ec-deviation-reporting>>`). Immediate-hazard deviations are reported promptly after the fact in every case.
2. **Competent authority (EU)**: where confirmed a serious breach, the sponsor notifies the Member States concerned via CTIS within seven days of awareness.
3. **Sponsor**: the site reports to the sponsor per the protocol and monitoring plan; the sponsor maintains the trial-level deviation dataset.
4. Record every submission date and acknowledgment.

### 5.4 CAPA

1. For deviations revealing a fixable process problem, especially recurring or important ones, open a CAPA per `<<FILL: SOP-ID for CAPA>>`.
2. The correction fixes the instance; the preventive action addresses the root cause across all affected sites, not just the originating one.
3. Verify effectiveness.

### 5.5 Data-impact assessment

1. For each important deviation (and any minor one touching data), map it to the analysis populations defined in the statistical analysis plan.
2. Apply the predefined population rules; document any ad-hoc decision and, where possible, make it before unblinding.
3. Use sensitivity analyses to show the conclusion holds with and without the affected subjects.

### 5.6 Trend and close

1. Capture deviations in a structured, queryable form and trend them by site, category, and rate on a defined cadence using the trending register (`<<FILL: log doc number, e.g. /templates/log-protocol-deviation-trending-register>>`).
2. Take trends to a decision (targeted monitoring, retraining, amendment, CAPA) and record the decision.
3. Close each deviation when documented, reported, and resolved.

## 6. Acceptance criteria

- Each deviation is classified against written criteria with a recorded rationale; an independent reviewer would reach the same tier.
- Every deviation meeting an IRB/EC threshold was reported within that IRB's timeline; immediate-hazard deviations were reported promptly after the fact.
- Confirmed serious breaches were notified within seven days.
- The deviation log reconciles to the IRB submissions, the authority notifications, and the CSR with no orphans.
- Important-deviation categories were defined before unblinding; CAPAs address systemic causes and are effectiveness-verified.

## 7. References

> ICH E6 Good Clinical Practice (R2/R3), investigator and sponsor obligations on deviations.
> ICH E3, structure and content of clinical study reports (important protocol deviations, section 10.2; Appendix 16.2.2).
> 21 CFR 312.66 (investigator IRB/reporting duties) and 21 CFR 56.108 (IRB written procedures).
> Regulation (EU) No 536/2014, Article 52 (serious breach) and CTIS notification.

Confirm current versions before issue.

## 8. Records generated

- Protocol deviation record (per event), see the paired form.
- IRB/EC submission and acknowledgment records.
- Serious-breach notification (where applicable).
- Deviation trending register and review minutes.

## 9. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 10. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (QA) | `<<FILL>>` | | |
| Approver (Clinical Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

A worked deviation handled end to end, illustrative.

| Step | Outcome |
|---|---|
| Identify | Subject S-014-007 had the week-52 primary biomarker sample drawn 4 days outside the protocol window; found by the CRA; site had not self-reported |
| Classify | Important (touches the primary endpoint); rationale recorded; not a serious breach (single-subject data effect, no safety/rights impact) |
| Report | Site IRB requires important data-affecting deviations within 10 working days; submitted well inside the clock; acknowledgment filed; no EU 7-day notification |
| CAPA | Retrain site 14; add an automated out-of-window alert to the scheduling tool study-wide (pattern, not unique to one site); effectiveness verified over two monitoring cycles |
| Data impact | Per SAP, subject stays in the full analysis set, drops from per-protocol; sensitivity analysis with/without confirms the treatment effect holds |
| CSR | Reported under predefined category "primary endpoint outside window," listed in Appendix 16.2.2; counts reconcile to the deviation dataset and to the IRB record |

The deviation became a documented, reported, fixed, and analytically handled event rather than a quiet hole in the primary endpoint. That is the outcome the SOP exists to produce.

## Common inspection findings this SOP prevents

- Important deviations classified as minor to avoid reporting.
- Immediate-hazard deviations taken correctly but never reported afterward.
- Deviation log, IRB submissions, and CSR counts that do not reconcile.
- CAPA that fixes one site while the systemic cause runs at the others.

## How to adapt this SOP

1. Insert your written classification criteria, or reference the deviation management plan that holds them.
2. Point the cross-references to your real forms, matrix, CAPA, and amendment procedures.
3. Set the IRB/EC reporting expectations via the paired reporting matrix per study.
4. Confirm the serious-breach mechanism and clock for each jurisdiction in scope.
