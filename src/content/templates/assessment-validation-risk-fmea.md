---
title: "Validation Risk Assessment (Functional Risk / FMEA)"
description: "A plug-and-play functional risk assessment for a validated computerized system: severity, occurrence and detection scales, RPN and risk class, the assessment table, risk-based test depth, mitigations, residual risk, and ICH Q9 approval, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Risk Assessment"
pillar: "csv-csa"
relatedArticles: ["csv-risk-assessment-methodology", "validation-deliverables-guide"]
tags: ["risk assessment", "fmea", "csv", "csa", "ich q9", "validation", "rpn", "21 cfr part 11"]
tier: "Advanced"
---

This is a ready-to-use functional risk assessment (FMEA style) for a validated computerized system. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, attach your requirements and configuration baseline, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Functional Risk Assessment for `<<FILL: SYSTEM NAME>>` |
| Document number | `<<FILL: RA-ID, e.g. RA-CSV-031>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. CSV Lead / Validation Manager>>` |
| System / process in scope | `<<FILL: system, version, GxP process supported>>` |
| Linked documents | `<<FILL: URS-ID, configuration spec, validation plan, traceability matrix>>` |

## 1. Purpose

This risk assessment identifies the ways the functions of `<<FILL: SYSTEM NAME>>` could fail, judges how bad each failure would be, and sets the depth of verification each function gets. The output is a defensible, risk-based testing scope: high-risk functions are tested hard, low-risk functions are tested light or accepted on supplier evidence. The assessment is the bridge between requirements and the test strategy required by a risk-based validation approach.

## 2. Scope

This assessment covers the GxP-relevant functions of `<<FILL: SYSTEM NAME>>`, version `<<FILL: version>>`, as configured for the process at `<<FILL: site / area>>`. It assesses functional risk to product quality, patient safety, and data integrity (the three risk dimensions named in ICH Q9 and PIC/S PI 041). It does not cover infrastructure qualification, supplier audit conclusions, or business-continuity risk, which are governed by `<<FILL: cross-reference document IDs>>`. Functions with no GxP impact are listed and excluded with rationale, not silently dropped.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| Author (CSV / validation) | Builds the function list, facilitates scoring, derives risk class and test depth, and writes the assessment. |
| Process owner / business SME | Confirms each function, judges severity to the process and product, and confirms the failure effects are realistic. |
| Quality Assurance | Reviews the methodology, the scoring rationale, the risk acceptance, and approves the residual risk. |
| System owner / IT | Provides the configuration baseline, the controls already present (access, audit trail, backups), and the detection mechanisms credited in scoring. |
| Supplier (where credited) | Provides the documentation (functional spec, supplier test evidence, audit report) that supports lower test depth on low-risk standard functions. |

## 4. Definitions

- **Function**: a discrete capability the system performs that maps to one or more requirements, for example "calculate assay result", "enforce e-signature on approval", "lock a record after release".
- **Failure mode**: the way a function can fail, for example "calculation returns a wrong value", "signature applied without authentication", "released record remains editable".
- **Severity (S)**: how serious the effect of the failure is on product quality, patient safety, or data integrity if it reaches the patient or the record undetected.
- **Occurrence (O)**: how likely the failure is to happen, given the system design, configuration, and how the function is used.
- **Detection (D)**: how likely the failure is to be caught before it does harm, by a system control, a downstream check, or a human review. Higher detection score means harder to detect.
- **RPN (risk priority number)**: S x O x D, used to rank and to set test depth.
- **Risk class**: a banded outcome (High / Medium / Low) derived from severity and the combined likelihood-detection, used when the team prefers a class matrix over a raw RPN. State which method governs.
- **Residual risk**: the risk that remains after mitigations and after testing, accepted by Quality before release.

## 5. Methodology

### 5.1 Method and standard

This assessment follows ICH Q9 (Quality Risk Management) and the GAMP risk-based approach: identify GxP functions, assess severity, likelihood, and detectability, assign a risk class or RPN, and set verification depth from the class. The method is FMEA (Failure Mode and Effects Analysis). State the governing decision rule once and apply it everywhere.

**Governing decision rule for this assessment:** `<<FILL: state one, e.g. "Risk class is set from the Severity x (Occurrence-Detection) class matrix in 5.5; RPN is computed and recorded as a secondary tie-breaker," OR "RPN = S x O x D governs and class is read from the RPN bands in 5.6." Use one method as primary.>>`

