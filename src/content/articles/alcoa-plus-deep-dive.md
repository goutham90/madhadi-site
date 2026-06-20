---
title: "ALCOA+: The Framework Behind Every Data Integrity Requirement"
description: "A working breakdown of ALCOA+, what each principle actually means, where programs fail, and how to assess compliance against real records."
pubDate: 2025-07-16
tags: ["ALCOA+", "FDA", "GxP", "foundations"]
tier: "Intermediate"
pillar: "data-integrity"
---

ALCOA+ is the most referenced framework in pharmaceutical data integrity. It appears in FDA guidance, EMA Annex 11, WHO technical reports, and effectively every quality management standard used in regulated biotech and pharma. It is also routinely misapplied. Many programs treat it as a checklist to be ticked once a year, when it is actually a set of principles with real engineering, configuration, and process consequences.

This article breaks down each element: what it means, where it most commonly fails, and how to assess it against real records rather than against a policy document. The same nine principles serve three different readers. If you are new to GxP, they tell you what a trustworthy record looks like. If you run a lab or a system, they tell you where your controls leak. If you own a program, they give you a single vocabulary that lines up with how inspectors think.

## Origins and Regulatory Basis

ALCOA was articulated by an FDA investigator in the early 1990s as a memory aid for what makes raw data trustworthy. It stands for Attributable, Legible, Contemporaneous, Original, Accurate. The acronym was a teaching device first and a framework second, which is part of why it travels so well.

The additions, Complete, Consistent, Enduring, Available, came later as the industry moved from paper to hybrid and electronic records. The MHRA published data integrity guidance that helped popularize the extended set, with its 2018 version, "GXP Data Integrity Guidance and Definitions," being the most cited. The WHO addressed the same ground in its Technical Report Series No. 996, Annex 5, "Guidance on good data and record management practices" (2016). The PIC/S guidance PI 041, "Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments," consolidated the thinking for inspectors across member authorities. The FDA's own "Data Integrity and Compliance With Drug CGMP: Questions and Answers" guidance (final, December 2018) does not spell out the nine letters, but it enforces the same expectations through the CGMP regulations in 21 CFR Parts 210, 211, and 212.

The practical implication is that ALCOA+ is not one company's policy and not one regulator's preference. It reflects a global consensus on what counts as a reliable record. If your data fails any element, that is not a technicality. It is an argument that the data cannot be used to make a quality decision, which means the decision itself is in question. For the underlying logic of why records carry this weight at all, see [Data Integrity Foundations](/articles/data-integrity-foundations).

A note on the regulations the principles sit on top of. In the United States, 21 CFR 211.68 covers automatic equipment and the controls and records around it, 211.180 through 211.198 cover record retention and review, and 21 CFR Part 11 covers electronic records and electronic signatures. In the EU, Annex 11 of the GMP guidelines covers computerised systems and Chapter 4 covers documentation. ALCOA+ is the shorthand. These citations are the law and guidance underneath it.

---

## A, Attributable

**What it means.** Every piece of data must trace to the person who created or changed it and to the instrument or system that generated it. The record must answer three questions: who did this, when, and with what.

**What good looks like.**

- Individual named accounts for everyone who touches a GxP system. No shared logins, no generic team accounts.
- Instruments that capture the user identity at the moment of data acquisition, not only at login.
- Audit trails that record the actor, the action (create, modify, delete), the old and new value where applicable, and the timestamp.
- Electronic signatures bound to a specific record under Part 11, not just to an open session.

**Where it fails.**

- Shared instrument logins such as "labadmin" or "analyst1" used by a whole team. The audit trail shows what happened but not who did it, which destroys attributability. This is one of the most common data integrity findings on record.
- Service or system accounts used for human data entry rather than for genuine system-to-system automation.
- Sessions that stay open all shift after a single login, so every entry is attributed to whoever logged in first.
- Paper records with no date or time, or initialed entries that cannot be tied to a named individual through a signature log.

**Worked example.** A QC lab runs a chromatography data system on a shared Windows account because the validated method was set up that way years ago. Three analysts use the instrument across two shifts. During an inspection, the investigator pulls an injection from 14:20 and asks who ran it. The CDS audit trail names the Windows account, not the person. Shift records show all three analysts were on site that day. The record is no longer attributable, and the finding is not "fix the login," it is "you cannot prove who generated any result on this instrument."

**How to assess it.** Pull a random sample of audit trail entries and trace each one to a named individual. Confirm that the person had authorized, current access at that time using your user management records. Look for shared accounts by comparing login timestamps against shift schedules and access requests. Treat any human action under a system or service account as a finding until proven otherwise. Audit trail design and review is its own discipline; see [Audit Trail Design and Review](/articles/audit-trail-design-and-review).

---

## L, Legible

**What it means.** Data must be readable for its entire retention period, not just on the day it is created. For some products that period runs well past a decade.

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

