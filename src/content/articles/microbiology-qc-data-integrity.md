---
title: "Data Integrity in the Microbiology QC Laboratory"
description: "How to keep environmental monitoring, bioburden, sterility, and endotoxin records defensible when the work is a hybrid of human eyes, paper forms, and instruments that rarely produce a clean electronic original."
pubDate: 2026-06-22
tags: ["data-integrity", "microbiology", "environmental-monitoring", "sterility-testing", "hybrid-records", "GxP"]
pillar: "data-integrity"
tier: "Advanced"
---

The microbiology QC laboratory is where data integrity programs that look solid on paper quietly fall apart. The chemistry lab has chromatography data systems with audit trails, electronic signatures, and immutable raw files. Micro has an analyst squinting at a plate, counting colonies by eye, writing a number on a form, and a second person looking over their shoulder. Most of the record is human judgment captured on paper, and the instrument data that does exist (the incubator chart, the endotoxin reader printout, the particle counter file) sits beside the paper rather than replacing it. That hybrid structure, half human and half machine with a seam in the middle, is one of the most frequently cited weak points in inspections, and it is the hardest part of a site to make genuinely defensible.

This article covers the specific integrity controls that micro work needs: contemporaneous recording at the bench, manual colony counting and second-person verification, plate reading and image retention, the integrity of environmental monitoring, bioburden, sterility, and endotoxin records, reading windows for incubated plates, and the paper-and-instrument hybrid traps that keep showing up in 483s. If you are new to the underlying principles, start with [data integrity foundations](/articles/data-integrity-foundations) and [the ALCOA+ principles in detail](/articles/alcoa-plus-deep-dive). For the broader hybrid problem that micro is a special case of, read [hybrid paper and electronic records](/articles/hybrid-paper-electronic-records). The worked examples and interview questions near the end are the parts to reread before an inspection or a job interview.

---

## Why Micro Is Different (and Harder)

### The regulatory basis

The same rules apply to micro as to every other GxP record. In the United States, 21 CFR 211.194 requires complete records of all tests, 211.160(b) requires that laboratory controls be scientifically sound, and 21 CFR Part 11 governs any electronic records and signatures the lab does generate. The FDA guidance "Data Integrity and Compliance With Drug CGMP: Questions and Answers" (final, December 2018) and the MHRA "GXP Data Integrity Guidance and Definitions" (March 2018) apply in full. In the European Union, EU GMP Annex 1 (the 2022 revision, effective for most provisions August 2023) sets the contamination control expectations that drive most micro testing, and EU GMP Annex 11 governs the computerized parts. PIC/S PI 041, "Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments", gives the most detailed treatment of hybrid records, which is exactly what micro runs on.

In its own terms, 21 CFR 211.194(a) requires laboratory records to carry the complete data from every test run to show compliance with the established specifications and standards. The word "complete" is the one that bites in micro. A colony count is the result of an observation that cannot be re-run. Once the analyst discards the plate, the only record of what was on it is the number they wrote and any image they captured. There is no raw data file to go back to.

### Why the risk is structurally higher

Four features make micro records harder to keep defensible than chemistry records:

- **The observation is destructive and time-bound.** A plate is read once, at a defined time, and then discarded or overgrown. You cannot reconstruct the count later the way you can reprocess a chromatogram. The contemporaneous record is the only record.
- **The primary measurement is human.** Counting colonies, reading a sterility tube for turbidity, scoring a Gram stain: these are judgments, not instrument outputs. Two trained analysts can read the same plate as 47 and 52 and both be defensible. That variability is normal, but it makes the second-person check load-bearing rather than ceremonial.
- **Long latency between work and result.** A sterility test runs 14 days. Environmental monitoring (EM) plates incubate for days. Stability and bioburden have their own windows. The gap between performing the work and recording the final read is where contemporaneity breaks and where the temptation to "remember" a reading and write it up later creeps in.
- **The records are a hybrid by nature.** Almost no micro result lives in a single system. A bioburden result combines a paper bench sheet, an incubator temperature chart, and sometimes a colony-counter printout. Sterility combines a paper observation log with an isolator or incubator record. The integrity of the result depends on the seam between these holding.

