---
title: "DSCSA and Serialization: Track-and-Trace, EPCIS, and Interoperability"
description: "How the Drug Supply Chain Security Act works in practice: product identifiers, T3 data, verification, EPCIS exchange, saleable returns, and the quality systems behind them."
pubDate: 2026-06-20
tags: ["dscsa", "serialization", "supply-chain", "epcis", "track-and-trace", "gdp", "traceability"]
pillar: "supply-chain-gdp"
tier: "Intermediate"
---

The Drug Supply Chain Security Act (DSCSA) is the U.S. law that turned the prescription drug supply chain from a paper-and-trust system into a serialized, electronic, interoperable one. If you work in quality, supply chain, IT, or regulatory at a manufacturer, repackager, wholesale distributor, or dispenser, you will at some point own a piece of this: the serial numbers on the carton, the data exchanged with trading partners, the verification of a returned product, or the investigation when a number does not match. This article walks through the law, the data standards, the operating procedures, and the quality controls that make a DSCSA program actually pass inspection.

The scope here is the United States. The European Falsified Medicines Directive (FMD) and other national serialization schemes share the same DNA (unique identifiers plus verification) but differ in architecture, so they are noted only where the contrast matters.

---

## What DSCSA is and why it exists

DSCSA is Title II of the Drug Quality and Security Act (DQSA), signed into law in November 2013, codified primarily at section 582 of the Federal Food, Drug, and Cosmetic Act (21 U.S.C. 360eee-1). It replaced a patchwork of state pedigree laws (notably the older Florida and California pedigree requirements) with a single federal framework.

The stated goal: protect patients from counterfeit, stolen, contaminated, diverted, or otherwise harmful drugs by building an electronic, interoperable system to identify and trace certain prescription drugs as they move through the supply chain. The quality rationale is straightforward. A serialized, verifiable supply chain makes it far harder to insert a falsified product, far easier to scope a recall, and possible to detect diversion and theft before product reaches a patient.

The law set a phased, roughly ten-year build. Two anchor dates matter most:

- **November 27, 2017 (manufacturers) and downstream dates through 2020**: product identifier (serialization) requirements began.
- **November 27, 2023**: the start of "enhanced drug distribution security," the unit-level, fully electronic, interoperable tracing phase. FDA exercised enforcement discretion past that date through a series of stabilization periods, so different trading-partner segments came into full enforcement on staggered timelines rather than all at once. Treat November 2023 as the design target and confirm the current enforcement posture for your trading-partner type against the latest FDA guidance, because the discretion windows have shifted more than once.

### Who is covered (and who is not)

DSCSA defines a small set of **trading partners**, and your obligations depend entirely on which one you are:

| Trading partner | Plain-language role | Core obligations |
|---|---|---|
| Manufacturer | Holds the application or manufactures the product | Serialize, affix product identifier, provide T3, respond to verification requests |
| Repackager | Repackages and relabels | Re-serialize, maintain traceability, provide T3 |
| Wholesale distributor | Buys and resells | Pass/receive T3, verify, handle saleable returns, license verification |
| Dispenser | Pharmacy (retail, hospital, clinic) | Receive and store T3, verify on suspect/returned product, buy only from authorized partners |
| Third-party logistics provider (3PL) | Stores and ships, does not take title | Maintain handling records, license verification (no T3 ownership) |

Products in scope are **prescription drugs in finished dosage form for human use** that are dispensed under a prescription. There is a defined list of exclusions in section 581/582, including blood and blood components for transfusion, radioactive drugs, imaging agents, certain intravenous and medical-gas products, compounded preparations, and others. Over-the-counter drugs are out of scope. When in doubt about a specific NDC, document the product-scope determination; "we assumed it was excluded" is a finding waiting to happen.

---

## The product identifier: what actually goes on the package

The serialized identity of a unit is the **product identifier (PI)**. Under DSCSA it must appear on each package and homogeneous case in two forms: human-readable and a 2D data-carrier (in practice, a GS1 DataMatrix barcode). The PI is built from four data elements:

1. **NDC** (National Drug Code) of the product.
2. **Serial number**, a unique alphanumeric string for that individual package.
3. **Lot number** (batch).
4. **Expiration date**.

