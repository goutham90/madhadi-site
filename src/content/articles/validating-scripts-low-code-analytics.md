---
title: "Validating Scripts, Notebooks, and Low-Code Analytics (Python, R, Power BI) in GxP"
description: "How to bring version control, peer review, environment control, and risk-based validation to Python scripts, R, Jupyter notebooks, and Power BI dashboards built on regulated GxP data."
pubDate: 2026-06-20
tags: ["csv", "data-integrity", "computer-software-assurance", "analytics", "python", "version-control", "gamp5"]
pillar: "ai-automation"
tier: "Intermediate"
---

A quality team builds a Power BI dashboard that pulls release results from the LIMS and shows trend lines the QA lead reviews before disposition. A scientist writes a Python script that recalculates a stability slope and exports a table that goes into the annual product review. A statistician runs an R notebook that produces the control charts used to justify continued process verification limits. None of these tools came from a software vendor with an installation qualification package. They were written in-house, often by one person, often without a protocol, and they touch GxP decisions.

This is the fastest-growing validation gap in pharma and biotech quality. The classic computerized system validation model assumes a packaged application with a supplier, a configuration, and a defined release. Scripts, notebooks, and low-code dashboards break every one of those assumptions. The author is also the user. The "version" is whatever is on someone's laptop. The dependency stack changes silently when a library updates. And yet the output feeds a batch release, a regulatory submission, or a CAPA effectiveness conclusion.

