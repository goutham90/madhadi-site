---
title: "Plan: Combination Product cGMP Quality Plan (21 CFR Part 4)"
description: "A plug-and-play combination product quality plan: the PMOA and base operating system, the streamlined approach under 21 CFR 4.4, each added provision mapped to a procedure with applicability rationale, postmarket reporting, and the EU Article 117 angle, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-22
docType: "Plan"
pillar: "quality-assurance"
relatedArticles: ["combination-products-cgmp-part-4"]
tags: ["combination products", "21 CFR Part 4", "quality plan", "cGMP", "QMSR", "PMOA", "streamlined approach"]
tier: "Intermediate"
---

This is a ready-to-use combination product quality plan. It is the controlling document an inspector asks for first: it names your base operating system and maps every added provision from 21 CFR 4.4 to a specific procedure. Replace every `<<FILL: ...>>` placeholder, set your document numbers and dates, and route it through document control. A worked filled specimen follows the template. Verify each cited regulation against the current source before you rely on it.

## Control header

| Field | Entry |
|---|---|
| Document title | Combination Product Quality Plan for `<<FILL: PRODUCT NAME>>` |
| Document number | `<<FILL: QP-ID>>` |
| Version / effective date | `<<FILL>>` |
| Owner | `<<FILL: role, e.g. Site Quality Head>>` |

## 1. Scope

This plan covers the manufacturing quality system for `<<FILL: PRODUCT NAME>>`, a combination product composed of `<<FILL: constituents, e.g. a biologic and a delivery device>>` in `<<FILL: single-entity / co-packaged / cross-labeled>>` configuration. It states the base operating system, the provisions added under 21 CFR Part 4, and how each is satisfied.

## 2. Product and constituent description

| Item | Entry |
|---|---|
| Configuration (21 CFR 3.2(e)) | `<<FILL: single-entity / co-packaged / cross-labeled>>` |
| Drug / biologic constituent | `<<FILL>>` |
| Device constituent | `<<FILL>>` |
| Intended use / route | `<<FILL>>` |

## 3. Primary mode of action and base system

| Item | Entry |
|---|---|
| PMOA (21 CFR 3.2(m)) | `<<FILL: drug / biologic / device, with rationale>>` |
| Lead FDA center | `<<FILL: CDER / CBER / CDRH>>` |
| RFD / Pre-RFD reference (if any) | `<<FILL: number or N/A>>` |
| Base operating system | `<<FILL: 21 CFR 210/211 (+600-680) OR 21 CFR 820 / QMSR>>` |
| Basis for base choice | `<<FILL: existing operation that runs this system fully>>` |

Reference the PMOA determination record `<<FILL: record number>>`.

## 4. The streamlined approach (21 CFR 4.4)

We comply with the base operating system in full and add the named provisions from the other constituent type. We do not implement the other regulation in its entirety. Reference the provision-mapping matrix `<<FILL: matrix number>>`.

### 4.1 If drug/biologic base: device provisions added (21 CFR 4.4(b)(1))

| Provision | Section | Procedure that satisfies it | Applicable? | Owner |
|---|---|---|---|---|
| Management responsibility | 820.20 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Design controls | 820.30 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Purchasing controls | 820.50 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| CAPA | 820.100 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Installation | 820.170 | `<<FILL>>` | `<<FILL: often N/A, give rationale>>` | `<<FILL>>` |
| Servicing | 820.200 | `<<FILL>>` | `<<FILL: often N/A, give rationale>>` | `<<FILL>>` |

### 4.2 If device base: drug provisions added (21 CFR 4.4(b)(2))

| Provision | Section | Procedure that satisfies it | Applicable? | Owner |
|---|---|---|---|---|
| Component / container / closure testing | 211.84 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Calculation of yield | 211.103 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Tamper-evident packaging (OTC) | 211.132 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Expiration dating | 211.137 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Testing and release | 211.165 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Stability testing | 211.166 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Special testing (sterility, pyrogen) | 211.167 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |
| Reserve samples | 211.170 | `<<FILL>>` | `<<FILL>>` | `<<FILL>>` |

Any provision marked not applicable carries a written rationale. An undocumented gap reads as an oversight; a documented N/A reads as a decision.

## 5. QMSR note

As of 2 February 2026 the device base (21 CFR Part 820, the QMSR) incorporates ISO 13485:2016 by reference. The substance of the Part 4 provisions maps onto ISO 13485 clauses, but citations and document structure shift. Express the device side in current QMSR / ISO 13485 clause language with the FDA additions, while keeping legacy design history files readable. The intent is unchanged: a drug-led product still needs genuine design controls; a device-led product still needs genuine drug release and stability testing.

