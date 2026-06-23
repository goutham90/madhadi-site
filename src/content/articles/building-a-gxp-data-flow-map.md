---
title: "Building a GxP Data Flow Map"
description: "A practical method to map how GxP data moves from creation to archive, find where it can be altered, deleted, or orphaned, and use the map to set data criticality and audit trail review scope."
pubDate: 2026-06-22
tags: ["data-integrity", "data-flow-map", "data-lifecycle", "audit-trail", "GxP", "data-governance"]
pillar: "data-integrity"
tier: "Intermediate"
---

A data flow map is a picture of where a piece of GxP data lives, how it moves, who can touch it at each step, and where it could be quietly changed or lost. It sounds like documentation busywork until you watch an inspector use one. They do not read it for completeness. They read it to find the seam you did not control: the manual export, the spreadsheet nobody validated, the shared folder where files can be overwritten, the instrument that writes locally before anything reaches the validated system. A good map turns those seams from blind spots into a list of controls you can show.

Inspectors increasingly ask for these maps by name. EU and PIC/S guidance both point at data lifecycle thinking, and a flow map is the most direct way to demonstrate it. More usefully, the map is not just an inspection artifact. It feeds two things you have to get right anyway: which data is critical (so you can size controls to risk) and which audit trails you actually have to review (so review stays finite and defensible). This article gives you the method to build one, the way to read it for risk, and the way to turn it into criticality and review scope. If you are new to the underlying ideas, start with [the data lifecycle and metadata](/articles/data-lifecycle-and-metadata) and [data criticality and data risk](/articles/data-criticality-and-data-risk).

---

## What a Data Flow Map Is, and Why It Exists

### The concept

A data flow map traces a defined GxP data element, or a defined data set, across its full life: create, modify, transfer, review, store, archive, and eventually retire or destroy. At each stage it records where the data physically and logically sits, the system or medium holding it, who can read it, who can change it, how it moves to the next stage, and what control protects it during the move and at rest.

The unit of the map matters. You are not mapping "the LIMS". You are mapping a result, or a batch record, or an environmental monitoring reading, as it travels through the LIMS and everything the LIMS hands off to. The system is a container the data passes through. The data is the thing you follow.

### Why it is required (regulation and risk)

No single regulation says "thou shalt draw a data flow map" in those words, but several converge on the expectation. EU GMP Annex 11 expects an inventory and risk management of computerized systems and treats data integrity across the system lifecycle. The PIC/S guidance PI 041, "Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments", is explicit that firms should understand the data lifecycle and where data is vulnerable, and a flow map is the practical form that understanding takes. The MHRA "GXP Data Integrity Guidance and Definitions" (March 2018) frames integrity controls around the data lifecycle and asks firms to identify where records can be created, amended, or deleted. The FDA guidance "Data Integrity and Compliance With Drug CGMP: Questions and Answers" (final, December 2018) ties controls to the criticality of the data, which you cannot judge without seeing how the data flows and what depends on it.

> Annex 11 (clause 4.3) calls for a current inventory of the GxP systems in use, set out with the integrity-relevant function each one performs, and the guidance treats data integrity as a lifecycle property, not a point control.

The risk rationale is simpler than the citations. Data integrity failures almost never happen inside a well-validated system that captures its own audit trail. They happen at the boundaries: when data is exported to a spreadsheet, copied to a shared drive, transcribed onto paper, emailed, or held locally on an instrument before it reaches anything controlled. Those boundaries are exactly what a flow map exposes. If you cannot draw the boundary, you are not controlling it.

### Acceptance criteria for "we have a data flow map"

A map is real, not decorative, when it does four things. It names the data element, not just the system. It shows every transfer step including the manual and informal ones. It identifies, at each step, who can alter or delete the data and what stops them. And it links to the controls and the criticality decision, so a reader can trace from a vulnerability to the thing that mitigates it. A diagram with three boxes and two arrows that says LIMS, Reviewer, Archive is not a map. It is a logo.

---

## The Six Stages You Are Mapping

Before the method, fix the stages in your head, because the whole map hangs on them. Different guidances slice the lifecycle slightly differently, but this six-stage frame is enough and maps cleanly onto how inspectors think.