The companion micro articles cover the science: [environmental monitoring program](/articles/environmental-monitoring-program), [bioburden and endotoxin testing](/articles/bioburden-and-endotoxin-testing), [sterility testing per USP 71](/articles/sterility-testing-usp-71), and [microbial identification and EM excursions](/articles/microbial-id-and-em-excursions). This article is about keeping those records trustworthy, not about how to run the assays.

---

## Contemporaneous Recording at the Bench

### Why it matters

Contemporaneous is the C in ALCOA+, and it is the attribute micro fails most often. The risk is not fraud in most cases. It is an analyst reading three sets of EM plates, holding the numbers in their head, and writing them onto the forms back at the desk twenty minutes later. The record is now a reconstruction, and a reconstruction is not the original observation. If one number is transposed, nothing in the system catches it, because there is no instrument file to reconcile against.

The deeper risk is the gap between when the observation happened and when the record claims it happened. If a plate was read at 09:15 and the form is dated and timed 09:45, an inspector who notices the mismatch (against an incubator door-open log, a swipe-card record, or a calibration timestamp) has a contemporaneity finding, and contemporaneity findings cast doubt on every other number on the page.

### What contemporaneous means here

The reading is recorded at the moment of observation, on the controlled form or in the controlled system, by the person who made the observation, with the actual date and time. Not before (you cannot pre-fill a reading). Not after from memory. Not by a colleague who was told the number across the room.

### How to do it, step by step

1. Take the controlled form (or open the controlled electronic record) to the bench or the reading station. Do not read first and write later.
2. Record each observation as you make it: the colony count for that specific plate or filter, against that specific sample and plate identifier, before moving to the next plate.
3. Enter the real clock time of the read, not a rounded or batch time applied to every plate at once. If ten plates were read over fifteen minutes, the times should reflect that, not show all ten at 09:00.
4. If the reading station is a separate room from where the form lives, fix the process so the form travels with the work. A "transcribe back at the desk" step is a contemporaneity gap waiting to be found.
5. Where an electronic colony counter or plate imager is used, let it write the timestamp, and confirm the instrument clock is synchronized. See [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).

### Acceptance criteria

Contemporaneous recording is in order when every micro observation is recorded at the point and time of observation by the observer, on the controlled record, with a real clock time that can survive comparison against independent timestamps (incubator logs, access logs, instrument clocks), and when there is no documented or procedural step that requires holding readings in memory before recording.

### Worked example

An EM analyst reads viable air-sample plates from three cleanrooms. The defensible version: she carries the EM data sheet to the plate-reading station, reads plate `EM-2026-0418-A` and writes "12 CFU" with time 08:52 and her initials, then plate `EM-2026-0418-B` and writes "0 CFU" at 08:54, and so on, signing each as read. The indefensible version: she reads all eighteen plates, returns to the office, and fills the whole sheet at 09:20 from a sticky note. Same numbers, very different record. The second one collapses the moment an inspector cross-checks the sheet time against the incubator removal log.

### Roles

The analyst owns recording at the moment of observation. The lab supervisor owns a workflow that does not force a transcription gap (form at the bench, reading station near the record). QA owns the procedure that defines contemporaneous recording and the second-person check that backs it up.

### Common 483-type mistakes

- Plates read, then recorded later from memory or a scrap of paper.
- A single batch time stamped on every plate read across a twenty-minute session.
- Pre-printed or pre-dated forms filled in before the work was done.
- Readings called out by one analyst and written by another, with no record of who actually observed.

---

## Manual Colony Counting and Second-Person Verification

### Why it matters

The colony count is the result. There is no underlying data file that proves it, so the count and the check on the count carry the full integrity burden. Two controls make a manual count defensible: a documented counting method so the number is reproducible, and an independent second-person verification so a misread or a transcription slip is caught while the plate still exists. Once the plate is gone, neither can be done.

This is where the verification step earns its place. A second-person check is not a signature ritual. Done properly it means a second qualified analyst looks at the same plate (or the retained image) and independently agrees the count is right, before the plate is discarded.