In GS1 terms, those map to Application Identifiers (AIs) inside the DataMatrix:

| GS1 AI | Element | Notes |
|---|---|---|
| 01 | GTIN | Encodes the NDC; 14 digits |
| 21 | Serial number | Up to 20 alphanumeric characters |
| 17 | Expiration date | YYMMDD |
| 10 | Lot/batch number | Variable length |

A representative encoded string (FNC1-delimited) looks like:

```
(01)00312345678906(21)A1B2C3D4E5(17)271130(10)LOT4521
```

The **GTIN** (Global Trade Item Number) carries the NDC. A 10-digit NDC is embedded in a 14-digit GTIN with a leading indicator digit, a company prefix, item reference, and a check digit. Getting the NDC-to-GTIN mapping right is the single most common upstream data error, because the NDC can be expressed in several formats (for example 4-4-2, 5-3-2, 5-4-1) and the GTIN has to encode the correct one consistently across the master data, the printed barcode, and the EPCIS data.

### The Standardized Numerical Identifier (SNI)

FDA's older SNI guidance (the 2010 "Standards for Securing the Drug Supply Chain, Standardized Numerical Identifiers" document) defined the SNI as the NDC combined with a unique serial number. DSCSA's PI is the operational successor. Practically, the SNI concept is what makes a unit globally unique: NDC plus serial.

### Aggregation and the hierarchy

Real supply chains do not scan every carton at every step. **Aggregation** records the parent-child relationship between packaging levels: each unit (each) belongs to a case (or bundle), each case to a pallet. The pallet and case carry an **SSCC** (Serial Shipping Container Code, GS1 AI 00). Scan the SSCC on the pallet and the system can "inflate" to every serial inside without opening it. This is called inference: you infer the contents of a parent from the aggregation data rather than scanning each child.

Aggregation is not strictly mandated by the statute, but it is operationally essential for unit-level tracing and saleable-returns verification at scale, and trading-partner agreements almost always require it. Poor aggregation accuracy (a serial recorded in the wrong case) is one of the most damaging data-quality failures in the whole system, because it propagates silently until a verification fails downstream.

---

## T3: transaction information, history, and statement

Before November 2023, DSCSA required three documents to travel with product at each change of ownership, collectively the **T3**:

- **Transaction Information (TI)**: product name, strength and dosage form, NDC, container size, number of containers, lot number, transaction date, shipment date, and the names and addresses of the businesses from whom and to whom ownership is transferred.
- **Transaction History (TH)**: a paper or electronic statement tracing the product back through each prior transaction to the manufacturer.
- **Transaction Statement (TS)**: a written affirmation that the seller is authorized, received the product from an authorized partner, did not knowingly ship suspect or illegitimate product, had systems to comply, did not knowingly provide false TI, and did not knowingly alter the TH.

The enhanced (post-2023) phase changed the shape of this data significantly. **Transaction History is eliminated** in the enhanced model, because full traceability comes from the connected, package-level electronic data rather than a cumulative pedigree document. The Transaction Information must now be **at the package level** (include the product identifier, meaning serial numbers) and the entire exchange must be **secure, electronic, and interoperable**. The Transaction Statement persists. So the enhanced "T2" exchange is package-level TI plus TS, carried electronically.

A common interview trap: candidates say "DSCSA always required serial numbers in the TI." It did not. The pre-2023 TI was lot-level. Package-level (serialized) TI is the defining change of the enhanced phase.

### Sample Transaction Information (package level)

| Field | Value |
|---|---|
| Product name / strength | Example Drug Tablets, 50 mg |
| NDC | 0312-3456-78 |
| Dosage form | Oral tablet |
| Container size | 30 count |
| Number of containers | 240 |
| Lot number | LOT4521 |
| Expiration | 2027-11-30 |
| Product identifiers (serials) | GTIN 00312345678906, serials A1B2C3D4E5 ... (240 distinct) |
| Transaction date | 2026-06-18 |
| Shipment date | 2026-06-19 |
| Seller (from) | Authorized Manufacturer, 1 Plant Rd, City, ST |
| Buyer (to) | Authorized Distributor, 9 Depot Ave, City, ST |