### 5.2 Inputs

| Input | Source |
|---|---|
| Requirements (URS / functional) | `<<FILL: URS-ID>>` |
| Configuration / design baseline | `<<FILL: config spec ID, version>>` |
| Supplier documentation | `<<FILL: functional spec, supplier test summary, audit report>>` |
| Process and data flow | `<<FILL: process map, data flow diagram>>` |
| Data criticality assessment | `<<FILL: reference if separate>>` |
| Prior incidents / known issues | `<<FILL: deviation history, known-issue list, release notes>>` |

### 5.3 Severity scale

Severity is judged on the worst credible effect of the failure on quality, safety, or data integrity, assuming the failure is not caught. Severity does not change because a control exists; that belongs to occurrence and detection.

| Score | Severity | Meaning |
|---|---|---|
| 5 | Critical | Wrong product decision, patient harm, falsified or lost GxP record, or a record relied on for release that cannot be trusted. |
| 4 | High | Significant data integrity or quality impact, likely to cause a wrong decision if undetected, hard to reverse. |
| 3 | Medium | Quality-relevant data affected but recoverable, decision impact unlikely if normal checks hold. |
| 2 | Low | Minor data or usability impact, no decision or product effect. |
| 1 | Negligible | No GxP impact; cosmetic or informational only. |

### 5.4 Occurrence scale

Occurrence reflects how likely the failure is in this configuration and use, given software maturity, customization, and complexity.

| Score | Occurrence | Meaning |
|---|---|---|
| 5 | Frequent | Likely in normal use; new custom code, heavy configuration, or a function with a poor history. |
| 4 | Probable | Plausible; configured function with some complexity or limited supplier evidence. |
| 3 | Occasional | Possible; standard configurable function used in a normal way. |
| 2 | Remote | Unlikely; mature standard function with strong supplier track record. |
| 1 | Improbable | Very unlikely; well-established core function, widely used, no history of failure. |

### 5.5 Detection scale

Detection reflects how likely the failure is to be caught before harm, by a system control, a downstream reconciliation, or a documented human review. A higher score means harder to detect, which raises risk.

| Score | Detection | Meaning |
|---|---|---|
| 5 | None | No control; failure would reach the record or the patient undetected. |
| 4 | Low | Only an informal or occasional check; easy to miss. |
| 3 | Moderate | A defined human review or downstream check that usually catches it. |
| 2 | High | A configured system control plus a review; rarely escapes. |
| 1 | Very high | An automatic, validated system control that blocks the failure (for example enforced field validation, hard lock, mandatory e-signature). |

### 5.6 Risk class and RPN bands

RPN = S x O x D, range 1 to 125. Use the class to set test depth; record RPN to rank within a class and to break ties. A high severity (5) is treated as at least Medium risk regardless of RPN, because a rare, detectable, critical failure still warrants verification of the control that detects it.

| Risk class | Class matrix (primary) | RPN band (secondary) | Meaning |
|---|---|---|---|
| High | Severity 4 to 5 with Occurrence-Detection in the upper band | RPN 45 to 125 | Test thoroughly with positive, negative, and boundary cases. |
| Medium | Severity 3 to 5 with moderate likelihood or detection | RPN 18 to 44 | Test the normal path plus key negative cases. |
| Low | Severity 1 to 2, or strong automatic detection | RPN 1 to 17 | Light verification or acceptance on supplier evidence with rationale. |

State whether the class matrix or the RPN band governs (section 5.1) and apply it consistently. Do not move a function to a lower class by adjusting a score after the test depth is known; that is reverse-engineering the answer.

## 6. Risk-based test depth

The risk class drives how much verification a function gets. This is the link between this assessment and the test plan.

| Risk class | Verification depth | Typical evidence |
|---|---|---|
| High | Full functional testing: positive, negative, boundary, and security or data-integrity challenge cases, executed and witnessed; requirement traced to test. | Scripted IQ/OQ/PQ or risk-based test cases with objective evidence. |
| Medium | Normal-path plus key negative cases; less exhaustive boundary work. | Scripted or unscripted test with recorded result. |
| Low | Confirm the function exists and behaves at a high level; or accept on supplier evidence. | Lean test, demonstration, or documented review of supplier test summary. |

Every High and Medium function must trace forward to at least one test case in `<<FILL: traceability matrix ID>>`. A High function with no test, or a Low classification with no rationale, is the first thing an assessor will challenge.

