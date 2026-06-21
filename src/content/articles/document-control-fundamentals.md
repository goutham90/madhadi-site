---
title: "Document Control in GxP: How Controlled Documents Actually Work"
description: "A working guide to GxP document control: the document hierarchy, SOP lifecycle, version control, effective dates, training linkage, electronic systems, and what inspectors cite."
pubDate: 2025-07-27
tags: ["document control", "SOP", "QMS", "GxP", "foundations"]
tier: "Beginner"
pillar: "quality-assurance"
---

Every regulated facility runs on controlled documents. SOPs, forms, batch manufacturing records, specifications, protocols, analytical methods, validation documents, all of them exist in a managed system where who can write them, who approves them, when they take effect, and when they retire is defined and enforced.

Document control sounds administrative, but it carries real regulatory weight. An SOP followed correctly is evidence. An undated entry on a form is a data integrity problem. A procedure used after its expiry date is a GMP violation. The document control system is the infrastructure that decides whether a record is defensible or indefensible.

It also sits underneath the legal expectation. The US predicate rules say it plainly. 21 CFR 211.100(b) requires that production and control procedures be followed and documented at the time of performance, and 21 CFR 211.180 sets record retention at one year past the expiration date of the batch, or longer for certain products such as those with no expiration date. EU GMP EudraLex Volume 4, Chapter 4 ("Documentation," revised 2011) opens with the same idea: good documentation is an essential part of the quality assurance system, and the firm must define, control, monitor, and record all activities that affect product quality. For medical devices, 21 CFR 820.40 ("Document controls") and ISO 13485:2016 clause 4.2.4 ("Control of documents") carry an almost identical expectation, and FDA's Quality Management System Regulation (QMSR, published 2024, effective February 2, 2026) aligns the US device rule with ISO 13485. Document control is how those words become a working system rather than a slogan.

---

## What Is a Controlled Document?

A controlled document is any document used to direct or record GxP activities that is subject to formal approval, version management, and access control. Controlled documents must be:

- Approved by authorized personnel before use
- Uniquely identified (document number, title, version)
- Dated, with an effective date on or after approval, not the date it was drafted
- Available at the point of use. The analyst running a test needs the current method accessible in the lab, not filed in a cabinet in QA
- Reviewed periodically and retired when superseded

Not every document in a company is controlled. Internal memos, drafts in review, training slides, and general business records usually are not controlled in the GxP sense. The test is function, not format: if a document governs or records a GxP activity, it must be controlled, regardless of whether it is a procedure, a spreadsheet template, a label proof, or a configuration specification.

A useful distinction for newcomers is the difference between instructional documents and evidence documents. Instructional documents (policies, SOPs, work instructions, methods, specifications) tell people what to do. Evidence documents (completed batch records, logbooks, completed forms, test results) prove what was done. Both are controlled, but they age differently. An instructional document is revised and superseded over time. An evidence record is frozen the moment it is created and is never edited, only corrected through a controlled, attributable correction. Confusing the two is a common early mistake. See [Good Documentation Practices](/articles/good-documentation-practices) for how those evidence records have to be written, and [static vs dynamic records and true copies](/articles/static-dynamic-records-true-copies) for how the same idea applies to electronic data.

### The fields a controlled document must carry

Inspectors and reviewers look for a consistent header and footer on every page. A controlled document that does not identify itself on each page can be split, photocopied in part, or mixed with another version without anyone noticing. The minimum field set:

| Field | Why it is there |
|-------|-----------------|
| Document number | Stable identifier that everything else references |
| Title | Plain description of what the document governs |
| Version / revision | Which iteration this is |
| Effective date | The date from which this version must be followed |
| Page X of Y | Proves no page is missing |
| Approval signatures / e-signature block | Shows who authorized use |
| Controlled-copy / status marking | Distinguishes a live controlled copy from an uncontrolled printout |

A practical rule: if a single page is found on the floor of a manufacturing suite, a reader should be able to tell from that one page which document it belongs to, which version, and whether it is current. "Page X of Y" plus the document number and version on every page is what makes that possible.

---

## The Document Hierarchy

Most quality systems use a four-level pyramid. The pyramid is not mandated by a single regulation, but it maps cleanly to how ISO 9001:2015 and ICH Q10 (2008) describe documented systems, and inspectors expect to see something like it.

