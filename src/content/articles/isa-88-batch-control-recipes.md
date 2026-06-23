---
title: "Recipe Management and Batch Control: ISA-88 (S88) in Validated Manufacturing"
description: "How ISA-88 structures procedures, unit procedures, operations and phases under an MES, the difference between master and control recipes, and how to run recipe change control in a GMP plant."
pubDate: 2026-06-20
tags: ["isa-88", "batch-control", "mes", "recipe-management", "automation", "manufacturing", "data-integrity", "change-control"]
pillar: "manufacturing-automation"
tier: "Advanced"
---

A batch process is a set of operations run to produce a finite quantity of material, then repeated. Cell culture, chromatography, formulation, tablet compression, lyophilization, fill-finish: almost everything in biotech and pharma manufacturing is a batch operation. ISA-88, often written S88, is the standard that gives those batches a common structure so that the equipment, the control system, the recipe, and the people all describe the process the same way.

If you work in validation, automation, or manufacturing quality, you will meet ISA-88 the moment a Manufacturing Execution System (MES), an electronic batch record (EBR), or a distributed control system (DCS) batch engine shows up in scope. The recipe model in your MES is an ISA-88 model. The audit trail of a batch is an ISA-88 audit trail. The phrase "the phase failed and the operator acknowledged the prompt" is ISA-88 vocabulary. Get the model right and the validation, the data integrity, and the inspection story all line up. Get it wrong and you end up with a recipe library nobody can change safely.

This article covers what ISA-88 actually is, the procedural and physical models, master versus control recipes, how the model maps onto an MES and EBR, how recipe change control works in a validated plant, and the inspection findings that come from getting it wrong.

---

## What ISA-88 is and why it exists

ISA-88 is a family of standards for batch control published by the International Society of Automation (ISA), adopted internationally as IEC 61512. The relevant parts:

- **ANSI/ISA-88.00.01 (Batch Control Part 1: Models and Terminology)**, also published as **IEC 61512-1**. This is the part everyone means when they say "S88." It defines the physical model, the procedural model, the recipe types, and the vocabulary.
- **ANSI/ISA-88.00.02 (Part 2: Data Structures and Guidelines for Languages)**, IEC 61512-2. Defines data models for recipes and production information so systems can exchange them.
- **ANSI/ISA-88.00.03 (Part 3: General and Site Recipe Models and Representation)**, IEC 61512-3. Extends the recipe model above the site level.
- **ANSI/ISA-88.00.04 (Part 4: Batch Production Records)**. Covers the record produced when a batch runs, which is the conceptual basis for the EBR.

ISA-88 is not a GMP regulation. No inspector cites "ISA-88" as a deficiency. What an inspector cites is 21 CFR 211.188 (batch production and control records), 21 CFR 211.186 (master production records), 21 CFR 211.100 (written procedures, deviations), EU GMP Annex 11 (computerised systems), and 21 CFR Part 11 (electronic records and signatures). ISA-88 is the engineering standard that lets you satisfy those regulations cleanly. The link is direct:

- 21 CFR 211.186 requires a **master production and control record** for each product. In an MES this is the **master recipe**, an ISA-88 object.
- 21 CFR 211.188 requires a **batch production record** that is a faithful reproduction of the master, completed during production. That is the **control recipe** executed and the **batch production record** captured, ISA-88 Part 4.
- Annex 11 and Part 11 require that the system controlling those records be validated, access-controlled, and audit-trailed. The ISA-88 procedural model is what you validate.

The quality rationale for the standard is reuse and consistency. Without a layered model, every product recipe is a monolithic program. Change a heating step used by forty products and you touch forty programs, validate forty changes, and create forty chances to make a mistake. With ISA-88, that heating step is one reusable **phase** with verified logic; the product recipes call it. You validate the phase once and reuse it under change control. Reuse is not just an efficiency argument, it is a data integrity and quality argument, because a single verified building block is far less error prone than forty hand-edited copies.

---

## The two models: physical and procedural

ISA-88 separates **what the equipment is** from **what the process does**. This separation is the single most important idea in the standard. The same procedure can run on different equipment; the same equipment can run different procedures. Keeping them apart is what makes recipes portable and equipment reusable.

### The physical (equipment) model

The physical model is a hierarchy of equipment, from the whole site down to a single control element:

