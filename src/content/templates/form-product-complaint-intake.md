---
title: "Product Quality Complaint Intake and Triage Form"
description: "A ready-to-use complaint intake and triage form that captures the complaint, screens for an adverse event, routes pharmacovigilance, runs criticality triage and the reportability decision, tracks the sample and investigation, and closes with a response to the complainant, with a filled specimen."
pubDate: 2026-06-22
docType: "Form"
pillar: "quality-assurance"
relatedArticles: ["product-complaint-handling", "regulatory-reporting-obligations-and-clocks"]
tags: ["complaint handling", "quality-assurance", "form", "pharmacovigilance", "field alert report", "recall", "triage"]
tier: "Intermediate"
---

This is a ready-to-use product quality complaint intake and triage form. It is the working record a complaint lives on from the moment it arrives until it is closed with a response back to the person who raised it. Replace every `<<FILL: ...>>` placeholder, set your own document number, version, and effective date, and route the form through your own document control, review, and approval before use. A worked filled specimen follows so you can see how a completed record reads. Verify each cited regulation against the current published source before you rely on it. Using this template does not by itself create compliance; it only structures the work your quality system and procedures still have to do.

A complaint has two clocks that start the instant it is received, and they run independently. One clock is the safety clock: if the complaint describes any harm to a person, the case has to reach pharmacovigilance fast, on the safety system's own timelines, regardless of what the quality investigation later finds. The other clock is the reportability clock: a quality defect can oblige you to file a Field Alert Report, a Biological Product Deviation Report, or to make a recall decision, each with its own deadline. The single most common way these obligations are missed is a slow or incomplete intake. This form forces the screening questions to the front so neither clock is started late.

## Document control header

