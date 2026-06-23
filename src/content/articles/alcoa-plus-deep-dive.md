---
title: "ALCOA+: The Framework Behind Every Data Integrity Requirement"
description: "A working breakdown of ALCOA+, what each principle actually means, where programs fail, how to assess it against real records, and the interview questions inspectors ask."
pubDate: 2025-07-16
tags: ["ALCOA+", "FDA", "GxP", "foundations"]
tier: "Intermediate"
pillar: "data-integrity"
---

ALCOA+ is the most referenced framework in pharmaceutical data integrity. It appears in FDA guidance, EMA Annex 11, WHO technical reports, and effectively every quality management standard used in regulated biotech, pharma, medical devices, and the wider life sciences. It is also routinely misapplied. Many programs treat it as a checklist to be ticked once a year, when it is actually a set of principles with real engineering, configuration, and process consequences.

This article breaks down each element: what it means, where it most commonly fails, and how to assess it against real records rather than against a policy document. The same nine principles serve three different readers. If you are new to GxP, they tell you what a trustworthy record looks like. If you run a lab or a system, they tell you where your controls leak. If you own a program, they give you a single vocabulary that lines up with how inspectors think. By the end you should be able to score a system against ALCOA+ with evidence, defend each principle in an inspection, and answer the questions an interviewer will ask.

## Origins and Regulatory Basis

ALCOA was articulated by an FDA investigator in the early 1990s as a memory aid for what makes raw data trustworthy. It stands for Attributable, Legible, Contemporaneous, Original, Accurate. The acronym was a teaching device first and a framework second, which is part of why it travels so well across modalities, from small-molecule tablets to biologics, vaccines, devices, and combination products.

The additions, Complete, Consistent, Enduring, Available, came later as the industry moved from paper to hybrid and electronic records. The MHRA published data integrity guidance that helped popularize the extended set, with its 2018 version, "GXP Data Integrity Guidance and Definitions," being the most cited. The WHO addressed the same ground in its Technical Report Series No. 996, Annex 5, "Guidance on good data and record management practices" (2016). The PIC/S guidance PI 041, "Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments," consolidated the thinking for inspectors across member authorities. The FDA's own "Data Integrity and Compliance With Drug CGMP: Questions and Answers" guidance (final, December 2018) does not spell out the nine letters, but it enforces the same expectations through the CGMP regulations in 21 CFR Parts 210, 211, and 212.

The practical implication is that ALCOA+ is not one company's policy and not one regulator's preference. It reflects a global consensus on what counts as a reliable record. If your data fails any element, that is not a technicality. It is an argument that the data cannot be used to make a quality decision, which means the decision itself is in question. For the underlying logic of why records carry this weight at all, see [Data Integrity Foundations](/articles/data-integrity-foundations).

A note on the regulations the principles sit on top of. In the United States, 21 CFR 211.68 covers automatic equipment and the controls and records around it, 211.180 through 211.198 cover record retention and review, and 21 CFR Part 11 covers electronic records and electronic signatures. For combination products and any 21 CFR Part 820 scope, the revised Part 820, now titled the Quality Management System Regulation (QMSR), incorporates ISO 13485:2016 by reference (effective 2 February 2026) and carries equivalent record and traceability expectations. For nonclinical safety studies, the GLP regulation in 21 CFR Part 58 sets the raw-data and archive rules. In the EU, Annex 11 of the GMP guidelines covers computerised systems and Chapter 4 covers documentation. ALCOA+ is the shorthand. These citations are the law and guidance underneath it. For a side-by-side reading of the two electronic-records regimes, see [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11).

### ALCOA versus ALCOA+ at a glance

