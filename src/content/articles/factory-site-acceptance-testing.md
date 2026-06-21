---
title: "Factory and Site Acceptance Testing: FAT and SAT in Equipment Delivery"
description: "How to plan, witness, and document Factory and Site Acceptance Testing so vendor milestones de-risk IQ/OQ instead of repeating it. Protocol content, punch lists, evidence reuse, roles, and inspection patterns."
pubDate: 2026-06-20
tags: ["equipment-qualification", "fat", "sat", "commissioning", "iq-oq", "vendor-management", "gmp"]
pillar: "equipment-qualification"
tier: "Intermediate"
---

Factory Acceptance Testing (FAT) and Site Acceptance Testing (SAT) are the two vendor-milestone gates that sit between "we bought a machine" and "we qualified a machine." They are not regulatory deliverables in the way Installation Qualification (IQ) and Operational Qualification (OQ) are, yet they decide if your qualification runs clean or turns into a six-week firefight on the floor. Done well, FAT catches design and build defects at the vendor's shop where they are cheap to fix, and SAT confirms nothing broke in transit and that the equipment integrates with your utilities and systems. Done badly, you discover a mis-wired interlock or an out-of-tolerance load cell during OQ, after the protocol is signed out and the room is committed.

This article covers what FAT and SAT are, the standards that frame them, exactly what goes into the protocols, how to run a witnessed test, how to build and close a punch list, and how to reuse FAT/SAT evidence in IQ and OQ so you test once instead of three times. It is written for validation engineers, project engineers, QA reviewers, and equipment owners who have to actually sit in the vendor's factory with a redline and a camera.

---

## Where FAT and SAT sit in the equipment lifecycle

The full path for a piece of GMP equipment runs roughly: User Requirements Specification (URS) → Functional and Design Specifications → build → **FAT** → ship → install → **SAT** → Commissioning → IQ → OQ → PQ → release for use. FAT and SAT are commissioning-phase activities. They are engineering acceptance steps governed by your contract with the vendor and by your own commissioning and qualification (C&Q) program, not by a CFR clause that says "thou shalt FAT."

The reason they matter to quality, and the reason QA reviews them at all, is reuse. The modern C&Q approach treats engineering verification and qualification as one continuum rather than two disconnected stacks of paper. ASTM E2500-13, *Standard Guide for Specification, Design, and Verification of Pharmaceutical and Biopharmaceutical Manufacturing Systems and Equipment*, and ISPE Baseline Guide Volume 5 (Commissioning and Qualification, Second Edition, 2019) both build on this idea: verification effort should be applied once, scaled to risk, and good engineering documentation should be usable as qualification evidence when it is generated under appropriate controls. FAT and SAT are the richest sources of that reusable evidence. EU GMP Annex 15 (*Qualification and Validation*, 2015 revision) makes this explicit. It states that qualification work performed during FAT may be used in the qualification program provided the results are shown to be unaffected by transport and installation, and that the supplier and documentation are assessed.

> Annex 15, Section 3.2: "Some aspects of qualification may be carried out at the Factory Acceptance Test (FAT) or other stages... FAT may be supplemented by the execution of a SAT following the receipt of equipment at the manufacturing site."

> Annex 15, Section 3.3: "For complex or innovative equipment a Factory Acceptance Test (FAT) may be performed at the vendor prior to delivery."

That single sentence is the whole business case for treating FAT as a quality activity rather than a purely commercial sign-off. If you witness it, document it under controls, and show transport did not invalidate the result, you do not have to repeat that test in IQ or OQ.

### FAT versus SAT in one table

| Attribute | Factory Acceptance Test (FAT) | Site Acceptance Test (SAT) |
|---|---|---|
| Location | Vendor's facility, before shipment | Your site, after installation |
| Primary purpose | Confirm the equipment was built to the agreed design and functions before it leaves | Confirm nothing broke in transit and it integrates with site utilities, network, and systems |
| Conditions | Vendor utilities, simulated or vendor-supplied services, sometimes simulated I/O | Real site utilities (your clean steam, WFI, compressed air, power, network) |
| What it gates | Authorization to ship and pay a milestone | Authorization to begin commissioning/IQ |
| Typical defects caught | Wiring errors, software bugs, missing components, fabrication defects, wrong materials of construction | Transit damage, utility mismatch, network/integration faults, calibration shifts |
| Who hosts | Vendor | Owner |

---

