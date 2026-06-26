---
title: "SOP: Quality Event Classification, Risk Ranking, and Escalation"
description: "A plug-and-play SOP for triaging GMP quality events as critical, major, or minor: containment, scope, patient-impact assessment, risk ranking, the reportability screen, escalation timelines, and evidence-based re-classification, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-26
docType: "SOP"
pillar: "quality-assurance"
relatedArticles: ["quality-event-classification-triage"]
tags: ["deviation management", "quality risk management", "classification", "escalation", "patient safety", "SOP"]
tier: "Intermediate"
---

This is a ready-to-use SOP for classifying and escalating quality events. It pairs with the [Quality Event Triage and Classification Record](/templates/form-quality-event-triage-classification) (the form you fill per event) and the [Quality Event Escalation and Notification Matrix](/templates/matrix-quality-event-escalation-notification) (who is told and how fast). Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Quality Event Classification, Risk Ranking, and Escalation |
| Document number | `<<FILL: SOP-ID, e.g. SOP-QA-031>>` |
| Version | `<<FILL: version>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Head of Quality Assurance>>` |
| Applies to | `<<FILL: sites / departments in scope>>` |

## 1. Purpose

This procedure defines how `<<FILL: COMPANY NAME>>` assigns a severity tier (critical, major, minor) to a quality event, ranks its risk, screens it for regulatory reportability, and escalates it, so that investigation depth, timelines, notification, and product disposition are proportionate to patient and product risk.

## 2. Scope

This procedure applies to all quality events at the sites in the header: deviations and nonconformances, out-of-specification and out-of-trend results, complaints, audit and inspection findings, environmental excursions, equipment failures, and data integrity events. For combination products it applies to events affecting either the drug/biologic or the device constituent part. It does not replace the investigation procedure (`<<FILL: SOP-ID for deviations/investigations>>`) or the CAPA procedure (`<<FILL: SOP-ID for CAPA>>`); it sizes them.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Event initiator / area owner | Identifies and reports the event promptly, performs containment, writes the factual description, proposes an initial classification. |
| QA (event owner / reviewer) | Owns and approves the final classification; ensures consistency; confirms the patient-impact assessment; runs the reportability screen; gatekeeps disposition. |
| SME (process, analytical, micro, engineering) | Provides the technical impact assessment the tier depends on; bounds the affected scope; supports root cause. |
| Qualified Person (EU) / disposition decision-maker | Cannot certify a batch with unresolved critical or major deviations; relies on the classification. |
| Regulatory Affairs | Determines whether a flagged event trips a reporting obligation. |
| Quality / management review | Reviews critical events and trends; ensures recurring minors are escalated. |

## 4. Definitions

- **Quality event**: any departure from an approved standard, expectation, or commitment that touches product quality, patient safety, or data integrity.
- **SISPQ**: safety, identity, strength, purity, and quality of the product as registered.
- **Critical / Major / Minor**: the three severity tiers defined in section 5.5.
- **Reportability screen**: the check, done at classification, of whether the event trips a regulatory reporting threshold.

## 5. Procedure

### 5.1 Contain before you classify

Secure the situation first: quarantine affected product, stop the line if needed, isolate the suspect system, and preserve original records and failing samples. Containment buys time to classify correctly without product moving.

### 5.2 Capture the facts

Record the objective description (what, where, when, who, which lot/system) with no root cause, blame, or speculation. Pull the underlying records (batch record, audit trail, chromatogram, EM data) before they can be overwritten. For data integrity events, freeze the audit trail and metadata.

### 5.3 Define the affected scope

Ask what else this could touch: other units in the batch, other batches on the same equipment, other products on a shared line, other results from the same instrument or analyst, other time periods. Scope is where minor events become major. Default the question on shared lines to "what is the next product on this equipment."

### 5.4 Assess potential patient impact

Run the patient-impact questions; the honest answer anchors the tier:

1. Does the event affect SISPQ? If yes, it is at least major and likely critical.
2. Could affected product reach a patient (distributed, in finished goods, or still containable)?
3. What is the harm if it does (negligible, minor, serious, life-threatening)?
4. What population is exposed (pediatric, immunocompromised, single-source life-sustaining)?
5. Is the data supporting disposition trustworthy? A data integrity failure defaults the event high.

If the honest answer to "could this reach a patient and cause harm" is yes or unknown, you are at critical until proven otherwise.

### 5.5 Assign the tier

| Tier | Definition | Default investigation | Disposition default |
|---|---|---|---|
| Critical | Has caused or could plausibly cause patient harm, or makes product non-compliant on SISPQ. Includes confirmed data integrity failures and sterility breaches. | Formal RCA, full batch impact assessment, CAPA, management notification, reportability assessment | Quarantine / reject pending investigation; consider field action |
| Major | Significant GMP or process departure not directly threatening patient safety but able to affect quality, or signaling a systemic weakness. | Documented investigation with root cause and impact assessment; CAPA if systemic | Hold pending assessment; release possible with documented justification |
| Minor | Isolated departure with no SISPQ, safety, or data integrity impact; typically procedural. | Brief investigation, correction, short rationale; trend it | Release usually unaffected |

Two anchoring rules: **classify on potential, not only outcome** (a near-miss caught by luck is still serious), and **systemic beats isolated** (recurrence escalates severity because it signals a CAPA failure).

