---
title: "eConsent and Decentralized Trial Technology: Validation and Part 11 Compliance"
description: "How to validate eConsent and decentralized clinical trial systems, preserve informed-consent integrity, and meet Part 11 and Annex 11 expectations for ePRO, wearables, and televisits."
pubDate: 2026-06-20
tags: ["eConsent", "decentralized-trials", "gcp", "part-11", "ePRO", "validation", "clinical-systems", "data-integrity"]
pillar: "clinical-gcp"
tier: "Intermediate"
---

Informed consent is the one document in a clinical trial that protects a human being rather than a dataset. When you move it onto a tablet or a phone, you take an ethical artifact and turn it into a regulated electronic record, with a signature, an audit trail, version control, and a data flow that has to survive an inspection years later. That shift is what eConsent and the broader set of decentralized clinical trial (DCT) technologies force quality and validation teams to confront: electronic patient reported outcomes (ePRO), wearable sensors, televisit platforms, remote source data, and the integrations that stitch them together.

This article covers what these systems are, the regulatory basis for treating them as 21 CFR Part 11 and EU Annex 11 records, what goes into validating them, how to run the validation, what good looks like, and the inspection findings that recur. The goal is that after reading it you can scope a validation, write or review the deliverables, sit in an audit, and answer the questions an inspector or interviewer will actually ask.

---

## What "decentralized" actually changes

A traditional trial collects data at a site, under direct staff observation, into systems the sponsor and site control. Decentralized and hybrid trials move some or all of those activities to the participant's home or local environment. The data still has to meet the same standards. What changes is who creates the record, where, on what device, and how it reaches the sponsor.

The components you will typically validate:

- **eConsent**: electronic presentation of the informed consent form (ICF), comprehension aids, and capture of the participant's electronic signature (and, where applicable, the investigator's or legally authorized representative's signature).
- **ePRO / eCOA**: electronic patient reported outcomes and clinical outcome assessments, captured on a provisioned device or the participant's own device (bring-your-own-device, BYOD).
- **Wearables and connected sensors**: continuous or episodic physiological data (heart rate, activity, glucose, ECG) flowing from a device to an app to a platform.
- **Televisit / telehealth platforms**: video visits that may generate source data, recordings, and visit documentation.
- **Direct-to-participant logistics and remote data capture**: home nursing data, local lab integrations, drug accountability apps.

Each is a computerized system under GxP. Each handles data that supports a regulatory submission, and most handle data tied to subject safety or eligibility. That makes them in scope for computerized system validation (CSV) or computer software assurance (CSA), Part 11 / Annex 11, and ICH E6 Good Clinical Practice.

---

## The regulatory basis

You cannot defend a validation approach without naming the documents it rests on. These are the real ones and what each contributes.

### Informed consent and GCP

- **ICH E6(R2) Good Clinical Practice**, and the finalized **ICH E6(R3)** (Principles and Annex 1 reached Step 4 in January 2025; Annex 2 reached Step 4 on 3 June 2026), set the GCP expectations for informed consent, source data, essential records, and the use of computerized systems. E6(R3) is notable because it was written for a world that includes decentralized methods and explicitly addresses risk-proportionate approaches and data governance. Annex 2, the part that deals with nontraditional designs such as decentralised and pragmatic trials, is now at Step 4, so it is the current reference for the design choices a DCT actually makes rather than a draft. Section 4.8 in E6(R2) (informed consent of trial subjects) is the anchor for consent process expectations; E6(R3) modernizes the same obligations.
- **21 CFR Part 50** (Protection of Human Subjects) defines the required elements of informed consent (50.25) and documentation of consent (50.27). eConsent must still deliver every element in 50.25 and produce a signed, dated record under 50.27.
- **21 CFR Part 56** (Institutional Review Boards) governs IRB review and approval, including approval of the consent materials and any electronic presentation.
- **FDA Guidance, "Use of Electronic Informed Consent: Questions and Answers" (2016)**, jointly issued by FDA and HHS OHRP, is the single most important guidance for eConsent. It addresses how electronic systems present information, how to confirm comprehension, how electronic signatures apply, IRB oversight of eConsent materials, and record retention. Know it cold.
- **FDA Guidance, "Conducting Clinical Trials With Decentralized Elements" (final, 18 September 2024)**, which finalized the May 2023 draft "Decentralized Clinical Trials for Drugs, Biological Products, and Devices," addresses DCT design, the roles of local providers and remote assessments, data flows, and oversight. Cite the final under its current title.