**Level 1: Quality Policy and Quality Manual.** The top-level commitment statement. It describes the organization's quality philosophy, the scope of the quality system, and how the QMS is structured. Usually short. Signed by senior leadership. It is the document that ties everything below it to management accountability. See [the quality manual and document hierarchy](/articles/quality-manual-document-hierarchy) for what goes into Level 1.

**Level 2: Procedures (SOPs).** Standard Operating Procedures describe how major quality system processes work. An SOP for deviation management describes the process end to end: how to open a deviation, who investigates it, how it is classified, what closure requires. Level 2 documents are usually process-level rather than task-level.

**Level 3: Work Instructions and Methods.** More granular than SOPs. A work instruction for a specific chromatography system tells the analyst exactly what to do, step by step, on that instrument. An analytical method specifies the exact conditions under which a test is run. Level 3 gets into the specifics that a Level 2 SOP deliberately leaves to the technical document.

**Level 4: Forms, Records, and Templates.** The blank forms that are filled in to create records: batch records, deviation forms, CAPA forms, change control requests, calibration records, logbooks. These are controlled because the structure of the form decides what data gets captured. A form that has no field for a date will produce records with no date.

| Level | Document type | Question it answers | Typical owner |
|-------|---------------|---------------------|---------------|
| 1 | Policy / Quality Manual | Why and at what commitment | Senior leadership |
| 2 | SOP | How the process works | Process or QA function |
| 3 | Work instruction / method | Exactly how a task is done | Subject matter expert |
| 4 | Form / template / logbook | What data is captured | Process owner |

One practical rule keeps the pyramid healthy: a lower level may add detail but must never contradict the level above it. When a work instruction quietly disagrees with its parent SOP, the firm has two procedures and no single source of truth. Inspectors find these contradictions by reading the documents side by side, which is why a periodic review has to check upward and downward consistency, not just whether the document is accurate on its own.

A second rule is about reference direction. A document should reference downward (an SOP can name the forms it uses) and sideways (to related SOPs), but a Level 4 form should not contain instructions that belong in the Level 2 procedure. When the real instructions live in the form's footnotes, training and revision control of those instructions become invisible, because the firm thinks of the form as "just a template."

---

## The SOP Lifecycle

**Step 1: Drafting.** The document owner writes the draft. The author is usually the person closest to the process. A QC analyst writes the first draft of a test method; a manufacturing supervisor writes the first draft of a manufacturing procedure. The draft lives outside the controlled system until it enters formal review. For how to write the draft so it survives review and use, see [how to write an SOP](/articles/how-to-write-an-sop) and [technical writing for GxP](/articles/technical-writing-for-gxp).

**Step 2: Review.** The draft circulates to functional reviewers. Who reviews depends on the document. A manufacturing SOP typically goes to Manufacturing, QA, and often Engineering. Reviewers comment, the author revises, and this continues until consensus. The review itself must be documented, because an inspector will ask who reviewed the document and what they checked.

**Step 3: Approval.** QA approval is required for all GxP documents. Depending on the document, other functions may also be required approvers, such as Manufacturing management for a manufacturing procedure or the validation lead for a system SOP. Approval is the formal authorization to use the document. Approval is not the same as review, and the same person should not be the sole reviewer and sole approver of a document they wrote. Segregation of duties here is the same control that [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11) expect for electronic approvals.

**Step 4: Effective Date.** Documents carry an effective date that is on or after the approval date. The document cannot be used before it is effective. A common and useful pattern is to set the effective date a defined number of days after approval, often two to four weeks, so there is a controlled window to complete training before anyone has to follow the new version. The effective date is the trigger for the training requirement.

**Step 5: Training.** Before affected personnel can work to a newly effective procedure, they must be trained on it, and the training must be documented. An analyst running a test under a new method before their training record is complete is a GMP violation, even if they read the procedure on their own. Training linkage is the join between the document system and the [training program](/articles/training-program-gxp); when the two systems do not talk to each other, people fall through the gap.

**Step 6: Periodic Review.** SOPs are reviewed on a defined schedule, often every two years, with shorter intervals for higher-risk procedures. The review confirms the document is still accurate, current, and needed, and that it is consistent with the documents above and below it. If changes are required, a revision is initiated. If the document is still accurate, the review is documented and the clock resets. A review is a real evaluation, not a rubber stamp; "reviewed, no change" on a procedure that references a decommissioned instrument is a finding waiting to happen.

