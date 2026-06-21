---
title: "Data Integrity Across the Supply Chain: Distribution Records, IoT Loggers, and 3PL Oversight"
description: "How to apply ALCOA+ to GDP distribution records, temperature loggers, and outsourced distributors, with concrete procedures, sample records, and the inspection findings that trip teams up."
pubDate: 2026-06-20
tags: ["data integrity", "gdp", "cold chain", "supply chain", "3pl", "iot loggers", "audit trail", "alcoa"]
pillar: "supply-chain-gdp"
tier: "Advanced"
---

Manufacturing data integrity gets most of the attention because that is where batches are made and released. The supply chain is where they survive or spoil. Once a batch leaves the warehouse, the record that proves it stayed in spec, was handled by qualified parties, and reached the patient unaltered is the only evidence anyone has. That record lives across distribution systems you may not own, temperature loggers built by third parties, and 3PLs whose quality systems you inherit but do not control. This page covers how to make those records trustworthy: what regulators require, what the records must contain, how to qualify and govern the loggers and the partners, and the failure patterns that show up in inspections.

The discipline is the same ALCOA+ thinking used on the plant floor, but the threat model is different. On the floor you worry about an analyst overwriting a result. In distribution you worry about a logger that was never calibrated, a temperature excursion quietly deleted before anyone saw it, a 3PL warehouse management system with shared logins, and a chain of custody that has a six hour hole nobody can explain.

---

## Why supply-chain data integrity is its own discipline

### The regulatory basis

Distribution sits under Good Distribution Practice, not GMP, and the records expectations come from a different stack of guidance.

> EU Guidelines on Good Distribution Practice of medicinal products for human use (2013/C 343/01), Chapter 4 (Documentation): "Good documentation constitutes an essential part of the quality system. Written documentation should prevent errors from spoken communication and permits the tracking of relevant operations during the distribution of medicinal products."

The same 2013/C 343/01 guideline, Chapter 9 (Transportation), requires that the required storage conditions for medicinal products be maintained during transportation within defined limits, and Chapter 7 (Outsourced Activities) sets the contract giver and contract acceptor expectations that govern 3PL oversight.

In the US, distribution of finished drug product is shaped by:

- 21 CFR 211, the cGMP regulations, which still reach warehousing and distribution operations a manufacturer controls. 21 CFR 211.142 (warehousing procedures) and 211.150 (distribution procedures) require written procedures and records that let you trace and recall.
- 21 CFR 203 (Prescription Drug Marketing Act regulations) for sample and pedigree handling.
- The Drug Supply Chain Security Act (DSCSA, Title II of the Drug Quality and Security Act of 2013), which governs serialization, transaction information, and traceability. The interoperable, electronic, package-level tracing requirements reached full effect in 2024 after stabilization periods. See [DSCSA serialization and track and trace](/articles/dscsa-serialization-track-and-trace) for the detail.
- USP General Chapter <1079>, Good Storage and Distribution Practices for Drug Products, and <1118>, Monitoring Devices, Time, Temperature, and Humidity, which give the technical basis for monitoring device selection and use.

Cross-cutting data integrity guidance still applies to all of this:

- MHRA "GXP Data Integrity Guidance and Definitions" (Revision 1, March 2018), explicitly written to cover GxP, not just GMP, so GDP records are in scope.
- WHO Technical Report Series No. 996, Annex 5 (Guidance on good data and record management practices, 2016).
- PIC/S PI 041-1, "Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments" (2021). The title says GDP on purpose.
- 21 CFR Part 11 and EU Annex 11 where any of these records are electronic. See [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11).

### The quality rationale

A temperature logger record is a GxP record. If it can be edited without a trace, deleted by a courier, or read off a device that has never been calibrated, then every disposition decision that relied on it is unsupported. The risk is not abstract. Biologics, vaccines, and cell and gene therapy products lose potency or stability when they drift out of range, and the patient sees no warning. The record is the control. If the record is not attributable, contemporaneous, original, and accurate, you cannot prove the product is fit, and you cannot prove it is not, which means you are guessing on release and recall.