| Letter | Principle | Core question it answers | Added in the "+"? |
|--------|-----------|--------------------------|-------------------|
| A | Attributable | Who did it, when, and with what? | Original five |
| L | Legible | Can it be read for the full retention period? | Original five |
| C | Contemporaneous | Was it recorded as it happened? | Original five |
| O | Original | Is the first-capture record (or a verified true copy) kept? | Original five |
| A | Accurate | Is it truthful and free of undisclosed manipulation? | Original five |
| C | Complete | Is everything relevant present, including failures and metadata? | Plus |
| C | Consistent | Do the values and sequence make scientific and physical sense? | Plus |
| E | Enduring | Does it survive in readable form for the required years? | Plus |
| A | Available | Can it be retrieved promptly when asked? | Plus |

Some authorities and trainers also speak of "ALCOA++" or add "Traceable" as a tenth idea. Do not get drawn into letter-counting in an interview. The right answer is that the principles are a coherent set describing a trustworthy record, and the exact count matters less than being able to apply each one to a real system.

---

## A, Attributable

**What it means.** Every piece of data must trace to the person who created or changed it and to the instrument or system that generated it. The record must answer three questions: who did this, when, and with what.

**Why it is required.** 21 CFR 211.194 requires records to identify the people performing and checking tests. Part 11 requires that electronic signatures and audit trails tie actions to identified individuals. Annex 11 clause 12 and clause 2 require access controls and identity. The risk rationale is simple: a record nobody owns is a record nobody can defend, and an anonymous action is the easiest place for an undetectable change to hide.

**What good looks like.**

- Individual named accounts for everyone who touches a GxP system. No shared logins, no generic team accounts.
- Instruments that capture the user identity at the moment of data acquisition, not only at login.
- Audit trails that record the actor, the action (create, modify, delete), the old and new value where applicable, and the timestamp.
- Electronic signatures bound to a specific record under Part 11, not just to an open session.
- For paper, a current signature and initials log that maps every set of initials to a named, trained individual.

**Where it fails.**

- Shared instrument logins such as "labadmin" or "analyst1" used by a whole team. The audit trail shows what happened but not who did it, which destroys attributability. This is one of the most common data integrity findings on record.
- Service or system accounts used for human data entry rather than for genuine system-to-system automation.
- Sessions that stay open all shift after a single login, so every entry is attributed to whoever logged in first.
- Paper records with no date or time, or initialed entries that cannot be tied to a named individual through a signature log.

**Worked example.** A QC lab runs a chromatography data system on a shared Windows account because the validated method was set up that way years ago. Three analysts use the instrument across two shifts. During an inspection, the investigator pulls an injection from 14:20 and asks who ran it. The CDS audit trail names the Windows account, not the person. Shift records show all three analysts were on site that day. The record is no longer attributable, and the finding is not "fix the login," it is "you cannot prove who generated any result on this instrument."

**Roles.** IT or system administrators provision named accounts and disable shared ones. The system owner defines roles and approves access. QA reviews access lists against current employment and training. The analyst is responsible for never sharing credentials and never working under another user's open session.

**How to assess it.** Pull a random sample of audit trail entries and trace each one to a named individual. Confirm that the person had authorized, current access at that time using your user management records. Look for shared accounts by comparing login timestamps against shift schedules and access requests. Treat any human action under a system or service account as a finding until proven otherwise. Audit trail design and review is its own discipline; see [Audit Trail Design and Review](/articles/audit-trail-design-and-review) and [Electronic Signatures Implementation](/articles/electronic-signatures-implementation).

---

## L, Legible

**What it means.** Data must be readable for its entire retention period, not just on the day it is created. For some products that period runs well past a decade.

**Why it is required.** A record you cannot read is a record you do not have. Annex 11 clause 17 on archiving and 21 CFR 211.180 tie long-term readability to the retention obligation. If a result that supported a batch release becomes unreadable inside the retention window, the release decision is no longer defensible.

**What good looks like.**

- Paper records in permanent ink, never pencil or erasable marker.
- Electronic records in formats with a documented long-term readability path, not orphaned proprietary binaries.
- Chromatography and spectroscopy data exportable to formats that do not depend on one frozen software version.
- Thermal printouts copied to a durable medium, because thermal paper fades.

**Where it fails.**

