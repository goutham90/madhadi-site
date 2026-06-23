---
title: "Matrix: Role-Based Training Curriculum"
description: "A plug-and-play training curriculum matrix mapping each GxP role to its required SOPs and curricula, with read-and-understand versus assessed-competency designation, due dates, and refresher intervals, plus a filled specimen and the regulations it satisfies."
pubDate: 2026-06-22
docType: "Matrix"
pillar: "quality-assurance"
relatedArticles: ["training-program-gxp"]
tags: ["training", "curriculum", "GxP", "competency", "qualification", "roles and responsibilities", "matrix"]
tier: "Intermediate"
---

This is a ready-to-use training curriculum matrix. It maps every GxP role to the SOPs and curricula that role must complete, says whether each item is a read-and-understand acknowledgement or an assessed competency, and sets the due date and refresher interval for each. When an inspector asks "show me this person was trained to do this job before they did it," this matrix plus the signed records behind it is the answer. It is the day-one artifact that makes every downstream process defensible, because an untrained operator is the root cause an investigator looks for first. Replace every `<<FILL: ...>>` placeholder, map the generic roles to your real job titles and the generic curriculum codes to your real document numbers, and route it through document control. A worked filled specimen follows the template. Verify each cited regulation against the current source before you rely on it.

## Document control header

| Field | Entry |
|---|---|
| Document title | Role-Based Training Curriculum Matrix |
| Document number | `<<FILL: MTX-ID, e.g. MTX-QA-007>>` |
| Version | `<<FILL: version, e.g. 1.0>>` |
| Effective date | `<<FILL: effective date>>` |
| Document owner | `<<FILL: role, e.g. Training Lead / Head of Quality>>` |
| Applies to | `<<FILL: sites / functions in scope>>` |
| Parent SOP | `<<FILL: SOP-ID for the Training and Qualification procedure>>` |
| Managed in | `<<FILL: LMS name and validation reference, or "paper matrix">>` |

## How to read this matrix

Each role has a defined curriculum: the set of documents and courses a person in that role must complete to be qualified. Every item in a curriculum carries two attributes that decide how it is delivered and recorded.

- **R, Read-and-understand**: the trainee reads the document and signs an acknowledgement that they have read and understood it. Appropriate for procedures where awareness is enough. The record is the signed, dated acknowledgement.
- **A, Assessed competency**: the trainee must demonstrate they can do the task, judged against a defined standard, before they are released to work unsupervised. Appropriate for activities where doing it wrong harms product, patient, or data. Evidence is a graded assessment, an observed skills checklist, or a qualified-trainer sign-off, not just a signature.

Two dates govern every assignment:

- **Initial due date**: when the item must be complete. The hard rule is that initial training is complete before the person performs the task, not after.
- **Refresher interval**: how often the item is repeated, plus the triggers that force a re-train (a revised document, a related deviation, a failed competency, or a return after a long absence). A blank refresher means one-time only, justified in the curriculum.

Rules this matrix enforces:
1. No one performs a GxP task before the training for that task is recorded as complete.
2. High-consequence tasks are assessed competency, not read-and-understand.
3. A document revision retrains everyone whose curriculum includes it; the old acknowledgement does not carry forward.
4. The trainer of an assessed competency is qualified for that task and is not the trainee.

## Roles

Map each generic role to your real title. Add or remove roles to fit your organization. Keep roles tied to job functions, not to named individuals, so the matrix survives staff turnover.

| Code | Generic role | Your title |
|---|---|---|
| OPR | Manufacturing operator | `<<FILL>>` |
| MFG-SUP | Manufacturing supervisor | `<<FILL>>` |
| QC | QC analyst | `<<FILL>>` |
| QC-SUP | QC supervisor / reviewer | `<<FILL>>` |
| QA | Quality Assurance reviewer / approver | `<<FILL>>` |
| WH | Warehouse / materials handler | `<<FILL>>` |
| ENG | Engineering / maintenance | `<<FILL>>` |
| VAL | Validation / CSV | `<<FILL>>` |
| ALL | Every GxP person (site induction) | `<<FILL>>` |

## Curriculum matrix

Cells use **R** (read-and-understand) or **A** (assessed competency). A blank cell means the role does not need that item. Set the initial due timing and refresher interval per item in the two right-hand columns; these apply to whichever roles are assigned the item.

### Foundation curriculum (all GxP personnel)

| Curriculum item (SOP / course) | OPR | MFG-SUP | QC | QC-SUP | QA | WH | ENG | VAL | Initial due | Refresher |
|---|---|---|---|---|---|---|---|---|---|---|
| `<<FILL: GMP induction, e.g. TRN-001>>` | A | A | A | A | A | A | A | A | Before any GxP work | Annual |
| `<<FILL: Data integrity / ALCOA+, e.g. SOP-QA-002>>` | R | R | A | A | A | R | R | A | Before any GxP work | Annual |
| `<<FILL: Good documentation practices, e.g. SOP-QA-003>>` | A | A | A | A | A | A | A | A | Before any GxP work | Every 2 years |
| `<<FILL: Deviation and CAPA awareness, e.g. SOP-QA-010>>` | R | R | R | A | A | R | R | R | Within 30 days of start | Every 2 years |
| `<<FILL: Health, safety, gowning, e.g. SOP-EHS-005>>` | A | A | A | A | R | A | A | R | Before area access | Annual |

