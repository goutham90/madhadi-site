---
title: "Validating Custom Software: GAMP Category 5 from Specification to Release"
description: "A technical execution guide for GAMP Category 5 custom system validation in pharma and biotech: full V-model deliverables, code review requirements, white-box and black-box testing, real-time simulation testing, worked examples for a bioassay script and a bioreactor monitoring system, and the 483 findings that take teams by surprise."
pubDate: 2026-06-27
tags: ["CSV", "GAMP", "validation", "category-5", "custom-software", "GxP", "computer-software-assurance", "white-box-testing", "unit-testing"]
pillar: "csv-csa"
tier: "Advanced"
---

Custom software is the hardest thing to validate in a regulated environment, and the category of system that produces the most inspection findings. A configured commercial platform (GAMP Category 4) comes with a vendor who has already tested the core functions at a scale no single site can match, a supplier assessment you can draw on, and a change control record that is the vendor's problem until you modify something. A custom system (Category 5) carries none of those advantages. Every function was written specifically for you, by your team or a contractor you managed, with no external user community shaking out the bugs. If the algorithm is wrong, the calculation is wrong. If the alarm logic misfires, the batch event goes undetected. If the audit trail was coded incorrectly, the record is legally defective.

This page walks through the full validation lifecycle for GAMP 5 Category 5 systems, from the concept of what "custom" actually means in practice through every deliverable in the specification and verification phases, with worked examples for two real system types: a custom Python potency calculation script and a real-time bioreactor batch monitoring application. The second example includes a real-time simulation testing approach, which is the correct method when you cannot rely on live production conditions to exercise every risk scenario during validation. The article also covers hybrid cases, change control, and the findings that appear most often in FDA 483 observations for Category 5 systems.

For readers who want the full GAMP 5 framework first, the [GAMP 5 CSV framework article](/articles/gamp5-csv-framework) covers the category system, the V-model, and how risk-based validation works across all categories. The [CSV risk assessment methodology article](/articles/csv-risk-assessment-methodology) covers the FMEA process for scoping what to test. This article picks up where those leave off.

---

## What Makes a System Category 5

The defining characteristic of a Category 5 system is that code was written or substantially modified for your use, rather than used as-is or configured without code changes. The category is broader than it appears, and teams frequently miscategorize systems at both ends.

**The Category 5 spectrum in practice:**

At the simpler end: a Python script that processes bioassay plate-reader exports and calculates relative potency using a 4-parameter logistic curve fit. Nobody else uses this exact script. The algorithm is yours. If the curve-fitting logic is wrong, your potency results are wrong. This is Category 5 even though the file is 200 lines long.

In the middle: a custom LIMS module that handles the sample chain-of-custody workflow for a cell banking program, built by a contractor on top of a commercial LIMS platform. The LIMS vendor's core code is Category 4. The custom module is Category 5 and must be treated as such, separately.

At the more complex end: a bespoke web application built in Python (Django) that collects batch manufacturing parameters from operators in real time, stores them in a relational database, generates the batch record, and triggers electronic release workflows. This system touches product disposition. The validation scope is large, the risk is high, and the full lifecycle treatment is mandatory.

**The hybrid case: custom code inside a Category 4 platform.** This is the most common miscategorization. A team validates a commercial MES or LIMS to Category 4 standards and then adds a custom Python integration layer, custom macros in the report generator, or custom SQL logic in the data extract. Those additions are Category 5 components running inside a Category 4 shell. The Category 4 validation covers the vendor's functions. The custom components need their own specification, code review, and testing evidence. Not separating them is a finding.

**What Category 5 does NOT mean:** Category 5 does not mean "harder to use" or "more complex interface." A system can be very complex and still be Category 4 (a fully configured ERP touching manufacturing) or relatively simple and still be Category 5 (a short script running a GxP calculation). Category follows the presence of custom code, not the system's operational complexity.

---

## Regulatory Anchors

The regulatory basis for Category 5 validation is the same as for all GxP computerized systems, but several requirements press harder on custom systems because the uncertainty is higher.

**21 CFR 211.68** (Automatic, mechanical, and electronic equipment) requires documented evidence that automated equipment used in drug manufacturing is accurate, reliable, and functions consistently. For a custom system making a calculation that informs a batch disposition decision, that evidence must include proof that the algorithm produces correct results across the range of inputs it will encounter.

**21 CFR Part 11, Section 11.10(a)** requires validation of systems that create or modify GxP electronic records to demonstrate that the system is accurate, reliable, and performs consistently as intended, and that invalid or altered records can be identified. Custom systems, which have no pre-existing supplier validation evidence to draw on, must generate this assurance themselves.

**EU GMP Annex 11** (Computerised Systems, 2011) requires that the depth of validation be proportionate to the risk associated with the system, whether it operates as a standalone application or connected to other systems. Custom systems have inherently higher uncertainty than configured software and therefore require the deeper validation treatment. Annex 11 also requires that software development processes for custom software operate under documented controls. This is the basis for coding standards, code review, and version control requirements.

