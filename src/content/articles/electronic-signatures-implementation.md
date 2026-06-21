---
title: "Implementing Compliant Electronic Signatures: Binding, Manifestation, and Re-Authentication"
description: "How to design, configure, and qualify electronic signatures under 21 CFR Part 11 and EU Annex 11, covering signature-to-record binding, signature manifestation, continuous-session re-authentication, and the choice between password and biometric methods."
pubDate: 2026-06-20
tags: ["part-11", "annex-11", "electronic-signatures", "csv", "data-integrity", "access-control"]
pillar: "csv-csa"
tier: "Intermediate"
---

An electronic signature is the regulated substitute for a handwritten signature on a GxP record. When a release authority approves a batch, when an analyst signs a result, when a QA reviewer approves a deviation, the signature is the legally binding act that attaches a person, an intent, and a moment in time to a specific record. Get the mechanics wrong and the signature is repudiable, the record is questionable, and the inspector will treat every downstream decision as suspect.

This article covers the three mechanics that inspectors actually probe: how a signature is bound to the record it signs, how it is manifested so a human reading the record can see who signed and why, and how the system re-authenticates a signer during a working session. It also covers the choice between password and biometric methods, the controls that sit underneath signatures (identity, non-repudiation, uniqueness), and the procedural framework that makes the whole thing defensible.

The scope is the two regulations that govern electronic signatures in pharma and biotech: the US FDA rule and the EU GMP annex. For the foundational rule text and the open-vs-closed-system distinction, start with [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11) and the [Part 11 / Annex 11 practical guide](/articles/part-11-annex-11-practical-guide). This article goes one level deeper into the signature object itself.

---

## The regulatory basis: what the rules actually require

### 21 CFR Part 11 (US FDA)

21 CFR Part 11, "Electronic Records; Electronic Signatures," published in the Federal Register in March 1997 and effective August 1997, is the controlling US rule. The signature requirements are concentrated in Subpart C (sections 11.100, 11.200, 11.300) and the signature/record linking requirement in Subpart B at 11.70.

The clauses you must be able to quote:

- **11.50 (Signature manifestations).** Signed electronic records must contain information associated with the signing that clearly indicates the printed name of the signer, the date and time the signature was executed, and the meaning associated with the signature (such as review, approval, responsibility, or authorship). This information must be subject to the same controls as the record and must appear on any human-readable form of the record, including printouts and displays.

- **11.70 (Signature/record linking).** Electronic signatures and handwritten signatures executed to electronic records must be linked to their respective records to ensure the signatures cannot be excised, copied, or otherwise transferred to falsify an electronic record by ordinary means.

- **11.100 (General requirements).** Each electronic signature must be unique to one individual and not reused by, or reassigned to, anyone else. Before an organization uses electronic signatures, it must verify the identity of the individual. The rule also requires a certification to the FDA (a one-time letter) that the organization's electronic signatures are the legally binding equivalent of handwritten signatures.

- **11.200 (Electronic signature components and controls).** Signatures not based on biometrics must employ at least two distinct identification components, typically a user ID and a password. The rule sets out the continuous-session re-authentication logic that this article treats in detail. Signatures based on biometrics must be designed to ensure they cannot be used by anyone other than their genuine owner.

- **11.300 (Controls for identification codes/passwords).** Covers uniqueness of the ID/password combination, periodic password aging, loss management, unauthorized-use detection and reporting, and testing of any device that bears or generates codes.

> 11.200(a): "Employ at least two distinct identification components such as an identification code and password."

### EU GMP Annex 11 (Computerised Systems) and Eudralex Volume 4

Annex 11 of the EU GMP Guide, in force since June 2011, is the European counterpart. It is principle-based rather than prescriptive, so it states outcomes rather than two-component mechanics. The relevant clause is Annex 11 section 14 (Electronic Signatures):

> "Electronic records may be signed electronically. Electronic signatures are expected to: a) have the same impact as hand-written signatures within the boundaries of the company, b) be permanently linked to their respective record, c) include the time and date that they were applied."

