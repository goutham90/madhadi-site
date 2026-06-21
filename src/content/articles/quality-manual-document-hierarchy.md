---
title: "The Quality Manual and QMS Document Hierarchy: Policies, SOPs, Work Instructions, and Records"
description: "How a GxP quality management system is structured as a document pyramid, from the quality manual down to executed records, with the contents, owners, and acceptance criteria for each tier."
pubDate: 2026-06-20
tags: ["quality-management-system", "document-control", "sop", "quality-manual", "gmp", "records", "quality-assurance"]
pillar: "quality-assurance"
tier: "Beginner"
---

Every regulated company runs on paper and electronic records that tell a consistent story: this is how we say we work, here is the proof we worked that way, and here is the evidence a product is safe. The quality management system (QMS) is the structure that holds that story together. The document hierarchy, often drawn as a pyramid, is how the QMS keeps thousands of documents coherent so that a policy at the top connects without contradiction to a signature on a batch record at the bottom.

If you are new to GxP quality, this is the first map you need. Inspectors think in terms of this hierarchy. When a regulator asks "show me your procedure for that," then "show me the record proving you followed it," they are walking the pyramid from the middle to the bottom. When they ask "where does your company commit to this," they are walking to the top. Understanding the tiers, what belongs in each, who owns each, and how they link is the foundation for almost everything else in quality.

---

## What the QMS document hierarchy is and why it exists

A QMS is the organized set of policies, processes, procedures, and records a company uses to direct and control quality. The document hierarchy is the layered architecture of those documents, arranged from broad and stable at the top to detailed and high-volume at the bottom.

The classic model has four tiers:

| Tier | Document type | Answers | Stability | Volume |
|------|---------------|---------|-----------|--------|
| 1 | Quality manual and quality policy | Why and what we commit to | Very stable | Few (often one) |
| 2 | Policies and quality system procedures | What we do and who is responsible | Stable | Tens |
| 3 | SOPs and work instructions | How, step by step | Changes regularly | Hundreds to thousands |
| 4 | Records, forms, logs | What actually happened | Created constantly | Very high volume |

Some organizations split tier 2 and tier 3 further, separating high-level policies from quality system procedures, or separating SOPs from work instructions and from forms and templates. The number of layers matters less than the principle: documents flow downward in detail and never contradict the layer above them.

### The regulatory basis

No single regulation says "you shall draw a four-tier pyramid." The hierarchy is the practical answer to several requirements that all demand controlled, consistent, traceable documentation.

For pharmaceutical GMP, the EU GMP Guide, Chapter 4 (Documentation) sets the expectation directly. It distinguishes between instructions (directions, requirements) and records or reports, and it lists document types including the Site Master File, specifications, manufacturing formulae, procedures (SOPs), protocols, and records. It states that documents should be designed, prepared, reviewed, and distributed with care, and that they must be approved, signed, and dated by appropriate authorized persons.

For US drug GMP, 21 CFR Parts 210 and 211 require written procedures across the operation. Section 211.22(d) requires that the responsibilities and procedures of the quality control unit be in writing and followed. Section 211.100 requires written procedures for production and process control. Section 211.180 sets record retention requirements. The phrase "written procedures, followed" recurs throughout the regulation, which is exactly why the SOP tier exists and why records exist to prove the procedures were followed.

For the quality system that ties it together, ICH Q10 (Pharmaceutical Quality System, 2008) describes a model that links management responsibility, the four core processes (process performance and product quality monitoring, CAPA, change management, and management review), and continual improvement. ICH Q10 expects documented policies and procedures and a quality manual or equivalent that describes the QMS.

For medical devices, ISO 13485:2016 (Medical devices, Quality management systems) is explicit. Clause 4.2.1 lists required documentation including a quality policy and quality objectives, a quality manual, documented procedures and records required by the standard, and documents needed to ensure effective planning, operation, and control of processes. Clause 4.2.2 requires the quality manual itself. The US device regulation, 21 CFR Part 820 (now the Quality Management System Regulation, QMSR, which incorporates ISO 13485 by reference effective February 2, 2026), requires documented procedures and document controls.

