---
title: "Why Validation Matters: Proving That Systems and Processes Actually Work"
description: "A plain-language explanation of what validation is, why it matters for patient safety and trustworthy data, and the regulations that actually require it, for anyone new to GxP."
pubDate: 2026-06-22
tags: ["validation", "gmp", "foundations", "process-validation", "csv", "regulations"]
pillar: "quality-assurance"
tier: "Beginner"
---

If you are new to regulated manufacturing or quality, "validation" can sound like a wall of jargon: IQ, OQ, PQ, PPQ, GAMP, qualification, lifecycle. Strip all of that away and one plain idea is left. Validation means proving, with documented evidence, that a system or a process does what it is supposed to do, and keeps doing it. Not hoping. Not assuming. Proving, and writing the proof down.

This article is written to work at two levels. If you are new, it explains the idea in everyday terms, why it matters, how a validation project actually runs, and the specific regulations that require it, with no background assumed. If you run a function, a later section steps back to the view a department head needs: validation as risk management, the business cost of getting it wrong, and how to govern and resource it.

## Validation in one sentence

Validation is collecting evidence, before you rely on something, that it works as intended and will keep working.

A simple comparison. When a new bridge is built, nobody opens it to traffic on the builder's word that it is fine. Engineers load it, test it, measure it, and document that it holds far more weight than it will ever carry. Only then do cars drive across. Validation in pharma, biotech, and medical devices is the same instinct, applied to the things that make medicine: the manufacturing process, the equipment, the computer systems, and the test methods.

## Why it matters: three plain reasons

### 1. You cannot test your way to safety on the finished product alone

This is the reason validation exists at all, and it surprises people. You might think a company simply tests every batch of medicine at the end and ships the good ones. For some attributes you can. But for many of the things that matter most, you cannot fully test the final product.

Sterility is the classic example. To prove a vial is sterile by testing, you would have to open it, which destroys it. You can only test a small sample, and a passing sample does not prove the millions of units you did not open are sterile. So instead of testing quality into the product at the end, you build it in: you prove the sterilization process itself reliably works, every time, and you control it. That proof is validation.

The same logic applies to a tablet's uniformity, a biologic's potency, or a weld on a device. When the result of a process cannot be fully checked by inspecting or testing the final item, you must validate the process instead. This is stated almost word for word in the medical device regulation, 21 CFR 820.75: where a process result cannot be fully verified by later inspection and test, the process "shall be validated with a high degree of assurance." (Under the device Quality Management System Regulation, effective in 2026, the requirement now sits within ISO 13485:2016, but the principle is unchanged.)

### 2. Patient safety

Behind every requirement in this field is a patient who will take the medicine or be treated by the device, trusting it is safe and works. A process that drifts out of control, an instrument that reads wrong, or a software calculation that is off can put that patient at risk and the patient has no way to know. Validation is one of the main ways the industry earns that trust: it is the documented assurance that the things producing and measuring the product are dependable.

### 3. Data you can trust

Modern manufacturing and testing run on computers and instruments. A chromatography system integrates a peak and reports a result. A spreadsheet calculates a yield. A manufacturing system records a temperature. If those systems are not validated, you do not actually know the numbers are right, and decisions about whether a batch is safe to release are made on those numbers. Validating computer systems is how you establish that the data they produce is accurate and reliable. This connects directly to data integrity, the principle that records must be trustworthy from creation to disposal.

## The regulations that require it

Validation is not a best practice that companies do to be thorough. It is a legal requirement in every major market. Here is where it comes from, in plain terms.

> United States, drug manufacturing (cGMP). The current good manufacturing practice regulations require it. 21 CFR 211.100 requires written, followed production and process control procedures designed to assure the drug has the identity, strength, quality, and purity it is supposed to. 21 CFR 211.68 requires that automatic, mechanical, and electronic equipment (including computers) be suitable and routinely checked. 21 CFR 211.165(e) requires that test methods be accurate and that their accuracy be established and documented. Together these are why processes, equipment, and methods must be validated.