How those package identifiers actually move is the next topic: EPCIS.

---

## EPCIS: the language of interoperable exchange

The industry chose **GS1 EPCIS** (Electronic Product Code Information Services) as the de facto standard for DSCSA data exchange. EPCIS is a GS1 standard for sharing supply-chain event data answering four questions about each event: **What, When, Where, Why** (the object/serials, the timestamp, the location, and the business context). The companion **Core Business Vocabulary (CBV)** standardizes the allowed values for the "Why" (business steps and dispositions) so that two trading partners interpret the same event the same way.

EPCIS 1.2 (XML) carried the early DSCSA implementations; EPCIS 2.0 added JSON and JSON-LD and is increasingly used. The GS1 US "Application Standard" for DSCSA constrains EPCIS so partners exchange data consistently. If you remember one thing: EPCIS is the message format, CBV is the controlled vocabulary, and the GS1 US guidance is the implementation profile.

### The four core EPCIS event types

| Event type | What it records | DSCSA use |
|---|---|---|
| ObjectEvent | Something happened to a set of objects (commission, ship, receive) | Commissioning serials, shipping/receiving |
| AggregationEvent | Parent-child packing/unpacking | Pack eaches into cases, cases onto pallets |
| TransactionEvent | Objects associated with a business transaction (PO, invoice) | Linking serials to a sales order |
| TransformationEvent | Inputs consumed, outputs created | Repackaging, relabeling |

Each event carries key CBV fields:

- **bizStep**: the business step, for example `commissioning`, `shipping`, `receiving`, `packing`, `unpacking`, `decommissioning`.
- **disposition**: the state of the object, for example `active`, `in_transit`, `in_progress`, `destroyed`, `returned`, `recalled`.
- **readPoint** and **bizLocation**: where the event happened and where the objects now logically reside, expressed as GS1 GLNs (Global Location Numbers).

### A worked EPCIS shipping event (simplified)

```json
{
  "isA": "ObjectEvent",
  "eventTime": "2026-06-19T14:05:00-04:00",
  "eventTimeZoneOffset": "-04:00",
  "action": "OBSERVE",
  "bizStep": "urn:epcglobal:cbv:bizstep:shipping",
  "disposition": "urn:epcglobal:cbv:disp:in_transit",
  "readPoint": { "id": "urn:epc:id:sgln:0312345.00001.0" },
  "epcList": [
    { "epc": "urn:epc:id:sgtin:0312345.067890.A1B2C3D4E5" }
  ],
  "bizTransactionList": [
    { "type": "urn:epcglobal:cbv:btt:po", "bizTransaction": "urn:po:4500098765" }
  ],
  "sourceList": [
    { "type": "owning_party", "source": "urn:epc:id:sgln:0312345.00000.0" }
  ],
  "destinationList": [
    { "type": "owning_party", "destination": "urn:epc:id:sgln:0398765.00000.0" }
  ]
}
```

Note the SGTIN (Serialized GTIN) in `epcList`: that is the serial number expressed as an EPC URI. The `sourceList`/`destinationList` carry the change-of-ownership "from/to," which maps directly to the DSCSA TI buyer and seller. This is why people say EPCIS "carries" the T2: the regulatory data elements are present, just expressed in the GS1 vocabulary.

### How partners actually connect

The data does not flow over one universal pipe. Connections are typically point-to-point integrations (often through commercial serialization or traceability platforms acting as a hub), AS2 or SFTP file drops, or API calls. A given manufacturer may exchange EPCIS with dozens of distributors through one or two solution providers. The interoperability obligation is about being able to connect and exchange in the standard format, not about a single government database. FDA explicitly did not build a centralized national track-and-trace repository; the system is distributed.

---

## Verification, VRS, and the GTIN-serial-lot-expiry lookup

DSCSA requires trading partners to be able to **verify** a product identifier, especially for suspect product and for saleable returns. The industry built the **Verification Router Service (VRS)** to do this at scale.