- Thermal printer records. Thermal paper can fade substantially within a few years under ordinary storage, and faster in heat or light. For a product with a long stability commitment, an unreadable original is a real integrity gap.
- Proprietary raw data formats that need a specific software version to render. When that software is decommissioned without a migration or archive reader, the data becomes practically inaccessible even though the files still exist.
- Faded, water-damaged, or torn paper during the retention window.
- Illegible handwriting, corrections written over the original entry, or correction fluid that hides what was first recorded.

**Roles.** The document owner specifies ink and media rules in the SOP. The records or archive function controls storage conditions. IT and the system owner own the format-migration plan. The person making the entry owns legible handwriting and correct corrections.

**How to assess it.** Pull batch records from five and ten years ago and confirm they are still fully readable. Inspect thermal records specifically. Verify that records held in proprietary electronic formats can be opened with currently supported software, and that a documented migration or archive plan exists for the full retention period. Good documentation practices cover the handwriting and correction rules in detail; see [Good Documentation Practices](/articles/good-documentation-practices).

---

## C, Contemporaneous

**What it means.** Records are created at the time the activity happens, not reconstructed from memory afterward. This is one of the most violated principles in the lab and one of the most scrutinized by inspectors, because a gap between event and record is where falsification hides.

**Why it is required.** 21 CFR 211.100(b) requires that activities be documented at the time they are performed. The risk is direct: a record written after the fact is a record written with hindsight, and hindsight is exactly what lets someone smooth over what really happened.

**What good looks like.**

- Batch record entries completed in real time as each step is performed.
- Instrument timestamps that match the documented procedure sequence.
- Observations and deviations captured at the moment of observation, not at final batch review.
- A synchronized, controlled system clock on every GxP instrument so timestamps can be trusted.

**Where it fails.**

- Backdating. An analyst records an activity on a date or time that does not match the instrument audit trail, sometimes to close a missed entry, sometimes to hide a real problem. This is the most serious contemporaneity failure and is treated as falsification.
- The end-of-shift documentation marathon. Every entry is in the right order, but the timestamps cluster at shift end because the work was logged from memory at the close.
- Instrument clocks not synchronized to a reference standard, which creates timestamp gaps that look like backdating even when the work was done correctly.
- Recording an observation that was never documented when it occurred, on the basis that the analyst remembers it.

**Worked example.** A reviewer cross-checks a batch record against the balance and pH meter audit trails for the same lot. The batch record shows a 4-hour incubation starting at 09:00. The instrument readings used to confirm the incubation endpoint are timestamped at 09:45. Either the incubation was short or the record was written from memory after the fact. Both are findings, and contemporaneity is the principle that surfaces them.

**Roles.** The operator or analyst records in real time. The supervisor enforces no-stockpiling of entries. IT and metrology own clock synchronization and its control. QA samples for timestamp clustering during record review.

**How to assess it.** Cross-reference batch record timestamps against instrument audit trail timestamps for the same operations. Look for clustering at shift change or close of business. Confirm that network time synchronization is in place for all GxP instruments and that there is a defined process for handling legitimate time discrepancies, with a record when one occurs. For the clock-control mechanics, see [Time Stamps and System Clock Control](/articles/time-stamps-and-system-clock-control). For how this plays out in connected manufacturing systems, see [MES, EBR, and SCADA Data Integrity](/articles/mes-ebr-scada-data-integrity).

---

## O, Original

**What it means.** Raw data is retained in the form it was first created. Transcribed data is acceptable only when the original is also kept and the transcription is verified, or when a controlled, verified true copy replaces it.

**Why it is required.** 21 CFR 211.180(d) and Annex 11 require the original record or a true copy. The FDA's 2018 Q&A is explicit that for computerized systems the complete electronic data, including audit trails and metadata, is the record. The risk is that a summary or printout silently drops the context that would change the interpretation.

**What good looks like.**

