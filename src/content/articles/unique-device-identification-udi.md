---
title: "Unique Device Identification: UDI, GUDID, and EUDAMED Compliance"
description: "How UDI works in practice: the DI and PI structure, label and direct-mark rules, GUDID data submission to the FDA, and the EU EUDAMED registration process."
pubDate: 2026-06-20
tags: ["medical-devices", "udi", "gudid", "eudamed", "labeling", "regulatory", "traceability"]
pillar: "medical-devices"
tier: "Intermediate"
---

Unique Device Identification (UDI) is the system that gives every regulated medical device a machine-readable, globally consistent identity. It exists so that a specific device can be traced from manufacture to use, recalled accurately, reported on correctly in adverse-event systems, and verified against a public database. If you work in device quality, regulatory affairs, or labeling, UDI is one of those topics that looks like a barcode problem and turns out to be a data-governance, labeling-control, and submission-management problem all at once.

This article covers the pieces a quality or regulatory professional actually has to get right: how the identifier is built (DI and PI), how it gets onto the label and the device itself, how you populate and submit the U.S. Global Unique Device Identification Database (GUDID), and how the EU's parallel system under the Medical Device Regulation and EUDAMED differs. It is written to the level where you could run the program, defend it in an audit, and answer the interview questions.

---

## What UDI is and why it is required

A UDI is a series of numeric or alphanumeric characters created through a globally accepted device identification and coding standard. It appears on a device label and packaging in two forms at once: a plain-text (human-readable) representation and an automatic identification and data capture (AIDC) representation, which is usually a linear barcode or a 2D data matrix that a scanner can read.

### The U.S. regulatory basis

In the United States the requirement comes from the FDA UDI Rule, published in the Federal Register on 24 September 2013, codified primarily at **21 CFR Part 801 Subpart B** (UDI labeling requirements) and **21 CFR Part 830** (Unique Device Identification, including the database and the accreditation of issuing agencies). The rule amended the labeling regulations and created the database submission obligation.

The driving rationale is patient safety and supply-chain accountability. Before UDI, the same physical device could be described differently across a hospital's purchasing system, the manufacturer's complaint files, the FDA's adverse event database, and a recall notice. There was no single identifier that tied them together. That ambiguity slowed recalls, corrupted adverse-event signal detection, and made it hard to confirm exactly which lot or version of a device was implicated in a problem. UDI fixes the identity problem at the source.

### The EU regulatory basis

In the European Union, UDI obligations sit inside **Regulation (EU) 2017/745**, the Medical Device Regulation (MDR), which applied from 26 May 2021, and **Regulation (EU) 2017/746**, the In Vitro Diagnostic Regulation (IVDR), which applied from 26 May 2022. The UDI provisions are spread through the articles on the UDI system and through Annex VI, which defines the UDI carrier, the database data elements, and the Basic UDI-DI concept. The EU database is **EUDAMED**, the European Database on Medical Devices.

The EU rationale is the same as the FDA's (traceability, vigilance, market surveillance) plus a heavier emphasis on transparency to the public and to procurement, since EUDAMED is intended to publish far more device data than GUDID does.

> The aim of the UDI system is to enhance the identification and traceability of devices. (Paraphrase of the intent stated in MDR Article 27 and the corresponding FDA rule preamble.)

### Why a quality professional cares

UDI touches several quality processes directly. Labeling is a controlled output, so any UDI on a label is subject to design controls, change control, and label reconciliation. The database record is a regulatory submission, so its accuracy is an inspection topic. Recalls and field actions depend on the device identifier resolving correctly. Complaint handling and adverse-event reporting (MDR vigilance, FDA MDR reporting) reference the UDI. If the UDI program is sloppy, the failure surfaces in the worst possible places: a recall that misses units, or an adverse-event report that cannot be matched to a device version.

---

## The structure of a UDI: DI and PI

A UDI has two parts. Understanding the split is the single most important concept on this topic, and interviewers test it constantly.

### Device Identifier (DI)

The **Device Identifier (DI)** is the mandatory, fixed portion. It identifies the specific version or model of a device and the labeler (the company that puts its name on the label). The DI is static: it does not change unit to unit. It is the key that links the physical device to its record in GUDID or EUDAMED. One DI equals one device record in the database.

