---
title: "ALCOA+: The Framework Behind Every Data Integrity Requirement"
description: "A complete breakdown of ALCOA+, what each principle actually means, where programs fail, and how to assess compliance in practice."
pubDate: 2025-07-16
tags: ["ALCOA+", "FDA", "GxP", "foundations"]
tier: "Intermediate"
pillar: "data-integrity"
---

ALCOA+ is the most referenced framework in pharmaceutical data integrity. It appears in FDA guidance, EMA Annex 11, WHO TRS, and virtually every quality management standard in regulated biotech. Yet it's also routinely misapplied, treated as a checklist rather than as a set of principles with real engineering and process implications.

This article breaks down each element in depth: what it actually means, where it most commonly fails, and how to assess it in a real GxP environment.

## Origins and Regulatory Basis

ALCOA was originally articulated by the FDA in the early 1990s as a way to define what makes raw data trustworthy. It stands for: **Attributable, Legible, Contemporaneous, Original, Accurate**.

The "+" additions, **Complete, Consistent, Enduring, Available**, were formalized in subsequent FDA and EMA guidance, with the EMA's 2016 data integrity guidance and FDA's 2018 guidance both adopting the extended framework. WHO adopted similar language in TRS 996 Annex 5.

The practical implication: ALCOA+ is not a single organization's policy. It reflects a global regulatory consensus on what constitutes a reliable record. If your data fails any element, it's not a technicality, it's an argument that the data cannot be used to make a quality decision.

---

## A, Attributable

**What it means:** Every piece of data must be traceable to the person who created or modified it, and to the instrument or system that generated it. The record must answer: who did this, when, and with what?

**What good looks like:**
- Individual user accounts for every person who accesses a GxP system. No shared logins, no generic accounts.
- Instruments that log user IDs at the time of data acquisition, not just at login.
- Audit trails that capture the actor (user ID), the action (create/modify/delete), and the timestamp.
- Electronic signatures that bind an individual to a specific record, not just to a session.

**Where it fails:**
- Shared instrument logins ("labadmin" or "analyst1" shared by a team) are the most common finding. The audit trail records what happened but not who did it, destroying attributability.
- Service accounts used for human data entry rather than system-to-system automation.
- Systems where users log in once at the start of a shift and the session remains open, all data entered in that session is attributed to the first login.
- Handwritten records with no date/time or with an initialed signature that can't be traced to a specific individual.

**How to assess it:**
Pull a random sample of audit trail entries and trace each one back to a named individual. Check whether your user management records can confirm that individual had authorized access at that time. Check whether any user accounts are shared across multiple individuals by reviewing login timestamps against shift schedules.

---

## L, Legible

**What it means:** Data must be readable throughout its entire retention period, not just when it's created, but when it needs to be reviewed, potentially years later.

**What good looks like:**
- Paper records in permanent ink (not pencil, not erasable marker).
- Electronic records in formats with long-term readability, not proprietary binary formats without a migration plan.
- Chromatography raw data exportable to formats that don't require a specific software version to open.
- Thermal paper chromatograms stored appropriately (they fade).

**Where it fails:**
- Thermal printer records are a persistent problem. Thermal paper fades significantly within 5 years under normal storage conditions. For product with 15-year stability requirements, this is a fundamental issue.
- Proprietary CDS raw data formats (`.raw` files from some vendors) that require specific software versions to render, and when that software is decommissioned, the data becomes practically inaccessible.
- Faded or damaged paper records that become unreadable during record retention periods.
- Handwritten records with illegible entries, corrections written over original entries, or use of correction fluid.

**How to assess it:**
Pull batch records from 5 and 10 years ago and verify they remain fully readable. Check thermal paper records specifically. Verify that electronic records in proprietary formats can be rendered with currently available software, and that there is a documented migration plan for long-term retention.

---

## C, Contemporaneous

**What it means:** Records must be created at the time the activity occurs, not reconstructed from memory after the fact.

This is one of the most violated principles in laboratory settings, and one of the most scrutinized by FDA inspectors.

**What good looks like:**
- Batch record entries completed in real time as each step is performed.
- Instrument data timestamps matching the documented procedure sequence.
- Observations and deviations recorded at the time of observation, not at batch review.

**Where it fails:**
- Backdating is the most serious contemporaneity failure. An analyst records a procedure on a date that doesn't match the instrument audit trail, either to clean up a missed entry or to falsify a result.
- "Batch record marathon", completing all documentation at the end of a shift rather than during the procedure. Entries are in order but timestamps are clustered at shift end.
- Instrument clocks not synchronized to a reference time standard, creating timestamp discrepancies that look like backdating even when the work was done correctly.
- Memory-based reconstruction of observations that were not documented when observed ("I remember the solution looked clear, so I'll record that now").

**How to assess it:**
Cross-reference batch record timestamps with instrument audit trail timestamps for the same operations. Look for clustering of entries at specific times (shift end, close of business). Verify that NTP or similar time synchronization is in place for all instruments, and that there is a documented process for handling time discrepancies when they occur legitimately.

---

## O, Original

**What it means:** Raw data must be retained in the form in which it was originally created. Transcribed data is acceptable only if the original is also retained and the transcription process is controlled.

