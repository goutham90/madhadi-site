---
title: "Checklist: Validation Package Completeness (QA Release Gate)"
description: "A plug-and-play QA gate checklist to confirm a validation package is complete and defensible before a system or process is released for GxP use: every deliverable present, approved, and consistent, with pass/fail/NA, a filled specimen, and the regulations it satisfies."
pubDate: 2026-07-01
docType: "Checklist"
pillar: "quality-assurance"
relatedArticles: ["why-validation-matters"]
tags: ["validation", "checklist", "release gate", "deliverables", "QA review", "inspection readiness"]
tier: "Intermediate"
---

This is a ready-to-use checklist for the final quality gate before a validated system or process is released for GxP use. It confirms that the whole validation package exists, is approved, and hangs together, so that "fit for use" rests on a complete evidence trail rather than a hopeful signature. Use it as a QA review record. Mark each item Pass, Fail, or N/A with a note; any Fail blocks release until resolved. Replace every `<<FILL: ...>>` placeholder with your own specifics. A worked filled specimen follows. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| System / process under review | `<<FILL: name and ID>>` |
| Validation project / plan reference | `<<FILL: plan doc no>>` |
| GxP / risk classification | `<<FILL: e.g. direct impact, high risk>>` |
| Reviewer (QA) | `<<FILL: name>>` |
| Review date | `<<FILL: date>>` |

## How to use

Work top to bottom. The deliverable set scales to risk: a low-risk item may legitimately mark several rows N/A with a documented rationale from the risk assessment, while a high-risk, release-critical system should have every row as Pass. A Fail or an unjustified N/A on a high-risk system is a hold.

## 1. Planning and scoping

| # | Item | Reference | Result |
|---|---|---|---|
| 1.1 | A GxP / impact assessment exists and is approved, and its conclusion (GxP, risk, criticality) matches the effort applied. | System impact assessment | Pass / Fail / NA |
| 1.2 | A validation plan (or project plan under the master plan) is approved, and names the deliverables actually produced. | Annex 15; GAMP 5 | Pass / Fail / NA |
| 1.3 | Roles and responsibilities are defined and the named people were qualified/trained for their part. | ICH Q10 | Pass / Fail / NA |

## 2. Specification and risk

| # | Item | Reference | Result |
|---|---|---|---|
| 2.1 | Approved requirements (URS, and FS/DS where applicable) exist and are testable. | Annex 11 cl. 4.4 | Pass / Fail / NA |
| 2.2 | A risk assessment exists, is approved, and its outcomes drove the test depth. | ICH Q9 | Pass / Fail / NA |
| 2.3 | Part 11 / Annex 11 data integrity controls (audit trail, access, e-signature, time) are specified as requirements, not assumed. | 21 CFR Part 11; Annex 11 | Pass / Fail / NA |
| 2.4 | For a purchased/hosted product, a supplier assessment supports any reliance on supplier evidence. | GAMP 5 | Pass / Fail / NA |

## 3. Execution evidence

| # | Item | Reference | Result |
|---|---|---|---|
| 3.1 | IQ (or installation verification) is executed, reviewed, and approved. | Annex 15 | Pass / Fail / NA |
| 3.2 | OQ (functional/operational testing) is executed, reviewed, and approved. | Annex 15 | Pass / Fail / NA |
| 3.3 | PQ / process validation / UAT is executed against real intended use, reviewed, and approved. | Annex 15; FDA PV 2011 | Pass / Fail / NA |
| 3.4 | Every protocol was approved before it was executed (check dates). | Data integrity | Pass / Fail / NA |
| 3.5 | Actual results are recorded, attributable, signed, and dated, with objective evidence attached. | 21 CFR 211.194; ALCOA+ | Pass / Fail / NA |

## 4. Deviations and traceability

| # | Item | Reference | Result |
|---|---|---|---|
| 4.1 | Every test failure was logged as a deviation, investigated, resolved, and the affected test re-run (not erased). | Deviation SOP | Pass / Fail / NA |
| 4.2 | No deviation affecting the conclusion is left open at release. | ICH Q10 | Pass / Fail / NA |
| 4.3 | A traceability matrix links every requirement to the test that verified it, with no silent gaps. | Annex 11 cl. 4.4 | Pass / Fail / NA |
| 4.4 | Any requirement verified by a method other than test (inspection, supplier evidence) has that method and rationale recorded. | GAMP 5 | Pass / Fail / NA |