For the general management-system grammar that most QMS documents borrow, ISO 9001:2015 uses the term "documented information" to cover both documents and records, and clause 7.5 sets the rules for creating, updating, and controlling them.

The risk rationale is simple. Without a hierarchy, you get drift. Two SOPs describe the same task differently, a work instruction tells an operator to do something the policy forbids, a record asks for data the procedure never required. Inspectors find those contradictions quickly, and each one is a data integrity and compliance risk. The pyramid exists to make contradiction structurally hard.

---

## Tier 1: The quality policy and quality manual

### The quality policy

The quality policy is the short, signed statement of the organization's commitment to quality. It is usually a single page or a few paragraphs, approved at the highest level (often the CEO or site head), and it sets the tone everything else inherits.

What goes in it:

- A statement of commitment to meeting customer, regulatory, and safety requirements.
- A commitment to compliance with applicable GxP regulations and to continual improvement of the QMS.
- A framework for setting and reviewing quality objectives.
- A statement that the policy is communicated and understood within the organization.

ISO 9001:2015 clause 5.2 and ISO 13485:2016 clause 5.3 both require top management to establish a quality policy with these characteristics. The policy must be appropriate to the purpose of the organization, provide a framework for quality objectives, and include the commitments above.

Acceptance criteria: the policy is signed and dated by top management, it is current, employees can locate it and explain what it means for their job, and the quality objectives in use trace back to it.

### The quality manual

The quality manual is the top-level document that describes the QMS itself. It does not tell anyone how to run an autoclave. It describes the system: its scope, its structure, how the elements connect, and where to find the procedures that govern each element.

What goes in a quality manual:

| Section | Typical contents |
|---------|------------------|
| Scope | Which sites, products, and activities the QMS covers; any exclusions and justification |
| Quality policy | The policy itself, or a reference to it |
| Organization | Org structure, the independence of the quality unit, key roles and responsibilities |
| QMS description | The processes of the QMS and how they interact, often with a process map |
| Documentation structure | The document hierarchy, naming, and control approach (a reference to the document control SOP) |
| Cross-reference | A table mapping each regulatory requirement or standard clause to the procedure that satisfies it |
| Management commitment | Reference to management review, resource provision, and continual improvement |

ISO 13485:2016 clause 4.2.2 requires the quality manual to include the scope of the QMS with justification for any exclusions, the documented procedures or references to them, and a description of the interaction between QMS processes. ISO 9001:2015 dropped the explicit requirement for a quality manual, but most regulated companies keep one because it gives inspectors and new staff a single front door to the system, and because device and pharma frameworks still expect a top-level QMS description.

A pharmaceutical equivalent is the Site Master File. EU GMP and the PIC/S guidance on the Site Master File (PE 008) describe a document that summarizes a site's GMP activities, facilities, and quality system. It is not identical to a quality manual, but it serves the same "describe the system at a high level" purpose for a manufacturing site, and the two often cross-reference each other.

Worked example of a cross-reference table inside a quality manual:

| Requirement | Reference standard/regulation | Governing procedure |
|-------------|-------------------------------|---------------------|
| Document control | ISO 13485 4.2.4; 21 CFR 820 doc controls | SOP-QA-001 Document Control |
| Control of records | ISO 13485 4.2.5 | SOP-QA-002 Records Management |
| CAPA | ISO 13485 8.5; 21 CFR 820 | SOP-QA-010 CAPA |
| Internal audit | ISO 13485 8.2.4 | SOP-QA-020 Internal Audit |
| Management review | ISO 13485 5.6; ICH Q10 | SOP-QA-030 Management Review |

This table is what an inspector loves to see. It proves the company knows which requirements apply and has a named procedure for each.

Roles: the quality manual is owned by the head of quality (QA director or quality manager). Top management approves it. It is reviewed periodically, typically annually or on a defined cycle, and updated when the QMS structure changes (new site, new product type, reorganized quality unit).

Common mistakes at tier 1:

- A quality manual that is a copy-paste of the ISO standard with no description of how this specific company actually works. Inspectors notice generic, content-free manuals.
- A policy that promises continual improvement but is never reviewed and has no traceable objectives.
- Exclusions claimed without justification (device QMS).
- The manual references procedures that no longer exist or have been renumbered, breaking the chain.

