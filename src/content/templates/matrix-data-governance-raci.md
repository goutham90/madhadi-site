---
title: "Matrix: Data Governance Roles RACI"
description: "A plug-and-play RACI matrix assigning responsibility, accountability, consultation, and information across data integrity and data governance activities, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Matrix"
pillar: "data-integrity"
relatedArticles: ["data-integrity-foundations"]
tags: ["data governance", "raci", "data integrity", "roles and responsibilities", "accountability", "governance"]
tier: "Intermediate"
---

This is a ready-to-use RACI matrix. It assigns who is Responsible, Accountable, Consulted, and Informed for the activities that make up a data governance and data integrity program. Data integrity fails most often when everyone assumes someone else owns it; this matrix removes that ambiguity. Replace every `<<FILL: ...>>` placeholder, map the generic roles to your real job titles, and route it through document control. A worked filled specimen follows the template. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Data Governance Roles RACI |
| Document number | `<<FILL: MTX-ID, e.g. MTX-QA-003>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Document owner | `<<FILL: role, e.g. Data Integrity Lead / Head of Quality>>` |
| Applies to | `<<FILL: sites / functions in scope>>` |
| Parent policy | `<<FILL: POL-ID for the Data Integrity Policy>>` |

## How to read this matrix

RACI assigns exactly one type of involvement per role per activity:

- **R, Responsible**: does the work. There can be more than one R.
- **A, Accountable**: owns the outcome and signs off. There is exactly one A per activity. The A cannot be delegated away.
- **C, Consulted**: gives input before the work is done (two-way).
- **I, Informed**: told after the fact (one-way).

Rules this matrix enforces:
1. Every activity has exactly one A.
2. The person who generates data is never the sole A or R for deleting it or for reviewing their own audit trail; segregation of duty is built in.
3. Where a cell is blank, that role has no defined involvement in that activity.

## Roles

Map each generic role to your real title in the column below. Add or remove roles to fit your organization, but keep the segregation between data originator and system administrator.

| Code | Generic role | Your title |
|---|---|---|
| MGT | Executive management / management review | `<<FILL>>` |
| QA | Quality Assurance / Data Integrity Lead | `<<FILL>>` |
| SO | System owner | `<<FILL>>` |
| PO | Process owner / business function head | `<<FILL>>` |
| DO | Data originator (analyst, operator, coordinator) | `<<FILL>>` |
| REV | Reviewer / second person | `<<FILL>>` |
| ADM | System administrator (independent of DO) | `<<FILL>>` |
| IT | IT / infrastructure | `<<FILL>>` |
| VAL | Validation / CSV | `<<FILL>>` |

## RACI matrix

### Strategy and governance

| Activity | MGT | QA | SO | PO | DO | REV | ADM | IT | VAL |
|---|---|---|---|---|---|---|---|---|---|
| Set and approve the data integrity policy | A | R | C | C | I | I | C | C | C |
| Provide resources and set quality culture | A | C | I | C | I | I | I | I | I |
| Review data integrity metrics in management review | A | R | C | C | I | I | I | I | C |
| Maintain the GxP system inventory | I | A | R | C | I | I | C | C | C |
| Assign data criticality and risk rating | I | A | R | C | C | I | I | I | C |

### System lifecycle and controls

| Activity | MGT | QA | SO | PO | DO | REV | ADM | IT | VAL |
|---|---|---|---|---|---|---|---|---|---|
| Validate the computerized system (CSV) | I | C | C | C | I | I | C | C | A |
| Enable and configure the audit trail | I | C | A | I | I | I | R | C | C |
| Manage user accounts and access (provision / revoke) | I | C | A | C | I | I | R | C | I |
| Maintain time synchronization and clock control | I | I | C | I | I | I | C | A | I |
| Take backups and test restore | I | C | A | I | I | I | C | R | C |
| Plan format migration and archival | I | C | A | C | I | I | C | R | C |

### Records and review

| Activity | MGT | QA | SO | PO | DO | REV | ADM | IT | VAL |
|---|---|---|---|---|---|---|---|---|---|
| Generate records contemporaneously and accurately | I | I | I | A | R | I | I | I | I |
| Review the result, audit trail, and metadata | I | C | I | A | I | R | I | I | I |
| Perform periodic audit trail review | I | A | C | C | I | R | C | I | I |
| Approve true copies | I | A | C | C | R | C | I | I | I |
| Retain and archive records per schedule | I | A | R | C | I | I | C | C | I |

### Issues, change, and oversight

| Activity | MGT | QA | SO | PO | DO | REV | ADM | IT | VAL |
|---|---|---|---|---|---|---|---|---|---|
| Raise and investigate a deviation / data integrity issue | I | A | C | C | R | C | C | C | C |
| Run an OOS investigation | I | A | C | R | R | C | I | I | I |
| Approve and control system changes | I | C | A | C | I | I | C | C | R |
| Conduct internal data integrity audits | C | A | C | C | I | I | C | C | C |
| Oversee contracted parties (CDMO / CRO / lab) | I | A | C | R | I | I | I | I | C |
| Deliver data integrity training | I | A | C | R | I | I | I | I | C |
| Defend records during a regulatory inspection | C | A | R | R | C | C | C | C | C |

## Segregation of duty note

The matrix deliberately separates two responsibilities that must never sit with the same person for the same system:

- The data originator (DO) generates records but is never the administrator (ADM) who can delete data or alter the audit trail.
- The reviewer (REV) of an audit trail or result is not the person who created the entries under review.

If your org chart forces an overlap (common at small sites), document a compensating control, for example a second-site reviewer or a QA spot-check, and record it against the affected activity.

## Acceptance criteria

This matrix is being used correctly when:

- Every activity has exactly one Accountable role, and that person can name what they own.
- No data originator holds administrator rights on a system whose data they generate.
- Each role can produce evidence of the activities where it is marked R or A.
- The matrix is current with the live org chart and is reviewed when roles change.

## References

> 21 CFR Part 211 (drug CGMP recordkeeping and laboratory controls).
> 21 CFR Part 11 (electronic records and signatures, including access controls).
> 21 CFR Part 820 (device quality system; QMSR amendments effective February 2026).
> EU GMP Annex 11 (computerized systems; segregation of duties and access control).
> FDA guidance, "Data Integrity and Compliance With Drug CGMP" (December 2018).
> MHRA "GXP Data Integrity Guidance and Definitions" (March 2018).
> PIC/S PI 041 (good practices for data management and integrity).
> ICH Q9 (quality risk management), ICH Q10 (pharmaceutical quality system, management responsibility).

Confirm the current version and clause numbers of each reference before issue.

## Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (QA) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the role mapping and a few activity rows completed for an illustrative mid-size company, so you can see how the generic codes resolve to real titles. Titles and notes are illustrative; replace them with your own.

Role mapping as adopted:

| Code | Generic role | Title at this company |
|---|---|---|
| MGT | Executive management | VP Quality (chairs the Quality Council) |
| QA | Quality Assurance / DI Lead | Data Integrity Lead, reporting to QA Director |
| SO | System owner | QC Laboratory Systems Manager |
| DO | Data originator | QC Analyst |
| REV | Reviewer | Senior QC Analyst (not the run analyst) |
| ADM | System administrator | IT Lab Systems Admin (no result-generation role) |

Sample of completed activity rows:

| Activity | A (who) | R (who) | Evidence held |
|---|---|---|---|
| Perform periodic audit trail review | Data Integrity Lead | Senior QC Analyst | Signed review records per SOP-QA-014 |
| Manage user accounts and access | QC Lab Systems Manager | IT Lab Systems Admin | Quarterly access review, Q2 2026 complete |
| Take backups and test restore | QC Lab Systems Manager | IT Infrastructure | Backup logs; restore test CAPA-2026-0061 |
| Defend records during inspection | Data Integrity Lead | QC Lab Systems Manager and Process Owner | Inspection readiness file |

In this example, the analyst who runs a sequence (DO) never reviews their own audit trail; that sits with a different senior analyst (REV) and is owned by the Data Integrity Lead (A). The administrator who can change access (ADM) is in IT, not in the lab. That separation, made explicit in writing and backed by access-review evidence, is what an inspector wants to see when they ask "who owns this, and who could have changed it?"

## Common inspection findings this matrix prevents

- No one can say who is accountable for audit trail review, backups, or access management, so nothing gets done on schedule.
- Analysts hold administrator rights on the systems whose data they generate, because no segregation was defined.
- Multiple people each assumed another owned data integrity, and the activity fell through the gap.
- The reviewer of a record is the same person who created it, with no independent check.
- Roles on paper do not match the live org chart, so the documented controls are not the real ones.

## How to adapt this matrix

1. Set your document number, owner, and effective date in the header, and link the parent data integrity policy.
2. Map every generic role code to a real title, and add or remove roles to match your structure, keeping DO and ADM separate.
3. Confirm each activity still has exactly one A after you edit it; this is the most common error when adapting a RACI.
4. Add any activities specific to your operation (for example pharmacovigilance data, clinical database lock, device design history file) with their own RACI assignments.
5. Where small-site staffing forces an overlap, document the compensating control against the affected activity.
6. Review the matrix whenever the org chart changes and confirm every regulation in the references against the current published version before issue.
