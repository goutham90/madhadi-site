---
title: "Data Integrity in Pharma: What It Is and Why It Keeps Failing"
description: "A ground-level introduction to pharmaceutical data integrity: what it actually means, why regulators treat it as a quality-critical issue, and what the real cost of failure looks like."
pubDate: 2025-07-11
tags: ["data-integrity", "FDA", "GxP", "foundations", "ALCOA+"]
pillar: "data-integrity"
tier: "Beginner"
---

Data integrity is the guarantee that a pharmaceutical record is complete, accurate, and has not been altered without authorization. That sounds simple enough. The reason the pharmaceutical industry has spent more than a decade and hundreds of warning letters struggling with it is that "guarantee" is harder to engineer than it appears.

This is the foundational article for the data integrity pillar on this site. If you are new to GxP quality, start here. If you are an intermediate or advanced reader, the [data lifecycle and metadata](/articles/data-lifecycle-and-metadata) and [audit trail design and review](/articles/audit-trail-design-and-review) articles go deeper on the mechanics.

---

## What Data Integrity Actually Means

In a regulated pharmaceutical context, data integrity does not mean "the data is right." It means the data can be *proven* to be right, and that the system generating, storing, and managing it does not create opportunities for it to be wrong without detection.

The distinction matters. A spreadsheet of test results might contain perfectly correct numbers. But if any analyst could overwrite a cell with no record of who changed what, when, or why, the spreadsheet has no integrity even when every value happens to be accurate. Integrity is a property of the system and the controls around the record, not just the values inside it.

