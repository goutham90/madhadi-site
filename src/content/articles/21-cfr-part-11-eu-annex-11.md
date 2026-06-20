---
title: "21 CFR Part 11 and EU Annex 11: Electronic Records and Signatures Explained"
description: "A practical breakdown of 21 CFR Part 11 and EU Annex 11, what they require, how they differ, open vs closed systems, electronic signatures, and what actually gets cited in inspections."
pubDate: 2025-09-09
tags: ["21-CFR-Part-11", "CSV", "GxP", "electronic-records", "EU-Annex-11"]
pillar: "csv-csa"
tier: "Intermediate"
---

21 CFR Part 11 is one of the most cited regulations in pharmaceutical quality, and one of the most misapplied. It governs electronic records and electronic signatures in FDA-regulated industries: what they must do, what controls must surround them, and under what conditions they are acceptable as equivalents to paper records and handwritten signatures.

EU Annex 11 is the European counterpart, a GMP annex governing computerized systems, with overlapping but not identical requirements.

Understanding both, and the differences between them, is foundational for anyone working on computer system validation, quality systems design, or FDA and EMA inspection preparation. This article walks through the structure of each regulation, the specific clauses that get tested in an inspection, and how to translate the legal text into design decisions you can actually make when you select or configure a system.

---

## Why These Two Regulations Exist

It helps to remember what these rules replaced. For most of the twentieth century, a GMP record was a paper batch record signed in ink, a lab notebook page, a chart printed from an instrument. The control mechanisms were physical: a locked archive room, a controlled-copy stamp, a signature you could compare against a specimen card. When records moved onto computers in the 1980s and 1990s, every one of those physical controls disappeared. A digital record can be edited with no visible trace, copied a thousand times, backdated, or deleted in a keystroke. A typed name at the bottom of a screen proves nothing about who actually pressed the button.

Part 11 and Annex 11 exist to rebuild, in software and procedure, the assurance that ink and paper used to provide for free. Part 11 took effect on August 20, 1997. Its central promise is conditional: if you meet the controls in the regulation, FDA will treat your electronic records and signatures as the legal equivalent of paper and ink. If you do not, your electronic records may not satisfy the underlying GMP, GLP, or GCP recordkeeping requirements at all. That linkage to the underlying requirement, which FDA calls the "predicate rule," is the single most important concept for reading Part 11 correctly. Part 11 never stands alone. It always sits on top of a predicate rule that already required the record to exist.

---

## What 21 CFR Part 11 Actually Covers

Part 11 establishes the technical and procedural controls that must be in place for:

- Electronic records to be accepted as equivalent to paper records
- Electronic signatures to be accepted as equivalent to handwritten signatures

The regulation applies to electronic records and signatures that are "created, modified, maintained, archived, retrieved, or transmitted under any records requirements set forth in FDA regulations." That phrasing is deliberately broad. It reaches any GxP electronic record, from batch records to laboratory results to release approvals, as long as some other FDA regulation requires that record to be kept.

A useful test for whether Part 11 applies to a given record: ask whether you would have to show that record to an inspector to demonstrate compliance with a predicate rule. If yes, and the record lives in electronic form, Part 11 applies. A spreadsheet a chemist keeps for personal convenience that duplicates a fully maintained paper record is generally outside scope. The same spreadsheet, if it becomes the official record used to make a release decision, is squarely inside scope. The determining factor is the role the record plays, not the technology it runs on.

The key structural distinction in Part 11 is between open and closed systems, because the required controls differ depending on who controls access.

---

## Open vs Closed Systems

**Closed system.** An environment in which system access is controlled by the persons who are responsible for the content of the electronic records. In practice, this is a validated internal system that only authorized company personnel can reach, such as a LIMS on a corporate network. The system administrator, who answers to the same quality organization that owns the data, controls who can log in and what they can do.

**Open system.** An environment in which system access is not controlled by the persons responsible for the content. In practice, this is a system reachable over the public internet, or one where third parties hold access you do not fully govern: a submission portal, a contract lab's shared platform, or a multi-tenant cloud application where the provider's staff can technically reach the infrastructure.

Open systems require additional controls beyond closed systems, because authenticity has to survive a boundary you do not own. Section 11.30 calls for measures such as document encryption and the use of appropriate digital signature standards to ensure record authenticity, integrity, and confidentiality from the point of creation to the point of receipt.

Here is a point that trips up a lot of teams. Whether a system is "open" or "closed" is not decided by whether it is hosted in a data center versus the cloud. It is decided by who controls access to the content. A cloud-hosted application can be a closed system if access to the records is controlled entirely by your organization through your own identity management, your own access reviews, and a vendor contract that walls off provider personnel. What matters is the access control reality, documented and verified, not the marketing label on the deployment model. The requirements in 11.10 apply to closed systems. The additional requirements in 11.30 apply to open systems. Most GxP manufacturing systems are operated as closed systems.

