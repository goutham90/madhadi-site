---
title: "How a Validation Project Actually Runs, Start to Finish"
description: "A plain-language walkthrough of a validation project from the first trigger to release and beyond: the phases, who does what, the documents each step produces, the approval gates, and the regulations behind them."
pubDate: 2026-06-22
tags: ["validation", "project", "foundations", "iq-oq-pq", "csv", "lifecycle"]
pillar: "csv-csa"
tier: "Beginner"
---

If [why we validate](/articles/why-validation-matters) is the idea, this is the journey. A validation project is a small, structured project with a clear beginning, middle, and end. It starts when something new or changed needs proving, and it finishes when you can say, with signed evidence, that the thing is fit for use. This article walks through that journey in plain terms: what happens at each step, who is involved, the document that comes out, and the approval gate you pass before moving on.

You do not need a technical background. By the end you will be able to picture how a real validation runs and why it takes the shape it does.

## The shape of a validation project

Almost every validation, whether it is a software system, a piece of equipment, or a manufacturing process, follows the same arc:

```
 TRIGGER -> PLAN -> SPECIFY -> ASSESS RISK -> BUILD -> WRITE TESTS -> EXECUTE -> REPORT -> RELEASE -> MAINTAIN
   |         |        |            |            |          |            |          |          |          |
 decide    Valid-    URS,        focus the   install/   IQ/OQ/PQ      run the    Summary   approved   change
 it needs  ation     then FS     testing on  configure  protocols     tests,     Report,   for use,   control,
 valida-   Plan      and Design  the real    or         (pre-         record,    fit-for-  handed to  monitoring,
 tion                Spec        hazards     develop    approved)     fix fails   use call  operations periodic review
```

The first nine steps are the project. The last one, maintain, is the rest of the system's life. Each arrow is usually a Quality Assurance approval gate: you do not move on until the previous step is reviewed and signed.

## Step by step

### 1. The trigger and the first decision

A validation project starts because something changed: a new laboratory system is being bought, a new tank is installed, a process is moving to a bigger scale, or an existing system is being upgraded. The first decision is simply: does this need validation, and how much?

That is answered with a short impact or GxP assessment. If the system or process touches product quality or GxP data, it is in scope. How much effort follows is set by risk, which is decided properly in step 4.

- Who: the system or process owner, with Quality Assurance.
- Document: an impact/criticality assessment.

### 2. Plan it

Before any testing, you write a Validation Plan. It is the game plan: what is being validated, the approach, the deliverables you will produce, the acceptance criteria for the project, the roles, and the schedule. On a larger site this plan sits under a Validation Master Plan, the site-level document that lists all systems and the validation approach for each.

EU GMP Annex 15 (Qualification and Validation) expects exactly this: planned validation, governed by documents, with protocols and reports.

- Who: the validation lead, reviewed by QA and the owner.
- Document: Validation Plan (and the Validation Master Plan above it).
- Gate: QA approves the plan before work proceeds.

### 3. Say what it must do (requirements)

You cannot prove something works without first defining what working means. So you write the User Requirements Specification (URS): a numbered list of what the system or process must do, in testable terms. For a computer system this is followed by a Functional Specification (what it does) and a Design or Configuration Specification (how it is set up).

- Who: the owner and subject matter experts, with the vendor for a bought system.
- Documents: URS, then Functional and Design specifications.

### 4. Assess the risk

You rarely test everything to the same depth, and regulators do not expect you to. You run a risk assessment to decide where a failure would actually harm a patient or corrupt data, and you concentrate testing there. This risk-based approach is the core of GAMP 5 and of FDA's Computer Software Assurance thinking: effort follows risk, and low-risk items are not buried in paperwork.

- Who: the team, facilitated by validation, approved by QA.
- Document: Risk Assessment.

### 5. Build, configure, or install

Now the system is installed and configured, the equipment is set up, or the process is set up at scale. For software bought from a vendor, this is also where you assess the supplier and decide how much of their own testing you can reuse instead of repeating, as long as you document that reliance.

- Who: IT, engineering, or the vendor, with the owner.
- Document: configuration records, supplier assessment.

### 6. Write the test protocols (before testing)

You write the IQ, OQ, and PQ protocols, and they are approved before anyone executes them. This order matters: the acceptance criteria are set in advance, so you cannot quietly move the goalposts after seeing a result. Writing a result into a protocol that was approved after the test is a serious data integrity finding.

