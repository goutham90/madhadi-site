---
title: "21 CFR Part 11 and EU Annex 11: A Practical Assessment Guide"
description: "How to assess a GxP computerized system against 21 CFR Part 11 and EU Annex 11. What each requirement means in practice, where systems usually fall short, and a structured method for running the assessment."
pubDate: 2026-06-04
tags: ["21 CFR Part 11", "Annex 11", "validation", "data-integrity", "electronic records", "CSV", "FDA"]
pillar: "csv-csa"
tier: "Intermediate"
---

21 CFR Part 11 and EU Annex 11 are the two regulatory frameworks that govern electronic records and computerized systems in pharmaceutical GxP environments. They are not identical, but they cover the same ground: what technical and procedural controls must exist when you use electronic records and electronic signatures in place of paper.

Most people meet these rules as a checklist someone hands them late in a validation project. That framing causes more failed inspections than almost anything else in computerized system work, because Part 11 and Annex 11 are not really about features. They are about whether a record can be trusted years after it was created, by a person who was not in the room when it was made. This article explains what each requirement actually means, how to assess a system against both frameworks, and what the most common gaps look like when an inspector starts pulling threads.

---

## The regulatory context

**21 CFR Part 11** (Code of Federal Regulations, Title 21, Part 11) was issued by FDA in 1997. It applies when electronic records are used under a predicate rule, a GxP regulation that requires records be kept (21 CFR Part 211 for drug GMP, Part 312 for clinical, Part 58 for GLP, and others). Part 11 does not require electronic records. It governs them when you choose to use them.

**EU Annex 11** is the EU GMP guideline on computerised systems. It applies to GxP computerized systems used in EU manufacturing, not just to electronic records substituting for paper but to all computerized systems in GxP scope. The current version took effect in June 2011, and a substantially expanded draft revision was published for consultation, signalling tighter expectations on data integrity, audit trails, and supplier oversight.

The key practical difference: Part 11 is about **electronic records and signatures**. Annex 11 is about **computerized systems broadly**, validation, data integrity, IT infrastructure, and operational controls for all GxP systems. Annex 11 covers more ground, and it reads more like an operational expectation than a record-format rule.

A useful way to hold the two in your head:

| Dimension | 21 CFR Part 11 | EU Annex 11 |
|---|---|---|
| Issued / effective | 1997 | June 2011 (revision in progress) |
| Legal weight | Regulation (enforceable rule) | GMP guideline (expectation, enforced through GMP) |
| Trigger | Electronic records used under a predicate rule | Any GxP computerized system |
| Centre of gravity | Records and signatures | System lifecycle, IT, data integrity |
| Signatures | Detailed, prescriptive (Subpart C) | Brief (one clause), defers to local law on legal validity |
| Supplier / outsourcing | Implicit | Explicit (clause 3) |
| Periodic review | Implicit through validated state | Explicit (clause 11) |

If a system is in scope for both markets, you assess against both. In practice the two overlap heavily, so a single assessment that maps each control to the relevant Part 11 section and the relevant Annex 11 clause is more efficient than running two separate reviews.

### The predicate rule concept

A critical point from FDA's 2003 guidance, *Part 11, Electronic Records; Electronic Signatures, Scope and Application*: Part 11 applies to electronic records that are **used to meet predicate rule record-keeping requirements**. Internal working documents, draft files, and records not kept to satisfy a GxP regulation are not subject to Part 11. That guidance also announced FDA's intent to exercise enforcement discretion for certain Part 11 controls (validation, audit trails, record copies, retention) where the predicate rule already imposes the underlying requirement. Enforcement discretion is not a waiver. The predicate rule obligation still applies, and FDA has continued to cite Part 11 failures in warning letters since 2003.

This distinction is concrete. A spreadsheet used informally for internal calculations, not retained as a GxP record, is not subject to Part 11. A spreadsheet used to record and retain release test results that substitute for a paper laboratory notebook entry is subject to Part 11, including its audit trail and formula protection.

Applying Part 11 to systems that are not in scope wastes validation effort. Not applying Part 11 to systems that are in scope is a regulatory gap, and it is the more dangerous of the two errors. When in doubt about scope, document the rationale for the call. Inspectors accept a defensible scoping decision far more readily than a silent one.