## FAT: what it is, why it matters, and what goes in it

### What FAT is and why you do it

FAT is the structured, documented demonstration at the vendor's site that the equipment meets the specifications in the contract and design documents before it ships. It is the last point at which a defect is the vendor's problem on the vendor's floor with the vendor's spare parts and engineers on hand. Once the machine is crated and shipped, every fix gets slower and more expensive, and integration problems get tangled up with your own utilities and your own schedule.

The quality rationale is risk reduction and evidence capture. The commercial rationale is that FAT is usually tied to a payment milestone and to the title-transfer/ship decision. Both rationales push the same direction: catch everything now.

FAT is most justified for complex, custom, or novel equipment such as bioreactors and skids, filling lines, lyophilizers, automated inspection machines, chromatography and TFF skids, isolators, and any PLC/SCADA-controlled system with significant software. For a simple, off-the-shelf, low-risk item (a benchtop balance, a standard pump) a FAT may be waived in favor of a documented vendor certificate and a stronger SAT. That waive/keep decision should be risk-based and recorded, typically in the Validation Master Plan or a system-level C&Q plan.

### What goes into a FAT protocol

A FAT protocol is a test document the vendor usually drafts and you review and approve before you travel. Good FAT protocols contain:

- **Header and approvals**: equipment ID/tag, vendor name, PO number, protocol number and version, and signature blocks for vendor author, vendor QA, owner engineer, and owner QA.
- **Scope and objective**: what is and is not being tested, and the boundary of the system.
- **Reference documents**: URS, Functional Specification (FS), Design Specification (DS) or Hardware/Software Design Specs, P&IDs, electrical drawings, GA drawings, BOM, software version.
- **Acceptance criteria philosophy**: a clear statement that each test step has a defined expected result and pass/fail decision.
- **Test sections**, each with steps, expected results, actual results, pass/fail, tester initials and date:
  - Documentation and drawing verification (does the as-built match the approved drawings).
  - Component and materials verification against the BOM, including materials of construction (e.g., 316L for product-contact, surface finish such as Ra values where specified) and instrument make/model/range.
  - Utilities and connection check (correct services, voltages, sizes, terminations).
  - Power-up and I/O check (every input and output point, often the longest section for automated equipment).
  - Functional/operational tests (sequences, recipes, start/stop, manual and auto modes).
  - Alarms and interlocks (each safety and process interlock forced and verified).
  - Software tests for any computerized system: access/security levels, audit trail generation, data integrity behaviors, electronic record handling. These map to GAMP 5 (ISPE GAMP 5, Second Edition, 2022) and feed your 21 CFR Part 11 / EU Annex 11 work.
  - HMI/operator screens, parameter ranges, and display verification.
  - Performance/capability demonstrations where feasible at the vendor (e.g., speed, accuracy, leak/pressure tests, weld inspection records).
- **Deviation and punch list section**: a structured log to capture every observation during the FAT.
- **Supporting documentation requirements**: calibration certificates of vendor test instruments, weld maps and borescope reports, pressure test records, material certificates (e.g., mill certs / 3.1 certificates per EN 10204), software version printouts.

### A FAT test step looks like this

Treat every step as a small experiment with a pre-defined expected result. A weak step says "verify alarms work." A strong step is testable and unambiguous:

| Step | Test instruction | Expected result | Actual result | P/F | Tester / Date |
|---|---|---|---|---|---|
| 7.4 | Open the high-temperature interlock by forcing TT-101 above 80.0 °C in the simulator | Heater output de-energizes within 2 s; HMI shows alarm "TT-101 HIGH"; alarm logged to audit trail with user ID and timestamp | Heater off in 1.3 s; alarm displayed and logged with user "vendorop1" at 14:22:07 | P | A.K. 12-Jun |
| 7.5 | Confirm Operator role cannot change the temperature setpoint | "Insufficient privilege" message; no change written; attempt recorded in audit trail | As expected; setpoint unchanged at 37.0 °C; event logged | P | A.K. 12-Jun |

The pattern matters: a concrete, forced condition, a measurable expected result with a numeric tolerance or explicit behavior, and a recorded actual value, not just a checkmark. See [writing-validation-protocols-and-reports](/articles/writing-validation-protocols-and-reports) for the full anatomy of a testable step.

### Acceptance criteria: what "good" looks like at FAT

FAT is complete and acceptable when:

- Every test step has an actual result recorded in real time and a pass/fail decision.
- All critical and major punch list items are resolved and retested, or have an approved disposition with a documented plan and owner.
- No open item compromises safety, GMP, or the decision to ship.
- The deviation log is reconciled, every entry classified, and no unexplained gaps in step numbering or data.
- Required supporting documents (calibration certs, weld/material certs, software version) are present and match the equipment.
- Owner engineering and owner QA (where QA attendance is required by your plan) have signed the FAT report and the ship authorization.

A common and correct practice is to allow shipment with open **minor** punch items but to block shipment on any open critical or major item that affects safety, data integrity, or core function.

---

## SAT: what it is, why it matters, and what goes in it

### What SAT is and why you do it

SAT is the documented re-verification at your site, after installation, that the equipment still meets requirements under real site conditions. FAT proved the machine works on the vendor's bench with the vendor's air and the vendor's simulated signals. SAT proves it still works after a truck ride, a forklift, your clean steam, your network VLAN, and your power quality.

SAT exists for two reasons. First, transport and rigging genuinely damage things: loosened fittings, cracked welds, shifted sensors, drifted calibrations. Second, integration with the real environment surfaces problems FAT structurally cannot see, because the vendor did not have your utilities. A load cell that read perfectly on vendor power can read off on a site with different grounding. A skid that passed leak test in the shop can leak after thermal cycling in transit.

SAT is also the evidence Annex 15 asks for when you want to reuse a FAT result in qualification. The phrase "shown to be unaffected by the transport and installation" is operationalized by SAT: you re-run the transport-sensitive subset of FAT tests at site, and if they pass, you have closed the loop and earned the right to not repeat them in IQ/OQ.

### What goes into a SAT protocol

SAT protocols share the FAT structure but shift emphasis to installation, utilities, integration, and the transport-sensitive re-checks:

- **Installation and physical verification**: equipment located and leveled per layout, anchored, connected to correct utilities, no visible transit/rigging damage, GA drawing match.
- **Utility connection and quality checks**: each utility connected and within spec (e.g., compressed air pressure and dew point, clean steam, WFI, electrical supply, drainage, exhaust). Confirm the equipment receives the service it was designed for.
- **Transport-sensitive re-tests**: a defined subset of FAT tests most likely to be disturbed by shipping, e.g., calibration verification of critical instruments, leak/pressure tests, interlock checks, sensor positioning, alignment.
- **Integration tests**: network connectivity, communication with higher-level systems (historian, MES, LIMS, building management/EMS), printer and barcode integration, time synchronization to the network time source. Time sync is a real data-integrity check; see [time-stamps-and-system-clock-control](/articles/time-stamps-and-system-clock-control).
- **Functional re-confirmation under site conditions**: key sequences, recipes, alarms, and interlocks re-run with real services.
- **Punch list closeout**: verification that punch items deferred at FAT (parts to be shipped, fixes to complete at site) are now closed.
- **References and supporting docs**: same family as FAT, plus the FAT report itself and the punch list carried over.

### A SAT utility check looks like this

| Step | Test instruction | Acceptance criterion | Actual result | P/F | Tester / Date |
|---|---|---|---|---|---|
| 4.2 | Measure compressed air supply pressure at the equipment inlet during operation | 5.5 to 7.0 barg | 6.2 barg | P | R.M. 03-Jul |
| 4.3 | Verify compressed air dew point meets design (ISO 8573-1 class per URS) | Meets specified class | Per cert, within class | P | R.M. 03-Jul |
| 5.1 | Confirm equipment clock synchronizes to site NTP server after power-up | Time within 1 s of network time source; no manual clock edit possible at operator level | Synced, delta 0.2 s; operator cannot edit clock | P | R.M. 03-Jul |

### Acceptance criteria: what "good" looks like at SAT

- All transport-sensitive re-tests pass, demonstrating the equipment survived shipping.
- All utilities connected and verified in spec.
- Integration with site systems confirmed (network, historian/MES/LIMS, EMS, time sync as applicable).
- All FAT-deferred punch items closed and verified, or formally re-deferred with disposition.
- SAT report reviewed and approved; readiness to start IQ/commissioning declared.

---

## Witnessing: how to actually run the test in the room

Witnessing is where FAT/SAT value is won or lost. A test that the vendor self-executes and emails you is worth far less than one you watched, challenged, and documented contemporaneously.

### Before you travel (FAT) or before you start (SAT)

