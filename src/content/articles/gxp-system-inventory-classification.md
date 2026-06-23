---
title: "The GxP Computerized System Inventory and Classification"
description: "How to build and maintain a defensible inventory of every computerized system, decide what is GxP-in-scope, assign GAMP category and risk tier, and track validation, periodic review, and retirement so you never get the no-current-inventory finding."
pubDate: 2026-06-22
tags: ["csv", "gamp", "computerized-systems", "inventory", "data-integrity", "validation", "gxp"]
pillar: "csv-csa"
tier: "Intermediate"
---

Ask any quality unit a simple question, "show me the list of every computerized system you use that touches a regulated decision", and watch what happens. In a lot of organizations the answer is a spreadsheet that is two years stale, a SharePoint list that three people maintain in three different ways, and a shared understanding that the real list lives in someone's head. That gap is exactly what an inspector probes, and "the firm did not maintain a current inventory of computerized systems used in GxP operations" is a finding that writes itself. You cannot validate what you have not listed, you cannot risk-rank what you have not classified, and you cannot defend a program whose boundary you cannot draw.

This article is the day-one how-to. It covers how to enumerate every system, how to decide which ones are in GxP scope using a repeatable decision tree, how to assign a GAMP software category and a risk or criticality tier, and how to track each system's validation status, periodic-review obligation, and retirement. The output is a single controlled artifact that survives an inspection and actually runs your program rather than sitting in a drawer. If you are new to the underlying concepts, start with [GxP computerized systems operations](/articles/gxp-computerized-systems-operations) and the [GAMP 5 framework](/articles/gamp5-csv-framework). The [GxP, CSV, and data integrity glossary](/articles/gxp-csv-data-integrity-glossary) will fill in any term used here without ceremony.

---

## Why an Inventory Is the First Control

### The regulatory basis

No single clause says "thou shalt keep a spreadsheet of systems", but the obligation is unmistakable once you stack the sources. In the United States, 21 CFR 211.68 requires that automatic, mechanical, or electronic equipment used in manufacture, processing, packing, or holding be routinely calibrated, inspected, or checked according to a written program, and that such equipment be suitable for its intended purpose. You cannot show a written program covers your equipment if you have no list of the equipment. 21 CFR Part 11 governs electronic records and signatures; its very scope, the set of systems it applies to, presupposes that you know which systems create, modify, maintain, or transmit electronic records subject to predicate rules.

In the European Union, EU GMP Annex 11 is explicit on the point. It expects a firm to keep an up-to-date list of the systems it relies on and to say what each one does in GMP terms, which is the inventory itself, and it sets a higher bar for the systems that matter most: those need a maintained description detailed enough to show how the system is put together, how data moves through it, how it connects to the rest of the operation, what it depends on to run, and how it is secured.

That requirement is the charter for this entire article. An inventory, kept current, covering all relevant systems and their GMP functionality, with deeper system descriptions for the critical ones. PIC/S PI 011 ("Good Practices for Computerised Systems in Regulated 'GxP' Environments") and PIC/S PI 041 (the data management and integrity guide) both reinforce that a regulated firm must understand and document the population of systems it relies on. The GAMP 5 second edition guide from ISPE treats the inventory as a foundational deliverable that the whole risk-based lifecycle hangs off.

> Note: GAMP 5, Annex 11, and the PIC/S guides are copyrighted. Cite them by number and title and describe their intent in your own words; do not paste their text into your SOPs.

### Why it is required (the risk rationale)

The inventory is the control that makes every other control possible. Validation, periodic review, change control, supplier oversight, data integrity assessment, backup and disaster recovery, business continuity, decommissioning, all of these operate on a unit of work, and that unit is "a system". If a system is not on the list, it is not in any of those processes by definition. The classic data integrity failures, a spreadsheet doing GMP calculations with no version control, an instrument logging results that nobody validated, a cloud tool the lab signed up for on a credit card, are almost always systems that never made it onto an inventory. The inventory is how you stop a shadow system from becoming a 483 observation.

