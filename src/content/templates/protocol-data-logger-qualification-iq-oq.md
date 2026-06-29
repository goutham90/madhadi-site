---
title: "Protocol: Temperature Data Logger Qualification (IQ/OQ)"
description: "A plug-and-play IQ/OQ protocol to qualify a reusable temperature data logger and verify its accuracy, alarming, audit trail, and clock against user requirements, with executable test cases, acceptance criteria, deviation handling, and a filled specimen."
pubDate: 2026-06-29
docType: "Protocol"
pillar: "supply-chain-gdp"
relatedArticles: ["supply-chain-data-integrity", "cold-chain-shipping-qualification", "calibration-and-metrology-program"]
tags: ["iot loggers", "qualification", "cold chain", "data integrity", "Protocol", "calibration"]
tier: "Advanced"
---

This is a ready-to-use qualification protocol for a reusable temperature data logger and its read-out platform. Replace every `<<FILL: ...>>` placeholder, set your document numbers and dates, and route through your validation and quality approval. Single-use disposable loggers are qualified through supplier assessment and per-lot certificate verification rather than per-unit IQ/OQ; use this protocol for reusable hardware and as the model for platform verification. A filled specimen of two executed test cases follows.

## Approval page

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (Validation / Cold-chain SME) | `<<FILL>>` | | |
| Reviewer (System / logger owner) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

| Field | Entry |
|---|---|
| Protocol number | `<<FILL: e.g. VAL-LOG-007>>` |
| Logger make / model | `<<FILL>>` |
| Platform / portal | `<<FILL>>` |
| Effective date | `<<FILL>>` |

## 1. Objective

To provide documented evidence that the `<<FILL: logger model>>` and its read-out platform are installed correctly and operate as intended for use as a source of GxP temperature data in distribution: accurate within specification, correctly alarmed, with a protected audit trail and a controlled clock, traceable to the user requirements.

## 2. Scope

Covers installation verification (IQ) and operational verification (OQ) of the logger hardware and the platform functions used to record, alarm on, read out, and retain temperature data. Performance qualification under real transit profiles is covered separately by `<<FILL: PQ / lane-qualification protocol>>`.

## 3. System description

`<<FILL: brief description: logger range, resolution, memory, ingress rating, battery; platform hosting model (on-premise / vendor SaaS), data flow from device to portal, retention.>>` If the platform is vendor-hosted, the supplier assessment is at `<<FILL: supplier assessment reference>>` and cloud controls follow [cloud and SaaS validation](/articles/cloud-saas-validation).

## 4. Prerequisites

| # | Prerequisite | Verified (initial / date) |
|---|---|---|
| P1 | Approved user requirements specification (URS) for the logger exists | `<<FILL>>` |
| P2 | Reference standard for accuracy checks is calibrated and traceable to a national metrology institute | `<<FILL>>` |
| P3 | Logger calibration certificate available, current, and traceable | `<<FILL>>` |
| P4 | Supplier assessment of logger and platform vendor complete | `<<FILL>>` |
| P5 | Test environment / chamber available at the required set points | `<<FILL>>` |

## 5. Roles

| Role | Responsibility |
|---|---|
| Tester | Executes test cases, records actual results and raw data references. |
| Reviewer | Confirms each step was executed and recorded correctly. |
| QA | Approves the protocol and the summary; dispositions deviations. |

## 6. Acceptance criteria (overall)

The logger is qualified when every test case passes (or every deviation is resolved with documented justification), the accuracy at each set point is within the URS tolerance against the reference standard, alarms trigger at the configured thresholds, the audit trail captures start/stop/download/configuration events, and timestamps are correct across the operating time zones.

## 7. IQ test cases (installation)

| ID | Step | Expected result | Actual | Pass/Fail | Tester | Date |
|---|---|---|---|---|---|---|
| IQ-1 | Record logger make, model, serial, firmware version | Match URS and purchase record | `<<FILL>>` | | `<<FILL>>` | `<<FILL>>` |
| IQ-2 | Verify calibration certificate present, current, traceable | Certificate valid and traceable to NMI | `<<FILL>>` | | `<<FILL>>` | `<<FILL>>` |
| IQ-3 | Confirm configured logging interval, thresholds, and mode match the approved standard configuration | Configuration locked and matches | `<<FILL>>` | | `<<FILL>>` | `<<FILL>>` |
| IQ-4 | Verify platform user accounts are individual, role-based, no shared logins | Individual named accounts only | `<<FILL>>` | | `<<FILL>>` | `<<FILL>>` |
| IQ-5 | Verify retention configuration and that an archived record is retrievable and human-readable | Retrievable for the defined period | `<<FILL>>` | | `<<FILL>>` | `<<FILL>>` |

## 8. OQ test cases (operation)