1. **Review and approve the protocol in advance.** Never witness an unapproved protocol. Read every step and ask: is the expected result specific and testable, or is it "works correctly"? Send redlines back to the vendor and get a clean approved version before travel. Owner QA approval of the FAT protocol is a frequent requirement.
2. **Confirm prerequisites are met.** The vendor should have completed internal/dry-run testing. Ask for evidence the system is built complete, software is at the agreed version, and the vendor has done a pre-FAT. Walking into a FAT where the machine is half-built wastes a plane ticket.
3. **Pull the reference set.** Bring or have access to the URS, FS, DS, P&IDs, electrical drawings, BOM, and the requirements traceability matrix. You are checking the build against these, not against the vendor's word. See [user-requirements-and-traceability](/articles/user-requirements-and-traceability).
4. **Agree the rules.** Who records, who witnesses, how punch items are logged and numbered, what counts as critical/major/minor, who can sign, and what happens if a test fails (retest on the spot, defer, or stop).
5. **Bring tools.** Camera (clear any photo restrictions with the vendor first), your own check instruments if you intend to verify the vendor's, blank punch list, and a redline copy of the protocol.

### During execution

1. **Witness, do not narrate.** You are there to see the actual condition forced and the actual result observed. If a step says force TT-101 above 80 °C, watch the value, watch the heater drop out, time it, and confirm the alarm logs. Do not accept "it passed yesterday."
2. **Record contemporaneously.** Actual results get written as they happen, in ink, by the tester, with initials and date. This is good documentation practice and it is also what makes the record defensible as qualification evidence later. See [good-documentation-practices](/articles/good-documentation-practices).
3. **Challenge the boundaries.** Push setpoints to limits, force interlocks, try unauthorized actions, pull a sensor, simulate a fault. The defects you want are at the edges. For computerized systems, actually test access levels, audit trail capture, and data integrity behavior, because these are the things inspectors care about and the things vendors most often gloss over.
4. **Log every observation as a punch item.** No matter how small. Number it, classify it, assign an owner, note the agreed action. Verbal "we'll fix that" with no log entry is how things get lost.
5. **Verify the supporting paper.** Calibration certs for the vendor's test instruments (an interlock verified with an out-of-cal gauge is worthless), weld maps, material certs, software version printout.

### After execution

1. Reconcile every step, every punch item, every actual result. No blanks.
2. Classify and disposition each punch item; decide go/no-go for ship (FAT) or for IQ (SAT).
3. Sign the report per the approved approval matrix.
4. For FAT, issue the ship authorization only when critical/major items are closed.

---

## Punch lists: the most important artifact you carry forward

A punch list (sometimes called a snag list or deficiency log) is the running register of every observed deviation, defect, and open item from FAT and SAT. It is the connective tissue between FAT, SAT, and qualification, and it is one of the first things an auditor will ask to see when they want to know how you managed a new system's introduction.

### What a punch list contains

| Field | Purpose |
|---|---|
| Item number | Unique ID, traceable across FAT and SAT |
| Date raised | When observed |
| Raised by | Who found it |
| Description | The defect/observation, specific and factual |
| Reference | Drawing, step, spec, or requirement affected |
| Classification | Critical / Major / Minor |
| Owner | Vendor or site, named |
| Agreed action | What will be done |
| Target close | Date |
| Closure evidence | Retest result, photo, revised drawing, replaced part |
| Verified by / date | Who confirmed closure |
| Status | Open / Closed / Deferred |

### Classifying punch items

A workable three-tier scheme:

- **Critical**: affects safety, GMP compliance, data integrity, or prevents core function. Blocks ship (at FAT) and blocks IQ start (at SAT). Example: a safety interlock does not de-energize; the audit trail is not capturing changes; product-contact material is the wrong grade.
- **Major**: significant defect that must be fixed but does not by itself block the milestone if a controlled plan exists. Example: an HMI screen shows a wrong engineering unit; a non-critical sensor reads slightly out of tolerance and needs recalibration.
- **Minor**: cosmetic or low-impact. Example: a label misspelled, a cable tie missing, a paint scratch. Can ship/proceed with the item open and tracked.

Keep the criteria written down in the protocol so classification is not argued ad hoc in the room. The principle mirrors how deviations and findings are graded elsewhere in the quality system; see [audit-finding-classification](/articles/audit-finding-classification) and [deviation-management](/articles/deviation-management).

### Closing punch items, and the closure trap