Annex 11 also leans on EU GMP Chapter 4 (Documentation) for the record-control principles and on the eIDAS Regulation (Regulation (EU) No 910/2014) when a signature must carry legal weight outside the company boundary, for example on a Qualified Person's declaration that travels with a batch. eIDAS defines simple, advanced, and qualified electronic signatures; most internal GMP signatures sit at the "advanced" tier in practical terms, while cross-company or regulatory-facing signatures may need a qualified electronic signature backed by a certificate.

### Why this matters (the quality rationale)

A signature is a control against three failure modes: someone signing who is not who they claim to be (identity failure), a signature being moved or copied onto a record it was never meant to sign (binding failure), and a signer later denying they signed (non-repudiation failure). Every requirement above maps to one of those three. When you design a signature implementation, keep asking which of the three a given control defends, because an inspector's questions will be organized that way even if the rule text is not.

---

## Signature-to-record binding

Binding is the single most misunderstood part of electronic signatures, and the most frequently broken in homegrown or spreadsheet-backed systems.

### What "binding" means

Binding is the property that a signature cannot be detached from the exact record state it approved and re-attached to a different record or a different version of the same record. Under 11.70 the signature must be linked so it cannot be excised, copied, or transferred "by ordinary means." Under Annex 11(14)(b) the signature must be "permanently linked" to its record. Both rules are describing the same outcome: the signed thing and the signature are one object, and you cannot quietly swap the thing underneath the signature.

The phrase "by ordinary means" in 11.70 is deliberate. The FDA is not requiring cryptographic unbreakability for every internal signature. It is requiring that a normal user, with normal application privileges, cannot move a signature. A database administrator with direct table access is outside "ordinary means," which is exactly why database-level access control and audit trails are a required compensating layer.

### How binding is actually implemented

There are three common technical approaches, in increasing order of strength:

**1. Relational binding (most common in COTS GxP systems).** The signature is stored as a row that references the record's primary key and, critically, a version identifier or a content hash of the record at signing time. When the record changes, the version increments, and the old signature no longer points at the live version. Good systems display "signed version 3, current version 4: re-signature required."

**2. Hash-based binding.** At signing time the system computes a cryptographic hash (for example SHA-256) of the record's signable content and stores that hash inside the signature row. If a single byte of the record changes, the stored hash no longer matches a freshly computed hash, and the system flags the signature as broken. This is the strongest application-level approach and the one auditors like to see because it is verifiable after the fact.

**3. Digital signatures (PKI).** The signer's private key encrypts a hash of the record, producing a cryptographic signature that anyone with the public key can verify. This is what eIDAS "advanced" and "qualified" signatures use, and what you need when the signature must be verifiable outside your system boundary. It is heavier to operate (certificate lifecycle, key custody, revocation) and usually reserved for regulatory submissions and inter-company documents rather than every in-process approval.

### Acceptance criteria for binding

You can claim binding is correctly implemented when you can demonstrate all of the following, ideally in a validation test script:

| Test | Expected result |
|------|-----------------|
| Sign record, then modify the underlying record content through the application | Signature is invalidated, broken, or the system blocks the edit and forces re-signature |
| Attempt to view a printout/PDF of a signed record | Signer name, meaning, date/time appear and match the signature row |
| Compare signed version vs current version | System clearly shows which version was signed |
| Attempt to copy a signature row to another record via the application UI | Not possible by ordinary means |
| Database-level edit of record (admin) | Audit trail captures it; signature/hash mismatch detectable |

The fifth test is the honest one. Most systems cannot stop a DBA from editing a table directly. What they must do is make that edit detectable: an audit trail entry plus a hash mismatch. Your binding story is incomplete unless you can describe the detective control for the privileged-access case. See [audit trail design and review](/articles/audit-trail-design-and-review) for how the two controls reinforce each other.

### Common binding mistakes