If you change something that requires a new device record (a new version or model, certain labeling changes, a change that affects identification), you assign a new DI and create a new database record. You do not edit the old one to point at a new device.

### Production Identifier (PI)

The **Production Identifier (PI)** is the variable portion. It conveys the production-specific data that the device labeling itself includes. Depending on what the label carries, the PI can include:

- the lot or batch number
- the serial number
- the manufacturing date
- the expiration date
- for certain devices (for example, human cell and tissue products regulated as devices), a distinct identification code

The PI is conditional. You only include a PI data element in the UDI carrier if that information already appears on the label. If a device has no expiration date on its label, the UDI does not carry an expiration date.

### How DI and PI combine

A complete UDI on a label that carries lot and expiry might look, in encoded form, like this (using GS1 application identifiers as an example):

```
(01)00850000123459(17)271231(10)LOT4477A
```

Broken down:

| Segment | Application Identifier | Meaning | Part |
|---|---|---|---|
| `(01)00850000123459` | 01 | GTIN (the DI) | Device Identifier |
| `(17)271231` | 17 | Expiration date (YYMMDD = 31 Dec 2027) | Production Identifier |
| `(10)LOT4477A` | 10 | Batch / lot number | Production Identifier |

The human-readable text beside or below the barcode would spell the same data out in plain characters so a person can read it without a scanner.

### Issuing agencies and coding standards

You do not invent the UDI format. It comes from an FDA-accredited **issuing agency** that operates a coding system. The three FDA-accredited issuing agencies are:

- **GS1** (the GTIN-based system, the most widely used)
- **HIBCC** (the Health Industry Business Communications Council standard)
- **ICCBBA** (ISBT 128, used mainly for cells, tissues, and blood-related products)

The EU accredits issuing entities for the same purpose. A manufacturer picks one issuing agency and uses its rules to build the DI. The choice is largely a business decision (which system your customers and distributors already scan), but once chosen it drives the carrier format and the GUDID/EUDAMED "Issuing Agency" field.

---

## Labeling and direct marking requirements

### The two carrier forms

Every UDI label must show both:

1. The **AIDC** form: the barcode or 2D data matrix a scanner reads.
2. The **human-readable interpretation (HRI)**: the same data in plain characters.

Both must be present on the label and on the device package. The reason for both is resilience: scanners fail, labels get smudged, and clinicians sometimes need to read the lot by eye. If the AIDC technology is not obvious as machine-readable, the rule expects the carrier to be identifiable as such.

### Direct part marking (DPM)

Certain devices must carry the UDI not just on the label but **on the device itself**, as a permanent direct mark. Under 21 CFR 801.45, direct marking applies to a device intended to be used more than once and intended to be reprocessed (cleaned and reused) between uses, plus a few other categories such as devices that are implantable, stand-alone software, and devices used for an extended period. The logic is that a reusable surgical instrument outlives its packaging, so the identity must live on the steel.

Direct marking can use the full UDI or just the DI portion, and there are exceptions where direct marking would interfere with the device's safety or effectiveness, would not be technologically feasible, or where the device is single-use. Each exception has to be justified and documented, not just assumed.

### Standalone software

Software regulated as a device gets a UDI too. Because there is no physical label, the UDI is provided through a plain-text statement displayed by the software (for example, in an "About" or "Help" screen) and, where the software is distributed on physical media, on that media's label. The DI changes when there is a new version or release that the labeler treats as a new device record. See the related discussion in [device software cybersecurity and SaMD](/articles/device-software-cybersecurity-samd) and [IEC 62304 software lifecycle](/articles/iec-62304-samd-software-lifecycle).

### Dates format

The rule standardizes how dates appear in the human-readable UDI so they are unambiguous across regions: the format **YYYY-MM-DD**. This matters because "03/04/05" is genuinely ambiguous internationally, and a misread expiration date on a sterile implant is a real harm.

### Compliance dates and class-based phase-in

The FDA phased UDI in by device class over several years after the 2013 rule, starting with the highest-risk Class III devices and life-sustaining/life-supporting devices, then Class II, then Class I. By the end of the phase-in, the requirements (label UDI, GUDID submission, and direct marking where applicable) applied across the classes. If you are bringing a new device to market today, you treat UDI as required from launch for your class and do not rely on the historical staggering.

---

