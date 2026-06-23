---
title: "User Access Recertification Record"
description: "A plug-and-play record for the periodic review of user access to a GxP system: per-user role versus expected, privileged-account justification, joiner-mover-leaver reconciliation, orphan and disabled account checks, reviewer sign-off, and exceptions with remediation dates, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-22
docType: "Record"
pillar: "csv-csa"
relatedArticles: ["csv-cybersecurity-access-control", "electronic-signatures-implementation"]
tags: ["access review", "user access recertification", "logical access", "joiner mover leaver", "privileged access", "21 CFR Part 11", "Annex 11", "csv"]
tier: "Intermediate"
---

This is a ready-to-use access recertification record. It captures one periodic review of who has access to a GxP system, what they can do, and whether that access is still justified. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach the system access export the review is based on, and route the record through your normal review and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Record title | User Access Recertification Record |
| Record number | `<<FILL: AR-ID, e.g. AR-LIMS-2026-002>>` |
| System name and ID | `<<FILL: system name and instance, e.g. LIMS-PROD>>` |
| GxP classification | `<<FILL: GxP / GMP / GLP / GCP / non-GxP>>` |
| Review type | Scheduled periodic / Triggered (audit, incident, role change) |
| Review period covered | `<<FILL: from date>>` to `<<FILL: to date>>` |
| Access data source and export date | `<<FILL: report/export name and date it was pulled>>` |
| Review owner (role) | `<<FILL: role, e.g. System Owner>>` |
| Status | Open / In review / Exceptions open / Closed |

## 1. Purpose of this record

This record documents a periodic recertification of user access to a single GxP system so that every active account, every role, and every privilege is confirmed against a current, authoritative source of what each person should have. The objective is to detect and remove access that is no longer justified, including accounts of people who have left, accounts whose role has changed, accounts no one owns, and standing privileged access that is not warranted. One record covers one system for one review period. The review is evidence-based: it is performed against an access export taken on a known date, and that export is the attachment the conclusion rests on.

## 2. Scope and frequency

State which accounts are in scope and how often this system is recertified. Set frequency by the criticality of the data and functions the system controls; a system that releases product or holds the electronic batch record is reviewed more often than a read-only reporting tool. Record the basis once here so an inspector sees the review interval was a decision, not a habit.

| Field | Entry |
|---|---|
| Accounts in scope | `<<FILL: all named users, service/system accounts, vendor/support accounts, shared accounts if any>>` |
| Out of scope (with reason) | `<<FILL: e.g. read-only public dashboard accounts, or "none">>` |
| Review frequency for this system | `<<FILL: e.g. every 6 months for high criticality, annually for medium>>` |
| Basis for frequency | `<<FILL: data/function criticality and risk rationale>>` |
| Authoritative source of expected access | `<<FILL: HR system, role matrix, access-request records, training records>>` |

## 3. Inputs the review is performed against

A recertification is only as trustworthy as the data it compares. Gather and attach the current system access export, the approved role-to-function matrix, and the joiner-mover-leaver feed for the period. The system export is the population; everything else is the expectation it is checked against.

| Input | Source | Date | Attachment |
|---|---|---|---|
| System access export (all accounts, roles, privileges, last-login, status) | `<<FILL: system report name>>` | `<<FILL>>` | `<<FILL: Att. 1>>` |
| Approved role-to-function matrix | `<<FILL: controlled document ID>>` | `<<FILL>>` | `<<FILL: Att. 2>>` |
| Joiners / movers / leavers for the period | `<<FILL: HR or IAM feed>>` | `<<FILL>>` | `<<FILL: Att. 3>>` |
| Access-request and approval records | `<<FILL: ticket system / request log>>` | `<<FILL>>` | `<<FILL: Att. 4>>` |

## 4. Per-user access review (role versus expected)