For the ALCOA+ framing applied generally, read [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and [data integrity foundations](/articles/data-integrity-foundations). This page is the supply-chain application of those principles.

---

## The records that have to be trustworthy

Before you can govern integrity you have to know which records carry it. In distribution the load-bearing records are these.

| Record | What it proves | Primary owner | Typical system |
| --- | --- | --- | --- |
| Goods receipt / inbound inspection | Right product, quantity, lot, condition on arrival | Receiving / warehouse QA | WMS, ERP |
| Storage condition monitoring | Product held in range while in the warehouse | Warehouse / facilities | BMS, mapping system |
| Pick / pack / dispatch record | What shipped, to whom, when, by whom | Warehouse operations | WMS |
| Shipping container qualification | The packout protects within the transit profile | Cold-chain SME | Qualification protocol set |
| Transit temperature record | Product stayed in range door to door | Logger + reviewer | IoT logger + portal |
| Chain of custody | Continuous accountable handling, no gaps | Logistics / QA | TMS, courier records |
| DSCSA transaction data (TI/TS) | Lawful trading partner, traceable lineage | Serialization team | EPCIS repository |
| Excursion investigation | What happened, impact, disposition | QA | Deviation system |
| Distribution / shipping list | Where every unit went, for recall reach | QA / regulatory | ERP, WMS |

Each of these has to satisfy ALCOA+. The hard ones, where teams actually get cited, are the transit temperature record, the chain of custody, and anything that lives in a 3PL's system you do not administer.

---

## IoT temperature loggers: making the device a trustworthy source

A logger is an instrument generating GxP data. Treat it the way you treat any analytical instrument: qualify it, calibrate it, control its configuration, and protect its record. The convenient form factor does not lower the bar.

### What good looks like for the device

**Calibration and metrology.** Every logger that produces a record used for a quality decision must be calibrated against a standard traceable to a national metrology institute (for example NIST in the US, NPL in the UK). This is the same expectation as any [calibration and metrology program](/articles/calibration-and-metrology-program). Practical points:

- Calibration must be traceable, documented, and current at the time of use, not just at purchase.
- Single-use disposable loggers are usually supplied with a manufacturer calibration certificate per lot. You qualify the supplier and verify the certificate, you do not recalibrate each unit. Keep the certificate as part of the batch shipping record.
- Reusable loggers need a recalibration interval (commonly annual, set by risk and by the manufacturer's drift data) and a control to quarantine and pull units that are out of interval.
- Define accuracy and resolution requirements up front. A logger reading to plus or minus 0.5 C is fine for a 2-8 C product. It is not fine for a controlled-room-temperature stability claim that hinges on tenths of a degree, and it is marginal for an ultra-cold product.

**Sampling interval and clock.** The configured logging interval and the device clock are both data-integrity-relevant settings.

- Set the interval so you can detect an excursion and prove its duration. A 30 minute interval can hide a 25 minute door-open spike. Choose interval against the product's known thermal mass and the excursion limits in the stability data.
- The device clock must be correct and its synchronization controlled. A logger with a drifted or unset clock produces timestamps that are not contemporaneous in any meaningful way. See [time stamps and system clock control](/articles/time-stamps-and-system-clock-control). For loggers that sync to a portal, the time source and time zone handling are part of validation.

**Audit trail and record protection.** This is where cheap loggers fail GxP.

- The recorded data and its metadata (start time, configuration, alarms, the read-out event) must be protected from alteration. A PDF that any user can regenerate with a different start time is not an original record.
- The logger or its platform must record who started it, who stopped it, who downloaded it, and any configuration change, with time stamps. That is the [audit trail design and review](/articles/audit-trail-design-and-review) expectation applied to a device.
- "Stop on read" and resettable loggers are a known weak point. If a courier can stop the logger and restart it, the gap is invisible unless the audit trail captures the stop. Configure so stops are recorded and so the original profile cannot be truncated silently.

**The logger platform is a computerized system.** Most modern loggers report to a cloud portal. That portal stores the original record, applies alarm logic, and lets users acknowledge and annotate excursions. It is a GxP computerized system and needs validation proportional to risk, supplier assessment, access control, audit trail, and a data retention and retrieval plan. If it is a vendor-hosted SaaS, your validation leans on [cloud and SaaS validation](/articles/cloud-saas-validation) and [software supplier assessment (CSA)](/articles/software-supplier-assessment-csa). Do not accept "it is just a website" as a reason to skip this.

### How to qualify a logger: step by step

1. **Write user requirements.** Range, accuracy, resolution, logging interval, memory depth for the longest planned transit, IP/ingress rating, battery life margin, alarm thresholds, read-out format, audit trail, time control, and data retention. Tie each requirement to the product profiles you ship. See [user requirements and traceability](/articles/user-requirements-and-traceability).
2. **Assess the supplier.** Calibration traceability, ISO 17025 accreditation of their calibration lab if claimed, lot-level certificate practices, change notification, and platform security if cloud-connected. See [supplier and vendor qualification](/articles/supplier-vendor-qualification).
3. **Qualify the device against requirements.** For reusable hardware run IQ/OQ style verification: confirm calibration certificate, verify accuracy at the relevant set points against a reference standard, verify alarm triggering, verify the audit trail captures start/stop/download, verify timestamp correctness across the time zones you operate in.
4. **Validate the platform.** Risk-based, covering data flow from device to portal, audit trail, access control, alarm acknowledgment workflow, report generation, and retrieval of a complete original record years later.
5. **Define and qualify the configuration.** Lock the standard configuration (interval, thresholds, mode). Treat configuration as a controlled item under [change control for validated systems](/articles/change-control-validated-systems).
6. **Write the SOP** for activation, placement in the shipper, read-out, review, and escalation, with roles named. See [how to write an SOP](/articles/how-to-write-an-sop).

### Acceptance criteria for logger data integrity

- Calibration is current and traceable for every unit producing a release-relevant record.
- The original record (full profile plus metadata) is retained, retrievable, and protected from undetectable change.
- Start, stop, download, and configuration events are captured in an audit trail.
- Timestamps are correct and time zone handling is unambiguous.
- The logging interval is justified against the product's excursion sensitivity.
- An excursion cannot be acknowledged or closed without an attributable, time-stamped user action and a recorded rationale.

### Worked example: a transit logger read-out under scrutiny

A 2-8 C biologic ships with a single-use electronic logger. On arrival, receiving reads it out to the portal. The portal shows:

| Field | Value |
| --- | --- |
| Logger serial | TL-2291847 |
| Calibration cert (lot) | CAL-2026-0412, traceable to NIST, valid through 2026-12 |
| Start (configured) | 2026-06-10 06:00 EDT, by warehouse op J. Rivera |
| Logging interval | 10 min |
| Min / max recorded | 3.1 C / 9.4 C |
| Alarm threshold | greater than 8 C for more than 30 min cumulative |
| Excursion segments | 2 segments above 8 C, 20 min and 50 min |
| Read-out | 2026-06-12 14:32 EDT, by receiver M. Osei |
| Mean kinetic temperature | 5.9 C |

The 50 minute segment breaches the cumulative-over-30-min rule, so the portal raises an alarm and the unit is quarantined pending QA disposition. Two things make this record trustworthy: the calibration certificate is current and traceable, and every action (start, read-out, the alarm) is attributable and time-stamped. If the start time had been blank, or the read-out had been done by a generic "warehouse" login, or the calibration certificate were missing, the same numbers would be uninterpretable. The data-integrity work is what lets QA make a defensible call instead of a guess.

---

## Distribution records: GDP documentation done right

### What the GDP record set must contain

EU GDP Chapter 4 and 21 CFR 211.142 and 211.150 between them require that you can show, for any unit, where it came from, how it was held, where it went, and that procedures were followed. The minimum content set:

- **Receipt records:** date, product name and strength, quantity, lot/batch number, expiry, supplier, condition on receipt, the receiving signature, and any temperature device read on arrival.
- **Storage records:** location, storage condition class, and continuous monitoring data for the storage area (the warehouse BMS or independent monitors), with alarm history.
- **Dispatch records:** customer/consignee, ship-to address, date and time, quantity, lot, the picker/packer identity, carrier, and the logger serial placed in the shipment.
- **Returns and recalls:** condition assessment, disposition decision, and traceability back to original distribution.
- **Transaction data under DSCSA:** transaction information, transaction history where still applicable, and transaction statement, in the required electronic format.

Every entry has to be ALCOA+ compliant. For paper, that is [good documentation practices](/articles/good-documentation-practices) discipline: contemporaneous, signed, dated, no obliteration. For electronic, it is Part 11 and Annex 11 controls on the WMS, ERP, and TMS.

### How to govern the records

1. **Map every distribution record to its system and its owner.** A simple data-flow map per record type, showing where the record originates, where the master copy lives, what audit trail exists, and who can edit it.
2. **Classify by criticality.** A transit temperature record and a recall distribution list are high criticality. A note about pallet wrap is low. Focus controls where impact is highest. See [data criticality and data risk](/articles/data-criticality-and-data-risk).
3. **Lock down edit rights and audit trails** on the WMS/ERP/TMS. Any field that affects lot, quantity, ship-to, or condition status must be audit-trailed and role-restricted.
4. **Define record retention** consistent with product shelf life plus the regulatory minimum (commonly one year past expiry as a floor under GDP, longer for many products and jurisdictions). Validate that archived records are retrievable and readable for the full period, including from any retired logger platform.
5. **Build the review cadence:** routine [audit trail review](/articles/operationalizing-audit-trail-review) on the systems holding critical distribution records, focused on edits to ship-to, lot, and condition fields, and on excursion acknowledgments.

### Acceptance criteria

- Any unit can be traced from receipt to consignee from records alone, within minutes, for a recall.
- No critical distribution field can be changed without an attributable, time-stamped, reason-captured audit trail entry.
- Storage monitoring is continuous, alarmed, and reviewed, with mapped placement of sensors justified by [temperature mapping qualification](/articles/temperature-mapping-qualification).
- Records are retained for the full required period and are retrievable in human-readable form.

---

## Chain of custody and the gaps that kill it

Chain of custody is the continuous, accountable record of who held the product at each handoff. In a clean shipment it is invisible. In an investigation it is everything, because a gap in custody plus an excursion equals an unbounded risk you cannot close.

### Building a defensible chain of custody

- **Handoff records at every transfer.** Manufacturer to 3PL, 3PL to carrier, carrier to distributor, distributor to dispensing site. Each handoff should capture date, time, identity of the releasing and receiving party, quantity, and condition.
- **No anonymous custody.** "Picked up by courier" with no individual or scannable accountability is the classic hole. Require driver identity or a scan event that ties to a person or a controlled device.
- **Reconcile time.** The sum of dwell times and transit segments should equal total elapsed time. A six hour difference between "left dock" and "logger restarted" is a custody gap that demands explanation.
- **Tie the logger to the custody record.** The logger serial on the dispatch record and the logger serial read out at receipt must match. A mismatch means you cannot prove the temperature record belongs to this shipment.

### Worked example: spotting a custody gap

| Event | Time (recorded) | Party | Source |
| --- | --- | --- | --- |
| Dispatch scan | 06:05 | Warehouse, J. Rivera | WMS |
| Carrier pickup | 06:40 | Carrier driver, badge 8841 | TMS |
| Hub arrival | 11:10 | Carrier hub | Carrier track |
| Hub departure | 19:55 | Carrier hub | Carrier track |
| Delivery scan | 23:30 | Receiver, M. Osei | WMS |
| Logger profile span | 06:00 to 23:32 | Logger | Portal |

The custody record is continuous and the logger span brackets it, so this chain holds. Now change one line: if the logger profile started at 12:00 instead of 06:00, there is a six hour window with no temperature evidence even though custody looks continuous. That is a data-integrity finding even with a clean-looking custody log, because the condition record has a hole. The lesson: custody continuity and condition continuity are two separate proofs and you need both.

---

## 3PL and outsourced-distribution oversight

Most companies do not own their warehouses or their cold-chain logistics. You outsource the activity, but you cannot outsource the responsibility for the records. EU GDP Chapter 7 puts it plainly.

> EU GDP (2013/C 343/01), Chapter 7: "Any activity covered by the GDP Guidelines that is outsourced should be correctly defined, agreed and controlled in order to avoid misunderstandings which could affect the integrity of the product. There should be a written contract between the contract giver and the contract acceptor which clearly establishes the duties of each party."

This is the same contract-giver discipline as [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements) and [conducting a supplier audit](/articles/conducting-a-supplier-audit), pointed at distribution partners.

### The quality agreement: what to nail down on data integrity

A generic quality agreement is not enough. For 3PL and logistics partners, the agreement must make data-integrity expectations explicit:

- **Record ownership and access.** You must have the right to access, copy, and retain the original distribution and monitoring records, including raw logger data, not just summary reports. Define how and in what format.
- **Audit trail and system controls.** The 3PL's WMS and monitoring systems must have audit trails, individual logins (no shared accounts), and controlled edit rights on critical fields. State this as a requirement, not a hope.
- **Excursion handling.** Who reads loggers, within what time, who decides disposition, and the rule that the 3PL cannot release a quarantined excursion shipment without your QA decision.
- **Notification.** Timeframe for notifying you of excursions, deviations, system failures, and any data-integrity event such as a lost logger or a corrupted record.
- **Right to audit, including data integrity.** Explicit right to audit systems, audit trails, and access controls, on routine and for-cause basis.
- **Subcontracting.** No onward subcontracting of regulated activity without your approval, with flow-down of the same data-integrity terms.
- **Retention and return.** Record retention period and the obligation to return or preserve records on contract exit.

### Qualifying and auditing a 3PL for data integrity

1. **Qualify before use.** Assess the 3PL's GDP license/registration where applicable, quality system, and the integrity controls on the systems that will hold your records. See [supplier and vendor qualification](/articles/supplier-vendor-qualification).
2. **Audit the systems, not just the dock.** A warehouse walkthrough is necessary but not sufficient. Sit at the WMS and the monitoring portal. Pull an audit trail. Ask to see a user list and check for shared logins. Ask how an excursion gets acknowledged and whether the operator can edit or delete an alarm.
3. **Test traceability live.** Pick a random lot and ask them to trace it from receipt to dispatch from records alone. Time it. This is the recall test in miniature.
4. **Probe the loggers.** Where do raw logger files live, who can delete them, who calibrates reusable units, and how do they prove calibration currency. Ask to see a calibration certificate for a logger in use today.
5. **Review excursion handling for independence.** Confirm the 3PL cannot self-disposition a breached shipment. Look at a recent excursion and confirm that your QA actually made the call.
6. **Classify and route findings** through your normal [audit finding classification](/articles/audit-finding-classification) and follow up to CAPA closure.

### Common 3PL data-integrity audit questions and the answers you want

| You ask | A weak answer (finding) | A good answer |
| --- | --- | --- |
| Show me who edited this shipment's ship-to field | "We don't track that" | An audit trail entry with user, time, old value, new value, reason |
| Do operators share the WMS login on night shift | "Yes, it's one shared account" | Individual named accounts with role-based rights |
| Can a courier stop and restart the logger | "Yes, and it just starts a new file" | Stop events are recorded; original profile is preserved and flagged |
| Where is the raw logger data, can I have it | "We only keep the summary PDF" | Raw data retained and exportable, summary derived from it |
| Who decided to release this excursion shipment | "Our shift lead released it" | Your QA dispositioned it; the 3PL only quarantined |

---

## Roles and responsibilities

| Role | Responsibility |
| --- | --- |
| QA (sponsor/MAH) | Owns disposition of excursions, approves quality agreements, owns the recall traceability, classifies findings, final say on data integrity acceptance |
| Cold-chain / distribution SME | Owns shipper qualification, transit profiles, logger requirements, mapping, MKT logic |
| Logger / monitoring system owner | Owns logger qualification, calibration program, platform validation, configuration control |
| Supplier quality / vendor management | Owns 3PL qualification, audit program, quality agreement maintenance |
| Logistics / supply operations | Executes dispatch, custody handoffs, logger activation and read-out per SOP |
| 3PL / contract acceptor | Operates the warehouse and systems, maintains records and audit trails, notifies and quarantines, supports audits |
| Regulatory | Owns DSCSA and licensing compliance, ensures records support submissions and inspections |
| IT / validation | Validates WMS, TMS, monitoring platforms; manages access control and audit-trail configuration |

The split that matters most: the 3PL operates, but QA at the sponsor dispositions. The day that line blurs, you have lost control of the record.

---

## Common mistakes and real inspection-finding patterns

These are the generic patterns regulators cite in GDP and data-integrity findings. No company names, just the shapes.

- **Loggers not calibrated or calibration not traceable.** Devices in use with no current calibration certificate, or certificates with no traceability to a national standard. The temperature data is then unsupported.
- **Editable or regenerable temperature records.** PDF "certificates" that any user can regenerate with different start times, or portals where an excursion alarm can be deleted or acknowledged with no audit trail. Classic Part 11 and ALCOA failure.
- **Shared logins at the 3PL.** Generic warehouse or shift accounts so no action is attributable. This is one of the most common distribution-side data-integrity citations because it breaks Attributable for the entire record set.
- **Logging interval too coarse to catch the excursion.** A 60 minute interval that cannot prove whether a door-open event lasted 10 minutes or 50. Inspectors ask how you know the duration; "we don't" is the finding.
- **Custody gaps treated as paperwork, not risk.** A missing handoff or an unexplained time gap waved through. When paired with an excursion, this becomes an unbounded product-quality risk that should have blocked release.
- **Logger serial mismatch.** The logger read out at receipt does not match the one on the dispatch record, so the temperature record cannot be tied to the shipment. Often never noticed because nobody reconciles serials.
- **3PL self-dispositioning excursions.** The contract acceptor releasing breached shipments without sponsor QA. A governance and data-integrity failure at once.
- **No access to raw logger data.** Only summary reports retained or shared, with the raw record deleted or unavailable. Original is gone, so true-copy and Original principles fail. See [static and dynamic records and true copies](/articles/static-dynamic-records-true-copies).
- **Monitoring sensors placed without mapping.** Sensors in convenient spots rather than worst-case locations identified by [temperature mapping qualification](/articles/temperature-mapping-qualification), so the record looks compliant while a hot or cold zone goes unmeasured.
- **Quality agreement silent on data integrity.** A contract that covers handling and liability but never mentions audit trails, record access, or excursion authority. The gaps surface only during a for-cause audit.
- **Time zone confusion.** Logger timestamps in UTC, WMS in local time, courier system in a third zone, and no one reconciled them, so the apparent excursion duration is wrong. See [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).

---

## Interview-ready: questions and strong answers

**Q: Distribution is GDP, not GMP. Does data integrity even apply?**
Yes, and the guidance says so explicitly. The MHRA 2018 data-integrity guidance and PIC/S PI 041-1 are both written to cover GMP and GDP. A transit temperature record drives a disposition decision, so it carries the same ALCOA+ burden as a batch record. The threat model differs, but the principles are identical.

**Q: A single-use logger comes with a calibration certificate. Is that enough?**
It can be, if the certificate is per lot, traceable to a national standard, current, and retained as part of the shipping record, and if you have qualified the supplier and the certificate practice. You do not recalibrate each disposable unit. You verify the certificate and the supplier. For reusable loggers you need a recalibration interval and a control to pull out-of-interval units.

**Q: How do you decide the logging interval?**
By the product's excursion sensitivity and the stability data, not by convenience. The interval has to be fine enough to detect and measure the shortest excursion that matters and to prove its duration against the cumulative-time alarm rule. For a thermally sensitive biologic that often means 5 to 15 minutes. If an inspector asks how you know an excursion lasted 50 minutes and not 10, the interval is your answer.

**Q: What makes a logger record fail ALCOA+?**
Common failures: not attributable (shared login on the read-out, or no record of who started it), not contemporaneous (drifted or unset clock), not original (only a regenerable summary PDF kept, raw data gone), and not accurate (no current traceable calibration). Any one of those breaks the chain.

**Q: A 3PL operates your warehouse. Who owns data integrity of the distribution records?**
The 3PL operates the systems, but the sponsor or marketing authorization holder owns the responsibility. EU GDP Chapter 7 requires a written contract defining each party's duties. You qualify them, you audit their systems and audit trails, you retain access to the raw records, and your QA dispositions excursions. You cannot outsource the responsibility.

**Q: You find a six hour gap between the dispatch scan and the logger start, but custody looks continuous. What do you do?**
Treat it as a data-integrity and product-quality issue, not a clerical one. There is no condition evidence for six hours, so the product's temperature history is incomplete. Quarantine pending investigation, find out whether the logger was started late or the file was truncated, assess against the stability profile assuming worst case for the unmonitored window, and do not release on the assumption it was fine. Then CAPA the activation SOP.

**Q: How would you audit a 3PL for data integrity specifically?**
Go past the dock. Sit at the WMS and the monitoring portal, pull an audit trail on a critical field, check the user list for shared accounts, run a live traceability test on a random lot, ask where raw logger data lives and who can delete it, ask to see a current calibration certificate, and trace a recent excursion to confirm the sponsor, not the 3PL, dispositioned it.

**Q: How does DSCSA relate to data integrity?**
DSCSA traceability data (transaction information and transaction statement) is itself a regulated electronic record. It has to be accurate, attributable, and tamper-evident across trading partners, and it supports the lawful-trading-partner and recall functions. The interoperable electronic, package-level requirements are in force. Integrity failures there are both a DSCSA violation and a data-integrity violation. See the [DSCSA article](/articles/dscsa-serialization-track-and-trace).

---

## Practical tips

- Put the logger serial on the dispatch record and reconcile it at receipt. This one habit catches mismatches that otherwise invalidate the whole temperature record.
- Standardize time zone on every monitoring system or store everything in UTC with explicit local conversion. Most excursion-duration arguments are really time zone arguments.
- Keep the raw logger file, not just the summary PDF. The summary is a report; the raw data is the original record, and inspectors will ask for it.
- Write the excursion decision rule into the SOP and the alarm logic (for example, cumulative time over threshold), so disposition is a defensible application of a pre-set rule, not an after-the-fact judgment.
- Audit 3PL systems, not just facilities. The dock can be spotless while the WMS runs on shared logins.
- Make mean kinetic temperature a supporting metric, not the only one. MKT smooths an average; it does not by itself prove a hard upper-limit breach was acceptable. Use it alongside the cumulative-time and peak rules from the stability data.
- Test recall traceability quarterly as a drill. The first time you trace a lot end to end should not be during an actual recall. See [recall management and field actions](/articles/recall-management-field-actions).

### Related reading

- [Good distribution practice and cold chain](/articles/good-distribution-practice-cold-chain)
- [Cold chain shipping qualification](/articles/cold-chain-shipping-qualification)
- [Temperature mapping qualification](/articles/temperature-mapping-qualification)
- [DSCSA serialization and track and trace](/articles/dscsa-serialization-track-and-trace)
- [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements)
- [Supplier and vendor qualification](/articles/supplier-vendor-qualification)
- [Audit trail design and review](/articles/audit-trail-design-and-review)
- [ALCOA+ in detail](/articles/alcoa-plus-deep-dive)
- [Data criticality and data risk](/articles/data-criticality-and-data-risk)
- [Recall management and field actions](/articles/recall-management-field-actions)
