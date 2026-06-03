---
title: "21 CFR Part 11 and EU Annex 11: Electronic Records and Signatures Explained"
description: "A practical breakdown of 21 CFR Part 11 and EU Annex 11 — what they require, how they differ, open vs closed systems, electronic signatures, and what actually gets cited in inspections."
pubDate: 2026-05-14
tags: ["21-CFR-Part-11", "CSV", "GxP", "electronic-records", "EU-Annex-11"]
pillar: "csv-csa"
tier: "Intermediate"
---

21 CFR Part 11 is one of the most cited regulations in pharmaceutical quality, and one of the most misapplied. It governs electronic records and electronic signatures in FDA-regulated industries — what they must do, what controls must surround them, and under what conditions they are acceptable as equivalents to paper records and handwritten signatures.

EU Annex 11 is the European counterpart: a GMP annex governing computerized systems, with overlapping but not identical requirements.

Understanding both, and the differences between them, is foundational for anyone working on computer system validation, quality systems design, or FDA/EMA inspection preparation.

---

## What 21 CFR Part 11 Actually Covers

Part 11 (21 CFR Part 11, published 1997, with subsequent FDA guidance interpreting it) establishes the technical and procedural controls that must be in place for:
- Electronic records to be accepted as equivalent to paper records
- Electronic signatures to be accepted as equivalent to handwritten signatures

The regulation applies to electronic records and signatures that are "created, modified, maintained, archived, retrieved, or transmitted under any records requirements set forth in FDA regulations" — meaning it applies broadly to any GxP electronic record, from batch records to laboratory results to approval signatures.

The key structural distinction in Part 11 is between open and closed systems.

---

## Open vs Closed Systems

**Closed system:** An environment in which system access is controlled by the persons who are responsible for the content of the electronic records. In practice: a validated internal system that only authorized company employees can access, such as a LIMS on a corporate network. The system administrator controls who can log in and what they can do.

**Open system:** An environment in which system access is not controlled by the persons who are responsible for the content. In practice: a system accessible over the internet, or where third parties have access you don't fully control — a cloud-based system, a submission portal, a CRO's shared platform.

Open systems require additional controls beyond what closed systems require: encryption, digital signatures, and other measures to ensure authenticity across a boundary you don't fully control.

Most GxP systems in pharmaceutical manufacturing are closed systems. The requirements in §11.10 apply to closed systems. The additional requirements in §11.30 apply to open systems.

---

## The Core Requirements (§11.10 — Closed Systems)

**11.10(a) — Validation:** The system must be validated to ensure accuracy, reliability, consistent intended performance, and the ability to discern invalid or altered records.

**11.10(b) — Record generation:** The system must be able to generate accurate and complete copies of records in both human-readable and electronic form. This is the basis for requiring that electronic records can be printed and that archives remain readable.

**11.10(c) — Record protection:** Records must be protected to enable their accurate and ready retrieval throughout the retention period.

**11.10(d) — Access controls:** System access must be limited to authorized individuals. Use of computer-generated, time-stamped audit trails is required.

**11.10(e) — Audit trails:** Computer-generated, time-stamped audit trails must independently record the date and time of operator entries and actions that create, modify, or delete electronic records. This section is the regulatory basis for the audit trail requirements described in the [audit trail design article](/articles/audit-trail-design-and-review).

**11.10(f) — Operational system checks:** Procedures and controls must exist to ensure that only authorized procedures and inputs are used.

**11.10(g) — Authority checks:** The system must check the authority of individuals attempting to use the system, access its operations, or create/modify records.

**11.10(h) — Device checks:** Device checks must be used to determine the validity of sources of input into systems.

**11.10(i) and (j) — Training and written policies:** Personnel who use electronic signatures must be educated, trained, and experienced. Written policies governing use of electronic signatures must exist.

**11.10(k) — Document controls:** Systems must use appropriate controls to prevent use of unauthorized or outdated electronic records.

---

## Electronic Signatures

Part 11 subpart C covers electronic signatures. The key requirements:

**Uniqueness:** Each electronic signature must be unique to the individual. No sharing. This aligns with the attributability requirement of ALCOA+.

**Identity verification:** Before assigning an electronic signature to an individual, the organization must verify the individual's identity.

**Two-component signatures:** Electronic signatures that are not biometric-based must use at least two distinct components — typically a user ID and password. This combination functions as the equivalent of a handwritten signature.

**Non-repudiation:** Electronic signatures must be linked to their respective electronic records to ensure that the signature cannot be excised, copied, or otherwise transferred to falsify an electronic record. A signature that is simply an annotation on a PDF that could be removed or re-stamped on a different document is not a compliant electronic signature.

**Meaning:** Signed records must contain information associated with the signing: the printed name of the signer, the date and time when the signature was executed, and the meaning (purpose) of the signature — e.g., "reviewed and approved by," "executed by."

**Agency notification:** Organizations must certify to FDA that they intend to use electronic signatures as legally binding equivalents to handwritten signatures. This is typically done via a letter submitted to FDA per the requirements of §11.100.

