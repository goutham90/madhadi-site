---
title: "Test Script: Interface and Integration"
description: "A plug-and-play interface and integration test script that proves data passes correctly and completely between two systems, with field mapping, transformation, error and retry handling, reconciliation, and no-loss or no-duplication checks in numbered step, expected, actual, pass or fail format, plus a worked filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Template"
pillar: "csv-csa"
relatedArticles: ["writing-validation-protocols-and-reports", "validation-test-failure-management"]
tags: ["interface testing", "integration testing", "test script", "reconciliation", "data integrity", "csv", "csa", "21 cfr part 11"]
tier: "Advanced"
---

This is a ready-to-use interface and integration test script. It proves that data sent from one system arrives in the receiving system correctly, completely, and once, that fields map and transform as the interface specification says, and that the link behaves safely when something goes wrong in transit. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and execute it under an approved OQ protocol or validation plan. A worked filled specimen follows the template so you can see how a completed version reads. A test script is contemporaneous GxP evidence: write each actual result as you observe it, in ink or in the validated tool, never reconstructed afterward. Verify each cited regulation against the current source before you rely on it.

## What this script is, and where it sits

An interface is the seam where two validated systems hand data to each other. Most data integrity failures that survive individual system testing live exactly here, at the seam, because each system passes on its own and nobody proves the handoff. A laboratory system reports a result that a manufacturing system never receives, a quantity arrives truncated, a number that left as kilograms lands read as grams, a message is delivered twice and creates a duplicate batch record, or a transmission fails silently and no one is told. This script tests the path, not the endpoints: the right data leaves the source, the interface maps and transforms it per its specification, the right data arrives in the target, the totals reconcile, and a failed or retried message does not produce loss or duplication.

It sits below the integration or OQ protocol, which says what interfaces will be tested and why, and feeds the traceability matrix, which links each interface requirement to the evidence that exercised it. It assumes both endpoint systems are already qualified in their own right; what is under test is the connection between them. Under FDA's Computer Software Assurance approach, the rigor here scales with the risk the interface carries: an interface that moves release-decision data, or that feeds a calculation no human re-checks, earns the full scripted, reconciled, evidence-backed treatment below, while a low-risk display-only feed may justify a lighter record. Decide that risk first, in the risk assessment, then write the script.

## Document control header

