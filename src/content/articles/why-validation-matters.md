---
title: "Why Validation Matters: Proving That Systems and Processes Actually Work"
description: "A plain-language explanation of what validation is, why it matters for patient safety and trustworthy data, and the regulations that actually require it, for anyone new to GxP."
pubDate: 2026-06-22
tags: ["validation", "gmp", "foundations", "process-validation", "csv", "regulations"]
pillar: "quality-assurance"
tier: "Beginner"
---

If you are new to regulated manufacturing or quality, "validation" can sound like a wall of jargon: IQ, OQ, PQ, PPQ, GAMP, qualification, lifecycle. Strip all of that away and one plain idea is left. Validation means proving, with documented evidence, that a system or a process does what it is supposed to do, and keeps doing it. Not hoping. Not assuming. Proving, and writing the proof down.

This article explains the idea in everyday terms, why it matters, and the specific regulations that require it. You do not need any background to follow it.

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

## What happens when validation is skipped or done badly

This is not theoretical. Skipped, incomplete, or fabricated validation is one of the most common reasons companies receive FDA Form 483 observations and warning letters, and it is a frequent root cause behind product recalls. Typical findings read like this:

- A process was never validated, or was "validated" once years ago and never confirmed again, yet batches kept shipping.
- Equipment or a computer system was used for GxP work with no qualification or validation on file.
- A test method gave results nobody could reproduce because it was never properly validated.
- Validation records existed but did not match what actually happened, a data integrity problem on top of a validation problem.

Each of these means the same thing to an inspector: the company cannot prove its product is what it claims to be. That is a serious problem, because the entire system depends on that proof.

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