## GUDID: building and submitting the U.S. database record

The **Global Unique Device Identification Database (GUDID)** is the FDA's public database that holds a record for every Device Identifier. The public-facing front end is **AccessGUDID**, which lets anyone look up a DI. Submitting accurate GUDID records is a legal obligation of the **labeler** under 21 CFR Part 830 Subpart E.

### Who is the labeler

The **labeler** is the entity whose name appears on the device label, typically the manufacturer, but it can be a specification developer, a relabeler, or a repackager in certain arrangements. The labeler owns the GUDID submission obligation. This is a frequent point of confusion in contract-manufacturing setups, and it is worth nailing down in the quality agreement. See [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements).

### Getting set up

Before you can submit, you complete several one-time steps:

1. **Obtain a DUNS number** for the labeler organization (GUDID uses DUNS to identify the company).
2. **Create a GUDID account** and request a **Labeler DUNS** be associated with it. The FDA verifies the account.
3. **Designate a Regulatory Contact** and a **Coordinator** for the account.
4. **Choose your submission method.** Small portfolios use the **GUDID Web Interface** (manual entry). Larger portfolios use the **HL7 SPL** (Structured Product Labeling) electronic submission through the FDA Electronic Submissions Gateway (ESG), often via a third-party submission service.

### What goes in a GUDID record

A GUDID record has roughly 60 plus data attributes. You do not have to memorize all of them, but you should know the load-bearing ones. The key fields include:

| Field group | Example fields | Notes |
|---|---|---|
| Identifiers | Primary DI, Issuing Agency, Secondary DI(s), package DI(s) | Primary DI is the base-package DI |
| Device info | Brand name, Version or Model, Company name, GMDN/FDA product code | GMDN term classifies the device |
| Production identifier flags | Lot/batch, Serial, Manufacturing date, Expiration date, Donation ID | These are yes/no flags: does the PI carry this? |
| Sterilization | Device sterile (Y/N), Requires sterilization before use, Sterilization method | |
| Clinical/use | Single-use, MRI safety status, Contains latex (natural rubber) | |
| Sizes | Size type, value, unit | Structured size entries |
| Listing | FDA premarket submission number (510(k), PMA, etc.), FDA listing number | Ties UDI to the device's clearance/approval |
| Contacts | Customer contact phone and email | |
| Status / dates | Record status (published/unpublished), DI public version date | |

### The package DI hierarchy

One of the trickier GUDID concepts is **packaging levels**. A device sold as a single unit, then in a box of 10, then in a case of 50, has a **distinct DI at each packaging level**, all linked under the base (primary) DI. Each higher level references the quantity of the next level down. Getting this hierarchy right is essential so that a hospital scanning a case can resolve down to the unit. A common error is submitting only the unit DI and omitting the case and shelf-pack DIs that distributors actually scan.

### Step-by-step submission flow

1. Assign DIs from your issuing agency for each device version and each packaging level.
2. Compile the data attributes for each DI (pull from the device master record, labeling, and regulatory listing).
3. Enter or generate the record (Web Interface or SPL XML).
4. Run it through validation. SPL submissions are validated by the gateway; the Web Interface validates field by field.
5. Move the record from **draft** to **published** ("public" status). A record is not satisfying the requirement until it is published.
6. Confirm the record appears correctly in AccessGUDID.
7. Maintain it: when an attribute changes, update the record within the required timeframe (generally promptly, with the rule specifying update windows after a change).

### Acceptance criteria for a GUDID record

A GUDID record is "done correctly" when:

- The Primary DI matches the DI encoded in the device's actual label barcode and printed in the HRI.
- Brand name, version/model, and company name match the released labeling exactly.
- The PI flags match what the label physically carries (if the label has an expiry, the Expiration Date flag is set).
- The packaging DIs and quantities reflect the real packaging configurations on the market.
- The premarket submission number and FDA product code are correct and consistent with the device's listing.
- The record status is **published** and visible on AccessGUDID.
- There are no orphan records (a DI in the database that no longer corresponds to a marketed configuration) and no missing records (a marketed DI with no GUDID entry).

---

## EU UDI and EUDAMED

The EU system parallels the FDA's but is not identical, and the differences trip people up. If you sell on both sides of the Atlantic you maintain both, and you cannot assume your GUDID work satisfies the EU.

