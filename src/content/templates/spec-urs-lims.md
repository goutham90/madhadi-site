---
title: "Specification: LIMS User Requirements Specification (URS)"
description: "A plug-and-play User Requirements Specification for a configured COTS LIMS: testable, ID'd requirements for sample login, test assignment, result entry, calculations and rounding, spec evaluation and OOS flagging, e-signatures, audit trail, interfaces, and access, with a filled specimen."
pubDate: 2026-06-30
docType: "Specification"
pillar: "manufacturing-automation"
relatedArticles: ["lims-implementation-and-validation"]
tags: ["lims", "urs", "csv", "gamp5", "part-11", "data integrity", "specification", "traceability"]
tier: "Advanced"
---

This is a ready-to-use User Requirements Specification for a configured commercial off-the-shelf (COTS) Laboratory Information Management System. Each requirement has a stable ID, a priority, and a verification method so it traces through the functional specification, the risk assessment, and the test scripts into the traceability matrix. Replace every `<<FILL: ...>>` placeholder, write before you configure, and route it through document control. A filled specimen follows. This is general guidance to adapt and verify, not legal or regulatory advice.

## Document control header

| Field | Entry |
|---|---|
| Document title | User Requirements Specification for `<<FILL: LIMS name and version>>` |
| Document number | `<<FILL: URS-ID, e.g. URS-LIMS-001>>` |
| Version / effective date | `<<FILL>>` |
| Document owner | `<<FILL: Lab System Owner>>` |
| GxP impact / GAMP category | GxP; Category 4 (configured), `<<FILL: any Category 5 elements>>` |
| Linked documents | `<<FILL: validation plan, FS/CS, RTM, supplier assessment IDs>>` |

## 1. Purpose

This specification states what `<<FILL: COMPANY NAME>>` requires the LIMS to do and the controls it must enforce so that laboratory sample management and results stay attributable, accurate, and trustworthy, and the system can be validated and traced. It is written before configuration, in testable language.

## 2. Scope

Covers the GxP functions, data, interfaces, and controls of the LIMS used for `<<FILL: release / stability / in-process / EM / raw-material testing>>` at `<<FILL: site(s)>>`. Excludes `<<FILL: underlying infrastructure, desktop builds, non-GxP convenience features>>`, governed by `<<FILL: cross-reference IDs>>`.

## 3. Conventions

- "Shall" = mandatory (M). "Should" = recommended (S). One requirement per row.
- Priority: M (cannot accept without), S (should-have with documented workaround), C (could-have, deferrable).
- Verification: T (test), I (inspection/config review), D (demonstration), A (analysis/review).
- Each ID is stable once issued; superseded requirements are retired, not renumbered.

## 4. Requirements

### 4.1 Sample login and identity

| ID | Requirement | Priority | Verify |
|---|---|---|---|
| URS-LIMS-001 | The system shall assign a unique, system-generated sample ID that cannot be reused or manually overridden to create a duplicate. | M | T |
| URS-LIMS-002 | The system shall enforce mandatory login fields (material/product, batch/lot, sampling point, sampling date/time, sampled-by, stage) before a sample can be saved. | M | T |
| URS-LIMS-003 | The system shall assign the applicable test plan automatically from material and stage (master data). | M | T |
| URS-LIMS-004 | The system shall date/time stamp login from a synchronized, user-non-editable system clock. | M | T |

### 4.2 Test assignment, result entry, and calculations

| ID | Requirement | Priority | Verify |
|---|---|---|---|
| URS-LIMS-010 | The system shall expand each sample into its individual tests, each carrying its method, specification, and due date. | M | T |
| URS-LIMS-011 | For manual result entry, the system shall enforce data type, units, mandatory entry, and configured range/plausibility checks for critical data. | M | T |
| URS-LIMS-012 | The system shall compute derived results from defined inputs using configured calculations; analyst overwrite of a calculated result shall be blocked or controlled and audit-trailed. | M | T |
| URS-LIMS-013 | The system shall apply configured rounding and significant-figure rules, with the rounding-before-or-after-comparison behavior matching the approved method. | M | T |
| URS-LIMS-014 | The system shall not permit a silent overwrite of a saved result; any change shall retain the original, capture new value, who, when, and a reason. | M | T |