---

## Part 11 requirements, what they mean in practice

Part 11 has two subparts: Subpart B (Electronic Records) and Subpart C (Electronic Signatures). Here is what each requirement actually requires, not just what it says.

### Subpart B, Electronic Records

**§11.10(a), Validated systems.** The system must be validated to ensure accuracy, reliability, consistent intended performance, and the ability to discern invalid or altered records.

*In practice:* a validation package (user requirements, risk assessment, qualification testing, traceability matrix) scaled to the system's risk. Validation must show that the system correctly captures, stores, and retrieves records, and that it detects or prevents unauthorized alteration. The phrase "discern invalid or altered records" is doing real work here. It is the reason audit trail testing belongs inside validation, not bolted on afterward.

**§11.10(b), Legible and available records throughout retention.** Electronic records must be accurate, readily retrievable, and accessible throughout the retention period.

*In practice:* records must be retrievable in human-readable form, not just as raw database exports. When a system is retired, the records must be migrated to a new system or archived in a retrievable format, with the migration itself verified. "We decommissioned the server" is not a retention strategy.

**§11.10(c), Protection of records.** Records must be protected to enable accurate and ready retrieval throughout the retention period.

*In practice:* access controls that prevent unauthorized users from modifying or deleting records, write-once or version-protected storage, and tested backups. The protection has to last as long as the record does, which means the controls have to survive operating system upgrades, storage migrations, and vendor changes.

**§11.10(d), Limiting access to authorized individuals.**

*In practice:* individual accounts for each user, no shared accounts, and a documented access provisioning process. Access levels must match job function. A data entry user does not need administrator rights, and an administrator who can both edit raw data and edit the audit trail is a segregation-of-duties finding waiting to happen.

**§11.10(e), Audit trail.** A secure, computer-generated, time-stamped audit trail must record when entries are made or changed, who made the change, and what the original value was. This is one of the most inspection-critical requirements.

*In practice:* the audit trail must be enabled by default and not disableable by ordinary users. It must capture every GxP data create, modify, and delete action, the old value and the new value, the user, and a trustworthy timestamp tied to a controlled system clock. Critically, it must be reviewed, not merely available. An audit trail that nobody looks at is evidence collection without inspection, and reviewers consistently treat that as a hollow control.

**§11.10(f), Operational system checks.** The system must enforce sequencing of steps and events, where required.

*In practice:* workflow enforcement. If a review step must precede an approval step, the software must enforce that order. A laboratory or manufacturing system that lets a record be approved before the required prior review has happened is not satisfying §11.10(f).

**§11.10(g), Authority checks.** Only authorized individuals may use the system, sign records, access operations, or alter records.

*In practice:* role-based access control with roles mapped to job functions. The system should prevent unauthorized actions, not just log them after the fact. Preventive beats detective every time you can build it that way.

**§11.10(h), Device checks.** Where applicable, the system must check the validity of the source of data input or operational instruction.

*In practice:* most relevant for instrument-connected systems. A chromatography data system, for example, should have controls that prevent acquisition or reporting from an instrument that is not qualified or is outside validated parameter ranges.

**§11.10(i), Personnel qualification.** Individuals who develop, maintain, or use the system must have the appropriate education, training, and experience.

*In practice:* current training records for all users, covering both technical operation and the GxP and data integrity expectations. Training that happened three years ago for someone who has not touched the system since is not current qualification.

**§11.10(j), Accountability policies.** Written policies must hold individuals accountable for actions taken under their electronic signatures, to deter falsification.

*In practice:* a signed policy that each person understands an electronic signature carries the same weight as a handwritten one and that misuse has consequences. This is a procedural control, and it is easy to forget because it produces no screen to demonstrate.

**§11.10(k), Controls over documentation.** Distribution of, access to, and revision control of system documentation must be controlled, with an audit trail of changes to operational documentation.

*In practice:* system SOPs and user manuals under document control, validation documentation retrievable for inspection, and a change history for the operating procedures themselves.

---

### Subpart C, Electronic Signatures

**§11.50, Signature manifestations.** Each signed electronic record must show the printed name of the signer, the date and time of signing, and the meaning of the signature (such as review, approval, responsibility, or authorship).