### What a defensible counting method specifies

- How a colony is defined and counted, including how to handle merged or confluent growth.
- The countable range and what to do outside it (for example, "too numerous to count" handling, dilution scheme, when to report estimated or "TNTC").
- How spreaders, satellites, and artifacts are distinguished from true colonies.
- Whether and when an electronic colony counter is used, and how its count is verified.
- The rounding and reporting convention, and the units (CFU per plate, per filter, per cubic meter, per contact area).

### How second-person verification should work, step by step

1. The first analyst counts the plate and records the count, time, and initials on the controlled record while the plate is in front of them.
2. A second qualified analyst, independent of the first, examines the same plate (not just the written number) and confirms the count, or records a discrepancy.
3. The verification happens before the plate is discarded, so a disagreement can be resolved against the physical evidence, not against memory.
4. If the two counts differ beyond a defined tolerance, the procedure defines resolution: re-count together, capture an image, escalate, and document the basis for the reported number. The discrepancy and its resolution are part of the record.
5. The second person dates and signs the verification. A check with no time and no name is not a verification.

A verification done after the plate is discarded is verification of a number against nothing. It confirms the second person can read the first person's handwriting, not that the count was right. That is one of the most common hollow controls in micro.

### Acceptance criteria

Verification is sound when a documented counting method exists and analysts are trained to it, the count is recorded contemporaneously by the counter, an independent second qualified person confirms the count against the plate (or a retained image of it) before the plate is discarded, discrepancies beyond tolerance are resolved and documented against physical evidence, and both the count and the check carry an attributable name and a real time.

### Worked example

A bioburden plate from a drug substance sample shows growth near the upper countable limit. Analyst A counts 287 CFU and records it at 14:10. Analyst B, independent, recounts the same plate, gets 291, within the lab's defined +/- 5 percent tolerance for counts above 100. They record both counts, agree on the reported value per the procedure (here, A's contemporaneous count of 287, with B's confirming count documented), B signs the verification at 14:14, and only then is the plate photographed and discarded. If B had instead "verified" the 287 the next morning from the form alone, with the plate already in the autoclave, the control would be cosmetic.

### Roles

Analyst A (counter): the contemporaneous count and method adherence. Analyst B (verifier): an independent recount against the plate, not the paper. The supervisor: that verifiers are qualified and genuinely independent, and that the workflow makes verification-before-discard physically possible. QA: the counting and verification procedure, and oversight of discrepancy handling.

### Common 483-type mistakes

- Second-person "verification" performed after the plate was discarded, against the written number only.
- No documented counting method, so two analysts count differently and neither is wrong or right.
- Verifier is the supervisor signing in bulk at end of shift without seeing the plates.
- Discrepant counts silently overwritten to agree, with no record of the original disagreement.
- Electronic colony-counter output accepted with no verification of the instrument's count against the plate.

---

## Plate Reading, Retention, and Imaging

### Why it matters

Because the plate is destructive and time-bound, the question "can you prove what was on the plate" usually has only two possible answers: an image of the plate, or nothing but the analyst's word. Retention of plates (for a limited window) and, increasingly, imaging of plates turn an unrepeatable observation into something a reviewer or inspector can examine after the fact. Where a count is contested, an EM excursion is investigated, or a sterility result is challenged, the image is often the only objective evidence left.

### What "retention and imaging" means

- **Short-term plate retention.** Keep read plates, refrigerated or otherwise held per procedure, for a defined window (often a few days) so a count can be re-examined if a result is questioned before the plate degrades. This is a holding window, not archival; plates overgrow and become unreadable, which is exactly why imaging matters more.
- **Plate imaging.** Capture an image of the plate at the time of reading, especially for excursions, near-limit results, isolate recovery, and any count that feeds a critical decision. The image is a true copy of the observation at the moment it was made. See [static and dynamic records and true copies](/articles/static-dynamic-records-true-copies) for what makes a copy defensible.
- **Image integrity.** A retained image is a GxP record. It needs the same controls as any other: attributable to the plate and sample, timestamped, stored where it cannot be silently altered or deleted, and retained as long as the result it supports.