| Level | What it is | Example |
|-------|-----------|---------|
| Enterprise | The company | (out of automation scope) |
| Site | A geographic manufacturing location | A fill-finish site |
| Area | A logical or physical production area | Upstream, downstream, formulation |
| Process cell | Equipment grouping that makes a batch | A bioreactor train |
| Unit | Equipment that carries out major processing on one batch at a time | A 2000 L bioreactor, a chromatography skid |
| Equipment module | A functional group of control modules doing a defined task | A media addition manifold, a CIP circuit |
| Control module | The lowest grouping that controls a device | A valve, a pump, a temperature loop |

The **unit** is the level that matters most day to day. A unit processes one batch at a time and is where the procedural logic binds to real equipment. When an operator says "the batch is in BR-3," BR-3 is a unit.

### The procedural model

The procedural model is the matching hierarchy of process actions:

| Procedural level | What it is | Example |
|------------------|-----------|---------|
| Procedure | The full set of actions to make a batch | "Produce drug substance lot" |
| Unit procedure | An ordered set of operations in one unit | "Bioreactor production" |
| Operation | A major processing sequence that takes the unit through states | "Inoculate and grow" |
| Phase | The lowest level that does actual work | "Add media", "Ramp temperature to 37 C", "Hold pH at 7.0" |

The **phase** is where automation actually does something: open a valve, run a pump until a setpoint, wait for a condition, prompt an operator. Phases are the verified, reusable building blocks. Everything above the phase is sequencing and parameter passing.

The two models meet at the unit. A **unit procedure** runs on a **unit**. A **phase** in the procedure commands an **equipment phase** in the unit's control logic. The recipe says "add media to 1500 L"; the equipment phase in the bioreactor unit knows which valve, which flow meter, and which interlocks make that happen. Change the bioreactor and the recipe does not change, because the recipe never named the valve.

### Phase states and the phase state model

Phases are state machines. ISA-88 specifies a defined set of operating states, such as running, paused or held, and aborted, along with the commands that drive the transitions between them, such as start, hold, restart, and abort. This is not academic. When a deviation happens, the batch record shows the phase state transitions: the phase went to HOLDING when the operator pressed hold, sat in HELD for 14 minutes, then RESTARTING. That trail is your evidence of what the system and the operator did, and it is exactly what an investigator reads during an out-of-specification or deviation review.

Practical consequence: the phase state model is part of what you qualify. Your validation has to prove that hold, restart, and abort behave safely from every state the phase can be in, because in real production those commands get pressed at the worst possible moments.

---

## Recipe types: general, site, master, control

ISA-88 defines four recipe types. They are not four copies of the same thing; they are four levels of specificity, and material moves down the chain from generic to executable.

| Recipe type | Scope | Equipment-specific? | Who owns it |
|-------------|-------|---------------------|-------------|
| General recipe | Enterprise level, equipment independent | No | Process development / global tech |
| Site recipe | Adapted to a site's materials and constraints | Partly | Site MSAT / tech transfer |
| Master recipe | Tied to a process cell or unit class, GMP master | Yes (equipment class) | Manufacturing + QA |
| Control recipe | One specific batch on specific equipment | Yes (specific units) | The batch engine at runtime |

### General and site recipes

A **general recipe** is the equipment-independent description of how to make a product: the process, the steps, the parameters, expressed without reference to any particular plant. It is the output of process development and the input to tech transfer. A **site recipe** adapts the general recipe to a particular site, accounting for the materials, units of measure, and equipment classes that site has. In many real plants the general and site recipe layers live in documents and tech transfer packages rather than in the MES, and the MES holds master and control recipes. That is fine and common; the standard does not force all four into one system.

### Master recipe: the regulated object

The **master recipe** is the one quality cares about most, because it is the electronic embodiment of the master production record required by 21 CFR 211.186. It is bound to a class of equipment (for example, "any 2000 L bioreactor in this train") and contains the validated procedure plus the formula and the parameters. Building, reviewing, approving, and changing master recipes is what recipe management mostly is.

### Control recipe: the executed batch

The **control recipe** is created when you start a batch. The batch engine takes the master recipe, binds it to specific physical units (this bioreactor, this pump), resolves any choices, and runs it. The control recipe plus the data captured during the run is the **batch production record** under 21 CFR 211.188 and ISA-88 Part 4. The control recipe is read-only as a template; what changes during a run is the recorded data, the operator entries, and any in-process parameter adjustments allowed by the master recipe's design.