## 5. Conclusion and handover

| # | Item | Reference | Result |
|---|---|---|---|
| 5.1 | A validation summary report states what was executed, results vs acceptance, deviations and their resolution, and a clear fit-for-use conclusion. | Annex 15 | Pass / Fail / NA |
| 5.2 | Operational procedures (use, backup/restore, security admin, change control) are in place for handover. | Annex 11 | Pass / Fail / NA |
| 5.3 | The item is entered in the validated-system/equipment inventory with its status and next periodic review date. | ICH Q10 | Pass / Fail / NA |
| 5.4 | The plan to maintain the validated state (change control, monitoring, periodic review; for processes, continued process verification) is defined. | FDA PV 2011 | Pass / Fail / NA |

## Acceptance criteria

Release is supported when every applicable row is Pass, every N/A carries a risk-based rationale, and no Fail remains open. Any open Fail on a GxP-critical item blocks release until resolved and re-reviewed.

## References

> 21 CFR 211.68, 211.100, 211.194.
> 21 CFR Part 11; EU GMP Annex 11 (Computerised Systems); EU GMP Annex 15 (Qualification and Validation).
> FDA, Process Validation: General Principles and Practices (2011).
> FDA, Computer Software Assurance for Production and Quality Management System Software (final, 24 September 2025).
> ICH Q9 (Quality Risk Management); ICH Q10 (Pharmaceutical Quality System).
> ISPE GAMP 5, Second Edition.

Confirm the current version and clause numbers before issue, and confirm the in-force Annex 11.

## Sign-off

| Role | Name | Signature | Date | Release decision |
|---|---|---|---|---|
| Reviewer (QA) | `<<FILL>>` | | | Release / Hold |
| Quality approver | `<<FILL>>` | | | Release / Hold |

---

## Filled specimen

The following shows the checklist partly completed for an illustrative laboratory system, so you can see how a real gate reads. The system and numbers are illustrative.

| Field | Entry |
|---|---|
| System / process under review | Chromatography Data System, CDS-Prod, instrument fleet HPLC-01 to HPLC-12 |
| Validation project / plan reference | VP-CDS-2026-002 |
| GxP / risk classification | Direct impact, high risk (release-testing data) |
| Reviewer (QA) | R. Gomez |
| Review date | 20 August 2026 |

Selected rows as completed:

| # | Item | Result | Note |
|---|---|---|---|
| 2.3 | Part 11 / Annex 11 controls specified as requirements | Pass | Audit trail, unique IDs, e-signature meaning, and time sync each traced to URS lines and OQ tests. |
| 3.4 | Every protocol approved before execution | Pass | Approval dates precede first-execution dates for IQ, OQ, PQ; verified by sampling. |
| 4.2 | No conclusion-affecting deviation open | Fail | DEV-2026-031 (OOS-flag test) closed with retest Pass; DEV-2026-044 (audit-trail export) still open. Release held. |
| 5.4 | Plan to maintain validated state | Pass | Change control SOP-QA-030, quarterly audit-trail review, annual periodic review scheduled. |

Release decision: Hold, pending closure of DEV-2026-044. This is exactly the behavior the gate exists to force: a package that looks 95 percent complete is still not releasable while one conclusion-affecting deviation is open, and the reviewer documents the hold rather than signing around it.

## Common inspection findings this checklist prevents

- A system in GxP use with a validation package that is missing a deliverable (often the traceability matrix or the summary report).
- Protocols executed before they were approved, discovered only when an inspector compares dates.
- A summary report concluding "fit for use" while deviations that affect the conclusion are still open.
- A validated system with no entry in the inventory and no periodic review scheduled, so it silently ages out of control.
- N/A used to skip deliverables on a high-risk system with no rationale from the risk assessment.

## How to adapt this checklist

1. Set the system, plan reference, and classification in the header.
2. Add or remove rows so the deliverable set matches your validation procedure and GAMP category conventions.
3. Point each reference to your real SOPs (deviation, change control, periodic review, retention).
4. Keep the rule that N/A on a high-risk item requires a written rationale from the risk assessment.
5. Confirm every regulation against the current published version before issue.