**ISPE GAMP 5 Second Edition (2022)** is explicit that Category 5 requires the full lifecycle approach: complete user and functional requirements, design documentation, source code management, code review, unit testing, and structural testing, in addition to the functional testing tiers that all categories share. The second edition preserves this requirement while adding support for iterative and agile delivery patterns within the lifecycle.

**FDA Computer Software Assurance guidance (final, September 2025)** applies to all GxP software and emphasizes critical thinking over documentation volume, but it does not lower the evidence bar for high-risk functions. A custom system calculating a release criterion or controlling a GxP process is a high-risk function by definition. The evidence must be there; the question is whether it is generated efficiently.

---

## The Category 5 Lifecycle: A Full V-Model

The V-model maps each specification deliverable on the left arm to a corresponding verification activity on the right arm. For Category 4 systems, the left arm starts at the user requirements and functional specifications; the design is the vendor's. For Category 5, the left arm extends further down: you own the design, you own the code, and you must specify and verify both.

<div class="flow-v">
<div class="flow-step"><strong>User Requirements Spec (URS)</strong><br>What the system must do, in user terms</div>
<span class="flow-arrow">&darr;</span>
<div class="flow-step"><strong>Functional Specification (FS)</strong><br>What functions satisfy each URS requirement</div>
<span class="flow-arrow">&darr;</span>
<div class="flow-step"><strong>Design Specification (DS)</strong><br>Architecture, algorithms, data model, interfaces</div>
<span class="flow-arrow">&darr;</span>
<div class="flow-step"><strong>Coding Standards + Configuration Management</strong><br>How code is written, reviewed, and controlled</div>
<span class="flow-arrow">&darr;</span>
<div class="flow-step"><strong>Development + Unit Testing</strong><br>Code written and tested at the component level</div>
</div>

The right arm mirrors this:

<div class="flow-v">
<div class="flow-step"><strong>PQ / UAT</strong><br>End-to-end proof the system meets URS in real use</div>
<span class="flow-arrow">&uarr;</span>
<div class="flow-step"><strong>OQ</strong><br>Function-by-function testing per FS, including boundaries and errors</div>
<span class="flow-arrow">&uarr;</span>
<div class="flow-step"><strong>IQ</strong><br>Verified installation: correct version, environment, dependencies</div>
<span class="flow-arrow">&uarr;</span>
<div class="flow-step"><strong>Integration Testing</strong><br>Component interfaces tested against DS</div>
<span class="flow-arrow">&uarr;</span>
<div class="flow-step"><strong>Unit Test Records</strong><br>Component-level testing against DS function specs</div>
</div>

Every connection between a left-arm deliverable and its right-arm counterpart must be traceable. The Requirements Traceability Matrix (RTM) is not optional for Category 5. It is the evidence that no requirement was left untested.

---

## Left Arm: Specification Deliverables

### User Requirements Specification (URS)

The URS is the user's voice, written before the system exists, describing what it must do without specifying how. For a custom system, this document is especially important because it is the only place where business need and technical solution are compared before money is spent. A URS written after the system is already partly built is always rationalized.

Write URS requirements in testable form: "The system shall..." followed by a measurable outcome. Untestable language ("The system shall be user-friendly," "The system shall process data quickly") cannot appear in the RTM, and it will be noted at inspection.

URS requirements for a Category 5 system should address:
- The business function the system performs and which GxP activities it supports
- The categories of users and what they can and cannot do
- Input data formats, sources, and validation rules
- Output data formats, destinations, and retention requirements
- Performance requirements (response time, throughput, availability) where GxP-relevant
- Data integrity requirements (audit trail, electronic signatures, record completeness)
- Interface requirements with other systems
- Environmental constraints (operating system, infrastructure dependencies)

One URS requirement per test. If two requirements always test together, combine them. If one requirement needs three test cases (normal, boundary, error), that is one requirement, three test cases.

### Functional Specification (FS)

The FS takes each URS requirement and specifies the function that satisfies it. For custom software, the FS must describe the system's behavior in enough detail that a developer can write code from it without guessing. Ambiguous FS requirements produce systems that technically pass every test but do not do what users expected.

Each FS section maps to one or more URS requirements (the RTM left-to-right link). The FS also defines:
- Normal, boundary, and error behavior for every function
- The audit trail entries the function generates (exact field content, triggering events)
- Access control rules (which roles can execute the function)
- Handling of concurrent access (what happens if two users invoke the same function simultaneously)
- Data validation rules (range checks, format checks, referential integrity)

The FS is signed by the system owner and by the development team before coding starts. This signature is not ceremonial. It is the agreement on what will be built, and it is the document that determines whether change control is needed if requirements shift during development.

### Design Specification (DS)