**Step 7: Revision.** Any change to a controlled document requires a formal revision through change control. The prior version is retired and archived, users are trained on the new version, and the full version history is kept. There is no such thing as a minor edit made quietly in place. If the content changed, there is a revision. Linking document revisions to [change control for validated systems](/articles/change-control-validated-systems) is what keeps the two records consistent.

**Step 8: Retirement.** When a document is no longer needed because a process was discontinued or a system was decommissioned, it is formally retired. It is removed from active use, but the document and its associated records stay in the archive for the full retention period. Deleted records are always a problem. Retirement is an action you take on purpose and record, not something that happens because a document quietly stopped being used.

### A worked example: tracing one SOP through its life

Take a fictional but realistic procedure, "QA-0142, Handling of Out-of-Specification Laboratory Results, Rev C." Here is how its key events read in the document control record:

| Date | Event | Recorded by | State after event |
|------|-------|-------------|-------------------|
| 04 Mar | Revision initiated under change control CC-0231 | Author (QC) | Rev C in draft |
| 18 Mar | Functional review complete (QC, QA, lab management) | Reviewers | Rev C in approval |
| 21 Mar | Approved (e-signatures: author, QC manager, QA) | Approvers | Rev C approved, not yet effective |
| 04 Apr | Effective date reached; Rev B retired automatically | EDMS | Rev C effective, Rev B obsolete |
| 21 Mar - 03 Apr | Training assigned to 14 analysts; 14/14 complete by 03 Apr | Training system | All affected users trained before effective date |
| 02 yrs later | Periodic review due; reviewed, minor revision to Rev D | Owner | Cycle repeats |

Read that table the way an inspector does. The effective date (04 Apr) is after approval (21 Mar). Training (all 14 complete by 03 Apr) finished before the effective date, not after. The revision is tied to a change control record (CC-0231), so the "why" is documented. The prior version went obsolete the moment the new one became effective, so there is no window where two live versions existed. Each of those is a control, and each is something an inspector can ask to see.

---

## Document Numbering and Version Control

Every controlled document needs a unique identifier that stays with it through all revisions. Common conventions:

- A function prefix plus a sequential number, for example a QA standard operating procedure numbered in a QA series
- A type prefix that separates quality system documents from QC documents from manufacturing documents
- A site or department code prefixed to the number for multi-site organizations

The number never changes. Only the revision changes. The most important rule is that the identifier is stable for the life of the document, because everything that references it, training records, related procedures, audit findings, points to that number.

Revision identifiers are typically alphabetical (Rev A, Rev B) or numeric (Rev 1, Rev 2, Version 1.0, Version 1.1). Whichever convention is chosen has to be defined and applied consistently. Numeric schemes with a major and minor part (1.0, 1.1, 2.0) let you signal the scope of a change, where a major increment means a significant rewrite and a minor increment means a small correction, but only if your procedure defines what counts as major versus minor. An undefined scheme invites arguments and inconsistency.

A concrete way to define the major/minor split, written into the document control SOP so it is not a judgment call:

| Change type | Increment | Training impact |
|-------------|-----------|-----------------|
| New process step, changed acceptance criterion, changed responsibility, anything affecting how the task is performed | Major (Rev C to Rev D) | Re-training required for affected roles |
| Typo, formatting, corrected cross-reference, updated owner name, no change to instructions | Minor (Rev 2.1 to 2.2) | Read-and-acknowledge or no re-training, per SOP |

Tying training impact to the increment type removes the temptation to call a real change "minor" to skip re-training. If a change is large enough to need re-training, the numbering should say so on its face.

Each version should carry a revision history that summarizes what changed and why. The revision history is itself a record, and inspectors read it closely. A revision history that says only "general updates" for three consecutive versions tells an inspector the firm does not actually track its own changes. A defensible revision history entry names the section that changed and the reason:

> Rev C to Rev D: Section 6.3 acceptance limit corrected from "not less than 95.0%" to "not less than 98.0%" to align with updated specification SPEC-088. Change control CC-0231.

---

## Electronic versus Paper Document Management

Most modern GxP organizations run an electronic document management system (EDMS). Commercial platforms in common use include Veeva Vault QualityDocs, MasterControl, and OpenText Documentum, among others. Some smaller organizations still manage documents on paper or in hybrid systems where the master is paper but distribution is electronic. See [hybrid paper and electronic records](/articles/hybrid-paper-electronic-records) for the specific risks of the in-between case.

