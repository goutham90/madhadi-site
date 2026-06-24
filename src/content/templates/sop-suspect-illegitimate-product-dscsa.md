---
title: "SOP: Suspect and Illegitimate Product Investigation and FDA 3911 Notification"
description: "A plug-and-play DSCSA SOP for handling suspect and illegitimate product: triggers, quarantine, verification, the determination path, the 24-hour Form FDA 3911 clock, trading-partner notification, and termination, with a filled specimen."
pubDate: 2026-06-24
docType: "SOP"
pillar: "supply-chain-gdp"
relatedArticles: ["dscsa-serialization-track-and-trace"]
tags: ["dscsa", "suspect-product", "illegitimate-product", "form-fda-3911", "sop", "traceability", "verification"]
tier: "Intermediate"
---

This is a ready-to-use SOP for DSCSA suspect and illegitimate product handling. Replace every `<<FILL: ...>>` placeholder with your specifics, set your document numbers and dates, and route it through your normal document control. A worked filled specimen follows the template. Verify each cited requirement against the current statute and FDA guidance before you rely on it. This content is educational and general, not legal or regulatory advice; confirm the current enforcement posture for your trading-partner type.

## Document control header

| Field | Entry |
|---|---|
| Document title | Suspect and Illegitimate Product Investigation and Form FDA 3911 Notification |
| Document number | `<<FILL: SOP-ID, e.g. SOP-SC-009>>` |
| Version | `<<FILL: version>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. Director, Trade Compliance>>` |
| Applies to | `<<FILL: trading-partner type and sites>>` |

## 1. Purpose

Define how `<<FILL: COMPANY NAME>>`, acting as a `<<FILL: manufacturer / repackager / wholesale distributor / dispenser / 3PL>>`, detects, investigates, and dispositions suspect product, escalates illegitimate product, and meets the DSCSA notification obligations, including the Form FDA 3911 24-hour clock.

## 2. Scope

Applies to prescription drugs in finished dosage form in scope of DSCSA (section 582 of the FD&C Act, 21 U.S.C. 360eee-1) handled by the sites in the header. Excluded products (for example blood components for transfusion, certain medical gases, compounded preparations, over-the-counter drugs) are out of scope; document any product-scope determination.

## 3. Definitions

- **Suspect product**: product for which there is reason to believe it is potentially counterfeit, diverted, stolen, intentionally adulterated, the subject of a fraudulent transaction, or otherwise unfit for distribution and a risk to patients.
- **Illegitimate product**: product for which credible evidence shows it is counterfeit, diverted, stolen, intentionally adulterated, the subject of a fraudulent transaction, or unfit and a risk.
- **Product identifier (PI)**: the NDC, serial number, lot, and expiration, human-readable and in a 2D DataMatrix.
- **VRS**: Verification Router Service, used to verify a PI with the manufacturer's responder.
- **Form FDA 3911**: the FDA form used to notify FDA of illegitimate product and to terminate that notification.

## 4. Responsibilities

| Role | Responsibility |
|---|---|
| Receiving / warehouse staff | Detect triggers, quarantine immediately, record date, time, quantity |
| Trade compliance / supply chain | Run the investigation, verify the PI, contact trading partners, manage notifications |
| Quality Assurance | Owns the investigation record, dispositions product, links to deviation/CAPA |
| Regulatory Affairs | Files and terminates Form FDA 3911, interprets scope and guidance |
| Security (where relevant) | Supports theft, diversion, and tamper investigations |

## 5. Triggers (non-exhaustive)

- A failed or mismatched PI verification (VRS returns invalid, or no response).
- A failed scan, missing or unreadable 2D code, or human-readable that does not match the encoded data.
- Physical signs of tampering, damage, or relabeling.
- A regulatory notice, recall, or trading-partner alert naming the product or lot.
- A transaction that does not reconcile (quantity, source, or transaction data inconsistent).
- A tip or report of theft, diversion, or counterfeiting.

## 6. Procedure

### 6.1 Quarantine and document (immediately)

1. Physically segregate the product and stop further distribution.
2. Record the date, time, product, NDC, lot, quantity, location, and the trigger.
3. Do not destroy, return, or relabel the product during the investigation.

### 6.2 Investigate to determine suspect status

1. Verify the PI through VRS (GTIN, serial, lot, expiry) and capture the result.
2. Review the transaction information and statement for the unit and trace the source.
3. Inspect the physical product for tamper, damage, and labeling consistency.
4. Contact the immediate upstream trading partner and, where relevant, the manufacturer.

### 6.3 Conclude on suspect status

1. If the investigation clears the product (valid PI, data reconciles, authorized source, no tamper), document the rationale and release. Retain the record. No Form FDA 3911.
2. If reason to believe persists but credible evidence of illegitimacy is not established, keep the product quarantined and continue the investigation; coordinate with the manufacturer.

### 6.4 Determine illegitimacy and notify (the 24-hour clock)

1. If credible evidence shows the product is illegitimate, record the determination with date and time. This timestamp starts the clock.
2. Notify FDA using **Form FDA 3911 within 24 hours** of the determination.
3. Notify immediate trading partners you reasonably believe may have received the product, within the same timeframe, so they can take action.
4. Coordinate disposition (commonly secure destruction) with the manufacturer and document it.