| Stage | What happens | The integrity question at this stage |
|---|---|---|
| Create | Data is generated: an instrument acquires it, an operator enters it, a calculation produces it | Is it captured completely and attributably at the source, with metadata? |
| Modify | Data is edited, recalculated, reprocessed, corrected | Is every change recorded with old value, who, when, why, and can it be hidden? |
| Transfer | Data moves between systems, media, or locations | Does it move intact and verified, or can it be altered or dropped in transit? |
| Review | A second person checks the data and its trail | Is the reviewer independent, and do they see the original, not a curated copy? |
| Store | Data sits in a live system for routine retrieval | Is it protected from change and loss while it is the record of record? |
| Archive | Data is moved to long-term retention | Is it readable, restorable, and unaltered for the full retention period? |

The transitions between stages are where the action is. Create-to-store inside one validated system is usually safe. Create on an instrument, then transfer to a spreadsheet, then transfer again to LIMS, with a review somewhere in the middle, is where data gets hurt. Map the transitions as carefully as the stages.

---

## The Method: Building the Map Step by Step

This is the part to actually do. The method works for one data element at a time. Pick a high-value element first (a finished-product release result, a batch disposition record, an environmental monitoring reading) because that is where the practice pays off fastest and where an inspector will look first.

### Step 1: Scope the data element

Write one sentence naming the data and its boundaries. "The assay result for finished drug product, from acquisition on the HPLC through to the released certificate of analysis and its archive." Decide what is in and what is out. If you try to map "all QC data" at once you will produce mush. One element, end to end, then the next.

### Step 2: Walk it forward with the people who do the work

Do not draw the map at your desk from the SOP. The SOP is the intended flow. The real flow includes the workaround the analyst uses when the interface is down, the local copy the engineer keeps "just in case", the spreadsheet a supervisor built three years ago that everyone now depends on. Sit with the analyst, the reviewer, and the system admin and walk the data from the instrument to the archive, asking at every step: where does it go next, who touches it, and what do you do when the normal path fails. The failure paths are where the worst seams hide.

### Step 3: Record each step in a structured row

For every stage and every transition, capture a fixed set of attributes. A table is enough; you do not need a tool. The columns that matter:

| Attribute | What to capture | Why |
|---|---|---|
| Step | Create / Modify / Transfer / Review / Store / Archive | Anchors the row to the lifecycle |
| Location and system | Instrument local disk, CDS, LIMS, shared drive, paper form, archive store | Tells you where the data physically is |
| Format | Dynamic electronic, static PDF, paper, flat file | Drives true-copy and readability questions |
| Who can read | Roles with read access | Confidentiality and review independence |
| Who can modify or delete | Roles, accounts, and any shared logins | The single most important integrity column |
| Audit trail at this step | Present and Tier 3, present but weak, or none | Feeds the review-scope decision later |
| Transfer mechanism | Validated interface, manual export, transcription, email | Manual and informal mechanisms are the risk |
| Control in place | What stops unauthorized change or loss | Lets you map vulnerability to mitigation |

The "who can modify or delete" column is where most maps either earn their keep or quietly lie. Push on it. "The system controls that" is not an answer. Which role, holding which permission, on which account, with what second control? If a single administrator account can both edit a result and clear the trail of the edit, that has to land on the map as a vulnerability, not get smoothed over.

### Step 4: Draw the visual flow

Once the rows exist, render them as a left-to-right flow so a reader can see the path at a glance and find the boundaries fast. Keep the table as the detail and the diagram as the index into it. A simple linear flow for a clean case looks like this:

<div class="flow">
  <div class="flow-step">HPLC acquires result (CDS, dynamic)</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Validated interface to LIMS</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Analyst review in LIMS</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">QA approval and CoA</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Archive (read-only, retention 11y)</div>
</div>

The map earns its value when the real flow is messier than that, and it usually is. The version that finds problems shows the branch off the clean path:

<div class="flow">
  <div class="flow-step">HPLC acquires result (CDS, dynamic)</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Manual export to shared-drive spreadsheet</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Re-key into LIMS</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Review of LIMS value only</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Archive of LIMS record</div>
</div>

That second flow contains three findings before anyone says a word: an unvalidated spreadsheet that can be edited with no trail, a manual re-key with no documented verification, and a review that looks at the re-keyed number instead of the dynamic original. The map made all three visible. A purely narrative description would have buried them.