- **Signature stored as a free-text field on the record** ("Approved by J. Smith") with no version link. This is a label, not a signature. The record can be edited after signing with no invalidation. Cited repeatedly in observations on hybrid and spreadsheet systems.
- **Signing the document but not the data** in systems where the displayed document is a rendering of underlying data that can change independently. You signed the PDF view; the source data shifted; the two diverge.
- **Re-rendering on print** so the printout regenerates from current data rather than the signed snapshot, meaning a printed "signed" record can differ from what was signed.
- **No invalidation on edit.** The system lets a signed record be modified and leaves the old signature attached, silently implying approval of content that was never approved.

---

## Signature manifestation

Manifestation is what a human sees. It is the visible evidence, on screen and on paper, that a signing happened, who did it, when, and why.

### What 11.50 requires in the manifestation

Three elements are mandatory under 11.50(a), and all three must appear on any human-readable rendering (11.50(b)):

1. **The printed name of the signer.** Not just a user ID or initials. The full printed name, so that a reader who does not know the user ID scheme can identify the person.
2. **The date and time of signing.** Local or coordinated, but unambiguous. Time zone handling matters; see [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).
3. **The meaning of the signature.** Review, approval, authorship, responsibility, or a more specific verb defined in your procedures. The meaning must be explicit, not inferred from where the signature sits on the page.

Annex 11(14) adds the date and time and the permanent link but is silent on "meaning" as a separate field; in practice EU inspectors expect meaning to be evident, and harmonized global systems carry it anyway.

### What a good manifestation looks like

A compliant on-screen and printed manifestation block:

```
Electronically signed by: Jane A. Smith (jsmith)
Meaning:                  Approved (QA Release)
Date / Time:             20-Jun-2026 14:32:07 EDT (UTC-4)
Record:                  Batch Record BR-4471, version 3
Reason:                  Reviewed against master batch record; no open deviations
```

The "Reason" line is optional under the letter of 11.50 but is good practice and is often required by procedure for approvals and for any signature applied to a deviation, change, or out-of-specification result. The version reference ties manifestation back to binding.

### Manifestation acceptance criteria

- All three mandatory elements present on screen and on every printout and PDF export, verified in IQ/OQ test cases.
- Printed name resolves to a real, identity-verified individual, not a shared or generic account.
- Meaning is from a controlled, configured list, not free text that a user could leave blank.
- The manifestation is rendered from the signed snapshot, not regenerated from live data.
- Manifestation survives export: if the record is exported to PDF or sent to a regulator, the signature block travels with it.

### Common manifestation mistakes

- **Initials or user ID only, no printed name.** A frequent observation; "jsmith" on a printout is not a manifestation if a reviewer cannot map it to a person without consulting a separate user list.
- **Missing meaning.** The signature shows who and when but not why, so a reviewer cannot tell authorship from approval.
- **Meaning that does not match the workflow.** A configured "Approved" applied at a step the procedure calls "Reviewed."
- **Time without time zone**, leading to ambiguity in multi-site operations and apparent sequence violations where a later signature shows an earlier clock time.
- **Manifestation absent from the printout** even though it is present on screen, a direct 11.50(b) failure.

---

## Re-authentication and the continuous-session rule

This is the clause that drives the most configuration decisions, and the one interviewers love because the rule text is precise.

### What 11.200(a) actually says

11.200(a) splits signature execution into two cases based on whether the signing happens inside a single continuous session of controlled system access:

> 11.200(a)(1): "When an individual executes a series of signings during a single, continuous period of controlled system access, the first signing shall be executed using all electronic signature components; subsequent signings shall be executed using at least one electronic signature component that is only executable by, and designed to be used only by, the individual."

> 11.200(a)(2): "When an individual executes one or more signings not performed during a single, continuous period of controlled system access, each signing shall be executed using all of the electronic signature components."

Decoded:

- A two-component signature is typically user ID plus password.
- **First signing in a continuous session:** require both components (ID and password).
- **Subsequent signings in the same continuous session:** require at least one component, and it must be one that only that individual can execute. The password qualifies (it is private to the user). The user ID alone does not, because in many systems the ID is visible or already populated. So in practice "at least one component" for subsequent signings means re-entering the password.
- **Signings not in a continuous session** (the session ended, the user logged out, the session timed out): require both components again.