> United States, FDA process validation guidance. FDA's guidance "Process Validation: General Principles and Practices" (2011) sets out the modern, lifecycle approach to process validation in three stages: design the process, confirm it works at commercial scale, then keep verifying it stays in control during routine production.

> European Union. EU GMP Annex 15, "Qualification and Validation" (2015 revision), is the EU's direct requirement to qualify equipment and facilities and validate processes, with documented plans, protocols, and reports.

> Computerized systems. 21 CFR Part 11 (electronic records and signatures) requires validation of computerized systems "to ensure accuracy, reliability, consistent intended performance." EU GMP Annex 11 (Computerised Systems) sets the same expectation in Europe.

> Active ingredients and methods. ICH Q7 requires validation in the manufacture of active pharmaceutical ingredients, and ICH Q2 sets out how analytical (test) methods are validated.

> Medical devices. As noted above, 21 CFR 820.75 (now within the Quality Management System Regulation and ISO 13485:2016) requires process validation where the result cannot be fully verified later.

The common thread: every regulator, in every market, expects you to prove your processes, equipment, systems, and methods work before you use them to make or test a product that reaches a patient.

## The main kinds of validation, in one line each

You will hear several terms. They are all the same idea applied to different things.

| What is being proven | Common name | The plain question it answers |
|---|---|---|
| A manufacturing process | Process validation | Does this process reliably make product that meets its requirements, run after run? |
| A piece of equipment | Equipment qualification (DQ/IQ/OQ/PQ) | Was it designed, installed, and does it operate and perform correctly for its use? |
| A computer system | Computer system validation (CSV) | Does the software do what we need, accurately and reliably, including its records? |
| A test method | Method validation | Does this test give accurate, reproducible, trustworthy results? |
| A cleaning procedure | Cleaning validation | Does cleaning remove residue to a safe level so the next product is not contaminated? |

If you want the next level of detail on any of these, see the [equipment qualification lifecycle](/articles/equipment-qualification-lifecycle), the [process validation lifecycle](/articles/process-validation-lifecycle), and the [GAMP 5 framework for computer system validation](/articles/gamp5-csv-framework).

## What it takes to validate something

Validation is real work, not a signature at the end. To validate even a modest system or process you have to:

- Plan it: decide what you are validating, the approach, and who does what.
- Define what "works" means: write down the requirements the thing must meet. You cannot prove something works if you never said what it was supposed to do.
- Assess the risk: decide where the real hazards are, so effort goes where it matters.
- Build or install it correctly, and confirm that.
- Test it against the requirements, and record the actual results, signed and dated.
- Investigate anything that fails, fix it, and re-test.
- Review and approve: Quality Assurance checks the evidence and signs off before routine use.

That is genuine effort in people and time. A simple, low-risk tool might need only a short, light check. A complex system that makes batch-release decisions can take weeks or months and a whole team: the system owner, subject matter experts, a validation lead, IT, and QA.

The amount of effort is meant to match the risk. This is the modern, risk-based idea behind FDA's Computer Software Assurance thinking and GAMP 5: spend the effort where a failure would actually harm a patient or the data, and do not bury low-risk items in paperwork. You can also reuse a supplier's testing for an off-the-shelf product instead of repeating it, as long as you assess and document that reliance.

| Risk and complexity | Typical effort |
|---|---|
| Low: a simple tool, no GxP decision, easily checked | Light: a short risk-based check, minimal documents |
| Medium: a configured system that supports GxP work | Moderate: requirements, risk assessment, IQ/OQ, summary |
| High: custom, or makes/affects release decisions | High: full specifications, risk assessment, IQ/OQ/PQ, traceability, summary, and ongoing monitoring |

## The validation lifecycle, in one picture

Most validation follows the same path, whatever you are validating: plan it, say what it must do, build it, prove it, conclude it is fit for use, then keep it that way. Each step produces a document, and those documents are the evidence trail.