There is a second, quieter reason. Resource allocation is a risk decision. You have finite validation and review capacity. Without a classified inventory you spread effort evenly, over-testing a label printer and under-testing the LIMS that releases product. The inventory plus its risk tiering is what lets you put effort where the patient and data risk actually live, which is the entire premise of [computer software assurance](/articles/computer-software-assurance-fda) and the [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology).

---

## What Counts as a Computerized System

Before you can enumerate, agree on the definition, or you will get endless arguments about edge cases. A computerized system, in the GAMP sense, is the software plus the hardware it runs on, plus the controlled function or process it operates, plus the people and procedures around it. That breadth matters. A chromatography data system is not just the software; it is the software, the instruments it controls, the server and database behind it, and the SOPs that govern its use.

The population is wider than people first assume. It includes, at minimum:

- Enterprise applications: LIMS, ELN, MES, ERP (the GxP-relevant modules), EDMS, QMS, training systems, learning management systems.
- Instrument and equipment control systems: CDS, plate readers, balances with data output, particle counters, bioreactor controllers, autoclaves with electronic records.
- Process control systems: PLC, DCS, SCADA, HMI, building management and environmental monitoring systems. See [PLC, DCS, and HMI fundamentals](/articles/plc-dcs-hmi-fundamentals) and [automation validation for PLC, SCADA, and DCS](/articles/automation-validation-plc-scada-dcs).
- Spreadsheets and small tools: any spreadsheet performing a GxP calculation, decision, or record, plus local databases (Access and similar) and scripts. These are systems too, and they are the most commonly missed. See [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation).
- IT infrastructure as a platform: networks, virtualization, operating systems, databases, and time services that the above run on. Often inventoried separately and qualified once, then referenced.
- Cloud and SaaS: any externally hosted application that touches GxP data, including the ones procurement signed without telling quality. See [cloud and SaaS validation](/articles/cloud-saas-validation).

The right mental test is functional, not technical: does this thing create, store, transform, transmit, or make a decision about data or a process that bears on product quality, patient safety, or a regulatory record? If yes, it is a candidate for the inventory, and the GxP scoping step below decides whether it is in or out.

---

## Step One: Enumerate Every System

### How to do it

You do not discover systems by asking "what systems do we have?" in a meeting. You discover them by triangulating across independent sources, because no single source is complete.

1. **Walk the process, not the org chart.** Take each GxP business process, incoming materials, manufacturing, QC testing, release, stability, distribution, pharmacovigilance, clinical data, and list every point where a person or instrument touches data through software. Process flow is the most reliable lens because it follows the data, not the department. The [data lifecycle and metadata](/articles/data-lifecycle-and-metadata) view helps here.
2. **Mine the financial and procurement records.** Accounts payable, software license registers, and SaaS subscription billing surface tools that IT never provisioned. The credit-card LIMS shows up in expenses long before it shows up anywhere else.
3. **Pull the IT asset and identity records.** Active Directory, the CMDB, network scans, and endpoint management lists give you the technical population. They will include non-GxP systems, which is fine; scoping comes next.
4. **Interview the bench.** Sit with analysts, operators, and data managers and ask what they actually use to do their jobs, including the macro a former colleague wrote, the local database tracking samples, and the personal spreadsheet that became the team's de facto tracker.
5. **Review instruments.** Every instrument that produces, stores, or controls data is in scope for assessment even if its "software" is firmware on a small screen. Tie this to the [analytical instrument qualification](/articles/analytical-instrument-qualification) program.

Cross-reference the five lists. The systems that appear in process walkthroughs but not in IT records are your shadow IT. The ones in IT records but not in process walkthroughs are candidates for retirement or de-scoping. The discrepancies are the most valuable output of the enumeration.

### Acceptance criteria