A paper-based system is fully acceptable to regulators when it works. The catch is that the manual controls have to be strong enough to prevent the failure modes that paper invites: an obsolete copy left at a workstation, a master document edited without a revision, a distribution list that nobody updated when a new lab opened. Paper systems live or die on the discipline of controlled-copy stamping, distribution logs, and physical retrieval of superseded copies.

Electronic systems remove most of those manual failure modes:

- Automated version control retires the old version the instant the new one becomes effective, so the wrong version is never the one the system serves
- Electronic approval workflows capture who reviewed, who approved, and when, without a separate routing sheet
- Automatic notification routes documents to reviewers and approvers and chases overdue actions
- Training linkage notifies affected users when a new version is effective and can block access until training is recorded
- Search and retrieval turns an inspection request that once meant a trip to a records room into a query

Running a GxP-compliant EDMS brings its own requirements:

- Electronic signatures for approvals that meet 21 CFR Part 11 (and the equivalent expectations in EU GMP Annex 11 for systems used in EU-supplied operations)
- A complete audit trail showing who reviewed, who approved, when, and what changed
- Access controls that prevent unauthorized modification and enforce segregation between author, reviewer, and approver roles
- Backup, restore, and disaster recovery provisions that are tested, not just documented
- Validation of the EDMS itself, since the system that controls your documents is a GxP computerized system

For the regulatory framework behind those electronic-signature and audit-trail requirements, see [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11) and [audit trail design and review](/articles/audit-trail-design-and-review). For implementing the EDMS itself as a validated system, see [electronic signatures implementation](/articles/electronic-signatures-implementation).

Even a well-configured system has human failure modes. Approving a document without reading it, recording training on a procedure you never opened, or marking a periodic review complete without actually reviewing it all undermine the system from the inside. The technology enforces the workflow. It does not enforce honesty, and inspectors know the difference. A clean audit trail showing a document approved nine seconds after it entered the queue tells its own story.

### Controlled copies in a paper or hybrid world

When paper copies are printed for use at the bench or in the suite, the firm needs a way to tell a live controlled copy from an uncontrolled printout. Common mechanisms:

- A red or colored "CONTROLLED COPY" stamp with a copy number, logged in a distribution register
- A printed watermark or footer that the EDMS applies, with a print date and "uncontrolled if printed" warning on uncontrolled views
- A reconciliation step at the next revision: every controlled copy issued must be retrieved and destroyed, and the destruction logged, before the new version is distributed

The acceptance criterion for this control is simple: at any moment, the firm can say exactly how many controlled copies of a document exist and where each one is. If it cannot, an obsolete copy can survive in use and nobody will know until an inspector finds it.

---

## What Makes an SOP Effective versus Compliant

An SOP can be technically compliant, meaning approved, versioned, and current, and still be useless. An effective SOP:

- Describes what the user actually does, not what QA imagines they should do
- Is specific enough that two different qualified people would execute it the same way
- Does not leave critical decisions undefined. "As appropriate" and "if necessary" are not acceptable for steps that affect product quality or data integrity
- Does not force the user to read five other documents at the bench just to understand one step
- Is written at the right level for the intended reader. A manufacturing operator needs steps, not chemistry theory; a method developer needs the rationale, not just the recipe

SOPs written by QA purely for the audit, with no input from the people who do the work, tend to be accurate on paper and ignored in practice. The clearest sign of an ineffective SOP is that everyone performs the task from memory and treats the document as something to fill out afterward. When the written procedure and the real practice drift apart, the document stops protecting the firm and starts incriminating it, because the firm is now in violation of its own approved procedure every time the task is done. The fix is not to loosen the SOP into vagueness; it is to write procedures with the operators and analysts in the room, then verify by watching the task actually performed.

---

## Roles and Responsibilities

Document control fails most often at the seams between roles, so it pays to name them. A typical assignment of responsibilities:

| Role | Responsibility in document control |
|------|-----------------------------------|
| Document owner / author | Drafts content, keeps it technically accurate, initiates periodic review and revisions on time |
| Functional reviewers (SMEs) | Confirm the document is correct and executable for their function, document what they checked |
| QA / quality unit | Approves all GxP documents, owns the document control SOP, enforces the lifecycle, the final authority on whether a document is fit for use |
| Document control administrator | Runs the EDMS or paper system: assigns numbers, routes workflows, retires versions, reconciles controlled copies, maintains the master list |
| Training coordinator | Maps documents to roles, assigns and tracks training tied to effective dates |
| Line managers / supervisors | Make sure their people are trained before working to a new version, and that only current versions are in use at the point of use |
| Inspected SMEs | During an inspection, retrieve the requested document and explain the lifecycle evidence |