### 4.3 Specification evaluation and OOS/OOT

| ID | Requirement | Priority | Verify |
|---|---|---|---|
| URS-LIMS-020 | The system shall evaluate each reported result against the configured specification and assign pass/fail; the analyst shall not select or alter the spec at entry. | M | T |
| URS-LIMS-021 | The system shall flag out-of-specification results and route them to the OOS workflow; it shall not permit a silent re-test or overwrite of an OOS. | M | T |
| URS-LIMS-022 | The system should flag out-of-trend results against configured historical limits. | S | T |

### 4.4 Review, approval, and electronic signatures

| ID | Requirement | Priority | Verify |
|---|---|---|---|
| URS-LIMS-030 | The system shall enforce two-tier review: entry then independent approval, and shall prevent the entering analyst from being the sole approver. | M | T |
| URS-LIMS-031 | Each approval shall be an electronic signature carrying the signer's printed name, date/time, and the meaning of the signature, bound to the record and printed on human-readable output. | M | T |
| URS-LIMS-032 | The system shall lock the record on approval; a post-approval change shall require a controlled amendment with reason and re-approval. | M | T |

### 4.5 Audit trail, access, and time

| ID | Requirement | Priority | Verify |
|---|---|---|---|
| URS-LIMS-040 | The system shall maintain a secure, time-stamped audit trail of create/modify/delete that users cannot disable or alter and that is reviewable. | M | T |
| URS-LIMS-041 | The system shall require unique user accounts; shared or generic logins shall not be possible for GxP actions. | M | T |
| URS-LIMS-042 | The system shall enforce role-based privileges; master-data and configuration edit rights shall be restricted to configuration/admin roles, not analysts. | M | T |
| URS-LIMS-043 | The system shall apply authority checks so only authorized individuals enter, sign, or alter records and configuration. | M | T |

### 4.6 Interfaces, CoA, and records

| ID | Requirement | Priority | Verify |
|---|---|---|---|
| URS-LIMS-050 | Interfaced instrument/CDS results shall map to the correct sample and test with correct units, decimals, and sign; interface failure (dropped/partial transfer) shall be detected and handled without silent data loss. | M | T |
| URS-LIMS-051 | The CoA/report shall reflect approved current results, show the correct spec and pass/fail conclusion, and be reproducible. | M | T |
| URS-LIMS-052 | Records, metadata, and audit trail shall be retained, retrievable, and human-readable for the full retention period, and producible as complete copies for inspection. | M | T |
| URS-LIMS-053 | Critical static data (specs, methods, limits, units) shall be loaded under control and verifiable against approved source documents. | M | I |

## 5. Traceability hook

Each ID above is carried into the functional/configuration specification, risk-rated, and traced to a test case and result in the traceability matrix `<<FILL: RTM ID>>`. Coverage of every M requirement by a passed test is an acceptance criterion of the validation.

## 6. Filled specimen

A single requirement carried through to its test, to show the level of testability expected:

| Field | Entry |
|---|---|
| Requirement ID | URS-LIMS-021 |
| Requirement | The system shall flag OOS results and route to the OOS workflow; no silent re-test or overwrite. |
| Priority / verify | M / Test |
| Traced FS | FS-LIMS-7.2 (spec evaluation and OOS routing) |
| Risk | High (affects release decision) |
| Test case | TS-OQ-LIMS-021: enter a result above the upper spec limit; confirm OOS flag, automatic routing to OOS status, and that the result cannot be silently re-entered |
| Result | Pass (executed 2026-06-29, witnessed) |

## Common inspection findings this URS prevents

- Requirements written so vaguely they cannot be tested, so coverage cannot be shown.
- No requirement for spec-to-source verification, so a wrong loaded limit is never caught.
- Self-approval, silent overwrite, or shared logins never stated as requirements, so they are never tested.
- Interface mapping assumed correct because no requirement demanded it be verified.

## How to adapt

1. Set your document number and owner, and confirm your LIMS name and version.
2. Add lab-specific requirements (stability scheduling, EM tracking, inventory) using the same ID and verify columns.
3. Call out any Category 5 custom scripts/reports and add the heavier requirements they need.
4. Keep the IDs stable; retire rather than renumber when requirements change.