The good news is that the regulatory framework already covers this. You do not need a new regulation. You need to apply existing expectations (Part 11, Annex 11, GAMP 5, and the FDA's Computer Software Assurance guidance) to a category of tools that traditional CSV programs quietly ignored. This article walks through how to do exactly that, end to end.

---

## What counts as a script, notebook, or low-code analytic

Get the scope right before you start, because over-scoping wastes effort and under-scoping is what gets cited.

**Scripts.** Standalone code in Python, R, SAS, Visual Basic, SQL, or shell that transforms, calculates, or moves GxP data. Examples: a Python script that parses raw instrument files and computes a result; an R script that fits a regression and outputs limits; a SQL query that extracts data for a metric.

**Notebooks.** Jupyter, JupyterLab, R Markdown, Quarto, Databricks, or similar literate-programming documents that interleave code, narrative, and output (tables, plots). Notebooks are uniquely risky because the displayed output and the code that produced it can become out of sync (run cells out of order, edit a cell after running it, leave stale output on screen).

**Low-code and no-code analytics.** Power BI, Tableau, Spotfire, Qlik, KNIME, Alteryx, and the analytic features built into LIMS, ELN, or MES platforms. Also macro-heavy Excel workbooks, which are functionally code even though no one calls them that. The "low-code" label is misleading from a quality standpoint: a Power BI report contains DAX measures, Power Query M transformations, and relationship logic that are every bit as capable of producing a wrong number as a Python function.

**What this article does NOT cover.** Packaged, vendor-supplied applications validated through a normal lifecycle (those are GAMP category 3 and 4, addressed in [GAMP 5 and CSV](/articles/gamp5-csv-framework) and [LIMS implementation and validation](/articles/lims-implementation-and-validation)). It also does not cover machine-learning models, which have their own lifecycle in [GxP ML model lifecycle](/articles/gxp-ml-model-lifecycle) and [validating AI in GxP systems](/articles/validating-ai-gxp-systems). And it does not cover robotic process automation, covered in [validating RPA automation](/articles/validating-rpa-automation). The line: if a human wrote logic that transforms or presents GxP data and there is no qualified supplier release behind it, this article applies.

---

## Why this is regulated: the basis and the rationale

### The regulatory hooks

There is no clause that says "validate your Python scripts." The obligation is derived from broader requirements that apply to any computerized system used in a regulated activity.

> **21 CFR 211.68(b)** requires that controls be exercised over computers or related systems to assure that changes are instituted only by authorized personnel, and that input to and output from the system be checked for accuracy.

A homegrown script is a "computer or related system." Its output feeds a regulated decision, so accuracy of input and output is a cited requirement.

> **EU GMP Annex 11 (2011)** states that computerised systems should be validated and that the degree of validation should be based on a risk assessment. Annex 11 paragraph 5 requires that data be protected from accidental or deliberate change, and paragraph 7.1 requires data to be secured by physical and electronic means.

Annex 11 does not exempt small tools. A spreadsheet macro that computes a release result is in scope exactly as a packaged system is.

> **21 CFR Part 11 (1997)** applies whenever electronic records are created, modified, maintained, or transmitted under a predicate rule. If your script's output is the official GxP record (or modifies one), Part 11 controls (audit trail, access control, record integrity) attach.

The **FDA guidance "Computer Software Assurance for Production and Quality System Software" (September 2022)** is the most useful modern framing. It tells you to scale assurance effort to the risk the software poses to product quality and patient safety, and to prefer unscripted and targeted testing where the risk is low. That guidance is what lets you avoid drowning a one-page calculation script in a 40-page IQ/OQ/PQ package while still doing real testing.

**GAMP 5 Second Edition (2022)** provides the category language. A bespoke script is GAMP **category 5 (custom application)**, the highest-rigor category, because someone wrote unique code. A configured Power BI report built on standard software with custom DAX sits between category 4 (configured) and 5 depending on how much custom logic it contains. Either way, GAMP 5 directs you to a risk-based, critical-thinking approach rather than a checklist.

Supporting expectations: **PIC/S PI 011** and the **MHRA "GXP Data Integrity Guidance and Definitions" (2018)** both expect that any system generating GxP data be assessed for integrity risk, that calculations be verified, and that the people who can change the logic be controlled. The **ISPE GAMP RecordsAndData Integrity guide** and the GAMP spreadsheet good practice guidance directly address end-user computing tools.

### The risk rationale, stated plainly

Why does a regulator care about a Python script? Because the failure modes are real and they are silent:

- **A wrong formula nobody caught.** A unit conversion error, an off-by-one row index, a hard-coded constant that was right last year. The dashboard renders a clean green chart on top of a wrong calculation. No one sees the error because the output looks plausible.
- **The output cannot be reproduced.** Someone asks "regenerate the table from the March submission" and the script has changed, the library versions have changed, the source data has been overwritten, and the number comes out different. You can no longer defend the original.
- **Uncontrolled change.** The author edited the logic on Tuesday to "fix" something and the Friday release used different math than the Monday release, with no record of which.
- **Notebook state desynchronization.** The displayed plot was produced by code that has since been edited; what you are reviewing was never actually run by the code shown.
- **Silent dependency drift.** A pandas, numpy, or R package minor update changes rounding, default behavior, or a statistical default, and last month's validated behavior is gone without anyone touching your code.

Every one of those maps to a data integrity attribute in [ALCOA+ in detail](/articles/alcoa-plus-deep-dive): accurate, complete, consistent, enduring, available, and (critically here) **original** and **attributable**. Validation of these tools is data integrity work as much as it is CSV work.

---

## Step 1: Assess criticality before you do anything

Do not validate everything to the same depth. Do not validate nothing. Classify, then scale effort. This is the heart of the CSA mindset and it is what an inspector wants to see you reasoning about.

For each script, notebook, or dashboard, answer:

1. **What GxP decision does the output support?** Batch release, regulatory submission, stability conclusion, CAPA effectiveness, a metric in a management review, or merely an internal exploratory look?
2. **Is the output the official record, or is it a convenience view of a record held elsewhere?** A Power BI dashboard that visualizes data still authoritative in the LIMS is lower risk than a script whose CSV output IS the result of record.
3. **Is the calculation novel/complex or trivial/transparent?** A regression fit with outlier exclusion is high. Summing a column is low.
4. **How many people rely on it and how often?** A one-time analysis differs from a recurring release tool.
5. **Could an undetected error reach product or patient?** This is the CSA "intended use" question.

Use a simple risk grid. Here is a worked classification:

| Tool | GxP use | Output is record? | Complexity | Risk class | Assurance level |
|------|---------|-------------------|------------|-----------|-----------------|
| Python script computing stability slope feeding APR | Direct quality decision | Yes | Moderate (linear regression) | High | Full: spec + scripted test + version control + change control |
| R notebook generating CPV control limits | Direct quality decision | Yes | High (statistics, exclusion rules) | High | Full + independent statistical review |
| Power BI release-results dashboard reviewed before disposition | Supports decision | No (LIMS is source) | Moderate (DAX measures) | Medium | Targeted testing of each measure + version control + access control |
| Excel macro converting units for a batch record | Direct, output transcribed | Yes | Low but direct | Medium-High | Cell-protection + formula verification + locked template + change control |
| Jupyter notebook exploring trend, results not used for decisions | Exploratory only | No | Any | Low (non-GxP) | Document as non-GxP; no formal validation, but keep author/date |

The output of this step is a short documented rationale per tool. That rationale, stored where QA can retrieve it, is itself an inspectable record. See [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology) and [data criticality and data risk](/articles/data-criticality-and-data-risk) for the full method.

**Acceptance criteria for step 1:** every in-scope tool has a documented risk classification with a rationale tied to intended use, signed by an owner and reviewed by QA, and the boundary between GxP and non-GxP tools is explicit.

---

## Step 2: Specify what the tool must do

Even a 30-line script needs a statement of intended use you can test against. Without it, "testing" has no pass criterion. The specification scales with risk but never goes to zero for a GxP tool.

For a **high-risk script or notebook**, write a lightweight requirements and design document that contains:

- **Purpose and intended use.** One paragraph: what GxP decision this supports and what it must produce.
- **Inputs.** Source system, file format, expected columns, data types, units, ranges, and how missing or out-of-range values are handled.
- **Processing logic / calculation.** The actual algorithm in words and, where it matters, the equation. For example: "slope estimated by ordinary least squares of log10(potency) versus time in months; the 95% lower confidence bound on the regression at the proposed shelf life must meet the lower specification limit." Reference the source method, SOP, or compendial procedure the math implements.
- **Outputs.** What is produced (table, plot, file), its format, where it goes, and which fields are the controlled result.
- **Rounding and significant figures.** State them explicitly. Rounding rules are a classic source of silent disagreement between a script and a validated CDS.
- **Error handling.** What happens on bad input. A GxP tool should fail loudly, never silently produce a wrong number.
- **Environment dependencies.** Language version, key libraries and pinned versions (see step 4).
- **Assumptions and limits.** What the tool is NOT valid for.

For a **low-code dashboard**, the equivalent specification lists every measure/calculation (each DAX measure, each Power Query transformation step, each calculated column), its definition, its source field, and the expected behavior, plus the data refresh logic and any row-level security.

Link requirements to tests so you can show coverage, exactly as in [user requirements and traceability](/articles/user-requirements-and-traceability). A two-column trace (requirement to test case) is enough for most of these tools.

**Worked example, specification extract for a slope script:**

| Req ID | Requirement | Test case |
|--------|-------------|-----------|
| R1 | Reads potency vs. timepoint from the validated export; rejects file if any timepoint is non-numeric | T1 (valid file), T2 (corrupt file rejected) |
| R2 | Computes OLS slope of log10(potency) on time in months | T3 vs. hand calculation and vs. the CDS result |
| R3 | Reports lower 95% one-sided confidence bound at month 24 | T4 vs. independent statistical tool |
| R4 | Rounds reported potency to one decimal place, half-up | T5 boundary values 99.95 and 100.04 |
| R5 | Writes output CSV with columns: lot, slope, LCB24, pass/fail vs LSL | T6 schema check |

**Acceptance criteria for step 2:** intended use, inputs, outputs, calculation, rounding, and error handling are documented and unambiguous; every requirement maps to at least one test; the document is version-controlled and approved before testing.

---

## Step 3: Put it under version control and peer review

This is the single biggest cultural change and the most common gap inspectors find. "Where is the version that produced this number, and who reviewed it?" If the answer is "it's on my laptop and I checked it myself," you have a finding.

### Version control

Use a real version control system. Git is the practical standard (a GitLab, GitHub Enterprise, Bitbucket, or Azure DevOps repository). For Power BI, store the .pbix or .pbip project files and version them; the newer project-format (PBIP) files are text-diffable, which is far better for review and audit than a binary .pbix.

What version control gives you that an inspector cares about:

- **Attributability.** Every change is tied to an author and a timestamp (an ALCOA+ requirement, and the spirit of 211.68(b)).
- **A defensible history.** You can reproduce the exact code that produced the March submission table, because that commit is tagged.
- **A change record.** The commit message and the merge request ARE part of your change control evidence.
- **Diff-based review.** A reviewer sees precisely what changed.

Practical rules:

- **Tag releases.** When a version is approved for GxP use, tag it (for example `v1.0-validated`). The output should record which version produced it. Stamping the script version and a data hash into the output file or report header is excellent practice and makes reproducibility provable.
- **Protect the main branch.** No direct commits to the GxP branch; changes come through reviewed merge requests.
- **Do not store credentials or data in the repo.** Secrets go in a vault; GxP source data stays in its controlled system. See [CSV cybersecurity and access control](/articles/csv-cybersecurity-access-control).

### Peer review (independent code review)

A second qualified person reviews the code before it is used for GxP decisions. Self-review is not independent review. The reviewer is checking for:

- Correctness of the calculation against the specification and the source method.
- Correct handling of edge cases, missing data, and rounding.
- No hard-coded values that should be parameters.
- No silent failure paths.
- Readability sufficient for a third person to maintain it.

The review is **documented**: who reviewed, what version (commit hash), the comments, and the resolution. In Git workflows this is the recorded merge-request approval, which is a clean, timestamped, attributable record. Tie this to your existing [change control for validated systems](/articles/change-control-validated-systems) process so review and approval are one chain.

**Common notebook-specific control:** require that notebooks be **restarted and run top to bottom** before the output is considered valid, and store the executed notebook (with the run order preserved) as the record. The "Restart and Run All" discipline kills the desynchronization risk. Better still, in regulated pipelines, execute notebooks non-interactively (for example via a papermill-style parameterized run or a CI job) so the saved output provably came from the saved code.

**Acceptance criteria for step 3:** the GxP version of every in-scope tool lives in version control with tagged releases; each release has a documented independent code review with author, reviewer, version, and resolution; and the output can be traced to the exact version that produced it.

---

## Step 4: Control the environment

Code does not run in a vacuum. The same script can give different answers on two machines if the library versions differ. Environment control is what separates a reproducible GxP tool from a science project.

The risk is concrete. A minor update to a numerical library can change a default algorithm, a rounding behavior, or a statistical default. Last month's validated output silently stops being reproducible. Regulators have moved on this: reproducibility of computed GxP results is an integrity expectation, not a nicety.

What to control and how:

- **Pin dependencies.** Capture exact versions of the language and every library. In Python, a `requirements.txt` with pinned versions or a lock file (for example a `poetry.lock` or `conda` environment export). In R, use `renv` to snapshot the package set, or a packaged environment. The pinned manifest is part of the validated configuration and is placed under version control with the code.
- **Use isolated environments.** A virtual environment, conda environment, or container ensures the tool's dependencies do not drift with whatever else is installed on the host. Containers (for example a Docker image) are the strongest option because they freeze the OS, runtime, and libraries together, and the image digest is a single reproducibility anchor.
- **Control the execution location.** Decide where the validated tool runs: a controlled analytics server, a validated cloud workspace, or a controlled container, not "any analyst's laptop." Personal laptops fail on access control, backup, and reproducibility at once.
- **Qualify the platform.** The compute infrastructure (the server, the cloud workspace, the Power BI service, the Databricks workspace) is qualified separately as infrastructure. See [infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation) and, for cloud, [cloud and SaaS validation](/articles/cloud-saas-validation). You validate YOUR logic on a qualified platform; you do not re-qualify the platform per script.
- **Treat the environment as configuration under change control.** A library upgrade is a change. It triggers a risk assessment and, where the change could affect computed results, a regression test before the new environment is used for GxP work.

**Worked example, a pinned Python manifest stored with the slope script:**

```
python==3.11.8
numpy==1.26.4
pandas==2.2.1
scipy==1.12.0
statsmodels==0.14.1
```

When `scipy` later releases 1.13, that is a change request: assess whether anything in the dependency could alter the regression result, re-run the test cases, and only then re-tag the environment as validated.

**Acceptance criteria for step 4:** language and library versions are pinned and stored with the code; the tool runs in an isolated, controlled environment on qualified infrastructure; and any environment change goes through change control with regression testing where results could be affected.

---

## Step 5: Test the tool (assurance, scaled to risk)

This is where the CSA guidance earns its keep. You test to confirm the tool does what the specification says, using methods proportionate to risk. The deliverable is documented evidence, not necessarily a 50-page scripted protocol.

### Choose the test method by risk

- **High risk:** scripted testing with predefined test cases, expected results, and recorded actual results, plus independent verification of the calculation against a second method or hand calculation. For statistics, an independent recomputation in a different tool is strong evidence.
- **Medium risk:** targeted testing of the specific functions and measures that matter, often unscripted but documented (test the calculation, the boundary cases, and the error handling; record what you did and what you saw).
- **Low/non-GxP:** record-keeping only.

### What to test, regardless of risk level

- **The calculation against a known-answer reference.** Feed inputs whose correct output you computed independently (by hand, in a validated CDS, or in a separate tool). This is the most important single test. A script that agrees with a hand calculation to the stated precision on representative and boundary inputs has demonstrated its core function.
- **Boundary and edge cases.** Empty input, a single data point, values at specification limits, the rounding boundary (99.95 rounding to 100.0 versus 99.94 to 99.9), negatives where they should not occur.
- **Error handling.** Corrupt file, missing column, non-numeric where numeric expected. The tool must fail safely and visibly, never return a plausible wrong number.
- **Reproducibility.** Run twice on the same input in the controlled environment and confirm identical output. Run from the tagged version and confirm it matches the archived result.
- **For dashboards, each measure.** Test every DAX measure and Power Query step against an independent calculation on the same source data. Confirm filters, slicers, and row-level security do not silently drop or double-count rows (a notorious dashboard failure mode). Confirm the refresh pulls current data and that stale-data behavior is acceptable.

**Worked example, a test record entry:**

| Test | Input | Expected | Actual | Result |
|------|-------|----------|--------|--------|
| T3 | Reference dataset (12 timepoints) | Slope = -0.0142/month (per hand calc and CDS) | -0.0142/month | Pass |
| T4 | Same dataset | LCB at month 24 = 96.3% | 96.3% | Pass |
| T5a | Potency 99.95 | Reports 100.0 (half-up) | 100.0 | Pass |
| T5b | Potency 99.94 | Reports 99.9 | 99.9 | Pass |
| T2 | File with text in timepoint column | Rejected with error, no output written | Error raised, no file written | Pass |

Failures are managed, not quietly fixed: log the deviation, root-cause it, correct the code (a new commit, re-reviewed), and re-test. See [validation test failure management](/articles/validation-test-failure-management).

### Automated testing as the modern path

For scripts and notebooks, unit tests (pytest in Python, testthat in R) that encode the known-answer cases are excellent assurance evidence and can run automatically on every change. A CI pipeline that runs the test suite on each merge request gives you continuous, attributable, repeatable evidence and is fully consistent with the CSA emphasis on efficient, risk-based assurance. This is the bridge to [Agile and DevOps approaches to CSV](/articles/agile-devops-csv) and [continuous-delivery thinking](/articles/agile-devops-csv) applied to analytics.

**Acceptance criteria for step 5:** the calculation is verified against an independent reference on representative and boundary inputs; error handling and reproducibility are demonstrated; for dashboards every measure is independently confirmed; all test evidence is recorded with inputs, expected, actual, and pass/fail; failures are documented and resolved before release.

---

## Step 6: Control records, audit trail, and Part 11 obligations

If the tool creates or modifies a GxP electronic record, Part 11 and Annex 11 attach to the output, not just the code.

- **Audit trail.** If the script's output is the official record, you need to know who created it, when, with which version, and from which data. Stamping the output with the tool version (commit hash), the run timestamp, the operator, and a hash of the input data gives you a practical, defensible audit trail. Where the tool merely visualizes data that remains authoritative in a validated source system, the source system's audit trail governs. See [audit trail design and review](/articles/audit-trail-design-and-review).
- **Source data is read-only.** A GxP analytic should read from the controlled source and never write back to it or alter the original. Preserving the original is the heart of [static and dynamic records and true copies](/articles/static-dynamic-records-true-copies). If the tool produces a derived result, the derivation and the source must both be retrievable.
- **Access control.** Who can run the tool, who can change it, and who can change the environment must be defined and restricted, with logical separation between author and approver where feasible. See [electronic signatures implementation](/articles/electronic-signatures-implementation) if the output requires signing.
- **Retention and archival.** The code, the environment manifest, the test evidence, and the outputs are retained per the predicate-rule retention period. Archiving the container image or environment export alongside the code is what makes long-term reproducibility real. See [backup, restore, and disaster recovery validation](/articles/backup-restore-disaster-recovery-validation).
- **Data integrity over the lifecycle.** Map your tool against [the data lifecycle and metadata](/articles/data-lifecycle-and-metadata): creation, processing, review, reporting, retention, and retrieval.

**Acceptance criteria for step 6:** output is attributable and reproducible to a specific code version and input; the source record is never altered; access to run/change the tool and its environment is controlled; and code, environment, tests, and outputs are retained for the required period.

---

## Step 7: Release, operate, and maintain

Validation is not a one-time event. The hardest part of governing end-user computing tools is keeping them controlled after the first release.

- **Release statement.** A short summary report concluding the tool is fit for its intended use, listing the validated version, the environment, the tests performed, and any limitations, approved by the owner and QA. This is the [validation summary report](/articles/validation-summary-report-and-release) scaled to the tool.
- **Operate from the controlled location.** Users run the tagged, validated version from the controlled environment, not a personal copy.
- **Change control.** Any change to the code, the calculation, or the environment (including a library upgrade) goes through [change control for validated systems](/articles/change-control-validated-systems): assess impact, re-review, re-test what the change could affect, re-tag, update the release statement. The Git history plus the change record is your evidence chain.
- **Periodic review.** On a defined cycle, confirm the tool is still in use, still correct, still on a supported environment, and that no undocumented changes crept in. See [validation master plan and periodic review](/articles/validation-master-plan-and-periodic-review) and, for the broader register, [retroactive validation of legacy systems](/articles/retroactive-validation-legacy-systems) for the inevitable backlog of pre-existing scripts.
- **Decommissioning.** When a tool is retired, record it, archive the code, environment, and outputs, and ensure nothing downstream still depends on it.

**Acceptance criteria for step 7:** an approved release statement exists; only the validated version runs in production; every change is controlled and re-tested; periodic review confirms continued fitness; and an inventory of all GxP scripts/notebooks/dashboards is maintained and current.

---

## Roles and responsibilities

The author-is-the-user problem makes role separation harder and more important. Define it explicitly.

| Role | Responsibility |
|------|----------------|
| **Tool owner / author (SME)** | Writes the code, drafts the specification and intended use, runs the tool in production, requests changes, owns correctness of the science/logic. |
| **Independent reviewer (peer)** | Performs the documented code review; must be a different qualified person from the author. Often a peer scientist, statistician, or data engineer. |
| **Validation / CSV lead** | Defines the risk-based approach, ensures the right deliverables exist at the right depth, owns the lifecycle and traceability. |
| **QA** | Approves the risk classification and release; confirms change control, audit trail, and data integrity controls; reviews during inspections. Does not need to read the code line by line but must confirm the controls are real. |
| **Statistician (for statistical tools)** | Independently verifies the method and the math; this is often the most important reviewer for CPV, stability, and DOE tools. |
| **IT / platform owner** | Qualifies and maintains the infrastructure (analytics server, cloud workspace, Power BI service, container platform), manages access, backup, and the controlled environment. |
| **Data owner** | Owns the source GxP data the tool consumes; confirms the source is the system of record and that the tool reads it correctly. |

The hard rule: the person who wrote the logic cannot be the only person who attests it is correct. If you have one person who writes, reviews, runs, and signs, you have no independent control, and that is precisely what an inspector probes. See [GxP roles and responsibilities](/articles/gxp-roles-responsibilities).

---

## Common mistakes and inspection-finding patterns

These are the patterns that recur, stated generically.

- **The shadow inventory.** No one knows how many GxP scripts and dashboards exist, who owns them, or which are validated. The first thing a good inspector or internal auditor does is ask for the inventory; not having one is itself a finding and a [data integrity program](/articles/di-program-architecture) gap.
- **"It's just a script, so it doesn't need validation."** The tool's status (homegrown, small, low-code) does not determine scope. Its intended use does. A 20-line script feeding a release decision is high risk.
- **Self-review only.** The author tested their own code, found it correct, and used it. No independent review, no documented evidence.
- **Output cannot be reproduced.** Asked to regenerate a submission table, the team gets a different number because the code and libraries changed and the original version was never tagged or archived.
- **Notebook output does not match the code.** Cells run out of order or edited after running; the saved plot was never produced by the saved code. A reviewer who reruns the notebook gets a different result.
- **Silent library drift.** No pinned dependencies; the environment changed under the tool and last month's validated behavior is gone, undocumented.
- **Uncontrolled change.** The author "improved" the logic between two runs with no change record, so two batches were dispositioned with different math.
- **Hard-coded values.** A constant, a date cutoff, or a spec limit baked into code that should be a controlled parameter, quietly wrong when conditions change.
- **Dashboards that drop or double-count rows.** A join, filter, or row-level-security rule silently excludes or duplicates records, so the trend the QA lead reviews is built on an incomplete dataset. This is an [audit-trail and completeness](/articles/operationalizing-audit-trail-review) failure even though the chart looks fine.
- **Writing back to the source.** A script that "cleans" and overwrites the original data, destroying the original and breaching [ALCOA+ in detail](/articles/alcoa-plus-deep-dive).
- **Running on personal laptops.** No access control, no backup, no reproducibility, and the tool disappears when the person leaves.
- **Over-validation as avoidance.** Forcing a trivial calculation through a heavyweight IQ/OQ/PQ so the team avoids ever building useful tools. The CSA guidance exists specifically to prevent this; right-size, do not abandon.

---

## Interview-ready: questions and strong answers

**"A scientist wrote a Python script that calculates a result feeding the annual product review. Walk me through how you would bring it under control."**
Classify its risk by intended use (feeds a GxP conclusion, so high). Write a short specification of intended use, inputs, calculation, rounding, outputs, and error handling. Put the code in version control, tag the validated version, and require an independent code review by a second qualified person, documented. Pin the language and library versions and run it in a controlled environment on qualified infrastructure. Test it against an independent reference calculation plus boundary and error cases, with recorded evidence scaled to risk per the FDA CSA guidance. Stamp the output with the version and inputs so it is reproducible and attributable. Approve a brief release statement and bring future changes through change control. Add it to the GxP tool inventory.

**"What is the regulatory basis for validating a homegrown script? There's no clause that says 'validate Python.'"**
It comes from the general requirements applied to a computerized system: 21 CFR 211.68(b) requires controls over computers and accuracy checks on input and output; Annex 11 requires risk-based validation of computerised systems and protection of data; Part 11 attaches if the output is an electronic GxP record. GAMP 5 classifies bespoke code as category 5, the highest rigor, and the FDA's 2022 Computer Software Assurance guidance tells you to scale assurance to risk. The tool being small or homegrown does not exempt it.

**"What is the single most common gap you see with these tools?"**
No version control and no independent review, which together mean you cannot reproduce a past result or prove a second person confirmed the math. Closely behind it: no inventory, so nobody even knows the tools exist.

**"How does Computer Software Assurance change how you'd test a script versus the old CSV approach?"**
CSA lets me scale the rigor to risk and use unscripted or targeted testing where risk is low, instead of forcing every tool through full scripted IQ/OQ/PQ. For a high-risk calculation I still do scripted testing and independent verification; for a medium-risk dashboard I do targeted, documented testing of each measure. The effort goes where the patient-safety and product-quality risk is, and the documentation is evidence of assurance, not paperwork for its own sake.

**"Why is a Jupyter notebook riskier than a plain script?"**
Because the displayed output and the code can drift out of sync: cells can be run out of order or edited after running, so what you see on screen may never have been produced by the code shown. The control is to restart and run top to bottom (or execute it non-interactively) and save the executed notebook as the record, so the output provably came from the saved code.

**"A library you depend on released a new version. What do you do?"**
Treat it as a change. Assess whether the update could affect the computed result (rounding, a statistical default, a numerical method), re-run the regression test cases in the new pinned environment, and only re-tag the environment as validated if results are unchanged or the change is understood and accepted. Until then, production keeps running the previously validated, pinned environment.

**"How do you prove the number in last year's submission is correct today?"**
By tagging the exact code version that produced it, pinning and archiving the environment (ideally as a container image or environment export), retaining the input data or a hash of it, and stamping the output with version and inputs. Reproducibility is built in, not reconstructed after the fact.

**"How do you keep these tools controlled without smothering the scientists?"**
Standardize the easy path: a shared repository with templates, a controlled analytics environment, a unit-test framework, and a lightweight risk-based procedure so doing it right is the default. Right-size the rigor to risk so trivial tools stay light and high-risk tools get real scrutiny. The goal is a controlled environment people actually want to use, not a process they route around.

---

## Practical tips

- **Build the inventory first.** You cannot govern what you have not found. A simple register (tool, owner, GxP use, risk class, validated version, location) is the foundation and the first thing an auditor asks for.
- **Make the controlled path the easy path.** A shared Git repo, project templates, a controlled analytics server or container, and a test-suite skeleton. If the compliant route is more convenient than a laptop, people use it.
- **Stamp outputs with provenance.** Version, timestamp, operator, and input hash in every GxP output. It turns "trust me" into "here is the evidence."
- **Use "Restart and Run All" as a hard rule for notebooks**, or execute them non-interactively so saved output provably matches saved code.
- **Pin everything and archive the environment.** A container image or environment export beside the code is the cheapest insurance against silent drift.
- **Let the statistician own the math.** For any statistical tool, an independent recomputation in a different tool is the strongest single piece of test evidence you can produce.
- **Do not write back to source.** Read-only access to the system of record protects the original and keeps you out of the worst integrity findings.

---

## Related reading

- [GAMP 5 and the CSV framework](/articles/gamp5-csv-framework)
- [Computer Software Assurance (FDA)](/articles/computer-software-assurance-fda)
- [CSV risk assessment methodology](/articles/csv-risk-assessment-methodology)
- [Infrastructure qualification and spreadsheet validation](/articles/infrastructure-qualification-and-spreadsheet-validation)
- [Agile and DevOps approaches to CSV](/articles/agile-devops-csv)
- [Change control for validated systems](/articles/change-control-validated-systems)
- [Data integrity foundations](/articles/data-integrity-foundations)
- [ALCOA+ in detail](/articles/alcoa-plus-deep-dive)
- [Static and dynamic records and true copies](/articles/static-dynamic-records-true-copies)
- [Validating AI in GxP systems](/articles/validating-ai-gxp-systems)
- [Validation summary report and release](/articles/validation-summary-report-and-release)
