---
title: "Work Instruction: Emergency Change for GxP Computerized Systems"
description: "A plug-and-play work instruction for emergency change to validated GxP systems: out-of-hours authorization, the minimum-necessary change, contemporaneous recording, the data-integrity check on the unstable period, and the QA retrospective review, with an embedded emergency change record, a filled specimen, and the regulations it satisfies."
pubDate: 2026-06-26
docType: "Work Instruction"
pillar: "csv-csa"
relatedArticles: ["it-change-and-configuration-management-gxp"]
tags: ["emergency change", "change control", "csv", "data integrity", "incident management", "work instruction"]
tier: "Intermediate"
---

This is a ready-to-use work instruction for the emergency change path: what the on-call engineer does, in order, when a validated GxP system must be changed immediately to restore service or security. It sits under the change control SOP (`<<FILL: SOP-ID>>`) and the [Patch Management SOP](/templates/sop-patch-management-gxp), and uses the [Change Request and Change Control Record](/templates/form-change-request-record) for the follow-up normal change. Replace every `<<FILL: ...>>` placeholder with your own specifics. A worked filled specimen follows the template. Verify each cited regulation against the current source before you rely on it.

## Parent SOP and when to use this

| Field | Entry |
|---|---|
| Parent SOP | `<<FILL: change control SOP-ID>>` |
| WI number | `<<FILL: WI-ID, e.g. WI-IT-018-02>>` |
| Use this when | A validated GxP system needs an immediate change to restore service or security and the normal approval gates cannot run first (failed disk, expired certificate that took the system offline, actively exploited vulnerability). |
| Do NOT use this for | Planned changes, convenience changes, or "while I am in here" additions. The minimum necessary change only. |

Regulators do not object to emergency change. They object to emergency change with no record, no QA awareness, and no retrospective assessment of the validated state.

## Steps (perform in order)

### Step 1: Confirm it is a genuine emergency

| Action | Acceptance |
|---|---|
| Confirm service/security is down or actively threatened and cannot wait for normal change | A normal change would cause unacceptable patient, data, or business risk; reason recorded |
| Confirm the system is in the validated GxP inventory | CMDB GxP flag checked; if yes, this WI applies in full |

### Step 2: Get emergency authorization

| Action | Acceptance |
|---|---|
| Contact a named emergency authorizer from the out-of-hours list | Authorizer is on the pre-defined list and reachable |
| Obtain authorization (verbal is acceptable if logged immediately) | Authorizer name, time, and decision captured contemporaneously |

### Step 3: Make the minimum necessary change

| Action | Acceptance |
|---|---|
| Change only what restores service or security, nothing more | No unrelated upgrades, settings, or "opportunistic" changes |
| Prefer like-for-like (e.g. replace an expired certificate with a valid one) | Change does not alter application logic where avoidable |

### Step 4: Record contemporaneously

Complete the emergency change record (below) at the time, or as close to it as the emergency allows, with timestamps and evidence (screenshots, before/after, the new certificate or version details).

### Step 5: Restore and verify

| Action | Acceptance |
|---|---|
| Confirm service is restored | GxP-critical function works (e.g. analysts can log in) |
| Confirm the audit trail still records and the clock is correct | Verified post-change |
| Determine whether any data was created or modified during the unstable period | Listed for the integrity review in Step 7 |

### Step 6: Back-out if it fails

| Action | Acceptance |
|---|---|
| If the change fails, invoke the tested rollback | System returned to a known state; event escalated as a deviation |

### Step 7: QA retrospective review (within the defined window)

| Action | Acceptance |
|---|---|
| QA reviews the emergency change within `<<FILL: window, e.g. 1-3 business days>>` | Review documented |
| QA assesses impact on the validated state and on any data from the unstable period | Conclusion recorded; data integrity of the period confirmed or a deviation opened |
| If a baseline setting was altered, raise a follow-up normal change to formalize and fully test it | Follow-up change reference recorded |
| Update the CMDB and configuration baseline as needed | Records reconciled |

