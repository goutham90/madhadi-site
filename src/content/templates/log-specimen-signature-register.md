---
title: "Log: Specimen Signature and Initials Register"
description: "A plug-and-play specimen signature register that maps each person's legal name to their signature and initials, resolves initial collisions, and records effective and end dates, with field definitions and a filled specimen so every initial in a GxP record traces to a named individual."
pubDate: 2026-06-30
docType: "Log"
pillar: "data-integrity"
relatedArticles: ["good-documentation-practices"]
tags: ["good documentation practices", "GDocP", "signature register", "attribution", "data integrity", "log"]
tier: "Beginner"
---

This is a ready-to-use specimen signature register (also called a signature log or specimen signature record). Its job is simple and load-bearing: without it, an initial such as "AB" in a batch record means nothing. Replace every `<<FILL: ...>>` placeholder, register it under the parent SOP `<<FILL: GDocP SOP-ID>>`, and keep it current as people join, change role, or leave. A field-definition table, the blank register, instructions, and a filled specimen follow. This is general guidance to adapt and verify, not legal or regulatory advice.

## Header

| Field | Entry |
|---|---|
| Register number | `<<FILL: e.g. REG-QA-002-01>>` |
| Parent SOP | `<<FILL: GDocP SOP-ID>>` |
| Site / area | `<<FILL>>` |
| Register owner | `<<FILL: role, e.g. QA / area manager>>` |
| Page | `<<FILL: page of pages>>` |

## Field definitions

| Field | Format | Required | Who enters | When |
|---|---|---|---|---|
| Full legal name | Text | Yes | Register owner | On adding a person |
| Role / title | Text | Yes | Register owner | On adding |
| Initials | Letters (disambiguated) | Yes | Person + owner | On adding |
| Signature specimen | Handwritten | Yes | The person | On adding, in person |
| Effective date | YYYY-MM-DD | Yes | Register owner | When access to record begins |
| End date | YYYY-MM-DD or "active" | Yes | Register owner | When access ends |
| Verified by | Name + date | Yes | Register owner | On adding and on change |

## Blank register

| Full legal name | Role / title | Initials | Signature specimen | Effective date | End date | Verified by |
|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | *(handwritten)* | `<<FILL>>` | active | `<<FILL>>` |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | *(handwritten)* | `<<FILL>>` | active | `<<FILL>>` |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | *(handwritten)* | `<<FILL>>` | active | `<<FILL>>` |

## Instructions

1. Each person provides their genuine handwritten signature and initials in person; do not pre-fill or copy them.
2. If two people would share the same initials, the second uses a disambiguator (for example a middle initial), defined here, so a reviewer can always resolve an initial to one person.
3. Add a person before they make any GxP entry, never after the fact.
4. When a person changes role or leaves, set the end date; do not delete the row. The register is a continuous historical record, so a reviewer can resolve initials in an old batch record years later.
5. Make any correction to the register itself with the single-line method (initials, date, reason); never obliterate.
6. The register owner verifies each addition and change and signs the "verified by" field.
7. Retain the register for the full GxP retention period; an old record references the people who were active when it was written.

## Retention

Retain for not less than `<<FILL: retention period, aligned to the longest retention of the records it supports>>`.

## Filled specimen

| Full legal name | Role / title | Initials | Signature specimen | Effective date | End date | Verified by |
|---|---|---|---|---|---|---|
| Anil Bose | Manufacturing operator | AB | *(handwritten)* | 2026-01-15 | active | R. Gomez, 2026-01-15 |
| Anita Brar | QC analyst | ANB | *(handwritten)* | 2026-02-01 | active | R. Gomez, 2026-02-01 |
| Arjun Banerjee | QC analyst | AB-2 | *(handwritten)* | 2026-03-10 | active | R. Gomez, 2026-03-10 |

Note the disambiguation: three people could collide on "AB". Anita Brar uses "ANB" and Arjun Banerjee uses "AB-2", both defined here, so a reviewer reading "AB", "ANB", or "AB-2" in any record can resolve each to one person. When Anita Brar transfers out, her row stays and gets an end date; it is never removed, because batch records she signed must remain resolvable.

## Common inspection findings this register prevents

- Initials in a batch record that cannot be tied to any named individual.
- Two people sharing the same initials with no way to tell which one made an entry.
- A person's row deleted when they left, leaving their historical signatures unresolvable.
- Signatures or initials filled in by someone other than the person.

## How to adapt

1. Set your register number, owner, and parent SOP.
2. Decide your disambiguation convention and state it on the form.
3. Align the retention period to the longest-retained records the register supports.
4. If you maintain a parallel electronic identity record, state which is the controlled source and how they are kept consistent.
