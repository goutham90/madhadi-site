---
title: "21 CFR Part 11 and EU Annex 11: A Practical Assessment Guide"
description: "How to assess a GxP computerized system against 21 CFR Part 11 and EU Annex 11 requirements. What each requirement means in practice, common gaps, and a structured approach to Part 11 compliance assessment."
pubDate: 2026-06-04
tags: ["21 CFR Part 11", "Annex 11", "validation", "data-integrity", "electronic records", "CSV", "FDA"]
pillar: "csv-csa"
tier: "Intermediate"
---

21 CFR Part 11 and EU Annex 11 are the two regulatory frameworks that govern electronic records and computerized systems in pharmaceutical GxP environments. They're not identical, but they cover the same ground: what technical and procedural controls must exist when you use electronic records and electronic signatures in place of paper.

This article explains what each requirement actually means, how to assess a system against them, and what the most common gaps look like in practice.

---

## The regulatory context

**21 CFR Part 11** (Code of Federal Regulations, Title 21, Part 11) was issued by FDA in 1997. It applies when electronic records are used under a predicate rule — a GxP regulation that requires records be kept (21 CFR Part 211 for drug GMP, Part 312 for clinical, Part 58 for GLP, and others). Part 11 doesn't require electronic records; it governs them when you choose to use them.

**EU Annex 11** is the EU GMP guideline on computerised systems. It applies to GxP computerized systems in EU manufacturing — not just to electronic records substituting for paper, but to all computerized systems in GxP scope. It was revised in 2011 and is under review again.

The key practical difference: Part 11 is about **electronic records and signatures**. Annex 11 is about **computerized systems broadly** — validation, data integrity, IT infrastructure, and operational controls for all GxP systems. Annex 11 covers more ground.

### The predicate rule concept

A critical point from FDA's 2003 Part 11 Scope and Application guidance: Part 11 applies to electronic records that are **used to meet predicate rule record-keeping requirements**. Internal working documents, draft files, and records not kept to satisfy a GxP regulation are not subject to Part 11.

This means: a spreadsheet used informally for internal calculations, not retained as a GxP record, is not subject to Part 11. A spreadsheet used to record and retain release test results that substitute for a paper laboratory notebook entry is subject to Part 11.

Applying Part 11 to systems that aren't in scope wastes validation effort. Not applying Part 11 to systems that are in scope is a regulatory gap.

---

## Part 11 requirements — what they mean in practice

Part 11 has two subparts: Subpart B (Electronic Records) and Subpart C (Electronic Signatures). Here's what each requirement actually requires, not just what it says.

### Subpart B — Electronic Records

**§11.10(a) — Validated systems**
The system must be validated to ensure accuracy, reliability, consistent intended performance, and the ability to discern invalid or altered records.

*In practice:* A formal validation package (URS, risk assessment, IQ/OQ/PQ, traceability matrix) for the system. Validation must demonstrate that the system correctly captures, stores, and retrieves records, and that it detects or prevents unauthorized alteration.

**§11.10(b) — Legible and available records throughout retention period**
Electronic records must be accurate, readily retrievable, and accessible throughout the retention period.

*In practice:* Records must be retrievable in human-readable form — not just as raw database exports. When a system is retired, the records must be migrated to a new system or archived in a retrievable format. "We deleted the system" is not an acceptable retention strategy.

**§11.10(c) — Protection from unauthorized alteration or deletion**
*In practice:* The system must enforce access controls that prevent unauthorized users from modifying or deleting records. Write-once storage, audit trails that capture all changes, and role-based access restrictions are the typical technical controls.

**§11.10(d) — Limiting access to authorized individuals**
*In practice:* Individual accounts for each user, no shared accounts, and a documented access provisioning process. Access levels must match job function — a data entry user doesn't need administrator access.

**§11.10(e) — Audit trail**
A secure, computer-generated, time-stamped audit trail must record when entries are made or changed, who made the change, and what the original value was. This is one of the most inspection-critical requirements. The audit trail must be computer-generated (not manually filled in) and protected from modification.

*In practice:* The audit trail must be enabled by default and cannot be disabled by users without exceptional authorization. It must capture every GxP data entry and change — not just final values. It must be reviewed regularly, not just available.

**§11.10(f) — Operational system checks**
The system must enforce sequencing of steps and events, where required.

*In practice:* Workflow enforcement — if a review step must happen before an approval step, the system must enforce this sequence. A LIMS that allows batch records to be approved without a prior QA review step is not satisfying §11.10(f).