## 7. Risk assessment table

List every GxP function. For each, record the failure mode, the effect, the three scores, the RPN, the risk class, the mitigation that is in place or added, and the test reference. Add rows as needed.

| Ref | Function (requirement ID) | Failure mode | Effect on quality / safety / data integrity | S | O | D | RPN | Risk class | Mitigation (existing or added) | Test case ref |
|---|---|---|---|---|---|---|---|---|---|---|
| `<<FILL: F-01>>` | `<<FILL: function, URS-ID>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL: H/M/L>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: F-02>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| `<<FILL: F-03>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

## 8. Mitigations

For every High function, and any Medium function where the team chose to reduce risk rather than only test, record the mitigation and how it changes the score. A mitigation that lowers occurrence (better design, less custom code) or improves detection (a system lock, an enforced review) is credited only when the control itself is verified.

| Ref | Mitigation | Risk dimension reduced | Score before | Score after | Verification of the control |
|---|---|---|---|---|---|
| `<<FILL: F-01>>` | `<<FILL: e.g. enforce field range so out-of-range entry is blocked>>` | Detection (5 to 1) | `<<FILL: RPN before>>` | `<<FILL: RPN after>>` | `<<FILL: test case that proves the lock works>>` |
| `<<FILL: F-04>>` | `<<FILL: procedural control, e.g. second-person review of calculation>>` | Detection (4 to 3) | `<<FILL>>` | `<<FILL>>` | `<<FILL: SOP-ID + training record>>` |

A procedural mitigation (an SOP, a second review) is weaker than a verified system control and is challenged harder. State which mitigations are technical and which are procedural, and do not credit a procedural control as if it were an automatic system block.

## 9. Residual risk

After mitigation and after the planned testing, record the residual risk for every function that started High, and any Medium function that retains material risk. Residual risk is what remains, not what the score would be in a perfect world.

| Ref | Function | Residual risk class | Residual risk statement | Accepted by |
|---|---|---|---|---|
| `<<FILL: F-01>>` | `<<FILL>>` | `<<FILL: H/M/L>>` | `<<FILL: what risk remains and why it is acceptable>>` | `<<FILL: QA role>>` |

Any function whose residual risk remains High after mitigation and testing requires an explicit, signed acceptance with rationale, or it must be reduced before release. Quality, not the project, owns the acceptance.

## 10. Acceptance criteria

This risk assessment is acceptable when all of the following are true:

- Every GxP function is listed; non-GxP functions are listed and excluded with rationale.
- Severity, occurrence, and detection are scored against the defined scales, with a recorded reason for each non-obvious score.
- One governing decision rule (class matrix or RPN) is stated and applied consistently.
- Every High and Medium function traces forward to at least one test case.
- Mitigations are recorded with the score change and the verification of the control.
- Residual risk is stated for High functions and accepted by Quality before release.

## 11. References

> ICH Q9, Quality Risk Management (the governing standard for risk-based decisions).
> EU GMP Annex 11 (Computerised Systems), risk management principle and lifecycle.
> EU GMP Annex 15 (Qualification and Validation), 2015 revision.
> 21 CFR Part 11 (electronic records and signatures).
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment).
> FDA Computer Software Assurance for Production and Quality System Software (final guidance, 24 September 2025).
> 21 CFR Part 820 (Quality Management System Regulation, QMSR), effective 2 February 2026, which incorporates ISO 13485:2016 by reference.
> ISO 14971, Application of risk management to medical devices (for device and combination-product contexts).
> PIC/S PI 041, Good Practices for Data Management and Integrity.
> GAMP 5 (Second Edition), ISPE, risk-based approach to compliant GxP computerized systems.

Confirm the current version and clause numbers of each reference before issue.

## 12. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 13. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (CSV / Validation) | `<<FILL>>` | | |
| Process owner / SME | `<<FILL>>` | | |
| System owner / IT | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the assessment table, mitigation, and residual risk completed for an example laboratory information management system supporting release testing, so you can see the level of detail an assessor expects. The company, system, and numbers are illustrative; replace them with your own. RPN bands here use the secondary RPN method (High 45 to 125, Medium 18 to 44, Low 1 to 17), with severity 5 floored to at least Medium.

**Risk assessment table (specimen):**