The crisp interview answer: **the master recipe is the approved template (the master production record); the control recipe is one specific execution of it bound to specific equipment, and its completed form is the batch record.** If you can say that and explain why the master is under change control while control recipes are generated automatically, you have the core of the topic.

---

## What goes in a master recipe

ISA-88 describes a recipe as having defined parts. In GMP terms, the master recipe has to carry everything 21 CFR 211.186 demands of a master production record. The parts:

| Recipe component | What it holds | GMP tie-in |
|------------------|---------------|------------|
| Header / administrative information | Recipe name, product, version, status, author, approver, effective date, equipment class | 211.186 identity and approval |
| Formula | Inputs (raw materials, components with quantities), process parameters (setpoints, limits), outputs (product, yield, by-products) | 211.186 component list and theoretical yield |
| Procedure | The ISA-88 procedure: unit procedures, operations, phases, and their ordering | 211.186 processing instructions, 211.188 followed steps |
| Equipment requirements | The equipment class and capabilities the recipe needs | 211.186 equipment identification |
| Other information | In-process controls, sampling points, hold-time limits, operator instructions, calculations | 211.186 in-process controls and sampling |

A few of these deserve detail because they are where validation and data integrity live.

**Process parameters and their limits.** A phase parameter is rarely a single number. It is usually a setpoint with limits: a target, a low and high acceptable range, and sometimes hard interlock limits. "Ramp to 37.0 C, acceptable 36.5 to 37.5, alarm outside 36.0 to 38.0." The recipe must carry these so the executed batch can be checked against them automatically, and so an out-of-range value forces an operator response that is recorded. Where these limits come from (validation studies, the control strategy, ICH Q8 design space) should be traceable. See [quality-by-design-and-doe](/articles/quality-by-design-and-doe) for how the design space feeds parameter ranges.

**In-process controls and sampling.** The recipe names the IPC checks, where they happen, the spec, and what the operator does with an out-of-limit result. Building IPC logic into the recipe is what makes an EBR enforce process order instead of trusting memory.

**Operator instructions and prompts.** Manual steps in a mostly automated recipe are still recipe content. A prompt that says "verify the filter integrity test passed, enter result" with a forced data entry is part of the recipe and part of what you validate.

---

## Mapping ISA-88 onto an MES and EBR

This is where the standard stops being theory. In a modern plant the master recipe lives in the MES (or in the batch module of a DCS), and the executed control recipe becomes the electronic batch record.

### How an EBR is built from the procedural model

An electronic batch record is the procedural model made visible and enforced:

- **Procedure** becomes the whole batch record for a lot.
- **Unit procedures** become the major sections (bioreactor section, harvest section, chromatography section).
- **Operations** become subsections.
- **Phases** become the individual steps with their data fields, prompts, and signatures.

When you read an EBR, you are reading the ISA-88 procedural model top to bottom, with the actual data, timestamps, operator IDs, and signatures filled in. Forced order (the operator cannot start phase 3 until phase 2 completes and is signed), data entry limits (a value outside range triggers a deviation prompt), and review by exception (QA reviews only the steps that flagged) all sit on the procedural model. For the data integrity side of MES and EBR, see [mes-ebr-scada-data-integrity](/articles/mes-ebr-scada-data-integrity) and [batch-record-review-gmp](/articles/batch-record-review-gmp).

### Where the automation runs

The phases that do automated work are usually implemented in a layer below the MES: a PLC, a DCS, or a SCADA-coordinated controller. ISA-88 calls these **equipment phases** and they live in the equipment, not the recipe. The MES recipe references the equipment phase by name and passes parameters; the equipment phase executes against real I/O. This split is deliberate and it is what your validation strategy has to respect: the recipe logic (sequencing, parameters, IPC) is validated at the MES level, and the equipment phase logic (the actual valve and pump control, interlocks) is validated at the controller level, typically as part of automation qualification. See [automation-validation-plc-scada-dcs](/articles/automation-validation-plc-scada-dcs) and [plc-dcs-hmi-fundamentals](/articles/plc-dcs-hmi-fundamentals).

