---
title: "Form: Supplier Quality Questionnaire"
description: "A plug-and-play supplier quality self-assessment questionnaire with scored sections, acceptable-answer and red-flag guidance, a reviewer disposition block, and a filled specimen, for qualifying GxP material, service, and software suppliers."
pubDate: 2026-06-21
docType: "Form"
pillar: "quality-assurance"
relatedArticles: ["supplier-vendor-qualification"]
tags: ["supplier qualification", "questionnaire", "vendor management", "self-assessment", "form", "GxP"]
tier: "Intermediate"
---

This is a ready-to-use form. Send sections A through K to the supplier to complete, then a named reviewer at `<<FILL: COMPANY NAME>>` scores each section and records the disposition. The form is not finished when it comes back filled in; someone has to read it, score it, and follow up. A worked filled specimen follows the template. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Form title | Supplier Quality Questionnaire |
| Form number | `<<FILL: FRM-ID, e.g. FRM-QA-022-01>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Linked SOP | `<<FILL: SOP-ID for supplier qualification>>` |
| Retention | Per records retention schedule, not less than `<<FILL: retention period>>` |

## How to use this form

1. Procurement or QA issues the questionnaire tailored to the material, service, or software being sourced. Sections marked optional may be removed when they do not apply.
2. The supplier completes every applicable question and attaches the requested evidence.
3. A named reviewer scores each section: Green (acceptable), Yellow (acceptable with open items), Red (not acceptable, requires resolution before approval).
4. The reviewer records open items and a section-level disposition, then completes the overall conclusion.
5. The completed, scored form becomes part of the supplier qualification record and feeds the approval decision.

## Section 0: Supplier identification (completed by supplier)

| Field | Entry |
|---|---|
| Legal company name | `<<FILL>>` |
| Manufacturing / service site address | `<<FILL>>` |
| Other sites involved in this scope | `<<FILL>>` |
| Quality contact (name, title, email) | `<<FILL>>` |
| Material(s) or service(s) offered to us | `<<FILL>>` |
| Years in operation / under current ownership | `<<FILL>>` |
| Number of employees / quality staff | `<<FILL>>` |
| Date completed and completed by | `<<FILL>>` |

## Section A: Quality management system

| # | Question | Acceptable answer | Red flag |
|---|---|---|---|
| A1 | Is your QMS certified or registered? By whom, to which standard, and what is the certified scope? | Current ISO 9001, ISO 13485, or GMP certificate; scope covers the material or service offered | "In progress", expired certificate, or scope mismatch |
| A2 | Attach the current certificate(s) and the quality manual table of contents. | Provided | Not provided or refused |
| A3 | How often is the QMS reviewed by management, and who owns it? | Defined management review cycle, named owner | No defined review, no named owner |
| A4 | Do you operate to a recognized GMP, GLP, or GCP standard for the offered scope? Which one? | Names the correct standard for the activity | Cannot name a standard, or names an irrelevant one |

Reviewer score (A): `<<FILL: Green / Yellow / Red>>` - open items: `<<FILL>>`

## Section B: Regulatory and inspection history

| # | Question | Acceptable answer | Red flag |
|---|---|---|---|
| B1 | Have you been inspected by a regulatory authority in the last 3 years? List authority, date, and classification or outcome. | Disclosed with dates and outcomes | Refuses to disclose, or recent critical findings |
| B2 | Have you received a warning letter, import alert, or equivalent in the last 5 years? | Disclosed; remediation described and verifiable | Undisclosed, or open enforcement on this scope |
| B3 | Have you had a product recall related to quality in the last 3 years? | Disclosed with root cause and corrective action | Undisclosed recall history |
| B4 | Do you hold the licenses or registrations required to supply this material or service in our market? | Yes, current, attached | Missing or expired |

Reviewer score (B): `<<FILL>>` - open items: `<<FILL>>`

## Section C: Change control

| # | Question | Acceptable answer | Red flag |
|---|---|---|---|
| C1 | Do you operate a formal change control process? Attach the procedure summary. | Yes, documented and applied | No formal process |
| C2 | Will you notify us of changes to process, formulation, site, equipment, test method, or key raw material before they take effect? | Yes, with a defined notification window | "Case by case" or no commitment |
| C3 | Which changes do you agree require our prior approval, not just notification? | Changes to registered details and process-critical attributes | None, or only at supplier discretion |
| C4 | How do you control changes to subcontracted or onward-supplied activities? | Flow-down controls described | No control over subcontractors |

Reviewer score (C): `<<FILL>>` - open items: `<<FILL>>`

## Section D: Deviations, CAPA, and complaints

| # | Question | Acceptable answer | Red flag |
|---|---|---|---|
| D1 | Do you operate documented deviation and CAPA processes? | Yes, both documented | One or both absent |
| D2 | How do you handle a customer complaint, and within what timeframe do you acknowledge and respond? | Defined process and response times | No defined process or timing |
| D3 | How do you investigate root cause, and how do you verify CAPA effectiveness? | Structured RCA and an effectiveness check | "We fix the immediate problem" only |
| D4 | Provide an example (anonymized) of a recent investigation and its CAPA. | A real, traceable example | Cannot provide one |

Reviewer score (D): `<<FILL>>` - open items: `<<FILL>>`

## Section E: Materials, manufacturing, and process control (material suppliers)

| # | Question | Acceptable answer | Red flag |
|---|---|---|---|
| E1 | How are starting materials and components evaluated and approved? | Documented incoming control and approval | Accepted on supplier word alone |
| E2 | What in-process controls and release testing apply to the offered material? | Defined controls and specification | No defined controls |
| E3 | How do you control cross-contamination and, where relevant, microbial and endotoxin limits? | Controls appropriate to the material | Not addressed for a material that needs it |
| E4 | What stability or retest data supports the assigned expiry or retest period? | Stability program described | Expiry assigned with no data |
| E5 | What is the certificate of analysis format, and which results does it report against specification? | CoA reports actual results vs. spec | CoA states "complies" with no values |

Reviewer score (E): `<<FILL>>` - open items: `<<FILL>>`. Mark N/A for service or software suppliers.

## Section F: Data integrity

| # | Question | Acceptable answer | Red flag |
|---|---|---|---|
| F1 | Are laboratory and production systems that generate GxP data audit-trailed, with unique user logins and role-based access? | Yes, with examples | Shared logins, audit trail off or unverified |
| F2 | Can ordinary users disable the audit trail, change the system clock, or delete raw data? | No; controls and segregation in place | Yes, or cannot say |
| F3 | How is raw data and metadata retained, backed up, and protected from loss? | Defined retention and backup | No defined retention |
| F4 | Do your records and systems meet ALCOA+ expectations (attributable, legible, contemporaneous, original, accurate, complete, consistent, enduring, available)? | Yes, demonstrable | Cannot demonstrate |

Reviewer score (F): `<<FILL>>` - open items: `<<FILL>>`

## Section G: Software development and security (software and SaaS suppliers)

| # | Question | Acceptable answer | Red flag |
|---|---|---|---|
| G1 | Do you operate a formal, documented software development lifecycle? | Yes, documented | No SDLC |
| G2 | How are defects identified, tracked, and resolved, and can we see the defect history relevant to our release? | Tracked; history available | No defect tracking, or not shareable |
| G3 | How are releases tested and documented before they ship, and how are updates communicated to us? | Documented test and release notes with notice | Ships updates without notice or evidence |
| G4 | How are security vulnerabilities found and patched, and on what timeline? | Defined process and timeline | No defined process |
| G5 | For hosted services: where is data physically stored and under which jurisdiction, and what audit access do we hold? | Disclosed; audit rights granted | Undisclosed location; no audit rights |
| G6 | Provide your validation support documentation and any third-party report (for example SOC 2 Type II). | Provided | Not available |

Reviewer score (G): `<<FILL>>` - open items: `<<FILL>>`. Mark N/A for material suppliers. A SOC 2 report supports but does not by itself prove 21 CFR Part 11 or EU Annex 11 compliance.

## Section H: Subcontracting and supply chain

| # | Question | Acceptable answer | Red flag |
|---|---|---|---|
| H1 | Do you outsource any part of the contracted activity? List the activities and the subcontractors. | Disclosed with names and oversight | Undisclosed onward subcontracting |
| H2 | How do you qualify and monitor your own suppliers and subcontractors? | Documented supplier program | No supplier control |
| H3 | Can you maintain traceability of the supply chain for the offered material or service? | Yes, end to end | Gaps in traceability |

Reviewer score (H): `<<FILL>>` - open items: `<<FILL>>`

## Section I: Training and personnel

| # | Question | Acceptable answer | Red flag |
|---|---|---|---|
| I1 | How are staff trained and qualified for the activities they perform, and are training records retained? | Documented training and records | No training records |
| I2 | Are analysts qualified against the specific methods they run? | Yes, method-specific qualification | General training only |

Reviewer score (I): `<<FILL>>` - open items: `<<FILL>>`

## Section J: Audit and access

| # | Question | Acceptable answer | Red flag |
|---|---|---|---|
| J1 | Will you grant us the right to audit on a schedule and for cause? | Yes, in the quality agreement | Refuses or limits unreasonably |
| J2 | When was your most recent customer or third-party audit, and will you share the summary? | Recent, summary shareable | No recent audit, or refuses to share |

Reviewer score (J): `<<FILL>>` - open items: `<<FILL>>`

## Section K: Supplier declaration

| Statement | Entry |
|---|---|
| The information provided is accurate and complete to the best of my knowledge. | Yes / No |
| We will notify `<<FILL: COMPANY NAME>>` of changes affecting the offered scope before they take effect. | Yes / No |
| Authorized signatory (name, title) | `<<FILL>>` |
| Signature and date | `<<FILL>>` |

## Reviewer disposition (completed by `<<FILL: COMPANY NAME>>`)

| Field | Entry |
|---|---|
| Reviewer (name, role) | `<<FILL>>` |
| Date reviewed | `<<FILL>>` |
| Section scores (A to K) | `<<FILL: e.g. A G, B G, C Y, ...>>` |
| Open items requiring resolution before approval | `<<FILL>>` |
| Overall conclusion | Acceptable / Acceptable with conditions / Not acceptable |
| Recommended next step | `<<FILL: proceed to documentation review / audit / reject>>` |
| Reviewer signature and date | `<<FILL>>` |

## Acceptance criteria

The questionnaire is acceptable for use in a qualification decision when:

- Every applicable section is completed by the supplier and signed in the declaration (Section K).
- A named reviewer has scored every applicable section Green, Yellow, or Red, not left any blank.
- Every Red and every Yellow has a recorded open item and a defined resolution path.
- The overall conclusion and recommended next step are signed and dated.
- The requested evidence (certificates, procedure summaries, example records) is attached, not just promised.

## References

> 21 CFR 211.84 (testing and approval of components) and 211.68 (computerized systems).
> 21 CFR 820.50 and ISO 13485:2016 clause 7.4 (purchasing controls, devices).
> EudraLex Volume 4, Chapter 5 and Chapter 7.
> ICH Q10 and ICH Q9.
> MHRA GxP Data Integrity Guidance and PIC/S PI 041 (for Section F).
> 21 CFR Part 11 and EU GMP Annex 11 (for Sections F and G).

Confirm the current version and clause numbers of each reference before issue.

---

## Filled specimen

The following shows Sections A, C, and F completed and scored for an example contract testing laboratory, so you can see the level of detail a reviewer is expected to produce. The supplier, dates, and findings are illustrative.

**Supplier:** Meridian Analytical Services, Site 2 (Lyon, FR). Material or service: dissolution and assay testing, USP methods.

| Section | Supplier answer (summary) | Reviewer score | Open item |
|---|---|---|---|
| A1 to A4 | ISO 17025 accredited, scope covers dissolution and assay; GMP self-declared, last regulatory inspection 2024 (no critical findings); QMS reviewed annually, owned by Quality Director. | Green | None |
| C1 to C4 | Formal change control; agrees to notify method or instrument changes 30 days ahead; agrees prior approval for changes to validated methods used on our products; subcontracts nothing. | Yellow | Notification window of 30 days acceptable, but supplier wanted "where practical" on prior approval. Reviewer to require firm prior-approval commitment in the quality agreement. |
| F1 to F4 | CDS audit-trailed, unique logins, role-based access; analysts cannot disable audit trail; admin rights held by IT only; raw data retained 10 years with nightly backup. F2: confirmed analysts have no reprocessing rights without QA sign-off. | Green | None, but verify CDS reprocessing controls on the on-site audit. |

Reviewer (M. Devlin, QA), 2026-05-18. Overall conclusion: Acceptable with conditions. Recommended next step: proceed to on-site audit; carry the change-control prior-approval wording and the CDS reprocessing check into the audit plan and the quality agreement.

In this example the reviewer did not stop at "the form looks fine." A vague answer on prior approval became a Yellow with a concrete action that flows into the quality agreement, and a strong data integrity section still generated a verification point for the audit. That is what turns a returned form into a decision input.

## Common inspection findings this form prevents

- Questionnaires collected and stored with no reviewer signature, no score, and no follow-up on worrying answers.
- A generic form every supplier completes the same way, producing a file rather than information about the specific material.
- A "complies" certificate of analysis accepted without confirming it reports actual results against specification.
- Shared logins or a disable-able audit trail at a supplier that generates data used in your release decisions, never surfaced before approval.
- A software vendor approved on a SOC 2 report alone, with the Part 11 and Annex 11 specific controls never checked.
- Undisclosed onward subcontracting discovered only after a batch behaved differently.

## How to adapt this form

1. Set your form number, linked SOP, and retention period in the header.
2. Remove Section E for service and software suppliers; remove Section G for material suppliers; keep Section F for everyone who creates GxP data.
3. Add material-specific questions where they earn their place (for example aseptic and environmental monitoring detail for a sterile component, lot-to-lot consistency for a chromatography reagent).
4. Tie the scoring scheme (Green, Yellow, Red) to the dispositions your supplier qualification SOP recognizes, so a Red means the same thing every time.
5. Confirm every regulation in the references against the current published version before issue.