**§11.10(g) — Authority checks**
The system must verify that only authorized individuals can use the system, create or modify electronic records, and operate electronic devices.

*In practice:* Role-based access control, with defined roles aligned to job functions. The system should prevent unauthorized actions — not just log them after the fact.

**§11.10(h) — Device checks**
Where applicable, the system must check the validity of data sources such as input devices.

*In practice:* Most relevant for instrument-connected systems. A CDS must have controls to prevent submission of results from an unqualified instrument or outside a validated parameter range.

**§11.10(i) — Personnel training**
Individuals using the system must have the appropriate training, education, and experience.

*In practice:* Documented training records for all system users, covering both the technical operation and the GxP requirements. Training records must be current — someone who was trained three years ago and hasn't used the system since is not "trained" for current use.

**§11.10(j) — Accountability for electronic records**
Records must be available throughout the time periods defined in the predicate rule regulations.

*In practice:* Retention policy defined, implemented in the system, and with a tested backup and recovery procedure. Records cannot be deleted before the retention period ends.

**§11.10(k) — Appropriate controls for system documentation**
Distribution of and access to system documentation (SOPs, user manuals, validation documentation) must be controlled.

*In practice:* System SOPs under document control, validation documentation available for inspection. Not publicly accessible in a way that would compromise security.

---

### Subpart C — Electronic Signatures

**§11.50 — Signature manifestations**
Each electronic signature in a GxP record must include the full name of the signer, the date and time of signing, and the meaning (purpose) of the signature (e.g., "reviewed," "approved," "performed").

*In practice:* A signature that just stamps "approved by: jsmith" at a timestamp is incomplete. The displayed signature must show the full name, timestamp, and what the signature means in the context of the record.

**§11.70 — Signature/record linking**
Electronic signatures must be linked to their respective electronic records in a way that prevents signature excision, copying, or other falsification.

*In practice:* The signature must be embedded in or cryptographically linked to the record. A signature stored as a separate database field that could theoretically be copied to a different record doesn't satisfy this requirement.

**§11.100 — General requirements for electronic signatures**
Electronic signatures must be unique to an individual, not reused by anyone else, and must be verified before use.

**§11.200 — Components of electronic signatures**
- Signatures based on two distinct identification components (ID + password) must be used in conjunction
- The system must not allow the same combination to be reused for different records unless the individual re-authenticates
- Non-biometric signatures require two identification components at each signing unless they are used in a continuous period and specifically authorized otherwise

*In practice:* A LIMS that requires a user to enter their password to approve a result is using a Part 11-compliant re-authentication mechanism. A system that re-uses the login session indefinitely without re-authentication for each signature is a risk.

---

## EU Annex 11 requirements — what they add

Annex 11 covers everything Part 11 covers, plus:

**Risk management:** Annex 11 requires that risk management is applied throughout the system lifecycle, not just at validation. Risk assessment must be documented and proportionate.

**Data storage:** Annex 11 §7 requires data to be stored in a way that prevents unauthorized alteration, with backup and disaster recovery tested.

**Printouts:** §7.1 requires that printouts of electronically stored data include the time and date of the printout. The original electronic record is always the authoritative source — printouts are copies.

**Audit trail review:** §9 requires that audit trails be reviewed regularly and that this review is risk-based and documented. The frequency of review must be appropriate to the system's GxP impact.

**Periodic evaluation:** §11 requires periodic review of systems to confirm they remain in a validated state. This review must cover change history, deviations, availability, reliability, security, and qualified status.

**Supplier assessment:** Annex 11 §3 requires that a company's responsibility for the system remains with the regulated company regardless of whether the system is outsourced. Supplier assessment and ongoing oversight are required.

**Business continuity:** §16 requires that a system for emergency recovery is available for GxP-relevant systems. A paper backup procedure for critical systems is a common approach — but the procedure must be defined, tested, and training provided.

---

## How to perform a Part 11 / Annex 11 assessment

A Part 11 assessment is a document that evaluates a specific GxP computerized system against the applicable requirements and identifies gaps. It should be done during the planning phase of validation, before the system goes live, and reviewed as part of periodic review.

### Step 1: Confirm the system is in scope

Answer two questions:
1. Does this system generate, modify, maintain, archive, or transmit **GxP records**?
2. Are those records used under a **predicate rule** (Part 211, Part 312, Part 58, etc.)?

If yes to both, the system is in Part 11 scope. If the system only contains EU GMP records, Annex 11 scope applies.

### Step 2: Identify Part 11 requirements applicable to the system