A worked picture of one unit procedure for a bioreactor production step:

```
Procedure: Produce DS Lot
└─ Unit Procedure: Bioreactor Production  (runs on unit class "2000L BR")
   ├─ Operation: Prepare
   │  ├─ Phase: CIP (parameter: cycle = standard)
   │  ├─ Phase: SIP (parameter: hold 30 min @ 121 C)
   │  └─ Phase: Charge media (parameter: target 1500 L, range 1485-1515)
   ├─ Operation: Inoculate & Grow
   │  ├─ Phase: Inoculate (operator prompt: confirm seed lot ID)
   │  ├─ Phase: Control temp (setpoint 37.0 C, alarm 36.0-38.0)
   │  ├─ Phase: Control pH (setpoint 7.00, range 6.90-7.10)
   │  └─ Phase: Sample IPC (VCD, viability; record + check spec)
   └─ Operation: Harvest
      ├─ Phase: Cool (setpoint 12 C)
      └─ Phase: Transfer (to harvest unit; confirm receiving unit ready)
```

Read that as both the recipe and, once it runs and gets filled in with data and signatures, the batch record. The same structure serves design and execution. That is the point of the model.

---

## Building a master recipe: step by step

This is the procedure a manufacturing and automation team follows to create a new master recipe in a validated MES. It assumes the equipment phases and the recipe authoring environment are already qualified.

1. **Confirm the process definition is approved.** The site recipe or tech transfer package must be locked and approved before recipe build starts. Building a master recipe against a moving process definition is the fastest way to rework. Tie the build to a controlled source document.
2. **Confirm the equipment phases exist and are qualified.** You cannot reference a phase that has not been built and tested at the controller level. List the phases the recipe needs and verify each is in the qualified phase library.
3. **Author the procedural structure.** Lay out unit procedures, operations, and phases in the recipe editor, following the process flow. Reuse library phases; do not write one-off logic in the recipe layer if a verified phase exists.
4. **Enter the formula and parameters.** Populate materials, quantities, setpoints, and limits. Source every limit from a controlled document (control strategy, validation report, specification). Record the source so a reviewer can trace each number.
5. **Add IPC, sampling, prompts, and signatures.** Place in-process control checks, sampling instructions, operator prompts, forced data entries, and electronic signature points. Decide which steps need a second-person verification (witness) and configure it.
6. **Configure exception handling.** Define what happens on out-of-range entries, phase failures, holds, and aborts. This is the part most often under-specified and most often the subject of a deviation later. Decide it on purpose.
7. **Simulate and dry run.** Execute the recipe in a test or simulation environment, ideally against simulated I/O, to confirm sequencing, parameter passing, prompts, calculations, and exception paths behave as designed.
8. **Test under the validation protocol.** Run the recipe under an approved OQ/PQ-style test script that challenges normal flow, boundary conditions, and failure paths. Capture evidence. See [writing-validation-protocols-and-reports](/articles/writing-validation-protocols-and-reports) and [validation-deliverables-guide](/articles/validation-deliverables-guide).
9. **Review and approve.** Manufacturing, automation, and QA review the recipe and the test evidence. Approval (electronic signatures) moves the recipe to an approved/effective state. Until then it cannot be used to make product.
10. **Release with an effective date.** Set the version effective. Older versions move to a superseded state, retained for the record but not selectable for new batches.

### Acceptance criteria: what good looks like

- Every phase, parameter, and limit in the recipe traces to a controlled source document. No orphan numbers.
- The recipe reuses qualified library phases; bespoke logic in the recipe layer is the exception and is justified.
- Exception handling is defined for every failure mode the recipe can hit (out-of-range, phase fail, hold, abort, power loss/recovery).
- Test evidence challenges normal flow plus boundaries plus failure paths, not just the happy path.
- The recipe is in an approved, version-controlled state with electronic signatures, an effective date, and a superseded predecessor where applicable.
- A control recipe generated from it binds correctly to real units and produces a batch record that matches the master one for one (211.188 faithful reproduction).

---

## Recipe change control in a validated plant

A master recipe is a master production record. Changing it is changing the master production record, which sits under 21 CFR 211.186, 21 CFR 211.100 (procedures and review of production deviations), Annex 11, and your own change control SOP. Recipe change control is where many plants get into trouble, because recipe changes are frequent, often urgent, and tempting to treat as "just a parameter tweak."

