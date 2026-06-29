---
title: "Matrix: IRB/EC and Authority Deviation Reporting Requirements"
description: "A plug-and-play matrix mapping each governing IRB/EC and competent authority to its protocol-deviation reporting threshold and timeline, so a multi-site study reports each deviation to the right body within the right clock, with a filled specimen."
pubDate: 2026-06-29
docType: "Matrix"
pillar: "clinical-gcp"
relatedArticles: ["protocol-deviation-management", "ich-e6-good-clinical-practice", "gcp-audits-and-inspections"]
tags: ["protocol-deviation", "gcp", "clinical-trials", "Matrix", "irb", "inspection-readiness"]
tier: "Intermediate"
---

This is a ready-to-use matrix to capture, per study, the deviation reporting threshold and timeline of every governing IRB/EC and competent authority. A multi-site trial can face many IRBs with different rules; this matrix is what keeps a site from reading the rulebook in the middle of a reporting clock. Build it at study startup and keep it current. Replace every `<<FILL: ...>>` placeholder. A field guide and a filled specimen follow.

## Why this matrix exists

The same deviation can be reportable within 5 working days to one IRB, at continuing review to another, and a 7-day serious-breach notification to an EU Member State. Without a single per-study map, reporting is ad hoc, deadlines are missed, and the deviation log fails to reconcile to the IRB submissions, which is a finding by itself. This matrix is the controlled answer to "where and how fast does this go."

## Field guide

| Field | Format | Required | Who enters | When |
|---|---|---|---|---|
| Body | IRB / EC / competent authority name | Yes | Regulatory / clinical | At startup |
| Sites governed | Site numbers | Yes | Clinical | At startup |
| Jurisdiction | Country / region | Yes | Regulatory | At startup |
| Deviation type | Category | Yes | Clinical QA | At startup |
| Reportable? | Yes / log only | Yes | Clinical QA | At startup |
| Timeline | Clock | Yes | Clinical QA | At startup |
| Submission route | Portal / form | Yes | Regulatory | At startup |
| Source | SOP / IRB policy reference | Yes | Regulatory | At startup |

## The matrix

| Body | Sites governed | Jurisdiction | Deviation type | Reportable? | Timeline | Route | Source |
|---|---|---|---|---|---|---|---|
| `<<FILL: IRB name>>` | `<<FILL>>` | `<<FILL>>` | Immediate-hazard deviation | `<<FILL: Yes, prompt>>` | `<<FILL: e.g. 5 working days, after the fact>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Important, affects safety / rights | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Important, affects data only | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Minor / administrative | `<<FILL: log only>>` | `<<FILL: continuing review>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: competent authority>>` | `<<FILL: all EU sites>>` | `<<FILL: EU>>` | Serious breach | `<<FILL: Yes>>` | `<<FILL: 7 days from awareness>>` | `<<FILL: CTIS>>` | `<<FILL: Reg (EU) 536/2014 Art. 52>>` |

## Acceptance criteria

- Every governing body for the study appears, mapped to the sites it governs.
- Each deviation type has a defined reportability, timeline, route, and a cited source.
- Immediate-hazard and serious-breach rows are present and correct.
- The matrix is version-controlled and updated when a site or IRB is added.

## References

> 21 CFR 56.108 (IRB written procedures for prompt reporting) and individual IRB policies.
> 21 CFR 312.66 (investigator reporting duties).
> Regulation (EU) No 536/2014, Article 52 (serious breach) and CTIS.
> ICH E6 GCP.

Confirm each body's current policy before relying on this matrix; IRB timelines are set by the IRB, not assumed.

---

## Filled specimen

Illustrative entries for a two-region study. Replace with the actual policies of your bodies.

| Body | Sites governed | Jurisdiction | Deviation type | Reportable? | Timeline | Route | Source |
|---|---|---|---|---|---|---|---|
| Central IRB A | 01-12 (US) | US | Immediate-hazard | Yes | 5 working days, after the fact | IRB portal | IRB Policy 4.2 |
| Central IRB A | 01-12 (US) | US | Important, safety/rights | Yes | 10 working days | IRB portal | IRB Policy 4.2 |
| Central IRB A | 01-12 (US) | US | Important, data only | At continuing review | Annual | IRB portal | IRB Policy 4.3 |
| Local EC, Site 14 | 14 (DE) | EU | Important, safety/rights | Yes | Per EC SOP, 7 days | EC submission | EC SOP / national rule |
| National competent authority (DE) | All EU sites | EU | Serious breach | Yes | 7 days from sponsor awareness | CTIS | Reg (EU) 536/2014 Art. 52 |

The value is operational: when subject S-014-007's important data-only deviation occurred at site 14, the matrix told the team in seconds that it went to the local EC per its SOP (not the US central IRB's rule) and that it did not meet the serious-breach bar, so no CTIS notification. That is the difference between a clean reporting record and an avoidable missed clock.

## Common inspection findings this matrix prevents

- A deviation reported to the wrong body, or late, because the site applied another IRB's rule.
- A serious breach not notified within seven days because no one had mapped the clock.
- A deviation log that cannot be reconciled to the IRB submission records.

## How to adapt this matrix

1. Add one block of rows per governing body; key minor rows to "log only / continuing review" where that is the policy.
2. Keep a change-controlled version; re-issue when a site or IRB is added mid-study.
3. Link each row's source to the actual IRB policy document or national rule in the TMF.