| Field | Entry |
|---|---|
| Test script title | `<<FILL: interface-specific title, e.g. Result Transfer from LIMS to MES, Normal and Error Paths>>` |
| Test script ID | `<<FILL: TS-ID, e.g. TS-INT-058>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Parent protocol / plan | `<<FILL: integration or OQ protocol or validation plan ID this script runs under>>` |
| Source system and ID | `<<FILL: sending system name / ID / version>>` |
| Target system and ID | `<<FILL: receiving system name / ID / version>>` |
| Interface / middleware and version | `<<FILL: interface engine, message broker, API, ETL job, or file drop, with version>>` |
| Interface specification reference | `<<FILL: interface spec / mapping spec ID and version, frozen for test>>` |
| Test environment | `<<FILL: qualified validation environment for both endpoints and the interface, not production>>` |
| Interface risk (drives rigor) | `<<FILL: High / Medium / Low, per the risk assessment>>` |
| Author | `<<FILL: name, role>>` |
| Effective date | `<<FILL: date>>` |

## 1. Interface and requirements traced

State the interface this script verifies and the requirements it traces to, so the matrix can link requirement to evidence in both directions. Every requirement listed here must be exercised by at least one numbered step below, and no step should test something no requirement asked for.

| Interface under test | Requirement ID | Requirement text (summary) | Source document | Risk |
|---|---|---|---|---|
| `<<FILL: e.g. transfer approved result records from source to target>>` | `<<FILL: IFS-2.1 / URS-031>>` | `<<FILL: the interface shall transmit each approved result once, map source fields to target fields per the mapping table, apply the defined unit conversion, deliver complete and unaltered values, and on failure retry then alert without creating loss or duplicates>>` | `<<FILL: interface spec / URS ID, version>>` | `<<FILL: High / Medium / Low>>` |

## 2. Objective

In one or two sentences, state what passing this script demonstrates.

Example: this script verifies that approved records sent from the source system arrive in the target system complete, accurately mapped and converted, exactly once, that the populations reconcile, and that a failed transmission is detected, retried, and alerted without losing or duplicating data.

`<<FILL: objective>>`

## 3. Prerequisites

List everything that must be true before execution starts. If any prerequisite is not met, do not execute; record the gap as a test deviation and stop.

| No. | Prerequisite | Verified (initials / date) |
|---|---|---|
| 3.1 | Parent protocol `<<FILL: ID>>` is approved and effective. | `<<FILL>>` |
| 3.2 | Both endpoint systems are qualified, with no open deviation affecting the data objects in scope. | `<<FILL>>` |
| 3.3 | Source, interface, and target are installed at versions `<<FILL: versions>>` in the qualified test environment, against the frozen interface specification `<<FILL: ref>>`. | `<<FILL>>` |
| 3.4 | The connection and credentials between the systems are configured per `<<FILL: config spec ref>>` and confirmed reachable. | `<<FILL>>` |
| 3.5 | Test data set `<<FILL: ID>>` is prepared with known values, including normal values, boundary values, and at least one record per transformation rule. | `<<FILL>>` |
| 3.6 | System clocks and time zones on both endpoints and the interface are synchronized per `<<FILL: ref>>`. | `<<FILL>>` |
| 3.7 | A method exists to read what physically arrived in the target (a query, report, or export), independent of the source. | `<<FILL>>` |
| 3.8 | The tester is trained on this script and on both systems, training record `<<FILL: ref>>`. | `<<FILL>>` |

## 4. Field mapping and transformation under test

This table is the spine of the script. List every source field that crosses the interface, the target field it lands in, the transformation applied, and the exact expected value for the test data. An inspector reads this to see that the mapping was tested field by field, not assumed. Derive every transformed expected value outside the systems under test, by hand or in a separately verified spreadsheet.

| Source field | Target field | Transformation rule | Test input value | Expected target value |
|---|---|---|---|---|
| `<<FILL: result_value>>` | `<<FILL: ResultQty>>` | `<<FILL: convert kg to g, multiply by 1000>>` | `<<FILL: 1.250 kg>>` | `<<FILL: 1250 g>>` |
| `<<FILL: result_date>>` | `<<FILL: ResultDate>>` | `<<FILL: format DD-MON-YYYY to ISO 8601>>` | `<<FILL: 09-JUN-2026>>` | `<<FILL: 2026-06-09>>` |
| `<<FILL: status_code>>` | `<<FILL: Disposition>>` | `<<FILL: lookup A to APPROVED>>` | `<<FILL: A>>` | `<<FILL: APPROVED>>` |
| `<<FILL: free_text_note>>` | `<<FILL: Comment>>` | `<<FILL: pass through, no truncation, UTF-8 preserved>>` | `<<FILL: 240-character note with special characters>>` | `<<FILL: identical 240-character note>>` |

State once and apply everywhere: the rounding or tolerance rule for numeric comparisons, the character encoding expected end to end, and how a null or empty source value must be represented in the target.

`<<FILL: rounding / tolerance, encoding, and null-handling convention>>`

## 5. Execution conventions

Read these before executing, then apply them to every step.

- Record each actual result contemporaneously, as you observe it. Do not pre-fill, do not batch at the end.
- "Meets expected result" is not an actual result. Write what you actually saw: the value in the target, the message text, the record count, the timestamp, the alert content.
- Read the target through an independent method (a query, report, or export), not through the interface log alone. A "sent" status in the source is not proof of arrival.
- Use one unambiguous mark for pass or fail. A blank cell is incomplete, not a pass.
- For any single-line correction, strike through once, initial, date, and add a brief reason. Never obliterate the original entry.
- Capture objective evidence (target query output, interface log extract, alert screenshot, message payload) for every step whose pass depends on a system output, with a unique reference recorded in the step.
- A silent failure is the worst outcome an interface can have. If a record fails to arrive and nothing is logged or alerted, that is a Fail of the highest severity, not a tester oversight.
- The expected result must be written before execution, specific enough that two people would agree on whether it was met. Do not amend an expected result after you have seen the actual one.

## 6. Test steps

The steps below cover the four behaviors an interface must prove: correct and complete transfer, accurate mapping and transformation, no loss or duplication under normal and failure conditions, and safe error and retry handling. Number steps continuously. Add or remove rows so every mapping rule and every requirement in section 1 is exercised.

### 6.1 Normal-path transfer and mapping

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 6.1.1 | `<<FILL: create or approve the trigger record(s) in the source so the interface fires>>` | `<<FILL: source records reach the state that triggers transmission; trigger recorded>>` | `<<FILL: observed>>` | `<<FILL>>` | `<<FILL: SCR-101>>` | `<<FILL>>` |
| 6.1.2 | `<<FILL: allow the interface to transmit per its trigger or schedule>>` | `<<FILL: interface picks up the records; transmission logged with a unique message ID and timestamp>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: LOG-101>>` | `<<FILL>>` |
| 6.1.3 | `<<FILL: query the target independently for the transferred record(s)>>` | `<<FILL: each source record present in the target, one occurrence each, status as specified>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: QRY-101>>` | `<<FILL>>` |
| 6.1.4 | `<<FILL: compare each mapped field in the target against the expected value from section 4>>` | `<<FILL: every field matches the section 4 expected value, including transformations and encoding>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: QRY-102>>` | `<<FILL>>` |
| 6.1.5 | `<<FILL: verify the highest-risk numeric field against the independently calculated expected value>>` | `<<FILL: converted value equals the hand-calculated value to the stated rounding rule, no truncation>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: CALC-101>>` | `<<FILL>>` |

### 6.2 Completeness and reconciliation (no loss, no duplication)

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 6.2.1 | `<<FILL: send a known batch of N records and record N at the source>>` | `<<FILL: source count = N, recorded before reconciliation>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: REC-101>>` | `<<FILL>>` |
| 6.2.2 | `<<FILL: count records received in the target for the same batch>>` | `<<FILL: target count = N; no missing records>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: REC-102>>` | `<<FILL>>` |
| 6.2.3 | `<<FILL: check for duplicate keys in the target for the batch>>` | `<<FILL: zero duplicate keys; each source record appears exactly once>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: REC-103>>` | `<<FILL>>` |
| 6.2.4 | `<<FILL: reconcile a control total or checksum across the batch (sum of a numeric field, or record hash)>>` | `<<FILL: target control total equals source control total exactly>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: REC-104>>` | `<<FILL>>` |
| 6.2.5 | `<<FILL: re-send the same batch (replay) without clearing it>>` | `<<FILL: interface deduplicates by message ID or key; no new duplicates created in the target>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: REC-105>>` | `<<FILL>>` |

### 6.3 Error handling and retry

| Step | Action | Expected result | Actual result | Pass / Fail | Evidence ref | Initials / date |
|---|---|---|---|---|---|---|
| 6.3.1 | `<<FILL: interrupt the connection mid-transfer (stop the target listener or block the route), then send a record>>` | `<<FILL: interface detects the failure; record held in a queue or error state; nothing partially written to the target>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: ERR-101>>` | `<<FILL>>` |
| 6.3.2 | `<<FILL: confirm the failure is alerted per the spec>>` | `<<FILL: failure alert raised to the defined recipients within the defined time; not silent>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: ERR-102>>` | `<<FILL>>` |
| 6.3.3 | `<<FILL: restore the connection and let the retry run>>` | `<<FILL: held record is retransmitted per the retry rule and lands in the target complete>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: ERR-103>>` | `<<FILL>>` |
| 6.3.4 | `<<FILL: confirm the retried record is not also duplicated>>` | `<<FILL: exactly one occurrence in the target after retry; no duplicate from the held copy>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: ERR-104>>` | `<<FILL>>` |
| 6.3.5 | `<<FILL: send a malformed or out-of-mapping record (e.g. an unknown status code or oversized field)>>` | `<<FILL: interface rejects it to the error queue with a clear reason; it is not silently dropped or coerced; the good records are unaffected>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: ERR-105>>` | `<<FILL>>` |

Walk each mapping rule, each boundary value, and at least one failure mode the interface is specified to handle. Do not reuse a step number after a revision.

## 7. Acceptance criteria

This script passes only when all of the following are true:

- Every step required to verify the requirements in section 1 is marked Pass, with a recorded actual result and, where applicable, an evidence reference.
- Every field in section 4 maps and transforms to its expected value, with no truncation, rounding error, encoding corruption, or mishandled null.
- Source and target reconcile by count and by control total or checksum, with zero missing and zero duplicate records, including after a replay.
- A failed transmission is detected, held without partial writes, alerted, retried, and lands exactly once, and a malformed record is rejected with a reason rather than silently dropped or coerced.
- Every deviation raised during execution is resolved with a documented disposition, and any retest is recorded under its own step or attachment.
- The completed script is reviewed and approved per section 10, by a reviewer who did not execute it.

A script with one or more open Fail steps, a reconciliation that does not balance, or a silent-failure finding does not pass and cannot support the conclusion in the parent report.

## 8. Deviations raised during execution

Any step that does not meet its expected result, any departure from the written steps, and any prerequisite not met is recorded here and managed per the parent protocol and `<<FILL: deviation / test-incident SOP-ID>>`. Cross-reference the deviation number on the failing step.

| Deviation / incident no. | Step | Description (observed vs expected) | Classification | Disposition (retest, config fix, spec clarification, accept with justification) | Closed (date) |
|---|---|---|---|---|---|
| `<<FILL: TI-2026-019>>` | `<<FILL: 6.x.x>>` | `<<FILL>>` | `<<FILL: critical / major / minor>>` | `<<FILL>>` | `<<FILL>>` |

A failed step is data, not a finding against the tester. What an inspector looks for is that the failure was captured honestly, classified, dispositioned, and that any retest is traceable to the original failure, not quietly overwritten. A reconciliation mismatch or a silent-failure result is almost always critical: it means data could be lost or duplicated in production without anyone knowing, so it must be fixed and re-proven, not justified away.

## 9. Execution summary

| Field | Entry |
|---|---|
| Total steps | `<<FILL>>` |
| Steps passed | `<<FILL>>` |
| Steps failed | `<<FILL>>` |
| Records sent / records reconciled | `<<FILL>>` |
| Duplicates found | `<<FILL>>` |
| Deviations raised / closed | `<<FILL>>` |
| Requirement(s) verified (from section 1) | `<<FILL>>` |
| Overall result | Pass / Fail (`<<FILL>>`) |

## 10. Sign-off

The tester executes and signs; an independent reviewer who did not execute the test confirms the record is complete, the evidence supports each pass, the reconciliation balances, and any deviation is resolved. The reviewer should not be the same person who executed the script.

| Role | Name | Signature | Date |
|---|---|---|---|
| Tester (executed) | `<<FILL>>` | | |
| Reviewer (independent) | `<<FILL>>` | | |
| QA approval | `<<FILL>>` | | |

## 11. References

> 21 CFR Part 11 (electronic records and electronic signatures), for the accuracy, completeness, and integrity of records moving between systems.
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment), including input and output accuracy checks.
> 21 CFR 211.180 and 211.194 (records and laboratory records), where interface data becomes part of the GxP record.
> EU GMP Annex 11 (Computerised Systems), sections on data transfer, accuracy checks, and interfaces between systems.
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> FDA Guidance, Computer Software Assurance for Production and Quality System Software, finalized 24 September 2025 (risk-based scaling of test rigor).
> FDA Guidance, General Principles of Software Validation (2002).
> GAMP 5, A Risk-Based Approach to Compliant GxP Computerized Systems (Second Edition).
> MHRA GxP Data Integrity Guidance and Definitions, and PIC/S PI 041 (data transfer and completeness).
> ICH Q9, Quality Risk Management (for the risk basis of test depth).
> For medical device software: 21 CFR Part 820 (QMSR, effective 2 February 2026, incorporating ISO 13485:2016 by reference) and IEC 62304.

Confirm the current version and clause numbers of each reference before issue.

## 12. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

---

## Filled specimen

The following shows the script executed for an example interface that transfers approved laboratory results from a laboratory information management system (LIMS) to a manufacturing execution system (MES) through a message broker. It covers a normal transfer, the field mapping, a batch reconciliation, a replay, and a forced failure with retry. The company, systems, accounts, and numbers are illustrative; replace them with your own.

**Header (extract)**

| Field | Entry |
|---|---|
| Test script title | Result Transfer from LIMS to MES, Normal and Error Paths |
| Test script ID | TS-INT-058, v1.0 |
| Parent protocol | INT-CSV-022 |
| Source system and ID | LIMS, instance LIMS-QA-02 (validation), v8.4.2 |
| Target system and ID | MES, instance MES-QA-01 (validation), v6.1.0 |
| Interface / middleware | Message broker INT-ENG, v3.2, queue Q.RESULTS |
| Interface specification | IFS-LIMS-MES v2.0, frozen for test |
| Interface risk | High |

**Field mapping under test (extract)**

| Source field | Target field | Transformation | Test input | Expected target value |
|---|---|---|---|---|
| result_value (kg) | ResultQty (g) | multiply by 1000 | 1.250 kg | 1250 g |
| result_date | ResultDate | DD-MON-YYYY to ISO 8601 | 09-JUN-2026 | 2026-06-09 |
| status_code | Disposition | A maps to APPROVED | A | APPROVED |
| note (UTF-8) | Comment | pass through, no truncation | 240-char note with "deg C" symbol and accents | identical 240-char note, symbol and accents intact |

Conventions for this run: numeric exact match after conversion; UTF-8 end to end; a null source note must arrive as an empty target Comment, never the literal text "null".

**Test steps (executed, extract)**

| Step | Action | Expected result | Actual result | P/F | Evidence | Initials / date |
|---|---|---|---|---|---|---|
| 6.1.1 | Approve result records SAM-0451 to SAM-0455 in LIMS. | 5 records reach APPROVED and trigger transmission. | 5 records set to APPROVED; trigger logged 09 Jun 2026 10:22 EDT. | Pass | SCR-101 | AP 09 Jun 2026 |
| 6.1.3 | Query MES independently for the 5 records. | All 5 present, one occurrence each. | All 5 found in MES, one each, no extras. | Pass | QRY-101 | AP 09 Jun 2026 |
| 6.1.5 | Verify SAM-0451 quantity in MES vs hand calc (1.250 kg x 1000). | ResultQty = 1250 g exactly, no truncation. | MES ResultQty = 1250 g; matched hand calculation. | Pass | CALC-101 | AP 09 Jun 2026 |
| 6.1.4 | Compare date, status, and note fields for SAM-0451. | Date 2026-06-09; Disposition APPROVED; 240-char note intact with symbol and accents. | Date 2026-06-09; Disposition APPROVED; note arrived complete, symbol and accents intact. | Pass | QRY-102 | AP 09 Jun 2026 |
| 6.2.1 | Record source count for the batch. | Source count = 5. | LIMS export confirmed 5 approved records in scope. | Pass | REC-101 | AP 09 Jun 2026 |
| 6.2.2 | Count records received in MES. | Target count = 5. | MES query returned 5. | Pass | REC-102 | AP 09 Jun 2026 |
| 6.2.3 | Check MES for duplicate keys. | Zero duplicates. | No duplicate keys found. | Pass | REC-103 | AP 09 Jun 2026 |
| 6.2.4 | Reconcile sum of ResultQty across the batch. | Target sum = source sum (converted). | Source 6.300 kg, converted 6300 g; MES sum 6300 g. Balanced. | Pass | REC-104 | AP 09 Jun 2026 |
| 6.2.5 | Replay the same batch on the queue. | No new duplicates; broker deduplicates by message ID. | Replay sent; MES count stayed 5, no new records. | Pass | REC-105 | AP 09 Jun 2026 |
| 6.3.1 | Stop the MES listener, then approve SAM-0456. | Record held in error queue; nothing partial in MES. | Record held in Q.RESULTS error queue; MES had no partial SAM-0456. | Pass | ERR-101 | AP 09 Jun 2026 |
| 6.3.2 | Confirm the failure alert. | Alert to the integration team within 5 minutes. | Email and dashboard alert raised at 10:41, 3 minutes after failure. | Pass | ERR-102 | AP 09 Jun 2026 |
| 6.3.3 | Restart the MES listener and let retry run. | SAM-0456 retransmitted and lands complete. | Retry succeeded; SAM-0456 in MES, all fields correct. | Pass | ERR-103 | AP 09 Jun 2026 |
| 6.3.4 | Confirm SAM-0456 not duplicated after retry. | Exactly one occurrence in MES. | One occurrence of SAM-0456; held copy consumed, not duplicated. | Pass | ERR-104 | AP 09 Jun 2026 |
| 6.3.5 | Send a record with unknown status_code "Z". | Rejected to error queue with reason; good records unaffected. | "Z" rejected, reason "no mapping for status Z"; other records unaffected. | Pass | ERR-105 | AP 09 Jun 2026 |

**Execution summary**

| Field | Entry |
|---|---|
| Total steps | 15 |
| Steps passed | 15 |
| Steps failed | 0 |
| Records sent / records reconciled | 6 / 6 |
| Duplicates found | 0 |
| Deviations raised / closed | 0 / 0 |
| Requirement(s) verified | IFS-2.1 / URS-031 |
| Overall result | Pass |

**Sign-off**

| Role | Name | Date |
|---|---|---|
| Tester (executed) | A. Patel, signed | 09 Jun 2026 |
| Reviewer (independent) | R. Gomez, signed | 10 Jun 2026 |
| QA approval | S. Lin, signed | 10 Jun 2026 |

In this example the tester read the target through an independent MES query rather than trusting the source "sent" flag, checked every mapped field including the unit conversion against a hand calculation, reconciled the batch by count and by summed quantity, replayed the batch to prove the broker would not duplicate, and forced a real failure to confirm the record was held, alerted, retried, and not duplicated. Had step 6.2.4 shown a target sum of 6300 g against a source of 6299 g, the tester would have marked it Fail and opened a critical test incident, because a one-gram gap across the batch means data was lost or altered in transit, which is exactly what section 8 is built to capture.

## Common inspection findings this script prevents

- Each system validated on its own, with no test of the interface between them, so a real-world handoff failure was never exercised.
- Transfer confirmed only by a "sent" or "success" status in the source, with no independent read of what actually arrived in the target.
- Field mapping assumed rather than tested, so a unit conversion, date format, code lookup, or truncation error reaches production unnoticed.
- A numeric value verified by the interface itself, never against an independently calculated expected value, so a wrong transformation could pass.
- No reconciliation by count or control total, so records lost or duplicated in transit go undetected.
- No test of the replay or duplicate case, so a retried or resent message silently creates duplicate records.
- A transmission failure that is neither logged nor alerted, leaving a silent gap nobody is responsible for noticing.
- A malformed record silently dropped or coerced to a default instead of being rejected with a reason and held.
- Encoding or special characters corrupted across the interface, with no field tested for it.
- A failed step quietly retested and overwritten, with no test incident and no link between the failure and the eventual pass.
- The same person executing and reviewing the script, with no independent check that the reconciliation actually balanced.
- Testing run in production, or against a different interface version or unfrozen mapping specification than the one being qualified.

## How to adapt this script

1. Set your test script ID, parent protocol, both endpoint versions, the interface version, and the frozen interface specification in the header, and confirm you are testing in a qualified non-production environment with both endpoints qualified.
2. Decide the risk of the interface first, then keep or trim the step depth and evidence to match; reserve the full reconciled, error-path treatment for higher-risk interfaces such as those that move release-decision data.
3. Fill the field mapping table in section 4 with every field that crosses the seam, its real transformation rule, and the expected value for your test data, and state your one rounding, encoding, and null-handling convention.
4. Keep the four behavior groups in section 6 (transfer and mapping, reconciliation, replay, error and retry) and add a row per mapping rule and per specified failure mode, so each is exercised and each requirement in section 1 is traced in both directions.
5. Make sure you can read the target independently of the source for every arrival check, and reconcile by both count and a control total or checksum, not by count alone.
6. Point the cross-references in sections 3, 8, and 10 to your real protocol, deviation or test-incident procedure, and review and approval process.
7. Confirm every regulation in section 11 against the current published version before issue.