Enumeration is complete enough to defend when: every GxP business process has been walked and its data touchpoints captured; at least three independent source lists (process, procurement, IT) have been reconciled; every reconciliation discrepancy has a recorded disposition (added, de-scoped, retired, or duplicate); and a named owner attests that the population is current as of a stated date. Completeness is never absolute, but a documented, multi-source, reconciled, dated attestation is defensible. A single stale spreadsheet is not.

### Roles

The system owner or process owner provides the ground truth for their area. IT provides the technical asset data. Quality owns the procedure and challenges completeness. A coordinator (often a CSV or data integrity lead) runs the reconciliation and maintains the master record. See [GxP roles and responsibilities](/articles/gxp-roles-responsibilities).

---

## Step Two: Decide GxP Scope

Not every system on the candidate list is GxP. A cafeteria menu app is not. The marketing CRM is not, until it starts holding adverse-event reports, at which point it is. You need a repeatable scoping decision that anyone can apply and reach the same answer, because consistency is what makes the boundary defensible.

### The decision tree

Use the following questions in order. The first "yes" that lands a system in scope ends the analysis for inclusion; you still record which trigger fired.

<div class="flow">
  <div class="flow-step">Does the system create, modify, store, or transmit a record required by a GxP predicate rule (GMP, GLP, GCP, GDP, GVP)?</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Does it control or monitor a GxP process, equipment, or environment?</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Does its output feed a quality decision (release, disposition, OOS, stability, safety)?</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Does it generate, manage, or report an electronic signature or a Part 11 / Annex 11 record?</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Any YES = GxP in scope. All NO = out of scope (record the rationale)</div>
</div>

A few refinements that prevent the common arguments:

- **Partial scope is real.** An ERP may have GxP-relevant modules (batch genealogy, materials disposition status) and entirely non-GxP modules (general ledger). Scope the GxP-relevant functions and say so explicitly; do not validate the whole monolith because one corner is in scope, and do not de-scope the whole thing because most of it is finance.
- **Indirect impact still counts.** A system that does not itself hold the record but whose failure would corrupt a GxP record (a time service feeding audit-trail timestamps, an identity provider gating access) is in scope for the controls that matter. See [time stamps and system clock control](/articles/time-stamps-and-system-clock-control).
- **"Used once" is still used.** A tool used for a single GxP study or migration is in scope for that use and should be on the inventory with its limited-use status noted.

### Worked example: the lab spreadsheet

The QC lab has a spreadsheet, "Assay_Calc_v3.xlsx", that takes raw peak areas exported from the CDS and computes percent potency against a reference standard, then an analyst transcribes the result into LIMS. Run the tree. Does it create or store a GxP record? It computes the potency value that drives a release decision, so the calculated value is a GxP record, yes. The first question already lands it in scope. Trigger recorded: "performs GMP calculation feeding batch release". This spreadsheet is now an inventoried system, and it will need its formulas locked and verified, its cells protected, and version control, exactly the treatment in [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation). Before the scoping exercise, nobody owned it. That is how shadow systems become findings.

### Acceptance criteria

The scoping decision for each system is recorded with the specific trigger that fired (or the rationale for "out of scope"), the decision is reproducible by a second qualified reviewer applying the same tree, and partial-scope systems name the in-scope functions. An undocumented exclusion is the weak point an inspector pulls on, so every "out of scope" needs a written reason, not a blank.

### Roles

Quality owns the scoping procedure and the final call on contested systems. The system owner proposes the classification and provides functional detail. The data integrity or CSV lead adjudicates edge cases and keeps the rationale consistent across the inventory. See [data governance framework](/articles/data-governance-framework).

---

## Step Three: Assign a GAMP Software Category

Once a system is in GxP scope, classify the software so the validation effort fits the product. GAMP 5 uses software categories to scale effort by how much of the system is configured or custom-built, because that is where the risk of defects you introduced (versus defects the vendor introduced and many customers would have found) actually lives.

