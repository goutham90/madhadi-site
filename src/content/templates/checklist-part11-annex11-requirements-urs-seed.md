---
title: "Checklist: Part 11 / Annex 11 Data Integrity Requirements to Seed a URS"
description: "A plug-and-play checklist of the electronic-records, audit-trail, e-signature, access, and time controls that should appear as explicit requirements in a GxP system URS, so Part 11 and Annex 11 controls are specified up front rather than assumed, with a filled specimen and the regulations it satisfies."
pubDate: 2026-07-01
docType: "Checklist"
pillar: "csv-csa"
relatedArticles: ["user-requirements-and-traceability"]
tags: ["21 cfr part 11", "annex 11", "data integrity", "urs", "requirements", "audit trail", "electronic signature"]
tier: "Intermediate"
---

This is a ready-to-use checklist of the data integrity controls that should be written as explicit requirements in the URS of any GxP computerized system that holds electronic records or applies electronic signatures. The article on requirements and traceability makes the point directly: pull every Part 11 and Annex 11 control into requirements up front, using a standard list, so these controls are never assumed and never left untested. Use each row to confirm a matching, testable URS requirement exists (record its ID), or to mark the control not applicable with a rationale. Replace every `<<FILL: ...>>` placeholder with your own specifics. A worked filled specimen follows. Verify each cited regulation against the current source before you rely on it, and confirm the in-force Annex 11.

## Document control header

| Field | Entry |
|---|---|
| System | `<<FILL: system name / ID>>` |
| URS reference | `<<FILL: URS doc no and version>>` |
| Electronic records? | `<<FILL: Yes / No>>` |
| Electronic signatures? | `<<FILL: Yes / No>>` |
| Reviewer(s) | `<<FILL: names, roles>>` |
| Date | `<<FILL: date>>` |

## How to use

For each control, confirm the URS contains a testable requirement that specifies it (write the requirement ID in the last column), or mark it N/A with a documented reason. A control that applies but has no requirement is a gap to fix before the URS is approved. Not every system needs every control; a system with no electronic signatures legitimately marks that block N/A.

## 1. Access control and user management

| # | Control (write as a testable requirement) | Reference | URS req ID / NA |
|---|---|---|---|
| 1.1 | Unique user identity per individual; user IDs are never reused for a different person. | Part 11 11.10(d); Annex 11 cl. 12 | `<<FILL>>` |
| 1.2 | Authentication (password policy or stronger) enforced; no shared or generic GxP accounts. | Part 11 11.10(d); Annex 11 cl. 12 | `<<FILL>>` |
| 1.3 | Role-based access with least privilege; access levels defined and restricted. | Annex 11 cl. 12 | `<<FILL>>` |
| 1.4 | Segregation of duties enforced (for example, an approver cannot be the originator of the same record). | Part 11 11.10(g); Annex 11 cl. 2, 12 | `<<FILL>>` |
| 1.5 | Access is granted, changed, and revoked under a controlled process, with periodic access review. | Annex 11 cl. 12 | `<<FILL>>` |
| 1.6 | Automatic session lock / logout after a defined idle period. | Annex 11 cl. 12 | `<<FILL>>` |

## 2. Audit trail

| # | Control (write as a testable requirement) | Reference | URS req ID / NA |
|---|---|---|---|
| 2.1 | Secure, computer-generated, time-stamped audit trail for creation, modification, and deletion of GxP records. | Part 11 11.10(e); Annex 11 cl. 9 | `<<FILL>>` |
| 2.2 | Each change captures old value, new value, who, when (date and time), and reason where required. | Part 11 11.10(e); Annex 11 cl. 9 | `<<FILL>>` |
| 2.3 | Audit trail cannot be edited or switched off by ordinary users; changes to the audit trail configuration are themselves logged. | Part 11 11.10(e) | `<<FILL>>` |
| 2.4 | Audit trail is available for review in a human-readable form and can be reviewed by exception. | Annex 11 cl. 9 | `<<FILL>>` |
| 2.5 | Audit trail is retained for at least as long as the records it describes. | Part 11 11.10(c); Annex 11 cl. 9 | `<<FILL>>` |

## 3. Electronic signatures (if used)

| # | Control (write as a testable requirement) | Reference | URS req ID / NA |
|---|---|---|---|
| 3.1 | Each electronic signature is unique to one individual and not reused or reassigned. | Part 11 11.100(a) | `<<FILL>>` |
| 3.2 | Signature manifestation shows the printed name of the signer, date and time, and the meaning of the signature (reviewed, approved, authored). | Part 11 11.50 | `<<FILL>>` |
| 3.3 | Signatures are linked to their records so they cannot be excised, copied, or transferred. | Part 11 11.70 | `<<FILL>>` |
| 3.4 | Signings based on ID plus password use two components on first signing in a session and are re-authenticated appropriately. | Part 11 11.200 | `<<FILL>>` |