| Field | Entry |
|---|---|
| Document title | Product Quality Complaint Intake and Triage Form |
| Document number | `<<FILL: FORM-ID, e.g. FORM-QA-031-01>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Document owner | `<<FILL: role, e.g. Head of Quality / Complaints Manager>>` |
| Governing SOP | `<<FILL: SOP-ID for complaint handling>>` |
| Approvers | `<<FILL: QA approver(s), name and role>>` |
| Retention | Not less than `<<FILL: retention period, per procedure and product lifecycle>>` |

## Section A: Complaint identification

| Field | Entry |
|---|---|
| Complaint ID | `<<FILL: unique CMP-ID, assigned at intake>>` |
| Date received | `<<FILL: date the complaint reached the company>>` |
| Time received | `<<FILL: local time, if same-day reportability is in play>>` |
| Date logged | `<<FILL: date entered into the system, if later than received>>` |
| Intake handler (name, role) | `<<FILL>>` |
| Channel | Phone / email / sales rep / medical information / portal / regulator / distributor / other: `<<FILL>>` |
| Original language and translation status | `<<FILL: if not in working language>>` |

## Section B: Reporter and complainant

| Field | Entry |
|---|---|
| Reporter name | `<<FILL: or "withheld / anonymous">>` |
| Reporter type | Patient / caregiver / healthcare professional / pharmacy / distributor / wholesaler / hospital / regulator / internal / other: `<<FILL>>` |
| Contact details | `<<FILL: phone / email / address, or "declined">>` |
| Consent to be contacted for follow-up | Yes / No / Not obtained |
| Country of origin of the complaint | `<<FILL>>` |
| Preferred response method | `<<FILL: written / phone / none requested>>` |

## Section C: Product identification

| Field | Entry |
|---|---|
| Product name | `<<FILL>>` |
| Strength / presentation | `<<FILL>>` |
| Dosage form | `<<FILL>>` |
| Batch / lot number | `<<FILL: or "unknown, see follow-up">>` |
| Expiry date | `<<FILL>>` |
| Quantity affected | `<<FILL: units / packs>>` |
| Purchase / dispensing date and source | `<<FILL>>` |
| Storage and handling reported by complainant | `<<FILL: e.g. refrigerated, left in car, etc.>>` |
| Combination product? | Yes (drug + device constituent) / No / Unknown |
| If combination product, constituent involved | `<<FILL: drug / delivery device / both>>` |

## Section D: Complaint description and category

Record the complaint in the complainant's own terms first, then the category. Do not record a conclusion about cause here.

> Complainant's account: `<<FILL: factual description in their words>>`

| Field | Entry |
|---|---|
| Primary category | Appearance / particulate or foreign matter / packaging or labeling / suspected lack of effect / suspected contamination / leakage or damage / dosing or delivery device function / suspected counterfeit or tampering / odor or taste / suspected stability or degradation / other: `<<FILL>>` |
| Secondary category | `<<FILL or N/A>>` |
| Number of units complained of | `<<FILL>>` |
| First occurrence for this reporter? | Yes / No / Unknown |
| Photographs or evidence received | Yes / No |

## Section E: Adverse event and pharmacovigilance screen

This screen runs at intake, before triage. If any answer points to harm or possible harm to a person, the case is a potential adverse event and must reach pharmacovigilance on the safety system's own timeline, independent of this quality investigation. A single intake can be both a quality complaint and an adverse event; treat it as both.

| Screen question | Answer |
|---|---|
| Does the complaint describe any harm, injury, illness, or unexpected reaction to a person? | Yes / No / Unclear |
| Was there a hospitalization, life-threatening event, disability, congenital anomaly, or death? | Yes / No / Unknown |
| Was medical attention sought? | Yes / No / Unknown |
| Could the reported quality defect plausibly cause harm even if none was reported yet? | Yes / No |
| Special situations present (pregnancy / lactation / overdose / off-label / medication error / misuse)? | Yes / No, specify: `<<FILL>>` |

| Routing | Entry |
|---|---|
| Adverse event suspected? | Yes / No |
| If yes, referred to pharmacovigilance | Date `<<FILL>>`, time `<<FILL>>`, to (name/function) `<<FILL>>` |
| PV case reference number | `<<FILL>>` |
| PV acknowledgment received | Yes / No, date `<<FILL>>` |

The handler does not assess seriousness or expectedness here. That is pharmacovigilance's job once the case is handed over. The handler's only duty is to recognize the possibility and route it without delay.

## Section F: Criticality triage

Triage assigns the complaint a criticality that sets the investigation depth and timeline. Use the matrix below; when the safety dimension and the quality dimension disagree, take the higher of the two.

| Criticality | Definition (use the higher applicable row) | Default investigation target |
|---|---|---|
| Critical | Potential to cause death or serious harm; suspected contamination, mix-up, wrong product, counterfeit, or a defect that could trigger a recall or regulatory report | `<<FILL: e.g. 24-72 h to start; tight close target>>` |
| Major | Could cause harm or fail to deliver intended effect; significant quality defect not immediately life-threatening | `<<FILL: e.g. start within days>>` |
| Minor | Cosmetic or minor defect with no realistic safety impact | `<<FILL: standard timeline>>` |

| Triage outcome | Entry |
|---|---|
| Assigned criticality | Critical / Major / Minor |
| Basis for the rating | `<<FILL: the specific facts driving it>>` |
| Triage performed by (name, role, date) | `<<FILL>>` |
| QA concurrence (name, date) | `<<FILL>>` |

## Section G: Reportability screen

A quality complaint can trigger a regulatory clock on its own. Run each screen below. Reportability decisions are made by the responsible function (regulatory affairs and QA), not by the intake handler, but the handler flags candidates so the decision is made in time.

<div class="flow flow-v">
  <div class="flow-box">Complaint received and logged</div>
  <div class="flow-arrow">&darr;</div>
  <div class="flow-box">Adverse event screen (Section E) and criticality triage (Section F)</div>
  <div class="flow-arrow">&darr;</div>
  <div class="flow-box">Reportability screen: FAR? BPDR? Recall trigger?</div>
  <div class="flow-arrow">&darr;</div>
  <div class="flow-box">Responsible function decides and starts the applicable clock</div>
</div>

| Reportability question | Answer and route |
|---|---|
| Does the complaint suggest a distributed drug may not meet specification, may be subpotent or superpotent, contaminated, mislabeled, or stability-failing such that a Field Alert Report could be required? | Yes / No / Refer to RA-QA. FAR is 21 CFR 314.81, submitted within 3 working days of receiving the information. |
| Is this a licensed biological product where an unexpected deviation or unexpected event affecting safety, purity, or potency of a distributed product may have occurred, possibly requiring a Biological Product Deviation Report? | Yes / No / Refer to RA-QA. BPDR is 21 CFR 600.14, submitted within 45 calendar days of acquiring the information. |
| Could the defect, if confirmed, warrant a recall or market action? | Yes / No / Refer to recall committee |
| Reportability decision owner (name, role) | `<<FILL>>` |
| Decision and date | `<<FILL: report filed / not reportable with rationale / pending>>` |
| Report reference number(s) | `<<FILL or N/A>>` |

The reportability clock starts when the company has the information, not when the investigation concludes. A pending investigation does not pause the deadline. If a report may be required, file or escalate within the deadline and update afterward.

## Section H: Sample availability and handling

| Field | Entry |
|---|---|
| Is the complained-of sample available? | Yes / No / Promised by complainant |
| Sample requested from complainant? | Date `<<FILL>>` |
| Sample received? | Date `<<FILL>>`, condition on receipt `<<FILL>>` |
| Chain of custody started | Yes / No, reference `<<FILL>>` |
| Retention / reserve sample of the batch available? | Yes / No, location `<<FILL>>` |
| Sample storage condition during investigation | `<<FILL>>` |
| Sample disposition after investigation | `<<FILL: retained / returned / destroyed, with record>>` |

If no sample can be obtained, record that and explain how the investigation will proceed without it (reserve sample, batch record review, trend review).

## Section I: Investigation assignment

| Field | Entry |
|---|---|
| Investigation required? | Yes / No (a no-investigation decision needs a recorded rationale) |
| Assigned to (name, function) | `<<FILL>>` |
| Date assigned | `<<FILL>>` |
| Target completion date (per criticality) | `<<FILL>>` |
| Investigation record reference | `<<FILL: INV-ID / deviation / QMS link>>` |
| Linked CAPA reference | `<<FILL or N/A>>` |
| Root cause summary | `<<FILL: completed at investigation close>>` |
| Confirmed, not confirmed, or not determined | `<<FILL>>` |
| Trend check: similar complaints for this product or batch? | Yes / No, references `<<FILL>>` |

## Section J: Closure and response to complainant

A complaint closes only when the investigation is complete, the reportability and pharmacovigilance routes are settled, any CAPA is opened, and a response has gone back to the complainant where one was due.

| Closure check | Confirmed |
|---|---|
| Investigation complete and conclusion recorded | Yes / No |
| Adverse event route closed out with PV (if applicable) | Yes / N/A |
| Reportability decision made and any report filed | Yes / N/A |
| CAPA opened where warranted | Yes / N/A |
| Sample dispositioned | Yes / N/A |
| Record internally consistent | Yes / No |

| Response to complainant | Entry |
|---|---|
| Response required? | Yes / No (record why if no) |
| Response method | `<<FILL: letter / email / phone>>` |
| Date response sent | `<<FILL>>` |
| Summary of response | `<<FILL: what the complainant was told, without proprietary detail>>` |
| Replacement or refund issued? | Yes / No / N/A |

| Closure signoff | Entry |
|---|---|
| Closed by (name, role, date) | `<<FILL>>` |
| QA approval of closure (name, date) | `<<FILL>>` |
| Date opened / target close / actual close | `<<FILL>>` / `<<FILL>>` / `<<FILL>>` |
| Extension justification (if late) | `<<FILL or N/A>>` |

## Triage decision logic

Read this from the top. The first rule that fires sets the path; you still complete every section.

1. If Section E shows any harm or possible harm to a person, route to pharmacovigilance immediately on the safety timeline, and continue the quality complaint in parallel. A safety route never waits on the quality investigation.
2. If the defect could plausibly cause harm even with no injury reported yet (for example suspected contamination, wrong product, mislabeling, suspected counterfeit), rate it Critical and run the reportability screen in Section G the same day.
3. Set criticality by the matrix in Section F. When safety severity and quality severity disagree, take the higher.
4. Run all three reportability questions in Section G regardless of criticality. A Minor cosmetic complaint will usually clear them; a suspected subpotency or contamination will not. Refer any candidate to regulatory affairs and QA before the deadline, not after the investigation.
5. Secure a sample and confirm the reserve sample location before evidence is lost.
6. Assign the investigation at the depth the criticality demands and set the target date from the procedure.
7. Close only when investigation, pharmacovigilance, reportability, CAPA, and the complainant response are all settled.

## Worked specimen

The following is a completed example using fictional names. It illustrates a complaint that is both a quality complaint and a potential adverse event, and that also trips the reportability screen.

### Document control header

| Field | Entry |
|---|---|
| Document title | Product Quality Complaint Intake and Triage Form |
| Document number | FORM-QA-031-01 |
| Version | 1.0 |
| Effective date | 1 April 2026 |
| Document owner | Complaints Manager, Acme Bio |
| Governing SOP | SOP-QA-031 Complaint Handling |
| Approvers | Head of Quality |
| Retention | Product lifetime plus 7 years |

### Section A: Complaint identification

| Field | Entry |
|---|---|
| Complaint ID | CMP-2026-0418 |
| Date received | 14 April 2026 |
| Time received | 09:20 |
| Date logged | 14 April 2026 |
| Intake handler | J. Okoye, Complaints Specialist |
| Channel | Medical information line |
| Original language and translation status | English, no translation needed |

### Section B: Reporter and complainant

| Field | Entry |
|---|---|
| Reporter name | Dr. L. Hartman |
| Reporter type | Healthcare professional (hospital pharmacist) |
| Contact details | Provided, hospital pharmacy direct line |
| Consent to be contacted for follow-up | Yes |
| Country of origin of the complaint | United States |
| Preferred response method | Written |

### Section C: Product identification

| Field | Entry |
|---|---|
| Product name | Acme Bio Biologic Injection 50 mg/mL |
| Strength / presentation | 50 mg/mL, single-use vial |
| Dosage form | Solution for injection |
| Batch / lot number | B-2451 |
| Expiry date | 31 January 2027 |
| Quantity affected | 1 vial (of a 25-vial pack) |
| Purchase / dispensing date and source | Received by hospital pharmacy 2 April 2026, central distributor |
| Storage and handling reported by complainant | Stored refrigerated 2 to 8 C since receipt |
| Combination product? | No |
| If combination product, constituent involved | N/A |

### Section D: Complaint description and category

> Complainant's account: Pharmacist found visible floating particles in one vial during preparation. The dose was not administered. Patient reported feeling unwell earlier that day after a dose from a different vial of the same lot.

| Field | Entry |
|---|---|
| Primary category | Particulate or foreign matter |
| Secondary category | Suspected contamination |
| Number of units complained of | 1 inspected, lot-wide concern raised |
| First occurrence for this reporter? | Yes |
| Photographs or evidence received | Yes, two photos of the vial |

### Section E: Adverse event and pharmacovigilance screen

| Screen question | Answer |
|---|---|
| Harm, injury, illness, or unexpected reaction to a person? | Unclear; patient reported feeling unwell after an earlier dose from the same lot |
| Hospitalization, life-threatening event, disability, anomaly, or death? | No |
| Medical attention sought? | Unknown, follow-up requested |
| Could the defect plausibly cause harm even if none reported yet? | Yes |
| Special situations present? | No |

| Routing | Entry |
|---|---|
| Adverse event suspected? | Yes |
| If yes, referred to pharmacovigilance | 14 April 2026, 09:55, to Drug Safety on-call |
| PV case reference number | PV-2026-1107 |
| PV acknowledgment received | Yes, 14 April 2026 |

### Section F: Criticality triage

| Triage outcome | Entry |
|---|---|
| Assigned criticality | Critical |
| Basis for the rating | Suspected contamination of an injectable, particulate confirmed by photo, possible patient reaction, lot-wide concern |
| Triage performed by | J. Okoye, 14 April 2026 |
| QA concurrence | M. Rivera, QA Lead, 14 April 2026 |

### Section G: Reportability screen

| Reportability question | Answer and route |
|---|---|
| FAR candidate (21 CFR 314.81, 3 working days)? | Yes, suspected contamination of a distributed product, referred to RA-QA 14 April 2026 |
| BPDR candidate (21 CFR 600.14, 45 calendar days)? | Yes, licensed biological product, deviation affecting purity in question, referred to RA-QA 14 April 2026 |
| Recall or market action warranted? | Pending, referred to recall committee for the lot |
| Reportability decision owner | S. Patel, Regulatory Affairs |
| Decision and date | FAR filed 16 April 2026; BPDR assessment open; recall decision pending laboratory confirmation |
| Report reference number(s) | FAR-2026-009 |

### Section H: Sample availability and handling

| Field | Entry |
|---|---|
| Complained-of sample available? | Yes |
| Sample requested from complainant? | 14 April 2026 |
| Sample received? | 16 April 2026, intact, cold-chain shipper |
| Chain of custody started | Yes, COC-2026-0212 |
| Reserve sample of the batch available? | Yes, QC retain store |
| Sample storage condition during investigation | 2 to 8 C |
| Sample disposition after investigation | Retained pending closure |

### Section I: Investigation assignment

| Field | Entry |
|---|---|
| Investigation required? | Yes |
| Assigned to | T. Nguyen, QC Investigations |
| Date assigned | 14 April 2026 |
| Target completion date | 13 May 2026 |
| Investigation record reference | INV-2026-0077 |
| Linked CAPA reference | CAPA-2026-0091 |
| Root cause summary | Open at intake |
| Confirmed, not confirmed, or not determined | Pending |
| Trend check: similar complaints for product or batch? | One earlier appearance complaint on lot B-2451, CMP-2026-0390, now linked |

### Section J: Closure and response to complainant

| Closure check | Confirmed |
|---|---|
| Investigation complete and conclusion recorded | No, open |
| Adverse event route closed out with PV | In progress, PV-2026-1107 |
| Reportability decision made and any report filed | FAR filed; BPDR and recall pending |
| CAPA opened where warranted | Yes, CAPA-2026-0091 |
| Sample dispositioned | Pending |
| Record internally consistent | Yes |

| Response to complainant | Entry |
|---|---|
| Response required? | Yes |
| Response method | Written acknowledgment sent 15 April 2026, full response to follow at closure |
| Date response sent | 15 April 2026 (interim) |
| Summary of response | Acknowledged receipt, confirmed sample requested, advised quarantine of remaining lot units pending investigation |
| Replacement or refund issued? | Pending investigation outcome |

| Closure signoff | Entry |
|---|---|
| Closed by | Open |
| QA approval of closure | Open |
| Date opened / target close / actual close | 14 April 2026 / 13 May 2026 / open |
| Extension justification | N/A |

In this example the intake handler did three things right within the first hour: spotted the possible adverse event and routed it to pharmacovigilance on the safety clock, rated the complaint Critical because contamination of an injectable can cause harm whether or not anyone was hurt yet, and flagged both the Field Alert Report and the Biological Product Deviation Report so regulatory affairs could start those clocks. The quality investigation, the recall decision, and the final complainant response all run on after intake, but none of the deadlines were started late. That is the point of putting the screens before the investigation.

## Common inspection findings this form prevents

- The complaint is logged days after it arrived, so the FAR or BPDR clock is already blown at intake.
- An adverse event sits inside a quality complaint with no evidence it ever reached pharmacovigilance.
- Criticality is assigned with no facts behind it, and a contamination complaint is treated as cosmetic.
- The reportability screen was never run, or was run only after the investigation closed.
- No attempt was made to obtain the sample or to identify the reserve sample, so the defect cannot be examined.
- The complaint is closed while the investigation, the report, or the complainant response is still open.
- Linked complaints on the same lot are not connected, so a trend is missed.

## How to adapt this form

1. Set your document number, governing SOP, and effective date in the header.
2. Align the criticality timelines in Section F with your complaint-handling procedure.
3. If your pharmacovigilance handoff uses a defined intake form or mailbox, name it in Section E rather than a free-text route.
4. Localize the reportability screen in Section G to every market you distribute in, keeping the US FAR and BPDR rows and adding the equivalent national defect-reporting and recall routes you are subject to.
5. If complaints, investigations, and CAPA live in separate systems, keep Sections I and J as pointers to those records.
6. Confirm every regulation in the references against the current published version before issue.

## Regulations this supports

- 21 CFR 211 Subpart J, written complaint records and review of complaints (US cGMP for finished pharmaceuticals)
- 21 CFR 314.81, Field Alert Report, within 3 working days of the information
- 21 CFR 600.14, Biological Product Deviation Report, within 45 calendar days of acquiring the information
- 21 CFR Part 7, recalls and corrections and removals
- 21 CFR Part 4, current good manufacturing practice for combination products
- EU GMP Chapter 8, complaints, quality defects, and product recalls
- ICH Q10, pharmaceutical quality system, including complaint and feedback handling
- ICH E2D, post-approval safety data management, for the adverse event handling principles
- FDA Data Integrity guidance (2018) and MHRA GxP Data Integrity guidance (2018), for the contemporaneous and attributable recording of intake