### Electronic records and signatures

- **21 CFR Part 11** (Electronic Records; Electronic Signatures) governs any electronic record that satisfies a predicate-rule requirement and any electronic signature used in its place. An eConsent signature and the consent record are squarely in scope. ePRO entries that become source data are in scope. Part 11 requires validation (11.10(a)), audit trails (11.10(e)), copies of records (11.10(b)), record protection and retrieval throughout the retention period (11.10(c)), and signature controls (11.50, 11.70, 11.100, 11.200, 11.300).
- **EU Annex 11 (Computerised Systems)** is the European counterpart, principles-based, covering risk management, validation, data, audit trail, electronic signature, and supplier management. For trials touching the EU you address both.
- **FDA Guidance, "Electronic Systems, Electronic Records, and Electronic Signatures in Clinical Investigations: Questions and Answers" (final, 2 October 2024; the draft was March 2023)** is the modern restatement of how FDA expects Part 11 applied specifically in clinical investigations, including DCT, ePRO/eCOA, mobile platforms, and sponsor reliance on vendor-hosted systems. This guidance largely supersedes the 2007 "Computerized Systems Used in Clinical Investigations" guidance as the reference point. It is the one to map your controls against.
- **FDA Guidance, "Computer Software Assurance for Production and Quality Management System Software" (final, issued 24 September 2025; finalizing the September 2022 draft "...Production and Quality System Software")** introduces the CSA risk-based, critical-thinking approach. While its scope language centers on production and quality systems, its mindset (effort proportional to risk, less scripted busywork, more unscripted and targeted testing) is broadly applied to clinical systems too.
- **EMA "Guideline on computerised systems and electronic data in clinical trials" (2023)** is the EMA reference that pulls together validation, audit trail review, ePRO, and DCT data expectations for trials in the EU.
- **MHRA "'GXP' Data Integrity Guidance and Definitions" (2018)** gives the ALCOA+ framing that underpins how you judge whether the data is trustworthy.

The risk rationale is simple. If the consent record is wrong, missing, or unsigned, the subject's participation may be unethical and their data unusable. If the ePRO or sensor data is not attributable, contemporaneous, or accurate, the efficacy or safety conclusion drawn from it is unreliable. Validation and Part 11 controls exist to make those failures detectable and rare.

See also [ICH E6 Good Clinical Practice](/articles/ich-e6-good-clinical-practice), [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11), and [Clinical Systems and GCP Digital Quality](/articles/clinical-systems-gcp-digital-quality).

---

## eConsent: integrity of the consent process

eConsent is where ethics and electronic records meet, so treat it as the highest-criticality system in the DCT stack.

### What a compliant eConsent record contains

An eConsent system has to produce and retain, for each participant:

- The exact ICF version presented, including language and any site-specific or amendment-specific variant.
- Every required element of consent under 21 CFR 50.25, in a form the participant could read or have read to them.
- Evidence the participant had the opportunity to ask questions and that comprehension was supported (knowledge checks, glossaries, contact for questions).
- The participant's electronic signature, with the signer's printed name, date and time, and the meaning of the signature (11.50).
- Where required, the signature of the person obtaining consent and the investigator, with the same metadata.
- A version of the signed document the participant can keep (a copy they receive, per 50.27 and the eConsent guidance).
- A complete audit trail of the consent event: when the form was opened, time spent, knowledge-check results, signature application, and any re-consent.