### Basic UDI-DI: the EU's extra layer

The EU adds a concept that the FDA does not have: the **Basic UDI-DI**. This is a higher-level identifier that groups devices sharing the same intended purpose, risk class, and essential design and manufacturing characteristics. It is the "primary key" in EUDAMED and the identifier used in technical documentation, certificates, and the declaration of conformity. It is **not** printed on the label.

So the EU hierarchy is:

- **Basic UDI-DI**: groups a family of related devices (in documentation, not on the label).
- **UDI-DI**: the device identifier for a specific device version/model (equivalent in spirit to the FDA DI; appears on the label).
- **UDI-PI**: the production identifier (lot, serial, etc.).

A clean way to remember it: Basic UDI-DI lives in your paperwork and EUDAMED; UDI-DI lives on the box; UDI-PI varies per production run.

### EUDAMED modules

EUDAMED is built from several modules:

- **Actor registration** (manufacturers, authorized representatives, importers get a Single Registration Number, the **SRN**)
- **UDI/Device registration** (where you register Basic UDI-DI and UDI-DI records)
- **Notified Bodies and certificates**
- **Clinical investigations and performance studies**
- **Vigilance and post-market surveillance**
- **Market surveillance**

The first thing a manufacturer needs is an **SRN**, obtained through actor registration, before it can register devices. The authorized representative inside the EU has defined responsibilities here; see [EU MDR and IVDR overview](/articles/eu-mdr-ivdr-overview) and [device postmarket surveillance under MDR](/articles/device-postmarket-surveillance-mdr).

### The voluntary-then-mandatory status

EUDAMED has been developed and rolled out module by module, and for a long stretch its use was voluntary while modules were finalized and audited. Mandatory use is being phased in module by module as each is declared functional and the corresponding legal trigger applies. Because the exact mandatory dates have shifted during the rollout, the practical rule is: confirm the current status of each EUDAMED module against the European Commission's published timeline before you rely on a date, rather than quoting a date from memory. What does not change is that the underlying MDR/IVDR UDI obligations (assign UDIs, place carriers on labels, keep the data) apply regardless of whether the database module is mandatory yet.

### EU data elements

The EU UDI device record overlaps heavily with GUDID but is not field-for-field identical. Annex VI Part B of the MDR lists the EU UDI database data elements: Basic UDI-DI, UDI-DI, quantity per package, type of UDI-PI, name/model, device class, sterile status, need for sterilization before use, latex content, labeled-as-single-use, and so on. You map your master data to both schemas; you do not assume one export covers both.

### Key EU/US differences to remember

| Topic | United States (GUDID) | European Union (EUDAMED) |
|---|---|---|
| Database | GUDID / AccessGUDID | EUDAMED |
| Grouping identifier | None | Basic UDI-DI |
| Label identifier | DI | UDI-DI |
| Production data | PI | UDI-PI |
| Company registration key | DUNS | SRN (Single Registration Number) |
| Legal basis | 21 CFR 801 Subpart B, 21 CFR 830 | Regulation (EU) 2017/745 (MDR), 2017/746 (IVDR), Annex VI |
| Public lookup | AccessGUDID | EUDAMED public site |

---

## Roles and responsibilities

UDI is a cross-functional program. Assign these clearly, because gaps between functions are where UDI fails.

| Role | Responsibility |
|---|---|
| **Regulatory Affairs** | Owns the regulatory interpretation: device class, applicable carrier and direct-mark rules, EUDAMED/GUDID data mapping, and the link between UDI and the premarket submission/listing. Often holds the GUDID Regulatory Contact role. |
| **Labeling / Packaging Engineering** | Designs the carrier (barcode/data matrix), places AIDC and HRI on artwork, verifies print and scan quality, manages the packaging DI hierarchy. |
| **Quality Assurance** | Controls UDI changes through change control, ensures label-to-record consistency, audits GUDID/EUDAMED accuracy, ties UDI into recall and complaint processes. |
| **Master Data / IT** | Maintains the device master data that feeds the database submissions, runs the SPL/HL7 generation, manages the submission gateway connection. |
| **Manufacturing / Operations** | Applies lot/serial PI data at production, performs direct part marking, runs scan verification on the line. |
| **The Labeler (organization)** | Legally accountable for label compliance and database submission. In contract manufacturing, the quality agreement must state who the labeler is and who executes submissions. |
| **Authorized Representative (EU)** | Verifies the manufacturer's UDI/EUDAMED obligations are met and is registered as an actor. |