### Why recipe change control is strict

A parameter on a phase can be a critical process parameter. Widening a temperature range, changing a hold time, or altering an addition volume can move product quality. So recipe changes get the full change control treatment: assessment, approval, validation as needed, and a controlled release. The risk rationale: an uncontrolled recipe edit is an uncontrolled change to how every future batch of that product is made, with no deviation, no investigation, and no second set of eyes. That is precisely the failure mode inspectors look for. See [change-control-validated-systems](/articles/change-control-validated-systems).

### The change control procedure for a recipe

1. **Raise the change.** Document what is changing, why, and the requested effective scope (this product, these units). Reference the trigger: a CAPA, a tech transfer update, a process improvement, an equipment change.
2. **Impact and risk assessment.** Determine whether the changed parameter is critical, whether it touches the design space or registered details, whether it requires a regulatory filing, and what revalidation is needed. A change to a non-critical operator prompt is not the same as widening a critical hold-time limit. Tie criticality to the control strategy and risk assessment. See [quality-risk-management](/articles/quality-risk-management) and [csv-risk-assessment-methodology](/articles/csv-risk-assessment-methodology).
3. **Determine regulatory impact.** Some recipe parameters are registered in the filing. Changing them may require a variation or prior approval. ICH Q12 tools (established conditions, post-approval change management) govern what can change with what level of reporting. See [ich-q12-lifecycle-management](/articles/ich-q12-lifecycle-management).
4. **Author the new version in a controlled draft state.** Make the edit in the MES in a draft/under-revision recipe state so the current effective recipe keeps running production untouched.
5. **Test/revalidate proportionate to risk.** A critical parameter change gets challenge testing and possibly process validation impact (a parameter at a new edge may need a PPQ assessment). A typo fix in a prompt gets a documented verification. Do not over-test the trivial or under-test the critical.
6. **Review and approve the new version.** Same approvers as a new recipe: manufacturing, automation, QA. Electronic signatures.
7. **Release with effective date and supersede the old version.** The system retains the prior version (you must be able to reconstruct which recipe version made any historical batch). Set a clear effective point so there is no ambiguity about which version a given lot used.
8. **Verify the first batch.** Heightened review of the first production batch on the new recipe version is a sound control, especially for critical changes.

### Versioning and traceability requirements

Two non-negotiable controls:

- **Every batch record must identify the exact recipe version that produced it.** Annex 11 and 211.188 require you to reconstruct any batch. If you cannot say which recipe version made lot 12345, you cannot reconstruct it.
- **Superseded versions are retained, not deleted.** You keep the full version history under records retention. Deleting a superseded recipe destroys the ability to reconstruct old batches and is a data integrity failure.

The audit trail on the recipe object records who changed what, when, the old and new value, and (good practice) why. This is a Part 11 / Annex 11 audit-trail requirement applied to the recipe, not just to batch data. See [audit-trail-design-and-review](/articles/audit-trail-design-and-review).

### Worked example: a recipe change record

| Field | Entry |
|-------|-------|
| Change ID | CC-2026-0418 |
| Recipe | DS Production, Bioreactor Production unit procedure |
| Current version | 4.2 (effective) |
| Change | Widen harvest VCD IPC range from 18-22 to 16-24 x10^6/mL |
| Trigger | CAPA-2026-0203, recurring near-limit results, supported by additional dataset |
| Criticality | VCD is a critical in-process attribute; change to acceptance range |
| Regulatory impact | Assessed against established conditions per ICH Q12; within reported flexibility, no prior approval, notify-in-annual-report category (documented) |
| Validation | Challenge test of IPC range logic in MES; statistical justification of new range attached; no PPQ re-run needed |
| New version | 4.3 (draft → approved) |
| Approvers | Mfg lead, automation engineer, QA |
| Effective date | After approval, applied to new lots only |
| First-batch verification | Lot 2026-117 reviewed with heightened scrutiny, no issues |

---

## Roles and responsibilities

