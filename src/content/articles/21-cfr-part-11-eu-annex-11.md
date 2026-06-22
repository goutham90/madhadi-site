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

Understanding both, and the differences between them, is foundational for anyone working on computer system validation, quality systems design, or FDA and EMA inspection preparation. This article walks through the structure of each regulation, the specific clauses that get tested in an inspection, and how to translate the legal text into design decisions you can actually make when you select or configure a system. The same controls apply across small-molecule pharma, biologics, vaccines, medical devices, in-vitro diagnostics, and the wider life-sciences sector. The technology differs; the rules for trusting a digital record do not.

---

## Why These Two Regulations Exist

It helps to remember what these rules replaced. For most of the twentieth century, a GMP record was a paper batch record signed in ink, a lab notebook page, a chart printed from an instrument. The control mechanisms were physical: a locked archive room, a controlled-copy stamp, a signature you could compare against a specimen card. When records moved onto computers in the 1980s and 1990s, every one of those physical controls disappeared. A digital record can be edited with no visible trace, copied a thousand times, backdated, or deleted in a keystroke. A typed name at the bottom of a screen proves nothing about who actually pressed the button.

Part 11 and Annex 11 exist to rebuild, in software and procedure, the assurance that ink and paper used to provide for free. Part 11 took effect on August 20, 1997. Its central promise is conditional: if you meet the controls in the regulation, FDA will treat your electronic records and signatures as the legal equivalent of paper and ink. If you do not, your electronic records may not satisfy the underlying GMP, GLP, or GCP recordkeeping requirements at all. That linkage to the underlying requirement, which FDA calls the "predicate rule," is the single most important concept for reading Part 11 correctly. Part 11 never stands alone. It always sits on top of a predicate rule that already required the record to exist.

A predicate rule is just the other FDA regulation that obliges you to keep the record in the first place. For drug manufacturing it is 21 CFR 211 (cGMP for finished pharmaceuticals). For nonclinical safety studies it is 21 CFR 58 (GLP). For clinical trials it is 21 CFR 312 and the GCP regulations. For medical devices it is 21 CFR 820 (the Quality System Regulation, transitioning to the Quality Management System Regulation under 21 CFR 820 as amended). Part 11 supplies the electronic controls; the predicate rule supplies the reason the record must exist and how long it must be kept. When you assess a system, identify its predicate rule first. Everything else follows from it.

---

## What 21 CFR Part 11 Actually Covers

Part 11 establishes the technical and procedural controls that must be in place for:

- Electronic records to be accepted as equivalent to paper records
- Electronic signatures to be accepted as equivalent to handwritten signatures

The regulation applies to electronic records and signatures that are "created, modified, maintained, archived, retrieved, or transmitted under any records requirements set forth in FDA regulations." That phrasing is deliberately broad. It reaches any GxP electronic record, from batch records to laboratory results to release approvals, as long as some other FDA regulation requires that record to be kept.

A useful test for whether Part 11 applies to a given record: ask whether you would have to show that record to an inspector to demonstrate compliance with a predicate rule. If yes, and the record lives in electronic form, Part 11 applies. A spreadsheet a chemist keeps for personal convenience that duplicates a fully maintained paper record is generally outside scope. The same spreadsheet, if it becomes the official record used to make a release decision, is squarely inside scope. The determining factor is the role the record plays, not the technology it runs on.

The key structural distinction in Part 11 is between open and closed systems, because the required controls differ depending on who controls access.

### A scoping decision you can defend

The first deliverable on any new system is a documented Part 11 / Annex 11 applicability assessment. It is short, it is signed, and it answers four questions in order:

1. **Does the system create, modify, maintain, archive, retrieve, or transmit a GxP record?** If no, Part 11 does not apply and you document that conclusion. If yes, continue.
2. **What is the predicate rule?** Name it. A system can have more than one (a stability LIMS touches both 211 and the stability commitments in the marketing application).
3. **Is the electronic record the official record, or is paper the official record?** If the printout is signed in ink and archived, and the electronic file is a convenience copy only, you may be running a hybrid system (see the [hybrid paper and electronic records](/articles/hybrid-paper-electronic-records) article). If the electronic record is what you would defend to an inspector, full Part 11 applies.
4. **Are electronic signatures used?** If approvals are captured electronically, subpart C applies on top of the record controls.