VRS answers a simple question: "I have this GTIN, serial, lot, and expiry. Is it a valid, manufacturer-issued identifier?" The requester sends those four data elements; the network routes the query (using a GS1 Lightweight Messaging Standard / PI lookup) to the **responder** operated by or for the product's manufacturer; the response is a yes/no on the validity of that identifier. Crucially, VRS returns a verification result, not the full transaction history. It confirms the number is real; it does not by itself prove the unit is the genuine physical product.

The **saleable returns verification requirement** (effective for wholesale distributors November 27, 2019, but under FDA enforcement discretion that was extended twice, ultimately to November 27, 2023) is the highest-volume use of VRS. A distributor that receives returned, undamaged, in-date product cannot resell it unless it verifies the product identifier first. Given the volume of returns, manual verification is impractical, which is why VRS exists.

### Verification roles and timing

- For a **suspect product** investigation, verification must happen promptly as part of determining whether the product is illegitimate (see below).
- For a **saleable return**, verification must occur before the product is put back into sellable inventory.
- A manufacturer that receives a verification request for a product identifier it issued must respond, generally within **24 hours** for suspect-product verification requests.

---

## Suspect and illegitimate product: the investigation workflow

This is where the quality and regulatory disciplines intersect, and it is the part inspectors probe hardest because it is the patient-safety end of the law.

A **suspect product** is one for which there is reason to believe it is potentially counterfeit, diverted, stolen, intentionally adulterated, the subject of a fraudulent transaction, or unfit for distribution and a risk to patients. An **illegitimate product** is one for which credible evidence shows it is counterfeit, diverted, stolen, intentionally adulterated, the subject of a fraudulent transaction, or unfit and a risk.

### Step-by-step

1. **Detect / receive a trigger.** A failed scan, a mismatched verification, a tip, a regulatory notice, physical signs of tampering, or a transaction that does not reconcile.
2. **Quarantine.** Physically segregate the product and stop further distribution. Document the quarantine.
3. **Investigate to determine suspect status.** Use verification (VRS), review the transaction data, inspect the physical product, and contact the upstream partner and/or manufacturer.
4. **Verify the product identifier** as part of the investigation, including a request to the manufacturer where relevant.
5. **Conclude.** If the investigation clears the product, document the rationale and release it. If credible evidence shows it is illegitimate, escalate.
6. **Notify FDA and trading partners.** For illegitimate product, notify FDA using **Form FDA 3911** within **24 hours**, and notify immediate trading partners you reasonably believe may have received it. Coordinate disposition (often destruction) with the manufacturer.
7. **Terminate the notification** when appropriate, again via Form FDA 3911, once FDA and partners agree the matter is resolved.

### Acceptance criteria for a defensible investigation

- Quarantine was immediate and recorded with date, time, and quantity.
- The product identifier was verified and the result captured.
- The decision (cleared vs illegitimate) is supported by documented evidence, not assertion.
- For illegitimate product, the 3911 notification timestamp shows it was filed within 24 hours of the determination.
- Trading-partner notifications are evidenced.
- Records are retained and retrievable for the required period (generally six years for transaction records under DSCSA).

---

## Authorized trading partners and license verification

DSCSA limits trading to **authorized trading partners**. For manufacturers, repackagers, and wholesalers, "authorized" turns on FDA registration and state licensure; for dispensers, on a valid state license; for 3PLs, on the required licensure/reporting.

The **National Association of Boards of Pharmacy** maintains licensure resources, and FDA publishes the registration and 3PL/wholesaler reporting databases. Before you transact with a new partner, verify their authorization status and keep the evidence. Buying from or selling to an unauthorized partner is itself a violation, independent of whether the product turns out to be fine.

A practical control: maintain an approved-trading-partner list inside your quality system, with the license/registration evidence attached and a periodic re-verification cadence (for example, at license-renewal dates). Tie new-customer and new-vendor onboarding to that check.

---

## Building and validating the serialization system (the quality view)