A practical control: name a single **UDI program owner** who chairs a small cross-functional team. When the owner role is vacant, records drift out of sync with labels, and that is exactly what an inspector finds.

---

## Common mistakes and inspection-finding patterns

These are the recurring problems regulators and notified bodies cite, described generically.

- **Label and database mismatch.** The DI on the printed barcode does not match the Primary DI in GUDID, or the brand name/version differs between the label and the record. This is the most common and most damaging finding because it breaks the entire traceability premise.

- **Missing or stale database records.** A device version is on the market with no GUDID/EUDAMED record, or a record was never updated after a labeling change. The rule requires timely updates, and "we changed the label but forgot the record" is an easy citation.

- **PI flags inconsistent with the label.** The label shows an expiration date but the Expiration Date flag in the record is "No," or vice versa. Inspectors cross-check the physical label against the record.

- **Incomplete packaging hierarchy.** Only the unit DI is submitted; the case and shelf-pack DIs that distributors scan are missing, so a scan at the case level does not resolve.

- **Direct marking gaps.** A reusable, reprocessed device has no permanent direct mark and no documented justification for an exception. The exception has to be supported, not assumed.

- **Wrong labeler designation.** In a contract-manufacturing or private-label arrangement, the wrong entity submitted (or no one submitted), because the quality agreement never assigned the labeler role.

- **AIDC quality failures.** The barcode prints but fails to scan reliably (poor contrast, wrong magnification, damaged on the curved surface of a device). Print/scan verification was not part of label release.

- **Treating GUDID as enough for the EU.** Assuming the U.S. record covers EUDAMED, missing the Basic UDI-DI layer and the SRN/actor registration entirely.

- **Date format errors.** Human-readable dates not in YYYY-MM-DD, creating ambiguity on the label.

- **No change-control trigger for UDI.** Labeling or version changes do not automatically flag "does this need a new DI and a database update?" so records silently fall out of date. UDI should be a checklist item in [change control for validated systems and labeling](/articles/change-control-validated-systems).

---

## A worked example: assigning UDIs for a device family

Suppose a labeler markets a reusable surgical instrument in three configurations and one single-use accessory. Using GS1 (GTIN-based DIs), the plan might look like this.

| Configuration | Packaging level | DI (GTIN, illustrative) | PI carried | Direct mark? |
|---|---|---|---|---|
| Instrument, standard | Each | 00850000111110 | Serial number | Yes (reusable, reprocessed) |
| Instrument, standard | Box of 5 | 10850000111117 | None at box level | No |
| Instrument, long | Each | 00850000111127 | Serial number | Yes |
| Single-use accessory | Each | 00850000111134 | Lot + expiry | No (single-use exempt) |
| Single-use accessory | Case of 25 | 20850000111138 | None at case level | No |

For each "Each" DI you create a GUDID record. The box and case DIs are linked under their base DIs with quantity-per-package. The reusable instruments carry a permanent direct mark of the DI on the steel because they are reprocessed between uses. The single-use accessory is exempt from direct marking. The accessory label carries a lot and expiry, so its record has the Lot and Expiration Date PI flags set to "Yes"; the instruments carry a serial number, so their records have the Serial Number flag set to "Yes."

For the EU, you would additionally group these under one or more **Basic UDI-DIs** (the two instrument lengths might share a Basic UDI-DI if they are the same family; the single-use accessory, being a different device, gets its own), register the manufacturer for an **SRN**, and register UDI-DI records in EUDAMED.

---

## Interview-ready questions and how to answer them

**Q: What is the difference between the DI and the PI?**
The DI (Device Identifier) is the fixed part that identifies the device version and the labeler; it is the key to the database record and never changes for a given version. The PI (Production Identifier) is the variable part, lot, serial, manufacturing date, expiration date, that changes per production run and is only included when that data appears on the label.

**Q: What regulations govern UDI in the US and the EU?**
In the US, the FDA UDI Rule from 2013, codified at 21 CFR Part 801 Subpart B for labeling and 21 CFR Part 830 for the database and issuing agencies. In the EU, the MDR, Regulation (EU) 2017/745, and the IVDR, Regulation (EU) 2017/746, with the UDI data elements in Annex VI.