Keep this assessment with the validation package. When an inspector asks "is this system Part 11 in scope," the answer is a one-page document, not a debate in the room.

---

## Open vs Closed Systems

**Closed system.** An environment in which system access is controlled by the persons who are responsible for the content of the electronic records. In practice, this is a validated internal system that only authorized company personnel can reach, such as a LIMS on a corporate network. The system administrator, who answers to the same quality organization that owns the data, controls who can log in and what they can do.

**Open system.** An environment in which system access is not controlled by the persons responsible for the content. In practice, this is a system reachable over the public internet, or one where third parties hold access you do not fully govern: a submission portal, a contract lab's shared platform, or a multi-tenant cloud application where the provider's staff can technically reach the infrastructure.

Open systems require additional controls beyond closed systems, because authenticity has to survive a boundary you do not own. Section 11.30 calls for measures such as document encryption and the use of appropriate digital signature standards to ensure record authenticity, integrity, and confidentiality from the point of creation to the point of receipt.

Here is a point that trips up a lot of teams. Whether a system is "open" or "closed" is not decided by whether it is hosted in a data center versus the cloud. It is decided by who controls access to the content. A cloud-hosted application can be a closed system if access to the records is controlled entirely by your organization through your own identity management, your own access reviews, and a vendor contract that walls off provider personnel. What matters is the access control reality, documented and verified, not the marketing label on the deployment model. The requirements in 11.10 apply to closed systems. The additional requirements in 11.30 apply to open systems. Most GxP manufacturing systems are operated as closed systems.

### Deciding the classification in practice

Run the test against actual access, not architecture:

| Scenario | Open or closed | Why |
|---|---|---|
| LIMS on the internal network, accounts managed by your IT | Closed | You control access to the content |
| SaaS quality system, your SSO controls logins, contract bars provider staff from production data | Closed | Access to content is yours despite cloud hosting |
| Contract lab portal where the CRO grants and removes its own users | Open | A party you do not govern controls access |
| Public regulatory submission gateway | Open | Records cross a boundary you do not own |
| Multi-tenant app where vendor support engineers can read production records with no contractual or technical wall | Open | Provider personnel can reach the content |

When in doubt, classify as open and add the 11.30 controls (encryption in transit and at rest, appropriate signature integrity controls). The cost of treating a closed system as open is a little extra encryption. The cost of treating an open system as closed is records an inspector will not trust. For the deeper cloud and software-as-a-service questions, see [cloud and SaaS validation](/articles/cloud-saas-validation) and [software supplier assessment](/articles/software-supplier-assessment-csa).

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

### What each control looks like when it is working

Reading the clauses is one thing; recognizing a compliant configuration is another. The table below turns each requirement into something you can verify with evidence.

| Clause | Design control | Evidence that it works |
|---|---|---|
| 11.10(a) Validation | Risk-based validation covering the data integrity controls, not just functionality | Signed validation summary, traced requirements, test scripts that challenge the audit trail and access rules |
| 11.10(b) Copies | Export to PDF and to an open electronic format, with metadata included | A printed record and an exported file that both show result, units, audit trail, and signatures |
| 11.10(c) Protection | Backup, archive, and read access controls across the retention period | Restore test result, retention schedule mapped to the predicate rule |
| 11.10(d) Access | Individual named accounts, no shared logins | User list reconciled to active employees, joiner/mover/leaver records |
| 11.10(e) Audit trail | On by default, captures who/what/when/old value/new value/reason where required, cannot be disabled by users | Configuration screenshot, a test change showing the before value preserved |
| 11.10(f) Sequencing | Workflow enforces logical order of steps | Negative test: system blocks recording a result before the test is started |
| 11.10(g) Authority | Role-based access matrix; the system checks rights at each action | Role matrix document, test that an unauthorized role is denied |
| 11.10(h) Device | Input restricted to qualified terminals or instruments where relevant | Interface qualification, IP or device allow-listing config |
| 11.10(i) Training | Role-based training before access is granted | Training records dated before the access grant |
| 11.10(j) Policy | Signed accountability policy and signature agreement | The policy, plus each user's signed acknowledgment |
| 11.10(k) Documentation | Controlled SOPs and admin guides under change control | Document control records, revision history |