### Step 5: Mark the vulnerability points

Go back over every transition and tag it against three failure modes. This is the analytical heart of the exercise.

- **Can be altered.** Anywhere a value can be changed without a complete record of the change. Editable spreadsheets, paper before a verified transcription, local instrument files, any field where the audit trail is off or below Tier 3.
- **Can be deleted.** Anywhere a record can be removed without a surviving, protected record of the deletion. Local disks that get cleared, files on a share with delete permission, any system where an admin can both delete data and erase the deletion.
- **Can be orphaned.** Anywhere data can exist in one place but not reach the next, so the official record is incomplete. Instrument runs that never make it to LIMS, exported files that get superseded, results generated and discarded before reporting.

Use a simple, visible mark on the map. The goal is that a reader (you, an auditor, an inspector) can scan it and immediately see the three or four points that carry the risk, rather than reading the whole thing to find them.

### Step 6: Attach the control and the residual risk

For every marked vulnerability, record the control that addresses it and what risk is left over. A manual export marked "can be altered" might carry the control "exported file is a static PDF with a checksum, original dynamic record retained in CDS and is the record of record". That turns a raw vulnerability into a managed one and gives you the exact sentence to say when an inspector points at it. Where no adequate control exists, the residual risk column says so, and that line becomes a remediation item rather than a surprise during an audit.

### Step 7: Keep it current under change control

A map is true on the day you draw it and decays from there. A new interface, a system upgrade, a process change, a new instrument: any of these can reroute the data. Tie the map to [change control](/articles/change-control-validated-systems) so that a change which touches data flow triggers a map update, and review the map on a periodic cycle for each major data element. An out-of-date map is worse than none, because it tells an inspector you believe a flow that no longer exists.

---

## Reading the Map for Risk

A finished map is an instrument for finding the same patterns that show up in enforcement actions. Here is what to look for.

**Manual transfers.** Every arrow that is a person copying, exporting, transcribing, or emailing is a candidate failure point. Validated system-to-system interfaces move data the same way every time and can be verified once. Manual steps vary with the person and the day. List every manual transfer on the map and ask, for each, whether the move is verified and whether the source survives the move.

**Spreadsheets in the path.** A spreadsheet that does a GxP calculation or holds a GxP value between two systems is one of the most common uncontrolled links. If a spreadsheet appears on the map, it needs the same scrutiny as a system: who can change the formulas, is the calculation validated, is it protected from edits, and does an audit trail exist. [Infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation) covers how to bring one under control. Many maps reveal a spreadsheet nobody realized was load-bearing.

**Local-before-validated capture.** Instruments that write to a local disk first, then push to the validated system, create a window where the local file can be altered or deleted before anything controlled sees it. The map should show the local store explicitly, not skip from instrument to LIMS as if the local copy did not exist.

**Reviews of copies, not originals.** When the review step sits downstream of a transfer, check what the reviewer actually opens. Reviewing a re-keyed LIMS value instead of the dynamic CDS original means the review never touches the record that carries the real audit trail. The map shows this as a review box positioned after a transfer, with the original sitting unreviewed upstream. This is the same hybrid blind spot covered in [audit trail design and review](/articles/audit-trail-design-and-review).

**Shared and overwrite-capable storage.** Any shared drive or folder in the path where files can be overwritten or deleted is an integrity hole. The map should flag the storage location's permissions, not just its existence.

---

## From Map to Criticality and Review Scope

The map is not the destination. Its real payoff is that it feeds two decisions you have to make anyway, and makes them defensible.

### Feeding data criticality

[Data criticality and data risk](/articles/data-criticality-and-data-risk) walks through the scoring; the map is what makes the scoring honest. Criticality asks how much a decision depends on the data and how bad it is if the data is wrong. The flow map shows you exactly which decisions consume the data downstream. A reading that feeds batch release is more critical than one that feeds an internal trend chart, and the map is where you see which is which because it shows where the data ends up. Use the map to set criticality, then use criticality to size the controls back along the flow: the more critical the data, the tighter the control needed at each alter, delete, and orphan point.

### Feeding audit trail review scope