| GAMP category | What it is | Typical examples | Validation emphasis |
|---|---|---|---|
| Category 1 | The technical platform other software runs on | Operating systems, databases, middleware, virtualization, network OS | Qualified as infrastructure; relied upon by the layered apps; not validated as an application |
| Category 3 | Bought and used the way it ships, with no setup to your process | Firmware-driven instruments, off-the-shelf tools used with default settings, a balance with fixed output | Verify it meets requirements for the intended use; reuse supplier testing |
| Category 4 | A vendor product adapted to your process through settings and workflows, no new code | LIMS, MES, CDS, EDMS, ERP configured to your process via parameters and workflows, no code change | Validate the configuration and the workflows you built; risk-based functional testing of configured functions |
| Category 5 | Software (or logic) written specifically for you, not a stock product | In-house applications, custom code, complex spreadsheet macros, bespoke interfaces and scripts | Full lifecycle: requirements, design, code review, structural and functional testing; highest rigor |

GAMP 5 second edition has no Category 2 (the old firmware bucket was dropped). Two practical notes that trip people up:

- **A single system can span categories.** A configured Category 4 LIMS with a custom-coded interface to the MES has a Category 5 component. Classify the parts honestly; the custom interface earns custom-level scrutiny even though the base product is configured.
- **Configuration is not customization.** Setting parameters, building workflows, and defining user roles inside the vendor's intended configuration framework is Category 4. Writing code that the vendor never anticipated is Category 5. The line is "did you write logic the supplier did not provide a supported mechanism for". Get this wrong in the conservative direction (over-classify) and you waste effort; get it wrong in the permissive direction (under-classify a custom build as configured) and you under-test the riskiest software you own.

The category is an input to effort, not a verdict by itself. It pairs with the risk tier (next step). A Category 5 tool with trivial impact may warrant less than a Category 3 instrument that releases sterile product. GAMP's whole point is that category and risk together set the rigor. The [GAMP 5 framework](/articles/gamp5-csv-framework) and [software supplier assessment](/articles/software-supplier-assessment-csa) articles go deeper on how supplier capability lets you reuse their testing for Category 3 and 4.

### Worked example

The CDS is a vendor product configured with your methods, sequences, and user roles, no custom code: Category 4. The instrument firmware controlling each chromatograph, used as supplied: Category 3. The script someone wrote to auto-export and reformat results into the LIMS load file: Category 5. One "system" in everyday speech, three GAMP treatments, and the script, the smallest piece, gets the most code-level scrutiny because you built it.

---

## Step Four: Assign a Risk or Criticality Tier

GAMP category tells you how the software was built. The risk tier tells you how much it matters. You need both. Risk here is a function of impact (what happens to product quality, patient safety, and data integrity if this system fails or its records are wrong) and, in the broader assessment, probability and detectability. For the inventory-level tier, impact-driven criticality is usually enough; the detailed [quality risk management](/articles/quality-risk-management) assessment refines it later.

A workable three-tier scheme:

| Tier | Definition | Inventory consequence |
|---|---|---|
| High / critical | Direct impact on product quality, patient safety, or batch-release / disposition decisions; or holds critical GxP records whose loss or corruption could harm patients | Full validation rigor; system description per Annex 11; frequent periodic review (often annual); strict change control; DR tested |
| Medium | Indirect impact; supports GxP decisions or holds GxP records but a failure is recoverable and detectable before harm | Risk-based validation; periodic review on a longer cycle (often every 2 years); standard change control |
| Low | Minimal GxP impact; in scope but a failure does not affect a quality decision or a critical record | Lightweight assurance; longest review cycle (often every 3 years); change control proportionate |

The tier drives real downstream behavior, which is the point: it sets validation depth, periodic-review frequency, the change-control path, the backup and disaster-recovery posture, and whether you owe Annex 11's deeper "system description" (data flows, interfaces, security) for that system. Tie the High tier explicitly to the systems that gate [batch disposition decisions](/articles/batch-disposition-decisions) and to systems holding records inside the [data lifecycle and metadata](/articles/data-lifecycle-and-metadata) chain.