### Step-by-step: building and validating eConsent

1. **Define the consent process in the protocol and an eConsent plan.** Document whether consent is fully remote, hybrid (remote presentation, site countersignature), or site-based on a device. Identify the LAR (legally authorized representative) and pediatric assent pathways if relevant.
2. **Get IRB/IEC approval of the electronic materials, not just the text.** The IRB must approve the eConsent presentation, including interactive elements, videos, and the device experience. This is explicit in the 2016 eConsent guidance.
3. **Write User Requirements Specifications (URS)** that capture every regulatory requirement (the 50.25 elements, signature meaning, copy-to-participant, audit trail, version control, identity verification, multi-language, accessibility) plus operational needs (offline capture, re-consent, withdrawal). See [User Requirements and Traceability](/articles/user-requirements-and-traceability).
4. **Risk-assess the system.** Consent records are GxP-critical and subject-protecting. Treat identity verification, signature integrity, version control, and audit trail as high-risk functions warranting the most rigorous testing. Use a documented method; see [CSV Risk Assessment Methodology](/articles/csv-risk-assessment-methodology).
5. **Assess the supplier.** Most eConsent platforms are vendor SaaS. Audit or assess the vendor's quality system, validation evidence, hosting, data segregation, and Part 11 capabilities. See [Software Supplier Assessment (CSA)](/articles/software-supplier-assessment-csa) and [Cloud and SaaS Validation](/articles/cloud-saas-validation).
6. **Validate the configured system.** Test against requirements: correct ICF version served to the right participant, all 50.25 elements present, knowledge checks function, signatures captured with correct metadata and meaning, copy delivered to participant, audit trail complete and tamper-evident, re-consent workflow, withdrawal, multi-language fidelity, and behavior on connectivity loss.
7. **Verify version control end to end.** Prove that when an amendment changes the ICF, the system serves the new version to the right population, blocks the superseded version, and tracks who consented under which version. This is the most common real-world failure point.
8. **Validate identity and signature binding.** Confirm the signature is bound to the named participant and the specific document version, and cannot be repudiated or reused.
9. **Run UAT with real site and participant scenarios** including LAR consent, re-consent after an amendment, and a participant who fails a knowledge check.
10. **Release with a Validation Summary Report** and load the controlling SOPs, training, and a periodic review schedule. See [Validation Summary Report and Release](/articles/validation-summary-report-and-release).

### Acceptance criteria for eConsent

- Every 21 CFR 50.25 element is demonstrably present in the served ICF for each variant and language.
- The right version is served to the right participant 100 percent of the time in version-control testing; superseded versions are blocked.
- Each signature record contains signer identity, date/time, and meaning, and is bound to a specific document version.
- A participant copy is generated and delivered for every completed consent.
- The audit trail captures open, comprehension, signature, and re-consent events and is independently reviewable and tamper-evident.
- Re-consent and withdrawal workflows function and are traceable.
- Requirements trace cleanly from URS to test evidence (a traceability matrix with no orphans).

### Worked example: an eConsent traceability snippet

| Req ID | Requirement | Risk | Test case | Result | Evidence |
|--------|-------------|------|-----------|--------|----------|
| URS-012 | Serve ICF version approved for the participant's site and language | High | TC-012: enroll subject at Site 04 (Spanish); confirm v3.0-ES served | Pass | Screenshot, audit log entry 2026-05-03 |
| URS-018 | Signature record includes name, UTC timestamp, and meaning ("I consent to participate") | High | TC-018: complete signature; inspect record fields | Pass | Record export, field check |
| URS-021 | On ICF amendment, block superseded version and require re-consent | High | TC-021: push v3.1; attempt to sign v3.0; confirm block + re-consent prompt | Pass | Log, screen capture |
| URS-027 | Deliver a copy of the signed ICF to the participant | Medium | TC-027: confirm participant copy generated and accessible | Pass | Delivered copy, timestamp |
| URS-033 | Capture knowledge-check responses in the audit trail | Medium | TC-033: answer 2 questions; verify responses logged | Pass | Audit trail export |