## 4. Record integrity, copies, and retention

| # | Control (write as a testable requirement) | Reference | URS req ID / NA |
|---|---|---|---|
| 4.1 | Records are protected from unauthorized change throughout the retention period; original (raw) data is preserved. | Part 11 11.10(c); Annex 11 cl. 7 | `<<FILL>>` |
| 4.2 | Accurate and complete copies can be produced in human-readable and electronic form for inspection. | Part 11 11.10(b); Annex 11 cl. 8 | `<<FILL>>` |
| 4.3 | Data can be printed or exported with its context and audit trail intact. | Annex 11 cl. 8 | `<<FILL>>` |
| 4.4 | Retention period defined and enforced per the records retention schedule; archived data remains retrievable and readable. | Annex 11 cl. 17 | `<<FILL>>` |
| 4.5 | Backup and restore of records and metadata is provided and periodically verified. | Annex 11 cl. 7 | `<<FILL>>` |

## 5. Data operations and controls

| # | Control (write as a testable requirement) | Reference | URS req ID / NA |
|---|---|---|---|
| 5.1 | Input/entry checks and, where relevant, operational sequencing enforce valid data (e.g., mandatory fields, range checks). | Part 11 11.10(f), 11.10(h) | `<<FILL>>` |
| 5.2 | System clock is synchronized to a reliable time source; users cannot alter the time on GxP records. | Annex 11 cl. 9 | `<<FILL>>` |
| 5.3 | Data created or exchanged over interfaces is checked for correct and secure transfer (no silent loss or corruption). | Annex 11 cl. 5 | `<<FILL>>` |
| 5.4 | Calculations and reports on GxP data are specified and verified (right formula, rounding, units). | Annex 11 cl. 4, 5 | `<<FILL>>` |

## Acceptance criteria

The block is complete when every applicable control maps to a testable URS requirement ID, and every N/A carries a documented reason. Any applicable control with no requirement is a gap that blocks URS approval, because a control that is never specified will never be tested.

## References

> 21 CFR Part 11 (electronic records and signatures), subparts B and C.
> EU GMP Annex 11 (Computerised Systems); note the EU is revising Annex 11, so confirm the in-force clause numbers.
> MHRA GxP Data Integrity Guidance and Definitions; PIC/S PI 041, Good Practices for Data Management and Integrity.
> FDA Data Integrity and Compliance with Drug CGMP (2018).

Confirm the current version and clause numbers before issue.

## Sign-off

| Role | Name | Signature | Date |
|---|---|---|---|
| Reviewer (SME) | `<<FILL>>` | | |
| Reviewer (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows part of the checklist completed against an illustrative LIMS URS, so you can see how it drives requirements into the document.

| # | Control | URS req ID / NA |
|---|---|---|
| 1.1 | Unique user identity per individual | URS-012 |
| 1.4 | Segregation of duties (approver not originator) | URS-014 |
| 2.2 | Audit entry captures old/new value, user, time, reason | URS-013 |
| 3.2 | Signature shows name, date/time, meaning | URS-024 |
| 5.2 | Clock synchronized; users cannot alter time | Gap, no requirement found |

Row 5.2 exposed the useful failure: the URS specified the audit trail but never required a synchronized, user-protected clock, so a time stamp could in principle be altered. The reviewer raised it, and URS-013b was added before approval. Finding that gap on paper, months before testing, is exactly why the checklist is run at the URS stage rather than discovered during OQ or, worse, during an inspection.

## Common inspection findings this checklist prevents

- An audit trail requirement that exists but never actually captures old values, because the requirement was too vague to test against.
- No requirement for time synchronization, so records carry timestamps a user could change.
- Shared or generic accounts in a GxP system, because unique-identity was never made a requirement.
- Electronic signatures with no stated meaning, so an inspector cannot tell what a signature attests to.
- Data integrity controls present in the product but never specified, risk-assessed, or verified, so their correct configuration was never confirmed.

## How to adapt this checklist

1. Set the system and URS reference in the header, and mark whether electronic records and signatures apply.
2. Delete the electronic-signature block if the system applies none, with a recorded rationale.
3. Align clause references to the in-force Annex 11 version when the revision is finalized.
4. Feed each confirmed control into the URS with a unique ID, then carry those IDs into the traceability matrix.
5. Confirm every regulation against the current published version before issue.