A serialization program is a GxP-adjacent IT and packaging system, and it is validated like one. Even though serialization data is not classic batch-record CGMP data, the printing and verification equipment on the line is part of the labeling control, and the data systems that generate and exchange serials should be managed under computerized-system controls. See [computer software assurance fda](/articles/computer-software-assurance-fda) and the [gamp5 csv framework](/articles/gamp5-csv-framework) for the validation approach, and [21 cfr part 11 eu annex 11](/articles/21-cfr-part-11-eu-annex-11) for electronic-records expectations on the data side.

### The system layers

| Layer | Function | Typical owner |
|---|---|---|
| L1 | Device (printer, camera, reject) | Engineering / line |
| L2 | Line/site management (serial provisioning to a line, verification, reconciliation) | Packaging / IT |
| L3 | Site/plant repository | IT / serialization team |
| L4 | Enterprise serialization and EPCIS exchange | IT / supply chain |
| L5 | External: regulators, trading partners, VRS network | Regulatory / supply chain |

Serial numbers are usually requested from an enterprise (L4) number generator, provisioned down to the line (L2), printed and vision-verified on each unit, aggregated, and the events sent back up to L4 for EPCIS exchange (L5).

### What to validate and how to know it is right

- **Serial number management.** Numbers are unique, never reused, generated with adequate randomization where required, and reconciled (commissioned vs printed vs rejected vs shipped). Acceptance: a reconciliation report per batch with zero unexplained discrepancies and a controlled procedure for handling rejects (decommissioning) and re-prints.
- **Print and verification.** The DataMatrix is grade-acceptable (ISO/IEC 15415 print-quality grading is the usual reference, commonly a minimum grade such as C/1.5 by trading-partner agreement) and the human-readable matches the encoded data. Acceptance: documented grading and a vision system that rejects unreadable or mismatched units.
- **Aggregation accuracy.** Parent-child mapping is correct. Acceptance: aggregation challenge tests show 100 percent correct inflation; a sampling plan confirms no orphan or cross-mapped serials.
- **EPCIS message integrity.** Generated EPCIS validates against the GS1 US application standard schema and contains correct GLNs, bizSteps, dispositions, and source/destination. Acceptance: schema validation passes and a round-trip test with a trading partner (or test harness) confirms the partner can ingest it.
- **Data integrity.** Serial events are attributable, time-stamped, audit-trailed, and protected from alteration (ALCOA+ principles). See [ALCOA+ in detail](/articles/alcoa-plus-deep-dive) and [audit trail design and review](/articles/audit-trail-design-and-review).

### Roles and responsibilities

| Role | Responsibility |
|---|---|
| Quality Assurance | Owns the procedures, approves validation, dispositions serialization deviations, oversees suspect/illegitimate investigations |
| Serialization / IT system owner | Operates L4/L5, manages number generation and EPCIS exchange, change control |
| Packaging engineering | Owns L1/L2 print and vision, line qualification |
| Supply chain / trade compliance | Manages trading-partner authorization, T3/EPCIS connections, returns |
| Regulatory affairs | Owns FDA 3911 notifications, scope determinations, interpretation of guidance |
| Solution provider / vendor | Supplies and maintains the serialization platform under a quality agreement; see [cdmo oversight quality agreements](/articles/cdmo-oversight-quality-agreements) |
| Contract manufacturer / packager | Serializes on the manufacturer's behalf, sends EPCIS upstream, under the quality agreement |

When a CMO or CPO serializes for you, the master data (GTIN, NDC, expiry format) and the EPCIS connection are the two things that break most often. Lock them down in the quality/technical agreement and run a connectivity test before the first commercial batch.

---

## Saleable returns: the end-to-end procedure

Saleable returns are worth their own walkthrough because they generate the most transactions and the most findings.

1. Product is returned to a wholesale distributor, undamaged and in date.
2. The distributor scans the product identifier (GTIN, serial, lot, expiry) from the DataMatrix.
3. The distributor sends a verification request through VRS.
4. The manufacturer's responder confirms the identifier is valid (or not).
5. If valid, the distributor may return the unit to sellable inventory and the associated transaction data is updated.
6. If invalid or no response, the unit is treated as suspect and enters the suspect-product workflow.

**Acceptance criteria:** every saleable return has a recorded verification result before re-shelving; no product is resold on a "no response" or a mismatch; turnaround on the verification meets the agreed service level; and the audit trail links the physical unit to the verification transaction.