**What good looks like:**
- Original paper records stored and retained, not copies.
- Instrument raw data files retained in the system that generated them, not just exported summaries.
- Where data is transferred from instrument to LIMS, both the original instrument export and the LIMS record are retained.
- Transcription processes with 100% verification against the original.

**Where it fails:**
- Analysts recording results on scratch paper first, then transcribing to official records and discarding the scratch paper. The scratch paper is the original.
- Overwriting raw instrument data with a reprocessed version without retaining the original file.
- LIMS importing a summary CSV from an instrument while the full raw data file is not retained.
- Printing a chromatogram and treating the printout as the original when the electronic raw data is the actual original.

**The electronic data complication:**
For electronic instruments, the original is the raw data file, not a printed report, not a PDF export, not a screenshot. FDA has been consistent on this: if an instrument generates electronic data, that electronic data is the original, and retaining only a printout is a violation. This has been the source of numerous warning letters.

**How to assess it:**
For each GxP instrument, identify where the raw data file is stored, whether it can be reconstructed to its original state, and whether the audit trail shows no post-processing modifications. Verify that data transfer processes from instruments to LIMS or other systems include checksum verification.

---

## A, Accurate

**What it means:** Data must be truthful and correct. This seems obvious, but accuracy has specific implications for how systems are designed and how results are handled.

**What good looks like:**
- OOS results investigated and documented before reanalysis is performed.
- Instrument calibration and qualification current at the time data is generated.
- Data processing methods validated and locked before use.
- Results not selectively excluded without documented justification.

**Where it fails:**
- Selective result reporting, reporting passing results and concealing failing results without documented OOS investigation.
- Altering integration parameters on chromatography data after reviewing the result, then reprocessing to get a passing peak area.
- Performing multiple injections and reporting only the passing one, without retaining the failing runs.
- Using an out-of-calibration instrument, then discarding the data and re-running after calibration without documenting the original run.

**The accuracy/falsification boundary:**
Accuracy failures range from unintentional errors (transcription mistakes, instrument malfunction) to intentional falsification. Regulators treat both seriously, but the consequences differ. An honest error with proper investigation and CAPA is a documentation issue. Intentional selection or alteration of data is fraud.

---

## + Complete

**What it means:** All data, including metadata, must be present and intact. No data relevant to a quality decision may be omitted.

Complete is violated when passing data is reported without the context that would change its interpretation: the failing runs that preceded it, the OOS investigation that wasn't fully completed, the analyst's observation note that was later deleted.

**Common failures:**
- Deleting raw data files for failed runs and submitting only the passing run.
- LIMS configurations that archive rather than retain records that were rejected during review.
- Metadata fields (operator notes, instrument comments, ambient conditions) stripped during data export.

---

## C, Consistent

**What it means:** Data and records must be internally consistent, and data must be consistent with the process and procedure that generated it.

A batch record that shows an analyst completing a 4-hour incubation in 45 minutes is not internally consistent with the procedure. A chromatogram timestamp that predates the sample preparation completion is not consistent with the process sequence.

**Where it's found:**
- Timestamp sequences that don't match the physical reality of a procedure.
- Results that fall outside the range of what the method is scientifically capable of producing.
- Multiple analysts signing for activities that overlap in time.

---

## E, Enduring

**What it means:** Records must be retained for the required period in a form that remains readable and retrievable.

**Practical implications:**
- Software decommissioning plans must include data migration or archive reader solutions.
- Paper records must be stored under conditions that preserve legibility.
- Electronic records must be backed up with tested restoration procedures.
- Record retention schedules must be defined and enforced for all GxP data types.

---

## A, Available

**What it means:** Data must be available for review and inspection when requested. This means not just that it exists, but that it can be retrieved promptly.

**Practical implications:**
- FDA expects records to be available "upon request during an inspection." Practical interpretation: within hours, not days.
- Archive systems must be searchable and accessible, not just storage.
- Data held by third parties (CROs, CMOs) must be accessible per contractual agreements.
- Off-site archive retrieval processes must be defined and tested.

---

## Applying ALCOA+ as an Assessment Framework

The most useful application of ALCOA+ is as a system assessment tool: for each GxP system, evaluate every data type against every principle and document the gap.

A practical approach:

| System | A | L | C | O | A | C | C | E | A |
|--------|---|---|---|---|---|---|---|---|---|
| LIMS | ✓ | ✓ | ! | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| CDS | ! | ✓ | ✓ | ! | ✓ | ✓ | ✓ | ! | ✓ |

Where `!` indicates a gap requiring remediation. This type of matrix, when backed by evidence, is both an internal risk management tool and an inspection-ready document that shows a proactive data integrity program.

## The Point Regulators Are Actually Making

ALCOA+ is not a set of bureaucratic requirements. It's a description of what data needs to look like for science to be reproducible and decisions to be trustworthy.

An inspection finding against ALCOA+ is not primarily a compliance violation, it's a statement that the data used to make quality decisions cannot be fully trusted. That's why FDA takes these findings seriously enough to issue warning letters, and why companies that treat data integrity as a paperwork exercise consistently end up in remediation.

The goal is data that is reliable enough to defend in an inspection, in a court, and in front of a patient.