- IQ, Installation Qualification: was it installed and built correctly?
- OQ, Operational Qualification: does it operate correctly across its range, including limits and alarms?
- PQ, Performance Qualification: does it perform in real, routine use?

- Who: validation writes them, QA approves.
- Documents: approved IQ, OQ, PQ protocols.
- Gate: protocols approved before execution.

### 7. Execute the tests

The protocols are run in order: IQ, then OQ, then PQ. Each step records the actual result next to the expected result, signed and dated, with evidence such as screenshots or printouts attached.

When a test fails, that is normal and expected. It is recorded as a deviation or discrepancy, investigated, resolved (a fix, a configuration change, or a justified correction), and the affected test is re-run. Failures are not erased; the investigation and resolution are part of the evidence. How test failures are handled well is its own skill, covered in [validation test failure management](/articles/validation-test-failure-management).

- Who: qualified testers and SMEs, witnessed by QA for critical steps.
- Documents: executed protocols, deviation records.

### 8. Confirm nothing was missed (traceability)

A Traceability Matrix maps every requirement in the URS to the test that proved it. It is the check that nothing fell through the gap between what you needed and what you actually tested. An empty cell means an untested requirement, which is a hole in the proof.

- Document: Requirements Traceability Matrix.

### 9. Report and release

The Validation Summary Report pulls it together: what was executed, the results against acceptance criteria, every deviation and how it was resolved, and the conclusion that the system or process is fit for use. QA approves it, and only then is the system released for routine GxP use and handed to the people who will operate it.

- Who: validation writes it, QA approves, the owner accepts the handover.
- Document: Validation Summary Report.
- Gate: the report is approved before routine use begins.

### 10. Keep it valid (after the project)

The project ends at release, but the validated state has to be maintained for the rest of the system's life. Changes go through change control and are assessed for whether they need re-validation. Systems are monitored, and a periodic review checks the system is still in control and still validated. For a manufacturing process, this ongoing stage is the third stage of FDA's process validation lifecycle, continued process verification.

- Who: the owner, with QA.
- Documents: change controls, periodic review reports.

## Who does what, across the project

| Role | Their part in the project |
|---|---|
| System or process owner | Defines the need, owns the requirements, accepts the validated system |
| Subject matter experts | Write requirements, run and witness tests |
| Validation lead or specialist | Plans the project, writes the plan, protocols, and report, drives the schedule |
| IT, engineering, or the vendor | Build, configure, install; supply documentation |
| Quality Assurance | Reviews and approves the plan, protocols, deviations, and report; the independent check at every gate |

## How long it takes, and what slows it down

A simple, low-risk tool might be validated in days with a light, risk-based approach. A complex system that makes batch-release decisions can take weeks to months. The work is rarely the bottleneck; the usual delays are: requirements that were vague or not testable, protocols stuck waiting for approval, deviations that stay open, environments or equipment not ready when testing is scheduled, and scope that grows mid-project. Good planning up front (steps 2 to 4) is what prevents most of these. For running validation as a managed project, see [project managing validation](/articles/project-managing-validation).

## Common pitfalls

- Executing a protocol before it is approved, or back-dating an approval. This is a data integrity finding, not a paperwork slip.
- Requirements that are not testable ("the system should be user-friendly"), so you cannot prove they are met.
- Deviations left open at the time of the summary report, so the conclusion rests on unresolved problems.
- Copying an old protocol without adapting it, so the tests do not match the actual system.
- Treating release as the end and never maintaining the validated state, so the system drifts out of control over time.

## The takeaway

A validation project is a disciplined way of answering one question across a system's whole life: how do you know this works, and how do you know it still works? It runs as a sequence of planned steps, each leaving a signed document and passing a QA gate, from the first trigger to release and into ongoing maintenance. The documents are not the point; the proof is. The structure exists because EU GMP Annex 15, the cGMP rules, and the computerized-system expectations of 21 CFR Part 11 and EU GMP Annex 11 all require that the proof be planned, executed, and recorded, not assumed.

For the documents each step produces and ready-to-use templates, see the [validation deliverables guide](/articles/validation-deliverables-guide). For the framework behind risk-based system validation, see [GAMP 5](/articles/gamp5-csv-framework). For equipment specifically, see the [equipment qualification lifecycle](/articles/equipment-qualification-lifecycle).