| Role | Responsibility in recipe and batch control |
|------|--------------------------------------------|
| Process development / MSAT | Owns the general/site recipe and the process knowledge; defines parameters and ranges; supports tech transfer |
| Manufacturing (recipe owner) | Owns the master recipe content; raises and justifies changes; runs batches; owns operator instructions and prompts |
| Automation / control engineer | Builds and qualifies equipment phases; authors recipe procedural structure in MES; configures exception handling; supports testing |
| Validation / CSV | Defines validation strategy; writes and executes protocols for recipes and the MES; ensures test coverage of failure paths |
| Quality Assurance | Approves master recipes and changes; sets and enforces change control; reviews batch records; releases recipes to effective state |
| QC | Owns IPC/sampling specs that the recipe enforces; reviews IPC data in the batch record |
| MES/system administrator | Manages recipe states, version control, user access, and audit trail integrity; does not author or approve recipe content (segregation of duties) |
| Qualified Person (EU) | Relies on the controlled recipe and faithful batch record when certifying a batch under Annex 16 |

The segregation matters. The person who can edit recipe content should not be the same person who approves it, and the system administrator who manages recipe states should not be authoring recipe parameters. This separation is both a Part 11 access-control expectation and a basic quality control. See [gxp-roles-responsibilities](/articles/gxp-roles-responsibilities) and [electronic-signatures-implementation](/articles/electronic-signatures-implementation).

---

## Common mistakes and inspection-finding patterns

These are the recurring problems, framed the way they show up in deviations and inspection observations. No company names, just the patterns.

**Equipment-specific logic baked into the recipe.** Someone hard-codes a valve tag or a unit-specific timing into the recipe layer instead of the equipment phase. Now the recipe only works on one tank, reuse is broken, and a future equipment change forces a recipe change that should not have been needed. The fix is discipline about the physical/procedural separation.

**Recipe parameters not traceable to a source.** A reviewer asks where the 37.0 C setpoint or the 16-24 VCD range came from and there is no controlled document behind it. Inspectors read this as parameters set without a basis, which undermines the control strategy. Every number traces to something approved.

**Recipe changes made outside change control.** A "minor" parameter edit gets made directly in the system without a change record, sometimes by an engineer with broad access. The audit trail shows an edit with no corresponding change control. This is one of the most common and most serious recipe findings, because it is an uncontrolled change to the master production record. Lock down who can edit recipe content and force every edit through change control.

**No version on the batch record / cannot reconstruct.** The batch record does not capture which recipe version ran, or superseded versions were overwritten or deleted. The plant cannot reconstruct how an old lot was made. This is a direct 211.188 and Annex 11 failure.

**Weak or undefined exception handling.** The recipe handles the happy path but nobody decided what happens on a phase failure, a power recovery mid-batch, or an out-of-range entry, so the system does something unvalidated or the operator improvises. Deviations cluster around exactly these moments. Define and test failure paths.

**Open access to recipe authoring and approval by the same person.** No segregation of duties: the author approves their own recipe, or a shared/generic login edits recipes. Part 11 access-control and audit-trail findings follow. See [csv-cybersecurity-access-control](/articles/csv-cybersecurity-access-control).

**Audit trail on recipe changes not reviewed.** The recipe object has an audit trail but nobody reviews it, so unauthorized or unexplained edits go unnoticed. Recipe audit trail review belongs in the periodic review and the change verification. See [operationalizing-audit-trail-review](/articles/operationalizing-audit-trail-review).

**Treating the EBR as a PDF instead of an enforced procedure.** A so-called electronic batch record that is really a fillable form without forced order, range checking, or exception logic gives none of the data integrity benefit and still carries all the validation cost. If the procedural model is not actually enforced, you have a paper process on a screen.

---

## Interview-ready questions and answers

These are the questions that come up in interviews for automation, MES, validation, and manufacturing quality roles, and in inspector questioning on the floor.

**Q: What is ISA-88 and why does it matter in GMP?**
It is the batch control standard (IEC 61512) that defines the physical and procedural models, the recipe types, and the vocabulary for batch manufacturing. It matters because the MES master recipe is the electronic master production record (21 CFR 211.186) and the executed control recipe plus its data is the batch record (211.188). The standard gives you reuse, consistency, and a clean structure to validate.

**Q: Explain the difference between a master recipe and a control recipe.**
The master recipe is the approved, equipment-class-bound template under change control, the electronic master production record. The control recipe is one specific execution, generated by the batch engine, bound to specific physical units, and its completed form is the batch record. You change masters under change control; control recipes are generated automatically per batch.