**How to assess it.** Pull batch records from five and ten years ago and confirm they are still fully readable. Inspect thermal records specifically. Verify that records held in proprietary electronic formats can be opened with currently supported software, and that a documented migration or archive plan exists for the full retention period. Good documentation practices cover the handwriting and correction rules in detail; see [Good Documentation Practices](/articles/good-documentation-practices).

---

## C, Contemporaneous

**What it means.** Records are created at the time the activity happens, not reconstructed from memory afterward. This is one of the most violated principles in the lab and one of the most scrutinized by inspectors, because a gap between event and record is where falsification hides.

**What good looks like.**

- Batch record entries completed in real time as each step is performed.
- Instrument timestamps that match the documented procedure sequence.
- Observations and deviations captured at the moment of observation, not at final batch review.

**Where it fails.**

- Backdating. An analyst records an activity on a date or time that does not match the instrument audit trail, sometimes to close a missed entry, sometimes to hide a real problem. This is the most serious contemporaneity failure and is treated as falsification.
- The end-of-shift documentation marathon. Every entry is in the right order, but the timestamps cluster at shift end because the work was logged from memory at the close.
- Instrument clocks not synchronized to a reference standard, which creates timestamp gaps that look like backdating even when the work was done correctly.
- Recording an observation that was never documented when it occurred, on the basis that the analyst remembers it.

**Worked example.** A reviewer cross-checks a batch record against the balance and pH meter audit trails for the same lot. The batch record shows a 4-hour incubation starting at 09:00. The instrument readings used to confirm the incubation endpoint are timestamped at 09:45. Either the incubation was short or the record was written from memory after the fact. Both are findings, and contemporaneity is the principle that surfaces them.

**How to assess it.** Cross-reference batch record timestamps against instrument audit trail timestamps for the same operations. Look for clustering at shift change or close of business. Confirm that network time synchronization is in place for all GxP instruments and that there is a defined process for handling legitimate time discrepancies, with a record when one occurs. For how this plays out in connected manufacturing systems, see [MES, EBR, and SCADA Data Integrity](/articles/mes-ebr-scada-data-integrity).

---

## O, Original

**What it means.** Raw data is retained in the form it was first created. Transcribed data is acceptable only when the original is also kept and the transcription is verified.

**What good looks like.**

- Original paper records stored and retained, not just photocopies.
- Instrument raw data files kept in the system that generated them, not only the exported summary.
- When data moves from instrument to a laboratory information management system, both the original instrument export and the destination record are retained.
- Transcription verified against the original, with the verification documented.

**Where it fails.**

- Recording results on scratch paper and then transcribing to the official record and discarding the scratch. The scratch paper was the original.
- Overwriting raw instrument data with a reprocessed version without keeping the original file.
- A LIMS importing a summary file while the full raw data set is never retained.
- Printing a chromatogram and treating the paper as the original when the electronic raw data is the actual original.

**The electronic data point regulators keep making.** For an electronic instrument, the original record is the electronic raw data, including its metadata, not a printout, not a PDF, not a screenshot. The FDA's 2018 data integrity Q&A is explicit that for computerized systems the complete electronic data including audit trails is the record, and retaining only a paper printout does not satisfy the requirement. This single point has driven a long list of warning letters across QC and manufacturing labs. The original and the data around it form a lifecycle; see [Data Lifecycle and Metadata](/articles/data-lifecycle-and-metadata).

**How to assess it.** For each GxP instrument, identify where the raw data file lives, whether it can be reconstructed to its original state, and whether the audit trail shows no undisclosed post-processing. Confirm that transfers from instruments to LIMS or other systems use a verified mechanism, ideally with a checksum or equivalent integrity check on the transfer.

---

## A, Accurate

**What it means.** Data is truthful and correct. This sounds obvious, but accuracy has specific design and handling consequences, especially around how out-of-specification results are managed.

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

---

## + Complete

**What it means.** All data, including metadata and repeat or failing results, must be present and intact. Nothing relevant to a quality decision may be left out.

Complete is violated when a passing result is reported without the context that would change how it is read: the failing runs that came before it, the OOS investigation that was never finished, the analyst note that was later deleted, the audit trail entry that records a reprocessing nobody disclosed.

**Common failures.**

- Deleting raw data for failed runs and submitting only the passing run.
- System configurations that let rejected or repeated records be archived out of the routine review path so reviewers never see them.
- Metadata fields such as operator notes, instrument comments, or ambient conditions stripped during export.

**Worked example.** A method produces three injections. Two fail system suitability, one passes. The certificate reports the passing value. There is no OOS investigation because the analyst treated the failures as "trial runs." The data set is not complete, because the two failures are part of the record and they change the interpretation of the third. Completeness is what an investigator uses to ask "show me everything this instrument did for this sample," not just the number on the certificate.

---

## C, Consistent