---

## Tier 2: Policies and quality system procedures

Below the manual sit the documents that define what the company does for each major quality process and who is responsible, without yet describing the operator-level steps. Different companies draw the line between tier 2 and tier 3 differently. A common split:

- Tier 2 policies and quality system SOPs cover the QMS processes: document control, change control, deviation management, CAPA, complaints, supplier qualification, training, internal audit, management review, validation governance.
- Tier 3 covers the operational, task-level instructions.

What goes in a tier 2 quality system procedure:

- Purpose and scope.
- Definitions.
- Roles and responsibilities (RACI, or a responsibilities section).
- The process flow, usually with decision points, timelines, and escalation paths.
- References to applicable regulations and to lower-level SOPs and forms.
- Records generated and where they are retained.

These procedures are where the QMS comes alive as a connected system. A deviation procedure references the CAPA procedure; the change control procedure references validation, document control, and training. ICH Q10 expects exactly this kind of connected set of documented processes.

Worked example of how the tiers link for a single event:

> Quality policy (tier 1): "We investigate and correct quality problems and prevent recurrence."
> Deviation SOP (tier 2): "All deviations are logged within one business day, risk-classified as minor, major, or critical, investigated within defined timelines, and escalated to CAPA when systemic."
> Investigation work instruction (tier 3): "To document an interview, complete Form QA-060-F1, fields 1 through 9, recording who, what, when, and the as-found condition."
> Deviation record (tier 4): the completed Form QA-060-F1, signed and dated, attached to deviation DEV-2026-0142.

Each layer is consistent with the one above. The policy commits, the SOP defines the process and timelines, the work instruction tells the investigator how to capture the fact, and the record is the proof.

Roles: process owners (often functional managers) own their tier 2 procedures with QA approval. QA owns the QMS framework procedures themselves.

Acceptance criteria: every QMS process named in the quality manual has a current, approved tier 2 procedure; roles are unambiguous; timelines and escalation are defined; and the cross-references resolve to real, current documents.

---

## Tier 3: SOPs and work instructions

### Standard operating procedures

The SOP is the workhorse of the QMS. It is the controlled, step-by-step instruction for performing a defined task the same way every time. The regulatory demand for SOPs is everywhere: 21 CFR 211 repeatedly requires "written procedures," EU GMP Chapter 4 lists SOPs as a core document type, and ISO 13485 requires documented procedures for specified activities.

What goes in an SOP:

| Section | Purpose |
|---------|---------|
| Header | Document number, title, version, effective date, page x of y, owner |
| Purpose | Why this procedure exists |
| Scope | What and who it applies to; boundaries and exclusions |
| Definitions and abbreviations | Terms used |
| Responsibilities | Who performs each part |
| Materials/equipment | What is needed (where relevant) |
| Procedure | The numbered, sequential steps |
| References | Higher-tier documents, related SOPs, regulations |
| Attachments/forms | Forms, templates, flowcharts |
| Revision history | What changed and why, per version |

The procedure section is the heart of it. Steps should be in the order performed, written in plain imperative language ("Record the balance reading," not "The balance reading should be recorded"), and specific enough that a trained person performs the task consistently. Acceptance criteria, limits, and decision points belong in the steps, not in someone's memory.

### Work instructions

Work instructions are the most detailed tier of instruction, often a subset or expansion of an SOP for a single task, machine, or method. The difference between an SOP and a work instruction is largely a matter of granularity and convention. An SOP might govern "operation of the lyophilizer," while a work instruction covers "loading the lyophilizer shelves" with the exact sequence, torque values, and visual checks. Many small companies fold work instructions into SOPs; larger ones separate them so a single SOP does not balloon to fifty pages.

A good rule: if a step is long-lived, broadly applicable, and policy-flavored, it belongs higher; if it is a precise, hands-on "do this then this," it belongs in a work instruction or the procedure section of an SOP.

For the full mechanics of authoring procedures, see [how to write an SOP](/articles/how-to-write-an-sop) and [technical writing for GxP](/articles/technical-writing-for-gxp).

