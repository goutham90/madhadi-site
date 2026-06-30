---
title: "Test Script: LIMS Specification Evaluation, Rounding, and OOS Flagging (OQ)"
description: "A plug-and-play OQ test script for the highest-risk LIMS logic: spec comparison operators, rounding-before-versus-after, and OOS routing, built around boundary and just-over-boundary cases, with step/expected/actual/pass-fail columns and a filled specimen."
pubDate: 2026-06-30
docType: "Template"
pillar: "manufacturing-automation"
relatedArticles: ["lims-implementation-and-validation"]
tags: ["lims", "oq", "test script", "specification", "rounding", "oos", "boundary testing", "csv"]
tier: "Advanced"
---

This is a ready-to-use OQ test script for the single highest-risk piece of LIMS logic: how the system rounds a result and compares it to a specification, and what happens at and just over the limit. The middle of a range never breaks; the limit does, which is exactly where an inspector probes. Replace every `<<FILL: ...>>` placeholder and execute under an approved OQ protocol. Write each actual result as you observe it, never reconstructed afterward. A filled specimen follows. This is general guidance to adapt and verify, not legal or regulatory advice.

## Document control header

| Field | Entry |
|---|---|
| Test script title | LIMS Specification Evaluation, Rounding, and OOS Flagging |
| Test script ID | `<<FILL: TS-ID, e.g. TS-OQ-LIMS-020>>` |
| Parent OQ protocol / plan | `<<FILL: OQ protocol or VP ID>>` |
| LIMS name / version / build | `<<FILL>>` |
| Configuration baseline | `<<FILL: config spec / baseline ID, frozen for OQ>>` |
| Test environment | `<<FILL: qualified validation environment, not production>>` |
| Function risk | High (affects pass/fail and release) |
| Author / effective date | `<<FILL>>` |

## 1. Requirements traced

| Requirement ID | Requirement (summary) | Source |
|---|---|---|
| `<<FILL: URS-LIMS-013>>` | Rounding/sig-fig rule applied per the approved method, before or after comparison as specified. | `<<FILL: URS/FS ID>>` |
| `<<FILL: URS-LIMS-020>>` | Result evaluated against the configured spec; pass/fail computed, not entered. | `<<FILL>>` |
| `<<FILL: URS-LIMS-021>>` | OOS flagged and routed to the OOS workflow; no silent re-test or overwrite. | `<<FILL>>` |

## 2. Objective

Verify that, for a defined spec and rounding convention, the system reports the result to the correct precision, compares it correctly at and around the limit, computes the right pass/fail, and routes an OOS to the OOS workflow without allowing a silent change.

## 3. Prerequisites

| No. | Prerequisite | Verified (initials/date) |
|---|---|---|
| 3.1 | Parent OQ protocol approved and effective. | `<<FILL>>` |
| 3.2 | Master data for the test spec verified to source (`<<FILL: master-data verification protocol ID>>`). | `<<FILL>>` |
| 3.3 | Software at version `<<FILL>>` in the qualified environment, against baseline `<<FILL>>`. | `<<FILL>>` |
| 3.4 | The approved method's stated rounding/reporting convention is on hand (`<<FILL: method ID, version>>`). | `<<FILL>>` |

## 4. Test data: the spec under test

| Item | Value |
|---|---|
| Specification | `<<FILL: e.g. single impurity NMT 0.20%>>` |
| Operator | `<<FILL: NMT / NLT / between>>` |
| Reporting precision | `<<FILL: e.g. 2 decimals>>` |
| Rounding rule | `<<FILL: e.g. round half up>>` |
| Compare basis (per method) | `<<FILL: rounded value OR raw value>>` |

State the compare basis explicitly from the approved method before executing. The script verifies the configured behavior matches that convention; it does not assume a default.

## 5. Test cases

Execute each case by entering the raw value and recording what the system reports and decides. Expected outcomes below assume the example spec NMT 0.20%, 2-decimal reporting, "round half up", comparing the rounded value per method. Adjust expected outcomes to your actual spec and convention before execution.

| No. | Case | Raw value entered | Expected reported value | Expected pass/fail | Expected routing | Actual reported | Actual pass/fail | Actual routing | Pass/Fail | Tester/date |
|---|---|---|---|---|---|---|---|---|---|---|
| 5.1 | Well within | 0.150% | 0.15% | Pass | None | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 5.2 | At the limit | 0.200% | 0.20% | Pass | None | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 5.3 | Just over, rounds down | 0.204% | 0.20% | Pass (per convention) | None | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 5.4 | Just over, rounds up | 0.205% | 0.21% | Fail | OOS workflow | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 5.5 | Clear fail | 0.250% | 0.25% | Fail | OOS workflow | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 5.6 | OOS no silent change | 0.250% then attempt to re-enter 0.150% | original retained | Fail held | OOS open; re-entry blocked/audit-trailed | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| 5.7 | Analyst cannot alter spec | enter any value | spec unchanged by analyst | n/a | n/a | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 6. Acceptance criteria

- Every case produces the expected reported value, pass/fail, and routing for the stated convention.
- The boundary cases (5.2, 5.3, 5.4) behave exactly as the approved method specifies; any deviation is a Fail.
- An OOS routes to the OOS workflow and cannot be silently re-entered or overwritten (5.6).
- The analyst cannot select or change the spec at entry (5.7).
- Any Fail is logged as a test deviation, assessed, resolved, and re-tested. See `<<FILL: test failure management SOP / article>>`.

## 7. Deviation log

| No. | Step | Description | Disposition | Resolved (initials/date) |
|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 8. Execution signoff

| Field | Entry |
|---|---|
| All cases executed; results recorded | Yes / No |
| Open deviations | `<<FILL: none or list>>` |
| Tester (name, signature, date) | `<<FILL>>` |
| Reviewer (name, signature, date) | `<<FILL>>` |

## Filled specimen

| No. | Raw value | Reported | Pass/Fail | Routing | Result |
|---|---|---|---|---|---|
| 5.3 | 0.204% | 0.20% | Pass | None | Pass: matches method (compare rounded value) |
| 5.4 | 0.205% | 0.21% | Fail | OOS workflow opened | Pass: flagged and routed correctly |
| 5.6 | 0.250%, re-entry 0.150% attempted | 0.25% retained | Fail held | Re-entry blocked, audit-trailed | Pass: no silent change |

Reading: cases 5.3 and 5.4 confirm the configured rounding-then-compare behavior matches the approved method exactly at the boundary, the place a near-limit result decides a batch. Case 5.6 confirms an OOS cannot be quietly replaced with a passing value. Together these are the cases that turn "the LIMS evaluates specs" into demonstrated, inspectable proof.

## Common inspection findings this script prevents

- Rounding-before-versus-after behavior never specified or tested at the boundary.
- An OOS that could be silently re-tested or overwritten in the system.
- The analyst able to change the spec at entry time.
- Spec evaluation "tested" only with mid-range values that never exercise the limit.

## How to adapt

1. Set your script ID, parent protocol, and the exact spec, operator, precision, and compare basis from the approved method.
2. Recompute the expected reported value and pass/fail for your convention before execution; do not ship the example expected values unchanged.
3. Add cases for each distinct operator you use (NLT, between, inclusive versus exclusive bounds).