**Common failure:** scanning the linear/legacy barcode instead of the 2D DataMatrix, so the serial is never captured and verification cannot run. Another: returns processed faster than the VRS can respond, so units get re-shelved on a pending result. Both are procedure-and-throughput problems, not technology problems.

---

## Common mistakes and inspection-finding patterns

These are the recurring, generic patterns. None of them require naming a company to recognize.

- **NDC-to-GTIN mismatch.** The barcode encodes a GTIN that does not correctly map to the labeled NDC, or different formats appear in master data versus the printed code versus the EPCIS. Every downstream verification then fails.
- **Human-readable does not match the encoded data.** The eye-readable lot or expiry differs from what is in the DataMatrix. Classic labeling-control finding.
- **Poor barcode print quality.** DataMatrix grades below the agreed minimum, so partners cannot scan reliably.
- **Aggregation errors.** Serials assigned to the wrong case or pallet, producing failed receipts and unverifiable returns downstream.
- **Incomplete or wrong EPCIS.** Missing source/destination GLNs, wrong bizStep or disposition, schema validation failures, or events that do not reconcile (shipped count does not match commissioned count).
- **T3 / TI gaps.** Pre-enhanced records missing required fields; enhanced records that are still lot-level rather than package-level.
- **Transacting with unauthorized partners** or failing to keep license-verification evidence.
- **Late or missing FDA 3911 notification** for illegitimate product, or no documented suspect-product investigation procedure at all.
- **Records not retained or not retrievable** within the required period and timeframe when requested.
- **No reconciliation** of serial numbers (commissioned vs printed vs rejected vs shipped vs destroyed), so the program cannot prove every number is accounted for.
- **Change control bypassed** when master data (GTIN, expiry format) or EPCIS mapping is edited directly in production. This is both a CSV and a data-integrity finding.

A useful internal check: pick one shipped batch and trace a single serial end-to-end (commission to ship to receive to EPCIS to, if applicable, a return). If you cannot follow that one number cleanly through every system, neither can an inspector, and that is where the questions start. See [supply chain data integrity](/articles/supply-chain-data-integrity) and [data integrity foundations](/articles/data-integrity-foundations) for the broader discipline.

---

## DSCSA versus EU FMD: the one-paragraph contrast

Both require a unique identifier and verification, but the architecture differs. The EU Falsified Medicines Directive (Directive 2011/62/EU) and its Delegated Regulation (EU) 2016/161 use a **centralized hub-and-repository model**: manufacturers upload unique serial numbers to the European Medicines Verification System, and pharmacies **decommission** each pack at dispense by checking it against the national repository, plus a tamper-evident anti-tampering device on the pack. DSCSA, by contrast, is **distributed**: no central repository, traceability achieved through interoperable EPCIS exchange between partners, and verification routed through VRS. EU = verify-at-dispense against a central database plus tamper evidence. U.S. = serialized data exchanged partner-to-partner with point-of-need verification. Do not conflate the two in an interview; it signals you have only worked one region.

---

## Interview-ready questions and strong answers

**Q: Walk me through the four data elements of a DSCSA product identifier.**
NDC, serial number, lot number, expiration date. They appear human-readable and in a 2D DataMatrix, mapped to GS1 AIs: 01 (GTIN, which encodes the NDC), 21 (serial), 10 (lot), 17 (expiry). The NDC-plus-serial combination is what makes each unit globally unique.

**Q: What changed at the November 27, 2023 enhanced phase?**
Exchange went package-level (serialized TI), fully electronic, and interoperable. Transaction History was eliminated; Transaction Information now carries product identifiers; the Transaction Statement remains. FDA applied staggered enforcement discretion after that date, so confirm the current posture for the specific trading-partner type rather than assuming hard enforcement on day one.

**Q: What is EPCIS and how does CBV relate to it?**
EPCIS is the GS1 standard message format for sharing supply-chain event data: what, when, where, why. CBV is the controlled vocabulary that standardizes the "why" (bizSteps and dispositions) so two partners read an event the same way. The GS1 US application standard is the DSCSA-specific profile. Event types are Object, Aggregation, Transaction, and Transformation.