This is the most practical use, and the one inspectors reward. Reviewing every audit trail entry in every system is impossible and pretending otherwise produces fictional review records. The 2018 FDA Q&A guidance scopes routine audit trail review to the data that matters most: finished product result changes, run sequence changes, sample identity changes, and critical process parameters. The flow map tells you precisely where those high-criticality data elements live and which audit trails carry their change history. That intersection (high criticality, plus the trail that records its changes) is your review scope.

The logic runs in a clean line:

<div class="flow-v">
  <div class="flow-step">Map the data element end to end</div>
  <span class="flow-arrow">&darr;</span>
  <div class="flow-step">Set criticality from what the data decides downstream</div>
  <span class="flow-arrow">&darr;</span>
  <div class="flow-step">Identify which audit trails hold the critical data's changes</div>
  <span class="flow-arrow">&darr;</span>
  <div class="flow-step">Scope routine review to those trails, by exception</div>
</div>

The companion article [operationalizing audit trail review](/articles/operationalizing-audit-trail-review) builds the review program itself. The point here is that the map is what justifies the boundary of that program. When an inspector asks why you review some trails routinely and not others, the answer is not "resourcing". The answer is the map plus the criticality decision: here is where the critical data flows, here are the trails that record its changes, that is what we review, and here is why the rest is lower risk. That is a defensible scope. Without the map it is a guess.

---

## A Worked Example: An Environmental Monitoring Reading

Walk one element all the way through to see the method produce something usable.

**Scope (Step 1).** A viable air-count result from an aseptic fill area, from the plate read through to the batch disposition input and archive.

**The flow as walked (Steps 2 to 4).** The microbiologist reads the plate and enters the count into a validated LIMS micro module. The count feeds a trend and contributes to the batch's environmental summary, which is an input to disposition. But the walk-through surfaces a wrinkle: when the LIMS micro module is slow at month-end, the team records counts on a paper worksheet first and enters them into LIMS later in the day. So the real flow is:

<div class="flow">
  <div class="flow-step">Plate read, count on paper worksheet</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Entry into LIMS micro module (later)</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Trend + batch EM summary</div>
  <span class="flow-arrow">&rarr;</span>
  <div class="flow-step">Disposition input, then archive</div>
</div>

**The structured rows (Step 3, abridged).**

| Step | Location | Who can modify | Audit trail | Transfer | Control |
|---|---|---|---|---|---|
| Create | Paper worksheet | Anyone with the worksheet | None (paper GDocP only) | n/a | GDocP: ink, single-line correction, initials |
| Transfer | Paper to LIMS | Person entering | None on the transfer itself | Manual transcription | Second-person verification of entry |
| Modify | LIMS micro module | Micro analyst, admin | Tier 3 present | n/a | Reason prompt on edit |
| Store | LIMS | Admin | Tier 3 | n/a | Append-only audit table |
| Archive | LIMS archive | None | Retained with record | Automated | Read-only, restore tested |

**Vulnerability marks (Step 5).** Two marks. The paper worksheet "can be altered" and "can be orphaned": a count could be changed before entry, or a worksheet could be lost and never entered, with the official LIMS record then incomplete. The manual transcription "can be altered": a number could be mis-entered or deliberately changed between paper and LIMS.

**Controls and residual risk (Step 6).** The transcription gets a documented second-person verification, closing most of the alteration risk. The orphan risk on the paper worksheet is addressed by a controlled, pre-numbered worksheet log reconciled against LIMS entries at month-end, so a missing worksheet is detectable. Residual risk after both: low, and explainable.

**What the map then drives.** Criticality is high (the reading feeds disposition of a sterile product). So the LIMS micro audit trail for these counts goes into routine review scope, the paper-to-LIMS reconciliation goes into the periodic review, and the worksheet control goes into the procedure. One mapped element produced a criticality call, a review-scope decision, and two concrete controls, and it surfaced a paper workaround the SOP did not mention. That is the whole point.

For the program around this kind of reading, see [the environmental monitoring program](/articles/environmental-monitoring-program); for the orphan-detection logic generalized, see [chromatography data system integrity](/articles/chromatography-data-system-integrity), which covers the injection-to-result reconciliation that catches orphaned data in the lab.

---

## Roles and Responsibilities

A flow map fails when no one owns it or when it is built by the wrong people. Map the ownership the same way you map the data.