| ID | Step | Expected result | Actual | Pass/Fail | Tester | Date |
|---|---|---|---|---|---|---|
| OQ-1 | Place logger and reference standard together at `<<FILL: low set point, e.g. 2 C>>`; record both after stabilization | Logger within `<<FILL: tolerance, e.g. plus/minus 0.5 C>>` of reference | `<<FILL>>` | | `<<FILL>>` | `<<FILL>>` |
| OQ-2 | Repeat at `<<FILL: mid set point, e.g. 5 C>>` | Within tolerance | `<<FILL>>` | | `<<FILL>>` | `<<FILL>>` |
| OQ-3 | Repeat at `<<FILL: high set point, e.g. 8 C>>` | Within tolerance | `<<FILL>>` | | `<<FILL>>` | `<<FILL>>` |
| OQ-4 | Drive temperature above the alarm threshold for longer than the cumulative-time rule | Alarm triggers per configuration | `<<FILL>>` | | `<<FILL>>` | `<<FILL>>` |
| OQ-5 | Start, stop, and download the logger; inspect the audit trail | Start, stop, download events captured with user and timestamp | `<<FILL>>` | | `<<FILL>>` | `<<FILL>>` |
| OQ-6 | Attempt to alter or delete a recorded value as an ordinary user | Alteration prevented or fully audit-trailed; original preserved | `<<FILL>>` | | `<<FILL>>` | `<<FILL>>` |
| OQ-7 | Verify timestamp correctness and time-zone handling against a reference clock in two operating zones | Timestamps correct; zone unambiguous | `<<FILL>>` | | `<<FILL>>` | `<<FILL>>` |
| OQ-8 | Generate an excursion report and confirm it reconciles to the raw profile | Report values match raw data | `<<FILL>>` | | `<<FILL>>` | `<<FILL>>` |

## 9. Deviation handling

Record any test result that does not meet the expected result as a protocol deviation with a unique ID, assess impact, determine root cause and correction, and obtain QA disposition before the protocol can be concluded. A failed test does not by itself fail the qualification if the deviation is resolved with documented, justified rationale and any necessary retest passes.

| Deviation ID | Test ID | Description | Resolution | QA disposition |
|---|---|---|---|---|
| `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 10. Summary and conclusion

| Field | Entry |
|---|---|
| Test cases executed / passed | `<<FILL>>` |
| Open deviations | `<<FILL: must be 0 to conclude>>` |
| Conclusion | `<<FILL: qualified / not qualified>>` |
| QA approval (name, signature, date) | `<<FILL>>` |

## 11. Attachments

- Calibration certificates (logger and reference standard).
- Raw data exports for each accuracy and alarm test.
- Audit trail export for OQ-5 and OQ-6.
- Approved URS and standard configuration record.

## References

> USP General Chapter <1118> (Monitoring Devices, Time, Temperature, Humidity).
> EU GDP (2013/C 343/01), Chapter 9 (Transportation).
> 21 CFR Part 11 / EU GMP Annex 11 for the platform (electronic records and audit trail).
> ISO 17025 accreditation context for the calibration laboratory, where claimed.

Confirm current versions before issue.

---

## Filled specimen

Two executed OQ test cases for an example reusable logger. Illustrative values.

| ID | Step | Expected result | Actual | Pass/Fail | Tester | Date |
|---|---|---|---|---|---|---|
| OQ-1 | Logger vs reference at 2 C after stabilization | Within plus/minus 0.5 C | Logger 2.2 C; reference 2.0 C; delta 0.2 C | Pass | M. Osei | 12 Jun 2026 |
| OQ-6 | Ordinary user attempts to edit a recorded value | Edit prevented or fully audit-trailed; original preserved | Edit blocked at user role; attempt logged in audit trail with user and timestamp | Pass | M. Osei | 12 Jun 2026 |

OQ-6 is the test that separates a GxP-grade logger from a convenient one: the device must prove that an ordinary user cannot quietly change the record. Here the edit was blocked and the attempt itself was captured, which is exactly what an inspector wants to see demonstrated, not asserted.

## Common inspection findings this protocol prevents

- A logger in use with no documented accuracy verification against a traceable standard.
- A platform where recorded values can be changed without an audit trail.
- Timestamps in the wrong time zone, so excursion durations are wrong.
- Shared platform logins, breaking attribution for the whole record set.

## How to adapt this protocol

1. Set the accuracy tolerance and set points to your product's requirements (tighter for ultra-cold or CRT-sensitive products).
2. For single-use loggers, replace per-unit OQ with supplier assessment plus per-lot certificate verification.
3. Add real-time-connectivity test cases (data-gap handling, live alarm latency) for connected loggers.
4. Reference the platform's cloud validation and supplier assessment where vendor-hosted.