The DS is the deliverable that distinguishes Category 5 from every other category. Nobody in a Category 4 validation writes the design, because the vendor owns it. In Category 5, you do.

A DS for a GxP custom system must cover:

**System architecture:** A description of the system's components and how they interact. Include a component diagram or block diagram showing each module, its purpose, and the data flows between modules. The level of detail should be enough to understand why the system is structured the way it is and where the boundaries are between components.

**Data model:** The structure of every data entity the system creates, reads, updates, or deletes. For a database-backed application, this means the table schema with field names, data types, constraints, and foreign key relationships. For a flat-file system, the file format specification. The data model is where you identify which fields carry GxP-critical data and must be protected from unauthorized modification.

**Algorithm specification:** For any calculation the system performs (potency, yield, concentration, statistical result, limit check), the algorithm must be specified mathematically, step by step, before the code is written. "See the code" is not an algorithm specification. The specification must be independently verifiable: given the same inputs, an inspector or independent reviewer should be able to work through the algorithm on paper and confirm the output matches the system's result. This is the primary target of white-box testing.

**Interface specification:** Every external interface (data from instruments, data to other systems, user interface data entry points, API calls) must be specified: protocol, data format, authentication method, error handling on connection failure, and what the system does when the external endpoint is unavailable.

**Security design:** User roles, access permissions per role, authentication method (password, SSO, certificate), session timeout, failed-login lockout. This is not an IT document; it is a GxP requirement that governs who can perform GxP functions and whose actions appear in the audit trail.

**Error handling:** For every exception path (invalid input, database write failure, external system unavailable, calculation that produces an undefined result), the DS must specify what the system does: which error it raises, what it writes to the log, whether it proceeds or halts, and what the user sees.

**Configuration parameters:** Any value that controls system behavior but is not hardcoded (alarm limits, file paths, connection strings, timeout values) must be listed with its allowable range, its default, and where it is stored. Hard-coded values that should be configuration parameters are a common DS deficiency and a recurring change-control problem.

### Coding Standards Document

For a Category 5 system, the team must adopt a coding standard before writing code, and the code review must verify conformance to it. The coding standard does not need to be long, but it must address:

- Language version and approved libraries (and which libraries are prohibited)
- File and module naming conventions
- Variable and function naming conventions (meaningful names; single-letter variables only in clearly bounded loops)
- Required header comment in every file (purpose, author, date, version)
- Commenting requirements for non-obvious logic
- Prohibition on hardcoded credentials, connection strings, and limit values
- Error handling pattern (try/except structure, what must be caught vs. allowed to propagate)
- Logging requirements (what events must be logged, with what fields, to what target)
- Input validation requirements (every external input must be validated before use)
- Unit test requirements (minimum coverage expected, framework to use)

The coding standard does not need a full SOP wrapper for a small project, but it must be a documented, approved artifact, not a verbal agreement.

### Configuration Management Plan

All source code, configuration files, test data, and build scripts for a Category 5 system must be under version control from the first commit. The configuration management plan (which can be a section of the VMP rather than a standalone document) defines:

- The version control system in use and the repository location
- Branching and tagging conventions (what constitutes a tagged release)
- Who can commit to which branches
- The build procedure: how source code at a specific tag is converted into the deployed artifact
- The relationship between version tags and validated system versions
- The process for restoring a prior version
- Where test data and test scripts live (also under version control)

A system where the code that runs in production cannot be matched to a specific, retrievable version in source control is unvalidatable. If the investigator asks "show me the code that was running when this batch was processed," you must be able to produce it. Version control with tagged releases is how you do that.

---

## Development Phase: Code Review and Unit Testing

### Code Review

Code review for a GxP Category 5 system is not a peer feedback exercise. It is a documented verification activity. The reviewer did not write the code, confirms that, signs the review record, and is accountable for what the record says.

**What a GxP code review covers:**

1. **Algorithm correctness.** Does the code implement the algorithm specified in the DS? For every calculation, work through the code manually against the algorithm spec and confirm they match. Discrepancies between the DS and the code are defects in one or the other; determine which and raise a change.

2. **Error handling completeness.** Does every identified exception path in the DS have corresponding code? Are there exception paths in the code that are not in the DS? Unhandled exceptions that cause a silent failure (the function returns a result as if it succeeded, but it did not) are the most dangerous class of error in GxP software.

3. **Audit trail correctness.** Is every event that the DS says must be logged actually being logged? Are the right fields being captured (timestamp source, user identity, action taken, before and after values for changes)? Is the log target a write-once or append-only store, or can the code overwrite a prior entry?

4. **Input validation.** Is every external input validated before use? Is there protection against injection (SQL, command, path traversal) at input boundaries? Are numeric inputs range-checked before being used in calculations that would produce a nonsense result outside the expected range?

5. **Hard-coded values.** Are there values in the code that belong in configuration (alarm limits, file paths, connection strings, magic numbers in calculations)? Hard-coded thresholds are a change-control problem that repeats across every maintenance cycle.