---

## The FDA's Narrow-Scope Interpretation (2003)

FDA issued a guidance in August 2003 ([Part 11, Electronic Records; Electronic Signatures — Scope and Application](https://www.fda.gov/media/75414/download)) that significantly narrowed the practical scope of Part 11.

The key statement: "FDA intends to exercise enforcement discretion with regard to Part 11 requirements for systems that were operational before August 20, 1997."

More practically, the guidance stated that FDA would focus Part 11 enforcement on predicate rule requirements (the underlying GMP requirements for records) rather than the technical requirements of Part 11 itself, in cases where Part 11 compliance would be "unnecessarily burdensome." This effectively de-emphasized some of the more prescriptive technical requirements and shifted focus back to whether the underlying records were complete, accurate, and reliable — the data integrity fundamentals.

The 2003 guidance reduced enforcement expectations but did not eliminate Part 11 requirements. For new systems implemented after 1997, the technical requirements of Part 11 remain applicable. The narrow-scope interpretation means FDA won't automatically cite every technical Part 11 gap as a violation if the predicate rule records are otherwise reliable — but auditors still review Part 11 compliance as part of system assessments.

---

## EU Annex 11: The European Framework

[EMA EudraLex Volume 4, Annex 11](https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf) is the European GMP annex governing computerized systems. It was last revised in 2011 and is broader in scope than Part 11, covering the entire lifecycle of computerized systems (not just electronic records and signatures).

Key structural differences from Part 11:

**Annex 11 is broader.** It covers validation, data integrity, audit trails, and operational requirements for computerized systems generally — not just the electronic records and signatures requirements that Part 11 focuses on.

**Annex 11 explicitly addresses data integrity.** Clause 7.1 requires that computerized systems use "built-in checks" to prevent data entry errors and that "data should only be entered or amended by persons authorised to do so." Clause 9 requires "an audit trail."

**Annex 11 addresses data storage and backup.** Clause 7.2 requires that data be secured by physical and electronic means, and clause 17 addresses archiving requirements.

**Annex 11 addresses incidents and disaster recovery.** Clause 16 requires that business continuity and disaster recovery plans exist for critical systems.

**Annex 11 addresses third parties.** Clause 3 explicitly addresses the requirements when a third party (cloud provider, CRO, software vendor) is involved in operating a system.

---

## Where Annex 11 and Part 11 Overlap and Diverge

| Requirement | Part 11 | Annex 11 |
|---|---|---|
| System validation | §11.10(a) | Clause 4 (detailed) |
| Audit trails | §11.10(e) | Clause 9 |
| Access controls | §11.10(d), (g) | Clause 12 |
| Electronic signatures | Subpart C | Clause 9.4 |
| Data retention/archiving | §11.10(c) | Clause 7.2, 17 |
| Disaster recovery | Not explicitly required | Clause 16 (required) |
| Third-party/cloud | §11.30 (open systems) | Clause 3 (explicit) |
| Incident management | Not specified | Clause 16 |

For companies operating in both US and EU markets, systems need to satisfy both frameworks. In practice, a system designed to full Part 11 compliance with the GAMP 5 validation approach will meet most Annex 11 requirements. The gaps are usually in the areas where Annex 11 is more explicit: incident management, disaster recovery documentation, and third-party controls.

---

## What Gets Cited in Inspections

Based on publicly available FDA 483s and warning letters, the most frequently cited Part 11 failures are:

1. **Audit trail gaps** — either disabled, incomplete, or not capturing prior values (§11.10(e))
2. **Shared user accounts** — destroying the uniqueness of electronic signatures (§11.100(a))
3. **Access control gaps** — users with inappropriate privilege levels, particularly admin access for personnel who should not have it (§11.10(d), (g))
4. **Inadequate validation documentation** — systems used in GxP without documented validation (§11.10(a))
5. **Electronic signature meaning gaps** — signatures that don't capture purpose, date, or printed name (§11.50)

For Annex 11, EMA inspectors additionally focus on:
- Backup and disaster recovery testing (Clause 16)
- Third-party and cloud system controls (Clause 3)
- Completeness of data archiving (Clause 17)

---

## Practical Implication for System Design

The actionable takeaway from Part 11 and Annex 11: when selecting or designing a GxP system, evaluate it against these requirements before deployment, not after.

A system assessment that evaluates Part 11 compliance should cover:
- Audit trail completeness and configuration options
- User account management — can individual accounts be created and managed? Are shared accounts prevented or controllable?
- Electronic signature implementation — does it meet the two-component requirement? Does it capture meaning, date, and printed name?
- Record protection — can records be modified or deleted by unauthorized users? Is there a role separation between data entry and approval?
- Data export — can complete, human-readable copies be generated that retain metadata?

Most commercial LIMS, ELN, and MES platforms are designed to support Part 11 compliance, but they require correct configuration to actually achieve it. "The system supports Part 11" is a vendor marketing statement. "The system is configured to meet Part 11 requirements as validated at our site" is what matters.