*In practice:* a signature that just stamps "approved by: jsmith" at a timestamp is incomplete. The displayed signature must carry the full name, the date and time, and what the signature means in context.

**§11.70, Signature/record linking.** Electronic signatures and handwritten signatures executed to electronic records must be linked to their records so they cannot be excised, copied, or otherwise transferred to falsify a record.

*In practice:* the signature must be embedded in or cryptographically bound to the record. A signature stored as a loose database field that could be copied onto a different record does not satisfy this.

**§11.100, General requirements.** Each electronic signature must be unique to one individual and never reused or reassigned. Before allocating a signature, the organization must verify the individual's identity, and it must certify to FDA (in writing, one time per organization) that electronic signatures are intended to be the legally binding equivalent of handwritten signatures.

That certification, sent to FDA's Office of Regional Operations, is a step many sites overlook entirely. It is a one-time organizational filing, not a per-system task, but it has to exist.

**§11.200, Components and controls.**
- Non-biometric signatures must use at least two distinct identification components, typically a user ID and a private password.
- For a series of signings during a single continuous controlled session, the first signing uses both components and subsequent signings use at least one. If the signings are not continuous, each one requires both components.
- Signatures must be used only by their genuine owners and designed so that an attempted use by anyone else requires collaboration of two or more individuals.

*In practice:* a system that asks the user to re-enter a password to approve a result is applying re-authentication consistent with §11.200. A system that relies on a login session that stays open all day and signs records on that single authentication, with no continuity controls, is the classic gap.

**§11.300, Controls for identification codes and passwords.** Uniqueness of ID/password combinations, periodic checks or revisions, loss management procedures, transaction safeguards against unauthorized use, and testing of any devices that bear or generate codes.

*In practice:* password policy, account lockout, a process for revoking access when a credential is lost or someone leaves, and periodic review of accounts. This section is where account hygiene lives, and it is frequently weaker than the technical signature controls it sits beside.

---

## EU Annex 11 requirements, what they add

Annex 11 covers the same record and signature ground, then extends into operating the system over its whole life:

**Risk management (clause 1).** Risk management is applied across the full system lifecycle, balancing patient safety, data integrity, and product quality. The validation effort and the controls should be proportionate to risk, not uniform across every system.

**Personnel and supplier responsibility (clauses 2 and 3).** Responsibility for the system stays with the regulated company even when development, hosting, or support is outsourced. That means a supplier assessment before use and ongoing oversight after, with a quality or service agreement defining who does what. This explicit supplier expectation is one of the clearest points where Annex 11 goes beyond Part 11.

**Validation (clause 4).** Documented evidence that the system is fit for purpose, including an up-to-date inventory of GxP systems and, for configured or bespoke software, traceability between requirements and testing.

**Data and accuracy (clauses 5 and 6).** Controls over data exchanged electronically between systems, and built-in checks for the correct and secure entry and processing of data.

**Data storage (clause 7).** Data must be secured against damage, with backups taken and their integrity and ability to be restored checked during validation and monitored periodically. A backup that has never been restored in a test is not yet a backup you can rely on.

**Printouts (clause 8).** It must be possible to obtain clear printed copies of electronically stored data, and for records supporting batch release the printout must indicate if any data has been changed since the original entry. The electronic record remains the authoritative source. A printout is a copy.

**Audit trails (clause 9).** Consideration, based on risk, should be given to building into the system an audit trail of GxP-relevant changes and deletions. Audit trails must be available, convertible to a readable form, and regularly reviewed, with the review frequency tied to the system's GxP impact.

**Change and configuration management (clause 10).** Changes made through a defined procedure.

**Periodic evaluation (clause 11).** Systems are periodically reviewed to confirm they remain in a validated state and compliant. The review covers current functionality, deviation records, incidents, problems, upgrade history, performance, reliability, security, and validation status reports.

**Security (clause 12).** Physical and logical controls restrict access to authorized persons, with the extent of controls based on system criticality, plus creation, change, and cancellation of access authorizations recorded.

**Business continuity (clause 16).** For systems supporting critical processes, provisions ensure continuity in the event of a breakdown, such as an alternative manual or backup arrangement. The continuity arrangement must be defined, tested, and the staff trained on it before it is needed.

