---
title: "Checklist: Master Recipe Build and Review (ISA-88 / MES)"
description: "A plug-and-play checklist for building and reviewing a master recipe in a validated MES: physical/procedural separation, parameter traceability, exception handling, segregation of duties, and reconstruction, with pass/fail/NA items and a filled specimen."
pubDate: 2026-06-25
docType: "Checklist"
pillar: "manufacturing-automation"
relatedArticles: ["isa-88-batch-control-recipes"]
tags: ["isa-88", "MES", "recipe-management", "checklist", "manufacturing", "validation", "data-integrity"]
tier: "Advanced"
---

This is a ready-to-use checklist for authoring and reviewing a master recipe before it is approved to make product. Replace every `<<FILL: ...>>` placeholder. Score each item Pass, Fail, or NA; every Fail blocks approval until resolved. A filled specimen follows. Verify cited regulations against the current source. This is general guidance to adapt, not legal or regulatory advice.

## Header

| Field | Entry |
|---|---|
| Recipe / unit procedure | `<<FILL>>` |
| Version | `<<FILL>>` |
| MES / system | `<<FILL>>` |
| Reviewer | `<<FILL: name, role>>` |
| Date | `<<FILL>>` |

## 1. Prerequisites

| # | Item | Reference | Result |
|---|---|---|---|
| 1.1 | Process definition (site recipe / tech transfer) approved and locked | 211.186 | Pass / Fail / NA |
| 1.2 | All referenced equipment phases exist and are qualified | ISA-88 | Pass / Fail / NA |
| 1.3 | Authoring environment is qualified | Annex 11 | Pass / Fail / NA |

## 2. Physical / procedural separation

| # | Item | Reference | Result |
|---|---|---|---|
| 2.1 | No equipment-specific tags or unit-specific timing hard-coded in the recipe layer | ISA-88 | Pass / Fail / NA |
| 2.2 | Recipe references equipment phases by name and passes parameters only | ISA-88 | Pass / Fail / NA |
| 2.3 | Recipe is portable across the intended equipment class | ISA-88 | Pass / Fail / NA |

## 3. Procedural structure and reuse

| # | Item | Reference | Result |
|---|---|---|---|
| 3.1 | Procedure, unit procedures, operations, and phases follow the process flow | ISA-88 | Pass / Fail / NA |
| 3.2 | Qualified library phases reused; bespoke recipe-layer logic justified | ISA-88 | Pass / Fail / NA |

## 4. Formula, parameters, and traceability

| # | Item | Reference | Result |
|---|---|---|---|
| 4.1 | Materials, quantities, and theoretical yield present | 211.186 | Pass / Fail / NA |
| 4.2 | Every setpoint and limit traces to a controlled source document | 211.186 | Pass / Fail / NA |
| 4.3 | Parameter limits include target, acceptable range, and alarm/interlock where applicable | control strategy | Pass / Fail / NA |
| 4.4 | CPPs identified and tied to the control strategy / design space | ICH Q8 | Pass / Fail / NA |

## 5. IPC, prompts, and signatures

| # | Item | Reference | Result |
|---|---|---|---|
| 5.1 | IPC checks, specs, and out-of-limit actions defined | 211.186 | Pass / Fail / NA |
| 5.2 | Operator prompts force the required data entry | Part 11 | Pass / Fail / NA |
| 5.3 | Second-person verification configured where required | Part 11 | Pass / Fail / NA |
| 5.4 | Electronic-signature points placed correctly | Part 11 | Pass / Fail / NA |

## 6. Exception handling

| # | Item | Reference | Result |
|---|---|---|---|
| 6.1 | Out-of-range entry behaviour defined | 211.100 | Pass / Fail / NA |
| 6.2 | Phase-failure behaviour leaves equipment in a safe, defined state | ISA-88 | Pass / Fail / NA |
| 6.3 | Hold, restart, and abort tested safe from every phase state | ISA-88 | Pass / Fail / NA |
| 6.4 | Power loss and recovery forces operator confirmation of real-world condition before resuming | Annex 11 | Pass / Fail / NA |

## 7. Testing evidence

| # | Item | Reference | Result |
|---|---|---|---|
| 7.1 | Normal flow tested | CSV | Pass / Fail / NA |
| 7.2 | Boundary conditions tested | CSV | Pass / Fail / NA |
| 7.3 | Failure paths tested, not just the happy path | CSV | Pass / Fail / NA |
| 7.4 | Calculations and parameter passing verified | CSV | Pass / Fail / NA |

## 8. Control, versioning, and reconstruction

| # | Item | Reference | Result |
|---|---|---|---|
| 8.1 | Recipe in an approved, version-controlled state with effective date | Annex 11 | Pass / Fail / NA |
| 8.2 | Prior version superseded and retained, not deleted | 211.188 | Pass / Fail / NA |
| 8.3 | A generated control recipe produces a batch record matching the master one for one | 211.188 | Pass / Fail / NA |
| 8.4 | Authoring and approval are separate roles; no shared logins | Part 11 | Pass / Fail / NA |
| 8.5 | Recipe object audit trail enabled and reviewed | Annex 11 section 9 | Pass / Fail / NA |

## 9. Outcome

| Finding (each Fail) | Action | Owner | Due | Closed |
|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 10. Signoff

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Automation) | `<<FILL>>` | | |
| Recipe owner (Mfg) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows two lines from a completed review. Details are illustrative; replace with your own.

| # | Item | Result | Note |
|---|---|---|---|
| 4.2 | Every limit traces to a controlled source | Fail | Charge target 1500 L had no source document referenced |
| 6.4 | Power recovery forces operator confirmation | Pass | Tested: recovery prompt required confirmed vessel volume before resume |

Action from 4.2: link the 1500 L charge target to the approved control-strategy document and record the reference; owner automation engineer; due before approval; the recipe cannot be approved until closed. The checklist turns "looks fine" into a specific, blocking finding.

## Common inspection findings this checklist prevents

- Equipment-specific logic baked into the recipe, breaking reuse.
- A parameter with no traceable source.
- Untested failure paths and undefined power-recovery behaviour.
- Author approving their own recipe; shared logins.
- A batch record that does not match the master, or a version that cannot be reconstructed.

## How to adapt this checklist

1. Set the recipe, version, and system in the header.
2. Add product-specific CPPs and IPC items to sections 4 and 5.
3. Point references to your control strategy, CSV, and change-control documents.
4. Confirm every regulation against the current published version before use.