### 5.6 Score the risk drivers (for non-obvious tiers)

Where the tier is not obvious, score severity (S), probability/occurrence (P), and detectability (D). Map the S-by-P band to a tier, then let poor detectability (the control that should have caught it was the control that failed) bump one band higher.

| Severity / Probability | Low | Medium | High |
|---|---|---|---|
| High (serious harm possible) | Major | Critical | Critical |
| Medium (quality impact, limited harm) | Minor | Major | Major |
| Low (no SISPQ impact) | Minor | Minor | Major |

### 5.7 Run the reportability screen

At classification, screen the event against reporting thresholds so the regulatory clock starts on day zero, not after the investigation. Record the outcome on the triage form. Common triggers:

- US field alert report, 21 CFR 314.81, within 3 working days for specified NDA/ANDA problems.
- Biological product deviation report, 21 CFR 600.14 / 21 CFR 1271.350, generally within 45 calendar days for distributed biologics or HCT/Ps.
- Recall / field action assessment for distributed product.
- GCP serious breach reporting under ICH E6(R3) and regional rules.
- For a combination product, device-side postmarket reporting in addition to the drug/biologic obligations.

### 5.8 Assign and justify

State the tier and the specific drivers, and document **why you did not go one level higher**. "Classified major, not critical, because the impact assessment confirmed no SISPQ effect on released product; isolated; no patient exposure" is defensible. "Minor" with no reasoning is a finding.

### 5.9 Escalate

Notify per the [Escalation and Notification Matrix](/templates/matrix-quality-event-escalation-notification): critical reaches the head of quality (and often regulatory affairs) the same day; major within 1 to 2 business days; minor is logged. Open the CAPA if warranted.

### 5.10 Re-classify on evidence only

Classification is provisional until the investigation closes. Escalate the tier if scope or patient exposure grows; downgrade only on evidence. Never silently overwrite the first classification; the original rationale and the change must both remain visible. Operating rule: **classify high at open, refine on evidence.**

## 6. Acceptance criteria

- Every event has a tier with a written justification within the SOP-defined time of opening.
- Each event has an explicit patient-impact statement and a completed reportability screen.
- Investigation depth visibly matches the tier; over-investigating a minor and under-investigating a critical are both defects.
- Re-classifications are evidence-based with the history preserved.
- Escalation happened on time for critical and major events, with notification records.
- QA's authority over the final tier is documented and independent of production.

## 7. Records generated

- Quality event triage and classification record (per event).
- Reportability screen outcome.
- Escalation / notification record.
- Re-classification record where applicable.

## 8. References

> 21 CFR 211.192 (investigation of discrepancies and failures), 211.100(b) (deviations recorded and justified), 314.81 (field alert reports), 600.14 / 1271.350 (biological product deviation reports).
> EU GMP Chapter 1 (Pharmaceutical Quality System); EU GMP Annex 16 (QP certification and unresolved deviations).
> ICH Q9(R1), Quality Risk Management (2023 revision), on proportionality and reducing subjectivity.
> ICH Q10, Pharmaceutical Quality System, on effort commensurate with risk.
> ICH E6(R3), Good Clinical Practice (serious breach reporting), where clinical.
> 21 CFR Part 4 (combination products), where applicable.

Confirm the current version and clause numbers before issue.

## 9. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 10. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (QA) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

Illustrative triage of one event. Replace with your own.

**Event.** A fill-line in-process check finds a single under-filled vial of a sterile injectable; the upstream checkweigher is later found to have drifted out of calibration for an unknown period.

- **Contain.** Line stopped, affected units quarantined, checkweigher locked out, retained units secured.
- **Scope.** All units filled since the last good checkweigher calibration are potentially affected; the window is open.
- **Patient impact.** Under-dose affects strength (SISPQ); product is parenteral; the failed control was the automated detection control, so detectability is poor.
- **Risk ranking.** Severity medium-high, probability medium-high (window open), detectability poor. Band maps to critical; poor detectability holds it there.
- **Reportability screen.** If the affected NDA/ANDA product were distributed and the strength failure confirmed, a field alert screen trips; here product is contained, screen documented and monitored.
- **Tier.** Critical at open. Why not lower: the affected window is unbounded and the primary control failed.
- **Re-classification.** After the impact assessment bounds the window (last good calibration, statistical sampling of retained units) and finds no further under-fills in a small contained quantity, re-classified to major with documented justification; calibration program gets a CAPA.

This shows "classify high at open, refine on evidence" in practice: a defensible critical that was justified down to major on evidence, with the history preserved.

## Common inspection findings this SOP prevents

- Classifying down to dodge work, so a real quality impact gets a shallow investigation.
- Inconsistent classification of the same event type across shifts or months.
- A tier assigned with no justification and no "why not higher."
- Investigating one batch when 211.192 required extending to other associated batches.
- Late or missing regulatory reporting because the reportability screen was done after the investigation, not at classification.
- Data integrity events treated as low severity.

## How to adapt this SOP

1. Set your document number, owner, and effective date.
2. Align the tier names in 5.5 to your QMS terminology if different (for example major/minor/no-impact, or a 1 to 5 scale).
3. Point the cross-references to your real investigation, CAPA, and complaint procedures.
4. Attach your escalation matrix and triage form as controlled annexes.
5. Confirm every regulation in section 8 against the current published version before issue.