### Role-specific curriculum

| Curriculum item (SOP / course) | OPR | MFG-SUP | QC | QC-SUP | QA | WH | ENG | VAL | Initial due | Refresher |
|---|---|---|---|---|---|---|---|---|---|---|
| `<<FILL: Batch record execution, e.g. SOP-MFG-021>>` | A | A | | | R | | | | Before first batch | On revision |
| `<<FILL: Equipment operation / CIP, e.g. SOP-MFG-030>>` | A | A | | | | | A | | Before unsupervised use | Annual |
| `<<FILL: Analytical method / instrument, e.g. SOP-QC-044>>` | | | A | A | | | | | Before reporting a result | Annual |
| `<<FILL: Audit trail review, e.g. SOP-QA-014>>` | | | R | A | A | | | | Before performing review | Annual |
| `<<FILL: Material receipt and sampling, e.g. SOP-WH-012>>` | | | | | | A | | | Before first receipt | Every 2 years |
| `<<FILL: Computerized system use (per system), e.g. SOP-IT-020>>` | A | A | A | A | A | A | A | A | Before system access | On major upgrade |
| `<<FILL: Change control, e.g. SOP-QA-008>>` | | R | | R | A | | R | A | Within 30 days of start | Every 2 years |
| `<<FILL: Validation lifecycle, e.g. SOP-VAL-001>>` | | | | | C | | | A | Before authoring protocols | On revision |

(C above denotes consulted-level awareness only where a full curriculum item is not warranted; convert to R or A if your program does not use an awareness tier.)

## Read-and-understand versus assessed competency

Decide R or A by consequence, not convenience. The deciding question: if this person does the task wrong, can it harm product quality, patient safety, or data integrity, and would a signature alone have caught that? If yes, the item is assessed competency.

| Use read-and-understand (R) when | Use assessed competency (A) when |
|---|---|
| The document is informational or a policy the person must be aware of | The person physically performs a GxP operation (weighing, dispensing, aseptic technique, sampling) |
| The task is low risk and easily verified by another control | A mistake is not easily caught downstream before product or data is affected |
| Awareness of a process the person does not execute | The activity requires judgment (reviewing a result, integrating a peak, classifying a deviation) |
| | A regulation or your risk assessment names competency, not awareness, for the task |

Read-and-understand evidence is the signed, dated acknowledgement tied to the exact document version. Assessed-competency evidence is a graded test, an observed-skills checklist signed by a qualified trainer, or documented on-the-job qualification, plus the same version control. A signature on a competency item is not enough on its own.

## Due dates and refresher dates

The flow below is the rule every assignment follows, from assignment to qualified to refresh.

<div class="flow">
  <div class="flow-step">Role assigned to person</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Curriculum auto-assigned with initial due date</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Training complete and recorded</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Released to perform task</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Refresher due date set</div>
</div>

Set due and refresher dates by these conventions:

- **Initial due**: tied to the event that creates the need (start date, role change, new system go-live), and always before the task is performed. Express it as "before first use" or "within N days of role assignment," not as a fixed calendar date that drifts.
- **Refresher interval**: a fixed cadence (annual, every two years) for items where skills decay or regulations expect periodic retraining, with the next-due date calculated from completion, not from assignment.
- **Event-driven re-train (overrides the cadence)**: a document revision, a related deviation or CAPA, a failed competency check, or a return from extended absence resets the clock and re-assigns the item immediately, regardless of where the periodic interval stands.
- **Grace and lockout**: define a grace window for overdue refreshers and what happens at expiry. For assessed competencies on high-consequence tasks, the convention is that an expired qualification removes the person from that task until re-qualified.

## Acceptance criteria

This matrix is being used correctly when:

- Every person performing a GxP task has a recorded, complete curriculum for their role, dated before they first performed the task.
- High-consequence tasks are assessed competencies with evidence beyond a signature.
- Every training record names the exact document version, and a revision triggered re-training for everyone assigned that item.
- No refresher is silently overdue; overdue assessed competencies on critical tasks have removed the person from the task or are covered by a documented, time-bound interim control.
- The matrix matches the live org chart and the live document index, and is reviewed when either changes.

## References

