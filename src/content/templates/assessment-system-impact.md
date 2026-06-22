---
title: "System Impact Assessment (GxP Determination)"
description: "A plug-and-play assessment that decides whether a system or piece of equipment is GxP, classifies it as direct, indirect, or no impact, sets its criticality, and derives the validation scope, with a filled specimen and the regulations it satisfies."
pubDate: 2026-06-21
docType: "Risk Assessment"
pillar: "csv-csa"
relatedArticles: ["csv-risk-assessment-methodology", "validation-deliverables-guide"]
tags: ["system impact assessment", "gxp determination", "csv", "validation scope", "gamp", "direct impact", "risk assessment"]
tier: "Intermediate"
---

This is a ready-to-use system impact assessment. It is the first decision you make for any new or changed system or piece of equipment: is it GxP, and if so, how much impact does it have. Replace every `<<FILL: ...>>` placeholder with your own specifics, set your document numbers and dates, and route it through your normal document control, review, and approval. A worked filled specimen follows the template so you can see how a completed version reads. Confirm each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | System Impact Assessment for `<<FILL: SYSTEM / EQUIPMENT NAME>>` |
| Document number | `<<FILL: SIA-ID, e.g. SIA-VAL-018>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Supersedes | `<<FILL: prior version or "New">>` |
| Document owner | `<<FILL: role, e.g. System Owner>>` |
| Site / area | `<<FILL: site, building, area>>` |
| Trigger for this assessment | `<<FILL: new system / change / periodic review / acquisition>>` |

## 1. Purpose

This assessment determines whether `<<FILL: SYSTEM / EQUIPMENT NAME>>` has an impact on product quality, patient safety, or the integrity of a GxP record, and if it does, how much. The output is a documented decision: GxP or not GxP, the impact class (direct, indirect, or no impact), the criticality, and the resulting validation or qualification scope. The decision drives everything downstream, including the validation plan, the level of testing, the documentation set, and the change control rigor, so it has to be reasoned, not asserted.

## 2. Scope

This assessment applies to a single system or piece of equipment, or to a defined boundary of one (named in section 5.1). It covers automated and computerized systems, laboratory instruments, manufacturing and utility equipment, and the software that controls or records them. It applies on first introduction, on a change that could alter impact, on acquisition or transfer of a system, and at periodic review. It does not, by itself, validate or qualify the system; it sizes the work. It does not replace the detailed functional risk assessment that follows for direct-impact systems, which is governed by `<<FILL: SOP-ID for functional risk assessment>>`.

## 3. Responsibilities

| Role | Responsibility |
|---|---|
| System / equipment owner | Owns the description of intended use and the impact determination; understands what the system does, what depends on it, and what would catch a failure. |
| Validation / CSV lead | Facilitates the assessment, applies the decision logic consistently, and translates the result into validation or qualification scope. |
| Quality Assurance | Approves the GxP and impact decision, not just the signatures; confirms direct, indirect, and no-impact calls are reasoned and that nothing GxP was waved through as no impact. |
| Subject matter expert | Confirms how the system behaves in the real process and what downstream control would detect a failure. |
| IT / system administrator | Confirms whether the system creates, stores, or transmits electronic records and what technical controls exist (access, audit trail, time synchronization). |

## 4. Definitions

- **GxP system**: a system or piece of equipment whose function, output, or records affect product quality, patient safety, or a regulatory decision, and therefore falls under one or more good practice regulations.
- **Direct impact**: a failure or malfunction could affect product quality, patient safety, or a GxP record with no intervening human check or independent control. These systems are qualified or validated.
- **Indirect impact**: the system supports or feeds a direct-impact system but does not itself touch the product or the GxP decision without a control in between. These systems are typically controlled by good engineering practice with a documented basis, not full validation.
- **No impact**: the system has no effect on product, patient, or GxP record. It is recorded as out of scope with a reason and managed by good engineering practice only.
- **Criticality**: how severe and how likely the harm is if the system fails, used to scale the depth of validation within the direct-impact class.
- **GAMP category**: the software classification (1 infrastructure, 3 non-configured, 4 configured, 5 custom) that, together with impact, sets the validation approach.

## 5. Method

The assessment runs in five steps. Steps 1 and 2 decide GxP yes or no. Step 3 sets the impact class. Step 4 sets criticality within the direct-impact class. Step 5 derives the scope.

### 5.1 Step 1, describe the system and its boundary

Write a short, specific description: what the system is, what process it serves, what it does in that process, and where its boundary sits (what is in, what is out). Name the records it creates or controls. A vague description ("manages data") makes every later decision unprovable. Record the description in section 7.

### 5.2 Step 2, answer the GxP determination questions

Answer each question Yes or No with a one-line basis. A single Yes on questions 1 through 6 makes the system GxP. Record the answers in section 8.

| No. | GxP determination question | Yes / No | Basis |
|---|---|---|---|
| 1 | Does the system create, modify, store, archive, retrieve, or transmit a GxP record (batch, test, release, complaint, clinical, or regulatory data)? | | |
| 2 | Does the system control or monitor a process step that affects product quality (manufacturing, packaging, sterilization, environmental control)? | | |
| 3 | Does the system generate data or a result used in a quality decision, a release, or a regulatory submission? | | |
| 4 | Does a regulation require the function the system performs (for example calibration, monitoring, calculation, or recordkeeping)? | | |
| 5 | Does the system electronically sign records or apply electronic signatures under 21 CFR Part 11 or EU GMP Annex 11? | | |
| 6 | Would a failure of the system reach product, patient, or a GxP record without an independent control catching it first? | | |
| 7 | Is the system used only for business, finance, scheduling, or other non-GxP purposes with no path to product, patient, or GxP record? | | |

A Yes on any of questions 1 through 6 makes the system GxP. A Yes on question 7, with No on 1 through 6, supports a not-GxP outcome. If a system is ambiguous, treat it as GxP and let the impact step right-size the work.

### 5.3 Step 3, classify the impact

For a GxP system, classify the impact using the criteria below. Decide by reasoning, not by category name. The test for direct impact is whether a failure reaches the GxP outcome with no independent control in between.

| Impact class | Criteria | Typical examples |
|---|---|---|
| Direct | Failure can affect product quality, patient safety, or a GxP record with no intervening independent control. The system touches the product, the result, or the record directly. | Manufacturing execution system, chromatography data system, automated sterilizer, building automation for a sterile area, LIMS that holds release results, dispensing/weighing system. |
| Indirect | Supports a direct-impact system but does not itself touch product or the GxP decision without a control in between. A failure is caught by the direct system or by a human check. | Purified water generation feeding a qualified loop, a SCADA historian used for trend only, a label-design tool whose output is independently verified, a maintenance management system. |
| No impact | No path to product, patient, or GxP record. | HVAC for an office area, a meeting-room booking tool, a general file share with no GxP records, a non-GxP financial system. |

For each candidate "indirect" call, name the independent control that justifies it (the human verification, the second system, the alarm with a documented response). An indirect call with no named control is really a direct call.

### 5.4 Step 4, set criticality for direct-impact systems

Within the direct-impact class, scale the validation depth by criticality. Score severity and probability of an undetected failure, then read the criticality off the matrix. This mirrors the risk framing in ICH Q9 and GAMP 5.

| Severity | Meaning |
|---|---|
| High | Failure could harm a patient, cause a recall, or corrupt a release decision. |
| Medium | Failure could cause a deviation, a rework, or a reportable data issue, but a control would likely catch it before product release. |
| Low | Failure causes inconvenience or a minor record gap with no product or patient effect. |

| Probability of an undetected failure | Meaning |
|---|---|
| High | Few or no downstream controls; a failure would likely reach the GxP outcome. |
| Medium | Some controls; a failure might be caught. |
| Low | Strong, independent controls; a failure is very likely caught before it matters. |

| Severity \ Probability | Low prob | Medium prob | High prob |
|---|---|---|---|
| High severity | Medium criticality | High criticality | High criticality |
| Medium severity | Low criticality | Medium criticality | High criticality |
| Low severity | Low criticality | Low criticality | Medium criticality |

Criticality scales the rigor inside the direct-impact lane: a high-criticality system gets the deepest functional risk assessment and test coverage; a low-criticality direct system gets a leaner, justified set.

### 5.5 Step 5, derive the validation or qualification scope

Read the scope off impact, then use GAMP category and criticality as two independent inputs: the GAMP category sets the validation approach (what activities apply, given how the software is built), and criticality sets the depth (how much testing and evidence, given how much harm a failure could do). They are scored separately and are not locked to each other. The GAMP categories shown against each criticality below are the typical pairings, not mandatory ones; a configured (GAMP 4) or custom (GAMP 5) system can be low criticality, and a non-configured (GAMP 3) product can be high criticality, so set each input on its own and let the combination drive the scope. State the result explicitly so the validation plan inherits it.

| Impact class | Criticality (depth) | GAMP category (approach), typical | Resulting scope |
|---|---|---|---|
| No impact | n/a | n/a | No validation. Good engineering practice only. Record the decision and stop. |
| Indirect | n/a | n/a | Good engineering practice with a documented basis. Commissioning and a verification record; no full qualification unless a change raises it to direct. Reference the named control. |
| Direct | Low | typically GAMP 1 or 3 | Leaner qualification. Supplier assessment, installation/configuration verification, focused functional verification of the GxP-critical functions, Part 11 / Annex 11 controls confirmed. |
| Direct | Medium or high | typically GAMP 4 or 5 | Full lifecycle: validation plan, user/functional requirements, functional risk assessment, IQ/OQ (and PQ where the process needs it), traceability matrix, data integrity and Part 11 / Annex 11 controls, validation summary report. Depth scales with criticality, and the activity set follows the GAMP category (more for configured or custom software, less for non-configured products). |

For computerized systems also confirm: audit trail enabled and reviewable, access control and unique user accounts, time synchronization, backup and restore, and a record retention path. These are not optional for any direct-impact GxP system.

## 6. Acceptance criteria

The assessment is acceptable when all of the following are true:

- The system and its boundary are described specifically enough to judge impact.
- Every GxP determination question is answered Yes or No with a basis.
- The GxP yes/no decision follows the answers (any Yes on questions 1 through 6 yields GxP).
- The impact class is reasoned, and every indirect call names the independent control that justifies it.
- For direct-impact systems, criticality is set from a severity and probability call, not assumed.
- The resulting validation or qualification scope is stated explicitly and matches the impact and GAMP category.
- The record is complete, signed, dated, and approved by QA before validation work proceeds.

## 7. Record: system description

| Field | Entry |
|---|---|
| System / equipment name and ID | `<<FILL: SYSTEM NAME / ID>>` |
| Process served | `<<FILL: process / area>>` |
| What it does in the process | `<<FILL: function>>` |
| Boundary (in scope) | `<<FILL: components, modules, interfaces in scope>>` |
| Boundary (out of scope) | `<<FILL: what is excluded and where the next system starts>>` |
| GxP records created or controlled | `<<FILL: record types, or "none">>` |
| Software / GAMP category | `<<FILL: 1 / 3 / 4 / 5, or N/A for non-computerized>>` |
| Interfaces to other systems | `<<FILL: upstream / downstream systems>>` |

## 8. Record: GxP determination and outcome

| Field | Entry |
|---|---|
| Q1 to Q7 answers | `<<FILL: e.g. Q1 Yes, Q2 No, ... with bases attached>>` |
| GxP outcome | `<<FILL: GxP / Not GxP>>` |
| Impact class | `<<FILL: Direct / Indirect / No impact>>` |
| Independent control (if Indirect) | `<<FILL: named control, or N/A>>` |
| Severity (if Direct) | `<<FILL: High / Medium / Low>>` |
| Probability of undetected failure (if Direct) | `<<FILL: High / Medium / Low>>` |
| Criticality (if Direct) | `<<FILL: High / Medium / Low>>` |
| Resulting scope | `<<FILL: from section 5.5>>` |
| Linked validation plan / qualification record | `<<FILL: VP-ID or N/A>>` |
| Re-assessment trigger | `<<FILL: change types that would require redoing this>>` |

## 9. References

> 21 CFR Part 11 (electronic records and signatures).
> 21 CFR 211.68 (automatic, mechanical, and electronic equipment) and 211.63 (equipment design).
> ISO 13485:2016, clause 4.1.6 (validation of software used in the quality management system) and clause 7.5.6 (validation of processes for production and service provision), for medical-device systems. Under the Quality Management System Regulation (21 CFR Part 820), effective 2 February 2026, the legacy automated-process requirement at 820.70(i) is reserved and ISO 13485:2016 is incorporated by reference.
> EU GMP Annex 11 (Computerised Systems) and Annex 15 (Qualification and Validation, 2015 revision).
> ICH Q9, Quality Risk Management.
> GAMP 5 (A Risk-Based Approach to Compliant GxP Computerized Systems), Second Edition.
> FDA Computer Software Assurance for Production and Quality System Software, final guidance, 24 September 2025.
> PIC/S PI 011, Good Practices for Computerised Systems in Regulated GxP Environments.

Confirm the current version and clause numbers of each reference before issue.

## 10. Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## 11. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author (System / Validation) | `<<FILL>>` | | |
| Reviewer (SME) | `<<FILL>>` | | |
| Approver (QA) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the assessment completed for an example temperature-monitoring system on a GMP cold-storage unit, so you can see the level of detail an inspector expects. The company, system, and numbers are illustrative; replace them with your own.

| Field | Entry |
|---|---|
| System name and ID | Continuous temperature monitoring system, units CS-101 to CS-104 (2 to 8 C storage) |
| Process served | Storage of released drug product and reference standards |
| What it does | Records temperature every 5 minutes, alarms on excursion, retains the record for release and stability decisions |
| Boundary (in scope) | Probes, dataloggers, monitoring server, alarm notification module, the database holding the records |
| Boundary (out of scope) | The refrigeration mechanics (separately qualified), the office network |
| GxP records created | Continuous temperature history and excursion alarm records used in product disposition |
| Software / GAMP category | 4 (configured commercial monitoring software) |
| Q1 (creates GxP record) | Yes: holds temperature history used in disposition |
| Q2 (controls a quality process step) | No: it monitors, it does not control the refrigeration |
| Q3 (data used in a quality decision) | Yes: excursions feed disposition and stability assessment |
| Q4 (a regulation requires the function) | Yes: storage condition monitoring and the temperature record are required by GMP and GDP storage and distribution rules |
| Q5 (electronic signatures / Part 11) | Yes: approvals of excursion records are electronically signed |
| Q6 (failure reaches a GxP record without a catch) | Yes: a silent logging failure could leave an excursion unrecorded |
| Q7 (business-only, no path to GxP) | No: the system holds and feeds GxP records, so it is not business-only |
| GxP outcome | GxP |
| Impact class | Direct (the record itself is GxP and a failure can corrupt a disposition with no independent catch) |
| Severity | High: an unrecorded excursion could let an out-of-spec product be released |
| Probability of undetected failure | Medium: a daily completeness check exists but is not real time |
| Criticality | High (high severity, medium probability) |
| Resulting scope | Full lifecycle: validation plan, URS/FRS, functional risk assessment, IQ/OQ, alarm and excursion-handling testing, Part 11 controls (audit trail, access, time sync), backup/restore, validation summary report |
| Re-assessment trigger | Adding new storage units, changing the alarm logic, or a software upgrade that touches the record store |

In this example the team did not stop at "it is just a thermometer." The system holds a GxP record, the record feeds a release decision, a silent failure could leave an excursion unseen, and approvals are electronically signed. That made it a direct-impact, high-criticality GxP system needing the full set, not a no-impact monitor. Walking that reasoning, record to decision to no-independent-catch, is exactly what a reviewer is expected to demonstrate.

## Common inspection findings this assessment prevents

- A system that holds or feeds GxP records was classified as no impact or business-only and never validated.
- Impact was asserted by category name ("it is a monitor, so indirect") with no reasoning about whether a failure reaches the GxP outcome.
- An indirect call with no named independent control, so the system is really direct but was treated as lighter.
- No GxP determination on file at all; validation started or was skipped with no documented basis.
- Criticality set high or low with no severity and probability call behind it, so the validation depth has no rationale.
- A change altered the system's impact (new interface, new record, new signature) but the impact assessment was never revisited.
- Electronic signatures or an audit trail present, but Part 11 / Annex 11 controls never confirmed because the system was scoped too light.

## How to adapt this assessment

1. Set your document number, owner, site, and effective date in the header.
2. Describe your actual system and boundary in section 7; be specific about the records it touches and where the next system starts.
3. Answer the seven determination questions in section 8 against your system, attaching a one-line basis to each.
4. Where you call a system indirect, name the real independent control in your process that justifies it.
5. For direct-impact systems, set severity and probability from your own controls and read the criticality off the matrix.
6. State the resulting scope explicitly and link it to the validation plan or qualification record that will inherit it.
7. Define the re-assessment trigger so a future change that alters impact forces this document to be redone.
8. Confirm every regulation in section 9 against the current published version before issue.