**Archiving (clause 17).** Data may be archived, with archived data checked for accessibility, readability, and integrity, and any relevant change to the system tested for continued retrievability.

---

## How to perform a Part 11 / Annex 11 assessment

A Part 11 / Annex 11 assessment is a document that evaluates a specific GxP computerized system against the applicable requirements and identifies gaps. It belongs in the planning phase of validation, before the system goes live, and it is revisited as part of periodic review. Doing it early is the point. A gap found before go-live is a configuration change. The same gap found during an inspection is a finding plus a remediation plus a credibility cost.

### Step 1: Confirm the system is in scope

Answer two questions:

1. Does this system generate, modify, maintain, archive, retrieve, or transmit **GxP records**?
2. Are those records used under a **predicate rule** (Part 211, Part 312, Part 58, or others), or are they GxP records in an EU GMP context that brings Annex 11 into play?

If yes, the system is in scope and the assessment proceeds. If no, record the scoping decision and the reasoning so the next reviewer does not have to reconstruct it. For the wider scoping logic, see [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology) and the [GAMP 5 CSV framework](/articles/gamp5-csv-framework), which sets the software categories that drive how much rigour each system needs.

### Step 2: Identify the requirements that apply to this system

Not every requirement applies equally to every system. A read-only reporting tool does not need to satisfy §11.10(f) operational sequence checks in the way a workflow system does. An automated analyzer with no human signing has different signature obligations than a laboratory information management system where analysts sign each result.

Build a requirements matrix: list each applicable Part 11 section and Annex 11 clause, and note how it applies to this specific system. Mapping both frameworks in one table prevents the duplicated effort of two parallel reviews.

### Step 3: Assess current controls against each requirement

For each applicable requirement, document:

- How the system satisfies it now (technical control, procedural control, or a combination of both).
- The objective evidence that the control exists and works (a configuration setting, a test result, an SOP number, a screenshot).
- Any gap where the requirement is not fully met.

Be honest about technical-versus-procedural. A control that depends on people remembering to do something is weaker than a control the software enforces, and inspectors know this. Where a procedural control fills a technical gap, say so plainly and make sure the procedure is actually written and trained.

### Step 4: Document gaps and assign risk

For each gap, capture: what the gap is, the risk if it stays open (data integrity exposure, regulatory exposure, patient impact), the remediation required, and an owner with a due date. Rank the gaps. A disabled audit trail and a missing accountability policy are not the same severity, and the remediation sequence should reflect that.

### Step 5: Feed it into the validation lifecycle

Reference the assessment in the validation plan and summarize its outcome in the validation summary report. Gaps that affect data integrity or record trustworthiness must be closed, or formally risk-accepted with justification, before the system is released to production. Then carry the assessment forward, because it is a living document, not a one-time gate. See [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review) for how the reassessment fits the periodic cycle, and [change control for validated systems](/articles/change-control-validated-systems) for when a change should trigger a re-look.

---

## Common Part 11 and Annex 11 gaps

**1. Audit trail disabled or not on by default.** The feature exists but was never switched on, or ordinary users can turn it off. One of the most common and most serious findings, and a frequent root cause behind data integrity warning letters. See [audit trail design and review](/articles/audit-trail-design-and-review).

**2. Shared accounts.** Several people use one login. This breaks §11.10(d) and the attributable principle at the heart of [ALCOA+](/articles/alcoa-plus-deep-dive). If you cannot tell who made an entry, the audit trail is decorative.

**3. Signatures missing required elements.** The signature shows a username and timestamp but not the full printed name or the meaning of the signature, contrary to §11.50.

**4. No audit trail review.** The trail exists and nobody reads it. Annex 11 clause 9 expects regular, risk-based review, and FDA expects it as part of a data integrity program.

**5. Retention and retrieval never tested.** Records sit in the system, but no one has confirmed they can be retrieved years from now on hardware and software that will have changed. Archive format, retrieval, and migration all need testing. See [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation).

**6. No re-authentication for signatures.** A logged-in user signs a record without re-entering credentials, and there are no continuity controls, which fails §11.200 for two-component signatures.