---

## ePRO and eCOA: data created by the participant

ePRO and electronic clinical outcome assessment data often become the primary or key secondary endpoint. If the data is not trustworthy, the endpoint is not trustworthy.

### Why ePRO is high-stakes under Part 11 and GCP

The participant creates the record, frequently unobserved, on a device. There is no site staff watching the entry happen. That makes attribution, contemporaneity, and the prevention of back-dating or duplicate entry the central data-integrity questions. The relevant predicate expectations come from ICH E6 (source data must be attributable, legible, contemporaneous, original, accurate) and FDA's PRO guidance, **"Patient-Reported Outcome Measures: Use in Medical Product Development to Support Labeling Claims" (2009)**, which is about instrument validity but matters because the electronic implementation must preserve the validated instrument's measurement properties.

### What you validate in ePRO/eCOA

- **Instrument fidelity**: the electronic version presents the validated questionnaire exactly (item wording, response options, recall period, skip logic, scoring). Any migration of a paper instrument to electronic requires evidence of measurement equivalence; this is a methodological, not just a software, concern.
- **Scheduling and windows**: diary entries open and close in the correct windows; the system enforces or flags out-of-window entries; it prevents future-dating and retrospective completion outside allowed rules.
- **Timestamp integrity**: each entry carries a reliable timestamp tied to a controlled clock. See [Time Stamps and System Clock Control](/articles/time-stamps-and-system-clock-control).
- **Attribution**: entries are bound to the correct participant and device, even on BYOD.
- **Audit trail**: changes, including any site-initiated corrections, are captured with who/what/when/why. See [Audit Trail Design and Review](/articles/audit-trail-design-and-review).
- **Transmission integrity**: data moving from device to platform to the trial database is complete and unaltered; offline entries reconcile correctly when connectivity returns.

### BYOD specifics

BYOD removes device control. You then have to validate across a defined matrix of operating systems, OS versions, and screen sizes, because rendering differences can change how a validated instrument appears and therefore how a participant responds. Acceptance includes documented evidence that the instrument renders and behaves identically across the supported device matrix, and a policy for unsupported devices (provision a device instead). Common mistake: declaring "BYOD supported" without a tested device matrix, then discovering an item truncates on a small screen after data is already collected.

### Worked example: an ePRO timestamp and window check

A daily pain diary must be completed between 18:00 and 23:59 local time, once per day.

| Scenario | Expected behavior | Result |
|----------|-------------------|--------|
| Entry at 19:30 | Accepted, timestamped, in-window flag = true | Pass |
| Entry at 02:00 (next morning) | Accepted but flagged out-of-window; not back-dated to prior day | Pass |
| Second entry same day | Blocked or flagged as duplicate per design rule | Pass |
| Device clock changed forward by user | Server timestamp authoritative; discrepancy logged | Pass |
| Entry made offline, synced 6 hours later | Original entry time preserved; sync time recorded separately | Pass |

The last two rows are where inspectors probe: does the participant's device clock determine the record's time, or does a controlled server clock, and is any drift detectable? Design for server-authoritative timestamps and log the device-versus-server delta.

---

## Wearables and connected sensors

Sensor data is high-volume, continuous, and produced by hardware you may not have validated yourself. The data-integrity question shifts from "did the participant enter this honestly" to "is this stream complete, accurate, attributable, and traceable from sensor to analysis."

### What to establish