**Q: What is GUDID and who submits to it?**
GUDID is the FDA's Global Unique Device Identification Database, holding one record per DI, with a public front end called AccessGUDID. The labeler, the entity whose name is on the label, is legally responsible for submitting and maintaining accurate records, either through the Web Interface for small portfolios or HL7 SPL through the Electronic Submissions Gateway for larger ones.

**Q: What is the Basic UDI-DI and why does the EU have it but the US does not?**
The Basic UDI-DI is the EU's grouping identifier for a family of devices sharing intended purpose, risk class, and design/manufacturing characteristics. It is the primary key in EUDAMED and is referenced in technical documentation, certificates, and the declaration of conformity, but it is not printed on the label. The US uses the DI directly and has no equivalent grouping layer.

**Q: Which devices need direct part marking, and what are the exceptions?**
Under 21 CFR 801.45, devices intended for more than one use and intended to be reprocessed between uses must carry a permanent direct mark, along with certain other categories. Exceptions apply when direct marking would interfere with safety or effectiveness, is not technologically feasible, or the device is single-use, and each exception must be documented and justified.

**Q: A label change is being made to a marketed device. Walk me through the UDI impact.**
First decide whether the change requires a new DI (a new version/model or an identification-affecting change) or whether the existing DI stands. If a new DI is needed, assign it, build the new GUDID/EUDAMED record, and publish it. If the existing DI stands but an attribute changed (say expiry was added), update the database record within the required window so the record matches the new label. Either way, change control must capture the UDI assessment, and label-to-record consistency is verified before release.

**Q: How do you ensure the barcode on the label and the database record stay in sync?**
Make UDI a controlled element: the DI is generated from a managed master data source, the label artwork pulls from that source, label release includes scan/print verification of the AIDC and a human check of the HRI against the record, and change control flags any version or labeling change for a UDI reassessment and database update. Periodic reconciliation between marketed configurations and database records catches drift.

**Q: What goes wrong with packaging levels?**
Submitting only the unit DI and omitting the higher packaging DIs (box, case). Distributors and hospitals scan at the case or shelf-pack level, so each packaging level needs its own DI linked to the base DI with quantity-per-package, or the scan does not resolve.

---

## Practical tips

- Treat the device master data as the single source of truth for UDI, and generate both the label artwork and the database submissions from it. Two sources of truth guarantees drift.
- Build the UDI assessment into your change-control form as an explicit question, not a memory item. The cheapest way to fail UDI is to change a label and forget the record.
- Verify scan quality as part of label release, not as an afterthought. A barcode that prints but will not scan on a curved or reflective surface is a field problem waiting to happen.
- Keep a reconciliation report that lists every marketed DI against its GUDID and EUDAMED record. Run it before every inspection. Orphan and missing records are easy to find and easy for you to fix first.
- In contract-manufacturing and private-label deals, pin the labeler designation and submission responsibility in the quality agreement explicitly. Do not leave it implied.
- Do not assume your GUDID work covers the EU. The Basic UDI-DI, the SRN, and the EUDAMED data schema are separate obligations.
- When in doubt on EU module timelines, check the European Commission's current EUDAMED rollout status rather than quoting a date, because the mandatory dates have moved during the phased launch.

---

## Related articles

- [EU MDR and IVDR overview](/articles/eu-mdr-ivdr-overview)
- [Device submission pathways: 510(k) and PMA](/articles/device-submission-pathways-510k-pma)
- [Design controls for medical devices](/articles/design-controls-medical-devices)
- [Device postmarket surveillance and MDR vigilance](/articles/device-postmarket-surveillance-mdr)
- [Medical device quality system (QMSR)](/articles/medical-device-quality-system-qmsr)
- [ISO 14971 risk management for devices](/articles/iso-14971-risk-management-devices)
- [DSCSA serialization and track-and-trace](/articles/dscsa-serialization-track-and-trace)
- [Device software cybersecurity and SaMD](/articles/device-software-cybersecurity-samd)
- [Change control for validated systems](/articles/change-control-validated-systems)
- [CDMO oversight and quality agreements](/articles/cdmo-oversight-quality-agreements)