6. **Coding standard conformance.** Does the code follow the naming, commenting, error-handling, and logging patterns the standard requires?

The output of a code review is a signed record listing: what was reviewed (file names, version/commit), who reviewed it (name, role, date, signature), the findings (each finding numbered, with the file/line reference, the issue, and the required change), and the disposition (open or resolved). Findings must be dispositioned before the code enters OQ.

### Unit Testing

Unit tests for GxP software test individual functions or modules in isolation, before integration. Unit tests do not replace OQ; they catch defects early, when they are cheapest to fix, and their records form part of the validation package.

For a GxP custom system, unit tests must be documented (not just run), and the records must show:
- What function was tested
- The test inputs
- The expected output, derived from the DS algorithm specification
- The actual output
- Pass or fail

For algorithmic functions (potency calculations, yield calculations, statistical computations), unit tests must include:
- Normal cases with known-answer synthetic inputs (inputs where you computed the correct answer independently before running the test)
- Boundary cases (minimum valid input, maximum valid input, zero, negative values where the algorithm must handle or reject them)
- Invalid cases (inputs that should raise an error, confirming the error is raised correctly)

A unit test suite where every test passes with the same input on every run is not evidence. Unit tests must be designed to fail when the logic is wrong. If you cannot construct an input that causes a wrong implementation to fail a test, the test is not discriminating.

---

## Right Arm: Verification Phase

### Installation Qualification (IQ)

IQ for a custom system verifies that the software is installed correctly in the target environment. This is less about hardware (as it would be for equipment) and more about software environment integrity.

IQ for a custom software system should verify:
- The software version deployed matches the validated version (file hash or version string against the configuration management record)
- All required dependencies are present at the correct versions (Python interpreter version, libraries, database version, OS patch level)
- The database schema matches the DS (table structures, constraints, indexes)
- Configuration parameters are set to their specified values
- Access controls are active (users, roles, permissions match the DS)
- The system clock is synchronized to a controlled time source and verified
- Audit trail storage is accessible and writable, and a test entry confirms the trail is functioning
- Backup procedures are in place and tested

Every IQ check must have an expected result documented before the check is run. "Verified by observation" with no expected result is not an IQ check.

### Operational Qualification (OQ)

OQ tests the system's functions against the Functional Specification. For a Category 5 system, OQ includes both black-box testing (testing functions from the outside, verifying inputs produce the correct outputs) and structural (white-box) testing (testing that the code's internal paths execute correctly).

**Black-box testing (functional):** Each FS requirement gets at least one test case. Higher-risk functions get more. For every function under test, execute:
- The normal case (typical valid inputs, verify the expected output and any expected audit trail entry)
- At least one boundary case (inputs at the edges of the valid range)
- At least one error case (invalid input, confirm the function raises the specified error and does not produce a partially complete result)

**White-box testing (structural):** Run the system with test inputs selected to execute every branch of the critical algorithm code. Verify that:
- Every conditional branch (if/else, try/except) is exercised at least once by some combination of test cases
- Every error handler runs at least once and produces the correct behavior
- The algorithm produces the correct result for inputs derived from independent calculation (not from running the code itself)

**Boundary value analysis:** For every numeric parameter the system accepts, test at the minimum valid value, the maximum valid value, one value below the minimum (expect rejection), and one value above the maximum (expect rejection). For string fields, test at minimum length, maximum length, and empty. These tests frequently find off-by-one errors in validation logic that normal testing misses.

**Concurrent access testing:** If more than one user can use the system simultaneously, test concurrent access to GxP functions. Specifically: two users submitting the same record simultaneously (verify only one succeeds or the system serializes correctly); one user reading a record while another modifies it (verify the reading user sees a consistent state); and session timeout (verify a session that exceeds the timeout period is terminated and re-authentication is required).

### Performance Qualification / UAT

PQ (or UAT) tests the system against the URS in the operational environment, following the actual procedure, with real (or representative) data and trained operators. For a custom system, PQ is the final check that everything assembled correctly: the algorithm that was unit-tested now runs inside the full application, with the real database, the real interface, and the real user workflow.

PQ test cases are procedural, not function-by-function. A PQ test case for a potency calculation system might read: "Operator loads the plate reader export file for Lot 123-A, runs the analysis, reviews the output report, and approves it. Verify the potency result is within the acceptance criteria, the report is generated with the correct lot number and timestamp, and the audit trail shows the operator's approval with the correct electronic signature date."

---

## Worked Example 1: Custom Bioassay Potency Calculation Script

**System description:** A standalone Python script (`rp_calc.py`) that reads a CSV export from a microplate reader, fits a 4-parameter logistic (4PL) model to the reference standard curve and to each sample curve, and calculates the relative potency of each sample as the ratio of EC50 values. The script generates a PDF report and appends a summary record to an audit log file. This script is used to determine the potency of biologic drug substance lots before release.