When you build a Part 11 assessment, this table is effectively your checklist. For a ready-made structured version, see the [CSV and CSA audit checklist](/articles/csv-csa-audit-checklist).

---

## Electronic Signatures

Part 11 subpart C covers electronic signatures. The requirements are precise, and inspectors check them line by line.

**Uniqueness (11.100(a)).** Each electronic signature must be unique to one individual and never reused by or reassigned to anyone else. No shared accounts. This is the attributability requirement made concrete.

**Identity verification (11.100(b)).** Before assigning an electronic signature to a person, the organization must verify that person's identity.

**Two-component signatures (11.200(a)).** Electronic signatures that are not biometric must use at least two distinct identification components, typically a user ID and a password. When an individual executes a series of signings during a single continuous session, the first signing uses both components and subsequent signings may use one, provided the session controls prevent anyone else from stepping in. Signings not performed in a single continuous session require both components each time. This is why a system that asks for a password again at each approval, even though you are already logged in, is doing exactly what the regulation expects.

**Non-repudiation (11.70).** Electronic signatures must be linked to their respective electronic records so the signature cannot be cut, copied, or transferred to falsify another record. A signature that is merely an image annotation on a PDF, removable and re-stampable onto a different document, is not a compliant electronic signature.

**Signature manifestation (11.50).** Signed records must show the printed name of the signer, the date and time the signature was executed, and the meaning of the signature, such as "reviewed by," "approved by," or "performed by." This information must appear on any human-readable form of the record, including printouts.

**Agency certification (11.100(c)).** Before or at the time of first using electronic signatures, an organization must certify to FDA, in a paper letter signed with a traditional handwritten signature, that it intends its electronic signatures to be the legally binding equivalent of handwritten signatures. This is a one-time certification to the agency, not a per-system filing. The letter goes to the FDA Office of Regional Operations, references 21 CFR 11.100(c), and need only be submitted once for the organization. Keep a copy; inspectors sometimes ask to see it.

A worked example helps tie these together. An analyst finishes a chromatography run and approves the result. A compliant flow: the analyst is already logged in under a unique account, the system prompts for the password again, the analyst selects the meaning "approved by" from a controlled list, and the system writes the printed name, the timestamp, and the meaning into the record and locks that signature to that exact record version. If the result is later reprocessed, the prior signature does not silently carry over to the new version. Each of those behaviors traces to a specific clause above, and the absence of any one of them is a common inspection finding.

### A sample signature manifestation

This is what a compliant signed record shows on screen and on the printout. Every field maps to a clause.

```
Result record: Assay, Lot 2024-0417, HPLC potency
Value: 99.2% (label claim)

Performed by:  J. Okafor (Analyst)      2024-04-17 14:22:06 EDT
Reviewed by:   M. Lindqvist (Reviewer)  2024-04-17 16:05:41 EDT
Approved by:   P. Adeyemi (QC Manager)   2024-04-18 09:11:33 EDT

Each signature bound to record version 2 (post-integration).
Audit trail attached. System clock synchronized to NTP.
```

Three things make this compliant rather than decorative: each line shows printed name, timestamp, and meaning (11.50); the names are individual accounts, not roles or shared logins (11.100(a)); and the signatures are bound to a specific record version, so a later reprocess does not inherit them (11.70). The full mechanics of building this into a system are in [electronic signatures implementation](/articles/electronic-signatures-implementation).