---

## The Core Requirements (11.10, Closed Systems)

Section 11.10 lists the controls a closed system must have. Read each one as a design requirement, not a paragraph of legal text.

**11.10(a), Validation.** The system must be validated to ensure accuracy, reliability, consistent intended performance, and the ability to discern invalid or altered records. The last clause is easy to skip and important: validation has to demonstrate that the system can tell good data from corrupted or tampered data, not just that it runs.

**11.10(b), Record generation.** The system must be able to generate accurate and complete copies of records in both human-readable and electronic form. This is the basis for requiring that electronic records can be printed and that archives stay readable. "Complete" means metadata too, not just the visible result.

**11.10(c), Record protection.** Records must be protected to enable their accurate and ready retrieval throughout the retention period. Retention here follows the predicate rule, which can mean many years.

**11.10(d), Access controls.** System access must be limited to authorized individuals.

**11.10(e), Audit trails.** Computer-generated, time-stamped audit trails must independently record the date and time of operator entries and actions that create, modify, or delete electronic records. Record changes must not obscure previously recorded information, and audit trail documentation must be retained at least as long as the underlying records and be available for review and copying. This section is the regulatory basis for the controls covered in the [audit trail design and review article](/articles/audit-trail-design-and-review).

**11.10(f), Operational system checks.** Controls must enforce permitted sequencing of steps and events where appropriate, so an operator cannot, for example, record a result before recording the test was run.

**11.10(g), Authority checks.** The system must verify that the person attempting an action is authorized to use the system, access the operation, or sign the record. This is the technical backbone of role-based access.

**11.10(h), Device checks.** Where relevant, the system must check the validity of the source of data input or operational instruction, confirming that input came from an authorized device or terminal.

**11.10(i), Education and training.** Persons who develop, maintain, or use electronic record and signature systems must have the education, training, and experience to perform their tasks.

**11.10(j), Written policies.** Written policies must hold individuals accountable for actions taken under their electronic signatures, to deter record falsification.

**11.10(k), Documentation controls.** Appropriate controls must govern systems documentation, including distribution, access, and use of documentation for operating and maintaining the system, and a change control and revision history for that documentation.

A note for readers newer to this area: almost every one of these controls maps directly onto a data integrity principle. Access and authority checks support attributability. Audit trails support the original and contemporaneous attributes. The ability to discern altered records supports accuracy. If the [ALCOA+ framework](/articles/alcoa-plus-deep-dive) is familiar, Part 11 reads as the system-level implementation of those same ideas.

---

## Electronic Signatures

Part 11 subpart C covers electronic signatures. The requirements are precise, and inspectors check them line by line.

**Uniqueness (11.100(a)).** Each electronic signature must be unique to one individual and never reused by or reassigned to anyone else. No shared accounts. This is the attributability requirement made concrete.

**Identity verification (11.100(b)).** Before assigning an electronic signature to a person, the organization must verify that person's identity.

**Two-component signatures (11.200(a)).** Electronic signatures that are not biometric must use at least two distinct identification components, typically a user ID and a password. When an individual executes a series of signings during a single continuous session, the first signing uses both components and subsequent signings may use one, provided the session controls prevent anyone else from stepping in. Signings not performed in a single continuous session require both components each time. This is why a system that asks for a password again at each approval, even though you are already logged in, is doing exactly what the regulation expects.

**Non-repudiation (11.70).** Electronic signatures must be linked to their respective electronic records so the signature cannot be cut, copied, or transferred to falsify another record. A signature that is merely an image annotation on a PDF, removable and re-stampable onto a different document, is not a compliant electronic signature.

**Signature manifestation (11.50).** Signed records must show the printed name of the signer, the date and time the signature was executed, and the meaning of the signature, such as "reviewed by," "approved by," or "performed by." This information must appear on any human-readable form of the record, including printouts.

**Agency certification (11.100(c)).** Before or at the time of first using electronic signatures, an organization must certify to FDA, in a paper letter signed with a traditional handwritten signature, that it intends its electronic signatures to be the legally binding equivalent of handwritten signatures. This is a one-time certification to the agency, not a per-system filing.

A worked example helps tie these together. An analyst finishes a chromatography run and approves the result. A compliant flow: the analyst is already logged in under a unique account, the system prompts for the password again, the analyst selects the meaning "approved by" from a controlled list, and the system writes the printed name, the timestamp, and the meaning into the record and locks that signature to that exact record version. If the result is later reprocessed, the prior signature does not silently carry over to the new version. Each of those behaviors traces to a specific clause above, and the absence of any one of them is a common inspection finding.