**GxP classification:** GAMP Category 5 (custom code performing a GxP calculation that informs batch disposition). High risk: an error in the algorithm could release a non-conforming lot or hold a conforming one.

---

### URS excerpt

| ID | Requirement |
|----|-------------|
| URS-001 | The system shall accept a comma-separated input file with headers: Well, SampleID, Concentration_ngmL, OD450. |
| URS-002 | The system shall fit a 4-parameter logistic model to the reference standard wells and report the fit quality as R-squared. |
| URS-003 | The system shall calculate the relative potency of each sample and report it as a percentage. |
| URS-004 | The system shall reject calculations where the R-squared of the reference standard curve fit is below 0.99 and report the reason. |
| URS-005 | The system shall generate a PDF report containing the curve plots, R-squared values, relative potency results, and acceptance criteria status. |
| URS-006 | The system shall append a log record to a designated audit file containing: timestamp (UTC), operator name (from login), input filename, lot numbers processed, results summary, and pass/fail status. |
| URS-007 | The system shall not overwrite, modify, or delete prior log records. |

---

### DS excerpt: Algorithm specification (FS-002, FS-003)

The 4PL model is defined as:

**y = D + (A - D) / (1 + (x / C)^B)**

where: A = minimum asymptote (OD at zero concentration), B = Hill coefficient (slope), C = EC50 (concentration at midpoint), D = maximum asymptote (OD at saturation).

**Fitting procedure:** Parameters A, B, C, D are estimated by nonlinear least-squares optimization using scipy.optimize.curve_fit with initial estimates: A = min(OD), D = max(OD), C = geometric mean of concentrations, B = 1.0. The optimization terminates when parameter updates fall below 1e-8 relative change or after 10,000 iterations, whichever comes first.

**R-squared calculation:** R² = 1 - (SS_res / SS_tot), where SS_res = sum of squared residuals between observed OD and fitted values, and SS_tot = sum of squared deviations of observed OD from the mean. If R² < 0.99, the calculation terminates with error code ERR-001 and message "Curve fit quality insufficient: R²=[value], minimum required 0.99."

**Relative potency calculation:** For each sample, a 4PL curve is fit using the same procedure. Relative potency (RP) is calculated as: RP (%) = (EC50_reference / EC50_sample) × 100. The parallelism check requires that the Hill coefficient B of the sample curve fall within 20% relative difference from the reference B value; if not, RP is flagged as UNVERIFIED with code WARN-001.

---

### OQ test case table (selected)

| TC-ID | Function tested | Input | Expected result | Pass/Fail |
|-------|----------------|-------|-----------------|-----------|
| TC-OQ-001 | 4PL curve fit, normal | Synthetic standard curve: known EC50 = 10.0 ng/mL, R² = 0.998 | EC50 within 10.0 ± 0.5, R² reported as ≥0.99, no error | |
| TC-OQ-002 | Relative potency, known answer | Reference EC50 = 10.0, Sample EC50 = 12.5 (expected RP = 80%) | RP reported as 80 ± 2% | |
| TC-OQ-003 | R² rejection | Synthetic noisy data producing R² = 0.95 | ERR-001 raised, no potency value calculated, PDF not generated | |
| TC-OQ-004 | Parallelism flag | Sample Hill coefficient 0.5, reference 1.0 (50% relative difference) | RP calculated but flagged WARN-001 | |
| TC-OQ-005 | Input validation: missing column | CSV without OD450 column | Error raised, message cites missing column name, no crash | |
| TC-OQ-006 | Audit log: append-only | Run analysis twice on same file | Log contains two records; first record unmodified | |
| TC-OQ-007 | Audit log: timestamp | Run analysis, check log | Timestamp in log is UTC, within 60 seconds of wall-clock time | |
| TC-OQ-008 | White-box: zero OD values | All OD values = 0 | ERR raised before curve fit attempt; no divide-by-zero exception propagates to user | |

The known-answer test cases (TC-OQ-001, TC-OQ-002) are the most important white-box checks. The expected values are computed independently using a spreadsheet 4PL solver before the test is run, and the pre-registered tolerance (±0.5 for EC50, ±2% for RP) is documented before execution. If the script's result matches the pre-computed value within tolerance, the algorithm is verified. If it does not, the discrepancy must be investigated before the script is released.

---

## Worked Example 2: Custom Real-Time Bioreactor Monitoring System

**System description:** A custom Python web application (`BioMonitor`) that polls a process historian every 30 seconds for pH, dissolved oxygen (DO), temperature, and agitation speed from an upstream bioreactor train. The system compares each reading against action limits and alert limits, triggers email notifications on exceedances, logs all readings to a PostgreSQL database with timestamps, provides a real-time trend interface to operators, and generates end-of-batch trend summaries. This system runs throughout a 14-day fed-batch cell culture process and its records are part of the batch record.