**Q: What is the VRS for, and what does it actually return?**
The Verification Router Service routes a product-identifier query (GTIN, serial, lot, expiry) to the manufacturer's responder and returns whether that identifier is valid. Its highest-volume use is saleable-returns verification. It confirms the number is genuine; it does not return full transaction history and does not by itself prove the physical unit is authentic.

**Q: You receive a saleable return. Walk me through it.**
Scan the 2D code to capture GTIN, serial, lot, expiry; send a VRS verification request; only re-shelve if the manufacturer's responder confirms validity; if invalid or no response, treat it as suspect and quarantine. Record the verification result against the physical unit before it re-enters sellable inventory.

**Q: You find a product you believe is illegitimate. What do you do, and on what clock?**
Quarantine immediately, investigate (verify the identifier, review transaction data, inspect the product, contact upstream/manufacturer), and if credible evidence confirms it is illegitimate, notify FDA via Form FDA 3911 within 24 hours and notify immediate trading partners. Coordinate disposition, then terminate the notification via 3911 when resolved.

**Q: What is aggregation and why does it matter?**
It is the recorded parent-child relationship between packaging levels (each to case to pallet), with cases and pallets carrying SSCCs. It lets you infer the contents of a sealed parent from data rather than scanning every child, which is essential for unit-level tracing and high-volume returns. Aggregation errors are among the most damaging data-quality failures because they propagate silently.

**Q: How is a serialization system validated, and what data-integrity controls apply?**
Treat it as a computerized system under a risk-based CSV/CSA approach: validate serial-number management and reconciliation, print and vision verification, aggregation accuracy, and EPCIS message integrity, with change control over master data and EPCIS mapping. Apply ALCOA+ to serial events: attributable, time-stamped, audit-trailed, and protected from unauthorized change.

**Q: How does DSCSA differ from EU FMD?**
DSCSA is a distributed, partner-to-partner EPCIS model with VRS verification and no central database. FMD is a centralized repository model where packs are decommissioned at dispense against a national system, plus a physical tamper-evident device. Same goal, different architecture.

---

## Practical tips

- Nail the **master data** first. GTIN, NDC format, and expiry-date format errors break everything downstream, so freeze them under change control and reconcile across master data, printed code, and EPCIS.
- Run a **connectivity / round-trip test** with each new trading partner before the first commercial shipment. EPCIS that validates against the schema can still fail in a partner's system because of GLN or vocabulary mismatches.
- Keep a **serial reconciliation report per batch** (commissioned, printed, rejected/decommissioned, shipped). It is the cleanest evidence that you control your numbers, and it is the first thing a thorough auditor asks for.
- Treat **saleable-returns throughput** as a capacity problem, not just a compliance one. If VRS response time cannot keep up with returns volume, you will get pressure to re-shelve on pending results; build the procedure to forbid that.
- Maintain an **approved-trading-partner register** inside the quality system with license/registration evidence and a re-verification cadence tied to renewal dates.
- Write the **suspect/illegitimate product SOP** so the 24-hour 3911 clock and the quarantine step are unambiguous, and rehearse it; the first time you run it should not be during a real event. See [how to write an sop](/articles/how-to-write-an-sop).
- Retain DSCSA transaction records and serialization data for the required retention period (generally six years for transaction records) in a retrievable form, and confirm you can produce them on the timeframe FDA specifies.

---

## Related articles

- [good distribution practice cold chain](/articles/good-distribution-practice-cold-chain)
- [supply chain data integrity](/articles/supply-chain-data-integrity)
- [cold chain shipping qualification](/articles/cold-chain-shipping-qualification)
- [recall management field actions](/articles/recall-management-field-actions)
- [product complaint handling](/articles/product-complaint-handling)
- [gamp5 csv framework](/articles/gamp5-csv-framework)
- [computer software assurance fda](/articles/computer-software-assurance-fda)
- [data integrity foundations](/articles/data-integrity-foundations)
- [cdmo oversight quality agreements](/articles/cdmo-oversight-quality-agreements)