- **Device qualification and intended use**: confirm the sensor is fit for the measured parameter and, where it makes a measurement that supports a regulatory claim, that its measurement performance is characterized. A consumer fitness band used for an exploratory endpoint is treated differently from a sensor generating a primary safety signal.
- **Data provenance and completeness**: define the full path (sensor to gateway app to cloud to sponsor) and prove no silent data loss. Gaps must be detectable, attributed, and quantified, not invisible.
- **Attribution and pairing**: each data stream is bound to the correct participant; device-to-participant pairing is controlled and re-pairing is logged.
- **Algorithm transparency**: many sensors apply proprietary algorithms (a raw waveform becomes "heart rate"). Document what is raw versus derived, and treat derived clinical outputs with the same care as any calculation. If machine-learning models are involved, see [GxP ML Model Lifecycle](/articles/gxp-ml-model-lifecycle) and [Validating AI in GxP Systems](/articles/validating-ai-gxp-systems).
- **Time synchronization**: across devices and time zones, with traceable clocks.

### Acceptance criteria

- A documented, validated data flow with reconciliation at each hop (counts in equal counts out, gaps flagged).
- Defined raw versus derived data, with the raw retained where it constitutes the original record under the data-integrity definition of "original."
- Attribution maintained across pairing and re-pairing events.
- Completeness metrics (percent data captured versus expected) defined with acceptance thresholds before the trial, not rationalized after.

Common mistake: accepting a vendor's dashboard as the source of truth without ever proving the raw sensor data reaches the sponsor intact, then being unable to reconstruct a participant's record during an inspection.

---

## Televisits and remote source data

Televisit platforms create a different problem: distinguishing the source record from the convenience tool. A video call is not, by itself, source data. The clinical assessment documented during or after that visit is. Decide and document, before first patient, what is source, where it lives, and who is the originator.

Key points:

- **Define source data location.** If the investigator documents findings in the eCRF or eSource system during a televisit, that documentation is source. If a recording is retained, decide whether it is source or supporting, and apply retention and access controls accordingly. See [Source Data and SDV in Clinical Trials](/articles/source-data-and-sdv-clinical) and [eTMF Trial Master File](/articles/etmf-trial-master-file).
- **Privacy and consent for recording.** Recording a participant's video requires its own consent and a defined retention and destruction policy. Cross-border recording raises data-protection obligations.
- **Identity verification.** Confirm you are assessing the enrolled participant, with a documented identity-check step.
- **Connectivity and continuity.** Define what happens when a call drops mid-assessment and how the partial record is handled.

---

## Validating the whole DCT stack: deliverables and method

The individual systems are validated against the same lifecycle you use for any GxP computerized system, scaled to risk. GAMP 5 (Second Edition, 2022) and CSA both push the same idea: spend effort where the patient and data risk is highest.

### The deliverable set

| Deliverable | Purpose | Owner (typical) |
|-------------|---------|-----------------|
| Validation Plan | Scope, approach, roles, risk basis, acceptance | Validation lead / QA |
| URS | Regulatory and functional requirements | Business/clinical SME |
| Supplier assessment / audit | Confidence in vendor quality and Part 11 | QA / vendor management |
| Risk assessment | Drives test depth | Validation + SME + QA |
| Functional / configuration spec | What the system does as configured | Vendor / IT |
| Traceability matrix | Requirement-to-test coverage | Validation |
| Test scripts (IQ/OQ/PQ or risk-based scenarios) | Evidence the system works | Validation / SME |
| Data flow / data integrity assessment | Map records, criticality, controls | QA / data management |
| Part 11 / Annex 11 assessment | Gap analysis of electronic-record controls | QA |
| SOPs and training | Operate and control the system | Process owner |
| Validation Summary Report | Conclusion and release statement | Validation lead, QA approval |
| Periodic review plan | Keep the validated state | System owner / QA |

See [Validation Deliverables Guide](/articles/validation-deliverables-guide), [Writing Validation Protocols and Reports](/articles/writing-validation-protocols-and-reports), and [GAMP 5 CSV Framework](/articles/gamp5-csv-framework).

### Sequence of decisions