**GxP classification:** GAMP Category 5, high risk (real-time monitoring of a critical cell culture process; missed alarms or missed data could result in an undetected process deviation that affects product quality).

---

### Why live production testing is insufficient for real-time systems

Testing a real-time monitoring system only under live production conditions is not a viable validation strategy for two reasons. First, you cannot control which conditions occur during validation runs: you need the system to encounter a pH exceedance, a historian outage, a midnight rollover, and a burst recovery, but a normal batch may never produce all of these within the validation timeline. Second, some failure modes (sensor dropout, concurrent alarm conditions, database write failure) cannot be reproduced predictably on a live bioreactor without risk to the batch.

The correct approach is a **real-time simulation test harness**: a separate piece of software that presents the same API as the process historian, but returns pre-scripted sequences of readings instead of live data. The test harness is not itself validated to the same depth as the GxP system (it is a test tool), but it must be controlled: its version, the test scripts it executes, and its outputs must be recorded in the OQ protocol package. Each test scenario is documented as a numbered test script that specifies the exact sequence of readings the harness injects and the expected system response to each.

---

### Real-time simulation test scenarios

**SC-01: Normal operation, 15-minute steady-state**
Harness injects 30 readings at 30-second intervals. All values within normal operating range: pH 7.15-7.25 (action limits 7.00-7.40, alert limits 6.90-7.50), DO 55-65% (action limit >30%, alert limit >20%), Temp 36.8-37.2°C (action limits 36.5-37.5°C), Agitation 148-152 rpm.
Expected: 30 database records written, each with the injected values and timestamps; no alarm emails generated; trend view shows all 30 points; alarm dashboard shows no active alarms.

**SC-02: pH action limit exceedance, single reading**
After 10 normal readings, harness injects a single pH reading of 7.42 (action limit 7.40). Subsequent readings return to normal.
Expected: within 60 seconds of the exceedance reading's timestamp, an email notification is sent with subject line containing "pH ACTION LIMIT EXCEEDED" and the exact pH value; an ALARM record is written to the audit table with the timestamp, parameter, value, limit crossed, and the operator account used to acknowledge; the exceedance reading is stored in the trend data; subsequent normal readings do not trigger additional alarms.

**SC-03: DO alert limit approach and recovery**
Harness injects a sequence where DO decreases from 60% across 6 readings to 18% (alert limit 20%), then recovers to 45% across 4 readings.
Expected: alert notification triggered when DO crosses 20%; a CLEARANCE record written when DO returns to normal range; no duplicate alerts for the readings between first crossing and recovery; recovery notification sent within 60 seconds of the reading crossing back above the alert limit.

**SC-04: Historian unavailable, 5-minute gap, reconnection**
After 10 normal readings, the harness stops responding for 10 polling cycles (5 minutes), then resumes with the next expected readings.
Expected: after two consecutive failed polls, the system writes a DATA_GAP record to the audit table with the start time of the gap and reason "Historian connection failed"; the gap record remains open until connection resumes; upon reconnection, a GAP_END record is written with the end time and duration; no readings are fabricated for the gap period; the trend view shows the gap explicitly rather than interpolating; operators are notified of the gap.

**SC-05: Midnight rollover**
Harness injects readings with timestamps crossing 23:59:00 to 00:01:00 on a date boundary.
Expected: readings on both sides of midnight are assigned the correct date; no reading is dropped or duplicated at the rollover; daily trend summaries assigned to the correct calendar day; no error logged.

**SC-06: High-rate data burst (historian catch-up)**
Harness injects 500 readings in rapid succession (simulating a historian that reconnects and sends backlogged data at maximum rate).
Expected: all 500 readings stored with their original timestamps (not the receipt time); no readings dropped; no database constraint violations; no application crash or memory exhaustion; system continues normal polling after the burst resolves.

**SC-07: Concurrent alarm conditions**
Harness injects a reading where both pH (7.43) and temperature (37.52°C) exceed action limits simultaneously.
Expected: two separate alarm records written (one per parameter); two email notifications sent (or one combined, if the FS specifies combined); neither alarm suppresses or overwrites the other; both parameters appear independently on the alarm dashboard.

**SC-08: Alarm silencing**
Trigger an alarm on pH. An operator silences the alarm via the UI. The harness continues to inject pH values above the action limit.
Expected: the silence action is recorded in the audit trail with operator identity and timestamp; the alarm state transitions to SILENCED (not CLEARED); after the silence duration specified in the DS expires, the alarm re-fires if the condition persists; the re-alarm is recorded as a new alarm event.

**SC-09: Database write failure**
Harness injects a normal reading, but the database is made temporarily unavailable between the reading receipt and the write attempt.
Expected: the system does not silently discard the reading; it retries the write for the period specified in the DS; if retry exhausted, it writes to a local buffer and logs a DATABASE_WRITE_FAILURE audit event; upon database restoration, buffered readings are flushed with their original timestamps.