### How to operationalize it, step by step

1. Define in the procedure which results require an image: at minimum excursions, near-limit counts, sterility-positive observations, and any isolate sent for [identification](/articles/microbial-id-and-em-excursions).
2. At the read, photograph the plate with its identifier and sample visible in frame, or use an imaging colony counter that binds the image to the record.
3. Name and store the image so it ties unambiguously to the plate, sample, date, and analyst. A folder of unlabeled JPEGs is not a record.
4. Hold the physical plate for the defined retention window in case a re-read is needed before it degrades.
5. Treat the image store as validated GxP storage: access-controlled, backed up, audit-trailed if the platform supports it. Confirm backup and restore actually return the images. See [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation).

### Acceptance criteria

Retention and imaging are adequate when the procedure defines which results must be imaged and the lab does it consistently, images are bound to the correct plate/sample/date/analyst, the image store is access-controlled and backed up with restore proven, plates are held for the defined window, and a reviewer can pull the image for any imaged result and see what the analyst saw.

### Worked example

A Grade A surface contact plate from an aseptic fill shows 1 CFU, an excursion for that grade. Per procedure, the analyst photographs the plate showing the single colony, the plate ID, and the location label, and the image is stored against the EM record. The colony is recovered for identification. Two weeks later, during the excursion investigation, QA pulls the image and confirms it was a single discrete colony, not a smudge or a counting artifact, and the identification ties to the recovered isolate. Without the image, the investigation would rest on the analyst's recollection of a plate now long gone.

### Roles

Analyst: capture the image at the read and bind it to the record. Lab supervisor: plates retained for the window, imaging done where required. IT/system owner: the image store is validated, access-controlled, backed up. QA: the imaging procedure and use of images in investigations.

### Common 483-type mistakes

- No images of excursion or sterility-positive plates, so the investigation has no objective evidence.
- Images stored in an uncontrolled shared drive, editable and deletable by anyone, with no link to the sample.
- Plates discarded immediately after reading with no retention window, removing any chance of a re-read.
- Imaging colony-counter data never reviewed; only the headline count is transcribed and the bound image is ignored.

---

## Integrity of EM, Bioburden, Sterility, and Endotoxin Records

Each of the core micro tests has its own integrity traps. They share a structure: a human observation, a paper record, and one or more instruments whose data sits alongside the paper. The integrity of the result depends on all three holding and on the links between them.

### Environmental monitoring

EM records are high-risk because they directly evidence the state of control of the aseptic process, and a failed EM result can implicate batches already released. That pressure is exactly why EM data integrity gets scrutinized. The records must show the full picture: every scheduled location sampled, every plate read, every excursion captured and investigated, with no quiet omissions.

The integrity questions an inspector asks of EM:

- Were all scheduled samples actually taken, or were some "missed" sampling events never recorded? Reconcile the EM plan against the executed records.
- Does the plate-and-incubator chain hold, meaning the incubation temperature and duration are documented and within range for the plates that produced the reported counts?
- Are excursions captured and escalated, or is there evidence (gaps in numbering, sequence breaks, isolates with no matching count) that an unfavorable result was dropped?
- Are active air-sampler volumes, contact-plate areas, and the resulting per-volume or per-area calculations recorded and checkable?

For the EM program itself, see [environmental monitoring program](/articles/environmental-monitoring-program) and, for the contamination control context, [Annex 1 and the contamination control strategy](/articles/annex-1-contamination-control-strategy) and [aseptic processing and media fills](/articles/aseptic-processing-and-media-fills).

### Bioburden

Bioburden combines a paper bench sheet, dilution and filtration steps, incubation, and a colony count. The integrity traps: untracked dilution and filtration so the count cannot be tied back to a per-unit result, incubation conditions not documented against the plates, and the perennial colony-count-without-verification gap covered above. The reconciliation that matters: the number of plates set up, the dilutions used, and the final reported CFU per unit must all hang together arithmetically and be checkable from the record alone.

### Sterility testing