The quality unit's authority to approve all GxP procedures is not a courtesy. It comes straight from 21 CFR 211.22(c) and (d), which require that the quality control unit approve procedures and have written responsibilities and procedures of its own. When someone outside QA approves a GxP document as the final authority, that is a structural finding, not a paperwork slip.

---

## What Inspectors Cite in Document Control

Both FDA and EU inspectors spend real time on document control because it underpins everything else. The recurring findings:

**Obsolete documents at the point of use.** The procedure on the shelf is Revision B; the current controlled version is Revision D. To an inspector this means the training process failed, controlled access failed, or people are working outside the system. It is one of the fastest ways to lose an inspector's confidence in the whole quality system.

**Undated or incomplete records.** A batch record with a step initialed but not dated breaks the contemporaneous principle in ALCOA+. The date is what makes the record contemporaneous. Missing dates and entries are among the most frequently cited documentation deficiencies in drug manufacturing inspections. See [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) for why each attribute matters.

**Unapproved use of documents.** Methods used before formal approval, or a procedure used at a new site without site-specific approval. The content might be fine; the authorization is missing, and authorization is the point.

**Training records that do not line up with effective dates.** If a procedure became effective on a given date and an analyst's training record shows completion before that date, someone recorded training before the document existed. That signals a system where training is paperwork rather than learning. The reverse gap, people working to a procedure before their training is recorded, is just as serious.

**Revision history gaps.** Content changed without a formal revision. Edits made in place, outside change control, are still changes. If the document changed and there is no record of why, the firm cannot show it controlled its own quality documentation.

**No master list of controlled documents.** The firm cannot produce, on request, a current index of every effective controlled document with its version. Without that list, the firm has no way to prove which version is current, and an inspector has no way to test it. ISO 13485 clause 4.2.4 and 21 CFR 820.40(b) make this index explicit for devices; GMP firms are expected to maintain the equivalent.

These findings rarely appear alone. An obsolete procedure at point of use plus a training record that does not match plus a thin revision history together describe a system that exists on paper but is not actually governing work. That pattern is what turns individual observations into a systemic citation, and it is the kind of conclusion that drives [483 observations and warning letters](/articles/fda-warning-letters-patterns).

---

## Document Control for Electronic Records

When GxP records are born electronic, data in a LIMS, results in a chromatography data system, electronic batch records in an MES, the principles of document control still apply to the data, but the mechanisms change. The "document" is now the data record itself:

- Access controls replace physical document custody
- System timestamps replace handwritten dates
- Audit trails replace manual change records
- Backup and archival systems replace the records room

The questions are identical: who created the record, when, what it contained, and whether it was changed and why. The controls that answer those questions are technical rather than physical, and the validation of those systems is what gives regulators confidence the controls actually work. For the broader principles tying records and metadata together, see [data integrity foundations](/articles/data-integrity-foundations) and [the data lifecycle and metadata](/articles/data-lifecycle-and-metadata).

One practical consequence: in an electronic environment, the line between "document control" and "data integrity" blurs, and that is appropriate. Controlling which version of a configuration is in production, who can approve a change to a calculation in a validated spreadsheet, and how an obsolete report template is retired are all document control problems wearing data integrity clothing. Treating them as one discipline rather than two competing ones is what keeps the controls coherent. See [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation) for the spreadsheet case in particular.

---

## Retention, Archival, and Destruction

A controlled document does not disappear when it is retired. It moves to an archive and stays there for a defined retention period. Getting retention wrong is a quiet but serious failure: destroy a record too early and there is nothing to defend the batch, keep it in active use too long and an obsolete version can resurface.

The retention drivers worth knowing:

- **21 CFR 211.180** requires batch production and control records be kept for at least one year after the batch expiration date (longer for products with no expiration date, and certain records longer). 21 CFR 211.180(c) requires records be readily available for inspection.
- **21 CFR 820.180 and the QMSR / ISO 13485 clause 4.2.5** require device records be retained for the lifetime of the device but not less than two years from date of release.
- **EU GMP Chapter 4** sets retention for batch documentation at least one year after batch expiry or five years after certification by the Qualified Person, whichever is longer.
- **Clinical (GCP) records** under ICH E6(R2) and applicable regional rules have their own, often longer, retention requirements; see [the trial master file](/articles/etmf-trial-master-file).