### What counts as a "continuous period of controlled system access"

This is the design decision. A continuous session is the period from authenticated login until that authenticated access ends. Access ends when the user logs out, when an inactivity timeout fires, or when the session is otherwise broken. The moment the session ends, the next signature is a first signing again and needs both components.

You define the boundary in configuration:

- **Inactivity (idle) timeout.** After N minutes of no activity the session locks or ends. Common GxP settings are short, often 5-15 minutes for high-risk transactional systems, longer for low-risk read systems. Once locked, re-entry of full credentials is required, and the next signature is a first signing.
- **Absolute session length cap.** Some systems force re-login after a maximum duration regardless of activity.
- **Workstation lock integration.** If the operating-system session locks, the application session should be treated as broken.

### How to configure it: the decision sequence

1. Decide the two signature components. For non-biometric signatures this is almost always user ID plus password (11.200(a)). Document this choice.
2. Decide which component is required for subsequent in-session signings. Choose the password (private, individual-executable). Configure the application so subsequent signings prompt for password only, not full re-login.
3. Set the inactivity timeout per system risk. Justify the value in the risk assessment; do not accept the vendor default without rationale.
4. Set the absolute session cap if the system supports it.
5. Define what "session end" means and confirm the application enforces a full two-component signing after any session end.
6. Test every branch.

### Re-authentication acceptance criteria and worked test matrix

| Scenario | Required at signing | Pass condition |
|----------|---------------------|----------------|
| First signature after login | ID + password | Both prompted; signature fails if either omitted/wrong |
| Second signature, same session, no timeout | Password (1 component, individual-executable) | Password prompted; signature applied |
| Signature after idle timeout fired | ID + password | Full credentials prompted again |
| Signature after explicit logout/login | ID + password | Full credentials prompted again |
| Wrong password on any signing | None applied | Signature rejected, attempt logged, audit trail entry |
| Repeated wrong password | None applied | Lockout per 11.300; security event raised |

The "individual-executable" requirement in 11.200(a)(1) is why you cannot use the user ID as the single subsequent component: if a colleague can see or already-populated the ID field, it is not "only executable by" the individual. The password is the component that stays private.

### Common re-authentication mistakes

- **Single-component first signing.** Configuring a system so the very first signature in a session needs only a password (relying on the login as the second component). The rule wants two components at the signing event; login establishing access is access control, not the signing components. This is a frequent point of debate; the conservative, defensible posture is two components at the first signing.
- **Subsequent signing with no component at all,** a single confirm-button "signature" after the first one. That violates the "at least one component" requirement.
- **Timeout too long or disabled,** so a walked-away workstation lets another person apply signatures inside the still-open session. This is both a re-authentication failure and an access-control failure.
- **User ID used as the single subsequent component.** Not individual-executable; cited as inadequate.
- **No audit-trail capture of failed signing attempts,** so unauthorized-use detection (11.300(d)) has nothing to detect on.

---

## Password versus biometric signatures

11.200 splits signatures into non-biometric (11.200(a)) and biometric (11.200(b)). The two have different control burdens.

### Password-based (the default in GMP)

Non-biometric signatures need the two-component logic above plus the 11.300 controls for the identification codes and passwords themselves:

- **11.300(a):** uniqueness of each combined ID/password, so no two individuals share the same combination.
- **11.300(b):** periodic revision (password aging/expiry).
- **11.300(c):** loss-management procedures to deauthorize lost, stolen, or compromised tokens/cards/passwords and issue replacements with suitable controls.
- **11.300(d):** transaction safeguards to detect and report any unauthorized use to system security and management.
- **11.300(e):** initial and periodic testing of devices (such as tokens or cards) that bear or generate ID/password information.

Password policy should align with your organization's IT security standard and with current security guidance (for example NIST SP 800-63B on digital identity), while still satisfying the GxP-specific 11.300 controls. There is a real tension: modern security guidance discourages frequent forced rotation in favor of length and breach screening, while 11.300(b) calls for periodic revision. Resolve it by documenting a justified policy in your procedures and risk assessment rather than blindly copying either source. See [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control).