### Worked example

- LIMS that holds release-decision data: High. Annual periodic review, full validation, tested DR, system description maintained.
- Environmental monitoring system flagging cleanroom excursions: High, because an excursion drives a quality decision.
- Training LMS: Medium. It is a GxP record (training is a GMP requirement) but a recoverable, detectable failure; biennial review.
- A read-only dashboard that visualizes already-validated LIMS data and feeds no decision: Low, with the caveat that "read-only and decision-free" must actually be true and documented.

### Acceptance criteria

Each in-scope system has a tier, the tier rule is written and applied consistently, the High tier list reconciles with the systems that genuinely gate quality decisions (no critical system hiding in Medium to dodge annual review), and the tier explicitly drives the review frequency and validation depth recorded for that system. A tier with no downstream consequence is decoration, not control.

---

## Step Five: Capture Validation Status and Periodic-Review Obligation

The inventory is not a static census; it is a live status board. For each system, the record carries its validation state and the next action that state implies.

Validation status values that actually mean something:

- **Validated / qualified**, with the validation summary report reference and date. See [validation summary report and release](/articles/validation-summary-report-and-release).
- **In validation**, with the project and target date.
- **Legacy / retrospectively assessed**, where the system predates current standards and was brought under control through a gap assessment and remediation rather than a clean prospective validation. See [retroactive validation of legacy systems](/articles/retroactive-validation-legacy-systems).
- **Not yet validated, in use** (the dangerous state, which should trigger immediate risk assessment and a CAPA, not a quiet inventory row).
- **Retired / decommissioned**, with the date and the data-retention disposition.

Each system also carries its periodic-review due date, derived from its tier. Periodic review confirms the system is still in its validated state, still fit for use, and still under control: it checks accumulated changes, open deviations and CAPAs, incident and problem history, current configuration against the validated baseline, audit-trail review evidence, user access appropriateness, and backup and restore proof. The [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review) article details the review itself; here the inventory's job is to schedule it and prove it is not overdue. An overdue periodic-review column lit up across the inventory is one of the fastest finding-generators an inspector has, because it shows the program is not actually running.

### Worked example: one inventory row

A defensible inventory entry for a single system reads like this:

| Field | Value |
|---|---|
| System ID | SYS-0042 |
| Name | QC Chromatography Data System |
| Business owner | QC Laboratory Manager |
| System owner (IT) | Lab Systems Administrator |
| GxP scope | In scope; trigger: holds release-decision results and signatures |
| GAMP category | 4 (configured); custom export script = component Category 5 |
| Risk tier | High |
| Validation status | Validated; VSR-2024-118, 2024-11-12 |
| Last periodic review | 2025-11-20 |
| Next periodic review due | 2026-11-20 (annual, High tier) |
| Annex 11 system description | Maintained; rev 4 |
| Supplier / version | Vendor X, v8.3, supplier assessment SA-2023-07 |
| DR tested | Yes, 2025-09 restore test passed |
| Records retained / location | Per retention schedule; primary DB + validated backup |

Every column there is doing work. The "next periodic review due" drives the schedule. The "validation status" plus its report reference is your evidence on demand. The Annex 11 system description revision tells you the deep documentation exists and is current. This is the difference between an inventory that runs the program and a list that merely names things.

---

## Step Six: Track Retirement and Decommissioning

Systems do not live forever, and the inventory has to account for their end of life, because retired systems carry their own obligations, mainly around the records they leave behind. Decommissioning a GxP system is a controlled activity, not an IT decision to "turn off the old server".

The retirement obligations the inventory must track:

- **Data retention and access.** Records from the retired system must remain available, readable, and retrievable for their full retention period, which often outlives the system. You either migrate the data to a successor (a validated [data migration](/articles/data-migration-validation) with verified completeness and integrity) or you preserve it in a retained, readable archive with a documented way to retrieve it. Records that become unreadable because the only software that could open them was decommissioned is a classic, avoidable finding.
- **Decommissioning under change control.** The shutdown runs through [change control](/articles/change-control-validated-systems), with a plan covering data disposition, dependency check (does anything else feed from or write to this system?), access removal, and final state.
- **A decommissioning summary record.** What was retired, when, where the data went, how it stays retrievable, and who approved it. This becomes the system's tombstone in the inventory.
- **Status, not deletion, in the inventory.** A retired system stays on the inventory marked "retired" with its decommissioning reference. You do not delete the row, because the data and the obligation persist, and an inspector may still ask about a system you stopped using last year.

### Acceptance criteria

Retirement is controlled when each decommissioning has an approved plan and a summary record, the data disposition (migrated or archived) is verified and the records remain readable and retrievable for their full retention period, dependencies were checked before shutdown, and the inventory shows the system as retired rather than dropping it. The test you can apply yourself: pick a system retired 18 months ago and try to retrieve a specific record from it. If you can, in a reasonable time, in readable form, the retirement was done right.

---

## Maintaining the Inventory: The Living-Document Problem

An inventory is true on the day it is signed and starts decaying the next morning. The failure mode is universal: the initial build is a project with energy and a deadline, and then nobody owns keeping it current. The fixes are procedural and they have to be wired into processes that already happen.

- **Hook it to change control and procurement.** A new system cannot be procured or go live without an inventory entry and a scoping decision; an inventory update is a required, gating step in the change that introduces or retires a system. This is the single most effective control, because it catches systems at the moment they enter, not at the next audit.
- **Hook it to periodic review.** Each periodic review reconfirms the inventory metadata for that system (owner, version, tier, status) as a standing check, so the inventory self-corrects on a rolling basis.
- **Run a periodic completeness reconciliation.** On a defined cycle (often annual), repeat a lightweight version of the multi-source enumeration, IT asset list, procurement spend, and a process spot-check, against the inventory to catch anything that slipped in. Document it; this reconciliation is itself the evidence that the inventory is maintained.
- **Name an accountable owner.** One role owns the master inventory and its currency. Distributed contributors feed it; one owner is accountable for its state. Without a named owner, "everyone" maintains it, which means no one does.

A single, controlled, version-managed master beats a dozen local copies. Store it under [document control](/articles/document-control-fundamentals), version it, and make the controlled copy the only one anyone trusts.

---

## Roles and Responsibilities Across the Inventory Lifecycle

| Role | Owns |
|---|---|
| Inventory owner (CSV / DI lead) | The master inventory, its currency, the scoping and classification rules, the reconciliation cycle |
| System / business owner | Their system's accuracy on the inventory: scope, owner, version, validation status, periodic-review completion |
| IT / system administrator | Technical asset data, infrastructure qualification, decommissioning execution, backup and DR |
| Quality Assurance | Approving the procedure; oversight; challenging completeness and scoping; inspection defense |
| Validation | Validation status truth; periodic review execution; classification input |
| Procurement / sourcing | Routing every new software acquisition through scoping before purchase, so nothing enters off-radar |

The most important seam is the one between procurement and quality. Most shadow systems enter because a team buys a tool to solve a problem and quality never hears about it. Closing that seam, no GxP software acquisition without a scoping decision, prevents more findings than any amount of after-the-fact discovery.

---

## Common 483-Type Mistakes

These are the patterns that recur in inspection observations and warning letters, stated generically.