- Original paper records stored and retained, not just photocopies.
- Instrument raw data files kept in the system that generated them, not only the exported summary.
- When data moves from instrument to a laboratory information management system, both the original instrument export and the destination record are retained.
- Transcription verified against the original, with the verification documented, or a true copy created under a controlled process.

**Where it fails.**

- Recording results on scratch paper and then transcribing to the official record and discarding the scratch. The scratch paper was the original.
- Overwriting raw instrument data with a reprocessed version without keeping the original file.
- A LIMS importing a summary file while the full raw data set is never retained.
- Printing a chromatogram and treating the paper as the original when the electronic raw data is the actual original.

**The electronic data point regulators keep making.** For an electronic instrument, the original record is the electronic raw data, including its metadata, not a printout, not a PDF, not a screenshot. The FDA's 2018 data integrity Q&A is explicit that for computerized systems the complete electronic data including audit trails is the record, and retaining only a paper printout does not satisfy the requirement. This single point has driven a long list of warning letters across QC and manufacturing labs. The original and the data around it form a lifecycle; see [Data Lifecycle and Metadata](/articles/data-lifecycle-and-metadata) and [Static and Dynamic Records and True Copies](/articles/static-dynamic-records-true-copies).

**Roles.** The system owner defines where raw data lives and how it is protected from overwrite. QA approves the true-copy procedure. The analyst keeps originals and never destroys first-capture data.

**How to assess it.** For each GxP instrument, identify where the raw data file lives, whether it can be reconstructed to its original state, and whether the audit trail shows no undisclosed post-processing. Confirm that transfers from instruments to LIMS or other systems use a verified mechanism, ideally with a checksum or equivalent integrity check on the transfer.

---

## A, Accurate

**What it means.** Data is truthful and correct. This sounds obvious, but accuracy has specific design and handling consequences, especially around how out-of-specification results are managed.

**Why it is required.** 21 CFR 211.160(b) requires that laboratory controls be scientifically sound, and 211.194 requires complete records of all testing. Accuracy is the principle that makes a result mean what it says. The risk is that a number that looks fine on the certificate was produced by altering parameters, dropping runs, or testing into compliance.

**What good looks like.**

- OOS results investigated and documented before any reanalysis, following a defined procedure.
- Instrument calibration and qualification current at the time data is generated.
- Data processing methods validated and locked before use, with integration parameters controlled.
- Results never selectively excluded without a documented, scientifically sound justification.

**Where it fails.**

- Selective reporting. Passing results are reported and failing results are quietly dropped without an OOS investigation.
- Adjusting integration parameters on a chromatogram after seeing the result, then reprocessing to produce a passing peak.
- Running multiple injections and reporting only the one that passes, without retaining the failing runs.
- Using an instrument that is out of calibration, discarding the data, and re-running after calibration without documenting the original run.

**The boundary between an error and falsification.** Accuracy failures run from honest mistakes, such as a transcription slip or an instrument fault, to deliberate falsification. Regulators take both seriously, but they are not the same. An honest error caught, investigated, and corrected through CAPA is a quality event. Knowingly selecting or altering data to change a conclusion is fraud, and it triggers a different and far heavier response, including questions about every other record the same person or group produced. The investigation discipline that protects accuracy lives in the OOS process; see [OOS Investigation Process](/articles/oos-investigation-process) and [What Is a CAPA](/articles/what-is-a-capa).

**Roles.** The analyst follows the locked method and raises any OOS before reprocessing. The QC reviewer checks integration and that no run was dropped. QA owns the OOS procedure and the falsification escalation path. Metrology keeps calibration current.

**How to assess it.** Re-examine a sample of reprocessed chromatograms against the audit trail to confirm no post-hoc integration changes that lack a justification. Reconcile injection sequences against reported results to confirm no missing runs. Confirm calibration status at the time of acquisition for a sample of release-critical results.

---

## + Complete

**What it means.** All data, including metadata and repeat or failing results, must be present and intact. Nothing relevant to a quality decision may be left out.