The formal definition from the [FDA's December 2018 data integrity guidance](https://www.fda.gov/media/119267/download) is:

> "Data integrity refers to the completeness, consistency, and accuracy of data. Complete, consistent, and accurate data should be attributable, legible, contemporaneously recorded, original or a true copy, and accurate (ALCOA)."

The [MHRA's March 2018 GxP Data Integrity Guidance](https://www.gov.uk/government/publications/gxp-data-integrity-guidance-and-definitions) adds that data integrity "requires that data is complete, consistent and accurate throughout the data lifecycle."

Both definitions point at the same thing: data needs to be trustworthy at every stage of its life, from initial generation on an instrument, through review and approval, to long-term archival. A record that was accurate when generated but was then modified, selectively retained, or stored in a way that makes it inaccessible has lost its integrity.

### Data versus metadata

One concept trips up nearly everyone new to the field. The "data" is not only the result. It is the result plus its metadata, the contextual information that gives the result meaning.

Take a single chromatography injection. The peak area is data. But so are the integration parameters, the method that ran, the column serial number, the instrument timestamp, the analyst identity, and the audit trail showing whether anyone reprocessed the run. Strip the metadata away and you have a number with no provenance. Regulators expect the complete record, which means data and the metadata required to reconstruct the activity. The MHRA guidance is explicit that metadata is an integral part of the original record.

### Static versus dynamic records

The 2018 FDA guidance draws a line between static and dynamic records, and the line carries practical weight.

A static record is fixed, like a paper printout or a PDF. A dynamic record allows interaction, such as a chromatography data file that can be reprocessed, reintegrated, or replayed. The guidance makes clear that printing a chromatogram to PDF and discarding the underlying electronic file does not preserve the dynamic record. If the original was dynamic, the complete electronic record, including the audit trail and the ability to reprocess, must be retained. Treating a flattened printout as the official copy of a dynamic record is one of the most frequently cited findings in laboratory inspections.

---

## Why Regulators Care

The short answer: because the data is the evidence.

When a regulator evaluates whether a drug is safe and effective, when a quality team decides to release a batch, when a stability study supports a shelf-life claim, all of those decisions rest on data. If the data cannot be trusted, the decision cannot be trusted. And the consequence of a wrong quality decision in this industry is not a customer complaint. It is a patient safety event.

This is why the FDA's regulatory framework ties data integrity directly to GMP compliance. Under 21 CFR Part 211, the finished pharmaceutical GMP regulation, requirements for record accuracy appear in multiple sections:

- **21 CFR 211.68**: requirements for automatic, mechanical, and electronic equipment, including controls so that only authorized personnel can alter records
- **21 CFR 211.180**: general record retention and accessibility requirements
- **21 CFR 211.188**: batch production and control records
- **21 CFR 211.194**: laboratory record completeness, including the requirement to keep complete data derived from all tests

These are not data integrity requirements in name, but they are the statutory basis for enforcement when data is found to be unreliable. When an inspector finds that audit trails were disabled or that failing test results were deleted, the 483 observation is typically written against 211.68 or 211.194. The phrase "data integrity" rarely appears in the underlying regulation; the obligation is enforced through the existing record and recordkeeping requirements.

The EU framework reaches the same place through [EudraLex Volume 4, Annex 11](https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf), which governs computerized systems in EU GMP, working alongside the [PIC/S PI 041-1 guidance](https://picscheme.org/en/publications) on good practices for data management and integrity. For the relationship between US and EU electronic records rules, see the article on [21 CFR Part 11 and EU Annex 11](/articles/21-cfr-part-11-eu-annex-11).

---

## The Regulatory Framework in Brief

For someone entering this field, the regulatory environment can be confusing. Here is the map.

**United States**
- FDA 21 CFR Part 211, GMP for finished pharmaceuticals
- FDA 21 CFR Part 11, electronic records and electronic signatures (final rule 1997)
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

These documents do not all say exactly the same thing in exactly the same words, but they converge on the same requirements. An ALCOA+ framework applied consistently will satisfy all of them.

A useful way to read this stack: the regulations (Part 11, Part 211, Annex 11) are binding law. The guidances (the FDA 2018 document, MHRA 2018, PIC/S PI 041-1, WHO TRS 996) explain how inspectors interpret and apply that law. Guidance documents are not themselves legally binding in the way a regulation is, but ignoring them is a fast route to a finding, because they describe exactly what an inspector will look for.

| Document | Region | Type | Primary focus |
|---|---|---|---|
| 21 CFR Part 211 | US | Regulation | GMP recordkeeping and laboratory controls |
| 21 CFR Part 11 | US | Regulation | Electronic records and signatures |
| FDA DI guidance 2018 | US | Guidance | How CGMP applies to data integrity |
| Annex 11 | EU | Regulation (GMP annex) | Computerized systems |
| MHRA DI guidance 2018 | UK | Guidance | Data integrity definitions and expectations |
| PIC/S PI 041-1 | International | Guidance | Data management and integrity, harmonized |
| WHO TRS 996 Annex 5 | International | Guidance | Good data and record management practices |

For the deeper governance view of how an organization ties all of this together, see the [data governance framework](/articles/data-governance-framework) article.

---

## The Cost of Getting It Wrong

This is where it is worth being concrete, because "regulatory enforcement action" does not quite capture what actually happens to a company that gets a serious data integrity finding.

**FDA 483 observations** are the inspector's written findings at the end of a site inspection, issued on Form FDA 483. A data integrity observation typically triggers an expected response, and FDA evaluates whether the proposed corrective actions are adequate. The site is generally expected to respond in writing, and FDA looks favorably on responses submitted within 15 business days because it allows the response to be considered before the agency decides on next steps.

**Warning Letters** are issued when FDA concludes that a 483 response was inadequate, or when the findings were serious enough to warrant escalation. A warning letter is a public document; it appears on FDA's website and is searchable. Warning letters request a response within 15 business days and trigger ongoing oversight, including potential follow-up inspections.

**Import Alerts**, in particular Import Alert 66-40 for drugs that appear to be manufactured under conditions that violate CGMP, can lead to detention without physical examination of a facility's products at the US border. For a company whose primary market is the US, this can halt revenue from affected products.

**Consent Decrees** are the most severe outcome: a court-enforced agreement between the government and a company that subjects manufacturing operations to oversight, often requiring remediation at the company's expense with an independent expert monitoring compliance. Some pharmaceutical companies have operated under consent decrees for years.

Beyond the regulatory ladder, there are commercial consequences. A warning letter affects supply agreements, partner trust, and investor confidence. A clinical hold tied to data integrity concerns can stall a development program. The cost of a serious remediation program, including assessments, system upgrades, retraining, and external consultants, routinely runs into the tens of millions of dollars for a large multi-site organization.

None of this is hypothetical. The [FDA warning letter database](https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters) contains many letters citing data integrity as the primary basis for enforcement, spanning every category of pharmaceutical manufacturer. For the recurring themes across those letters, see [FDA warning letter patterns](/articles/fda-warning-letters-patterns), and for how to respond when you receive one, see [483 and warning letter response](/articles/483-warning-letter-response).

### The enforcement escalation path

It helps to picture enforcement as a ladder rather than a single event. A finding usually starts low and climbs only if the response fails.

1. Inspection observation on Form FDA 483
2. Establishment Inspection Report and internal FDA classification (NAI, VAI, or OAI)
3. Warning letter, if classified Official Action Indicated and the response is judged inadequate
4. Import alert and detention for foreign sites
5. Consent decree, injunction, or seizure for the most serious or repeat cases

The single most important lesson from the case literature is that the response matters as much as the original finding. Many warning letters criticize not the initial problem but the company's inadequate corrective action: a remediation scoped too narrowly, a root cause that blamed an individual instead of the system, or commitments that were never verified as effective.

---

## The ALCOA+ Framework

The practical standard for what makes data trustworthy is captured in the ALCOA+ acronym. It stands for **Attributable, Legible, Contemporaneous, Original, Accurate**, plus **Complete, Consistent, Enduring, Available**.

Every data integrity requirement in every regulatory guidance maps back to one or more of these principles. The full treatment, including what each principle means, where programs most commonly fail, and how to assess compliance, is in the [ALCOA+ breakdown](/articles/alcoa-plus-deep-dive). A short orientation:

| Principle | Plain-language test |
|---|---|
| Attributable | Who created or changed this record, and when? |
| Legible | Can it be read and understood for its full retention period? |
| Contemporaneous | Was it recorded at the time the activity happened? |
| Original | Is this the source record or a verified true copy? |
| Accurate | Does it correctly reflect what actually occurred? |
| Complete | Is all the data here, including repeats and the metadata? |
| Consistent | Is the sequence and timestamping coherent? |
| Enduring | Will it survive on durable media for as long as required? |
| Available | Can it be retrieved when an inspector or reviewer asks? |

The key insight about ALCOA+: it is not a checklist to sign off once. It is a description of what a trustworthy record needs to be. A record that is accurate but not attributable is not trustworthy, because you know the number but not who produced it or when. A record that is attributable and accurate but not enduring fails the day the system is decommissioned and the data becomes unreadable. All nine elements are necessary. None alone is sufficient.

---

## A Worked Example: One Failing Result

Abstractions get clearer with a concrete case. Consider how a single failing laboratory result can turn into a data integrity finding, step by step.

An analyst runs an assay on a finished product sample and the result is out of specification. The analyst suspects an injection problem. Without documenting the original injection, they reprocess the sequence with a new integration method, get a passing result, and report only the passing value. The audit trail in the chromatography data system records the reprocessing, but no one reviews it, and the [out-of-specification investigation](/articles/oos-investigation-process) is never opened.

Walk that through ALCOA+ and the failures stack up. The record is no longer **complete**, because the original failing injection was suppressed. It is not **accurate**, because the reported value does not reflect what the first analysis showed. It is arguably not **original**, because a reprocessed result replaced the source data without justification. And the failure of audit trail review means the system control that should have caught all of this never engaged.

An inspector who pulls the audit trail, and inspectors routinely do, will see the reprocessing event with no documented rationale and no OOS investigation. That single sequence can support a 483 observation under 21 CFR 211.194 for incomplete laboratory records, and if it appears systemic, it escalates. The technical failure (no audit trail review), the procedural failure (no OOS triggered), and the cultural failure (pressure to report a passing result) all show up in one event. This is why mature programs treat audit trail review as a frontline control, not a paperwork afterthought. See [good documentation practices](/articles/good-documentation-practices) for the recording discipline that prevents the first misstep.

---

## Where Data Integrity Programs Most Commonly Fail

After years of watching both well-run programs and failed ones, the failure modes cluster into a few categories. These are not company-specific observations; they are the patterns that appear across the warning letter database and in published inspection literature.

**Technical gaps.** Systems configured with audit trails disabled or only partially enabled. Shared user accounts that destroy attributability because every action is logged as a generic "admin" or "lab user." Data stored in proprietary formats with no migration plan, so the records become unreadable when software is retired. Instrument clocks not synchronized to a reliable time source, which creates apparent backdating and breaks the contemporaneous principle. Administrator rights handed to the same analysts who generate the data, so the people producing results can also delete them.

**Process gaps.** Documentation completed after the fact rather than contemporaneously, often on uncontrolled scrap paper later transcribed into the official record. OOS procedures that allow a result to be invalidated without an adequate investigation. No defined procedure for who reviews audit trails, how often, and against what criteria.

**Governance gaps.** No inventory of GxP systems and the data each one generates, so the organization cannot say what data it even holds. No data lifecycle policy defining retention periods and archival standards. No assigned ownership for data integrity at the system or site level, which means when something goes wrong, no one is accountable.

**Culture gaps.** An environment where analysts feel pressure to produce passing results, creating incentives to manipulate or selectively report data. Management that treats data integrity as a paperwork exercise rather than an engineering property of the quality system. The link between production pressure and falsification is direct and well documented; for the human side of this, see [quality culture and data integrity failures](/articles/quality-culture-di-failures).

The companies that do this well treat data integrity as a systems property: something built into how instruments are configured, how procedures are designed, and how review is structured, not a documentation layer added after the fact.

---

## How to Start Assessing Your Own State

For a practitioner asked to "look at our data integrity," the temptation is to jump straight to fixing audit trails. Resist it. The first useful move is to understand what you have.

Build a system inventory. List every GxP-relevant system, the data each generates, whether it produces static or dynamic records, who owns it, and where the records are stored. Even a simple inventory exposes surprises, usually a stand-alone instrument with a local hard drive that no one has backed up in years, or a legacy system whose audit trail no one knows how to export.

From there, a structured gap assessment compares the current state against ALCOA+ and the applicable regulations, prioritizing by risk. A laboratory system that releases finished product carries more weight than a spreadsheet tracking office supplies. The methodology for doing this well is covered in the [data integrity gap assessment methodology](/articles/di-gap-assessment-methodology) and the broader [data integrity program architecture](/articles/di-program-architecture) articles, with a practical checklist in the [data integrity self-audit checklist](/articles/di-self-audit-checklist).

For senior and program-level readers, the harder work is structural rather than technical. The questions that separate a durable program from a fragile one are about ownership and incentives: Is there a named owner for data integrity who is independent of production pressure? Does the quality system require periodic audit trail review with documented evidence? Are system administrators separated from data originators? Is data integrity included in management review with real metrics, not a green status box? A program that answers yes to those will survive an inspection. A program that has clean audit trails but no governance behind them is one staffing change away from a finding.

---

## How This Site Is Organized

If you are new to the field, the recommended reading sequence is:

1. This article, the regulatory basis and the stakes
2. [ALCOA+: The Framework Behind Every Data Integrity Requirement](/articles/alcoa-plus-deep-dive), the nine principles in depth
3. [The Data Lifecycle and Metadata](/articles/data-lifecycle-and-metadata), where data can go wrong across its full life
4. [Audit Trail Design and Review](/articles/audit-trail-design-and-review), the mechanics of the most commonly cited finding type

For deeper coverage, the article on [GxP computerized systems operations](/articles/gxp-computerized-systems-operations) covers how these requirements apply to software in daily use, and [FDA inspection readiness](/articles/fda-inspection-readiness) covers what an inspector actually does when they sit down to review your data. To understand who is accountable for what, see [GxP roles and responsibilities](/articles/gxp-roles-responsibilities).

Data integrity is not a single control you install and forget. It is a property you have to keep proving, every batch, every study, every inspection. The programs that endure are the ones that build it into the system from the start rather than bolting it on after a finding forces the issue.