> 21 CFR 211.25 (personnel qualifications: education, training, and experience; continuing training by qualified individuals).
> 21 CFR 211.34 and 21 CFR 600.10 (consultants and personnel; the latter for biologics).
> EU GMP EudraLex Volume 4, Part I, Chapter 2 (personnel and training).
> ICH Q10 (Pharmaceutical Quality System, training and knowledge management as system enablers).
> ICH Q7 (good manufacturing practice for active pharmaceutical ingredients, personnel and training, section 3).
> 21 CFR Part 11 and EU GMP Annex 11 (training records as electronic records where an LMS is used; LMS to be validated).
> FDA guidance, "Data Integrity and Compliance With Drug CGMP" (December 2018), on training as a control supporting reliable records.
> For combination products, 21 CFR Part 4 directs personnel training to the applicable drug and device requirements together.

Confirm the current version and clause numbers of each reference before issue.

## Revision history

| Version | Date | Author | Summary of change |
|---|---|---|---|
| `<<FILL: 1.0>>` | `<<FILL: date>>` | `<<FILL: author>>` | Initial issue. |

## Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | `<<FILL>>` | | |
| Reviewer (QA) | `<<FILL>>` | | |
| Approver (Quality Head) | `<<FILL>>` | | |

---

## Filled specimen

The following shows the role mapping and a slice of the matrix completed for an illustrative QC analyst at a mid-size biologics company, so you can see how the generic codes resolve to real documents, designations, and dates. Titles, document numbers, and dates are illustrative; replace them with your own.

Role mapping as adopted:

| Code | Generic role | Title at this company |
|---|---|---|
| QC | QC analyst | QC Analyst II, Release Testing |
| QC-SUP | QC supervisor / reviewer | Senior QC Analyst (second-person reviewer) |
| QA | QA reviewer / approver | QA Specialist, Disposition |

Completed curriculum for the QC Analyst II role (extract):

| Curriculum item | Document and version | R or A | Initial due | Completed | Refresher | Next due |
|---|---|---|---|---|---|---|
| GMP induction | TRN-001 v6 | A (graded test, 80% pass) | Before any GxP work | 03 Feb 2026 | Annual | 03 Feb 2027 |
| Data integrity / ALCOA+ | SOP-QA-002 v4 | A (case-study assessment) | Before any GxP work | 04 Feb 2026 | Annual | 04 Feb 2027 |
| Good documentation practices | SOP-QA-003 v3 | A (observed) | Before any GxP work | 04 Feb 2026 | Every 2 years | 04 Feb 2028 |
| HPLC operation and integration | SOP-QC-044 v8 | A (qualified-trainer OJT sign-off) | Before reporting a result | 18 Feb 2026 | Annual | 18 Feb 2027 |
| Audit trail review | SOP-QA-014 v2 | R | Before performing review | 20 Feb 2026 | Annual | 20 Feb 2027 |
| CDS use (Empower) | SOP-IT-020 v5 | A | Before system access | 12 Feb 2026 | On major upgrade | Event-driven |
| Deviation and CAPA awareness | SOP-QA-010 v7 | R | Within 30 days of start | 26 Feb 2026 | Every 2 years | 26 Feb 2028 |

In this example the analyst was released to report HPLC results only after an assessed, trainer-signed on-the-job qualification on SOP-QC-044, dated 18 Feb 2026, before the first reportable result. The data-integrity and method items are assessed competencies, not signatures, because a wrong integration or a quiet audit-trail gap would not be caught by awareness alone. When SOP-QC-044 was revised to v8, the analyst was re-trained against the new version; the v7 record did not carry forward. That chain, role to assigned curriculum to dated completion before the task to version-controlled refresh, is exactly what an inspector reconstructs when they pick a batch and ask "was everyone who touched this qualified to?"

## Common inspection findings this matrix prevents

- An operator performed a step with a training record dated after the batch, so the person was not qualified at the time of the work.
- High-consequence tasks were signed off as read-and-understand, with no evidence the person could actually do the task.
- A procedure was revised but staff kept working to the old training record, because the revision did not trigger re-training.
- Refreshers were overdue across a function and no one had removed expired analysts from the tasks they were no longer qualified for.
- The training matrix listed people who had left and omitted current staff, so it did not reflect who actually does the work.
- Training records existed but no curriculum defined what each role was supposed to complete, so completeness could not be demonstrated.

## How to adapt this matrix

1. Set your document number, owner, and effective date in the header, and link the parent training procedure and your LMS validation reference.
2. Map every generic role code to a real job-function title, and add or remove roles to match your structure; keep roles tied to functions, not named people.
3. Replace each generic curriculum code with your real document number and current version, and delete items that do not apply.
4. Set R or A for every populated cell by consequence, and make sure every high-consequence, hands-on task is assessed competency with evidence beyond a signature.
5. Set initial-due timing as an event ("before first use," "within N days of role assignment"), never a fixed drifting date, and set refresher intervals plus the event triggers that force re-training.
6. Define your grace window and the lockout rule for expired assessed competencies on critical tasks.
7. Reconcile the matrix against the live org chart and live document index on a defined cadence, and confirm every regulation in the references against the current published version before issue.