The common failure is not raising punch items, it is closing them. Every closed item needs objective evidence: a retest step that passed, a revised and re-issued drawing, a replaced part with a new cert, a photo of the corrected condition, signed and dated by someone who verified it, not just by the person who promised the fix. A punch list with 40 items marked "closed" and no closure evidence is an audit finding waiting to happen.

Carry the open FAT punch list to SAT, and carry any open SAT items into commissioning/IQ with a documented disposition. Nothing should silently vanish.

### Worked punch list example

| Item | Description | Class | Owner | Action | Closure evidence | Status |
|---|---|---|---|---|---|---|
| FAT-012 | High-pressure interlock did not trip at setpoint; tripped 0.4 bar high | Critical | Vendor | Re-tune trip, retest | Step 7.8 re-executed, tripped at setpoint, photo + signed | Closed |
| FAT-019 | HMI batch screen displays temperature in °F, URS requires °C | Major | Vendor | Correct config, retest | New software v2.3.1 loaded, screen verified °C | Closed |
| FAT-024 | Hopper guard paint scratched | Minor | Vendor | Touch up at site | Carried to SAT-003 | Deferred |
| SAT-003 | Hopper guard paint scratch (from FAT-024) | Minor | Vendor | Touch up | Photo of repaired guard, signed | Closed |
| SAT-007 | Compressed air dew point cert not provided at SAT | Major | Site | Obtain utility cert | EMS/utility cert filed, value in class | Closed |

---

## Reusing FAT/SAT into IQ and OQ

This is the payoff and the part most worth getting right. Reusing means using FAT/SAT evidence to satisfy IQ/OQ requirements rather than re-executing the same tests. It is explicitly sanctioned by Annex 15 and is the operating model of ASTM E2500 and ISPE Baseline Guide 5.

### The conditions for reuse

You can reuse a FAT/SAT test result into qualification when all of these hold:

1. **The test was generated under appropriate controls**: approved protocol, contemporaneous data, qualified test instruments (in calibration), trained executor, defined acceptance criteria. Engineering documentation only becomes reusable qualification evidence if its quality matches qualification expectations. This is the heart of ASTM E2500's "good engineering documentation" idea.
2. **The result is shown to be unaffected by transport and installation** (the Annex 15 condition). For FAT results, this is demonstrated by passing the corresponding transport-sensitive re-test at SAT, or by an engineering rationale that the parameter cannot be disturbed.
3. **The vendor and documentation are assessed.** A supplier assessment supports reliance on vendor-generated test data. See [supplier-vendor-qualification](/articles/supplier-vendor-qualification) and [software-supplier-assessment-csa](/articles/software-supplier-assessment-csa).
4. **Traceability exists.** A matrix maps each requirement to the test (FAT/SAT/IQ/OQ) that verifies it, so QA can see at a glance that every URS line is covered exactly once and where.

### How to design for reuse (do this before FAT, not after)

The decision to reuse is made at planning time, not discovered later. Write your C&Q plan and your FAT/SAT protocols so the right tests are executed under the right controls in the right place:

- Build a **requirements traceability matrix** early and assign each verification to its lowest sensible test event. Put I/O checks, component verification, and software security/audit-trail tests where they naturally live (FAT), and put utility and integration checks at SAT, so IQ/OQ does not duplicate them.
- Define which FAT results are **transport-sensitive** and therefore need an SAT re-test versus which are inherently stable.
- Have **QA approve the FAT/SAT protocols** and define QA witnessing for the tests you intend to reuse. A test you plan to use as OQ evidence should be executed and reviewed to OQ standards.
- State the reuse strategy in the **Validation Master Plan** or system C&Q plan so it is a planned, defensible decision. See [validation-master-plan-and-periodic-review](/articles/validation-master-plan-and-periodic-review) and [commissioning-qualification-astm-e2500](/articles/commissioning-qualification-astm-e2500).

### Worked reuse mapping

| Requirement (URS) | Verified at | Reused in | Justification |
|---|---|---|---|
| Product-contact parts 316L, Ra ≤ 0.5 µm | FAT (material certs + inspection) | IQ | Material cannot change in transit; cert-based, stable |
| All I/O points correctly mapped | FAT (full I/O check) | OQ (component of) | Executed under approved protocol; re-confirmed by SAT functional run |
| High-temperature interlock de-energizes heater | FAT, then SAT re-test | OQ | Transport-sensitive; SAT re-test shows unaffected by shipping |
| Audit trail records changes with user/time | FAT (software test) | OQ / Part 11 evidence | Software config frozen; version verified identical at SAT |
| Compressed air dew point within class | SAT (real utility) | IQ | Cannot be tested at vendor; site utility specific |

