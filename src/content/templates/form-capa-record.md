---
title: "Form: CAPA Record"
description: "A plug-and-play CAPA record form that carries an event from problem statement through root cause, action, verification, and effectiveness to closure, with every field an inspector reads, a filled specimen, and the findings it prevents."
pubDate: 2026-06-21
docType: "Form"
pillar: "quality-assurance"
relatedArticles: ["what-is-a-capa"]
tags: ["capa", "quality-assurance", "form", "root cause", "record", "21 cfr 820"]
tier: "Intermediate"
---

This is a ready-to-use CAPA record form. It is the working document a CAPA lives on, from opening to closure, and it pairs with the CAPA management SOP. Replace every `<<FILL: ...>>` placeholder, populate the fields in sequence as the CAPA moves (not all at the end), and route signatures through your normal quality system. A filled specimen follows so you can see how a completed record reads. Verify each cited regulation against the current source before you rely on it.

## Form control header

| Field | Entry |
|---|---|
| Form title | CAPA Record |
| Form number | `<<FILL: FORM-ID, e.g. FORM-QA-020-01>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Governing SOP | `<<FILL: SOP-ID for CAPA management>>` |
| Retention | Not less than `<<FILL: retention period>>` |

## Section A: Identification and source

| Field | Entry |
|---|---|
| CAPA number | `<<FILL: CAPA-ID>>` |
| Date opened | `<<FILL: date>>` |
| Initiator (name, role) | `<<FILL>>` |
| CAPA owner (name, role) | `<<FILL>>` |
| Source / trigger | Deviation / OOS or OOT / internal audit / external audit / complaint / adverse event or field action / supplier nonconformance / nonconforming product / 483 or warning letter / trend or management review / other: `<<FILL>>` |
| Source record number | `<<FILL: e.g. DEV-..., OOS-..., IA-..., CMP-...>>` |
| Type | Corrective (a failure has occurred) / Preventive (a risk identified before failure) |

## Section B: Problem statement

State what failed, where, when, how it was detected, and what is known to be affected. State facts only. Do not state or imply a cause here.

> `<<FILL: factual problem statement>>`

| Check | Confirmed |
|---|---|
| Names what failed, where, when, how detected, what is affected | Yes / No |
| Contains no assumed cause | Yes / No |
| QA approved the problem statement (name, date) | `<<FILL>>` |

## Section C: Risk assessment and containment

| Field | Entry |
|---|---|
| Affected product in distribution? | Yes / No / Not applicable |
| Affected scope (boundary of "affected") | `<<FILL: one instrument / whole lab; one batch / all since last known-good>>` |
| Potential impact | Negligible / Minor / Major / Critical |
| Likelihood of recurrence | Isolated / Occasional / Frequent / Systemic |
| Risk classification (drives timeline) | `<<FILL: from the impact x recurrence matrix>>` |
| Immediate corrections / containment taken | `<<FILL: actions, owner, date>>` |
| Containment decided, not deferred? | Yes / No |

## Section D: Root cause analysis

| Field | Entry |
|---|---|
| Method used | 5-Why / Fishbone (Ishikawa) / FMEA / other: `<<FILL>>` |
| Investigation summary | `<<FILL: how the cause was reached>>` |
| Evidence cited | `<<FILL: records, configuration logs, interviews, system state>>` |
| Root cause (systemic) | `<<FILL: the systemic reason, not a description of what happened>>` |
| If operator action: why did the system allow it to cause harm? | `<<FILL: procedure / training / design gap>>` |
| Root cause logically explains the problem statement? | Yes / No |
| QA approved the root cause (name, date) | `<<FILL>>` |

## Section E: Corrective and preventive action plan

| # | Action | Type (CA / PA) | Effectiveness tier (1-5) | Owner | Due date | Verification evidence | Verified (date) |
|---|---|---|---|---|---|---|---|
| 1 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 2 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 3 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

Effectiveness tiers: 1 = eliminate or design out, 2 = engineering or system control, 3 = automated detection, 4 = procedural control, 5 = training or awareness. Any action standing alone at tier 4 or 5 needs a recorded reason a higher tier was not feasible.

| Read-across (preventive) | Entry |
|---|---|
| Where else could this cause exist? | `<<FILL: adjacent systems, products, processes>>` |
| Read-across performed? | Yes / No |
| Result | `<<FILL: found and added to scope, or "none found, here is why">>` |
| 211.192 extension addressed (drug investigations) | Yes / Not applicable |

## Section F: Effectiveness check (defined at opening)

| Field | Entry |
|---|---|
| Criterion (what "effective" looks like) | `<<FILL: e.g. zero recurrence over the window>>` |
| Metric and method | `<<FILL: recurrence count / deviation rate vs baseline / re-audit>>` |
| Scheduled date | `<<FILL: date>>` |
| Criteria set at opening? | Yes / No |
| Result (recorded at scheduled date) | Pass / Fail: `<<FILL: with supporting data>>` |
| If fail: CAPA reopened, root cause revisited (reference) | `<<FILL>>` |

## Section G: Linked records

| Record type | Number |
|---|---|
| Deviation | `<<FILL or N/A>>` |
| OOS / OOT | `<<FILL or N/A>>` |
| Change control | `<<FILL or N/A>>` |
| Complaint | `<<FILL or N/A>>` |
| Audit report | `<<FILL or N/A>>` |
| Other | `<<FILL or N/A>>` |

## Section H: Closure

A CAPA may be closed only when all actions are verified, read-across is documented, and the effectiveness check has passed with data.

| Closure check | Confirmed |
|---|---|
| All actions verified with objective evidence | Yes / No |
| Read-across documented | Yes / No |
| Effectiveness check passed with data | Yes / No |
| Linked records updated | Yes / No |
| CAPA owner (name, signature, date) | `<<FILL>>` |
| QA approval of closure (name, signature, date) | `<<FILL>>` |

## References

> 21 CFR 820.100 (corrective and preventive action; for devices now read through the Quality Management System Regulation incorporating ISO 13485:2016, effective 02 February 2026).
> ISO 13485:2016, clauses 8.5.2 and 8.5.3.
> 21 CFR 211.192 (investigation of discrepancies and failures, including extension to other batches and products).
> ICH Q10 (CAPA as a core element of the pharmaceutical quality system) and ICH Q9 (quality risk management).

Confirm the current version and clause numbers of each reference before issue.

---

## Filled specimen

The following shows the form completed for an example data integrity event, so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

**Section A.** CAPA-2026-0142, opened 18 June 2026. Initiator: A. Patel, QA Auditor. CAPA owner: M. Reyes, Lab Operations Manager. Source: internal audit. Source record: IA-2026-09. Type: corrective.

**Section B.** "Internal audit conducted 15 June 2026 identified that a liquid chromatography instrument (asset tag LC-04) had its audit trail disabled for sequence integration events. 47 analytical sequences processed between 01 January 2026 and 15 May 2026 ran without a complete audit trail. Detected by audit trail configuration review." Cause-free: yes. QA approved: A. Patel, 18 June 2026.

**Section C.** Affected product in distribution: yes (31 of 47 sequences supported released batches). Affected scope: LC-04 only, confirmed by configuration review of all lab systems. Impact: major. Recurrence: systemic (change-control gap). Classification: major, expedited. Containment: LC-04 taken out of GMP service 15 June 2026; data review of 47 sequences initiated. Containment decided: yes.

**Section D.** Method: 5-Why. Summary: audit trail disabled because a vendor IT upgrade reset settings to default; the upgrade ran through change control but the change control SOP had no validation impact assessment checkpoint. Evidence: change record CC-2025-318, system configuration log, vendor upgrade notes. Root cause: change control SOP gap (no validation impact assessment step for IT changes). Operator-action question: not applicable, the cause is a process gap. Explains the problem statement: yes. QA approved: A. Patel, 22 June 2026.

**Section E.**

| # | Action | Type | Tier | Owner | Due | Verified |
|---|---|---|---|---|---|---|
| 1 | Reconfigure LC-04 audit trail to capture integration events; verify | CA | 2 | Lab IT | 22 June 2026 | 22 June 2026 |
| 2 | Revise change control SOP to add a validation impact assessment checkpoint for IT changes | CA | 4 | QA | 30 June 2026 | 25 June 2026 |
| 3 | Train IT and validation staff on the revised SOP | CA | 5 | Training | SOP + 30 days | 24 July 2026 |

Read-across: all 12 GMP computerized lab systems reviewed for the same default-reset exposure. Performed: yes. Result: 2 additional systems found and added to corrective scope. 211.192 extension: addressed for the affected drug products.

**Section F.** Criterion: zero new audit-trail-disabled findings on any computerized lab system attributable to a change, over 6 months after SOP approval. Metric and method: targeted re-audit. Scheduled date: 25 December 2026. Set at opening: yes. Result: pending scheduled date.

**Section G.** Deviation DEV-2026-077; change control CC-2026-205; audit report IA-2026-09.

**Section H.** All actions verified: actions 1 to 3 complete. Read-across documented: yes. Effectiveness check passed: pending December re-audit. Closure: held open until the effectiveness result is recorded.

The record shows the discipline that matters: the action plan reaches the systemic cause, climbs as high on the effectiveness hierarchy as the change allows, the read-across found two more systems, and the form stays open until the effectiveness data lands.

## Common inspection findings this form prevents

- Corrections recorded with no corrective action that reaches the root cause.
- A cause smuggled into the problem statement, biasing the investigation.
- Root cause stated as "human error" with no system question and no evidence.
- An action plan with no owners or due dates, or with every action at the training tier.
- A read-across that was never done, so the same finding surfaces on an identical system later.
- An effectiveness check with no criterion set at opening, or closure before the check produced data.
- Linked records that exist but do not reference each other, so the full story cannot be reconstructed.

## How to adapt this form

1. Set your form number, governing SOP, and retention in the header.
2. Add or remove action rows in Section E to match your typical CAPA size; keep the tier column, it is what makes weak fixes visible.
3. If you use an electronic quality management system, map each section here to the system's fields and workflow states so the paper form and the system stay aligned.
4. Keep Section F (effectiveness defined at opening) as a gate the workflow cannot skip; backfilled criteria are a common finding.
5. Confirm every regulation in the references against the current published version before issue.
