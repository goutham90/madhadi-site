---
title: "Form: Requalification Impact Assessment and Scope Determination"
description: "A plug-and-play form to assess the qualification impact of a change to qualified equipment and to define a risk-justified requalification scope: the change, the affected IQ/OQ/PQ elements, the risk, the scope decision, and the acceptance criteria, with field definitions and a filled specimen."
pubDate: 2026-06-28
docType: "Form"
pillar: "equipment-qualification"
relatedArticles: ["requalification-and-periodic-review-equipment", "change-control-validated-systems", "equipment-qualification-lifecycle"]
tags: ["requalification", "impact assessment", "change control", "equipment qualification", "Annex 15", "form"]
tier: "Intermediate"
---

This is a ready-to-use form for deciding, when a change is raised against qualified equipment, whether requalification is needed and what its scope should be. It makes the scoping decision explicit and risk-justified, which is exactly what an inspector looks for. Replace every `<<FILL: ...>>` placeholder, attach it to the governing change control, and route it through your normal review and approval. Field definitions and a filled specimen follow. This content is educational reference, not legal or regulatory advice.

## Form header

| Field | Format | Required | Who | When |
|---|---|---|---|---|
| Form number | `<<FILL: RIA-ID>>` | Yes | Author | At raise |
| Change control reference | text | Yes | Author | At raise |
| Equipment ID and risk class | text | Yes | Author | At raise |
| Validated baseline reference | text | Yes | SME | At raise |
| Date raised | date | Yes | Author | At raise |

## 1. Description of the change

| Field | Entry |
|---|---|
| What is changing | `<<FILL: component / software / location / utility / new product / parameter>>` |
| Reason for the change | `<<FILL>>` |
| Like-for-like? | Yes / No, `<<FILL: equivalence basis if Yes>>` |
| Touches a critical function, control logic, or software? | Yes / No |

## 2. Affected qualification elements

For each IQ/OQ/PQ element the change could touch, mark whether it is affected and why.

| Qualification element | Affected? | Basis |
|---|---|---|
| IQ (installation, utilities, as-built) | Yes / No | `<<FILL>>` |
| OQ (control functions, alarms, set points, range) | Yes / No | `<<FILL>>` |
| PQ (process performance, load/recipe, worst case) | Yes / No | `<<FILL>>` |
| Calibration of affected instruments | Yes / No | `<<FILL>>` |
| Computerized-system controls (audit trail, access, data) | Yes / No | `<<FILL>>` |
| Cleaning validation impact | Yes / No | `<<FILL>>` |

## 3. Risk assessment

| Field | Entry |
|---|---|
| What could go wrong if the change is faulty | `<<FILL>>` |
| Severity to product / patient | `<<FILL: high / medium / low>>` |
| Detectability before product impact | `<<FILL>>` |
| Overall risk rating | `<<FILL>>` |

## 4. Requalification scope decision

| Field | Entry |
|---|---|
| Requalification required? | Yes / No |
| If No, justification | `<<FILL: why no requalification is warranted>>` |
| If Yes, scope | `<<FILL: which IQ/OQ/PQ tests will be re-executed>>` |
| Acceptance criteria | `<<FILL: the criteria the requalification must meet>>` |
| Protocol / test plan reference | `<<FILL>>` |
| Documentation to update | `<<FILL: drawings, SOPs, register, baseline>>` |

## 5. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| SME (technical) | `<<FILL>>` | | |
| QA | `<<FILL>>` | | |

QA approval of the scope decision is mandatory; the qualified-state claim is a quality decision even when the SME drives the technical content.

## Field definitions

- **Like-for-like**: same part number or proven-equivalent spec, fit, and function, touching no critical function, control logic, or software. A "No" here, or a "Yes" to touching a critical function, points toward change control and requalification.
- **Affected element**: an IQ/OQ/PQ element whose original demonstration the change could invalidate. Tie scope to traceability: if you know which OQ test challenged which function, scoping is mechanical.
- **Scope**: the minimum testing that re-establishes confidence for what the change challenged, not a default full re-run.

## Retention

Retain with the governing change control for not less than `<<FILL: retention period>>`. The justified scope decision is the record an inspector traces when asking why a given requalification was or was not done.

---

## Filled specimen

The following shows the form completed for two contrasting changes on the same autoclave, to show the scoping logic. Numbers are illustrative.

**Change A, RIA-2026-051 (CC-2025-204):** Door gasket replaced with the same part number.

- Like-for-like: Yes (identical part number). Touches a critical function: No.
- Affected elements: IQ no; OQ no; PQ no; calibration no; computerized controls no; cleaning no.
- Risk: a failed seal would be detected by the routine leak/Bowie-Dick checks before any load is processed; severity contained by detection. Overall risk: low.
- Decision: requalification not required. Justification: genuine like-for-like with routine seal-integrity checks as the detection control. Documentation: update spare BOM. QA approved.

**Change B, RIA-2026-052 (CC-2026-300):** Autoclave PLC controller replaced with a new model.

- Like-for-like: No. Touches control logic and software: Yes.
- Affected elements: IQ yes (new hardware install); OQ yes (all control functions, alarms, set points); PQ yes (control logic governs lethality delivery); calibration yes; computerized controls yes (audit trail, access, data on the new controller); cleaning no.
- Risk: a controller fault could deliver an under-lethal cycle that release testing might not catch; severity high, detection moderate. Overall risk: high.
- Decision: requalification required. Scope: full OQ of all control functions and alarms, PQ heat-penetration / load re-mapping for the worst-case load, calibration of all controller-linked instruments, and re-verification of audit trail, access control, and data integrity on the new controller. Acceptance criteria per the requalification protocol RQ-STZ04-2026. Documentation: update P&ID, electrical drawings, validated baseline, and register. QA approved.

The two cases on one asset show the principle: a like-for-like seal swap needs only calibration-level confirmation and a BOM update, while a controller replacement that governs lethality needs OQ, PQ re-mapping, and computerized-system re-verification. The scope follows the risk, and both decisions are written down.

## Common inspection findings this form prevents

- A controller swap, software upgrade, or relocation pushed through with no qualification-impact assessment.
- Everything re-run wastefully, or too little re-run, with no documented rationale either way.
- Like-for-like asserted with no equivalence basis, used to avoid requalifying a genuine modification.
- Documentation left describing the old configuration after the change.

## How to adapt this form

1. Set your form numbering and link it to your change-control system.
2. Replace the qualification elements in section 2 with your own qualification structure and traceability.
3. Use your established risk-rating scale in section 3.
4. Make QA approval of the scope decision a hard gate; confirm the retention period against your schedule.