### Biometric signatures

Under 11.200(b), a biometric signature "shall be designed to ensure that it cannot be used by anyone other than its genuine owner." Biometrics (fingerprint, iris, face, vein, signature dynamics) are attractive because they remove the password-sharing failure mode entirely and simplify the manifestation. They bring their own burdens:

- The capture device and its template store must be qualified and access-controlled.
- False-accept and false-reject rates must be characterized and acceptable for the use case; a high false-reject rate creates a workaround culture.
- Privacy and data-protection obligations apply to biometric templates (GDPR treats biometric data used for identification as a special category).
- A fallback method is needed for enrollment failures and device outages, and that fallback must itself be compliant, which often means you still operate a password path.

For most pharma manufacturing and lab systems, password-based two-component signatures remain the pragmatic default because the supporting commercial systems implement them natively and the operating burden is well understood. Biometrics appear more often at physical-access points and in some clinical and device contexts.

### Choosing between them: decision factors

| Factor | Favors password | Favors biometric |
|--------|-----------------|------------------|
| Native vendor support in the target system | Strong | Often weak/add-on |
| Risk of credential sharing in the environment | Concern remains | Largely eliminated |
| Privacy/data-protection complexity | Lower | Higher (special-category data) |
| Volume of rapid in-session signings (gowned operators, gloves) | Friction | Can be faster |
| Cross-company / regulatory-facing legal weight | Use PKI/qualified e-sig | Biometric alone insufficient |
| Validation and device-qualification effort | Lower | Higher |

A subtle point for interviews: biometrics handle identity and non-repudiation well, but they do not by themselves solve binding. You still need the signature-to-record link of 11.70 / Annex 11(14)(b) regardless of which authentication method you use. Authentication and binding are independent design problems.

---

## Identity, uniqueness, and non-repudiation: the controls under the signature

A signature is only as trustworthy as the account behind it.

### Identity verification (11.100(b))

Before issuing electronic-signature capability, the organization must verify the identity of the individual. In practice this is the onboarding step where HR or QA confirms the person is who they claim, against an authoritative source, before an account with signing rights is provisioned. Keep the evidence; an inspector may ask how you know that the person behind account "jsmith" is the real Jane Smith.

### Uniqueness and no reassignment (11.100(a), 11.300(a))

Each signature must be unique to one person and never reused or reassigned. This kills shared and generic accounts for any signing function. When an employee leaves, their ID must not be recycled to a new hire. Your user-provisioning procedure must enforce non-reuse of identifiers over the system's lifetime, which has practical implications for ID schemes (do not run out of namespace, do not reuse).

### Non-repudiation

Non-repudiation is the property that a signer cannot credibly deny having signed. It is produced by the combination of identity verification (it was really you), individual-only components or biometrics (only you could execute it), binding (your signature is on this exact record), and audit trail (the act is independently recorded). No single control delivers non-repudiation; it is the stack. When you write the validation rationale, state which controls together provide non-repudiation rather than pointing at one feature.

### The Part 11 certification letter (11.100(c))

Before first use of electronic signatures, US-regulated organizations must certify to the FDA, in a one-time signed paper letter to the Office of Regional Operations, that their electronic signatures are intended to be the legally binding equivalent of handwritten signatures. This is an organizational, one-time act, not per-system, and it is frequently forgotten by companies new to Part 11. If asked in an audit "have you submitted your Part 11 certification," the answer should be a documented yes with the letter on file.

---

## Implementation roadmap and roles

### Step-by-step implementation