**Why it is required.** 21 CFR 211.194 requires complete records of all data secured in the course of each test. Completeness is the principle that prevents cherry-picking. The risk is that a true-but-partial record tells a false story.

Complete is violated when a passing result is reported without the context that would change how it is read: the failing runs that came before it, the OOS investigation that was never finished, the analyst note that was later deleted, the audit trail entry that records a reprocessing nobody disclosed.

**Common failures.**

- Deleting raw data for failed runs and submitting only the passing run.
- System configurations that let rejected or repeated records be archived out of the routine review path so reviewers never see them.
- Metadata fields such as operator notes, instrument comments, or ambient conditions stripped during export.

**Worked example.** A method produces three injections. Two fail system suitability, one passes. The certificate reports the passing value. There is no OOS investigation because the analyst treated the failures as "trial runs." The data set is not complete, because the two failures are part of the record and they change the interpretation of the third. Completeness is what an investigator uses to ask "show me everything this instrument did for this sample," not just the number on the certificate.

**Roles.** The analyst retains all runs and all metadata. The reviewer confirms the full sequence is present and accounted for. QA confirms no configuration silently hides repeats. IT confirms exports do not strip metadata fields.

**How to assess it.** Pull a full instrument sequence for a reported sample and confirm every injection is accounted for, including aborted, trial, and failing runs. Confirm exported records still carry their metadata. Look for any "trial," "test," or "demo" sample naming used to park real runs outside review.

---

## C, Consistent

**What it means.** Records are internally consistent and consistent with the process and procedure that produced them. The sequence and the values have to make physical and scientific sense.

**Why it is required.** Consistency is not a single CFR clause; it is what review under 211.194 and Annex 11 is meant to catch. The risk it guards against is fabrication, because a forged value rarely lines up with every other timestamp and reading around it.

A batch record showing a 4-hour incubation completed in 45 minutes is not internally consistent with its own procedure. A chromatogram timestamped before sample preparation finished is not consistent with the process order. A result outside the range the method can scientifically produce is not consistent with the method.

**Where it shows up.**

- Timestamp sequences that contradict the physical reality of the procedure.
- Results outside what the analytical method is capable of generating.
- Two analysts signing for activities that overlap in time, which is physically impossible for a single-operator step.
- Units, significant figures, or rounding conventions that drift between the raw data and the reported result.

**Roles.** The reviewer is the front line for consistency, reading the record as a physical story rather than a set of boxes. QA sets the second-person review expectation. The data steward defines the rounding and significant-figure conventions so they do not drift.

Consistency is often the principle that exposes a fabricated record, because a forged value rarely lines up with every other timestamp and reading around it.

---

## E, Enduring

**What it means.** Records are retained for the required period in a form that stays readable and retrievable. Enduring is the long-horizon partner to Legible and Available.

**Why it is required.** 21 CFR 211.180 sets minimum retention (one year past expiry, or longer for some categories), and product, device, and clinical retention obligations can run far longer. The risk is that a system retirement or a media failure strands data the company is legally required to keep.

**Practical implications.**

- Software decommissioning plans must include data migration or a validated archive reader, so retiring a system does not strand its data. See [Backup, Restore, and Disaster Recovery Validation](/articles/backup-restore-disaster-recovery-validation).
- Paper records stored under conditions that preserve legibility, with environmental controls where the retention period is long.
- Electronic records backed up with restoration procedures that are actually tested, not just scheduled.
- Retention schedules defined and enforced per GxP data type, tied to product lifecycle and regulatory requirement rather than to whatever the storage system defaults to.

**Roles.** The records and archive function owns the retention schedule. IT owns backup, restore, and migration execution. QA approves the decommissioning and migration plan. The system owner signs that data is readable after migration.

A common trap is conflating backup with archive. A backup protects against recent loss. An archive preserves a fixed record for years. They serve different purposes and need different controls, and Enduring depends on the archive being right. For the migration and decommissioning discipline, see [Data Migration Validation](/articles/data-migration-validation).