Review every account in the system export against its expected role and the current matrix. For each account, the line owner (the user's manager or the function head) confirms the person still needs the system, that the assigned role matches their job, and that nothing extra has crept in. "Confirm" is a positive decision per account, not a single signature over the whole list.

| User ID | Name | Department / manager | Role(s) in system | Expected role (per matrix/job) | Last login | Account status | Decision | Action / exception ref |
|---|---|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: date or "never">>` | Active / Disabled / Locked | Retain / Modify / Revoke | `<<FILL: none, or EX-nn>>` |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Active / Disabled / Locked | Retain / Modify / Revoke | `<<FILL>>` |

Decision key: **Retain** = access matches expectation, keep as is. **Modify** = role or privileges must change to match the job; raise an exception with the corrected role. **Revoke** = access is no longer justified; raise an exception to remove or disable.

## 5. Privileged-account review and justification

Privileged accounts (administrator, configuration, database, audit-trail-management, user-management, and anything that can change GxP records or controls) are reviewed line by line and each one is justified. Standing privileged access is the highest-risk access on the system, so the default question is not "is this still active" but "does this person still need this level, and why". Confirm separation between the people who can change data and the people who review it.

| Privileged account / user | Privilege level | Business justification (why this person needs it) | Standing or just-in-time | Personal or shared | Last used | Decision |
|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL: admin / config / DBA / user-admin>>` | `<<FILL: specific role-based reason>>` | Standing / JIT | Personal / Shared | `<<FILL>>` | Retain / Modify / Revoke |

| Field | Entry |
|---|---|
| Number of privileged accounts | `<<FILL>>` |
| Any single user holding both maker and checker rights? | Yes / No (if Yes, raise exception) |
| Shared or generic privileged accounts present? | Yes / No (if Yes, justify or remediate) |
| Vendor / remote-support privileged access enabled by default? | Yes / No (if Yes, confirm it is on-demand only) |

## 6. Joiner / mover / leaver reconciliation

Reconcile the joiner-mover-leaver feed against the system access export so every change in employment status is reflected in access. A leaver whose account is still active, or a mover who kept the access of a prior role, is the finding inspectors raise most often. Record counts and resolve every mismatch.

| Check | Count | Mismatches found | Action / exception ref |
|---|---|---|---|
| Joiners in period whose access matches their approved role | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Movers (role change) whose old access was removed | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Leavers whose access was disabled within the required SLA | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Leavers still active in the system (should be zero) | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

| Field | Entry |
|---|---|
| Leaver-deprovisioning SLA for this system | `<<FILL: e.g. same business day for privileged, 24 hours for standard>>` |
| Longest delay observed this period | `<<FILL: account, days, reason>>` |

## 7. Orphan and disabled-account check

An orphan account is one in the system export that maps to no current employee, no service-account owner, and no approved access request: no one can say who it belongs to or why it exists. Disabled and dormant accounts are checked too, because a disabled account that gets re-enabled, or a dormant account that never logs in, is a standing entry point. Resolve each one to a named owner and a decision.

| Account | Type (named user / service / generic) | Owner identified? | Status | Last login | Finding | Decision |
|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | Yes / No | Active / Disabled / Dormant | `<<FILL>>` | `<<FILL: orphan / dormant > X days / disabled but not removed>>` | Assign owner / Disable / Delete / Retain with justification |

| Field | Entry |
|---|---|
| Orphan accounts found (no identifiable owner) | `<<FILL: count>>` |
| Dormant threshold applied | `<<FILL: e.g. no login in 90 days>>` |
| Dormant accounts found over threshold | `<<FILL: count>>` |
| Disabled accounts confirmed retained for audit-trail integrity (not re-enabled) | `<<FILL: count and rationale>>` |

## 8. Exceptions and remediation

Every Modify, Revoke, orphan, mismatch, and unjustified privilege is an exception with an owner and a committed remediation date. An exception is not closed by noting it; it is closed when the access change is made and verified against a fresh export. The review record stays open until every exception is closed or formally accepted with rationale.

| Exception no. | Account / finding | Risk if unresolved | Required action | Owner | Due date | Closed date | Verification (re-export ref) |
|---|---|---|---|---|---|---|---|
| `<<FILL: EX-01>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: revoke / change role / assign owner / disable>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: EX-02>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

High-risk exceptions (active leaver accounts, unjustified privileged or maker-checker conflicts) are remediated immediately, not on the routine schedule. Where an exception cannot be remediated by the due date, the delay and its risk acceptance are signed by QA.

## 9. Acceptance criteria for closing this record

This record may be closed only when all of the following are true:

- Every account in the system export was reviewed against its expected role, with a Retain, Modify, or Revoke decision recorded for each.
- Every privileged account carries a current, role-based justification, and no unjustified standing privilege or maker-checker conflict remains open.
- The joiner-mover-leaver reconciliation shows zero active leaver accounts and every mismatch resolved or under a dated exception.
- Every orphan account has been assigned an owner or removed, and dormant and disabled accounts are dispositioned.
- All exceptions are either closed and verified against a fresh export, or formally risk-accepted by QA with a rationale and revised date.
- The record is signed by the reviewer(s) and approved by QA, and the access export it relied on is attached.

## 10. References

> 21 CFR Part 11 (electronic records and signatures; limiting system access to authorized individuals).
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment; access controls).
> EU GMP Annex 11 (Computerised Systems), sections on access control and security.
> MHRA GxP Data Integrity Guidance and Definitions (access management and account control).
> PIC/S PI 041, Good Practices for Data Management and Integrity (logical security and user access).
> GAMP 5 (Second Edition) for the access-control and periodic-review lifecycle of computerized systems.
> ICH Q9 (Quality Risk Management) for the risk basis of review frequency and privileged-access scrutiny.
> NIST SP 800-53 (access control family) and ISO/IEC 27001 Annex A (access control), as general references for the control design only.

Confirm the current version and clause numbers of each reference before issue.

## 11. Reviewer sign-off and approvals

| Role | Name | Signature | Date | Statement |
|---|---|---|---|---|
| Reviewer (line manager / function head) | `<<FILL>>` | | | I confirm each account I own was reviewed against its expected role. |
| Privileged-access reviewer (System Owner) | `<<FILL>>` | | | I confirm each privileged account is justified. |
| IT / IAM administrator | `<<FILL>>` | | | I confirm the access export is complete and the agreed changes were made. |
| Reviewer (QA) | `<<FILL>>` | | | I confirm the review is complete and exceptions are dispositioned. |
| Approver (Quality / System Owner) | `<<FILL>>` | | | I approve this recertification. |

## 12. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

---

## Filled specimen

The following shows the record completed for an example laboratory information management system reviewed at its half-year interval. The company, system, names, and numbers are illustrative; replace them with your own.

### Header and inputs

| Field | Entry |
|---|---|
| Record number | AR-LIMS-2026-002 |
| System | Laboratory Information Management System, instance LIMS-PROD |
| GxP classification | GMP |
| Review type | Scheduled periodic (6-monthly) |
| Review period | 01 December 2025 to 31 May 2026 |
| Access data source and export date | LIMS user-access report, exported 02 June 2026 |
| Review owner | M. Lewis, LIMS System Owner |
| Status | Closed |

| Input | Date | Attachment |
|---|---|---|
| LIMS access export (38 accounts: 31 named, 4 service, 3 disabled) | 02 June 2026 | Att. 1 |
| Approved role-to-function matrix (DOC-LIMS-ROLES v4) | current | Att. 2 |
| Joiners / movers / leavers feed from HR | period | Att. 3 |

### Per-user and privileged review (extract)

| User ID | Name | Role in LIMS | Expected role | Last login | Status | Decision | Exception |
|---|---|---|---|---|---|---|---|
| jrao | J. Rao | Analyst | Analyst | 30 May 2026 | Active | Retain | none |
| kpatel | K. Patel | Supervisor + Analyst | Supervisor | 29 May 2026 | Active | Modify | EX-01 (remove duplicate Analyst role) |
| dscott | D. Scott | Analyst | (left company 14 Apr 2026) | 11 Apr 2026 | Active | Revoke | EX-02 (leaver still active) |
| svc_interface | service account | Interface | Interface (owner: IT integration) | n/a | Active | Retain | none |

| Privileged account | Level | Justification | Standing/JIT | Last used | Decision |
|---|---|---|---|---|---|
| admin_mlewis | System admin | Named admin, System Owner role | Standing | 28 May 2026 | Retain |
| dba_lims | Database admin | DBA team, shared | Standing | 20 May 2026 | Modify (EX-03: replace shared with named DBA accounts) |

### Reconciliation, orphan check, exceptions

| Check | Count | Result |
|---|---|---|
| Joiners with access matching approved role | 3 | All match |
| Movers with old access removed | 2 | One incomplete (kpatel kept Analyst, see EX-01) |
| Leavers disabled within SLA (24h) | 4 of 5 | One missed (dscott, see EX-02) |
| Leavers still active (target zero) | 1 | dscott, EX-02 |
| Orphan accounts (no identifiable owner) | 1 | "temp_audit", EX-04, no owner, no request record |
| Dormant > 90 days | 1 | "temp_audit", never logged in |

| Exception | Finding | Action | Owner | Due | Closed | Verification |
|---|---|---|---|---|---|---|
| EX-01 | kpatel holds redundant Analyst role | Remove Analyst role | IAM | 04 Jun 2026 | 03 Jun 2026 | Re-export 03 Jun confirms removed |
| EX-02 | Leaver dscott still active | Disable account immediately | IAM | 02 Jun 2026 (same day) | 02 Jun 2026 | Re-export confirms disabled |
| EX-03 | Shared DBA account | Replace with two named DBA accounts under change control | IT | 30 Jun 2026 | 27 Jun 2026 | CR-LIMS-2026-061; re-export confirms |
| EX-04 | Orphan "temp_audit" account | Disable, investigate origin | System Owner | 04 Jun 2026 | 04 Jun 2026 | Created for a 2024 audit, never removed; disabled, root cause logged |

In this example the review ran against a dated export, confirmed each account against the role matrix, caught a leaver whose account was still active and disabled it the same day, found a mover who kept a redundant role, replaced a shared DBA account with named accounts under change control, and traced an orphan account back to a 2024 audit that was never cleaned up. Every finding became a dated exception that was closed and verified against a fresh export before the record was signed. That sequence, export to per-account decision to reconciliation to dated exception to verified closure, is exactly what a reviewer expects to see.

## Common inspection findings this record prevents

- A periodic access review is required by procedure but no completed record shows it was performed, or the last one is long overdue.
- Terminated employees still hold active accounts, and contractors retain access months after their assignment ended.
- A mover kept the access of every prior role (access accumulation) because no one removed the old role when the new one was granted.
- The review is one signature over a printed list, with no per-account decision showing each account was actually examined.
- Privileged and administrator accounts have no documented business justification, and the same person can both change data and review it.
- Shared or generic accounts (including default vendor accounts) are in use with no individual accountability.
- Orphan accounts with no identifiable owner sit active in the system, and dormant accounts that never log in are never challenged.
- The review is performed against a stale or partial export, so it does not reflect the system's actual current population.
- Exceptions are noted but never remediated; access flagged for removal is still present at the next review with no closure or verification.

## How to adapt this record

1. Set your record-numbering scheme, the system name and GxP classification, and the review frequency and its risk basis in the header and section 2.
2. Name your authoritative source of expected access (HR feed, role matrix, access-request log) and attach the actual system export the review is based on.
3. Tune the role and privilege categories in sections 4 and 5 to your system's real roles, and state your maker-checker separation rule explicitly.
4. Set your leaver-deprovisioning SLA and dormant-account threshold to your own policy, and point cross-references to your real change-control and deviation procedures.
5. Keep every exception open with an owner and a due date until it is remediated and verified against a fresh export; do not close the record on open high-risk exceptions.
6. Confirm every regulation in section 10 against the current published version before issue.