**What it means.** Records are internally consistent and consistent with the process and procedure that produced them. The sequence and the values have to make physical and scientific sense.

A batch record showing a 4-hour incubation completed in 45 minutes is not internally consistent with its own procedure. A chromatogram timestamped before sample preparation finished is not consistent with the process order. A result outside the range the method can scientifically produce is not consistent with the method.

**Where it shows up.**

- Timestamp sequences that contradict the physical reality of the procedure.
- Results outside what the analytical method is capable of generating.
- Two analysts signing for activities that overlap in time, which is physically impossible for a single-operator step.
- Units, significant figures, or rounding conventions that drift between the raw data and the reported result.

Consistency is often the principle that exposes a fabricated record, because a forged value rarely lines up with every other timestamp and reading around it.

---

## E, Enduring

**What it means.** Records are retained for the required period in a form that stays readable and retrievable. Enduring is the long-horizon partner to Legible and Available.

**Practical implications.**

- Software decommissioning plans must include data migration or a validated archive reader, so retiring a system does not strand its data. See [Backup, Restore, and Disaster Recovery Validation](/articles/backup-restore-disaster-recovery-validation).
- Paper records stored under conditions that preserve legibility, with environmental controls where the retention period is long.
- Electronic records backed up with restoration procedures that are actually tested, not just scheduled.
- Retention schedules defined and enforced per GxP data type, tied to product lifecycle and regulatory requirement rather than to whatever the storage system defaults to.

A common trap is conflating backup with archive. A backup protects against recent loss. An archive preserves a fixed record for years. They serve different purposes and need different controls, and Enduring depends on the archive being right.

---

## A, Available

**What it means.** Data can be retrieved promptly for review and inspection. It is not enough that the record exists somewhere. It has to be findable when asked for.

**Practical implications.**

- Records expected to be available on request during an inspection. The practical reading is hours, not days. A genuine inability to produce a record during an inspection reads to an investigator as a control problem, not a logistics one.
- Archives that are searchable and indexed, not just cold storage.
- Data held by contract organizations, such as testing labs or manufacturers, accessible to the sponsor under the quality agreement. See [CDMO Oversight and Quality Agreements](/articles/cdmo-oversight-quality-agreements).
- Off-site and offline archive retrieval processes that are defined and periodically tested, so the first retrieval is not happening live in front of an inspector.

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

A few rules make the matrix worth doing rather than performative:

1. Score against evidence, not against the SOP. The SOP says what should happen. The audit trail, the records, and the system configuration say what does happen. Score the second.
2. Sample real records for each cell. An "OK" with no evidence behind it is an opinion.
3. Tie every gap to a remediation owner, a CAPA, and a due date, so the matrix drives action rather than sitting in a binder.
4. Risk-rank the gaps. A missing audit trail on a release-critical instrument is not the same as a fading thermal printout on a non-critical log. Use your risk methodology to sequence the work; see [DI Gap Assessment Methodology](/articles/di-gap-assessment-methodology).

Backed by evidence, this matrix is both an internal risk tool and an inspection-ready artifact that demonstrates a proactive data integrity program. It also feeds directly into program-level planning; see [DI Program Architecture](/articles/di-program-architecture).

## Where Programs Go Wrong With ALCOA+

Three failure modes show up repeatedly.

The first is treating ALCOA+ as a training slide rather than a control set. Everyone can recite the letters, and nothing in the systems actually enforces them. The fix is to map each principle to a specific, testable control: named accounts enforce Attributable, configured and reviewed audit trails enforce Contemporaneous and Original, locked methods enforce Accurate, retention and archive controls enforce Enduring and Available.

The second is assessing systems and ignoring data flows. Data crosses boundaries, from instrument to LIMS, from LIMS to a reporting system, from a contract lab to the sponsor. Integrity can hold inside each system and still break at the seam, where a transfer drops metadata or a manual re-key introduces error. Assess the flows, not just the boxes.

The third is confusing falsification risk with error risk and applying the same response to both. Honest errors need better procedures and training. Falsification needs governance, segregation of duties, independent review, and a culture where people are not punished for surfacing problems. The two require different programs, and quality culture is where the falsification risk is actually controlled; see [Quality Culture and DI Failures](/articles/quality-culture-di-failures).

## The Point Regulators Are Actually Making

ALCOA+ is not a set of bureaucratic requirements. It describes what data has to look like for science to be reproducible and for quality decisions to be trustworthy.

An inspection finding against ALCOA+ is not, at its core, a paperwork violation. It is a statement that the data used to release product or make a quality decision cannot be fully trusted. That is why authorities take these findings seriously enough to issue warning letters, import alerts, and consent decrees, and why organizations that treat data integrity as a documentation exercise keep ending up in remediation rather than out of it.

The working goal is simple to state and hard to reach: data reliable enough to defend in an inspection, in a courtroom, and on behalf of a patient who will never see the record but depends entirely on it being true.