### Roles and responsibilities for the signature program

| Role | Responsibility |
|---|---|
| System owner (business) | Defines who needs which signing rights and the meanings used |
| IT / system administrator | Configures two-component signing, session controls, identity binding |
| Quality assurance | Owns the accountability policy, approves the role matrix, audits attribution |
| HR / identity management | Verifies identity before a signature is assigned (11.100(b)) |
| Individual user | Signs the accountability agreement, never shares credentials |
| Regulatory affairs | Files and retains the 11.100(c) certification letter to FDA |

---

## The FDA's Narrow-Scope Interpretation (2003)

In August 2003 FDA issued the guidance [Part 11, Electronic Records; Electronic Signatures, Scope and Application](https://www.fda.gov/media/75414/download), which reshaped how the regulation is applied in practice.

The guidance announced that FDA intended to interpret the scope of Part 11 narrowly and to exercise enforcement discretion over several of the more prescriptive technical requirements, including some controls around validation, audit trails, record copies, and record retention. The stated reason was that an overly broad reading had discouraged useful technology and imposed cost without a corresponding gain in record reliability.

The pivot was to refocus on the predicate rules. FDA said it would concentrate enforcement on whether the underlying records were accurate, complete, and reliable, the data integrity fundamentals, rather than treating every technical Part 11 gap as a violation in its own right. The guidance did not rescind Part 11, and it did not exempt new systems. The regulation remains in force. What changed was prosecutorial emphasis: a technical shortfall is far more serious when it lets bad data through than when it is a paperwork mismatch on a system whose records are otherwise sound.

For anyone reading 483s and warning letters issued since the data integrity enforcement wave that gained momentum after 2015, the practical result is clear. FDA cites Part 11 most often when an audit trail was off, a record was overwritten, or shared logins made attribution impossible, that is, when the technical gap actually compromised data reliability. The 2003 guidance is best read alongside the broader [computer software assurance approach](/articles/computer-software-assurance-fda), which carries the same philosophy into how FDA expects validation effort to be focused on patient and product risk rather than documentation volume. Note the timing precisely: FDA published the Computer Software Assurance document as a draft in 2022 and finalized it in 2025. The narrow-scope guidance and the CSA approach share one idea: spend your effort where a failure would hurt the product or the patient, not on documentation for its own sake.

---

## EU Annex 11: The European Framework

[EudraLex Volume 4, Annex 11, Computerised Systems](https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf) is the European GMP annex governing computerized systems. The current version took effect on June 30, 2011, and it is broader in scope than Part 11. Where Part 11 is about records and signatures, Annex 11 covers the whole lifecycle of a computerized system, from supplier selection through retirement.

Annex 11 is organized as principles followed by numbered clauses grouped under three headings: general, project phase, and operational phase. Several clauses have no direct Part 11 equivalent.

**Annex 11 is lifecycle-wide.** It addresses risk management as a thread through the whole lifecycle (Principle and clause 1), supplier and service provider assessment (clause 3.2), and formal validation with traceability between requirements and testing (clause 4).

**Annex 11 is explicit on data integrity.** Clause 5 requires built-in checks for the correct and secure entry and processing of data where the system exchanges data electronically with other systems. Clause 6 requires accuracy checks for critical data entered manually. Clause 9 requires consideration, based on a risk assessment, of building an audit trail that records GMP-relevant changes and deletions, and clause 12 covers security and access control.

**Annex 11 addresses storage and backup.** Clause 7 requires that data be secured against damage by both physical and electronic means and that stored data be checked for accessibility, readability, and accuracy. Clause 7.2 requires regular backups and verification that backups can be restored.

**Annex 11 requires business continuity.** Clause 16 requires arrangements to ensure continuity of support for processes in the event of a system breakdown, with the recovery time matched to the criticality of the process. This is a documented, tested disaster recovery expectation, covered in depth in the [backup, restore, and disaster recovery validation article](/articles/backup-restore-disaster-recovery-validation).

**Annex 11 names third parties directly.** Clause 3 sets expectations for any third party involved in providing, installing, configuring, integrating, validating, maintaining, or operating a system, and requires formal agreements that define each party's responsibilities. Clause 7.2 also reaches data held on behalf of the company by a third party.

### The Annex 11 clauses by lifecycle phase

It helps to read Annex 11 the way an EU inspector does, by where in the system's life each clause bites.

| Phase | Clauses | What it asks for |
|---|---|---|
| Principle / general | Principle, 1 (risk management), 2 (personnel) | Risk-based effort, defined roles for owner, process owner, QP |
| Project phase | 3 (suppliers), 4 (validation), 5 (system interfaces) | Supplier assessment, validation with traceability, interface checks |
| Operational phase | 6 (accuracy checks), 7 (data storage/backup), 8 (printouts), 9 (audit trails), 10 (change/config), 11 (periodic evaluation), 12 (security), 13 (incident management), 14 (e-signatures), 15 (batch release), 16 (business continuity), 17 (archiving) | The day-to-day controls an inspector tests on a running system |

Two clauses deserve a closer look because they have no Part 11 twin and are frequent findings. Clause 11 (periodic evaluation) requires that computerized systems be evaluated periodically to confirm they remain in a validated state and compliant; the output is a short report on a defined frequency, usually annual to triennial based on risk. Clause 15 (batch release) requires that when a system is used to release a batch, it shows clearly whether the Qualified Person has performed the release, a point that ties to [QP batch release under Annex 16](/articles/qualified-person-batch-release-annex-16).

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

There is one more difference worth carrying in your head. Part 11 is a binding regulation with the force of law; a violation can support a 483 observation or a warning letter directly. Annex 11 is a GMP annex, an expectation that EU and MRA-partner inspectors enforce through the GMP framework rather than a standalone statute. In day-to-day practice both get cited and both get remediated, but the legal mechanics differ, which is why the same gap can read slightly differently in a US 483 versus an EU inspection report.

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

### Common mistakes, and how each one actually fails

These are the patterns that turn into findings, with the underlying reason and the fix.

| Mistake | Why it fails the rule | Fix |
|---|---|---|
| Audit trail switched on but never reviewed | A trail nobody reads is a control in name only; reviewers miss the overwrite that mattered | Build audit trail review into batch and result review, risk-based. See [operationalizing audit trail review](/articles/operationalizing-audit-trail-review) |
| Time set manually by users | A signature timestamp you cannot trust is not evidence of when something happened | Lock the clock, sync to a network time source, restrict who can change it. See [time stamps and system clock control](/articles/time-stamps-and-system-clock-control) |
| "System is 21 CFR Part 11 compliant" taken from the datasheet | Compliance is how you configure and operate, not a feature flag | Verify each control in your validated configuration, not the vendor brochure |
| One generic admin account shared by the IT team | Breaks uniqueness and attribution for the most powerful actions on the system | Named admin accounts, least privilege, no operational user holds admin |
| Spreadsheet treated as out of scope because "it is just Excel" | If it makes a GxP decision it is in scope regardless of the tool | Validate or replace it. See [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation) |
| Backups taken, restore never tested | Clause 7.2 wants proof you can get the data back, not proof you copied it | Schedule and document an actual restore test |
| E-signature is a pasted image on a PDF | Removable and reusable, so it is not bound to the record (11.70) | Use a system that cryptographically or transactionally binds signature to record version |

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

### A practical configuration checklist for a new system

Use this when you receive a system for configuration and validation. Each line produces a documented decision.

1. Confirm the predicate rule and retention period; set the archive policy to match.
2. Turn the audit trail on, confirm it cannot be disabled by any non-admin role, and confirm it captures old value, new value, user, timestamp, and reason where the change is to a critical field.
3. Synchronize the system clock to a controlled network time source and restrict clock changes to named admins.
4. Build the role matrix so the person who runs or enters data cannot approve it; remove the default "everyone is admin" template.
5. Replace any shared or generic accounts with named individual accounts; enable account lockout and inactivity timeout.
6. Configure two-component electronic signatures with the correct meanings, session re-prompt behavior, and binding to the record version.
7. Confirm the system can export a complete human-readable copy with metadata and audit trail, and test it.
8. For a cloud or contracted system, confirm the written agreement and the open-system encryption controls under 11.30.
9. Schedule the first periodic evaluation (Annex 11 clause 11) and the first restore test (clause 7.2).
10. Write the applicability assessment, the role matrix, and the configuration record into the validation package.

For the full set of validation documents this sits inside, see the [validation deliverables guide](/articles/validation-deliverables-guide) and [user requirements and traceability](/articles/user-requirements-and-traceability).

---

## Interview and Inspection Questions

These are the questions that come up in a Part 11 / Annex 11 interview or in the room during an inspection. Short, defensible answers below.

**"What is a predicate rule and why does it matter for Part 11?"**
It is the underlying FDA regulation that requires the record to exist (211 for cGMP, 58 for GLP, the GCP regulations for clinical, 820 for devices). Part 11 only applies to records a predicate rule already requires, and it adds electronic controls on top. The 2003 scope guidance refocused enforcement on whether those predicate-rule records are accurate, complete, and reliable.

**"How do you decide if a system is open or closed?"**
By who controls access to the content, not by where it is hosted. If your organization controls access through your own identity management and a contract that walls off provider staff, it is closed even in the cloud. If a party you do not govern controls access, or records cross a public boundary, it is open and needs the 11.30 controls. When unsure, treat it as open.

**"Walk me through a compliant electronic signature."**
Unique account per person (11.100(a)), identity verified before assignment (11.100(b)), two components for the first signing in a session and re-prompt across sessions (11.200(a)), bound to the specific record version so it cannot be copied to another record (11.70), and the printed name, timestamp, and meaning shown on screen and on the printout (11.50). One-time certification letter to FDA under 11.100(c).

**"What is the difference between Part 11 and Annex 11 on audit trails?"**
Part 11.10(e) requires a computer-generated, time-stamped audit trail for create, modify, delete actions, retained as long as the record. Annex 11 clause 9 is risk-based: you build the audit trail for GMP-relevant changes based on a risk assessment. In practice both expect old and new values, user, and timestamp on critical data, and both expect the trail to be reviewed, not just generated.

**"A vendor says their product is Part 11 compliant. Is that enough?"**
No. Capability is not compliance. Every commercial GxP system ships with non-compliant defaults. Compliance is established by how you configure, validate, and operate it at your site, evidenced in your validation package, not by the datasheet.

**"What are the most common Part 11 findings?"**
Audit trails off or able to be turned off, shared or generic logins that break attribution, analysts with admin rights, no validation of the data integrity controls, and signature manifestations missing the meaning, name, timestamp, or printout. They share a theme: a control that existed on paper was not actually working in production.

**"Where does a Part 11 system usually fall short of Annex 11?"**
Business continuity tested (clause 16), incident management (clause 13), periodic evaluation (clause 11), and written service-provider agreements (clause 3). A Part 11-built system entering the EU market typically concentrates its gaps there.

**"How does CSA change how you validate a Part 11 system?"**
The Computer Software Assurance approach, draft in 2022 and finalized in 2025, asks you to focus testing effort on the functions that affect product quality and patient safety and to use less documentation-heavy methods on low-risk functions. It does not lower the bar on the data integrity controls; it redirects effort toward where a failure would actually matter.

For broader interview preparation across the quality field, see [GxP quality interview preparation](/articles/gxp-quality-interview-preparation).

---

For the broader context that these two regulations sit within, see the [data integrity foundations](/articles/data-integrity-foundations) article and the overview of [GxP computerized systems operations](/articles/gxp-computerized-systems-operations). For how these controls combine with risk-based validation across a system's life, the [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology) and [change control for validated systems](/articles/change-control-validated-systems) articles carry the operational thread forward.
