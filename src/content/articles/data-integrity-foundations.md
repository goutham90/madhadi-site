---
title: "Data Integrity in Pharma: What It Is and Why It Keeps Failing"
description: "A ground-level introduction to data integrity across pharma, biotech, devices, and life sciences: what it actually means, why regulators treat it as quality-critical, and what failure costs."
pubDate: 2025-07-11
tags: ["data-integrity", "FDA", "GxP", "foundations", "ALCOA+"]
pillar: "data-integrity"
tier: "Beginner"
---

Data integrity is the guarantee that a regulated record is complete, accurate, and has not been altered without authorization. That sounds simple enough. The reason the life sciences industry has spent more than a decade and hundreds of warning letters struggling with it is that "guarantee" is harder to engineer than it appears.

This is the foundational article for the data integrity pillar on this site. If you are new to GxP quality, start here. If you are an intermediate or advanced reader, the [data lifecycle and metadata](/articles/data-lifecycle-and-metadata) and [audit trail design and review](/articles/audit-trail-design-and-review) articles go deeper on the mechanics. The principles here apply across the regulated world: a finished-drug manufacturer, a biologics maker running cell-based assays, a medical device firm logging design verification results, and a contract lab running stability all answer to the same expectations.

---

## What Data Integrity Actually Means

In a regulated context, data integrity does not mean "the data is right." It means the data can be *proven* to be right, and that the system generating, storing, and managing it does not create opportunities for it to be wrong without detection.

The distinction matters. A spreadsheet of test results might contain perfectly correct numbers. But if any analyst could overwrite a cell with no record of who changed what, when, or why, the spreadsheet has no integrity even when every value happens to be accurate. Integrity is a property of the system and the controls around the record, not just the values inside it.