### 6.5 Manufacturer-initiated and request scenarios

1. A manufacturer that receives a verification request for a PI it issued responds, generally within 24 hours for suspect-product verification requests.
2. A manufacturer that determines its own product is illegitimate, or receives a notification, conducts its own investigation and notifies FDA and partners as required.

### 6.6 Terminate the notification

1. When FDA and the relevant partners agree the matter is resolved, terminate the notification using Form FDA 3911.
2. Close the investigation record and route any systemic root cause into CAPA per `<<FILL: CAPA SOP ID>>`.

## 7. Acceptance criteria

A defensible suspect/illegitimate event shows all of the following:

- Quarantine was immediate and recorded with date, time, and quantity.
- The PI was verified and the result captured.
- The conclusion (cleared vs illegitimate) is supported by documented evidence, not assertion.
- For illegitimate product, the Form FDA 3911 timestamp shows filing within 24 hours of the determination.
- Trading-partner notifications are evidenced.
- Disposition and, where used, termination are documented.
- Records are retained and retrievable for the required period (generally six years for transaction records under DSCSA).

## 8. References

> DSCSA, section 582 of the Federal Food, Drug, and Cosmetic Act (21 U.S.C. 360eee-1); suspect/illegitimate provisions and Form FDA 3911.
> FDA Guidance, Drug Supply Chain Security Act Implementation: Identification of Suspect Product and Notification.
> FDA DSCSA exemptions and enforcement guidance (confirm the current posture for your trading-partner type).

Confirm the current statute text, guidance, and Form FDA 3911 instructions before issue.

## 9. Record generated: suspect/illegitimate investigation record

| Field | Entry |
|---|---|
| Investigation ID | `<<FILL>>` |
| Product / NDC / lot | `<<FILL>>` |
| Quantity / location | `<<FILL>>` |
| Trigger and detection date/time | `<<FILL>>` |
| Quarantine date/time | `<<FILL>>` |
| PI verification (VRS) result | `<<FILL>>` |
| Transaction data reviewed | `<<FILL>>` |
| Physical inspection outcome | `<<FILL>>` |
| Determination (cleared / suspect / illegitimate) | `<<FILL>>` |
| Determination date/time | `<<FILL>>` |
| Form FDA 3911 filed (date/time) | `<<FILL or N/A>>` |
| Trading partners notified | `<<FILL or N/A>>` |
| Disposition | `<<FILL>>` |
| Termination 3911 (date) | `<<FILL or N/A>>` |
| Investigator / QA sign-off | `<<FILL>>` |

## 10. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 11. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (QA) | `<<FILL>>` | | |
| Approver (Regulatory / Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the investigation record completed for an example wholesale-distributor case where a returned unit failed verification. The values are illustrative.

| Field | Entry |
|---|---|
| Investigation ID | SIP-2026-014 |
| Product / NDC / lot | Example Drug Tablets 50 mg / 0312-3456-78 / LOT4521 |
| Quantity / location | 3 cartons, returns cage, Dock B |
| Trigger and detection date/time | VRS returned invalid PI on a saleable return, 16 June 2026 10:20 |
| Quarantine date/time | 16 June 2026 10:25 |
| PI verification (VRS) result | Invalid: serial not recognized by manufacturer responder |
| Transaction data reviewed | TI traced to an entity not on the approved-trading-partner list |
| Physical inspection outcome | Carton lot/expiry print did not match the DataMatrix encoding |
| Determination (cleared / suspect / illegitimate) | Illegitimate (credible evidence: invalid PI plus mismatched data plus unauthorized source) |
| Determination date/time | 16 June 2026 14:05 |
| Form FDA 3911 filed (date/time) | 16 June 2026 16:40 (within 24 hours) |
| Trading partners notified | Immediate upstream partner and two downstream customers who received the lot, 16 June 2026 |
| Disposition | Secure quarantine pending manufacturer-coordinated destruction |
| Termination 3911 (date) | Pending resolution |
| Investigator / QA sign-off | A. Rivera / R. Gomez, 16 June 2026 |

The teachable detail: quarantine happened five minutes after the failed verification, the determination was timestamped, and the 3911 was filed the same day, well inside 24 hours. That clean clock is exactly what an inspector checks.

## Common inspection findings this SOP prevents

- No documented suspect-product investigation procedure at all.
- Late or missing Form FDA 3911 notification for illegitimate product.
- Quarantine not immediate or not recorded with date, time, and quantity.
- A determination of "fine" with no verification result or evidence behind it.
- Trading-partner notifications not evidenced.
- Records not retained or not retrievable within the required period.

## How to adapt this SOP

1. Set your document number, owner, and trading-partner type in the header and section 1.
2. Point sections 6.4 and 6.6 at the current Form FDA 3911 instructions and your notification distribution list.
3. Tie section 6.2 to your VRS provider and your approved-trading-partner register.
4. Route systemic causes into your real CAPA procedure in section 6.6.
5. Confirm the statute, guidance, and the current exemption/enforcement posture before issue.