The result: instead of re-running the I/O check and interlock tests a third time during OQ, OQ references the controlled FAT execution plus the SAT confirmation, and spends its effort on the things that truly need site execution. See [equipment-qualification-lifecycle](/articles/equipment-qualification-lifecycle) and [validation-deliverables-guide](/articles/validation-deliverables-guide).

> A caution: reuse is a privilege you earn with documentation quality, not a shortcut you assert. If the FAT was vendor-run with no QA approval, no contemporaneous data, and test gear of unknown calibration status, you cannot reuse it, and an inspector will say so. When in doubt, re-test.

---

## Roles and responsibilities

| Role | FAT | SAT | Reuse / overall |
|---|---|---|---|
| Equipment/system owner | Owns acceptance decision; defines requirements; attends | Owns site readiness and acceptance | Owns the system through qualification and use |
| Validation / C&Q engineer | Reviews protocol; witnesses; manages punch list; maps traceability | Plans transport-sensitive re-tests; witnesses | Designs the reuse strategy and traceability matrix |
| Vendor / supplier | Drafts and executes FAT protocol; fixes punch items; provides certs and software | Supports installation and SAT; closes deferred items | Provides assessed documentation that can be reused |
| Quality Assurance | Approves protocol; witnesses critical/reused tests; approves report | Same at site; approves SAT report; approves IQ start | Approves the C&Q/VMP reuse approach; assesses supplier |
| Automation / IT (for computerized systems) | Witnesses software, security, audit trail, data integrity tests | Witnesses network/integration and time sync | Feeds CSV/Part 11 evidence |
| SME (process/utilities) | Confirms functional requirements and process fit | Confirms utility quality and integration | Confirms fitness for intended use |

See [gxp-roles-responsibilities](/articles/gxp-roles-responsibilities) for how these roles map across the broader quality system.

---

## Common mistakes and inspection-finding patterns

These are the recurring ways FAT/SAT goes wrong. None require a company name to recognize; they show up in C&Q programs everywhere.

- **No approved protocol before witnessing.** Witnessing a draft, then the vendor "tidies up" the document after the fact. The record no longer reflects what was actually done. Contemporaneous-record and good-documentation expectations are violated.
- **Vague acceptance criteria.** Steps that say "verify the system operates correctly" with no measurable expected result. The test proves nothing and cannot be reused. Every step needs a specific, testable expected result.
- **Self-certified FAT with no owner witnessing, then full reliance on it.** Trying to reuse vendor-run results into OQ with no QA approval, no calibration evidence for the vendor's test gear, and no contemporaneous data. Inspectors challenge reliance on undocumented vendor testing.
- **Skipping SAT or treating it as a formality.** Reusing FAT results into qualification without demonstrating the result is unaffected by transport and installation, which is exactly the Annex 15 condition. This is one of the more common gaps when programs over-compress.
- **Punch items closed without evidence.** A list of "closed" items with no retest, photo, or signature. Closure verification is missing.
- **Critical punch items deferred to ship or to "fix at SAT" without disposition.** A safety or data-integrity defect carried forward informally. Critical items should block the milestone.
- **No traceability.** Nobody can show which requirement each test covers, so coverage gaps and duplications are invisible, and the reuse argument collapses.
- **Software tests skipped at FAT.** Access control, audit trail, and data integrity behaviors not exercised because "we will do it in CSV later," then never properly done. For computerized systems these are exactly the things that draw findings; integrate them per [gamp5-csv-framework](/articles/gamp5-csv-framework).
- **Calibration of test instruments ignored.** Interlocks and measurements verified with gauges of unknown calibration status, invalidating the data. See [calibration-and-metrology-program](/articles/calibration-and-metrology-program).
- **FAT and SAT documents never reviewed by QA when they are being used as qualification evidence.** Engineering keeps them in a project folder; QA never sees them; then they appear in the qualification package without the controls that justify their use.

---

## Interview-ready questions and how to answer them

**Q: What is the difference between FAT and SAT, in one sentence each?**
FAT is the documented demonstration at the vendor's site that the equipment was built to the agreed design and functions before it ships. SAT is the re-verification at your site, after installation, that nothing broke in transit and that it integrates with your real utilities and systems.