```
 PLAN         SPECIFY             BUILD          QUALIFY                REPORT          MAINTAIN
 Validation   what it must do:    install or     prove it works:        conclude it     keep it valid:
 Plan         URS, then FS and    configure      IQ  installed right    is fit for use  change control,
              Design Spec, plus   the system     OQ  operates right     Validation      monitoring,
              a Risk Assessment   or process     PQ  performs in use    Summary Report  periodic review
   |              |                   |              |                      |               |
   +--------------+-------------------+--------------+----------------------+---------------+
                           every step leaves a document behind: the proof
```

A helpful way to see the link between "what it must do" and "how you prove it" is the V-model: each specification on the way down is matched by a test on the way up. The user requirements are proven by the PQ, the functional spec by the OQ, and the installation by the IQ.

```
 URS  what the user needs ........................  PQ  proves the user's needs are met
   FS  what it does ...........................  OQ  proves each function works
     DS  how it is built or configured .....  IQ  proves it was installed right
                       \                     /
                        BUILD  /  INSTALL
```

## The deliverables, and why each one is required

Each step above produces a document. These are the validation deliverables. They are not busywork: each answers a specific question and provides a specific piece of evidence. Skip one and there is a hole in the proof.

| Deliverable | The question it answers | Why it is required |
|---|---|---|
| Validation Plan | What are we validating, how, and who is responsible? | Sets scope and approach so the work is controlled, not ad hoc |
| User Requirements (URS) | What must it do for us? | You cannot prove "it works" without first defining what working means |
| Functional and Design Spec | How does it meet those requirements? | Links the need to the actual system or process |
| Risk Assessment | Where could it harm the patient or the data? | Focuses testing effort where it matters |
| IQ, Installation Qualification | Was it built or installed correctly? | Evidence the foundation is right before testing function |
| OQ, Operational Qualification | Does it operate correctly across its range? | Evidence the functions work, including limits and alarms |
| PQ or Process Validation | Does it perform in real, routine use? | Evidence it works for the actual job, run after run |
| Traceability Matrix | Was every requirement actually tested? | Proves nothing was missed between what we needed and what we tested |
| Validation Summary Report | Can we conclude it is fit for use? | The signed conclusion, approved before routine use begins |

Why documents at all? Because regulators require documented evidence, not assurances. EU GMP Annex 15 expects validation to be planned and recorded in protocols and reports. The cGMP rules require written procedures and records (21 CFR 211.100, 21 CFR 211.68). The phrase to remember is "documented evidence": if it is not written down, in the eyes of an inspector it did not happen.

You do not have to build these from scratch. Ready-to-use, plug-and-play versions of the validation plan, the protocols (IQ/OQ/PQ), the traceability matrix, and the summary report are described in the [validation deliverables guide](/articles/validation-deliverables-guide), with editable documents in the site's template library.

### For a manufacturing process, the effort is a continuous lifecycle

Process validation is not one event either. FDA's 2011 guidance frames it as three ongoing stages, so the effort continues for as long as the process is in use.

```
 STAGE 1                   STAGE 2                       STAGE 3
 Process Design     -->    Process Qualification   -->   Continued Process Verification
 understand the            confirm it works at           keep checking it stays in
 process and define        commercial scale              control during routine
 the controls             (the PPQ runs)                 production, ongoing
```

The reason to show the effort and the deliverables together is simple: validation costs real work up front, and that work is exactly what lets a company answer "how do you know this works?" with evidence instead of hope.

## How a validation project runs, start to finish

The lifecycle above is the map. Here is the journey, step by step, with who is involved, the document each step leaves behind, and the approval gate you pass before moving on. Almost every arrow in that picture is a Quality Assurance sign-off: you do not move on until the previous step is reviewed and approved.

