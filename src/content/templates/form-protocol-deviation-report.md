---
title: "Form: Protocol Deviation Report"
description: "A plug-and-play per-event clinical protocol deviation record capturing identification, classification, reporting, CAPA, and data-impact, structured so the deviation log reconciles to the IRB submissions and the CSR, with field definitions and a filled specimen."
pubDate: 2026-06-29
docType: "Form"
pillar: "clinical-gcp"
relatedArticles: ["protocol-deviation-management", "ich-e6-good-clinical-practice", "etmf-trial-master-file"]
tags: ["protocol-deviation", "gcp", "clinical-trials", "Form", "data-integrity", "csr"]
tier: "Intermediate"
---

This is a ready-to-use per-event record for a single clinical protocol deviation. It is the paired form for the [protocol deviation management SOP](/templates/sop-protocol-deviation-management). Replace every `<<FILL: ...>>` placeholder. Always identify the subject by ID, never by name. A field guide and a filled specimen follow.

## Field guide

| Field | Format | Required | Who enters | When |
|---|---|---|---|---|
| Deviation ID | `<<FILL: scheme, e.g. PD-014-031>>` | Yes | Site / sponsor | At identification |
| Study / protocol version | Text | Yes | Site | At identification |
| Site number | Text | Yes | Site | At identification |
| Subject ID | ID only, no name | Yes | Site | At identification |
| Protocol section departed from | Text | Yes | Site | At identification |
| Event date / discovery date | Date / date | Yes | Site | At identification |
| Identified by / channel | Text | Yes | Site / CRA | At identification |

## Section 1: Identification

| Field | Entry |
|---|---|
| Deviation ID | `<<FILL>>` |
| Study / protocol version | `<<FILL>>` |
| Site number | `<<FILL>>` |
| Subject ID | `<<FILL: ID only>>` |
| Protocol section / requirement departed from | `<<FILL>>` |
| Event date / discovery date | `<<FILL>>` |
| Identified by / channel (self, CRA, central monitoring, audit) | `<<FILL>>` |
| Description of what happened | `<<FILL>>` |
| Immediate action taken | `<<FILL>>` |

## Section 2: Classification

| Field | Entry |
|---|---|
| Affects subject safety / rights / wellbeing? | `<<FILL: Y/N + how>>` |
| Affects data used in an analysis? Which? | `<<FILL: primary / key secondary / safety / PK / none>>` |
| Isolated or pattern? | `<<FILL>>` |
| Classification | `<<FILL: Minor / Important>>` |
| Classification rationale (against written criteria) | `<<FILL>>` |
| Candidate EU serious breach? | `<<FILL: Y/N + basis; if Y, escalate to sponsor now>>` |
| Classified by / date | `<<FILL>>` |

## Section 3: Reporting

| Field | Entry |
|---|---|
| Governing IRB/EC | `<<FILL>>` |
| IRB/EC reporting required? Threshold / timeline | `<<FILL>>` |
| IRB/EC submitted (date) / acknowledged (date) | `<<FILL>>` |
| Immediate-hazard deviation reported after the fact? | `<<FILL: Y/N/NA>>` |
| Serious breach notified to authority (date)? | `<<FILL: date or N/A>>` |
| Sponsor notified (date) | `<<FILL>>` |

## Section 4: Root cause and CAPA

| Field | Entry |
|---|---|
| Root cause | `<<FILL>>` |
| Correction (this instance) | `<<FILL>>` |
| Preventive action (systemic, all affected sites) | `<<FILL>>` |
| CAPA reference | `<<FILL: number or N/A>>` |
| Effectiveness verification plan | `<<FILL>>` |

## Section 5: Data-impact assessment

| Field | Entry |
|---|---|
| Analysis population effect (per SAP) | `<<FILL>>` |
| Subject retained / excluded from per-protocol? | `<<FILL>>` |
| Sensitivity analysis needed / result | `<<FILL>>` |
| Predefined CSR category | `<<FILL>>` |
| Assessed by (biostatistics / medical monitor) / date | `<<FILL>>` |

## Section 6: Closure

| Field | Entry |
|---|---|
| Filed in ISF / TMF (Y/N) | `<<FILL>>` |
| PI sign-off (name, signature, date) | `<<FILL>>` |
| Sponsor / QA review (name, signature, date) | `<<FILL>>` |
| Status | `<<FILL: Open / Closed>>` |

## Acceptance criteria

- Subject identified by ID only; classification rationale recorded against written criteria.
- IRB/EC and (if applicable) serious-breach reporting captured with dates and acknowledgments.
- CAPA addresses the systemic cause where the deviation is a pattern.
- Data-impact assessment maps the deviation to the SAP populations; CSR category assigned.

## References

> ICH E6 GCP (investigator and sponsor deviation obligations).
> ICH E3 (CSR section 10.2; Appendix 16.2.2).
> 21 CFR 312.66; 21 CFR 56.108; Regulation (EU) No 536/2014 Article 52.

Confirm current versions before issue.

---

## Filled specimen

Illustrative completed record.

| Section | Entry |
|---|---|
| Deviation ID | PD-014-031 |
| Subject ID | S-014-007 |
| Section departed from | 7.3, primary endpoint sampling window |
| Event / discovery | Sample drawn 11 days post-visit (4 days out of window); discovered at monitoring visit |
| Classification | Important; touches the primary endpoint; rationale recorded; not a serious breach |
| Reporting | Site IRB threshold 10 working days; submitted well inside the clock; acknowledged; no authority notification |
| CAPA | PD-CAPA-022: retrain site; add study-wide out-of-window alert; effectiveness over two cycles |
| Data impact | Stays in full analysis set; drops from per-protocol; sensitivity analysis confirms effect holds; CSR category "primary endpoint outside window" |
| Closure | Filed in TMF; PI signed; sponsor QA reviewed; Closed |

The record carries everything an inspector reconciles: the honest "Important" classification with its rationale, the in-clock IRB submission, the systemic CAPA, and the analysis handling, all traceable to one subject ID.

## Common inspection findings this form prevents

- Subject identified by name (a privacy and GCP failure).
- A classification with a verdict but no rationale.
- A deviation reported to the IRB but never logged, or logged but never reported.
- No data-impact assessment for a deviation that touched the primary endpoint.

## How to adapt this form

1. Pre-load your predefined CSR categories so Section 5 is a pick-list.
2. Reference your written classification criteria next to Section 2.
3. If you use an electronic deviation system, map these fields to its structured fields so the data stays queryable for trending.