1. **Classify and scope.** Confirm GxP impact and Part 11 applicability for each component. A wellness step counter used only for engagement may be low impact; an ePRO primary endpoint is high.
2. **Set the risk-based testing strategy.** High-risk functions (consent version control, signature integrity, timestamp control, data transmission completeness) get scripted, thorough testing. Lower-risk, vendor-tested functions can lean on supplier evidence plus targeted unscripted testing under CSA thinking. See [Computer Software Assurance (FDA)](/articles/computer-software-assurance-fda).
3. **Decide reliance on the vendor.** You can use vendor validation evidence, but you remain accountable. Document what you reviewed, what you re-tested, and why that is sufficient.
4. **Test the integrations, not just the boxes.** The seams between eConsent, ePRO, the EDC, and the sponsor warehouse are where data breaks. Validate end-to-end data flow, including reconciliation.
5. **Validate the data migration / transfer** wherever data moves between systems. See [Data Migration Validation](/articles/data-migration-validation).
6. **Release, then keep it validated** through change control and periodic review. See [Change Control for Validated Systems](/articles/change-control-validated-systems).

---

## Part 11 and Annex 11 controls, mapped to DCT

This is the table inspectors effectively walk in their heads. Be able to point to where each control lives.

| Part 11 control | Where it bites in DCT | What good looks like |
|-----------------|-----------------------|----------------------|
| Validation (11.10(a)) | Every in-scope system | Risk-based validation evidence, current, with release |
| Accurate copies (11.10(b)) | eConsent records, ePRO, sensor data | Human-readable and electronic copies producible for inspection |
| Record protection and retrieval (11.10(c)) | Whole retention period, vendor-hosted | Records retrievable through retention even after vendor exit; defined exit plan |
| Audit trail (11.10(e)) | Consent events, ePRO edits, sensor pairing | Secure, computer-generated, time-stamped, independently reviewable |
| Authority checks (11.10(g)) | Site, participant, sponsor roles | Role-based access, least privilege, periodic access review |
| Signature meaning (11.50) | eConsent, investigator sign-offs | Signed records show name, date/time, meaning |
| Signature/record linking (11.70) | Consent signature to ICF version | Signature bound to the exact document, non-transferable |
| Signature uniqueness/identity (11.100, 11.200, 11.300) | Remote signers | Identity verified, credentials unique, not shared |

For the practical view, see [Part 11 / Annex 11 Practical Guide](/articles/part-11-annex-11-practical-guide) and [Electronic Signatures Implementation](/articles/electronic-signatures-implementation). Audit-trail operations are covered in [Operationalizing Audit Trail Review](/articles/operationalizing-audit-trail-review).

A vendor-hosted reality worth stating plainly: record retrieval through the entire retention period (often well over a decade) is the control that quietly fails. When a sponsor stops paying a SaaS vendor or the vendor is acquired, can the consent and ePRO records still be retrieved in a readable, complete form? Build the exit and archival plan into the contract and the validation, and test it.

---

## ALCOA+ applied to DCT data