### How to write and issue a tier 3 procedure: the sequence

1. **Identify the need.** A new process, a gap found in an audit, a CAPA action, or a change control may trigger a new or revised SOP.
2. **Assign an owner and author.** The owner is usually the function that performs the task; the author is often a subject matter expert.
3. **Draft against a template.** Use the controlled SOP template so structure and required sections are consistent.
4. **Walk the process.** Verify each step against reality, ideally by observing or performing the task. Procedures written from memory at a desk are where the worst errors hide.
5. **Route for review.** SMEs check technical accuracy; affected functions check feasibility; QA checks compliance, clarity, and consistency with higher tiers.
6. **Resolve comments and approve.** Approvers sign and date. The quality unit approval is mandatory for GMP procedures.
7. **Set the effective date and plan training.** Read-and-understand or instructor-led training is assigned to affected staff before the effective date.
8. **Issue and make current.** The document control system makes the new version the only retrievable version and withdraws the prior one.
9. **Periodic review.** On a defined cycle (commonly two to three years, or per the document control SOP), confirm the procedure is still accurate or revise it.

Acceptance criteria for a good SOP: a trained user can perform the task correctly using only the SOP; steps are unambiguous and in sequence; all forms referenced exist and match; it does not contradict higher tiers; it is the current effective version; and training is complete for everyone who needs it.

Roles: author drafts, SMEs and affected functions review, QA reviews and approves, document control issues, training coordinator assigns training, end users follow it and feed back errors.

Common mistakes at tier 3:

- Procedures that describe an ideal that does not match what people actually do, so operators work to a shadow practice. This is a frequent inspection finding: the procedure and the practice diverge.
- Steps written in passive, vague language so two operators interpret them differently.
- Acceptance limits missing, so the procedure cannot fail anything.
- A referenced form that has a different version or different fields than the SOP describes.
- SOPs overdue for periodic review.
- Training not completed before the effective date, or no objective check that the trainee understood.

---

## Tier 4: Records, forms, and logs

Records are the proof. A record is the captured evidence that an activity happened, who did it, when, and what the result was. Forms, logbooks, batch records, test results, training records, calibration certificates, audit trails, and electronic data are all records.

The critical distinction: a blank form or template is a controlled document (it lives in the document control system and has a version). The completed form is a record (it captures a one-time event and is controlled as a record, not editable like a document). The same physical sheet is a tier 3 controlled template until it is filled in, then it becomes a tier 4 record.

### Why records are required

21 CFR 211 Subpart J (Records and Reports) mandates production and control records, master and batch records, laboratory records, distribution records, and complaint records, and sets retention periods (generally at least one year past the expiry date of a batch, or longer for certain products). EU GMP Chapter 4 requires records that provide a history of each batch. ISO 13485:2016 clause 4.2.5 requires control of records and a documented procedure for identification, storage, protection, retrieval, retention, and disposition.