---

### Performance testing for real-time systems

Beyond the scenario tests, the OQ for a real-time monitoring system must include performance tests that verify the system functions correctly under the data volumes and durations it will actually encounter.

**Throughput test:** Inject readings at 1.5 times the maximum expected polling rate for a sustained 60-minute period. Verify no readings are dropped, no performance degradation (alarm latency remains under 60 seconds), and database write latency remains under the DS specification.

**Database growth projection test:** Populate the database with simulated 24 months of data (calculated from polling frequency and parameter count). Verify that query times for the trend view and batch summary reports remain within the UI performance requirements at that data volume.

**Session concurrency test:** With the database loaded as above, simulate 10 concurrent operator sessions all running trend queries simultaneously. Verify no session errors, no result corruption from concurrent reads, and no deadlock.

**Clock drift test:** Confirm that the system's timestamp source is synchronized to an NTP server, and verify that the difference between the application timestamp and the NTP server time does not exceed the DS tolerance (typically 1 second for batch record purposes) after 24 hours of operation.

---

## Hybrid Category 5: Custom Code Inside a Category 4 Platform

The most common real-world Category 5 scenario in pharma is not a fully standalone custom application. It is a configured Category 4 system with one or more custom components added by the site's team or a contractor.

**Common examples:**
- A commercial LIMS with a custom Python integration layer that pulls data from an instrument controller
- A commercial MES with a custom Crystal Reports extension that generates a calculated batch yield report
- A commercial electronic lab notebook with custom VBA macros that perform a statistical calculation at the point of result entry
- A commercial ERP with a custom SQL stored procedure that runs a batch decision workflow

In each case, the commercial platform's Category 4 validation covers the vendor's functions. The custom component requires separate Category 5 treatment: its own DS (even if short), code review, unit tests for the calculation or integration logic, and specific OQ test cases that exercise the custom code path.

The critical mistake is counting the custom component's testing as part of the Category 4 OQ. The Category 4 OQ tested the vendor's code. It says nothing about whether the custom logic is correct. These are separate validation scopes and must be traceable separately in the RTM.

When a Category 4 system receives a major upgrade from the vendor, assess the impact on each custom component: the custom code may depend on internal APIs that the vendor changed, and it may need re-testing even if the custom code itself did not change.

---

## Change Control for Category 5 Systems

Custom systems are particularly sensitive to change control failures because every change touches code you own. The two most common failure patterns:

**Pattern 1: Code change without formal change control.** A developer fixes a bug "quickly" and pushes the fix to the production server without a change request. The fix may be correct, but the validated state is broken because the running code no longer matches the validated version on record. At inspection, the system cannot be shown to be validated. This applies even to changes the team considers trivial.

**Pattern 2: Change control without adequate impact assessment.** A change request is raised and approved, the code change is made, but the impact on the rest of the system is not assessed. A change to the database schema breaks a report. A change to a shared utility function changes the behavior of three modules, only one of which was retested.

For a Category 5 system, every proposed change must include:
- A description of the code or configuration being changed, with file names and module references
- An assessment of which FS requirements are affected by the change
- A regression test plan: which existing OQ tests must be re-run to confirm the change did not break previously validated functions
- An assessment of whether the change requires updates to the DS (if the algorithm or architecture changes) or the FS (if functional behavior changes)
- Code review of the changed code (not the whole system, but the changed modules)
- Update of version tags in source control so the post-change deployed version is identifiable

For a minor change (a configuration parameter value change, a non-functional wording fix in a report), the evidence can be proportionally lighter. For a change to any algorithm, any data write path, or any audit trail logic, the evidence must be as rigorous as the original OQ for those functions.

For details on change control procedures for validated systems, see [change control for validated systems](/articles/change-control-validated-systems).

---

## Common 483 Findings for Category 5 Systems

These are the observations that appear most often in FDA inspections of sites using custom software, drawn from public 483 records and warning letters.

**"No design specification was found for the custom software."** The most frequent. Teams write a URS and an OQ protocol, skip the DS, and discover at inspection that there is no document specifying what the algorithm is supposed to do, making the OQ test cases untraceably sourced. The remediation requires reconstructing the DS from the code (which is always harder than writing it before coding) and re-performing the code review and white-box testing against it.

**"Algorithm testing relied on the system's own output to define expected results."** This is the circular-test finding. A team writes a test case that says "run the potency calculation and record the result," signs it off, and uses that result as the acceptance criterion on the next run. The calculation has never been independently verified. The expected result in every test case involving a calculation must be derived from a source other than the system being tested.

**"Source code version deployed in production cannot be traced to the validated version."** The code running on the server does not match any tagged version in source control, or there is no source control at all. Without the ability to produce the exact source code that generated a specific batch's records, those records cannot be fully authenticated.

**"Code review records were not found."** No documented evidence that a qualified person reviewed the code before OQ. In some cases, review records exist informally in email chains, which are not adequate as GxP records.