| Ref | Function (requirement ID) | Failure mode | Effect | S | O | D | RPN | Risk class | Mitigation | Test ref |
|---|---|---|---|---|---|---|---|---|---|---|
| F-01 | Calculate potency result from raw data (URS-018) | Calculation uses a wrong formula or rounding, returns a wrong potency | Wrong release decision; out-of-spec lot could pass | 5 | 3 | 3 | 45 | High | Configured formula locked and version-controlled; result independently recalculated in OQ across boundary inputs | OQ-12, OQ-13 |
| F-02 | Enforce e-signature on result approval (URS-022) | Approval recorded without authentication, or signature meaning not captured | Record not attributable; Part 11 / Annex 11 failure | 5 | 2 | 1 | 10 | Medium (S5 floor) | Enforced re-authentication at signing, signature manifest captures name, date, meaning; verified | OQ-20 |
| F-03 | Lock record after disposition (URS-027) | Released record remains editable | Released data altered after the fact; data integrity failure | 4 | 2 | 2 | 16 | Low | Hard lock on disposition status; attempted edit blocked and audit-trailed | OQ-22 |
| F-04 | Auto-flag out-of-spec result (URS-031) | OOS not flagged, passes review unnoticed | OOS lot released; patient and quality impact | 5 | 3 | 3 | 45 | High | Configured spec limits with hard flag; plus mandatory second-person review of all results | OQ-15, SOP-QC-009 |
| F-05 | Display historical trend chart (URS-040) | Chart renders wrong scale | Cosmetic; underlying data unaffected, decision uses the table not the chart | 2 | 2 | 3 | 12 | Low | Accepted on supplier test evidence; light demonstration only | DEMO-03 |

**Mitigation (specimen):**

| Ref | Mitigation | Dimension reduced | RPN before | RPN after | Verification |
|---|---|---|---|---|---|
| F-04 | Hard OOS flag at configured spec limits, with mandatory second-person review | Detection (5 to 3) | 75 | 45 | OQ-15 proves the flag fires at the limit; SOP-QC-009 plus training record covers the human review |
| F-01 | Lock and version-control the configured formula so it cannot be edited in production | Occurrence (4 to 3) | 60 | 45 | Change control evidence plus OQ-12 recalculation |

**Residual risk (specimen):**

| Ref | Function | Residual class | Residual risk statement | Accepted by |
|---|---|---|---|---|
| F-01 | Potency calculation | Medium | Formula locked and recalculated across boundary inputs in OQ; residual risk is a future undocumented config change, controlled by change control. Acceptable. | QA Manager |
| F-04 | OOS auto-flag | Medium | System flag verified at the limit and backed by a mandatory second review; residual risk is reviewer error, reduced by the technical flag. Acceptable. | QA Manager |

In this example the team scored the potency calculation and the OOS flag as High, tested them with boundary and negative cases, added a technical control plus a procedural review, recorded the score change with the verification that proved each control, and had Quality accept the residual Medium risk in writing. The cosmetic trend chart was correctly classed Low and accepted on supplier evidence rather than over-tested. That sequence, function to score to mitigation to verified control to accepted residual risk, is exactly what an assessor is expected to see.

## Common inspection findings this assessment prevents

- A validation that tested everything to the same depth, with no documented risk basis for the scope.
- Risk scores assigned with no recorded rationale, so the team cannot explain why a function is Low.
- Severity lowered because a control exists, double-counting the control in both severity and detection.
- A High-risk function with no negative or boundary test, only a happy-path screenshot.
- A function dropped from the assessment as "out of scope" with no rationale and no GxP impact judgment.
- A procedural SOP credited as if it were an automatic system control, with no verification that either works.
- Scores quietly adjusted after the fact so a function lands in a lower class and gets less testing.
- Residual risk never stated, or High residual risk accepted by the project team instead of Quality.

## How to adapt this assessment

1. Set your document number, owner, system, and effective date in the header, and link your URS and configuration baseline.
2. Choose one governing decision rule in section 5.1 (class matrix or RPN) and delete the wording you do not use, so reviewers cannot argue both ways.
3. Keep the S, O, and D scales as they are or recalibrate them to match your SOP, but use the same scales across all your assessments so scores are comparable.
4. Build the function list in section 7 directly from your requirements, one row per GxP function, and trace every High and Medium function to a test case.
5. Record mitigations with the score change and the verification that proves the control, and mark each as technical or procedural.
6. Have Quality, not the project, sign the residual risk in section 9 before release.
7. Confirm every regulation in section 11 against the current published version before issue.