---

## A, Available

**What it means.** Data can be retrieved promptly for review and inspection. It is not enough that the record exists somewhere. It has to be findable when asked for.

**Why it is required.** Inspectors and reviewers must be able to see records on request, and a record that cannot be produced reads as a control failure. Annex 11 clause 8 on printouts and the ability to obtain clear copies, alongside the general inspection right under the CGMPs, both assume prompt retrievability.

**Practical implications.**

- Records expected to be available on request during an inspection. The practical reading is hours, not days. A genuine inability to produce a record during an inspection reads to an investigator as a control problem, not a logistics one.
- Archives that are searchable and indexed, not just cold storage.
- Data held by contract organizations, such as testing labs or manufacturers, accessible to the sponsor under the quality agreement. See [CDMO Oversight and Quality Agreements](/articles/cdmo-oversight-quality-agreements).
- Off-site and offline archive retrieval processes that are defined and periodically tested, so the first retrieval is not happening live in front of an inspector.

**Roles.** The records function owns indexing and retrieval speed. IT owns archive search and offline restore. QA confirms contract-partner data is reachable under the quality agreement. The inspection host owns getting requested records to the room quickly.

---

## How the Nine Principles Interact

The principles are not independent boxes. They reinforce and sometimes substitute for each other, and reading them as a set is more useful than reading them one at a time.

- A printout can be Legible but not Original, because the electronic raw data is the true original.
- Data can be Accurate in the reported value but not Complete, because the failing runs were dropped.
- A record can be Original and Complete but not Contemporaneous, because it was reconstructed from memory.
- Enduring and Available both depend on Legible surviving the full retention period.

This interaction is why a single root cause often trips several principles at once. A shared login takes out Attributable, and if it also means nobody can prove who reprocessed a file, it weakens Original and Complete too. When you find one gap, look for the others it implies.

---

## Applying ALCOA+ as an Assessment Framework

The most useful way to use ALCOA+ is as a system assessment tool. For each GxP system, evaluate every data type against every principle and document the gap, with evidence. The matrix below is a starting structure, with the nine columns standing for Attributable, Legible, Contemporaneous, Original, Accurate, Complete, Consistent, Enduring, Available.

| System | Att | Leg | Con | Ori | Acc | Cmp | Cns | End | Ava |
|--------|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| LIMS | OK | OK | gap | OK | OK | OK | OK | OK | OK |
| CDS | gap | OK | OK | gap | OK | OK | OK | gap | OK |
| Spreadsheet | gap | OK | gap | gap | gap | gap | OK | gap | OK |

Where "gap" marks an issue that needs remediation. The pattern in that last row is typical. Uncontrolled spreadsheets fail multiple principles at once because they usually lack named-user attribution, audit trails, locked calculations, and a real archive. That is why spreadsheets used for GxP decisions get so much inspection attention; see [Infrastructure Qualification and Spreadsheet Validation](/articles/infrastructure-qualification-and-spreadsheet-validation).

**A worked remediation row.** Take the CDS row above. The "gap" in Attributable is a shared Windows login; the "gap" in Original is that only PDFs are retained, not the electronic raw data; the "gap" in Enduring is that the vendor format has no migration plan. The remediation record for that single system would read like this:

| Finding | Principle(s) | Risk rank | CAPA action | Owner | Due |
|---------|--------------|-----------|-------------|-------|-----|
| Shared OS login on the CDS workstation | Attributable | High | Provision named accounts, disable shared login, retrain | IT + Lab lead | 30 days |
| Only PDF printouts retained, not electronic raw data | Original, Complete | High | Configure raw-data archive, retain audit trail and metadata | System owner | 60 days |
| Vendor binary format has no long-term reader plan | Enduring, Legible | Medium | Define migration or validated archive reader in decommissioning plan | IT + QA | 90 days |

That is the difference between a matrix that drives action and one that sits in a binder.

A few rules make the matrix worth doing rather than performative:

1. Score against evidence, not against the SOP. The SOP says what should happen. The audit trail, the records, and the system configuration say what does happen. Score the second.
2. Sample real records for each cell. An "OK" with no evidence behind it is an opinion.
3. Tie every gap to a remediation owner, a CAPA, and a due date, so the matrix drives action rather than sitting in a binder.
4. Risk-rank the gaps. A missing audit trail on a release-critical instrument is not the same as a fading thermal printout on a non-critical log. Use your risk methodology to sequence the work; see [DI Gap Assessment Methodology](/articles/di-gap-assessment-methodology) and [Data Criticality and Data Risk](/articles/data-criticality-and-data-risk).

Backed by evidence, this matrix is both an internal risk tool and an inspection-ready artifact that demonstrates a proactive data integrity program. It also feeds directly into program-level planning; see [DI Program Architecture](/articles/di-program-architecture).

---

## Roles and Responsibilities Across the Record Lifecycle

ALCOA+ is not one function's job. It only holds when each role owns its part.

| Role | What they own for ALCOA+ |
|------|--------------------------|
| Operator / Analyst | Records contemporaneously, under their own identity, keeps originals and all runs, writes legibly and corrects properly |
| Reviewer (second person) | Reads the record for consistency, completeness, and contemporaneity; confirms attribution; checks the audit trail, not just the result |
| System owner | Defines where raw data lives, configures audit trails and access roles, owns validation and decommissioning |
| IT / Administration | Provisions named accounts, controls clocks, runs and tests backups, executes migrations |
| Metrology / Calibration | Keeps instruments calibrated and qualified so accuracy holds at the moment of capture |
| QA | Owns the procedures, samples records for evidence, classifies events, escalates suspected falsification |
| Data steward / DI lead | Maintains the ALCOA+ assessment matrix, risk-ranks gaps, drives CAPA to closure |
| Senior management | Funds remediation and owns the quality culture that makes honesty safe |

For the broader map of who does what in a GxP organization, see [GxP Roles and Responsibilities](/articles/gxp-roles-responsibilities) and [Data Governance Roles and Careers](/articles/data-governance-roles-and-careers).

---

## Where Programs Go Wrong With ALCOA+

Three failure modes show up repeatedly.

The first is treating ALCOA+ as a training slide rather than a control set. Everyone can recite the letters, and nothing in the systems actually enforces them. The fix is to map each principle to a specific, testable control: named accounts enforce Attributable, configured and reviewed audit trails enforce Contemporaneous and Original, locked methods enforce Accurate, retention and archive controls enforce Enduring and Available.

The second is assessing systems and ignoring data flows. Data crosses boundaries, from instrument to LIMS, from LIMS to a reporting system, from a contract lab to the sponsor. Integrity can hold inside each system and still break at the seam, where a transfer drops metadata or a manual re-key introduces error. Assess the flows, not just the boxes.

The third is confusing falsification risk with error risk and applying the same response to both. Honest errors need better procedures and training. Falsification needs governance, segregation of duties, independent review, and a culture where people are not punished for surfacing problems. The two require different programs, and quality culture is where the falsification risk is actually controlled; see [Quality Culture and DI Failures](/articles/quality-culture-di-failures).

### Common inspection-finding patterns

These are the patterns that recur in published findings across the industry, stated generically.

- Shared or generic logins on laboratory instruments, so results are not attributable.
- Audit trails turned off, set to a coarse level, or never reviewed as part of record review.
- Original electronic data not retained, only printouts or PDFs.
- "Trial," "test," or "demo" injections used to test into compliance, with failing runs not investigated.
- Backdated or post-dated entries, and timestamps clustered at shift end.
- System clocks not controlled, or users able to change the time.
- Reprocessing of chromatograms with changed integration after the result is known.
- No archive or migration plan for retired systems, so historical data is stranded or unreadable.
- Spreadsheets used for GxP calculations with no version control, no locked formulas, and no audit trail.

---

## Interview and Inspection Questions