The formal definition from the [FDA December 2018 guidance "Data Integrity and Compliance With Drug CGMP"](https://www.fda.gov/media/119267/download) is:

> "Data integrity refers to the completeness, consistency, and accuracy of data. Complete, consistent, and accurate data should be attributable, legible, contemporaneously recorded, original or a true copy, and accurate (ALCOA)."

The [MHRA "GXP Data Integrity Guidance and Definitions" (March 2018)](https://www.gov.uk/government/publications/gxp-data-integrity-guidance-and-definitions) adds that data integrity "requires that data is complete, consistent and accurate throughout the data lifecycle."

Both definitions point at the same thing: data needs to be trustworthy at every stage of its life, from initial generation on an instrument, through review and approval, to long-term archival. A record that was accurate when generated but was then modified, selectively retained, or stored in a way that makes it inaccessible has lost its integrity.

### Data versus metadata

One concept trips up nearly everyone new to the field. The "data" is not only the result. It is the result plus its metadata, the contextual information that gives the result meaning.

Take a single chromatography injection. The peak area is data. But so are the integration parameters, the method that ran, the column serial number, the instrument timestamp, the analyst identity, and the audit trail showing whether anyone reprocessed the run. Strip the metadata away and you have a number with no provenance. Regulators expect the complete record, which means data plus the metadata required to reconstruct the activity. The MHRA guidance is explicit that metadata is an integral part of the original record.

The same logic holds outside the lab. On a device production line, a torque reading without its tool ID, operator, and timestamp is not a usable record. In a clinical database, a lab value without its collection time, units, and the edit history of any query is incomplete. Metadata is not optional context. It is part of the data.

### Static versus dynamic records

The 2018 FDA guidance draws a line between static and dynamic records, and the line carries practical weight.

A static record is fixed, like a paper printout or a PDF. A dynamic record allows interaction, such as a chromatography data file that can be reprocessed, reintegrated, or replayed, or a spectrum that can be re-baselined. The guidance makes clear that printing a chromatogram to PDF and discarding the underlying electronic file does not preserve the dynamic record. If the original was dynamic, the complete electronic record, including the audit trail and the ability to reprocess, must be retained. Treating a flattened printout as the official copy of a dynamic record is one of the most frequently cited findings in laboratory inspections. The article on [static, dynamic records and true copies](/articles/static-dynamic-records-true-copies) works through the edge cases.

---

## Why Regulators Care

The short answer: because the data is the evidence.

When a regulator evaluates whether a product is safe and effective, when a quality team decides to release a batch, when a stability study supports a shelf-life claim, when a device firm closes a design verification, all of those decisions rest on data. If the data cannot be trusted, the decision cannot be trusted. And the consequence of a wrong quality decision in this industry is not a customer complaint. It is a patient safety event.

This is why the regulatory framework ties data integrity directly to GMP compliance. Under 21 CFR Part 211, the finished pharmaceutical GMP regulation, requirements for record accuracy appear in multiple sections:

- **21 CFR 211.68**: automatic, mechanical, and electronic equipment, including controls so that only authorized personnel can alter records, plus backup of data
- **21 CFR 211.180**: general record retention and accessibility requirements
- **21 CFR 211.188**: batch production and control records
- **21 CFR 211.194**: laboratory record completeness, including the requirement to keep complete data derived from all tests

These are not "data integrity" requirements in name, but they are the statutory basis for enforcement when data is found to be unreliable. When an inspector finds that audit trails were disabled or that failing test results were deleted, the 483 observation is typically written against 211.68 or 211.194. The phrase "data integrity" rarely appears in the underlying regulation. The obligation is enforced through the existing record and recordkeeping requirements.

The same enforcement hooks exist in the device world. Under the harmonized Quality Management System Regulation (QMSR) at 21 CFR Part 820, effective February 2, 2026, FDA incorporates ISO 13485:2016 by reference, and record control requirements now sit at 21 CFR 820.35 (control of records). The former Quality System Regulation sections 21 CFR 820.180 (records, general requirements) and 21 CFR 820.181 (device master record) were removed and reserved as part of that amendment, so a current citation for device record controls is 820.35, not 820.180/820.181. The broader good clinical practice framework anchors trial data reliability through ICH E6. See [medical device quality system (QMSR)](/articles/medical-device-quality-system-qmsr) and [ICH E6 good clinical practice](/articles/ich-e6-good-clinical-practice).

The EU framework reaches the same place through [EudraLex Volume 4, Annex 11](https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf), which governs computerized systems in EU GMP, working alongside the [PIC/S PI 041-1 guidance](https://picscheme.org/en/publications) on good practices for data management and integrity. For the relationship between US and EU electronic records rules, see [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11).

---

## The Regulatory Framework in Brief

For someone entering this field, the regulatory environment can be confusing. Here is the map.

**United States**
- FDA 21 CFR Part 211, GMP for finished pharmaceuticals
- FDA 21 CFR Part 11, electronic records and electronic signatures (final rule, 1997)
- FDA 21 CFR Part 820, device quality system (QMSR amendments effective February 2026)
- FDA guidance, "Data Integrity and Compliance With Drug CGMP" (December 2018)

**European Union**
- EudraLex Volume 4, Annex 11, computerized systems
- EudraLex Volume 4, Annex 15, qualification and validation
- EMA questions and answers on data integrity (maintained on the EMA website)

**United Kingdom**
- MHRA "GXP Data Integrity Guidance and Definitions" (March 2018), the clearest and most explicit national guidance available

**International**
- WHO Technical Report Series 996, Annex 5 (2016), guidance on good data and record management practices
- PIC/S PI 041-1, harmonized guidance across PIC/S participating authorities
- ICH Q10, Pharmaceutical Quality System, which addresses quality culture and management responsibility for data reliability
- ICH E6 (R2/R3), good clinical practice, which carries data integrity expectations into trials

These documents do not all say exactly the same thing in exactly the same words, but they converge on the same requirements. An ALCOA+ framework applied consistently will satisfy all of them.

A useful way to read this stack: the regulations (Part 11, Part 211, Part 820, Annex 11) are binding law. The guidances (the FDA 2018 document, MHRA 2018, PIC/S PI 041-1, WHO TRS 996) explain how inspectors interpret and apply that law. Guidance documents are not themselves legally binding in the way a regulation is, but ignoring them is a fast route to a finding, because they describe exactly what an inspector will look for.

| Document | Region | Type | Primary focus |
|---|---|---|---|
| 21 CFR Part 211 | US | Regulation | GMP recordkeeping and laboratory controls |
| 21 CFR Part 11 | US | Regulation | Electronic records and signatures |
| 21 CFR Part 820 (QMSR) | US | Regulation | Device quality system records |
| FDA DI guidance 2018 | US | Guidance | How CGMP applies to data integrity |
| Annex 11 | EU | Regulation (GMP annex) | Computerized systems |
| MHRA DI guidance 2018 | UK | Guidance | Data integrity definitions and expectations |
| PIC/S PI 041-1 | International | Guidance | Data management and integrity, harmonized |
| WHO TRS 996 Annex 5 | International | Guidance | Good data and record management practices |

For the deeper governance view of how an organization ties all of this together, see the [data governance framework](/articles/data-governance-framework) article.

---

## The Cost of Getting It Wrong

This is where it is worth being concrete, because "regulatory enforcement action" does not quite capture what actually happens to a company that gets a serious data integrity finding.

**FDA 483 observations** are the inspector's written findings at the end of a site inspection, issued on Form FDA 483. A data integrity observation typically triggers an expected response, and FDA evaluates whether the proposed corrective actions are adequate. The site is generally expected to respond in writing, and FDA looks favorably on responses submitted within 15 business days because it allows the response to be considered before the agency decides on next steps. See [FDA 483 response strategy](/articles/fda-483-response-strategy).

**Warning Letters** are issued when FDA concludes that a 483 response was inadequate, or when the findings were serious enough to warrant escalation. A warning letter is a public document. It appears on FDA's website and is searchable. Warning letters request a response within 15 business days and trigger ongoing oversight, including potential follow-up inspections.

**Import Alerts**, in particular Import Alert 66-40 for drugs that appear to be manufactured under conditions that violate CGMP, can lead to detention without physical examination of a facility's products at the US border. For a company whose primary market is the US, this can halt revenue from affected products.

**Consent Decrees** are the most severe outcome: a court-enforced agreement between the government and a company that subjects manufacturing operations to oversight, often requiring remediation at the company's expense with an independent expert monitoring compliance. Some companies have operated under consent decrees for years.

Beyond the regulatory ladder, there are commercial consequences. A warning letter affects supply agreements, partner trust, and investor confidence. A clinical hold tied to data integrity concerns can stall a development program. A device firm can face a recall or an injunction. The cost of a serious remediation program, including assessments, system upgrades, retraining, and external consultants, routinely runs into the tens of millions of dollars for a large multi-site organization.

None of this is hypothetical. The [FDA warning letter database](https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters) contains many letters citing data integrity as the primary basis for enforcement, spanning every category of regulated manufacturer. For the recurring themes across those letters, see [FDA warning letter patterns](/articles/fda-warning-letters-patterns), and for how to respond when you receive one, see [483 and warning letter response](/articles/483-warning-letter-response).

### The enforcement escalation path

It helps to picture enforcement as a ladder rather than a single event. A finding usually starts low and climbs only if the response fails.

1. Inspection observation on Form FDA 483
2. Establishment Inspection Report and internal FDA classification (NAI, VAI, or OAI)
3. Warning letter, if classified Official Action Indicated and the response is judged inadequate
4. Import alert and detention for foreign sites
5. Consent decree, injunction, or seizure for the most serious or repeat cases

The single most important lesson from the case literature is that the response matters as much as the original finding. Many warning letters criticize not the initial problem but the company's inadequate corrective action: a remediation scoped too narrowly, a root cause that blamed an individual instead of the system, or commitments that were never verified as effective. See [CAPA effectiveness verification](/articles/capa-effectiveness-verification).

---

## The ALCOA+ Framework

The practical standard for what makes data trustworthy is captured in the ALCOA+ acronym. It stands for **Attributable, Legible, Contemporaneous, Original, Accurate**, plus **Complete, Consistent, Enduring, Available**.

Every data integrity requirement in every regulatory guidance maps back to one or more of these principles. The full treatment, including what each principle means, where programs most commonly fail, and how to assess compliance, is in the [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) article. A short orientation:

| Principle | Plain-language test | What it looks like done right |
|---|---|---|
| Attributable | Who created or changed this record, and when? | Unique login, no shared accounts, signed entries |
| Legible | Can it be read and understood for its full retention period? | Permanent ink or durable format, no obscured corrections |
| Contemporaneous | Was it recorded at the time the activity happened? | Entry timestamped to the event, no after-the-fact transcription |
| Original | Is this the source record or a verified true copy? | Source electronic file retained, certified copies controlled |
| Accurate | Does it correctly reflect what actually occurred? | No errors, no unjustified edits, second-check where required |
| Complete | Is all the data here, including repeats and metadata? | All injections, all trials, all audit trail retained |
| Consistent | Is the sequence and timestamping coherent? | Chronological order, synchronized clocks, no gaps |
| Enduring | Will it survive on durable media for as long as required? | Backed up, archived, migration plan for legacy formats |
| Available | Can it be retrieved when an inspector or reviewer asks? | Retrievable within a reasonable time, readable on demand |

The key insight about ALCOA+: it is not a checklist to sign off once. It is a description of what a trustworthy record needs to be. A record that is accurate but not attributable is not trustworthy, because you know the number but not who produced it or when. A record that is attributable and accurate but not enduring fails the day the system is decommissioned and the data becomes unreadable. All nine elements are necessary. None alone is sufficient.

A practical point that interviewers probe: the "+" elements are not a different or weaker tier. PIC/S and MHRA treat the full set as one standard. Saying "we cover ALCOA but we are working on the plus" is a red flag, because Complete and Available are exactly where suppression and inaccessibility findings live.

---

## A Worked Example: One Failing Result

Abstractions get clearer with a concrete case. Consider how a single failing laboratory result can turn into a data integrity finding, step by step.

An analyst runs an assay on a finished product sample and the result is out of specification. The analyst suspects an injection problem. Without documenting the original injection, they reprocess the sequence with a new integration method, get a passing result, and report only the passing value. The audit trail in the chromatography data system records the reprocessing, but no one reviews it, and the [out-of-specification investigation](/articles/oos-investigation-process) is never opened.

Walk that through ALCOA+ and the failures stack up. The record is no longer **complete**, because the original failing injection was suppressed. It is not **accurate**, because the reported value does not reflect what the first analysis showed. It is arguably not **original**, because a reprocessed result replaced the source data without justification. And the failure of audit trail review means the system control that should have caught all of this never engaged.

An inspector who pulls the audit trail, and inspectors routinely do, will see the reprocessing event with no documented rationale and no OOS investigation. That single sequence can support a 483 observation under 21 CFR 211.194 for incomplete laboratory records, and if it appears systemic, it escalates. The technical failure (no audit trail review), the procedural failure (no OOS triggered), and the cultural failure (pressure to report a passing result) all show up in one event. This is why mature programs treat audit trail review as a frontline control, not a paperwork afterthought.

### What a clean version of the same record looks like

The same situation, handled correctly, leaves an unbroken trail:

| Step | Action | Record created |
|---|---|---|
| 1 | First injection returns OOS | Original result retained, flagged OOS |
| 2 | Analyst notifies supervisor, does not delete anything | Notification logged |
| 3 | OOS investigation opened per SOP | Investigation number assigned, hypothesis documented |
| 4 | If a lab error is confirmed (for example a known injection fault) | Documented rationale, second-analyst review |
| 5 | Re-test executed under the investigation, not in place of step 1 | New result linked to the investigation, original preserved |
| 6 | Audit trail reviewed at result review | Reviewer signature, no unexplained reprocessing |
| 7 | Disposition decision references both results | Complete, attributable, accurate record |

The difference is not the chemistry. It is whether the original result survives and whether the decision to re-test is documented and independently checked. See [good documentation practices](/articles/good-documentation-practices) for the recording discipline that prevents the first misstep, and [batch disposition decisions](/articles/batch-disposition-decisions) for how this data feeds release.

---

## Roles and Responsibilities

Data integrity fails when everyone assumes someone else owns it. A workable program assigns it explicitly. The exact titles vary by organization, but the responsibilities below have to land somewhere.

| Role | Core data integrity responsibility |
|---|---|
| Data originator (analyst, operator, coordinator) | Generate records contemporaneously and accurately, never share credentials, never alter or delete without documentation |
| Reviewer / second person | Check the result *and* the audit trail and metadata, not just the final number |
| System owner | Maintain the validated state, control configuration, ensure backups and audit trail are enabled |
| System administrator | Manage access; must be independent of the people who generate the data on that system |
| QA | Own the data integrity policy, audit trail review expectations, OOS and deviation oversight, and inspection defense |
| IT / infrastructure | Provide time synchronization, backup and restore, disaster recovery, and access infrastructure |
| Management (ICH Q10) | Provide resources, set the quality culture, include data integrity in management review with real metrics |

The single most important segregation of duty: the person who generates data must not also be the administrator who can delete it or disable its audit trail. When an inspector sees analysts with local admin rights on their own chromatography system, that alone can support a finding, because the control that should make falsification detectable has been handed to the people with the motive to falsify. See [GxP roles and responsibilities](/articles/gxp-roles-responsibilities) and [management review (ICH Q10)](/articles/management-review-q10).

---

## Where Data Integrity Programs Most Commonly Fail

After years of watching both well-run programs and failed ones, the failure modes cluster into a few categories. These are not company-specific observations. They are the patterns that appear across the warning letter database and in published inspection literature.

**Technical gaps.** Systems configured with audit trails disabled or only partially enabled. Shared user accounts that destroy attributability because every action is logged as a generic "admin" or "lab user." Data stored in proprietary formats with no migration plan, so the records become unreadable when software is retired. Instrument clocks not synchronized to a reliable time source, which creates apparent backdating and breaks the contemporaneous principle. Administrator rights handed to the same analysts who generate the data, so the people producing results can also delete them.

**Process gaps.** Documentation completed after the fact rather than contemporaneously, often on uncontrolled scrap paper later transcribed into the official record. OOS procedures that allow a result to be invalidated without an adequate investigation. No defined procedure for who reviews audit trails, how often, and against what criteria. "Testing into compliance," where samples are run repeatedly until a passing result appears and only the pass is reported.

**Governance gaps.** No inventory of GxP systems and the data each one generates, so the organization cannot say what data it even holds. No data lifecycle policy defining retention periods and archival standards. No assigned ownership for data integrity at the system or site level, which means when something goes wrong, no one is accountable. No data criticality and risk ranking, so high-impact systems get the same thin oversight as a spreadsheet of office supplies. See [data criticality and data risk](/articles/data-criticality-and-data-risk).

**Culture gaps.** An environment where staff feel pressure to produce passing results, creating incentives to manipulate or selectively report data. Management that treats data integrity as a paperwork exercise rather than an engineering property of the quality system. Fear of reporting honest failures. The link between production pressure and falsification is direct and well documented. For the human side of this, see [quality culture and data integrity failures](/articles/quality-culture-di-failures).

The companies that do this well treat data integrity as a systems property: something built into how instruments are configured, how procedures are designed, and how review is structured, not a documentation layer added after the fact.

### A short catalog of real inspection-finding patterns

These phrasings echo what appears across public warning letters and inspection reports, stated generically:

- Audit trail functionality was disabled or had never been turned on for a GMP system.
- Analysts performed "trial" or "test" injections outside the official sequence and these were not reported.
- A single shared Windows or application login was used by multiple analysts, so no action could be attributed to a person.
- Original electronic data was deleted; only printouts were retained for a dynamic system.
- The system clock could be changed by users, and timestamps did not match the actual sequence of events.
- Backup existed but restore had never been tested, so the data was not demonstrably enduring or available.
- No procedure required review of audit trails, and none had been reviewed.

---

## How to Start Assessing Your Own State

For a practitioner asked to "look at our data integrity," the temptation is to jump straight to fixing audit trails. Resist it. The first useful move is to understand what you have.

**Step 1: Build a system inventory.** List every GxP-relevant system, the data each generates, whether it produces static or dynamic records, who owns it, and where the records are stored. Even a simple inventory exposes surprises, usually a stand-alone instrument with a local hard drive that no one has backed up in years, or a legacy system whose audit trail no one knows how to export. A minimal inventory row:

| System | GxP process | Static/dynamic | Owner | Admin (independent?) | Audit trail on? | Backup tested? | Criticality |
|---|---|---|---|---|---|---|---|
| HPLC data system | Release testing | Dynamic | QC lab mgr | IT (yes) | Yes | Yes | High |
| Balance with printout | In-process weighing | Static print | QC | n/a | n/a | Print retained | Medium |
| Spreadsheet calculation | Result calculation | Dynamic (if formulas live) | QC | shared (no) | No | No | High, fix |

**Step 2: Rank by data criticality and risk.** A laboratory system that releases finished product carries more weight than a spreadsheet tracking office supplies. Score each system on impact (what decision the data drives) and on the likelihood that its current controls could let an undetected error through.

**Step 3: Run a structured gap assessment** comparing current state against ALCOA+ and the applicable regulations, prioritizing by the risk ranking. The methodology is covered in [data integrity gap assessment methodology](/articles/di-gap-assessment-methodology) and the broader [data integrity program architecture](/articles/di-program-architecture) articles, with a practical checklist in the [data integrity self-audit checklist](/articles/di-self-audit-checklist).

**Step 4: Remediate by risk, verify effectiveness.** Close the highest-risk gaps first (shared accounts, disabled audit trails, untested backups), and verify that each fix actually holds. See [data integrity remediation program](/articles/di-remediation-program).

**Acceptance criteria for "we have a handle on this":** there is a complete and current system inventory; every high-criticality system has unique user accounts, an enabled audit trail, an independent administrator, and a tested restore; a documented procedure defines who reviews audit trails and how often, with evidence those reviews happen; and data integrity appears in management review with metrics that are read, not just displayed.

For senior and program-level readers, the harder work is structural rather than technical. The questions that separate a durable program from a fragile one are about ownership and incentives: Is there a named owner for data integrity who is independent of production pressure? Does the quality system require periodic audit trail review with documented evidence? Are system administrators separated from data originators? Is data integrity included in management review with real metrics, not a green status box? A program that answers yes to those will survive an inspection. A program that has clean audit trails but no governance behind them is one staffing change away from a finding.

---

## Interview-Ready: Questions You Will Be Asked

Data integrity comes up in almost every GxP quality interview, from analyst to director. Here is how to answer the common ones with substance.

**"Define data integrity in one sentence."**
The assurance that data is complete, consistent, and accurate throughout its lifecycle, recorded so it is attributable, legible, contemporaneous, original or a true copy, and accurate (ALCOA+), with controls that make any undetected change impossible to hide. Good answers stress that it is a property of the system and controls, not just correct values.

**"What is the difference between data and metadata? Give an example."**
Data is the result; metadata is the context that makes the result meaningful and reconstructable. For a chromatographic peak, the area is data; the method, integration parameters, instrument ID, timestamp, analyst, and audit trail are metadata. The complete record is both. Outside the lab, name a device or clinical example to show breadth.

**"Static versus dynamic records, and why does it matter?"**
A static record is fixed (a printout, a PDF). A dynamic record can be reprocessed or reinterrogated (a chromatography file, a spectrum). For a dynamic record you must retain the full electronic record, including the audit trail and the ability to reprocess. Printing a chromatogram and deleting the electronic file is a classic finding because it destroys the dynamic record.

**"What is ALCOA+, and which letters do people most often miss?"**
Recite all nine. Then say that Complete and Available trip people up: Complete because failing or repeat results get suppressed, and Available because backed-up data is useless if restore was never tested or the format is obsolete. Avoid implying the "+" is a lesser tier.

**"Which regulations actually carry the obligation?"**
There is no single 'data integrity regulation' in US CGMP. The obligation is enforced through existing record requirements: 21 CFR 211.68, 211.180, 211.188, 211.194 for drugs, 21 CFR Part 11 for electronic records and signatures, Part 820 for devices, Annex 11 in the EU, with the FDA 2018, MHRA 2018, and PIC/S PI 041-1 guidances describing how inspectors apply it.

**"Walk me through a data integrity finding you would expect to see in a lab."**
Use the failing-result example above: undocumented reprocessing, only the passing value reported, no OOS, no audit trail review. Map it to Complete, Accurate, Original, and the missing control. That single example shows you understand the technical, procedural, and cultural layers.

**"How would you assess data integrity at a new site?"**
Inventory first, criticality ranking second, gap assessment against ALCOA+ third, risk-based remediation fourth, effectiveness verification last. Lead with "understand what you have before you fix anything." Interviewers want to hear that you do not start by buying a tool.

**"How do you separate an honest error from falsification?"**
Honest errors are documented and corrected through the quality system (deviations, OOS, corrections that show original-still-legible). Falsification hides or alters. The control that distinguishes them is contemporaneous recording plus audit trail review. The cultural answer matters too: people must feel safe reporting honest failures, or you create the pressure that drives falsification.

For a fuller set, see [GxP quality interview preparation](/articles/gxp-quality-interview-preparation) and the [GxP, CSV, and data integrity glossary](/articles/gxp-csv-data-integrity-glossary).

---

## Practical Tips

- When you find a shared account, do not just create individual logins. Check what was done under the shared account first, because that history may be unattributable and may itself be a finding to disclose and assess.
- "Audit trail enabled" is necessary but not sufficient. Ask whether anyone reviews it, on what cadence, against what criteria, with what evidence. A reviewed audit trail is a control; an unreviewed one is just a log. See [operationalizing audit trail review](/articles/operationalizing-audit-trail-review).
- Test your restore, not just your backup. A backup you have never restored is an assumption, not a control.
- Synchronize system clocks to a reliable time source and remove user ability to change them. Time-stamp problems quietly break Contemporaneous and Consistent across many records at once. See [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).
- Treat spreadsheets used for GMP calculations as systems, not documents. If formulas are live, they are dynamic records and need validation, version control, and protection. See [validating scripts and low-code analytics](/articles/validating-scripts-low-code-analytics).
- Do not lean on vague adjectives like "strong" or "comprehensive" in your remediation commitments. Inspectors want specific, verifiable actions with effectiveness checks, not adjectives.

---

## How This Site Is Organized

If you are new to the field, the recommended reading sequence is:

1. This article, the regulatory basis and the stakes
2. [ALCOA+: The Framework Behind Every Data Integrity Requirement](/articles/alcoa-plus-deep-dive), the nine principles in depth
3. [The Data Lifecycle and Metadata](/articles/data-lifecycle-and-metadata), where data can go wrong across its full life
4. [Audit Trail Design and Review](/articles/audit-trail-design-and-review), the mechanics of the most commonly cited finding type

For deeper coverage, the article on [GxP computerized systems operations](/articles/gxp-computerized-systems-operations) covers how these requirements apply to software in daily use, and [FDA inspection readiness](/articles/fda-inspection-readiness) covers what an inspector actually does when they sit down to review your data. To understand who is accountable for what, see [GxP roles and responsibilities](/articles/gxp-roles-responsibilities). For how data integrity expectations extend into clinical and device contexts, see [clinical QA and GCP data integrity](/articles/clinical-qa-gcp-data-integrity) and [device software cybersecurity for SaMD](/articles/device-software-cybersecurity-samd).

Data integrity is not a single control you install and forget. It is a property you have to keep proving, every batch, every study, every inspection. The programs that endure are the ones that build it into the system from the start rather than bolting it on after a finding forces the issue.