**Q: Walk me through the procedural model.**
Procedure, unit procedure, operation, phase. The procedure makes the whole batch; a unit procedure runs in one unit; an operation is a major processing sequence; a phase is the lowest level that does actual work like adding media or holding a temperature. Phases are the reusable, verified building blocks; everything above is sequencing and parameter passing.

**Q: Why separate the physical model from the procedural model?**
So recipes are portable across equipment and equipment is reusable across products. The recipe says "add media to 1500 L"; the equipment phase in the unit knows the valve and pump. Change the unit and the recipe is untouched because it never named the hardware. Mixing them breaks reuse and forces unnecessary changes.

**Q: How do you control a recipe change?**
Through change control: raise the change, assess impact and criticality, determine regulatory/filing impact (ICH Q12 established conditions), author the new version in a draft state so production keeps running on the current one, test proportionate to risk, get manufacturing/automation/QA approval with electronic signatures, release with an effective date, supersede and retain the old version, and verify the first batch.

**Q: How do you know which recipe version made a given lot?**
The batch record captures the exact recipe version. Superseded versions are retained, never deleted. That is what lets you reconstruct any batch, which Annex 11 and 211.188 require.

**Q: Where does the automated phase logic live and how is it validated?**
In the equipment layer (PLC/DCS/SCADA) as equipment phases, not in the recipe. The recipe references them and passes parameters. The recipe logic is validated at the MES level; the equipment phase logic is validated as part of automation qualification at the controller level.

**Q: What are the most common recipe-related inspection findings?**
Recipe edits outside change control, parameters with no traceable source, inability to reconstruct which version made a lot, deleted superseded versions, no segregation of duties on authoring versus approval, and undefined exception handling. Each maps to a specific regulation (211.186, 211.188, Annex 11, Part 11).

**Q: What is the phase state model and why do you care?**
Phases are state machines with standard states (idle, running, held, holding, restarting, stopped, aborted, and so on) and commands (start, hold, restart, abort). You care because the state transitions are recorded in the batch record and are your evidence during deviation and OOS investigations, and because you must validate that hold/restart/abort behave safely from every state.

---

## Practical tips

- **Keep the phase library small, verified, and reused.** A lean library of well-tested phases beats a sprawl of near-duplicates. Each new bespoke phase is new validation and new risk.
- **Source every parameter limit in the recipe to a controlled document and record the link.** When a reviewer or inspector asks "where did this number come from," you want an answer in seconds.
- **Design exception handling before you build the happy path.** Decide on purpose what happens on phase failure, hold, abort, and power recovery. These are where deviations cluster.
- **Lock recipe authoring and approval to separate roles and force every edit through change control.** No standing edit access for engineers on effective recipes. The audit trail should never show an edit without a matching change record.
- **Make the EBR actually enforce the procedural model.** Forced order, range checks, forced data entry on prompts, and review by exception are the point. A fillable form gives you the cost without the benefit.
- **Put recipe audit-trail review into periodic review and change verification.** A trail nobody reads is not a control.
- **Validate failure and boundary paths, not just normal flow.** Inspectors and reality both probe the edges.

---

## Related articles

- [mes-ebr-scada-data-integrity](/articles/mes-ebr-scada-data-integrity) : data integrity in MES, EBR, and SCADA
- [batch-record-review-gmp](/articles/batch-record-review-gmp) : reviewing the executed batch record
- [automation-validation-plc-scada-dcs](/articles/automation-validation-plc-scada-dcs) : validating the control layer that runs the phases
- [plc-dcs-hmi-fundamentals](/articles/plc-dcs-hmi-fundamentals) : the controllers underneath the equipment phases
- [change-control-validated-systems](/articles/change-control-validated-systems) : change control mechanics for validated systems
- [gxp-manufacturing-systems](/articles/gxp-manufacturing-systems) : the broader manufacturing systems picture
- [process-historian-data-integrity](/articles/process-historian-data-integrity) : capturing and protecting process data
- [ich-q12-lifecycle-management](/articles/ich-q12-lifecycle-management) : established conditions and post-approval change
- [writing-validation-protocols-and-reports](/articles/writing-validation-protocols-and-reports) : protocols for testing recipes and the MES
- [quality-risk-management](/articles/quality-risk-management) : risk assessment behind change and validation decisions