Not every Part 11 requirement applies equally to every system. A read-only reporting system doesn't need to address §11.10(f) (operational sequence checks). An instrument with no operator interaction doesn't need to address electronic signature requirements in the same way as a LIMS.

Build a requirements matrix: list each applicable Part 11/Annex 11 requirement and note how it applies to the specific system.

### Step 3: Assess current controls against each requirement

For each applicable requirement, document:
- How the system currently satisfies the requirement (technical control, procedural control, or combination)
- The evidence that the control exists and works
- Any gaps where the requirement is not fully satisfied

### Step 4: Document gaps and assign risk

For each gap:
- What is the gap?
- What is the risk if the gap is unaddressed (data integrity risk, regulatory exposure)?
- What is the remediation required?
- Who owns the remediation and by when?

### Step 5: Include in validation documentation

The Part 11 assessment should be referenced in the validation plan and summarized in the validation summary report. If the assessment identifies gaps, the remediation must be closed before the system is validated and in production use.

---

## Common Part 11 and Annex 11 gaps

**1. Audit trail disabled or not enabled by default.** The system has an audit trail feature but it wasn't turned on, or users were given the ability to disable it. This is one of the most common and most serious findings.

**2. Shared accounts.** Multiple users share a single login. Breaks §11.10(d) and the "attributable" principle. The audit trail is meaningless if you can't know who made each entry.

**3. Electronic signatures don't include all required elements.** The signature shows only a username and timestamp without the meaning of the signature, or doesn't display the full name.

**4. No audit trail review.** The audit trail exists but nobody reviews it. Annex 11 §9 requires review; FDA expects review as part of the data integrity program.

**5. Retention capability not validated.** Records are stored electronically but no one has tested whether they can be retrieved 15 years from now on hardware and software that will have changed. Archive format and retrieval must be tested.

**6. No re-authentication for electronic signatures.** The system allows a user who is already logged in to approve a record without re-entering credentials. This doesn't meet §11.200 for bi-component signatures.

**7. SOPs don't address system misuse.** Part 11 compliance requires procedural controls as well as technical ones. If there's no SOP governing account management, password requirements, or what to do when someone's account is compromised, the procedural side of Part 11 is incomplete.

**8. Printouts treated as official records.** Operators print reports and discard the underlying electronic record. The printout is missing metadata and audit trail — it's a paper shadow of the electronic original, not a compliant substitute.

---

## The Part 11 assessment template structure

A minimal Part 11 assessment document contains:

| Requirement | Applicable? | Current Control | Evidence | Gap? | Remediation |
|---|---|---|---|---|---|
| §11.10(a) — Validated system | Yes | Validation package on file | VMP-001, OQ-001 | No | — |
| §11.10(e) — Audit trail | Yes | Audit trail enabled by default | Configuration screenshot, OQ test 3.2 | No | — |
| §11.10(d) — Access control | Yes | Individual accounts; admin provisioning SOP | IT-SOP-012 | Partial — shared account used for batch approval | Open gap — individual accounts required |

This table format, completed for all applicable requirements, constitutes the assessment. It supports the validation package, guides gap remediation, and is presented during inspection as evidence of compliance thinking.

---

## What an inspector asks about Part 11

- "How do you know your audit trail hasn't been disabled?"
- "Show me how a signature appears on an electronic batch record. What information is captured?"
- "Can a user delete an entry from [system]? Show me."
- "How do you control access when someone leaves the company?"
- "Show me your Part 11 assessment for [system]. When was it last reviewed?"
- "What happens to records in [system] when the system is retired?"

---

## Minimum compliant baseline

1. Written Part 11 assessment on file for each GxP computerized system in scope
2. Audit trail enabled and its coverage documented (what it captures and for how long)
3. Individual user accounts for all system users — no shared accounts
4. Account management procedure covering provisioning, password requirements, and deprovisioning
5. Electronic signatures include name, date/time, and meaning
6. Periodic review procedure that covers audit trail review

---

## References

- 21 CFR Part 11 — Electronic Records; Electronic Signatures (FDA, 1997)
- FDA Guidance: Part 11, Electronic Records; Electronic Signatures — Scope and Application (August 2003)
- EU GMP Annex 11 — Computerised Systems (January 2011)
- GAMP 5: A Risk-Based Approach to Compliant GxP Computerized Systems, Second Edition (2022)
- FDA DI Q&A Guidance (December 2018) — Sections on audit trails, access control, and electronic records
- MHRA GxP Data Integrity Guidance and Definitions (March 2018)