Sterility (USP 71, EP 2.6.1) is the highest-stakes micro test, because a result decides whether a sterile product is released. The integrity points:

- The 14-day observation must be recorded contemporaneously, with each scheduled observation day documented, not back-filled at day 14.
- Any growth (turbidity) must be recorded when observed, with the observation date, not retroactively reconciled to a convenient story.
- A sterility positive triggers a formal investigation (USP 71 allows invalidation only under defined, documented conditions). The integrity question is whether positives are ever quietly re-tested away. An inspector reconciles the number of tests started against the number of results reported, looking for a started-but-vanished test.
- The reading environment and the analyst are recorded for each observation.

The classic sterility integrity failure is a positive that was observed, not recorded, and a retest reported as the only result. See [sterility testing per USP 71](/articles/sterility-testing-usp-71).

### Endotoxin (BET)

Bacterial endotoxin testing (USP 85) is the most instrument-driven of the four, and so it looks the most like chemistry, which is exactly the trap. A kinetic or chromogenic reader produces an electronic data file with a standard curve, spike recovery, and sample values. That file is the raw data and must be retained and reviewed, not just the printed summary. Integrity points:

- The reader software audit trail, electronic file, and standard curve must be retained, not discarded after the analyst copies a single endotoxin value onto a form.
- Standard curve acceptance, positive product control (spike) recovery, and replicate criteria must be evaluated from the actual data, with failing runs visible, not suppressed.
- Reprocessing or re-analysis of a BET run carries the same expectations as reprocessing a chromatogram: a recorded reason and a retained original. See [chromatography data system integrity](/articles/chromatography-data-system-integrity) for the analogous controls, and [bioburden and endotoxin testing](/articles/bioburden-and-endotoxin-testing) for the assays.

### A cross-test reconciliation example

| Source | Count |
|---|---|
| Sterility tests started (per setup log, one campaign) | 12 |
| Sterility results reported in LIMS | 12 |
| Documented positives | 1 |
| Documented invalidations under USP 71 criteria | 0 |
| Retests reported | 0 |
| Accounted for | 12 |
| Unexplained gap | 0 |

If "tests started" were 13 and "results reported" were 12, with one positive nowhere to be found, that single-row gap is the kind of finding that escalates an inspection into a data integrity action. Build this reconciliation, and the EM-plan-to-executed-record reconciliation, into the [internal audit program](/articles/internal-audit-program) so you find the gap on your own terms.

### Acceptance criteria

Test-record integrity is sound when, for each test type, the executed records reconcile against the plan (EM) or the setup log (sterility, bioburden), every instrument-generated file (BET reader, imaging counter, incubator chart) is retained and reviewed alongside the paper, incubation and environmental conditions are documented against the plates that produced the counts, and no started test, scheduled sample, or observed positive can vanish without a documented, justified path.

---

## Reading Windows and Incubation Control

### Why it matters

Micro plates and tubes have defined incubation conditions and reading windows for a scientific reason: read too early and you under-count slow growers, read too late and colonies overgrow and merge into uncountable confluence. The reading window is a method parameter, and reading outside it invalidates the result or, worse, produces a wrong result that looks valid. Integrity requires proving each plate was incubated for the right time at the right temperature and read inside the window, and that nothing was nudged to make a count come out a particular way.

### What must be controlled and recorded

- **Incubation temperature and duration**, per the method, with the incubator's actual conditions documented (chart, datalogger, or qualified monitoring) for the plates in question. A single setpoint label is not evidence; the record of actual temperature over the incubation period is.
- **The reading window**: the earliest and latest acceptable read times, defined in the method, and the actual read time recorded so window compliance is checkable.
- **Incubator qualification and mapping**, so the recorded setpoint reflects the temperature the plates actually saw, including any cold or hot spots. See [temperature mapping and qualification](/articles/temperature-mapping-qualification).
- **Door-open and excursion logs**, so an incubation interruption is documented rather than silent.

### How to operationalize it, step by step