---

## The FDA's Narrow-Scope Interpretation (2003)

In August 2003 FDA issued the guidance [Part 11, Electronic Records; Electronic Signatures, Scope and Application](https://www.fda.gov/media/75414/download), which reshaped how the regulation is applied in practice.

The guidance announced that FDA intended to interpret the scope of Part 11 narrowly and to exercise enforcement discretion over several of the more prescriptive technical requirements, including some controls around validation, audit trails, record copies, and record retention. The stated reason was that an overly broad reading had discouraged useful technology and imposed cost without a corresponding gain in record reliability.

The pivot was to refocus on the predicate rules. FDA said it would concentrate enforcement on whether the underlying records were accurate, complete, and reliable, the data integrity fundamentals, rather than treating every technical Part 11 gap as a violation in its own right. The guidance did not rescind Part 11, and it did not exempt new systems. The regulation remains in force. What changed was prosecutorial emphasis: a technical shortfall is far more serious when it lets bad data through than when it is a paperwork mismatch on a system whose records are otherwise sound.

For anyone reading 483s and warning letters issued since the data integrity enforcement wave that gained momentum after 2015, the practical result is clear. FDA cites Part 11 most often when an audit trail was off, a record was overwritten, or shared logins made attribution impossible, that is, when the technical gap actually compromised data reliability. The 2003 guidance is best read alongside the broader [computer software assurance approach](/articles/computer-software-assurance-fda), which carries the same philosophy into how FDA expects validation effort to be focused on patient and product risk rather than documentation volume.

---

## EU Annex 11: The European Framework

[EudraLex Volume 4, Annex 11, Computerised Systems](https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf) is the European GMP annex governing computerized systems. The current version took effect on June 30, 2011, and it is broader in scope than Part 11. Where Part 11 is about records and signatures, Annex 11 covers the whole lifecycle of a computerized system, from supplier selection through retirement.

Annex 11 is organized as principles followed by numbered clauses grouped under three headings: general, project phase, and operational phase. Several clauses have no direct Part 11 equivalent.

**Annex 11 is lifecycle-wide.** It addresses risk management as a thread through the whole lifecycle (Principle and clause 1), supplier and service provider assessment (clause 3.2), and formal validation with traceability between requirements and testing (clause 4).

**Annex 11 is explicit on data integrity.** Clause 5 requires built-in checks for the correct and secure entry and processing of data where the system exchanges data electronically with other systems. Clause 6 requires accuracy checks for critical data entered manually. Clause 9 requires consideration, based on a risk assessment, of building an audit trail that records GMP-relevant changes and deletions, and clause 12 covers security and access control.

**Annex 11 addresses storage and backup.** Clause 7 requires that data be secured against damage by both physical and electronic means and that stored data be checked for accessibility, readability, and accuracy. Clause 7.2 requires regular backups and verification that backups can be restored.

**Annex 11 requires business continuity.** Clause 16 requires arrangements to ensure continuity of support for processes in the event of a system breakdown, with the recovery time matched to the criticality of the process. This is a documented, tested disaster recovery expectation, covered in depth in the [backup, restore, and disaster recovery validation article](/articles/backup-restore-disaster-recovery-validation).

**Annex 11 names third parties directly.** Clause 3 sets expectations for any third party involved in providing, installing, configuring, integrating, validating, maintaining, or operating a system, and requires formal agreements that define each party's responsibilities. Clause 7.2 also reaches data held on behalf of the company by a third party.

---

## Where Annex 11 and Part 11 Overlap and Diverge

The two regulations cover much of the same ground but allocate it differently. The table below maps the main areas.

| Requirement | Part 11 | Annex 11 |
|---|---|---|
| System validation | 11.10(a) | Clause 4 (detailed, traceability required) |
| Risk management | Implicit | Principle and Clause 1 (explicit) |
| Audit trails | 11.10(e) | Clause 9 (risk-based) |
| Access controls and security | 11.10(d), (g) | Clause 12 |
| Electronic signatures | Subpart C | Clause 14 |
| Data accuracy checks | 11.10(f), (h) | Clause 5, Clause 6 |
| Data retention and archiving | 11.10(b), (c) | Clause 7, Clause 17 |
| Backup and restore | Not explicit | Clause 7.2 (required) |
| Disaster recovery / continuity | Not explicit | Clause 16 (required) |
| Third-party and cloud | 11.30 (open systems) | Clause 3 (explicit, agreement required) |
| Periodic evaluation | Not specified | Clause 11 (required) |
| Change and configuration mgmt | Implicit | Clause 10 |
| Incident management | Not specified | Clause 13 |

For a company selling into both the US and the EU, a single system has to satisfy both frameworks at once. The good news is that they do not conflict. A system designed for full Part 11 compliance and validated using a recognized lifecycle method, such as the approach described in the [GAMP 5 framework](/articles/gamp5-csv-framework), will meet most of Annex 11 on its own. The predictable gaps are the clauses where Annex 11 is more explicit: documented and tested business continuity (clause 16), incident management (clause 13), periodic evaluation (clause 11), and written agreements with service providers (clause 3). Teams that build to Part 11 alone and then enter the EU market usually find their remediation list concentrated in exactly those four areas.

The deeper inspection-culture differences between the two agencies, beyond the regulations themselves, are covered in [FDA vs EMA inspection dynamics](/articles/fda-vs-ema-inspection-dynamics).

---

## What Gets Cited in Inspections

Based on publicly available FDA Form 483 observations and warning letters, the Part 11 failures cited most often are the ones that broke data reliability, not the formatting nitpicks.

1. **Audit trail gaps.** Audit trail disabled, never turned on, configurable to be turned off by ordinary users, or incomplete because it failed to capture prior values on a change (11.10(e)). This is consistently among the most common observations.
2. **Shared and generic accounts.** A single shared login used by a whole shift, or generic accounts such as a common analyst password, which makes attribution and signature uniqueness impossible (11.100(a), 11.10(d)).
3. **Excessive privilege.** Analysts holding administrator rights that let them change methods, clock settings, or delete data, with no separation between the person who runs the test and the person who can alter the system (11.10(d), (g)).
4. **Validation gaps.** Systems used to make GxP decisions with no documented validation, or validation that never tested the data integrity controls it claimed (11.10(a)).
5. **Signature manifestation gaps.** Signatures that do not capture the meaning, the printed name, or the date and time, or that do not appear on the printed copy (11.50).

For Annex 11, EU inspectors additionally probe:

- Backup and restore that has been performed but never verified by an actual test restore (clause 7.2)
- Business continuity and recovery arrangements that exist on paper but were never exercised (clause 16)
- Service provider arrangements with no formal agreement defining responsibilities, especially for cloud and contract operations (clause 3)
- Periodic evaluations that were due but never carried out (clause 11)

A recurring theme runs through both lists. The findings cluster where a control that exists on paper was never actually working, or never actually tested, in production. An audit trail you can configure off, a backup nobody has restored, an account whose owner cannot be identified. These are the findings to hunt for in your own self-assessment before an inspector does. The [Part 11 and Annex 11 practical implementation guide](/articles/part-11-annex-11-practical-guide) and the [CSV and CSA audit checklist](/articles/csv-csa-audit-checklist) give a structured way to look.

---

## Practical Implication for System Design

The actionable takeaway from both regulations: evaluate a GxP system against these requirements before you deploy it, not after a finding forces the question.

A system assessment that tests Part 11 and Annex 11 readiness should answer, with evidence, the following:

- **Audit trail.** Is it on by default, can ordinary users disable it, does it record old and new values with user and timestamp, and can a reviewer read it without exporting raw database tables?
- **Account management.** Can each person have an individual account, are shared accounts prevented or at least detectable, and is there a documented process for granting, reviewing, and removing access?
- **Electronic signatures.** Does the system enforce two components, re-prompt appropriately within and across sessions, capture the meaning and printed name and timestamp, bind the signature to that record version, and carry that information onto printouts?
- **Authority and segregation.** Are roles defined so the person entering or running data cannot also approve it, and is administrator access restricted to a small, named, non-operational group?
- **Record copies and retention.** Can the system produce complete, human-readable copies that retain metadata, and will those records stay readable for the full predicate-rule retention period?
- **Backup, restore, and continuity.** Are backups taken, has a restore actually been tested, and is there a tested continuity plan matched to the system's criticality?
- **Third parties.** For any cloud or contracted operation, is there a written agreement defining responsibilities, and have you assessed the provider's controls rather than assumed them?

One closing distinction is worth carrying into every vendor conversation. "The system supports Part 11" is a marketing statement about capability. "The system is configured, validated, and operating to meet Part 11 and Annex 11 requirements at our site" is the statement an inspector will test. Most commercial LIMS, electronic lab notebook, chromatography data system, and MES products on the market today, including widely used platforms such as Waters Empower for chromatography, can be brought into compliance, but every one of them ships with settings that are not compliant out of the box. Default audit trail configurations, default account setups, and default permission grants frequently need to be changed during configuration and locked down during validation. The regulation is satisfied by how you set the system up and operate it, not by the feature list on the datasheet.

For the broader context that these two regulations sit within, see the [data integrity foundations](/articles/data-integrity-foundations) article and the overview of [GxP computerized systems operations](/articles/gxp-computerized-systems-operations).