**7. Procedural controls missing.** No SOP for account provisioning and deprovisioning, password rules, or what to do when a credential is compromised. Part 11 compliance is technical and procedural, and the procedural half is the half people skip.

**8. Printouts treated as the official record.** Operators print a report and discard the electronic original. The printout lacks the metadata and audit trail. It is a paper shadow of the record, not a compliant substitute. The electronic record is the original.

**9. Hybrid systems left undefined.** A handwritten signature on a paper printout from an electronic system, with no documented link between the two. Hybrid arrangements are allowed but must be defined, controlled, and unambiguous about which record governs.

---

## The assessment template structure

A minimal assessment document is a table completed for every applicable requirement:

| Requirement | Applicable? | Current control | Evidence | Gap? | Remediation |
|---|---|---|---|---|---|
| §11.10(a) / Annex 11 cl.4, Validated system | Yes | Validation package on file | Validation plan, qualification reports | No |  |
| §11.10(e) / Annex 11 cl.9, Audit trail | Yes | Audit trail on by default, user-locked | Config setting, test case result | No |  |
| §11.10(d) / Annex 11 cl.12, Access control | Yes | Individual accounts, provisioning SOP | IT access SOP, role matrix | Partial: a shared account is used for one approval step | Replace shared account with individual accounts before go-live |
| §11.50, Signature manifestation | Yes | Name, date/time, meaning displayed | Screenshot of signed record | No |  |
| §11.200, Signature components | Yes | Password re-entry per signing | Test case result | No |  |

Completed across all applicable requirements, this table is the assessment. It supports the validation package, drives the gap remediation list, and gives an inspector concrete evidence that the controls were thought through rather than assumed.

---

## What an inspector asks about Part 11

- "How do you know your audit trail has not been disabled, and who can disable it?"
- "Show me how a signature appears on a signed electronic record. What information does it capture?"
- "Can a user delete an entry from this system? Show me what happens, and show me the audit trail of that attempt."
- "How do you remove access when someone leaves the company, and how quickly?"
- "Show me your Part 11 assessment for this system. When was it last reviewed, and against which version?"
- "What happens to these records when the system is retired?"

The pattern is consistent: inspectors do not want to hear that a control exists, they want you to demonstrate it on the live system. Treat each of these as a live demonstration you should be able to run on demand. For broader preparation, see [FDA inspection readiness](/articles/fda-inspection-readiness) and the recurring themes in [FDA warning letter patterns](/articles/fda-warning-letters-patterns).

---

## Minimum compliant baseline

1. A written Part 11 / Annex 11 assessment on file for each in-scope GxP computerized system, mapped to the live system version.
2. Audit trail enabled, with its coverage documented (what it captures and for how long) and a defined, risk-based review.
3. Individual user accounts for every user, with no shared accounts and segregation of duties between data and administrator roles.
4. An account management procedure covering provisioning, password rules, periodic review, and prompt deprovisioning.
5. Electronic signatures that display name, date and time, and meaning, with two-component authentication and the one-time FDA certification on file.
6. Tested backup, restore, retention, and archive retrieval over the full record lifetime.
7. A periodic review procedure that reassesses the system, including audit trail review, against any changes since the last review.

Part 11 and Annex 11 are not asking for the impossible. They are asking whether, years from now, someone can look at a record and trust who made it, when, what it originally said, and that nobody quietly changed it since. Build the assessment around that question and the individual clauses tend to fall into place.

For how these controls connect to the wider data integrity program, see [data integrity foundations](/articles/data-integrity-foundations) and [data governance framework](/articles/data-governance-framework).

---

## References

- 21 CFR Part 11, Electronic Records; Electronic Signatures (FDA, 1997)
- FDA Guidance: Part 11, Electronic Records; Electronic Signatures, Scope and Application (August 2003)
- EU GMP Annex 11, Computerised Systems (effective June 2011; revision in progress)
- GAMP 5: A Risk-Based Approach to Compliant GxP Computerized Systems, Second Edition (ISPE, 2022)
- FDA Guidance: Data Integrity and Compliance With Drug CGMP, Questions and Answers (December 2018)
- MHRA GxP Data Integrity Guidance and Definitions (March 2018)
- PIC/S PI 041, Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments (2021)