**Q: Are FAT and SAT regulatory requirements?**
Not directly. They are commissioning/engineering activities under your contract and C&Q program. But EU GMP Annex 15 (2015) explicitly recognizes them and allows FAT work to be used in the qualification program if results are shown to be unaffected by transport and installation and the supplier/documentation are assessed. ASTM E2500-13 and ISPE Baseline Guide Volume 5 frame the reuse model.

**Q: How do you reuse a FAT result in IQ or OQ?**
The test must be executed under appropriate controls (approved protocol, contemporaneous data, calibrated test gear, defined acceptance criteria), the supplier and documentation must be assessed, and the result must be shown unaffected by transport and installation, usually by passing the corresponding transport-sensitive re-test at SAT. Traceability maps the requirement to the FAT/SAT test so OQ references it instead of repeating it. You design this at planning time in the VMP or C&Q plan.

**Q: What blocks shipment after a FAT?**
Any open critical item, and any open major item without an approved disposition and plan. Minor items can ship open if logged and tracked. Critical typically means safety, GMP, data integrity, or core function impact.

**Q: A vendor sends you a FAT report they ran themselves, no one from your site attended. Can you use it to qualify the equipment?**
You can use it as supporting information, but you cannot fully reuse it into qualification without more. You would assess the supplier, review the protocol and acceptance criteria, check that test instruments were calibrated and data was contemporaneous, and almost certainly re-execute the critical and transport-sensitive tests yourself at SAT or in qualification. If those controls are absent, re-test.

**Q: How do you classify and close punch items?**
Critical/major/minor against written criteria, each with a named owner, agreed action, and target date. Closure requires objective evidence: a passed retest, revised drawing, replaced part with cert, or photo, signed and dated by a verifier independent of the person who did the fix. Open FAT items carry to SAT; open SAT items carry to IQ with documented disposition.

**Q: What would you witness most carefully on an automated/computerized system at FAT?**
Access control and user roles, audit trail capture (who/what/when, and that it cannot be disabled or edited at operator level), data integrity behaviors, alarm and interlock function, and the software version. These tie directly to 21 CFR Part 11 and EU Annex 11 and are the highest-risk, most-cited areas.

**Q: Why do you need SAT if FAT passed?**
Because FAT ran on vendor utilities and often simulated I/O. Transport and rigging can damage equipment and shift calibrations, and integration with your real utilities, network, and systems can only be verified on site. SAT also provides the Annex 15 evidence that the FAT result survived shipping, which is the condition for reusing it.

---

## Practical tips

- Decide FAT/SAT scope and the reuse strategy during planning, before protocols are drafted. Retrofitting reuse onto a self-run, undocumented vendor test does not work.
- Build the requirements traceability matrix first and let it tell you where each test belongs. It is also your map of what FAT/SAT can save you in OQ.
- Get the FAT protocol from the vendor early enough to redline it, fix vague acceptance criteria, and add the software/data-integrity tests vendors tend to underweight.
- Confirm the vendor has done a real pre-FAT before you travel. A FAT on a half-finished machine burns money and schedule.
- Clear photo and recording rules with the vendor in advance; photos are some of your best closure evidence.
- Verify calibration of the vendor's test instruments before you trust a single measured result.
- Never close a punch item on a promise. Require evidence and an independent verifier signature.
- Carry open items forward explicitly. Nothing should disappear between FAT, SAT, and IQ.
- Treat any test you intend to reuse as qualification evidence to OQ standard: approved protocol, QA witnessing, contemporaneous records.

### Related articles

- [commissioning-qualification-astm-e2500](/articles/commissioning-qualification-astm-e2500)
- [equipment-qualification-lifecycle](/articles/equipment-qualification-lifecycle)
- [equipment-qualification-audit-checklist](/articles/equipment-qualification-audit-checklist)
- [validation-deliverables-guide](/articles/validation-deliverables-guide)
- [user-requirements-and-traceability](/articles/user-requirements-and-traceability)
- [supplier-vendor-qualification](/articles/supplier-vendor-qualification)
- [writing-validation-protocols-and-reports](/articles/writing-validation-protocols-and-reports)
- [gamp5-csv-framework](/articles/gamp5-csv-framework)
- [calibration-and-metrology-program](/articles/calibration-and-metrology-program)
- [validation-master-plan-and-periodic-review](/articles/validation-master-plan-and-periodic-review)