The data-integrity acronym is the lens an inspector uses to judge trustworthiness. Map it to these systems concretely. See [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and [Data Integrity Foundations](/articles/data-integrity-foundations).

- **Attributable**: the consent and ePRO entries trace to the named participant; sensor streams to the correct device pairing.
- **Legible**: records, including audit trails, are readable and remain so through retention.
- **Contemporaneous**: diary entries captured in their window with controlled timestamps; consent signed at the moment of the consent event.
- **Original**: the first capture is preserved (the raw sensor stream where it is the original; the signed ICF as served).
- **Accurate**: instrument fidelity, correct scoring, complete transmission with reconciliation.
- **Complete**: no silent data loss; gaps flagged and explained.
- **Consistent**: time sequencing intact across systems and time zones.
- **Enduring**: durable storage, not a transient device cache.
- **Available**: retrievable on inspection, throughout retention, even after vendor changes.

---

## Roles and responsibilities

Clear ownership is the difference between a validation that holds up and a finding about "unclear responsibility for the validated state."

| Role | Responsibility |
|------|----------------|
| Sponsor (overall) | Accountable for trial conduct, data integrity, and oversight of all systems and vendors; cannot delegate accountability |
| Clinical QA / GCP QA | Sets quality requirements, approves validation and Part 11 assessments, runs vendor audits, owns inspection readiness |
| Validation lead | Plans and executes validation, ensures traceability, authors the summary report |
| Clinical / business SME | Provides requirements, performs UAT, confirms instrument fidelity and process fit |
| Data management | Owns data flows, reconciliation, transfer specifications, and database integration |
| IT / system owner | Operates the system, manages access, change control, periodic review |
| Vendor (eConsent / ePRO / sensor / televisit) | Develops and hosts the system, provides validation evidence, maintains its quality system and Part 11 capability under a quality agreement |
| Investigator / site | Conducts consent and assessments, documents source data, maintains site oversight even when activities are remote |
| IRB / IEC | Reviews and approves consent materials and the electronic presentation |

The investigator's responsibility for source data and consent does not disappear because the participant is at home. See [Clinical QA, GCP, and Data Integrity](/articles/clinical-qa-gcp-data-integrity) and [GCP Audits and Inspections](/articles/gcp-audits-and-inspections). Vendor governance is in [CDMO Oversight and Quality Agreements](/articles/cdmo-oversight-quality-agreements) and [Supplier and Vendor Qualification](/articles/supplier-vendor-qualification).

---

## Common mistakes and recurring inspection findings

These are the patterns regulators cite, stated generically.

- **ICF version control failures.** A subject consented under a superseded ICF, or the system served the old version after an amendment, or there is no clear record of which version each subject signed. This is the single most common eConsent finding.
- **Missing or incomplete consent records.** No participant copy delivered, missing signature metadata, or the consent audit trail does not show the consent actually occurred before trial activities began.
- **Audit trail not reviewed, or not reviewable.** The system has an audit trail, but no one reviews it, or it cannot be exported and read by an inspector independent of the application.
- **Inadequate validation evidence.** Reliance on a vendor's marketing claim of "Part 11 compliant" with no sponsor assessment, no requirements traceability, and no testing of the configured system. There is no such thing as an inherently compliant product; compliance is how you implement and validate it.
- **Untested integrations.** Each system validated in isolation, but the data transfer between eConsent, ePRO, EDC, and the sponsor database never reconciled, leading to dropped or duplicated records.
- **BYOD without a device matrix.** Instruments rendering inconsistently across devices, threatening the measurement equivalence of the validated questionnaire.
- **Timestamp and clock problems.** Diary timestamps driven by an uncontrolled participant device clock, with no detection of drift or back-dating.
- **Record retention gaps.** Inability to retrieve records for the full retention period from a vendor-hosted system, especially after contract end or vendor change.
- **Identity weakness in remote consent.** No documented identity verification, raising doubt that the signer is the enrolled participant.
- **Change control lapses.** Vendor pushed an update to the live system without sponsor-controlled change assessment, invalidating the validated state.
- **Unclear source data definition.** For televisits and sensors, no documented decision on what is source, where it lives, and who is the originator.

See [FDA Warning Letter Patterns](/articles/fda-warning-letters-patterns) and [Quality Culture and DI Failures](/articles/quality-culture-di-failures).

---

## Interview and inspection questions, with strong answers

**Q: What makes eConsent a Part 11 record, and what controls follow?**
Because the signed informed consent satisfies a predicate-rule requirement (21 CFR 50.27) and the signature replaces a handwritten one, it is an electronic record and electronic signature under Part 11. That triggers validation, accurate copies, protection and retrieval through retention, a secure time-stamped audit trail, role-based access, and a signature that shows the signer's name, date/time, and meaning, bound to the specific ICF version.

**Q: How do you handle an ICF amendment in a live eConsent system?**
The validated system must serve the new version to the right population, block the superseded version, prompt re-consent where required, and keep a clear record of which version each participant consented under. I prove all of that in version-control test cases and confirm the IRB approved the new electronic materials before deployment.

**Q: A diary entry's timestamp is from the participant's phone. Is that acceptable?**
Risky on its own. The record's authoritative time should come from a controlled server clock, with the device time captured separately and any delta logged so drift or back-dating is detectable. I would test for future-dating prevention and offline-sync behavior, and confirm the design before first patient.

**Q: The vendor says the platform is "Part 11 compliant." Is that enough?**
No. There is no inherently compliant product. The vendor can provide capabilities and validation evidence, but the sponsor is accountable for assessing the vendor, defining requirements, validating the configured system, and operating it under controlled change and access. I document what I relied on, what I re-tested, and why it is sufficient.

**Q: How do you ensure ePRO data is trustworthy when no one watches the entry?**
Through instrument fidelity, controlled timestamps and entry windows, attribution to the correct participant and device, a complete audit trail, and reconciled transmission to the database. For BYOD, I validate across a defined device matrix to preserve measurement equivalence.

**Q: Walk me through the data flow for a wearable in your trial.**
Sensor to gateway app to vendor cloud to sponsor environment to analysis database. At each hop I reconcile counts, flag and attribute any gaps, distinguish raw from derived data, retain the original where required, and maintain participant-to-device attribution across pairing events with synchronized clocks.

**Q: For a televisit, what is the source data?**
Not the call itself. The source is the investigator's documented assessment, recorded in the defined eSource or eCRF location, with identity verification at the start. Any recording is governed by its own consent and a retention policy, and I document the source-data decision before the first visit.

**Q: How do you keep these systems validated after go-live?**
Sponsor-controlled change management for any vendor update, periodic review on a risk-based schedule, ongoing access reviews, and audit-trail review procedures. A validation is a state to maintain, not a one-time event.

**Q: Which guidances would you cite to justify your approach?**
ICH E6(R2)/E6(R3) for GCP and consent; 21 CFR Parts 11, 50, and 56; the 2016 FDA/OHRP eConsent Q&A; the 2024 final FDA DCT guidance (Conducting Clinical Trials With Decentralized Elements); the 2024 final FDA guidance on electronic systems, records, and signatures in clinical investigations; EU Annex 11 and the 2023 EMA computerised systems guidance; GAMP 5 Second Edition and the 2025 CSA guidance for the risk-based method.

---

## Practical tips

- Map every regulatory requirement to a test before you start; the traceability matrix is your defense in an inspection.
- Treat consent version control and signature binding as the highest-risk functions and test them hardest.
- Decide server-authoritative time early; retrofitting timestamp integrity after data is collected is painful.
- Write the vendor exit and archival plan into the contract and validate record retrieval, not just record creation.
- Reconcile the seams. Validate end-to-end data flow with counts in equals counts out at each hop.
- For BYOD, no device matrix means no claim of support. Provision devices where you cannot test the participant's.
- Keep the source-data definition explicit for televisits and sensors, in writing, before first patient.
- Keep the IRB in the loop on the electronic presentation, not only the consent text.

### Related reading

- [ICH E6 Good Clinical Practice](/articles/ich-e6-good-clinical-practice)
- [Clinical Systems and GCP Digital Quality](/articles/clinical-systems-gcp-digital-quality)
- [Source Data and SDV in Clinical Trials](/articles/source-data-and-sdv-clinical)
- [Risk-Based Monitoring in Clinical Trials](/articles/risk-based-monitoring-clinical)
- [eTMF Trial Master File](/articles/etmf-trial-master-file)
- [Clinical Data Management and CDISC](/articles/clinical-data-management-cdisc)
- [Part 11 / Annex 11 Practical Guide](/articles/part-11-annex-11-practical-guide)
- [Electronic Signatures Implementation](/articles/electronic-signatures-implementation)
- [Computer Software Assurance (FDA)](/articles/computer-software-assurance-fda)
- [Cloud and SaaS Validation](/articles/cloud-saas-validation)
- [Audit Trail Design and Review](/articles/audit-trail-design-and-review)
- [Clinical QA, GCP, and Data Integrity](/articles/clinical-qa-gcp-data-integrity)