## Embedded record: emergency change record

| Field | Entry |
|---|---|
| Emergency change number | `<<FILL: ECHG-ID>>` |
| System and CI | `<<FILL: system name / CMDB CI>>` |
| Date / time started | `<<FILL>>` |
| Nature of emergency | `<<FILL: what failed / threat>>` |
| Authorizer (name, time, verbal/written) | `<<FILL>>` |
| Change made (minimum necessary) | `<<FILL>>` |
| Evidence attached | `<<FILL: screenshots, before/after, cert/version detail>>` |
| Service restored / verification | `<<FILL>>` |
| Audit trail + clock checked | `<<FILL: yes/no>>` |
| Data created/modified during unstable period | `<<FILL: none, or list>>` |
| QA retrospective review (name, date, conclusion) | `<<FILL>>` |
| Follow-up normal change (if baseline altered) | `<<FILL: ref or N/A>>` |
| CMDB / baseline updated | `<<FILL>>` |

## Acceptance criteria

- A pre-defined emergency procedure and named out-of-hours authorizers exist before they are needed.
- Only the minimum necessary change was made.
- The change was recorded contemporaneously, even if authorization was verbal.
- The audit trail, clock, and any data from the unstable period were checked.
- QA reviewed retrospectively within the defined window and assessed the validated state.
- Any altered baseline setting was formalized through a follow-up normal change.

## References

> EU GMP Annex 11, clause 10 (controlled change). (A draft revision was issued for consultation on 7 July 2025; confirm the in-force version before issue.)
> 21 CFR 211.68(b) (changes by authorized personnel); 21 CFR 11.10(a), 11.10(k)(2).
> GAMP 5 Second Edition; PIC/S PI 011-3 (operational-phase change and incident management).

Confirm the current version and clause numbers before issue.

---

## Filled specimen

Illustrative emergency change. Replace with your own.

A GxP chromatography data system loses TLS connectivity because the server certificate expired overnight, blocking analyst logins.

| Field | Entry |
|---|---|
| Emergency change number | ECHG-2026-0033 |
| System and CI | Chromatography Data System, CI-CDS-02 |
| Date / time started | 24 June 2026, 02:40 |
| Nature of emergency | Expired server certificate, all analyst logins blocked |
| Authorizer | Duty manager M. Okafor, verbal at 02:45, logged 02:47 |
| Change made | Installed a valid replacement certificate; like-for-like, no change to application logic |
| Evidence | Old/new certificate detail, login-failure and login-success screenshots |
| Service restored / verification | Analysts logged in at 03:05; smoke test passed |
| Audit trail + clock checked | Yes, both confirmed; no data written during the outage |
| Data during unstable period | None |
| QA retrospective review | R. Gomez, 26 June 2026: like-for-like certificate rotation, no impact on the validated state or data; closed |
| Follow-up normal change | N/A (no baseline setting altered) |
| CMDB / baseline updated | Certificate-expiry field updated |

This is clean because the change was minimal, recorded, and reviewed, and the validated state was never actually altered. The bad version is the engineer who "took the opportunity" to bump the OS while in there, told no one, and produced a different time-zone stamp on the next report: an undocumented major change found through a data anomaly.

## Common findings this work instruction prevents

- Emergency changes with no record and no QA awareness.
- The QA retrospective review step skipped, so emergency changes accumulate with no assessment.
- An opportunistic extra change bundled into the emergency fix.
- Data created during the unstable period never reviewed for integrity.
- A baseline setting altered in the emergency and never formalized or tested.

## How to adapt this work instruction

1. Name your out-of-hours authorizers and reachable channels before you need them.
2. Set the QA retrospective review window in Step 7 to your risk policy.
3. Point the parent-SOP and follow-up-change references to your real procedures.
4. Keep the "minimum necessary change only" rule prominent in training.
5. Confirm every cited regulation against the current version, including the in-force status of Annex 11, before issue.