**"Unit test records were not found or do not show expected results."** Unit tests were run during development but the records either do not exist or show only "pass" with no expected value documented before the run. "Pass" without a pre-registered expected value is not objective evidence.

**"Change to the calculation algorithm was not subjected to change control or regression testing."** A developer made a correction to a formula after the initial OQ, did not raise a change request, and did not re-run the affected test cases. The system was in an unvalidated state for the production batches processed during that period.

**"System clock was not verified at IQ or during periodic review."** The application uses its own clock for timestamps, the clock drifted, and the audit trail timestamps are not accurate. Inaccurate timestamps on electronic GxP records are a data integrity finding, not just a validation finding.

---

## Interview Questions You Should Be Able to Answer

**What additional deliverables does Category 5 require compared to Category 4?**

Category 5 requires a Design Specification covering the system architecture, data model, algorithm specifications, interface specifications, security design, and error handling. It also requires coding standards, formal code review records, and unit test records. Category 4 validation draws on the vendor's design and the vendor's testing of core functions; Category 5 must generate all of that evidence internally.

**What is white-box testing and when is it required?**

White-box testing (or structural testing) exercises the code's internal logic rather than just its external behavior. In GxP validation, it is required for any custom algorithm where a bug in the code's internals could produce a wrong result that passes a surface-level test. For a potency calculation, white-box testing means verifying the algorithm step by step against an independently computed expected value, and running inputs designed to exercise every conditional branch in the calculation code. It is required for all Category 5 algorithmic functions.

**How do you validate a real-time monitoring system without disrupting production?**

You use a real-time simulation test harness: a controlled test tool that presents the same API as the live data source but injects pre-scripted test scenarios. The harness allows you to trigger specific conditions (limit exceedances, sensor dropouts, midnight rollovers, data bursts) that cannot be reliably reproduced on a production process without risk. The harness itself is controlled under a version number and its test scripts are documented in the OQ protocol.

**What is the difference between a Category 5 OQ and a unit test?**

Unit tests verify individual functions or modules in isolation, typically during development, and are often run automatically by a build system. OQ verifies the integrated system against the Functional Specification, including all integrated components, the real database, and the actual deployment environment. Unit tests are a required deliverable for Category 5 systems, but they do not replace OQ. The OQ tests the assembled system; unit tests test the parts.

**A developer made a one-line bug fix to a calculation script in production without a change request. What do you do?**

First, assess the impact: what did the line change do, which batches were processed with the uncontrolled version, and whether those batches' results were affected. Depending on the answer, a retrospective impact assessment and potentially a batch record note may be needed. The fix must then be brought under change control retrospectively: a change request raised, the change code-reviewed, regression tests run, and the source control record updated to reflect the fix. Any discrepancy between the running version and the validated version must be closed and documented. Going forward, the QA system must address the process failure that allowed the uncontrolled change.

**How do you handle a custom module added to a validated Category 4 LIMS?**

The LIMS's Category 4 validation scope does not cover the custom module. The module needs its own validation treatment: a DS for the custom functions, code review of the module, unit tests for any calculations, and OQ test cases that specifically exercise the custom code paths. The RTM for the LIMS must include entries for the custom module mapped to its own URS requirements. If the LIMS vendor upgrades the platform, the impact on the custom module's interfaces must be reassessed.

---

## Practical Tips

- Write the DS before coding starts, not during or after. The DS is what the code review checks against. A DS written after the code is always shaped by what the code does, which defeats the purpose.
- For any algorithm, compute at least three expected outputs manually (or using an independent tool) before writing a single test case. These are your OQ expected values. If you cannot independently compute the expected output, the function is not yet specified precisely enough to be validated.
- Keep test data in version control alongside the source code. The test data set used in OQ is as much a part of the validated state as the code. If test data changes, the test may no longer reproduce the original validation result.
- For real-time systems, design the test harness at the same time as the application, not after. The harness design reveals gaps in the interface specification and in the error-handling design while they are still cheap to fix.
- Tag every release in source control with the validation status (VALIDATED, DEV, DECOMMISSIONED) and the associated validation package reference. This makes it possible to answer "show me what was running in production on date X" without searching through change records.
- Do not accept "it was tested informally" as a substitute for unit test records. Informal testing produced no evidence. If it was not documented, it did not happen from a regulatory standpoint.
- Re-run white-box tests after any change to an algorithm, even a change described as "minor." A "minor" correction to a conditional in a calculation routine may change the result for specific input ranges that were not retested.

For the test protocol mechanics, see [writing validation protocols and reports](/articles/writing-validation-protocols-and-reports) and [validation test failure management](/articles/validation-test-failure-management). For the operational lifecycle after release, see [GxP computerized systems operations](/articles/gxp-computerized-systems-operations) and [change control for validated systems](/articles/change-control-validated-systems).