- **No current inventory at all.** The headline finding this whole article exists to prevent. A firm cannot show a maintained list of its GxP computerized systems, so it cannot show those systems are validated and controlled.
- **Stale inventory.** A list exists but is months or years out of date, missing recently deployed systems and still listing retired ones. From an inspector's view, an out-of-date inventory is barely better than none, because you cannot trust any row.
- **Shadow systems.** Spreadsheets doing GMP calculations, instruments logging unvalidated data, SaaS tools bought outside IT, none on the inventory, none validated. The single most common way a system becomes a finding.
- **Misclassified scope.** A GxP system marked out of scope to dodge validation, or a partial-scope system treated as fully non-GxP. Undocumented scope decisions are the soft spot.
- **Under-classified GAMP category.** A custom build (Category 5) carried as a configured product (Category 4) so it escapes code-level scrutiny, under-testing the riskiest software in the building.
- **Tier with no teeth.** Risk tiers assigned but disconnected from review frequency and validation depth, so a "High" system gets the same light touch as a "Low" one. Or a critical system parked in Medium to avoid annual review.
- **Overdue periodic reviews.** The inventory shows review dates, and a column of them is past due. Proof the program is not running.
- **Retired-but-unretrievable.** A system decommissioned with no verified data retention, so records required for their full retention period can no longer be read. Avoidable and damaging.
- **No owner.** No named accountable owner for the inventory, so it is maintained by committee, which means it is not maintained.

---

## Interview Questions and How to Answer Them

Expect these in a CSV, data integrity, QA, or validation interview.

**"How would you build a GxP system inventory from scratch?"** Triangulate across independent sources, walk every GxP process for data touchpoints, mine procurement and license records, pull IT asset and identity data, interview the bench, and review instruments, then reconcile the lists and disposition every discrepancy. Apply a documented GxP scoping tree to each candidate, then assign a GAMP category and a risk tier. The deliverable is one controlled, owned, dated master with a defined maintenance cycle. The key insight to state: no single source is complete, so the discrepancies between sources are the most valuable output.

**"What is the difference between a GAMP category and a risk tier?"** The category describes how the software was built (infrastructure, non-configured, configured, custom) and scales effort to where defects you introduced live. The tier describes how much the system matters (impact on quality, safety, data integrity) and scales effort to consequence. You need both: rigor is set by category and tier together, not either alone. A Category 5 tool with trivial impact can warrant less than a Category 3 instrument that releases sterile product.

**"A spreadsheet calculates assay results that feed batch release. Is it in scope, and what category?"** In scope, because it creates a GxP record (the calculated value) that drives a release decision; the first scoping question already lands it. It is Category 5 if it contains custom macros or complex logic, or a configured/custom-treated tool otherwise, and it needs locked, verified formulas, protected cells, version control, and an owner. The trap is treating spreadsheets as files rather than systems.

**"How do you keep the inventory current?"** Wire it into processes that already happen: make an inventory update a gating step in change control and a precondition for procuring or retiring any system, reconfirm metadata at every periodic review, run an annual multi-source completeness reconciliation, and name one accountable owner. A standalone "update the list" task always loses to real work; an embedded, gating step does not.

**"What happens to a system when it is retired?"** It goes through controlled decommissioning: a plan, a dependency check, verified data disposition (validated migration or a retained readable archive), access removal, and a decommissioning summary, with the records kept available and retrievable for their full retention period. It stays on the inventory marked retired, not deleted, because the data and the obligation outlive the system.

**"Annex 11 mentions a system description for critical systems. What is that and which systems need it?"** Beyond the inventory line, critical (High-tier) systems need a deeper description of physical and logical arrangement, data flows, interfaces with other systems, hardware and software prerequisites, and security measures. The inventory flags which systems owe it and tracks its currency; the description itself lives with the validation package.

---

## The Durable Principle

The inventory answers one question, completely and on demand: which computerized systems do we rely on for GxP decisions, and for each one, is it in scope, how was it built, how much does it matter, is it validated, when is its next review, and what happens to its data when it dies. If your inventory answers all of that for every system, current as of a recent dated attestation, the foundation under your entire computerized-systems program is sound. If it answers for only some systems, or was last truly accurate two audits ago, you have the most basic gap there is, and it is the one inspectors check first, because everything else, validation, change control, periodic review, data integrity, is impossible to demonstrate without it.

Build the inventory first, classify it honestly, and wire its maintenance into the processes that already run. A list that names systems is paperwork. An inventory that scopes, classifies, schedules, and retires them is a control.