1. **Define signing requirements per system.** List every signature point in the workflow, its meaning, who is authorized, and whether it is in-session sequential. Capture these in the [user requirements specification](/articles/user-requirements-and-traceability).
2. **Risk-assess the signatures.** Use your [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology) to grade each signature point and to justify timeout, password policy, and method choice. High-impact signatures (batch release, QP certification) get the strongest controls.
3. **Choose the method** (password two-component vs biometric vs PKI) per the decision factors above.
4. **Configure** binding, manifestation, re-authentication, password/timeout policy, and meaning lists. Lock the configuration under [change control](/articles/change-control-validated-systems).
5. **Verify identity and provision accounts** with unique, non-reassignable IDs and least-privilege signing rights.
6. **Validate** with IQ/OQ/PQ test scripts that exercise every binding, manifestation, and re-authentication branch in the matrices above. Trace each test back to a requirement and to a Part 11 / Annex 11 clause.
7. **Submit the Part 11 certification letter** if not already on file.
8. **Train users** on the meaning of signing, on never sharing credentials, and on the legal weight of their electronic signature.
9. **Operate and monitor:** audit-trail review of signing events, periodic review of the configuration, password-policy enforcement, and account deprovisioning on departure.

### Roles and responsibilities

| Role | Responsibility |
|------|----------------|
| System/process owner (business) | Defines signature points, meanings, and who is authorized to sign each; owns the workflow requirements |
| QA | Approves the signature design, confirms manifestation and meaning meet 11.50, approves validation, owns procedural controls and the Part 11 certification |
| Validation / CSV lead | Writes and executes binding, manifestation, and re-authentication test scripts; maintains traceability to requirements and regulations |
| IT / system administrator | Configures timeouts, password policy, account provisioning and deprovisioning, MFA/biometric infrastructure; never holds a signing role on records they administer (segregation of duties) |
| Vendor / supplier | Provides documentation of how binding and 11.200 logic are implemented; supports configuration; subject to [supplier assessment](/articles/software-supplier-assessment-csa) |
| Information security | Sets password/authentication standards, monitors unauthorized-use detection (11.300(d)), manages biometric data privacy |
| Signer (end user) | Verifies identity at enrollment, protects credentials, applies signatures with correct meaning, never shares or delegates credentials |

The segregation point matters: the administrator who can reset passwords and edit the audit-trail configuration should not also be a routine signer of GxP records in the same system, because that concentration of privilege undermines non-repudiation.

---

## Hybrid and legacy situations

Many real environments are not fully electronic. A common pattern is an electronic record approved with a handwritten signature on a printout, or a system that captures data electronically but is signed on paper. These [hybrid paper-electronic records](/articles/hybrid-paper-electronic-records) carry their own risk: the link between the wet signature and the electronic record is procedural, not technical, so binding is weak. The inspection expectation is a documented, controlled process that maintains the link (for example, a unique record ID printed on the page that ties the signed paper to the electronic source, plus a procedure that prevents the electronic record changing after the paper is signed). Where you can, retire hybrids in favor of native electronic signatures; where you cannot, document the binding control explicitly and review it.

For older systems that predate Part 11 signature capability, see [retroactive validation of legacy systems](/articles/retroactive-validation-legacy-systems) and consider whether a wrapping procedural control or a planned replacement is the right path.

---

## Inspection findings: what regulators actually cite

Generic patterns seen across observations and warning letters on electronic signatures:

- **Shared or generic login accounts used for signing**, breaking uniqueness (11.100(a)) and identity (11.100(b)). The classic finding: a single "analyst" or "supervisor" account used by multiple people, so no signature can be attributed to a person.
- **No signature/record link**, where the "signature" is a name typed or selected in a field with no binding to the record version, so records were edited after signing with no invalidation (11.70).
- **Missing manifestation elements on printouts**, especially missing meaning or missing printed name (11.50).
- **Inadequate re-authentication**, where subsequent in-session signings required nothing, or session timeouts were disabled, letting unattended workstations be used to sign.
- **No Part 11 certification letter** on file for a company asserting electronic signatures are legally binding (11.100(c)).
- **Audit trail not capturing signing events or failed attempts**, so unauthorized-use detection (11.300(d)) is impossible.
- **Passwords shared or written down**, often surfaced during the facility walkthrough rather than the document review.

When you build your [inspection readiness](/articles/fda-inspection-readiness) package, pre-stage the evidence that answers each of these: the account-uniqueness report, a demonstration of binding invalidation on edit, sample signed printouts showing all three manifestation elements, the timeout configuration with its risk justification, and the certification letter.