Two acceptance criteria define a healthy retention program. First, the retention period for every record type is defined in a procedure, not decided ad hoc. Second, destruction is a controlled, approved, documented event, never a casual cleanup. A destruction record that says what was destroyed, when, under whose authority, and confirming the retention period had elapsed is what separates legitimate disposal from a data integrity problem. For the systems angle, archival and restore have to be validated, not assumed; see [backup, restore and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation).

---

## Interview-Ready: Questions and How to Answer Them

Document control comes up in almost every GxP quality interview because it is foundational and it reveals how someone thinks about evidence. Common questions and strong answers:

**"What makes a document controlled?"**
Approval before use, a unique identifier, version control, an effective date on or after approval, availability at the point of use, periodic review, and formal retirement. The test is function: if it directs or records a GxP activity, it is controlled regardless of format.

**"Why is the effective date different from the approval date, and which comes first?"**
Approval comes first; the effective date is on or after it. The gap exists so training can be completed before anyone has to follow the new version. The effective date is the trigger for both the training requirement and the retirement of the prior version. If a procedure were used before its effective date, that would be unapproved use.

**"An operator is found using Rev B at the bench, but Rev D is current. Walk me through what that tells you."**
It is not one problem, it is a chain. Either training on Rev D failed, controlled-copy retrieval of Rev B failed, or point-of-use access control failed. I would check whether the operator was trained on Rev D and when, whether any work was done to the wrong version, whether the product is affected, and whether other copies of Rev B are still in circulation. Then I would open a deviation, contain it, and look for the systemic cause rather than treating it as a one-off.

**"How do you handle a change to a controlled document?"**
Through change control. The change is assessed, a revision is drafted, reviewed, and approved, an effective date is set, affected roles are re-trained, the prior version is retired and archived, and the revision history records what changed and why. There is no in-place edit, and the document change and the change control record stay linked.

**"What is the difference between a major and a minor revision?"**
It must be defined in the document control SOP, not left to opinion. A common split: a major revision changes how the task is performed or its acceptance criteria and triggers re-training; a minor revision is cosmetic (typos, formatting, corrected cross-references) with no change to instructions. Tying re-training to the major increment prevents people from calling a real change "minor" to dodge training.

**"How would you prove to me that your current procedures are the ones in use?"**
I would produce the master list of controlled documents showing each effective version, then pull two or three at the point of use and confirm they match. I would also show the training records tied to those versions' effective dates. That triangulation, master list, point of use, training, is what demonstrates the system actually governs work.

**"Why does QA have to approve GxP documents?"**
Because 21 CFR 211.22 gives the quality unit the authority and responsibility to approve procedures, and that independence is what keeps a process owner from approving their own shortcut. QA is the final authority on fitness for use.

For a broader set, see [the GxP quality interview preparation guide](/articles/gxp-quality-interview-preparation).

---

## Getting a Document Control System Off the Ground

If you are building document control at a new facility or repairing an inadequate one, work in this order:

1. Write a document control SOP first. It defines the hierarchy, numbering, approval requirements, review periods, the difference between major and minor revisions, and the retirement process. Everything else hangs off this one document.
2. Inventory every document currently in use. Assign numbers, confirm the current version of each, and flag any document that has never been formally approved. Unapproved documents in active use are the highest-priority gap.
3. Establish ownership. Every controlled document needs an identified owner who is accountable for its accuracy and for initiating its periodic review.
4. Build a training matrix that maps documents to roles. Each role has a defined set of documents it must be trained on, so that when a document is revised the system knows exactly who needs retraining.
5. Define how training is recorded. Paper sign-off, a learning management system, or an EDMS-integrated training module all work. What matters is that a reliable record is created and that it links to the document version.
6. Set the periodic review schedule and assign responsibility for executing it, with enough lead time that reviews happen before documents expire rather than after.
7. Stand up the master list of controlled documents and keep it current. It is the single artifact that lets you, and an inspector, test whether the system is real.

The document control system is the skeleton of the quality management system. Get it right and every other element, deviations, CAPA, change control, validation, has a stable place to attach to. For how it fits the wider system, see the [pharmaceutical quality system](/articles/pharmaceutical-quality-system) overview and [GxP roles and responsibilities](/articles/gxp-roles-responsibilities).