1. **The trigger and the first decision.** A project starts because something changed: a new laboratory system, a new tank, a process moving to a larger scale, or an upgrade. A short impact or GxP assessment decides whether it needs validation, and roughly how much. (Owner, with QA.)
2. **Plan it.** A Validation Plan sets the scope, approach, deliverables, roles, and schedule. On a larger site it sits under a Validation Master Plan. QA approves it before work starts. (Validation lead.)
3. **Say what it must do.** The User Requirements Specification lists, in testable terms, what the system or process must do. For software, a Functional and a Design Specification follow. You cannot prove "it works" without first defining what working means. (Owner and subject matter experts.)
4. **Assess the risk.** A risk assessment decides where a failure would actually harm a patient or the data, so testing concentrates there rather than spreading evenly. (The team, approved by QA.)
5. **Build, configure, or install.** The system is set up, or the process is set up at scale. For bought software, you also assess the supplier and decide how much of their own testing you can reuse instead of repeating, and document that reliance. (IT, engineering, or the vendor.)
6. **Write the test protocols, before testing.** The IQ, OQ, and PQ protocols are written and approved before anyone runs them, so the acceptance criteria are fixed in advance. Writing a result into a protocol that was approved after the test is a serious data integrity finding. (Validation writes them, QA approves.)
7. **Execute the tests.** Run IQ, then OQ, then PQ, recording the actual result against the expected result, signed and dated, with evidence attached. A failed test is normal: it is logged as a deviation, investigated, resolved, and the affected test re-run, never erased.
8. **Confirm nothing was missed.** The Traceability Matrix maps every requirement to the test that proved it. An empty cell is an untested requirement, a hole in the proof.
9. **Report and release.** The Validation Summary Report states what was executed, the results against acceptance, every deviation and how it was resolved, and the conclusion that it is fit for use. QA approves it, and only then is the system released and handed to the people who will operate it.
10. **Keep it valid.** The project ends at release, but the validated state is maintained for the system's life: changes go through change control, the system is monitored, and a periodic review confirms it is still in control. For a manufacturing process, this is the continued process verification stage above.

### Who does what

| Role | Their part in the project |
|---|---|
| System or process owner | Defines the need, owns the requirements, accepts the validated system |
| Subject matter experts | Write requirements, run and witness tests |
| Validation lead or specialist | Plans the project, writes the plan, protocols, and report, drives the schedule |
| IT, engineering, or the vendor | Build, configure, install; supply documentation |
| Quality Assurance | Reviews and approves the plan, protocols, deviations, and report; the independent check at every gate |

### How long it takes, and what slows it down

A simple, low-risk tool might be validated in days with a light, risk-based approach. A complex system that makes batch-release decisions can take weeks to months. The work itself is rarely the bottleneck. The usual delays are requirements that were vague or not testable, protocols stuck waiting for approval, deviations that stay open, equipment or environments not ready when testing is scheduled, and scope that grows mid-project. Good planning up front prevents most of them.

### Common pitfalls

- Executing a protocol before it is approved, or back-dating an approval. This is a data integrity finding, not a paperwork slip.
- Requirements that are not testable ("the system should be user-friendly"), so you cannot prove they are met.
- Deviations left open at the time of the summary report, so the conclusion rests on unresolved problems.
- Copying an old protocol without adapting it, so the tests do not match the actual system.
- Treating release as the end and never maintaining the validated state, so the system drifts out of control over time.

For running validation as a managed project, see [project managing validation](/articles/project-managing-validation); for handling failed tests well, see [validation test failure management](/articles/validation-test-failure-management).

## What happens when validation is skipped or done badly

This is not theoretical. Skipped, incomplete, or fabricated validation is one of the most common reasons companies receive FDA Form 483 observations and warning letters, and it is a frequent root cause behind product recalls. Typical findings read like this:

- A process was never validated, or was "validated" once years ago and never confirmed again, yet batches kept shipping.
- Equipment or a computer system was used for GxP work with no qualification or validation on file.
- A test method gave results nobody could reproduce because it was never properly validated.
- Validation records existed but did not match what actually happened, a data integrity problem on top of a validation problem.

Each of these means the same thing to an inspector: the company cannot prove its product is what it claims to be. That is a serious problem, because the entire system depends on that proof.

## If you run the function: governing validation

Everything above is how validation works on the ground. If you lead quality, validation, manufacturing, or IT, you are accountable for something larger: that validation across your area is done well, done in time, and stays done. Here is the view from that seat.

### Validation is risk management and a business enabler, not just compliance