The questions an interviewer or an inspector asks on ALCOA+ are nearly the same. Here is how to answer them well.

**"What does ALCOA+ stand for, and what was added in the plus?"**
Attributable, Legible, Contemporaneous, Original, Accurate were the original five. Complete, Consistent, Enduring, Available were added as records went electronic. Then add the value: the plus elements exist because electronic and hybrid records can be true in part yet still mislead, so completeness, internal consistency, and long-term survivability had to be made explicit.

**"Which principle is most commonly cited in findings, and why?"**
Attributable and Contemporaneous lead, with Original close behind. Shared logins kill attribution, after-the-fact recording kills contemporaneity, and keeping only printouts kills originality. Say why: these are the gaps where an undetectable change can hide.

**"For an HPLC result, what is the original record?"**
The complete electronic raw data, including the chromatogram, the integration, the method, the sequence, and the audit trail and metadata. Not the PDF, not the printout, not the reported number. The FDA 2018 Q&A is explicit on this.

**"How would you assess a system for ALCOA+?"**
Walk through the matrix: per system, per data type, score every principle against evidence, sample real records, risk-rank gaps, and tie each to a CAPA with an owner and a date. Stress that you score the configuration and the records, not the SOP.

**"How do you tell an honest error from data falsification?"**
Error is unintentional, usually self-disclosed, and fixed through CAPA. Falsification is a knowing act to change a conclusion: dropping failing runs, backdating, reprocessing to a target. The response differs: error needs better procedure and training; falsification needs investigation scope expansion, governance, and a culture review.

**"A batch record entry is timed 09:00 but the supporting instrument reading is 09:45. What do you do?"**
Treat it as a potential contemporaneity and consistency issue. Open a deviation or data integrity assessment, determine whether the work was actually done as recorded, check the clock synchronization, interview without leading, and decide whether it is an error or a falsification. Do not let anyone "correct" the record to make the gap disappear.

**"What is the difference between a backup and an archive, and why does it matter for ALCOA+?"**
A backup is short-term recovery; an archive is the long-term preserved record. Enduring and Available depend on the archive being controlled, indexed, and retrievable, with a migration plan. A backup rotation that overwrites itself does not satisfy retention.

**"Can a record be accurate but still fail ALCOA+?"**
Yes. A single reported value can be perfectly accurate and still fail Complete (failing runs dropped), Contemporaneous (written from memory), or Original (only the printout kept). That is the point of reading the principles as a set.

For broader interview preparation across data integrity and computerized systems, see [GxP Quality Interview Preparation](/articles/gxp-quality-interview-preparation) and the [GxP, CSV, and Data Integrity Glossary](/articles/gxp-csv-data-integrity-glossary).

---

## Practical Tips

- Map every principle to a control you can test, then test the control, not the slogan.
- When you find one gap, look for the principles it implies. A shared login is rarely only an Attributable problem.
- Read records as a physical story. Most fabrication is caught by Consistency: a timestamp or a value that cannot be true.
- Assess the seams between systems, not just the systems. Metadata and attribution are usually lost at transfer.
- Keep your assessment matrix evidence-backed and current. It doubles as an inspection-ready artifact and a remediation plan.
- Treat suspected falsification as a different animal from error from the first minute, and route it to the right people without contaminating the evidence.

The working goal is simple to state and hard to reach: data reliable enough to defend in an inspection, in a courtroom, and on behalf of a patient who will never see the record but depends entirely on it being true.

---

## The Point Regulators Are Actually Making

ALCOA+ is not a set of bureaucratic requirements. It describes what data has to look like for science to be reproducible and for quality decisions to be trustworthy.

An inspection finding against ALCOA+ is not, at its core, a paperwork violation. It is a statement that the data used to release product or make a quality decision cannot be fully trusted. That is why authorities take these findings seriously enough to issue warning letters, import alerts, and consent decrees, and why organizations that treat data integrity as a documentation exercise keep ending up in remediation rather than out of it.