1. Define the incubation conditions and the reading window in the method, with explicit earliest and latest read times.
2. Record the in and out times for each plate or batch of plates, plus the incubator used.
3. Hold the incubator's actual temperature record (datalogger or qualified monitoring) for the incubation period, and link it to the plates.
4. At the read, record the actual read time and confirm it falls inside the window before accepting the count.
5. If a plate is read outside the window or experienced an incubation excursion, handle it through [deviation management](/articles/deviation-management); do not report it as a clean result.

### Acceptance criteria

Reading-window control is sound when the method defines incubation conditions and an explicit reading window, every plate's in/out and read times are recorded and fall within the window (or are deviated if not), the incubator's actual temperature over the incubation period is documented and within range and linked to the plates, the incubator is qualified and mapped, and any out-of-window read or incubation excursion is captured as a deviation rather than reported as valid.

### Worked example

A method specifies incubation at 30 to 35 C for 3 to 5 days, with the plate read on day 3 to 5. A TAMC plate goes in at 09:00 on Monday, and the datalogger shows 31.8 to 33.1 C across the period. The analyst reads it Thursday at 10:30 (day 3, inside the window) and records the read time. Window compliance is provable from the record. Contrast the indefensible case: the same plate read the following Tuesday (day 8), counted as "5 CFU", with no read-time recorded. The colonies may have overgrown into confluence days earlier; the "5" is meaningless, and the missing read time is the tell.

### Roles

Analyst: record in/out and read times, confirm window compliance at the read. Lab supervisor: incubators qualified, mapped, and monitored; window defined in the method. Metrology/engineering: incubator qualification, mapping, and datalogger calibration (see [calibration and metrology program](/articles/calibration-and-metrology-program)). QA: the method, deviation handling for out-of-window reads.

### Common 483-type mistakes

- Plates read days outside the defined window, counted, and reported as valid.
- No recorded read time, so window compliance cannot be shown.
- Incubation temperature evidenced only by a setpoint label, with no record of actual conditions over the period.
- Incubator not mapped, so cold spots mean some plates never saw the required temperature.
- Incubation excursions (door left open, power loss) not documented and not assessed for impact.

---

## The Paper-and-Instrument Hybrid Trap

### Why it matters

This is the heart of micro data integrity and the single most cited structural weakness. Almost every micro result is a hybrid: a human observation on a paper form, plus one or more instrument records (incubator chart, BET reader file, imaging counter file, particle counter file) sitting alongside. The integrity of the result depends on three things holding: the paper, the instrument data, and the link between them. The trap is that the rich instrument record is generated, then ignored, while a single transcribed number on paper becomes the de facto record, and the electronic original is never reviewed.

The general hybrid problem is covered in [hybrid paper and electronic records](/articles/hybrid-paper-electronic-records). Micro is the worst case because the hybrid is unavoidable and the instrument data is often the only objective evidence in an otherwise human record.

### Where the seam breaks

- **The electronic original is abandoned after transcription.** A BET reader produces a full data file; the analyst writes one endotoxin value onto a form; the form is reviewed; the reader file is never looked at again. The audit trail that mattered (the one in the reader software, showing reprocessing or a suppressed failing run) was never reviewed.
- **Transcription with no verified check.** A number copied from an instrument display to paper with no second-person confirmation against the source is an unverified transcription, and transcription is where digits transpose.
- **Orphaned instrument data.** The reader, imager, or particle counter logged runs that never appear in any reported result, the micro equivalent of testing into compliance.
- **No link between the paper and the file.** The form says "endotoxin 0.05 EU/mL" but nothing ties it to a specific reader run, so the reported number cannot be traced back to its source data.
- **Instrument audit trails never reviewed.** The reader or imaging counter has an audit trail; nobody reviews it; reprocessing or deletions go unseen. See [audit trail design and review](/articles/audit-trail-design-and-review) and [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).

### How to keep the seam intact, step by step