Records are where data integrity lives. The ALCOA+ principles (Attributable, Legible, Contemporaneous, Original, Accurate, plus Complete, Consistent, Enduring, Available) describe what a good record must be. For the full treatment see [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and [data integrity foundations](/articles/data-integrity-foundations).

### What good record control looks like

| Attribute | What it means in practice |
|-----------|---------------------------|
| Attributable | The record shows who recorded each entry (initials, signature, user ID) |
| Legible | Handwriting is readable; electronic entries are human-readable |
| Contemporaneous | Recorded at the time the work was done, not reconstructed later |
| Original or true copy | The first capture, or a verified true copy |
| Accurate | Reflects what actually happened, with errors corrected by single line-through, initial, and date |
| Complete | No missing entries; "not applicable" is written where a field does not apply, never left blank |
| Retained | Stored securely for the defined retention period, retrievable on demand |

Worked example of a correct manual record entry and a corrected one:

> Original entry: Balance reading 2.0145 g, recorded by JM, 2026-06-20, 09:14
> Correction: 2.0145 struck with a single line, corrected value 2.1045 written beside it, initialed JM, dated 2026-06-20, reason "transcription error" noted.

The original value remains legible. That is the rule: never obliterate, never use correction fluid, never write over a figure. An inspector who sees an obscured original entry treats it as a data integrity flag.

### Forms and good documentation practices

The way records get filled in is governed by good documentation practices (GDocP): one person per signature, no shared logins, no blank spaces left, no backdating, no recording in advance. See [good documentation practices](/articles/good-documentation-practices) for the operator-level rules and [static vs dynamic records and true copies](/articles/static-dynamic-records-true-copies) for how the concepts apply to electronic data.

Roles: the person performing the task records contemporaneously; a reviewer (often QA or a second operator) performs the second-person review where required, for example batch record review; records management or QA controls retention and archival; document control owns the blank form versions.

Acceptance criteria: every required field is completed or marked N/A; entries are contemporaneous, attributable, and legible; corrections follow the single-line rule; the record is the current form version; and it is retained and retrievable for the required period.

Common mistakes at tier 4:

- Blank fields with no explanation, which an inspector reads as "the step may not have been done."
- Entries recorded after the fact (non-contemporaneous), revealed when a timestamp predates the activity or a whole page is in one ink and one hand.
- Corrections that hide the original value.
- Use of an obsolete form version, which means the record was captured against the wrong template.
- Shared logins or signatures that cannot be attributed to one person.
- Records that cannot be retrieved within the time an inspector allows.

---

## Document control: the system that holds the pyramid up

The hierarchy only works if there is a single system that controls versions, approvals, distribution, and retirement across all tiers. That system is document control, and it is itself governed by a tier 2 SOP. The full mechanics are in [document control fundamentals](/articles/document-control-fundamentals); here is what matters for understanding the hierarchy.

Core controls every QMS needs:

- **Unique identification and numbering.** Each document has a unique number and a naming convention that signals its type and owning function. A numbering scheme like SOP-QA-001 immediately tells you the type (SOP) and the owner (QA).
- **Version control.** Only one effective version exists at a time. Drafts, effective, and obsolete states are tracked.
- **Approval before effect.** Documents are approved, signed, and dated by authorized roles before they take effect. EU GMP Chapter 4 and ISO 13485 4.2.4 both require this.
- **Controlled distribution and retrieval of obsolete versions.** When a new version becomes effective, the old one is withdrawn so it cannot be used by mistake. Obsolete masters may be retained for the record but are clearly marked.
- **Change control linkage.** Significant document changes route through change control so impact, training, and effective date are managed. See [change control for validated systems](/articles/change-control-validated-systems).
- **Periodic review.** Documents are reviewed on a cycle to confirm they remain accurate.
- **For electronic systems, Part 11 and Annex 11 compliance.** Electronic documents and signatures must meet 21 CFR Part 11 and EU GMP Annex 11, including audit trails and validated electronic signatures. See [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11) and [electronic signatures implementation](/articles/electronic-signatures-implementation).

A simple state model for any controlled document:

| State | Meaning | Can it be used? |
|-------|---------|-----------------|
| Draft | Under authoring/review | No |
| Approved/Effective | Current, signed, in force | Yes, this is the only usable version |
| Superseded/Obsolete | Replaced by a newer version | No, retained for history only |
| Retired/Withdrawn | No longer needed at all | No |

The single most damaging document-control failure is uncontrolled copies. An operator prints an SOP, the SOP is revised, the printout stays taped to the wall, and now the floor is running an obsolete version. Inspectors look for exactly this. Controlled-copy stamps, point-of-use binders that are reconciled at each revision, and electronic systems that always serve the current version are the defenses.

---

## How the tiers connect: traceability up and down

The value of the hierarchy is bidirectional traceability.

**Downward (commitment to evidence):** a commitment in the quality policy flows into a defined process in a tier 2 procedure, into specific steps in an SOP, into fields on a form, into a completed record. You can start at the top and follow any commitment to the proof it was honored.

**Upward (evidence to authority):** pick any record and you should be able to trace it to the form version it used, to the SOP that required it, to the policy that mandated the process, to the regulation behind it. When an inspector points at a record and asks "why did you capture this and what governs it," you walk back up the pyramid.

Worked traceability example for a calibration:

| Tier | Document | Statement |
|------|----------|-----------|
| 1 | Quality policy | "We maintain equipment fit for its intended use." |
| 2 | Calibration program SOP | "All GMP measuring devices are calibrated on a defined schedule against traceable standards." |
| 3 | Balance calibration work instruction | "Calibrate using certified weights at five points; acceptance ±0.1%." |
| 4 | Calibration record | Balance BAL-014, five-point result, pass, technician sign/date, due date. |

If any link is broken (the SOP exists but no policy backs it, or a record exists with no governing SOP) you have a gap. Gap assessments and self-audits look for exactly these broken links. See [calibration and metrology program](/articles/calibration-and-metrology-program) and [QMS self-audit checklist](/articles/qms-self-audit-checklist).

---

## Designing or assessing a document hierarchy: a practical method

The method is the same for building a QMS from scratch and for assessing an existing one.

1. **List the applicable requirements.** Identify which regulations and standards apply (GMP, GCP, GLP, device, the specific CFR parts, ICH guidelines, ISO standards). This defines what the QMS must cover.
2. **Map the required processes.** For each requirement, name the QMS process that satisfies it. Document control, change control, deviation, CAPA, complaints, training, supplier qualification, internal audit, management review, validation, and so on.
3. **Confirm a tier 1 description exists.** Quality policy plus quality manual (or Site Master File for a pharma site) that describes the system and cross-references the processes.
4. **Confirm a tier 2 procedure for each process.** Every named process has a current, approved governing procedure with clear roles.
5. **Confirm tier 3 procedures exist for the tasks.** Each operational task that needs consistency has an SOP or work instruction.
6. **Confirm tier 4 records are defined.** Each procedure that should generate evidence has a controlled form and a defined retention.
7. **Check the links both ways.** Spot-check traceability up and down. Pick records and trace to policy; pick policy commitments and trace to records.
8. **Check the control system.** Confirm versioning, approvals, distribution, obsolete-copy control, periodic review, and (for electronic) Part 11 and Annex 11 controls are working.

A right-sized hierarchy is the goal. A tiny startup does not need the same document depth as a multi-site manufacturer. ICH Q10 and risk-based thinking both support scaling the QMS to the size and complexity of the operation. Too few documents and you cannot prove consistency; too many and people cannot find or follow them, which is its own compliance risk. For how risk drives the depth, see [quality risk management](/articles/quality-risk-management) and [pharmaceutical quality system](/articles/pharmaceutical-quality-system).

---

## Common inspection-finding patterns across the hierarchy

These are the patterns regulators cite again and again, stated generically:

- **Procedure not followed.** A written procedure exists, but the records or observed practice show it was not followed. This is one of the most common GMP citations and maps directly to the "written procedures, followed" requirement in 21 CFR 211.
- **No procedure for an activity that needs one.** A significant activity is performed with no governing SOP, so there is no defined, repeatable method.
- **Procedure and practice diverge.** Operators have developed a workaround that the SOP does not reflect, so the document is fiction.
- **Uncontrolled or obsolete documents in use.** An old version is in use at the point of work.
- **Incomplete records.** Blank fields, missing signatures, missing dates.
- **Non-contemporaneous or non-attributable records.** Entries made after the fact, shared logins, signatures that cannot be tied to a person.
- **Broken traceability.** A form references an SOP that no longer exists; a quality manual references retired procedures.
- **Overdue periodic review.** Documents past their review date, signaling the system is not maintained.
- **Weak quality manual.** A generic, content-free top-level description that does not reflect the actual operation.

Each of these is a break somewhere in the pyramid. Reading findings this way (which tier failed, and was it a content failure or a control failure) is how experienced quality professionals triage and remediate. See [deviation management](/articles/deviation-management), [what is a CAPA](/articles/what-is-a-capa), and [FDA warning letters patterns](/articles/fda-warning-letters-patterns).

---

## Interview-ready: questions and strong answers

**"Walk me through the QMS document hierarchy."**
Name the four tiers and what each answers: tier 1 quality policy and quality manual (why and what we commit to), tier 2 policies and quality system procedures (what we do, who is responsible), tier 3 SOPs and work instructions (how, step by step), tier 4 records and forms (what actually happened). Stress that detail increases and stability decreases as you go down, and that no tier may contradict the one above it.

**"What is the difference between a document and a record?"**
A document is an instruction or specification that is version-controlled and tells you what to do (an SOP, a blank form). A record is the captured evidence that something was done (a completed form, a batch record, a result). A blank template is a controlled document; once filled in, it becomes a record and is controlled as a record. They are governed by different rules: documents by document control, records by records management and ALCOA+.

**"What is the difference between an SOP and a work instruction?"**
Mostly granularity. An SOP governs a defined task or process; a work instruction is the most detailed, hands-on level, often for a specific machine or step. Many companies merge them. What matters is that the right level of detail exists for consistent performance, and that whichever document is used does not contradict the policy above it.

**"Where does the requirement for written procedures come from?"**
Cite specifics: 21 CFR 211 requires written procedures throughout (for example 211.22(d) for the quality unit and 211.100 for production controls), EU GMP Chapter 4 defines document types and control, ICH Q10 describes the pharmaceutical quality system, and for devices ISO 13485:2016 (incorporated by the US QMSR effective February 2, 2026) requires documented procedures, a quality policy, a quality manual, and control of records.

**"What is a quality manual and is it still required?"**
The top-level document describing the QMS: scope, organization, process interactions, and cross-references to procedures. ISO 13485 clause 4.2.2 still requires it. ISO 9001:2015 removed the explicit requirement, but most regulated firms keep one because it gives inspectors and new staff a single entry point and a requirement-to-procedure map.

**"An operator is using a printed SOP. How do you know it is the right version?"**
Through document control: the printout should be a controlled copy with a stamp or be retrieved live from the electronic system that only serves the effective version. At each revision, controlled copies are reconciled and obsolete ones withdrawn. An uncontrolled printout is a finding waiting to happen.

**"How would you correct an error in a paper record?"**
Single line through the original so it stays legible, write the correct value, initial, date, and add a brief reason. Never use correction fluid, never write over the figure, never obliterate the original. This preserves attributability and the audit trail and keeps the record ALCOA+ compliant.

**"You inherit a QMS and need to assess it. What do you do?"**
Map applicable requirements to QMS processes, confirm a tier 1 description exists, confirm a current approved tier 2 procedure for every process, confirm tier 3 procedures for the tasks, confirm tier 4 records and retention, then spot-check traceability up and down and verify the document control system (versioning, approvals, obsolete control, periodic review, Part 11 and Annex 11 for electronic). Right-size to the operation.

---

## Practical tips

- Keep the quality manual short and specific to your operation. Its job is to describe the system and point to procedures, not to repeat them.
- Build the requirement-to-procedure cross-reference table early. It is the single most useful artifact for inspections and for new hires.
- Write SOPs by walking the process, not from a desk. The gap between the desk version and reality is where findings come from.
- Use a numbering convention that encodes type and owner so anyone can place a document in the hierarchy at a glance.
- Treat the blank-form-becomes-record transition deliberately: control the template version, then control the completed record under ALCOA+.
- Fight uncontrolled copies relentlessly. Point-of-use control and electronic single-source systems are the durable fix.
- Run periodic reviews on schedule. Overdue reviews are a cheap finding to avoid and a signal of overall QMS health.
- Scale the system to risk and size. Depth should follow process complexity, not the desire to look thorough.

### Related reading

- [Document control fundamentals](/articles/document-control-fundamentals)
- [How to write an SOP](/articles/how-to-write-an-sop)
- [Good documentation practices](/articles/good-documentation-practices)
- [Pharmaceutical quality system](/articles/pharmaceutical-quality-system)
- [ALCOA+ in detail](/articles/alcoa-plus-deep-dive)
- [Data integrity foundations](/articles/data-integrity-foundations)
- [Change control for validated systems](/articles/change-control-validated-systems)
- [Training program for GxP](/articles/training-program-gxp)
- [QMS self-audit checklist](/articles/qms-self-audit-checklist)
- [Medical device quality system (QMSR)](/articles/medical-device-quality-system-qmsr)
- [What is GMP](/articles/what-is-gmp)
- [Management review under ICH Q10](/articles/management-review-q10)
