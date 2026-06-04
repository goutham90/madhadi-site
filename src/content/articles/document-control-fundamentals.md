---
title: "Document Control in GxP: How Controlled Documents Actually Work"
description: "A complete guide to GxP document control, the document lifecycle, SOP structure, version control, effective dates, training linkage, and what inspectors look for."
pubDate: 2025-07-27
tags: ["document control", "SOP", "QMS", "GxP", "foundations"]
tier: "Beginner"
pillar: "quality-assurance"
---

Every regulated facility runs on controlled documents. SOPs, forms, batch manufacturing records, specifications, protocols, analytical methods, validation documents, all of them exist in a managed system where who can write them, who approves them, when they take effect, and when they're retired is defined and enforced.

Document control is one of those quality system elements that sounds administrative but has significant regulatory weight. An SOP followed correctly is evidence. An undated entry on a form is a data integrity problem. A procedure used after its expiry date is a GMP violation. The document control system is the infrastructure that makes the difference between defensible and indefensible records.

---

## What Is a Controlled Document?

A controlled document is any document used to direct or record GxP activities that is subject to formal approval, version management, and access controls. Controlled documents must be:

- Approved by authorized personnel before use
- Uniquely identified (document number, title, version)
- Dated (effective date after approval, not the date it was written)
- Available at the point of use (the analyst running a test needs the current SOP accessible in the lab, not filed in a cabinet in QA)
- Reviewed periodically and retired when superseded

Not every document in a company is a controlled document. Internal memos, draft documents in review, and general business records typically aren't controlled in the GxP sense. But anything that governs or records a GxP activity must be.

---

## The Document Hierarchy

Most quality systems use a hierarchical structure:

**Level 1: Quality Policy / Quality Manual**
The top-level commitment statement. Describes the organization's quality philosophy, the scope of the quality system, and how the QMS is structured. Usually brief. Signed by senior leadership.

**Level 2: Procedures (SOPs)**
Standard Operating Procedures describe how major quality system processes work. An SOP for deviation management describes the deviation process end-to-end: how to open a deviation, who investigates it, how it's classified, what constitutes closure. SOPs are often process-level rather than task-level.

**Level 3: Work Instructions / Methods**
More granular than SOPs. A work instruction for operating a specific HPLC system tells the analyst exactly what to do, step by step, on that instrument. An analytical method specifies the exact conditions under which a test is run. Level 3 documents get into the specifics that a Level 2 SOP leaves to the technical document.

**Level 4: Forms, Records, Templates**
The blank forms that are filled in to create records. Batch records, deviation forms, CAPA forms, change control request forms, calibration records. These are also controlled because the structure of the form determines what data gets captured.

---

## The SOP Life Cycle

**Step 1: Drafting**
The document owner writes the draft. The author is typically the person closest to the process, a QC analyst writes the first draft of a test method, a manufacturing operator or supervisor writes the first draft of a manufacturing procedure. The draft exists outside the controlled system until it enters formal review.

**Step 2: Review**
Draft circulates to functional reviewers. Who reviews depends on the document: a manufacturing SOP typically goes to Manufacturing, QA, and possibly Engineering. Reviewers comment, author revises, until consensus is reached. The review must be documented.

**Step 3: Approval**
QA approval is required for all GxP documents. Depending on the document, other functions may also be required approvers (e.g., Manufacturing management for a manufacturing procedure). Approval is the formal authorization to use the document.

**Step 4: Effective Date**
Documents have an effective date, which is on or after the approval date. The document cannot be used before the effective date. The effective date also triggers training requirements.

**Step 5: Training**
Before affected personnel can use a newly effective procedure, they must be trained on it. Training is documented. An analyst running a test under a new method before their training record is complete is a GMP violation, even if they read the procedure themselves.

**Step 6: Periodic Review**
SOPs are reviewed on a schedule, typically every 1-3 years. The review confirms the document is still accurate, current, and needed. If changes are required, a new revision is initiated. If the document is still accurate, the review is documented and the review period resets.

**Step 7: Revision**
Any change to a controlled document requires a formal revision. The prior version is retired and archived. Personnel who use the document are trained on the new version. The history of all versions is maintained.

**Step 8: Retirement**
When a document is no longer needed (process discontinued, system decommissioned), it's formally retired. It's removed from active use but the document and its records remain in the archive. Regulatory retention requirements vary, but deleted records are always a problem.

---

## Document Numbering and Version Control

Every controlled document needs a unique identifier that stays with it through all revisions. Common numbering conventions:

- SOP-QA-001 (function prefix, sequential number)
- QMS-001 for quality system documents, QC-001 for QC documents
- The number never changes. Only the revision changes.

Revision identifiers are typically alphabetical (Rev A, Rev B) or numeric (Rev 1, Rev 2, Version 1.0, Version 1.1). Whatever convention is chosen must be defined and consistently applied.

Each version should have a revision history section that summarizes what changed and why. The revision history is a record, and inspectors read it.

---

## Electronic vs. Paper Document Management Systems

Most modern GxP organizations use an electronic document management system (EDMS), platforms like Veeva Vault QMS, MasterControl, OpenText Documentum, or similar. Some smaller organizations still manage documents in paper-based or hybrid systems.

**Electronic EDMS advantages:**
- Automated version control prevents use of obsolete documents
- Electronic approval workflows with audit trails
- Automatic notification of reviewers and approvers
- Training linkage (EDMS automatically notifies affected users when a new version is effective)
- Search and retrieval for inspections

**Requirements for a GxP-compliant EDMS:**
- 21 CFR Part 11 compliant electronic signatures for approvals
- Complete audit trail showing who reviewed, who approved, when, and from what IP/device
- Access controls preventing unauthorized modification
- Backup and disaster recovery provisions
- Validation documentation (the EDMS itself must be validated)

Even an electronic system has human failure modes. Approving a document without reading it, training yourself on a procedure you didn't read, or marking a review complete without actually reviewing it all undermine the system. The technology enables compliance; it doesn't guarantee it.

---

## What Makes an SOP Effective vs. Compliant

An SOP can be technically compliant (approved, versioned, current) but not actually effective. An effective SOP:

- Describes what the user actually does, not what QA thinks they should do
- Is specific enough that two different people would execute it the same way
- Doesn't leave critical decisions undefined ("as appropriate" and "if necessary" are not adequate for critical steps)
- Doesn't require the user to simultaneously consult five other documents to understand what to do
- Is written at the right level for the intended user (a manufacturing operator doesn't need chemistry theory; they need steps)

SOPs that are written by QA for compliance rather than by the people who do the work tend to be accurate on paper and useless in practice. The best indicator of an ineffective SOP is that everyone does the procedure from memory and treats the SOP as a document to fill out after the fact.

---

## What Inspectors Look For in Document Control

FDA and EMA inspectors spend significant time on document control because it's the foundation of everything else. The common findings:

**Obsolete documents at point of use.** The procedure on the shelf in the lab is Revision B; the current controlled version is Revision D. This tells an inspector that the training process didn't work, the controlled access system didn't work, or people are ignoring the system.

**Undated or incomplete forms.** A batch record with a step initialed but no date is an ALCOA+ violation. The date is what makes the record contemporaneous. Missing dates are among the most cited deficiencies in drug manufacturing inspections.

**Unapproved use of documents.** Analytical methods used before they were formally approved, or procedures used in a new location without site-specific approval.

**Training records that don't match the effective dates.** If a procedure was effective June 1 and the analyst's training record shows completion May 15, someone pre-completed training before the document existed. This is a red flag for a system where training is treated as paperwork rather than actual learning.

**Revision history gaps.** Changes made to a procedure without a formal revision. Minor edits made "in place" without going through the change process are still changes. If the document was changed, there must be a record of it.

---

## Document Control for Electronic Records

When your GxP records are electronic (data in a LIMS, results in a CDS, electronic batch records in an MES), document control principles still apply to the data, but the mechanisms are different. The "document" is now the data record itself, and:

- Access controls replace physical document custody
- System-generated timestamps replace handwritten dates
- Audit trails replace manual change records
- Backup and archival systems replace physical document storage

The principles are identical: who created the record, when, what it contained, and whether it was changed. The systems that enforce those principles are technical rather than physical. The validation of those systems is what gives regulators confidence the controls actually work.

---

## Getting a Document Control System Off the Ground

If you're building document control at a new facility or cleaning up an inadequate system:

1. Start with a document control SOP that defines the hierarchy, numbering, approval requirements, review periods, and retirement process.
2. Inventory every document currently in use. Assign numbers, confirm current version, identify documents that have never been formally approved.
3. Establish who owns which documents. Every controlled document must have an identified owner responsible for its accuracy.
4. Create a training matrix that maps documents to affected roles. Each role has a defined set of documents they must be trained on.
5. Define how training is documented. Paper sign-off, electronic LMS, or EDMS-integrated training module all work; what matters is that the record is created.
6. Establish the periodic review schedule and assign responsibility for executing reviews.

The document control system is the skeleton of the QMS. Get it right, and everything else has a place to attach to.