It is easy to see validation as a cost and a brake. Run well, it is the opposite. A current, defensible validation program is what lets you release product without hesitation, qualify a new system on a predictable timeline, and walk an inspector through your evidence with confidence. Run badly, it becomes a backlog that delays launches, a source of repeat findings, and a reason batches sit on hold. The work is the same either way; the difference is governance.

### Govern it at the program level, not project by project

Individual projects need plans. The function needs a layer above them:

- A validation policy and a Validation Master Plan that set the risk-based approach for the whole site, so every project is consistent and proportionate.
- An inventory of systems, equipment, and processes with their validation status, so nothing is forgotten and you can see your exposure at a glance.
- Clear ownership: every validated system has a named owner, and QA's independent review is real, not a rubber stamp.

### Resource by risk, the main lever you control

The biggest lever a leader has is the risk-based approach behind FDA's Computer Software Assurance thinking and GAMP 5: put real effort where a failure would harm a patient or the data, and keep low-risk items light. Over-validating everything burns scarce, expensive resource and creates backlog; under-validating the high-risk systems creates exposure. Reusing a qualified supplier's testing, rather than repeating it, is another lever that controls cost and timeline without lowering assurance. Getting this balance right is mostly a leadership decision, not a technical one.

### Know the cost of getting it wrong

Validation failures escalate. An FDA Form 483 observation can become a warning letter, and unresolved problems can lead to consent decrees, import alerts, or recalls. Each step carries real cost: remediation programs that run for months, delayed approvals and product launches, supply interruptions, and reputational damage. When you sign off that a system or process is fit for use, you are accepting that risk on the organization's behalf. That is why the independent QA gate and honest, documented evidence matter so much.

### Watch the few metrics that show control

You do not need to read every protocol, but you do need a dashboard. The signals that tell you validation is under control include the validation backlog (and its trend), overdue periodic reviews, open validation deviations and how long they stay open, on-time protocol approvals, upcoming requalification due dates, and audit-trail review completion. A rising backlog or a stack of overdue periodic reviews is an early warning that an inspection will go badly.

### Stay inspection-ready by default

The validation file is among the first things an inspector asks for. Readiness is not a scramble before an audit; it is the steady state of keeping evidence current, complete, and retrievable, and keeping the validated state maintained through change control and periodic review. A function that is genuinely in control is always close to inspection-ready.

### People and timelines

Two leadership choices quietly decide quality: hiring and keeping qualified validation and QA people, and setting realistic timelines. Most data integrity shortcuts (the back-dated approval, the quiet re-test) happen under unrealistic pressure. Protecting the schedule and the independence of QA is how a leader prevents them.

The strategic point: validation done well is a competitive advantage, faster and more defensible releases with fewer surprises. Done badly, it is one of the largest and most avoidable liabilities a regulated company carries. Which one it is comes down to how the function is governed.

## Common questions people ask

**Is validation a one-time thing?**
No. You validate before use, then keep it validated. A change to the process, the equipment, or the software, or simply time passing, can mean you need to re-confirm or re-validate. Routine monitoring (for processes, this is the ongoing verification stage) is part of staying validated.

**Is validation just paperwork?**
The paperwork is the evidence, but the point is the proof, not the paper. Good validation actually reduces problems, because designing and testing something properly before relying on it catches issues early, when they are cheap to fix, instead of in a released batch.

**Who is responsible for it?**
It is a team effort. The system or process owner and subject matter experts define requirements and run the tests, validation specialists plan and document it, and Quality Assurance reviews and approves. See [GxP roles explained](/articles/gxp-roles-responsibilities).

**How is validation different from calibration?**
Calibration confirms an instrument reads accurately against a known standard, on a schedule. Validation is broader: it proves the whole system or process does its job. Calibration is often one input to qualifying equipment.

## The one idea to take away

Validation is how a regulated company answers the simplest and most important question an inspector, or a patient, could ask: how do you know this works? "Because we proved it, and here is the documented evidence" is the only acceptable answer, and the regulations above are why. Once you see validation as that answer rather than as a stack of acronyms, the rest of the field starts to make sense.

If you are working through the foundations, a good next step is understanding [what GMP is and why it exists](/articles/what-is-gmp), since validation is one of the main ways GMP's promises are kept.