| Role | Owns |
|---|---|
| Data or system owner | That a map exists for the data their system handles, is current, and is reviewed |
| Data integrity / data governance lead | The method, the template, consistency across maps, and the criticality-to-review linkage |
| Process owner (lab, manufacturing, clinical) | Walking the real flow honestly, including workarounds; keeping the map true to practice |
| IT / system administrator | Accurate input on access, transfer mechanisms, storage permissions, and archive controls |
| Quality Assurance | Approving the map and the controls it drives; using it in inspection defense |
| Validation | Confirming the flow matches the validated state; flagging drift after change |

The non-negotiable: the map must be built with the people who actually move the data, not only from documentation. A map drawn purely from SOPs records the intended flow and misses every workaround, which is precisely where the integrity risk lives. The [data governance framework](/articles/data-governance-framework) article covers how this ownership sits inside the broader governance structure.

---

## Common Mistakes and Inspection-Finding Patterns

These are the recurring failures, stated generically.

- **Mapping systems instead of data.** A diagram of system boxes and interfaces that never follows an actual data element end to end. It looks like a map and answers none of the integrity questions.
- **Drawing the intended flow, not the real one.** Built from the SOP, so every manual workaround, local copy, and shadow spreadsheet is invisible. Inspectors find the workaround in the room and the map never showed it.
- **Skipping the boundaries.** The map jumps from instrument to LIMS as if no local file, export, or transcription happened in between, hiding the exact steps where data is most exposed.
- **No "who can modify or delete" detail.** The map shows the path but not who can change the data at each step, which is the one column that drives most integrity risk.
- **A map that goes nowhere.** It exists, but it does not feed criticality or review scope, so it is an inspection prop rather than a working control.
- **Stale maps.** Built once for an audit, never updated, now describing a flow that changed two upgrades ago.
- **Orphan blind spots unmarked.** The map shows transfers but never asks where data could exist in one place and not the next, so testing-into-compliance style gaps are not surfaced.
- **Spreadsheets treated as furniture.** A load-bearing spreadsheet sits in the path unflagged, unvalidated, and editable, because it was never recognized as a system.

---

## Interview Questions and How to Answer Them

Expect these in data integrity, QA, and validation interviews.

**"What is a data flow map and why would you build one?"** It traces a defined GxP data element across its lifecycle (create, modify, transfer, review, store, archive), recording at each step where the data sits, who can change it, and what controls it. You build it to find where data can be altered, deleted, or orphaned, especially at the boundaries between systems, and to feed the criticality and audit-trail-review-scope decisions. It also answers an increasingly common inspector request directly.

**"Where do data integrity problems actually occur, and how does a map help?"** At the boundaries, not inside well-validated systems: manual exports, transcription, spreadsheets between systems, local instrument files, shared drives. A map makes those boundaries visible as discrete steps so they can be controlled rather than assumed away.

**"How do you build one so it reflects reality?"** Walk the data with the people who handle it, not from the SOP, and specifically ask what they do when the normal path fails. The workarounds are where the risk lives, and only the people doing the work know them.

**"How does a flow map connect to audit trail review?"** The map shows where the high-criticality data flows and which audit trails record its changes. That intersection is your routine review scope. It is what makes the boundary of your review program defensible instead of arbitrary, which is exactly what an inspector probes.

**"What three failure modes do you look for on a map?"** Can be altered (changed with no complete record), can be deleted (removed with no surviving protected record), and can be orphaned (exists in one place but never reaches the next, so the official record is incomplete). Every transition gets checked against all three.

**"An inspector asks for your data flow map and you do not have one. What do you do?"** Be honest that a formal map does not exist yet, then demonstrate the underlying control: the system inventory, the criticality assessments, the audit trail review scope and its rationale. Then commit to building the maps, starting with the highest-criticality data, because the map is the artifact that ties those existing pieces together.

---

## The Durable Principle

Follow the data, not the system. A system inventory tells you what you own. A data flow map tells you what can go wrong, because it shows the data crossing every boundary where control is easy to lose: the export, the transcription, the spreadsheet, the local disk, the shared drive. Build the map for one critical data element at a time, with the people who actually move it, mark every point where data can be altered, deleted, or orphaned, attach a control to each, and then use what you learned to set criticality and to draw the boundary of audit trail review. Do that and the map stops being documentation. It becomes the thing that tells you, before an inspector does, exactly where your data is exposed.