## 6. Batch release and constituent reconciliation

State the release rule. For a co-packaged kit, no release until both constituent histories are complete, both specification sets are met, the labeled expiry is supported by the shorter-lived constituent, and lot traceability links the drug lot to the device lot. Reference `<<FILL: release SOP>>`.

## 7. Postmarket reporting (21 CFR Part 4 Subpart B)

State how adverse events and malfunctions are classified and routed. A drug-led product still reports device malfunctions; a device-led product still handles drug adverse experience reporting. Reference `<<FILL: complaint / PV SOPs>>`.

## 8. EU note (if marketed in the EU)

For an integral drug-device combination handled as a medicinal product, EU MDR Article 117 adds a step to the marketing authorisation: when the device part has no existing CE certificate, the dossier must include a written opinion from a notified body confirming that the device part meets the applicable safety and performance requirements set out in the MDR. Plan for that notified body assessment and reference the device conformity file `<<FILL>>`.

## 9. Roles and responsibilities

| Role | Responsibility |
|---|---|
| Regulatory affairs | PMOA determination, RFD strategy, center assignment, application, EU NBOp strategy. |
| Quality unit | Owns this plan, the provision mapping, release reconciliation, inspection readiness. |
| Drug / process development | Drug constituent: formulation, process validation, stability, release. |
| Device / R&D engineering | Device constituent: design controls, DHF, verification and validation, human factors. |
| Supplier quality | Qualifies drug-component and device-component suppliers to the right expectations. |
| Pharmacovigilance / complaints | Event intake, classification across drug and device types, Subpart B reporting. |

## 10. Acceptance criteria

- A documented PMOA determination with rationale and any RFD correspondence.
- One controlling plan naming the base and mapping every added provision to a procedure, with rationale for any N/A.
- A complete DHF (drug-led) or drug release and stability dossier (device-led).
- CAPA and complaint handling that capture both drug and device failure modes and route them correctly.
- Batch release that reconciles all constituents.
- Postmarket reporting set up for both event types.

## 11. References

> 21 CFR 3.2(e), 3.2(m) (definitions); 21 CFR Part 4 (cGMP for combination products), 4.4 (streamlined approach), Subpart B (postmarket reporting).
> 21 CFR Parts 210/211 (drug cGMP); 21 CFR Part 820 / QMSR; ISO 13485:2016.
> EU MDR (Regulation (EU) 2017/745) Article 117 (for EU marketing).

Confirm the current version and clause numbers of each reference before issue.

## 12. Revision history and approvals

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL>>` | `<<FILL>>` | Initial issue. |

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (Regulatory) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the key sections completed for an example drug-led autoinjector. Illustrative.

| Item | Entry |
|---|---|
| Product | Autoinjector containing a biologic, single-entity, self-administered |
| PMOA | Biologic provides the primary therapeutic action; biologic-led |
| Lead center | CBER |
| Base system | 21 CFR 210/211 and biologics regulations |
| Added provisions | The six device provisions of 4.4(b)(1) |

**Mapping (extract):**

| Provision | Procedure | Applicable | Owner |
|---|---|---|---|
| 820.30 Design controls | SOP-DC-001 plus the device DHF; summative human factors study per IEC 62366-1 | Yes | Device engineering |
| 820.100 CAPA | Existing CAPA SOP, scope expanded to mechanical failure, delivery malfunction, dose-accuracy excursion, use error | Yes | Quality systems |
| 820.50 Purchasing | Supplier qualification SOP with device supplier criteria for the injector body, spring, needle | Yes | Supplier quality |
| 820.170 Installation | Not applicable: patient-administered, not installed. Rationale recorded. | N/A | Quality |
| 820.200 Servicing | Not applicable: single-use disposable. Rationale recorded. | N/A | Quality |

**EU:** the same product marketed in the EU as a medicinal product carries an Article 117 NBOp on the injector's conformity with the relevant MDR GSPRs.

This is the document that proves the streamlined approach was a deliberate decision rather than an accident, which is exactly what the most common combination-product finding is about.

## Common inspection findings this plan prevents

- No streamlined-approach documentation at all, so design controls (drug-led) or stability and release testing (device-led) simply do not exist.
- A provision left unaddressed with no applicability rationale.
- Device suppliers qualified only as generic component vendors.
- Adverse event misrouting because the plan never defined the classification and routing.

## How to adapt this plan

1. Set your document number and owner, and confirm the PMOA and base.
2. Complete only the provision table for your base (4.1 or 4.2); delete the other.
3. Map each provision to a real procedure and give a rationale for any N/A.
4. Set the release reconciliation rule and the postmarket routing.
5. Add the EU Article 117 reference if you market in the EU, and confirm every citation before issue.