1. Designate, in the method, which record is the original for each result. For BET, the reader's electronic file is the original; the paper value is a secondary copy. For a manual colony count, the contemporaneous paper count (plus any image) is the original.
2. Retain every instrument-generated file as raw data, for as long as the result it supports, in validated storage. Do not discard the reader file once a value is transcribed.
3. Require a verified second-person check at every instrument-to-paper hand-off, confirming the transcribed value against the source display or file.
4. Bind the paper record to the instrument run: record the run ID, file name, or sequence so the number can be traced to its source.
5. Review the instrument audit trail (reader, imager, counter) as part of the result review, not just the headline number, looking for reprocessing, deletions, or suppressed runs.
6. Reconcile instrument runs against reported results to catch orphans, the same injection-to-result logic used in chromatography, applied to BET and imaging runs.

### Acceptance criteria

The hybrid is defensible when the original record for each result is defined and retained, every instrument file is kept as raw data in validated storage for the result's full life, each instrument-to-paper transcription has a verified second-person check, the paper record is traceably linked to its source run, the instrument audit trail is reviewed as part of result review, and instrument-run-to-result reconciliation closes to zero unexplained items.

### Worked example

A BET run reads four product samples. The reader file shows the standard curve passed, spike recovery was acceptable, and one of four samples initially failed, then was reprocessed with a documented reason and passed on re-evaluation within criteria. The defensible record: the reader file is retained, the reviewer opens it and confirms the reprocess reason and the passing criteria, the reviewer checks the audit trail, and the form carries the run ID and a verified transcription of each value. The indefensible record: the analyst writes the four final values onto a form, the form is reviewed, the reader file is deleted at month end to save disk space, and nobody ever sees that one sample was reprocessed. The reported numbers might be perfectly correct, but the record cannot prove it, and an inspector who finds the deleted-file pattern has a finding regardless.

### Roles

Analyst: retain the instrument file, link it to the paper, record the run ID. Reviewer (second person): verify the transcription against the source and review the instrument audit trail, not just the number. System owner/IT: validated, backed-up storage for instrument files; instrument audit trail enabled and immutable. QA: the method defining the original record and the hand-off controls; inspection defense of the hybrid.

### Common 483-type mistakes

- Instrument data file discarded after a single value is transcribed to paper.
- BET or imaging reader audit trail never reviewed; reprocessing and deletions invisible.
- Transcription from instrument to paper with no verified second-person check.
- No traceable link from the paper value to the instrument run that produced it.
- Reader runs that never reached a reported result, never reconciled.

---

## Roles and Responsibilities Across the Micro Lab

Micro integrity fails where ownership is unclear. Map it explicitly, usually in the [data governance framework](/articles/data-governance-framework) and the lab procedures.

| Role | Owns |
|---|---|
| Analyst (data originator) | Contemporaneous recording at observation; documented counting method; retaining instrument files; honest readings and recorded reasons for any change |
| Second-person verifier | Independent recount against the plate (not the paper) before discard; verified transcription checks at instrument-to-paper hand-offs |
| Lab supervisor / process owner | A workflow that makes contemporaneous and verify-before-discard physically possible; qualified, independent verifiers; window and incubation control |
| QA | The methods and procedures; review of excursions, positives, and discrepancies; audit-trail review of micro instruments; inspection defense |
| Metrology / engineering | Incubator qualification and mapping; datalogger and instrument calibration; NTP-synchronized instrument clocks |
| IT / system owner | Validated storage for images and instrument files; immutable instrument audit trails; backup and restore proven |
| Validation | Verifying instrument audit-trail configuration and imaging-counter behavior during qualification and after change |

The load-bearing segregation in micro: the person who makes the observation cannot be the only person who confirms it, and the person who can administer an instrument's data store must not be able to silently delete reader files or audit entries. Where small-lab staffing makes full segregation hard, document a compensating control, for example an independent reviewer for any self-verified work and a deleted-files report that QA reviews.

---

## What an Inspector Does in the Micro Lab

Inspectors approach micro with the same instinct they bring to chemistry: find daylight between what the official record says and what the evidence shows. The method is adapted to the hybrid:

1. **They reconcile the EM plan against executed records**, looking for scheduled samples that were never taken or never recorded.
2. **They reconcile sterility tests started against results reported**, hunting for a started-but-vanished test or a positive that became a clean retest.
3. **They open the instrument records directly** (BET reader, imaging counter, particle counter), not the transcribed paper, and read the audit trail for reprocessing, deletions, and suppressed runs.
4. **They check incubation evidence** against the plates: actual temperature over the period, in/out times, read times against the defined window.
5. **They probe the second-person verification**: when was it done, against the plate or against the paper, and was the verifier independent.
6. **They look for orphaned instrument runs** that never reached a result.
7. **They interview an analyst about a specific plate, count, or BET run** they have already spotted, asking for the contemporaneous record and the instrument file on the spot.

The thread is constant: every gap between the paper and the instrument, every observation that cannot be tied to a contemporaneous record, every started test without a result is a potential finding. The [FDA inspection readiness](/articles/fda-inspection-readiness) and [data integrity self-audit checklist](/articles/di-self-audit-checklist) articles cover preparing for exactly this.

---

## Interview Questions and How to Answer Them

Expect these in a micro, QC, or data integrity interview, and from inspectors.

**"Why is data integrity harder in micro than in chemistry?"** The primary measurement is a destructive, time-bound human observation with no re-runnable raw file, the result is human judgment rather than instrument output, there is long latency between the work and the final read, and almost every result is an unavoidable hybrid of paper and instrument data. The contemporaneous record is often the only record.

**"What makes a manual colony count defensible?"** A documented counting method so the number is reproducible, contemporaneous recording by the counter, and an independent second-person verification against the plate (not the written number) before the plate is discarded, with discrepancies beyond tolerance resolved and documented against the physical plate.

**"A second analyst signed to verify a count yesterday, but the plate was already discarded. What is the problem?"** That is verification of a number against nothing. It confirms the second person can read the first person's writing, not that the count was right. Verification must happen against the plate or a retained image while the evidence still exists.

**"What is the reading window, and why does it matter for integrity?"** The defined earliest and latest acceptable read time for an incubated plate. Read too early and slow growers are undercounted; too late and colonies overgrow into confluence. A count read outside the window is invalid or wrong, so the actual read time must be recorded and shown to fall inside the window, with the incubator's actual temperature documented for the period.

**"Walk me through the hybrid trap in BET."** The reader produces a full electronic file (standard curve, spike recovery, sample values, audit trail). The trap is transcribing one value to paper, reviewing the paper, and ignoring or deleting the reader file. The file is the raw data and must be retained and reviewed, the transcription must be verified, the paper must link to the run, and the reader audit trail must be reviewed for reprocessing and deletions.

**"How would you detect testing into compliance in micro?"** Reconcile sterility tests started against results reported and observed positives against documented outcomes; reconcile the EM plan against executed records; reconcile instrument runs (BET, imaging) against reported results. Any started test, scheduled sample, observed positive, or instrument run that does not map to a documented outcome is an orphan to run down.

**"What is the original record for a manual colony count, and for a BET result?"** For a manual count, the contemporaneous paper count plus any retained image. For BET, the reader's electronic file. Defining which record is the original, and retaining it for the result's full life, is the first step in keeping the hybrid defensible.

**"How do you prove a plate was incubated correctly?"** The incubator is qualified and mapped, the actual temperature over the incubation period is recorded by a datalogger or qualified monitoring and linked to the plates, the in/out and read times are recorded, and any incubation excursion is captured as a deviation rather than ignored.

---

## The Durable Principle

A micro result rests on an observation that cannot be repeated and a record that is half human and half machine. The integrity question is always the same: can you prove, from the record alone, what was actually observed, by whom, at the correct time and incubation, confirmed independently before the evidence was gone, with every instrument file that supports the result retained and reviewed. If you can answer that for any EM plate, any bioburden count, any sterility observation, and any endotoxin run, the lab is defensible.

The recurring failure is treating the paper number as the record and the instrument file as a printout to be discarded, or treating the second-person check as a signature rather than an independent look at the plate. Both are seams, and inspectors go straight for the seam. Build the record around the original (the contemporaneous count, the image, the reader file), keep the seam between paper and instrument intact, and verify against the physical evidence while it still exists. The plate will not be there tomorrow to prove you right.