---

## Interview-ready questions and answers

**Q: Walk me through 11.200(a). When do you need both signature components and when do you need one?**
First signing in a single continuous session needs both components, typically ID and password. Subsequent signings in that same session need at least one component, and it must be one only the individual can execute, so the password. Once the session ends, by logout or timeout, the next signing needs both components again. The user ID alone is not acceptable as the single subsequent component because it is not individual-executable.

**Q: How is an electronic signature bound to its record?**
By a technical link that prevents the signature being moved or the record being changed underneath it. In good systems that is a version reference plus a content hash stored with the signature: if the record changes, the hash mismatches and the signature is flagged broken, forcing re-signature. 11.70 requires the signature cannot be excised, copied, or transferred by ordinary means; Annex 11(14)(b) requires a permanent link. For privileged database access, which is outside "ordinary means," the compensating control is the audit trail plus hash mismatch detection.

**Q: What are the three mandatory manifestation elements under 11.50?**
Printed name of the signer, date and time of signing, and the meaning of the signature, such as review, approval, authorship, or responsibility. All three must appear on every human-readable form, including printouts and screen displays.

**Q: Password or biometric, which would you choose for a new MES, and why?**
For a manufacturing execution system I would default to password-based two-component signatures, because the control logic is mature, vendor-native, and well understood, and the operating burden is predictable. I would consider biometrics only if credential sharing is a real environmental risk and the vendor supports it natively, and I would still keep a compliant password fallback. Either way I would handle binding separately, because authentication method does not solve signature-to-record linking.

**Q: A reviewer signs a result, then the result is changed. What should happen?**
The earlier signature must be invalidated. The system should either block the edit and force re-signature, or accept the edit, increment the version, mark the prior signature as applying only to the prior version, and require a new signature on the new version. If the old signature silently stays attached to changed content, you have a binding failure and a data-integrity finding.

**Q: What is the Part 11 certification letter and who needs it?**
It is the one-time written certification under 11.100(c) to the FDA, sent to the Office of Regional Operations, stating that the organization's electronic signatures are intended to be the legally binding equivalent of handwritten signatures. It is organization-wide, not per system, and must be on file before first use of electronic signatures.

**Q: How do you achieve non-repudiation?**
Through the stack, not one control: identity verification at enrollment, individual-only signature components or biometrics, signature-to-record binding, and an audit trail that independently records the signing event. Each removes one way a signer could deny the act; together they make denial untenable.

---

## Practical tips

- Write the **meaning list** as a controlled, configured dropdown, never free text. A blank or vague meaning field is the easiest finding to avoid and the most common one to leave open.
- Justify the **inactivity timeout** in the risk assessment with a number and a rationale; an inspector will ask why it is what it is. "Vendor default" is not a rationale.
- Test the **failed-signing path**, not just the happy path. Unauthorized-use detection (11.300(d)) needs failed attempts in the audit trail.
- Print a signed record during validation and **physically check** all three 11.50 elements appear. The on-screen view passing does not prove the printout passes.
- Keep the **Part 11 certification letter** with your quality records and reference it in your inspection readiness pack; companies new to Part 11 forget it constantly.
- Enforce **segregation of duties**: the person who can reset passwords and configure audit trails should not be a routine signer in the same system.
- Tie every signature design decision back to a **requirement and a clause** in the traceability matrix; that is what lets you defend the design in minutes rather than reconstructing the logic live.

### Related reading

- [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11)
- [Part 11 / Annex 11 practical guide](/articles/part-11-annex-11-practical-guide)
- [Audit trail design and review](/articles/audit-trail-design-and-review)
- [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control)
- [Time stamps and system clock control](/articles/time-stamps-and-system-clock-control)
- [Hybrid paper-electronic records](/articles/hybrid-paper-electronic-records)
- [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology)
- [User requirements and traceability](/articles/user-requirements-and-traceability)
- [Data integrity foundations](/articles/data-integrity-foundations)
- [GAMP 5 CSV framework](/articles/gamp5-csv-framework)
