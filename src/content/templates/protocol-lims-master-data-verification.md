---
title: "Protocol: LIMS Static (Master) Data Verification"
description: "A plug-and-play protocol to verify loaded LIMS master data (specifications, methods, limits, units, rounding) against approved source documents, with a 100% critical-spec reconciliation method, acceptance criteria, a verification log, and a filled specimen."
pubDate: 2026-06-30
docType: "Protocol"
pillar: "manufacturing-automation"
relatedArticles: ["lims-implementation-and-validation"]
tags: ["lims", "master data", "static data", "csv", "data verification", "specification", "protocol", "gamp5"]
tier: "Advanced"
---

This is a ready-to-use protocol for verifying that the static (master) data loaded into a LIMS matches the approved source documents. A wrong spec limit is not a software defect, it is a master-data error, and you catch it by reconciliation, not by functional testing. This protocol is the cheapest high-value control in a LIMS project and the one most often skipped. Replace every `<<FILL: ...>>` placeholder, run it under your validation plan, and route it through document control. A filled specimen follows. This is general guidance to adapt and verify, not legal or regulatory advice.

## Approval page

| Field | Entry |
|---|---|
| Document title | LIMS Static (Master) Data Verification, `<<FILL: data set, e.g. release specifications>>` |
| Document number | `<<FILL: PROT-ID, e.g. VAL-LIMS-MD-001>>` |
| Version / effective date | `<<FILL>>` |
| LIMS name / version | `<<FILL>>` |
| Parent validation plan | `<<FILL: VP-ID>>` |
| Supersedes | `<<FILL: prior version or "New">>` |

| Approval | Name | Signature | Date |
|---|---|---|---|
| Author (Validation) | `<<FILL>>` | | |
| Lab SME | `<<FILL>>` | | |
| Quality Assurance | `<<FILL>>` | | |

## 1. Objective

Demonstrate that each critical static datum loaded into `<<FILL: LIMS name>>` (specification limits, comparison operators, units, methods, rounding/significant-figure rules, test plans) exactly matches the current approved source document, so that when the system applies that data to live results it produces the correct outcome.

## 2. Scope

Covers the master data sets listed in section 5 for `<<FILL: products / test types in scope>>`. It does not cover functional testing of how the system applies the data (that is the OQ, `<<FILL: OQ protocol ID>>`), nor migration of legacy transactional results (`<<FILL: migration protocol ID>>`).

## 3. Prerequisites

1. The master data has been loaded into the qualified validation environment against a frozen configuration baseline (`<<FILL: baseline ID>>`).
2. The current approved source documents are available and version-controlled (`<<FILL: spec/method document IDs and versions>>`).
3. Verifiers are independent of the person who loaded the data.

## 4. Roles

| Role | Responsibility |
|---|---|
| Data loader | Loads master data per the configuration spec; does not verify their own load. |
| Verifier (Lab SME) | Independently reconciles loaded values to the approved source, field by field. |
| QA | Approves the source documents as the basis, and approves the protocol and result. |

## 5. Method and acceptance criteria

### 5.1 Data sets and sampling

| Data set | Coverage | Basis |
|---|---|---|
| Critical specifications (limits + operators) | 100% | Each affects a pass/fail and a release decision |
| Reporting units and rounding/sig-fig rules | 100% of critical specs | Changes the outcome near a limit |
| Test methods and test-plan assignment | 100% of in-scope methods | Wrong method or plan = wrong test |
| Non-critical reference data (e.g. storage locations) | Risk-based sample `<<FILL: %>>` | Lower GxP impact |

### 5.2 Reconciliation procedure

1. For each datum, place the approved source value beside the value shown in the LIMS.
2. Confirm an exact match of the value, the unit, the comparison operator (for example NMT, NLT, between, inclusive/exclusive), and the rounding/sig-fig rule.
3. Record Pass or Fail and capture evidence (screenshot or system report reference).
4. Any mismatch is a Fail: record it, correct the master data under change control, and re-verify the corrected datum.

### 5.3 Acceptance criteria

- 100% of critical specifications, operators, units, and rounding rules reconcile exactly to the approved source.
- 100% of in-scope methods and test-plan assignments reconcile.
- Any Fail is corrected under change control and re-verified to Pass before the protocol closes.
- The verification is performed by someone independent of the loader, with evidence retained.

## 6. Verification log

| Datum ID | Source doc / version | Source value | LIMS value | Operator match | Unit match | Rounding match | Pass/Fail | Verifier / date | Evidence ref |
|---|---|---|---|---|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Y/N | Y/N | Y/N | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | Y/N | Y/N | Y/N | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 7. Deviation handling

Record any mismatch as a protocol deviation, assess whether it could have reached production data, correct under change control, re-verify, and close before release. See `<<FILL: deviation SOP-ID>>`.

## 8. Summary and conclusion

State counts (data reconciled, fails found, fails corrected and re-verified), the validated state of the master data, and any restriction. Author and QA sign.

## Filled specimen

| Datum ID | Source / ver | Source value | LIMS value | Operator | Unit | Rounding | Pass/Fail | Verifier / date |
|---|---|---|---|---|---|---|---|---|
| SPEC-ASSAY-DP | SPEC-DP-014 v4 | 95.0-105.0% LC | 95.0-105.0% LC | between, inclusive | % LC | 1 decimal, after compare | Pass | A. Brar 2026-06-28 |
| SPEC-IMP-A | SPEC-DP-014 v4 | NMT 0.20% | NMT 0.20% | NMT | % | 2 decimals, per method | Pass | A. Brar 2026-06-28 |
| SPEC-IMP-B | SPEC-DP-014 v4 | NMT 0.15% | NMT 0.10% | NMT | % | 2 decimals | Fail | A. Brar 2026-06-28 |

The impurity B limit was loaded as 0.10% against an approved 0.15%. Caught at verification, corrected under change control to 0.15%, and re-verified to Pass before go-live. Had this gone live, good batches near 0.12% would have failed against a wrongly tight limit, generating false OOS results. Functional testing would not have caught it, because the system was applying the loaded limit correctly; only reconciliation to source finds a wrong limit.

## Common inspection findings this protocol prevents

- The lab tested that the system can apply a spec but never reconciled the loaded limits to the approved documents.
- A wrong limit, operator, or rounding rule live in production with no record it was ever checked.
- Master data loaded and verified by the same person.

## How to adapt

1. Set your document number and the specific master-data set in scope.
2. Decide 100% versus risk-based sampling per data set; default critical specs to 100%.
3. Tie corrections to your change-control procedure and keep evidence references concrete.
